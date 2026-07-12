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
    const [{data:color},{data:req},{data:regs},{data:awards},{data:myVote}] = await Promise.all([
      supabase.from('team_colors').select('*').eq('id',student.team_color_id || '').maybeSingle(),
      supabase.from('sports_shirt_requests').select('*').eq('event_id',event.id).eq('student_id',student.id).maybeSingle(),
      supabase.from('registrations').select('id,jersey_number,sports(name,venue)').eq('event_id',event.id).eq('student_id',student.id),
      supabase.from('outstanding_athletes').select('id,note,awarded_at,sports(name)').eq('event_id',event.id).eq('student_id',student.id),
      supabase.from('sports_shirt_votes').select('design_id,sports_shirt_designs(design_no,name,sports_shirt_design_colors(*))').eq('event_id',event.id).eq('student_id',student.id).maybeSingle(),
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
      <section class="bg-white rounded-2xl border p-5"><h2 class="font-bold mb-4">🏅 ผลงานและเกียรติบัตร</h2>${awards?.length?awards.map(a=>`<div class="p-3 rounded-xl bg-amber-50"><b>${esc(a.sports?.name||'รางวัลนักกีฬาดีเด่น')}</b><p class="text-sm">${esc(a.note)}</p></div>`).join(''):'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีเกียรติบัตรหรือรางวัล</p>'}</section>
      <button id="open-full-sports" class="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-base">🏆 เปิดระบบกีฬาสีแบบเต็ม</button>
    </div>`
    el.querySelector('#open-full-sports')?.addEventListener('click',()=>openAzizGamesModal())
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

export async function renderAdvisorStudents(teacher,rooms=[]) {
  const el=main(); const samai=rooms.filter(r=>r.category==='สามัญ'); el.innerHTML='<div class="py-16 text-center">กำลังโหลด...</div>'
  if(!samai.length){el.innerHTML='<div class="text-center py-16 text-gray-500">หน้านี้สำหรับครูที่ปรึกษาสามัญหรือ ปวช. สามัญ</div>';return}
  try {
    const {event,cfg}=await context(); const roomNames=samai.map(r=>r.main_room)
    const {data:students,error}=await supabase.from('students').select('id,student_code,full_name,main_room,house_color,image_url,photo_url,sports_shirt_size,sports_shirt_requests(*)').in('main_room',roomNames).eq('is_active',true).order('main_room').order('student_code'); if(error)throw error
    const sizes=cfg?.allowed_sizes||['S','M','L','XL','2XL','3XL']; let filter='all'
    const draw=()=>{const rows=(students||[]).filter(s=>{const r=(s.sports_shirt_requests||[]).find(x=>x.event_id===event.id);return filter==='all'||(filter==='none'?!r:r?.status===filter)});el.querySelector('#advisor-rows').innerHTML=rows.map(s=>{const r=(s.sports_shirt_requests||[]).find(x=>x.event_id===event.id),photo=s.image_url||s.photo_url;return `<tr class="border-t"><td class="p-3"><div class="flex items-center gap-3">${photo?`<img src="${esc(photo)}" alt="" class="w-11 h-11 rounded-full object-cover border border-gray-200 bg-gray-100 flex-shrink-0" loading="lazy">`:`<div class="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center font-bold flex-shrink-0">${esc((s.full_name||'?').charAt(0))}</div>`}<div><b>${esc(s.full_name)}</b><p class="text-xs text-gray-500">${esc(s.student_code)} · ${esc(s.main_room)} · สี${esc(s.house_color||'—')}</p></div></div></td><td class="p-3">${esc(r?.requested_size||'—')}</td><td class="p-3"><select data-size="${s.id}" class="border rounded-lg px-2 py-1">${sizes.map(x=>`<option ${x===(r?.confirmed_size||r?.requested_size)?'selected':''}>${esc(x)}</option>`).join('')}</select></td><td class="p-3"><span class="text-xs ${statusClass(r?.status)} px-2 py-1 rounded-full">${badge(r?.status)}</span></td><td class="p-3"><button data-confirm="${s.id}" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs">ยืนยัน</button></td></tr>`}).join('')||'<tr><td colspan="5" class="p-8 text-center text-gray-400">ไม่พบข้อมูล</td></tr>';el.querySelectorAll('[data-confirm]').forEach(b=>b.onclick=async()=>{const id=Number(b.dataset.confirm),size=el.querySelector(`[data-size="${id}"]`).value;const {error}=await supabase.rpc('advisor_confirm_sports_shirt',{p_event:event.id,p_student:id,p_size:size,p_note:null});if(error)return toast(error.message,'error');toast('ยืนยันไซซ์แล้ว');renderAdvisorStudents(teacher,rooms)})}
    el.innerHTML=`<div class="max-w-6xl mx-auto"><div class="flex flex-wrap justify-between gap-3 mb-5"><div><h1 class="text-2xl font-bold">👥 นักเรียนที่ปรึกษา</h1><p class="text-sm text-gray-500">ติดตามและยืนยันไซซ์เสื้อ ห้อง ${roomNames.map(esc).join(', ')}</p></div><select id="advisor-filter" class="border rounded-xl px-3"><option value="all">ทุกสถานะ</option><option value="none">ยังไม่จำนง</option><option value="pending">รอยืนยัน</option><option value="confirmed">ยืนยันแล้ว</option><option value="advisor_updated">ครูเลือกแทน</option></select></div><div class="bg-white rounded-2xl border overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">นักเรียน</th><th>จำนง</th><th>ไซซ์ยืนยัน</th><th>สถานะ</th><th></th></tr></thead><tbody id="advisor-rows"></tbody></table></div></div>`
    el.querySelector('#advisor-filter').onchange=e=>{filter=e.target.value;draw()};draw()
  } catch(e){console.error(e);el.innerHTML=missing()}
}

export async function renderShirtSummary() {
  const el=main(); el.innerHTML='<div class="py-16 text-center">กำลังสรุปยอด...</div>'
  try { const {event,cfg}=await context();if(cfg?.shirt_summary_enabled===false){el.innerHTML='<div class="text-center py-16">แอดมินปิดหน้าสรุปยอดไว้</div>';return}
    const {data:{user}}=await supabase.auth.getUser(); const {data:profile}=await supabase.from('profiles').select('role,is_also_admin').eq('id',user.id).maybeSingle(); const isAdmin=profile?.role==='admin'||profile?.is_also_admin===true
    const {data:myTeamMemberships}=await supabase.from('sports_team_memberships').select('team_color_id,role,permissions').eq('event_id',event.id).eq('profile_id',user.id).eq('is_active',true)
    const canManageTeamStaff=isAdmin||(myTeamMemberships||[]).some(m=>m.role==='lead_teacher')
    const [{data:colors},{data:reqs,error},{data:approvals}]=await Promise.all([supabase.from('team_colors').select('id,name,hex_color').eq('event_id',event.id).order('display_order'),supabase.from('sports_shirt_requests').select('status,requested_size,confirmed_size,students(full_name,student_code,main_room,house_color)').eq('event_id',event.id),isAdmin?supabase.from('sports_team_identity_requests').select('*,team_colors(name,logo_url)').eq('event_id',event.id).eq('status','pending_admin'):Promise.resolve({data:[]})]);if(error)throw error
    const sizes=cfg?.allowed_sizes||['S','M','L','XL','2XL','3XL']; const confirmed=(reqs||[]).filter(r=>['confirmed','advisor_updated'].includes(r.status));
    el.innerHTML=`<div class="max-w-7xl mx-auto space-y-5"><div class="flex justify-between"><div><h1 class="text-2xl font-bold">📊 สรุปยอดเสื้อกีฬาสี</h1><p class="text-sm text-gray-500">ยอดผลิตนับเฉพาะรายการที่ครูยืนยันแล้ว</p></div><button id="shirt-export" class="px-4 py-2 bg-emerald-600 text-white rounded-xl">ส่งออก CSV</button></div>${isAdmin?`<section class="bg-white border border-indigo-100 rounded-2xl p-4"><div class="flex items-center justify-between gap-3 mb-3"><div><h2 class="font-bold">⚙️ การเปิดใช้งาน</h2><p class="text-xs text-gray-500 mt-1">กดปุ่มในแต่ละการ์ดเพื่อเปลี่ยนสถานะ แล้วบันทึก</p></div><button id="cfg-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกการตั้งค่า</button></div><div class="grid md:grid-cols-4 gap-3">${actionCard('shirt_request_enabled','รับจำนงไซซ์เสื้อ','นักเรียนจะเห็นปุ่มส่งไซซ์ และรอครูที่ปรึกษายืนยัน',!!cfg?.shirt_request_enabled)}${actionCard('shirt_summary_enabled','หน้าสรุปยอดเสื้อ','ผู้รับผิดชอบสามารถดูยอดสีและไซซ์เสื้อได้',!!cfg?.shirt_summary_enabled)}${actionCard('team_workspace_enabled','จัดการสีของฉัน','ครูประจำสีและสต๊าฟเข้าหน้าจัดการสีได้',!!cfg?.team_workspace_enabled)}${actionCard('shirt_vote_enabled','โหวตแบบเสื้อกีฬาสี','นักเรียนเปิดหน้าโหวตดีไซน์เสื้อได้',!!cfg?.shirt_vote_enabled)}</div></section>`:''}<div class="grid grid-cols-3 gap-3"><div class="bg-white border rounded-2xl p-4"><p class="text-xs text-gray-500">ส่งข้อมูล</p><b class="text-2xl">${reqs?.length||0}</b></div><div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">รอยืนยัน</p><b class="text-2xl">${(reqs||[]).filter(x=>x.status==='pending').length}</b></div><div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ยืนยันแล้ว</p><b class="text-2xl">${confirmed.length}</b></div></div><div class="bg-white border rounded-2xl overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">สี</th>${sizes.map(s=>`<th>${esc(s)}</th>`).join('')}<th>รวม</th></tr></thead><tbody>${(colors||[]).map(c=>{const rr=confirmed.filter(r=>r.students?.house_color===c.name);return `<tr class="border-t"><td class="p-3 font-bold" style="color:${c.hex_color}">สี${esc(c.name)}</td>${sizes.map(s=>`<td class="text-center">${rr.filter(r=>r.confirmed_size===s).length}</td>`).join('')}<td class="text-center font-bold">${rr.length}</td></tr>`}).join('')}</tbody></table></div>${canManageTeamStaff?`<section id="sports-team-membership-admin" class="bg-white border rounded-2xl p-5"><div class="py-8 text-center text-gray-400">กำลังโหลดหน้ามอบหมายผู้ดูแลสี...</div></section>`:''}${isAdmin?`<section class="bg-white border rounded-2xl p-5"><h2 class="font-bold mb-3">🎨 คิวอนุมัติอัตลักษณ์ขั้นสุดท้าย</h2>${approvals?.map(a=>`<div class="p-3 bg-gray-50 rounded-xl flex items-center gap-3 mb-2">${a.proposed_logo_url?`<img src="${esc(a.proposed_logo_url)}" class="w-12 h-12 rounded-full object-cover">`:''}<div class="flex-1"><b>ทีมสี${esc(a.team_colors?.name)}</b><p class="text-xs text-gray-500">${esc(a.proposed_name||a.proposed_motto||'เปลี่ยนโลโก้/อัตลักษณ์')}</p></div><button data-review="${a.id}" data-decision="reject" class="px-3 py-1.5 border rounded-lg text-red-600">ปฏิเสธ</button><button data-review="${a.id}" data-decision="approve" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg">อนุมัติ</button></div>`).join('')||'<p class="text-sm text-gray-400">ไม่มีคำขอรออนุมัติ</p>'}</section>`:''}</div>`
    el.querySelector('#shirt-export').onclick=()=>{const rows=['รหัส,ชื่อ,ห้อง,สี,ไซซ์,สถานะ',...confirmed.map(r=>[r.students?.student_code,r.students?.full_name,r.students?.main_room,r.students?.house_color,r.confirmed_size,r.status].map(x=>`"${String(x||'').replaceAll('"','""')}"`).join(','))];const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+rows.join('\n')],{type:'text/csv'}));a.download='sports-shirt-summary.csv';a.click();URL.revokeObjectURL(a.href)}
    el.querySelectorAll('[data-cfg]').forEach(b=>b.addEventListener('click',()=>{const next=b.dataset.enabled!=='true';b.dataset.enabled=next?'true':'false';renderShirtSummary.pendingCfg={...(renderShirtSummary.pendingCfg||{}),[b.dataset.cfg]:next};b.textContent=next?'ปิดใช้งาน':'เปิดใช้งาน';toast(`เปลี่ยนสถานะแล้ว กดบันทึกเพื่อยืนยัน`)}))
    el.querySelector('#cfg-save')?.addEventListener('click',async()=>{const payload={shirt_request_enabled:!!cfg?.shirt_request_enabled,shirt_summary_enabled:!!cfg?.shirt_summary_enabled,team_workspace_enabled:!!cfg?.team_workspace_enabled,shirt_vote_enabled:!!cfg?.shirt_vote_enabled,...(renderShirtSummary.pendingCfg||{})};const {error}=await supabase.from('sports_portal_settings').update({...payload,updated_at:new Date().toISOString()}).eq('event_id',event.id);if(error)return toast(error.message,'error');try{await syncAzizPublicShirtButton(payload.shirt_request_enabled)}catch(e){console.warn('Unable to sync AZIZGAMES shirt button',e)}renderShirtSummary.pendingCfg={};toast('บันทึกการเปิดใช้งานแล้ว');renderShirtSummary()})
    el.querySelectorAll('[data-review]').forEach(b=>b.onclick=async()=>{const {error}=await supabase.rpc('review_team_identity',{p_request:b.dataset.review,p_decision:b.dataset.decision,p_comment:null});if(error)return toast(error.message,'error');toast('บันทึกผลตรวจสอบแล้ว');renderShirtSummary()})
    if(canManageTeamStaff) renderTeamMembershipAdmin(el,event,colors||[],{isAdmin,myTeamMemberships:myTeamMemberships||[]})
  }catch(e){console.error(e);el.innerHTML=missing()}
}

async function renderTeamMembershipAdmin(root,event,colors=[],access={isAdmin:false,myTeamMemberships:[]}) {
  const slot=root.querySelector('#sports-team-membership-admin'); if(!slot)return
  const roleLabels={lead_teacher:'หัวหน้าครูประจำสี',teacher:'ครูประจำสี',staff_lead:'หัวหน้านักเรียนสต๊าฟสี',staff:'นักเรียนสต๊าฟสี'}
  const permLabels={members:'สมาชิก',registrations:'ลงทะเบียนกีฬา',announcements:'ประกาศ',tasks:'งานของสี',shirt_summary:'สรุปเสื้อ'}
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
      <div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ผู้ได้รับสิทธิ์</th><th>สี</th><th>บทบาท</th><th>สิทธิ์</th><th></th></tr></thead><tbody>${visibleMemberships.map(m=>{const person=m.teachers?.full_name?`${m.teachers.full_name}${m.teachers.teacher_code?` (${m.teachers.teacher_code})`:''}`:`${m.students?.student_code||''} ${m.students?.full_name||''} ${m.students?.main_room?`· ${m.students.main_room}`:''}`;const perms=Object.entries(m.permissions||{}).filter(([,v])=>v).map(([k])=>permLabels[k]||k).join(', ')||'ไม่มีสิทธิ์ย่อย';const canRemove=access.isAdmin||(m.student_id&&['staff_lead','staff'].includes(m.role));return `<tr class="border-t"><td class="p-3 font-medium">${esc(person||'ไม่พบชื่อ')}</td><td class="p-3"><span class="font-bold" style="color:${esc(m.team_colors?.hex_color||'#334155')}">สี${esc(m.team_colors?.name||'—')}</span></td><td class="p-3">${esc(roleLabels[m.role]||m.role)}</td><td class="p-3 text-xs text-gray-500">${esc(perms)}</td><td class="p-3 text-right">${canRemove?`<button data-team-member-remove="${esc(m.id)}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button>`:'<span class="text-xs text-gray-300">ล็อกโดยแอดมิน</span>'}</td></tr>`}).join('')||'<tr><td colspan="5" class="p-6 text-center text-gray-400">ยังไม่มีผู้ได้รับสิทธิ์ประจำสี</td></tr>'}</tbody></table></div>`
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
    slot.querySelectorAll('[data-team-member-remove]').forEach(b=>b.addEventListener('click',async()=>{const {error}=await supabase.from('sports_team_memberships').update({is_active:false,ends_at:new Date().toISOString()}).eq('id',b.dataset.teamMemberRemove);if(error)return toast(error.message,'error');toast('ปิดสิทธิ์แล้ว');renderTeamMembershipAdmin(root,event,colors,access)}))
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
    const {data:myVoteManager}=await supabase.from('sports_shirt_vote_managers').select('id').eq('event_id',event.id).eq('profile_id',user.id).maybeSingle()
    if(!isAdmin&&!myVoteManager){el.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}
    const [{data:designs,error},{data:allVotes}] = await Promise.all([
      supabase.from('sports_shirt_designs').select('*,sports_shirt_design_colors(*)').eq('event_id',event.id).eq('gender',gender).order('design_no'),
      supabase.from('sports_shirt_votes').select('design_id').eq('event_id',event.id),
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
  try { const {data:{user}}=await supabase.auth.getUser(); const {data:members,error}=await supabase.from('sports_team_memberships').select('*,team_colors(*)').eq('profile_id',user.id).eq('is_active',true);if(error)throw error;const m=members?.[0];if(!m){wrap.innerHTML='<button class="absolute right-4 top-4" data-close>✕</button><div class="py-24 text-center">ยังไม่ได้รับแต่งตั้งให้ดูแลคณะสี</div>';wrap.querySelector('[data-close]').onclick=()=>wrap.remove();return}const c=m.team_colors;
    const safe=async p=>{const {data,error}=await p;if(error){console.warn(error);return []}return data||[]}
    const perms=m.permissions||{}, isLead=m.role==='lead_teacher', canMembers=perms.members!==false, canReg=perms.registrations!==false, canTasks=perms.tasks!==false, canAnn=perms.announcements!==false, canShirt=perms.shirt_summary!==false
    const theme=localStorage.getItem('sports_team_theme')||'dark'; wrap.dataset.theme=theme
    const [{event,cfg},{data:pub},{data:spEvent}] = await Promise.all([context(),supabase.from('settings').select('value').eq('key','public_buttons').maybeSingle(),supabase.from('sports_events').select('*').eq('status','active').order('academic_year',{ascending:false}).limit(1).maybeSingle()])
    const publicButtons=pub?.value&&typeof pub.value==='object'?pub.value:{}
    const [membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions] = await Promise.all([
      safe(supabase.from('students').select('id,student_code,full_name,main_room,house_color,sports_shirt_size,image_url,photo_url').eq('is_active',true).or(`team_color_id.eq.${c.id},house_color.eq.${c.name}`).order('main_room').order('student_code')),
      safe(supabase.from('sports_team_tasks').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false})),
      safe(supabase.from('sports_team_announcements').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false})),
      safe(supabase.from('sports_team_identity_requests').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false}).limit(10)),
      spEvent?.id?safe(supabase.from('sports_registrations').select('*,students(id,student_code,full_name,main_room,house_color,sports_shirt_size,image_url),sports_competitions(id,code,name,category)').eq('event_id',spEvent.id).eq('team_color',c.name).order('registered_at',{ascending:false})):Promise.resolve([]),
      spEvent?.id?safe(supabase.from('sports_matches').select('*,sports_competitions(id,code,name,category)').eq('event_id',spEvent.id).or(`team_a_color.eq.${c.name},team_b_color.eq.${c.name}`).order('scheduled_date',{ascending:true}).order('scheduled_time',{ascending:true})):Promise.resolve([]),
      spEvent?.id?safe(supabase.from('sports_color_totals').select('*').eq('event_id',spEvent.id)):Promise.resolve([]),
      canShirt?safe(supabase.from('sports_shirt_requests').select('status,requested_size,confirmed_size,students(id,full_name,student_code,main_room,house_color)').eq('event_id',event.id)):Promise.resolve([]),
      spEvent?.id?safe(supabase.from('sports_competitions').select('id,code,name,category,gender,venue').eq('event_id',spEvent.id).order('display_order').order('name')):Promise.resolve([]),
    ])
    const myTotal=totals.find(x=>x.color_name===c.name)||{}
    const rankedByScore=[...totals].sort((a,b)=>(Number(b.grand_total)||0)-(Number(a.grand_total)||0))
    const rankedByMedals=[...totals].sort((a,b)=>(Number(b.gold_count)||0)-(Number(a.gold_count)||0)||(Number(b.silver_count)||0)-(Number(a.silver_count)||0)||(Number(b.bronze_count)||0)-(Number(a.bronze_count)||0))
    const scoreRank=rankedByScore.findIndex(x=>x.color_name===c.name)+1||'—', medalRank=rankedByMedals.findIndex(x=>x.color_name===c.name)+1||'—'
    const pendingTasks=tasks.filter(x=>x.status!=='done').length, doneMatches=matches.filter(x=>x.status==='done').length
    const tabState={active:'overview'}
    const tabList=[
      ['overview','ภาพรวม','🏠',true],
      ['members','สมาชิก','👥',canMembers],
      ['athletes','นักกีฬา','🏃',canReg],
      ['permissions','สิทธิ์ประจำสี','🛡️',isLead],
      ['shirts','ไซซ์เสื้อ','👕',canShirt],
      ['work','งาน/ประกาศ','📋',canTasks||canAnn],
      ['schedule','ตาราง/ผล','🗓️',true],
      ['scores','คะแนน/เหรียญ','🏅',true],
      ['identity','อัตลักษณ์','🎨',true],
    ].filter(x=>x[3])
    wrap.innerHTML=`<style>
      #my-team-workspace[data-theme="dark"]{background:#020617;color:#f8fafc}
      #my-team-workspace[data-theme="light"]{background:#f8fafc;color:#0f172a}
      #my-team-workspace[data-theme="dark"] .team-head{background:rgba(2,6,23,.94);border-color:#1e293b}
      #my-team-workspace[data-theme="light"] .team-head{background:rgba(255,255,255,.95);border-color:#e2e8f0}
      #my-team-workspace[data-theme="dark"] .team-tabs{background:rgba(15,23,42,.88);border-color:#1e293b}
      #my-team-workspace[data-theme="light"] .team-tabs{background:rgba(255,255,255,.92);border-color:#e2e8f0}
      #my-team-workspace[data-theme="dark"] .team-card{background:#0f172a;border-color:#1e293b}
      #my-team-workspace[data-theme="light"] .team-card{background:#fff;border-color:#e2e8f0}
      #my-team-workspace[data-theme="dark"] .team-sub{background:#1e293b}
      #my-team-workspace[data-theme="light"] .team-sub{background:#f1f5f9}
      #my-team-workspace[data-theme="dark"] .muted{color:#94a3b8}
      #my-team-workspace[data-theme="light"] .muted{color:#64748b}
      #my-team-workspace[data-theme="dark"] .line{border-color:#1e293b}
      #my-team-workspace[data-theme="light"] .line{border-color:#e2e8f0}
      .team-tab-active{background:#db2777;color:white;border-color:#db2777}
      #team-tab-body{height:calc(100vh - 180px);overflow:auto}
    </style><header class="team-head border-b px-4 py-3 flex items-center gap-3"><div class="flex items-center gap-3 flex-1">${c.logo_url?`<img src="${esc(c.logo_url)}" class="w-11 h-11 rounded-full object-cover">`:''}<div><b>จัดการทีมสี${esc(c.name)}</b><p class="text-xs muted">${esc(roleLabel(m.role))} · เห็นเฉพาะข้อมูลสีตัวเอง</p></div></div><button data-theme-toggle class="px-3 py-2 border line rounded-xl text-sm">${theme==='dark'?'☀️ โหมดสว่าง':'🌙 โหมดมืด'}</button><button data-full class="px-3 py-2 bg-pink-600 text-white rounded-xl">AZIZGAMES</button><button data-close class="w-10 h-10 border line rounded-xl">✕</button></header><nav class="team-tabs border-b px-4 py-3 overflow-x-auto whitespace-nowrap">${tabList.map(t=>`<button data-team-tab="${t[0]}" class="mr-2 px-4 py-2 rounded-xl border line text-sm font-bold ${t[0]===tabState.active?'team-tab-active':''}">${t[2]} ${esc(t[1])}</button>`).join('')}</nav><main id="team-tab-body" class="max-w-7xl mx-auto p-4 md:p-6"></main>`
    const data={m,c,event,cfg,publicButtons,membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions,myTotal,scoreRank,medalRank,pendingTasks,doneMatches,canMembers,canReg,canTasks,canAnn,canShirt,isLead,theme}
    const drawTab=()=>renderTeamWorkspaceTab(wrap,tabState.active,data)
    wrap.querySelector('[data-close]').onclick=()=>wrap.remove();wrap.querySelectorAll('[data-full]').forEach(b=>b.onclick=()=>openAzizGamesModal())
    wrap.querySelectorAll('[data-team-tab]').forEach(b=>b.onclick=()=>{tabState.active=b.dataset.teamTab;wrap.querySelectorAll('[data-team-tab]').forEach(x=>x.classList.toggle('team-tab-active',x.dataset.teamTab===tabState.active));drawTab()})
    wrap.querySelector('[data-theme-toggle]').onclick=()=>{const next=wrap.dataset.theme==='dark'?'light':'dark';wrap.dataset.theme=next;localStorage.setItem('sports_team_theme',next);wrap.querySelector('[data-theme-toggle]').textContent=next==='dark'?'☀️ โหมดสว่าง':'🌙 โหมดมืด'}
    drawTab()
    if(m.role==='lead_teacher') identity?.filter(x=>x.status==='pending_lead'&&x.submitted_by!==m.profile_id).forEach(x=>{const bar=document.createElement('div');bar.className='fixed bottom-4 right-4 z-30 bg-slate-800 border border-amber-500 rounded-xl p-3 shadow-xl';bar.innerHTML=`<p class="text-sm mb-2">คำขอแก้อัตลักษณ์รอหัวหน้าครูตรวจสอบ</p><button data-no class="px-3 py-1 border border-red-400 text-red-300 rounded-lg mr-2">ปฏิเสธ</button><button data-yes class="px-3 py-1 bg-emerald-600 rounded-lg">อนุมัติส่งแอดมิน</button>`;wrap.appendChild(bar);const review=async decision=>{const {error}=await supabase.rpc('review_team_identity',{p_request:x.id,p_decision:decision,p_comment:null});if(error)return toast(error.message,'error');toast('บันทึกผลตรวจสอบแล้ว');openMyTeamWorkspace()};bar.querySelector('[data-yes]').onclick=()=>review('approve');bar.querySelector('[data-no]').onclick=()=>review('reject')})
  } catch(e){console.error(e);wrap.innerHTML=`<button class="absolute right-4 top-4" onclick="this.parentElement.remove()">✕</button>${missing()}`}
}

const roleLabel = role => ({lead_teacher:'พ่อสี/แม่สี (หัวหน้าครูประจำสี)',teacher:'ครูประจำสี',staff_lead:'หัวหน้านักเรียนสต๊าฟ',staff:'นักเรียนสต๊าฟ'}[role]||role)
const permPill = (label,on) => `<div class="rounded-xl px-3 py-2 text-xs font-bold ${on?'bg-emerald-500/15 text-emerald-300':'bg-slate-500/15 text-slate-400'}">${on?'เปิดให้ใช้':'ไม่เปิดให้ใช้'} · ${esc(label)}</div>`
const memberCard = s => `<div class="team-sub rounded-xl p-3 flex items-center gap-3">${(s.image_url||s.photo_url)?`<img src="${esc(s.image_url||s.photo_url)}" class="w-10 h-10 rounded-full object-cover">`:''}<div><b class="text-sm">${esc(s.full_name)}</b><p class="text-xs muted">${esc(s.student_code)} · ${esc(s.main_room)} · เสื้อ ${esc(s.sports_shirt_size||'—')}</p></div></div>`
function renderTeamWorkspaceTab(wrap,tab,data){
  const body=wrap.querySelector('#team-tab-body'), {m,c,event,cfg,publicButtons,membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions,myTotal,scoreRank,medalRank,pendingTasks,doneMatches,canMembers,canReg,canTasks,canAnn,canShirt,isLead}=data
  const card='team-card rounded-2xl p-5 border', sub='team-sub rounded-xl p-3'
  if(tab==='overview') body.innerHTML=`<div class="space-y-5"><section class="rounded-3xl p-6 text-white overflow-hidden" style="background:linear-gradient(135deg,${esc(c.hex_color)},#111827)"><div class="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 text-center"><div><b class="text-3xl">${membersList.length}</b><p class="text-xs">สมาชิก</p></div><div><b class="text-3xl">${regs.length}</b><p class="text-xs">นักกีฬา</p></div><div><b class="text-3xl">${pendingTasks}</b><p class="text-xs">งานค้าง</p></div><div><b class="text-3xl">${doneMatches}/${matches.length}</b><p class="text-xs">แข่งแล้ว</p></div><div><b class="text-3xl">#${scoreRank}</b><p class="text-xs">อันดับคะแนน</p></div><div><b class="text-3xl">#${medalRank}</b><p class="text-xs">อันดับเหรียญ</p></div></div></section><section class="${card}"><h2 class="font-bold mb-3">🧭 สิทธิ์และเมนูของบทบาทนี้</h2><div class="grid md:grid-cols-5 gap-2">${permPill('สมาชิก',canMembers)}${permPill('ลงทะเบียนนักกีฬา',canReg)}${permPill('ประกาศ',canAnn)}${permPill('งานของสี',canTasks)}${permPill('สรุปเสื้อเฉพาะสี',canShirt)}</div></section></div>`
  else if(tab==='members') body.innerHTML=`<section class="${card}"><div class="flex flex-wrap justify-between gap-3 mb-4"><div><h2 class="font-bold">👥 รายชื่อสมาชิกในสี</h2><p class="text-xs muted">รายชื่อนักเรียนสี${esc(c.name)} ทั้งหมด</p></div>${publicButtons.athlete_print!==false?`<button data-print-members class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">🖨️ พิมพ์/บันทึกใบรายชื่อสมาชิก</button>`:''}</div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">${membersList.map(s=>memberCard(s)).join('')||'<p class="text-sm muted">ยังไม่มีสมาชิก</p>'}</div></section>`
  else if(tab==='athletes') body.innerHTML=`<section class="${card}"><div class="flex flex-wrap justify-between gap-3 mb-4"><div><h2 class="font-bold">🏃 นักกีฬาในสี</h2><p class="text-xs muted">แสดงเฉพาะนักกีฬาของสี${esc(c.name)} จากระบบกีฬาสีหลัก</p></div><div class="flex flex-wrap gap-2">${publicButtons.athlete_print!==false?`<button data-print-athletes class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">🖨️ พิมพ์/บันทึกใบรายชื่อนักกีฬา</button>`:''}${publicButtons.athlete_registration?`<button data-full class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">ลงทะเบียนนักกีฬา</button>`:''}</div></div><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2 text-left">นักเรียน</th><th class="p-2 text-left">รายการ</th><th class="p-2">เบอร์</th><th class="p-2 text-left">เวลา</th></tr></thead><tbody>${regs.map(r=>`<tr class="border-b line"><td class="p-2"><b>${esc(r.students?.full_name||'—')}</b><p class="text-xs muted">${esc(r.students?.student_code||'')} · ${esc(r.students?.main_room||'')}</p></td><td class="p-2">${esc(r.sports_competitions?.name||'—')}</td><td class="p-2 text-center">${esc(r.jersey_number||'—')}</td><td class="p-2 muted text-xs">${esc(r.registered_at?new Date(r.registered_at).toLocaleString('th-TH'):'—')}</td></tr>`).join('')||'<tr><td colspan="4" class="p-8 text-center muted">ยังไม่มีนักกีฬา</td></tr>'}</tbody></table></div></section>`
  else if(tab==='permissions') body.innerHTML=`<section id="sports-team-membership-admin" class="${card}"><div class="py-8 text-center muted">กำลังโหลดหน้ามอบหมายสิทธิ์ประจำสี...</div></section>`
  else if(tab==='shirts') body.innerHTML=shirtSection(c,shirtReqs,cfg)
  else if(tab==='work') body.innerHTML=`<div class="grid xl:grid-cols-2 gap-5">${canTasks?`<section class="${card}"><h2 class="font-bold mb-3">📋 งานของสี</h2>${tasks.map(t=>`<div class="${sub} mb-2"><b>${esc(t.title)}</b><span class="float-right text-xs text-cyan-400">${esc(t.status)}</span><p class="text-xs muted">${esc(t.detail||'')}</p></div>`).join('')||'<p class="text-sm muted">ยังไม่มีงาน</p>'}</section>`:''}${canAnn?`<section class="${card}"><h2 class="font-bold mb-3">📢 ประกาศ</h2>${anns.map(a=>`<div class="${sub} mb-2"><b>${esc(a.title)}</b><p class="text-sm muted">${esc(a.body)}</p></div>`).join('')||'<p class="text-sm muted">ยังไม่มีประกาศ</p>'}</section>`:''}</div>`
  else if(tab==='schedule') body.innerHTML=`<section class="${card}">${trackingMatchesOnly(matches,c.name)}</section>`
  else if(tab==='scores') body.innerHTML=scoreMedalSection(totals,c.name,myTotal,scoreRank,medalRank)
  else if(tab==='identity') body.innerHTML=`<section class="${card}"><div class="flex flex-wrap justify-between gap-3 mb-3"><div><h2 class="font-bold">🎨 เสนอแก้อัตลักษณ์ประจำสี</h2><p class="text-xs muted">โลโก้/ชื่อ/คำขวัญใช้ชุดเดียวกับระบบกีฬาสีหลัก และต้องผ่านหัวหน้าครูประจำสี + แอดมิน</p></div><button id="identity-new" class="px-4 py-2 bg-violet-600 text-white rounded-xl">สร้างคำขอ</button></div><div class="space-y-2">${identity.map(x=>`<div class="${sub} flex justify-between gap-3"><span>${esc(x.proposed_name||'แก้ไขอัตลักษณ์/โลโก้')}</span><span class="text-xs text-amber-400">${esc(x.status)}</span></div>`).join('')||'<p class="text-sm muted">ยังไม่มีคำขอ</p>'}</div></section>`
  body.querySelectorAll('[data-full]').forEach(b=>b.onclick=()=>openAzizGamesModal())
  body.querySelector('#identity-new')?.addEventListener('click',()=>identityForm(wrap,m,c))
  body.querySelector('[data-print-members]')?.addEventListener('click',()=>printTeamList(`ใบรายชื่อสมาชิกสี${c.name}`,c,membersList.map(s=>({name:s.full_name,code:s.student_code,room:s.main_room,detail:`เสื้อ ${s.sports_shirt_size||'—'}`})),{mode:'table'}))
  body.querySelector('[data-print-athletes]')?.addEventListener('click',()=>openAthletePrintDialog(wrap,c,regs,competitions))
  if(tab==='permissions'&&isLead) renderTeamMembershipAdmin(wrap,event,[c],{isAdmin:false,myTeamMemberships:[m]})
}
function shirtSection(c, reqs, cfg) {
  const sizes=cfg?.allowed_sizes||['S','M','L','XL','2XL','3XL']; const rows=(reqs||[]).filter(r=>r.students?.house_color===c.name); const confirmed=rows.filter(r=>['confirmed','advisor_updated'].includes(r.status))
  return `<section class="team-card rounded-2xl p-5 border"><div class="flex flex-wrap justify-between gap-3 mb-3"><div><h2 class="font-bold">👕 ข้อมูลไซซ์เสื้อเฉพาะสี${esc(c.name)}</h2><p class="text-xs muted">ไม่แสดงยอดทุกสีแบบแอดมิน เห็นเฉพาะสีของตัวเอง</p></div><div class="text-sm muted">ยืนยันแล้ว ${confirmed.length}/${rows.length}</div></div><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2 text-left">ไซซ์</th>${sizes.map(s=>`<th class="p-2">${esc(s)}</th>`).join('')}<th class="p-2">รวม</th></tr></thead><tbody><tr><td class="p-2 font-bold">ยืนยันแล้ว</td>${sizes.map(s=>`<td class="p-2 text-center">${confirmed.filter(r=>r.confirmed_size===s).length}</td>`).join('')}<td class="p-2 text-center font-bold">${confirmed.length}</td></tr><tr class="border-t line"><td class="p-2 font-bold">รอยืนยัน</td>${sizes.map(s=>`<td class="p-2 text-center">${rows.filter(r=>r.status==='pending'&&r.requested_size===s).length}</td>`).join('')}<td class="p-2 text-center font-bold">${rows.filter(r=>r.status==='pending').length}</td></tr></tbody></table></div></section>`
}
function trackingSection(matches, totals, colorName, myTotal, scoreRank, medalRank) {
  const done=matches.filter(m=>m.status==='done'), upcoming=matches.filter(m=>m.status!=='done')
  return `<section class="team-card rounded-2xl p-5 border"><div class="flex flex-wrap justify-between gap-3 mb-4"><div><h2 class="font-bold">📊 ติดตามการแข่งขัน คะแนน และเหรียญ</h2><p class="text-xs muted">ข้อมูลอ่านจากตารางเดียวกับระบบกีฬาสีหลัก</p></div><div class="flex gap-2 text-xs"><span class="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300">อันดับสี #${scoreRank}</span><span class="px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-300">อันดับเหรียญ #${medalRank}</span></div></div><div class="grid md:grid-cols-5 gap-2 mb-4">${[['คะแนนรวม',myTotal.grand_total||0],['คะแนนกรรมการ',myTotal.rubric_points||0],['🥇 ทอง',myTotal.gold_count||0],['🥈 เงิน',myTotal.silver_count||0],['🥉 ทองแดง',myTotal.bronze_count||0]].map(([l,v])=>`<div class="team-sub rounded-xl p-3"><p class="text-xs muted">${l}</p><b class="text-2xl">${Number(v).toLocaleString()}</b></div>`).join('')}</div><div class="grid xl:grid-cols-2 gap-4"><div><h3 class="font-bold mb-2">🗓️ ตาราง/ติดตามการแข่งขันของสี${esc(colorName)}</h3><div class="space-y-2">${upcoming.slice(0,12).map(m=>matchRow(m)).join('')||'<p class="text-sm muted">ยังไม่มีตารางที่รอแข่งขัน</p>'}</div></div><div><h3 class="font-bold mb-2">✅ ผลการแข่งขันล่าสุด</h3><div class="space-y-2">${done.slice(0,12).map(m=>matchRow(m)).join('')||'<p class="text-sm muted">ยังไม่มีผลการแข่งขัน</p>'}</div></div></div></section>`
}
function matchRow(m){return `<div class="team-sub rounded-xl p-3"><div class="flex justify-between gap-3"><b>${esc(m.sports_competitions?.name||'รายการแข่งขัน')}</b><span class="text-xs muted">${esc(m.status||'pending')}</span></div><p class="text-xs muted">${esc(m.scheduled_date||'ยังไม่ระบุวัน')} ${esc(m.scheduled_time?String(m.scheduled_time).slice(0,5):'')} · สี${esc(m.team_a_color||'—')} พบ สี${esc(m.team_b_color||'—')} · ผล ${esc(m.score_a||'—')} : ${esc(m.score_b||'—')}</p></div>`}
function trackingMatchesOnly(matches,colorName){
  const done=matches.filter(m=>m.status==='done'), upcoming=matches.filter(m=>m.status!=='done')
  return `<div class="grid xl:grid-cols-2 gap-4"><div><h2 class="font-bold mb-3">🗓️ ตาราง/ติดตามการแข่งขันของสี${esc(colorName)}</h2><div class="space-y-2">${upcoming.map(m=>matchRow(m)).join('')||'<p class="text-sm muted">ยังไม่มีตารางที่รอแข่งขัน</p>'}</div></div><div><h2 class="font-bold mb-3">✅ ผลการแข่งขันล่าสุด</h2><div class="space-y-2">${done.map(m=>matchRow(m)).join('')||'<p class="text-sm muted">ยังไม่มีผลการแข่งขัน</p>'}</div></div></div>`
}
function scoreMedalSection(totals,colorName,myTotal,scoreRank,medalRank){
  const ranked=[...totals].sort((a,b)=>(Number(b.grand_total)||0)-(Number(a.grand_total)||0))
  return `<section class="team-card rounded-2xl p-5 border"><div class="flex flex-wrap justify-between gap-3 mb-4"><div><h2 class="font-bold">🏅 คะแนนรวมและเหรียญ</h2><p class="text-xs muted">สรุปเฉพาะสี${esc(colorName)} พร้อมเปรียบเทียบอันดับรวม</p></div><div class="flex gap-2 text-xs"><span class="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300">อันดับสี #${scoreRank}</span><span class="px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-300">อันดับเหรียญ #${medalRank}</span></div></div><div class="grid md:grid-cols-5 gap-2 mb-5">${[['คะแนนรวม',myTotal.grand_total||0],['คะแนนกรรมการ',myTotal.rubric_points||0],['🥇 ทอง',myTotal.gold_count||0],['🥈 เงิน',myTotal.silver_count||0],['🥉 ทองแดง',myTotal.bronze_count||0]].map(([l,v])=>`<div class="team-sub rounded-xl p-3"><p class="text-xs muted">${l}</p><b class="text-2xl">${Number(v).toLocaleString()}</b></div>`).join('')}</div><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2">อันดับ</th><th class="p-2 text-left">สี</th><th class="p-2">คะแนนรวม</th><th class="p-2">ทอง</th><th class="p-2">เงิน</th><th class="p-2">ทองแดง</th></tr></thead><tbody>${ranked.map((r,i)=>`<tr class="border-b line ${r.color_name===colorName?'bg-pink-500/10':''}"><td class="p-2 text-center font-bold">${i+1}</td><td class="p-2 font-bold">สี${esc(r.color_name)}</td><td class="p-2 text-center">${Number(r.grand_total||0).toLocaleString()}</td><td class="p-2 text-center">${r.gold_count||0}</td><td class="p-2 text-center">${r.silver_count||0}</td><td class="p-2 text-center">${r.bronze_count||0}</td></tr>`).join('')||'<tr><td colspan="6" class="p-8 text-center muted">ยังไม่มีคะแนน</td></tr>'}</tbody></table></div></section>`
}
function openAthletePrintDialog(wrap,c,regs,competitions){
  const modal=document.createElement('div');modal.className='fixed inset-0 bg-black/70 grid place-items-center p-4';modal.style.zIndex='430'
  const compIds=[...new Set(regs.map(r=>r.competition_id).filter(Boolean).map(String))]
  const comps=competitions.filter(x=>compIds.includes(String(x.id)))
  modal.innerHTML=`<div class="team-card border rounded-3xl w-full max-w-2xl p-5 shadow-2xl"><div class="flex items-center justify-between gap-3 mb-4"><div><h2 class="text-lg font-bold">🖨️ พิมพ์บัญชีนักกีฬา สี${esc(c.name)}</h2><p class="text-xs muted">เลือกรายการกีฬาและรูปแบบใบรายชื่อก่อนสร้างเอกสาร</p></div><button data-close-print class="w-10 h-10 rounded-xl border line">✕</button></div><div class="space-y-4"><div><label class="text-xs font-bold muted">เลือกรายการกีฬา</label><select id="ath-print-comp" class="mt-1 w-full rounded-xl bg-slate-950/40 border line px-3 py-3"><option value="all">-- ทุกประเภทกีฬาที่สีนี้ลงทะเบียน --</option>${comps.map(x=>`<option value="${x.id}">${esc(x.name)}${x.code?` (${esc(x.code)})`:''}</option>`).join('')}</select></div><div><label class="text-xs font-bold muted">เลือกรูปแบบเอกสารพิมพ์</label><div class="grid sm:grid-cols-2 gap-2 mt-2"><button data-ath-format="table" class="ath-format team-tab-active rounded-xl border line px-4 py-3 text-left"><b>📋 แบบตารางรายชื่อ</b><p class="text-xs opacity-80">เหมาะสำหรับเซ็นชื่อ/ตรวจสอบ</p></button><button data-ath-format="cards" class="ath-format rounded-xl border line px-4 py-3 text-left"><b>🖼️ แบบการ์ดรูปภาพ</b><p class="text-xs opacity-80">เหมาะสำหรับตรวจตัวนักกีฬา</p></button></div></div><button data-ath-print-confirm class="w-full py-3 rounded-xl bg-pink-600 text-white font-bold">สร้างเอกสาร / พิมพ์</button></div></div>`
  wrap.appendChild(modal)
  let format='table'
  modal.querySelector('[data-close-print]').onclick=()=>modal.remove()
  modal.querySelectorAll('[data-ath-format]').forEach(b=>b.onclick=()=>{format=b.dataset.athFormat;modal.querySelectorAll('[data-ath-format]').forEach(x=>x.classList.toggle('team-tab-active',x.dataset.athFormat===format))})
  modal.querySelector('[data-ath-print-confirm]').onclick=()=>{const comp=modal.querySelector('#ath-print-comp').value;const rows=regs.filter(r=>comp==='all'||String(r.competition_id)===String(comp)).map(r=>({name:r.students?.full_name,code:r.students?.student_code,room:r.students?.main_room,detail:r.sports_competitions?.name||'—',extra:r.jersey_number?`เบอร์ ${r.jersey_number}`:'',photo:r.students?.image_url}));const label=comp==='all'?'ทุกประเภทกีฬา':(comps.find(x=>String(x.id)===String(comp))?.name||'รายการกีฬา');modal.remove();printTeamList(`บัญชีนักกีฬาสี${c.name} · ${label}`,c,rows,{mode:format})}
}
function printTeamList(title,c,rows,{mode='table'}={}){
  const cards=rows.map((r,i)=>`<div class="print-card"><div class="print-photo">${r.photo?`<img src="${esc(r.photo)}">`:i+1}</div><div><b>${esc(r.name)}</b><p>${esc(r.code)} · ${esc(r.room)}</p><p>${esc(r.detail)} ${esc(r.extra||'')}</p></div></div>`).join('')
  const table=`<table class="print-table"><thead><tr><th>#</th><th>รหัส</th><th>ชื่อ - สกุล</th><th>ชั้น</th><th>รายละเอียด</th><th>หมายเหตุ</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(r.code)}</td><td>${esc(r.name)}</td><td>${esc(r.room)}</td><td>${esc(r.detail)}</td><td>${esc(r.extra||'')}</td></tr>`).join('')}</tbody></table>`
  const area=document.createElement('div');area.id='team-print-area';area.innerHTML=`<style>@media print{body>*:not(#team-print-area){display:none!important}.print-actions{display:none!important}#team-print-area{position:static!important;padding:0!important}}#team-print-area{position:fixed;inset:0;z-index:9999;background:white;color:#111827;overflow:auto;padding:24px;font-family:Sarabun,Arial,sans-serif}.print-actions{position:sticky;top:0;background:white;padding-bottom:12px;text-align:right}.print-table{width:100%;border-collapse:collapse}.print-table th,.print-table td{border:1px solid #111827;padding:6px 8px;font-size:12px}.print-table th{background:#f3f4f6}.print-title{text-align:center;margin:8px 0 16px}.print-logos{display:flex;justify-content:center;gap:8px;margin-top:4px}.print-logo{width:54px;height:54px;border-radius:999px;object-fit:cover}.print-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.print-card{border:1px solid #111827;border-radius:12px;padding:10px;display:flex;gap:10px;align-items:center;min-height:88px}.print-photo{width:56px;height:64px;border:1px solid #9ca3af;border-radius:8px;display:grid;place-items:center;font-weight:bold;overflow:hidden}.print-photo img{width:100%;height:100%;object-fit:cover}</style><div class="print-actions"><button id="team-print-confirm" style="padding:8px 14px;background:#111827;color:white;border-radius:10px">🖨️ สั่งพิมพ์ / บันทึก PDF</button> <button id="team-print-close" style="padding:8px 14px;border:1px solid #d1d5db;border-radius:10px">ปิด</button></div><div class="print-logos">${c.logo_url?`<img src="${esc(c.logo_url)}" class="print-logo">`:''}</div><div class="print-title"><h2>${esc(title)}</h2><p>กิจกรรมกีฬาสีภายใน · พิมพ์ ${new Date().toLocaleDateString('th-TH')}</p></div>${mode==='cards'?`<div class="print-grid">${cards}</div>`:table}`;document.body.appendChild(area);area.querySelector('#team-print-confirm').onclick=()=>window.print();area.querySelector('#team-print-close').onclick=()=>area.remove()
}

function identityForm(wrap,m,c){const box=document.createElement('div');box.className='fixed inset-0 z-[400] bg-black/70 grid place-items-center p-4';box.innerHTML=`<form class="bg-slate-900 border border-slate-700 rounded-2xl p-5 w-full max-w-lg space-y-3"><h3 class="font-bold">เสนอแก้อัตลักษณ์ทีมสี${esc(c.name)}</h3><input name="logo" placeholder="URL โลโก้ใหม่" class="w-full bg-slate-800 rounded-xl px-3 py-2"><input name="name" placeholder="ชื่อทีมใหม่ (ถ้ามี)" class="w-full bg-slate-800 rounded-xl px-3 py-2"><input name="motto" placeholder="คำขวัญ" class="w-full bg-slate-800 rounded-xl px-3 py-2"><input name="mascot" placeholder="มาสคอต" class="w-full bg-slate-800 rounded-xl px-3 py-2"><div class="flex gap-2"><button type="button" class="flex-1 border border-slate-600 rounded-xl py-2" data-cancel>ยกเลิก</button><button class="flex-1 bg-violet-600 rounded-xl py-2">ส่งตรวจสอบ</button></div></form>`;wrap.appendChild(box);box.querySelector('[data-cancel]').onclick=()=>box.remove();box.querySelector('form').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);const {error}=await supabase.from('sports_team_identity_requests').insert({event_id:m.event_id,team_color_id:c.id,proposed_logo_url:f.get('logo')||null,proposed_name:f.get('name')||null,proposed_motto:f.get('motto')||null,proposed_mascot:f.get('mascot')||null,status:'pending_lead',submitted_at:new Date().toISOString()});if(error)return toast(error.message,'error');box.remove();toast('ส่งให้หัวหน้าครูประจำสีตรวจสอบแล้ว');openMyTeamWorkspace()}}
