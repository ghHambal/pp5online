import { supabase }            from './supabase.js'
import { showToast, showPageLoader, injectFeedbackWidget, checkAndShowChangelog, showAnnouncementPopups, showTerangganuUrgentModal } from './ui.js'
import { getMyTeacherProfile, getMySubjects, getMyClasses, getMasterSubjects,
         createSubject, updateSubject, deleteSubject,
         getCourseDocPage2, saveCourseDocPage2,
         getMyHomeroomRooms, upsertHomeroomTeacher, getSystemConfig,
         getPendingExamRequestCount,
         createPaymentRequest, uploadPaymentSlip, getMyPaymentRequests,
         getTeacherPackageAccess, getMyDonationRequests,
         getMySchedule, getPeriods,
         getClassScheduleLinks, linkClassToSchedule, unlinkClassFromSchedule,
         updateLastSeen, logLogin,
         getUnreadNotifications, markNotificationsRead,
         getClassByIdFull,
         getTeacherPositionPermissions, getActiveAnnouncements,
         getTeacherById, submitAppFeedback } from './api.js'
import { promptpayQRDataURL } from './promptpay.js'
import { COPY_TEMPLATE_CONFIG, getCopyTemplateId } from './sync.js'
import { applyThemeForRole } from './theme.js'
import { APP_VERSION } from './version.js?v=10.22.612'
import { blockPullToRefresh } from './anti-pull-refresh.js'
import { initInstallPrompt } from './install-prompt.js'
import { ensurePushSubscription } from './push-notify.js'
import { POS_LBL, _teacherPositionList, _teacherPositionLabel } from './teacher-views-utils.js'
import { clearSsoPassword, buildWenSsoUrl } from './wen-sso.js'
import { openAzizGamesModal } from './azizgames-modal.js'
import { openAzfutsalModal } from './azfutsal-modal.js'
import { getImpersonationContext, validateImpersonation, endImpersonation, clearImpersonation } from './impersonation.js'
import { renderAdvisorStudents, renderShirtSummary, renderSportsFundAdmin, openMyTeamWorkspace, renderShirtVoteSettings, renderShirtVoteDashboard } from './sports-portals.js?v=10.22.612'
import { renderTutorial } from './tutorial.js'
import { getMyTerangganuSurveyStatus } from './terangganu-api.js'
import { getRegradeConfig } from './regrade-api.js'

let _teacher       = null  // teacher DB record (from teachers table)
let _homeroomRooms = []   // [{main_room, category}]
let _isAlsoAdmin   = false
let _isQrReissueManager = false // ครูที่แอดมินมอบสิทธิ์ให้เข้าหน้าพิมพ์/จัดการคำขอ QR Code ได้เหมือนแอดมิน
let _hasAdminAccess = false
let _positionPerms = {}   // { feature: boolean } สำหรับ position ของครูคนนี้
let _sportsVisibility = { enabled: true, teacher_menu: true, student_menu: true, public_page: true }
window._pp5DonorTierIndex = 0
window._pp5SystemCfg      = {}

async function _loadSportsVisibility() {
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', 'sports_visibility')
      .maybeSingle()
    if (!error && data?.value) {
      _sportsVisibility = { ..._sportsVisibility, ...data.value }
    }
  } catch {
    // ถ้าโมดูลกีฬาสียังไม่ได้ลง SQL patch ให้ใช้ค่าเปิดตามเดิม
  }
  return _sportsVisibility
}

// ─── Guard ────────────────────────────────────────────────────────────────────
async function requireAuth() {
  showPageLoader(true)
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return null }
  return session
}

// ─── Load teacher info ────────────────────────────────────────────────────────
async function loadTeacherInfo(userId) {
  // 3 query นี้ไม่ต้องพึ่งข้อมูลกันเลย เดิม await ทีละก้อนต่อกัน (คนละ round-trip) — ยิงพร้อมกันแทน
  const [teacherData, sessionRes, profileRes] = await Promise.all([
    getMyTeacherProfile(userId),
    supabase.auth.getSession(),
    supabase.from('profiles').select('role, is_also_admin').eq('id', userId).maybeSingle(),
  ])
  _teacher = teacherData
  if (_teacher) _teacher.auth_email = sessionRes?.data?.session?.user?.email ?? ''
  await applyThemeForRole('teacher', _teacher ?? {})

  // เช็ค is_also_admin — ถ้าใช่แสดงปุ่มสลับเป็นแอดมิน
  const profileRow = profileRes?.data
  _isAlsoAdmin = profileRow?.is_also_admin === true
  _hasAdminAccess = profileRow?.role === 'admin' || _isAlsoAdmin
  const headerRight = document.querySelector('header .flex.items-center.gap-3:last-child')
  if (_isAlsoAdmin && headerRight && !document.getElementById('btn-switch-admin')) {
    const switchBtn = document.createElement('a')
    switchBtn.id = 'btn-switch-admin'
    switchBtn.href = 'dashboard.html'
    switchBtn.title = 'สลับไปหน้าแอดมิน'
    switchBtn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 shadow-sm border border-emerald-200/50 mr-1'
    switchBtn.innerHTML = `<span>⚙️</span><span>สลับเป็นแอดมิน</span>`
    headerRight.insertBefore(switchBtn, headerRight.firstChild)
  }

  await _loadSportsVisibility()
  _renderTeacherSidebarUI(_teacher)
}

// แสดงปุ่ม "Dashboard ตามตำแหน่ง" + ข้อมูลครูใน sidebar/header
// ใช้ทั้งโหมดปกติ (loadTeacherInfo) และโหมด "ดูในฐานะ" (impersonation)
function _renderTeacherSidebarUI(teacher) {
  // เช็ค position — ถ้ามีบทบาทพิเศษแสดงปุ่มสลับ Dashboard (ป้องกัน duplicate)
  const nav = document.querySelector('#sidebar nav')
  const _teacherPositions = _teacherPositionList(teacher)
  const posLabel = _teacherPositionLabel(teacher)
  if (_teacherPositions.length > 0 && nav && !document.getElementById('btn-sv-mode')) {
    const svBtn = document.createElement('button')
    svBtn.id = 'btn-sv-mode'
    svBtn.className = 'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition w-full text-left text-emerald-200 hover:bg-emerald-800 hover:text-white'
    svBtn.style.color = '#93c5fd'
    svBtn.innerHTML = `<span>📊</span><span>Dashboard ${posLabel}</span>`
    svBtn.onclick = _enterSupervisorMode
    // วางไว้กลุ่มเดียวกับ "ประกาศ" / "ปฏิทินปฏิบัติงาน" บนสุดของเมนู
    const calendarLink = nav.querySelector('[data-nav="work-calendar-view"]')
    if (calendarLink) calendarLink.insertAdjacentElement('afterend', svBtn)
    else nav.insertBefore(svBtn, nav.firstChild)
  }
  _applySportsShortcutVisibility()

  const name   = teacher?.full_name ?? 'ครูผู้สอน'
  const code   = teacher?.teacher_code ? `รหัส ${teacher.teacher_code}` : ''
  const imgUrl = teacher?.image_url ?? ''

  // Sidebar mini profile
  const avatarEl = document.getElementById('t-avatar')
  if (imgUrl) {
    avatarEl.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover" />`
  } else {
    avatarEl.textContent = name.charAt(0).toUpperCase()
  }
  document.getElementById('t-name').textContent = name
  document.getElementById('t-code').textContent = code

  // แจ้งเตือนจากหัวหน้า
  if (teacher?.id) _loadSupervisorNotifications(teacher.id)

  // Header — ป้ายบทบาทใต้ชื่อ แสดงตามตำแหน่งจริง (เดิม hardcode "ครูผู้สอน" ทุกบัญชี)
  document.getElementById('user-name').textContent = name
  const roleLabelEl = document.getElementById('user-role-label')
  if (roleLabelEl) roleLabelEl.textContent = _teacherPositions.length ? posLabel : 'ครูผู้สอน'
  const headerAvatar = document.getElementById('user-avatar')
  if (imgUrl) {
    headerAvatar.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover" />`
  } else {
    headerAvatar.textContent = name.charAt(0).toUpperCase()
  }
}

function _applySportsShortcutVisibility() {
  const link = document.getElementById('menu-sports-shortcut')
  if (!link) return
  const canSeeSports = _sportsVisibility.enabled !== false && _sportsVisibility.teacher_menu !== false
  link.classList.toggle('hidden', !canSeeSports)
}

// ─── Navigation ───────────────────────────────────────────────────────────────

// แสดง popup ให้ครูที่ปรึกษาหลายห้องเลือกห้องก่อนเข้าหน้า
function _pickRoom(rooms, onPick) {
  if (rooms.length === 1) { onPick(rooms[0].main_room); return }
  const wrap = document.createElement('div')
  wrap.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4'
  wrap.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">🏠 เลือกห้องที่ปรึกษา</h3>
        <p class="text-xs text-gray-400 mt-1">คุณเป็นที่ปรึกษาหลายห้อง — เลือกห้องที่ต้องการ</p>
      </div>
      <div class="px-5 py-4 space-y-2">
        ${rooms.map(r => `
        <button data-room="${r.main_room}"
          class="room-pick-btn w-full text-left px-4 py-3 rounded-xl border border-gray-200
                 hover:border-emerald-400 hover:bg-emerald-50 text-sm font-medium transition">
          ${r.main_room}
        </button>`).join('')}
      </div>
      <div class="px-5 pb-5">
        <button id="room-pick-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">ยกเลิก</button>
      </div>
    </div>`
  document.body.appendChild(wrap)
  wrap.querySelectorAll('.room-pick-btn').forEach(btn =>
    btn.addEventListener('click', () => { wrap.remove(); onPick(btn.dataset.room) })
  )
  wrap.querySelector('#room-pick-cancel').addEventListener('click', () => wrap.remove())
}

const ROUTES = {
  // ทุกฟังก์ชันที่มาจาก teacher-views.js (รวมของที่ re-export ต่อจาก teacher-views-classes.js/
  // teacher-class-forms.js/teacher-score-columns.js) เปลี่ยนจาก static import เป็น dynamic import()
  // ที่นี่ทั้งหมด — เดิม static import ทำให้ Rollup รวมทุกไฟล์เหล่านี้เป็น chunk เดียวขนาด ~1.15MB
  // (gzip ~307KB) ที่ต้องโหลด+parse ก่อนหน้าภาพรวมจะเริ่มแสดงผลได้เสมอ ไม่ว่าครูจะเข้าหน้าไหนก่อน
  // ทำให้แอปเปิดช้าทุกครั้ง — เปลี่ยนเป็น dynamic import ตาม pattern เดียวกับ 'flashcards'/'certificates'
  // ด้านล่างที่มีอยู่แล้ว ให้ Rollup แยก chunk ได้จริงและโหลดเฉพาะหน้าที่ครูเปิดจริงเท่านั้น
  'announcements-view': () => import('./teacher-views.js').then(m => m.renderAnnouncementsView(_teacher)),
  // Teachers with the 'work_calendar' position permission granted (via the
  // admin Roles/Permissions page) get the full create/edit/delete view from
  // this same familiar sidebar link — previously this always opened the
  // read-only view regardless of that permission, so the granted position
  // (e.g. หัวหน้าฝ่ายทะเบียนสามัญ) could see the page but never actually edit it.
  'work-calendar-view': () => import('./views.js').then(({ renderWorkCalendarView, renderWorkCalendar }) =>
    _positionPerms.work_calendar ? renderWorkCalendar(_teacher) : renderWorkCalendarView()
  ),
  'overview':    () => import('./teacher-views.js').then(m => m.renderTeacherOverview(_teacher, _homeroomRooms)),
  'my-courses':  () => import('./teacher-views.js').then(m => m.renderMyCourses(_teacher)),
  'my-classes':  () => import('./teacher-views.js').then(m => m.renderMyClasses(_teacher)),
  'attendance':       () => import('./teacher-views.js').then(m => m.renderAttendance(_teacher)),
  'life-skill-score': () => import('./teacher-views.js').then(m => {
    const rooms = _homeroomRooms.filter(r => r.category === 'สามัญ')
    _pickRoom(rooms, picked => m.renderLifeSkillScore(_teacher, rooms.filter(r => r.main_room === picked)))
  }),
  'reading-score':    () => import('./teacher-views.js').then(m => {
    const r = window._pendingReadingRoom; window._pendingReadingRoom = null; m.renderReadingScore(_teacher, r)
  }),
  'prayer-score':     () => import('./teacher-views.js').then(m => {
    const rooms = _homeroomRooms.filter(r => r.category === 'ศาสนา')
    if (rooms.length === 0) {
      m.renderPrayerScore(_teacher, [])
    } else {
      _pickRoom(rooms, picked => m.renderPrayerScore(_teacher, rooms.filter(r => r.main_room === picked)))
    }
  }),
  'prayer-monitor':   () => import('./teacher-views.js').then(m => {
    const rooms = _homeroomRooms.filter(r => r.category === 'ศาสนา')
    const preferredRoom = window._pendingPrayerMonitorRoom || null
    window._pendingPrayerMonitorRoom = null
    if (rooms.length === 0) {
      m.renderPrayerRoomMonitor(_teacher, [])
    } else if (preferredRoom && rooms.some(r => r.main_room === preferredRoom)) {
      m.renderPrayerRoomMonitor(_teacher, rooms, preferredRoom)
    } else if (rooms.length === 1) {
      m.renderPrayerRoomMonitor(_teacher, rooms, rooms[0].main_room)
    } else {
      _pickRoom(rooms, picked => m.renderPrayerRoomMonitor(_teacher, rooms, picked))
    }
  }),
  'grades':      () => import('./teacher-views.js').then(m => m.renderGrades()),
  'requests':    () => import('./teacher-views.js').then(m => m.renderRequests(_teacher)),
  'schedule':    () => import('./teacher-views.js').then(m => m.renderSchedule(_teacher)),
  'tutorial':    () => renderTutorial(),
  'flashcards':  () => import('./teacher-views-flashcards.js').then(m => m.renderFlashcardDecks(_teacher)),
  'certificates': () => import('./teacher-views-certificates.js').then(m => m.renderCertificateManager(_teacher)),
  'quiz-system': () => import('./teacher-views-quiz-banks.js').then(m => m.renderQuizBanks(_teacher)),
  'exam-docs':   () => import('./teacher-views-exam-docs.js?v=10.22.612').then(m => m.renderExamDocuments(_teacher)),
  'sports':      () => {
    // ครูตำแหน่ง house_color_admin (หรือได้รับสิทธิ์ menu_sports_admin/เป็นแอดมิน) ที่กด
    // ทางลัด "ระบบกีฬาสี" จากเมนูปกตินี้ ต้องเข้าเป็นแอดมิน AZIZGAMES ทันทีเหมือนกับที่เข้าทาง
    // เมนู Supervisor mode — เดิม path นี้เปิดแบบผู้เข้าชมทั่วไปเสมอไม่ว่าตำแหน่งจะเป็นอะไร
    const teacherPositions = _teacher?.positions?.length ? _teacher.positions : (_teacher?.position ? [_teacher.position] : [])
    const isSportsManager = _positionPerms.menu_sports_admin || teacherPositions.includes('house_color_admin') || _teacher?.staff_type === 'แอดมิน' || _teacher?.position === 'admin'
    openAzizGamesModal(isSportsManager
      ? { admin: true, teacherName: _teacher?.full_name, teacherCode: _teacher?.teacher_code }
      : {})
  },
  'advisor-students': () => renderAdvisorStudents(_teacher, _homeroomRooms),
  'shirt-summary': () => renderShirtSummary(),
  'sports-fund-admin': () => renderSportsFundAdmin(),
  'shirt-vote-settings': () => renderShirtVoteSettings(),
  'shirt-vote-dashboard': () => renderShirtVoteDashboard(),
  'my-team-workspace': () => openMyTeamWorkspace(),
  'student-qr-print': () => {
    const classId = window._pendingQRClassId || null
    window._pendingQRClassId = null
    import('./teacher-views-classes.js').then(m => m.renderStudentQRPrint(_teacher, classId, { isQrManager: _isQrReissueManager }))
  },
  'student-leave-scanner': () => {
    import('./teacher-views-leave-scanner.js?v=10.18.25').then(m => m.renderStudentLeaveScanner(_teacher))
  },
  'smart-classroom': () => {
    const classId = window._pendingSmartClassroomId
    window._pendingSmartClassroomId = null
    import('./teacher-views-smart-classroom.js').then(m => m.renderSmartClassroom(_teacher, classId))
  },
  'schedule-builder': () => import('./teacher-views.js').then(m => m.renderScheduleBuilder(_teacher, () => navigate('overview'))),
  'profile':     () => import('./teacher-views.js').then(m => m.renderProfile(_teacher, _homeroomRooms, _refreshProfile)),
  'setup':       () => import('./teacher-views.js').then(m => m.renderProfileSetup(_teacher, _homeroomRooms, _onSetupComplete)),
}

let _currentView = 'overview'
async function navigate(view) {
  // กันคลิกช่วงที่ _teacher ยังโหลดไม่เสร็จ/หลุดชั่วคราว (เจอจริง: กด "ห้องเรียน" จากการ์ดหน้าภาพรวม
  // เร็วๆ แล้วเจอ "ไม่พบข้อมูลครู" เพราะ renderMyClasses อ่าน _teacher เป็น null) — ทางลัดออกทันทีถ้า
  // โหลดแล้ว ไม่กระทบความเร็วการนำทางปกติ
  if (!_teacher?.id) {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.id) _teacher = (await getMyTeacherProfile(user.id).catch(() => null)) ?? _teacher
    } catch {}
  }
  document.body.classList.remove('sc-fullscreen') // กันค้างโหมดเต็มจอ Smart Classroom เวลาสลับเมนูด้วยทางอื่น
  if (window._scClockInterval) { clearInterval(window._scClockInterval); window._scClockInterval = null }
  if (window._scQuizPollInterval) { clearInterval(window._scQuizPollInterval); window._scQuizPollInterval = null }
  if (typeof window._cleanupLeaveScanner === 'function') {
    try { window._cleanupLeaveScanner() } catch (e) {}
  }
  if (typeof window._cleanupPrayerRoomMonitor === 'function') {
    try { window._cleanupPrayerRoomMonitor() } catch (e) {}
  }
  if (typeof window._cleanupAdvisorShirtPaymentScanner === 'function') {
    try { window._cleanupAdvisorShirtPaymentScanner() } catch (e) {}
  }
  if (typeof window._cleanupDonorChat === 'function') {
    try { window._cleanupDonorChat() } catch (e) {}
  }
  const fn = ROUTES[view]
  if (fn) { _currentView = view; fn() }
  _toggleFloatingFabsForView(view)
}

// expose to window for onclick in views
window._navTo  = navigate
window._goBack = () => navigate('my-courses')
window._refreshCurrentView = () => navigate(_currentView)
window.addEventListener('pp5:open-sports-shirt-summary', () => navigate('shirt-summary'))
window.addEventListener('pp5:open-shirt-vote-settings', () => navigate('shirt-vote-settings'))
window.addEventListener('pp5:open-shirt-vote-dashboard', () => navigate('shirt-vote-dashboard'))

const _esc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

export const _toPositiveInt = (value, fallback) => {
  const n = parseInt(value, 10)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

// ─── Donation AI — Gemini with key fallback ───────────────────────────────────
// ดึง API keys สำรอง 1-4 จาก cfg (กรอง empty ออก)
export function getDonationGeminiKeys(cfg) {
  return [1,2,3,4]
    .map(i => (cfg[`donationGeminiKey${i}`] ?? '').trim())
    .filter(Boolean)
}

// เรียก Gemini ผ่าน Edge Function (key ไม่ออกถึง browser) — คืน { text, keyIndex }
export async function callDonationAI(_cfg, prompt, { maxTokens = 1024 } = {}) {
  const { data, error: fnErr } = await supabase.functions.invoke('gemini-proxy', {
    body: { keyType: 'donation', prompt, maxTokens },
  })
  if (fnErr) throw new Error(fnErr.message ?? 'Edge Function error')
  if (data?.error) throw new Error(data.error.message ?? 'Gemini error')
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
  return { text, keyIndex: 1 }
}

// export ให้หน้าอื่นใช้ผ่าน window ด้วย
window._callDonationAI = callDonationAI
window._getDonationGeminiKeys = getDonationGeminiKeys

// รูปแบบ: icon|ข้อความ|minTier (minTier optional, default=1)
const _parseDonationFeatures = cfg => {
  const raw = String(cfg.donationSpecialFeatures ?? '').trim()
  const defaults = [
    ['🏅', 'สติกเกอร์/ตราประจำระดับผู้สนับสนุน',              1],
    ['📣', 'ประกาศในห้องเรียนสำหรับนักเรียน',                  1],
    ['✍️', 'ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว', 3],
    ['📊', 'Dashboard วิเคราะห์ภาพรวมห้องเรียน',               2],
    ['🤖', 'AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง',            3],
    ['🧭', 'AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา',             4],
    ['⚡', 'Early Access ฟีเจอร์ใหม่ก่อนใคร',                  5],
    ['📲', 'แจ้งเตือนอัตโนมัติ Telegram/LINE',                  5],
    ['🎲', 'สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน',              1],
    ['👑', 'Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด', 4],
    ['✨', 'ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว',          2],
    ['💬', 'แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์', 1],
  ]
  const rows = raw ? raw.split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    const parts = line.split('|').map(s => s.trim())
    const icon    = parts[0] || '✨'
    const text    = parts[1] || parts[0] || line
    const minTier = parseInt(parts[2]) || 1
    return { icon, text, minTier }
  }) : defaults.map(([icon, text, minTier]) => ({ icon, text, minTier }))
  return rows.filter(f => f.text)
}

// คืน tier index (1-4) ของ approved donation — 0 = ไม่มี
export const _getDonorTierIndex = (cfg, tiers, amount) => {
  if (!amount) return 0
  const idx = [...tiers].map((t,i) => ({t,i})).reverse().find(({t}) => amount >= t.amount)?.i
  return idx !== undefined ? idx + 1 : 0
}

export const _parseDonationStickers = (cfg, minAmount, stepAmount) => {
  const raw = String(cfg.donationStickerTiers ?? '').trim()
  const defaults = [
    [49,  '🌱', 'ครูผู้จุดประกาย',     'คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝',    '#22C55E'],
    [99,  '☕', 'ครูผู้ร่วมฝัน',       'คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭',          '#A855F7'],
    [149, '🏅', 'ครูผู้ร่วมสร้าง',     'คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱','#F59E0B'],
    [199, '🐘', 'ครูผู้ร่วมขับเคลื่อน','คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊',   '#3B82F6'],
    [249, '👑', 'ครูผู้ก่อตั้งร่วม',   'คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️',  '#D4A017'],
  ]
  const rows = raw ? raw.split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    const [amount, sticker, title, note, color] = line.split('|').map(s => s.trim())
    return {
      amount: _toPositiveInt(amount, 0),
      sticker: sticker || '🏅',
      title: title || `ผู้สนับสนุน ${amount || ''} บาท`,
      note: note || 'ขอบคุณที่ช่วยสนับสนุนการพัฒนาระบบครับ',
      color: color || '',
    }
  }) : defaults.map(([amount, sticker, title, note, color]) => ({ amount, sticker, title, note, color }))
  const sorted = rows.filter(t => t.amount > 0).sort((a, b) => a.amount - b.amount)
  // auto-link donationStickerImgN → tier N (override emoji ถ้ามีรูป upload)
  return sorted.map((t, i) => {
    const imgUrl = cfg[`donationStickerImg${i+1}`] ?? ''
    if (imgUrl && /^https?:\/\//.test(imgUrl)) return { ...t, sticker: imgUrl }
    return t
  })
}

const _donationStickerHtml = tier => {
  if (!tier) return ''
  const sticker = String(tier.sticker ?? '')
  const stickerEl = /^https?:\/\//.test(sticker)
    ? `<img src="${_esc(sticker)}" class="w-14 h-14 object-contain drop-shadow-md" />`
    : `<div class="w-14 h-14 flex items-center justify-center text-3xl">${_esc(sticker || '🏅')}</div>`
  return `
    <div class="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-3 shadow-sm">
      ${stickerEl}
      <div class="min-w-0">
        <p class="text-sm font-bold text-amber-900">${_esc(tier.title)}</p>
        <p class="text-[11px] text-amber-700 leading-relaxed">${_esc(tier.note)}</p>
      </div>
    </div>`
}

const _copyUrl = id => `https://docs.google.com/spreadsheets/d/${encodeURIComponent(id)}/copy`

async function _showStandaloneCopyFlow() {
  const cfg = await getSystemConfig().catch(() => ({}))
  const groups = {
    start: [
      { key: 'สามัญ', label: '📚 สามัญ' },
      { key: 'ศาสนา', label: '🕌 ศาสนา' },
    ],
    สามัญ: COPY_TEMPLATE_CONFIG.filter(t => t.category === 'สามัญ'),
    ศาสนา: COPY_TEMPLATE_CONFIG.filter(t => t.category === 'ศาสนา'),
  }
  const steps = ['start']
  document.getElementById('standalone-copy-modal')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'standalone-copy-modal'
  wrap.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
  wrap.innerHTML = `<div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div>
        <h3 class="text-xl font-bold text-pink-500 leading-tight">สร้างสำเนาไฟล์ ปพ5Online</h3>
        <p class="text-xs text-gray-400 mt-1">สำหรับใช้งานไฟล์ Google Sheet แบบเดิม</p>
      </div>
      <button id="copy-flow-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div id="copy-flow-app"></div>
  </div>`
  document.body.appendChild(wrap)
  const app = wrap.querySelector('#copy-flow-app')
  const render = () => {
    const current = steps[steps.length - 1]
    const opts = groups[current] || []
    app.innerHTML = `
      <div class="text-center text-lg text-gray-600 mb-4">${steps.length === 1 ? 'เลือกหมวดหมู่' : 'เลือกกลุ่ม/ประเภท'}</div>
      <div class="flex flex-col gap-3">
        ${opts.map(opt => {
          const id = opt.defaultId ? getCopyTemplateId(cfg, opt.key) : ''
          return id ? `
            <a href="${_copyUrl(id)}" target="_blank" rel="noopener noreferrer"
              class="w-full ${opt.color || 'bg-gradient-to-r from-pink-400 to-green-400'} text-white font-semibold py-3 rounded-2xl shadow-md hover:scale-[1.02] transition-all text-center block text-lg">
              🔗 เปิดไฟล์: ${_esc(opt.label)}
            </a>` : `
            <button data-next="${_esc(opt.key)}"
              class="copy-flow-next w-full bg-pink-200 hover:bg-pink-300 text-pink-700 font-medium py-3 rounded-2xl shadow text-lg transition-all">
              ${_esc(opt.label)}
            </button>`
        }).join('')}
      </div>
      ${steps.length > 1 ? `<button id="copy-flow-back" class="mt-6 text-sm text-gray-400 underline hover:text-pink-400 transition-all">⬅️ ย้อนกลับ</button>` : ''}`
    app.querySelectorAll('.copy-flow-next').forEach(btn => {
      btn.addEventListener('click', () => {
        steps.push(btn.dataset.next)
        render()
      })
    })
    app.querySelector('#copy-flow-back')?.addEventListener('click', () => {
      if (steps.length > 1) steps.pop()
      render()
    })
  }
  wrap.querySelector('#copy-flow-close').addEventListener('click', () => wrap.remove())
  wrap.addEventListener('click', e => { if (e.target === wrap) wrap.remove() })
  render()
}

window._openStandaloneCopyFlow = _showStandaloneCopyFlow

// เปิด quota popup จากหน้าภาพรวม (ไม่มี course context)
window._showQuotaFromOverview = () => {
  Promise.all([
    getMyClasses(_teacher?.id ?? null).catch(()=>[]),
    getSystemConfig().catch(()=>({})),
  ]).then(([cls, cfg]) => _showQuotaPopup(cls.length, null, cfg))
    .catch(()  => _showQuotaPopup(0, null, {}))
}

// เปิดระบบ "เวร" (อาซิซสถาน) แบบป๊อบอัพเต็มหน้าจอ พร้อม SSO ไปยังรหัสครู
window._openWenDuty = (teacherCode) => {
  document.getElementById('wen-duty-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'wen-duty-modal'
  modal.className = 'fixed inset-0 z-[300] bg-white flex flex-col'
  modal.innerHTML = `
    <div class="flex items-center justify-between px-4 py-2 bg-amber-600 text-white shadow flex-shrink-0">
      <span class="font-bold text-sm flex items-center gap-2">🛡️ ระบบเวรประจำวัน</span>
      <button id="wen-duty-close" class="text-white text-2xl leading-none px-2 hover:opacity-75">×</button>
    </div>
    <iframe src="${buildWenSsoUrl(teacherCode)}" class="flex-1 w-full border-0"></iframe>`
  document.body.appendChild(modal)
  modal.querySelector('#wen-duty-close').addEventListener('click', () => modal.remove())
}

window._openLifeSkillScore    = (room) => navigate('life-skill-score')
window._openReligionScore     = (room) => navigate('prayer-score')
window._openReligionPrayerMonitor = (room) => {
  window._pendingPrayerMonitorRoom = room || null
  navigate('prayer-monitor')
}
window._openReadingScore      = ()     => { window._pendingReadingRoom = null; navigate('reading-score') }
window._openReadingScoreRoom  = (room) => { window._pendingReadingRoom = room; navigate('reading-score') }

window._openReadingScorePicker = (roomsJson) => {
  let rooms = []
  try { rooms = JSON.parse(roomsJson.replace(/&quot;/g, '"')) } catch { rooms = [] }
  if (!rooms.length) { showToast('ยังไม่มีห้องเรียน — ลงทะเบียนห้องก่อนบันทึกคะแนน', 'warning'); return }

  document.getElementById('rsp-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'rsp-modal'
  modal.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800">📖 เลือกห้องบันทึกคะแนน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อ่านคิดวิเคราะห์และเขียน</p>
        </div>
        <button id="rsp-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
      </div>
      <div class="p-4 grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
        ${rooms.map(r => `
        <button class="rsp-room px-3 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-800
                       text-sm font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition text-center"
          data-room="${r}">${r}</button>`).join('')}
      </div>
    </div>`
  document.body.appendChild(modal)
  modal.querySelector('#rsp-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  modal.querySelectorAll('.rsp-room').forEach(btn => {
    btn.addEventListener('click', () => { modal.remove(); window._openReadingScoreRoom(btn.dataset.room) })
  })
}

let _lastPendingCount = null

async function _updateRequestsBadge() {
  if (!_teacher) return
  try {
    const count = await getPendingExamRequestCount(_teacher.id)
    const badge = document.getElementById('badge-requests')
    if (badge) {
      if (count > 0) {
        badge.textContent = count > 99 ? '99+' : count
        badge.classList.remove('hidden')
      } else {
        badge.classList.add('hidden')
      }
    }
    // แจ้งเตือนถ้ามีคำร้องใหม่เข้ามา (ไม่แจ้งตอน load ครั้งแรก)
    if (_lastPendingCount !== null && count > _lastPendingCount) {
      const diff = count - _lastPendingCount
      showToast(`🔔 มีคำร้องนักเรียนใหม่ ${diff} รายการ`, 'info')
    }
    _lastPendingCount = count
  } catch { /* ไม่ crash */ }
}

function _startPolling() {
  const INTERVAL = 30000 // 30 วินาที
  setInterval(() => {
    if (document.visibilityState === 'visible') _updateRequestsBadge()
  }, INTERVAL)
  // resume ทันทีเมื่อ user กลับมาที่แท็บ
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') _updateRequestsBadge()
  })
}

// เดิมฟังก์ชันนี้ await ทีละก้อนเรียงต่อกัน 6-7 รอบ (คนละ round-trip เครือข่ายทั้งหมด แม้แต่ละ query
// จะไม่เกี่ยวข้องกันเลยก็ตาม) ทำให้รู้สึกว่าล็อกอินแล้วโหลดช้า — รวบยิงพร้อมกันด้วย Promise.all แทน
// เหลือแค่คู่ที่มีข้อมูลต้องพึ่งกันจริง (activeEvent → sports_shirt_vote_managers) ที่ต้องรอต่อกัน
async function _applyRoleMenus() {
  const hasLifeSkill = _homeroomRooms.some(r => r.category === 'สามัญ')
  const hasReading   = _teacher?.dept === 'THAI'
  let hasPrayer = _homeroomRooms.some(r => r.category === 'ศาสนา')

  // ห่อด้วย Promise.resolve() เสมอ — ผลลัพธ์จาก .maybeSingle()/.rpc() ของ supabase-js เวอร์ชันนี้
  // ไม่ได้มีเมธอด .catch() ให้เชนต่อได้ตรงๆ เสมอไป (เจอจริง TypeError "...catch is not a function"
  // ทำหน้าค้างทั้งหน้าตอนล็อกอิน) การห่อแบบนี้รับประกันว่าได้ Promise แท้ๆ ที่มี .catch() แน่นอน
  const safe = (p, fallback) => Promise.resolve(p).catch(() => fallback)
  const [
    cfg,
    profileRes,
    campAccessRes,
    sportsMembershipsRes,
    activeEventRes,
    qrManagerRes,
    regradeCfg,
  ] = await Promise.all([
    safe(getSystemConfig(), {}),
    _teacher ? safe(supabase.from('profiles').select('role').eq('id', _teacher.profile_id).maybeSingle(), { data: null }) : Promise.resolve({ data: null }),
    safe(supabase.rpc('get_terangganu_access'), { data: null }),
    safe(supabase.from('sports_team_memberships').select('id,role,permissions').eq('profile_id', _teacher?.profile_id).eq('is_active', true), { data: [] }),
    safe(supabase.from('events').select('id').eq('status', 'active').order('academic_year', { ascending: false }).limit(1).maybeSingle(), { data: null }),
    safe(supabase.from('qr_reissue_managers').select('profile_id').eq('profile_id', _teacher?.profile_id).maybeSingle(), { data: null }),
    safe(getRegradeConfig(), {}),
  ])

  if (!hasPrayer && _teacher) {
    const teacherCodes = (cfg.prayerScannerTeachers || '').split(/[\s,]+/).map(c => c.trim()).filter(Boolean)
    const profile = profileRes?.data ?? null
    const isAllowedScanner = teacherCodes.includes(_teacher.teacher_code) ||
                             _teacher.staff_type === 'แอดมิน' ||
                             _teacher.position === 'admin' ||
                             profile?.role === 'admin'
    if (isAllowedScanner) hasPrayer = true
  }

  const toggle = (id, show) => {
    const el = document.getElementById(id)
    if (!el) return
    el.classList.toggle('hidden', !show)
    el.classList.toggle('flex', show)
  }
  // สำหรับ div ครอบกลุ่มเมนู (ไม่ใช่ flex item เดี่ยวๆ) — toggle แค่ hidden เฉยๆ ไม่แตะ flex
  const toggleBlock = (id, show) => { document.getElementById(id)?.classList.toggle('hidden', !show) }
  const hasAdvisorRoom = _homeroomRooms.length > 0
  const teacherPositions = _teacher?.positions?.length ? _teacher.positions : (_teacher?.position ? [_teacher.position] : [])
  // ผู้บริหาร (บทบาทใหม่ทั้งระบบ) — เห็นเมนู "สภานักเรียน" เสมอแม้ปิด council_visible_to_all
  // ไว้สำหรับครูทั่วไป เพราะต้องเข้าไปดูหน้า "ภาพรวม" ในนั้น (สิทธิ์จริงคุมที่ ctx.isExecutive ใน council.js)
  const isExecutive = teacherPositions.includes('executive') || _isAlsoAdmin
  // ต่างจาก isExecutive ด้านบน — ตัวนี้ไม่รวม is_also_admin เพราะจุดประสงค์ต่างกัน (ซ่อนเมนูสอน
  // ให้บัญชี "ผู้บริหาร" ล้วนๆ ที่ไม่มีภาระสอนจริง แอดมินที่สอนจริงด้วยต้องไม่โดนซ่อนเมนูสอนไปด้วย)
  const isExecutiveOnly = teacherPositions.includes('executive')

  toggle('menu-life-skill', hasLifeSkill)
  toggle('menu-reading',    hasReading)
  toggle('menu-prayer',     hasPrayer)
  toggle('menu-advisor-students', hasAdvisorRoom)
  // ปิดการแสดงผลได้จากหน้าตั้งค่าแอดมิน (council_visible_to_all) — ปิดแล้วเห็นเฉพาะครูที่ is_also_admin/ผู้บริหาร
  toggle('menu-council', cfg.council_visible_to_all !== 'false' || _isAlsoAdmin || isExecutive)
  // ซ่อนเมนูที่เกี่ยวกับการสอน (รายวิชา/ห้องเรียน/งานรายวันทั้งหมด) ให้บัญชี "ผู้บริหาร" ล้วนๆ
  // ที่ไม่มีภาระสอนจริง (v10.22.560 — เจอจริงตอนทดสอบ ทีมผู้บริหาร (1122) ยังเห็นเมนูครูเต็มรูปแบบ)
  toggle('menu-my-courses', !isExecutiveOnly)
  toggle('menu-my-classes', !isExecutiveOnly)
  toggle('menu-dashboard',  !isExecutiveOnly)
  toggleBlock('daily-work-section', !isExecutiveOnly)
  toggleBlock('sem-work-section',   !isExecutiveOnly)

  const campAccess = campAccessRes?.data
  toggle('menu-terangganu', campAccess?.is_manager === true || campAccess?.teacher_participant === true)
  toggle('menu-regrade', regradeCfg.visibility?.teacher_menu === true || _isAlsoAdmin)

  const sportsMemberships = sportsMembershipsRes?.data || []
  toggle('menu-my-team', sportsMemberships.length > 0)

  const isSportsManager = _positionPerms.menu_sports_admin || teacherPositions.includes('house_color_admin') || _teacher?.staff_type === 'แอดมิน' || _teacher?.position === 'admin'
  const canViewSportsShirtSummary = isSportsManager || sportsMemberships.some(m => m.role === 'lead_teacher' || m.permissions?.shirt_summary === true)
  toggle('menu-shirt-summary', !!canViewSportsShirtSummary)
  toggle('menu-sports-fund-admin', !!isSportsManager)

  let isShirtVoteManager = false
  try {
    const eventId = activeEventRes?.data?.id || '00000000-0000-0000-0000-000000000001'
    const { data: manager } = await supabase.from('sports_shirt_vote_managers')
      .select('id').eq('event_id', eventId).eq('profile_id', _teacher?.profile_id).maybeSingle()
    isShirtVoteManager = !!manager
  } catch { isShirtVoteManager = false }
  toggle('menu-shirt-vote-dashboard', !!(isSportsManager || isShirtVoteManager))

  _isQrReissueManager = !!qrManagerRes?.data
  toggle('menu-qr-reissue-requests', _isQrReissueManager)

  // มิเรอร์รายการเดียวกับเมนูไซด์บาร์ด้านบนนี้ให้กริดไอคอน "ระบบอื่น ๆ" ในหน้าภาพรวม (renderTeacherOverview,
  // js/teacher-views.js) ใช้ตัดสินใจได้เลยโดยไม่ต้อง query ซ้ำ — ต้องคำนวณเสร็จก่อน navigate('overview')
  // เสมอ (ดูจุดเรียก _applyRoleMenus ใน DOMContentLoaded ท้ายไฟล์ ซึ่งอยู่ก่อน navigate('overview') เสมอ)
  const canSeeSports = _sportsVisibility.enabled !== false && _sportsVisibility.teacher_menu !== false
  window._teacherOverviewSystems = [
    { key: 'council',            show: cfg.council_visible_to_all !== 'false' || _isAlsoAdmin || isExecutive, emoji: '🏛️', label: 'สภา<br>นักเรียน',       href: 'council.html' },
    { key: 'terangganu',         show: campAccess?.is_manager === true || campAccess?.teacher_participant === true, emoji: '⚜️', label: 'ค่าย<br>TERANGGANU', href: 'terangganu.html' },
    { key: 'regrade',            show: regradeCfg.visibility?.teacher_menu === true || _isAlsoAdmin, emoji: '📋', label: 'แก้ค้าง<br>เก่า',           href: 'regrade.html' },
    { key: 'sports',             show: canSeeSports,                          emoji: '🏆', label: 'กีฬาสี',                nav: 'sports' },
    { key: 'certificates',       show: true,                                  emoji: '🏅', label: 'เกียรติ<br>บัตร',          nav: 'certificates' },
    { key: 'advisor-students',   show: hasAdvisorRoom,                        emoji: '👥', label: 'นักเรียน<br>ที่ปรึกษา',      nav: 'advisor-students' },
    { key: 'my-team',            show: sportsMemberships.length > 0,          emoji: '🛡️', label: 'จัดการ<br>สีของฉัน',        nav: 'my-team-workspace' },
    { key: 'shirt-summary',      show: !!canViewSportsShirtSummary,           emoji: '📦', label: 'สรุปยอด<br>เสื้อกีฬาสี',     nav: 'shirt-summary' },
    { key: 'sports-fund',        show: !!isSportsManager,                     emoji: '💰', label: 'บัญชีเงิน<br>กีฬาสี',        nav: 'sports-fund-admin' },
    { key: 'shirt-vote',         show: !!(isSportsManager || isShirtVoteManager), emoji: '🗳️', label: 'ผลโหวต<br>แบบเสื้อ',    nav: 'shirt-vote-dashboard' },
    { key: 'qr-print',           show: _isQrReissueManager,                   emoji: '🎫', label: 'พิมพ์/คำขอ<br>QR',         nav: 'student-qr-print' },
    { key: 'prayer-score',       show: hasPrayer,                             emoji: '🕌', label: 'คะแนน<br>ศาสนา',           nav: 'prayer-score' },
  ]
}

// refresh profile หลัง save
async function _refreshProfile(userId) {
  _teacher = await getMyTeacherProfile(userId)
  _homeroomRooms = _teacher ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
  await loadTeacherInfo(userId)
  await _applyRoleMenus()
  navigate('profile')   // re-render ฟอร์มด้วย _teacher ที่อัปเดตแล้ว
}

// หลัง setup เสร็จ → reload แล้วไป schedule-builder (บังคับสร้างตาราง)
async function _onSetupComplete(userId) {
  _teacher       = await getMyTeacherProfile(userId)
  _homeroomRooms = _teacher ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
  await loadTeacherInfo(userId)
  await _applyRoleMenus()
  navigate('schedule-builder')
}

window._openCourseForm = async () => {
  const { renderCourseForm } = await import('./teacher-views.js')
  renderCourseForm(_teacher, async (payload, coTeacherIds = []) => {
    await createSubject(payload, coTeacherIds)
  })
}

window._editCourse = async (id) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const editData = subjects.find(s => s.id === id)
  if (!editData) { showToast('ไม่พบข้อมูลคอร์ส', 'error'); return }
  const { renderCourseForm } = await import('./teacher-views.js')
  renderCourseForm(_teacher, async (payload, coTeacherIds = []) => {
    await updateSubject(id, payload, coTeacherIds)
  }, editData)
}

window._copyCourse = async (id) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const sourceSubject = subjects.find(s => s.id === id)
  if (!sourceSubject) { showToast('ไม่พบข้อมูลคอร์สต้นฉบับ', 'error'); return }

  const { renderCourseForm } = await import('./teacher-views.js')
  renderCourseForm(_teacher, async (payload, coTeacherIds = []) => {
    const newSubject = await createSubject(payload, coTeacherIds)
    try {
      const sourceDoc = await getCourseDocPage2(id)
      if (sourceDoc) {
        const { subject_id, updated_at, updated_by, ...page2Payload } = sourceDoc
        await saveCourseDocPage2(newSubject.id, page2Payload)
      }
    } catch (err) {
      showToast('คัดลอกคำอธิบายรายวิชาไม่สำเร็จ (สร้างคอร์สแล้ว แก้ไขคำอธิบายเพิ่มเองได้): ' + (err.message ?? ''), 'warning')
    }
  }, sourceSubject, { cloneFrom: id })
}

window._deleteCourse = (id, name) => {
  // ใช้ modal แทน confirm() เพื่อรองรับทุก browser/PWA
  document.getElementById('del-course-modal')?.remove()
  const m = document.createElement('div')
  m.id = 'del-course-modal'
  m.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4'
  m.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-fade">
      <div class="text-center mb-5">
        <div class="text-4xl mb-3">🗑️</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ลบคอร์สวิชา</h3>
        <p class="text-sm text-gray-500">"${name}"</p>
        <p class="text-xs text-red-500 mt-2">⚠️ ห้องเรียนทั้งหมดในคอร์สนี้จะถูกลบด้วย</p>
      </div>
      <div class="flex gap-3">
        <button id="del-course-cancel"
          class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">
          ยกเลิก
        </button>
        <button id="del-course-confirm"
          class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600">
          ลบ
        </button>
      </div>
    </div>`
  document.body.appendChild(m)
  m.querySelector('#del-course-cancel').addEventListener('click', () => m.remove())
  m.querySelector('#del-course-confirm').addEventListener('click', async () => {
    const btn = m.querySelector('#del-course-confirm')
    btn.disabled = true; btn.textContent = 'กำลังลบ...'
    try {
      await deleteSubject(id)
      m.remove()
      showToast(`ลบ "${name}" แล้ว`, 'success')
      navigate('my-courses')
    } catch (err) {
      m.remove()
      showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    }
  })
}

window._openRegisterClass = async (courseId) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const course = subjects.find(s => s.id === courseId)
  if (!course) { showToast('ไม่พบข้อมูลคอร์ส', 'error'); return }

  // ── ตรวจโควตา (นับจาก DB จริงเสมอ) ──
  const quota = _teacher?.teachers_quota
  const [myClasses, cfg, packageAccess] = await Promise.all([
    getMyClasses(_teacher?.id ?? null).catch(()=>[]),
    getSystemConfig().catch(()=>({})),
    getTeacherPackageAccess(_teacher?.id ?? null).catch(()=>({ hasSemester: false, paidRoomCount: 0 })),
  ])
  const freeLimit = parseInt(cfg.freeClassQuota ?? 2)
  const legacyUnlimited = quota?.is_paid && !quota?.package_type && !packageAccess.hasSemester && !packageAccess.paidRoomCount
  const hasSemester = packageAccess.hasSemester || quota?.package_type === 'semester' || legacyUnlimited
  const classLimit = hasSemester ? Infinity : freeLimit + packageAccess.paidRoomCount

  if (myClasses.length >= classLimit) {
    _showQuotaPopup(myClasses.length, course, cfg); return
  }

  const { renderClassForm } = await import('./teacher-views.js')
  renderClassForm(_teacher, course)
}

window._openCourseDocPage2 = async (courseId) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const course = subjects.find(s => s.id === courseId)
  if (!course) { showToast('ไม่พบข้อมูลคอร์ส', 'error'); return }
  const { openCourseDocPage2Modal } = await import('./teacher-views.js')
  await openCourseDocPage2Modal(_teacher, course)
}

// ── หน้า 1: เลือกแพ็กเกจ ────────────────────────────────────────────────────
function _showQuotaPopup(count, course, cfg = {}) {
  if (cfg.quotaMode === 'school_sponsored') {
    _showSchoolSponsoredPopup(count, course, cfg)
    return
  }
  document.getElementById('quota-popup')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'quota-popup'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <div class="flex items-center gap-3 mb-1">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">🔒</div>
          <div>
            <h3 class="font-bold text-gray-800 leading-tight">ครบโควตาฟรีแล้ว</h3>
            <p class="text-xs text-gray-400">ระบบ ปพ.5 ออนไลน์</p>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="overflow-auto flex-1 px-5 py-4 space-y-4">

        <!-- สถานะปัจจุบัน -->
        ${(() => {
          const freeQ  = parseInt(cfg.freeClassQuota ?? 2)
          const pClass = parseInt(cfg.pricePerClass   ?? 49)
          const pSem   = parseInt(cfg.priceSemester   ?? 299)
          const descC  = cfg.pkgPerClassDesc  ?? 'เพิ่มได้ 1 ห้องเรียนต่อการชำระเงิน'
          const descS  = cfg.pkgSemesterDesc  ?? 'ทุกวิชา ทุกห้อง ไม่จำกัด'
          const nextNo = freeQ + 1
          return `
        <div class="bg-gray-50 rounded-xl p-3.5 text-sm">
          <p class="text-gray-600">คุณสร้างห้องเรียนไปแล้ว
            <span class="font-bold text-indigo-600">${count} ห้อง</span>
            จาก <span class="font-bold">${freeQ} ห้องฟรี</span>
          </p>
          <p class="text-gray-400 text-xs mt-1">
            การสร้างห้องเรียนตั้งแต่ห้องที่ ${nextNo} เป็นต้นไป
            จำเป็นต้องเลือกแพ็กเกจด้านล่าง
          </p>
        </div>

        <!-- แพ็กเกจ 1 -->
        <label class="block cursor-pointer">
          <input type="radio" name="pkg" value="per_subject" class="sr-only peer" />
          <div class="border-2 border-gray-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-50
                      rounded-xl p-4 transition-all">
            <div class="flex items-start justify-between mb-2">
              <div>
                <p class="font-bold text-gray-800">รายห้อง</p>
                <p class="text-xs text-gray-400 mt-0.5">${descC}</p>
              </div>
              <div class="text-right flex-shrink-0 ml-3">
                <p class="text-2xl font-extrabold text-indigo-600">${pClass}<span class="text-sm font-normal text-gray-400"> บ.</span></p>
                <p class="text-[10px] text-gray-400">ต่อวิชา / เทอม</p>
              </div>
            </div>
            <div class="space-y-1 text-xs text-gray-500">
              <p>✅ เพิ่ม 1 ห้องเรียนทันที</p>
              <p>✅ เหมาะถ้าต้องการเพิ่มเพียง 1-2 ห้อง</p>
            </div>
          </div>
        </label>

        <!-- แพ็กเกจ 2 (แนะนำ) -->
        <label class="block cursor-pointer">
          <input type="radio" name="pkg" value="semester" class="sr-only peer" />
          <div class="border-2 border-gray-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50
                      rounded-xl p-4 transition-all relative">
            <div class="absolute -top-2.5 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              แนะนำ ⭐
            </div>
            <div class="flex items-start justify-between mb-2">
              <div>
                <p class="font-bold text-gray-800">เหมาทั้งเทอม</p>
                <p class="text-xs text-gray-400 mt-0.5">${descS}</p>
              </div>
              <div class="text-right flex-shrink-0 ml-3">
                <p class="text-2xl font-extrabold text-emerald-600">${pSem}<span class="text-sm font-normal text-gray-400"> บ.</span></p>
                <p class="text-[10px] text-gray-400">ต่อเทอม</p>
              </div>
            </div>
            <div class="space-y-1 text-xs text-gray-500">
              <p>✅ สร้างห้องเรียนได้ไม่จำกัดทุกวิชา</p>
              <p>✅ ประหยัดกว่าถ้าสอนมากกว่า 6 วิชา</p>
              <p>✅ ใช้ได้ตลอดภาคเรียนนี้</p>
            </div>
          </div>
        </label>`
        })()}

        <p class="text-[11px] text-gray-400 text-center">
          💡 ชำระเงินผ่าน PromptPay / โอนเงิน แล้วอัปโหลดสลิป<br/>
          แอดมินจะอนุมัติภายใน 24 ชั่วโมง
        </p>
        <button id="qp-copy-file"
          class="w-full py-2.5 rounded-xl border border-amber-200 bg-white text-amber-700 text-sm font-semibold hover:bg-amber-50 transition">
          🔗 ทำสำเนาไฟล์ ปพ.5 ใช้งานฟรี
        </button>
      </div>

      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="qp-cancel"
          class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 font-medium">
          ยกเลิก
        </button>
        <button id="qp-next"
          class="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
          ถัดไป →
        </button>
      </div>
    </div>`

  document.body.appendChild(wrap)

  wrap.querySelector('#qp-cancel').addEventListener('click', () => wrap.remove())
  wrap.querySelector('#qp-copy-file').addEventListener('click', () => {
    wrap.remove()
    _showStandaloneCopyFlow()
  })
  wrap.querySelector('#qp-next').addEventListener('click', () => {
    const pkg = wrap.querySelector('input[name="pkg"]:checked')?.value
    if (!pkg) { alert('กรุณาเลือกแพ็กเกจก่อนครับ'); return }
    wrap.remove()
    if (pkg === 'per_subject') {
      _showRoomCountPage(course, cfg)
    } else {
      _showPaymentPage(pkg, course, 1, cfg)
    }
  })
}

// ── โหมดใหม่: โรงเรียนสนับสนุน ──────────────────────────────────────────────

function _showSchoolSponsoredPopup(count, course, cfg = {}) {
  document.getElementById('school-sponsored-popup')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'school-sponsored-popup'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-4 pb-4 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">🎉</div>
          <div>
            <h3 class="font-bold text-gray-800 leading-tight">${cfg.sponsoredHeaderTitle || 'ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ'}</h3>
            <p class="text-xs text-gray-400">ระบบ ปพ.5 ออนไลน์</p>
          </div>
        </div>
      </div>
      <div class="px-5 py-4 space-y-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
          <p class="text-sm font-semibold text-emerald-800">${cfg.sponsoredBoxTitle || '🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว'}</p>
          <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
            ${cfg.sponsoredBoxBody || 'ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา — เป็นของขวัญจากโรงเรียนให้คุณครูทุกท่านครับ'}
          </p>
        </div>

        <button id="sp-donate"
          class="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-bold text-sm
                 shadow-lg shadow-amber-200/60 transition-all flex items-center justify-center gap-2">
          ${cfg.sponsoredDonateBtn || '☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว'}
          <span class="font-normal text-xs opacity-90">${cfg.sponsoredDonateSub || 'ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง'}</span>
        </button>

        <button id="sp-access"
          class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm
                 shadow-lg shadow-emerald-200/60 transition-all flex items-center justify-center gap-2">
          ${cfg.sponsoredAccessBtn || '✨ รับของขวัญจากโรงเรียนเลย'}
        </button>

        <p class="text-center text-[11px] text-gray-400 pb-1">${cfg.sponsoredFooter || 'ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏'}</p>
      </div>
    </div>`

  document.body.appendChild(wrap)

  wrap.querySelector('#sp-donate').addEventListener('click', () => {
    wrap.remove()
    _showDonateModal(course, cfg)
  })

  wrap.querySelector('#sp-access').addEventListener('click', async () => {
    const btn = wrap.querySelector('#sp-access')
    btn.disabled = true
    btn.textContent = '⏳ กำลังตรวจสอบ...'
    try {
      const existing = await getMyPaymentRequests(_teacher?.id).catch(() => [])
      const dup = existing.find(r => r.package_type === 'school_sponsored' &&
        (r.status === 'pending' || r.status === 'approved'))
      if (dup) {
        showToast(dup.status === 'approved'
          ? 'คุณได้รับสิทธิ์แล้วครับ ✅'
          : 'ส่งคำขอไปแล้ว รอแอดมินอนุมัติครับ ⏳', 'info')
        wrap.remove(); return
      }
      await createPaymentRequest({ teacher_id: _teacher?.id, package_type: 'school_sponsored', amount: 0, status: 'pending' })
      showToast('ส่งคำขอแล้ว ✅ แอดมินจะอนุมัติให้เร็วๆ นี้ครับ', 'success')
      wrap.remove()
    } catch (e) {
      showToast('เกิดข้อผิดพลาด: ' + (e.message ?? ''), 'error')
      btn.disabled = false
      btn.textContent = '🎓 รับสิทธิ์ไม่จำกัดเลย'
    }
  })
}

async function _showDonateModal(course, cfg = {}) {
  document.getElementById('donate-modal')?.remove()

  const minAmount  = _toPositiveInt(cfg.donationMinAmount, 49)
  const stepAmount = _toPositiveInt(cfg.donationAmountStep, 50)
  const stickerTiers  = _parseDonationStickers(cfg, minAmount, stepAmount)

  // ── เช็คสถานะโดเนทเดิม: pending บล็อกเสมอ, approved แล้วเปิดเป็นโหมด "อัปเกรดระดับ" แทนการบล็อก ──
  let totalApproved = 0
  let isUpgrade = false
  let nextTierAmount = null
  if (_teacher?.id) {
    try {
      const existing = await getMyDonationRequests(_teacher.id)
      const hasPending = existing.some(r => r.package_type === 'donation' && r.status === 'pending')
      if (hasPending) {
        showToast('คุณครูส่งหลักฐานรอการอนุมัติอยู่แล้วครับ — กรุณารอแอดมินตรวจสอบก่อนนะครับ', 'warning'); return
      }
      totalApproved = existing
        .filter(r => r.package_type === 'donation' && r.status === 'approved')
        .reduce((sum, r) => sum + (r.amount ?? 0), 0)
      if (totalApproved > 0) {
        const maxTierAmount = stickerTiers[stickerTiers.length - 1]?.amount ?? Infinity
        if (totalApproved >= maxTierAmount) {
          showToast('คุณครูสนับสนุนระดับสูงสุดแล้วครับ ขอบคุณมากๆ นะครับ 🙏👑', 'success'); return
        }
        isUpgrade = true
        nextTierAmount = stickerTiers.find(t => t.amount > totalApproved)?.amount ?? null
      }
    } catch { /* ไม่ block ถ้า check ไม่ได้ */ }
  }

  const wrap = document.createElement('div')
  wrap.id = 'donate-modal'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  const promptpay  = cfg.paymentPromptpay ?? ''
  const quickCount = Math.min(_toPositiveInt(cfg.donationQuickCount, 4), 8)
  const startAmount = isUpgrade ? Math.max(minAmount, (nextTierAmount ?? minAmount) - totalApproved) : minAmount
  const quickAmounts  = Array.from({ length: quickCount }, (_, i) => startAmount + (i * stepAmount))
  const allFeatures   = _parseDonationFeatures(cfg)
  const firstTier     = stickerTiers[0]

  // render feature list ตาม tier index (1-based)
  const _featureListHtml = (tierIdx) =>
    allFeatures.map(f => {
      const unlocked = tierIdx >= (f.minTier ?? 1)
      return unlocked
        ? `<div class="flex gap-2 text-amber-900"><span>${_esc(f.icon)}</span><span>${_esc(f.text)}</span></div>`
        : `<div class="flex gap-2 text-gray-300 opacity-70"><span>🔒</span><span class="line-through">${_esc(f.text)}<span class="ml-1 text-[9px] no-underline not-italic text-gray-400">ระดับ ${f.minTier}+</span></span></div>`
    }).join('')

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]">
      <div class="flex justify-center pt-3 pb-1 sm:hidden">
        <div class="w-10 h-1 rounded-full bg-gray-200"></div>
      </div>
      <div class="px-5 pt-4 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="donate-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">${isUpgrade ? '⭐ อัปเกรดระดับผู้สนับสนุน' : '☕ สนับสนุนผู้พัฒนา'}</h3>
          <p class="text-xs text-gray-400">${isUpgrade ? 'สนับสนุนเพิ่มเพื่ออัปเกรดระดับครับ 🙏' : 'ขอบคุณมากเลยครับ 🙏'}</p>
        </div>
      </div>
      <div class="px-5 py-4 space-y-4 overflow-auto flex-1">
        <p class="text-sm text-gray-600 text-center leading-relaxed">
          ${isUpgrade
            ? `คุณครูสนับสนุนสะสมแล้ว ${totalApproved} บาท${nextTierAmount ? ` — อีก ${Math.max(0, nextTierAmount - totalApproved)} บาทจะครบ ${nextTierAmount} บาทสำหรับระดับถัดไป` : ''}<br/><span class="text-xs text-gray-400">ยอดที่สนับสนุนเพิ่มจะถูกรวมกับยอดเดิมโดยอัตโนมัติครับ</span>`
            : `สนับสนุนขั้นต่ำ ${minAmount} บาท เพื่อรับสิทธิ์ผู้สนับสนุน<br/><span class="text-xs text-gray-400">ระบบหลักใช้งานได้ไม่จำกัดอยู่แล้ว สิทธิ์นี้เป็นฟีเจอร์พิเศษเพิ่มเติมครับ</span>`}
        </p>
        <!-- Feature list: อัปเดตตาม amount -->
        <div class="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
          <p class="text-xs font-bold text-amber-800 mb-2">ฟีเจอร์พิเศษสำหรับคุณครูที่โดเนท</p>
          <div id="donate-feature-list" class="grid grid-cols-1 gap-1.5 text-[11px] leading-snug">
            ${_featureListHtml(1)}
          </div>
        </div>
        <!-- Sticker preview -->
        <div id="donate-sticker-preview">
          ${_donationStickerHtml(firstTier)}
        </div>
        <!-- Amount input -->
        <div class="flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 focus-within:border-amber-400 transition">
          <span class="text-2xl font-bold text-amber-500">฿</span>
          <input id="donate-amount" type="number" min="${minAmount}" step="${stepAmount}" value="${startAmount}" placeholder="${startAmount}"
            class="flex-1 bg-transparent text-3xl font-extrabold text-amber-700 outline-none w-full" />
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${quickAmounts.map(v =>
            `<button class="donate-quick flex-1 py-2 rounded-xl border-2 border-amber-200 text-amber-700 text-sm font-bold hover:bg-amber-50 transition">${v}</button>`
          ).join('')}
        </div>
        <p class="text-[11px] text-gray-400 text-center leading-relaxed">
          ยอดที่สูงขึ้นจะปลดล็อกฟีเจอร์เพิ่มเติม และอัปเกรดระดับตราผู้สนับสนุนครับ
        </p>
        <div id="donate-qr-area" class="hidden flex-col items-center gap-3 py-2">
          <img id="donate-qr-img" class="w-56 h-56 rounded-2xl shadow-md" />
          <p class="text-xs text-gray-500 text-center">สแกนด้วย app ธนาคาร หรือ PromptPay</p>
        </div>
        <!-- อัปโหลดสลิป (แสดงหลัง QR) -->
        <div id="donate-slip-area" class="hidden space-y-2">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">อัปโหลดสลิปการโอนเงิน <span class="text-red-400">*</span></p>
          <label id="donate-slip-label"
            class="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-amber-200
                   rounded-xl py-5 cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition">
            <span class="text-3xl">📎</span>
            <span class="text-sm text-gray-500">แตะเพื่อเลือกรูปสลิป</span>
            <span class="text-xs text-gray-400">รองรับ JPG, PNG, PDF</span>
            <input type="file" id="donate-slip-file" accept="image/*,application/pdf" class="sr-only" />
          </label>
          <div id="donate-slip-preview" class="hidden relative">
            <img id="donate-slip-img" class="w-full rounded-xl object-cover max-h-48 border border-gray-100" />
            <p id="donate-slip-name" class="text-xs text-gray-500 mt-1 text-center truncate"></p>
            <button id="donate-slip-remove" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">✕</button>
          </div>
          <p id="donate-slip-err" class="hidden text-xs text-red-500 text-center">กรุณาอัปโหลดสลิปก่อนส่งนะครับ</p>
        </div>
        <button id="donate-gen-qr"
          class="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-white font-bold text-sm shadow-md shadow-amber-200/50 transition">
          สร้าง QR Code →
        </button>
        <button id="donate-confirm"
          class="hidden w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-200/50 transition">
          ✅ ส่งหลักฐานการโอน
        </button>
      </div>
    </div>`

  document.body.appendChild(wrap)

  const amountInput   = wrap.querySelector('#donate-amount')
  const stickerPreview = wrap.querySelector('#donate-sticker-preview')
  const featureList   = wrap.querySelector('#donate-feature-list')

  const updatePreview = () => {
    const amount   = parseFloat(amountInput.value) || 0
    const tier     = [...stickerTiers].reverse().find(t => amount >= t.amount) || stickerTiers[0]
    const tierIdx  = stickerTiers.indexOf(tier) + 1   // 1-based
    if (stickerPreview) stickerPreview.innerHTML = _donationStickerHtml(tier)
    if (featureList)    featureList.innerHTML    = _featureListHtml(tierIdx)
  }

  wrap.querySelectorAll('.donate-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      amountInput.value = btn.textContent.trim()
      updatePreview()
    })
  })
  amountInput.addEventListener('input', updatePreview)

  wrap.querySelector('#donate-back').addEventListener('click', () => {
    wrap.remove()
    _showSchoolSponsoredPopup(0, course, cfg)
  })

  wrap.querySelector('#donate-gen-qr').addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value)
    if (!amount || amount < minAmount) { showToast(`กรุณาระบุยอดโดเนทขั้นต่ำ ${minAmount} บาทครับ`, 'error'); return }
    if (!promptpay) { showToast('แอดมินยังไม่ได้ตั้งค่าเบอร์ PromptPay', 'error'); return }
    try {
      const dataUrl = await promptpayQRDataURL(promptpay, amount)
      wrap.querySelector('#donate-qr-img').src = dataUrl
      wrap.querySelector('#donate-qr-area').classList.remove('hidden')
      wrap.querySelector('#donate-qr-area').classList.add('flex')
      wrap.querySelector('#donate-slip-area').classList.remove('hidden')
      wrap.querySelector('#donate-confirm').classList.remove('hidden')
      wrap.querySelector('#donate-gen-qr').classList.add('hidden')
    } catch (e) {
      showToast('สร้าง QR ไม่สำเร็จ: ' + (e.message ?? ''), 'error')
    }
  })

  // slip upload handlers
  let donateSlipFile = null
  const slipFileInput = wrap.querySelector('#donate-slip-file')
  const slipPreview   = wrap.querySelector('#donate-slip-preview')

  slipFileInput?.addEventListener('change', e => {
    donateSlipFile = e.target.files[0]
    if (!donateSlipFile) return
    wrap.querySelector('#donate-slip-name').textContent = donateSlipFile.name
    if (donateSlipFile.type.startsWith('image/')) {
      wrap.querySelector('#donate-slip-img').src = URL.createObjectURL(donateSlipFile)
      wrap.querySelector('#donate-slip-img').classList.remove('hidden')
    } else {
      wrap.querySelector('#donate-slip-img').classList.add('hidden')
    }
    slipPreview.classList.remove('hidden')
    wrap.querySelector('#donate-slip-label').classList.add('hidden')
    wrap.querySelector('#donate-slip-err').classList.add('hidden')
  })

  wrap.querySelector('#donate-slip-remove')?.addEventListener('click', () => {
    donateSlipFile = null; slipFileInput.value = ''
    slipPreview.classList.add('hidden')
    wrap.querySelector('#donate-slip-label').classList.remove('hidden')
  })

  wrap.querySelector('#donate-confirm').addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value)
    // บังคับ slip ก่อนส่ง
    if (!donateSlipFile) {
      wrap.querySelector('#donate-slip-err').classList.remove('hidden')
      wrap.querySelector('#donate-slip-area').scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    const btn = wrap.querySelector('#donate-confirm')
    btn.disabled = true; btn.textContent = '⏳ กำลังส่งข้อมูล...'
    try {
      const req = await createPaymentRequest({ teacher_id: _teacher?.id, package_type: 'donation', amount, status: 'pending' })
      // อัปโหลด slip แล้วอัปเดต request
      const slipUrl = await uploadPaymentSlip(donateSlipFile, req.id)
      await supabase.from('payment_requests').update({ slip_url: slipUrl }).eq('id', req.id)
      showToast('ส่งหลักฐานสำเร็จ! 🙏 แอดมินจะตรวจสอบและส่งการ์ดขอบคุณให้ครับ', 'success')
      wrap.remove()
      _initDonateFloatingBtn(true)
    } catch (e) {
      showToast('เกิดข้อผิดพลาด: ' + (e.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = '✅ ส่งหลักฐานการโอน'
    }
  })
}

// ให้ admin เรียกดูตัวอย่างได้โดยส่ง cfg มาเอง
window._showThankYouCardAdmin = (request, cfgOverride) =>
  _showThankYouCard(request, cfgOverride)

async function _showThankYouCard(request, cfgOverride = null) {
  document.getElementById('thankyou-card-modal')?.remove()

  const cfg = cfgOverride ?? await getSystemConfig().catch(() => ({}))
  const minAmount  = _toPositiveInt(cfg.donationMinAmount, 99)
  const stepAmount  = _toPositiveInt(cfg.donationAmountStep, 50)
  const features    = _parseDonationFeatures(cfg)
  const tiers       = _parseDonationStickers(cfg, minAmount, stepAmount)
  const amount      = request.amount ?? 0
  const tier        = [...tiers].reverse().find(t => amount >= t.amount) ?? tiers[0]
  const tierIndex   = _getDonorTierIndex(cfg, tiers, amount)  // 1-5
  const thankText  = (cfg.donationThankYouCard ?? '').trim()
    || `❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

การสนับสนุนของคุณครูมีค่ามากกว่าจำนวนเงินครับ ☕
เพราะมันคือกำลังใจสำคัญที่ทำให้ผมรู้สึกว่า
ระบบเล็ก ๆ นี้ได้ช่วยลดภาระงานของครูได้จริง 🌷

ขอบคุณที่ทำให้ผมมีกำลังใจพัฒนาระบบนี้ต่อไปเพื่อครูครับ 🙏✨

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`

  const stickerEl = (() => {
    if (!tier) return '<div class="text-5xl mb-3">☕</div>'
    const s = String(tier.sticker ?? '')
    if (/^https?:\/\//.test(s))
      return `<div class="w-20 h-20 mx-auto mb-3 flex items-center justify-center drop-shadow-lg">
        <img src="${_esc(s)}" class="w-full h-full object-contain" /></div>`
    return `<div class="text-5xl mb-3">${_esc(s || '☕')}</div>`
  })()

  const wrap = document.createElement('div')
  wrap.id = 'thankyou-card-modal'
  wrap.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'

  wrap.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Header — สีตาม tier.color -->
      <div class="px-6 py-6 text-center flex-shrink-0" style="${(() => {
        const hex = tier?.color || '#f59e0b'
        const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16)
        return `background:linear-gradient(135deg,rgba(${r},${g},${b},0.85),rgba(${r},${g},${b},1))`
      })()}">
        ${stickerEl}
        ${tier ? `<div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">${_esc(tier.title)}</div>` : ''}
        <h2 class="text-white font-bold text-xl">ขอบคุณครับ! 🙏</h2>
        <p class="text-white/80 text-sm mt-1">${amount ? `โดเนท ${amount.toLocaleString()} บาท` : 'การสนับสนุนของคุณครูมีความหมายมากครับ'}</p>
      </div>
      <!-- Body -->
      <div class="px-5 py-4 overflow-y-auto flex-1 space-y-4">
        <!-- ข้อความขอบคุณ -->
        ${(request.admin_note || thankText) ? `
        <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
          ${_esc(request.admin_note || thankText)}
        </div>` : ''}
        <!-- ฟีเจอร์พิเศษ: unlocked / locked -->
        ${features.length ? `
        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-1.5">
            ${features.map(f => {
              const unlocked = tierIndex >= (f.minTier ?? 1)
              return unlocked
                ? `<div class="flex items-start gap-2 text-sm text-emerald-900">
                     <span class="flex-shrink-0">${_esc(f.icon)}</span>
                     <span>${_esc(f.text)}</span>
                   </div>`
                : `<div class="flex items-start gap-2 text-sm text-gray-400 opacity-60">
                     <span class="flex-shrink-0">🔒</span>
                     <span class="line-through">${_esc(f.text)}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap">ระดับ ${f.minTier}+</span>
                   </div>`
            }).join('')}
          </div>
          ${tierIndex < tiers.length ? `
          <p class="text-[10px] text-emerald-700 mt-3 pt-2 border-t border-emerald-200">
            🔓 อัปเกรดเพื่อปลดล็อกฟีเจอร์ที่เหลือได้เลยครับ
          </p>` : ''}
        </div>` : ''}
        <!-- คำอธิบาย tier -->
        ${tier?.note ? `
        <p class="text-xs text-center text-gray-400 italic">"${_esc(tier.note)}"</p>` : ''}
      </div>
      <!-- Footer -->
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="tc-close"
          class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${tier?.color || '#f59e0b'}">
          รับทราบและเริ่มใช้งาน 🚀
        </button>
      </div>
    </div>`

  document.body.appendChild(wrap)
  wrap.querySelector('#tc-close').addEventListener('click', () => {
    localStorage.setItem(`pp5_thankyou_seen_${request.id}`, '1')
    wrap.remove()
    document.getElementById('donate-float-btn')?.remove()
    _addDonateToSidebar(request)
  })
}

async function _addDonateToSidebar(approvedRequest = null) {
  if (document.getElementById('sidebar-donate-item')) return
  const nav = document.querySelector('#sidebar nav')
  if (!nav) return

  // ถ้า approved — แสดงสติกเกอร์ tier ของครูคนนี้
  let stickerHtml = '<span>☕</span>'
  let titleText   = 'สนับสนุนผู้พัฒนาอีกครั้ง'
  if (approvedRequest) {
    const cfg    = await getSystemConfig().catch(() => ({}))
    const minAmt = _toPositiveInt(cfg.donationMinAmount, 99)
    const step   = _toPositiveInt(cfg.donationAmountStep, 50)
    const tiers  = _parseDonationStickers(cfg, minAmt, step)
    const amount = approvedRequest.amount ?? 0
    const tier   = [...tiers].reverse().find(t => amount >= t.amount) ?? tiers[0]
    if (tier) {
      const s = String(tier.sticker ?? '')
      stickerHtml = /^https?:\/\//.test(s)
        ? `<img src="${_esc(s)}" class="w-6 h-6 object-contain rounded" title="${_esc(tier.title)}" />`
        : `<span title="${_esc(tier.title)}">${_esc(s || '🏅')}</span>`
      titleText = `${tier.title} — คลิกเพื่อโดเนทอีกครั้ง`
    }
  }

  const item = document.createElement('a')
  item.id = 'sidebar-donate-item'
  item.href = '#'
  item.title = titleText
  item.className = 'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-emerald-400/60 hover:text-amber-400 hover:bg-emerald-800/40 opacity-60 hover:opacity-100'
  item.innerHTML = `${stickerHtml} <span>${approvedRequest ? 'ผู้สนับสนุนระบบ' : 'สนับสนุนผู้พัฒนา'}</span>`
  item.addEventListener('click', async e => {
    e.preventDefault()
    const cfg = await getSystemConfig().catch(() => ({}))
    _showDonateModal(null, cfg)
  })
  nav.appendChild(item)
}

// บัญชี "ผู้บริหาร" ล้วนๆ (ไม่มีภาระสอน/is_also_admin) — ซ่อนปุ่มลอยทั้งหมด (โดเนท/ฟีดแบ็ก/แชทผู้สนับสนุน)
// เฉพาะตอนอยู่หน้าภาพรวมผู้บริหาร (renderExecutiveOverview) เพราะบังรายการจอมอนิเตอร์ — หน้าอื่นยังโชว์ปกติ
function _isExecutiveOnlyAccount() {
  const positions = _teacher?.positions?.length ? _teacher.positions : (_teacher?.position ? [_teacher.position] : [])
  return positions.includes('executive')
}

function _toggleFloatingFabsForView(view) {
  const hide = view === 'overview' && _isExecutiveOnlyAccount()
  ;['donate-float-btn', 'feedback-fab', 'donor-chat-fab'].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.style.display = hide ? 'none' : ''
  })
  _updateHomeFabVisibility(view)
}

// ปุ่มลอย "🏠 หน้าภาพรวม" มุมซ้ายล่าง — โชว์เฉพาะตอนอยู่หน้าอื่นที่ไม่ใช่ภาพรวม เพราะเดิมกลับ
// หน้าภาพรวมได้ทางเดียวคือเปิดเมนูซ้ายเท่านั้น (ผู้ใช้แจ้งว่าลำบากโดยเฉพาะบนมือถือ)
function _initHomeFab() {
  if (document.getElementById('home-fab')) return
  const fab = document.createElement('button')
  fab.id = 'home-fab'
  fab.title = 'กลับหน้าภาพรวม'
  fab.className = 'hidden fixed z-40 items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105'
  fab.style.cssText = 'position:fixed;left:max(0.75rem, env(safe-area-inset-left));bottom:max(0.75rem, env(safe-area-inset-bottom));right:auto;top:auto;'
  fab.innerHTML = `<span class="text-lg">🏠</span><span>หน้าภาพรวม</span>`
  fab.addEventListener('click', () => navigate('overview'))
  document.body.appendChild(fab)
}

function _updateHomeFabVisibility(view) {
  const fab = document.getElementById('home-fab')
  if (!fab) return
  const show = view !== 'overview'
  fab.classList.toggle('hidden', !show)
  fab.classList.toggle('flex', show)
}

function _initDonateFloatingBtn(hasPendingDonation = false) {
  document.getElementById('donate-float-btn')?.remove()
  const btn = document.createElement('button')
  btn.id = 'donate-float-btn'
  btn.title = hasPendingDonation ? 'รอแอดมินรับทราบการโดเนทของคุณ' : 'สนับสนุนผู้พัฒนา'
  btn.className = 'fixed z-[40] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-white shadow-lg shadow-amber-300/40 flex items-center justify-center overflow-hidden transition-transform hover:scale-105'
  btn.style.cssText = 'position:fixed;right:max(0.75rem, env(safe-area-inset-right));bottom:max(0.75rem, env(safe-area-inset-bottom));top:auto;left:auto;'
  btn.innerHTML = hasPendingDonation
    ? `<span class="text-xl sm:text-2xl">☕</span>`
    : `<span class="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full">
        <span class="absolute inset-1 rounded-full bg-amber-300/40"></span>
        <span class="relative text-xl sm:text-2xl">☕</span>
       </span>`
  btn.addEventListener('click', async () => {
    const cfg = await getSystemConfig().catch(() => ({}))
    _showDonateModal(null, cfg)
  })
  document.body.appendChild(btn)
  _toggleFloatingFabsForView(_currentView)
}

// ── Promo Popup (ครูที่ยังไม่โดเนท) ─────────────────────────────────────────
function _showPromoPopup(cfg, tiers, features) {
  document.getElementById('promo-popup')?.remove()
  const PROMO_KEY = 'pp5_promo_seen'
  const minAmount = _toPositiveInt(cfg.donationMinAmount, 49)

  // เริ่มต้นที่ tier 1
  let activeTierIdx = 0  // 0-based index into tiers array

  const _featureHtml = (idx) => {
    const tierN = idx + 1  // 1-based
    return features.map(f => {
      const unlocked = tierN >= (f.minTier ?? 1)
      return unlocked
        ? `<div class="flex items-center gap-2.5 text-sm text-gray-800 py-1">
             <span class="text-base flex-shrink-0">${_esc(f.icon)}</span>
             <span>${_esc(f.text)}</span>
           </div>`
        : `<div class="flex items-center gap-2.5 text-sm text-gray-300 py-1">
             <span class="text-base flex-shrink-0">🔒</span>
             <span class="line-through">${_esc(f.text)}</span>
             <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${f.minTier}+</span>
           </div>`
    }).join('')
  }

  const wrap = document.createElement('div')
  wrap.id = 'promo-popup'
  wrap.className = 'fixed inset-0 z-[85] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4'

  const _buildHtml = (idx) => {
    const tier = tiers[idx]
    const hex  = tier?.color || '#f59e0b'
    const s    = String(tier?.sticker ?? '')
    const imgEl = /^https?:\/\//.test(s)
      ? `<img src="${_esc(s)}" class="w-16 h-16 object-contain drop-shadow-md" />`
      : `<span class="text-5xl">${_esc(s || '🏅')}</span>`

    return `
    <div class="bg-white w-full sm:max-w-sm rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Sticker row -->
      <div class="pt-5 px-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">เลือกระดับที่สนใจ</p>
        <div class="flex justify-center gap-2">
          ${tiers.map((t, i) => {
            const ts = String(t.sticker ?? '')
            const tHex = t.color || '#f59e0b'
            const isActive = i === idx
            const sEl = /^https?:\/\//.test(ts)
              ? `<img src="${_esc(ts)}" class="w-10 h-10 object-contain" />`
              : `<span class="text-3xl">${_esc(ts)}</span>`
            return `<button class="promo-tier-btn flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all"
              data-idx="${i}"
              style="${isActive ? `box-shadow:0 0 0 3px ${tHex};` : 'box-shadow:0 0 0 2px #e5e7eb;'}">
              ${sEl}
            </button>`
          }).join('')}
        </div>
      </div>
      <!-- Tier info + features -->
      <div class="px-5 py-4 overflow-y-auto flex-1">
        <div class="flex items-center gap-2 mb-1">
          ${imgEl}
          <div>
            <p class="font-bold text-gray-800 text-base">${_esc(tier?.title ?? '')}</p>
            <p class="text-xs" style="color:${hex}">${_esc(tier?.note ?? '')}</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-2 mb-3">ยอดสนับสนุนขั้นต่ำ <span class="font-bold text-gray-700">${tier?.amount?.toLocaleString() ?? minAmount} บาท</span></p>
        <div class="divide-y divide-gray-50">
          ${_featureHtml(idx)}
        </div>
      </div>
      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex-shrink-0 space-y-3">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="promo-no-show" class="w-4 h-4 rounded accent-gray-400" />
          <span class="text-xs text-gray-400">ไม่ต้องการให้แสดงหน้านี้อีก</span>
        </label>
        <button id="promo-support" class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${hex}">
          สนับสนุนในระดับนี้ (${tier?.amount?.toLocaleString() ?? minAmount} บาท+)
        </button>
        <button id="promo-later" class="w-full text-sm text-gray-400 hover:text-gray-600 py-1 transition">
          ภายหลัง
        </button>
      </div>
    </div>`
  }

  wrap.innerHTML = _buildHtml(activeTierIdx)
  document.body.appendChild(wrap)

  const _rerender = (idx) => {
    activeTierIdx = idx
    wrap.querySelector('.bg-white').outerHTML = _buildHtml(idx)
    // re-bind after rerender
    _bind()
  }

  const _dismiss = () => {
    if (wrap.querySelector('#promo-no-show')?.checked) {
      localStorage.setItem(PROMO_KEY, String(Date.now()))
    }
    wrap.remove()
  }

  const _bind = () => {
    wrap.querySelectorAll('.promo-tier-btn').forEach(btn => {
      btn.addEventListener('click', () => _rerender(parseInt(btn.dataset.idx)))
    })
    wrap.querySelector('#promo-support')?.addEventListener('click', () => {
      _dismiss()
      _showDonateModal(null, cfg)
    })
    wrap.querySelector('#promo-later')?.addEventListener('click', _dismiss)
    wrap.addEventListener('click', e => { if (e.target === wrap) _dismiss() })
  }
  _bind()
}

// ── Sidebar upgrade button (tier 1-4) ────────────────────────────────────────
function _addUpgradeSidebar(cfg, tiers, currentTierIdx) {
  if (document.getElementById('sidebar-upgrade-item')) return
  const nav = document.querySelector('#sidebar nav')
  if (!nav) return
  const currentTier = tiers[currentTierIdx - 1]
  const nextTier    = tiers[currentTierIdx]
  const s = String(currentTier?.sticker ?? '')
  const sEl = /^https?:\/\//.test(s)
    ? `<img src="${_esc(s)}" class="w-5 h-5 object-contain flex-shrink-0" />`
    : `<span class="flex-shrink-0">${_esc(s || '🏅')}</span>`
  const item = document.createElement('a')
  item.id = 'sidebar-upgrade-item'
  item.href = '#'
  item.className = 'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition text-amber-400/70 hover:text-amber-300 hover:bg-emerald-800/40 opacity-70 hover:opacity-100'
  item.innerHTML = `${sEl} <span>อัปเกรดระดับ</span>`
  item.title = nextTier ? `อัปเกรดเป็น ${nextTier.title}` : 'สนับสนุนเพิ่มเติม'
  item.addEventListener('click', async e => {
    e.preventDefault()
    _showDonateModal(null, cfg)
  })
  nav.appendChild(item)
}

async function _initDonationFlow(teacherId) {
  try {
    const [requests, cfg] = await Promise.all([
      getMyDonationRequests(teacherId),
      getSystemConfig().catch(() => ({})),
    ])

    if ((cfg.quotaMode ?? 'payment') !== 'school_sponsored') return

    const minAmt  = _toPositiveInt(cfg.donationMinAmount, 49)
    const step    = _toPositiveInt(cfg.donationAmountStep, 50)
    const tiers   = _parseDonationStickers(cfg, minAmt, step)
    const features = _parseDonationFeatures(cfg)
    const maxTier = tiers.length  // 5

    const approved = requests.find(r => r.package_type === 'donation' && r.status === 'approved')
    const pending  = requests.some(r  => r.package_type === 'donation' && r.status === 'pending')
    // tier คำนวณจากยอดสะสมของทุกรายการที่อนุมัติแล้ว ไม่ใช่แค่รายการล่าสุด — เพื่อรองรับการโดเนทซ้ำเพื่ออัปเกรดระดับ
    const totalApproved = requests
      .filter(r => r.package_type === 'donation' && r.status === 'approved')
      .reduce((sum, r) => sum + (r.amount ?? 0), 0)

    window._pp5SystemCfg = cfg

    if (approved) {
      // แสดงการ์ดขอบคุณครั้งแรก
      const seen = localStorage.getItem(`pp5_thankyou_seen_${approved.id}`)
      if (!seen && approved.admin_note) _showThankYouCard(approved)

      const tierIndex = _getDonorTierIndex(cfg, tiers, totalApproved)
      window._pp5DonorTierIndex = tierIndex
      if (tierIndex >= maxTier) {
        // tier สูงสุด — แสดงแค่สติกเกอร์ใน sidebar
        _addDonateToSidebar(approved)
      } else {
        // tier ต่ำกว่าสูงสุด — แสดงปุ่มอัปเกรด
        _addDonateToSidebar(approved)
        _addUpgradeSidebar(cfg, tiers, tierIndex)
      }
    } else {
      _initDonateFloatingBtn(pending)
      if (!pending && cfg.donationPromoEnabled !== 'false') {
        const PROMO_KEY = 'pp5_promo_seen'
        const seen = localStorage.getItem(PROMO_KEY)
        const expired = !seen || Date.now() - parseInt(seen) > 14 * 24 * 60 * 60 * 1000
        if (expired) setTimeout(() => _showPromoPopup(cfg, tiers, features), 1500)
      }
    }
  } catch {
    // ไม่แสดงปุ่มถ้า config โหลดไม่ได้
  }
}

// ── หน้า 1.5: เลือกจำนวนห้อง (per_subject) ──────────────────────────────────
function _showRoomCountPage(course, cfg = {}) {
  document.getElementById('room-count-page')?.remove()
  const pClass = parseInt(cfg.pricePerClass ?? 49)
  const wrap = document.createElement('div')
  wrap.id = 'room-count-page'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="rc-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">แพ็กเกจรายห้อง</h3>
          <p class="text-xs text-gray-400">${pClass} บาท / ห้อง / เทอม</p>
        </div>
      </div>
      <div class="px-5 py-6 flex flex-col gap-5">
        <p class="text-sm text-gray-600">ต้องการเพิ่มห้องเรียนอีกกี่ห้อง?</p>
        <div class="flex items-center justify-center gap-5">
          <button id="rc-minus"
            class="w-12 h-12 rounded-xl border-2 border-gray-200 text-2xl font-bold text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition flex items-center justify-center">
            −
          </button>
          <div class="text-center min-w-[80px]">
            <p id="rc-count" class="text-5xl font-extrabold text-indigo-600">1</p>
            <p class="text-xs text-gray-400 mt-1">ห้อง</p>
          </div>
          <button id="rc-plus"
            class="w-12 h-12 rounded-xl border-2 border-gray-200 text-2xl font-bold text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition flex items-center justify-center">
            ＋
          </button>
        </div>
        <div class="bg-indigo-50 rounded-xl p-4 text-center">
          <p class="text-xs text-gray-500 mb-1">ยอดที่ต้องชำระ</p>
          <p id="rc-total" class="text-3xl font-extrabold text-indigo-600">${pClass} <span class="text-sm font-normal text-gray-400">บาท</span></p>
          <p class="text-xs text-gray-400 mt-1">(${pClass} บ. × 1 ห้อง)</p>
        </div>
      </div>
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="rc-cancel"
          class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 font-medium">
          ยกเลิก
        </button>
        <button id="rc-next"
          class="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
          ถัดไป →
        </button>
      </div>
    </div>`

  document.body.appendChild(wrap)

  let count = 1
  const countEl = wrap.querySelector('#rc-count')
  const totalEl = wrap.querySelector('#rc-total')

  const updateDisplay = () => {
    countEl.textContent = count
    const total = pClass * count
    totalEl.innerHTML = `${total.toLocaleString()} <span class="text-sm font-normal text-gray-400">บาท</span>`
    totalEl.nextElementSibling.textContent = `(${pClass} บ. × ${count} ห้อง)`
    wrap.querySelector('#rc-minus').disabled = count <= 1
  }

  wrap.querySelector('#rc-minus').addEventListener('click', () => { if (count > 1) { count--; updateDisplay() } })
  wrap.querySelector('#rc-plus').addEventListener('click', () => { count++; updateDisplay() })
  wrap.querySelector('#rc-back').addEventListener('click', () => {
    wrap.remove()
    _showQuotaPopup(0, course, cfg)
  })
  wrap.querySelector('#rc-cancel').addEventListener('click', () => wrap.remove())
  wrap.querySelector('#rc-next').addEventListener('click', () => {
    wrap.remove()
    _showPaymentPage('per_subject', course, count, cfg)
  })
}

// ── หน้า 2: ชำระเงิน (รองรับ QR Code + จำนวนห้อง) ──────────────────────────
async function _showPaymentPage(pkgType, course, roomCount = 1, cfgIn = null) {
  document.getElementById('payment-page')?.remove()

  const cfg    = cfgIn ?? await getSystemConfig().catch(() => ({}))
  const pClass = parseInt(cfg.pricePerClass ?? 49)
  const pSem   = parseInt(cfg.priceSemester ?? 299)
  const ppMobile = (cfg.paymentPromptpay ?? '0825424340').replace(/\D/g, '')

  const amount = pkgType === 'semester' ? pSem : pClass * roomCount
  const pkgLabel = pkgType === 'semester'
    ? `เหมาทั้งเทอม`
    : `รายห้อง × ${roomCount} ห้อง`
  const pkgDetail = pkgType === 'semester'
    ? `ทุกวิชา ทุกห้อง ตลอดเทอม`
    : `${pClass} บ. × ${roomCount} ห้อง = ${amount.toLocaleString()} บ.`

  const wrap = document.createElement('div')
  wrap.id = 'payment-page'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="pp-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none mr-1">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">ชำระเงิน — ${pkgLabel}</h3>
          <p class="text-xs text-gray-400">${pkgDetail}</p>
        </div>
        <div class="bg-indigo-600 text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
          ${amount.toLocaleString()} บ.
        </div>
      </div>

      <!-- Body -->
      <div class="overflow-auto flex-1 px-5 py-4 space-y-4">

        <!-- QR Code PromptPay (dynamic) -->
        <div class="text-center">
          <p class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">สแกน QR PromptPay</p>
          <div id="pp-qr-wrap" class="flex flex-col items-center gap-2">
            <div class="w-[220px] h-[220px] bg-gray-100 rounded-xl flex items-center justify-center animate-pulse mx-auto">
              <p class="text-xs text-gray-400">กำลังสร้าง QR...</p>
            </div>
          </div>
          <div class="mt-2 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2">
            <span class="text-xs text-gray-500">ยอดที่ต้องชำระ</span>
            <span class="font-extrabold text-emerald-700 text-lg">${amount.toLocaleString()} บาท</span>
          </div>
          <p class="text-[11px] text-gray-400 mt-1">พร้อมเพย์ ${ppMobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}</p>
        </div>

        <!-- รายละเอียดบัญชี (คัดลอกได้) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2.5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">ข้อมูลการโอน</p>
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">พร้อมเพย์</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1.5"
              data-copy="${ppMobile}">
              ${ppMobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')} <span class="text-[10px] text-gray-400">คัดลอก</span>
            </button>
          </div>
          ${cfg.paymentBankName ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ธนาคาร</span>
            <span class="text-sm font-medium text-gray-700">${cfg.paymentBankName}</span>
          </div>` : ''}
          ${cfg.paymentAccountNo ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">เลขบัญชี</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1.5"
              data-copy="${cfg.paymentAccountNo}">
              ${cfg.paymentAccountNo} <span class="text-[10px] text-gray-400">คัดลอก</span>
            </button>
          </div>` : ''}
          ${cfg.paymentAccountName ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ชื่อบัญชี</span>
            <span class="text-sm font-medium text-gray-700">${cfg.paymentAccountName}</span>
          </div>` : ''}
          ${cfg.paymentNote ? `
          <p class="text-[11px] text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mt-1">${cfg.paymentNote}</p>` : ''}
        </div>

        <!-- อัปโหลดสลิป -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">อัปโหลดสลิปการโอนเงิน</p>
          <label id="slip-label"
            class="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200
                   rounded-xl py-6 cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition">
            <span class="text-3xl">📎</span>
            <span class="text-sm text-gray-500">แตะเพื่อเลือกรูปสลิป</span>
            <span class="text-xs text-gray-400">รองรับ JPG, PNG, PDF</span>
            <input type="file" id="slip-file" accept="image/*,application/pdf" class="sr-only"/>
          </label>
          <div id="slip-preview" class="hidden mt-2 relative">
            <img id="slip-img" class="w-full rounded-xl object-cover max-h-48 border border-gray-100"/>
            <p id="slip-name" class="text-xs text-gray-500 mt-1 text-center truncate"></p>
            <button id="slip-remove" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs">✕</button>
          </div>
        </div>

        <p class="text-[11px] text-gray-400 text-center">
          หลังส่งหลักฐาน แอดมินจะตรวจสอบและอนุมัติภายใน 24 ชั่วโมง
        </p>
      </div>

      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
        <button id="pp-submit"
          class="w-full py-3.5 rounded-xl bg-emerald-600 text-white text-sm font-bold
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ✅ ส่งหลักฐานการชำระเงิน
        </button>
        <p id="pp-err" class="hidden text-xs text-red-500 text-center mt-2"></p>
      </div>
    </div>`

  document.body.appendChild(wrap)

  // สร้าง QR Code ตามยอดจริง
  promptpayQRDataURL(ppMobile, amount).then(dataUrl => {
    const qrWrap = wrap.querySelector('#pp-qr-wrap')
    if (qrWrap) qrWrap.innerHTML = `
      <img src="${dataUrl}" class="w-[220px] h-[220px] rounded-xl border border-gray-100 shadow-sm mx-auto" />
      <p class="text-[10px] text-gray-400">QR สำหรับ ${amount.toLocaleString()} บาทเท่านั้น</p>`
  }).catch(() => {
    // fallback: ใช้รูป QR จาก admin settings ถ้ามี
    if (cfg.paymentQrUrl) {
      const qrWrap = wrap.querySelector('#pp-qr-wrap')
      if (qrWrap) qrWrap.innerHTML = `<img src="${cfg.paymentQrUrl}" class="mx-auto h-[220px] object-contain rounded-xl border border-gray-100 shadow-sm" />`
    }
  })

  // ← กลับ
  wrap.querySelector('#pp-back').addEventListener('click', () => {
    wrap.remove()
    if (pkgType === 'per_subject') {
      _showRoomCountPage(course, cfg)
    } else {
      _showQuotaPopup(_teacher?.teachers_quota?.total_classes_created ?? 0, course, cfg)
    }
  })

  // คัดลอก
  wrap.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.copy).catch(()=>{})
      btn.querySelector('span').textContent = '✓ คัดลอกแล้ว'
      setTimeout(() => btn.querySelector('span').textContent = 'คัดลอก', 2000)
    })
  })

  // เลือกไฟล์
  let slipFile = null
  const fileInput = wrap.querySelector('#slip-file')
  const preview  = wrap.querySelector('#slip-preview')
  const slipImg  = wrap.querySelector('#slip-img')
  const slipName = wrap.querySelector('#slip-name')

  fileInput.addEventListener('change', e => {
    slipFile = e.target.files[0]
    if (!slipFile) return
    slipName.textContent = slipFile.name
    if (slipFile.type.startsWith('image/')) {
      slipImg.src = URL.createObjectURL(slipFile)
      slipImg.classList.remove('hidden')
    } else {
      slipImg.classList.add('hidden')
    }
    preview.classList.remove('hidden')
    wrap.querySelector('#slip-label').classList.add('hidden')
  })

  wrap.querySelector('#slip-remove').addEventListener('click', () => {
    slipFile = null; fileInput.value = ''
    preview.classList.add('hidden')
    wrap.querySelector('#slip-label').classList.remove('hidden')
  })

  // ส่งหลักฐาน
  wrap.querySelector('#pp-submit').addEventListener('click', async () => {
    const errEl = wrap.querySelector('#pp-err')
    if (!slipFile) {
      errEl.textContent = 'กรุณาอัปโหลดสลิปก่อนนะครับ'
      errEl.classList.remove('hidden'); return
    }
    errEl.classList.add('hidden')
    const btn = wrap.querySelector('#pp-submit')
    btn.disabled = true; btn.textContent = '⏳ กำลังส่ง...'
    try {
      const req = await createPaymentRequest({
        teacher_id:   _teacher.id,
        package_type: pkgType,
        amount,
        room_count:   pkgType === 'per_subject' ? roomCount : null,
        subject_id:   pkgType === 'per_subject' ? (course?.id ?? null) : null,
        status:       'pending',
      })
      const slipUrl = await uploadPaymentSlip(slipFile, req.id)
      await supabase.from('payment_requests').update({ slip_url: slipUrl }).eq('id', req.id)

      wrap.remove()
      _showPaymentSuccess()
    } catch (err) {
      btn.disabled = false; btn.textContent = '✅ ส่งหลักฐานการชำระเงิน'
      errEl.textContent = 'เกิดข้อผิดพลาด กรุณาลองใหม่: ' + (err.message ?? '')
      errEl.classList.remove('hidden')
    }
  })
}

// ── หน้า 3: สำเร็จ ───────────────────────────────────────────────────────────
function _showPaymentSuccess() {
  const wrap = document.createElement('div')
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'
  wrap.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-7 text-center">
      <div class="text-6xl mb-4">✅</div>
      <h3 class="text-lg font-bold text-gray-800 mb-2">ส่งหลักฐานแล้ว!</h3>
      <p class="text-sm text-gray-500 mb-1">แอดมินจะตรวจสอบและอนุมัติ</p>
      <p class="text-sm font-semibold text-indigo-600 mb-5">ภายใน 24 ชั่วโมง</p>
      <div class="bg-amber-50 rounded-xl p-3 mb-5 text-left">
        <p class="text-xs text-amber-700">
          📱 คุณจะได้รับการแจ้งเตือนในแอปเมื่อแอดมินอนุมัติแล้ว
          หลังจากนั้นกลับมากด "สร้างห้องเรียน" ได้เลยครับ
        </p>
      </div>
      <button onclick="this.closest('.fixed').remove()"
        class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700">
        รับทราบ ขอบคุณครับ
      </button>
    </div>`
  document.body.appendChild(wrap)
  wrap.addEventListener('click', e => { if (e.target === wrap) wrap.remove() })
}

// ─── Sidebar header: logo + term ─────────────────────────────────────────────
async function loadSidebarHeader(teacher) {
  try {
    const cfg = await getSystemConfig()

    // ภาคเรียน / ปีการศึกษา (keys ตรงกับที่ admin บันทึก)
    const term = cfg.semester ?? cfg.semester ?? '—'
    const year = cfg.academicYear ?? cfg.academic_year ?? '—'
    const termEl = document.getElementById('sidebar-term')
    if (termEl) termEl.textContent = `ภาคเรียนที่ ${term} / ${year}`

    // โลโก้: มัธยม → samaiLogoUrl, ปวช → porworLogoUrl
    const cat    = teacher?.category ?? ''
    const isVoc  = /ปวช/i.test(cat)
    const logoUrl = isVoc
      ? (cfg.porworLogoUrl ?? cfg.samaiLogoUrl ?? '')
      : (cfg.samaiLogoUrl ?? '')

    const logoImg = document.getElementById('school-logo')
    const logoFb  = document.getElementById('school-logo-fallback')
    if (logoImg && logoUrl) {
      logoImg.src = logoUrl
      logoImg.classList.remove('hidden')
      logoFb?.classList.add('hidden')
    }

    // ช่องทางติดต่อ — แสดงเป็นปุ่มเดียว เมื่อคลิกเปิด popup กลางหน้าจอ
    const contactEl = document.getElementById('sidebar-contact')
    if (contactEl) {
      const links = [
        cfg.contactPhone    && { icon:'📞', label: cfg.contactPhone,    href: `tel:${cfg.contactPhone.replace(/\s/g,'')}` },
        cfg.contactLine     && { icon:'💬', label: 'LINE: ' + cfg.contactLine, href: cfg.contactLine.startsWith('http') ? cfg.contactLine : `https://line.me/R/ti/p/${cfg.contactLine}` },
        cfg.contactFacebook && { icon:'📘', label: 'Facebook',          href: cfg.contactFacebook },
        cfg.contactEmail    && { icon:'📧', label: cfg.contactEmail,    href: `mailto:${cfg.contactEmail}` },
        cfg.contactOther    && { icon:'🔗', label: cfg.contactOther,    href: null },
      ].filter(Boolean)

      if (links.length > 0) {
        // เก็บ links ไว้ใน global สำหรับ popup
        window._contactLinks = links

        contactEl.innerHTML = `
          <button id="btn-contact-admin"
            class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm
                   font-medium text-emerald-200 hover:bg-emerald-700 border border-emerald-700 transition">
            📞 ติดต่อผู้ดูแล
          </button>`
        contactEl.classList.remove('hidden')

        document.getElementById('btn-contact-admin').addEventListener('click', () => {
          document.getElementById('contact-modal')?.remove()
          const m = document.createElement('div')
          m.id = 'contact-modal'
          m.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4'
          m.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade">
              <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 class="font-bold text-gray-800">📞 ติดต่อผู้ดูแลระบบ</h3>
                <button id="contact-modal-close"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-lg">×</button>
              </div>
              <div class="p-5 space-y-3">
                ${links.map(l => l.href
                  ? `<a href="${l.href}" target="_blank" rel="noopener"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 transition group">
                        <span class="text-xl">${l.icon}</span>
                        <span class="text-sm font-medium text-gray-700 group-hover:text-emerald-700 break-all">${l.label}</span>
                        <span class="ml-auto text-gray-300 group-hover:text-emerald-400 text-xs">→</span>
                      </a>`
                  : `<div class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50">
                       <span class="text-xl">${l.icon}</span>
                       <span class="text-sm font-medium text-gray-700 break-all">${l.label}</span>
                     </div>`
                ).join('')}
                <button id="contact-donate-btn"
                  class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-white font-semibold text-sm shadow-md shadow-amber-200/50 transition">
                  ☕ สนับสนุนผู้พัฒนา
                </button>
              </div>
            </div>`
          document.body.appendChild(m)
          m.querySelector('#contact-modal-close').addEventListener('click', () => m.remove())
          m.querySelector('#contact-donate-btn')?.addEventListener('click', async () => {
            m.remove()
            const cfg = await getSystemConfig().catch(() => ({}))
            _showDonateModal(null, cfg)
          })
          m.addEventListener('click', e => { if (e.target === m) m.remove() })
        })
      }
    }
  } catch { /* ไม่ critical */ }
}

// ─── Supervisor Notifications ────────────────────────────────────────────────
let _unreadNotifs = []

async function _loadSupervisorNotifications(teacherId) {
  try {
    _unreadNotifs = await getUnreadNotifications(teacherId)
    _renderNotifBadge()
  } catch {}
}

function _renderNotifBadge() {
  // ลบ badge เก่า
  document.querySelectorAll('#sv-notif-badge').forEach(el => el.remove())
  if (!_unreadNotifs.length) return

  const n = _unreadNotifs.length
  const metricLabel = {general:'ทั่วไป',profile:'โปรไฟล์',dates:'วันสอน',attendance:'เช็คชื่อ',scores:'คะแนน'}

  // Badge ใน sidebar (ข้างชื่อครู)
  const tName = document.getElementById('t-name')
  if (tName) {
    const badge = document.createElement('span')
    badge.id = 'sv-notif-badge'
    badge.style.cssText = 'display:inline-block;background:#dc2626;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 6px;margin-left:6px;cursor:pointer;'
    badge.textContent = n
    badge.title = `${n} ข้อความจากหัวหน้า`
    badge.onclick = () => _showNotifPopup(_teacher?.id)
    tName.parentElement?.appendChild(badge)
  }

  // expose globally so banner can trigger popup
  window._showSvNotifPopup = () => _showNotifPopup(_teacher?.id)

  // Push notification (ถ้า service worker พร้อม)
  if ('Notification' in window && Notification.permission === 'granted' && n > 0) {
    new Notification('ปพ.5 ออนไลน์ — มีข้อความจากหัวหน้า', {
      body: _unreadNotifs[0].comment,
      icon: '/pp5online/public/pp5-form-logo.png',
    })
  }
}

async function _showNotifPopup(teacherId) {
  const metricLabel = {general:'ทั่วไป',profile:'โปรไฟล์',dates:'วันสอน',attendance:'เช็คชื่อ',scores:'คะแนน'}
  const catColor = {general:'#f9fafb',profile:'#ede9fe',dates:'#dbeafe',attendance:'#d1fae5',scores:'#fef9c3'}
  const catText  = {general:'#374151',profile:'#5b21b6',dates:'#1e40af',attendance:'#065f46',scores:'#713f12'}
  const posLabel = {dept_head:'หัวหน้ากลุ่มสาระ',registrar:'หัวหน้าฝ่ายทะเบียน',
    academic_samai:'หัวหน้าวิชาการสามัญ',academic_religion:'หัวหน้าวิชาการศาสนา',academic_pvch:'หัวหน้าวิชาการปวช'}
  const svName = n => {
    const sv = n.supervisor
    if (!sv) return 'หัวหน้า'
    const pos = posLabel[sv.position] ?? 'หัวหน้า'
    return sv.full_name ? `${pos} (${sv.full_name})` : pos
  }
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;'
  overlay.innerHTML = `<div style="background:#fff;border-radius:16px;width:min(500px,96vw);max-height:85vh;overflow-y:auto;padding:24px;position:relative;">
    <button style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;" onclick="this.closest('div').parentElement.remove()">✕</button>
    <div style="font-size:16px;font-weight:700;margin-bottom:4px;">🔔 ข้อความจากหัวหน้า</div>
    <div style="font-size:12px;color:#6b7280;margin-bottom:16px;">ได้รับการตรวจสอบแล้ว ${_unreadNotifs.length} รายการ</div>
    ${_unreadNotifs.map(n=>`
      <div style="background:${catColor[n.metric]??'#f9fafb'};border-radius:12px;padding:14px 16px;margin-bottom:10px;border-left:4px solid ${catText[n.metric]??'#6b7280'};">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:700;color:${catText[n.metric]??'#374151'};background:${catColor[n.metric]??'#f9fafb'};
            border:1px solid currentColor;border-radius:8px;padding:1px 8px;">
            ${metricLabel[n.metric]??n.metric}
          </span>
          <span style="font-size:10px;color:#9ca3af;">${new Date(n.created_at).toLocaleString('th')}</span>
        </div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;">จาก: ${svName(n)}</div>
        <div style="font-size:13px;color:#374151;line-height:1.5;">${n.comment}</div>
      </div>`).join('')}
    <button id="sv-mark-read"
      style="width:100%;margin-top:8px;padding:10px;background:#059669;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
      ✓ รับทราบทั้งหมด
    </button>
  </div>`
  document.body.appendChild(overlay)
  overlay.addEventListener('click', e => { if(e.target===overlay) overlay.remove() })
  overlay.querySelector('#sv-mark-read').onclick = async () => {
    await markNotificationsRead(teacherId)
    _unreadNotifs = []
    document.querySelectorAll('#sv-notif-badge').forEach(el => el.remove())
    overlay.remove()
  }
}

// ─── Supervisor Mode Toggle ───────────────────────────────────────────────────
let _supervisorMode = false
let _savedNavHTML  = null

async function _enterSupervisorMode() {
  const main = document.getElementById('main-content') ?? document.querySelector('main') ?? document.getElementById('content-area')
  const nav  = document.querySelector('#sidebar nav')
  if (!main || _supervisorMode) return
  // กันคลิกช่วงที่ _teacher ยังโหลดไม่เสร็จ/หลุดชั่วคราว (เจอจริง TypeError ตอน renderSupervisorDashboard
  // อ่าน .positions จาก teacher เป็น null) — โหลดซ้ำอีกครั้งก่อนเข้าโหมดนี้เสมอ
  if (!_teacher?.id) {
    showToast('กำลังโหลดข้อมูลครู กรุณารอสักครู่แล้วลองใหม่', 'warning')
    try { _teacher = await getMyTeacherProfile((await supabase.auth.getUser()).data.user?.id) } catch {}
    if (!_teacher?.id) return
  }
  _supervisorMode = true
  if (nav) _savedNavHTML = nav.innerHTML
  await _loadSportsVisibility()
  _renderSupervisorNav(nav, main, _isAlsoAdmin)
  const { renderSupervisorDashboard } = await import('./supervisor.js')
  renderSupervisorDashboard(main, _teacher, _isAlsoAdmin)
}
window._enterSupervisorMode = _enterSupervisorMode

function _exitSupervisorMode() {
  const main = document.getElementById('main-content') ?? document.querySelector('main') ?? document.getElementById('content-area')
  const nav  = document.querySelector('#sidebar nav')
  if (!_supervisorMode) return
  _supervisorMode = false
  if (nav && _savedNavHTML) {
    nav.innerHTML = _savedNavHTML
    _savedNavHTML = null
    // re-bind all nav buttons
    _rebindNav(nav, main)
  }
  navigate('overview')
}

// ── ประกาศ (ป๊อบอัพกลางจอ) ───────────────────────────────────────────────────
async function _loadAnnouncementBanners() {
  try {
    const items = await getActiveAnnouncements('teacher')
    showAnnouncementPopups(items, 'pp5_ann_dismissed')
  } catch { /* ไม่ block */ }
}

// ป๊อบอัพเตือนกรอกแบบสำรวจค่ายลูกเสือ TERANGGANU — โชว์เฉพาะครูที่เป็นผู้เข้าร่วมค่ายจริงและยังไม่กรอก
async function _checkTerangganuSurveyNudge() {
  try {
    const status = await getMyTerangganuSurveyStatus()
    if (status?.is_participant && !status.completed) showTerangganuUrgentModal('teacher')
  } catch { /* ไม่ block */ }
}

// map feature key → { icon, label, renderFn }
const _SV_MENU_ITEMS = [
  { key:'announce_create',  icon:'📢', label:'จัดการประกาศ',   fn: (t, isAdmin) => { import('./views.js').then(({renderSupervisorAnnouncements}) => renderSupervisorAnnouncements(t, isAdmin)) }},
  { key:'work_calendar',    icon:'📅', label:'ปฏิทินปฏิบัติงาน', fn: (t) => { import('./views.js').then(({renderWorkCalendar}) => renderWorkCalendar(t)) }},
  { key:'lang_config',      icon:'⚙️', label:'ตั้งค่าคำอธิบายฯ',fn: async (t,a) => { const {renderCourseDocLangConfig} = await import('./teacher-views.js'); renderCourseDocLangConfig(t, a) } },
  { key:'menu_holidays',    icon:'📅', label:'วันหยุด',        fn: async () => { const {renderHolidays}     = await import('./views.js'); renderHolidays() }},
  { key:'menu_periods',     icon:'🕐', label:'คาบเรียน',       fn: async () => { const {renderPeriods}      = await import('./views.js'); renderPeriods() }},
  { key:'menu_curriculum',  icon:'📘', label:'หลักสูตรแกนกลาง',fn: async () => { const {renderCurriculum}   = await import('./views.js'); renderCurriculum() }},
  { key:'menu_subjects',    icon:'📖', label:'รายวิชา',        fn: async () => { const {renderSubjects}     = await import('./views.js'); renderSubjects() }},
  { key:'menu_departments', icon:'🏫', label:'กลุ่มสาระ',      fn: async () => { const {renderDepartments}  = await import('./views.js'); renderDepartments() }},
  { key:'menu_homeroom',    icon:'🏠', label:'ครูที่ปรึกษา',   fn: async () => { const {renderHomeroom}     = await import('./views.js'); renderHomeroom() }},
  { key:'menu_students',    icon:'👨‍🎓', label:'นักเรียน',       fn: async () => { const {renderStudents}     = await import('./views.js'); renderStudents() }},
  { key:'menu_classrooms',  icon:'🚪', label:'ห้องเรียน',      fn: async () => { const {renderClassroomsAdmin} = await import('./views.js'); renderClassroomsAdmin() }},
  { key:'menu_score_config',icon:'📊', label:'คอลัมน์คะแนน',   fn: async () => { const {renderScoreColConfig} = await import('./views.js'); renderScoreColConfig() }},
  { key:'menu_life_skill',  icon:'🌱', label:'ทักษะชีวิต',     fn: async () => { const {renderLifeSkillAdmin} = await import('./views.js'); renderLifeSkillAdmin() }},
  { key:'menu_reading',     icon:'📗', label:'การอ่าน',        fn: async () => { const {renderReadingAdmin}   = await import('./views.js'); renderReadingAdmin() }},
  { key:'menu_prayer',      icon:'🕌', label:'ละหมาด',         fn: async () => { const {renderPrayerAdmin}    = await import('./views.js'); renderPrayerAdmin() }},
  { key:'menu_house_colors',       icon:'🎨', label:'สีนักเรียน',          fn: async () => { const {renderHouseColors}     = await import('./views.js'); renderHouseColors() }},
  { key:'menu_sports_admin',       icon:'🏆', label:'ระบบกีฬาสี',          fn: async () => openAzizGamesModal({ admin: true, teacherName: _teacher?.full_name, teacherCode: _teacher?.teacher_code }) },
  { key:'menu_azfutsal',           icon:'⚽', label:'AZFUTSALCUP',        fn: async () => openAzfutsalModal() },
  { key:'menu_sports_shirt_settings', icon:'👕', label:'ตั้งค่าและสรุปเสื้อกีฬาสี', fn: async () => renderShirtSummary() },
  { key:'menu_sports_fund_admin', icon:'💰', label:'บัญชีเงินกีฬาสี', fn: async () => renderSportsFundAdmin() },
  { key:'manage_religion_groups',  icon:'🕌', label:'กลุ่มวิชาศาสนา',      fn: async () => { const {renderReligionGroups}  = await import('./views.js'); renderReligionGroups() }},
  { key:'manage_my_religion_group', icon:'👥', label:'กลุ่มของฉัน',        fn: async (t) => { const {renderMyReligionGroup} = await import('./views.js'); renderMyReligionGroup(t) }},
  { key:'menu_classroom_leaders',  icon:'👑', label:'หัวหน้า/รองหัวหน้าห้อง',  fn: async () => { const {renderClassroomLeaders} = await import('./views.js'); renderClassroomLeaders() }},
  { key:'menu_tutorial',           icon:'📖', label:'คู่มือการใช้งาน',      fn: async () => { const {renderTutorialAdmin}   = await import('./tutorial.js'); renderTutorialAdmin() }},
]

function _renderSupervisorNav(nav, main, isAdmin = false) {
  if (!nav) return
  const _POS_LBL2 = { dept_head:'หัวหน้ากลุ่มสาระ', religion_group_head:'หัวหน้ากลุ่ม (ศาสนา)',
    religion_subgroup_head:'หัวหน้ากลุ่มย่อย (ศาสนา)',
    registrar_samai:'ทะเบียน (สามัญ)',
    registrar_religion:'ทะเบียน (ศาสนา)', registrar_pvch:'ทะเบียน (ปวช)',
    academic_samai:'วิชาการ (สามัญ)', academic_religion:'วิชาการ (ศาสนา)',
    academic_pvch:'วิชาการ (ปวช)', house_color_admin:'สีนักเรียน', classroom_leaders_admin:'ผู้ดูแลหัวหน้า/รองหัวหน้า',
    executive:'ผู้บริหาร' }
  const _tPositions2 = _teacher?.positions?.length ? _teacher.positions : (_teacher?.position ? [_teacher.position] : [])
  const posLabel = _tPositions2.length ? _tPositions2.map(p => _POS_LBL2[p] ?? p).join(' / ') : (isAdmin ? 'แอดมิน' : 'หัวหน้า')
  const sportsVisibleForTeacher = _sportsVisibility.enabled !== false && _sportsVisibility.teacher_menu !== false

  // รายการ menu ที่แสดง: admin เห็นทั้งหมด, supervisor เห็นตาม _positionPerms
  const allowedItems = isAdmin
    ? _SV_MENU_ITEMS
    : _SV_MENU_ITEMS.filter(m => {
        if (m.key === 'lang_config') return _positionPerms.lang_config || _tPositions2.includes('dept_head')
        if (m.key === 'menu_house_colors') return _positionPerms.menu_house_colors || _tPositions2.includes('house_color_admin')
        if (m.key === 'menu_sports_admin') return sportsVisibleForTeacher && (_positionPerms.menu_sports_admin || _tPositions2.includes('house_color_admin'))
        if (m.key === 'menu_sports_shirt_settings') return _positionPerms.menu_sports_admin || _tPositions2.includes('house_color_admin')
        if (m.key === 'menu_sports_fund_admin') return _positionPerms.menu_sports_admin || _tPositions2.includes('house_color_admin')
        if (m.key === 'menu_azfutsal') return true
        if (m.key === 'menu_classroom_leaders') return _positionPerms.menu_classroom_leaders || _tPositions2.includes('classroom_leaders_admin')
        if (m.key === 'manage_religion_groups') return _positionPerms.manage_religion_groups || _tPositions2.includes('religion_group_head')
        if (m.key === 'manage_my_religion_group') return _tPositions2.includes('religion_subgroup_head')
        if (m.key === 'announce_manage') return !!_positionPerms.announce_manage
        if (m.key === 'announce_create') return !!_positionPerms.announce_create
        if (m.key === 'work_calendar') return !!_positionPerms.work_calendar
        return !!_positionPerms[m.key]
      })

  const _btn = (id, icon, label) =>
    `<button data-sv="${id}" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium w-full text-left transition hover:bg-emerald-800/50" style="color:#d1fae5;">${icon} ${label}</button>`

  nav.innerHTML = `
    <div style="padding:8px 12px;font-size:11px;color:#6ee7b7;font-weight:600;letter-spacing:.5px;margin-bottom:4px;">📊 ${posLabel}</div>
    ${_btn('back', '←', 'กลับโหมดสอน')}
    <div style="height:1px;background:#065f46;margin:8px 12px;"></div>
    ${_btn('dashboard', '📊', 'Dashboard ติดตาม')}
    ${allowedItems.map(m => _btn(m.key, m.icon, m.label)).join('')}`

  nav.querySelector('[data-sv="back"]').onclick = _exitSupervisorMode
  nav.querySelector('[data-sv="dashboard"]').onclick = () => import('./supervisor.js').then(m => m.renderSupervisorDashboard(main, _teacher, _isAlsoAdmin))
  allowedItems.forEach(m => {
    nav.querySelector(`[data-sv="${m.key}"]`)?.addEventListener('click', () => m.fn(_teacher, isAdmin))
  })
}

function _rebindNav(nav, main) {
  // re-bind data-nav links (lost after nav.innerHTML replacement)
  nav.querySelectorAll(`[data-nav]`).forEach(link => {
    link.addEventListener(`click`, e => { e.preventDefault(); navigate(link.dataset.nav) })
  })
  // re-bind supervisor toggle button (by content matching)
  nav.querySelectorAll('button').forEach(b => {
    const txt = b.textContent.trim()
    if (txt.includes('Dashboard')) b.onclick = _enterSupervisorMode
  })
}

// kept for backward compat with onclick= in html
function _toggleSupervisorMode() {
  if (_supervisorMode) _exitSupervisorMode()
  else _enterSupervisorMode()
}

// ─── Quick Class Picker ───────────────────────────────────────────────────────
async function _showClassQuickPicker(mode) {
  if (!_teacher) return
  const { supabase } = await import('./supabase.js')
  let classes = []
  try {
    const subjects = await supabase.from('master_subjects').select('id').eq('teacher_id', _teacher.id)
    const ids = (subjects.data ?? []).map(s => s.id)
    if (ids.length) {
      const { data } = await supabase
        .from('classes')
        .select('id, course_id, class_name, day1_date, day2_date, day3_date, day4_date, day5_date, day6_date, master_subjects(id, subject_name, subject_code, credit, grade_level, dept, subject_group, teacher_id), class_students(student_id)')
        .in('course_id', ids)
        .order('class_name')
      classes = data ?? []
    }
  } catch { classes = [] }

  if (!classes.length) {
    const { showToast } = await import('./ui.js')
    showToast('ยังไม่มีห้องเรียน', 'warning')
    return
  }
  if (classes.length === 1) { _quickGoToClass(mode, classes[0]); return }

  const title = mode === 'attendance' ? '✅ เลือกห้องเรียน — เช็คชื่อ' : '📝 เลือกห้องเรียน — บันทึกคะแนน'
  const popup = document.createElement('div')
  popup.id = 'qcp-overlay'
  popup.className = 'fixed inset-0 z-[80] flex items-center justify-center p-4'
  popup.innerHTML = `
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="qcp-backdrop"></div>
    <div class="relative bg-white w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[70vh] flex flex-col">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">${title}</p>
        <button id="qcp-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <div class="overflow-y-auto p-3 space-y-2">
        ${classes.map(cls => `
          <button data-cid="${cls.id}" class="qcp-cls w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition border border-gray-100">
            <p class="font-semibold text-gray-800 text-sm">${cls.class_name}</p>
            <p class="text-xs text-gray-400 mt-0.5">${cls.master_subjects?.subject_name ?? ''} · ${cls.class_students?.length ?? 0} คน</p>
          </button>`).join('')}
      </div>
    </div>`
  document.body.appendChild(popup)

  const close = () => popup.remove()
  popup.querySelector('#qcp-backdrop').onclick = close
  popup.querySelector('#qcp-close').onclick = close
  popup.querySelectorAll('.qcp-cls').forEach(btn => {
    btn.onclick = () => {
      close()
      const cls = classes.find(c => String(c.id) === btn.dataset.cid)
      if (cls) _quickGoToClass(mode, cls)
    }
  })
}

window._showClassQuickPicker = _showClassQuickPicker

async function _quickGoToClass(mode, cls) {
  if (mode === 'attendance') {
    const { renderAttendanceGrid } = await import('./teacher-views-attendance.js')
    renderAttendanceGrid(_teacher, cls)
  } else {
    const { renderGradesGrid } = await import('./teacher-views-grades.js')
    renderGradesGrid(_teacher, cls)
  }
}

const CAMERA_ICON_SVG = `
  <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`

const SCAN_CARD_ICON_CLASS = 'w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/20 shadow-[0_10px_20px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.28)] ring-1 ring-white/30 text-2xl leading-none'

function _teacherHasPrayerScannerPermission(cfg, profileRole = null) {
  if (!_teacher) return false
  const teacherCodes = (cfg.prayerScannerTeachers || '')
    .split(/[\s,]+/)
    .map(c => c.trim())
    .filter(Boolean)
  return teacherCodes.includes(_teacher.teacher_code) ||
    _teacher.staff_type === 'แอดมิน' ||
    _teacher.position === 'admin' ||
    profileRole === 'admin'
}

async function _openTeacherScanLauncher() {
  if (!_teacher) return
  document.getElementById('teacher-scan-launcher')?.remove()

  const modal = document.createElement('div')
  modal.id = 'teacher-scan-launcher'
  modal.className = 'fixed inset-0 z-[180] flex items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `
    <div class="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-9 h-9 rounded-2xl text-white bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-700 flex items-center justify-center shadow-[0_10px_24px_rgba(5,150,105,0.30),inset_0_1px_0_rgba(255,255,255,0.35)]">${CAMERA_ICON_SVG}</span>
            <span>เลือกงานสแกน</span>
          </h3>
          <p class="text-xs text-gray-400 mt-0.5">เปิดกล้องสำหรับงานประจำวันจากจุดเดียว</p>
        </div>
        <button id="scan-launcher-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
      </div>
      <div id="scan-launcher-body" class="p-5 overflow-y-auto">
        <div class="flex items-center justify-center py-10 text-gray-400 text-sm">
          <svg class="animate-spin h-5 w-5 text-emerald-400 mr-2" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          กำลังตรวจสอบสิทธิ์...
        </div>
      </div>
    </div>
  `
  document.body.appendChild(modal)
  const close = () => modal.remove()
  modal.addEventListener('click', e => { if (e.target === modal) close() })
  modal.querySelector('#scan-launcher-close')?.addEventListener('click', close)

  const body = modal.querySelector('#scan-launcher-body')
  const [cfg, profileRes] = await Promise.all([
    getSystemConfig().catch(() => ({})),
    (async () => {
      try {
        return await supabase.from('profiles').select('role').eq('id', _teacher.profile_id).maybeSingle()
      } catch {
        return { data: null }
      }
    })(),
  ])
  const canPrayerScan = _teacherHasPrayerScannerPermission(cfg, profileRes?.data?.role ?? null)
  const cardBaseCls = 'group w-full text-left rounded-3xl border p-4 flex gap-3 items-start hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition shadow-[0_14px_30px_rgba(15,23,42,0.12)]'
  const scanCard = {
    attendance: {
      card: `${cardBaseCls} border-sky-700 bg-sky-600 hover:bg-sky-700 hover:shadow-[0_20px_42px_rgba(2,132,199,0.30)]`,
      icon: `${SCAN_CARD_ICON_CLASS} text-white group-hover:shadow-[0_14px_26px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,
      title: 'text-white',
      sub: 'text-sky-50/85',
    },
    prayer: {
      card: `${cardBaseCls} border-emerald-700 bg-emerald-600 hover:bg-emerald-700 hover:shadow-[0_20px_42px_rgba(16,185,129,0.30)]`,
      icon: `${SCAN_CARD_ICON_CLASS} text-white group-hover:shadow-[0_14px_26px_rgba(16,185,129,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,
      title: 'text-white',
      sub: 'text-emerald-50/85',
    },
    leave: {
      card: `${cardBaseCls} border-orange-700 bg-orange-500 hover:bg-orange-600 hover:shadow-[0_20px_42px_rgba(249,115,22,0.30)]`,
      icon: `${SCAN_CARD_ICON_CLASS} text-white group-hover:shadow-[0_14px_26px_rgba(249,115,22,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,
      title: 'text-white',
      sub: 'text-orange-50/90',
    },
    score: {
      card: `${cardBaseCls} border-indigo-700 bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_20px_42px_rgba(79,70,229,0.30)]`,
      icon: `${SCAN_CARD_ICON_CLASS} text-white group-hover:shadow-[0_14px_26px_rgba(79,70,229,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,
      title: 'text-white',
      sub: 'text-indigo-50/85',
    },
  }
  body.innerHTML = `
    <div class="space-y-3">
      <button id="scan-launcher-attendance" type="button" class="${scanCard.attendance.card}">
        <span class="${scanCard.attendance.icon}" aria-hidden="true">✅</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${scanCard.attendance.title} text-sm">สแกน QR เช็คชื่อ</span>
          <span class="block text-xs ${scanCard.attendance.sub} mt-1">เลือกห้องและคาบ ระบบจะโหลดข้อมูลเดิม แล้วเปิดกล้องสแกน</span>
        </span>
      </button>

      ${canPrayerScan ? `
      <button id="scan-launcher-prayer-open" type="button" class="${scanCard.prayer.card}">
        <span class="${scanCard.prayer.icon}" aria-hidden="true">🕌</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${scanCard.prayer.title} text-sm">สแกนละหมาด</span>
          <span class="block text-xs ${scanCard.prayer.sub} mt-1">เปิดระบบสแกน แล้วเลือกจุด/บริเวณในหน้าถัดไป</span>
        </span>
      </button>
      ` : `
      <div class="rounded-3xl border border-emerald-700 bg-emerald-600 p-4 space-y-3 shadow-[0_14px_30px_rgba(16,185,129,0.22)]">
        <div class="flex gap-3 items-start">
          <span class="${SCAN_CARD_ICON_CLASS} text-white" aria-hidden="true">🕌</span>
          <span class="min-w-0 flex-1">
            <span class="block font-extrabold text-white text-sm">สแกนละหมาด</span>
            <span class="block text-xs text-emerald-50/85 mt-1">ต้องได้รับสิทธิ์สแกนจากแอดมินก่อนใช้งาน</span>
          </span>
        </div>
        <button id="scan-launcher-prayer-request" type="button" class="w-full py-3 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-700 text-sm font-extrabold shadow-md transition active:scale-[0.99]">
          ขอสิทธิ์สแกนละหมาด
        </button>
      </div>
      `}

      <button id="scan-launcher-leave" type="button" class="${scanCard.leave.card}">
        <span class="${scanCard.leave.icon}" aria-hidden="true">🚪</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${scanCard.leave.title} text-sm">ตรวจใบอนุญาตออกนอกห้อง</span>
          <span class="block text-xs ${scanCard.leave.sub} mt-1">เปิดหน้าเดิมสำหรับสแกน QR ตรวจสถานะใบอนุญาต</span>
        </span>
      </button>

      <button id="scan-launcher-score" type="button" class="${scanCard.score.card}">
        <span class="${scanCard.score.icon}" aria-hidden="true">📷</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${scanCard.score.title} text-sm">สแกนบันทึกคะแนน</span>
          <span class="block text-xs ${scanCard.score.sub} mt-1">เลือกห้องและคอลัมน์ แล้วสแกน QR นักเรียนเพื่อกรอกคะแนนต่อเนื่อง</span>
        </span>
      </button>
    </div>
  `

  body.querySelector('#scan-launcher-attendance')?.addEventListener('click', async () => {
    close()
    const { openAttendanceScanSetup } = await import('./teacher-views-attendance.js')
    openAttendanceScanSetup(_teacher)
  })
  body.querySelector('#scan-launcher-leave')?.addEventListener('click', () => {
    close()
    navigate('student-leave-scanner')
  })
  body.querySelector('#scan-launcher-score')?.addEventListener('click', async () => {
    close()
    const { openScoreScannerPickClass } = await import('./score-qr-scanner.js')
    openScoreScannerPickClass(_teacher)
  })
  body.querySelector('#scan-launcher-prayer-open')?.addEventListener('click', async () => {
    close()
    const { renderStudentPrayerScanner } = await import('./student-views.js')
    renderStudentPrayerScanner(_teacher)
  })
  body.querySelector('#scan-launcher-prayer-request')?.addEventListener('click', async () => {
    const btn = body.querySelector('#scan-launcher-prayer-request')
    btn.disabled = true
    btn.textContent = 'กำลังส่งคำขอ...'
    const message = [
      'ขอสิทธิ์สแกนละหมาด',
      `ชื่อครู: ${_teacher.full_name || '-'}`,
      `รหัสครู: ${_teacher.teacher_code || '-'}`,
      `กลุ่มสาระ: ${_teacher.dept || '-'}`,
      '',
      'ต้องการใช้งานปุ่มกล้องกลางเพื่อสแกนละหมาด'
    ].join('\n')
    try {
      await submitAppFeedback({
        profileId: _teacher.profile_id,
        senderRole: 'teacher',
        senderName: _teacher.full_name || _teacher.teacher_code || 'คุณครู',
        category: 'suggestion',
        message,
      })
      showToast('ส่งคำขอสิทธิ์สแกนละหมาดถึงแอดมินแล้ว', 'success')
      close()
    } catch (err) {
      btn.disabled = false
      btn.textContent = 'ขอสิทธิ์สแกนละหมาด'
      showToast(err?.code === 'FEEDBACK_LIMIT_REACHED'
        ? `ส่งความคิดเห็นครบโควต้าเดือนนี้แล้ว (${err.limit} ครั้ง/เดือน)`
        : 'ส่งคำขอไม่สำเร็จ กรุณาลองใหม่',
        err?.code === 'FEEDBACK_LIMIT_REACHED' ? 'warning' : 'error')
    }
  })
}

window._openTeacherScanLauncher = _openTeacherScanLauncher

// ─── Init ─────────────────────────────────────────────────────────────────────
// ── Web Notifications ─────────────────────────────────────────────────────────

async function _registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return
  try {
    await navigator.serviceWorker.register('/pp5online/sw.js', { scope: '/pp5online/' })
  } catch {}
}

function _showNotifyPermissionBanner() {
  if (document.getElementById('notify-banner')) return
  const banner = document.createElement('div')
  banner.id = 'notify-banner'
  banner.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 z-[80] w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-indigo-100 p-4 flex items-center gap-3 animate-fade'
  banner.innerHTML = `
    <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">🔔</div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-gray-800">เปิดการแจ้งเตือน?</p>
      <p class="text-xs text-gray-400 mt-0.5">แจ้งก่อนเข้าสอนตามที่ตั้งค่าไว้</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <button id="notify-deny" class="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">ไม่</button>
      <button id="notify-allow" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition">เปิด</button>
    </div>`
  document.body.appendChild(banner)

  banner.querySelector('#notify-deny').addEventListener('click', () => {
    banner.remove()
    localStorage.setItem('pp5_notify_dismissed', '1')
  })
  banner.querySelector('#notify-allow').addEventListener('click', async () => {
    banner.remove()
    const result = await Notification.requestPermission()
    if (result === 'granted') {
      showToast('เปิดการแจ้งเตือนแล้ว ✅', 'success')
      if (_teacher?.id) await _scheduleClassNotifications(_teacher.id)
      if (_teacher?.profile_id) ensurePushSubscription(_teacher.profile_id)
    }
  })

  setTimeout(() => banner.remove(), 12000)
}

async function _scheduleClassNotifications(teacherId) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return
  try {
    const cfg = await getSystemConfig().catch(() => ({}))
    const notifyBefore = parseInt(cfg.notifyBeforeMinutes) || 10
    const academicYear  = parseInt(cfg.academicYear ?? 2568)
    const semester      = parseInt(cfg.semester ?? 1)

    const [schedule, links, periods, classes] = await Promise.all([
      getMySchedule(teacherId, academicYear, semester).catch(() => []),
      getClassScheduleLinks(teacherId).catch(() => []),
      getPeriods().catch(() => []),
      getMyClasses(teacherId).catch(() => []),
    ])

    const now      = new Date()
    const todayDow = now.getDay()
    const nowMins  = now.getHours() * 60 + now.getMinutes()

    const linksBySchedule = {}
    links.forEach(l => {
      if (!linksBySchedule[l.teacher_schedule_id]) linksBySchedule[l.teacher_schedule_id] = []
      linksBySchedule[l.teacher_schedule_id].push(l.class_id)
    })
    const classMap  = Object.fromEntries(classes.map(c => [c.id, c]))
    const periodMap = Object.fromEntries(periods.map(p => [p.period_no, p]))

    // clear old timeouts
    ;(window._notifyTimeouts ?? []).forEach(t => clearTimeout(t))
    window._notifyTimeouts = []

    const todayEntries = schedule
      .filter(s => s.day_of_week === todayDow && (linksBySchedule[s.id] ?? []).length > 0)
      .map(s => ({
        ...s,
        linkedClasses: (linksBySchedule[s.id] ?? []).map(id => classMap[id]).filter(Boolean),
        period: periodMap[s.period_no],
      }))

    let scheduled = 0
    for (const entry of todayEntries) {
      if (!entry.period?.start_time) continue
      const [h, m]    = entry.period.start_time.split(':').map(Number)
      const startMins = h * 60 + m
      const fireMins  = startMins - notifyBefore
      const minsLeft  = fireMins - nowMins

      if (minsLeft <= 0) continue

      const subjectName = entry.linkedClasses[0]?.master_subjects?.subject_name ?? 'วิชา'
      const classNames  = entry.linkedClasses.map(c => {
        const cr = c.classroom_id ? window._classroomMapGlobal?.[c.classroom_id] : null
        return c.class_name + (cr ? ` 📍${cr.building} ${cr.room_number}` : '')
      }).join(', ')
      const timeStr     = entry.period.start_time.substring(0, 5)

      const t = setTimeout(async () => {
        const sw = await navigator.serviceWorker?.ready.catch(() => null)
        const opts = {
          body:             `${subjectName} · ${classNames}\nคาบ ${entry.period_no} เวลา ${timeStr}`,
          icon:             '/pp5online/vite.svg',
          badge:            '/pp5online/vite.svg',
          tag:              `class-${entry.id}-${fireMins}`,
          requireInteraction: false,
          silent:           false,
        }
        if (sw) {
          sw.showNotification(`🔔 อีก ${notifyBefore} นาที — คาบถัดไป`, opts)
        } else {
          new Notification(`🔔 อีก ${notifyBefore} นาที — คาบถัดไป`, opts)
        }
      }, minsLeft * 60000)

      window._notifyTimeouts.push(t)
      scheduled++
    }

    if (scheduled > 0) {
      showToast(`ตั้งแจ้งเตือน ${scheduled} คาบสำหรับวันนี้ 🔔`, 'info')
    }
  } catch {}
}

async function _initNotifications(teacherId) {
  if (!('Notification' in window)) return
  await _registerServiceWorker()
  if (Notification.permission === 'granted') {
    await _scheduleClassNotifications(teacherId)
    if (_teacher?.profile_id) ensurePushSubscription(_teacher.profile_id)
  } else if (Notification.permission === 'default') {
    const dismissed = localStorage.getItem('pp5_notify_dismissed')
    if (!dismissed) {
      setTimeout(_showNotifyPermissionBanner, 2000)
    }
  }
}

// ── เตือนแจ้งไซซ์เสื้อกีฬาสี (ยังไม่แจ้ง) ──────────────────────────────────────
// เด้งทุกครั้งหลังล็อกอินจนกว่าจะแจ้งไซซ์สำเร็จ (เช็คเงื่อนไขใหม่ทุกครั้ง ไม่มีปุ่ม "ไม่ต้องเตือนอีก"
// เพราะฝ่ายที่รับผิดชอบต้องสรุปยอดด่วนภายในสัปดาห์หน้า — ไม่โชว์ถ้าแอดมินปิดสวิตช์รับแจ้งไซซ์ครูไว้)
async function _checkTeacherShirtSizePopup() {
  try {
    const { data: event } = await supabase.from('events').select('id').eq('status', 'active').order('academic_year', { ascending: false }).limit(1).maybeSingle()
    if (!event) return
    const { data: cfg } = await supabase.from('sports_portal_settings').select('teacher_shirt_request_enabled').eq('event_id', event.id).maybeSingle()
    if (!cfg?.teacher_shirt_request_enabled) return
    const { data: existing } = await supabase.from('sports_shirt_teacher_requests').select('id').eq('event_id', event.id).eq('teacher_id', _teacher.id).maybeSingle()
    if (existing) return
    _showShirtSizeReminderPopup()
  } catch {}
}

function _showShirtSizeReminderPopup() {
  document.getElementById('shirt-size-reminder-popup')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'shirt-size-reminder-popup'
  wrap.className = 'fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6'
  wrap.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-pink-500 to-rose-500 px-6 py-6 text-center">
        <div class="text-4xl mb-2">👕</div>
        <h3 class="text-white font-bold text-base">ยังไม่ได้แจ้งไซซ์เสื้อกีฬาสี</h3>
        <p class="text-white/80 text-xs mt-1">ฝ่ายที่รับผิดชอบต้องการสรุปยอดภายในสัปดาห์หน้า กรุณาแจ้งไซซ์โดยเร็ว</p>
      </div>
      <div class="p-6">
        <button id="ssrp-go"
          class="w-full py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm shadow-md transition mb-2">
          👕 แจ้งไซซ์เสื้อตอนนี้
        </button>
        <button id="ssrp-close"
          class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">
          ภายหลัง
        </button>
      </div>
    </div>`
  document.body.appendChild(wrap)
  wrap.querySelector('#ssrp-go').addEventListener('click', () => {
    wrap.remove()
    import('./sports-portals.js?v=10.22.612').then(m => m.openTeacherShirtSizeModal?.(_teacher))
  })
  wrap.querySelector('#ssrp-close').addEventListener('click', () => wrap.remove())
}

// ── ตรวจสอบการเชื่อมโยงตารางสอน ──────────────────────────────────────────────

async function _checkScheduleLinkPopup() {
  try {
    const cfg = await getSystemConfig().catch(() => ({}))
    const academicYear = parseInt(cfg.academicYear ?? 2568)
    const semester     = parseInt(cfg.semester ?? 1)
    const [classes, schedule, links] = await Promise.all([
      getMyClasses(_teacher.id).catch(() => []),
      getMySchedule(_teacher.id, academicYear, semester).catch(() => []),
      getClassScheduleLinks(_teacher.id).catch(() => []),
    ])
    if (!classes.length) return
    if (!schedule.length) { _showScheduleLinkPrompt('no_schedule'); return }
    const linkedIds    = new Set(links.map(l => l.class_id))
    const unlinkedList = classes.filter(c => !linkedIds.has(c.id))
    if (unlinkedList.length > 0) _showScheduleLinkPrompt('has_unlinked', unlinkedList.length, unlinkedList.map(c => c.id))
  } catch {}
}

function _showScheduleLinkPrompt(type, count = 0, unlinkedIds = []) {
  document.getElementById('sched-link-prompt')?.remove()
  const isNoSchedule = type === 'no_schedule'
  const wrap = document.createElement('div')
  wrap.id = 'sched-link-prompt'
  wrap.className = 'fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6'
  wrap.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br ${isNoSchedule ? 'from-indigo-500 to-purple-500' : 'from-amber-400 to-orange-400'} px-6 py-6 text-center">
        <div class="text-4xl mb-2">${isNoSchedule ? '🗓️' : '🔗'}</div>
        <h3 class="text-white font-bold text-base">${isNoSchedule ? 'ยังไม่มีตารางสอน' : `มี ${count} ห้องที่ยังไม่เชื่อมโยง`}</h3>
        <p class="text-white/80 text-xs mt-1">${isNoSchedule
          ? 'สร้างตารางสอนเพื่อรับสิทธิ์การแจ้งเตือนและการเรียงห้อง'
          : 'เชื่อมโยงห้องเรียนกับตารางสอนเพื่อใช้ฟีเจอร์เต็มประสิทธิภาพ'}</p>
      </div>
      <div class="p-6">
        <div class="space-y-2 mb-5">
          ${['แจ้งเตือนวันนี้สอนวิชาอะไร กี่โมง',
             'Countdown นับถอยหลังก่อนเข้าสอน',
             'เรียงห้องเรียนตามเวลาที่ใกล้ที่สุด',
             'แสดงวัน/คาบบนการ์ดแต่ละห้อง',
            ].map(t => `<p class="text-xs text-gray-500">✅ ${t}</p>`).join('')}
        </div>
        <button id="slp-go"
          class="w-full py-3 rounded-2xl ${isNoSchedule ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-amber-500 hover:bg-amber-600'}
                 text-white font-bold text-sm shadow-md transition mb-2">
          ${isNoSchedule ? '🗓️ สร้างตารางสอนตอนนี้' : '🔗 ไปเชื่อมโยงห้องเรียน'}
        </button>
        <button id="slp-close"
          class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">
          ภายหลัง
        </button>
      </div>
    </div>`
  document.body.appendChild(wrap)
  wrap.querySelector('#slp-go').addEventListener('click', () => {
    wrap.remove()
    if (isNoSchedule) {
      window._navTo('schedule-builder')
    } else if (unlinkedIds.length === 1 && window._openCombinedEdit) {
      // ห้องเดียว — เปิด modal ตารางสอนทันที
      window._navTo('my-classes')
      setTimeout(() => window._openCombinedEdit?.(unlinkedIds[0], 'schedule'), 400)
    } else {
      // หลายห้อง — ไปหน้า my-classes แล้วติ๊กเอง
      window._navTo('my-classes')
    }
  })
  wrap.querySelector('#slp-close').addEventListener('click', () => wrap.remove())
}

window._openScheduleLinkModal = async (classId) => {
  const cls       = window._classCache?.[classId]
  const clsColor  = window._classColorCache?.[classId]
  const className = cls?.class_name ?? '—'
  const ms        = cls?.master_subjects

  try {
    showToast('กำลังโหลด...', 'info')
    const cfg = await getSystemConfig().catch(() => ({}))
    const academicYear = parseInt(cfg.academicYear ?? 2568)
    const semester     = parseInt(cfg.semester ?? 1)
    const [schedule, links, periods] = await Promise.all([
      getMySchedule(_teacher?.id, academicYear, semester).catch(() => []),
      getClassScheduleLinks(_teacher?.id).catch(() => []),
      getPeriods().catch(() => []),
    ])
    if (!schedule.length) {
      showToast('ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อนครับ', 'error')
      return
    }

    const currentLinkedIds = new Set(links.filter(l => l.class_id === classId).map(l => l.teacher_schedule_id))
    const selected = new Set(currentLinkedIds)
    const periodMap = Object.fromEntries(periods.map(p => [p.period_no, p]))
    const DAYS_TH   = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']

    // build map: scheduleId → other classes already linked (not current class)
    const otherLinked = {} // scheduleId → [{className, subjectName}]
    links.filter(l => l.class_id !== classId).forEach(l => {
      const otherCls = window._classCache?.[l.class_id]
      if (!otherCls) return
      if (!otherLinked[l.teacher_schedule_id]) otherLinked[l.teacher_schedule_id] = []
      otherLinked[l.teacher_schedule_id].push({
        className:   otherCls.class_name ?? '—',
        subjectName: otherCls.master_subjects?.subject_name ?? '—',
      })
    })

    const headerBg   = clsColor?.soft   ?? '#f0fdf4'
    const headerBdr  = clsColor?.border ?? '#d1fae5'
    const headerText = clsColor?.text   ?? '#065f46'

    document.getElementById('sched-link-modal')?.remove()
    const wrap = document.createElement('div')
    wrap.id = 'sched-link-modal'
    wrap.className = 'fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4'

    const renderSlotCard = (s, isSel) => {
      const p      = periodMap[s.period_no]
      const time   = p ? `${p.start_time.substring(0,5)} – ${p.end_time.substring(0,5)}` : ''
      const span   = s.span_periods > 1 ? `–${s.period_no + s.span_periods - 1}` : ''
      const others = otherLinked[s.id] ?? []
      const isLocked = others.length > 0 && !isSel

      let cardCls, iconEl
      if (isSel) {
        cardCls = 'border-emerald-400 bg-emerald-50 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]'
        iconEl  = '<span class="text-xl flex-shrink-0 mt-0.5">✅</span>'
      } else if (isLocked) {
        cardCls = 'border-gray-200 bg-gray-50 opacity-70 cursor-pointer'
        iconEl  = '<span class="text-xl flex-shrink-0 mt-0.5">🔒</span>'
      } else {
        cardCls = 'border-gray-200 bg-white hover:border-gray-300'
        iconEl  = '<span class="text-xl flex-shrink-0 mt-0.5">⬜</span>'
      }

      const othersText = others.map(o => `${o.subjectName} (${o.className})`).join(', ')

      return `
      <button type="button" class="slm-card w-full text-left p-4 rounded-2xl border-2 transition-all ${cardCls}"
        data-id="${s.id}" data-sel="${isSel ? '1' : '0'}" data-locked="${isLocked ? '1' : '0'}"
        data-others="${othersText.replace(/"/g, '&quot;')}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            <p class="text-base font-bold text-gray-800">${DAYS_TH[s.day_of_week]} · คาบ ${s.period_no}${span}</p>
            <p class="text-sm text-gray-500 mt-0.5">${time}</p>
            ${s.class_name ? `<p class="text-base font-semibold mt-1" style="color:${headerText}">${s.class_name}</p>` : ''}
            ${others.length > 0 ? `<p class="text-[11px] text-amber-600 mt-1.5">⚠️ เชื่อมกับ: ${othersText}</p>` : ''}
          </div>
          ${iconEl}
        </div>
      </button>`
    }

    wrap.innerHTML = `
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>

        <!-- Header พร้อมสีห้อง -->
        <div class="px-5 pt-5 pb-4 border-b rounded-t-2xl flex-shrink-0"
          style="background:${headerBg}; border-color:${headerBdr}">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-wider mb-1" style="color:${headerText}">🔗 เชื่อมโยงตารางสอน</p>
              <h3 class="text-xl font-extrabold leading-tight" style="color:${headerText}">${className}</h3>
              ${ms?.subject_name ? `<p class="text-sm mt-0.5" style="color:${headerText};opacity:.75">${ms.subject_name}</p>` : ''}
            </div>
            <button id="slm-close" class="text-2xl leading-none flex-shrink-0 opacity-60 hover:opacity-100 transition"
              style="color:${headerText}">×</button>
          </div>
        </div>

        <!-- Slot list -->
        <div class="px-4 py-3 overflow-auto flex-1">
          <p class="text-xs text-gray-400 mb-3">แตะการ์ดเพื่อเลือก/ยกเลิก (เลือกได้หลายคาบ)</p>
          <div id="slm-list" class="space-y-2">
            ${schedule.map(s => renderSlotCard(s, selected.has(s.id))).join('')}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-4 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
          <button id="slm-save"
            class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition">
            บันทึกการเชื่อมโยง
          </button>
        </div>
      </div>`

    document.body.appendChild(wrap)

    // Toggle card
    wrap.querySelector('#slm-list').addEventListener('click', e => {
      const card = e.target.closest('.slm-card')
      if (!card) return
      const id     = parseInt(card.dataset.id)
      const was    = card.dataset.sel === '1'
      const locked = card.dataset.locked === '1'
      const slot   = schedule.find(s => s.id === id)

      if (locked && !was) {
        // แสดง confirm popup ก่อน
        document.getElementById('slm-confirm-popup')?.remove()
        const popup = document.createElement('div')
        popup.id = 'slm-confirm-popup'
        popup.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-6'
        const othersText = card.dataset.others
        popup.innerHTML = `
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">⚠️</div>
            <h4 class="font-bold text-gray-800 mb-2">คาบนี้ถูกเชื่อมโยงแล้ว</h4>
            <p class="text-xs text-gray-500 leading-relaxed mb-5">
              คาบนี้ถูกเชื่อมโยงกับ<br/>
              <span class="font-semibold text-amber-700">${othersText}</span><br/>
              ต้องการเชื่อมโยงเพิ่มเข้า<br/>
              <span class="font-semibold text-indigo-700">${className}</span> ด้วยหรือไม่?
            </p>
            <div class="flex gap-2">
              <button id="slm-conf-no"
                class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">
                ยกเลิก
              </button>
              <button id="slm-conf-yes"
                class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
                ยืนยัน
              </button>
            </div>
          </div>`
        document.body.appendChild(popup)
        popup.querySelector('#slm-conf-no').addEventListener('click', () => popup.remove())
        popup.querySelector('#slm-conf-yes').addEventListener('click', () => {
          popup.remove()
          selected.add(id)
          card.outerHTML = renderSlotCard(slot, true)
        })
        return
      }

      was ? selected.delete(id) : selected.add(id)
      card.outerHTML = renderSlotCard(slot, !was)
    })

    wrap.querySelector('#slm-close').addEventListener('click', () => wrap.remove())
    wrap.addEventListener('click', e => { if (e.target === wrap) wrap.remove() })

    wrap.querySelector('#slm-save').addEventListener('click', async () => {
      const btn = wrap.querySelector('#slm-save')
      btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
      try {
        const toAdd = [...selected].filter(id => !currentLinkedIds.has(id))
        const toDel = [...currentLinkedIds].filter(id => !selected.has(id))
        await Promise.all([
          ...toAdd.map(id => linkClassToSchedule(classId, id)),
          ...toDel.map(id => unlinkClassFromSchedule(classId, id)),
        ])
        showToast('บันทึกการเชื่อมโยงแล้ว ✅', 'success')
        wrap.remove()
        window._navTo('my-classes')
      } catch (e) {
        showToast('เกิดข้อผิดพลาด: ' + (e.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึกการเชื่อมโยง'
      }
    })
  } catch (e) {
    showToast('โหลดข้อมูลไม่ได้: ' + (e.message ?? ''), 'error')
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  blockPullToRefresh()

  // ─── Impersonation mode ─────────────────────────────────────────────────────
  const impData = getImpersonationContext()
  let isImpersonating = false
  if (impData) {
    try {
      showPageLoader(true)
      await validateImpersonation(supabase)
      // โหลด full profile ผ่าน profile_id (ถ้ามี) หรือ getTeacherById
      _teacher = impData.profile_id
        ? (await getMyTeacherProfile(impData.profile_id).catch(() => null)) ?? await getTeacherById(impData.id).catch(() => impData)
        : await getTeacherById(impData.id).catch(() => impData)
      if (!_teacher?.id || _teacher?.profile_id !== impData.profile_id) {
        throw new Error('ไม่พบข้อมูลครูเป้าหมายของเซสชันสวมบทบาท')
      }
      const { data: effectiveProfile } = await supabase.from('profiles')
        .select('role,is_also_admin').eq('id', impData.profile_id).maybeSingle()
      _isAlsoAdmin = effectiveProfile?.is_also_admin === true
      _hasAdminAccess = effectiveProfile?.role === 'admin' || _isAlsoAdmin
      await _loadSportsVisibility()
      await applyThemeForRole('teacher', _teacher ?? {})
      _homeroomRooms = _teacher?.id ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
      // โหลดสิทธิ์ตำแหน่งก่อนสร้างเมนู เพื่อให้เมนูเหมือนครูเป้าหมายล็อกอินจริง
      if (_teacher?.position || _teacher?.positions?.length) {
        const allPositions = _teacher.positions?.length ? _teacher.positions : [_teacher.position]
        _positionPerms = await getTeacherPositionPermissions(allPositions).catch(() => ({}))
      }
      await _applyRoleMenus()
      loadSidebarHeader(_teacher)
      // แสดงปุ่ม Dashboard ตามตำแหน่ง + ข้อมูลครูใน sidebar/header (เหมือน loadTeacherInfo)
      _renderTeacherSidebarUI(_teacher)
      // แสดง banner
      const banner  = document.getElementById('impersonation-banner')
      const nameEl  = document.getElementById('impersonation-name')
      const exitBtn = document.getElementById('impersonation-exit')
      if (banner && nameEl) {
        nameEl.textContent = `${_teacher?.full_name ?? impData.full_name} (${_teacher?.teacher_code ?? impData.teacher_code ?? ''})`
        banner.classList.remove('hidden')
        banner.classList.add('flex')
      }
      if (exitBtn) {
        exitBtn.addEventListener('click', async () => {
          try {
            exitBtn.disabled = true
            exitBtn.textContent = 'กำลังกลับสู่บัญชีแอดมิน...'
            await endImpersonation(supabase)
            window.location.replace('dashboard.html')
          } catch (error) {
            console.error('Cannot end impersonation:', error)
            exitBtn.disabled = false
            exitBtn.textContent = '← ออกจากโหมดนี้'
            showToast('ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง', 'error')
          }
        })
      }
      isImpersonating = true
    } catch (e) {
      console.error('Invalid impersonation session:', e)
      clearImpersonation()
      await supabase.auth.signOut()
      showToast('เซสชันสวมบทบาทไม่ถูกต้อง กรุณาเข้าสู่ระบบแอดมินใหม่', 'error')
      setTimeout(() => window.location.replace('index.html'), 1000)
      return
    }
  }

  if (!isImpersonating) {
    const session = await requireAuth()
    if (!session) return

    await loadTeacherInfo(session.user.id)
    _homeroomRooms = _teacher ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
    if (_teacher?.position || _teacher?.positions?.length) {
      const allPositions = _teacher.positions?.length ? _teacher.positions : [_teacher.position]
      _positionPerms = await getTeacherPositionPermissions(allPositions).catch(() => ({}))
    }
    await _applyRoleMenus()
    loadSidebarHeader(_teacher) // โหลด logo + term แบบ async ไม่ block
    updateLastSeen('teachers').catch(() => {})
    logLogin('teacher').catch(() => {})
  }

  // บริการประจำหน้าครูใช้ตัวตนครูที่มีผล ทั้งโหมดปกติและสวมบทบาท
  _updateRequestsBadge()
  _startPolling()
  if (_teacher?.id) _initDonationFlow(_teacher.id)
  if (_teacher?.id) _checkScheduleLinkPopup()
  if (_teacher?.id) _checkTeacherShirtSizePopup()
  if (_teacher?.id) _initNotifications(_teacher.id)
  initInstallPrompt()
  _loadAnnouncementBanners()
  _checkTerangganuSurveyNudge()
  if (_teacher?.profile_id) injectFeedbackWidget({ profileId: _teacher.profile_id, role: 'teacher', name: _teacher.full_name })
  if (_teacher?.id) import('./teacher-views-donor-chat.js').then(m => { m.injectDonorChatWidget(_teacher); _toggleFloatingFabsForView(_currentView) })
  _initHomeFab()
  _toggleFloatingFabsForView(_currentView)

  const verEl = document.getElementById('app-version')
  if (verEl) {
    verEl.textContent = `v${APP_VERSION}`
    if (_hasAdminAccess) {
      verEl.classList.add('cursor-pointer', 'hover:underline')
      const userId = _teacher?.profile_id || (await supabase.auth.getSession()).data.session?.user?.id
      if (userId) {
        verEl.addEventListener('click', () => checkAndShowChangelog(userId, true, true))
      }
    }
  }

  if (!isImpersonating && _teacher?.profile_id && _hasAdminAccess) {
    checkAndShowChangelog(_teacher.profile_id, false, true)
  }

  // teacher-nav event (from supervisor dashboard)
  window.addEventListener('teacher-nav', async e => {
    const { view, classId } = e.detail ?? {}
    if (view === 'class-detail-sv' && classId) {
      // Supervisor viewing another teacher's class (read-only, skip student tab)
      try {
        const cls = await getClassByIdFull(classId)
        if (cls) {
          // stub out functions that require full teacher context
          window._openStudentManager  = () => Promise.resolve()
          window._openCombinedEditModal = () => {}
          window._classCache = { [cls.id]: cls }

          const { renderClassDetail } = await import('./teacher-views.js')
          await renderClassDetail(_teacher, classId, {
            supervisorMode: true,
            classes: [cls],
            defaultTab: 'attendance',  // skip student tab
          })

          // Override _backToClasses → กลับ supervisor detail แทน class list
          if (window._svBackToDetail) {
            const svBack = window._svBackToDetail
            const origBack = window._backToClasses
            window._backToClasses = () => {
              // restore ID swap ที่ renderClassDetail ทำไว้
              const bak = document.getElementById('main-content-bak')
              const cur = document.getElementById('main-content')
              if (cur) cur.id = 'cd-tab-content'
              if (bak) bak.id = 'main-content'
              svBack()
            }
          }

          // Post-process: hide student tab + edit/delete/copy; rename ปพ.5 button
          setTimeout(() => {
            document.querySelectorAll('.cd-tab').forEach(btn => {
              if (btn.dataset.tab === 'students') btn.style.display = 'none'
            })
            document.querySelectorAll('button').forEach(btn => {
              const t = btn.textContent.trim()
              if (['ทำสำเนา','แก้ไข','ลบ'].some(k => t.includes(k))) btn.style.display = 'none'
              if (t.includes('ปพ.5') && !t.includes('ดูภาพรวม')) btn.innerHTML = '📋 ดูภาพรวม ปพ.5'
            })
          }, 200)
        }
      } catch(err) { console.error('supervisor class view error:', err) }
      return
    }
    if (classId) window._sv_classId = classId
    navigate(view ?? 'overview')
  })

  // Sidebar nav clicks
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(link.dataset.nav)
    })
  })

  // Quick class picker buttons
  document.getElementById('btn-quick-attendance')?.addEventListener('click', e => {
    e.preventDefault()
    _showClassQuickPicker('attendance')
  })
  document.getElementById('btn-quick-grades')?.addEventListener('click', e => {
    e.preventDefault()
    _showClassQuickPicker('grades')
  })
  document.getElementById('btn-quick-leave-scanner')?.addEventListener('click', e => {
    e.preventDefault()
    _openTeacherScanLauncher()
  })

  document.getElementById('menu-dashboard')?.addEventListener('click', async e => {
    e.preventDefault()
    const { openDashboardRoomPicker } = await import('./teacher-views-dashboard.js')
    openDashboardRoomPicker(_teacher, window._pp5DonorTierIndex ?? 0, window._pp5SystemCfg ?? {})
  })

  // Mobile sidebar toggle
  const sidebar = document.getElementById('sidebar')
  const overlay = document.getElementById('sidebar-overlay')
  document.getElementById('btn-menu')?.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full')
    overlay.classList.toggle('hidden')
  })
  overlay?.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full')
    overlay.classList.add('hidden')
  })

  // Logout
  document.getElementById('btn-logout')?.addEventListener('click', async () => {
    if (isImpersonating) {
      try {
        await endImpersonation(supabase)
        window.location.replace('dashboard.html')
      } catch (error) {
        console.error('Cannot end impersonation:', error)
        showToast('ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง', 'error')
      }
      return
    }
    await supabase.auth.signOut()
    clearSsoPassword()
    showToast('ออกจากระบบแล้ว','info')
    setTimeout(() => window.location.replace('index.html'), 800)
  })

  showPageLoader(false)

  // ถ้ามาจากหน้า register → เปิด setup form
  const initParams = new URLSearchParams(window.location.search)
  const isSetup = initParams.get('setup') === '1'
  const deepLinkView = initParams.get('view')
  if (isSetup) {
    navigate('setup')
    // ลบ ?setup=1 ออกจาก URL
    history.replaceState({}, '', 'teacher.html')
  } else if (deepLinkView && ROUTES[deepLinkView]) {
    // เปิดตรงเข้าหน้าที่ระบุผ่าน ?view=xxx (เผื่อ ?tab=yyy ให้หน้านั้นเลือกแท็บย่อยเอง) — ใช้ตอนกด
    // ลิงก์ push notification ให้เด้งเข้าหน้านั้นทันทีแทนที่จะเปิดภาพรวมเฉยๆ แล้วต้องไปหาเมนูเอง
    window._pendingQRTab = initParams.get('tab') || null
    navigate(deepLinkView)
  } else {
    navigate('overview')
  }
})
