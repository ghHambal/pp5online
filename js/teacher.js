import { supabase }            from './supabase.js'
import { showToast, showPageLoader } from './ui.js'
import { getMyTeacherProfile, getMySubjects, getMyClasses, getMasterSubjects,
         createSubject, updateSubject, deleteSubject,
         getMyHomeroomRooms, upsertHomeroomTeacher, getSystemConfig } from './api.js'
import {
  renderTeacherOverview, renderMyCourses, renderCourseForm,
  renderMyClasses, renderAttendance, renderGrades,
  renderRequests, renderSchedule, renderProfile, renderClassForm,
  renderLifeSkillScore, renderReadingScore, renderPrayerScore,
  renderProfileSetup,
} from './teacher-views.js'

let _teacher       = null  // teacher DB record (from teachers table)
let _homeroomRooms = []   // [{main_room, category}]

// ─── Guard ────────────────────────────────────────────────────────────────────
async function requireAuth() {
  showPageLoader(true)
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return null }
  return session
}

// ─── Load teacher info ────────────────────────────────────────────────────────
async function loadTeacherInfo(userId) {
  _teacher = await getMyTeacherProfile(userId)

  const name   = _teacher?.full_name ?? 'ครูผู้สอน'
  const code   = _teacher?.teacher_code ? `รหัส ${_teacher.teacher_code}` : ''
  const imgUrl = _teacher?.image_url ?? ''

  // Sidebar mini profile
  const avatarEl = document.getElementById('t-avatar')
  if (imgUrl) {
    avatarEl.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover" />`
  } else {
    avatarEl.textContent = name.charAt(0).toUpperCase()
  }
  document.getElementById('t-name').textContent = name
  document.getElementById('t-code').textContent = code

  // Header
  document.getElementById('user-name').textContent = name
  const headerAvatar = document.getElementById('user-avatar')
  if (imgUrl) {
    headerAvatar.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover" />`
  } else {
    headerAvatar.textContent = name.charAt(0).toUpperCase()
  }
}

// ─── Navigation ───────────────────────────────────────────────────────────────
const ROUTES = {
  'overview':    () => renderTeacherOverview(_teacher, _homeroomRooms),
  'my-courses':  () => renderMyCourses(_teacher),
  'my-classes':  () => renderMyClasses(_teacher),
  'attendance':       () => renderAttendance(_teacher),
  'life-skill-score': () => renderLifeSkillScore(_teacher, _homeroomRooms.filter(r=>r.category==='สามัญ')),
  'reading-score':    () => renderReadingScore(_teacher),
  'prayer-score':     () => renderPrayerScore(_teacher, _homeroomRooms.filter(r=>r.category==='ศาสนา')),
  'grades':      () => renderGrades(),
  'requests':    () => renderRequests(),
  'schedule':    () => renderSchedule(),
  'profile':     () => renderProfile(_teacher, _refreshProfile),
  'setup':       () => renderProfileSetup(_teacher, _homeroomRooms, _onSetupComplete),
}

function navigate(view) {
  const fn = ROUTES[view]
  if (fn) fn()
}

// expose to window for onclick in views
window._navTo  = navigate
window._goBack = () => navigate('my-courses')

window._openLifeSkillScore = (room) => navigate('life-skill-score')
window._openReligionScore  = (room) => navigate('prayer-score')
window._openReadingScore   = ()     => navigate('reading-score')

function _applyRoleMenus() {
  const hasLifeSkill = _homeroomRooms.some(r => r.category === 'สามัญ')
  const hasPrayer    = _homeroomRooms.some(r => r.category === 'ศาสนา')
  const hasReading   = _teacher?.dept === 'THAI'
  const toggle = (id, show) => {
    const el = document.getElementById(id)
    if (!el) return
    el.classList.toggle('hidden', !show)
    el.classList.toggle('flex', show)
  }
  toggle('menu-life-skill', hasLifeSkill)
  toggle('menu-reading',    hasReading)
  toggle('menu-prayer',     hasPrayer)
}

// refresh profile หลัง save
async function _refreshProfile(userId) {
  _teacher = await getMyTeacherProfile(userId)
  await loadTeacherInfo(userId)
}

// หลัง setup เสร็จ → reload ทุกอย่างแล้วไป overview
async function _onSetupComplete(userId) {
  _teacher       = await getMyTeacherProfile(userId)
  _homeroomRooms = _teacher ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
  await loadTeacherInfo(userId)
  _applyRoleMenus()
  navigate('overview')
}

window._openCourseForm = () => {
  renderCourseForm(_teacher, async (payload) => {
    await createSubject(payload)
  })
}

window._editCourse = async (id) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const editData = subjects.find(s => s.id === id)
  if (!editData) { showToast('ไม่พบข้อมูลคอร์ส', 'error'); return }
  renderCourseForm(_teacher, async (payload) => {
    await updateSubject(id, payload)
  }, editData)
}

window._deleteCourse = async (id, name) => {
  if (!confirm(`ยืนยันลบคอร์ส "${name}"?\nห้องเรียนทั้งหมดที่ผูกกับคอร์สนี้จะถูกลบด้วย`)) return
  try {
    await deleteSubject(id)
    showToast(`ลบ "${name}" แล้ว`, 'success')
    navigate('my-courses')
  } catch (err) {
    showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  }
}

window._openRegisterClass = async (courseId) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const course = subjects.find(s => s.id === courseId)
  if (course) renderClassForm(_teacher, course)
  else showToast('ไม่พบข้อมูลคอร์ส', 'error')
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
  } catch { /* ไม่ critical */ }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const session = await requireAuth()
  if (!session) return

  await loadTeacherInfo(session.user.id)
  _homeroomRooms = _teacher ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
  _applyRoleMenus()
  loadSidebarHeader(_teacher) // โหลด logo + term แบบ async ไม่ block

  // Sidebar nav clicks
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(link.dataset.nav)
    })
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
    await supabase.auth.signOut()
    showToast('ออกจากระบบแล้ว','info')
    setTimeout(() => window.location.replace('index.html'), 800)
  })

  showPageLoader(false)

  // ถ้ามาจากหน้า register → เปิด setup form
  const isSetup = new URLSearchParams(window.location.search).get('setup') === '1'
  if (isSetup) {
    navigate('setup')
    // ลบ ?setup=1 ออกจาก URL
    history.replaceState({}, '', 'teacher.html')
  } else {
    navigate('overview')
  }
})
