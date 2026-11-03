const DEFAULT_STYLE = { fontFamily: 'Sarabun', fontSize: 20, color: '#183b56' }
const FONTS = {
  Sarabun: "'Sarabun', 'Noto Sans Thai', sans-serif",
  Tahoma: "Tahoma, 'Noto Sans Thai', sans-serif",
  serif: "Georgia, 'Noto Serif Thai', serif",
  handwritten: "'Comic Sans MS', 'Noto Sans Thai', cursive",
}

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])

function wrapThaiText(ctx, text, maxWidth) {
  const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter('th', { granularity: 'word' }) : null
  const words = segmenter ? [...segmenter.segment(text)].map(item => item.segment) : Array.from(text)
  const lines = []
  let line = ''
  for (const word of words) {
    const next = line + word
    if (line && ctx.measureText(next).width > maxWidth) {
      lines.push(line.trimEnd())
      line = word.trimStart()
    } else line = next
  }
  lines.push(line)
  return lines
}

function makeNoteImage(text, style, drawingCanvas, hasDrawing) {
  if (!text && !hasDrawing) return Promise.resolve(null)
  const width = 1200
  const margin = 72
  const fontSize = Math.max(14, Math.min(32, Number(style.fontSize) || DEFAULT_STYLE.fontSize)) * 2
  const preview = document.createElement('canvas')
  const pctx = preview.getContext('2d')
  pctx.font = `${fontSize}px ${FONTS[style.fontFamily] || FONTS.Sarabun}`
  const paragraphs = String(text || '').split(/\r?\n/)
  const lines = paragraphs.flatMap(paragraph => paragraph ? wrapThaiText(pctx, paragraph, width - margin * 2) : [' '])
  const lineHeight = Math.round(fontSize * 1.65)
  const headingHeight = 120
  const textHeight = lines.length * lineHeight
  const drawingHeight = hasDrawing ? 320 : 0
  const height = headingHeight + textHeight + drawingHeight + margin * 2
  preview.width = width
  preview.height = height
  const ctx = preview.getContext('2d')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)
  ctx.strokeStyle = '#dbe4ec'
  ctx.lineWidth = 4
  ctx.strokeRect(24, 24, width - 48, height - 48)
  ctx.fillStyle = '#173b56'
  ctx.font = `bold 36px ${FONTS.Sarabun}`
  ctx.fillText('คำชี้แจง / แนวทางการแก้ค้างเก่า', margin, 94)
  ctx.fillStyle = /^#[\da-f]{6}$/i.test(style.color || '') ? style.color : DEFAULT_STYLE.color
  ctx.font = `${fontSize}px ${FONTS[style.fontFamily] || FONTS.Sarabun}`
  lines.forEach((line, index) => ctx.fillText(line, margin, headingHeight + index * lineHeight, width - margin * 2))
  if (hasDrawing) {
    const top = headingHeight + textHeight + 36
    ctx.strokeStyle = '#dbe4ec'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(margin, top - 18)
    ctx.lineTo(width - margin, top - 18)
    ctx.stroke()
    ctx.drawImage(drawingCanvas, margin, top, width - margin * 2, drawingHeight)
  }
  return new Promise((resolve, reject) => {
    preview.toBlob(blob => blob ? resolve(blob) : reject(new Error('สร้างภาพคำชี้แจงไม่สำเร็จ')), 'image/jpeg', 0.88)
  })
}

export function openRegradeNoteComposer(initial = {}) {
  return new Promise(resolve => {
    const noteText = String(initial.text || '')
    const style = { ...DEFAULT_STYLE, ...(initial.style || {}) }
    const existingImage = String(initial.imageUrl || '')
    const root = document.createElement('div')
    root.className = 'fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-5'
    root.innerHTML = `
      <section role="dialog" aria-modal="true" aria-labelledby="regrade-note-title" class="w-full max-w-xl max-h-[94vh] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col">
        <header class="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200">
          <div><h2 id="regrade-note-title" class="text-base font-extrabold text-slate-800">✍️ เขียนคำชี้แจงถึงนักเรียน</h2><p class="text-[11px] text-slate-500 mt-0.5">ข้อความจะแสดงในระบบ และสร้างภาพขนาดเล็กไว้เปิดหรือดาวน์โหลด</p></div>
          <button type="button" data-note-close aria-label="ปิด" class="rounded-full w-9 h-9 text-slate-500 hover:bg-slate-100">✕</button>
        </header>
        <div class="p-4 overflow-y-auto space-y-3">
          <label class="block text-xs font-bold text-slate-700">พิมพ์คำชี้แจง
            <textarea data-note-text maxlength="2000" rows="4" class="mt-1 w-full rounded-xl border border-slate-300 p-3 text-sm leading-7 text-slate-800" placeholder="เช่น ให้นักเรียนทำแบบฝึกหัดหน้า 12 ข้อ 1–5 แล้วส่งภายในวันที่กำหนด">${escapeHtml(noteText)}</textarea>
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 items-end">
            <label class="block text-[11px] font-bold text-slate-600">แบบอักษร
              <select data-note-font class="mt-1 w-full rounded-lg border border-slate-300 px-2 py-2 text-xs bg-white">
                <option value="Sarabun">สารบรรณ</option><option value="Tahoma">Tahoma</option><option value="serif">มีเชิง</option><option value="handwritten">ลายมือ</option>
              </select>
            </label>
            <label class="block text-[11px] font-bold text-slate-600">ขนาดตัวอักษร
              <select data-note-size class="mt-1 w-full rounded-lg border border-slate-300 px-2 py-2 text-xs bg-white">
                ${[16,18,20,22,24,28,32].map(size => `<option value="${size}">${size} px</option>`).join('')}
              </select>
            </label>
            <label class="block text-[11px] font-bold text-slate-600">สีตัวอักษร
              <input data-note-color type="color" class="mt-1 h-9 w-full rounded-lg border border-slate-300 bg-white p-1">
            </label>
          </div>
          <div class="rounded-xl border border-slate-200 p-3">
            <div class="flex items-center justify-between gap-2 mb-2"><div><p class="text-xs font-bold text-slate-700">เขียนหรือวาดด้วยลายมือ</p><p class="text-[10px] text-slate-500">ใช้เมาส์ ปากกา หรือแตะหน้าจอ</p></div><button type="button" data-note-clear class="text-[11px] font-bold text-rose-600">ล้างลายมือ</button></div>
            <canvas data-note-canvas width="1000" height="300" class="w-full h-32 sm:h-40 rounded-lg border border-dashed border-slate-300 bg-white touch-none"></canvas>
          </div>
          <div class="rounded-xl border border-sky-100 bg-sky-50 p-3">
            <p class="text-[10px] font-bold text-sky-800 mb-1">ตัวอย่าง</p>
            <div data-note-preview class="min-h-12 whitespace-pre-wrap break-words rounded-lg bg-white p-3"></div>
          </div>
          ${existingImage ? `<div class="text-[10px] text-slate-500">มีภาพคำชี้แจงเดิมแนบอยู่ <a href="${escapeHtml(existingImage)}" target="_blank" rel="noopener" class="font-bold text-sky-700 underline">เปิดดู</a> · หากบันทึกการแก้ไข ระบบจะสร้างภาพใหม่ตามข้อความและลายมือในหน้านี้</div>` : ''}
          <p class="text-[10px] text-slate-500">ระบบสร้างไฟล์ JPG จากข้อความและลายมือเพื่อแนบให้ ขนาดขึ้นกับเนื้อหาและภาพที่เขียน</p>
        </div>
        <footer class="flex gap-2 border-t border-slate-200 p-3">
          <button type="button" data-note-cancel class="flex-1 rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-700">ยกเลิก</button>
          <button type="button" data-note-save class="flex-1 rounded-xl bg-emerald-700 py-2.5 text-xs font-bold text-white">บันทึกคำชี้แจง</button>
        </footer>
      </section>`
    document.body.append(root)

    const text = root.querySelector('[data-note-text]')
    const font = root.querySelector('[data-note-font]')
    const size = root.querySelector('[data-note-size]')
    const color = root.querySelector('[data-note-color]')
    const canvas = root.querySelector('[data-note-canvas]')
    const ctx = canvas.getContext('2d')
    const preview = root.querySelector('[data-note-preview]')
    let drawing = false
    let hasDrawing = false
    let settled = false
    const finish = value => {
      if (settled) return
      settled = true
      root.remove()
      resolve(value)
    }
    font.value = FONTS[style.fontFamily] ? style.fontFamily : DEFAULT_STYLE.fontFamily
    size.value = String(Math.max(16, Math.min(32, Number(style.fontSize) || DEFAULT_STYLE.fontSize)))
    color.value = /^#[\da-f]{6}$/i.test(style.color || '') ? style.color : DEFAULT_STYLE.color
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = color.value
    ctx.lineWidth = 5
    const updatePreview = () => {
      preview.textContent = text.value || 'ตัวอย่างคำชี้แจงจะแสดงตรงนี้'
      preview.style.fontFamily = FONTS[font.value] || FONTS.Sarabun
      preview.style.fontSize = `${size.value}px`
      preview.style.color = color.value
    }
    ;[text, font, size, color].forEach(el => el.addEventListener('input', updatePreview))
    color.addEventListener('input', () => { ctx.strokeStyle = color.value })
    updatePreview()
    const point = event => {
      const rect = canvas.getBoundingClientRect()
      return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height }
    }
    canvas.addEventListener('pointerdown', event => {
      drawing = true
      hasDrawing = true
      canvas.setPointerCapture(event.pointerId)
      const p = point(event)
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
    })
    canvas.addEventListener('pointermove', event => {
      if (!drawing) return
      const p = point(event)
      ctx.lineTo(p.x, p.y)
      ctx.stroke()
    })
    const stopDrawing = () => { drawing = false; ctx.closePath() }
    canvas.addEventListener('pointerup', stopDrawing)
    canvas.addEventListener('pointercancel', stopDrawing)
    root.querySelector('[data-note-clear]').addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      hasDrawing = false
    })
    root.querySelectorAll('[data-note-close], [data-note-cancel]').forEach(button => button.addEventListener('click', () => finish(null)))
    root.addEventListener('keydown', event => { if (event.key === 'Escape') finish(null) })
    root.querySelector('[data-note-save]').addEventListener('click', async event => {
      const button = event.currentTarget
      button.disabled = true
      button.textContent = 'กำลังสร้างภาพ…'
      try {
        const normalizedText = text.value.trim()
        const selectedStyle = { fontFamily: font.value, fontSize: Number(size.value), color: color.value }
        const imageBlob = await makeNoteImage(normalizedText, selectedStyle, canvas, hasDrawing)
        finish({ text: normalizedText, style: selectedStyle, imageBlob, clearImage: !normalizedText && !hasDrawing })
      } catch (error) {
        button.disabled = false
        button.textContent = 'บันทึกคำชี้แจง'
        window.alert(error.message || 'สร้างภาพคำชี้แจงไม่สำเร็จ')
      }
    })
  })
}
