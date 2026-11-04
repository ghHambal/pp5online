import { isRegradeMenuOpen, regradeCountdownDeadlineMs } from './regrade-menu-window.js'

const shownInMemory = new Set()

const STANDARD_SUBJECT_DEPARTMENTS = {
  'ว': 'SC', 'อ': 'ENG', 'จ': 'ENG', 'ค': 'MATH', 'ท': 'THAI',
  'ส': 'SOC', 'ง': 'OCC', 'ศ': 'ART', 'พ': 'HEALTH',
}
const RELIGION_SUBJECT_DEPARTMENTS = [
  ['ภม', 'MLB'], ['ภอ', 'ARB'], ['ศอ', 'ISL'], ['สจ', 'SOC'],
]

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch])
}

function deadlineValue(value) {
  const raw = String(value ?? '').trim()
  if (!raw) return null
  const time = new Date(raw).getTime()
  return Number.isFinite(time) ? time : null
}

function deadlineLabel(value) {
  const raw = String(value ?? '').trim()
  const time = deadlineValue(raw)
  if (time === null) return 'ยังไม่ได้กำหนดวันสิ้นสุด'
  const date = new Date(time)
  const dateText = date.toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
  return /^\d{4}-\d{2}-\d{2}$/.test(raw)
    ? `ภายในวันที่ ${dateText}`
    : `ภายในวันที่ ${dateText} เวลา ${date.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น.`
}

function countdownText(deadline, now = Date.now()) {
  const remaining = deadline - now
  if (remaining <= 0) return 'หมดเขตแล้ว'
  const minutes = Math.floor(remaining / 60_000)
  return `เหลือ ${Math.floor(minutes / 1440)} วัน ${Math.floor((minutes % 1440) / 60)} ชั่วโมง ${minutes % 60} นาที`
}

export function regradeHeadNameForSubject(subject, departments = []) {
  const code = String(subject?.subject_code ?? '').trim()
  let deptCode = ''
  if (subject?.category === 'สามัญ') {
    deptCode = STANDARD_SUBJECT_DEPARTMENTS[code.charAt(0)] || ''
  } else if (subject?.category === 'ศาสนา') {
    deptCode = RELIGION_SUBJECT_DEPARTMENTS.find(([prefix]) => code.startsWith(prefix))?.[1] || ''
  } else if (subject?.category === 'สามัญปวช') {
    deptCode = 'VOC'
  }
  if (!deptCode) return ''

  const heads = [...new Set((departments ?? [])
    .filter(row => row.dept_code === deptCode && row.category === subject?.category)
    .map(row => String(row.head_name ?? '').trim())
    .filter(Boolean))]
  // แสดงชื่อเฉพาะเมื่อข้อมูลระบุคนเดียวได้แน่ชัด เพื่อไม่ชี้นักเรียนไปผิดคน
  return heads.length === 1 ? heads[0] : ''
}

function deadlineBlock(config, key, label) {
  const value = String(key === 'regrade_menu_end_at'
    ? (config?.regrade_menu_end_at ?? '')
    : (config?.[key] ?? '')).trim()
  const deadline = deadlineValue(value)
  const startKey = key === 'intent_window_end' ? 'intent_window_start' : key === 'response_window_end' ? 'response_window_start' : null
  const startValue = startKey ? String(config?.[startKey] ?? '').trim() : ''
  return `<div class="mt-3 rounded-xl border border-white/50 bg-white/70 px-3 py-2">
    ${startValue ? `<p class="text-[11px]">เริ่มตั้งแต่ ${esc(deadlineLabel(startValue).replace(/^ภายในวันที่ /, ''))}</p>` : ''}
    <p class="text-[11px] font-bold">${label}: ${esc(deadlineLabel(value))}</p>
    ${deadline !== null ? `<p data-regrade-notice-countdown data-deadline-ms="${deadline}" class="mt-0.5 text-xs font-extrabold">${esc(countdownText(deadline))}</p>` : ''}
  </div>`
}

export function showRegradeOverviewPopup(config, audience, {
  rows = [], departments = [], pendingCount = 0, forceOpen = false, student = null,
  loginKey = '',
} = {}) {
  if (!['student', 'teacher'].includes(audience) || config?.overview_notice?.[audience] === false || typeof document === 'undefined') return false
  const storageKey = `pp5_regrade_popup_seen_${audience}_${String(loginKey || 'current-session').replace(/[^a-zA-Z0-9_-]/g, '_')}`
  if (shownInMemory.has(storageKey)) return false
  try { if (sessionStorage.getItem(storageKey) === '1') return false } catch {}
  if (document.getElementById('regrade-overview-popup')) return false

  const teacherAudience = audience === 'teacher'
  let title, message, detail = ''
  if (teacherAudience) {
    title = '📋 กำหนดการตอบรับคำร้องแก้ค้างเก่า'
    message = Number(pendingCount) > 0
      ? `มีคำร้องรอการตอบรับ ${Number(pendingCount)} รายการ กรุณารีบตรวจสอบและนัดสอบปรับหรือมอบหมายงานแก้ให้ทันกำหนด`
      : 'โปรดติดตามคำร้องใหม่ของนักเรียน และดำเนินการตอบรับภายในช่วงเวลาที่กำหนด'
    detail = deadlineBlock(config, deadlineValue(config?.response_window_end) === null ? 'regrade_menu_end_at' : 'response_window_end', deadlineValue(config?.response_window_end) === null ? 'กำหนดปิดเมนูระบบ' : 'กำหนดตอบรับให้เสร็จ')
  } else {
    const unassigned = rows.filter(row => row.status === 'ยังไม่แจ้ง' && row.teacher_id == null)
    const toDeclare = rows.filter(row => row.status === 'ยังไม่แจ้ง' && row.teacher_id != null)
    const awaiting = rows.filter(row => row.status === 'จำนงแล้ว')
    const assigned = rows.filter(row => row.status === 'กำลังดำเนินการปรับแก้')
    const levels = Array.isArray(config?.intent_open_levels) ? config.intent_open_levels : []
    const roomFor = category => category === 'ศาสนา' ? student?.religion_room : student?.main_room
    const eligibleToDeclare = toDeclare.filter(row => {
      if (!levels.length) return true
      const level = String(roomFor(row.category) ?? '').split('/')[0].trim()
      return !!level && levels.includes(`${row.category}|${level}`)
    })
    title = '📝 ติดตามกำหนดการแก้ค้างเก่าของคุณ'
    const reminders = []
    if (unassigned.length) {
      const namedHeads = [...new Set(unassigned.map(row => regradeHeadNameForSubject(row, departments)).filter(Boolean))]
      reminders.push(`${unassigned.length} วิชายังไม่มีครูผู้สอน โปรดรอการมอบหมาย หรือติดต่อหัวหน้ากลุ่มสาระ${namedHeads.length === 1 ? ` ${namedHeads[0]}` : ''} ให้ช่วยมอบหมายครู`)
    }
    if (eligibleToDeclare.length && config?.intent_open === true) reminders.push(`มี ${eligibleToDeclare.length} วิชาที่เปิดรับแจ้งความจำนง โปรดรีบแจ้งก่อนหมดเขต`)
    else if (toDeclare.length) reminders.push(`ยังมี ${toDeclare.length} วิชาที่ยังไม่แจ้ง โปรดติดตามประกาศเมื่อเปิดรับและรีบดำเนินการ`)
    if (awaiting.length) reminders.push(`แจ้งความจำนงแล้ว ${awaiting.length} วิชา โปรดติดตามการตอบรับจากครูผู้สอน`)
    if (assigned.length) reminders.push(`ครูตอบรับแล้ว ${assigned.length} วิชา โปรดเปิดดูงานหรือวันนัด และรีบดำเนินการก่อนกำหนดส่ง`)
    message = reminders.length ? reminders.join(' · ') : 'ตรวจสอบรายวิชาค้างและติดตามกำหนดการในระบบเป็นระยะ'
    detail = deadlineBlock(config, deadlineValue(config?.intent_window_end) === null ? 'regrade_menu_end_at' : 'intent_window_end', deadlineValue(config?.intent_window_end) === null ? 'กำหนดปิดเมนูระบบ' : 'กำหนดแจ้งความจำนง')
  }

  const canOpen = forceOpen || isRegradeMenuOpen(config, audience)
  const deadline = regradeCountdownDeadlineMs(config, audience)
  shownInMemory.add(storageKey)
  try { sessionStorage.setItem(storageKey, '1') } catch {}
  const modal = document.createElement('div')
  modal.id = 'regrade-overview-popup'
  modal.className = 'fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/65 backdrop-blur-sm p-4'
  modal.setAttribute('role', 'presentation')
  modal.innerHTML = `<section role="dialog" aria-modal="true" aria-labelledby="regrade-overview-popup-title" class="w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-3xl border ${teacherAudience ? 'border-violet-200 bg-gradient-to-br from-violet-50 to-white text-violet-950' : 'border-amber-200 bg-gradient-to-br from-amber-50 to-white text-amber-950'} p-5 shadow-2xl">
    <div class="flex items-start gap-3">
      <span class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">${teacherAudience ? '⏰' : '🔔'}</span>
      <div class="min-w-0 flex-1">
        <h2 id="regrade-overview-popup-title" class="text-base font-extrabold">${title}</h2>
        <p class="mt-2 text-sm leading-relaxed">${esc(message)}</p>
      </div>
      <button type="button" data-regrade-popup-close aria-label="ปิด" class="rounded-full px-2 py-1 text-xl text-slate-500 hover:bg-white/80">×</button>
    </div>
    ${detail}
    <div class="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
      <button type="button" data-regrade-popup-close class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">ปิด</button>
      ${canOpen ? `<a href="regrade.html" class="rounded-xl bg-gradient-to-r ${teacherAudience ? 'from-violet-700 to-indigo-700' : 'from-amber-600 to-orange-600'} px-4 py-3 text-center text-sm font-extrabold text-white shadow-md">เปิดระบบแก้ค้างเก่า →</a>` : ''}
    </div>
  </section>`
  document.body.append(modal)
  const onKeydown = event => {
    if (event.key === 'Escape' && document.getElementById(modal.id)) {
      close()
    }
  }
  const close = () => {
    modal.remove()
    document.removeEventListener('keydown', onKeydown)
    if (window._regradeNoticeCountdownTimer) {
      clearInterval(window._regradeNoticeCountdownTimer)
      window._regradeNoticeCountdownTimer = null
    }
  }
  modal.querySelectorAll('[data-regrade-popup-close]').forEach(button => button.addEventListener('click', close))
  modal.addEventListener('click', event => { if (event.target === modal) close() })
  document.addEventListener('keydown', onKeydown)
  modal.querySelector('[data-regrade-popup-close]')?.focus()
  if (deadline !== null) {
    const node = modal.querySelector('[data-regrade-notice-countdown]')
    if (node) node.dataset.deadlineMs = String(deadline)
  }
  startRegradeNoticeCountdowns()
  return true
}

export function startRegradeNoticeCountdowns() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (window._regradeNoticeCountdownTimer) clearInterval(window._regradeNoticeCountdownTimer)
  const update = () => document.querySelectorAll('[data-regrade-notice-countdown]').forEach(node => {
    const deadline = Number(node.dataset.deadlineMs)
    if (Number.isFinite(deadline)) node.textContent = countdownText(deadline)
  })
  update()
  window._regradeNoticeCountdownTimer = setInterval(update, 30_000)
}
