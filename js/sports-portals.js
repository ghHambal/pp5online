import { supabase } from './supabase.js'
import { openAzizGamesModal } from './azizgames-modal.js'
import { uploadShirtDesignColorImage, uploadShirtDesignHtml } from './storage.js'

export const esc = (v='') => String(v ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))
const main = () => document.getElementById('stu-content') || document.getElementById('main-content')
const DEFAULT_EVENT = '00000000-0000-0000-0000-000000000001'
const badge = s => ({pending:'รอยืนยัน',confirmed:'ยืนยันแล้ว',advisor_updated:'ครูเลือก/แก้ไขแทน'}[s] || 'ยังไม่จำนง')
const statusClass = s => s === 'confirmed' || s === 'advisor_updated' ? 'bg-emerald-100 text-emerald-700' : s === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
export const toast = (msg,type='success') => { const e=document.createElement('div');e.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-3 rounded-xl text-white text-sm shadow-xl ${type==='error'?'bg-red-600':'bg-emerald-600'}`;e.textContent=msg;document.body.appendChild(e);setTimeout(()=>e.remove(),3000) }
const missing = () => `<div class="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800"><h3 class="font-bold">ยังไม่ได้ติดตั้งส่วนขยายระบบกีฬาสี</h3><p class="text-sm mt-2">ให้แอดมินรันไฟล์ <code>patch_sports_student_team_portal.sql</code> ใน Supabase SQL Editor</p></div>`
const actionCard = (key,title,help,enabled) => `<div class="rounded-2xl border p-4 ${enabled?'bg-emerald-50 border-emerald-200':'bg-slate-50 border-slate-200'}"><div class="flex items-start justify-between gap-3"><div><h3 class="font-bold text-sm text-slate-800">${esc(title)}</h3><p class="text-xs text-slate-500 mt-1">${esc(help)}</p><span class="inline-block mt-3 px-2 py-1 rounded-full text-[11px] font-bold ${enabled?'bg-emerald-100 text-emerald-700':'bg-slate-200 text-slate-600'}">${enabled?'เปิดใช้งานอยู่':'ปิดใช้งานอยู่'}</span></div><button type="button" data-cfg="${esc(key)}" data-enabled="${enabled?'true':'false'}" class="px-3 py-2 rounded-xl text-xs font-bold ${enabled?'bg-red-50 text-red-700 border border-red-200':'bg-emerald-600 text-white'}">${enabled?'ปิดใช้งาน':'เปิดใช้งาน'}</button></div></div>`
const permissionButton = (key,label,enabled=true) => `<button type="button" data-team-perm="${esc(key)}" data-enabled="${enabled?'true':'false'}" class="px-3 py-2 rounded-xl text-xs font-bold border ${enabled?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-slate-50 text-slate-500 border-slate-200'}">${enabled?'อนุญาต':'ไม่อนุญาต'}: ${esc(label)}</button>`
const SHIRT_COLOR_HEX = {'แดง':'#dc2626','น้ำเงิน':'#2563eb','เขียว':'#16a34a','น้ำตาล':'#92400e','ส้ม':'#f97316','ฟ้า':'#0ea5e9','ม่วง':'#9333ea','เทา':'#6b7280'}
export const _colorSwatchHex = name => SHIRT_COLOR_HEX[name] || '#94a3b8'

// ไอคอนกีฬาชุดเดียวกับที่ AZIZGAMES ใช้ (43 ไฟล์ที่ pp5-online/public/azizgames/sport-icons/ —
// โฮสต์รวมกันอยู่แล้วในไซต์เดียวกัน) จับคู่จากชื่อกีฬา+เพศแบบเดียวกับ src/utils/sportIcons.js
// ฝั่ง AZIZGAMES ทุกประการ — คนละ repo/บันเดิลกัน เลยต้องก็อปตารางมาตรงๆ (เหมือน SHIRT_COLOR_HEX
// ด้านบนที่ก็อปจาก COLOR_HEX ฝั่ง AZIZGAMES อยู่แล้ว)
const SPORT_ICON_BASE = ((location.pathname.startsWith('/pp5online/')) ? '/pp5online/' : '/') + 'azizgames/sport-icons/'
const SPORT_ICON_RULES = [
  { test: n => n.includes('ฟุตซอล'), male: '01-futsal-male-international-malay.png' },
  { test: n => n.includes('ฟุตบอล'), male: '02-football-male-international-malay.png' },
  { test: n => n.includes('บาสเกตบอล'), male: '03-basketball-male-international-malay.png' },
  { test: n => n.includes('เซปักตะกร้อ'), male: '04-sepak-takraw-male-international-malay.png' },
  { test: n => n.includes('แชร์บอล'), female: '05-chairball-female-international-malay.png' },
  { test: n => n.includes('แฮนด์บอล'), male: '06-handball-male-international-malay.png', female: '07-handball-female-international-malay.png' },
  { test: n => n.includes('วอลเลย์บอล'), male: '08-volleyball-male-international-malay.png', female: '09-volleyball-female-international-malay.png' },
  { test: n => n.includes('แบดมินตัน'), male: '10-badminton-male-international-malay.png', female: '11-badminton-female-international-malay.png' },
  { test: n => n.includes('เทเบิลเทนนิส'), male: '12-table-tennis-male-international-malay.png', female: '13-table-tennis-female-international-malay.png' },
  { test: n => n.includes('4x100'), male: '18-relay-4x100-male-international-malay.png' },
  { test: n => n.includes('4x200'), male: '19-relay-4x200-male-international-malay.png' },
  { test: n => n.includes('100 เมตร'), male: '14-sprint-100m-male-international-malay.png', female: '15-sprint-100m-female-international-malay.png' },
  { test: n => n.includes('200 เมตร'), male: '16-sprint-200m-male-international-malay.png', female: '17-sprint-200m-female-international-malay.png' },
  { test: n => n.includes('วิ่งกระสอบ'), female: '20-sack-race-female-international-malay.png' },
  { test: n => n.includes('วิ่งผลัดสามขา'), female: '22-three-legged-relay-female-international-malay.png' },
  { test: n => n.includes('วิ่งสามขา'), female: '21-three-legged-race-female-international-malay.png' },
  { test: n => n.includes('งัดข้อ'), male: '23-arm-wrestling-male-international-malay.png' },
  { test: n => n.includes('ชักเย่อ'), male: '24-tug-of-war-male-international-malay.png', female: '25-tug-of-war-female-international-malay.png' },
  { test: n => n.includes('ยิงธนู'), male: '26-archery-male-international-malay.png', female: '27-archery-female-international-malay.png' },
  { test: n => n.includes('เปตอง'), male: '28-petanque-male-international-malay.png', female: '29-petanque-female-international-malay.png' },
  { test: n => n.includes('หมากฮอร์ส'), male: '30-checkers-male-international-malay.png', female: '31-checkers-female-international-malay.png' },
  { test: n => n.includes('หมากหลุม'), female: '32-mancala-female-international-malay.png' },
  { test: n => n.includes('หมากเก็บ'), female: '33-mak-kep-female-international-malay.png' },
  { test: n => n.includes('เอแมท'), male: '34-a-math-male-international-malay.png', female: '35-a-math-female-international-malay.png' },
  { test: n => n.includes('โซโดกุ'), male: '36-sudoku-male-international-malay.png', female: '37-sudoku-female-international-malay.png' },
  { test: n => n.includes('รูบริค'), male: '38-rubiks-cube-male-international-malay.png', female: '39-rubiks-cube-female-international-malay.png' },
  { test: n => n.toLowerCase().includes('stack') || n.includes('สแต๊ะ'), male: '40-sport-stacking-male-international-malay.png', female: '41-sport-stacking-female-international-malay.png' },
  { test: n => n.toLowerCase().includes('e-sport') || n.toLowerCase().includes('rov'), male: '42-esport-rov-male-international-malay.png', female: '43-esport-rov-female-international-malay.png' },
]
const sportIconUrl = (sport) => {
  const name = sport?.name
  if (!name) return null
  const rule = SPORT_ICON_RULES.find(r => r.test(name))
  if (!rule) return null
  const file = sport.gender === 'W' ? (rule.female || rule.male) : (rule.male || rule.female)
  return file ? `${SPORT_ICON_BASE}${file}` : null
}

// PostgREST จำกัดผลลัพธ์ต่อ request ไว้ที่ 1000 แถวโดยดีฟอลต์ — ตารางโหวตเสื้อของ
// โรงเรียนใหญ่มีแถวเกิน 1000 ได้ง่าย ต้องวนดึงทีละหน้าไม่ให้ยอดโหวต/สถานะโหวตตกหล่น
async function _fetchAllRows(table, build, pageSize = 1000) {
  let all = [], from = 0
  while (true) {
    const { data, error } = await build(supabase.from(table)).range(from, from + pageSize - 1)
    if (error) throw error
    all = all.concat(data || [])
    if (!data || data.length < pageSize) break
    from += pageSize
  }
  return all
}

// ครูตำแหน่ง house_color_admin ("ผู้รับผิดชอบสีนักเรียน/หัวหน้างานกีฬาสี") ใน pp5-online เอง
// ให้ถือเป็นแอดมินเฉพาะหน้ากีฬาสีนี้ด้วย โดยไม่ต้องพึ่ง profiles.is_also_admin — เพราะ flag นั้น
// เปิดสิทธิ์เข้า Admin Dashboard ทั้งระบบ ปพ.5 ไปด้วย เกินขอบเขตที่ต้องการ (มอบหมายพ่อสี/แม่สี
// เฉพาะในหน้ากีฬาสีเท่านั้น)
async function _hasHouseColorAdminPosition(userId) {
  if (!userId) return false
  const { data } = await supabase.from('teachers').select('positions,position,staff_type').eq('profile_id', userId).maybeSingle()
  if (!data) return false
  const positions = data.positions?.length ? data.positions : (data.position ? [data.position] : [])
  return positions.includes('house_color_admin') || data.staff_type === 'แอดมิน'
}

async function syncAzizPublicShirtButton(enabled) {
  const { data } = await supabase.from('settings').select('value').eq('key','public_buttons').maybeSingle()
  const current = data?.value && typeof data.value === 'object' ? data.value : {}
  await supabase.from('settings').upsert({
    key: 'public_buttons',
    value: { athlete_size: false, athlete_registration: false, athlete_print: true, athlete_certificate: true, ...current, athlete_size: Boolean(enabled) },
    description: 'Controls which athlete-page actions are visible and usable by public visitors.',
    updated_at: new Date().toISOString(),
  }, { onConflict: 'key' })
}

async function context() {
  const [{data:event},{data:cfg}] = await Promise.all([
    supabase.from('events').select('*').eq('status','active').order('academic_year',{ascending:false}).limit(1).maybeSingle(),
    supabase.from('sports_portal_settings').select('*').limit(1).maybeSingle(),
  ])
  return { event:event || {id:DEFAULT_EVENT,name:'AZIZGAMES'}, cfg }
}

export async function renderStudentSportsHome(student) {
  const el=main(); el.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลกีฬาสีของฉัน...</div>'
  try {
    const {event,cfg}=await context()
    const [{data:color},{data:req},{data:regs},{data:awards},{data:myVote},{data:eligibility},{data:duesStatus}] = await Promise.all([
      supabase.from('team_colors').select('*').eq('id',student.team_color_id || '').maybeSingle(),
      supabase.from('sports_shirt_requests').select('*').eq('event_id',event.id).eq('student_id',student.id).maybeSingle(),
      supabase.from('registrations').select('id,jersey_number,sports(name,venue)').eq('event_id',event.id).eq('student_id',student.id),
      supabase.from('outstanding_athletes').select('id,note,awarded_at,sports(name)').eq('event_id',event.id).eq('student_id',student.id),
      supabase.from('sports_shirt_votes').select('design_id,sports_shirt_designs(design_no,name,sports_shirt_design_colors(*))').eq('event_id',event.id).eq('student_id',student.id).maybeSingle(),
      supabase.rpc('get_my_sports_eligibility',{p_event:event.id}).then(r=>({data:r.error?null:r.data})).catch(()=>({data:null})),
      supabase.rpc('get_my_sports_dues_status',{p_event:event.id}).then(r=>({data:r.error?null:r.data})).catch(()=>({data:null})),
    ])
    const c=color || {name:student.house_color,hex_color:'#64748b',logo_url:null}
    const myVoteColors=(myVote?.sports_shirt_designs?.sports_shirt_design_colors||[]).filter(x=>x.image_url)
    let myVoteColorPtr=Math.max(0,myVoteColors.findIndex(x=>x.color_name===student.house_color))
    const sizes=cfg?.allowed_sizes || ['S','M','L','XL','2XL','3XL']
    const open=cfg?.shirt_request_enabled && (!cfg.shirt_request_opens_at || new Date(cfg.shirt_request_opens_at)<=new Date()) && (!cfg.shirt_request_closes_at || new Date(cfg.shirt_request_closes_at)>=new Date())
    el.innerHTML=`<div class="max-w-5xl mx-auto space-y-5 pb-28">
      <section class="rounded-3xl p-6 text-white shadow-xl overflow-hidden relative" style="background:linear-gradient(135deg,${esc(c.hex_color)},#111827)">
        <div class="flex items-center gap-4 relative z-10">${c.logo_url?`<img src="${esc(c.logo_url)}" class="w-20 h-20 rounded-full object-cover bg-white/90 p-1">`:'<div class="w-20 h-20 rounded-full bg-white/20 grid place-items-center text-4xl">🏆</div>'}<div><p class="text-xs text-white/70">กีฬาสีของฉัน</p><h1 class="text-2xl font-extrabold">ทีมสี${esc(c.name||'—')}</h1><p class="text-sm text-white/80">${esc(student.full_name)} · ${esc(student.main_room)}</p>${c.motto?`<p class="text-xs mt-1">“${esc(c.motto)}”</p>`:''}</div></div>
      </section>
      <div class="grid md:grid-cols-2 gap-4">
        <section class="bg-white rounded-2xl border p-5"><div class="flex justify-between"><h2 class="font-bold">👕 ไซซ์เสื้อกีฬาสี</h2><span class="px-2 py-1 rounded-full text-xs ${statusClass(req?.status)}">${badge(req?.status)}</span></div><p class="text-3xl font-black mt-3">${esc(req?.confirmed_size || req?.requested_size || student.sports_shirt_size || '—')}</p><p class="text-xs text-gray-500 mt-1">${req?.confirmed_size?'ไซซ์ที่ครูที่ปรึกษายืนยัน':'ไซซ์ที่จำนง'}</p>${open && !req?.confirmed_size?`<div class="flex gap-2 mt-4"><select id="stu-shirt-size" class="flex-1 border rounded-xl px-3 py-2">${sizes.map(x=>`<option ${req?.requested_size===x?'selected':''}>${esc(x)}</option>`).join('')}</select><button id="stu-shirt-save" class="px-4 rounded-xl bg-indigo-600 text-white font-semibold">บันทึก</button></div>`:`<p class="text-xs mt-4 text-gray-400">${open?'ข้อมูลได้รับการยืนยันแล้ว':'ขณะนี้ยังไม่เปิดรับจำนงไซซ์เสื้อ'}</p>`}</section>
        <section class="bg-white rounded-2xl border p-5">
          <h2 class="font-bold">🗳️ โหวตแบบเสื้อกีฬาสี</h2>
          ${myVote?`
            <div class="flex flex-col items-center mt-3">
              <div class="relative">
                ${myVoteColors.length?`<img id="my-vote-thumb" src="${esc(myVoteColors[myVoteColorPtr]?.image_url)}" class="w-40 h-40 object-contain bg-gray-50 rounded-2xl border">`:'<div class="w-40 h-40 bg-gray-50 rounded-2xl border grid place-items-center text-gray-300 text-4xl">👕</div>'}
                ${myVoteColors.length?`<button id="my-vote-expand" class="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 shadow border flex items-center justify-center text-gray-600 hover:text-indigo-600" title="ขยายดูเต็มจอ">⤢</button>`:''}
              </div>
              ${myVoteColors.length>1?`<div class="flex gap-2 mt-3">${myVoteColors.map((cl,i)=>`<button data-my-vote-color="${i}" class="w-7 h-7 rounded-full border-2 ${i===myVoteColorPtr?'border-indigo-500 scale-110':'border-gray-200'} transition" style="background:${_colorSwatchHex(cl.color_name)}" title="สี${esc(cl.color_name)}"></button>`).join('')}</div>`:''}
              <p class="text-sm text-emerald-600 font-bold text-center mt-3">✓ คุณโหวต ${esc(myVote.sports_shirt_designs?.name||`แบบที่ ${myVote.sports_shirt_designs?.design_no}`)} แล้ว</p>
            </div>
          `:'<p class="text-sm mt-3 text-gray-400">ยังไม่ได้โหวต</p>'}
          <button id="open-shirt-vote" class="w-full mt-4 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">🗳️ เปิดหน้าโหวต</button>
        </section>
      </div>
      <section class="bg-white rounded-2xl border p-5"><h2 class="font-bold mb-4">⚽ รายการแข่งขันของฉัน</h2>${regs?.length?`<div class="space-y-2">${regs.map(r=>`<div class="p-3 bg-gray-50 rounded-xl flex justify-between"><div><b>${esc(r.sports?.name)}</b><p class="text-xs text-gray-500">${esc(r.sports?.venue||'ยังไม่ระบุสถานที่')}</p></div><span class="text-xs text-indigo-600">${r.jersey_number?`หมายเลข ${esc(r.jersey_number)}`:'ลงทะเบียนแล้ว'}</span></div>`).join('')}</div>`:'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีรายการที่สต๊าฟลงทะเบียนให้</p>'}</section>
      <section class="bg-white rounded-2xl border p-5"><div class="flex justify-between items-start"><h2 class="font-bold">💰 ค่าบำรุงสี</h2><span class="px-2 py-1 rounded-full text-xs font-bold ${duesStatus?.paid?'bg-emerald-100 text-emerald-700':'bg-red-100 text-red-700'}">${duesStatus?.paid?'จ่ายแล้ว':'ยังไม่จ่าย'}</span></div>${duesStatus?.paid?`<p class="text-3xl font-black mt-3">${Number(duesStatus.amount||0).toLocaleString('th-TH')} บาท</p><p class="text-xs text-gray-500 mt-1">ชำระเมื่อ ${duesStatus.paid_at?new Date(duesStatus.paid_at).toLocaleString('th-TH',{dateStyle:'medium',timeStyle:'short'}):'—'}</p><p class="text-xs text-gray-500">ผู้รับชำระ: ${esc(duesStatus.collected_by_name||'ไม่ระบุ')}</p>`:`<p class="text-sm text-gray-400 mt-3">ยังไม่ได้ชำระค่าบำรุงสี ${Number(duesStatus?.amount||30).toLocaleString('th-TH')} บาท — ติดต่อพ่อสี/แม่สีหรือสต๊าฟประจำสีเพื่อชำระ</p>`}</section>
      <section class="bg-white rounded-2xl border p-5"><h2 class="font-bold mb-4">🏅 ผลงานและเกียรติบัตร</h2>${awards?.length?awards.map(a=>`<div class="p-3 rounded-xl bg-amber-50"><b>${esc(a.sports?.name||'รางวัลนักกีฬาดีเด่น')}</b><p class="text-sm">${esc(a.note)}</p></div>`).join(''):'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีเกียรติบัตรหรือรางวัล</p>'}</section>
      <section class="bg-white rounded-2xl border p-5"><h2 class="font-bold mb-3">🎖️ เกียรติบัตรกีฬาสี</h2>${!eligibility ? '<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีข้อมูล</p>' : eligibility.eligible ? (
        eligibility.certificate_url
          ? `<div class="text-center py-4"><p class="text-emerald-600 font-bold mb-3">🎉 คุณผ่านเกณฑ์รับเกียรติบัตรแล้ว!</p><button id="view-cert" class="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">🎖️ ดูเกียรติบัตรของฉัน</button></div>`
          : `<p class="text-emerald-600 font-bold text-center py-4">🎉 คุณผ่านเกณฑ์รับเกียรติบัตรแล้ว! รอแอดมินออกเกียรติบัตรให้เร็วๆ นี้</p>`
      ) : `<p class="text-xs text-gray-500 mb-3">เงื่อนไขรับเกียรติบัตร:</p><div class="space-y-2 text-sm">
        <div class="flex items-center justify-between p-2.5 rounded-lg ${eligibility.attendance_pct>=eligibility.threshold_pct?'bg-emerald-50':'bg-red-50'}"><span>${eligibility.attendance_pct>=eligibility.threshold_pct?'✅':'❌'} เช็คชื่อเข้าร่วมกิจกรรม ≥ ${esc(eligibility.threshold_pct)}%</span><b>${esc(eligibility.attendance_pct)}% (${esc(eligibility.present_days)}/${esc(eligibility.total_days)} วัน)</b></div>
        <div class="flex items-center justify-between p-2.5 rounded-lg ${eligibility.dues_paid?'bg-emerald-50':'bg-red-50'}"><span>${eligibility.dues_paid?'✅':'❌'} ชำระค่าบำรุงสีแล้ว</span></div>
        ${eligibility.is_athlete?`<div class="flex items-center justify-between p-2.5 rounded-lg ${eligibility.roll_call_complete?'bg-emerald-50':'bg-red-50'}"><span>${eligibility.roll_call_complete?'✅':'❌'} รายงานตัวนักกีฬาครบทุกครั้ง</span></div>`:''}
      </div>`}</section>
      <button id="open-full-sports" class="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-base">🏆 เปิดระบบกีฬาสีแบบเต็ม</button>
    </div>`
    el.querySelector('#open-full-sports')?.addEventListener('click',()=>openSportsChoiceModal(student))
    el.querySelector('#view-cert')?.addEventListener('click',()=>{
      const url=eligibility?.certificate_url
      if(!url)return
      if(/\.(png|jpe?g|webp|gif)$/i.test(url)) openImageLightbox(url)
      else window.open(url,'_blank')
    })
    el.querySelector('#open-shirt-vote')?.addEventListener('click',()=>openShirtVoteModal(student,event,cfg))
    el.querySelector('#my-vote-expand')?.addEventListener('click',()=>openImageLightbox(myVoteColors[myVoteColorPtr]?.image_url))
    el.querySelectorAll('[data-my-vote-color]').forEach(b=>b.addEventListener('click',()=>{
      myVoteColorPtr=parseInt(b.dataset.myVoteColor,10)
      const img=el.querySelector('#my-vote-thumb')
      if(img) img.src=myVoteColors[myVoteColorPtr].image_url
      el.querySelectorAll('[data-my-vote-color]').forEach((btn,i)=>{
        btn.className=`w-7 h-7 rounded-full border-2 ${i===myVoteColorPtr?'border-indigo-500 scale-110':'border-gray-200'} transition`
      })
    }))
    el.querySelector('#stu-shirt-save')?.addEventListener('click',async()=>{const size=el.querySelector('#stu-shirt-size').value;const {error}=await supabase.rpc('request_my_sports_shirt_size',{p_event:event.id,p_size:size});if(error)return toast(error.message,'error');toast('ส่งข้อมูลแล้ว รอครูที่ปรึกษายืนยัน');renderStudentSportsHome(student)})
  } catch(e) { console.error(e); el.innerHTML=missing() }
}

export function open3dShirtViewer(url) {
  document.getElementById('shirt-3d-modal')?.remove()
  const m=document.createElement('div'); m.id='shirt-3d-modal'; m.className='fixed inset-0 z-[320] bg-black/80 flex flex-col'
  m.innerHTML=`<div class="flex justify-end p-3 flex-shrink-0"><button id="btn-shirt-3d-close" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">✕</button></div><iframe src="${esc(url)}" sandbox="allow-scripts allow-same-origin" class="flex-1 w-full bg-white"></iframe>`
  document.body.appendChild(m)
  m.querySelector('#btn-shirt-3d-close').onclick=()=>m.remove()
}

export function openImageLightbox(url) {
  document.getElementById('shirt-image-lightbox')?.remove()
  const m=document.createElement('div'); m.id='shirt-image-lightbox'; m.className='fixed inset-0 z-[330] bg-black/90 flex items-center justify-center p-6 animate-fade'
  m.innerHTML=`<button id="btn-shirt-lightbox-close" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg">✕</button><img src="${esc(url)}" class="max-w-full max-h-full object-contain rounded-2xl">`
  document.body.appendChild(m)
  m.querySelector('#btn-shirt-lightbox-close').onclick=()=>m.remove()
  m.addEventListener('click',e=>{ if(e.target===m) m.remove() })
}

// ป๊อบอัพให้นักเรียนเลือกก่อนเข้าระบบกีฬาสี: ระบบหลัก (ภาพรวมทุกสี ผ่าน AZIZGAMES) หรือ
// "สีของฉัน" (ดูเฉพาะข้อมูลสีตัวเอง หน้าตาเหมือนที่ครู/สต๊าฟใช้ แต่ดูอย่างเดียว)
function openSportsChoiceModal(student) {
  document.getElementById('sports-choice-modal')?.remove()
  const m=document.createElement('div'); m.id='sports-choice-modal'; m.className='fixed inset-0 z-[340] bg-black/50 flex items-center justify-center p-6 animate-fade'
  m.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-2">🏆</div>
      <h3 class="font-bold text-gray-800 text-base mb-1">เลือกระบบกีฬาสี</h3>
      <p class="text-sm text-gray-600 mb-5">ต้องการเข้าดูข้อมูลแบบไหน?</p>
      <div class="flex flex-col gap-3">
        <button id="btn-sports-choice-main" class="py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm">🏆 ระบบกีฬาสีหลัก<br><span class="font-normal text-xs opacity-70">ภาพรวมทุกสี ผล/ตาราง/คะแนนรวม</span></button>
        <button id="btn-sports-choice-mine" class="py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm">🎨 สีของฉัน<br><span class="font-normal text-xs opacity-70">ดูเฉพาะข้อมูลสี${esc(student.house_color||'')}ของฉัน</span></button>
        <button id="btn-sports-choice-cancel" class="py-2.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50">ยกเลิก</button>
      </div>
    </div>
  `
  document.body.appendChild(m)
  m.querySelector('#btn-sports-choice-cancel').onclick=()=>m.remove()
  m.querySelector('#btn-sports-choice-main').onclick=()=>{m.remove();openAzizGamesModal()}
  m.querySelector('#btn-sports-choice-mine').onclick=()=>{m.remove();openMyColorAsStudent(student)}
}

export function openConfirmVoteModal(design,cfg,onConfirm) {
  document.getElementById('shirt-vote-confirm-modal')?.remove()
  const closesText=cfg?.shirt_vote_closes_at
    ? new Date(cfg.shirt_vote_closes_at).toLocaleString('th-TH',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'})
    : null
  const m=document.createElement('div'); m.id='shirt-vote-confirm-modal'; m.className='fixed inset-0 z-[340] bg-black/50 flex items-center justify-center p-6 animate-fade'
  m.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-2">🗳️</div>
      <h3 class="font-bold text-gray-800 text-base mb-1">ยืนยันการโหวต</h3>
      <p class="text-sm text-gray-600 mb-3">คุณต้องการโหวต <strong class="text-indigo-600">${esc(design.name||`แบบที่ ${design.design_no}`)}</strong> ใช่หรือไม่?</p>
      <p class="text-[11px] text-gray-400 mb-5">${closesText?`เปลี่ยนใจได้จนถึง ${closesText}`:'สามารถเปลี่ยนแปลงการโหวตได้จนกว่าระบบจะปิดรับ'}</p>
      <div class="flex gap-3">
        <button id="btn-shirt-vote-cancel" class="flex-1 py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50">ยกเลิก</button>
        <button id="btn-shirt-vote-confirm" class="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md">ยืนยัน</button>
      </div>
    </div>
  `
  document.body.appendChild(m)
  m.querySelector('#btn-shirt-vote-cancel').onclick=()=>m.remove()
  m.querySelector('#btn-shirt-vote-confirm').onclick=async()=>{
    const btn=m.querySelector('#btn-shirt-vote-confirm')
    btn.disabled=true; btn.textContent='กำลังบันทึก...'
    await onConfirm()
    m.remove()
  }
}

async function openShirtVoteModal(student,event,cfg) {
  document.getElementById('shirt-vote-modal')?.remove()
  const wrap=document.createElement('div'); wrap.id='shirt-vote-modal'; wrap.className='fixed inset-0 z-[300] bg-white flex flex-col animate-fade'
  wrap.innerHTML=`<div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0"><h3 class="text-lg font-bold text-gray-800">🗳️ โหวตแบบเสื้อกีฬาสี</h3><button id="btn-shirt-vote-close" class="w-9 h-9 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 flex items-center justify-center text-lg">✕</button></div><div id="shirt-vote-tabs" class="flex border-b border-gray-100 flex-shrink-0 overflow-x-auto"></div><div id="shirt-vote-body" class="flex-1 overflow-y-auto flex flex-col items-center px-5 py-6"><div class="text-center text-sm text-gray-400 py-8">กำลังโหลดข้อมูล...</div></div>`
  document.body.appendChild(wrap)
  wrap.querySelector('#btn-shirt-vote-close').onclick=()=>wrap.remove()
  const tabsEl=wrap.querySelector('#shirt-vote-tabs')
  const body=wrap.querySelector('#shirt-vote-body')
  try {
    const [{data:designs,error},{data:myVote}] = await Promise.all([
      supabase.from('sports_shirt_designs').select('*,sports_shirt_design_colors(*)').eq('event_id',event.id).eq('gender',student.gender||'').order('design_no'),
      supabase.from('sports_shirt_votes').select('design_id').eq('event_id',event.id).eq('student_id',student.id).maybeSingle(),
    ])
    if(error)throw error
    ;(designs||[]).forEach(d=>{ d.sports_shirt_design_colors=(d.sports_shirt_design_colors||[]).sort((a,b)=>a.display_order-b.display_order) })
    const open=cfg?.shirt_vote_enabled && (!cfg.shirt_vote_opens_at || new Date(cfg.shirt_vote_opens_at)<=new Date()) && (!cfg.shirt_vote_closes_at || new Date(cfg.shirt_vote_closes_at)>=new Date())
    let selectedDesignId=myVote?.design_id||null
    let activeIdx=Math.max(0,(designs||[]).findIndex(d=>d.id===selectedDesignId))
    const activeColorByDesign={}
    ;(designs||[]).forEach(d=>{ const colors=d.sports_shirt_design_colors||[]; activeColorByDesign[d.id]=colors.find(c=>c.image_url)?.id||colors[0]?.id||null })

    if(!(designs||[]).length){
      body.innerHTML='<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีแบบเสื้อของเพศคุณ</p>'
      return
    }

    const renderTabs=()=>{
      tabsEl.innerHTML=(designs||[]).map((d,i)=>`<button data-shirt-tab="${i}" class="flex-shrink-0 px-5 py-3 text-sm font-bold border-b-2 transition ${i===activeIdx?'text-indigo-600 border-indigo-600':'text-gray-400 border-transparent hover:text-gray-600'}">${esc(d.name||`แบบที่ ${d.design_no}`)}${selectedDesignId===d.id?' ✓':''}</button>`).join('')
      tabsEl.querySelectorAll('[data-shirt-tab]').forEach(b=>b.addEventListener('click',()=>{ activeIdx=parseInt(b.dataset.shirtTab,10); renderTabs(); renderBody() }))
    }

    const renderBody=()=>{
      const d=(designs||[])[activeIdx]
      const colors=d.sports_shirt_design_colors||[]
      const activeColor=colors.find(c=>c.id===activeColorByDesign[d.id])
      body.innerHTML=`
        ${!open?'<div class="w-full max-w-sm rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-500 mb-4 text-center">ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว</div>':''}
        <div class="w-full max-w-sm">
          <div class="relative">
            ${activeColor?.image_url?`<img src="${esc(activeColor.image_url)}" class="w-full aspect-square object-contain bg-gray-50 rounded-3xl border">`:'<div class="w-full aspect-square bg-gray-50 rounded-3xl border grid place-items-center text-gray-300 text-6xl">👕</div>'}
            ${activeColor?.image_url?`<button data-shirt-expand class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 shadow border flex items-center justify-center text-gray-600 hover:text-indigo-600" title="ขยายดูเต็มจอ">⤢</button>`:''}
          </div>
          <p class="text-base font-bold text-gray-800 text-center mt-4">${esc(d.name||`แบบที่ ${d.design_no}`)}</p>
          ${colors.length?`<div class="flex justify-center gap-2 mt-3">${colors.map(c=>`<button data-shirt-color-btn="${c.id}" class="w-8 h-8 rounded-full border-2 ${activeColorByDesign[d.id]===c.id?'border-indigo-500 scale-110':'border-gray-200'} transition" style="background:${_colorSwatchHex(c.color_name)}" title="สี${esc(c.color_name)}"></button>`).join('')}</div>`:''}
          ${d.html_url?`<button data-shirt-3d="${esc(d.html_url)}" class="w-full mt-4 py-2 rounded-xl border text-xs font-bold text-violet-600 border-violet-200 hover:bg-violet-50">🧊 ดูแบบ 3 มิติ</button>`:''}
          <button data-shirt-vote ${open?'':'disabled'} class="w-full mt-3 py-3 rounded-2xl text-sm font-bold transition ${selectedDesignId===d.id?'bg-indigo-600 text-white':'bg-gray-100 text-gray-600 hover:bg-indigo-50'} ${open?'':'opacity-50 cursor-not-allowed'}">${selectedDesignId===d.id?'✓ โหวตแบบนี้แล้ว':'เลือกโหวตแบบนี้'}</button>
        </div>
      `
      body.querySelector('[data-shirt-expand]')?.addEventListener('click',()=>openImageLightbox(activeColor.image_url))
      body.querySelectorAll('[data-shirt-color-btn]').forEach(b=>b.addEventListener('click',()=>{ activeColorByDesign[d.id]=b.dataset.shirtColorBtn; renderBody() }))
      body.querySelector('[data-shirt-3d]')?.addEventListener('click',e=>open3dShirtViewer(e.currentTarget.dataset.shirt3d))
      body.querySelector('[data-shirt-vote]')?.addEventListener('click',()=>{
        if(!open||selectedDesignId===d.id)return
        openConfirmVoteModal(d,cfg,async()=>{
          const {error}=await supabase.rpc('cast_my_shirt_vote',{p_event:event.id,p_design:d.id})
          if(error){toast(error.message,'error');return}
          selectedDesignId=d.id
          toast('บันทึกโหวตแล้ว')
          renderTabs(); renderBody()
        })
      })
    }

    renderTabs()
    renderBody()
  } catch(e) { console.error(e); body.innerHTML='<p class="text-xs text-red-500 text-center py-8">โหลดข้อมูลไม่สำเร็จ</p>' }
}

export async function renderAdvisorStudents(teacher,rooms=[],tab='list',category=null) {
  const el=main(); el.innerHTML='<div class="py-16 text-center">กำลังโหลด...</div>'
  const samai=rooms.filter(r=>r.category==='สามัญ')
  const religion=rooms.filter(r=>r.category==='ศาสนา')
  if(!samai.length && !religion.length){el.innerHTML='<div class="text-center py-16 text-gray-500">หน้านี้สำหรับครูที่ปรึกษาเท่านั้น</div>';return}
  const cat = category || (samai.length ? 'สามัญ' : 'ศาสนา')
  const activeRooms = cat==='ศาสนา' ? religion : samai
  const roomNames=activeRooms.map(r=>r.main_room)
  const hasBoth = samai.length && religion.length
  el.innerHTML=`<div class="max-w-6xl mx-auto space-y-4">
    <div>
      <h1 class="text-2xl font-bold">👥 นักเรียนที่ปรึกษา${cat==='ศาสนา'?' (ศาสนา)':hasBoth?' (สามัญ)':''}</h1>
      <p class="text-sm text-gray-500">ห้อง ${roomNames.map(esc).join(', ')}</p>
    </div>
    ${hasBoth?`<div class="flex gap-2">
      <button data-advisor-cat="สามัญ" class="px-4 py-2 rounded-xl text-sm font-bold border ${cat==='สามัญ'?'bg-gray-800 text-white border-gray-800':'bg-white text-gray-500 border-gray-200'}">สามัญ</button>
      <button data-advisor-cat="ศาสนา" class="px-4 py-2 rounded-xl text-sm font-bold border ${cat==='ศาสนา'?'bg-gray-800 text-white border-gray-800':'bg-white text-gray-500 border-gray-200'}">ศาสนา</button>
    </div>`:''}
    <div class="flex gap-2 flex-wrap">
      <button data-advisor-tab="list" class="px-4 py-2 rounded-xl text-sm font-bold border ${tab==='list'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">👥 รายชื่อ</button>
      ${cat==='สามัญ'?`
      <button data-advisor-tab="size" class="px-4 py-2 rounded-xl text-sm font-bold border ${tab==='size'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">👕 ไซซ์เสื้อ</button>
      <button data-advisor-tab="vote" class="px-4 py-2 rounded-xl text-sm font-bold border ${tab==='vote'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">🗳️ โหวตแบบเสื้อ</button>`:''}
    </div>
    <div id="advisor-tab-body"></div>
  </div>`
  el.querySelectorAll('[data-advisor-tab]').forEach(b=>b.addEventListener('click',()=>renderAdvisorStudents(teacher,rooms,b.dataset.advisorTab,cat)))
  el.querySelectorAll('[data-advisor-cat]').forEach(b=>b.addEventListener('click',()=>renderAdvisorStudents(teacher,rooms,'list',b.dataset.advisorCat)))
  const body=el.querySelector('#advisor-tab-body')
  if(tab==='vote') await _renderAdvisorVoteTab(body,teacher,rooms,roomNames)
  else if(tab==='size') await _renderAdvisorSizeTab(body,teacher,rooms,roomNames)
  else await _renderAdvisorListTab(body,teacher,rooms,roomNames,cat)
}

async function _renderAdvisorListTab(body,teacher,rooms,roomNames,category) {
  body.innerHTML='<div class="py-12 text-center text-gray-400">กำลังโหลด...</div>'
  try {
    const { advisorResetStudentPassword, advisorRemoveStudentFromRoom } = await import('./api.js')
    const roomField = category==='ศาสนา' ? 'religion_room' : 'main_room'
    const { data: students, error } = await supabase.from('students')
      .select('id,student_code,full_name,main_room,religion_room,image_url,photo_url,profile_id')
      .in(roomField, roomNames).eq('is_active', true).order(roomField).order('student_code')
    if (error) throw error

    // บันทึกคะแนนการอ่าน เป็นของครูที่สอนวิชาภาษาไทยเท่านั้น (ไม่เกี่ยวกับหมวดที่ปรึกษา) ไม่ใช่ทุกคนเห็น
    const shortcuts = category==='ศาสนา'
      ? [{ icon:'🕌', label:'บันทึกคะแนนละหมาด', fn:'_openReligionScore' }]
      : [{ icon:'🌱', label:'บันทึกคะแนนทักษะชีวิต', fn:'_openLifeSkillScore' }]
    if (teacher?.dept === 'THAI') {
      shortcuts.push({ icon:'📖', label:'บันทึกคะแนนการอ่าน', fn:'_openReadingScore' })
    }

    body.innerHTML = `
      <div class="flex flex-wrap gap-2 mb-3">
        ${shortcuts.map(s=>`<button data-shortcut="${s.fn}" class="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center gap-1.5">${s.icon} ${s.label}</button>`).join('')}
      </div>
      <div class="bg-white rounded-2xl border overflow-hidden divide-y">
        ${(students||[]).map(s=>{
          const photo=s.image_url||s.photo_url
          return `<div class="flex items-center gap-3 p-3" data-student-row="${s.id}">
            ${photo?`<img src="${esc(photo)}" alt="" class="w-9 h-11 rounded-lg object-cover border border-gray-200 bg-gray-100 flex-shrink-0 shadow-sm" loading="lazy">`:`<div class="w-9 h-11 rounded-lg bg-emerald-50 text-emerald-600 grid place-items-center font-bold flex-shrink-0 border border-gray-200">${esc((s.full_name||'?').charAt(0))}</div>`}
            <div class="flex-1 min-w-0">
              <b class="text-sm">${esc(s.full_name)}</b>
              <p class="text-xs text-gray-500">${esc(s.student_code)} · ${esc(category==='ศาสนา'?s.religion_room:s.main_room)}${s.profile_id?'':' · <span class="text-amber-500">ยังไม่เปิดบัญชี</span>'}</p>
            </div>
            <button data-advisor-reset="${s.id}" class="px-3 py-1.5 border border-indigo-200 text-indigo-600 rounded-lg text-xs font-semibold hover:bg-indigo-50 transition flex-shrink-0">🔒 รีเซ็ตรหัสผ่าน</button>
            <button data-advisor-remove="${s.id}" data-name="${esc(s.full_name)}" class="px-3 py-1.5 border border-red-100 text-red-500 rounded-lg text-xs font-semibold hover:bg-red-50 transition flex-shrink-0">🗑️ ลบออกจากห้อง</button>
          </div>`
        }).join('') || '<p class="p-8 text-center text-gray-400">ไม่พบนักเรียนในห้องนี้</p>'}
      </div>`

    body.querySelectorAll('[data-shortcut]').forEach(b=>b.addEventListener('click',()=>{
      const fn = window[b.dataset.shortcut]
      if (typeof fn === 'function') fn(roomNames[0])
    }))

    body.querySelectorAll('[data-advisor-reset]').forEach(b=>b.addEventListener('click',()=>{
      const id = Number(b.dataset.advisorReset)
      _openAdvisorResetPasswordModal(id, async (newPw) => {
        await advisorResetStudentPassword(id, newPw)
      })
    }))

    body.querySelectorAll('[data-advisor-remove]').forEach(b=>b.addEventListener('click',async()=>{
      if (!confirm(`ลบ "${b.dataset.name}" ออกจากห้องนี้?\n(ประวัติเช็คชื่อ/คะแนนเดิมจะยังอยู่ครบ แค่ไม่แสดงในห้องนี้อีก)`)) return
      try {
        await advisorRemoveStudentFromRoom(Number(b.dataset.advisorRemove), category)
        toast('ลบออกจากห้องแล้ว')
        renderAdvisorStudents(teacher, rooms, 'list', category)
      } catch(e) { toast(e.message ?? 'ลบไม่สำเร็จ', 'error') }
    }))
  } catch(e) { console.error(e); body.innerHTML = missing() }
}

function _openAdvisorResetPasswordModal(studentId, onConfirm) {
  document.getElementById('advisor-reset-pw-modal')?.remove()
  const m = document.createElement('div')
  m.id = 'advisor-reset-pw-modal'
  m.className = 'fixed inset-0 z-[340] bg-black/50 flex items-center justify-center p-4'
  m.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6">
      <h3 class="font-bold text-gray-800 text-sm mb-3">🔒 ตั้งรหัสผ่านใหม่</h3>
      <div class="flex gap-2 mb-2">
        <input id="advisor-pw-input" type="text" placeholder="อย่างน้อย 6 ตัวอักษร"
          class="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
        <button id="advisor-pw-fill" title="ใช้รหัสนักเรียนเป็นรหัสผ่าน"
          class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-indigo-200 text-indigo-600 text-xs font-semibold hover:bg-indigo-50 transition">🔄</button>
      </div>
      <p id="advisor-pw-msg" class="hidden text-xs text-center py-2 rounded-xl mb-2"></p>
      <div class="flex gap-2">
        <button id="advisor-pw-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="advisor-pw-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition">บันทึก</button>
      </div>
    </div>`
  document.body.appendChild(m)
  m.querySelector('#advisor-pw-cancel').addEventListener('click', () => m.remove())
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('#advisor-pw-fill').addEventListener('click', () => {
    const row = document.querySelector(`[data-student-row="${studentId}"] p`)
    const code = row?.textContent?.split('·')[0]?.trim()
    if (code) m.querySelector('#advisor-pw-input').value = code
  })
  m.querySelector('#advisor-pw-save').addEventListener('click', async () => {
    const btn = m.querySelector('#advisor-pw-save')
    const pw = m.querySelector('#advisor-pw-input').value.trim()
    const msgEl = m.querySelector('#advisor-pw-msg')
    if (!pw || pw.length < 6) {
      msgEl.className = 'text-xs text-center py-2 rounded-xl mb-2 bg-red-50 text-red-600'
      msgEl.textContent = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'
      msgEl.classList.remove('hidden')
      return
    }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await onConfirm(pw)
      toast('ตั้งรหัสผ่านใหม่แล้ว')
      m.remove()
    } catch (e) {
      msgEl.className = 'text-xs text-center py-2 rounded-xl mb-2 bg-red-50 text-red-600'
      msgEl.textContent = 'ไม่สำเร็จ: ' + (e.message ?? '')
      msgEl.classList.remove('hidden')
      btn.disabled = false; btn.textContent = 'บันทึก'
    }
  })
}

async function _renderAdvisorSizeTab(body,teacher,rooms,roomNames) {
  body.innerHTML='<div class="py-12 text-center text-gray-400">กำลังโหลด...</div>'
  try {
    const {event,cfg}=await context()
    const {data:students,error}=await supabase.from('students').select('id,student_code,full_name,main_room,house_color,image_url,photo_url,sports_shirt_size,sports_shirt_requests(*)').in('main_room',roomNames).eq('is_active',true).order('main_room').order('student_code'); if(error)throw error
    const sizes=cfg?.allowed_sizes||['S','M','L','XL','2XL','3XL']; let filter='all'
    const draw=()=>{const rows=(students||[]).filter(s=>{const r=(s.sports_shirt_requests||[]).find(x=>x.event_id===event.id);return filter==='all'||(filter==='none'?!r:r?.status===filter)});body.querySelector('#advisor-rows').innerHTML=rows.map(s=>{const r=(s.sports_shirt_requests||[]).find(x=>x.event_id===event.id),photo=s.image_url||s.photo_url;return `<tr class="border-t"><td class="p-3"><div class="flex items-center gap-3">${photo?`<img src="${esc(photo)}" alt="" class="w-9 h-11 rounded-lg object-cover border border-gray-200 bg-gray-100 flex-shrink-0 shadow-sm" loading="lazy">`:`<div class="w-9 h-11 rounded-lg bg-emerald-50 text-emerald-600 grid place-items-center font-bold flex-shrink-0 border border-gray-200">${esc((s.full_name||'?').charAt(0))}</div>`}<div><b>${esc(s.full_name)}</b><p class="text-xs text-gray-500">${esc(s.student_code)} · ${esc(s.main_room)} · สี${esc(s.house_color||'—')}</p></div></div></td><td class="p-3">${esc(r?.requested_size||'—')}</td><td class="p-3"><select data-size="${s.id}" class="border rounded-lg px-2 py-1">${sizes.map(x=>`<option ${x===(r?.confirmed_size||r?.requested_size)?'selected':''}>${esc(x)}</option>`).join('')}</select></td><td class="p-3"><span class="text-xs ${statusClass(r?.status)} px-2 py-1 rounded-full">${badge(r?.status)}</span></td><td class="p-3"><button data-confirm="${s.id}" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs">ยืนยัน</button></td></tr>`}).join('')||'<tr><td colspan="5" class="p-8 text-center text-gray-400">ไม่พบข้อมูล</td></tr>';body.querySelectorAll('[data-confirm]').forEach(b=>b.onclick=async()=>{const id=Number(b.dataset.confirm),size=body.querySelector(`[data-size="${id}"]`).value;const {error}=await supabase.rpc('advisor_confirm_sports_shirt',{p_event:event.id,p_student:id,p_size:size,p_note:null});if(error)return toast(error.message,'error');toast('ยืนยันไซซ์แล้ว');renderAdvisorStudents(teacher,rooms,'size')})}
    body.innerHTML=`<div class="flex flex-wrap justify-between gap-3 mb-3"><p class="text-sm text-gray-500">ติดตามและยืนยันไซซ์เสื้อ</p><select id="advisor-filter" class="border rounded-xl px-3"><option value="all">ทุกสถานะ</option><option value="none">ยังไม่จำนง</option><option value="pending">รอยืนยัน</option><option value="confirmed">ยืนยันแล้ว</option><option value="advisor_updated">ครูเลือกแทน</option></select></div><div class="bg-white rounded-2xl border overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">นักเรียน</th><th>จำนง</th><th>ไซซ์ยืนยัน</th><th>สถานะ</th><th></th></tr></thead><tbody id="advisor-rows"></tbody></table></div>`
    body.querySelector('#advisor-filter').onchange=e=>{filter=e.target.value;draw()};draw()
  } catch(e){console.error(e);body.innerHTML=missing()}
}

async function _renderAdvisorVoteTab(body,teacher,rooms,roomNames) {
  body.innerHTML='<div class="py-12 text-center text-gray-400">กำลังโหลด...</div>'
  try {
    const {event,cfg}=await context()
    const [{data:students,error},votes,{data:designs}]=await Promise.all([
      supabase.from('students').select('id,student_code,full_name,main_room,gender,image_url,photo_url').in('main_room',roomNames).eq('is_active',true).order('main_room').order('student_code'),
      _fetchAllRows('sports_shirt_votes', q => q.select('student_id,design_id').eq('event_id',event.id)),
      supabase.from('sports_shirt_designs').select('*,sports_shirt_design_colors(*)').eq('event_id',event.id).order('design_no'),
    ])
    if(error)throw error
    ;(designs||[]).forEach(d=>{ d.sports_shirt_design_colors=(d.sports_shirt_design_colors||[]).sort((a,b)=>a.display_order-b.display_order) })
    const designById={}; (designs||[]).forEach(d=>designById[d.id]=d)
    const voteByStudent={}; (votes||[]).forEach(v=>{voteByStudent[v.student_id]=v.design_id})
    const open=cfg?.shirt_vote_enabled && (!cfg.shirt_vote_opens_at||new Date(cfg.shirt_vote_opens_at)<=new Date()) && (!cfg.shirt_vote_closes_at||new Date(cfg.shirt_vote_closes_at)>=new Date())

    const rowsHtml=(students||[]).map(s=>{
      const photo=s.image_url||s.photo_url
      const votedDesign=designById[voteByStudent[s.id]]
      return `<div class="flex items-center gap-3 p-3 border-t first:border-t-0">
        ${photo?`<img src="${esc(photo)}" alt="" class="w-9 h-11 rounded-lg object-cover border border-gray-200 bg-gray-100 flex-shrink-0 shadow-sm" loading="lazy">`:`<div class="w-9 h-11 rounded-lg bg-emerald-50 text-emerald-600 grid place-items-center font-bold flex-shrink-0 border border-gray-200">${esc((s.full_name||'?').charAt(0))}</div>`}
        <div class="flex-1 min-w-0"><b class="text-sm">${esc(s.full_name)}</b><p class="text-xs text-gray-500">${esc(s.student_code)} · ${esc(s.main_room)}</p></div>
        <span class="text-xs px-2 py-1 rounded-full flex-shrink-0 ${votedDesign?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-500'}">${votedDesign?`✓ ${esc(votedDesign.name||`แบบที่ ${votedDesign.design_no}`)}`:'ยังไม่โหวต'}</span>
        <button data-advisor-vote-open="${s.id}" class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold flex-shrink-0">${votedDesign?'เปลี่ยน':'โหวตแทน'}</button>
      </div>`
    }).join('')||'<p class="p-8 text-center text-gray-400">ไม่พบนักเรียน</p>'

    body.innerHTML=`
      ${!open?'<div class="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-500 mb-3 text-center">ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว</div>':''}
      <div class="bg-white rounded-2xl border overflow-hidden">${rowsHtml}</div>
    `
    body.querySelectorAll('[data-advisor-vote-open]').forEach(b=>b.addEventListener('click',()=>{
      const sid=parseInt(b.dataset.advisorVoteOpen,10)
      const s=(students||[]).find(x=>x.id===sid)
      if(!s)return
      const genderDesigns=(designs||[]).filter(d=>d.gender===s.gender)
      _openAdvisorVoteModal(s, genderDesigns, open, async(designId)=>{
        const {error}=await supabase.rpc('advisor_cast_shirt_vote_for_student',{p_event:event.id,p_student:sid,p_design:designId})
        if(error){toast(error.message,'error');return}
        toast(`บันทึกโหวตแทน ${s.full_name} แล้ว`)
        renderAdvisorStudents(teacher,rooms,'vote')
      })
    }))
  } catch(e){console.error(e);body.innerHTML=missing()}
}

function _openAdvisorVoteModal(student,designs,open,onPick) {
  document.getElementById('advisor-vote-modal')?.remove()
  const m=document.createElement('div'); m.id='advisor-vote-modal'; m.className='fixed inset-0 z-[340] bg-black/50 flex items-center justify-center p-4'
  m.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[85vh] overflow-y-auto p-5">
      <div class="flex items-center justify-between mb-4"><h3 class="font-bold text-gray-800 text-sm">โหวตแทน ${esc(student.full_name)}</h3><button id="btn-advisor-vote-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button></div>
      ${designs.length?`<div class="grid grid-cols-2 gap-3">${designs.map(d=>{
        const colors=d.sports_shirt_design_colors||[]
        const pick=colors.find(c=>c.image_url)
        return `<button data-advisor-pick-design="${d.id}" ${open?'':'disabled'} class="border rounded-2xl p-2 text-left hover:border-indigo-400 transition ${open?'':'opacity-50 cursor-not-allowed'}">
          ${pick?.image_url?`<img src="${esc(pick.image_url)}" class="w-full h-24 object-contain bg-gray-50 rounded-xl border mb-1">`:'<div class="w-full h-24 bg-gray-50 rounded-xl border grid place-items-center text-gray-300 text-2xl mb-1">👕</div>'}
          <p class="text-xs font-bold text-gray-700 text-center">${esc(d.name||`แบบที่ ${d.design_no}`)}</p>
        </button>`
      }).join('')}</div>`:'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีแบบเสื้อของเพศนักเรียนคนนี้</p>'}
    </div>
  `
  document.body.appendChild(m)
  m.querySelector('#btn-advisor-vote-close').onclick=()=>m.remove()
  m.addEventListener('click',e=>{if(e.target===m)m.remove()})
  m.querySelectorAll('[data-advisor-pick-design]').forEach(b=>b.addEventListener('click',async()=>{
    if(!open)return
    m.querySelectorAll('[data-advisor-pick-design]').forEach(x=>x.disabled=true)
    await onPick(b.dataset.advisorPickDesign)
    m.remove()
  }))
}

export async function renderShirtSummary() {
  const el=main(); el.innerHTML='<div class="py-16 text-center">กำลังสรุปยอด...</div>'
  try { const {event,cfg}=await context();if(cfg?.shirt_summary_enabled===false){el.innerHTML='<div class="text-center py-16">แอดมินปิดหน้าสรุปยอดไว้</div>';return}
    const {data:{user}}=await supabase.auth.getUser(); const {data:profile}=await supabase.from('profiles').select('role,is_also_admin').eq('id',user.id).maybeSingle(); const isAdmin=profile?.role==='admin'||profile?.is_also_admin===true||await _hasHouseColorAdminPosition(user.id)
    const {data:myTeamMemberships}=await supabase.from('sports_team_memberships').select('team_color_id,role,permissions').eq('event_id',event.id).eq('profile_id',user.id).eq('is_active',true)
    const canManageTeamStaff=isAdmin||(myTeamMemberships||[]).some(m=>m.role==='lead_teacher')
    const [{data:colors},reqs,{data:approvals}]=await Promise.all([supabase.from('team_colors').select('id,name,hex_color').eq('event_id',event.id).order('display_order'),_fetchAllRows('sports_shirt_requests', q=>q.select('status,requested_size,confirmed_size,students(full_name,student_code,main_room,house_color)').eq('event_id',event.id)),isAdmin?supabase.from('sports_team_identity_requests').select('*,team_colors(name,logo_url)').eq('event_id',event.id).eq('status','pending_admin'):Promise.resolve({data:[]})])
    const sizes=cfg?.allowed_sizes||['S','M','L','XL','2XL','3XL']; const confirmed=(reqs||[]).filter(r=>['confirmed','advisor_updated'].includes(r.status));
    el.innerHTML=`<div class="max-w-7xl mx-auto space-y-5"><div class="flex justify-between"><div><h1 class="text-2xl font-bold">📊 สรุปยอดเสื้อกีฬาสี</h1><p class="text-sm text-gray-500">ยอดผลิตนับเฉพาะรายการที่ครูยืนยันแล้ว</p></div><button id="shirt-export" class="px-4 py-2 bg-emerald-600 text-white rounded-xl">ส่งออก CSV</button></div>${isAdmin?`<section class="bg-white border border-indigo-100 rounded-2xl p-4"><div class="flex items-center justify-between gap-3 mb-3"><div><h2 class="font-bold">⚙️ การเปิดใช้งาน</h2><p class="text-xs text-gray-500 mt-1">กดปุ่มในแต่ละการ์ดเพื่อเปลี่ยนสถานะ แล้วบันทึก</p></div><button id="cfg-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกการตั้งค่า</button></div><div class="grid md:grid-cols-4 gap-3">${actionCard('shirt_request_enabled','รับจำนงไซซ์เสื้อ','นักเรียนจะเห็นปุ่มส่งไซซ์ และรอครูที่ปรึกษายืนยัน',!!cfg?.shirt_request_enabled)}${actionCard('shirt_summary_enabled','หน้าสรุปยอดเสื้อ','ผู้รับผิดชอบสามารถดูยอดสีและไซซ์เสื้อได้',!!cfg?.shirt_summary_enabled)}${actionCard('team_workspace_enabled','จัดการสีของฉัน','ครูประจำสีและสต๊าฟเข้าหน้าจัดการสีได้',!!cfg?.team_workspace_enabled)}${actionCard('shirt_vote_enabled','โหวตแบบเสื้อกีฬาสี','นักเรียนเปิดหน้าโหวตดีไซน์เสื้อได้',!!cfg?.shirt_vote_enabled)}</div><div class="grid md:grid-cols-2 gap-3 mt-3"><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">ค่าบำรุงสี (บาท/คน)</h3><p class="text-xs text-gray-500 mt-1">จำนวนเงินเริ่มต้นที่จะบันทึกทุกครั้งที่สแกน QR เก็บค่าบำรุง</p><input id="cfg-dues-amount" type="number" min="0" step="1" value="${Number(cfg?.dues_amount ?? 30)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (%)</h3><p class="text-xs text-gray-500 mt-1">ค่าเริ่มต้นทุกสี — พ่อสี/แม่สีแต่ละคนตั้งค่าเฉพาะสีตัวเองทับได้ในหน้าจัดการสี</p><input id="cfg-cert-threshold" type="number" min="0" max="100" step="1" value="${Number(cfg?.cert_attendance_threshold_pct ?? 80)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div></div></section>`:''}<div class="grid grid-cols-3 gap-3"><div class="bg-white border rounded-2xl p-4"><p class="text-xs text-gray-500">ส่งข้อมูล</p><b class="text-2xl">${reqs?.length||0}</b></div><div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">รอยืนยัน</p><b class="text-2xl">${(reqs||[]).filter(x=>x.status==='pending').length}</b></div><div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ยืนยันแล้ว</p><b class="text-2xl">${confirmed.length}</b></div></div><div class="bg-white border rounded-2xl overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">สี</th>${sizes.map(s=>`<th>${esc(s)}</th>`).join('')}<th>รวม</th></tr></thead><tbody>${(colors||[]).map(c=>{const rr=confirmed.filter(r=>r.students?.house_color===c.name);return `<tr class="border-t"><td class="p-3 font-bold" style="color:${c.hex_color}">สี${esc(c.name)}</td>${sizes.map(s=>`<td class="text-center">${rr.filter(r=>r.confirmed_size===s).length}</td>`).join('')}<td class="text-center font-bold">${rr.length}</td></tr>`}).join('')}</tbody></table></div>${canManageTeamStaff?`<section id="sports-team-membership-admin" class="bg-white border rounded-2xl p-5"><div class="py-8 text-center text-gray-400">กำลังโหลดหน้ามอบหมายผู้ดูแลสี...</div></section>`:''}${isAdmin?`<section class="bg-white border rounded-2xl p-5"><h2 class="font-bold mb-3">🎨 คิวอนุมัติอัตลักษณ์ขั้นสุดท้าย</h2>${approvals?.map(a=>`<div class="p-3 bg-gray-50 rounded-xl flex items-center gap-3 mb-2">${a.proposed_logo_url?`<img src="${esc(a.proposed_logo_url)}" class="w-12 h-12 rounded-full object-cover">`:''}<div class="flex-1"><b>ทีมสี${esc(a.team_colors?.name)}</b><p class="text-xs text-gray-500">${esc(a.proposed_name||a.proposed_motto||'เปลี่ยนโลโก้/อัตลักษณ์')}</p></div><button data-review="${a.id}" data-decision="reject" class="px-3 py-1.5 border rounded-lg text-red-600">ปฏิเสธ</button><button data-review="${a.id}" data-decision="approve" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg">อนุมัติ</button></div>`).join('')||'<p class="text-sm text-gray-400">ไม่มีคำขอรออนุมัติ</p>'}</section>`:''}</div>`
    el.querySelector('#shirt-export').onclick=()=>{const rows=['รหัส,ชื่อ,ห้อง,สี,ไซซ์,สถานะ',...confirmed.map(r=>[r.students?.student_code,r.students?.full_name,r.students?.main_room,r.students?.house_color,r.confirmed_size,r.status].map(x=>`"${String(x||'').replaceAll('"','""')}"`).join(','))];const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+rows.join('\n')],{type:'text/csv'}));a.download='sports-shirt-summary.csv';a.click();URL.revokeObjectURL(a.href)}
    el.querySelectorAll('[data-cfg]').forEach(b=>b.addEventListener('click',()=>{const next=b.dataset.enabled!=='true';b.dataset.enabled=next?'true':'false';renderShirtSummary.pendingCfg={...(renderShirtSummary.pendingCfg||{}),[b.dataset.cfg]:next};b.textContent=next?'ปิดใช้งาน':'เปิดใช้งาน';toast(`เปลี่ยนสถานะแล้ว กดบันทึกเพื่อยืนยัน`)}))
    el.querySelector('#cfg-save')?.addEventListener('click',async()=>{const payload={shirt_request_enabled:!!cfg?.shirt_request_enabled,shirt_summary_enabled:!!cfg?.shirt_summary_enabled,team_workspace_enabled:!!cfg?.team_workspace_enabled,shirt_vote_enabled:!!cfg?.shirt_vote_enabled,dues_amount:Number(el.querySelector('#cfg-dues-amount')?.value)||30,cert_attendance_threshold_pct:Number(el.querySelector('#cfg-cert-threshold')?.value)||80,...(renderShirtSummary.pendingCfg||{})};const {error}=await supabase.from('sports_portal_settings').update({...payload,updated_at:new Date().toISOString()}).eq('event_id',event.id);if(error)return toast(error.message,'error');try{await syncAzizPublicShirtButton(payload.shirt_request_enabled)}catch(e){console.warn('Unable to sync AZIZGAMES shirt button',e)}renderShirtSummary.pendingCfg={};toast('บันทึกการเปิดใช้งานแล้ว');renderShirtSummary()})
    el.querySelectorAll('[data-review]').forEach(b=>b.onclick=async()=>{const {error}=await supabase.rpc('review_team_identity',{p_request:b.dataset.review,p_decision:b.dataset.decision,p_comment:null});if(error)return toast(error.message,'error');toast('บันทึกผลตรวจสอบแล้ว');renderShirtSummary()})
    if(canManageTeamStaff) renderTeamMembershipAdmin(el,event,colors||[],{isAdmin,myTeamMemberships:myTeamMemberships||[]})
  }catch(e){console.error(e);el.innerHTML=missing()}
}

async function renderTeamMembershipAdmin(root,event,colors=[],access={isAdmin:false,myTeamMemberships:[]}) {
  const slot=root.querySelector('#sports-team-membership-admin'); if(!slot)return
  const roleLabels={lead_teacher:'หัวหน้าครูประจำสี',teacher:'ครูประจำสี',staff_lead:'หัวหน้านักเรียนสต๊าฟสี',staff:'นักเรียนสต๊าฟสี'}
  const permLabels={members:'สมาชิก',registrations:'ลงทะเบียนกีฬา',announcements:'ประกาศ',tasks:'งานของสี',shirt_summary:'สรุปเสื้อ',attendance:'เช็คชื่อ',dues:'เก็บค่าบำรุงสี'}
  const isStaffGrade=s=>/(ม\.?\s*[56]|ปวช\.?\s*3|ปวช\s*3)/i.test(String(s?.main_room||''))
  const leadTeamIds=new Set((access.myTeamMemberships||[]).filter(m=>m.role==='lead_teacher').map(m=>m.team_color_id))
  const manageableColors=access.isAdmin?colors:colors.filter(c=>leadTeamIds.has(c.id))
  const canAssignTeachers=!!access.isAdmin
  if(!manageableColors.length){slot.innerHTML='<div class="p-6 text-center text-gray-400">ยังไม่มีสีที่คุณมีสิทธิ์มอบหมายสต๊าฟ</div>';return}
  try {
    const [{data:memberships,error},{data:teachers},{data:students}] = await Promise.all([
      supabase.from('sports_team_memberships').select('*,team_colors(name,hex_color),teachers(full_name,teacher_code),students(full_name,student_code,main_room)').eq('event_id',event.id).eq('is_active',true).order('created_at',{ascending:false}),
      supabase.from('teachers').select('id,teacher_code,full_name,dept,image_url,profile_id').not('profile_id','is',null).order('full_name'),
      supabase.from('students').select('id,student_code,full_name,main_room,profile_id,is_active,image_url,team_color_id,house_color').not('profile_id','is',null).eq('is_active',true).order('student_code'),
    ])
    if(error)throw error
    const staffStudents=(students||[]).filter(isStaffGrade)
    const manageableColorIds=new Set(manageableColors.map(c=>c.id))
    const visibleMemberships=(memberships||[]).filter(m=>access.isAdmin||manageableColorIds.has(m.team_color_id))
    let foundTeamMembers=[]
    slot.innerHTML=`<div class="flex flex-wrap items-start justify-between gap-3 mb-4"><div><h2 class="font-bold">🛡️ มอบหมายผู้ดูแลประจำสี</h2><p class="text-xs text-gray-500 mt-1">${access.isAdmin?'แอดมินกำหนดครูประจำสีและนักเรียนสต๊าฟได้ทุกสี':'พ่อสี/แม่สีมอบหมายได้เฉพาะนักเรียนสต๊าฟในสีของตนเอง'}</p></div><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">ใช้งานอยู่ ${memberships?.length||0} คน</span></div>
      <div class="grid lg:grid-cols-5 gap-3 mb-4">
        <select id="team-member-color" class="border rounded-xl px-3 py-2 text-sm">${manageableColors.map(c=>`<option value="${esc(c.id)}">สี${esc(c.name)}</option>`).join('')}</select>
        <input id="team-member-code-input" class="border rounded-xl px-3 py-2 text-sm lg:col-span-2" placeholder="กรอกรหัสครู/รหัสนักเรียน เช่น 1087, 608001">
        <select id="team-member-role" class="border rounded-xl px-3 py-2 text-sm">
          ${canAssignTeachers?'<option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option>':''}
          <option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option>
          <option value="staff">นักเรียนสต๊าฟสี</option>
        </select>
        <button id="team-member-search" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm">ค้นหารายชื่อ</button>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">${Object.entries(permLabels).map(([k,v])=>permissionButton(k,v,true)).join('')}</div>
      <div id="team-member-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4">
        <p class="text-xs font-bold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบหมาย:</p>
        <div id="team-member-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div>
        <button id="team-member-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันและมอบหมายสิทธิ์ประจำสี</button>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 mt-2 mb-2"><h3 class="font-bold text-sm">📋 ตรวจสอบรายชื่อผู้ได้รับสิทธิ์</h3><span id="team-member-count" class="text-xs text-gray-500"></span></div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <select id="team-member-filter-color" class="border rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${manageableColors.map(c=>`<option value="${esc(c.id)}">สี${esc(c.name)}</option>`).join('')}</select>
        <select id="team-member-filter-role" class="border rounded-xl px-3 py-2 text-sm"><option value="">ทุกบทบาท</option><option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option><option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option><option value="staff">นักเรียนสต๊าฟสี</option></select>
        <input id="team-member-filter-search" class="border rounded-xl px-3 py-2 text-sm" placeholder="🔍 ค้นหาชื่อ/รหัสครู/รหัสนักเรียน...">
      </div>
      <div id="team-member-table-wrap"></div>`
    const memberPersonText=m=>m.teachers?.full_name?`${m.teachers.full_name}${m.teachers.teacher_code?` (${m.teachers.teacher_code})`:''}`:`${m.students?.student_code||''} ${m.students?.full_name||''} ${m.students?.main_room?`· ${m.students.main_room}`:''}`
    const renderMemberTable=()=>{
      const colorFilter=slot.querySelector('#team-member-filter-color')?.value||''
      const roleFilter=slot.querySelector('#team-member-filter-role')?.value||''
      const q=(slot.querySelector('#team-member-filter-search')?.value||'').trim().toLowerCase()
      const filtered=visibleMemberships.filter(m=>{
        if(colorFilter&&m.team_color_id!==colorFilter)return false
        if(roleFilter&&m.role!==roleFilter)return false
        if(q&&!memberPersonText(m).toLowerCase().includes(q))return false
        return true
      })
      const countEl=slot.querySelector('#team-member-count')
      if(countEl)countEl.textContent=`แสดง ${filtered.length} จาก ${visibleMemberships.length} คน`
      const tableWrap=slot.querySelector('#team-member-table-wrap')
      tableWrap.innerHTML=`<div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ผู้ได้รับสิทธิ์</th><th>สี</th><th>บทบาท</th><th>สิทธิ์</th><th></th></tr></thead><tbody>${filtered.map(m=>{const person=memberPersonText(m);const perms=Object.entries(m.permissions||{}).filter(([,v])=>v).map(([k])=>permLabels[k]||k).join(', ')||'ไม่มีสิทธิ์ย่อย';const canRemove=access.isAdmin||(m.student_id&&['staff_lead','staff'].includes(m.role));return `<tr class="border-t"><td class="p-3 font-medium">${esc(person||'ไม่พบชื่อ')}</td><td class="p-3"><span class="font-bold" style="color:${esc(m.team_colors?.hex_color||'#334155')}">สี${esc(m.team_colors?.name||'—')}</span></td><td class="p-3">${esc(roleLabels[m.role]||m.role)}</td><td class="p-3 text-xs text-gray-500">${esc(perms)}</td><td class="p-3 text-right">${canRemove?`<button data-team-member-remove="${esc(m.id)}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button>`:'<span class="text-xs text-gray-300">ล็อกโดยแอดมิน</span>'}</td></tr>`}).join('')||`<tr><td colspan="5" class="p-6 text-center text-gray-400">${visibleMemberships.length?'ไม่พบรายชื่อที่ตรงกับตัวกรอง':'ยังไม่มีผู้ได้รับสิทธิ์ประจำสี'}</td></tr>`}</tbody></table></div>`
      tableWrap.querySelectorAll('[data-team-member-remove]').forEach(b=>b.addEventListener('click',async()=>{const {error}=await supabase.from('sports_team_memberships').update({is_active:false,ends_at:new Date().toISOString()}).eq('id',b.dataset.teamMemberRemove);if(error)return toast(error.message,'error');toast('ปิดสิทธิ์แล้ว');renderTeamMembershipAdmin(root,event,colors,access)}))
    }
    renderMemberTable()
    slot.querySelector('#team-member-filter-color')?.addEventListener('change',renderMemberTable)
    slot.querySelector('#team-member-filter-role')?.addEventListener('change',renderMemberTable)
    slot.querySelector('#team-member-filter-search')?.addEventListener('input',renderMemberTable)
    const parseCodes=value=>String(value||'').split(/[\s,]+/).map(x=>x.trim()).filter(Boolean)
    const renderPreview=()=>{
      const wrap=slot.querySelector('#team-member-preview'), cards=slot.querySelector('#team-member-preview-cards')
      if(!foundTeamMembers.length){wrap?.classList.add('hidden');return}
      wrap?.classList.remove('hidden')
      cards.innerHTML=foundTeamMembers.map(p=>`<div class="bg-white rounded-xl border border-indigo-100 p-3 flex items-center gap-3">${p.image_url?`<img src="${esc(p.image_url)}" class="${p.kind==='student'?'w-10 h-14':'w-10 h-10 rounded-full'} object-cover flex-shrink-0">`:`<div class="${p.kind==='student'?'w-10 h-14':'w-10 h-10 rounded-full'} bg-indigo-50 text-indigo-600 grid place-items-center font-bold flex-shrink-0">${p.kind==='teacher'?'ครู':'นร'}</div>`}<div class="min-w-0"><p class="font-bold text-gray-800 text-xs truncate">${esc(p.full_name)} <span class="ml-1 px-1.5 py-0.5 rounded ${p.kind==='teacher'?'bg-amber-100 text-amber-800':'bg-emerald-100 text-emerald-800'} text-[9px] font-bold">${p.kind==='teacher'?'คุณครู':'นักเรียนสต๊าฟ'}</span></p><p class="text-[10px] text-gray-400">${esc(p.detail)}</p></div></div>`).join('')
    }
    slot.querySelector('#team-member-search')?.addEventListener('click',()=>{
      const codes=parseCodes(slot.querySelector('#team-member-code-input')?.value)
      if(!codes.length)return toast('กรุณากรอกรหัสครูหรือรหัสนักเรียน','error')
      const selectedColorId=slot.querySelector('#team-member-color')?.value
      const selectedColor=manageableColors.find(c=>c.id===selectedColorId)
      const codeSet=new Set(codes.map(String))
      const foundTeachers=canAssignTeachers?(teachers||[]).filter(t=>codeSet.has(String(t.teacher_code))).map(t=>({...t,kind:'teacher',code:t.teacher_code,detail:`รหัสครู ${t.teacher_code} · กลุ่มสาระ ${t.dept||'—'}`})):[]
      const foundStudents=staffStudents.filter(s=>codeSet.has(String(s.student_code))&&(s.team_color_id===selectedColorId||s.house_color===selectedColor?.name)).map(s=>({...s,kind:'student',code:s.student_code,detail:`รหัส ${s.student_code} · ห้อง ${s.main_room||'—'} · สี${selectedColor?.name||'—'}`}))
      foundTeamMembers=[...foundTeachers,...foundStudents]
      if(!foundTeamMembers.length)return toast('ไม่พบรายชื่อที่ตรงกับรหัสและสีที่เลือก หรือเด็กไม่ได้อยู่ระดับสต๊าฟที่อนุญาต','error')
      renderPreview()
    })
    slot.querySelector('#team-member-code-input')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();slot.querySelector('#team-member-search')?.click()}})
    slot.querySelector('#team-member-add')?.addEventListener('click',async()=>{
      const role=slot.querySelector('#team-member-role')?.value, teamColorId=slot.querySelector('#team-member-color')?.value
      if(!teamColorId||!foundTeamMembers.length)return toast('กรุณาเลือกสีและค้นหารายชื่อก่อน','error')
      if(!access.isAdmin&&!leadTeamIds.has(teamColorId))return toast('หัวหน้าครูประจำสีมอบหมายได้เฉพาะสีของตนเอง','error')
      if(foundTeamMembers.some(p=>p.kind==='student')&&!['staff_lead','staff'].includes(role))return toast('บทบาทนี้ใช้กับครูเท่านั้น หากจะมอบหมายให้นักเรียนให้เลือกบทบาทนักเรียนสต๊าฟ','error')
      if(foundTeamMembers.some(p=>p.kind==='teacher')&&!['lead_teacher','teacher'].includes(role))return toast('บทบาทนี้ใช้กับนักเรียนเท่านั้น หากจะมอบหมายให้ครูให้เลือกบทบาทครูประจำสี','error')
      const permissions={};slot.querySelectorAll('[data-team-perm]').forEach(x=>permissions[x.dataset.teamPerm]=x.dataset.enabled==='true')
      const payload=foundTeamMembers.map(p=>({event_id:event.id,team_color_id:teamColorId,profile_id:p.profile_id,teacher_id:p.kind==='teacher'?Number(p.id):null,student_id:p.kind==='student'?Number(p.id):null,role,permissions,is_active:true,ends_at:null}))
      const {error}=await supabase.from('sports_team_memberships').upsert(payload,{onConflict:'event_id,team_color_id,profile_id'})
      if(error)return toast(error.message,'error')
      toast(`มอบหมายสิทธิ์ประจำสีแล้ว ${payload.length} คน`); renderTeamMembershipAdmin(root,event,colors,access)
    })
    slot.querySelectorAll('[data-team-perm]').forEach(b=>b.addEventListener('click',()=>{const next=b.dataset.enabled!=='true';b.dataset.enabled=next?'true':'false';b.className=`px-3 py-2 rounded-xl text-xs font-bold border ${next?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-slate-50 text-slate-500 border-slate-200'}`;const label=(b.textContent.split(':').pop()||'').trim();b.textContent=`${next?'อนุญาต':'ไม่อนุญาต'}: ${label}`}))
  } catch(e) { console.error(e); slot.innerHTML='<div class="p-5 rounded-2xl bg-red-50 text-red-700 text-sm">โหลดหน้ามอบหมายผู้ดูแลสีไม่สำเร็จ</div>' }
}

export async function renderShirtVoteSettings(gender='ชาย') {
  const el=main(); el.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>'
  try {
    const {event,cfg}=await context()
    const {data:{user}}=await supabase.auth.getUser()
    const {data:profile}=await supabase.from('profiles').select('role,is_also_admin').eq('id',user.id).maybeSingle()
    const isAdmin=profile?.role==='admin'||profile?.is_also_admin===true
    if(!isAdmin){el.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}
    const [{data:designs,error},{data:managers},{data:teachers}] = await Promise.all([
      supabase.from('sports_shirt_designs').select('*,sports_shirt_design_colors(*)').eq('event_id',event.id).eq('gender',gender).order('design_no'),
      supabase.from('sports_shirt_vote_managers').select('*,teachers(full_name,teacher_code)').eq('event_id',event.id),
      supabase.from('teachers').select('id,teacher_code,full_name,dept,profile_id').not('profile_id','is',null).order('full_name'),
    ])
    if(error)throw error
    ;(designs||[]).forEach(d=>{ d.sports_shirt_design_colors=(d.sports_shirt_design_colors||[]).sort((a,b)=>a.display_order-b.display_order) })
    let foundManagers=[]
    const toDatetimeLocal=iso=>iso?new Date(iso).toISOString().slice(0,16):''
    const designCardsHtml=(designs||[]).map(d=>`
      <div class="border rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between"><b>แบบที่ ${d.design_no}</b>${d.html_url?'<span class="text-[10px] bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">มี 3 มิติ</span>':''}</div>
        <input data-design-name="${d.id}" value="${esc(d.name||'')}" placeholder="ชื่อแบบ" class="w-full border rounded-lg px-2 py-1.5 text-xs">
        <label class="block text-[10px] text-gray-400">ไฟล์ HTML 3 มิติ (ออปชัน ใช้ร่วมทุกสี)</label>
        <input data-design-html="${d.id}" type="file" accept="text/html,.html" class="w-full text-xs">
        <div class="grid grid-cols-2 gap-2 pt-1">
          ${(d.sports_shirt_design_colors||[]).map(c=>`
            <div class="border rounded-xl p-2">
              <div data-color-preview="${c.id}">${c.image_url?`<img src="${esc(c.image_url)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`:'<div class="w-full h-20 bg-gray-50 rounded-lg border grid place-items-center text-gray-300 text-xl mb-1">👕</div>'}</div>
              <p class="text-[10px] font-bold text-gray-600 text-center mb-1">สี${esc(c.color_name)}</p>
              <input data-color-image="${c.id}" data-color-design="${d.id}" type="file" accept="image/png,image/jpeg,image/webp" class="w-full text-[10px]">
            </div>
          `).join('')}
        </div>
        <button data-design-save="${d.id}" class="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold mt-1">บันทึกแบบที่ ${d.design_no}</button>
      </div>
    `).join('')
    const managerRowsHtml=(managers||[]).map(m=>`<tr class="border-t"><td class="p-3">${esc(m.teachers?.full_name||'ไม่พบชื่อ')}${m.teachers?.teacher_code?` (${esc(m.teachers.teacher_code)})`:''}</td><td class="p-3 text-right"><button data-vote-manager-remove="${m.id}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button></td></tr>`).join('')||'<tr><td colspan="2" class="p-6 text-center text-gray-400">ยังไม่มีครูที่ได้รับสิทธิ์เพิ่ม</td></tr>'
    el.innerHTML=`<div class="max-w-6xl mx-auto space-y-5">
      <h1 class="text-2xl font-bold">🗳️ ตั้งค่าโหวตแบบเสื้อกีฬาสี</h1>
      <div class="bg-white border rounded-2xl p-5">
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">เปิดโหวตตั้งแต่</label><input id="vote-opens-at" type="datetime-local" value="${toDatetimeLocal(cfg?.shirt_vote_opens_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ปิดโหวตเมื่อ</label><input id="vote-closes-at" type="datetime-local" value="${toDatetimeLocal(cfg?.shirt_vote_closes_at)}" class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-window-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกช่วงเวลาโหวต (ใช้ร่วมกันทั้งชาย-หญิง)</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">🌐 โหมดโหวตสาธารณะ (ไม่ต้องล็อกอิน)</h3>
        <p class="text-xs text-gray-500 mb-3">เปิดหน้าแยกให้นักเรียนกรอกรหัสนักเรียนเข้าโหวตได้โดยไม่ต้องล็อกอิน ปพ.5 — เหมาะกับจุดโหวตหน้างาน (kiosk) เข้าที่ <code>shirt-vote-public.html</code></p>
        <div class="mb-3">${actionCard('shirt_vote_public_enabled','เปิดโหมดโหวตไม่ล็อกอิน','นักเรียนกรอกรหัสนักเรียนแล้วเข้าโหวตได้ทันที',!!cfg?.shirt_vote_public_enabled)}</div>
        <div class="grid md:grid-cols-2 gap-3 mb-3">
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ลิงก์คลิปคู่มือการเริ่มใช้งาน</label><input id="vote-public-tutorial-url" value="${esc(cfg?.shirt_vote_tutorial_url||'')}" placeholder="https://youtube.com/..." class="border rounded-xl px-3 py-2 text-sm w-full"></div>
          <div><label class="block text-xs font-bold text-gray-500 mb-1">ลิงก์คลิปแนะนำ ปพ.5</label><input id="vote-public-intro-url" value="${esc(cfg?.shirt_vote_intro_url||'')}" placeholder="https://youtube.com/..." class="border rounded-xl px-3 py-2 text-sm w-full"></div>
        </div>
        <button id="vote-public-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกโหมดโหวตสาธารณะ</button>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${gender==='ชาย'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">👦 ชาย</button>
          <button data-vote-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${gender==='หญิง'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">👧 หญิง</button>
        </div>
        <div class="grid md:grid-cols-2 gap-4">${designCardsHtml}</div>
      </div>
      <div class="bg-white border rounded-2xl p-5">
        <h3 class="font-bold mb-3">👤 มอบสิทธิ์ครูดูแดชบอร์ดผลโหวต</h3>
        <div class="flex gap-2 mb-3"><input id="vote-manager-code-input" class="flex-1 border rounded-xl px-3 py-2 text-sm" placeholder="กรอกรหัสครู เช่น 1087, 1092"><button id="vote-manager-search" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">ค้นหา</button></div>
        <div id="vote-manager-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4"><div id="vote-manager-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div><button id="vote-manager-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันมอบสิทธิ์</button></div>
        <div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ครู</th><th></th></tr></thead><tbody>${managerRowsHtml}</tbody></table></div>
      </div>
    </div>`
    el.querySelectorAll('[data-vote-gender]').forEach(b=>b.addEventListener('click',()=>renderShirtVoteSettings(b.dataset.voteGender)))
    el.querySelectorAll('[data-color-image]').forEach(input=>input.addEventListener('change',()=>{
      const file=input.files?.[0]; if(!file)return
      const preview=el.querySelector(`[data-color-preview="${input.dataset.colorImage}"]`)
      if(preview) preview.innerHTML=`<img src="${URL.createObjectURL(file)}" class="w-full h-20 object-contain bg-gray-50 rounded-lg border mb-1">`
    }))
    el.querySelector('#vote-window-save')?.addEventListener('click',async()=>{
      const opensVal=el.querySelector('#vote-opens-at')?.value, closesVal=el.querySelector('#vote-closes-at')?.value
      const {error}=await supabase.from('sports_portal_settings').update({shirt_vote_opens_at:opensVal?new Date(opensVal).toISOString():null,shirt_vote_closes_at:closesVal?new Date(closesVal).toISOString():null,updated_at:new Date().toISOString()}).eq('event_id',event.id)
      if(error)return toast(error.message,'error')
      toast('บันทึกช่วงเวลาโหวตแล้ว'); renderShirtVoteSettings(gender)
    })
    el.querySelectorAll('[data-cfg="shirt_vote_public_enabled"]').forEach(b=>b.addEventListener('click',()=>{
      const next=b.dataset.enabled!=='true'
      b.dataset.enabled=next?'true':'false'
      b.textContent=next?'ปิดใช้งาน':'เปิดใช้งาน'
    }))
    el.querySelector('#vote-public-save')?.addEventListener('click',async()=>{
      const enabledBtn=el.querySelector('[data-cfg="shirt_vote_public_enabled"]')
      const payload={
        shirt_vote_public_enabled: enabledBtn?.dataset.enabled==='true',
        shirt_vote_tutorial_url: el.querySelector('#vote-public-tutorial-url')?.value?.trim()||null,
        shirt_vote_intro_url: el.querySelector('#vote-public-intro-url')?.value?.trim()||null,
        updated_at: new Date().toISOString(),
      }
      const {error}=await supabase.from('sports_portal_settings').update(payload).eq('event_id',event.id)
      if(error)return toast(error.message,'error')
      toast('บันทึกโหมดโหวตสาธารณะแล้ว'); renderShirtVoteSettings(gender)
    })
    el.querySelectorAll('[data-design-save]').forEach(b=>b.addEventListener('click',async()=>{
      const designId=b.dataset.designSave
      const name=el.querySelector(`[data-design-name="${designId}"]`)?.value?.trim()||null
      const htmlFile=el.querySelector(`[data-design-html="${designId}"]`)?.files?.[0]
      b.disabled=true; b.textContent='กำลังบันทึก...'
      try {
        const patch={name,updated_at:new Date().toISOString()}
        if(htmlFile) patch.html_url=await uploadShirtDesignHtml(designId,htmlFile)
        const {error}=await supabase.from('sports_shirt_designs').update(patch).eq('id',designId)
        if(error)throw error
        const colorInputs=el.querySelectorAll(`[data-color-design="${designId}"]`)
        for(const input of colorInputs) {
          const file=input.files?.[0]; if(!file) continue
          const colorId=input.dataset.colorImage
          const url=await uploadShirtDesignColorImage(designId,colorId,file)
          const {error:cErr}=await supabase.from('sports_shirt_design_colors').update({image_url:url,updated_at:new Date().toISOString()}).eq('id',colorId)
          if(cErr)throw cErr
        }
        toast('บันทึกแบบเสื้อแล้ว'); renderShirtVoteSettings(gender)
      } catch(e) { toast(e.message,'error'); b.disabled=false; b.textContent=`บันทึกแบบที่ ${(designs||[]).find(d=>d.id===designId)?.design_no||''}` }
    }))
    el.querySelector('#vote-manager-search')?.addEventListener('click',()=>{
      const codes=String(el.querySelector('#vote-manager-code-input')?.value||'').split(/[\s,]+/).map(x=>x.trim()).filter(Boolean)
      if(!codes.length)return toast('กรุณากรอกรหัสครู','error')
      const codeSet=new Set(codes.map(String))
      foundManagers=(teachers||[]).filter(t=>codeSet.has(String(t.teacher_code)))
      if(!foundManagers.length)return toast('ไม่พบรหัสครูที่ตรงกัน','error')
      const wrap=el.querySelector('#vote-manager-preview'), cards=el.querySelector('#vote-manager-preview-cards')
      wrap.classList.remove('hidden')
      cards.innerHTML=foundManagers.map(t=>`<div class="bg-white rounded-xl border border-indigo-100 p-3"><p class="font-bold text-gray-800 text-xs">${esc(t.full_name)}</p><p class="text-[10px] text-gray-400">รหัสครู ${esc(t.teacher_code)} · กลุ่มสาระ ${esc(t.dept||'—')}</p></div>`).join('')
    })
    el.querySelector('#vote-manager-code-input')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();el.querySelector('#vote-manager-search')?.click()}})
    el.querySelector('#vote-manager-add')?.addEventListener('click',async()=>{
      if(!foundManagers.length)return toast('กรุณาค้นหารายชื่อก่อน','error')
      const payload=foundManagers.map(t=>({event_id:event.id,teacher_id:t.id,profile_id:t.profile_id,granted_by:null}))
      const {error}=await supabase.from('sports_shirt_vote_managers').upsert(payload,{onConflict:'event_id,teacher_id'})
      if(error)return toast(error.message,'error')
      toast(`มอบสิทธิ์แล้ว ${payload.length} คน`); renderShirtVoteSettings(gender)
    })
    el.querySelectorAll('[data-vote-manager-remove]').forEach(b=>b.addEventListener('click',async()=>{
      const {error}=await supabase.from('sports_shirt_vote_managers').delete().eq('id',b.dataset.voteManagerRemove)
      if(error)return toast(error.message,'error')
      toast('ปิดสิทธิ์แล้ว'); renderShirtVoteSettings(gender)
    }))
  } catch(e) { console.error(e); el.innerHTML=missing() }
}

export async function renderShirtVoteDashboard(gender='ชาย') {
  const el=main(); el.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>'
  try {
    const {event}=await context()
    const {data:{user}}=await supabase.auth.getUser()
    const {data:profile}=await supabase.from('profiles').select('role,is_also_admin').eq('id',user.id).maybeSingle()
    const isAdmin=profile?.role==='admin'||profile?.is_also_admin===true
    const {data:canView}=await supabase.rpc('can_view_shirt_vote_dashboard',{p_event:event.id})
    if(!isAdmin&&!canView){el.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}
    const [{data:designs,error},allVotes] = await Promise.all([
      supabase.from('sports_shirt_designs').select('*,sports_shirt_design_colors(*)').eq('event_id',event.id).eq('gender',gender).order('design_no'),
      _fetchAllRows('sports_shirt_votes', q => q.select('design_id').eq('event_id',event.id)),
    ])
    if(error)throw error
    const designIds=new Set((designs||[]).map(d=>d.id))
    const tally={}
    ;(allVotes||[]).forEach(v=>{ if(designIds.has(v.design_id)) tally[v.design_id]=(tally[v.design_id]||0)+1 })
    const total=Object.values(tally).reduce((a,b)=>a+b,0)
    const topCount=Math.max(0,...(designs||[]).map(d=>tally[d.id]||0))
    const ranked=[...(designs||[])].sort((a,b)=>(tally[b.id]||0)-(tally[a.id]||0))
    const rankBadge=i=>i===0?'🥇':i===1?'🥈':i===2?'🥉':`#${i+1}`
    const colorPointer={}
    const rowsHtml=ranked.map((d,i)=>{
      const count=tally[d.id]||0
      const pct=total?Math.round(count/total*100):0
      const withImages=(d.sports_shirt_design_colors||[]).filter(c=>c.image_url)
      colorPointer[d.id]=withImages.length?Math.floor(Math.random()*withImages.length):0
      const pick=withImages[colorPointer[d.id]]||null
      const isTop=count>0&&count===topCount
      return `
        <div class="flex items-center gap-4 p-3 rounded-2xl ${isTop?'bg-indigo-50/60':''}">
          <span class="w-8 text-center text-sm font-bold text-gray-400 flex-shrink-0">${rankBadge(i)}</span>
          <div class="relative flex-shrink-0">
            ${pick?.image_url?`<img data-shirt-dash-img="${d.id}" src="${esc(pick.image_url)}" class="w-14 h-14 object-contain bg-gray-50 rounded-xl border">`:'<div class="w-14 h-14 bg-gray-50 rounded-xl border grid place-items-center text-gray-300 text-xl">👕</div>'}
            ${withImages.length>1?`<button data-shirt-dash-swap="${d.id}" class="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border shadow flex items-center justify-center text-[11px]" title="สลับสี">🔄</button>`:''}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-gray-700 truncate mb-1">${esc(d.name||`แบบที่ ${d.design_no}`)}</p>
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden"><div class="bg-indigo-500 h-full rounded-full transition-all" style="width:${pct}%"></div></div>
              <span class="w-24 text-xs text-right text-gray-500 flex-shrink-0">${count} คน (${pct}%)</span>
            </div>
          </div>
        </div>
      `
    }).join('')
    el.innerHTML=`<div class="max-w-3xl mx-auto space-y-5">
      <div class="flex items-center justify-between"><h1 class="text-2xl font-bold">📊 ผลโหวตแบบเสื้อกีฬาสี</h1><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">โหวตแล้ว ${total} คน</span></div>
      <div class="bg-white border rounded-2xl p-5">
        <div class="flex gap-2 mb-4">
          <button data-vote-dash-gender="ชาย" class="px-4 py-2 rounded-xl text-sm font-bold border ${gender==='ชาย'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">👦 ชาย</button>
          <button data-vote-dash-gender="หญิง" class="px-4 py-2 rounded-xl text-sm font-bold border ${gender==='หญิง'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">👧 หญิง</button>
        </div>
        <div class="divide-y divide-gray-50">${rowsHtml || '<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีแบบเสื้อของเพศนี้</p>'}</div>
      </div>
    </div>`
    el.querySelectorAll('[data-vote-dash-gender]').forEach(b=>b.addEventListener('click',()=>renderShirtVoteDashboard(b.dataset.voteDashGender)))
    el.querySelectorAll('[data-shirt-dash-swap]').forEach(b=>b.addEventListener('click',()=>{
      const id=b.dataset.shirtDashSwap
      const d=(designs||[]).find(x=>x.id===id)
      const withImages=(d?.sports_shirt_design_colors||[]).filter(c=>c.image_url)
      if(!withImages.length)return
      colorPointer[id]=((colorPointer[id]||0)+1)%withImages.length
      const img=el.querySelector(`[data-shirt-dash-img="${id}"]`)
      if(img) img.src=withImages[colorPointer[id]].image_url
    }))
  } catch(e) { console.error(e); el.innerHTML=missing() }
}


export async function openMyTeamWorkspace() {
  const old=document.getElementById('my-team-workspace');old?.remove(); const wrap=document.createElement('div');wrap.id='my-team-workspace';wrap.className='fixed inset-0 bg-slate-950 text-slate-100 overflow-hidden';wrap.style.zIndex='350';wrap.innerHTML='<div class="py-20 text-center">กำลังโหลดจัดการสีของฉัน...</div>';document.body.appendChild(wrap)
  try {
    const {data:{user}}=await supabase.auth.getUser()
    const {data:members,error}=await supabase.from('sports_team_memberships').select('*,team_colors(*)').eq('profile_id',user.id).eq('is_active',true)
    if(error)throw error
    const m=members?.[0]
    if(!m){wrap.innerHTML='<button class="absolute right-4 top-4" data-close>✕</button><div class="py-24 text-center">ยังไม่ได้รับแต่งตั้งให้ดูแลคณะสี</div>';wrap.querySelector('[data-close]').onclick=()=>wrap.remove();return}
    await renderColorWorkspace(wrap,m,m.team_colors)
  } catch(e){console.error(e);wrap.innerHTML=`<button class="absolute right-4 top-4" onclick="this.parentElement.remove()">✕</button>${missing()}`}
}

// หน้า "สีของฉัน" แบบดูอย่างเดียวสำหรับนักเรียนทั่วไป (ไม่ต้องมีสิทธิ์ครู/สต๊าฟ)
// ใช้ renderColorWorkspace ตัวเดียวกับหน้าจัดการของครู แต่บังคับ canAttendance=false และ
// isLead=false เสมอ (studentView) เพราะแท็บเช็คชื่อให้แก้ไขข้อมูลการเข้าแถวของคนอื่นได้ —
// นักเรียนทั่วไปไม่ควรมีสิทธิ์นี้เด็ดขาด (เสี่ยงมาร์กเช็คชื่อปลอมให้ตัวเอง/เพื่อน)
export async function openMyColorAsStudent(student) {
  const old=document.getElementById('my-team-workspace');old?.remove(); const wrap=document.createElement('div');wrap.id='my-team-workspace';wrap.className='fixed inset-0 bg-slate-950 text-slate-100 overflow-hidden';wrap.style.zIndex='350';wrap.innerHTML='<div class="py-20 text-center">กำลังโหลดสีของฉัน...</div>';document.body.appendChild(wrap)
  try {
    const {event}=await context()
    let q=supabase.from('team_colors').select('*').eq('event_id',event.id)
    q=student.team_color_id?q.eq('id',student.team_color_id):q.eq('name',student.house_color||'')
    const {data:c,error}=await q.maybeSingle()
    if(error)throw error
    if(!c){wrap.innerHTML='<button class="absolute right-4 top-4" data-close>✕</button><div class="py-24 text-center">ยังไม่พบข้อมูลสีของคุณ</div>';wrap.querySelector('[data-close]').onclick=()=>wrap.remove();return}
    const {data:{user}}=await supabase.auth.getUser()
    const m={role:'student',profile_id:user?.id||null,permissions:{}}
    await renderColorWorkspace(wrap,m,c,{studentView:true})
  } catch(e){console.error(e);wrap.innerHTML=`<button class="absolute right-4 top-4" onclick="this.parentElement.remove()">✕</button>${missing()}`}
}

async function renderColorWorkspace(wrap,m,c,opts={}) {
  const studentView=!!opts.studentView
  try {
    const safe=async p=>{const {data,error}=await p;if(error){console.warn(error);return []}return data||[]}
    // นักเรียนทั่วไป (studentView) ไม่มีแถวใน sports_team_memberships จริง ทำให้ RLS ของตาราง
    // sports_team_tasks/sports_team_announcements/sports_team_identity_requests (is_team_member())
    // และ sports_shirt_requests (เห็นแค่แถวตัวเอง) บล็อกการอ่านข้อมูลจริงอยู่แล้ว — ถ้าเปิดแท็บ
    // เหล่านี้ให้นักเรียนจะเห็นแค่ "ว่างเปล่า"/ข้อมูลไม่ครบ ดูเหมือนระบบพัง จึงปิดแท็บไปเลยดีกว่า
    const perms=m.permissions||{}, isLead=!studentView&&m.role==='lead_teacher', canMembers=perms.members!==false, canReg=perms.registrations!==false, canTasks=!studentView&&perms.tasks!==false, canAnn=!studentView&&perms.announcements!==false, canShirt=!studentView&&perms.shirt_summary!==false, canAttendance=!studentView&&perms.attendance!==false
    // ค่าบำรุงสีเกี่ยวข้องกับเงินจริง จึงต่างจากสิทธิ์อื่นๆ ในหน้านี้ (ที่ default เปิดถ้าไม่ได้ปิดไว้)
    // — ต้อง "เปิดชัดเจน" (=== true) เท่านั้นถึงจะเห็นแท็บนี้ ไม่ default เปิดให้เหมือนสิทธิ์อื่น
    const canDues=!studentView&&perms.dues===true
    const theme=localStorage.getItem('sports_team_theme')||'dark'; wrap.dataset.theme=theme
    const [{event,cfg},{data:pub},{data:headerRows}] = await Promise.all([context(),supabase.from('settings').select('value').eq('key','public_buttons').maybeSingle(),supabase.from('settings').select('key,value').in('key',['school_name','school_name_2'])])
    const publicButtons=pub?.value&&typeof pub.value==='object'?pub.value:{}
    const headerMap=Object.fromEntries((headerRows||[]).map(r=>[r.key,r.value]))
    const docHeader={academicYear:event?.academic_year||'2569',schoolName:headerMap.school_name||'โรงเรียนมูลนิธิอาซิซสถานร่วมกับวิทยาลัยเทคโนโลยีอาซิซสถานพณิชยการ',schoolName2:headerMap.school_name_2||''}
    // หมายเหตุ: ตาราง sports_registrations/sports_matches/sports_color_totals/sports_competitions
    // เป็นสคีมาเก่าที่ไม่มีข้อมูลจริง (AZIZGAMES เขียนลง registrations/matches/color_totals/sports แทน)
    // — สลับมาใช้ตารางจริงเพื่อให้ "นักกีฬาในสี" ตรงกับสิ่งที่ลงทะเบียนจริงใน AZIZGAMES
    const [membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions,attendance,scoreCriteria,scoreEntries,medalAwards,campCalendar,duesPayments] = await Promise.all([
      safe(supabase.from('students').select('id,student_code,full_name,main_room,house_color,sports_shirt_size,image_url,photo_url').eq('is_active',true).or(`team_color_id.eq.${c.id},house_color.eq.${c.name}`).order('main_room').order('student_code')),
      safe(supabase.from('sports_team_tasks').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false})),
      safe(supabase.from('sports_team_announcements').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false})),
      safe(supabase.from('sports_team_identity_requests').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false}).limit(10)),
      safe(supabase.from('registrations').select('*,students(id,student_code,full_name,main_room,house_color,sports_shirt_size,image_url),sports(id,code,name,category,gender)').eq('event_id',event.id).eq('team_color_id',c.id).order('registered_at',{ascending:false})),
      safe(supabase.from('matches').select('*,sports(id,code,name,category,gender),team_a:team_colors!team_a_color_id(name,logo_url,hex_color),team_b:team_colors!team_b_color_id(name,logo_url,hex_color)').eq('event_id',event.id).or(`team_a_color_id.eq.${c.id},team_b_color_id.eq.${c.id}`).order('scheduled_date',{ascending:true}).order('scheduled_time',{ascending:true})),
      safe(supabase.from('color_totals').select('*').eq('event_id',event.id)),
      canShirt?_fetchAllRows('sports_shirt_requests', q=>q.select('status,requested_size,confirmed_size,students(id,full_name,student_code,main_room,house_color)').eq('event_id',event.id)).catch(e=>{console.warn(e);return []}):Promise.resolve([]),
      safe(supabase.from('sports').select('id,code,name,category,gender,venue').eq('event_id',event.id).eq('is_active',true).order('display_order').order('name')),
      canAttendance?safe(supabase.from('sports_attendance').select('*').eq('team_color_id',c.id).eq('event_id',event.id)):Promise.resolve([]),
      safe(supabase.from('sports_score_criteria').select('*').eq('event_id',event.id).order('display_order')),
      safe(supabase.from('sports_score_entries').select('*').eq('event_id',event.id).eq('team_color_id',c.id)),
      safe(supabase.from('medal_awards').select('medal_type,points,sports(name)').eq('event_id',event.id).eq('team_color_id',c.id)),
      // ปฏิทินปฏิบัติงาน (work_calendar_events) — ครูตั้งวันที่ "เข้าสีครั้งที่ N" / "กีฬาสี" ไว้ล่วงหน้า
      // แล้ว ใช้บอกอัตโนมัติว่าวันนี้ตรงกับวันไหน แทนที่จะให้เลือกประเภทเช็คชื่อเองมั่วๆ ทุกครั้ง
      canAttendance?safe(supabase.from('work_calendar_events').select('id,label,event_date,end_date').or('label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%')):Promise.resolve([]),
      canDues?safe(supabase.from('sports_team_dues').select('*').eq('team_color_id',c.id).eq('event_id',event.id)):Promise.resolve([]),
    ])
    const myTotal=totals.find(x=>x.color_name===c.name)||{}
    // ระบบกีฬาสีแข่งแยกเพศชาย-หญิงเด็ดขาด (4 สีต่อเพศ) ห้ามเทียบอันดับ/คะแนนข้ามเพศกัน —
    // ต้องกรองเฉพาะสีเพศเดียวกับทีมนี้ก่อนจัดอันดับเสมอ ไม่ใช้ totals ทั้ง 8 สีดิบๆ
    const sameGenderTotals=totals.filter(t=>t.gender===c.gender)
    const rankedByScore=[...sameGenderTotals].sort((a,b)=>(Number(b.grand_total)||0)-(Number(a.grand_total)||0))
    const rankedByMedals=[...sameGenderTotals].sort((a,b)=>(Number(b.gold_count)||0)-(Number(a.gold_count)||0)||(Number(b.silver_count)||0)-(Number(a.silver_count)||0)||(Number(b.bronze_count)||0)-(Number(a.bronze_count)||0))
    const scoreRank=rankedByScore.findIndex(x=>x.color_name===c.name)+1||'—', medalRank=rankedByMedals.findIndex(x=>x.color_name===c.name)+1||'—'
    const pendingTasks=tasks.filter(x=>x.status!=='done').length, doneMatches=matches.filter(x=>x.status==='done').length
    const tabState={active:'overview'}
    const tabList=[
      ['overview','ภาพรวม','🏠',true],
      ['members','สมาชิก','👥',canMembers],
      ['athletes','นักกีฬา','🏃',canReg],
      ['attendance','เช็คชื่อ','📷',canAttendance],
      ['dues','ค่าบำรุงสี','💰',canDues],
      ['permissions','สิทธิ์ประจำสี','🛡️',isLead],
      ['shirts','ไซซ์เสื้อ','👕',canShirt],
      ['work','งาน/ประกาศ','📋',canTasks||canAnn],
      ['schedule','ตาราง/ผล','🗓️',true],
      ['scores','คะแนน/เหรียญ','🏅',true],
      ['identity','อัตลักษณ์','🎨',!studentView],
    ].filter(x=>x[3])
    wrap.innerHTML=`<style>
      @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800&display=swap');
      #my-team-workspace{font-family:'Prompt','Sarabun',sans-serif}
      #my-team-workspace[data-theme="dark"]{
        background:#0f172a;color:#f8fafc;
        background-image:radial-gradient(at 0% 0%, hsla(253,16%,12%,1) 0, transparent 50%),
          radial-gradient(at 50% 0%, hsla(225,39%,30%,.25) 0, transparent 50%),
          radial-gradient(at 100% 0%, hsla(339,49%,30%,.18) 0, transparent 50%);
        background-attachment:fixed;
      }
      #my-team-workspace[data-theme="light"]{
        background:#f8fafc;color:#0f172a;
        background-image:radial-gradient(at 0% 0%, rgba(241,245,249,.7) 0, transparent 50%),
          radial-gradient(at 100% 0%, rgba(226,232,240,.5) 0, transparent 50%);
        background-attachment:fixed;
      }
      #my-team-workspace[data-theme="dark"] .team-head{background:rgba(15,23,42,.75);backdrop-filter:blur(16px) saturate(180%);border-color:rgba(255,255,255,.08)}
      #my-team-workspace[data-theme="light"] .team-head{background:rgba(255,255,255,.85);backdrop-filter:blur(16px) saturate(180%);border-color:#e2e8f0;box-shadow:0 1px 3px rgba(15,23,42,.06)}
      #my-team-workspace[data-theme="dark"] .team-tabs{background:rgba(15,23,42,.6);backdrop-filter:blur(16px);border-color:rgba(255,255,255,.08)}
      #my-team-workspace[data-theme="light"] .team-tabs{background:rgba(255,255,255,.8);backdrop-filter:blur(16px);border-color:#e2e8f0}
      #my-team-workspace[data-theme="dark"] .team-card{background:rgba(15,23,42,.45);backdrop-filter:blur(16px) saturate(180%);border:1px solid rgba(255,255,255,.08);box-shadow:0 8px 32px 0 rgba(0,0,0,.37)}
      #my-team-workspace[data-theme="light"] .team-card{background:#fff;border:1px solid rgba(226,232,240,.8);box-shadow:0 10px 25px -5px rgba(15,23,42,.04),0 8px 10px -6px rgba(15,23,42,.04),inset 0 1px 0 rgba(255,255,255,.9)}
      #my-team-workspace[data-theme="dark"] .team-sub{background:rgba(30,41,59,.55);border:1px solid rgba(255,255,255,.06)}
      #my-team-workspace[data-theme="light"] .team-sub{background:#f8fafc;border:1px solid #e2e8f0}
      #my-team-workspace[data-theme="dark"] .muted{color:#94a3b8}
      #my-team-workspace[data-theme="light"] .muted{color:#64748b}
      #my-team-workspace[data-theme="dark"] .line{border-color:#1e293b}
      #my-team-workspace[data-theme="light"] .line{border-color:#e2e8f0}
      #my-team-workspace h2{font-size:.95rem;letter-spacing:-.01em;font-weight:800}
      #my-team-workspace[data-theme="light"] table th{background:#f1f5f9;color:#475569}
      #my-team-workspace[data-theme="dark"] table th{background:rgba(30,41,59,.6);color:#94a3b8}
      .team-tab-active{background:#db2777!important;color:white!important;border-color:#db2777!important;box-shadow:0 4px 12px -4px rgba(219,39,119,.5)}
      .sport-icon{width:1.75rem;height:1.75rem;object-fit:contain;flex-shrink:0}
      #team-tab-body{height:calc(100vh - 180px);overflow:auto}
      .status-pill{display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:800;padding:3px 9px;border-radius:999px;white-space:nowrap}
      .status-done{background:rgba(16,185,129,.15);color:#10b981}
      .status-live{background:rgba(245,158,11,.15);color:#f59e0b;animation:status-pulse 1.6s ease-in-out infinite}
      .status-pending{background:rgba(100,116,139,.15);color:#64748b}
      @keyframes status-pulse{0%,100%{opacity:1}50%{opacity:.55}}
      @media (max-width:480px){#my-team-workspace .team-head b{font-size:.95rem}#my-team-workspace table{font-size:12px}#my-team-workspace .team-card{padding:1rem!important}}
      @media (max-width:639px){#team-tab-body{height:calc(100vh - 132px)}}
    </style><header class="team-head border-b px-4 py-3 flex items-center gap-3"><div class="flex items-center gap-3 flex-1">${c.logo_url?`<img src="${esc(c.logo_url)}" class="w-11 h-11 rounded-full object-cover ring-2 ring-pink-500/20">`:''}<div><b>${studentView?'สีของฉัน':'จัดการทีมสี'}${esc(c.name)}</b></div></div><button data-theme-toggle class="px-3 py-2 border line rounded-xl text-sm">${theme==='dark'?'☀️ โหมดสว่าง':'🌙 โหมดมืด'}</button><button data-full class="px-3 py-2 bg-pink-600 text-white rounded-xl font-bold shadow-lg shadow-pink-500/20">AZIZGAMES</button><button data-close class="w-10 h-10 border line rounded-xl">✕</button></header><nav class="team-tabs hidden sm:block border-b px-4 py-3 overflow-x-auto whitespace-nowrap">${tabList.map(t=>`<button data-team-tab="${t[0]}" class="mr-2 px-4 py-2 rounded-xl border line text-sm font-bold transition-all ${t[0]===tabState.active?'team-tab-active':''}">${t[2]} ${esc(t[1])}</button>`).join('')}</nav><main id="team-tab-body" class="max-w-7xl mx-auto p-4 md:p-6"></main><nav id="team-bottom-nav" class="team-tabs sm:hidden fixed bottom-0 inset-x-0 z-40 flex border-t safe-area-bottom"></nav>`
    // รายละเอียดคะแนนแยกเกณฑ์ (เฉลี่ยจากกรรมการทุกคนที่ให้คะแนนเกณฑ์นั้นแล้ว) — เฉพาะสีเราเอง
    // เพราะ sports_score_entries query ข้างบนกรอง team_color_id ไว้แล้ว
    const scoreBreakdown=(scoreCriteria||[]).map(crit=>{
      const entries=(scoreEntries||[]).filter(e=>e.criteria_id===crit.id)
      const avg=entries.length?entries.reduce((s,e)=>s+Number(e.score||0),0)/entries.length:0
      return {name:crit.name,maxScore:Number(crit.max_score),category:crit.category,avg:Math.round(avg*100)/100,judgeCount:entries.length}
    }).filter(x=>x.judgeCount>0)
    const maxByCategory=cat=>(scoreCriteria||[]).filter(x=>x.category===cat).reduce((s,x)=>s+(Number(x.max_score)||0),0)||100
    const maxParadeScore=maxByCategory('parade'), maxPageScore=maxByCategory('page'), maxColorEvalScore=maxByCategory('color_eval')
    // เหรียญแยกตามรายการแข่งขัน (medal_awards query ข้างบนกรอง team_color_id ไว้แล้ว) เรียงทอง→เงิน→ทองแดง
    const medalRankOrder={gold:0,silver:1,bronze:2}
    const medalBreakdown=[...(medalAwards||[])].sort((a,b)=>(medalRankOrder[a.medal_type]??3)-(medalRankOrder[b.medal_type]??3)).map(a=>({sport:a.sports?.name||'ไม่ระบุรายการ',medalType:a.medal_type,points:Number(a.points)||0}))
    const data={m,c,event,cfg,publicButtons,docHeader,membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions,attendance,scoreBreakdown,maxParadeScore,maxPageScore,maxColorEvalScore,medalBreakdown,campCalendar,duesPayments,myTotal,scoreRank,medalRank,pendingTasks,doneMatches,canMembers,canReg,canTasks,canAnn,canShirt,canAttendance,canDues,isLead,theme}
    const drawTab=()=>renderTeamWorkspaceTab(wrap,tabState.active,data)
    // จัดกลุ่มแท็บสำหรับแถบเมนูด้านล่างบนมือถือ (บนเดสก์ท็อปยังใช้แถบเดิมด้านบนเหมือนเดิม)
    // กดกลุ่มที่มีแท็บเดียว (เช่น ภาพรวม) ไปหน้านั้นทันที ส่วนกลุ่มที่มีหลายแท็บ ปุ่มด้านล่างจะ
    // เปลี่ยนเป็นแท็บย่อยของกลุ่มนั้นแทน พร้อมปุ่ม "กลับ" ให้ย้อนไปเลือกกลุ่มอื่นได้
    const groupDefs=[
      {key:'overview',label:'ภาพรวม',icon:'🏠',keys:['overview']},
      {key:'team',label:'ทีม',icon:'👥',keys:['members','athletes','permissions']},
      {key:'event',label:'กิจกรรม',icon:'📅',keys:['attendance','dues','schedule','work']},
      {key:'results',label:'ผลงาน',icon:'🏆',keys:['scores','shirts','identity']},
    ]
    const tabGroups=groupDefs.map(g=>({...g,tabs:tabList.filter(t=>g.keys.includes(t[0]))})).filter(g=>g.tabs.length>0)
    const navState={pickerOpen:true}
    const findGroup=tabKey=>tabGroups.find(g=>g.tabs.some(t=>t[0]===tabKey))
    const renderBottomNav=()=>{
      const nav=wrap.querySelector('#team-bottom-nav');if(!nav)return
      if(navState.pickerOpen){
        nav.innerHTML=tabGroups.map(g=>{const active=findGroup(tabState.active)?.key===g.key
          return `<button data-team-group="${g.key}" class="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-bold ${active?'text-pink-500':'muted'}"><span class="text-lg">${g.icon}</span><span>${esc(g.label)}</span></button>`}).join('')
        nav.querySelectorAll('[data-team-group]').forEach(b=>b.onclick=()=>{
          const g=tabGroups.find(x=>x.key===b.dataset.teamGroup)
          if(g.tabs.length===1){selectTab(g.tabs[0][0])}
          else{navState.pickerOpen=false;if(findGroup(tabState.active)?.key!==g.key)selectTab(g.tabs[0][0]);else renderBottomNav()}
        })
      }else{
        const g=findGroup(tabState.active)
        nav.innerHTML=`<button data-team-back class="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-bold muted"><span class="text-lg">⬅️</span><span>กลับ</span></button>`+
          g.tabs.map(t=>`<button data-team-tab-m="${t[0]}" class="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-bold ${t[0]===tabState.active?'text-pink-500':'muted'}"><span class="text-lg">${t[2]}</span><span>${esc(t[1])}</span></button>`).join('')
        nav.querySelector('[data-team-back]').onclick=()=>{navState.pickerOpen=true;renderBottomNav()}
        nav.querySelectorAll('[data-team-tab-m]').forEach(b=>b.onclick=()=>selectTab(b.dataset.teamTabM))
      }
    }
    const selectTab=key=>{tabState.active=key;wrap.querySelectorAll('[data-team-tab]').forEach(x=>x.classList.toggle('team-tab-active',x.dataset.teamTab===key));renderBottomNav();drawTab()}
    wrap.querySelector('[data-close]').onclick=()=>wrap.remove();wrap.querySelectorAll('[data-full]').forEach(b=>b.onclick=()=>openAzizGamesModal())
    wrap.querySelectorAll('[data-team-tab]').forEach(b=>b.onclick=()=>selectTab(b.dataset.teamTab))
    wrap.querySelector('[data-theme-toggle]').onclick=()=>{const next=wrap.dataset.theme==='dark'?'light':'dark';wrap.dataset.theme=next;localStorage.setItem('sports_team_theme',next);wrap.querySelector('[data-theme-toggle]').textContent=next==='dark'?'☀️ โหมดสว่าง':'🌙 โหมดมืด'}
    renderBottomNav()
    drawTab()
    if(m.role==='lead_teacher') identity?.filter(x=>x.status==='pending_lead'&&x.submitted_by!==m.profile_id).forEach(x=>{const bar=document.createElement('div');bar.className='fixed bottom-4 right-4 z-30 bg-slate-800 border border-amber-500 rounded-xl p-3 shadow-xl';bar.innerHTML=`<p class="text-sm mb-2">คำขอแก้อัตลักษณ์รอหัวหน้าครูตรวจสอบ</p><button data-no class="px-3 py-1 border border-red-400 text-red-300 rounded-lg mr-2">ปฏิเสธ</button><button data-yes class="px-3 py-1 bg-emerald-600 rounded-lg">อนุมัติส่งแอดมิน</button>`;wrap.appendChild(bar);const review=async decision=>{const {error}=await supabase.rpc('review_team_identity',{p_request:x.id,p_decision:decision,p_comment:null});if(error)return toast(error.message,'error');toast('บันทึกผลตรวจสอบแล้ว');openMyTeamWorkspace()};bar.querySelector('[data-yes]').onclick=()=>review('approve');bar.querySelector('[data-no]').onclick=()=>review('reject')})
  } catch(e){console.error(e);wrap.innerHTML=`<button class="absolute right-4 top-4" onclick="this.parentElement.remove()">✕</button>${missing()}`}
}

const roleLabel = role => ({lead_teacher:'พ่อสี/แม่สี (หัวหน้าครูประจำสี)',teacher:'ครูประจำสี',staff_lead:'หัวหน้านักเรียนสต๊าฟ',staff:'นักเรียนสต๊าฟ'}[role]||role)
const permPill = (label,on) => `<div class="rounded-xl px-3 py-2 text-xs font-bold ${on?'bg-emerald-500/15 text-emerald-300':'bg-slate-500/15 text-slate-400'}">${on?'เปิดให้ใช้':'ไม่เปิดให้ใช้'} · ${esc(label)}</div>`
// duesPaidIds: Set ของ student.id ที่จ่ายค่าบำรุงสีแล้ว — ส่ง undefined ถ้าผู้ดูไม่มีสิทธิ์เห็นค่าบำรุง
// (ไม่แสดงป้ายเลยดีกว่าแสดงป้าย "แดง/ยังไม่จ่าย" มั่วๆ ทั้งที่จริงๆ แค่ไม่มีสิทธิ์ดึงข้อมูลมา)
const memberCard = (s,duesPaidIds) => `<div class="team-sub rounded-xl p-3 flex items-center gap-3">${(s.image_url||s.photo_url)?`<img src="${esc(s.image_url||s.photo_url)}" class="w-9 h-11 rounded-lg object-cover border border-slate-700/60 shadow-sm shadow-black/30 flex-shrink-0">`:''}<div class="min-w-0 flex-1"><b class="text-sm truncate block">${esc(s.full_name)}</b><p class="text-xs muted truncate">${esc(s.student_code)} · ${esc(s.main_room)} · เสื้อ ${esc(s.sports_shirt_size||'—')}</p></div>${duesPaidIds?(duesPaidIds.has(s.id)?'<span class="status-pill status-done flex-shrink-0">💰 จ่ายแล้ว</span>':'<span class="status-pill bg-red-500/15 text-red-400 flex-shrink-0">💰 ยังไม่จ่าย</span>'):''}</div>`
function renderTeamWorkspaceTab(wrap,tab,data){
  const body=wrap.querySelector('#team-tab-body'), {m,c,event,cfg,publicButtons,docHeader,membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions,attendance,scoreBreakdown,maxParadeScore,maxPageScore,maxColorEvalScore,medalBreakdown,campCalendar,duesPayments,myTotal,scoreRank,medalRank,pendingTasks,doneMatches,canMembers,canReg,canTasks,canAnn,canShirt,canAttendance,canDues,isLead}=data
  const card='team-card rounded-2xl p-5 border', sub='team-sub rounded-xl p-3'
  if(tab==='overview') {
    const kpis=[
      {label:'สมาชิก',value:membersList.length,icon:'👥',bg:'from-blue-500 to-indigo-600',goto:'members'},
      {label:'นักกีฬา',value:regs.length,icon:'🏃',bg:'from-emerald-500 to-teal-600',goto:'athletes'},
      {label:'งานค้าง',value:pendingTasks,icon:'📋',bg:'from-amber-400 to-orange-600',goto:'work'},
      {label:'แข่งแล้ว',value:`${doneMatches}/${matches.length}`,icon:'🗓️',bg:'from-pink-500 to-rose-600',goto:'schedule'},
      {label:'อันดับคะแนน',value:`#${scoreRank}`,icon:'🏅',bg:'from-violet-500 to-purple-600',goto:'scores'},
      {label:'อันดับเหรียญ',value:`#${medalRank}`,icon:'🥇',bg:'from-yellow-500 to-amber-600',goto:'scores'},
    ]
    body.innerHTML=`<div class="space-y-5">
      <section class="rounded-3xl p-5 text-white overflow-hidden" style="background:linear-gradient(135deg,${esc(c.hex_color)},#111827)"><h2 class="font-bold text-sm">👋 สรุปภาพรวมสี${esc(c.name)}</h2><p class="text-xs opacity-80 mt-1">${esc(roleLabel(m.role))} — แตะการ์ดด้านล่างเพื่อไปยังหน้าที่เกี่ยวข้องได้เลย</p></section>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">${kpis.map(k=>`<button type="button" data-goto-tab="${k.goto}" class="text-left rounded-2xl p-4 flex flex-col justify-between shadow-lg text-white bg-gradient-to-br ${k.bg} transition-transform duration-300 hover:-translate-y-1 cursor-pointer"><div class="flex justify-between items-start"><span class="text-[10px] md:text-xs text-white/80 font-semibold tracking-wide leading-tight">${esc(k.label)}</span><span class="text-lg">${k.icon}</span></div><span class="text-2xl md:text-3xl font-extrabold mt-3">${esc(k.value)}</span></button>`).join('')}</div>
      <section class="${card}"><h2 class="font-bold mb-3">🧭 สิทธิ์และเมนูของบทบาทนี้</h2><div class="grid md:grid-cols-5 gap-2">${permPill('สมาชิก',canMembers)}${permPill('ลงทะเบียนนักกีฬา',canReg)}${permPill('ประกาศ',canAnn)}${permPill('งานของสี',canTasks)}${permPill('สรุปเสื้อเฉพาะสี',canShirt)}${permPill('เก็บค่าบำรุงสี',canDues)}</div></section>
    </div>`
  }
  else if(tab==='members'){const duesPaidIds=canDues?new Set((duesPayments||[]).map(d=>d.student_id)):null;body.innerHTML=`<section class="${card}"><div class="flex flex-wrap justify-between gap-3 mb-4"><div><h2 class="font-bold">👥 รายชื่อสมาชิกในสี</h2><p class="text-xs muted">รายชื่อนักเรียนสี${esc(c.name)} ทั้งหมด</p></div>${publicButtons.athlete_print!==false?`<button data-print-members class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">🖨️ พิมพ์/บันทึกใบรายชื่อสมาชิก</button>`:''}</div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">${membersList.map(s=>memberCard(s,duesPaidIds)).join('')||'<p class="text-sm muted">ยังไม่มีสมาชิก</p>'}</div></section>`}
  else if(tab==='athletes') body.innerHTML=`<section class="${card}"><div class="flex flex-wrap justify-between gap-3 mb-4"><div><h2 class="font-bold">🏃 นักกีฬาในสี</h2><p class="text-xs muted">แสดงเฉพาะนักกีฬาของสี${esc(c.name)} จากระบบกีฬาสีหลัก</p></div><div class="flex flex-wrap gap-2">${publicButtons.athlete_print!==false?`<button data-print-athletes class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">🖨️ พิมพ์/บันทึกใบรายชื่อนักกีฬา</button>`:''}${publicButtons.athlete_registration?`<button data-full class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">ลงทะเบียนนักกีฬา</button>`:''}</div></div><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2 text-left">นักเรียน</th><th class="p-2 text-left">รายการ</th><th class="p-2">เบอร์</th><th class="p-2 text-left">เวลา</th></tr></thead><tbody>${regs.map(r=>{const icon=sportIconUrl(r.sports);return `<tr class="border-b line"><td class="p-2"><b>${esc(r.students?.full_name||'—')}</b><p class="text-xs muted">${esc(r.students?.student_code||'')} · ${esc(r.students?.main_room||'')}</p></td><td class="p-2"><span class="flex items-center gap-2">${icon?`<img src="${esc(icon)}" class="sport-icon" alt="">`:''}${esc(r.sports?.name||'—')}</span></td><td class="p-2 text-center">${esc(r.jersey_number||'—')}</td><td class="p-2 muted text-xs">${esc(r.registered_at?new Date(r.registered_at).toLocaleString('th-TH'):'—')}</td></tr>`}).join('')||'<tr><td colspan="4" class="p-8 text-center muted">ยังไม่มีนักกีฬา</td></tr>'}</tbody></table></div></section>`
  else if(tab==='permissions') body.innerHTML=`${isLead?`<section class="${card} mb-4"><h2 class="font-bold mb-1">🎖️ เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (เฉพาะสีนี้)</h2><p class="text-xs muted mb-3">ปล่อยว่างไว้ = ใช้ค่าเริ่มต้นของแอดมิน (ตอนนี้ ${Number(cfg?.cert_attendance_threshold_pct??80)}%) — กำหนดเป็นตัวเลขถ้าอยากให้สีนี้เข้มงวด/ผ่อนปรนกว่าสีอื่น</p><div class="flex gap-2 items-center"><input id="cert-threshold-override" type="number" min="0" max="100" step="1" placeholder="ค่าเริ่มต้น (${Number(cfg?.cert_attendance_threshold_pct??80)}%)" value="${c.cert_attendance_threshold_pct_override ?? ''}" class="w-40 rounded-xl bg-slate-950/40 border line px-3 py-2 text-sm"><button id="cert-threshold-save" class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold">บันทึก</button></div></section>`:''}<section id="sports-team-membership-admin" class="${card}"><div class="py-8 text-center muted">กำลังโหลดหน้ามอบหมายสิทธิ์ประจำสี...</div></section>`
  else if(tab==='shirts') body.innerHTML=shirtSection(c,shirtReqs,cfg)
  else if(tab==='work') body.innerHTML=`<div class="grid xl:grid-cols-2 gap-5">${canTasks?`<section class="${card}"><h2 class="font-bold mb-3">📋 งานของสี</h2>${tasks.map(t=>`<div class="${sub} mb-2"><b>${esc(t.title)}</b><span class="float-right text-xs text-cyan-400">${esc(t.status)}</span><p class="text-xs muted">${esc(t.detail||'')}</p></div>`).join('')||'<p class="text-sm muted">ยังไม่มีงาน</p>'}</section>`:''}${canAnn?`<section class="${card}"><h2 class="font-bold mb-3">📢 ประกาศ</h2>${anns.map(a=>`<div class="${sub} mb-2"><b>${esc(a.title)}</b><p class="text-sm muted">${esc(a.body)}</p></div>`).join('')||'<p class="text-sm muted">ยังไม่มีประกาศ</p>'}</section>`:''}</div>`
  else if(tab==='attendance') renderAttendanceSection(body,{event,c,membersList,attendance,campCalendar,card})
  else if(tab==='dues') renderDuesSection(body,{event,c,membersList,duesPayments,duesAmount:cfg?.dues_amount||30,card})
  else if(tab==='schedule') renderScheduleSection(body,matches,c.name,card)
  else if(tab==='scores') renderScoreMedalSection(body,{totals,colorName:c.name,gender:c.gender,myTotal,scoreRank,medalRank,scoreBreakdown,maxParadeScore,maxPageScore,maxColorEvalScore,medalBreakdown,card})
  else if(tab==='identity') body.innerHTML=`<section class="${card}"><div class="flex flex-wrap justify-between gap-3 mb-3"><div><h2 class="font-bold">🎨 เสนอแก้อัตลักษณ์ประจำสี</h2><p class="text-xs muted">โลโก้/ชื่อ/คำขวัญใช้ชุดเดียวกับระบบกีฬาสีหลัก และต้องผ่านหัวหน้าครูประจำสี + แอดมิน</p></div><button id="identity-new" class="px-4 py-2 bg-violet-600 text-white rounded-xl">สร้างคำขอ</button></div><div class="space-y-2">${identity.map(x=>`<div class="${sub} flex justify-between gap-3"><span>${esc(x.proposed_name||'แก้ไขอัตลักษณ์/โลโก้')}</span><span class="text-xs text-amber-400">${esc(x.status)}</span></div>`).join('')||'<p class="text-sm muted">ยังไม่มีคำขอ</p>'}</div></section>`
  body.querySelectorAll('[data-full]').forEach(b=>b.onclick=()=>openAzizGamesModal())
  body.querySelectorAll('[data-goto-tab]').forEach(b=>b.onclick=()=>wrap.querySelector(`[data-team-tab="${b.dataset.gotoTab}"]`)?.click())
  body.querySelector('#identity-new')?.addEventListener('click',()=>identityForm(wrap,m,c))
  body.querySelector('[data-print-members]')?.addEventListener('click',()=>printColorRoster(c.name,membersList,docHeader))
  body.querySelector('[data-print-athletes]')?.addEventListener('click',()=>openAthletePrintDialog(wrap,c,regs,competitions))
  if(tab==='permissions'&&isLead){
    renderTeamMembershipAdmin(wrap,event,[c],{isAdmin:false,myTeamMemberships:[m]})
    body.querySelector('#cert-threshold-save')?.addEventListener('click',async()=>{
      const raw=body.querySelector('#cert-threshold-override').value.trim()
      const val=raw===''?null:Number(raw)
      const {error}=await supabase.rpc('set_my_team_cert_threshold',{p_team:c.id,p_value:val})
      if(error)return toast(error.message,'error')
      toast('บันทึกเกณฑ์เกียรติบัตรของสีนี้แล้ว')
    })
  }
}
function shirtSection(c, reqs, cfg) {
  const sizes=cfg?.allowed_sizes||['S','M','L','XL','2XL','3XL']; const rows=(reqs||[]).filter(r=>r.students?.house_color===c.name); const confirmed=rows.filter(r=>['confirmed','advisor_updated'].includes(r.status))
  return `<section class="team-card rounded-2xl p-5 border"><div class="flex flex-wrap justify-between gap-3 mb-3"><div><h2 class="font-bold">👕 ข้อมูลไซซ์เสื้อเฉพาะสี${esc(c.name)}</h2><p class="text-xs muted">ไม่แสดงยอดทุกสีแบบแอดมิน เห็นเฉพาะสีของตัวเอง</p></div><div class="text-sm muted">ยืนยันแล้ว ${confirmed.length}/${rows.length}</div></div><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2 text-left">ไซซ์</th>${sizes.map(s=>`<th class="p-2">${esc(s)}</th>`).join('')}<th class="p-2">รวม</th></tr></thead><tbody><tr><td class="p-2 font-bold">ยืนยันแล้ว</td>${sizes.map(s=>`<td class="p-2 text-center">${confirmed.filter(r=>r.confirmed_size===s).length}</td>`).join('')}<td class="p-2 text-center font-bold">${confirmed.length}</td></tr><tr class="border-t line"><td class="p-2 font-bold">รอยืนยัน</td>${sizes.map(s=>`<td class="p-2 text-center">${rows.filter(r=>r.status==='pending'&&r.requested_size===s).length}</td>`).join('')}<td class="p-2 text-center font-bold">${rows.filter(r=>r.status==='pending').length}</td></tr></tbody></table></div></section>`
}
function trackingSection(matches, totals, colorName, myTotal, scoreRank, medalRank) {
  const done=matches.filter(m=>m.status==='done'), upcoming=matches.filter(m=>m.status!=='done')
  return `<section class="team-card rounded-2xl p-5 border"><div class="flex flex-wrap justify-between gap-3 mb-4"><div><h2 class="font-bold">📊 ติดตามการแข่งขัน คะแนน และเหรียญ</h2><p class="text-xs muted">ข้อมูลอ่านจากตารางเดียวกับระบบกีฬาสีหลัก</p></div><div class="flex gap-2 text-xs"><span class="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300">อันดับสี #${scoreRank}</span><span class="px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-300">อันดับเหรียญ #${medalRank}</span></div></div><div class="grid md:grid-cols-5 gap-2 mb-4">${[['คะแนนรวม',myTotal.grand_total||0],['คะแนนกรรมการ',myTotal.rubric_points||0],['🥇 ทอง',myTotal.gold_count||0],['🥈 เงิน',myTotal.silver_count||0],['🥉 ทองแดง',myTotal.bronze_count||0]].map(([l,v])=>`<div class="team-sub rounded-xl p-3"><p class="text-xs muted">${l}</p><b class="text-2xl">${Number(v).toLocaleString()}</b></div>`).join('')}</div><div class="grid xl:grid-cols-2 gap-4"><div><h3 class="font-bold mb-2">🗓️ ตาราง/ติดตามการแข่งขันของสี${esc(colorName)}</h3><div class="space-y-2">${upcoming.slice(0,12).map(m=>matchRow(m)).join('')||'<p class="text-sm muted">ยังไม่มีตารางที่รอแข่งขัน</p>'}</div></div><div><h3 class="font-bold mb-2">✅ ผลการแข่งขันล่าสุด</h3><div class="space-y-2">${done.slice(0,12).map(m=>matchRow(m)).join('')||'<p class="text-sm muted">ยังไม่มีผลการแข่งขัน</p>'}</div></div></div></section>`
}
const matchStatusPill = status => {
  const map = { done:['เสร็จสิ้น','status-done'], live:['กำลังแข่ง','status-live'], pending:['รอแข่ง','status-pending'], cancelled:['ยกเลิก','status-pending'] }
  const [label,cls] = map[status] || ['รอแข่ง','status-pending']
  return `<span class="status-pill ${cls}">${label}</span>`
}
const teamSide = (t, mine) => {
  const hex = t?.hex_color || '#64748b'
  const avatar = t?.logo_url
    ? `<img src="${esc(t.logo_url)}" class="w-11 h-11 rounded-full object-cover ${mine?'ring-2 ring-pink-500':'ring-1 ring-white/10'}">`
    : `<div class="w-11 h-11 rounded-full flex items-center justify-center text-white text-[10px] font-black ${mine?'ring-2 ring-pink-500':'ring-1 ring-white/10'}" style="background:${esc(hex)}">${esc((t?.name||'?').slice(0,1))}</div>`
  return `<div class="flex-1 flex flex-col items-center gap-1.5 min-w-0">${avatar}<span class="text-[11px] font-bold truncate w-full text-center ${mine?'text-pink-400':''}">${t?.name?`สี${esc(t.name)}`:'รอทีม'}</span></div>`
}
function matchRow(m,myColorName){
  const icon=sportIconUrl(m.sports)
  const isDone=m.status==='done'
  const winA=isDone&&m.winner==='A', winB=isDone&&m.winner==='B'
  return `<div class="team-card rounded-2xl p-4 border">
    <div class="flex items-center justify-between gap-2 mb-3">
      <span class="flex items-center gap-2 min-w-0">${icon?`<img src="${esc(icon)}" class="sport-icon" alt="">`:''}<b class="text-xs truncate">${esc(m.sports?.name||'รายการแข่งขัน')}</b></span>
      ${matchStatusPill(m.status)}
    </div>
    <div class="flex items-center justify-between gap-2">
      ${teamSide(m.team_a, m.team_a?.name===myColorName)}
      <div class="flex flex-col items-center px-2 flex-shrink-0">
        <span class="text-[10px] font-black italic text-pink-400">VS</span>
        <span class="text-lg font-black tabular-nums mt-1"><span class="${winA?'text-emerald-400':''}">${esc(m.score_a??'—')}</span> : <span class="${winB?'text-emerald-400':''}">${esc(m.score_b??'—')}</span></span>
      </div>
      ${teamSide(m.team_b, m.team_b?.name===myColorName)}
    </div>
    <p class="text-[10px] muted text-center mt-3 line">${esc(m.scheduled_date||'ยังไม่ระบุวัน')} ${esc(m.scheduled_time?String(m.scheduled_time).slice(0,5):'')}${m.venue?` · ${esc(m.venue)}`:''}</p>
  </div>`
}
// แท็บ "ตาราง/ผล" — แถบสลับตารางการแข่งขัน(รอ/กำลังแข่ง)⇄ผลการแข่งขัน(เสร็จสิ้น) เหมือนระบบ
// กีฬาสีหลัก ไม่โชว์รายการทั้งหมดตั้งแต่แรก (กันยาวเกินไปเวลาสีนั้นแข่งหลายรายการ) ต้องกด "วันนี้"
// หรือเลือกรายการแข่งขันหนึ่งก่อน ถึงจะเห็นรายการ — เลือกรายการแล้วเห็นครบทุกนัดของกีฬานั้นที่สีนี้
// เคยแข่ง/กำลังจะแข่ง (ทุกรอบตั้งแต่ต้นจนถึงรอบสุดท้าย) ไม่ใช่แค่นัดล่าสุด
function renderScheduleSection(body,matches,colorName,card){
  const sportOptions=[...new Map(matches.filter(x=>x.sports).map(x=>[String(x.sports.id),x.sports])).values()]
  let subTab='schedule', filterMode='none' // filterMode: 'none' | 'today' | sportId
  const todayStr=new Date().toISOString().slice(0,10)

  body.innerHTML=`<section class="${card}">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
      <h2 class="font-bold">🗓️ ตาราง/ผลการแข่งขันของสี${esc(colorName)}</h2>
      <div class="inline-flex p-1 rounded-xl team-sub gap-1">
        <button type="button" data-sched-subtab="schedule" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">🗓️ ตารางการแข่งขัน</button>
        <button type="button" data-sched-subtab="results" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">✅ ผลการแข่งขัน</button>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-2 mb-4">
      <button type="button" data-sched-today class="px-3 py-2 rounded-xl border line text-xs font-bold transition-all">📅 วันนี้</button>
      <select id="sched-sport-select" class="rounded-xl bg-slate-950/40 border line px-3 py-2 text-xs font-bold flex-1 min-w-[200px]">
        <option value="">-- เลือกรายการแข่งขันเพื่อดูทุกรอบ --</option>
        ${sportOptions.map(s=>`<option value="${esc(s.id)}">${esc(s.name)}</option>`).join('')}
      </select>
    </div>
    <div id="sched-list"></div>
  </section>`

  const renderList=()=>{
    body.querySelectorAll('[data-sched-subtab]').forEach(b=>b.classList.toggle('team-tab-active',b.dataset.schedSubtab===subTab))
    body.querySelector('[data-sched-today]').classList.toggle('team-tab-active',filterMode==='today')
    const listEl=body.querySelector('#sched-list')
    const base=matches.filter(m=>subTab==='schedule'?m.status!=='done':m.status==='done')
    if(filterMode==='none'){
      listEl.innerHTML=`<p class="text-sm muted text-center py-10">กด "📅 วันนี้" หรือเลือกรายการแข่งขันด้านบน เพื่อดู${subTab==='schedule'?'ตารางการแข่งขัน':'ผลการแข่งขัน'}</p>`
      return
    }
    const filtered=filterMode==='today' ? base.filter(m=>m.scheduled_date===todayStr) : base.filter(m=>String(m.sports?.id)===String(filterMode))
    listEl.innerHTML=filtered.length
      ? `<div class="grid md:grid-cols-2 gap-3">${filtered.map(m=>matchRow(m,colorName)).join('')}</div>`
      : `<p class="text-sm muted text-center py-10">ไม่พบ${subTab==='schedule'?'นัดที่รอแข่งขัน':'ผลการแข่งขัน'}ตามตัวกรองนี้</p>`
  }

  body.querySelectorAll('[data-sched-subtab]').forEach(b=>b.onclick=()=>{subTab=b.dataset.schedSubtab;renderList()})
  body.querySelector('[data-sched-today]').onclick=()=>{filterMode=filterMode==='today'?'none':'today';body.querySelector('#sched-sport-select').value='';renderList()}
  body.querySelector('#sched-sport-select').onchange=e=>{filterMode=e.target.value||'none';renderList()}
  renderList()
}

function _playScanBeepAtt(success=true){
  try{
    const ctx=new (window.AudioContext||window.webkitAudioContext)()
    const osc=ctx.createOscillator(), gain=ctx.createGain()
    osc.connect(gain);gain.connect(ctx.destination)
    if(success){osc.type='sine';osc.frequency.setValueAtTime(880,ctx.currentTime);gain.gain.setValueAtTime(0.08,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+0.12);osc.start();osc.stop(ctx.currentTime+0.12)}
    else{osc.type='sawtooth';osc.frequency.setValueAtTime(150,ctx.currentTime);gain.gain.setValueAtTime(0.12,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+0.3);osc.start();osc.stop(ctx.currentTime+0.3)}
  }catch(e){}
}
async function _loadHtml5QrcodeAtt(){
  if(window.Html5Qrcode)return window.Html5Qrcode
  return new Promise((resolve,reject)=>{
    const s=document.createElement('script')
    s.src='https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
    s.onload=()=>resolve(window.Html5Qrcode)
    s.onerror=()=>reject(new Error('โหลดตัวอ่าน QR Code ไม่สำเร็จ'))
    document.head.appendChild(s)
  })
}

// แท็บ "เช็คชื่อ" — เช็คชื่อนักกีฬาเข้าค่ายสี/วันงานจริงด้วยสแกน QR ประจำตัว (หรือกรอกรหัสมือ
// เผื่อไม่ได้พก QR) เห็นได้เฉพาะพ่อสี/แม่สี ครูประจำสี และนักเรียนสต๊าฟที่ได้รับมอบสิทธิ์
// "attendance" (ดูสิทธิ์ได้ที่แท็บ "สิทธิ์ประจำสี") — สรุปคนขาดออกเป็นรายงาน CSV ให้ครูกิจการ
// นักเรียนเอาไปหักคะแนนกิจกรรมพัฒนาผู้เรียนนอกระบบ (ระบบนี้ไม่ได้เชื่อมคะแนนให้อัตโนมัติ)
function renderAttendanceSection(body,{event,c,membersList,attendance,campCalendar,card}){
  const todayStr=new Date().toISOString().slice(0,10)
  // จับคู่วันนี้กับ "ปฏิทินปฏิบัติงาน" ที่ครูตั้งวันเข้าสี/กีฬาสีไว้ล่วงหน้าแล้ว (work_calendar_events)
  // แทนที่จะให้เลือกประเภทเช็คชื่อเองมั่วๆ ทุกครั้ง — ยังกดสลับมือทับได้เผื่อปฏิทินผิด/ทดสอบระบบ
  const todayMatch=(campCalendar||[]).find(ev=>todayStr>=ev.event_date && todayStr<=(ev.end_date||ev.event_date))
  const autoSessionType=todayMatch ? (todayMatch.label.includes('เข้าสี') ? 'pre_event' : 'event_day') : null
  let sessionType=autoSessionType||'pre_event'
  let attendanceLocal=[...attendance]
  let recentScans=[]
  let html5Qrcode=null, scanning=false, reportAbsent=[]

  const campBanner=(()=>{
    if(!todayMatch) return `<div class="rounded-xl px-3 py-2 text-xs font-bold bg-amber-500/10 text-amber-400 mb-3">⚠️ วันนี้ไม่ตรงกับวันเข้าสี/กีฬาสีในปฏิทินปฏิบัติงาน — เลือกประเภทด้วยตนเองด้านล่าง (หรือกำลังทดสอบระบบ)</div>`
    const isMulti=todayMatch.end_date&&todayMatch.end_date!==todayMatch.event_date
    const dayNo=isMulti?Math.floor((new Date(todayStr)-new Date(todayMatch.event_date))/86400000)+1:null
    const totalDays=isMulti?Math.floor((new Date(todayMatch.end_date)-new Date(todayMatch.event_date))/86400000)+1:null
    return `<div class="rounded-xl px-3 py-2 text-xs font-bold bg-emerald-500/10 text-emerald-400 mb-3">📅 วันนี้ตรงกับ "${esc(todayMatch.label)}"${isMulti?` (วันที่ ${dayNo} จาก ${totalDays})`:''} ในปฏิทินปฏิบัติงาน — ตั้งประเภทเช็คชื่อให้อัตโนมัติแล้ว</div>`
  })()

  body.innerHTML=`<section class="${card}">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <div><h2 class="font-bold">📷 เช็คชื่อเข้าร่วมสี${esc(c.name)}</h2><p class="text-xs muted">สแกน QR ประจำตัวนักเรียน หรือกรอกรหัสด้วยมือ — บันทึกของวันที่ ${todayStr}</p></div>
      <div class="inline-flex p-1 rounded-xl team-sub gap-1">
        <button type="button" data-att-type="pre_event" class="px-3 py-2 rounded-lg text-xs font-bold transition-all">🏕️ เข้าค่ายสี</button>
        <button type="button" data-att-type="event_day" class="px-3 py-2 rounded-lg text-xs font-bold transition-all">🏆 วันงานจริง</button>
      </div>
    </div>
    ${campBanner}
    <div id="att-progress" class="mb-4"></div>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="team-sub rounded-2xl p-4 space-y-3">
        <div id="att-camera-reader" class="w-full aspect-square rounded-xl overflow-hidden bg-black/40" style="display:none"></div>
        <button type="button" data-att-camera-toggle class="w-full py-2.5 rounded-xl bg-pink-600 text-white text-sm font-bold">📷 เปิดกล้องสแกน QR</button>
        <div id="att-feedback"></div>
      </div>
      <div class="team-sub rounded-2xl p-4 space-y-3">
        <div>
          <label class="text-xs font-bold muted">กรอกรหัสประจำตัวนักเรียน (เผื่อไม่ได้พก QR)</label>
          <div class="flex gap-2 mt-1.5">
            <input id="att-manual-code" type="text" inputmode="numeric" placeholder="รหัสนักเรียน" class="flex-1 rounded-xl bg-slate-950/40 border line px-3 py-2 text-sm">
            <button type="button" id="att-manual-submit" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">เช็คชื่อ</button>
          </div>
        </div>
        <div>
          <p class="text-xs font-bold muted mb-1.5">สแกนล่าสุด</p>
          <div id="att-recent" class="space-y-1.5 max-h-64 overflow-y-auto"></div>
        </div>
      </div>
    </div>
    <div class="line border-t mt-5 pt-5">
      <h3 class="font-bold mb-3">📄 รายงานขาดเช็คชื่อ</h3>
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <input id="att-report-date" type="date" value="${todayStr}" class="rounded-xl bg-slate-950/40 border line px-3 py-2 text-xs font-bold">
        <button type="button" id="att-report-run" class="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold">สร้างรายงาน</button>
        <button type="button" id="att-report-csv" class="px-4 py-2 rounded-xl border line text-xs font-bold" style="display:none">⬇️ ส่งออก CSV</button>
      </div>
      <div id="att-report-result"></div>
    </div>
  </section>`

  const renderProgress=()=>{
    const scannedToday=attendanceLocal.filter(a=>a.session_date===todayStr).length
    const pct=membersList.length?Math.round(scannedToday/membersList.length*100):0
    body.querySelector('#att-progress').innerHTML=`<div class="flex items-center justify-between text-xs font-bold mb-1.5"><span>เช็คชื่อวันนี้แล้ว ${scannedToday}/${membersList.length} คน</span><span class="muted">${pct}%</span></div><div class="h-2 rounded-full team-sub overflow-hidden"><div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style="width:${pct}%"></div></div>`
    body.querySelectorAll('[data-att-type]').forEach(b=>b.classList.toggle('team-tab-active',b.dataset.attType===sessionType))
  }
  const renderRecent=()=>{
    const el=body.querySelector('#att-recent')
    el.innerHTML=recentScans.length ? recentScans.map(s=>`<div class="flex items-center gap-2 team-card rounded-lg p-2"><img src="${esc(s.image_url||s.photo_url||'')}" class="w-7 h-9 rounded object-cover border border-slate-700 flex-shrink-0" onerror="this.style.display='none'"><div class="min-w-0 flex-1"><b class="text-xs truncate block">${esc(s.full_name)}</b><span class="text-[10px] muted">${esc(s.student_code)}</span></div><span class="text-emerald-400 text-xs">✓</span><button type="button" data-cancel-scan="${esc(s._attendanceId)}" class="px-2 py-1 rounded-lg bg-red-950/40 text-red-300 border border-red-800/60 hover:bg-red-600 hover:text-white transition text-[10px] font-bold flex-shrink-0">ยกเลิก</button></div>`).join('') : '<p class="text-xs muted text-center py-4">ยังไม่มีการสแกน</p>'
    el.querySelectorAll('[data-cancel-scan]').forEach(btn=>btn.onclick=()=>cancelScan(btn.dataset.cancelScan))
  }
  const feedback=(ok,title,detail)=>{
    body.querySelector('#att-feedback').innerHTML=`<div class="rounded-xl p-3 flex items-center gap-3 ${ok?'bg-emerald-950/40 border border-emerald-800/60':'bg-red-950/40 border border-red-800/60'}"><span class="text-lg">${ok?'✅':'❌'}</span><div class="min-w-0"><b class="text-xs block truncate ${ok?'text-emerald-300':'text-red-300'}">${esc(title)}</b><span class="text-[10px] muted truncate block">${esc(detail||'')}</span></div></div>`
  }
  const commitAttendance=async(student,method)=>{
    if(!student){feedback(false,'ไม่พบนักเรียน','ตรวจสอบรหัส/QR อีกครั้ง — หรือไม่ใช่สมาชิกสีนี้');return}
    const already=attendanceLocal.find(a=>a.student_id===student.id&&a.session_date===todayStr)
    if(already){feedback(false,`${student.full_name} เช็คชื่อไปแล้ว`,'บันทึกไว้แล้ววันนี้');return}
    const {data,error}=await supabase.from('sports_attendance').insert({event_id:event.id,team_color_id:c.id,student_id:student.id,session_date:todayStr,session_type:sessionType,method}).select().single()
    if(error){feedback(false,'บันทึกไม่สำเร็จ',error.message);return}
    attendanceLocal.push(data)
    recentScans.unshift({...student,_attendanceId:data.id})
    feedback(true,`เช็คชื่อ ${student.full_name} สำเร็จ`,`รหัส ${student.student_code}`)
    renderProgress();renderRecent()
  }
  // ยกเลิกรายการที่สแกนผิด/พลาด — ลบทั้งจากฐานข้อมูลและรายการล่าสุดในหน้านี้ทันที
  const cancelScan=async(attendanceId)=>{
    const student=recentScans.find(s=>String(s._attendanceId)===String(attendanceId))
    const {error}=await supabase.from('sports_attendance').delete().eq('id',attendanceId)
    if(error){feedback(false,'ยกเลิกไม่สำเร็จ',error.message);return}
    attendanceLocal=attendanceLocal.filter(a=>String(a.id)!==String(attendanceId))
    recentScans=recentScans.filter(s=>String(s._attendanceId)!==String(attendanceId))
    feedback(true,`ยกเลิกการเช็คชื่อ${student?` ${student.full_name}`:''}แล้ว`,'ลบออกจากระบบเรียบร้อย')
    renderProgress();renderRecent()
  }

  body.querySelectorAll('[data-att-type]').forEach(b=>b.onclick=()=>{sessionType=b.dataset.attType;renderProgress()})

  body.querySelector('#att-manual-submit').onclick=()=>{
    const input=body.querySelector('#att-manual-code')
    const code=input.value.trim()
    if(!code)return
    const student=membersList.find(s=>s.student_code===code)
    commitAttendance(student,'manual')
    input.value='';input.focus()
  }
  body.querySelector('#att-manual-code').addEventListener('keydown',e=>{if(e.key==='Enter')body.querySelector('#att-manual-submit').click()})

  body.querySelector('[data-att-camera-toggle]').onclick=async()=>{
    const btn=body.querySelector('[data-att-camera-toggle]')
    const readerEl=body.querySelector('#att-camera-reader')
    if(scanning){
      try{await html5Qrcode?.stop()}catch(e){}
      html5Qrcode=null;scanning=false;readerEl.style.display='none';btn.textContent='📷 เปิดกล้องสแกน QR'
      return
    }
    try{
      const Html5Qrcode=await _loadHtml5QrcodeAtt()
      readerEl.style.display='block'
      html5Qrcode=new Html5Qrcode('att-camera-reader')
      let lastCode=null,lastTime=0
      await html5Qrcode.start({facingMode:'environment'},{fps:15,aspectRatio:1},decodedText=>{
        if(decodedText===lastCode&&Date.now()-lastTime<2000)return
        lastCode=decodedText;lastTime=Date.now()
        let code=decodedText
        if(code.startsWith('SQ:')){const parts=code.split(':');code=parts[1]}
        const student=membersList.find(s=>s.student_code===code)
        _playScanBeepAtt(!!student)
        commitAttendance(student,'qr')
      })
      scanning=true;btn.textContent='⏹ ปิดกล้อง'
    }catch(e){feedback(false,'เปิดกล้องไม่สำเร็จ',e.message)}
  }

  body.querySelector('#att-report-run').onclick=()=>{
    const date=body.querySelector('#att-report-date').value||todayStr
    const scannedIds=new Set(attendanceLocal.filter(a=>a.session_date===date).map(a=>a.student_id))
    reportAbsent=membersList.filter(s=>!scannedIds.has(s.id))
    const resEl=body.querySelector('#att-report-result')
    resEl.innerHTML=reportAbsent.length
      ? `<p class="text-xs muted mb-2">ขาดเช็คชื่อวันที่ ${esc(date)}: ${reportAbsent.length} คน</p><div class="grid md:grid-cols-2 gap-2">${reportAbsent.map(s=>`<div class="team-sub rounded-lg p-2 flex items-center gap-2"><b class="text-xs truncate flex-1">${esc(s.full_name)}</b><span class="text-[10px] muted">${esc(s.student_code)} · ${esc(s.main_room)}</span></div>`).join('')}</div>`
      : `<p class="text-sm text-emerald-400 text-center py-4">✅ เช็คชื่อครบทุกคนในวันที่ ${esc(date)}</p>`
    body.querySelector('#att-report-csv').style.display=reportAbsent.length?'inline-block':'none'
  }
  body.querySelector('#att-report-csv').onclick=()=>{
    const date=body.querySelector('#att-report-date').value||todayStr
    const rows=['รหัส,ชื่อ-สกุล,ห้อง,สี,วันที่ขาด',...reportAbsent.map(s=>[s.student_code,s.full_name,s.main_room,c.name,date].map(x=>`"${String(x||'').replaceAll('"','""')}"`).join(','))]
    const a=document.createElement('a')
    a.href=URL.createObjectURL(new Blob(['\ufeff'+rows.join('\n')],{type:'text/csv'}))
    a.download=`ขาดเช็คชื่อ-สี${c.name}-${date}.csv`
    a.click();URL.revokeObjectURL(a.href)
  }

  renderProgress();renderRecent()
}

// แท็บ "ค่าบำรุงสี" — ใช้กลไกสแกน QR/กรอกรหัสมือแบบเดียวกับเช็คชื่อเป๊ะ (SQ:{student_code}:{ts}
// เดียวกัน) ต่างกันแค่ insert ลง sports_team_dues แทน sports_attendance และไม่มีแนวคิด
// "วันไหน" (จ่ายครั้งเดียวจบต่อคนต่ออีเวนต์ unique(event_id,student_id))
function renderDuesSection(body,{event,c,membersList,duesPayments,duesAmount,card}){
  let duesLocal=[...(duesPayments||[])]
  let recentScans=[]
  let html5Qrcode=null, scanning=false, reportUnpaid=[]

  body.innerHTML=`<section class="${card}">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <div><h2 class="font-bold">💰 เก็บค่าบำรุงสี${esc(c.name)}</h2><p class="text-xs muted">สแกน QR ประจำตัวนักเรียนตอนรับเงินสด — คนละ ${esc(duesAmount)} บาท จ่ายครั้งเดียวจบตลอดงาน</p></div>
    </div>
    <div id="dues-progress" class="mb-4"></div>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="team-sub rounded-2xl p-4 space-y-3">
        <div id="dues-camera-reader" class="w-full aspect-square rounded-xl overflow-hidden bg-black/40" style="display:none"></div>
        <button type="button" data-dues-camera-toggle class="w-full py-2.5 rounded-xl bg-pink-600 text-white text-sm font-bold">📷 เปิดกล้องสแกน QR</button>
        <div id="dues-feedback"></div>
      </div>
      <div class="team-sub rounded-2xl p-4 space-y-3">
        <div>
          <label class="text-xs font-bold muted">กรอกรหัสประจำตัวนักเรียน (เผื่อไม่ได้พก QR)</label>
          <div class="flex gap-2 mt-1.5">
            <input id="dues-manual-code" type="text" inputmode="numeric" placeholder="รหัสนักเรียน" class="flex-1 rounded-xl bg-slate-950/40 border line px-3 py-2 text-sm">
            <button type="button" id="dues-manual-submit" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">รับเงิน</button>
          </div>
        </div>
        <div>
          <p class="text-xs font-bold muted mb-1.5">รับล่าสุด</p>
          <div id="dues-recent" class="space-y-1.5 max-h-64 overflow-y-auto"></div>
        </div>
      </div>
    </div>
    <div class="line border-t mt-5 pt-5">
      <h3 class="font-bold mb-3">📄 รายงานยังไม่ชำระ</h3>
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <button type="button" id="dues-report-run" class="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold">สร้างรายงาน</button>
        <button type="button" id="dues-report-csv" class="px-4 py-2 rounded-xl border line text-xs font-bold" style="display:none">⬇️ ส่งออก CSV</button>
      </div>
      <div id="dues-report-result"></div>
    </div>
  </section>`

  const renderProgress=()=>{
    const paidCount=duesLocal.length
    const pct=membersList.length?Math.round(paidCount/membersList.length*100):0
    const total=duesLocal.reduce((s,d)=>s+(Number(d.amount)||0),0)
    body.querySelector('#dues-progress').innerHTML=`<div class="flex items-center justify-between text-xs font-bold mb-1.5"><span>จ่ายแล้ว ${paidCount}/${membersList.length} คน · รวม ${total.toLocaleString('th-TH')} บาท</span><span class="muted">${pct}%</span></div><div class="h-2 rounded-full team-sub overflow-hidden"><div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style="width:${pct}%"></div></div>`
  }
  const renderRecent=()=>{
    const el=body.querySelector('#dues-recent')
    el.innerHTML=recentScans.length ? recentScans.map(s=>`<div class="flex items-center gap-2 team-card rounded-lg p-2"><img src="${esc(s.image_url||s.photo_url||'')}" class="w-7 h-9 rounded object-cover border border-slate-700 flex-shrink-0" onerror="this.style.display='none'"><div class="min-w-0 flex-1"><b class="text-xs truncate block">${esc(s.full_name)}</b><span class="text-[10px] muted">${esc(s.student_code)}</span></div><span class="text-emerald-400 text-xs">✓</span><button type="button" data-cancel-dues="${esc(s._duesId)}" class="px-2 py-1 rounded-lg bg-red-950/40 text-red-300 border border-red-800/60 hover:bg-red-600 hover:text-white transition text-[10px] font-bold flex-shrink-0">ยกเลิก</button></div>`).join('') : '<p class="text-xs muted text-center py-4">ยังไม่มีการรับเงิน</p>'
    el.querySelectorAll('[data-cancel-dues]').forEach(btn=>btn.onclick=()=>cancelDues(btn.dataset.cancelDues))
  }
  const feedback=(ok,title,detail)=>{
    body.querySelector('#dues-feedback').innerHTML=`<div class="rounded-xl p-3 flex items-center gap-3 ${ok?'bg-emerald-950/40 border border-emerald-800/60':'bg-red-950/40 border border-red-800/60'}"><span class="text-lg">${ok?'✅':'❌'}</span><div class="min-w-0"><b class="text-xs block truncate ${ok?'text-emerald-300':'text-red-300'}">${esc(title)}</b><span class="text-[10px] muted truncate block">${esc(detail||'')}</span></div></div>`
  }
  const commitDues=async(student,method)=>{
    if(!student){feedback(false,'ไม่พบนักเรียน','ตรวจสอบรหัส/QR อีกครั้ง — หรือไม่ใช่สมาชิกสีนี้');return}
    const already=duesLocal.find(d=>d.student_id===student.id)
    if(already){feedback(false,`${student.full_name} จ่ายไปแล้ว`,`บันทึกไว้แล้ว ${Number(already.amount).toLocaleString('th-TH')} บาท`);return}
    const {data,error}=await supabase.from('sports_team_dues').insert({event_id:event.id,team_color_id:c.id,student_id:student.id,amount:duesAmount,method}).select().single()
    if(error){feedback(false,'บันทึกไม่สำเร็จ',error.message);return}
    duesLocal.push(data)
    recentScans.unshift({...student,_duesId:data.id})
    feedback(true,`รับเงิน ${student.full_name} สำเร็จ`,`รหัส ${student.student_code} · ${Number(duesAmount).toLocaleString('th-TH')} บาท`)
    renderProgress();renderRecent()
  }
  // ยกเลิกรายการที่สแกนผิด/พลาด — ลบทั้งจากฐานข้อมูลและรายการล่าสุดในหน้านี้ทันที
  const cancelDues=async(duesId)=>{
    const student=recentScans.find(s=>String(s._duesId)===String(duesId))
    const {error}=await supabase.from('sports_team_dues').delete().eq('id',duesId)
    if(error){feedback(false,'ยกเลิกไม่สำเร็จ',error.message);return}
    duesLocal=duesLocal.filter(d=>String(d.id)!==String(duesId))
    recentScans=recentScans.filter(s=>String(s._duesId)!==String(duesId))
    feedback(true,`ยกเลิกรายการรับเงิน${student?` ${student.full_name}`:''}แล้ว`,'ลบออกจากระบบเรียบร้อย')
    renderProgress();renderRecent()
  }

  body.querySelector('#dues-manual-submit').onclick=()=>{
    const input=body.querySelector('#dues-manual-code')
    const code=input.value.trim()
    if(!code)return
    const student=membersList.find(s=>s.student_code===code)
    commitDues(student,'manual')
    input.value='';input.focus()
  }
  body.querySelector('#dues-manual-code').addEventListener('keydown',e=>{if(e.key==='Enter')body.querySelector('#dues-manual-submit').click()})

  body.querySelector('[data-dues-camera-toggle]').onclick=async()=>{
    const btn=body.querySelector('[data-dues-camera-toggle]')
    const readerEl=body.querySelector('#dues-camera-reader')
    if(scanning){
      try{await html5Qrcode?.stop()}catch(e){}
      html5Qrcode=null;scanning=false;readerEl.style.display='none';btn.textContent='📷 เปิดกล้องสแกน QR'
      return
    }
    try{
      const Html5Qrcode=await _loadHtml5QrcodeAtt()
      readerEl.style.display='block'
      html5Qrcode=new Html5Qrcode('dues-camera-reader')
      let lastCode=null,lastTime=0
      await html5Qrcode.start({facingMode:'environment'},{fps:15,aspectRatio:1},decodedText=>{
        if(decodedText===lastCode&&Date.now()-lastTime<2000)return
        lastCode=decodedText;lastTime=Date.now()
        let code=decodedText
        if(code.startsWith('SQ:')){const parts=code.split(':');code=parts[1]}
        const student=membersList.find(s=>s.student_code===code)
        _playScanBeepAtt(!!student)
        commitDues(student,'qr')
      })
      scanning=true;btn.textContent='⏹ ปิดกล้อง'
    }catch(e){feedback(false,'เปิดกล้องไม่สำเร็จ',e.message)}
  }

  body.querySelector('#dues-report-run').onclick=()=>{
    const paidIds=new Set(duesLocal.map(d=>d.student_id))
    reportUnpaid=membersList.filter(s=>!paidIds.has(s.id))
    const resEl=body.querySelector('#dues-report-result')
    resEl.innerHTML=reportUnpaid.length
      ? `<p class="text-xs muted mb-2">ยังไม่ชำระ: ${reportUnpaid.length} คน</p><div class="grid md:grid-cols-2 gap-2">${reportUnpaid.map(s=>`<div class="team-sub rounded-lg p-2 flex items-center gap-2"><b class="text-xs truncate flex-1">${esc(s.full_name)}</b><span class="text-[10px] muted">${esc(s.student_code)} · ${esc(s.main_room)}</span></div>`).join('')}</div>`
      : `<p class="text-sm text-emerald-400 text-center py-4">✅ จ่ายค่าบำรุงครบทุกคนแล้ว</p>`
    body.querySelector('#dues-report-csv').style.display=reportUnpaid.length?'inline-block':'none'
  }
  body.querySelector('#dues-report-csv').onclick=()=>{
    const rows=['รหัส,ชื่อ-สกุล,ห้อง,สี',...reportUnpaid.map(s=>[s.student_code,s.full_name,s.main_room,c.name].map(x=>`"${String(x||'').replaceAll('"','""')}"`).join(','))]
    const a=document.createElement('a')
    a.href=URL.createObjectURL(new Blob(['﻿'+rows.join('\n')],{type:'text/csv'}))
    a.download=`ยังไม่จ่ายค่าบำรุง-สี${c.name}.csv`
    a.click();URL.revokeObjectURL(a.href)
  }

  renderProgress();renderRecent()
}

// แท็บ "คะแนน/เหรียญ" — คะแนนรวมกับจำนวนเหรียญเป็นคนละส่วนกันจริงๆ (เหรียญมาจากอันดับการแข่งขัน
// แต่ละรายการ ส่วนคะแนนรวมมาจากหลายหมวดรวมกัน: ขบวนพาเหรด/วิชาการ/กีฬา/หน้าบ้าน-สแตนด์ ฯลฯ)
// จึงแยกเป็น 2 แท็บใหญ่ "คะแนนรวม" กับ "อันดับเหรียญ" ไม่ปนกันในตารางเดียวแบบเดิม แต่ละแท็บใหญ่
// มีแท็บย่อย "รวมทุกสีเพศเดียวกัน" ⇄ "เฉพาะสีของฉัน" เหมือนกัน — ระบบแข่งแยกเพศชาย-หญิงเด็ดขาด
// (4 สีต่อเพศ) ต้องกรองเฉพาะสีเพศเดียวกันเสมอ (scoreRank/medalRank กรองเพศไว้แล้วตั้งแต่ต้นทาง)
function renderScoreMedalSection(body,{totals,colorName,gender,myTotal,scoreRank,medalRank,scoreBreakdown,maxParadeScore,maxPageScore,maxColorEvalScore,medalBreakdown,card}){
  const sameGenderTotals=totals.filter(t=>t.gender===gender)
  const rankedByScore=[...sameGenderTotals].sort((a,b)=>(Number(b.grand_total)||0)-(Number(a.grand_total)||0))
  const rankedByMedals=[...sameGenderTotals].sort((a,b)=>(Number(b.gold_count)||0)-(Number(a.gold_count)||0)||(Number(b.silver_count)||0)-(Number(a.silver_count)||0)||(Number(b.bronze_count)||0)-(Number(a.bronze_count)||0))
  const genderLabel=gender==='W'?'หญิง':'ชาย'
  let mainTab='score', view='all'

  body.innerHTML=`<section class="${card}">
    <div class="flex flex-wrap justify-between gap-3 mb-4">
      <div><h2 class="font-bold">🏅 คะแนนรวมและเหรียญ</h2><p class="text-xs muted">เปรียบเทียบเฉพาะสี${esc(genderLabel)}ด้วยกัน (แข่งแยกเพศ ไม่ปนกัน)</p></div>
    </div>
    <div class="inline-flex p-1 rounded-xl team-sub gap-1 mb-3">
      <button type="button" data-score-main="score" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">📊 คะแนนรวม</button>
      <button type="button" data-score-main="medals" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">🏅 อันดับเหรียญ</button>
    </div>
    <div class="inline-flex p-1 rounded-xl team-sub gap-1 mb-4">
      <button type="button" data-score-view="all" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">รวมทุกสี${esc(genderLabel)}</button>
      <button type="button" data-score-view="mine" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">🎯 เฉพาะสี${esc(colorName)}</button>
    </div>
    <div id="score-view-body"></div>
  </section>`

  const SCORE_CATEGORY_ICON={parade:'🕌',page:'📣',color_eval:'🎨'}
  const progressBar=(label,val,max)=>{const pct=Math.min(100,(Number(val||0)/max)*100)
    return `<div class="space-y-1"><div class="flex justify-between text-xs"><span class="muted">${label}</span><span class="font-bold">${Number(val||0).toLocaleString()} / ${max}</span></div><div class="h-1.5 rounded-full team-sub overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-pink-500 to-violet-500" style="width:${pct}%"></div></div></div>`}
  const scoreMineDetail=()=>`<div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4"><div class="team-sub rounded-xl p-3 md:col-span-4"><p class="text-xs muted">คะแนนรวมทุกหมวด</p><b class="text-3xl">${Number(myTotal.grand_total||0).toLocaleString()}</b></div>${[['ขบวนพาเหรด',myTotal.parade_total||0],['วิชาการ',myTotal.academic_total||0],['คะแนนกีฬา',myTotal.sport_score_total||0],['หน้าบ้าน/สแตนด์',myTotal.page_total||0]].map(([l,v])=>`<div class="team-sub rounded-xl p-3"><p class="text-xs muted">${l}</p><b class="text-2xl">${Number(v).toLocaleString()}</b></div>`).join('')}</div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      ${progressBar('🕌 พาเหรด & เชียร์',myTotal.parade_total,maxParadeScore)}
      ${progressBar('🧹 วิชาการ',myTotal.academic_total,100)}
      ${progressBar('🏃 คะแนนกีฬา',myTotal.sport_score_total,150)}
      ${progressBar('📣 หน้าเว็บเพจ',myTotal.page_total,maxPageScore)}
      ${progressBar('🎨 ประเมินสีสะสม',0,maxColorEvalScore)}
    </div>
    <div class="border-t line pt-3">
      <p class="text-[10.5px] uppercase tracking-wider font-bold muted mb-2">📋 รายละเอียดคะแนนแยกเกณฑ์ (เฉลี่ยจากกรรมการ)</p>
      ${(scoreBreakdown&&scoreBreakdown.length) ? `<div class="space-y-1.5">${scoreBreakdown.map(b=>`<div class="team-sub rounded-lg px-3 py-2 flex items-center justify-between gap-2"><span class="text-xs">${SCORE_CATEGORY_ICON[b.category]||'🎯'} ${esc(b.name)} <span class="muted">(เต็ม ${b.maxScore})</span></span><b class="text-sm">${b.avg} คะแนน</b></div>`).join('')}</div>` : `<p class="text-xs muted text-center py-4">ยังไม่มีกรรมการให้คะแนนเกณฑ์นี้</p>`}
      ${Number(myTotal.academic_total||0)>0?`<div class="team-sub rounded-lg px-3 py-2 flex items-center justify-between gap-2 mt-1.5"><span class="text-xs">🧹 คะแนนการแข่งขันทักษะวิชาการสะสม</span><b class="text-sm">${Number(myTotal.academic_total).toLocaleString()} คะแนน</b></div>`:''}
      ${Number(myTotal.sport_score_total||0)>0?`<div class="team-sub rounded-lg px-3 py-2 flex items-center justify-between gap-2 mt-1.5"><span class="text-xs">🏃 คะแนนการแข่งขันกีฬาสะสม</span><b class="text-sm">${Number(myTotal.sport_score_total).toLocaleString()} คะแนน</b></div>`:''}
    </div>`

  const scoreAllTable=()=>`<div class="text-xs muted mb-2">อันดับคะแนนรวมของสี${esc(colorName)}: <b class="text-slate-200">#${scoreRank}</b></div><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2">อันดับ</th><th class="p-2 text-left">สี</th><th class="p-2">คะแนนรวม</th></tr></thead><tbody>${rankedByScore.map((r,i)=>`<tr class="border-b line ${r.color_name===colorName?'bg-pink-500/10':''}"><td class="p-2 text-center font-bold">${i+1}</td><td class="p-2 font-bold">สี${esc(r.color_name)}</td><td class="p-2 text-center">${Number(r.grand_total||0).toLocaleString()}</td></tr>`).join('')||'<tr><td colspan="3" class="p-8 text-center muted">ยังไม่มีคะแนน</td></tr>'}</tbody></table></div>`

  const MEDAL_ICON={gold:'🥇',silver:'🥈',bronze:'🥉'}
  const medalsMineDetail=()=>`<div class="grid grid-cols-3 gap-2 mb-4">${[['🥇 ทอง',myTotal.gold_count||0],['🥈 เงิน',myTotal.silver_count||0],['🥉 ทองแดง',myTotal.bronze_count||0]].map(([l,v])=>`<div class="team-sub rounded-xl p-3 text-center"><p class="text-xs muted">${l}</p><b class="text-2xl">${Number(v).toLocaleString()}</b></div>`).join('')}</div>
    <div class="border-t line pt-3">
      <p class="text-[10.5px] uppercase tracking-wider font-bold muted mb-2">📋 รายละเอียดผู้ได้รับเหรียญ</p>
      ${(medalBreakdown&&medalBreakdown.length) ? `<div class="space-y-1.5">${medalBreakdown.map(b=>`<div class="team-sub rounded-lg px-3 py-2 flex items-center justify-between gap-2"><span class="text-xs">${MEDAL_ICON[b.medalType]||'🏅'} ${esc(b.sport)}</span><b class="text-sm text-emerald-400">+${b.points} คะแนน</b></div>`).join('')}</div>` : `<p class="text-xs muted text-center py-4">ยังไม่มีผลการแข่งขันที่บันทึกเหรียญของสีนี้</p>`}
    </div>`

  const medalsAllTable=()=>`<div class="text-xs muted mb-2">อันดับเหรียญของสี${esc(colorName)}: <b class="text-slate-200">#${medalRank}</b></div><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2">อันดับ</th><th class="p-2 text-left">สี</th><th class="p-2">🥇 ทอง</th><th class="p-2">🥈 เงิน</th><th class="p-2">🥉 ทองแดง</th></tr></thead><tbody>${rankedByMedals.map((r,i)=>`<tr class="border-b line ${r.color_name===colorName?'bg-pink-500/10':''}"><td class="p-2 text-center font-bold">${i+1}</td><td class="p-2 font-bold">สี${esc(r.color_name)}</td><td class="p-2 text-center">${r.gold_count||0}</td><td class="p-2 text-center">${r.silver_count||0}</td><td class="p-2 text-center">${r.bronze_count||0}</td></tr>`).join('')||'<tr><td colspan="5" class="p-8 text-center muted">ยังไม่มีเหรียญ</td></tr>'}</tbody></table></div>`

  const renderView=()=>{
    body.querySelectorAll('[data-score-main]').forEach(b=>b.classList.toggle('team-tab-active',b.dataset.scoreMain===mainTab))
    body.querySelectorAll('[data-score-view]').forEach(b=>b.classList.toggle('team-tab-active',b.dataset.scoreView===view))
    const isScore=mainTab==='score'
    body.querySelector('#score-view-body').innerHTML = view==='mine'
      ? (isScore?scoreMineDetail():medalsMineDetail())
      : (isScore?scoreAllTable():medalsAllTable())
  }
  body.querySelectorAll('[data-score-main]').forEach(b=>b.onclick=()=>{mainTab=b.dataset.scoreMain;renderView()})
  body.querySelectorAll('[data-score-view]').forEach(b=>b.onclick=()=>{view=b.dataset.scoreView;renderView()})
  renderView()
}
function openAthletePrintDialog(wrap,c,regs,competitions){
  const modal=document.createElement('div');modal.className='fixed inset-0 bg-black/70 grid place-items-center p-4';modal.style.zIndex='430'
  const compIds=[...new Set(regs.map(r=>r.sport_id).filter(Boolean).map(String))]
  const comps=competitions.filter(x=>compIds.includes(String(x.id)))
  modal.innerHTML=`<div class="team-card border rounded-3xl w-full max-w-2xl p-5 shadow-2xl"><div class="flex items-center justify-between gap-3 mb-4"><div><h2 class="text-lg font-bold">🖨️ พิมพ์บัญชีนักกีฬา สี${esc(c.name)}</h2><p class="text-xs muted">เลือกรายการกีฬาและรูปแบบใบรายชื่อก่อนสร้างเอกสาร</p></div><button data-close-print class="w-10 h-10 rounded-xl border line">✕</button></div><div class="space-y-4"><div><label class="text-xs font-bold muted">เลือกรายการกีฬา</label><select id="ath-print-comp" class="mt-1 w-full rounded-xl bg-slate-950/40 border line px-3 py-3"><option value="all">-- ทุกประเภทกีฬาที่สีนี้ลงทะเบียน --</option>${comps.map(x=>`<option value="${x.id}">${esc(x.name)}${x.code?` (${esc(x.code)})`:''}</option>`).join('')}</select></div><div><label class="text-xs font-bold muted">เลือกรูปแบบเอกสารพิมพ์</label><div class="grid sm:grid-cols-2 gap-2 mt-2"><button data-ath-format="table" class="ath-format team-tab-active rounded-xl border line px-4 py-3 text-left"><b>📋 แบบตารางรายชื่อ</b><p class="text-xs opacity-80">เหมาะสำหรับเซ็นชื่อ/ตรวจสอบ</p></button><button data-ath-format="cards" class="ath-format rounded-xl border line px-4 py-3 text-left"><b>🖼️ แบบการ์ดรูปภาพ</b><p class="text-xs opacity-80">เหมาะสำหรับตรวจตัวนักกีฬา</p></button></div></div><button data-ath-print-confirm class="w-full py-3 rounded-xl bg-pink-600 text-white font-bold">สร้างเอกสาร / พิมพ์</button></div></div>`
  wrap.appendChild(modal)
  let format='table'
  modal.querySelector('[data-close-print]').onclick=()=>modal.remove()
  modal.querySelectorAll('[data-ath-format]').forEach(b=>b.onclick=()=>{format=b.dataset.athFormat;modal.querySelectorAll('[data-ath-format]').forEach(x=>x.classList.toggle('team-tab-active',x.dataset.athFormat===format))})
  modal.querySelector('[data-ath-print-confirm]').onclick=()=>{const comp=modal.querySelector('#ath-print-comp').value;const rows=regs.filter(r=>comp==='all'||String(r.sport_id)===String(comp)).map(r=>({name:r.students?.full_name,code:r.students?.student_code,room:r.students?.main_room,detail:r.sports?.name||'—',extra:r.jersey_number?`เบอร์ ${r.jersey_number}`:'',photo:r.students?.image_url}));const label=comp==='all'?'ทุกประเภทกีฬา':(comps.find(x=>String(x.id)===String(comp))?.name||'รายการกีฬา');modal.remove();printTeamList(`บัญชีนักกีฬาสี${c.name} · ${label}`,c,rows,{mode:format})}
}
// รูปแบบเดียวกับใบรายชื่อสมาชิกสีที่พิมพ์จากระบบกีฬาสีหลัก (AZIZGAMES handlePrintMemberList) —
// ต้องอัปเดตคู่กันทุกครั้งถ้าแก้ฝั่ง AZIZGAMES (src/pages/Registrations.jsx)
function printColorRoster(color,members,{academicYear,schoolName,schoolName2}){
  if(!members.length){toast(`ยังไม่มีข้อมูลนักเรียนในคณะสี${color}`,'error');return}
  const order=str=>{const m=String(str||'').match(/ม\.(\d+)\/(\d+)/);if(m)return[parseInt(m[1]),parseInt(m[2])];if(String(str||'').startsWith('ปวช.'))return[parseInt(str.split('.')[1])+6,1];return[10,10]}
  const sorted=[...members].sort((a,b)=>{const[aM,am]=order(a.main_room);const[bM,bm]=order(b.main_room);return aM===bM?am-bm:aM-bM})
  const levels={}
  sorted.forEach(s=>{const room=s.main_room||'ไม่ระบุ';const level=room.startsWith('ปวช.')?'ปวช.':room.split('/')[0];(levels[level]=levels[level]||[]).push(s)})
  const genTable=(rows,level)=>`<div class="page"><div class="header-section"><div class="logo-container"><img src="https://lh3.googleusercontent.com/d/1JDduqJInp2BjORgZhhUgv80fXtMs3JzV"><img src="https://lh3.googleusercontent.com/d/1lXMVnPf8rIl5SBzqZeSCEtbpf6U7idWa"><img src="https://lh3.googleusercontent.com/d/1JPmgiu_pgACGYTymHsLqROm1GrzZSklP"></div><h2 class="h1"><strong>รายชื่อสมาชิกสี${esc(color)} ชั้น ${esc(level)} กิจกรรมกีฬาสีภายใน ปีการศึกษา ${esc(academicYear)}</strong></h2><h2 class="h2"><strong>${esc(schoolName)}${schoolName2?`<br>${esc(schoolName2)}`:''}</strong></h2></div><table class="table-responsive"><thead><tr><th class="no-column">#</th><th class="code-column">รหัส</th><th class="name-column">ชื่อ - สกุล</th><th class="cls-column">ชั้น</th><th class="sn-column">ไซส์เสื้อ</th>${Array(6).fill('<th class="wide-column"></th>').join('')}</tr></thead><tbody>${rows.map((s,i)=>`<tr><td class="no-column" style="text-align:center;">${i+1}</td><td class="code-column" style="text-align:center;">${esc(s.student_code)}</td><td class="name-column">${esc(s.full_name)}</td><td class="cls-column" style="text-align:center;">${esc(s.main_room)}</td><td class="sn-column" style="text-align:center; font-weight:bold;">${esc(s.sports_shirt_size||'-')}</td>${Array(6).fill('<td class="wide-column"></td>').join('')}</tr>`).join('')}</tbody></table><div style="page-break-after: always;"></div></div>`
  const levelKeys=Object.keys(levels)
  let body=levelKeys.filter(l=>l!=='ปวช.').map(l=>genTable(levels[l],l)).join('')
  if(levels['ปวช.']) body+=genTable(levels['ปวช.'],'ปวช.')
  const html=`<html><head><title>รายชื่อสมาชิกสี${esc(color)}</title><link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><style>
    body{font-family:'Sarabun',sans-serif;text-align:center;margin:0;padding:0}
    table{width:100%;border-collapse:collapse;table-layout:fixed}
    th,td{border:1px solid black;padding:4px;font-size:14px;height:32px;vertical-align:middle}
    th{background-color:#f2f2f2;text-align:center;margin-top:10px}
    .table-responsive{width:100%;border-collapse:collapse}
    .logo-container{display:flex;justify-content:center;align-items:center;margin-bottom:10px}
    .logo-container img{margin-top:10px;height:60px}
    .h1{margin-top:10px;margin-bottom:5px;font-size:16px}
    .h2{margin-top:5px;margin-bottom:10px;font-size:14px}
    .no-column{width:4%}
    .code-column{width:11%}
    .name-column{width:34%;text-align:left}
    .cls-column{width:18%}
    .sn-column{width:9%}
    .wide-column{width:4%}
    @media print{body{width:210mm;height:297mm}thead{display:table-header-group}tr{page-break-inside:avoid}}
  </style></head><body>${body}</body></html>`
  const w=window.open('','_blank')
  w.document.write(html);w.document.close();w.focus()
  setTimeout(()=>w.print(),500)
}
function printTeamList(title,c,rows,{mode='table'}={}){
  const cards=rows.map((r,i)=>`<div class="print-card"><div class="print-photo">${r.photo?`<img src="${esc(r.photo)}">`:i+1}</div><div><b>${esc(r.name)}</b><p>${esc(r.code)} · ${esc(r.room)}</p><p>${esc(r.detail)} ${esc(r.extra||'')}</p></div></div>`).join('')
  const table=`<table class="print-table"><thead><tr><th>#</th><th>รหัส</th><th>ชื่อ - สกุล</th><th>ชั้น</th><th>รายละเอียด</th><th>หมายเหตุ</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(r.code)}</td><td>${esc(r.name)}</td><td>${esc(r.room)}</td><td>${esc(r.detail)}</td><td>${esc(r.extra||'')}</td></tr>`).join('')}</tbody></table>`
  const area=document.createElement('div');area.id='team-print-area';area.innerHTML=`<style>@media print{body>*:not(#team-print-area){display:none!important}.print-actions{display:none!important}#team-print-area{position:static!important;padding:0!important}}#team-print-area{position:fixed;inset:0;z-index:9999;background:white;color:#111827;overflow:auto;padding:24px;font-family:Sarabun,Arial,sans-serif}.print-actions{position:sticky;top:0;background:white;padding-bottom:12px;text-align:right}.print-table{width:100%;border-collapse:collapse}.print-table th,.print-table td{border:1px solid #111827;padding:6px 8px;font-size:12px}.print-table th{background:#f3f4f6}.print-title{text-align:center;margin:8px 0 16px}.print-logos{display:flex;justify-content:center;gap:8px;margin-top:4px}.print-logo{width:54px;height:54px;border-radius:999px;object-fit:cover}.print-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.print-card{border:1px solid #111827;border-radius:12px;padding:10px;display:flex;gap:10px;align-items:center;min-height:88px}.print-photo{width:56px;height:64px;border:1px solid #9ca3af;border-radius:8px;display:grid;place-items:center;font-weight:bold;overflow:hidden}.print-photo img{width:100%;height:100%;object-fit:cover}</style><div class="print-actions"><button id="team-print-confirm" style="padding:8px 14px;background:#111827;color:white;border-radius:10px">🖨️ สั่งพิมพ์ / บันทึก PDF</button> <button id="team-print-close" style="padding:8px 14px;border:1px solid #d1d5db;border-radius:10px">ปิด</button></div><div class="print-logos">${c.logo_url?`<img src="${esc(c.logo_url)}" class="print-logo">`:''}</div><div class="print-title"><h2>${esc(title)}</h2><p>กิจกรรมกีฬาสีภายใน · พิมพ์ ${new Date().toLocaleDateString('th-TH')}</p></div>${mode==='cards'?`<div class="print-grid">${cards}</div>`:table}`;document.body.appendChild(area);area.querySelector('#team-print-confirm').onclick=()=>window.print();area.querySelector('#team-print-close').onclick=()=>area.remove()
}

function identityForm(wrap,m,c){const box=document.createElement('div');box.className='fixed inset-0 z-[400] bg-black/70 grid place-items-center p-4';box.innerHTML=`<form class="bg-slate-900 border border-slate-700 rounded-2xl p-5 w-full max-w-lg space-y-3"><h3 class="font-bold">เสนอแก้อัตลักษณ์ทีมสี${esc(c.name)}</h3><input name="logo" placeholder="URL โลโก้ใหม่" class="w-full bg-slate-800 rounded-xl px-3 py-2"><input name="name" placeholder="ชื่อทีมใหม่ (ถ้ามี)" class="w-full bg-slate-800 rounded-xl px-3 py-2"><input name="motto" placeholder="คำขวัญ" class="w-full bg-slate-800 rounded-xl px-3 py-2"><input name="mascot" placeholder="มาสคอต" class="w-full bg-slate-800 rounded-xl px-3 py-2"><div class="flex gap-2"><button type="button" class="flex-1 border border-slate-600 rounded-xl py-2" data-cancel>ยกเลิก</button><button class="flex-1 bg-violet-600 rounded-xl py-2">ส่งตรวจสอบ</button></div></form>`;wrap.appendChild(box);box.querySelector('[data-cancel]').onclick=()=>box.remove();box.querySelector('form').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);const {error}=await supabase.from('sports_team_identity_requests').insert({event_id:m.event_id,team_color_id:c.id,proposed_logo_url:f.get('logo')||null,proposed_name:f.get('name')||null,proposed_motto:f.get('motto')||null,proposed_mascot:f.get('mascot')||null,status:'pending_lead',submitted_at:new Date().toISOString()});if(error)return toast(error.message,'error');box.remove();toast('ส่งให้หัวหน้าครูประจำสีตรวจสอบแล้ว');openMyTeamWorkspace()}}
