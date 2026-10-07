import {
  getSystemConfig, getTeachers, getPeriods, getMasterSubjectsAdmin,
  getScheduleEntriesForTerm, upsertScheduleEntry, updateScheduleEntry,
  deleteScheduleEntry, getAdminAcademicAuditLogs,
} from './api.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'
import { resolveScheduleColor } from './teacher-schedule-colors.js'

const DAYS = [
  [0, 'อาทิตย์'], [1, 'จันทร์'], [2, 'อังคาร'], [3, 'พุธ'],
  [4, 'พฤหัสบดี'], [5, 'ศุกร์'],
]

const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]))
const norm = value => String(value ?? '').trim().toLocaleLowerCase('th-TH').replace(/\s+/g, '')
const slotKeys = row => Array.from({ length: Number(row.span_periods || 1) }, (_, offset) =>
  `${row.teacher_id}:${row.day_of_week}:${Number(row.period_no) + offset}`)
const roomKeys = row => row.class_name?.trim()
  ? Array.from({ length: Number(row.span_periods || 1) }, (_, offset) =>
    `${norm(row.class_name)}:${row.day_of_week}:${Number(row.period_no) + offset}`)
  : []

function termOptions(selectedYear, selectedSemester) {
  const years = [selectedYear - 1, selectedYear, selectedYear + 1]
  return years.flatMap(year => [1, 2].map(semester =>
    `<option value="${year}|${semester}" ${year === selectedYear && semester === selectedSemester ? 'selected' : ''}>ภาคเรียนที่ ${semester}/${year}</option>`
  )).join('')
}

function statusBadge(row, conflictSet) {
  const conflicts = conflictSet.get(row.id) ?? []
  if (conflicts.length) return `<span class="rounded-full bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700">ชน ${esc(conflicts.join(' / '))}</span>`
  return '<span class="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">ปกติ</span>'
}

function teacherCardStyle(rows, conflictSet, missingTeacher = false) {
  if (missingTeacher || rows.some(row => conflictSet.has(row.id))) {
    return {
      border: 'border-rose-400',
      glow: 'shadow-[0_0_18px_rgba(244,63,94,0.38)]',
      label: 'มีปัญหา',
      badge: 'bg-rose-50 text-rose-700',
    }
  }
  if (rows.length) {
    return {
      border: 'border-emerald-400',
      glow: 'shadow-[0_0_18px_rgba(16,185,129,0.32)]',
      label: 'มีตารางสอน',
      badge: 'bg-emerald-50 text-emerald-700',
    }
  }
  return {
    border: 'border-gray-300',
    glow: 'shadow-[0_0_15px_rgba(107,114,128,0.22)]',
    label: 'ยังไม่มีตารางสอน',
    badge: 'bg-gray-100 text-gray-600',
  }
}

function renderTeacherSchedulePopup({ teacher, rows, state, subjectById, conflictSet, onChanged }) {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
  const teacherName = teacher?.full_name || 'ไม่พบครู'
  const teacherCode = teacher?.teacher_code ? ` (${esc(teacher.teacher_code)})` : ''
  const close = () => modal.remove()
  const render = () => {
    const sortedRows = [...rows].sort((a, b) => Number(a.day_of_week) - Number(b.day_of_week) || Number(a.period_no) - Number(b.period_no))
    modal.innerHTML = `<div class="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
      <div class="flex items-start justify-between gap-4">
        <div><p class="text-xs font-semibold text-indigo-500">ตารางสอนรายบุคคล · ${state.semester}/${state.year}</p><h2 class="mt-1 text-xl font-extrabold text-gray-800">${esc(teacherName)}${teacherCode}</h2><p class="mt-1 text-sm text-gray-500">ทั้งหมด ${sortedRows.length} รายการ · ตรวจสอบ แก้ไข หรือลบรายการได้จากหน้าต่างนี้</p></div>
        <button type="button" data-close class="text-2xl text-gray-400 hover:text-gray-700">×</button>
      </div>
      <div class="mt-5 overflow-x-auto rounded-2xl border border-gray-100"><table class="w-full min-w-[760px] text-left text-sm"><thead class="bg-gray-50 text-xs text-gray-500"><tr><th class="px-4 py-3">รายวิชา</th><th class="px-4 py-3">ห้องเรียน</th><th class="px-4 py-3">วัน/คาบ</th><th class="px-4 py-3">สถานะ</th><th class="px-4 py-3 text-right">จัดการ</th></tr></thead><tbody class="divide-y divide-gray-100">${sortedRows.length ? sortedRows.map(row => { const subject = subjectById[row.subject_id]; return `<tr><td class="px-4 py-3"><div class="font-semibold text-gray-800">${esc(subject?.subject_name || row.subject_name || '—')}</div><div class="text-xs text-gray-400">${esc(subject?.subject_code || '')}</div></td><td class="px-4 py-3">${esc(row.class_name || '—')}</td><td class="px-4 py-3">${DAYS.find(item => item[0] === Number(row.day_of_week))?.[1] || '—'} · คาบ ${row.period_no}${Number(row.span_periods) > 1 ? `–${Number(row.period_no) + Number(row.span_periods) - 1}` : ''}</td><td class="px-4 py-3">${statusBadge(row, conflictSet)}</td><td class="px-4 py-3 text-right"><button data-edit="${row.id}" class="mr-2 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-indigo-700">แก้ไข</button><button data-delete="${row.id}" class="rounded-lg border border-rose-100 px-2.5 py-1.5 text-xs font-semibold text-rose-700">ลบ</button></td></tr>` }).join('') : '<tr><td colspan="5" class="px-4 py-12 text-center text-gray-400">ครูท่านนี้ยังไม่มีตารางสอนในภาคเรียนนี้</td></tr>'}</tbody></table></div>
      <div class="mt-5 flex flex-wrap justify-end gap-2 border-t border-gray-100 pt-4"><button type="button" data-add class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white">＋ เพิ่มรายการให้ครูคนนี้</button><button type="button" data-close class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600">ปิด</button></div>
    </div>`
    modal.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', close))
    modal.querySelector('[data-add]').addEventListener('click', () => renderForm({ state, row: { teacher_id: teacher?.id }, onSaved: async () => { close(); await onChanged() } }))
    modal.querySelectorAll('[data-edit]').forEach(button => button.addEventListener('click', () => {
      const row = rows.find(item => String(item.id) === String(button.dataset.edit))
      if (row) renderForm({ row, state, onSaved: async () => { close(); await onChanged() } })
    }))
    modal.querySelectorAll('[data-delete]').forEach(button => button.addEventListener('click', async () => {
      const row = rows.find(item => String(item.id) === String(button.dataset.delete))
      if (!row || !confirm('ยืนยันลบรายการตารางสอนนี้หรือไม่? ระบบจะบันทึกประวัติการลบ')) return
      try { await deleteScheduleEntry(row.id); showToast('ลบรายการตารางสอนแล้ว', 'success'); close(); await onChanged() } catch (error) { showToast(`ลบไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, 'error') }
    }))
  }
  document.body.appendChild(modal)
  render()
}

function renderTeacherScheduleGridPopup({ teacher, rows, state, subjectById, conflictSet, cfg, onChanged }) {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/60 p-3 sm:p-5'
  const teacherName = teacher?.full_name || 'ไม่พบครู'
  const teacherCode = teacher?.teacher_code ? ` (${esc(teacher.teacher_code)})` : ''
  const days = Array.from({ length: cfg?.hasFriday === true || cfg?.hasFriday === 'true' ? 6 : 5 }, (_, index) => index)
  const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์']
  const dayColors = ['bg-red-50', 'bg-yellow-50', 'bg-pink-50', 'bg-green-50', 'bg-orange-50', 'bg-purple-50']
  const close = () => modal.remove()
  const scheduleMap = {}
  rows.forEach(row => {
    scheduleMap[`${row.day_of_week}-${row.period_no}`] = row
    for (let offset = 1; offset < Number(row.span_periods || 1); offset += 1) {
      scheduleMap[`${row.day_of_week}-${Number(row.period_no) + offset}`] = { ...row, _secondary: true }
    }
  })
  const render = () => {
    const problemRows = rows.filter(row => conflictSet.has(row.id)).length
    modal.innerHTML = `<div class="max-h-[94vh] w-full max-w-7xl overflow-y-auto rounded-3xl bg-white p-4 shadow-2xl sm:p-6">
      <div class="flex items-start justify-between gap-4"><div><p class="text-xs font-semibold text-indigo-500">ตารางสอนรายบุคคล · ${state.semester}/${state.year}</p><h2 class="mt-1 text-xl font-extrabold text-gray-800">${esc(teacherName)}${teacherCode}</h2><p class="mt-1 text-sm text-gray-500">คลิกช่องว่างเพื่อเพิ่มรายการ หรือคลิกรายวิชาเพื่อแก้ไข</p></div><button type="button" data-close class="text-2xl text-gray-400 hover:text-gray-700">×</button></div>
      <div class="mt-5 overflow-auto rounded-2xl border border-gray-200 shadow-sm"><table class="w-full min-w-[820px] border-collapse text-xs"><thead><tr class="bg-gray-50"><th class="w-24 border border-gray-100 px-3 py-2.5 text-center font-medium text-gray-500">คาบ / เวลา</th>${days.map(day => `<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${dayColors[day]}">${dayNames[day]}</th>`).join('')}</tr></thead><tbody>${state.periods.map(period => `<tr class="hover:bg-gray-50/50"><td class="border border-gray-100 bg-gray-50 px-3 py-2 text-center"><p class="font-bold text-gray-700">คาบ ${period.period_no}</p><p class="text-[10px] text-gray-400">${esc(String(period.start_time || '').slice(0, 5))}–${esc(String(period.end_time || '').slice(0, 5))}</p></td>${days.map(day => {
        const entry = scheduleMap[`${day}-${period.period_no}`]
        if (entry?._secondary) return ''
        const subject = subjectById[entry?.subject_id]
        const subjectName = entry?.subject_name || subject?.subject_name || null
        const className = entry?.class_name || null
        const color = resolveScheduleColor({ teacherId: teacher?.id, className, subjectName, fallbackId: entry?.subject_id || subject?.id }, {})
        const hasConflict = entry && conflictSet.has(entry.id)
        const span = Number(entry?.span_periods || 1)
        return `<td class="schedule-grid-cell border border-gray-100 p-0 ${entry ? 'cursor-pointer hover:bg-indigo-50/30' : 'cursor-pointer hover:bg-indigo-50/40'} transition-colors" style="height:1px" data-grid-entry="${entry?.id || ''}" data-grid-day="${day}" data-grid-period="${period.period_no}" ${span > 1 ? `rowspan="${span}"` : ''}><div class="group flex h-full min-h-[64px] w-full flex-col items-center justify-center gap-1 px-2 py-2 text-center" style="${entry ? `background:${color.soft};color:${color.text};border-left:4px solid ${hasConflict ? '#f43f5e' : color.dot};` : ''}">${entry ? `<p class="w-full break-words text-sm font-extrabold leading-tight">${esc(subjectName || 'ไม่ระบุวิชา')}</p><p class="w-full text-[11px] font-semibold leading-tight opacity-90">${esc(className || 'ไม่ระบุห้อง')}</p><p class="w-full text-[10px] leading-tight opacity-65">${esc(teacherName)}</p>${hasConflict ? '<span class="text-[10px] font-bold text-rose-600">⚠ มีปัญหา</span>' : ''}<span class="text-[10px] font-bold text-indigo-600 opacity-0 transition-opacity group-hover:opacity-100">แก้ไข</span>` : '<span class="text-2xl text-indigo-200 opacity-0 transition-opacity group-hover:opacity-100">＋</span>'}</div></td>`
      }).join('')}</tr>`).join('')}</tbody></table></div>
      <div class="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4"><p class="text-xs text-gray-500">ทั้งหมด ${rows.length} รายการ${problemRows ? ` · พบรายการที่มีปัญหา ${problemRows} รายการ` : ''}</p><div class="flex flex-wrap justify-end gap-2"><button type="button" data-add class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white">＋ เพิ่มรายการให้ครูคนนี้</button><button type="button" data-close class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600">ปิด</button></div></div>
    </div>`
    modal.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', close))
    modal.querySelector('[data-add]').addEventListener('click', () => renderForm({ state, row: { teacher_id: teacher?.id }, onSaved: async () => { close(); await onChanged() } }))
    modal.querySelectorAll('[data-grid-entry]').forEach(cell => cell.addEventListener('click', () => {
      const entry = rows.find(row => String(row.id) === String(cell.dataset.gridEntry))
      const row = entry || { teacher_id: teacher?.id, day_of_week: Number(cell.dataset.gridDay), period_no: Number(cell.dataset.gridPeriod), span_periods: 1 }
      if (entry?._secondary) return
      renderForm({ row, state, onSaved: async () => { close(); await onChanged() } })
    }))
  }
  document.body.appendChild(modal)
  render()
}

function buildConflicts(rows) {
  const teacherSlots = new Map()
  const roomSlots = new Map()
  const conflicts = new Map()
  const add = (map, key, row, label) => {
    if (!map.has(key)) map.set(key, [])
    map.get(key).push({ row, label })
  }
  rows.forEach(row => {
    slotKeys(row).forEach(key => add(teacherSlots, key, row, 'ครูสอนชนกัน'))
    roomKeys(row).forEach(key => add(roomSlots, key, row, 'ห้องเรียนชนกัน'))
  })
  const mark = (map, message) => {
    for (const items of map.values()) {
      if (items.length < 2) continue
      items.forEach(item => {
        if (!conflicts.has(item.row.id)) conflicts.set(item.row.id, [])
        if (!conflicts.get(item.row.id).includes(message)) conflicts.get(item.row.id).push(message)
      })
    }
  }
  mark(teacherSlots, 'ครูสอนชนกัน')
  mark(roomSlots, 'ห้องเรียนชนกัน')
  return conflicts
}

function renderForm({ row = null, state, onSaved, onClose }) {
  const teachers = state.teachers
  const subjects = state.subjects
  const rowTeacherId = row?.teacher_id ?? ''
  const teacherOptions = teachers.map(teacher => `<option value="${teacher.id}" ${String(rowTeacherId) === String(teacher.id) ? 'selected' : ''}>${esc(teacher.full_name)}${teacher.teacher_code ? ` (${esc(teacher.teacher_code)})` : ''}</option>`).join('')
  const subjectOptions = subjects.map(subject => `<option value="${subject.id}" data-teacher-id="${subject.teacher_id ?? ''}" ${String(row?.subject_id ?? '') === String(subject.id) ? 'selected' : ''}>${esc(subject.subject_code || 'ไม่มีรหัส')} · ${esc(subject.subject_name)}${subject.teacher_id ? ` · ${esc(teachers.find(t => t.id === subject.teacher_id)?.full_name || '')}` : ''}</option>`).join('')
  const periodOptions = state.periods.map(period => `<option value="${period.period_no}" ${Number(row?.period_no) === Number(period.period_no) ? 'selected' : ''}>คาบ ${period.period_no} (${esc(String(period.start_time || '').slice(0, 5))}-${esc(String(period.end_time || '').slice(0, 5))})</option>`).join('')
  const dayOptions = DAYS.map(([value, label]) => `<option value="${value}" ${Number(row?.day_of_week) === value ? 'selected' : ''}>${label}</option>`).join('')
  const spanOptions = [1, 2, 3, 4].map(value => `<option value="${value}" ${Number(row?.span_periods || 1) === value ? 'selected' : ''}>${value} คาบต่อเนื่อง</option>`).join('')
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `<div class="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
    <div class="flex items-start justify-between gap-3"><div><h2 class="text-lg font-extrabold text-gray-800">${row ? 'แก้ไขรายการตารางสอน' : 'เพิ่มรายการตารางสอน'}</h2><p class="mt-1 text-xs text-gray-500">ภาคเรียนที่ ${state.semester}/${state.year} · ระบบตรวจคาบซ้ำ ครูชน และห้องชนก่อนบันทึก</p></div><button type="button" data-close class="text-2xl text-gray-400 hover:text-gray-700">×</button></div>
    <form data-form class="mt-5 space-y-4">
      <div class="grid gap-4 md:grid-cols-2"><label class="text-sm font-semibold text-gray-700">ครูผู้สอน *<select name="teacher_id" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5"><option value="">— เลือกครู —</option>${teacherOptions}</select></label><label class="text-sm font-semibold text-gray-700">รายวิชา / คอร์ส<select name="subject_id" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5"><option value="">— ไม่ผูกคอร์ส —</option>${subjectOptions}</select></label></div>
      <label class="block text-sm font-semibold text-gray-700">ชื่อวิชาในตาราง <span class="font-normal text-gray-400">(กรณีไม่มีคอร์สในระบบ)</span><input name="subject_name" value="${esc(row?.subject_name || '')}" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5" /></label>
      <div class="grid gap-4 md:grid-cols-2"><label class="text-sm font-semibold text-gray-700">ห้องเรียน / กลุ่มเรียน<input name="class_name" value="${esc(row?.class_name || '')}" placeholder="เช่น ม.6/2" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5" /></label><label class="text-sm font-semibold text-gray-700">วันเรียน<select name="day_of_week" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5">${dayOptions}</select></label></div>
      <div class="grid gap-4 md:grid-cols-2"><label class="text-sm font-semibold text-gray-700">คาบเริ่มต้น<select name="period_no" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5">${periodOptions}</select></label><label class="text-sm font-semibold text-gray-700">จำนวนคาบ<select name="span_periods" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5">${spanOptions}</select></label></div>
      <label class="block text-sm font-semibold text-gray-700">หมายเหตุ<textarea name="note" rows="2" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5">${esc(row?.note || '')}</textarea></label>
      <div data-error class="hidden rounded-xl border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-700"></div>
      <div class="flex flex-wrap justify-end gap-2 border-t border-gray-100 pt-4"><button type="button" data-close class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600">ยกเลิก</button><button type="submit" class="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white">${row ? 'บันทึกการแก้ไข' : 'เพิ่มรายการ'}</button></div>
    </form></div>`
  document.body.appendChild(modal)
  const close = () => { modal.remove(); onClose?.() }
  modal.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', close))
  modal.querySelector('[data-form]').addEventListener('submit', async event => {
    event.preventDefault()
    const form = event.currentTarget
    const errorEl = form.querySelector('[data-error]')
    const payload = {
      teacher_id: Number(form.teacher_id.value),
      subject_id: form.subject_id.value ? Number(form.subject_id.value) : null,
      subject_name: form.subject_name.value.trim() || null,
      class_name: form.class_name.value.trim() || null,
      day_of_week: Number(form.day_of_week.value),
      period_no: Number(form.period_no.value),
      span_periods: Number(form.span_periods.value),
      note: form.note.value.trim() || null,
      academic_year: state.year,
      semester: state.semester,
    }
    const candidate = { ...(row || {}), ...payload, id: row?.id ?? `new-${Date.now()}` }
    const compareRows = state.rows.filter(item => !row || item.id !== row.id)
    const conflicts = buildConflicts([...compareRows, candidate]).get(candidate.id) ?? []
    if (conflicts.length) {
      errorEl.className = 'rounded-xl border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-700'
      errorEl.textContent = `บันทึกไม่ได้: ${conflicts.join(' และ ')} ในวัน/คาบเดียวกัน`
      return
    }
    const button = form.querySelector('button[type="submit"]')
    button.disabled = true; button.textContent = 'กำลังบันทึก...'
    try {
      if (row) await updateScheduleEntry(row.id, payload)
      else await upsertScheduleEntry(payload)
      showToast(row ? 'แก้ไขรายการตารางสอนแล้ว' : 'เพิ่มรายการตารางสอนแล้ว', 'success')
      close(); await onSaved()
    } catch (err) {
      errorEl.className = 'rounded-xl border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-700'
      errorEl.textContent = getFriendlyErrorMessage(err)
      button.disabled = false; button.textContent = row ? 'บันทึกการแก้ไข' : 'เพิ่มรายการ'
    }
  })
}

async function renderAudit(state) {
  const logs = await getAdminAcademicAuditLogs('teacher_schedules', 100)
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `<div class="max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"><div class="flex items-center justify-between"><div><h2 class="text-lg font-extrabold text-gray-800">ประวัติการเปลี่ยนแปลงตารางสอน</h2><p class="mt-1 text-xs text-gray-500">ระบบบันทึกเพิ่ม แก้ไข และลบโดยอัตโนมัติ พร้อมผู้กระทำและเวลาที่เกิดรายการ</p></div><button data-close class="text-2xl text-gray-400">×</button></div><div class="mt-4 overflow-x-auto"><table class="w-full min-w-[760px] text-left text-xs"><thead class="bg-gray-50 text-gray-500"><tr><th class="px-3 py-2">เวลา</th><th class="px-3 py-2">การกระทำ</th><th class="px-3 py-2">รายการ</th><th class="px-3 py-2">ภาคเรียน</th><th class="px-3 py-2">ผู้ดำเนินการ</th></tr></thead><tbody class="divide-y divide-gray-100">${logs.map(log => `<tr><td class="px-3 py-2">${esc(new Date(log.created_at).toLocaleString('th-TH'))}</td><td class="px-3 py-2 font-semibold">${log.action === 'insert' ? 'เพิ่ม' : log.action === 'update' ? 'แก้ไข' : 'ลบ'}</td><td class="px-3 py-2">#${esc(log.record_id)}</td><td class="px-3 py-2">${log.semester && log.academic_year ? `${log.semester}/${log.academic_year}` : '—'}</td><td class="px-3 py-2 font-mono text-[10px]">${esc(log.actor_profile_id || 'ระบบ')}</td></tr>`).join('')}</tbody></table></div></div>`
  document.body.appendChild(modal)
  modal.querySelector('[data-close]').addEventListener('click', () => modal.remove())
}

export async function renderAdminScheduleManagement() {
  const main = document.getElementById('main-content')
  if (!main) return
  document.getElementById('page-title').textContent = 'จัดการตารางสอน'
  document.querySelectorAll('[data-nav]').forEach(item => {
    item.classList.toggle('bg-indigo-800', item.dataset.nav === 'schedule-admin')
    item.classList.toggle('text-white', item.dataset.nav === 'schedule-admin')
    item.classList.toggle('text-indigo-200', item.dataset.nav !== 'schedule-admin')
  })
  main.innerHTML = '<div class="flex justify-center py-16 text-gray-400">กำลังโหลดข้อมูลตารางสอน...</div>'
  try {
    const cfg = await getSystemConfig().catch(() => ({}))
    const state = {
      year: Number(cfg.academicYear ?? cfg.academic_year ?? new Date().getFullYear() + 543),
      semester: Number(cfg.semester ?? 1), teachers: [], periods: [], subjects: [], rows: [], query: '', day: '',
    }
    const load = async () => {
      ;[state.teachers, state.periods, state.subjects, state.rows] = await Promise.all([
        getTeachers(), getPeriods(), getMasterSubjectsAdmin(), getScheduleEntriesForTerm(state.year, state.semester),
      ])
    }
    await load()
    const teacherById = Object.fromEntries(state.teachers.map(teacher => [teacher.id, teacher]))
    const subjectById = Object.fromEntries(state.subjects.map(subject => [subject.id, subject]))
    const render = () => {
      const q = state.query.toLocaleLowerCase('th-TH')
      const matchesRow = row => {
        const teacher = teacherById[row.teacher_id]
        const subject = subjectById[row.subject_id]
        const haystack = [teacher?.full_name, teacher?.teacher_code, row.class_name, row.subject_name, subject?.subject_name, subject?.subject_code].join(' ').toLocaleLowerCase('th-TH')
        return (!q || haystack.includes(q)) && (state.day === '' || String(row.day_of_week) === state.day)
      }
      const visibleRows = state.rows.filter(matchesRow)
      const conflictSet = buildConflicts(state.rows)
      const teacherItems = state.teachers.map(teacher => {
        const teacherRows = state.rows.filter(row => String(row.teacher_id) === String(teacher.id))
        const teacherHaystack = [teacher.full_name, teacher.teacher_code].join(' ').toLocaleLowerCase('th-TH')
        return { teacher, rows: teacherRows, visibleRows: teacherRows.filter(matchesRow), matches: (!q && state.day === '') || (q && teacherHaystack.includes(q)) || teacherRows.some(matchesRow) }
      }).filter(item => item.matches)
      const orphanRows = state.rows.filter(row => !teacherById[row.teacher_id] && matchesRow(row))
      if (orphanRows.length) teacherItems.push({ teacher: { id: null, full_name: 'ครูที่ไม่พบในรายชื่อ' }, rows: orphanRows, visibleRows: orphanRows, matches: true })
      const withSchedules = teacherItems.filter(item => item.rows.length).length
      const problemTeachers = teacherItems.filter(item => !item.teacher.id || item.rows.some(row => conflictSet.has(row.id))).length
      main.innerHTML = `<div class="mx-auto max-w-7xl animate-fade space-y-5"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="text-xl font-extrabold text-gray-800">🗓️ จัดการตารางสอน</h2><p class="mt-1 text-sm text-gray-500">แสดงรายชื่อครูเป็นหลัก คลิกปุ่มตารางสอนเพื่อดูและจัดการรายละเอียดรายบุคคล</p></div><div class="flex flex-wrap gap-2"><button data-ai class="rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-bold text-violet-700">🤖 นำเข้าด้วย AI</button><button data-audit class="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600">🧾 ประวัติการเปลี่ยนแปลง</button><button data-add class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white">＋ เพิ่มรายการ</button></div></div><div class="grid gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:grid-cols-[220px_220px_1fr_180px]"><select data-term class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${termOptions(state.year, state.semester)}</select><input data-search value="${esc(state.query)}" placeholder="ค้นหาครู ห้องเรียน หรือรายวิชา" class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm" /><select data-day class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><option value="">ทุกวัน</option>${DAYS.map(([value, label]) => `<option value="${value}" ${state.day === String(value) ? 'selected' : ''}>${label}</option>`).join('')}</select><div class="rounded-xl bg-gray-50 px-3 py-2.5 text-sm text-gray-600">พบครู <b class="text-indigo-600">${teacherItems.length}</b> คน<br><span class="text-xs text-gray-400">${visibleRows.length} รายการ · มีตาราง ${withSchedules} · ปัญหา ${problemTeachers}</span></div></div><div class="flex flex-wrap items-center gap-3 text-xs text-gray-500"><span class="font-semibold text-gray-700">สถานะ:</span><span class="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">● มีตารางสอน</span><span class="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-600">● ยังไม่มีตารางสอน</span><span class="rounded-full bg-rose-50 px-3 py-1 font-semibold text-rose-700">● มีปัญหา/คาบชน</span></div><div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">${teacherItems.map((item, index) => { const style = teacherCardStyle(item.rows, conflictSet, !item.teacher.id); const teacher = item.teacher; return `<article class="rounded-2xl border-2 ${style.border} ${style.glow} bg-white p-4 transition hover:-translate-y-0.5"><div class="flex items-start justify-between gap-3"><div><h3 class="font-extrabold text-gray-800">${esc(teacher.full_name)}</h3><p class="mt-1 text-xs text-gray-400">${esc(teacher.teacher_code || 'ไม่มีรหัสครู')}</p></div><span class="rounded-full px-2.5 py-1 text-[11px] font-bold ${style.badge}">${style.label}</span></div><div class="mt-4 flex items-end justify-between gap-3"><div><p class="text-2xl font-black text-gray-800">${item.rows.length}</p><p class="text-xs text-gray-500">รายการตารางสอน</p></div><button data-view-teacher="${index}" class="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-700">🗓️ ตารางสอน</button></div></article>` }).join('') || '<div class="col-span-full rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center text-gray-400">ไม่พบครูหรือตารางสอนตามเงื่อนไข</div>'}</div></div>`
      main.querySelector('[data-ai]').addEventListener('click', async () => {
        const { renderAdminScheduleImport } = await import('./admin-schedule-import.js')
        renderAdminScheduleImport({ onBack: renderAdminScheduleManagement })
      })
      main.querySelector('[data-audit]').addEventListener('click', () => renderAudit(state).catch(error => showToast(getFriendlyErrorMessage(error), 'error')))
      main.querySelector('[data-add]').addEventListener('click', () => renderForm({ state, onSaved: async () => { await load(); render() }, onClose: render }))
      main.querySelector('[data-search]').addEventListener('input', event => { state.query = event.target.value; render() })
      main.querySelector('[data-day]').addEventListener('change', event => { state.day = event.target.value; render() })
      main.querySelector('[data-term]').addEventListener('change', async event => { const [year, semester] = event.target.value.split('|').map(Number); state.year = year; state.semester = semester; await load(); render() })
      main.querySelectorAll('[data-view-teacher]').forEach(button => button.addEventListener('click', () => { const item = teacherItems[Number(button.dataset.viewTeacher)]; if (item) renderTeacherScheduleGridPopup({ teacher: item.teacher, rows: item.rows, state, subjectById, conflictSet, cfg, onChanged: async () => { await load(); render() } }) }))
    }
    render()
  } catch (error) {
    main.innerHTML = `<div class="rounded-2xl border border-rose-100 bg-rose-50 p-6 text-sm text-rose-700">โหลดหน้าจัดการตารางสอนไม่สำเร็จ: ${esc(getFriendlyErrorMessage(error))}</div>`
  }
}
