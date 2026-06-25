import { supabase } from './supabase.js'
import { showToast, setButtonLoading, showPageLoader } from './ui.js'
import { blockPullToRefresh } from './anti-pull-refresh.js'
import { storeSsoPassword } from './wen-sso.js'

// ─── Check session on page load ───────────────────────────────────────────────
async function checkSession() {
  const isRecovery = window.location.hash.includes('type=recovery') || window.location.search.includes('type=recovery')
  if (isRecovery) {
    showPageLoader(false)
    return
  }

  showPageLoader(true)
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    // เช็ค role ก่อน redirect — ครูไปหน้าครู, แอดมินไปหน้าแอดมิน
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single()
    if (profile?.role === 'admin') window.location.href = 'dashboard.html'
    else if (profile?.role === 'student') window.location.href = 'student.html'
    else window.location.href = 'teacher.html'
  } else {
    showPageLoader(false)
  }
}

// ─── Login ────────────────────────────────────────────────────────────────────
async function handleLogin(e) {
  e.preventDefault()

  const identifier = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value
  const btn      = document.getElementById('btn-login')

  if (!identifier || !password) {
    showToast('กรุณากรอกอีเมล ยูเซอร์เนม หรือรหัสครู และรหัสผ่าน', 'warning')
    return
  }

  setButtonLoading(btn, true)

  let email = identifier
  try {
    email = await resolveLoginEmail(identifier)
  } catch (err) {
    setButtonLoading(btn, false)
    showToast(err.message ?? 'ไม่พบข้อมูลเข้าสู่ระบบนี้', 'error')
    return
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    setButtonLoading(btn, false)
    const msg = error.message.includes('Invalid login credentials')
      ? 'ข้อมูลเข้าสู่ระบบหรือรหัสผ่านไม่ถูกต้อง'
      : error.message
    showToast(msg, 'error')
    return
  }

  showToast('เข้าสู่ระบบสำเร็จ', 'success')

  // Fetch role from profiles table
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', data.user.id)
    .single()

  setTimeout(() => {
    if (profile?.role === 'admin') window.location.href = 'dashboard.html'
    else if (profile?.role === 'student') window.location.href = 'student.html'
    else {
      storeSsoPassword(password)
      window.location.href = 'teacher.html'
    }
  }, 800)
}

function normalizeUsername(value) {
  return String(value ?? '').trim().toLowerCase()
}

function teacherCodeCandidates(value) {
  const raw = String(value ?? '').trim()
  if (!/^\d+$/.test(raw)) return []
  const codes = new Set([raw])
  if (/^[12]\d{2}$/.test(raw)) {
    codes.add(raw[0] + raw.slice(1).padStart(3, '0'))
  }
  return Array.from(codes)
}

async function resolveLoginEmail(identifier) {
  const raw = identifier.trim()
  if (raw.includes('@')) return raw

  // ลองหาในตาราง teachers ก่อน (username / รหัสครู)
  const { data: teacherEmail, error: tErr } = await supabase.rpc('resolve_teacher_login_email', {
    p_identifier: raw,
  })
  if (tErr) throw tErr
  if (teacherEmail) return teacherEmail

  // ลองหาในตาราง students (student_code)
  const { data: stuData } = await supabase
    .from('students')
    .select('profile_id')
    .eq('student_code', raw)
    .not('profile_id', 'is', null)
    .maybeSingle()

  if (stuData?.profile_id) {
    // ดึง email จาก profiles (ผ่าน RPC เพราะ auth.users เข้าตรงไม่ได้)
    const { data: emailData, error: eErr } = await supabase.rpc('resolve_student_login_email', {
      p_profile_id: stuData.profile_id,
    })
    if (!eErr && emailData) return emailData
  }

  // ตรวจสอบว่ารหัสนี้ถูกรวมบัญชีไปแล้วหรือไม่
  const { data: redirect } = await supabase
    .from('teacher_code_redirects')
    .select('new_code, full_name')
    .eq('old_code', raw)
    .maybeSingle()
  if (redirect) {
    // แจ้งเตือนแล้ว login ต่อด้วยรหัสจริงโดยอัตโนมัติ
    showToast(`รหัสครู ${raw} ถูกรวมบัญชีแล้ว — ใช้รหัส ${redirect.new_code} (${redirect.full_name}) แทน`, 'warning')
    return resolveLoginEmail(redirect.new_code)
  }

  throw new Error('ไม่พบบัญชีนี้ในระบบ กรุณาตรวจสอบรหัสครู / รหัสนักเรียน หรือเข้าสู่ระบบด้วยอีเมล')
}

// ─── Generate next teacher code ──────────────────────────────────────────────
async function generateNextCode(category) {
  const prefix = category === 'ศาสนา' ? '2' : '1'
  const { data } = await supabase
    .from('teachers')
    .select('teacher_code')
    .like('teacher_code', `${prefix}%`)

  const maxSuffix = (data ?? []).reduce((max, row) => {
    const code = String(row.teacher_code ?? '')
    if (!code.startsWith(prefix)) return max
    const suffix = parseInt(code.slice(1), 10)
    return Number.isFinite(suffix) ? Math.max(max, suffix) : max
  }, 0)

  return `${prefix}${String(maxSuffix + 1).padStart(3, '0')}`
}

// ─── Request Code Modal ────────────────────────────────────────────────────────
async function handleRequestCode(e) {
  e.preventDefault()
  const prefix   = document.getElementById('rc-prefix').value
  const name     = document.getElementById('rc-name').value.trim()
  const category = document.querySelector('[name="rc-category"]:checked')?.value || 'สามัญ'
  const btn      = document.getElementById('btn-submit-rc')
  const prefixMsg = document.getElementById('rc-prefix-msg')

  // Validate prefix
  if (!prefix) {
    prefixMsg?.classList.remove('hidden')
    document.getElementById('rc-prefix').focus()
    return
  }
  prefixMsg?.classList.add('hidden')

  if (!name) { _showRcMsg('กรุณากรอกชื่อ-นามสกุล', 'error'); return }

  const fullName = `${prefix} ${name}`

  btn.disabled = true
  btn.textContent = 'กำลังดำเนินการ...'

  const code = await generateNextCode(category)

  const { error } = await supabase
    .from('teachers')
    .insert({ teacher_code: code, full_name: fullName, category })

  if (error) {
    _showRcMsg('เกิดข้อผิดพลาด: ' + (error.message ?? ''), 'error')
    btn.disabled = false; btn.textContent = 'ขอรหัสครู'; return
  }

  _showRcMsg(`✓ ได้รหัสครูแล้ว: ${code} — กำลังกลับสู่ฟอร์มลงทะเบียน...`, 'success')

  setTimeout(() => {
    document.getElementById('modal-request-code').classList.add('hidden')
    document.getElementById('rc-msg').classList.add('hidden')
    document.getElementById('rc-prefix-msg')?.classList.add('hidden')
    document.getElementById('request-code-form').reset()
    _resetRcOptions()
    btn.disabled = false; btn.textContent = 'ขอรหัสครู'
    // ใส่รหัสใหม่ลงช่อง แล้ว trigger lookup
    const regCodeEl = document.getElementById('reg-code')
    regCodeEl.value = code
    regCodeEl.dispatchEvent(new Event('input'))
  }, 1600)
}

function _showRcMsg(text, type) {
  const el = document.getElementById('rc-msg')
  el.className = `text-sm text-center py-3 rounded-xl ${
    type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'
  }`
  el.textContent = text
  el.classList.remove('hidden')
}

function _resetRcOptions() {
  document.getElementById('rc-opt-saman')?.classList.add('border-indigo-400', 'bg-indigo-50')
  document.getElementById('rc-opt-saman')?.classList.remove('border-gray-200')
  document.getElementById('rc-opt-sasana')?.classList.remove('border-indigo-400', 'bg-indigo-50')
  document.getElementById('rc-opt-sasana')?.classList.add('border-gray-200')
}

// ─── Duplicate registration alert ────────────────────────────────────────────
function _maskEmail(email) {
  if (!email) return '(ไม่ระบุ)'
  const [local, domain] = email.split('@')
  const masked = local.length <= 2 ? local[0] + '***' : local.slice(0, 2) + '***'
  return masked + '@' + domain
}

function _showDuplicateAlert(teacher) {
  const regDate = teacher.registered_at
    ? new Date(teacher.registered_at).toLocaleString('th-TH', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      })
    : null
  const el = document.createElement('div')
  el.id = 'dup-alert-overlay'
  el.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'
  el.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-7 text-center animate-fade">
      <div class="text-4xl mb-3">⚠️</div>
      <h3 class="text-lg font-bold text-gray-800 mb-1">มีบัญชีในระบบแล้ว</h3>
      <p class="text-sm text-gray-500 mb-4">
        <span class="font-medium text-gray-700">${teacher.full_name}</span> (รหัส ${teacher.teacher_code})
        ได้สมัครเข้าใช้งานไว้แล้ว
      </p>
      <div class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-700 mb-5 text-left space-y-1">
        <div>📧 อีเมล: <span class="font-mono">${_maskEmail(teacher.login_email)}</span></div>
        ${regDate ? `<div>🕐 สมัครเมื่อ: ${regDate}</div>` : ''}
      </div>
      <p class="text-xs text-gray-400 mb-5">หากเป็นบัญชีของท่าน กรุณาใช้ "เข้าสู่ระบบ" แทน หรือติดต่อผู้ดูแลระบบ</p>
      <button onclick="document.getElementById('dup-alert-overlay').remove();document.getElementById('btn-show-login')?.click()"
        class="btn-primary w-full text-white font-semibold py-2.5 rounded-xl text-sm">
        รับทราบ — ไปหน้าเข้าสู่ระบบ
      </button>
    </div>`
  document.body.appendChild(el)
  el.addEventListener('click', e => { if (e.target === el) el.remove() })
}

// ─── Search teacher by name (anon) ───────────────────────────────────────────
async function searchTeacherByName(query) {
  if (!query || query.length < 2) return []
  const { data } = await supabase
    .from('teachers')
    .select('id, teacher_code, full_name, dept, category, profile_id, login_email, registered_at')
    .ilike('full_name', `%${query}%`)
    .order('full_name')
    .limit(8)
  return data ?? []
}

// ─── Teacher lookup (anon) ────────────────────────────────────────────────────
async function lookupTeacher(code) {
  if (!code) return null
  const codes = teacherCodeCandidates(code)
  const { data } = await supabase
    .from('teachers')
    .select('id, teacher_code, full_name, dept, category, profile_id, login_email, registered_at')
    .in('teacher_code', codes.length ? codes : [code.trim()])
    .limit(1)
  return data?.[0] ?? null
}

// ─── Register ─────────────────────────────────────────────────────────────────
async function handleRegister(e) {
  e.preventDefault()
  const code     = document.getElementById('reg-code').value.trim()
  const name     = document.getElementById('reg-name').value.trim()
  const email    = document.getElementById('reg-email').value.trim()
  const password = document.getElementById('reg-password').value
  const teacherId = document.getElementById('reg-teacher-id').value
  const btn      = document.getElementById('btn-register')
  const msg      = document.getElementById('reg-msg')

  if (!name || !email || !password) {
    _showRegMsg('กรุณากรอกข้อมูลให้ครบ', 'error'); return
  }
  if (password.length < 6) {
    _showRegMsg('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร', 'error'); return
  }

  btn.disabled = true; btn.textContent = 'กำลังสมัคร...'
  msg.classList.add('hidden')

  const { data, error } = await supabase.auth.signUp({
    email, password,
    options: { data: { full_name: name, role: 'teacher', user_code: code || null } }
  })

  if (error) {
    _showRegMsg(error.message.includes('already registered') ? 'อีเมลนี้ถูกใช้งานแล้ว' : error.message, 'error')
    btn.disabled = false; btn.textContent = 'สมัครสมาชิก'; return
  }

  // ผูก teacher record กับ auth user ทันที (ถ้าเลือกรหัสครูไว้)
  if (teacherId && data?.user) {
    const { error: linkErr } = await supabase
      .from('teachers')
      .update({ profile_id: data.user.id, login_email: email, registered_at: new Date().toISOString() })
      .eq('id', Number(teacherId))
      .is('profile_id', null)

    if (linkErr) {
      // สมัครได้แต่ผูกไม่สำเร็จ — แจ้งให้ admin ทราบ
      _showRegMsg(
        '⚠️ สมัครสำเร็จ แต่ผูกรหัสครูไม่สำเร็จ กรุณาติดต่อผู้ดูแลระบบ\n(' + linkErr.message + ')',
        'error'
      )
      btn.disabled = false; btn.textContent = 'สมัครสมาชิก'; return
    }
  }

  _showRegMsg('✓ สมัครสำเร็จ! กำลังพาไปตั้งค่าโปรไฟล์...', 'success')
  setTimeout(() => { window.location.href = 'teacher.html?setup=1' }, 1200)
}

function _showRegMsg(text, type) {
  const el = document.getElementById('reg-msg')
  el.className = `text-sm text-center py-3 rounded-xl ${type==='error'?'bg-red-50 text-red-600':'bg-green-50 text-green-700'}`
  el.textContent = text
  el.classList.remove('hidden')
}

// ─── Bind events on DOM ready ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  blockPullToRefresh()
  checkSession()
  document.getElementById('login-form')?.addEventListener('submit', handleLogin)
  document.getElementById('register-form')?.addEventListener('submit', handleRegister)

  // ตรวจ redirect ทันทีที่ออกจากช่องกรอกรหัสครู
  const loginEmailEl    = document.getElementById('email')
  const loginHintEl     = document.getElementById('login-redirect-hint')
  loginEmailEl?.addEventListener('blur', async () => {
    const val = loginEmailEl.value.trim()
    if (!val || val.includes('@') || !/^\d+$/.test(val)) {
      loginHintEl?.classList.add('hidden'); return
    }
    const { data: redirect } = await supabase
      .from('teacher_code_redirects')
      .select('new_code, full_name')
      .eq('old_code', val)
      .maybeSingle()
    if (redirect && loginHintEl) {
      loginHintEl.textContent = `รหัสครู ${val} ถูกรวมบัญชีแล้ว — กรุณาใช้รหัส ${redirect.new_code} (${redirect.full_name})`
      loginHintEl.classList.remove('hidden')
      loginEmailEl.value = redirect.new_code
    } else {
      loginHintEl?.classList.add('hidden')
    }
  })
  loginEmailEl?.addEventListener('input', () => loginHintEl?.classList.add('hidden'))

  // Teacher code auto-fill
  const regCodeEl     = document.getElementById('reg-code')
  const regNameEl     = document.getElementById('reg-name')
  const regTeacherEl  = document.getElementById('reg-teacher-id')
  const previewEl     = document.getElementById('reg-teacher-preview')
  const previewName   = document.getElementById('reg-teacher-name')
  const previewDept   = document.getElementById('reg-teacher-dept')
  const codeMsgEl     = document.getElementById('reg-code-msg')

  let _lookupTimer = null
  regCodeEl?.addEventListener('input', () => {
    clearTimeout(_lookupTimer)
    const code = regCodeEl.value.trim()
    if (!code) {
      previewEl?.classList.add('hidden')
      codeMsgEl?.classList.add('hidden')
      regTeacherEl.value = ''
      return
    }
    _lookupTimer = setTimeout(async () => {
      const teacher = await lookupTeacher(code)
      if (teacher) {
        previewName.textContent = teacher.full_name
        previewDept.textContent = teacher.dept ?? ''
        previewEl?.classList.remove('hidden')
        codeMsgEl?.classList.add('hidden')
        regTeacherEl.value = teacher.id
        if (!regNameEl.value) regNameEl.value = teacher.full_name
        if (teacher.profile_id) { _showDuplicateAlert(teacher); return }
      } else if (code.length >= 2) {
        previewEl?.classList.add('hidden')
        codeMsgEl?.classList.remove('hidden')
        // ตรวจสอบรหัสที่ถูกรวมบัญชี
        const { data: redirect } = await supabase
          .from('teacher_code_redirects')
          .select('new_code, full_name')
          .eq('old_code', code.trim())
          .maybeSingle()
        if (redirect) {
          codeMsgEl.textContent = `รหัสครู ${code.trim()} ถูกรวมบัญชีแล้ว — กรุณาใช้รหัส ${redirect.new_code} แทน (${redirect.full_name})`
          codeMsgEl.classList.add('text-orange-600')
          codeMsgEl.classList.remove('text-red-500')
        } else {
          codeMsgEl.textContent = 'ไม่พบรหัสครูนี้ในระบบ'
          codeMsgEl.classList.remove('text-orange-600')
        }
        regTeacherEl.value = ''
      }
    }, 500)
  })

  // ─── Name field — search-as-you-type ─────────────────────────────────────
  const nameResultsEl = document.getElementById('reg-name-results')
  let _nameTimer = null
  let _nameSelected = false  // กันการ search ซ้ำหลังเลือกจาก dropdown

  regNameEl?.addEventListener('input', () => {
    _nameSelected = false
    clearTimeout(_nameTimer)
    const q = regNameEl.value.trim()
    if (q.length < 2) { nameResultsEl?.classList.add('hidden'); return }

    _nameTimer = setTimeout(async () => {
      const results = await searchTeacherByName(q)
      if (!results.length) {
        nameResultsEl.innerHTML = `
          <div class="px-4 py-3 text-sm text-gray-400 text-center">
            ไม่พบครูที่ชื่อ "${q}"
          </div>`
      } else {
        nameResultsEl.innerHTML = results.map(t => `
          <button type="button"
            data-code="${t.teacher_code}"
            data-name="${t.full_name}"
            data-has-account="${t.profile_id ? '1' : ''}"
            data-email="${t.login_email ?? ''}"
            data-reg="${t.registered_at ?? ''}"
            class="name-result-btn w-full text-left px-4 py-3
                   hover:bg-indigo-50 transition
                   border-b border-gray-100 last:border-0">
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-gray-800">${t.full_name}</span>
              ${t.profile_id ? '<span class="text-[10px] bg-amber-100 text-amber-600 rounded-full px-2 py-0.5 font-medium">มีบัญชีแล้ว</span>' : ''}
            </div>
            <div class="text-xs text-gray-400 mt-0.5">
              รหัส ${t.teacher_code}
              ${t.dept ? '· ' + t.dept : ''}
              ${t.category ? '· ' + t.category : ''}
            </div>
          </button>`).join('')

        nameResultsEl.querySelectorAll('.name-result-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            nameResultsEl.classList.add('hidden')
            if (btn.dataset.hasAccount) {
              _showDuplicateAlert({
                full_name: btn.dataset.name,
                teacher_code: btn.dataset.code,
                login_email: btn.dataset.email,
                registered_at: btn.dataset.reg || null,
                profile_id: true
              })
              return
            }
            _nameSelected = true
            regNameEl.value = btn.dataset.name
            regCodeEl.value = btn.dataset.code
            regCodeEl.dispatchEvent(new Event('input'))
          })
        })
      }
      nameResultsEl?.classList.remove('hidden')
    }, 400)
  })

  // ปิด dropdown เมื่อคลิกออกนอก
  document.addEventListener('click', (e) => {
    if (!regNameEl?.contains(e.target) && !nameResultsEl?.contains(e.target)) {
      nameResultsEl?.classList.add('hidden')
    }
  })

  // Request code modal
  const modalRc = document.getElementById('modal-request-code')
  document.getElementById('btn-request-code')?.addEventListener('click', () => {
    modalRc?.classList.remove('hidden')
  })
  document.getElementById('btn-cancel-rc')?.addEventListener('click', () => {
    modalRc?.classList.add('hidden')
    document.getElementById('rc-msg')?.classList.add('hidden')
    document.getElementById('rc-prefix-msg')?.classList.add('hidden')
  })
  modalRc?.addEventListener('click', (e) => {
    if (e.target === modalRc) modalRc.classList.add('hidden')
  })
  document.getElementById('request-code-form')?.addEventListener('submit', handleRequestCode)

  // Radio button style toggle (สามัญ/ศาสนา)
  document.querySelectorAll('[name="rc-category"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const isSaman = document.querySelector('[name="rc-category"][value="สามัญ"]').checked
      document.getElementById('rc-opt-saman')?.classList.toggle('border-indigo-400', isSaman)
      document.getElementById('rc-opt-saman')?.classList.toggle('bg-indigo-50', isSaman)
      document.getElementById('rc-opt-saman')?.classList.toggle('border-gray-200', !isSaman)
      document.getElementById('rc-opt-sasana')?.classList.toggle('border-indigo-400', !isSaman)
      document.getElementById('rc-opt-sasana')?.classList.toggle('bg-indigo-50', !isSaman)
      document.getElementById('rc-opt-sasana')?.classList.toggle('border-gray-200', isSaman)
    })
  })

  // Toggle login ↔ register
  const loginCard    = document.querySelector('.login-card:not(#register-card)')
  const registerCard = document.getElementById('register-card')
  document.getElementById('btn-show-register')?.addEventListener('click', () => {
    loginCard?.classList.add('hidden')
    registerCard?.classList.remove('hidden')
  })
  document.getElementById('btn-show-login')?.addEventListener('click', () => {
    registerCard?.classList.add('hidden')
    loginCard?.classList.remove('hidden')
  })

  // Toggle password visibility
  document.getElementById('toggle-password')?.addEventListener('click', () => {
    const input = document.getElementById('password')
    const icon  = document.getElementById('eye-icon')
    if (input.type === 'password') {
      input.type = 'text'; icon.textContent = '🙈'
    } else {
      input.type = 'password'; icon.textContent = '👁️'
    }
  })

  // ─── Forgot Password / Reset Password logic ───
  const show = (id) => document.getElementById(id)?.classList.remove('hidden')
  const hide = (id) => document.getElementById(id)?.classList.add('hidden')
  
  function showMsg(elId, text, type) {
    const el = document.getElementById(elId)
    if (!el) return
    el.className = `text-xs text-center py-2 rounded-lg ${
      type === 'error' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-700'
    }`
    el.textContent = text
    el.classList.remove('hidden')
  }

  document.getElementById('btn-forgot-pw')?.addEventListener('click', () => {
    show('modal-forgot-pw')
    hide('forgot-pw-msg')
  })

  document.getElementById('forgot-pw-close')?.addEventListener('click', () => hide('modal-forgot-pw'))

  document.getElementById('forgot-pw-form')?.addEventListener('submit', async (e) => {
    e.preventDefault()
    const btn = document.getElementById('btn-submit-forgot')
    const email = document.getElementById('forgot-email').value.trim()

    btn.disabled = true; btn.textContent = 'กำลังส่งคำขอ...'
    hide('forgot-pw-msg')

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + window.location.pathname
      })
      if (error) throw error

      showMsg('forgot-pw-msg', 'ส่งลิงก์ตั้งรหัสผ่านใหม่ไปยังอีเมลของคุณสำเร็จแล้ว กรุณาเช็คกล่องข้อความ!', 'success')
      setTimeout(() => hide('modal-forgot-pw'), 4000)

    } catch (err) {
      showMsg('forgot-pw-msg', err.message || 'ขอลิงก์รีเซ็ตไม่สำเร็จ', 'error')
    } finally {
      btn.disabled = false; btn.textContent = 'ขอลิงก์รีเซ็ตรหัสผ่าน'
    }
  })

  // ดักจับเหตุการณ์ PASSWORD_RECOVERY
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      show('modal-reset-pw')
      hide('reset-pw-msg')
    }
  })

  document.getElementById('reset-pw-form')?.addEventListener('submit', async (e) => {
    e.preventDefault()
    const btn = document.getElementById('btn-submit-reset')
    const pw = document.getElementById('reset-pw-new').value
    const pw2 = document.getElementById('reset-pw-confirm').value

    if (pw.length < 6) {
      showMsg('reset-pw-msg', 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร', 'error'); return
    }
    if (pw !== pw2) {
      showMsg('reset-pw-msg', 'รหัสผ่านทั้งสองช่องไม่ตรงกัน', 'error'); return
    }

    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    hide('reset-pw-msg')

    try {
      const { error } = await supabase.auth.updateUser({ password: pw })
      if (error) throw error

      showMsg('reset-pw-msg', 'เปลี่ยนรหัสผ่านสำเร็จแล้ว! กำลังเข้าสู่ระบบ...', 'success')

      // เช็คบทบาทเพื่อเปลี่ยนหน้าแดชบอร์ดตามสิทธิ์
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single()

        setTimeout(() => {
          if (profile?.role === 'admin') window.location.href = 'dashboard.html'
          else window.location.href = 'teacher.html'
        }, 1500)
      } else {
        setTimeout(() => { window.location.href = 'index.html' }, 1500)
      }

    } catch (err) {
      showMsg('reset-pw-msg', err.message || 'บันทึกรหัสผ่านไม่สำเร็จ', 'error')
      btn.disabled = false; btn.textContent = 'บันทึกรหัสผ่านใหม่'
    }
  })
})
