import { supabase } from './supabase.js'
import { getMyStudentProfile } from './student-api.js'
import {
  renderStudentOverview,
  renderStudentSubjects,
  renderStudentSubjectDetail,
  renderStudentRequests,
  renderExamRequestForm,
  renderStudentProfile,
} from './student-views.js'
import { getSystemConfig } from './api.js'
import { applyThemeForRole } from './theme.js'

let _student = null
let _activeClassId = null
let _activeSubjectTab = 'todo'

// ─── Auth Guard ───────────────────────────────────────────────────────────────
async function init() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return }

  const { data: profile } = await supabase
    .from('profiles').select('role').eq('id', session.user.id).single()

  if (profile?.role !== 'student') { window.location.replace('index.html'); return }
  await applyThemeForRole('student')

  _student = await getMyStudentProfile()
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
}

// ─── Load header info ─────────────────────────────────────────────────────────
async function _loadHeader() {
  const cfg = await getSystemConfig().catch(()=>({}))
  const name = _student?.full_name ?? 'นักเรียน'

  // school logo
  const logo = cfg.loginLogoUrl || cfg.logoUrl || cfg.samaiLogoUrl || cfg.porworLogoUrl
  if (logo) {
    document.getElementById('stu-logo').src = logo
    document.getElementById('stu-logo').classList.remove('hidden')
    document.getElementById('stu-logo-fallback').classList.add('hidden')
  }
  const schoolName = cfg.schoolName
  if (schoolName) document.getElementById('stu-school-name').textContent = schoolName
  const yr = cfg.academicYear ?? '—', sem = cfg.semester ?? '—'
  document.getElementById('stu-term').textContent = `ภาค ${sem} / ${yr}`

  // avatar
  const avatarEl = document.getElementById('stu-avatar')
  if (_student?.image_url) {
    avatarEl.innerHTML = `<img src="${_student.image_url}" class="w-full h-full object-cover"/>`
  } else {
    avatarEl.textContent = name.charAt(0).toUpperCase()
  }
}

// ─── Navigation ───────────────────────────────────────────────────────────────
const ROUTES = {
  overview: () => renderStudentOverview(_student),
  subjects: () => renderStudentSubjects(_student),
  requests: () => renderStudentRequests(_student),
  profile:  () => renderStudentProfile(_student, _handleLogout),
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
    _navButtonHTML('requests', '📝', 'คำร้อง'),
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

function _setBottomNavActive(activeView) {
  document.querySelectorAll('.stu-nav-btn').forEach(btn => {
    const isActive = btn.dataset.view === activeView
    const span = btn.querySelector('span:last-child')
    btn.classList.toggle('text-emerald-600', isActive)
    if (span) span.classList.toggle('text-emerald-600', isActive)
  })
}

function navigate(view) {
  _activeClassId = null
  _activeSubjectTab = 'todo'
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
      navigate(btn.dataset.view)
    })
  })
}

async function _handleLogout() {
  await supabase.auth.signOut()
  window.location.replace('index.html')
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

// ─── Start ────────────────────────────────────────────────────────────────────
init()
