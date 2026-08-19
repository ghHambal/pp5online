// js/teacher-views-smart-classroom.js — 👑 Smart Classroom (เฉพาะโดเนทระดับ 4+)
// หน้าควบคุมขณะสอนสด รวมเครื่องมือที่มีอยู่แล้วในระบบไว้จอเดียว — ไม่มีการเขียน logic ใหม่ซ้ำซ้อน
// ทุกปุ่มเรียกฟังก์ชัน/โมดัลจริงของระบบเดิม: _openAttendanceModalForSession, openTimerModal, _openRandomPickerModal,
// _openLeaveRequestModal/_openLeaveQuotaModal (hall pass), startQuizLive, openScoreScanner, openAttendanceScanSetup
import {
  getMyClasses, getClassStudents, getSystemConfig, getClassSessionDOWs,
  getActiveLeavePermissionsForClass, getLeaveMaxActiveForClass, getLeaveMaxPerStudentWeekForClass,
  closeLeavePermission, getMyDonationRequests, createAnnouncement, getClassAnnouncements,
  getScoreColumns, getStudentScores, saveStudentScore, getClassAttendanceAllFull, getClassLeaveHistory,
  getClassAssignmentsWithSubmissions, createAssignment, updateAssignment, deleteAssignment, saveAssignmentGrade,
  saveAssignmentFeedback, markAssignmentSubmissionReviewed, rejectAssignmentSubmission,
  getTeacherExamRequests, getMySchedule, getClassScheduleLinks, getPeriods,
  getCourseSyllabus, createSyllabusItem, updateSyllabusItem, deleteSyllabusItem,
  getLessonPlans, createLessonPlan, updateLessonPlan, deleteLessonPlan,
  getLessonPlanReflection, upsertLessonPlanReflection, getAnnouncementTypeSuggestions,
  setSmartClassroomFreeClass,
} from './api.js'
import { _toPositiveInt, _parseDonationStickers, _getDonorTierIndex } from './teacher.js'
import { getQuizzesForClass, startQuizLive, closeQuiz, getQuizAttemptsForMonitor, rpcUnlockAttempt } from './quiz-api.js'
import { openScoreScanner } from './score-qr-scanner.js'
import {
  openAttendanceScanSetup, _openLeaveRequestModal, _openLeaveQuotaModal,
  _openAttendanceModalForSession,
} from './teacher-views-attendance.js'
import { openQuizMonitor } from './teacher-views-quiz-monitor.js'
import { openQuizAnalytics } from './teacher-views-quiz-analytics.js'
import { openClassDashboard } from './teacher-views-dashboard.js'
import { openTimerModal } from './timer-overlay.js'
import { _openRandomPickerModal, renderClassDetail } from './teacher-views-classes.js'
import { showToast } from './ui.js'
import { uploadAssignmentFile } from './storage.js'
import { setContent, setTitle, setActiveNav, _htmlEsc, _generateSessions, _dateInputValue, ATT_STATUS, _currentWeek } from './teacher-views-utils.js'
import { supabase } from './supabase.js'
import { publishGradebookUpdate } from './gradebook-sync.js'

// ─── Tier gate ──────────────────────────────────────────────────────────────
// ใช้ pattern เดียวกับ _dashboardMinTier ใน teacher-views-dashboard.js — อ่านจาก
// system_config key เดียวกัน (donationSpecialFeatures รูปแบบ "icon|text|minTier" ต่อบรรทัด)
// ถ้าแอดมินยังไม่ได้ตั้งค่าบรรทัดที่มีคำว่า "Smart Classroom" จะ default เป็นระดับ 4
function _smartClassroomMinTier(cfg) {
  return String(cfg?.donationSpecialFeatures ?? '').split('\n')
    .map(line => { const p = line.split('|'); return { text: p[1] ?? '', minTier: parseInt(p[2]) || 1 } })
    .find(f => f.text.includes('Smart Classroom'))?.minTier ?? 4
}
// ตรวจสิทธิ์ Smart Classroom โดยดึงระดับโดเนทสดจาก DB ทุกครั้ง — ตั้งใจไม่พึ่ง
// window._pp5DonorTierIndex/_pp5SystemCfg เพราะเป็นค่าที่ _initDonationFlow (teacher.js)
// ตั้งแบบ fire-and-forget ไม่มีจุดไหน await คอยแน่นอนก่อนหน้านี้ — ยืนยันด้วย debug จริงแล้วว่า
// ค่า global ยังเป็นค่าเริ่มต้น (tier=0, cfg={}) ได้แม้ init() หน้าอื่นจะรันไปไกลแล้วก็ตาม
// (เช่น ตอนคลิกจากการ์ดห้องเรียนหลังนำทางไปมาหลายหน้า) ในขณะที่ query สดตรงๆ ถูกต้องเสมอ
async function _resolveSmartClassroomAccess(teacher) {
  const cfg = await getSystemConfig().catch(() => window._pp5SystemCfg ?? {})
  const minTier = _smartClassroomMinTier(cfg)
  let tierIndex = window._pp5DonorTierIndex ?? 0
  if (teacher?.id) {
    try {
      const requests = await getMyDonationRequests(teacher.id)
      const totalApproved = requests
        .filter(r => r.package_type === 'donation' && r.status === 'approved')
        .reduce((sum, r) => sum + (r.amount ?? 0), 0)
      const minAmt = _toPositiveInt(cfg.donationMinAmount, 49)
      const step   = _toPositiveInt(cfg.donationAmountStep, 50)
      const tiers  = _parseDonationStickers(cfg, minAmt, step)
      tierIndex = _getDonorTierIndex(cfg, tiers, totalApproved)
    } catch { /* query สดล้มเหลว — ใช้ค่า global เดิมเป็น fallback สุดท้าย */ }
  }
  return { cfg, minTier, unlocked: tierIndex >= minTier }
}

// ─── ห้องฟรี 1 ห้อง สำหรับครูที่ยังไม่ถึงระดับโดเนทที่ปลดล็อก Smart Classroom ────
function _donationTierAmount(cfg, tier) {
  const minAmt = _toPositiveInt(cfg.donationMinAmount, 49)
  const step   = _toPositiveInt(cfg.donationAmountStep, 50)
  const tiers  = _parseDonationStickers(cfg, minAmt, step)
  return tiers[tier - 1]?.amount ?? null
}

export function canUseSmartClassroomForClass(unlocked, teacher, classId) {
  if (unlocked) return true
  return teacher?.smart_classroom_free_class_id === classId
}

// ป๊อบอัพเลือกห้องที่จะใช้ฟรี — เลือกแล้วล็อกถาวร (setSmartClassroomFreeClass เช็ค null ก่อนเขียนกันแข่งกันเลือก)
async function _openFreeClassPickModal(teacher, cfg, { preselectClassId = null, onPicked } = {}) {
  document.getElementById('sc-pick-modal')?.remove()
  const classes = await getMyClasses(teacher.id).catch(() => [])
  const m = document.createElement('div')
  m.id = 'sc-pick-modal'
  m.className = 'fixed inset-0 z-[96] flex items-center justify-center bg-black/60 p-4'
  m.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
      <div class="px-6 pt-6 pb-4 flex-shrink-0 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <div class="text-4xl mb-1">🎁</div>
        <h3 class="text-white font-extrabold text-base">ใช้ Smart Classroom ฟรี 1 ห้องเรียน</h3>
        <p class="text-white/80 text-[11px] mt-1 leading-relaxed">เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด<br>หากต้องการเปลี่ยนห้องภายหลังต้องติดต่อแอดมิน</p>
      </div>
      <div class="overflow-y-auto flex-1 p-4 space-y-2">
        ${!classes.length ? `<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>` : classes.map(c => `
          <label class="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition hover:border-amber-300 ${c.id === preselectClassId ? 'border-amber-400 bg-amber-50' : 'border-gray-200'}">
            <input type="radio" name="sc-pick-class" value="${c.id}" class="w-4 h-4" ${c.id === preselectClassId ? 'checked' : ''} />
            <span class="text-sm font-semibold text-gray-700">${_htmlEsc(c.class_name)}</span>
          </label>`).join('')}
      </div>
      <div class="p-4 flex-shrink-0 border-t border-gray-100">
        <button id="sc-pick-confirm" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)" ${!classes.length ? 'disabled' : ''}>✅ ยืนยันใช้ห้องนี้</button>
        <button id="sc-pick-cancel" class="w-full py-2 mt-1.5 text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('#sc-pick-cancel').addEventListener('click', () => m.remove())
  m.querySelector('#sc-pick-confirm').addEventListener('click', async () => {
    const picked = m.querySelector('input[name="sc-pick-class"]:checked')
    if (!picked) { showToast('กรุณาเลือกห้องเรียน', 'warning'); return }
    const classId = parseInt(picked.value)
    const btn = m.querySelector('#sc-pick-confirm')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const result = await setSmartClassroomFreeClass(teacher.id, classId)
      if (!result) { showToast('มีการเลือกห้องไปแล้วก่อนหน้านี้ กรุณาลองใหม่', 'error'); m.remove(); return }
      teacher.smart_classroom_free_class_id = classId
      m.remove()
      showToast('เลือกห้องฟรีสำเร็จ ✅', 'success')
      onPicked?.(classId)
    } catch (e) {
      showToast('บันทึกไม่สำเร็จ: ' + (e.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = '✅ ยืนยันใช้ห้องนี้'
    }
  })
}

function _fmtElapsed(startIso) {
  const mins = Math.max(0, Math.floor((Date.now() - new Date(startIso).getTime()) / 60000))
  return mins < 1 ? '<1 นาที' : `${mins} นาที`
}

const SC_SKIP_POPUP_KEY = 'pp5_sc_skip_popup'

// ─── หาห้องที่ "กำลังสอนอยู่ตอนนี้" ของครูคนนี้ ถ้าไม่มีให้หาห้องถัดไปที่ใกล้ที่สุด ──
// ใช้ตรรกะเดียวกับ _computeClassTiming ใน renderSmartClassroom แต่ไล่ทุกห้องของครู ไม่ใช่ห้องเดียว
export async function findCurrentOrNextClass(teacher) {
  const cfg = window._pp5SystemCfg ?? await getSystemConfig().catch(() => ({}))
  const academicYear = parseInt(cfg.academicYear ?? 2568)
  const semester = parseInt(cfg.semester ?? 1)
  const [classes, schedule, links, periods] = await Promise.all([
    getMyClasses(teacher.id).catch(() => []),
    getMySchedule(teacher.id, academicYear, semester).catch(() => []),
    getClassScheduleLinks(teacher.id).catch(() => []),
    getPeriods().catch(() => []),
  ])
  if (!classes.length) return { classId: null, mode: 'none' }

  const periodMap = Object.fromEntries(periods.map(p => [p.period_no, p]))
  const scheduleMap = Object.fromEntries(schedule.map(s => [s.id, s]))
  const slots = []
  for (const link of links) {
    const sched = scheduleMap[link.teacher_schedule_id]
    if (!sched) continue
    const lastPeriodNo = (sched.period_no ?? 1) + (sched.span_periods ?? 1) - 1
    slots.push({
      classId: link.class_id,
      day_of_week: sched.day_of_week,
      period: periodMap[sched.period_no],
      actualEndPeriod: periodMap[lastPeriodNo] ?? periodMap[sched.period_no],
    })
  }

  const now = new Date()
  const dow = now.getDay()
  const nowSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()

  for (const slot of slots) {
    if (slot.day_of_week !== dow || !slot.period?.start_time || !slot.actualEndPeriod?.end_time) continue
    const [sh, sm] = slot.period.start_time.split(':').map(Number)
    const [eh, em] = slot.actualEndPeriod.end_time.split(':').map(Number)
    const startSec = sh * 3600 + sm * 60
    const endSec = eh * 3600 + em * 60
    if (nowSec >= startSec && nowSec < endSec) return { classId: slot.classId, mode: 'live' }
  }

  let best = null
  for (const slot of slots) {
    if (!slot.period?.start_time) continue
    const [sh, sm] = slot.period.start_time.split(':').map(Number)
    const startSec = sh * 3600 + sm * 60
    let daysUntil = (slot.day_of_week - dow + 7) % 7
    if (daysUntil === 0 && startSec <= nowSec) daysUntil = 7
    const totalSecUntil = daysUntil * 86400 + startSec - nowSec
    if (best === null || totalSecUntil < best.totalSecUntil) best = { totalSecUntil, classId: slot.classId }
  }
  if (best) return { classId: best.classId, mode: 'upcoming' }

  // ไม่เคยผูกตารางสอนไว้เลยสักห้อง — fallback ไปห้องแรกที่มี กันเปิดไม่ได้เลย
  return { classId: classes[0]?.id ?? null, mode: 'none' }
}

// ─── หน้าอธิบายฟีเจอร์ (เปิดจากปุ่มพรีเมียมในหน้าภาพรวม) ──────────────────────────
// ครูระดับ 4+ ที่ติ๊ก "ไม่ต้องโชว์อีก" จะข้ามป๊อบอัพนี้ไปเปิดคลาสรูมอัตโนมัติทันทีในครั้งถัดไป
// ครูที่ยังไม่ถึงระดับจะเห็นป๊อบอัพนี้ทุกครั้งที่กด (ไม่มีปุ่มข้าม) พร้อมปุ่มไปหน้าสนับสนุนโครงการ
export async function openSmartClassroomLanding(teacher) {
  const { cfg, minTier, unlocked } = await _resolveSmartClassroomAccess(teacher)

  if (unlocked && localStorage.getItem(SC_SKIP_POPUP_KEY) === '1') {
    _launchAuto(teacher)
    return
  }
  if (!unlocked && teacher?.smart_classroom_free_class_id) {
    renderSmartClassroom(teacher, teacher.smart_classroom_free_class_id)
    return
  }

  document.getElementById('sc-landing-modal')?.remove()
  const title  = cfg.smartClassroomLandingTitle?.trim() || 'Smart Classroom — หน้าควบคุมขณะสอนสด'
  const desc   = cfg.smartClassroomLandingDesc?.trim() || 'ทุกวินาทีระหว่างสอนสดมีค่า — ไม่ต้องเสียเวลาสลับหน้าจอไปมาระหว่างเช็คชื่อ คุมเวลา เปิดควิซ หรือสั่งงาน อีกต่อไป Smart Classroom รวมทุกเครื่องมือที่คุณใช้บ่อยที่สุดไว้จอเดียว ให้คุณโฟกัสกับการสอนได้เต็มที่ นักเรียนก็ได้รับข่าวสารถึงมือถือทันทีโดยไม่พลาด และแผนการสอน/บันทึกหลังสอนของคุณจะถูกเก็บเป็นระบบ พร้อมให้ตรวจสอบได้ทุกเมื่อโดยไม่ต้องมานั่งรวบรวมทีหลัง'
  const images = [cfg.smartClassroomLandingImg1, cfg.smartClassroomLandingImg2, cfg.smartClassroomLandingImg3].filter(Boolean)
  const WHY_REASONS = [
    { emoji: '⏱️', text: 'ไม่ต้องสลับหน้าจอนับสิบรอบระหว่างสอน ทุกเครื่องมือรวมไว้จอเดียว' },
    { emoji: '📲', text: 'นักเรียนไม่พลาดประกาศ/งานอีกต่อไป แจ้งเตือนถึงมือถือทันทีที่กดส่ง' },
    { emoji: '📋', text: 'แผนการสอน+บันทึกหลังสอนเป็นระบบ พร้อมตรวจสอบได้ทุกเมื่อ' },
  ]
  const FEATURES = [
    '✅ เช็คชื่ออัตโนมัติ', '🚪 Hall Pass สด', '🎲 สุ่ม/จัดกลุ่ม', '🧠 เปิดควิซสด',
    '📚 สั่งงาน/ติดตามงาน', '📘 กำหนดการสอน+แผนการสอน', '🖊️ บันทึกหลังสอน+เซ็นชื่อ', '📣 ประกาศแนบไฟล์+แจ้งเตือนมือถือ',
  ]

  const m = document.createElement('div')
  m.id = 'sc-landing-modal'
  m.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4'
  m.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade">
      <div class="relative px-6 py-8 text-center" style="background:linear-gradient(135deg,#a9781a,#e6c988)">
        <button id="sl-close" class="absolute top-4 right-4 text-white/80 hover:text-white text-2xl leading-none">✕</button>
        <div class="text-5xl mb-2">👑</div>
        <h2 class="text-white font-extrabold text-xl">${_htmlEsc(title)}</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${WHY_REASONS.map(r => `
            <div class="px-3 py-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <div class="text-xl mb-1">${r.emoji}</div>
              <p class="text-[11px] font-bold text-amber-800 leading-snug">${_htmlEsc(r.text)}</p>
            </div>`).join('')}
        </div>
        <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">${_htmlEsc(desc)}</p>
        ${images.length ? `<div class="grid ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-2">${images.map(u => `<img src="${_htmlEsc(u)}" class="w-full rounded-xl border border-gray-100 object-cover" />`).join('')}</div>` : ''}
        <div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">🎁 รวมฟีเจอร์เหล่านี้ไว้ให้แล้ว</p>
          <div class="grid grid-cols-2 gap-1.5 text-[11px] text-gray-500">
            ${FEATURES.map(f => `<div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50">${f}</div>`).join('')}
          </div>
        </div>
        ${unlocked ? `
          <label class="flex items-center justify-center gap-2 text-xs text-gray-500 cursor-pointer select-none">
            <input type="checkbox" id="sl-skip" class="w-4 h-4 rounded" />
            ไม่ต้องโชว์ป๊อบอัพนี้ในครั้งหน้า — เปิดคลาสรูมที่กำลังสอนให้อัตโนมัติเลย
          </label>
          <button id="sl-start" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🚀 เริ่มใช้งาน</button>
        ` : `
          <p class="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 text-center">🎁 ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน หรือสนับสนุนระบบระดับ ${minTier} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้อง</p>
          <button id="sl-free" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
            style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 เลือกห้องที่จะใช้ฟรี</button>
          <button id="sl-donate" class="w-full py-2.5 rounded-2xl text-amber-700 font-semibold text-xs hover:bg-amber-50 transition border border-amber-200">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        `}
      </div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('#sl-close').addEventListener('click', () => m.remove())
  m.querySelector('#sl-start')?.addEventListener('click', () => {
    if (m.querySelector('#sl-skip')?.checked) localStorage.setItem(SC_SKIP_POPUP_KEY, '1')
    m.remove()
    _launchAuto(teacher)
  })
  m.querySelector('#sl-free')?.addEventListener('click', () => {
    m.remove()
    _openFreeClassPickModal(teacher, cfg, { onPicked: classId => renderSmartClassroom(teacher, classId) })
  })
  m.querySelector('#sl-donate')?.addEventListener('click', () => { m.remove(); document.getElementById('btn-donate-float')?.click() })
}

async function _launchAuto(teacher) {
  showToast('กำลังตรวจสอบตารางสอน...', 'info')
  const { classId } = await findCurrentOrNextClass(teacher)
  if (!classId) { showToast('ยังไม่มีห้องเรียน กรุณาสร้างห้องเรียนก่อนครับ', 'warning'); return }
  renderSmartClassroom(teacher, classId)
}

export async function renderSmartClassroom(teacher, classId) {
  setActiveNav('my-classes')
  setTitle('Smart Classroom')
  setContent(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const { cfg, minTier, unlocked } = await _resolveSmartClassroomAccess(teacher)

  if (!canUseSmartClassroomForClass(unlocked, teacher, classId)) {
    const freeClassId = teacher?.smart_classroom_free_class_id

    if (!freeClassId) {
      setContent(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
        <div class="text-6xl mb-4">🎁</div>
        <p class="font-bold text-gray-800 text-lg">ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียน</p>
        <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณยังไม่ได้สนับสนุนระบบระดับ ${minTier} ขึ้นไป แต่ใช้ Smart Classroom ฟรีได้ 1 ห้องเรียนครับ<br>เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด (เปลี่ยนภายหลังต้องติดต่อแอดมิน)</p>
        <button id="sc-free-confirm" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#a9781a,#e6c988)">🎁 ใช้ห้องนี้ฟรี</button>
        <div class="mt-2">
          <button id="sc-free-other" class="text-xs text-gray-400 hover:text-gray-600 underline">เลือกห้องอื่นแทน</button>
        </div>
        <div class="mt-4">
          <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
        </div>
      </div>`)
      document.getElementById('sc-free-confirm')?.addEventListener('click', async btnEvt => {
        const btn = btnEvt.currentTarget
        btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
        try {
          const result = await setSmartClassroomFreeClass(teacher.id, classId)
          if (!result) { showToast('มีการเลือกห้องไปแล้วก่อนหน้านี้', 'error'); renderSmartClassroom(teacher, classId); return }
          teacher.smart_classroom_free_class_id = classId
          showToast('เลือกห้องฟรีสำเร็จ ✅', 'success')
          renderSmartClassroom(teacher, classId)
        } catch (e) {
          showToast('บันทึกไม่สำเร็จ: ' + (e.message ?? ''), 'error')
          btn.disabled = false; btn.textContent = '🎁 ใช้ห้องนี้ฟรี'
        }
      })
      document.getElementById('sc-free-other')?.addEventListener('click', () => {
        _openFreeClassPickModal(teacher, cfg, { preselectClassId: classId, onPicked: pickedId => renderSmartClassroom(teacher, pickedId) })
      })
      document.getElementById('sc-back')?.addEventListener('click', () => renderClassDetail(teacher, classId))
      return
    }

    const myClasses = await getMyClasses(teacher.id).catch(() => [])
    const freeClassName = myClasses.find(c => c.id === freeClassId)?.class_name ?? `ห้อง #${freeClassId}`
    const tierAmount = _donationTierAmount(cfg, minTier)
    setContent(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
      <div class="text-6xl mb-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">Smart Classroom</p>
      <p class="text-sm text-gray-500 mt-2 leading-relaxed">คุณใช้สิทธิ์ฟรีกับห้อง <b>${_htmlEsc(freeClassName)}</b> ไปแล้ว<br>หากต้องการใช้ห้องนี้ด้วย กรุณาสนับสนุนระบบระดับ ${minTier}${tierAmount ? ` (${tierAmount} บาท)` : ''} ขึ้นไปเพื่อใช้ได้ไม่จำกัดห้องครับ</p>
      <button id="sc-upgrade" class="mt-5 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#a9781a,#e6c988)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      <div class="mt-3">
        <button id="sc-back" class="text-xs text-gray-400 hover:text-gray-600">← กลับไปห้องเรียน</button>
      </div>
    </div>`)
    document.getElementById('sc-upgrade')?.addEventListener('click', () => document.getElementById('btn-donate-float')?.click())
    document.getElementById('sc-back')?.addEventListener('click', () => renderClassDetail(teacher, classId))
    return
  }

  let cls, students, activeLeaves, leaveMaxActive, leaveMaxPerWeek, quizzes, donationRequests,
    scoreColumns, studentScores, attendanceFull, leaveHistory, assignments,
    examRequestsAll, mySchedule, scheduleLinks, periods, classAnnouncements,
    syllabusItems, lessonPlans, annTypeSuggestions
  let courseId = null
  try {
    const classes = await getMyClasses(teacher.id)
    cls = classes.find(c => c.id === classId)
    if (!cls) { renderClassDetail(teacher, classId); return }
    courseId = cls.course_id ?? cls.master_subjects?.id ?? null

    const academicYear = parseInt(cfg.academicYear ?? 2568)
    const semester = parseInt(cfg.semester ?? 1)

    ;[students, activeLeaves, leaveMaxActive, leaveMaxPerWeek, quizzes, donationRequests,
      scoreColumns, studentScores, attendanceFull, leaveHistory, assignments,
      examRequestsAll, mySchedule, scheduleLinks, periods, classAnnouncements,
      syllabusItems, lessonPlans, annTypeSuggestions] = await Promise.all([
      getClassStudents(classId).catch(() => []),
      getActiveLeavePermissionsForClass(classId).catch(() => []),
      getLeaveMaxActiveForClass(classId).catch(() => 3),
      getLeaveMaxPerStudentWeekForClass(classId).catch(() => 2),
      getQuizzesForClass(classId).catch(() => []),
      getMyDonationRequests(teacher.id).catch(() => []),
      getScoreColumns(classId).catch(() => []),
      getStudentScores(classId).catch(() => []),
      getClassAttendanceAllFull(classId).catch(() => []),
      getClassLeaveHistory(classId).catch(() => []),
      getClassAssignmentsWithSubmissions(classId).catch(() => []),
      getTeacherExamRequests(teacher.id).catch(() => []),
      getMySchedule(teacher.id, academicYear, semester).catch(() => []),
      getClassScheduleLinks(teacher.id).catch(() => []),
      getPeriods().catch(() => []),
      getClassAnnouncements(classId).catch(() => []),
      courseId ? getCourseSyllabus(courseId).catch(() => []) : Promise.resolve([]),
      courseId ? getLessonPlans(courseId).catch(() => []) : Promise.resolve([]),
      getAnnouncementTypeSuggestions().catch(() => []),
    ])
  } catch (err) {
    showToast('โหลดข้อมูลไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    renderClassDetail(teacher, classId)
    return
  }

  const isDonorTeacher = donationRequests.some(r => r.package_type === 'donation' && r.status === 'approved')
  const ms = cls.master_subjects ?? {}
  let activeLeaveMap = Object.fromEntries(activeLeaves.map(l => [l.student_id, l]))
  const studentsById = Object.fromEntries(students.map(s => [s.id, s]))

  // ── สถานะการสอบสดของนักเรียนแต่ละคน (ถ้ามีควิซที่กำลังสอบสดอยู่ในห้องนี้) ────
  const liveQuiz = quizzes.find(q => q.status === 'started') ?? null
  let quizAttemptByStudent = {}
  if (liveQuiz) {
    const attempts = await getQuizAttemptsForMonitor(liveQuiz.id).catch(() => [])
    quizAttemptByStudent = Object.fromEntries(attempts.map(a => [a.student_id, a]))
  }
  const QUIZ_STATUS_BADGE = {
    in_progress: { icon: '📝', cls: 'bg-emerald-500' },
    submitted: { icon: '✅', cls: 'bg-blue-500' },
    terminated_violation: { icon: '🔒', cls: 'bg-red-500' },
  }

  // ── ประเภทประกาศแนะนำ (อิโมจิ+ชื่อไทย) — เลือกจากนี้ได้ หรือพิมพ์ประเภทใหม่เองอิสระ ──
  const ANN_TYPE_PRESETS = [
    { emoji: '📢', label: 'ทั่วไป' },
    { emoji: '📚', label: 'การบ้าน' },
    { emoji: '📄', label: 'เอกสารประกอบ' },
    { emoji: '⏰', label: 'กำหนดส่งงาน' },
    { emoji: '📝', label: 'แบบทดสอบ' },
    { emoji: '📊', label: 'คะแนน' },
    { emoji: '🎓', label: 'กิจกรรม/ฝึกอบรม' },
    { emoji: '⚠️', label: 'ด่วน/สำคัญ' },
  ]

  // ── โหมดเขียนคะแนนงานที่มอบหมายเข้าคอลัมน์คะแนน — หลักการเดียวกับ score_write_mode ของควิซ ──
  const ASSIGN_WRITE_MODE_LABEL = {
    overwrite: { label: 'ทับคะแนนเก่า (ค่าเริ่มต้น)', hint: 'เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่' },
    highest:   { label: 'เทียบเอาคะแนนสูงกว่า', hint: 'ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/งานอื่น) จะเก็บค่าที่สูงกว่าไว้' },
    add:       { label: 'บวกเพิ่มจากคะแนนเดิม', hint: 'บวกคะแนนงานนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายงาน' },
  }

  // ── Per-student lookup maps (สำหรับแผงข้อมูลนักเรียน) ─────────────────────
  const scoresByStudent = {}
  for (const r of studentScores) (scoresByStudent[r.student_id] ??= []).push(r)
  const attendanceByStudent = {}
  for (const r of attendanceFull) (attendanceByStudent[r.student_id] ??= []).push(r)
  const leaveHistoryByStudent = {}
  for (const l of leaveHistory) (leaveHistoryByStudent[l.student_id] ??= []).push(l)

  // ── เลขที่ — คงที่ตามลำดับ student_code จาก getClassStudents() (ตรงกับหน้าอื่นทั้งระบบ) ──
  // ไม่เปลี่ยนตามการเรียงลำดับการ์ดบนจอ (เรียงแค่ตำแหน่งแสดงผล เลขที่ยังอ้างอิงตัวเดิมเสมอ)
  const seatNoByStudent = new Map(students.map((s, i) => [s.id, i + 1]))
  const studentBySeatNo = new Map(students.map((s, i) => [i + 1, s]))

  // ── คำนวณค่าไว้ใช้เรียงลำดับ/แสดงผลการ์ด: คะแนนรวมทั้งเทอม, % มาเรียน, คะแนนรายคอลัมน์ ──
  const _studentTotalScorePct = (s) => {
    if (!scoreColumns.length) return null
    const rows = scoresByStudent[s.id] ?? []
    const totalMax = scoreColumns.reduce((sum, c) => sum + (parseFloat(c.max_score) || 0), 0)
    if (totalMax <= 0) return null
    const totalScore = scoreColumns.reduce((sum, c) => {
      const r = rows.find(x => x.score_column_id === c.id)
      return sum + (parseFloat(r?.score) || 0)
    }, 0)
    return totalScore / totalMax * 100
  }
  const _studentAttendancePct = (s) => {
    const rows = attendanceByStudent[s.id] ?? []
    if (!rows.length) return null
    return rows.filter(r => r.status === 'present').length / rows.length * 100
  }
  const _studentColumnScore = (s, colId) => {
    const r = (scoresByStudent[s.id] ?? []).find(x => x.score_column_id === colId)
    return r?.score != null ? parseFloat(r.score) : null
  }

  // ── สถานะการเรียงลำดับการ์ดนักเรียน ──────────────────────────────────────────
  let _rosterSort = { key: 'seatno', label: 'เลขที่' }
  const _rosterSortValue = (s) => {
    if (_rosterSort.key === 'total') { const v = _studentTotalScorePct(s); return v == null ? null : `${v.toFixed(0)}%` }
    if (_rosterSort.key === 'att') { const v = _studentAttendancePct(s); return v == null ? null : `${v.toFixed(0)}%` }
    if (_rosterSort.key.startsWith('col:')) {
      const colId = parseInt(_rosterSort.key.slice(4), 10)
      const v = _studentColumnScore(s, colId)
      const col = scoreColumns.find(c => c.id === colId)
      return v == null ? null : `${v}${col ? '/' + col.max_score : ''}`
    }
    return null
  }
  const _sortedStudents = () => {
    if (_rosterSort.key === 'seatno') return students
    if (_rosterSort.key === 'name') return [...students].sort((a, b) => (a.full_name ?? '').localeCompare(b.full_name ?? '', 'th'))
    const getVal = _rosterSort.key === 'total' ? _studentTotalScorePct
      : _rosterSort.key === 'att' ? _studentAttendancePct
      : (s) => _studentColumnScore(s, parseInt(_rosterSort.key.slice(4), 10))
    return [...students].sort((a, b) => {
      const va = getVal(a), vb = getVal(b)
      if (va == null && vb == null) return seatNoByStudent.get(a.id) - seatNoByStudent.get(b.id)
      if (va == null) return 1
      if (vb == null) return -1
      return vb - va // สูง→ต่ำ
    })
  }

  // ── คำร้องขอสอบปรับ/สอบย้อนหลัง ของห้องนี้ — คิวเรียงใกล้→ไกล ────────────────
  const examQueue = examRequestsAll
    .filter(r => r.classes?.id === classId && r.status !== 'rejected' && (r.status !== 'approved' || r.exam_attended == null))
    .sort((a, b) => (a.requested_date ?? '').localeCompare(b.requested_date ?? ''))

  // ── ตารางเรียนของห้องนี้ (day_of_week + period) ────────────────────────────
  const myScheduleIds = new Set(scheduleLinks.filter(l => l.class_id === classId).map(l => l.teacher_schedule_id))
  const periodMap = Object.fromEntries(periods.map(p => [p.period_no, p]))
  const classScheduleSlots = mySchedule
    .filter(s => myScheduleIds.has(s.id))
    .map(s => ({ ...s, period: periodMap[s.period_no], actualEndPeriod: periodMap[(s.period_no ?? 1) + (s.span_periods ?? 1) - 1] ?? periodMap[s.period_no] }))
    .sort((a, b) => a.day_of_week - b.day_of_week || a.period_no - b.period_no)

  // หาว่าตอนนี้ "กำลังสอน" คาบไหนของห้องนี้อยู่ไหม ถ้าไม่ ให้หาคาบถัดไปที่ใกล้ที่สุด (อาจข้ามวัน)
  function _computeClassTiming() {
    const now = new Date()
    const dow = now.getDay()
    const nowSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()
    for (const slot of classScheduleSlots) {
      if (slot.day_of_week !== dow || !slot.period?.start_time || !slot.actualEndPeriod?.end_time) continue
      const [sh, sm] = slot.period.start_time.split(':').map(Number)
      const [eh, em] = slot.actualEndPeriod.end_time.split(':').map(Number)
      const startSec = sh * 3600 + sm * 60
      const endSec = eh * 3600 + em * 60
      if (nowSec >= startSec && nowSec < endSec) return { mode: 'live', remainingSec: endSec - nowSec, slot }
    }
    let best = null
    for (const slot of classScheduleSlots) {
      if (!slot.period?.start_time) continue
      const [sh, sm] = slot.period.start_time.split(':').map(Number)
      const startSec = sh * 3600 + sm * 60
      let daysUntil = (slot.day_of_week - dow + 7) % 7
      if (daysUntil === 0 && startSec <= nowSec) daysUntil = 7
      const totalSecUntil = daysUntil * 86400 + startSec - nowSec
      if (best === null || totalSecUntil < best.totalSecUntil) best = { totalSecUntil, slot }
    }
    return best ? { mode: 'upcoming', remainingSec: best.totalSecUntil, slot: best.slot } : { mode: 'none' }
  }

  const _reload = () => renderSmartClassroom(teacher, classId)

  // ── Push notification ไปหานักเรียนทั้งห้อง (ประกาศ/งานใหม่) — ของเสริม ยิงไม่สำเร็จไม่บล็อกการบันทึกหลัก ──
  const _sendClassPush = async (title, body, tag) => {
    const profileIds = students.map(s => s.profile_id).filter(Boolean)
    if (!profileIds.length) return
    try {
      await supabase.functions.invoke('send-push', { body: { title, body, url: 'student.html', tag, profileIds } })
    } catch { /* เงียบไว้ ไม่กระทบผู้ใช้ */ }
  }

  // ── Roster grid ──────────────────────────────────────────────────────────
  const _rosterHTML = () => _sortedStudents().map(s => {
    const out = activeLeaveMap[s.id]
    const qa = quizAttemptByStudent[s.id]
    const qBadge = liveQuiz ? (QUIZ_STATUS_BADGE[qa?.status] ?? { icon: '⚪', cls: 'bg-gray-300' }) : null
    const sortVal = _rosterSortValue(s)
    return `<button type="button" data-sid="${s.id}"
        class="sc-stu relative border rounded-xl px-2 py-2.5 text-center hover:border-indigo-300 hover:-translate-y-0.5 transition ${out ? 'border-amber-300 bg-amber-50' : 'border-gray-100 bg-gray-50'}">
      <span class="absolute top-1 left-1 text-[9px] font-bold text-gray-500 bg-white/80 border border-gray-200 rounded-full w-4 h-4 flex items-center justify-center" title="เลขที่ ${seatNoByStudent.get(s.id) ?? '—'}">${seatNoByStudent.get(s.id) ?? '—'}</span>
      ${out ? `<span class="absolute top-1 right-1 text-[9px] font-bold bg-amber-500 text-white px-1 py-0.5 rounded">🚪</span>` : ''}
      <div class="relative w-9 h-9 mx-auto mb-1.5 mt-2 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
        ${s.image_url ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover"/>` : _htmlEsc((s.full_name ?? '?').charAt(0))}
        ${qBadge ? `<span class="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold ${qBadge.cls} text-white w-3.5 h-3.5 rounded-full flex items-center justify-center ring-2 ring-white" title="สถานะสอบ: ${qa?.status ?? 'ยังไม่เข้าสอบ'}">${qBadge.icon}</span>` : ''}
      </div>
      <div class="text-[9px] text-gray-400 font-mono">${_htmlEsc(s.student_code ?? '')}</div>
      <div class="text-[11px] font-semibold text-gray-700 leading-tight truncate">${_htmlEsc(s.full_name ?? '')}</div>
      ${sortVal ? `<div class="text-[10px] font-bold text-amber-600 mt-0.5">${_htmlEsc(sortVal)}</div>` : ''}
    </button>`
  }).join('')

  // ── Hall pass live list ─────────────────────────────────────────────────
  const _passListHTML = () => {
    if (!activeLeaves.length) return `<p class="text-center py-6 text-xs text-gray-400">ไม่มีนักเรียนออกนอกห้องตอนนี้</p>`
    return activeLeaves.map(l => {
      const stu = studentsById[l.student_id]
      return `<div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-amber-100 bg-amber-50 mb-2">
        <div class="w-8 h-8 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs flex-shrink-0">
          ${stu?.image_url ? `<img src="${_htmlEsc(stu.image_url)}" class="w-full h-full object-cover"/>` : _htmlEsc((stu?.full_name ?? '?').charAt(0))}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-800 truncate">${_htmlEsc(stu?.full_name ?? '—')}</p>
          <p class="text-[10px] text-gray-500 truncate">${_htmlEsc(l.reason ?? '')}</p>
        </div>
        <span class="text-xs font-bold text-amber-700 font-mono flex-shrink-0">${_fmtElapsed(l.created_at)}</span>
        <button class="sc-return-btn text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-700 hover:bg-amber-100 flex-shrink-0" data-lid="${l.id}">กลับแล้ว</button>
      </div>`
    }).join('')
  }

  // ── Quiz launch list ─────────────────────────────────────────────────────
  const _quizHTML = () => {
    if (!quizzes.length) return `<p class="text-xs text-gray-400">ห้องนี้ยังไม่มีควิซที่สร้างไว้</p>`
    return `<div class="max-h-72 overflow-y-auto space-y-1.5 pr-0.5">${quizzes.map(q => `
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <span class="text-base flex-shrink-0">🧠</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-700 truncate">${_htmlEsc(q.title ?? 'ควิซ')}</p>
          <p class="text-[10px] text-gray-400">${q.status === 'announced' ? 'พร้อมเริ่ม' : q.status === 'started' ? '🔴 กำลังสอบสด' : 'ปิดแล้ว'}</p>
        </div>
        ${q.status === 'announced' ? `<button class="sc-quiz-start text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex-shrink-0" data-qid="${q.id}">▶ เริ่ม</button>` : ''}
        ${q.status === 'started' ? `<button class="sc-quiz-monitor text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex-shrink-0" data-qid="${q.id}">🔴 ดูสด</button>
                                     <button class="sc-quiz-close text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 flex-shrink-0" data-qid="${q.id}">ปิด</button>` : ''}
        ${q.status === 'started' || q.status === 'closed' ? `<button class="sc-quiz-analytics text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100 flex-shrink-0" data-qid="${q.id}">📊 สถิติ</button>` : ''}
      </div>`).join('')}</div>`
  }

  // ── ประกาศของห้องนี้ (ทุกแหล่ง ไม่ใช่แค่ที่ส่งจากตรงนี้) ──────────────────────
  const _annHistoryHTML = () => {
    if (!classAnnouncements.length) return `<p class="text-xs text-gray-400 mb-2">ยังไม่มีประกาศสำหรับห้องนี้</p>`
    return `<div class="space-y-1.5 mb-3 max-h-40 overflow-y-auto">${classAnnouncements.slice(0, 10).map(a => {
      const files = [...(Array.isArray(a.attachment_urls) ? a.attachment_urls : []), ...(a.file_url ? [{ url: a.file_url, name: 'ไฟล์แนบ' }] : [])]
      return `
      <div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center gap-1.5 flex-wrap">
          ${a.ann_type && a.ann_type !== 'general' ? `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">${_htmlEsc(a.ann_type)}</span>` : ''}
          <p class="font-semibold text-gray-700 truncate flex-1 min-w-0">${_htmlEsc(a.title)}</p>
        </div>
        ${a.body ? `<p class="text-gray-400 truncate">${_htmlEsc(a.body.slice(0, 80))}</p>` : ''}
        ${files.length ? `<div class="flex flex-wrap gap-1 mt-1">${files.map(f => `<a href="${_htmlEsc(f.url)}" target="_blank" rel="noopener" class="text-[10px] px-1.5 py-0.5 rounded-lg bg-white border border-gray-200 text-indigo-600 hover:bg-indigo-50">📎 ${_htmlEsc(f.name ?? 'ไฟล์')}</a>`).join('')}</div>` : ''}
        <p class="text-[10px] text-gray-300 mt-0.5">${new Date(a.created_at).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' })}${a.teachers?.full_name ? ' · ' + _htmlEsc(a.teachers.full_name) : ''}</p>
      </div>`
    }).join('')}</div>`
  }

  // ── ตารางเรียนของห้องนี้ ────────────────────────────────────────────────────
  const DAY_TH_FULL = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
  const _scheduleHTML = (mode) => {
    if (!classScheduleSlots.length) return `<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้ผูกตารางสอนให้ห้องนี้</p>`
    if (mode === 'daily') {
      const today = new Date().getDay()
      const todaySlots = classScheduleSlots.filter(sl => sl.day_of_week === today)
      if (!todaySlots.length) return `<p class="text-center py-6 text-xs text-gray-400">วันนี้ไม่มีคาบของห้องนี้</p>`
      return todaySlots.map(sl => `
        <div class="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
          <span class="font-semibold text-gray-700">คาบที่ ${sl.period_no}${sl.span_periods > 1 ? `-${sl.period_no + sl.span_periods - 1}` : ''}</span>
          <span class="text-gray-500 font-mono">${sl.period?.start_time?.slice(0, 5) ?? '—'} - ${sl.actualEndPeriod?.end_time?.slice(0, 5) ?? '—'}</span>
        </div>`).join('')
    }
    const byDay = {}
    classScheduleSlots.forEach(sl => { (byDay[sl.day_of_week] ??= []).push(sl) })
    return Object.keys(byDay).sort((a, b) => a - b).map(dow => `
      <div class="mb-2.5">
        <p class="text-[11px] font-bold text-gray-500 mb-1">${DAY_TH_FULL[dow]}</p>
        <div class="flex flex-wrap gap-1.5">
          ${byDay[dow].map(sl => `<span class="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-semibold font-mono">คาบ ${sl.period_no}${sl.span_periods > 1 ? `-${sl.period_no + sl.span_periods - 1}` : ''} · ${sl.period?.start_time?.slice(0, 5) ?? '—'}</span>`).join('')}
        </div>
      </div>`).join('')
  }

  // ── คิวคำร้องขอสอบปรับ/สอบย้อนหลัง ────────────────────────────────────────────
  const _examQueueHTML = () => {
    if (!examQueue.length) return `<p class="text-center py-6 text-xs text-gray-400">ไม่มีคำร้องรอดำเนินการ</p>`
    return examQueue.map((r, i) => `
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 mb-1.5 text-xs">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0">${i + 1}</span>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-700 truncate">${_htmlEsc(r.students?.full_name ?? '—')} — ${_htmlEsc(r.request_type ?? '')}</p>
          <p class="text-gray-400">${r.requested_date ? new Date(r.requested_date).toLocaleDateString('th-TH', { day: 'numeric', month: 'short' }) : 'ไม่ระบุวันที่'}${r.requested_period_no ? ` · คาบ ${r.requested_period_no}` : ''}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${r.status === 'pending' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'} flex-shrink-0">${r.status === 'pending' ? 'รออนุมัติ' : 'อนุมัติแล้ว รอสอบ'}</span>
      </div>`).join('')
  }

  // ── งานที่มอบหมาย ────────────────────────────────────────────────────────
  const _fmtDueDate = iso => !iso ? 'ไม่กำหนดส่ง' : new Date(iso).toLocaleString('th-TH', { day: 'numeric', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit' })
  const _isLate = (a, submittedAtIso) => a.due_at ? new Date(submittedAtIso).getTime() > new Date(a.due_at).getTime() : false
  const _lateDays = (a, submittedAtIso) => a.due_at ? Math.max(1, Math.ceil((new Date(submittedAtIso).getTime() - new Date(a.due_at).getTime()) / 86400000)) : 0
  const _latePenaltyPoints = (a, submittedAtIso) => {
    if (!_isLate(a, submittedAtIso)) return 0
    if (a.late_penalty_mode === 'flat') return parseFloat(a.late_penalty_value) || 0
    if (a.late_penalty_mode === 'per_day') return (parseFloat(a.late_penalty_value) || 0) * _lateDays(a, submittedAtIso)
    return 0
  }

  const _assignmentsHTML = () => {
    if (!assignments.length) return `<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีงานที่มอบหมาย — กด "➕ สั่งงานใหม่" เพื่อเริ่ม</p>`
    return assignments.map(a => {
      const submittedCount = a.submissions.length
      const totalCount = students.length
      const pct = totalCount > 0 ? Math.round(submittedCount / totalCount * 100) : 0
      const lateCount = a.submissions.filter(s => _isLate(a, s.submitted_at)).length
      return `<button class="sc-assignment-row w-full text-left px-3 py-2.5 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 transition mb-2" data-aid="${a.id}">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-bold text-gray-700 truncate">${_htmlEsc(a.title)}</p>
          <span class="text-[10px] text-gray-400 flex-shrink-0">${_fmtDueDate(a.due_at)}</span>
        </div>
        <div class="flex items-center gap-2 mt-1.5">
          <div class="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${pct}%"></div></div>
          <span class="text-[11px] font-bold text-gray-600 flex-shrink-0">${submittedCount}/${totalCount} ส่งแล้ว</span>
          ${lateCount ? `<span class="text-[10px] font-bold text-amber-600 flex-shrink-0">⏰ ช้า ${lateCount}</span>` : ''}
        </div>
      </button>`
    }).join('')
  }

  // ── กำหนดการสอน (ผูกกับรายวิชา) — สัปดาห์นี้คือสัปดาห์ที่เท่าไหร่ ตรงกับหัวข้ออะไร ──
  const curWeek = _currentWeek(cfg.semester_start)
  const currentTopic = syllabusItems.find(it => curWeek >= it.week_start && curWeek <= it.week_end)

  const _syllabusHTML = () => {
    if (!syllabusItems.length) return `<p class="text-center py-6 text-xs text-gray-400">ยังไม่ได้กำหนดหัวข้อการสอน — กด "➕ เพิ่มหัวข้อ" เพื่อเริ่มวางกำหนดการสอน</p>`
    return `<div class="max-h-56 overflow-y-auto space-y-1.5 pr-0.5">${syllabusItems.map(it => `
      <button class="sc-syllabus-row w-full text-left flex items-center gap-2 px-3 py-2 rounded-xl border transition ${curWeek >= it.week_start && curWeek <= it.week_end ? 'border-indigo-300 bg-indigo-50' : 'border-gray-100 bg-gray-50 hover:border-indigo-200'}" data-sylid="${it.id}">
        <span class="text-[10px] font-bold text-gray-500 flex-shrink-0 w-16">สัปดาห์ ${it.week_start}${it.week_end !== it.week_start ? `-${it.week_end}` : ''}</span>
        <span class="text-xs font-semibold text-gray-700 truncate flex-1">${_htmlEsc(it.topic)}</span>
      </button>`).join('')}</div>`
  }

  // ── แผนการจัดการเรียนรู้ (ผูกกับรายวิชา ยืดหยุ่นจำนวนแผน) ────────────────────
  const _lessonPlansHTML = () => {
    if (!lessonPlans.length) return `<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีแผนการสอน — กด "➕ สร้างแผน" เพื่อเริ่ม</p>`
    return `<div class="max-h-56 overflow-y-auto space-y-1.5 pr-0.5">${lessonPlans.map(p => `
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50">
        <button class="sc-plan-row flex-1 min-w-0 text-left" data-planid="${p.id}">
          <p class="text-xs font-bold text-gray-700 truncate">${_htmlEsc(p.title)}</p>
          <p class="text-[10px] text-gray-400">สัปดาห์ ${p.week_start}${p.week_end !== p.week_start ? `-${p.week_end}` : ''}</p>
        </button>
        <button class="sc-plan-reflect text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50 flex-shrink-0" data-planid="${p.id}">🖊️ บันทึกหลังสอน</button>
      </div>`).join('')}</div>`
  }

  // ── โซนอ้างอิง — แท็บรวมข้อมูลที่ไม่ได้ใช้ระหว่างสอนสดทุกวินาที (เดิมแยกการ์ดเรียงยาว 3 แถว) ──
  const REF_TABS = [
    { key: 'schedule',    label: '🗓️ ตารางเรียน' },
    { key: 'examqueue',   label: '📋 คิวสอบ' },
    { key: 'syllabus',    label: '📘 กำหนดการสอน' },
    { key: 'plans',       label: '📝 แผนการสอน' },
    { key: 'assignments', label: '📚 งานที่มอบหมาย' },
  ]
  let _refTab = 'schedule'

  const _refTabBodyHTML = (tab) => {
    if (tab === 'schedule') return `
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ตารางเรียนของห้องนี้</p>
        <div class="sc-tabbar">
          <button data-sched="daily" class="sc-sched-tab sc-tab-pill">รายวัน</button>
          <button data-sched="weekly" class="sc-sched-tab sc-tab-pill">รายสัปดาห์</button>
        </div>
      </div>
      <div id="sc-schedule-body">${_scheduleHTML('daily')}</div>`
    if (tab === 'examqueue') return `
      <p class="text-xs text-gray-400 mb-3">คิวคำร้องขอสอบปรับ/สอบย้อนหลัง เรียงจากใกล้ไปไกล</p>
      <div id="sc-exam-queue">${_examQueueHTML()}</div>`
    if (tab === 'syllabus') return `
      <div class="flex items-center justify-between mb-1">
        <p class="text-xs text-gray-400">หัวข้อที่สอนแต่ละช่วงสัปดาห์ — ผูกกับรายวิชา ใช้ร่วมกันทุกห้อง</p>
        <button id="sc-add-syllabus" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ เพิ่มหัวข้อ</button>
      </div>
      <div class="my-3 px-3 py-2.5 rounded-xl ${currentTopic ? 'bg-indigo-50 border border-indigo-100' : 'bg-gray-50 border border-gray-100'}">
        <p class="text-[10px] font-bold ${currentTopic ? 'text-indigo-500' : 'text-gray-400'} uppercase tracking-wide">สัปดาห์นี้ — สัปดาห์ที่ ${curWeek || '—'}</p>
        <p class="text-sm font-bold ${currentTopic ? 'text-indigo-700' : 'text-gray-400'} mt-0.5">${currentTopic ? _htmlEsc(currentTopic.topic) : 'ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้'}</p>
      </div>
      <div id="sc-syllabus-list">${_syllabusHTML()}</div>`
    if (tab === 'plans') return `
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">แผนหน้าเดียว ยืดหยุ่นจำนวน/ช่วงสัปดาห์ พร้อมบันทึกหลังสอน+เซ็นชื่อ</p>
        <button id="sc-add-plan" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สร้างแผน</button>
      </div>
      <div id="sc-plan-list">${_lessonPlansHTML()}</div>`
    return `
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs text-gray-400">ติดตามงานที่มอบหมาย + สถานะการส่งของนักเรียน</p>
        <button id="sc-add-assignment" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สั่งงานใหม่</button>
      </div>
      <div id="sc-assignment-list">${_assignmentsHTML()}</div>`
  }

  setContent(`<div class="animate-fade max-w-6xl mx-auto">

    <div class="relative overflow-hidden bg-white border border-amber-200 rounded-2xl shadow-sm px-5 py-4 mb-4 flex items-center gap-4 flex-wrap">
      <div class="absolute inset-x-0 top-0 h-1" style="background:linear-gradient(90deg,#e6c988,#a9781a,#e6c988)"></div>
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold flex-shrink-0">👑 Smart Classroom</span>
      <div class="min-w-0">
        <h1 class="font-bold text-gray-800 text-base truncate">${_htmlEsc(ms.subject_name ?? '')} · ${_htmlEsc(cls.class_name ?? '')}</h1>
        <p class="text-xs text-gray-400">${students.length} คน</p>
      </div>
      <div class="min-w-0 border-l border-amber-100 pl-4">
        <p class="text-[10px] font-bold text-amber-500 uppercase tracking-wide">📘 สัปดาห์ที่ ${curWeek || '—'}</p>
        <p class="text-xs font-semibold ${currentTopic ? 'text-gray-700' : 'text-gray-400'} truncate max-w-[240px]">${currentTopic ? _htmlEsc(currentTopic.topic) : 'ยังไม่ได้กำหนดหัวข้อสำหรับสัปดาห์นี้'}</p>
      </div>
      <div id="sc-clock-wrap" class="ml-auto flex-shrink-0 text-right"></div>
      <button id="sc-switch-class" class="flex-shrink-0 text-xs font-semibold text-amber-700 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg">🔀 สลับห้อง</button>
      <button id="sc-back" class="flex-shrink-0 text-xs text-gray-400 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">← กลับ</button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 items-start">

      <div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between gap-2 flex-wrap mb-1">
            <h2 class="text-sm font-bold text-gray-700">👥 นักเรียน — แตะเพื่อดูข้อมูล/สั่งการ</h2>
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button id="sc-sort-trigger" class="text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100">🔀 เรียงตาม: <span id="sc-sort-label">เลขที่</span></button>
              <button id="sc-open-attendance" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg">✅ เช็คชื่อ</button>
            </div>
          </div>
          <p class="text-xs text-gray-400 mb-3">เด้งป๊อบอัพเช็คชื่อของคาบวันนี้ให้อัตโนมัติ (ถ้าวันนี้มีหลายคาบหรือไม่ตรงตาราง จะให้เลือกคาบเอง)</p>
          ${liveQuiz ? `<div class="flex items-center flex-wrap gap-2 mb-3 px-3 py-2 rounded-xl bg-red-50 border border-red-100 text-[11px] text-red-700">
            <span class="font-bold">🔴 กำลังสอบสด: ${_htmlEsc(liveQuiz.title)}</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-flex items-center justify-center text-[8px]">📝</span>กำลังทำ</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-blue-500 inline-flex items-center justify-center text-[8px]">✅</span>ส่งแล้ว</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-red-500 inline-flex items-center justify-center text-[8px]">🔒</span>ถูกล็อก</span>
            <span class="flex items-center gap-1"><span class="w-3.5 h-3.5 rounded-full bg-gray-300 inline-flex items-center justify-center text-[8px]">⚪</span>ยังไม่เข้าสอบ</span>
          </div>` : ''}
          <div class="grid grid-cols-4 sm:grid-cols-6 gap-2" id="sc-roster">${_rosterHTML()}</div>
        </div>

        <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">🚪 Hall Pass — ออกนอกห้องตอนนี้</h2>
            <button id="sc-leave-quota" class="text-[11px] font-semibold text-amber-700 hover:text-amber-900">⚙️ โควตา (${activeLeaves.length}/${leaveMaxActive})</button>
          </div>
          <div id="sc-pass-list" class="mt-2">${_passListHTML()}</div>
        </div>
      </div>

      <div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <h2 class="text-sm font-bold text-gray-700 mb-3">🧠 เปิดควิซสด</h2>
          <div id="sc-quiz-list">${_quizHTML()}</div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <h2 class="text-sm font-bold text-gray-700 mb-3">🛠️ เครื่องมือห้องเรียน</h2>
          <div class="grid grid-cols-2 gap-2">
            <button id="sc-timer" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">⏱️<br>จับเวลา</button>
            <button id="sc-random" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">🎲<br>สุ่ม/จัดกลุ่ม</button>
            <button id="sc-scan-att" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">📷<br>สแกน QR เช็คชื่อ</button>
            <button id="sc-scan-score" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">📷<br>สแกน QR คะแนน</button>
            <button id="sc-dashboard" class="col-span-2 px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-amber-300 hover:bg-amber-50/50 hover:-translate-y-0.5 transition text-xs font-bold text-gray-700">📈 Dashboard วิเคราะห์ห้องนี้</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">📣 ประกาศของห้องนี้</h2>
            <button id="sc-add-announcement" class="sc-btn-gold text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">➕ สร้างประกาศ</button>
          </div>
          <p class="text-[10px] text-gray-400 mb-2">รวมประกาศที่ตรงกับห้องนี้ทั้งหมด ไม่ว่าจะประกาศจากตรงนี้หรือหน้าประกาศหลัก</p>
          <div id="sc-ann-history">${_annHistoryHTML()}</div>
        </div>
      </div>

    </div>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mt-4">
      <div id="sc-reftabs-bar" class="sc-tabbar mb-4">
        ${REF_TABS.map(t => `<button data-reftab="${t.key}" class="sc-reftab-btn sc-tab-pill ${t.key === _refTab ? 'active' : ''}">${t.label}</button>`).join('')}
      </div>
      <div id="sc-reftab-body">${_refTabBodyHTML(_refTab)}</div>
    </div>
  </div>`)

  // ── Wiring: fullscreen mode / back / switch class / attendance ──────────
  document.body.classList.add('sc-fullscreen')
  document.getElementById('sc-back').addEventListener('click', () => {
    if (window._scClockInterval) { clearInterval(window._scClockInterval); window._scClockInterval = null }
    if (window._scQuizPollInterval) { clearInterval(window._scQuizPollInterval); window._scQuizPollInterval = null }
    document.body.classList.remove('sc-fullscreen')
    renderClassDetail(teacher, classId)
  })
  document.getElementById('sc-switch-class').addEventListener('click', () => _openClassSwitcher())
  document.getElementById('sc-open-attendance').addEventListener('click', () => _openTodayAttendance())

  // ── นาฬิกา: กำลังสอนอยู่ (นับถอยหลังจนจบคาบ) หรือคาบถัดไปของห้องนี้ (นับถอยหลังจนเริ่ม) ──
  function _fmtCountdownParts(sec) {
    return { d: Math.floor(sec / 86400), h: Math.floor((sec % 86400) / 3600), m: Math.floor((sec % 3600) / 60), s: sec % 60 }
  }
  function _paintClock() {
    const wrap = document.getElementById('sc-clock-wrap')
    if (!wrap) { if (window._scClockInterval) { clearInterval(window._scClockInterval); window._scClockInterval = null }; return }
    const t = _computeClassTiming()
    if (t.mode === 'live') {
      const { h, m, s } = _fmtCountdownParts(t.remainingSec)
      wrap.innerHTML = `<p class="text-[10px] text-emerald-600 font-bold uppercase tracking-wide">🟢 กำลังสอน — เหลืออีก</p>
        <p class="text-xl font-extrabold text-emerald-700 font-mono">${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}</p>`
    } else if (t.mode === 'upcoming') {
      const { d, h, m, s } = _fmtCountdownParts(t.remainingSec)
      wrap.innerHTML = `<p class="text-[10px] text-amber-600 font-bold uppercase tracking-wide">คาบนี้จะเริ่มสอนในอีก</p>
        <p class="text-sm font-extrabold text-amber-700 font-mono">${d > 0 ? d + ' วัน ' : ''}${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}</p>`
    } else {
      wrap.innerHTML = `<p class="text-[10px] text-gray-400">ไม่พบตารางสอนของห้องนี้</p>`
    }
  }
  if (window._scClockInterval) clearInterval(window._scClockInterval)
  _paintClock()
  window._scClockInterval = setInterval(_paintClock, 1000)

  // ── โพลสถานะสอบสดของนักเรียนทุก 4 วิ (ให้ badge บนการ์ดตามทันจริง) ──────────
  if (window._scQuizPollInterval) clearInterval(window._scQuizPollInterval)
  if (liveQuiz) {
    window._scQuizPollInterval = setInterval(async () => {
      const rosterEl = document.getElementById('sc-roster')
      if (!rosterEl) { clearInterval(window._scQuizPollInterval); window._scQuizPollInterval = null; return }
      const attempts = await getQuizAttemptsForMonitor(liveQuiz.id).catch(() => null)
      if (!attempts) return
      quizAttemptByStudent = Object.fromEntries(attempts.map(a => [a.student_id, a]))
      rosterEl.innerHTML = _rosterHTML()
    }, 4000)
  }

  async function _openClassSwitcher() {
    document.getElementById('sc-switch-modal')?.remove()
    const m = document.createElement('div')
    m.id = 'sc-switch-modal'
    m.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">🔀 สลับห้องเรียน</h3>
          <button id="sc-switch-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div id="sc-switch-list" class="max-h-80 overflow-y-auto space-y-1.5">
          <div class="text-center py-6 text-xs text-gray-400">กำลังโหลด...</div>
        </div>
      </div>`
    document.body.appendChild(m)
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#sc-switch-close').addEventListener('click', () => m.remove())

    const otherClasses = (await getMyClasses(teacher.id).catch(() => [])).filter(c => c.id !== classId)
    const listEl = m.querySelector('#sc-switch-list')
    if (!otherClasses.length) {
      listEl.innerHTML = `<p class="text-center py-6 text-xs text-gray-400">ไม่มีห้องอื่นให้สลับ</p>`
      return
    }
    listEl.innerHTML = otherClasses.map(c => `
      <button class="sc-switch-btn w-full text-left px-3 py-2.5 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 transition" data-cid="${c.id}">
        <p class="text-sm font-semibold text-gray-700 truncate">${_htmlEsc(c.class_name ?? '')}</p>
        <p class="text-xs text-gray-400 truncate">${_htmlEsc(c.master_subjects?.subject_name ?? '')}</p>
      </button>`).join('')
    listEl.querySelectorAll('.sc-switch-btn').forEach(b => b.addEventListener('click', () => {
      const newId = parseInt(b.dataset.cid, 10)
      m.remove()
      renderSmartClassroom(teacher, newId)
    }))
  }

  // เช็คชื่อระหว่างสอนสด — หาคาบของ "วันนี้" อัตโนมัติแล้วเด้งป๊อบอัพเช็คชื่อเดิมตรงเลย
  // (ไม่ต้องเข้าไปหน้าเช็คชื่อเต็มแล้วเลือกวันที่เอง เพราะระหว่างสอนวันที่คือวันนี้อยู่แล้ว)
  // ถ้าวันนี้ตรงกับหลายคาบ (สอนหลายคาบ) หรือไม่ตรงกับตารางเลย ให้ครูเลือกคาบเอง
  async function _openTodayAttendance() {
    const btn = document.getElementById('sc-open-attendance')
    btn.disabled = true; const orig = btn.textContent; btn.textContent = '⏳'
    try {
      const credit = cls.master_subjects?.credit ?? 1
      const isACDMVOC = cls.master_subjects?.subject_group === 'ACDMVOC'
      const dowPattern = isACDMVOC ? await getClassSessionDOWs(classId).catch(() => []) : []
      const sessions = _generateSessions(cls, credit, dowPattern.length ? dowPattern : null, isACDMVOC)
      const today = _dateInputValue(new Date())
      const todays = sessions.filter(s => s.ds === today)

      if (todays.length === 1) {
        await _openAttendanceModalForSession(teacher, cls, todays[0].n, {})
      } else if (todays.length > 1) {
        _openSessionPicker(sessions, todays[0].n, 'วันนี้มีหลายคาบ — เลือกคาบที่จะเช็คชื่อ')
      } else {
        // หาคาบที่ใกล้วันนี้ที่สุด (ทั้งก่อน/หลัง) เพื่อเลื่อนรายการไปโฟกัสให้อัตโนมัติ — ไม่ตัดรายการทิ้ง
        const todayTime = new Date(today).getTime()
        let nearest = sessions[0]
        let nearestDiff = Infinity
        for (const s of sessions) {
          const diff = Math.abs(new Date(s.ds).getTime() - todayTime)
          if (diff < nearestDiff) { nearestDiff = diff; nearest = s }
        }
        _openSessionPicker(sessions, nearest?.n, 'วันนี้ไม่ตรงกับตารางสอนของห้องนี้ — เลือกคาบเอง (เลื่อนไปคาบใกล้วันนี้ที่สุดให้แล้ว)')
      }
    } catch (err) {
      showToast('เปิดหน้าเช็คชื่อไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      btn.disabled = false; btn.textContent = orig
    }
  }

  function _openSessionPicker(list, focusN, title) {
    document.getElementById('sc-session-picker')?.remove()
    const m = document.createElement('div')
    m.id = 'sc-session-picker'
    m.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">✅ เลือกคาบเช็คชื่อ</h3>
          <button id="sc-sess-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <p class="text-xs text-gray-400">${_htmlEsc(title)}</p>
        <div class="max-h-72 overflow-y-auto space-y-1.5" id="sc-sess-list">
          ${list.map(s => `<button class="sc-sess-btn w-full text-left px-3 py-2.5 rounded-xl border transition text-sm font-semibold ${s.n === focusN ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : 'border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700'}" data-n="${s.n}">
            คาบที่ ${s.n} <span class="${s.n === focusN ? 'text-indigo-400' : 'text-gray-400'} font-normal">· ${_htmlEsc(s.ds)}</span>${s.n === focusN ? ' <span class="text-[10px] text-indigo-500">← ใกล้วันนี้ที่สุด</span>' : ''}
          </button>`).join('')}
        </div>
      </div>`
    document.body.appendChild(m)
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#sc-sess-close').addEventListener('click', () => m.remove())
    m.querySelectorAll('.sc-sess-btn').forEach(b => b.addEventListener('click', async () => {
      const n = parseInt(b.dataset.n, 10)
      m.remove()
      try { await _openAttendanceModalForSession(teacher, cls, n, {}) }
      catch (err) { showToast('เปิดคาบนี้ไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    }))
    const focusEl = m.querySelector(`.sc-sess-btn[data-n="${focusN}"]`)
    focusEl?.scrollIntoView({ block: 'center' })
  }

  // ── Wiring: roster click → student detail panel ─────────────────────────
  document.getElementById('sc-roster').addEventListener('click', e => {
    const btn = e.target.closest('.sc-stu')
    if (!btn) return
    const s = studentsById[parseInt(btn.dataset.sid, 10)]
    if (s) _openStudentPanel(s)
  })

  // ── Wiring: เรียงลำดับการ์ดนักเรียน (เลขที่/ชื่อ/คะแนนรวม/มาเรียน/รายคอลัมน์คะแนน) ──
  function _applyRosterSort(key, label) {
    _rosterSort = { key, label }
    document.getElementById('sc-sort-label').textContent = label
    document.getElementById('sc-roster').innerHTML = _rosterHTML()
  }
  document.getElementById('sc-sort-trigger').addEventListener('click', () => _openSortPanel())

  function _openSortPanel() {
    document.getElementById('sc-sort-panel')?.remove()
    const trigger = document.getElementById('sc-sort-trigger')
    const rect = trigger.getBoundingClientRect()
    const p = document.createElement('div')
    p.id = 'sc-sort-panel'
    p.className = 'fixed z-[96] bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 max-h-[70vh] overflow-hidden flex flex-col animate-fade'
    p.style.top = `${Math.min(rect.bottom + 6, window.innerHeight - 300)}px`
    p.style.left = `${Math.min(rect.left, window.innerWidth - 300)}px`
    const QUICK_SORTS = [
      { key: 'seatno', label: 'เลขที่ (ค่าเริ่มต้น)' },
      { key: 'name', label: 'ชื่อ-สกุล (ก–ฮ)' },
      { key: 'total', label: 'คะแนนรวมทั้งเทอม (สูง→ต่ำ)' },
      { key: 'att', label: 'คะแนนการมาเรียน (สูง→ต่ำ)' },
    ]
    p.innerHTML = `
      <div class="p-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-xs font-bold text-gray-500 mb-2">เรียงลำดับตาม</p>
        <div class="space-y-1">
          ${QUICK_SORTS.map(q => `<button data-sortkey="${q.key}" data-sortlabel="${_htmlEsc(q.label)}" class="sc-sort-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${_rosterSort.key === q.key ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-50'}">${q.label}</button>`).join('')}
        </div>
      </div>
      <div class="p-3 flex-1 overflow-y-auto min-h-0">
        <p class="text-xs font-bold text-gray-500 mb-2">คะแนนรายช่อง</p>
        ${scoreColumns.length > 8 ? `<input id="sc-sort-search" type="text" placeholder="พิมพ์ค้นหาชื่อคอลัมน์..." class="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 mb-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />` : ''}
        <div id="sc-sort-col-list" class="space-y-1">
          ${scoreColumns.length ? scoreColumns.map(c => `<button data-sortkey="col:${c.id}" data-sortlabel="${_htmlEsc(c.assignment_name ?? '')}" data-search="${_htmlEsc((c.assignment_name ?? '').toLowerCase())}" class="sc-sort-opt sc-sort-col-opt w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${_rosterSort.key === 'col:' + c.id ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-50'}">${_htmlEsc(c.assignment_name ?? '')}</button>`).join('') : `<p class="text-xs text-gray-300 text-center py-3">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>`}
        </div>
      </div>`
    document.body.appendChild(p)
    p.querySelectorAll('.sc-sort-opt').forEach(b => b.addEventListener('click', () => {
      _applyRosterSort(b.dataset.sortkey, b.dataset.sortlabel)
      p.remove()
    }))
    const searchInput = p.querySelector('#sc-sort-search')
    searchInput?.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase()
      p.querySelectorAll('.sc-sort-col-opt').forEach(b => {
        b.style.display = !q || b.dataset.search.includes(q) ? '' : 'none'
      })
    })
    const _closeOnOutside = (e) => {
      if (p.contains(e.target) || e.target === trigger) return
      p.remove()
      document.removeEventListener('mousedown', _closeOnOutside, true)
    }
    setTimeout(() => document.addEventListener('mousedown', _closeOnOutside, true), 0)
  }

  const SC_TABS = [
    { key: 'info',  label: '👤 ข้อมูล' },
    { key: 'score', label: '📝 คะแนน' },
    { key: 'att',   label: '✅ มาเรียน' },
    { key: 'leave', label: '🚪 ออกห้อง' },
  ]

  function _tabInfoHTML(s) {
    const leave = activeLeaveMap[s.id]
    const qa = liveQuiz ? quizAttemptByStudent[s.id] : null
    return `
      <div class="space-y-2">
        ${liveQuiz ? `
          <div class="px-3 py-2.5 rounded-xl bg-red-50 border border-red-100">
            <p class="text-xs text-red-700 font-bold mb-1">🔴 ${_htmlEsc(liveQuiz.title)}</p>
            ${!qa ? `<p class="text-xs text-gray-500">⚪ ยังไม่เข้าสอบ</p>` : `
              <p class="text-xs text-gray-600">${
                qa.status === 'in_progress' ? '📝 กำลังทำอยู่' :
                qa.status === 'submitted' ? `✅ ส่งแล้ว${qa.score_pct != null ? ` · คะแนน ${qa.score_pct.toFixed(1)}%` : ''}` :
                qa.status === 'terminated_violation' ? '🔒 ถูกล็อกจากการทำผิดกติกา' : qa.status
              }${qa.question_order?.length ? ` · ตอบแล้ว ${Object.keys(qa.answers ?? {}).length}/${qa.question_order.length} ข้อ` : ''}</p>
              ${qa.status === 'terminated_violation' ? `<button id="sc-sp-unlock" data-attempt="${qa.id}" class="w-full mt-2 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600">🔓 ปลดล็อกให้ทำต่อ</button>` : ''}
            `}
            <button id="sc-sp-quiz-monitor" class="w-full mt-2 py-1.5 rounded-xl border border-red-200 text-red-600 text-[11px] font-bold hover:bg-red-100">เปิดหน้าจัดการสอบสดแบบเต็ม →</button>
          </div>
        ` : ''}
        ${leave ? `
          <div class="flex items-center justify-between px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-100">
            <div class="text-xs text-amber-800"><b>🚪 ออกนอกห้องอยู่</b><br>${_htmlEsc(leave.reason ?? '')} · ${_fmtElapsed(leave.created_at)}</div>
          </div>
          <button id="sc-sp-return" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700">✅ บันทึกกลับเข้าห้องแล้ว</button>
        ` : `
          <button id="sc-sp-leave" class="w-full py-2.5 rounded-xl bg-amber-500 text-white text-sm font-bold hover:bg-amber-600">🚪 อนุญาตออกนอกห้อง</button>
        `}
      </div>`
  }

  // เกรดประมาณจาก % รวม — สูตรเดียวกับที่ใช้สร้างเอกสาร ปพ.5 (pp5-doc.js:_calcGrade)
  // หมายเหตุ: ไม่รวมสูตรพิเศษ/บังคับเกรด/แยกกลางภาค-ปลายภาคแบบหน้าคะแนนหลัก (teacher-views-grades.js)
  // ถ้าต้องการเลขที่ตรงกับหน้าคะแนนหลักเป๊ะ ต้องเปิดหน้านั้นแทน
  function _estimateGrade(pct) {
    if (pct >= 80) return '4'
    if (pct >= 75) return '3.5'
    if (pct >= 70) return '3'
    if (pct >= 65) return '2.5'
    if (pct >= 60) return '2'
    if (pct >= 55) return '1.5'
    if (pct >= 50) return '1'
    return '0'
  }

  function _tabScoreHTML(s) {
    if (!scoreColumns.length) return `<p class="text-center py-6 text-xs text-gray-400">ห้องนี้ยังไม่มีคอลัมน์คะแนน</p>`
    const rows = scoresByStudent[s.id] ?? []
    const totalMax = scoreColumns.reduce((sum, c) => sum + (parseFloat(c.max_score) || 0), 0)
    const totalScore = scoreColumns.reduce((sum, c) => {
      const r = rows.find(x => x.score_column_id === c.id)
      return sum + (parseFloat(r?.score) || 0)
    }, 0)
    const pct = totalMax > 0 ? (totalScore / totalMax * 100) : 0
    return `
      <div class="flex items-center justify-between px-3 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100 mb-1">
        <div>
          <p class="text-[10px] text-indigo-400 font-semibold uppercase tracking-wide">รวมคะแนน</p>
          <p class="text-sm font-bold text-indigo-700">${totalScore.toFixed(1).replace(/\.0$/, '')} / ${totalMax} · ${pct.toFixed(1)}%</p>
        </div>
        <div class="text-right">
          <p class="text-[10px] text-indigo-400 font-semibold uppercase tracking-wide">เกรดประมาณ</p>
          <p class="text-lg font-extrabold text-indigo-700">${_estimateGrade(pct)}</p>
        </div>
      </div>
      <p class="text-[10px] text-gray-400 mb-3">* รวมทุกคอลัมน์แบบตรงไปตรงมา ไม่รวมสูตร/บังคับเกรดจากหน้าคะแนนหลัก — แก้ตรงนี้บันทึกจริงเข้าระบบทันที</p>
      <div class="space-y-1.5">
        ${scoreColumns.map(col => {
          const r = rows.find(x => x.score_column_id === col.id)
          const val = r?.score ?? ''
          return `<div class="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
            <span class="font-semibold text-gray-700 truncate flex-1">${_htmlEsc(col.assignment_name ?? '')}</span>
            <input type="number" class="sc-score-input w-16 text-center border border-gray-200 rounded-lg px-1 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              data-col="${col.id}" value="${val}" placeholder="—" />
            <span class="text-gray-400 flex-shrink-0 w-10">/ ${col.max_score}</span>
          </div>`
        }).join('')}
      </div>`
  }

  const ATT_HEX = { present: '#059669', absent: '#dc2626', late: '#f59e0b', excused: '#3b82f6', sick: '#f97316' }

  function _tabAttHTML(s) {
    const rows = (attendanceByStudent[s.id] ?? []).slice().sort((a, b) => (b.check_date ?? '').localeCompare(a.check_date ?? ''))
    if (!rows.length) return `<p class="text-center py-6 text-xs text-gray-400">ยังไม่มีข้อมูลเช็คชื่อ</p>`
    const order = ['present', 'absent', 'late', 'excused', 'sick']
    const counts = {}
    for (const r of rows) counts[r.status] = (counts[r.status] ?? 0) + 1
    const total = rows.length
    let acc = 0
    const segments = order.filter(k => counts[k]).map(k => {
      const pct = (counts[k] / total) * 100
      const seg = `${ATT_HEX[k]} ${acc}% ${acc + pct}%`
      acc += pct
      return seg
    })
    const gradient = segments.length ? `conic-gradient(${segments.join(',')})` : '#e5e7eb'
    const presentPct = Math.round(((counts.present ?? 0) / total) * 100)
    const legend = order.filter(k => counts[k]).map(k => {
      const meta = ATT_STATUS[k]
      return `<span class="px-2 py-1 rounded-full text-[11px] font-bold ${meta?.bg ?? 'bg-gray-50'} ${meta?.color ?? 'text-gray-500'}">${meta?.label ?? k} ${counts[k]}</span>`
    }).join(' ')
    const recent = rows.slice(0, 15).map(r => {
      const meta = ATT_STATUS[r.status]
      return `<div class="flex items-center justify-between px-3 py-1.5 text-xs border-b border-gray-50">
        <span class="text-gray-500">${_htmlEsc(r.check_date ?? '')} · คาบ ${r.session_number}</span>
        <span class="font-bold ${meta?.color ?? 'text-gray-500'}">${meta?.label ?? r.status}</span>
      </div>`
    }).join('')
    return `
      <div class="flex items-center gap-4 mb-3">
        <div class="relative flex-shrink-0" style="width:72px;height:72px;border-radius:50%;background:${gradient}">
          <div class="absolute" style="inset:7px;background:white;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <span class="text-sm font-bold text-gray-800">${presentPct}%</span>
            <span class="text-[8px] text-gray-400">มาเรียน</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 flex-1">${legend}</div>
      </div>
      <div class="max-h-48 overflow-y-auto border-t border-gray-100 pt-2">${recent}</div>`
  }

  function _tabLeaveHTML(s) {
    const rows = leaveHistoryByStudent[s.id] ?? []
    if (!rows.length) return `<p class="text-center py-6 text-xs text-gray-400">ไม่เคยขอออกนอกห้องในวิชานี้</p>`
    return `<div class="max-h-64 overflow-y-auto space-y-1.5">${rows.map(l => {
      const statusLabel = l.status === 'returned' ? 'กลับแล้ว' : l.status === 'overdue' ? 'เลยเวลา' : 'ยังไม่กลับ'
      const statusCls = l.status === 'returned' ? 'text-emerald-600' : l.status === 'overdue' ? 'text-red-600' : 'text-amber-600'
      return `<div class="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-gray-700">${_htmlEsc(l.reason ?? '')}</span>
          <span class="font-bold ${statusCls}">${statusLabel}</span>
        </div>
        <div class="text-gray-400 mt-0.5">${new Date(l.created_at).toLocaleString('th-TH', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} · ขออนุญาต ${l.allowed_duration} นาที</div>
      </div>`
    }).join('')}</div>`
  }

  function _openStudentPanel(initialStudent) {
    document.getElementById('sc-student-modal')?.remove()
    let activeTab = 'info'
    let s = initialStudent
    const m = document.createElement('div')
    m.id = 'sc-student-modal'
    m.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
    document.body.appendChild(m)

    const _renderPanel = () => {
      const leave = activeLeaveMap[s.id]
      const idx = students.findIndex(x => x.id === s.id)
      m.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[88vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0">
            <div class="flex items-center gap-3">
              <button id="sc-sp-prev" ${idx <= 0 ? 'disabled' : ''} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl flex-shrink-0">
                ${s.image_url ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover"/>` : _htmlEsc((s.full_name ?? '?').charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate">${_htmlEsc(s.full_name ?? '—')}</p>
                <p class="text-xs text-gray-400">${_htmlEsc(s.student_code ?? '')} · ${_htmlEsc(s.main_room ?? '')} · เลขที่ ${seatNoByStudent.get(s.id) ?? '—'}</p>
              </div>
              <button id="sc-sp-next" ${idx >= students.length - 1 ? 'disabled' : ''} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sc-sp-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sc-sp-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sc-sp-jump" type="number" min="1" max="${students.length}" value="${seatNoByStudent.get(s.id) ?? ''}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${students.length}</span>
            </div>
          </div>
          <div class="px-5 pb-3 flex-shrink-0">
            <div class="sc-tabbar w-full">
              ${SC_TABS.map(t => `<button data-tab="${t.key}" class="sc-sp-tab sc-tab-pill ${activeTab === t.key ? 'active' : ''}">${t.label}</button>`).join('')}
            </div>
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${activeTab === 'info' ? _tabInfoHTML(s) : activeTab === 'score' ? _tabScoreHTML(s) : activeTab === 'att' ? _tabAttHTML(s) : _tabLeaveHTML(s)}
          </div>
        </div>`

      m.querySelector('#sc-sp-close').addEventListener('click', () => m.remove())
      m.querySelector('#sc-sp-prev')?.addEventListener('click', () => { if (idx > 0) { s = students[idx - 1]; activeTab = 'info'; _renderPanel() } })
      m.querySelector('#sc-sp-next')?.addEventListener('click', () => { if (idx < students.length - 1) { s = students[idx + 1]; activeTab = 'info'; _renderPanel() } })
      const _jumpToSeat = () => {
        const jumpInput = m.querySelector('#sc-sp-jump')
        const n = parseInt(jumpInput.value, 10)
        const target = studentBySeatNo.get(n)
        if (!target) { showToast(`ไม่พบเลขที่ ${jumpInput.value}`, 'warning'); jumpInput.value = seatNoByStudent.get(s.id) ?? ''; return }
        if (target.id === s.id) return
        s = target; activeTab = 'info'; _renderPanel()
      }
      m.querySelector('#sc-sp-jump')?.addEventListener('change', _jumpToSeat)
      m.querySelector('#sc-sp-jump')?.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); _jumpToSeat() } })
      m.querySelectorAll('.sc-sp-tab').forEach(b => b.addEventListener('click', () => { activeTab = b.dataset.tab; _renderPanel() }))
      m.querySelectorAll('.sc-score-input').forEach(input => {
        input.addEventListener('change', async () => {
          const colId = parseInt(input.dataset.col, 10)
          const raw = input.value.trim()
          input.disabled = true
          try {
            await saveStudentScore(classId, s.id, colId, raw === '' ? null : raw)
            const list = (scoresByStudent[s.id] ??= [])
            const existing = list.find(r => r.score_column_id === colId)
            const numVal = raw === '' ? null : parseFloat(raw)
            if (existing) existing.score = numVal
            else list.push({ student_id: s.id, score_column_id: colId, score: numVal })
            showToast('บันทึกคะแนนแล้ว', 'success')
            _renderPanel()
          } catch (err) {
            showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
            input.disabled = false
          }
        })
      })
      m.querySelector('#sc-sp-return')?.addEventListener('click', async () => {
        const leaveNow = activeLeaveMap[s.id]
        try { await closeLeavePermission(leaveNow.id, 'returned'); showToast('บันทึกกลับเข้าห้องแล้ว', 'success'); m.remove(); _reload() }
        catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
      })
      m.querySelector('#sc-sp-leave')?.addEventListener('click', () => {
        const activeOutCount = Object.keys(activeLeaveMap).length
        if (activeOutCount >= leaveMaxActive) {
          showToast(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${leaveMaxActive} คนแล้ว`, 'warning')
          return
        }
        m.remove()
        _openLeaveRequestModal(teacher, cls, s.id, s.full_name, s.image_url, activeLeaveMap, leaveMaxActive, () => _reload())
      })
      m.querySelector('#sc-sp-quiz-monitor')?.addEventListener('click', () => { if (liveQuiz) openQuizMonitor(liveQuiz) })
      m.querySelector('#sc-sp-unlock')?.addEventListener('click', (e) => {
        const attemptId = e.target.dataset.attempt
        _openQuizUnlockChoice(attemptId, () => { m.remove(); _reload() })
      })
    }
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    _renderPanel()
  }

  // ปลดล็อกนักเรียนที่ถูกล็อกจากการทำผิดกติกาสอบ — ทางเลือกเดียวกับในหน้าจัดการสอบสดแบบเต็ม
  function _openQuizUnlockChoice(attemptId, onDone) {
    const um = document.createElement('div')
    um.className = 'fixed inset-0 z-[97] bg-black/40 flex items-center justify-center p-4'
    um.innerHTML = `
      <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
        <div class="text-4xl mb-3">🔓</div>
        <h3 class="font-bold text-gray-800 text-lg mb-2">ปลดล็อกนักเรียนคนนี้</h3>
        <p class="text-sm text-gray-500 mb-5">เลือกวิธีที่ต้องการให้นักเรียนทำต่อ</p>
        <div class="space-y-2">
          <button id="qu-resume" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">▶️ ทำต่อจากจุดเดิม</button>
          <button id="qu-restart" class="sc-btn-dark w-full py-3 rounded-2xl font-bold text-sm">🔄 เริ่มใหม่ทั้งชุด</button>
          <button id="qu-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ยกเลิก</button>
        </div>
      </div>`
    document.body.appendChild(um)
    um.querySelector('#qu-cancel').addEventListener('click', () => um.remove())
    const doUnlock = async (mode) => {
      um.remove()
      try {
        await rpcUnlockAttempt(attemptId, mode)
        showToast(mode === 'resume' ? 'ปลดล็อก — ทำต่อจากจุดเดิมแล้ว' : 'ปลดล็อก — เริ่มชุดใหม่แล้ว', 'success')
        onDone?.()
      } catch (err) { showToast('ปลดล็อกไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    }
    um.querySelector('#qu-resume').addEventListener('click', () => doUnlock('resume'))
    um.querySelector('#qu-restart').addEventListener('click', () => doUnlock('restart'))
  }

  // ── Wiring: hall pass list return buttons + quota ────────────────────────
  document.getElementById('sc-pass-list').addEventListener('click', async e => {
    const btn = e.target.closest('.sc-return-btn')
    if (!btn) return
    try { await closeLeavePermission(btn.dataset.lid, 'returned'); showToast('บันทึกกลับเข้าห้องแล้ว', 'success'); _reload() }
    catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
  })
  document.getElementById('sc-leave-quota').addEventListener('click', () => {
    _openLeaveQuotaModal(cls, leaveMaxActive, leaveMaxPerWeek, () => _reload())
  })

  // ── Wiring: timer / randomizer ───────────────────────────────────────────
  document.getElementById('sc-timer').addEventListener('click', () => openTimerModal(classId, cls, isDonorTeacher))
  document.getElementById('sc-random').addEventListener('click', () => {
    const rosterWithSeats = students.map((s, i) => ({ ...s, seat_no: i + 1 }))
    _openRandomPickerModal(classId, cls, rosterWithSeats, isDonorTeacher)
  })

  // ── Wiring: QR scanners / dashboard ───────────────────────────────────────
  document.getElementById('sc-scan-att').addEventListener('click', () => openAttendanceScanSetup(teacher))
  document.getElementById('sc-scan-score').addEventListener('click', () => openScoreScanner({ classId, className: cls.class_name }))
  document.getElementById('sc-dashboard').addEventListener('click', () => openClassDashboard(classId, cls, window._pp5DonorTierIndex ?? 0, cfg))

  // ── Wiring: quiz launch / ประวัติ-สถิติ ───────────────────────────────────
  document.getElementById('sc-quiz-list').addEventListener('click', async e => {
    const startBtn = e.target.closest('.sc-quiz-start')
    const monitorBtn = e.target.closest('.sc-quiz-monitor')
    const closeBtn = e.target.closest('.sc-quiz-close')
    const analyticsBtn = e.target.closest('.sc-quiz-analytics')
    if (startBtn) {
      try { await startQuizLive(startBtn.dataset.qid); showToast('เริ่มควิซให้ห้องนี้แล้ว 🧠', 'success'); _reload() }
      catch (err) { showToast('เริ่มควิซไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    } else if (monitorBtn) {
      const q = quizzes.find(x => x.id === monitorBtn.dataset.qid)
      if (q) openQuizMonitor(q)
    } else if (closeBtn) {
      try { await closeQuiz(closeBtn.dataset.qid); showToast('ปิดสอบแล้ว', 'success'); _reload() }
      catch (err) { showToast('ปิดสอบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    } else if (analyticsBtn) {
      const q = quizzes.find(x => x.id === analyticsBtn.dataset.qid)
      if (q) openQuizAnalytics(q)
    }
  })

  // ── Wiring: สร้างประกาศ (เด้งฟอร์มในโมดัล) ────────────────────────────────
  document.getElementById('sc-add-announcement').addEventListener('click', () => _openCreateAnnouncementModal())

  function _openCreateAnnouncementModal() {
    document.getElementById('sc-ann-modal')?.remove()
    let selectedType = null
    const m = document.createElement('div')
    m.id = 'sc-ann-modal'
    m.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📣 สร้างประกาศ — ${_htmlEsc(cls.class_name ?? '')}</h3>
          <button id="ca-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ข้อความประกาศ *</label>
          <textarea id="ca-text" rows="3" placeholder="เช่น พรุ่งนี้เตรียมสมุดการบ้านมาส่งด้วยนะ"
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ประเภทประกาศ</label>
          <div id="ca-type-chips" class="flex flex-wrap gap-1.5 mb-2">
            ${ANN_TYPE_PRESETS.map(t => `<button type="button" data-emoji="${t.emoji}" data-label="${_htmlEsc(t.label)}" class="ca-type-chip px-2.5 py-1.5 rounded-full text-xs font-semibold border border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50 transition">${t.emoji} ${t.label}</button>`).join('')}
          </div>
          <input id="ca-type-custom" type="text" list="ca-type-list" placeholder="หรือพิมพ์ประเภทใหม่เอง..."
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          <datalist id="ca-type-list">${annTypeSuggestions.map(t => `<option value="${_htmlEsc(t)}"></option>`).join('')}</datalist>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">แนบไฟล์/รูปภาพ (เลือกได้หลายไฟล์ ไม่บังคับ)</label>
          <input id="ca-files" type="file" multiple class="w-full text-xs" />
        </div>
        <button id="ca-send" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">ส่งประกาศ</button>
      </div>`
    document.body.appendChild(m)
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#ca-close').addEventListener('click', () => m.remove())

    const customInput = m.querySelector('#ca-type-custom')
    m.querySelectorAll('.ca-type-chip').forEach(chip => chip.addEventListener('click', () => {
      selectedType = `${chip.dataset.emoji} ${chip.dataset.label}`
      customInput.value = ''
      m.querySelectorAll('.ca-type-chip').forEach(c => c.classList.remove('border-amber-400', 'bg-amber-100', 'text-amber-800'))
      chip.classList.add('border-amber-400', 'bg-amber-100', 'text-amber-800')
    }))
    customInput.addEventListener('input', () => {
      if (customInput.value.trim()) {
        selectedType = null
        m.querySelectorAll('.ca-type-chip').forEach(c => c.classList.remove('border-amber-400', 'bg-amber-100', 'text-amber-800'))
      }
    })

    m.querySelector('#ca-send').addEventListener('click', async () => {
      const text = m.querySelector('#ca-text').value.trim()
      if (!text) { showToast('พิมพ์ข้อความก่อนส่งนะ', 'warning'); return }
      const annType = customInput.value.trim() || selectedType || `${ANN_TYPE_PRESETS[0].emoji} ${ANN_TYPE_PRESETS[0].label}`
      const btn = m.querySelector('#ca-send')
      btn.disabled = true; btn.textContent = 'กำลังส่ง...'
      try {
        const files = [...(m.querySelector('#ca-files').files ?? [])]
        const attachments = []
        for (const f of files) attachments.push(await uploadAssignmentFile(f, `class-${classId}/announcements`))
        await createAnnouncement({ title: `📣 ${cls.class_name}`, body: text, isActive: true, teacherId: teacher.id, targetClassIds: [classId], annType, attachmentUrls: attachments.length ? attachments : null })
        _sendClassPush(`${annType} — ${cls.class_name}`, text.slice(0, 120), 'sc-announcement')
        showToast('ส่งประกาศถึงห้องนี้แล้ว 📣', 'success')
        m.remove()
        _reload()
      } catch (err) {
        showToast('ส่งไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'ส่งประกาศ'
      }
    })
  }

  // ── Wiring: แท็บโซนอ้างอิง (ตารางเรียน/คิวสอบ/กำหนดการสอน/แผนการสอน/งานที่มอบหมาย) ──
  // แต่ละแท็บ render แค่ตัวเองใน #sc-reftab-body ทีละแท็บ ต้อง wire ใหม่ทุกครั้งที่สลับแท็บ
  let _schedMode = 'daily'

  function _paintRefTabs() {
    document.querySelectorAll('.sc-reftab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.reftab === _refTab)
    })
  }

  function _wireRefTabBody() {
    document.querySelectorAll('.sc-sched-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.sched === _schedMode)
      b.addEventListener('click', () => {
        _schedMode = b.dataset.sched
        document.querySelectorAll('.sc-sched-tab').forEach(x => x.classList.toggle('active', x.dataset.sched === _schedMode))
        document.getElementById('sc-schedule-body').innerHTML = _scheduleHTML(_schedMode)
      })
    })
    document.getElementById('sc-add-syllabus')?.addEventListener('click', () => _openSyllabusItemModal())
    document.getElementById('sc-syllabus-list')?.addEventListener('click', e => {
      const row = e.target.closest('.sc-syllabus-row')
      if (!row) return
      const it = syllabusItems.find(x => x.id === parseInt(row.dataset.sylid, 10))
      if (it) _openSyllabusItemModal(it)
    })
    document.getElementById('sc-add-plan')?.addEventListener('click', () => _openLessonPlanModal())
    document.getElementById('sc-plan-list')?.addEventListener('click', e => {
      const reflectBtn = e.target.closest('.sc-plan-reflect')
      const row = e.target.closest('.sc-plan-row')
      if (reflectBtn) {
        const p = lessonPlans.find(x => x.id === parseInt(reflectBtn.dataset.planid, 10))
        if (p) _openReflectionModal(p)
      } else if (row) {
        const p = lessonPlans.find(x => x.id === parseInt(row.dataset.planid, 10))
        if (p) _openLessonPlanModal(p)
      }
    })
    document.getElementById('sc-add-assignment')?.addEventListener('click', () => _openAssignmentModal())
    document.getElementById('sc-assignment-list')?.addEventListener('click', e => {
      const row = e.target.closest('.sc-assignment-row')
      if (!row) return
      const a = assignments.find(x => x.id === parseInt(row.dataset.aid, 10))
      if (a) _openAssignmentTrackingModal(a)
    })
  }
  _wireRefTabBody()

  document.getElementById('sc-reftabs-bar').addEventListener('click', e => {
    const btn = e.target.closest('.sc-reftab-btn')
    if (!btn || btn.dataset.reftab === _refTab) return
    _refTab = btn.dataset.reftab
    _paintRefTabs()
    document.getElementById('sc-reftab-body').innerHTML = _refTabBodyHTML(_refTab)
    _wireRefTabBody()
  })

  function _openSyllabusItemModal(item) {
    document.getElementById('sc-syllabus-modal')?.remove()
    const isEdit = !!item
    const it = item ?? {}
    const m = document.createElement('div')
    m.id = 'sc-syllabus-modal'
    m.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">${isEdit ? '📘 แก้ไขหัวข้อสอน' : '➕ เพิ่มหัวข้อสอน'}</h3>
          <div class="flex items-center gap-2">
            ${isEdit ? `<button id="sy-delete" class="text-[11px] text-red-400 hover:text-red-600">🗑️ ลบ</button>` : ''}
            <button id="sy-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์เริ่ม *</label>
            <input id="sy-week-start" type="number" min="1" value="${it.week_start ?? ''}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์สิ้นสุด *</label>
            <input id="sy-week-end" type="number" min="1" value="${it.week_end ?? ''}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">หัวข้อ/เรื่องที่สอน *</label>
          <input id="sy-topic" type="text" value="${_htmlEsc(it.topic ?? '')}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียดเพิ่มเติม</label>
          <textarea id="sy-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none">${_htmlEsc(it.description ?? '')}</textarea>
        </div>
        <button id="sy-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">บันทึก</button>
      </div>`
    document.body.appendChild(m)
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#sy-close').addEventListener('click', () => m.remove())
    m.querySelector('#sy-delete')?.addEventListener('click', async () => {
      if (!confirm('ลบหัวข้อนี้?')) return
      try { await deleteSyllabusItem(it.id); showToast('ลบแล้ว', 'success'); m.remove(); _reload() }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
    m.querySelector('#sy-save').addEventListener('click', async () => {
      const weekStart = parseInt(m.querySelector('#sy-week-start').value, 10)
      const weekEnd = parseInt(m.querySelector('#sy-week-end').value, 10)
      const topic = m.querySelector('#sy-topic').value.trim()
      if (!weekStart || !weekEnd || weekEnd < weekStart) { showToast('กำหนดช่วงสัปดาห์ให้ถูกต้อง', 'warning'); return }
      if (!topic) { showToast('กรอกหัวข้อก่อนนะ', 'warning'); return }
      const btn = m.querySelector('#sy-save')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      const payload = { course_id: courseId, week_start: weekStart, week_end: weekEnd, topic, description: m.querySelector('#sy-desc').value.trim() || null }
      try {
        if (isEdit) await updateSyllabusItem(it.id, payload)
        else await createSyllabusItem(payload)
        showToast('บันทึกแล้ว ✅', 'success')
        m.remove(); _reload()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
    })
  }

  function _openLessonPlanModal(plan) {
    document.getElementById('sc-plan-modal')?.remove()
    const isEdit = !!plan
    const p = plan ?? {}
    const m = document.createElement('div')
    m.id = 'sc-plan-modal'
    m.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">${isEdit ? '📝 แก้ไขแผนการสอน' : '➕ สร้างแผนการสอนใหม่'}</h3>
          <div class="flex items-center gap-2">
            ${isEdit ? `<button id="lp-delete" class="text-[11px] text-red-400 hover:text-red-600">🗑️ ลบ</button>` : ''}
            <button id="lp-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ชื่อแผน *</label>
          <input id="lp-title" type="text" value="${_htmlEsc(p.title ?? '')}" placeholder="เช่น แผนที่ 1 — เรื่องสมการเชิงเส้น" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์เริ่ม *</label>
            <input id="lp-week-start" type="number" min="1" value="${p.week_start ?? ''}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์สิ้นสุด *</label>
            <input id="lp-week-end" type="number" min="1" value="${p.week_end ?? ''}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
          </div>
        </div>
        ${[
          ['objectives', 'จุดประสงค์การเรียนรู้'], ['key_concept', 'สาระสำคัญ'],
          ['activities_intro', 'นำเข้าสู่บทเรียน'], ['activities_main', 'กิจกรรมหลัก'], ['activities_wrap', 'สรุป'],
          ['media', 'สื่อ/อุปกรณ์'], ['assessment', 'การวัดประเมินผล'], ['homework', 'งาน/การบ้าน'], ['teacher_notes', 'หมายเหตุครู'],
        ].map(([key, label]) => `
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">${label}</label>
          <textarea id="lp-${key}" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none">${_htmlEsc(p[key] ?? '')}</textarea>
        </div>`).join('')}
        <button id="lp-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">บันทึกแผน</button>
      </div>`
    document.body.appendChild(m)
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#lp-close').addEventListener('click', () => m.remove())
    m.querySelector('#lp-delete')?.addEventListener('click', async () => {
      if (!confirm(`ลบแผน "${p.title}"? บันทึกหลังสอน/ลายเซ็นที่ผูกกับแผนนี้จะหายไปด้วย`)) return
      try { await deleteLessonPlan(p.id); showToast('ลบแผนแล้ว', 'success'); m.remove(); _reload() }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
    m.querySelector('#lp-save').addEventListener('click', async () => {
      const title = m.querySelector('#lp-title').value.trim()
      const weekStart = parseInt(m.querySelector('#lp-week-start').value, 10)
      const weekEnd = parseInt(m.querySelector('#lp-week-end').value, 10)
      if (!title) { showToast('กรอกชื่อแผนก่อนนะ', 'warning'); return }
      if (!weekStart || !weekEnd || weekEnd < weekStart) { showToast('กำหนดช่วงสัปดาห์ให้ถูกต้อง', 'warning'); return }
      const btn = m.querySelector('#lp-save')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      const payload = {
        course_id: courseId,
        teacher_id: teacher.id,
        title, week_start: weekStart, week_end: weekEnd,
        objectives: m.querySelector('#lp-objectives').value.trim() || null,
        key_concept: m.querySelector('#lp-key_concept').value.trim() || null,
        activities_intro: m.querySelector('#lp-activities_intro').value.trim() || null,
        activities_main: m.querySelector('#lp-activities_main').value.trim() || null,
        activities_wrap: m.querySelector('#lp-activities_wrap').value.trim() || null,
        media: m.querySelector('#lp-media').value.trim() || null,
        assessment: m.querySelector('#lp-assessment').value.trim() || null,
        homework: m.querySelector('#lp-homework').value.trim() || null,
        teacher_notes: m.querySelector('#lp-teacher_notes').value.trim() || null,
      }
      try {
        if (isEdit) await updateLessonPlan(p.id, payload)
        else await createLessonPlan(payload)
        showToast('บันทึกแผนแล้ว ✅', 'success')
        m.remove(); _reload()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึกแผน'
      }
    })
  }

  // บันทึกหลังสอน + เซ็นชื่อ — ผูกกับห้องจริง(classId)+สัปดาห์จริงที่สอน ไม่ใช่ระดับรายวิชา
  // เพราะครูคนเดียวกันอาจสอนวิชานี้หลายห้อง แต่ละห้องสอนไปถึงจุดไหนไม่เท่ากัน
  function _openReflectionModal(plan) {
    document.getElementById('sc-reflect-modal')?.remove()
    const m = document.createElement('div')
    m.id = 'sc-reflect-modal'
    m.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
    document.body.appendChild(m)

    const weekOptions = []
    for (let w = plan.week_start; w <= plan.week_end; w++) weekOptions.push(w)
    let selectedWeek = (curWeek >= plan.week_start && curWeek <= plan.week_end) ? curWeek : plan.week_start

    const _render = async () => {
      const reflection = await getLessonPlanReflection(plan.id, classId, selectedWeek).catch(() => null)
      let hasDrawn = false
      let clearedSig = false
      m.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-gray-800 text-sm">🖊️ บันทึกหลังสอน — ${_htmlEsc(plan.title)}</h3>
            <button id="rf-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">สัปดาห์ที่สอน</label>
            <select id="rf-week" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
              ${weekOptions.map(w => `<option value="${w}" ${w === selectedWeek ? 'selected' : ''}>สัปดาห์ที่ ${w}${w === curWeek ? ' (สัปดาห์นี้)' : ''}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">บันทึกหลังสอน</label>
            <textarea id="rf-text" rows="4" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300">${_htmlEsc(reflection?.reflection_text ?? '')}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ปัญหา/แนวทางแก้ไข</label>
            <textarea id="rf-issues" rows="3" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300">${_htmlEsc(reflection?.issues_solutions ?? '')}</textarea>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ลายเซ็นผู้สอน (วาดด้วยนิ้ว/เมาส์)</label>
            <div class="border border-gray-200 rounded-xl bg-gray-50 relative overflow-hidden">
              <canvas id="rf-sig-canvas" width="380" height="150" class="w-full block" style="touch-action:none;cursor:crosshair"></canvas>
              ${reflection?.signature_data_url ? `<img id="rf-sig-preview" src="${reflection.signature_data_url}" class="absolute inset-0 w-full h-full object-contain pointer-events-none" />` : ''}
            </div>
            <div class="flex items-center gap-2 mt-1.5">
              <button id="rf-sig-clear" type="button" class="text-[11px] font-semibold text-red-500 hover:text-red-700">🗑️ ล้างลายเซ็น</button>
              ${reflection?.signed_at ? `<span class="text-[10px] text-gray-400">เซ็นล่าสุด: ${new Date(reflection.signed_at).toLocaleString('th-TH', { day: 'numeric', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>` : ''}
            </div>
          </div>
          <button id="rf-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">บันทึก</button>
        </div>`

      m.querySelector('#rf-close').addEventListener('click', () => m.remove())
      m.querySelector('#rf-week').addEventListener('change', (e) => { selectedWeek = parseInt(e.target.value, 10); _render() })

      const canvas = m.querySelector('#rf-sig-canvas')
      const preview = m.querySelector('#rf-sig-preview')
      const ctx = canvas.getContext('2d')
      ctx.strokeStyle = '#1f2937'
      ctx.lineWidth = 2.5
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      let drawing = false
      let lastX = 0, lastY = 0
      const _pos = (e) => {
        const rect = canvas.getBoundingClientRect()
        const cx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
        const cy = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top
        return { x: cx * (canvas.width / rect.width), y: cy * (canvas.height / rect.height) }
      }
      const _start = (e) => {
        e.preventDefault()
        preview?.remove()
        drawing = true; hasDrawn = true
        const pt = _pos(e); lastX = pt.x; lastY = pt.y
      }
      const _move = (e) => {
        if (!drawing) return
        e.preventDefault()
        const pt = _pos(e)
        ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(pt.x, pt.y); ctx.stroke()
        lastX = pt.x; lastY = pt.y
      }
      const _end = () => { drawing = false }
      canvas.addEventListener('mousedown', _start)
      canvas.addEventListener('mousemove', _move)
      canvas.addEventListener('mouseup', _end)
      canvas.addEventListener('mouseleave', _end)
      canvas.addEventListener('touchstart', _start, { passive: false })
      canvas.addEventListener('touchmove', _move, { passive: false })
      canvas.addEventListener('touchend', _end)

      m.querySelector('#rf-sig-clear').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        preview?.remove()
        hasDrawn = false
        clearedSig = true
      })

      m.querySelector('#rf-save').addEventListener('click', async () => {
        const btn = m.querySelector('#rf-save')
        btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
        try {
          const finalSig = hasDrawn ? canvas.toDataURL('image/png') : (clearedSig ? null : (reflection?.signature_data_url ?? null))
          await upsertLessonPlanReflection({
            lesson_plan_id: plan.id,
            class_id: classId,
            teacher_id: teacher.id,
            week_no: selectedWeek,
            reflection_text: m.querySelector('#rf-text').value.trim() || null,
            issues_solutions: m.querySelector('#rf-issues').value.trim() || null,
            signature_data_url: finalSig,
            signed_at: finalSig ? new Date().toISOString() : null,
          })
          showToast('บันทึกแล้ว ✅', 'success')
          m.remove()
        } catch (err) {
          showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          btn.disabled = false; btn.textContent = 'บันทึก'
        }
      })
    }
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    _render()
  }

  const _toLocalDatetimeValue = (isoStr) => {
    if (!isoStr) return ''
    const d = new Date(isoStr)
    const pad = n => String(n).padStart(2, '0')
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
  }

  function _openAssignmentModal(assignment) {
    document.getElementById('sc-assign-modal')?.remove()
    const isEdit = !!assignment
    const a = assignment ?? {}
    let keptAttachments = [...(a.attachment_urls ?? [])]
    const m = document.createElement('div')
    m.id = 'sc-assign-modal'
    m.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">${isEdit ? '✏️ แก้ไขงาน' : '➕ สั่งงานใหม่'}</h3>
          <div class="flex items-center gap-2">
            ${isEdit ? `<button id="sa-delete" class="text-[11px] text-red-400 hover:text-red-600">🗑️ ลบ</button>` : ''}
            <button id="sa-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ชื่องาน *</label>
          <input id="sa-title" type="text" value="${_htmlEsc(a.title ?? '')}" placeholder="เช่น ใบงานที่ 3 — สมการเชิงเส้น" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">รายละเอียด</label>
          <textarea id="sa-desc" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300">${_htmlEsc(a.description ?? '')}</textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ไฟล์แนบ${isEdit ? '' : '/รูปภาพ (เลือกได้หลายไฟล์)'}</label>
          <div id="sa-kept-files" class="flex flex-wrap gap-1.5 mb-1.5"></div>
          <input id="sa-files" type="file" multiple class="w-full text-xs" />
          ${isEdit ? `<p class="text-[10px] text-gray-400 mt-1">ไฟล์ใหม่ที่แนบเพิ่มจะรวมกับไฟล์เดิมที่เหลือด้านบน</p>` : ''}
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">ผูกกับคอลัมน์คะแนน</label>
          <select id="sa-col" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
            <option value="">— ไม่ผูกกับคะแนน —</option>
            ${scoreColumns.map(c => `<option value="${c.id}" ${a.score_column_id === c.id ? 'selected' : ''}>${_htmlEsc(c.assignment_name)} (เต็ม ${c.max_score})</option>`).join('')}
          </select>
        </div>
        <div id="sa-write-mode-wrap" class="hidden space-y-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">คะแนนเต็มของงานนี้</label>
            <input id="sa-max-score" type="number" min="0" step="0.5" value="${a.max_score ?? ''}" placeholder="ไม่ระบุ = ใช้คะแนนเต็มของคอลัมน์คะแนน" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <p class="text-[10px] text-gray-400 mt-1">เผื่อคอลัมน์เดียวกันสะสมคะแนนจากหลายงาน แต่แต่ละงานเต็มไม่เท่ากัน (เช่น คอลัมน์เต็ม 100 แต่ใบงานนี้เต็มแค่ 5)</p>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว ให้ทำอย่างไร</label>
            <select id="sa-write-mode" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
              ${Object.entries(ASSIGN_WRITE_MODE_LABEL).map(([v, mo]) => `<option value="${v}" ${(a.score_write_mode ?? 'overwrite') === v ? 'selected' : ''}>${mo.label}</option>`).join('')}
            </select>
            <p id="sa-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">กำหนดส่ง</label>
          <input id="sa-due" type="datetime-local" value="${_toLocalDatetimeValue(a.due_at)}" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">หักคะแนนกรณีส่งช้า</label>
          <div class="flex gap-2 mb-1.5">
            <select id="sa-penalty-mode" class="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white">
              <option value="none" ${(a.late_penalty_mode ?? 'none') === 'none' ? 'selected' : ''}>ไม่หัก</option>
              <option value="flat" ${a.late_penalty_mode === 'flat' ? 'selected' : ''}>หักครั้งเดียว (คงที่)</option>
              <option value="per_day" ${a.late_penalty_mode === 'per_day' ? 'selected' : ''}>หักตามจำนวนวันที่ช้า</option>
            </select>
            <input id="sa-penalty-value" type="number" min="0" step="0.1" placeholder="0" value="${a.late_penalty_value ?? ''}" ${(a.late_penalty_mode ?? 'none') === 'none' ? 'disabled' : ''} class="w-24 text-sm text-center border border-gray-200 rounded-xl px-2 py-2 ${(a.late_penalty_mode ?? 'none') === 'none' ? 'bg-gray-50' : ''}" />
          </div>
          <p id="sa-penalty-hint" class="text-[10px] text-gray-400"></p>
        </div>
        <button id="sa-save" class="sc-btn-dark w-full py-2.5 rounded-xl text-sm font-bold">${isEdit ? 'บันทึกการแก้ไข' : 'บันทึกงาน'}</button>
      </div>`
    document.body.appendChild(m)
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#sa-close').addEventListener('click', () => m.remove())
    m.querySelector('#sa-delete')?.addEventListener('click', async () => {
      if (!confirm(`ลบงาน "${a.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`)) return
      try { await deleteAssignment(a.id); showToast('ลบงานแล้ว', 'success'); m.remove(); _reload() }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })

    const keptWrap = m.querySelector('#sa-kept-files')
    const _paintKeptFiles = () => {
      keptWrap.innerHTML = keptAttachments.map((f, i) => `
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${_htmlEsc(f.name)}
          <button type="button" class="sa-remove-file text-indigo-400 hover:text-red-500 font-bold" data-i="${i}">✕</button>
        </span>`).join('')
      keptWrap.querySelectorAll('.sa-remove-file').forEach(btn => btn.addEventListener('click', () => {
        keptAttachments.splice(parseInt(btn.dataset.i, 10), 1)
        _paintKeptFiles()
      }))
    }
    _paintKeptFiles()

    const modeSel = m.querySelector('#sa-penalty-mode')
    const valInput = m.querySelector('#sa-penalty-value')
    const hint = m.querySelector('#sa-penalty-hint')
    modeSel.addEventListener('change', () => {
      valInput.disabled = modeSel.value === 'none'
      if (!valInput.disabled) valInput.classList.remove('bg-gray-50')
      else { valInput.classList.add('bg-gray-50'); valInput.value = '' }
      hint.textContent = modeSel.value === 'flat' ? 'หักคะแนนเท่านี้ทันทีถ้าส่งช้า ไม่ว่าจะช้ากี่วัน'
        : modeSel.value === 'per_day' ? 'หักคะแนนเท่านี้ต่อวันที่ส่งช้า (คูณตามจำนวนวัน)'
        : ''
    })

    const colSelect = m.querySelector('#sa-col')
    const writeModeWrap = m.querySelector('#sa-write-mode-wrap')
    const writeModeSelect = m.querySelector('#sa-write-mode')
    const writeModeHint = m.querySelector('#sa-write-mode-hint')
    const syncWriteModeUI = () => {
      writeModeWrap.classList.toggle('hidden', !colSelect.value)
      writeModeHint.textContent = ASSIGN_WRITE_MODE_LABEL[writeModeSelect.value]?.hint ?? ''
    }
    colSelect.addEventListener('change', syncWriteModeUI)
    writeModeSelect.addEventListener('change', syncWriteModeUI)
    syncWriteModeUI()

    m.querySelector('#sa-save').addEventListener('click', async () => {
      const title = m.querySelector('#sa-title').value.trim()
      if (!title) { showToast('กรอกชื่องานก่อนนะ', 'warning'); return }
      const btn = m.querySelector('#sa-save')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        const files = [...(m.querySelector('#sa-files').files ?? [])]
        const newAttachments = []
        for (const f of files) newAttachments.push(await uploadAssignmentFile(f, `class-${classId}`))
        const dueVal = m.querySelector('#sa-due').value
        const maxScoreVal = m.querySelector('#sa-max-score').value.trim()
        const payload = {
          score_column_id: colSelect.value ? parseInt(colSelect.value, 10) : null,
          title,
          description: m.querySelector('#sa-desc').value.trim() || null,
          attachment_urls: [...keptAttachments, ...newAttachments],
          due_at: dueVal ? new Date(dueVal).toISOString() : null,
          late_penalty_mode: modeSel.value,
          late_penalty_value: parseFloat(valInput.value) || 0,
          score_write_mode: writeModeSelect.value,
          max_score: maxScoreVal === '' ? null : parseFloat(maxScoreVal),
        }
        if (isEdit) {
          await updateAssignment(a.id, payload)
          showToast('บันทึกการแก้ไขแล้ว ✅', 'success')
        } else {
          await createAssignment({ ...payload, class_id: classId, teacher_id: teacher.id })
          _sendClassPush(`📚 งานใหม่ — ${cls.class_name}`, title, 'sc-assignment')
          showToast('สั่งงานสำเร็จ ✅', 'success')
        }
        m.remove()
        _reload()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = isEdit ? 'บันทึกการแก้ไข' : 'บันทึกงาน'
      }
    })
  }

  function _openAssignmentTrackingModal(a) {
    document.getElementById('sc-track-modal')?.remove()
    const subByStudent = Object.fromEntries(a.submissions.map(s => [s.student_id, s]))
    const col = scoreColumns.find(c => c.id === a.score_column_id)
    const m = document.createElement('div')
    m.id = 'sc-track-modal'
    m.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col animate-fade">
        <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="font-bold text-gray-800 truncate">${_htmlEsc(a.title)}</p>
              <p class="text-xs text-gray-400 mt-0.5">${a.description ? _htmlEsc(a.description) + ' · ' : ''}กำหนดส่ง ${_fmtDueDate(a.due_at)}</p>
              ${a.attachment_urls?.length ? `<div class="flex flex-wrap gap-1.5 mt-2">${a.attachment_urls.map(f => `<a href="${_htmlEsc(f.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${_htmlEsc(f.name)}</a>`).join('')}</div>` : ''}
            </div>
            <div class="flex gap-2 flex-shrink-0">
              <button id="st-edit" class="text-[11px] text-indigo-500 hover:text-indigo-700 px-2 py-1">✏️ แก้ไข</button>
              <button id="st-delete" class="text-[11px] text-red-400 hover:text-red-600 px-2 py-1">🗑️ ลบ</button>
              <button id="st-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
            </div>
          </div>
          <div class="flex items-center justify-between mt-2 gap-2">
            <p class="text-[11px] text-gray-400 flex-shrink-0">${a.submissions.length}/${students.length} ส่งแล้ว</p>
            <label class="flex items-center gap-1.5 text-[11px] text-gray-500 cursor-pointer select-none">
              <input id="st-sort-toggle" type="checkbox" class="w-3.5 h-3.5 rounded accent-indigo-500" />
              เรียงตามสถานะ
            </label>
            <button id="st-review-start" class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 flex-shrink-0">🔎 ตรวจทีละคน</button>
          </div>
        </div>
        <div class="overflow-y-auto flex-1 p-5 space-y-2" id="st-row-list"></div>
      </div>`
    document.body.appendChild(m)

    const _renderRow = s => {
      const avatar = `<div class="w-7 h-7 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-[10px] flex-shrink-0">
        ${s.image_url ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover"/>` : _htmlEsc((s.full_name ?? '?').charAt(0))}
      </div>`
      const seatBadge = `<span class="text-gray-400 font-mono text-[10px] flex-shrink-0">#${seatNoByStudent.get(s.id) ?? '—'}</span>`
      const sub = subByStudent[s.id]
      if (!sub) return `<div class="sc-track-row flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs cursor-pointer hover:border-indigo-200" data-sid="${s.id}">
        <div class="flex items-center gap-2 min-w-0">
          ${avatar}
          ${seatBadge}
          <span class="font-semibold text-gray-600 truncate">${_htmlEsc(s.full_name ?? '')}</span>
        </div>
        <span class="text-gray-300 font-medium flex-shrink-0">ยังไม่ส่ง</span>
      </div>`
      const late = _isLate(a, sub.submitted_at)
      const status = _statusOf(sub)
      return `<div class="sc-track-row px-3 py-2.5 rounded-xl border ${late ? 'border-amber-200 bg-amber-50' : 'border-gray-100 bg-gray-50'} text-xs cursor-pointer hover:border-indigo-200" data-sid="${s.id}">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            ${avatar}
            ${seatBadge}
            <span class="font-semibold text-gray-700 truncate">${_htmlEsc(s.full_name ?? '')}</span>
          </div>
          <span class="text-gray-400 flex-shrink-0">${new Date(sub.submitted_at).toLocaleString('th-TH', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div class="flex items-center justify-between mt-1.5">
          ${sub.file_urls?.length ? `<div class="flex flex-wrap gap-1.5">${sub.file_urls.map(f => `<span class="text-[10px] px-2 py-1 rounded-lg bg-white border border-gray-200 text-indigo-600">📎 ${_htmlEsc(f.name)}</span>`).join('')}</div>` : '<span></span>'}
          ${_statusBadge(status)}
        </div>
        ${late ? `<p class="text-[10px] text-amber-700 font-bold mt-1.5">⏰ ส่งช้า ${_lateDays(a, sub.submitted_at)} วัน</p>` : ''}
      </div>`
    }

    let sortByStatus = false
    const _renderList = () => {
      const ordered = sortByStatus
        ? [...students].sort((x, y) => _statusRank[_statusOf(subByStudent[x.id])] - _statusRank[_statusOf(subByStudent[y.id])])
        : students
      m.querySelector('#st-row-list').innerHTML = ordered.map(_renderRow).join('')
      m.querySelectorAll('.sc-track-row').forEach(row => row.addEventListener('click', () => {
        _openAssignmentGradeCard(a, parseInt(row.dataset.sid, 10))
      }))
    }
    m._refresh = _renderList // ให้ grade card เรียก refresh ตอนปิดกลับมา (กันสถานะค้างจนต้องปิดเปิดใหม่)
    _renderList()

    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#st-close').addEventListener('click', () => m.remove())
    m.querySelector('#st-edit').addEventListener('click', () => { m.remove(); _openAssignmentModal(a) })
    m.querySelector('#st-delete').addEventListener('click', async () => {
      if (!confirm(`ลบงาน "${a.title}"? ข้อมูลการส่งของนักเรียนจะหายไปด้วย`)) return
      try { await deleteAssignment(a.id); showToast('ลบงานแล้ว', 'success'); m.remove(); _reload() }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
    m.querySelector('#st-sort-toggle').addEventListener('change', e => { sortByStatus = e.target.checked; _renderList() })
    const _firstSubmittedId = () => (students.find(s => subByStudent[s.id]) ?? students[0])?.id
    m.querySelector('#st-review-start')?.addEventListener('click', () => {
      const sid = _firstSubmittedId()
      if (sid != null) _openAssignmentGradeCard(a, sid)
    })
  }

  // สถานะต่อการส่งงาน — ใช้ร่วมกันทั้งลิสต์และการ์ดตรวจทีละคน
  const _statusOf = sub => !sub ? 'unsubmitted' : sub.status === 'rejected' ? 'rejected' : sub.hasScore ? 'graded' : sub.reviewed_at ? 'reviewed' : 'unreviewed'
  const _statusBadge = status => ({
    unreviewed: '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex-shrink-0">🔵 ยังไม่ตรวจ</span>',
    reviewed:   '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">🟡 ตรวจแล้ว ยังไม่ให้คะแนน</span>',
    graded:     '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">✅ ให้คะแนนแล้ว</span>',
    rejected:   '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 flex-shrink-0">❌ ตีกลับ รอส่งใหม่</span>',
  }[status] ?? '')
  const _statusRank = { unreviewed: 0, unsubmitted: 1, reviewed: 2, rejected: 3, graded: 4 }

  // ตัวอย่างคอมเมนต์ให้ครูเลือกแทรก (แก้ไขต่อได้หลังแทรก) — โทนให้กำลังใจ เชิงจิตวิทยาเชิงบวก
  // สอดแทรกดุอาอ์/ความหวังบารอกัตแบบพอดี ไม่ใช่ทุกประโยค
  const _FEEDBACK_TEMPLATES = {
    praise: [
      'ทำได้ดีมากครับ/ค่ะ เห็นความตั้งใจชัดเจน ขอให้อัลลอฮ์ทรงประทานบารอกัตในความพยายามของเธอนะ 🌟',
      'เก่งมากเลย ครูภูมิใจในตัวเธอ ขอดุอาอ์ให้พัฒนาต่อไปเรื่อยๆ อินชาอัลลอฮ์',
      'ยอดเยี่ยม! งานชิ้นนี้แสดงถึงความพยายามที่ดีมาก ขอให้เป็นบารอกัตติดตัวเธอไปตลอด',
      'สุดยอดค่ะ/ครับ ทำมาได้ดีมาก ครูขอดุอาอ์ให้เธอประสบความสำเร็จเสมอ',
    ],
    improve: [
      'ทำได้ดีในหลายจุดแล้วนะ ลองทบทวนอีกครั้งในส่วนที่ยังไม่สมบูรณ์ ครูเชื่อว่าเธอทำได้ดีกว่านี้ อินชาอัลลอฮ์',
      'ครูเห็นความตั้งใจแล้ว ลองกลับไปทบทวนเพิ่มอีกนิดแล้วส่งใหม่ได้นะ ครูให้กำลังใจอยู่เสมอ',
      'ยังไม่สมบูรณ์เท่าที่ควร แต่ไม่เป็นไรนะ ทุกความผิดพลาดคือบทเรียน ลองแก้ไขแล้วส่งมาใหม่ได้เลย',
      'อยากให้ตรวจทานอีกรอบก่อนส่งครั้งหน้า ครูเชื่อมั่นในศักยภาพของเธอ ขอให้อัลลอฮ์ทรงช่วยให้เข้าใจง่ายขึ้นนะ',
    ],
  }

  // ── โหมดตรวจงานทีละคน — พรีวิวไฟล์ในตัว + ให้คะแนน + คอมเมนต์ + สลับ/กระโดดไปเลขที่ ──
  const _FILE_EXT_KIND = f => {
    const ext = (f.name ?? '').split('.').pop()?.toLowerCase() ?? ''
    if (['jpg','jpeg','png','gif','webp'].includes(ext)) return 'image'
    if (ext === 'pdf') return 'pdf'
    return 'other'
  }

  function _openAssignmentGradeCard(a, startStudentId) {
    document.getElementById('sc-grade-card')?.remove()
    const subByStudent = Object.fromEntries(a.submissions.map(s => [s.student_id, s]))
    const col = scoreColumns.find(c => c.id === a.score_column_id)
    let idx = Math.max(0, students.findIndex(x => x.id === startStudentId))
    const m = document.createElement('div')
    m.id = 'sc-grade-card'
    m.className = 'fixed inset-0 z-[96] flex items-center justify-center bg-black/55 p-4'
    document.body.appendChild(m)

    const effectiveMax = a.max_score != null ? parseFloat(a.max_score) : (col ? parseFloat(col.max_score) : null)
    const _render = () => {
      const s = students[idx]
      const sub = subByStudent[s.id]
      const late = sub && _isLate(a, sub.submitted_at)
      const penalty = sub ? _latePenaltyPoints(a, sub.submitted_at) : 0
      // ถ้าเคยให้คะแนนไปแล้ว โชว์คะแนนจริงที่บันทึกไว้ ไม่ใช่คะแนนเต็มตั้งต้น (บั๊กเดิม: เปิดซ้ำแล้วเห็นเป็นคะแนนเต็มเสมอ)
      const suggested = sub?.hasScore
        ? (sub.savedScore ?? '')
        : effectiveMax != null ? Math.max(0, (effectiveMax || 0) - penalty) : ''

      if (sub && !sub.reviewed_at) {
        sub.reviewed_at = new Date().toISOString() // optimistic — กันเรียกซ้ำถ้า re-render ก่อน request จบ
        markAssignmentSubmissionReviewed(a.id, s.id).catch(() => {})
      }

      const previewHTML = !sub ? '' : !sub.file_urls?.length ? '' : sub.file_urls.map(f => {
        const kind = _FILE_EXT_KIND(f)
        if (kind === 'image') return `<a href="${_htmlEsc(f.url)}" target="_blank" rel="noopener" class="block rounded-xl overflow-hidden border border-gray-200 mb-2"><img src="${_htmlEsc(f.url)}" class="w-full max-h-72 object-contain bg-gray-50" loading="lazy" /></a>`
        if (kind === 'pdf') return `<iframe src="${_htmlEsc(f.url)}" class="w-full h-72 rounded-xl border border-gray-200 mb-2"></iframe>`
        return `<a href="${_htmlEsc(f.url)}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-indigo-600 hover:bg-indigo-50 mb-2">📎 ${_htmlEsc(f.name)} <span class="text-gray-400">(เปิดแท็บใหม่ — ไม่รองรับพรีวิว)</span></a>`
      }).join('')

      m.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <button id="sgc-prev" ${idx <= 0 ? 'disabled' : ''} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนก่อนหน้า">‹</button>
              <div class="w-11 h-11 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold flex-shrink-0">
                ${s.image_url ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover"/>` : _htmlEsc((s.full_name ?? '?').charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate text-sm">${_htmlEsc(s.full_name ?? '—')}</p>
                <p class="text-[11px] text-gray-400">เลขที่ ${seatNoByStudent.get(s.id) ?? '—'} · ${_htmlEsc(s.student_code ?? '')}</p>
              </div>
              <button id="sgc-next" ${idx >= students.length - 1 ? 'disabled' : ''} class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-25 disabled:pointer-events-none" title="คนถัดไป">›</button>
              <button id="sgc-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
            <div class="flex items-center gap-2 mt-2.5">
              <label for="sgc-jump" class="text-[11px] text-gray-400 font-semibold flex-shrink-0">ไปที่เลขที่</label>
              <input id="sgc-jump" type="number" min="1" max="${students.length}" value="${seatNoByStudent.get(s.id) ?? ''}"
                class="w-16 text-center text-xs border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <span class="text-[11px] text-gray-300">/ ${students.length}</span>
              <span class="text-[11px] text-gray-300 ml-auto">${idx + 1} / ${students.length} คน</span>
            </div>
            ${sub ? `<div class="mt-2">${_statusBadge(_statusOf(sub))}</div>` : ''}
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${!sub ? `
              <div class="text-center py-10 text-gray-300">
                <p class="text-3xl mb-2">📭</p>
                <p class="text-sm font-semibold text-gray-400">ยังไม่ส่งงานชิ้นนี้</p>
              </div>` : `
              <p class="text-[11px] text-gray-400 mb-2">ส่งเมื่อ ${new Date(sub.submitted_at).toLocaleString('th-TH', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</p>
              ${late ? `<p class="text-[11px] text-amber-700 font-bold mb-2">⏰ ส่งช้า ${_lateDays(a, sub.submitted_at)} วัน${penalty > 0 ? ` — หักคะแนนแนะนำ ${penalty}` : ''}</p>` : ''}
              ${previewHTML}
              ${sub.note ? `<div class="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3"><p class="text-[10px] font-bold text-gray-400 mb-0.5">ข้อความจากนักเรียน</p><p class="text-xs text-gray-600">${_htmlEsc(sub.note)}</p></div>` : ''}
              ${col ? `<div class="mb-3">
                <div class="flex items-center gap-2">
                  <input id="sgc-grade" type="number" min="0" max="${effectiveMax ?? ''}" class="w-20 text-center border border-gray-200 rounded-lg px-1 py-1.5 font-mono font-bold text-indigo-600" value="${suggested}" placeholder="—" />
                  <span class="text-xs text-gray-400">/ ${effectiveMax ?? col.max_score}</span>
                  <button id="sgc-grade-save" class="sc-btn-dark text-xs font-bold px-3 py-1.5 rounded-lg ml-auto">บันทึกคะแนน</button>
                </div>
                <p class="text-[10px] text-gray-400 mt-1">โหมดคะแนน: ${ASSIGN_WRITE_MODE_LABEL[a.score_write_mode ?? 'overwrite']?.label ?? ''} · บันทึกอัตโนมัติเมื่อออกจากช่องกรอก</p>
              </div>` : `<p class="text-[11px] text-gray-300 mb-3">งานนี้ไม่ได้ผูกกับคอลัมน์คะแนน</p>`}
              <div>
                <label for="sgc-feedback" class="text-[11px] font-bold text-gray-500 mb-1 block">คอมเมนต์ถึงนักเรียน</label>
                <div class="flex flex-wrap gap-1.5 mb-1.5">
                  <span class="text-[10px] text-gray-400 flex items-center">💚 ชื่นชม:</span>
                  ${_FEEDBACK_TEMPLATES.praise.map((t, i) => `<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100" data-tmpl="praise-${i}">ตัวอย่าง ${i + 1}</button>`).join('')}
                </div>
                <div class="flex flex-wrap gap-1.5 mb-2">
                  <span class="text-[10px] text-gray-400 flex items-center">💡 ปรับปรุง:</span>
                  ${_FEEDBACK_TEMPLATES.improve.map((t, i) => `<button type="button" class="sgc-tmpl text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-100" data-tmpl="improve-${i}">ตัวอย่าง ${i + 1}</button>`).join('')}
                </div>
                <textarea id="sgc-feedback" rows="2" placeholder="เช่น ทำได้ดีมาก แต่ข้อ 3 ทบทวนอีกครั้ง — หรือกดตัวอย่างด้านบนแล้วแก้ไขต่อได้" class="w-full text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none">${_htmlEsc(sub.teacher_feedback ?? '')}</textarea>
                <div class="flex items-center gap-2 mt-1.5">
                  <button id="sgc-feedback-save" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">บันทึกคอมเมนต์</button>
                  ${sub.status === 'rejected'
                    ? `<span class="text-[11px] text-red-500 font-semibold">❌ ตีกลับแล้ว รอนักเรียนส่งใหม่</span>`
                    : `<button id="sgc-reject" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 ml-auto">❌ ตีกลับให้แก้ไข</button>`}
                </div>
              </div>`}
          </div>
        </div>`

      m.querySelector('#sgc-close').addEventListener('click', () => _closeCard())
      m.querySelector('#sgc-prev')?.addEventListener('click', () => { if (idx > 0) { idx--; _render() } })
      m.querySelector('#sgc-next')?.addEventListener('click', () => { if (idx < students.length - 1) { idx++; _render() } })
      const _jump = () => {
        const jumpInput = m.querySelector('#sgc-jump')
        const n = parseInt(jumpInput.value, 10)
        const target = studentBySeatNo.get(n)
        if (!target) { showToast(`ไม่พบเลขที่ ${jumpInput.value}`, 'warning'); jumpInput.value = seatNoByStudent.get(s.id) ?? ''; return }
        const newIdx = students.findIndex(x => x.id === target.id)
        if (newIdx === idx) return
        idx = newIdx; _render()
      }
      m.querySelector('#sgc-jump')?.addEventListener('change', _jump)
      m.querySelector('#sgc-jump')?.addEventListener('keydown', e => { if (e.key === 'Enter') _jump() })
      const _saveGrade = async () => {
        const btn = m.querySelector('#sgc-grade-save')
        const val = m.querySelector('#sgc-grade').value.trim()
        const scoreNum = val === '' ? 0 : parseFloat(val)
        if (!Number.isFinite(scoreNum) || scoreNum < 0 || (effectiveMax != null && scoreNum > effectiveMax)) {
          showToast(`คะแนนต้องอยู่ระหว่าง 0 – ${effectiveMax ?? col.max_score}`, 'warning')
          return
        }
        btn.disabled = true
        try {
          const saved = await saveAssignmentGrade(a.id, s.id, scoreNum)
          sub.hasScore = true
          sub.savedScore = scoreNum
          const rows = scoresByStudent[s.id] ?? (scoresByStudent[s.id] = [])
          let scoreRow = rows.find(row => row.score_column_id === saved.columnId)
          if (!scoreRow) {
            scoreRow = { student_id: s.id, score_column_id: saved.columnId }
            rows.push(scoreRow)
          }
          Object.assign(scoreRow, {
            score: saved.score,
            original_score: saved.originalScore,
            retake_score: saved.retakeScore,
            final_score: saved.finalScore,
            score_history: saved.scoreHistory,
          })
          publishGradebookUpdate(saved)
          const roster = document.getElementById('sc-roster')
          if (roster) roster.innerHTML = _rosterHTML()
          showToast('บันทึกคะแนนแล้ว ✅', 'success')
          _render()
        } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error'); btn.disabled = false }
      }
      m.querySelector('#sgc-grade-save')?.addEventListener('click', _saveGrade)
      m.querySelector('#sgc-grade')?.addEventListener('change', _saveGrade) // บันทึกอัตโนมัติเมื่อกรอกเสร็จ (blur/Enter)
      m.querySelectorAll('.sgc-tmpl').forEach(btn => btn.addEventListener('click', () => {
        const [group, i] = btn.dataset.tmpl.split('-')
        const textarea = m.querySelector('#sgc-feedback')
        textarea.value = _FEEDBACK_TEMPLATES[group][parseInt(i, 10)]
        textarea.focus()
      }))
      m.querySelector('#sgc-feedback-save')?.addEventListener('click', async () => {
        const btn = m.querySelector('#sgc-feedback-save')
        const val = m.querySelector('#sgc-feedback').value.trim()
        btn.disabled = true
        try {
          await saveAssignmentFeedback(a.id, s.id, val)
          sub.teacher_feedback = val
          showToast('บันทึกคอมเมนต์แล้ว ✅', 'success')
        } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
        finally { btn.disabled = false }
      })
      m.querySelector('#sgc-reject')?.addEventListener('click', async () => {
        const reason = m.querySelector('#sgc-feedback').value.trim()
        if (!reason) { showToast('กรอกเหตุผลในช่องคอมเมนต์ก่อนตีกลับงาน', 'warning'); m.querySelector('#sgc-feedback').focus(); return }
        if (!confirm(`ตีกลับงานของ "${s.full_name}" ให้แก้ไขใหม่?\n\nเหตุผล: ${reason}`)) return
        const btn = m.querySelector('#sgc-reject')
        btn.disabled = true
        try {
          await rejectAssignmentSubmission(a.id, s.id, reason)
          sub.status = 'rejected'
          sub.teacher_feedback = reason
          showToast('ตีกลับงานแล้ว — นักเรียนจะเห็นเหตุผลนี้และส่งใหม่ได้', 'success')
          _render()
        } catch (err) { showToast('ตีกลับไม่สำเร็จ: ' + (err.message ?? ''), 'error'); btn.disabled = false }
      })
    }
    const _closeCard = () => {
      m.remove()
      document.getElementById('sc-track-modal')?._refresh?.()
    }
    m.addEventListener('click', e => { if (e.target === m) _closeCard() })
    _render()
  }
}
