// ─── Shared utilities for all teacher-views modules ──────────────────────────
// ไม่มี import จากที่อื่น — pure helpers เท่านั้น

// ─── CSS class constants ──────────────────────────────────────────────────────
export const GRADE_OPTS = {
  ACDM:    ['ม.1','ม.2','ม.3','ม.4','ม.5','ม.6'],
  AGM:     ['PR 1','อก.1','อก.2','อก.3','อป.1','อป.2','อป.3'],
  ACDMVOC: ['ปวช.1','ปวช.2','ปวช.3'],
  AGMVOC:  ['อก.ปวช.1','อก.ปวช.2','อก.ปวช.3'],
}
export const CREDIT_OPTS = [0.5,1.0,1.5,2.0,2.5,3.0]
export const SELECT_CLS = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400'
export const INPUT_CLS  = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm'

// ─── DOM layout helpers ───────────────────────────────────────────────────────
let _realMainContent = null
const _getMainContent = () => {
  if (!_realMainContent || !document.contains(_realMainContent))
    _realMainContent = document.getElementById('main-content')
  return _realMainContent
}

export function setContent(html) {
  const el = _getMainContent()
  if (el) el.innerHTML = html
}

export function getMainContentRef() { return _realMainContent }
export function setMainContentRef(el) { _realMainContent = el }

export function setTitle(t) {
  document.getElementById('page-title').textContent = t
}

export function setActiveNav(nav) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    const active = el.dataset.nav === nav
    el.classList.toggle('bg-emerald-800', active)
    el.classList.toggle('text-white', active)
    el.classList.toggle('text-emerald-200', !active)
  })
}

// ─── String / HTML helpers ────────────────────────────────────────────────────
export const _htmlEsc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

export function formatPhone(digits) {
  const d = digits.replace(/\D/g,'').slice(0,10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `${d.slice(0,3)} ${d.slice(3)}`
  return `${d.slice(0,3)} ${d.slice(3,6)} ${d.slice(6)}`
}

// ─── Date helpers ─────────────────────────────────────────────────────────────
export function _parseDateOnly(value) {
  if (!value) return null
  if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate())
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function _dateInputValue(value) {
  const d = _parseDateOnly(value)
  if (!d) return ''
  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ].join('-')
}

export function _fmtDate(d) {
  if (!d) return '—'
  const dt = d instanceof Date ? d : new Date(d)
  return `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}`
}

// คำนวณ 6 วันสอนแรกจาก teacher_schedules entries + termStart
export function _calcSixPeriodDates(entries, termStartStr) {
  const termStart = _parseDateOnly(termStartStr) ?? _parseDateOnly(new Date())
  const startDow = termStart.getDay()
  const periods = []
  for (const e of entries) {
    const span = e.span_periods ?? 1
    for (let i = 0; i < span; i++) {
      periods.push({ dow: e.day_of_week, pno: (e.period_no ?? 0) + i })
    }
  }
  periods.sort((a, b) => {
    const aOffset = (a.dow - startDow + 7) % 7
    const bOffset = (b.dow - startDow + 7) % 7
    return aOffset !== bOffset ? aOffset - bOffset : a.pno - b.pno
  })
  if (!periods.length) return []
  const result = []
  let week = 0
  while (result.length < 6) {
    for (const p of periods) {
      const d = new Date(termStart)
      d.setDate(d.getDate() + ((p.dow - startDow + 7) % 7) + week * 7)
      result.push(d)
      if (result.length >= 6) break
    }
    week++
  }
  return result.slice(0, 6)
}

// ─── Schedule / countdown helpers ────────────────────────────────────────────
export const _DAYS_TH_SHORT = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
export const _DAYS_TH_FULL  = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']

export function _nextPeriodMins(classId, linksByClass, scheduleMap, periodMap) {
  const now = new Date()
  const dow = now.getDay()
  const nowMins = now.getHours() * 60 + now.getMinutes()
  const schedIds = linksByClass[classId] ?? []
  if (!schedIds.length) return Infinity
  let min = Infinity
  for (const sid of schedIds) {
    const slot = scheduleMap[sid]
    if (!slot) continue
    const p = periodMap[slot.period_no]
    if (!p) continue
    const [h, m] = p.start_time.split(':').map(Number)
    const slotMins = h * 60 + m
    let daysUntil = (slot.day_of_week - dow + 7) % 7
    if (daysUntil === 0 && slotMins <= nowMins) daysUntil = 7
    min = Math.min(min, daysUntil * 1440 + slotMins)
  }
  return min
}

export function _scheduleChips(classId, linksByClass, scheduleMap, periodMap) {
  const schedIds = linksByClass[classId] ?? []
  if (!schedIds.length) return ''
  return schedIds
    .map(sid => {
      const slot = scheduleMap[sid]
      if (!slot) return ''
      const p = periodMap[slot.period_no]
      const span = slot.span_periods > 1 ? `–${slot.period_no + slot.span_periods - 1}` : ''
      const time = p ? ` ${p.start_time.substring(0, 5)}` : ''
      return `<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-white/80 text-indigo-700 text-xs rounded-lg font-medium border border-indigo-100">
        ${_DAYS_TH_SHORT[slot.day_of_week]} คาบ${slot.period_no}${span}${time}
      </span>`
    })
    .filter(Boolean)
    .join('')
}

export function _countdownInfo(startTime, endTime) {
  if (!startTime) return { label: '—', cls: 'text-gray-400' }
  const now = new Date()
  const [sh, sm] = startTime.split(':').map(Number)
  const [eh, em] = (endTime ?? '23:59').split(':').map(Number)
  const startMs = (sh * 60 + sm) * 60000
  const endMs   = (eh * 60 + em) * 60000
  const nowMs   = (now.getHours() * 60 + now.getMinutes()) * 60000
  if (nowMs >= endMs)   return { label: 'เสร็จแล้ว', cls: 'text-gray-400' }
  if (nowMs >= startMs) return { label: '🟢 กำลังสอน', cls: 'text-emerald-600 font-bold' }
  const mins = Math.floor((startMs - nowMs) / 60000)
  if (mins < 60) return { label: `⏰ อีก ${mins} นาที`, cls: mins <= 15 ? 'text-red-600 font-bold' : 'text-amber-600 font-semibold' }
  const h = Math.floor(mins / 60), m = mins % 60
  return { label: `อีก ${h} ชม.${m > 0 ? ` ${m} น.` : ''}`, cls: 'text-gray-500' }
}

export function _activeRemainingDisplay(endTime) {
  if (!endTime) return '—'
  const [eh, em] = endTime.split(':').map(Number)
  const now = new Date()
  const remMins = Math.ceil(((eh*60+em)*60000 - (now.getHours()*60+now.getMinutes())*60000 - now.getSeconds()*1000) / 60000)
  if (remMins <= 0) return '0 น.'
  if (remMins < 60) return `${remMins} น.`
  return `${Math.floor(remMins/60)} ชม. ${remMins%60} น.`
}

export function _resolveGeminiKey(cfg, teacher) {
  const dept = teacher?.dept ?? ''
  return (dept && cfg[`geminiKey_${dept}`]) || cfg.geminiApiKey || ''
}

export function _transparentEdgeDarkLogo(url) {
  if (!url) return Promise.resolve('')
  return new Promise(resolve => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onerror = () => resolve(url)
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        ctx.drawImage(img, 0, 0)
        const image = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const { data, width, height } = image
        const seen = new Uint8Array(width * height)
        const stack = []
        const isDark = idx => {
          const off = idx * 4
          return data[off + 3] > 0 && data[off] < 70 && data[off + 1] < 70 && data[off + 2] < 70
        }
        const push = (x, y) => {
          if (x < 0 || y < 0 || x >= width || y >= height) return
          const idx = y * width + x
          if (seen[idx] || !isDark(idx)) return
          seen[idx] = 1
          stack.push(idx)
        }
        for (let x = 0; x < width; x++) { push(x, 0); push(x, height - 1) }
        for (let y = 0; y < height; y++) { push(0, y); push(width - 1, y) }
        while (stack.length) {
          const idx = stack.pop()
          const off = idx * 4
          data[off + 3] = 0
          const x = idx % width, y = Math.floor(idx / width)
          push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1)
        }
        ctx.putImageData(image, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      } catch { resolve(url) }
    }
    img.src = url
  })
}
