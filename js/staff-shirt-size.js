import { supabase } from './supabase.js'

const PW_KEY = 'staff_shirt_size_pw'
const root = document.getElementById('staff-shirt-root')

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

async function fetchOptions(password) {
  const { data, error } = await supabase.rpc('get_personnel_shirt_size_options', { p_password: password })
  if (error) throw error
  return data
}

function renderGate(onSuccess) {
  root.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">ขอรหัสผ่านได้จากฝ่ายที่รับผิดชอบเรื่องเสื้อกีฬาสี</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าแจ้งไซซ์เสื้อ</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`
  const input = root.querySelector('#gate-password')
  const errEl = root.querySelector('#gate-error')
  const submit = async () => {
    const pw = input.value.trim()
    if (!pw) return
    root.querySelector('#gate-submit').disabled = true
    try {
      const data = await fetchOptions(pw)
      sessionStorage.setItem(PW_KEY, pw)
      onSuccess(pw, data)
    } catch (e) {
      errEl.classList.remove('hidden')
      root.querySelector('#gate-submit').disabled = false
    }
  }
  root.querySelector('#gate-submit').onclick = submit
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submit() })
}

function renderForm(password, options) {
  const sizes = options?.allowed_sizes || []
  let gender = null
  root.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
      <div>
        <label class="block text-xs font-bold text-slate-600 mb-1.5">ชื่อ-นามสกุล</label>
        <input id="staff-name" type="text" placeholder="เช่น สมชาย ใจดี" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm">
        <p class="text-[10.5px] text-slate-400 mt-1">พิมพ์ชื่อเดิมอีกครั้งได้ถ้าต้องการแก้ไขไซซ์ที่เคยแจ้งไว้</p>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-600 mb-1.5">เพศ</label>
        <div class="grid grid-cols-2 gap-2">
          <button type="button" data-gender="M" class="py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-500">👦 ชาย</button>
          <button type="button" data-gender="W" class="py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-500">👧 หญิง</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-600 mb-1.5">ไซซ์เสื้อ</label>
        <select id="staff-size" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm bg-white">
          <option value="">-- เลือกไซซ์ --</option>
          ${sizes.map(s => `<option value="${esc(s)}">${esc(s)}</option>`).join('')}
        </select>
      </div>
      <div id="staff-feedback"></div>
      <button id="staff-submit" class="w-full py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm">✅ แจ้งไซซ์เสื้อ</button>
    </div>`

  const feedback = (ok, text) => {
    root.querySelector('#staff-feedback').innerHTML = `<div class="rounded-xl px-3 py-2.5 text-xs font-semibold ${ok ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}">${esc(text)}</div>`
  }

  root.querySelectorAll('[data-gender]').forEach(b => b.onclick = () => {
    gender = b.dataset.gender
    root.querySelectorAll('[data-gender]').forEach(btn => {
      const active = btn.dataset.gender === gender
      btn.className = `py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${active ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-slate-200 text-slate-500'}`
    })
  })

  root.querySelector('#staff-submit').onclick = async () => {
    const name = root.querySelector('#staff-name').value.trim()
    const size = root.querySelector('#staff-size').value
    if (!name) { feedback(false, 'กรุณากรอกชื่อ-นามสกุล'); return }
    if (!gender) { feedback(false, 'กรุณาเลือกเพศ'); return }
    if (!size) { feedback(false, 'กรุณาเลือกไซซ์เสื้อ'); return }
    const btn = root.querySelector('#staff-submit')
    btn.disabled = true
    try {
      await supabase.rpc('submit_personnel_shirt_size', { p_password: password, p_full_name: name, p_gender: gender, p_size: size }).then(r => { if (r.error) throw r.error })
      renderSuccess(name, size)
    } catch (e) {
      feedback(false, e?.message || 'บันทึกไม่สำเร็จ กรุณาลองใหม่')
      btn.disabled = false
    }
  }
}

function renderSuccess(name, size) {
  root.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center space-y-3">
      <div class="text-5xl">✅</div>
      <h2 class="font-bold text-slate-800">แจ้งไซซ์เสื้อเรียบร้อยแล้ว</h2>
      <p class="text-sm text-slate-600">${esc(name)} — ไซซ์ <b class="text-pink-600">${esc(size)}</b></p>
      <button id="staff-again" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm mt-2">👤 แจ้งไซซ์ให้อีกคน</button>
    </div>`
  root.querySelector('#staff-again').onclick = () => start()
}

async function start() {
  const savedPw = sessionStorage.getItem(PW_KEY)
  if (savedPw) {
    try {
      const data = await fetchOptions(savedPw)
      renderForm(savedPw, data)
      return
    } catch (e) {
      sessionStorage.removeItem(PW_KEY)
    }
  }
  renderGate((pw, data) => renderForm(pw, data))
}

start()
