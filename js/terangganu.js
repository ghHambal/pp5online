import { supabase } from './supabase.js'
import {
  getTerangganuAccess, getMyTerangganuContext, saveMyTerangganuRegistration,
  getMyTerangganuTeacherContext, saveMyTerangganuTeacherRegistration,
  getTerangganuManagerContext, updateTerangganuEvent, assignTerangganuStaff,
  getTerangganuSchedule, saveTerangganuScheduleItem, deleteTerangganuScheduleItem,
  addTerangganuParticipants, removeTerangganuParticipant,
  addTerangganuTeacherParticipants, removeTerangganuTeacherParticipant,
  updateMyTerangganuSignature, recordTerangganuPayment, recordTerangganuPaymentsBulk, voidTerangganuPayment,
  subscribeTerangganu,
} from './terangganu-api.js'
import { uploadTerangganuSignature, uploadTerangganuDirectorSignature, uploadTerangganuReceiptLogo } from './storage.js'
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
const studentAvatar = (student, size = 'w-12 h-16') => student?.image_url
  ? `<img src="${esc(student.image_url)}" alt="" class="${size} rounded-2xl object-cover object-top bg-gray-100 border border-gray-100 shadow-sm flex-shrink-0" loading="lazy">`
  : `<div class="${size} rounded-2xl bg-sky-100 text-sky-700 border border-sky-100 shadow-sm flex items-center justify-center font-bold flex-shrink-0">${esc((student?.full_name || '?').trim().slice(0,1))}</div>`

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
    else if (access?.teacher_participant) await loadTeacher()
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
    refreshTimer = setTimeout(() => profile?.role === 'student' ? loadStudent(true) : access?.is_manager ? loadManager(true) : loadTeacher(true), 500)
  })
}

// ─── Student ────────────────────────────────────────────────────────────────
async function loadStudent(silent = false) {
  if ((!access?.visible || !access?.student_allowed) && !access?.is_manager) {
    errorView('ระบบค่ายยังไม่เปิดให้นักเรียนเข้าใช้งาน')
    return
  }
  if (!silent) content.innerHTML = '<div class="text-center py-20 text-teal-600">กำลังโหลดข้อมูล...</div>'
  const [studentContext, schedule] = await Promise.all([getMyTerangganuContext(), getTerangganuSchedule()])
  ctx = { ...studentContext, schedule }
  updateBrand(ctx.event)
  nav.classList.add('hidden')
  renderStudent()
  subscribe()
}

function paymentCard(type, label, amount) {
  const payment = (ctx.payments || []).find(p => p.installment_type === type && !p.voided_at)
  const fullyPaid = ['deposit','balance'].every(kind => (ctx.payments || []).some(p => p.installment_type === kind && !p.voided_at))
  return `<div class="camp-card p-4 border-l-4 ${payment ? 'border-l-emerald-500' : 'border-l-amber-400'}">
    <div class="flex items-start justify-between gap-3">
      <div><p class="text-xs text-gray-400">${esc(label)}</p><p class="text-2xl font-bold mt-1">฿${money(amount)}</p></div>
      <span class="px-2.5 py-1 rounded-full text-xs font-bold ${payment ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${payment ? 'ชำระแล้ว' : 'ยังไม่ชำระ'}</span>
    </div>
    ${payment ? `<p class="text-xs text-gray-400 mt-3">เลขที่ ${esc(payment.receipt_no)} · ${thaiDate(payment.paid_at)}</p>${!fullyPaid||type==='balance'?`<button data-receipt="${payment.id}" class="camp-btn mt-3 w-full bg-teal-50 text-teal-700 hover:bg-teal-100">🧾 ${fullyPaid?'ใบเสร็จรวมชำระครบ':'พิมพ์ / บันทึก PDF'}</button>`:''}` : ''}
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
    ${scheduleSection()}
    <section class="camp-card p-5 sm:p-7">
      <div class="flex items-start justify-between gap-3 mb-5"><div><h2 class="font-bold text-lg">📝 แบบสำรวจนักเรียน</h2><p class="text-xs text-gray-400 mt-1">${r ? `ส่งข้อมูลแล้ว ${thaiDate(r.updated_at)}` : 'กรอกข้อมูลสำหรับการเดินทางเข้าค่าย'}</p></div><span class="px-2.5 py-1 rounded-full text-xs font-bold ${r ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}">${r ? 'ครบแล้ว' : 'ยังไม่กรอก'}</span></div>
      ${!canEdit ? `<div class="mb-5 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-700">แบบสำรวจปิดรับข้อมูลแล้ว สามารถดูข้อมูลเดิมได้</div>` : ''}
      <form id="student-camp-form" class="grid sm:grid-cols-2 gap-4">
        ${canEdit ? ocrUploadBlock('student') : ''}
        ${field('nickname','ชื่อเล่น',r?.nickname,'text',true,canEdit)}
        ${field('thai_name','ชื่อภาษาไทย',r?.thai_name || s.full_name,'text',true,canEdit)}
        ${field('english_name','ชื่อภาษาอังกฤษ',r?.english_name,'text',true,canEdit)}
        ${field('passport_number','เลขที่หนังสือเดินทาง',r?.passport_number,'text',true,canEdit)}
        ${field('passport_expiry','วันหมดอายุหนังสือเดินทาง',r?.passport_expiry,'date',true,canEdit)}
        ${field('birth_date','วันเดือนปีเกิด',r?.birth_date,'date',true,canEdit)}
        ${field('nationality','สัญชาติ',r?.nationality || 'ไทย','text',true,canEdit)}
        <label><span class="camp-label">กรุ๊ปเลือด *</span><select name="blood_group" class="camp-input" ${canEdit?'':'disabled'}>${['ไม่ทราบ','A','B','AB','O'].map(v=>`<option ${r?.blood_group===v?'selected':''}>${v}</option>`).join('')}</select></label>
        ${field('phone','เบอร์โทรศัพท์ผู้ปกครอง',r?.phone,'tel',true,canEdit)}
        <label><span class="camp-label">ไซซ์เสื้อ *</span><select name="shirt_size" class="camp-input" ${canEdit?'':'disabled'}><option value="">เลือกไซซ์</option>${['XS','S','M','L','XL','2XL','3XL','4XL','อื่น ๆ'].map(v=>`<option ${r?.shirt_size===v?'selected':''}>${v}</option>`).join('')}</select></label>
        <label class="sm:col-span-2"><span class="camp-label">ที่อยู่ปัจจุบัน *</span><textarea name="current_address" rows="3" class="camp-input" required ${canEdit?'':'disabled'}>${esc(r?.current_address||'')}</textarea></label>
        <label class="sm:col-span-2"><span class="camp-label">โรคประจำตัว</span><textarea name="medical_conditions" rows="2" class="camp-input" ${canEdit?'':'disabled'}>${esc(r?.medical_conditions||'ไม่มี')}</textarea></label>
        ${canEdit ? '<button class="sm:col-span-2 camp-btn bg-teal-700 hover:bg-teal-800 text-white py-3" type="submit">💾 บันทึกแบบสำรวจ</button>' : ''}
      </form>
    </section>`
  content.querySelector('#student-camp-form')?.addEventListener('submit', saveStudentForm)
  content.querySelectorAll('[data-receipt]').forEach(btn => btn.addEventListener('click', () => openReceipt(btn.dataset.receipt)))
  wireOcrUploadBlock('student', content.querySelector('#student-camp-form'))
}

function field(name,label,value,type='text',required=false,enabled=true) {
  return `<label><span class="camp-label">${esc(label)}${required?' *':''}</span><input name="${name}" type="${type}" value="${esc(value||'')}" class="camp-input" ${required?'required':''} ${enabled?'':'disabled'} /></label>`
}

// ── OCR อ่านบัตรประชาชน/พาสปอร์ต → เติมฟอร์มแบบสำรวจอัตโนมัติ (ใช้ gemini-proxy ที่มีอยู่แล้ว) ──
function ocrUploadBlock(idPrefix) {
  return `<div class="sm:col-span-2 rounded-xl bg-teal-50 border border-teal-200 p-3 flex flex-wrap items-center justify-between gap-3">
    <p class="text-xs text-teal-700 flex-1 min-w-[220px]">📷 ถ่ายรูปบัตรประชาชนหรือหน้าพาสปอร์ต ให้ระบบช่วยเติมข้อมูลในฟอร์มด้านล่างอัตโนมัติ (กรุณาตรวจสอบความถูกต้องก่อนบันทึกเสมอ)</p>
    <button type="button" id="${idPrefix}-ocr-btn" class="camp-btn bg-white border border-teal-300 text-teal-700 text-xs flex-shrink-0">📷 เลือกรูปบัตร/พาสปอร์ต</button>
    <input type="file" accept="image/*" id="${idPrefix}-ocr-input" class="hidden" />
  </div>`
}

async function ocrFillCampForm(formEl, file, btn) {
  const originalText = btn.textContent
  btn.disabled = true; btn.textContent = '⏳ กำลังอ่านข้อมูล...'
  try {
    const base64 = await new Promise((res, rej) => {
      const reader = new FileReader()
      reader.onload = () => res(reader.result.split(',')[1])
      reader.onerror = rej
      reader.readAsDataURL(file)
    })
    const prompt = `คุณคือผู้ช่วยอ่านข้อมูลจากรูปบัตรประชาชนไทยหรือหนังสือเดินทาง (พาสปอร์ต)
อ่านข้อมูลจากรูปที่แนบมาแล้วตอบเป็น JSON เท่านั้น (ไม่มีข้อความอื่นเลย) ตามรูปแบบนี้:
{
  "thai_name": "ชื่อ-นามสกุล ภาษาไทย เช่น นายสมชาย ใจดี (หรือ null ถ้าไม่มี)",
  "english_name": "ชื่อ-นามสกุล ภาษาอังกฤษตามที่ปรากฏในบัตร/พาสปอร์ต (หรือ null)",
  "passport_number": "เลขที่หนังสือเดินทาง ถ้าเป็นบัตรประชาชนให้ใส่เลขบัตรประชาชน 13 หลักแทน (หรือ null)",
  "passport_expiry": "วันหมดอายุหนังสือเดินทาง รูปแบบ YYYY-MM-DD (ค.ศ.) แปลงจาก พ.ศ. เป็น ค.ศ. ด้วยการลบ 543 เสมอ (หรือ null ถ้าไม่มีในรูป)",
  "birth_date": "วันเกิด รูปแบบ YYYY-MM-DD (ค.ศ.) แปลงจาก พ.ศ. เป็น ค.ศ. ด้วยการลบ 543 เสมอ (หรือ null)",
  "nationality": "สัญชาติ เช่น ไทย (หรือ null)",
  "current_address": "ที่อยู่ตามบัตรประชาชน (ถ้ามี) หรือ null"
}
ห้ามเดาข้อมูลที่อ่านไม่ชัดเจนหรือไม่มีในรูปเด็ดขาด ให้ใส่ null แทนเสมอ`
    const { data: json, error: fnErr } = await supabase.functions.invoke('gemini-proxy', {
      body: { keyType: 'schedule', dept: '', prompt, imageBase64: base64, imageMimeType: file.type || 'image/jpeg' },
    })
    if (fnErr) throw new Error(fnErr.message ?? 'Edge Function error')
    if (json?.error) throw new Error(`Gemini: ${json.error.message ?? json.error.status}`)
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
    const match = text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/)
    const jsonStr = match ? (match[1] ?? match[0]) : null
    if (!jsonStr) throw new Error('AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง')
    const data = JSON.parse(jsonStr)
    let filled = 0
    for (const [key, value] of Object.entries(data)) {
      if (!value) continue
      const input = formEl.querySelector(`[name="${key}"]`)
      if (input && !input.disabled) { input.value = value; filled++ }
    }
    toast(filled ? `อ่านข้อมูลสำเร็จ เติมให้ ${filled} ช่อง กรุณาตรวจสอบความถูกต้องก่อนบันทึก` : 'อ่านรูปไม่พบข้อมูลที่ใช้ได้ กรุณากรอกเอง', filled ? 'success' : 'warning')
  } catch (error) {
    toast('อ่านรูปไม่สำเร็จ: ' + (error.message ?? ''), 'error')
  } finally {
    btn.disabled = false; btn.textContent = originalText
  }
}

function wireOcrUploadBlock(idPrefix, formEl) {
  const btn = content.querySelector(`#${idPrefix}-ocr-btn`), input = content.querySelector(`#${idPrefix}-ocr-input`)
  if (!btn || !input) return
  btn.addEventListener('click', () => input.click())
  input.addEventListener('change', e => {
    const file = e.target.files?.[0]
    if (file) ocrFillCampForm(formEl, file, btn)
    e.target.value = ''
  })
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

// ─── Teacher participant ───────────────────────────────────────────────────
async function loadTeacher(silent = false) {
  if (!silent) content.innerHTML = '<div class="text-center py-20 text-teal-600">กำลังโหลดข้อมูล...</div>'
  const [teacherContext, schedule] = await Promise.all([getMyTerangganuTeacherContext(), getTerangganuSchedule()])
  ctx = { ...teacherContext, schedule }
  updateBrand(ctx.event)
  nav.classList.add('hidden')
  renderTeacherSurvey(ctx.teacher, ctx.registration, false)
  subscribe()
}

function teacherSurveyForm(teacher, registration, canEdit) {
  const r = registration || {}
  return `<form id="teacher-camp-form" class="grid sm:grid-cols-2 gap-4">
    ${canEdit ? ocrUploadBlock('teacher') : ''}
    ${field('nickname','ชื่อเล่น',r.nickname,'text',true,canEdit)}
    ${field('thai_name','ชื่อภาษาไทย',r.thai_name || teacher?.full_name,'text',true,canEdit)}
    ${field('english_name','ชื่อภาษาอังกฤษ',r.english_name,'text',true,canEdit)}
    ${field('passport_number','เลขที่หนังสือเดินทาง',r.passport_number,'text',true,canEdit)}
    ${field('passport_expiry','วันหมดอายุหนังสือเดินทาง',r.passport_expiry,'date',true,canEdit)}
    ${field('birth_date','วันเดือนปีเกิด',r.birth_date,'date',true,canEdit)}
    ${field('nationality','สัญชาติ',r.nationality || 'ไทย','text',true,canEdit)}
    <label><span class="camp-label">กรุ๊ปเลือด *</span><select name="blood_group" class="camp-input" ${canEdit?'':'disabled'}>${['ไม่ทราบ','A','B','AB','O'].map(v=>`<option ${r.blood_group===v?'selected':''}>${v}</option>`).join('')}</select></label>
    ${field('phone','หมายเลขโทรศัพท์',r.phone || teacher?.phone,'tel',true,canEdit)}
    <label><span class="camp-label">ไซซ์เสื้อ *</span><select name="shirt_size" class="camp-input" ${canEdit?'':'disabled'}><option value="">เลือกไซซ์</option>${['XS','S','M','L','XL','2XL','3XL','4XL','อื่น ๆ'].map(v=>`<option ${r.shirt_size===v?'selected':''}>${v}</option>`).join('')}</select></label>
    <label class="sm:col-span-2"><span class="camp-label">ที่อยู่ปัจจุบัน *</span><textarea name="current_address" rows="3" class="camp-input" required ${canEdit?'':'disabled'}>${esc(r.current_address||'')}</textarea></label>
    <label class="sm:col-span-2"><span class="camp-label">โรคประจำตัว</span><textarea name="medical_conditions" rows="2" class="camp-input" ${canEdit?'':'disabled'}>${esc(r.medical_conditions||'ไม่มี')}</textarea></label>
    ${canEdit ? '<button class="sm:col-span-2 camp-btn bg-teal-700 hover:bg-teal-800 text-white py-3" type="submit">💾 บันทึกแบบสำรวจครู</button>' : ''}
  </form>`
}

function renderTeacherSurvey(teacher, registration, insideManager = false) {
  const e = ctx.event || {}, now = Date.now()
  const withinWindow = (!e.form_open_at || now >= new Date(e.form_open_at).getTime()) && (!e.form_close_at || now <= new Date(e.form_close_at).getTime())
  const canEdit = e.form_open && withinWindow
  content.innerHTML = `<section class="rounded-3xl bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-600 text-white p-6 shadow-xl mb-5">
    <p class="text-teal-100 text-xs">ครูที่ปรึกษา / ครูร่วมค่าย</p><h2 class="text-xl font-bold mt-1">${esc(teacher?.full_name)}</h2>
    <p class="text-sm text-teal-100 mt-1">${esc(teacher?.teacher_code || '—')} · ${esc(teacher?.position || teacher?.dept || teacher?.subject_group || 'ครู')}</p>
  </section>${insideManager ? '' : scheduleSection()}<section class="camp-card p-5 sm:p-7"><div class="flex items-start justify-between gap-3 mb-5"><div><h2 class="font-bold text-lg">📝 แบบสำรวจครูร่วมค่าย</h2><p class="text-xs text-gray-400 mt-1">${registration ? `ส่งข้อมูลแล้ว ${thaiDate(registration.updated_at)}` : 'กรอกข้อมูลสำหรับการเดินทางเข้าค่าย'}</p></div><span class="px-2.5 py-1 rounded-full text-xs font-bold ${registration?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-500'}">${registration?'ครบแล้ว':'ยังไม่กรอก'}</span></div>
    ${!canEdit?'<div class="mb-5 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-700">แบบสำรวจปิดรับข้อมูลแล้ว สามารถดูข้อมูลเดิมได้</div>':''}${teacherSurveyForm(teacher,registration,canEdit)}</section>`
  content.querySelector('#teacher-camp-form')?.addEventListener('submit', async event => {
    event.preventDefault(); const btn=event.submitter; btn.disabled=true; btn.textContent='กำลังบันทึก...'
    try { await saveMyTerangganuTeacherRegistration(Object.fromEntries(new FormData(event.currentTarget).entries())); toast('บันทึกแบบสำรวจครูเรียบร้อยแล้ว'); insideManager ? await loadManager(true) : await loadTeacher(true) }
    catch(error){ toast(error.message||'บันทึกไม่สำเร็จ','error'); btn.disabled=false; btn.textContent='💾 บันทึกแบบสำรวจครู' }
  })
  wireOcrUploadBlock('teacher', content.querySelector('#teacher-camp-form'))
}

// ─── Manager ────────────────────────────────────────────────────────────────
const MANAGER_TABS = [
  ['dashboard','📊','ภาพรวม'],['schedule','📅','กำหนดการ'],['participants','👥','นักเรียน'],['teacher_participants','🧑‍🏫','ครูร่วมค่าย'],['registrations','📝','แบบสำรวจ'],['payments','💰','รับชำระ'],['my_teacher_survey','✍️','แบบสำรวจของฉัน'],['settings','⚙️','ตั้งค่า'],['staff','👩‍🏫','ผู้รับผิดชอบ'],
]

async function loadManager(silent = false) {
  if (!silent) content.innerHTML = '<div class="text-center py-20 text-teal-600">กำลังโหลดข้อมูล...</div>'
  const [managerContext, schedule] = await Promise.all([getTerangganuManagerContext(), getTerangganuSchedule()])
  ctx = { ...managerContext, schedule }
  access = ctx.access || access
  updateBrand(ctx.event)
  nav.classList.remove('hidden')
  const allowedTab = id => id === 'staff' ? access.is_admin : id === 'settings' ? access.can_settings : id === 'payments' ? access.can_payments : id === 'my_teacher_survey' ? access.teacher_participant : true
  const availableTabs = MANAGER_TABS.filter(([id]) => allowedTab(id))
  if (!availableTabs.some(([id]) => id === activeTab)) activeTab = 'dashboard'
  tabs.innerHTML = availableTabs.map(([id,icon,label]) => `<button data-tab="${id}" class="camp-tab camp-btn whitespace-nowrap ${activeTab===id?'active':'bg-gray-50 text-gray-600'}">${icon} ${label}</button>`).join('')
  tabs.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{activeTab=btn.dataset.tab;renderManager()}))
  renderManager()
  subscribe()
}

function maps() {
  const students = new Map((ctx.students||[]).map(s=>[Number(s.id),s]))
  const participants = new Map((ctx.participants||[]).map(p=>[Number(p.student_id),p]))
  const regs = new Map((ctx.registrations||[]).map(r=>[Number(r.student_id),r]))
  const activePayments = (ctx.payments||[]).filter(p=>!p.voided_at)
  const payments = new Map()
  activePayments.forEach(p=>{ if(!payments.has(Number(p.student_id))) payments.set(Number(p.student_id),{}); payments.get(Number(p.student_id))[p.installment_type]=p })
  return { students,participants,regs,payments,activePayments }
}

function renderManager() {
  tabs.querySelectorAll('[data-tab]').forEach(btn=>btn.classList.toggle('active',btn.dataset.tab===activeTab))
  if(activeTab==='dashboard') renderDashboard()
  else if(activeTab==='schedule') renderSchedule()
  else if(activeTab==='participants') renderParticipants()
  else if(activeTab==='teacher_participants') renderTeacherParticipants()
  else if(activeTab==='registrations') renderRegistrations()
  else if(activeTab==='payments') renderPayments()
  else if(activeTab==='my_teacher_survey') { const teacher=(ctx.teachers||[]).find(t=>Number(t.id)===Number(access.teacher_id)),registration=(ctx.teacher_registrations||[]).find(r=>Number(r.teacher_id)===Number(access.teacher_id)); renderTeacherSurvey(teacher,registration,true) }
  else if(activeTab==='settings') renderSettings()
  else if(activeTab==='staff') renderStaff()
}

function scheduleRows(canManage = false) {
  const rows = ctx.schedule || []
  if (!rows.length) return '<tr><td colspan="4" class="px-4 py-10 text-center text-gray-400">ยังไม่มีกำหนดการ</td></tr>'
  return rows.map(item => `<tr class="border-t border-gray-100 align-top">
    <td class="px-3 py-3 text-center font-bold text-teal-700">${esc(item.item_no)}</td>
    <td class="px-3 py-3 whitespace-nowrap">${thaiDate(item.item_date)}</td>
    <td class="px-3 py-3 font-semibold">${esc(item.item_text)}</td>
    <td class="px-3 py-3"><div class="whitespace-pre-line text-gray-600">${esc(item.note || '—')}</div>${canManage ? `<div class="flex flex-wrap gap-2 mt-2 no-print"><button type="button" data-schedule-edit="${item.id}" class="text-xs font-bold text-indigo-600 hover:underline">แก้ไข</button><button type="button" data-schedule-delete="${item.id}" class="text-xs font-bold text-red-600 hover:underline">ลบ</button></div>` : ''}</td>
  </tr>`).join('')
}

function scheduleTable(canManage = false) {
  return `<div class="overflow-x-auto"><table class="w-full min-w-[680px] text-sm"><thead><tr class="bg-teal-50 text-teal-900"><th class="px-3 py-3 w-24">รายการที่</th><th class="px-3 py-3 w-40">วันที่</th><th class="px-3 py-3 text-left">รายการ</th><th class="px-3 py-3 text-left w-64">หมายเหตุ</th></tr></thead><tbody>${scheduleRows(canManage)}</tbody></table></div>`
}

function scheduleSection() {
  return `<section class="camp-card mb-5 overflow-hidden"><div class="px-5 py-4 border-b border-teal-100"><h2 class="font-bold text-lg">📅 กำหนดการ</h2><p class="text-xs text-gray-400 mt-1">กำหนดการเข้าร่วมค่ายเรียงตามรายการที่</p></div>${scheduleTable(false)}</section>`
}

function renderSchedule() {
  content.innerHTML = `<div class="flex flex-wrap items-end justify-between gap-3 mb-5"><div><p class="text-xs text-teal-600 font-bold">ข้อมูลสำหรับผู้เข้าร่วม</p><h2 class="text-2xl font-bold">กำหนดการ</h2><p class="text-xs text-gray-400 mt-1">รุ่นแรกประกอบด้วย รายการที่ วันที่ รายการ และหมายเหตุ</p></div>${access.can_settings ? '<button id="schedule-add" class="camp-btn bg-teal-700 text-white">+ เพิ่มรายการ</button>' : ''}</div><section class="camp-card overflow-hidden">${scheduleTable(Boolean(access.can_settings))}</section>`
  document.getElementById('schedule-add')?.addEventListener('click', () => openScheduleModal())
  document.querySelectorAll('[data-schedule-edit]').forEach(btn => btn.addEventListener('click', () => openScheduleModal((ctx.schedule || []).find(item => item.id === btn.dataset.scheduleEdit))))
  document.querySelectorAll('[data-schedule-delete]').forEach(btn => btn.addEventListener('click', async () => {
    const item = (ctx.schedule || []).find(row => row.id === btn.dataset.scheduleDelete)
    if (!item || !confirm(`ยืนยันลบรายการที่ ${item.item_no}: ${item.item_text}?`)) return
    btn.disabled = true
    try { await deleteTerangganuScheduleItem(item.id); toast('ลบรายการกำหนดการแล้ว'); await loadManager(true) }
    catch (error) { toast(error.message || 'ลบรายการไม่สำเร็จ', 'error'); btn.disabled = false }
  }))
}

function openScheduleModal(item = null) {
  const nextNo = Math.max(0, ...(ctx.schedule || []).map(row => Number(row.item_no) || 0)) + 1
  const defaultDate = ctx.event?.event_start_date || new Date().toISOString().slice(0, 10)
  const wrap = modal(`<form id="schedule-form" class="p-6"><div class="flex items-start justify-between gap-3"><div><h3 class="font-bold text-lg">${item ? 'แก้ไข' : 'เพิ่ม'}รายการกำหนดการ</h3><p class="text-xs text-gray-400 mt-1">กรอกข้อมูลทั้ง 4 ช่องตามรูปแบบกำหนดการ</p></div><button type="button" data-close>✕</button></div><input type="hidden" name="id" value="${esc(item?.id || '')}"><div class="grid sm:grid-cols-2 gap-4 mt-5">${field('item_no','รายการที่',item?.item_no || nextNo,'number',true,true)}${field('item_date','วันที่',item?.item_date || defaultDate,'date',true,true)}<label class="sm:col-span-2"><span class="camp-label">รายการ *</span><textarea name="item_text" rows="3" class="camp-input" required>${esc(item?.item_text || '')}</textarea></label><label class="sm:col-span-2"><span class="camp-label">หมายเหตุ</span><textarea name="note" rows="3" class="camp-input">${esc(item?.note || '')}</textarea></label></div><div class="grid grid-cols-2 gap-3 mt-5"><button type="button" data-close class="camp-btn bg-gray-100 text-gray-600">ยกเลิก</button><button type="submit" class="camp-btn bg-teal-700 text-white">💾 บันทึก</button></div></form>`)
  wrap.querySelector('#schedule-form').addEventListener('submit', async event => {
    event.preventDefault(); const btn = event.submitter; btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try { await saveTerangganuScheduleItem(Object.fromEntries(new FormData(event.currentTarget).entries())); wrap.remove(); toast('บันทึกกำหนดการแล้ว'); await loadManager(true) }
    catch (error) { toast(error.message || 'บันทึกกำหนดการไม่สำเร็จ', 'error'); btn.disabled = false; btn.textContent = '💾 บันทึก' }
  })
}

function stat(label,value,icon,color='teal') {
  const bg = { teal:'bg-teal-100', amber:'bg-amber-100', emerald:'bg-emerald-100', blue:'bg-blue-100' }[color] || 'bg-teal-100'
  return `<div class="camp-card p-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl ${bg} flex items-center justify-center text-xl">${icon}</div><div><p class="text-xs text-gray-400">${label}</p><p class="text-2xl font-bold">${value}</p></div></div></div>`
}

function participantDemographics(rows) {
  const genderKey = value => {
    const text=String(value||'').trim().toLowerCase()
    if(text==='ชาย'||text==='ช'||text==='male'||text==='m') return 'male'
    if(text==='หญิง'||text==='ญ'||text==='female'||text==='f') return 'female'
    return 'unknown'
  }
  const roomInfo = value => {
    const text=String(value||'').trim()
    const match=text.match(/(?:ม\.?\s*)?([1-6])\s*[\/.]\s*([0-9]+)/i)
    const grade=match?`ม.${match[1]}`:'ไม่ระบุ'
    return { room:text||'ไม่ระบุ', grade, section:match?Number(match[1])<=3?'middle':'upper':'unknown' }
  }
  return rows.map(row=>({ ...row, genderKey:genderKey(row.s?.gender), ...roomInfo(row.s?.main_room) }))
}

function renderDashboard() {
  const {students,participants,regs,payments,activePayments}=maps(), e=ctx.event||{}
  const teacherParticipantCount=(ctx.teacher_participants||[]).length, teacherRegistrationCount=(ctx.teacher_registrations||[]).length
  const people=participantDemographics([...participants.keys()].map(studentId=>({s:students.get(studentId),r:regs.get(studentId),p:payments.get(studentId)||{}})))
  const deposits=activePayments.filter(p=>p.installment_type==='deposit'), balances=activePayments.filter(p=>p.installment_type==='balance')
  const revenue=activePayments.reduce((s,p)=>s+Number(p.amount||0),0)
  const male=people.filter(x=>x.genderKey==='male').length, female=people.filter(x=>x.genderKey==='female').length
  const middle=people.filter(x=>x.section==='middle').length, upper=people.filter(x=>x.section==='upper').length
  const grades=[...new Set(people.map(x=>x.grade))].sort((a,b)=>a.localeCompare(b,'th',{numeric:true}))
  const rooms=[...new Set(people.map(x=>x.room))].sort((a,b)=>a.localeCompare(b,'th',{numeric:true}))
  content.innerHTML=`<div class="flex flex-wrap items-end justify-between gap-3 mb-5"><div><p class="text-xs text-teal-600 font-bold">แดชบอร์ดผู้รับผิดชอบ</p><h2 class="text-2xl font-bold">${esc(e.name)}</h2></div><button id="refresh-manager" class="camp-btn bg-white border border-teal-200 text-teal-700">↻ โหลดข้อมูลใหม่</button></div>
  <div class="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-5">${stat('นักเรียนเข้าร่วม',participants.size,'👥')}${stat('ครูร่วมค่าย',teacherParticipantCount,'🧑‍🏫','blue')}${stat('แบบสำรวจ นร.',regs.size,'📝')}${stat('แบบสำรวจครู',teacherRegistrationCount,'✍️','teal')}${stat('ชำระครบ',balances.length,'✅','emerald')}${stat('ยอดรับรวม',`฿${money(revenue)}`,'💰','amber')}</div>
  <section class="camp-card p-5 mb-5"><div class="flex flex-wrap items-center justify-between gap-2"><div><h3 class="font-bold">สรุปนักเรียนผู้เข้าร่วม</h3><p class="text-xs text-gray-400">คำนวณจากรายชื่อที่เพิ่มในระบบค่าย</p></div><span class="text-xs text-gray-400">ไม่ระบุเพศ ${people.filter(x=>x.genderKey==='unknown').length} คน</span></div>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-4">${stat('ทั้งหมด',people.length,'👥')}${stat('ชาย',male,'👦','blue')}${stat('หญิง',female,'👧','amber')}${stat('ม.ต้น',middle,'🏫','teal')}${stat('ม.ปลาย',upper,'🎓','emerald')}</div>
    <div class="flex flex-wrap gap-2 mt-4">${grades.map(grade=>`<span class="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-700 text-xs font-bold">${esc(grade)} ${people.filter(x=>x.grade===grade).length} คน</span>`).join('')||'<span class="text-xs text-gray-400">ยังไม่มีข้อมูลระดับชั้น</span>'}</div>
  </section>
  <div class="grid lg:grid-cols-2 gap-4"><section class="camp-card p-5"><h3 class="font-bold">สถานะระบบนักเรียน</h3><div class="mt-4 flex items-center justify-between"><span class="text-sm text-gray-500">ปุ่มหน้าภาพรวม</span><b class="${e.visible_to_students?'text-emerald-600':'text-gray-400'}">${e.visible_to_students?'เปิดใช้งาน':'ปิดใช้งาน'}</b></div><div class="mt-3 flex items-center justify-between"><span class="text-sm text-gray-500">ผู้ที่เห็นปุ่ม</span><b class="text-teal-700">${e.student_visibility_scope==='all'?'นักเรียนทั้งโรง':'เฉพาะรายชื่อที่เพิ่ม'}</b></div><div class="mt-3 flex items-center justify-between"><span class="text-sm text-gray-500">รับแบบสำรวจ</span><b class="${e.form_open?'text-emerald-600':'text-gray-400'}">${e.form_open?'เปิดรับข้อมูล':'ปิดรับข้อมูล'}</b></div></section>
  <section class="camp-card p-5"><h3 class="font-bold">ค่าใช้จ่าย</h3><div class="mt-4 flex justify-between text-sm"><span>ค่ามัดจำ</span><b>฿${money(e.deposit_amount)}</b></div><div class="mt-3 flex justify-between text-sm"><span>ส่วนที่เหลือ</span><b>฿${money(e.balance_amount)}</b></div><div class="mt-4 pt-3 border-t flex justify-between"><span class="font-bold">รวมต่อคน</span><b class="text-teal-700">฿${money(Number(e.deposit_amount)+Number(e.balance_amount))}</b></div></section></div>
  <section class="camp-card p-5 mt-5"><div class="flex flex-wrap items-end justify-between gap-3"><div><h3 class="font-bold">ค้นหาและกรองรายชื่อ</h3><p id="overview-filter-count" class="text-xs text-gray-400 mt-1"></p></div><div class="grid sm:grid-cols-3 gap-2 w-full lg:w-auto"><select id="overview-grade" class="camp-input"><option value="">ทุกระดับชั้น</option>${grades.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('')}</select><select id="overview-room" class="camp-input"><option value="">ทุกห้อง</option>${rooms.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('')}</select><input id="overview-search" class="camp-input" placeholder="ค้นหาอะไรก็เจอ"></div></div><div id="overview-list" class="space-y-2 mt-4"></div></section>`
  const draw=()=>{const grade=document.getElementById('overview-grade').value,room=document.getElementById('overview-room').value,q=document.getElementById('overview-search').value.trim().toLowerCase();const filtered=people.filter(({s,r,p,grade:g,room:rm})=>{const haystack=[s?.student_code,s?.full_name,s?.main_room,s?.religion_room,s?.gender,r?.nickname,r?.thai_name,r?.english_name,r?.passport_number,r?.nationality,r?.blood_group,r?.phone,r?.shirt_size,r?.medical_conditions,r?.current_address,p.deposit?'ชำระมัดจำแล้ว':'ยังไม่ชำระมัดจำ',p.balance?'ชำระครบแล้ว':'ยังไม่ชำระส่วนที่เหลือ',r?'กรอกแบบสำรวจแล้ว':'ยังไม่กรอกแบบสำรวจ'].join(' ').toLowerCase();return(!grade||g===grade)&&(!room||rm===room)&&(!q||haystack.includes(q))});document.getElementById('overview-filter-count').textContent=`แสดง ${filtered.length} จาก ${people.length} คน`;document.getElementById('overview-list').innerHTML=filtered.map(({s,r,p})=>`<article class="rounded-xl border border-gray-100 p-3 flex items-center gap-3">${studentAvatar(s,'w-10 h-14')}<div class="flex-1 min-w-0"><b class="text-sm">${esc(s?.full_name)}</b><p class="text-xs text-gray-400">${esc(s?.student_code)} · ${esc(s?.main_room||'—')} · ${esc(s?.gender||'ไม่ระบุเพศ')}</p><div class="flex flex-wrap gap-1.5 mt-2 sm:hidden"><span class="px-2 py-1 rounded-lg text-[11px] font-bold ${r?'bg-emerald-100 text-emerald-700':'bg-amber-100 text-amber-700'}">${r?'กรอกแล้ว':'รอกรอก'}</span><span class="px-2 py-1 rounded-lg text-[11px] font-bold ${p.deposit?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">${p.deposit?'มัดจำแล้ว':'ยังไม่มีมัดจำ'}</span><span class="px-2 py-1 rounded-lg text-[11px] font-bold ${p.balance?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">${p.balance?'ชำระครบ':'ยังไม่ครบ'}</span></div></div><div class="hidden sm:flex flex-wrap gap-1.5"><span class="px-2 py-1 rounded-lg text-[11px] font-bold ${r?'bg-emerald-100 text-emerald-700':'bg-amber-100 text-amber-700'}">${r?'กรอกแล้ว':'รอกรอก'}</span><span class="px-2 py-1 rounded-lg text-[11px] font-bold ${p.deposit?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">${p.deposit?'มัดจำแล้ว':'ยังไม่มีมัดจำ'}</span><span class="px-2 py-1 rounded-lg text-[11px] font-bold ${p.balance?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">${p.balance?'ชำระครบ':'ยังไม่ครบ'}</span></div></article>`).join('')||'<div class="text-center py-12 text-gray-400">ไม่พบข้อมูลที่ค้นหา</div>'}
  ;['overview-grade','overview-room'].forEach(id=>document.getElementById(id).addEventListener('change',draw));document.getElementById('overview-search').addEventListener('input',draw);draw()
  document.getElementById('refresh-manager').addEventListener('click',()=>loadManager())
}

function renderParticipants(){
  const {students,participants,regs,payments}=maps()
  const rows=participantDemographics([...participants.keys()].map(studentId=>({s:students.get(studentId),r:regs.get(studentId),p:payments.get(studentId)||{}})))
  content.innerHTML=`<div class="flex flex-wrap items-center justify-between gap-3 mb-4"><div><h2 class="text-xl font-bold">รายชื่อนักเรียนเข้าร่วมค่าย</h2><p class="text-xs text-gray-400">เพิ่มรหัสได้หลายรายการ โดยคั่นด้วยเว้นวรรค จุลภาค หรือขึ้นบรรทัดใหม่</p></div><button id="print-student-roster" class="camp-btn bg-white border border-teal-200 text-teal-700">🖨️ พิมพ์ใบรายชื่อนักเรียน</button></div>
  ${access.can_settings?`<section class="camp-card p-5 mb-5"><div class="mb-4"><label><span class="camp-label">🔎 ค้นหานักเรียนจากฐานข้อมูล</span><input id="participant-add-search" class="camp-input" autocomplete="off" placeholder="ค้นหาอะไรก็เจอ เช่น ชื่อบางส่วน รหัส ห้องสามัญ หรือห้องศาสนา"></label><div id="participant-add-search-results" class="hidden mt-2 max-h-72 overflow-y-auto rounded-xl border bg-white divide-y shadow-lg"></div><p class="text-[11px] text-gray-400 mt-1">คลิกชื่อนักเรียนเพื่อเติมรหัสลงในรายการด้านล่าง</p></div><label><span class="camp-label">รหัสนักเรียนที่เลือกหรือกรอกเอง</span><textarea id="participant-codes" class="camp-input font-mono" rows="5" placeholder="เช่น&#10;25944&#10;25945&#10;25946"></textarea></label><div class="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-700 mt-3">ปุ่มบันทึกมัดจำจะสร้างใบเสร็จ 1,000 บาทให้โดยอัตโนมัติ จึงต้องตั้งชื่อและลายเซ็นผู้อำนวยการ รวมถึงลายเซ็นครูผู้ลงนามให้เรียบร้อยก่อน</div><div class="grid sm:grid-cols-2 gap-3 mt-4"><button id="add-participants-paid" class="camp-btn bg-teal-700 text-white py-3">💰 เพิ่มรายชื่อ + บันทึกมัดจำแล้ว</button><button id="add-participants-only" class="camp-btn border border-teal-200 text-teal-700 py-3">👥 เพิ่มเฉพาะรายชื่อ</button></div><div id="participant-result" class="hidden mt-4 rounded-xl p-3 text-sm"></div></section>`:''}
  <div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div><b>เพิ่มแล้ว ${rows.length} คน</b><span id="participant-count" class="text-xs text-gray-400 ml-2">กรอกแบบสำรวจ ${rows.filter(x=>x.r).length} คน</span></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full lg:w-auto"><select id="participant-grade" class="camp-input"><option value="">ทุกระดับชั้น</option>${[...new Set(rows.map(x=>x.grade))].sort((a,b)=>a.localeCompare(b,'th',{numeric:true})).map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('')}</select><select id="participant-room" class="camp-input"><option value="">ทุกห้อง</option>${[...new Set(rows.map(x=>x.room))].sort((a,b)=>a.localeCompare(b,'th',{numeric:true})).map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('')}</select><select id="participant-survey" class="camp-input"><option value="">แบบสำรวจ: ทั้งหมด</option><option value="filled">กรอกแล้ว</option><option value="notfilled">ยังไม่กรอก</option></select><select id="participant-deposit" class="camp-input"><option value="">มัดจำ: ทั้งหมด</option><option value="paid">ชำระแล้ว</option><option value="unpaid">ยังไม่ชำระ</option></select><select id="participant-balance" class="camp-input"><option value="">ส่วนที่เหลือ: ทั้งหมด</option><option value="paid">ชำระแล้ว</option><option value="unpaid">ยังไม่ชำระ</option></select><input id="participant-search" class="camp-input" placeholder="ค้นหาอะไรก็เจอ"></div></div><div id="participant-list" class="space-y-3"></div>`
  const draw=()=>{const q=document.getElementById('participant-search').value.trim().toLowerCase(),grade=document.getElementById('participant-grade').value,room=document.getElementById('participant-room').value,survey=document.getElementById('participant-survey').value,deposit=document.getElementById('participant-deposit').value,balance=document.getElementById('participant-balance').value;const filtered=rows.filter(({s,r,p,grade:g,room:rm})=>{const haystack=[s?.student_code,s?.full_name,s?.main_room,s?.religion_room,s?.gender,r?.nickname,r?.thai_name,r?.english_name,r?.phone,r?.shirt_size,r?.medical_conditions,p.deposit?'มัดจำแล้ว':'ยังไม่มีมัดจำ',r?'กรอกแล้ว':'รอกรอก'].join(' ').toLowerCase();return(!grade||g===grade)&&(!room||rm===room)&&(!survey||(survey==='filled'?!!r:!r))&&(!deposit||(deposit==='paid'?!!p.deposit:!p.deposit))&&(!balance||(balance==='paid'?!!p.balance:!p.balance))&&(!q||haystack.includes(q))});document.getElementById('participant-count').textContent=`แสดง ${filtered.length} คน · กรอกแบบสำรวจ ${filtered.filter(x=>x.r).length} คน`;document.getElementById('participant-list').innerHTML=filtered.map(({s,r,p})=>`<article class="camp-card p-4 flex items-center gap-3">${studentAvatar(s)}<div class="flex-1 min-w-0"><b class="block truncate">${esc(s?.full_name)}</b><p class="text-xs text-gray-400">${esc(s?.student_code)} · ${esc(s?.main_room||'—')} · ${esc(s?.gender||'ไม่ระบุเพศ')}</p><div class="flex flex-wrap gap-2 mt-2"><span class="px-2 py-1 rounded-lg text-xs font-bold ${r?'bg-emerald-100 text-emerald-700':'bg-amber-100 text-amber-700'}">${r?'กรอกข้อมูลแล้ว':'รอกรอกข้อมูล'}</span><span class="px-2 py-1 rounded-lg text-xs font-bold ${p.deposit?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">${p.deposit?'มัดจำแล้ว':'ยังไม่มีมัดจำ'}</span></div></div>${access.can_settings?`<button type="button" data-remove-participant="${s.id}" data-remove-name="${esc(s.full_name)}" class="camp-btn bg-red-50 text-red-600 hover:bg-red-100 py-2 px-3 flex-shrink-0" title="ลบออกจากรายชื่อค่าย">🗑️ <span class="hidden sm:inline">ลบ</span></button>`:''}</article>`).join('')||'<div class="text-center py-16 text-gray-400">ไม่พบรายชื่อนักเรียน</div>';document.querySelectorAll('[data-remove-participant]').forEach(btn=>btn.addEventListener('click',async()=>{const name=btn.dataset.removeName;if(!confirm(`ยืนยันลบ ${name} ออกจากรายชื่อผู้เข้าร่วมค่าย?\n\nข้อมูลแบบสำรวจและประวัติใบเสร็จเดิมจะยังถูกเก็บไว้เพื่อการตรวจสอบ`))return;btn.disabled=true;btn.textContent='กำลังลบ...';try{await removeTerangganuParticipant(Number(btn.dataset.removeParticipant));toast(`ลบ ${name} ออกจากรายชื่อแล้ว`);await loadManager(true)}catch(error){toast(error.message||'ลบรายชื่อไม่สำเร็จ','error');btn.disabled=false;btn.textContent='🗑️ ลบ'}}))}
  draw();document.getElementById('participant-search').addEventListener('input',draw);['participant-grade','participant-room','participant-survey','participant-deposit','participant-balance'].forEach(id=>document.getElementById(id).addEventListener('change',draw))
  const addSearch=document.getElementById('participant-add-search'),addResults=document.getElementById('participant-add-search-results'),codesBox=document.getElementById('participant-codes')
  const addCode=code=>{const current=codesBox.value.split(/[\s,;]+/).map(v=>v.trim()).filter(Boolean);if(!current.includes(String(code)))current.push(String(code));codesBox.value=current.join('\n');codesBox.dispatchEvent(new Event('input'));addSearch.value='';addResults.classList.add('hidden');addSearch.focus()}
  addSearch?.addEventListener('input',()=>{const q=addSearch.value.trim().toLowerCase();if(q.length<2){addResults.classList.add('hidden');return}const found=[...students.values()].filter(s=>!participants.has(Number(s.id))&&[s.student_code,s.full_name,s.main_room,s.religion_room,s.gender].join(' ').toLowerCase().includes(q)).slice(0,20);addResults.innerHTML=found.map(s=>`<button type="button" data-add-student-code="${esc(s.student_code)}" class="w-full text-left p-3 hover:bg-teal-50 flex items-center gap-3">${studentAvatar(s,'w-9 h-12')}<span class="flex-1 min-w-0"><b class="text-sm block truncate">${esc(s.full_name)}</b><span class="block text-xs text-gray-400">${esc(s.student_code)} · ${esc(s.main_room||'—')} · ศาสนา ${esc(s.religion_room||'—')}</span></span><span class="text-xs font-bold text-teal-700">+ เลือก</span></button>`).join('')||'<div class="p-4 text-sm text-center text-gray-400">ไม่พบนักเรียนที่ตรงกับคำค้น</div>';addResults.classList.remove('hidden');addResults.querySelectorAll('[data-add-student-code]').forEach(btn=>btn.addEventListener('click',()=>addCode(btn.dataset.addStudentCode)))})
  const add=async markPaid=>{const codes=document.getElementById('participant-codes').value,buttons=[document.getElementById('add-participants-paid'),document.getElementById('add-participants-only')];if(!codes.trim()){toast('กรุณากรอกรหัสนักเรียน','warning');return}buttons.forEach(x=>x.disabled=true);try{const result=await addTerangganuParticipants(codes,markPaid),missing=result.missing_codes||[],box=document.getElementById('participant-result');box.className=`mt-4 rounded-xl p-3 text-sm ${missing.length?'bg-amber-50 text-amber-700':'bg-emerald-50 text-emerald-700'}`;box.innerHTML=`พบ ${Number(result.matched_count||0)} คน · เพิ่มใหม่ ${Number(result.new_participants||0)} คน${markPaid?` · บันทึกมัดจำ ${Number(result.payments_added||0)} คน`:''}${missing.length?`<br>ไม่พบรหัส: ${missing.map(esc).join(', ')}`:''}`;toast(`เพิ่มรายชื่อแล้ว ${Number(result.matched_count||0)} คน${missing.length?` · ไม่พบ ${missing.length} รหัส`:''}`,missing.length?'warning':'success');setTimeout(()=>loadManager(true),missing.length?5000:1800)}catch(error){toast(error.message||'เพิ่มรายชื่อไม่สำเร็จ','error');buttons.forEach(x=>x.disabled=false)}}
  document.getElementById('add-participants-paid')?.addEventListener('click',()=>add(true));document.getElementById('add-participants-only')?.addEventListener('click',()=>add(false))
  document.getElementById('print-student-roster').addEventListener('click',()=>openRosterPrint('student',rows))
}

function teacherMaps(){
  const teachers=new Map((ctx.teachers||[]).map(t=>[Number(t.id),t]))
  const participants=new Map((ctx.teacher_participants||[]).map(p=>[Number(p.teacher_id),p]))
  const regs=new Map((ctx.teacher_registrations||[]).map(r=>[Number(r.teacher_id),r]))
  return {teachers,participants,regs}
}

function renderTeacherParticipants(){
  const {teachers,participants,regs}=teacherMaps(),rows=[...participants.keys()].map(id=>({t:teachers.get(id),r:regs.get(id)})).sort((a,b)=>(a.t?.full_name||'').localeCompare(b.t?.full_name||'','th'))
  const selected=new Set()
  content.innerHTML=`<div class="flex flex-wrap items-center justify-between gap-3 mb-4"><div><h2 class="text-xl font-bold">รายชื่อครูร่วมค่าย</h2><p class="text-xs text-gray-400">ใช้ข้อมูลครูจากฐานข้อมูล PP5 และให้ครูเข้ามากรอกข้อมูลการเดินทางเพิ่มเติมด้วยตนเอง</p></div><button id="print-teacher-roster" class="camp-btn bg-white border border-teal-200 text-teal-700">🖨️ พิมพ์ใบรายชื่อครู</button></div>
  ${access.can_settings?`<section class="camp-card p-5 mb-5"><label><span class="camp-label">ค้นหาครูจากชื่อ รหัส ฝ่าย หรือตำแหน่ง</span><input id="teacher-add-search" class="camp-input" placeholder="ค้นหาอะไรก็เจอ"></label><div id="teacher-add-results" class="mt-3 max-h-72 overflow-y-auto divide-y rounded-xl border"></div><div class="flex items-center justify-between gap-3 mt-4"><p class="text-xs text-gray-500">เลือกแล้ว <b id="teacher-selected-count">0</b> คน</p><button id="add-teachers" class="camp-btn bg-teal-700 text-white">+ เพิ่มครูที่เลือก</button></div></section>`:''}
  <div class="flex flex-wrap items-center justify-between gap-3 mb-3"><b>เพิ่มแล้ว ${rows.length} คน · กรอกแบบสำรวจ ${rows.filter(x=>x.r).length} คน</b><input id="teacher-participant-search" class="camp-input w-full sm:w-72" placeholder="ค้นหาอะไรก็เจอ"></div><div id="teacher-participant-list" class="space-y-3"></div>`
  const drawRows=()=>{const q=document.getElementById('teacher-participant-search').value.trim().toLowerCase(),filtered=rows.filter(({t,r})=>[t?.teacher_code,t?.full_name,t?.dept,t?.subject_group,t?.position,t?.phone,r?.nickname,r?.english_name,r?.shirt_size].join(' ').toLowerCase().includes(q));document.getElementById('teacher-participant-list').innerHTML=filtered.map(({t,r})=>`<article class="camp-card p-4 flex items-center gap-3">${studentAvatar(t)}<div class="flex-1 min-w-0"><b class="block truncate">${esc(t?.full_name)}</b><p class="text-xs text-gray-400">${esc(t?.teacher_code||'—')} · ${esc(t?.position||t?.dept||t?.subject_group||'ครู')}</p><div class="flex flex-wrap gap-2 mt-2"><span class="px-2 py-1 rounded-lg text-xs font-bold ${r?'bg-emerald-100 text-emerald-700':'bg-amber-100 text-amber-700'}">${r?'กรอกข้อมูลแล้ว':'รอกรอกข้อมูล'}</span>${t?.has_account?'':'<span class="px-2 py-1 rounded-lg text-xs bg-red-50 text-red-600">ยังไม่มีบัญชีเข้าใช้</span>'}</div></div>${access.can_settings?`<button data-remove-teacher="${t.id}" data-remove-name="${esc(t.full_name)}" class="camp-btn bg-red-50 text-red-600">🗑️ ลบ</button>`:''}</article>`).join('')||'<div class="text-center py-16 text-gray-400">ไม่พบรายชื่อครู</div>';document.querySelectorAll('[data-remove-teacher]').forEach(btn=>btn.addEventListener('click',async()=>{if(!confirm(`ยืนยันลบ ${btn.dataset.removeName} ออกจากรายชื่อครูร่วมค่าย?`))return;try{await removeTerangganuTeacherParticipant(btn.dataset.removeTeacher);toast('ลบรายชื่อครูแล้ว');await loadManager(true)}catch(error){toast(error.message||'ลบรายชื่อไม่สำเร็จ','error')}}))}
  drawRows();document.getElementById('teacher-participant-search').addEventListener('input',drawRows)
  const addSearch=document.getElementById('teacher-add-search'),addResults=document.getElementById('teacher-add-results'),drawChoices=()=>{if(!addResults)return;const q=(addSearch.value||'').trim().toLowerCase(),choices=[...teachers.values()].filter(t=>!participants.has(Number(t.id))&&(!q||[t.teacher_code,t.full_name,t.dept,t.subject_group,t.position,t.phone].join(' ').toLowerCase().includes(q))).slice(0,40);addResults.innerHTML=choices.map(t=>`<label class="p-3 flex items-center gap-3 cursor-pointer hover:bg-teal-50"><input type="checkbox" data-teacher-choice="${t.id}" class="w-5 h-5 accent-teal-700" ${selected.has(Number(t.id))?'checked':''}>${studentAvatar(t,'w-9 h-12')}<span class="flex-1"><b class="text-sm">${esc(t.full_name)}</b><span class="block text-xs text-gray-400">${esc(t.teacher_code||'—')} · ${esc(t.position||t.dept||t.subject_group||'ครู')}</span></span></label>`).join('')||'<p class="p-4 text-center text-sm text-gray-400">ไม่พบครู</p>';addResults.querySelectorAll('[data-teacher-choice]').forEach(input=>input.addEventListener('change',()=>{const id=Number(input.dataset.teacherChoice);input.checked?selected.add(id):selected.delete(id);document.getElementById('teacher-selected-count').textContent=selected.size}))}
  if(addSearch){addSearch.addEventListener('input',drawChoices);drawChoices();document.getElementById('add-teachers').addEventListener('click',async()=>{if(!selected.size){toast('กรุณาเลือกครูอย่างน้อย 1 คน','warning');return}try{const result=await addTerangganuTeacherParticipants([...selected]);toast(`เพิ่มครูแล้ว ${Number(result.added_count||0)} คน`);await loadManager(true)}catch(error){toast(error.message||'เพิ่มครูไม่สำเร็จ','error')}})}
  document.getElementById('print-teacher-roster').addEventListener('click',()=>openRosterPrint('teacher',rows))
}

function rosterSortKey(mainRoom,studentCode){
  const text=String(mainRoom||'').trim()
  const match=text.match(/(?:ม\.?\s*)?([1-6])\s*[\/.]\s*([0-9]+)/i)
  return [match?Number(match[1]):99,match?Number(match[2]):99,String(studentCode||'')]
}
function openRosterPrint(type,rows){
  const isStudent=type==='student',e=ctx.event||{},logo=e.receipt_logo_url
  const sortedRows=isStudent?[...rows].sort((a,b)=>{const ka=rosterSortKey(a.s?.main_room,a.s?.student_code),kb=rosterSortKey(b.s?.main_room,b.s?.student_code);return ka[0]-kb[0]||ka[1]-kb[1]||ka[2].localeCompare(kb[2],'th',{numeric:true})}):rows
  const body=isStudent?sortedRows.map(({s,r,p},i)=>`<tr><td>${i+1}</td><td>${esc(s?.student_code)}</td><td class="name">${esc(s?.full_name)}</td><td class="name">${esc(r?.english_name||'')}</td><td>${esc(r?.passport_number||'')}</td><td>${thaiDate(r?.birth_date)}</td><td>${esc(s?.main_room||'')}</td><td>${esc(s?.gender||'')}</td><td>${esc(r?.phone||'')}</td><td class="addr">${esc(r?.current_address||'')}</td><td>${esc(r?.shirt_size||'')}</td><td class="fee">มัดจำ ${p?.deposit?'✓':'✗'}<br>คงเหลือ ${p?.balance?'✓':'✗'}</td><td></td></tr>`).join(''):rows.map(({t,r},i)=>`<tr><td>${i+1}</td><td>${esc(t?.teacher_code||'')}</td><td class="name">${esc(t?.full_name)}</td><td>${esc(t?.position||t?.dept||t?.subject_group||'')}</td><td>${esc(r?.phone||t?.phone||'')}</td><td>${esc(r?.shirt_size||'')}</td><td class="check">${r?'✓':''}</td><td></td></tr>`).join('')
  const head=isStudent?'<th>ลำดับ</th><th>รหัส</th><th>ชื่อ-สกุล</th><th>ชื่อ-สกุลภาษาอังกฤษ</th><th>เลขบัตรประชาชน</th><th>วันเดือนปีเกิด</th><th>ชั้น</th><th>เพศ</th><th>โทรศัพท์ผู้ปกครอง</th><th>ที่อยู่</th><th>ไซซ์เสื้อ</th><th>ค่าค่าย</th><th>หมายเหตุ</th>':'<th>ลำดับ</th><th>รหัสครู</th><th>ชื่อ-สกุล</th><th>ฝ่าย/ตำแหน่ง</th><th>โทรศัพท์</th><th>ไซซ์เสื้อ</th><th>แบบสำรวจ</th><th>หมายเหตุ</th>'
  const w=window.open('','_blank');if(!w){toast('เบราว์เซอร์ปิดกั้นหน้าต่างพิมพ์','error');return}w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>ใบรายชื่อ${isStudent?'นักเรียน':'ครู'} TERANGGANU 2026</title><style>@page{size:A4 landscape;margin:8mm}*{box-sizing:border-box}body{font-family:Arial,'Sarabun',sans-serif;color:#111;margin:0;font-size:14px}.tools{text-align:center;margin-bottom:14px}.tools button{font-size:16px;font-weight:700;padding:10px 18px}.head{text-align:center}.logo{width:88px;height:88px;object-fit:contain;filter:grayscale(1);margin:auto}.head h1{font-size:23px;line-height:1.3;margin:5px}.head p{margin:4px;font-size:16px;font-weight:600}table{width:100%;border-collapse:collapse;margin-top:16px;font-size:13px;line-height:1.4}thead{display:table-header-group}tr{break-inside:avoid;page-break-inside:avoid}th,td{border:1.4px solid #111;padding:8px 6px;text-align:center;height:38px;vertical-align:middle}th{background:#e8e8e8;font-size:13px;font-weight:700;white-space:nowrap}.name{text-align:left;min-width:160px;font-weight:600}.addr{text-align:left;min-width:140px}.note{min-width:110px}.check{font-size:21px;font-weight:700}.fee{font-size:11.5px;font-weight:700;line-height:1.7}@media print{.tools{display:none}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}</style></head><body><div class="tools"><button onclick="window.print()">🖨️ พิมพ์ / บันทึก PDF</button></div><div class="head">${logo?`<img class="logo" src="${esc(logo)}">`:''}<h1>${esc(e.name||'ค่ายลูกเสือ TERANGGANU 2026')}</h1><p>ใบรายชื่อ${isStudent?'นักเรียน':'ครู'}ผู้เข้าร่วมกิจกรรม · จำนวน ${rows.length} คน</p></div><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></body></html>`);w.document.close()
}

function renderRegistrations() {
  const {students,participants,regs,payments}=maps()
  const rows=[...regs.values()].filter(r=>participants.has(Number(r.student_id))).map(r=>({r,s:students.get(Number(r.student_id)),p:payments.get(Number(r.student_id))||{}}))
  content.innerHTML=`<div class="flex flex-wrap gap-3 justify-between items-center mb-4"><div><h2 class="text-xl font-bold">แบบสำรวจนักเรียน</h2><p class="text-xs text-gray-400">ส่งแล้ว ${rows.length} คน</p></div><div class="flex gap-2"><input id="reg-search" class="camp-input w-56" placeholder="ค้นหาชื่อ/รหัส/ห้อง">${access.can_export?'<button id="reg-export" class="camp-btn bg-emerald-600 text-white">⬇ CSV</button>':''}</div></div><div id="reg-list" class="space-y-3"></div>`
  const draw=()=>{
    const q=document.getElementById('reg-search').value.trim().toLowerCase()
    const filtered=rows.filter(({r,s})=>`${s?.student_code} ${s?.full_name} ${s?.main_room} ${r.english_name}`.toLowerCase().includes(q))
    document.getElementById('reg-list').innerHTML=filtered.length?filtered.map(({r,s,p})=>`<article class="camp-card p-4 flex items-center gap-3">${studentAvatar(s)}<div class="flex-1 min-w-0"><div class="flex items-center gap-2"><b class="truncate">${esc(s?.full_name)}</b><span class="text-xs text-gray-400">${esc(s?.student_code)}</span></div><p class="text-xs text-gray-500 mt-1">${esc(s?.main_room||'—')} · ${esc(r.english_name)} · Passport ${esc(maskPassport(r.passport_number))} · เสื้อ ${esc(r.shirt_size)}</p><p class="text-xs ${r.medical_conditions==='ไม่มี'?'text-gray-400':'text-red-600 font-semibold'} mt-1">โรคประจำตัว: ${esc(r.medical_conditions)}</p><div class="flex flex-wrap gap-2 mt-2 sm:hidden"><span class="px-2 py-1 rounded-lg text-xs font-bold ${p.deposit?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">มัดจำ</span><span class="px-2 py-1 rounded-lg text-xs font-bold ${p.balance?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">ส่วนที่เหลือ</span><button data-detail="${r.student_id}" class="camp-btn bg-teal-50 text-teal-700 py-1">ดูข้อมูล</button></div></div><div class="hidden sm:flex gap-2"><span class="px-2 py-1 rounded-lg text-xs font-bold ${p.deposit?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">มัดจำ</span><span class="px-2 py-1 rounded-lg text-xs font-bold ${p.balance?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-400'}">ส่วนที่เหลือ</span><button data-detail="${r.student_id}" class="camp-btn bg-teal-50 text-teal-700 py-1">ดูข้อมูล</button></div></article>`).join(''):'<div class="text-center py-16 text-gray-400">ไม่พบข้อมูล</div>'
    document.querySelectorAll('[data-detail]').forEach(btn=>btn.addEventListener('click',()=>showRegistrationDetail(Number(btn.dataset.detail))))
  }
  draw();document.getElementById('reg-search').addEventListener('input',draw);document.getElementById('reg-export')?.addEventListener('click',exportRegistrations)
}

function showRegistrationDetail(studentId) {
  const {students,regs}=maps(),s=students.get(studentId),r=regs.get(studentId)
  modal(`<div class="p-6"><div class="flex justify-between gap-3"><div class="flex items-center gap-3">${studentAvatar(s)}<div><h3 class="font-bold text-lg">${esc(s?.full_name)}</h3><p class="text-xs text-gray-400">${esc(s?.student_code)} · ${esc(s?.main_room)}</p></div></div><button data-close>✕</button></div><div class="grid sm:grid-cols-2 gap-3 mt-5 text-sm">${detail('ชื่อเล่น',r.nickname)}${detail('ชื่ออังกฤษ',r.english_name)}${detail('เพศ',s.gender)}${detail('วันเกิด',thaiDate(r.birth_date))}${detail('สัญชาติ',r.nationality)}${detail('กรุ๊ปเลือด',r.blood_group)}${detail('เลขหนังสือเดินทาง',r.passport_number)}${detail('หมดอายุ',thaiDate(r.passport_expiry))}${detail('เบอร์โทรศัพท์ผู้ปกครอง',r.phone)}${detail('ไซซ์เสื้อ',r.shirt_size)}<div class="sm:col-span-2">${detail('ที่อยู่',r.current_address)}</div><div class="sm:col-span-2">${detail('โรคประจำตัว',r.medical_conditions)}</div></div></div>`)
}
function detail(label,value){return `<div class="bg-gray-50 rounded-xl p-3"><p class="text-[11px] text-gray-400">${label}</p><p class="font-semibold mt-1">${esc(value||'—')}</p></div>`}

function exportRegistrations(){
  const {students,participants,regs,payments}=maps();const bom='\ufeff';const headers=['รหัสนักเรียน','ชื่อไทย','ชื่ออังกฤษ','ห้อง','เพศ','ชื่อเล่น','เลขหนังสือเดินทาง','วันหมดอายุ','วันเกิด','สัญชาติ','กรุ๊ปเลือด','เบอร์โทรศัพท์ผู้ปกครอง','ไซซ์เสื้อ','โรคประจำตัว','ที่อยู่','มัดจำ','ส่วนที่เหลือ']
  const quote=v=>`"${String(v??'').replace(/"/g,'""')}"`;const lines=[headers,...[...regs.values()].filter(r=>participants.has(Number(r.student_id))).map(r=>{const s=students.get(Number(r.student_id)),p=payments.get(Number(r.student_id))||{};return[s?.student_code,s?.full_name,r.english_name,s?.main_room,s?.gender,r.nickname,r.passport_number,r.passport_expiry,r.birth_date,r.nationality,r.blood_group,r.phone,r.shirt_size,r.medical_conditions,r.current_address,p.deposit?'ชำระแล้ว':'',p.balance?'ชำระแล้ว':'']})].map(row=>row.map(quote).join(','))
  const url=URL.createObjectURL(new Blob([bom+lines.join('\n')],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='TERANGGANU2026_ข้อมูลผู้เข้าร่วม.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)
}

function renderPayments() {
  const {students,participants,regs,payments}=maps(), e=ctx.event||{}
  const studentIds=new Set(participants.keys())
  const rows=[...studentIds].map(studentId=>({r:regs.get(studentId),s:students.get(studentId),p:payments.get(studentId)||{}}))
  const selected=new Set();let visibleRows=rows
  content.innerHTML=`<div class="flex flex-wrap gap-3 justify-between items-center mb-4"><div><h2 class="text-xl font-bold">รับชำระเงิน</h2><p class="text-xs text-gray-400">เลือกหลายคนและบันทึกเงินสดหรือเงินโอนพร้อมกันได้ ระบบสร้างใบเสร็จแยกทุกคน</p></div><input id="pay-search" class="camp-input w-64" placeholder="ค้นหาอะไรก็เจอ"></div><section class="camp-card p-4 mb-4 sticky top-0 z-10"><div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"><label><span class="camp-label">งวดที่รับชำระ</span><select id="bulk-pay-type" class="camp-input"><option value="deposit">ค่ามัดจำ ฿${money(e.deposit_amount)}</option><option value="balance">ส่วนที่เหลือ ฿${money(e.balance_amount)}</option></select></label><label><span class="camp-label">วิธีชำระ</span><select id="bulk-pay-method" class="camp-input"><option value="cash">เงินสด</option><option value="transfer">โอนเงิน</option><option value="other">อื่น ๆ</option></select></label><label class="lg:col-span-2"><span class="camp-label">หมายเหตุร่วม</span><input id="bulk-pay-note" class="camp-input" placeholder="ไม่บังคับ"></label><button id="bulk-pay-save" class="camp-btn bg-teal-700 text-white py-3">บันทึกที่เลือก <span id="bulk-pay-count">0</span> คน</button></div><div class="flex flex-wrap gap-2 mt-3"><button id="bulk-select-visible" class="camp-btn bg-teal-50 text-teal-700 py-1.5">เลือกทั้งหมดที่ค้นพบ</button><button id="bulk-clear-selected" class="camp-btn bg-gray-100 text-gray-600 py-1.5">ล้างที่เลือก</button><span class="text-xs text-gray-400 self-center">รายการที่ชำระงวดนั้นแล้วจะถูกข้ามอัตโนมัติ</span></div></section><div id="pay-list" class="space-y-3"></div>`
  const updateCount=()=>{document.getElementById('bulk-pay-count').textContent=selected.size}
  const draw=()=>{const q=document.getElementById('pay-search').value.trim().toLowerCase();visibleRows=rows.filter(({s,r})=>[s?.student_code,s?.full_name,s?.main_room,s?.religion_room,s?.gender,r?.nickname,r?.english_name].join(' ').toLowerCase().includes(q));document.getElementById('pay-list').innerHTML=visibleRows.map(({s,p})=>`<article class="camp-card p-4 ${selected.has(Number(s.id))?'ring-2 ring-teal-500':''}"><div class="flex flex-col lg:flex-row lg:items-center gap-3"><label class="flex items-center gap-3 flex-1 cursor-pointer"><input data-bulk-student="${s.id}" type="checkbox" class="w-5 h-5 accent-teal-700">${studentAvatar(s)}<span><b>${esc(s?.full_name)}</b><span class="block text-xs text-gray-400">${esc(s?.student_code)} · ${esc(s?.main_room)} · ${esc(s?.gender||'—')}</span></span></label>${installmentButtons(s,p.deposit,'deposit','มัดจำ',e.deposit_amount)}${installmentButtons(s,p.balance,'balance','ส่วนที่เหลือ',e.balance_amount)}</div></article>`).join('')||'<div class="text-center py-16 text-gray-400">ไม่พบข้อมูล</div>';document.querySelectorAll('[data-bulk-student]').forEach(input=>{input.checked=selected.has(Number(input.dataset.bulkStudent));input.addEventListener('change',()=>{const id=Number(input.dataset.bulkStudent);input.checked?selected.add(id):selected.delete(id);updateCount();draw()})});bindPaymentButtons();updateCount()}
  draw();document.getElementById('pay-search').addEventListener('input',draw);document.getElementById('bulk-select-visible').addEventListener('click',()=>{visibleRows.forEach(({s})=>selected.add(Number(s.id)));draw()});document.getElementById('bulk-clear-selected').addEventListener('click',()=>{selected.clear();draw()});document.getElementById('bulk-pay-save').addEventListener('click',async()=>{if(!selected.size){toast('กรุณาเลือกนักเรียนอย่างน้อย 1 คน','warning');return}const type=document.getElementById('bulk-pay-type').value,method=document.getElementById('bulk-pay-method').value,note=document.getElementById('bulk-pay-note').value,label=type==='deposit'?'ค่ามัดจำ':'ส่วนที่เหลือ',methodLabel=method==='cash'?'เงินสด':method==='transfer'?'โอนเงิน':'อื่น ๆ';if(!confirm(`ยืนยันรับชำระ${label}แบบ${methodLabel} จำนวน ${selected.size} คน\nระบบจะสร้างใบเสร็จแยกให้นักเรียนทุกคน`))return;const btn=document.getElementById('bulk-pay-save');btn.disabled=true;btn.textContent='กำลังบันทึก...';try{const result=await recordTerangganuPaymentsBulk([...selected],type,method,note);toast(`บันทึกสำเร็จ ${Number(result.added_count||0)} คน${Number(result.skipped_count||0)?` · ข้ามที่ชำระแล้ว ${Number(result.skipped_count)} คน`:''}`);await loadManager(true)}catch(error){toast(error.message||'บันทึกรับชำระไม่สำเร็จ','error');btn.disabled=false;btn.innerHTML=`บันทึกที่เลือก <span id="bulk-pay-count">${selected.size}</span> คน`}})
}

function installmentButtons(student,payment,type,label,amount){const unpaidColor=type==='deposit'?'bg-amber-500 hover:bg-amber-600':'bg-indigo-600 hover:bg-indigo-700',paidColor=type==='deposit'?'bg-amber-50 text-amber-700':'bg-indigo-50 text-indigo-700';return payment?`<div class="min-w-[180px] rounded-xl ${paidColor} p-3"><p class="text-xs font-bold">✅ ${label} ฿${money(amount)}</p><div class="flex gap-2 mt-2"><button data-receipt="${payment.id}" class="text-xs underline">ใบเสร็จ</button><button data-void="${payment.id}" class="text-xs text-red-500 underline">ยกเลิก</button></div></div>`:`<button data-pay-student="${student.id}" data-pay-type="${type}" data-pay-label="${label}" class="camp-btn min-w-[180px] ${unpaidColor} text-white">รับ${label} ฿${money(amount)}</button>`}

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
  <section class="camp-card p-5 mb-4"><h3 class="font-bold">การเปิดใช้งาน</h3><div class="grid sm:grid-cols-2 gap-3 mt-4"><div class="rounded-xl border p-4"><p class="text-sm font-semibold">ปุ่มในหน้าภาพรวมนักเรียน</p><p class="text-xs text-gray-400 mt-1">สถานะ: ${e.visible_to_students?'เปิดใช้งาน':'ปิดใช้งาน'}</p><button data-toggle-visible="${!e.visible_to_students}" class="camp-btn mt-3 ${e.visible_to_students?'bg-red-50 text-red-600':'bg-emerald-600 text-white'}">${e.visible_to_students?'ปิดใช้งาน':'เปิดใช้งาน'}</button></div><div class="rounded-xl border p-4"><p class="text-sm font-semibold">รับแบบสำรวจ</p><p class="text-xs text-gray-400 mt-1">สถานะ: ${e.form_open?'เปิดรับข้อมูล':'ปิดรับข้อมูล'}</p><button data-toggle-form="${!e.form_open}" class="camp-btn mt-3 ${e.form_open?'bg-red-50 text-red-600':'bg-emerald-600 text-white'}">${e.form_open?'ปิดรับข้อมูล':'เปิดรับข้อมูล'}</button></div><div class="sm:col-span-2 rounded-xl border p-4"><p class="text-sm font-semibold">นักเรียนที่เห็นปุ่มค่าย</p><p class="text-xs text-gray-400 mt-1">ปัจจุบัน: ${e.student_visibility_scope==='all'?'นักเรียนทั้งโรง':'เฉพาะนักเรียนที่ถูกเพิ่มในระบบค่าย'}</p><div class="flex flex-wrap gap-2 mt-3"><button data-visibility-scope="participants" class="camp-btn ${e.student_visibility_scope!=='all'?'bg-teal-700 text-white':'bg-gray-100 text-gray-600'}">เฉพาะรายชื่อที่เพิ่ม</button><button data-visibility-scope="all" class="camp-btn ${e.student_visibility_scope==='all'?'bg-teal-700 text-white':'bg-gray-100 text-gray-600'}">นักเรียนทั้งโรง</button></div></div></div></section>
  <form id="camp-settings-form" class="camp-card p-5 grid sm:grid-cols-2 gap-4">
    ${field('name','ชื่อกิจกรรม',e.name,'text',true,true)}${field('location','สถานที่',e.location)}
    ${field('event_start_date','วันเริ่มกิจกรรม',e.event_start_date,'date')}${field('event_end_date','วันสิ้นสุดกิจกรรม',e.event_end_date,'date')}
    ${field('form_open_at','วันเวลาเปิดแบบสำรวจ',inputDateTime(e.form_open_at),'datetime-local')}${field('form_close_at','วันเวลาปิดแบบสำรวจ',inputDateTime(e.form_close_at),'datetime-local')}
    ${field('deposit_amount','ค่ามัดจำ',e.deposit_amount,'number',true,true)}${field('balance_amount','ส่วนที่เหลือ',e.balance_amount,'number',true,true)}
    ${field('deposit_due_date','กำหนดชำระมัดจำ',e.deposit_due_date,'date')}${field('balance_due_date','กำหนดชำระส่วนที่เหลือ',e.balance_due_date,'date')}
    ${field('receipt_prefix','คำนำหน้าเลขที่ใบเสร็จ',e.receipt_prefix,'text',true,true)}
    <label><span class="camp-label">ครูผู้ลงนามในใบเสร็จ</span><select id="receipt-teacher-select" name="receipt_teacher_id" class="camp-input"><option value="">เลือกครูผู้รับผิดชอบ</option>${staff.filter(x=>x.active).map(x=>`<option value="${x.teacher_id}" ${Number(e.receipt_teacher_id)===Number(x.teacher_id)?'selected':''}>${esc(x.display_name||x.full_name)}</option>`).join('')}</select></label>
    <div id="receipt-teacher-signature" class="sm:col-span-2"></div>
    <div class="sm:col-span-2 rounded-xl bg-gray-50 p-4"><p class="camp-label">โลโก้โรงเรียนขาวดำบนใบเสร็จและใบรายชื่อ</p><div class="flex flex-col sm:flex-row sm:items-center gap-3">${e.receipt_logo_url?`<img src="${esc(e.receipt_logo_url)}" class="h-24 w-24 object-contain bg-white grayscale">`:'<div class="h-24 w-24 rounded-lg border border-dashed flex items-center justify-center text-xs text-gray-400 bg-white text-center">ยังไม่มี<br>โลโก้</div>'}<div class="flex-1"><input id="receipt-logo-file" type="file" accept="image/*" class="text-xs"><button id="upload-receipt-logo" type="button" class="camp-btn bg-gray-800 text-white mt-2">⬆ อัปโหลดโลโก้</button><p class="text-[11px] text-gray-400 mt-2">ระบบจะแสดงเป็นขาวดำบนเอกสารโดยอัตโนมัติ</p></div></div></div>
    <label class="sm:col-span-2"><span class="camp-label">รายละเอียดกิจกรรม</span><textarea name="details" class="camp-input" rows="3">${esc(e.details||'')}</textarea></label>
    ${field('director_name','ชื่อผู้อำนวยการ',e.director_name)}${field('director_title','ตำแหน่งผู้อำนวยการ',e.director_title)}
    <div class="sm:col-span-2 rounded-xl bg-gray-50 p-4"><p class="camp-label">ลายเซ็นผู้อำนวยการ</p><div class="flex flex-col sm:flex-row sm:items-center gap-3">${e.director_signature_url?`<img src="${esc(e.director_signature_url)}" class="h-20 max-w-56 object-contain bg-white rounded-lg border p-1">`:'<div class="h-20 w-44 rounded-lg border border-dashed flex items-center justify-center text-xs text-gray-400 bg-white">ยังไม่มีลายเซ็น</div>'}<div><p class="text-xs text-gray-500 mb-2">สามารถวาดบนหน้าจอหรืออัปโหลดไฟล์ภาพได้</p><button id="edit-director-sign" type="button" class="camp-btn bg-indigo-50 text-indigo-700">✍️ เขียน / อัปโหลดลายเซ็น</button></div></div></div>
    <button class="sm:col-span-2 camp-btn bg-teal-700 text-white py-3">💾 บันทึกการตั้งค่า</button>
  </form>`
  document.querySelector('[data-toggle-visible]').addEventListener('click',async e=>{await quickSetting({visible_to_students:e.currentTarget.dataset.toggleVisible==='true'})})
  document.querySelector('[data-toggle-form]').addEventListener('click',async e=>{await quickSetting({form_open:e.currentTarget.dataset.toggleForm==='true'})})
  document.querySelectorAll('[data-visibility-scope]').forEach(btn=>btn.addEventListener('click',async e=>{await quickSetting({student_visibility_scope:e.currentTarget.dataset.visibilityScope})}))
  document.getElementById('camp-settings-form').addEventListener('submit',saveSettings)
  const teacherSelect=document.getElementById('receipt-teacher-select')
  const drawReceiptTeacherSignature=()=>{
    const teacherId=Number(teacherSelect.value||0),st=staff.find(x=>Number(x.teacher_id)===teacherId),box=document.getElementById('receipt-teacher-signature')
    if(!st){box.innerHTML='<div class="rounded-xl border border-dashed p-4 text-xs text-gray-400">เลือกครูผู้ลงนามเพื่อดูหรือเพิ่มลายเซ็น</div>';return}
    const isOwner=Number(access.teacher_id)===teacherId
    box.innerHTML=`<div class="rounded-xl border bg-indigo-50/40 p-4"><p class="camp-label">ลายเซ็นครูผู้ลงนามในใบเสร็จ</p><div class="flex flex-col sm:flex-row sm:items-center gap-3">${st.signature_url?`<img src="${esc(st.signature_url)}" class="h-20 max-w-56 object-contain bg-white rounded-lg border p-1">`:'<div class="h-20 w-44 rounded-lg border border-dashed flex items-center justify-center text-xs text-gray-400 bg-white">ยังไม่มีลายเซ็น</div>'}<div class="flex-1"><p class="text-sm font-bold">${esc(st.display_name||st.full_name)}</p><p class="text-xs text-gray-500 mt-1">${esc(st.title||'ครูผู้รับผิดชอบ')}</p>${isOwner?`<button id="edit-receipt-teacher-sign" type="button" class="camp-btn bg-indigo-600 text-white mt-3">✍️ เขียน / อัปโหลดลายเซ็นของฉัน</button>`:`<p class="text-xs text-amber-700 mt-3">ลายเซ็นต้องบันทึกโดยครูเจ้าของบัญชี (${esc(st.teacher_code)})</p>`}</div></div></div>`
    document.getElementById('edit-receipt-teacher-sign')?.addEventListener('click',()=>openSignatureModal(teacherId))
  }
  teacherSelect.addEventListener('change',drawReceiptTeacherSignature)
  drawReceiptTeacherSignature()
  document.getElementById('edit-director-sign').addEventListener('click',openDirectorSignatureModal)
  document.getElementById('upload-receipt-logo').addEventListener('click',async event=>{const file=document.getElementById('receipt-logo-file').files[0];if(!file){toast('กรุณาเลือกไฟล์โลโก้','warning');return}const btn=event.currentTarget;btn.disabled=true;btn.textContent='กำลังอัปโหลด...';try{const url=await uploadTerangganuReceiptLogo(file);await updateTerangganuEvent({receipt_logo_url:url});toast('บันทึกโลโก้ใบเสร็จแล้ว');await loadManager(true)}catch(error){toast(error.message||'อัปโหลดโลโก้ไม่สำเร็จ','error');btn.disabled=false;btn.textContent='⬆ อัปโหลดโลโก้'}})
}

async function quickSetting(payload){try{await updateTerangganuEvent(payload);toast('อัปเดตสถานะแล้ว');await loadManager(true)}catch(error){toast(error.message,'error')}}
async function saveSettings(e){e.preventDefault();const btn=e.submitter;btn.disabled=true;try{const payload=Object.fromEntries(new FormData(e.currentTarget).entries());for(const key of ['form_open_at','form_close_at'])payload[key]=payload[key]?new Date(payload[key]).toISOString():null;await updateTerangganuEvent(payload);toast('บันทึกการตั้งค่าแล้ว');await loadManager(true)}catch(error){toast(error.message,'error');btn.disabled=false}}
function openDirectorSignatureModal(){
  const wrap=modal(`<div class="p-6"><div class="flex justify-between"><div><h3 class="font-bold text-lg">ลายเซ็นผู้อำนวยการ</h3><p class="text-xs text-gray-400">วาดบนช่องหรืออัปโหลดไฟล์ภาพ</p></div><button data-close>✕</button></div>${ctx.event?.director_signature_url?`<img src="${esc(ctx.event.director_signature_url)}" class="h-16 max-w-52 object-contain border rounded-lg mt-4 p-1">`:''}<div class="mt-4"><span class="camp-label">วาดลายเซ็น</span><canvas width="700" height="220" class="w-full h-32 border rounded-xl bg-white touch-none"></canvas><button data-sign-clear type="button" class="text-xs text-red-500 mt-1">ล้างลายเซ็น</button></div><div class="mt-3"><span class="camp-label">หรืออัปโหลดภาพ</span><input data-sign-file type="file" accept="image/*" class="text-xs"></div><button data-sign-save class="camp-btn w-full bg-teal-700 text-white mt-5">บันทึกลายเซ็นผู้อำนวยการ</button></div>`)
  wireSignatureInput(wrap,async source=>{const url=await uploadTerangganuDirectorSignature(source);await updateTerangganuEvent({director_signature_url:url});wrap.remove();toast('บันทึกลายเซ็นผู้อำนวยการแล้ว');await loadManager(true)})
}

function renderStaff(){
  const assigned=new Set((ctx.staff||[]).filter(x=>x.active).map(x=>Number(x.teacher_id)))
  content.innerHTML=`<div class="mb-4"><h2 class="text-xl font-bold">ครูผู้รับผิดชอบ</h2><p class="text-xs text-gray-400">สิทธิ์นี้จำกัดเฉพาะโมดูลค่าย ไม่ใช่สิทธิ์แอดมิน PP5</p></div><section class="camp-card p-5 mb-4"><div class="flex gap-2"><select id="staff-teacher" class="camp-input"><option value="">เลือกครู</option>${(ctx.teachers||[]).filter(t=>!assigned.has(Number(t.id))).map(t=>`<option value="${t.id}">${esc(t.full_name)} (${esc(t.teacher_code)})</option>`).join('')}</select><button id="staff-add" class="camp-btn bg-teal-700 text-white whitespace-nowrap">+ มอบหมาย</button></div></section><div class="space-y-3">${(ctx.staff||[]).map(st=>`<article class="camp-card p-4 flex flex-col sm:flex-row sm:items-center gap-3 ${st.active?'':'opacity-50'}"><div class="flex-1"><b>${esc(st.display_name||st.full_name)}</b><p class="text-xs text-gray-400">${esc(st.teacher_code)} · ${esc(st.title)} · ${st.signature_url?'มีลายเซ็นแล้ว':'ยังไม่มีลายเซ็น'}</p></div><div class="flex gap-2">${Number(access.teacher_id)===Number(st.teacher_id)?`<button data-sign-staff="${st.teacher_id}" class="camp-btn bg-indigo-50 text-indigo-700">✍️ ลายเซ็นของฉัน</button>`:`<span class="camp-btn bg-gray-50 text-gray-400">${st.signature_url?'ลงนามแล้ว':'รอครูลงนาม'}</span>`}<button data-staff-active="${st.teacher_id}" data-next="${!st.active}" class="camp-btn ${st.active?'bg-red-50 text-red-600':'bg-emerald-50 text-emerald-700'}">${st.active?'ปิดสิทธิ์':'เปิดสิทธิ์'}</button></div></article>`).join('')}</div>`
  document.getElementById('staff-add').addEventListener('click',async()=>{const id=document.getElementById('staff-teacher').value;if(!id)return;try{await assignTerangganuStaff(id);toast('มอบหมายครูแล้ว');await loadManager(true)}catch(error){toast(error.message,'error')}})
  document.querySelectorAll('[data-staff-active]').forEach(btn=>btn.addEventListener('click',async()=>{try{await assignTerangganuStaff(btn.dataset.staffActive,{active:btn.dataset.next==='true'});toast('อัปเดตสิทธิ์แล้ว');await loadManager(true)}catch(error){toast(error.message,'error')}}))
  document.querySelectorAll('[data-sign-staff]').forEach(btn=>btn.addEventListener('click',()=>openSignatureModal(Number(btn.dataset.signStaff))))
}

function openSignatureModal(teacherId){
  if(Number(access.teacher_id)!==teacherId){toast('ครูลงลายเซ็นได้เฉพาะบัญชีของตนเอง','error');return}
  const st=(ctx.staff||[]).find(x=>Number(x.teacher_id)===teacherId);const wrap=modal(`<div class="p-6"><div class="flex justify-between"><div><h3 class="font-bold text-lg">ลายเซ็นครูผู้รับผิดชอบ</h3><p class="text-xs text-gray-400">วาดบนช่องหรืออัปโหลดไฟล์ภาพ</p></div><button data-close>✕</button></div><label class="block mt-4"><span class="camp-label">ชื่อที่แสดง</span><input id="sign-name" class="camp-input" value="${esc(st?.display_name||st?.full_name||'')}"></label><label class="block mt-3"><span class="camp-label">ตำแหน่ง</span><input id="sign-title" class="camp-input" value="${esc(st?.title||'ครูผู้รับผิดชอบ')}"></label><div class="mt-3"><span class="camp-label">วาดลายเซ็น</span><canvas id="sign-canvas" width="700" height="220" class="w-full h-32 border rounded-xl bg-white touch-none"></canvas><button id="sign-clear" class="text-xs text-red-500 mt-1">ล้างลายเซ็น</button></div><div class="mt-3"><span class="camp-label">หรืออัปโหลดภาพ</span><input id="sign-file" type="file" accept="image/*" class="text-xs"></div><button id="sign-save" class="camp-btn w-full bg-teal-700 text-white mt-5">บันทึกลายเซ็น</button></div>`)
  wrap.querySelector('#sign-clear').dataset.signClear='';wrap.querySelector('#sign-file').dataset.signFile='';wrap.querySelector('#sign-save').dataset.signSave=''
  wireSignatureInput(wrap,async source=>{const url=await uploadTerangganuSignature(session.user.id,source);await updateMyTerangganuSignature(url,wrap.querySelector('#sign-name').value,wrap.querySelector('#sign-title').value);wrap.remove();toast('บันทึกลายเซ็นครูผู้ลงนามแล้ว');await loadManager(true)})
}

function wireSignatureInput(wrap,onSave){
  const canvas=wrap.querySelector('canvas'),g=canvas.getContext('2d'),save=wrap.querySelector('[data-sign-save]')
  const clear=()=>{g.fillStyle='#fff';g.fillRect(0,0,canvas.width,canvas.height);g.strokeStyle='#0f172a'}
  clear();g.lineWidth=4;g.lineCap='round';let drawing=false,drawn=false
  const pos=e=>{const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}}
  canvas.addEventListener('pointerdown',e=>{drawing=true;canvas.setPointerCapture?.(e.pointerId);const p=pos(e);g.beginPath();g.moveTo(p.x,p.y)})
  canvas.addEventListener('pointermove',e=>{if(!drawing)return;const p=pos(e);g.lineTo(p.x,p.y);g.stroke();drawn=true})
  canvas.addEventListener('pointerup',()=>drawing=false);canvas.addEventListener('pointercancel',()=>drawing=false)
  wrap.querySelector('[data-sign-clear]').addEventListener('click',()=>{clear();drawn=false})
  save.addEventListener('click',async()=>{try{let source=wrap.querySelector('[data-sign-file]').files[0];if(!source&&drawn)source=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!source)throw new Error('กรุณาวาดหรือเลือกไฟล์ลายเซ็น');save.disabled=true;save.textContent='กำลังบันทึก...';await onSave(source)}catch(error){toast(error.message||'บันทึกลายเซ็นไม่สำเร็จ','error');save.disabled=false;save.textContent='บันทึกลายเซ็น'}})
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
  const p=findPayment(paymentId);if(!p){toast('ไม่พบข้อมูลใบเสร็จ','error');return}
  const s=findStudent(p.student_id),studentPayments=(ctx.payments||[]).filter(x=>Number(x.student_id)===Number(p.student_id)&&!x.voided_at).sort((a,b)=>(a.installment_type==='deposit'?0:1)-(b.installment_type==='deposit'?0:1)),complete=studentPayments.some(x=>x.installment_type==='deposit')&&studentPayments.some(x=>x.installment_type==='balance'),items=complete?studentPayments:[p],latest=[...items].sort((a,b)=>new Date(b.paid_at)-new Date(a.paid_at))[0],snap=latest.receipt_snapshot||p.receipt_snapshot||{},total=items.reduce((sum,x)=>sum+Number(x.amount||0),0),numbers=items.map(x=>x.receipt_no).join(' / '),logo=ctx.event?.receipt_logo_url||snap.receipt_logo_url
  const itemRows=items.map(x=>`<tr><td>${x.installment_type==='deposit'?'ค่ามัดจำเข้าร่วมค่าย':'ค่าใช้จ่ายส่วนที่เหลือ'}</td><td>${thaiDate(x.paid_at)}</td><td>${esc(x.receipt_no)}</td><td class="num">${money(x.amount)} บาท</td></tr>`).join('')
  const w=window.open('','_blank');if(!w){toast('เบราว์เซอร์ปิดกั้นหน้าต่างใบเสร็จ','error');return}
  w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${esc(complete?'ใบเสร็จรวม '+numbers:p.receipt_no)}</title><style>@page{size:A4;margin:14mm}body{font-family:Arial,'Sarabun',sans-serif;color:#111}.tools{text-align:center;margin-bottom:16px}.receipt{border:1.5px solid #111;padding:24px;max-width:760px;margin:auto}.head{text-align:center}.logo{width:82px;height:82px;object-fit:contain;filter:grayscale(1);margin:auto}.head h1{font-size:21px;margin:4px}.head p{margin:3px;font-size:13px}.no{text-align:right;margin:16px 0;font-weight:bold}.row{display:flex;border-bottom:1px dotted #aaa;padding:8px 0;gap:12px}.row span:first-child{width:150px;color:#555}table{width:100%;border-collapse:collapse;margin-top:15px;font-size:13px}th,td{border:1px solid #777;padding:9px}th{background:#f3f3f3}.num{text-align:right}.amount{font-size:20px;font-weight:bold}.signs{display:grid;grid-template-columns:1fr 1fr;gap:50px;margin-top:55px;text-align:center}.signs img{height:65px;max-width:180px;object-fit:contain}.line{border-bottom:1px solid #111;height:68px;margin:auto;max-width:220px}.muted{font-size:11px;color:#666}@media print{.tools{display:none}}</style></head><body><div class="tools"><button onclick="window.print()">🖨️ พิมพ์ / บันทึกเป็น PDF</button></div><div class="receipt"><div class="head">${logo?`<img class="logo" src="${esc(logo)}">`:''}<h1>ใบเสร็จรับเงิน${complete?' (ชำระครบ)':''}</h1><h1>${esc(snap.event_name||ctx.event?.name)}</h1><p>${esc(snap.location||'โรงเรียนมูลนิธิอาซิซสถาน')}</p></div><div class="no">เลขที่ ${esc(numbers)}</div><div class="row"><span>ได้รับเงินจาก</span><b>${esc(s?.full_name)}</b></div><div class="row"><span>รหัสนักเรียน / ชั้น</span><b>${esc(s?.student_code)} / ${esc(s?.main_room||'—')}</b></div><table><thead><tr><th>รายการ</th><th>วันที่ชำระ</th><th>เลขที่รายการ</th><th>จำนวนเงิน</th></tr></thead><tbody>${itemRows}</tbody></table><div class="row"><span>ยอดรวมทั้งหมด</span><b class="amount">${money(total)} บาท</b></div><div class="row"><span>จำนวนเงินตัวอักษร</span><b>${bahtTextSimple(total)}</b></div><div class="signs"><div>${snap.teacher_signature_url?`<img src="${esc(snap.teacher_signature_url)}">`:'<div class="line"></div>'}<p>(${esc(snap.teacher_name||'ครูผู้รับผิดชอบ')})</p><p class="muted">${esc(snap.teacher_title||'ครูผู้รับผิดชอบ')}</p></div><div>${snap.director_signature_url?`<img src="${esc(snap.director_signature_url)}">`:'<div class="line"></div>'}<p>(${esc(snap.director_name||'ผู้อำนวยการ')})</p><p class="muted">${esc(snap.director_title||'ผู้อำนวยการ')}</p></div></div><p class="muted" style="margin-top:30px">สร้างโดยระบบ PP5 Online · ${new Date(latest.created_at).toLocaleString('th-TH')}</p></div></body></html>`);w.document.close()
}

init()
