import { supabase } from './supabase.js'
import {
  getTerangganuAccess, getMyTerangganuContext, saveMyTerangganuRegistration,
  getTerangganuManagerContext, updateTerangganuEvent, assignTerangganuStaff,
  updateMyTerangganuSignature, recordTerangganuPayment, voidTerangganuPayment,
  subscribeTerangganu,
} from './terangganu-api.js'
import { uploadTerangganuSignature, uploadTerangganuDirectorSignature } from './storage.js'
import { blockPullToRefresh } from './anti-pull-refresh.js'

const content = document.getElementById('camp-content')
const nav = document.getElementById('camp-nav')
const tabs = document.getElementById('camp-tabs')
let session = null
let profile = null
let access = null
let ctx = null
let activeTab = 'dashboard'
let channel = null
let refreshTimer = null

const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[c]))
const money = value => Number(value || 0).toLocaleString('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
const thaiDate = value => value ? new Date(value).toLocaleDateString('th-TH', { day:'numeric', month:'short', year:'numeric' }) : '—'
const inputDateTime = value => {
  if (!value) return ''
  const date = new Date(value)
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0,16)
}
const maskPassport = value => {
  const s = String(value || '')
  return s.length < 5 ? '••••' : `${s.slice(0,2)}••••${s.slice(-2)}`
}

function toast(message, type = 'success') {
  const el = document.getElementById('camp-toast')
  el.textContent = message
  el.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-[90vw] px-4 py-2.5 rounded-xl text-white text-sm font-semibold shadow-xl ${type === 'error' ? 'bg-red-600' : type === 'warning' ? 'bg-amber-500' : 'bg-teal-700'}`
  clearTimeout(el._timer)
  el._timer = setTimeout(() => el.classList.add('hidden'), 3500)
}

function modal(html, max = 'max-w-lg') {
  document.getElementById('camp-modal')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'camp-modal'
  wrap.className = 'fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm p-4 flex items-center justify-center'
  wrap.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full ${max} max-h-[92vh] overflow-y-auto">${html}</div>`
  document.body.appendChild(wrap)
  wrap.addEventListener('click', e => { if (e.target === wrap) wrap.remove() })
  wrap.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => wrap.remove()))
  return wrap
}

function errorView(message) {
  nav.classList.add('hidden')
  content.innerHTML = `<div class="max-w-md mx-auto camp-card p-8 text-center mt-12"><div class="text-5xl mb-4">🔒</div><h2 class="font-bold text-gray-800">ไม่สามารถเปิดระบบได้</h2><p class="text-sm text-gray-500 mt-2">${esc(message)}</p></div>`
}

async function init() {
  blockPullToRefresh()
  const auth = await supabase.auth.getSession()
  session = auth.data.session
  if (!session) { window.location.replace('index.html'); return }
  const { data } = await supabase.from('profiles').select('role,is_also_admin').eq('id', session.user.id).single()
  profile = data
  document.getElementById('camp-back').href = profile?.role === 'student' ? 'student.html' : profile?.role === 'admin' ? 'dashboard.html' : 'teacher.html'
  document.getElementById('camp-role').textContent = profile?.role === 'student' ? 'นักเรียน' : profile?.role === 'admin' ? 'ผู้ดูแลระบบ' : 'ครูผู้รับผิดชอบ'
  document.getElementById('camp-role').classList.remove('hidden')
  try {
    access = await getTerangganuAccess()
    if (profile?.role === 'student') await loadStudent()
    else if (access?.is_manager) await loadManager()
    else errorView('บัญชีนี้ยังไม่ได้รับมอบหมายให้ดูแลค่าย TERANGGANU 2026')
  } catch (error) {
    errorView(error.message || 'ระบบยังไม่ได้ติดตั้งฐานข้อมูล')
  }
}

function updateBrand(event) {
  document.getElementById('camp-title').textContent = event?.name || 'ค่ายลูกเสือ TERANGGANU 2026'
  document.title = event?.name || 'ค่ายลูกเสือ TERANGGANU 2026'
  document.getElementById('camp-subtitle').textContent = event?.location || 'ระบบสำรวจข้อมูลและชำระเงิน'
}

function subscribe() {
  if (channel) supabase.removeChannel(channel)
  channel = subscribeTerangganu(access?.event_id, () => {
    clearTimeout(refreshTimer)
    refreshTimer = setTimeout(() => profile?.role === 'student' ? loadStudent(true) : loadManager(true), 500)
  })
}

// ─── Student ────────────────────────────────────────────────────────────────
async function loadStudent(silent = false) {
  if (!access?.visible && !access?.is_manager) {
    errorView('ระบบค่ายยังไม่เปิดให้นักเรียนเข้าใช้งาน')
    return
  }
  if (!silent) content.innerHTML = '<div class="text-center py-20 text-teal-600">กำลังโหลดข้อมูล...</div>'
  ctx = await getMyTerangganuContext()
  updateBrand(ctx.event)
  nav.classList.add('hidden')
  renderStudent()
  subscribe()
}

function paymentCard(type, label, amount) {
  const payment = (ctx.payments || []).find(p => p.installment_type === type && !p.voided_at)
  return `<div class="camp-card p-4 border-l-4 ${payment ? 'border-l-emerald-500' : 'border-l-amber-400'}">
    <div class="flex items-start justify-between gap-3">
      <div><p class="text-xs text-gray-400">${esc(label)}</p><p class="text-2xl font-bold mt-1">฿${money(amount)}</p></div>
      <span class="px-2.5 py-1 rounded-full text-xs font-bold ${payment ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${payment ? 'ชำระแล้ว' : 'ยังไม่ชำระ'}</span>
    </div>
    ${payment ? `<p class="text-xs text-gray-400 mt-3">เลขที่ ${esc(payment.receipt_no)} · ${thaiDate(payment.paid_at)}</p><button data-receipt="${payment.id}" class="camp-btn mt-3 w-full bg-teal-50 text-teal-700 hover:bg-teal-100">🧾 พิมพ์ / บันทึก PDF</button>` : ''}
  </div>`
}

function renderStudent() {
  const e = ctx.event || {}
  const s = ctx.student || {}
  const r = ctx.registration
  const paid = (ctx.payments || []).reduce((sum,p) => sum + Number(p.amount || 0), 0)
  const total = Number(e.deposit_amount || 0) + Number(e.balance_amount || 0)
  const now = Date.now()
  const withinWindow = (!e.form_open_at || now >= new Date(e.form_open_at).getTime()) && (!e.form_close_at || now <= new Date(e.form_close_at).getTime())
  const canEdit = e.form_open && withinWindow
  content.innerHTML = `
    <section class="rounded-3xl bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-600 text-white p-6 shadow-xl mb-5 overflow-hidden relative">
      <div class="absolute -right-8 -top-10 text-9xl opacity-10">⚜️</div>
      <p class="text-teal-100 text-xs">ข้อมูลผู้เข้าร่วม</p><h2 class="text-xl font-bold mt-1">${esc(s.full_name)}</h2>
      <p class="text-sm text-teal-100 mt-1">${esc(s.student_code)} · ${esc(s.main_room || '—')} · ${esc(s.gender || '—')}</p>
      <div class="grid grid-cols-2 gap-3 mt-5">
        <div class="bg-white/10 rounded-2xl p-3"><p class="text-[11px] text-teal-100">ชำระแล้ว</p><p class="text-xl font-bold">฿${money(paid)}</p></div>
        <div class="bg-white/10 rounded-2xl p-3"><p class="text-[11px] text-teal-100">คงเหลือ</p><p class="text-xl font-bold">฿${money(Math.max(0,total-paid))}</p></div>
      </div>
    </section>
    <div class="grid sm:grid-cols-2 gap-4 mb-5">${paymentCard('deposit','ค่ามัดจำ',e.deposit_amount)}${paymentCard('balance','ส่วนที่เหลือ',e.balance_amount)}</div>
    <section class="camp-card p-5 sm:p-7">
      <div class="flex items-start justify-between gap-3 mb-5"><div><h2 class="font-bold text-lg">📝 แบบสำรวจนักเรียน</h2><p class="text-xs text-gray-400 mt-1">${r ? `ส่งข้อมูลแล้ว ${thaiDate(r.updated_at)}` : 'กรอกข้อมูลสำหรับการเดินทางเข้าค่าย'}</p></div><span class="px-2.5 py-1 rounded-full text-xs font-bold ${r ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}">${r ? 'ครบแล้ว' : 'ยังไม่กรอก'}</span></div>
      ${!canEdit ? `<div class="mb-5 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-700">แบบสำรวจปิดรับข้อมูลแล้ว สามารถดูข้อมูลเดิมได้</div>` : ''}
      <form id="student-camp-form" class="grid sm:grid-cols-2 gap-4">
        ${field('nickname','ชื่อเล่น',r?.nickname,'text',true,canEdit)}
        ${field('thai_name','ชื่อภาษาไทย',r?.thai_name || s.full_name,'text',true,canEdit)}
        ${field('english_name','ชื่อภาษาอังกฤษ',r?.english_name,'text',true,canEdit)}
        ${field('passport_number','เลขที่หนังสือเดินทาง',r?.passport_number,'text',true,canEdit)}
        ${field('passport_expiry','วันหมดอายุหนังสือเดินทาง',r?.passport_expiry,'date',true,canEdit)}
        ${field('birth_date','วันเดือนปีเกิด',r?.birth_date,'date',true,canEdit)}
        ${field('nationality','สัญชาติ',r?.nationality || 'ไทย','text',true,canEdit)}
        <label><span class="camp-label">กรุ๊ปเลือด *</span><select name="blood_group" class="camp-input" ${canEdit?'':'disabled'}>${['ไม่ทราบ','A','B','AB','O'].map(v=>`<option ${r?.blood_group===v?'selected':''}>${v}</option>`).join('')}</select></label>
        ${field('phone','หมายเลขโทรศัพท์',r?.phone,'tel',true,canEdit)}
        <label><span class="camp-label">ไซซ์เสื้อ *</span><select name="shirt_size" class="camp-input" ${canEdit?'':'disabled'}><option value="">เลือกไซซ์</option>${['XS','S','M','L','XL','2XL','3XL','4XL','อื่น ๆ'].map(v=>`<option ${r?.shirt_size===v?'selected':''}>${v}</option>`).join('')}</select></label>
        <label class="sm:col-span-2"><span class="camp-label">ที่อยู่ปัจจุบัน *</span><textarea name="current_address" rows="3" class="camp-input" required ${canEdit?'':'disabled'}>${esc(r?.current_address||'')}</textarea></label>
        <label class="sm:col-span-2"><span class="camp-label">โรคประจำตัว</span><textarea name="medical_conditions" rows="2" class="camp-input" ${canEdit?'':'disabled'}>${esc(r?.medical_conditions||'ไม่มี')}</textarea></label>
        ${canEdit ? '<button class="sm:col-span-2 camp-btn bg-teal-700 hover:bg-teal-800 text-white py-3" type="submit">💾 บันทึกแบบสำรวจ</button>' : ''}
      </form>
    </section>`
  content.querySelector('#student-camp-form')?.addEventListener('submit', saveStudentForm)
  content.querySelectorAll('[data-receipt]').forEach(btn => btn.addEventListener('click', () => openReceipt(btn.dataset.receipt)))
}

function field(name,label,value,type='text',required=false,enabled=true) {
  return `<label><span class="camp-label">${esc(label)}${required?' *':''}</span><input name="${name}" type="${type}" value="${esc(value||'')}" class="camp-input" ${required?'required':''} ${enabled?'':'disabled'} /></label>`
}

async function saveStudentForm(event) {
  event.preventDefault()
  const btn = event.submitter
  btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
  try {
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries())
    await saveMyTerangganuRegistration(payload)
    toast('บันทึกแบบสำรวจเรียบร้อยแล้ว')
    await loadStudent(true)
  } catch (error) { toast(error.message || 'บันทึกไม่สำเร็จ','error'); btn.disabled=false; btn.textContent='💾 บันทึกแบบสำรวจ' }
}

// ─── Manager ────────────────────────────────────────────────────────────────
const MANAGER_TABS = [
  ['dashboard','📊','ภาพรวม'],['registrations','📝','แบบสำรวจ'],['payments','💰','รับชำระ'],['settings','⚙️','ตั้งค่า'],['staff','👩‍🏫','ผู้รับผิดชอบ'],
]

async function loadManager(silent = false) {
  if (!silent) content.innerHTML = '<div class="text-center py-20 text-teal-600">กำลังโหลดข้อมูล...</div>'
  ctx = await getTerangganuManagerContext()
  access = ctx.access || access
  updateBrand(ctx.event)
  nav.classList.remove('hidden')
  const allowedTab = id => id === 'staff' ? access.is_admin : id === 'settings' ? access.can_settings : id === 'payments' ? access.can_payments : true
  const availableTabs = MANAGER_TABS.filter(([id]) => allowedTab(id))
  if (!availableTabs.some(([id]) => id === activeTab)) activeTab = 'dashboard'
  tabs.innerHTML = availableTabs.map(([id,icon,label]) => `<button data-tab="${id}" class="camp-tab camp-btn whitespace-nowrap ${activeTab===id?'active':'bg-gray-50 text-gray-600'}">${icon} ${label}</button>`).join('')
  tabs.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{activeTab=btn.dataset.tab;renderManager()}))
  renderManager()
  subscribe()
}

function maps() {
  const students = new Map((ctx.students||[]).map(s=>[Number(s.id),s]))
  const regs = new Map((ctx.registrations||[]).map(r=>[Number(r.student_id),r]))
  const activePayments = (ctx.payments||[]).filter(p=>!p.voided_at)
  const payments = new Map()
  activePayments.forEach(p=>{ if(!payments.has(Number(p.student_id))) payments.set(Number(p.student_id),{}); payments.get(Number(p.student_id))[p.installment_type]=p })
  return { students,regs,payments,activePayments }
}

function renderManager() {
  tabs.querySelectorAll('[data-tab]').forEach(btn=>btn.classList.toggle('active',btn.dataset.tab===activeTab))
  if(activeTab==='dashboard') renderDashboard()
  else if(activeTab==='registrations') renderRegistrations()
  else if(activeTab==='payments') renderPayments()
  else if(activeTab==='settings') renderSettings()
  else if(activeTab==='staff') renderStaff()
}

function stat(label,value,icon,color='teal') {
  const bg = { teal:'bg-teal-100', amber:'bg-amber-100', emerald:'bg-emerald-100', blue:'bg-blue-100' }[color] || 'bg-teal-100'
  return `<div class="camp-card p-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl ${bg} flex items-center justify-center text-xl">${icon}</div><div><p class="text-xs text-gray-400">${label}</p><p class="text-2xl font-bold">${value}</p></div></div></div>`
}

function renderDashboard() {
  const {regs,activePayments}=maps(), e=ctx.event||{}
  const deposits=activePayments.filter(p=>p.installment_type==='deposit'), balances=activePayments.filter(p=>p.installment_type==='balance')
  const revenue=activePayments.reduce((s,p)=>s+Number(p.amount||0),0)
  content.innerHTML=`<div class="flex flex-wrap items-end justify-between gap-3 mb-5"><div><p class="text-xs text-teal-600 font-bold">แดชบอร์ดผู้รับผิดชอบ</p><h2 class="text-2xl font-bold">${esc(e.name)}</h2></div><button id="refresh-manager" class="camp-btn bg-white border border-teal-200 text-teal-700">↻ โหลดข้อมูลใหม่</button></div>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">${stat('ส่งแบบสำรวจ',regs.size,'📝')}${stat('ชำระมัดจำ',deposits.length,'1️⃣','amber')}${stat('ชำระครบ',balances.length,'✅','emerald')}${stat('ยอดรับรวม',`฿${money(revenue)}`,'💰','blue')}</div>
  <div class="grid lg:grid-cols-2 gap-4"><section class="camp-card p-5"><h3 class="font-bold">สถานะระบบนักเรียน</h3><div class="mt-4 flex items-center justify-between"><span class="text-sm text-gray-500">ปุ่มหน้าภาพรวม</span><b class="${e.visible_to_students?'text-emerald-600':'text-gray-400'}">${e.visible_to_students?'เปิดใช้งาน':'ปิดใช้งาน'}</b></div><div class="mt-3 flex items-center justify-between"><span class="text-sm text-gray-500">รับแบบสำรวจ</span><b class="${e.form_open?'text-emerald-600':'text-gray-400'}">${e.form_open?'เปิดรับข้อมูล':'ปิดรับข้อมูล'}</b></div></section>
  <section class="camp-card p-5"><h3 class="font-bold">ค่าใช้จ่าย</h3><div class="mt-4 flex justify-between text-sm"><span>ค่ามัดจำ</span><b>฿${money(e.deposit_amount)}</b></div><div class="mt-3 flex justify-between text-sm"><span>ส่วนที่เหลือ</span><b>฿${money(e.balance_amount)}</b></div><div class="mt-4 pt-3 border-t flex justify-between"><span class="font-bold">รวมต่อคน</span><b class="text-teal-700">฿${money(Number(e.deposit_amount)+Number(e.balance_amount))}</b></div></section></div>`
  document.getElementById('refresh-manager').addEventListener('click',()=>loadManager())
}

function renderRegistrations() {
  const {students,regs,payments}=maps()
  const rows=[...regs.values()].map(r=>({r,s:students.get(Number(r.student_id)),p:payments.get(Number(r.student_id))||{}}))
  content.innerHTML=`<div class="flex flex-wrap gap-3 justify-between items-center mb-4"><div><h2 class="text-xl font-bold">แบบสำรวจนักเรียน</h2><p class="text-xs text-gray-400">ส่งแล้ว ${rows.length} คน</p></div><div class="flex gap-2"><input id="reg-search" class="camp-input w-56" placeholder="ค้นหาชื่อ/รหัส/ห้อง">${access.can_export?'<button id="reg-export" class="camp-btn bg-emerald-600 text-white">⬇ CSV</button>':''}</div></div><div id="reg-list" class="space-y-3"></div>`
  const draw=()=>{
    const q=document.getElementById('reg-search').value.trim().toLowerCase()
    const filtered=rows.filter(({r,s})=>`${s?.student_code} ${s?.full_name} ${s?.main_room} ${r.english_name}`.toLowerCase().includes(q))
    document.getElementById('reg-list').innerHTML=filtered.length?filtered.map(({r,s,p})=>`<article class="camp-card p-4 flex flex-col sm:flex-row sm:items-center gap-3"><div class="flex-1 min-w-0"><div class="flex items-center gap-2"><b class="truncate">${esc(s?.full_name)}</b><span class="text-xs text-gray-400">${esc(s?.student_code)}</span></div><p class="text-xs text-gray-500 mt-1">${esc(s?.main_room||'—')} · ${esc(r.english_name)} · Passport ${esc(maskPassport(r.passport_number))} · เสื้อ ${esc(r.shirt_size)}</p><p class="text-xs ${r.medical_conditions==='ไม่มี'?'text-gray-400':'text-red-600 font-semibold'} mt-1">โรคประจำตัว: ${esc(r.medical_conditions)}</p></div><div class="flex gap-2"><span class="px-2 py-1 rounded-lg text-xs font-bold ${p.deposit?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">มัดจำ</span><span class="px-2 py-1 rounded-lg text-xs font-bold ${p.balance?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">ส่วนที่เหลือ</span><button data-detail="${r.student_id}" class="camp-btn bg-teal-50 text-teal-700 py-1">ดูข้อมูล</button></div></article>`).join(''):'<div class="text-center py-16 text-gray-400">ไม่พบข้อมูล</div>'
    document.querySelectorAll('[data-detail]').forEach(btn=>btn.addEventListener('click',()=>showRegistrationDetail(Number(btn.dataset.detail))))
  }
  draw();document.getElementById('reg-search').addEventListener('input',draw);document.getElementById('reg-export')?.addEventListener('click',exportRegistrations)
}

function showRegistrationDetail(studentId) {
  const {students,regs}=maps(),s=students.get(studentId),r=regs.get(studentId)
  modal(`<div class="p-6"><div class="flex justify-between"><div><h3 class="font-bold text-lg">${esc(s?.full_name)}</h3><p class="text-xs text-gray-400">${esc(s?.student_code)} · ${esc(s?.main_room)}</p></div><button data-close>✕</button></div><div class="grid sm:grid-cols-2 gap-3 mt-5 text-sm">${detail('ชื่อเล่น',r.nickname)}${detail('ชื่ออังกฤษ',r.english_name)}${detail('เพศ',s.gender)}${detail('วันเกิด',thaiDate(r.birth_date))}${detail('สัญชาติ',r.nationality)}${detail('กรุ๊ปเลือด',r.blood_group)}${detail('เลขหนังสือเดินทาง',r.passport_number)}${detail('หมดอายุ',thaiDate(r.passport_expiry))}${detail('โทรศัพท์',r.phone)}${detail('ไซซ์เสื้อ',r.shirt_size)}<div class="sm:col-span-2">${detail('ที่อยู่',r.current_address)}</div><div class="sm:col-span-2">${detail('โรคประจำตัว',r.medical_conditions)}</div></div></div>`)
}
function detail(label,value){return `<div class="bg-gray-50 rounded-xl p-3"><p class="text-[11px] text-gray-400">${label}</p><p class="font-semibold mt-1">${esc(value||'—')}</p></div>`}

function exportRegistrations(){
  const {students,regs,payments}=maps();const bom='\ufeff';const headers=['รหัสนักเรียน','ชื่อไทย','ชื่ออังกฤษ','ห้อง','เพศ','ชื่อเล่น','เลขหนังสือเดินทาง','วันหมดอายุ','วันเกิด','สัญชาติ','กรุ๊ปเลือด','โทรศัพท์','ไซซ์เสื้อ','โรคประจำตัว','ที่อยู่','มัดจำ','ส่วนที่เหลือ']
  const quote=v=>`"${String(v??'').replace(/"/g,'""')}"`;const lines=[headers,...[...regs.values()].map(r=>{const s=students.get(Number(r.student_id)),p=payments.get(Number(r.student_id))||{};return[s?.student_code,s?.full_name,r.english_name,s?.main_room,s?.gender,r.nickname,r.passport_number,r.passport_expiry,r.birth_date,r.nationality,r.blood_group,r.phone,r.shirt_size,r.medical_conditions,r.current_address,p.deposit?'ชำระแล้ว':'',p.balance?'ชำระแล้ว':'']})].map(row=>row.map(quote).join(','))
  const url=URL.createObjectURL(new Blob([bom+lines.join('\n')],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='TERANGGANU2026_ข้อมูลผู้เข้าร่วม.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)
}

function renderPayments() {
  const {students,regs,payments}=maps(), e=ctx.event||{}
  const rows=[...regs.values()].map(r=>({r,s:students.get(Number(r.student_id)),p:payments.get(Number(r.student_id))||{}}))
  content.innerHTML=`<div class="flex flex-wrap gap-3 justify-between items-center mb-4"><div><h2 class="text-xl font-bold">รับชำระเงิน</h2><p class="text-xs text-gray-400">บันทึกเงินจริงแล้วระบบจะสร้างใบเสร็จอัตโนมัติ</p></div><input id="pay-search" class="camp-input w-56" placeholder="ค้นหานักเรียน"></div><div id="pay-list" class="space-y-3"></div>`
  const draw=()=>{const q=document.getElementById('pay-search').value.trim().toLowerCase();document.getElementById('pay-list').innerHTML=rows.filter(({s})=>`${s?.student_code} ${s?.full_name} ${s?.main_room}`.toLowerCase().includes(q)).map(({s,p})=>`<article class="camp-card p-4"><div class="flex flex-col lg:flex-row lg:items-center gap-3"><div class="flex-1"><b>${esc(s?.full_name)}</b><p class="text-xs text-gray-400">${esc(s?.student_code)} · ${esc(s?.main_room)}</p></div>${installmentButtons(s,p.deposit,'deposit','มัดจำ',e.deposit_amount)}${installmentButtons(s,p.balance,'balance','ส่วนที่เหลือ',e.balance_amount)}</div></article>`).join('')||'<div class="text-center py-16 text-gray-400">ไม่พบข้อมูล</div>';bindPaymentButtons()}
  draw();document.getElementById('pay-search').addEventListener('input',draw)
}

function installmentButtons(student,payment,type,label,amount){return payment?`<div class="min-w-[180px] rounded-xl bg-emerald-50 p-3"><p class="text-xs font-bold text-emerald-700">✅ ${label} ฿${money(amount)}</p><div class="flex gap-2 mt-2"><button data-receipt="${payment.id}" class="text-xs text-teal-700 underline">ใบเสร็จ</button><button data-void="${payment.id}" class="text-xs text-red-500 underline">ยกเลิก</button></div></div>`:`<button data-pay-student="${student.id}" data-pay-type="${type}" data-pay-label="${label}" class="camp-btn min-w-[180px] bg-amber-500 hover:bg-amber-600 text-white">รับ${label} ฿${money(amount)}</button>`}

function bindPaymentButtons(){
  document.querySelectorAll('[data-pay-student]').forEach(btn=>btn.addEventListener('click',()=>showPaymentModal(btn)))
  document.querySelectorAll('[data-receipt]').forEach(btn=>btn.addEventListener('click',()=>openReceipt(btn.dataset.receipt)))
  document.querySelectorAll('[data-void]').forEach(btn=>btn.addEventListener('click',()=>voidPayment(btn.dataset.void)))
}

function showPaymentModal(btn){
  const {students}=maps(),s=students.get(Number(btn.dataset.payStudent));const wrap=modal(`<form id="receive-payment-form" class="p-6"><div class="flex justify-between"><div><h3 class="font-bold text-lg">รับชำระ${esc(btn.dataset.payLabel)}</h3><p class="text-sm text-gray-500">${esc(s?.full_name)} · ${esc(s?.student_code)}</p></div><button type="button" data-close>✕</button></div><label class="block mt-5"><span class="camp-label">วิธีชำระ</span><select name="method" class="camp-input"><option value="cash">เงินสด</option><option value="transfer">โอนเงิน</option><option value="other">อื่น ๆ</option></select></label><label class="block mt-3"><span class="camp-label">หมายเหตุ</span><textarea name="note" class="camp-input" rows="2"></textarea></label><div class="rounded-xl bg-amber-50 p-3 text-xs text-amber-700 mt-4">เมื่อยืนยัน ระบบจะสร้างใบเสร็จเลขที่ใหม่ทันที</div><div class="grid grid-cols-2 gap-3 mt-5"><button type="button" data-close class="camp-btn border">ยกเลิก</button><button class="camp-btn bg-teal-700 text-white">ยืนยันรับเงิน</button></div></form>`)
  wrap.querySelector('form').addEventListener('submit',async e=>{e.preventDefault();const save=e.submitter;save.disabled=true;try{const fd=new FormData(e.currentTarget);const payment=await recordTerangganuPayment(s.id,btn.dataset.payType,fd.get('method'),fd.get('note'));wrap.remove();toast(`รับชำระแล้ว เลขที่ ${payment.receipt_no}`);await loadManager(true);openReceipt(payment.id)}catch(error){toast(error.message||'บันทึกไม่สำเร็จ','error');save.disabled=false}})
}

async function voidPayment(id){const reason=prompt('ระบุเหตุผลการยกเลิกรายการรับชำระ');if(!reason)return;try{await voidTerangganuPayment(id,reason);toast('ยกเลิกรายการแล้ว','warning');await loadManager(true)}catch(error){toast(error.message,'error')}}

function renderSettings(){
  const e=ctx.event||{}, staff=ctx.staff||[]
  content.innerHTML=`<div class="mb-4"><h2 class="text-xl font-bold">ตั้งค่าระบบค่าย</h2><p class="text-xs text-gray-400">กำหนดการเปิดระบบ ค่าใช้จ่าย และข้อมูลใบเสร็จ</p></div>
  <section class="camp-card p-5 mb-4"><h3 class="font-bold">การเปิดใช้งาน</h3><div class="grid sm:grid-cols-2 gap-3 mt-4"><div class="rounded-xl border p-4"><p class="text-sm font-semibold">ปุ่มในหน้าภาพรวมนักเรียน</p><p class="text-xs text-gray-400 mt-1">สถานะ: ${e.visible_to_students?'เปิดใช้งาน':'ปิดใช้งาน'}</p><button data-toggle-visible="${!e.visible_to_students}" class="camp-btn mt-3 ${e.visible_to_students?'bg-red-50 text-red-600':'bg-emerald-600 text-white'}">${e.visible_to_students?'ปิดใช้งาน':'เปิดใช้งาน'}</button></div><div class="rounded-xl border p-4"><p class="text-sm font-semibold">รับแบบสำรวจ</p><p class="text-xs text-gray-400 mt-1">สถานะ: ${e.form_open?'เปิดรับข้อมูล':'ปิดรับข้อมูล'}</p><button data-toggle-form="${!e.form_open}" class="camp-btn mt-3 ${e.form_open?'bg-red-50 text-red-600':'bg-emerald-600 text-white'}">${e.form_open?'ปิดรับข้อมูล':'เปิดรับข้อมูล'}</button></div></div></section>
  <form id="camp-settings-form" class="camp-card p-5 grid sm:grid-cols-2 gap-4">
    ${field('name','ชื่อกิจกรรม',e.name,'text',true,true)}${field('location','สถานที่',e.location)}
    ${field('event_start_date','วันเริ่มกิจกรรม',e.event_start_date,'date')}${field('event_end_date','วันสิ้นสุดกิจกรรม',e.event_end_date,'date')}
    ${field('form_open_at','วันเวลาเปิดแบบสำรวจ',inputDateTime(e.form_open_at),'datetime-local')}${field('form_close_at','วันเวลาปิดแบบสำรวจ',inputDateTime(e.form_close_at),'datetime-local')}
    ${field('deposit_amount','ค่ามัดจำ',e.deposit_amount,'number',true,true)}${field('balance_amount','ส่วนที่เหลือ',e.balance_amount,'number',true,true)}
    ${field('deposit_due_date','กำหนดชำระมัดจำ',e.deposit_due_date,'date')}${field('balance_due_date','กำหนดชำระส่วนที่เหลือ',e.balance_due_date,'date')}
    ${field('receipt_prefix','คำนำหน้าเลขที่ใบเสร็จ',e.receipt_prefix,'text',true,true)}
    <label><span class="camp-label">ครูผู้ลงนามในใบเสร็จ</span><select name="receipt_teacher_id" class="camp-input"><option value="">เลือกครูผู้รับผิดชอบ</option>${staff.filter(x=>x.active).map(x=>`<option value="${x.teacher_id}" ${Number(e.receipt_teacher_id)===Number(x.teacher_id)?'selected':''}>${esc(x.display_name||x.full_name)}</option>`).join('')}</select></label>
    <label class="sm:col-span-2"><span class="camp-label">รายละเอียดกิจกรรม</span><textarea name="details" class="camp-input" rows="3">${esc(e.details||'')}</textarea></label>
    ${field('director_name','ชื่อผู้อำนวยการ',e.director_name)}${field('director_title','ตำแหน่งผู้อำนวยการ',e.director_title)}
    <div class="sm:col-span-2 rounded-xl bg-gray-50 p-4"><p class="camp-label">ลายเซ็นผู้อำนวยการ</p>${e.director_signature_url?`<img src="${esc(e.director_signature_url)}" class="h-16 object-contain bg-white rounded-lg border p-1 mb-3">`:''}<input id="director-sign-file" type="file" accept="image/*" class="text-xs"><button id="upload-director-sign" type="button" class="camp-btn bg-indigo-50 text-indigo-700 ml-2">อัปโหลด</button></div>
    <button class="sm:col-span-2 camp-btn bg-teal-700 text-white py-3">💾 บันทึกการตั้งค่า</button>
  </form>`
  document.querySelector('[data-toggle-visible]').addEventListener('click',async e=>{await quickSetting({visible_to_students:e.currentTarget.dataset.toggleVisible==='true'})})
  document.querySelector('[data-toggle-form]').addEventListener('click',async e=>{await quickSetting({form_open:e.currentTarget.dataset.toggleForm==='true'})})
  document.getElementById('camp-settings-form').addEventListener('submit',saveSettings)
  document.getElementById('upload-director-sign').addEventListener('click',uploadDirectorSign)
}

async function quickSetting(payload){try{await updateTerangganuEvent(payload);toast('อัปเดตสถานะแล้ว');await loadManager(true)}catch(error){toast(error.message,'error')}}
async function saveSettings(e){e.preventDefault();const btn=e.submitter;btn.disabled=true;try{const payload=Object.fromEntries(new FormData(e.currentTarget).entries());for(const key of ['form_open_at','form_close_at'])payload[key]=payload[key]?new Date(payload[key]).toISOString():null;await updateTerangganuEvent(payload);toast('บันทึกการตั้งค่าแล้ว');await loadManager(true)}catch(error){toast(error.message,'error');btn.disabled=false}}
async function uploadDirectorSign(){const file=document.getElementById('director-sign-file').files[0];if(!file){toast('กรุณาเลือกไฟล์ลายเซ็น','warning');return}try{const url=await uploadTerangganuDirectorSignature(file);await updateTerangganuEvent({director_signature_url:url});toast('อัปโหลดลายเซ็นผู้อำนวยการแล้ว');await loadManager(true)}catch(error){toast(error.message,'error')}}

function renderStaff(){
  const assigned=new Set((ctx.staff||[]).filter(x=>x.active).map(x=>Number(x.teacher_id)))
  content.innerHTML=`<div class="mb-4"><h2 class="text-xl font-bold">ครูผู้รับผิดชอบ</h2><p class="text-xs text-gray-400">สิทธิ์นี้จำกัดเฉพาะโมดูลค่าย ไม่ใช่สิทธิ์แอดมิน PP5</p></div><section class="camp-card p-5 mb-4"><div class="flex gap-2"><select id="staff-teacher" class="camp-input"><option value="">เลือกครู</option>${(ctx.teachers||[]).filter(t=>!assigned.has(Number(t.id))).map(t=>`<option value="${t.id}">${esc(t.full_name)} (${esc(t.teacher_code)})</option>`).join('')}</select><button id="staff-add" class="camp-btn bg-teal-700 text-white whitespace-nowrap">+ มอบหมาย</button></div></section><div class="space-y-3">${(ctx.staff||[]).map(st=>`<article class="camp-card p-4 flex flex-col sm:flex-row sm:items-center gap-3 ${st.active?'':'opacity-50'}"><div class="flex-1"><b>${esc(st.display_name||st.full_name)}</b><p class="text-xs text-gray-400">${esc(st.teacher_code)} · ${esc(st.title)} · ${st.signature_url?'มีลายเซ็นแล้ว':'ยังไม่มีลายเซ็น'}</p></div><div class="flex gap-2">${Number(access.teacher_id)===Number(st.teacher_id)?`<button data-sign-staff="${st.teacher_id}" class="camp-btn bg-indigo-50 text-indigo-700">✍️ ลายเซ็นของฉัน</button>`:`<span class="camp-btn bg-gray-50 text-gray-400">${st.signature_url?'ลงนามแล้ว':'รอครูลงนาม'}</span>`}<button data-staff-active="${st.teacher_id}" data-next="${!st.active}" class="camp-btn ${st.active?'bg-red-50 text-red-600':'bg-emerald-50 text-emerald-700'}">${st.active?'ปิดสิทธิ์':'เปิดสิทธิ์'}</button></div></article>`).join('')}</div>`
  document.getElementById('staff-add').addEventListener('click',async()=>{const id=document.getElementById('staff-teacher').value;if(!id)return;try{await assignTerangganuStaff(id);toast('มอบหมายครูแล้ว');await loadManager(true)}catch(error){toast(error.message,'error')}})
  document.querySelectorAll('[data-staff-active]').forEach(btn=>btn.addEventListener('click',async()=>{try{await assignTerangganuStaff(btn.dataset.staffActive,{active:btn.dataset.next==='true'});toast('อัปเดตสิทธิ์แล้ว');await loadManager(true)}catch(error){toast(error.message,'error')}}))
  document.querySelectorAll('[data-sign-staff]').forEach(btn=>btn.addEventListener('click',()=>openSignatureModal(Number(btn.dataset.signStaff))))
}

function openSignatureModal(teacherId){
  if(Number(access.teacher_id)!==teacherId && !access.is_admin){toast('ครูลงลายเซ็นได้เฉพาะบัญชีของตนเอง','error');return}
  const st=(ctx.staff||[]).find(x=>Number(x.teacher_id)===teacherId);const wrap=modal(`<div class="p-6"><div class="flex justify-between"><div><h3 class="font-bold text-lg">ลายเซ็นครูผู้รับผิดชอบ</h3><p class="text-xs text-gray-400">วาดบนช่องหรืออัปโหลดไฟล์ภาพ</p></div><button data-close>✕</button></div><label class="block mt-4"><span class="camp-label">ชื่อที่แสดง</span><input id="sign-name" class="camp-input" value="${esc(st?.display_name||st?.full_name||'')}"></label><label class="block mt-3"><span class="camp-label">ตำแหน่ง</span><input id="sign-title" class="camp-input" value="${esc(st?.title||'ครูผู้รับผิดชอบ')}"></label><div class="mt-3"><span class="camp-label">วาดลายเซ็น</span><canvas id="sign-canvas" width="700" height="220" class="w-full h-32 border rounded-xl bg-white touch-none"></canvas><button id="sign-clear" class="text-xs text-red-500 mt-1">ล้างลายเซ็น</button></div><div class="mt-3"><span class="camp-label">หรืออัปโหลดภาพ</span><input id="sign-file" type="file" accept="image/*" class="text-xs"></div><button id="sign-save" class="camp-btn w-full bg-teal-700 text-white mt-5">บันทึกลายเซ็น</button></div>`)
  const canvas=wrap.querySelector('canvas'),g=canvas.getContext('2d');const clear=()=>{g.fillStyle='#fff';g.fillRect(0,0,canvas.width,canvas.height);g.strokeStyle='#0f172a'};clear();g.lineWidth=4;g.lineCap='round';let drawing=false,drawn=false;const pos=e=>{const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}};canvas.addEventListener('pointerdown',e=>{drawing=true;canvas.setPointerCapture?.(e.pointerId);const p=pos(e);g.beginPath();g.moveTo(p.x,p.y)});canvas.addEventListener('pointermove',e=>{if(!drawing)return;const p=pos(e);g.lineTo(p.x,p.y);g.stroke();drawn=true});canvas.addEventListener('pointerup',()=>drawing=false);canvas.addEventListener('pointercancel',()=>drawing=false);wrap.querySelector('#sign-clear').addEventListener('click',()=>{clear();drawn=false});wrap.querySelector('#sign-save').addEventListener('click',async()=>{try{let file=wrap.querySelector('#sign-file').files[0],url=st?.signature_url||'';if(file)url=await uploadTerangganuSignature(session.user.id,file);else if(drawn){const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));url=await uploadTerangganuSignature(session.user.id,blob)}if(!url)throw new Error('กรุณาวาดหรือเลือกไฟล์ลายเซ็น');if(Number(access.teacher_id)===teacherId)await updateMyTerangganuSignature(url,wrap.querySelector('#sign-name').value,wrap.querySelector('#sign-title').value);else throw new Error('กรุณาเข้าสู่ระบบด้วยบัญชีครูเจ้าของลายเซ็น');wrap.remove();toast('บันทึกลายเซ็นแล้ว');await loadManager(true)}catch(error){toast(error.message,'error')}})
}

// ─── Receipt ────────────────────────────────────────────────────────────────
function findPayment(id){return (ctx.payments||[]).find(p=>String(p.id)===String(id))}
function findStudent(id){return (ctx.students||[]).find(s=>Number(s.id)===Number(id))||ctx.student}
function bahtTextSimple(amount){
  const number=Number(amount||0)
  if(!Number.isFinite(number)||number<0)return ''
  const [baht,satang='00']=number.toFixed(2).split('.')
  const digit=['ศูนย์','หนึ่ง','สอง','สาม','สี่','ห้า','หก','เจ็ด','แปด','เก้า'],unit=['','สิบ','ร้อย','พัน','หมื่น','แสน']
  const group=value=>{const text=String(Number(value));if(text==='0')return '';let out='';for(let i=0;i<text.length;i++){const d=Number(text[i]),pos=text.length-i-1;if(!d)continue;if(pos===1&&d===1)out+='สิบ';else if(pos===1&&d===2)out+='ยี่สิบ';else if(pos===0&&d===1&&text.length>1)out+='เอ็ด';else out+=digit[d]+unit[pos]}return out}
  const integer=value=>{let text=String(Number(value));if(text==='0')return 'ศูนย์';let out='';while(text.length>6){const head=text.slice(0,text.length-6);out+=integer(head)+'ล้าน';text=text.slice(-6)}return out+group(text)}
  const satangNumber=Number(satang)
  return `${integer(baht)}บาท${satangNumber?`${group(satang)}สตางค์`:'ถ้วน'}`
}
function openReceipt(paymentId){
  const p=findPayment(paymentId);if(!p){toast('ไม่พบข้อมูลใบเสร็จ','error');return}const s=findStudent(p.student_id),snap=p.receipt_snapshot||{},label=p.installment_type==='deposit'?'ค่ามัดจำเข้าร่วมค่าย':'ค่าใช้จ่ายส่วนที่เหลือ'
  const w=window.open('','_blank');if(!w){toast('เบราว์เซอร์ปิดกั้นหน้าต่างใบเสร็จ','error');return}
  w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${esc(p.receipt_no)}</title><style>@page{size:A4;margin:14mm}body{font-family:Arial,'Sarabun',sans-serif;color:#111}.tools{text-align:center;margin-bottom:16px}.receipt{border:1.5px solid #111;padding:24px;max-width:760px;margin:auto}.head{text-align:center}.head h1{font-size:21px;margin:4px}.head p{margin:3px;font-size:13px}.no{text-align:right;margin:16px 0;font-weight:bold}.row{display:flex;border-bottom:1px dotted #aaa;padding:8px 0;gap:12px}.row span:first-child{width:150px;color:#555}.amount{font-size:20px;font-weight:bold}.signs{display:grid;grid-template-columns:1fr 1fr;gap:50px;margin-top:55px;text-align:center}.signs img{height:65px;max-width:180px;object-fit:contain}.line{border-bottom:1px solid #111;height:68px;margin:auto;max-width:220px}.muted{font-size:11px;color:#666}@media print{.tools{display:none}}</style></head><body><div class="tools"><button onclick="window.print()">🖨️ พิมพ์ / บันทึกเป็น PDF</button></div><div class="receipt"><div class="head"><h1>ใบเสร็จรับเงิน</h1><h1>${esc(snap.event_name||ctx.event?.name)}</h1><p>${esc(snap.location||'โรงเรียนมูลนิธิอาซิซสถาน')}</p></div><div class="no">เลขที่ ${esc(p.receipt_no)}</div><div class="row"><span>ได้รับเงินจาก</span><b>${esc(s?.full_name)}</b></div><div class="row"><span>รหัสนักเรียน / ชั้น</span><b>${esc(s?.student_code)} / ${esc(s?.main_room||'—')}</b></div><div class="row"><span>รายการ</span><b>${label}</b></div><div class="row"><span>จำนวนเงิน</span><b class="amount">${money(p.amount)} บาท</b></div><div class="row"><span>จำนวนเงินตัวอักษร</span><b>${bahtTextSimple(p.amount)}</b></div><div class="row"><span>วันที่รับเงิน</span><b>${thaiDate(p.paid_at)}</b></div><div class="signs"><div>${snap.teacher_signature_url?`<img src="${esc(snap.teacher_signature_url)}">`:'<div class="line"></div>'}<p>(${esc(snap.teacher_name||'ครูผู้รับผิดชอบ')})</p><p class="muted">${esc(snap.teacher_title||'ครูผู้รับผิดชอบ')}</p></div><div>${snap.director_signature_url?`<img src="${esc(snap.director_signature_url)}">`:'<div class="line"></div>'}<p>(${esc(snap.director_name||'ผู้อำนวยการ')})</p><p class="muted">${esc(snap.director_title||'ผู้อำนวยการ')}</p></div></div><p class="muted" style="margin-top:30px">สร้างโดยระบบ PP5 Online · ${new Date(p.created_at).toLocaleString('th-TH')}</p></div></body></html>`);w.document.close()
}

init()
