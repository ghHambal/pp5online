import { getStats, getTeachers, getClasses, getStudents,
         getSystemConfig, updateSystemConfig, getMasterSubjects,
         getDepartments, getPeriods, createSubject,
         updateClass, deleteClass,
         updateStudent, deleteStudent,
         getHomeroomTeachers, upsertHomeroomTeacher, deleteHomeroomTeacher,
         getScoreColumnConfig, upsertScoreColumnConfig,
         getUniqueRooms, unlinkTeacherAccount,
         getSchoolHolidaysFull, upsertHoliday, deleteHoliday,
         getAllPaymentRequests, reviewPaymentRequest, approveTeacherQuota } from './api.js'
import { renderCourseForm, renderClassForm, renderClassEditForm, renderScoreColumns } from './teacher-views.js'
import { showToast, showPageLoader } from './ui.js'
import { openTeacherModal, handleDeleteTeacher,
         openSubjectModal, handleDeleteSubject,
         openDeptModal, handleDeleteDept,
         openPeriodModal, handleDeletePeriod } from './dashboard.js'
import { parseCSV, importTeachers, importStudents, buildPreviewHTML } from './import.js'
import { uploadSystemAsset } from './storage.js'

// ─── Filter helpers ───────────────────────────────────────────────────────────
function _grade(room) {
  if (!room) return ''
  const i = room.indexOf('/')
  return i > 0 ? room.slice(0, i).trim() : room.trim()
}
function _room(room) {
  if (!room) return ''
  const i = room.indexOf('/')
  return i > 0 ? room.slice(i + 1).trim() : ''
}
function _opts(arr) {
  return [...new Set(arr.filter(Boolean))].sort()
}
const SELECT_CLS = 'border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400'
const SEARCH_CLS = 'border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-400'

// ─── Shared helpers ───────────────────────────────────────────────────────────
function setActiveNav(viewName) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('bg-indigo-800', el.dataset.nav === viewName)
    el.classList.toggle('text-white', el.dataset.nav === viewName)
    el.classList.toggle('text-indigo-200', el.dataset.nav !== viewName)
  })
}

function setContent(html) {
  document.getElementById('main-content').innerHTML = html
}

// ─── View: Overview ───────────────────────────────────────────────────────────
export async function renderOverview() {
  setActiveNav('overview')
  document.getElementById('page-title').textContent = 'ภาพรวมระบบ'

  setContent(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-8 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">ยินดีต้อนรับเข้าสู่ระบบ ปพ.5 👋</h3>
      <p class="text-gray-500 text-sm">จัดการข้อมูลครู นักเรียน และห้องเรียนได้จากเมนูด้านซ้าย</p>
    </div>

    <!-- สถิติหลัก -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4" id="stat-grid">
      ${['teachers','students','classes','subjects'].map(k => `
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl
            ${k==='teachers'?'bg-indigo-100':k==='students'?'bg-purple-100':k==='classes'?'bg-blue-100':'bg-green-100'}">
            ${{teachers:'👩‍🏫',students:'👦',classes:'🏫',subjects:'📚'}[k]}
          </div>
          <div>
            <p class="text-xs text-gray-500">${{teachers:'ครูผู้สอน',students:'นักเรียน',classes:'ห้องเรียน',subjects:'รายวิชา'}[k]}</p>
            <p id="stat-${k}" class="text-2xl font-bold
              ${k==='teachers'?'text-indigo-700':k==='students'?'text-purple-700':k==='classes'?'text-blue-700':'text-green-700'}">—</p>
          </div>
        </div>`).join('')}
    </div>

    <!-- แถวที่สอง: ลงทะเบียน + pending payments -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- ครูที่ลงทะเบียนแล้ว -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h4 class="font-semibold text-gray-700 mb-3">🔑 บัญชีผู้ใช้ครู</h4>
        <div class="flex gap-4">
          <div class="flex-1 text-center bg-emerald-50 rounded-xl py-3">
            <p id="stat-registered" class="text-2xl font-bold text-emerald-700">—</p>
            <p class="text-xs text-gray-500 mt-0.5">ลงทะเบียนแล้ว</p>
          </div>
          <div class="flex-1 text-center bg-gray-50 rounded-xl py-3">
            <p id="stat-unregistered" class="text-2xl font-bold text-gray-500">—</p>
            <p class="text-xs text-gray-500 mt-0.5">ยังไม่มีบัญชี</p>
          </div>
        </div>
      </div>

      <!-- Pending payments -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-semibold text-gray-700">💳 การชำระเงิน</h4>
          <button onclick="window._adminNav?.('payments')"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">ดูทั้งหมด →</button>
        </div>
        <div id="pending-payments-list">
          <p class="text-sm text-gray-400 text-center py-3">กำลังโหลด...</p>
        </div>
      </div>
    </div>
  </div>`)

  try {
    const [stats, payments, teachers] = await Promise.all([
      getStats(),
      getAllPaymentRequests().catch(()=>[]),
      getTeachers().catch(()=>[]),
    ])

    // สถิติหลัก
    Object.entries(stats).forEach(([k, v]) => {
      const el = document.getElementById(`stat-${k}`)
      if (el) el.textContent = v.toLocaleString()
    })

    // ครูที่ลงทะเบียน vs ยังไม่มีบัญชี
    const registered   = teachers.filter(t => t.profile_id).length
    const unregistered = teachers.length - registered
    const regEl = document.getElementById('stat-registered')
    const unrEl = document.getElementById('stat-unregistered')
    if (regEl) regEl.textContent = registered
    if (unrEl) unrEl.textContent = unregistered

    // Pending payments
    const pending  = payments.filter(p => p.status === 'pending')
    const listEl   = document.getElementById('pending-payments-list')
    if (listEl) {
      if (!pending.length) {
        listEl.innerHTML = `<p class="text-sm text-gray-400 text-center py-3">ไม่มีคำขอรอดำเนินการ ✅</p>`
      } else {
        listEl.innerHTML = pending.slice(0,3).map(p => `
          <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div>
              <p class="text-sm font-medium text-gray-800">${p.teachers?.full_name ?? '—'}</p>
              <p class="text-xs text-gray-400">${p.package_type==='semester'?'เหมาทั้งเทอม 299 บ.':'รายห้อง 49 บ.'} · ${new Date(p.created_at).toLocaleDateString('th-TH')}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`).join('')
        + (pending.length > 3 ? `<p class="text-xs text-center text-gray-400 pt-2">และอีก ${pending.length-3} รายการ</p>` : '')
      }
    }
  } catch {
    showToast('โหลดข้อมูลสรุปไม่สำเร็จ', 'error')
  }
}

// ─── View: Teachers ───────────────────────────────────────────────────────────
export async function renderTeachers() {
  setActiveNav('teachers')
  document.getElementById('page-title').textContent = 'จัดการครู / บุคลากร'
  setContent(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)

  try {
    const all   = await getTeachers()
    const depts = _opts(all.map(t => t.dept))
    const skils = _opts(all.map(t => t.skill_group))

    setContent(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-lg font-bold text-gray-800">รายชื่อครูผู้สอน</h2>
          <p class="text-xs text-gray-400 mt-0.5">จัดการบัญชีและแผนกของครูในระบบ</p>
        </div>
        <button onclick="openTeacherModal()"
          class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
          <span>＋</span> เพิ่มครูใหม่
        </button>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="tf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส..." class="${SEARCH_CLS} flex-1 min-w-40" />
          <select id="tf-dept" class="${SELECT_CLS}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${depts.map(d=>`<option value="${d}">${d}</option>`).join('')}
          </select>
          <select id="tf-skill" class="${SELECT_CLS}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${skils.map(s=>`<option value="${s}">${s}</option>`).join('')}
          </select>
          <select id="tf-subg" class="${SELECT_CLS}">
            <option value="">ทุกกลุ่มวิชา</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
          <select id="tf-type" class="${SELECT_CLS}">
            <option value="">ทุกประเภท</option>
            <option value="ครู">ครู</option>
            <option value="บุคลากร">บุคลากร</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="tf-count" class="font-semibold text-indigo-600">${all.length}</span> / ${all.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="teacher-table-wrap"></div>
      </div>
    </div>`)

    renderTeacherTable(all)

    const _filter = () => {
      const q  = document.getElementById('tf-q').value.toLowerCase()
      const dp = document.getElementById('tf-dept').value
      const sk = document.getElementById('tf-skill').value
      const sg = document.getElementById('tf-subg').value
      const tp = document.getElementById('tf-type').value
      const rows = all.filter(t =>
        (!q  || [t.full_name,t.teacher_code,t.dept,t.skill_group].some(v=>(v??'').toLowerCase().includes(q))) &&
        (!dp || t.dept          === dp) &&
        (!sk || t.skill_group   === sk) &&
        (!sg || t.subject_group === sg) &&
        (!tp || t.staff_type    === tp)
      )
      document.getElementById('tf-count').textContent = rows.length
      renderTeacherTable(rows)
    }
    ['tf-q','tf-dept','tf-skill','tf-subg','tf-type'].forEach(id => {
      document.getElementById(id)?.addEventListener('input',  _filter)
      document.getElementById(id)?.addEventListener('change', _filter)
    })

  } catch {
    showToast('โหลดข้อมูลครูไม่สำเร็จ', 'error')
  }
}

export function renderTeacherTable(teachers) {
  const wrap = document.getElementById('teacher-table-wrap')
  if (!wrap) return

  if (teachers.length === 0) {
    wrap.innerHTML = `<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">👩‍🏫</p>
      <p class="font-medium">ยังไม่มีครูในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มครูใหม่" เพื่อเริ่มต้น</p>
    </div>`
    return
  }

  const paidBadge = (paid) => paid
    ? `<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">Pro</span>`
    : `<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500">Free</span>`

  const catBadge = (cat) => {
    const map = { 'สามัญ': 'bg-blue-50 text-blue-700', 'ศาสนา': 'bg-amber-50 text-amber-700' }
    return cat ? `<span class="px-2 py-0.5 rounded-full text-xs font-medium ${map[cat] ?? ''}">${cat}</span>` : '—'
  }

  wrap.innerHTML = `
    <div class="overflow-x-auto"><table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-4 py-3 text-left">ชื่อ - นามสกุล</th>
          <th class="px-4 py-3 text-left hidden sm:table-cell">รหัส</th>
          <th class="px-4 py-3 text-center hidden md:table-cell">กลุ่มสาระ</th>
          <th class="px-4 py-3 text-center hidden md:table-cell">กลุ่มวิชา</th>
          <th class="px-4 py-3 text-center hidden lg:table-cell">ประเภท</th>
          <th class="px-4 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${teachers.map(t => {
          const quota    = t.teachers_quota
          const initials = (t.full_name ?? '?').charAt(0).toUpperCase()
          return `
          <tr class="hover:bg-gray-50 transition">
            <td class="px-5 py-4">
              <div class="flex items-center gap-3">
                ${t.image_url
                  ? `<img src="${t.image_url}" alt="" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`
                  : `<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 text-white
                                flex items-center justify-center font-bold text-sm flex-shrink-0">${initials}</div>`
                }
                <div>
                  <p class="font-semibold text-gray-800">${t.full_name ?? '—'}</p>
                  <p class="text-xs text-gray-400">${t.phone ?? ''}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">${t.teacher_code ?? '—'}</td>
            <td class="px-4 py-3 text-center hidden md:table-cell">
              ${t.dept ? `<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${t.dept}</span>` : '<span class="text-gray-300 text-xs">—</span>'}
            </td>
            <td class="px-4 py-3 text-center hidden md:table-cell">
              ${t.subject_group ? `<span class="px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 font-mono">${t.subject_group}</span>` : '<span class="text-gray-300 text-xs">—</span>'}
            </td>
            <td class="px-4 py-3 text-center hidden lg:table-cell">
              ${catBadge(t.category)}
            </td>
            <td class="px-4 py-3 text-right">
              <button onclick="openTeacherModal(${t.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="handleDeleteTeacher(${t.id}, '${t.full_name}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`
        }).join('')}
      </tbody>
    </table></div>`
}

// ─── View: Registered Teacher Accounts ───────────────────────────────────────
export async function renderRegisteredTeachers() {
  setActiveNav('registered-teachers')
  document.getElementById('page-title').textContent = 'บัญชีผู้ใช้ครู'
  setContent(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)

  try {
    const all = await getTeachers()
    const registered   = all.filter(t => t.profile_id)
    const unregistered = all.filter(t => !t.profile_id)

    const statCard = (label, count, color) =>
      `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl ${color} flex items-center justify-center text-xl font-bold">${count}</div>
        <p class="text-sm text-gray-500">${label}</p>
      </div>`

    const depts = [...new Set(all.map(t => t.dept).filter(Boolean))].sort()

    setContent(`<div class="max-w-5xl mx-auto animate-fade space-y-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">บัญชีผู้ใช้ครู</h2>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-3">
        ${statCard('ทั้งหมด', all.length, 'bg-indigo-100 text-indigo-700')}
        ${statCard('มีบัญชีแล้ว', registered.length, 'bg-emerald-100 text-emerald-700')}
        ${statCard('ยังไม่ลงทะเบียน', unregistered.length, 'bg-amber-100 text-amber-700')}
      </div>

      <!-- Tab filter -->
      <div class="flex flex-wrap gap-2">
        <button id="tab-all" data-tab="all"
          class="tab-btn px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white transition">
          ทั้งหมด (${all.length})
        </button>
        <button id="tab-reg" data-tab="registered"
          class="tab-btn px-4 py-2 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
          มีบัญชี (${registered.length})
        </button>
        <button id="tab-unreg" data-tab="unregistered"
          class="tab-btn px-4 py-2 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
          ยังไม่ลงทะเบียน (${unregistered.length})
        </button>
      </div>

      <!-- Search + filter bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex flex-wrap gap-2">
          <input id="rt-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัสครู..."
            class="${SEARCH_CLS} flex-1 min-w-40" />
          <select id="rt-cat" class="${SELECT_CLS}">
            <option value="">ทุกประเภท</option>
            <option value="สามัญ">ครูสามัญ</option>
            <option value="ศาสนา">ครูศาสนา</option>
          </select>
          <select id="rt-dept" class="${SELECT_CLS}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${depts.map(d => `<option value="${d}">${d}</option>`).join('')}
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="rt-count" class="font-semibold text-indigo-600">${all.length}</span>
          / ${all.length} รายการ
        </p>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="reg-teacher-table"></div>
      </div>
    </div>`)

    let _tabPool = all
    const renderTable = (rows) => {
      const wrap = document.getElementById('reg-teacher-table')
      if (!wrap) return
      if (!rows.length) {
        wrap.innerHTML = `<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">👤</p><p>ไม่พบข้อมูล</p></div>`
        return
      }
      wrap.innerHTML = `
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <tr>
                <th class="px-5 py-3 text-left">ครู / บุคลากร</th>
                <th class="px-4 py-3 text-left hidden sm:table-cell">รหัส</th>
                <th class="px-4 py-3 text-center hidden md:table-cell">ประเภท</th>
                <th class="px-4 py-3 text-center">สถานะบัญชี</th>
                <th class="px-4 py-3 text-right">จัดการ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${rows.map(t => {
                const initials = (t.full_name ?? '?').charAt(0).toUpperCase()
                const hasAcc   = !!t.profile_id
                return `
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      ${t.image_url
                        ? `<img src="${t.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />`
                        : `<div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                      ${hasAcc ? 'bg-gradient-to-tr from-indigo-400 to-purple-400 text-white'
                                               : 'bg-gray-200 text-gray-500'}">${initials}</div>`
                      }
                      <div>
                        <p class="font-semibold text-gray-800">${t.full_name ?? '—'}</p>
                        <p class="text-xs text-gray-400">${t.dept ?? ''}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 font-mono text-indigo-600 text-xs hidden sm:table-cell">
                    ${t.teacher_code ?? '—'}
                  </td>
                  <td class="px-4 py-3 text-center hidden md:table-cell">
                    ${t.category
                      ? `<span class="px-2 py-0.5 rounded-full text-xs font-medium
                            ${t.category==='สามัญ' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}">
                          ${t.category}</span>`
                      : '<span class="text-gray-300 text-xs">—</span>'}
                  </td>
                  <td class="px-4 py-3 text-center">
                    ${hasAcc
                      ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          ✓ มีบัญชีแล้ว</span>`
                      : `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          ยังไม่ลงทะเบียน</span>`
                    }
                  </td>
                  <td class="px-4 py-3 text-right">
                    ${hasAcc
                      ? `<button onclick="handleUnlinkTeacher(${t.id}, '${(t.full_name ?? '').replace(/'/g, '')}')"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">
                          ยกเลิกบัญชี</button>`
                      : `<span class="text-xs text-gray-300">—</span>`
                    }
                  </td>
                </tr>`
              }).join('')}
            </tbody>
          </table>
        </div>`
    }

    const applyFilters = () => {
      const q    = (document.getElementById('rt-q')?.value ?? '').toLowerCase()
      const cat  = document.getElementById('rt-cat')?.value  ?? ''
      const dept = document.getElementById('rt-dept')?.value ?? ''
      const rows = _tabPool.filter(t =>
        (!q    || [t.full_name, t.teacher_code].some(v => (v ?? '').toLowerCase().includes(q))) &&
        (!cat  || t.category === cat) &&
        (!dept || t.dept     === dept)
      )
      const countEl = document.getElementById('rt-count')
      if (countEl) countEl.textContent = rows.length
      renderTable(rows)
    }

    renderTable(all)

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.replace('bg-indigo-600', 'bg-white')
          b.classList.replace('text-white', 'text-gray-600')
          b.classList.add('border', 'border-gray-200')
        })
        btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200')
        btn.classList.add('bg-indigo-600', 'text-white')
        const tab = btn.dataset.tab
        _tabPool = tab === 'registered' ? registered : tab === 'unregistered' ? unregistered : all
        applyFilters()
      })
    })

    // Search + select listeners
    ;['rt-q', 'rt-cat', 'rt-dept'].forEach(id => {
      document.getElementById(id)?.addEventListener('input',  applyFilters)
      document.getElementById(id)?.addEventListener('change', applyFilters)
    })

    // Expose unlink handler
    window.handleUnlinkTeacher = async (id, name) => {
      if (!confirm(`ยืนยันยกเลิกบัญชีของ "${name}"?\nครูจะไม่สามารถ login ได้จนกว่าจะลงทะเบียนใหม่`)) return
      try {
        await unlinkTeacherAccount(id)
        showToast(`ยกเลิกบัญชี "${name}" แล้ว`, 'success')
        renderRegisteredTeachers()
      } catch (err) {
        showToast('เกิดข้อผิดพลาด: ' + (err.message ?? ''), 'error')
      }
    }

  } catch {
    showToast('โหลดข้อมูลไม่สำเร็จ', 'error')
  }
}

// ─── View: Classes ────────────────────────────────────────────────────────────
export async function renderClasses() {
  setActiveNav('classes')
  document.getElementById('page-title').textContent = 'จัดการห้องเรียน'

  setContent(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">รายการห้องเรียน</h2>
        <p class="text-xs text-gray-400 mt-0.5">ห้องเรียนที่สร้างโดยครูในระบบ</p>
      </div>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="class-list">
        <div class="flex items-center justify-center py-16 text-gray-400">
          <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          กำลังโหลด...
        </div>
      </div>
    </div>
  </div>`)

  try {
    const classes = await getClasses()
    const el = document.getElementById('class-list')
    if (classes.length === 0) {
      el.innerHTML = `<div class="text-center py-16 text-gray-400">
        <p class="text-4xl mb-3">🏫</p><p class="font-medium">ยังไม่มีห้องเรียนในระบบ</p>
      </div>`
      return
    }
    el.innerHTML = `<div class="overflow-x-auto"><table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้องเรียน</th>
          <th class="px-5 py-3 text-left hidden sm:table-cell">วิชา</th>
          <th class="px-5 py-3 text-left hidden md:table-cell">กลุ่มทักษะ</th>
          <th class="px-5 py-3 text-left hidden lg:table-cell">Google Sheet</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${classes.map(c => `
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-4 font-semibold text-gray-800">${c.class_name ?? '—'}</td>
          <td class="px-5 py-4 text-gray-600 hidden sm:table-cell">
            ${c.master_subjects
              ? `<span class="font-mono text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded mr-1">${c.master_subjects.subject_code ?? '—'}</span>${c.master_subjects.subject_name ?? '—'}`
              : '—'}
          </td>
          <td class="px-5 py-4 hidden md:table-cell">
            <span class="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">${c.skill_group ?? '—'}</span>
          </td>
          <td class="px-5 py-4 text-xs text-gray-400 hidden lg:table-cell font-mono">
            ${c.google_sheet_id ? `<span class="truncate block max-w-[160px]">${c.google_sheet_id}</span>` : '—'}
          </td>
          <td class="px-5 py-4 text-right whitespace-nowrap">
            <button onclick="window._adminEditClass(${c.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="window._adminDeleteClass(${c.id},'${(c.class_name??'').replace(/'/g,'')}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table></div>`

    // cache classes for edit
    window._adminClassCache = Object.fromEntries(classes.map(c=>[c.id,c]))

    window._adminEditClass = (id) => {
      const cls = window._adminClassCache?.[id]
      if (cls) renderClassEditForm(null, cls)
    }
    window._adminDeleteClass = async (id, name) => {
      if (!confirm(`ยืนยันลบห้องเรียน "${name}"?\nข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`)) return
      try {
        await deleteClass(id)
        showToast(`ลบห้องเรียน "${name}" แล้ว`, 'success')
        renderClasses()
      } catch (err) { showToast('ลบไม่สำเร็จ: '+(err.message??''), 'error') }
    }
  } catch {
    showToast('โหลดข้อมูลห้องเรียนไม่สำเร็จ', 'error')
  }
}

// ─── View: Students ───────────────────────────────────────────────────────────
export async function renderStudents() {
  setActiveNav('students')
  document.getElementById('page-title').textContent = 'จัดการนักเรียน'
  setContent(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)

  try {
    const all = await getStudents()
    const grades  = _opts(all.map(s => _grade(s.main_room)))
    const rooms   = _opts(all.map(s => _room(s.main_room)))

    setContent(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-lg font-bold text-gray-800">รายชื่อนักเรียนทั้งหมด</h2>
          <p class="text-xs text-gray-400 mt-0.5">ข้อมูลนักเรียนในระบบทั้งหมด</p>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="sf-q" type="text" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง..." class="${SEARCH_CLS} flex-1 min-w-40" />
          <select id="sf-grade" class="${SELECT_CLS}">
            <option value="">ทุกระดับชั้น</option>
            ${grades.map(g=>`<option value="${g}">${g}</option>`).join('')}
          </select>
          <select id="sf-room" class="${SELECT_CLS}">
            <option value="">ทุกห้อง</option>
            ${rooms.map(r=>`<option value="${r}">ห้อง ${r}</option>`).join('')}
          </select>
          <select id="sf-gender" class="${SELECT_CLS}">
            <option value="">ทุกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="sf-count" class="font-semibold text-indigo-600">${all.length}</span> / ${all.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="student-table-wrap"></div>
      </div>
    </div>`)

    // cache all students
    let studentCache = Object.fromEntries(all.map(s=>[s.id,s]))

    const _renderTable = (rows) => {
      const el = document.getElementById('student-table-wrap')
      document.getElementById('sf-count').textContent = rows.length
      if (!rows.length) {
        el.innerHTML = `<div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">🔍</p><p>ไม่พบข้อมูลที่ค้นหา</p></div>`; return
      }
      el.innerHTML = `<div class="overflow-x-auto"><table class="w-full text-sm">
        <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
          <tr>
            <th class="px-4 py-3 text-left">นักเรียน</th>
            <th class="px-4 py-3 text-left">รหัส</th>
            <th class="px-4 py-3 text-center">ชั้นสามัญ</th>
            <th class="px-4 py-3 text-center hidden sm:table-cell">ชั้นศาสนา</th>
            <th class="px-4 py-3 text-center hidden md:table-cell">เพศ</th>
            <th class="px-4 py-3 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${rows.map(s => `
          <tr class="hover:bg-gray-50 transition">
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                ${s.image_url
                  ? `<img src="${s.image_url}" class="w-8 h-8 rounded-full object-cover flex-shrink-0" />`
                  : `<div class="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400
                                text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                       ${(s.full_name??'?').charAt(0)}</div>`}
                <span class="font-semibold text-gray-800 text-sm">${s.full_name??'—'}</span>
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-indigo-600 text-xs">${s.student_code??'—'}</td>
            <td class="px-4 py-3 text-center text-xs">
              <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">${s.main_room??'—'}</span>
            </td>
            <td class="px-4 py-3 text-center text-xs hidden sm:table-cell">
              ${s.religion_room
                ? `<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">${s.religion_room}</span>`
                : '<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden md:table-cell text-gray-500">${s.gender??'—'}</td>
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._editStudent(${s.id})"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
              <button onclick="window._deleteStudent(${s.id},'${(s.full_name??'').replace(/'/g,'')}')"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join('')}
        </tbody>
      </table></div>`
    }

    // student CRUD handlers
    window._deleteStudent = async (id, name) => {
      if (!confirm(`ยืนยันลบนักเรียน "${name}"?\nข้อมูลเช็คชื่อและคะแนนของนักเรียนคนนี้จะถูกลบด้วย`)) return
      try {
        await deleteStudent(id)
        delete studentCache[id]
        all.splice(all.findIndex(s=>s.id===id), 1)
        showToast(`ลบ "${name}" แล้ว`, 'success')
        _filter()
      } catch (err) { showToast('ลบไม่สำเร็จ: '+(err.message??''), 'error') }
    }

    window._editStudent = (id) => {
      const s = studentCache[id]; if (!s) return
      _openStudentModal(s, async (payload) => {
        await updateStudent(id, payload)
        Object.assign(s, payload)
        studentCache[id] = s
        _filter()
      })
    }

    function _openStudentModal(s, onSave) {
      document.getElementById('stu-modal')?.remove()
      const m = document.createElement('div')
      m.id = 'stu-modal'
      m.className = 'fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4'
      m.innerHTML = `
        <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
            <h3 class="font-bold text-gray-800">แก้ไขข้อมูลนักเรียน</h3>
            <button id="stu-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="overflow-auto flex-1 px-5 py-4">
            <form id="stu-form" class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">รหัสนักเรียน</label>
                  <input id="sf-code" type="text" value="${s.student_code??''}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">เพศ</label>
                  <select id="sf-gender-val" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full bg-white">
                    <option value="">—</option>
                    <option value="ชาย" ${s.gender==='ชาย'?'selected':''}>ชาย</option>
                    <option value="หญิง" ${s.gender==='หญิง'?'selected':''}>หญิง</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล</label>
                <input id="sf-name" type="text" value="${s.full_name??''}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ห้องสามัญ</label>
                  <input id="sf-main-room" type="text" value="${s.main_room??''}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ห้องศาสนา</label>
                  <input id="sf-rel-room" type="text" value="${s.religion_room??''}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
              </div>
              <div class="flex gap-3 pt-2">
                <button type="button" id="stu-cancel"
                  class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  ยกเลิก
                </button>
                <button id="stu-save" type="submit"
                  class="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
                  บันทึก
                </button>
              </div>
            </form>
          </div>
        </div>`
      document.body.appendChild(m)
      m.querySelector('#stu-close').addEventListener('click', ()=>m.remove())
      m.querySelector('#stu-cancel').addEventListener('click', ()=>m.remove())
      m.addEventListener('click', e=>{ if(e.target===m) m.remove() })
      m.querySelector('#stu-form').addEventListener('submit', async e => {
        e.preventDefault()
        const btn = m.querySelector('#stu-save')
        btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
        try {
          const payload = {
            student_code:  m.querySelector('#sf-code').value.trim() || null,
            full_name:     m.querySelector('#sf-name').value.trim() || null,
            main_room:     m.querySelector('#sf-main-room').value.trim() || null,
            religion_room: m.querySelector('#sf-rel-room').value.trim() || null,
            gender:        m.querySelector('#sf-gender-val').value || null,
          }
          await onSave(payload)
          showToast('บันทึกสำเร็จ', 'success')
          m.remove()
        } catch (err) {
          showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error')
        } finally { btn.disabled = false; btn.textContent = 'บันทึก' }
      })
    }

    _renderTable(all)

    const _filter = () => {
      const q  = document.getElementById('sf-q').value.toLowerCase()
      const gr = document.getElementById('sf-grade').value
      const rm = document.getElementById('sf-room').value
      const gn = document.getElementById('sf-gender').value
      _renderTable(all.filter(s =>
        (!q  || [s.full_name,s.student_code,s.main_room,s.religion_room].some(v=>(v??'').toLowerCase().includes(q))) &&
        (!gr || _grade(s.main_room) === gr) &&
        (!rm || _room(s.main_room)  === rm) &&
        (!gn || s.gender === gn)
      ))
    }
    ['sf-q','sf-grade','sf-room','sf-gender'].forEach(id => {
      document.getElementById(id)?.addEventListener('input',  _filter)
      document.getElementById(id)?.addEventListener('change', _filter)
    })

  } catch { showToast('โหลดข้อมูลนักเรียนไม่สำเร็จ', 'error') }
}

// ─── View: Settings ───────────────────────────────────────────────────────────
export async function renderSettings() {
  setActiveNav('settings')
  document.getElementById('page-title').textContent = 'ตั้งค่าระบบ'

  setContent(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`)

  try {
    const cfg = await getSystemConfig()

    const GROUPS = [
      { label: '⚙️ ทั่วไป', keys: [
        { key: 'appColor',    label: 'สีระบบ',        type: 'color' },
        { key: 'semester',    label: 'ภาคเรียนที่',   type: 'select', options: ['1','2'] },
        { key: 'academicYear',label: 'ปีการศึกษา',    type: 'text' },
      ]},
      { label: '📅 ช่วงเวลาภาคเรียน (สำหรับระบบละหมาด)', keys: [
        { key: 'semester_start', label: 'วันเปิดภาคเรียน (YYYY-MM-DD)', type: 'date' },
        { key: 'semester_end',   label: 'วันปิดภาคเรียน (YYYY-MM-DD)',  type: 'date' },
      ]},
      { label: '🏫 โรงเรียนสามัญ', keys: [
        { key: 'samaiSchoolName',          label: 'ชื่อโรงเรียน',                type: 'text' },
        { key: 'samaiLogoUrl',             label: 'โลโก้โรงเรียน',              type: 'upload' },
        { key: 'samaiRegistrarName',       label: 'หัวหน้าฝ่ายทะเบียน',        type: 'text' },
        { key: 'samaiRegistrarSignUrl',    label: 'ลายเซ็นหัวหน้าฝ่ายทะเบียน', type: 'upload' },
        { key: 'samaiAcademicHeadName',    label: 'หัวหน้าวิชาการ',             type: 'text' },
        { key: 'samaiAcademicHeadSignUrl', label: 'ลายเซ็นหัวหน้าวิชาการ',     type: 'upload' },
        { key: 'samaiDirectorName',        label: 'ผู้อำนวยการ',                type: 'text' },
        { key: 'samaiDirectorSignUrl',     label: 'ลายเซ็นผู้อำนวยการ',         type: 'upload' },
      ]},
      { label: '🎓 วิทยาลัยปวช', keys: [
        { key: 'porworCollegeName',          label: 'ชื่อวิทยาลัย',              type: 'text' },
        { key: 'porworLogoUrl',              label: 'โลโก้วิทยาลัย',            type: 'upload' },
        { key: 'porworRegistrarName',        label: 'หัวหน้าฝ่ายทะเบียน',      type: 'text' },
        { key: 'porworRegistrarSignUrl',     label: 'ลายเซ็นหัวหน้าฝ่ายทะเบียน',type: 'upload' },
        { key: 'porworAcademicHeadName',     label: 'หัวหน้าวิชาการ',           type: 'text' },
        { key: 'porworAcademicHeadSignUrl',  label: 'ลายเซ็นหัวหน้าวิชาการ',   type: 'upload' },
        { key: 'porworDirectorName',         label: 'ผู้อำนวยการ',              type: 'text' },
        { key: 'porworDirectorSignUrl',      label: 'ลายเซ็นผู้อำนวยการ',       type: 'upload' },
      ]},
      { label: '💳 การชำระเงิน (แสดงให้ครูเห็นเมื่อซื้อแพ็กเกจ)', keys: [
        { key: 'paymentAccountName',  label: 'ชื่อบัญชี',                    type: 'text' },
        { key: 'paymentBankName',     label: 'ธนาคาร',                       type: 'text' },
        { key: 'paymentAccountNo',    label: 'เลขบัญชี',                     type: 'text' },
        { key: 'paymentPromptpay',    label: 'เบอร์ PromptPay / เลขประจำตัว', type: 'text' },
        { key: 'paymentQrUrl',        label: 'QR Code PromptPay',             type: 'upload' },
        { key: 'paymentNote',         label: 'หมายเหตุ (เช่น เวลาทำการ)',     type: 'text' },
      ]},
      { label: '📦 แพ็กเกจและโควตา', keys: [
        { key: 'freeClassQuota',      label: 'โควตาห้องเรียนฟรี (ห้อง)',       type: 'text' },
        { key: 'pricePerClass',       label: 'ราคาเพิ่มรายห้อง (บาท)',         type: 'text' },
        { key: 'priceSemester',       label: 'ราคาแพ็กเกจเหมาทั้งเทอม (บาท)', type: 'text' },
        { key: 'pkgPerClassDesc',     label: 'คำอธิบายแพ็กเกจรายห้อง',        type: 'text' },
        { key: 'pkgSemesterDesc',     label: 'คำอธิบายแพ็กเกจเหมาทั้งเทอม',  type: 'text' },
      ]},
      { label: '🗓️ ตารางสอน', keys: [
        { key: 'hasFriday',            label: 'เปิดวันศุกร์ (เฉพาะครูห้องโปรแกรม)', type: 'toggle' },
        { key: 'scheduleVisionEnabled',label: 'เปิดฟีเจอร์วิเคราะห์รูปตาราง (AI)',   type: 'toggle' },
        { key: 'geminiApiKey',         label: 'Gemini API Key',                       type: 'password' },
        { key: 'geminiModel',          label: 'Gemini Model',                         type: 'text' },
      ]},
    ]

    const fieldHTML = ({ key, label, type, options }) => {
      const val = cfg[key] ?? ''
      const base = `id="cfg-${key}" data-key="${key}"`
      const cls  = 'input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm'

      if (type === 'color')
        return `<div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-1">${label}</label>
          <div class="flex items-center gap-3">
            <input type="color" ${base} value="${val || '#007bff'}"
              class="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5" />
            <span id="cfg-${key}-txt" class="text-sm text-gray-500">${val || '#007bff'}</span>
          </div>
        </div>`
      if (type === 'date')
        return `<div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-1">${label}</label>
          <input type="date" ${base} value="${val || ''}" class="${cls}" />
        </div>`
      if (type === 'select')
        return `<div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-1">${label}</label>
          <select ${base} class="${cls} bg-white">
            ${options.map(o => `<option value="${o}" ${o===val?'selected':''}>${o}</option>`).join('')}
          </select>
        </div>`
      if (type === 'upload')
        return `<div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-1">${label}</label>
          <div class="flex items-center gap-3">
            ${val ? `<img src="${val}" class="h-10 max-w-[120px] object-contain rounded border border-gray-100" />` : ''}
            <label class="cursor-pointer">
              <span class="inline-block px-3 py-1.5 rounded-lg border border-gray-200
                           text-xs font-medium text-gray-600 hover:bg-gray-50 transition">
                ${val ? 'เปลี่ยน' : 'อัปโหลด'}
              </span>
              <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${key}" />
            </label>
            <input type="hidden" ${base} value="${val}" />
          </div>
        </div>`
      if (type === 'toggle') {
        const isOn = val === 'true'
        return `<div class="mb-4 flex items-center justify-between">
          <label class="text-sm font-medium text-gray-600">${label}</label>
          <button type="button" ${base} data-on="${isOn}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className=this.dataset.on==='true'?'w-12 h-6 rounded-full transition-colors bg-emerald-500 relative':'w-12 h-6 rounded-full transition-colors bg-gray-300 relative';this.querySelector('span').className=this.dataset.on==='true'?'absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform':'absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform'"
            class="w-12 h-6 rounded-full transition-colors ${isOn ? 'bg-emerald-500' : 'bg-gray-300'} relative">
            <span class="${isOn ? 'absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform' : 'absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform'}"></span>
          </button>
        </div>`
      }
      if (type === 'password')
        return `<div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-1">${label}</label>
          <div class="flex gap-2">
            <input type="password" ${base} value="${val}" class="${cls} flex-1" placeholder="sk-..." autocomplete="off" />
            <button type="button" class="px-3 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50"
              onclick="const i=this.previousElementSibling;i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'">ดู</button>
          </div>
          <p class="text-xs text-amber-600 mt-1">⚠️ เก็บไว้เป็นความลับ ไม่แชร์กับใคร</p>
        </div>`
      return `<div class="mb-4">
        <label class="block text-sm font-medium text-gray-600 mb-1">${label}</label>
        <input type="text" ${base} value="${val}" class="${cls}" />
      </div>`
    }

    setContent(`
      <div class="max-w-3xl mx-auto animate-fade space-y-6">
        ${GROUPS.map(g => `
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 class="text-sm font-bold text-gray-700 mb-5">${g.label}</h3>
            ${g.keys.map(fieldHTML).join('')}
            <div class="flex justify-end mt-2">
              <button data-save-group="${g.label}"
                class="btn-primary px-6 py-2 text-white text-sm font-medium rounded-xl">
                บันทึกกลุ่มนี้
              </button>
            </div>
          </div>`).join('')}
      </div>`)

    // color preview sync
    document.querySelectorAll('input[type=color]').forEach(inp => {
      inp.addEventListener('input', () => {
        document.getElementById(`${inp.id}-txt`).textContent = inp.value
      })
    })

    // upload fields — อัปโหลดทันที แล้วอัปเดต hidden input + preview
    document.querySelectorAll('.cfg-upload-file').forEach(fileInput => {
      fileInput.addEventListener('change', async e => {
        const file = e.target.files[0]
        if (!file) return
        const key    = fileInput.dataset.key
        const hidden = document.getElementById(`cfg-${key}`)
        fileInput.disabled = true
        try {
          const url = await uploadSystemAsset(key, file)
          hidden.value = url
          await updateSystemConfig(key, url)
          showToast(`อัปโหลด ${key} สำเร็จ`, 'success')
          // refresh preview
          const imgEl = fileInput.closest('div.flex')?.querySelector('img')
          if (imgEl) { imgEl.src = url } else {
            const span = fileInput.previousElementSibling
            if (span) span.insertAdjacentHTML('beforebegin',
              `<img src="${url}" class="h-10 max-w-[120px] object-contain rounded border border-gray-100" />`)
          }
        } catch (err) {
          showToast('อัปโหลดไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        } finally {
          fileInput.disabled = false
        }
      })
    })

    // save per group
    document.querySelectorAll('[data-save-group]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const card = btn.closest('.bg-white')
        const inputs = card.querySelectorAll('[data-key]')
        btn.disabled = true
        btn.textContent = 'กำลังบันทึก...'
        try {
          await Promise.all([...inputs].map(el => {
            // toggle button: อ่านจาก data-on แทน value
            const val = el.tagName === 'BUTTON' ? (el.dataset.on ?? 'false') : el.value
            return updateSystemConfig(el.dataset.key, val)
          }))
          showToast('บันทึกสำเร็จ', 'success')
        } catch {
          showToast('บันทึกไม่สำเร็จ', 'error')
        } finally {
          btn.disabled = false
          btn.textContent = 'บันทึกกลุ่มนี้'
        }
      })
    })

  } catch {
    showToast('โหลดการตั้งค่าไม่สำเร็จ', 'error')
  }
}

// ─── View: Departments ────────────────────────────────────────────────────────
export async function renderDepartments() {
  setActiveNav('departments')
  document.getElementById('page-title').textContent = 'กลุ่มสาระการเรียนรู้'

  setContent(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">กลุ่มสาระทั้งหมด</h2>
        <p class="text-xs text-gray-400 mt-0.5">Admin เพิ่ม/ลบได้ • หัวหน้ากลุ่มสาระแก้ไขรูปและลายเซ็นได้</p>
      </div>
      <button onclick="openDeptModal()"
        class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มกลุ่มสาระ
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="dept-table-wrap">
        <div class="flex items-center justify-center py-16 text-gray-400">
          <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg> กำลังโหลด...
        </div>
      </div>
    </div>
  </div>`)

  try { renderDeptTable(await getDepartments()) }
  catch { showToast('โหลดข้อมูลไม่สำเร็จ', 'error') }
}

export function renderDeptTable(depts) {
  const wrap = document.getElementById('dept-table-wrap')
  if (!wrap) return

  if (!depts.length) {
    wrap.innerHTML = `<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🗂️</p>
      <p class="font-medium">ยังไม่มีกลุ่มสาระในระบบ</p>
    </div>`
    return
  }

  wrap.innerHTML = `
    <table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">กลุ่มสาระ</th>
          <th class="px-5 py-3 text-left hidden sm:table-cell">หัวหน้ากลุ่มสาระ</th>
          <th class="px-5 py-3 text-center hidden md:table-cell">รูป / ลายเซ็น</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${depts.map(d => `
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-4">
            <span class="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 mr-2">${d.dept_code}</span>
            <span class="font-semibold text-gray-800">${d.dept_name}</span>
          </td>
          <td class="px-5 py-4 text-gray-600 hidden sm:table-cell">
            <div class="flex items-center gap-2">
              ${d.head_photo_url
                ? `<img src="${d.head_photo_url}" class="w-7 h-7 rounded-full object-cover" />`
                : `<div class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">?</div>`}
              ${d.head_name ?? '—'}
            </div>
          </td>
          <td class="px-5 py-4 text-center hidden md:table-cell">
            ${d.head_sign_url
              ? `<img src="${d.head_sign_url}" class="h-8 max-w-[80px] mx-auto object-contain" />`
              : '<span class="text-gray-300 text-xs">ไม่มีลายเซ็น</span>'}
          </td>
          <td class="px-5 py-4 text-right">
            <button onclick="openDeptModal(${d.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeleteDept(${d.id}, '${d.dept_name.replace(/'/g,"\\'")}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`
}

// ─── View: Periods ────────────────────────────────────────────────────────────
export async function renderPeriods() {
  setActiveNav('periods')
  document.getElementById('page-title').textContent = 'คาบและเวลาเรียน'

  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">โครงสร้างคาบเรียน</h2>
        <p class="text-xs text-gray-400 mt-0.5">ปรับได้ตามโครงสร้างเวลาของโรงเรียน</p>
      </div>
      <button onclick="openPeriodModal()"
        class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มคาบ
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="period-list">
        <div class="flex items-center justify-center py-12 text-gray-400">
          <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>`)

  try {
    const periods = await getPeriods()
    // เก็บ cache ไว้ใน window เพื่อให้ openPeriodModal ดึงได้โดยไม่ต้องส่ง JSON ใน onclick
    window._periodsCache = Object.fromEntries(periods.map(p => [p.id, p]))

    const el = document.getElementById('period-list')
    if (!periods.length) {
      el.innerHTML = `<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🕐</p><p class="font-medium">ยังไม่มีข้อมูลคาบเรียน</p>
      </div>`
      return
    }
    el.innerHTML = `<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-center">คาบที่</th>
          <th class="px-5 py-3 text-center">เวลาเริ่ม</th>
          <th class="px-5 py-3 text-center">เวลาสิ้นสุด</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${periods.map(p => `
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 text-center">
            <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm
                         inline-flex items-center justify-center">${p.period_no}</span>
          </td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${p.start_time?.slice(0,5)}</td>
          <td class="px-5 py-3 text-center text-gray-700 font-mono">${p.end_time?.slice(0,5)}</td>
          <td class="px-5 py-3 text-right">
            <button onclick="openPeriodModal(${p.id})"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
            <button onclick="handleDeletePeriod(${p.id})"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`
  } catch { showToast('โหลดข้อมูลไม่สำเร็จ', 'error') }
}

// ─── View: Subjects (2 tabs) ──────────────────────────────────────────────────
export async function renderSubjects() {
  setActiveNav('subjects')
  document.getElementById('page-title').textContent = 'จัดการรายวิชา'
  setContent(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)

  try {
    const [allSubjects, allClasses] = await Promise.all([getMasterSubjects(), getClasses()])
    const depts = _opts(allSubjects.map(s => s.dept))
    const skills = _opts(allSubjects.map(s => s.skill_group))

    const SUBG_OPTIONS = `
      <option value="">ทุกกลุ่มวิชา</option>
      <option value="ACDM">สามัญมัธยม (ACDM)</option>
      <option value="AGM">ศาสนามัธยม (AGM)</option>
      <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
      <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>`

    setContent(`<div class="max-w-6xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-lg font-bold text-gray-800">จัดการรายวิชา</h2>
          <p class="text-xs text-gray-400 mt-0.5">Admin และครูเจ้าของรายวิชาสามารถแก้ไขได้</p>
        </div>
        <button id="sub-action-btn" onclick="window._subAction()"
          class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
          <span>＋</span> เพิ่มคอร์ส
        </button>
      </div>

      <!-- Tabs -->
      <div class="flex gap-2 mb-4">
        <button id="stab-course" onclick="_switchSubjectTab('course')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white">
          📖 คอร์สวิชา
        </button>
        <button id="stab-class" onclick="_switchSubjectTab('class')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
          🏫 รายวิชาที่เปิดสอน
        </button>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex flex-wrap gap-2">
          <input id="subf-q" type="text" placeholder="🔍 ค้นหารหัส ชื่อ..." class="${SEARCH_CLS} flex-1 min-w-40" />
          <select id="subf-dept" class="${SELECT_CLS}">
            <option value="">ทุกกลุ่มสาระ</option>
            ${depts.map(d=>`<option value="${d}">${d}</option>`).join('')}
          </select>
          <select id="subf-skill" class="${SELECT_CLS}">
            <option value="">ทุกกลุ่มทักษะ</option>
            ${skills.map(s=>`<option value="${s}">${s}</option>`).join('')}
          </select>
          <select id="subf-subg" class="${SELECT_CLS}">${SUBG_OPTIONS}</select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          พบ <span id="subf-count" class="font-semibold text-indigo-600">0</span> รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="subject-table-wrap"></div>
      </div>
    </div>`)

    let currentTab = 'course'

    const _applyFilter = () => {
      const q  = document.getElementById('subf-q').value.toLowerCase()
      const dp = document.getElementById('subf-dept').value
      const sk = document.getElementById('subf-skill').value
      const sg = document.getElementById('subf-subg').value

      if (currentTab === 'course') {
        const rows = allSubjects.filter(s =>
          (!q  || [s.subject_code,s.subject_name,s.dept].some(v=>(v??'').toLowerCase().includes(q))) &&
          (!dp || s.dept          === dp) &&
          (!sk || s.skill_group   === sk) &&
          (!sg || s.subject_group === sg)
        )
        document.getElementById('subf-count').textContent = rows.length
        renderSubjectTable(rows)
      } else {
        const rows = allClasses.filter(c =>
          (!q  || (c.class_name??'').toLowerCase().includes(q) ||
                   (c.master_subjects?.subject_name??'').toLowerCase().includes(q)) &&
          (!dp || c.master_subjects?.dept === dp)
        )
        document.getElementById('subf-count').textContent = rows.length
        _renderClassTable(rows)
      }
    }

    // action ปุ่มมุมขวาบน
    window._subAction = () => {
      if (currentTab === 'course') {
        renderCourseForm(null, async (payload) => {
          await createSubject(payload)
          await renderSubjects()
        })
      } else {
        // admin เลือกคอร์สก่อน แล้วลงทะเบียนห้อง
        _renderAdminCoursePicker()
      }
    }

    window._adminRegisterClass = async (courseId) => {
      const course = allSubjects.find(s => s.id === courseId)
      if (course) renderClassForm(null, course)
      else showToast('ไม่พบคอร์ส', 'error')
    }

    window._adminEditClass = (classId) => {
      const c = window._adminClassCache?.[classId]
      if (c) renderClassEditForm(null, c)
      else showToast('ไม่พบข้อมูลห้องเรียน', 'error')
    }

    window._adminScoreCols = (classId, className) => {
      window._goBack = () => renderSubjects()
      renderScoreColumns(null, classId, className)
    }

    window._adminDeleteClass = async (classId, name) => {
      if (!confirm(`ยืนยันลบ "${name}"?\nข้อมูลนักเรียน เช็คชื่อ และคะแนนจะถูกลบด้วย`)) return
      try {
        await deleteClass(classId)
        showToast(`ลบ "${name}" แล้ว`, 'success')
        _applyFilter()
      } catch (err) { showToast('ลบไม่สำเร็จ: '+(err.message??''), 'error') }
    }

    window._switchSubjectTab = (tab) => {
      currentTab = tab
      // update tab UI
      document.getElementById('stab-course').className = tab === 'course'
        ? 'px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white'
        : 'px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
      document.getElementById('stab-class').className = tab === 'class'
        ? 'px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white'
        : 'px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
      // update button text
      const btn = document.getElementById('sub-action-btn')
      if (btn) btn.innerHTML = tab === 'course' ? '<span>＋</span> เพิ่มคอร์ส' : '<span>＋</span> เพิ่มรายวิชา'
      _applyFilter()
    }

    ['subf-q','subf-dept','subf-skill','subf-subg'].forEach(id => {
      document.getElementById(id)?.addEventListener('input',  _applyFilter)
      document.getElementById(id)?.addEventListener('change', _applyFilter)
    })

    _applyFilter()

  } catch { showToast('โหลดรายวิชาไม่สำเร็จ', 'error') }
}

export function renderSubjectTable(subjects) {
  const wrap = document.getElementById('subject-table-wrap')
  if (!wrap) return
  if (!subjects.length) {
    wrap.innerHTML = `<div class="text-center py-12 text-gray-400">
      <p class="text-3xl mb-2">📚</p><p class="font-medium">ไม่พบรายวิชา</p></div>`; return
  }
  wrap.innerHTML = `<div class="overflow-x-auto"><table class="w-full text-sm">
    <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
      <tr>
        <th class="px-4 py-3 text-left">รหัส / ชื่อวิชา</th>
        <th class="px-4 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
        <th class="px-4 py-3 text-center hidden md:table-cell">ชั้น</th>
        <th class="px-4 py-3 text-center hidden md:table-cell">หน่วยกิต</th>
        <th class="px-4 py-3 text-right">จัดการ</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-50">
      ${subjects.map(s=>`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${s.subject_name}</p>
          <p class="text-xs text-indigo-500 font-mono">${s.subject_code??'—'}</p>
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${s.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${s.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.grade_level??'—'}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.credit??'—'}</td>
        <td class="px-4 py-3 text-right">
          <button onclick="openSubjectModal(${s.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${s.id},'${s.subject_name.replace(/'/g,"\\'")}'"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`).join('')}
    </tbody>
  </table></div>`
}

function _renderClassTable(classes) {
  const wrap = document.getElementById('subject-table-wrap')
  if (!wrap) return

  // cache สำหรับ edit
  window._adminClassCache = Object.fromEntries(classes.map(c => [c.id, c]))

  if (!classes.length) {
    wrap.innerHTML = `<div class="text-center py-12 text-gray-400">
      <p class="text-3xl mb-2">🏫</p><p class="font-medium">ไม่พบรายวิชาที่เปิดสอน</p></div>`; return
  }
  wrap.innerHTML = `<div class="overflow-x-auto"><table class="w-full text-sm">
    <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
      <tr>
        <th class="px-4 py-3 text-left">ห้อง / วิชา</th>
        <th class="px-4 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
        <th class="px-4 py-3 text-center hidden md:table-cell">Sheet</th>
        <th class="px-4 py-3 text-right">จัดการ</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-50">
      ${classes.map(c=>`
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3">
          <p class="font-semibold text-gray-800 text-sm">${c.class_name??'—'}</p>
          <p class="text-xs text-indigo-500">${c.master_subjects?.subject_name??'—'}</p>
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${c.master_subjects?.dept
            ? `<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${c.master_subjects.dept}</span>`
            : '<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center hidden md:table-cell">
          ${c.google_sheet_id
            ? `<span class="text-green-500 text-xs">✓</span>`
            : '<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-right">
          <button onclick="window._adminScoreCols(${c.id},'${c.class_name}')"
            class="text-xs bg-amber-500 text-white px-2 py-1 rounded-lg hover:bg-amber-600 mr-2">📋 คะแนน</button>
          <button onclick="window._adminEditClass(${c.id})"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
          <button onclick="window._adminDeleteClass(${c.id},'${c.class_name}')"
            class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
        </td>
      </tr>`).join('')}
    </tbody>
  </table></div>`
}

// ─── View: Homeroom Teachers ──────────────────────────────────────────────────
export async function renderHomeroom() {
  setActiveNav('homeroom')
  document.getElementById('page-title').textContent = 'ครูที่ปรึกษา'

  const cfg       = await getSystemConfig().catch(()=>({}))
  const curYear   = parseInt(cfg.academicYear ?? new Date().getFullYear()+543)
  const curSem    = parseInt(cfg.semester ?? 1)

  setContent(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">ครูที่ปรึกษา</h2>
        <p class="text-xs text-gray-400 mt-0.5">ภาคเรียน ${curSem}/${curYear}</p>
      </div>
      <button onclick="window._addHomeroom()"
        class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span>＋</span> เพิ่มครูที่ปรึกษา
      </button>
    </div>

    <!-- Form -->
    <div id="homeroom-form-wrap" class="hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h4 id="homeroom-form-title" class="font-semibold text-gray-700 mb-4">เพิ่มครูที่ปรึกษา</h4>
      <form id="homeroom-form" class="grid grid-cols-2 gap-3">
        <input type="hidden" id="hr-edit-id" />
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">รหัสครู / ค้นหาชื่อ</label>
          <input id="hr-teacher-code" type="text" placeholder="รหัสครู"
            class="${SELECT_CLS}" autocomplete="off" />
        </div>
        <div class="relative">
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อครู</label>
          <input id="hr-teacher-name" type="text" placeholder="พิมพ์เพื่อค้นหา..."
            class="${SELECT_CLS}" autocomplete="off" />
          <div id="hr-teacher-dropdown"
            class="hidden absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-y-auto"
            style="max-height:160px"></div>
        </div>
        <input type="hidden" id="hr-teacher-id" />
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ห้องที่ดูแล</label>
          <select id="hr-room" class="${SELECT_CLS}">
            <option value="">— กำลังโหลด... —</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ประเภท</label>
          <select id="hr-category" class="${SELECT_CLS}">
            <option value="สามัญ">สามัญ</option>
            <option value="ศาสนา">ศาสนา</option>
          </select>
        </div>
        <div class="col-span-2 flex gap-3 pt-1">
          <button type="button" onclick="document.getElementById('homeroom-form-wrap').classList.add('hidden')"
            class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="hr-save" type="submit"
            class="btn-primary flex-1 py-2 rounded-xl text-white text-sm font-semibold">บันทึก</button>
        </div>
      </form>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="homeroom-table-wrap">
        <div class="flex justify-center py-10 text-gray-400">
          <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>`)

  let allTeachers = await getTeachers().catch(()=>[])

  // โหลดห้องจาก students.main_room
  const rooms = await getUniqueRooms().catch(()=>[])
  const roomSel = document.getElementById('hr-room')
  if (roomSel) {
    roomSel.innerHTML = `<option value="">— เลือกห้อง —</option>` +
      rooms.map(r => `<option value="${r}">${r}</option>`).join('')
  }

  const _renderTable = async () => {
    const rows = await getHomeroomTeachers(curYear, curSem)
    const wrap = document.getElementById('homeroom-table-wrap')
    if (!rows.length) {
      wrap.innerHTML = `<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่มีครูที่ปรึกษา</p></div>`; return
    }
    wrap.innerHTML = `<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-center">ประเภท</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${rows.map(r=>`
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${r.main_room}</td>
          <td class="px-5 py-3 text-gray-600">
            ${r.teachers?.full_name??'—'}
            <span class="text-xs text-gray-400 ml-1">${r.teachers?.teacher_code?`(${r.teachers.teacher_code})`:''}</span>
          </td>
          <td class="px-5 py-3 text-center">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${r.category==='สามัญ'?'bg-blue-50 text-blue-700':'bg-amber-50 text-amber-700'}">${r.category??'—'}</span>
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._deleteHomeroom(${r.id},'${r.main_room}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`
  }

  await _renderTable()

  // Teacher search in form
  const codeEl = document.getElementById('hr-teacher-code')
  const nameEl = document.getElementById('hr-teacher-name')
  const dropEl = document.getElementById('hr-teacher-dropdown')
  const idEl   = document.getElementById('hr-teacher-id')

  const _pickT = (t) => {
    idEl.value   = t ? t.id : ''
    codeEl.value = t ? (t.teacher_code ?? '') : ''
    nameEl.value = t ? t.full_name : ''
    dropEl.classList.add('hidden')
  }
  const _renderDrop = (list) => {
    dropEl.innerHTML = !list.length
      ? `<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>`
      : list.map(t=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 t-opt" data-id="${t.id}">
           <span class="font-mono text-xs text-gray-400 mr-2">${t.teacher_code??''}</span>${t.full_name}</div>`).join('')
    dropEl.querySelectorAll('.t-opt').forEach(el =>
      el.addEventListener('mousedown', e => { e.preventDefault(); _pickT(allTeachers.find(x=>String(x.id)===el.dataset.id)) }))
    dropEl.classList.remove('hidden')
  }
  codeEl.oninput = () => {
    const q = codeEl.value.toLowerCase()
    const ex = allTeachers.find(t=>(t.teacher_code??'').toLowerCase()===q)
    if (ex) _pickT(ex)
    else if (q) _renderDrop(allTeachers.filter(t=>(t.teacher_code??'').toLowerCase().startsWith(q)))
  }
  nameEl.onfocus = () => _renderDrop(allTeachers)
  nameEl.oninput = () => {
    const q = nameEl.value.toLowerCase()
    _renderDrop(q ? allTeachers.filter(t=>t.full_name.toLowerCase().includes(q)) : allTeachers)
  }
  nameEl.onblur = () => setTimeout(()=>dropEl.classList.add('hidden'),150)

  window._addHomeroom = () => {
    _pickT(null)
    document.getElementById('hr-room').value     = ''
    document.getElementById('hr-edit-id').value  = ''
    document.getElementById('homeroom-form-title').textContent = 'เพิ่มครูที่ปรึกษา'
    document.getElementById('homeroom-form-wrap').classList.remove('hidden')
  }
  window._deleteHomeroom = async (id, room) => {
    if (!confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${room}?`)) return
    try { await deleteHomeroomTeacher(id); showToast('ลบแล้ว','success'); await _renderTable() }
    catch { showToast('ลบไม่สำเร็จ','error') }
  }

  document.getElementById('homeroom-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('hr-save')
    const tid = document.getElementById('hr-teacher-id').value
    const room = document.getElementById('hr-room').value.trim()
    if (!tid || !room) { showToast('กรุณาเลือกครูและห้องเรียน','warning'); return }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await upsertHomeroomTeacher({
        teacher_id: Number(tid), main_room: room,
        category:   document.getElementById('hr-category').value,
        academic_year: curYear, semester: curSem,
      })
      showToast('บันทึกสำเร็จ','success')
      document.getElementById('homeroom-form-wrap').classList.add('hidden')
      await _renderTable()
    } catch (err) { showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error') }
    finally { btn.disabled = false; btn.textContent = 'บันทึก' }
  })
}

// ─── View: Score Column Config ────────────────────────────────────────────────
export async function renderScoreColConfig() {
  setActiveNav('score-col-config')
  document.getElementById('page-title').textContent = 'คอลัมน์คะแนน (Sheet)'

  // ─── สร้างช่วงคอลัมน์ ────────────────────────────────────────────────────
  const _colNum = s => { let n=0; for(const c of s) n=n*26+c.charCodeAt(0)-64; return n }
  const _numCol = n => { let s=''; while(n>0){n--;s=String.fromCharCode(65+n%26)+s;n=Math.floor(n/26)} return s }
  const _range  = (a,b) => { const r=[]; for(let i=_colNum(a);i<=_colNum(b);i++) r.push(_numCol(i)); return r }

  const COL_GROUPS = [
    { label: 'EH – EV (กลางภาค/ระหว่างเรียน)', cols: _range('EH','EV'), color: 'bg-blue-100 text-blue-700 border-blue-300' },
    { label: 'EX – FE (ปลายภาค)', cols: _range('EX','FE'), color: 'bg-purple-100 text-purple-700 border-purple-300' },
  ]
  const ALL_COLS = COL_GROUPS.flatMap(g => g.cols)

  const SKILL_GROUPS = ['วิชาการ','ภาษา','ชีวิต','ศาสนามัธยม','ศาสนาปวช','สามัญปวช']
  const ASSIGN_TYPES = ['ระหว่างเรียน','กลางภาค','ปลายภาค']

  const configs = await getScoreColumnConfig().catch(()=>[])

  // state: selectedCols[sg][at] = Set<string>
  const state = {}
  SKILL_GROUPS.forEach(sg => {
    state[sg] = {}
    ASSIGN_TYPES.forEach(at => {
      const c = configs.find(x => x.skill_group===sg && x.assignment_type===at)
      state[sg][at] = new Set(c ? c.allowed_columns.split(',').map(s=>s.trim()).filter(Boolean) : [])
    })
  })

  // ─── Build HTML ──────────────────────────────────────────────────────────
  const _btnGroup = (sg, at) => COL_GROUPS.map(g => `
    <div class="flex flex-wrap gap-1 pb-1">
      <span class="text-xs text-gray-300 w-full">${g.label}</span>
      ${g.cols.map(col => {
        const sel = state[sg][at].has(col)
        return `<button type="button"
          class="col-btn px-1.5 py-0.5 rounded text-xs font-mono border transition
                 ${sel ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}"
          data-sg="${sg}" data-at="${at}" data-col="${col}">
          ${col}
        </button>`
      }).join('')}
    </div>`).join('')

  setContent(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">ตั้งค่าคอลัมน์ใน Google Sheet</h2>
        <p class="text-xs text-gray-400 mt-0.5">คลิกปุ่มคอลัมน์เพื่อเลือก (สีเขียว = อนุญาต)</p>
      </div>
      <button id="scc-save-btn"
        class="btn-primary px-6 py-2.5 text-white text-sm font-semibold rounded-xl">
        💾 บันทึกทั้งหมด
      </button>
    </div>

    <!-- Legend -->
    <div class="flex flex-wrap gap-3 mb-4 text-xs">
      ${COL_GROUPS.map(g=>`
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded ${g.color.split(' ')[0]} border ${g.color.split(' ')[2]}"></span>
        <span class="text-gray-600 font-mono font-medium">${g.label}</span>
      </div>`).join('')}
      <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-100 shadow-sm">
        <span class="w-3 h-3 rounded bg-emerald-500"></span>
        <span class="text-gray-600">= เลือกแล้ว</span>
      </div>
    </div>

    <!-- Grid per skill group -->
    <div class="space-y-4">
      ${SKILL_GROUPS.map(sg => `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800">กลุ่มทักษะ: ${sg}</h3>
          <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="scc-lock w-3.5 h-3.5 rounded" data-sg="${sg}"
              ${configs.find(c=>c.skill_group===sg&&c.is_fixed)?'checked':''} />
            ล็อก (ครูเลือกเองไม่ได้)
          </label>
        </div>
        <div class="divide-y divide-gray-50">
          ${ASSIGN_TYPES.map(at => `
          <div class="px-5 py-3">
            <div class="flex items-start gap-4">
              <div class="w-24 flex-shrink-0 pt-1">
                <span class="text-xs font-medium text-gray-600">${at}</span>
                <p class="text-xs text-gray-400 mt-0.5" id="scc-count-${sg.replace(/\s/g,'_')}-${at.replace(/\s/g,'_')}">
                  ${state[sg][at].size} คอลัมน์
                </p>
              </div>
              <div class="flex-1 space-y-1">
                ${_btnGroup(sg, at)}
              </div>
              <button type="button" class="scc-clear-btn text-xs text-gray-400 hover:text-red-400 flex-shrink-0 pt-1"
                data-sg="${sg}" data-at="${at}">ล้าง</button>
            </div>
          </div>`).join('')}
        </div>
      </div>`).join('')}
    </div>
  </div>`)

  // ─── Toggle button click ──────────────────────────────────────────────────
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.col-btn')
    if (!btn) return
    const { sg, at, col } = btn.dataset
    if (state[sg][at].has(col)) {
      state[sg][at].delete(col)
      btn.className = btn.className.replace('bg-emerald-500 text-white border-emerald-500','bg-white text-gray-500 border-gray-200 hover:border-gray-400')
    } else {
      state[sg][at].add(col)
      btn.className = btn.className.replace('bg-white text-gray-500 border-gray-200 hover:border-gray-400','bg-emerald-500 text-white border-emerald-500')
    }
    const countEl = document.getElementById(`scc-count-${sg.replace(/\s/g,'_')}-${at.replace(/\s/g,'_')}`)
    if (countEl) countEl.textContent = `${state[sg][at].size} คอลัมน์`

    const clearBtn = document.querySelector(`.scc-clear-btn[data-sg="${sg}"][data-at="${at}"]`)
    if (clearBtn) clearBtn.style.opacity = state[sg][at].size > 0 ? '1' : '0.3'
  })

  // ─── Clear row ────────────────────────────────────────────────────────────
  document.querySelectorAll('.scc-clear-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const { sg, at } = btn.dataset
      state[sg][at].clear()
      document.querySelectorAll(`.col-btn[data-sg="${sg}"][data-at="${at}"]`).forEach(b => {
        b.className = b.className.replace('bg-emerald-500 text-white border-emerald-500','bg-white text-gray-500 border-gray-200 hover:border-gray-400')
      })
      const countEl = document.getElementById(`scc-count-${sg.replace(/\s/g,'_')}-${at.replace(/\s/g,'_')}`)
      if (countEl) countEl.textContent = '0 คอลัมน์'
    })
  })

  // ─── Save ─────────────────────────────────────────────────────────────────
  document.getElementById('scc-save-btn').addEventListener('click', async () => {
    const btn = document.getElementById('scc-save-btn')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const payloads = []
      SKILL_GROUPS.forEach(sg => {
        const isFixed = document.querySelector(`.scc-lock[data-sg="${sg}"]`)?.checked ?? false
        ASSIGN_TYPES.forEach(at => {
          const cols = [...state[sg][at]].join(',')
          if (cols) payloads.push({ skill_group: sg, assignment_type: at, allowed_columns: cols, is_fixed: isFixed })
        })
      })
      for (const p of payloads) await upsertScoreColumnConfig(p)
      showToast(`บันทึก ${payloads.length} รายการสำเร็จ ✅`, 'success')
    } catch (err) { showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error') }
    finally { btn.disabled = false; btn.textContent = '💾 บันทึกทั้งหมด' }
  })
}

// ─── Admin Course Picker (ก่อนลงทะเบียนห้องเรียน) ───────────────────────────
async function _renderAdminCoursePicker() {
  setActiveNav('subjects')
  document.getElementById('page-title').textContent = 'เลือกคอร์สวิชา'

  const subjects = await getMasterSubjects().catch(()=>[])

  document.getElementById('main-content').innerHTML = `
    <div class="max-w-4xl mx-auto animate-fade">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="renderSubjects()" class="text-sm text-gray-500 hover:text-indigo-600">← กลับ</button>
        <h2 class="text-lg font-bold text-gray-800">เลือกคอร์สเพื่อลงทะเบียนห้องเรียน</h2>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        ${!subjects.length
          ? `<div class="text-center py-16 text-gray-400"><p class="text-4xl mb-3">📖</p><p>ยังไม่มีคอร์สวิชา — สร้างคอร์สก่อน</p></div>`
          : `<table class="w-full text-sm">
              <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                <tr>
                  <th class="px-5 py-3 text-left">รหัส / ชื่อวิชา</th>
                  <th class="px-5 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
                  <th class="px-5 py-3 text-center hidden md:table-cell">ชั้นปี</th>
                  <th class="px-5 py-3 text-right">เลือก</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${subjects.map(s=>`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-5 py-3">
                    <p class="font-semibold text-gray-800">${s.subject_name}</p>
                    <p class="text-xs font-mono text-indigo-500">${s.subject_code??'—'}</p>
                  </td>
                  <td class="px-5 py-3 hidden sm:table-cell">
                    ${s.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${s.dept}</span>`:'—'}
                  </td>
                  <td class="px-5 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.grade_level??'—'}</td>
                  <td class="px-5 py-3 text-right">
                    <button onclick="window._adminRegisterClass(${s.id})"
                      class="btn-primary px-4 py-1.5 text-white text-xs font-medium rounded-lg">
                      ลงทะเบียนห้อง
                    </button>
                  </td>
                </tr>`).join('')}
              </tbody>
            </table>`}
      </div>
    </div>`

  // expose renderSubjects to window for the back button
  window.renderSubjects = renderSubjects
}

// ─── View: School Holidays ────────────────────────────────────────────────────
export async function renderHolidays() {
  setActiveNav('holidays')
  document.getElementById('page-title').textContent = 'วันหยุดโรงเรียน'

  const cfg    = await getSystemConfig().catch(() => ({}))
  const year   = cfg.academic_year ?? new Date().getFullYear() + 543
  const sem    = cfg.semester ?? 1

  const _load = async () => {
    const rows = await getSchoolHolidaysFull(year, sem).catch(() => [])
    const wrap = document.getElementById('holiday-table')
    if (!wrap) return
    if (!rows.length) {
      wrap.innerHTML = `<div class="text-center py-10 text-gray-400">
        <p class="text-3xl mb-2">📅</p><p>ยังไม่มีวันหยุดในภาคเรียนนี้</p></div>`
      return
    }
    wrap.innerHTML = `<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
        <tr>
          <th class="px-4 py-3 text-left">วันที่</th>
          <th class="px-4 py-3 text-left">คำอธิบาย</th>
          <th class="px-4 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${rows.map(h => `
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 font-mono text-indigo-600">${h.holiday_date}</td>
            <td class="px-4 py-3 text-gray-700">${h.description ?? '—'}</td>
            <td class="px-4 py-3 text-right">
              <button onclick="window._deleteHoliday(${h.id})"
                class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>`
  }

  setContent(`<div class="max-w-3xl mx-auto animate-fade space-y-5">
    <div>
      <h2 class="text-lg font-bold text-gray-800">วันหยุดโรงเรียน</h2>
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${year} ภาค ${sem} — ระบบจะ highlight วันนี้ในตารางเช็คชื่อ</p>
    </div>

    <!-- Add form -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="text-sm font-semibold text-gray-700 mb-3">เพิ่มวันหยุด</h3>
      <div class="flex flex-wrap gap-3">
        <input id="hol-date" type="date" class="${SEARCH_CLS} flex-1 min-w-40" />
        <input id="hol-desc" type="text" placeholder="คำอธิบาย (ไม่บังคับ)"
          class="${SEARCH_CLS} flex-1 min-w-40" />
        <button id="hol-add" class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
          ＋ เพิ่ม
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="holiday-table"></div>
    </div>
  </div>`)

  await _load()

  document.getElementById('hol-add')?.addEventListener('click', async () => {
    const date = document.getElementById('hol-date').value
    const desc = document.getElementById('hol-desc').value.trim() || null
    if (!date) { showToast('กรุณาเลือกวันที่', 'warning'); return }
    try {
      await upsertHoliday({ holiday_date: date, description: desc, academic_year: year, semester: sem })
      document.getElementById('hol-date').value = ''
      document.getElementById('hol-desc').value = ''
      showToast('เพิ่มวันหยุดแล้ว', 'success')
      await _load()
    } catch (err) { showToast('เกิดข้อผิดพลาด: '+(err.message??''), 'error') }
  })

  window._deleteHoliday = async (id) => {
    if (!confirm('ลบวันหยุดนี้?')) return
    try {
      await deleteHoliday(id)
      showToast('ลบแล้ว', 'success')
      await _load()
    } catch (err) { showToast('ลบไม่สำเร็จ', 'error') }
  }
}

// ─── View: Import CSV ─────────────────────────────────────────────────────────
export function renderImport() {
  setActiveNav('import')
  document.getElementById('page-title').textContent = 'นำเข้าข้อมูล CSV'

  setContent(`
    <div class="max-w-4xl mx-auto animate-fade">

      <!-- Tab -->
      <div class="flex gap-2 mb-6">
        <button id="tab-teachers" onclick="switchImportTab('teachers')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white">
          👩‍🏫 นำเข้าครู
        </button>
        <button id="tab-students" onclick="switchImportTab('students')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
          👦 นำเข้านักเรียน
        </button>
      </div>

      <!-- Hint -->
      <div id="import-hint" class="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-5 text-sm text-blue-700">
        <b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)
      </div>

      <!-- Drop Zone -->
      <div id="drop-zone"
        class="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center
               hover:border-indigo-400 hover:bg-indigo-50 transition cursor-pointer">
        <p class="text-4xl mb-3">📂</p>
        <p class="font-semibold text-gray-700">ลากไฟล์ CSV มาวางที่นี่</p>
        <p class="text-sm text-gray-400 mt-1">หรือ</p>
        <label class="mt-3 inline-block cursor-pointer">
          <span class="btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl">
            เลือกไฟล์
          </span>
          <input id="csv-file" type="file" accept=".csv" class="hidden" />
        </label>
      </div>

      <!-- Preview -->
      <div id="import-preview" class="mt-6 hidden">
        <div class="flex items-center justify-between mb-3">
          <p id="preview-count" class="text-sm font-semibold text-gray-700"></p>
          <button id="btn-import"
            class="btn-primary px-6 py-2.5 text-white text-sm font-semibold rounded-xl">
            นำเข้าทั้งหมด
          </button>
        </div>
        <div id="preview-table"></div>
        <div id="import-progress" class="hidden mt-4">
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div id="progress-bar" class="h-full bg-indigo-500 transition-all duration-300" style="width:0%"></div>
          </div>
          <p id="progress-text" class="text-xs text-gray-500 mt-1 text-center"></p>
        </div>
      </div>

    </div>`)

  let currentType = 'teachers'
  let parsedRows  = []

  window.switchImportTab = (type) => {
    currentType = type
    parsedRows  = []
    document.getElementById('import-preview').classList.add('hidden')

    const hints = {
      teachers: '<b>รูปแบบ CSV ครู:</b> teacher_code, teacher_name, phone, category (สามัญ/ศาสนา)',
      students: '<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, photo_url',
    }
    document.getElementById('import-hint').innerHTML = hints[type]

    document.getElementById('tab-teachers').className = type === 'teachers'
      ? 'px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white'
      : 'px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
    document.getElementById('tab-students').className = type === 'students'
      ? 'px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white'
      : 'px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
  }

  const handleFile = (file) => {
    if (!file || !file.name.endsWith('.csv')) {
      showToast('กรุณาเลือกไฟล์ .csv เท่านั้น', 'warning'); return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      parsedRows = parseCSV(e.target.result)
      document.getElementById('preview-count').textContent =
        `พบข้อมูล ${parsedRows.length} แถว (แสดง 10 ตัวอย่างด้านล่าง)`
      document.getElementById('preview-table').innerHTML =
        buildPreviewHTML(parsedRows, currentType)
      document.getElementById('import-preview').classList.remove('hidden')
    }
    reader.readAsText(file, 'UTF-8')
  }

  document.getElementById('csv-file').addEventListener('change', e => handleFile(e.target.files[0]))

  const zone = document.getElementById('drop-zone')
  zone.addEventListener('dragover',  e => { e.preventDefault(); zone.classList.add('border-indigo-400','bg-indigo-50') })
  zone.addEventListener('dragleave', ()  => zone.classList.remove('border-indigo-400','bg-indigo-50'))
  zone.addEventListener('drop', e => {
    e.preventDefault()
    zone.classList.remove('border-indigo-400','bg-indigo-50')
    handleFile(e.dataTransfer.files[0])
  })

  document.getElementById('btn-import').addEventListener('click', async () => {
    if (!parsedRows.length) return
    const btn      = document.getElementById('btn-import')
    const progress = document.getElementById('import-progress')
    const bar      = document.getElementById('progress-bar')
    const txt      = document.getElementById('progress-text')

    btn.disabled = true
    progress.classList.remove('hidden')

    const onProgress = (done, total) => {
      const pct = Math.round(done / total * 100)
      bar.style.width = pct + '%'
      txt.textContent = `${done} / ${total} แถว`
    }

    try {
      const fn   = currentType === 'teachers' ? importTeachers : importStudents
      const done = await fn(parsedRows, onProgress)
      showToast(`นำเข้าสำเร็จ ${done} รายการ`, 'success')
      bar.style.width = '100%'
    } catch (err) {
      showToast('นำเข้าไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      btn.disabled = false
    }
  })
}

// ─── Admin: Payment Requests ──────────────────────────────────────────────────
export async function renderPayments() {
  setActiveNav('payments')
  document.getElementById('page-title').textContent = 'การชำระเงิน'

  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">💳 คำขอชำระเงิน</h2>
        <p class="text-xs text-gray-400 mt-0.5">ตรวจสอบสลิปและอนุมัติแพ็กเกจให้ครู</p>
      </div>
      <button id="pay-refresh" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1">
        🔄 รีเฟรช
      </button>
    </div>

    <!-- Filter tabs -->
    <div class="flex gap-2 mb-4 border-b border-gray-200">
      ${['ทั้งหมด','รอตรวจสอบ','อนุมัติแล้ว','ปฏิเสธ'].map((t,i) =>
        `<button class="pay-tab text-sm font-medium px-3 py-2 border-b-2 transition
          ${i===0 ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-400 hover:text-gray-600'}"
          data-filter="${['all','pending','approved','rejected'][i]}">${t}</button>`
      ).join('')}
    </div>

    <div id="pay-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div>
        <p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`)

  let allRequests = []
  let currentFilter = 'all'

  const render = () => {
    const list = document.getElementById('pay-list')
    if (!list) return
    const filtered = currentFilter === 'all'
      ? allRequests
      : allRequests.filter(r => r.status === currentFilter)

    if (!filtered.length) {
      list.innerHTML = `<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📭</p>
        <p class="text-sm">ไม่มีคำขอในหมวดนี้</p>
      </div>`
      return
    }

    list.innerHTML = filtered.map(r => {
      const statusCfg = {
        pending:  { label: '⏳ รอตรวจสอบ', cls: 'bg-amber-100 text-amber-700' },
        approved: { label: '✅ อนุมัติแล้ว', cls: 'bg-emerald-100 text-emerald-700' },
        rejected: { label: '❌ ปฏิเสธ',     cls: 'bg-red-100 text-red-700' },
      }[r.status] ?? { label: r.status, cls: 'bg-gray-100 text-gray-600' }

      const pkgLabel = r.package_type === 'semester'
        ? '📦 เหมาทั้งเทอม (299 บ.)'
        : `📘 รายวิชา — ${r.master_subjects?.subject_name ?? '—'} (49 บ.)`

      const date = new Date(r.created_at).toLocaleDateString('th-TH', {
        day: 'numeric', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit'
      })

      return `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${r.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              ${(r.teachers?.full_name ?? '?').charAt(0)}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">${r.teachers?.full_name ?? '—'}</p>
              <p class="text-xs text-gray-400">รหัส ${r.teachers?.teacher_code ?? '—'} · ${r.teachers?.phone ?? '—'}</p>
            </div>
          </div>
          <span class="text-[11px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${statusCfg.cls}">
            ${statusCfg.label}
          </span>
        </div>

        <!-- รายละเอียด -->
        <div class="px-4 py-3 space-y-2">
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">แพ็กเกจ</span>
            <span class="font-medium text-gray-700">${pkgLabel}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-gray-500">ส่งเมื่อ</span>
            <span class="text-gray-600">${date}</span>
          </div>
          ${r.admin_note ? `
          <div class="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-500">
            💬 หมายเหตุ: ${r.admin_note}
          </div>` : ''}
        </div>

        <!-- สลิป -->
        ${r.slip_url ? `
        <div class="px-4 pb-3">
          <button class="view-slip-btn w-full py-2 rounded-xl border border-gray-200 text-sm text-indigo-600 font-medium hover:bg-indigo-50 transition"
            data-url="${r.slip_url}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>` : `
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${r.status === 'pending' ? `
        <div class="flex gap-2 px-4 pb-4">
          <button class="reject-btn flex-1 py-2.5 rounded-xl border-2 border-red-200 text-red-600
                         text-sm font-semibold hover:bg-red-50 transition" data-id="${r.id}">
            ❌ ปฏิเสธ
          </button>
          <button class="approve-btn flex-1 py-2.5 rounded-xl bg-emerald-600 text-white
                         text-sm font-semibold hover:bg-emerald-700 transition"
            data-id="${r.id}" data-teacher="${r.teachers?.id}" data-pkg="${r.package_type}">
            ✅ อนุมัติ
          </button>
        </div>` : ''}
      </div>`
    }).join('')

    // ── Approve ──
    list.querySelectorAll('.approve-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm(`อนุมัติคำขอนี้?\nครูจะสามารถสร้างห้องเรียนได้ทันที`)) return
        btn.disabled = true; btn.textContent = '⏳ กำลังอนุมัติ...'
        try {
          await reviewPaymentRequest(parseInt(btn.dataset.id), 'approved')
          await approveTeacherQuota(parseInt(btn.dataset.teacher), btn.dataset.pkg)
          showToast('อนุมัติแล้ว ✅', 'success')
          window._refreshPaymentBadge?.()
          allRequests = await getAllPaymentRequests()
          render()
        } catch { showToast('เกิดข้อผิดพลาด', 'error'); btn.disabled = false; btn.textContent = '✅ อนุมัติ' }
      })
    })

    // ── Reject ──
    list.querySelectorAll('.reject-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        _showRejectModal(parseInt(btn.dataset.id), async (note) => {
          await reviewPaymentRequest(parseInt(btn.dataset.id), 'rejected', note)
          showToast('ปฏิเสธแล้ว', 'info')
          window._refreshPaymentBadge?.()
          allRequests = await getAllPaymentRequests()
          render()
        })
      })
    })

    // ── View slip ──
    list.querySelectorAll('.view-slip-btn').forEach(btn => {
      btn.addEventListener('click', () => _showSlipModal(btn.dataset.url))
    })
  }

  // โหลดข้อมูล
  try {
    allRequests = await getAllPaymentRequests()
    render()
  } catch { showToast('โหลดข้อมูลไม่สำเร็จ', 'error') }

  // Filter tabs
  document.querySelectorAll('.pay-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentFilter = tab.dataset.filter
      document.querySelectorAll('.pay-tab').forEach(t => {
        t.classList.toggle('border-indigo-600', t === tab)
        t.classList.toggle('text-indigo-600',   t === tab)
        t.classList.toggle('border-transparent', t !== tab)
        t.classList.toggle('text-gray-400',      t !== tab)
      })
      render()
    })
  })

  document.getElementById('pay-refresh')?.addEventListener('click', async () => {
    allRequests = await getAllPaymentRequests()
    render()
    showToast('รีเฟรชแล้ว', 'success')
  })
}

// popup ดูสลิป
function _showSlipModal(url) {
  const el = document.createElement('div')
  el.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4'
  el.innerHTML = `
    <div class="relative max-w-sm w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <img src="${url}" class="w-full rounded-2xl shadow-2xl object-contain max-h-[80vh]"/>
      <a href="${url}" target="_blank" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`
  document.body.appendChild(el)
  el.querySelector('button').addEventListener('click', () => el.remove())
  el.addEventListener('click', e => { if (e.target === el) el.remove() })
}

// popup ปฏิเสธพร้อมเหตุผล
function _showRejectModal(id, onConfirm) {
  const el = document.createElement('div')
  el.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
  el.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5">
      <h3 class="font-bold text-gray-800 mb-3">❌ ปฏิเสธคำขอ</h3>
      <p class="text-xs text-gray-500 mb-2">ระบุเหตุผล (ครูจะเห็นข้อความนี้)</p>
      <textarea id="reject-note" rows="3" placeholder="เช่น สลิปไม่ชัด กรุณาส่งใหม่"
        class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 resize-none"></textarea>
      <div class="flex gap-2 mt-3">
        <button id="rj-cancel" class="flex-1 py-2.5 rounded-xl border text-sm text-gray-600">ยกเลิก</button>
        <button id="rj-confirm" class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">ยืนยันปฏิเสธ</button>
      </div>
    </div>`
  document.body.appendChild(el)
  el.querySelector('#rj-cancel').addEventListener('click', () => el.remove())
  el.querySelector('#rj-confirm').addEventListener('click', async () => {
    const note = el.querySelector('#reject-note').value.trim() || null
    el.remove()
    await onConfirm(note)
  })
}
