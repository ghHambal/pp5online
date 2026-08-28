// js/certificate-editor.js — ตัวแก้ไขเทมเพลตเกียรติบัตรแบบลากวาง
import {
  renderCertificateCanvasHtml, defaultLayoutFor, UNIVERSAL_PLACEHOLDER_TOKENS,
  CERT_PRESETS, CERT_GOOGLE_FONTS,
} from './certificate-engine.js'
import { uploadCertificateTemplateImage, uploadCertificateLogoImage } from './storage.js'
import { showToast } from './ui.js'

const _esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n))
const uid = prefix => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
const safeFontFamily = value => String(value || '').replace(/[^A-Za-z0-9 _-]/g, '').trim()

function ensureGoogleFont(family) {
  const safe = safeFontFamily(family)
  if (!safe) return
  const id = `cert-font-${safe.toLowerCase().replace(/\s+/g, '-')}`
  if (document.getElementById(id)) return
  const link = document.createElement('link')
  link.id = id
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(safe).replace(/%20/g, '+')}:wght@400;600;700&display=swap`
  document.head.appendChild(link)
}

// opts: { template, previewVariables, placeholderTokens, onSave }
export function openCertificateLayoutEditor(opts) {
  const { template, previewVariables, placeholderTokens = [], onSave } = opts
  document.getElementById('cce-overlay')?.remove()

  let layout = JSON.parse(JSON.stringify(
    template?.layout?.elements
      ? template.layout
      : defaultLayoutFor(template?.type === 'custom' ? 'custom' : (template?.preset_key ?? 'gold_classic'))
  ))
  if (layout.background?.type === 'image' && !layout.background.imageUrl && template?.background_image_url) {
    layout.background.imageUrl = template.background_image_url
  }
  if (!layout.orientation) layout.orientation = 'landscape'
  if (!Array.isArray(layout.customFonts)) layout.customFonts = []

  let selectedId = null
  let pendingBgFile = null
  const tokenMap = new Map()
  ;[...UNIVERSAL_PLACEHOLDER_TOKENS, ...placeholderTokens].forEach(token => tokenMap.set(token.token, token))
  const allTokens = [...tokenMap.values()]
  const previewVars = {
    name: 'เด็กชาย ตัวอย่าง นักเรียน',
    student_code: '25944',
    date: new Date().toLocaleDateString('th-TH', { dateStyle: 'long' }),
    no: 'CERT-2569-000001',
    ...previewVariables,
  }
  ;[...CERT_GOOGLE_FONTS, ...layout.customFonts, ...(layout.elements ?? []).map(el => el.fontFamily)].filter(Boolean).forEach(ensureGoogleFont)

  const previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  const overlay = document.createElement('div')
  overlay.id = 'cce-overlay'
  overlay.className = 'fixed inset-0 z-[9999] bg-white flex flex-col'
  overlay.innerHTML = `
    <div class="flex items-center gap-2 px-3 sm:px-5 py-2.5 border-b border-gray-200 flex-shrink-0 shadow-sm overflow-x-auto">
      <h3 class="mr-auto min-w-[180px] font-bold text-sm text-gray-800 truncate">🎨 ${_esc(template?.name ?? 'เทมเพลตเกียรติบัตร')}</h3>
      <button id="cce-add-el" type="button" title="เพิ่มข้อความ" class="h-9 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold whitespace-nowrap">✚ ข้อความ</button>
      <label id="cce-add-logo" title="เพิ่มโลโก้หรือรูป" class="h-9 px-3 inline-flex items-center rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold cursor-pointer whitespace-nowrap">🖼️ รูป<input type="file" id="cce-add-logo-file" accept="image/*" class="hidden" /></label>
      <label title="เพิ่มกราฟิกมุมบน ระบบจะสะท้อนไปอีกฝั่งอัตโนมัติ" class="h-9 px-3 inline-flex items-center rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-xs font-bold cursor-pointer whitespace-nowrap">⌜ มุมบน<input type="file" id="cce-add-corner-top" accept="image/*" class="hidden" /></label>
      <label title="เพิ่มกราฟิกมุมล่าง ระบบจะสะท้อนไปอีกฝั่งอัตโนมัติ" class="h-9 px-3 inline-flex items-center rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-xs font-bold cursor-pointer whitespace-nowrap">⌞ มุมล่าง<input type="file" id="cce-add-corner-bottom" accept="image/*" class="hidden" /></label>
      <button id="cce-duplicate" type="button" title="คัดลอกองค์ประกอบพร้อมค่าทั้งหมด" disabled class="h-9 w-9 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-30 text-base">⧉</button>
      <button id="cce-save" type="button" class="h-9 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold whitespace-nowrap">💾 บันทึก</button>
      <button id="cce-close" type="button" title="ปิด" class="h-9 w-9 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 text-xl">×</button>
    </div>
    <div class="flex-1 min-h-0 flex flex-col lg:flex-row overflow-y-auto">
      <div class="flex-1 min-w-0 p-4 sm:p-6 flex flex-col gap-3 overflow-auto bg-slate-50">
        <div id="cce-canvas-wrap" class="relative w-full max-w-3xl mx-auto select-none drop-shadow-xl"></div>
        <p class="text-[11px] text-gray-400 text-center">ลากเพื่อจัดตำแหน่ง • กดองค์ประกอบเพื่อแก้ไข • Ctrl/⌘ + D เพื่อคัดลอก</p>
        <div class="max-w-3xl w-full mx-auto grid sm:grid-cols-2 gap-3">
          <div class="bg-white border border-gray-200 rounded-xl p-3">
            <p class="text-[11px] font-bold text-gray-700 mb-2">📐 แนวกระดาษ</p>
            <div class="flex gap-2">
              <button type="button" id="cce-orient-landscape" title="แนวนอน" class="cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold">▭ แนวนอน</button>
              <button type="button" id="cce-orient-portrait" title="แนวตั้ง" class="cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold">▯ แนวตั้ง</button>
            </div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3">
            <p class="text-[11px] font-bold text-gray-700 mb-2">🖼️ พื้นหลัง</p>
            <div class="flex flex-wrap items-center gap-2">
              <label class="px-2.5 py-1.5 rounded-lg border border-gray-300 text-xs font-bold cursor-pointer bg-white">📤 อัปโหลด<input type="file" id="cce-bg-file" accept="image/*" class="hidden" /></label>
              ${Object.entries(CERT_PRESETS).map(([key, preset]) => `<button type="button" class="cce-bg-preset w-7 h-7 rounded-full border-2 border-white shadow" style="background:${preset.bg}" data-preset="${key}" title="${_esc(key)}"></button>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div id="cce-panel" class="lg:w-[25rem] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white p-4 sm:p-5 overflow-y-auto"></div>
    </div>`
  document.body.appendChild(overlay)

  const canvasWrap = overlay.querySelector('#cce-canvas-wrap')
  const panel = overlay.querySelector('#cce-panel')
  const duplicateBtn = overlay.querySelector('#cce-duplicate')
  const sectionLabel = text => `<p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">${text}</p>`

  function selectedElement() { return (layout.elements ?? []).find(el => el.id === selectedId) }

  function renderCanvas() {
    const isPortrait = layout.orientation === 'portrait'
    canvasWrap.style.maxWidth = isPortrait ? '26rem' : '48rem'
    canvasWrap.innerHTML = renderCertificateCanvasHtml({ layout, variables: previewVars })
    canvasWrap.querySelectorAll('[data-cert-el-id]').forEach(node => {
      const id = node.dataset.certElId
      const model = layout.elements.find(el => el.id === id)
      node.style.cursor = model?.type === 'cornerGraphic' ? 'pointer' : 'move'
      node.style.outline = id === selectedId ? '2px dashed #0ea5e9' : 'none'
      node.style.outlineOffset = '3px'
      node.addEventListener('pointerdown', event => {
        if (model?.type === 'cornerGraphic') {
          event.preventDefault(); selectedId = id; renderCanvas(); renderPanel(); return
        }
        startDrag(event, id)
      })
    })
    duplicateBtn.disabled = !selectedElement()
    const active = 'bg-indigo-600 text-white border-indigo-600'
    const inactive = 'bg-white text-gray-700 border-gray-300'
    overlay.querySelector('#cce-orient-landscape').className = `cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold ${isPortrait ? inactive : active}`
    overlay.querySelector('#cce-orient-portrait').className = `cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold ${isPortrait ? active : inactive}`
  }

  function deleteSelected() {
    if (!selectedId) return
    layout.elements = layout.elements.filter(el => el.id !== selectedId)
    selectedId = null
    renderCanvas(); renderPanel()
  }

  function duplicateSelected() {
    const source = selectedElement()
    if (!source) return
    const copy = JSON.parse(JSON.stringify(source))
    copy.id = uid(source.type === 'image' || source.type === 'cornerGraphic' ? 'img' : 'el')
    if (copy.x != null) copy.x = clamp(Number(copy.x) + 3, 0, 100)
    if (copy.y != null) copy.y = clamp(Number(copy.y) + 3, 0, 100)
    if (copy.type === 'cornerGraphic') copy.insetY = clamp(Number(copy.insetY || 2) + 3, 0, 45)
    layout.elements.push(copy)
    selectedId = copy.id
    renderCanvas(); renderPanel()
    showToast('คัดลอกพร้อมรูปแบบและเอฟเฟกต์แล้ว', 'success')
  }

  function renderImagePanel(el) {
    const isCorner = el.type === 'cornerGraphic'
    panel.innerHTML = `
      <div class="space-y-5">
        <div>
          ${sectionLabel(isCorner ? 'กราฟิกมุมแบบสะท้อนอัตโนมัติ' : 'โลโก้ / รูปภาพ')}
          <div class="rounded-xl border border-gray-200 bg-gray-50 p-3 flex items-center justify-center"><img src="${_esc(el.imageUrl)}" class="max-h-28 object-contain" /></div>
          <label class="mt-2.5 block w-full text-center px-2.5 py-2 rounded-lg border border-gray-300 text-xs font-bold cursor-pointer bg-white">📤 เปลี่ยนรูป<input type="file" id="cce-f-image-replace" accept="image/*" class="hidden" /></label>
        </div>
        ${isCorner ? `
          <div class="pt-4 border-t border-gray-200">
            ${sectionLabel('ตำแหน่งคู่สะท้อน')}
            <div class="grid grid-cols-2 gap-2">
              <button type="button" data-corner-pos="top" class="cce-corner-pos px-3 py-2 rounded-lg border text-xs font-bold ${el.position !== 'bottom' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-300'}">⌜ ด้านบน</button>
              <button type="button" data-corner-pos="bottom" class="cce-corner-pos px-3 py-2 rounded-lg border text-xs font-bold ${el.position === 'bottom' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-300'}">⌞ ด้านล่าง</button>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-3">
              <label class="text-[11px] text-gray-500">ระยะขอบซ้าย-ขวา (%)<input id="cce-f-inset-x" type="number" min="0" max="45" value="${el.insetX ?? 2}" class="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" /></label>
              <label class="text-[11px] text-gray-500">ระยะขอบบน-ล่าง (%)<input id="cce-f-inset-y" type="number" min="0" max="45" value="${el.insetY ?? 2}" class="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" /></label>
            </div>
          </div>` : ''}
        <div class="pt-4 border-t border-gray-200">
          ${sectionLabel('ขนาดและความโปร่งใส')}
          <div class="grid grid-cols-2 gap-2">
            <label class="text-[11px] text-gray-500">ความกว้าง (%)<input id="cce-f-width" type="number" min="2" max="100" value="${el.width ?? 20}" class="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" /></label>
            <label class="text-[11px] text-gray-500">ความทึบ (%)<input id="cce-f-opacity" type="number" min="0" max="100" value="${Math.round((el.opacity ?? 1) * 100)}" class="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" /></label>
          </div>
          ${!isCorner ? `<button type="button" id="cce-f-flip" title="สะท้อนรูปแนวนอน" class="mt-3 w-full py-2 rounded-lg border text-xs font-bold ${el.flipX ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-gray-300 text-gray-600'}">⇆ สะท้อนแนวนอน</button>` : `<p class="text-[10px] text-amber-600 mt-2">✨ รูปฝั่งขวาจะสะท้อนจากฝั่งซ้ายอัตโนมัติ</p>`}
        </div>
        <div class="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
          <button id="cce-f-duplicate" type="button" class="py-2 rounded-lg border border-indigo-300 text-indigo-600 text-xs font-bold hover:bg-indigo-50">⧉ คัดลอก</button>
          <button id="cce-f-delete" type="button" class="py-2 rounded-lg border border-red-300 text-red-500 text-xs font-bold hover:bg-red-50">🗑️ ลบ</button>
        </div>
      </div>`

    const commit = patch => { Object.assign(el, patch); renderCanvas() }
    panel.querySelector('#cce-f-width').addEventListener('input', event => commit({ width: clamp(Number(event.target.value) || 14, 2, isCorner ? 45 : 100) }))
    panel.querySelector('#cce-f-opacity').addEventListener('input', event => commit({ opacity: clamp(Number(event.target.value) || 0, 0, 100) / 100 }))
    panel.querySelector('#cce-f-flip')?.addEventListener('click', () => { commit({ flipX: !el.flipX }); renderImagePanel(el) })
    panel.querySelectorAll('.cce-corner-pos').forEach(btn => btn.addEventListener('click', () => { commit({ position: btn.dataset.cornerPos }); renderImagePanel(el) }))
    panel.querySelector('#cce-f-inset-x')?.addEventListener('input', event => commit({ insetX: clamp(Number(event.target.value) || 0, 0, 45) }))
    panel.querySelector('#cce-f-inset-y')?.addEventListener('input', event => commit({ insetY: clamp(Number(event.target.value) || 0, 0, 45) }))
    panel.querySelector('#cce-f-image-replace').addEventListener('change', async event => {
      const file = event.target.files?.[0]
      if (!file) return
      event.target.disabled = true
      try {
        const imageUrl = await uploadCertificateLogoImage(file)
        commit({ imageUrl }); renderImagePanel(el)
      } catch (error) {
        showToast('อัปโหลดไม่สำเร็จ: ' + (error.message ?? ''), 'error')
        event.target.disabled = false
      }
    })
    panel.querySelector('#cce-f-duplicate').addEventListener('click', duplicateSelected)
    panel.querySelector('#cce-f-delete').addEventListener('click', deleteSelected)
  }

  function renderTextPanel(el) {
    const availableFonts = [...new Set([...CERT_GOOGLE_FONTS, ...layout.customFonts, el.fontFamily].filter(Boolean))]
    const shadow = { enabled: false, color: '#000000', offsetX: 2, offsetY: 2, blur: 3, ...(el.shadow ?? {}) }
    const stroke = { enabled: false, color: '#ffffff', width: 1, ...(el.stroke ?? {}) }
    panel.innerHTML = `
      <div class="space-y-5">
        <div>
          ${sectionLabel('ข้อความและข้อมูลอัตโนมัติ')}
          <textarea id="cce-f-text" rows="3" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white leading-relaxed">${_esc(el.text)}</textarea>
          <div class="grid grid-cols-2 gap-1.5 mt-2">
            ${allTokens.map(token => `<button type="button" title="แทรก ${_esc(token.token)}" class="cce-insert-token flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold hover:bg-indigo-100 text-left" data-token="${_esc(token.token)}"><span>⚡</span><span class="truncate">${_esc(token.label)}</span></button>`).join('')}
          </div>
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${sectionLabel('ฟอนต์')}
          <select id="cce-f-font" class="w-full border border-gray-300 rounded-lg px-2.5 py-2 text-sm bg-white">
            ${availableFonts.map(font => `<option value="${_esc(font)}" style="font-family:'${_esc(font)}',sans-serif" ${font === (el.fontFamily || 'Sarabun') ? 'selected' : ''}>${_esc(font)} — ตัวอย่างภาษาไทย</option>`).join('')}
          </select>
          <div class="flex gap-2 mt-2">
            <input id="cce-google-font-name" type="text" placeholder="Google Font เช่น IBM Plex Sans Thai" class="min-w-0 flex-1 border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" />
            <button id="cce-add-google-font" type="button" title="เพิ่ม Google Font" class="w-9 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold">+</button>
          </div>
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${sectionLabel('รูปแบบตัวอักษร')}
          <div class="flex gap-1.5 mb-3">
            <button type="button" id="cce-f-bold" title="ตัวหนา" class="h-9 w-9 rounded-lg border font-black ${el.bold ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 text-gray-600'}">B</button>
            ${[['left', '≡', 'ชิดซ้าย'], ['center', '≣', 'กึ่งกลาง'], ['right', '≡', 'ชิดขวา']].map(([align, icon, title]) => `<button type="button" data-align="${align}" title="${title}" class="cce-align h-9 w-9 rounded-lg border font-bold ${el.align === align ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 text-gray-600'}" style="${align === 'right' ? 'transform:scaleX(-1)' : ''}">${icon}</button>`).join('')}
          </div>
          <div class="grid grid-cols-2 gap-2">
            <label class="text-[11px] text-gray-500">ขนาด<input id="cce-f-size" type="number" min="6" max="120" value="${el.fontSize}" class="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" /></label>
            <label class="text-[11px] text-gray-500">สี<input id="cce-f-color" type="color" value="${_esc(el.color)}" class="mt-1 w-full h-[31px] border border-gray-300 rounded-lg cursor-pointer" /></label>
            <label class="text-[11px] text-gray-500">ระยะห่างตัวอักษร<input id="cce-f-letter" type="number" min="-5" max="20" step="0.5" value="${el.letterSpacing ?? 0}" class="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" /></label>
            <label class="text-[11px] text-gray-500">ความทึบ (%)<input id="cce-f-opacity" type="number" min="0" max="100" value="${Math.round((el.opacity ?? 1) * 100)}" class="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" /></label>
          </div>
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${sectionLabel('เอฟเฟกต์')}
          <div class="grid grid-cols-2 gap-2">
            <button type="button" id="cce-toggle-shadow" title="เปิด/ปิดเงา" class="px-3 py-2 rounded-lg border text-xs font-bold ${shadow.enabled ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 text-gray-600'}">◒ เงา</button>
            <button type="button" id="cce-toggle-stroke" title="เปิด/ปิดสโตรก" class="px-3 py-2 rounded-lg border text-xs font-bold ${stroke.enabled ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 text-gray-600'}">◎ สโตรก</button>
          </div>
          <div class="mt-3 p-3 rounded-xl bg-gray-50 space-y-2 ${shadow.enabled ? '' : 'opacity-50'}">
            <p class="text-[10px] font-bold text-gray-500">ค่าเงา</p>
            <div class="grid grid-cols-4 gap-1.5">
              <input id="cce-shadow-color" title="สีเงา" type="color" value="${_esc(shadow.color)}" class="w-full h-8 rounded border" />
              <input id="cce-shadow-x" title="เยื้องแนวนอน" type="number" value="${shadow.offsetX}" class="w-full border rounded px-1.5 text-xs" />
              <input id="cce-shadow-y" title="เยื้องแนวตั้ง" type="number" value="${shadow.offsetY}" class="w-full border rounded px-1.5 text-xs" />
              <input id="cce-shadow-blur" title="ความเบลอ" type="number" min="0" max="30" value="${shadow.blur}" class="w-full border rounded px-1.5 text-xs" />
            </div>
          </div>
          <div class="mt-2 p-3 rounded-xl bg-gray-50 space-y-2 ${stroke.enabled ? '' : 'opacity-50'}">
            <p class="text-[10px] font-bold text-gray-500">ค่าสโตรก</p>
            <div class="grid grid-cols-2 gap-2">
              <input id="cce-stroke-color" title="สีสโตรก" type="color" value="${_esc(stroke.color)}" class="w-full h-8 rounded border" />
              <input id="cce-stroke-width" title="ความหนาสโตรก" type="number" min="0" max="10" step="0.5" value="${stroke.width}" class="w-full border rounded px-2 text-xs" />
            </div>
          </div>
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${sectionLabel('ตัวเลือกเพิ่มเติม')}
          <button type="button" id="cce-f-bordertop" title="เส้นคั่นสำหรับช่องลงนาม" class="w-full py-2 rounded-lg border text-xs font-bold ${el.borderTop ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 text-gray-600'}">— เส้นคั่นด้านบน</button>
          <label class="text-[11px] text-gray-500 block mt-2">ความกว้างตัดบรรทัด (%)<input id="cce-f-maxwidth" type="number" min="10" max="100" value="${el.maxWidth ?? ''}" placeholder="เว้นว่าง = บรรทัดเดียว" class="mt-1 w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" /></label>
        </div>
        <div class="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
          <button id="cce-f-duplicate" type="button" class="py-2 rounded-lg border border-indigo-300 text-indigo-600 text-xs font-bold hover:bg-indigo-50">⧉ คัดลอกทั้งหมด</button>
          <button id="cce-f-delete" type="button" class="py-2 rounded-lg border border-red-300 text-red-500 text-xs font-bold hover:bg-red-50">🗑️ ลบ</button>
        </div>
      </div>`

    const commit = patch => { Object.assign(el, patch); renderCanvas() }
    panel.querySelector('#cce-f-text').addEventListener('input', event => commit({ text: event.target.value }))
    panel.querySelectorAll('.cce-insert-token').forEach(btn => btn.addEventListener('click', () => {
      const textarea = panel.querySelector('#cce-f-text')
      const pos = textarea.selectionStart ?? textarea.value.length
      textarea.value = textarea.value.slice(0, pos) + btn.dataset.token + textarea.value.slice(pos)
      commit({ text: textarea.value }); textarea.focus()
    }))
    panel.querySelector('#cce-f-font').addEventListener('change', event => { ensureGoogleFont(event.target.value); commit({ fontFamily: event.target.value }) })
    panel.querySelector('#cce-add-google-font').addEventListener('click', () => {
      const input = panel.querySelector('#cce-google-font-name')
      const family = safeFontFamily(input.value)
      if (!family) { showToast('กรุณาพิมพ์ชื่อฟอนต์จาก Google Fonts', 'warning'); return }
      if (!layout.customFonts.includes(family)) layout.customFonts.push(family)
      ensureGoogleFont(family); commit({ fontFamily: family }); renderTextPanel(el)
    })
    panel.querySelector('#cce-f-bold').addEventListener('click', () => { commit({ bold: !el.bold }); renderTextPanel(el) })
    panel.querySelectorAll('.cce-align').forEach(btn => btn.addEventListener('click', () => { commit({ align: btn.dataset.align }); renderTextPanel(el) }))
    panel.querySelector('#cce-f-size').addEventListener('input', event => commit({ fontSize: clamp(Number(event.target.value) || 12, 6, 120) }))
    panel.querySelector('#cce-f-color').addEventListener('input', event => commit({ color: event.target.value }))
    panel.querySelector('#cce-f-letter').addEventListener('input', event => commit({ letterSpacing: clamp(Number(event.target.value) || 0, -5, 20) }))
    panel.querySelector('#cce-f-opacity').addEventListener('input', event => commit({ opacity: clamp(Number(event.target.value) || 0, 0, 100) / 100 }))
    panel.querySelector('#cce-toggle-shadow').addEventListener('click', () => { commit({ shadow: { ...shadow, enabled: !shadow.enabled } }); renderTextPanel(el) })
    panel.querySelector('#cce-toggle-stroke').addEventListener('click', () => { commit({ stroke: { ...stroke, enabled: !stroke.enabled } }); renderTextPanel(el) })
    ;[['#cce-shadow-color', 'color'], ['#cce-shadow-x', 'offsetX'], ['#cce-shadow-y', 'offsetY'], ['#cce-shadow-blur', 'blur']].forEach(([selector, key]) => {
      panel.querySelector(selector).addEventListener('input', event => commit({ shadow: { ...shadow, [key]: key === 'color' ? event.target.value : Number(event.target.value) || 0 } }))
    })
    ;[['#cce-stroke-color', 'color'], ['#cce-stroke-width', 'width']].forEach(([selector, key]) => {
      panel.querySelector(selector).addEventListener('input', event => commit({ stroke: { ...stroke, [key]: key === 'color' ? event.target.value : Number(event.target.value) || 0 } }))
    })
    panel.querySelector('#cce-f-bordertop').addEventListener('click', () => { commit({ borderTop: !el.borderTop }); renderTextPanel(el) })
    panel.querySelector('#cce-f-maxwidth').addEventListener('input', event => commit({ maxWidth: event.target.value ? clamp(Number(event.target.value), 10, 100) : null }))
    panel.querySelector('#cce-f-duplicate').addEventListener('click', duplicateSelected)
    panel.querySelector('#cce-f-delete').addEventListener('click', deleteSelected)
  }

  function renderPanel() {
    const el = selectedElement()
    if (!el) {
      panel.innerHTML = `<div class="text-center py-12"><div class="text-4xl mb-3">👆</div><p class="text-sm font-bold text-gray-600">เลือกองค์ประกอบบนเกียรติบัตร</p><p class="text-xs text-gray-400 mt-1">แล้วตั้งค่าจากแผงนี้</p></div>`
      return
    }
    if (el.type === 'image' || el.type === 'cornerGraphic') renderImagePanel(el)
    else renderTextPanel(el)
  }

  const SNAP_THRESHOLD = 1.2
  function startDrag(event, id) {
    event.preventDefault()
    selectedId = id
    renderCanvas(); renderPanel()
    const canvas = canvasWrap.querySelector('.cert-canvas')
    const rect = canvas.getBoundingClientRect()
    const model = layout.elements.find(el => el.id === id)
    const node = canvas.querySelector(`[data-cert-el-id="${id}"]`)
    const vGuide = document.createElement('div')
    vGuide.style.cssText = 'position:absolute;top:0;bottom:0;left:50%;border-left:1.5px dashed #ec4899;pointer-events:none;z-index:50;display:none;'
    const hGuide = document.createElement('div')
    hGuide.style.cssText = 'position:absolute;left:0;right:0;top:50%;border-top:1.5px dashed #ec4899;pointer-events:none;z-index:50;display:none;'
    canvas.append(vGuide, hGuide)
    const move = pointer => {
      let x = clamp(((pointer.clientX - rect.left) / rect.width) * 100, 0, 100)
      let y = clamp(((pointer.clientY - rect.top) / rect.height) * 100, 0, 100)
      const snapX = Math.abs(x - 50) < SNAP_THRESHOLD
      const snapY = Math.abs(y - 50) < SNAP_THRESHOLD
      if (snapX) x = 50
      if (snapY) y = 50
      vGuide.style.display = snapX ? 'block' : 'none'; hGuide.style.display = snapY ? 'block' : 'none'
      model.x = Math.round(x * 10) / 10; model.y = Math.round(y * 10) / 10
      if (node) { node.style.left = model.x + '%'; node.style.top = model.y + '%' }
    }
    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); renderCanvas() }
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up)
  }

  async function addUploadedImage(file, position = null) {
    if (!file) return
    try {
      const imageUrl = await uploadCertificateLogoImage(file)
      const element = position
        ? { id: uid('corner'), type: 'cornerGraphic', imageUrl, position, width: 14, insetX: 2, insetY: 2, opacity: 1 }
        : { id: uid('img'), type: 'image', imageUrl, x: 50, y: 15, width: 15, opacity: 1 }
      layout.elements.push(element); selectedId = element.id; renderCanvas(); renderPanel()
    } catch (error) { showToast('อัปโหลดไม่สำเร็จ: ' + (error.message ?? ''), 'error') }
  }

  overlay.querySelector('#cce-add-el').addEventListener('click', () => {
    const element = { id: uid('el'), text: 'ข้อความใหม่', x: 50, y: 50, fontSize: 16, color: '#1d1519', fontFamily: 'Sarabun', align: 'center', bold: false, opacity: 1 }
    layout.elements.push(element); selectedId = element.id; renderCanvas(); renderPanel()
  })
  overlay.querySelector('#cce-add-logo-file').addEventListener('change', event => { addUploadedImage(event.target.files?.[0]); event.target.value = '' })
  overlay.querySelector('#cce-add-corner-top').addEventListener('change', event => { addUploadedImage(event.target.files?.[0], 'top'); event.target.value = '' })
  overlay.querySelector('#cce-add-corner-bottom').addEventListener('change', event => { addUploadedImage(event.target.files?.[0], 'bottom'); event.target.value = '' })
  duplicateBtn.addEventListener('click', duplicateSelected)
  overlay.querySelector('#cce-orient-landscape').addEventListener('click', () => { layout.orientation = 'landscape'; renderCanvas() })
  overlay.querySelector('#cce-orient-portrait').addEventListener('click', () => { layout.orientation = 'portrait'; renderCanvas() })
  overlay.querySelector('#cce-bg-file').addEventListener('change', event => {
    const file = event.target.files?.[0]
    if (!file) return
    pendingBgFile = file; layout.background = { type: 'image', imageUrl: URL.createObjectURL(file) }; renderCanvas()
  })
  overlay.querySelectorAll('.cce-bg-preset').forEach(btn => btn.addEventListener('click', () => {
    const preset = CERT_PRESETS[btn.dataset.preset]
    pendingBgFile = null
    layout.background = { type: 'flat', color: preset.bg, cardColor: preset.cardBg, borderColor: preset.border, borderWidth: preset.borderWidth, borderStyle: preset.borderStyle }
    renderCanvas()
  }))

  const closeEditor = () => {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = previousOverflow
    overlay.remove()
  }
  const onKeydown = event => {
    const editing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target?.tagName)
    if (event.key === 'Escape') closeEditor()
    if (!editing && (event.key === 'Delete' || event.key === 'Backspace')) deleteSelected()
    if (!editing && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'd') { event.preventDefault(); duplicateSelected() }
  }
  document.addEventListener('keydown', onKeydown)
  overlay.querySelector('#cce-close').addEventListener('click', closeEditor)
  overlay.querySelector('#cce-save').addEventListener('click', async () => {
    const saveBtn = overlay.querySelector('#cce-save')
    saveBtn.disabled = true; saveBtn.textContent = 'กำลังบันทึก...'
    try {
      let backgroundImageUrl
      if (pendingBgFile) backgroundImageUrl = await uploadCertificateTemplateImage(pendingBgFile)
      if (backgroundImageUrl) layout.background = { type: 'image', imageUrl: backgroundImageUrl }
      await onSave(layout, backgroundImageUrl)
      closeEditor()
    } catch (error) {
      showToast('บันทึกไม่สำเร็จ: ' + (error.message ?? ''), 'error')
      saveBtn.disabled = false; saveBtn.textContent = '💾 บันทึก'
    }
  })

  renderCanvas(); renderPanel()
}
