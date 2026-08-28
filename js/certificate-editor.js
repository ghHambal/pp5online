// js/certificate-editor.js — ตัวแก้ไขเทมเพลตเกียรติบัตรแบบลากวาง (drag & drop) ใช้ร่วมกันทุกระบบ
// พอร์ตมาจาก council-certificate-editor.js เดิม generalize ให้ผู้เรียก (ระบบไหนก็ตาม) ส่ง
// previewVariables + placeholderTokens ของตัวเองเข้ามาได้ ไม่ผูกกับ "สภา"/"กิจกรรม" ตายตัวอีกต่อไป
// ใช้เอนจินเรนเดอร์เดียวกับ certificate-engine.js (renderCertificateCanvasHtml) เพื่อให้พรีวิวตรงกับ
// ของจริงที่พิมพ์ออกมา 100%
import { renderCertificateCanvasHtml, defaultLayoutFor, UNIVERSAL_PLACEHOLDER_TOKENS, CERT_PRESETS } from './certificate-engine.js'
import { uploadCertificateTemplateImage } from './storage.js'
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
  let selectedId = null
  let pendingBgFile = null

  const allTokens = [...UNIVERSAL_PLACEHOLDER_TOKENS, ...placeholderTokens]
  const previewVars = { name: 'ตัวอย่าง ชื่อ-สกุล นักเรียน', date: new Date().toLocaleDateString('th-TH', { dateStyle: 'long' }), no: '0001', ...previewVariables }

  const overlay = document.createElement('div')
  overlay.id = 'cce-overlay'
  overlay.className = 'fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-3'
  overlay.innerHTML = `
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden">
      <div class="flex items-center gap-3 px-4 py-3 border-b border-[var(--line-soft)] flex-shrink-0">
        <h3 class="flex-1 font-bold text-sm text-[var(--ink)]">🎨 ออกแบบเทมเพลตเกียรติบัตร — ${_esc(template?.name ?? '')}</h3>
        <button id="cce-add-el" type="button" class="px-3 py-1.5 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มข้อความ</button>
        <button id="cce-save" type="button" class="px-3 py-1.5 rounded-lg bg-[var(--ok)] hover:opacity-90 text-white text-xs font-bold">💾 บันทึก</button>
        <button id="cce-close" type="button" class="text-[var(--muted)] hover:text-[var(--ink)] text-2xl leading-none px-2">&times;</button>
      </div>
      <div class="flex-1 min-h-0 flex flex-col lg:flex-row overflow-y-auto">
        <div class="flex-1 min-w-0 p-4 flex flex-col gap-3 overflow-auto">
          <div id="cce-canvas-wrap" class="relative w-full max-w-2xl mx-auto select-none" style="cursor:default"></div>
          <p class="text-[11px] text-[var(--muted-2)] text-center">ลากข้อความบนภาพเพื่อจัดตำแหน่ง • คลิกเพื่อเลือกและแก้ไขในแผงด้านขวา • นี่คือข้อมูลตัวอย่างสำหรับพรีวิวเท่านั้น</p>
          <div class="bg-[var(--muted-bg,#f8fafc)] border border-[var(--line-soft)] rounded-xl p-3">
            <p class="text-[11px] font-bold text-[var(--ink-2)] mb-2">🖼️ พื้นหลัง</p>
            <div class="flex flex-wrap items-center gap-2">
              <label class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold cursor-pointer bg-[var(--surface)]">
                📤 อัปโหลดรูปพื้นหลัง<input type="file" id="cce-bg-file" accept="image/*" class="hidden" />
              </label>
              ${Object.entries(CERT_PRESETS).map(([k, p]) => `<button type="button" class="cce-bg-preset w-7 h-7 rounded-full border-2 border-white shadow" style="background:${p.bg}" data-preset="${k}" title="${_esc(k)}"></button>`).join('')}
            </div>
          </div>
        </div>
        <div id="cce-panel" class="lg:w-72 flex-shrink-0 border-t lg:border-t-0 lg:border-l border-[var(--line-soft)] p-4 overflow-y-auto"></div>
      </div>
    </div>`
  document.body.appendChild(overlay)

  const canvasWrap = overlay.querySelector('#cce-canvas-wrap')
  const panel = overlay.querySelector('#cce-panel')

  function renderCanvas() {
    canvasWrap.innerHTML = renderCertificateCanvasHtml({ layout, variables: previewVars })
    canvasWrap.querySelectorAll('[data-cert-el-id]').forEach(elDiv => {
      const id = elDiv.dataset.certElId
      elDiv.style.cursor = 'move'
      elDiv.style.outline = id === selectedId ? '2px dashed #0ea5e9' : 'none'
      elDiv.style.outlineOffset = '3px'
      elDiv.addEventListener('pointerdown', ev => startDrag(ev, id))
    })
  }

  function renderPanel() {
    const el = layout.elements.find(e => e.id === selectedId)
    if (!el) { panel.innerHTML = `<p class="text-xs text-[var(--muted-2)] text-center py-8">คลิกข้อความบนเกียรติบัตรเพื่อแก้ไข</p>`; return }
    const sectionLabel = t => `<p class="text-[10px] font-bold text-[var(--muted-2)] uppercase tracking-wider mb-2">${t}</p>`
    panel.innerHTML = `
      <div class="space-y-5">
        <div>
          ${sectionLabel('ข้อความ')}
          <textarea id="cce-f-text" rows="3" class="w-full border border-[var(--line)] rounded-lg px-2.5 py-2 text-xs bg-[var(--surface)] leading-relaxed">${_esc(el.text)}</textarea>
          <p class="text-[10px] text-[var(--muted-2)] mt-2 mb-1">แทรกข้อมูลอัตโนมัติ:</p>
          <div class="flex flex-wrap gap-1.5">
            ${allTokens.map(t => `<button type="button" class="cce-insert-token px-2.5 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary-dark)] text-[10px] font-bold hover:opacity-80 transition" data-token="${_esc(t.token)}">${_esc(t.label)}</button>`).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-[var(--line-soft)]">
          ${sectionLabel('รูปแบบตัวอักษร')}
          <div class="grid grid-cols-2 gap-2.5">
            <div><label class="text-[11px] text-[var(--muted)] block mb-1">ขนาด</label><input id="cce-f-size" type="number" min="8" max="72" value="${el.fontSize}" class="w-full border border-[var(--line)] rounded-lg px-2.5 py-1.5 text-xs bg-[var(--surface)]" /></div>
            <div><label class="text-[11px] text-[var(--muted)] block mb-1">สี</label><input id="cce-f-color" type="color" value="${_esc(el.color)}" class="w-full h-[31px] border border-[var(--line)] rounded-lg bg-[var(--surface)] cursor-pointer" /></div>
          </div>
          <div class="mt-2.5">
            <label class="text-[11px] text-[var(--muted)] block mb-1">การจัดวาง</label>
            <select id="cce-f-align" class="w-full border border-[var(--line)] rounded-lg px-2.5 py-1.5 text-xs bg-[var(--surface)]">
              ${['left', 'center', 'right'].map(a => `<option value="${a}" ${el.align === a ? 'selected' : ''}>${a === 'left' ? 'ชิดซ้าย' : a === 'right' ? 'ชิดขวา' : 'กึ่งกลาง'}</option>`).join('')}
            </select>
          </div>
          <label class="flex items-center gap-2 text-xs mt-2.5 cursor-pointer"><input id="cce-f-bold" type="checkbox" ${el.bold ? 'checked' : ''} class="rounded" /> ตัวหนา</label>
        </div>

        <div class="pt-4 border-t border-[var(--line-soft)]">
          ${sectionLabel('ตัวเลือกเพิ่มเติม')}
          <label class="flex items-center gap-2 text-xs cursor-pointer"><input id="cce-f-bordertop" type="checkbox" ${el.borderTop ? 'checked' : ''} class="rounded" /> เส้นคั่นด้านบน (สำหรับช่องลงนาม)</label>
          <div class="mt-2.5">
            <label class="text-[11px] text-[var(--muted)] block mb-1">ตัดบรรทัด (% ความกว้าง, เว้นว่าง = บรรทัดเดียว)</label>
            <input id="cce-f-maxwidth" type="number" min="10" max="100" value="${el.maxWidth ?? ''}" class="w-full border border-[var(--line)] rounded-lg px-2.5 py-1.5 text-xs bg-[var(--surface)]" />
          </div>
        </div>

        <div class="pt-4 border-t border-[var(--line-soft)]">
          <button id="cce-f-delete" type="button" class="w-full py-2 rounded-lg border border-[var(--bad)] text-[var(--bad)] text-xs font-bold hover:bg-[var(--bad)]/5 transition">🗑️ ลบข้อความนี้</button>
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

  overlay.querySelector('#cce-close').addEventListener('click', () => overlay.remove())
  overlay.querySelector('#cce-save').addEventListener('click', async () => {
    const saveBtn = overlay.querySelector('#cce-save')
    saveBtn.disabled = true; saveBtn.textContent = 'กำลังบันทึก...'
    try {
      let backgroundImageUrl
      if (pendingBgFile) backgroundImageUrl = await uploadCertificateTemplateImage(pendingBgFile)
      if (backgroundImageUrl) layout.background = { type: 'image', imageUrl: backgroundImageUrl }
      await onSave(layout, backgroundImageUrl)
      overlay.remove()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      saveBtn.disabled = false; saveBtn.textContent = '💾 บันทึก'
    }
  })

  renderCanvas(); renderPanel()
}
