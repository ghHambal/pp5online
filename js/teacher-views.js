import {
  getMySubjects, getMasterSubjects, getMyClasses, getDepartments, getTeachers,
  getSystemConfig, getMySchedule, getClassScheduleLinks, getPeriods, getClassrooms,
  getTeacherPackageAccess, getWorkCalendarEvents,
} from './api.js'
import { supabase } from './supabase.js'
import { copySheetTemplate } from './sync.js'
import { showToast } from './ui.js'
import { openPP5Doc } from './pp5-doc.js'
import { renderScoreColumns } from './teacher-score-columns.js'
import {
  setContent, setTitle, setActiveNav, _htmlEsc,
  _DAYS_TH_SHORT, _DAYS_TH_FULL,
  _nextPeriodMins, _scheduleChips, _countdownInfo, _activeRemainingDisplay,
  _dutyCountdownInfo,
  _currentWeek, _teacherPositionList, _teacherPositionLabel,
} from './teacher-views-utils.js'
import { getTodayDuty, getTodayDutyGrade } from './wen-duty.js'
export { renderClassForm, renderClassEditForm } from './teacher-class-forms.js'
export { renderScoreColumns } from './teacher-score-columns.js'

// ─── View: Overview ───────────────────────────────────────────────────────────

let _todayWidgetTimer = null
let _activeSecTimer   = null
let _teacherClockTimer = null
let _dutyWidgetTimer  = null
let _workCalWidgetTimer = null

// ── ป้ายชื่อ/สีประเภทกิจกรรมปฏิทินปฏิบัติงาน (มิเรอร์จาก renderWorkCalendarView ใน views.js) ──
const WCAL_TYPE_LABEL = { inspection: '🔍 รอบตรวจ', deadline: '⏰ กำหนดส่ง', meeting: '📅 ประชุม', other: '📌 อื่นๆ' }
const WCAL_TYPE_COLOR = {
  inspection: 'bg-indigo-100 text-indigo-700',
  deadline: 'bg-rose-100 text-rose-700',
  meeting: 'bg-amber-100 text-amber-700',
  other: 'bg-gray-100 text-gray-600',
}

// event_date/end_date เป็น DATE ล้วนไม่มีเวลา — นับถอยหลังไปยังเที่ยงคืนของ event_date
function _workCalCountdown(ev) {
  const now = new Date()
  const target = new Date(ev.event_date + 'T00:00:00')
  const endTarget = new Date((ev.end_date || ev.event_date) + 'T23:59:59')
  if (now >= target && now <= endTarget) return { status: 'ongoing' }
  const diffSec = Math.max(0, Math.floor((target - now) / 1000))
  const days = Math.floor(diffSec / 86400)
  const rem = diffSec % 86400
  const hh = Math.floor(rem / 3600), mm = Math.floor((rem % 3600) / 60), ss = rem % 60
  const clock = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
  const urgency = diffSec <= 86400 ? 'red' : diffSec <= 3 * 86400 ? 'amber' : 'normal'
  return { status: 'upcoming', days, clock, urgency }
}

// สัปดาห์ที่ N ของภาคเรียนสำหรับวันที่ใดๆ (สูตรเดียวกับ _currentWeek แต่รับวันที่เป้าหมายแทน "วันนี้")
function _weekNumberForDate(semesterStart, dateStr) {
  if (!semesterStart) return 0
  const start = new Date(semesterStart)
  const target = new Date(dateStr + 'T00:00:00')
  if (isNaN(start) || isNaN(target)) return 0
  const diffMs = target.getTime() - start.getTime()
  if (diffMs < 0) return 0
  return Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000)) + 1
}

// การ์ด "กิจกรรมใกล้ถึง" จากปฏิทินปฏิบัติงาน — นับถอยหลังวัน+วินาทีสด ไล่สีตามความเร่งด่วน
// (>3 วัน = ปกติ, 1-3 วัน = เหลือง, <24 ชม. = แดง เหมือนสไตล์การ์ดเวรตอนถึงเวลาแล้ว)
export function _renderWorkCalendarUpcoming(events, semesterStart) {
  const _esc = v => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const _fmtDate = d => new Date(d + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })
  const today = new Date().toISOString().slice(0, 10)

  const upcoming = (events ?? [])
    .filter(ev => (ev.end_date || ev.event_date) >= today)
    .map(ev => ({ ev, cd: _workCalCountdown(ev) }))
    .filter(({ cd }) => cd.status === 'ongoing' || cd.days <= 14)
    .sort((a, b) => a.ev.event_date.localeCompare(b.ev.event_date))
    .slice(0, 5)

  if (!upcoming.length) {
    return `
    <div class="mb-4 bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
      <div class="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">📅</div>
      <p class="text-sm text-gray-400">ไม่มีกิจกรรมใกล้ถึงใน 14 วันนี้</p>
    </div>`
  }

  return `
  <div class="mb-4 space-y-2">
    ${upcoming.map(({ ev, cd }) => {
      const isRed = cd.status === 'ongoing' || cd.urgency === 'red'
      const isAmber = cd.urgency === 'amber'
      const cardCls = isRed ? 'bg-red-50 border-red-300 ring-2 ring-red-200' : isAmber ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-200'
      const iconCls = isRed ? 'bg-red-100 animate-pulse' : isAmber ? 'bg-amber-100' : 'bg-gray-100'
      const wk = _weekNumberForDate(semesterStart, ev.event_date)
      return `
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${cardCls}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${iconCls}">${isRed ? '🚨' : '📅'}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${WCAL_TYPE_COLOR[ev.event_type]}">${WCAL_TYPE_LABEL[ev.event_type]}</span>
            <span class="text-[11px] text-gray-400">${_fmtDate(ev.event_date)}</span>
            ${wk > 0 ? `<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${wk}</span>` : ''}
          </div>
          <p class="font-semibold text-sm truncate ${isRed ? 'text-red-800' : 'text-gray-800'}">${_esc(ev.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${cd.status === 'ongoing'
            ? `<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>`
            : `<p class="text-xs font-bold ${isRed ? 'text-red-600' : isAmber ? 'text-amber-600' : 'text-gray-500'}">อีก ${cd.days} วัน</p>
               <p class="text-[11px] font-mono ${isRed ? 'text-red-400' : 'text-gray-400'}">${cd.clock}</p>`}
        </div>
      </div>`
    }).join('')}
  </div>`
}

// การ์ด "เวรวันนี้" — ไฮไลต์จุดที่ถึงเวลาแล้ว + นับถอยหลังจุดอื่นๆ
export function _renderWenDutyCard(todayDuty, teacherCode, gradeInfo = null) {
  const _gradeColor = g => g === 'A' ? '#059669' : g === 'B' ? '#2563eb' : '#d97706'
  const _gradeOverlay = (opacity = '0.11') => gradeInfo
    ? `<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${opacity};color:${_gradeColor(gradeInfo.grade)}">${gradeInfo.grade}</span>
       </div>`
    : ''

  if (!todayDuty.length) {
    return `
    <div onclick="window._openWenDuty('${teacherCode}')"
      class="relative overflow-hidden mb-4 bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg hover:border-gray-300 active:scale-[0.99] transition-all duration-150">
      <div class="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">🛡️</div>
      <p class="text-sm text-gray-400">วันนี้ไม่มีเวร</p>
      ${_gradeOverlay('0.13')}
    </div>`
  }

  const info = todayDuty
    .map(p => ({ ...p, cd: _dutyCountdownInfo(p.start_time, p.end_time) }))
    .sort((a, b) => {
      const order = { active: 0, upcoming: 1, done: 2 }
      return (order[a.cd.status] - order[b.cd.status]) || (a.start_time ?? '').localeCompare(b.start_time ?? '')
    })
  const hasActive = info.some(p => p.cd.status === 'active')

  return `
  <div onclick="window._openWenDuty('${teacherCode}')"
    class="relative overflow-hidden mb-4 border rounded-2xl p-4 flex items-start gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150
           ${hasActive ? 'bg-red-50 border-red-300 ring-2 ring-red-200' : 'bg-amber-50 border-amber-200'}">
    <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
                ${hasActive ? 'bg-red-100 animate-pulse' : 'bg-amber-100'}">${hasActive ? '🚨' : '🔔'}</div>
    <div class="flex-1 min-w-0">
      <p class="font-bold text-sm mb-1 ${hasActive ? 'text-red-800' : 'text-amber-800'}">
        ${hasActive ? '🔴 ถึงเวลาเวรแล้ว!' : `วันนี้คุณมีเวร ${info.length} จุด`}
      </p>
      <div class="space-y-1">
        ${info.map(p => p.cd.status === 'active' ? `
        <div class="bg-red-100/70 rounded-lg px-2 py-1.5 -mx-2">
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${_htmlEsc(p.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${_htmlEsc(p.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${p.cd.cls}">${p.cd.label}</span>
          </div>
        </div>` : `
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${p.cd.status === 'done' ? 'text-gray-400 line-through' : 'text-amber-700'}">
            📍 ${_htmlEsc(p.name)} <span class="${p.cd.status === 'done' ? 'text-gray-300' : 'text-amber-500'}">(${_htmlEsc(p.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${p.cd.cls}">${p.cd.label}</span>
        </div>`).join('')}
      </div>
      <p class="text-[11px] mt-1.5 ${hasActive ? 'text-red-400' : 'text-amber-400'}">แตะเพื่อเปิดระบบเวร →</p>
    </div>
    ${_gradeOverlay()}
  </div>`
}

// ภาพรวมแบบย่อสำหรับบัญชี "ผู้บริหาร" ล้วนๆ (ไม่มีภาระสอน) — แดชบอร์ดครูเต็มรูปแบบด้านล่าง
// (คอร์สวิชา/ตารางสอน/โควตาห้องเรียน/งานรายวัน ฯลฯ) ไม่มีความหมายกับบัญชีนี้เลย จึงแยกเป็น
// เนื้อหาของตัวเอง ไม่พยายามแทรกเงื่อนไขเข้าไปในฟังก์ชันเดิมที่ใหญ่และพึ่งพากันสูงอยู่แล้ว (v10.22.560)
function renderExecutiveOverview(teacher) {
  setContent(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${_htmlEsc(teacher?.full_name ?? 'ผู้บริหาร')}</p>
      <p class="text-xs text-gray-400 mt-1">บัญชีนี้ตั้งค่าเป็นบทบาท "ผู้บริหาร" — ไม่มีภาระการสอนในระบบ เมนูจึงถูกย่อให้เหลือเฉพาะส่วนที่เกี่ยวข้อง</p>
    </div>

    <a href="council.html" class="mb-4 rounded-2xl shadow-lg px-5 py-4 flex items-center gap-4 group transition hover:shadow-xl"
      style="background:linear-gradient(135deg,#0f766e,#0d9488,#5eead4)">
      <div class="text-4xl flex-shrink-0">🏛️</div>
      <div class="flex-1 min-w-0">
        <p class="text-white font-extrabold text-base leading-tight">ระบบสภานักเรียน</p>
        <p class="text-white/85 text-xs mt-0.5">ดูภาพรวมสภานักเรียนวาระปัจจุบัน + ภาพรวมการสมัคร + รายนามครูที่ปรึกษา ที่แท็บ "ภาพรวม"</p>
      </div>
      <span class="text-white/70 group-hover:text-white transition text-lg flex-shrink-0">→</span>
    </a>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
      <p class="text-sm font-semibold text-gray-700 mb-1">📢 ประกาศ / ปฏิทินปฏิบัติงาน</p>
      <p class="text-xs text-gray-400">ดูได้จากเมนูด้านซ้าย</p>
    </div>
  </div>`)
}

export async function renderTeacherOverview(teacher, homeroomRooms = []) {
  setActiveNav('overview')
  setTitle('ภาพรวม')

  // บัญชี "ผู้บริหาร" ล้วนๆ (ไม่มีภาระสอน) — โชว์ภาพรวมแบบย่อแทน ข้ามการดึงข้อมูลแดชบอร์ด
  // ครูเต็มรูปแบบด้านล่างทั้งหมด (ตารางสอน/โควตา/สติกเกอร์โดเนท ฯลฯ ไม่มีความหมายกับบัญชีนี้)
  if (_teacherPositionList(teacher).includes('executive')) {
    renderExecutiveOverview(teacher)
    return
  }
  const { getPendingExamRequestCount } = await import('./api.js')
  const { getMyDonationRequests } = await import('./api.js')
  const { getUnreadNotifications } = await import('./api.js')
  const [subjects, classes, cfg, pendingRequests, packageAccess, donationRequests, svNotifs, todayDuty, dutyGrade] = await Promise.all([
    teacher ? getMySubjects(teacher.id).catch(()=>[]) : getMasterSubjects().catch(()=>[]),
    getMyClasses(teacher?.id ?? null).catch(()=>[]),
    getSystemConfig().catch(()=>({})),
    teacher ? getPendingExamRequestCount(teacher.id).catch(()=>0) : Promise.resolve(0),
    teacher ? getTeacherPackageAccess(teacher.id).catch(()=>({ hasSemester: false, paidRoomCount: 0 })) : Promise.resolve({ hasSemester: false, paidRoomCount: 0 }),
    teacher ? getMyDonationRequests(teacher.id).catch(()=>[]) : Promise.resolve([]),
    teacher ? getUnreadNotifications(teacher.id).catch(()=>[]) : Promise.resolve([]),
    teacher ? getTodayDuty(teacher.teacher_code).catch(()=>[]) : Promise.resolve([]),
    teacher ? getTodayDutyGrade(teacher.teacher_code).catch(()=>null) : Promise.resolve(null),
  ])
  const FREE_LIMIT  = parseInt(cfg.freeClassQuota ?? 2)
  const academicYear = parseInt(cfg.academicYear ?? 2568)
  const semester     = parseInt(cfg.semester ?? 1)
  const curWeek      = _currentWeek(cfg.semester_start)

  if (_todayWidgetTimer)  { clearInterval(_todayWidgetTimer);  _todayWidgetTimer  = null }
  if (_activeSecTimer)    { clearInterval(_activeSecTimer);    _activeSecTimer    = null }
  if (_teacherClockTimer) { clearInterval(_teacherClockTimer); _teacherClockTimer = null }
  if (_dutyWidgetTimer)   { clearInterval(_dutyWidgetTimer);   _dutyWidgetTimer   = null }
  if (_workCalWidgetTimer){ clearInterval(_workCalWidgetTimer);_workCalWidgetTimer= null }

  const [schedule, links, periods, allClassrooms, workCalEvents] = await Promise.all([
    teacher ? getMySchedule(teacher.id, academicYear, semester).catch(() => []) : Promise.resolve([]),
    teacher ? getClassScheduleLinks(teacher.id).catch(() => []) : Promise.resolve([]),
    getPeriods().catch(() => []),
    getClassrooms().catch(() => []),
    teacher ? getWorkCalendarEvents(academicYear, semester).catch(() => []) : Promise.resolve([]),
  ])
  window._classroomMapGlobal = Object.fromEntries(allClassrooms.map(r => [r.id, r]))
  const _classroomMapGlobal = window._classroomMapGlobal

  const _linksBySchedule = {}
  links.forEach(l => {
    if (!_linksBySchedule[l.teacher_schedule_id]) _linksBySchedule[l.teacher_schedule_id] = []
    _linksBySchedule[l.teacher_schedule_id].push(l.class_id)
  })
  const _classMap   = Object.fromEntries(classes.map(c => [c.id, c]))
  const _periodMap  = Object.fromEntries(periods.map(p => [p.period_no, p]))
  const todayDow    = new Date().getDay()
  const todayEntries = schedule
    .filter(s => s.day_of_week === todayDow && (_linksBySchedule[s.id] ?? []).length > 0)
    .map(s => {
      const lastPeriodNo = (s.period_no ?? 1) + (s.span_periods ?? 1) - 1
      return {
        ...s,
        linkedClasses: (_linksBySchedule[s.id] ?? []).map(id => _classMap[id]).filter(Boolean),
        period: _periodMap[s.period_no],
        // end_time จริง = คาบสุดท้ายของ span (รองรับ span_periods > 1)
        actualEndPeriod: _periodMap[lastPeriodNo] ?? _periodMap[s.period_no],
      }
    })
    .sort((a, b) => a.period_no - b.period_no)

  // แยก active entry + เรียง: กำลังสอน → upcoming → เสร็จแล้ว
  const _entryStatus = e => {
    const s = _countdownInfo(e.period?.start_time, e.actualEndPeriod?.end_time)
    if (s.label.includes('กำลังสอน')) return 0
    if (s.label.startsWith('เสร็จ')) return 2
    return 1
  }
  const activeEntry = todayEntries.find(e => _entryStatus(e) === 0) ?? null
  const sortedTodayEntries = [...todayEntries]
    .filter(e => e !== activeEntry)
    .sort((a, b) => _entryStatus(a) - _entryStatus(b) || a.period_no - b.period_no)

  const quota        = teacher?.teachers_quota
  const legacyUnlimited = quota?.is_paid && !quota?.package_type && !packageAccess.hasSemester && !packageAccess.paidRoomCount
  const hasSemester = packageAccess.hasSemester || quota?.package_type === 'semester' || legacyUnlimited
  const paidRoomCount = packageAccess.paidRoomCount
  const classLimit = hasSemester ? Infinity : FREE_LIMIT + paidRoomCount
  const usedSlots  = classes.length
  const freeLeft   = hasSemester ? '∞' : Math.max(0, classLimit - usedSlots)
  const quotaColor = hasSemester ? 'text-emerald-700' : usedSlots >= classLimit ? 'text-red-600' : 'text-amber-600'
  const quotaLabel = hasSemester ? 'ไม่จำกัด ✅' : usedSlots >= classLimit ? 'ครบโควตาแล้ว 🔒' : `เหลืออีก ${freeLeft} ห้อง`
  const packageText = hasSemester
    ? 'เหมาทั้งเทอม — สร้างได้ไม่จำกัด'
    : paidRoomCount > 0
      ? `รายห้อง ${paidRoomCount} ห้อง — ใช้แล้ว ${usedSlots}/${classLimit} ห้อง`
      : `ยังไม่เลือกแพ็กเกจ — ใช้โควตาฟรี ${usedSlots}/${FREE_LIMIT} ห้อง`

  // ─── Donation sticker + tier glow ─────────────────────────────────────────
  const approvedDonation = donationRequests.find(r => r.package_type === 'donation' && r.status === 'approved')
  // tier คำนวณจากยอดสะสมของทุกรายการที่อนุมัติแล้ว ไม่ใช่แค่รายการล่าสุด — เพื่อรองรับการโดเนทซ้ำเพื่ออัปเกรดระดับ
  const totalApprovedDonation = donationRequests
    .filter(r => r.package_type === 'donation' && r.status === 'approved')
    .reduce((sum, r) => sum + (r.amount ?? 0), 0)
  const _toInt = (v, d) => { const n = parseInt(v, 10); return Number.isFinite(n) && n > 0 ? n : d }
  const _parseTiers = () => {
    const raw = String(cfg.donationStickerTiers ?? '').trim()
    const minA = _toInt(cfg.donationMinAmount, 99)
    const step = _toInt(cfg.donationAmountStep, 50)
    // field 5 = hex color สำหรับขอบเรืองแสง (optional)
    const defs = [
      [49,  '🌱','ครูผู้จุดประกาย',     'คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝', '#22C55E'],
      [99,  '☕','ครูผู้ร่วมฝัน',       'คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭',       '#A855F7'],
      [149, '🏅','ครูผู้ร่วมสร้าง',     'คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱','#F59E0B'],
      [199, '🐘','ครูผู้ร่วมขับเคลื่อน','คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊', '#3B82F6'],
      [249, '👑','ครูผู้ก่อตั้งร่วม',   'คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️','#D4A017'],
    ]
    const rows = raw
      ? raw.split('\n').filter(Boolean).map(l => {
          const [a,s,t,n,c] = l.split('|').map(x=>x.trim())
          return { amount:_toInt(a,0), sticker:s||'🏅', title:t||`ผู้สนับสนุน ${a} บาท`, note:n||'', color:c||'' }
        }).filter(t => t.amount > 0)
      : defs.map(([a,s,t,n,c]) => ({ amount:a, sticker:s, title:t, note:n, color:c }))
    const sorted = rows.sort((a,b) => a.amount - b.amount)
    // auto-link donationStickerImgN → tier N (override emoji ถ้ามีรูป upload)
    return sorted.map((t, i) => {
      const imgUrl = cfg[`donationStickerImg${i+1}`] ?? ''
      if (imgUrl && /^https?:\/\//.test(imgUrl)) return { ...t, sticker: imgUrl }
      return t
    })
  }

  // hex → inline glow style
  const _tierGlowStyle = (hex) => {
    if (!hex) return ''
    // hex → r,g,b
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
    return `border:2px solid ${hex};box-shadow:0 0 0 4px rgba(${r},${g},${b},0.25),0 4px 20px rgba(${r},${g},${b},0.18);`
  }

  // parse features list — รูปแบบ: icon|text|minTier
  const _parseFeatures = () => {
    const raw = String(cfg.donationSpecialFeatures ?? '').trim()
    const defs = [
      ['🏅','สติกเกอร์/ตราประจำระดับผู้สนับสนุน',1],
      ['📣','ประกาศในห้องเรียนสำหรับนักเรียน',1],
      ['✍️','ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว',1],
      ['📊','Dashboard วิเคราะห์ภาพรวมห้องเรียน',2],
      ['🤖','AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง',2],
      ['🧭','AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา',3],
      ['⚡','Early Access ฟีเจอร์ใหม่ก่อนใคร',3],
      ['📲','แจ้งเตือนอัตโนมัติ Telegram/LINE',4],
    ]
    if (!raw) return defs.map(([icon,text,minTier]) => ({ icon, text, minTier }))
    return raw.split('\n').filter(Boolean).map(l => {
      const parts = l.split('|').map(s=>s.trim())
      return { icon: parts[0]||'✨', text: parts[1]||parts[0]||l, minTier: parseInt(parts[2])||1 }
    }).filter(f => f.text)
  }

  let donorTier      = null
  let donorTierIndex = 0   // 1-based
  let donorStickerHtml = ''
  let cardGlowStyle  = ''
  let cardBorderCls  = 'border border-gray-200 shadow-md'

  if (approvedDonation && cfg.quotaMode === 'school_sponsored') {
    const tiers  = _parseTiers()
    const amount = totalApprovedDonation
    donorTier    = [...tiers].reverse().find(t => amount >= t.amount) ?? tiers[0]
    donorTierIndex = donorTier ? tiers.indexOf(donorTier) + 1 : 0

    if (donorTier) {
      cardGlowStyle = _tierGlowStyle(donorTier.color)
      cardBorderCls = ''   // ใช้ inline style แทน Tailwind
      const s = String(donorTier.sticker ?? '')
      const imgEl = /^https?:\/\//.test(s)
        ? `<img src="${s}" class="w-24 h-24 object-contain drop-shadow-xl" />`
        : `<span class="text-7xl leading-none drop-shadow-lg">${s}</span>`
      const titleColor = donorTier.color ? `color:${donorTier.color};` : 'color:#f59e0b;'
      donorStickerHtml = `
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${imgEl}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${titleColor}">
            ${donorTier.note || donorTier.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`
    }
  }

  // คลิกการ์ด "กำลังสอนอยู่" → เข้าห้องเรียนนั้นทันที
  window._goToActiveClass = async (classId) => {
    if (!classId) return
    const { renderClassDetail } = await import('./teacher-views-classes.js')
    renderClassDetail(teacher, classId)
  }

  // แบนเนอร์พรีเมียม "Smart Classroom" → เปิดหน้าอธิบายฟีเจอร์ (ทุกครูเห็น ไม่ว่าจะมีสิทธิ์ใช้งานหรือไม่)
  window._openSmartClassroomLanding = async () => {
    const { openSmartClassroomLanding } = await import('./teacher-views-smart-classroom.js')
    openSmartClassroomLanding(teacher)
  }

  // แบนเนอร์สัปดาห์ปัจจุบันของภาคเรียน
  const weekBannerHtml = curWeek > 0 ? (() => {
    const wkStart = new Date(cfg.semester_start)
    wkStart.setDate(wkStart.getDate() + (curWeek - 1) * 7)
    const wkEnd = new Date(wkStart)
    wkEnd.setDate(wkEnd.getDate() + 6)
    const fmt = d => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`
    return `
    <div class="mb-5 rounded-2xl px-5 py-4 flex items-center gap-4"
      style="background:linear-gradient(135deg,#059669,#0d9488);box-shadow:0 6px 20px -6px rgba(5,150,105,.5);">
      <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0">📅</div>
      <div class="flex-1 min-w-0">
        <p class="text-white text-2xl font-extrabold leading-tight">สัปดาห์ที่ ${curWeek} <span class="text-sm font-medium text-white/80">(${fmt(wkStart)} – ${fmt(wkEnd)})</span></p>
      </div>
      <div class="text-right text-white/80 text-xs flex-shrink-0">ภาคเรียนที่ ${semester}<br/>ปีการศึกษา ${academicYear}</div>
    </div>
    `
  })() : ''

  // ปุ่มลัด Dashboard ตามตำแหน่ง (หัวหน้ากลุ่ม/ฝ่ายต่างๆ) — ให้เข้าถึงได้ง่ายจากหน้าภาพรวม
  const _svPositions = _teacherPositionList(teacher)
  const svDashboardHtml = _svPositions.length ? `
    <div onclick="window._enterSupervisorMode && window._enterSupervisorMode()"
      class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-4
             cursor-pointer hover:shadow-lg hover:border-blue-300 hover:bg-blue-50/30 transition group">
      <div class="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">📊</div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-gray-800 text-sm">Dashboard ${_teacherPositionLabel(teacher)}</p>
        <p class="text-xs text-gray-400 mt-0.5">เมนูสำหรับบทบาทเพิ่มเติมของคุณ</p>
      </div>
      <span class="text-gray-300 group-hover:text-blue-400 transition text-lg">→</span>
    </div>` : ''

  setContent(`<div class="animate-fade">

    <button type="button" onclick="window._openSmartClassroomLanding()" class="w-full text-left relative overflow-hidden rounded-2xl shadow-lg mb-4 px-5 py-4 flex items-center gap-4 group transition hover:shadow-xl"
      style="background:linear-gradient(135deg,#7a5810,#a9781a,#e6c988)">
      <div class="absolute inset-0 opacity-20" style="background:radial-gradient(circle at 85% 20%,#ffffff,transparent 55%)"></div>
      <div class="relative text-4xl flex-shrink-0">👑</div>
      <div class="relative flex-1 min-w-0">
        <p class="text-white font-extrabold text-base leading-tight">Smart Classroom</p>
        <p class="text-white/85 text-xs mt-0.5">หน้าควบคุมขณะสอนสด — เช็คชื่อ/Hall Pass/สุ่มชื่อ/ควิซสด/สั่งงาน ไว้จอเดียว</p>
      </div>
      <div class="relative flex-shrink-0 text-white/90 text-xl group-hover:translate-x-1 transition-transform">→</div>
    </button>

    ${svDashboardHtml}

    ${weekBannerHtml}

    <!-- แจ้งเตือนจากหัวหน้า -->
    ${svNotifs.length ? (() => {
      const catLabel = {general:'ทั่วไป',profile:'โปรไฟล์',dates:'วันสอน',attendance:'เช็คชื่อ',scores:'คะแนน'}
      const catColor = {general:'#374151',profile:'#5b21b6',dates:'#1e40af',attendance:'#065f46',scores:'#713f12'}
      const catBg    = {general:'#f3f4f6',profile:'#ede9fe',dates:'#dbeafe',attendance:'#d1fae5',scores:'#fef9c3'}
      const posLabel = {dept_head:'หัวหน้ากลุ่มสาระ',registrar:'หัวหน้าฝ่ายทะเบียน',
        academic_samai:'หัวหน้าวิชาการสามัญ',academic_religion:'หัวหน้าวิชาการศาสนา',academic_pvch:'หัวหน้าวิชาการปวช'}
      const tags = [...new Set(svNotifs.map(n=>n.metric))].map(m=>
        `<span style="background:${catBg[m]??'#f3f4f6'};color:${catColor[m]??'#374151'};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${catLabel[m]??m}</span>`
      ).join('')
      const senders = [...new Map(svNotifs.filter(n=>n.supervisor).map(n=>[n.supervisor_id, n.supervisor])).values()]
      const senderNames = senders.map(sv => posLabel[sv.position] ?? 'หัวหน้า').join(', ') || 'หัวหน้า'
      return `
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${senderNames} ${svNotifs.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${tags}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${teacher?.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})() : ''}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="bg-white rounded-2xl ${cardBorderCls} px-5 pt-5 pb-5 mb-5 flex items-center gap-5 overflow-hidden" style="${cardGlowStyle}">
      <!-- รูปโปรไฟล์ + ปุ่มแก้ไข -->
      <div class="flex flex-col items-center gap-2 flex-shrink-0">
        <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-100
                    bg-gradient-to-tr from-emerald-400 to-teal-400 flex items-center justify-center
                    text-white text-3xl font-bold">
          ${teacher?.image_url
            ? `<img src="${teacher.image_url}" class="w-full h-full object-cover"/>`
            : (teacher?.full_name ?? 'ค').charAt(0).toUpperCase()}
        </div>
        <button onclick="window._navTo('profile')"
          class="text-[11px] px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-500
                 hover:bg-gray-50 hover:text-gray-700 transition whitespace-nowrap">
          ✏️ แก้ไขโปรไฟล์
        </button>
      </div>
      <!-- ข้อมูลครู -->
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-gray-800 text-lg truncate">${teacher?.full_name ?? '—'}</h3>
        <p class="text-xs text-gray-400 mt-0.5">รหัสครู ${teacher?.teacher_code ?? '—'} · ${teacher?.category ?? '—'}</p>
        <div class="flex flex-wrap gap-1.5 mt-2">
          ${teacher?.dept
            ? `<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700 font-medium">📚 ${teacher.dept}</span>`
            : `<span class="px-2 py-0.5 rounded-full text-xs bg-amber-50 text-amber-600 font-medium">⚠️ ยังไม่ระบุกลุ่มสาระ</span>`}
          ${homeroomRooms.map(r =>
            `<span class="px-2 py-0.5 rounded-full text-xs ${r.category==='สามัญ'?'bg-blue-50 text-blue-700':'bg-amber-50 text-amber-700'} font-medium">🏠 ${r.main_room}</span>`
          ).join('')}
          ${homeroomRooms.length === 0
            ? `<span class="px-2 py-0.5 rounded-full text-xs bg-gray-50 text-gray-400">ไม่มีห้องที่ปรึกษา</span>`
            : ''}
        </div>
      </div>
      <!-- สติกเกอร์ -->
      ${donorStickerHtml}
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) -->
    ${teacher ? `<div id="wen-duty-card">${_renderWenDutyCard(todayDuty, teacher.teacher_code, dutyGrade)}</div>` : ''}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที) -->
    ${teacher ? `<div id="wcal-upcoming-card">${_renderWorkCalendarUpcoming(workCalEvents, cfg.semester_start)}</div>` : ''}

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      ${[
        { label:'คอร์สวิชาของฉัน', value: subjects.length, icon:'📖', color:'text-emerald-700', bg:'bg-emerald-50', nav:'my-courses' },
        { label:'ห้องเรียน', value: classes.length, icon:'🏫', color:'text-blue-700', bg:'bg-blue-50', nav:'my-classes' },
        { label:'คำร้องรออนุมัติ', value: pendingRequests, icon:'🔔', color: pendingRequests > 0 ? 'text-red-700' : 'text-gray-400', bg:'bg-red-50', nav:'requests' },
      ].map(c=>`
        <div onclick="window._navTo('${c.nav}')"
          class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md p-5 flex items-center gap-4 cursor-pointer hover:shadow-lg active:scale-[0.98] transition-all duration-150 bg-white">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80"></div>
          <div class="w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center text-xl shadow-sm">${c.icon}</div>
          <div>
            <p class="text-xs text-gray-500">${c.label}</p>
            <p class="text-2xl font-bold ${c.color}">${c.value}</p>
          </div>
        </div>`).join('')}
    </div>

    <!-- งานรายวัน: เช็คชื่อ / บันทึกคะแนน -->
    <div class="mt-4 grid grid-cols-2 gap-3">
      <div onclick="window._showClassQuickPicker('attendance')"
        class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3
               cursor-pointer hover:shadow-lg hover:border-emerald-300 hover:bg-emerald-50/30 transition group">
        <div class="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-xl flex-shrink-0">✅</div>
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm">เช็คชื่อ</p>
          <p class="text-xs text-gray-400 mt-0.5">เลือกห้องเรียน</p>
        </div>
      </div>
      <div onclick="window._showClassQuickPicker('grades')"
        class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3
               cursor-pointer hover:shadow-lg hover:border-indigo-300 hover:bg-indigo-50/30 transition group">
        <div class="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl flex-shrink-0">📝</div>
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm">บันทึกคะแนน</p>
          <p class="text-xs text-gray-400 mt-0.5">เลือกห้องเรียน</p>
        </div>
      </div>
    </div>

    <!-- ปุ่มตารางสอน -->
    <div onclick="window._navTo('schedule')"
      class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-4
             cursor-pointer hover:shadow-lg hover:border-indigo-300 hover:bg-indigo-50/30 transition group">
      <div class="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl flex-shrink-0">🗓️</div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-gray-800 text-sm">ตารางสอนของฉัน</p>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${semester} / ${academicYear} — คลิกเพื่อดูและแก้ไขตาราง</p>
      </div>
      <span class="text-gray-300 group-hover:text-indigo-400 transition text-lg">→</span>
    </div>

    <!-- Active class featured card -->
    ${activeEntry ? (() => {
      const cr0 = activeEntry.linkedClasses[0]?.classroom_id ? _classroomMapGlobal[activeEntry.linkedClasses[0].classroom_id] : null
      const time = activeEntry.period
        ? `${activeEntry.period.start_time.substring(0,5)}–${activeEntry.actualEndPeriod.end_time.substring(0,5)}`
        : `คาบ ${activeEntry.period_no}`
      const goToClassId = activeEntry.linkedClasses[0]?.id ?? null
      return `
    <div id="active-class-card" class="mt-4 bg-white rounded-2xl p-5 ${goToClassId ? 'cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150' : ''}"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);"
      ${goToClassId ? `onclick="window._goToActiveClass(${goToClassId})"` : ''}>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${time}</span>
        ${goToClassId ? `<span class="text-[11px] text-emerald-500 ml-auto">เข้าห้องเรียน →</span>` : ''}
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${activeEntry.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${activeEntry.linkedClasses.map(c => c.master_subjects?.subject_name ?? c.class_name).join(', ')}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${activeEntry.linkedClasses.map(c => {
              const cr = c.classroom_id ? _classroomMapGlobal[c.classroom_id] : null
              return c.class_name + (cr ? ` · 📍${cr.building} ห้อง ${cr.room_number}` : '')
            }).join(' · ')}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${_activeRemainingDisplay(activeEntry.actualEndPeriod?.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`
    })() : ''}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${_DAYS_TH_FULL[todayDow]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'2-digit'})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${schedule.length === 0
          ? `<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>`
          : links.length === 0
            ? `<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>`
            : ''}
      </div>
      ${todayEntries.length === 0 ? `
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${schedule.length === 0
            ? 'สร้างตารางสอนเพื่อดูข้อมูลที่นี่'
            : links.length === 0
              ? 'เชื่อมโยงห้องเรียนกับตารางสอน'
              : 'ไม่มีคาบสอนวันนี้'}</p>
          ${schedule.length === 0
            ? `<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`
            : links.length === 0
              ? `<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`
              : ''}
        </div>` : `
        <div class="space-y-2">
          ${sortedTodayEntries.map((entry, i) => {
            const cd = _countdownInfo(entry.period?.start_time, entry.actualEndPeriod?.end_time)
            const isDone = cd.label.startsWith('เสร็จ')
            const time = entry.period
              ? `${entry.period.start_time.substring(0,5)}–${(entry.actualEndPeriod ?? entry.period).end_time.substring(0,5)}`
              : `คาบ ${entry.period_no}`
            return `
            <div class="flex items-center gap-3 p-3 rounded-xl ${isDone ? 'bg-gray-50 opacity-60' : 'bg-gray-50'} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${isDone ? 'bg-gray-100' : 'bg-indigo-100'} flex items-center justify-center text-sm font-bold ${isDone ? 'text-gray-400' : 'text-indigo-600'} flex-shrink-0">
                ${entry.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${isDone ? 'text-gray-400' : 'text-gray-700'} truncate">
                  ${entry.linkedClasses.map(c => c.master_subjects?.subject_name ?? c.class_name).join(', ')}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${entry.linkedClasses.map(c => {
                    const cr = c.classroom_id ? _classroomMapGlobal[c.classroom_id] : null
                    return c.class_name + (cr ? ` 📍${cr.building} ห้อง ${cr.room_number}` : '')
                  }).join(' · ')} · ${time}
                </p>
              </div>
              <span id="today-cd-${i}" class="text-xs font-medium flex-shrink-0 ${cd.cls}">${cd.label}</span>
            </div>`
          }).join('')}
        </div>`}
    </div>

    <!-- โควตาห้องเรียน -->
    <div class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-semibold text-gray-700">🎯 โควตาห้องเรียน</h4>
        <span class="text-sm font-bold ${quotaColor}">${quotaLabel}</span>
      </div>
      ${!hasSemester ? `
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-2">
        <div class="bg-${usedSlots >= classLimit ? 'red' : 'emerald'}-500 h-2.5 rounded-full transition-all"
          style="width:${Math.min(100, (usedSlots/classLimit)*100)}%"></div>
      </div>
      <div class="flex justify-between text-xs text-gray-400 mb-3">
        <span>ใช้แล้ว ${usedSlots} ห้อง</span>
        <span>${paidRoomCount > 0 ? `สิทธิ์รวม ${classLimit} ห้อง` : `ฟรี ${FREE_LIMIT} ห้อง`}</span>
      </div>
      ${usedSlots >= classLimit ? `
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
        <p class="text-xs text-amber-700 font-medium">🔒 ครบโควตาแล้ว — เลือกแพ็กเกจเพื่อเพิ่มห้องเรียนต่อ</p>
        <div class="grid grid-cols-2 gap-2">
          <div class="bg-white rounded-xl p-3 border border-amber-200 text-center">
            <p class="text-xs text-gray-500 mb-1">รายห้อง</p>
            <p class="text-lg font-extrabold text-indigo-600">${parseInt(cfg.pricePerClass ?? 49)} <span class="text-xs font-normal text-gray-400">บ./ห้อง</span></p>
            <p class="text-[10px] text-gray-400">เพิ่มทีละห้อง</p>
          </div>
          <div class="bg-white rounded-xl p-3 border border-emerald-300 text-center relative">
            <span class="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[9px] px-2 py-0.5 rounded-full">แนะนำ</span>
            <p class="text-xs text-gray-500 mb-1">เหมาทั้งเทอม</p>
            <p class="text-lg font-extrabold text-emerald-600">${parseInt(cfg.priceSemester ?? 299)} <span class="text-xs font-normal text-gray-400">บ./เทอม</span></p>
            <p class="text-[10px] text-gray-400">ไม่จำกัดห้อง</p>
          </div>
        </div>
        <button id="btn-upgrade-overview"
          class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
          🚀 ดูแพ็กเกจและชำระเงิน
        </button>
        <button onclick="window._openStandaloneCopyFlow?.()"
          class="w-full py-2.5 rounded-xl border border-amber-200 bg-white text-amber-700 text-sm font-semibold hover:bg-amber-50 transition">
          🔗 ทำสำเนาไฟล์ ปพ.5 ใช้งานฟรี
        </button>
      </div>` : `
      <p class="text-xs text-gray-400">เหลืออีก <b class="text-emerald-600">${freeLeft} ห้อง</b> ก่อนต้องอัปเกรด</p>`}
      ` : `
      <p class="text-sm text-emerald-600">✅ แพ็กเกจ${packageText}</p>
      `}
    </div>
    <!-- Homeroom role buttons -->
    ${homeroomRooms.length > 0 ? `
    <div class="mt-5 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <h4 class="font-semibold text-gray-700 mb-3">🏠 ห้องที่ปรึกษาของฉัน</h4>
      <div class="flex flex-wrap gap-3">
        ${homeroomRooms.map(r => `
        <div class="border border-gray-100 rounded-xl p-3 flex-1 min-w-40">
          <p class="font-bold text-gray-800">${r.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${r.category==='สามัญ'?'bg-blue-50 text-blue-700':'bg-amber-50 text-amber-700'}">${r.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${r.category === 'สามัญ' ? `
            <button onclick="window._openLifeSkillScore('${r.main_room}')"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>` : `
            <button onclick="window._openReligionScore('${r.main_room}')"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${r.main_room}')"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join('')}
      </div>
    </div>` : ''}
    <!-- ภาษาไทย → อ่านคิดวิเคราะห์ (ปุ่มเดียว + popup เลือกห้อง) -->
    ${teacher?.dept === 'THAI' ? (() => {
      const readingRooms = [...new Set(classes.map(c => c.class_name).filter(Boolean))].sort()
      const roomsJson = JSON.stringify(readingRooms).replace(/"/g, '&quot;')
      return `
    <div onclick="window._openReadingScorePicker('${roomsJson}')"
      class="mt-4 bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-4
             cursor-pointer hover:shadow-md hover:border-indigo-300 hover:bg-indigo-50/30 transition group">
      <div class="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl flex-shrink-0">📖</div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-gray-800 text-sm">บันทึกคะแนนอ่านคิดวิเคราะห์และเขียน</p>
        <p class="text-xs text-gray-400 mt-0.5">${readingRooms.length > 0 ? `${readingRooms.length} ห้อง — คลิกเพื่อเลือกห้อง` : 'ยังไม่มีห้องเรียน'}</p>
      </div>
      <span class="text-gray-300 group-hover:text-indigo-400 transition text-lg">→</span>
    </div>`
    })() : ''}
    ${subjects.length > 0 ? `
    <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <h4 class="font-semibold text-gray-700 mb-3">คอร์สวิชาล่าสุด</h4>
      <div class="space-y-2">
        ${subjects.slice(0,5).map(s=>`
        <div class="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
          <span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700 font-mono">${s.subject_code??'—'}</span>
          <span class="font-medium text-gray-800 text-sm">${s.subject_name}</span>
          <span class="ml-auto text-xs text-gray-400">${s.grade_level??'—'}</span>
        </div>`).join('')}
      </div>
    </div>` : ''}
  </div>`)

  // ผูกปุ่มอัปเกรดในภาพรวม → เปิด quota popup
  document.getElementById('btn-upgrade-overview')?.addEventListener('click', () => {
    window._showQuotaFromOverview?.()
  })

  // donor sticker → features popup
  document.getElementById('donor-sticker-btn')?.addEventListener('click', () => {
    if (!donorTier) return
    const features = _parseFeatures()
    const hex   = donorTier.color || '#f59e0b'
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
    const s = String(donorTier.sticker ?? '')
    const stickerEl = /^https?:\/\//.test(s)
      ? `<img src="${s}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`
      : `<div class="text-6xl text-center mb-2">${s}</div>`
    const pop = document.createElement('div')
    pop.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
    pop.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${r},${g},${b},0.85),rgba(${r},${g},${b},1))">
          ${stickerEl}
          <p class="text-white font-bold text-base">${donorTier.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${donorTier.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${features.map(f => {
              const unlocked = donorTierIndex >= (f.minTier ?? 1)
              return unlocked
                ? `<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${f.icon}</span>
                     <span class="leading-snug">${f.text}</span>
                   </div>`
                : `<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${f.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${f.minTier}+</span>
                   </div>`
            }).join('')}
          </div>
          ${donorTierIndex < 4 ? `
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>` : ''}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${r},${g},${b},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`
    document.body.appendChild(pop)
    pop.addEventListener('click', e => { if (e.target === pop) pop.remove() })
  })

  // countdown list อัปเดตทุก 30 วิ
  if (todayEntries.length > 0) {
    _todayWidgetTimer = setInterval(() => {
      sortedTodayEntries.forEach((entry, i) => {
        const el = document.getElementById(`today-cd-${i}`)
        if (!el) { clearInterval(_todayWidgetTimer); return }
        const cd = _countdownInfo(entry.period?.start_time, entry.actualEndPeriod?.end_time)
        el.textContent = cd.label
        el.className = `text-xs font-medium flex-shrink-0 ${cd.cls}`
      })
    }, 30000)
  }

  // active class countdown อัปเดตทุก 1 วินาที (แสดงวินาที)
  if (activeEntry) {
    _activeSecTimer = setInterval(() => {
      const cdEl = document.getElementById('active-class-countdown')
      if (!cdEl) { clearInterval(_activeSecTimer); return }
      const cd = _countdownInfo(activeEntry.period?.start_time, activeEntry.actualEndPeriod?.end_time)
      if (cd.label.startsWith('เสร็จ')) {
        clearInterval(_activeSecTimer)
        document.getElementById('active-class-card')?.remove()
      } else {
        cdEl.textContent = _activeRemainingDisplay(activeEntry.actualEndPeriod?.end_time)
      }
    }, 1000)
  }

  // live clock ในหัว widget วันนี้
  const _tcEl = document.getElementById('teacher-live-clock')
  if (_tcEl) {
    const _tick = () => {
      const t = new Date()
      const el = document.getElementById('teacher-live-clock')
      if (!el) { clearInterval(_teacherClockTimer); return }
      el.textContent = `${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}:${String(t.getSeconds()).padStart(2,'0')}`
    }
    _tick()
    _teacherClockTimer = setInterval(_tick, 1000)
  }

  // การ์ดเวรวันนี้ — รีเฟรชทุก 30 วิ เพื่ออัปเดตการนับถอยหลัง/ไฮไลต์จุดที่ถึงเวลา
  if (teacher && todayDuty.length) {
    _dutyWidgetTimer = setInterval(() => {
      const el = document.getElementById('wen-duty-card')
      if (!el) { clearInterval(_dutyWidgetTimer); _dutyWidgetTimer = null; return }
      el.innerHTML = _renderWenDutyCard(todayDuty, teacher.teacher_code, dutyGrade)
    }, 30000)
  }

  // การ์ดกิจกรรมใกล้ถึง — รีเฟรชทุก 1 วิ เพื่อนับถอยหลังวินาทีแบบสด
  if (teacher && workCalEvents.length) {
    _workCalWidgetTimer = setInterval(() => {
      const el = document.getElementById('wcal-upcoming-card')
      if (!el) { clearInterval(_workCalWidgetTimer); _workCalWidgetTimer = null; return }
      el.innerHTML = _renderWorkCalendarUpcoming(workCalEvents, cfg.semester_start)
    }, 1000)
  }

  // ปุ่มแจ้งไซซ์เสื้อกีฬาสีของครู — inject แยกจาก template หลักด้านบน (ไม่แตะโครงสร้าง setContent เดิม)
  // เพราะฟังก์ชันนี้ใหญ่/เปราะบางเกินกว่าจะแทรกเข้าไปในเทมเพลตตรงๆ อย่างปลอดภัย
  if (teacher) {
    import('./sports-portals.js?v=10.22.419').then(m => m.injectTeacherShirtButton?.(teacher)).catch(() => {})
  }
}

// ─── Lesson Plan Approval Document ───────────────────────────────────────────

export function _openLessonPlanApproval(subject, classesForSubject, teacher, cfg, depts) {
  const win = window.open('', '_blank')
  if (!win) { showToast('เบราว์เซอร์บล็อก popup กรุณาอนุญาต popup ก่อน', 'warning'); return }
  win.document.write('<p style="font-family:sans-serif;padding:24px">กำลังสร้างเอกสาร...</p>')

  const rawLogoUrl = cfg.samaiLogoBwUrl ?? cfg.samaiLogoUrl ?? ''

  const credit      = Number(subject.credit ?? 1)
  const hrsPerWeek  = credit * 2
  const totalHrs    = credit * 2 * 20
  const gradeRaw    = String(subject.grade_level ?? '')
  const gradeNum    = gradeRaw.replace(/[^0-9]/g, '')  // "ม.5" → "5"

  const isReligion  = ['AGM','AGMVOC'].includes(subject.subject_group ?? '')
  const gradeLbl    = isReligion ? `อิสลามศึกษาปีที่ ${gradeNum}` : `มัธยมศึกษาปีที่ ${gradeNum}`

  const dept        = depts.find(d => d.dept_code === subject.dept) ?? {}
  const deptName    = dept.dept_name ?? subject.dept ?? ''
  const deptHead    = dept.head_name ?? ''
  const deptHeadSign= dept.head_sign_url ?? ''

  const schoolName  = cfg.samaiSchoolName ?? ''
  const dirName     = cfg.samaiDirectorName ?? ''
  const dirSign     = cfg.samaiDirectorSignUrl ?? ''
  const acadName    = isReligion ? (cfg.agmAcademicHeadName ?? cfg.samaiAcademicHeadName ?? '') : (cfg.samaiAcademicHeadName ?? '')

  const today       = new Date()
  const thMonths    = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
  const dateStr     = `${today.getDate()} ${thMonths[today.getMonth()]} พ.ศ. ${today.getFullYear() + 543}`
  const acYear      = (cfg.academicYear ?? (today.getFullYear() + 543))
  const sem         = cfg.semester ?? 1

  const posStr      = teacher?.category === 'ศาสนา' ? 'ครูศาสนา' : 'ครูสามัญ'
  const roomNames   = classesForSubject.map(c => c.class_name).join(', ')

  // ระดับชั้น + ห้องเรียน
  const gradeField  = gradeNum + (roomNames ? ' ' + roomNames : '')
  // ตำแหน่งหัวหน้าวิชาการตามประเภท
  const acadRoleStr = isReligion ? 'หัวหน้าฝ่ายวิชาการศาสนา' : 'หัวหน้าฝ่ายวิชาการสามัญ'

  const html = `<!DOCTYPE html>
<html lang="th"><head><meta charset="UTF-8"/>
<title>ใบขออนุญาตใช้แผนการจัดการเรียนรู้</title>
<style>
  @page { size:A4; margin:0; }
  * { box-sizing:border-box; }
  body { margin:0; background:#ddd; }
  .page { width:794px; height:1123px; background:#fff; margin:0 auto; position:relative; overflow:hidden;
    color:#000; font-family:"TH SarabunPSK","TH Sarabun New","Sarabun",sans-serif;
    font-size:22px; line-height:1; }
  @media print { body { background:#fff; } .page { margin:0; } .no-print { display:none; } }
  .t  { position:absolute; white-space:nowrap; }
  .b  { font-weight:700; }
  .title { position:absolute; top:102px; left:0; width:794px; text-align:center; font-size:26px; font-weight:700; }
  .logo { position:absolute; left:58px; top:83px; width:66px; height:66px;
    border-radius:50%; font-size:13px; display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .line { position:absolute; border-bottom:1.2px dotted #111; height:23px; }
  .fill { position:absolute; border-bottom:1.2px dotted #111; height:23px; color:#064ec7;
    text-align:center; outline:none; overflow:hidden; white-space:nowrap; padding:0 4px; }
  .comment-line { position:absolute; left:58px; width:677px; border-bottom:2px dotted #111; height:1px; }
  .check { position:absolute; width:24px; height:24px; border:3px solid #999; border-radius:3px; }
  .center { text-align:center; }
  .small  { font-size:21px; }
  .print-btn { position:fixed; bottom:24px; right:24px; padding:12px 28px; background:#1d4ed8;
    color:#fff; border:none; border-radius:10px; font-size:15px; cursor:pointer; font-family:inherit; z-index:999; }
</style></head><body>
<button class="print-btn no-print" onclick="window.print()">🖨️ พิมพ์ / บันทึก PDF</button>
<div class="page">

  <div class="logo">
    ${rawLogoUrl
      ? `<img src="${rawLogoUrl}" style="width:72px;height:72px;object-fit:contain;" onerror="this.style.display='none'"/>`
      : '<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${_htmlEsc(schoolName)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${_htmlEsc(dateStr)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${sem} ปีการศึกษา ${acYear}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${_htmlEsc(schoolName)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${_htmlEsc(teacher?.full_name ?? '')}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${_htmlEsc(posStr)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${_htmlEsc(deptName)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${_htmlEsc(subject.subject_name ?? '')}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${_htmlEsc(subject.subject_code ?? '')}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${credit}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${hrsPerWeek}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${totalHrs}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${isReligion ? 'อิสลามศึกษา' : 'มัธยมศึกษา'}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${_htmlEsc(gradeField)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${_htmlEsc(teacher?.full_name ?? '')}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${deptHeadSign ? `<img src="${_htmlEsc(deptHeadSign)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>` : ''}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${_htmlEsc(deptHead)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${_htmlEsc(deptName)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${_htmlEsc(acadName)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${_htmlEsc(acadRoleStr)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${dirSign ? `<img src="${_htmlEsc(dirSign)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>` : ''}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${_htmlEsc(dirName)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${_htmlEsc(schoolName)}</div>

</div>
</body></html>`

  win.document.open()
  win.document.write(html)
  win.document.close()
}

// ─── View: My Courses ─────────────────────────────────────────────────────────

export { renderMyCourses, renderCourseForm, renderProfileSetup, renderProfile, openCourseDocPage2Modal } from './teacher-views-courses.js'
export { renderMyClasses, renderClassDetail, renderSchedule, renderScheduleGrid, renderScheduleBuilder, renderCourseDocLangConfig, renderAnnouncementsView } from './teacher-views-classes.js'
export { renderExamDocuments } from './teacher-views-exam-docs.js'
export { renderAttendanceGrid, renderAttendance, renderLifeSkillScore, renderReadingScore, renderPrayerScore, renderPrayerRoomMonitor } from './teacher-views-attendance.js'
export { renderGrades, renderGradesGrid, renderRequests } from './teacher-views-grades.js'
