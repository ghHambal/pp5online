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

// ─── ป้ายชื่อบทบาท/ตำแหน่งเพิ่มเติม (สำหรับปุ่ม Dashboard ตามตำแหน่ง) ─────────────
export const POS_LBL = {
  dept_head:'หัวหน้ากลุ่มสาระ',
  religion_group_head:'หัวหน้ากลุ่ม (ศาสนา)',
  religion_subgroup_head:'หัวหน้ากลุ่มย่อย (ศาสนา)',
  registrar_samai:'ทะเบียน (สามัญ)', registrar_religion:'ทะเบียน (ศาสนา)', registrar_pvch:'ทะเบียน (ปวช)',
  academic_samai:'วิชาการสามัญ', academic_religion:'วิชาการศาสนา', academic_pvch:'วิชาการปวช',
  house_color_admin:'สีนักเรียน',
  classroom_leaders_admin:'ผู้ดูแลหัวหน้า/รองหัวหน้า',
  executive:'ผู้บริหาร',
}
export const _teacherPositionList = teacher =>
  teacher?.positions?.length ? teacher.positions : (teacher?.position ? [teacher.position] : [])
export const _teacherPositionLabel = teacher =>
  _teacherPositionList(teacher).map(p => POS_LBL[p] ?? p).join(' / ')

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

export const READING_GRADES = [
  { label: 'ดีเยี่ยม', min: 70, cls: 'text-emerald-700 bg-emerald-50' },
  { label: 'ดี',       min: 60, cls: 'text-blue-700 bg-blue-50' },
  { label: 'ผ่าน',     min: 50, cls: 'text-yellow-700 bg-yellow-50' },
  { label: 'ไม่ผ่าน',  min: 0,  cls: 'text-red-600 bg-red-50' },
]
// เกณฑ์เริ่มต้นข้างบน ถูกทับได้จากค่าที่แอดมินตั้งไว้ (system_config key: readingEvalThresholds)
// เก็บเป็น const แต่ mutate ค่าใน object แต่ละตัวแทนการ reassign เพื่อให้ทุกไฟล์ที่ import อาร์เรย์นี้เห็นค่าล่าสุดพร้อมกัน
export function applyReadingGradesFromConfig(cfg) {
  const raw = cfg?.readingEvalThresholds
  if (!raw) return
  try {
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
    if (!Array.isArray(parsed) || parsed.length !== READING_GRADES.length) return
    parsed.forEach((g, i) => {
      if (typeof g?.label === 'string' && g.label) READING_GRADES[i].label = g.label
      if (typeof g?.min === 'number' && !Number.isNaN(g.min)) READING_GRADES[i].min = g.min
    })
  } catch { /* ค่าเสีย ใช้ค่าเริ่มต้นต่อไป */ }
}
export const _readingGrade = (s) => READING_GRADES.find(g => s >= g.min) ?? READING_GRADES[READING_GRADES.length - 1]

export const ATT_STATUS = {
  present: { label: 'ม', color: 'text-emerald-600 font-bold', bg: 'bg-emerald-50' },
  absent:  { label: 'ข', color: 'text-red-600 font-bold',     bg: 'bg-red-50' },
  late:    { label: 'ส', color: 'text-amber-500 font-bold',   bg: 'bg-amber-50' },
  excused: { label: 'ก', color: 'text-blue-500 font-bold',    bg: 'bg-blue-50' },
  sick:    { label: 'ป', color: 'text-orange-500 font-bold',  bg: 'bg-orange-50' },
}
export const ATT_CYCLE = [null, 'present', 'absent', 'late', 'excused', 'sick']

export function setTitle(t, pageKey = null) {
  const el = document.getElementById('page-title')
  if (!el) return
  el.textContent = t
  // เพิ่มปุ่ม 📖 คู่มือถ้ามี pageKey
  const old = document.getElementById('page-tutorial-btn')
  if (old) old.remove()
  if (pageKey) {
    const btn = document.createElement('button')
    btn.id = 'page-tutorial-btn'
    btn.title = 'เปิดคู่มือหน้านี้'
    btn.onclick = () => { import('./tutorial.js').then(m => m.openPageTutorial(pageKey)) }
    btn.className = 'ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition align-middle'
    btn.innerHTML = '📖 คู่มือ'
    el.insertAdjacentElement('afterend', btn)
  }
}

export function setActiveNav(nav) {
  const isAdmin = document.getElementById('sidebar')?.classList.contains('bg-indigo-900') || window.location.pathname.includes('dashboard')
  document.querySelectorAll('[data-nav]').forEach(el => {
    const active = el.dataset.nav === nav
    if (isAdmin) {
      el.classList.toggle('bg-indigo-800', active)
      el.classList.toggle('text-white', active)
      el.classList.toggle('text-indigo-200', !active)
      el.classList.remove('bg-emerald-800', 'text-emerald-200')
    } else {
      el.classList.toggle('bg-emerald-800', active)
      el.classList.toggle('text-white', active)
      el.classList.toggle('text-emerald-200', !active)
      el.classList.remove('bg-indigo-800', 'text-indigo-200')
    }
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

// คำนวณสัปดาห์ปัจจุบันของภาคเรียนจากวันเปิดภาคเรียน (เหมือน _currentWeek ใน views.js)
export function _currentWeek(semesterStart) {
  if (!semesterStart) return 0
  const start = new Date(semesterStart)
  if (isNaN(start)) return 0
  const diffMs = Date.now() - start.getTime()
  if (diffMs < 0) return 0
  return Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000)) + 1
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
    min = Math.min(min, daysUntil * 1440 + slotMins - nowMins)
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

// เหมือน _countdownInfo แต่ใช้คำสำหรับ "เวร" (จุดเวรอาซิซสถาน) + status สำหรับเรียงลำดับ/ไฮไลต์
export function _dutyCountdownInfo(startTime, endTime) {
  if (!startTime) return { label: '—', cls: 'text-gray-400', status: 'done' }
  const now = new Date()
  const [sh, sm] = startTime.split(':').map(Number)
  const [eh, em] = (endTime ?? '23:59').split(':').map(Number)
  const startMs = (sh * 60 + sm) * 60000
  const endMs   = (eh * 60 + em) * 60000
  const nowMs   = (now.getHours() * 60 + now.getMinutes()) * 60000
  if (nowMs >= endMs) return { label: 'เสร็จแล้ว', cls: 'text-gray-400', status: 'done' }
  if (nowMs >= startMs) {
    const remain = Math.ceil((endMs - nowMs) / 60000)
    return { label: `⏳ เหลืออีก ${remain} นาที`, cls: 'text-red-600 font-bold', status: 'active' }
  }
  const mins = Math.floor((startMs - nowMs) / 60000)
  if (mins < 60) return { label: `⏰ อีก ${mins} นาที`, cls: mins <= 15 ? 'text-amber-600 font-bold' : 'text-amber-500 font-semibold', status: 'upcoming' }
  const h = Math.floor(mins / 60), m = mins % 60
  return { label: `อีก ${h} ชม.${m > 0 ? ` ${m} น.` : ''}`, cls: 'text-gray-500', status: 'upcoming' }
}

export function _activeRemainingDisplay(endTime) {
  if (!endTime) return '—'
  const [eh, em] = endTime.split(':').map(Number)
  const now = new Date()
  const remSec = Math.max(0, (eh*60+em)*60 - now.getHours()*3600 - now.getMinutes()*60 - now.getSeconds())
  const h = Math.floor(remSec / 3600)
  const m = Math.floor((remSec % 3600) / 60)
  const s = remSec % 60
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
}

export function _generateSessions(classData, credit, dowPattern = null, useScheduleCount = false) {
  // ค่าเริ่มต้น: คำนวณจากหน่วยกิต (สามัญ 1 หน่วยกิต = 2 คาบ/สัปดาห์ × 20 สัปดาห์)
  // เฉพาะสามัญปวช. (useScheduleCount=true) ยึดจำนวนคาบจริงจากตารางสอนแทน เพราะอัตราหน่วยกิตของ ปวช.
  // ไม่เท่าสามัญ (เช่น 3 หน่วยกิตอาจมีแค่ 4 คาบ/สัปดาห์จริง)
  const targetPerWeek = (useScheduleCount && dowPattern && dowPattern.length)
    ? dowPattern.length
    : Math.max(1, Math.round((credit ?? 1) * 2))
  const periodsPerWeek = targetPerWeek
  const total = targetPerWeek * 20
  const bases = ['day1_date','day2_date','day3_date','day4_date','day5_date','day6_date']
    .map(k => classData[k]).filter(Boolean).map(d => _parseDateOnly(d)).filter(Boolean)
    .sort((a, b) => a - b)
  if (!bases.length) return []

  // No-DOW path: week-aware — จำกัด targetPerWeek ต่อสัปดาห์ทั้ง base dates และ continuation
  if (!dowPattern || !dowPattern.length) {
    const weekMs = 7 * 24 * 60 * 60 * 1000
    const weekCount = {}
    const weekLimitedBases = bases.filter(b => {
      const wSun = new Date(b); wSun.setDate(wSun.getDate() - wSun.getDay()); wSun.setHours(0,0,0,0)
      const key = wSun.getTime()
      weekCount[key] = (weekCount[key] || 0) + 1
      return weekCount[key] <= targetPerWeek
    })
    const sessions = []
    for (const base of weekLimitedBases) {
      if (sessions.length >= total) break
      sessions.push({ n: sessions.length + 1, date: new Date(base), ds: _dateInputValue(base) })
    }
    if (sessions.length >= total) return sessions
    const lastLimitedBase = weekLimitedBases[weekLimitedBases.length - 1]
    const lastWeekSun = new Date(lastLimitedBase); lastWeekSun.setDate(lastWeekSun.getDate() - lastWeekSun.getDay()); lastWeekSun.setHours(0,0,0,0)
    const lastWeekTs = lastWeekSun.getTime()
    const repeatBases = weekLimitedBases.filter(b => b.getTime() >= lastWeekTs && b.getTime() < lastWeekTs + weekMs)
    let cycle = 1
    while (sessions.length < total) {
      for (const base of repeatBases) {
        if (sessions.length >= total) break
        const d = new Date(base); d.setDate(d.getDate() + cycle * 7)
        sessions.push({ n: sessions.length + 1, date: d, ds: _dateInputValue(d) })
      }
      cycle++
    }
    return sessions
  }

  // DOW path: initial base filling — week-limited (ป้องกัน base dates เกิน targetPerWeek/สัปดาห์)
  const _wcDow = {}
  const sessions = []
  for (const base of bases) {
    if (sessions.length >= total) break
    const wSun = new Date(base); wSun.setDate(wSun.getDate() - wSun.getDay()); wSun.setHours(0,0,0,0)
    const wk = wSun.getTime()
    _wcDow[wk] = (_wcDow[wk] || 0) + 1
    if (_wcDow[wk] <= targetPerWeek)
      sessions.push({ n: sessions.length + 1, date: new Date(base), ds: _dateInputValue(base) })
  }
  if (sessions.length >= total) return sessions
  const lastBase = bases[bases.length - 1]

  const lastWeekSun = new Date(lastBase)
  lastWeekSun.setDate(lastWeekSun.getDate() - lastWeekSun.getDay())
  lastWeekSun.setHours(0, 0, 0, 0)
  const lastWeekSunTs = lastWeekSun.getTime()
  const weekMs = 7 * 24 * 60 * 60 * 1000
  const usedCounts = {}
  for (const base of bases) {
    if (base.getTime() >= lastWeekSunTs && base.getTime() < lastWeekSunTs + weekMs) {
      const dow = base.getDay()
      usedCounts[dow] = (usedCounts[dow] || 0) + 1
    }
  }
  // ใช้เฉพาะ periodsPerWeek DOW entries แรก (cap ไม่เกิน credit ที่กำหนด)
  const cappedDOW = dowPattern.slice(0, periodsPerWeek)
  const patternCounts = {}
  for (const dow of cappedDOW) patternCounts[dow] = (patternCounts[dow] || 0) + 1
  const remaining = []
  for (const [d, cnt] of Object.entries(patternCounts)) {
    const need = cnt - (usedCounts[Number(d)] || 0)
    for (let i = 0; i < need; i++) remaining.push(Number(d))
  }
  remaining.sort((a, b) => a - b)
  for (const dow of remaining) {
    if (sessions.length >= total) break
    const d = new Date(lastWeekSun)
    d.setDate(d.getDate() + dow)
    sessions.push({ n: sessions.length + 1, date: d, ds: _dateInputValue(d) })
  }
  let weekOffset = 1
  while (sessions.length < total) {
    for (const dow of cappedDOW) {
      if (sessions.length >= total) break
      const d = new Date(lastWeekSun)
      d.setDate(d.getDate() + weekOffset * 7 + dow)
      sessions.push({ n: sessions.length + 1, date: d, ds: _dateInputValue(d) })
    }
    weekOffset++
  }
  return sessions
}

export function _resolveGeminiKey(cfg, teacher) {
  const dept = teacher?.dept ?? ''
  return (dept && cfg[`geminiKey_${dept}`])
    || cfg.geminiApiKey || cfg.geminiApiKey2 || cfg.geminiApiKey3 || cfg.geminiApiKey4 || cfg.geminiApiKey5 || ''
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

// ─── Tutorial button helper ───────────────────────────────────────────────────
export function _tutBtn(pageKey) {
  return `<button onclick="import('./tutorial.js').then(m=>m.openPageTutorial('${pageKey}'))"
    class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-600
           hover:bg-indigo-100 transition text-xs font-semibold flex-shrink-0"
    title="เปิดคู่มือวิดีโอ">
    📖 คู่มือ
  </button>`
}
