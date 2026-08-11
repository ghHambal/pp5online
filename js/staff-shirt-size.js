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

async function fetchPersonnelList(password) {
  const { data, error } = await supabase.rpc('list_personnel_shirt_requests', { p_password: password })
  if (error) throw error
  return data || []
}

function renderGate(onSuccess) {
  root.className = 'max-w-md mx-auto'
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
  root.className = 'max-w-md mx-auto'
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
  root.className = 'max-w-md mx-auto'
  root.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center space-y-3">
      <div class="text-5xl">✅</div>
      <h2 class="font-bold text-slate-800">แจ้งไซซ์เสื้อเรียบร้อยแล้ว</h2>
      <p class="text-sm text-slate-600">${esc(name)} — ไซซ์ <b class="text-pink-600">${esc(size)}</b></p>
      <button id="staff-again" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm mt-2">👤 แจ้งไซซ์ให้อีกคน</button>
    </div>`
  root.querySelector('#staff-again').onclick = () => renderForm(password, options)
}

// แท็บ "ดู/แก้ไข/ลบข้อมูลที่เคยแจ้ง" — โชว์รายชื่อบุคลากรที่แจ้งไว้แล้วทั้งหมด มีช่องค้นหากรอง
// (ชื่อ/ไซซ์/เพศ) แทนการพิมพ์ชื่อค้นหาทีละคนแบบเดิม — ไม่มีระบบล็อกอิน หน้านี้กันด้วยรหัสผ่านร่วม
// เท่านั้น (เหมือนหน้ามอนิเตอร์อื่นๆ ในระบบ) แก้ไข/ลบทำได้จากปุ่มในแต่ละแถวเลย
function renderLookup(password, options) {
  root.className = 'max-w-3xl mx-auto'
  root.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      ${tabBarHtml('lookup')}
      <input id="staff-search" type="text" placeholder="🔍 ค้นหาชื่อ/ไซซ์/เพศ..." class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm">
      <p id="staff-list-status" class="text-xs text-slate-400"></p>
      <div id="staff-list-wrap" class="overflow-x-auto"></div>
    </div>`

  wireTabs(password, options)

  const statusEl = root.querySelector('#staff-list-status')
  const listWrap = root.querySelector('#staff-list-wrap')
  const sizes = options?.sizes || []
  let records = []
  let query = ''
  let openEditFor = null

  const rowHtml = r => {
    const genderLabel = r.gender === 'W' ? '👧 หญิง' : '👦 ชาย'
    const updatedLabel = r.updated_at ? new Date(r.updated_at).toLocaleDateString('th-TH', { dateStyle: 'medium' }) : '—'
    const isEditing = openEditFor === r.full_name
    return `
      <tr class="border-b border-slate-100">
        <td class="py-2 pr-2">${esc(r.full_name)}</td>
        <td class="py-2 px-2 text-center whitespace-nowrap">${genderLabel}</td>
        <td class="py-2 px-2 text-center"><span class="px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold text-xs">${esc(r.size)}</span></td>
        <td class="py-2 px-2 text-center text-xs text-slate-400 whitespace-nowrap">${esc(updatedLabel)}</td>
        <td class="py-2 pl-2 text-right whitespace-nowrap">
          <button type="button" data-edit="${esc(r.full_name)}" class="px-2 py-1 rounded-lg ${isEditing ? 'bg-slate-800 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'} text-xs font-bold">✏️</button>
          <button type="button" data-delete="${esc(r.full_name)}" class="px-2 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold ml-1">🗑️</button>
        </td>
      </tr>
      ${isEditing ? `
      <tr class="bg-slate-50">
        <td colspan="5" class="p-3">
          <div class="flex flex-wrap items-end gap-2">
            <div class="flex-1 min-w-[160px]">
              <label class="block text-[10px] font-bold text-slate-500 mb-1">ไซซ์ใหม่ของ ${esc(r.full_name)}</label>
              <select data-edit-size class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm bg-white">
                ${sizes.map(s => `<option value="${esc(s.code)}" ${s.code === r.size ? 'selected' : ''}>${esc(s.code)} (รอบอก ${esc(s.chest)} นิ้ว)</option>`).join('')}
              </select>
            </div>
            <button type="button" data-save-edit="${esc(r.full_name)}" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">💾 บันทึก</button>
            <button type="button" data-cancel-edit class="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-600 text-xs font-bold">ยกเลิก</button>
          </div>
          <div data-edit-feedback class="mt-2"></div>
        </td>
      </tr>` : ''}`
  }

  const renderTable = () => {
    const q = query.trim().toLowerCase()
    const filtered = q ? records.filter(r =>
      r.full_name.toLowerCase().includes(q) ||
      r.size.toLowerCase().includes(q) ||
      (r.gender === 'W' ? 'หญิง' : 'ชาย').includes(q)
    ) : records
    statusEl.textContent = `บุคลากรที่แจ้งไซซ์แล้วทั้งหมด ${records.length} คน${q ? ` — ตรงกับคำค้นหา ${filtered.length} คน` : ''}`
    if (!filtered.length) {
      listWrap.innerHTML = `<p class="text-sm text-slate-400 text-center py-8">${records.length ? 'ไม่พบข้อมูลตามคำค้นหา' : 'ยังไม่มีบุคลากรแจ้งไซซ์เสื้อ'}</p>`
      return
    }
    listWrap.innerHTML = `
      <table class="w-full text-sm">
        <thead><tr class="text-left text-slate-400 border-b border-slate-200">
          <th class="py-2 pr-2 font-bold">ชื่อ-นามสกุล</th>
          <th class="py-2 px-2 font-bold text-center">เพศ</th>
          <th class="py-2 px-2 font-bold text-center">ไซซ์</th>
          <th class="py-2 px-2 font-bold text-center">วันที่แจ้งล่าสุด</th>
          <th class="py-2 pl-2 font-bold text-right">จัดการ</th>
        </tr></thead>
        <tbody>${filtered.map(rowHtml).join('')}</tbody>
      </table>`

    listWrap.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => {
      openEditFor = openEditFor === b.dataset.edit ? null : b.dataset.edit
      renderTable()
    })
    listWrap.querySelectorAll('[data-cancel-edit]').forEach(b => b.onclick = () => { openEditFor = null; renderTable() })
    listWrap.querySelectorAll('[data-save-edit]').forEach(b => b.onclick = async () => {
      const name = b.dataset.saveEdit
      const record = records.find(r => r.full_name === name)
      const row = b.closest('tr')
      const newSize = row.querySelector('[data-edit-size]').value
      const fb = row.querySelector('[data-edit-feedback]')
      b.disabled = true
      try {
        await supabase.rpc('submit_personnel_shirt_size', { p_password: password, p_full_name: name, p_gender: record.gender, p_size: newSize }).then(r => { if (r.error) throw r.error })
        record.size = newSize
        record.updated_at = new Date().toISOString()
        openEditFor = null
        renderTable()
      } catch (e) {
        fb.innerHTML = `<div class="rounded-xl px-3 py-2 text-xs font-semibold bg-red-50 text-red-600 border border-red-200">${esc(e?.message || 'บันทึกไม่สำเร็จ')}</div>`
        b.disabled = false
      }
    })
    listWrap.querySelectorAll('[data-delete]').forEach(b => b.onclick = () => {
      const name = b.dataset.delete
      if (!confirm(`ต้องการลบข้อมูลไซซ์เสื้อของ "${name}" ใช่หรือไม่? การลบไม่สามารถย้อนคืนได้`)) return
      b.disabled = true
      supabase.rpc('delete_personnel_shirt_request', { p_password: password, p_full_name: name })
        .then(r => {
          if (r.error) throw r.error
          records = records.filter(r => r.full_name !== name)
          renderTable()
        })
        .catch(e => {
          b.disabled = false
          alert(e?.message || 'ลบไม่สำเร็จ กรุณาลองใหม่')
        })
    })
  }

  root.querySelector('#staff-search').addEventListener('input', e => { query = e.target.value; renderTable() })

  statusEl.textContent = 'กำลังโหลดข้อมูล...'
  fetchPersonnelList(password)
    .then(list => { records = list; renderTable() })
    .catch(e => { statusEl.textContent = ''; listWrap.innerHTML = `<div class="rounded-xl px-3 py-2.5 text-xs font-semibold bg-red-50 text-red-600 border border-red-200">โหลดข้อมูลไม่สำเร็จ: ${esc(e?.message || '')}</div>` })
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
