import {
  getHomeroomTeachers,
  getStudents,
} from './api.js'
import { openHtmlPrintOverlay } from './print-overlay.js'
import { getFriendlyErrorMessage, showToast } from './ui.js'
import { _htmlEsc, setActiveNav, setContent, setTitle } from './teacher-views-utils.js'

const ACADEMIC_YEAR = 2569
const SEMESTER = 1
const LOGO_URL = 'https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT'

let _state = {
  teacher: null,
  assignments: [],
  students: [],
  category: 'สามัญ',
}

const _dateInputToday = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const _thaiDate = value => {
  if (!value) return '—'
  const d = new Date(`${value}T00:00:00`)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
}

const _roomsForCategory = category => {
  const roomField = category === 'ศาสนา' ? 'religion_room' : 'main_room'
  const studentRooms = _state.students.map(student => student[roomField]).filter(Boolean)
  const assignedRooms = _state.assignments
    .filter(row => row.category === category)
    .map(row => row.main_room)
    .filter(Boolean)
  return [...new Set([...assignedRooms, ...studentRooms])].sort((a, b) => String(a).localeCompare(String(b), 'th', { numeric: true }))
}

const _assignmentFor = (category, room) => _state.assignments.find(row => row.category === category && row.main_room === room) || null

const _studentsFor = (category, room) => {
  const roomField = category === 'ศาสนา' ? 'religion_room' : 'main_room'
  return _state.students
    .filter(student => student[roomField] === room)
    .sort((a, b) => String(a.student_code || '').localeCompare(String(b.student_code || ''), 'th', { numeric: true }))
}

const _tableRows = students => students.map((student, index) => `
  <tr>
    <td>${index + 1}</td>
    <td>${_htmlEsc(student.student_code || '')}</td>
    <td class="student-name">${_htmlEsc(student.full_name || '')}</td>
    <td></td><td></td><td></td><td></td><td></td>
  </tr>`).join('') || '<tr><td colspan="8" class="empty-row">ไม่พบรายชื่อนักเรียนในห้องนี้</td></tr>'

const _tableHtml = students => `
  <table class="grade-day-table">
    <thead><tr>
      <th>ลำดับ<br>ที่</th>
      <th>เลข<br>ประจำตัว</th>
      <th>ชื่อ - สกุล<br>(นักเรียน)</th>
      <th>ชื่อ - สกุล<br>(ผู้รับเกรด)</th>
      <th>เกี่ยวข้องกับ<br>นักเรียน</th>
      <th>นักเรียนไม่ได้อาศัยอยู่กับบิดา / มารดา<br>โปรดระบุ........</th>
      <th>เบอร์โทรศัพท์</th>
      <th>หมายเหตุ</th>
    </tr></thead>
    <tbody>${_tableRows(students)}</tbody>
  </table>`

const _printHtml = ({ category, room, advisor, date, students }) => `<!doctype html>
<html lang="th"><head><meta charset="utf-8"><title>เอกสารตารางวันรับเกรด</title>
<style>
  @page { size: A4 landscape; margin: 9mm; }
  * { box-sizing: border-box; }
  body { margin: 0; color: #111; font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; }
  .paper { width: 100%; }
  .heading { text-align: center; margin-bottom: 8px; }
  .heading img { width: 62px; height: 62px; object-fit: contain; margin-bottom: 3px; }
  .heading h1 { margin: 0; font-size: 20px; }
  .heading p { margin: 2px 0; font-size: 13px; }
  .meta { display: grid; grid-template-columns: 1fr 1fr 1.6fr; gap: 12px; margin: 8px 0 10px; font-size: 13px; }
  .meta span { border-bottom: 1px dotted #555; padding: 4px 2px; }
  .grade-day-table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 11px; }
  .grade-day-table th, .grade-day-table td { border: 1px solid #222; padding: 5px 4px; text-align: center; vertical-align: middle; }
  .grade-day-table th { height: 47px; line-height: 1.25; }
  .grade-day-table td { height: 39px; }
  .grade-day-table th:nth-child(1) { width: 6%; } .grade-day-table th:nth-child(2) { width: 8%; }
  .grade-day-table th:nth-child(3) { width: 17%; } .grade-day-table th:nth-child(4) { width: 17%; }
  .grade-day-table th:nth-child(5) { width: 10%; } .grade-day-table th:nth-child(6) { width: 18%; }
  .grade-day-table th:nth-child(7) { width: 13%; } .grade-day-table th:nth-child(8) { width: 11%; }
  .grade-day-table .student-name { text-align: left; padding-left: 8px; }
  .empty-row { height: 42px; color: #777; }
</style></head><body><main class="paper">
  <div class="heading"><img src="${LOGO_URL}" alt=""><h1>เอกสารตารางวันรับเกรด</h1>
    <p>ตารางข้อมูลนักเรียนสำหรับครูที่ปรึกษาในวันรายงานเกรดผู้ปกครอง</p>
    <p>ภาคเรียนที่ ${SEMESTER}/${ACADEMIC_YEAR} · วันที่ ${_htmlEsc(_thaiDate(date))}</p>
  </div>
  <div class="meta"><span>สายการเรียน: <b>${_htmlEsc(category)}</b></span><span>ชั้น/ห้อง: <b>${_htmlEsc(room)}</b></span><span>ชื่อ-สกุล (ครูที่ปรึกษา): <b>${_htmlEsc(advisor)}</b></span></div>
  ${_tableHtml(students)}
</main></body></html>`

function _openModal() {
  document.getElementById('grade-day-modal')?.remove()
  const rooms = _roomsForCategory(_state.category)
  const firstRoom = rooms[0] || ''
  const assignment = _assignmentFor(_state.category, firstRoom)
  const modal = document.createElement('div')
  modal.id = 'grade-day-modal'
  modal.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-3 sm:p-6'
  modal.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[94vh] overflow-y-auto">
    <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-100 bg-white px-5 py-4 sm:px-7">
      <div><p class="text-xs font-bold uppercase tracking-wider text-indigo-600">School document · ภาคเรียนที่ 1/2569</p><h2 class="mt-1 text-lg font-extrabold text-gray-800">สร้างเอกสารตารางวันรับเกรด</h2><p class="mt-1 text-xs text-gray-500">ระบบเติมเฉพาะข้อมูลนักเรียน ส่วนข้อมูลผู้รับเกรดเว้นว่างสำหรับเขียนเอง</p></div>
      <button id="grade-day-close" class="rounded-xl border border-gray-200 px-3 py-1.5 text-xl text-gray-500 hover:bg-gray-50" aria-label="ปิดหน้าต่าง">×</button>
    </div>
    <div class="space-y-4 p-5 sm:p-7">
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label class="block text-xs font-bold text-gray-600">สายการเรียน
          <select id="grade-day-category" class="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400">
            <option value="สามัญ" ${_state.category === 'สามัญ' ? 'selected' : ''}>สามัญ</option><option value="ศาสนา" ${_state.category === 'ศาสนา' ? 'selected' : ''}>ศาสนา</option>
          </select>
        </label>
        <label class="block text-xs font-bold text-gray-600">ห้องเรียน <span class="font-normal text-gray-400">เลือกจากฐานข้อมูล</span>
          <select id="grade-day-room" class="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400">${rooms.map(room => `<option value="${_htmlEsc(room)}">${_htmlEsc(room)}</option>`).join('') || '<option value="">ไม่พบห้อง</option>'}</select>
        </label>
        <label class="block text-xs font-bold text-gray-600">ห้องที่พิมพ์ในเอกสาร <span class="font-normal text-emerald-600">แก้ไขได้</span>
          <input id="grade-day-room-edit" value="${_htmlEsc(firstRoom)}" class="mt-1.5 w-full rounded-xl border border-emerald-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-400">
        </label>
        <label class="block text-xs font-bold text-gray-600">ชื่อครูที่ปรึกษา <span class="font-normal text-emerald-600">แก้ไขได้</span>
          <input id="grade-day-advisor" value="${_htmlEsc(assignment?.teachers?.full_name || '')}" class="mt-1.5 w-full rounded-xl border border-emerald-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-400" placeholder="ชื่อ-สกุลครูที่ปรึกษา">
        </label>
      </div>
      <label class="block max-w-xs text-xs font-bold text-gray-600">วันที่จัดทำเอกสาร
        <input id="grade-day-date" type="date" value="${_dateInputToday()}" class="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400">
      </label>
      <div id="grade-day-status" class="rounded-xl bg-indigo-50 px-4 py-3 text-xs leading-6 text-indigo-700"></div>
      <div class="overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-3"><div id="grade-day-preview"></div></div>
      <div class="flex flex-wrap justify-end gap-2"><button id="grade-day-cancel" class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button><button id="grade-day-print" class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">🖨️ พิมพ์ / บันทึก PDF</button></div>
    </div>
  </div>`
  document.body.appendChild(modal)

  const categoryEl = modal.querySelector('#grade-day-category')
  const roomEl = modal.querySelector('#grade-day-room')
  const roomEditEl = modal.querySelector('#grade-day-room-edit')
  const advisorEl = modal.querySelector('#grade-day-advisor')
  const dateEl = modal.querySelector('#grade-day-date')
  const previewEl = modal.querySelector('#grade-day-preview')
  const statusEl = modal.querySelector('#grade-day-status')

  const render = () => {
    const category = categoryEl.value
    const room = roomEl.value
    const students = _studentsFor(category, room)
    previewEl.innerHTML = _tableHtml(students)
    statusEl.innerHTML = `พบข้อมูลนักเรียน <strong>${students.length}</strong> คน · ครูที่ปรึกษาจากฐานข้อมูล: <strong>${_htmlEsc(_assignmentFor(category, room)?.teachers?.full_name || 'ยังไม่มีการมอบหมาย')}</strong> · ข้อมูลผู้รับเกรดทุกช่องเว้นว่าง` 
  }

  const refreshRooms = () => {
    const category = categoryEl.value
    const nextRooms = _roomsForCategory(category)
    roomEl.innerHTML = nextRooms.map(room => `<option value="${_htmlEsc(room)}">${_htmlEsc(room)}</option>`).join('') || '<option value="">ไม่พบห้อง</option>'
    const room = nextRooms[0] || ''
    roomEditEl.value = room
    advisorEl.value = _assignmentFor(category, room)?.teachers?.full_name || ''
    render()
  }

  categoryEl.addEventListener('change', refreshRooms)
  roomEl.addEventListener('change', () => {
    roomEditEl.value = roomEl.value
    advisorEl.value = _assignmentFor(categoryEl.value, roomEl.value)?.teachers?.full_name || ''
    render()
  })
  modal.querySelector('#grade-day-close').addEventListener('click', () => modal.remove())
  modal.querySelector('#grade-day-cancel').addEventListener('click', () => modal.remove())
  modal.querySelector('#grade-day-print').addEventListener('click', () => {
    const category = categoryEl.value
    const room = roomEditEl.value.trim()
    const advisor = advisorEl.value.trim()
    const students = _studentsFor(category, roomEl.value)
    if (!room || !advisor) { showToast('กรุณาตรวจสอบห้องเรียนและชื่อครูที่ปรึกษา', 'error'); return }
    openHtmlPrintOverlay(_printHtml({ category, room, advisor, date: dateEl.value, students }), { autoprint: false })
  })
  render()
}

export async function renderGradeDayDocuments(teacher) {
  setActiveNav('grade-day')
  setTitle('เอกสารตารางวันรับเกรด', 'grade-day')
  setContent('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูลนักเรียนและครูที่ปรึกษา...</div>')
  try {
    const [assignments, students] = await Promise.all([
      getHomeroomTeachers(ACADEMIC_YEAR, SEMESTER),
      getStudents(),
    ])
    _state = { teacher, assignments, students, category: 'สามัญ' }
    const samaiRooms = _roomsForCategory('สามัญ').length
    const religionRooms = _roomsForCategory('ศาสนา').length
    setContent(`<div class="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p class="text-xs font-bold uppercase tracking-wider text-indigo-600">School document</p><h1 class="mt-1 text-2xl font-extrabold text-gray-800">เอกสารตารางวันรับเกรด</h1><p class="mt-1 max-w-2xl text-sm text-gray-500">ข้อมูลภาคเรียนที่ 1/2569 จากฐานข้อมูลนักเรียนและครูที่ปรึกษา รองรับทั้งสายสามัญและศาสนา</p></div><button id="grade-day-create" class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">＋ สร้างเอกสาร</button></div>
      <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"><div class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="font-bold text-gray-800">ข้อมูลพร้อมใช้งาน</h2><p class="mt-1 text-xs text-gray-500">เลือกห้องแล้วระบบจะเติมรายชื่อนักเรียนและชื่อครูที่ปรึกษาให้ทันที</p></div><span class="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">ภาคเรียนที่ 1/2569</span></div><div class="mt-5 grid gap-3 sm:grid-cols-2"><div class="rounded-xl bg-emerald-50 p-4"><div class="text-xs text-emerald-700">ห้องสายสามัญ</div><strong class="mt-1 block text-2xl text-emerald-800">${samaiRooms}</strong></div><div class="rounded-xl bg-amber-50 p-4"><div class="text-xs text-amber-700">ห้องสายศาสนา</div><strong class="mt-1 block text-2xl text-amber-800">${religionRooms}</strong></div></div><div class="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-xs leading-6 text-indigo-800">ระบบจะเติมเฉพาะลำดับที่ เลขประจำตัว และชื่อ-สกุลนักเรียน ส่วนชื่อผู้รับเกรด ความเกี่ยวข้อง ที่พักอาศัย เบอร์โทรศัพท์ และหมายเหตุจะเว้นว่างให้เขียนเอง</div></section>`)
    document.getElementById('grade-day-create')?.addEventListener('click', _openModal)
  } catch (error) {
    console.error(error)
    setContent(`<div class="rounded-2xl border border-red-100 bg-white p-8 text-center text-red-500">โหลดข้อมูลเอกสารไม่สำเร็จ: ${_htmlEsc(getFriendlyErrorMessage(error))}</div>`)
  }
}
