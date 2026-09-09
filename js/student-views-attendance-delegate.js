// js/student-views-attendance-delegate.js — เช็คชื่อแทนครู สำหรับหัวหน้า/รองหัวหน้าห้อง
// แยกจากหน้าเช็คชื่อของครู (renderAttendanceGrid) โดยสิ้นเชิง เพราะหน้านั้นมีเครื่องมือครูล้วน
// (โควต้าออกนอกห้อง/นำเข้าระบบดูแล/ลบข้อมูลวันหยุด ฯลฯ) ที่นักเรียนไม่มีสิทธิ์และไม่ควรเห็น —
// หน้านี้จำกัดขอบเขตแค่ "คาบวันนี้ที่กำลังสอนอยู่ตอนนี้" ของห้องที่ได้รับมอบหมายเท่านั้น
import { getMyAttendanceDelegateClasses, isPeriodNow } from './student-api.js'
import { getClassStudents, getClassAttendanceAll, saveAttendanceCell } from './api.js'
import { setContent, setTitle, setActiveNav, _htmlEsc, ATT_STATUS, ATT_CYCLE } from './teacher-views-utils.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'
const _spinner = `<div class="flex justify-center py-16 text-gray-300">
  <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
  </svg>
</div>`

export async function renderStudentAttendanceDelegate(student) {
  setActiveNav('overview')
  setTitle('เช็คชื่อแทนครู')
  setContent(_spinner)

  let classes
  try {
    classes = await getMyAttendanceDelegateClasses(student)
  } catch (err) {
    setContent(`<div class="p-6 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${_htmlEsc(getFriendlyErrorMessage(err))}</div>`)
    return
  }

  const nowClasses = classes.filter(c => isPeriodNow(c.period))

  if (!nowClasses.length) {
    setContent(`
      <div class="max-w-md mx-auto mt-10 text-center space-y-3 px-4">
        <div class="text-5xl">🕐</div>
        <p class="font-bold text-gray-700">ยังไม่ถึงเวลาคาบเรียนที่มอบหมายให้เช็คชื่อ</p>
        <p class="text-sm text-gray-400">เช็คชื่อแทนครูได้เฉพาะช่วงเวลาที่กำลังเรียนวิชานั้นอยู่ตอนนี้เท่านั้น</p>
        <button id="ad-back" class="mt-2 px-5 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200">← กลับหน้าแรก</button>
      </div>`)
    document.getElementById('ad-back')?.addEventListener('click', () => window._navTo?.('overview'))
    return
  }

  if (nowClasses.length === 1) {
    await _openClassCheckin(student, nowClasses[0])
    return
  }

  setContent(`
    <div class="max-w-md mx-auto mt-6 space-y-3 px-4">
      <h2 class="font-bold text-gray-800 text-base">🙋 เลือกห้องที่จะเช็คชื่อ</h2>
      ${nowClasses.map((c, i) => `
        <button data-idx="${i}" class="ad-pick-class w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition">
          <p class="font-bold text-gray-800 text-sm">${_htmlEsc(c.ms?.subject_name ?? '')}</p>
          <p class="text-xs text-gray-400 mt-0.5">${_htmlEsc(c.cls.class_name)} · คาบ ${c.period?.period_no ?? '-'}</p>
        </button>`).join('')}
    </div>`)
  document.querySelectorAll('.ad-pick-class').forEach(btn => {
    btn.addEventListener('click', () => _openClassCheckin(student, nowClasses[parseInt(btn.dataset.idx)]))
  })
}

async function _openClassCheckin(student, entry) {
  const { cls, ms, sessionNumber, checkDate, period } = entry
  setContent(_spinner)

  let students, attRows
  try {
    ;[students, attRows] = await Promise.all([
      getClassStudents(cls.id),
      getClassAttendanceAll(cls.id),
    ])
  } catch (err) {
    setContent(`<div class="p-6 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${_htmlEsc(getFriendlyErrorMessage(err))}</div>`)
    return
  }

  const attMap = {}
  attRows.filter(r => r.session_number === sessionNumber).forEach(r => { attMap[r.student_id] = r.status })

  const cellHTML = (st) => {
    const cfg = st ? ATT_STATUS[st] : null
    return { cls: cfg ? cfg.bg : 'bg-white', color: cfg ? cfg.color : 'text-gray-300', label: cfg ? cfg.label : '—' }
  }

  const renderRow = s => {
    const c = cellHTML(attMap[s.id] ?? null)
    return `<div class="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0" data-sid="${s.id}">
      ${s.image_url ? `<img src="${_htmlEsc(s.image_url)}" class="w-9 h-9 rounded-lg object-cover border flex-shrink-0" />` : `<div class="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">👤</div>`}
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-gray-800 truncate">${_htmlEsc(s.full_name)}</p>
        <p class="text-[11px] text-gray-400">${_htmlEsc(s.student_code)}</p>
      </div>
      <button class="ad-cell-btn w-11 h-11 rounded-xl border border-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-base ${c.cls} ${c.color}">${c.label}</button>
    </div>`
  }

  const timeLabel = period?.start_time && period?.end_time
    ? ` (${String(period.start_time).slice(0, 5)}-${String(period.end_time).slice(0, 5)})`
    : ''

  setContent(`
    <div class="max-w-md mx-auto px-4 py-4 space-y-3 pb-10">
      <button id="ad-back2" class="text-xs text-emerald-600 font-semibold">← กลับ</button>
      <div>
        <h2 class="font-bold text-gray-800 text-base">${_htmlEsc(ms?.subject_name ?? '')}</h2>
        <p class="text-xs text-gray-400">${_htmlEsc(cls.class_name)} · คาบ ${sessionNumber}${timeLabel}</p>
      </div>
      <p class="text-[11px] text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">📌 เช็คชื่อแทนครูได้เฉพาะช่วงเวลาที่กำลังเรียนวิชานี้อยู่ตอนนี้เท่านั้น</p>
      <div class="flex flex-wrap gap-1.5 text-[11px]">
        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg">ม=มา</span>
        <span class="px-2 py-1 bg-red-50 text-red-600 rounded-lg">ข=ขาด</span>
        <span class="px-2 py-1 bg-amber-50 text-amber-500 rounded-lg">ส=สาย</span>
        <span class="px-2 py-1 bg-blue-50 text-blue-500 rounded-lg">ก=กิจ</span>
        <span class="px-2 py-1 bg-orange-50 text-orange-500 rounded-lg">ป=ป่วย</span>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 px-3" id="ad-roster">
        ${!students.length ? `<p class="text-center text-gray-400 py-8 text-sm">ยังไม่มีนักเรียนในห้องนี้</p>` : students.map(renderRow).join('')}
      </div>
    </div>`)

  document.getElementById('ad-back2')?.addEventListener('click', () => renderStudentAttendanceDelegate(student))

  document.querySelectorAll('.ad-cell-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const row = btn.closest('[data-sid]')
      const sid = parseInt(row.dataset.sid)
      const cur = attMap[sid] ?? null
      const next = ATT_CYCLE[(ATT_CYCLE.indexOf(cur) + 1) % ATT_CYCLE.length]
      attMap[sid] = next
      const c = cellHTML(next)
      btn.className = `ad-cell-btn w-11 h-11 rounded-xl border border-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-base ${c.cls} ${c.color}`
      btn.textContent = c.label
      try {
        await saveAttendanceCell(cls.id, sid, sessionNumber, checkDate, next)
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (getFriendlyErrorMessage(err)), 'error')
      }
    })
  })
}
