// js/certificate-editor.js — ตัวแก้ไขเทมเพลตเกียรติบัตรแบบลากวาง (drag & drop) ใช้ร่วมกันทุกระบบ
// (teacher.html / dashboard.html / council.html) — ใช้ Tailwind สีตายตัวล้วนๆ ไม่พึ่ง CSS custom
// property แบบ var(--surface) ที่ทำงานอยู่ (council-theme.css/regrade-theme.css เท่านั้นที่ประกาศตัว
// แปรพวกนี้ไว้ — teacher.html/dashboard.html ไม่มี ทำให้พื้นหลังโปร่งใสไปหมดถ้าใช้ var(--...) ตรงๆ)
// พอร์ตมาจาก council-certificate-editor.js เดิม generalize ให้ผู้เรียก (ระบบไหนก็ตาม) ส่ง
// previewVariables + placeholderTokens ของตัวเองเข้ามาได้ ไม่ผูกกับ "สภา"/"กิจกรรม" ตายตัวอีกต่อไป
// ใช้เอนจินเรนเดอร์เดียวกับ certificate-engine.js (renderCertificateCanvasHtml) เพื่อให้พรีวิวตรงกับ
// ของจริงที่พิมพ์ออกมา 100%
import { renderCertificateCanvasHtml, defaultLayoutFor, UNIVERSAL_PLACEHOLDER_TOKENS, CERT_PRESETS } from './certificate-engine.js'
import { uploadCertificateTemplateImage, uploadCertificateLogoImage } from './storage.js'
import { showToast } from './ui.js'

const _esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n))

// opts: {
//   template: {id, type, preset_key, background_image_url, layout},
//   previewVariables: { name, date, no, ...customKeys } — ค่าตัวอย่างไว้พรีวิวในตัวแก้ไขเท่านั้น,
//   placeholderTokens: [{token,label}] — ปุ่มแทรกด่วนเฉพาะของระบบที่เรียก (จะรวมกับ UNIVERSAL_PLACEHOLDER_TOKENS ให้อัตโนมัติ),
//   onSave: async (layout, backgroundImageUrl) => void,
// }
export function openCertificateLayoutEditor(opts) {
  const { template, previewVariables, placeholderTokens = [], onSave } = opts
  document.getElementById('cce-overlay')?.remove()

  let layout = JSON.parse(JSON.stringify(
    template?.layout?.elements ? template.layout : defaultLayoutFor(template?.type === 'custom' ? 'custom' : (template?.preset_key ?? 'gold_classic'))
  ))
  // เทมเพลต custom เก่าที่ยังไม่มี layout.background.imageUrl — เอารูปเดิมจากคอลัมน์ background_image_url มาต่อ
  if (layout.background?.type === 'image' && !layout.background.imageUrl && template?.background_image_url) {
    layout.background.imageUrl = template.background_image_url
  }
  // เทมเพลตเก่าก่อนมีฟีเจอร์เลือกแนวกระดาษ — ตั้งเป็นแนวนอนชัดเจน (พฤติกรรมเดิมของทุกเทมเพลตก่อนหน้านี้)
  if (!layout.orientation) layout.orientation = 'landscape'
  let selectedId = null
  let pendingBgFile = null

  const allTokens = [...UNIVERSAL_PLACEHOLDER_TOKENS, ...placeholderTokens]
  const previewVars = { name: 'ตัวอย่าง ชื่อ-สกุล นักเรียน', date: new Date().toLocaleDateString('th-TH', { dateStyle: 'long' }), no: '0001', ...previewVariables }

  const previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  const overlay = document.createElement('div')
  overlay.id = 'cce-overlay'
  overlay.className = 'fixed inset-0 z-[9999] bg-white flex flex-col'
  overlay.innerHTML = `
    <div class="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
      <h3 class="flex-1 min-w-0 font-bold text-sm text-gray-800 truncate">🎨 ออกแบบเทมเพลตเกียรติบัตร — ${_esc(template?.name ?? '')}</h3>
      <button id="cce-add-el" type="button" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex-shrink-0">+ เพิ่มข้อความ</button>
      <label id="cce-add-logo" class="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold flex-shrink-0 cursor-pointer">
        + เพิ่มโลโก้/รูป<input type="file" id="cce-add-logo-file" accept="image/*" class="hidden" />
      </label>
      <button id="cce-save" type="button" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex-shrink-0">💾 บันทึก</button>
      <button id="cce-close" type="button" class="text-gray-400 hover:text-gray-700 text-2xl leading-none px-2 flex-shrink-0">&times;</button>
    </div>
    <div class="flex-1 min-h-0 flex flex-col lg:flex-row overflow-y-auto">
      <div class="flex-1 min-w-0 p-4 sm:p-6 flex flex-col gap-3 overflow-auto bg-gray-50">
        <div id="cce-canvas-wrap" class="relative w-full max-w-3xl mx-auto select-none" style="cursor:default"></div>
        <p class="text-[11px] text-gray-400 text-center">ลากข้อความบนภาพเพื่อจัดตำแหน่ง • คลิกเพื่อเลือกและแก้ไขในแผงด้านขวา • นี่คือข้อมูลตัวอย่างสำหรับพรีวิวเท่านั้น</p>
        <div class="max-w-3xl w-full mx-auto grid sm:grid-cols-2 gap-3">
          <div class="bg-white border border-gray-200 rounded-xl p-3">
            <p class="text-[11px] font-bold text-gray-700 mb-2">📐 แนวกระดาษ</p>
            <div class="flex gap-2">
              <button type="button" id="cce-orient-landscape" class="cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold">▭ แนวนอน</button>
              <button type="button" id="cce-orient-portrait" class="cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold">▯ แนวตั้ง</button>
            </div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3">
            <p class="text-[11px] font-bold text-gray-700 mb-2">🖼️ พื้นหลัง</p>
            <div class="flex flex-wrap items-center gap-2">
              <label class="px-2.5 py-1.5 rounded-lg border border-gray-300 text-xs font-bold cursor-pointer bg-white">
                📤 อัปโหลด<input type="file" id="cce-bg-file" accept="image/*" class="hidden" />
              </label>
              ${Object.entries(CERT_PRESETS).map(([k, p]) => `<button type="button" class="cce-bg-preset w-7 h-7 rounded-full border-2 border-white shadow" style="background:${p.bg}" data-preset="${k}" title="${_esc(k)}"></button>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div id="cce-panel" class="lg:w-96 flex-shrink-0 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white p-5 overflow-y-auto"></div>
    </div>`
  document.body.appendChild(overlay)

  const canvasWrap = overlay.querySelector('#cce-canvas-wrap')
  const panel = overlay.querySelector('#cce-panel')

  function renderCanvas() {
    const isPortrait = layout.orientation === 'portrait'
    canvasWrap.style.maxWidth = isPortrait ? '26rem' : '48rem'
    canvasWrap.innerHTML = renderCertificateCanvasHtml({ layout, variables: previewVars })
    canvasWrap.querySelectorAll('[data-cert-el-id]').forEach(elDiv => {
      const id = elDiv.dataset.certElId
      elDiv.style.cursor = 'move'
      elDiv.style.outline = id === selectedId ? '2px dashed #0ea5e9' : 'none'
      elDiv.style.outlineOffset = '3px'
      elDiv.addEventListener('pointerdown', ev => startDrag(ev, id))
    })
    const activeCls = 'bg-indigo-600 text-white border-indigo-600'
    const inactiveCls = 'bg-white text-gray-700 border-gray-300'
    overlay.querySelector('#cce-orient-landscape').className = `cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold ${isPortrait ? inactiveCls : activeCls}`
    overlay.querySelector('#cce-orient-portrait').className = `cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold ${isPortrait ? activeCls : inactiveCls}`
  }

  function renderImagePanel(el) {
    const sectionLabel = t => `<p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">${t}</p>`
    panel.innerHTML = `
      <div class="space-y-5">
        <div>
          ${sectionLabel('โลโก้/รูปภาพ')}
          <div class="rounded-lg border border-gray-200 bg-gray-50 p-2 flex items-center justify-center">
            <img src="${_esc(el.imageUrl)}" class="max-h-24 object-contain" />
          </div>
          <label class="mt-2.5 block w-full text-center px-2.5 py-1.5 rounded-lg border border-gray-300 text-xs font-bold cursor-pointer bg-white">
            📤 เปลี่ยนรูป<input type="file" id="cce-f-image-replace" accept="image/*" class="hidden" />
          </label>
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${sectionLabel('ขนาด')}
          <label class="text-[11px] text-gray-500 block mb-1">ความกว้าง (% ของการ์ด — สูงปรับตามสัดส่วนรูปเอง)</label>
          <input id="cce-f-width" type="number" min="3" max="100" value="${el.width ?? 20}" class="w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs bg-white" />
        </div>
        <div class="pt-4 border-t border-gray-200">
          <button id="cce-f-delete" type="button" class="w-full py-2 rounded-lg border border-red-400 text-red-500 text-xs font-bold hover:bg-red-50 transition">🗑️ ลบรูปนี้</button>
        </div>
      </div>`

    const commit = (patch) => { Object.assign(el, patch); renderCanvas() }
    panel.querySelector('#cce-f-width').addEventListener('input', e => commit({ width: clamp(Number(e.target.value) || 20, 3, 100) }))
    panel.querySelector('#cce-f-image-replace').addEventListener('change', async e => {
      const file = e.target.files?.[0]
      if (!file) return
      const input = e.target
      input.disabled = true
      try {
        const url = await uploadCertificateLogoImage(file)
        commit({ imageUrl: url })
        renderImagePanel(el)
      } catch (err) {
        showToast('อัปโหลดไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        input.disabled = false
      }
    })
    panel.querySelector('#cce-f-delete').addEventListener('click', () => {
      layout.elements = layout.elements.filter(x => x.id !== el.id)
      selectedId = null
      renderCanvas(); renderPanel()
    })
  }

  function renderPanel() {
    const el = layout.elements.find(e => e.id === selectedId)
    if (!el) { panel.innerHTML = `<p class="text-xs text-gray-400 text-center py-8">คลิกข้อความหรือรูปบนเกียรติบัตรเพื่อแก้ไข</p>`; return }
    if (el.type === 'image') { renderImagePanel(el); return }
    const sectionLabel = t => `<p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">${t}</p>`
    panel.innerHTML = `
      <div class="space-y-5">
        <div>
          ${sectionLabel('ข้อความ')}
          <textarea id="cce-f-text" rows="3" class="w-full border border-gray-300 rounded-lg px-2.5 py-2 text-xs bg-white leading-relaxed">${_esc(el.text)}</textarea>
          <p class="text-[10px] text-gray-400 mt-2 mb-1">แทรกข้อมูลอัตโนมัติ:</p>
          <div class="flex flex-wrap gap-1.5">
            ${allTokens.map(t => `<button type="button" class="cce-insert-token px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold hover:opacity-80 transition" data-token="${_esc(t.token)}">${_esc(t.label)}</button>`).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200">
          ${sectionLabel('รูปแบบตัวอักษร')}
          <div class="grid grid-cols-2 gap-2.5">
            <div><label class="text-[11px] text-gray-500 block mb-1">ขนาด</label><input id="cce-f-size" type="number" min="8" max="72" value="${el.fontSize}" class="w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs bg-white" /></div>
            <div><label class="text-[11px] text-gray-500 block mb-1">สี</label><input id="cce-f-color" type="color" value="${_esc(el.color)}" class="w-full h-[31px] border border-gray-300 rounded-lg bg-white cursor-pointer" /></div>
          </div>
          <div class="mt-2.5">
            <label class="text-[11px] text-gray-500 block mb-1">การจัดวาง</label>
            <select id="cce-f-align" class="w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs bg-white">
              ${['left', 'center', 'right'].map(a => `<option value="${a}" ${el.align === a ? 'selected' : ''}>${a === 'left' ? 'ชิดซ้าย' : a === 'right' ? 'ชิดขวา' : 'กึ่งกลาง'}</option>`).join('')}
            </select>
          </div>
          <label class="flex items-center gap-2 text-xs mt-2.5 cursor-pointer"><input id="cce-f-bold" type="checkbox" ${el.bold ? 'checked' : ''} class="rounded" /> ตัวหนา</label>
        </div>

        <div class="pt-4 border-t border-gray-200">
          ${sectionLabel('ตัวเลือกเพิ่มเติม')}
          <label class="flex items-center gap-2 text-xs cursor-pointer"><input id="cce-f-bordertop" type="checkbox" ${el.borderTop ? 'checked' : ''} class="rounded" /> เส้นคั่นด้านบน (สำหรับช่องลงนาม)</label>
          <div class="mt-2.5">
            <label class="text-[11px] text-gray-500 block mb-1">ตัดบรรทัด (% ความกว้าง, เว้นว่าง = บรรทัดเดียว)</label>
            <input id="cce-f-maxwidth" type="number" min="10" max="100" value="${el.maxWidth ?? ''}" class="w-full border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs bg-white" />
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200">
          <button id="cce-f-delete" type="button" class="w-full py-2 rounded-lg border border-red-400 text-red-500 text-xs font-bold hover:bg-red-50 transition">🗑️ ลบข้อความนี้</button>
        </div>
      </div>`

    const commit = (patch) => { Object.assign(el, patch); renderCanvas() }
    panel.querySelector('#cce-f-text').addEventListener('input', e => commit({ text: e.target.value }))
    panel.querySelectorAll('.cce-insert-token').forEach(btn => btn.addEventListener('click', () => {
      const ta = panel.querySelector('#cce-f-text')
      const pos = ta.selectionStart ?? ta.value.length
      ta.value = ta.value.slice(0, pos) + btn.dataset.token + ta.value.slice(pos)
      commit({ text: ta.value })
      ta.focus()
    }))
    panel.querySelector('#cce-f-size').addEventListener('input', e => commit({ fontSize: clamp(Number(e.target.value) || 12, 6, 120) }))
    panel.querySelector('#cce-f-color').addEventListener('input', e => commit({ color: e.target.value }))
    panel.querySelector('#cce-f-align').addEventListener('change', e => commit({ align: e.target.value }))
    panel.querySelector('#cce-f-bold').addEventListener('change', e => commit({ bold: e.target.checked }))
    panel.querySelector('#cce-f-bordertop').addEventListener('change', e => commit({ borderTop: e.target.checked }))
    panel.querySelector('#cce-f-maxwidth').addEventListener('input', e => commit({ maxWidth: e.target.value ? clamp(Number(e.target.value), 10, 100) : null }))
    panel.querySelector('#cce-f-delete').addEventListener('click', () => {
      layout.elements = layout.elements.filter(x => x.id !== el.id)
      selectedId = null
      renderCanvas(); renderPanel()
    })
  }

  const SNAP_THRESHOLD = 1.2 // % — ระยะที่ถือว่า "เข้าใกล้กึ่งกลาง" พอจะ snap ให้อัตโนมัติ

  function startDrag(ev, id) {
    ev.preventDefault()
    selectedId = id
    renderCanvas(); renderPanel()
    const canvasEl = canvasWrap.querySelector('.cert-canvas')
    const rect = canvasEl.getBoundingClientRect()
    const el = layout.elements.find(e => e.id === id)
    const elDiv = canvasEl.querySelector(`[data-cert-el-id="${id}"]`)

    // เส้นไกด์กึ่งกลาง (แนวตั้ง = กึ่งกลางซ้าย-ขวา, แนวนอน = กึ่งกลางบน-ล่าง) — โผล่เฉพาะตอน snap เท่านั้น
    const vGuide = document.createElement('div')
    vGuide.style.cssText = 'position:absolute;top:0;bottom:0;left:50%;width:0;border-left:1.5px dashed #ec4899;pointer-events:none;z-index:50;display:none;'
    const hGuide = document.createElement('div')
    hGuide.style.cssText = 'position:absolute;left:0;right:0;top:50%;height:0;border-top:1.5px dashed #ec4899;pointer-events:none;z-index:50;display:none;'
    canvasEl.appendChild(vGuide)
    canvasEl.appendChild(hGuide)

    const move = mv => {
      let x = clamp(((mv.clientX - rect.left) / rect.width) * 100, 0, 100)
      let y = clamp(((mv.clientY - rect.top) / rect.height) * 100, 0, 100)
      const snapX = Math.abs(x - 50) < SNAP_THRESHOLD
      const snapY = Math.abs(y - 50) < SNAP_THRESHOLD
      if (snapX) x = 50
      if (snapY) y = 50
      vGuide.style.display = snapX ? 'block' : 'none'
      hGuide.style.display = snapY ? 'block' : 'none'
      el.x = Math.round(x * 10) / 10; el.y = Math.round(y * 10) / 10
      if (elDiv) { elDiv.style.left = el.x + '%'; elDiv.style.top = el.y + '%' }
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      renderCanvas() // เรนเดอร์สะอาดอีกครั้งตอนปล่อยเมาส์ (ล้างเส้นไกด์ไปในตัว)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  overlay.querySelector('#cce-add-el').addEventListener('click', () => {
    const id = 'el-' + Date.now().toString(36)
    layout.elements.push({ id, text: 'ข้อความใหม่', x: 50, y: 50, fontSize: 16, color: '#1d1519', align: 'center', bold: false })
    selectedId = id
    renderCanvas(); renderPanel()
  })

  overlay.querySelector('#cce-add-logo-file').addEventListener('change', async e => {
    const file = e.target.files?.[0]
    if (!file) return
    const label = overlay.querySelector('#cce-add-logo')
    label.style.pointerEvents = 'none'
    label.style.opacity = '0.5'
    try {
      const url = await uploadCertificateLogoImage(file)
      const id = 'img-' + Date.now().toString(36)
      layout.elements.push({ id, type: 'image', imageUrl: url, x: 50, y: 15, width: 15 })
      selectedId = id
      renderCanvas(); renderPanel()
    } catch (err) {
      showToast('อัปโหลดไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      label.style.pointerEvents = ''
      label.style.opacity = ''
      e.target.value = ''
    }
  })

  overlay.querySelector('#cce-orient-landscape').addEventListener('click', () => { layout.orientation = 'landscape'; renderCanvas() })
  overlay.querySelector('#cce-orient-portrait').addEventListener('click', () => { layout.orientation = 'portrait'; renderCanvas() })

  overlay.querySelector('#cce-bg-file').addEventListener('change', e => {
    const file = e.target.files?.[0]
    if (!file) return
    pendingBgFile = file
    layout.background = { type: 'image', imageUrl: URL.createObjectURL(file) }
    renderCanvas()
  })
  overlay.querySelectorAll('.cce-bg-preset').forEach(btn => btn.addEventListener('click', () => {
    const p = CERT_PRESETS[btn.dataset.preset]
    pendingBgFile = null
    layout.background = { type: 'flat', color: p.bg, cardColor: p.cardBg, borderColor: p.border, borderWidth: p.borderWidth, borderStyle: p.borderStyle }
    renderCanvas()
  }))

  const closeEditor = () => {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = previousOverflow
    overlay.remove()
  }
  const onKeydown = e => { if (e.key === 'Escape') closeEditor() }
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
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      saveBtn.disabled = false; saveBtn.textContent = '💾 บันทึก'
    }
  })

  renderCanvas(); renderPanel()
}
