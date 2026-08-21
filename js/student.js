import { supabase } from './supabase.js'
import { getMyStudentProfile, getMyExamRequests, getHouseColorHex } from './student-api.js'
import {
  renderStudentOverview,
  renderStudentSubjects,
  renderStudentMyScores,
  renderStudentSubjectDetail,
  renderStudentRequests,
  renderExamRequestForm,
  renderStudentProfile,
  renderStudentPrayerScanner,
  renderStudentPrayerScanHistory,
  renderStudentAllAssignments,
  openEmailLinkPrompt,
} from './student-views.js'
import { getSystemConfig, updateLastSeen, logLogin, getActiveAnnouncements } from './api.js'
import { getMyTerangganuSurveyStatus } from './terangganu-api.js'
import { applyThemeForRole } from './theme.js'
import { injectFeedbackWidget, showToast, showAnnouncementPopups, showTerangganuUrgentModal } from './ui.js'
import { ensurePushSubscription } from './push-notify.js'
import { blockPullToRefresh } from './anti-pull-refresh.js'
import { renderStudentSportsHome } from './sports-portals.js'
import { openAzfutsalModal } from './azfutsal-modal.js'
import { initInstallPrompt } from './install-prompt.js'

let _student = null
let _activeClassId = null
let _activeSubjectTab = 'todo'
let _activeScoreTab = 'life'
let _activeSportsTab = 'overview'
let _sportsVisibility = { enabled: true, teacher_menu: true, student_menu: true, public_page: true }
let _futsalRegistered = false

async function _loadFutsalVisibility() {
  if (!_student?.id) return
  try {
    const { data } = await supabase.from('azfutsal_players').select('id').eq('student_id', _student.id).maybeSingle()
    _futsalRegistered = !!data
  } catch {
    _futsalRegistered = false
  }
}

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

// ── เตือนแจ้งไซซ์เสื้อกีฬาสี (ยังไม่แจ้ง) ──────────────────────────────────────
// เด้งทุกครั้งหลังล็อกอินจนกว่าจะแจ้งไซซ์สำเร็จ (เช็คเงื่อนไขใหม่ทุกครั้ง ไม่มีปุ่ม "ไม่ต้องเตือนอีก"
// เพราะฝ่ายที่รับผิดชอบต้องสรุปยอดด่วนภายในสัปดาห์หน้า — ไม่โชว์ถ้าแอดมินปิดสวิตช์รับแจ้งไซซ์ไว้)
async function _checkStudentShirtSizePopup() {
  try {
    const { data: event } = await supabase.from('events').select('id').eq('status', 'active').order('academic_year', { ascending: false }).limit(1).maybeSingle()
    if (!event) return
    const { data: cfg } = await supabase.from('sports_portal_settings').select('shirt_request_enabled').eq('event_id', event.id).maybeSingle()
    if (!cfg?.shirt_request_enabled) return
    const { data: existing } = await supabase.from('sports_shirt_requests').select('id').eq('event_id', event.id).eq('student_id', _student.id).maybeSingle()
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
    _activeSportsTab = 'shirt'
    navigate('sports')
  })
  wrap.querySelector('#ssrp-close').addEventListener('click', () => wrap.remove())
}

// ── ประกาศ (ป๊อบอัพกลางจอ) ───────────────────────────────────────────────────
async function _loadAnnouncementBanners() {
  try {
    const items = (await getActiveAnnouncements('student'))
      .filter(a => a.audience !== 'futsal_player' || _futsalRegistered)
    showAnnouncementPopups(items, `pp5_ann_dismissed_stu_${_student?.id ?? ''}`)
  } catch { /* ไม่ block */ }
}

// ป๊อบอัพเตือนกรอกแบบสำรวจค่ายลูกเสือ TERANGGANU — โชว์เฉพาะนักเรียนที่เป็นผู้เข้าร่วมค่ายจริงและยังไม่กรอก
async function _checkTerangganuSurveyNudge() {
  try {
    const status = await getMyTerangganuSurveyStatus()
    if (status?.is_participant && !status.completed) showTerangganuUrgentModal('student')
  } catch { /* ไม่ block */ }
}

// ── Web Push Notifications ────────────────────────────────────────────────────
async function _registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return
  try { await navigator.serviceWorker.register('/pp5online/sw.js', { scope: '/pp5online/' }) } catch {}
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
      <p class="text-xs text-gray-400 mt-0.5">รับแจ้งเตือนผลคำร้อง/ประกาศสำคัญ แม้ปิดแท็บอยู่</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <button id="notify-deny" class="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">ไม่</button>
      <button id="notify-allow" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition">เปิด</button>
    </div>`
  document.body.appendChild(banner)

  banner.querySelector('#notify-deny').addEventListener('click', () => {
    banner.remove()
    localStorage.setItem('pp5_notify_dismissed_student', '1')
  })
  banner.querySelector('#notify-allow').addEventListener('click', async () => {
    banner.remove()
    const result = await Notification.requestPermission()
    if (result === 'granted') {
      showToast('เปิดการแจ้งเตือนแล้ว ✅', 'success')
      if (_student?.profile_id) ensurePushSubscription(_student.profile_id)
    }
  })

  setTimeout(() => banner.remove(), 12000)
}

async function _initNotifications() {
  if (!('Notification' in window)) return
  await _registerServiceWorker()
  if (Notification.permission === 'granted') {
    if (_student?.profile_id) ensurePushSubscription(_student.profile_id)
  } else if (Notification.permission === 'default') {
    const dismissed = localStorage.getItem('pp5_notify_dismissed_student')
    if (!dismissed) setTimeout(_showNotifyPermissionBanner, 2000)
  }
}

// ─── Auth Guard ───────────────────────────────────────────────────────────────
async function init() {
  blockPullToRefresh()

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('student-login.html'); return }

  const { data: profile } = await supabase
    .from('profiles').select('role').eq('id', session.user.id).single()

  if (profile?.role !== 'student') { window.location.replace('student-login.html'); return }
  await applyThemeForRole('student')

  _student = await getMyStudentProfile()
  await _loadSportsVisibility()
  await _loadFutsalVisibility()
  updateLastSeen('students').catch(() => {})
  logLogin('student').catch(() => {})

  if (_student?.house_color) {
    const hex = await getHouseColorHex(_student.house_color).catch(() => null)
    if (hex) {
      await applyThemeForRole('student', { houseColor: hex })
      // ใช้ soft color (88% white) เป็นพื้นหลังทุกหน้า
      document.body.style.background = `var(--theme-primary-soft)`
    }
  }
  if (!_student) {
    document.getElementById('stu-content').innerHTML = `
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`
    return
  }

  await _loadHeader()
  _bindNav()
  initInstallPrompt()
  navigate('overview')

  _startStudentPolling()   // polling 30 วิ
  if (_student?.profile_id) injectFeedbackWidget({ profileId: _student.profile_id, role: 'student', name: _student.full_name })
  _initNotifications()
  if (_student?.id) _checkStudentShirtSizePopup()
  _loadAnnouncementBanners()
  _checkTerangganuSurveyNudge()

  // เด้งขอเชื่อมอีเมลส่วนตัวทุกครั้งหลัง login จนกว่าจะเชื่อม (ยังเป็นอีเมลปลอมเริ่มต้นอยู่)
  if (session.user.email?.endsWith('@student.pp5.local')) {
    openEmailLinkPrompt()
  }
}

// ─── Load header info ─────────────────────────────────────────────────────────
async function _loadHeader() {
  const cfg = await getSystemConfig().catch(()=>({}))
  const name = _student?.full_name ?? 'นักเรียน'

  // school logo by class/room: contains "ปวช." = ปวช, otherwise มัธยม
  const roomText = `${_student?.main_room ?? ''} ${_student?.religion_room ?? ''}`
  const isVocStudent = roomText.includes('ปวช.')
  const logo = isVocStudent ? cfg.porworLogoUrl : cfg.samaiLogoUrl
  if (logo) {
    document.getElementById('stu-logo').src = logo
    document.getElementById('stu-logo').classList.remove('hidden')
    document.getElementById('stu-logo-fallback').classList.add('hidden')
  } else {
    document.getElementById('stu-logo').classList.add('hidden')
    document.getElementById('stu-logo-fallback').classList.remove('hidden')
  }
  const room = (_student?.main_room || _student?.religion_room || '—').replace(/\/\d+/, '').trim()
  document.getElementById('stu-school-name').textContent = name
  const yr = cfg.academicYear ?? '—', sem = cfg.semester ?? '—'
  document.getElementById('stu-term').textContent = `รหัส ${_student?.student_code ?? '—'} · ห้อง ${room} · ภาค ${sem} / ${yr}`

  // avatar
  const avatarEl = document.getElementById('stu-avatar')
  if (_student?.image_url) {
    avatarEl.innerHTML = `<img src="${_student.image_url}" class="w-full h-full object-cover"/>`
  } else {
    avatarEl.textContent = name.charAt(0).toUpperCase()
  }

  // house color + shirt size badges
  const houseInfoEl = document.getElementById('stu-house-info')
  if (houseInfoEl) {
    const hc = _student?.house_color
    const sz = _student?.sports_shirt_size
    if (hc || sz) {
      houseInfoEl.classList.remove('hidden')
      const hex = hc ? (await getHouseColorHex(hc).catch(() => null)) : null
      const colorBadge = hc
        ? `<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold text-white"
               style="background:${hex ?? 'var(--theme-primary)'}">
             <span class="w-1.5 h-1.5 rounded-full bg-white/60 inline-block"></span>สี${hc}
           </span>`
        : ''
      const shirtBadge = sz
        ? `<span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/70 text-gray-600 border border-gray-200">
             เสื้อ ${sz}
           </span>`
        : ''
      houseInfoEl.innerHTML = colorBadge + shirtBadge
    }
  }
}

// ─── Navigation ───────────────────────────────────────────────────────────────
const ROUTES = {
  overview: () => renderStudentOverview(_student),
  subjects: () => renderStudentSubjects(_student),
  scores:   () => renderStudentMyScores(_student, _activeScoreTab),
  sports:   () => renderStudentSportsHome(_student, _activeSportsTab),
  requests: () => renderStudentRequests(_student),
  profile:  () => renderStudentProfile(_student, _handleLogout),
  prayer_scanner: () => renderStudentPrayerScanner(_student),
  prayer_scan_history: () => renderStudentPrayerScanHistory(_student),
  assignments: () => renderStudentAllAssignments(_student),
}

function _navButtonHTML(view, icon, label, mode = 'main') {
  return `<button class="stu-nav-btn flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5" data-view="${view}" data-mode="${mode}">
    <span class="text-xl">${icon}</span>
    <span class="text-[10px] font-medium text-gray-500">${label}</span>
  </button>`
}

function _renderMainNav(activeView = 'overview') {
  const nav = document.getElementById('stu-bottom-nav')
  if (!nav) return
  const items = [
    _navButtonHTML('overview', '🏠', 'ภาพรวม'),
    _navButtonHTML('subjects', '📚', 'รายวิชา'),
    _navButtonHTML('scores', '📊', 'คะแนน'),
  ]
  if (_sportsVisibility.enabled !== false && _sportsVisibility.student_menu !== false) {
    items.push(_navButtonHTML('sports', '🏆', 'กีฬาสี'))
  }
  if (_futsalRegistered) {
    items.push(_navButtonHTML('futsal', '⚽', 'ฟุตซอล'))
  }
  items.push(_navButtonHTML('profile', '👤', 'โปรไฟล์'))
  nav.innerHTML = items.join('')
  _bindNav()
  _setBottomNavActive(activeView)
}

function _renderSubjectNav(activeTab = 'todo') {
  const nav = document.getElementById('stu-bottom-nav')
  if (!nav) return
  nav.innerHTML = [
    _navButtonHTML('overview', '🏠', 'ภาพรวม', 'subject'),
    _navButtonHTML('todo', '✅', 'ต้องทำ', 'subject'),
    _navButtonHTML('scores', '📊', 'คะแนน', 'subject'),
    _navButtonHTML('requests', '📝', 'คำร้อง', 'subject'),
  ].join('')
  _bindNav()
  _setBottomNavActive(activeTab)
}

function _renderScoreNav(activeTab = 'life') {
  const nav = document.getElementById('stu-bottom-nav')
  if (!nav) return
  nav.innerHTML = [
    _navButtonHTML('overview', '🏠', 'ภาพรวม', 'score'),
    _navButtonHTML('life', '🌱', 'ทักษะชีวิต', 'score'),
    _navButtonHTML('prayer', '🕌', 'ละหมาด', 'score'),
    _navButtonHTML('reading', '📖', 'อ่านฯ', 'score'),
  ].join('')
  _bindNav()
  _setBottomNavActive(activeTab)
}

function _renderSportsNav(activeTab = 'overview') {
  const nav = document.getElementById('stu-bottom-nav')
  if (!nav) return
  nav.innerHTML = [
    _navButtonHTML('overview', '🏠', 'ภาพรวม', 'sports'),
    _navButtonHTML('shirt', '👕', 'เสื้อกีฬาสี', 'sports'),
    _navButtonHTML('compete', '🏃', 'แข่งขัน', 'sports'),
    _navButtonHTML('together', '🤝', 'ร่วมมือ', 'sports'),
  ].join('')
  _bindNav()
  _setBottomNavActive(activeTab)
}

function _setBottomNavActive(activeView) {
  document.querySelectorAll('.stu-nav-btn').forEach(btn => {
    const isActive = btn.dataset.view === activeView
    const span = btn.querySelector('span:last-child')
    btn.classList.toggle('text-emerald-600', isActive)
    if (span) span.classList.toggle('text-emerald-600', isActive)
  })
}

function navigate(view) {
  // Cleanup active scanner if navigating away from prayer_scanner
  if (window._activePrayerScannerState) {
    try {
      if (window._activePrayerScannerState.html5Qrcode) {
        window._activePrayerScannerState.html5Qrcode.stop().catch(() => {})
      }
    } catch (e) {}
    if (window._activePrayerScannerState.focusInterval) clearInterval(window._activePrayerScannerState.focusInterval)
    if (window._activePrayerScannerState.syncInterval) clearInterval(window._activePrayerScannerState.syncInterval)
    window._activePrayerScannerState = null
  }

  if (view === 'futsal') { openAzfutsalModal(_student?.student_code); return }

  _activeClassId = null
  _activeSubjectTab = 'todo'
  if (view === 'scores') {
    _activeScoreTab = 'life'
    _renderScoreNav(_activeScoreTab)
    ROUTES.scores()
    return
  }
  if (view === 'sports') {
    _activeSportsTab = 'overview'
    _renderSportsNav(_activeSportsTab)
    ROUTES.sports()
    return
  }
  _renderMainNav(view)
  const fn = ROUTES[view]
  if (fn) fn()
}

function _bindNav() {
  document.querySelectorAll('.stu-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.mode === 'subject') {
        if (btn.dataset.view === 'overview') {
          navigate('overview')
        } else if (_activeClassId) {
          openClassTab(_activeClassId, btn.dataset.view)
        }
        return
      }
      if (btn.dataset.mode === 'score') {
        if (btn.dataset.view === 'overview') {
          navigate('overview')
        } else {
          _activeScoreTab = btn.dataset.view
          _renderScoreNav(_activeScoreTab)
          renderStudentMyScores(_student, _activeScoreTab)
        }
        return
      }
      if (btn.dataset.mode === 'sports') {
        // ต่างจากโหมด subject/score — แท็บ "ภาพรวม" ที่นี่คือภาพรวมของหน้ากีฬาสีเอง ไม่ใช่กลับหน้าแรกของแอป
        _activeSportsTab = btn.dataset.view
        _renderSportsNav(_activeSportsTab)
        renderStudentSportsHome(_student, _activeSportsTab)
        return
      }
      navigate(btn.dataset.view)
    })
  })
}

async function _handleLogout() {
  await supabase.auth.signOut()
  window.location.replace('student-login.html')
}

// ─── Global window handlers ───────────────────────────────────────────────────
window._stuNav = navigate

function openClassTab(classId, tab = 'todo') {
  _activeClassId = classId
  _activeSubjectTab = tab
  _renderSubjectNav(tab)
  renderStudentSubjectDetail(_student, classId, tab)
}

window._stuOpenClass = (classId) => {
  openClassTab(classId, 'todo')
}

window._stuOpenClassTab = (classId, tab = 'todo') => {
  openClassTab(classId, tab)
}

window._stuNavSportsTab = (tab) => {
  _activeSportsTab = tab
  _renderSportsNav(_activeSportsTab)
  renderStudentSportsHome(_student, _activeSportsTab)
}

window._stuOpenRequest = (classId) => {
  _activeClassId = classId
  _activeSubjectTab = 'requests'
  _renderSubjectNav('requests')
  renderExamRequestForm(_student, classId)
}

// ─── Polling: ตรวจสถานะคำร้องทุก 30 วินาที ───────────────────────────────────
let _lastRequestStatuses = null  // null = ยังไม่เคยโหลด

function _showStuToast(msg, type = 'info') {
  const colors = { success:'bg-emerald-500', error:'bg-red-500', warning:'bg-amber-500', info:'bg-indigo-500' }
  const t = document.createElement('div')
  t.className = `fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${colors[type]??colors.info}`
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.remove(), 3000)
}

async function _pollStudentRequests() {
  if (!_student || document.visibilityState !== 'visible') return
  try {
    const requests = await getMyExamRequests(_student.id)

    if (_lastRequestStatuses === null) {
      // load ครั้งแรก — จำสถานะไว้ ไม่ toast
      _lastRequestStatuses = Object.fromEntries(requests.map(r => [r.id, r.status]))
      return
    }

    for (const r of requests) {
      const prev = _lastRequestStatuses[r.id]
      if (prev === undefined) {
        // คำร้องใหม่ที่ยังไม่เคยเห็น (ไม่น่าเกิด แต่ handle ไว้)
        _lastRequestStatuses[r.id] = r.status
        continue
      }
      if (prev !== r.status) {
        // สถานะเปลี่ยน!
        const subj = r.classes?.master_subjects?.subject_name ?? 'รายวิชา'
        if (r.status === 'approved') {
          _showStuToast(`✅ คำร้อง "${subj}" ได้รับการอนุมัติแล้ว`, 'success')
        } else if (r.status === 'rejected') {
          _showStuToast(`❌ คำร้อง "${subj}" ถูกปฏิเสธ`, 'warning')
        }
        _lastRequestStatuses[r.id] = r.status
      }
    }
  } catch { /* ไม่ crash */ }
}

function _startStudentPolling() {
  const INTERVAL = 30000
  setInterval(() => {
    if (document.visibilityState === 'visible') _pollStudentRequests()
  }, INTERVAL)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') _pollStudentRequests()
  })
}

// ─── Start ────────────────────────────────────────────────────────────────────
init()
