// js/teacher-views-smart-classroom.js — 👑 Smart Classroom (เฉพาะโดเนทระดับ 4+)
// หน้าควบคุมขณะสอนสด รวมเครื่องมือที่มีอยู่แล้วในระบบไว้จอเดียว — ไม่มีการเขียน logic ใหม่ซ้ำซ้อน
// ทุกปุ่มเรียกฟังก์ชัน/โมดัลจริงของระบบเดิม: _openAttendanceModalForSession, openTimerModal, _openRandomPickerModal,
// _openLeaveRequestModal/_openLeaveQuotaModal (hall pass), startQuizLive, openScoreScanner, openAttendanceScanSetup
import {
  getMyClasses, getClassStudents, getSystemConfig, getClassSessionDOWs,
  getActiveLeavePermissionsForClass, getLeaveMaxActiveForClass, getLeaveMaxPerStudentWeekForClass,
  closeLeavePermission, getMyDonationRequests, createAnnouncement,
  getScoreColumns, getStudentScores, saveStudentScore, getClassAttendanceAllFull, getClassLeaveHistory,
} from './api.js'
import { getQuizzesForClass, startQuizLive, closeQuiz } from './quiz-api.js'
import { openScoreScanner } from './score-qr-scanner.js'
import {
  openAttendanceScanSetup, _openLeaveRequestModal, _openLeaveQuotaModal,
  _openAttendanceModalForSession,
} from './teacher-views-attendance.js'
import { openQuizMonitor } from './teacher-views-quiz-monitor.js'
import { openTimerModal } from './timer-overlay.js'
import { _openRandomPickerModal, renderClassDetail } from './teacher-views-classes.js'
import { showToast } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc, _generateSessions, _dateInputValue, ATT_STATUS } from './teacher-views-utils.js'

// ─── Tier gate ──────────────────────────────────────────────────────────────
// ใช้ pattern เดียวกับ _dashboardMinTier ใน teacher-views-dashboard.js — อ่านจาก
// system_config key เดียวกัน (donationSpecialFeatures รูปแบบ "icon|text|minTier" ต่อบรรทัด)
// ถ้าแอดมินยังไม่ได้ตั้งค่าบรรทัดที่มีคำว่า "Smart Classroom" จะ default เป็นระดับ 4
function _smartClassroomMinTier(cfg) {
  return String(cfg?.donationSpecialFeatures ?? '').split('\n')
    .map(line => { const p = line.split('|'); return { text: p[1] ?? '', minTier: parseInt(p[2]) || 1 } })
    .find(f => f.text.includes('Smart Classroom'))?.minTier ?? 4
}
export function isSmartClassroomUnlocked(cfg) {
  const tierIndex = window._pp5DonorTierIndex ?? 0
  return tierIndex >= _smartClassroomMinTier(cfg)
}

function _fmtElapsed(startIso) {
  const mins = Math.max(0, Math.floor((Date.now() - new Date(startIso).getTime()) / 60000))
  return mins < 1 ? '<1 นาที' : `${mins} นาที`
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

  const cfg = window._pp5SystemCfg ?? await getSystemConfig().catch(() => ({}))

  if (!isSmartClassroomUnlocked(cfg)) {
    const minTier = _smartClassroomMinTier(cfg)
    setContent(`<div class="max-w-md mx-auto text-center py-14 px-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
      <div class="text-6xl mb-4">👑</div>
      <p class="font-bold text-gray-800 text-lg">Smart Classroom</p>
      <p class="text-sm text-gray-500 mt-2 leading-relaxed">ฟีเจอร์นี้เฉพาะผู้สนับสนุนระบบระดับ ${minTier} ขึ้นไปเท่านั้นครับ<br>รวมเครื่องมือสอนสดทั้งหมดไว้จอเดียว — เช็คชื่อ/จับเวลา/สุ่มชื่อ/Hall Pass/เปิดควิซสด</p>
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
    scoreColumns, studentScores, attendanceFull, leaveHistory
  try {
    const classes = await getMyClasses(teacher.id)
    cls = classes.find(c => c.id === classId)
    if (!cls) { renderClassDetail(teacher, classId); return }

    ;[students, activeLeaves, leaveMaxActive, leaveMaxPerWeek, quizzes, donationRequests,
      scoreColumns, studentScores, attendanceFull, leaveHistory] = await Promise.all([
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

  // ── Per-student lookup maps (สำหรับแผงข้อมูลนักเรียน) ─────────────────────
  const scoresByStudent = {}
  for (const r of studentScores) (scoresByStudent[r.student_id] ??= []).push(r)
  const attendanceByStudent = {}
  for (const r of attendanceFull) (attendanceByStudent[r.student_id] ??= []).push(r)
  const leaveHistoryByStudent = {}
  for (const l of leaveHistory) (leaveHistoryByStudent[l.student_id] ??= []).push(l)

  const _reload = () => renderSmartClassroom(teacher, classId)

  // ── Roster grid ──────────────────────────────────────────────────────────
  const _rosterHTML = () => students.map(s => {
    const out = activeLeaveMap[s.id]
    return `<button type="button" data-sid="${s.id}"
        class="sc-stu relative border rounded-xl px-2 py-2.5 text-center hover:border-indigo-300 hover:-translate-y-0.5 transition ${out ? 'border-amber-300 bg-amber-50' : 'border-gray-100 bg-gray-50'}">
      ${out ? `<span class="absolute top-1 right-1 text-[9px] font-bold bg-amber-500 text-white px-1 py-0.5 rounded">🚪</span>` : ''}
      <div class="w-9 h-9 mx-auto mb-1.5 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
        ${s.image_url ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover"/>` : _htmlEsc((s.full_name ?? '?').charAt(0))}
      </div>
      <div class="text-[9px] text-gray-400 font-mono">${_htmlEsc(s.student_code ?? '')}</div>
      <div class="text-[11px] font-semibold text-gray-700 leading-tight truncate">${_htmlEsc(s.full_name ?? '')}</div>
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
    return quizzes.slice(0, 4).map(q => `
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 bg-gray-50 mb-1.5">
        <span class="text-base flex-shrink-0">🧠</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-gray-700 truncate">${_htmlEsc(q.title ?? 'ควิซ')}</p>
          <p class="text-[10px] text-gray-400">${q.status === 'announced' ? 'พร้อมเริ่ม' : q.status === 'started' ? '🔴 กำลังสอบสด' : 'ปิดแล้ว'}</p>
        </div>
        ${q.status === 'announced' ? `<button class="sc-quiz-start text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex-shrink-0" data-qid="${q.id}">▶ เริ่ม</button>` : ''}
        ${q.status === 'started' ? `<button class="sc-quiz-monitor text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex-shrink-0" data-qid="${q.id}">🔴 ดูสด</button>
                                     <button class="sc-quiz-close text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 flex-shrink-0" data-qid="${q.id}">ปิด</button>` : ''}
      </div>`).join('')
  }

  setContent(`<div class="animate-fade max-w-6xl mx-auto">

    <div class="relative overflow-hidden bg-white border border-amber-200 rounded-2xl shadow-sm px-5 py-4 mb-4 flex items-center gap-4 flex-wrap">
      <div class="absolute inset-x-0 top-0 h-1" style="background:linear-gradient(90deg,#e6c988,#a9781a,#e6c988)"></div>
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold flex-shrink-0">👑 Smart Classroom</span>
      <div class="min-w-0">
        <h1 class="font-bold text-gray-800 text-base truncate">${_htmlEsc(ms.subject_name ?? '')} · ${_htmlEsc(cls.class_name ?? '')}</h1>
        <p class="text-xs text-gray-400">${students.length} คน</p>
      </div>
      <button id="sc-switch-class" class="ml-auto flex-shrink-0 text-xs font-semibold text-amber-700 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg">🔀 สลับห้อง</button>
      <button id="sc-back" class="flex-shrink-0 text-xs text-gray-400 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">← กลับ</button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 items-start">

      <div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-sm font-bold text-gray-700">👥 นักเรียน — แตะเพื่อดูข้อมูล/สั่งการ</h2>
            <button id="sc-open-attendance" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">✅ เช็คชื่อ</button>
          </div>
          <p class="text-xs text-gray-400 mb-3">เด้งป๊อบอัพเช็คชื่อของคาบวันนี้ให้อัตโนมัติ (ถ้าวันนี้มีหลายคาบหรือไม่ตรงตาราง จะให้เลือกคาบเอง)</p>
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
            <button id="sc-timer" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-indigo-300 text-xs font-bold text-gray-700">⏱️<br>จับเวลา</button>
            <button id="sc-random" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-indigo-300 text-xs font-bold text-gray-700">🎲<br>สุ่ม/จัดกลุ่ม</button>
            <button id="sc-scan-att" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-indigo-300 text-xs font-bold text-gray-700">📷<br>สแกน QR เช็คชื่อ</button>
            <button id="sc-scan-score" class="px-3 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-indigo-300 text-xs font-bold text-gray-700">📷<br>สแกน QR คะแนน</button>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h2 class="text-sm font-bold text-gray-700 mb-2">📣 แจ้งห้องนี้ทันที</h2>
          <textarea id="sc-ann-text" rows="3" placeholder="เช่น พรุ่งนี้เตรียมสมุดการบ้านมาส่งด้วยนะ"
            class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-2"></textarea>
          <button id="sc-ann-send" class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ส่งประกาศ</button>
        </div>
      </div>

    </div>
  </div>`)

  // ── Wiring: fullscreen mode / back / switch class / attendance ──────────
  document.body.classList.add('sc-fullscreen')
  document.getElementById('sc-back').addEventListener('click', () => {
    document.body.classList.remove('sc-fullscreen')
    renderClassDetail(teacher, classId)
  })
  document.getElementById('sc-switch-class').addEventListener('click', () => _openClassSwitcher())
  document.getElementById('sc-open-attendance').addEventListener('click', () => _openTodayAttendance())

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

  const SC_TABS = [
    { key: 'info',  label: '👤 ข้อมูล' },
    { key: 'score', label: '📝 คะแนน' },
    { key: 'att',   label: '✅ มาเรียน' },
    { key: 'leave', label: '🚪 ออกห้อง' },
  ]

  function _tabInfoHTML(s) {
    const leave = activeLeaveMap[s.id]
    return `
      <div class="space-y-2">
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

  function _openStudentPanel(s) {
    document.getElementById('sc-student-modal')?.remove()
    let activeTab = 'info'
    const m = document.createElement('div')
    m.id = 'sc-student-modal'
    m.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
    document.body.appendChild(m)

    const _renderPanel = () => {
      const leave = activeLeaveMap[s.id]
      m.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[88vh] flex flex-col animate-fade">
          <div class="p-5 pb-3 flex-shrink-0">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl flex-shrink-0">
                ${s.image_url ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover"/>` : _htmlEsc((s.full_name ?? '?').charAt(0))}
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-bold text-gray-800 truncate">${_htmlEsc(s.full_name ?? '—')}</p>
                <p class="text-xs text-gray-400">${_htmlEsc(s.student_code ?? '')} · ${_htmlEsc(s.main_room ?? '')}</p>
              </div>
              <button id="sc-sp-close" class="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0">✕</button>
            </div>
          </div>
          <div class="flex gap-1 px-5 flex-shrink-0 border-b border-gray-100">
            ${SC_TABS.map(t => `<button data-tab="${t.key}" class="sc-sp-tab px-2.5 py-2 text-xs font-bold border-b-2 -mb-px transition ${activeTab === t.key ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-400 hover:text-gray-600'}">${t.label}</button>`).join('')}
          </div>
          <div class="p-5 pt-3 overflow-y-auto flex-1">
            ${activeTab === 'info' ? _tabInfoHTML(s) : activeTab === 'score' ? _tabScoreHTML(s) : activeTab === 'att' ? _tabAttHTML(s) : _tabLeaveHTML(s)}
          </div>
        </div>`

      m.querySelector('#sc-sp-close').addEventListener('click', () => m.remove())
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
    }
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    _renderPanel()
  }

  // ── Wiring: hall pass list return buttons + quota ────────────────────────
  document.getElementById('sc-pass-list').addEventListener('click', async e => {
    const btn = e.target.closest('.sc-return-btn')
    if (!btn) return
    try { await closeLeavePermission(parseInt(btn.dataset.lid, 10), 'returned'); showToast('บันทึกกลับเข้าห้องแล้ว', 'success'); _reload() }
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

  // ── Wiring: QR scanners ───────────────────────────────────────────────────
  document.getElementById('sc-scan-att').addEventListener('click', () => openAttendanceScanSetup(teacher))
  document.getElementById('sc-scan-score').addEventListener('click', () => openScoreScanner({ classId, className: cls.class_name }))

  // ── Wiring: quiz launch ───────────────────────────────────────────────────
  document.getElementById('sc-quiz-list').addEventListener('click', async e => {
    const startBtn = e.target.closest('.sc-quiz-start')
    const monitorBtn = e.target.closest('.sc-quiz-monitor')
    const closeBtn = e.target.closest('.sc-quiz-close')
    if (startBtn) {
      try { await startQuizLive(parseInt(startBtn.dataset.qid, 10)); showToast('เริ่มควิซให้ห้องนี้แล้ว 🧠', 'success'); _reload() }
      catch (err) { showToast('เริ่มควิซไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    } else if (monitorBtn) {
      const q = quizzes.find(x => x.id === parseInt(monitorBtn.dataset.qid, 10))
      if (q) openQuizMonitor(q)
    } else if (closeBtn) {
      try { await closeQuiz(parseInt(closeBtn.dataset.qid, 10)); showToast('ปิดสอบแล้ว', 'success'); _reload() }
      catch (err) { showToast('ปิดสอบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    }
  })

  // ── Wiring: instant announcement ─────────────────────────────────────────
  document.getElementById('sc-ann-send').addEventListener('click', async () => {
    const btn = document.getElementById('sc-ann-send')
    const text = document.getElementById('sc-ann-text').value.trim()
    if (!text) { showToast('พิมพ์ข้อความก่อนส่งนะ', 'warning'); return }
    btn.disabled = true; btn.textContent = 'กำลังส่ง...'
    try {
      await createAnnouncement({ title: `📣 ${cls.class_name}`, body: text, isActive: true, teacherId: teacher.id, targetClassIds: [classId] })
      showToast('ส่งประกาศถึงห้องนี้แล้ว 📣', 'success')
      document.getElementById('sc-ann-text').value = ''
    } catch (err) { showToast('ส่งไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    finally { btn.disabled = false; btn.textContent = 'ส่งประกาศ' }
  })
}
