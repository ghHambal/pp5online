export const COMPUTE_TIERS = ['ci_micro', 'ci_small', 'ci_medium']

export const TIER_RANK = {
  ci_micro: 1,
  ci_small: 2,
  ci_medium: 3,
}

export const TIER_LABELS = {
  ci_micro: 'Micro',
  ci_small: 'Small',
  ci_medium: 'Medium',
}

const BANGKOK_OFFSET_MS = 7 * 60 * 60 * 1000
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const TIME_RE = /^(?:([01]\d|2[0-3]):([0-5]\d)|24:00)$/

const isTier = value => COMPUTE_TIERS.includes(value)
const isDate = value => DATE_RE.test(String(value ?? ''))
  && !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
  && new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value
const toMinutes = value => value === '24:00' ? 1440 : Number(value.slice(0, 2)) * 60 + Number(value.slice(3))
const dateObject = value => new Date(`${value}T00:00:00Z`)
const dateString = value => value.toISOString().slice(0, 10)
const addDays = (value, amount) => {
  const date = dateObject(value)
  date.setUTCDate(date.getUTCDate() + amount)
  return dateString(date)
}
const weekdayOf = value => dateObject(value).getUTCDay()

export const tierLabel = tier => TIER_LABELS[tier] ?? tier
export const tierRank = tier => TIER_RANK[tier] ?? 0
export const isComputeTier = isTier

function migrateLegacySchedule(raw) {
  if (!raw || raw.schemaVersion !== 1) return raw
  const rules = []
  for (const period of Array.isArray(raw.periods) ? raw.periods : []) {
    for (let day = 0; day < 7; day += 1) {
      const entry = period.days?.[day]
      if (!entry?.enabled) continue
      rules.push({
        id: `legacy-${rules.length + 1}`,
        startDate: period.startDate,
        endDate: period.endDate,
        days: [day],
        start: entry.start,
        end: entry.end,
        targetTier: 'ci_medium',
        label: 'ช่วงเดิมจากตาราง Medium',
      })
    }
  }
  return {
    schemaVersion: 2,
    enabled: Boolean(raw.enabled),
    timezone: 'Asia/Bangkok',
    defaultTier: 'ci_micro',
    guardrail: raw.guardrail,
    rules,
  }
}

export function normalizeSchedule(raw) {
  const migrated = migrateLegacySchedule(raw)
  if (!migrated || typeof migrated !== 'object') return migrated
  if (migrated.schemaVersion !== 2) return migrated
  return {
    schemaVersion: 2,
    enabled: Boolean(migrated.enabled),
    timezone: migrated.timezone || 'Asia/Bangkok',
    defaultTier: isTier(migrated.defaultTier) ? migrated.defaultTier : 'ci_micro',
    guardrail: migrated.guardrail,
    rules: (Array.isArray(migrated.rules) ? migrated.rules : []).map((rule, index) => ({
      id: rule.id || `rule-${index + 1}`,
      startDate: rule.startDate,
      endDate: rule.endDate,
      days: [...new Set((Array.isArray(rule.days) ? rule.days : []).map(Number))],
      start: rule.start,
      end: rule.end,
      targetTier: isTier(rule.targetTier) ? rule.targetTier : 'ci_micro',
      label: String(rule.label ?? ''),
    })),
  }
}

export function validateSchedule(raw) {
  const config = normalizeSchedule(raw)
  if (!config || config.schemaVersion !== 2 || typeof config.enabled !== 'boolean' || !Array.isArray(config.rules)) {
    throw new Error('รูปแบบตารางเวลาไม่ถูกต้อง')
  }
  if (!isTier(config.defaultTier)) throw new Error('ระดับเครื่องเริ่มต้นไม่ถูกต้อง')
  if (!['Asia/Bangkok'].includes(config.timezone)) throw new Error('โซนเวลาต้องเป็น Asia/Bangkok')
  if (config.rules.length > 200) throw new Error('เพิ่มช่วงเวลาได้ไม่เกิน 200 ช่วง')
  for (const rule of config.rules) {
    if (!isDate(rule.startDate) || !isDate(rule.endDate) || rule.startDate > rule.endDate) {
      throw new Error('กรุณาระบุวันที่เริ่มและสิ้นสุดให้ถูกต้อง')
    }
    if (!Array.isArray(rule.days) || !rule.days.length || rule.days.some(day => !Number.isInteger(day) || day < 0 || day > 6)) {
      throw new Error('กรุณาเลือกวันอย่างน้อยหนึ่งวัน')
    }
    if (!TIME_RE.test(rule.start) || !TIME_RE.test(rule.end) || toMinutes(rule.start) === toMinutes(rule.end)) {
      throw new Error('เวลาเริ่มและเวลาสิ้นสุดต้องถูกต้องและไม่เท่ากัน')
    }
    if (!isTier(rule.targetTier)) throw new Error('ระดับเครื่องในช่วงเวลาไม่ถูกต้อง')
  }
  if (config.enabled && !config.rules.length) throw new Error('กรุณากำหนดอย่างน้อยหนึ่งช่วงเวลาก่อนเปิดใช้งาน')
  return config
}

function activeRangesForDate(config, date) {
  const weekday = weekdayOf(date)
  const previousDate = addDays(date, -1)
  const previousWeekday = weekdayOf(previousDate)
  const ranges = []
  for (const rule of config.rules) {
    const start = toMinutes(rule.start)
    const end = toMinutes(rule.end)
    if (start < end) {
      if (date >= rule.startDate && date <= rule.endDate && rule.days.includes(weekday)) {
        ranges.push({ start, end, targetTier: rule.targetTier, id: rule.id })
      }
      continue
    }
    if (date >= rule.startDate && date <= rule.endDate && rule.days.includes(weekday)) {
      ranges.push({ start, end: 1440, targetTier: rule.targetTier, id: rule.id })
    }
    if (previousDate >= rule.startDate && previousDate <= rule.endDate && rule.days.includes(previousWeekday)) {
      ranges.push({ start: 0, end, targetTier: rule.targetTier, id: rule.id })
    }
  }
  return ranges.filter(range => range.end > range.start)
}

export function scheduleSegmentsForDate(raw, date) {
  const config = validateSchedule(raw)
  const boundaries = new Set([0, 1440])
  const ranges = activeRangesForDate(config, date)
  for (const range of ranges) {
    boundaries.add(range.start)
    boundaries.add(range.end)
  }
  const points = [...boundaries].sort((a, b) => a - b)
  const segments = []
  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index]
    const end = points[index + 1]
    const midpoint = start + (end - start) / 2
    const active = ranges.filter(range => midpoint >= range.start && midpoint < range.end)
    const targetTier = active.reduce((best, range) => tierRank(range.targetTier) > tierRank(best) ? range.targetTier : best, config.defaultTier)
    const last = segments[segments.length - 1]
    if (last?.targetTier === targetTier && last.end === start) last.end = end
    else segments.push({ start, end, targetTier })
  }
  return segments
}

export function scheduledTier(raw, now = new Date()) {
  const config = validateSchedule(raw)
  if (!config.enabled) return null
  const local = new Date(now.getTime() + BANGKOK_OFFSET_MS)
  const date = dateString(local)
  const time = local.getUTCHours() * 60 + local.getUTCMinutes()
  return scheduleSegmentsForDate(config, date).find(segment => time >= segment.start && time < segment.end)?.targetTier ?? config.defaultTier
}

export const emptySchedule = () => ({
  schemaVersion: 2,
  enabled: false,
  timezone: 'Asia/Bangkok',
  defaultTier: 'ci_micro',
  rules: [],
})
