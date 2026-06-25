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
} from './student-views.js'
import { getSystemConfig, updateLastSeen, logLogin } from './api.js'
import { applyThemeForRole } from './theme.js'
import { injectFeedbackWidget } from './ui.js'
import { blockPullToRefresh } from './anti-pull-refresh.js'

let _student = null
let _activeClassId = null
let _activeSubjectTab = 'todo'
let _activeScoreTab = 'life'

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
  navigate('overview')

  _startStudentPolling()   // polling 30 วิ
  if (_student?.profile_id) injectFeedbackWidget({ profileId: _student.profile_id, role: 'student', name: _student.full_name })
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
  requests: () => renderStudentRequests(_student),
  profile:  () => renderStudentProfile(_student, _handleLogout),
  prayer_scanner: () => renderStudentPrayerScanner(_student),
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
  nav.innerHTML = [
    _navButtonHTML('overview', '🏠', 'ภาพรวม'),
    _navButtonHTML('subjects', '📚', 'รายวิชา'),
    _navButtonHTML('scores', '📊', 'คะแนน'),
    _navButtonHTML('profile', '👤', 'โปรไฟล์'),
  ].join('')
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

  _activeClassId = null
  _activeSubjectTab = 'todo'
  if (view === 'scores') {
    _activeScoreTab = 'life'
    _renderScoreNav(_activeScoreTab)
    ROUTES.scores()
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
