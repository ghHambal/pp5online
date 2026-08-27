// js/teacher-views-certificates.js — ระบบเกียรติบัตรกลาง เห็นได้ทุกคน ครูคนไหนก็สร้างเทมเพลต/
// ออกเกียรติบัตรได้เอง ใช้เอนจินเดียวกับที่สภานักเรียนใช้ (certificate-engine.js/certificate-editor.js)
import {
  getCertificateTemplates, createCertificateTemplate, deleteCertificateTemplate, updateCertificateTemplateLayout,
  issueCertificate, getIssuedCertificates, deleteCertificate, searchStudentsForCertificateIssuance,
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
      <div>
        <h3 class="text-lg font-bold text-gray-800">🏅 ระบบเกียรติบัตร</h3>
        <p class="text-xs text-gray-400 mt-0.5">ครูทุกคนสร้างเทมเพลตและออกเกียรติบัตรให้นักเรียนได้เอง — นักเรียนดูของตัวเองได้ที่หน้าโปรไฟล์ "🎖️ บัตรของฉัน"</p>
      </div>
      <div class="flex gap-2 bg-gray-100 p-1 rounded-2xl w-fit">
        <button type="button" id="cert-tab-templates" data-tab="templates" class="px-4 py-2 rounded-xl text-sm font-bold transition">🖼️ เทมเพลต</button>
        <button type="button" id="cert-tab-issue" data-tab="issue" class="px-4 py-2 rounded-xl text-sm font-bold transition">🏅 ออกเกียรติบัตร</button>
        <button type="button" id="cert-tab-history" data-tab="history" class="px-4 py-2 rounded-xl text-sm font-bold transition">🧾 ประวัติการออก</button>
      </div>
      <div id="cert-tab-panel"></div>
    </div>`)

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
function _renderIssueTab(teacher) {
  const panel = document.getElementById('cert-tab-panel')
  let selectedStudent = null
  let searchTimer = null

  panel.innerHTML = `
    <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-3 max-w-lg">
      <div>
        <label class="block text-xs font-bold text-gray-500 mb-1">เทมเพลต</label>
        <select id="cert-issue-template" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white">
          <option value="">— เลือกเทมเพลต —</option>
          ${(_templates ?? []).map(t => `<option value="${t.id}">${_esc(t.name)}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-xs font-bold text-gray-500 mb-1">ค้นหานักเรียน (พิมพ์ชื่อหรือรหัส)</label>
        <input type="text" id="cert-issue-search" placeholder="พิมพ์อย่างน้อย 2 ตัวอักษร" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white" />
        <div id="cert-issue-results" class="mt-1.5 space-y-1"></div>
        <div id="cert-issue-selected" class="mt-1.5"></div>
      </div>
      <div id="cert-issue-vars"></div>
      <button type="button" id="cert-issue-submit" class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🏅 ออกเกียรติบัตร</button>
    </div>`

  if (!_templates?.length) {
    panel.innerHTML = `<p class="text-sm text-gray-400 text-center py-12">ยังไม่มีเทมเพลต — ไปสร้างที่แท็บ "เทมเพลต" ก่อนครับ</p>`
    return
  }

  const searchInput = panel.querySelector('#cert-issue-search')
  const resultsEl = panel.querySelector('#cert-issue-results')
  const selectedEl = panel.querySelector('#cert-issue-selected')
  const varsEl = panel.querySelector('#cert-issue-vars')
  const templateSelect = panel.querySelector('#cert-issue-template')

  const _renderSelectedStudent = () => {
    selectedEl.innerHTML = selectedStudent ? `
      <div class="flex items-center gap-2 rounded-xl bg-indigo-50 border border-indigo-100 p-2.5">
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-gray-800 truncate">${_esc(selectedStudent.full_name)}</p>
          <p class="text-[11px] text-gray-400 truncate">${_esc(selectedStudent.student_code)} · ${_esc(selectedStudent.main_room ?? '')}</p>
        </div>
      </div>` : ''
  }

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

  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer)
    const q = searchInput.value.trim()
    if (q.length < 2) { resultsEl.innerHTML = ''; return }
    searchTimer = setTimeout(async () => {
      const results = await searchStudentsForCertificateIssuance(q).catch(() => [])
      resultsEl.innerHTML = results.length ? results.map(s => `
        <button type="button" class="cert-issue-result-item w-full text-left flex items-center gap-2 rounded-xl border border-gray-200 p-2 hover:bg-gray-50" data-id="${s.id}">
          <span class="text-sm font-bold text-gray-800 flex-1 truncate">${_esc(s.full_name)}</span>
          <span class="text-[11px] text-gray-400 flex-shrink-0">${_esc(s.student_code)} · ${_esc(s.main_room ?? '')}</span>
        </button>`).join('') : `<p class="text-xs text-gray-400 px-1">ไม่พบนักเรียน</p>`
      resultsEl.querySelectorAll('.cert-issue-result-item').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedStudent = results.find(s => s.id === Number(btn.dataset.id))
          resultsEl.innerHTML = ''
          searchInput.value = ''
          _renderSelectedStudent()
        })
      })
    }, 300)
  })

  panel.querySelector('#cert-issue-submit').addEventListener('click', async () => {
    const templateId = Number(templateSelect.value)
    if (!templateId) { showToast('กรุณาเลือกเทมเพลต', 'warning'); return }
    if (!selectedStudent) { showToast('กรุณาเลือกนักเรียน', 'warning'); return }
    const title = panel.querySelector('#cert-issue-title')?.value.trim() || null
    const variables = {}
    panel.querySelectorAll('.cert-issue-var-input').forEach(inp => { variables[inp.dataset.varKey] = inp.value.trim() })
    const btn = panel.querySelector('#cert-issue-submit')
    btn.disabled = true; btn.textContent = 'กำลังออก...'
    try {
      const result = await issueCertificate({
        templateId, studentId: selectedStudent.id, studentName: selectedStudent.full_name,
        variables, title, issuedByTeacherId: teacher?.id,
      })
      showToast(`ออกเกียรติบัตรเลขที่ ${result.certificate_no} แล้ว ✅`, 'success')
      openCertificatePrint({
        layout: result.layout_snapshot,
        variables: { name: result.student_name, date: new Date(result.issued_at).toLocaleDateString('th-TH', { dateStyle: 'long' }), no: result.certificate_no, ...result.variables },
        docTitle: result.title,
      }, showToast)
      selectedStudent = null
      _renderSelectedStudent()
      panel.querySelectorAll('.cert-issue-var-input').forEach(inp => { inp.value = '' })
      if (panel.querySelector('#cert-issue-title')) panel.querySelector('#cert-issue-title').value = ''
    } catch (err) {
      showToast('ออกเกียรติบัตรไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      btn.disabled = false; btn.textContent = '🏅 ออกเกียรติบัตร'
    }
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
          <p class="font-bold text-gray-700 truncate">${_esc(c.student_name)} <span class="font-normal text-gray-400">· ${_esc(c.certificate_templates?.name ?? '-')}</span></p>
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
        variables: { name: c.student_name, date: new Date(c.issued_at).toLocaleDateString('th-TH', { dateStyle: 'long' }), no: c.certificate_no, ...c.variables },
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
