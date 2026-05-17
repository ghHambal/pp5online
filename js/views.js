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
         getPaymentSlipViewUrl,
         getScheduleTeacherIds,
         getLifeSkillColumns, createLifeSkillColumn,
         updateLifeSkillColumn, deleteLifeSkillColumn,
         getReadingScoreColumns, createReadingScoreColumn,
         updateReadingScoreColumn, deleteReadingScoreColumn,
         getAllLifeSkillScores, getAllReadingScores, getAllPrayerRecords,
         savePrayerCellAdmin, getStudentsByReligionRoom,
         getPrayerRecordsByRoom, fillLifeSkillScoresToClassScores,
         getPrayerMonitoringData, getLifeSkillMonitoringData, getReadingMonitoringData,
         fillPrayerScoresToReligionClassScores,
         getCurriculumStandards, createCurriculumStandard, updateCurriculumStandard,
         deleteCurriculumStandard, importCurriculumStandards,
         getUsageStats,
         getClassrooms, createClassroom, updateClassroom, deleteClassroom } from './api.js'
import { renderCourseForm, renderClassForm, renderClassEditForm, renderScoreColumns } from './teacher-views.js'
import { showToast, showPageLoader } from './ui.js'
import { openTeacherModal, handleDeleteTeacher,
         openSubjectModal, handleDeleteSubject,
         openDeptModal, handleDeleteDept,
         openPeriodModal, handleDeletePeriod } from './dashboard.js'
import { parseCSV, importTeachers, importStudents, buildPreviewHTML } from './import.js'
import { uploadSystemAsset, uploadStickerPng } from './storage.js'
import { applyThemeForRole } from './theme.js'
import { supabase } from './supabase.js'
import {
  DEFAULT_SUBJECT_SYNC_COLUMNS,
  DEFAULT_SUBJECT_SYNC_KEY_FIELD,
  DEFAULT_SUBJECT_SYNC_SHEET_ID,
  DEFAULT_SUBJECT_SYNC_TAB,
  COPY_TEMPLATE_CONFIG,
  SUBJECT_SYNC_COLUMNS,
  syncSubjectCatalog,
  syncStudentsFromSheetNow,
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
        <button type="button" onclick="window._adminNav?.('${k === 'classes' ? 'classrooms-admin' : k}')"
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
    <div id="monitor-shell" class="mt-6"></div>
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
              <p class="text-xs text-gray-400">${p.package_type==='semester' ? `เหมาทั้งเทอม ${p.amount ?? 299} บ.` : `รายห้อง ${parseInt(p.room_count ?? 1) || 1} ห้อง ${p.amount ?? 49} บ.`} · ${new Date(p.created_at).toLocaleDateString('th-TH')}</p>
            </div>
            <button onclick="window._adminNav?.('payments')"
              class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium hover:bg-amber-200">
              ตรวจสอบ
            </button>
          </div>`).join('')
        + (pending.length > 3 ? `<p class="text-xs text-center text-gray-400 pt-2">และอีก ${pending.length-3} รายการ</p>` : '')
      }
    }
    // ── Monitoring section ──────────────────────────────────────────────────────
    const cfg       = await getSystemConfig().catch(()=>({}))
    const monitorEl = document.getElementById('monitor-shell')
    if (monitorEl) _renderMonitoringShell(monitorEl, cfg)

  } catch {
    showToast('โหลดข้อมูลสรุปไม่สำเร็จ', 'error')
  }
}

// ─── Admin Monitoring Section ─────────────────────────────────────────────────

// ─── Monitoring: helpers ──────────────────────────────────────────────────────

// สร้าง roomStudents จาก homerooms (source หลัก) + overlay นักเรียน
function _buildRoomStudents(homerooms, students, roomField) {
  const roomStudents = {}
  for (const ht of homerooms) {
    if (ht.main_room) roomStudents[ht.main_room] = []  // init ทุกห้องจาก homeroom
  }
  for (const s of students) {
    const r = s[roomField]
    if (!r) continue
    if (!roomStudents[r]) roomStudents[r] = []  // ห้องที่ไม่อยู่ใน homeroom แต่มีนักเรียน
    roomStudents[r].push({ id: s.id, full_name: s.full_name ?? '', student_code: s.student_code ?? '' })
  }
  return roomStudents
}

// ─── Monitoring: ข้อมูล summary สำหรับการ์ด ──────────────────────────────────
async function _calcPrayerSummary(year, sem, semStart) {
  const { records, students, homerooms } = await getPrayerMonitoringData(year, sem)
  const roomStudents = _buildRoomStudents(homerooms, students, 'religion_room')
  const weekRoomRec = {}, weekRoomAbsent = {}
  const allWeeks = new Set()
  for (const rec of records) {
    const r = rec.main_room; const w = rec.week_number
    if (!r || !w) continue
    allWeeks.add(w)
    if (!weekRoomRec[r]) weekRoomRec[r] = {}
    if (!weekRoomRec[r][w]) weekRoomRec[r][w] = new Set()
    weekRoomRec[r][w].add(rec.student_id)
    if (rec.status === 'absent') {
      if (!weekRoomAbsent[r]) weekRoomAbsent[r] = {}
      if (!weekRoomAbsent[r][w]) weekRoomAbsent[r][w] = new Set()
      weekRoomAbsent[r][w].add(rec.student_id)
    }
  }
  const weeks = [...allWeeks].sort((a,b)=>a-b)
  // W = สัปดาห์ปัจจุบันจากวันเปิดภาคเรียน (ถ้าตั้งค่าไว้) หรือ max จาก records
  const W = semStart ? _currentWeek(semStart) : (weeks[weeks.length-1] ?? 0)
  const rooms = Object.keys(roomStudents)
  const recordPending = rooms.filter(r => {
    const total = roomStudents[r].length
    const done  = weekRoomRec[r]?.[W-1]?.size ?? 0
    return total > 0 && done < total
  })
  const followPending = rooms.filter(room => {
    const absentW2 = weekRoomAbsent[room]?.[W-2]
    if (!absentW2?.size) return false
    return [...absentW2].some(sid => {
      const recs = records.filter(rec => rec.main_room===room && rec.week_number===W-1 && rec.student_id===sid)
      return !recs.some(rec => rec.status==='followed'||rec.status==='avoid')
    })
  })
  const total = rooms.length
  const done  = rooms.filter(r => {
    const t = roomStudents[r].length; if (!t) return false
    return (weekRoomRec[r]?.[W-1]?.size ?? 0) >= t
  }).length
  return { total, done, recordPending: recordPending.length, followPending: followPending.length, week: W,
    _raw: { records, students, roomStudents, weekRoomRec, weekRoomAbsent, weeks, W, homerooms } }
}

async function _calcSkillSummary(year, sem) {
  const { columns, scores, students, homerooms } = await getLifeSkillMonitoringData(year, sem)
  // ใช้ homerooms (category='สามัญ') เป็น source หลัก
  const roomStudents = _buildRoomStudents(homerooms, students, 'main_room')
  const scored = new Set(scores.map(s => s.student_id))
  const rooms  = Object.keys(roomStudents)
  const done   = rooms.filter(r => roomStudents[r].length > 0 && roomStudents[r].every(s => scored.has(s.id ?? s))).length
  return { total: rooms.length, done, pending: rooms.length - done, _raw: { columns, scores, students, roomStudents, scored, homerooms } }
}

async function _calcReadingSummary(year, sem) {
  const { columns, scores, students, homerooms } = await getReadingMonitoringData(year, sem)
  // ใช้ homerooms (category='สามัญ') เป็น source หลัก
  const roomStudents = _buildRoomStudents(homerooms, students, 'main_room')
  const scored = new Set(scores.map(s => s.student_id))
  const rooms  = Object.keys(roomStudents)
  const done   = rooms.filter(r => roomStudents[r].length > 0 && roomStudents[r].every(s => scored.has(s.id ?? s))).length
  return { total: rooms.length, done, pending: rooms.length - done, _raw: { columns, scores, students, roomStudents, scored, homerooms } }
}

// คำนวณสัปดาห์ปัจจุบันจากวันเปิดภาคเรียน
function _currentWeek(semesterStart) {
  if (!semesterStart) return 0
  const start = new Date(semesterStart)
  if (isNaN(start)) return 0
  const diffMs = Date.now() - start.getTime()
  if (diffMs < 0) return 0  // ยังไม่ถึงเปิดภาค
  return Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000)) + 1
}

// ─── Monitoring Shell (cards) ─────────────────────────────────────────────────
async function _renderMonitoringShell(container, cfg) {
  const year = parseInt(cfg.academicYear ?? 2568)
  const sem  = parseInt(cfg.semester ?? 1)

  container.innerHTML = `
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="font-bold text-gray-800 mb-4">📊 ติดตามความคืบหน้า</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="monitor-cards">
        ${['prayer','lifeskill','reading'].map(k => `
        <div class="monitor-card rounded-xl border border-gray-100 p-4 cursor-pointer hover:shadow-md hover:border-indigo-200 transition bg-gray-50"
          data-type="${k}">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">${{prayer:'🕌',lifeskill:'🌱',reading:'📖'}[k]}</span>
            <p class="font-semibold text-sm text-gray-700">${{prayer:'ละหมาด (รายสัปดาห์)',lifeskill:'ทักษะชีวิต (รายเทอม)',reading:'อ่านคิดวิเคราะห์ (รายเทอม)'}[k]}</p>
          </div>
          <div id="card-${k}" class="text-center py-4 text-gray-300 text-xs">กำลังโหลด...</div>
        </div>`).join('')}
      </div>
    </div>`

  // โหลด 3 cards + ดึง teachers สำหรับ assign ในกรณีไม่มีครูที่ปรึกษา
  const [prayer, skill, reading, teachersRes] = await Promise.allSettled([
    _calcPrayerSummary(year, sem, cfg.semester_start),
    _calcSkillSummary(year, sem),
    _calcReadingSummary(year, sem),
    getTeachers().catch(()=>[]),
  ])
  const allTeachers = teachersRes.status === 'fulfilled' ? teachersRes.value : []

  const _cardContent = (type, result) => {
    const el = document.getElementById(`card-${type}`)
    if (!el) return
    if (result.status === 'rejected') {
      el.innerHTML = `<p class="text-red-400 text-xs">โหลดไม่สำเร็จ</p>`; return
    }
    const d = result.value
    if (type === 'prayer') {
      const pct = d.total > 0 ? Math.round(d.done/d.total*100) : 0
      const alertCount = d.recordPending + d.followPending
      el.innerHTML = `
        <p class="text-3xl font-extrabold ${pct>=100?'text-emerald-600':pct>=60?'text-amber-500':'text-red-500'}">${pct}%</p>
        <p class="text-xs text-gray-400 mt-1">กรอกครบ ${d.done}/${d.total} ห้อง (สัปดาห์ที่ ${d.week-1})</p>
        ${alertCount>0 ? `<div class="mt-2 flex flex-wrap gap-1 justify-center">
          ${d.recordPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">บันทึกค้าง ${d.recordPending} ห้อง</span>`:''}
          ${d.followPending>0?`<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">ติดตามค้าง ${d.followPending} ห้อง</span>`:''}
        </div>` : `<p class="text-[10px] text-emerald-500 mt-1">✅ ไม่มีรายการค้าง</p>`}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`
    } else {
      const pct = d.total > 0 ? Math.round(d.done/d.total*100) : 0
      el.innerHTML = `
        <p class="text-3xl font-extrabold ${pct>=100?'text-emerald-600':pct>=60?'text-amber-500':'text-red-500'}">${pct}%</p>
        <p class="text-xs text-gray-400 mt-1">ครบ ${d.done}/${d.total} ห้อง</p>
        ${d.pending>0 ? `<p class="text-[10px] text-red-500 mt-1">ค้าง ${d.pending} ห้อง</p>` : `<p class="text-[10px] text-emerald-500 mt-1">✅ กรอกครบทุกห้อง</p>`}
        <p class="text-[10px] text-indigo-500 mt-2 font-medium">คลิกเพื่อดูรายละเอียด →</p>`
    }
  }

  _cardContent('prayer',    prayer)
  _cardContent('lifeskill', skill)
  _cardContent('reading',   reading)

  // click card → modal
  container.querySelectorAll('.monitor-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type
      const raw  = type==='prayer' ? prayer.value?._raw : type==='lifeskill' ? skill.value?._raw : reading.value?._raw
      _openMonitorModal(type, raw, cfg, year, sem, allTeachers)
    })
  })
}

// ─── Monitor Modal ────────────────────────────────────────────────────────────
function _openMonitorModal(type, raw, cfg, year, sem, allTeachers = []) {
  document.getElementById('monitor-modal')?.remove()
  const titles = { prayer:'🕌 ละหมาด — รายสัปดาห์', lifeskill:'🌱 ทักษะชีวิต — รายเทอม', reading:'📖 อ่านคิดวิเคราะห์ — รายเทอม' }
  const m = document.createElement('div')
  m.id = 'monitor-modal'
  m.className = 'fixed inset-0 z-[90] flex flex-col bg-white'
  m.innerHTML = `
    <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shadow-sm flex-shrink-0">
      <div>
        <h2 class="font-bold text-gray-800 text-base">${titles[type]}</h2>
        <p class="text-xs text-gray-400">ภาค ${cfg.semester??'—'}/${cfg.academicYear??'—'}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="modal-print-btn" class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">🖨️ พิมพ์</button>
        <button id="modal-doc-btn" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">📄 บันทึกข้อความ</button>
        <button id="monitor-modal-close" class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-xl leading-none">×</button>
      </div>
    </div>
    <div id="modal-body" class="flex-1 overflow-auto p-5"></div>`
  document.body.appendChild(m)
  m.querySelector('#monitor-modal-close').addEventListener('click', () => m.remove())

  const body = m.querySelector('#modal-body')
  const category = type === 'prayer' ? 'ศาสนา' : 'สามัญ'
  const ctx = { allTeachers, year, sem, category }
  if (type === 'prayer')    _renderPrayerMonitor(body, raw, ctx)
  if (type === 'lifeskill') _renderLifeSkillMonitor(body, raw, year, sem, ctx)
  if (type === 'reading')   _renderReadingMonitor(body, raw, year, sem, ctx)

  m.querySelector('#modal-print-btn').addEventListener('click', () => _printMonitor(cfg, type))
  m.querySelector('#modal-doc-btn').addEventListener('click', () => _downloadMemo(cfg, type, raw))
}

// helper: สร้าง cell ครูที่ปรึกษา (ชื่อเด่น, ห้องเล็ก, ปุ่มระบุถ้าไม่มี)
function _teacherCell(room, teacherByRoom, homeroomMap, ctx) {
  const tname = teacherByRoom[room]
  const { allTeachers, year, sem, category } = ctx ?? {}
  if (tname) {
    return `<p class="font-semibold text-gray-800 text-xs leading-tight">${tname}</p>
            <p class="text-[10px] text-gray-400 mt-0.5">${room}</p>`
  }
  // ไม่มีครูที่ปรึกษา → ปุ่มระบุ
  const teacherOpts = (allTeachers ?? [])
    .map(t => `<option value="${t.id}">${t.full_name ?? ''}${t.teacher_code?` (${t.teacher_code})`:''}</option>`)
    .join('')
  const pickerId = `pick-${room.replace(/[^a-zA-Z0-9]/g,'_')}`
  return `<p class="text-[11px] font-medium text-gray-500">${room}</p>
    <button class="hr-assign-btn mt-1 text-[10px] font-medium text-amber-600 hover:text-amber-800 underline underline-offset-2"
      data-room="${room}" data-picker="${pickerId}">
      ยังไม่ระบุครูที่ปรึกษา ⊕
    </button>
    <div id="${pickerId}" class="hidden mt-2 flex gap-1 items-center">
      <select class="hr-sel text-[10px] border border-gray-200 rounded-lg px-2 py-1 bg-white flex-1 focus:outline-none">
        <option value="">-- เลือกครู --</option>${teacherOpts}
      </select>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700"
        data-room="${room}" data-year="${year}" data-sem="${sem}" data-cat="${category}">บันทึก</button>
    </div>`
}

function _renderPrayerMonitor(container, raw, ctx = {}) {
  if (!raw) { container.innerHTML = `<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>`; return }
  const { records, roomStudents, weekRoomRec, weekRoomAbsent, weeks, W, homerooms } = raw

  const rooms = Object.keys(roomStudents).sort((a,b) => a.localeCompare(b,undefined,{numeric:true}))
  const teacherByRoom = {}
  const homeroomMap   = {}
  for (const ht of (homerooms ?? [])) {
    if (ht.main_room) { teacherByRoom[ht.main_room] = ht.teachers?.full_name ?? ''; homeroomMap[ht.main_room] = ht }
  }

  const thBase = 'border border-gray-100 text-center text-[10px] px-2 py-2'
  const TAB_CLS    = 'px-4 py-2 text-sm font-medium border-b-2 transition'
  const TAB_ACTIVE = `${TAB_CLS} border-indigo-600 text-indigo-700 bg-indigo-50`
  const TAB_IDLE   = `${TAB_CLS} border-transparent text-gray-500 hover:text-gray-700`

  const _roomCell = (room, extra = '') => `<td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
    ${_teacherCell(room, teacherByRoom, homeroomMap, ctx)}${extra}
  </td>`

  // ── Tab 1: ความคืบหน้าการบันทึกคะแนนละหมาดรายสัปดาห์ ─────────────────────
  const _tab1Html = (selWeek) => {
    // selWeek: สัปดาห์ที่เลือกดู (default = W-1 = สัปดาห์ล่าสุดที่ควรกรอก)
    const displayW = selWeek ?? (W > 0 ? W-1 : W)
    const weekOpts = weeks.map(w => `<option value="${w}" ${w===displayW?'selected':''}>${w===W?`สัปดาห์ที่ ${w} (ปัจจุบัน)`:w===W-1?`สัปดาห์ที่ ${w} (ควรกรอก)`:`สัปดาห์ที่ ${w}`}</option>`).join('')

    const rows = rooms.map(room => {
      const stuList = roomStudents[room] ?? []
      const total = stuList.length
      const done  = weekRoomRec[room]?.[displayW]?.size ?? 0
      const pct   = total > 0 ? Math.round(done/total*100) : 0
      const bg    = total===0?'bg-gray-50 text-gray-300':done===0?'bg-red-50 text-red-400':pct>=100?'bg-emerald-50 text-emerald-700':'bg-amber-50 text-amber-700'
      const barCl = pct>=100?'bg-emerald-500':pct>=50?'bg-amber-400':'bg-red-400'
      const isPending = total>0 && done<total
      const badge = isPending ? `<span class="text-[9px] text-amber-600 ml-1">📋</span>` : ''
      return `<tr class="hover:bg-gray-50">
        ${_roomCell(room, badge)}
        <td class="border border-gray-100 text-center text-gray-500 text-xs">${total}</td>
        <td class="border border-gray-100 text-center py-2 text-xs ${bg}">
          <div class="font-bold">${total>0?pct+'%':'—'}</div>
          <div class="text-[9px] opacity-70">${total>0?done+'/'+total:''}</div>
        </td>
        <td class="border border-gray-100 px-3 py-2">
          ${total>0?`<div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${barCl} h-2 rounded-full" style="width:${pct}%"></div></div>
            <span class="text-[10px] font-bold ${pct>=100?'text-emerald-600':pct>=50?'text-amber-600':'text-red-500'}">${pct}%</span>
          </div>`:'<span class="text-[10px] text-gray-300">ไม่มีนักเรียน</span>'}
        </td>
      </tr>`
    }).join('')

    return `<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">เลือกสัปดาห์:</label>
      <select id="prayer-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${weekOpts}
      </select>
      <span class="text-[11px] text-gray-400">${rooms.length} ห้อง</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${thBase} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${thBase} bg-gray-100">นักเรียน</th>
          <th class="${thBase} bg-indigo-50 text-indigo-700" style="min-width:80px">บันทึกแล้ว</th>
          <th class="${thBase} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-4 mt-3 text-[11px] text-gray-500">
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100"></span>บันทึกครบ 100%</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100"></span>บางส่วน</span>
      <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100"></span>ยังไม่กรอก</span>
    </div>`
  }

  // ── Tab 2: ความคืบหน้าการติดตามนักเรียนที่ขาดละหมาด ──────────────────────
  const _tab2Html = (selWeek) => {
    // selWeek: สัปดาห์ที่ขาด (ติดตามใน selWeek+1)
    // default = W-2 (ขาดใน W-2, ควรติดตามใน W-1)
    const absW    = selWeek ?? (W > 1 ? W-2 : weeks[0] ?? 1)
    const followW = absW + 1
    // สัปดาห์ที่มีข้อมูล absent
    const absWeekOpts = weeks.map(w => `<option value="${w}" ${w===absW?'selected':''}>${w===W-2?`สัปดาห์ที่ ${w} (ควรติดตาม)`:w===W-1?`สัปดาห์ที่ ${w} (ล่าสุด)`:`สัปดาห์ที่ ${w}`}</option>`).join('')

    const statusBadge = (s, fw) => ({
      followed: `<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium">✅ ติดตามแล้ว</span>`,
      overdue:  `<span class="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">⚠️ ค้างติดตาม</span>`,
      pending:  `<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">รอสัปดาห์ที่ ${fw}</span>`,
    }[s] ?? '')

    // รวม rows: นักเรียนที่ขาดใน absW
    const followRows = []
    for (const room of rooms) {
      const stuList = roomStudents[room] ?? []
      const stuMap  = Object.fromEntries(stuList.map(s => [s.id ?? s, s]))
      const absentIds = [...(weekRoomAbsent[room]?.[absW] ?? [])]
      for (const sid of absentIds) {
        const stu = stuMap[sid]
        const followRecs = records.filter(rec => rec.main_room===room && rec.week_number===followW && rec.student_id===sid)
        const followed   = followRecs.some(rec => rec.status==='followed'||rec.status==='avoid')
        const status     = followed ? 'followed' : (followW > W ? 'pending' : 'overdue')
        followRows.push({ room, stu, status })
      }
    }

    const tableRows = followRows.length ? followRows.map(({ room, stu, status }) => {
      const tname = teacherByRoom[room]
      return `<tr class="hover:bg-gray-50">
        <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[150px]">
          ${tname ? `<p class="font-semibold text-gray-800 text-xs">${tname}</p><p class="text-[10px] text-gray-400">${room}</p>`
                  : `<p class="font-semibold text-gray-800 text-xs">${room}</p>`}
        </td>
        <td class="border border-gray-100 px-3 py-2 text-xs">
          <p class="text-gray-800 font-medium">${stu?.full_name ?? '—'}</p>
          <p class="text-[10px] text-gray-400">${stu?.student_code ?? ''}</p>
        </td>
        <td class="border border-gray-100 text-center py-1.5">${statusBadge(status, followW)}</td>
      </tr>`
    }).join('') : `<tr><td colspan="3" class="py-10 text-center text-gray-400 text-sm">✅ ไม่มีข้อมูลการขาดสำหรับสัปดาห์ที่ ${absW}</td></tr>`

    return `<div class="flex items-center gap-3 mb-3">
      <label class="text-xs font-medium text-gray-600">นักเรียนที่ขาดสัปดาห์:</label>
      <select id="prayer-follow-week-sel" class="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${absWeekOpts}
      </select>
      <span class="text-[11px] text-gray-400">ติดตามสัปดาห์ที่ ${followW} · พบ ${followRows.length} คน</span>
    </div>
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${thBase} text-left bg-gray-100 sticky left-0 z-20 min-w-[150px]">ครูที่ปรึกษาศาสนา</th>
          <th class="${thBase} text-left bg-gray-100 min-w-[160px]">นักเรียน</th>
          <th class="${thBase} bg-gray-100" style="min-width:140px">สถานะการติดตาม</th>
        </tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>`
  }

  // สรุป alert ด้านบน
  const recordPending = rooms.filter(r => { const t=roomStudents[r].length; return t>0 && (weekRoomRec[r]?.[W-1]?.size??0)<t })
  const followPending = rooms.filter(room => {
    const absentW2 = weekRoomAbsent[room]?.[W-2]
    if (!absentW2?.size) return false
    return [...absentW2].some(sid => {
      const recs = records.filter(rec => rec.main_room===room && rec.week_number===W-1 && rec.student_id===sid)
      return !recs.some(rec => rec.status==='followed'||rec.status==='avoid')
    })
  })
  const alertHtml = weeks.length === 0 ? `<div class="mb-3 bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด — แสดงรายชื่อห้องจากฐานข้อมูลครูที่ปรึกษา</div>` :
    (recordPending.length + followPending.length > 0) ? `
    <div class="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
      ${recordPending.length > 0 ? `<div class="bg-amber-50 border border-amber-200 rounded-xl p-3">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 บันทึกค้าง — สัปดาห์ที่ ${W-1}</p>
        <div class="flex flex-wrap gap-1.5">
          ${recordPending.map(r => {
            const t = roomStudents[r].length
            const d = weekRoomRec[r]?.[W-1]?.size ?? 0
            const tn = teacherByRoom[r]
            return `<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">${tn?tn+' / ':''}${r} (${d}/${t})</span>`
          }).join('')}
        </div>
      </div>` : ''}
      ${followPending.length > 0 ? `<div class="bg-red-50 border border-red-200 rounded-xl p-3">
        <p class="text-xs font-bold text-red-800 mb-2">⚠️ ติดตามค้าง — ขาดสัปดาห์ที่ ${W-2}</p>
        <div class="flex flex-wrap gap-1.5">
          ${followPending.map(r => {
            const tn = teacherByRoom[r]
            return `<span class="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700">${tn?tn+' / ':''}${r}</span>`
          }).join('')}
        </div>
      </div>` : ''}
    </div>` : `<div class="mb-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700 font-medium">✅ ไม่มีรายการค้างทั้งบันทึกและติดตาม</div>`

  container.innerHTML = `
    ${alertHtml}
    <div class="flex gap-0 border-b border-gray-200 mb-4">
      <button class="prayer-tab ${TAB_ACTIVE}" data-tab="record">📋 ความคืบหน้าการบันทึก</button>
      <button class="prayer-tab ${TAB_IDLE}"   data-tab="follow">⚠️ ความคืบหน้าการติดตาม</button>
    </div>
    <div id="prayer-tab-content"></div>`

  const contentEl  = container.querySelector('#prayer-tab-content')
  let curTab = 'record'

  const renderTab = (tab, selWeek) => {
    curTab = tab
    contentEl.innerHTML = tab === 'record' ? _tab1Html(selWeek) : _tab2Html(selWeek)
    container.querySelectorAll('.prayer-tab').forEach(btn => {
      btn.className = btn.dataset.tab === tab ? `prayer-tab ${TAB_ACTIVE}` : `prayer-tab ${TAB_IDLE}`
    })
    const sel1 = contentEl.querySelector('#prayer-week-sel')
    if (sel1) sel1.addEventListener('change', e => renderTab('record', parseInt(e.target.value)))
    const sel2 = contentEl.querySelector('#prayer-follow-week-sel')
    if (sel2) sel2.addEventListener('change', e => renderTab('follow', parseInt(e.target.value)))
    _attachHrAssignEvents(contentEl, ctx, () => renderTab(curTab, selWeek))
  }

  container.querySelectorAll('.prayer-tab').forEach(btn =>
    btn.addEventListener('click', () => renderTab(btn.dataset.tab))
  )
  renderTab('record')
}

function _renderLifeSkillMonitor(container, raw, year, sem, ctx = {}) {
  if (!raw) { container.innerHTML = `<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>`; return }
  const { columns, roomStudents, scored, homerooms } = raw
  if (!columns.length) { container.innerHTML = `<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์ทักษะชีวิต</p>`; return }
  const teacherByRoom = {}, homeroomMap = {}
  for (const ht of (homerooms ?? [])) { if (ht.main_room) { teacherByRoom[ht.main_room] = ht.teachers?.full_name ?? ''; homeroomMap[ht.main_room] = ht } }
  const rooms = Object.keys(roomStudents).sort((a,b) => a.localeCompare(b,undefined,{numeric:true}))
  const thB = 'border border-gray-100 text-center text-[10px] px-2 py-2'
  container.innerHTML = `
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${thB} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${thB} bg-gray-100">นักเรียน</th>
          <th class="${thB} bg-emerald-50 text-emerald-700">กรอกแล้ว</th>
          <th class="${thB} bg-red-50 text-red-500">ค้าง</th>
          <th class="${thB} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${rooms.map(room => {
            const stuList = roomStudents[room] ?? []
            const total   = stuList.length
            const done    = stuList.filter(s => scored.has(s.id ?? s)).length
            const miss    = total - done
            const pct     = total > 0 ? Math.round(done/total*100) : 0
            const barCls  = pct>=100?'bg-emerald-500':pct>=50?'bg-amber-400':'bg-red-400'
            return `<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${_teacherCell(room, teacherByRoom, homeroomMap, ctx)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${total}</td>
              <td class="border border-gray-100 text-center text-emerald-600 font-medium">${done}</td>
              <td class="border border-gray-100 text-center ${miss>0?'text-red-500 font-medium':'text-gray-300'}">${miss||'—'}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${barCls} h-2 rounded-full" style="width:${pct}%"></div></div>
                  <span class="text-[10px] font-bold ${pct>=100?'text-emerald-600':pct>=50?'text-amber-600':'text-red-500'}">${pct}%</span>
                </div>
              </td>
            </tr>`
          }).join('')}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${sem}/${year} · ${rooms.length} ห้อง</p>`
  _attachHrAssignEvents(container, ctx, () => _renderLifeSkillMonitor(container, raw, year, sem, ctx))
}

function _renderReadingMonitor(container, raw, year, sem, ctx = {}) {
  if (!raw) { container.innerHTML = `<p class="text-center py-10 text-gray-400">ไม่มีข้อมูล</p>`; return }
  const { columns, roomStudents, scored, homerooms } = raw
  if (!columns.length) { container.innerHTML = `<p class="text-center py-10 text-gray-400 text-sm">ยังไม่มีคอลัมน์คะแนนอ่านคิดวิเคราะห์</p>`; return }
  const teacherByRoom = {}, homeroomMap = {}
  for (const ht of (homerooms ?? [])) { if (ht.main_room) { teacherByRoom[ht.main_room] = ht.teachers?.full_name ?? ''; homeroomMap[ht.main_room] = ht } }
  const rooms = Object.keys(roomStudents).sort((a,b) => a.localeCompare(b,undefined,{numeric:true}))
  const thB = 'border border-gray-100 text-center text-[10px] px-2 py-2'
  container.innerHTML = `
    <div class="overflow-auto rounded-xl border border-gray-100">
      <table class="border-collapse text-xs" style="width:100%">
        <thead><tr style="position:sticky;top:0;z-index:10">
          <th class="${thB} text-left bg-gray-100 sticky left-0 z-20 min-w-[160px]">ครูที่ปรึกษาสามัญ</th>
          <th class="${thB} bg-gray-100">นักเรียน</th>
          <th class="${thB} bg-indigo-50 text-indigo-700">กรอกแล้ว</th>
          <th class="${thB} bg-red-50 text-red-500">ค้าง</th>
          <th class="${thB} bg-gray-100" style="min-width:140px">ความคืบหน้า</th>
        </tr></thead>
        <tbody>
          ${rooms.map(room => {
            const stuList = roomStudents[room] ?? []
            const total   = stuList.length
            const done    = stuList.filter(s => scored.has(s.id ?? s)).length
            const miss    = total - done
            const pct     = total > 0 ? Math.round(done/total*100) : 0
            const barCls  = pct>=100?'bg-indigo-500':pct>=50?'bg-amber-400':'bg-red-400'
            return `<tr class="hover:bg-gray-50">
              <td class="border border-gray-100 px-3 py-2 sticky left-0 bg-white min-w-[160px]">
                ${_teacherCell(room, teacherByRoom, homeroomMap, ctx)}
              </td>
              <td class="border border-gray-100 text-center text-gray-500">${total}</td>
              <td class="border border-gray-100 text-center text-indigo-600 font-medium">${done}</td>
              <td class="border border-gray-100 text-center ${miss>0?'text-red-500 font-medium':'text-gray-300'}">${miss||'—'}</td>
              <td class="border border-gray-100 px-3 py-2">
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="${barCls} h-2 rounded-full" style="width:${pct}%"></div></div>
                  <span class="text-[10px] font-bold ${pct>=100?'text-indigo-600':pct>=50?'text-amber-600':'text-red-500'}">${pct}%</span>
                </div>
              </td>
            </tr>`
          }).join('')}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-2">* ภาค ${sem}/${year} · ${rooms.length} ห้อง · ${columns.length} หัวข้อ</p>`
  _attachHrAssignEvents(container, ctx, () => _renderReadingMonitor(container, raw, year, sem, ctx))
}

// ── Assign homeroom teacher จาก monitoring modal ─────────────────────────────
async function _attachHrAssignEvents(container, ctx, onSaved) {
  const { allTeachers, year, sem, category } = ctx ?? {}
  if (!allTeachers?.length) return

  // toggle picker เมื่อคลิกปุ่ม "ยังไม่ระบุ"
  container.querySelectorAll('.hr-assign-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pickerId = btn.dataset.picker
      const picker = document.getElementById(pickerId)
      if (!picker) return
      picker.classList.toggle('hidden')
    })
  })

  // บันทึกครูที่ปรึกษา
  container.querySelectorAll('.hr-save-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const room = btn.dataset.room
      const pickerId = `pick-${room.replace(/[^a-zA-Z0-9]/g,'_')}`
      const sel = document.getElementById(pickerId)?.querySelector('.hr-sel')
      const teacherId = sel?.value
      if (!teacherId) { showToast('กรุณาเลือกครู','error'); return }
      btn.disabled = true; btn.textContent = '...'
      try {
        await assignHomeroomTeacher({ teacher_id: teacherId, main_room: room, category, academic_year: year, semester: sem })
        showToast(`ระบุครูที่ปรึกษาห้อง ${room} แล้ว ✅`, 'success')
        if (onSaved) onSaved()
      } catch(e) {
        showToast('บันทึกไม่สำเร็จ: '+(e.message??''),'error')
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
    })
  })
}

function _printMonitor(cfg, tab) {
  const tabLabel = { prayer:'ละหมาด', lifeskill:'ทักษะชีวิต', reading:'อ่านคิดวิเคราะห์' }[tab] ?? tab
  // ดึงเนื้อหาจาก modal-body (ไม่ใช่ monitor-content ที่ไม่มีอยู่จริง)
  const bodyEl  = document.getElementById('modal-body')
  if (!bodyEl) { showToast('ไม่พบเนื้อหาสำหรับพิมพ์','error'); return }
  // clone เพื่อลบ interactive elements (button, select)
  const clone = bodyEl.cloneNode(true)
  clone.querySelectorAll('button, select, input').forEach(el => el.remove())
  const content = clone.innerHTML

  const w = window.open('', '_blank')
  if (!w) { showToast('กรุณาอนุญาต popup ในเบราว์เซอร์','error'); return }
  w.document.write(`<!DOCTYPE html><html lang="th"><head>
    <meta charset="UTF-8"/>
    <title>ติดตามความคืบหน้า — ${tabLabel}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet"/>
    <style>
      * { box-sizing: border-box; }
      body { font-family: Sarabun, sans-serif; font-size: 12px; margin: 16px; color: #1f2937; }
      h2 { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
      p { font-size: 12px; color: #6b7280; margin: 2px 0 12px; }
      table { width: 100%; border-collapse: collapse; font-size: 11px; margin: 8px 0; }
      th, td { border: 1px solid #d1d5db; padding: 5px 8px; text-align: center; }
      th { background: #f3f4f6; font-weight: 600; }
      td:first-child { text-align: left; }
      .bg-emerald-50,.bg-emerald-100 { background: #d1fae5 !important; }
      .bg-amber-50,.bg-amber-100 { background: #fef3c7 !important; }
      .bg-red-50,.bg-red-100 { background: #fee2e2 !important; }
      .bg-indigo-50 { background: #e0e7ff !important; }
      .bg-gray-50,.bg-gray-100 { background: #f9fafb !important; }
      .hidden { display: none !important; }
      @media print { @page { margin: 10mm; } body { margin: 0; } }
    </style>
  </head><body>
    <h2>ติดตามความคืบหน้า — ${tabLabel}</h2>
    <p>โรงเรียน: ${cfg.samaiSchoolName ?? cfg.schoolName ?? ''} &nbsp;·&nbsp; ภาค ${cfg.semester ?? '—'}/${cfg.academicYear ?? '—'} &nbsp;·&nbsp; พิมพ์: ${new Date().toLocaleDateString('th-TH')}</p>
    ${content}
  </body></html>`)
  w.document.close()
  setTimeout(() => w.print(), 600)
}

// สร้างตารางสรุป "ค้างดำเนินการ" สำหรับ memo จาก raw data
function _memoTableRows(tab, raw, cfg) {
  const MONTHS = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
  const teacherByRoom = {}
  for (const ht of (raw?.homerooms ?? [])) {
    if (ht.main_room) teacherByRoom[ht.main_room] = ht.teachers?.full_name ?? '—'
  }

  if (tab === 'prayer') {
    const { roomStudents, weekRoomRec, W } = raw ?? {}
    if (!roomStudents) return '<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>'
    const rooms = Object.keys(roomStudents).sort((a,b) => a.localeCompare(b,undefined,{numeric:true}))
    const pending = rooms.filter(r => {
      const t = roomStudents[r].length; if (!t) return false
      return (weekRoomRec[r]?.[W-1]?.size ?? 0) < t
    })
    if (!pending.length) return '<p style="color:#047857">✅ ทุกห้องบันทึกข้อมูลครบถ้วนแล้ว</p>'
    const rows = pending.map((r, i) => {
      const t = roomStudents[r].length
      const d = weekRoomRec[r]?.[W-1]?.size ?? 0
      return `<tr>
        <td>${i+1}</td>
        <td>${teacherByRoom[r] ?? '—'}</td>
        <td>${r}</td>
        <td>${t}</td>
        <td>${d}</td>
        <td style="color:#dc2626">${t-d}</td>
      </tr>`
    }).join('')
    return `<table>
      <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>บันทึกแล้ว</th><th>ค้าง</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="font-size:11px;color:#6b7280">* ข้อมูลสัปดาห์ที่ ${(W??0)-1} ณ วันที่ ${new Date().toLocaleDateString('th-TH')}</p>`
  }

  // lifeskill / reading
  const { roomStudents, scored } = raw ?? {}
  if (!roomStudents) return '<p style="color:#6b7280;font-style:italic">ไม่มีข้อมูล</p>'
  const rooms = Object.keys(roomStudents).sort((a,b) => a.localeCompare(b,undefined,{numeric:true}))
  const pending = rooms.filter(r => {
    const stuList = roomStudents[r] ?? []
    return stuList.length > 0 && !stuList.every(s => scored.has(s.id ?? s))
  })
  if (!pending.length) return '<p style="color:#047857">✅ ทุกห้องกรอกคะแนนครบถ้วนแล้ว</p>'
  const rows = pending.map((r, i) => {
    const stuList = roomStudents[r] ?? []
    const done = stuList.filter(s => scored.has(s.id ?? s)).length
    return `<tr>
      <td>${i+1}</td>
      <td>${teacherByRoom[r] ?? '—'}</td>
      <td>${r}</td>
      <td>${stuList.length}</td>
      <td>${done}</td>
      <td style="color:#dc2626">${stuList.length - done}</td>
    </tr>`
  }).join('')
  return `<table>
    <thead><tr><th>ที่</th><th>ครูที่ปรึกษา</th><th>ห้อง</th><th>นักเรียน</th><th>กรอกแล้ว</th><th>ค้าง</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <p style="font-size:11px;color:#6b7280">* ภาคเรียนที่ ${cfg.semester??'—'}/${cfg.academicYear??'—'} ณ วันที่ ${new Date().toLocaleDateString('th-TH')}</p>`
}

function _downloadMemo(cfg, tab, raw) {
  const tabLabel  = { prayer:'ละหมาด', lifeskill:'ทักษะชีวิต', reading:'อ่านคิดวิเคราะห์' }[tab] ?? tab
  const today     = new Date()
  const MONTHS    = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
  const dateTH    = `${today.getDate()} ${MONTHS[today.getMonth()]} ${today.getFullYear()+543}`
  const schoolName = cfg.samaiSchoolName ?? cfg.schoolName ?? 'โรงเรียน'
  const tableContent = _memoTableRows(tab, raw, cfg)

  const html = `<!DOCTYPE html><html lang="th"><head>
    <meta charset="UTF-8"/>
    <title>บันทึกข้อความ — ${tabLabel}</title>
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'TH Sarabun New', Sarabun, sans-serif; font-size: 16pt; margin: 25.4mm 25.4mm 25.4mm 30mm; color: #000; line-height: 1.8; }
      .doc-title { text-align: center; font-size: 18pt; font-weight: bold; margin-bottom: 6px; border-bottom: 2px solid #000; padding-bottom: 6px; }
      .doc-school { text-align: center; font-size: 14pt; margin-bottom: 20px; }
      .fields { margin-bottom: 16px; }
      .field { display: flex; margin-bottom: 6px; }
      .field-label { min-width: 90px; font-weight: bold; }
      .field-val { flex: 1; border-bottom: 1px dotted #999; padding-bottom: 2px; }
      p.indent { text-indent: 2.5em; margin: 8px 0; }
      table { width: 100%; border-collapse: collapse; font-size: 13pt; margin: 12px 0; }
      th, td { border: 1px solid #333; padding: 5px 10px; text-align: center; }
      th { background: #e5e5e5; font-weight: bold; }
      td:nth-child(2) { text-align: left; }
      td:nth-child(3) { text-align: left; }
      .sign-block { margin-top: 48px; text-align: center; float: right; width: 280px; }
      .sign-line { border-bottom: 1px solid #000; width: 240px; margin: 0 auto 4px; height: 28px; }
      @media print { @page { size: A4; margin: 20mm 20mm 20mm 25mm; } body { margin: 0; } }
    </style>
  </head><body>
    <div class="doc-title">บันทึกข้อความ</div>
    <div class="doc-school">${schoolName}</div>
    <div class="fields">
      <div class="field"><span class="field-label">ที่&nbsp;&nbsp;</span><span class="field-val">&nbsp;</span></div>
      <div class="field"><span class="field-label">วันที่&nbsp;&nbsp;</span><span class="field-val">${dateTH}</span></div>
      <div class="field"><span class="field-label">เรื่อง&nbsp;&nbsp;</span><span class="field-val">รายงานความคืบหน้าการบันทึกข้อมูล${tabLabel} ภาคเรียนที่ ${cfg.semester??'—'} ปีการศึกษา ${cfg.academicYear??'—'}</span></div>
      <div class="field"><span class="field-label">เรียน&nbsp;&nbsp;</span><span class="field-val">ผู้อำนวยการโรงเรียน${schoolName}</span></div>
    </div>
    <hr style="border:none;border-top:1px solid #ccc;margin:12px 0"/>
    <p class="indent">ตามที่โรงเรียน${schoolName} ได้ใช้ระบบ ปพ.5 ออนไลน์ ในการบันทึกข้อมูล${tabLabel}ของนักเรียน
ภาคเรียนที่ ${cfg.semester??'—'} ปีการศึกษา ${cfg.academicYear??'—'} นั้น</p>
    <p class="indent">บัดนี้ ฝ่ายวิชาการได้ตรวจสอบสถานะการดำเนินงาน ณ วันที่ ${dateTH}
พบว่ายังมีครูที่ปรึกษาบางห้องที่ยังไม่ได้ดำเนินการกรอกข้อมูล ดังรายละเอียดต่อไปนี้</p>
    ${tableContent}
    <p class="indent">จึงเรียนมาเพื่อโปรดทราบ และขอให้ผู้เกี่ยวข้องเร่งดำเนินการกรอกข้อมูลให้แล้วเสร็จ
ภายในระยะเวลาที่กำหนด หากมีข้อสงสัยประการใดโปรดติดต่อฝ่ายวิชาการโดยตรง</p>
    <div class="sign-block">
      <p style="margin:0 0 4px">ลงชื่อ</p>
      <div class="sign-line"></div>
      <p style="margin:0">(....................................)</p>
      <p style="margin:4px 0 0">ตำแหน่ง .....................................</p>
      <p style="margin:4px 0 0">${dateTH}</p>
    </div>
    <div style="clear:both"></div>
  </body></html>`

  const blob = new Blob(['﻿' + html], { type: 'application/msword;charset=utf-8' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url
  a.download = `บันทึกข้อความ_${tabLabel}_${cfg.academicYear ?? new Date().getFullYear()+543}.doc`
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
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
    const [all, scheduleTeacherIds, paymentRequests, classes] = await Promise.all([
      getTeachers(),
      getScheduleTeacherIds(curYear, curSem).catch(()=>[]),
      getAllPaymentRequests().catch(()=>[]),
      getClasses().catch(()=>[]),
    ])
    const scheduledSet = new Set(scheduleTeacherIds)
    const approvedPayments = paymentRequests.filter(r => r.status === 'approved')
    const classCountByTeacher = new Map()
    classes.forEach(cls => {
      const teacherId = cls.master_subjects?.teacher_id
      if (teacherId) classCountByTeacher.set(teacherId, (classCountByTeacher.get(teacherId) ?? 0) + 1)
    })
    const packageInfo = (teacher) => {
      const quota = teacher.teachers_quota
      const used = classCountByTeacher.get(teacher.id) ?? quota?.total_classes_created ?? 0
      const teacherPayments = approvedPayments.filter(r => r.teachers?.id === teacher.id)
      const paidRoomCount = teacherPayments
        .filter(r => r.package_type === 'per_subject')
        .reduce((sum, r) => sum + (parseInt(r.room_count ?? 1) || 1), 0)
      const hasSemester = teacherPayments.some(r => r.package_type === 'semester') || quota?.package_type === 'semester'
      const legacyPaid = quota?.is_paid && !quota?.package_type && !hasSemester && !paidRoomCount
      const freeLimit = parseInt(cfg.freeClassQuota ?? 2)

      if (hasSemester || legacyPaid) {
        return {
          label: hasSemester ? 'เหมาทั้งเทอม' : 'แพ็กเกจเดิม',
          detail: `ใช้แล้ว ${used} ห้อง`,
          cls: 'bg-emerald-50 text-emerald-700 border-emerald-100',
        }
      }
      if (paidRoomCount > 0) {
        return {
          label: `รายห้อง ${paidRoomCount} ห้อง`,
          detail: `ใช้แล้ว ${used}/${freeLimit + paidRoomCount} ห้อง`,
          cls: 'bg-indigo-50 text-indigo-700 border-indigo-100',
        }
      }
      return {
        label: 'ยังไม่เลือก',
        detail: `ใช้โควตาฟรี ${used}/${freeLimit} ห้อง`,
        cls: used >= freeLimit ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-gray-50 text-gray-600 border-gray-100',
      }
    }
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

    setContent(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
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
                <th class="px-4 py-3 text-left hidden lg:table-cell">แพ็กเกจ / โควตา</th>
                <th class="px-4 py-3 text-center">สถานะบัญชี</th>
                <th class="px-4 py-3 text-right">จัดการ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${rows.map(t => {
                const initials = (t.full_name ?? '?').charAt(0).toUpperCase()
                const hasAcc   = !!t.profile_id
                const hasSchedule = scheduledSet.has(t.id)
                const pkg = packageInfo(t)
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
                  <td class="px-4 py-3 hidden lg:table-cell">
                    <span class="inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${pkg.cls}">
                      ${pkg.label}
                    </span>
                    <p class="text-[11px] text-gray-400 mt-1">${pkg.detail}</p>
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
    const houseColors = _opts(all.map(s => s.house_color))
    const shirtSizes = _opts(all.map(s => s.sports_shirt_size))

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
          <select id="sf-house" class="${SELECT_CLS}">
            <option value="">ทุกสี</option>
            ${houseColors.map(c=>`<option value="${c}">${c}</option>`).join('')}
          </select>
          <select id="sf-shirt" class="${SELECT_CLS}">
            <option value="">ทุกไซด์เสื้อ</option>
            ${shirtSizes.map(s=>`<option value="${s}">${s}</option>`).join('')}
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
            <th class="px-4 py-3 text-center hidden lg:table-cell">ประจำสี</th>
            <th class="px-4 py-3 text-center hidden lg:table-cell">ไซด์เสื้อ</th>
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
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${s.house_color ? `<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">${s.house_color}</span>` : '<span class="text-gray-300">—</span>'}
            </td>
            <td class="px-4 py-3 text-center text-xs hidden lg:table-cell">
              ${s.sports_shirt_size ? `<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">${s.sports_shirt_size}</span>` : '<span class="text-gray-300">—</span>'}
            </td>
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
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ประจำสี</label>
                  <input id="sf-house-color" type="text" value="${s.house_color??''}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ไซด์เสื้อกีฬาสี</label>
                  <input id="sf-shirt-size" type="text" value="${s.sports_shirt_size??''}" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
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
            house_color:   m.querySelector('#sf-house-color').value.trim() || null,
            sports_shirt_size: m.querySelector('#sf-shirt-size').value.trim() || null,
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
      const house = document.getElementById('sf-house').value
      const shirt = document.getElementById('sf-shirt').value
      const ps = document.getElementById('sf-page-size').value
      pageSize = ps === 'all' ? 'all' : Number(ps)
      _renderTable(all.filter(s =>
        (!q  || [s.full_name,s.student_code,s.main_room,s.religion_room].some(v=>(v??'').toLowerCase().includes(q))) &&
        (!gr || _grade(s.main_room) === gr) &&
        (!rm || _room(s.main_room)  === rm) &&
        (!gn || s.gender === gn) &&
        (!house || s.house_color === house) &&
        (!shirt || s.sports_shirt_size === shirt)
      ))
    }
    ['sf-q','sf-grade','sf-room','sf-gender','sf-house','sf-shirt','sf-page-size'].forEach(id => {
      document.getElementById(id)?.addEventListener('input',  _filter)
      document.getElementById(id)?.addEventListener('change', _filter)
    })

  } catch { showToast('โหลดข้อมูลนักเรียนไม่สำเร็จ', 'error') }
}

// ─── View: Settings ───────────────────────────────────────────────────────────
// ─── Phrases panel (admin จัดการประโยคสำเร็จรูปของหัวหน้า) ───────────────────
async function _renderPhrasesPanel() {
  const { getCommentPhrases, addCommentPhrase, updateCommentPhrase, deleteCommentPhrase } = await import('./api.js')
  const METRICS = [
    { key:'general',    label:'ทั่วไป' },
    { key:'profile',    label:'โปรไฟล์' },
    { key:'dates',      label:'วันสอน' },
    { key:'attendance', label:'เช็คชื่อ' },
    { key:'scores',     label:'คะแนน' },
  ]
  const catColor = {general:'#f3f4f6',profile:'#ede9fe',dates:'#dbeafe',attendance:'#d1fae5',scores:'#fef9c3'}
  const catText  = {general:'#374151',profile:'#5b21b6',dates:'#1e40af',attendance:'#065f46',scores:'#713f12'}

  const el = document.createElement('div')
  el.style.cssText = 'padding:4px 0;'

  async function reload() {
    const all = await getCommentPhrases().catch(() => [])
    el.innerHTML = `
      <div style="font-size:13px;color:#6b7280;margin-bottom:16px;">
        ประโยคเหล่านี้จะปรากฏเป็น chip ให้หัวหน้าคลิกเลือกตอนเขียนความคิดเห็น
      </div>
      ${METRICS.map(cat => {
        const phrases = all.filter(p => p.metric === cat.key)
        return `
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:13px;font-weight:700;background:${catColor[cat.key]};color:${catText[cat.key]};padding:3px 12px;border-radius:20px;">${cat.label}</span>
            <button class="ph-add-btn" data-metric="${cat.key}"
              style="font-size:12px;padding:4px 12px;border:1px dashed #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;cursor:pointer;font-family:inherit;">
              + เพิ่มประโยค
            </button>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${phrases.map(p => `
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#f9fafb;border-radius:8px;">
                <input class="ph-edit-inp" data-id="${p.id}" value="${p.phrase.replace(/"/g,'&quot;')}"
                  style="flex:1;border:none;background:transparent;font-size:13px;font-family:inherit;outline:none;"/>
                <button class="ph-save-btn" data-id="${p.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #059669;border-radius:6px;background:#d1fae5;color:#065f46;cursor:pointer;font-family:inherit;white-space:nowrap;">
                  บันทึก
                </button>
                <button class="ph-del-btn" data-id="${p.id}"
                  style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:6px;background:#fee2e2;color:#dc2626;cursor:pointer;font-family:inherit;">
                  ลบ
                </button>
              </div>`).join('')}
            ${!phrases.length ? `<div style="color:#9ca3af;font-size:12px;padding:4px 0;">ยังไม่มีประโยค</div>` : ''}
          </div>
        </div>`
      }).join('')}
    `
    // bind add
    el.querySelectorAll('.ph-add-btn').forEach(btn => {
      btn.onclick = async () => {
        const phrase = prompt('พิมพ์ประโยคใหม่:')
        if (!phrase?.trim()) return
        await addCommentPhrase(btn.dataset.metric, phrase.trim())
        reload()
      }
    })
    // bind save
    el.querySelectorAll('.ph-save-btn').forEach(btn => {
      btn.onclick = async () => {
        const inp = el.querySelector(`.ph-edit-inp[data-id="${btn.dataset.id}"]`)
        await updateCommentPhrase(parseInt(btn.dataset.id), inp.value.trim())
        btn.textContent = '✓'; setTimeout(() => btn.textContent = 'บันทึก', 1000)
      }
    })
    // bind delete
    el.querySelectorAll('.ph-del-btn').forEach(btn => {
      btn.onclick = async () => {
        if (!confirm('ลบประโยคนี้?')) return
        await deleteCommentPhrase(parseInt(btn.dataset.id))
        reload()
      }
    })
  }

  await reload()
  return el
}

export async function renderSettings() {
  setActiveNav('settings')
  document.getElementById('page-title').textContent = 'ตั้งค่าระบบ'

  setContent(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-center py-16 text-gray-400">
      <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div>
  </div>`)

  try {
    const [cfg, allDepts, allTeachers] = await Promise.all([
      getSystemConfig(),
      getDepartments().catch(() => []),
      getTeachers().catch(() => []),
    ])
    // รวม dept codes จาก departments table + teachers.dept + ที่รู้จักแน่นอน
    const KNOWN_DEPT_CODES = ['MATH','SC','ENG','THAI','SOC','ART','HALTH','OCC','VOC',
                              'ISL','ARB','BM','BML','MLB']
    const deptCodes = [...new Set([
      ...KNOWN_DEPT_CODES,
      ...allDepts.map(d => d.dept_code).filter(Boolean),
      ...allTeachers.map(t => t.dept).filter(Boolean),
    ])].sort()

    // ─── Field renderers ────────────────────────────────────────────────────────
    const COLOR_DEFAULTS = {
      appColor:'#007bff', loginColor:'#4f46e5', adminColor:'#4f46e5',
      teacherDefaultColor:'#059669', teacherLanguageColor:'#2563eb',
      teacherLifeColor:'#059669', teacherAcademicColor:'#ea580c',
      teacherVocColor:'#7c3aed', teacherReligionColor:'#b45309', studentColor:'#0891b2',
    }
    const INPUT = 'input-field w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200'

    const fld = ({ key, label, type, options, placeholder, hint, rows }) => {
      const val  = cfg[key] ?? ''
      const base = `id="cfg-${key}" data-key="${key}"`
      const wrap = (inner, h = '') =>
        `<div class="mb-5">
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">${label}</label>
          ${inner}
          ${h ? `<p class="text-[11px] text-gray-400 mt-1">${h}</p>` : ''}
        </div>`

      if (type === 'color') return wrap(`
        <div class="flex items-center gap-3">
          <input type="color" ${base} value="${val || COLOR_DEFAULTS[key] || '#007bff'}"
            class="w-11 h-11 rounded-xl border border-gray-200 cursor-pointer p-0.5 shadow-sm" />
          <span id="cfg-${key}-txt" class="text-sm font-mono text-gray-600">${val || COLOR_DEFAULTS[key] || '#007bff'}</span>
        </div>`, hint)

      if (type === 'date') return wrap(
        `<input type="date" ${base} value="${val}" class="${INPUT}" />`, hint)

      if (type === 'select') return wrap(`
        <select ${base} class="${INPUT} bg-white">
          ${(options ?? []).map(o => {
            const v = typeof o === 'object' ? o.value : o
            const t = typeof o === 'object' ? o.label : o
            return `<option value="${v}" ${v===val?'selected':''}>${t}</option>`
          }).join('')}
        </select>`, hint)

      if (type === 'textarea') return wrap(
        `<textarea ${base} rows="${rows ?? 3}" placeholder="${placeholder ?? ''}"
          class="${INPUT} resize-none">${val ?? ''}</textarea>`, hint)

      if (type === 'upload') return wrap(`
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
          ${val ? `<img src="${val}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />` : '<div class="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">🖼️</div>'}
          <label class="cursor-pointer flex-1">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300
                         text-xs font-semibold text-gray-600 bg-white hover:bg-gray-50 transition shadow-sm">
              📁 ${val ? 'เปลี่ยนรูป' : 'อัปโหลดรูป'}
            </span>
            <input type="file" accept="image/*" class="hidden cfg-upload-file" data-key="${key}" />
          </label>
          <input type="hidden" ${base} value="${val}" />
        </div>`, hint)

      if (type === 'toggle') {
        const on = val === 'true'
        return wrap(`
          <button type="button" ${base} data-on="${on}"
            onclick="this.dataset.on=this.dataset.on==='true'?'false':'true';this.className='cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner '+(this.dataset.on==='true'?'bg-emerald-500':'bg-gray-300');this.querySelector('span').style.transform=this.dataset.on==='true'?'translateX(28px)':'translateX(2px)'"
            class="cfg-toggle w-14 h-7 rounded-full transition-colors relative shadow-inner ${on ? 'bg-emerald-500' : 'bg-gray-300'}">
            <span class="absolute top-1.5 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style="transform:translateX(${on ? '28' : '2'}px)"></span>
          </button>`, hint)
      }

      if (type === 'password') return wrap(`
        <div class="flex gap-2">
          <input type="password" ${base} value="${val}" class="${INPUT} flex-1" placeholder="sk-..." autocomplete="off" />
          <button type="button" class="px-4 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
            onclick="const i=this.previousElementSibling;i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'">ดู</button>
        </div>
        <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`, hint)

      // default text
      return wrap(`<input type="text" ${base} value="${val ?? ''}" placeholder="${placeholder ?? ''}" class="${INPUT}" />`, hint)
    }

    // ─── Tab definitions ────────────────────────────────────────────────────────
    const TABS = [
      { id:'general',  icon:'⚙️',  label:'ทั่วไป' },
      { id:'theme',    icon:'🎨',  label:'ธีมสี' },
      { id:'school',   icon:'🏫',  label:'สถานศึกษา' },
      { id:'prayer',   icon:'🕌',  label:'ระบบละหมาด' },
      { id:'contact',  icon:'📞',  label:'ติดต่อ' },
      { id:'payment',  icon:'💳',  label:'ชำระเงิน' },
      { id:'package',  icon:'📦',  label:'แพ็กเกจ' },
      { id:'student',  icon:'👦',  label:'นักเรียน' },
      { id:'phrases',  icon:'💬',  label:'ประโยคสำเร็จรูป' },
      { id:'sync',     icon:'🔗',  label:'Google Sync' },
      { id:'template', icon:'📄',  label:'เทมเพลต ปพ.5' },
      { id:'schedule', icon:'🗓️', label:'ตารางสอน' },
    ]

    // ─── Panel content per tab ──────────────────────────────────────────────────
    const panelContent = tabId => {
      const section = (title, fields) =>
        `<div class="mb-6">
          ${title ? `<p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">${title}</p>` : ''}
          ${fields.map(fld).join('')}
        </div>`

      if (tabId === 'general') return [
        section('ปีการศึกษา', [
          { key:'semester',    label:'ภาคเรียนที่',   type:'select', options:['1','2'] },
          { key:'academicYear',label:'ปีการศึกษา (พ.ศ.)', type:'text', placeholder:'เช่น 2568' },
        ]),
        section('หน้าเข้าสู่ระบบ', [
          { key:'loginColor',  label:'สีพื้นหลัง Login',  type:'color' },
          { key:'loginLogoUrl',label:'โลโก้หน้า Login',   type:'upload' },
          { key:'appColor',    label:'สีหลักของระบบ',     type:'color' },
          { key:'studentLoginTitle',    label:'หัวข้อหลักหน้า Login นักเรียน', type:'text',
            placeholder:'เข้าสู่ระบบนักเรียน' },
          { key:'studentLoginSubtitle', label:'Subtitle หน้า Login นักเรียน', type:'text',
            placeholder:'เช่น โรงเรียนมูลนิธิอาซิซสถาน',
            hint:'ถ้าไม่กรอก ระบบจะใช้ชื่อโรงเรียนจากแท็บ สถานศึกษา แทน' },
        ]),
        section('เบ็ดเตล็ด', [
          { key:'developerCreditText', label:'ข้อความเครดิตผู้พัฒนา', type:'text', placeholder:'พัฒนาโดย...' },
        ]),
      ].join('')

      if (tabId === 'theme') return `
        <p class="text-xs text-gray-400 mb-5">สีของแต่ละบทบาทจะนำไปใช้กับ sidebar และ header โดยอัตโนมัติ</p>
        <div class="grid grid-cols-2 gap-x-8">
          ${[
            { key:'adminColor',           label:'แอดมิน' },
            { key:'teacherDefaultColor',  label:'ครูทั่วไป' },
            { key:'teacherLanguageColor', label:'ครูกลุ่มภาษา' },
            { key:'teacherLifeColor',     label:'ครูกลุ่มชีวิต' },
            { key:'teacherAcademicColor', label:'ครูกลุ่มวิชาการ' },
            { key:'teacherVocColor',      label:'ครูปวช/สามัญปวช' },
            { key:'teacherReligionColor', label:'ครูกลุ่มศาสนา' },
            { key:'studentColor',         label:'นักเรียน' },
          ].map(f => fld({ ...f, type:'color' })).join('')}
        </div>`

      if (tabId === 'school') {
        const schoolFields = (prefix, labels) => [
          { key:`${prefix}SchoolName`,          label:labels.name,       type:'text' },
          { key:`${prefix}SchoolAddress`,       label:'ที่ตั้ง (อำเภอ จังหวัด)', type:'text', placeholder:'อำเภอ... จังหวัด...' },
          { key:`${prefix}LogoUrl`,             label:'โลโก้สี',         type:'upload' },
          { key:`${prefix}LogoBwUrl`,           label:'โลโก้ขาวดำ',      type:'upload' },
          { key:`${prefix}DirectorName`,        label:'ผู้อำนวยการ',      type:'text' },
          { key:`${prefix}DirectorSignUrl`,     label:'ลายเซ็นผู้อำนวยการ', type:'upload' },
          { key:`${prefix}AcademicHeadName`,    label:'หัวหน้าวิชาการ',  type:'text' },
          { key:`${prefix}AcademicHeadSignUrl`, label:'ลายเซ็นหัวหน้าวิชาการ', type:'upload' },
          { key:`${prefix}RegistrarName`,       label:'หัวหน้าฝ่ายทะเบียน', type:'text' },
          { key:`${prefix}RegistrarSignUrl`,    label:'ลายเซ็นหัวหน้าฝ่ายทะเบียน', type:'upload' },
        ]
        return `
          <div class="flex gap-2 mb-5" id="school-subtabs">
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white" data-stab="samai">🏫 โรงเรียนสามัญ</button>
            <button class="school-stab px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" data-stab="porwor">🎓 วิทยาลัยปวช</button>
          </div>
          <div id="school-samai">${schoolFields('samai',{name:'ชื่อโรงเรียน'}).map(fld).join('')}</div>
          <div id="school-porwor" class="hidden">${schoolFields('porwor',{name:'ชื่อวิทยาลัย'}).map(fld).join('')}</div>`
      }

      if (tabId === 'prayer') return [
        section('ช่วงเวลาภาคเรียน', [
          { key:'semester_start', label:'วันเปิดภาคเรียน', type:'date', hint:'ใช้คำนวณสัปดาห์ปัจจุบันอัตโนมัติในระบบบันทึกละหมาด' },
          { key:'semester_end',   label:'วันปิดภาคเรียน',  type:'date' },
        ]),
      ].join('')

      if (tabId === 'contact') return [
        section('ช่องทางติดต่อ (แสดงในหน้าครูและนักเรียน)', [
          { key:'contactPhone',    label:'เบอร์โทรศัพท์',     type:'text', placeholder:'08x-xxx-xxxx' },
          { key:'contactLine',     label:'LINE OA / LINE ID',  type:'text', placeholder:'@lineid' },
          { key:'contactFacebook', label:'Facebook Page URL',  type:'text', placeholder:'https://fb.com/...' },
          { key:'contactEmail',    label:'อีเมลติดต่อ',        type:'text', placeholder:'admin@school.ac.th' },
          { key:'contactOther',    label:'ช่องทางอื่น',        type:'text', placeholder:'แสดงข้อความตรงๆ เช่น Line OA: ชื่อ' },
        ]),
      ].join('')

      if (tabId === 'payment') return [
        section('บัญชีรับโอน', [
          { key:'paymentBankName',    label:'ธนาคาร',      type:'text', placeholder:'ธนาคารกสิกรไทย' },
          { key:'paymentAccountName', label:'ชื่อบัญชี',   type:'text' },
          { key:'paymentAccountNo',   label:'เลขที่บัญชี', type:'text', placeholder:'xxx-x-xxxxx-x' },
          { key:'paymentPromptpay',   label:'เบอร์/เลข PromptPay', type:'text', placeholder:'08x-xxx-xxxx หรือ 1-xxxx-xxxxx-xx-x' },
        ]),
        section('QR และหมายเหตุ', [
          { key:'paymentQrUrl',  label:'QR Code PromptPay', type:'upload' },
          { key:'paymentNote',   label:'หมายเหตุ', type:'text', placeholder:'เช่น โอนในวันทำการ จ-ศ 08:00-16:00' },
        ]),
      ].join('')

      if (tabId === 'package') {
        // สร้าง sticker tier upload rows (PNG only)
        const stickerCount = 5
        const stickerUploads = Array.from({length: stickerCount}, (_, i) => {
          const n = i + 1
          const key = `donationStickerImg${n}`
          const val = cfg[key] ?? ''
          return `
          <div class="flex items-center gap-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-amber-200 flex items-center justify-center overflow-hidden">
              ${val ? `<img src="${val}" class="w-full h-full object-contain" id="sticker-prev-${n}" />` : `<span id="sticker-prev-${n}" class="text-2xl text-gray-300">🏅</span>`}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-amber-900 mb-1">สติกเกอร์ระดับ ${n}</p>
              <label class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-sm">
                📁 อัปโหลด PNG
                <input type="file" accept="image/png" class="hidden pkg-sticker-upload" data-skey="${key}" data-n="${n}" />
              </label>
              ${val ? `<button type="button" class="ml-2 text-xs text-red-400 hover:text-red-600 pkg-sticker-clear" data-skey="${key}" data-n="${n}">ลบ</button>` : ''}
              <p class="text-[10px] text-amber-500 mt-1">บังคับไฟล์ PNG เท่านั้น — URL นี้สามารถนำไปใส่ในคอลัมน์สติกเกอร์ด้านล่างได้</p>
              <input type="hidden" id="cfg-${key}" value="${val}" />
              ${val ? `<p class="text-[10px] text-gray-400 mt-0.5 break-all font-mono">${val}</p>` : ''}
            </div>
          </div>`
        }).join('')

        const pkgSubtabs = [
          { id:'quota',    label:'🏆 โควตา / โหมด' },
          { id:'donation', label:'🎁 Donation' },
          { id:'popup',    label:'💬 ข้อความ Popup' },
          { id:'legacy',   label:'🔧 โหมดเดิม' },
        ]

        const pkgPanels = {
          quota: [
            section('การแจ้งเตือนก่อนเข้าสอน', [
              { key:'notifyBeforeMinutes', label:'แจ้งเตือนก่อนเข้าสอนกี่นาที', type:'text', placeholder:'10',
                hint:'ระบบจะแจ้งเตือน browser ก่อนถึงเวลาสอนตามจำนวนนาทีที่กำหนด (ต้องเชื่อมโยงตารางสอนก่อน)' },
            ]),
            section('โหมดระบบโควตา', [
              { key:'quotaMode', label:'โหมดเมื่อครูครบโควตา', type:'select',
                options:[
                  { value:'payment',          label:'โหมดเดิม — ซื้อแพ็กเกจ (รายห้อง / เหมาเทอม)' },
                  { value:'school_sponsored', label:'โหมดใหม่ — โรงเรียนสนับสนุน + เชิญโดเนท' },
                ],
                hint:'เลือกพฤติกรรมของระบบเมื่อครูใช้งานครบโควตาฟรี' },
              { key:'freeClassQuota', label:'โควตาห้องฟรี (ห้อง)', type:'text', placeholder:'3' },
            ]),
          ].join(''),

          donation: [
            section('การแสดงผล', [
              { key:'donationPromoEnabled', label:'แสดง Popup โปรโมตสิทธิ์ผู้สนับสนุน', type:'toggle',
                hint:'เปิด = ครูที่ยังไม่โดเนทจะเห็น popup โปรโมตอัตโนมัติ (suppressed 14 วัน)' },
            ]),
            section('ยอดและปุ่มลัด', [
              { key:'donationMinAmount',  label:'ยอดโดเนทขั้นต่ำ (บาท)', type:'text', placeholder:'99',
                hint:'ครูต้องระบุยอดอย่างน้อยเท่านี้จึงสร้าง QR Code ได้' },
              { key:'donationAmountStep', label:'ช่วงเพิ่มราคาปุ่มลัด (บาท)', type:'text', placeholder:'50',
                hint:'เช่น 50 = ปุ่มลัดจะแสดง 99, 149, 199, 249 เมื่อขั้นต่ำเป็น 99' },
              { key:'donationQuickCount', label:'จำนวนปุ่มราคาลัด', type:'text', placeholder:'4',
                hint:'แนะนำ 4 ปุ่ม เพื่อให้พอดีกับหน้าจอมือถือ' },
            ]),
            section('การ์ดขอบคุณ', [
              { key:'donationThankYouCard', label:'ข้อความในการ์ดขอบคุณ', type:'textarea', rows:6,
                placeholder:'❤️ ขอบคุณจากใจครับคุณครู\n\nคุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์...',
                hint:'เว้นว่างไว้เพื่อใช้ข้อความ default — ระบบจะต่อท้ายด้วยรายการฟีเจอร์พิเศษโดยอัตโนมัติ' },
            ]),
            `<div class="mb-6 space-y-2">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest pb-2 border-b border-gray-100">ดูตัวอย่างการ์ดขอบคุณ</p>
              <p class="text-xs text-gray-400 mb-2">เลือกระดับที่ต้องการดูตัวอย่าง ระบบจะอ่านค่าปัจจุบันใน form</p>
              <div class="grid grid-cols-2 gap-2" id="tier-preview-btns">
                ${[1,2,3,4,5].map(n => `
                <button type="button" class="tier-preview-btn py-2 px-3 rounded-xl border-2 border-amber-200 text-amber-700 text-xs font-semibold hover:bg-amber-50 transition flex items-center justify-center gap-1.5" data-tier="${n}">
                  👁️ ระดับ ${n}
                </button>`).join('')}
              </div>
            </div>`,
            (() => {
              // parse existing features from cfg
              const rawFeat = String(cfg.donationSpecialFeatures ?? '').trim()
              const featDefs = [
                ['🌱','สติกเกอร์/ตราประจำระดับผู้สนับสนุน',1],
                ['📣','ประกาศในห้องเรียนสำหรับนักเรียน',1],
                ['✍️','ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว',1],
                ['📊','Dashboard วิเคราะห์ภาพรวมห้องเรียน',2],
                ['🤖','AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง',2],
                ['🧭','AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา',3],
                ['⚡','Early Access ฟีเจอร์ใหม่ก่อนใคร',3],
                ['📲','แจ้งเตือนอัตโนมัติ Telegram/LINE',4],
              ]
              const featRows = rawFeat
                ? rawFeat.split('\n').filter(Boolean).map(l => {
                    const p = l.split('|').map(s=>s.trim())
                    return { icon: p[0]||'✨', text: p[1]||'', minTier: parseInt(p[2])||1 }
                  })
                : featDefs.map(([icon,text,minTier])=>({icon,text,minTier}))

              const TIER_HEX = ['#22C55E','#A855F7','#F59E0B','#3B82F6','#D4A017']

              // ใช้ inline style แทน Tailwind dynamic class เพื่อหลีกเลี่ยง CDN scan issue
              const tierBtnStyle = (n, selected) => selected
                ? `border:2px solid ${TIER_HEX[n-1]};color:${TIER_HEX[n-1]};background:#fff;font-weight:700`
                : 'border:2px solid #e5e7eb;color:#d1d5db;background:#fff'

              const rowHtml = (f, i) => `
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${i}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${f.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${f.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(n => `
                    <label class="cursor-pointer" title="ระดับ ${n}">
                      <input type="radio" name="feat-tier-${i}" class="sr-only feat-tier-radio" value="${n}" ${f.minTier===n?'checked':''} />
                      <span class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                        style="${tierBtnStyle(n, f.minTier===n)}" data-n="${n}">
                        ${n}
                      </span>
                    </label>`).join('')}
                  </div>
                  <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>
                </div>`

              return `
              <div class="mb-6">
                <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ฟีเจอร์พิเศษสำหรับผู้โดเนท</p>
                <p class="text-xs text-gray-400 mb-3">กำหนดว่าแต่ละฟีเจอร์ต้องเป็นระดับอะไรขึ้นไปถึงจะปลดล็อก — ระดับ 1 = ทุกคนที่โดเนทได้เลย</p>
                <div id="feat-editor" class="space-y-2 mb-3">
                  ${featRows.map((f,i) => rowHtml(f,i)).join('')}
                </div>
                <button type="button" id="feat-add"
                  class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
                  + เพิ่มฟีเจอร์
                </button>
                <!-- hidden input ที่ save handler จะอ่าน -->
                <input type="hidden" data-key="donationSpecialFeatures" id="cfg-donationSpecialFeatures"
                  value="${(cfg.donationSpecialFeatures ?? '').replace(/"/g,'&quot;')}" />
              </div>`
            })(),
            section('Gemini API Keys สำหรับฟีเจอร์ผู้สนับสนุน', [
              { key:'donationGeminiKey1', label:'API Key หลัก (ลำดับ 1)', type:'password',
                placeholder:'AIza...', hint:'ระบบจะใช้ key นี้ก่อน ถ้าหมด quota หรือ error จะข้ามไป key ถัดไปอัตโนมัติ' },
              { key:'donationGeminiKey2', label:'API Key สำรอง (ลำดับ 2)', type:'password', placeholder:'AIza...' },
              { key:'donationGeminiKey3', label:'API Key สำรอง (ลำดับ 3)', type:'password', placeholder:'AIza...' },
              { key:'donationGeminiKey4', label:'API Key สำรอง (ลำดับ 4)', type:'password', placeholder:'AIza...' },
              { key:'donationGeminiModel', label:'Gemini Model', type:'text',
                placeholder:'gemini-2.5-flash', hint:'เว้นว่างเพื่อใช้ gemini-2.5-flash (แนะนำ)' },
            ]),
            `<div class="mb-6">
              <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">อัปโหลดรูปสติกเกอร์ (PNG เท่านั้น)</p>
              <div class="space-y-3">${stickerUploads}</div>
            </div>`,
            section('ระดับตรา/สติกเกอร์ผู้สนับสนุน', [
              { key:'donationStickerTiers', label:'ตั้งค่าระดับ (textarea)', type:'textarea', rows:6,
                placeholder:'99|☕|ผู้สนับสนุนเริ่มต้น|ขอบคุณที่ช่วยเติมแรงพัฒนาระบบ\n149|🌱|ผู้สนับสนุนอบอุ่น|ช่วยให้ระบบเติบโตต่อได้เรื่อยๆ\n199|⭐|ผู้สนับสนุนพิเศษ|สนับสนุนการทำฟีเจอร์ใหม่ๆ\n249|💎|ผู้สนับสนุนใจดีมาก|เป็นแรงหนุนสำคัญของระบบนี้',
                hint:'รูปแบบ: ยอดขั้นต่ำ|สติกเกอร์หรือ URL รูป|ชื่อระดับ|คำอธิบาย|#สีขอบ เช่น #f59e0b — สีขอบจะเรืองแสงบนการ์ดครูตามสีที่กำหนด' },
            ]),
          ].join(''),

          popup: [
            section('ข้อความใน Popup โหมดใหม่', [
              { key:'sponsoredHeaderTitle', label:'หัวข้อหลัก', type:'text', placeholder:'ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ' },
              { key:'sponsoredBoxTitle',    label:'หัวข้อกล่องสีเขียว', type:'text', placeholder:'🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว' },
              { key:'sponsoredBoxBody',     label:'ข้อความในกล่องสีเขียว', type:'textarea', rows:3,
                placeholder:'ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา...' },
              { key:'sponsoredDonateBtn',   label:'ข้อความปุ่มโดเนท (หลัก)', type:'text', placeholder:'☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว' },
              { key:'sponsoredDonateSub',   label:'ข้อความปุ่มโดเนท (รอง)',  type:'text', placeholder:'ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง' },
              { key:'sponsoredAccessBtn',   label:'ข้อความปุ่มรับสิทธิ์',   type:'text', placeholder:'✨ รับของขวัญจากโรงเรียนเลย' },
              { key:'sponsoredFooter',      label:'ข้อความด้านล่าง',        type:'text',
                placeholder:'ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏' },
            ]),
          ].join(''),

          legacy: [
            section('โควตาและราคา (โหมดเดิม)', [
              { key:'pricePerClass',  label:'ราคาเพิ่มรายห้อง (บาท)',    type:'text', placeholder:'49' },
              { key:'priceSemester',  label:'ราคาแพ็กเกจเหมาทั้งเทอม (บาท)', type:'text', placeholder:'299' },
            ]),
            section('คำอธิบายแพ็กเกจ (แสดงในหน้าซื้อของครู)', [
              { key:'pkgPerClassDesc',  label:'คำอธิบายรายห้อง',       type:'text', placeholder:'เพิ่มห้องเรียนได้ 1 ห้อง' },
              { key:'pkgSemesterDesc',  label:'คำอธิบายเหมาทั้งเทอม', type:'text', placeholder:'ไม่จำกัดห้องตลอดภาคเรียน' },
            ]),
          ].join(''),
        }

        const firstPkg = 'quota'
        return `
          <div class="flex gap-2 mb-5 flex-wrap" id="pkg-subtabs">
            ${pkgSubtabs.map(t => `
            <button class="pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition
              ${t.id === firstPkg ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}"
              data-pstab="${t.id}">${t.label}</button>`).join('')}
          </div>
          ${pkgSubtabs.map(t => `
          <div id="pkg-panel-${t.id}" ${t.id !== firstPkg ? 'class="hidden"' : ''}>
            ${pkgPanels[t.id] ?? ''}
          </div>`).join('')}`
      }

      if (tabId === 'student') return [
        section('การแสดงข้อมูลในหน้าจัดการนักเรียนของครู', [
          { key:'showStudentHouseColor', label:'แสดงคอลัมน์ประจำสี', type:'toggle' },
          { key:'showStudentSportsShirtSize', label:'แสดงคอลัมน์ไซด์เสื้อกีฬาสี', type:'toggle' },
        ]),
        section('ซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet', [
          { key:'studentSyncSheetId', label:'Google Sheet ID / URL แหล่งข้อมูลนักเรียน', type:'text', placeholder:'วาง ID หรือ URL ของ Google Sheet' },
          { key:'studentSyncTabName', label:'ชื่อแท็บข้อมูลนักเรียน', type:'text', placeholder:'เช่น students หรือ ชื่อนักเรียน' },
          { key:'studentSyncHeaderRow', label:'แถวหัวตาราง', type:'text', placeholder:'1' },
        ]),
        `<div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <p class="text-sm font-semibold text-emerald-900">ซิงก์รายสัปดาห์</p>
              <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
                ปุ่มนี้ใช้ทดสอบซิงก์ทันที ส่วนรันอัตโนมัติรายสัปดาห์ให้ตั้ง trigger ใน Apps Script ที่ฟังก์ชัน <span class="font-mono">runWeeklyStudentSync</span>
              </p>
            </div>
            <button id="btn-download-student-sync-template" type="button"
              class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50 shadow-sm whitespace-nowrap">
              ⬇️ ดาวน์โหลดเท็มเพลท
            </button>
          </div>
          <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
            นำไฟล์เท็มเพลทไปเปิดด้วย Google Sheets แล้วใช้ชีทนั้นเป็นแหล่งซิงก์ได้เลย
          </p>
          <button id="btn-sync-students-now" type="button"
            class="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm">
            🔄 ซิงก์นักเรียนตอนนี้
          </button>
        </div>`,
      ].join('')

      if (tabId === 'sync') {
        const cellFields = [
          ['classInfoSubjectNameCell', 'ชื่อรายวิชา'], ['classInfoSubjectCodeCell','รหัสวิชา'],
          ['classInfoCreditCell','หน่วยกิต'],          ['classInfoGradeCell','ชั้นเรียน'],
          ['classInfoHeadStudentCell','หัวหน้าห้อง'],  ['classInfoDay1Cell','วันสอนคาบ 1'],
          ['classInfoDay2Cell','วันสอนคาบ 2'],         ['classInfoDay3Cell','วันสอนคาบ 3'],
          ['classInfoDay4Cell','วันสอนคาบ 4'],         ['classInfoDay5Cell','วันสอนคาบ 5'],
          ['classInfoDay6Cell','วันสอนคาบ 6'],         ['classInfoTeacherNameCell','ครูผู้สอน'],
          ['classInfoTeacherPhoneCell','เบอร์ติดต่อ'], ['classInfoDeptCell','กลุ่มสาระ'],
          ['classInfoHeadDeptCell','หัวหน้าหมวด'],
        ]
        return `
          ${fld({ key:'centralGasUrl', label:'Central GAS URL', type:'text',
            placeholder:'https://script.google.com/macros/s/...',
            hint:'Deploy ครั้งเดียว ใช้ร่วมกันทุก Sync ในระบบ' })}
          ${fld({ key:'classInfoTab', label:'ชื่อแท็บข้อมูลรายวิชาในชีทครู', type:'text', placeholder:'ข้อมูลรายวิชา' })}
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">ตำแหน่ง Cell ข้อมูลในชีทครู</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${cellFields.map(([key, label]) => {
              const val = cfg[key] ?? ''
              return `<div class="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p class="text-[10px] font-semibold text-gray-500 mb-1.5">${label}</p>
                <input type="text" id="cfg-${key}" data-key="${key}" value="${val}"
                  placeholder="A1" class="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-center font-mono focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white" />
              </div>`
            }).join('')}
          </div>`
      }

      if (tabId === 'template') return `
        <p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${COPY_TEMPLATE_CONFIG.map(t => fld({
          key: t.key,
          label: `${t.category} — ${t.label}`,
          type: 'text',
          placeholder: t.defaultId,
          hint: `default: ${t.defaultId}`,
        })).join('')}`

      if (tabId === 'phrases') return _renderPhrasesPanel()

      if (tabId === 'schedule') return [
        section('การแสดงผลตาราง', [
          { key:'hasFriday', label:'เปิดสอนวันศุกร์', type:'toggle',
            hint:'เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู' },
        ]),
        section('AI วิเคราะห์ตาราง (Gemini)', [
          { key:'scheduleVisionEnabled', label:'เปิดฟีเจอร์วิเคราะห์รูปตาราง', type:'toggle' },
          { key:'geminiApiKey',   label:'Gemini API Key (กลาง / fallback)',  type:'password',
            hint:'ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง' },
          { key:'geminiModel',    label:'Gemini Model',    type:'text', placeholder:'gemini-1.5-flash' },
        ]),
        section('Gemini API Key แยกต่อกลุ่มสาระ', deptCodes.length
          ? deptCodes.map(code => ({
              key:  `geminiKey_${code}`,
              label: `Key กลุ่มสาระ ${code}`,
              type: 'password',
              hint: `ครูที่มี dept = ${code} จะใช้ key นี้โดยอัตโนมัติ`,
            }))
          : [{ key:'geminiKey_MATH', label:'Key กลุ่มสาระ MATH (ตัวอย่าง)', type:'password' }]
        ),
      ].join('')

      return ''
    }

    // ─── Render shell ────────────────────────────────────────────────────────────
    let activeTab = 'general'

    setContent(`<div class="max-w-4xl mx-auto animate-fade">
      <!-- Tab bar -->
      <div class="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide" id="cfg-tabbar">
        ${TABS.map(t => `
          <button class="cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap
            ${t.id === activeTab ? 'bg-indigo-600 text-white shadow' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}"
            data-tab="${t.id}">
            <span>${t.icon}</span><span class="hidden sm:inline">${t.label}</span>
          </button>`).join('')}
      </div>
      <!-- Panel -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8" id="cfg-panel">
        <div id="cfg-panel-inner"></div>
        <div class="border-t border-gray-100 pt-5 mt-6 flex items-center justify-between">
          <p class="text-xs text-gray-400" id="cfg-save-hint"></p>
          <button id="cfg-save-btn" class="btn-primary px-8 py-2.5 text-white text-sm font-semibold rounded-xl shadow">
            บันทึก
          </button>
        </div>
      </div>
    </div>`)

    // ─── Tab switcher ────────────────────────────────────────────────────────────
    const renderTab = (tabId) => {
      activeTab = tabId
      document.querySelectorAll('.cfg-tab').forEach(btn => {
        const on = btn.dataset.tab === tabId
        btn.className = `cfg-tab flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${on ? 'bg-indigo-600 text-white shadow' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`
      })
      const content = panelContent(tabId)
      const inner = document.getElementById('cfg-panel-inner')
      if (content instanceof Promise) {
        inner.innerHTML = '<div style="padding:24px;text-align:center;color:#9ca3af;">⏳ กำลังโหลด...</div>'
        content.then(el => { inner.innerHTML = ''; if (el instanceof Element) inner.appendChild(el); else inner.innerHTML = el ?? '' })
      } else if (content instanceof Element) {
        inner.innerHTML = ''; inner.appendChild(content)
      } else {
        inner.innerHTML = content ?? ''
      }
      document.getElementById('cfg-save-hint').textContent = ''

      // color preview sync
      document.querySelectorAll('#cfg-panel-inner input[type=color]').forEach(inp => {
        inp.addEventListener('input', () => {
          const txt = document.getElementById(`${inp.id}-txt`)
          if (txt) txt.textContent = inp.value
        })
      })

      // ── feature editor ────────────────────────────────────────────────────────
      const _syncFeatHidden = () => {
        const rows = [...document.querySelectorAll('#feat-editor .feat-row')]
        const val = rows.map(row => {
          const icon     = row.querySelector('.feat-icon')?.value.trim() || '✨'
          const text     = row.querySelector('.feat-text')?.value.trim() || ''
          const tierRadio = row.querySelector('.feat-tier-radio:checked')
          const minTier  = tierRadio ? tierRadio.value : '1'
          return text ? `${icon}|${text}|${minTier}` : null
        }).filter(Boolean).join('\n')
        const hidden = document.getElementById('cfg-donationSpecialFeatures')
        if (hidden) hidden.value = val
      }

      const FEAT_TIER_HEX = ['#22C55E','#A855F7','#F59E0B','#3B82F6','#D4A017']
      const _attachFeatRowEvents = (row) => {
        // radio tier — ใช้ inline style แทน className เพื่อหลีกเลี่ยง layout พัง
        row.querySelectorAll('.feat-tier-radio').forEach(radio => {
          radio.addEventListener('change', () => {
            const selected = parseInt(radio.value)
            row.querySelectorAll('.feat-tier-btn').forEach(span => {
              const n = parseInt(span.dataset.n)
              span.style.cssText = n === selected
                ? `border:2px solid ${FEAT_TIER_HEX[n-1]};color:${FEAT_TIER_HEX[n-1]};background:#fff;font-weight:700`
                : 'border:2px solid #e5e7eb;color:#d1d5db;background:#fff'
            })
            _syncFeatHidden()
          })
        })
        row.querySelector('.feat-icon')?.addEventListener('input', _syncFeatHidden)
        row.querySelector('.feat-text')?.addEventListener('input', _syncFeatHidden)
        row.querySelector('.feat-del')?.addEventListener('click', () => {
          row.remove(); _syncFeatHidden()
        })
      }

      document.querySelectorAll('#feat-editor .feat-row').forEach(_attachFeatRowEvents)

      document.getElementById('feat-add')?.addEventListener('click', () => {
        const editor = document.getElementById('feat-editor')
        if (!editor) return
        const idx = editor.children.length
        const div = document.createElement('div')
        div.className = 'feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl'
        div.dataset.idx = idx
        div.innerHTML = `
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(n => `
            <label class="cursor-pointer" title="ระดับ ${n}">
              <input type="radio" name="feat-tier-${idx}" class="sr-only feat-tier-radio" value="${n}" ${n===1?'checked':''} />
              <span class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                style="${n===1?`border:2px solid ${FEAT_TIER_HEX[0]};color:${FEAT_TIER_HEX[0]};background:#fff;font-weight:700`:'border:2px solid #e5e7eb;color:#d1d5db;background:#fff'}"
                data-n="${n}">
                ${n}
              </span>
            </label>`).join('')}
          </div>
          <button type="button" class="feat-del text-red-300 hover:text-red-500 text-lg flex-shrink-0" title="ลบ">✕</button>`
        editor.appendChild(div)
        _attachFeatRowEvents(div)
        div.querySelector('.feat-text')?.focus()
      })

      // package sub-tabs
      document.querySelectorAll('.pkg-stab').forEach(btn => {
        btn.addEventListener('click', () => {
          const t = btn.dataset.pstab
          document.querySelectorAll('.pkg-stab').forEach(b => {
            b.className = `pkg-stab px-4 py-2 rounded-xl text-sm font-semibold transition ${b.dataset.pstab === t ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`
          })
          document.querySelectorAll('[id^="pkg-panel-"]').forEach(p => p.classList.add('hidden'))
          document.getElementById(`pkg-panel-${t}`)?.classList.remove('hidden')
        })
      })

      // sticker PNG upload
      document.querySelectorAll('.pkg-sticker-upload').forEach(fi => {
        fi.addEventListener('change', async e => {
          const file = e.target.files[0]; if (!file) return
          if (file.type !== 'image/png') { showToast('กรุณาเลือกไฟล์ PNG เท่านั้น', 'error'); fi.value = ''; return }
          const key = fi.dataset.skey
          const n   = fi.dataset.n
          fi.disabled = true
          try {
            const url = await uploadStickerPng(key, file)
            const hidden = document.getElementById(`cfg-${key}`)
            if (hidden) hidden.value = url
            await updateSystemConfig(key, url)
            // update preview
            const prev = document.getElementById(`sticker-prev-${n}`)
            if (prev) {
              const img = document.createElement('img')
              img.src = url; img.className = 'w-full h-full object-contain'
              prev.replaceWith(img); img.id = `sticker-prev-${n}`
            }
            showToast(`อัปโหลดสติกเกอร์ ${n} สำเร็จ ✅`, 'success')
          } catch (err) {
            showToast('อัปโหลดไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          } finally { fi.disabled = false }
        })
      })

      // ── helper: parse tiers จาก cfg ──────────────────────────────────────────
      const _adminParseTiers = (pcfg) => {
        const raw = String(pcfg.donationStickerTiers ?? '').trim()
        const minA = parseInt(pcfg.donationMinAmount ?? 99) || 99
        const step = parseInt(pcfg.donationAmountStep ?? 50) || 50
        const defs = [
          [49,  '🌱','ครูผู้จุดประกาย',     'คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝', '#22C55E'],
          [99,  '☕','ครูผู้ร่วมฝัน',       'คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭',       '#A855F7'],
          [149, '🏅','ครูผู้ร่วมสร้าง',     'คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱','#F59E0B'],
          [199, '🐘','ครูผู้ร่วมขับเคลื่อน','คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊', '#3B82F6'],
          [249, '👑','ครูผู้ก่อตั้งร่วม',   'คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️','#D4A017'],
        ]
        const rows = raw
          ? raw.split('\n').filter(Boolean).map(l => {
              const [a,s,t,n,c] = l.split('|').map(x=>x.trim())
              return { amount:parseInt(a)||0, sticker:s||'🏅', title:t||'', note:n||'', color:c||'' }
            }).filter(t=>t.amount>0)
          : defs.map(([a,s,t,n,c])=>({amount:a,sticker:s,title:t,note:n,color:c}))
        return rows.sort((a,b)=>a.amount-b.amount).map((t,i)=>{
          const imgUrl = (pcfg[`donationStickerImg${i+1}`]??'').trim()
          return (imgUrl && /^https?:\/\//.test(imgUrl)) ? {...t, sticker:imgUrl} : t
        })
      }

      const _adminParseFeatures = (pcfg) => {
        const raw = String(pcfg.donationSpecialFeatures ?? '').trim()
        const defs = [
          ['🏅','สติกเกอร์/ตราประจำระดับผู้สนับสนุน',1],
          ['📣','ประกาศในห้องเรียนสำหรับนักเรียน',1],
          ['✍️','ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว',1],
          ['📊','Dashboard วิเคราะห์ภาพรวมห้องเรียน',2],
          ['🤖','AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง',2],
          ['🧭','AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา',3],
          ['⚡','Early Access ฟีเจอร์ใหม่ก่อนใคร',3],
          ['📲','แจ้งเตือนอัตโนมัติ Telegram/LINE',4],
        ]
        if (!raw) return defs.map(([icon,text,minTier])=>({icon,text,minTier}))
        return raw.split('\n').filter(Boolean).map(l=>{
          const p = l.split('|').map(s=>s.trim())
          return {icon:p[0]||'✨', text:p[1]||p[0]||l, minTier:parseInt(p[2])||1}
        }).filter(f=>f.text)
      }

      const _showTierPreview = (tier, features, thankText, tierN = 4) => {
        document.getElementById('tier-preview-modal')?.remove()
        const hex = tier.color || '#f59e0b'
        const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16)
        const s = String(tier.sticker ?? '')
        const stickerEl = /^https?:\/\//.test(s)
          ? `<img src="${s}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`
          : `<div class="text-6xl text-center mb-2">${s}</div>`
        const pop = document.createElement('div')
        pop.id = 'tier-preview-modal'
        pop.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'
        pop.innerHTML = `
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden max-h-[92vh] flex flex-col">
            <div class="px-6 py-6 text-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(${r},${g},${b},0.85),rgba(${r},${g},${b},1))">
              ${stickerEl}
              <div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">${tier.title}</div>
              <h2 class="text-white font-bold text-lg">ขอบคุณครับ! 🙏</h2>
              <p class="text-white/80 text-xs mt-0.5">ตัวอย่างสำหรับผู้โดเนท ${tier.amount} บาทขึ้นไป</p>
            </div>
            <div class="px-5 py-4 overflow-y-auto flex-1 space-y-3">
              <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
                ${thankText}
              </div>
              <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษที่คุณครูได้รับ</p>
                <div class="space-y-1.5">
                  ${features.map(f => {
                    const unlocked = tierN >= (f.minTier ?? 1)
                    return unlocked
                      ? `<div class="flex items-start gap-2 text-sm text-emerald-900"><span class="flex-shrink-0">${f.icon}</span><span>${f.text}</span></div>`
                      : `<div class="flex items-start gap-2 text-sm text-gray-300"><span class="flex-shrink-0">🔒</span><span class="line-through">${f.text}</span><span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${f.minTier}+</span></div>`
                  }).join('')}
                </div>
              </div>
              ${tier.note ? `<p class="text-xs text-center text-gray-400 italic">"${tier.note}"</p>` : ''}
              <p class="text-[10px] text-gray-400 text-center leading-relaxed">
                ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
                คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
              </p>
            </div>
            <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
              <p class="text-[10px] text-center text-amber-500 mb-2 font-semibold">🔧 โหมดตัวอย่าง (Admin)</p>
              <button class="w-full py-2.5 rounded-2xl text-white font-bold text-sm"
                style="background:rgba(${r},${g},${b},1)"
                onclick="document.getElementById('tier-preview-modal')?.remove()">
                ปิดตัวอย่าง
              </button>
            </div>
          </div>`
        document.body.appendChild(pop)
        pop.addEventListener('click', e => { if (e.target === pop) pop.remove() })
      }

      // preview thank you card — per tier
      document.querySelectorAll('.tier-preview-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const tierN = parseInt(btn.dataset.tier)
          const previewCfg = {}
          document.querySelectorAll('#cfg-panel-inner [id^="cfg-"]').forEach(el => {
            const k = el.id.replace(/^cfg-/, '')
            previewCfg[k] = el.value ?? el.dataset.on
          })
          const tiers    = _adminParseTiers(previewCfg)
          const features = _adminParseFeatures(previewCfg)
          const tier     = tiers[tierN - 1] ?? tiers[0]
          if (!tier) { showToast('ยังไม่มีข้อมูล tier', 'warning'); return }
          const thankText = (previewCfg.donationThankYouCard ?? '').trim()
            || `❤️ ขอบคุณจากใจครับคุณครู\n\nคุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ\nที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์\nมากกว่าแค่ "เครื่องมือใช้งาน" 📝\n\nและในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`
          _showTierPreview(tier, features, thankText, tierN)
        })
      })

      // sticker clear
      document.querySelectorAll('.pkg-sticker-clear').forEach(btn => {
        btn.addEventListener('click', async () => {
          const key = btn.dataset.skey
          const n   = btn.dataset.n
          await updateSystemConfig(key, '').catch(() => {})
          const hidden = document.getElementById(`cfg-${key}`)
          if (hidden) hidden.value = ''
          const prev = document.getElementById(`sticker-prev-${n}`)
          if (prev) { prev.outerHTML = `<span id="sticker-prev-${n}" class="text-2xl text-gray-300">🏅</span>` }
          btn.remove()
          showToast('ลบสติกเกอร์แล้ว', 'success')
        })
      })

      // school sub-tabs
      document.querySelectorAll('.school-stab').forEach(btn => {
        btn.addEventListener('click', () => {
          const stab = btn.dataset.stab
          document.querySelectorAll('.school-stab').forEach(b => {
            b.className = `school-stab px-5 py-2 rounded-xl text-sm font-semibold ${b.dataset.stab===stab ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`
          })
          document.getElementById('school-samai').classList.toggle('hidden', stab !== 'samai')
          document.getElementById('school-porwor').classList.toggle('hidden', stab !== 'porwor')
        })
      })

      const syncStudentsBtn = document.getElementById('btn-sync-students-now')
      const downloadStudentTemplateBtn = document.getElementById('btn-download-student-sync-template')
      if (downloadStudentTemplateBtn) {
        downloadStudentTemplateBtn.addEventListener('click', () => {
          const rows = [
            ['รหัสนักเรียน', 'ชื่อ-สกุล', 'ห้องสามัญ', 'ห้องศาสนา', 'เพศ', 'รูปภาพ', 'ประจำสี', 'ไซด์เสื้อกีฬาสี'],
            ['24166', 'นายตัวอย่าง นักเรียน', 'ม.5/2 Delima', "อป.1/9 An-Nasa'i", 'ชาย', 'https://example.com/student-photo.jpg', 'เขียว', 'L'],
          ]
          const csv = '\uFEFF' + rows
            .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
            .join('\n')
          const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'pp5-students-sync-template.csv'
          document.body.appendChild(a)
          a.click()
          a.remove()
          URL.revokeObjectURL(url)
          showToast('ดาวน์โหลดเท็มเพลทแล้ว ✅', 'success')
        })
      }
      if (syncStudentsBtn) {
        syncStudentsBtn.addEventListener('click', async () => {
          const sheetId = document.getElementById('cfg-studentSyncSheetId')?.value?.trim() || ''
          const tabName = document.getElementById('cfg-studentSyncTabName')?.value?.trim() || ''
          const headerRow = document.getElementById('cfg-studentSyncHeaderRow')?.value?.trim() || '1'
          syncStudentsBtn.disabled = true
          syncStudentsBtn.textContent = 'กำลังซิงก์...'
          try {
            await Promise.all([
              updateSystemConfig('studentSyncSheetId', sheetId),
              updateSystemConfig('studentSyncTabName', tabName),
              updateSystemConfig('studentSyncHeaderRow', headerRow),
            ])
            const res = await syncStudentsFromSheetNow({ sourceSheetId: sheetId, tabName, headerRow })
            showToast(`ซิงก์นักเรียนสำเร็จ: อ่าน ${res.read ?? 0} แถว / บันทึก ${res.written ?? 0} คน ✅`, 'success')
          } catch (err) {
            showToast('ซิงก์นักเรียนไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          } finally {
            syncStudentsBtn.disabled = false
            syncStudentsBtn.textContent = '🔄 ซิงก์นักเรียนตอนนี้'
          }
        })
      }

      // upload handlers
      document.querySelectorAll('#cfg-panel-inner .cfg-upload-file').forEach(fi => {
        fi.addEventListener('change', async e => {
          const file = e.target.files[0]; if (!file) return
          const key = fi.dataset.key
          const hidden = document.getElementById(`cfg-${key}`)
          fi.disabled = true
          try {
            const url = await uploadSystemAsset(key, file)
            if (hidden) hidden.value = url
            await updateSystemConfig(key, url)
            showToast(`อัปโหลดสำเร็จ ✅`, 'success')
            // refresh preview
            const imgEl = fi.closest('.flex')?.querySelector('img')
            const iconEl = fi.closest('.flex')?.querySelector('div.w-14')
            if (imgEl) { imgEl.src = url }
            else if (iconEl) { iconEl.outerHTML = `<img src="${url}" class="h-14 max-w-[140px] object-contain rounded-lg border border-gray-200 bg-white p-1" />` }
          } catch (err) {
            showToast('อัปโหลดไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          } finally { fi.disabled = false }
        })
      })
    }

    document.querySelectorAll('.cfg-tab').forEach(btn =>
      btn.addEventListener('click', () => renderTab(btn.dataset.tab))
    )
    renderTab(activeTab)

    // ─── Save button ─────────────────────────────────────────────────────────────
    document.getElementById('cfg-save-btn').addEventListener('click', async () => {
      const btn = document.getElementById('cfg-save-btn')
      const inputs = document.querySelectorAll('#cfg-panel-inner [data-key]')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        await Promise.all([...inputs].map(el => {
          const val = el.tagName === 'BUTTON' ? (el.dataset.on ?? 'false') : el.value
          return updateSystemConfig(el.dataset.key, val)
        }))
        await applyThemeForRole('admin', {}, true)
        showToast('บันทึกสำเร็จ ✅', 'success')
        document.getElementById('cfg-save-hint').textContent = `บันทึกล่าสุด: ${new Date().toLocaleTimeString('th-TH')}`
      } catch {
        showToast('บันทึกไม่สำเร็จ', 'error')
      } finally {
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
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
              <div>
                <span>${d.head_name ?? '—'}</span>
                ${d.teacher_code ? `<span class="block text-xs font-mono text-gray-400">${d.teacher_code}</span>` : ''}
              </div>
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

// ─── View: Curriculum Standards ───────────────────────────────────────────────
function _parseCurriculumCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false

  for (let i = 0; i < String(text ?? '').length; i++) {
    const ch = text[i]
    const next = text[i + 1]
    if (quoted) {
      if (ch === '"' && next === '"') { field += '"'; i++ }
      else if (ch === '"') quoted = false
      else field += ch
    } else if (ch === '"') quoted = true
    else if (ch === ',') { row.push(field); field = '' }
    else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = '' }
    else if (ch !== '\r') field += ch
  }
  if (field || row.length) { row.push(field); rows.push(row) }
  if (rows.length < 2) return []

  const headers = rows[0].map(h => h.trim())
  const allowed = [
    'subject_name', 'subject_code', 'dept', 'grade_level', 'strand', 'topic',
    'item_no', 'standard_code', 'standard_text', 'indicator_code',
    'indicator_text', 'learning_outcome_text', 'source_note',
  ]
  return rows.slice(1).map(cols => {
    const raw = Object.fromEntries(headers.map((h, i) => [h, cols[i] ?? '']))
    const item = {}
    allowed.forEach(key => {
      const value = String(raw[key] ?? '').trim()
      if (key === 'item_no') {
        const parsed = Number(value)
        item[key] = value && Number.isFinite(parsed) ? parsed : null
      } else item[key] = value || null
    })
    return item
  }).filter(item => item.subject_name || item.subject_code || item.standard_text || item.indicator_text || item.learning_outcome_text)
}

function _curriculumFormField(name, label, value = '', type = 'text') {
  const control = type === 'textarea'
    ? `<textarea name="${name}" rows="3" dir="auto" class="${SEARCH_CLS} w-full min-h-[92px] resize-y">${_esc(value)}</textarea>`
    : `<input name="${name}" value="${_esc(value)}" dir="auto" class="${SEARCH_CLS} w-full" />`
  return `<label class="block">
    <span class="block text-xs font-semibold text-gray-500 mb-1">${label}</span>
    ${control}
  </label>`
}

export async function renderCurriculum() {
  setActiveNav('curriculum')
  document.getElementById('page-title').textContent = 'จัดการหลักสูตร'
  setContent(`<div class="flex justify-center py-16 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)

  try {
    let filters = window._curriculumFilters || { q: '', dept: '', gradeLevel: '', subjectCode: '' }
    const [rows, departments] = await Promise.all([
      getCurriculumStandards(filters),
      getDepartments().catch(() => []),
    ])
    const depts = _opts([...departments.map(d => d.dept_name), ...departments.map(d => d.dept_code), ...rows.map(r => r.dept)])
    const grades = _opts(rows.map(r => r.grade_level))
    const byId = Object.fromEntries(rows.map(r => [r.id, r]))
    window._curriculumRows = byId

    const openModal = (row = {}) => {
      const isEdit = Boolean(row.id)
      const modal = document.createElement('div')
      modal.className = 'fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4'
      modal.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">${isEdit ? 'แก้ไขข้อมูลหลักสูตร' : 'เพิ่มข้อมูลหลักสูตร'}</h3>
            <p class="text-sm text-gray-400">รองรับภาษาไทย อังกฤษ และอาหรับด้วยช่องพิมพ์แบบ dir=auto</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <form id="curriculum-form" class="p-6 overflow-y-auto space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            ${_curriculumFormField('subject_name', 'ชื่อรายวิชา', row.subject_name)}
            ${_curriculumFormField('subject_code', 'รหัสวิชา', row.subject_code)}
            ${_curriculumFormField('dept', 'กลุ่มสาระ/กลุ่มวิชา', row.dept)}
            ${_curriculumFormField('grade_level', 'ระดับชั้น', row.grade_level)}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${_curriculumFormField('strand', 'สาระ', row.strand)}
            ${_curriculumFormField('topic', 'เรื่อง/สาระการเรียนรู้', row.topic)}
            ${_curriculumFormField('item_no', 'ลำดับข้อ', row.item_no ?? '')}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${_curriculumFormField('standard_code', 'รหัสมาตรฐาน', row.standard_code)}
            ${_curriculumFormField('indicator_code', 'รหัสตัวชี้วัด', row.indicator_code)}
          </div>
          ${_curriculumFormField('standard_text', 'มาตรฐานการเรียนรู้', row.standard_text, 'textarea')}
          ${_curriculumFormField('indicator_text', 'ตัวชี้วัด', row.indicator_text, 'textarea')}
          ${_curriculumFormField('learning_outcome_text', 'ผลการเรียนรู้ (สำหรับรายวิชาเพิ่มเติม)', row.learning_outcome_text, 'textarea')}
          ${_curriculumFormField('source_note', 'แหล่งที่มา/หมายเหตุ', row.source_note, 'textarea')}
          <div class="sticky bottom-0 bg-white border-t pt-4 flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">บันทึก</button>
          </div>
        </form>
      </div>`
      document.body.appendChild(modal)
      modal.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => modal.remove()))
      modal.querySelector('#curriculum-form').addEventListener('submit', async e => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const payload = {}
        ;['subject_name','subject_code','dept','grade_level','strand','topic','standard_code','standard_text','indicator_code','indicator_text','learning_outcome_text','source_note'].forEach(key => {
          payload[key] = String(fd.get(key) ?? '').trim() || null
        })
        const itemNo = String(fd.get('item_no') ?? '').trim()
        const parsedItemNo = Number(itemNo)
        payload.item_no = itemNo && Number.isFinite(parsedItemNo) ? parsedItemNo : null
        try {
          if (isEdit) await updateCurriculumStandard(row.id, payload)
          else await createCurriculumStandard(payload)
          showToast('บันทึกข้อมูลหลักสูตรแล้ว', 'success')
          modal.remove()
          await renderCurriculum()
        } catch (err) {
          showToast(err.message || 'บันทึกไม่สำเร็จ', 'error')
        }
      })
    }

    const openImport = () => {
      const modal = document.createElement('div')
      const header = 'subject_name,subject_code,dept,grade_level,strand,topic,item_no,standard_code,standard_text,indicator_code,indicator_text,learning_outcome_text,source_note'
      modal.className = 'fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4'
      modal.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">นำเข้าหลักสูตรด้วย CSV</h3>
            <p class="text-sm text-gray-400">ระบบจะเพิ่มข้อมูลใหม่เข้าไป ไม่ล้างข้อมูลเดิม</p>
          </div>
          <button type="button" data-close class="w-11 h-11 rounded-full bg-gray-100 text-gray-400 text-2xl hover:bg-gray-200">×</button>
        </div>
        <div class="p-6 overflow-y-auto space-y-4">
          <div class="rounded-2xl bg-indigo-50 border border-indigo-100 p-4 text-sm text-indigo-900">
            <div class="font-semibold mb-2">หัวคอลัมน์ที่รองรับ</div>
            <code class="block whitespace-pre-wrap break-all text-xs">${header}</code>
          </div>
          <input id="curriculum-csv-file" type="file" accept=".csv,text/csv" class="${SEARCH_CLS} w-full" />
          <textarea id="curriculum-csv-text" rows="12" class="${SEARCH_CLS} w-full font-mono text-xs" placeholder="${header}\nภาษาอังกฤษพื้นฐาน,อ31102,ภาษาต่างประเทศ,ม.6,ภาษาเพื่อการสื่อสาร,Past tense,1,ต 1.1,เข้าใจและตีความเรื่องที่ฟังและอ่าน,ต 1.1 ม.6/1,ปฏิบัติตามคำแนะนำในคู่มือ,,"></textarea>
          <div class="flex gap-3 justify-end">
            <button type="button" data-close class="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold">ยกเลิก</button>
            <button id="curriculum-import-submit" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">นำเข้า</button>
          </div>
        </div>
      </div>`
      document.body.appendChild(modal)
      modal.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => modal.remove()))
      modal.querySelector('#curriculum-csv-file').addEventListener('change', e => {
        const file = e.target.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = () => { modal.querySelector('#curriculum-csv-text').value = reader.result || '' }
        reader.readAsText(file)
      })
      modal.querySelector('#curriculum-import-submit').addEventListener('click', async () => {
        const parsed = _parseCurriculumCsv(modal.querySelector('#curriculum-csv-text').value)
        if (!parsed.length) return showToast('ไม่พบข้อมูลที่นำเข้าได้', 'warning')
        try {
          const count = await importCurriculumStandards(parsed)
          showToast(`นำเข้าแล้ว ${count} รายการ`, 'success')
          modal.remove()
          await renderCurriculum()
        } catch (err) {
          showToast(err.message || 'นำเข้าไม่สำเร็จ', 'error')
        }
      })
    }

    window._curriculumOpenModal = () => openModal()
    window._curriculumEdit = id => openModal(window._curriculumRows?.[id] || {})
    window._curriculumDelete = async id => {
      if (!confirm('ลบข้อมูลหลักสูตรรายการนี้?')) return
      try {
        await deleteCurriculumStandard(id)
        showToast('ลบข้อมูลแล้ว', 'success')
        await renderCurriculum()
      } catch (err) {
        showToast(err.message || 'ลบไม่สำเร็จ', 'error')
      }
    }
    window._curriculumOpenImport = openImport

    setContent(`<div class="max-w-7xl mx-auto space-y-5 animate-fade">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">จัดการหลักสูตร</h2>
          <p class="text-gray-400 text-sm mt-1">ฐานมาตรฐาน ตัวชี้วัด และผลการเรียนรู้ สำหรับเติมข้อมูลเอกสาร ปพ.5 รายคอร์ส</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button onclick="_curriculumOpenImport()" class="px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold hover:bg-emerald-100">📥 นำเข้า CSV</button>
          <button onclick="_curriculumOpenModal()" class="px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">+ เพิ่มรายการ</button>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 grid grid-cols-1 md:grid-cols-5 gap-3">
        <input id="cur-filter-q" value="${_esc(filters.q)}" class="${SEARCH_CLS}" placeholder="ค้นหาวิชา มาตรฐาน ตัวชี้วัด..." />
        <input id="cur-filter-code" value="${_esc(filters.subjectCode)}" class="${SEARCH_CLS}" placeholder="รหัสวิชา..." />
        <select id="cur-filter-dept" class="${SELECT_CLS}">
          <option value="">ทุกกลุ่มสาระ</option>
          ${depts.map(d => `<option value="${_esc(d)}" ${d === filters.dept ? 'selected' : ''}>${_esc(d)}</option>`).join('')}
        </select>
        <select id="cur-filter-grade" class="${SELECT_CLS}">
          <option value="">ทุกระดับชั้น</option>
          ${grades.map(g => `<option value="${_esc(g)}" ${g === filters.gradeLevel ? 'selected' : ''}>${_esc(g)}</option>`).join('')}
        </select>
        <button id="cur-filter-submit" class="rounded-xl bg-gray-900 text-white font-semibold px-4 py-2 hover:bg-gray-800">ค้นหา</button>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-4 border-b flex items-center justify-between">
          <h3 class="font-bold text-gray-800">รายการหลักสูตร</h3>
          <span class="text-sm text-gray-400">พบ <b class="text-indigo-600">${rows.length}</b> รายการ</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-gray-500">
              <tr>
                <th class="text-left px-5 py-3 min-w-[220px]">รายวิชา</th>
                <th class="text-left px-5 py-3 min-w-[160px]">เรื่อง/สาระ</th>
                <th class="text-left px-5 py-3 min-w-[260px]">มาตรฐาน</th>
                <th class="text-left px-5 py-3 min-w-[320px]">ตัวชี้วัด / ผลการเรียนรู้</th>
                <th class="text-right px-5 py-3 min-w-[120px]">จัดการ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              ${rows.length ? rows.map(r => `<tr class="hover:bg-gray-50/70 align-top">
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-900">${_esc(r.subject_name || 'ไม่ระบุวิชา')}</div>
                  <div class="text-indigo-500 font-mono">${_esc(r.subject_code || '—')}</div>
                  <div class="text-xs text-gray-400 mt-1">${_esc(r.dept || '—')} · ${_esc(r.grade_level || 'ทุกชั้น')}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-semibold text-gray-700">${_esc(r.topic || '—')}</div>
                  <div class="text-xs text-gray-400 mt-1">${_esc(r.strand || '')}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${_esc(r.standard_code || '')}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${_esc(r.standard_text || '—')}</div>
                </td>
                <td class="px-5 py-4">
                  <div class="font-mono text-xs text-indigo-500">${_esc(r.indicator_code || '')}</div>
                  <div class="text-gray-700 whitespace-pre-wrap" dir="auto">${_esc(r.indicator_text || r.learning_outcome_text || '—')}</div>
                </td>
                <td class="px-5 py-4 text-right whitespace-nowrap">
                  <button onclick="_curriculumEdit('${_onclickText(r.id)}')" class="text-indigo-600 hover:text-indigo-800 font-semibold mr-3">แก้ไข</button>
                  <button onclick="_curriculumDelete('${_onclickText(r.id)}')" class="text-red-400 hover:text-red-600 font-semibold">ลบ</button>
                </td>
              </tr>`).join('') : `<tr><td colspan="5" class="px-5 py-16 text-center text-gray-400">ยังไม่มีข้อมูลหลักสูตร</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>`)

    const reload = () => {
      filters = {
        q: document.getElementById('cur-filter-q')?.value || '',
        subjectCode: document.getElementById('cur-filter-code')?.value || '',
        dept: document.getElementById('cur-filter-dept')?.value || '',
        gradeLevel: document.getElementById('cur-filter-grade')?.value || '',
      }
      window._curriculumFilters = filters
      renderCurriculum()
    }
    ;['cur-filter-q','cur-filter-code'].forEach(id => {
      document.getElementById(id)?.addEventListener('keydown', e => {
        if (e.key === 'Enter') reload()
      })
    })
    ;['cur-filter-dept','cur-filter-grade'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', reload)
    })
    document.getElementById('cur-filter-submit')?.addEventListener('click', reload)
  } catch (err) {
    setContent(`<div class="max-w-3xl mx-auto bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
      โหลดข้อมูลหลักสูตรไม่สำเร็จ: ${_esc(err.message || err)}
    </div>`)
  }
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
      students: '<b>รูปแบบ CSV นักเรียน:</b> student_id, student_name, grade_general, grade_religion, photo_url, house_color, sports_shirt_size',
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
      <div class="flex gap-2">
        <button id="pay-bulk-approve"
          class="hidden text-xs px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition">
          ✅ อนุมัติที่เลือก
        </button>
        <button id="pay-approve-all"
          class="text-xs px-3 py-1.5 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold transition">
          ✅ อนุมัติทั้งหมด
        </button>
        <button id="pay-refresh" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1">
          🔄 รีเฟรช
        </button>
      </div>
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
    const statusOrder = { pending: 0, approved: 1, rejected: 2 }
    const filtered = (currentFilter === 'all'
      ? allRequests
      : allRequests.filter(r => r.status === currentFilter)
    ).slice().sort((a, b) => {
      const sDiff = (statusOrder[a.status] ?? 9) - (statusOrder[b.status] ?? 9)
      if (sDiff !== 0) return sDiff
      return new Date(b.created_at) - new Date(a.created_at)
    })

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

      const pkgLabel = {
        semester:         `📦 เหมาทั้งเทอม (${r.amount ?? 299} บ.)`,
        per_subject:      `📘 รายห้อง ${parseInt(r.room_count ?? 1) || 1} ห้อง (${r.amount ?? 49} บ.)`,
        donation:         `☕ โดเนท ${r.amount ?? 0} บ.`,
        school_sponsored: `🏫 ขอสิทธิ์จากโรงเรียน (ไม่มีค่าใช้จ่าย)`,
      }[r.package_type] ?? `${r.package_type} (${r.amount ?? 0} บ.)`

      const date = new Date(r.created_at).toLocaleDateString('th-TH', {
        day: 'numeric', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit'
      })

      return `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-id="${r.id}">

        <!-- Header การ์ด -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <div class="flex items-center gap-3">
            ${r.status === 'pending' ? `<input type="checkbox" class="pay-cb w-4 h-4 rounded accent-emerald-600 flex-shrink-0" data-id="${r.id}" data-teacher="${r.teachers?.id}" data-pkg="${r.package_type}" />` : ''}
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
            data-url="${_esc(r.slip_url)}">
            🖼 ดูสลิปการโอนเงิน
          </button>
        </div>` : `
        <div class="px-4 pb-3">
          <p class="text-xs text-gray-400 text-center italic">ยังไม่มีสลิป</p>
        </div>`}

        <!-- Actions (เฉพาะ pending) -->
        ${r.status === 'pending' ? (() => {
          if (r.package_type === 'donation') return `
          <div class="px-4 pb-4">
            <button class="donate-ack-btn w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500
                           text-white text-sm font-semibold transition"
              data-id="${r.id}" data-teacher="${r.teachers?.id}">
              ☕ รับทราบ / ขอบคุณ
            </button>
          </div>`
          if (r.package_type === 'school_sponsored') return `
          <div class="px-4 pb-4">
            <button class="approve-btn flex-1 w-full py-2.5 rounded-xl bg-emerald-600 text-white
                           text-sm font-semibold hover:bg-emerald-700 transition"
              data-id="${r.id}" data-teacher="${r.teachers?.id}" data-pkg="${r.package_type}">
              🏫 อนุมัติสิทธิ์
            </button>
          </div>`
          return `
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
          </div>`
        })() : ''}
      </div>`
    }).join('')

    // ── Donate Acknowledge ──
    list.querySelectorAll('.donate-ack-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const cfg = await getSystemConfig().catch(() => ({}))
        const thankYouMsg = cfg.donationThankYouCard?.trim() || 'ขอบคุณคุณครูมากเลยครับที่ช่วยสนับสนุนการพัฒนาระบบ 🙏'
        if (!confirm(`รับทราบการโดเนทนี้?\nระบบจะส่งการ์ดขอบคุณให้คุณครูทันที`)) return
        btn.disabled = true; btn.textContent = '⏳ กำลังดำเนินการ...'
        try {
          await reviewPaymentRequest(parseInt(btn.dataset.id), 'approved', thankYouMsg)
          await approveTeacherQuota(parseInt(btn.dataset.teacher), 'donation')
          showToast('รับทราบแล้ว ✅ ส่งการ์ดขอบคุณให้ครูแล้ว', 'success')
          window._refreshPaymentBadge?.()
          allRequests = await getAllPaymentRequests()
          render()
        } catch { showToast('เกิดข้อผิดพลาด', 'error'); btn.disabled = false; btn.textContent = '☕ รับทราบ / ขอบคุณ' }
      })
    })

    // ── Approve ──
    list.querySelectorAll('.approve-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const isSchoolSponsored = btn.dataset.pkg === 'school_sponsored'
        const confirmMsg = isSchoolSponsored
          ? `อนุมัติสิทธิ์ใช้งานไม่จำกัดให้ครูท่านนี้?`
          : `อนุมัติคำขอนี้?\nครูจะสามารถสร้างห้องเรียนได้ทันที`
        if (!confirm(confirmMsg)) return
        btn.disabled = true; btn.textContent = '⏳ กำลังอนุมัติ...'
        try {
          await reviewPaymentRequest(parseInt(btn.dataset.id), 'approved')
          await approveTeacherQuota(parseInt(btn.dataset.teacher), btn.dataset.pkg)
          showToast('อนุมัติแล้ว ✅', 'success')
          window._refreshPaymentBadge?.()
          allRequests = await getAllPaymentRequests()
          render()
        } catch { showToast('เกิดข้อผิดพลาด', 'error'); btn.disabled = false; btn.textContent = isSchoolSponsored ? '🏫 อนุมัติสิทธิ์' : '✅ อนุมัติ' }
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

  // ── checkbox → bulk approve bar ─────────────────────────────────────────
  document.getElementById('pay-list').addEventListener('change', e => {
    if (!e.target.classList.contains('pay-cb')) return
    const checked = document.querySelectorAll('.pay-cb:checked')
    const bulkBtn = document.getElementById('pay-bulk-approve')
    if (checked.length > 0) {
      bulkBtn.classList.remove('hidden')
      bulkBtn.textContent = `✅ อนุมัติ ${checked.length} คน`
    } else {
      bulkBtn.classList.add('hidden')
    }
  })

  const _approveRequests = async (items) => {
    let done = 0
    for (const item of items) {
      try {
        await reviewPaymentRequest(parseInt(item.id), 'approved')
        await approveTeacherQuota(parseInt(item.teacher), item.pkg)
        done++
      } catch {}
    }
    showToast(`อนุมัติ ${done}/${items.length} รายการ ✅`, 'success')
    window._refreshPaymentBadge?.()
    allRequests = await getAllPaymentRequests()
    render()
    document.getElementById('pay-bulk-approve')?.classList.add('hidden')
  }

  document.getElementById('pay-bulk-approve')?.addEventListener('click', async () => {
    const checked = [...document.querySelectorAll('.pay-cb:checked')]
    if (!checked.length) return
    if (!confirm(`อนุมัติ ${checked.length} คนที่เลือก?`)) return
    await _approveRequests(checked.map(cb => ({
      id: cb.dataset.id, teacher: cb.dataset.teacher, pkg: cb.dataset.pkg
    })))
  })

  document.getElementById('pay-approve-all')?.addEventListener('click', async () => {
    const pending = allRequests.filter(r => r.status === 'pending')
    if (!pending.length) { showToast('ไม่มีรายการที่รออนุมัติ', 'info'); return }
    if (!confirm(`อนุมัติทั้งหมด ${pending.length} รายการ?`)) return
    await _approveRequests(pending.map(r => ({
      id: r.id, teacher: r.teachers?.id, pkg: r.package_type
    })))
  })
}

// popup ดูสลิป
async function _showSlipModal(url) {
  const el = document.createElement('div')
  el.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4'
  el.innerHTML = `
    <div class="relative max-w-2xl w-full">
      <button class="absolute -top-10 right-0 text-white text-2xl">✕</button>
      <div id="slip-viewer" class="bg-white rounded-2xl shadow-2xl min-h-40 flex items-center justify-center text-sm text-gray-400">
        กำลังเปิดสลิป...
      </div>
      <a id="slip-download" href="${_esc(url)}" target="_blank" rel="noopener" download
        class="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-gray-700 text-sm font-medium">
        ⬇️ ดาวน์โหลดสลิป
      </a>
    </div>`
  document.body.appendChild(el)
  el.querySelector('button').addEventListener('click', () => el.remove())
  el.addEventListener('click', e => { if (e.target === el) el.remove() })

  const viewer = el.querySelector('#slip-viewer')
  const link = el.querySelector('#slip-download')
  const viewUrl = await getPaymentSlipViewUrl(url)
  const safeUrl = _esc(viewUrl)
  const isPdf = String(viewUrl).split('?')[0].toLowerCase().endsWith('.pdf')
  if (link) link.href = viewUrl
  if (viewer) {
    viewer.innerHTML = isPdf
      ? `<iframe src="${safeUrl}" class="w-full h-[75vh] rounded-2xl border-0 bg-white"></iframe>`
      : `<img src="${safeUrl}" class="w-full rounded-2xl object-contain max-h-[75vh] bg-white"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-6 text-center text-sm text-gray-500 bg-white rounded-2xl',textContent:'เปิดภาพสลิปในหน้านี้ไม่สำเร็จ กรุณากดดาวน์โหลดสลิป'}))"/>`
  }
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
        <div class="flex flex-wrap justify-end gap-2">
          <button id="btn-fill-ls-classes"
            class="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition">
            เติมเข้ารายวิชาทักษะชีวิต
          </button>
          <div class="flex gap-2" id="lsk-tab-actions"></div>
        </div>
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

    document.getElementById('btn-fill-ls-classes')?.addEventListener('click', async () => {
      if (!confirm('ยืนยันเติมคะแนนทักษะชีวิตไปยังรายวิชากลุ่มทักษะชีวิตทั้งหมด?')) return
      const btn = document.getElementById('btn-fill-ls-classes')
      const orig = btn.textContent
      btn.disabled = true
      btn.textContent = 'กำลังเติม...'
      try {
        const result = await fillLifeSkillScoresToClassScores(year, sem)
        showToast(`เติมทักษะชีวิต ${result.classes} รายวิชา / ${result.scores} คะแนนแล้ว`, 'success')
      } catch (err) {
        showToast('เติมไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.disabled = false
        btn.textContent = orig
      }
    })

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
  m.className = 'fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40'
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
        <select id="rsa-filter-grade" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกระดับชั้น</option>
        </select>
        <select id="rsa-filter-room" class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกห้อง</option>
        </select>
        <input id="rsa-filter-search" type="text" placeholder="ค้นหาชื่อ / รหัสนักเรียน"
          class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <span id="rsa-filter-count" class="text-xs text-gray-400"></span>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <div id="rsa-score-table"><div class="p-10 text-center text-gray-400">กำลังโหลด...</div></div>
      </div>`

    const [{ columns, scores }, roster] = await Promise.all([
      getAllReadingScores(year, sem).catch(()=>({ columns:[], scores:[] })),
      getStudents().catch(()=>[]),
    ])
    const scoreMap = {}
    for (const s of scores) {
      if (!scoreMap[s.student_id]) scoreMap[s.student_id] = {}
      scoreMap[s.student_id][s.column_id] = s.score
    }
    const allStudents = roster
      .filter(s => s?.id && s?.student_code && s?.main_room)
      .sort((a,b) => (a.main_room??'').localeCompare(b.main_room??'',undefined,{numeric:true}) || (a.student_code??'').localeCompare(b.student_code??''))

    const gradeEl = document.getElementById('rsa-filter-grade')
    const roomEl = document.getElementById('rsa-filter-room')
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

    _syncRoomOptions()
    let _rsFiltered = [...allStudents]
    _renderTable(_rsFiltered)

    const _applyRsFilter = () => {
      _syncRoomOptions()
      const grade = gradeEl.value
      const room = roomEl.value
      const q = document.getElementById('rsa-filter-search').value.toLowerCase()
      _rsFiltered = allStudents.filter(s =>
        (!grade || _grade(s.main_room) === grade) &&
        (!room || _room(s.main_room) === room) &&
        (!q || s.full_name?.toLowerCase().includes(q) || s.student_code?.includes(q))
      )
      _renderTable(_rsFiltered)
    }
    gradeEl.addEventListener('change', _applyRsFilter)
    roomEl.addEventListener('change', _applyRsFilter)
    document.getElementById('rsa-filter-search').addEventListener('input', _applyRsFilter)

    document.getElementById('btn-sync-rs')?.addEventListener('click', async () => {
      const btn = document.getElementById('btn-sync-rs')
      if (!cfg.readingScoreSheetId) { showToast('ยังไม่ได้ตั้งค่า Sheet ID','warning'); return }
      btn.disabled=true; btn.textContent='⏳ กำลัง Sync...'
      try {
        const { syncCentralBatch } = await import('./sync.js')
        const stuList = _rsFiltered.map(s => ({ id: s.id, student_code: s.student_code }))
        const stuIds = new Set(stuList.map(s => s.id))
        const colIds = new Set(columns.map(c => c.id))
        const scList = scores.filter(sc => stuIds.has(sc.student_id) && colIds.has(sc.column_id))
        const totalRecords = await syncCentralBatch(
          cfg.readingScoreSheetId,
          cfg.readingScoreSheetTab,
          columns,
          scList,
          stuList,
          { studentColRange: cfg.readingScoreStudentRange || 'J8:J3000' }
        )
        if (!totalRecords) {
          showToast('ยังไม่มีคะแนนอ่านคิดวิเคราะห์ที่พร้อมซิงค์ในกลุ่มที่เลือก', 'warning')
          return
        }
        showToast(`ส่งคำสั่ง Sync อ่านคิดวิเคราะห์ ${stuList.length} คน / ${totalRecords} คะแนนแล้ว`, 'success')
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
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 w-20 flex-shrink-0">ช่วงรหัส:</span>
            <input type="text" id="rsa-student-range" value="${cfg.readingScoreStudentRange??'J8:J3000'}" placeholder="เช่น J8:J3000"
              class="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-1.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
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
      const rangeVal=document.getElementById('rsa-student-range')?.value.trim()??'J8:J3000'
      btn.disabled=true; btn.textContent='⏳'
      try {
        await Promise.all([
          updateSystemConfig('readingScoreSheetId',val),
          updateSystemConfig('readingScoreSheetTab',tabVal),
          updateSystemConfig('readingScoreStudentRange',rangeVal),
        ])
        cfg.readingScoreSheetId=val; cfg.readingScoreSheetTab=tabVal; cfg.readingScoreStudentRange=rangeVal
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
      <div class="flex flex-wrap justify-end gap-2">
        <button id="btn-fill-prayer-classes"
          class="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition">
          เติมเข้ารายวิชาศาสนา
        </button>
        <button id="btn-sync-all-prayer"
          class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition">
          ↑ Sync ทุกห้อง
        </button>
        <button id="btn-sync-prayer"
          class="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition">
          ↑ Sync ห้องนี้
        </button>
      </div>`

    document.getElementById('btn-fill-prayer-classes')?.addEventListener('click', async () => {
      if (!confirm('ยืนยันเติมคะแนนละหมาดและคะแนนมาเรียนไปยังรายวิชาศาสนาทั้งหมด?')) return
      const btn = document.getElementById('btn-fill-prayer-classes')
      const orig = btn.textContent
      btn.disabled = true
      btn.textContent = 'กำลังเติม...'
      try {
        const result = await fillPrayerScoresToReligionClassScores({
          semesterStart: cfg.semester_start,
          semesterEnd: cfg.semester_end,
        })
        showToast(`เติมรายวิชาศาสนา ${result.classes} รายวิชา / ${result.scores} คะแนนแล้ว`, 'success')
      } catch (err) {
        showToast('เติมไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.disabled = false
        btn.textContent = orig
      }
    })

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
      m.className = 'fixed inset-0 z-[80] flex flex-col bg-white'

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
  m.className = 'fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40'
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

// ─── Admin: โปรไฟล์ของฉัน ─────────────────────────────────────────────────────
export async function renderAdminProfile() {
  setActiveNav('admin-profile')
  document.getElementById('page-title').textContent = 'โปรไฟล์ของฉัน'

  let userId = null, currentEmail = '', teacher = null
  try {
    const { data: sessionData } = await supabase.auth.getSession()
    userId       = sessionData?.session?.user?.id ?? null
    currentEmail = sessionData?.session?.user?.email ?? ''
    if (userId) {
      const { data } = await supabase
        .from('teachers')
        .select('id, full_name, image_url, username, login_email')
        .eq('profile_id', userId)
        .maybeSingle()
      teacher = data ?? null
    }
  } catch { /* ไม่ block render */ }

  const INPUT = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white'

  setContent(`<div class="max-w-lg mx-auto animate-fade">
    <h2 class="text-lg font-bold text-gray-800 mb-5">👤 โปรไฟล์ของฉัน</h2>

    <!-- Avatar -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4 flex flex-col items-center">
      <div id="adm-avatar"
        class="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500
               text-white text-3xl font-bold flex items-center justify-center overflow-hidden border-4 border-white shadow-md mb-3">
        ${teacher?.image_url
          ? `<img src="${teacher.image_url}" class="w-full h-full object-cover"/>`
          : (teacher?.full_name ?? 'A').charAt(0).toUpperCase()}
      </div>
      <p class="text-sm font-semibold text-gray-700">${teacher?.full_name ?? 'ผู้ดูแลระบบ'}</p>
      <p class="text-xs text-indigo-500 mt-0.5">ผู้ดูแลระบบ</p>
    </div>

    <!-- แก้ไขชื่อ -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-3 text-sm">📝 ชื่อ-นามสกุล</h3>
      <input id="adm-name" type="text" value="${teacher?.full_name ?? ''}"
        placeholder="ชื่อ-นามสกุล" class="${INPUT} mb-3" />
      <button id="btn-save-name"
        class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        บันทึกชื่อ
      </button>
      <div id="name-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>

    <!-- ตั้ง Username -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-1 text-sm">🔑 ยูเซอร์เนม (สำหรับ login)</h3>
      ${teacher?.username
        ? `<p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-700 font-mono">${teacher.username}</span></p>`
        : `<p class="text-xs text-amber-500 mb-3">⚠️ ยังไม่ได้ตั้งยูเซอร์เนม — ตั้งเพื่อ login โดยไม่ต้องใช้อีเมล</p>`}
      <input id="adm-username" type="text" value="${teacher?.username ?? ''}"
        placeholder="เช่น admin.school (a-z, 0-9, ., -, _ เท่านั้น)"
        autocomplete="username"
        class="${INPUT} mb-1 font-mono lowercase" maxlength="32" />
      <p class="text-[11px] text-gray-400 mb-3">3–32 ตัว ใช้ได้เฉพาะ a-z, 0-9, จุด, ขีดกลาง, ขีดล่าง</p>
      <button id="btn-save-username"
        class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        บันทึก Username
      </button>
      <div id="username-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>

    <!-- แก้ไขอีเมล -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <h3 class="font-semibold text-gray-700 mb-1 text-sm">📧 อีเมล</h3>
      <p class="text-xs text-gray-400 mb-3">ปัจจุบัน: <span class="font-medium text-gray-600">${currentEmail}</span></p>
      <input id="adm-email" type="email" placeholder="อีเมลใหม่"
        class="${INPUT} mb-3" />
      <button id="btn-save-email"
        class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        เปลี่ยนอีเมล
      </button>
      <div id="email-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
      <p class="text-[11px] text-gray-400 mt-2 text-center">ระบบจะส่งลิงก์ยืนยันไปยังอีเมลใหม่ก่อนอัปเดต</p>
    </div>

    <!-- เปลี่ยนรหัสผ่าน -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 class="font-semibold text-gray-700 mb-3 text-sm">🔒 เปลี่ยนรหัสผ่าน</h3>
      <input id="adm-pw" type="password" placeholder="รหัสผ่านใหม่ (อย่างน้อย 6 ตัว)"
        class="${INPUT} mb-2" />
      <input id="adm-pw2" type="password" placeholder="ยืนยันรหัสผ่านใหม่"
        class="${INPUT} mb-3" />
      <button id="btn-save-pw"
        class="w-full py-2.5 rounded-xl bg-gray-700 text-white text-sm font-semibold hover:bg-gray-800 transition">
        เปลี่ยนรหัสผ่าน
      </button>
      <div id="pw-msg" class="hidden text-xs text-center mt-2 py-2 rounded-lg"></div>
    </div>
  </div>`)

  const _msg = (elId, text, ok) => {
    const el = document.getElementById(elId)
    el.className = `text-xs text-center mt-2 py-2 rounded-lg ${ok ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`
    el.textContent = text
    el.classList.remove('hidden')
    setTimeout(() => el.classList.add('hidden'), 3500)
  }

  // helper: upsert ผ่าน SECURITY DEFINER RPC (bypass RLS)
  const _upsertAdminProfile = async (fields) => {
    const { data, error } = await supabase.rpc('upsert_admin_teacher_profile', {
      p_profile_id:  userId,
      p_full_name:   fields.full_name   ?? null,
      p_username:    fields.username    ?? null,
      p_login_email: fields.login_email ?? null,
    })
    if (error) throw error
    return data
  }

  // บันทึกชื่อ
  document.getElementById('btn-save-name').addEventListener('click', async () => {
    const btn  = document.getElementById('btn-save-name')
    const name = document.getElementById('adm-name').value.trim()
    if (!name) { _msg('name-msg', 'กรุณากรอกชื่อ-นามสกุล', false); return }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await _upsertAdminProfile({ full_name: name, login_email: currentEmail })
      _msg('name-msg', 'บันทึกชื่อสำเร็จ ✅', true)
      const nameEl = document.getElementById('user-name')
      if (nameEl) nameEl.textContent = name
    } catch (err) { _msg('name-msg', 'บันทึกไม่สำเร็จ: ' + (err.message ?? ''), false) }
    finally { btn.disabled = false; btn.textContent = 'บันทึกชื่อ' }
  })

  // บันทึก Username
  document.getElementById('btn-save-username').addEventListener('click', async () => {
    const btn    = document.getElementById('btn-save-username')
    const rawVal = document.getElementById('adm-username').value.trim().toLowerCase()
    const valid  = /^[a-z0-9._-]{3,32}$/.test(rawVal)
    if (!rawVal) { _msg('username-msg', 'กรุณากรอก username', false); return }
    if (!valid)  { _msg('username-msg', 'username ต้องมี 3–32 ตัว ใช้ได้เฉพาะ a-z 0-9 . - _', false); return }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await _upsertAdminProfile({ username: rawVal, login_email: currentEmail })
      _msg('username-msg', `บันทึก username "${rawVal}" สำเร็จ ✅ ใช้ login ได้เลย`, true)
      document.getElementById('adm-username').value = rawVal
    } catch (err) {
      const msg = err.message?.includes('unique') || err.message?.includes('duplicate')
        ? `username "${rawVal}" ถูกใช้แล้ว — ลองชื่ออื่น`
        : 'บันทึกไม่สำเร็จ: ' + (err.message ?? '')
      _msg('username-msg', msg, false)
    }
    finally { btn.disabled = false; btn.textContent = 'บันทึก Username' }
  })

  // force lowercase ขณะพิมพ์
  document.getElementById('adm-username').addEventListener('input', e => {
    const pos = e.target.selectionStart
    e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9._-]/g, '')
    e.target.setSelectionRange(pos, pos)
  })

  // เปลี่ยนอีเมล
  document.getElementById('btn-save-email').addEventListener('click', async () => {
    const btn = document.getElementById('btn-save-email')
    const email = document.getElementById('adm-email').value.trim()
    if (!email || !email.includes('@')) { _msg('email-msg', 'กรุณากรอกอีเมลให้ถูกต้อง', false); return }
    btn.disabled = true; btn.textContent = 'กำลังส่งลิงก์...'
    try {
      const { error } = await supabase.auth.updateUser({ email })
      if (error) throw error
      _msg('email-msg', 'ส่งลิงก์ยืนยันไปที่ ' + email + ' แล้ว ✅', true)
      document.getElementById('adm-email').value = ''
    } catch (err) { _msg('email-msg', 'ไม่สำเร็จ: ' + (err.message ?? ''), false) }
    finally { btn.disabled = false; btn.textContent = 'เปลี่ยนอีเมล' }
  })

  // เปลี่ยนรหัสผ่าน
  document.getElementById('btn-save-pw').addEventListener('click', async () => {
    const btn = document.getElementById('btn-save-pw')
    const pw  = document.getElementById('adm-pw').value
    const pw2 = document.getElementById('adm-pw2').value
    if (!pw || pw.length < 6) { _msg('pw-msg', 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร', false); return }
    if (pw !== pw2)            { _msg('pw-msg', 'รหัสผ่านทั้งสองช่องไม่ตรงกัน', false); return }
    btn.disabled = true; btn.textContent = 'กำลังเปลี่ยน...'
    try {
      const { error } = await supabase.auth.updateUser({ password: pw })
      if (error) throw error
      _msg('pw-msg', 'เปลี่ยนรหัสผ่านสำเร็จ ✅', true)
      document.getElementById('adm-pw').value  = ''
      document.getElementById('adm-pw2').value = ''
    } catch (err) { _msg('pw-msg', 'ไม่สำเร็จ: ' + (err.message ?? ''), false) }
    finally { btn.disabled = false; btn.textContent = 'เปลี่ยนรหัสผ่าน' }
  })
}

// ─── Usage Stats ──────────────────────────────────────────────────────────────
export async function renderUsageStats() {
  const setContent = html => { document.getElementById('main-content').innerHTML = html }
  const setActive  = nav => {
    document.querySelectorAll('[data-nav]').forEach(el => {
      const on = el.dataset.nav === nav
      el.classList.toggle('bg-indigo-800', on)
      el.classList.toggle('text-white', on)
      el.classList.toggle('text-indigo-200', !on)
    })
  }
  setActive('usage-stats')
  document.getElementById('page-title').textContent = 'สถิติการใช้งาน'

  const now = new Date()
  const monthName = now.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })

  const statCard = (icon, label, id, color) => `
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
      <p class="text-xs text-gray-400 mb-2">${icon} ${label}</p>
      <p id="${id}-today" class="text-3xl font-extrabold ${color}">—</p>
      <p class="text-[10px] text-gray-400 mt-0.5">วันนี้</p>
      <div class="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs">
        <span class="text-gray-400">เดือนนี้</span>
        <span id="${id}-month" class="font-bold text-gray-600">—</span>
      </div>
      <div class="flex justify-between text-xs mt-1">
        <span class="text-gray-400">ทั้งหมดในระบบ</span>
        <span id="${id}-total" class="font-bold text-gray-600">—</span>
      </div>
    </div>`

  setContent(`<div class="max-w-xl mx-auto animate-fade">
    <div class="mb-5 flex items-center justify-between">
      <div>
        <h2 class="text-lg font-bold text-gray-800">📊 สถิติการใช้งาน</h2>
        <p class="text-xs text-gray-400 mt-0.5">${monthName}</p>
      </div>
      <button id="stat-refresh" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">🔄 รีเฟรช</button>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      ${statCard('👨‍🏫','ครู','stat-teacher','text-indigo-600')}
      ${statCard('🎒','นักเรียน','stat-student','text-emerald-600')}
    </div>
    <p class="text-center text-[11px] text-gray-400">อัปเดตล่าสุด: <span id="stat-updated">—</span></p>
  </div>`)

  const load = async () => {
    try {
      const s = await getUsageStats()
      document.getElementById('stat-teacher-today').textContent = s.teacherToday
      document.getElementById('stat-teacher-month').textContent = s.teacherMonth
      document.getElementById('stat-teacher-total').textContent = s.teacherTotal
      document.getElementById('stat-student-today').textContent = s.studentToday
      document.getElementById('stat-student-month').textContent = s.studentMonth
      document.getElementById('stat-student-total').textContent = s.studentTotal
      document.getElementById('stat-updated').textContent =
        new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
    } catch { showToast('โหลดสถิติไม่สำเร็จ', 'error') }
  }

  await load()
  document.getElementById('stat-refresh')?.addEventListener('click', load)
}

// ─── Classrooms Admin ─────────────────────────────────────────────────────────
export async function renderClassroomsAdmin() {
  const setContent = html => { document.getElementById('main-content').innerHTML = html }
  const setActive  = nav => document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('bg-indigo-800', el.dataset.nav === nav)
    el.classList.toggle('text-white', el.dataset.nav === nav)
    el.classList.toggle('text-indigo-200', el.dataset.nav !== nav)
  })
  setActive('classrooms-admin')
  document.getElementById('page-title').textContent = 'ห้องเรียน/แผนผัง'

  const BUILDINGS = ['อาคาร 1','อาคาร 2','อาคาร 3','อาคาร 4','อาคาร 5','อาคาร 6']

  const _reload = async () => {
    const all = await getClassrooms()
    const grouped = BUILDINGS.map(b => ({ building: b, rooms: all.filter(r => r.building === b) }))
    const otherBuildings = [...new Set(all.map(r => r.building).filter(b => !BUILDINGS.includes(b)))]
    otherBuildings.forEach(b => grouped.push({ building: b, rooms: all.filter(r => r.building === b) }))

    document.getElementById('crm-content').innerHTML = grouped.filter(g => g.rooms.length > 0).map(g => `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50 bg-gray-50/50">
          <h3 class="font-bold text-gray-700">🏫 ${g.building}
            <span class="text-xs font-normal text-gray-400 ml-1">${g.rooms.length} ห้อง</span>
          </h3>
          <button class="crm-add-btn text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            data-building="${g.building}">＋ เพิ่มห้อง</button>
        </div>
        <div class="divide-y divide-gray-50">
          ${g.rooms.map(r => `
          <div class="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 transition" data-id="${r.id}">
            <span class="w-20 font-mono text-sm font-semibold text-indigo-700 flex-shrink-0">${r.room_number}</span>
            <span class="flex-1 text-sm text-gray-700">${r.name ?? '—'}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full ${r.is_teaching_room ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-500'}">
              ${r.is_teaching_room ? 'ห้องเรียน' : 'ห้องพิเศษ'}
            </span>
            <button class="crm-edit-btn text-xs text-indigo-400 hover:text-indigo-700 px-2" data-id="${r.id}">แก้ไข</button>
            <button class="crm-del-btn text-xs text-red-400 hover:text-red-600 px-1" data-id="${r.id}">ลบ</button>
          </div>`).join('')}
        </div>
      </div>`).join('')

    // bind events
    document.querySelectorAll('.crm-add-btn').forEach(btn => {
      btn.addEventListener('click', () => _openForm(null, btn.dataset.building, all))
    })
    document.querySelectorAll('.crm-edit-btn').forEach(btn => {
      const room = all.find(r => r.id === parseInt(btn.dataset.id))
      if (room) btn.addEventListener('click', () => _openForm(room, room.building, all))
    })
    document.querySelectorAll('.crm-del-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const room = all.find(r => r.id === parseInt(btn.dataset.id))
        _confirmDelete(room)
      })
    })
  }

  const _confirmDelete = (room) => {
    document.getElementById('crm-confirm')?.remove()
    const el = document.createElement('div')
    el.id = 'crm-confirm'
    el.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6'
    el.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ลบห้อง ${room?.room_number}?</h4>
      <p class="text-xs text-gray-400 mb-5">${room?.building}${room?.name ? ' · ' + room.name : ''}</p>
      <div class="flex gap-3">
        <button id="crm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="crm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบ</button>
      </div>
    </div>`
    document.body.appendChild(el)
    el.querySelector('#crm-conf-no').addEventListener('click', () => el.remove())
    el.querySelector('#crm-conf-yes').addEventListener('click', async () => {
      el.remove()
      try {
        await deleteClassroom(room.id)
        showToast('ลบห้องแล้ว ✅', 'success')
        _reload()
      } catch (e) { showToast('ลบไม่สำเร็จ: ' + (e.message ?? ''), 'error') }
    })
  }

  const _openForm = (room, defaultBuilding, all) => {
    document.getElementById('crm-modal')?.remove()
    const buildings = [...new Set(['อาคาร 1','อาคาร 2','อาคาร 3','อาคาร 4','อาคาร 5','อาคาร 6',
      ...all.map(r => r.building)])]
    const modal = document.createElement('div')
    modal.id = 'crm-modal'
    modal.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4'
    modal.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-4">${room ? 'แก้ไขห้อง' : 'เพิ่มห้องใหม่'}</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร <span class="text-red-400">*</span></label>
          <select id="crm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
            ${buildings.map(b => `<option value="${b}" ${b === (room?.building ?? defaultBuilding) ? 'selected' : ''}>${b}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หมายเลขห้อง <span class="text-red-400">*</span></label>
          <input id="crm-number" type="text" value="${room?.room_number ?? ''}" placeholder="เช่น 531, 212-213"
            class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm font-mono" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง (ถ้ามี)</label>
          <input id="crm-name" type="text" value="${room?.name ?? ''}" placeholder="เช่น ห้องสมุด, ห้องพักครู"
            class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" id="crm-teaching" class="w-4 h-4 accent-emerald-600 rounded"
            ${(room?.is_teaching_room ?? true) ? 'checked' : ''} />
          <label for="crm-teaching" class="text-sm text-gray-700">เป็นห้องเรียน (ครูสามารถเลือกได้)</label>
        </div>
        <div class="flex gap-3 pt-2">
          <button id="crm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="crm-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>
    </div>`
    document.body.appendChild(modal)
    modal.querySelector('#crm-cancel').addEventListener('click', () => modal.remove())
    modal.querySelector('#crm-save').addEventListener('click', async () => {
      const btn = modal.querySelector('#crm-save')
      const building = modal.querySelector('#crm-building').value
      const number   = modal.querySelector('#crm-number').value.trim()
      const name     = modal.querySelector('#crm-name').value.trim() || null
      const teaching = modal.querySelector('#crm-teaching').checked
      if (!building || !number) { showToast('กรุณากรอกอาคารและหมายเลขห้อง', 'warning'); return }
      btn.disabled = true; btn.textContent = '⏳'
      try {
        if (room) {
          await updateClassroom(room.id, { building, room_number: number, name, is_teaching_room: teaching })
        } else {
          await createClassroom({ building, room_number: number, name, is_teaching_room: teaching })
        }
        showToast(room ? 'แก้ไขแล้ว ✅' : 'เพิ่มห้องแล้ว ✅', 'success')
        modal.remove()
        _reload()
      } catch (e) {
        showToast('บันทึกไม่สำเร็จ: ' + (e.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
    })
  }

  setContent(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">🚪 ห้องเรียน / แผนผังอาคาร</h2>
        <p class="text-xs text-gray-400 mt-0.5">จัดการหมายเลขห้องสำหรับครูเลือกระบุ</p>
      </div>
      <button id="crm-add-new" class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        ＋ เพิ่มห้องใหม่
      </button>
    </div>
    <div id="crm-content">
      <div class="flex justify-center py-8 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`)

  await _reload()
  document.getElementById('crm-add-new')?.addEventListener('click', async () => {
    const all = await getClassrooms().catch(() => [])
    _openForm(null, 'อาคาร 1', all)
  })
}
