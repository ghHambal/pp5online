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

let _student = null

// ─── Auth Guard ───────────────────────────────────────────────────────────────
async function init() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return }

  const { data: profile } = await supabase
    .from('profiles').select('role').eq('id', session.user.id).single()

  if (profile?.role !== 'student') { window.location.replace('index.html'); return }

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
  const logo = cfg.logoUrl
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

function navigate(view) {
  // Update bottom nav active state
  document.querySelectorAll('.stu-nav-btn').forEach(btn => {
    const isActive = btn.dataset.view === view
    const span = btn.querySelector('span:last-child')
    btn.classList.toggle('text-emerald-600', isActive)
    if (span) span.classList.toggle('text-emerald-600', isActive)
  })
  const fn = ROUTES[view]
  if (fn) fn()
}

function _bindNav() {
  document.querySelectorAll('.stu-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view))
  })
}

async function _handleLogout() {
  await supabase.auth.signOut()
  window.location.replace('index.html')
}

// ─── Global window handlers ───────────────────────────────────────────────────
window._stuNav = navigate

window._stuOpenClass = (classId) => {
  renderStudentSubjectDetail(_student, classId)
  // Update nav to subjects
  document.querySelectorAll('.stu-nav-btn').forEach(btn => {
    const span = btn.querySelector('span:last-child')
    const isActive = btn.dataset.view === 'subjects'
    btn.classList.toggle('text-emerald-600', isActive)
    if (span) span.classList.toggle('text-emerald-600', isActive)
  })
}

window._stuOpenRequest = (classId) => {
  renderExamRequestForm(_student, classId)
  document.querySelectorAll('.stu-nav-btn').forEach(btn => {
    const span = btn.querySelector('span:last-child')
    const isActive = btn.dataset.view === 'requests'
    btn.classList.toggle('text-emerald-600', isActive)
    if (span) span.classList.toggle('text-emerald-600', isActive)
  })
}

// ─── Start ────────────────────────────────────────────────────────────────────
init()
