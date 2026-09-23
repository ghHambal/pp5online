const DEFAULT_DAYS = [false, true, true, true, true, true, false]

export const WORKLOAD_CONFIG_KEY = 'workloadSchedule'
export const WORKLOAD_TIMEZONE = 'Asia/Bangkok'

export const WORKLOAD_FEATURES = {
  prayer_monitor: {
    label: 'Prayer Monitor',
    description: 'จอแสดงผลการเช็คชื่อละหมาด',
    dateRange: false,
    default: { mode: 'AUTO', start: '12:10', end: '13:15', bufferBefore: 0, bufferAfter: 0, days: DEFAULT_DAYS },
  },
  leave_monitor: {
    label: 'Out-of-Class Monitor',
    description: 'จอติดตามนักเรียนออกนอกห้องเรียน',
    dateRange: false,
    default: { mode: 'AUTO', start: '08:30', end: '16:00', bufferBefore: 0, bufferAfter: 0, days: DEFAULT_DAYS },
  },
  azizgames: {
    label: 'AZIZGAMES Live',
    description: 'polling / Realtime / scoreboard สดของกีฬาสี',
    dateRange: true,
    default: { mode: 'AUTO', start: '00:00', end: '23:59', bufferBefore: 0, bufferAfter: 0, days: [true, true, true, true, true, true, true] },
  },
  azfutsal: {
    label: 'AZFUTSAL Live',
    description: 'จอสดและคิว live ของฟุตซอล',
    dateRange: true,
    default: { mode: 'AUTO', start: '00:00', end: '23:59', bufferBefore: 0, bufferAfter: 0, days: [true, true, true, true, true, true, true] },
  },
}

const clampMinutes = value => Math.max(0, Math.min(24 * 60 - 1, Number(value) || 0))
const pad = value => String(value).padStart(2, '0')

function timeToMinutes(value, fallback = 0) {
  const match = String(value || '').match(/^(\d{2}):(\d{2})$/)
  if (!match) return fallback
  return clampMinutes(Number(match[1]) * 60 + Number(match[2]))
}

function minutesToTime(value) {
  const minutes = ((Number(value) % (24 * 60)) + 24 * 60) % (24 * 60)
  return `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`
}

function dateValue(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || '')) ? String(value) : null
}

function normalizeFeature(key, raw = {}) {
  const meta = WORKLOAD_FEATURES[key]
  const source = { ...meta.default, ...(raw || {}) }
  const days = Array.from({ length: 7 }, (_, index) => Boolean(source.days?.[index]))
  const dateFrom = meta.dateRange ? dateValue(source.dateFrom) : null
  const dateTo = meta.dateRange ? dateValue(source.dateTo) : null
  return {
    mode: ['AUTO', 'ON', 'OFF'].includes(source.mode) ? source.mode : meta.default.mode,
    dateFrom,
    dateTo,
    days,
    start: /^\d{2}:\d{2}$/.test(String(source.start || '')) ? source.start : meta.default.start,
    end: /^\d{2}:\d{2}$/.test(String(source.end || '')) ? source.end : meta.default.end,
    bufferBefore: Math.max(0, Math.min(24 * 60, Number(source.bufferBefore) || 0)),
    bufferAfter: Math.max(0, Math.min(24 * 60, Number(source.bufferAfter) || 0)),
  }
}

export function defaultWorkloadConfig() {
  return {
    schemaVersion: 1,
    timezone: WORKLOAD_TIMEZONE,
    features: Object.fromEntries(Object.keys(WORKLOAD_FEATURES).map(key => [key, normalizeFeature(key)])),
  }
}

export function normalizeWorkloadConfig(raw) {
  const base = defaultWorkloadConfig()
  const source = raw && typeof raw === 'object' ? raw : {}
  return {
    schemaVersion: 1,
    timezone: WORKLOAD_TIMEZONE,
    features: Object.fromEntries(Object.keys(WORKLOAD_FEATURES).map(key => [key, normalizeFeature(key, source.features?.[key])])),
  }
}

function localParts(now = new Date(), timezone = WORKLOAD_TIMEZONE) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23', weekday: 'short',
  }).formatToParts(now).reduce((out, item) => ({ ...out, [item.type]: item.value }), {})
  const date = `${parts.year}-${parts.month}-${parts.day}`
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday)
  return { date, weekday: weekday < 0 ? 0 : weekday, minutes: Number(parts.hour) * 60 + Number(parts.minute) }
}

function shiftDate(date, offset) {
  const value = new Date(`${date}T12:00:00Z`)
  value.setUTCDate(value.getUTCDate() + offset)
  return value.toISOString().slice(0, 10)
}

function inDateRange(feature, date) {
  if (!feature.dateFrom && !feature.dateTo) return true
  return Boolean(feature.dateFrom && feature.dateTo && date >= feature.dateFrom && date <= feature.dateTo)
}

function activeForDay(feature, minutes, weekday, date) {
  if (!feature.days[weekday] || !inDateRange(feature, date)) return false
  const start = timeToMinutes(feature.start)
  const end = timeToMinutes(feature.end)
  const from = start - feature.bufferBefore
  const to = end + feature.bufferAfter
  if (from < 0) {
    if (weekday === 0 || !feature.days[weekday - 1]) return minutes >= from + 24 * 60 || minutes < to
  }
  if (to >= 24 * 60) {
    if (weekday === 6 || !feature.days[weekday + 1]) return minutes >= from || minutes < to - 24 * 60
  }
  if (start <= end) return minutes >= from && minutes < to
  return minutes >= from || minutes < to
}

export function isWorkloadActive(featureKey, now = new Date(), config = defaultWorkloadConfig()) {
  const meta = WORKLOAD_FEATURES[featureKey]
  if (!meta) return false
  const feature = normalizeWorkloadConfig(config).features[featureKey]
  if (feature.mode === 'ON') return true
  if (feature.mode === 'OFF') return false
  if (meta.dateRange && (!feature.dateFrom || !feature.dateTo)) return false
  const parts = localParts(now, config.timezone || WORKLOAD_TIMEZONE)
  return activeForDay(feature, parts.minutes, parts.weekday, parts.date)
}

export function workloadState(featureKey, now = new Date(), config = defaultWorkloadConfig()) {
  const feature = normalizeWorkloadConfig(config).features[featureKey]
  if (!feature) return { featureKey, active: false, status: 'UNKNOWN', nextTransitionAt: null }
  if (feature.mode === 'ON') return { featureKey, active: true, status: 'MANUAL_ON', nextTransitionAt: null }
  if (feature.mode === 'OFF') return { featureKey, active: false, status: 'MANUAL_OFF', nextTransitionAt: null }
  const active = isWorkloadActive(featureKey, now, config)
  return { featureKey, active, status: active ? 'ACTIVE' : 'OUTSIDE_SCHEDULE', nextTransitionAt: nextWorkloadTransition(featureKey, now, config) }
}

export function nextWorkloadTransition(featureKey, now = new Date(), config = defaultWorkloadConfig()) {
  const feature = normalizeWorkloadConfig(config).features[featureKey]
  if (!feature || feature.mode !== 'AUTO') return null
  const current = isWorkloadActive(featureKey, now, config)
  for (let minute = 1; minute <= 8 * 24 * 60; minute += 1) {
    const candidate = new Date(now.getTime() + minute * 60 * 1000)
    if (isWorkloadActive(featureKey, candidate, config) !== current) return candidate.toISOString()
  }
  return null
}

export function workloadFeatureForForm(featureKey, feature) {
  const normalized = normalizeFeature(featureKey, feature)
  return { ...normalized, start: minutesToTime(timeToMinutes(normalized.start)), end: minutesToTime(timeToMinutes(normalized.end)) }
}
