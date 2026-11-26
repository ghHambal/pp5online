import { showDangerConfirm, showToast, getFriendlyErrorMessage } from './ui.js'
import { ATT_STATUS, _fmtDate, _htmlEsc } from './teacher-views-utils.js'
import { saveAttendance } from './api.js'

const STATUS_KEYS = Object.keys(ATT_STATUS)

export function openAttendanceAIAssistant({ classData, students, sessions, holidaySet, attMap, saveClassId, saveSessN, onSaved }) {
  const availableSessions = sessions.filter(s => !holidaySet.has(s.ds))
  if (!availableSessions.length) {
    showToast('ไม่มีคาบที่ใช้เช็คชื่อได้ในห้องนี้', 'warning')
    return
  }

  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-3 sm:p-5'
  modal.innerHTML = `
    <section class="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[94vh] flex flex-col overflow-hidden">
      <header class="px-5 py-4 border-b flex items-start justify-between gap-4">
        <div><h2 class="text-xl font-bold text-gray-900">🤖 ช่วยเช็คชื่อด้วย AI</h2>
          <p class="text-sm text-gray-500 mt-1">เลือกคาบและนักเรียน → คัดลอกคำสั่งไปให้ AI → วางผลเพื่อตรวจรายคนก่อนบันทึก</p></div>
        <button type="button" data-close class="text-gray-500 hover:text-gray-800 text-2xl leading-none" aria-label="ปิด">×</button>
      </header>
      <div class="p-5 overflow-y-auto space-y-5">
        <div class="grid sm:grid-cols-2 gap-4">
          <label class="block text-sm font-semibold text-gray-700">คาบเรียน
            <select data-session class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal">
              ${availableSessions.map(s => `<option value="${s.n}">คาบ ${s.n} · ${_htmlEsc(_fmtDate(s.date))} (${_htmlEsc(s.ds)})</option>`).join('')}
            </select>
          </label>
          <div class="text-sm text-gray-500 sm:self-end">${_htmlEsc(classData.master_subjects?.subject_name ?? 'วิชา')} · ${_htmlEsc(classData.class_name ?? '')}</div>
        </div>

        <section>
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold text-gray-800">เลือกนักเรียน <span data-count class="text-gray-400 font-normal"></span></h3>
            <div class="flex gap-3 text-sm"><button type="button" data-select-all class="text-emerald-700 font-semibold">เลือกทั้งหมด</button><button type="button" data-select-none class="text-gray-500">ล้างที่เลือก</button></div>
          </div>
          <div data-roster class="grid sm:grid-cols-2 gap-x-5 gap-y-1 max-h-44 overflow-y-auto rounded-lg border p-3">
            ${students.map(s => `<label class="flex items-center gap-2 py-1 text-sm"><input data-student type="checkbox" value="${_htmlEsc(s.id)}" checked class="rounded text-emerald-600"><span>${_htmlEsc(s.student_code ?? '')} · ${_htmlEsc(s.full_name ?? '')}</span></label>`).join('')}
          </div>
        </section>

        <label class="block text-sm font-semibold text-gray-700">ข้อมูลที่ใช้ประกอบการเช็คชื่อ
          <textarea data-evidence rows="3" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal" placeholder="เช่น จากภาพใบเช็คชื่อที่แนบให้ AI: เครื่องหมาย ✓ คือมา, ข คือขาด, ส คือสาย"></textarea>
        </label>
        <div class="flex flex-wrap items-center gap-3">
          <button type="button" data-copy-prompt class="rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 font-semibold">✨ คัดลอกคำสั่งให้ AI</button>
          <span class="text-xs text-gray-500">นำคำสั่งไปใช้กับ AI พร้อมแนบหลักฐาน แล้วขอผลเป็น JSON ตามรูปแบบที่ระบุ</span>
        </div>
        <textarea data-prompt readonly rows="5" class="hidden w-full rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 font-mono text-xs"></textarea>
        <label class="block text-sm font-semibold text-gray-700">วางผลจาก AI (JSON)
          <textarea data-json rows="5" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-mono text-sm" placeholder='[{"student_code":"26056","status":"present"}]'></textarea>
        </label>
        <div class="flex items-center gap-3">
          <button type="button" data-preview class="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 font-semibold">🔎 ตรวจผลและแสดงตัวอย่าง</button>
          <span data-error class="text-sm text-red-600"></span>
        </div>
        <section data-preview-panel class="hidden space-y-3">
          <div class="flex flex-wrap justify-between items-center gap-2"><h3 class="font-bold text-gray-800">ตัวอย่างสถานะรายคน</h3><span data-preview-summary class="text-sm text-gray-500"></span></div>
          <div class="max-h-72 overflow-auto border rounded-lg">
            <table class="w-full text-sm"><thead class="sticky top-0 bg-gray-100"><tr><th class="p-2 text-left">รหัส / ชื่อ</th><th class="p-2">สถานะเดิม</th><th class="p-2">สถานะที่จะบันทึก</th></tr></thead><tbody data-preview-rows></tbody></table>
          </div>
          <label data-overwrite-row class="hidden flex items-start gap-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900"><input data-overwrite type="checkbox" class="mt-0.5"><span>อนุญาตเขียนทับสถานะเดิมในคาบนี้ เฉพาะนักเรียนที่เลือกสถานะใหม่</span></label>
        </section>
      </div>
      <footer class="px-5 py-4 border-t flex justify-end gap-2">
        <button type="button" data-close class="px-4 py-2 rounded-lg border text-gray-600">ปิด</button>
        <button type="button" data-save disabled class="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold disabled:opacity-40">ตรวจและบันทึกเช็คชื่อ</button>
      </footer>
    </section>`
  document.body.append(modal)

  const $ = selector => modal.querySelector(selector)
  const roster = () => [...modal.querySelectorAll('[data-student]')]
  const selected = () => roster().filter(el => el.checked).map(el => students.find(s => String(s.id) === el.value)).filter(Boolean)
  const updateCount = () => { $('[data-count]').textContent = `(${selected().length}/${students.length} คน)` }
  const invalidatePreview = () => {
    $('[data-preview-panel]').classList.add('hidden')
    $('[data-save]').disabled = true
  }
  const close = () => modal.remove()
  modal.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', close))
  modal.addEventListener('click', e => { if (e.target === modal) close() })
  roster().forEach(el => el.addEventListener('change', () => { updateCount(); invalidatePreview() }))
  $('[data-select-all]').addEventListener('click', () => { roster().forEach(el => { el.checked = true }); updateCount(); invalidatePreview() })
  $('[data-select-none]').addEventListener('click', () => { roster().forEach(el => { el.checked = false }); updateCount(); invalidatePreview() })
  $('[data-session]').addEventListener('change', invalidatePreview)
  $('[data-json]').addEventListener('input', invalidatePreview)
  updateCount()

  const getSession = () => availableSessions.find(s => s.n === Number($('[data-session]').value))
  $('[data-copy-prompt]').addEventListener('click', async () => {
    const picked = selected()
    const sess = getSession()
    if (!picked.length) { showToast('เลือกนักเรียนอย่างน้อย 1 คนก่อน', 'warning'); return }
    const codes = picked.map(s => String(s.student_code ?? ''))
    if (new Set(codes).size !== codes.length || codes.some(code => !code)) { showToast('รหัสนักเรียนว่างหรือซ้ำ ทำให้ AI ระบุคนไม่ชัดเจน', 'error'); return }
    const evidence = $('[data-evidence]').value.trim()
    const rosterData = picked.map(s => ({ student_code: String(s.student_code ?? ''), name: s.full_name ?? '' }))
    const prompt = `ช่วยประเมินสถานะการเข้าเรียนจากหลักฐานที่แนบ โดยใช้ข้อมูลประกอบต่อไปนี้เท่านั้น: ${evidence || '(ครูจะให้คำอธิบายพร้อมหลักฐาน)'}\nวิชา: ${classData.master_subjects?.subject_name ?? ''} ห้อง: ${classData.class_name ?? ''} วันที่: ${sess.ds} คาบที่: ${sess.n}\nรายชื่อนักเรียนที่ต้องประเมิน:\n${JSON.stringify(rosterData, null, 2)}\n\nคืนคำตอบเป็น JSON array เท่านั้น หนึ่งรายการต่อ student_code ในรูปแบบ [{"student_code":"รหัส","status":"present"}] ใช้ status ได้เฉพาะ present=มา, absent=ขาด, late=สาย, excused=ลากิจ, sick=ป่วย; ถ้าหลักฐานระบุไม่ได้ให้ใช้ null ห้ามเดาหรืออนุมานจากข้อมูลอื่น และห้ามใส่รหัสนอกบัญชีรายชื่อนี้`
    try {
      await navigator.clipboard.writeText(prompt)
      showToast('คัดลอกคำสั่งแล้ว แนบหลักฐานให้ AI และขอคำตอบเป็น JSON ได้เลย', 'success')
    } catch {
      $('[data-prompt]').value = prompt
      $('[data-prompt]').classList.remove('hidden')
      $('[data-prompt]').focus()
      $('[data-prompt]').select()
      showToast('คัดลอกคำสั่งจากช่องสีม่วงด้วยตนเอง แล้วนำไปให้ AI', 'warning')
    }
  })

  $('[data-preview]').addEventListener('click', () => {
    const error = $('[data-error]')
    error.textContent = ''
    $('[data-save]').disabled = true
    $('[data-preview-panel]').classList.add('hidden')
    const picked = selected()
    if (!picked.length) { error.textContent = 'เลือกนักเรียนอย่างน้อย 1 คน'; return }
    const pickedCodes = picked.map(s => String(s.student_code ?? ''))
    if (pickedCodes.some(code => !code) || new Set(pickedCodes).size !== pickedCodes.length) { error.textContent = 'รายชื่อที่เลือกมีรหัสว่างหรือซ้ำ จึงแยกผลรายคนไม่ได้'; return }
    let parsed
    try {
      const raw = $('[data-json]').value.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')
      parsed = JSON.parse(raw)
    } catch { error.textContent = 'JSON ไม่ถูกต้อง กรุณาตรวจรูปแบบแล้วลองใหม่'; return }
    if (!Array.isArray(parsed)) { error.textContent = 'ผลลัพธ์ต้องเป็น JSON array'; return }
    const pickedByCode = new Map(picked.map(s => [String(s.student_code ?? ''), s]))
    const proposals = new Map()
    const invalid = []
    parsed.forEach(row => {
      const code = String(row?.student_code ?? '')
      if (!pickedByCode.has(code)) { invalid.push(`ไม่พบรหัส ${code || '(ว่าง)'}`); return }
      if (proposals.has(code)) { invalid.push(`รหัส ${code} ซ้ำ`); return }
      if (row.status !== null && row.status !== '' && !STATUS_KEYS.includes(row.status)) { invalid.push(`สถานะของ ${code} ไม่ถูกต้อง`); return }
      proposals.set(code, row.status || null)
    })
    if (invalid.length) { error.textContent = invalid.slice(0, 3).join(' · '); return }
    if (!parsed.length) { error.textContent = 'ไม่พบผลประเมิน'; return }

    const sess = getSession()
    const bodyRows = picked.map(st => {
      const code = String(st.student_code ?? '')
      const proposed = proposals.get(code) ?? null
      const current = attMap[st.id]?.[sess.n] ?? null
      const currentText = current ? `${ATT_STATUS[current]?.label ?? current} (${current})` : 'ยังไม่บันทึก'
      const selectedValue = proposed ?? ''
      return `<tr class="border-t"><td class="p-2">${_htmlEsc(code)} · ${_htmlEsc(st.full_name ?? '')}</td><td class="p-2 text-center">${_htmlEsc(currentText)}</td><td class="p-2"><select data-proposal="${_htmlEsc(code)}" class="w-full rounded border border-gray-300 px-2 py-1"><option value="">ไม่เปลี่ยนแปลง${proposals.has(code) ? ' (AI ระบุไม่ชัด)' : ' (ไม่มีผลจาก AI)'}</option>${STATUS_KEYS.map(k => `<option value="${k}" ${selectedValue === k ? 'selected' : ''}>${ATT_STATUS[k].label} · ${k}</option>`).join('')}</select></td></tr>`
    }).join('')
    $('[data-preview-rows]').innerHTML = bodyRows
    const withResult = picked.filter(s => proposals.has(String(s.student_code ?? ''))).length
    $('[data-preview-summary]').textContent = `คาบ ${sess.n} · ${sess.ds} · ได้ผล ${withResult}/${picked.length} คน · ไม่มีผล/ไม่ชัดเจนจะไม่เปลี่ยนข้อมูลเดิม`
    const existingConflicts = picked.some(st => attMap[st.id]?.[sess.n] != null)
    $('[data-overwrite-row]').classList.toggle('hidden', !existingConflicts)
    $('[data-overwrite]').checked = false
    $('[data-preview-panel]').classList.remove('hidden')
    $('[data-save]').disabled = true
    const refreshSave = () => {
      const hasChanges = [...modal.querySelectorAll('[data-proposal]')].some(sel => sel.value && sel.value !== (attMap[pickedByCode.get(sel.dataset.proposal)?.id]?.[sess.n] ?? ''))
      $('[data-save]').disabled = !hasChanges
    }
    modal.querySelectorAll('[data-proposal]').forEach(el => el.addEventListener('change', refreshSave))
    $('[data-overwrite]').addEventListener('change', refreshSave)
    refreshSave()
  })

  $('[data-save]').addEventListener('click', async () => {
    const picked = selected()
    const sess = getSession()
    const studentsByCode = new Map(picked.map(s => [String(s.student_code ?? ''), s]))
    const records = [...modal.querySelectorAll('[data-proposal]')].map(sel => {
      const student = studentsByCode.get(sel.dataset.proposal)
      const current = attMap[student.id]?.[sess.n] ?? null
      return sel.value && sel.value !== current ? { student, status: sel.value, current } : null
    }).filter(Boolean)
    if (!records.length) { showToast('ไม่มีสถานะใหม่ที่ต้องบันทึก', 'warning'); return }
    const overwrites = records.filter(r => r.current)
    if (overwrites.length && !$('[data-overwrite]').checked) {
      showToast('มีสถานะเดิม กรุณาติ๊กอนุญาตเขียนทับก่อนบันทึก', 'warning')
      return
    }
    const ok = await showDangerConfirm({
      title: 'ตรวจยืนยันการบันทึกเช็คชื่อ',
      message: `จะบันทึก ${records.length} รายการ ในคาบ ${sess.n} วันที่ ${sess.ds}${overwrites.length ? ` และเขียนทับสถานะเดิม ${overwrites.length} รายการ` : ''}`,
      detail: 'ระบบจะบันทึกเฉพาะสถานะที่แสดงในตัวอย่างและครูตรวจแล้ว ส่วนที่ AI ระบุไม่ชัดหรือไม่มีผลจะคงข้อมูลเดิม',
      confirmText: 'บันทึกเช็คชื่อ',
    })
    if (!ok) return
    try {
      await saveAttendance(records.map(r => ({ class_id: saveClassId, student_id: r.student.id, session_number: saveSessN(sess.n), check_date: sess.ds, status: r.status })))
      showToast(`บันทึกเช็คชื่อสำเร็จ ${records.length} คน`, 'success')
      close()
      onSaved?.()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + getFriendlyErrorMessage(err), 'error')
    }
  })
}
