import { supabase } from './supabase.js'
import { showToast, setButtonLoading, showPageLoader } from './ui.js'

// ─── Check session on page load ───────────────────────────────────────────────
async function checkSession() {
  showPageLoader(true)
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    // เช็ค role ก่อน redirect — ครูไปหน้าครู, แอดมินไปหน้าแอดมิน
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single()
    window.location.href = profile?.role === 'admin' ? 'dashboard.html' : 'teacher.html'
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
    if (profile?.role === 'admin') {
      window.location.href = 'dashboard.html'
    } else {
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

  const username = normalizeUsername(raw)
  const codeList = teacherCodeCandidates(raw)
  if (!codeList.length && !/^[a-z0-9._-]{3,32}$/.test(username)) {
    throw new Error('ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง')
  }

  const { data, error } = await supabase.rpc('resolve_teacher_login_email', {
    p_identifier: raw,
  })
  if (error) throw error

  if (!data) {
    throw new Error('บัญชีครูนี้ยังไม่มีอีเมลสำหรับเข้าสู่ระบบ กรุณาเข้าสู่ระบบด้วยอีเมลเดิมหรือติดต่อผู้ดูแล')
  }
  return data
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

// ─── Search teacher by name (anon) ───────────────────────────────────────────
async function searchTeacherByName(query) {
  if (!query || query.length < 2) return []
  const { data } = await supabase
    .from('teachers')
    .select('id, teacher_code, full_name, dept, category')
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
    .select('id, teacher_code, full_name, dept, category')
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
      .update({ profile_id: data.user.id, login_email: email })
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
  checkSession()
  document.getElementById('login-form')?.addEventListener('submit', handleLogin)
  document.getElementById('register-form')?.addEventListener('submit', handleRegister)

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
      } else if (code.length >= 2) {
        previewEl?.classList.add('hidden')
        codeMsgEl?.classList.remove('hidden')
        codeMsgEl.textContent = 'ไม่พบรหัสครูนี้ในระบบ'
        regTeacherEl.value = ''
      }
    }, 500)
  })

  // ─── Name search ──────────────────────────────────────────────────────────
  const nameSearchEl  = document.getElementById('reg-name-search')
  const nameResultsEl = document.getElementById('reg-name-results')
  let _nameTimer = null

  nameSearchEl?.addEventListener('input', () => {
    clearTimeout(_nameTimer)
    const q = nameSearchEl.value.trim()
    if (!q) { nameResultsEl.classList.add('hidden'); return }

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
            class="name-result-btn w-full text-left px-4 py-3
                   hover:bg-indigo-50 transition
                   border-b border-gray-100 last:border-0">
            <div class="text-sm font-medium text-gray-800">${t.full_name}</div>
            <div class="text-xs text-gray-400 mt-0.5">
              รหัส ${t.teacher_code}
              ${t.dept ? '· ' + t.dept : ''}
              ${t.category ? '· ' + t.category : ''}
            </div>
          </button>`).join('')

        nameResultsEl.querySelectorAll('.name-result-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            regCodeEl.value = btn.dataset.code
            regCodeEl.dispatchEvent(new Event('input'))
            nameSearchEl.value = ''
            nameResultsEl.classList.add('hidden')
          })
        })
      }
      nameResultsEl.classList.remove('hidden')
    }, 400)
  })

  // ปิด dropdown เมื่อคลิกออกนอก
  document.addEventListener('click', (e) => {
    if (!nameSearchEl?.contains(e.target) && !nameResultsEl?.contains(e.target)) {
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
})
