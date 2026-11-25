// js/student-views-attendance-delegate.js — เช็คชื่อแทนครู สำหรับหัวหน้า/รองหัวหน้าห้อง
// ใช้ฟอร์มป๊อบอัพเช็คชื่อเดิมของครูในโหมดจำกัดสิทธิ์ เฉพาะคาบที่กำลังเรียน
// และห้องที่มอบหมายให้นักเรียนคนนี้เท่านั้น
import { getMyAttendanceDelegateClasses, isPeriodNow } from './student-api.js'
import { getClassStudents, getClassAttendanceAll } from './api.js'
import { setContent, setTitle, setActiveNav, _htmlEsc } from './teacher-views-utils.js'
import { getFriendlyErrorMessage } from './ui.js'
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
  const { cls, sessionNumber } = entry
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
  try {
    const { openAttendanceDelegateForm } = await import('./teacher-views-attendance.js')
    openAttendanceDelegateForm(student, entry, students, attRows, () => window._navTo?.('overview'))
  } catch (err) {
    setContent(`<div class="p-6 text-center text-red-400 text-sm">เปิดแบบฟอร์มไม่สำเร็จ: ${_htmlEsc(getFriendlyErrorMessage(err))}</div>`)
  }
}
