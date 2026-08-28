// js/teacher-views-certificates.js — ระบบเกียรติบัตรกลาง เห็นได้ทุกคน ครูคนไหนก็สร้างเทมเพลต/
// ออกเกียรติบัตรได้เอง ใช้เอนจินเดียวกับที่สภานักเรียนใช้ (certificate-engine.js/certificate-editor.js)
import {
  getCertificateTemplates, createCertificateTemplate, deleteCertificateTemplate, updateCertificateTemplateLayout,
  issueCertificate, getIssuedCertificates, deleteCertificate, getMyCertificatesAsTeacher,
  searchStudentsForCertificateIssuance, searchTeachersForCertificateIssuance,
} from './certificates-api.js'
import { CERT_PRESET_LABELS, openCertificatePrint } from './certificate-engine.js'
import { openCertificateLayoutEditor } from './certificate-editor.js'
import { uploadCertificateTemplateImage } from './storage.js'
import { setContent, setTitle, setActiveNav } from './teacher-views-utils.js'
import { showToast, showDangerConfirm } from './ui.js'

const _esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

let _activeTab = 'templates'
let _templates = null
let _issuedHistory = null

export async function renderCertificateManager(teacher) {
  setActiveNav('certificates')
  setTitle('ระบบเกียรติบัตร')

  setContent(`
    <div class="max-w-4xl mx-auto space-y-5">
      <div class="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 class="text-lg font-bold text-gray-800">🏅 ระบบเกียรติบัตร</h3>
          <p class="text-xs text-gray-400 mt-0.5">ครูทุกคนสร้างเทมเพลตและออกเกียรติบัตรให้นักเรียน/ครูได้เอง — นักเรียนดูของตัวเองได้ที่หน้าโปรไฟล์ "🎖️ บัตรของฉัน"</p>
        </div>
        ${teacher?.id ? `<button type="button" id="cert-my-received-btn" class="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 text-xs font-bold flex-shrink-0">🎖️ บัตรของฉันที่ได้รับ</button>` : ''}
      </div>
      <div class="flex gap-2 bg-gray-100 p-1 rounded-2xl w-fit">
        <button type="button" id="cert-tab-templates" data-tab="templates" class="px-4 py-2 rounded-xl text-sm font-bold transition">🖼️ เทมเพลต</button>
        <button type="button" id="cert-tab-issue" data-tab="issue" class="px-4 py-2 rounded-xl text-sm font-bold transition">🏅 ออกเกียรติบัตร</button>
        <button type="button" id="cert-tab-history" data-tab="history" class="px-4 py-2 rounded-xl text-sm font-bold transition">🧾 ประวัติการออก</button>
      </div>
      <div id="cert-tab-panel"></div>
    </div>`)

  document.getElementById('cert-my-received-btn')?.addEventListener('click', () => _openMyReceivedCertificatesModal(teacher))

  const _activeCls = 'px-4 py-2 rounded-xl text-sm font-bold transition bg-white text-indigo-600 shadow-sm'
  const _inactiveCls = 'px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700'
  const _selectTab = (tab) => {
    _activeTab = tab
    ;['templates', 'issue', 'history'].forEach(t => {
      document.getElementById(`cert-tab-${t}`).className = t === tab ? _activeCls : _inactiveCls
    })
    if (tab === 'templates') _renderTemplatesTab(teacher)
    if (tab === 'issue') _renderIssueTab(teacher)
    if (tab === 'history') _renderHistoryTab()
  }
  document.getElementById('cert-tab-templates').addEventListener('click', () => _selectTab('templates'))
  document.getElementById('cert-tab-issue').addEventListener('click', () => _selectTab('issue'))
  document.getElementById('cert-tab-history').addEventListener('click', () => _selectTab('history'))
  _selectTab(_activeTab)
}

// ─── แท็บ 1: เทมเพลต ─────────────────────────────────────────────────────────
async function _renderTemplatesTab(teacher) {
  const panel = document.getElementById('cert-tab-panel')
  panel.innerHTML = `<p class="text-sm text-gray-400 text-center py-12">⏳ กำลังโหลด...</p>`
  try {
    _templates = await getCertificateTemplates()
  } catch (err) {
    panel.innerHTML = `<p class="text-sm text-red-400 text-center py-12">โหลดไม่สำเร็จ: ${_esc(err.message ?? '')}</p>`
    return
  }
  panel.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
      ${_templates.map(t => `
        <div class="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm space-y-2">
          <div class="aspect-[1.414/1] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
            ${t.layout?.background?.type === 'image' && t.layout.background.imageUrl
              ? `<img src="${_esc(t.layout.background.imageUrl)}" class="w-full h-full object-cover" />`
              : `<span class="text-3xl">${_esc((CERT_PRESET_LABELS[t.preset_key] ?? '🏅').split(' ')[0])}</span>`}
          </div>
          <p class="text-sm font-bold text-gray-800 truncate">${_esc(t.name)}</p>
          <div class="flex gap-1.5">
            <button type="button" class="cert-design-tpl flex-1 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]" data-id="${t.id}">🎨 ออกแบบ</button>
            <button type="button" class="cert-delete-tpl px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]" data-id="${t.id}">🗑️</button>
          </div>
        </div>`).join('') || '<p class="text-xs text-gray-400 col-span-full text-center py-6">ยังไม่มีเทมเพลต</p>'}
    </div>
    <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-2">
      <p class="text-sm font-bold text-gray-800">➕ เพิ่มเทมเพลตใหม่</p>
      <form id="cert-tpl-form" class="space-y-2">
        <input name="name" placeholder="ชื่อเทมเพลต เช่น เกียรติบัตรความประพฤติดี" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white" required />
        <div class="flex gap-2">
          <label class="flex-1 flex items-center gap-1.5 text-xs cursor-pointer">
            <input type="radio" name="template_type" value="preset" checked class="cert-tpl-type-radio" /> ดีไซน์สำเร็จรูป
          </label>
          <label class="flex-1 flex items-center gap-1.5 text-xs cursor-pointer">
            <input type="radio" name="template_type" value="custom" class="cert-tpl-type-radio" /> อัปโหลดเอง
          </label>
        </div>
        <select name="preset_key" id="cert-tpl-preset-select" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white">
          ${Object.entries(CERT_PRESET_LABELS).map(([k, label]) => `<option value="${k}">${_esc(label)}</option>`).join('')}
        </select>
        <input type="file" name="background_image" id="cert-tpl-file-input" accept="image/*" class="hidden w-full text-xs" />
        <button type="submit" class="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เพิ่มเทมเพลต</button>
      </form>
    </div>`

  panel.querySelectorAll('.cert-tpl-type-radio').forEach(radio => {
    radio.addEventListener('change', () => {
      const isCustom = document.querySelector('input[name="template_type"]:checked')?.value === 'custom'
      document.getElementById('cert-tpl-preset-select')?.classList.toggle('hidden', isCustom)
      document.getElementById('cert-tpl-file-input')?.classList.toggle('hidden', !isCustom)
    })
  })

  panel.querySelector('#cert-tpl-form').addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const name = f.name.value.trim()
    if (!name) return
    const isCustom = f.template_type.value === 'custom'
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      let backgroundImageUrl = null
      if (isCustom) {
        const file = f.background_image.files?.[0]
        if (!file) { showToast('กรุณาอัปโหลดรูปพื้นหลังเทมเพลต', 'warning'); btn.disabled = false; btn.textContent = 'เพิ่มเทมเพลต'; return }
        backgroundImageUrl = await uploadCertificateTemplateImage(file)
      }
      const { defaultLayoutFor } = await import('./certificate-engine.js')
      const presetKey = isCustom ? null : f.preset_key.value
      const layout = defaultLayoutFor(isCustom ? 'custom' : presetKey)
      if (isCustom) layout.background = { type: 'image', imageUrl: backgroundImageUrl }
      await createCertificateTemplate({ name, type: isCustom ? 'custom' : 'preset', presetKey, backgroundImageUrl, layout, createdByTeacherId: teacher?.id })
      showToast('เพิ่มเทมเพลตแล้ว ✅', 'success')
      _renderTemplatesTab(teacher)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'เพิ่มเทมเพลต'
    }
  })

  panel.querySelectorAll('.cert-design-tpl').forEach(btn => {
    btn.addEventListener('click', () => {
      const template = _templates.find(t => t.id === Number(btn.dataset.id))
      if (!template) return
      openCertificateLayoutEditor({
        template,
        previewVariables: { reason: 'ทำความดีเป็นแบบอย่างที่ดี' },
        placeholderTokens: [{ token: '{{reason}}', label: 'เหตุผล/รายละเอียด' }],
        onSave: async (layout, backgroundImageUrl) => {
          await updateCertificateTemplateLayout({ id: template.id, layout, backgroundImageUrl })
          showToast('บันทึกดีไซน์แล้ว ✅', 'success')
          _renderTemplatesTab(teacher)
        },
      })
    })
  })
  panel.querySelectorAll('.cert-delete-tpl').forEach(btn => {
    btn.addEventListener('click', async () => {
      const confirmed = await showDangerConfirm({ title: 'ลบเทมเพลตนี้?', message: 'ใบเกียรติบัตรที่ออกไปแล้วยังอยู่ครบ (แต่ละใบเก็บดีไซน์ของตัวเองแยกไว้) ลบแค่เทมเพลตสำหรับออกใบใหม่ต่อจากนี้', confirmText: 'ลบเลย' })
      if (!confirmed) return
      try { await deleteCertificateTemplate(Number(btn.dataset.id)); _renderTemplatesTab(teacher) }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
  })
}

// ─── แท็บ 2: ออกเกียรติบัตร ────────────────────────────────────────────────────
// รองรับผู้รับหลายคนพร้อมกัน (นักเรียนและ/หรือครูปนกันได้) — พิมพ์รหัส/ชื่อคั่นด้วยคอมมาหรือขึ้นบรรทัดใหม่
// แล้วกด "เพิ่ม" ระบบค้นหาทีละรายการแล้วแสดงเป็นการ์ดพร้อมรูป ก่อนออกจริงพร้อมกันทั้งหมด
function _renderIssueTab(teacher) {
  const panel = document.getElementById('cert-tab-panel')
  let recipientType = 'student' // 'student' | 'teacher' — สลับได้ระหว่างพิมพ์เพิ่ม ไม่ล้างการ์ดที่เพิ่มไปแล้ว
  let selectedRecipients = [] // [{ type, id, full_name, code, sub, photo }]

  panel.innerHTML = `
    <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3 max-w-2xl">
      <div>
        <label class="block text-xs font-bold text-gray-500 mb-1">เทมเพลต</label>
        <select id="cert-issue-template" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white">
          <option value="">— เลือกเทมเพลต —</option>
          ${(_templates ?? []).map(t => `<option value="${t.id}">${_esc(t.name)}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-xs font-bold text-gray-500 mb-1">ประเภทผู้รับ</label>
        <div class="flex gap-2">
          <button type="button" id="cert-issue-type-student" class="cert-issue-type-btn flex-1 py-2 rounded-xl border text-sm font-bold">🎓 นักเรียน</button>
          <button type="button" id="cert-issue-type-teacher" class="cert-issue-type-btn flex-1 py-2 rounded-xl border text-sm font-bold">👨‍🏫 ครู</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-gray-500 mb-1" id="cert-issue-search-label">ค้นหานักเรียน (พิมพ์ชื่อหรือรหัส — เพิ่มได้หลายคนพร้อมกัน คั่นด้วย , หรือขึ้นบรรทัดใหม่)</label>
        <textarea id="cert-issue-search" rows="2" placeholder="เช่น 23344, 23345 หรือพิมพ์ชื่อ" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white resize-none"></textarea>
        <button type="button" id="cert-issue-add-btn" class="mt-1.5 px-4 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold">➕ เพิ่ม</button>
      </div>
      <div id="cert-issue-cards" class="grid grid-cols-2 sm:grid-cols-3 gap-2"></div>
      <div id="cert-issue-vars"></div>
      <button type="button" id="cert-issue-submit" class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🏅 ออกเกียรติบัตร</button>
    </div>`

  if (!_templates?.length) {
    panel.innerHTML = `<p class="text-sm text-gray-400 text-center py-12">ยังไม่มีเทมเพลต — ไปสร้างที่แท็บ "เทมเพลต" ก่อนครับ</p>`
    return
  }

  const searchInput = panel.querySelector('#cert-issue-search')
  const searchLabel = panel.querySelector('#cert-issue-search-label')
  const addBtn = panel.querySelector('#cert-issue-add-btn')
  const cardsEl = panel.querySelector('#cert-issue-cards')
  const varsEl = panel.querySelector('#cert-issue-vars')
  const templateSelect = panel.querySelector('#cert-issue-template')
  const submitBtn = panel.querySelector('#cert-issue-submit')
  const typeBtns = { student: panel.querySelector('#cert-issue-type-student'), teacher: panel.querySelector('#cert-issue-type-teacher') }

  const _renderTypeButtons = () => {
    const activeCls = 'flex-1 py-2 rounded-xl border text-sm font-bold bg-indigo-600 text-white border-indigo-600'
    const inactiveCls = 'flex-1 py-2 rounded-xl border text-sm font-bold bg-white text-gray-600 border-gray-300'
    typeBtns.student.className = 'cert-issue-type-btn ' + (recipientType === 'student' ? activeCls : inactiveCls)
    typeBtns.teacher.className = 'cert-issue-type-btn ' + (recipientType === 'teacher' ? activeCls : inactiveCls)
    searchLabel.textContent = recipientType === 'student'
      ? 'ค้นหานักเรียน (พิมพ์ชื่อหรือรหัส — เพิ่มได้หลายคนพร้อมกัน คั่นด้วย , หรือขึ้นบรรทัดใหม่)'
      : 'ค้นหาครู (พิมพ์ชื่อหรือรหัส — เพิ่มได้หลายคนพร้อมกัน คั่นด้วย , หรือขึ้นบรรทัดใหม่)'
  }
  typeBtns.student.addEventListener('click', () => { recipientType = 'student'; _renderTypeButtons() })
  typeBtns.teacher.addEventListener('click', () => { recipientType = 'teacher'; _renderTypeButtons() })
  _renderTypeButtons()

  const _renderCards = () => {
    cardsEl.innerHTML = selectedRecipients.length ? selectedRecipients.map((r, i) => `
      <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-2">
        <div class="w-9 h-11 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-400 text-sm">
          ${r.photo ? `<img src="${_esc(r.photo)}" class="w-full h-full object-cover" />` : (r.type === 'student' ? '🎓' : '👨‍🏫')}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-xs font-bold text-gray-800 truncate">${_esc(r.full_name)}</p>
          <p class="text-[10px] text-gray-400 truncate">${_esc(r.code ?? '')}${r.sub ? ' · ' + _esc(r.sub) : ''}</p>
        </div>
        <button type="button" class="cert-issue-remove-recipient text-red-400 hover:text-red-600 text-sm flex-shrink-0 px-1" data-idx="${i}">✕</button>
      </div>`).join('') : `<p class="text-xs text-gray-400 col-span-full text-center py-3">ยังไม่ได้เลือกผู้รับ</p>`
    cardsEl.querySelectorAll('.cert-issue-remove-recipient').forEach(btn => btn.addEventListener('click', () => {
      selectedRecipients.splice(Number(btn.dataset.idx), 1)
      _renderCards()
    }))
    submitBtn.textContent = selectedRecipients.length ? `🏅 ออกเกียรติบัตร (${selectedRecipients.length} คน)` : '🏅 ออกเกียรติบัตร'
  }
  _renderCards()

  const _renderVarInputs = () => {
    const template = _templates.find(t => t.id === Number(templateSelect.value))
    if (!template) { varsEl.innerHTML = ''; return }
    const layout = template.layout?.elements ? template.layout : null
    const customKeys = layout
      ? [...new Set(layout.elements.flatMap(el => [...String(el.text ?? '').matchAll(/\{\{(\w+)\}\}/g)].map(m => m[1])))]
          .filter(k => !['name', 'date', 'no'].includes(k))
      : []
    varsEl.innerHTML = `
      <div>
        <label class="block text-xs font-bold text-gray-500 mb-1">ชื่อรายการ (แสดงในประวัติ ไม่บังคับ)</label>
        <input type="text" id="cert-issue-title" placeholder="เช่น เกียรติบัตรความประพฤติดี" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white" />
      </div>
      ${customKeys.map(k => `
        <div>
          <label class="block text-xs font-bold text-gray-500 mb-1">${_esc(k)}</label>
          <input type="text" data-var-key="${_esc(k)}" class="cert-issue-var-input w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white" />
        </div>`).join('')}`
  }
  templateSelect.addEventListener('change', _renderVarInputs)

  // ค้นหา 1 token (รหัสหรือชื่อ) — ตรงรหัสเป๊ะชนะเสมอ กันชนกรณีชื่อพ้องหลายคน
  const _lookupOne = async (token) => {
    const results = recipientType === 'student'
      ? await searchStudentsForCertificateIssuance(token).catch(() => [])
      : await searchTeachersForCertificateIssuance(token).catch(() => [])
    if (!results.length) return { token, found: null, ambiguous: false }
    const codeField = recipientType === 'student' ? 'student_code' : 'teacher_code'
    const exact = results.find(r => String(r[codeField] ?? '').toLowerCase() === token.toLowerCase())
    if (exact) return { token, found: exact, ambiguous: false }
    if (results.length === 1) return { token, found: results[0], ambiguous: false }
    return { token, found: null, ambiguous: true }
  }

  addBtn.addEventListener('click', async () => {
    const tokens = [...new Set(searchInput.value.split(/[,\n]+/).map(s => s.trim()).filter(Boolean))]
    if (!tokens.length) return
    addBtn.disabled = true; addBtn.textContent = 'กำลังค้นหา...'
    const results = await Promise.all(tokens.map(_lookupOne))
    addBtn.disabled = false; addBtn.textContent = '➕ เพิ่ม'
    const notFound = [], ambiguous = []
    results.forEach(r => {
      if (r.ambiguous) { ambiguous.push(r.token); return }
      if (!r.found) { notFound.push(r.token); return }
      if (selectedRecipients.some(x => x.type === recipientType && x.id === r.found.id)) return // กันเพิ่มซ้ำ
      selectedRecipients.push({
        type: recipientType, id: r.found.id, full_name: r.found.full_name,
        code: recipientType === 'student' ? r.found.student_code : r.found.teacher_code,
        sub: recipientType === 'student' ? (r.found.main_room ?? '') : '',
        photo: r.found.image_url || r.found.photo_url || null,
      })
    })
    searchInput.value = ''
    if (notFound.length) showToast('ไม่พบ: ' + notFound.join(', '), 'warning')
    if (ambiguous.length) showToast('พบหลายคนตรงกับ: ' + ambiguous.join(', ') + ' กรุณาพิมพ์รหัสให้ตรง', 'warning')
    _renderCards()
  })

  submitBtn.addEventListener('click', async () => {
    const templateId = Number(templateSelect.value)
    if (!templateId) { showToast('กรุณาเลือกเทมเพลต', 'warning'); return }
    if (!selectedRecipients.length) { showToast('กรุณาเพิ่มผู้รับอย่างน้อย 1 คน', 'warning'); return }
    const title = panel.querySelector('#cert-issue-title')?.value.trim() || null
    const variables = {}
    panel.querySelectorAll('.cert-issue-var-input').forEach(inp => { variables[inp.dataset.varKey] = inp.value.trim() })
    submitBtn.disabled = true; submitBtn.textContent = 'กำลังออก...'
    let successCount = 0, failCount = 0
    for (const r of selectedRecipients) {
      try {
        await issueCertificate({
          templateId, recipientType: r.type,
          studentId: r.type === 'student' ? r.id : undefined,
          teacherId: r.type === 'teacher' ? r.id : undefined,
          recipientName: r.full_name,
          variables, title, issuedByTeacherId: teacher?.id,
        })
        successCount++
      } catch (err) { failCount++ }
    }
    showToast(`ออกเกียรติบัตรสำเร็จ ${successCount} ใบ${failCount ? ` (ล้มเหลว ${failCount} ใบ)` : ''} ✅ ดูและพิมพ์ได้ที่แท็บ "ประวัติการออก"`, failCount ? 'warning' : 'success')
    selectedRecipients = []
    _renderCards()
    panel.querySelectorAll('.cert-issue-var-input').forEach(inp => { inp.value = '' })
    if (panel.querySelector('#cert-issue-title')) panel.querySelector('#cert-issue-title').value = ''
    submitBtn.disabled = false
    submitBtn.textContent = '🏅 ออกเกียรติบัตร'
  })
}

// ─── แท็บ 3: ประวัติการออก ────────────────────────────────────────────────────
async function _renderHistoryTab() {
  const panel = document.getElementById('cert-tab-panel')
  panel.innerHTML = `
    <input id="cert-history-search" type="search" placeholder="ค้นหาชื่อนักเรียนหรือเลขที่เกียรติบัตร..."
      class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white mb-3" />
    <div id="cert-history-list" class="bg-gray-50/50 rounded-2xl px-3">
      <p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>
    </div>`

  const _load = async (query) => {
    const listEl = panel.querySelector('#cert-history-list')
    listEl.innerHTML = `<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>`
    try {
      _issuedHistory = await getIssuedCertificates({ query })
    } catch (err) {
      listEl.innerHTML = `<p class="text-xs text-red-400 text-center py-6">โหลดไม่สำเร็จ: ${_esc(err.message ?? '')}</p>`
      return
    }
    listEl.innerHTML = !_issuedHistory.length ? `
      <p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการออกเกียรติบัตร</p>
    ` : `<div class="divide-y divide-gray-100">${_issuedHistory.map(c => `
      <div class="flex items-center justify-between gap-3 py-2.5 text-xs flex-wrap">
        <div class="min-w-0">
          <p class="font-bold text-gray-700 truncate">${c.recipient_type === 'teacher' ? '👨‍🏫' : '🎓'} ${_esc(c.recipient_name)} <span class="font-normal text-gray-400">· ${_esc(c.certificate_templates?.name ?? '-')}</span></p>
          <p class="text-gray-400 mt-0.5">${_esc(c.certificate_no)}${c.title ? ' · ' + _esc(c.title) : ''} · ${new Date(c.issued_at).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' })}</p>
        </div>
        <div class="flex gap-1.5 shrink-0">
          <button type="button" class="cert-hist-view px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]" data-id="${c.id}">📄 ดู</button>
          <button type="button" class="cert-hist-delete px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]" data-id="${c.id}">🗑️ ลบ</button>
        </div>
      </div>`).join('')}</div>`

    listEl.querySelectorAll('.cert-hist-view').forEach(btn => btn.addEventListener('click', () => {
      const c = _issuedHistory.find(x => x.id === Number(btn.dataset.id))
      if (!c) return
      openCertificatePrint({
        layout: c.layout_snapshot,
        variables: { name: c.recipient_name, date: new Date(c.issued_at).toLocaleDateString('th-TH', { dateStyle: 'long' }), no: c.certificate_no, ...c.variables },
        docTitle: c.title,
      }, showToast)
    }))
    listEl.querySelectorAll('.cert-hist-delete').forEach(btn => btn.addEventListener('click', async () => {
      const confirmed = await showDangerConfirm({ title: 'ลบเกียรติบัตรนี้?', message: 'ลบแล้วไม่สามารถกู้คืนได้', confirmText: 'ลบเลย' })
      if (!confirmed) return
      try { await deleteCertificate(Number(btn.dataset.id)); _load(panel.querySelector('#cert-history-search')?.value) }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    }))
  }

  let searchTimer = null
  panel.querySelector('#cert-history-search').addEventListener('input', e => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => _load(e.target.value), 300)
  })
  _load('')
}

// ─── บัตรของฉันที่ได้รับ (ครูเป็นผู้รับ) ───────────────────────────────────────
async function _openMyReceivedCertificatesModal(teacher) {
  document.getElementById('cert-my-received-modal')?.remove()
  const previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  const modal = document.createElement('div')
  modal.id = 'cert-my-received-modal'
  modal.className = 'fixed inset-0 z-[300] bg-white flex flex-col animate-fade'
  modal.innerHTML = `
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">บัตรของฉันที่ได้รับ</h2>
      <button type="button" data-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="cert-my-received-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`
  const close = () => { document.removeEventListener('keydown', onKeydown); document.body.style.overflow = previousOverflow; modal.remove() }
  const onKeydown = e => { if (e.key === 'Escape') close() }
  document.addEventListener('keydown', onKeydown)
  document.body.appendChild(modal)
  modal.querySelector('[data-close]').addEventListener('click', close)

  const body = modal.querySelector('#cert-my-received-body')
  const certs = await getMyCertificatesAsTeacher(teacher.id).catch(() => [])
  body.innerHTML = certs.length ? `
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${certs.map(c => `
        <div data-id="${c.id}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition">
          <div class="text-3xl mb-2">🏅</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${_esc(c.title || 'เกียรติบัตร')}</p>
          <p class="text-[10px] text-gray-500 mt-1">${new Date(c.issued_at).toLocaleDateString('th-TH', { dateStyle: 'long' })}</p>
        </div>`).join('')}
    </div>
  ` : `<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตรที่ได้รับ</p>`

  certs.forEach(c => {
    body.querySelector(`[data-id="${c.id}"]`)?.addEventListener('click', () => {
      openCertificatePrint({
        layout: c.layout_snapshot,
        variables: { name: teacher.full_name, date: new Date(c.issued_at).toLocaleDateString('th-TH', { dateStyle: 'long' }), no: c.certificate_no, ...c.variables },
        docTitle: c.title,
      }, showToast)
    })
  })
}
