import { getStats, getTeachers, getClasses, getStudents,
         getSystemConfig, updateSystemConfig, getMasterSubjects,
         getDepartments, getPeriods, createSubject,
         updateClass, deleteClass,
         updateStudent, deleteStudent,
         getHomeroomTeachers, assignHomeroomTeacher, deleteHomeroomTeacher,
         getScoreColumnConfig, upsertScoreColumnConfig,
         getUniqueRooms, getUniqueReligionRooms, unlinkTeacherAccount,
         getSchoolHolidaysFull, upsertHoliday, deleteHoliday,
         getAllPaymentRequests, reviewPaymentRequest, approveTeacherQuota,
         getScheduleTeacherIds,
         getLifeSkillColumns, createLifeSkillColumn,
         updateLifeSkillColumn, deleteLifeSkillColumn,
         getReadingScoreColumns, createReadingScoreColumn,
         updateReadingScoreColumn, deleteReadingScoreColumn,
         getAllLifeSkillScores, getAllReadingScores, getAllPrayerRecords,
         savePrayerCellAdmin, getStudentsByReligionRoom,
         getPrayerRecordsByRoom } from './api.js'
import { renderCourseForm, renderClassForm, renderClassEditForm, renderScoreColumns } from './teacher-views.js'
import { showToast, showPageLoader } from './ui.js'
import { openTeacherModal, handleDeleteTeacher,
         openSubjectModal, handleDeleteSubject,
         openDeptModal, handleDeleteDept,
         openPeriodModal, handleDeletePeriod } from './dashboard.js'
import { parseCSV, importTeachers, importStudents, buildPreviewHTML } from './import.js'
import { uploadSystemAsset } from './storage.js'
import {
  DEFAULT_SUBJECT_SYNC_COLUMNS,
  DEFAULT_SUBJECT_SYNC_KEY_FIELD,
  DEFAULT_SUBJECT_SYNC_SHEET_ID,
  DEFAULT_SUBJECT_SYNC_TAB,
  SUBJECT_SYNC_COLUMNS,
  syncSubjectCatalog,
} from './sync.js'

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
const _onclickText = value => String(value ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")
const _esc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

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
        <button type="button" onclick="window._adminNav?.('${k}')"
          class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 text-left
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl
            ${k==='teachers'?'bg-indigo-100':k==='students'?'bg-purple-100':k==='classes'?'bg-blue-100':'bg-green-100'}">
            ${{teachers:'👩‍🏫',students:'👦',classes:'🏫',subjects:'📚'}[k]}
          </div>
          <div>
            <p class="text-xs text-gray-500">${{teachers:'ครูผู้สอน',students:'นักเรียน',classes:'ห้องเรียน',subjects:'รายวิชา'}[k]}</p>
            <p id="stat-${k}" class="text-2xl font-bold
              ${k==='teachers'?'text-indigo-700':k==='students'?'text-purple-700':k==='classes'?'text-blue-700':'text-green-700'}">—</p>
          </div>
        </button>`).join('')}
    </div>

    <!-- แถวที่สอง: ลงทะเบียน + pending payments -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- ครูที่ลงทะเบียนแล้ว -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h4 class="font-semibold text-gray-700 mb-3">🔑 บัญชีผู้ใช้ครู</h4>
        <div class="flex gap-4">
          <button type="button" onclick="window._adminNav?.('registered-teachers')"
            class="flex-1 text-center bg-emerald-50 rounded-xl py-3 hover:bg-emerald-100
                   focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
            <p id="stat-registered" class="text-2xl font-bold text-emerald-700">—</p>
            <p class="text-xs text-gray-500 mt-0.5">ลงทะเบียนแล้ว</p>
          </button>
          <button type="button" onclick="window._adminNav?.('registered-teachers')"
            class="flex-1 text-center bg-gray-50 rounded-xl py-3 hover:bg-gray-100
                   focus:outline-none focus:ring-2 focus:ring-gray-200 transition">
            <p id="stat-unregistered" class="text-2xl font-bold text-gray-500">—</p>
            <p class="text-xs text-gray-500 mt-0.5">ยังไม่มีบัญชี</p>
          </button>
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
            <td class="px-4 py-3 text-right whitespace-nowrap">
              <button onclick="window._adminViewSchedule(${t.id},'${_onclickText(t.full_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>
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
    const cfg = await getSystemConfig().catch(()=>({}))
    const curYear = parseInt(cfg.academicYear ?? new Date().getFullYear()+543)
    const curSem = parseInt(cfg.semester ?? 1)
    const [all, scheduleTeacherIds] = await Promise.all([
      getTeachers(),
      getScheduleTeacherIds(curYear, curSem).catch(()=>[]),
    ])
    const scheduledSet = new Set(scheduleTeacherIds)
    const registered   = all.filter(t => t.profile_id)
    const unregistered = all.filter(t => !t.profile_id)
    const registeredWithSchedule = registered.filter(t => scheduledSet.has(t.id))
    const registeredNoSchedule = registered.filter(t => !scheduledSet.has(t.id))

    const statCard = (tab, label, count, color) =>
      `<button type="button" data-rt-tab="${tab}"
        class="rt-stat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 text-left
               hover:border-emerald-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition">
        <div class="w-12 h-12 rounded-xl ${color} flex items-center justify-center text-xl font-bold">${count}</div>
        <p class="text-sm text-gray-500">${label}</p>
      </button>`

    const depts = [...new Set(all.map(t => t.dept).filter(Boolean))].sort()

    setContent(`<div class="max-w-5xl mx-auto animate-fade space-y-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">บัญชีผู้ใช้ครู</h2>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-3">
        ${statCard('all', 'ทั้งหมด', all.length, 'bg-indigo-100 text-indigo-700')}
        ${statCard('registered', 'มีบัญชีแล้ว', registered.length, 'bg-emerald-100 text-emerald-700')}
        ${statCard('unregistered', 'ยังไม่ลงทะเบียน', unregistered.length, 'bg-amber-100 text-amber-700')}
      </div>

      <div id="rt-schedule-stats" class="hidden grid grid-cols-2 gap-3">
        ${statCard('scheduled', 'สร้างตารางสอนแล้ว', registeredWithSchedule.length, 'bg-green-100 text-green-700')}
        ${statCard('unscheduled', 'ยังไม่สร้างตารางสอน', registeredNoSchedule.length, 'bg-gray-100 text-gray-600')}
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
    let activeTab = 'all'
    let scheduleFilter = null

    const updateStatCards = () => {
      document.querySelectorAll('[data-rt-tab]').forEach(card => {
        const active = card.dataset.rtTab === activeTab || card.dataset.rtTab === scheduleFilter
        card.classList.toggle('border-emerald-400', active)
        card.classList.toggle('bg-emerald-50', active)
        card.classList.toggle('shadow-lg', active)
        card.classList.toggle('shadow-emerald-100', active)
        card.classList.toggle('ring-2', active)
        card.classList.toggle('ring-emerald-200', active)
        card.classList.toggle('border-gray-100', !active)
        card.querySelector('p')?.classList.toggle('text-emerald-700', active)
      })
    }

    const setAccountTab = (tab) => {
      if (tab === 'scheduled' || tab === 'unscheduled') {
        activeTab = 'registered'
        scheduleFilter = tab
      } else {
        activeTab = tab
        scheduleFilter = null
      }
      _tabPool = activeTab === 'registered' ? registered : activeTab === 'unregistered' ? unregistered : all
      document.getElementById('rt-schedule-stats')?.classList.toggle('hidden', activeTab !== 'registered')
      updateStatCards()
      applyFilters()
    }

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
                const hasSchedule = scheduledSet.has(t.id)
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
                      ? `<button onclick="window._adminViewSchedule(${t.id},'${_onclickText(t.full_name)}')"
                          class="text-xs font-medium mr-3 px-2.5 py-1 rounded-lg border
                            ${hasSchedule
                              ? 'text-emerald-700 border-emerald-300 bg-emerald-50 shadow-sm shadow-emerald-100 hover:bg-emerald-100'
                              : 'text-violet-600 border-transparent hover:text-violet-800'}">
                          🗓️ ตาราง</button>
                        <button onclick="handleUnlinkTeacher(${t.id}, '${_onclickText(t.full_name)}')"
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
        (!dept || t.dept     === dept) &&
        (!scheduleFilter || (scheduleFilter === 'scheduled' ? scheduledSet.has(t.id) : !scheduledSet.has(t.id)))
      )
      const countEl = document.getElementById('rt-count')
      if (countEl) countEl.textContent = rows.length
      renderTable(rows)
    }

    document.querySelectorAll('[data-rt-tab]').forEach(card => {
      card.addEventListener('click', () => setAccountTab(card.dataset.rtTab))
    })
    setAccountTab('all')

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
    const [classes, teachers] = await Promise.all([
      getClasses(),
      getTeachers().catch(()=>[]),
    ])
    const teacherById = Object.fromEntries(teachers.map(t => [t.id, t]))
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
            ${c.master_subjects?.teacher_id
              ? `<button onclick="window._adminViewSchedule(${c.master_subjects.teacher_id},'${_onclickText(teacherById[c.master_subjects.teacher_id]?.full_name ?? c.master_subjects.subject_name ?? c.class_name)}')"
                  class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`
              : ''}
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
          <select id="sf-page-size" class="${SELECT_CLS}">
            <option value="50">แสดง 50 คน</option>
            <option value="100">แสดง 100 คน</option>
            <option value="500">แสดง 500 คน</option>
            <option value="1000" selected>แสดง 1000 คน</option>
            <option value="all">แสดงทั้งหมด</option>
          </select>
        </div>
        <p class="text-xs text-gray-400 mt-2">
          แสดง <span id="sf-showing" class="font-semibold text-indigo-600">${Math.min(all.length, 1000)}</span>
          จาก <span id="sf-count" class="font-semibold text-indigo-600">${all.length}</span>
          / ${all.length} รายการ
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div id="student-table-wrap"></div>
      </div>
    </div>`)

    // cache all students
    let studentCache = Object.fromEntries(all.map(s=>[s.id,s]))
    let pageSize = 1000

    const _renderTable = (rows) => {
      const el = document.getElementById('student-table-wrap')
      const visibleRows = pageSize === 'all' ? rows : rows.slice(0, pageSize)
      document.getElementById('sf-count').textContent = rows.length
      document.getElementById('sf-showing').textContent = visibleRows.length
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
          ${visibleRows.map(s => `
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
      </table>
      ${visibleRows.length < rows.length
        ? `<div class="px-4 py-3 text-center text-xs text-gray-400 border-t border-gray-50">
            เลือกจำนวนที่แสดงด้านบนเพื่อดูรายการเพิ่มเติม
          </div>`
        : ''}
      </div>`
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
      const roomEl = document.getElementById('sf-room')
      const currentRoom = roomEl.value
      const roomOptions = _opts(all
        .filter(s => !gr || _grade(s.main_room) === gr)
        .map(s => _room(s.main_room)))
      if (!roomOptions.includes(currentRoom)) roomEl.value = ''
      roomEl.innerHTML = '<option value="">ทุกห้อง</option>' +
        roomOptions.map(r => `<option value="${r}" ${r === roomEl.value ? 'selected' : ''}>ห้อง ${r}</option>`).join('')
      const rm = roomEl.value
      const gn = document.getElementById('sf-gender').value
      const ps = document.getElementById('sf-page-size').value
      pageSize = ps === 'all' ? 'all' : Number(ps)
      _renderTable(all.filter(s =>
        (!q  || [s.full_name,s.student_code,s.main_room,s.religion_room].some(v=>(v??'').toLowerCase().includes(q))) &&
        (!gr || _grade(s.main_room) === gr) &&
        (!rm || _room(s.main_room)  === rm) &&
        (!gn || s.gender === gn)
      ))
    }
    ['sf-q','sf-grade','sf-room','sf-gender','sf-page-size'].forEach(id => {
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
      { label: '🔗 Sync Engine — Google Sheet', keys: [
        { key: 'centralGasUrl',            label: 'Central GAS URL (Admin deploy ครั้งเดียว — ใช้ร่วมทุก Sync)', type: 'text' },
        { key: 'classInfoTab',             label: 'Tab ข้อมูลรายวิชาในชีทครู (ชื่อแท็บ)', type: 'text' },
        { key: 'classInfoSubjectNameCell', label: 'Cell ชื่อรายวิชา', type: 'text' },
        { key: 'classInfoSubjectCodeCell', label: 'Cell รหัสวิชา', type: 'text' },
        { key: 'classInfoCreditCell',      label: 'Cell หน่วยกิต', type: 'text' },
        { key: 'classInfoGradeCell',       label: 'Cell ชั้นเรียน', type: 'text' },
        { key: 'classInfoHeadStudentCell', label: 'Cell หัวหน้าห้อง', type: 'text' },
        { key: 'classInfoDay1Cell',        label: 'Cell วันสอนคาบที่ 1', type: 'text' },
        { key: 'classInfoDay2Cell',        label: 'Cell วันสอนคาบที่ 2', type: 'text' },
        { key: 'classInfoDay3Cell',        label: 'Cell วันสอนคาบที่ 3', type: 'text' },
        { key: 'classInfoDay4Cell',        label: 'Cell วันสอนคาบที่ 4', type: 'text' },
        { key: 'classInfoDay5Cell',        label: 'Cell วันสอนคาบที่ 5', type: 'text' },
        { key: 'classInfoDay6Cell',        label: 'Cell วันสอนคาบที่ 6', type: 'text' },
        { key: 'classInfoTeacherNameCell', label: 'Cell ครูผู้สอน', type: 'text' },
        { key: 'classInfoTeacherPhoneCell',label: 'Cell เบอร์ติดต่อ', type: 'text' },
        { key: 'classInfoDeptCell',        label: 'Cell กลุ่มสาระ', type: 'text' },
        { key: 'classInfoHeadDeptCell',    label: 'Cell หัวหน้าหมวด', type: 'text' },
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
    const [rawSubjects, rawClasses, allTeachers, departments, cfg] = await Promise.all([
      getMasterSubjects(),
      getClasses(),
      getTeachers().catch(()=>[]),
      getDepartments().catch(()=>[]),
      getSystemConfig().catch(()=>({})),
    ])
    const teacherById = Object.fromEntries(allTeachers.map(t => [t.id, t]))
    const deptByCode = Object.fromEntries(departments.map(d => [d.dept_code, d]))
    const deptByName = Object.fromEntries(departments.map(d => [d.dept_name, d]))
    const withTeacher = row => ({
      ...row,
      _teacher_name: teacherById[row.teacher_id]?.full_name ?? '',
    })
    const allSubjects = rawSubjects.map(withTeacher)
    const allClasses = rawClasses.map(c => ({
      ...c,
      master_subjects: c.master_subjects
        ? {
            ...c.master_subjects,
            _teacher_name: teacherById[c.master_subjects.teacher_id]?.full_name ?? '',
          }
        : c.master_subjects,
    }))
    const depts = _opts(allSubjects.map(s => s.dept))
    const skills = _opts(allSubjects.map(s => s.skill_group))
    let subjectSyncCfg = {
      sheetId: cfg.subjectSyncSheetId || DEFAULT_SUBJECT_SYNC_SHEET_ID,
      tabName: cfg.subjectSyncTabName || DEFAULT_SUBJECT_SYNC_TAB,
      keyField: cfg.subjectSyncKeyField || DEFAULT_SUBJECT_SYNC_KEY_FIELD,
      columns: (() => {
        try {
          const parsed = JSON.parse(cfg.subjectSyncColumns || 'null')
          return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_SUBJECT_SYNC_COLUMNS
        } catch {
          return DEFAULT_SUBJECT_SYNC_COLUMNS
        }
      })(),
    }

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
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-sync-subjects-central"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
            ↑ ซิงค์รายวิชา → ${_esc(subjectSyncCfg.tabName || DEFAULT_SUBJECT_SYNC_TAB)}
          </button>
          <button id="sub-action-btn" onclick="window._subAction()"
            class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
            <span>＋</span> เพิ่มคอร์ส
          </button>
        </div>
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
        <button id="stab-sync" onclick="_switchSubjectTab('sync')"
          class="px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
          ⚙️ ตั้งค่าซิงค์ชีท
        </button>
      </div>

      <!-- Filter Bar -->
      <div id="subject-filter-bar" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
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

    const _setButtonText = () => {
      const btn = document.getElementById('sub-action-btn')
      if (btn) {
        btn.innerHTML = currentTab === 'course'
          ? '<span>＋</span> เพิ่มคอร์ส'
          : currentTab === 'class'
            ? '<span>＋</span> เพิ่มรายวิชา'
            : '<span>✓</span> บันทึกตั้งค่า'
      }
      const syncBtn = document.getElementById('btn-sync-subjects-central')
      if (syncBtn) syncBtn.textContent = `↑ ซิงค์รายวิชา → ${subjectSyncCfg.tabName || DEFAULT_SUBJECT_SYNC_TAB}`
    }

    const _buildSubjectSyncRows = () => allSubjects.map(s => {
      const teacher = teacherById[s.teacher_id] ?? {}
      const dept = deptByCode[s.dept] ?? deptByName[s.dept] ?? {}
      const teacherName = teacher.full_name ?? ''
      const subjectName = s.subject_name ?? ''
      const subjectCode = s.subject_code ?? ''

      return {
        subject_group: s.subject_group ?? '',
        sbJect: `${subjectName}_(${subjectCode})_${teacherName}`,
        subject_name: subjectName,
        subject_code: subjectCode,
        credit: s.credit ?? '',
        year: cfg.academicYear ?? '',
        semester: cfg.semester ?? '',
        grade_level: s.grade_level ?? '',
        teacher_name: teacherName,
        teacher_code: teacher.teacher_code ?? '',
        dept_name: dept.dept_name ?? s.dept ?? '',
        dept_code: dept.dept_code ?? s.dept ?? '',
      }
    })

    const _renderSubjectSyncSettings = () => {
      const selected = new Set(subjectSyncCfg.columns)
      document.getElementById('subject-table-wrap').innerHTML = `
        <div class="p-5 md:p-6">
          <div class="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Google Sheet ID ปลายทาง</label>
              <input id="subject-sync-sheet-id" type="text" value="${_esc(subjectSyncCfg.sheetId)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 19esDfxhPg1ksnOC-..." />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">ชื่อแท็บปลายทาง</label>
              <input id="subject-sync-tab-name" type="text" value="${_esc(subjectSyncCfg.tabName)}"
                class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                placeholder="เช่น 169" />
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-600 mb-1">คอลัมน์สำหรับเทียบข้อมูลเดิม</label>
            <select id="subject-sync-key-field"
              class="input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white">
              ${SUBJECT_SYNC_COLUMNS.map(col => `
                <option value="${_esc(col.key)}" ${subjectSyncCfg.keyField === col.key ? 'selected' : ''}>
                  ${_esc(col.key)} - ${_esc(col.label)}
                </option>
              `).join('')}
            </select>
            <p class="text-xs text-gray-400 mt-1">
              ถ้าพบค่าเดียวกันในชีทเดิม ระบบจะอัปเดตแถวนั้น ถ้าไม่พบจะเพิ่มแถวใหม่โดยไม่ล้างข้อมูลเดิม
            </p>
          </div>

          <div class="flex items-center justify-between gap-3 mb-3">
            <div>
              <h3 class="text-sm font-bold text-gray-700">คอลัมน์ที่จะซิงค์กลับชีท</h3>
              <p class="text-xs text-gray-400 mt-0.5">ระบบจะเขียนหัวตารางตามลำดับด้านล่าง และส่งเฉพาะคอลัมน์ที่เลือก</p>
            </div>
            <button id="subject-sync-select-defaults" type="button"
              class="px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">
              ค่าเริ่มต้น
            </button>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            ${SUBJECT_SYNC_COLUMNS.map(col => `
              <label class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                <input type="checkbox" class="subject-sync-col w-4 h-4 accent-emerald-600"
                  value="${_esc(col.key)}" ${selected.has(col.key) ? 'checked' : ''} />
                <span>
                  <span class="font-semibold">${_esc(col.key)}</span>
                  <span class="block text-xs text-gray-400">${_esc(col.label)}</span>
                </span>
              </label>
            `).join('')}
          </div>

          <div class="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-xs text-emerald-800">
            คอลัมน์ <span class="font-bold">sbJect</span> จะถูกสร้างเป็นรูปแบบ
            <span class="font-bold">subject_name_(subject_code)_teacher_name</span>
          </div>
        </div>`

      document.getElementById('subject-sync-select-defaults')?.addEventListener('click', () => {
        document.querySelectorAll('.subject-sync-col').forEach(inp => {
          inp.checked = DEFAULT_SUBJECT_SYNC_COLUMNS.includes(inp.value)
        })
      })
    }

    const _applyFilter = () => {
      document.getElementById('subject-filter-bar')?.classList.toggle('hidden', currentTab === 'sync')
      _setButtonText()
      if (currentTab === 'sync') {
        _renderSubjectSyncSettings()
        return
      }

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
    window._subAction = async () => {
      if (currentTab === 'course') {
        renderCourseForm(null, async (payload) => {
          await createSubject(payload)
          await renderSubjects()
        })
      } else if (currentTab === 'class') {
        // admin เลือกคอร์สก่อน แล้วลงทะเบียนห้อง
        _renderAdminCoursePicker()
      } else {
        const sheetId = document.getElementById('subject-sync-sheet-id')?.value.trim() ?? ''
        const tabName = document.getElementById('subject-sync-tab-name')?.value.trim() ?? ''
        const keyField = document.getElementById('subject-sync-key-field')?.value ?? DEFAULT_SUBJECT_SYNC_KEY_FIELD
        const selectedColumns = [...document.querySelectorAll('.subject-sync-col:checked')].map(inp => inp.value)
        const columns = selectedColumns.includes(keyField) ? selectedColumns : [keyField, ...selectedColumns]
        if (!sheetId || !tabName) {
          showToast('กรุณากรอก Sheet ID และชื่อแท็บปลายทาง', 'warning')
          return
        }
        if (!columns.length) {
          showToast('กรุณาเลือกคอลัมน์อย่างน้อย 1 คอลัมน์', 'warning')
          return
        }
        const btn = document.getElementById('sub-action-btn')
        const orig = btn?.innerHTML
        if (btn) { btn.disabled = true; btn.textContent = 'กำลังบันทึก...' }
        try {
          await Promise.all([
            updateSystemConfig('subjectSyncSheetId', sheetId),
            updateSystemConfig('subjectSyncTabName', tabName),
            updateSystemConfig('subjectSyncKeyField', keyField),
            updateSystemConfig('subjectSyncColumns', JSON.stringify(columns)),
          ])
          subjectSyncCfg = { sheetId, tabName, keyField, columns }
          _setButtonText()
          showToast('บันทึกตั้งค่าซิงค์รายวิชาแล้ว', 'success')
        } catch (err) {
          showToast('บันทึกตั้งค่าไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        } finally {
          if (btn) { btn.disabled = false; btn.innerHTML = orig }
          _setButtonText()
        }
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

    document.getElementById('btn-sync-subjects-central')?.addEventListener('click', async (e) => {
      const btn = e.currentTarget
      const orig = btn.textContent
      try {
        btn.disabled = true
        btn.textContent = 'กำลังซิงค์...'

        const count = await syncSubjectCatalog(_buildSubjectSyncRows(), {
          sheetId: subjectSyncCfg.sheetId,
          tabName: subjectSyncCfg.tabName,
          headers: subjectSyncCfg.columns,
          keyField: subjectSyncCfg.keyField,
        })
        showToast(`ส่งคำสั่งซิงค์รายวิชา ${count} รายการไปแท็บ ${subjectSyncCfg.tabName} แล้ว`, 'success')
      } catch (err) {
        showToast('ซิงค์รายวิชาไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.disabled = false
        btn.textContent = orig
      }
    })

    window._switchSubjectTab = (tab) => {
      currentTab = tab
      // update tab UI
      document.getElementById('stab-course').className = tab === 'course'
        ? 'px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white'
        : 'px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
      document.getElementById('stab-class').className = tab === 'class'
        ? 'px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white'
        : 'px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
      document.getElementById('stab-sync').className = tab === 'sync'
        ? 'px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white'
        : 'px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
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
          ${s._teacher_name ? `<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${s._teacher_name}</p>` : ''}
        </td>
        <td class="px-4 py-3 hidden sm:table-cell">
          ${s.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700">${s.dept}</span>`:'<span class="text-gray-300 text-xs">—</span>'}
        </td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.grade_level??'—'}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.credit??'—'}</td>
        <td class="px-4 py-3 text-right">
          ${s.teacher_id
            ? `<button onclick="window._adminViewSchedule(${s.teacher_id},'${_onclickText(s._teacher_name || s.subject_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-3">🗓️ ตาราง</button>`
            : ''}
          <button onclick="openSubjectModal(${s.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">แก้ไข</button>
          <button onclick="handleDeleteSubject(${s.id},'${_onclickText(s.subject_name)}')"
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
          ${c.master_subjects?._teacher_name ? `<p class="text-xs text-gray-400 mt-0.5">ครูผู้สอน: ${c.master_subjects._teacher_name}</p>` : ''}
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
          ${c.master_subjects?.teacher_id
            ? `<button onclick="window._adminViewSchedule(${c.master_subjects.teacher_id},'${_onclickText(c.master_subjects._teacher_name || c.master_subjects.subject_name || c.class_name)}')"
                class="text-xs text-violet-600 hover:text-violet-800 font-medium mr-2">🗓️ ตาราง</button>`
            : ''}
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
    </div>

    <div class="flex gap-2 mb-4">
      <button id="hr-tab-samai" data-hr-tab="สามัญ"
        class="hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition">
        สามัญ
      </button>
      <button id="hr-tab-religion" data-hr-tab="ศาสนา"
        class="hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
        ศาสนา
      </button>
    </div>

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

  const [allTeachers, samaiRooms, religionRooms] = await Promise.all([
    getTeachers().catch(()=>[]),
    getUniqueRooms().catch(()=>[]),
    getUniqueReligionRooms().catch(()=>[]),
  ])
  let activeCategory = 'สามัญ'

  const _assignmentMap = rows => Object.fromEntries(
    rows
      .filter(r => r.category === activeCategory)
      .map(r => [r.main_room, r])
  )

  const _setTabUI = () => {
    document.querySelectorAll('.hr-tab').forEach(btn => {
      const active = btn.dataset.hrTab === activeCategory
      btn.className = active
        ? 'hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white transition'
        : 'hr-tab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition'
    })
  }

  const _renderTable = async () => {
    _setTabUI()
    const rows = await getHomeroomTeachers(curYear, curSem)
    const assigned = _assignmentMap(rows)
    const rooms = activeCategory === 'สามัญ' ? samaiRooms : religionRooms
    const wrap = document.getElementById('homeroom-table-wrap')
    if (!rooms.length) {
      wrap.innerHTML = `<div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">🏠</p><p>ยังไม่พบห้องเรียนประเภท${activeCategory}</p></div>`; return
    }
    wrap.innerHTML = `<table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ห้อง</th>
          <th class="px-5 py-3 text-left">ครูที่ปรึกษา</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${rooms.map(room => {
          const r = assigned[room]
          return `
        <tr class="hover:bg-gray-50 transition">
          <td class="px-5 py-3 font-semibold text-gray-800">${room}</td>
          <td class="px-5 py-3 text-gray-600">
            ${r
              ? `<span class="font-medium text-gray-800">${r.teachers?.full_name??'—'}</span>
                 <span class="text-xs text-gray-400 ml-1">${r.teachers?.teacher_code?`(${r.teachers.teacher_code})`:''}</span>`
              : `<button onclick="window._openHomeroomPicker('${_onclickText(room)}','${activeCategory}')"
                   class="text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full">
                   ยังไม่มีครูที่ปรึกษา
                 </button>`}
          </td>
          <td class="px-5 py-3 text-right">
            <button onclick="window._openHomeroomPicker('${_onclickText(room)}','${activeCategory}')"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">${r ? 'เปลี่ยน' : 'เลือกครู'}</button>
            ${r ? `<button onclick="window._deleteHomeroom(${r.id},'${_onclickText(room)}')"
              class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>` : ''}
          </td>
        </tr>`}).join('')}
      </tbody>
    </table>`
  }

  await _renderTable()

  window._deleteHomeroom = async (id, room) => {
    if (!confirm(`ยืนยันลบครูที่ปรึกษาห้อง ${room}?`)) return
    try { await deleteHomeroomTeacher(id); showToast('ลบแล้ว','success'); await _renderTable() }
    catch { showToast('ลบไม่สำเร็จ','error') }
  }

  window._openHomeroomPicker = (room, category) => {
    document.getElementById('hr-picker')?.remove()
    let selected = null
    const m = document.createElement('div')
    m.id = 'hr-picker'
    m.className = 'fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4'
    m.innerHTML = `
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl p-5">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 class="font-bold text-gray-800">เลือกครูที่ปรึกษา</h3>
            <p class="text-xs text-gray-400 mt-0.5">${category} · ห้อง ${room}</p>
          </div>
          <button id="hrp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
          <input id="hrp-code" class="${SELECT_CLS}" placeholder="พิมพ์รหัสครู" autocomplete="off" />
          <input id="hrp-name" class="${SELECT_CLS}" placeholder="พิมพ์ชื่อครู" autocomplete="off" />
        </div>
        <div id="hrp-results" class="border border-gray-100 rounded-xl overflow-y-auto mb-4" style="max-height:240px"></div>
        <button id="hrp-save" disabled
          class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold disabled:opacity-40">
          เลือกครูที่ปรึกษา
        </button>
      </div>`
    document.body.appendChild(m)

    const resultEl = m.querySelector('#hrp-results')
    const saveBtn = m.querySelector('#hrp-save')
    const renderResults = (list) => {
      resultEl.innerHTML = !list.length
        ? `<p class="px-4 py-8 text-center text-sm text-gray-400">ไม่พบครู</p>`
        : list.slice(0, 20).map(t => `
          <button type="button" data-id="${t.id}"
            class="hrp-option w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 border-b border-gray-50 last:border-0">
            <span class="font-mono text-xs text-gray-400 mr-2">${t.teacher_code ?? '—'}</span>
            <span class="font-medium text-gray-800">${t.full_name}</span>
          </button>`).join('')
      resultEl.querySelectorAll('.hrp-option').forEach(btn => {
        btn.addEventListener('click', () => {
          selected = allTeachers.find(t => String(t.id) === btn.dataset.id)
          resultEl.querySelectorAll('.hrp-option').forEach(x => x.classList.remove('bg-emerald-50', 'text-emerald-700'))
          btn.classList.add('bg-emerald-50', 'text-emerald-700')
          saveBtn.disabled = false
        })
      })
    }
    const filterTeachers = () => {
      const code = m.querySelector('#hrp-code').value.trim().toLowerCase()
      const name = m.querySelector('#hrp-name').value.trim().toLowerCase()
      renderResults(allTeachers.filter(t =>
        (!code || (t.teacher_code ?? '').toLowerCase().includes(code)) &&
        (!name || (t.full_name ?? '').toLowerCase().includes(name))
      ))
    }
    m.querySelector('#hrp-close').addEventListener('click', () => m.remove())
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#hrp-code').addEventListener('input', filterTeachers)
    m.querySelector('#hrp-name').addEventListener('input', filterTeachers)
    saveBtn.addEventListener('click', async () => {
      if (!selected) return
      saveBtn.disabled = true
      saveBtn.textContent = 'กำลังบันทึก...'
      try {
        await assignHomeroomTeacher({
          teacher_id: selected.id,
          main_room: room,
          category,
          academic_year: curYear,
          semester: curSem,
        })
        showToast('บันทึกครูที่ปรึกษาสำเร็จ', 'success')
        m.remove()
        await _renderTable()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        saveBtn.disabled = false
        saveBtn.textContent = 'เลือกครูที่ปรึกษา'
      }
    })
    renderResults(allTeachers)
  }

  document.querySelectorAll('.hr-tab').forEach(btn => {
    btn.addEventListener('click', async () => {
      activeCategory = btn.dataset.hrTab
      await _renderTable()
    })
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

// ─── Admin: จัดการคอลัมน์คะแนนทักษะชีวิต ─────────────────────────────────────
export async function renderLifeSkillAdmin() {
  setActiveNav('life-skill-admin')
  document.getElementById('page-title').textContent = 'คะแนนทักษะชีวิต'

  const cfg  = await getSystemConfig().catch(()=>({}))
  const year = parseInt(cfg.academicYear ?? 2568)
  const sem  = parseInt(cfg.semester ?? 1)

  const _reload = async () => {
    const samaiCols = await getLifeSkillColumns(year, sem, 'สามัญ').catch(()=>[])
    _render(samaiCols)
  }

  const _render = (samaiCols) => {
    const colRow = (c) => `
      <tr class="hover:bg-gray-50 transition lsk-row" data-id="${c.id}">
        <td class="px-4 py-3 text-sm font-medium text-gray-800">${c.name}</td>
        <td class="px-4 py-3 text-center text-sm text-gray-600">${c.max_score}</td>
        <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${c.sheet_col ?? '—'}</td>
        <td class="px-4 py-3 text-center text-xs text-gray-400">${c.sort_order}</td>
        <td class="px-4 py-3 text-right whitespace-nowrap">
          <button class="lsk-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${c.id}">แก้ไข</button>
          <button class="lsk-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${c.id}" data-name="${c.name}">ลบ</button>
        </td>
      </tr>`

    const tableHTML = (cols) => !cols.length
      ? `<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านล่าง</p>`
      : `<table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th>
              <th class="px-4 py-3 text-center">คะแนนเต็ม</th>
              <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th>
              <th class="px-4 py-3 text-center">ลำดับ</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">${cols.map(colRow).join('')}</tbody>
        </table>`

    // cfgKey = base key เช่น 'lifeSkillSheetIdSamai' → tab/range key ตามกลุ่มเดียวกัน
    const _tabKey = (idKey) => idKey.replace('SheetId', 'SheetTab')
    const _rangeKey = (idKey) => idKey.replace('SheetId', 'StudentRange')
    const sheetIdBlock = (cfgKey, catLabel) => `
      <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
        <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet (${catLabel})</p>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
          <input type="text" id="lsk-sheet-${cfgKey}" value="${cfg[cfgKey] ?? ''}"
            placeholder="1BxiMV...xxxxxxx"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
          <input type="text" id="lsk-tab-${cfgKey}" value="${cfg[_tabKey(cfgKey)] ?? ''}"
            placeholder="เช่น ทักษะชีวิต, Sheet1"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
          <input type="text" id="lsk-range-${cfgKey}" value="${cfg[_rangeKey(cfgKey)] ?? 'J8:J3000'}"
            placeholder="เช่น J8:J3000"
            class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <button class="lsk-save-sheet px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0"
            data-key="${cfgKey}" data-tab-key="${_tabKey(cfgKey)}" data-range-key="${_rangeKey(cfgKey)}">บันทึก</button>
        </div>
      </div>`

    setContent(`<div class="max-w-5xl mx-auto animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <h2 class="text-lg font-bold text-gray-800">🌱 คะแนนทักษะชีวิต</h2>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${sem} / ${year}</p>
        </div>
        <div class="flex gap-2" id="lsk-tab-actions"></div>
      </div>
      <!-- Tabs -->
      <div class="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 w-fit">
        <button id="lsk-tab-scores" data-tab="scores"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700">
          📊 คะแนน
        </button>
        <button id="lsk-tab-config" data-tab="config"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
          ⚙️ ตั้งค่าคอลัมน์
        </button>
      </div>
      <!-- Tab content -->
      <div id="lsk-tab-content"></div>
    </div>`)

    const allCols = [...samaiCols]

    const _showScores = async () => {
      document.getElementById('lsk-tab-actions').innerHTML = `
        <button id="btn-sync-ls"
          class="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition">
          ↑ Sync ไปชีทกลาง
        </button>`
      document.getElementById('lsk-tab-content').innerHTML = `
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
          <select id="lsk-filter-grade" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <option value="">ทุกระดับชั้น</option>
          </select>
          <select id="lsk-filter-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <option value="">ทุกห้อง</option>
          </select>
          <input id="lsk-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัส"
            class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <span id="lsk-filter-count" class="text-xs text-gray-400"></span>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
          <div id="lsk-score-table"><div class="p-10 text-center text-gray-400">กำลังโหลด...</div></div>
        </div>`

      const [{ columns: rawColumns, scores }, roster] = await Promise.all([
        getAllLifeSkillScores(year, sem).catch(()=>({ columns:[], scores:[] })),
        getStudents().catch(()=>[]),
      ])
      const columns = (rawColumns ?? []).filter(c => c.category === 'สามัญ')
      const scoreMap = {}
      for (const s of scores) {
        if (!scoreMap[s.student_id]) scoreMap[s.student_id] = {}
        scoreMap[s.student_id][s.column_id] = s.score
      }
      const allStudents = roster
        .filter(s => s?.id && s?.student_code && s?.main_room)
        .sort((a,b) => (a.main_room??'').localeCompare(b.main_room??'',undefined,{numeric:true}) || (a.student_code??'').localeCompare(b.student_code??''))

      const gradeEl = document.getElementById('lsk-filter-grade')
      const roomEl = document.getElementById('lsk-filter-room')
      gradeEl.innerHTML = '<option value="">ทุกระดับชั้น</option>' +
        _opts(allStudents.map(s => _grade(s.main_room))).map(g => `<option value="${g}">${g}</option>`).join('')

      const _syncRoomOptions = () => {
        const grade = gradeEl.value
        const current = roomEl.value
        const rooms = _opts(allStudents
          .filter(s => !grade || _grade(s.main_room) === grade)
          .map(s => _room(s.main_room)))
        roomEl.innerHTML = '<option value="">ทุกห้อง</option>' +
          rooms.map(r => `<option value="${r}" ${r === current ? 'selected' : ''}>ห้อง ${r}</option>`).join('')
        if (current && !rooms.includes(current)) roomEl.value = ''
      }

      const _renderTable = (list) => {
        document.getElementById('lsk-filter-count').textContent = `${list.length} คน`
        if (!list.length) { document.getElementById('lsk-score-table').innerHTML = `<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>`; return }
        document.getElementById('lsk-score-table').innerHTML = `
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
                <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
                <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
                ${columns.map(c=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px] whitespace-nowrap">${c.name}<br><span class="font-normal text-gray-400">(${c.max_score})</span></th>`).join('')}
                <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${list.map((s,i) => {
                const total = columns.reduce((sum,c) => sum + (scoreMap[s.id]?.[c.id] ?? 0), 0)
                return `<tr class="hover:bg-indigo-50/30 transition">
                  <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${i+1}</td>
                  <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${s.student_code??'—'}</td>
                  <td class="px-3 py-2 text-gray-800">${s.full_name??'—'}</td>
                  <td class="px-3 py-2 text-gray-400">${s.main_room ?? '—'}</td>
                  ${columns.map(c => {
                    const v = scoreMap[s.id]?.[c.id]
                    return `<td class="px-2 py-2 text-center ${v!=null?'text-gray-800 font-medium':'text-gray-300'}">${v??'—'}</td>`
                  }).join('')}
                  <td class="px-3 py-2 text-center font-semibold text-indigo-600">${total||'—'}</td>
                </tr>`
              }).join('')}
            </tbody>
          </table>`
      }

      _syncRoomOptions()
      let _lskFiltered = [...allStudents]
      _renderTable(_lskFiltered)

      const _applyLskFilter = () => {
        _syncRoomOptions()
        const grade = gradeEl.value
        const room = roomEl.value
        const q   = document.getElementById('lsk-filter-search').value.toLowerCase()
        _lskFiltered = allStudents.filter(s =>
          (!grade || _grade(s.main_room) === grade) &&
          (!room || _room(s.main_room) === room) &&
          (!q || s.full_name?.toLowerCase().includes(q) || s.student_code?.includes(q))
        )
        _renderTable(_lskFiltered)
      }
      gradeEl.addEventListener('change', _applyLskFilter)
      roomEl.addEventListener('change', _applyLskFilter)
      document.getElementById('lsk-filter-search').addEventListener('input', _applyLskFilter)

      document.getElementById('btn-sync-ls')?.addEventListener('click', async () => {
        const btn = document.getElementById('btn-sync-ls')
        btn.disabled = true; btn.textContent = '⏳ กำลัง Sync...'
        try {
          const { syncCentralBatch } = await import('./sync.js')
          if (!columns.length) {
            showToast('ยังไม่มีคอลัมน์สำหรับซิงค์', 'warning')
            return
          }
          if (!cfg.lifeSkillSheetIdSamai) throw new Error('ยังไม่ได้ตั้งค่า Sheet ID (สามัญ)')
          const stuList = _lskFiltered.map(s => ({ id: s.id, student_code: s.student_code }))
          const stuIds = new Set(stuList.map(s => s.id))
          const colIds = new Set(columns.map(c => c.id))
          const scList = scores.filter(sc => stuIds.has(sc.student_id) && colIds.has(sc.column_id))
          const totalRecords = await syncCentralBatch(
            cfg.lifeSkillSheetIdSamai,
            cfg.lifeSkillSheetTabSamai,
            columns,
            scList,
            stuList,
            { studentColRange: cfg.lifeSkillStudentRangeSamai || 'J8:J3000' }
          )
          if (!totalRecords) {
            showToast('ยังไม่มีคะแนนที่พร้อมซิงค์ในกลุ่มที่เลือก', 'warning')
            return
          }
          showToast(`ส่งคำสั่ง Sync ทักษะชีวิต ${stuList.length} คน / ${totalRecords} คะแนนแล้ว`, 'success')
        } catch(err) { showToast('Sync ไม่สำเร็จ: '+(err.message??''),'error') }
        finally { btn.disabled=false; btn.textContent='↑ Sync ไปชีทกลาง' }
      })
    }

    const _showConfig = () => {
      document.getElementById('lsk-tab-actions').innerHTML = `
        <button id="lsk-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`
      document.getElementById('lsk-tab-content').innerHTML = `<div class="space-y-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <h3 class="text-sm font-semibold text-gray-700">ประเภทสามัญ</h3>
            <span class="ml-auto text-xs text-gray-400">${samaiCols.length} หัวข้อ</span>
          </div>
          <div id="lsk-samai">${tableHTML(samaiCols)}</div>
          ${sheetIdBlock('lifeSkillSheetIdSamai', 'สามัญ')}
        </div>
      </div>`
      document.getElementById('lsk-add-btn').addEventListener('click', () => _openModal(null, year, sem, _reload))
      document.querySelectorAll('.lsk-edit').forEach(btn => {
        btn.addEventListener('click', () => {
          const col = allCols.find(c => c.id === +btn.dataset.id)
          if (col) _openModal(col, year, sem, _reload)
        })
      })
      document.querySelectorAll('.lsk-del').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (!confirm(`ลบหัวข้อ "${btn.dataset.name}"?`)) return
          try { await deleteLifeSkillColumn(+btn.dataset.id); showToast('ลบแล้ว','success'); _reload() }
          catch(err) { showToast('ลบไม่สำเร็จ: '+(err.message??''),'error') }
        })
      })
      document.querySelectorAll('.lsk-save-sheet').forEach(btn => {
        btn.addEventListener('click', async () => {
          const key = btn.dataset.key; const tabKey = btn.dataset.tabKey
          const rangeKey = btn.dataset.rangeKey
          const val = document.getElementById(`lsk-sheet-${key}`)?.value.trim()??''
          const tabVal = document.getElementById(`lsk-tab-${key}`)?.value.trim()??''
          const rangeVal = document.getElementById(`lsk-range-${key}`)?.value.trim()??'J8:J3000'
          const orig = btn.textContent; btn.disabled=true; btn.textContent='⏳'
          try {
            await Promise.all([
              updateSystemConfig(key,val),
              updateSystemConfig(tabKey,tabVal),
              updateSystemConfig(rangeKey,rangeVal),
            ])
            cfg[key]=val; cfg[tabKey]=tabVal; cfg[rangeKey]=rangeVal
            btn.textContent='✅'; btn.style.background='#16a34a'
            setTimeout(()=>{ btn.disabled=false; btn.textContent=orig; btn.style.background='' },1500)
            showToast('บันทึก Sheet ID + ชื่อแท็บแล้ว','success')
          } catch { showToast('บันทึกไม่สำเร็จ','error'); btn.disabled=false; btn.textContent=orig }
        })
      })
    }

    const _switchTab = (tab) => {
      document.querySelectorAll('[data-tab]').forEach(b => {
        const isActive = b.dataset.tab === tab
        b.className = isActive
          ? 'px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700'
          : 'px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700'
      })
      if (tab === 'scores') _showScores()
      else _showConfig()
    }
    document.getElementById('lsk-tab-scores').addEventListener('click', () => _switchTab('scores'))
    document.getElementById('lsk-tab-config').addEventListener('click', () => _switchTab('config'))
    _switchTab('scores')

  }

  _reload()
}

function _openModal(col, year, sem, onSave) {
  document.getElementById('lsk-modal')?.remove()
  const isEdit = !!col
  const m = document.createElement('div')
  m.id = 'lsk-modal'
  m.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40'
  m.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7">
      <h3 class="text-lg font-bold text-gray-800 mb-5">${isEdit ? 'แก้ไขหัวข้อ' : 'เพิ่มหัวข้อ'}</h3>
      <form id="lsk-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อหัวข้อ <span class="text-red-400">*</span></label>
          <input id="lsk-name" type="text" value="${col?.name ?? ''}" placeholder="เช่น ปฏิบัติศาสนา"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" required />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
            <input id="lsk-max" type="number" min="1" max="100" value="${col?.max_score ?? 20}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ลำดับ</label>
            <input id="lsk-order" type="number" min="0" value="${col?.sort_order ?? 0}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Google Sheet <span class="text-xs text-gray-400">(เช่น EH)</span></label>
          <input id="lsk-sheetcol" type="text" value="${col?.sheet_col ?? ''}" placeholder="EH"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase" />
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button" id="lsk-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button type="submit" id="lsk-save"
            class="btn-primary flex-1 py-2.5 rounded-xl text-white text-sm font-semibold">
            ${isEdit ? 'บันทึก' : 'เพิ่ม'}
          </button>
        </div>
      </form>
    </div>`
  document.body.appendChild(m)
  m.querySelector('#lsk-cancel').addEventListener('click', () => m.remove())
  m.addEventListener('click', e => { if (e.target === m) m.remove() })

  m.querySelector('#lsk-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = m.querySelector('#lsk-save')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const payload = {
        name:          m.querySelector('#lsk-name').value.trim(),
        max_score:     parseInt(m.querySelector('#lsk-max').value) || 20,
        sort_order:    parseInt(m.querySelector('#lsk-order').value) || 0,
        sheet_col:     m.querySelector('#lsk-sheetcol').value.trim().toUpperCase() || null,
        category:      'สามัญ',
        academic_year: year,
        semester:      sem,
      }
      if (isEdit) await updateLifeSkillColumn(col.id, payload)
      else        await createLifeSkillColumn(payload)
      showToast('บันทึกสำเร็จ', 'success')
      m.remove()
      onSave()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = isEdit ? 'บันทึก' : 'เพิ่ม'
    }
  })
}

// ─── Reading Score Eval Helpers ───────────────────────────────────────────────
const _RS_GRADES = [
  { label: 'ดีเยี่ยม', min: 80, cls: 'text-emerald-700 bg-emerald-50' },
  { label: 'ดี',       min: 65, cls: 'text-blue-700 bg-blue-50' },
  { label: 'พอใช้',   min: 50, cls: 'text-yellow-700 bg-yellow-50' },
  { label: 'ปรับปรุง', min: 0,  cls: 'text-red-600 bg-red-50' },
]
const _rsGrade = (s) => _RS_GRADES.find(g => s >= g.min) ?? _RS_GRADES[3]
const _rsBadge = (s) => { const g = _rsGrade(s); return `<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${g.cls}">${g.label}</span>` }

// ─── Admin: คะแนนอ่านคิดวิเคราะห์และเขียน ────────────────────────────────────
export async function renderReadingAdmin() {
  setActiveNav('reading-admin')
  document.getElementById('page-title').textContent = 'คะแนนอ่านคิดวิเคราะห์'

  const cfg  = await getSystemConfig().catch(()=>({}))
  const year = parseInt(cfg.academicYear ?? 2568)
  const sem  = parseInt(cfg.semester ?? 1)

  const _colRow = (c) => `
    <tr class="hover:bg-gray-50 transition" data-id="${c.id}">
      <td class="px-4 py-3 text-sm font-medium text-gray-800">${c.name}</td>
      <td class="px-4 py-3 text-center text-sm text-gray-600">${c.max_score}</td>
      <td class="px-4 py-3 text-center font-mono text-xs text-indigo-600">${c.sheet_col ?? '—'}</td>
      <td class="px-4 py-3 text-center text-xs text-gray-400">${c.sort_order}</td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <button class="rsa-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-id="${c.id}">แก้ไข</button>
        <button class="rsa-del text-xs text-red-400 hover:text-red-600 font-medium" data-id="${c.id}" data-name="${c.name}">ลบ</button>
      </td>
    </tr>`

  let _cols = []

  const _reload = async () => {
    _cols = await getReadingScoreColumns(year, sem).catch(()=>[])
    _renderShell()
    const activeTab = document.querySelector('[data-tab].bg-white')?.dataset.tab ?? 'scores'
    _switchTab(activeTab)
  }

  const _renderShell = () => {
    setContent(`<div class="max-w-5xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <h2 class="text-lg font-bold text-gray-800">📖 คะแนนอ่านคิดวิเคราะห์และเขียน</h2>
          <p class="text-xs text-gray-400 mt-0.5">ภาค ${sem} / ${year}</p>
        </div>
        <div class="flex gap-2" id="rsa-tab-actions"></div>
      </div>
      <div class="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 w-fit">
        <button id="rsa-tab-scores" data-tab="scores"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700">
          📊 คะแนน
        </button>
        <button id="rsa-tab-config" data-tab="config"
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
          ⚙️ ตั้งค่าคอลัมน์
        </button>
      </div>
      <div id="rsa-tab-content"></div>
    </div>`)
    document.getElementById('rsa-tab-scores').addEventListener('click', () => _switchTab('scores'))
    document.getElementById('rsa-tab-config').addEventListener('click', () => _switchTab('config'))
  }

  const _showScores = async () => {
    document.getElementById('rsa-tab-actions').innerHTML = `
      <button id="btn-fill-reading-eval"
        class="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-xl hover:bg-violet-700 transition">
        📝 ป้อนผล → ทุกวิชา
      </button>
      <button id="btn-sync-rs"
        class="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition">
        ↑ Sync ไปชีทกลาง
      </button>`
    document.getElementById('rsa-tab-content').innerHTML = `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <input id="rsa-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัสนักเรียน"
          class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <span id="rsa-filter-count" class="text-xs text-gray-400"></span>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <div id="rsa-score-table"><div class="p-10 text-center text-gray-400">กำลังโหลด...</div></div>
      </div>`

    const { columns, scores } = await getAllReadingScores(year, sem).catch(()=>({ columns:[], scores:[] }))
    const scoreMap = {}
    for (const s of scores) {
      if (!scoreMap[s.student_id]) scoreMap[s.student_id] = {}
      scoreMap[s.student_id][s.column_id] = s.score
    }
    const allStudents = [...new Map(scores.map(s =>
      [s.student_id, { id: s.student_id, ...s.students }])).values()]
      .sort((a,b) => (a.main_room??'').localeCompare(b.main_room??'',undefined,{numeric:true}) || (a.student_code??'').localeCompare(b.student_code??''))

    const _renderTable = (list) => {
      document.getElementById('rsa-filter-count').textContent = `${list.length} คน`
      if (!list.length) { document.getElementById('rsa-score-table').innerHTML = `<div class="p-10 text-center text-gray-400">ไม่พบข้อมูล</div>`; return }
      document.getElementById('rsa-score-table').innerHTML = `
        <table class="w-full text-xs">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-3 py-2.5 text-gray-500 w-8 sticky left-0 bg-gray-50">#</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold w-20 sticky left-8 bg-gray-50">รหัส</th>
              <th class="text-left px-3 py-2.5 text-gray-600 font-semibold min-w-[130px]">ชื่อ</th>
              <th class="text-left px-3 py-2.5 text-gray-400 w-20">ห้อง</th>
              ${columns.map(c=>`<th class="text-center px-2 py-2.5 text-gray-600 font-semibold min-w-[60px]">${c.name}<br><span class="font-normal text-gray-400">(${c.max_score})</span></th>`).join('')}
              <th class="text-center px-3 py-2.5 text-indigo-600 font-semibold">รวม</th>
              <th class="text-center px-3 py-2.5 text-indigo-700 font-semibold min-w-[55px]">/100</th>
              <th class="text-center px-3 py-2.5 text-purple-700 font-semibold min-w-[85px]">ผลประเมิน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${list.map((s,i) => {
              const total   = columns.reduce((sum,c) => sum + (scoreMap[s.id]?.[c.id] ?? 0), 0)
              const score100 = total / 2
              const badge   = total > 0 ? _rsBadge(score100) : '<span class="text-gray-300">—</span>'
              return `<tr class="hover:bg-indigo-50/30 transition">
                <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${i+1}</td>
                <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${s.student_code??'—'}</td>
                <td class="px-3 py-2 text-gray-800">${s.full_name??'—'}</td>
                <td class="px-3 py-2 text-gray-400">${s.main_room??'—'}</td>
                ${columns.map(c=>{
                  const v = scoreMap[s.id]?.[c.id]
                  return `<td class="px-2 py-2 text-center ${v!=null?'text-gray-800 font-medium':'text-gray-300'}">${v??'—'}</td>`
                }).join('')}
                <td class="px-3 py-2 text-center font-semibold text-indigo-600">${total||'—'}</td>
                <td class="px-3 py-2 text-center text-xs font-medium text-indigo-600">${total > 0 ? score100.toFixed(1).replace(/\.0$/,'') : '—'}</td>
                <td class="px-3 py-2 text-center">${badge}</td>
              </tr>`
            }).join('')}
          </tbody>
        </table>`
    }

    let _rsFiltered = [...allStudents]
    _renderTable(_rsFiltered)

    document.getElementById('rsa-filter-search').addEventListener('input', e => {
      const q = e.target.value.toLowerCase()
      _rsFiltered = allStudents.filter(s => !q || s.full_name?.toLowerCase().includes(q) || s.student_code?.includes(q))
      _renderTable(_rsFiltered)
    })

    document.getElementById('btn-sync-rs')?.addEventListener('click', async () => {
      const btn = document.getElementById('btn-sync-rs')
      if (!cfg.readingScoreSheetId) { showToast('ยังไม่ได้ตั้งค่า Sheet ID','warning'); return }
      btn.disabled=true; btn.textContent='⏳ กำลัง Sync...'
      try {
        const { syncCentralBatch } = await import('./sync.js')
        const stuList = _rsFiltered.map(s => ({ id: s.id, student_code: s.student_code }))
        const scList  = scores.filter(sc => stuList.some(s=>s.id===sc.student_id))
        await syncCentralBatch(cfg.readingScoreSheetId, cfg.readingScoreSheetTab, columns, scList, stuList)
        showToast(`Sync อ่านคิดวิเคราะห์ ${stuList.length} คน สำเร็จ`, 'success')
      } catch(err) { showToast('Sync ไม่สำเร็จ: '+(err.message??''),'error') }
      finally { btn.disabled=false; btn.textContent='↑ Sync ไปชีทกลาง' }
    })

    document.getElementById('btn-fill-reading-eval')?.addEventListener('click', async () => {
      const btn = document.getElementById('btn-fill-reading-eval')
      if (!cfg.readingEvalClassSheetCol) { showToast('ยังไม่ได้ตั้งค่าคอลัมน์ Sheet ผลประเมิน (ตั้งค่าคอลัมน์ → ตั้งค่าในแท็บ)','warning'); return }
      btn.disabled=true; btn.textContent='⏳ กำลังป้อน...'
      try {
        const { syncReadingEvalToClassSheets } = await import('./sync.js')
        const { getAllClassesForFill } = await import('./api.js')
        const evalMap = {}
        for (const s of allStudents) {
          const total = columns.reduce((sum,c) => sum + (scoreMap[s.id]?.[c.id] ?? 0), 0)
          if (total > 0) {
            const score100 = total / 2
            evalMap[s.id] = { label: _rsGrade(score100).label, score100 }
          }
        }
        const classes = await getAllClassesForFill()
        await syncReadingEvalToClassSheets(classes, evalMap, cfg.readingEvalClassSheetCol)
        showToast(`ป้อนผลประเมินอ่านฯ ไป ${classes.length} ห้องสำเร็จ`, 'success')
      } catch(err) { showToast('ป้อนไม่สำเร็จ: '+(err.message??''),'error') }
      finally { btn.disabled=false; btn.textContent='📝 ป้อนผล → ทุกวิชา' }
    })
  }

  const _showConfig = () => {
    document.getElementById('rsa-tab-actions').innerHTML = `
      <button id="rsa-add-btn" class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl">＋ เพิ่มหัวข้อ</button>`
    const tableHTML = !_cols.length
      ? `<p class="text-center py-8 text-gray-400 text-sm">ยังไม่มีคอลัมน์ — กดเพิ่มด้านบน</p>`
      : `<table class="w-full text-sm"><thead class="bg-gray-50 text-xs text-gray-500 uppercase"><tr>
          <th class="px-4 py-3 text-left">ชื่อหัวข้อ</th><th class="px-4 py-3 text-center">คะแนนเต็ม</th>
          <th class="px-4 py-3 text-center">คอลัมน์ Sheet</th><th class="px-4 py-3 text-center">ลำดับ</th>
          <th class="px-4 py-3 text-right">จัดการ</th></tr></thead>
          <tbody class="divide-y divide-gray-50">${_cols.map(_colRow).join('')}</tbody></table>`
    document.getElementById('rsa-tab-content').innerHTML = `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">📖 หัวข้อคะแนน</h3>
          <span class="ml-auto text-xs text-gray-400">${_cols.length} หัวข้อ · รวม ${_cols.reduce((s,c)=>s+c.max_score,0)} คะแนน</span>
        </div>
        <div>${tableHTML}</div>
        <div class="px-5 py-4 bg-gray-50/60 border-t border-gray-100 space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-1">🔗 เชื่อมกับ Google Sheet</p>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">Sheet ID:</span>
            <input type="text" id="rsa-sheet-id" value="${cfg.readingScoreSheetId??''}" placeholder="1BxiMV..."
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">ชื่อแท็บ:</span>
            <input type="text" id="rsa-sheet-tab" value="${cfg.readingScoreSheetTab??''}" placeholder="Sheet1"
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <button id="rsa-save-sheet" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition flex-shrink-0">บันทึก</button>
          </div>
          <div class="border-t border-gray-100 mt-3 pt-3">
            <p class="text-xs font-semibold text-gray-500 mb-2">📝 ป้อนผลประเมิน → ชีทรายวิชา (ทุกห้อง)</p>
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-400 w-20 flex-shrink-0">คอลัมน์:</span>
              <input type="text" id="rsa-eval-col" value="${cfg.readingEvalClassSheetCol??''}" placeholder="เช่น EZ"
                class="w-24 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono uppercase bg-white focus:outline-none focus:ring-2 focus:ring-violet-300" maxlength="4" />
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (ดีเยี่ยม/ดี/พอใช้/ปรับปรุง)</span>
              <button id="rsa-save-eval-col" class="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-medium hover:bg-violet-700 transition flex-shrink-0">บันทึก</button>
            </div>
          </div>
        </div>
      </div>`
    document.getElementById('rsa-add-btn').addEventListener('click', () => _openReadingModal(null, year, sem, _reload))
    document.querySelectorAll('.rsa-edit').forEach(btn => {
      btn.addEventListener('click', () => { const col=_cols.find(c=>c.id===+btn.dataset.id); if(col) _openReadingModal(col,year,sem,_reload) })
    })
    document.querySelectorAll('.rsa-del').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm(`ลบหัวข้อ "${btn.dataset.name}"?`)) return
        try { await deleteReadingScoreColumn(+btn.dataset.id); showToast('ลบแล้ว','success'); _reload() }
        catch(err) { showToast('ลบไม่สำเร็จ: '+(err.message??''),'error') }
      })
    })
    document.getElementById('rsa-save-sheet')?.addEventListener('click', async () => {
      const btn=document.getElementById('rsa-save-sheet')
      const val=document.getElementById('rsa-sheet-id')?.value.trim()??''
      const tabVal=document.getElementById('rsa-sheet-tab')?.value.trim()??''
      btn.disabled=true; btn.textContent='⏳'
      try {
        await Promise.all([updateSystemConfig('readingScoreSheetId',val), updateSystemConfig('readingScoreSheetTab',tabVal)])
        cfg.readingScoreSheetId=val; cfg.readingScoreSheetTab=tabVal
        btn.textContent='✅'; btn.style.background='#16a34a'
        setTimeout(()=>{ btn.disabled=false; btn.textContent='บันทึก'; btn.style.background='' },1500)
        showToast('บันทึก Sheet ID + ชื่อแท็บแล้ว','success')
      } catch { showToast('บันทึกไม่สำเร็จ','error'); btn.disabled=false; btn.textContent='บันทึก' }
    })
    document.getElementById('rsa-save-eval-col')?.addEventListener('click', async () => {
      const btn=document.getElementById('rsa-save-eval-col')
      const val=(document.getElementById('rsa-eval-col')?.value.trim()??'').toUpperCase()
      btn.disabled=true; btn.textContent='⏳'
      try {
        await updateSystemConfig('readingEvalClassSheetCol', val)
        cfg.readingEvalClassSheetCol = val
        btn.textContent='✅'; btn.style.background='#16a34a'
        setTimeout(()=>{ btn.disabled=false; btn.textContent='บันทึก'; btn.style.background='' },1500)
        showToast('บันทึกคอลัมน์ผลประเมินแล้ว','success')
      } catch { showToast('บันทึกไม่สำเร็จ','error'); btn.disabled=false; btn.textContent='บันทึก' }
    })
  }

  const _switchTab = (tab) => {
    document.querySelectorAll('[data-tab]').forEach(b => {
      b.className = b.dataset.tab===tab
        ? 'px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700'
        : 'px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700'
    })
    if (tab==='scores') _showScores(); else _showConfig()
  }

  _reload()
}

// ─── Admin Score Overview Helper ──────────────────────────────────────────────

function _scoreOverviewShell(title, icon, sheetUrl, onSyncAll) {
  return `<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5 flex-wrap gap-3">
      <div>
        <h2 class="text-lg font-bold text-gray-800">${icon} ${title}</h2>
        <p class="text-xs text-gray-400 mt-0.5">ภาพรวมคะแนนทุกห้อง — Admin เท่านั้น</p>
      </div>
      <div class="flex gap-2">
        ${onSyncAll ? `<button id="btn-sync-all-central"
          class="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition">
          ↑ Sync ทั้งหมดไปชีทกลาง
        </button>` : ''}
        ${sheetUrl ? `<a href="${sheetUrl}" target="_blank" rel="noopener"
          class="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition flex items-center gap-1">
          📊 เปิด Google Sheet
        </a>` : `<span class="px-4 py-2 bg-gray-100 text-gray-400 text-sm rounded-xl">ยังไม่ได้ตั้งค่า Sheet ID</span>`}
      </div>
    </div>
    <div id="score-overview-body"></div>
  </div>`
}

function _scoreTable(columns, rows) {
  if (!columns.length) return `<div class="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400">ยังไม่มีคอลัมน์คะแนน</div>`
  return `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
    <table class="w-full text-xs">
      <thead class="bg-gray-50 border-b border-gray-100">
        <tr>
          <th class="text-left px-3 py-2.5 font-semibold text-gray-600 sticky left-0 bg-gray-50">#</th>
          <th class="text-left px-3 py-2.5 font-semibold text-gray-600 sticky left-8 bg-gray-50 min-w-[80px]">รหัส</th>
          <th class="text-left px-3 py-2.5 font-semibold text-gray-600 min-w-[130px]">ชื่อ</th>
          <th class="text-left px-3 py-2.5 font-semibold text-gray-500 min-w-[80px]">ห้อง</th>
          ${columns.map(c => `<th class="px-3 py-2.5 text-center font-semibold text-gray-600 min-w-[60px]">${c.name}<br><span class="font-normal text-gray-400">(${c.max_score})</span></th>`).join('')}
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${rows.map((r,i) => `<tr class="hover:bg-gray-50/50">
          <td class="px-3 py-2 text-gray-400 sticky left-0 bg-white">${i+1}</td>
          <td class="px-3 py-2 font-mono text-gray-700 sticky left-8 bg-white">${r.code}</td>
          <td class="px-3 py-2 text-gray-700">${r.name}</td>
          <td class="px-3 py-2 text-gray-400">${r.room}</td>
          ${columns.map(c => {
            const v = r.scores[c.id]
            return `<td class="px-3 py-2 text-center ${v != null ? 'text-gray-800 font-medium' : 'text-gray-300'}">${v ?? '—'}</td>`
          }).join('')}
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`
}

// ─── Prayer helpers (mirror teacher-views.js) ────────────────────────────────

const _PST = {
  pray:     { label: '/', color: 'text-emerald-600 font-bold', bg: 'bg-emerald-50',  score: 2,  fullLabel: 'ละหมาด' },
  absent:   { label: 'X', color: 'text-red-600 font-bold',     bg: 'bg-red-50',      score: 0,  fullLabel: 'ขาดละหมาด' },
  usor:     { label: 'U', color: 'text-purple-600 font-bold',  bg: 'bg-purple-50',   score: 1,  fullLabel: 'อูโซร/ประจำเดือน' },
  followed: { label: '-', color: 'text-blue-500 font-bold',    bg: 'bg-blue-50',     score: 1,  fullLabel: 'ติดตามแล้ว' },
  avoid:    { label: 'N', color: 'text-orange-500 font-bold',  bg: 'bg-orange-50',   score: -1, fullLabel: 'หลีกเลี่ยง' },
}

function _adminPicker(e, onSelect) {
  document.getElementById('admin-picker')?.remove()
  const picker = document.createElement('div')
  picker.id = 'admin-picker'
  picker.className = 'fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap'
  const rect = (e.target.closest('td,th,button') ?? e.target).getBoundingClientRect()
  picker.style.top  = Math.min(rect.bottom + 4, window.innerHeight - 60) + 'px'
  picker.style.left = Math.max(4, Math.min(rect.left, window.innerWidth - 220)) + 'px'
  const clearBtn = document.createElement('button')
  clearBtn.className = 'px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200'
  clearBtn.textContent = '✕ ล้าง'
  clearBtn.onclick = () => { picker.remove(); onSelect(null) }
  picker.appendChild(clearBtn)
  Object.entries(_PST).forEach(([key, v]) => {
    const btn = document.createElement('button')
    btn.className = `px-3 py-1.5 rounded-lg text-sm font-bold ${v.bg} ${v.color} hover:opacity-80 transition`
    btn.textContent = v.label
    btn.title = v.fullLabel
    btn.onclick = () => { picker.remove(); onSelect(key) }
    picker.appendChild(btn)
  })
  document.body.appendChild(picker)
  setTimeout(() => document.addEventListener('click', () => picker.remove(), { once: true }), 50)
}
const _DAY_TH = ['อา','จ','อ','พ','พฤ','ศ','ส']

function _genWeeks(startStr, endStr) {
  const weeks = [], start = new Date(startStr), end = new Date(endStr)
  const diff = start.getDay() % 7
  if (diff) start.setDate(start.getDate() - diff)
  let cur = new Date(start), wn = 1
  while (cur <= end) {
    const days = []
    for (let d = 0; d < 5; d++) {
      const dt = new Date(cur); dt.setDate(dt.getDate() + d)
      if (dt <= end) days.push({ date: new Date(dt), ds: dt.toISOString().slice(0, 10) })
    }
    if (days.length) { weeks.push({ n: wn, days }); wn++ }
    cur.setDate(cur.getDate() + 7)
  }
  return weeks
}

function _prayScore(sMap, allDays) {
  const earned = allDays.reduce((s, d) => s + (_PST[sMap[d.ds]]?.score ?? 0), 0)
  const max    = allDays.length * 2
  return max > 0 ? Math.min(10, Math.max(0, Math.round((earned / max) * 100) / 10)) : 0
}

function _fmtD(d) { return `${d.getDate()}/${d.getMonth() + 1}` }

// ─── Admin: ละหมาด ───────────────────────────────────────────────────────────

export async function renderPrayerAdmin() {
  setActiveNav('prayer-admin')
  document.getElementById('page-title').textContent = 'คะแนนละหมาด'

  // โหลดแค่ config + รายชื่อห้อง (เร็ว) — records โหลดทีหลังตอนเลือกห้อง
  const [cfg, allReligionRooms] = await Promise.all([
    getSystemConfig().catch(() => ({})),
    getUniqueReligionRooms().catch(() => []),
  ])
  const rooms = allReligionRooms

  // ─── Shell (tabs) ─────────────────────────────────────────────────────────
  setContent(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <h2 class="text-lg font-bold text-gray-800">🕌 คะแนนละหมาด</h2>
        <p class="text-xs text-gray-400 mt-0.5">บันทึกการมาละหมาดทุกห้อง — Sync รายวันลงชีท Solat</p>
      </div>
      <div id="pr-tab-actions"></div>
    </div>
    <div class="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 w-fit">
      <button id="pr-tab-scores" data-tab="scores"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700">
        📊 คะแนน
      </button>
      <button id="pr-tab-config" data-tab="config"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
        ⚙️ ตั้งค่า
      </button>
    </div>
    <div id="pr-tab-content"></div>
  </div>`)

  // ─── Tab: คะแนน ───────────────────────────────────────────────────────────
  const _showScores = () => {
    const semStart = cfg.semester_start
    const semEnd   = cfg.semester_end
    const weeks    = (semStart && semEnd) ? _genWeeks(semStart, semEnd) : []
    const allDays  = weeks.flatMap(w => w.days)

    document.getElementById('pr-tab-actions').innerHTML = `
      <div class="flex gap-2">
        <button id="btn-sync-all-prayer"
          class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition">
          ↑ Sync ทุกห้อง
        </button>
        <button id="btn-sync-prayer"
          class="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition">
          ↑ Sync ห้องนี้
        </button>
      </div>`

    document.getElementById('pr-tab-content').innerHTML = `
      <div class="flex items-center gap-2 flex-wrap mb-3">
        <!-- Room searchable picker -->
        <div class="relative" id="pr-room-picker-wrap">
          <button id="pr-room-btn" type="button"
            class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px] text-left flex items-center justify-between gap-2">
            <span id="pr-room-label" class="truncate">${rooms[0] ?? '—'}</span>
            <span class="text-gray-400">▾</span>
          </button>
          <div id="pr-room-dropdown"
            class="hidden absolute top-full left-0 z-50 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
            <div class="p-2 border-b border-gray-100">
              <input id="pr-room-search" type="text" placeholder="ค้นหาห้อง... (74 ห้อง)"
                class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div id="pr-room-list" class="overflow-y-auto" style="max-height:260px">
              ${rooms.map(r=>`<button type="button" data-room="${r}"
                class="pr-room-item w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 transition">
                ${r}
              </button>`).join('')}
            </div>
          </div>
        </div>
        <input id="pr-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัสนักเรียน"
          class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <span id="pr-filter-count" class="text-xs text-gray-400 flex-shrink-0"></span>
        <div class="flex gap-1 text-xs flex-shrink-0 flex-wrap">
          ${Object.values(_PST).map(v=>`<span class="px-1.5 py-0.5 ${v.bg} ${v.color} rounded cursor-default">${v.label}=${v.fullLabel??''}</span>`).join('')}
        </div>
      </div>
      ${!semStart || !semEnd
        ? `<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-700 text-sm">
             ⚠️ ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน — ไปที่ <b>ตั้งค่าระบบ → 📅 ช่วงเวลาภาคเรียน</b>
           </div>`
        : `<div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white"
              style="max-height:calc(100vh - 260px)">
             <div id="pr-grid-wrap"><div class="p-12 text-center text-gray-400">กำลังโหลด...</div></div>
           </div>`}`

    if (!semStart || !semEnd) return

    const thB  = 'border border-gray-200 text-center text-xs select-none'
    const stL  = 'sticky left-0 z-20 bg-white border border-gray-200'
    const stM  = 'sticky z-20 bg-white border border-gray-200'
    const scCls = s => s >= 8 ? 'text-emerald-600' : s >= 6 ? 'text-amber-500' : 'text-red-600'
    const dayW = 30, nameW = 160

    // prayMap สร้างต่อห้อง — เริ่มว่าง, โหลดเมื่อเลือกห้อง
    const adminPrayMap = {}

    // state ห้องและ list นักเรียน
    let _stuList = []
    let orderedDates = []

    // ─── เหมือนครูเป๊ะ: glow + optimistic UI + RPC save ─────────────────────
    const _glow = (el, ok = true) => {
      if (!el) return
      el.style.outline = `2px solid ${ok ? '#059669' : '#ef4444'}`
      el.style.outlineOffset = '1px'
      setTimeout(() => { el.style.outline = ''; el.style.outlineOffset = '' }, 700)
    }

    const _saveAdminCell = async (sid, ds, room, st) => {
      // 1. Optimistic update
      if (!adminPrayMap[sid]) adminPrayMap[sid] = {}
      if (st === null) delete adminPrayMap[sid][ds]
      else adminPrayMap[sid][ds] = st

      // 2. อัปเดต grid cell
      const gridCell = document.querySelector(`.pr-cell[data-sid="${sid}"][data-date="${ds}"]`)
      if (gridCell) {
        const p = st ? _PST[st] : null
        Object.values(_PST).forEach(v => gridCell.classList.remove(v.bg))
        if (p) { gridCell.classList.add(p.bg); gridCell.innerHTML = `<span class="${p.color} text-xs">${p.label}</span>` }
        else gridCell.innerHTML = ''
      }
      _updateScore(sid)

      // 3. อัปเดต modal cell (ถ้าเปิดอยู่)
      const modalCell = document.querySelector(`.adm-cell[data-sid="${sid}"][data-date="${ds}"]`)
      if (modalCell) {
        const p = st ? _PST[st] : null
        modalCell.className = `adm-cell w-10 h-10 rounded-xl border-2 flex items-center justify-center text-sm font-bold transition hover:border-indigo-300 ${p ? p.bg + ' border-transparent' : 'bg-gray-50 border-gray-100'}`
        modalCell.innerHTML = p ? `<span class="${p.color}">${p.label}</span>` : '<span class="text-gray-200">·</span>'
      }

      // 4. Save to DB + glow feedback
      try {
        const weekN = weeks.find(w => w.days.some(d => d.ds === ds))?.n ?? null
        await savePrayerCellAdmin(sid, room, ds, st, weekN)
        _glow(gridCell, true)
        _glow(modalCell, true)
      } catch(err) {
        console.error('[prayer save]', err)
        _glow(gridCell, false)
        _glow(modalCell, false)
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      }
    }

    const _saveBatchAdmin = async (pairs, room) => {
      const results = await Promise.allSettled(
        pairs.map(([sid, ds, st]) => _saveAdminCell(sid, ds, room, st))
      )
      const failed = results.filter(r => r.status === 'rejected').length
      if (failed > 0) showToast(`บันทึกไม่สำเร็จ ${failed} รายการ`, 'error')
    }

    const _updateScore = (sid) => {
      const sMap  = adminPrayMap[sid] ?? {}
      const score = _prayScore(sMap, allDays)
      const el    = document.getElementById(`pr-sc-${sid}`)
      if (el) { el.textContent = score; el.className = `border border-indigo-100 text-center bg-indigo-50 font-bold ${scCls(score)} text-xs` }
    }

    const _renderGrid = (list, curRoom) => {
      document.getElementById('pr-filter-count').textContent = `${list.length} คน · ${allDays.length} วัน`
      if (!list.length) {
        document.getElementById('pr-grid-wrap').innerHTML = `<div class="p-12 text-center text-gray-400">ไม่พบนักเรียน</div>`
        return
      }
      document.getElementById('pr-grid-wrap').innerHTML =
        `<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${stL} bg-gray-50 text-gray-400 font-normal text-center" style="width:28px">#</th>
              <th class="${stM} bg-gray-50" style="left:28px;width:68px">รหัส</th>
              <th class="${stM} bg-gray-50 text-left px-2" style="left:96px;min-width:${nameW}px">ชื่อ-นามสกุล</th>
              ${weeks.map(w=>`<th colspan="${w.days.length}"
                class="${thB} bg-emerald-600 text-white font-semibold whitespace-nowrap
                  cursor-pointer hover:bg-emerald-700 transition pr-week-th"
                data-week="${w.n}" title="คลิกเพื่อบันทึกสัปดาห์ที่ ${w.n}">
                Week${w.n} ✎</th>`).join('')}
              <th class="${thB} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:48px">คะแนน<br/>/10</th>
            </tr>
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${stL} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${stM} bg-gray-100 text-gray-500" style="left:28px;width:68px">รหัส</th>
              <th class="${stM} bg-gray-100 text-gray-400 text-left px-2" style="left:96px;min-width:${nameW}px">ชื่อ</th>
              ${weeks.flatMap(w=>w.days.map(d=>`<th class="${thB} bg-gray-100 text-gray-400 font-normal"
                style="width:${dayW}px;min-width:${dayW}px;font-size:9px">
                ${_DAY_TH[d.date.getDay()]}<br/>${_fmtD(d.date)}</th>`)).join('')}
              <th class="${thB} bg-indigo-50"></th>
            </tr>
          </thead>
          <tbody>
            ${list.map((s,i) => {
              const sMap  = adminPrayMap[s.id] ?? {}
              const score = _prayScore(sMap, allDays)
              return `<tr class="hover:bg-gray-50/60" data-sid="${s.id}">
                <td class="${stL} text-center text-gray-400" style="width:28px">${i+1}</td>
                <td class="${stM} text-center font-mono text-gray-600" style="left:28px;width:68px">${s.student_code??'—'}</td>
                <td class="${stM} px-2" style="left:96px;min-width:${nameW}px">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${s.image_url
                      ? `<img src="${s.image_url}" class="w-6 h-6 rounded-full object-cover flex-shrink-0"/>`
                      : `<div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0 text-xs">👤</div>`}
                    <span class="text-gray-800 text-xs truncate max-w-[110px]">${s.full_name??'—'}</span>
                  </div>
                </td>
                ${weeks.flatMap(w=>w.days.map(d=>{
                  const st = sMap[d.ds]??null, p = st?_PST[st]:null
                  return `<td class="border border-gray-100 text-center cursor-pointer select-none
                    pr-cell hover:bg-gray-100 transition ${p?p.bg:''}"
                    data-sid="${s.id}" data-date="${d.ds}" data-room="${curRoom}"
                    style="width:${dayW}px;min-width:${dayW}px;height:28px">
                    ${p?`<span class="${p.color} text-xs">${p.label}</span>`:''}
                  </td>`
                })).join('')}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${scCls(score)} text-xs"
                  id="pr-sc-${s.id}" style="min-width:48px">${score}</td>
              </tr>`
            }).join('')}
          </tbody>
        </table>`

      // Click Week header → open week modal
      document.getElementById('pr-grid-wrap').addEventListener('click', e => {
        const th = e.target.closest('.pr-week-th')
        if (!th) return
        const weekN = +th.dataset.week
        const week  = weeks.find(w => w.n === weekN)
        if (week) _openAdminWeekModal(week, _stuList, _curRoom)
      })

      // Click cell → เปิด Picker (เหมือนครูเป๊ะ)
      document.getElementById('pr-grid-wrap').addEventListener('click', e => {
        const cell = e.target.closest('.pr-cell')
        if (!cell) return
        e.stopPropagation()
        const sid  = +cell.dataset.sid
        const ds   = cell.dataset.date
        const room = cell.dataset.room
        _adminPicker(e, (st) => _saveAdminCell(sid, ds, room, st))
      })
    }

    // Load students by room
    const _loadRoom = async (room, q = '') => {
      document.getElementById('pr-grid-wrap').innerHTML =
        `<div class="p-10 text-center text-gray-400">กำลังโหลด...</div>`
      try {
        // โหลด students + records พร้อมกัน (เร็วกว่า 2×)
        const [students, records] = await Promise.all([
          getStudentsByReligionRoom(room),
          getPrayerRecordsByRoom(room),
        ])
        _stuList = students

        // reset prayMap ทุกครั้งที่เปลี่ยนห้อง — ไม่ให้ข้อมูลห้องเดิมปน
        Object.keys(adminPrayMap).forEach(k => delete adminPrayMap[k])

        // โหลดข้อมูลเฉพาะห้องนี้
        for (const s of _stuList) adminPrayMap[s.id] = {}
        for (const r of records) {
          if (!adminPrayMap[r.student_id]) adminPrayMap[r.student_id] = {}
          adminPrayMap[r.student_id][r.check_date] = r.status
        }

        // orderedDates จาก semester config (ไม่ต้องรอ records)
        orderedDates = allDays.map(d => d.ds)

        const filtered = q
          ? _stuList.filter(s => s.full_name?.toLowerCase().includes(q) || s.student_code?.includes(q))
          : _stuList
        _renderGrid(filtered, room)
      } catch(err) {
        document.getElementById('pr-grid-wrap').innerHTML =
          `<div class="p-10 text-center text-red-400">โหลดไม่สำเร็จ: ${err.message}</div>`
      }
    }

    // ─── Room Picker ──────────────────────────────────────────────────────────
    let _curRoom = rooms[0] ?? ''

    const _setRoom = (room) => {
      _curRoom = room
      document.getElementById('pr-room-label').textContent = room
      document.getElementById('pr-room-dropdown').classList.add('hidden')
      document.querySelectorAll('.pr-room-item').forEach(b => {
        const active = b.dataset.room === room
        b.classList.toggle('bg-indigo-50', active)
        b.classList.toggle('font-semibold', active)
        b.classList.toggle('text-indigo-700', active)
      })
      const q = document.getElementById('pr-filter-search').value.toLowerCase()
      _loadRoom(room, q)
    }

    // Toggle dropdown
    document.getElementById('pr-room-btn').addEventListener('click', e => {
      e.stopPropagation()
      const dd = document.getElementById('pr-room-dropdown')
      dd.classList.toggle('hidden')
      if (!dd.classList.contains('hidden')) {
        document.getElementById('pr-room-search').focus()
      }
    })

    // Filter rooms in dropdown
    document.getElementById('pr-room-search').addEventListener('input', e => {
      const q = e.target.value.toLowerCase()
      document.querySelectorAll('.pr-room-item').forEach(btn => {
        btn.style.display = btn.dataset.room.toLowerCase().includes(q) ? '' : 'none'
      })
    })

    // Select room
    document.getElementById('pr-room-list').addEventListener('click', e => {
      const btn = e.target.closest('.pr-room-item')
      if (!btn) return
      _setRoom(btn.dataset.room)
    })

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      document.getElementById('pr-room-dropdown')?.classList.add('hidden')
    }, { capture: true, once: false })

    // Initial load
    if (_curRoom) _setRoom(_curRoom)

    // Student search
    document.getElementById('pr-filter-search').addEventListener('input', e => {
      const q = e.target.value.toLowerCase()
      if (!_stuList.length) return
      const filtered = q
        ? _stuList.filter(s => s.full_name?.toLowerCase().includes(q) || s.student_code?.includes(q))
        : _stuList
      _renderGrid(filtered, _curRoom)
    })

    // ─── Sync ห้องนี้ ─────────────────────────────────────────────────────────
    document.getElementById('btn-sync-prayer').addEventListener('click', async () => {
      const btn = document.getElementById('btn-sync-prayer')
      if (!cfg.prayerSheetId) { showToast('ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า', 'warning'); return }
      const activeDates = Object.values(adminPrayMap).flatMap(m => Object.keys(m))
      const syncDates   = [...new Set([...orderedDates, ...activeDates])].sort()
      if (!syncDates.length) { showToast('ยังไม่มีข้อมูลละหมาดในระบบ', 'warning'); return }
      btn.disabled=true; btn.textContent='⏳ กำลัง Sync...'
      try {
        const { syncPrayerSheet } = await import('./sync.js')
        const syncStudents = _stuList.map(s => ({ id: s.id, student_code: s.student_code }))
        await syncPrayerSheet(cfg.prayerSheetId, cfg.prayerSheetTab||'Solat',
          cfg.prayerStudentRange||'A3:A3000', syncDates, adminPrayMap, syncStudents)
        showToast(`Sync ละหมาด ${syncStudents.length} คน × ${syncDates.length} วัน สำเร็จ`, 'success')
      } catch(err) { showToast('Sync ไม่สำเร็จ: '+(err.message??''),'error') }
      finally { btn.disabled=false; btn.textContent='↑ Sync ห้องนี้' }
    })

    // ─── Sync ทุกห้อง (Batch) ────────────────────────────────────────────────
    document.getElementById('btn-sync-all-prayer').addEventListener('click', async () => {
      const btn = document.getElementById('btn-sync-all-prayer')
      if (!cfg.prayerSheetId) { showToast('ยังไม่ได้ตั้งค่า Sheet ID — ไปที่แท็บ ⚙️ ตั้งค่า', 'warning'); return }
      btn.disabled=true; btn.textContent='⏳ กำลังโหลดทุกห้อง...'
      try {
        const { syncPrayerSheet } = await import('./sync.js')
        const { getAllPrayerRecords: _all, getStudents: _stuAll } = await import('./api.js')

        // โหลดข้อมูลทั้งหมด
        const [allRecords, allStudents] = await Promise.all([
          _all(),
          _stuAll(),
        ])

        // สร้าง prayMap รวมทุกห้อง
        const allPrayMap = {}
        for (const r of allRecords) {
          if (!allPrayMap[r.student_id]) allPrayMap[r.student_id] = {}
          allPrayMap[r.student_id][r.check_date] = r.status
        }

        // เฉพาะนักเรียนที่มี religion_room
        const stuWithReligion = allStudents.filter(s => s.religion_room)
        const syncStudents    = stuWithReligion.map(s => ({ id: s.id, student_code: s.student_code }))

        const allDates = [...new Set(allRecords.map(r => r.check_date))].sort()
        const syncDates = [...new Set([...orderedDates, ...allDates])].sort()

        if (!syncDates.length || !syncStudents.length) {
          showToast('ยังไม่มีข้อมูลละหมาดในระบบ', 'warning'); return
        }

        btn.textContent = `⏳ Sync ${syncStudents.length} คน × ${syncDates.length} วัน...`
        await syncPrayerSheet(cfg.prayerSheetId, cfg.prayerSheetTab||'Solat',
          cfg.prayerStudentRange||'A3:A3000', syncDates, allPrayMap, syncStudents)
        showToast(`✅ Sync ทุกห้อง ${syncStudents.length} คน × ${syncDates.length} วัน สำเร็จ`, 'success')
      } catch(err) { showToast('Sync ไม่สำเร็จ: '+(err.message??''),'error') }
      finally { btn.disabled=false; btn.textContent='↑ Sync ทุกห้อง' }
    })

    // ─── Admin Week Modal ──────────────────────────────────────────────────
    const _openAdminWeekModal = (week, students, room) => {
      document.getElementById('admin-prayer-modal')?.remove()
      const m = document.createElement('div')
      m.id = 'admin-prayer-modal'
      m.className = 'fixed inset-0 z-50 flex flex-col bg-white'

      const dateRange = `${_fmtD(week.days[0].date)}–${_fmtD(week.days[week.days.length-1].date)}`

      const _cellHtml = (sid, ds) => {
        const st = adminPrayMap[sid]?.[ds] ?? null
        const p  = st ? _PST[st] : null
        return `<button class="adm-cell w-10 h-10 rounded-xl border-2 border-gray-100
          flex items-center justify-center text-sm font-bold transition
          hover:border-indigo-300 ${p ? p.bg + ' border-transparent' : 'bg-gray-50'}"
          data-sid="${sid}" data-date="${ds}" data-room="${room}">
          ${p ? `<span class="${p.color}">${p.label}</span>` : '<span class="text-gray-200">·</span>'}
        </button>`
      }

      m.innerHTML = `
        <div class="bg-emerald-700 text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <button id="adm-modal-close" class="text-white/80 hover:text-white text-lg leading-none">✕</button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${week.n}</p>
            <p class="text-xs text-emerald-200">${dateRange} · ${room}</p>
          </div>
          <button id="adm-all-check"
            class="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-medium rounded-lg transition">
            AllCheck
          </button>
        </div>
        <div class="overflow-auto flex-1">
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b border-gray-100 sticky top-0 z-10">
              <tr>
                <th class="text-left px-3 py-2.5 font-semibold text-gray-600 min-w-[160px]">นักเรียน</th>
                ${week.days.map(d=>`
                  <th class="text-center px-2 py-2.5 min-w-[60px]">
                    <div class="font-semibold text-gray-700">${_DAY_TH[d.date.getDay()]} ${_fmtD(d.date)}</div>
                    <button class="adm-day-all mt-1 text-xs px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium"
                      data-date="${d.ds}" data-room="${room}">AllDay</button>
                  </th>`).join('')}
                <th class="text-center px-2 py-2.5 min-w-[80px] font-semibold text-gray-600">ทั้งสัปดาห์</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="adm-modal-body">
              ${students.map(s => `
                <tr class="hover:bg-gray-50/50" data-sid="${s.id}">
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${s.image_url
                        ? `<img src="${s.image_url}" class="w-8 h-8 rounded-full object-cover flex-shrink-0"/>`
                        : `<div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">👤</div>`}
                      <span class="text-gray-800 truncate max-w-[120px]">${s.full_name??'—'}</span>
                    </div>
                  </td>
                  ${week.days.map(d => `<td class="px-2 py-2 text-center">${_cellHtml(s.id, d.ds)}</td>`).join('')}
                  <td class="px-2 py-2 text-center">
                    <button class="adm-row-all px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium hover:bg-emerald-100 transition"
                      data-sid="${s.id}" data-room="${room}">ตั้งครบ ▾</button>
                  </td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>`
      document.body.appendChild(m)

      // Cell click → Picker (เหมือนครูเป๊ะ)
      m.querySelector('#adm-modal-body').addEventListener('click', e => {
        const cell = e.target.closest('.adm-cell')
        if (!cell) return
        e.stopPropagation()
        const sid = +cell.dataset.sid
        const ds  = cell.dataset.date
        _adminPicker(e, (st) => _saveAdminCell(sid, ds, room, st))
      })

      // AllDay per column → Picker
      m.querySelectorAll('.adm-day-all').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation()
          const ds = btn.dataset.date
          _adminPicker(e, (st) => _saveBatchAdmin(students.map(s => [s.id, ds, st]), room))
        })
      })

      // ตั้งครบ per row → Picker
      m.querySelectorAll('.adm-row-all').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation()
          const sid = +btn.dataset.sid
          _adminPicker(e, (st) => _saveBatchAdmin(week.days.map(d => [sid, d.ds, st]), room))
        })
      })

      // AllCheck → Picker (ทุกคน ทุกวัน)
      m.querySelector('#adm-all-check').addEventListener('click', e => {
        e.stopPropagation()
        _adminPicker(e, (st) => _saveBatchAdmin(
          students.flatMap(s => week.days.map(d => [s.id, d.ds, st])), room
        ))
      })

      m.querySelector('#adm-modal-close').addEventListener('click', () => m.remove())
    }
  }

  // ─── Tab: ตั้งค่า ──────────────────────────────────────────────────────────
  const _showConfig = () => {
    document.getElementById('pr-tab-actions').innerHTML = ''
    document.getElementById('pr-tab-content').innerHTML = `
      <!-- Filter/Search bar (สอดคล้องกับ UI ของครูศาสนา) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4 flex flex-wrap gap-3 items-center">
        <select id="pr-cfg-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[160px]">
          <option value="">ทุกห้อง (ชีทกลาง)</option>
          ${rooms.map(r=>`<option value="${r}">${r}</option>`).join('')}
        </select>
        <input id="pr-cfg-search" type="text" placeholder="ค้นหาการตั้งค่า..."
          class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      </div>

      <!-- ตั้งค่า Sheet (Solat) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">🔗 Google Sheet ละหมาด (Solat)</span>
        </div>
        <div class="px-5 py-4 space-y-2.5">
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">Sheet ID</label>
            <input type="text" id="pr-sheet-id" value="${cfg.prayerSheetId??''}" placeholder="วาง ID จาก URL ของ Google Sheet"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ชื่อแท็บ</label>
            <input type="text" id="pr-sheet-tab" value="${cfg.prayerSheetTab??'Solat'}" placeholder="Solat"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ช่วงรหัสนักเรียน</label>
            <input type="text" id="pr-stu-range" value="${cfg.prayerStudentRange??'A3:A3000'}" placeholder="A3:A3000"
              class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">คอลัมน์ที่บันทึกรหัสนักเรียนในแท็บ Solat — ค่า default: <code>A3:A3000</code></p>
          </div>
          <div class="pt-2 border-t border-gray-50">
            <p class="text-xs text-gray-400 mb-3">💡 คอลัมน์คะแนนรายวันเริ่มที่ <b>D</b> เป็นต้นไป (D=วันที่ 1, E=วันที่ 2, ...) เหมือนระบบเช็คชื่อ</p>
            <button id="pr-save-cfg"
              class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
              บันทึกการตั้งค่า
            </button>
          </div>
        </div>
      </div>`

    document.getElementById('pr-save-cfg').addEventListener('click', async () => {
      const btn   = document.getElementById('pr-save-cfg')
      const sid   = document.getElementById('pr-sheet-id').value.trim()
      const tab   = document.getElementById('pr-sheet-tab').value.trim() || 'Solat'
      const range = document.getElementById('pr-stu-range').value.trim() || 'A3:A3000'
      btn.disabled=true; btn.textContent='⏳ กำลังบันทึก...'
      try {
        await Promise.all([
          updateSystemConfig('prayerSheetId', sid),
          updateSystemConfig('prayerSheetTab', tab),
          updateSystemConfig('prayerStudentRange', range),
        ])
        cfg.prayerSheetId=sid; cfg.prayerSheetTab=tab; cfg.prayerStudentRange=range
        btn.textContent='✅ บันทึกแล้ว'; btn.style.background='#16a34a'
        setTimeout(()=>{ btn.disabled=false; btn.textContent='บันทึกการตั้งค่า'; btn.style.background='' }, 1800)
        showToast('บันทึก Sheet config ละหมาดแล้ว', 'success')
      } catch { showToast('บันทึกไม่สำเร็จ','error'); btn.disabled=false; btn.textContent='บันทึกการตั้งค่า' }
    })
  }

  // ─── Tab switcher ──────────────────────────────────────────────────────────
  const _switchTab = (tab) => {
    document.querySelectorAll('[data-tab]').forEach(b => {
      b.className = b.dataset.tab===tab
        ? 'px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700'
        : 'px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700'
    })
    if (tab==='scores') _showScores(); else _showConfig()
  }
  document.getElementById('pr-tab-scores').addEventListener('click', ()=>_switchTab('scores'))
  document.getElementById('pr-tab-config').addEventListener('click', ()=>_switchTab('config'))
  _switchTab('scores')
}

function _openReadingModal(col, year, sem, onSave) {
  document.getElementById('rsa-modal')?.remove()
  const isEdit = !!col
  const m = document.createElement('div')
  m.id = 'rsa-modal'
  m.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40'
  m.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7">
      <h3 class="text-lg font-bold text-gray-800 mb-5">${isEdit?'แก้ไขหัวข้อ':'เพิ่มหัวข้อ'}</h3>
      <form id="rsa-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อหัวข้อ <span class="text-red-400">*</span></label>
          <input id="rsa-name" type="text" value="${col?.name??''}" placeholder="เช่น การอ่านออกเสียง"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" required />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
            <input id="rsa-max" type="number" min="1" max="100" value="${col?.max_score??20}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ลำดับ</label>
            <input id="rsa-order" type="number" min="0" value="${col?.sort_order??0}"
              class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Google Sheet</label>
          <input id="rsa-sheetcol" type="text" value="${col?.sheet_col??''}" placeholder="เช่น EH"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase" />
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button" id="rsa-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button type="submit" id="rsa-save"
            class="btn-primary flex-1 py-2.5 rounded-xl text-white text-sm font-semibold">${isEdit?'บันทึก':'เพิ่ม'}</button>
        </div>
      </form>
    </div>`
  document.body.appendChild(m)
  m.querySelector('#rsa-cancel').addEventListener('click', () => m.remove())
  m.addEventListener('click', e => { if(e.target===m) m.remove() })
  m.querySelector('#rsa-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = m.querySelector('#rsa-save')
    btn.disabled=true; btn.textContent='กำลังบันทึก...'
    try {
      const payload = {
        name:          m.querySelector('#rsa-name').value.trim(),
        max_score:     parseInt(m.querySelector('#rsa-max').value)||20,
        sort_order:    parseInt(m.querySelector('#rsa-order').value)||0,
        sheet_col:     m.querySelector('#rsa-sheetcol').value.trim().toUpperCase()||null,
        academic_year: year, semester: sem,
      }
      if (isEdit) await updateReadingScoreColumn(col.id, payload)
      else        await createReadingScoreColumn(payload)
      showToast('บันทึกสำเร็จ','success'); m.remove(); onSave()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error')
      btn.disabled=false; btn.textContent=isEdit?'บันทึก':'เพิ่ม'
    }
  })
}
