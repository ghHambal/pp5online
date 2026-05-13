import {
  getMyEnrolledClasses, getMyScores, getMyAttendance,
  getMyExamRequests, submitExamRequest, cancelExamRequest,
  getMissedExamCount,
  getTeacherFullSchedule, getSchoolPeriods, getScoreColumnsForClass,
  getMyLifeSkillScores, getMyReadingScores, getMyPrayerRecords,
} from './student-api.js'
import { getThemeConfig } from './theme.js'
import { getSystemConfig } from './api.js'

const _roomDisplay = (name) => (name ?? '').replace(/\/\d+/, '').trim()

// ─── Helpers ──────────────────────────────────────────────────────────────────
function setContent(html) {
  document.getElementById('stu-content').innerHTML =
    `<div class="max-w-lg mx-auto px-4 py-4 pb-6 animate-fade">${html}</div>`
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

  const [classes, requests] = await Promise.all([
    getMyEnrolledClasses(student.id).catch(()=>[]),
    getMyExamRequests(student.id).catch(()=>[]),
  ])
  const pending = requests.filter(r => r.status === 'pending')
  const recent  = requests.slice(0, 3)

  setContent(`
    <!-- Profile card -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4 flex items-center gap-4">
      <div class="w-14 h-20 rounded-t-2xl rounded-b-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold shadow">
        ${student.image_url
          ? `<img src="${student.image_url}" class="w-full h-full object-cover object-top"/>`
          : (student.full_name??'น').charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold text-gray-800 text-base truncate">${student.full_name}</p>
        <p class="text-xs text-gray-400 mt-0.5">รหัส ${student.student_code} · ${_roomDisplay(student.main_room??'—')}</p>
      </div>
    </div>

    <!-- Stats row -->
    <div class="grid grid-cols-3 gap-3 mb-4">
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">${classes.length}</p>
        <p class="text-[10px] text-gray-400 mt-0.5">รายวิชา</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center">
        <p class="text-2xl font-bold text-amber-600">${pending.length}</p>
        <p class="text-[10px] text-gray-400 mt-0.5">คำร้องรอดำเนินการ</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center">
        <p class="text-2xl font-bold text-blue-600">${requests.length}</p>
        <p class="text-[10px] text-gray-400 mt-0.5">คำร้องทั้งหมด</p>
      </div>
    </div>

    <!-- Quick actions -->
    <div class="grid grid-cols-2 gap-3 mb-4">
      <button onclick="window._stuNav('subjects')"
        class="bg-emerald-600 text-white rounded-xl p-4 text-left hover:bg-emerald-700 transition">
        <p class="text-xl mb-1">📚</p>
        <p class="font-semibold text-sm">รายวิชาของฉัน</p>
        <p class="text-[11px] text-emerald-200 mt-0.5">${classes.length} วิชา</p>
      </button>
      <button onclick="window._stuNav('scores')"
        class="bg-indigo-600 text-white rounded-xl p-4 text-left hover:bg-indigo-700 transition">
        <p class="text-xl mb-1">📊</p>
        <p class="font-semibold text-sm">คะแนนของฉัน</p>
        <p class="text-[11px] text-indigo-200 mt-0.5">ทักษะชีวิต / ละหมาด / อ่านฯ</p>
      </button>
    </div>

    <!-- Recent requests -->
    ${recent.length > 0 ? `
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
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
    <section class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
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
    <section class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
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
      <section class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
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
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-sm p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
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
      class="border border-l-4 rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-md transition"
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
      <div class="flex items-center gap-3 mt-3 pt-3 border-t border-white/60">
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
        <div class="${isGrid ? 'grid grid-cols-3 gap-2' : 'space-y-3'}">
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

  const [{ columns, scores }, attendance, requestsAll] = await Promise.all([
    getMyScores(student.id, classId).catch(()=>({ columns:[], scores:[] })),
    getMyAttendance(student.id, classId).catch(()=>[]),
    getMyExamRequests(student.id).catch(()=>[]),
  ])
  const requests = requestsAll.filter(r => r.classes?.id === classId)

  const scoreMap = Object.fromEntries(scores.map(s => [s.assignment_id, s]))
  const ms = cls.master_subjects
  const teacher = ms?.teachers

  const midCols  = columns.filter(c => c.assignment_type !== 'final')
  const finCols  = columns.filter(c => c.assignment_type === 'final')
  const midMax   = midCols.reduce((s,c) => s+(c.max_score||0), 0)
  const finMax   = finCols.reduce((s,c) => s+(c.max_score||0), 0)
  const midScore = midCols.reduce((s,c) => s+(parseFloat(scoreMap[c.id]?.final_score??scoreMap[c.id]?.original_score??0)||0), 0)
  const finScore = finCols.reduce((s,c) => s+(parseFloat(scoreMap[c.id]?.final_score??scoreMap[c.id]?.original_score??0)||0), 0)
  const total    = midScore + finScore
  const totalMax = midMax + finMax
  const pct      = totalMax > 0 ? (total / totalMax * 100) : 0

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
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">/${col.max_score}</td>
      <td class="py-2.5 px-3 text-center text-xs ${val != null ? 'text-gray-500' : 'text-gray-300'} whitespace-nowrap">
        ${pctCol != null ? pctCol+'%' : '—%'}
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
        <p class="text-2xl font-bold text-gray-800">${totalMax > 0 ? total.toFixed(1).replace(/\.0$/,'') : '—'}</p>
        <p class="text-[10px] text-gray-400">/${totalMax} คะแนน</p>
        ${grade
          ? `<span class="inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${grade.cls}">${grade.label}</span>`
          : ''}
      </div>
    </div>`

  const _requestCard = (r) => {
    const s = STATUS_BADGE[r.status] ?? STATUS_BADGE.pending
    const col = r.class_score_columns
    const when = _daysUntilLabel(r.requested_date)
    return `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
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
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
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

    return `
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-bold text-gray-800">✅ ภารกิจ / สิ่งที่ต้องทำ</h2>
      </div>
      ${items.length ? `<div class="space-y-3">${items.join('')}</div>` : `
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-300">
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
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      ${columns.length === 0
        ? `<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>`
        : `<div>
            ${_scoreTable(midCols, midScore, midMax, 'bg-blue-50', '📘 กลางภาค')}
            ${_scoreTable(finCols, finScore, finMax, 'bg-purple-50', '📙 ปลายภาค')}
          </div>`}
    </div>
    ${attTotal > 0 ? `
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
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
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`

  const content = tab === 'scores'
    ? _scoresContent()
    : tab === 'requests'
      ? _requestsContent()
      : _todoContent()

  setContent(`
    <button onclick="window._stuNav('subjects')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← รายวิชาอื่น</button>
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
        return `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
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

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
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

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
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
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
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
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4 flex items-center gap-4">
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

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
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

    <button id="stu-logout-btn"
      class="w-full py-3 rounded-xl border-2 border-red-200 text-red-500 font-semibold text-sm
             hover:bg-red-50 transition">
      ออกจากระบบ
    </button>
  `)

  document.getElementById('stu-logout-btn').addEventListener('click', onLogout)
}
