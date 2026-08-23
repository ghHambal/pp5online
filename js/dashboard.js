import { supabase } from './supabase.js'
import { showToast, showPageLoader, setButtonLoading, checkAndShowChangelog } from './ui.js'
import { renderOverview, renderTeachers, renderClasses, renderStudents, renderTeacherTable,
         renderSettings, renderImport, renderSubjects, renderSubjectTable, renderCurriculum,
         renderDepartments, renderDeptTable, renderPeriods,
         renderHomeroom, renderScoreColConfig, renderRegisteredTeachers,
         renderHolidays, renderPayments, renderLifeSkillAdmin, renderReadingAdmin,
         renderPrayerAdmin, renderAdminProfile, renderUsageStats,
         renderClassroomsAdmin,
         renderAnnouncements, renderRolePermissions,
         renderHouseColors, renderDonations, renderWorkCalendar, renderFeedbackAdmin,
         renderReligionGroups, renderClassroomLeaders } from './views.js'
import { renderScheduleGrid, renderCourseDocLangConfig } from './teacher-views.js'
import { renderExecOverview } from './views-exec-overview.js'
import { getTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher,
         getMasterSubjects, createSubject, updateSubject, deleteSubject,
         getDepartments, createDepartment, updateDepartment, deleteDepartment,
         getPeriods, upsertPeriod, deletePeriod,
         getAllPaymentRequests, reviewPaymentRequest, approveTeacherQuota,
         getAllAppFeedback } from './api.js'
import { renderCourseForm } from './teacher-views.js'
import { uploadTeacherPhoto, uploadDeptAsset } from './storage.js'
import { applyThemeForRole } from './theme.js'
import { APP_VERSION } from './version.js?v=10.22.502'
import { blockPullToRefresh } from './anti-pull-refresh.js'
import { openAzizGamesModal } from './azizgames-modal.js'
import { openAzfutsalModal } from './azfutsal-modal.js'
import { renderShirtSummary, renderSportsFundAdmin, renderShirtVoteSettings, renderShirtVoteDashboard } from './sports-portals.js?v=10.22.419'

// ─── Guard ────────────────────────────────────────────────────────────────────
async function requireAuth() {
  showPageLoader(true)
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return null }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('role, is_also_admin')
    .eq('id', session.user.id)
    .maybeSingle()

  // อนุญาต: role=admin หรือ is_also_admin=true
  if (error || (profile?.role !== 'admin' && !profile?.is_also_admin)) {
    showToast('หน้านี้สำหรับผู้ดูแลระบบเท่านั้น', 'warning')
    setTimeout(() => window.location.replace('teacher.html'), 600)
    return null
  }

  return session
}

// ─── Load user info (profiles ใหม่ไม่มี full_name → ดึงจาก teachers) ─────────
async function loadUserProfile(userId) {
  try {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role, user_code')
      .eq('id', userId)
      .maybeSingle()

    let name = 'ผู้ใช้งาน'

    if (profile?.role === 'teacher' || profile?.role === 'admin') {
      const { data: teacher } = await supabase
        .from('teachers')
        .select('full_name')
        .eq('profile_id', userId)
        .maybeSingle()
      name = teacher?.full_name ?? profile?.user_code ?? 'ผู้ใช้งาน'
    }

    const roleLabel = profile?.role === 'admin' ? 'ผู้ดูแลระบบ' : 'ครูผู้สอน'
    document.getElementById('user-name').textContent   = name
    document.getElementById('user-role').textContent   = roleLabel
    document.getElementById('user-avatar').textContent = name.charAt(0).toUpperCase()
  } catch { /* ไม่ block init */ }
}

// ─── Switch to teacher view (สำหรับ user ที่มีทั้งสองบทบาท) ──────────────────
async function _addSwitchToTeacherBtn(userId) {
  const slot = document.getElementById('header-switch-slot')
  if (!slot) return
  // Clear any existing button in the slot (ป้องกัน duplicate กรณีเรียกซ้ำ)
  slot.innerHTML = ''
  const { data: profile } = await supabase.from('profiles').select('is_also_admin').eq('id', userId).maybeSingle()
  if (!profile?.is_also_admin) return
  const btn = document.createElement('a')
  btn.id = 'btn-switch-teacher'
  btn.href = 'teacher.html'
  btn.title = 'สลับไปหน้าครู'
  btn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm border border-indigo-200/50 mr-1'
  btn.innerHTML = `<span>👨‍🏫</span><span>สลับเป็นครู</span>`
  slot.appendChild(btn)
}


// ─── Logout ───────────────────────────────────────────────────────────────────
async function handleLogout() {
  await supabase.auth.signOut()
  showToast('ออกจากระบบแล้ว', 'info')
  setTimeout(() => window.location.replace('index.html'), 800)
}

// ─── Teacher Modal ────────────────────────────────────────────────────────────
export async function openTeacherModal(id = null) {
  const modal = document.getElementById('teacher-modal')
  document.getElementById('modal-id').value        = ''
  document.getElementById('modal-code').value      = ''
  document.getElementById('modal-name').value      = ''
  document.getElementById('modal-category').value  = ''
  document.getElementById('modal-phone').value     = ''
  document.getElementById('modal-login-email').value = ''
  document.getElementById('modal-username').value  = ''
  document.getElementById('modal-image-url').value = ''
  window._clearPositionRows?.()
  document.getElementById('modal-pos-dept-wrap').style.display = 'none'
  document.getElementById('modal-title').textContent = id ? 'แก้ไขข้อมูลครู' : 'เพิ่มครูใหม่'

  // โหลด dept options
  try {
    const { getDepartments } = await import('./api.js')
    const depts = await getDepartments()
    const sel = document.getElementById('modal-position-dept')
    sel.innerHTML = '<option value="">— เลือกกลุ่มสาระ —</option>'
      + depts.map(d => `<option value="${d.id}">${d.dept_name}</option>`).join('')
  } catch {}

  if (id) {
    try {
      const { data: t } = await (await import('./supabase.js')).supabase
        .from('teachers')
        .select('id,teacher_code,full_name,category,phone,login_email,username,image_url,position,positions,position_dept_id')
        .eq('id', id).single()
      document.getElementById('modal-id').value        = t.id
      document.getElementById('modal-code').value      = t.teacher_code ?? ''
      document.getElementById('modal-name').value      = t.full_name    ?? ''
      document.getElementById('modal-category').value  = t.category     ?? ''
      document.getElementById('modal-phone').value     = t.phone        ?? ''
      document.getElementById('modal-login-email').value = t.login_email ?? ''
      document.getElementById('modal-username').value  = t.username     ?? ''
      document.getElementById('modal-image-url').value = t.image_url    ?? ''
      const activePositions = t.positions?.length ? t.positions : (t.position ? [t.position] : [])
      window._setPositionRows?.(activePositions)
      if (activePositions.includes('dept_head')) {
        document.getElementById('modal-position-dept').value = t.position_dept_id ?? ''
      }
      _updateAvatarPreview(t.image_url, t.full_name)
    } catch {
      showToast('โหลดข้อมูลไม่สำเร็จ', 'error'); return
    }
  }

  modal.classList.remove('hidden')
  modal.classList.add('flex')
  document.getElementById('modal-name').focus()
}

function closeTeacherModal() {
  const modal = document.getElementById('teacher-modal')
  modal.classList.add('hidden')
  modal.classList.remove('flex')
}

async function handleTeacherFormSubmit(e) {
  e.preventDefault()
  const btn      = document.getElementById('modal-save-btn')
  const id       = document.getElementById('modal-id').value
  const username = document.getElementById('modal-username').value.trim().toLowerCase()
  if (username && !/^[a-z0-9._-]{3,32}$/.test(username)) {
    showToast('ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร', 'warning')
    return
  }
  const checkedPositions = window._getPositionValues?.() ?? []
  // ตำแหน่งที่เก็บใน positions[] เท่านั้น ห้ามเขียนลงคอลัมน์ position (ติด check constraint)
  const _ARRAY_ONLY_POSITIONS = ['religion_group_head', 'religion_subgroup_head', 'classroom_leaders_admin']
  const posVal = checkedPositions.find(p => !_ARRAY_ONLY_POSITIONS.includes(p)) || null  // primary position (backward compat)
  const payload  = {
    teacher_code:      document.getElementById('modal-code').value.trim()      || null,
    full_name:         document.getElementById('modal-name').value.trim(),
    category:          document.getElementById('modal-category').value         || null,
    phone:             document.getElementById('modal-phone').value.trim()     || null,
    login_email:       document.getElementById('modal-login-email').value.trim() || null,
    username:          username || null,
    image_url:         document.getElementById('modal-image-url').value.trim() || null,
    position:          posVal,
    positions:         checkedPositions,
    position_dept_id:  checkedPositions.includes('dept_head')
      ? (parseInt(document.getElementById('modal-position-dept').value) || null)
      : null,
  }

  if (!payload.full_name) { showToast('กรุณากรอกชื่อ-นามสกุล', 'warning'); return }

  setButtonLoading(btn, true)
  try {
    // upload รูปถ้าเลือกไฟล์ใหม่
    const photoFile = document.getElementById('modal-photo-file')?.files?.[0]
    if (photoFile) {
      const tempId   = id || `new_${Date.now()}`
      payload.image_url = await uploadTeacherPhoto(tempId, photoFile)
    }

    if (id) await updateTeacher(Number(id), payload)
    else    await createTeacher(payload)

    showToast('บันทึกข้อมูลสำเร็จ', 'success')
    closeTeacherModal()
    renderTeacherTable(await getTeachers())
  } catch (err) {
    showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  } finally {
    setButtonLoading(btn, false)
  }
}

export async function handleDeleteTeacher(id, name) {
  if (!confirm(`ยืนยันการลบ "${name}" ออกจากระบบ?`)) return
  try {
    await deleteTeacher(Number(id))
    showToast(`ลบ "${name}" แล้ว`, 'success')
    renderTeacherTable(await getTeachers())
  } catch {
    showToast('ลบไม่สำเร็จ กรุณาลองใหม่', 'error')
  }
}

// ─── Avatar preview helper ────────────────────────────────────────────────────
function _updateAvatarPreview(url, name) {
  const el = document.getElementById('modal-avatar-preview')
  if (!el) return
  if (url) {
    el.innerHTML = `<img src="${url}" class="w-full h-full object-cover" />`
  } else {
    el.innerHTML = (name ?? '?').charAt(0).toUpperCase()
  }
}

// ─── Subject Modal ────────────────────────────────────────────────────────────
export async function openSubjectModal(id = null) {
  const modal = document.getElementById('subject-modal')
  document.getElementById('subject-modal-title').textContent = id ? 'แก้ไขรายวิชา' : 'เพิ่มรายวิชา'
  ;['sub-id','sub-code','sub-name','sub-dept','sub-grade','sub-credit','sub-learning-area']
    .forEach(f => { document.getElementById(f).value = '' })
  document.getElementById('sub-skill-group').value = ''

  if (id) {
    try {
      const subjects = await getMasterSubjects()
      const s = subjects.find(x => x.id === id)
      if (s) {
        document.getElementById('sub-id').value           = s.id
        document.getElementById('sub-code').value         = s.subject_code  ?? ''
        document.getElementById('sub-name').value         = s.subject_name  ?? ''
        document.getElementById('sub-dept').value         = s.dept          ?? ''
        document.getElementById('sub-grade').value        = s.grade_level   ?? ''
        document.getElementById('sub-credit').value       = s.credit        ?? ''
        document.getElementById('sub-learning-area').value= s.learning_area ?? ''
        document.getElementById('sub-skill-group').value  = s.skill_group   ?? ''
      }
    } catch { showToast('โหลดข้อมูลไม่สำเร็จ', 'error') }
  }
  modal.classList.replace('hidden', 'flex')
}

function closeSubjectModal() {
  document.getElementById('subject-modal').classList.replace('flex', 'hidden')
}

async function handleSubjectFormSubmit(e) {
  e.preventDefault()
  const btn  = document.getElementById('sub-save-btn')
  const id   = document.getElementById('sub-id').value
  const name = document.getElementById('sub-name').value.trim()
  if (!name) { showToast('กรุณากรอกชื่อวิชา', 'warning'); return }

  const payload = {
    subject_code:  document.getElementById('sub-code').value.trim()         || null,
    subject_name:  name,
    dept:          document.getElementById('sub-dept').value.trim()          || null,
    grade_level:   document.getElementById('sub-grade').value.trim()         || null,
    credit:        parseFloat(document.getElementById('sub-credit').value)   || null,
    learning_area: document.getElementById('sub-learning-area').value.trim() || null,
    skill_group:   document.getElementById('sub-skill-group').value          || null,
  }

  setButtonLoading(btn, true)
  try {
    if (id) await updateSubject(Number(id), payload)
    else    await createSubject(payload)
    showToast('บันทึกสำเร็จ', 'success')
    closeSubjectModal()
    renderSubjectTable(await getMasterSubjects())
  } catch (err) {
    showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  } finally {
    setButtonLoading(btn, false)
  }
}

export async function handleDeleteSubject(id, name) {
  if (!confirm(`ยืนยันลบวิชา "${name}"?`)) return
  try {
    await deleteSubject(Number(id))
    showToast(`ลบ "${name}" แล้ว`, 'success')
    renderSubjectTable(await getMasterSubjects())
  } catch {
    showToast('ลบไม่สำเร็จ', 'error')
  }
}

// ─── Department Modal ─────────────────────────────────────────────────────────
export async function openDeptModal(id = null) {
  const modal = document.getElementById('dept-modal')
  ;['dept-id','dept-code','dept-name','dept-teacher-code','dept-photo-url','dept-sign-url','dept-category']
    .forEach(i => { const el = document.getElementById(i); if (el) el.value = '' })
  document.getElementById('dept-photo-preview').innerHTML      = '👤'
  document.getElementById('dept-sign-preview').innerHTML       = 'ลายเซ็น'
  document.getElementById('dept-teacher-search').value         = ''
  document.getElementById('dept-teacher-code-input').value     = ''
  const _selEl = document.getElementById('dept-selected-teacher')
  _selEl.classList.add('hidden'); _selEl.classList.remove('flex')
  document.getElementById('dept-modal-title').textContent  = id ? 'แก้ไขกลุ่มสาระ' : 'เพิ่มกลุ่มสาระ'

  // โหลดรายชื่อครู
  let allTeachers = []
  try { allTeachers = await getTeachers() } catch { /* ไม่ critical */ }

  const codeInputEl    = document.getElementById('dept-teacher-code-input')
  const searchEl       = document.getElementById('dept-teacher-search')
  const dropdownEl     = document.getElementById('dept-teacher-dropdown')
  const selectedEl     = document.getElementById('dept-selected-teacher')
  const selectedNameEl = document.getElementById('dept-selected-name')
  const clearBtn       = document.getElementById('dept-clear-teacher')

  // เลือกครู → เติมทั้ง 2 ช่อง + แสดง chip
  const _selectTeacher = (t) => {
    document.getElementById('dept-teacher-code').value = t ? (t.teacher_code ?? '') : ''
    if (t) {
      codeInputEl.value = t.teacher_code ?? ''
      searchEl.value    = t.full_name    ?? ''
      selectedNameEl.textContent = `${t.full_name}${t.teacher_code ? ` (${t.teacher_code})` : ''}`
      selectedEl.classList.remove('hidden')
      selectedEl.classList.add('flex')
    } else {
      codeInputEl.value = ''
      searchEl.value    = ''
      selectedEl.classList.add('hidden')
      selectedEl.classList.remove('flex')
    }
    dropdownEl.classList.add('hidden')
  }

  const _renderDropdown = (teachers) => {
    dropdownEl.innerHTML = !teachers.length
      ? `<p class="px-4 py-3 text-sm text-gray-400">ไม่พบครูที่ค้นหา</p>`
      : teachers.map(t => `
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 transition
                      border-b border-gray-50 last:border-0 teacher-option" data-id="${t.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${t.teacher_code ?? ''}</span>
            <span class="font-medium text-gray-800">${t.full_name}</span>
          </div>`).join('')
    dropdownEl.querySelectorAll('.teacher-option').forEach(el => {
      el.addEventListener('mousedown', e => {
        e.preventDefault()
        _selectTeacher(allTeachers.find(x => String(x.id) === el.dataset.id))
      })
    })
    dropdownEl.classList.remove('hidden')
  }

  // ช่องรหัสครู: พิมพ์รหัส → หาชื่อ → เติมอัตโนมัติ
  codeInputEl.oninput = () => {
    const q = codeInputEl.value.trim().toLowerCase()
    if (!q) { _selectTeacher(null); return }
    const exact = allTeachers.find(t => (t.teacher_code ?? '').toLowerCase() === q)
    if (exact) {
      _selectTeacher(exact)
    } else {
      // แสดง dropdown กรองตามรหัส
      const filtered = allTeachers.filter(t =>
        (t.teacher_code ?? '').toLowerCase().startsWith(q))
      if (filtered.length) _renderDropdown(filtered)
    }
  }

  // ช่องค้นหาชื่อ
  searchEl.onfocus = () => _renderDropdown(allTeachers)
  searchEl.oninput = () => {
    const q = searchEl.value.toLowerCase()
    _renderDropdown(q
      ? allTeachers.filter(t =>
          t.full_name.toLowerCase().includes(q) ||
          (t.teacher_code ?? '').toLowerCase().includes(q))
      : allTeachers)
  }
  searchEl.onblur = () => setTimeout(() => dropdownEl.classList.add('hidden'), 150)

  clearBtn?.addEventListener('click', () => _selectTeacher(null))

  if (id) {
    try {
      const depts = await getDepartments()
      const d = depts.find(x => x.id === id)
      if (d) {
        document.getElementById('dept-id').value         = d.id
        document.getElementById('dept-code').value       = d.dept_code      ?? ''
        document.getElementById('dept-name').value       = d.dept_name      ?? ''
        document.getElementById('dept-teacher-code').value = d.teacher_code   ?? ''
        document.getElementById('dept-photo-url').value     = d.head_photo_url ?? ''
        document.getElementById('dept-sign-url').value      = d.head_sign_url  ?? ''
        const catEl = document.getElementById('dept-category')
        if (catEl) catEl.value = d.category ?? ''
        if (d.teacher_code) {
          const t = allTeachers.find(x => x.teacher_code === d.teacher_code)
          if (t) _selectTeacher(t)
        }
        if (d.head_photo_url)
          document.getElementById('dept-photo-preview').innerHTML =
            `<img src="${d.head_photo_url}" class="w-full h-full object-cover" />`
        if (d.head_sign_url)
          document.getElementById('dept-sign-preview').innerHTML =
            `<img src="${d.head_sign_url}" class="w-full h-full object-contain" />`
      }
    } catch { showToast('โหลดข้อมูลไม่สำเร็จ', 'error'); return }
  }

  modal.classList.remove('hidden'); modal.classList.add('flex')
}

function closeDeptModal() {
  document.getElementById('dept-modal').classList.replace('flex','hidden')
}

async function handleDeptFormSubmit(e) {
  e.preventDefault()
  const btn      = document.getElementById('dept-save-btn')
  const id       = document.getElementById('dept-id').value
  const deptCode = document.getElementById('dept-code').value.trim().toUpperCase()
  const deptName = document.getElementById('dept-name').value.trim()
  if (!deptCode || !deptName) { showToast('กรุณากรอกรหัสและชื่อกลุ่มสาระ', 'warning'); return }

  setButtonLoading(btn, true)
  try {
    const teacherCode = document.getElementById('dept-teacher-code').value || null
    const headName    = teacherCode
      ? (document.getElementById('dept-selected-name')?.textContent?.split(' (')[0]?.trim() ?? null)
      : null

    const payload = {
      dept_code:      deptCode,
      dept_name:      deptName,
      head_name:      headName,
      teacher_code:   teacherCode,
      head_photo_url: document.getElementById('dept-photo-url').value || null,
      head_sign_url:  document.getElementById('dept-sign-url').value  || null,
      category:       document.getElementById('dept-category')?.value || null,
    }

    // upload รูปโปรไฟล์
    const photoFile = document.getElementById('dept-photo-file')?.files?.[0]
    if (photoFile) payload.head_photo_url = await uploadDeptAsset(deptCode, 'photo', photoFile)

    // upload ลายเซ็น
    const signFile = document.getElementById('dept-sign-file')?.files?.[0]
    if (signFile) payload.head_sign_url = await uploadDeptAsset(deptCode, 'sign', signFile)

    if (id) await updateDepartment(Number(id), payload)
    else    await createDepartment(payload)

    showToast('บันทึกสำเร็จ', 'success')
    closeDeptModal()
    renderDeptTable(await getDepartments())
  } catch (err) {
    showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  } finally {
    setButtonLoading(btn, false)
  }
}

export async function handleDeleteDept(id, name) {
  if (!confirm(`ยืนยันลบกลุ่มสาระ "${name}"?`)) return
  try {
    await deleteDepartment(Number(id))
    showToast(`ลบ "${name}" แล้ว`, 'success')
    renderDeptTable(await getDepartments())
  } catch { showToast('ลบไม่สำเร็จ', 'error') }
}

// ─── Period Modal ─────────────────────────────────────────────────────────────
export function openPeriodModal(id = null) {
  const modal = document.getElementById('period-modal')
  const data  = id ? (window._periodsCache?.[id] ?? null) : null
  document.getElementById('period-id').value    = id    ?? ''
  document.getElementById('period-no').value    = data?.period_no             ?? ''
  document.getElementById('period-start').value = data?.start_time?.slice(0,5) ?? ''
  document.getElementById('period-end').value   = data?.end_time?.slice(0,5)   ?? ''
  document.getElementById('period-modal-title').textContent = id ? 'แก้ไขคาบเรียน' : 'เพิ่มคาบเรียน'
  modal.classList.remove('hidden'); modal.classList.add('flex')
}

function closePeriodModal() {
  document.getElementById('period-modal').classList.replace('flex','hidden')
}

async function handlePeriodFormSubmit(e) {
  e.preventDefault()
  const btn = document.getElementById('period-save-btn')
  const id  = document.getElementById('period-id').value
  const payload = {
    period_no:  parseInt(document.getElementById('period-no').value),
    start_time: document.getElementById('period-start').value,
    end_time:   document.getElementById('period-end').value,
  }
  if (!payload.period_no || !payload.start_time || !payload.end_time)
    { showToast('กรุณากรอกข้อมูลให้ครบ', 'warning'); return }
  if (id) payload.id = Number(id)

  setButtonLoading(btn, true)
  try {
    await upsertPeriod(payload)
    showToast('บันทึกสำเร็จ', 'success')
    closePeriodModal()
    renderPeriods()
  } catch (err) {
    showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  } finally {
    setButtonLoading(btn, false)
  }
}

export async function handleDeletePeriod(id) {
  if (!confirm('ยืนยันลบคาบเรียนนี้?')) return
  try {
    await deletePeriod(Number(id))
    showToast('ลบแล้ว', 'success')
    renderPeriods()
  } catch { showToast('ลบไม่สำเร็จ', 'error') }
}

// ─── Payment Badge ────────────────────────────────────────────────────────────
async function _loadPaymentBadge() {
  try {
    const all     = await getAllPaymentRequests()
    const pending = all.filter(r => r.status === 'pending').length
    const badge   = document.getElementById('badge-payments')
    if (!badge) return
    if (pending > 0) {
      badge.textContent = pending > 9 ? '9+' : pending
      badge.classList.remove('hidden')
      badge.classList.add('flex')
    } else {
      badge.classList.add('hidden')
      badge.classList.remove('flex')
    }
  } catch { /* ไม่ critical */ }
}

// ─── Feedback Badge ───────────────────────────────────────────────────────────
async function _loadFeedbackBadge() {
  try {
    const all    = await getAllAppFeedback()
    const unread = all.filter(f => !f.is_read).length
    const badge  = document.getElementById('badge-feedback')
    if (!badge) return
    if (unread > 0) {
      badge.textContent = unread > 9 ? '9+' : unread
      badge.classList.remove('hidden')
      badge.classList.add('flex')
    } else {
      badge.classList.add('hidden')
      badge.classList.remove('flex')
    }
  } catch { /* ไม่ critical */ }
}

// expose สำหรับ views.js ใช้หลังอ่าน/ลบ feedback
window._refreshFeedbackBadge = _loadFeedbackBadge

// expose สำหรับ views.js ใช้หลังอนุมัติ
window._refreshPaymentBadge = _loadPaymentBadge

// _goBack สำหรับ course form ในบริบท admin → กลับไปหน้า subjects
window._goBack = () => renderSubjects()

window.openTeacherModal    = openTeacherModal
window.handleDeleteTeacher = handleDeleteTeacher
window.openSubjectModal    = openSubjectModal
window.handleDeleteSubject = handleDeleteSubject
window.openDeptModal       = openDeptModal
window.handleDeleteDept    = handleDeleteDept
window.openPeriodModal     = openPeriodModal
window.handleDeletePeriod  = handleDeletePeriod

// ─── Admin: ดูตารางสอนของครู (Fullscreen Overlay) ────────────────────────────
window._adminViewSchedule = async (teacherId, teacherName) => {
  document.getElementById('admin-sched-overlay')?.remove()

  const { getSystemConfig } = await import('./api.js')
  const cfg  = await getSystemConfig().catch(()=>({}))
  const year = parseInt(cfg.academicYear ?? 2568)
  const sem  = parseInt(cfg.semester ?? 1)

  // สร้าง overlay เต็มจอ — แยกจาก admin DOM
  const overlay = document.createElement('div')
  overlay.id = 'admin-sched-overlay'
  overlay.className = 'fixed inset-0 z-[200] bg-gray-50 flex flex-col'
  overlay.innerHTML = `
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-5 h-14 flex items-center gap-4 flex-shrink-0 shadow-sm">
      <button id="aso-close"
        class="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 font-medium transition">
        ← กลับ
      </button>
      <div class="w-px h-5 bg-gray-200"></div>
      <div>
        <p class="text-sm font-bold text-gray-800">🗓️ ตารางสอน — ${teacherName}</p>
        <p class="text-xs text-gray-400">ภาค ${sem} / ${year} · แก้ไขได้</p>
      </div>
    </div>
    <!-- Content -->
    <div id="aso-content" class="flex-1 overflow-y-auto p-5">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg>
        กำลังโหลดตารางสอน...
      </div>
    </div>`
  document.body.appendChild(overlay)

  overlay.querySelector('#aso-close').addEventListener('click', () => overlay.remove())

  // Override setContent ชั่วคราวให้ render ใน #aso-content แทน #main-content
  const asoContent = overlay.querySelector('#aso-content')
  const origMainContent = document.getElementById('main-content')

  // Swap: ทำให้ renderScheduleGrid คิดว่า #main-content คือ asoContent
  if (origMainContent) origMainContent.id = 'main-content-bak'
  asoContent.id = 'main-content'

  try {
    const fakeTeacher = { id: teacherId, full_name: teacherName }
    await renderScheduleGrid(fakeTeacher, year, sem, cfg)
  } finally {
    // Restore
    asoContent.id = 'aso-content'
    if (origMainContent) origMainContent.id = 'main-content'
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  blockPullToRefresh()

  const session = await requireAuth()
  if (!session) return
  await applyThemeForRole('admin')

  const verEl = document.getElementById('app-version')
  if (verEl) {
    verEl.textContent = `v${APP_VERSION}`
    verEl.classList.add('cursor-pointer', 'hover:underline')
    verEl.addEventListener('click', () => checkAndShowChangelog(session.user.id, true, true))
  }

  if (session?.user?.id) {
    checkAndShowChangelog(session.user.id, false, true)
  }

  document.getElementById('btn-logout')?.addEventListener('click', handleLogout)

  // Dynamic position rows
  const POS_OPTIONS = [
    { value: 'dept_head',            label: 'หัวหน้ากลุ่มสาระ' },
    { value: 'religion_group_head',  label: 'หัวหน้ากลุ่ม (ศาสนา)' },
    { value: 'religion_subgroup_head', label: 'หัวหน้ากลุ่มย่อย (ศาสนา)' },
    { value: 'registrar_samai',      label: 'หัวหน้าฝ่ายทะเบียน (สามัญ)' },
    { value: 'registrar_religion',   label: 'หัวหน้าฝ่ายทะเบียน (ศาสนา)' },
    { value: 'registrar_pvch',       label: 'หัวหน้าฝ่ายทะเบียน (ปวช)' },
    { value: 'academic_samai',       label: 'หัวหน้าวิชาการสามัญ' },
    { value: 'academic_religion',    label: 'หัวหน้าวิชาการศาสนา' },
    { value: 'academic_pvch',        label: 'หัวหน้าวิชาการปวช' },
    { value: 'house_color_admin',    label: 'ผู้รับผิดชอบสีนักเรียน' },
    { value: 'classroom_leaders_admin', label: 'ผู้ดูแลหัวหน้า/รองหัวหน้า' },
    { value: 'council_advisor',      label: 'ครูที่ปรึกษาสภานักเรียน' },
  ]
  const posOptHtml = () =>
    `<option value="">— ไม่มี —</option>` +
    POS_OPTIONS.map(o => `<option value="${o.value}">${o.label}</option>`).join('')

  function _refreshDeptWrap() {
    const vals = [...document.querySelectorAll('.pos-row-sel')].map(s => s.value)
    document.getElementById('modal-pos-dept-wrap').style.display =
      vals.includes('dept_head') ? 'block' : 'none'
  }

  function _addPositionRow(value = '') {
    const list = document.getElementById('modal-positions-list')
    const row = document.createElement('div')
    row.className = 'pos-row flex items-center gap-2'
    row.innerHTML = `
      <select class="pos-row-sel flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
        ${posOptHtml()}
      </select>
      <button type="button" class="pos-row-del flex-shrink-0 text-gray-400 hover:text-red-500 text-lg leading-none">✕</button>`
    row.querySelector('.pos-row-sel').value = value
    row.querySelector('.pos-row-sel').addEventListener('change', _refreshDeptWrap)
    row.querySelector('.pos-row-del').addEventListener('click', () => {
      row.remove()
      _refreshDeptWrap()
    })
    list.appendChild(row)
    _refreshDeptWrap()
  }

  window._addPositionRow = _addPositionRow
  window._clearPositionRows = () => {
    document.getElementById('modal-positions-list').innerHTML = ''
    _addPositionRow()
    _refreshDeptWrap()
  }
  window._setPositionRows = (positions) => {
    document.getElementById('modal-positions-list').innerHTML = ''
    const vals = positions?.length ? positions : ['']
    vals.forEach(v => _addPositionRow(v))
    _refreshDeptWrap()
  }
  window._getPositionValues = () =>
    [...document.querySelectorAll('.pos-row-sel')].map(s => s.value).filter(Boolean)

  document.getElementById('btn-add-position')?.addEventListener('click', () => _addPositionRow())

  // init with one empty row
  _addPositionRow()

  // Teacher modal
  document.getElementById('modal-close')?.addEventListener('click', closeTeacherModal)
  document.getElementById('modal-backdrop')?.addEventListener('click', closeTeacherModal)
  document.getElementById('teacher-form')?.addEventListener('submit', handleTeacherFormSubmit)
  document.getElementById('modal-photo-file')?.addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return
    _updateAvatarPreview(URL.createObjectURL(file), '')
  })

  // Dept modal
  document.getElementById('dept-modal-close')?.addEventListener('click', closeDeptModal)
  document.getElementById('dept-modal-backdrop')?.addEventListener('click', closeDeptModal)
  document.getElementById('dept-modal-cancel')?.addEventListener('click', closeDeptModal)
  document.getElementById('dept-form')?.addEventListener('submit', handleDeptFormSubmit)
  document.getElementById('dept-photo-file')?.addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return
    document.getElementById('dept-photo-preview').innerHTML =
      `<img src="${URL.createObjectURL(f)}" class="w-full h-full object-cover" />`
  })
  document.getElementById('dept-sign-file')?.addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return
    document.getElementById('dept-sign-preview').innerHTML =
      `<img src="${URL.createObjectURL(f)}" class="w-full h-full object-contain" />`
  })

  // Period modal
  document.getElementById('period-modal-close')?.addEventListener('click', closePeriodModal)
  document.getElementById('period-modal-backdrop')?.addEventListener('click', closePeriodModal)
  document.getElementById('period-modal-cancel')?.addEventListener('click', closePeriodModal)
  document.getElementById('period-form')?.addEventListener('submit', handlePeriodFormSubmit)

  await loadUserProfile(session.user.id)
  _addSwitchToTeacherBtn(session.user.id)

  const routes = {
    overview:    renderOverview,
    'exec-overview': renderExecOverview,
    teachers:    renderTeachers,
    classes:     renderClasses,
    students:    renderStudents,
    departments: renderDepartments,
    subjects:    renderSubjects,
    curriculum:  renderCurriculum,
    periods:     renderPeriods,
    homeroom:              renderHomeroom,
    'score-col-config':    renderScoreColConfig,
    'registered-teachers': renderRegisteredTeachers,
    'holidays':            renderHolidays,
    'payments':            renderPayments,
    'life-skill-admin':    renderLifeSkillAdmin,
    'reading-admin':       renderReadingAdmin,
    'prayer-admin':        renderPrayerAdmin,
    settings:       renderSettings,
    import:         renderImport,
    'admin-profile': renderAdminProfile,
    'usage-stats':   renderUsageStats,
    'classrooms-admin': renderClassroomsAdmin,
    'course-doc-lang':  () => renderCourseDocLangConfig(null, true),
    'announcements':    () => renderAnnouncements(),
    'work-calendar':    () => renderWorkCalendar(null),
    'role-permissions': () => renderRolePermissions(),
    'religion-groups':  renderReligionGroups,
    'tutorial-admin':   () => import('./tutorial.js').then(({renderTutorialAdmin}) => renderTutorialAdmin()),
    'house-colors':     () => renderHouseColors(),
    'sports-admin':     () => openAzizGamesModal({ admin: true }),
    'azfutsal':         () => openAzfutsalModal(),
    'sports-shirt-summary': () => renderShirtSummary(),
    'sports-fund-admin': () => renderSportsFundAdmin(),
    'shirt-vote-settings': () => renderShirtVoteSettings(),
    'shirt-vote-dashboard': () => renderShirtVoteDashboard(),
    'donations':        () => renderDonations(),
    'feedback-admin':   () => renderFeedbackAdmin(),
    'student-qr-print': () => import('./teacher-views-classes.js').then(m => m.renderStudentQRPrint(null, null)),
    'classroom-leaders': () => renderClassroomLeaders(),
  }

  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const view = link.dataset.nav
      if (routes[view]) routes[view]()
      // ปิด sidebar บน mobile หลังคลิก nav item
      document.getElementById('sidebar')?.classList.add('-translate-x-full')
      document.getElementById('sidebar-overlay')?.classList.add('hidden')
    })
  })

  // โหลด badge จำนวน pending payments
  _loadPaymentBadge()
  setInterval(_loadPaymentBadge, 60000) // refresh ทุก 1 นาที

  // โหลด badge จำนวน feedback ที่ยังไม่อ่าน
  _loadFeedbackBadge()
  setInterval(_loadFeedbackBadge, 60000) // refresh ทุก 1 นาที

  showPageLoader(false)
  window._adminNav = (view) => { if (routes[view]) routes[view]() }
  window.addEventListener('pp5:open-sports-shirt-summary', () => routes['sports-shirt-summary']())
  window.addEventListener('pp5:open-shirt-vote-settings', () => routes['shirt-vote-settings']())
  window.addEventListener('pp5:open-shirt-vote-dashboard', () => routes['shirt-vote-dashboard']())
  await renderOverview()
})
