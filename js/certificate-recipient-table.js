// ตารางรายชื่อกลางสำหรับออกเกียรติบัตรแบบหลายรายชื่อ
import {
  getCertificateRecipientTables, createCertificateRecipientTable, updateCertificateRecipientTable,
  deleteCertificateRecipientTable, getStudentByCodeForCertificateIssuance, getTeacherByCodeForCertificateIssuance,
  issueCertificatesBatch, updateCertificateTemplateLayout,
} from './certificates-api.js'
import { openCertificateLayoutEditor } from './certificate-editor.js'
import { showToast, showDangerConfirm } from './ui.js'

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const clone = value => JSON.parse(JSON.stringify(value))
const recipientConfig = {
  student: { label: 'นักเรียน', codeKey: 'student_code', codeLabel: 'รหัสนักเรียน', nameLabel: 'ชื่อ-สกุลนักเรียน' },
  teacher: { label: 'คุณครู', codeKey: 'teacher_code', codeLabel: 'รหัสครู', nameLabel: 'ชื่อ-สกุลคุณครู' },
}
const defaultColumnsFor = type => {
  const config = recipientConfig[type] ?? recipientConfig.student
  return [
    { key: config.codeKey, label: config.codeLabel, system: true, removable: false },
    { key: 'name', label: config.nameLabel, system: true, removable: false },
  ]
}
const newRow = type => {
  const codeKey = (recipientConfig[type] ?? recipientConfig.student).codeKey
  return { id: `row-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`, student_id: null, teacher_id: null, selected: true, lookup_status: 'idle', values: { [codeKey]: '', name: '' } }
}
const safeKey = value => String(value ?? '').trim().toLowerCase().replace(/[^a-z0-9_]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40)

// Google Sheets และ Excel ส่งข้อมูลผ่าน Clipboard เป็นตารางคั่นด้วย Tab/ขึ้นบรรทัดใหม่
// รองรับเครื่องหมายคำพูดและเครื่องหมายคำพูดซ้อนตามรูปแบบ TSV ด้วย
export function parseCertificateRecipientClipboard(text) {
  const source = String(text ?? '').replace(/\r\n?/g, '\n')
  const rows = []
  let row = [], cell = '', quoted = false
  for (let index = 0; index < source.length; index++) {
    const char = source[index]
    if (char === '"') {
      if (quoted && source[index + 1] === '"') { cell += '"'; index++ }
      else quoted = !quoted
    } else if (char === '\t' && !quoted) {
      row.push(cell); cell = ''
    } else if (char === '\n' && !quoted) {
      row.push(cell); rows.push(row); row = []; cell = ''
    } else cell += char
  }
  row.push(cell); rows.push(row)
  while (rows.length > 1 && rows.at(-1).every(value => value === '')) rows.pop()
  return rows
}

function fullThaiPrefix(value) {
  const name = String(value ?? '').trim().replace(/\s+/g, ' ')
  for (const [pattern, full] of [
    [/^ด\.?\s*ช\.?\s*/i, 'เด็กชาย '],
    [/^ด\.?\s*ญ\.?\s*/i, 'เด็กหญิง '],
    [/^น\.?\s*ส\.?\s*/i, 'นางสาว '],
  ]) if (pattern.test(name)) return name.replace(pattern, full).replace(/\s+/g, ' ').trim()
  return name
}

function hydrateTable(table) {
  const next = clone(table)
  next.recipient_type = next.recipient_type === 'teacher' || next.columns?.some(column => column.key === 'teacher_code') ? 'teacher' : 'student'
  const config = recipientConfig[next.recipient_type]
  next.columns = next.columns?.length ? next.columns : defaultColumnsFor(next.recipient_type)
  next.rows = (next.rows?.length ? next.rows : [newRow(next.recipient_type)]).map(row => ({
    selected: true,
    lookup_status: (next.recipient_type === 'teacher' ? row.teacher_id : row.student_id) ? 'found' : 'idle',
    ...row,
    values: { [config.codeKey]: '', name: '', ...(row.values ?? {}) },
  }))
  return next
}

function tokensFor(columns) {
  return columns.filter(column => column.key !== 'name').map(column => ({ token: `{{${column.key}}}`, label: column.label }))
}

export async function renderCertificateRecipientTable({ panel, teacher, templates }) {
  if (panel.dataset.certMode !== 'table') return
  panel.innerHTML = `<p class="text-sm text-gray-400 text-center py-12">⏳ กำลังโหลดตารางรายชื่อ...</p>`
  let savedTables
  try { savedTables = await getCertificateRecipientTables(teacher?.id) }
  catch (error) { panel.innerHTML = `<p class="text-sm text-red-500 text-center py-12">โหลดตารางไม่สำเร็จ: ${esc(error.message)}</p>`; return }
  if (panel.dataset.certMode !== 'table') return
  if (!templates?.length) { panel.innerHTML = `<p class="text-sm text-gray-400 text-center py-12">กรุณาสร้างเทมเพลตก่อน</p>`; return }

  const makeDraft = (type = 'student') => hydrateTable({ id: null, recipient_type: type, name: `ตารางรายชื่อ${recipientConfig[type].label} ${new Date().toLocaleDateString('th-TH')}`, title: '', template_id: templates[0].id, columns: defaultColumnsFor(type), rows: [newRow(type)] })
  let current = savedTables[0] ? hydrateTable(savedTables[0]) : makeDraft()

  panel.innerHTML = `
    <div class="space-y-4">
      <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3">
        <div class="flex items-end gap-2 flex-wrap">
          <label class="min-w-[220px] flex-1 text-xs font-bold text-gray-500">ตารางรายชื่อที่บันทึกไว้<select id="crt-select" class="mt-1 w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white"></select></label>
          <button id="crt-new" type="button" class="h-[38px] px-3 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold">➕ ตารางใหม่</button>
          <button id="crt-delete" type="button" class="h-[38px] px-3 rounded-xl bg-red-50 text-red-600 text-xs font-bold">🗑️ ลบตาราง</button>
        </div>
        <div class="grid md:grid-cols-3 gap-3">
          <label class="text-xs font-bold text-gray-500">ชื่อตาราง<input id="crt-name" class="mt-1 w-full border border-gray-300 rounded-xl px-3 py-2 text-sm" /></label>
          <label class="text-xs font-bold text-gray-500">เทมเพลต<select id="crt-template" class="mt-1 w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white">${templates.map(t => `<option value="${t.id}">${esc(t.name)}</option>`).join('')}</select></label>
          <label class="text-xs font-bold text-gray-500">ชื่อรายการในประวัติ<input id="crt-title" placeholder="เช่น รางวัลคนดีศรีอาซิซ" class="mt-1 w-full border border-gray-300 rounded-xl px-3 py-2 text-sm" /></label>
        </div>
        <div>
          <p class="text-[10px] font-bold text-gray-400 mb-1.5">ประเภทผู้รับในตารางนี้</p>
          <div class="inline-flex gap-1.5 rounded-xl bg-gray-100 p-1">
            <button id="crt-type-student" type="button" class="crt-recipient-type px-4 py-2 rounded-lg text-xs font-bold" data-type="student">🎓 นักเรียน</button>
            <button id="crt-type-teacher" type="button" class="crt-recipient-type px-4 py-2 rounded-lg text-xs font-bold" data-type="teacher">👩‍🏫 คุณครู</button>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <button id="crt-save" type="button" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">💾 บันทึกตาราง</button>
          <button id="crt-link" type="button" class="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold">🔗 ออกแบบ / ผูกคอลัมน์กับเทมเพลต</button>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div class="p-3 border-b flex items-center gap-2 flex-wrap">
          <div class="mr-auto"><p id="crt-grid-title" class="text-sm font-bold text-gray-800">📊 ตารางผู้รับ</p><p id="crt-grid-help" class="text-[10px] text-gray-400">กรอกรหัสแล้วออกจากช่อง ระบบจะเติมชื่อแบบเต็มอัตโนมัติ</p></div>
          <button id="crt-add-row" type="button" class="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-xs font-bold">➕ เพิ่มแถว</button>
        </div>
        <div class="px-3 py-2 bg-indigo-50 border-b border-indigo-100 flex items-end gap-2 flex-wrap">
          <label class="text-[10px] font-bold text-indigo-700">ชื่อคอลัมน์<input id="crt-col-label" placeholder="เช่น รางวัล" class="mt-1 block w-44 border border-indigo-200 rounded-lg px-2.5 py-1.5 text-xs bg-white" /></label>
          <label class="text-[10px] font-bold text-indigo-700">ตัวแปรในเทมเพลต<input id="crt-col-key" placeholder="award" class="mt-1 block w-36 border border-indigo-200 rounded-lg px-2.5 py-1.5 text-xs bg-white font-mono" /></label>
          <button id="crt-add-column" type="button" class="h-[32px] px-3 rounded-lg bg-indigo-600 text-white text-xs font-bold">➕ เพิ่มคอลัมน์</button>
          <p class="text-[10px] text-indigo-500">จะได้ตัวแปรเช่น <code>{{award}}</code></p>
        </div>
        <div id="crt-grid" class="overflow-x-auto"></div>
        <div class="p-3 border-t flex justify-end"><button id="crt-issue" type="button" class="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold"></button></div>
      </div>
    </div>`

  const select = panel.querySelector('#crt-select')
  const nameInput = panel.querySelector('#crt-name')
  const templateSelect = panel.querySelector('#crt-template')
  const titleInput = panel.querySelector('#crt-title')
  const grid = panel.querySelector('#crt-grid')
  const saveButton = panel.querySelector('#crt-save')
  const issueButton = panel.querySelector('#crt-issue')

  function renderOptions() {
    select.innerHTML = `<option value="">— ตารางใหม่ / ยังไม่บันทึก —</option>${savedTables.map(table => `<option value="${table.id}">${esc(table.name)}</option>`).join('')}`
    select.value = current.id ? String(current.id) : ''
  }
  function renderMeta() {
    nameInput.value = current.name ?? ''; templateSelect.value = String(current.template_id ?? templates[0].id); titleInput.value = current.title ?? ''
    panel.querySelector('#crt-delete').disabled = !current.id
    panel.querySelector('#crt-delete').classList.toggle('opacity-40', !current.id)
    panel.querySelectorAll('.crt-recipient-type').forEach(button => {
      const active = button.dataset.type === current.recipient_type
      button.className = `crt-recipient-type px-4 py-2 rounded-lg text-xs font-bold ${active ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500 hover:bg-white'}`
    })
    const config = recipientConfig[current.recipient_type]
    panel.querySelector('#crt-grid-title').textContent = `📊 ตารางผู้รับ: ${config.label}`
    panel.querySelector('#crt-grid-help').textContent = `กรอก${config.codeLabel}แล้วออกจากช่อง ระบบจะเติม${config.nameLabel}อัตโนมัติ • กด Enter เพื่อขึ้นแถวใหม่ • วางข้อมูลทั้งคอลัมน์จาก Excel/Sheets ได้เลย`
  }
  function renderGrid() {
    const config = recipientConfig[current.recipient_type]
    const recipientId = row => current.recipient_type === 'teacher' ? row.teacher_id : row.student_id
    grid.innerHTML = `<table class="min-w-full text-xs border-collapse"><thead><tr class="bg-gray-50 text-gray-600">
      <th class="p-2 border-b"><input id="crt-all" type="checkbox" ${current.rows.every(r => r.selected !== false) ? 'checked' : ''}></th><th class="p-2 border-b">#</th>
      ${current.columns.map(column => `<th class="p-2 border-b text-left min-w-[170px]"><div class="flex gap-1"><span>${esc(column.label)}</span>${column.removable === false ? '' : `<button data-key="${esc(column.key)}" class="crt-remove-col ml-auto text-red-400">×</button>`}</div><code class="text-[9px] text-indigo-500">{{${esc(column.key)}}}</code></th>`).join('')}<th class="p-2 border-b"></th></tr></thead>
      <tbody>${current.rows.map((row, index) => `<tr class="${row.lookup_status === 'missing' ? 'bg-red-50' : 'bg-white'}"><td class="p-2 border-b text-center"><input type="checkbox" class="crt-row-check" data-row="${row.id}" ${row.selected !== false ? 'checked' : ''}></td><td class="p-2 border-b text-gray-400">${index + 1}</td>
        ${current.columns.map(column => column.key === config.codeKey
          ? `<td class="p-2 border-b"><input class="crt-cell w-full border ${row.lookup_status === 'missing' ? 'border-red-400' : 'border-gray-300'} rounded-lg px-2.5 py-2 font-mono" data-row="${row.id}" data-key="${config.codeKey}" value="${esc(row.values[config.codeKey])}" placeholder="กรอก${config.codeLabel}">${row.lookup_status === 'loading' ? '<p class="text-[9px] text-indigo-500 mt-1">กำลังค้นหา...</p>' : row.lookup_status === 'missing' ? `<p class="text-[9px] text-red-500 mt-1">ไม่พบ${config.codeLabel}</p>` : ''}</td>`
          : column.key === 'name'
            ? `<td class="p-2 border-b"><div class="min-h-[36px] rounded-lg border bg-gray-50 px-2.5 py-2 font-bold ${recipientId(row) ? 'text-gray-800' : 'text-gray-400'}">${esc(row.values.name || `รอกรอก${config.codeLabel}`)}</div></td>`
            : `<td class="p-2 border-b"><input class="crt-cell w-full border border-gray-300 rounded-lg px-2.5 py-2" data-row="${row.id}" data-key="${esc(column.key)}" value="${esc(row.values[column.key] ?? '')}"></td>`).join('')}
        <td class="p-2 border-b"><button class="crt-remove-row text-red-400" data-row="${row.id}">🗑️</button></td></tr>`).join('')}</tbody></table>`
    grid.querySelector('#crt-all').addEventListener('change', e => { current.rows.forEach(r => { r.selected = e.target.checked }); renderGrid() })
    grid.querySelectorAll('.crt-row-check').forEach(input => input.addEventListener('change', () => { current.rows.find(r => r.id === input.dataset.row).selected = input.checked; updateIssueLabel() }))
    grid.querySelectorAll('.crt-cell').forEach(input => {
      input.addEventListener('input', () => {
        const row = current.rows.find(r => r.id === input.dataset.row); row.values[input.dataset.key] = input.value
        if (input.dataset.key === config.codeKey) { row.student_id = null; row.teacher_id = null; row.values.name = ''; row.lookup_status = 'idle' }
      })
      if (input.dataset.key === config.codeKey) input.addEventListener('change', () => lookup(input.dataset.row))
      input.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return
        e.preventDefault()
        const rowIndex = current.rows.findIndex(r => r.id === input.dataset.row)
        if (rowIndex === -1) return
        if (rowIndex === current.rows.length - 1) { current.rows.push(newRow(current.recipient_type)); renderGrid() }
        const nextRow = current.rows[rowIndex + 1]
        grid.querySelector(`.crt-cell[data-row="${nextRow.id}"][data-key="${input.dataset.key}"]`)?.focus()
      })
      input.addEventListener('paste', e => handlePaste(e, input))
    })
    grid.querySelectorAll('.crt-remove-row').forEach(button => button.addEventListener('click', () => { current.rows = current.rows.filter(r => r.id !== button.dataset.row); if (!current.rows.length) current.rows.push(newRow(current.recipient_type)); renderGrid() }))
    grid.querySelectorAll('.crt-remove-col').forEach(button => button.addEventListener('click', () => { current.columns = current.columns.filter(c => c.key !== button.dataset.key); current.rows.forEach(r => { delete r.values[button.dataset.key] }); renderGrid() }))
    updateIssueLabel()
  }
  function updateIssueLabel() { issueButton.textContent = `🏅 ออกเกียรติบัตรแถวที่เลือก (${current.rows.filter(r => r.selected !== false).length})` }
  async function lookup(rowId) {
    const config = recipientConfig[current.recipient_type]
    const row = current.rows.find(r => r.id === rowId); const code = String(row.values[config.codeKey] ?? '').trim()
    if (!code) { row.student_id = null; row.teacher_id = null; row.values.name = ''; row.lookup_status = 'idle'; renderGrid(); return }
    row.lookup_status = 'loading'; renderGrid()
    try {
      const recipient = current.recipient_type === 'teacher'
        ? await getTeacherByCodeForCertificateIssuance(code)
        : await getStudentByCodeForCertificateIssuance(code)
      if (String(row.values[config.codeKey] ?? '').trim() !== code) return
      if (!recipient) { row.student_id = null; row.teacher_id = null; row.values.name = ''; row.lookup_status = 'missing' }
      else {
        row.student_id = current.recipient_type === 'student' ? recipient.id : null
        row.teacher_id = current.recipient_type === 'teacher' ? recipient.id : null
        row.values[config.codeKey] = recipient[config.codeKey]
        row.values.name = fullThaiPrefix(recipient.full_name)
        if (current.recipient_type === 'student') row.values.main_room = recipient.main_room ?? ''
        row.lookup_status = 'found'
      }
    } catch (error) { row.student_id = null; row.teacher_id = null; row.values.name = ''; row.lookup_status = 'missing'; showToast('ค้นหาไม่สำเร็จ: ' + error.message, 'error') }
    renderGrid()
  }
  async function handlePaste(event, input) {
    const text = event.clipboardData?.getData('text')
    if (text == null) return
    const parsed = parseCertificateRecipientClipboard(text)
    if (parsed.length === 1 && parsed[0].length === 1) {
      event.preventDefault()
      const value = parsed[0][0]
      const start = input.selectionStart ?? input.value.length; const end = input.selectionEnd ?? input.value.length
      input.value = input.value.slice(0, start) + value + input.value.slice(end)
      input.setSelectionRange(start + value.length, start + value.length)
      input.dispatchEvent(new Event('input', { bubbles: true }))
      return
    }
    event.preventDefault()
    const config = recipientConfig[current.recipient_type]
    const editableColumns = current.columns.filter(c => c.key !== 'name')
    const startColIndex = editableColumns.findIndex(c => c.key === input.dataset.key)
    const startRowIndex = current.rows.findIndex(r => r.id === input.dataset.row)
    if (startColIndex === -1 || startRowIndex === -1) return
    const touchedCodeRowIds = []
    parsed.forEach((sourceRow, rowOffset) => {
      const rowIndex = startRowIndex + rowOffset
      while (rowIndex >= current.rows.length) current.rows.push(newRow(current.recipient_type))
      const row = current.rows[rowIndex]
      sourceRow.forEach((value, colOffset) => {
        const column = editableColumns[startColIndex + colOffset]
        if (!column) return
        row.values[column.key] = value.trim()
        if (column.key === config.codeKey) { row.student_id = null; row.teacher_id = null; row.values.name = ''; row.lookup_status = 'idle'; touchedCodeRowIds.push(row.id) }
      })
    })
    renderGrid()
    await Promise.all(touchedCodeRowIds.map(rowId => lookup(rowId)))
  }
  function syncMeta() { current.name = nameInput.value.trim(); current.template_id = Number(templateSelect.value) || null; current.title = titleInput.value.trim() }
  async function save(quiet = false) {
    syncMeta(); if (!current.name) { showToast('กรุณาตั้งชื่อตาราง', 'warning'); return null }
    saveButton.disabled = true
    try {
      const persistedRows = current.rows.map(row => ({ id: row.id, student_id: row.student_id ?? null, teacher_id: row.teacher_id ?? null, values: row.values ?? {} }))
      const args = { id: current.id, name: current.name, recipientType: current.recipient_type, templateId: current.template_id, title: current.title, columns: current.columns, rows: persistedRows, createdByTeacherId: teacher.id }
      const result = current.id ? await updateCertificateRecipientTable(args) : await createCertificateRecipientTable(args)
      current = hydrateTable(result); savedTables = await getCertificateRecipientTables(teacher.id); renderOptions(); renderMeta(); renderGrid()
      if (!quiet) showToast('บันทึกตารางแล้ว ✅', 'success')
      return result
    } catch (error) { showToast('บันทึกไม่สำเร็จ: ' + error.message, 'error'); return null }
    finally { saveButton.disabled = false }
  }

  renderOptions(); renderMeta(); renderGrid()
  select.addEventListener('change', () => { const found = savedTables.find(t => t.id === Number(select.value)); current = found ? hydrateTable(found) : makeDraft(); renderMeta(); renderGrid() })
  panel.querySelector('#crt-new').addEventListener('click', () => { current = makeDraft(); renderOptions(); renderMeta(); renderGrid() })
  panel.querySelectorAll('.crt-recipient-type').forEach(button => button.addEventListener('click', () => {
    const nextType = button.dataset.type
    if (nextType === current.recipient_type) return
    const customColumns = current.columns.filter(column => !column.system)
    current.recipient_type = nextType
    current.columns = [...defaultColumnsFor(nextType), ...customColumns]
    current.rows = current.rows.map(row => ({ ...newRow(nextType), id: row.id, selected: row.selected, values: { ...Object.fromEntries(customColumns.map(column => [column.key, row.values?.[column.key] ?? ''])), [(recipientConfig[nextType]).codeKey]: '', name: '' } }))
    renderMeta(); renderGrid()
    showToast(`เปลี่ยนเป็นตาราง${recipientConfig[nextType].label}แล้ว กรุณากรอกรหัสใหม่`, 'info')
  }))
  panel.querySelector('#crt-add-row').addEventListener('click', () => { current.rows.push(newRow(current.recipient_type)); renderGrid() })
  panel.querySelector('#crt-add-column').addEventListener('click', () => {
    const labelInput = panel.querySelector('#crt-col-label'); const keyInput = panel.querySelector('#crt-col-key'); const label = labelInput.value.trim()
    let key = safeKey(keyInput.value) || `field_${current.columns.filter(c => !c.system).length + 1}`
    if (!label) { showToast('กรุณากรอกชื่อคอลัมน์', 'warning'); return }
    if (['date', 'no'].includes(key) || current.columns.some(c => c.key === key)) { showToast('ชื่อตัวแปรนี้ถูกใช้แล้ว', 'warning'); return }
    current.columns.push({ key, label, system: false, removable: true }); current.rows.forEach(r => { r.values[key] = '' }); labelInput.value = ''; keyInput.value = ''; renderGrid()
  })
  saveButton.addEventListener('click', () => save())
  panel.querySelector('#crt-delete').addEventListener('click', async () => {
    if (!current.id || !await showDangerConfirm({ title: 'ลบตารางนี้?', message: 'ใบที่ออกไปแล้วยังคงอยู่ แต่ตารางจะกู้คืนไม่ได้', confirmText: 'ลบตาราง' })) return
    try { await deleteCertificateRecipientTable(current.id); savedTables = await getCertificateRecipientTables(teacher.id); current = savedTables[0] ? hydrateTable(savedTables[0]) : makeDraft(); renderOptions(); renderMeta(); renderGrid() }
    catch (error) { showToast('ลบไม่สำเร็จ: ' + error.message, 'error') }
  })
  panel.querySelector('#crt-link').addEventListener('click', () => {
    syncMeta(); const template = templates.find(t => t.id === current.template_id)
    if (!template) { showToast('กรุณาเลือกเทมเพลต', 'warning'); return }
    const sample = current.rows.find(r => current.recipient_type === 'teacher' ? r.teacher_id : r.student_id)?.values ?? {}
    openCertificateLayoutEditor({ template, previewVariables: sample, placeholderTokens: tokensFor(current.columns), onSave: async (layout, backgroundImageUrl) => {
      await updateCertificateTemplateLayout({ id: template.id, layout, backgroundImageUrl }); template.layout = layout; if (backgroundImageUrl) template.background_image_url = backgroundImageUrl; showToast('บันทึกดีไซน์และการผูกคอลัมน์แล้ว ✅', 'success')
    } })
  })
  issueButton.addEventListener('click', async () => {
    syncMeta(); const rows = current.rows.filter(r => r.selected !== false)
    if (!rows.length) { showToast('กรุณาเลือกอย่างน้อย 1 แถว', 'warning'); return }
    const invalid = rows.filter(r => !(current.recipient_type === 'teacher' ? r.teacher_id : r.student_id) || !r.values.name)
    if (invalid.length) { showToast(`มี ${invalid.length} แถวที่ยังไม่พบข้อมูล${recipientConfig[current.recipient_type].label}`, 'warning'); return }
    issueButton.disabled = true
    try {
      if (!await save(true)) return
      const recipients = rows.map(r => ({
        studentId: current.recipient_type === 'student' ? r.student_id : null,
        teacherId: current.recipient_type === 'teacher' ? r.teacher_id : null,
        recipientName: fullThaiPrefix(r.values.name),
        variables: { ...r.values, name: fullThaiPrefix(r.values.name) },
      }))
      const result = await issueCertificatesBatch({ templateId: current.template_id, recipientType: current.recipient_type, recipients, title: current.title, issuedByTeacherId: teacher.id })
      showToast(`ออกเกียรติบัตรสำเร็จ ${result.length} ใบ ✅`, 'success')
    } catch (error) { showToast('ออกเกียรติบัตรไม่สำเร็จ: ' + error.message, 'error') }
    finally { issueButton.disabled = false; updateIssueLabel() }
  })
}
