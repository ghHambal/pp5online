import {
  getMyEnrolledClasses, getMyScores, getMyAttendance,
  getMyExamRequests, submitExamRequest, cancelExamRequest,
  getTeacherFreePeriods, getTeacherFullSchedule, getSchoolPeriods, getScoreColumnsForClass,
} from './student-api.js'

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
const DAY_TH = ['','จ','อ','พ','พฤ','ศ','ส','อา']

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

// ─── Week date helpers ────────────────────────────────────────────────────────
function _getWeekDates() {
  const today = new Date()
  const dow = today.getDay() // 0=Sun
  const monday = new Date(today)
  monday.setDate(today.getDate() - (dow === 0 ? 6 : dow - 1))
  const dates = {}
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
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4 flex items-center gap-3">
      <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold border-2 border-white shadow">
        ${student.image_url
          ? `<img src="${student.image_url}" class="w-full h-full object-cover"/>`
          : (student.full_name??'น').charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold text-gray-800 text-base truncate">${student.full_name}</p>
        <p class="text-xs text-gray-400 mt-0.5">รหัส ${student.student_code} · ${student.main_room??'—'}</p>
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
      <button onclick="window._stuNav('requests')"
        class="bg-indigo-600 text-white rounded-xl p-4 text-left hover:bg-indigo-700 transition">
        <p class="text-xl mb-1">📝</p>
        <p class="font-semibold text-sm">ยื่นคำร้อง</p>
        <p class="text-[11px] text-indigo-200 mt-0.5">สอบย้อนหลัง / ปรับคะแนน</p>
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

// ─── Subjects List ────────────────────────────────────────────────────────────
export async function renderStudentSubjects(student) {
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const classes = await getMyEnrolledClasses(student.id).catch(()=>[])

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

  const _renderCard = (cls) => {
    const ms = cls.master_subjects
    const teacher = ms?.teachers
    const c = _subjectColorCls(cls)
    return `<div onclick="window._stuOpenClass(${cls.id})"
      class="${c.bg} ${c.border} border border-l-4 ${c.accent} rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold ${c.text} text-sm leading-tight">${ms?.subject_name ?? '—'}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${ms?.subject_code ?? ''}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          ${cls.skill_group
            ? `<span class="text-[10px] px-2 py-0.5 rounded-full ${c.tag} font-medium">${cls.skill_group}</span>`
            : ''}
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
        <span class="ml-auto text-xs text-gray-400">${cls.class_name ?? ''}</span>
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
        <div class="space-y-3">
          ${items.map(_renderCard).join('')}
        </div>
      </div>`
  }

  setContent(`
    <h2 class="font-bold text-gray-800 mb-4">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${classes.length} วิชา)</span></h2>
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
        <p class="text-[11px] text-gray-400 mt-0.5">${teacher?.full_name ?? '—'} · ${cls.class_name ?? ''}</p>
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

    return `
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-bold text-gray-800">✅ สิ่งที่ต้องทำ</h2>
        <button onclick="window._stuOpenClassTab(${classId}, 'scores')" class="text-xs text-emerald-600 font-medium">ดูคะแนน →</button>
      </div>
      ${items.length ? `<div class="space-y-3">${items.join('')}</div>` : `
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-300">
          <p class="text-4xl mb-2">🎉</p>
          <p class="text-sm font-medium text-gray-500">ตอนนี้ยังไม่มีรายการที่ต้องทำ</p>
          <p class="text-xs mt-1">ถ้าครูประกาศกำหนดสอบหรือแจ้งงานในรายวิชา ระบบจะแสดงพร้อมนับถอยหลังที่นี่</p>
        </div>`}
      <button onclick="window._stuOpenRequest(${classId})"
        class="w-full mt-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition">
        📝 ยื่นคำร้องในรายวิชานี้
      </button>`
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
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📝 คำร้องรายวิชา</h2>
      <button onclick="window._stuOpenRequest(${classId})" class="text-xs text-indigo-600 font-semibold">+ ยื่นคำร้อง</button>
    </div>
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

  const classes = await getMyEnrolledClasses(student.id).catch(()=>[])
  const cls = classes.find(c => c.id === classId)
  if (!cls) { setContent(`<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>`); return }

  const ms = cls.master_subjects
  const teacherId = ms?.teacher_id

  const [columns, schedule, periods] = await Promise.all([
    getScoreColumnsForClass(classId).catch(()=>[]),
    teacherId ? getTeacherFullSchedule(teacherId).catch(()=>[]) : Promise.resolve([]),
    getSchoolPeriods().catch(()=>[]),
  ])

  const periodMap = Object.fromEntries(periods.map(p => [p.period_no, p]))
  const weekDates = _getWeekDates()

  // Build schedule lookup: { 'day_period': { is_free, class_id } }
  const schedMap = {}
  for (const row of schedule) {
    schedMap[`${row.day_of_week}_${row.period_no}`] = row
  }

  const hasSchedule = schedule.length > 0

  const INPUT = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white'
  const SELECT = INPUT + ' cursor-pointer'

  // Persistent state for selected period (will be set via JS after render)
  let _selectedPeriod = null

  // Build schedule grid HTML (Mon–Fri = days 1–5)
  const _buildScheduleGrid = () => {
    const workDays = [1, 2, 3, 4, 5]
    const dayNames = { 1:'จ', 2:'อ', 3:'พ', 4:'พฤ', 5:'ศ' }

    const headerCells = workDays.map(d => {
      const date = weekDates[d]
      return `<th class="py-2 px-1 text-center">
        <p class="text-xs font-bold text-gray-600">${dayNames[d]}</p>
        <p class="text-[10px] text-gray-400">${date.getDate()}/${date.getMonth()+1}</p>
      </th>`
    }).join('')

    const rows = periods.map(p => {
      const cells = workDays.map(d => {
        const key = `${d}_${p.period_no}`
        const slot = schedMap[key]
        if (!slot || slot.is_free) {
          // No schedule for this slot, or explicitly free — clickable.
          return `<td class="py-1 px-1">
            <button type="button"
              data-period="${p.period_no}" data-day="${d}"
              class="sched-period-btn w-full flex flex-col items-center justify-center h-12 rounded-lg
                     bg-emerald-50 border-2 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-400
                     transition cursor-pointer text-emerald-700 text-[10px] font-medium">
              <span class="font-bold text-xs">คาบ${p.period_no}</span>
              <span class="text-emerald-500">${slot?.is_free ? p.start_time.slice(0,5) : 'ว่าง'}</span>
            </button>
          </td>`
        } else {
          // Teacher has a scheduled class here — disabled.
          return `<td class="py-1 px-1">
            <div class="flex flex-col items-center justify-center h-12 rounded-lg
                        bg-gray-100 border border-gray-200 text-gray-400 text-[10px]">
              <span class="font-bold text-xs text-gray-400">คาบ${p.period_no}</span>
              <span class="text-[9px]">ไม่ว่าง</span>
            </div>
          </td>`
        }
      }).join('')
      return `<tr>${cells}</tr>`
    }).join('')

    return `
    <div class="overflow-x-auto rounded-xl border border-gray-100 bg-white">
      <table class="w-full min-w-[280px]">
        <thead class="bg-gray-50 border-b border-gray-100">
          <tr>${headerCells}</tr>
        </thead>
        <tbody class="divide-y divide-gray-50">${rows}</tbody>
      </table>
    </div>`
  }

  setContent(`
    <button onclick="window._stuOpenClass(${classId})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-5">${ms?.subject_name ?? ''} · ${cls.class_name ?? ''}</p>

      <form id="req-form" class="space-y-4">
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
        <div class="w-full max-w-lg max-h-[88vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div>
              <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
              <p class="text-xs text-gray-400 mt-0.5">${teacherId ? (ms?.teachers?.full_name ?? 'ครูผู้สอน') : 'ครูผู้สอน'} · ${ms?.subject_name ?? ''}</p>
            </div>
            <button type="button" id="close-schedule-modal"
              class="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600">×</button>
          </div>
          <p class="text-[11px] text-emerald-600 font-medium mb-2">สีเขียว = คาบว่างที่เลือกได้</p>
          ${_buildScheduleGrid()}
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันในสัปดาห์ปัจจุบันและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
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
      modal?.classList.add('hidden')
      modal?.classList.remove('flex')
    })
    modal?.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.add('hidden')
        modal.classList.remove('flex')
      }
    })

    document.querySelectorAll('.sched-period-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const periodNo  = parseInt(btn.dataset.period)
        const dayOfWeek = parseInt(btn.dataset.day)
        const date      = weekDates[dayOfWeek]
        _selectedPeriod = { period_no: periodNo, day_of_week: dayOfWeek, date }

        // Fill hidden inputs
        document.getElementById('req-date').value          = date.toISOString().slice(0, 10)
        document.getElementById('req-period-hidden').value = periodNo

        // Show summary
        const summary = document.getElementById('period-summary')
        const summaryText = document.getElementById('period-summary-text')
        summary?.classList.remove('hidden')
        if (summaryText) summaryText.textContent = `คาบ ${periodNo} วัน${DAY_TH[dayOfWeek]??''} ${_fmtDateTH(date)}`
        const pickerLabel = document.getElementById('schedule-picker-label')
        if (pickerLabel) pickerLabel.textContent = `เลือกคาบ ${periodNo} วัน${DAY_TH[dayOfWeek]??''} ${_fmtDateTH(date)} แล้ว`

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

    <button id="stu-logout-btn"
      class="w-full py-3 rounded-xl border-2 border-red-200 text-red-500 font-semibold text-sm
             hover:bg-red-50 transition">
      ออกจากระบบ
    </button>
  `)

  document.getElementById('stu-logout-btn').addEventListener('click', onLogout)
}
