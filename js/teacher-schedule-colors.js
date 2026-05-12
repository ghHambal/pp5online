export const SCHEDULE_COLOR_PRESETS = [
  { cls: 'bg-emerald-100 text-emerald-800', hex: '#d1fae5', soft: '#ecfdf5', border: '#6ee7b7', dot: '#10b981' },
  { cls: 'bg-indigo-100 text-indigo-800', hex: '#e0e7ff', soft: '#eef2ff', border: '#a5b4fc', dot: '#6366f1' },
  { cls: 'bg-amber-100 text-amber-800', hex: '#fef3c7', soft: '#fffbeb', border: '#fcd34d', dot: '#f59e0b' },
  { cls: 'bg-rose-100 text-rose-800', hex: '#ffe4e6', soft: '#fff1f2', border: '#fda4af', dot: '#f43f5e' },
  { cls: 'bg-cyan-100 text-cyan-800', hex: '#cffafe', soft: '#ecfeff', border: '#67e8f9', dot: '#06b6d4' },
  { cls: 'bg-violet-100 text-violet-800', hex: '#ede9fe', soft: '#f5f3ff', border: '#c4b5fd', dot: '#8b5cf6' },
  { cls: 'bg-lime-100 text-lime-800', hex: '#ecfccb', soft: '#f7fee7', border: '#bef264', dot: '#84cc16' },
  { cls: 'bg-orange-100 text-orange-800', hex: '#ffedd5', soft: '#fff7ed', border: '#fdba74', dot: '#f97316' },
  { cls: 'bg-pink-100 text-pink-800', hex: '#fce7f3', soft: '#fdf2f8', border: '#f9a8d4', dot: '#ec4899' },
  { cls: 'bg-teal-100 text-teal-800', hex: '#ccfbf1', soft: '#f0fdfa', border: '#5eead4', dot: '#14b8a6' },
  { cls: 'bg-sky-100 text-sky-800', hex: '#e0f2fe', soft: '#f0f9ff', border: '#7dd3fc', dot: '#0ea5e9' },
  { cls: 'bg-fuchsia-100 text-fuchsia-800', hex: '#fae8ff', soft: '#fdf4ff', border: '#f0abfc', dot: '#d946ef' },
]

const _norm = (value) => String(value ?? '').trim().toLowerCase()
const _HEX_RE = /^#[0-9a-f]{6}$/i

function _hashString(value) {
  let hash = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

export function scheduleColorKey({ teacherId = '', className = '', subjectName = '', fallbackId = '' } = {}) {
  const scope = _norm(teacherId)
  return `${scope}|${roomColorKey({ className, subjectName, fallbackId })}`
}

export function roomColorKey({ className = '', subjectName = '', fallbackId = '' } = {}) {
  const room = _norm(className)
  const subject = _norm(subjectName)
  const fallback = _norm(fallbackId)
  return room || subject || fallback || 'default'
}

function _hexToRgb(hex) {
  const clean = _HEX_RE.test(hex) ? hex.slice(1) : 'e0e7ff'
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

function _rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map(n => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0')).join('')}`
}

function _mixHex(a, b, weight = 0.5) {
  const ca = _hexToRgb(a)
  const cb = _hexToRgb(b)
  return _rgbToHex({
    r: ca.r * (1 - weight) + cb.r * weight,
    g: ca.g * (1 - weight) + cb.g * weight,
    b: ca.b * (1 - weight) + cb.b * weight,
  })
}

export function colorMetaForHex(hex) {
  const safeHex = _HEX_RE.test(String(hex ?? '')) ? String(hex).toLowerCase() : '#6366f1'
  return {
    cls: '',
    hex: safeHex,
    soft: _mixHex(safeHex, '#ffffff', 0.86),
    border: _mixHex(safeHex, '#ffffff', 0.45),
    dot: safeHex,
    text: _mixHex(safeHex, '#000000', 0.28),
  }
}

export function scheduleColorFor(input = {}) {
  const key = scheduleColorKey(input)
  const idx = _hashString(key) % SCHEDULE_COLOR_PRESETS.length
  return { ...colorMetaForHex(SCHEDULE_COLOR_PRESETS[idx].dot), cls: SCHEDULE_COLOR_PRESETS[idx].cls, idx, key }
}

export function resolveScheduleColor(input = {}, savedColors = {}) {
  const key = roomColorKey(input)
  const saved = savedColors instanceof Map ? savedColors.get(key) : savedColors[key]
  return saved ? colorMetaForHex(saved) : scheduleColorFor(input)
}

export function scheduleColorLabel({ subjectName = '', className = '', fallbackId = '' } = {}) {
  const subject = String(subjectName ?? '').trim()
  const room = String(className ?? '').trim()
  if (subject && room) return `${subject} — ${room}`
  return room || subject || String(fallbackId ?? '').trim() || 'ไม่ระบุห้อง'
}
