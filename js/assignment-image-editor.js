import { getAssignmentImageReviews, saveAssignmentImageReview } from './assignment-annotations-api.js'
import { drawReviewStrokes, sanitizeReviewStrokes, isCurrentReview } from './assignment-annotation-model.js'
import { getFriendlyErrorMessage } from './ui.js'

const esc = text => String(text ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))

export async function openAssignmentImageEditor({ submission, file, studentName, onSaved }) {
  if (document.getElementById('assignment-image-editor')) return
  const previousFocus = document.activeElement
  const previousOverflow = document.body.style.overflow
  const modal = document.createElement('div')
  modal.id = 'assignment-image-editor'
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')
  modal.setAttribute('aria-labelledby', 'air-title')
  modal.innerHTML = `<style>
    #assignment-image-editor{position:fixed;inset:0;z-index:240;background:#f1f5f9;display:flex;flex-direction:column;color:#1e293b;overscroll-behavior:contain}
    #assignment-image-editor .air-header,#assignment-image-editor .air-tools{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:12px 16px;background:white;border-bottom:1px solid #e2e8f0;flex-shrink:0}
    #assignment-image-editor button,#assignment-image-editor select,#assignment-image-editor input{min-height:40px;border:1px solid #cbd5e1;border-radius:10px;padding:6px 10px;background:white;color:#334155;font-size:14px}
    #assignment-image-editor button:disabled{opacity:.45;cursor:wait}
    #assignment-image-editor button.air-primary{background:#4f46e5;color:white;border-color:#4f46e5}
    #assignment-image-editor #air-status{padding:8px 16px;font-size:13px;background:#eef2ff;flex-shrink:0}
    #assignment-image-editor #air-viewport{flex:1;min-height:0;overflow:auto;padding:16px;overscroll-behavior:contain}
    #assignment-image-editor canvas{display:block;background:white;box-shadow:0 2px 12px #0f172a26;touch-action:none;max-width:none}
    #assignment-image-editor #air-text{width:180px;max-width:100%}
    @media(max-width:600px){#assignment-image-editor .air-header,#assignment-image-editor .air-tools{padding:8px;gap:6px}#assignment-image-editor #air-viewport{padding:8px}#assignment-image-editor .air-name{flex-basis:100%}}
  </style>
  <div class="air-header"><div class="air-name" style="flex:1;min-width:120px"><strong id="air-title">✍️ เขียนตรวจงาน — ${esc(studentName)}</strong><div style="font-size:12px;color:#64748b;overflow-wrap:anywhere">${esc(file.name)}</div></div><button id="air-draft" disabled>บันทึกฉบับร่าง</button><button id="air-publish" class="air-primary" disabled>ส่งผลตรวจให้นักเรียน</button><button id="air-close" aria-label="ปิดหน้าตรวจงาน">✕</button></div>
  <div class="air-tools" aria-label="เครื่องมือเขียนตรวจ">
    <label>เครื่องมือ <select id="air-tool"><option value="pen">✏️ ปากกา</option><option value="eraser">ยางลบเส้น</option><option value="text">พิมพ์ข้อความ</option><option value="hand">เลื่อน/ซูม</option></select></label>
    <label>สี <input id="air-color" type="color" value="#dc2626" aria-label="สีปากกา" style="width:48px;padding:3px"></label>
    <label>ขนาด <select id="air-size"><option value=".002">เล็ก</option><option value=".004" selected>กลาง</option><option value=".008">ใหญ่</option></select></label>
    <input id="air-text" placeholder="ข้อความ แล้วแตะจุดที่จะวาง" aria-label="ข้อความที่จะเขียนบนงาน" hidden maxlength="500">
    <label>รับการเขียน <select id="air-input"><option value="all">นิ้ว / เมาส์ / ปากกา</option><option value="pen">ปากกาเท่านั้น</option></select></label>
    <button id="air-undo" aria-label="ย้อนกลับ">↶ ย้อนกลับ</button><button id="air-redo" aria-label="ทำซ้ำ">↷ ทำซ้ำ</button>
    <label>ซูม <select id="air-zoom"><option value="1">พอดีจอ</option><option value="1.5">150%</option><option value="2">200%</option><option value="3">300%</option></select></label>
  </div>
  <p id="air-status" role="status">กำลังโหลดต้นฉบับและผลตรวจ…</p>
  <div id="air-viewport"><canvas id="air-canvas" aria-label="พื้นที่เขียนตรวจงาน"></canvas></div>`
  document.body.appendChild(modal)
  document.body.style.overflow = 'hidden'
  const $ = selector => modal.querySelector(selector)
  const canvas = $('#air-canvas'), viewport = $('#air-viewport'), ctx = canvas.getContext('2d')
  let strokes = [], activeStroke = null, undo = [], redo = [], version = 0, dirty = false, saving = false, ready = false
  let activePointer = null, beforeErase = null, published = false
  const image = new Image()
  image.crossOrigin = 'anonymous'
  const status = text => { $('#air-status').textContent = text }
  const refreshHistory = () => { $('#air-undo').disabled = !ready || saving || !undo.length; $('#air-redo').disabled = !ready || saving || !redo.length }
  const render = () => {
    if (!ready) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    drawReviewStrokes(ctx, activeStroke ? [...strokes, activeStroke] : strokes, canvas.width, canvas.height)
    refreshHistory()
  }
  const remember = previous => { undo.push(previous); if (undo.length > 30) undo.shift(); redo = []; dirty = true; status('มีการแก้ไขที่ยังไม่บันทึก'); render() }
  const resize = () => {
    if (!ready) return
    const fit = Math.min(canvas.width, Math.max(100, viewport.clientWidth - (innerWidth <= 600 ? 16 : 32)))
    canvas.style.width = `${fit * Number($('#air-zoom').value)}px`
    canvas.style.height = 'auto'
  }
  const observer = new ResizeObserver(resize)
  observer.observe(viewport)
  const warnUnload = event => { if (dirty) { event.preventDefault(); event.returnValue = '' } }
  window.addEventListener('beforeunload', warnUnload)
  const close = () => {
    if (saving) return
    if (dirty && !confirm('ยังมีรอยตรวจที่ไม่ได้บันทึก ต้องการปิดโดยไม่บันทึกหรือไม่?')) return
    observer.disconnect()
    window.removeEventListener('beforeunload', warnUnload)
    document.removeEventListener('keydown', keydown, true)
    document.body.style.overflow = previousOverflow
    modal.remove()
    if (previousFocus?.isConnected) previousFocus.focus()
  }
  const keydown = event => {
    if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); close() }
    if (event.key === 'Tab') {
      const focusable = [...modal.querySelectorAll('button:not(:disabled),input:not([hidden]),select')].filter(el => el.getClientRects().length)
      const first = focusable[0], last = focusable.at(-1)
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
  }
  document.addEventListener('keydown', keydown, true)
  $('#air-close').onclick = close
  const point = event => {
    const rect = canvas.getBoundingClientRect()
    return [Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)), Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height))]
  }
  const erase = ([x, y]) => {
    const rect = canvas.getBoundingClientRect()
    const hit = (px, py) => Math.hypot((px-x)*rect.width, (py-y)*rect.height) < 20
    strokes = strokes.filter(stroke => stroke.type === 'text' ? !hit(stroke.x, stroke.y) : !stroke.points.some(([px, py]) => hit(px, py)))
    render()
  }
  canvas.addEventListener('pointerdown', event => {
    if (!ready || saving || !event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0) || $('#air-tool').value === 'hand') return
    if ($('#air-input').value === 'pen' && event.pointerType !== 'pen') return
    event.preventDefault()
    const [x, y] = point(event), tool = $('#air-tool').value
    if (tool === 'text') {
      const text = $('#air-text').value.trim()
      if (!text) { $('#air-text').focus(); status('พิมพ์ข้อความก่อน แล้วแตะตำแหน่งบนงาน'); return }
      const previous = strokes.slice()
      strokes.push({ type: 'text', x, y, text, color: $('#air-color').value, width: Number($('#air-size').value) })
      remember(previous)
      return
    }
    activePointer = event.pointerId
    canvas.setPointerCapture(event.pointerId)
    if (tool === 'eraser') { beforeErase = strokes.slice(); erase([x,y]) }
    else activeStroke = { type: 'pen', color: $('#air-color').value, width: Number($('#air-size').value), points: [[x,y]] }
    render()
  })
  canvas.addEventListener('pointermove', event => {
    if (activePointer !== event.pointerId) return
    event.preventDefault()
    if (activeStroke) {
      const events = event.getCoalescedEvents?.() ?? [event]
      for (const item of events.length ? events : [event]) activeStroke.points.push(point(item))
    } else if (beforeErase) erase(point(event))
    render()
  })
  const finish = event => {
    if (activePointer !== event.pointerId) return
    activePointer = null
    if (activeStroke) { const previous = strokes.slice(); strokes.push(activeStroke); activeStroke = null; remember(previous) }
    else if (beforeErase) { const previous = beforeErase; beforeErase = null; if (previous.length !== strokes.length) remember(previous) }
  }
  canvas.addEventListener('pointerup', finish)
  canvas.addEventListener('pointercancel', finish)
  $('#air-tool').onchange = () => { canvas.style.touchAction = $('#air-tool').value === 'hand' ? 'auto' : 'none'; $('#air-text').hidden = $('#air-tool').value !== 'text' }
  $('#air-zoom').onchange = resize
  $('#air-undo').onclick = () => { if (!undo.length || saving) return; redo.push(strokes); strokes = undo.pop(); dirty = true; status('มีการแก้ไขที่ยังไม่บันทึก'); render() }
  $('#air-redo').onclick = () => { if (!redo.length || saving) return; undo.push(strokes); strokes = redo.pop(); dirty = true; status('มีการแก้ไขที่ยังไม่บันทึก'); render() }
  const save = async publish => {
    if (!ready || saving || activePointer !== null) return
    saving = true
    $('#air-draft').disabled = $('#air-publish').disabled = $('#air-close').disabled = true
    refreshHistory()
    status(publish ? 'กำลังส่งฉบับตรวจให้นักเรียน…' : 'กำลังบันทึกฉบับร่าง…')
    try {
      await document.fonts.ready
      render()
      const snapshot = sanitizeReviewStrokes(strokes)
      const png = publish ? await new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('สร้างภาพฉบับตรวจไม่สำเร็จ')), 'image/png')) : null
      const saved = await saveAssignmentImageReview({ submission, file, strokes: snapshot, version, image: png })
      version = saved.version
      published = !!saved.published_at
      dirty = false
      status(publish ? 'ส่งผลตรวจแล้ว — นักเรียนเปิดดูฉบับตรวจจากงานชิ้นนี้ได้' : `บันทึกฉบับร่างแล้ว — ${published ? 'นักเรียนยังเห็นฉบับที่ส่งก่อนหน้า' : 'นักเรียนยังไม่เห็นร่างนี้'}`)
      onSaved?.(saved)
    } catch (error) {
      dirty = true
      status('บันทึกไม่สำเร็จ: ' + getFriendlyErrorMessage(error) + ' — รอยตรวจยังอยู่ในหน้านี้')
    } finally {
      saving = false
      $('#air-draft').disabled = $('#air-publish').disabled = $('#air-close').disabled = false
      refreshHistory()
    }
  }
  $('#air-draft').onclick = () => save(false)
  $('#air-publish').onclick = () => save(true)
  $('#air-close').focus()
  try {
    const [reviews] = await Promise.all([
      getAssignmentImageReviews([submission.id]),
      new Promise((resolve, reject) => { image.onload = resolve; image.onerror = () => reject(new Error('เปิดรูปต้นฉบับไม่สำเร็จ กรุณาตรวจสอบไฟล์หรือการเชื่อมต่อ')); image.src = file.url }),
    ])
    if (!modal.isConnected) return
    const review = reviews.find(row => isCurrentReview(row, submission, file))
    strokes = sanitizeReviewStrokes(review?.strokes)
    version = review?.version ?? 0
    published = !!review?.published_at
    const scale = Math.min(1, 4096 / Math.max(image.naturalWidth, image.naturalHeight), Math.sqrt(8000000 / (image.naturalWidth * image.naturalHeight)))
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale))
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale))
    ready = true
    resize(); render()
    $('#air-draft').disabled = $('#air-publish').disabled = false
    status(review ? 'โหลดรอยตรวจเดิมแล้ว — แก้ไขต่อได้' : 'เขียนบนงานได้เลย • เลือกเลื่อน/ซูมเมื่อต้องการเลื่อนภาพ • ต้นฉบับยังคงเดิม')
  } catch (error) {
    if (modal.isConnected) status('เปิดหน้าตรวจไม่ได้: ' + getFriendlyErrorMessage(error))
  }
}
