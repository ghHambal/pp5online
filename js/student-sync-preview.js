const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export function confirmStudentSyncPreview(preview) {
  return new Promise(resolve => {
    const previousFocus = document.activeElement
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/60 p-3'
    const labels = { full_name: 'ชื่อ', main_room: 'ห้องสามัญ', religion_room: 'ห้องศาสนา', gender: 'เพศ', image_url: 'รูปภาพ', is_active: 'สถานะ', house_color: 'สี', sports_shirt_size: 'ไซซ์เสื้อ' }
    const group = (title, count, students) => `<details class="rounded-xl border p-3"><summary class="font-semibold cursor-pointer">${title}: ${esc(count)} คน</summary><ul class="mt-2 text-sm space-y-1">${(students || []).map(s => `<li>${esc(s.student_code)} — ${esc(s.full_name)}${s.changes?.length ? `<span class="block text-xs text-gray-500">${s.changes.map(c => `${esc(labels[c.field] || c.field)}: ${esc(c.before)} → ${esc(c.after)}`).join('<br>')}</span>` : ''}</li>`).join('') || '<li>ไม่มีรายการ</li>'}</ul>${count > 30 ? '<p class="text-xs text-gray-500 mt-2">แสดงตัวอย่าง 30 คนแรก</p>' : ''}</details>`
    modal.innerHTML = `<section role="dialog" aria-modal="true" aria-labelledby="student-sync-preview-title" class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto p-5 space-y-3">
      <h2 id="student-sync-preview-title" class="font-bold text-xl">ตรวจสอบก่อนอัปเดตนักเรียน</h2>
      <p class="text-sm break-all">ภาคเรียน ${esc(preview.semester)}/${esc(preview.academicYear)} · แหล่งข้อมูล: ${esc(preview.sheetId)} / ${esc(preview.tabName)}</p>
      <p class="text-sm">อ่าน ${esc(preview.read)} แถว · ใช้ได้ ${esc(preview.valid)} คน · ข้าม ${esc(preview.skipped)} แถว · เปิดสถานะกลับมาเรียน ${esc(preview.reactivatedCount)} คน</p>
      ${group('นักเรียนใหม่', preview.newCount, preview.newStudents)}
      ${group('นักเรียนเดิมที่ข้อมูลเปลี่ยน', preview.changedCount, preview.changedStudents)}
      ${group('นักเรียนที่ยังใช้งานอยู่แต่ไม่พบในแหล่งข้อมูล', preview.missingCount, preview.missingStudents)}
      ${preview.duplicateCount ? `<p role="alert" class="text-red-700">พบรหัสซ้ำ ${esc(preview.duplicateCount)} แถว ต้องแก้ต้นทางก่อน: ${esc((preview.duplicateCodes || []).join(', '))}</p>` : ''}
      <p class="text-sm text-emerald-800 bg-emerald-50 rounded-xl p-3">จับคู่ด้วยรหัสนักเรียนเดิม รักษาคะแนนและประวัติเดิม คนที่ไม่พบในแหล่งข้อมูลจะคงสถานะไว้ให้ตรวจสอบ ระบบจะไม่ปิดสถานะอัตโนมัติ</p>
      <div class="flex justify-end gap-2"><button type="button" data-cancel class="border rounded-xl px-4 py-2">ยกเลิก</button><button type="button" data-confirm ${preview.canSync ? '' : 'disabled'} class="bg-emerald-700 text-white disabled:opacity-40 rounded-xl px-4 py-2">ยืนยันอัปเดต ${esc(preview.valid)} คน</button></div>
    </section>`
    const finish = value => {
      document.removeEventListener('keydown', onKey)
      modal.remove()
      previousFocus?.focus()
      resolve(value)
    }
    const onKey = event => {
      if (event.key === 'Escape') finish(false)
      if (event.key === 'Tab') {
        const buttons = [...modal.querySelectorAll('button:not(:disabled), summary')]
        const first = buttons[0], last = buttons.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    modal.addEventListener('click', event => {
      if (event.target === modal || event.target.closest('[data-cancel]')) finish(false)
      else if (event.target.closest('[data-confirm]') && preview.canSync) finish(true)
    })
    document.addEventListener('keydown', onKey)
    document.body.appendChild(modal)
    modal.querySelector('[data-cancel]').focus()
  })
}
