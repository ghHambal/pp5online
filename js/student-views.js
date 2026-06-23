import {
  getMyEnrolledClasses, getMyScores, getMyAttendance,
  getMyExamRequests, submitExamRequest, cancelExamRequest,
  getMissedExamCount,
  getTeacherFullSchedule, getSchoolPeriods, getScoreColumnsForClass,
  getMyLifeSkillScores, getMyReadingScores, getMyPrayerRecords,
  getStudentDailySchedule, getStudentAllAnnouncements, getStudentGPA,
  getClassSchedulesByIds, getStudentWeeklySchedule,
  getScannerRoster, saveScannedPrayerRecords,
} from './student-api.js'
import { getThemeConfig } from './theme.js'
import { getSystemConfig } from './api.js'
import { APP_VERSION } from './version.js'
import QRCode from 'qrcode'

const _roomDisplay = (name) => (name ?? '').replace(/\/\d+/, '').trim()

// ─── Helpers ──────────────────────────────────────────────────────────────────
function setContent(html) {
  const container = document.getElementById('stu-content') || document.getElementById('main-content')
  if (container) {
    container.innerHTML = `<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${html}</div>`
  }
}

function showToast(msg, type = 'info') {
  const colors = { success:'bg-emerald-500', error:'bg-red-500', warning:'bg-amber-500', info:'bg-indigo-500' }
  const t = document.createElement('div')
  t.className = `fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${colors[type]??colors.info} transition-all`
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.remove(), 2800)
}

const ATT_LABELS = { present:'ม', absent:'ข', late:'ส', sick:'ป', excused:'ก' }
const ATT_COLORS = {
  present:'bg-emerald-50 text-emerald-700',
  absent:'bg-red-50 text-red-600',
  late:'bg-amber-50 text-amber-700',
  sick:'bg-blue-50 text-blue-600',
  excused:'bg-purple-50 text-purple-600',
}
const STATUS_BADGE = {
  pending:  { label:'รอดำเนินการ', cls:'bg-amber-50 text-amber-700 border-amber-200' },
  approved: { label:'อนุมัติแล้ว',  cls:'bg-emerald-50 text-emerald-700 border-emerald-200' },
  rejected: { label:'ปฏิเสธ',       cls:'bg-red-50 text-red-600 border-red-200' },
}
const DAY_TH = ['อา','จ','อ','พ','พฤ','ศ','ส']
const PRAYER_SCORE = {
  pray: { label: '/', score: 2, cls: 'bg-emerald-50 text-emerald-700 border-emerald-100', title: 'ละหมาด' },
  absent: { label: 'X', score: 0, cls: 'bg-red-50 text-red-600 border-red-100', title: 'ขาดละหมาด' },
  usor: { label: 'U', score: 1, cls: 'bg-purple-50 text-purple-600 border-purple-100', title: 'อูโซร' },
  followed: { label: '-', score: 1, cls: 'bg-blue-50 text-blue-600 border-blue-100', title: 'ติดตามแล้ว' },
  avoid: { label: 'N', score: -1, cls: 'bg-orange-50 text-orange-600 border-orange-100', title: 'หลีกเลี่ยง' },
}

const READING_EVAL_GRADES = [
  { label: 'ดีเยี่ยม', min: 80, cls: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
  { label: 'ดี', min: 65, cls: 'text-blue-700 bg-blue-50 border-blue-100' },
  { label: 'พอใช้', min: 50, cls: 'text-yellow-700 bg-yellow-50 border-yellow-100' },
  { label: 'ปรับปรุง', min: 0, cls: 'text-red-600 bg-red-50 border-red-100' },
]

function _hexToRgb(hex) {
  const safe = /^#[0-9a-f]{6}$/i.test(String(hex ?? '')) ? hex : '#059669'
  const h = safe.slice(1)
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  }
}

function _rgbToHex({ r, g, b }) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('')
}

function _mixHex(hex, target, amount) {
  const a = _hexToRgb(hex)
  const b = _hexToRgb(target)
  return _rgbToHex({
    r: a.r + (b.r - a.r) * amount,
    g: a.g + (b.g - a.g) * amount,
    b: a.b + (b.b - a.b) * amount,
  })
}

function _fmtDate(d) {
  if (!d) return '—'
  const dt = new Date(d)
  return `${dt.getDate()}/${dt.getMonth()+1}/${dt.getFullYear()+543}`
}

function _daysUntilLabel(value) {
  if (!value) return ''
  const target = new Date(value)
  const today = new Date()
  target.setHours(0,0,0,0)
  today.setHours(0,0,0,0)
  const diff = Math.round((target - today) / 86400000)
  if (diff > 1) return `อีก ${diff} วัน`
  if (diff === 1) return 'พรุ่งนี้'
  if (diff === 0) return 'วันนี้'
  if (diff === -1) return 'เมื่อวาน'
  return `ผ่านมาแล้ว ${Math.abs(diff)} วัน`
}

function _gradeColor(pct) {
  if (pct >= 80) return 'text-emerald-700'
  if (pct >= 65) return 'text-blue-600'
  if (pct >= 50) return 'text-amber-600'
  return 'text-red-500'
}

// ─── Subject color helper ──────────────────────────────────────────────────────
function _subjectColorCls(cls) {
  const sg  = cls.master_subjects?.subject_group ?? ''
  const sk  = cls.skill_group ?? ''
  const cat = cls.master_subjects?.teachers?.category ?? ''
  if (cat === 'ศาสนา' || sg === 'AGM' || sg === 'AGMVOC')
    return { bg:'bg-amber-50', border:'border-amber-200', text:'text-amber-800', tag:'bg-amber-100 text-amber-700', accent:'border-l-amber-400' }
  if (sg === 'ACDMVOC' || sk === 'สามัญปวช')
    return { bg:'bg-purple-50', border:'border-purple-200', text:'text-purple-800', tag:'bg-purple-100 text-purple-700', accent:'border-l-purple-400' }
  if (sk === 'ภาษา')
    return { bg:'bg-blue-50', border:'border-blue-200', text:'text-blue-800', tag:'bg-blue-100 text-blue-700', accent:'border-l-blue-400' }
  if (sk === 'ชีวิต')
    return { bg:'bg-emerald-50', border:'border-emerald-200', text:'text-emerald-800', tag:'bg-emerald-100 text-emerald-700', accent:'border-l-emerald-400' }
  if (sk === 'วิชาการ')
    return { bg:'bg-orange-50', border:'border-orange-200', text:'text-orange-800', tag:'bg-orange-100 text-orange-700', accent:'border-l-orange-400' }
  return { bg:'bg-gray-50', border:'border-gray-200', text:'text-gray-800', tag:'bg-gray-100 text-gray-600', accent:'border-l-gray-300' }
}

function _subjectGroupMeta(cls, cfg = {}) {
  const sg = cls.master_subjects?.subject_group ?? ''
  const sk = cls.skill_group ?? ''
  const cat = cls.master_subjects?.teachers?.category ?? ''
  const color = (() => {
    if (cat === 'ศาสนา' || sg === 'AGM' || sg === 'AGMVOC') return cfg.teacherReligionColor || '#b45309'
    if (sg === 'ACDMVOC' || sk === 'สามัญปวช') return cfg.teacherVocColor || '#7c3aed'
    if (sk === 'ภาษา') return cfg.teacherLanguageColor || '#2563eb'
    if (sk === 'ชีวิต') return cfg.teacherLifeColor || '#059669'
    if (sk === 'วิชาการ') return cfg.teacherAcademicColor || '#ea580c'
    return cfg.teacherDefaultColor || '#059669'
  })()
  const label = (() => {
    if (cat === 'ศาสนา' || sg === 'AGM' || sg === 'AGMVOC') return sg === 'AGMVOC' ? 'กลุ่มวิชาศาสนา ปวช' : 'กลุ่มวิชาศาสนา'
    if (sg === 'ACDMVOC' || sk === 'สามัญปวช') return 'กลุ่มสามัญ ปวช'
    if (sk) return `กลุ่มทักษะ: ${sk}`
    return 'กลุ่มวิชาสามัญ'
  })()
  const short = label.replace('กลุ่มทักษะ: ', '')
  return {
    color,
    label,
    short,
    bg: _mixHex(color, '#ffffff', 0.9),
    badgeBg: _mixHex(color, '#ffffff', 0.86),
    border: _mixHex(color, '#ffffff', 0.35),
    text: _mixHex(color, '#000000', 0.35),
  }
}

// ─── Week date helpers ────────────────────────────────────────────────────────
function _getWeekDates(weekOffset = 0) {
  const today = new Date()
  const dow = today.getDay() // 0=Sun
  const monday = new Date(today)
  monday.setDate(today.getDate() - (dow === 0 ? 6 : dow - 1))
  monday.setDate(monday.getDate() + (weekOffset * 7))
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() - 1)
  const dates = {}
  dates[0] = sunday
  for (let i = 1; i <= 7; i++) {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i - 1)
    dates[i] = d
  }
  return dates
}

function _fmtDateTH(d) {
  return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()+543}`
}

function _isPrayerTimeWindow() {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const timeVal = hours * 60 + minutes
  // 12:20 to 12:50 (740 to 770 mins)
  return timeVal >= 740 && timeVal <= 770
}

function _localDateValue(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function _generatePrayerWeeks(startValue, records = []) {
  const firstRecord = records.map(r => r.check_date).filter(Boolean).sort()[0]
  const base = startValue || firstRecord || new Date().toISOString().slice(0, 10)
  const start = new Date(base)
  start.setHours(0,0,0,0)
  const diff = start.getDay()
  if (diff) start.setDate(start.getDate() - diff)
  return Array.from({ length: 20 }, (_, wi) => {
    const days = Array.from({ length: 5 }, (_, di) => {
      const date = new Date(start)
      date.setDate(start.getDate() + (wi * 7) + di)
      return { date, ds: _localDateValue(date), day: DAY_TH[di] }
    })
    return { n: wi + 1, days }
  })
}

function _scoreRows(columns, scores) {
  const map = Object.fromEntries((scores ?? []).map(s => [s.column_id, s.score]))
  return (columns ?? []).map(c => ({ ...c, score: map[c.id] ?? null }))
}

function _readingEvalGrade(score100) {
  return READING_EVAL_GRADES.find(g => score100 >= g.min) ?? READING_EVAL_GRADES[READING_EVAL_GRADES.length - 1]
}

// ─── Overview ─────────────────────────────────────────────────────────────────
export async function renderStudentOverview(student) {
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const [classes, requests, dailySched, allAnns, gpaData] = await Promise.all([
    getMyEnrolledClasses(student.id).catch(()=>[]),
    getMyExamRequests(student.id).catch(()=>[]),
    getStudentDailySchedule(student.id).catch(()=>({ linked:[], unlinked:[] })),
    getStudentAllAnnouncements(student.id).catch(()=>[]),
    getStudentGPA(student.id).catch(()=>({ samai:[], sasana:[] })),
  ])
  const pending = requests.filter(r => r.status === 'pending')
  const recent  = requests.slice(0, 3)

  setContent(`
    <!-- Profile card -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 mb-4 flex items-center gap-4 sm:gap-6">
      <div class="w-14 h-20 rounded-t-2xl rounded-b-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold shadow">
        ${student.image_url
          ? `<img src="${student.image_url}" class="w-full h-full object-cover object-top"/>`
          : (student.full_name??'น').charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold text-gray-800 text-base truncate">${student.full_name}</p>
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${student.student_code} · ${_roomDisplay(student.main_room??'—')}</p>
      </div>
    </div>

    <!-- Scanner Access Banner -->
    ${student.can_scan_prayer && _isPrayerTimeWindow() ? `
    <div class="relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl border border-emerald-500/20 shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4">
      <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">🕌</div>
      <div class="min-w-0 z-10">
        <h4 class="font-bold text-sm sm:text-base">🕌 ระบบเช็คชื่อละหมาด (สภานักเรียน)</h4>
        <p class="text-xs text-emerald-100 mt-1">คุณได้รับสิทธิ์ให้ทำหน้าที่สแกนเนอร์ บันทึกเวลาละหมาด</p>
      </div>
      <button onclick="window._stuNav('prayer_scanner')" class="relative z-10 px-4 py-2 bg-white text-emerald-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-emerald-50 active:scale-95 transition-all shadow flex-shrink-0">
        เข้าสู่ระบบสแกน →
      </button>
    </div>
    ` : ''}

    <!-- Stats row -->
    <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
      <div class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center">
        <p class="text-xl sm:text-3xl font-bold text-emerald-600">${classes.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">รายวิชา</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center">
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${pending.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">คำร้อง<br>รอดำเนินการ</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center">
        <p class="text-xl sm:text-3xl font-bold text-blue-600">${requests.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">คำร้อง<br>ทั้งหมด</p>
      </div>
    </div>

    <!-- Quick actions — 4 ปุ่มใน grid เดียว: 2×2 บนมือถือ, 4×1 บน tablet -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <button onclick="window._stuNav('subjects')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
        style="background:linear-gradient(135deg,#059669,#047857)">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-xl mb-2 relative">📚</p>
        <p class="font-bold text-sm text-white relative">รายวิชาของฉัน</p>
        <p class="text-[10px] text-emerald-200 mt-0.5 relative">${classes.length} วิชา</p>
      </button>
      <button onclick="window._stuNav('scores')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
        style="background:linear-gradient(135deg,#4f46e5,#4338ca)">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-xl mb-2 relative">📊</p>
        <p class="font-bold text-sm text-white relative">คะแนนของฉัน</p>
        <p class="text-[10px] text-indigo-200 mt-0.5 relative">ทักษะ / ละหมาด</p>
      </button>
      ${(() => {
        const SEEN_KEY = `stu_ann_seen_${student.id}`
        const seen = new Set(JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]'))
        const unreadCount = allAnns.filter(a => !seen.has(a.id)).length
        return `<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${allAnns.length} รายการ</p>
          ${unreadCount > 0
            ? `<span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">${unreadCount}</span>`
            : ''}
        </button>`
      })()}
      <button id="btn-stu-gpa"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
        style="background:linear-gradient(135deg,#7c3aed,#6d28d9)">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-xl mb-2 relative">🎓</p>
        <p class="font-bold text-sm text-white relative">เกรดเฉลี่ย</p>
        <p class="text-[10px] text-purple-200 mt-0.5 relative">GPA ภาคเรียนนี้</p>
      </button>
    </div>

    <!-- รูทีนของวัน -->
    ${(() => {
      const _DAYS_TH = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์']
      const todayName = _DAYS_TH[new Date().getDay()]
      const now = new Date()
      const nowSec = now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds()
      const _toSec = t => { if(!t) return null; const [h,m] = t.split(':').map(Number); return h*3600+m*60 }

      const periodRows = dailySched.linked.map(({ cls, sched, period }) => {
        const ms = cls?.master_subjects
        const startSec = _toSec(period?.start_time)
        const endSec   = _toSec(period?.end_time)
        const isNow = startSec != null && endSec != null && nowSec >= startSec && nowSec < endSec
        const isDone = endSec != null && nowSec >= endSec
        const statusIcon = isNow ? '🟢' : isDone ? '✅' : '⬜'
        const timeStr = period ? `${period.start_time?.slice(0,5)}–${period.end_time?.slice(0,5)}` : `คาบ ${sched.period_no}`
        return `<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${statusIcon}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${sched.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${ms?.subject_name ?? sched.subject_name ?? '—'}</p>
            <p class="text-[11px] text-gray-400">${timeStr} · ${cls?.class_name ?? ''}</p>
          </div>
          ${isNow ? `<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>` : ''}
        </div>`
      }).join('')

      // ── deadline section ─────────────────────────────────────────
      const upcomingDeadlines = allAnns
        .filter(a => a.ann_type === 'deadline' && a.deadline_at && new Date(a.deadline_at) > now)
        .sort((a, b) => new Date(a.deadline_at) - new Date(b.deadline_at))
        .slice(0, 5)

      const _dlCountdown = iso => {
        const diff = new Date(iso) - now
        const mins = Math.floor(diff / 60000)
        if (mins < 60) return `<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${mins} น.</span>`
        const h = Math.floor(mins / 60)
        if (h < 24) return `<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${h} ชม. ${mins%60} น.</span>`
        return `<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(h/24)} วัน</span>`
      }

      const deadlineRows = upcomingDeadlines.map(a => {
        const ms = a.cls?.master_subjects
        return `<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${a.title ?? ''}</p>
            <p class="text-[10px] text-gray-400 truncate">${ms?.subject_name ?? ''} · ${a.cls?.class_name ?? ''}</p>
          </div>
          <div class="flex-shrink-0">${_dlCountdown(a.deadline_at)}</div>
        </div>`
      }).join('')

      return `
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${todayName}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${now.toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'2-digit'})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${periodRows ? `
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${periodRows}</div>` :
        `<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>`}
        ${deadlineRows ? `
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${deadlineRows}</div>` : ''}
      </div>`
    })()}


    <!-- Recent requests -->
    ${recent.length > 0 ? `
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${recent.map(r => {
          const s = STATUS_BADGE[r.status] ?? STATUS_BADGE.pending
          const cls = r.classes
          return `<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${cls?.master_subjects?.subject_name ?? '—'}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${r.request_type} · ${_fmtDate(r.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${s.cls}">${s.label}</span>
            </div>
          </div>`
        }).join('')}
      </div>
    </div>` : `
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `)

  // ── live clock ───────────────────────────────────────────────────────────
  const _clockEl = document.getElementById('stu-live-clock')
  if (_clockEl) {
    const _updateClock = () => {
      const t = new Date()
      _clockEl.textContent = `${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}:${String(t.getSeconds()).padStart(2,'0')}`
    }
    _updateClock()
    const _clockIv = setInterval(() => {
      if (!document.getElementById('stu-live-clock')) { clearInterval(_clockIv); return }
      _updateClock()
    }, 1000)
  }

  // ── helper: full-screen popup ─────────────────────────────────────────────
  const _openFullPopup = (titleHtml, bodyHtml) => {
    const pop = document.createElement('div')
    pop.className = 'stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col'
    pop.innerHTML = `
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${titleHtml}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${bodyHtml}</div>`
    document.body.appendChild(pop)
    pop.querySelector('#stu-popup-back').addEventListener('click', () => pop.remove())
    return pop
  }

  // ── Period countdown (HH:MM:SS) ───────────────────────────────────────────
  const _activePeriod = dailySched.linked.find(({ period }) => {
    if (!period?.start_time || !period?.end_time) return false
    const now = new Date()
    const nowSec = now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds()
    const [sh,sm] = period.start_time.split(':').map(Number)
    const [eh,em] = period.end_time.split(':').map(Number)
    return nowSec >= sh*3600+sm*60 && nowSec < eh*3600+em*60
  })
  if (_activePeriod) {
    const _endSec = (() => { const [h,m] = _activePeriod.period.end_time.split(':').map(Number); return h*3600+m*60 })()
    const _cdInterval = setInterval(() => {
      const el = document.getElementById('stu-period-countdown')
      if (!el) { clearInterval(_cdInterval); return }
      const nowSec = new Date().getHours()*3600 + new Date().getMinutes()*60 + new Date().getSeconds()
      const rem = Math.max(0, _endSec - nowSec)
      if (rem === 0) { el.textContent = 'หมดคาบ'; clearInterval(_cdInterval); return }
      const h = Math.floor(rem/3600), m = Math.floor((rem%3600)/60), s = rem%60
      el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
    }, 1000)
  }

  // ── Announcement bottom sheet ─────────────────────────────────────────────
  const ANN_TYPE_LABEL_S = {
    'general':      { icon:'📢', label:'ประกาศ',              bg:'bg-gray-50',    border:'border-gray-200' },
    'deadline':     { icon:'⏰', label:'กำหนดส่งงาน/สอบ',     bg:'bg-red-50',     border:'border-red-200'  },
    'learning_doc': { icon:'📄', label:'เอกสารประกอบการเรียน', bg:'bg-blue-50',    border:'border-blue-200' },
    'exercise_doc': { icon:'📝', label:'แบบฝึกเพิ่มเติม',      bg:'bg-emerald-50', border:'border-emerald-200' },
    'exam_prep':    { icon:'📋', label:'แนวข้อสอบ',            bg:'bg-amber-50',   border:'border-amber-200' },
  }
  const _fmtDeadlineS = iso => {
    if (!iso) return ''
    const d = new Date(iso), now = new Date()
    const diffMin = Math.floor((d - now) / 60000)
    const str = d.toLocaleDateString('th-TH', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
    if (diffMin < 0) return `<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${str}</span>`
    if (diffMin < 60) return `<span class="text-red-600 text-xs font-bold">🔴 อีก ${diffMin} น. · ${str}</span>`
    const diffH = Math.floor(diffMin/60)
    if (diffH < 24) return `<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${diffH} ชม. ${diffMin%60} น. · ${str}</span>`
    return `<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(diffH/24)} วัน · ${str}</span>`
  }
  document.getElementById('btn-stu-anns')?.addEventListener('click', () => {
    // mark ทุกประกาศว่าอ่านแล้ว → badge หาย
    const SEEN_KEY = `stu_ann_seen_${student.id}`
    const seen = new Set(JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]'))
    allAnns.forEach(a => seen.add(a.id))
    localStorage.setItem(SEEN_KEY, JSON.stringify([...seen]))
    // ลบ badge ออกทันที
    const badgeEl = document.querySelector('#btn-stu-anns span.absolute')
    if (badgeEl) badgeEl.remove()

    const annBody = allAnns.length ? `<div class="space-y-3">${allAnns.map(a => {
      const t = ANN_TYPE_LABEL_S[a.ann_type] ?? ANN_TYPE_LABEL_S.general
      const ms = a.cls?.master_subjects
      return `<div class="rounded-2xl border ${t.border} ${t.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${a.priority > 0 ? `<span class="text-[10px] font-bold text-amber-600">📌</span>` : ''}
          <span class="text-[10px] text-gray-500">${t.icon} ${t.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${ms?.subject_name ?? ''} · ${a.cls?.class_name ?? ''}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${a.title ?? ''}</p>
        ${a.body ? `<p class="text-xs text-gray-500 mt-1">${a.body}</p>` : ''}
        ${a.ann_type === 'deadline' && a.deadline_at ? `<div class="mt-2">${_fmtDeadlineS(a.deadline_at)}</div>` : ''}
        ${a.file_url ? `<a href="${a.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>` : ''}
      </div>`
    }).join('')}</div>` : `<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>`
    _openFullPopup('📢 ประกาศของฉัน', annBody)
  })

  document.getElementById('btn-stu-gpa')?.addEventListener('click', () => {
    const _calcGPA = rows => {
      const withGrade = rows.filter(r => r.grade != null)
      if (!withGrade.length) return null
      const totalCredit = withGrade.reduce((s,r) => s+(r.credit||1), 0)
      const weighted    = withGrade.reduce((s,r) => s+(r.grade*(r.credit||1)), 0)
      return totalCredit > 0 ? (weighted/totalCredit).toFixed(2) : null
    }
    const _gradeColor = g => g == null ? 'text-gray-400' : g>=3.5?'text-emerald-600':g>=3?'text-blue-500':g>=2?'text-amber-600':'text-red-500'
    const _gradeLabel = g => g>=3.5?'ดีเยี่ยม':g>=3?'ดี':g>=2?'พอใช้':g>=1?'ผ่าน':'ไม่ผ่าน'

    const _gpaTable = (rows, gpa, label, tabId) => {
      const graded       = rows.filter(r => r.grade != null)
      const totalCredit  = graded.reduce((s,r) => s+(r.credit||1), 0)
      const totalWtGrade = graded.reduce((s,r) => s+(r.grade*(r.credit||1)), 0)
      const gpaVal       = parseFloat(gpa)
      return `
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${tabId}" class="text-5xl font-extrabold ${gpa ? _gradeColor(gpaVal) : 'text-gray-300'} hover:opacity-70 transition">${gpa ?? '—'}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${gpa ? _gradeColor(gpaVal) : 'text-gray-400'}">${gpa ? _gradeLabel(gpaVal) : '—'}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${rows.length ? `
      <div class="overflow-x-auto -mx-4">
        <table class="w-full text-xs">
          <thead>
            <tr class="border-b border-gray-200 text-gray-400 text-left">
              <th class="px-4 py-2 font-medium">#</th>
              <th class="px-2 py-2 font-medium">รายวิชา</th>
              <th class="px-2 py-2 font-medium text-center">หน่วย</th>
              <th class="px-2 py-2 font-medium text-center">คะแนน</th>
              <th class="px-2 py-2 font-medium text-center">เกรด</th>
              <th class="px-2 py-2 font-medium text-center">แก้</th>
              <th class="px-2 py-2 font-medium text-center">เปิด</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((r, i) => `
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${i+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${r.subjectCode ?? ''}</p>
                <p class="font-semibold text-gray-800 leading-tight">${r.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${r.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${r.score != null ? r.score : '—'}</td>
              <td class="px-2 py-2.5 text-center font-bold ${_gradeColor(r.grade)}">${r.grade != null ? r.grade.toFixed(1) : '—'}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${r.hasRetake ? '✓' : ''}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${r.classId}">→</button>
              </td>
            </tr>`).join('')}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${totalCredit}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${totalCredit}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${_gradeColor(gpa ? gpaVal : null)}">${gpa ?? '—'}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>` : `<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>`}`
    }

    const samaiGPA  = _calcGPA(gpaData.samai)
    const sasanaGPA = _calcGPA(gpaData.sasana)
    const gpaBody = `
      <div id="gpa-pop-tabs" class="flex gap-2 mb-4">
        <button data-tab="samai" class="gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-purple-600 text-white">สามัญ</button>
        <button data-tab="sasana" class="gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold text-gray-500 border border-gray-200">ศาสนา</button>
      </div>
      <div id="gpa-pop-samai">${_gpaTable(gpaData.samai, samaiGPA, 'กลุ่มสามัญ', 'samai')}</div>
      <div id="gpa-pop-sasana" class="hidden">${_gpaTable(gpaData.sasana, sasanaGPA, 'กลุ่มศาสนา', 'sasana')}</div>`
    const pop = _openFullPopup('🎓 เกรดเฉลี่ยของฉัน', gpaBody)
    pop.querySelectorAll('.gpa-pop-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.tab
        pop.querySelector('#gpa-pop-samai').classList.toggle('hidden', t !== 'samai')
        pop.querySelector('#gpa-pop-sasana').classList.toggle('hidden', t !== 'sasana')
        pop.querySelectorAll('.gpa-pop-tab').forEach(b => {
          b.className = `gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${b.dataset.tab===t ? 'bg-purple-600 text-white' : 'text-gray-500 border border-gray-200'}`
        })
      })
    })
    // ปุ่ม → เปิดรายวิชา
    pop.querySelectorAll('.gpa-pp5-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const classId = Number(btn.dataset.classId)
        pop.remove()
        window._stuOpenClass?.(classId)
      })
    })
    // กดที่ค่า GPA → popup แสดงสูตรการคำนวณ
    ;['samai','sasana'].forEach(tabId => {
      const btn = pop.querySelector(`#gpa-val-btn-${tabId}`)
      if (!btn) return
      btn.addEventListener('click', () => {
        const rows   = tabId === 'samai' ? gpaData.samai : gpaData.sasana
        const graded = rows.filter(r => r.grade != null)
        const sumCr  = graded.reduce((s,r) => s+(r.credit||1), 0)
        const sumWt  = graded.reduce((s,r) => s+(r.grade*(r.credit||1)), 0)
        const gpaNum = sumCr > 0 ? (sumWt/sumCr).toFixed(2) : '—'
        const tip = document.createElement('div')
        tip.className = 'fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6'
        tip.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
          <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
          <div class="text-sm text-gray-600 mb-3">
            <p class="font-mono text-base font-semibold text-purple-700">
              Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
            <p class="text-gray-700">${sumWt.toFixed(2)} ÷ ${sumCr}</p>
            <p class="text-purple-700 font-bold text-lg mt-1">= ${gpaNum}</p>
          </div>
          <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่มีผลการเรียน (${graded.length} วิชา)</p>
          <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
        </div>`
        document.body.appendChild(tip)
        tip.querySelector('#gpa-tip-close').addEventListener('click', () => tip.remove())
        tip.addEventListener('click', e => { if (e.target===tip) tip.remove() })
      })
    })
  })

  // ── Timetable popup ───────────────────────────────────────────────────────
  // global: ปิด timetable popup แล้วนำทางไปวิชา
  window._stuOpenClassFromTT = (classId) => {
    document.querySelectorAll('.stu-fullpop').forEach(el => el.remove())
    window._stuFromTimetable = true
    window._stuOpenClass?.(classId)
  }
  window._stuBackFromSubject = () => {
    if (window._stuFromTimetable) {
      window._stuFromTimetable = false
      if (window._stuOpenTimetablePopup) {
        window._stuNav('overview')   // กลับ overview ก่อน
        setTimeout(() => window._stuOpenTimetablePopup(), 300)
      } else {
        window._stuNav('overview')
      }
    } else {
      window._stuNav('subjects')
    }
  }

  const _openTimetablePopup = async () => {
    const pop = _openFullPopup('📅 ตารางเรียน', `<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`)

    const { slots, periods } = await getStudentWeeklySchedule(student.id).catch(() => ({ slots:[], periods:[] }))
    const content = pop.querySelector('.flex-1.overflow-y-auto')
    if (!content) return

    // ── constants ──────────────────────────────────────────────────────────
    const DAYS_FULL  = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์']
    const DAYS_SHORT = ['อา','จ','อ','พ','พฤ','ศ','ส']
    // วันที่มีในตาราง (เรียงเริ่มจากอาทิตย์=0)
    const daysInGrid = [0,1,2,3,4,5,6].filter(d => slots.some(s => s.dow === d))
    const todayDow   = new Date().getDay()
    let viewMode     = 'day'   // 'day' | 'week'
    let currentDay   = daysInGrid.includes(todayDow) ? todayDow : (daysInGrid[0] ?? 0)

    // slot lookup: `${dow}-${periodNo}` → slot
    const slotMap = {}
    slots.forEach(s => { slotMap[`${s.dow}-${s.periodNo}`] = s })

    // สีตาม subject_group
    const _cellColor = sg => ['AGM','AGMVOC'].includes(sg)
      ? 'bg-amber-50 text-amber-800 border-amber-200'
      : 'bg-emerald-50 text-emerald-800 border-emerald-200'

    // ── render ────────────────────────────────────────────────────────────
    const _renderDay = (dow) => {
      const now = new Date()
      const nowSec = now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds()
      // สร้าง slotStartMap: periodNo → slot (เฉพาะคาบที่เป็นจุดเริ่มต้น)
      // และ spannedBy: periodNo → periodNo ของ slot ที่ครอบมัน
      const spannedBy = {}
      slots.filter(s=>s.dow===dow && s.span>1).forEach(s=>{
        for(let i=1;i<s.span;i++) spannedBy[s.periodNo+i] = s.periodNo
      })

      // หาเวลาพัก: สิ้นสุดคาบ 5 → เริ่มคาบ 6
      const p5end = periods.find(pp=>pp.period_no===5)?.end_time?.slice(0,5) ?? ''
      const p6start = periods.find(pp=>pp.period_no===6)?.start_time?.slice(0,5) ?? ''
      const breakTimeStr = p5end && p6start ? `${p5end}–${p6start}` : ''

      let tableRows = ''
      periods.forEach((p) => {
        // แถวพักเที่ยง ก่อนคาบ 6
        if (p.period_no === 6 && periods.find(pp=>pp.period_no===5)) {
          tableRows += `<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${breakTimeStr ? `<p class="text-[10px] text-emerald-500 mt-0.5">${breakTimeStr}</p>` : ''}
            </td></tr>`
        }

        const slot = slotMap[`${dow}-${p.period_no}`]
        const span = slot?.span ?? 1
        const lastP = span>1 ? (periods.find(pp=>pp.period_no===p.period_no+span-1)??p) : p
        const [sh,sm] = (p.start_time??'0:0').split(':').map(Number)
        const [eh,em] = (lastP.end_time??'0:0').split(':').map(Number)
        const isNow = nowSec>=sh*3600+sm*60 && nowSec<eh*3600+em*60
        const ms = slot?.cls?.master_subjects
        const isAGM = ['AGM','AGMVOC'].includes(ms?.subject_group??'')
        const cellBg = slot ? (isAGM ? 'bg-amber-50' : 'bg-emerald-50') : ''
        const txtCls = slot ? (isAGM ? 'text-amber-800' : 'text-emerald-800') : 'text-gray-300'
        const isSpanned = spannedBy[p.period_no] != null

        tableRows += `<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${isNow?'text-emerald-600':'text-gray-500'}">คาบ ${p.period_no}</p>
            <p class="text-[10px] text-gray-400">${p.start_time?.slice(0,5)??''}</p>
          </td>
          ${isSpanned ? '' : `
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${span>1?`rowspan="${span}"`:''}
              ${slot?`onclick="window._stuOpenClassFromTT(${slot.cls.id})"`:''}>
            ${slot ? `
              <div class="rounded-xl ${cellBg} border-l-4 ${isAGM?'border-amber-400':'border-emerald-400'}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${isNow?'ring-2 ring-emerald-400':''}"
                style="height:100%;min-height:${span>1?span*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${txtCls} leading-tight">${ms?.subject_name??'—'}</p>
                <p class="text-[10px] ${txtCls} opacity-60 mt-0.5">${ms?.subject_code??''}</p>
                ${isNow ? `<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>` : ''}
              </div>` :
              `<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>`}
          </td>`}
        </tr>`
      })

      return `<table class="w-full border-collapse">
        <tbody>${tableRows}</tbody>
      </table>`
    }

    const _renderWeek = () => {
      const colW = `${Math.floor(100/(daysInGrid.length+1))}%`
      const headerCells = `<th style="width:${colW}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`
        + daysInGrid.map(d => `<th style="width:${colW}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${d===todayDow?'text-teal-600':'text-gray-600'}">${DAYS_SHORT[d]}</th>`).join('')

      // skipMap: { dow: Set<periodNo> } — คาบที่ถูก rowspan แล้ว
      const skipMap = {}
      daysInGrid.forEach(d => { skipMap[d] = new Set() })

      let tableRows = ''
      periods.forEach((p, i) => {
        const now = new Date()
        const nowSec = now.getHours()*3600+now.getMinutes()*60+now.getSeconds()

        const cells = daysInGrid.map(d => {
          if (skipMap[d].has(p.period_no)) return '' // ถูก rowspan แล้ว ข้าม
          const slot = slotMap[`${d}-${p.period_no}`]
          const span = slot?.span ?? 1
          const ms = slot?.cls?.master_subjects
          const isAGM = ['AGM','AGMVOC'].includes(ms?.subject_group ?? '')
          const bg  = slot ? (isAGM ? 'bg-amber-50' : 'bg-emerald-50') : ''
          const txt = slot ? (isAGM ? 'text-amber-700' : 'text-emerald-700') : 'text-gray-200'
          // หา endSec ของช่วงที่ span
          const lastP = span>1 ? (periods.find(pp=>pp.period_no===p.period_no+span-1)??p) : p
          const [sh,sm]=(p.start_time??'0:0').split(':').map(Number)
          const [eh,em]=(lastP.end_time??'0:0').split(':').map(Number)
          const isNow = d===todayDow && nowSec>=sh*3600+sm*60 && nowSec<eh*3600+em*60
          // mark คาบที่ถูก span
          for (let s=1; s<span; s++) skipMap[d].add(p.period_no+s)
          return `<td style="width:${colW};padding:2px" ${span>1?`rowspan="${span}"`:''}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${slot?`onclick="window._stuOpenClassFromTT(${slot.cls.id})"`:''}>
            ${slot ? `
              <div class="rounded-lg ${bg} border-l-2 ${isAGM?'border-amber-400':'border-emerald-400'}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${span>1?span*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${txt} text-[8px] font-semibold leading-tight line-clamp-3">${ms?.subject_name??''}</p>
              </div>` :
              `<div style="height:${32}px"></div>`}
          </td>`
        }).join('')

        tableRows += `<tr>
          <td style="width:${colW}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${p.period_no}</p>
            <p class="text-[8px] text-gray-300">${p.start_time?.slice(0,5)??''}</p>
          </td>${cells}</tr>`

        // แถวพัก ระหว่างคาบ 5-6
        if (p.period_no === 5 && periods.find(pp=>pp.period_no===6)) {
          const _p5e = p.end_time?.slice(0,5) ?? ''
          const _p6s = periods.find(pp=>pp.period_no===6)?.start_time?.slice(0,5) ?? ''
          tableRows += `<tr><td colspan="${daysInGrid.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${_p5e&&_p6s?` ${_p5e}–${_p6s}`:''}</p>
          </td></tr>`
        }
      })

      return `<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${headerCells}</tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>`
    }

    const _render = () => {
      const isWeek = viewMode === 'week'
      content.innerHTML = `
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${!isWeek?'bg-white shadow text-teal-600':'text-gray-500'}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${isWeek?'bg-white shadow text-teal-600':'text-gray-500'}">ทั้งสัปดาห์</button>
        </div>
        ${!isWeek ? `
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${DAYS_FULL[currentDay]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>` : ''}
      </div>
      ${isWeek ? _renderWeek() : _renderDay(currentDay)}
      ${!slots.length ? '<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>' : ''}`

      // tab switch
      content.querySelector('#tt-btn-day')?.addEventListener('click', () => { viewMode='day'; _render() })
      content.querySelector('#tt-btn-week')?.addEventListener('click', () => { viewMode='week'; _render() })
      // day nav
      content.querySelector('#tt-prev')?.addEventListener('click', () => {
        const i = daysInGrid.indexOf(currentDay)
        currentDay = daysInGrid[(i-1+daysInGrid.length)%daysInGrid.length]
        _render()
      })
      content.querySelector('#tt-next')?.addEventListener('click', () => {
        const i = daysInGrid.indexOf(currentDay)
        currentDay = daysInGrid[(i+1)%daysInGrid.length]
        _render()
      })
      // countdown คาบปัจจุบัน (day view)
      if (!isWeek) {
        const cdEl = content.querySelector('#tt-day-cd')
        if (cdEl) {
          const activePeriod = periods.find(p => {
            const s = slotMap[`${currentDay}-${p.period_no}`]
            if (!s || !p.end_time) return false
            const now = new Date(), nowSec = now.getHours()*3600+now.getMinutes()*60+now.getSeconds()
            const [eh,em] = p.end_time.split(':').map(Number)
            const [sh,sm] = (p.start_time??'0:0').split(':').map(Number)
            return nowSec >= sh*3600+sm*60 && nowSec < eh*3600+em*60
          })
          if (activePeriod) {
            const [eh,em] = activePeriod.end_time.split(':').map(Number)
            const _endSec = eh*3600+em*60
            const _iv = setInterval(() => {
              const el = content.querySelector('#tt-day-cd')
              if (!el) { clearInterval(_iv); return }
              const now = new Date(), rem = Math.max(0, _endSec - now.getHours()*3600 - now.getMinutes()*60 - now.getSeconds())
              const h=Math.floor(rem/3600), m=Math.floor((rem%3600)/60), s=rem%60
              el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
              if (rem===0) clearInterval(_iv)
            }, 1000)
          }
        }
      }
    }
    _render()
  }

  // expose เป็น global ให้ _stuBackFromSubject เรียกได้จากทุกหน้า
  window._stuOpenTimetablePopup = _openTimetablePopup

  document.getElementById('btn-stu-timetable')?.addEventListener('click', _openTimetablePopup)
}

// ─── My Score Hub ────────────────────────────────────────────────────────────
export async function renderStudentMyScores(student, activeTab = 'life') {
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const cfg = await getSystemConfig().catch(()=>({}))
  const year = cfg.academicYear
  const sem = cfg.semester
  const [life, reading, prayers] = await Promise.all([
    getMyLifeSkillScores(student.id, year, sem).catch(err => ({ columns: [], scores: [], error: err })),
    getMyReadingScores(student.id, year, sem).catch(err => ({ columns: [], scores: [], error: err })),
    getMyPrayerRecords(student.id).catch(err => Object.assign([], { error: err })),
  ])

  const lifeRows = _scoreRows(life.columns, life.scores)
  const readingRows = _scoreRows(reading.columns, reading.scores)
  const readingTotal = readingRows.reduce((sum, r) => sum + (parseFloat(r.score) || 0), 0)
  const readingMax = readingRows.reduce((sum, r) => sum + (parseFloat(r.max_score) || 0), 0)
  const readingScore100 = readingMax > 0 ? Math.round((readingTotal / readingMax) * 1000) / 10 : 0
  const readingEval = readingTotal > 0 ? _readingEvalGrade(readingScore100) : null
  const prayerMap = Object.fromEntries((prayers ?? []).map(r => [r.check_date, r.status]))
  const weeks = _generatePrayerWeeks(cfg.semester_start, prayers ?? [])
  const allPrayerDays = weeks.flatMap(w => w.days)
  const prayerEarned = allPrayerDays.reduce((sum, d) => sum + (PRAYER_SCORE[prayerMap[d.ds]]?.score ?? 0), 0)
  const prayerMax = allPrayerDays.length * 2
  const prayerScore = prayerMax ? Math.max(0, Math.round((prayerEarned / prayerMax) * 100) / 10) : 0

  const scoreCard = (title, icon, rows, color) => `
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${icon} ${title}</h3>
        <span class="text-[11px] text-gray-400">${rows.length} หัวข้อ</span>
      </div>
      ${rows.length ? `<div class="divide-y divide-gray-50">
        ${rows.map(r => `
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${r.name}</p>
              <p class="text-[11px] text-gray-400">${r.sheet_col ? `คอลัมน์ ${r.sheet_col} · ` : ''}เต็ม ${r.max_score ?? '—'}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${color}">${r.score ?? '—'}</p>
              <p class="text-[10px] text-gray-400">/ ${r.max_score ?? '—'}</p>
            </div>
          </div>`).join('')}
      </div>` : `<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลคะแนน</div>`}
    </section>`

  const prayerCard = `
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">20 สัปดาห์ · สัปดาห์ละ 5 วัน</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-amber-600">${prayerScore}</p>
          <p class="text-[10px] text-gray-400">/ 10</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[520px] text-xs">
          <thead>
            <tr class="bg-gray-50 text-gray-500">
              <th class="px-2 py-2 text-left font-semibold">สัปดาห์</th>
              ${['อา','จ','อ','พ','พฤ'].map(d => `<th class="px-2 py-2 text-center font-semibold">${d}</th>`).join('')}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${weeks.map(w => `<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${w.n}</td>
              ${w.days.map(d => {
                const st = prayerMap[d.ds]
                const cfg = PRAYER_SCORE[st]
                return `<td class="px-1 py-1 text-center">
                  <span title="${cfg?.title ?? 'ยังไม่บันทึก'}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${cfg?.cls ?? 'bg-gray-50 text-gray-300 border-gray-100'}">${cfg?.label ?? '—'}</span>
                </td>`
              }).join('')}
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(PRAYER_SCORE).map(s => `<span><b class="${s.cls.split(' ').find(c=>c.startsWith('text-')) ?? ''}">${s.label}</b> ${s.title}</span>`).join('')}
      </div>
    </section>
  `

  const tabTitle = {
    life: 'คะแนนทักษะชีวิต',
    prayer: 'คะแนนละหมาด',
    reading: 'คะแนนอ่านคิดวิเคราะห์ฯ',
  }[activeTab] ?? 'คะแนนทักษะชีวิต'

  const content = {
    life: scoreCard('คะแนนทักษะชีวิต', '🌱', lifeRows, 'text-emerald-600'),
    prayer: prayerCard,
    reading: `
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${readingEval
              ? `<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${readingEval.cls}">${readingEval.label}</span>`
              : `<span class="text-sm font-semibold text-gray-300">—</span>`}
            <p class="text-[11px] text-gray-400 mt-1">${readingTotal ? `${readingScore100} / 100` : 'ยังไม่มีคะแนน'}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${readingTotal || '—'}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${readingMax || '—'}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${readingTotal ? readingScore100 : '—'}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${scoreCard('คะแนนอ่านคิดวิเคราะห์ฯ', '📖', readingRows, 'text-sky-600')}
    `,
  }[activeTab] ?? scoreCard('คะแนนทักษะชีวิต', '🌱', lifeRows, 'text-emerald-600')

  setContent(`
    <h2 class="font-bold text-gray-800 mb-1">📊 คะแนนของฉัน</h2>
    <p class="text-xs text-gray-400 mb-2">คะแนนรวมอื่น ๆ นอกเหนือจากคะแนนรายวิชา · ภาค ${sem ?? '—'} / ${year ?? '—'}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${tabTitle}</p>
    ${content}
  `)
}

// ─── Subjects List ────────────────────────────────────────────────────────────
export async function renderStudentSubjects(student) {
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const [classes, themeCfg] = await Promise.all([
    getMyEnrolledClasses(student.id).catch(()=>[]),
    getThemeConfig().catch(()=>({})),
  ])

  // ดึง schedule links ทั้งหมดในครั้งเดียว
  const _DAY_TH = ['อา','จ','อ','พ','พฤ','ศ','ส']
  const schedByClass = classes.length
    ? await getClassSchedulesByIds(classes.map(c => c.id)).catch(() => ({}))
    : {}

  const _isUnlinked = (classId) => !(schedByClass[classId]?.length)

  const _schedChip = (classId) => {
    const slots = schedByClass[classId] ?? []
    if (!slots.length) return ''
    // จัดกลุ่มตามวัน
    const byDay = {}
    slots.forEach(s => {
      const d = s.day_of_week
      if (!byDay[d]) byDay[d] = []
      const span = s.span_periods ?? 1
      for (let i = 0; i < span; i++) byDay[d].push((s.period_no ?? 0) + i)
    })
    return Object.entries(byDay)
      .sort(([a],[b]) => Number(a)-Number(b))
      .map(([d, ps]) => {
        const periods = [...new Set(ps)].sort((a,b)=>a-b)
        const pStr = periods.length === 1 ? `คาบ ${periods[0]}`
          : `คาบ ${periods[0]}–${periods[periods.length-1]}`
        return `${_DAY_TH[Number(d)] ?? d} ${pStr}`
      }).join(' · ')
  }

  if (!classes.length) {
    setContent(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`)
    return
  }

  // Group into สามัญ (ACDM/ACDMVOC) and ศาสนา (AGM/AGMVOC)
  const samai   = classes.filter(c => {
    const sg = c.master_subjects?.subject_group ?? ''
    const cat = c.master_subjects?.teachers?.category ?? ''
    return !( cat === 'ศาสนา' || sg === 'AGM' || sg === 'AGMVOC' )
  })
  const satsana = classes.filter(c => {
    const sg = c.master_subjects?.subject_group ?? ''
    const cat = c.master_subjects?.teachers?.category ?? ''
    return ( cat === 'ศาสนา' || sg === 'AGM' || sg === 'AGMVOC' )
  })

  const viewMode = localStorage.getItem('studentSubjectsView') === 'grid' ? 'grid' : 'list'
  const isGrid = viewMode === 'grid'

  window._stuSetSubjectView = (mode) => {
    localStorage.setItem('studentSubjectsView', mode === 'grid' ? 'grid' : 'list')
    renderStudentSubjects(student)
  }

  const _renderCard = (cls) => {
    const ms = cls.master_subjects
    const teacher = ms?.teachers
    const meta = _subjectGroupMeta(cls, themeCfg)
    if (isGrid) {
      return `<button onclick="window._stuOpenClass(${cls.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${meta.bg}; border-color:${meta.border}; border-left-color:${meta.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${meta.badgeBg}; color:${meta.text};">${meta.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${meta.text};">${ms?.subject_name ?? '—'}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${ms?.subject_code ?? ''}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${_roomDisplay(cls.class_name)}</p>
            ${_schedChip(cls.id)
              ? `<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${_schedChip(cls.id)}</p>`
              : `<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>`}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${teacher?.image_url
              ? `<img src="${teacher.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`
              : `<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${(teacher?.full_name??'ค').charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${teacher?.full_name ?? '—'}</span>
          </div>
        </div>
      </button>`
    }
    return `<div onclick="window._stuOpenClass(${cls.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${meta.bg}; border-color:${meta.border}; border-left-color:${meta.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${meta.text};">${ms?.subject_name ?? '—'}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${ms?.subject_code ?? ''}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${meta.text};">${meta.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${meta.badgeBg}; color:${meta.text};">${meta.short}</span>
          <span class="text-[10px] text-gray-400">${ms?.credit ?? '—'} หน่วยกิต</span>
        </div>
      </div>
      ${_schedChip(cls.id)
        ? `<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${_schedChip(cls.id)}</p>`
        : `<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>`}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${teacher?.image_url
            ? `<img src="${teacher.image_url}" class="w-6 h-6 rounded-full object-cover"/>`
            : `<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${(teacher?.full_name??'ค').charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${teacher?.full_name ?? '—'}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${_roomDisplay(cls.class_name)}</span>
      </div>
    </div>`
  }

  const _renderSection = (title, icon, items) => {
    if (!items.length) return ''
    return `
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${icon}</span>
          <h3 class="font-bold text-gray-700 text-sm">${title}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${items.length} วิชา</span>
        </div>
        <div class="${isGrid ? 'grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3' : 'space-y-3 sm:grid sm:grid-cols-2 sm:gap-3'}">
          ${items.map(_renderCard).join('')}
        </div>
      </div>`
  }

  setContent(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${classes.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${!isGrid ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-400'}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${isGrid ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-400'}">กริด</button>
      </div>
    </div>
    ${_renderSection('วิชาสามัญ', '📖', samai)}
    ${_renderSection('วิชาศาสนา', '🕌', satsana)}
  `)
}

// ─── Subject Detail ───────────────────────────────────────────────────────────
export async function renderStudentSubjectDetail(student, classId, tab = 'todo') {
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const classes = await getMyEnrolledClasses(student.id).catch(()=>[])
  const cls = classes.find(c => c.id === classId)
  if (!cls) { setContent(`<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>`); return }

  const { getClassAnnouncements: _getClassAnn } = await import('./api.js').catch(() => ({}))
  const [{ columns, scores }, attendance, requestsAll, classAnns] = await Promise.all([
    getMyScores(student.id, classId).catch(()=>({ columns:[], scores:[] })),
    getMyAttendance(student.id, classId).catch(()=>[]),
    getMyExamRequests(student.id).catch(()=>[]),
    _getClassAnn ? _getClassAnn(classId).catch(()=>[]) : Promise.resolve([]),
  ])
  const requests = requestsAll.filter(r => r.classes?.id === classId)

  const scoreMap = Object.fromEntries(scores.map(s => [s.assignment_id, s]))
  const ms = cls.master_subjects
  const teacher = ms?.teachers

  const _getVal = c => parseFloat(scoreMap[c.id]?.final_score ?? scoreMap[c.id]?.original_score ?? 0) || 0
  const specialCols = columns.filter(c => c.assignment_type === 'คะแนนพิเศษ')
  const midCols  = columns.filter(c => c.assignment_type !== 'final' && c.assignment_type !== 'คะแนนพิเศษ')
  const finCols  = columns.filter(c => c.assignment_type === 'final')
  const midMax   = midCols.reduce((s,c) => s+(c.max_score||0), 0)
  const finMax   = finCols.reduce((s,c) => s+(c.max_score||0), 0)
  const midScore    = midCols.reduce((s,c) => s+_getVal(c), 0)
  const finScore    = finCols.reduce((s,c) => s+_getVal(c), 0)
  const specialScore = specialCols.reduce((s,c) => s+_getVal(c), 0)
  const total    = midScore + finScore + specialScore  // รวม bonus ใน total ที่แสดง
  const totalMax = midMax + finMax                     // แต่ % คำนวณจาก mid+final เท่านั้น
  const pct      = totalMax > 0 ? ((midScore + finScore) / totalMax * 100) : 0

  const attTotal   = attendance.length
  const attPresent = attendance.filter(a => a.status === 'present').length
  const attPct     = attTotal > 0 ? Math.round(attPresent / attTotal * 100) : null

  // Grade label + color
  const _gradeLabel = (p) => {
    if (p >= 80) return { label:'ดีเยี่ยม', cls:'bg-emerald-100 text-emerald-700' }
    if (p >= 65) return { label:'ดี',       cls:'bg-blue-100 text-blue-700' }
    if (p >= 50) return { label:'พอใช้',    cls:'bg-yellow-100 text-yellow-700' }
    return              { label:'ปรับปรุง', cls:'bg-red-100 text-red-600' }
  }
  const grade = totalMax > 0 ? _gradeLabel(pct) : null

  // Score table row
  const _scoreTableRow = (col) => {
    const sc = scoreMap[col.id]
    const hasScore = sc && (sc.final_score != null || sc.original_score != null)
    const val = hasScore ? (parseFloat(sc?.final_score ?? sc?.original_score) || 0) : null
    const pctCol = (val != null && col.max_score > 0) ? Math.round(val / col.max_score * 100) : null
    const hasRetake = sc?.retake_score != null

    return `<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${col.assignment_name}
        ${hasRetake ? `<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>` : ''}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${val != null ? 'text-blue-600' : 'text-gray-300'} whitespace-nowrap">
        ${val != null ? val.toFixed(1).replace(/\.0$/, '') : '—'}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${col.max_score != null ? '/'+col.max_score : '<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${val != null ? 'text-gray-500' : 'text-gray-300'} whitespace-nowrap">
        ${col.max_score != null ? (pctCol != null ? pctCol+'%' : '—%') : ''}
      </td>
    </tr>`
  }

  const _scoreTable = (cols, totalScore, maxScore, summaryBg, label) => {
    if (!cols.length) return ''
    const sumPct = maxScore > 0 ? Math.round(totalScore / maxScore * 100) : 0
    return `
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${label}</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50 text-[10px] text-gray-400 uppercase tracking-wide">
              <th class="py-2 px-3 text-left font-semibold">ชื่องาน</th>
              <th class="py-2 px-3 text-center font-semibold">คะแนน</th>
              <th class="py-2 px-3 text-center font-semibold">เต็ม</th>
              <th class="py-2 px-3 text-center font-semibold">%</th>
            </tr>
          </thead>
          <tbody>
            ${cols.map(_scoreTableRow).join('')}
            <tr class="${summaryBg}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${totalScore.toFixed(1).replace(/\.0$/,'')}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${maxScore}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${sumPct}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`
  }

  const colorCls = _subjectColorCls(cls)

  const _subjectHeader = () => `
    <div class="${colorCls.bg} ${colorCls.border} border border-l-4 ${colorCls.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${student.image_url
          ? `<img src="${student.image_url}" class="w-full h-full object-cover"/>`
          : (student.full_name??'น').charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${colorCls.text} text-sm leading-tight">${ms?.subject_name ?? '—'}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${ms?.subject_code ?? ''}</p>
        <p class="text-xs text-gray-500 mt-0.5">${student.full_name} · ${student.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${teacher?.full_name ?? '—'} · ${_roomDisplay(cls.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${totalMax > 0 ? (midScore+finScore).toFixed(1).replace(/\.0$/,'') : '—'}</p>
        <p class="text-[10px] text-gray-400">/${totalMax} คะแนน</p>
        ${specialScore > 0 ? `<p class="text-[10px] text-amber-500 font-medium">+${specialScore.toFixed(1).replace(/\.0$/,'')} โบนัส</p>` : ''}
        ${grade
          ? `<span class="inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${grade.cls}">${grade.label}</span>`
          : ''}
      </div>
    </div>`

  const _requestCard = (r) => {
    const s = STATUS_BADGE[r.status] ?? STATUS_BADGE.pending
    const col = r.class_score_columns
    const when = _daysUntilLabel(r.requested_date)
    return `<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${r.request_type}</p>
          ${col ? `<p class="text-[11px] text-gray-400 mt-0.5">${col.assignment_name}</p>` : ''}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${s.cls}">${s.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${_fmtDate(r.requested_date)}${r.requested_period_no ? ` · คาบ ${r.requested_period_no}` : ''}${when ? ` · ${when}` : ''}</p>
        ${r.reason ? `<p>💬 ${r.reason}</p>` : ''}
        ${r.teacher_comment ? `<p class="${r.status==='approved'?'text-emerald-600':'text-red-500'}">👩‍🏫 ${r.teacher_comment}</p>` : ''}
      </div>
      ${r.status === 'pending' ? `
        <button onclick="window._stuCancelRequest(${r.id}, ${classId})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>` : ''}
    </div>`
  }

  const _todoContent = () => {
    const items = []

    // ── คำร้องที่รอดำเนินการ ──
    const pendingReqs = requests.filter(r => r.status === 'pending')
    if (pendingReqs.length > 0) {
      pendingReqs.forEach(r => {
        const col = r.class_score_columns
        const when = _daysUntilLabel(r.requested_date)
        items.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${r.request_type} — รอครูอนุมัติ</p>
              ${col ? `<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${col.assignment_name}</p>` : ''}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${_fmtDate(r.requested_date)}${r.requested_period_no ? ` · คาบ ${r.requested_period_no}` : ''}${when ? ` · ${when}` : ''}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)
      })
    }

    // ── คำร้องที่อนุมัติแล้ว รอสอบ ──
    const approvedReqs = requests.filter(r => r.status === 'approved' && r.exam_attended == null)
    if (approvedReqs.length > 0) {
      approvedReqs.forEach(r => {
        const col = r.class_score_columns
        const when = _daysUntilLabel(r.requested_date)
        items.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${r.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${col ? `<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${col.assignment_name}</p>` : ''}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${_fmtDate(r.requested_date)}${r.requested_period_no ? ` · คาบ ${r.requested_period_no}` : ''}${when ? ` · ${when}` : ''}</p>
              ${r.teacher_comment ? `<p class="text-xs text-gray-400 mt-0.5">💬 ${r.teacher_comment}</p>` : ''}
            </div>
          </div>`)
      })
    }

    // ── วันเรียนถัดไป (countdown) ──
    const sessionDates = [cls.day1_date, cls.day2_date, cls.day3_date,
                          cls.day4_date, cls.day5_date, cls.day6_date].filter(Boolean)
    const today = new Date(); today.setHours(0,0,0,0)
    const upcoming = sessionDates
      .map(d => { const dt = new Date(d); dt.setHours(0,0,0,0); return dt })
      .filter(d => d >= today)
      .sort((a,b) => a-b)

    if (upcoming.length > 0) {
      const next = upcoming[0]
      const diff = Math.round((next - today) / 86400000)
      const diffLabel = diff === 0 ? '🔴 วันนี้!' : diff === 1 ? '🟡 พรุ่งนี้' : `⏰ อีก ${diff} วัน`
      const dayName = DAY_TH[next.getDay()] ?? ''
      items.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${dayName}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${next.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${_fmtDate(next.toISOString().slice(0,10))}</p>
          </div>
          <span class="text-xs font-bold ${diff === 0 ? 'text-red-500' : diff === 1 ? 'text-amber-500' : 'text-emerald-600'}">${diffLabel}</span>
        </div>`)
    }

    // ── ประกาศของครูสำหรับห้องเรียนนี้ ──
    const ANN_TYPE_LABEL = {
      'general':      { label:'ประกาศ',                    icon:'📢', bg:'bg-gray-50',    border:'border-gray-200' },
      'deadline':     { label:'กำหนดส่งงาน/สอบ',           icon:'⏰', bg:'bg-red-50',     border:'border-red-200'  },
      'learning_doc': { label:'เอกสารประกอบการเรียน',       icon:'📄', bg:'bg-blue-50',    border:'border-blue-200' },
      'exercise_doc': { label:'เอกสารแบบฝึกเพิ่มเติม',     icon:'📝', bg:'bg-emerald-50', border:'border-emerald-200' },
      'exam_prep':    { label:'เอกสารแนวข้อสอบ',            icon:'📋', bg:'bg-amber-50',   border:'border-amber-200' },
    }
    const _fmtDeadline = (iso) => {
      if (!iso) return ''
      const d = new Date(iso)
      const now = new Date()
      const diffMs = d - now
      const diffMin = Math.floor(diffMs / 60000)
      const dateStr = d.toLocaleDateString('th-TH', { day:'numeric', month:'short', year:'2-digit', hour:'2-digit', minute:'2-digit' })
      if (diffMs < 0) return `<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${dateStr}</span>`
      if (diffMin < 60) return `<span class="text-red-600 font-bold text-xs">🔴 อีก ${diffMin} นาที · ${dateStr}</span>`
      const diffH = Math.floor(diffMin / 60)
      if (diffH < 24) return `<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${diffH} ชม. ${diffMin%60} น. · ${dateStr}</span>`
      const diffD = Math.floor(diffH / 24)
      return `<span class="text-amber-600 font-semibold text-xs">📅 อีก ${diffD} วัน · ${dateStr}</span>`
    }
    if (classAnns.length > 0) {
      // ปักหมุดขึ้นก่อน
      [...classAnns].sort((a,b) => (b.priority||0)-(a.priority||0)).forEach(a => {
        const t = ANN_TYPE_LABEL[a.ann_type] ?? ANN_TYPE_LABEL.general
        const deadlineHtml = a.ann_type === 'deadline' && a.deadline_at ? _fmtDeadline(a.deadline_at) : ''
        items.push(`
          <div class="rounded-2xl border ${t.border} ${t.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${t.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${a.priority > 0 ? `<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>` : ''}
                  <span class="text-[10px] text-gray-500">${t.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${a.title ?? ''}</p>
                ${a.body ? `<p class="text-xs text-gray-500 mt-1">${a.body}</p>` : ''}
                ${deadlineHtml ? `<div class="mt-2">${deadlineHtml}</div>` : ''}
                ${a.file_url ? `<a href="${a.file_url}" target="_blank" rel="noopener"
                  class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">
                  📎 เปิดไฟล์แนบ →</a>` : ''}
              </div>
            </div>
          </div>`)
      })
    }

    return `
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-bold text-gray-800">✅ ภารกิจ / สิ่งที่ต้องทำ</h2>
      </div>
      ${items.length ? `<div class="space-y-3">${items.join('')}</div>` : `
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
          <p class="text-4xl mb-2">🎉</p>
          <p class="text-sm font-medium text-gray-500">ไม่มีรายการที่ต้องทำ</p>
          <p class="text-xs mt-1">ถ้าครูประกาศกำหนดสอบหรือแจ้งงานในรายวิชา ระบบจะแสดงพร้อมนับถอยหลังที่นี่</p>
        </div>`}`
  }

  const _scoresContent = () => `
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${totalMax > 0 ? `<span class="text-xs text-gray-400">${pct.toFixed(0)}% รวม</span>` : ''}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${columns.length === 0
        ? `<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>`
        : `<div>
            ${_scoreTable(midCols, midScore, midMax, 'bg-blue-50', '📘 กลางภาค')}
            ${_scoreTable(finCols, finScore, finMax, 'bg-purple-50', '📙 ปลายภาค')}
            ${specialCols.length ? _scoreTable(specialCols, specialCols.reduce((s,c)=>s+_getVal(c),0), 0, 'bg-amber-50', '⭐ คะแนนพิเศษ/โบนัส') : ''}
          </div>`}
    </div>
    ${attTotal > 0 ? `
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${attPct !== null ? `<span class="text-xs text-gray-400">${attPresent}/${attTotal} คาบ · ${attPct}%</span>` : ''}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${attendance.map(a => `
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${a.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${ATT_COLORS[a.status]??'bg-gray-50 text-gray-400'}">
            ${ATT_LABELS[a.status]??'?'}
          </span>
        </div>`).join('')}
      </div>
    </div>` : ''}`

  const _requestsContent = () => `
    <button onclick="window._stuOpenRequest(${classId})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${requests.length ? `<div class="space-y-3">${requests.map(_requestCard).join('')}</div>` : `
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`

  const content = tab === 'scores'
    ? _scoresContent()
    : tab === 'requests'
      ? _requestsContent()
      : _todoContent()

  setContent(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable ? 'ตารางเรียน' : 'รายวิชาอื่น'}</button>
    ${_subjectHeader()}
    ${content}
  `)

  window._stuCancelRequest = async (id, targetClassId = classId) => {
    if (!confirm('ยืนยันยกเลิกคำร้องนี้?')) return
    try {
      await cancelExamRequest(id)
      showToast('ยกเลิกคำร้องแล้ว', 'success')
      window._stuOpenClassTab(targetClassId, 'requests')
    } catch (err) { showToast('ยกเลิกไม่สำเร็จ: '+(err.message??''), 'error') }
  }
}

// ─── Exam Requests List ───────────────────────────────────────────────────────
export async function renderStudentRequests(student) {
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const requests = await getMyExamRequests(student.id).catch(()=>[])

  const newBtn = `<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`

  if (!requests.length) {
    setContent(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${newBtn}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`)
    return
  }

  setContent(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${requests.length} รายการ)</span></h2>
    ${newBtn}
    <div class="space-y-3">
      ${requests.map(r => {
        const s = STATUS_BADGE[r.status] ?? STATUS_BADGE.pending
        const cls = r.classes
        const col = r.class_score_columns
        return `<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${cls?.master_subjects?.subject_name ?? '—'}</p>
              <p class="text-[11px] text-gray-400 font-mono">${cls?.master_subjects?.subject_code ?? ''}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${s.cls}">${s.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${r.request_type}</span></p>
            ${col ? `<p>📝 หัวข้อ: <span class="text-gray-700">${col.assignment_name}</span></p>` : ''}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${_fmtDate(r.requested_date)}</span>
              ${r.requested_period_no ? ` คาบ ${r.requested_period_no}` : ''}</p>
            ${r.reason ? `<p>💬 เหตุผล: <span class="text-gray-600">${r.reason}</span></p>` : ''}
            ${r.teacher_comment ? `<p class="${r.status==='approved'?'text-emerald-600':'text-red-500'}">
              👩‍🏫 ครู: ${r.teacher_comment}</p>` : ''}
          </div>
          ${r.status === 'pending' ? `
          <button onclick="window._stuCancelRequest(${r.id})"
            class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">
            ✕ ยกเลิกคำร้อง
          </button>` : ''}
        </div>`
      }).join('')}
    </div>
  `)

  window._stuCancelRequest = async (id) => {
    if (!confirm('ยืนยันยกเลิกคำร้องนี้?')) return
    try {
      await cancelExamRequest(id)
      showToast('ยกเลิกคำร้องแล้ว', 'success')
      renderStudentRequests(student)
    } catch (err) { showToast('ยกเลิกไม่สำเร็จ: '+(err.message??''), 'error') }
  }
}

// ─── Exam Request Form ────────────────────────────────────────────────────────
export async function renderExamRequestForm(student, classId) {
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const [classes, missedCount] = await Promise.all([
    getMyEnrolledClasses(student.id).catch(()=>[]),
    getMissedExamCount(student.id).catch(()=>0),
  ])
  const cls = classes.find(c => c.id === classId)
  if (!cls) { setContent(`<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>`); return }

  // บล็อกถ้าผิดนัด ≥ 2 ครั้ง
  if (missedCount >= 2) {
    setContent(`
      <button onclick="window._stuOpenClassTab(${classId},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`)
    return
  }

  // แสดง warning ถ้าผิดนัด 1 ครั้งแล้ว
  const missedWarning = missedCount === 1
    ? `<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`
    : ''

  const ms = cls.master_subjects
  const teacherId = ms?.teacher_id
  const teacher = ms?.teachers
  const teacherName = teacherId ? (teacher?.full_name ?? 'ครูผู้สอน') : 'ครูผู้สอน'
  const teacherInitial = String(teacherName || 'ค').trim().charAt(0).toUpperCase() || 'ค'
  const studentRoom = student?.main_room || student?.religion_room || cls.class_name || '—'
  let scheduleLoadError = null

  const [columns, schedule, periods] = await Promise.all([
    getScoreColumnsForClass(classId).catch(()=>[]),
    teacherId
      ? getTeacherFullSchedule(teacherId, classId).catch(err => {
          scheduleLoadError = err
          return []
        })
      : Promise.resolve([]),
    getSchoolPeriods().catch(()=>[]),
  ])

  // Build schedule lookup: { 'day_period': entry }, including multi-period spans.
  const schedMap = {}
  for (const row of schedule) {
    schedMap[`${row.day_of_week}_${row.period_no}`] = row
    const span = row.span_periods ?? 1
    for (let i = 1; i < span; i++) {
      schedMap[`${row.day_of_week}_${row.period_no + i}`] = { ...row, _secondary: true }
    }
  }

  const hasSchedule = schedule.length > 0
  if (!hasSchedule) {
    setContent(`
      <button onclick="window._stuOpenClassTab(${classId}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${ms?.subject_name ?? ''} · ${_roomDisplay(cls.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${!teacherId
              ? 'รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้'
              : scheduleLoadError
                ? `ระบบอ่านตารางครูไม่สำเร็จ: ${scheduleLoadError.message ?? scheduleLoadError}`
                : 'ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้'}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${!teacherId ? 'กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา' : 'กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ'}
          </p>
        </div>
      </div>
    `)
    return
  }

  const INPUT = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white'
  const SELECT = INPUT + ' cursor-pointer'

  // Persistent state for selected period (will be set via JS after render)
  let _selectedPeriod = null
  let _selectedWeekOffset = 0

  const SCHEDULE_COLOR_PRESETS = [
    { bg:'bg-emerald-100', text:'text-emerald-800' },
    { bg:'bg-indigo-100',  text:'text-indigo-800' },
    { bg:'bg-amber-100',   text:'text-amber-800' },
    { bg:'bg-rose-100',    text:'text-rose-800' },
    { bg:'bg-cyan-100',    text:'text-cyan-800' },
    { bg:'bg-violet-100',  text:'text-violet-800' },
    { bg:'bg-lime-100',    text:'text-lime-800' },
    { bg:'bg-orange-100',  text:'text-orange-800' },
    { bg:'bg-pink-100',    text:'text-pink-800' },
    { bg:'bg-teal-100',    text:'text-teal-800' },
    { bg:'bg-green-100',   text:'text-green-800' },
  ]
  const _scheduleColorKey = (subjectName, className, fallbackId = null) => {
    const subj = String(subjectName ?? '').trim()
    const room = String(className ?? '').trim()
    if (subj && room) return `${subj} — ${room}`
    if (subj) return subj
    return fallbackId != null ? String(fallbackId) : ''
  }
  const _colorForIndex = (idx) => {
    const preset = SCHEDULE_COLOR_PRESETS[idx % SCHEDULE_COLOR_PRESETS.length]
    return `${preset.bg} ${preset.text}`
  }
  let savedScheduleColors = {}
  try { savedScheduleColors = JSON.parse(localStorage.getItem(`scheduleColors_${teacherId ?? 'x'}`) ?? '{}') } catch {}
  const scheduleColorMap = {}
  let autoColorIdx = 0
  schedule.forEach(entry => {
    const key = _scheduleColorKey(entry.subject_name, entry.class_name, entry.subject_id)
    if (!key || scheduleColorMap[key] != null) return
    const savedIdx = savedScheduleColors[key] ?? savedScheduleColors[entry.subject_id] ?? savedScheduleColors[entry.subject_name]
    const parsedIdx = Number(savedIdx)
    scheduleColorMap[key] = Number.isFinite(parsedIdx) ? parsedIdx : autoColorIdx++
  })

  // Build full teacher schedule grid (Sun–Fri), where empty cells are free.
  const _buildScheduleGrid = (weekOffset = 0) => {
    const workDays = [0, 1, 2, 3, 4, 5]
    const dayNames = { 0:'อาทิตย์', 1:'จันทร์', 2:'อังคาร', 3:'พุธ', 4:'พฤหัส', 5:'ศุกร์' }
    const dayColors = { 0:'bg-red-50', 1:'bg-yellow-50', 2:'bg-pink-50', 3:'bg-green-50', 4:'bg-orange-50', 5:'bg-purple-50' }
    const weekDates = _getWeekDates(weekOffset)
    const today = new Date()
    today.setHours(0,0,0,0)

    const headerCells = workDays.map(d => {
      const date = weekDates[d]
      return `<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${dayColors[d]}">
        <p class="text-sm font-bold text-gray-700">${dayNames[d]}</p>
        <p class="text-xs text-gray-400">${date.getDate()}/${date.getMonth()+1}</p>
      </th>`
    }).join('')

    const rows = periods.map(p => {
      const start = p.start_time?.slice(0,5) ?? ''
      const end = p.end_time?.slice(0,5) ?? ''
      const cells = workDays.map(d => {
        const key = `${d}_${p.period_no}`
        const slot = schedMap[key]
        if (slot?._secondary) return ''
        const date = weekDates[d]
        const isPast = date < today
        if (!slot) {
          return `<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${p.period_no}" data-day="${d}" data-week-offset="${weekOffset}"
              ${isPast ? 'disabled aria-disabled="true"' : ''}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${isPast
                       ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                       : 'bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300'}">
              <span class="${isPast ? 'opacity-100 text-[10px]' : 'opacity-0 group-hover:opacity-100 text-2xl'} transition">${isPast ? 'ล็อก' : '＋'}</span>
            </button>
          </td>`
        }
        const span = slot.span_periods ?? 1
        const colorKey = _scheduleColorKey(slot.subject_name, slot.class_name, slot.subject_id)
        const colorIdx = scheduleColorMap[colorKey] ?? 0
        const colorCls = _colorForIndex(colorIdx)
        return `<td class="border border-gray-100 p-0" style="height:1px" ${span > 1 ? `rowspan="${span}"` : ''}>
          <div class="w-full h-full ${colorCls} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${slot.subject_name ?? 'ไม่ว่าง'}</p>
            ${slot.class_name ? `<p class="text-[10px] opacity-80 leading-tight">${_roomDisplay(slot.class_name)}</p>` : ''}
            ${slot.teacher_name ? `<p class="text-[9px] opacity-55 leading-tight">${slot.teacher_name}</p>` : ''}
            ${span > 1 ? `<p class="text-[9px] opacity-40 mt-0.5">${span} คาบ</p>` : ''}
          </div>
        </td>`
      }).join('')
      return `<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${p.period_no}</p>
          <p class="text-[10px] text-gray-400">${start}–${end}</p>
        </td>
        ${cells}
      </tr>`
    }).join('')

    return `
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${headerCells}
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`
  }

  const _weekOptionLabel = (offset) => {
    const dates = _getWeekDates(offset)
    const prefix = offset === 0 ? 'สัปดาห์นี้' : offset === 1 ? 'สัปดาห์หน้า' : `อีก ${offset} สัปดาห์`
    return `${prefix} (${_fmtDateTH(dates[0])} - ${_fmtDateTH(dates[5])})`
  }

  setContent(`
    <button onclick="window._stuOpenClass(${classId})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${ms?.subject_name ?? ''} · ${_roomDisplay(cls.class_name)}</p>
      ${missedWarning}

      ${hasSchedule ? `
      <div id="schedule-first-gate" class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-bold text-emerald-800">เลือกคาบว่างของครูก่อน</p>
        <p class="mt-1 text-xs text-emerald-600">ระบบจะเปิดตารางสอนให้เลือกวันและคาบ แล้วค่อยกรอกข้อมูลคำร้องต่อ</p>
      </div>` : ''}

      <form id="req-form" class="space-y-4 ${hasSchedule ? 'hidden' : ''}">
        <!-- ประเภทคำร้อง -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">ประเภทคำร้อง <span class="text-red-400">*</span></label>
          <div class="grid grid-cols-2 gap-2">
            <label class="req-type-opt flex items-center gap-2 border-2 border-gray-200 rounded-xl px-3 py-3 cursor-pointer has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50 transition">
              <input type="radio" name="req_type" value="สอบย้อนหลัง" class="accent-indigo-500" required />
              <span class="text-sm font-medium text-gray-700">สอบย้อนหลัง</span>
            </label>
            <label class="req-type-opt flex items-center gap-2 border-2 border-gray-200 rounded-xl px-3 py-3 cursor-pointer has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50 transition">
              <input type="radio" name="req_type" value="สอบปรับคะแนน" class="accent-indigo-500" />
              <span class="text-sm font-medium text-gray-700">สอบปรับคะแนน</span>
            </label>
          </div>
        </div>

        <!-- หัวข้อคะแนน -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">หัวข้อคะแนนที่ต้องการสอบ <span class="text-red-400">*</span></label>
          <select id="req-col" class="${SELECT}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${columns.map(c => `<option value="${c.id}">${c.assignment_name} (${c.assignment_type} · เต็ม ${c.max_score})</option>`).join('')}
          </select>
        </div>

        <!-- Schedule grid / manual date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันและคาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${hasSchedule ? `
          <button type="button" id="open-schedule-modal"
            class="w-full border-2 border-emerald-200 rounded-xl px-4 py-3 text-left bg-emerald-50 hover:bg-emerald-100 transition">
            <p class="text-sm font-semibold text-emerald-700">ดูตารางครูและเลือกคาบว่าง</p>
            <p id="schedule-picker-label" class="text-xs text-emerald-500 mt-0.5">แตะเพื่อเปิดตารางสอนของครูในสัปดาห์นี้</p>
          </button>
          <div id="period-summary" class="hidden mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p class="text-sm font-semibold text-emerald-700">✅ เลือกแล้ว: <span id="period-summary-text"></span></p>
          </div>
          <input type="hidden" id="req-date" />
          <input type="hidden" id="req-period-hidden" />
          ` : `
          <!-- No schedule data: show manual inputs -->
          <div class="space-y-3">
            <div>
              <label class="block text-xs text-gray-500 mb-1">วันที่ขอสอบ</label>
              <input type="date" id="req-date" class="${INPUT}"
                min="${new Date().toISOString().slice(0,10)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${SELECT}" required>
                <option value="">— เลือกคาบ —</option>
                ${periods.map(p => `<option value="${p.period_no}">คาบ ${p.period_no} (${p.start_time.slice(0,5)}–${p.end_time.slice(0,5)})</option>`).join('')}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${INPUT} resize-none"
            placeholder="ระบุเหตุผลที่ขาดสอบ..."></textarea>
        </div>

        <button type="submit" id="req-submit"
          class="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ยื่นคำร้อง
        </button>
      </form>
    </div>
    ${hasSchedule ? `
      <div id="teacher-schedule-modal" class="hidden fixed inset-0 z-[120] bg-black/50 p-4 items-center justify-center">
        <div class="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold shadow-sm">
                ${teacher?.image_url
                  ? `<img src="${teacher.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`
                  : `<span>${teacherInitial}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${teacherName} · ${ms?.subject_name ?? ''}</p>
                <p class="text-[11px] text-gray-400 mt-0.5 truncate">นักเรียน ${student?.full_name ?? '—'} · รหัส ${student?.student_code ?? '—'} · ห้อง ${studentRoom}</p>
              </div>
            </div>
            <button type="button" id="close-schedule-modal"
              class="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600">×</button>
          </div>
          <div class="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p class="text-[11px] text-emerald-600 font-medium">กรุณาเลือกคาบว่างก่อนกรอกคำร้อง · ช่องว่างที่ไม่ถูกล็อกเลือกได้</p>
            <select id="schedule-week-select"
              class="border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200">
              ${[0,1,2,3,4].map(offset => `<option value="${offset}">${_weekOptionLabel(offset)}</option>`).join('')}
            </select>
          </div>
          <div id="schedule-grid-wrap">${_buildScheduleGrid(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>` : ''}
  `)

  // Show/hide reason field based on type
  document.querySelectorAll('input[name="req_type"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const wrap = document.getElementById('req-reason-wrap')
      const show = radio.value === 'สอบย้อนหลัง'
      wrap.classList.toggle('hidden', !show)
      document.getElementById('req-reason')?.toggleAttribute('required', show)
    })
  })

  // Schedule grid: period cell click handlers
  if (hasSchedule) {
    const modal = document.getElementById('teacher-schedule-modal')
    document.getElementById('open-schedule-modal')?.addEventListener('click', () => {
      modal?.classList.remove('hidden')
      modal?.classList.add('flex')
    })
    document.getElementById('close-schedule-modal')?.addEventListener('click', () => {
      if (!_selectedPeriod) {
        window._stuOpenClassTab?.(classId, 'requests')
        return
      }
      modal?.classList.add('hidden')
      modal?.classList.remove('flex')
    })
    modal?.addEventListener('click', e => {
      if (e.target === modal && _selectedPeriod) {
        modal.classList.add('hidden')
        modal.classList.remove('flex')
      }
    })

    const bindScheduleButtons = () => {
      document.querySelectorAll('.sched-period-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
          const periodNo   = parseInt(btn.dataset.period)
          const dayOfWeek  = parseInt(btn.dataset.day)
          const weekOffset = parseInt(btn.dataset.weekOffset ?? _selectedWeekOffset)
          const weekDates  = _getWeekDates(weekOffset)
          const date       = weekDates[dayOfWeek]
          _selectedPeriod = { period_no: periodNo, day_of_week: dayOfWeek, date, week_offset: weekOffset }

          // Fill hidden inputs
          document.getElementById('req-date').value          = _localDateValue(date)
          document.getElementById('req-period-hidden').value = periodNo

          // Show summary
          const summary = document.getElementById('period-summary')
          const summaryText = document.getElementById('period-summary-text')
          summary?.classList.remove('hidden')
          if (summaryText) summaryText.textContent = `คาบ ${periodNo} วัน${DAY_TH[dayOfWeek]??''} ${_fmtDateTH(date)}`
          const pickerLabel = document.getElementById('schedule-picker-label')
          if (pickerLabel) pickerLabel.textContent = `เลือกคาบ ${periodNo} วัน${DAY_TH[dayOfWeek]??''} ${_fmtDateTH(date)} แล้ว`
          document.getElementById('schedule-first-gate')?.classList.add('hidden')
          document.getElementById('req-form')?.classList.remove('hidden')

          // Highlight selected cell, remove from others
          document.querySelectorAll('.sched-period-btn').forEach(b => {
            b.classList.toggle('ring-2',   b === btn)
            b.classList.toggle('ring-emerald-500', b === btn)
            b.classList.toggle('bg-emerald-200',   b === btn)
          })
          modal?.classList.add('hidden')
          modal?.classList.remove('flex')
        })
      })
    }

    bindScheduleButtons()
    document.getElementById('schedule-week-select')?.addEventListener('change', e => {
      _selectedWeekOffset = parseInt(e.target.value || '0')
      const wrap = document.getElementById('schedule-grid-wrap')
      if (wrap) wrap.innerHTML = _buildScheduleGrid(_selectedWeekOffset)
      bindScheduleButtons()
    })
    setTimeout(() => {
      modal?.classList.remove('hidden')
      modal?.classList.add('flex')
    }, 80)
  }

  // Submit
  document.getElementById('req-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn    = document.getElementById('req-submit')
    const type   = document.querySelector('input[name="req_type"]:checked')?.value
    const colId  = document.getElementById('req-col').value
    const reason = document.getElementById('req-reason')?.value.trim() || null

    // Get date + period from either hidden fields (schedule mode) or manual inputs
    const dateVal  = document.getElementById('req-date')?.value
    const periodVal = hasSchedule
      ? document.getElementById('req-period-hidden')?.value
      : document.getElementById('req-period-sel')?.value

    if (!type || !colId || !dateVal || !periodVal) {
      showToast('กรุณากรอกข้อมูลให้ครบ', 'warning')
      if (hasSchedule && !periodVal) {
        showToast('กรุณาเลือกคาบว่างจากตารางครู', 'warning')
        const modal = document.getElementById('teacher-schedule-modal')
        modal?.classList.remove('hidden')
        modal?.classList.add('flex')
      }
      return
    }
    if (type === 'สอบย้อนหลัง' && !reason) { showToast('กรุณาระบุเหตุผล','warning'); return }

    btn.disabled = true; btn.textContent = 'กำลังยื่น...'
    try {
      await submitExamRequest({
        student_id: student.id,
        class_id: classId,
        assignment_id: parseInt(colId),
        request_type: type,
        requested_date: dateVal,
        requested_period_no: parseInt(periodVal),
        reason: type === 'สอบย้อนหลัง' ? reason : null,
        status: 'pending',
      })
      showToast('ยื่นคำร้องสำเร็จ ✅', 'success')
      window._stuOpenClassTab(classId, 'requests')
    } catch (err) {
      showToast('ยื่นไม่สำเร็จ: '+(err.message??''), 'error')
    } finally { btn.disabled = false; btn.textContent = 'ยื่นคำร้อง' }
  })
}

// ─── Profile ──────────────────────────────────────────────────────────────────
export async function renderStudentProfile(student, onLogout) {
  const cfg = await getSystemConfig().catch(()=>({}))

  const _contactLinks = () => {
    const items = [
      cfg.contactPhone    && { icon:'📞', label: cfg.contactPhone,    href: `tel:${cfg.contactPhone.replace(/\s/g,'')}` },
      cfg.contactLine     && { icon:'💬', label: 'LINE OA',           href: cfg.contactLine.startsWith('http') ? cfg.contactLine : `https://line.me/R/ti/p/${cfg.contactLine}` },
      cfg.contactFacebook && { icon:'📘', label: 'Facebook',          href: cfg.contactFacebook },
      cfg.contactEmail    && { icon:'📧', label: cfg.contactEmail,    href: `mailto:${cfg.contactEmail}` },
      cfg.contactOther    && { icon:'🔗', label: cfg.contactOther,    href: null },
    ].filter(Boolean)
    if (!items.length) return ''
    return `
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-5 py-3 border-b border-gray-50">
          <p class="text-sm font-semibold text-gray-700">📞 ติดต่อผู้ดูแลระบบ</p>
        </div>
        <div class="px-5 py-3 space-y-2.5">
          ${items.map(l => l.href
            ? `<a href="${l.href}" target="_blank" rel="noopener"
                class="flex items-center gap-3 text-sm text-indigo-600 hover:text-indigo-800 transition">
                <span class="text-base">${l.icon}</span>
                <span>${l.label}</span>
               </a>`
            : `<div class="flex items-center gap-3 text-sm text-gray-600">
                <span class="text-base">${l.icon}</span>
                <span>${l.label}</span>
               </div>`
          ).join('')}
        </div>
      </div>`
  }

  setContent(`
    <h2 class="font-bold text-gray-800 mb-4">👤 โปรไฟล์ของฉัน</h2>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5 mb-4 flex items-center gap-4">
      <div class="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-3xl font-bold border-2 border-white shadow">
        ${student.image_url
          ? `<img src="${student.image_url}" class="w-full h-full object-cover"/>`
          : (student.full_name??'น').charAt(0)}
      </div>
      <div>
        <p class="font-bold text-gray-800 text-lg">${student.full_name}</p>
        <p class="text-sm text-gray-400 mt-0.5">รหัส ${student.student_code}</p>
        <p class="text-sm text-gray-500 mt-0.5">ห้อง ${student.main_room ?? '—'}</p>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-6">
      <div class="px-5 py-3.5 border-b border-gray-50 flex justify-between">
        <span class="text-sm text-gray-500">รหัสนักเรียน</span>
        <span class="text-sm font-medium text-gray-800">${student.student_code}</span>
      </div>
      <div class="px-5 py-3.5 border-b border-gray-50 flex justify-between">
        <span class="text-sm text-gray-500">ห้องเรียน</span>
        <span class="text-sm font-medium text-gray-800">${student.main_room ?? '—'}</span>
      </div>
      ${student.religion_room ? `
      <div class="px-5 py-3.5 flex justify-between">
        <span class="text-sm text-gray-500">ห้องศาสนา</span>
        <span class="text-sm font-medium text-gray-800">${student.religion_room}</span>
      </div>` : ''}
    </div>

    ${_contactLinks()}

    <button id="btn-show-my-qr"
      class="w-full mb-4 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm
             shadow-md shadow-emerald-200/60 transition flex items-center justify-center gap-2">
      🎫 แสดง QR Code ของฉัน
    </button>

    <button id="stu-logout-btn"
      class="w-full py-3.5 rounded-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold text-sm
             shadow-md shadow-red-200/60 transition flex items-center justify-center gap-2">
      🚪 ออกจากระบบ
    </button>

    <p class="text-center text-[10px] text-gray-300 mt-4 leading-relaxed">
      พัฒนาโดย <span class="text-gray-400 font-medium">KruHambalWaji</span><br/>
      ปพ.5 ออนไลน์ © 2026 <span id="btn-show-changelog-trigger" class="text-gray-400 hover:text-emerald-500 hover:underline cursor-pointer transition font-medium">v${APP_VERSION}</span>
    </p>
  `)

  document.getElementById('stu-logout-btn').addEventListener('click', () => {
    document.getElementById('stu-logout-confirm')?.remove()
    const modal = document.createElement('div')
    modal.id = 'stu-logout-confirm'
    modal.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6'
    modal.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-4xl mb-3">🚪</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ออกจากระบบ?</h3>
        <p class="text-xs text-gray-400 mb-6">คุณต้องการออกจากระบบใช่ไหมครับ</p>
        <div class="flex gap-3">
          <button id="stu-logout-cancel"
            class="flex-1 py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition">
            ยกเลิก
          </button>
          <button id="stu-logout-confirm-btn"
            class="flex-1 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm shadow-md shadow-red-200/60 transition">
            ยืนยัน
          </button>
        </div>
      </div>`
    document.body.appendChild(modal)
    modal.querySelector('#stu-logout-cancel').addEventListener('click', () => modal.remove())
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
    modal.querySelector('#stu-logout-confirm-btn').addEventListener('click', onLogout)
  })

  // Bind click event to generate dynamic expiring QR Code
  document.getElementById('btn-show-my-qr').addEventListener('click', async () => {
    const dailyLimit = parseInt(cfg.studentQrDailyLimit || '3', 10)
    const expirySeconds = parseInt(cfg.studentQrExpirySeconds || '60', 10)
    const storageKey = `qr_generation_logs_${student.id}`
    const todayStr = _localDateValue(new Date())
    let log = JSON.parse(localStorage.getItem(storageKey) || 'null')
    
    if (!log || log.date !== todayStr) {
      log = { date: todayStr, count: 0 }
    }
    
    if (log.count >= dailyLimit) {
      showToast(`คุณสร้าง QR Code ครบโควต้า ${dailyLimit} ครั้งของวันนี้แล้ว ⚠️`, 'warning')
      return
    }

    // Increment count and save to localStorage
    log.count += 1
    localStorage.setItem(storageKey, JSON.stringify(log))

    // Create full-screen modal
    document.getElementById('student-qr-modal')?.remove()
    const modal = document.createElement('div')
    modal.id = 'student-qr-modal'
    modal.className = 'fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade'
    modal.innerHTML = `
      <div class="text-center w-full max-w-sm">
        <div class="mb-5">
          <h3 class="text-2xl font-bold text-gray-800">🎫 QR Code ของฉัน</h3>
          <p class="text-sm font-semibold text-emerald-600 mt-1">${student.full_name}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส: ${student.student_code} · ห้อง: ${_roomDisplay(student.main_room)}</p>
        </div>
        
        <div class="relative w-64 h-64 mx-auto mb-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
          <canvas id="student-qr-canvas" class="w-56 h-56 object-contain"></canvas>
        </div>

        <div class="mb-8 px-4">
          <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-2.5">
            <div id="qr-timer-bar" class="bg-emerald-500 h-full w-full transition-all duration-1000 ease-linear"></div>
          </div>
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${expirySeconds}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${dailyLimit - log.count} / ${dailyLimit} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`
    document.body.appendChild(modal)

    // Draw QR Code
    const canvas = modal.querySelector('#student-qr-canvas')
    const now = Math.floor(Date.now() / 1000)
    const payload = `SQ:${student.student_code}:${now}`
    
    try {
      await QRCode.toCanvas(canvas, payload, {
        width: 220,
        margin: 1.5,
        color: {
          dark: '#111827',
          light: '#FFFFFF'
        }
      })
    } catch (err) {
      console.error('Failed to draw QR Code:', err)
      showToast('สร้าง QR Code ไม่สำเร็จ', 'error')
      modal.remove()
      return
    }

    // Start countdown
    let secondsLeft = expirySeconds
    const timerBar = modal.querySelector('#qr-timer-bar')
    const timerSec = modal.querySelector('#qr-timer-sec')
    
    const timer = setInterval(() => {
      secondsLeft -= 1
      if (timerSec) timerSec.textContent = secondsLeft
      if (timerBar) timerBar.style.width = `${(secondsLeft / expirySeconds) * 100}%`
      
      if (secondsLeft <= 0) {
        clearInterval(timer)
        modal.remove()
        showToast('QR Code หมดอายุและปิดตัวลงแล้ว ⏱', 'info')
      }
    }, 1000)

    // Bind Close Button
    modal.querySelector('#btn-close-qr').addEventListener('click', () => {
      clearInterval(timer)
      modal.remove()
    })
  })

  // Bind version label click to open changelog modal
  document.getElementById('btn-show-changelog-trigger')?.addEventListener('click', () => {
    checkAndShowChangelog(student.id, true)
  })
}

// ─── Scanner Dynamic Library Loader ──────────────────────────────────────────
async function loadHtml5Qrcode() {
  if (window.Html5Qrcode) return window.Html5Qrcode
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
    s.onload = () => resolve(window.Html5Qrcode)
    s.onerror = (err) => reject(new Error('โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต'))
    document.head.appendChild(s)
  })
}

// ─── Scanner Sound Beep Generator (Web Audio API) ──────────────────────────
function playBeep(type = 'success') {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    
    if (type === 'success') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(880, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12)
      osc.start()
      osc.stop(audioCtx.currentTime + 0.12)
    } else {
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(150, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3)
      osc.start()
      osc.stop(audioCtx.currentTime + 0.3)
    }
  } catch (e) {
    console.error('Audio beep failed', e)
  }
}

// ─── Calculate Active Week Number ──────────────────────────────────────────
function getWeekNumber(dateStr, cfg) {
  const weeks = _generatePrayerWeeks(cfg?.semester_start, [])
  const found = weeks.find(w => w.days.some(d => d.ds === dateStr))
  return found ? found.n : 1
}

// ─── Student Prayer Check-in Scanner Screen ──────────────────────────────────
export async function renderStudentPrayerScanner(student) {
  window._lastSuccessFeedbackHTML = ''

  // Show loader first while fetching config
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  // Fetch configs and roster
  const [systemConfig, roster] = await Promise.all([
    getSystemConfig().catch(() => ({})),
    getScannerRoster().catch(() => [])
  ])

  // Check permission for student or teacher
  let hasPermission = false
  if (student.student_code) {
    hasPermission = !!student.can_scan_prayer
  } else if (student.teacher_code) {
    const teacherCodes = (systemConfig.prayerScannerTeachers || '')
      .split(/[\s,]+/)
      .map(c => c.trim())
      .filter(Boolean)
    
    let profile = null
    try {
      const res = await supabase.from('profiles').select('role').eq('id', student.profile_id).maybeSingle()
      profile = res?.data ?? null
    } catch (e) {}
    
    hasPermission = teacherCodes.includes(student.teacher_code) ||
                    student.staff_type === 'แอดมิน' ||
                    student.position === 'admin' ||
                    profile?.role === 'admin'
  }

  if (!hasPermission) {
    setContent(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`)
    return
  }

  const isOperatorTeacher = !!student.teacher_code
  if (!isOperatorTeacher && !_isPrayerTimeWindow()) {
    setContent(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-100 text-3xl">
          🕌
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">นอกช่วงเวลาบันทึกกิจกรรมละหมาด</h3>
        <p class="text-xs text-gray-500 leading-relaxed">
          ระบบสแกนเปิดให้บันทึกเวลาเฉพาะช่วงเวลา <b>12:20 น. ถึง 12:50 น.</b> เท่านั้น<br>
          (ยกเว้นคุณครูที่สามารถเข้าใช้งานได้ตลอดเวลา)
        </p>
        <button id="scanner-btn-back-restricted" class="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl active:scale-95 transition-all shadow-sm">
          ← กลับหน้าหลัก
        </button>
      </div>`)

    document.getElementById('scanner-btn-back-restricted')?.addEventListener('click', () => {
      window._stuNav('overview')
    })
    return
  }

  // Hide the standard bottom navigation menu to prevent accidental navigation and maximize camera area
  const navEl = document.querySelector('nav.safe-area-bottom')
  if (navEl) navEl.classList.add('hidden')

  // Hide sidebar and adjust margins on teacher layout
  const sidebar = document.getElementById('sidebar')
  const mainWrapper = document.querySelector('.md\\:ml-64') || document.querySelector('body > div.md\\:ml-64')
  if (sidebar) sidebar.classList.add('hidden')
  if (mainWrapper) mainWrapper.classList.remove('md:ml-64')

  // Setup active scanner cleanups
  if (window._activePrayerScannerState) {
    try {
      if (window._activePrayerScannerState.html5Qrcode) {
        window._activePrayerScannerState.html5Qrcode.stop().catch(() => {})
      }
    } catch (e) {}
    if (window._activePrayerScannerState.focusInterval) clearInterval(window._activePrayerScannerState.focusInterval)
    if (window._activePrayerScannerState.syncInterval) clearInterval(window._activePrayerScannerState.syncInterval)
  }

  window._activePrayerScannerState = {
    html5Qrcode: null,
    focusInterval: null,
    syncInterval: null
  }

  // Setup memory of synced IDs for today and prefill from device history
  if (!window._syncedStudentIdsToday) window._syncedStudentIdsToday = new Set()

  const todayVal = _localDateValue(new Date())
  let deviceHistory = JSON.parse(localStorage.getItem('prayer_scan_history_today') || '[]')
  deviceHistory = deviceHistory.filter(r => r.check_date === todayVal)
  localStorage.setItem('prayer_scan_history_today', JSON.stringify(deviceHistory))
  deviceHistory.forEach(r => window._syncedStudentIdsToday.add(r.student_id))

  let inputMode = localStorage.getItem('prayer_scan_input_mode') || 'camera' // 'camera' | 'gun'
  let deviceMode = localStorage.getItem('prayer_scan_device_mode') || 'single' // 'single' | 'dual'
  let activeLocation = localStorage.getItem('prayer_scan_active_location') || 
    (student.gender === 'หญิง' ? 'musolla_female_1' : 'musolla_male')
  let isSyncing = false

  function renderUI() {
    const today = _localDateValue(new Date())
    const weekN = getWeekNumber(today, systemConfig)
    
    const html = `
      <!-- Flash green screen overlay -->
      <div id="scanner-flash" class="fixed inset-0 pointer-events-none z-50 bg-emerald-500 opacity-0 transition-opacity duration-150 hidden"></div>

      <!-- Header with back button -->
      <div class="flex items-center gap-3 mb-5">
        <button id="scanner-btn-back" class="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ← กลับ
        </button>
        <div class="min-w-0">
          <h2 class="font-extrabold text-gray-800 text-lg leading-tight">🕌 บันทึกเวลากิจกรรมละหมาด (สภานักเรียน)</h2>
          <p class="text-xs text-gray-400 mt-0.5">ผู้สแกน: ${student.full_name} · สัปดาห์ที่ ${weekN}</p>
        </div>
      </div>

      <!-- Settings panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">ช่องทางสแกน</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-input-camera" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${inputMode === 'camera' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}">
                📷 ใช้กล้อง
              </button>
              <button id="opt-input-gun" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${inputMode === 'gun' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}">
                🔌 ปืนยิงสแกน
              </button>
            </div>
          </div>
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">โหมดจอแสดงผล</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-device-single" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${deviceMode === 'single' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}">
                📱 เครื่องเดียว
              </button>
              <button id="opt-device-dual" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${deviceMode === 'dual' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}">
                📡 แยกสองเครื่อง
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📍 จุดพื้นที่สแกนปัจจุบัน (Active Location)</label>
          <select id="opt-active-location" class="w-full text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option value="musolla_male" ${activeLocation === 'musolla_male' ? 'selected' : ''}>🕌 มูซอลลาชาย (ม.1 - ม.5 ชาย)</option>
            <option value="masjid_kuwait" ${activeLocation === 'masjid_kuwait' ? 'selected' : ''}>🕌 มัสยิดคูเวต (ม.6, ปวช. ชาย)</option>
            <option value="musolla_female_1" ${activeLocation === 'musolla_female_1' ? 'selected' : ''}>🕌 มูซอลลาหญิง 1 (โรงอาหาร)</option>
            <option value="musolla_female_2" ${activeLocation === 'musolla_female_2' ? 'selected' : ''}>🕌 มูซอลลาหญิง 2 (อาคาร 5)</option>
          </select>
        </div>

        <!-- iPad Monitor Display Link -->
        <div id="dual-monitor-link-area" class="mt-3.5 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3 ${deviceMode === 'dual' ? '' : 'hidden'}">
          <div class="min-w-0">
            <h4 class="font-bold text-xs text-gray-700">📡 เปิดหน้าจอแสดงผลจอแยก</h4>
            <p class="text-[10px] text-gray-400 mt-0.5">เปิดลิงก์นี้บน iPad เครื่องที่ 2 เพื่อยืนยันตัวตนให้นักเรียนเห็น</p>
          </div>
          <button id="btn-open-monitor" class="px-3 py-1.5 bg-emerald-500 text-white font-bold text-xs rounded-lg hover:bg-emerald-600 shadow transition-all flex-shrink-0 active:scale-95">
            เปิดหน้าจอแยก ↗
          </button>
        </div>
      </div>

      <!-- Live Sync status panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4 flex items-center justify-between gap-4">
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span id="sync-indicator" class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h4 id="sync-title" class="font-bold text-xs text-gray-700">ซิงก์สำเร็จทั้งหมดแล้ว</h4>
          </div>
          <p id="sync-desc" class="text-[10px] text-gray-400 mt-0.5">พร้อมบันทึกประวัติละหมาด</p>
        </div>
        <button id="btn-manual-sync" class="px-3 py-1.5 bg-gray-100 text-gray-700 font-bold text-xs rounded-lg hover:bg-gray-200 transition-all flex-shrink-0 active:scale-95">
          ซิงก์ตอนนี้
        </button>
      </div>

      <!-- Scanners Area -->
      <div id="scanner-view-camera" class="relative overflow-hidden bg-slate-950 rounded-3xl w-full max-w-sm mx-auto aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4 ${inputMode === 'camera' ? '' : 'hidden'}">
        <div id="camera-reader" class="w-full h-full rounded-2xl overflow-hidden"></div>
        
        <!-- Custom Square Viewfinder Overlay -->
        <div class="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
          <!-- Dark semi-transparent background -->
          <div class="absolute inset-0 bg-black/35"></div>
          <!-- Viewfinder Frame -->
          <div class="relative w-56 h-56 rounded-3xl border-2 border-white/20 bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden">
            <!-- Neon Corner Brackets -->
            <div class="absolute top-0 left-0 w-6 h-6 border-t-[3.5px] border-l-[3.5px] border-emerald-400 rounded-tl-md"></div>
            <div class="absolute top-0 right-0 w-6 h-6 border-t-[3.5px] border-r-[3.5px] border-emerald-400 rounded-tr-md"></div>
            <div class="absolute bottom-0 left-0 w-6 h-6 border-b-[3.5px] border-l-[3.5px] border-emerald-400 rounded-bl-md"></div>
            <div class="absolute bottom-0 right-0 w-6 h-6 border-b-[3.5px] border-r-[3.5px] border-emerald-400 rounded-br-md"></div>
            <!-- Laser Sweeper Line -->
            <div class="w-full h-[2.5px] bg-emerald-400 opacity-90 absolute top-0 shadow-[0_0_8px_rgba(52,211,153,0.85)] animate-laser-move"></div>
          </div>
        </div>
      </div>

      <style>
        @keyframes laser-sweep {
          0% { top: 0%; opacity: 0.3; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
        .animate-laser-move {
          animation: laser-sweep 2.8s infinite ease-in-out;
        }
      </style>

      <div id="scanner-view-gun" class="border border-dashed border-gray-300 bg-white rounded-3xl py-12 px-6 text-center shadow-sm mb-4 transition-all relative ${inputMode === 'gun' ? '' : 'hidden'}">
        <input id="scanner-gun-input" type="text" inputmode="none" class="absolute opacity-0 pointer-events-none" autocomplete="off" />
        <div class="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
          <span class="text-3xl animate-pulse">🔌</span>
        </div>
        <h3 class="font-bold text-sm text-gray-800">เชื่อมต่อเครื่องสแกน (Scanner Gun) เรียบร้อย</h3>
        <p class="text-xs text-gray-400 mt-1">นำปืนยิงสแกนเนอร์บาร์โค้ดสแกนที่ QR Code ของนักเรียนได้ทันที</p>
        <span class="inline-block mt-4 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100">ระบบรักษาโฟกัสอัตโนมัติค้างไว้</span>
      </div>

      <!-- Active Check-In Popup Overlay -->
      <div id="scanner-feedback-container" class="hidden my-4 relative z-30 transition-all duration-300"></div>

      <!-- Roster Lookup Status -->
      <div id="roster-status" class="px-4 py-2 bg-gray-100 rounded-xl text-center text-[10px] text-gray-400 mb-4 border border-gray-200/50">
        บัญชีรายชื่อสภานักเรียน: โหลดแล้ว ${roster.length} คน
      </div>

      <!-- Today's Local Scans List -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
          <h3 class="font-bold text-gray-700 text-xs uppercase tracking-wider">ประวัติการสแกนในเครื่องวันนี้</h3>
          <span id="scan-count-badge" class="px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-[10px] font-bold">0 คน</span>
        </div>
        <div id="scan-list" class="divide-y divide-gray-50 max-h-60 overflow-y-auto">
          <div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>
        </div>
      </div>
    `
    const contentContainer = document.getElementById('stu-content') || document.getElementById('main-content')
    if (contentContainer) {
      contentContainer.innerHTML = `<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${html}</div>`
    }

    // Bind Back Button
    document.getElementById('scanner-btn-back').addEventListener('click', () => {
      stopCamera()
      if (window._activePrayerScannerState) {
        if (window._activePrayerScannerState.focusInterval) clearInterval(window._activePrayerScannerState.focusInterval)
        if (window._activePrayerScannerState.syncInterval) clearInterval(window._activePrayerScannerState.syncInterval)
      }
      if (navEl) navEl.classList.remove('hidden')

      const sidebar = document.getElementById('sidebar')
      const mainWrapper = document.querySelector('.md\\:ml-64') || document.querySelector('body > div.md\\:ml-64')
      if (sidebar) sidebar.classList.remove('hidden')
      if (mainWrapper) mainWrapper.classList.add('md:ml-64')

      if (student.teacher_code) {
        import('./views.js').then(({ renderPrayerAdmin }) => {
          renderPrayerAdmin(student)
        })
      } else {
        window._stuNav('overview')
      }
    })

    // Option: Input mode
    document.getElementById('opt-input-camera').addEventListener('click', () => {
      setInputMode('camera')
    })
    document.getElementById('opt-input-gun').addEventListener('click', () => {
      setInputMode('gun')
    })

    // Option: Device mode
    document.getElementById('opt-device-single').addEventListener('click', () => {
      setDeviceMode('single')
    })
    document.getElementById('opt-device-dual').addEventListener('click', () => {
      setDeviceMode('dual')
    })

    // Link: Display Screen
    document.getElementById('btn-open-monitor').addEventListener('click', () => {
      window.open('/pp5online/prayer-monitor.html', '_blank')
    })

    // Button: Manual sync
    document.getElementById('btn-manual-sync').addEventListener('click', () => {
      triggerBackgroundSync()
    })

    // Option: Active location
    document.getElementById('opt-active-location').addEventListener('change', (e) => {
      activeLocation = e.target.value
      localStorage.setItem('prayer_scan_active_location', activeLocation)
      showToast('เปลี่ยนจุดสแกนปัจจุบันสำเร็จ', 'info')
    })

    // Start systems
    updateQueueUI()
    if (inputMode === 'camera') {
      startCamera()
    } else {
      startScannerGun()
    }
  }

  function setInputMode(mode) {
    if (mode === inputMode) return
    inputMode = mode
    localStorage.setItem('prayer_scan_input_mode', mode)
    
    if (mode === 'camera') {
      stopScannerGun()
      document.getElementById('scanner-view-gun').classList.add('hidden')
      document.getElementById('scanner-view-camera').classList.remove('hidden')
      startCamera()
    } else {
      stopCamera()
      document.getElementById('scanner-view-camera').classList.add('hidden')
      document.getElementById('scanner-view-gun').classList.remove('hidden')
      startScannerGun()
    }
    
    // Update Option active classes
    document.getElementById('opt-input-camera').className = `flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${mode === 'camera' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}`
    document.getElementById('opt-input-gun').className = `flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${mode === 'gun' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}`
  }

  function setDeviceMode(mode) {
    if (mode === deviceMode) return
    deviceMode = mode
    localStorage.setItem('prayer_scan_device_mode', mode)

    const linkArea = document.getElementById('dual-monitor-link-area')
    if (mode === 'dual') {
      linkArea.classList.remove('hidden')
    } else {
      linkArea.classList.add('hidden')
    }

    // Update Option active classes
    document.getElementById('opt-device-single').className = `flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${mode === 'single' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}`
    document.getElementById('opt-device-dual').className = `flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${mode === 'dual' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}`
  }

  // ─── Camera Handler ────────────────────────────────────────────────────────
  async function startCamera() {
    try {
      const Html5Qrcode = await loadHtml5Qrcode()
      const html5Qrcode = new Html5Qrcode("camera-reader")
      window._activePrayerScannerState.html5Qrcode = html5Qrcode

      let lastScannedCode = null
      let lastScannedTime = 0

      const config = { 
        fps: 25, 
        aspectRatio: 1.0
      }

      await html5Qrcode.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          if (decodedText === lastScannedCode && Date.now() - lastScannedTime < 1800) {
            return // skip repeat scanned text
          }
          lastScannedCode = decodedText
          lastScannedTime = Date.now()
          processCheckIn(decodedText)
        },
        () => {
          // silent camera failures/no QR found
        }
      )
    } catch (err) {
      console.error('Camera open failed:', err)
      showToast('ไม่สามารถเปิดใช้งานกล้องได้: ' + (err.message || 'ไม่มีสิทธิ์เข้าถึง'), 'error')
    }
  }

  function stopCamera() {
    if (window._activePrayerScannerState && window._activePrayerScannerState.html5Qrcode) {
      window._activePrayerScannerState.html5Qrcode.stop().catch(() => {})
      window._activePrayerScannerState.html5Qrcode = null
    }
  }

  // ─── Scanner Gun Wedge Handler ─────────────────────────────────────────────
  function startScannerGun() {
    const gunInput = document.getElementById('scanner-gun-input')
    if (!gunInput) return

    // Keep wedge input auto-focused continuously
    gunInput.focus()
    const focusInterval = setInterval(() => {
      if (document.activeElement !== gunInput && document.getElementById('scanner-gun-input')) {
        gunInput.focus()
      }
    }, 1000)
    window._activePrayerScannerState.focusInterval = focusInterval

    gunInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        const code = gunInput.value.trim()
        gunInput.value = ''
        if (code) {
          processCheckIn(code)
        }
      }
    })
  }

  function stopScannerGun() {
    if (window._activePrayerScannerState && window._activePrayerScannerState.focusInterval) {
      clearInterval(window._activePrayerScannerState.focusInterval)
      window._activePrayerScannerState.focusInterval = null
    }
  }

  // ─── Main Check-in Handler ──────────────────────────────────────────────────
  async function processCheckIn(studentRawCode) {
    console.log('[Scanner] Raw scanned text:', studentRawCode)
    if (!studentRawCode) return

    if (!isOperatorTeacher && !_isPrayerTimeWindow()) {
      playBeep('error')
      showScanFeedback(null, studentRawCode, 'ไม่อยู่ในช่วงเวลาบันทึกกิจกรรมละหมาด (12:20 - 12:50 น.)')
      return
    }

    let studentCode = String(studentRawCode).trim()
    let isQrCodeExpired = false

    if (studentCode.startsWith('SQ:')) {
      const parts = studentCode.split(':')
      if (parts.length === 3) {
        const [, actualCode, timestampStr] = parts
        const qrTime = parseInt(timestampStr, 10)
        const nowTime = Math.floor(Date.now() / 1000)
        const timeDiff = nowTime - qrTime
        const expiryLimit = parseInt(systemConfig.studentQrExpirySeconds || '60', 10)
        console.log(`[Scanner] Dynamic QR parsed - Code: ${actualCode}, QR Time: ${qrTime}, Now: ${nowTime}, Diff: ${timeDiff}s, Allowed Expiry: ${expiryLimit}s`)

        if (isNaN(qrTime) || timeDiff > expiryLimit || timeDiff < -expiryLimit) {
          isQrCodeExpired = true
          studentCode = actualCode.trim()
        } else {
          studentCode = actualCode.trim()
        }
      } else {
        console.warn('[Scanner] Invalid SQ payload parts count:', parts.length)
        playBeep('error')
        showScanFeedback(null, studentRawCode, 'รูปแบบ QR Code ไม่ถูกต้อง')
        return
      }
    }

    // Roster Lookup (instant offline lookup)
    const student = roster.find(s => String(s.student_code).trim() === studentCode)
    console.log('[Scanner] Lookup result for code:', studentCode, student ? student.full_name : 'not found')

    if (isQrCodeExpired) {
      console.warn('[Scanner] QR Code has expired')
      const expiryLimit = parseInt(systemConfig.studentQrExpirySeconds || '60', 10)
      playBeep('error')
      showScanFeedback(student, studentCode, `QR Code นี้หมดอายุแล้ว (เกิน ${expiryLimit} วินาที)`)
      return
    }

    if (!student) {
      playBeep('error')
      showScanFeedback(null, studentCode, 'ไม่พบข้อมูลนักเรียนรหัสนี้')
      return
    }

    const today = _localDateValue(new Date())

    // Prevent Double Checks in same session/queue
    const queue = JSON.parse(localStorage.getItem('prayer_scan_queue') || '[]')
    const isAlreadyQueued = queue.some(r => r.student_id === student.id && r.check_date === today)
    if (isAlreadyQueued) {
      playBeep('error')
      showScanFeedback(student, studentCode, 'เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว')
      return
    }

    if (window._syncedStudentIdsToday.has(student.id)) {
      playBeep('error')
      showScanFeedback(student, studentCode, 'เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว')
      return
    }

    const weekN = getWeekNumber(today, systemConfig)
    const newRecord = {
      student_id: student.id,
      main_room: student.main_room,
      check_date: today,
      status: 'pray',
      week_number: weekN,
      location: activeLocation,
      full_name: student.full_name,
      student_code: student.student_code
    }

    // Append queue
    queue.push(newRecord)
    localStorage.setItem('prayer_scan_queue', JSON.stringify(queue))

    // Add to device history
    let deviceHistory = JSON.parse(localStorage.getItem('prayer_scan_history_today') || '[]')
    deviceHistory = deviceHistory.filter(r => r.check_date === today)
    if (!deviceHistory.some(r => r.student_id === student.id)) {
      deviceHistory.unshift({
        student_id: student.id,
        full_name: student.full_name,
        student_code: student.student_code,
        main_room: student.main_room,
        check_date: today
      })
      localStorage.setItem('prayer_scan_history_today', JSON.stringify(deviceHistory))
    }
    
    // Save locally synced cache
    window._syncedStudentIdsToday.add(student.id)

    // Feedbacks
    playBeep('success')
    triggerScreenFlash()
    showScanFeedback(student, studentCode, 'บันทึกสำเร็จลงเครื่องแล้ว', true)
    
    updateQueueUI()

    // Trigger sync in background
    triggerBackgroundSync()
  }

  // ─── Feedback Panel Layouts ────────────────────────────────────────────────
  function showScanFeedback(student, code, message, isSuccess = false) {
    const container = document.getElementById('scanner-feedback-container')
    if (!container) return

    if (window._feedbackTimeout) clearTimeout(window._feedbackTimeout)

    if (isSuccess && student) {
      const photoHTML = student.image_url
        ? `<img src="${student.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`
        : `<div class="w-16 h-20 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-2xl flex items-center justify-center">${student.full_name.charAt(0)}</div>`

      container.innerHTML = `
        <div class="bg-white/95 border border-emerald-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${photoHTML}
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${student.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${student.student_code} · ห้อง ${_roomDisplay(student.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${message}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${student.id}" data-name="${student.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`

      // Store HTML to revert back to if an error scan happens
      window._lastSuccessFeedbackHTML = container.innerHTML
      bindUndoButtonListener(container)

    } else {
      const name = student ? student.full_name : 'ไม่พบข้อมูล'
      const detail = student ? `รหัส ${student.student_code} · ห้อง ${_roomDisplay(student.main_room)}` : `สแกนพบ: ${code}`
      container.innerHTML = `
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${name}</h4>
            <p class="text-xs text-gray-500 truncate">${detail}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${message}</p>
          </div>
        </div>`

      container.classList.remove('hidden')

      // Auto-revert to last success card or hide after 3.5 seconds
      window._feedbackTimeout = setTimeout(() => {
        if (window._lastSuccessFeedbackHTML) {
          container.innerHTML = window._lastSuccessFeedbackHTML
          bindUndoButtonListener(container)
        } else {
          container.innerHTML = ''
          container.classList.add('hidden')
        }
      }, 3500)
      return
    }

    container.classList.remove('hidden')
  }

  function bindUndoButtonListener(container) {
    const btn = container.querySelector('#btn-undo-scan')
    if (!btn) return
    btn.addEventListener('click', () => {
      const sid = parseInt(btn.dataset.sid, 10)
      const name = btn.dataset.name
      undoScan(sid, name)
    })
  }

  async function undoScan(studentId, fullName) {
    const today = _localDateValue(new Date())

    // 1. Remove from local queue
    let queue = JSON.parse(localStorage.getItem('prayer_scan_queue') || '[]')
    queue = queue.filter(r => !(r.student_id === studentId && r.check_date === today))
    localStorage.setItem('prayer_scan_queue', JSON.stringify(queue))

    // 2. Remove from local history
    let deviceHistory = JSON.parse(localStorage.getItem('prayer_scan_history_today') || '[]')
    deviceHistory = deviceHistory.filter(r => !(r.student_id === studentId && r.check_date === today))
    localStorage.setItem('prayer_scan_history_today', JSON.stringify(deviceHistory))

    // 3. Remove from local synced cache
    window._syncedStudentIdsToday.delete(studentId)

    // 4. Reset the last success feedback HTML
    window._lastSuccessFeedbackHTML = ''
    const container = document.getElementById('scanner-feedback-container')
    if (container) {
      container.innerHTML = ''
      container.classList.add('hidden')
    }

    // 5. Update UI list and badge counts
    updateQueueUI()

    // 6. Delete from Supabase server
    showToast(`กำลังยกเลิกรายการของ ${fullName}...`, 'info')
    try {
      const { error } = await supabase
        .from('prayer_records')
        .delete()
        .eq('student_id', studentId)
        .eq('check_date', today)
        .is('teacher_id', null)
      if (error) throw error
      showToast(`ยกเลิกบันทึกของ ${fullName} สำเร็จ ✕`, 'success')
    } catch (err) {
      console.warn('Failed to delete from server (offline?):', err)
      showToast(`ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)`, 'warning')
    }
  }

  function triggerScreenFlash() {
    const flash = document.getElementById('scanner-flash')
    if (!flash) return
    flash.classList.remove('hidden', 'opacity-0')
    flash.classList.add('opacity-40')
    setTimeout(() => {
      flash.classList.remove('opacity-40')
      flash.classList.add('opacity-0')
      setTimeout(() => flash.classList.add('hidden'), 150)
    }, 120)
  }

  // ─── Queue Sync Handling ───────────────────────────────────────────────────
  function updateQueueUI(syncing = false) {
    const queue = JSON.parse(localStorage.getItem('prayer_scan_queue') || '[]')
    let deviceHistory = JSON.parse(localStorage.getItem('prayer_scan_history_today') || '[]')
    const today = _localDateValue(new Date())
    deviceHistory = deviceHistory.filter(r => r.check_date === today)

    // UI badge
    const badge = document.getElementById('scan-count-badge')
    if (badge) {
      badge.textContent = `${deviceHistory.length} คน`
    }

    const indicator = document.getElementById('sync-indicator')
    const title = document.getElementById('sync-title')
    const desc = document.getElementById('sync-desc')

    if (!indicator || !title || !desc) return

    if (syncing) {
      indicator.className = 'w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse'
      title.textContent = 'กำลังซิงก์ประวัติเวลากิจกรรม...'
      desc.textContent = `กำลังส่งข้อมูล ${queue.length} คนขึ้นเซิร์ฟเวอร์`
    } else if (queue.length > 0) {
      indicator.className = 'w-2.5 h-2.5 rounded-full bg-amber-500'
      title.textContent = `ค้างส่ง ${queue.length} รายการ (ออฟไลน์)`
      desc.textContent = 'ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต'
    } else {
      indicator.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500'
      title.textContent = 'ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว'
      desc.textContent = 'พร้อมบันทึกประวัติละหมาด'
    }

    // Render list preview using deviceHistory
    const scanList = document.getElementById('scan-list')
    if (scanList) {
      if (deviceHistory.length === 0) {
        scanList.innerHTML = `<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>`
      } else {
        scanList.innerHTML = deviceHistory.map((r, i) => {
          const isOffline = queue.some(q => q.student_id === r.student_id)
          const badgeHTML = isOffline
            ? `<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>`
            : `<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>`

          return `
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${deviceHistory.length - i}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${r.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${r.student_code} · ห้อง ${_roomDisplay(r.main_room)}</p>
              </div>
              ${badgeHTML}
            </div>
          `
        }).join('')
      }
    }
  }

  async function triggerBackgroundSync() {
    if (isSyncing) return
    const queue = JSON.parse(localStorage.getItem('prayer_scan_queue') || '[]')
    if (!queue.length) return

    isSyncing = true
    updateQueueUI(true)

    try {
      await saveScannedPrayerRecords(queue)
      localStorage.setItem('prayer_scan_queue', JSON.stringify([]))
      showToast('ซิงก์บันทึกสแกนละหมาดสำเร็จ', 'success')
    } catch (err) {
      console.warn('Sync failed, offline backup kept:', err)
    } finally {
      isSyncing = false
      updateQueueUI()
    }
  }

  // Setup periodic sync retry every 8 seconds in background
  const syncInterval = setInterval(() => {
    triggerBackgroundSync()
  }, 8000)
  window._activePrayerScannerState.syncInterval = syncInterval

  renderUI()
}

// ─── Version Changelogs List ────────────────────────────────────────────────
const CHANGELOGS = {
  '10.17.32': [
    '🔒 ปรับปรุงสิทธิ์การเข้าถึงข้อมูล (RLS Select Policy) ของระบบสแกนละหมาด ให้ครูที่ปรึกษา (ศาสนา/สามัญ) มองเห็นข้อมูลที่สภานักเรียนสแกนเข้ามาได้ถูกต้อง'
  ],
  '10.17.31': [
    '🕌 จำกัดช่วงเวลาระบบสแกนบันทึกการละหมาด (สภานักเรียน) เฉพาะ 12:20 - 12:50 น. (ยกเว้นครูเข้าได้ตลอดเวลา)',
    '🚫 ซ่อนแบนเนอร์เข้าใช้งานสำหรับนักเรียนแกนนำนอกช่วงเวลา และแจ้งเตือนบล็อกหากมีการสแกนนอกช่วงเวลาดังกล่าว'
  ],
  '10.17.30': [
    '🔔 เพิ่ม Modal แจ้งเตือนอนุมัติใบอนุญาตออกนอกห้องสำเร็จไว้หน้าสุดกลางจอครู (z-index สูงสุด)',
    '🛡️ บล็อกการเด้งเปิดหน้าต่างประวัติ/สถิตินักเรียนทับซ้อนเมื่อคลิกอนุมัติออกห้องหรือคลิกป้ายจับเวลา'
  ],
  '10.17.29': [
    '🔧 แก้ไขข้อผิดพลาดในการตรวจสอบรหัสประจำตัวนักเรียน (Type Coercion bug) ในระบบสแกนตรวจสอบใบอนุญาตออกนอกห้องเรียน'
  ],
  '10.17.28': [
    '🖼️ เพิ่มการแสดงรูปนักเรียนและตัวเลือกพิมพ์เวลาได้อิสระใน Modal ขอออกนอกห้อง',
    '📷 ปรับปรุงระบบสแกนเนอร์ตรวจสอบใบอนุญาตให้มีหน้าตา/ Viewfinder และอนิเมชั่นเลเซอร์เหมือนระบบสแกนละหมาด พร้อมบังคับใช้งานกล้องหลัง'
  ],
  '10.17.27': [
    '🔧 แก้ไข ReferenceError: getActiveLeavePermissionsForClass is not defined ในหน้าเช็คชื่อ'
  ],
  '10.17.26': [
    '📷 เพิ่มปุ่มทางลัดด่วนบน Header เพื่อเข้าใช้กล้องสแกนตรวจสอบใบอนุญาตออกนอกห้องเรียนได้ทันใจ'
  ],
  '10.17.25': [
    '🚪 เพิ่มระบบใบอนุญาตออกนอกห้องเรียนแบบดิจิทัล (Digital Out-of-Class Pass) พร้อมกล้องสแกนตรวจสอบสิทธิ์ เวลานับถอยหลังเป็นวินาที และเสียงเตือนอัจฉริยะ'
  ],
  '10.17.24': [
    '👦👧 เพิ่มตัวเลือกกรองเฉพาะเพศชาย/หญิง ในการจัดทำและสั่งพิมพ์การ์ด QR Code นักเรียน'
  ],
  '10.17.23': [
    '🧹 กรองชื่อห้องเรียนซ้ำซ้อนในหน้าเลือกพิมพ์การ์ด QR Code ให้อ่านง่ายและเหลือตัวเลือกละ 1 ห้อง'
  ],
  '10.17.22': [
    '🖨️ เพิ่มระบบจัดทำและสั่งพิมพ์การ์ด QR Code ของนักเรียนเป็นรายห้อง จัดเรียงขนาด A4 ปรับจำนวนคอลัมน์ได้อิสระ'
  ],
  '10.17.21': [
    '⚡ ปรับปรุงระบบพรีวิวและคอลัมน์พิมพ์การ์ด QR Code'
  ],
  '10.17.20': [
    '🃏 ผนวกรวมระบบบัตรคำศัพท์ (Flashcards) เข้ากับห้องเรียน การสุ่มนักเรียนตอบ และบันทึกคะแนนสะสม'
  ],
  '10.17.16': [
    '🛠️ แก้ไขฉุกเฉินกรณีสถานะนักเรียนทุกห้องกลายเป็นไม่เรียน และป้องกันการเลือกชีตผิดแล้วปิดรายชื่อทั้งระบบ'
  ],
  '10.17.3': [
    '🔧 ปรับปรุงระบบซิงก์ข้อมูลนักเรียนอัตโนมัติให้คงสถานะการปิดใช้งาน (ไม่เรียน) ที่คุณครูตั้งค่าไว้ ไม่ให้ถูกเขียนทับกลับมาเป็นกำลังเรียน'
  ],
  '10.17.2': [
    '⚡ เพิ่มความเสถียรและความรวดเร็วในโหมดแยกหน้าจอ iPad (ดึงข้อมูลถี่ขึ้นทุก 1.5 วินาที พร้อมส่งเสียง/กะพริบไล่เลียงกัน)',
    '📝 ปรับปรุงประวัติด้านล่างของหน้าจอเครื่องสแกน (มือถือ) ให้แสดงประวัติการสแกนของวันนี้ค้างไว้ถาวร (พร้อมสถานะสำเร็จ/ออฟไลน์)',
    '📡 เพิ่มสคริปต์ SQL ช่วยเปิดระบบ Realtime Replication ในฐานข้อมูลเพื่อการซิงก์ที่รวดเร็วแบบทันใจ'
  ],
  '10.17.1': [
    '🎨 ปรับปรุงหน้าจอ Monitor แยกเป็นโหมดสว่าง (Light Theme) สวยงาม อ่านง่ายขึ้น',
    '🖥️ ออกแบบ Layout จอ Monitor ใหม่ แสดงข้อมูลคนสแกนล่าสุดแบบเด่นชัดค้างไว้ และแสดงประวัติก่อนหน้าในตารางด้านขวา'
  ],
  '10.17.0': [
    '📍 เพิ่มระบบเลือกจุดพื้นที่สแกนปัจจุบัน (Active Location) 4 จุดสำหรับการสแกนละหมาด',
    '🖥️ หน้าจอ Monitor รองรับการกรองข้อมูลแบบ Real-time และประวัติการสแกนตามพื้นที่จริง'
  ],
  '10.16.1': [
    '⚡ ปรับปรุงกล้องสแกน QR Code ให้รวดเร็วและลื่นไหลขึ้น (เพิ่มเป็น 25 FPS)',
    '🔍 ปรับขนาดกล่องเล็งกล้องให้ใหญ่ขึ้นและยืดหยุ่นตามขนาดหน้าจออัตโนมัติ เล็งง่ายขึ้น'
  ],
  '10.16.0': [
    '🕌 เพิ่มระบบเช็คชื่อละหมาดด้วย QR Code และเครื่องสแกนบาร์โค้ด',
    '🔌 รองรับปืนยิงสแกนเนอร์พร้อมโหมดล็อคโฟกัสอัตโนมัติ',
    '📡 รองรับโหมดแยกหน้าจอ iPad ตัวที่ 2 แสดงการเช็คชื่อแบบ Real-time',
    '📴 ระบบ Offline Queue บันทึกข้อมูลลงเครื่องทันทีกรณีเน็ตหลุด และซิงก์ออฟไลน์พื้นหลังแบบกลุ่ม',
    '🔊 เสียงแจ้งเตือนและระบบกะพริบสีเขียว (Green Flash) ยืนยันความสำเร็จ'
  ],
  '10.15.0': [
    '📊 ปรับปรุงหน้าจอเกรดเฉลี่ยของฉัน (GPA)',
    '📚 เพิ่มระบบฟิลเตอร์ค้นหารายวิชาและคะแนนสะสม',
    '📢 ระบบแจ้งเตือนประกาศสำคัญและวันส่งงาน'
  ]
}

// ─── Check and Show Changelog Pop-up ───────────────────────────────────────
export function checkAndShowChangelog(studentId, forceShow = false) {
  const currentVersion = APP_VERSION
  const lastVersion = localStorage.getItem(`last_seen_version_${studentId}`)
  
  if (forceShow || lastVersion !== currentVersion) {
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[500] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6'
    
    let changelogHTML = ''
    const versions = Object.keys(CHANGELOGS).sort().reverse()
    
    versions.forEach(v => {
      if (forceShow || !lastVersion || v > lastVersion || v === currentVersion) {
        changelogHTML += `
          <div class="mb-4 last:mb-0">
            <h4 class="font-bold text-emerald-600 text-xs tracking-wider uppercase mb-1.5">เวอร์ชัน v${v}</h4>
            <ul class="text-xs space-y-1.5 list-none pl-0">
              ${CHANGELOGS[v].map(item => `<li class="flex items-start gap-2 text-gray-700 font-semibold"><span class="text-emerald-500">✦</span><span>${item}</span></li>`).join('')}
            </ul>
          </div>`
      }
    })
    
    modal.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 animate-fade">
        <div class="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 border border-emerald-100 text-2xl shadow-sm">
          ✨
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">ยินดีต้อนรับสู่เวอร์ชันใหม่!</h3>
        <p class="text-xs text-gray-400 mb-4 font-medium">เราได้อัปเดตระบบและปรับปรุงการใช้งานสำหรับคุณ</p>
        
        <div class="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-5 max-h-60 overflow-y-auto text-left">
          ${changelogHTML || '<p class="text-xs text-gray-400 text-center">ไม่มีการเปลี่ยนแปลงล่าสุด</p>'}
        </div>
        
        <button id="btn-changelog-close" class="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-xs font-bold shadow-md shadow-emerald-200/60 transition active:scale-95">
          รับทราบและเริ่มใช้งาน
        </button>
      </div>`
      
    document.body.appendChild(modal)
    
    const closeBtn = modal.querySelector('#btn-changelog-close')
    const dismissModal = () => {
      modal.remove()
      localStorage.setItem(`last_seen_version_${studentId}`, currentVersion)
    }
    
    closeBtn.addEventListener('click', dismissModal)
    modal.addEventListener('click', e => {
      if (e.target === modal) dismissModal()
    })
  }
}

