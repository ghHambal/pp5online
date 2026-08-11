import { supabase } from './supabase.js'

const PW_KEY = 'staff_shirt_size_pw'
const root = document.getElementById('staff-shirt-root')

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const PREFIX_OPTIONS = ['นาย', 'นาง', 'นางสาว', 'อื่นๆ']

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

// แถบสลับ "แจ้งไซซ์ใหม่" / "ดู-แก้ไข-ลบข้อมูลที่เคยแจ้ง" — โชว์บนสุดทั้งสองหน้า
const tabBarHtml = active => `
  <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1 mb-4 w-full">
    <button type="button" data-shirt-tab="new" class="flex-1 py-2 rounded-lg text-xs font-bold transition-all ${active === 'new' ? 'bg-pink-600 text-white' : 'text-slate-500'}">📝 แจ้งไซซ์ใหม่</button>
    <button type="button" data-shirt-tab="lookup" class="flex-1 py-2 rounded-lg text-xs font-bold transition-all ${active === 'lookup' ? 'bg-pink-600 text-white' : 'text-slate-500'}">🔍 ดู/แก้ไข/ลบข้อมูลที่เคยแจ้ง</button>
  </div>`
function wireTabs(password, options) {
  root.querySelectorAll('[data-shirt-tab]').forEach(b => b.onclick = () => {
    if (b.dataset.shirtTab === 'new') renderForm(password, options)
    else renderLookup(password, options)
  })
}

// ช่องคำนำหน้าชื่อ+ชื่อ-นามสกุล ใช้ร่วมกันทั้งฟอร์มแจ้งใหม่และค้นหาข้อมูลเดิม (ต้องพิมพ์ตรงกันเป๊ะ
// เพราะยืนยันตัวตนด้วยชื่อเต็มที่พิมพ์ ไม่มีระบบล็อกอิน)
const identityFieldsHtml = () => `
  <div>
    <label class="block text-xs font-bold text-slate-600 mb-1.5">คำนำหน้าชื่อ</label>
    <select id="staff-prefix" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm bg-white">
      <option value="">-- เลือกคำนำหน้าชื่อ --</option>
      ${PREFIX_OPTIONS.map(p => `<option value="${esc(p)}">${esc(p)}</option>`).join('')}
    </select>
    <input id="staff-prefix-custom" type="text" placeholder="ระบุคำนำหน้าชื่อ" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm mt-2 hidden">
  </div>
  <div>
    <label class="block text-xs font-bold text-slate-600 mb-1.5">ชื่อ-นามสกุล (ไม่ต้องใส่คำนำหน้าชื่อซ้ำ)</label>
    <input id="staff-name" type="text" placeholder="เช่น สมชาย ใจดี" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm">
  </div>`
function wireIdentityFields() {
  root.querySelector('#staff-prefix').addEventListener('change', e => {
    root.querySelector('#staff-prefix-custom').classList.toggle('hidden', e.target.value !== 'อื่นๆ')
  })
}
function readIdentityFields() {
  const prefixSelected = root.querySelector('#staff-prefix').value
  const prefix = prefixSelected === 'อื่นๆ' ? root.querySelector('#staff-prefix-custom').value.trim() : prefixSelected
  const name = root.querySelector('#staff-name').value.trim()
  return { prefix, name, fullName: prefix && name ? `${prefix}${name}` : '' }
}

function renderForm(password, options) {
  const sizes = options?.sizes || []
  let gender = null
  root.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
      ${tabBarHtml('new')}
      ${identityFieldsHtml()}
      <p class="text-[10.5px] text-slate-400 -mt-3">พิมพ์คำนำหน้าชื่อ+ชื่อเดิมอีกครั้งได้ถ้าต้องการแก้ไขไซซ์ที่เคยแจ้งไว้</p>
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
          ${sizes.map(s => `<option value="${esc(s.code)}">${esc(s.code)} (รอบอก ${esc(s.chest)} นิ้ว)</option>`).join('')}
        </select>
      </div>
      <div id="staff-feedback"></div>
      <button id="staff-submit" class="w-full py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm">✅ แจ้งไซซ์เสื้อ</button>
    </div>`

  wireTabs(password, options)
  wireIdentityFields()

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
    const { prefix, fullName } = readIdentityFields()
    const size = root.querySelector('#staff-size').value
    if (!prefix) { feedback(false, 'กรุณาเลือก (หรือระบุ) คำนำหน้าชื่อ'); return }
    if (!fullName) { feedback(false, 'กรุณากรอกชื่อ-นามสกุล'); return }
    if (!gender) { feedback(false, 'กรุณาเลือกเพศ'); return }
    if (!size) { feedback(false, 'กรุณาเลือกไซซ์เสื้อ'); return }
    const btn = root.querySelector('#staff-submit')
    btn.disabled = true
    try {
      await supabase.rpc('submit_personnel_shirt_size', { p_password: password, p_full_name: fullName, p_gender: gender, p_size: size }).then(r => { if (r.error) throw r.error })
      renderSuccess(password, options, fullName, size)
    } catch (e) {
      feedback(false, e?.message || 'บันทึกไม่สำเร็จ กรุณาลองใหม่')
      btn.disabled = false
    }
  }
}

function renderSuccess(password, options, name, size) {
  root.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center space-y-3">
      <div class="text-5xl">✅</div>
      <h2 class="font-bold text-slate-800">แจ้งไซซ์เสื้อเรียบร้อยแล้ว</h2>
      <p class="text-sm text-slate-600">${esc(name)} — ไซซ์ <b class="text-pink-600">${esc(size)}</b></p>
      <button id="staff-again" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm mt-2">👤 แจ้งไซซ์ให้อีกคน</button>
    </div>`
  root.querySelector('#staff-again').onclick = () => renderForm(password, options)
}

// แท็บ "ดู/แก้ไข/ลบข้อมูลที่เคยแจ้ง" — ไม่มีระบบล็อกอิน ยืนยันตัวตนด้วยการพิมพ์คำนำหน้า+ชื่อให้ตรง
// กับตอนแจ้งครั้งแรกเป๊ะ (unique key ของระบบ) ผู้ใช้ยอมรับความเสี่ยงนี้ไว้แล้วตอนออกแบบหน้านี้
function renderLookup(password, options) {
  root.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
      ${tabBarHtml('lookup')}
      ${identityFieldsHtml()}
      <p class="text-[10.5px] text-slate-400 -mt-3">พิมพ์คำนำหน้าชื่อ+ชื่อ-นามสกุลให้ตรงกับตอนแจ้งไซซ์ครั้งแรกเป๊ะ</p>
      <div id="staff-lookup-feedback"></div>
      <button id="staff-lookup-btn" class="w-full py-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm">🔍 ค้นหาข้อมูล</button>
      <div id="staff-lookup-result"></div>
    </div>`

  wireTabs(password, options)
  wireIdentityFields()

  const feedback = (ok, text) => {
    root.querySelector('#staff-lookup-feedback').innerHTML = text ? `<div class="rounded-xl px-3 py-2.5 text-xs font-semibold ${ok ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}">${esc(text)}</div>` : ''
  }

  root.querySelector('#staff-lookup-btn').onclick = async () => {
    const { fullName } = readIdentityFields()
    root.querySelector('#staff-lookup-result').innerHTML = ''
    if (!fullName) { feedback(false, 'กรุณาเลือกคำนำหน้าชื่อและกรอกชื่อ-นามสกุลก่อนค้นหา'); return }
    const btn = root.querySelector('#staff-lookup-btn')
    btn.disabled = true
    try {
      const { data, error } = await supabase.rpc('get_personnel_shirt_request', { p_password: password, p_full_name: fullName })
      if (error) throw error
      if (!data) { feedback(false, `ไม่พบข้อมูลที่แจ้งไว้ด้วยชื่อ "${fullName}" — ตรวจสอบคำนำหน้า/การสะกดชื่ออีกครั้ง`); return }
      feedback(true, '')
      renderLookupResult(password, options, data)
    } catch (e) {
      feedback(false, e?.message || 'ค้นหาไม่สำเร็จ กรุณาลองใหม่')
    } finally {
      btn.disabled = false
    }
  }
}

function renderLookupResult(password, options, record) {
  const sizes = options?.sizes || []
  const genderLabel = record.gender === 'W' ? '👧 หญิง' : '👦 ชาย'
  const updatedLabel = record.updated_at ? new Date(record.updated_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : '—'
  const wrap = root.querySelector('#staff-lookup-result')
  wrap.innerHTML = `
    <div class="rounded-2xl border-2 border-pink-200 bg-pink-50/50 p-4 space-y-3">
      <div>
        <p class="font-bold text-slate-800">${esc(record.full_name)}</p>
        <p class="text-xs text-slate-500 mt-0.5">${genderLabel} · แจ้งไว้ล่าสุด ${esc(updatedLabel)}</p>
      </div>
      <p class="text-2xl font-black text-pink-600">ไซซ์ ${esc(record.size)}</p>
      <div id="staff-edit-area"></div>
      <div class="flex gap-2">
        <button type="button" id="staff-lookup-edit" class="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold">✏️ แก้ไขไซซ์</button>
        <button type="button" id="staff-lookup-delete" class="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold">🗑️ ลบข้อมูลนี้</button>
      </div>
    </div>`

  wrap.querySelector('#staff-lookup-edit').onclick = () => {
    const editArea = wrap.querySelector('#staff-edit-area')
    editArea.innerHTML = `
      <div class="space-y-2 pt-2 border-t border-pink-200">
        <label class="block text-xs font-bold text-slate-600">เลือกไซซ์ใหม่</label>
        <select id="staff-edit-size" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm bg-white">
          ${sizes.map(s => `<option value="${esc(s.code)}" ${s.code === record.size ? 'selected' : ''}>${esc(s.code)} (รอบอก ${esc(s.chest)} นิ้ว)</option>`).join('')}
        </select>
        <div id="staff-edit-feedback"></div>
        <button type="button" id="staff-edit-save" class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">💾 บันทึกไซซ์ใหม่</button>
      </div>`
    wrap.querySelector('#staff-lookup-edit').disabled = true
    wrap.querySelector('#staff-edit-save').onclick = async () => {
      const newSize = wrap.querySelector('#staff-edit-size').value
      const efb = wrap.querySelector('#staff-edit-feedback')
      const saveBtn = wrap.querySelector('#staff-edit-save')
      saveBtn.disabled = true
      try {
        await supabase.rpc('submit_personnel_shirt_size', { p_password: password, p_full_name: record.full_name, p_gender: record.gender, p_size: newSize }).then(r => { if (r.error) throw r.error })
        renderLookupResult(password, options, { ...record, size: newSize, updated_at: new Date().toISOString() })
      } catch (e) {
        efb.innerHTML = `<div class="rounded-xl px-3 py-2 text-xs font-semibold bg-red-50 text-red-600 border border-red-200">${esc(e?.message || 'บันทึกไม่สำเร็จ')}</div>`
        saveBtn.disabled = false
      }
    }
  }

  wrap.querySelector('#staff-lookup-delete').onclick = () => {
    if (!confirm(`ต้องการลบข้อมูลไซซ์เสื้อของ "${record.full_name}" ใช่หรือไม่? การลบไม่สามารถย้อนคืนได้`)) return
    const delBtn = wrap.querySelector('#staff-lookup-delete')
    delBtn.disabled = true
    supabase.rpc('delete_personnel_shirt_request', { p_password: password, p_full_name: record.full_name })
      .then(r => {
        if (r.error) throw r.error
        wrap.innerHTML = `<div class="rounded-xl px-3 py-2.5 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">ลบข้อมูลของ "${esc(record.full_name)}" เรียบร้อยแล้ว</div>`
      })
      .catch(e => {
        wrap.querySelector('#staff-lookup-delete').disabled = false
        alert(e?.message || 'ลบไม่สำเร็จ กรุณาลองใหม่')
      })
  }
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
