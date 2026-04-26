import { supabase }            from './supabase.js'
import { showToast, showPageLoader } from './ui.js'
import { getMyTeacherProfile, getMySubjects, getMyClasses, getMasterSubjects,
         createSubject, updateSubject, deleteSubject,
         getMyHomeroomRooms, upsertHomeroomTeacher, getSystemConfig,
         createPaymentRequest, uploadPaymentSlip, getMyPaymentRequests } from './api.js'
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
  if (!course) { showToast('ไม่พบข้อมูลคอร์ส', 'error'); return }

  // ── ตรวจโควตา ──
  const quota   = _teacher?.teachers_quota
  const isPaid  = quota?.is_paid ?? false
  const created = quota?.total_classes_created ?? 0
  const FREE_LIMIT = 2

  if (!isPaid && created >= FREE_LIMIT) {
    _showQuotaPopup(created, course); return
  }

  renderClassForm(_teacher, course)
}

// ── หน้า 1: เลือกแพ็กเกจ ────────────────────────────────────────────────────
function _showQuotaPopup(count, course) {
  document.getElementById('quota-popup')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'quota-popup'
  wrap.className = 'fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4'

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
        <div class="bg-gray-50 rounded-xl p-3.5 text-sm">
          <p class="text-gray-600">คุณสร้างห้องเรียนไปแล้ว
            <span class="font-bold text-indigo-600">${count} ห้อง</span>
            จาก <span class="font-bold">2 ห้องฟรี</span>
          </p>
          <p class="text-gray-400 text-xs mt-1">
            การสร้างห้องเรียนตั้งแต่ห้องที่ 3 เป็นต้นไป
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
                <p class="font-bold text-gray-800">รายวิชา</p>
                <p class="text-xs text-gray-400 mt-0.5">เพิ่มห้องสำหรับ <b>"${course?.subject_name ?? 'วิชานี้'}"</b> เท่านั้น</p>
              </div>
              <div class="text-right flex-shrink-0 ml-3">
                <p class="text-2xl font-extrabold text-indigo-600">49<span class="text-sm font-normal text-gray-400"> บ.</span></p>
                <p class="text-[10px] text-gray-400">ต่อวิชา / เทอม</p>
              </div>
            </div>
            <div class="space-y-1 text-xs text-gray-500">
              <p>✅ สร้างห้องเรียนได้ไม่จำกัดสำหรับวิชานี้</p>
              <p>✅ เหมาะสำหรับครูที่สอนไม่กี่วิชา</p>
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
                <p class="text-xs text-gray-400 mt-0.5">ทุกวิชา ทุกห้อง ไม่จำกัด</p>
              </div>
              <div class="text-right flex-shrink-0 ml-3">
                <p class="text-2xl font-extrabold text-emerald-600">299<span class="text-sm font-normal text-gray-400"> บ.</span></p>
                <p class="text-[10px] text-gray-400">ต่อเทอม</p>
              </div>
            </div>
            <div class="space-y-1 text-xs text-gray-500">
              <p>✅ สร้างห้องเรียนได้ไม่จำกัดทุกวิชา</p>
              <p>✅ ประหยัดกว่าถ้าสอนมากกว่า 6 วิชา</p>
              <p>✅ ใช้ได้ตลอดภาคเรียนนี้</p>
            </div>
          </div>
        </label>

        <p class="text-[11px] text-gray-400 text-center">
          💡 ชำระเงินผ่าน PromptPay / โอนเงิน แล้วอัปโหลดสลิป<br/>
          แอดมินจะอนุมัติภายใน 24 ชั่วโมง
        </p>
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
  wrap.querySelector('#qp-next').addEventListener('click', () => {
    const pkg = wrap.querySelector('input[name="pkg"]:checked')?.value
    if (!pkg) { alert('กรุณาเลือกแพ็กเกจก่อนครับ'); return }
    wrap.remove()
    _showPaymentPage(pkg, course)
  })
}

// ── หน้า 2: ชำระเงิน ─────────────────────────────────────────────────────────
async function _showPaymentPage(pkgType, course) {
  document.getElementById('payment-page')?.remove()

  const cfg = await getSystemConfig().catch(() => ({}))
  const amount = pkgType === 'semester' ? 299 : 49
  const pkgLabel = pkgType === 'semester' ? 'เหมาทั้งเทอม (299 บ.)' : `รายวิชา — ${course?.subject_name ?? ''} (49 บ.)`

  const wrap = document.createElement('div')
  wrap.id = 'payment-page'
  wrap.className = 'fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="pp-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none mr-1">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">ชำระเงิน</h3>
          <p class="text-xs text-gray-400">แพ็กเกจ: ${pkgLabel}</p>
        </div>
        <div class="bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
          ${amount} บ.
        </div>
      </div>

      <!-- Body -->
      <div class="overflow-auto flex-1 px-5 py-4 space-y-4">

        <!-- QR Code -->
        ${cfg.paymentQrUrl ? `
        <div class="text-center">
          <p class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">สแกน QR PromptPay</p>
          <img src="${cfg.paymentQrUrl}" class="mx-auto h-44 object-contain rounded-xl border border-gray-100 shadow-sm"/>
        </div>` : ''}

        <!-- รายละเอียดบัญชี -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2.5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">ข้อมูลการโอน</p>
          ${cfg.paymentPromptpay ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">PromptPay</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1"
              data-copy="${cfg.paymentPromptpay}">
              ${cfg.paymentPromptpay} <span class="text-[10px] text-gray-400">คัดลอก</span>
            </button>
          </div>` : ''}
          ${cfg.paymentBankName ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ธนาคาร</span>
            <span class="text-sm font-medium text-gray-700">${cfg.paymentBankName}</span>
          </div>` : ''}
          ${cfg.paymentAccountNo ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">เลขบัญชี</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1"
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
          <p class="text-[11px] text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mt-1">${cfg.paymentNote}</p>
          ` : ''}
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
          หลังส่งหลักฐาน แอดมินจะตรวจสอบและอนุมัติภายใน 24 ชั่วโมง<br/>
          คุณจะได้รับแจ้งเตือนเมื่ออนุมัติแล้ว
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

  // ← กลับ
  wrap.querySelector('#pp-back').addEventListener('click', () => {
    wrap.remove()
    const quota = _teacher?.teachers_quota
    _showQuotaPopup(quota?.total_classes_created ?? 0, course)
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
        subject_id:   pkgType === 'per_subject' ? (course?.id ?? null) : null,
        status:       'pending',
      })
      const slipUrl = await uploadPaymentSlip(slipFile, req.id)
      await createPaymentRequest({ ...req, slip_url: slipUrl })  // อัปเดต URL
      // อัปเดต slip_url
      const { supabase } = await import('./supabase.js')
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
