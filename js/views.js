import { getStats, getTeachers, getClasses, getStudents,
         getSystemConfig, updateSystemConfig, getMasterSubjects,
         getDepartments, getPeriods, createSubject,
         updateClass, deleteClass,
         updateStudent, deleteStudent,
         getHomeroomTeachers, assignHomeroomTeacher, deleteHomeroomTeacher,
         getScoreColumnConfig, upsertScoreColumnConfig,
         getUniqueRooms, getUniqueReligionRooms, unlinkTeacherAccount, mergeTeacherAccounts,
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
         getUsageStats, getTeachersWithPositions,
         getClassrooms, createClassroom, updateClassroom, deleteClassroom,
         getRolePermissions, saveRolePermission,
         getAllAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement, getAnnouncementCommentsBulk,
         getAnnouncementComments, deleteAnnouncementComment,
         getHouseGroups, updateHouseGroupTeacher, assignStudentsHouseColor,
         autoEnrollStudentsByRoom,
         getAllAppFeedback, setFeedbackRead, setFeedbackCategory, setFeedbackStatusReply, deleteAppFeedback,
         advisorResetStudentPassword, markStudentPasswordResetNotice,
         getReligionGroups, createReligionGroup, updateReligionGroup, deleteReligionGroup,
         getReligionGroupMembers, setReligionGroupMembers,
         updateTeacherPosition, updateClassroomLeaders, getStudentByCode, getClassroomLeaders, updateClassroomCertToggle, updateAllClassroomCertsToggle } from './api.js'
import { renderLeaveMonitorWidget } from './leave-monitor.js?v=10.18.25'
import { renderCourseForm, renderClassForm, renderClassEditForm, renderScoreColumns } from './teacher-views.js'
import { showToast, showPageLoader, createTeacherSelect, createTeacherMultiSelect } from './ui.js'
import { openTeacherModal, handleDeleteTeacher,
         openSubjectModal, handleDeleteSubject,
         openDeptModal, handleDeleteDept,
         openPeriodModal, handleDeletePeriod } from './dashboard.js'
import { parseCSV, importTeachers, importStudents, buildPreviewHTML } from './import.js'
import { uploadSystemAsset, uploadStickerPng, compressImage, uploadAnnouncementImage } from './storage.js'
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
import { READING_GRADES, _readingGrade, applyReadingGradesFromConfig, _htmlEsc, _dateInputValue } from './teacher-views-utils.js'

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
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4" id="stat-grid">
      ${['teachers','students','classes','subjects','prayer'].map(k => `
        <button type="button" onclick="window._adminNav?.('${k === 'classes' ? 'classrooms-admin' : k === 'prayer' ? 'prayer-admin' : k}')"
          class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 text-left
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl
            ${k==='teachers'?'bg-indigo-100':k==='students'?'bg-purple-100':k==='classes'?'bg-blue-100':k==='subjects'?'bg-green-100':'bg-rose-100'}">
            ${{teachers:'👩‍🏫',students:'👦',classes:'🏫',subjects:'📚',prayer:'🕌'}[k]}
          </div>
          <div>
            <p class="text-xs text-gray-500">${{teachers:'ครูผู้สอน',students:'นักเรียน',classes:'ห้องเรียน',subjects:'รายวิชา',prayer:'คะแนนละหมาด'}[k]}</p>
            <p id="stat-${k}" class="text-2xl font-bold
              ${k==='teachers'?'text-indigo-700':k==='students'?'text-purple-700':k==='classes'?'text-blue-700':k==='subjects'?'text-green-700':'text-rose-700'}">—</p>
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
    <!-- Training announcements todo -->
    <div id="training-todo-shell" class="mt-4"></div>
    <div id="leave-monitor-shell" class="mt-4"></div>
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
    // ── Training todo widget ────────────────────────────────────────────────────
    const todoEl = document.getElementById('training-todo-shell')
    if (todoEl) {
      try {
        const { getAllAnnouncements, getAnnouncementRsvps } = await import('./api.js')
        const allAnns = await getAllAnnouncements()
        const today = new Date().toISOString().slice(0, 10)
        const trainings = allAnns.filter(a => a.ann_type === 'training' && a.is_active && a.event_date >= today)
          .sort((a, b) => a.event_date.localeCompare(b.event_date))
        if (trainings.length) {
          const rsvpData = await Promise.all(trainings.map(a => getAnnouncementRsvps(a.id).catch(() => [])))
          const _fmtD = d => new Date(d + 'T00:00:00').toLocaleDateString('th-TH', { weekday:'short', day:'numeric', month:'short' })
          const _esc2 = v => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;')
          todoEl.innerHTML = `
            <div class="bg-white rounded-2xl border border-violet-100 shadow-sm overflow-hidden">
              <div class="px-5 py-3.5 border-b border-violet-100 flex items-center justify-between bg-violet-50">
                <h4 class="font-bold text-violet-800 text-sm flex items-center gap-2">🎓 อบรม/กิจกรรมที่กำลังจะมาถึง <span class="px-2 py-0.5 bg-violet-200 text-violet-800 rounded-full text-xs font-bold">${trainings.length}</span></h4>
                <button onclick="window._adminNav?.('announcements')" class="text-xs text-violet-600 hover:text-violet-800 font-medium">จัดการ →</button>
              </div>
              <div class="divide-y divide-gray-50">
                ${trainings.map((a, i) => {
                  const rsvps = rsvpData[i] ?? []
                  const yes   = rsvps.filter(r => r.response === 'yes').length
                  const maybe = rsvps.filter(r => r.response === 'maybe').length
                  const no    = rsvps.filter(r => r.response === 'no').length
                  const total = rsvps.length
                  return `
                  <div class="px-5 py-3.5 flex items-center gap-4">
                    <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg">🎓</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-gray-800 truncate">${_esc2(a.title)}</p>
                      <p class="text-xs text-gray-500 mt-0.5">
                        📅 ${_fmtD(a.event_date)}
                        ${a.event_periods?.length ? ` · 🕐 คาบ ${a.event_periods.sort((x,y)=>x-y).join(',')}` : ''}
                        ${a.event_location ? ` · 📍 ${_esc2(a.event_location)}` : ''}
                      </p>
                    </div>
                    <div class="flex-shrink-0 flex items-center gap-2 text-xs">
                      ${total ? `
                        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-semibold">✅ ${yes}</span>
                        <span class="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold">🤔 ${maybe}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg font-semibold">❌ ${no}</span>
                      ` : `<span class="text-gray-400">ยังไม่มีผู้ตอบ</span>`}
                    </div>
                  </div>`
                }).join('')}
              </div>
            </div>`
        }
      } catch {}
    }

    const leaveMonitorEl = document.getElementById('leave-monitor-shell')
    if (leaveMonitorEl) {
      await renderLeaveMonitorWidget(leaveMonitorEl, {
        title: '🚪 ติดตามใบอนุญาตออกนอกห้อง',
        subtitle: 'ข้อมูลรายวัน สำหรับแอดมินและผู้บริหาร',
        externalUrl: 'public-monitor.html'
      })
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
  // W = สัปดาห์ปัจจุบันจากวันเปิดภาคเรียน (ถ้าตั้งค่าไว้) หรือ max จาก records
  const W = semStart ? _currentWeek(semStart) : (Math.max(...allWeeks, 0))
  // สร้าง weeks จาก 1 ถึง W (ไม่ใช่แค่สัปดาห์ที่มีข้อมูล) เพื่อให้เลือกได้ทุกสัปดาห์
  const weeks = W > 0
    ? Array.from({ length: W }, (_, i) => i + 1)
    : [...allWeeks].sort((a,b)=>a-b)
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
      <div class="hr-sel-wrap flex-1 min-w-0"></div>
      <button class="hr-save-btn text-[10px] px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 flex-shrink-0"
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

  // ── Dashboard summary (dynamic — updates with week selector) ─────────────────
  const checkW        = W > 0 ? W - 1 : 0
  const totalRooms    = rooms.filter(r => roomStudents[r]?.length > 0).length
  const totalStudents = rooms.reduce((s,r) => s+(roomStudents[r]?.length??0), 0)

  // SVG donut chart
  const _donut = (pct, color, size=72) => {
    const r = 26, cx = 36, cy = 36, circ = 2*Math.PI*r
    const fill = circ * pct / 100
    return `<svg width="${size}" height="${size}" viewBox="0 0 72 72">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#f3f4f6" stroke-width="8"/>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="8"
        stroke-dasharray="${fill} ${circ}" stroke-dashoffset="${circ/4}" stroke-linecap="round"/>
      <text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="14" font-weight="700" fill="${color}">${pct}%</text>
    </svg>`
  }

  const _renderDashboard = (w) => {
    const dashEl = container.querySelector('#prayer-dashboard')
    if (!dashEl) return
    if (weeks.length === 0) {
      dashEl.innerHTML = `<div class="mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">ℹ️ ยังไม่มีข้อมูลการบันทึกละหมาด</div>`
      return
    }
    if (!w) return
    const recPending = rooms.filter(r => { const t=roomStudents[r].length; return t>0 && (weekRoomRec[r]?.[w]?.size??0)<t })
    const recDone    = rooms.filter(r => { const t=roomStudents[r].length; const d=weekRoomRec[r]?.[w]?.size??0; return t>0 && d>=t })
    const fwPending  = rooms.filter(room => {
      const absentPrev = weekRoomAbsent[room]?.[w-1]
      if (!absentPrev?.size) return false
      return [...absentPrev].some(sid => {
        const recs = records.filter(rec => rec.main_room===room && rec.week_number===w && rec.student_id===sid)
        return !recs.some(rec => rec.status==='followed'||rec.status==='avoid')
      })
    })
    const doneC = recDone.length
    const pendC = recPending.length
    const recStu = rooms.reduce((s,r) => s+(weekRoomRec[r]?.[w]?.size??0), 0)
    const pct = totalRooms > 0 ? Math.round(doneC/totalRooms*100) : 0
    dashEl.innerHTML = `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-gray-800">${totalRooms}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">ห้องทั้งหมด</p>
      </div>
      <div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-emerald-600">${doneC}</p>
        <p class="text-[11px] text-emerald-500 mt-0.5">บันทึกครบแล้ว</p>
      </div>
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-amber-600">${pendC}</p>
        <p class="text-[11px] text-amber-500 mt-0.5">ยังค้างอยู่</p>
      </div>
      <div class="bg-indigo-50 rounded-2xl border border-indigo-200 shadow-sm p-4 text-center">
        <p class="text-2xl font-extrabold text-indigo-600">${recStu}</p>
        <p class="text-[11px] text-indigo-400 mt-0.5">นักเรียนที่บันทึกแล้ว / ${totalStudents}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-4">
        ${_donut(pct, pct>=100?'#10b981':pct>=50?'#f59e0b':'#ef4444')}
        <div>
          <p class="text-sm font-bold text-gray-700">สัปดาห์ที่ ${w}</p>
          <p class="text-xs text-gray-400 mt-0.5">${doneC} / ${totalRooms} ห้อง บันทึกครบ</p>
          ${fwPending.length>0?`<p class="text-xs text-red-500 mt-1">⚠️ ติดตามค้าง ${fwPending.length} ห้อง</p>`:''}
          ${pct>=100?`<p class="text-xs text-emerald-600 mt-1 font-semibold">✅ ครบทุกห้องแล้ว!</p>`:''}
        </div>
      </div>
      ${pendC > 0 ? `
      <div class="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-4">
        <p class="text-xs font-bold text-amber-800 mb-2">📋 ห้องที่ยังไม่กรอก (${pendC})</p>
        <div class="space-y-1 max-h-32 overflow-y-auto pr-1">
          ${recPending.map(r => {
            const t = roomStudents[r].length
            const d = weekRoomRec[r]?.[w]?.size ?? 0
            const p2 = Math.round(d/t*100)
            const tn = teacherByRoom[r]
            return `<div class="flex items-center gap-2 text-[11px]">
              <div class="flex-1 min-w-0">
                <span class="font-medium text-amber-900 truncate block">${r}</span>
                ${tn?`<span class="text-amber-600 truncate block">${tn}</span>`:''}
              </div>
              <span class="flex-shrink-0 font-bold ${p2===0?'text-red-500':'text-amber-600'}">${d}/${t}</span>
              <div class="w-10 bg-amber-100 rounded-full h-1.5 flex-shrink-0">
                <div class="h-1.5 rounded-full ${p2===0?'bg-red-400':'bg-amber-400'}" style="width:${p2}%"></div>
              </div>
            </div>`
          }).join('')}
        </div>
      </div>` : `<div class="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 flex items-center gap-3">
        <span class="text-3xl">✅</span>
        <div><p class="font-bold text-emerald-700 text-sm">บันทึกครบทุกห้องแล้ว</p>
          <p class="text-xs text-emerald-500 mt-0.5">สัปดาห์ที่ ${w}</p></div>
      </div>`}
    </div>`
  }

  container.innerHTML = `
    <div id="prayer-dashboard"></div>
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
    if (tab === 'record') _renderDashboard(selWeek ?? checkW)
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
  renderTab('record', checkW)
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

  // init searchable teacher select สำหรับแต่ละ picker
  const _hrSelMap = {}
  container.querySelectorAll('.hr-sel-wrap').forEach(wrap => {
    const picker = wrap.closest('[id^="pick-"]')
    if (!picker) return
    _hrSelMap[picker.id] = createTeacherSelect({ wrap, teachers: allTeachers, value: null, placeholder: 'ค้นหาชื่อหรือรหัสครู...' })
  })

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
      const teacherId = _hrSelMap[pickerId]?.getValue()
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
          <p class="text-xs text-gray-400 mt-0.5">จัดการบัญชีและแผนกของครูในระบบ</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="teacher-export-csv"
            class="text-xs font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl transition">
            ⬇️ ดาวน์โหลด CSV
          </button>
          <button onclick="openTeacherModal()"
            class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
            <span>＋</span> เพิ่มครูใหม่
          </button>
        </div>
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
    let currentRows = all

    // Full teacher impersonation: server validates the admin and records an audit session.
    window._impersonateTeacher = async (teacherId) => {
      const t = all.find(x => x.id === teacherId)
      if (!t) { showToast('ไม่พบข้อมูลครู', 'error'); return }
      try {
        const { startImpersonation } = await import('./impersonation.js')
        await startImpersonation(supabase, t)
        window.location.href = 'teacher.html'
      } catch (error) {
        console.error('Cannot start impersonation:', error)
        const needsBackend = /function|schema cache|start_admin_impersonation|edge/i.test(error?.message || '')
        showToast(needsBackend
          ? 'ระบบสวมบทบาทฝั่งเซิร์ฟเวอร์ยังไม่พร้อม กรุณารัน SQL และ deploy ฟังก์ชัน admin-impersonate'
          : (error?.message || 'ไม่สามารถเริ่มโหมดสวมบทบาทได้'), 'error')
      }
    }

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
      currentRows = rows
      renderTeacherTable(rows)
    }
    ['tf-q','tf-dept','tf-skill','tf-subg','tf-type'].forEach(id => {
      document.getElementById(id)?.addEventListener('input',  _filter)
      document.getElementById(id)?.addEventListener('change', _filter)
    })

    document.getElementById('teacher-export-csv')?.addEventListener('click', () => {
      const group = t => {
        if (['ACDMVOC','AGMVOC'].includes(t.subject_group)) return 'ปวช'
        if (t.category === 'ศาสนา') return 'ศาสนา'
        if (t.category === 'สามัญ' || t.subject_group) return 'สามัญ'
        return '-'
      }
      const head = ['ลำดับ', 'รหัสครู', 'ชื่อสกุล', 'กลุ่มครู', 'เบอร์ติดต่อ']
      const body = currentRows.map((t, i) => [i + 1, t.teacher_code ?? '', t.full_name ?? '', group(t), t.phone ?? ''])
      const csv = '﻿' + [head, ...body]
        .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        .join('\n')
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'รายชื่อครู-บุคลากร.csv'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      showToast('ดาวน์โหลด CSV แล้ว ✅', 'success')
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
              <button onclick="window._impersonateTeacher(${t.id})"
                class="text-xs text-orange-500 hover:text-orange-700 font-medium mr-3">🎭 สวมบทบาท</button>
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

    // ── Detect duplicate teachers (same full_name, different id) ──────────────
    const _nameMap = {}
    for (const t of all) {
      // normalize: lowercase + ลบช่องว่างทุกตำแหน่ง เพื่อจับคู่ "นาย ตาร์มิซี" = "นายตาร์มิซี"
      const key = (t.full_name ?? '').toLowerCase().replace(/\s+/g, '')
      if (!key) continue
      if (!_nameMap[key]) _nameMap[key] = []
      _nameMap[key].push(t)
    }
    const duplicateGroups = Object.values(_nameMap)
      .filter(g => g.length > 1)
      .map(g => g.slice().sort((a, b) => (a.registered_at ?? '') < (b.registered_at ?? '') ? -1 : 1))

    setContent(`<div class="max-w-6xl mx-auto animate-fade space-y-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ติดตามสถานะการลงทะเบียนของครูและบุคลากร</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-3">
        ${statCard('all', 'ทั้งหมด', all.length, 'bg-indigo-100 text-indigo-700')}
        ${statCard('registered', 'มีบัญชีแล้ว', registered.length, 'bg-emerald-100 text-emerald-700')}
        ${statCard('unregistered', 'ยังไม่ลงทะเบียน', unregistered.length, 'bg-amber-100 text-amber-700')}
        ${statCard('duplicates', `บัญชีซ้ำ`, duplicateGroups.length,
            duplicateGroups.length > 0 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-400')}
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

      <!-- Table (hidden when showing duplicates) -->
      <div id="rt-main-section">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div id="reg-teacher-table"></div>
        </div>
      </div>

      <!-- Duplicate accounts section -->
      <div id="rt-duplicates-section" class="hidden space-y-4">
        <div class="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 text-sm text-red-700">
          ⚠️ พบชื่อครูที่ซ้ำกันในระบบ กรุณาตรวจสอบและเลือก <strong>บัญชีที่ต้องการเก็บไว้</strong>
          ระบบจะย้ายข้อมูลทั้งหมด (คอร์ส, ตารางสอน, ห้องเรียน) ไปยังบัญชีนั้น แล้วลบอีกบัญชีออก
        </div>
        <div id="rt-dup-list" class="space-y-4"></div>
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

    const _dupClassCount = (t) => classCountByTeacher.get(t.id) ?? 0
    const _dupSchedCount = (t) => scheduledSet.has(t.id) ? '✓' : '—'

    const renderDuplicates = () => {
      const list = document.getElementById('rt-dup-list')
      if (!list) return
      if (!duplicateGroups.length) {
        list.innerHTML = `<div class="text-center py-12 text-gray-400">
          <p class="text-3xl mb-2">✅</p><p>ไม่พบบัญชีซ้ำ</p></div>`
        return
      }
      list.innerHTML = duplicateGroups.map((group, gi) => {
        const rows = group.map((t, ti) => `
          <label class="flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition
            ${ti === 0 ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200 hover:border-emerald-200'}
            has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50">
            <input type="radio" name="dup-keep-${gi}" value="${t.id}"
              class="mt-1 accent-emerald-600" ${ti === 0 ? 'checked' : ''} />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${t.image_url ? `<img src="${t.image_url}" class="w-7 h-7 rounded-full object-cover" />` : ''}
                <span class="font-semibold text-gray-800">${_htmlEsc(t.full_name ?? '—')}</span>
                <span class="text-xs font-mono text-indigo-500">${t.teacher_code ?? '—'}</span>
                ${t.profile_id
                  ? `<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">มีบัญชี ✓</span>`
                  : `<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ยังไม่ลง</span>`}
              </div>
              <div class="text-xs text-gray-500 mt-1 flex gap-4 flex-wrap">
                <span>📚 คอร์ส ${_dupClassCount(t)}</span>
                <span>🗓️ ตาราง ${_dupSchedCount(t)}</span>
                ${t.login_email ? `<span>✉️ ${_htmlEsc(t.login_email)}</span>` : ''}
                ${t.registered_at ? `<span>📅 ${new Date(t.registered_at).toLocaleDateString('th-TH')}</span>` : ''}
                <span class="text-gray-300">ID: ${t.id}</span>
              </div>
            </div>
          </label>`).join('')
        const mergeIds = group.map(t => t.id).join(',')
        return `
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" data-dup-group="${gi}">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              กลุ่มที่ ${gi + 1} — ${_htmlEsc(group[0].full_name ?? '')}
              <span class="ml-2 text-red-500">(${group.length} บัญชี)</span>
            </p>
            <p class="text-xs text-gray-400 mb-3">เลือก ✅ <strong>บัญชีที่ต้องการเก็บ</strong> (ข้อมูลทั้งหมดจะรวมเข้าบัญชีนี้)</p>
            <div class="space-y-2">${rows}</div>
            <button
              class="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              onclick="window._mergeDupGroup(${gi},'${mergeIds}')">
              🔀 รวมบัญชีและลบบัญชีซ้ำ
            </button>
          </div>`
      }).join('')
    }

    window._mergeDupGroup = async (gi, idsStr) => {
      const ids = idsStr.split(',').map(Number)
      const keepId = Number(document.querySelector(`input[name="dup-keep-${gi}"]:checked`)?.value)
      if (!keepId) { showToast('เลือกบัญชีที่ต้องการเก็บก่อน', 'warning'); return }
      const mergeIds = ids.filter(id => id !== keepId)
      if (!mergeIds.length) { showToast('ไม่มีบัญชีซ้ำที่จะลบ', 'info'); return }
      const keepTeacher = all.find(t => t.id === keepId)
      if (!confirm(`ยืนยันรวมบัญชี?\n\nเก็บ: ${keepTeacher?.full_name} (ID ${keepId})\nลบ: ID ${mergeIds.join(', ')}\n\nข้อมูลคอร์ส/ตารางสอนจากบัญชีที่ถูกลบจะย้ายมารวมที่บัญชีที่เก็บ`)) return
      const btn = document.querySelector(`[data-dup-group="${gi}"] button`)
      if (btn) { btn.disabled = true; btn.textContent = '⏳ กำลังรวม...' }
      try {
        for (const mergeId of mergeIds) {
          await mergeTeacherAccounts(keepId, mergeId)
        }
        showToast(`รวมบัญชีสำเร็จ — เหลือ ID ${keepId}`, 'success')
        renderRegisteredTeachers()
      } catch (err) {
        showToast('เกิดข้อผิดพลาด: ' + (err.message ?? ''), 'error')
        if (btn) { btn.disabled = false; btn.textContent = '🔀 รวมบัญชีและลบบัญชีซ้ำ' }
      }
    }

    const setAccountTab = (tab) => {
      const isDup = tab === 'duplicates'
      document.getElementById('rt-main-section')?.classList.toggle('hidden', isDup)
      document.getElementById('rt-duplicates-section')?.classList.toggle('hidden', !isDup)
      document.getElementById('rt-schedule-stats')?.classList.toggle('hidden', true)
      if (isDup) {
        activeTab = 'duplicates'
        scheduleFilter = null
        updateStatCards()
        renderDuplicates()
        return
      }
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
                  ? `<img src="${s.image_url}" class="student-avatar-premium" />`
                  : `<div class="student-avatar-premium-placeholder text-white bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
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

    window._editStudent = async (id) => {
      const s = studentCache[id]; if (!s) return
      let currentEmail = ''
      try {
        const { data, error } = await supabase.rpc('lookup_student_by_code', { p_student_code: s.student_code })
        if (!error && data && data[0]) {
          currentEmail = data[0].login_email || ''
        }
      } catch (e) {
        console.error(e)
      }

      _openStudentModal(s, currentEmail, async (payload, authPayload) => {
        // Save basic profile
        await updateStudent(id, payload)
        
        // Save email/password if modified
        if (authPayload && (authPayload.email || authPayload.password)) {
          const { error } = await supabase.rpc('admin_update_student_auth', {
            p_student_id: id,
            p_new_email: authPayload.email || null,
            p_new_password: authPayload.password || null
          })
          if (error) throw error
        }

        Object.assign(s, payload)
        studentCache[id] = s
        _filter()
      })
    }

    function _openStudentModal(s, currentEmail, onSave) {
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
              
              <!-- Auth Accounts Section -->
              <div class="border-t border-gray-100 my-4 pt-3">
                <p class="text-xs font-bold text-indigo-600 mb-2 flex items-center gap-1">🔒 บัญชีผู้ใช้งานนักเรียน</p>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1">อีเมลเข้าใช้งาน (แก้ไขกู้คืน)</label>
                    <input id="sf-auth-email" type="email" value="${s.profile_id ? currentEmail : `stu${s.student_code}@student.pp5.local`}"
                      class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full bg-gray-50 text-gray-600" />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1">${s.profile_id ? 'ตั้งรหัสผ่านใหม่ (ระบุเมื่อต้องการเปลี่ยน)' : 'ตั้งรหัสผ่านเริ่มต้น (จะเปิดบัญชีให้อัตโนมัติ)'}</label>
                    <div class="flex gap-2">
                      <input id="sf-auth-pw" type="text" placeholder="อย่างน้อย 6 ตัวอักษร"
                        class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm w-full" />
                      <button type="button" id="sf-auth-pw-fill" title="ใช้รหัสนักเรียนเป็นรหัสผ่าน"
                        class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-indigo-200 text-indigo-600 text-xs font-semibold hover:bg-indigo-50 transition whitespace-nowrap">
                        🔄 = รหัสนักเรียน
                      </button>
                    </div>
                    <p class="text-[11px] text-gray-400 mt-1">
                      ${s.profile_id
                        ? 'กรอกแล้วกดบันทึก จะเปลี่ยนรหัสผ่านทันที นักเรียนใช้ชุดใหม่นี้เข้าระบบครั้งถัดไปได้เลย'
                        : 'นักเรียนคนนี้ยังไม่เคยเปิดบัญชี — ระบุรหัสผ่านแล้วกดบันทึก ระบบจะสร้างบัญชีให้อัตโนมัติ ไม่ต้องรอนักเรียนเปิดเอง'}
                    </p>
                  </div>
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
      m.querySelector('#sf-auth-pw-fill').addEventListener('click', () => {
        m.querySelector('#sf-auth-pw').value = m.querySelector('#sf-code').value.trim()
      })
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
          const emailVal = m.querySelector('#sf-auth-email').value.trim() || null
          const pwVal    = m.querySelector('#sf-auth-pw').value.trim() || null
          if (!s.profile_id && !pwVal) {
            showToast('กรุณาระบุรหัสผ่านเริ่มต้นสำหรับนักเรียนที่ยังไม่เคยเปิดบัญชีก่อนบันทึกครับ', 'warning')
            btn.disabled = false; btn.textContent = 'บันทึก'
            return
          }
          const authPayload = (emailVal || pwVal) ? { email: emailVal, password: pwVal } : null

          await onSave(payload, authPayload)
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
      getTeachersWithPositions().catch(() => []),
    ])
    // ค่าเริ่มต้นโควต้า feedback — ให้ dropdown แสดงค่าที่ระบบใช้จริงตอนยังไม่เคยตั้งค่า
    cfg.feedbackQuotaTeacher = cfg.feedbackQuotaTeacher || '5'
    cfg.feedbackQuotaStudent = cfg.feedbackQuotaStudent || '3'
    cfg.freeAttendanceScanLimit = cfg.freeAttendanceScanLimit || '2'
    cfg.freeRandomPickerLimit = cfg.freeRandomPickerLimit || '1'
    cfg.freeTimerLimit = cfg.freeTimerLimit || '1'
    cfg.freeDashboardLimit = cfg.freeDashboardLimit || '0'
    cfg.freePromptAiLimit = cfg.freePromptAiLimit || '1'
    // รวม dept codes จาก departments table + teachers.dept + ที่รู้จักแน่นอน
    const KNOWN_DEPT_CODES = ['MATH','SC','ENG','THAI','SOC','ART','HEALTH','OCC','VOC',
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

    window._testGeminiKey = async (btn, inputId, statusId) => {
      const apiKey = document.getElementById(inputId)?.value?.trim()
      const statusEl = document.getElementById(statusId)
      if (!apiKey) { statusEl.textContent = '⚠️ ยังไม่ได้ใส่ Key'; statusEl.className = 'text-xs text-amber-500 font-medium'; return }
      btn.textContent = '⏳'; btn.disabled = true
      try {
        const model = document.getElementById('cfg-geminiModel')?.value?.trim() || 'gemini-1.5-flash'
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          { method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: 'hi' }] }] }) }
        )
        if (res.ok) {
          statusEl.textContent = '✅ ใช้งานได้'
          statusEl.className = 'text-xs text-emerald-600 font-semibold'
        } else {
          const d = await res.json().catch(() => ({}))
          const msg = d.error?.message ?? `HTTP ${res.status}`
          statusEl.textContent = `❌ ${msg.slice(0, 60)}`
          statusEl.className = 'text-xs text-red-500 font-medium'
        }
      } catch (e) {
        statusEl.textContent = '❌ เชื่อมต่อไม่ได้'
        statusEl.className = 'text-xs text-red-500 font-medium'
      }
      btn.textContent = 'ทดสอบ'; btn.disabled = false
    }

    const fld = ({ key, label, type, options, placeholder, hint, rows, syncFrom }) => {
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

      if (type === 'password') {
        const isGemini = /^(geminiApiKey|donationGeminiKey\d+|geminiKey_.+)$/.test(key)
        const toggleJs = `const i=document.getElementById('cfg-${key}');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'ดู':'ซ่อน'`
        const testBtn = isGemini
          ? `<button type="button"
               class="px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 text-xs text-sky-700 hover:bg-sky-100 font-medium whitespace-nowrap transition"
               onclick="window._testGeminiKey(this,'cfg-${key}','cfg-${key}-st')">ทดสอบ</button>
             <span id="cfg-${key}-st" class="text-xs text-gray-400"></span>`
          : ''
        return wrap(`
          <div class="flex gap-2 flex-wrap items-center">
            <input type="password" ${base} value="${val}" class="${INPUT} flex-1 min-w-[180px]" placeholder="AIza..." autocomplete="off" />
            <button type="button" class="px-4 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 font-medium"
              onclick="${toggleJs}">ดู</button>
            ${testBtn}
          </div>
          <p class="text-[11px] text-amber-600 mt-1">⚠️ เก็บเป็นความลับ — ห้ามแชร์</p>`, hint)
      }

      // default text (+ sync button จาก position ถ้ามี syncFrom)
      if (syncFrom) return wrap(`
        <div class="flex gap-2 items-center">
          <input type="text" ${base} value="${val ?? ''}" placeholder="${placeholder ?? ''}" class="${INPUT} flex-1" />
          <button type="button"
            class="flex-shrink-0 px-3 py-2 rounded-xl border border-indigo-200 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold transition whitespace-nowrap"
            onclick="window._syncPositionToField('${syncFrom}','${key}',this)">
            📥 ดึงจากบทบาท
          </button>
        </div>`, hint)
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
      { id:'council',  icon:'🏛️', label:'สภานักเรียน' },
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
          { key:`${prefix}DirectorTitle`,       label:'ชื่อตำแหน่งที่พิมพ์ในเอกสาร', type:'text', placeholder:'ผู้อำนวยการ',
            hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "ผู้อำนวยการ" เป็นค่าเริ่มต้น' },
          { key:`${prefix}AcademicHeadName`,    label: prefix === 'samai' ? 'หัวหน้าวิชาการ (สามัญ)' : 'หัวหน้าวิชาการ', type:'text',
            syncFrom: prefix === 'samai' ? 'academic_samai' : 'academic_pvch' },
          { key:`${prefix}AcademicHeadSignUrl`, label: prefix === 'samai' ? 'ลายเซ็นหัวหน้าวิชาการ (สามัญ)' : 'ลายเซ็นหัวหน้าวิชาการ', type:'upload' },
          { key:`${prefix}AcademicHeadTitle`,   label:'ชื่อตำแหน่งที่พิมพ์ในเอกสาร', type:'text', placeholder:'หัวหน้าฝ่ายบริหารวิชาการ',
            hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้าฝ่ายบริหารวิชาการ" เป็นค่าเริ่มต้น' },
          ...(prefix === 'samai' ? [
            { key:'agmAcademicHeadName',    label:'หัวหน้าวิชาการ (ศาสนา)', type:'text',
              syncFrom:'academic_religion', hint:'ใช้ในเอกสารรายวิชาศาสนา (AGM)' },
            { key:'agmAcademicHeadSignUrl', label:'ลายเซ็นหัวหน้าวิชาการ (ศาสนา)', type:'upload' },
            { key:'agmAcademicHeadTitle',   label:'ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)', type:'text', placeholder:'หัวหน้าฝ่ายบริหารวิชาการ' },
          ] : []),
          { key:`${prefix}RegistrarName`,       label: prefix === 'samai' ? 'หัวหน้าฝ่ายทะเบียน (สามัญ)' : 'หัวหน้าฝ่ายทะเบียน', type:'text',
            syncFrom: prefix === 'samai' ? 'registrar_samai' : 'registrar_pvch' },
          { key:`${prefix}RegistrarSignUrl`,    label: prefix === 'samai' ? 'ลายเซ็นหัวหน้าฝ่ายทะเบียน (สามัญ)' : 'ลายเซ็นหัวหน้าฝ่ายทะเบียน', type:'upload' },
          { key:`${prefix}RegistrarTitle`,      label:'ชื่อตำแหน่งที่พิมพ์ในเอกสาร', type:'text', placeholder:'หัวหน้างานวัดผลและประเมินผล',
            hint:'ข้อความใต้ลายเซ็นในเอกสาร ปพ.5 — ไม่กรอกจะใช้ "หัวหน้างานวัดผลและประเมินผล" เป็นค่าเริ่มต้น' },
          ...(prefix === 'samai' ? [
            { key:'agmRegistrarName',    label:'หัวหน้าฝ่ายทะเบียน (ศาสนา)', type:'text',
              syncFrom:'registrar_religion', hint:'ใช้ในเอกสารรายวิชาศาสนา (AGM)' },
            { key:'agmRegistrarSignUrl', label:'ลายเซ็นหัวหน้าฝ่ายทะเบียน (ศาสนา)', type:'upload' },
            { key:'agmRegistrarTitle',   label:'ชื่อตำแหน่งที่พิมพ์ในเอกสาร (ศาสนา)', type:'text', placeholder:'หัวหน้างานวัดผลและประเมินผล' },
          ] : []),
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
        section('การคำนวณคะแนนมาเรียน (วิชาศาสนา)', [
          { key:'attendanceScoreMode', label:'ตัวหารของคะแนนมาเรียน', type:'select',
            options: [
              { value:'recorded', label:'จำนวนคาบที่บันทึกนักเรียนคนนั้น (ค่าเดิม)' },
              { value:'total',    label:'จำนวนคาบทั้งหมดในหน้าเช็คชื่อของห้อง' },
            ],
            hint:'หลังเปลี่ยนค่า ต้องกดปุ่ม "เติมคะแนน" ใหม่เพื่อให้มีผลกับคะแนนใน ปพ.5' },
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
        section('โควต้าการส่ง Feedback ถึงแอดมิน (ต่อคน/เดือน)', [
          { key:'feedbackQuotaTeacher', label:'จำนวนครั้งสูงสุด — ครู', type:'select',
            options: Array.from({ length: 15 }, (_, i) => String(i + 1)),
            hint:'ค่าเริ่มต้น 5 ครั้ง/เดือน — เมื่อครบโควต้า ระบบจะแนะนำให้ติดต่อผ่าน LINE OA ด้านบนแทน' },
          { key:'feedbackQuotaStudent', label:'จำนวนครั้งสูงสุด — นักเรียน', type:'select',
            options: Array.from({ length: 15 }, (_, i) => String(i + 1)),
            hint:'ค่าเริ่มต้น 3 ครั้ง/เดือน' },
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
            section('โควตาทดลองใช้งานฟรี (สำหรับครูทั่วไป)', [
              { key:'freeAttendanceScanLimit', label:'สแกน QR เช็คชื่อรายคาบ (ครั้ง/สัปดาห์)', type:'text', placeholder:'2',
                hint:'จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถใช้กล้องสแกน QR Code เช็คชื่อได้ (ค่าเริ่มต้นคือ 2)' },
              { key:'freeRandomPickerLimit', label:'สุ่มรายชื่อนักเรียน (ครั้งตลอดชีพ)', type:'text', placeholder:'1',
                hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสุ่มรายชื่อได้ (ค่าเริ่มต้นคือ 1)' },
              { key:'freeTimerLimit', label:'จับเวลาเต็มจอ (ครั้งตลอดชีพ)', type:'text', placeholder:'1',
                hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองใช้ฟีเจอร์จับเวลาเต็มจอได้ (ค่าเริ่มต้นคือ 1)' },
              { key:'freeDashboardLimit', label:'เข้าดูแดชบอร์ดห้องเรียน (ครั้ง/สัปดาห์)', type:'text', placeholder:'0',
                hint:'จำนวนครั้งต่อสัปดาห์ที่ครูทั่วไปสามารถเข้าดูหน้า Dashboard ได้ (ใส่ 0 หรือเว้นว่างเพื่อไม่ให้ดูฟรีเลย)' },
              { key:'freePromptAiLimit', label:'สร้าง Prompt AI (ครั้งตลอดชีพ)', type:'text', placeholder:'1',
                hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถทดลองสร้าง Prompt AI ได้ (ค่าเริ่มต้นคือ 1)' },
              { key:'quizFreeStartLimit', label:'เริ่มสอบจริงในระบบ Quiz (ครั้งตลอดชีพ)', type:'text', placeholder:'2',
                hint:'จำนวนครั้งทั้งหมดที่ครูทั่วไปสามารถกด "เริ่มสอบ" ให้นักเรียนทำจริงได้ (ค่าเริ่มต้นคือ 2) — สร้างคลังข้อสอบ/ตั้งค่า/ทดลองทำเองไม่จำกัดเสมอ นับจากบัญชีจริง ไม่ใช่ localStorage เหมือนโควตาอื่นในหมวดนี้' },
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
                ['✍️','ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว',3],
                ['📊','Dashboard วิเคราะห์ภาพรวมห้องเรียน',2],
                ['🤖','AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง',3],
                ['🧭','AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา',4],
                ['⚡','Early Access ฟีเจอร์ใหม่ก่อนใคร',5],
                ['📲','แจ้งเตือนอัตโนมัติ Telegram/LINE',5],
                ['🎲','สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน',1],
                ['👑','Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด',4],
                ['✨','ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว',2],
                ['💬','แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์',1],
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
                <div class="feat-row flex items-center gap-2 p-2 bg-gray-50 rounded-xl" data-idx="${i}" data-min-tier="${f.minTier}">
                  <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white"
                    value="${f.icon}" placeholder="🏅" maxlength="4" />
                  <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white min-w-0"
                    value="${f.text}" placeholder="ชื่อฟีเจอร์" />
                  <div class="flex gap-1 flex-shrink-0">
                    ${[1,2,3,4,5].map(n => `
                    <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
                      style="${tierBtnStyle(n, f.minTier===n)}" data-n="${n}" title="ระดับ ${n}">${n}</button>`).join('')}
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
            section('👑 หน้าอธิบายฟีเจอร์ Smart Classroom', [
              { key:'smartClassroomLandingTitle', label:'หัวข้อหลัก', type:'text', placeholder:'Smart Classroom — หน้าควบคุมขณะสอนสด' },
              { key:'smartClassroomLandingDesc', label:'คำอธิบาย', type:'textarea', rows:5,
                placeholder:'รวมเช็คชื่อ จับเวลา สุ่มรายชื่อ Hall Pass เปิดควิซสด และอีกมากมาย ไว้จอเดียว...',
                hint:'ข้อความนี้จะแสดงในหน้าอธิบายฟีเจอร์ก่อนครูกด "เริ่มใช้งาน"' },
              { key:'smartClassroomLandingImg1', label:'รูปภาพประกอบ 1', type:'upload' },
              { key:'smartClassroomLandingImg2', label:'รูปภาพประกอบ 2', type:'upload' },
              { key:'smartClassroomLandingImg3', label:'รูปภาพประกอบ 3', type:'upload' },
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
        section('QR Code นักเรียน (เช็คชื่อละหมาด)', [
          { key:'studentQrDailyLimit', label:'จำกัดจำนวนครั้งที่สร้างต่อวัน', type:'text',
            placeholder:'เช่น 3', description:'ระบุจำนวนครั้งสูงสุดที่อนุญาตให้นักเรียนกดสร้าง QR Code ต่อวัน (ค่าเริ่มต้นคือ 3 ครั้ง)' },
          { key:'studentQrExpirySeconds', label:'อายุการใช้งานของ QR Code (วินาที)', type:'text',
            placeholder:'เช่น 60', description:'ระบุเวลาหมดอายุของ QR Code หน่วยเป็นวินาที (ค่าเริ่มต้นคือ 60 วินาที)' },
        ]),
        section('ออก QR Code ใหม่ (กรณีทำหาย/ชำรุด)', [
          { key:'qrReissueFee', label:'ค่าธรรมเนียมออกใหม่ (บาท)', type:'text',
            placeholder:'เช่น 5', description:'จำนวนเงินที่แสดงในใบเสร็จตอนครูออก QR Code ใหม่ให้นักเรียน (ค่าเริ่มต้นคือ 5 บาท)' },
          { key:'qrReissueDoneMessage', label:'ข้อความแจ้งนักเรียนตอนทำเสร็จแล้ว', type:'text',
            placeholder:'ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง',
            description:'ข้อความที่จะส่งกลับเข้าแท็บ "ประวัติของฉัน" ของนักเรียนอัตโนมัติ ทันทีที่แอดมิน/ครูกด "ทำเสร็จแล้ว" ในแท็บคำขอใหม่ (ค่าเริ่มต้น: มารับได้ที่ห้องปกครอง)' },
        ]),
        section('ตัวเลือกบังคับเกรด (คอลัมน์บังคับเกรดในหน้าคะแนน)', [
          { key:'forceGradeOptions', label:'รายการเกรด (คั่นด้วยจุลภาค)', type:'text',
            placeholder:'เช่น 0,ร,มส,มผ', description:'ค่าเริ่มต้น: 0,ร,มส,มผ — ครูจะเห็นเป็นตัวเลือกเมื่อกดบังคับเกรดนักเรียน' },
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
        </div>
        <div id="student-sync-log-section" class="mt-3 rounded-2xl border border-gray-100 bg-white p-4 hidden">
          <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">ประวัติการซิงก์ล่าสุด</p>
          <div id="student-sync-log-content" class="text-sm text-gray-700 space-y-2"></div>
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

      if (tabId === 'template') return [
        section('', [
          { key:'pp5PreviewEditEnabled', label:'ให้ครูแก้ไขข้อความในหน้าพรีวิว ปพ.5 ได้', type:'toggle',
            hint:'เปิดแล้วครูจะมีปุ่ม "✏️ แก้ไขข้อความ" ในหน้าพรีวิวเอกสาร แก้ได้เฉพาะตอนดู/พิมพ์ครั้งนี้ ไม่มีผลกับข้อมูลจริงในระบบ' },
        ]),
        `<p class="text-xs text-gray-400 mb-5">ใส่ Google Drive File ID ของไฟล์ต้นแบบ ปพ.5 แต่ละประเภท</p>
        ${COPY_TEMPLATE_CONFIG.map(t => fld({
          key: t.key,
          label: `${t.category} — ${t.label}`,
          type: 'text',
          placeholder: t.defaultId,
          hint: `default: ${t.defaultId}`,
        })).join('')}`,
      ].join('')

      if (tabId === 'phrases') return _renderPhrasesPanel()

      if (tabId === 'schedule') return [
        section('การแสดงผลตาราง', [
          { key:'hasFriday', label:'เปิดสอนวันศุกร์', type:'toggle',
            hint:'เปิดเพื่อแสดงคอลัมน์วันศุกร์ในตารางสอนครู' },
        ]),
        section('AI วิเคราะห์ตาราง (Gemini)', [
          { key:'scheduleVisionEnabled', label:'เปิดฟีเจอร์วิเคราะห์รูปตาราง', type:'toggle' },
          { key:'geminiApiKey',  label:'Fallback Key ลำดับ 1 (หลัก)', type:'password',
            hint:'ใช้เมื่อกลุ่มสาระไม่มี key ของตัวเอง — ถ้าถูกระงับระบบจะสลับไป Key ลำดับถัดไปอัตโนมัติ' },
          { key:'geminiApiKey2', label:'Fallback Key ลำดับ 2', type:'password' },
          { key:'geminiApiKey3', label:'Fallback Key ลำดับ 3', type:'password' },
          { key:'geminiApiKey4', label:'Fallback Key ลำดับ 4', type:'password' },
          { key:'geminiApiKey5', label:'Fallback Key ลำดับ 5', type:'password' },
          { key:'geminiModel',   label:'Gemini Model', type:'text', placeholder:'gemini-2.5-flash' },
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

      if (tabId === 'council') return [
        section('การแสดงผล', [
          { key:'council_visible_to_all', label:'แสดงเมนู "ระบบสภานักเรียน" ให้ทุกคนเห็น', type:'toggle',
            hint:'ปิดแล้วจะมีแค่แอดมิน หรือครูที่ได้รับมอบหมายเป็นแอดมิน (is_also_admin) เท่านั้นที่เห็นเมนูและเข้าหน้า council.html ได้ นักเรียนและครูทั่วไปจะไม่เห็นเมนูนี้เลย ยกเว้นรหัสนักเรียนที่ใส่ไว้ในช่อง "รหัสนักเรียนที่ให้ทดสอบได้" ด้านล่าง' },
          { key:'council_test_student_codes', label:'รหัสนักเรียนที่ให้ทดสอบได้ (แม้ปิดข้างบน)', type:'textarea', rows:3,
            placeholder:'เช่น 25541, 23823 หรือขึ้นบรรทัดใหม่ทีละคน',
            hint:'ใส่รหัสนักเรียนคั่นด้วยจุลภาคหรือขึ้นบรรทัดใหม่ — นักเรียนรหัสเหล่านี้จะเห็นเมนู "ระบบสภานักเรียน" และเข้าใช้งานได้จริง (สมัครได้จริง) แม้ปิดสวิตช์ด้านบนไว้ ใช้สำหรับทดสอบระบบก่อนเปิดให้ทุกคน' },
        ]),
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
          const minTier  = row.dataset.minTier || '1'
          return text ? `${icon}|${text}|${minTier}` : null
        }).filter(Boolean).join('\n')
        const hidden = document.getElementById('cfg-donationSpecialFeatures')
        if (hidden) hidden.value = val
      }

      const FEAT_TIER_HEX = ['#22C55E','#A855F7','#F59E0B','#3B82F6','#D4A017']
      const _attachFeatRowEvents = (row) => {
        // ปุ่มระดับ — เดิมใช้ radio ซ่อน (.sr-only) ห่อด้วย <label> ให้คลิก span ข้างในแล้ว forward
        // ไปกดแทน แต่กดไม่ติดบางจังหวะ (เจอจริง) เปลี่ยนเป็นปุ่มธรรมดาคลิกตรงๆ ไม่ผ่าน label เลย
        // ตัดปัญหาเรื่อง browser forward click ไปหา input ที่ซ่อนอยู่ทั้งหมด
        row.querySelectorAll('.feat-tier-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const selected = parseInt(btn.dataset.n)
            row.dataset.minTier = String(selected)
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
        div.dataset.minTier = '1'
        div.innerHTML = `
          <input type="text" class="feat-icon w-10 text-center text-lg border border-gray-200 rounded-lg py-1 bg-white" value="✨" placeholder="🏅" maxlength="4" />
          <input type="text" class="feat-text flex-1 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white" value="" placeholder="ชื่อฟีเจอร์" />
          <div class="flex gap-1 flex-shrink-0">
            ${[1,2,3,4,5].map(n => `
            <button type="button" class="feat-tier-btn w-7 h-7 rounded-lg flex items-center justify-center text-xs transition cursor-pointer"
              style="${n===1?`border:2px solid ${FEAT_TIER_HEX[0]};color:${FEAT_TIER_HEX[0]};background:#fff;font-weight:700`:'border:2px solid #e5e7eb;color:#d1d5db;background:#fff'}"
              data-n="${n}" title="ระดับ ${n}">${n}</button>`).join('')}
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
      const _renderSyncLog = (log) => {
        const section = document.getElementById('student-sync-log-section')
        const content = document.getElementById('student-sync-log-content')
        if (!section || !content) return
        const dt = new Date(log.synced_at)
        const dateStr = dt.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })
        const timeStr = dt.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
        const byLabel = log.triggered_by === 'auto' ? '⏱ อัตโนมัติ' : '👆 มือ'
        const newList = (log.new_students || []).map(s => `<span class="text-green-700">${s.full_name} (${s.student_code})</span>`).join(', ') || '—'
        const deactList = (log.deactivated_students || []).map(s => `<span class="text-red-500">${s.full_name} (${s.student_code})</span>`).join(', ') || '—'
        content.innerHTML = `
          <div class="flex flex-wrap gap-3 text-xs">
            <span class="bg-gray-100 rounded-lg px-2 py-1">📅 ${dateStr} ${timeStr}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">${byLabel}</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">อ่าน ${log.read_count} แถว</span>
            <span class="bg-gray-100 rounded-lg px-2 py-1">บันทึก ${log.written_count} คน</span>
          </div>
          <div class="mt-2 text-xs">
            <span class="font-semibold text-green-700">ใหม่ ${log.new_count} คน:</span> ${newList}
          </div>
          <div class="mt-1 text-xs">
            <span class="font-semibold text-red-500">ซ่อน ${log.deactivated_count} คน:</span> ${deactList}
          </div>`
        section.classList.remove('hidden')
      }

      const _loadLatestSyncLog = async () => {
        try {
          const { data } = await supabase
            .from('student_sync_logs')
            .select('*')
            .order('synced_at', { ascending: false })
            .limit(1)
            .maybeSingle()
          if (data) _renderSyncLog(data)
        } catch (_) {}
      }

      _loadLatestSyncLog()

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
            const summary = `ซิงก์สำเร็จ: อ่าน ${res.read ?? 0} แถว / บันทึก ${res.written ?? 0} คน / ใหม่ ${res.newCount ?? 0} / ซ่อน ${res.deactivatedCount ?? 0} ✅`
            showToast(summary, 'success')
            _loadLatestSyncLog()
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

    // ── ดึงชื่อจากบทบาทครู ──────────────────────────────────────────────────────
    window._syncPositionToField = async (position, cfgKey, btn) => {
      const orig = btn.textContent
      btn.disabled = true; btn.textContent = 'กำลังดึง...'
      try {
        const teacher = allTeachers.find(t => t.position === position)
        if (!teacher) { showToast(`ยังไม่มีครูที่กำหนดบทบาท "${position}"`, 'warning'); return }
        const input = document.getElementById(`cfg-${cfgKey}`)
        if (input) {
          input.value = teacher.full_name
          input.dispatchEvent(new Event('input'))
          showToast(`ดึงชื่อ "${teacher.full_name}" สำเร็จ`, 'success')
        }
      } catch { showToast('ดึงข้อมูลไม่สำเร็จ', 'error') }
      finally { btn.disabled = false; btn.textContent = orig }
    }

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
        renderCourseForm(null, async (payload, coTeacherIds = []) => {
          await createSubject(payload, coTeacherIds)
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
        <p class="text-xs text-gray-400 mt-0.5">ภาคเรียน ${curSem}/${curYear}</p>
      </div>
      <button id="hr-export-csv"
        class="text-xs font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition">
        ⬇️ ดาวน์โหลด CSV
      </button>
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

  document.getElementById('hr-export-csv')?.addEventListener('click', async () => {
    try {
      const rows = await getHomeroomTeachers(curYear, curSem)
      const assigned = _assignmentMap(rows)
      const rooms = activeCategory === 'สามัญ' ? samaiRooms : religionRooms
      const head = ['ห้อง', 'ชื่อสกุลครูที่ปรึกษา', 'เบอร์ติดต่อ']
      const body = rooms.map(room => {
        const r = assigned[room]
        return [room, r?.teachers?.full_name ?? '', r?.teachers?.phone ?? '']
      })
      const csv = '﻿' + [head, ...body]
        .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        .join('\n')
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `ครูที่ปรึกษา-${activeCategory}-${curSem}-${curYear}.csv`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      showToast('ดาวน์โหลด CSV แล้ว ✅', 'success')
    } catch (err) { showToast('ดาวน์โหลดไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
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
  const year   = cfg.academicYear ?? cfg.academic_year ?? new Date().getFullYear() + 543
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
    // ช่อง <input type="date"> พิมพ์เลขปีตรงๆ ได้ ถ้าเผลอพิมพ์ปี พ.ศ. (เช่น 2569) แทน ค.ศ.
    // เบราว์เซอร์จะรับไว้เฉยๆ ไม่เตือน กลายเป็นวันที่ผิดจริงในฐานข้อมูล (เจอมาแล้ว 2 รายการ) — กันไว้
    const dateYear = parseInt(date.slice(0, 4), 10)
    const thisGregorianYear = new Date().getFullYear()
    if (Math.abs(dateYear - thisGregorianYear) > 3) {
      showToast(`ปี ${dateYear} ดูผิดปกติ (พ.ศ. หรือเปล่า? ปีปัจจุบันคือ ค.ศ. ${thisGregorianYear}) กรุณาตรวจสอบวันที่อีกครั้ง`, 'error')
      return
    }
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
      if (currentType === 'students') {
        txt.textContent = 'กำลังรีเฟรชรายชื่อในห้องเรียน...'
        try {
          const result = await autoEnrollStudentsByRoom()
          showToast(`รีเฟรชรายชื่อห้องเรียนแล้ว (${result?.enrolled ?? 0} รายการ)`, 'success')
        } catch { /* ไม่ critical */ }
        txt.textContent = `นำเข้าสำเร็จ ${done} รายการ — รีเฟรชห้องเรียนแล้ว`
      }
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
const _rsBadge = (s) => { const g = _readingGrade(s); return `<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${g.cls}">${g.label}</span>` }

// ─── Admin: คะแนนอ่านคิดวิเคราะห์และเขียน ────────────────────────────────────
export async function renderReadingAdmin() {
  setActiveNav('reading-admin')
  document.getElementById('page-title').textContent = 'คะแนนอ่านคิดวิเคราะห์'

  const cfg  = await getSystemConfig().catch(()=>({}))
  const year = parseInt(cfg.academicYear ?? 2568)
  const sem  = parseInt(cfg.semester ?? 1)
  applyReadingGradesFromConfig(cfg)

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
            evalMap[s.id] = { label: _readingGrade(score100).label, score100 }
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
              <span class="text-xs text-gray-400">คอลัมน์ในชีทรายวิชาครูสำหรับเก็บผลการประเมิน (${READING_GRADES.map(g=>g.label).join('/')})</span>
              <button id="rsa-save-eval-col" class="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-medium hover:bg-violet-700 transition flex-shrink-0">บันทึก</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mt-4">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-purple-500"></span>
          <h3 class="text-sm font-semibold text-gray-700">🎯 เกณฑ์การประเมิน</h3>
          <span class="ml-auto text-xs text-gray-400">คำนวณจากคะแนนรวมแปลงเป็น 100 คะแนน</span>
        </div>
        <div class="px-5 py-4 space-y-2">
          ${READING_GRADES.map((g, i) => `
            <div class="flex items-center gap-2" data-rsa-grade-row="${i}">
              <span class="text-xs text-gray-400 w-24 flex-shrink-0">ระดับที่ ${i+1}:</span>
              <input type="text" data-rsa-label value="${_htmlEsc(g.label)}"
                class="w-28 text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300" />
              <span class="text-xs text-gray-400">คะแนนตั้งแต่</span>
              <input type="number" data-rsa-min value="${g.min}" min="0" max="100" ${i === READING_GRADES.length-1 ? 'disabled' : ''}
                class="w-20 text-sm text-center border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${i === READING_GRADES.length-1 ? 'bg-gray-50 text-gray-400' : ''}" />
              <span class="text-xs text-gray-400">${i === READING_GRADES.length-1 ? 'ลงไป (ต่ำสุดเสมอ)' : 'ขึ้นไป'}</span>
            </div>`).join('')}
          <div class="flex items-center gap-2 pt-2">
            <button id="rsa-save-grades" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium hover:bg-purple-700 transition">บันทึกเกณฑ์</button>
            <span id="rsa-grades-err" class="text-xs text-red-500"></span>
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
    document.getElementById('rsa-save-grades')?.addEventListener('click', async () => {
      const btn = document.getElementById('rsa-save-grades')
      const errEl = document.getElementById('rsa-grades-err')
      errEl.textContent = ''
      const rows = [...document.querySelectorAll('[data-rsa-grade-row]')].map((row, i) => ({
        label: row.querySelector('[data-rsa-label]').value.trim(),
        min: i === READING_GRADES.length - 1 ? 0 : parseFloat(row.querySelector('[data-rsa-min]').value),
      }))
      if (rows.some(r => !r.label)) { errEl.textContent = 'กรอกชื่อระดับให้ครบทุกช่อง'; return }
      if (rows.some(r => Number.isNaN(r.min) || r.min < 0 || r.min > 100)) { errEl.textContent = 'คะแนนต้องอยู่ระหว่าง 0-100'; return }
      for (let i = 0; i < rows.length - 1; i++) {
        if (rows[i].min <= rows[i + 1].min) { errEl.textContent = 'คะแนนแต่ละระดับต้องเรียงจากมากไปน้อย'; return }
      }
      btn.disabled = true; btn.textContent = '⏳'
      try {
        await updateSystemConfig('readingEvalThresholds', JSON.stringify(rows))
        applyReadingGradesFromConfig({ readingEvalThresholds: JSON.stringify(rows) })
        btn.textContent = '✅'; btn.style.background = '#16a34a'
        setTimeout(() => { btn.disabled = false; btn.textContent = 'บันทึกเกณฑ์'; btn.style.background = '' }, 1500)
        showToast('บันทึกเกณฑ์การประเมินแล้ว', 'success')
      } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error'); btn.disabled = false; btn.textContent = 'บันทึกเกณฑ์' }
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
  usor:     { label: 'U', color: 'text-purple-600 font-bold',  bg: 'bg-purple-50',   score: 2,  fullLabel: 'อูโซร/ประจำเดือน' },
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

export async function renderPrayerAdmin(teacher) {
  setActiveNav('prayer-admin')
  document.getElementById('page-title').textContent = 'คะแนนละหมาด'
  let historyInterval = null

  // Fetch teacher details dynamically if not passed
  let activeTeacher = teacher
  if (!activeTeacher) {
    try {
      const { data: sessionData } = await supabase.auth.getSession()
      const userId = sessionData?.session?.user?.id ?? null
      if (userId) {
        const { data } = await supabase
          .from('teachers')
          .select('*')
          .eq('profile_id', userId)
          .maybeSingle()
        activeTeacher = data ?? null
      }
    } catch (e) {
      console.error('Failed to load teacher session:', e)
    }
  }

  // โหลดแค่ config + รายชื่อห้อง (เร็ว) — records โหลดทีหลังตอนเลือกห้อง
  const [cfg, allReligionRooms] = await Promise.all([
    getSystemConfig().catch(() => ({})),
    getUniqueReligionRooms().catch(() => []),
  ])
  const rooms = allReligionRooms

  const teacherCodes = (cfg.prayerScannerTeachers || '')
    .split(/[\s,]+/)
    .map(c => c.trim())
    .filter(Boolean)

  let isAllowedScanner = false
  if (activeTeacher) {
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', activeTeacher.profile_id).maybeSingle()
    isAllowedScanner = teacherCodes.includes(activeTeacher.teacher_code) ||
                       activeTeacher.staff_type === 'แอดมิน' ||
                       activeTeacher.position === 'admin' ||
                       profile?.role === 'admin'
  }

  // ─── Shell (tabs) ─────────────────────────────────────────────────────────
  setContent(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">บันทึกการมาละหมาดทุกห้อง — Sync รายวันลงชีท Solat</p>
      </div>
      <div id="pr-tab-actions"></div>
    </div>
    <div class="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 w-fit flex-wrap">
      <button id="pr-tab-scores" data-tab="scores"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700">
        📊 คะแนน
      </button>
      <button id="pr-tab-history" data-tab="history"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
        🖥️ มอนิเตอร์สแกนล่าสุด
      </button>
      <button id="pr-tab-scanners" data-tab="scanners"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
        🔑 มอบสิทธิ์สแกนเนอร์
      </button>
      <button id="pr-tab-config" data-tab="config"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700">
        ⚙️ ตั้งค่า
      </button>
      ${isAllowedScanner ? `
      <button id="pr-tab-scanner-cam" data-tab="scanner-cam"
        class="px-4 py-1.5 rounded-lg text-sm font-medium transition text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 font-bold">
        📷 เปิดกล้องสแกน
      </button>
      ` : ''}
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
          attendanceScoreMode: cfg.attendanceScoreMode ?? 'recorded',
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
        await savePrayerCellAdmin(sid, room, ds, st, weekN, 'แอดมิน')
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
                      ? `<img src="${s.image_url}" class="student-avatar-premium w-6 h-8" />`
                      : `<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>`}
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
          getPrayerRecordsByRoom(room, semStart, semEnd),
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
                        ? `<img src="${s.image_url}" class="student-avatar-premium" />`
                        : `<div class="student-avatar-premium-placeholder text-xs">👤</div>`}
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

  // ─── Tab: มอนิเตอร์สแกนล่าสุด ────────────────────────────────────────────────
  const _showHistory = () => {
    document.getElementById('pr-tab-actions').innerHTML = ''

    if (historyInterval) {
      clearInterval(historyInterval)
      historyInterval = null
    }

    const todayVal = new Date().toLocaleDateString('sv') // 'YYYY-MM-DD'

    document.getElementById('pr-tab-content').innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <!-- Filters panel -->
        <div class="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
          <h3 class="font-bold text-gray-800 text-sm flex items-center gap-1.5">
            🔍 คัดกรองข้อมูล
          </h3>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">เลือกวันที่สแกน</label>
            <input type="date" id="hist-date-input" value="${todayVal}"
              class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">จุดละหมาด</label>
            <select id="hist-loc-filter"
              class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
              <option value="">ทุกจุดละหมาด</option>
              <option value="musolla_male">มูซอลลาชาย (ม.1 - ม.5 ชาย)</option>
              <option value="masjid_kuwait">มัสยิดคูเวต (ม.6, ปวช. ชาย)</option>
              <option value="musolla_female_1">มูซอลลาหญิง 1 (โรงอาหาร)</option>
              <option value="musolla_female_2">มูซอลลาหญิง 2 (อาคาร 5)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ค้นหา (ชื่อ / รหัส / ผู้บันทึก)</label>
            <input type="text" id="hist-search-input" placeholder="พิมพ์เพื่อค้นหา..."
              class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div class="mt-2 pt-2 border-t border-gray-50 flex items-center justify-between">
            <button id="btn-hist-refresh"
              class="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-sm">
              🔄 รีเฟรชข้อมูล
            </button>
            <label class="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer select-none">
              <input type="checkbox" id="hist-live-toggle" checked
                class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              อัปเดตอัตโนมัติ (Live)
            </label>
          </div>
          <div class="pt-2 border-t border-gray-50 flex flex-col gap-2">
            <a href="public-monitor.html" target="_blank"
              class="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all border border-slate-900 text-center shadow-sm">
              📡 เปิดศูนย์ติดตามรวม (จอเดียว)
            </a>
            <a href="prayer-dashboard.html?days=14" target="_blank"
              class="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-all border border-emerald-200/70 text-center shadow-sm">
              📊 เปิดแดชบอร์ดแนวโน้มละหมาด
            </a>
            <a href="prayer-monitor.html" target="_blank"
              class="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-all border border-indigo-200/50 text-center shadow-sm">
              🖥️ เปิดหน้าจอมอนิเตอร์แบบเรียลไทม์ (แยกหน้าจอ)
            </a>
          </div>
        </div>

        <!-- Dashboard / Summary stats -->
        <div class="md:col-span-2 flex flex-col gap-4">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-center">
              <p id="stat-hist-total" class="text-2xl font-extrabold text-indigo-700">0</p>
              <p class="text-[10px] text-indigo-500 font-semibold mt-0.5">สแกนทั้งหมด</p>
            </div>
            <div class="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 text-center">
              <p id="stat-hist-pray" class="text-2xl font-extrabold text-emerald-600">0</p>
              <p class="text-[10px] text-emerald-500 font-semibold mt-0.5">🟢 ละหมาด</p>
            </div>
            <div class="bg-purple-50/50 border border-purple-100 rounded-2xl p-4 text-center">
              <p id="stat-hist-usor" class="text-2xl font-extrabold text-purple-700">0</p>
              <p class="text-[10px] text-purple-500 font-semibold mt-0.5">🟣 อูโซร</p>
            </div>
            <div class="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 text-center">
              <p id="stat-hist-other" class="text-2xl font-extrabold text-amber-700">0</p>
              <p class="text-[10px] text-amber-500 font-semibold mt-0.5">อื่นๆ (ขาด/ละเว้น)</p>
            </div>
          </div>

          <!-- Active Operators Panel -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex-1 min-h-[90px]">
            <p class="text-xs font-bold text-gray-500 mb-2">👥 ผู้ปฏิบัติงานบันทึก/สแกนวันนี้ (Active Operators)</p>
            <div id="hist-operators-wrap" class="flex flex-wrap gap-2">
              <span class="text-xs text-gray-400">ยังไม่มีประวัติสแกนของวันนี้</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scans List Table -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col min-h-[300px]">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📋 รายการเช็คชื่อละหมาด</h3>
          <span id="hist-table-count" class="text-xs text-gray-400">0 รายการ</span>
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-xs text-left border-collapse">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="px-4 py-3 text-center text-gray-500 font-semibold w-12">ลำดับ</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-24">เวลา</th>
                <th class="px-4 py-3 text-gray-500 font-semibold">รายชื่อนักเรียน</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-24">ห้องเรียน</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-32">จุดสแกน</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-40">ผู้บันทึกสแกน (ผู้ปฏิบัติงาน)</th>
                <th class="px-4 py-3 text-gray-500 font-semibold w-28 text-center">สถานะ</th>
              </tr>
            </thead>
            <tbody id="hist-table-body" class="divide-y divide-gray-50">
              <tr>
                <td colspan="7" class="text-center py-12 text-gray-400">กำลังโหลดข้อมูล...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `

    let recordsData = []
    let selectedOperator = ''
    let isFetchingHistory = false
    const HISTORY_PAGE_SIZE = 1000

    const _locLabel = (loc) => {
      const mapping = {
        'musolla_male': 'มูซอลลาชาย',
        'masjid_kuwait': 'มัสยิดคูเวต',
        'musolla_female_1': 'มูซอลลาหญิง 1',
        'musolla_female_2': 'มูซอลลาหญิง 2'
      }
      return mapping[loc] || 'ไม่ระบุพื้นที่'
    }

    const _locBadgeClass = (loc) => {
      const mapping = {
        'musolla_male': 'bg-blue-50 text-blue-700 border-blue-100',
        'masjid_kuwait': 'bg-purple-50 text-purple-700 border-purple-100',
        'musolla_female_1': 'bg-pink-50 text-pink-700 border-pink-100',
        'musolla_female_2': 'bg-amber-50 text-amber-700 border-amber-100'
      }
      return mapping[loc] || 'bg-gray-50 text-gray-500 border-gray-100'
    }

    const _fetchHistoryRows = async (dateVal) => {
      const rows = []
      for (let from = 0; ; from += HISTORY_PAGE_SIZE) {
        const { data, error } = await supabase
          .from('prayer_records')
          .select('id, student_id, main_room, status, location, scanned_by, input_method, scanner_room, same_room_flag, created_at, students(id, full_name, student_code, image_url), teachers(id, full_name)')
          .eq('check_date', dateVal)
          .not('location', 'is', null)
          .order('created_at', { ascending: false })
          .range(from, from + HISTORY_PAGE_SIZE - 1)

        if (error) throw error
        rows.push(...(data ?? []))
        if (!data || data.length < HISTORY_PAGE_SIZE) break
      }
      return rows
    }

    const _fetchHistory = async () => {
      const tableBody = document.getElementById('hist-table-body')
      if (!tableBody) {
        if (historyInterval) {
          clearInterval(historyInterval)
          historyInterval = null
        }
        return
      }

      const dateVal = document.getElementById('hist-date-input')?.value || todayVal
      if (isFetchingHistory) return
      isFetchingHistory = true
      try {
        recordsData = await _fetchHistoryRows(dateVal)
        _renderHistory()
      } catch(err) {
        console.error('Fetch history failed:', err)
        const body = document.getElementById('hist-table-body')
        if (body) {
          body.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: ${err.message}</td></tr>`
        }
      } finally {
        isFetchingHistory = false
      }
    }

    const _renderHistory = () => {
      const locVal = document.getElementById('hist-loc-filter')?.value || ''
      const searchVal = (document.getElementById('hist-search-input')?.value || '').trim().toLowerCase()

      const filtered = recordsData.filter(rec => {
        if (locVal && rec.location !== locVal) return false
        if (selectedOperator) {
          const opName = rec.scanned_by || rec.teachers?.full_name || 'บันทึกมือ (เดิม)'
          if (opName !== selectedOperator) return false
        }
        if (searchVal) {
          const studentName = (rec.students?.full_name || '').toLowerCase()
          const studentCode = (rec.students?.student_code || '').toLowerCase()
          const studentRoom = (rec.main_room || '').toLowerCase()
          const scannedByStr = (rec.scanned_by || rec.teachers?.full_name || 'บันทึกมือ (เดิม)').toLowerCase()
          const inputMethodStr = rec.input_method === 'manual' ? 'กรอกรหัส manual' : 'qr'
          return studentName.includes(searchVal) ||
                 studentCode.includes(searchVal) ||
                 studentRoom.includes(searchVal) ||
                 scannedByStr.includes(searchVal) ||
                 inputMethodStr.includes(searchVal)
        }
        return true
      })

      const total = filtered.length
      const pray = filtered.filter(r => r.status === 'pray').length
      const usor = filtered.filter(r => r.status === 'usor').length
      const other = total - pray - usor

      const tEl = document.getElementById('stat-hist-total')
      const pEl = document.getElementById('stat-hist-pray')
      const uEl = document.getElementById('stat-hist-usor')
      const oEl = document.getElementById('stat-hist-other')
      if (tEl) tEl.textContent = total
      if (pEl) pEl.textContent = pray
      if (uEl) uEl.textContent = usor
      if (oEl) oEl.textContent = other

      const opsSet = new Set()
      recordsData.forEach(r => {
        const opName = r.scanned_by || r.teachers?.full_name
        if (opName) opsSet.add(opName)
      })

      const opsWrap = document.getElementById('hist-operators-wrap')
      if (opsWrap) {
        if (opsSet.size === 0) {
          opsWrap.innerHTML = `<span class="text-xs text-gray-400">ยังไม่มีผู้ทำการเช็คชื่อในวันที่เลือก</span>`
        } else {
          opsWrap.innerHTML = Array.from(opsSet).map(op => {
            const isActive = selectedOperator === op
            const isTch = op.includes('(ครู)') || op.includes('ครู')
            const bgCl = isTch
              ? (isActive
                  ? 'bg-indigo-100 text-indigo-900 border-2 border-indigo-500 font-bold shadow-sm'
                  : 'bg-indigo-50/70 text-indigo-700 border border-indigo-100 hover:bg-indigo-100/60 cursor-pointer')
              : (isActive
                  ? 'bg-emerald-100 text-emerald-950 border-2 border-emerald-500 font-bold shadow-sm'
                  : 'bg-emerald-50/70 text-emerald-700 border border-emerald-100 hover:bg-emerald-100/60 cursor-pointer')
            return `<span class="op-filter-chip px-2.5 py-1 rounded-lg text-xs font-semibold select-none transition-all duration-150 active:scale-95 cursor-pointer ${bgCl}" data-op="${op}">${isActive ? '✓ ' : ''}${op}</span>`
          }).join('')

          opsWrap.querySelectorAll('.op-filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
              const op = chip.dataset.op
              selectedOperator = selectedOperator === op ? '' : op
              _renderHistory()
            })
          })
        }
      }

      const countEl = document.getElementById('hist-table-count')
      if (countEl) countEl.textContent = `${filtered.length} รายการ`

      const body = document.getElementById('hist-table-body')
      if (!body) return

      if (filtered.length === 0) {
        body.innerHTML = `<tr><td colspan="7" class="text-center py-12 text-gray-400">ไม่พบประวัติการสแกนที่ตรงกับเงื่อนไข</td></tr>`
        return
      }

      body.innerHTML = filtered.map((rec, idx) => {
        const timeStr = rec.created_at
          ? new Date(rec.created_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          : '—'

        const student = rec.students
        const photoHTML = student?.image_url
          ? `<img src="${student.image_url}" class="student-avatar-premium" />`
          : `<div class="student-avatar-premium-placeholder text-indigo-600 bg-indigo-50 flex items-center justify-center font-bold text-xs flex-shrink-0">${(student?.full_name || '?').charAt(0)}</div>`

        const studentLabel = student
          ? `<div class="flex items-center gap-2.5">
              ${photoHTML}
              <div>
                <p class="font-bold text-gray-800 leading-none">${student.full_name}</p>
                <p class="text-[10px] text-gray-400 mt-1">รหัส ${student.student_code}</p>
              </div>
            </div>`
          : `<span class="text-gray-400">ไม่พบชื่อ (รหัส ${rec.student_id})</span>`

        const statusBadge = {
          'pray': '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 ละหมาด</span>',
          'usor': '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">🟣 อูโซร</span>',
          'absent': '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">🔴 ขาด</span>',
          'followed': '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ติดตามแล้ว</span>',
          'avoid': '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">🟡 ละเว้น</span>'
        }[rec.status] || `<span class="text-gray-400">${rec.status || '—'}</span>`

        const operator = rec.scanned_by || rec.teachers?.full_name || 'บันทึกมือ (เดิม)'
        const methodBadge = rec.input_method === 'manual'
          ? `<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">กรอกรหัส</span>`
          : ''
        const sameRoomBadge = rec.same_room_flag
          ? `<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">ห้องเดียวกัน</span>`
          : ''

        return `
          <tr class="hover:bg-gray-50/50 transition-colors">
            <td class="px-4 py-3 text-center text-gray-400 font-mono">${filtered.length - idx}</td>
            <td class="px-4 py-3 font-mono font-medium text-gray-500">${timeStr}</td>
            <td class="px-4 py-3">${studentLabel}</td>
            <td class="px-4 py-3 font-bold text-gray-500">ห้อง ${rec.main_room || '—'}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${_locBadgeClass(rec.location)}">
                ${_locLabel(rec.location)}
              </span>
            </td>
            <td class="px-4 py-3">
              <span class="font-medium text-gray-700">${operator}</span>
              <div class="flex flex-wrap gap-1">${methodBadge}${sameRoomBadge}</div>
            </td>
            <td class="px-4 py-3 text-center">${statusBadge}</td>
          </tr>
        `
      }).join('')
    }

    const _setupAutoRefresh = () => {
      if (historyInterval) {
        clearInterval(historyInterval)
        historyInterval = null
      }
      const liveToggle = document.getElementById('hist-live-toggle')
      if (liveToggle && liveToggle.checked) {
        historyInterval = setInterval(_fetchHistory, 4000)
      }
    }

    setTimeout(() => {
      document.getElementById('btn-hist-refresh')?.addEventListener('click', _fetchHistory)
      document.getElementById('hist-date-input')?.addEventListener('change', () => {
        selectedOperator = ''
        _fetchHistory()
      })
      document.getElementById('hist-loc-filter')?.addEventListener('change', _renderHistory)

      const searchIn = document.getElementById('hist-search-input')
      if (searchIn) searchIn.addEventListener('input', _renderHistory)

      const liveTog = document.getElementById('hist-live-toggle')
      if (liveTog) liveTog.addEventListener('change', _setupAutoRefresh)

      _fetchHistory()
      _setupAutoRefresh()
    }, 50)
  }

  const _prConfigFlag = (value, fallback = false) => {
    if (value === undefined || value === null || value === '') return fallback
    return ['1', 'true', 'yes', 'on'].includes(String(value).trim().toLowerCase())
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
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mt-4">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">🛡️ ความปลอดภัยระบบสแกน</span>
        </div>
        <div class="px-5 py-4 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label class="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 cursor-pointer">
              <input id="pr-guard-male" type="checkbox" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                ${_prConfigFlag(cfg.prayerSameRoomGuardMaleEnabled, true) ? 'checked' : ''} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนชายห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ถ้าเปิดไว้ แกนนำนักเรียนจะบันทึกเพื่อนห้องเดียวกันไม่ได้</span>
              </span>
            </label>
            <label class="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 cursor-pointer">
              <input id="pr-guard-female" type="checkbox" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                ${_prConfigFlag(cfg.prayerSameRoomGuardFemaleEnabled, false) ? 'checked' : ''} />
              <span>
                <span class="block text-sm font-bold text-gray-700">กันนักเรียนหญิงห้องเดียวกัน</span>
                <span class="block text-xs text-gray-400 mt-0.5">ปิดไว้ได้เมื่อจุดสแกนมีแกนนำน้อยหรือมีห้องเดียวเป็นหลัก</span>
              </span>
            </label>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">จำนวนครั้งที่อนุญาตให้กรอกรหัสแทน QR Code ต่อเดือน/นักเรียน</label>
            <input type="number" min="0" max="31" id="pr-manual-monthly-limit" value="${Number.isFinite(parseInt(cfg.prayerManualEntryMonthlyLimit ?? '2', 10)) ? parseInt(cfg.prayerManualEntryMonthlyLimit ?? '2', 10) : 2}"
              class="w-32 text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-xs text-gray-400 mt-1">ตั้งเป็น 0 เพื่อปิดการบันทึกด้วยการกรอกรหัส</p>
          </div>
          <button id="pr-save-scanner-safety"
            class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition">
            บันทึกความปลอดภัยระบบสแกน
          </button>
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

    document.getElementById('pr-save-scanner-safety').addEventListener('click', async () => {
      const btn = document.getElementById('pr-save-scanner-safety')
      const maleEnabled = document.getElementById('pr-guard-male')?.checked ? 'true' : 'false'
      const femaleEnabled = document.getElementById('pr-guard-female')?.checked ? 'true' : 'false'
      const limitRaw = parseInt(document.getElementById('pr-manual-monthly-limit')?.value || '2', 10)
      const manualLimit = String(Math.max(0, Math.min(31, Number.isFinite(limitRaw) ? limitRaw : 2)))
      btn.disabled = true
      btn.textContent = '⏳ กำลังบันทึก...'
      try {
        await Promise.all([
          updateSystemConfig('prayerSameRoomGuardMaleEnabled', maleEnabled),
          updateSystemConfig('prayerSameRoomGuardFemaleEnabled', femaleEnabled),
          updateSystemConfig('prayerManualEntryMonthlyLimit', manualLimit),
        ])
        cfg.prayerSameRoomGuardMaleEnabled = maleEnabled
        cfg.prayerSameRoomGuardFemaleEnabled = femaleEnabled
        cfg.prayerManualEntryMonthlyLimit = manualLimit
        showToast('บันทึกความปลอดภัยระบบสแกนแล้ว', 'success')
        btn.textContent = '✅ บันทึกแล้ว'
        setTimeout(() => { btn.disabled = false; btn.textContent = 'บันทึกความปลอดภัยระบบสแกน' }, 1600)
      } catch(err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
        btn.textContent = 'บันทึกความปลอดภัยระบบสแกน'
      }
    })

  }

  // ─── Tab: มอบสิทธิ์สแกนเนอร์ ──────────────────────────────────────────
  const _showScanners = () => {
    document.getElementById('pr-tab-actions').innerHTML = ''
    document.getElementById('pr-tab-content').innerHTML = `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">⏱️ ช่วงเวลาเปิดระบบสแกนละหมาด</span>
        </div>
        <div class="px-5 py-4 space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">เวลาเริ่มสแกน</label>
              <input type="text" id="pr-scan-start" value="${cfg.prayerScanStartTime??'12:20'}" placeholder="12:20"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ปิดสำหรับแกนนำทั่วไป</label>
              <input type="text" id="pr-scan-end" value="${cfg.prayerScanEndTime??'12:50'}" placeholder="12:50"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ปิดสำหรับประธาน/รองประธาน</label>
              <input type="text" id="pr-scan-ext-end" value="${cfg.prayerScanExtendedEndTime??'13:05'}" placeholder="13:05"
                class="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
          </div>
          <button id="pr-save-scanner-time-cfg"
            class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">
            บันทึกช่วงเวลาสแกน
          </button>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
          <span class="text-sm font-semibold text-gray-700">🔑 มอบสิทธิ์เครื่องสแกนเนอร์ (แกนนำสภานักเรียน / คุณครู)</span>
        </div>
        <div class="px-5 py-4 space-y-4">
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">ระบุรหัสนักเรียนหรือรหัสคุณครู (กรอกหลายรหัสพร้อมกันได้ คั่นด้วยเว้นวรรคหรือลูกน้ำ)</label>
            <div class="flex gap-2">
              <input type="text" id="pr-scanner-search-input" placeholder="เช่น 24275 (นักเรียน) หรือ 1114 (ครู)"
                class="flex-1 text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <button id="btn-search-scanner-students" class="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition">ค้นหารายชื่อ</button>
            </div>
          </div>
          <div id="scanner-preview-container" class="hidden border border-indigo-50 bg-indigo-50/20 rounded-xl p-4">
            <p class="text-xs font-semibold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบสิทธิ์:</p>
            <div id="scanner-preview-cards" class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3"></div>
            <button id="btn-confirm-scanner-grant" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition">
              ✓ ยืนยันและมอบสิทธิ์สแกนเนอร์
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-5 py-3 border-b border-gray-50 flex items-center justify-between">
          <span class="text-sm font-semibold text-gray-700">📋 รายชื่อผู้สแกนเนอร์ที่ได้รับสิทธิ์ปัจจุบัน</span>
          <span id="scanner-count-badge" class="text-xs text-gray-400">0 คน</span>
        </div>
        <div id="scanners-list-wrap">
          <div class="p-8 text-center text-gray-400">กำลังโหลด...</div>
        </div>
      </div>
    `

    let _foundScanners = []
    let _scannerFilterState = {
      audience: 'all',
      type: '',
      gender: '',
      room: '',
      permission: '',
      day: '',
      q: ''
    }

    const _scannerDays = [
      { key: 'Sun', label: 'อา', full: 'อาทิตย์' },
      { key: 'Mon', label: 'จ', full: 'จันทร์' },
      { key: 'Tue', label: 'อ', full: 'อังคาร' },
      { key: 'Wed', label: 'พ', full: 'พุธ' },
      { key: 'Thu', label: 'พฤ', full: 'พฤหัสบดี' }
    ]

    const _scannerCodeList = (value) => (value || '')
      .split(/[\s,]+/)
      .map(c => c.trim())
      .filter(Boolean)

    const _scannerGenderKey = (gender) => String(gender || '').trim()

    const _scannerAudienceLabel = (audience) => ({
      all: 'ทั้งหมด',
      male: 'ชาย',
      female: 'หญิง',
      teacher: 'ครู'
    }[audience] || 'ทั้งหมด')

    const _saveExtendedScannerCode = async (code, enabled) => {
      const currentConfig = await getSystemConfig().catch(() => ({}))
      const codes = new Set(_scannerCodeList(currentConfig.prayerExtendedScannerStudents))
      if (enabled) codes.add(String(code))
      else codes.delete(String(code))
      const nextCodes = Array.from(codes).join(',')
      await updateSystemConfig('prayerExtendedScannerStudents', nextCodes)
      cfg.prayerExtendedScannerStudents = nextCodes
      return nextCodes
    }

    document.getElementById('pr-save-scanner-time-cfg').addEventListener('click', async () => {
      const btn = document.getElementById('pr-save-scanner-time-cfg')
      const start = document.getElementById('pr-scan-start').value.trim() || '12:20'
      const end = document.getElementById('pr-scan-end').value.trim() || '12:50'
      const extEnd = document.getElementById('pr-scan-ext-end').value.trim() || '13:05'
      const timeOk = [start, end, extEnd].every(v => /^\d{1,2}:\d{2}$/.test(v))
      if (!timeOk) {
        showToast('กรุณากรอกเวลาเป็นรูปแบบ HH:MM เช่น 12:20', 'warning')
        return
      }
      btn.disabled = true
      btn.textContent = '⏳ กำลังบันทึก...'
      try {
        await Promise.all([
          updateSystemConfig('prayerScanStartTime', start),
          updateSystemConfig('prayerScanEndTime', end),
          updateSystemConfig('prayerScanExtendedEndTime', extEnd),
        ])
        cfg.prayerScanStartTime = start
        cfg.prayerScanEndTime = end
        cfg.prayerScanExtendedEndTime = extEnd
        showToast('บันทึกช่วงเวลาสแกนละหมาดแล้ว', 'success')
        btn.textContent = '✅ บันทึกแล้ว'
        setTimeout(() => { btn.disabled = false; btn.textContent = 'บันทึกช่วงเวลาสแกน' }, 1600)
      } catch(err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
        btn.textContent = 'บันทึกช่วงเวลาสแกน'
      }
    })

    const _loadScannersList = async () => {
      const listWrap = document.getElementById('scanners-list-wrap')
      if (!listWrap) return
      try {
        // 1. ดึงข้อมูลนักเรียนที่มีสิทธิ์
        const { data: students, error: stuErr } = await supabase
          .from('students')
          .select('id, student_code, full_name, main_room, gender, image_url')
          .eq('can_scan_prayer', true)
          .order('student_code')
        if (stuErr) throw stuErr

        // 2. ดึงข้อมูลครูที่มีสิทธิ์จาก config
        const currentConfig = await getSystemConfig().catch(() => ({}))
        const studentsList = students ?? []
        const teacherCodes = _scannerCodeList(currentConfig.prayerScannerTeachers)
        const extendedStudentCodes = new Set(_scannerCodeList(currentConfig.prayerExtendedScannerStudents))

        let permittedTeachers = []
        if (teacherCodes.length > 0) {
          const { data: teachers, error: teachErr } = await supabase
            .from('teachers')
            .select('id, teacher_code, full_name, dept, image_url')
            .in('teacher_code', teacherCodes)
            .order('teacher_code')
          if (teachErr) throw teachErr
          permittedTeachers = teachers ?? []
        }

        const totalScannersCount = studentsList.length + permittedTeachers.length
        document.getElementById('scanner-count-badge').textContent = `${totalScannersCount} คน`

        if (totalScannersCount === 0) {
          listWrap.innerHTML = `<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีนักเรียนหรือครูได้รับสิทธิ์สแกนเนอร์</div>`
          return
        }

        const dayCodeSets = Object.fromEntries(_scannerDays.map(d => [
          d.key,
          new Set(_scannerCodeList(currentConfig[`prayerScanner${d.key}`]))
        ]))
        const studentRows = studentsList.map(s => {
          const code = String(s.student_code || '').trim()
          const assignedDays = _scannerDays.filter(d => dayCodeSets[d.key]?.has(code)).map(d => d.key)
          const isExtended = extendedStudentCodes.has(code)
          return {
            ...s,
            type: 'student',
            code,
            name: s.full_name || '',
            roomInfo: s.main_room || '',
            gender: _scannerGenderKey(s.gender),
            permission: isExtended ? 'extended' : 'normal',
            permissionLabel: isExtended ? 'ขยายเวลา' : 'ทั่วไป',
            assignedDays,
            searchText: [code, s.full_name, s.main_room, s.gender, isExtended ? 'ขยายเวลา' : 'ทั่วไป'].join(' ').toLowerCase()
          }
        })
        const teacherRows = permittedTeachers.map(t => ({
          ...t,
          type: 'teacher',
          code: String(t.teacher_code || '').trim(),
          name: t.full_name || '',
          roomInfo: t.dept || '',
          gender: '',
          permission: 'teacher',
          permissionLabel: 'คุณครู',
          assignedDays: [],
          searchText: [t.teacher_code, t.full_name, t.dept, 'ครู คุณครู'].join(' ').toLowerCase()
        }))
        const allRows = [...studentRows, ...teacherRows]
        const roomOptions = _opts(allRows.map(s => s.roomInfo))
        const maleCount = studentRows.filter(s => s.gender === 'ชาย').length
        const femaleCount = studentRows.filter(s => s.gender === 'หญิง').length
        const extendedCount = studentRows.filter(s => s.permission === 'extended').length
        const unassignedCount = studentRows.filter(s => s.assignedDays.length === 0).length

        const _metric = (label, value, tone = 'indigo') => {
          const tones = {
            indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
            emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
            rose: 'bg-rose-50 text-rose-700 border-rose-100',
            amber: 'bg-amber-50 text-amber-700 border-amber-100',
            slate: 'bg-slate-50 text-slate-700 border-slate-100'
          }
          return `
            <div class="rounded-xl border ${tones[tone] || tones.indigo} px-3 py-2">
              <p class="text-[10px] font-bold opacity-70">${label}</p>
              <p class="text-lg font-extrabold leading-tight">${value}</p>
            </div>
          `
        }

        listWrap.innerHTML = `
          <div class="p-4 border-b border-gray-50 space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
              ${_metric('ทั้งหมด', totalScannersCount, 'indigo')}
              ${_metric('ชาย', maleCount, 'emerald')}
              ${_metric('หญิง', femaleCount, 'rose')}
              ${_metric('ครู', permittedTeachers.length, 'slate')}
              ${_metric('ขยายเวลา', extendedCount, 'amber')}
              ${_metric('ยังไม่มีเวร', unassignedCount, unassignedCount ? 'rose' : 'slate')}
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                ${[
                  ['all', `ทั้งหมด ${totalScannersCount}`],
                  ['male', `ชาย ${maleCount}`],
                  ['female', `หญิง ${femaleCount}`],
                  ['teacher', `ครู ${permittedTeachers.length}`]
                ].map(([key, label]) => `
                  <button type="button" data-scanner-audience="${key}"
                    class="scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition">
                    ${label}
                  </button>
                `).join('')}
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button type="button" id="btn-filter-unassigned-scanner"
                  class="px-3 py-2 rounded-xl border border-rose-100 bg-rose-50 text-rose-700 text-xs font-bold hover:bg-rose-100 transition">
                  ยังไม่กำหนดวันเวร
                </button>
                <button type="button" id="btn-reset-scanner-filters"
                  class="px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-500 text-xs font-bold hover:bg-gray-50 transition">
                  ล้างตัวกรอง
                </button>
                <span class="text-xs text-gray-400">แสดง <span id="scanner-filtered-count" class="font-bold text-indigo-600">0</span> คน · <span id="scanner-active-audience-label">${_scannerAudienceLabel(_scannerFilterState.audience)}</span></span>
              </div>
            </div>
          </div>

          <div id="scanner-table-wrap" class="overflow-x-auto"></div>
        `

        const _applyScannerFilters = () => {
          const state = _scannerFilterState
          const q = state.q.trim().toLowerCase()
          return allRows.filter(row => {
            if (state.audience === 'male' && !(row.type === 'student' && row.gender === 'ชาย')) return false
            if (state.audience === 'female' && !(row.type === 'student' && row.gender === 'หญิง')) return false
            if (state.audience === 'teacher' && row.type !== 'teacher') return false
            if (state.type && row.type !== state.type) return false
            if (state.gender && row.gender !== state.gender) return false
            if (state.room && row.roomInfo !== state.room) return false
            if (state.permission && row.permission !== state.permission) return false
            if (state.day === 'none' && !(row.type === 'student' && row.assignedDays.length === 0)) return false
            if (state.day && state.day !== 'none' && !row.assignedDays.includes(state.day)) return false
            if (q && !row.searchText.includes(q)) return false
            return true
          })
        }

        const _syncScannerFilterControls = () => {
          listWrap.querySelectorAll('.scanner-audience-tab').forEach(btn => {
            const active = btn.dataset.scannerAudience === _scannerFilterState.audience
            btn.className = active
              ? 'scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition bg-white text-indigo-700 shadow-sm'
              : 'scanner-audience-tab px-3 py-1.5 rounded-xl text-xs font-bold transition text-gray-500 hover:text-gray-700'
          })
          const filteredCountEl = document.getElementById('scanner-filtered-count')
          if (filteredCountEl) filteredCountEl.textContent = _applyScannerFilters().length
          const audienceLabelEl = document.getElementById('scanner-active-audience-label')
          if (audienceLabelEl) audienceLabelEl.textContent = _scannerAudienceLabel(_scannerFilterState.audience)
        }

        const _renderScannersTable = () => {
          _syncScannerFilterControls()
          const rows = _applyScannerFilters()
          const tableWrap = document.getElementById('scanner-table-wrap')
          const filteredCountEl = document.getElementById('scanner-filtered-count')
          if (filteredCountEl) filteredCountEl.textContent = rows.length
          document.getElementById('scanner-count-badge').textContent = rows.length === totalScannersCount
            ? `${totalScannersCount} คน`
            : `${rows.length}/${totalScannersCount} คน`
          const activeFilterId = document.activeElement?.id?.startsWith('scanner-filter-')
            ? document.activeElement.id
            : ''
          const activeSelectionStart = activeFilterId === 'scanner-filter-q'
            ? document.activeElement.selectionStart
            : null

          tableWrap.innerHTML = `
            <table class="w-full text-xs min-w-[980px]">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-left align-top">
                    <span class="block mb-1">ประเภท</span>
                    <select id="scanner-filter-type" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="student" ${_scannerFilterState.type === 'student' ? 'selected' : ''}>นักเรียน</option>
                      <option value="teacher" ${_scannerFilterState.type === 'teacher' ? 'selected' : ''}>ครู</option>
                    </select>
                  </th>
                  <th class="px-2 py-3 text-left align-top">
                    <span class="block mb-1">รหัส/ค้นหา</span>
                    <input id="scanner-filter-q" value="${_esc(_scannerFilterState.q)}" placeholder="รหัส ชื่อ ห้อง"
                      class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none" />
                  </th>
                  <th class="px-3 py-3 text-left align-top">ชื่อ-นามสกุล</th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ห้องเรียน / กลุ่มสาระ</span>
                    <select id="scanner-filter-room" class="w-36 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${roomOptions.map(room => `<option value="${_esc(room)}" ${_scannerFilterState.room === room ? 'selected' : ''}>${_esc(room)}</option>`).join('')}
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">เพศ</span>
                    <select id="scanner-filter-gender" class="w-24 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="ชาย" ${_scannerFilterState.gender === 'ชาย' ? 'selected' : ''}>ชาย</option>
                      <option value="หญิง" ${_scannerFilterState.gender === 'หญิง' ? 'selected' : ''}>หญิง</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">ประเภทสิทธิ์</span>
                    <select id="scanner-filter-permission" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      <option value="normal" ${_scannerFilterState.permission === 'normal' ? 'selected' : ''}>ทั่วไป</option>
                      <option value="extended" ${_scannerFilterState.permission === 'extended' ? 'selected' : ''}>ขยายเวลา</option>
                      <option value="teacher" ${_scannerFilterState.permission === 'teacher' ? 'selected' : ''}>ครู</option>
                    </select>
                  </th>
                  <th class="px-3 py-3 text-left align-top">
                    <span class="block mb-1">วันรับผิดชอบ</span>
                    <select id="scanner-filter-day" class="w-28 border border-gray-200 rounded-lg px-2 py-1 bg-white text-[11px] focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      ${_scannerDays.map(d => `<option value="${d.key}" ${_scannerFilterState.day === d.key ? 'selected' : ''}>${d.full}</option>`).join('')}
                      <option value="none" ${_scannerFilterState.day === 'none' ? 'selected' : ''}>ยังไม่กำหนด</option>
                    </select>
                  </th>
                  <th class="px-4 py-3 text-right align-top">การจัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${rows.length ? rows.map(row => {
                  if (row.type === 'teacher') {
                    return `
                      <tr class="hover:bg-gray-50 transition">
                        <td class="px-4 py-2"><span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">คุณครู</span></td>
                        <td class="px-2 py-2 font-mono text-gray-700">${_esc(row.code)}</td>
                        <td class="px-3 py-2">
                          <div class="flex items-center gap-2">
                            ${row.image_url
                              ? `<img src="${_esc(row.image_url)}" class="w-6 h-6 rounded-full object-cover"/>`
                              : `<div class="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-indigo-600">👤</div>`
                            }
                            <span class="font-medium text-gray-800">${_esc(row.name)}</span>
                          </div>
                        </td>
                        <td class="px-3 py-2 text-gray-500">กลุ่มสาระ ${_esc(row.roomInfo || '—')}</td>
                        <td class="px-3 py-2 text-gray-300">—</td>
                        <td class="px-3 py-2">
                          <span class="inline-flex items-center justify-center min-w-[70px] px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">คุณครู</span>
                        </td>
                        <td class="px-3 py-2 text-gray-400">—</td>
                        <td class="px-4 py-2 text-right">
                          <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                            data-code="${_esc(row.code)}" data-name="${_esc(row.name)}" data-type="teacher">
                            ถอนสิทธิ์
                          </button>
                        </td>
                      </tr>
                    `
                  }

                  const dayButtonsHTML = _scannerDays.map(d => {
                    const isAssigned = row.assignedDays.includes(d.key)
                    return `
                      <button class="btn-toggle-day-scanner w-6 h-6 rounded-full text-[9px] font-extrabold transition-all border ${isAssigned ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm' : 'bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600'}"
                        data-code="${_esc(row.code)}" data-day="${d.key}" data-name="${_esc(row.name)}" title="เวรวัน${d.full}">
                        ${d.label}
                      </button>
                    `
                  }).join(' ')

                  return `
                    <tr class="hover:bg-gray-50 transition">
                      <td class="px-4 py-2">
                        <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">นักเรียน</span>
                      </td>
                      <td class="px-2 py-2 font-mono text-gray-700">${_esc(row.code)}</td>
                      <td class="px-3 py-2">
                        <div class="flex items-center gap-2">
                          ${row.image_url
                            ? `<img src="${_esc(row.image_url)}" class="student-avatar-premium w-6 h-8" />`
                            : `<div class="student-avatar-premium-placeholder w-6 h-8 text-[10px]">👤</div>`
                          }
                          <span class="font-medium text-gray-800">${_esc(row.name)}</span>
                        </div>
                      </td>
                      <td class="px-3 py-2 text-gray-500">ห้อง ${_esc(row.roomInfo || '—')}</td>
                      <td class="px-3 py-2">
                        <span class="px-2 py-0.5 rounded-full ${row.gender === 'หญิง' ? 'bg-rose-50 text-rose-700 border-rose-100' : 'bg-sky-50 text-sky-700 border-sky-100'} text-[10px] font-bold border">${_esc(row.gender || '—')}</span>
                      </td>
                      <td class="px-3 py-2">
                        <button class="btn-toggle-extended-scanner inline-flex items-center justify-center min-w-[70px] px-2 py-1 rounded-lg transition text-[10px] font-bold border ${row.permission === 'extended' ? 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'}"
                          data-code="${_esc(row.code)}" data-name="${_esc(row.name)}" data-extended="${row.permission === 'extended' ? '1' : '0'}">
                          ${row.permission === 'extended' ? 'ขยายเวลา' : 'ทั่วไป'}
                        </button>
                      </td>
                      <td class="px-3 py-2">
                        <div class="flex gap-1 items-center">
                          ${dayButtonsHTML}
                          ${row.assignedDays.length === 0 ? `<span class="ml-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-bold">ยังไม่มีเวร</span>` : ''}
                        </div>
                      </td>
                      <td class="px-4 py-2 text-right">
                        <button class="btn-revoke-scanner px-2.5 py-1 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition text-[10px] font-semibold border border-red-200"
                          data-id="${row.id}" data-code="${_esc(row.code)}" data-name="${_esc(row.name)}" data-type="student">
                          ถอนสิทธิ์
                        </button>
                      </td>
                    </tr>
                  `
                }).join('') : `
                  <tr>
                    <td colspan="8" class="px-4 py-10 text-center text-gray-400 text-sm">ไม่พบรายชื่อที่ตรงกับตัวกรอง</td>
                  </tr>
                `}
              </tbody>
            </table>
          `

          ;['scanner-filter-type', 'scanner-filter-room', 'scanner-filter-gender', 'scanner-filter-permission', 'scanner-filter-day'].forEach(id => {
            document.getElementById(id)?.addEventListener('change', e => {
              const key = id.replace('scanner-filter-', '')
              _scannerFilterState[key] = e.target.value
              _renderScannersTable()
            })
          })
          document.getElementById('scanner-filter-q')?.addEventListener('input', e => {
            _scannerFilterState.q = e.target.value
            _renderScannersTable()
          })
          if (activeFilterId) {
            const activeFilterEl = document.getElementById(activeFilterId)
            activeFilterEl?.focus()
            if (activeFilterId === 'scanner-filter-q' && activeSelectionStart !== null) {
              activeFilterEl?.setSelectionRange(activeSelectionStart, activeSelectionStart)
            }
          }

          listWrap.querySelectorAll('.btn-toggle-extended-scanner').forEach(btn => {
            btn.addEventListener('click', async () => {
              const code = btn.dataset.code
              const name = btn.dataset.name
              const nextExtended = btn.dataset.extended !== '1'
              btn.disabled = true
              btn.textContent = 'กำลังบันทึก...'
              try {
                await _saveExtendedScannerCode(code, nextExtended)
                showToast(`ปรับสิทธิ์ "${name}" เป็น${nextExtended ? 'ขยายเวลา' : 'ทั่วไป'}แล้ว`, 'success')
                _loadScannersList()
              } catch(err) {
                showToast('ปรับสิทธิ์ไม่สำเร็จ: ' + err.message, 'error')
                btn.disabled = false
                btn.textContent = btn.dataset.extended === '1' ? 'ขยายเวลา' : 'ทั่วไป'
              }
            })
          })

          // ผูกอีเวนต์ปุ่มเลือกวันรับผิดชอบ
          listWrap.querySelectorAll('.btn-toggle-day-scanner').forEach(btn => {
            btn.addEventListener('click', async () => {
              const code = btn.dataset.code
              const day = btn.dataset.day
              const name = btn.dataset.name
              btn.disabled = true
              try {
                const currentConfig = await getSystemConfig().catch(() => ({}))
                const dayKey = `prayerScanner${day}`
                let codes = _scannerCodeList(currentConfig[dayKey])
                if (codes.includes(code)) {
                  codes = codes.filter(c => c !== code)
                } else {
                  codes.push(code)
                }
                await updateSystemConfig(dayKey, codes.join(','))
                const dayName = _scannerDays.find(d => d.key === day)?.full || day
                showToast(`ปรับสิทธิ์เวรวัน${dayName} ของ "${name}" สำเร็จ`, 'success')
                _loadScannersList()
              } catch(err) {
                showToast('ปรับสิทธิ์เวรล้มเหลว: ' + err.message, 'error')
                btn.disabled = false
              }
            })
          })

          // ผูกอีเวนต์ปุ่มถอนสิทธิ์
          listWrap.querySelectorAll('.btn-revoke-scanner').forEach(btn => {
            btn.addEventListener('click', async () => {
              const type = btn.dataset.type
              const name = btn.dataset.name
              if (!confirm(`ถอนสิทธิ์สแกนเนอร์ของ "${name}" หรือไม่?`)) return
              try {
                if (type === 'student') {
                  const sid = +btn.dataset.id
                  const code = btn.dataset.code
                  const { error } = await supabase.from('students').update({ can_scan_prayer: false }).eq('id', sid)
                  if (error) throw error
                  await _saveExtendedScannerCode(code, false)

                  // ล้างรหัสในกลุ่มรายวันด้วย
                  const currentConfig = await getSystemConfig().catch(() => ({}))
                  for (const d of _scannerDays) {
                    const dayKey = `prayerScanner${d.key}`
                    const updatedCodes = _scannerCodeList(currentConfig[dayKey]).filter(c => c !== code)
                    await updateSystemConfig(dayKey, updatedCodes.join(','))
                  }
                } else {
                  const code = btn.dataset.code
                  const currentConfig = await getSystemConfig().catch(() => ({}))
                  const updatedTeachers = _scannerCodeList(currentConfig.prayerScannerTeachers)
                    .filter(c => c !== code)

                  await updateSystemConfig('prayerScannerTeachers', updatedTeachers.join(','))
                }
                showToast(`ถอนสิทธิ์ "${name}" สำเร็จ`, 'success')
                _loadScannersList()
              } catch(err) {
                showToast('ทำรายการไม่สำเร็จ: ' + err.message, 'error')
              }
            })
          })
        }

        listWrap.querySelectorAll('[data-scanner-audience]').forEach(btn => {
          btn.addEventListener('click', () => {
            _scannerFilterState.audience = btn.dataset.scannerAudience
            _scannerFilterState.type = ''
            _scannerFilterState.gender = ''
            if (_scannerFilterState.audience === 'teacher') {
              _scannerFilterState.day = ''
              _scannerFilterState.permission = ''
            }
            _renderScannersTable()
          })
        })
        document.getElementById('btn-filter-unassigned-scanner')?.addEventListener('click', () => {
          _scannerFilterState.day = 'none'
          _scannerFilterState.type = 'student'
          _renderScannersTable()
        })
        document.getElementById('btn-reset-scanner-filters')?.addEventListener('click', () => {
          _scannerFilterState = { audience: 'all', type: '', gender: '', room: '', permission: '', day: '', q: '' }
          _renderScannersTable()
        })

        _renderScannersTable()

      } catch(err) {
        listWrap.innerHTML = `<div class="p-8 text-center text-red-400 text-sm">โหลดรายการล้มเหลว: ${err.message}</div>`
      }
    }

    // กดค้นหา
    document.getElementById('btn-search-scanner-students').addEventListener('click', async () => {
      const input = document.getElementById('pr-scanner-search-input').value.trim()
      if (!input) { showToast('กรุณากรอกรหัสนักเรียนหรือรหัสครู', 'warning'); return }

      const codes = input.split(/[\s,]+/).map(c => c.trim()).filter(Boolean)
      if (!codes.length) return

      try {
        const [stuRes, teachRes] = await Promise.all([
          supabase.from('students').select('id, student_code, full_name, main_room, gender, image_url').in('student_code', codes),
          supabase.from('teachers').select('id, teacher_code, full_name, dept, image_url').in('teacher_code', codes)
        ])

        if (stuRes.error) throw stuRes.error
        if (teachRes.error) throw teachRes.error

        const studentsData = stuRes.data ?? []
        const teachersData = teachRes.data ?? []

        _foundScanners = [
          ...studentsData.map(s => ({ ...s, code: s.student_code, type: 'student', display_info: `รหัส ${s.student_code} · ห้อง ${s.main_room || '—'} · ${s.gender || 'ไม่ระบุเพศ'}` })),
          ...teachersData.map(t => ({ ...t, code: t.teacher_code, type: 'teacher', display_info: `รหัสครู ${t.teacher_code} · กลุ่มสาระ ${t.dept || '—'}` }))
        ]

        const previewContainer = document.getElementById('scanner-preview-container')
        const previewCards = document.getElementById('scanner-preview-cards')

        if (!_foundScanners.length) {
          previewContainer.classList.add('hidden')
          showToast('ไม่พบรหัสนักเรียนหรือรหัสครูที่ระบุ', 'warning')
          return
        }

        previewContainer.classList.remove('hidden')
        previewCards.innerHTML = _foundScanners.map(s => `
          <div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">
            ${s.type === 'student'
              ? (s.image_url
                  ? `<img src="${s.image_url}" class="student-avatar-premium w-10 h-14" />`
                  : `<div class="student-avatar-premium-placeholder w-10 h-14 bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">👤</div>`)
              : (s.image_url
                  ? `<img src="${s.image_url}" class="w-10 h-10 rounded-full object-cover flex-shrink-0"/>`
                  : `<div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">👨‍🏫</div>`)
            }
            <div class="min-w-0">
              <p class="font-bold text-gray-800 text-xs truncate">
                ${s.full_name}
                ${s.type === 'teacher' ? `<span class="ml-1 px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">คุณครู</span>` : ''}
              </p>
              <p class="text-[10px] text-gray-400">${s.display_info}</p>
            </div>
          </div>
        `).join('')

      } catch(err) {
        showToast('ค้นหาล้มเหลว: ' + err.message, 'error')
      }
    })

    // กดยืนยันมอบสิทธิ์
    document.getElementById('btn-confirm-scanner-grant').addEventListener('click', async () => {
      if (!_foundScanners.length) return
      const btn = document.getElementById('btn-confirm-scanner-grant')
      btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
      try {
        const studentIds = _foundScanners.filter(s => s.type === 'student').map(s => s.id)
        const teacherCodes = _foundScanners.filter(s => s.type === 'teacher').map(s => s.code)

        // 1. อัปเดต students
        if (studentIds.length > 0) {
          const { error } = await supabase.from('students').update({ can_scan_prayer: true }).in('id', studentIds)
          if (error) throw error
        }

        // 2. อัปเดต teachers ใน config
        if (teacherCodes.length > 0) {
          const currentConfig = await getSystemConfig().catch(() => ({}))
          let existingTeachers = _scannerCodeList(currentConfig.prayerScannerTeachers)

          teacherCodes.forEach(code => {
            if (!existingTeachers.includes(code)) {
              existingTeachers.push(code)
            }
          })

          await updateSystemConfig('prayerScannerTeachers', existingTeachers.join(','))
        }

        showToast(`มอบสิทธิ์สำเร็จ ${_foundScanners.length} คน`, 'success')
        document.getElementById('pr-scanner-search-input').value = ''
        document.getElementById('scanner-preview-container').classList.add('hidden')
        _foundScanners = []
        _loadScannersList()
      } catch(err) {
        showToast('บันทึกไม่สำเร็จ: ' + err.message, 'error')
      } finally {
        btn.disabled = false; btn.textContent = '✓ ยืนยันและมอบสิทธิ์สแกนเนอร์'
      }
    })

    _loadScannersList()
  }

  // ─── Tab switcher ──────────────────────────────────────────────────────────
  const _switchTab = (tab) => {
    if (historyInterval) {
      clearInterval(historyInterval)
      historyInterval = null
    }

    document.querySelectorAll('[data-tab]').forEach(b => {
      b.className = b.dataset.tab===tab
        ? 'px-4 py-1.5 rounded-lg text-sm font-medium transition bg-white shadow text-indigo-700'
        : 'px-4 py-1.5 rounded-lg text-sm font-medium transition text-gray-500 hover:text-gray-700'
    })
    if (tab==='scores') _showScores();
    else if (tab==='history') _showHistory();
    else if (tab==='scanners') _showScanners();
    else _showConfig()
  }
  document.getElementById('pr-tab-scores').addEventListener('click', ()=>_switchTab('scores'))
  document.getElementById('pr-tab-history')?.addEventListener('click', ()=>_switchTab('history'))
  document.getElementById('pr-tab-scanners').addEventListener('click', ()=>_switchTab('scanners'))
  document.getElementById('pr-tab-config').addEventListener('click', ()=>_switchTab('config'))
  if (isAllowedScanner) {
    document.getElementById('pr-tab-scanner-cam')?.addEventListener('click', async () => {
      const { renderStudentPrayerScanner } = await import('./student-views.js')
      renderStudentPrayerScanner(activeTeacher)
    })
  }
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


// ─── Announcement modal helpers (shared by admin + supervisor modals) ─────────

const _annSessionPillsHTML = (pfx, selPeriods = []) =>
  [1,2,3,4,5,6,7,8,9].map(p => {
    const sel = selPeriods.includes(p)
    return `<button type="button" data-period="${p}"
      class="${pfx}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition
      ${sel ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-600 border-gray-200 hover:border-violet-400'}">${p}</button>`
  }).join('')

const _annSessionHTML = (pfx, idx, date = '', periods = []) => `
  <div class="${pfx}-session border border-violet-200 rounded-xl p-3 bg-white">
    <div class="flex items-center justify-between mb-2">
      <span class="${pfx}-session-label text-xs font-semibold text-violet-700">วันที่ ${idx + 1}</span>
      <button type="button" class="${pfx}-session-remove ${idx === 0 ? 'hidden' : ''} text-xs text-red-400 hover:text-red-600 font-medium transition px-1.5 py-0.5 rounded hover:bg-red-50">✕ ลบ</button>
    </div>
    <input type="date" class="${pfx}-session-date w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 mb-2" value="${date}"/>
    <div class="flex flex-wrap gap-1.5 ${pfx}-session-pills">${_annSessionPillsHTML(pfx, periods)}</div>
  </div>`

function _setupAnnSessions(m, pfx) {
  const list = m.querySelector(`#${pfx}-sessions-list`)

  const _rebind = () => {
    list.querySelectorAll(`.${pfx}-session-pill`).forEach(pill => {
      pill.onclick = null
      pill.addEventListener('click', () => {
        const on = pill.classList.contains('bg-violet-600')
        pill.className = `${pfx}-session-pill w-9 h-9 rounded-full text-xs font-bold border transition ${on
          ? 'bg-white text-gray-600 border-gray-200 hover:border-violet-400'
          : 'bg-violet-600 text-white border-violet-600'}`
      })
    })
    list.querySelectorAll(`.${pfx}-session-remove`).forEach(btn => {
      btn.onclick = null
      btn.addEventListener('click', () => {
        btn.closest(`.${pfx}-session`).remove()
        _updateLabels()
      })
    })
  }

  const _updateLabels = () => {
    const sessions = [...list.querySelectorAll(`.${pfx}-session`)]
    sessions.forEach((sess, i) => {
      sess.querySelector(`.${pfx}-session-label`).textContent = `วันที่ ${i + 1}`
      sess.querySelector(`.${pfx}-session-remove`).classList.toggle('hidden', sessions.length <= 1)
    })
    _rebind()
  }

  m.querySelector(`#${pfx}-add-session`).addEventListener('click', () => {
    const idx = list.querySelectorAll(`.${pfx}-session`).length
    const div = document.createElement('div')
    div.innerHTML = _annSessionHTML(pfx, idx)
    list.appendChild(div.firstElementChild)
    _updateLabels()
  })

  _rebind()
}

function _getAnnSessions(m, pfx) {
  return [...m.querySelectorAll(`.${pfx}-session`)].map(sess => ({
    date:    sess.querySelector(`.${pfx}-session-date`).value,
    periods: [...sess.querySelectorAll(`.${pfx}-session-pill.bg-violet-600`)].map(p => parseInt(p.dataset.period)),
  }))
}

// ─── Announcements ────────────────────────────────────────────────────────────

const _ANN_AUDIENCE_BADGE = {
  teacher: '<span class="px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full text-[11px] font-bold">👩‍🏫 ครูเท่านั้น</span>',
  student: '<span class="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-[11px] font-bold">🎒 นักเรียนเท่านั้น</span>',
  futsal_player: '<span class="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-[11px] font-bold">⚽ นักกีฬาฟุตซอลเท่านั้น</span>',
}
const _annAudienceBadge = a => _ANN_AUDIENCE_BADGE[a] ?? ''

// ยิง push notification จริงไปหากลุ่มเป้าหมายเมื่อมีประกาศใหม่ (Edge Function 'send-push')
// เป็นของเสริม — ถ้ายิงไม่สำเร็จ (เช่นยังไม่มีใครสมัครรับ) ไม่บล็อกการบันทึกประกาศหลัก
// audience='futsal_player' ยังไม่มี target เฉพาะใน edge function เลยไม่ยิง push (กันยิงกว้างเกินไปหาทุกคน) — ยังเห็นได้ผ่าน popup ในแอปตามปกติ
async function _sendAnnouncementPush(title, body, audience = 'all') {
  try {
    const targets = audience === 'teacher' ? ['all_teachers']
      : audience === 'student' ? ['all_students']
      : audience === 'futsal_player' ? []
      : ['all_teachers', 'all_students']
    await Promise.all(targets.map(target => supabase.functions.invoke('send-push', {
      body: { title: `📢 ${title}`, body: (body ?? '').slice(0, 150), url: target === 'all_students' ? 'student.html' : 'teacher.html', target },
    })))
  } catch { /* เงียบไว้ ไม่กระทบผู้ใช้ */ }
}

export async function renderAnnouncements() {
  setActiveNav('announcements')
  document.getElementById('page-title').textContent = 'ประกาศ'
  const _esc = v => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  const _fmtDate = d => new Date(d).toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'2-digit'})

  setContent(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ประกาศที่แสดงให้ครูทุกคนเห็นหลังล็อกอิน</p>
      </div>
      <button id="ann-create-btn"
        class="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition shadow-sm flex items-center gap-2">
        <span class="text-base">＋</span> สร้างประกาศ
      </button>
    </div>
    <div id="ann-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`)

  const _renderList = async () => {
    const list = document.getElementById('ann-list')
    if (!list) return
    let items
    try { items = await getAllAnnouncements() }
    catch { list.innerHTML = '<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>'; return }

    if (!items.length) {
      list.innerHTML = `<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`
      return
    }

    const commentCountByAnnId = {}
    try {
      const allComments = await getAnnouncementCommentsBulk(items.map(a => a.id))
      allComments.forEach(c => { commentCountByAnnId[c.announcement_id] = (commentCountByAnnId[c.announcement_id] ?? 0) + 1 })
    } catch {}

    list.innerHTML = items.map(a => `
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${a.is_active ? 'border-gray-100' : 'border-dashed border-gray-200 opacity-70'}" data-id="${a.id}">
        ${a.priority > 0 ? `<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>` :
          a.ann_type === 'training' ? `<div class="h-1 bg-gradient-to-r from-violet-400 to-purple-400"></div>` :
          a.is_active ? `<div class="h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>` :
          `<div class="h-1 bg-gray-200"></div>`}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${a.ann_type === 'training' ? 'bg-violet-50' : a.is_active ? 'bg-indigo-50' : 'bg-gray-100'}">
            ${a.priority > 0 ? '📌' : a.ann_type === 'training' ? '🎓' : a.is_active ? '📢' : '📄'}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide
                ${a.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}">
                ${a.is_active ? '● แสดงอยู่' : '○ ปิดอยู่'}
              </span>
              ${a.ann_type === 'training' ? `<span class="px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full text-[11px] font-bold">🎓 อบรม/กิจกรรม</span>` : ''}
              ${a.priority > 0 ? `<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>` : ''}
              ${_annAudienceBadge(a.audience)}
              ${a.video_url ? `<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>` : ''}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${_esc(a.title)}</h3>
            ${a.ann_type === 'training' && a.event_date ? `
              <div class="mt-2 flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📅 ${_fmtDate(a.event_date)}</span>
                ${a.event_location ? `<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">📍 ${_esc(a.event_location)}</span>` : ''}
                ${(a.event_periods?.length) ? `<span class="px-2 py-1 bg-violet-50 text-violet-700 rounded-lg">🕐 คาบ ${a.event_periods.sort((x,y)=>x-y).join(', ')}</span>` : ''}
              </div>` : a.body ? `<p class="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">${_esc(a.body)}</p>` : ''}
            <p class="text-[11px] text-gray-400 mt-2">
              ${_fmtDate(a.created_at)}
              ${a.teachers?.full_name ? ` · 📝 ${_esc(a.teachers.full_name)}` : ' · ⚙️ แอดมิน'}
            </p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${a.like_count ?? 0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${a.id}" data-title="${_esc(a.title)}">💬 ${commentCountByAnnId[a.id] ?? 0} ความคิดเห็น</button>
              <span>👁️ ${a.view_count ?? 0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${a.ann_type === 'training' ? `<button class="ann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${a.id}" data-title="${_esc(a.title)}">👥 รายชื่อ</button>` : ''}
            <button class="ann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${a.is_active ? 'border-gray-200 text-gray-500 hover:bg-gray-50' : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50'}"
              data-id="${a.id}" data-active="${a.is_active}">
              ${a.is_active ? '⏸ ปิด' : '▶ เปิด'}
            </button>
            <button class="ann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${a.id}">✏️ แก้ไข</button>
            <button class="ann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 hover:text-red-600 transition"
              data-id="${a.id}" data-title="${_esc(a.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join('')

    list.querySelectorAll('.ann-toggle-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = Number(btn.dataset.id); const isActive = btn.dataset.active === 'true'
        btn.disabled = true; btn.textContent = '...'
        try { await updateAnnouncement(id, { isActive: !isActive }); await _renderList() }
        catch { showToast('บันทึกไม่สำเร็จ','error'); btn.disabled = false }
      })
    })
    list.querySelectorAll('.ann-edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = items.find(a => a.id === Number(btn.dataset.id))
        if (item) _openAnnModal(item, _renderList)
      })
    })
    list.querySelectorAll('.ann-del-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm(`ลบประกาศ "${btn.dataset.title}" ?`)) return
        btn.disabled = true
        try { await deleteAnnouncement(Number(btn.dataset.id)); await _renderList() }
        catch { showToast('ลบไม่สำเร็จ','error'); btn.disabled = false }
      })
    })
    list.querySelectorAll('.ann-rsvp-list-btn').forEach(btn => {
      btn.addEventListener('click', async () => _showRsvpList(Number(btn.dataset.id), btn.dataset.title))
    })
    list.querySelectorAll('.ann-comments-view-btn').forEach(btn => {
      btn.addEventListener('click', async () => _showCommentsList(Number(btn.dataset.id), btn.dataset.title, _renderList))
    })
  }

  const _showCommentsList = async (annId, title, onChange) => {
    const comments = await getAnnouncementComments(annId).catch(() => [])
    const _fmtDateTime = d => new Date(d).toLocaleString('th-TH',{day:'numeric',month:'short',year:'2-digit',hour:'2-digit',minute:'2-digit'})
    const overlay = document.createElement('div')
    overlay.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
    overlay.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${_esc(title)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5 space-y-3" id="comments-list-body">
          ${!comments.length ? '<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>' : comments.map(c => `
            <div class="flex items-start gap-2" data-comment-id="${c.id}">
              <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${_esc((c.teachers?.full_name ?? '?').charAt(0))}</div>
              <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-xs font-semibold text-gray-700">${_esc(c.teachers?.full_name ?? 'ครู')}</p>
                  <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${c.id}" title="ลบความคิดเห็น">🗑</button>
                </div>
                <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${_esc(c.comment_text)}</p>
                <p class="text-[10px] text-gray-400 mt-1">${_fmtDateTime(c.created_at)}</p>
              </div>
            </div>`).join('')}
        </div>
      </div>`
    document.body.appendChild(overlay)
    overlay.querySelector('#comments-list-close').onclick = () => overlay.remove()
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
    overlay.querySelectorAll('.comment-del-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('ลบความคิดเห็นนี้?')) return
        try {
          await deleteAnnouncementComment(Number(btn.dataset.id))
          overlay.querySelector(`[data-comment-id="${btn.dataset.id}"]`)?.remove()
          await onChange?.()
        } catch (e) { showToast('ลบไม่สำเร็จ: ' + (e.message ?? ''), 'error') }
      })
    })
  }

  const _showRsvpList = async (annId, title) => {
    const { getAnnouncementRsvps } = await import('./api.js')
    const rsvps = await getAnnouncementRsvps(annId).catch(() => [])
    const groups = { yes: [], maybe: [], no: [] }
    rsvps.forEach(r => { if (groups[r.response]) groups[r.response].push(r) })
    const _row = r => `<li class="text-sm text-gray-700">${_esc(r.teachers?.full_name ?? '?')} <span class="text-xs text-gray-400">${r.teachers?.dept ?? ''}</span></li>`
    const _section = (key, icon, label, color) => groups[key].length ? `
      <div class="mb-4">
        <p class="text-xs font-bold ${color} mb-1.5">${icon} ${label} (${groups[key].length} คน)</p>
        <ul class="space-y-0.5 pl-3">${groups[key].map(_row).join('')}</ul>
      </div>` : ''
    const overlay = document.createElement('div')
    overlay.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
    overlay.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ</p>
            <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[220px]">${_esc(title)}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="rsvp-list-close">✕</button>
        </div>
        <div class="overflow-y-auto p-5">
          ${!rsvps.length ? '<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>' : ''}
          ${_section('yes',   '✅', 'สนใจเข้าร่วมแน่นอน', 'text-emerald-700')}
          ${_section('maybe', '🤔', 'ไม่แน่ใจ',            'text-amber-700')}
          ${_section('no',    '❌', 'ไม่สนใจ',             'text-gray-500')}
          ${rsvps.length ? `<p class="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-1">รวมตอบกลับ ${rsvps.length} คน</p>` : ''}
        </div>
      </div>`
    document.body.appendChild(overlay)
    overlay.querySelector('#rsvp-list-close').onclick = () => overlay.remove()
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
  }

  const _openAnnModal = (item, onDone) => {
    document.getElementById('ann-modal')?.remove()
    const m = document.createElement('div')
    m.id = 'ann-modal'
    m.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
    const isEdit = !!item?.id
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <h3 class="font-bold text-gray-800 text-base">${isEdit ? '✏️ แก้ไขประกาศ' : '➕ สร้างประกาศใหม่'}</h3>
          <button id="ann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4 overflow-y-auto flex-1">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="ann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${_esc(item?.title ?? '')}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="ann-body" rows="4" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${_esc(item?.body ?? '')}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="ann-image-preview" class="${item?.file_url ? '' : 'hidden'} mb-2 relative inline-block">
              <img id="ann-image-preview-img" src="${_esc(item?.file_url ?? '')}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="ann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="ann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="ann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="ann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${_esc(item?.video_url ?? '')}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(item?.ann_type ?? 'general') === 'general' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${item?.ann_type === 'training' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(item?.audience ?? 'all') === 'all' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${item?.audience === 'teacher' ? 'bg-sky-600 text-white border-sky-600' : 'bg-white text-gray-600 border-gray-200 hover:border-sky-300'}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${item?.audience === 'student' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300'}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${item?.audience === 'futsal_player' ? 'bg-pink-600 text-white border-pink-600' : 'bg-white text-gray-600 border-gray-200 hover:border-pink-300'}">⚽ นักกีฬาฟุตซอล</button>
            </div>
          </div>
          <!-- Training fields -->
          <div id="ann-training-fields" class="${item?.ann_type === 'training' ? '' : 'hidden'} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="ann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${_esc(item?.event_location ?? '')}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="ann-sessions-list" class="space-y-2">
                ${_annSessionHTML('ann', 0, item?.event_date ?? '', item?.event_periods ?? [])}
              </div>
              ${!isEdit ? `<button type="button" id="ann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>` : `<div id="ann-add-session" class="hidden"></div>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${(item?.schedule_filter ?? 'all') === 'all' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${(item?.schedule_filter ?? 'all') === 'any' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="ann-active-toggle" data-on="${item?.is_active !== false ? 'true' : 'false'}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${item?.is_active !== false ? 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100'}">
              ${item?.is_active !== false ? '● แสดงให้ครูเห็น' : '○ ปิดอยู่'}
            </button>
            <button type="button" id="ann-pin" data-on="${(item?.priority ?? 0) > 0 ? 'true' : 'false'}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(item?.priority ?? 0) > 0 ? 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100' : 'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100'}">
              ${(item?.priority ?? 0) > 0 ? '⭐ ปักหมุด' : '☆ ปักหมุด'}
            </button>
          </div>
          <div class="border-t border-gray-100 pt-4">
            <button type="button" id="ann-cal-ref"
              class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition text-left flex items-center gap-2 mb-3">
              📋 <span>อ้างอิงปฏิทินปฏิบัติงาน</span>
              <span class="text-[11px] font-normal text-indigo-400 ml-auto">auto-fill ข้อมูล</span>
            </button>
            <div id="ann-cal-picker" class="hidden mb-3">
              <select id="ann-cal-event-sel"
                class="w-full border border-indigo-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-2">
                <option value="">— เลือกกิจกรรม —</option>
              </select>
              <div id="ann-cal-preview" class="hidden bg-indigo-50 rounded-xl p-3 space-y-1 text-xs text-indigo-800"></div>
              <button type="button" id="ann-cal-fill" class="hidden mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition w-full">
                ใส่ข้อมูลลงฟอร์ม
              </button>
            </div>
          </div>
          <div class="space-y-3">
            <div>
              <button type="button" id="ann-ack" data-on="${item?.requires_ack ? 'true' : 'false'}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${item?.requires_ack ? 'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100' : 'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100'}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="ann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${item?.due_date ?? ''}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 flex-shrink-0">
          <button id="ann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="ann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`
    document.body.appendChild(m)
    const close = () => m.remove()
    m.querySelector('#ann-modal-close').onclick = close
    m.querySelector('#ann-modal-cancel').onclick = close
    m.addEventListener('click', e => { if (e.target === m) close() })

    // suggestion chips
    const _TITLE_CHIPS = ['ประชุมครูประจำเดือน','แจ้งกำหนดส่งแบบฟอร์ม','ขอความร่วมมือ','แจ้งกำหนดการสอบ','แจ้งปฏิทินกิจกรรม']
    const _BODY_CHIPS  = ['ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด','ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน','หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ']
    const _makeHint = (inputEl, chips) => {
      const wrap = document.createElement('div')
      wrap.className = 'mt-1.5 hidden'
      wrap.innerHTML = `<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${chips.map(c => `<button type="button" class="ann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${c}">${c}</button>`).join('')}
        </div>`
      inputEl.parentNode.appendChild(wrap)
      inputEl.addEventListener('focus', () => wrap.classList.remove('hidden'))
      inputEl.addEventListener('blur', () => setTimeout(() => wrap.classList.add('hidden'), 150))
      wrap.querySelectorAll('.ann-chip').forEach(btn => {
        btn.addEventListener('mousedown', e => e.preventDefault())
        btn.addEventListener('click', () => {
          if (!inputEl.value.trim()) inputEl.value = btn.dataset.val
          else inputEl.value += (inputEl.tagName === 'TEXTAREA' ? '\n' : ' ') + btn.dataset.val
          inputEl.focus()
        })
      })
    }
    _makeHint(m.querySelector('#ann-title'), _TITLE_CHIPS)
    _makeHint(m.querySelector('#ann-body'), _BODY_CHIPS)

    // รูปภาพแนบ — อัปโหลดทันทีตอนเลือกไฟล์
    let annFileUrl = item?.file_url ?? null
    const annImgStatus  = m.querySelector('#ann-image-status')
    const annImgPreview = m.querySelector('#ann-image-preview')
    const annImgTag     = m.querySelector('#ann-image-preview-img')
    m.querySelector('#ann-image-file').addEventListener('change', async e => {
      const file = e.target.files?.[0]
      if (!file) return
      annImgStatus.textContent = 'กำลังอัปโหลด...'
      try {
        annFileUrl = await uploadAnnouncementImage(file)
        annImgTag.src = annFileUrl
        annImgPreview.classList.remove('hidden')
        annImgStatus.textContent = 'อัปโหลดสำเร็จ ✅'
      } catch (err) {
        annImgStatus.textContent = 'อัปโหลดไม่สำเร็จ: ' + (err.message ?? '')
      }
      e.target.value = ''
    })
    m.querySelector('#ann-image-remove').addEventListener('click', () => {
      annFileUrl = null
      annImgPreview.classList.add('hidden')
      annImgStatus.textContent = ''
    })

    // calendar reference picker
    let _calEvents = []
    m.querySelector('#ann-cal-ref').addEventListener('click', async () => {
      const picker = m.querySelector('#ann-cal-picker')
      if (!picker.classList.contains('hidden')) { picker.classList.add('hidden'); return }
      picker.classList.remove('hidden')
      const sel = m.querySelector('#ann-cal-event-sel')
      if (sel.options.length <= 1) {
        try {
          const { getWorkCalendarEvents, getSchoolConfig } = await import('./api.js')
          let ay = new Date().getFullYear() + 543, sm = 1
          try { const c = await getSchoolConfig(); ay = c.academic_year; sm = c.semester } catch {}
          _calEvents = await getWorkCalendarEvents(ay, sm)
          const TYPE_LABEL = { inspection:'🔍', deadline:'⏰', meeting:'📅', other:'📌' }
          _calEvents.forEach(ev => {
            const opt = document.createElement('option')
            opt.value = ev.id
            const rd = ev.event_type === 'inspection' && ev.round_number ? ` ครั้งที่ ${ev.round_number}` : ''
            const d = new Date(ev.event_date + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })
            opt.textContent = `${TYPE_LABEL[ev.event_type]??'📌'}${rd} ${ev.label} (${d})`
            sel.appendChild(opt)
          })
        } catch (err) { sel.innerHTML = `<option>โหลดไม่สำเร็จ: ${err.message}</option>` }
      }
    })
    m.querySelector('#ann-cal-event-sel').addEventListener('change', () => {
      const evId = +m.querySelector('#ann-cal-event-sel').value
      const ev = _calEvents.find(x => x.id === evId)
      const preview = m.querySelector('#ann-cal-preview')
      const fillBtn = m.querySelector('#ann-cal-fill')
      if (!ev) { preview.classList.add('hidden'); fillBtn.classList.add('hidden'); return }
      const items = (ev.work_calendar_items || []).sort((a,b) => a.sort_order - b.sort_order)
      const d = new Date(ev.event_date + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
      preview.innerHTML = `<p class="font-semibold">${ev.label}</p>
        <p class="text-indigo-600">📅 ${d}${ev.event_type==='inspection'&&ev.round_number?` · ครั้งที่ ${ev.round_number}`:''}</p>
        ${ev.description ? `<p>${ev.description}</p>` : ''}
        ${items.length ? `<ul class="mt-1 space-y-0.5">${items.map(it=>`<li>☑ ${it.item_label}</li>`).join('')}</ul>` : ''}`
      preview.classList.remove('hidden'); fillBtn.classList.remove('hidden')
    })
    m.querySelector('#ann-cal-fill').addEventListener('click', () => {
      const evId = +m.querySelector('#ann-cal-event-sel').value
      const ev = _calEvents.find(x => x.id === evId)
      if (!ev) return
      const items = (ev.work_calendar_items || []).sort((a,b) => a.sort_order - b.sort_order)
      const d = new Date(ev.event_date + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
      const rd = ev.event_type === 'inspection' && ev.round_number ? ` ครั้งที่ ${ev.round_number}` : ''
      m.querySelector('#ann-title').value = ev.label + (rd ? ` (${rd.trim()})` : '')
      const bodyLines = []
      if (ev.description) bodyLines.push(ev.description)
      if (items.length) { bodyLines.push('สิ่งที่ต้องเตรียม:'); items.forEach(it => bodyLines.push(`• ${it.item_label}`)) }
      bodyLines.push(`กำหนดวันที่: ${d}`)
      m.querySelector('#ann-body').value = bodyLines.join('\n')
      if (ev.event_date) m.querySelector('#ann-due').value = ev.event_date
      m.querySelector('#ann-cal-picker').classList.add('hidden')
    })

    // type toggle
    m.querySelectorAll('.ann-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type
        m.querySelectorAll('.ann-type-btn').forEach(b => {
          const isViolet = b.dataset.type === 'training'
          b.className = `ann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${b.dataset.type === type
            ? (isViolet ? 'bg-violet-600 text-white border-violet-600' : 'bg-indigo-600 text-white border-indigo-600')
            : (isViolet ? 'bg-white text-gray-600 border-gray-200 hover:border-violet-300' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300')}`
        })
        m.querySelector('#ann-training-fields').classList.toggle('hidden', type !== 'training')
      })
    })

    // audience toggle
    const _annAudienceColor = a => a === 'teacher' ? 'bg-sky-600 text-white border-sky-600' : a === 'student' ? 'bg-teal-600 text-white border-teal-600' : 'bg-indigo-600 text-white border-indigo-600'
    const _annAudienceHover = a => a === 'teacher' ? 'hover:border-sky-300' : a === 'student' ? 'hover:border-teal-300' : 'hover:border-indigo-300'
    m.querySelectorAll('.ann-audience-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        m.querySelectorAll('.ann-audience-btn').forEach(b => {
          b.className = `ann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${b.dataset.audience === btn.dataset.audience
            ? _annAudienceColor(b.dataset.audience)
            : `bg-white text-gray-600 border-gray-200 ${_annAudienceHover(b.dataset.audience)}`}`
        })
      })
    })

    // period pills toggle
    _setupAnnSessions(m, 'ann')

    m.querySelectorAll('.ann-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        m.querySelectorAll('.ann-filter-btn').forEach(b => {
          b.className = `ann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${b.dataset.filter === btn.dataset.filter
            ? 'bg-violet-600 text-white border-violet-600'
            : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'}`
        })
      })
    })

    m.querySelector('#ann-modal-save').addEventListener('click', async () => {
      const title = m.querySelector('#ann-title').value.trim()
      if (!title) { showToast('กรุณากรอกหัวข้อ','warning'); return }
      const body        = m.querySelector('#ann-body').value.trim() || null
      const isActive    = m.querySelector('#ann-active-toggle').dataset.on === 'true'
      const priority    = m.querySelector('#ann-pin').dataset.on === 'true' ? 1 : 0
      const requiresAck = m.querySelector('#ann-ack').dataset.on === 'true'
      const dueDate     = m.querySelector('#ann-due').value || null
      const annType     = m.querySelector('.ann-type-btn.bg-violet-600') ? 'training' : (item?.ann_type === 'training' ? 'training' : 'general')
      const audience    = m.querySelector('.ann-audience-btn.text-white')?.dataset.audience ?? (item?.audience ?? 'all')
      const videoUrl    = m.querySelector('#ann-video-url').value.trim() || null
      const eventLocation = annType === 'training' ? (m.querySelector('#ann-event-location').value.trim() || null) : null
      const scheduleFilter = m.querySelector('.ann-filter-btn.bg-violet-600')?.dataset.filter ?? (item?.schedule_filter ?? 'all')
      if (annType === 'training') {
        if (!eventLocation) { showToast('กรุณาระบุสถานที่','warning'); return }
        const sessions = _getAnnSessions(m, 'ann')
        for (const s of sessions) {
          if (!s.date)           { showToast('กรุณาระบุวันที่ให้ครบทุกช่วง','warning'); return }
          if (!s.periods.length) { showToast('กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง','warning'); return }
        }
        const btn = m.querySelector('#ann-modal-save')
        btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
        try {
          if (isEdit) {
            await updateAnnouncement(item.id, { title, body, isActive, priority, requiresAck, dueDate, annType, eventDate: sessions[0].date, eventPeriods: sessions[0].periods, eventLocation, scheduleFilter, fileUrl: annFileUrl, videoUrl, audience })
          } else if (sessions.length > 1) {
            await Promise.all(sessions.map(s => createAnnouncement({ title, body, isActive, priority, requiresAck, dueDate, annType, eventDate: s.date, eventPeriods: s.periods, eventLocation, scheduleFilter, fileUrl: annFileUrl, videoUrl, audience })))
            showToast(`สร้าง ${sessions.length} ประกาศสำเร็จ ✅`, 'success')
          } else {
            await createAnnouncement({ title, body, isActive, priority, requiresAck, dueDate, annType, eventDate: sessions[0].date, eventPeriods: sessions[0].periods, eventLocation, scheduleFilter, fileUrl: annFileUrl, videoUrl, audience })
            showToast('บันทึกสำเร็จ ✅', 'success')
          }
          close(); await onDone()
        } catch(e) {
          showToast('บันทึกไม่สำเร็จ: '+(e.message??''),'error')
          btn.disabled = false; btn.textContent = 'บันทึก'
        }
        return
      }
      const btn = m.querySelector('#ann-modal-save')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        if (isEdit) await updateAnnouncement(item.id, { title, body, isActive, priority, requiresAck, dueDate, annType, fileUrl: annFileUrl, videoUrl, audience })
        else        await createAnnouncement({ title, body, isActive, priority, requiresAck, dueDate, annType, fileUrl: annFileUrl, videoUrl, audience })
        if (!isEdit && isActive) _sendAnnouncementPush(title, body, audience)
        showToast('บันทึกสำเร็จ ✅','success'); close(); await onDone()
      } catch(e) {
        showToast('บันทึกไม่สำเร็จ: '+(e.message??''),'error')
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
    })
  }

  document.getElementById('ann-create-btn')?.addEventListener('click', () => _openAnnModal(null, _renderList))
  await _renderList()
}

// ─── Supervisor Announcements ─────────────────────────────────────────────────

const _ANN_ROLE_LABELS = {
  dept_head:          'หัวหน้ากลุ่มสาระ',
  registrar_samai:    'หัวหน้าฝ่ายทะเบียน (สามัญ)',
  registrar_religion: 'หัวหน้าฝ่ายทะเบียน (ศาสนา)',
  registrar_pvch:     'หัวหน้าฝ่ายทะเบียน (ปวช)',
  academic_samai:     'หัวหน้าฝ่ายวิชาการ (สามัญ)',
  academic_religion:  'หัวหน้าฝ่ายวิชาการ (ศาสนา)',
  academic_pvch:      'หัวหน้าฝ่ายวิชาการ (ปวช)',
}
const _annRoleLabel = r => _ANN_ROLE_LABELS[r] ?? 'แอดมิน'
const _annRoleColor = r => {
  if (!r) return 'bg-gray-100 text-gray-600'
  if (r.startsWith('academic'))  return 'bg-blue-100 text-blue-700'
  if (r.startsWith('registrar')) return 'bg-violet-100 text-violet-700'
  if (r === 'dept_head')         return 'bg-emerald-100 text-emerald-700'
  return 'bg-gray-100 text-gray-600'
}

export async function renderSupervisorAnnouncements(teacher, isAdmin = false) {
  const { getMyAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement, getAckStats, getAnnouncementCommentsBulk,
          getAnnouncementComments, deleteAnnouncementComment } = await import('./api.js')
  const creatorRole = (teacher?.positions?.length ? teacher.positions[0] : teacher?.position) ?? null

  setActiveNav('announcements')
  document.getElementById('page-title').textContent = 'จัดการประกาศ'
  const _esc = v => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  const _fmtDate = d => new Date(d).toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'2-digit'})

  setContent(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs mt-0.5">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${_annRoleColor(creatorRole)}">${_annRoleLabel(creatorRole)}</span>
          <span class="text-gray-400 ml-1">· ประกาศที่สร้างจะแสดงให้ครูทุกคนเห็น</span>
        </p>
      </div>
      <button id="sann-create-btn"
        class="px-4 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition shadow-sm flex items-center gap-2">
        <span class="text-base">＋</span> สร้างประกาศ
      </button>
    </div>
    <div id="sann-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`)

  const _renderList = async () => {
    const list = document.getElementById('sann-list')
    if (!list) return
    let items
    try { items = await getMyAnnouncements(teacher.id) }
    catch { list.innerHTML = '<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>'; return }

    if (!items.length) {
      list.innerHTML = `<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📢</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศของคุณ</p>
        <p class="text-xs mt-1">กดปุ่ม "สร้างประกาศ" ด้านบนเพื่อเริ่มต้น</p>
      </div>`
      return
    }

    const _fmtDateShort = d => d ? new Date(d).toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'2-digit'}) : ''
    const _dueBadge = due => {
      if (!due) return ''
      const diff = Math.ceil((new Date(due) - new Date()) / 86400000)
      if (diff < 0)  return `<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${_fmtDateShort(due)}</span>`
      if (diff <= 3) return `<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${_fmtDateShort(due)}</span>`
      return `<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${_fmtDateShort(due)}</span>`
    }

    const commentCountByAnnId = {}
    try {
      const allComments = await getAnnouncementCommentsBulk(items.map(a => a.id))
      allComments.forEach(c => { commentCountByAnnId[c.announcement_id] = (commentCountByAnnId[c.announcement_id] ?? 0) + 1 })
    } catch {}

    list.innerHTML = items.map(a => `
      <div class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden
        ${a.is_active ? 'border-gray-100' : 'border-dashed border-gray-200 opacity-70'}" data-id="${a.id}">
        ${a.priority > 0 ? `<div class="h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>` :
          a.is_active   ? `<div class="h-1 bg-gradient-to-r from-indigo-400 to-blue-400"></div>` :
          `<div class="h-1 bg-gray-200"></div>`}
        <div class="p-5 flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
            ${a.is_active ? 'bg-indigo-50' : 'bg-gray-100'}">
            ${a.priority > 0 ? '📌' : a.requires_ack ? '🔔' : a.is_active ? '📢' : '📄'}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold
                ${a.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}">
                ${a.is_active ? '● แสดงอยู่' : '○ ปิดอยู่'}
              </span>
              ${a.priority > 0 ? `<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>` : ''}
              ${a.requires_ack ? `<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>` : ''}
              ${_annAudienceBadge(a.audience)}
              ${a.video_url ? `<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🎥 มีวิดีโอ</span>` : ''}
              ${_dueBadge(a.due_date)}
            </div>
            <h3 class="font-bold text-gray-800 text-[15px] leading-snug">${_esc(a.title)}</h3>
            ${a.body ? `<p class="text-sm text-gray-500 mt-1.5 line-clamp-2">${_esc(a.body)}</p>` : ''}
            <p class="text-[11px] text-gray-400 mt-2">${_fmtDate(a.created_at)}</p>
            <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3">
              <span>❤️ ${a.like_count ?? 0} ถูกใจ</span>
              <button class="ann-comments-view-btn text-gray-400 hover:text-indigo-600 hover:underline transition" data-id="${a.id}" data-title="${_esc(a.title)}">💬 ${commentCountByAnnId[a.id] ?? 0} ความคิดเห็น</button>
              <span>👁️ ${a.view_count ?? 0} เข้าดู</span>
            </p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            ${a.requires_ack ? `<button class="sann-stat-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-sky-200 text-sky-600 hover:bg-sky-50 transition" data-id="${a.id}" data-title="${_esc(a.title)}">📊 สถิติ</button>` : ''}
            ${a.ann_type === 'training' ? `<button class="sann-rsvp-list-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-200 text-violet-600 hover:bg-violet-50 transition" data-id="${a.id}" data-title="${_esc(a.title)}">👥 รายชื่อ</button>` : ''}
            <button class="sann-toggle-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition
              ${a.is_active ? 'border-gray-200 text-gray-500 hover:bg-gray-50' : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50'}"
              data-id="${a.id}" data-active="${a.is_active}">
              ${a.is_active ? '⏸ ปิด' : '▶ เปิด'}
            </button>
            <button class="sann-edit-btn px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition"
              data-id="${a.id}">✏️ แก้ไข</button>
            <button class="sann-del-btn p-1.5 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 transition"
              data-id="${a.id}" data-title="${_esc(a.title)}" title="ลบ">🗑</button>
          </div>
        </div>
      </div>`).join('')

    list.querySelectorAll('.sann-stat-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const annId = Number(btn.dataset.id)
        const annTitle = btn.dataset.title
        const existing = document.getElementById('sann-stat-modal')
        if (existing) existing.remove()
        const sm = document.createElement('div')
        sm.id = 'sann-stat-modal'
        sm.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
        sm.innerHTML = `
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 class="font-bold text-gray-800 text-base">📊 สถิติการรับทราบ</h3>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-xs">${_esc(annTitle)}</p>
              </div>
              <button id="sann-stat-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition">✕</button>
            </div>
            <div id="sann-stat-body" class="flex-1 overflow-y-auto p-6">
              <div class="flex justify-center py-8 text-gray-400">
                <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg> กำลังโหลด...
              </div>
            </div>
          </div>`
        document.body.appendChild(sm)
        sm.querySelector('#sann-stat-close').onclick = () => sm.remove()
        sm.addEventListener('click', e => { if (e.target === sm) sm.remove() })

        try {
          const { acked, pending } = await getAckStats(annId)
          const body = sm.querySelector('#sann-stat-body')
          const _fmtAckedAt = d => new Date(d).toLocaleString('th-TH',{day:'numeric',month:'short',year:'2-digit',hour:'2-digit',minute:'2-digit'})
          body.innerHTML = `
            <div class="flex gap-3 mb-5">
              <div class="flex-1 bg-emerald-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-emerald-600">${acked.length}</div>
                <div class="text-xs text-emerald-700 font-semibold mt-0.5">✅ รับทราบแล้ว</div>
              </div>
              <div class="flex-1 bg-orange-50 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-orange-500">${pending.length}</div>
                <div class="text-xs text-orange-600 font-semibold mt-0.5">⏳ ยังไม่รับทราบ</div>
              </div>
            </div>
            ${acked.length ? `
              <div class="mb-4">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">✅ รับทราบแล้ว (${acked.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${acked.map(t => `
                    <div class="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${_esc(t.full_name)}</span>
                      <span class="text-[11px] text-emerald-600 font-semibold">${_fmtAckedAt(t.acked_at)}</span>
                    </div>`).join('')}
                </div>
              </div>` : ''}
            ${pending.length ? `
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">⏳ ยังไม่รับทราบ (${pending.length} คน)</p>
                <div class="space-y-1.5 max-h-48 overflow-y-auto">
                  ${pending.map(t => `
                    <div class="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <span class="text-sm font-medium text-gray-700">${_esc(t.full_name)}</span>
                    </div>`).join('')}
                </div>
              </div>` : ''}
          `
        } catch {
          sm.querySelector('#sann-stat-body').innerHTML = '<p class="text-red-400 text-sm text-center py-8">โหลดสถิติไม่สำเร็จ</p>'
        }
      })
    })

    list.querySelectorAll('.sann-rsvp-list-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const { getAnnouncementRsvps } = await import('./api.js')
        const rsvps = await getAnnouncementRsvps(Number(btn.dataset.id)).catch(() => [])
        const title = btn.dataset.title
        const groups = { yes: [], maybe: [], no: [], none: [] }
        rsvps.forEach(r => (groups[r.response] ?? groups.none).push(r))
        const _row = r => `<li class="text-sm text-gray-700">${_esc(r.teachers?.full_name ?? '?')} <span class="text-xs text-gray-400">${r.teachers?.dept ?? ''}</span></li>`
        const _section = (key, icon, label, color) => groups[key].length ? `
          <div class="mb-3">
            <p class="text-xs font-bold ${color} mb-1">${icon} ${label} (${groups[key].length})</p>
            <ul class="space-y-0.5 pl-3">${groups[key].map(_row).join('')}</ul>
          </div>` : ''
        const overlay = document.createElement('div')
        overlay.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
        overlay.innerHTML = `
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <p class="font-bold text-gray-800 text-sm">👥 รายชื่อผู้ตอบ — ${title}</p>
              <button class="text-gray-400 hover:text-gray-600 text-xl" id="rsvp-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5">
              ${!rsvps.length ? '<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีผู้ตอบ</p>' : ''}
              ${_section('yes',   '✅', 'เข้าร่วมแน่นอน',  'text-emerald-700')}
              ${_section('maybe', '🤔', 'ไม่แน่ใจ',         'text-amber-700')}
              ${_section('no',    '❌', 'ไม่สนใจ',          'text-gray-500')}
            </div>
          </div>`
        document.body.appendChild(overlay)
        overlay.querySelector('#rsvp-list-close').onclick = () => overlay.remove()
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
      })
    })

    list.querySelectorAll('.ann-comments-view-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const annId = Number(btn.dataset.id)
        const title = btn.dataset.title
        const comments = await getAnnouncementComments(annId).catch(() => [])
        const _fmtDateTime = d => new Date(d).toLocaleString('th-TH',{day:'numeric',month:'short',year:'2-digit',hour:'2-digit',minute:'2-digit'})
        const overlay = document.createElement('div')
        overlay.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
        overlay.innerHTML = `
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <p class="font-bold text-gray-800 text-sm">💬 ความคิดเห็น</p>
                <p class="text-xs text-gray-400 mt-0.5 truncate max-w-[260px]">${_esc(title)}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0" id="comments-list-close">✕</button>
            </div>
            <div class="overflow-y-auto p-5 space-y-3">
              ${!comments.length ? '<p class="text-gray-400 text-sm text-center py-8">ยังไม่มีความคิดเห็น</p>' : comments.map(c => `
                <div class="flex items-start gap-2" data-comment-id="${c.id}">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${_esc((c.teachers?.full_name ?? '?').charAt(0))}</div>
                  <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-2">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-xs font-semibold text-gray-700">${_esc(c.teachers?.full_name ?? 'ครู')}</p>
                      <button class="comment-del-btn text-gray-300 hover:text-red-500 text-xs flex-shrink-0" data-id="${c.id}" title="ลบความคิดเห็น">🗑</button>
                    </div>
                    <p class="text-sm text-gray-600 whitespace-pre-wrap break-words mt-0.5">${_esc(c.comment_text)}</p>
                    <p class="text-[10px] text-gray-400 mt-1">${_fmtDateTime(c.created_at)}</p>
                  </div>
                </div>`).join('')}
            </div>
          </div>`
        document.body.appendChild(overlay)
        overlay.querySelector('#comments-list-close').onclick = () => overlay.remove()
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
        overlay.querySelectorAll('.comment-del-btn').forEach(delBtn => {
          delBtn.addEventListener('click', async () => {
            if (!confirm('ลบความคิดเห็นนี้?')) return
            try {
              await deleteAnnouncementComment(Number(delBtn.dataset.id))
              overlay.querySelector(`[data-comment-id="${delBtn.dataset.id}"]`)?.remove()
              await _renderList()
            } catch (e) { showToast('ลบไม่สำเร็จ: ' + (e.message ?? ''), 'error') }
          })
        })
      })
    })

    list.querySelectorAll('.sann-toggle-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true
        try { await updateAnnouncement(Number(btn.dataset.id), { isActive: btn.dataset.active !== 'true' }); await _renderList() }
        catch { showToast('บันทึกไม่สำเร็จ','error'); btn.disabled = false }
      })
    })
    list.querySelectorAll('.sann-edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = items.find(a => a.id === Number(btn.dataset.id))
        if (item) _openModal(item)
      })
    })
    list.querySelectorAll('.sann-del-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm(`ลบประกาศ "${btn.dataset.title}" ?`)) return
        btn.disabled = true
        try { await deleteAnnouncement(Number(btn.dataset.id)); await _renderList() }
        catch { showToast('ลบไม่สำเร็จ','error'); btn.disabled = false }
      })
    })
  }

  const _openModal = (item = null) => {
    document.getElementById('sann-modal')?.remove()
    const m = document.createElement('div')
    m.id = 'sann-modal'
    m.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
    const isEdit = !!item?.id
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-base">${isEdit ? '✏️ แก้ไขประกาศ' : '➕ สร้างประกาศใหม่'}</h3>
          <button id="sann-modal-close" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">หัวข้อ *</label>
            <input id="sann-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${_esc(item?.title ?? '')}" placeholder="ระบุหัวข้อประกาศ"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">เนื้อหา</label>
            <textarea id="sann-body" rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
              placeholder="รายละเอียดประกาศ (ไม่บังคับ)">${_esc(item?.body ?? '')}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">รูปภาพแนบ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
            <div id="sann-image-preview" class="${item?.file_url ? '' : 'hidden'} mb-2 relative inline-block">
              <img id="sann-image-preview-img" src="${_esc(item?.file_url ?? '')}" class="max-h-40 rounded-xl border border-gray-200 object-contain" />
              <button type="button" id="sann-image-remove" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition">✕</button>
            </div>
            <input id="sann-image-file" type="file" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs file:font-semibold hover:file:bg-indigo-100 file:cursor-pointer" />
            <p id="sann-image-status" class="text-[11px] text-gray-400 mt-1"></p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ลิงก์วิดีโอ <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ — YouTube/TikTok/Google Drive)</span></label>
            <input id="sann-video-url" type="url" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value="${_esc(item?.video_url ?? '')}" placeholder="วางลิงก์วิดีโอ เช่น https://youtube.com/watch?v=..."/>
            <p class="text-[11px] text-gray-400 mt-1">ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพได้เลย</p>
          </div>
          <!-- ประเภทประกาศ (admin เท่านั้นที่เปลี่ยนประเภทได้) -->
          ${isAdmin ? `
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">ประเภทประกาศ</label>
            <div class="flex gap-2">
              <button type="button" data-type="general" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(item?.ann_type ?? 'general') === 'general' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}">📢 ทั่วไป</button>
              <button type="button" data-type="training" class="sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${item?.ann_type === 'training' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'}">🎓 อบรม/กิจกรรม</button>
            </div>
          </div>` : ''}
          <!-- กลุ่มเป้าหมาย -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">แสดงให้ใครเห็น</label>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-audience="all" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${(item?.audience ?? 'all') === 'all' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}">👥 ทั้งหมด</button>
              <button type="button" data-audience="teacher" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${item?.audience === 'teacher' ? 'bg-sky-600 text-white border-sky-600' : 'bg-white text-gray-600 border-gray-200 hover:border-sky-300'}">👩‍🏫 ครูเท่านั้น</button>
              <button type="button" data-audience="student" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${item?.audience === 'student' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300'}">🎒 นักเรียนเท่านั้น</button>
              <button type="button" data-audience="futsal_player" class="sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${item?.audience === 'futsal_player' ? 'bg-pink-600 text-white border-pink-600' : 'bg-white text-gray-600 border-gray-200 hover:border-pink-300'}">⚽ นักกีฬาฟุตซอล</button>
            </div>
          </div>
          <!-- Training fields (แสดงเมื่อเลือก อบรม) -->
          <div id="sann-training-fields" class="${item?.ann_type === 'training' ? '' : 'hidden'} space-y-3 bg-violet-50 rounded-2xl p-4 border border-violet-100">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">📍 สถานที่ *</label>
              <input id="sann-event-location" type="text" placeholder="เช่น ห้องประชุม 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                value="${_esc(item?.event_location ?? '')}"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">📅 วันและคาบ *</label>
              <div id="sann-sessions-list" class="space-y-2">
                ${_annSessionHTML('sann', 0, item?.event_date ?? '', item?.event_periods ?? [])}
              </div>
              ${!isEdit ? `<button type="button" id="sann-add-session"
                class="w-full mt-2 py-2 border border-dashed border-violet-300 text-violet-600 text-xs font-semibold rounded-xl hover:bg-violet-50 transition">
                ＋ เพิ่มวันอบรม
              </button>` : `<div id="sann-add-session" class="hidden"></div>`}
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1.5">🔍 เงื่อนไขการมองเห็น</label>
              <div class="flex gap-2">
                <button type="button" data-filter="all" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${(item?.schedule_filter ?? 'all') === 'all' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'}">
                  ว่างทุกคาบที่ระบุ
                </button>
                <button type="button" data-filter="any" class="sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition
                  ${(item?.schedule_filter ?? 'all') === 'any' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'}">
                  ว่างอย่างน้อย 1 คาบ
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 gap-2 flex-wrap">
            <button type="button" id="sann-active-toggle" data-on="${item?.is_active !== false ? 'true' : 'false'}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100');this.textContent=on?'○ ปิดอยู่':'● แสดงให้ครูเห็น'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${item?.is_active !== false ? 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100'}">
              ${item?.is_active !== false ? '● แสดงให้ครูเห็น' : '○ ปิดอยู่'}
            </button>
            <button type="button" id="sann-pin" data-on="${(item?.priority ?? 0) > 0 ? 'true' : 'false'}"
              onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='px-4 py-2 rounded-xl text-sm font-semibold border transition '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100');this.textContent=on?'☆ ปักหมุด':'⭐ ปักหมุด'"
              class="px-4 py-2 rounded-xl text-sm font-semibold border transition ${(item?.priority ?? 0) > 0 ? 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100' : 'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100'}">
              ${(item?.priority ?? 0) > 0 ? '⭐ ปักหมุด' : '☆ ปักหมุด'}
            </button>
          </div>
          <div class="border-t border-gray-100 pt-4">
            <button type="button" id="sann-cal-ref"
              class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition text-left flex items-center gap-2 mb-3">
              📋 <span>อ้างอิงปฏิทินปฏิบัติงาน</span>
              <span class="text-[11px] font-normal text-indigo-400 ml-auto">auto-fill ข้อมูล</span>
            </button>
            <div id="sann-cal-picker" class="hidden mb-3">
              <select id="sann-cal-event-sel"
                class="w-full border border-indigo-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-2">
                <option value="">— เลือกกิจกรรม —</option>
              </select>
              <div id="sann-cal-preview" class="hidden bg-indigo-50 rounded-xl p-3 space-y-1 text-xs text-indigo-800"></div>
              <button type="button" id="sann-cal-fill" class="hidden mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition w-full">
                ใส่ข้อมูลลงฟอร์ม
              </button>
            </div>
          </div>
          <div class="space-y-3">
            <div>
              <button type="button" id="sann-ack" data-on="${item?.requires_ack ? 'true' : 'false'}"
                onclick="const on=this.dataset.on==='true';this.dataset.on=on?'false':'true';this.className='w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left '+(on?'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100':'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100');this.querySelector('span').textContent=on?'🔔 ต้องการการรับทราบจากครูทุกคน':'🔔 ต้องการการรับทราบจากครูทุกคน'"
                class="w-full px-4 py-2.5 rounded-xl text-sm font-semibold border transition text-left ${item?.requires_ack ? 'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100' : 'border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100'}">
                <span>🔔 ต้องการการรับทราบจากครูทุกคน</span>
                <p class="text-[11px] font-normal mt-0.5 opacity-70">ครูจะเห็นปุ่ม "กดรับทราบ" และคุณสามารถดูสถิติได้</p>
              </button>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">📅 วันกำหนด / วันสิ้นสุด <span class="text-gray-300 font-normal normal-case">(ไม่บังคับ)</span></label>
              <input id="sann-due" type="date" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                value="${item?.due_date ?? ''}"/>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button id="sann-modal-cancel" class="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition font-medium">ยกเลิก</button>
          <button id="sann-modal-save" class="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition shadow-sm">บันทึก</button>
        </div>
      </div>`
    document.body.appendChild(m)
    const close = () => m.remove()
    m.querySelector('#sann-modal-close').onclick = close
    m.querySelector('#sann-modal-cancel').onclick = close
    m.addEventListener('click', e => { if (e.target === m) close() })

    // hint + suggestion chips
    const _TITLE_CHIPS = [
      'ประชุมครูประจำเดือน','แจ้งกำหนดส่งแบบฟอร์ม','ขอความร่วมมือ',
      'แจ้งกำหนดการสอบ','แจ้งปฏิทินกิจกรรม',
    ]
    const _BODY_CHIPS = [
      'ขอให้คุณครูทุกท่านรับทราบและดำเนินการภายในวันที่กำหนด',
      'ขอให้คุณครูกรอกแบบฟอร์มและส่งกลับมาที่ฝ่ายทะเบียน',
      'หากมีข้อสงสัยสามารถติดต่อสอบถามได้ที่ฝ่ายวิชาการ',
    ]
    const _makeHint = (inputEl, chips) => {
      const wrap = document.createElement('div')
      wrap.className = 'mt-1.5 hidden'
      wrap.innerHTML = `<p class="text-[11px] text-gray-400 mb-1.5">ตัวอย่าง:</p>
        <div class="flex flex-wrap gap-1.5">
          ${chips.map(c => `<button type="button" class="sann-chip px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-[11px] font-medium transition border border-indigo-100" data-val="${c}">${c}</button>`).join('')}
        </div>`
      inputEl.parentNode.appendChild(wrap)
      inputEl.addEventListener('focus', () => wrap.classList.remove('hidden'))
      inputEl.addEventListener('blur', () => setTimeout(() => wrap.classList.add('hidden'), 150))
      wrap.querySelectorAll('.sann-chip').forEach(btn => {
        btn.addEventListener('mousedown', e => e.preventDefault())
        btn.addEventListener('click', () => {
          if (!inputEl.value.trim()) inputEl.value = btn.dataset.val
          else inputEl.value += (inputEl.tagName === 'TEXTAREA' ? '\n' : ' ') + btn.dataset.val
          inputEl.focus()
        })
      })
    }
    _makeHint(m.querySelector('#sann-title'), _TITLE_CHIPS)
    _makeHint(m.querySelector('#sann-body'), _BODY_CHIPS)

    // รูปภาพแนบ — อัปโหลดทันทีตอนเลือกไฟล์
    let sannFileUrl = item?.file_url ?? null
    const sannImgStatus  = m.querySelector('#sann-image-status')
    const sannImgPreview = m.querySelector('#sann-image-preview')
    const sannImgTag     = m.querySelector('#sann-image-preview-img')
    m.querySelector('#sann-image-file').addEventListener('change', async e => {
      const file = e.target.files?.[0]
      if (!file) return
      sannImgStatus.textContent = 'กำลังอัปโหลด...'
      try {
        sannFileUrl = await uploadAnnouncementImage(file)
        sannImgTag.src = sannFileUrl
        sannImgPreview.classList.remove('hidden')
        sannImgStatus.textContent = 'อัปโหลดสำเร็จ ✅'
      } catch (err) {
        sannImgStatus.textContent = 'อัปโหลดไม่สำเร็จ: ' + (err.message ?? '')
      }
      e.target.value = ''
    })
    m.querySelector('#sann-image-remove').addEventListener('click', () => {
      sannFileUrl = null
      sannImgPreview.classList.add('hidden')
      sannImgStatus.textContent = ''
    })

    // ── Calendar reference picker ──
    let _calEvents = []
    m.querySelector('#sann-cal-ref').addEventListener('click', async () => {
      const picker = m.querySelector('#sann-cal-picker')
      if (!picker.classList.contains('hidden')) { picker.classList.add('hidden'); return }
      picker.classList.remove('hidden')
      const sel = m.querySelector('#sann-cal-event-sel')
      if (sel.options.length <= 1) {
        try {
          const { getWorkCalendarEvents, getSchoolConfig } = await import('./api.js')
          let ay = new Date().getFullYear() + 543, sm = 1
          try { const c = await getSchoolConfig(); ay = c.academic_year; sm = c.semester } catch {}
          _calEvents = await getWorkCalendarEvents(ay, sm)
          const TYPE_LABEL = { inspection:'🔍', deadline:'⏰', meeting:'📅', other:'📌' }
          _calEvents.forEach(ev => {
            const opt = document.createElement('option')
            opt.value = ev.id
            const rd = ev.event_type === 'inspection' && ev.round_number ? ` ครั้งที่ ${ev.round_number}` : ''
            const d = new Date(ev.event_date + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })
            opt.textContent = `${TYPE_LABEL[ev.event_type]??'📌'}${rd} ${ev.label} (${d})`
            sel.appendChild(opt)
          })
        } catch (err) {
          sel.innerHTML = `<option>โหลดไม่สำเร็จ: ${err.message}</option>`
        }
      }
    })

    m.querySelector('#sann-cal-event-sel').addEventListener('change', () => {
      const evId = +m.querySelector('#sann-cal-event-sel').value
      const ev = _calEvents.find(x => x.id === evId)
      const preview = m.querySelector('#sann-cal-preview')
      const fillBtn = m.querySelector('#sann-cal-fill')
      if (!ev) { preview.classList.add('hidden'); fillBtn.classList.add('hidden'); return }
      const items = (ev.work_calendar_items || []).sort((a,b)=>a.sort_order-b.sort_order)
      const d = new Date(ev.event_date + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
      preview.innerHTML = `<p class="font-semibold">${ev.label}</p>
        <p class="text-indigo-600">📅 ${d}${ev.event_type==='inspection'&&ev.round_number?` · ครั้งที่ ${ev.round_number}`:''}</p>
        ${ev.description ? `<p>${ev.description}</p>` : ''}
        ${items.length ? `<ul class="mt-1 space-y-0.5">${items.map(it=>`<li>☑ ${it.item_label}</li>`).join('')}</ul>` : ''}`
      preview.classList.remove('hidden')
      fillBtn.classList.remove('hidden')
    })

    m.querySelector('#sann-cal-fill').addEventListener('click', () => {
      const evId = +m.querySelector('#sann-cal-event-sel').value
      const ev = _calEvents.find(x => x.id === evId)
      if (!ev) return
      const items = (ev.work_calendar_items || []).sort((a,b)=>a.sort_order-b.sort_order)
      const d = new Date(ev.event_date + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
      const rd = ev.event_type === 'inspection' && ev.round_number ? ` ครั้งที่ ${ev.round_number}` : ''
      m.querySelector('#sann-title').value = ev.label + (rd ? ` (${rd.trim()})` : '')
      const bodyLines = []
      if (ev.description) bodyLines.push(ev.description)
      if (items.length) { bodyLines.push('สิ่งที่ต้องเตรียม:'); items.forEach(it => bodyLines.push(`• ${it.item_label}`)) }
      bodyLines.push(`กำหนดวันที่: ${d}`)
      m.querySelector('#sann-body').value = bodyLines.join('\n')
      if (ev.event_date) m.querySelector('#sann-due').value = ev.event_date
      m.querySelector('#sann-cal-picker').classList.add('hidden')
    })

    // type toggle
    m.querySelectorAll('.sann-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type
        m.querySelectorAll('.sann-type-btn').forEach(b => {
          const isViolet = b.dataset.type === 'training'
          b.className = `sann-type-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${b.dataset.type === type
            ? (isViolet ? 'bg-violet-600 text-white border-violet-600' : 'bg-indigo-600 text-white border-indigo-600')
            : (isViolet ? 'bg-white text-gray-600 border-gray-200 hover:border-violet-300' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300')}`
        })
        m.querySelector('#sann-training-fields').classList.toggle('hidden', type !== 'training')
      })
    })

    // audience toggle
    const _sannAudienceColor = a => a === 'teacher' ? 'bg-sky-600 text-white border-sky-600' : a === 'student' ? 'bg-teal-600 text-white border-teal-600' : 'bg-indigo-600 text-white border-indigo-600'
    const _sannAudienceHover = a => a === 'teacher' ? 'hover:border-sky-300' : a === 'student' ? 'hover:border-teal-300' : 'hover:border-indigo-300'
    m.querySelectorAll('.sann-audience-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        m.querySelectorAll('.sann-audience-btn').forEach(b => {
          b.className = `sann-audience-btn flex-1 py-2 rounded-xl text-sm font-semibold border transition ${b.dataset.audience === btn.dataset.audience
            ? _sannAudienceColor(b.dataset.audience)
            : `bg-white text-gray-600 border-gray-200 ${_sannAudienceHover(b.dataset.audience)}`}`
        })
      })
    })

    _setupAnnSessions(m, 'sann')

    m.querySelectorAll('.sann-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        m.querySelectorAll('.sann-filter-btn').forEach(b => {
          b.className = `sann-filter-btn flex-1 py-2 rounded-xl text-xs font-semibold border transition ${b.dataset.filter === btn.dataset.filter
            ? 'bg-violet-600 text-white border-violet-600'
            : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'}`
        })
      })
    })

    m.querySelector('#sann-modal-save').addEventListener('click', async () => {
      const title = m.querySelector('#sann-title').value.trim()
      if (!title) { showToast('กรุณากรอกหัวข้อ','warning'); return }
      const body        = m.querySelector('#sann-body').value.trim() || null
      const isActive    = m.querySelector('#sann-active-toggle').dataset.on === 'true'
      const priority    = m.querySelector('#sann-pin').dataset.on === 'true' ? 1 : 0
      const requiresAck = m.querySelector('#sann-ack').dataset.on === 'true'
      const dueDate     = m.querySelector('#sann-due').value || null
      const annType     = m.querySelector('.sann-type-btn.bg-violet-600') ? 'training' : (item?.ann_type === 'training' ? 'training' : 'general')
      const audience    = m.querySelector('.sann-audience-btn.text-white')?.dataset.audience ?? (item?.audience ?? 'all')
      const videoUrl    = m.querySelector('#sann-video-url').value.trim() || null
      const eventLocation = annType === 'training' ? (m.querySelector('#sann-event-location').value.trim() || null) : null
      const scheduleFilter = m.querySelector('.sann-filter-btn.bg-violet-600')?.dataset.filter ?? (item?.schedule_filter ?? 'all')
      if (annType === 'training') {
        if (!eventLocation) { showToast('กรุณาระบุสถานที่','warning'); return }
        const sessions = _getAnnSessions(m, 'sann')
        for (const s of sessions) {
          if (!s.date)           { showToast('กรุณาระบุวันที่ให้ครบทุกช่วง','warning'); return }
          if (!s.periods.length) { showToast('กรุณาเลือกอย่างน้อย 1 คาบในทุกช่วง','warning'); return }
        }
        const btn = m.querySelector('#sann-modal-save')
        btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
        try {
          if (isEdit) {
            await updateAnnouncement(item.id, { title, body, isActive, priority, requiresAck, dueDate, annType, eventDate: sessions[0].date, eventPeriods: sessions[0].periods, eventLocation, scheduleFilter, fileUrl: sannFileUrl, videoUrl, audience })
          } else if (sessions.length > 1) {
            await Promise.all(sessions.map(s => createAnnouncement({ title, body, isActive, priority, teacherId: teacher.id, creatorRole, requiresAck, dueDate, annType, eventDate: s.date, eventPeriods: s.periods, eventLocation, scheduleFilter, fileUrl: sannFileUrl, videoUrl, audience })))
            showToast(`สร้าง ${sessions.length} ประกาศสำเร็จ ✅`, 'success')
          } else {
            await createAnnouncement({ title, body, isActive, priority, teacherId: teacher.id, creatorRole, requiresAck, dueDate, annType, eventDate: sessions[0].date, eventPeriods: sessions[0].periods, eventLocation, scheduleFilter, fileUrl: sannFileUrl, videoUrl, audience })
            showToast('บันทึกสำเร็จ ✅', 'success')
          }
          close(); await _renderList()
        } catch(e) {
          showToast('บันทึกไม่สำเร็จ: '+(e.message??''),'error')
          const btn = m.querySelector('#sann-modal-save')
          btn.disabled = false; btn.textContent = 'บันทึก'
        }
        return
      }
      const btn = m.querySelector('#sann-modal-save')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        if (isEdit) await updateAnnouncement(item.id, { title, body, isActive, priority, requiresAck, dueDate, annType, fileUrl: sannFileUrl, videoUrl, audience })
        else        await createAnnouncement({ title, body, isActive, priority, teacherId: teacher.id, creatorRole, requiresAck, dueDate, annType, fileUrl: sannFileUrl, videoUrl, audience })
        if (!isEdit && isActive) _sendAnnouncementPush(title, body, audience)
        showToast('บันทึกสำเร็จ ✅','success'); close(); await _renderList()
      } catch(e) {
        showToast('บันทึกไม่สำเร็จ: '+(e.message??''),'error')
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
    })
  }

  document.getElementById('sann-create-btn')?.addEventListener('click', () => _openModal(null))
  await _renderList()
}

// ─── Role Permissions ─────────────────────────────────────────────────────────

export async function renderRolePermissions() {
  setActiveNav('role-permissions')
  document.getElementById('page-title').textContent = 'สิทธิ์บทบาท'

  const POSITIONS = [
    { key:'dept_head',            label:'หัวหน้ากลุ่มสาระ' },
    { key:'religion_group_head',  label:'หัวหน้ากลุ่ม (ศาสนา)' },
    { key:'registrar_samai',      label:'ทะเบียน (สามัญ)' },
    { key:'registrar_religion',   label:'ทะเบียน (ศาสนา)' },
    { key:'registrar_pvch',       label:'ทะเบียน (ปวช)' },
    { key:'academic_samai',       label:'วิชาการ (สามัญ)' },
    { key:'academic_religion',    label:'วิชาการ (ศาสนา)' },
    { key:'academic_pvch',        label:'วิชาการ (ปวช)' },
    { key:'house_color_admin',    label:'ผู้ดูแลสีนักเรียน/กีฬาสี' },
    { key:'classroom_leaders_admin', label:'ผู้ดูแลหัวหน้า/รองหัวหน้า' },
  ]
  const FEATURE_GROUPS = [
    { group:'📢 ประกาศ', features:[
      { key:'announce_create', label:'สร้างประกาศ' },
      { key:'announce_manage', label:'แก้ไข/ลบประกาศ' },
    ]},
    { group:'📚 วิชาการ', features:[
      { key:'lang_config',           label:'ตั้งค่าคำอธิบายฯ' },
      { key:'menu_curriculum',       label:'หลักสูตรแกนกลาง' },
      { key:'menu_subjects',         label:'รายวิชา' },
      { key:'menu_departments',      label:'กลุ่มสาระ' },
      { key:'manage_religion_groups',label:'จัดการกลุ่มวิชาศาสนา' },
      { key:'menu_score_config',     label:'คอลัมน์คะแนน' },
      { key:'menu_life_skill',       label:'คะแนนทักษะชีวิต' },
      { key:'menu_reading',          label:'คะแนนการอ่าน' },
      { key:'menu_prayer',           label:'บันทึกละหมาด' },
    ]},
    { group:'📋 ทะเบียน/บุคลากร', features:[
      { key:'menu_students',      label:'นักเรียน' },
      { key:'menu_homeroom',      label:'ครูที่ปรึกษา' },
      { key:'menu_holidays',      label:'วันหยุด' },
      { key:'menu_periods',       label:'คาบเรียน' },
      { key:'menu_classrooms',    label:'ห้องเรียน' },
      { key:'menu_house_colors',  label:'สีนักเรียน' },
      { key:'menu_sports_admin',  label:'ระบบกีฬาสี' },
      { key:'menu_classroom_leaders', label:'จัดการหัวหน้า/รองหัวหน้า' },
    ]},
    { group:'🔍 นิเทศ/ติดตาม', features:[
      { key:'work_calendar',      label:'ปฏิทินปฏิบัติงาน' },
    ]},
  ]
  const ALL_FEATURES = FEATURE_GROUPS.flatMap(g => g.features)

  setContent(`<div class="animate-fade">
    <div class="mb-6">
      <p class="text-xs text-gray-400 mt-0.5">กำหนดว่าแต่ละบทบาทสามารถเข้าถึงเมนูใดใน Supervisor mode — บันทึกทันทีเมื่อกด toggle</p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="perm-loading" class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`)

  let permMap = {}
  try { permMap = await getRolePermissions() } catch {}

  const container = document.querySelector('#perm-loading')?.closest('.bg-white')
  if (!container) return

  container.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-100">
            <th class="px-5 py-3.5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 w-44">ฟีเจอร์</th>
            ${POSITIONS.map(p => `<th class="px-3 py-3.5 text-center text-xs font-bold text-gray-600 min-w-[80px]">${p.label}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${FEATURE_GROUPS.map(g => `
            <tr class="bg-indigo-50/50 border-y border-indigo-100">
              <td colspan="${POSITIONS.length + 1}" class="px-5 py-2 text-xs font-bold text-indigo-600 uppercase tracking-wider sticky left-0">${g.group}</td>
            </tr>
            ${g.features.map(feat => `
              <tr class="hover:bg-gray-50 border-b border-gray-50 transition-colors">
                <td class="px-5 py-3 font-medium text-gray-700 text-sm sticky left-0 bg-white">${feat.label}</td>
                ${POSITIONS.map(pos => {
                  const isOn = permMap[pos.key]?.[feat.key] ?? false
                  return `<td class="px-3 py-3 text-center">
                    <button type="button"
                      class="perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none
                        ${isOn ? 'bg-emerald-500' : 'bg-gray-300'}"
                      data-position="${pos.key}" data-feature="${feat.key}" data-on="${isOn}">
                      <span class="inline-block w-4 h-4 transform bg-white rounded-full shadow-sm transition-transform duration-200 mt-0.5 ml-0.5"
                        style="transform:translateX(${isOn ? '20' : '0'}px)"></span>
                    </button>
                  </td>`
                }).join('')}
              </tr>`).join('')}
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
      <span>💡</span>
      <span>ครูต้องล็อกอินใหม่เพื่อให้สิทธิ์มีผล · สิทธิ์เมนูต่างๆจะแสดงใน Supervisor mode ของบทบาทนั้น</span>
    </div>`

  container.querySelectorAll('.perm-toggle').forEach(btn => {
    btn.addEventListener('click', async () => {
      const pos = btn.dataset.position, feat = btn.dataset.feature
      const isOn = btn.dataset.on === 'true', newVal = !isOn
      btn.disabled = true
      try {
        await saveRolePermission(pos, feat, newVal)
        btn.dataset.on = String(newVal)
        btn.className = `perm-toggle relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${newVal ? 'bg-emerald-500' : 'bg-gray-300'}`
        btn.querySelector('span').style.transform = `translateX(${newVal ? '20' : '0'}px)`
        if (!permMap[pos]) permMap[pos] = {}
        permMap[pos][feat] = newVal
        showToast(`${newVal ? 'เปิด' : 'ปิด'}สิทธิ์สำเร็จ`, 'success')
      } catch { showToast('บันทึกไม่สำเร็จ','error') }
      btn.disabled = false
    })
  })
}


// ─── House Colors ─────────────────────────────────────────────────────────────
export async function renderHouseColors() {
  setActiveNav('house-colors')
  document.getElementById('page-title').textContent = 'จัดการสีนักเรียน'

  let groups = [], teachers = [], students = []
  let selectedCategory = 'สามัญ'
  let selectedLevel = ''
  let selectedRoom = ''
  let filterColor = ''   // '' = all
  let filterGender = ''  // '' = all
  let filterQ = ''

  const extractGradeFromName = (name) => {
    if (!name) return null
    const m = name.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i)
    if (!m) return null
    return m[1].replace(/^(PR)\s*(\d+)$/i, 'PR $2').trim()
  }

  const getCategoryFromRoomName = (name) => {
    if (!name) return 'สามัญ'
    if (/^(PR|อก\.|อป\.)/i.test(name)) return 'ศาสนา'
    if (/^ปวช\./i.test(name)) return 'ปวช'
    return 'สามัญ'
  }

  const standardLevels = {
    'สามัญ': ['ม.1', 'ม.2', 'ม.3', 'ม.4', 'ม.5', 'ม.6'],
    'ศาสนา': ['PR 1', 'อก.1', 'อก.2', 'อก.3', 'อป.1', 'อป.2', 'อป.3'],
    'ปวช': ['ปวช.1', 'ปวช.2', 'ปวช.3', 'อก.ปวช.1', 'อก.ปวช.2', 'อก.ปวช.3']
  }

  const getRoomsForCategory = (cat) => {
    const isReligion = cat === 'ศาสนา'
    return [...new Set(
      students
        .map(s => isReligion ? s.religion_room : s.main_room)
        .filter(Boolean)
    )].filter(name => getCategoryFromRoomName(name) === cat)
     .sort((a, b) => a.localeCompare(b, 'th'))
  }

  const getLevelsForCategory = (cat) => {
    const rooms = getRoomsForCategory(cat)
    const dbLevels = [...new Set(rooms.map(r => extractGradeFromName(r)).filter(Boolean))]
    const std = standardLevels[cat] || []
    return [...new Set([...std, ...dbLevels])].sort((a, b) => a.localeCompare(b, 'th'))
  }

  const _load = async () => {
    ;[groups, teachers, students] = await Promise.all([
      getHouseGroups(),
      getTeachers(),
      getStudents(),
    ])
  }

  const _colorDot = (hex, size = 'w-3.5 h-3.5') =>
    `<span class="inline-block ${size} rounded-full flex-shrink-0" style="background:${hex}"></span>`

  const _groupByName = (name) => groups.find(g => g.name === name)

  const _countByColor = (name) => students.filter(s => s.house_color === name).length
  const _countUnassigned = () => students.filter(s => !s.house_color).length

  const _executeRosterPrint = (list) => {
    let styleEl = document.getElementById('hc-print-roster-styles')
    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = 'hc-print-roster-styles'
      document.head.appendChild(styleEl)
    }
    styleEl.textContent = `
      @media screen {
        #hc-print-roster-area {
          position: fixed !important;
          inset: 0 !important;
          z-index: 9000 !important;
          background-color: rgba(15, 23, 42, 0.85) !important;
          backdrop-filter: blur(4px) !important;
          overflow-y: auto !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          padding: 32px 16px !important;
        }
        .preview-sheet-wrap {
          background: white !important;
          color: black !important;
          width: 100% !important;
          max-width: 800px !important;
          padding: 40px !important;
          border-radius: 16px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
          margin-top: 60px !important;
          font-family: Sarabun, sans-serif !important;
        }
        .preview-controls {
          position: fixed !important;
          top: 16px !important;
          display: flex !important;
          gap: 12px !important;
          z-index: 9001 !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(8px) !important;
          padding: 8px 16px !important;
          border-radius: 16px !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
        }
        .preview-btn-print {
          background: #4f46e5 !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 14px !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .preview-btn-print:hover {
          background: #4338ca !important;
        }
        .preview-btn-close {
          background: #ef4444 !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 14px !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .preview-btn-close:hover {
          background: #dc2626 !important;
        }
      }
      @media print {
        body > * { display: none !important; }
        #hc-print-roster-area {
          display: block !important;
          position: absolute !important;
          left: 0 !important; top: 0 !important;
          width: 100% !important;
          padding: 0 !important; margin: 0 !important;
          background: white !important;
          color: black !important;
          font-family: Sarabun, sans-serif !important;
        }
        #hc-print-roster-area * { visibility: visible !important; }
        .preview-controls { display: none !important; }
        .preview-sheet-wrap {
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          max-width: 100% !important;
        }
      }
      .roster-page-block {
        display: block !important;
        page-break-before: always !important;
        break-before: page !important;
        page-break-inside: avoid;
      }
      .roster-page-block:first-child {
        page-break-before: auto !important;
        break-before: auto !important;
      }
      .roster-title {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 15px;
      }
      .roster-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
      }
      .roster-table th, .roster-table td {
        border: 1px solid #000000 !important;
        padding: 8px 10px !important;
        vertical-align: middle;
      }
      .roster-table th {
        background-color: #f3f4f6 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        font-size: 12px;
        font-weight: bold;
      }
      .roster-table td {
        font-size: 12px;
      }
      .stu-info-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .stu-img {
        width: 40px;
        height: 52px;
        border-radius: 6px;
        border: 1px solid #ccc;
        object-fit: cover;
      }
      .stu-img-placeholder {
        width: 40px;
        height: 52px;
        border-radius: 6px;
        border: 1px solid #ccc;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #9ca3af;
      }
      .stu-details {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .stu-name {
        font-size: 12px;
        font-weight: bold;
      }
      .stu-meta {
        font-size: 10px;
        color: #4b5563;
      }
      .color-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-weight: 600;
      }
      .color-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #000;
      }
    `

    const printArea = document.createElement('div')
    printArea.id = 'hc-print-roster-area'
    document.body.appendChild(printArea)

    const isReligion = selectedCategory === 'ศาสนา'

    // Group students by room name
    const roomsMap = new Map()
    list.forEach(s => {
      const roomName = (isReligion ? s.religion_room : s.main_room) || 'ไม่มีห้องเรียน'
      if (!roomsMap.has(roomName)) {
        roomsMap.set(roomName, [])
      }
      roomsMap.get(roomName).push(s)
    })

    // Sort room names alphabetically (Th locale)
    const sortedRoomNames = Array.from(roomsMap.keys()).sort((a, b) => a.localeCompare(b, 'th'))

    let blocksHtml = ''

    sortedRoomNames.forEach((roomName, blockIdx) => {
      const roomStudents = roomsMap.get(roomName)
      
      // Sort students in the room by code
      const sortedStudents = roomStudents.sort((a, b) => (a.student_code || '').localeCompare(b.student_code || ''))

      let filterDesc = 'ใบรายชื่อนักเรียน'
      if (filterColor) {
        if (filterColor === '__none__') {
          filterDesc += ' (ไม่มีสี)'
        } else {
          filterDesc += ` กลุ่มสี${filterColor}`
        }
      }
      filterDesc += ` ห้อง ${roomName}`
      if (filterGender) {
        filterDesc += ` (${filterGender})`
      }

      const rowsHtml = sortedStudents.map((s, idx) => {
        const colorGroup = _groupByName(s.house_color)
        const colorHtml = colorGroup 
          ? `<span class="color-badge" style="color: ${colorGroup.color_hex}">
               สี${s.house_color}
             </span>`
          : '<span style="color: #9ca3af;">— ไม่มีสี —</span>'

        const imgHtml = s.image_url 
          ? `<img src="${s.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
             <div class="stu-img-placeholder" style="display:none;">👤</div>`
          : `<div class="stu-img-placeholder">👤</div>`

        return `
          <tr>
            <td style="text-align: center; width: 45px;">${idx + 1}</td>
            <td>
              <div class="stu-info-wrap">
                ${imgHtml}
                <div class="stu-details">
                  <div class="stu-name">${_esc(s.full_name)}</div>
                  <div class="stu-meta">รหัส: ${_esc(s.student_code || '—')} | สามัญ: ${_esc(s.main_room || '—')} | ศาสนา: ${_esc(s.religion_room || '—')}</div>
                </div>
              </div>
            </td>
            <td style="width: 110px; text-align: center;">${colorHtml}</td>
            <td style="width: 80px; text-align: center; font-weight: bold;">${_esc(s.sports_shirt_size || '')}</td>
            <td style="width: 120px;"></td>
          </tr>
        `
      }).join('')

      blocksHtml += `
        <div class="roster-page-block">
          <div class="roster-title">${_esc(filterDesc)}</div>
          <table class="roster-table">
            <thead>
              <tr>
                <th style="width: 45px;">เลขที่</th>
                <th>ข้อมูลนักเรียน</th>
                <th style="width: 110px;">สีนักเรียน</th>
                <th style="width: 80px;">ไซส์เสื้อ</th>
                <th style="width: 120px;">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      `
    })

    printArea.innerHTML = `
      <div class="preview-controls">
        <button class="preview-btn-print" id="hc-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="hc-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        ${blocksHtml}
      </div>
    `

    printArea.querySelector('#hc-btn-confirm-print').onclick = () => {
      window.print()
    }

    printArea.querySelector('#hc-btn-close-preview').onclick = () => {
      printArea.remove()
    }
  }

  const _responsible = () => teachers.find(t => t.position === 'house_color_admin')

  const _colorOpts = (currentColor, gender) => {
    const genderGroups = gender ? groups.filter(g => g.gender === gender) : groups
    const opts = genderGroups.map(g =>
      `<option value="${_esc(g.name)}" ${g.name === currentColor ? 'selected' : ''}>สี${_esc(g.name)}</option>`
    ).join('')
    return `<option value="" ${!currentColor ? 'selected' : ''}>— ไม่มีสี —</option>` + opts
  }

  const _filteredStudents = () => {
    const q = filterQ.toLowerCase()
    const isReligion = selectedCategory === 'ศาสนา'

    return students.filter(s => {
      // 1. Filter by curriculum category and current room selection
      const studentRoom = isReligion ? s.religion_room : s.main_room
      
      // If the student doesn't have a room in this category, filter them out
      if (!studentRoom) return false
      
      // If we filtered by a specific room
      if (selectedRoom && studentRoom !== selectedRoom) return false
      
      // If we filtered by grade level but not specific room
      if (selectedLevel && !selectedRoom) {
        const grade = extractGradeFromName(studentRoom)
        if (grade !== selectedLevel) return false
      }
      
      // If we haven't selected grade level nor specific room, but the room must match selectedCategory
      if (!selectedLevel && !selectedRoom) {
        if (getCategoryFromRoomName(studentRoom) !== selectedCategory) return false
      }

      // 2. Filter by color
      if (filterColor === '__none__' && s.house_color) return false
      if (filterColor && filterColor !== '__none__' && s.house_color !== filterColor) return false

      // 3. Filter by gender
      if (filterGender && s.gender !== filterGender) return false

      // 4. Search query
      if (q && !s.full_name?.toLowerCase().includes(q) &&
               !s.student_code?.toLowerCase().includes(q) &&
               !studentRoom.toLowerCase().includes(q)) return false

      return true
    })
  }

  const _chipClass = (active) =>
    active
      ? 'hc-chip px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition cursor-pointer select-none shadow-sm'
      : 'hc-chip px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer select-none hover:shadow-sm'

  const _renderChips = () => {
    const maleGroups = groups.filter(g => g.gender === 'ชาย')
    const femaleGroups = groups.filter(g => g.gender === 'หญิง')
    const unassigned = _countUnassigned()

    const chip = (g) => {
      const active = filterColor === g.name
      const count = _countByColor(g.name)
      return `<button class="${_chipClass(active)}" data-color="${_esc(g.name)}"
               style="${active
                 ? `border-color:${g.color_hex};color:${g.color_hex};background:${g.color_hex}18`
                 : `border-color:${g.color_hex}55;color:#374151`}">
        ${_colorDot(g.color_hex)} สี${_esc(g.name)}
        <span class="ml-1 font-bold" style="color:${g.color_hex}">${count}</span>
      </button>`
    }

    const noneActive = filterColor === '__none__'
    const noneChip = `<button class="${_chipClass(noneActive)}" data-color="__none__"
               style="${noneActive ? 'border-color:#9ca3af;color:#6b7280;background:#f3f4f6' : 'border-color:#e5e7eb;color:#6b7280'}">
        <span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex-shrink-0"></span>
        ไม่มีสี <span class="ml-1 font-bold text-gray-500">${unassigned}</span>
      </button>`

    return `
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-blue-600 mr-1">👦 ชาย</span>
          ${maleGroups.map(chip).join('')}
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-semibold text-pink-500 mr-1">👧 หญิง</span>
          ${femaleGroups.map(chip).join('')}
          ${noneChip}
        </div>
      </div>`
  }

  const _renderTable = () => {
    const rows = _filteredStudents()
    if (!rows.length) return `<tr><td colspan="6" class="text-center py-10 text-gray-400 text-sm">ไม่พบนักเรียน</td></tr>`
    const isReligion = selectedCategory === 'ศาสนา'
    return rows.map(s => {
      const g = _groupByName(s.house_color)
      const badge = g
        ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${g.color_hex}">
             ${_colorDot(g.color_hex,'w-2.5 h-2.5')} ${_esc(s.house_color)}
           </span>`
        : `<span class="text-xs text-gray-400">—</span>`
      const rowBg = g ? `background:${g.color_hex}12` : ''
      const studentRoom = isReligion ? s.religion_room : s.main_room
      const imgHtml = s.image_url 
        ? `<img src="${s.image_url}" class="w-8 h-10 rounded object-cover border border-gray-200" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold" style="display:none;">👤</div>`
        : `<div class="w-8 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold">👤</div>`

      return `<tr class="transition border-b border-gray-100 last:border-0" style="${rowBg}">
        <td class="px-4 py-2.5 text-xs font-mono text-gray-400">${_esc(s.student_code ?? '')}</td>
        <td class="px-4 py-2.5 text-sm font-medium text-gray-800">
          <div class="flex items-center gap-3">
            ${imgHtml}
            <div>${_esc(s.full_name)}</div>
          </div>
        </td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${_esc(studentRoom ?? '—')}</td>
        <td class="px-4 py-2.5 text-xs text-gray-500">${_esc(s.gender ?? '—')}</td>
        <td class="px-4 py-2.5">${badge}</td>
        <td class="px-4 py-2.5">
          <select class="hc-color-sel text-xs border border-gray-200 rounded-lg px-2 py-1.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                  data-sid="${s.id}" data-current="${_esc(s.house_color ?? '')}">
            ${_colorOpts(s.house_color, s.gender)}
          </select>
        </td>
      </tr>`
    }).join('')
  }

  const _render = () => {
    const resp = _responsible()
    const filteredCount = _filteredStudents().length

    setContent(`<div class="space-y-5 animate-fade">
      <!-- Header -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-xs text-gray-400 mt-0.5">
            ${resp
              ? `ผู้รับผิดชอบ: <span class="font-medium text-gray-600">${_esc(resp.full_name)}</span>`
              : `<span class="text-amber-500">⚠️ ยังไม่ระบุผู้รับผิดชอบ — กำหนดในหน้าแก้ไขข้อมูลครู (บทบาทพิเศษ)</span>`}
          </p>
        </div>
        <div class="text-right text-xs text-gray-400">
          <p>นักเรียนทั้งหมด <span class="font-bold text-gray-700">${students.length}</span> คน</p>
          <p>ยังไม่ระบุสี <span class="font-bold text-amber-600">${_countUnassigned()}</span> คน</p>
        </div>
      </div>

      <!-- Color chips -->
      <div class="bg-white rounded-2xl border border-gray-200 p-4">
        ${_renderChips()}
        ${filterColor
          ? `<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>`
          : ''}
      </div>

      <!-- Search + filter bar -->
      <div class="flex flex-wrap gap-3 items-center">
        <input id="hc-search" type="text" placeholder="ค้นหาชื่อ รหัส ห้อง..."
          value="${_esc(filterQ)}"
          class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="สามัญ" ${selectedCategory === 'สามัญ' ? 'selected' : ''}>สามัญ</option>
          <option value="ศาสนา" ${selectedCategory === 'ศาสนา' ? 'selected' : ''}>ศาสนา</option>
          <option value="ปวช" ${selectedCategory === 'ปวช' ? 'selected' : ''}>ปวช</option>
        </select>
        <select id="hc-filter-level" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <!-- เติมแบบไดนามิก -->
        </select>
        <select id="hc-filter-class" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">-- เลือกห้องเรียน --</option>
        </select>
        <select id="hc-filter-gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
          <option value="">ทุกเพศ</option>
          <option value="ชาย" ${filterGender === 'ชาย' ? 'selected' : ''}>👦 ชาย</option>
          <option value="หญิง" ${filterGender === 'หญิง' ? 'selected' : ''}>👧 หญิง</option>
        </select>
        <span class="text-xs text-gray-400">พบ <b class="text-gray-700">${filteredCount}</b> คน</span>
        <button id="hc-print-roster-btn"
          class="ml-auto px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white
                 transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
          ${filteredCount === 0 ? 'disabled' : ''}>
          🖨️ พิมพ์ใบรายชื่อ (${filteredCount})
        </button>
        <button id="hc-clear-colors-btn"
          class="px-4 py-2 rounded-xl text-sm font-medium border border-red-200 text-red-500
                 hover:bg-red-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
          ${filteredCount === 0 ? 'disabled' : ''}>
          🗑️ ล้างสี (${filteredCount})
        </button>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase border-b border-gray-200">
            <tr>
              <th class="px-4 py-3 text-left">รหัส</th>
              <th class="px-4 py-3 text-left">ชื่อ-สกุล</th>
              <th class="px-4 py-3 text-left">ห้อง</th>
              <th class="px-4 py-3 text-left">เพศ</th>
              <th class="px-4 py-3 text-left">สีปัจจุบัน</th>
              <th class="px-4 py-3 text-left">เปลี่ยนสี</th>
            </tr>
          </thead>
          <tbody id="hc-tbody">${_renderTable()}</tbody>
        </table>
      </div>
    </div>`)

    _bindEvents()
  }

  const _refreshTable = () => {
    const tbody = document.getElementById('hc-tbody')
    if (tbody) tbody.innerHTML = _renderTable()
    _bindColorSelects()
    
    const count = _filteredStudents().length
    
    // update count span in search bar
    document.querySelectorAll('.text-xs.text-gray-400').forEach(el => {
      if (el.textContent.includes('พบ')) el.innerHTML = `พบ <b class="text-gray-700">${count}</b> คน`
    })

    // update print & clear button state
    const printBtn = document.getElementById('hc-print-roster-btn')
    if (printBtn) {
      printBtn.disabled = count === 0
      printBtn.textContent = `🖨️ พิมพ์ใบรายชื่อ (${count})`
    }
    const clearBtn = document.getElementById('hc-clear-colors-btn')
    if (clearBtn) {
      clearBtn.disabled = count === 0
      clearBtn.textContent = `🗑️ ล้างสี (${count})`
    }
  }

  const _refreshChips = () => {
    const wrap = document.querySelector('.bg-white.rounded-2xl.border.border-gray-200.p-4')
    if (wrap) wrap.innerHTML = _renderChips() +
      (filterColor ? `<button id="hc-clear-filter" class="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-medium">✕ ล้างตัวกรอง</button>` : '')
    _bindChips()
    document.getElementById('hc-clear-filter')?.addEventListener('click', () => {
      filterColor = ''
      _refreshChips()
      _refreshTable()
    })
  }

  const _bindChips = () => {
    document.querySelectorAll('.hc-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.color
        filterColor = filterColor === val ? '' : val
        _refreshChips()
        _refreshTable()
      })
    })
  }

  const _bindColorSelects = () => {
    document.querySelectorAll('.hc-color-sel').forEach(sel => {
      sel.addEventListener('change', async () => {
        const sid = sel.dataset.sid
        const prev = sel.dataset.current
        const newColor = sel.value || null
        sel.disabled = true
        try {
          await assignStudentsHouseColor([sid], newColor)
          const s = students.find(s => String(s.id) === String(sid))
          if (s) s.house_color = newColor
          sel.dataset.current = newColor ?? ''
          // อัปเดต badge สีปัจจุบัน
          const row = sel.closest('tr')
          const badgeCell = row?.children[4]
          if (badgeCell) {
            const g = _groupByName(newColor)
            badgeCell.innerHTML = g
              ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style="background:${g.color_hex}">
                   ${_colorDot(g.color_hex,'w-2.5 h-2.5')} ${_esc(newColor)}
                 </span>`
              : `<span class="text-xs text-gray-400">—</span>`
          }
          // อัปเดต row background ตามสีใหม่
          const gNew = _groupByName(newColor)
          if (row) row.style.background = gNew ? `${gNew.color_hex}12` : ''
          // green glow feedback
          sel.classList.add('border-emerald-400', 'bg-emerald-50', 'shadow-[0_0_0_3px_rgba(52,211,153,0.35)]')
          setTimeout(() => sel.classList.remove('border-emerald-400', 'bg-emerald-50', 'shadow-[0_0_0_3px_rgba(52,211,153,0.35)]'), 2000)
          _refreshChips()
        } catch {
          showToast('บันทึกไม่สำเร็จ', 'error')
          sel.value = prev ?? ''
        }
        sel.disabled = false
      })
    })
  }

  const syncLevels = () => {
    const catSelect = document.getElementById('hc-filter-category')
    const levelSelect = document.getElementById('hc-filter-level')
    if (!catSelect || !levelSelect) return

    selectedCategory = catSelect.value
    const levels = getLevelsForCategory(selectedCategory)
    levelSelect.innerHTML = `
      <option value="">-- เลือกระดับชั้น --</option>
      ${levels.map(l => `<option value="${l}" ${l === selectedLevel ? 'selected' : ''}>${l}</option>`).join('')}
    `
    syncClasses()
  }

  const syncClasses = () => {
    const levelSelect = document.getElementById('hc-filter-level')
    const classSelect = document.getElementById('hc-filter-class')
    if (!levelSelect || !classSelect) return

    selectedLevel = levelSelect.value
    const rooms = getRoomsForCategory(selectedCategory)
    
    // Filter rooms by the selected grade level
    const filteredRooms = rooms.filter(r => {
      if (!selectedLevel) return true
      return extractGradeFromName(r) === selectedLevel
    })

    classSelect.innerHTML = `
      <option value="">-- เลือกห้องเรียน (${filteredRooms.length} ห้อง) --</option>
      ${filteredRooms.map(r => `
        <option value="${r}" ${r === selectedRoom ? 'selected' : ''}>${r}</option>
      `).join('')}
    `
  }

  const _bindEvents = () => {
    _bindChips()
    _bindColorSelects()

    document.getElementById('hc-clear-filter')?.addEventListener('click', () => {
      filterColor = ''
      _refreshChips()
      _refreshTable()
    })

    document.getElementById('hc-search')?.addEventListener('input', (e) => {
      filterQ = e.target.value
      _refreshTable()
    })

    document.getElementById('hc-filter-gender')?.addEventListener('change', (e) => {
      filterGender = e.target.value
      _refreshTable()
    })

    document.getElementById('hc-filter-category')?.addEventListener('change', (e) => {
      selectedCategory = e.target.value
      selectedLevel = ''
      selectedRoom = ''
      syncLevels()
      _refreshTable()
    })

    document.getElementById('hc-filter-level')?.addEventListener('change', (e) => {
      selectedLevel = e.target.value
      selectedRoom = ''
      syncClasses()
      _refreshTable()
    })

    document.getElementById('hc-filter-class')?.addEventListener('change', (e) => {
      selectedRoom = e.target.value
      _refreshTable()
    })

    document.getElementById('hc-print-roster-btn')?.addEventListener('click', () => {
      const targets = _filteredStudents()
      if (targets.length > 0) {
        _executeRosterPrint(targets)
      }
    })

    document.getElementById('hc-clear-colors-btn')?.addEventListener('click', async () => {
      const targets = _filteredStudents()
      if (!targets.length) return
      if (!confirm(`ยืนยันล้างสีนักเรียน ${targets.length} คนที่แสดงในตาราง?`)) return
      const btn = document.getElementById('hc-clear-colors-btn')
      btn.disabled = true
      btn.textContent = 'กำลังล้างสี...'
      try {
        await assignStudentsHouseColor(targets.map(s => s.id), null)
        targets.forEach(s => { s.house_color = null })
        showToast(`ล้างสีสำเร็จ ${targets.length} คน`, 'success')
        _refreshChips()
        _refreshTable()
      } catch {
        showToast('เกิดข้อผิดพลาด', 'error')
        btn.disabled = false
        btn.textContent = `🗑️ ล้างสี (${targets.length})`
      }
    })

    syncLevels()
  }

  await _load()
  _render()
}


// ─── Donations Management (Admin) ────────────────────────────────────────────

export async function renderDonations() {
  setActiveNav('donations')
  document.getElementById('page-title').textContent = 'ผู้สนับสนุน'

  const fmtDate = (s) => {
    if (!s) return '—'
    return new Date(s).toLocaleDateString('th-TH', { year: '2-digit', month: 'short', day: 'numeric' })
  }
  const fmtBaht = (n) => Number(n ?? 0).toLocaleString('th-TH')
  const isCash  = (r) => !r.slip_url && String(r.admin_note ?? '').startsWith('[เงินสด]')

  // ── parse tiers (เหมือน teacher portal) ──────────────────────────────────────
  const _parseTiers = (pcfg) => {
    const raw = String(pcfg?.donationStickerTiers ?? '').trim()
    const defs = [
      [49,  '🌱','ครูผู้จุดประกาย',     '#22C55E'],
      [99,  '☕','ครูผู้ร่วมฝัน',       '#A855F7'],
      [149, '🏅','ครูผู้ร่วมสร้าง',     '#F59E0B'],
      [199, '🐘','ครูผู้ร่วมขับเคลื่อน','#3B82F6'],
      [249, '👑','ครูผู้ก่อตั้งร่วม',   '#D4A017'],
    ]
    const rows = raw
      ? raw.split('\n').filter(Boolean).map(l => {
          const [a,s,t,,c] = l.split('|').map(x => x.trim())
          return { amount: parseInt(a)||0, sticker: s||'🏅', title: t||'', color: c||'' }
        }).filter(t => t.amount > 0)
      : defs.map(([a,s,t,c]) => ({ amount:a, sticker:s, title:t, color:c }))
    return rows.sort((a,b) => a.amount - b.amount).map((t,i) => {
      const imgUrl = (pcfg?.[`donationStickerImg${i+1}`] ?? '').trim()
      return (imgUrl && /^https?:\/\//.test(imgUrl)) ? { ...t, sticker: imgUrl } : t
    })
  }

  const _tierForAmount = (total, tiers) => {
    let best = null
    for (const t of tiers) { if (total >= t.amount) best = t }
    return best
  }

  const _stickerEl = (tier, size = 'w-8 h-8') =>
    tier
      ? /^https?:\/\//.test(tier.sticker)
        ? `<img src="${tier.sticker}" class="${size} object-contain" title="${tier.title}" />`
        : `<span class="text-xl" title="${tier.title}">${tier.sticker}</span>`
      : ''

  setContent(`
  <div class="max-w-4xl mx-auto animate-fade space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">รายชื่อครูที่โดเนทผ่านระบบและเงินสด</p>
      </div>
      <button id="don-add" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
        + เพิ่มเงินสด
      </button>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      ${['ยอดรวมอนุมัติ','รออนุมัติ','จำนวนผู้โดเนท','เฉลี่ยต่อคน'].map((lbl,i) => `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">${lbl}</p>
        <p class="text-xl font-bold text-gray-800 don-stat-val" data-i="${i}">—</p>
      </div>`).join('')}
    </div>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-wrap gap-3">
      <input id="don-search" type="search" placeholder="🔍 ค้นหาชื่อ / รหัสครู"
        class="flex-1 min-w-[160px] border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200" />
      <select id="don-filter-status" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">สถานะ: ทั้งหมด</option>
        <option value="pending">รอตรวจสอบ</option>
        <option value="approved">อนุมัติแล้ว</option>
        <option value="rejected">ปฏิเสธ</option>
      </select>
      <select id="don-filter-method" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">ช่องทาง: ทั้งหมด</option>
        <option value="cash">เงินสด</option>
        <option value="transfer">โอนเงิน</option>
      </select>
      <select id="don-filter-sort" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="date_desc">ล่าสุดก่อน</option>
        <option value="date_asc">เก่าสุดก่อน</option>
        <option value="amount_desc">ยอดมากสุด</option>
      </select>
    </div>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="don-table" class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`)

  let _all = [], _tiers = [], _teacherTotals = {}

  const _load = async () => {
    const { supabase: sb } = await import('./supabase.js')
    const { getSystemConfig, getPaymentSlipViewUrl } = await import('./api.js')
    const [cfg, { data }] = await Promise.all([
      getSystemConfig().catch(() => ({})),
      sb.from('payment_requests')
        .select('id, package_type, amount, status, slip_url, admin_note, created_at, reviewed_at, teachers(id, full_name, teacher_code, phone, image_url)')
        .eq('package_type', 'donation')
        .order('created_at', { ascending: false })
    ])
    _tiers = _parseTiers(cfg)
    _all   = data ?? []

    // resolve slip URLs ทั้งหมด
    for (const r of _all) {
      if (r.slip_url && !isCash(r)) {
        r._resolvedSlip = await getPaymentSlipViewUrl(r.slip_url).catch(() => r.slip_url)
      }
    }

    // คำนวณยอดรวมต่อครู (approved เท่านั้น)
    _teacherTotals = {}
    for (const r of _all) {
      if (r.status !== 'approved') continue
      const tid = r.teachers?.id
      if (tid) _teacherTotals[tid] = (_teacherTotals[tid] ?? 0) + (Number(r.amount) || 0)
    }

    _updateStats(); _render()
  }

  const _updateStats = () => {
    const approved = _all.filter(r => r.status === 'approved')
    const total  = approved.reduce((s,r) => s + (Number(r.amount)||0), 0)
    const pending = _all.filter(r => r.status === 'pending').length
    const donors  = new Set(approved.map(r => r.teachers?.id)).size
    const avg     = donors ? Math.round(total / donors) : 0
    const vals = [fmtBaht(total) + ' ฿', pending, donors + ' คน', fmtBaht(avg) + ' ฿']
    document.querySelectorAll('.don-stat-val').forEach((el, i) => { el.textContent = vals[i] })
  }

  const _render = () => {
    const box = document.getElementById('don-table'); if (!box) return
    const q      = (document.getElementById('don-search')?.value ?? '').toLowerCase()
    const status = document.getElementById('don-filter-status')?.value ?? 'all'
    const method = document.getElementById('don-filter-method')?.value ?? 'all'
    const sort   = document.getElementById('don-filter-sort')?.value ?? 'date_desc'

    let rows = _all.filter(r => {
      const t = r.teachers
      if (q && !String(t?.full_name ?? '').toLowerCase().includes(q) && !String(t?.teacher_code ?? '').includes(q)) return false
      if (status !== 'all' && r.status !== status) return false
      if (method === 'cash' && !isCash(r)) return false
      if (method === 'transfer' && isCash(r)) return false
      return true
    })
    if (sort === 'date_asc')     rows.sort((a,b) => new Date(a.created_at) - new Date(b.created_at))
    else if (sort === 'amount_desc') rows.sort((a,b) => (b.amount??0) - (a.amount??0))

    if (!rows.length) {
      box.innerHTML = `<div class="text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>`
      return
    }

    const statusBadge = s => ({
      pending:  `<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">⏳ รอ</span>`,
      approved: `<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">✅ อนุมัติ</span>`,
      rejected: `<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold">❌ ปฏิเสธ</span>`,
    }[s] ?? `<span class="text-gray-400 text-xs">${s}</span>`)

    box.innerHTML = `
    <table class="w-full text-sm">
      <thead class="bg-gray-50 border-b border-gray-100">
        <tr>
          <th class="text-left px-3 py-3 text-xs font-semibold text-gray-500 w-8">#</th>
          <th class="text-left px-3 py-3 text-xs font-semibold text-gray-500">ครู</th>
          <th class="text-center px-3 py-3 text-xs font-semibold text-gray-500">ระดับ</th>
          <th class="text-right px-3 py-3 text-xs font-semibold text-gray-500">ยอด</th>
          <th class="text-center px-3 py-3 text-xs font-semibold text-gray-500">ช่องทาง</th>
          <th class="text-center px-3 py-3 text-xs font-semibold text-gray-500">สถานะ</th>
          <th class="text-center px-3 py-3 text-xs font-semibold text-gray-500">วันที่</th>
          <th class="text-left px-3 py-3 text-xs font-semibold text-gray-500">หมายเหตุ</th>
          <th class="px-3 py-3"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        ${rows.map((r, idx) => {
          const t    = r.teachers
          const cash = isCash(r)
          const note = String(r.admin_note ?? '').replace(/^\[เงินสด\]\s*/, '')
          const totalForTeacher = _teacherTotals[t?.id] ?? 0
          const tier = _tierForAmount(totalForTeacher, _tiers)
          const avatar = t?.image_url
            ? `<img src="${t.image_url}" class="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-gray-200" />`
            : `<div class="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${(t?.full_name??'?').charAt(0)}</div>`
          return `<tr class="hover:bg-gray-50 transition cursor-pointer don-row" data-id="${r.id}" data-tid="${t?.id ?? ''}">
            <td class="px-3 py-3 text-gray-400 text-xs">${idx+1}</td>
            <td class="px-3 py-3">
              <div class="flex items-center gap-2">
                ${avatar}
                <div>
                  <p class="font-semibold text-gray-800 text-sm leading-tight">${t?.full_name ?? '—'}</p>
                  <p class="text-xs text-gray-400">${t?.teacher_code ?? ''}</p>
                </div>
              </div>
            </td>
            <td class="px-3 py-3 text-center">${_stickerEl(tier)}</td>
            <td class="px-3 py-3 text-right font-bold text-emerald-700">${fmtBaht(r.amount)} ฿</td>
            <td class="px-3 py-3 text-center">
              ${cash
                ? `<span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">💵 เงินสด</span>`
                : `<button class="don-slip px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium hover:bg-blue-100 transition" data-url="${r._resolvedSlip ?? ''}" data-id="${r.id}">🧾 ดูสลิป</button>`}
            </td>
            <td class="px-3 py-3 text-center">${statusBadge(r.status)}</td>
            <td class="px-3 py-3 text-center text-xs text-gray-500 whitespace-nowrap">${fmtDate(r.created_at)}</td>
            <td class="px-3 py-3 text-xs text-gray-500 max-w-[100px] truncate" title="${note}">${note || '—'}</td>
            <td class="px-3 py-3">
              <div class="flex gap-1 justify-end" onclick="event.stopPropagation()">
                ${r.status === 'pending' ? `
                  <button class="don-approve text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium" data-id="${r.id}">✅</button>
                  <button class="don-reject  text-xs px-2.5 py-1 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium" data-id="${r.id}">❌</button>
                ` : ''}
                <button class="don-edit text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 font-medium" data-id="${r.id}">✏️</button>
              </div>
            </td>
          </tr>`
        }).join('')}
      </tbody>
    </table>`

    // row click → teacher summary popup
    box.querySelectorAll('.don-row').forEach(row => {
      row.addEventListener('click', () => _openTeacherSummary(row.dataset.tid))
    })

    // slip viewer
    box.querySelectorAll('.don-slip').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation()
        let url = btn.dataset.url
        if (!url) {
          // fallback: try to resolve from request id
          const r = _all.find(x => x.id === Number(btn.dataset.id))
          if (r?.slip_url) {
            const { getPaymentSlipViewUrl } = await import('./api.js')
            url = await getPaymentSlipViewUrl(r.slip_url).catch(() => r.slip_url)
          }
        }
        if (!url) { showToast('ไม่พบสลิป', 'warning'); return }
        const ov = document.createElement('div')
        ov.className = 'fixed inset-0 z-[500] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out'
        ov.innerHTML = `<img src="${url}" class="max-w-full max-h-full rounded-xl shadow-2xl object-contain" />`
        ov.addEventListener('click', () => ov.remove())
        document.body.appendChild(ov)
      })
    })

    // approve / reject / edit
    box.querySelectorAll('.don-approve').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation()
        const { reviewPaymentRequest } = await import('./api.js')
        await reviewPaymentRequest(Number(btn.dataset.id), 'approved').catch(() => {})
        showToast('อนุมัติแล้ว ✅', 'success'); await _load()
      })
    })
    box.querySelectorAll('.don-reject').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation()
        const note = prompt('เหตุผล (ถ้ามี):') ?? ''
        const { reviewPaymentRequest } = await import('./api.js')
        await reviewPaymentRequest(Number(btn.dataset.id), 'rejected', note || null).catch(() => {})
        showToast('ปฏิเสธแล้ว', 'info'); await _load()
      })
    })
    box.querySelectorAll('.don-edit').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); _openEditModal(Number(btn.dataset.id)) })
    })
  }

  // ── Teacher Summary Popup ───────────────────────────────────────────────────
  const _openTeacherSummary = (tid) => {
    if (!tid) return
    const tid_n = Number(tid)
    const txns  = _all.filter(r => r.teachers?.id === tid_n)
    if (!txns.length) return
    const teacher = txns[0].teachers
    const approved = txns.filter(r => r.status === 'approved')
    const total  = approved.reduce((s,r) => s + (Number(r.amount)||0), 0)
    const tier   = _tierForAmount(total, _tiers)
    const hex    = tier?.color ?? '#10b981'
    const r_n    = parseInt(hex.slice(1,3),16), g_n = parseInt(hex.slice(3,5),16), b_n = parseInt(hex.slice(5,7),16)
    const avatar = teacher?.image_url
      ? `<img src="${teacher.image_url}" class="w-20 h-20 rounded-full object-cover border-4 border-white/60 mx-auto mb-2 shadow-lg" />`
      : `<div class="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-2">${(teacher?.full_name??'?').charAt(0)}</div>`

    const m = document.createElement('div')
    m.className = 'fixed inset-0 z-[500] bg-black/60 flex items-center justify-center p-4'
    m.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <!-- header -->
        <div class="px-6 py-6 text-center" style="background:linear-gradient(135deg,rgba(${r_n},${g_n},${b_n},0.9),rgba(${r_n},${g_n},${b_n},1))">
          ${avatar}
          ${tier ? `<div class="text-3xl mb-1">${/^https?:\/\//.test(tier.sticker) ? `<img src="${tier.sticker}" class="w-12 h-12 object-contain mx-auto"/>` : tier.sticker}</div>` : ''}
          <p class="text-white font-bold text-base leading-tight">${teacher?.full_name ?? '—'}</p>
          <p class="text-white/70 text-xs mt-0.5">${teacher?.teacher_code ?? ''}</p>
          ${tier ? `<span class="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">${tier.title}</span>` : ''}
        </div>
        <!-- stats -->
        <div class="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ยอดรวม</p>
            <p class="font-bold text-emerald-600">${fmtBaht(total)} ฿</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">ครั้งทั้งหมด</p>
            <p class="font-bold text-gray-700">${txns.length}</p>
          </div>
          <div class="py-4 text-center">
            <p class="text-xs text-gray-400 mb-1">อนุมัติแล้ว</p>
            <p class="font-bold text-gray-700">${approved.length}</p>
          </div>
        </div>
        <!-- transaction list -->
        <div class="px-5 py-4 max-h-48 overflow-y-auto space-y-2">
          <p class="text-xs font-semibold text-gray-500 mb-2">ประวัติการโดเนท</p>
          ${txns.map(r => {
            const cash = isCash(r)
            const note = String(r.admin_note ?? '').replace(/^\[เงินสด\]\s*/, '')
            const stBadge = { pending:'⏳', approved:'✅', rejected:'❌' }[r.status] ?? ''
            return `<div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400 text-xs">${fmtDate(r.created_at)}</span>
                <span class="text-[11px] ${cash ? 'text-gray-500' : 'text-blue-500'}">${cash ? '💵' : '🧾'}</span>
                ${note ? `<span class="text-xs text-gray-400 truncate max-w-[80px]">${note}</span>` : ''}
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-emerald-700">${fmtBaht(r.amount)} ฿</span>
                <span>${stBadge}</span>
              </div>
            </div>`
          }).join('')}
        </div>
        <div class="px-5 pb-5">
          <button class="don-sum-close w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        </div>
      </div>`
    document.body.appendChild(m)
    m.querySelector('.don-sum-close').addEventListener('click', () => m.remove())
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
  }

  // ── Add cash modal ──────────────────────────────────────────────────────────
  const _openAddModal = async () => {
    const { getTeachers } = await import('./api.js')
    const teachers = await getTeachers().catch(() => [])
    const m = document.createElement('div')
    m.className = 'fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
        <h3 class="font-bold text-gray-800">+ เพิ่มโดเนทเงินสด</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ครูผู้สนับสนุน</label>
          <div id="don-teacher-wrap"></div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">จำนวนเงิน (บาท)</label>
          <input id="don-add-amount" type="number" min="1" placeholder="100"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">หมายเหตุ</label>
          <input id="don-add-note" type="text" placeholder="เช่น รับเงินสด วันที่ 21 พ.ค. 69"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200" />
        </div>
        <div class="flex gap-3 pt-2">
          <button id="don-add-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="don-add-confirm" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">บันทึก</button>
        </div>
      </div>`
    document.body.appendChild(m)
    const donTeacherSel = createTeacherSelect({
      wrap: m.querySelector('#don-teacher-wrap'),
      teachers: [...teachers].sort((a,b) => (a.full_name??'').localeCompare(b.full_name??'','th')),
    })
    m.querySelector('#don-add-cancel').addEventListener('click', () => m.remove())
    m.querySelector('#don-add-confirm').addEventListener('click', async () => {
      const tid    = donTeacherSel.getValue()
      const amount = Number(m.querySelector('#don-add-amount').value)
      const note   = m.querySelector('#don-add-note').value.trim()
      if (!tid)    { showToast('กรุณาเลือกครู', 'warning'); return }
      if (!amount) { showToast('กรุณาใส่จำนวนเงิน', 'warning'); return }
      const { createPaymentRequest } = await import('./api.js')
      await createPaymentRequest({
        teacher_id: parseInt(tid), package_type: 'donation', amount,
        status: 'approved', admin_note: `[เงินสด] ${note}`.trim(),
        reviewed_at: new Date().toISOString(),
      }).catch(e => { showToast('บันทึกไม่สำเร็จ: ' + (e.message ?? ''), 'error') })
      showToast('บันทึกโดเนทเงินสดแล้ว ✅', 'success')
      m.remove(); await _load()
    })
  }

  // ── Edit modal ───────────────────────────────────────────────────────────────
  const _openEditModal = (id) => {
    const r = _all.find(x => x.id === id); if (!r) return
    const note = String(r.admin_note ?? '').replace(/^\[เงินสด\]\s*/, '')
    const m = document.createElement('div')
    m.className = 'fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <h3 class="font-bold text-gray-800">✏️ แก้ไขรายการ</h3>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">ยอดเงิน (บาท)</label>
          <input id="don-edit-amount" type="number" value="${r.amount ?? ''}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-600 mb-1 block">หมายเหตุ</label>
          <input id="don-edit-note" type="text" value="${note}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex gap-3 pt-2">
          <button id="don-edit-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
          <button id="don-edit-save"   class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
        </div>
      </div>`
    document.body.appendChild(m)
    m.querySelector('#don-edit-cancel').addEventListener('click', () => m.remove())
    m.querySelector('#don-edit-save').addEventListener('click', async () => {
      const amount = Number(m.querySelector('#don-edit-amount').value)
      const note2  = m.querySelector('#don-edit-note').value.trim()
      const prefix = isCash(r) ? '[เงินสด] ' : ''
      const { supabase: sb } = await import('./supabase.js')
      const { error } = await sb.from('payment_requests').update({ amount, admin_note: (prefix + note2).trim() || null }).eq('id', id)
      if (error) { showToast('แก้ไขไม่สำเร็จ', 'error'); return }
      showToast('บันทึกแล้ว ✅', 'success'); m.remove(); await _load()
    })
  }

  document.getElementById('don-search')?.addEventListener('input', _render)
  document.getElementById('don-filter-status')?.addEventListener('change', _render)
  document.getElementById('don-filter-method')?.addEventListener('change', _render)
  document.getElementById('don-filter-sort')?.addEventListener('change', _render)
  document.getElementById('don-add')?.addEventListener('click', _openAddModal)
  await _load()
}

// ───── Feedback จากครู/นักเรียน ถึงแอดมิน/ผู้พัฒนา ─────
export async function renderFeedbackAdmin() {
  setActiveNav('feedback-admin')
  document.getElementById('page-title').textContent = 'Feedback ถึงแอดมิน'

  const _esc = v => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  const fmtDate = (s) => {
    if (!s) return '—'
    return new Date(s).toLocaleString('th-TH', { year: '2-digit', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  }
  const CATEGORY_LABEL = {
    compliment:     '😊 ชื่นชม / ขอบคุณ',
    suggestion:     '💡 ข้อเสนอแนะ',
    problem:        '🐞 แจ้งปัญหา / ข้อบกพร่อง',
    password_reset: '🔑 ขอรีเซ็ทรหัสผ่าน',
    other:          '💬 อื่นๆ',
  }
  const ACTIONABLE_CATS = ['suggestion', 'problem', 'password_reset']
  const STATUS_OPTS = [
    { value: 'pending',     label: '🕐 รอดำเนินการ',  cls: 'bg-gray-100 text-gray-600' },
    { value: 'in_progress', label: '🔧 กำลังแก้ไข',   cls: 'bg-amber-100 text-amber-700' },
    { value: 'resolved',    label: '✅ แก้ไขแล้ว',    cls: 'bg-emerald-100 text-emerald-700' },
  ]
  const STATUS_BADGE = Object.fromEntries(STATUS_OPTS.map(s => [s.value, s]))

  setContent(`
  <div class="max-w-4xl mx-auto animate-fade space-y-5">
    <div>
      <p class="text-xs text-gray-400 mt-0.5">ความคิดเห็น/ข้อเสนอแนะ/ปัญหาที่ครูและนักเรียนส่งถึงแอดมินโดยตรง</p>
    </div>

    <div id="fb-cat-stats" class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div class="col-span-2 sm:col-span-4 text-center py-4 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
    <p class="text-[11px] text-gray-400 -mt-3">💡 คลิกการ์ดหมวดเพื่อกรองรายการตามหมวดนั้น</p>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-wrap gap-3">
      <input id="fb-search" type="search" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง หรือข้อความ"
        class="flex-1 min-w-[160px] border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      <select id="fb-filter-role" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">ผู้ส่ง: ทั้งหมด</option>
        <option value="teacher">ครู</option>
        <option value="student">นักเรียน</option>
      </select>
      <select id="fb-filter-cat" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">หัวข้อ: ทั้งหมด</option>
        <option value="compliment">ชื่นชม / ขอบคุณ</option>
        <option value="suggestion">ข้อเสนอแนะ</option>
        <option value="problem">แจ้งปัญหา</option>
        <option value="password_reset">ขอรีเซ็ทรหัสผ่าน</option>
        <option value="other">อื่นๆ</option>
      </select>
      <select id="fb-filter-read" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none">
        <option value="all">สถานะ: ทั้งหมด</option>
        <option value="unread">ยังไม่อ่าน</option>
        <option value="read">อ่านแล้ว</option>
      </select>
    </div>

    <div id="fb-list" class="space-y-3">
      <div class="text-center py-12 text-gray-400">
        <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลด...</p>
      </div>
    </div>
  </div>`)

  let _all = []

  const _load = async () => {
    _all = await getAllAppFeedback().catch(() => [])
    _updateStats(); _render()
  }

  const _updateStats = () => {
    const box = document.getElementById('fb-cat-stats')
    if (box) {
      box.innerHTML = Object.keys(CATEGORY_LABEL).map(cat => {
        const items  = _all.filter(f => f.category === cat)
        const total  = items.length
        const unread = items.filter(f => !f.is_read).length
        let sub = `<p class="text-[10px] text-gray-300 mt-0.5">—</p>`
        if (ACTIONABLE_CATS.includes(cat)) {
          const resolved = items.filter(f => f.status === 'resolved').length
          sub = `<p class="text-[10px] font-semibold mt-0.5 ${resolved === total && total > 0 ? 'text-emerald-600' : 'text-amber-600'}">✅ ดำเนินการแล้ว ${resolved}/${total}</p>`
        } else if (unread) {
          sub = `<p class="text-[10px] font-semibold text-indigo-500 mt-0.5">🔵 ยังไม่อ่าน ${unread}</p>`
        }
        return `
        <div class="fb-cat-card bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center cursor-pointer hover:border-indigo-200 hover:shadow-md transition" data-cat="${cat}">
          <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1 truncate">${CATEGORY_LABEL[cat]}</p>
          <p class="text-xl font-bold text-gray-800">${total}</p>
          ${sub}
        </div>`
      }).join('')

      box.querySelectorAll('.fb-cat-card').forEach(card => card.addEventListener('click', () => {
        const sel = document.getElementById('fb-filter-cat')
        if (sel) { sel.value = card.dataset.cat; _render() }
        document.getElementById('fb-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }))
    }
    window._refreshFeedbackBadge?.()
  }

  const _render = () => {
    const box  = document.getElementById('fb-list'); if (!box) return
    const q    = (document.getElementById('fb-search')?.value ?? '').toLowerCase()
    const role = document.getElementById('fb-filter-role')?.value ?? 'all'
    const cat  = document.getElementById('fb-filter-cat')?.value ?? 'all'
    const read = document.getElementById('fb-filter-read')?.value ?? 'all'

    let rows = _all.filter(f => {
      const searchable = [f.sender_name, f.message, f.student?.student_code, f.student?.main_room, f.student?.religion_room, ...(f.messages ?? []).map(message => message.message)].join(' ').toLowerCase()
      if (q && !searchable.includes(q)) return false
      if (role !== 'all' && f.sender_role !== role) return false
      if (cat  !== 'all' && f.category !== cat) return false
      if (read === 'unread' && f.is_read) return false
      if (read === 'read'   && !f.is_read) return false
      return true
    })

    if (!rows.length) {
      box.innerHTML = `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-16 text-gray-400"><p class="text-3xl mb-2">📭</p><p class="text-sm">ไม่พบรายการ</p></div>`
      return
    }

    box.innerHTML = rows.map(f => `
      <div class="bg-white rounded-2xl border ${f.is_read ? 'border-gray-100' : 'border-indigo-200 ring-1 ring-indigo-100'} shadow-sm p-4 fb-card" data-id="${f.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${_esc(f.sender_name ?? '?').charAt(0)}</div>
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm leading-tight truncate">${_esc(f.sender_name || '—')}
                <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${f.sender_role === 'teacher' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}">${f.sender_role === 'teacher' ? 'ครู' : 'นักเรียน'}</span>
              </p>
              <p class="text-[11px] text-gray-400">${fmtDate(f.created_at)}</p>
              ${f.sender_role === 'student' ? `<p class="text-[11px] text-slate-500 mt-0.5">รหัส ${_esc(f.student?.student_code || '—')} · ห้องสามัญ ${_esc(f.student?.main_room || '—')} · ห้องศาสนา ${_esc(f.student?.religion_room || '—')}</p>` : ''}
            </div>
          </div>
          ${!f.is_read ? `<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-semibold flex-shrink-0">ใหม่</span>` : ''}
        </div>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <select class="fb-category-sel border border-gray-200 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 bg-white focus:outline-none" data-id="${f.id}" title="แก้ไขหมวดหมู่ (กรณีผู้ส่งเลือกผิด เช่น แจ้งปัญหาแต่เลือกโหมดชื่นชม)">
            ${Object.entries(CATEGORY_LABEL).map(([val, label]) => `<option value="${val}" ${f.category === val ? 'selected' : ''}>${label}</option>`).join('')}
          </select>
          ${ACTIONABLE_CATS.includes(f.category) ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_BADGE[f.status]?.cls ?? 'bg-gray-100 text-gray-600'}">${STATUS_BADGE[f.status]?.label ?? f.status}</span>` : ''}
        </div>
        <div class="mt-3 space-y-2 rounded-2xl bg-slate-50 border border-slate-100 p-3">
          <div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${_esc(f.sender_name || 'ผู้ส่ง')}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${_esc(f.message)}</p><p class="text-[9px] text-slate-400 mt-1">${fmtDate(f.created_at)}</p></div></div>
          ${(f.messages ?? []).map(message => message.author_role === 'admin'
            ? `<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${_esc(message.message)}</p><p class="text-[9px] text-indigo-200 mt-1">${fmtDate(message.created_at)}</p></div></div>`
            : `<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2"><p class="text-[10px] font-semibold text-slate-500 mb-0.5">${_esc(f.sender_name || 'ผู้ส่ง')}</p><p class="text-sm text-gray-700 whitespace-pre-wrap">${_esc(message.message)}</p><p class="text-[9px] text-slate-400 mt-1">${fmtDate(message.created_at)}</p></div></div>`).join('')}
          ${f.admin_reply && !(f.messages ?? []).some(message => message.author_role === 'admin' && message.message === f.admin_reply) ? `<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3 py-2"><p class="text-[10px] font-semibold text-indigo-100 mb-0.5">แอดมิน</p><p class="text-sm whitespace-pre-wrap">${_esc(f.admin_reply)}</p><p class="text-[9px] text-indigo-200 mt-1">${f.replied_at ? fmtDate(f.replied_at) : ''}</p></div></div>` : ''}
        </div>
        ${f.category === 'password_reset' && f.sender_role === 'student' && f.student?.id ? (
          f.status === 'resolved'
            ? `<p class="mt-3 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">✅ รีเซ็ทรหัสผ่านให้แล้ว</p>`
            : `<button class="fb-pw-reset-btn mt-3 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition" data-id="${f.id}" data-sid="${f.student.id}" data-code="${_esc(f.student.student_code || '')}">
                🔑 รีเซ็ทรหัสผ่าน (= รหัสนักเรียน ${_esc(f.student.student_code || '')})
              </button>`
        ) : ''}
        <div class="mt-3 flex items-center gap-2">
          <button class="fb-toggle-read px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition" data-id="${f.id}" data-read="${f.is_read}">
            ${f.is_read ? '↩️ ทำเป็นยังไม่อ่าน' : '✓ ทำเครื่องหมายว่าอ่านแล้ว'}
          </button>
          <button class="fb-delete px-3 py-1.5 rounded-xl border border-red-100 text-xs font-medium text-red-500 hover:bg-red-50 transition" data-id="${f.id}">
            🗑️ ลบ
          </button>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold text-gray-500 flex-shrink-0">เปลี่ยนสถานะ:</span>
            <select class="fb-status-sel border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none" data-id="${f.id}">
              ${STATUS_OPTS.map(s => `<option value="${s.value}" ${f.status === s.value ? 'selected' : ''}>${s.label}</option>`).join('')}
            </select>
          </div>
          <textarea class="fb-reply-input w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="2" maxlength="2000"
            placeholder="พิมพ์ข้อความใหม่ถึงผู้ส่ง..." data-id="${f.id}"></textarea>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] text-gray-400">${f.replied_at ? `ตอบล่าสุด ${fmtDate(f.replied_at)}` : 'ยังไม่มีคำตอบจากแอดมิน'}</span>
            <button class="fb-save-status px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${f.id}">💬 ส่งข้อความ / บันทึกสถานะ</button>
          </div>
        </div>
      </div>`).join('')

    box.querySelectorAll('.fb-toggle-read').forEach(btn => btn.addEventListener('click', async () => {
      const id  = parseInt(btn.dataset.id)
      const cur = btn.dataset.read === 'true'
      try {
        await setFeedbackRead(id, !cur)
      } catch { showToast('บันทึกไม่สำเร็จ', 'error'); return }
      const item = _all.find(x => x.id === id); if (item) item.is_read = !cur
      _updateStats(); _render()
    }))

    box.querySelectorAll('.fb-category-sel').forEach(sel => sel.addEventListener('change', async () => {
      const id     = parseInt(sel.dataset.id)
      const newCat = sel.value
      const item   = _all.find(x => x.id === id)
      const oldCat = item?.category
      sel.disabled = true
      try {
        await setFeedbackCategory(id, newCat)
      } catch { showToast('เปลี่ยนหมวดหมู่ไม่สำเร็จ', 'error'); sel.disabled = false; sel.value = oldCat; return }
      if (item) item.category = newCat
      showToast('เปลี่ยนหมวดหมู่แล้ว — ตอนนี้สามารถตอบกลับ/อัปเดตสถานะได้แล้ว', 'success')
      _render()
    }))

    box.querySelectorAll('.fb-delete').forEach(btn => btn.addEventListener('click', async () => {
      const id = parseInt(btn.dataset.id)
      if (!confirm('ยืนยันลบความคิดเห็นนี้?')) return
      try {
        await deleteAppFeedback(id)
      } catch { showToast('ลบไม่สำเร็จ', 'error'); return }
      _all = _all.filter(x => x.id !== id)
      showToast('ลบแล้ว', 'success')
      _updateStats(); _render()
    }))

    box.querySelectorAll('.fb-pw-reset-btn').forEach(btn => btn.addEventListener('click', async () => {
      const id      = parseInt(btn.dataset.id)
      const sid     = parseInt(btn.dataset.sid)
      const code    = btn.dataset.code
      if (!confirm(`ยืนยันรีเซ็ทรหัสผ่านของนักเรียนรหัส ${code} เป็นรหัสนักเรียน (${code}) จริงหรือไม่?`)) return
      const prevText = btn.textContent
      btn.disabled = true; btn.textContent = '⏳ กำลังรีเซ็ท...'
      try {
        await advisorResetStudentPassword(sid, code)
        await markStudentPasswordResetNotice(sid).catch(() => {})
        await setFeedbackStatusReply(id, {
          status: 'resolved',
          adminReply: `รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${code}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`,
        })
      } catch (err) {
        showToast('รีเซ็ทไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = prevText
        return
      }
      const item = _all.find(x => x.id === id)
      if (item) {
        item.status = 'resolved'
        const now = new Date().toISOString()
        const reply = `รีเซ็ทรหัสผ่านให้แล้วครับ รหัสผ่านใหม่คือรหัสนักเรียนของคุณ (${code}) — เข้าสู่ระบบครั้งถัดไปแล้วค่อยเปลี่ยนรหัสผ่านใหม่ได้จากหน้าโปรไฟล์`
        item.admin_reply = reply; item.replied_at = now
        item.messages = [...(item.messages ?? []), { id: `local-${Date.now()}`, feedback_id: id, author_role: 'admin', message: reply, created_at: now }]
      }
      showToast('รีเซ็ทรหัสผ่านสำเร็จแล้ว', 'success')
      _updateStats(); _render()
    }))

    box.querySelectorAll('.fb-save-status').forEach(btn => btn.addEventListener('click', async () => {
      const id     = parseInt(btn.dataset.id)
      const card   = btn.closest('.fb-card')
      const status = card.querySelector('.fb-status-sel')?.value
      const reply  = card.querySelector('.fb-reply-input')?.value.trim()
      btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
      try {
        await setFeedbackStatusReply(id, { status, adminReply: reply })
      } catch { showToast('บันทึกไม่สำเร็จ', 'error'); btn.disabled = false; btn.textContent = '💾 บันทึก'; return }
      const item = _all.find(x => x.id === id)
      if (item) {
        item.status = status
        if (reply) {
          const now = new Date().toISOString()
          item.admin_reply = reply; item.replied_at = now
          item.messages = [...(item.messages ?? []), { id: `local-${Date.now()}`, feedback_id: id, author_role: 'admin', message: reply, created_at: now }]
        }
      }
      showToast(reply ? 'ส่งข้อความและบันทึกสถานะแล้ว' : 'บันทึกสถานะแล้ว', 'success')
      _updateStats(); _render()
    }))
  }

  document.getElementById('fb-search')?.addEventListener('input', _render)
  document.getElementById('fb-filter-role')?.addEventListener('change', _render)
  document.getElementById('fb-filter-cat')?.addEventListener('change', _render)
  document.getElementById('fb-filter-read')?.addEventListener('change', _render)
  await _load()
}

// ───── ปฏิทินปฏิบัติงาน (teacher read-only view) ─────
export async function renderWorkCalendarView() {
  const { getWorkCalendarEvents, getSchoolConfig } = await import('./api.js')

  setActiveNav('work-calendar-view')
  document.getElementById('page-title').textContent = 'ปฏิทินปฏิบัติงาน'

  const _esc = v => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  const EVENT_TYPE_LABEL = { inspection: '🔍 รอบตรวจ', deadline: '⏰ กำหนดส่ง', meeting: '📅 ประชุม', other: '📌 อื่นๆ' }
  const EVENT_TYPE_COLOR = {
    inspection: 'bg-indigo-100 text-indigo-700',
    deadline: 'bg-rose-100 text-rose-700',
    meeting: 'bg-amber-100 text-amber-700',
    other: 'bg-gray-100 text-gray-600',
  }
  const _fmtDate = d => new Date(d + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
  const _fmtDateShort = d => new Date(d + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })

  let cfg = { academic_year: new Date().getFullYear() + 543, semester: 1 }
  try { const c = await getSchoolConfig(); cfg = c } catch {}

  setContent(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="mb-6">
      <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${cfg.academic_year} ภาคเรียนที่ ${cfg.semester}</p>
    </div>
    <div id="wcalv-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
  </div>`)

  try {
    const events = await getWorkCalendarEvents(cfg.academic_year, cfg.semester)
    const list = document.getElementById('wcalv-list')
    if (!events.length) {
      list.innerHTML = '<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรมในปฏิทิน</div>'
      return
    }
    const today = _dateInputValue(new Date())
    list.innerHTML = events.map(ev => {
      const items = (ev.work_calendar_items || []).sort((a,b)=>a.sort_order-b.sort_order)
      const isPast = ev.event_date < today
      const roundBadge = ev.event_type === 'inspection' && ev.round_number
        ? `<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${ev.round_number}</span>`
        : ''
      return `<div class="bg-white rounded-2xl border ${isPast?'border-gray-100 opacity-60':'border-gray-100'} shadow-sm p-4">
        <div class="flex flex-wrap items-center gap-1.5 mb-1">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${EVENT_TYPE_COLOR[ev.event_type]}">${EVENT_TYPE_LABEL[ev.event_type]}</span>
          ${roundBadge}
          ${isPast?'<span class="text-[11px] text-gray-400">ผ่านมาแล้ว</span>':'<span class="text-[11px] font-semibold text-emerald-600">กำลังจะมาถึง</span>'}
          <span class="text-xs text-gray-400 ml-auto">${ev.end_date && ev.end_date !== ev.event_date ? `${_fmtDateShort(ev.event_date)} – ${_fmtDate(ev.end_date)}` : _fmtDate(ev.event_date)}</span>
        </div>
        <p class="font-semibold text-gray-800 text-sm">${_esc(ev.label)}</p>
        ${ev.description ? `<p class="text-xs text-gray-500 mt-0.5">${_esc(ev.description)}</p>` : ''}
        ${items.length ? `<div class="mt-2 border-t border-gray-50 pt-2">
          <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">สิ่งที่จะตรวจ</p>
          <ul class="space-y-0.5">${items.map(it=>`<li class="text-xs text-gray-600 flex gap-1.5"><span class="text-indigo-400">☑</span>${_esc(it.item_label)}</li>`).join('')}</ul>
        </div>` : ''}
      </div>`
    }).join('')
  } catch(err) {
    const _esc2 = v => String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;')
    document.getElementById('wcalv-list').innerHTML = `<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${_esc2(err.message)}</div>`
  }
}

// ───── ปฏิทินปฏิบัติงาน (supervisor manage view) ─────
export async function renderWorkCalendar(teacher) {
  const { getWorkCalendarEvents, createWorkCalendarEvent, updateWorkCalendarEvent, deleteWorkCalendarEvent, replaceWorkCalendarItems, getSchoolConfig } = await import('./api.js')

  setActiveNav('work-calendar')
  document.getElementById('page-title').textContent = 'ปฏิทินปฏิบัติงาน'

  const _esc = v => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')

  const EVENT_TYPE_LABEL = { inspection: '🔍 รอบตรวจ', deadline: '⏰ กำหนดส่ง', meeting: '📅 ประชุม', other: '📌 อื่นๆ' }
  const EVENT_TYPE_COLOR = {
    inspection: 'bg-indigo-100 text-indigo-700',
    deadline: 'bg-rose-100 text-rose-700',
    meeting: 'bg-amber-100 text-amber-700',
    other: 'bg-gray-100 text-gray-600',
  }
  const _fmtDate = d => new Date(d + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
  const _fmtDateShort = d => new Date(d + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })

  // ดึง config สำหรับปีการศึกษา
  let cfg = { academic_year: new Date().getFullYear() + 543, semester: 1 }
  try { const c = await getSchoolConfig(); cfg = c } catch {}

  const _ay = cfg.academic_year
  const _sm = cfg.semester

  setContent(`<div class="animate-fade max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ปีการศึกษา ${_ay} ภาคเรียนที่ ${_sm}</p>
      </div>
      <button id="wcal-create-btn"
        class="px-4 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition shadow-sm flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มกิจกรรม
      </button>
    </div>
    <div id="wcal-list" class="space-y-3">
      <div class="flex justify-center py-12 text-gray-400 text-sm">กำลังโหลด...</div>
    </div>
  </div>

  <!-- Modal สร้าง/แก้ไข event -->
  <div id="wcal-modal" class="hidden fixed inset-0 z-[80] flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="wcal-modal-backdrop"></div>
    <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <h3 id="wcal-modal-title" class="text-lg font-bold text-gray-800 mb-4">เพิ่มกิจกรรม</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ประเภทกิจกรรม</label>
            <div class="flex flex-wrap gap-2" id="wcal-type-pills">
              ${Object.entries(EVENT_TYPE_LABEL).map(([k,v]) => `
                <button data-type="${k}" class="wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${k==='inspection'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}">${v}</button>
              `).join('')}
            </div>
          </div>
          <div id="wcal-round-row">
            <label class="block text-xs font-semibold text-gray-500 mb-1">รอบที่ <span class="text-gray-400 font-normal">(เฉพาะรอบตรวจ)</span></label>
            <input id="wcal-round" type="number" min="1" placeholder="เช่น 1, 2, 3" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ช่วงวันที่ <span class="text-rose-500">*</span></label>
            <div class="flex items-center gap-2">
              <input id="wcal-date" type="date" class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
              <span class="text-gray-400 text-sm shrink-0">ถึง</span>
              <input id="wcal-end-date" type="date" placeholder="(ไม่บังคับ)" class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
            </div>
            <p class="text-[11px] text-gray-400 mt-1">วันสิ้นสุดไม่บังคับ — ใส่เมื่อกิจกรรมมีช่วงเวลา</p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ชื่อกิจกรรม <span class="text-rose-500">*</span></label>
            <input id="wcal-label" type="text" maxlength="120" placeholder="เช่น ตรวจ ปพ.5 รอบที่ 1" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียด</label>
            <textarea id="wcal-desc" rows="2" maxlength="500" placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สิ่งที่จะตรวจ / checklist</label>
            <div id="wcal-items-list" class="space-y-2 mb-2"></div>
            <button id="wcal-add-item" class="text-indigo-600 text-sm font-medium hover:text-indigo-700 flex items-center gap-1">＋ เพิ่มรายการ</button>
          </div>
        </div>
        <div class="flex gap-3 mt-6">
          <button id="wcal-modal-cancel" class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">ยกเลิก</button>
          <button id="wcal-modal-save" class="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition">บันทึก</button>
        </div>
      </div>
    </div>
  </div>`)

  let _events = []
  let _editId = null

  // ── helpers ──
  function _renderList() {
    const list = document.getElementById('wcal-list')
    if (!_events.length) {
      list.innerHTML = '<div class="text-center py-12 text-gray-400 text-sm">ยังไม่มีกิจกรรม<br><span class="text-xs">กดปุ่ม + เพิ่มกิจกรรม เพื่อเริ่มต้น</span></div>'
      return
    }
    list.innerHTML = _events.map(ev => {
      const items = (ev.work_calendar_items || []).sort((a,b)=>a.sort_order-b.sort_order)
      const roundBadge = ev.event_type === 'inspection' && ev.round_number
        ? `<span class="ml-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">ครั้งที่ ${ev.round_number}</span>`
        : ''
      return `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition" data-ev-id="${ev.id}">
        <div class="flex items-start justify-between gap-3">
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-1.5 mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${EVENT_TYPE_COLOR[ev.event_type]}">${EVENT_TYPE_LABEL[ev.event_type]}</span>
              ${roundBadge}
              <span class="text-xs text-gray-400">${ev.end_date && ev.end_date !== ev.event_date ? `${_fmtDateShort(ev.event_date)} – ${_fmtDate(ev.end_date)}` : _fmtDate(ev.event_date)}</span>
            </div>
            <p class="font-semibold text-gray-800 text-sm">${_esc(ev.label)}</p>
            ${ev.description ? `<p class="text-xs text-gray-500 mt-0.5">${_esc(ev.description)}</p>` : ''}
            ${items.length ? `<ul class="mt-2 space-y-0.5">${items.map(it=>`<li class="text-xs text-gray-500 flex gap-1.5"><span class="text-indigo-400 mt-0.5">☑</span>${_esc(it.item_label)}</li>`).join('')}</ul>` : ''}
          </div>
          <div class="flex gap-1.5 shrink-0">
            <button class="wcal-edit-btn p-2 rounded-xl bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 transition text-sm" data-ev-id="${ev.id}" title="แก้ไข">✏️</button>
            <button class="wcal-del-btn p-2 rounded-xl bg-gray-50 hover:bg-rose-50 text-gray-500 hover:text-rose-600 transition text-sm" data-ev-id="${ev.id}" title="ลบ">🗑️</button>
          </div>
        </div>
      </div>`
    }).join('')
  }

  function _addItemRow(val = '') {
    const wrap = document.getElementById('wcal-items-list')
    const row = document.createElement('div')
    row.className = 'flex gap-2 items-center'
    row.innerHTML = `<input type="text" maxlength="100" value="${_esc(val)}" placeholder="เช่น ตรวจโปรไฟล์ครูครบถ้วน" class="flex-1 border border-gray-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
      <button class="p-1.5 text-gray-400 hover:text-rose-500 transition wcal-remove-item">✕</button>`
    row.querySelector('.wcal-remove-item').onclick = () => row.remove()
    wrap.appendChild(row)
  }

  function _openModal(ev = null) {
    _editId = ev?.id ?? null
    const modal = document.getElementById('wcal-modal')
    document.getElementById('wcal-modal-title').textContent = ev ? 'แก้ไขกิจกรรม' : 'เพิ่มกิจกรรม'

    // reset pills
    document.querySelectorAll('.wcal-type-pill').forEach(p => {
      const active = p.dataset.type === (ev?.event_type ?? 'inspection')
      p.className = `wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition ${active ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}`
    })

    document.getElementById('wcal-round').value = ev?.round_number ?? ''
    document.getElementById('wcal-date').value = ev?.event_date ?? ''
    document.getElementById('wcal-end-date').value = ev?.end_date ?? ''
    document.getElementById('wcal-label').value = ev?.label ?? ''
    document.getElementById('wcal-desc').value = ev?.description ?? ''

    document.getElementById('wcal-items-list').innerHTML = ''
    ;(ev?.work_calendar_items || []).sort((a,b)=>a.sort_order-b.sort_order).forEach(it => _addItemRow(it.item_label))

    _toggleRoundRow()
    modal.classList.remove('hidden')
    setTimeout(() => document.getElementById('wcal-label').focus(), 50)
  }

  function _closeModal() {
    document.getElementById('wcal-modal').classList.add('hidden')
    _editId = null
  }

  function _getSelectedType() {
    return document.querySelector('.wcal-type-pill.bg-indigo-600')?.dataset.type ?? 'inspection'
  }

  function _toggleRoundRow() {
    const row = document.getElementById('wcal-round-row')
    row.classList.toggle('hidden', _getSelectedType() !== 'inspection')
  }

  // ── event listeners ──
  document.getElementById('wcal-create-btn').addEventListener('click', () => _openModal())
  document.getElementById('wcal-modal-cancel').addEventListener('click', _closeModal)
  document.getElementById('wcal-modal-backdrop').addEventListener('click', _closeModal)
  document.getElementById('wcal-add-item').addEventListener('click', () => _addItemRow())

  document.getElementById('wcal-type-pills').addEventListener('click', e => {
    const btn = e.target.closest('.wcal-type-pill')
    if (!btn) return
    document.querySelectorAll('.wcal-type-pill').forEach(p => {
      p.className = `wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-white text-gray-600 border-gray-200 hover:border-indigo-300`
    })
    btn.className = `wcal-type-pill px-3 py-1.5 rounded-full text-sm font-medium border transition bg-indigo-600 text-white border-indigo-600`
    _toggleRoundRow()
  })

  document.getElementById('wcal-list').addEventListener('click', e => {
    const editBtn = e.target.closest('.wcal-edit-btn')
    const delBtn = e.target.closest('.wcal-del-btn')
    if (editBtn) {
      const ev = _events.find(x => x.id === +editBtn.dataset.evId)
      if (ev) _openModal(ev)
    }
    if (delBtn) {
      const ev = _events.find(x => x.id === +delBtn.dataset.evId)
      if (!ev) return
      if (!confirm(`ลบ "${ev.label}" ใช่ไหม?\nความคิดเห็น/บันทึกที่อ้างอิงกิจกรรมนี้จะไม่ถูกลบ แต่จะสูญเสียการอ้างอิง`)) return
      deleteWorkCalendarEvent(ev.id).then(() => {
        _events = _events.filter(x => x.id !== ev.id)
        _renderList()
      }).catch(err => alert('ลบไม่สำเร็จ: ' + err.message))
    }
  })

  document.getElementById('wcal-modal-save').addEventListener('click', async () => {
    const type = _getSelectedType()
    const round = parseInt(document.getElementById('wcal-round').value) || null
    const date = document.getElementById('wcal-date').value
    const endDate = document.getElementById('wcal-end-date').value || null
    const label = document.getElementById('wcal-label').value.trim()
    const desc = document.getElementById('wcal-desc').value.trim()
    if (!date || !label) { alert('กรุณากรอกวันที่และชื่อกิจกรรม'); return }
    if (endDate && endDate < date) { alert('วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น'); return }

    const items = [...document.querySelectorAll('#wcal-items-list input')].map(i => i.value.trim()).filter(Boolean)

    const btn = document.getElementById('wcal-modal-save')
    btn.textContent = 'กำลังบันทึก...'
    btn.disabled = true
    try {
      let saved
      if (_editId) {
        saved = await updateWorkCalendarEvent(_editId, { eventType: type, roundNumber: round, eventDate: date, endDate, label, description: desc })
        await replaceWorkCalendarItems(_editId, items)
        saved.work_calendar_items = items.map((item_label, sort_order) => ({ item_label, sort_order }))
        _events = _events.map(x => x.id === _editId ? saved : x)
      } else {
        saved = await createWorkCalendarEvent({ eventType: type, roundNumber: round, eventDate: date, endDate, label, description: desc, academicYear: _ay, semester: _sm, createdByTeacherId: teacher?.id })
        await replaceWorkCalendarItems(saved.id, items)
        saved.work_calendar_items = items.map((item_label, sort_order) => ({ item_label, sort_order }))
        _events.push(saved)
        _events.sort((a,b) => a.event_date.localeCompare(b.event_date))
      }
      _renderList()
      _closeModal()
    } catch (err) {
      alert('บันทึกไม่สำเร็จ: ' + err.message)
    } finally {
      btn.textContent = 'บันทึก'
      btn.disabled = false
    }
  })

  // ── load ──
  try {
    _events = await getWorkCalendarEvents(_ay, _sm)
  } catch (err) {
    document.getElementById('wcal-list').innerHTML = `<div class="text-center py-8 text-red-400 text-sm">โหลดไม่สำเร็จ: ${_esc(err.message)}</div>`
    return
  }
  _renderList()
}

// ─── View: Religion Groups (กลุ่มรายวิชาศาสนา) ──────────────────────────────
// กรองเฉพาะครูศาสนา (category หรือ subject_group ที่เกี่ยวข้อง)
function _getReligionTeachers(allTeachers) {
  return allTeachers.filter(t =>
    t.category === 'ศาสนา' || ['AGM','AGMVOC'].includes(t.subject_group)
  ).concat(allTeachers.filter(t =>
    !t.category && !['AGM','AGMVOC','ACDMVOC'].includes(t.subject_group)
  )).filter((t, i, a) => a.findIndex(x => x.id === t.id) === i)
}

export async function renderReligionGroups() {
  setActiveNav('religion-groups')
  document.getElementById('page-title').textContent = 'กลุ่มรายวิชาศาสนา'

  setContent(`<div class="max-w-4xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">จัดกลุ่มย่อยครูศาสนา • หัวหน้ากลุ่มย่อยจะเข้ามาเพิ่มสมาชิกในกลุ่มของตัวเอง และมี Dashboard ติดตามความคืบหน้า</p>
      </div>
      <button id="btn-add-rg"
        class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มกลุ่ม
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="rg-table-wrap">
        <div class="flex items-center justify-center py-16 text-gray-400">
          <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg> กำลังโหลด...
        </div>
      </div>
    </div>
  </div>`)

  let groups = [], allTeachers = []
  try {
    ;[groups, allTeachers] = await Promise.all([getReligionGroups(), getTeachers()])
  } catch { showToast('โหลดข้อมูลไม่สำเร็จ', 'error'); return }

  _renderRGTable(groups)

  document.getElementById('btn-add-rg').onclick = () =>
    _openRGModal(null, allTeachers, async () => {
      const gs = await getReligionGroups()
      _renderRGTable(gs)
    })
}

function _renderRGTable(groups) {
  const wrap = document.getElementById('rg-table-wrap')
  if (!wrap) return

  if (!groups.length) {
    wrap.innerHTML = `<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่มีกลุ่มในระบบ</p>
      <p class="text-xs mt-1">กดปุ่ม "เพิ่มกลุ่ม" เพื่อเริ่มต้น</p>
    </div>`
    return
  }

  wrap.innerHTML = `
    <table class="w-full text-sm">
      <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
        <tr>
          <th class="px-5 py-3 text-left">ชื่อกลุ่ม</th>
          <th class="px-5 py-3 text-left">หัวหน้ากลุ่ม</th>
          <th class="px-5 py-3 text-right">จัดการ</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50" id="rg-tbody">
        ${groups.map(g => {
          const ldr = g.teachers
          return `<tr class="hover:bg-gray-50 transition" data-gid="${g.id}">
            <td class="px-5 py-4 font-semibold text-gray-800">🕌 ${_esc(g.name)}</td>
            <td class="px-5 py-4 text-gray-600">
              ${ldr
                ? `<div class="flex items-center gap-2">
                    ${ldr.image_url
                      ? `<img src="${ldr.image_url}" class="w-7 h-7 rounded-full object-cover" />`
                      : `<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${_esc(ldr.full_name?.charAt(0) ?? '?')}</div>`}
                    <div>
                      <span class="font-medium">${_esc(ldr.full_name)}</span>
                      ${ldr.teacher_code ? `<span class="block text-xs font-mono text-gray-400">${ldr.teacher_code}</span>` : ''}
                    </div>
                  </div>`
                : '<span class="text-gray-300 text-xs">ยังไม่ระบุ</span>'}
            </td>
            <td class="px-5 py-4 text-right">
              <button class="rg-edit text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3" data-gid="${g.id}">แก้ไข</button>
              <button class="rg-del text-xs text-red-400 hover:text-red-600 font-medium" data-gid="${g.id}" data-name="${_esc(g.name)}">ลบ</button>
            </td>
          </tr>`
        }).join('')}
      </tbody>
    </table>`

  wrap.querySelectorAll('.rg-edit').forEach(btn => {
    btn.onclick = async () => {
      const gid = +btn.dataset.gid
      const gs = await getReligionGroups()
      const g = gs.find(x => x.id === gid)
      const all = await getTeachers()
      _openRGModal(g, all, async () => { _renderRGTable(await getReligionGroups()) })
    }
  })

  wrap.querySelectorAll('.rg-del').forEach(btn => {
    btn.onclick = async () => {
      const gid = +btn.dataset.gid
      const name = btn.dataset.name
      if (!confirm(`ลบกลุ่ม "${name}" ใช่ไหม?\nหัวหน้ากลุ่มย่อยจะถูกถอดบทบาทออกด้วย`)) return
      try {
        // ถอดบทบาทหัวหน้ากลุ่มย่อยก่อน
        const gs = await getReligionGroups()
        const g = gs.find(x => x.id === gid)
        if (g?.leader_id) await updateTeacherPosition(g.leader_id, null, 'religion_subgroup_head')
        await deleteReligionGroup(gid)
        showToast('ลบกลุ่มแล้ว', 'success')
        _renderRGTable(await getReligionGroups())
      } catch (e) { showToast('ลบไม่สำเร็จ: ' + e.message, 'error') }
    }
  })
}

function _openRGModal(group, allTeachers, onSave) {
  const isEdit = !!group
  const overlay = document.createElement('div')
  overlay.className = 'fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4'

  const sortedTeachers = [...allTeachers].sort((a, b) =>
    (a.full_name ?? '').localeCompare(b.full_name ?? '', 'th'))

  overlay.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <h3 class="font-bold text-gray-800">${isEdit ? 'แก้ไขกลุ่ม' : 'เพิ่มกลุ่มใหม่'}</h3>
        <button class="text-gray-400 hover:text-gray-600 text-xl" id="rg-modal-close">✕</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อกลุ่ม <span class="text-red-400">*</span></label>
          <input id="rg-name" type="text" value="${_esc(group?.name ?? '')}" placeholder="เช่น กลุ่มที่ 1, กลุ่มฟิกห์..."
            class="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">หัวหน้ากลุ่มย่อย</label>
          <div id="rg-leader-wrap"></div>
          <p class="text-xs text-gray-400 mt-1">ครูที่ถูกเลือกจะได้รับบทบาท "หัวหน้ากลุ่มย่อย" สามารถเข้าไปเพิ่มสมาชิกในกลุ่มของตัวเอง และมี Dashboard ติดตามความคืบหน้าของกลุ่ม</p>
        </div>
      </div>
      <div class="px-6 pb-6 flex gap-3 justify-end">
        <button id="rg-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
        <button id="rg-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">บันทึก</button>
      </div>
    </div>`

  document.body.appendChild(overlay)

  const leaderSel = createTeacherSelect({
    wrap: overlay.querySelector('#rg-leader-wrap'),
    teachers: sortedTeachers,
    value: group?.leader_id ?? null,
  })

  overlay.querySelector('#rg-modal-close').onclick = () => overlay.remove()
  overlay.querySelector('#rg-cancel').onclick = () => overlay.remove()

  overlay.querySelector('#rg-save').onclick = async () => {
    const name = overlay.querySelector('#rg-name').value.trim()
    if (!name) { showToast('กรุณาระบุชื่อกลุ่ม', 'error'); return }
    const newLeaderId = leaderSel.getValue()
    const oldLeaderId = group?.leader_id ?? null
    const saveBtn = overlay.querySelector('#rg-save')
    saveBtn.disabled = true; saveBtn.textContent = 'กำลังบันทึก...'
    try {
      if (isEdit) {
        await updateReligionGroup(group.id, { name, leader_id: newLeaderId })
        // ถอดบทบาทหัวหน้ากลุ่มย่อยเก่า (ถ้าเปลี่ยน)
        if (oldLeaderId && oldLeaderId !== +newLeaderId) {
          await updateTeacherPosition(oldLeaderId, null, 'religion_subgroup_head')
        }
      } else {
        await createReligionGroup({ name, leader_id: newLeaderId })
      }
      // ตั้งบทบาทหัวหน้ากลุ่มย่อยใหม่
      if (newLeaderId) {
        await updateTeacherPosition(+newLeaderId, 'religion_subgroup_head')
      }
      showToast(isEdit ? 'บันทึกแล้ว' : 'เพิ่มกลุ่มแล้ว', 'success')
      overlay.remove()
      onSave()
    } catch (e) { showToast('บันทึกไม่สำเร็จ: ' + e.message, 'error'); saveBtn.disabled = false; saveBtn.textContent = 'บันทึก' }
  }
}

// ─── View: My Religion Group (กลุ่มของฉัน — สำหรับหัวหน้ากลุ่มย่อย) ─────────
export async function renderMyReligionGroup(teacher) {
  setActiveNav('my-religion-group')
  document.getElementById('page-title').textContent = 'กลุ่มของฉัน'

  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div id="mrg-content">
      <div class="flex items-center justify-center py-16 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`)

  let groups = [], allTeachers = []
  try {
    ;[groups, allTeachers] = await Promise.all([getReligionGroups(), getTeachers()])
  } catch { showToast('โหลดข้อมูลไม่สำเร็จ', 'error'); return }

  const myGroup = groups.find(g => g.leader_id === teacher.id)
  const wrap = document.getElementById('mrg-content')
  if (!myGroup) {
    wrap.innerHTML = `<div class="text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🕌</p>
      <p class="font-medium">ยังไม่ได้รับมอบหมายกลุ่มย่อย</p>
      <p class="text-xs mt-1">ติดต่อหัวหน้ากลุ่มเพื่อกำหนดกลุ่มของคุณ</p>
    </div>`
    return
  }

  const religionTeachers = _getReligionTeachers(allTeachers)
  await _renderMyGroupMembers(myGroup, religionTeachers)
}

async function _renderMyGroupMembers(group, religionTeachers) {
  const wrap = document.getElementById('mrg-content')
  let members = []
  try {
    members = await getReligionGroupMembers(group.id)
  } catch { showToast('โหลดสมาชิกไม่สำเร็จ', 'error'); return }

  wrap.innerHTML = `
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">🕌 ${_esc(group.name)}</h3>
        <p class="text-xs text-gray-400 mt-0.5">สมาชิกในกลุ่ม ${members.length} คน</p>
      </div>
      <button id="btn-mrg-add" class="btn-primary px-4 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
        <span class="text-base">＋</span> เพิ่มสมาชิก
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${members.length ? `
        <ul class="divide-y divide-gray-50">
          ${members.map(m => { const t = m.teachers; return `
            <li class="px-5 py-3 flex items-center gap-3">
              ${t?.image_url
                ? `<img src="${t.image_url}" class="w-8 h-8 rounded-full object-cover" />`
                : `<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${_esc(t?.full_name?.charAt(0) ?? '?')}</div>`}
              <div>
                <span class="font-medium text-gray-800">${_esc(t?.full_name ?? '')}</span>
                ${t?.teacher_code ? `<span class="block text-xs font-mono text-gray-400">${t.teacher_code}</span>` : ''}
              </div>
            </li>`}).join('')}
        </ul>` : `
        <div class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-3">👥</p>
          <p class="font-medium">ยังไม่มีสมาชิกในกลุ่ม</p>
          <p class="text-xs mt-1">กดปุ่ม "เพิ่มสมาชิก" เพื่อเริ่มต้น</p>
        </div>`}
    </div>`

  document.getElementById('btn-mrg-add').onclick = () =>
    _openMyGroupMembersModal(group, religionTeachers, members, async () => {
      await _renderMyGroupMembers(group, religionTeachers)
    })
}

function _openMyGroupMembersModal(group, religionTeachers, currentMembers, onSave) {
  const overlay = document.createElement('div')
  overlay.className = 'fixed inset-0 z-[9000] bg-white flex flex-col'

  overlay.innerHTML = `
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">เพิ่มสมาชิกกลุ่ม "${_esc(group.name)}"</h3>
      <button class="text-gray-400 hover:text-gray-600 text-2xl leading-none" id="mrg-modal-close">✕</button>
    </div>
    <div class="flex-1 overflow-y-auto px-5 py-4">
      <div class="max-w-2xl mx-auto">
        <div id="mrg-chips" class="mb-5"></div>
        <label class="block text-xs font-medium text-gray-600 mb-1">ค้นหาครูศาสนาเพื่อเพิ่ม (ชื่อหรือรหัสครู)</label>
        <div id="mrg-member-wrap"></div>
      </div>
    </div>
    <div class="px-5 py-4 border-t border-gray-100 flex gap-3 justify-end flex-shrink-0">
      <button id="mrg-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
      <button id="mrg-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">บันทึก</button>
    </div>`

  document.body.appendChild(overlay)

  const memberSel = createTeacherMultiSelect({
    wrap: overlay.querySelector('#mrg-member-wrap'),
    chipsWrap: overlay.querySelector('#mrg-chips'),
    teachers: religionTeachers,
    value: currentMembers.map(m => m.teacher_id),
  })

  overlay.querySelector('#mrg-modal-close').onclick = () => overlay.remove()
  overlay.querySelector('#mrg-cancel').onclick = () => overlay.remove()

  overlay.querySelector('#mrg-save').onclick = async () => {
    const ids = memberSel.getValue()
    const saveBtn = overlay.querySelector('#mrg-save')
    saveBtn.disabled = true; saveBtn.textContent = 'กำลังบันทึก...'
    try {
      await setReligionGroupMembers(group.id, ids)
      overlay.remove()
      await onSave()
      _showMemberSummaryPopup(group, religionTeachers.filter(t => ids.includes(t.id)))
    } catch (e) { showToast('บันทึกไม่สำเร็จ: ' + e.message, 'error'); saveBtn.disabled = false; saveBtn.textContent = 'บันทึก' }
  }
}

function _showMemberSummaryPopup(group, members) {
  const overlay = document.createElement('div')
  overlay.className = 'fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4'

  overlay.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
      <div class="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">✅ บันทึกสมาชิกกลุ่ม "${_esc(group.name)}" แล้ว</h3>
        <p class="text-xs text-gray-400 mt-1">รายชื่อสมาชิกทั้งหมด ${members.length} คน — กรุณาตรวจสอบอีกครั้ง</p>
      </div>
      <div class="px-6 py-4 max-h-[50vh] overflow-y-auto">
        ${members.length ? `<ul class="divide-y divide-gray-50">
          ${members.map(t => `<li class="py-2.5 flex items-center gap-3">
            ${t.image_url
              ? `<img src="${t.image_url}" class="w-8 h-8 rounded-full object-cover" />`
              : `<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">${_esc(t.full_name?.charAt(0) ?? '?')}</div>`}
            <div>
              <span class="font-medium text-gray-800">${_esc(t.full_name ?? '')}</span>
              ${t.teacher_code ? `<span class="block text-xs font-mono text-gray-400">${t.teacher_code}</span>` : ''}
            </div>
          </li>`).join('')}
        </ul>` : `<p class="text-center text-gray-400 py-8 text-sm">ไม่มีสมาชิกในกลุ่ม</p>`}
      </div>
      <div class="px-6 pb-6 flex justify-end">
        <button id="mrg-summary-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl">ตกลง</button>
      </div>
    </div>`

  document.body.appendChild(overlay)
  overlay.querySelector('#mrg-summary-close').onclick = () => overlay.remove()
}

export async function renderClassroomLeaders() {
  setActiveNav('classroom-leaders')
  document.getElementById('page-title').textContent = 'จัดการหัวหน้าและรองหัวหน้าห้อง'

  setContent(`
    <div class="flex justify-center py-12 text-gray-400">
      <div class="animate-spin text-3xl mb-2">⏳</div><p class="text-sm">กำลังโหลดข้อมูลห้องเรียน...</p>
    </div>
  `)

  let classes = [], students = []
  let activeTab = 'manage' // 'manage' | 'print'
  let selectedCategory = 'สามัญ'
  let selectedLevel = ''
  let selectedRoom = ''
  let searchQ = ''

  const extractGradeFromName = (name) => {
    if (!name) return null
    const m = name.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i)
    if (!m) return null
    return m[1].replace(/^(PR)\s*(\d+)$/i, 'PR $2').trim()
  }

  const getCategoryFromRoomName = (name) => {
    if (!name) return 'สามัญ'
    if (/^(PR|อก\.|อป\.)/i.test(name)) return 'ศาสนา'
    if (/^ปวช\./i.test(name)) return 'ปวช'
    return 'สามัญ'
  }

  const standardLevels = {
    'สามัญ': ['ม.1', 'ม.2', 'ม.3', 'ม.4', 'ม.5', 'ม.6'],
    'ศาสนา': ['PR 1', 'อก.1', 'อก.2', 'อก.3', 'อป.1', 'อป.2', 'อป.3'],
    'ปวช': ['ปวช.1', 'ปวช.2', 'ปวช.3', 'อก.ปวช.1', 'อก.ปวช.2', 'อก.ปวช.3']
  }

  const getRoomsForCategory = (cat) => {
    return classes
      .map(c => c.class_name)
      .filter(name => name && getCategoryFromRoomName(name) === cat)
      .sort((a, b) => a.localeCompare(b, 'th'))
  }

  const getLevelsForCategory = (cat) => {
    const rooms = getRoomsForCategory(cat)
    const dbLevels = [...new Set(rooms.map(r => extractGradeFromName(r)).filter(Boolean))]
    const std = standardLevels[cat] || []
    return [...new Set([...std, ...dbLevels])].sort((a, b) => a.localeCompare(b, 'th'))
  }

  const _load = async () => {
    const [rawClasses, rawStudents, rawLeaders] = await Promise.all([
      getClasses(),
      getStudents(),
      getClassroomLeaders()
    ])
    students = rawStudents
    
    // Deduplicate class names from rawClasses to identify distinct rooms
    const uniqueClassNames = [...new Set(rawClasses.map(c => c.class_name).filter(Boolean))]
    
    // Build classroom leaders mapping (1:1 with unique room names)
    classes = uniqueClassNames.map(className => {
      const leader = rawLeaders.find(l => l.class_name === className)
      return leader || {
        class_name: className,
        head_student_id: null,
        vice_head_student_id: null,
        head_cert_url: null,
        vice_head_cert_url: null,
        show_cert: true,
        notes: null
      }
    })
  }

  const _studentById = (id) => students.find(s => s.id === id)

  // ─── Print logic ───────────────────────────────────────────────────────────
  const _executePrint = () => {
    let styleEl = document.getElementById('hc-print-roster-styles')
    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = 'hc-print-roster-styles'
      document.head.appendChild(styleEl)
    }
    styleEl.textContent = `
      @media screen {
        #hc-print-roster-area {
          position: fixed !important;
          inset: 0 !important;
          z-index: 9000 !important;
          background-color: rgba(15, 23, 42, 0.85) !important;
          backdrop-filter: blur(4px) !important;
          overflow-y: auto !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          padding: 32px 16px !important;
        }
        .preview-sheet-wrap {
          background: white !important;
          color: black !important;
          width: 100% !important;
          max-width: 800px !important;
          padding: 40px !important;
          border-radius: 16px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
          margin-top: 60px !important;
          font-family: Sarabun, sans-serif !important;
        }
        .preview-controls {
          position: fixed !important;
          top: 16px !important;
          display: flex !important;
          gap: 12px !important;
          z-index: 9001 !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(8px) !important;
          padding: 8px 16px !important;
          border-radius: 16px !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
        }
        .preview-btn-print {
          background: #4f46e5 !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 14px !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .preview-btn-print:hover {
          background: #4338ca !important;
        }
        .preview-btn-close {
          background: #ef4444 !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 14px !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          transition: all 0.2s !important;
          cursor: pointer !important;
        }
        .preview-btn-close:hover {
          background: #dc2626 !important;
        }
      }
      @media print {
        body > * { display: none !important; }
        #hc-print-roster-area {
          display: block !important;
          position: absolute !important;
          left: 0 !important; top: 0 !important;
          width: 100% !important;
          padding: 0 !important; margin: 0 !important;
          background: white !important;
          color: black !important;
          font-family: Sarabun, sans-serif !important;
        }
        #hc-print-roster-area * { visibility: visible !important; }
        .preview-controls { display: none !important; }
        .preview-sheet-wrap {
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          max-width: 100% !important;
        }
      }
      .roster-page-block {
        display: block !important;
        page-break-before: always !important;
        break-before: page !important;
        page-break-inside: avoid;
      }
      .roster-page-block:first-child {
        page-break-before: auto !important;
        break-before: auto !important;
      }
      .roster-title {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 15px;
      }
      .roster-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
      }
      .roster-table th, .roster-table td {
        border: 1px solid #000000 !important;
        padding: 8px 10px !important;
        vertical-align: middle;
      }
      .roster-table th {
        background-color: #f3f4f6 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        font-size: 12px;
        font-weight: bold;
      }
      .roster-table td {
        font-size: 12px;
      }
      .stu-info-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .stu-img {
        width: 40px;
        height: 52px;
        border-radius: 6px;
        border: 1px solid #ccc;
        object-fit: cover;
      }
      .stu-img-placeholder {
        width: 40px;
        height: 52px;
        border-radius: 6px;
        border: 1px solid #ccc;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #9ca3af;
      }
    `

    const printArea = document.createElement('div')
    printArea.id = 'hc-print-roster-area'
    document.body.appendChild(printArea)

    // filter classes to print
    const targets = classes.filter(c => {
      const cat = getCategoryFromRoomName(c.class_name)
      if (cat !== selectedCategory) return false
      if (selectedLevel) {
        const lvl = extractGradeFromName(c.class_name)
        if (lvl !== selectedLevel) return false
      }
      if (selectedRoom && c.class_name !== selectedRoom) return false
      return true
    }).sort((a, b) => a.class_name.localeCompare(b.class_name, 'th'))

    let titleText = `ใบรายชื่อหัวหน้าและรองหัวหน้าห้องเรียน`
    if (selectedLevel) titleText += ` ระดับชั้น ${selectedLevel}`
    if (selectedRoom) titleText += ` ห้อง ${selectedRoom}`

    const rowsHtml = targets.map((c, idx) => {
      const head = _studentById(c.head_student_id)
      const vice = _studentById(c.vice_head_student_id)

      const headImg = head?.image_url
        ? `<img src="${head.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`
        : `<div class="stu-img-placeholder">👤</div>`

      const viceImg = vice?.image_url
        ? `<img src="${vice.image_url}" class="stu-img" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="stu-img-placeholder" style="display:none;">👤</div>`
        : `<div class="stu-img-placeholder">👤</div>`

      const headName = head ? `<b>${_esc(head.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${head.student_code}</span>` : '<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>'
      const viceName = vice ? `<b>${_esc(vice.full_name)}</b><br><span style="font-size:10px;color:#6b7280;">รหัส: ${vice.student_code}</span>` : '<span style="color:#9ca3af;">— ยังไม่ระบุ —</span>'

      return `
        <tr>
          <td style="text-align: center; width: 45px;">${idx + 1}</td>
          <td style="font-weight: bold; width: 90px; text-align: center;">ห้อง ${_esc(c.class_name)}</td>
          <td>
            <div class="stu-info-wrap">
              ${headImg}
              <div>${headName}</div>
            </div>
          </td>
          <td>
            <div class="stu-info-wrap">
              ${viceImg}
              <div>${viceName}</div>
            </div>
          </td>
          <td style="font-size: 11px; color: #374151;">${_esc(c.notes ?? '')}</td>
        </tr>
      `
    }).join('')

    printArea.innerHTML = `
      <div class="preview-controls">
        <button class="preview-btn-print" id="pr-btn-confirm-print">🖨️ สั่งพิมพ์ / บันทึก PDF</button>
        <button class="preview-btn-close" id="pr-btn-close-preview">✕ ปิดหน้าต่าง</button>
      </div>
      <div class="preview-sheet-wrap">
        <div class="roster-page-block">
          <div class="roster-title">${titleText}</div>
          <table class="roster-table">
            <thead>
              <tr>
                <th style="width: 45px;">ลำดับ</th>
                <th style="width: 90px;">ห้องเรียน</th>
                <th>หัวหน้าห้อง</th>
                <th>รองหัวหน้าห้อง</th>
                <th style="width: 150px;">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml || `<tr><td colspan="5" style="text-align:center;padding:20px;color:#9ca3af;">ไม่พบข้อมูลห้องเรียน</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    `

    printArea.querySelector('#pr-btn-confirm-print').onclick = () => {
      window.print()
    }

    printArea.querySelector('#pr-btn-close-preview').onclick = () => {
      printArea.remove()
    }
  }

  // ─── Rendering parts ───────────────────────────────────────────────────────
  const _renderHeaderTabs = () => {
    return `
      <div class="flex border-b border-gray-200">
        <button id="tab-manage" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${
          activeTab === 'manage' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
        }">
          👑 จัดการหัวหน้า/รองหัวหน้า
        </button>
        <button id="tab-print" class="px-5 py-3 text-sm font-semibold border-b-2 transition-all ${
          activeTab === 'print' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
        }">
          🖨️ ตารางภาพรวมและสั่งพิมพ์
        </button>
      </div>
    `
  }

  const _renderCards = () => {
    const q = searchQ.trim().toLowerCase()
    const filtered = classes.filter(c => {
      const cat = getCategoryFromRoomName(c.class_name)
      if (cat !== selectedCategory) return false
      if (q && !c.class_name.toLowerCase().includes(q)) return false
      return true
    }).sort((a, b) => a.class_name.localeCompare(b.class_name, 'th'))

    if (filtered.length === 0) {
      return `<div class="col-span-full text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-2xl">ไม่พบห้องเรียนที่ตรงกับตัวกรอง/ค้นหา</div>`
    }

    return filtered.map(c => {
      const head = _studentById(c.head_student_id)
      const vice = _studentById(c.vice_head_student_id)

      const headImg = head?.image_url
        ? `<img src="${head.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`
        : `<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>`

      const viceImg = vice?.image_url
        ? `<img src="${vice.image_url}" class="w-10 h-14 object-cover rounded border border-gray-200 shadow-sm student-avatar-premium" />`
        : `<div class="w-10 h-14 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400 text-lg student-avatar-premium-placeholder">👤</div>`

      return `
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow transition p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-gray-50 pb-2 mb-3">
              <span class="text-base font-bold text-gray-800">ห้อง ${_esc(c.class_name)}</span>
              <span class="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full uppercase">${selectedCategory}</span>
            </div>
            
            <div class="space-y-3">
              <!-- Head -->
              <div class="flex items-center gap-3">
                ${headImg}
                <div class="min-w-0">
                  <span class="text-[10px] text-amber-600 font-bold block">👑 หัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${head ? _esc(head.full_name) : '— ยังไม่ระบุ —'}</span>
                  ${head ? `<span class="text-xs text-gray-400 font-mono">รหัส: ${head.student_code}</span>` : ''}
                </div>
              </div>
              
              <!-- Vice -->
              <div class="flex items-center gap-3">
                ${viceImg}
                <div class="min-w-0">
                  <span class="text-[10px] text-slate-500 font-bold block">🥈 รองหัวหน้าห้อง</span>
                  <span class="text-sm font-semibold text-gray-800 truncate block">${vice ? _esc(vice.full_name) : '— ยังไม่ระบุ —'}</span>
                  ${vice ? `<span class="text-xs text-gray-400 font-mono">รหัส: ${vice.student_code}</span>` : ''}
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
            <div>
              <p>เกียรติบัตรหัวหน้า: ${c.head_cert_url ? '🟢 มีแล้ว' : '🔴 ไม่มี'}</p>
              <p>เกียรติบัตรรอง: ${c.vice_head_cert_url ? '🟢 มีแล้ว' : '🔴 ไม่มี'}</p>
            </div>
            <button class="btn-edit-leaders px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center gap-1" data-room="${_esc(c.class_name)}">
              ✏️ แก้ไข
            </button>
          </div>
        </div>
      `
    }).join('')
  }

  const _renderTable = () => {
    const targets = classes.filter(c => {
      const cat = getCategoryFromRoomName(c.class_name)
      if (cat !== selectedCategory) return false
      if (selectedLevel) {
        const lvl = extractGradeFromName(c.class_name)
        if (lvl !== selectedLevel) return false
      }
      if (selectedRoom && c.class_name !== selectedRoom) return false
      return true
    }).sort((a, b) => a.class_name.localeCompare(b.class_name, 'th'))

    if (targets.length === 0) {
      return `<tr><td colspan="5" class="text-center py-10 text-gray-400 text-sm">ไม่พบข้อมูลห้องเรียน</td></tr>`
    }

    return targets.map((c, idx) => {
      const head = _studentById(c.head_student_id)
      const vice = _studentById(c.vice_head_student_id)

      const headImg = head?.image_url
        ? `<img src="${head.image_url}" class="student-avatar-premium" />`
        : `<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>`

      const viceImg = vice?.image_url
        ? `<img src="${vice.image_url}" class="student-avatar-premium" />`
        : `<div class="student-avatar-premium-placeholder text-gray-400 text-xs">👤</div>`

      return `
        <tr class="hover:bg-gray-50/50 transition border-b border-gray-100 last:border-0">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${idx + 1}</td>
          <td class="px-4 py-3 font-bold text-gray-800 text-center">ห้อง ${_esc(c.class_name)}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${headImg}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${head ? _esc(head.full_name) : '— ยังไม่ระบุ —'}</p>
                ${head ? `<p class="text-[10px] text-gray-400 font-mono">รหัส ${head.student_code}</p>` : ''}
              </div>
            </div>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-2">
              ${viceImg}
              <div>
                <p class="font-semibold text-gray-800 text-xs">${vice ? _esc(vice.full_name) : '— ยังไม่ระบุ —'}</p>
                ${vice ? `<p class="text-[10px] text-gray-400 font-mono">รหัส ${vice.student_code}</p>` : ''}
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-gray-600 text-xs max-w-[180px] truncate">
            ${_esc(c.notes ?? '')}
          </td>
        </tr>
      `
    }).join('')
  }

  const _renderMain = () => {
    const totalCount = classes.filter(c => {
      const cat = getCategoryFromRoomName(c.class_name)
      if (cat !== selectedCategory) return false
      if (selectedLevel) {
        const lvl = extractGradeFromName(c.class_name)
        if (lvl !== selectedLevel) return false
      }
      if (selectedRoom && c.class_name !== selectedRoom) return false
      return true
    }).length

    if (activeTab === 'manage') {
      setContent(`
        <div class="space-y-5 animate-fade">
          ${_renderHeaderTabs()}

          <!-- Filter & Search Panel -->
          <div class="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap gap-3 items-center justify-between">
            <div class="flex items-center gap-2 flex-wrap">
              <select id="hc-filter-category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[120px]">
                <option value="สามัญ" ${selectedCategory === 'สามัญ' ? 'selected' : ''}>สามัญ</option>
                <option value="ศาสนา" ${selectedCategory === 'ศาสนา' ? 'selected' : ''}>ศาสนา</option>
                <option value="ปวช" ${selectedCategory === 'ปวช' ? 'selected' : ''}>ปวช</option>
              </select>
              <input id="hc-search-classes" type="text" placeholder="ค้นหาห้องเรียน..." value="${_esc(searchQ)}"
                class="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-w-[180px]" />
            </div>
            <span class="text-xs text-gray-400">แสดงทั้งหมด <b class="text-gray-700 font-bold">${totalCount}</b> ห้อง</span>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="hc-cards-grid">
            ${_renderCards()}
          </div>
        </div>
      `)
    } else {
      setContent(`
        <div class="space-y-5 animate-fade">
          ${_renderHeaderTabs()}

          <!-- Printing filters (Aligned with QR screen) -->
          <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">1. ระบบหลักสูตร</label>
                <select id="pr-filter-category" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <option value="สามัญ" ${selectedCategory === 'สามัญ' ? 'selected' : ''}>สามัญ</option>
                  <option value="ศาสนา" ${selectedCategory === 'ศาสนา' ? 'selected' : ''}>ศาสนา</option>
                  <option value="ปวช" ${selectedCategory === 'ปวช' ? 'selected' : ''}>ปวช</option>
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">2. ระดับชั้น</label>
                <select id="pr-filter-level" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <!-- เติมแบบไดนามิก -->
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">3. ห้องเรียน</label>
                <select id="pr-filter-class" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <option value="">-- ทั้งระดับชั้น --</option>
                </select>
              </div>
            </div>
            
            <div class="pt-2 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2">
              <span class="text-xs text-gray-400">พบข้อมูลหัวหน้า/รองหัวหน้าทั้งหมด <b class="text-gray-700">${totalCount}</b> ห้อง</span>
              <div class="flex gap-2">
                <button id="btn-cert-settings"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200 shadow-sm">
                  ⚙️ ตั้งค่าแสดงเกียรติบัตร
                </button>
                <button id="btn-print-leaders-roster"
                  class="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  ${totalCount === 0 ? 'disabled' : ''}>
                  🖨️ พิมพ์ใบรายชื่อ (${totalCount})
                </button>
              </div>
            </div>
          </div>

          <!-- Summary Table -->
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead class="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase">
                  <tr>
                    <th class="px-4 py-3 text-center w-12">ลำดับ</th>
                    <th class="px-4 py-3 text-center w-24">ห้องเรียน</th>
                    <th class="px-4 py-3">หัวหน้าห้อง</th>
                    <th class="px-4 py-3">รองหัวหน้าห้อง</th>
                    <th class="px-4 py-3 w-40">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody id="pr-table-body" class="divide-y divide-gray-100">
                  ${_renderTable()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `)

      _syncPrintLevels()
    }

    _bindMainEvents()
  }

  const _syncPrintLevels = () => {
    const levelSelect = document.getElementById('pr-filter-level')
    if (!levelSelect) return
    const levels = getLevelsForCategory(selectedCategory)
    levelSelect.innerHTML = `
      <option value="">-- ทุกระดับชั้น --</option>
      ${levels.map(l => `<option value="${l}" ${l === selectedLevel ? 'selected' : ''}>${l}</option>`).join('')}
    `
    _syncPrintClasses()
  }

  const _syncPrintClasses = () => {
    const classSelect = document.getElementById('pr-filter-class')
    if (!classSelect) return
    const rooms = getRoomsForCategory(selectedCategory)
    const filtered = rooms.filter(r => {
      if (!selectedLevel) return true
      return extractGradeFromName(r) === selectedLevel
    })

    classSelect.innerHTML = `
      <option value="">-- ทั้งระดับชั้น (${filtered.length} ห้อง) --</option>
      ${filtered.map(r => `<option value="${r}" ${r === selectedRoom ? 'selected' : ''}>ห้อง ${r}</option>`).join('')}
    `
  }

  const _bindMainEvents = () => {
    document.getElementById('tab-manage')?.addEventListener('click', () => {
      activeTab = 'manage'
      _renderMain()
    })
    document.getElementById('tab-print')?.addEventListener('click', () => {
      activeTab = 'print'
      _renderMain()
    })

    // Management Events
    document.getElementById('hc-filter-category')?.addEventListener('change', (e) => {
      selectedCategory = e.target.value
      _renderMain()
    })
    document.getElementById('hc-search-classes')?.addEventListener('input', (e) => {
      searchQ = e.target.value
      const grid = document.getElementById('hc-cards-grid')
      if (grid) grid.innerHTML = _renderCards()
      _bindEditButtons()
    })
    _bindEditButtons()

    // Printing Events
    document.getElementById('pr-filter-category')?.addEventListener('change', (e) => {
      selectedCategory = e.target.value
      selectedLevel = ''
      selectedRoom = ''
      _syncPrintLevels()
      _refreshPrintTable()
    })
    document.getElementById('pr-filter-level')?.addEventListener('change', (e) => {
      selectedLevel = e.target.value
      selectedRoom = ''
      _syncPrintClasses()
      _refreshPrintTable()
    })
    document.getElementById('pr-filter-class')?.addEventListener('change', (e) => {
      selectedRoom = e.target.value
      _refreshPrintTable()
    })
    document.getElementById('btn-print-leaders-roster')?.addEventListener('click', _executePrint)
    document.getElementById('btn-cert-settings')?.addEventListener('click', _openCertSettingsModal)
  }

  const _refreshPrintTable = () => {
    const body = document.getElementById('pr-table-body')
    if (body) body.innerHTML = _renderTable()
    
    // update print count on button
    const totalCount = classes.filter(c => {
      const cat = getCategoryFromRoomName(c.class_name)
      if (cat !== selectedCategory) return false
      if (selectedLevel) {
        const lvl = extractGradeFromName(c.class_name)
        if (lvl !== selectedLevel) return false
      }
      if (selectedRoom && c.class_name !== selectedRoom) return false
      return true
    }).length
    
    const printBtn = document.getElementById('btn-print-leaders-roster')
    if (printBtn) {
      printBtn.disabled = totalCount === 0
      printBtn.textContent = `🖨️ พิมพ์ใบรายชื่อ (${totalCount})`
    }
  }

  const _bindEditButtons = () => {
    document.querySelectorAll('.btn-edit-leaders').forEach(btn => {
      btn.addEventListener('click', () => {
        const roomName = btn.dataset.room
        const cls = classes.find(c => c.class_name === roomName)
        if (cls) _openEditModal(cls)
      })
    })
  }

  const _openCertSettingsModal = () => {
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade'
    
    const isAnyEnabled = classes.some(c => c.show_cert)

    modal.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">⚙️ ตั้งค่าการแสดงผลเกียรติบัตร</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">เปิด-ปิดการแสดงบนหน้าพอร์ทัลของนักเรียน</p>
          </div>
          <button id="csm-modal-close" class="text-gray-400 hover:text-gray-600 text-xl font-bold p-1">✕</button>
        </div>
        
        <!-- Toggle Content -->
        <div class="px-6 py-8 flex flex-col items-center justify-center gap-4">
          <div class="text-center">
            <span class="block font-bold text-gray-800 text-base" id="csm-status-text">...</span>
            <span class="block text-xs text-gray-400 mt-1">สวิตช์ควบคุมการแสดงเกียรติบัตรสำหรับทุกห้องเรียนทั้งโรงเรียน</span>
          </div>
          <label class="relative inline-flex items-center cursor-pointer scale-125 my-2">
            <input type="checkbox" id="csm-global-toggle" class="sr-only peer" ${isAnyEnabled ? 'checked' : ''}>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex justify-end shrink-0">
          <button id="csm-btn-close" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">เสร็จสิ้น</button>
        </div>
      </div>
    `
    
    document.body.appendChild(modal)

    const toggleInput = modal.querySelector('#csm-global-toggle')
    const statusText = modal.querySelector('#csm-status-text')

    const updateStatusText = (checked) => {
      statusText.textContent = checked ? '🟢 แสดงเกียรติบัตร (ทั้งโรงเรียน)' : '🔴 ซ่อนเกียรติบัตร (ทั้งโรงเรียน)'
    }

    updateStatusText(isAnyEnabled)

    toggleInput.addEventListener('change', async () => {
      const showCert = toggleInput.checked
      toggleInput.disabled = true
      statusText.textContent = 'กำลังบันทึก...'
      try {
        await updateAllClassroomCertsToggle(showCert)
        classes.forEach(c => {
          c.show_cert = showCert
        })
        updateStatusText(showCert)
        showToast(showCert ? 'เปิดแสดงเกียรติบัตรทั้งโรงเรียนแล้ว' : 'ปิดการแสดงเกียรติบัตรทั้งโรงเรียนแล้ว', 'success')
      } catch (err) {
        showToast('บันทึกผิดพลาด: ' + err.message, 'error')
        toggleInput.checked = !showCert
        updateStatusText(!showCert)
      } finally {
        toggleInput.disabled = false
      }
    })

    const _close = () => modal.remove()
    modal.querySelector('#csm-modal-close').onclick = _close
    modal.querySelector('#csm-btn-close').onclick = _close
  }

  // ─── Modal Edit Function ──────────────────────────────────────────────────
  const _openEditModal = (cls) => {
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[8000] flex items-center justify-center bg-black/60 p-4 animate-fade'
    
    let head = _studentById(cls.head_student_id)
    let vice = _studentById(cls.vice_head_student_id)

    modal.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-6 py-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขหัวหน้าและรองหัวหน้าห้อง</h3>
            <p class="text-xs text-indigo-600 font-semibold mt-0.5">ห้องเรียน ${cls.class_name}</p>
          </div>
          <button id="ld-modal-close" class="text-gray-400 hover:text-gray-600 text-xl font-bold p-1">✕</button>
        </div>
        
        <!-- Form Body -->
        <div class="px-6 py-5 overflow-y-auto space-y-6 flex-1 text-sm">
          
          <!-- SECTION 1: Head Student -->
          <div class="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 space-y-3">
            <h4 class="font-bold text-gray-800 text-xs uppercase tracking-wider text-amber-600 flex items-center gap-1">👑 1. หัวหน้าห้อง (Head Student)</h4>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">รหัสนักเรียน 5 หลัก</label>
              <input type="text" id="ld-head-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${head?.student_code ?? ''}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            
            <!-- Head Student Preview Card -->
            <div id="ld-head-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${head ? `
                ${head.image_url ? `<img src="${head.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />` : `<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>`}
                <div>
                  <p class="font-bold text-gray-800">${_esc(head.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${head.student_code} · ห้อง ${head.main_room || '—'}</p>
                </div>
              ` : `<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>`}
            </div>
            
            <!-- Head Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-head-cert-in" placeholder="https://..." value="${cls.head_cert_url ?? ''}"
                  class="flex-1 text-xs border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <label class="px-3 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-semibold text-xs hover:bg-indigo-100 transition cursor-pointer flex items-center shrink-0">
                  📁 อัปโหลด
                  <input type="file" id="ld-head-cert-file" class="hidden" accept="image/*,application/pdf" />
                </label>
              </div>
            </div>
          </div>
          
          <!-- SECTION 2: Vice Head Student -->
          <div class="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 space-y-3">
            <h4 class="font-bold text-gray-800 text-xs uppercase tracking-wider text-slate-500 flex items-center gap-1">🥈 2. รองหัวหน้าห้อง (Vice Head Student)</h4>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">รหัสนักเรียน 5 หลัก</label>
              <input type="text" id="ld-vice-code-in" placeholder="กรอกรหัส 5 หลักเพื่อค้นหา..." maxlength="5" value="${vice?.student_code ?? ''}"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            
            <!-- Vice Student Preview Card -->
            <div id="ld-vice-card" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 min-h-[64px]">
              ${vice ? `
                ${vice.image_url ? `<img src="${vice.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />` : `<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>`}
                <div>
                  <p class="font-bold text-gray-800">${_esc(vice.full_name)}</p>
                  <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${vice.student_code} · ห้อง ${vice.main_room || '—'}</p>
                </div>
              ` : `<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>`}
            </div>
            
            <!-- Vice Certificate -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-gray-500">ลิงก์เกียรติบัตร (รูปภาพ หรือ PDF)</label>
              <div class="flex gap-2">
                <input type="text" id="ld-vice-cert-in" placeholder="https://..." value="${cls.vice_head_cert_url ?? ''}"
                  class="flex-1 text-xs border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <label class="px-3 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-semibold text-xs hover:bg-indigo-100 transition cursor-pointer flex items-center shrink-0">
                  📁 อัปโหลด
                  <input type="file" id="ld-vice-cert-file" class="hidden" accept="image/*,application/pdf" />
                </label>
              </div>
            </div>
          </div>
          
          <!-- SECTION 3: Notes -->
          <div class="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 space-y-3">
            <h4 class="font-bold text-gray-800 text-xs uppercase tracking-wider text-teal-600 flex items-center gap-1">📝 3. หมายเหตุ (Remarks)</h4>
            <div>
              <textarea id="ld-notes-in" placeholder="ระบุหมายเหตุสำหรับห้องเรียนนี้..." rows="2"
                class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">${cls.notes ?? ''}</textarea>
            </div>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div class="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end shrink-0">
          <button id="ld-btn-cancel" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">ยกเลิก</button>
          <button id="ld-btn-save" class="btn-primary px-5 py-2 text-sm text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">บันทึกข้อมูล</button>
        </div>
      </div>
    `

    document.body.appendChild(modal)

    let tempHeadId = cls.head_student_id
    let tempViceId = cls.vice_head_student_id

    const _setHeadCardLoading = () => {
      document.getElementById('ld-head-card').innerHTML = `<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>`
    }
    const _setViceCardLoading = () => {
      document.getElementById('ld-vice-card').innerHTML = `<div class="animate-spin text-lg text-indigo-500">⏳</div> <span class="text-xs text-gray-400">กำลังตรวจสอบรหัส...</span>`
    }

    const _setHeadCardContent = (s) => {
      const card = document.getElementById('ld-head-card')
      if (s) {
        tempHeadId = s.id
        const img = s.image_url ? `<img src="${s.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />` : `<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>`
        card.innerHTML = `
          ${img}
          <div>
            <p class="font-bold text-gray-800">${_esc(s.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${s.student_code} · ห้อง ${s.main_room || '—'}</p>
          </div>
        `
      } else {
        tempHeadId = null
        card.innerHTML = `<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>`
      }
    }

    const _setViceCardContent = (s) => {
      const card = document.getElementById('ld-vice-card')
      if (s) {
        tempViceId = s.id
        const img = s.image_url ? `<img src="${s.image_url}" class="w-10 h-14 object-cover rounded student-avatar-premium" />` : `<div class="w-10 h-14 bg-gray-50 rounded flex items-center justify-center text-gray-400 student-avatar-premium-placeholder">👤</div>`
        card.innerHTML = `
          ${img}
          <div>
            <p class="font-bold text-gray-800">${_esc(s.full_name)}</p>
            <p class="text-xs text-gray-400 font-mono mt-0.5">รหัส ${s.student_code} · ห้อง ${s.main_room || '—'}</p>
          </div>
        `
      } else {
        tempViceId = null
        card.innerHTML = `<span class="text-xs text-amber-500 font-semibold">⚠️ ไม่พบข้อมูลนักเรียน หรือป้อนรหัสไม่ถูกต้อง</span>`
      }
    }

    // Input code events
    document.getElementById('ld-head-code-in').addEventListener('input', async (e) => {
      const code = e.target.value.trim()
      if (code.length === 5) {
        _setHeadCardLoading()
        const stu = await getStudentByCode(code).catch(() => null)
        _setHeadCardContent(stu)
      } else if (code.length === 0) {
        tempHeadId = null
        document.getElementById('ld-head-card').innerHTML = `<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>`
      }
    })

    document.getElementById('ld-vice-code-in').addEventListener('input', async (e) => {
      const code = e.target.value.trim()
      if (code.length === 5) {
        _setViceCardLoading()
        const stu = await getStudentByCode(code).catch(() => null)
        _setViceCardContent(stu)
      } else if (code.length === 0) {
        tempViceId = null
        document.getElementById('ld-vice-card').innerHTML = `<span class="text-xs text-gray-400 italic">ป้อนรหัส 5 หลักเพื่อตรวจสอบนักเรียน</span>`
      }
    })

    // Upload events
    const _handleUpload = async (fileInput, textUrlInput) => {
      const file = fileInput.files[0]
      if (!file) return
      
      textUrlInput.disabled = true
      textUrlInput.value = 'กำลังอัปโหลดไฟล์...'
      
      try {
        const ext = file.name.split('.').pop()
        const path = `certificates/${cls.id}/${fileInput.id}-${Date.now()}.${ext}`
        
        let blob = file
        // Compress if image
        if (file.type.startsWith('image/')) {
          blob = await compressImage(file, { maxWidth: 1600, quality: 0.88 })
        }
        
        const { error } = await supabase.storage
          .from('system-assets')
          .upload(path, blob, { upsert: true, contentType: file.type })
        if (error) throw error
        
        const { data } = supabase.storage.from('system-assets').getPublicUrl(path)
        textUrlInput.value = data.publicUrl
      } catch (err) {
        showToast('อัปโหลดล้มเหลว: ' + err.message, 'error')
        textUrlInput.value = ''
      } finally {
        textUrlInput.disabled = false
      }
    }

    document.getElementById('ld-head-cert-file').addEventListener('change', () => {
      _handleUpload(document.getElementById('ld-head-cert-file'), document.getElementById('ld-head-cert-in'))
    })
    document.getElementById('ld-vice-cert-file').addEventListener('change', () => {
      _handleUpload(document.getElementById('ld-vice-cert-file'), document.getElementById('ld-vice-cert-in'))
    })

    // Cancel / Close
    const _close = () => modal.remove()
    document.getElementById('ld-modal-close').onclick = _close
    document.getElementById('ld-btn-cancel').onclick = _close

    // Save
    document.getElementById('ld-btn-save').onclick = async () => {
      const btn = document.getElementById('ld-btn-save')
      btn.disabled = true
      btn.textContent = 'กำลังบันทึก...'
      
      const headCert = document.getElementById('ld-head-cert-in').value.trim()
      const viceCert = document.getElementById('ld-vice-cert-in').value.trim()
      const notes = document.getElementById('ld-notes-in').value.trim()

      try {
        await updateClassroomLeaders(cls.class_name, tempHeadId, tempViceId, headCert, viceCert, notes)
        
        // update local state
        cls.head_student_id = tempHeadId
        cls.vice_head_student_id = tempViceId
        cls.head_cert_url = headCert
        cls.vice_head_cert_url = viceCert
        cls.notes = notes

        showToast('บันทึกข้อมูลเรียบร้อยแล้ว', 'success')
        _close()
        _renderMain()
      } catch (err) {
        showToast('เกิดข้อผิดพลาด: ' + err.message, 'error')
        btn.disabled = false
        btn.textContent = 'บันทึกข้อมูล'
      }
    }
  }

  // Load and render
  await _load()
  _renderMain()
}
