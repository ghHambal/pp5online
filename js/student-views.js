import {
  getMyEnrolledClasses, getMyScores, getMyAttendance,
  getMyExamRequests, submitExamRequest, cancelExamRequest,
  getTeacherFreePeriods, getSchoolPeriods, getScoreColumnsForClass,
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

function _gradeColor(pct) {
  if (pct >= 80) return 'text-emerald-700'
  if (pct >= 65) return 'text-blue-600'
  if (pct >= 50) return 'text-amber-600'
  return 'text-red-500'
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

  setContent(`
    <h2 class="font-bold text-gray-800 mb-4">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${classes.length} วิชา)</span></h2>
    <div class="space-y-3">
      ${classes.map(cls => {
        const ms = cls.master_subjects
        const teacher = ms?.teachers
        const skillColors = {
          ภาษา:'bg-blue-50 border-blue-100', ชีวิต:'bg-emerald-50 border-emerald-100',
          วิชาการ:'bg-orange-50 border-orange-100', ศาสนามัธยม:'bg-amber-50 border-amber-100',
        }
        const bg = skillColors[cls.skill_group] ?? 'bg-white border-gray-100'
        return `<div onclick="window._stuOpenClass(${cls.id})"
          class="${bg} rounded-2xl border shadow-sm p-4 cursor-pointer hover:shadow-md transition">
          <div class="flex items-start justify-between gap-2">
            <div class="flex-1 min-w-0">
              <p class="font-bold text-gray-800 text-sm leading-tight">${ms?.subject_name ?? '—'}</p>
              <p class="text-xs text-gray-400 mt-0.5 font-mono">${ms?.subject_code ?? ''}</p>
            </div>
            <div class="flex flex-col items-end gap-1 flex-shrink-0">
              ${cls.skill_group ? `<span class="text-[10px] px-2 py-0.5 rounded-full bg-white/80 text-gray-600 border border-gray-100">${cls.skill_group}</span>` : ''}
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
      }).join('')}
    </div>
  `)
}

// ─── Subject Detail ───────────────────────────────────────────────────────────
export async function renderStudentSubjectDetail(student, classId) {
  setContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const classes = await getMyEnrolledClasses(student.id).catch(()=>[])
  const cls = classes.find(c => c.id === classId)
  if (!cls) { setContent(`<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>`); return }

  const [{ columns, scores }, attendance] = await Promise.all([
    getMyScores(student.id, classId).catch(()=>({ columns:[], scores:[] })),
    getMyAttendance(student.id, classId).catch(()=>[]),
  ])

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

  const _scoreRow = (col) => {
    const sc = scoreMap[col.id]
    const raw = parseFloat(sc?.original_score ?? 0) || 0
    const fin = parseFloat(sc?.final_score ?? sc?.original_score ?? 0) || 0
    const hasRetake = sc?.retake_score != null
    const pctCol = col.max_score > 0 ? fin/col.max_score*100 : 0
    return `<div class="flex items-center gap-2 py-2.5 border-b border-gray-50 last:border-0">
      <div class="flex-1 min-w-0">
        <p class="text-sm text-gray-700 truncate">${col.assignment_name}</p>
        <p class="text-[10px] text-gray-400">${col.assignment_type} · เต็ม ${col.max_score}</p>
      </div>
      <div class="text-right flex-shrink-0">
        ${sc ? `
          <p class="font-bold text-sm ${_gradeColor(pctCol)}">${fin > 0 ? fin.toFixed(1).replace(/\.0$/,'') : '—'}</p>
          ${hasRetake ? `<p class="text-[10px] text-gray-400">ปรับ: ${sc.retake_score}</p>` : ''}
        ` : `<p class="text-sm text-gray-300">—</p>`}
      </div>
    </div>`
  }

  setContent(`
    <button onclick="window._stuNav('subjects')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <!-- Header card -->
    <div class="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-5 text-white mb-4">
      <p class="text-xs text-emerald-200 font-mono mb-1">${ms?.subject_code ?? ''}</p>
      <h2 class="font-bold text-lg leading-tight">${ms?.subject_name ?? '—'}</h2>
      <p class="text-xs text-emerald-200 mt-1">${teacher?.full_name ?? '—'} · ${cls.class_name ?? ''}</p>
      <div class="mt-4 flex items-end justify-between">
        <div>
          <p class="text-xs text-emerald-200">คะแนนรวม</p>
          <p class="text-3xl font-bold">${total > 0 ? total.toFixed(1).replace(/\.0$/,'') : '—'}<span class="text-sm font-normal text-emerald-300">/${totalMax}</span></p>
        </div>
        ${attPct !== null ? `
        <div class="text-right">
          <p class="text-xs text-emerald-200">เข้าเรียน</p>
          <p class="text-xl font-bold">${attPct}%</p>
          <p class="text-[10px] text-emerald-300">${attPresent}/${attTotal} คาบ</p>
        </div>` : ''}
      </div>
    </div>

    <!-- Submit request button -->
    <button onclick="window._stuOpenRequest(${cls.id})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>

    <!-- Scores -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50">
        <h3 class="font-semibold text-gray-700 text-sm">📊 คะแนนย่อย</h3>
      </div>
      ${columns.length === 0 ? `<p class="px-4 py-6 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>` : `
      <div class="px-4">
        ${midCols.length > 0 ? `
        <p class="text-[10px] font-semibold text-blue-500 uppercase tracking-wider mt-3 mb-1">กลางภาค (${midScore.toFixed(1).replace(/\.0$/,'')}/${midMax})</p>
        ${midCols.map(_scoreRow).join('')}` : ''}
        ${finCols.length > 0 ? `
        <p class="text-[10px] font-semibold text-purple-500 uppercase tracking-wider mt-3 mb-1">ปลายภาค (${finScore.toFixed(1).replace(/\.0$/,'')}/${finMax})</p>
        ${finCols.map(_scoreRow).join('')}` : ''}
      </div>`}
    </div>

    <!-- Attendance summary -->
    ${attTotal > 0 ? `
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
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
    </div>` : ''}
  `)
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

  const [columns, freePeriods, periods] = await Promise.all([
    getScoreColumnsForClass(classId).catch(()=>[]),
    teacherId ? getTeacherFreePeriods(teacherId).catch(()=>[]) : Promise.resolve([]),
    getSchoolPeriods().catch(()=>[]),
  ])

  const periodMap = Object.fromEntries(periods.map(p => [p.period_no, p]))

  const INPUT = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white'
  const SELECT = INPUT + ' cursor-pointer'

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

        <!-- วันที่ -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">วันที่ขอสอบ <span class="text-red-400">*</span></label>
          <input type="date" id="req-date" class="${INPUT}" required
            min="${new Date().toISOString().slice(0,10)}" />
        </div>

        <!-- คาบ -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">คาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${freePeriods.length > 0 ? `
          <div class="space-y-1.5">
            <p class="text-[11px] text-emerald-600 font-medium mb-2">✅ คาบว่างของครู (แนะนำ)</p>
            <div class="grid grid-cols-3 gap-2">
              ${freePeriods.map(fp => {
                const p = periodMap[fp.period_no]
                return `<label class="flex flex-col items-center border-2 border-gray-200 rounded-xl px-2 py-2 cursor-pointer
                               has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50 transition text-center">
                  <input type="radio" name="req_period" value="${fp.period_no}" class="accent-emerald-500 mb-1" required />
                  <span class="text-xs font-bold text-gray-700">คาบ ${fp.period_no}</span>
                  <span class="text-[9px] text-gray-400">${DAY_TH[fp.day_of_week]??'—'}</span>
                  ${p ? `<span class="text-[9px] text-gray-400">${p.start_time.slice(0,5)}</span>` : ''}
                </label>`
              }).join('')}
            </div>
          </div>` : `
          <select id="req-period-sel" class="${SELECT}" required>
            <option value="">— เลือกคาบ —</option>
            ${periods.map(p => `<option value="${p.period_no}">คาบ ${p.period_no} (${p.start_time.slice(0,5)}–${p.end_time.slice(0,5)})</option>`).join('')}
          </select>`}
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

  // Submit
  document.getElementById('req-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('req-submit')
    const type = document.querySelector('input[name="req_type"]:checked')?.value
    const colId = document.getElementById('req-col').value
    const date = document.getElementById('req-date').value
    const periodRadio = document.querySelector('input[name="req_period"]:checked')
    const periodSel = document.getElementById('req-period-sel')
    const period = periodRadio?.value || periodSel?.value
    const reason = document.getElementById('req-reason')?.value.trim() || null

    if (!type || !colId || !date || !period) { showToast('กรุณากรอกข้อมูลให้ครบ','warning'); return }
    if (type === 'สอบย้อนหลัง' && !reason) { showToast('กรุณาระบุเหตุผล','warning'); return }

    btn.disabled = true; btn.textContent = 'กำลังยื่น...'
    try {
      await submitExamRequest({
        student_id: student.id,
        class_id: classId,
        assignment_id: parseInt(colId),
        request_type: type,
        requested_date: date,
        requested_period_no: parseInt(period),
        reason: type === 'สอบย้อนหลัง' ? reason : null,
        status: 'pending',
      })
      showToast('ยื่นคำร้องสำเร็จ ✅', 'success')
      window._stuNav('requests')
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
