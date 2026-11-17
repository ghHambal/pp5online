import { supabase } from './supabase.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc } from './teacher-views-utils.js'
import {
  getAdvisorStudentLeaveRequests,
  getStudentLeaveProofUrl,
  reviewStudentLeaveRequest,
} from './student-leave-api.js'

const TYPE_LABEL = { excused: 'ก · ลากิจ', sick: 'ป · ลาป่วย' }
const STATUS = {
  pending: ['รอตรวจ', 'bg-amber-50 text-amber-700 border-amber-200'],
  approved: ['ยืนยันการลาแล้ว', 'bg-emerald-50 text-emerald-700 border-emerald-200'],
  rejected: ['ไม่อนุมัติ', 'bg-red-50 text-red-600 border-red-200'],
  expired: ['หมดอายุ', 'bg-gray-100 text-gray-600 border-gray-200'],
}

const _fmtDate = value => value
  ? new Date(`${value}T00:00:00`).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })
  : '—'

async function _notifyStudent(request, status) {
  const profileId = request.students?.profile_id
  if (!profileId) return
  try {
    await supabase.functions.invoke('send-push', {
      body: {
        title: status === 'approved' ? '✅ ยืนยันการลาแล้ว' : '📄 ผลการตรวจใบลา',
        body: `${TYPE_LABEL[request.leave_type]} · ${_fmtDate(request.start_date)}`,
        url: 'student.html', profileIds: [profileId],
      },
    })
  } catch { /* แจ้งเตือนเป็นส่วนเสริม ไม่ขัดขวางการบันทึก */ }
}

export async function renderStudentLeaveRequests(teacher, { container = null, focusRequestId = null } = {}) {
  const putContent = html => container ? (container.innerHTML = html) : setContent(html)
  const queryRoot = container || document
  if (!container) {
    setActiveNav('advisor-students')
    setTitle('นักเรียนที่ปรึกษา · ใบลา / ลาป่วย')
  }
  putContent('<div class="text-center py-12 text-gray-400">กำลังโหลดคำขอ...</div>')

  let all
  try { all = await getAdvisorStudentLeaveRequests() }
  catch (err) {
    putContent(`<div class="rounded-2xl border border-red-100 bg-white p-5 text-sm text-red-600">โหลดคำขอไม่สำเร็จ: ${_htmlEsc(getFriendlyErrorMessage(err))}</div>`)
    return
  }

  let filter = 'pending'
  let search = ''
  let leaveTypeFilter = 'all'
  let leaveDateFrom = ''
  let leaveDateTo = ''
  const render = ({ searchSelection = null } = {}) => {
    const needle = search.trim().toLocaleLowerCase()
    const rows = all.filter(r => {
      if (filter !== 'all' && r.status !== filter) return false
      if (leaveTypeFilter !== 'all' && r.leave_type !== leaveTypeFilter) return false
      // แสดงคำขอที่มีช่วงวันลาทับกับช่วงวันที่เลือก
      if (leaveDateFrom && r.end_date < leaveDateFrom) return false
      if (leaveDateTo && r.start_date > leaveDateTo) return false
      if (!needle) return true
      const student = r.students ?? {}
      const room = [student.main_room, student.religion_room].filter(Boolean).join(' ')
      const searchable = [
        r.id, r.student_id, student.full_name, student.student_code, room,
        TYPE_LABEL[r.leave_type], r.leave_type, STATUS[r.status]?.[0], r.status,
        r.start_date, r.end_date, _fmtDate(r.start_date), _fmtDate(r.end_date),
        r.reason, r.teacher_comment, r.attendance_rows_count,
        r.created_at ? new Date(r.created_at).toLocaleDateString('th-TH') : '',
      ].join(' ').toLocaleLowerCase()
      return searchable.includes(needle)
    })
    putContent(`<div class="animate-fade">
      <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div><h2 class="text-lg font-bold text-gray-800">📄 ใบลาและใบลาป่วย</h2><p class="mt-1 text-xs text-gray-500">ตรวจเฉพาะใบลาที่ผ่านการอนุมัติจากฝ่ายปกครองแล้ว</p></div>
        <span class="text-xs text-gray-400">${all.filter(r => r.status === 'pending').length} รายการรอตรวจ</span>
      </div>
      <section class="mb-4 space-y-3 rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
        <label class="block text-xs font-semibold text-gray-600">ค้นหาทุกอย่าง
          <input id="student-leave-search" type="search" value="${_htmlEsc(search)}" placeholder="ชื่อนักเรียน รหัส ห้อง ประเภทลา วันที่ หรือรายละเอียด" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-normal text-gray-800 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100">
        </label>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <label class="text-xs font-semibold text-gray-600">ประเภทการลา
            <select id="student-leave-type-filter" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-normal text-gray-800">
              <option value="all" ${leaveTypeFilter === 'all' ? 'selected' : ''}>ทุกประเภท</option>
              <option value="excused" ${leaveTypeFilter === 'excused' ? 'selected' : ''}>ก · ลากิจ</option>
              <option value="sick" ${leaveTypeFilter === 'sick' ? 'selected' : ''}>ป · ลาป่วย</option>
            </select>
          </label>
          <label class="text-xs font-semibold text-gray-600">วันลาตั้งแต่
            <input id="student-leave-date-from" type="date" value="${_htmlEsc(leaveDateFrom)}" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-normal text-gray-800">
          </label>
          <label class="text-xs font-semibold text-gray-600">ถึงวันที่
            <input id="student-leave-date-to" type="date" value="${_htmlEsc(leaveDateTo)}" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-normal text-gray-800">
          </label>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs text-gray-500">พบ ${rows.length} จาก ${all.filter(r => filter === 'all' || r.status === filter).length} รายการในสถานะนี้</span>
          <button type="button" id="student-leave-clear-filters" class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50">ล้างตัวกรองและคำค้น</button>
        </div>
      </section>
      <div class="mb-4 grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1 sm:grid-cols-5">
        ${[['pending','รอตรวจ'],['approved','ยืนยันแล้ว'],['rejected','ไม่อนุมัติ'],['expired','หมดอายุ'],['all','ทั้งหมด']].map(([key,label]) => `<button type="button" data-leave-filter="${key}" class="rounded-lg px-2 py-2 text-xs font-semibold ${filter === key ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500'}">${label} (${all.filter(r => key === 'all' || r.status === key).length})</button>`).join('')}
      </div>
      <div class="space-y-3">
        ${rows.length ? rows.map(r => {
          const s = STATUS[r.status] ?? STATUS.pending
          const stu = r.students ?? {}
          const photo = stu.image_url || stu.photo_url
          return `<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" data-leave-card="${r.id}">
            <header class="flex items-start justify-between gap-3">
              <div class="flex min-w-0 items-center gap-3">
                ${photo ? `<img data-leave-student-photo src="${_htmlEsc(photo)}" alt="รูป ${_htmlEsc(stu.full_name ?? 'นักเรียน')}" class="h-14 w-12 flex-shrink-0 rounded-xl border border-gray-200 bg-gray-100 object-cover" loading="lazy">` : `<div class="grid h-14 w-12 flex-shrink-0 place-items-center rounded-xl border border-gray-200 bg-indigo-50 font-bold text-indigo-500">${_htmlEsc((stu.full_name ?? '?').charAt(0))}</div>`}
                <div class="min-w-0"><h3 class="truncate font-bold text-gray-800">${_htmlEsc(stu.full_name ?? 'ไม่พบชื่อนักเรียน')}</h3><p class="mt-0.5 text-xs text-gray-500">${_htmlEsc(stu.student_code ?? '')} · ${_htmlEsc(stu.main_room ?? stu.religion_room ?? '')}</p></div>
              </div>
              <span class="shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${s[1]}">${s[0]}</span>
            </header>
            <div class="mt-3 rounded-xl bg-gray-50 p-3 text-xs text-gray-600">
              <p class="font-bold text-gray-800">${TYPE_LABEL[r.leave_type] ?? 'ลา'}</p>
              <p class="mt-1">วันที่ ${_fmtDate(r.start_date)}${r.end_date !== r.start_date ? ` – ${_fmtDate(r.end_date)}` : ''}</p>
              ${r.reason ? `<p class="mt-1 whitespace-pre-wrap">รายละเอียด: ${_htmlEsc(r.reason)}</p>` : ''}
              ${r.teacher_comment ? `<p class="mt-2 border-t border-gray-200 pt-2">หมายเหตุ: ${_htmlEsc(r.teacher_comment)}</p>` : ''}
              ${r.status === 'approved' ? `<p class="mt-2 text-emerald-700">บันทึกสถานะเช็คชื่อแล้ว ${Number(r.attendance_rows_count) || 0} รายการ</p>` : ''}
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <button type="button" class="leave-proof-btn rounded-xl border border-indigo-200 px-3 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-50" data-path="${_htmlEsc(r.proof_path ?? '')}" ${r.proof_path ? '' : 'disabled'}>${r.proof_path ? '🔍 เปิดใบลาที่มีตราอนุมัติ' : 'ไฟล์หลักฐานถูกลบแล้ว'}</button>
              ${r.status === 'pending' ? `<button type="button" class="leave-approve-btn ml-auto rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700" data-id="${r.id}">ยืนยันและบันทึกเช็คชื่อ</button><button type="button" class="leave-reject-btn rounded-xl border border-red-200 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50" data-id="${r.id}">ปฏิเสธ</button>` : ''}
            </div>
          </article>`
        }).join('') : '<div class="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-400">ไม่พบรายการตามคำค้นหาหรือตัวกรอง</div>'}
      </div>
    </div>`)

    const searchInput = queryRoot.querySelector('#student-leave-search')
    searchInput?.addEventListener('input', event => {
      search = event.currentTarget.value
      if (event.isComposing) return
      const start = event.currentTarget.selectionStart
      const end = event.currentTarget.selectionEnd
      render({ searchSelection: { start, end } })
    })
    if (searchSelection) {
      const nextSearchInput = queryRoot.querySelector('#student-leave-search')
      nextSearchInput?.focus()
      nextSearchInput?.setSelectionRange(searchSelection.start, searchSelection.end)
    }
    queryRoot.querySelector('#student-leave-type-filter')?.addEventListener('change', event => { leaveTypeFilter = event.currentTarget.value; render() })
    queryRoot.querySelector('#student-leave-date-from')?.addEventListener('change', event => { leaveDateFrom = event.currentTarget.value; render() })
    queryRoot.querySelector('#student-leave-date-to')?.addEventListener('change', event => { leaveDateTo = event.currentTarget.value; render() })
    queryRoot.querySelector('#student-leave-clear-filters')?.addEventListener('click', () => {
      search = ''; leaveTypeFilter = 'all'; leaveDateFrom = ''; leaveDateTo = ''; filter = 'pending'; render()
    })
    queryRoot.querySelectorAll('[data-leave-filter]').forEach(button => button.addEventListener('click', () => { filter = button.dataset.leaveFilter; render() }))
    queryRoot.querySelectorAll('.leave-proof-btn').forEach(button => button.addEventListener('click', async () => {
      try {
        const url = await getStudentLeaveProofUrl(button.dataset.path)
        if (url) window.open(url, '_blank', 'noopener')
      } catch (err) { showToast(`เปิดใบลาไม่สำเร็จ: ${getFriendlyErrorMessage(err)}`, 'error') }
    }))
    queryRoot.querySelectorAll('.leave-approve-btn').forEach(button => button.addEventListener('click', () => _review(button, 'approved')))
    queryRoot.querySelectorAll('.leave-reject-btn').forEach(button => button.addEventListener('click', () => _review(button, 'rejected')))
    queryRoot.querySelectorAll('[data-leave-student-photo]').forEach(image => image.addEventListener('error', () => {
      const fallback = document.createElement('div')
      fallback.className = 'grid h-14 w-12 flex-shrink-0 place-items-center rounded-xl border border-gray-200 bg-indigo-50 font-bold text-indigo-500'
      fallback.textContent = (image.alt.replace(/^รูป\s*/, '') || '?').charAt(0)
      image.replaceWith(fallback)
    }, { once: true }))
    if (focusRequestId) {
      const card = queryRoot.querySelector(`[data-leave-card="${Number(focusRequestId)}"]`)
      if (card) {
        card.classList.add('ring-4', 'ring-indigo-300', 'ring-offset-2')
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0)
        setTimeout(() => card.classList.remove('ring-4', 'ring-indigo-300', 'ring-offset-2'), 5000)
      }
      focusRequestId = null
    }
  }

  const _review = async (button, status) => {
    const request = all.find(r => Number(r.id) === Number(button.dataset.id))
    if (!request) return
    const comment = status === 'rejected' ? window.prompt('ระบุเหตุผลที่ปฏิเสธใบลา') : ''
    if (status === 'rejected' && !String(comment ?? '').trim()) return
    if (status === 'approved') {
      const kind = request.leave_type === 'sick' ? 'ป · ลาป่วย' : 'ก · ลากิจ'
      const msg = `ยืนยันใบลา ${request.students?.full_name ?? ''}?\nระบบจะบันทึก ${kind} ให้ทุกคาบที่มีเรียนระหว่าง ${_fmtDate(request.start_date)} ถึง ${_fmtDate(request.end_date)} โดยไม่เขียนทับสถานะ มา/สาย`
      if (!window.confirm(msg)) return
    }
    button.disabled = true; button.textContent = 'กำลังบันทึก...'
    try {
      const result = await reviewStudentLeaveRequest(request, { status, teacherComment: comment })
      showToast(status === 'approved' ? `ยืนยันการลาแล้ว · บันทึกเช็คชื่อ ${result?.attendance_rows_count ?? 0} รายการ` : 'บันทึกการปฏิเสธแล้ว', 'success')
      await _notifyStudent(request, status)
      all = await getAdvisorStudentLeaveRequests()
      render()
    } catch (err) {
      showToast(`ดำเนินการไม่สำเร็จ: ${getFriendlyErrorMessage(err)}`, 'error')
      button.disabled = false; button.textContent = status === 'approved' ? 'ยืนยันและบันทึกเช็คชื่อ' : 'ปฏิเสธ'
    }
  }

  render()
}
