import { supabase } from './supabase.js'
import { openAzizGamesModal } from './azizgames-modal.js'
import { openHtmlPrintOverlay } from './print-overlay.js'
import { uploadSystemAsset, uploadShirtDesignColorImage, uploadShirtDesignHtml, uploadGalleryPhoto } from './storage.js'
import { getEffectiveProfileId, getEffectiveUser } from './impersonation.js'
import QRCode from 'qrcode'

export const esc = (v='') => String(v ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))
// ห้ามใช้ new Date().toISOString().slice(0,10) หาวันที่ "วันนี้" — toISOString() คืนวันที่ตาม UTC
// ทำให้ช่วงเที่ยงคืน-ตี 7 เวลาไทย (UTC+7) วันที่จะเพี้ยนไปเป็นเมื่อวาน ต้องใช้ todayLocal() แทนเสมอ
const todayLocal = () => { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` }
const toDatetimeLocalValue = value => {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ''
  const pad=n=>String(n).padStart(2,'0')
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}
const main = () => document.getElementById('stu-content') || document.getElementById('main-content')
const DEFAULT_EVENT = '00000000-0000-0000-0000-000000000001'
// ไซซ์เสื้อกีฬาสี — ตั้งค่าเองได้ที่หน้าสรุปยอดเสื้อ (renderShirtSummary) บันทึกในตาราง settings
// (key='shirt_sizes') ตารางเดียวกับที่ AZIZGAMES (src/context/AppContext.jsx) ใช้ ทำให้ตั้งค่าที่
// ไหนก็ได้ อีกฝั่งเห็นอัตโนมัติ — ค่าเริ่มต้นตรงกับตารางไซซ์จริงจากร้าน (รอบอกอย่างเดียว หน่วยนิ้ว
// ตามที่ผู้ใช้ยืนยัน 2026-08-09 — ไม่ใช้ความยาวตัวแล้ว)
const DEFAULT_SHIRT_SIZES = [
  { code: 'SS', chest: 34 }, { code: 'S', chest: 36 }, { code: 'M', chest: 38 },
  { code: 'L', chest: 40 }, { code: 'XL', chest: 42 }, { code: '2X', chest: 44 },
  { code: '3X', chest: 46 }, { code: '4X', chest: 48 }, { code: '5X', chest: 50 },
  { code: '6X', chest: 52 }, { code: '7X', chest: 54 }, { code: '8X', chest: 56 },
]
// ไซซ์เริ่มต้นขั้นต่ำแยก ม.ต้น (ม.1-3) / ม.ปลาย+ปวช (ม.4-6, ปวช.1-3) — ตั้งค่าได้ที่หน้าสรุปยอดเสื้อ
// (cfg.shirt_size_min_junior / cfg.shirt_size_min_senior เก็บเป็น "code" เช่น 'M') ไซซ์ที่เล็กกว่านั้น
// จะถูกซ่อนออกจากดรอปดาวน์ของกลุ่มนั้น — ใช้กรองเฉพาะจุดที่นักเรียนคนเดียวเลือกไซซ์เอง ไม่ใช้กรอง
// ตารางสรุปยอดรวม (ต้องโชว์ข้อมูลจริงครบทุกไซซ์)
const _isHighSchoolOrVoc = room => { const r = String(room || ''); return r.startsWith('ม.4') || r.startsWith('ม.5') || r.startsWith('ม.6') || r.startsWith('ปวช') }
const _isJuniorHigh = room => { const r = String(room || ''); return r.startsWith('ม.1') || r.startsWith('ม.2') || r.startsWith('ม.3') }
function _minSizeCodeForRoom(room, cfg) {
  if (_isJuniorHigh(room)) return cfg?.shirt_size_min_junior || null
  if (_isHighSchoolOrVoc(room)) return cfg?.shirt_size_min_senior || null
  return null
}
function _filterSizesForRoom(sizes, room, cfg) {
  const minCode = _minSizeCodeForRoom(room, cfg)
  if (!minCode) return sizes
  const minSize = sizes.find(s => s.code === minCode)
  if (!minSize) return sizes
  return sizes.filter(s => s.chest >= minSize.chest)
}
// แนะไซซ์จากรอบอกที่นักเรียนกรอก — ปัดขึ้นเสมอ (เลือกไซซ์เล็กที่สุดที่รอบอก >= ที่กรอก ไม่ใช่ไซซ์
// ใกล้เคียงที่สุด) กันไซซ์รัดเกินไป นักเรียนหญิงแนะ 2 ไซซ์ (ตัวที่ปัดขึ้น + ไซซ์ถัดไปอีกไซซ์) ให้เลือก
// เอง เผื่อความสบายใจ/เคลื่อนไหวสะดวก/ผ่านเกณฑ์ฝ่ายปกครอง — ชายแนะไซซ์เดียว
function _recommendSizes(val, sizes, isFemale) {
  const sorted=[...sizes].sort((a,b)=>a.chest-b.chest)
  let idx=sorted.findIndex(s=>s.chest>=val)
  if(idx===-1) idx=sorted.length-1
  const primary=sorted[idx]
  if(!isFemale) return [primary]
  const secondary=sorted[idx+1]||null
  return secondary?[primary,secondary]:[primary]
}
const badge = s => ({pending:'รอยืนยัน',confirmed:'ยืนยันแล้ว',advisor_updated:'ครูเลือก/แก้ไขแทน'}[s] || 'ยังไม่จำนง')
const statusClass = s => s === 'confirmed' || s === 'advisor_updated' ? 'bg-emerald-100 text-emerald-700' : s === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
export const toast = (msg,type='success') => { const e=document.createElement('div');e.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-3 rounded-xl text-white text-sm shadow-xl ${type==='error'?'bg-red-600':'bg-emerald-600'}`;e.textContent=msg;document.body.appendChild(e);setTimeout(()=>e.remove(),3000) }
const missing = () => `<div class="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800"><h3 class="font-bold">ยังไม่ได้ติดตั้งส่วนขยายระบบกีฬาสี</h3><p class="text-sm mt-2">ให้แอดมินรันไฟล์ <code>patch_sports_student_team_portal.sql</code> ใน Supabase SQL Editor</p></div>`
const actionCard = (key,title,help,enabled) => `<div class="rounded-2xl border p-4 ${enabled?'bg-emerald-50 border-emerald-200':'bg-slate-50 border-slate-200'}"><div class="flex items-start justify-between gap-3"><div><h3 class="font-bold text-sm text-slate-800">${esc(title)}</h3><p class="text-xs text-slate-500 mt-1">${esc(help)}</p><span class="inline-block mt-3 px-2 py-1 rounded-full text-[11px] font-bold ${enabled?'bg-emerald-100 text-emerald-700':'bg-slate-200 text-slate-600'}">${enabled?'เปิดใช้งานอยู่':'ปิดใช้งานอยู่'}</span></div><button type="button" data-cfg="${esc(key)}" data-enabled="${enabled?'true':'false'}" class="px-3 py-2 rounded-xl text-xs font-bold ${enabled?'bg-red-50 text-red-700 border border-red-200':'bg-emerald-600 text-white'}">${enabled?'ปิดใช้งาน':'เปิดใช้งาน'}</button></div></div>`
const permissionButton = (key,label,enabled=true) => `<button type="button" data-team-perm="${esc(key)}" data-enabled="${enabled?'true':'false'}" class="px-3 py-2 rounded-xl text-xs font-bold border ${enabled?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-slate-50 text-slate-500 border-slate-200'}">${enabled?'อนุญาต':'ไม่อนุญาต'}: ${esc(label)}</button>`
const _galleryTypeDateLabel = value => {
  if(!value)return ''
  const [y,m,d]=String(value).slice(0,10).split('-').map(Number)
  if(!y||!m||!d)return ''
  return new Date(y,m-1,d).toLocaleDateString('th-TH',{day:'2-digit',month:'2-digit',year:'2-digit'})
}
const _galleryTypeOptionLabel = row => `${row.name}${row.event_date?` (${_galleryTypeDateLabel(row.event_date)})`:''}`
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
  const [{data:event},{data:cfg},{data:sizesRow}] = await Promise.all([
    supabase.from('events').select('*').eq('status','active').order('academic_year',{ascending:false}).limit(1).maybeSingle(),
    supabase.from('sports_portal_settings').select('*').limit(1).maybeSingle(),
    supabase.from('settings').select('value').eq('key','shirt_sizes').maybeSingle(),
  ])
  const shirtSizes = (Array.isArray(sizesRow?.value) && sizesRow.value.length) ? sizesRow.value : DEFAULT_SHIRT_SIZES
  return { event:event || {id:DEFAULT_EVENT,name:'AZIZGAMES'}, cfg, shirtSizes }
}

async function updateShirtSizes(sizes) {
  const { error } = await supabase.from('settings').upsert({ key:'shirt_sizes', value:sizes, updated_at:new Date().toISOString() }, { onConflict:'key' })
  if (error) throw error
}
async function updateTeacherShirtSizes(sizes) {
  const { error } = await supabase.from('settings').upsert({ key:'teacher_shirt_sizes', value:sizes, updated_at:new Date().toISOString() }, { onConflict:'key' })
  if (error) throw error
}

const SPORTS_HOME_TABS = [
  ['overview','🏠','ภาพรวม'],
  ['shirt','👕','เสื้อกีฬาสี'],
  ['compete','🏃','แข่งขัน'],
  ['together','🤝','ร่วมมือ'],
]
const SPORTS_SESSION_TYPE_LABEL = { pre_event:'🏕️ เข้าค่ายสี', event_day:'🏆 วันงานจริง' }

// ไล่ช่วงวันที่ (event_date..end_date) เป็น array วันเดี่ยวๆ ทีละวัน — ใช้คู่กับ work_calendar_events
function _expandCalendarDays(campCalendar) {
  const days=[]
  ;(campCalendar||[]).forEach(ev=>{
    const start=_parseDateOnlyLocal(ev.event_date), end=_parseDateOnlyLocal(ev.end_date||ev.event_date)
    if(!start)return
    for(let d=new Date(start); d<=(end||start); d.setDate(d.getDate()+1)) {
      days.push({date:_dateInputValueLocal(d), label:ev.label})
    }
  })
  return days.sort((a,b)=>a.date<b.date?1:-1)
}
function _parseDateOnlyLocal(s){ if(!s)return null; const [y,m,d]=String(s).slice(0,10).split('-').map(Number); return new Date(y,m-1,d) }
function _dateInputValueLocal(d){ return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` }

export async function renderStudentSportsHome(student, tab='overview') {
  const el=main(); el.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลกีฬาสีของฉัน...</div>'
  try {
    const {event,cfg,shirtSizes}=await context()
    const [{data:color},{data:req},{data:regs},{data:awards},{data:myVote},{data:eligibility},{data:duesStatus},{data:shirtPaymentStatus},{data:fundLedger},{data:attHistory},{data:campCalendar}] = await Promise.all([
      supabase.from('team_colors').select('*').eq('id',student.team_color_id || '').maybeSingle(),
      supabase.from('sports_shirt_requests').select('*').eq('event_id',event.id).eq('student_id',student.id).maybeSingle(),
      supabase.from('registrations').select('id,jersey_number,sports(name,venue)').eq('event_id',event.id).eq('student_id',student.id),
      supabase.from('outstanding_athletes').select('id,note,awarded_at,sports(name)').eq('event_id',event.id).eq('student_id',student.id),
      supabase.from('sports_shirt_votes').select('design_id,sports_shirt_designs(design_no,name,sports_shirt_design_colors(*))').eq('event_id',event.id).eq('student_id',student.id).maybeSingle(),
      supabase.rpc('get_my_sports_eligibility',{p_event:event.id}).then(r=>({data:r.error?null:r.data})).catch(()=>({data:null})),
      supabase.rpc('get_my_sports_dues_status',{p_event:event.id}).then(r=>({data:r.error?null:r.data})).catch(()=>({data:null})),
      supabase.rpc('get_my_sports_shirt_payment_status',{p_event:event.id}).then(r=>({data:r.error?null:r.data})).catch(()=>({data:null})),
      supabase.rpc('get_team_fund_ledger',{p_event:event.id,p_team_color_id:student.team_color_id||null}).then(r=>({data:r.error?{entries:[],dues_total:0}:(r.data||{entries:[],dues_total:0})})).catch(()=>({data:{entries:[],dues_total:0}})),
      supabase.rpc('get_my_sports_attendance_history',{p_event:event.id}).then(r=>({data:r.error?[]:(r.data||[])})).catch(()=>({data:[]})),
      supabase.from('work_calendar_events').select('id,label,event_date,end_date').or('label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%').then(r=>({data:r.error?[]:(r.data||[])})).catch(()=>({data:[]})),
    ])
    const c=color || {name:student.house_color,hex_color:'#64748b',logo_url:null}
    const myVoteColors=(myVote?.sports_shirt_designs?.sports_shirt_design_colors||[]).filter(x=>x.image_url)
    let myVoteColorPtr=Math.max(0,myVoteColors.findIndex(x=>x.color_name===student.house_color))
    const sizes=_filterSizesForRoom(shirtSizes,student.main_room,cfg).map(s=>s.code)
    const open=cfg?.shirt_request_enabled && (!cfg.shirt_request_opens_at || new Date(cfg.shirt_request_opens_at)<=new Date()) && (!cfg.shirt_request_closes_at || new Date(cfg.shirt_request_closes_at)>=new Date())

    const attByDate=Object.fromEntries((attHistory||[]).map(r=>[r.session_date,r]))
    const todayStr=todayLocal()
    const calendarDays=_expandCalendarDays(campCalendar).filter(d=>d.date<=todayStr)
    const attendedCount=calendarDays.filter(d=>attByDate[d.date]).length
    const attendancePct=calendarDays.length ? Math.round(attendedCount/calendarDays.length*100) : null

    const banner=`<section id="sports-home-banner" class="rounded-3xl p-6 text-white shadow-xl overflow-hidden relative cursor-pointer hover:brightness-110 active:scale-[0.99] transition" style="background:linear-gradient(135deg,${esc(c.hex_color)},#111827)" title="คลิกเพื่อดูข้อมูลสีของฉันแบบเต็ม">
        <div class="flex items-center gap-4 relative z-10">${c.logo_url?`<img src="${esc(c.logo_url)}" class="w-20 h-20 rounded-full object-cover bg-white/90 p-1">`:'<div class="w-20 h-20 rounded-full bg-white/20 grid place-items-center text-4xl">🏆</div>'}<div class="flex-1 min-w-0"><p class="text-xs text-white/70">กีฬาสีของฉัน</p><h1 class="text-2xl font-extrabold">ทีมสี${esc(c.name||'—')}</h1><p class="text-sm text-white/80">${esc(student.full_name)} · ${esc(student.main_room)}</p>${c.motto?`<p class="text-xs mt-1">“${esc(c.motto)}”</p>`:''}</div><div class="flex-shrink-0 flex flex-col items-center gap-1 text-white/90"><span class="text-2xl">›</span><span class="text-[10px] font-bold whitespace-nowrap">ดูสีของฉัน</span></div></div>
      </section>`

    let content=''
    if(tab==='shirt') {
      content=`<div class="grid md:grid-cols-2 gap-4">
        <section class="bg-white rounded-2xl border p-5"><div class="flex justify-between"><h2 class="font-bold">👕 ไซซ์เสื้อกีฬาสี</h2><span class="px-2 py-1 rounded-full text-xs ${statusClass(req?.status)}">${badge(req?.status)}</span></div><p class="text-3xl font-black mt-3">${esc(req?.confirmed_size || req?.requested_size || student.sports_shirt_size || '—')}</p><p class="text-xs text-gray-500 mt-1">${req?.confirmed_size?'ไซซ์ที่ครูที่ปรึกษายืนยัน':'ไซซ์ที่จำนง'}</p>${open && !req?.confirmed_size?`<div class="mt-4 space-y-2">
          <label class="block text-xs text-gray-500">เลือกไซซ์จากตาราง — เลือกแล้วจะเห็นตัวอย่างเสื้อทันที</label>
          <select id="stu-shirt-size" class="w-full border rounded-xl px-3 py-2"><option value="">-- เลือกไซซ์ --</option>${sizes.map(x=>{const meta=shirtSizes.find(s=>s.code===x);const label=meta?`${x} (รอบอก ${meta.chest} นิ้ว)`:x;return `<option value="${esc(x)}" ${req?.requested_size===x?'selected':''}>${esc(label)}</option>`}).join('')}</select>
          <label class="block text-xs text-gray-500 mt-3">หรือพิมพ์รอบอกของคุณเอง (นิ้ว) ให้ระบบแนะไซซ์ให้</label>
          <div class="flex gap-2"><input id="stu-shirt-chest-input" type="number" min="0" placeholder="เช่น 39" class="flex-1 border rounded-xl px-3 py-2"><button id="stu-shirt-chest-go" class="px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold whitespace-nowrap">ดูไซซ์ที่แนะนำ</button></div>
        </div>`:`<p class="text-xs mt-4 text-gray-400">${open?'ข้อมูลได้รับการยืนยันแล้ว':'ขณะนี้ยังไม่เปิดรับจำนงไซซ์เสื้อ'}</p>`}</section>
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
      <section class="bg-white rounded-2xl border p-5"><div class="flex justify-between items-start gap-3"><h2 class="font-bold">👕 ค่าเสื้อกีฬาสี</h2><span class="px-2 py-1 rounded-full text-xs font-bold ${shirtPaymentStatus?.paid?'bg-emerald-100 text-emerald-700':Number(shirtPaymentStatus?.amount||0)>0?'bg-red-100 text-red-700':'bg-amber-100 text-amber-700'}">${shirtPaymentStatus?.paid?'ชำระแล้ว':Number(shirtPaymentStatus?.amount||0)>0?'ยังไม่ชำระ':'รอประกาศราคา'}</span></div>${shirtPaymentStatus?.paid?`<p class="text-3xl font-black mt-3">${Number(shirtPaymentStatus.amount||0).toLocaleString('th-TH')} บาท</p><p class="text-xs text-gray-500 mt-1">ชำระเมื่อ ${shirtPaymentStatus.paid_at?new Date(shirtPaymentStatus.paid_at).toLocaleString('th-TH',{dateStyle:'medium',timeStyle:'short'}):'—'}</p><p class="text-xs text-gray-500">ผู้รับชำระ: ${esc(shirtPaymentStatus.collected_by_name||'ไม่ระบุ')}</p>`:Number(shirtPaymentStatus?.amount||0)>0?`<p class="text-3xl font-black text-red-600 mt-3">${Number(shirtPaymentStatus.amount).toLocaleString('th-TH')} บาท</p><p class="text-sm text-gray-500 mt-2">กรุณาติดต่อครูที่ปรึกษาศาสนาเพื่อชำระค่าเสื้อ</p>`:'<p class="text-sm text-gray-400 mt-3">ระบบยังไม่เปิดรับชำระค่าเสื้อกีฬาสี</p>'}</section>`
    } else if(tab==='compete') {
      content=`<section class="bg-white rounded-2xl border p-5"><h2 class="font-bold mb-4">⚽ รายการแข่งขันของฉัน</h2>${regs?.length?`<div class="space-y-2">${regs.map(r=>`<div class="p-3 bg-gray-50 rounded-xl flex justify-between"><div><b>${esc(r.sports?.name)}</b><p class="text-xs text-gray-500">${esc(r.sports?.venue||'ยังไม่ระบุสถานที่')}</p></div><span class="text-xs text-indigo-600">${r.jersey_number?`หมายเลข ${esc(r.jersey_number)}`:'ลงทะเบียนแล้ว'}</span></div>`).join('')}</div>`:'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีรายการที่สต๊าฟลงทะเบียนให้</p>'}</section>
      <section class="bg-white rounded-2xl border p-5"><h2 class="font-bold mb-4">🏅 ผลงานและเกียรติบัตร</h2>${awards?.length?awards.map(a=>`<div class="p-3 rounded-xl bg-amber-50"><b>${esc(a.sports?.name||'รางวัลนักกีฬาดีเด่น')}</b><p class="text-sm">${esc(a.note)}</p></div>`).join(''):'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีเกียรติบัตรหรือรางวัล</p>'}</section>
      <section class="bg-white rounded-2xl border p-5"><h2 class="font-bold mb-3">🎖️ เกียรติบัตรกีฬาสี</h2>${!eligibility ? '<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีข้อมูล</p>' : eligibility.eligible ? (
        eligibility.certificate_url
          ? `<div class="text-center py-4"><p class="text-emerald-600 font-bold mb-3">🎉 คุณผ่านเกณฑ์รับเกียรติบัตรแล้ว!</p><button id="view-cert" class="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">🎖️ ดูเกียรติบัตรของฉัน</button></div>`
          : `<p class="text-emerald-600 font-bold text-center py-4">🎉 คุณผ่านเกณฑ์รับเกียรติบัตรแล้ว! รอแอดมินออกเกียรติบัตรให้เร็วๆ นี้</p>`
      ) : `<p class="text-xs text-gray-500 mb-3">เงื่อนไขรับเกียรติบัตร:</p><div class="space-y-2 text-sm">
        <div class="flex items-center justify-between p-2.5 rounded-lg ${eligibility.attendance_pct>=eligibility.threshold_pct?'bg-emerald-50':'bg-red-50'}"><span>${eligibility.attendance_pct>=eligibility.threshold_pct?'✅':'❌'} เช็คชื่อเข้าร่วมกิจกรรม ≥ ${esc(eligibility.threshold_pct)}%</span><b>${esc(eligibility.attendance_pct)}% (${esc(eligibility.present_days)}/${esc(eligibility.total_days)} วัน)</b></div>
        <div class="flex items-center justify-between p-2.5 rounded-lg ${eligibility.dues_paid?'bg-emerald-50':'bg-red-50'}"><span>${eligibility.dues_paid?'✅':'❌'} ชำระค่าบำรุงสีแล้ว</span></div>
        ${eligibility.is_athlete?`<div class="flex items-center justify-between p-2.5 rounded-lg ${eligibility.roll_call_complete?'bg-emerald-50':'bg-red-50'}"><span>${eligibility.roll_call_complete?'✅':'❌'} รายงานตัวนักกีฬาครบทุกครั้ง</span></div>`:''}
      </div>`}</section>`
    } else if(tab==='together') {
      content=`<section class="bg-white rounded-2xl border p-5">
        <div class="flex justify-between items-center mb-4"><h2 class="font-bold">✅ ประวัติเช็คชื่อเข้าร่วมสี</h2>${attendancePct!==null?`<span class="px-3 py-1 rounded-full text-xs font-bold ${attendancePct>=80?'bg-emerald-100 text-emerald-700':'bg-amber-100 text-amber-700'}">${attendancePct}% (${attendedCount}/${calendarDays.length} วัน)</span>`:''}</div>
        ${calendarDays.length?`<div class="space-y-2">${calendarDays.map(d=>{
          const a=attByDate[d.date]
          const dateLabel=new Date(d.date).toLocaleDateString('th-TH',{weekday:'short',day:'numeric',month:'short',year:'numeric'})
          return a
            ? `<div class="p-3 bg-emerald-50 rounded-xl flex items-center justify-between gap-3"><div><p class="text-sm font-bold text-emerald-700">✅ มา — ${esc(dateLabel)}</p><p class="text-xs text-gray-500 mt-0.5">${esc(SPORTS_SESSION_TYPE_LABEL[a.session_type]||a.session_type||'')} · เช็คเมื่อ ${a.scanned_at?new Date(a.scanned_at).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'}):'—'} น. · โดย ${esc(a.scanned_by_name)}</p></div></div>`
            : `<div class="p-3 bg-red-50 rounded-xl flex items-center justify-between gap-3"><p class="text-sm font-bold text-red-600">❌ ขาด — ${esc(dateLabel)}</p></div>`
        }).join('')}</div>`:'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีวันเข้าสี/กีฬาสีในปฏิทินปฏิบัติงาน</p>'}
      </section>
      <section class="bg-white rounded-2xl border p-5"><div class="flex justify-between items-start"><h2 class="font-bold">💰 ค่าบำรุงสี</h2><span class="px-2 py-1 rounded-full text-xs font-bold ${duesStatus?.paid?'bg-emerald-100 text-emerald-700':'bg-red-100 text-red-700'}">${duesStatus?.paid?'จ่ายแล้ว':'ยังไม่จ่าย'}</span></div>${duesStatus?.paid?`<p class="text-3xl font-black mt-3">${Number(duesStatus.amount||0).toLocaleString('th-TH')} บาท</p><p class="text-xs text-gray-500 mt-1">ชำระเมื่อ ${duesStatus.paid_at?new Date(duesStatus.paid_at).toLocaleString('th-TH',{dateStyle:'medium',timeStyle:'short'}):'—'}</p><p class="text-xs text-gray-500">ผู้รับชำระ: ${esc(duesStatus.collected_by_name||'ไม่ระบุ')}</p>`:`<p class="text-sm text-gray-400 mt-3">ยังไม่ได้ชำระค่าบำรุงสี ${Number(duesStatus?.amount||30).toLocaleString('th-TH')} บาท — ติดต่อพ่อสี/แม่สีหรือสต๊าฟประจำสีเพื่อชำระ</p>`}</section>
      <section class="bg-white rounded-2xl border p-5">
        <div class="flex justify-between items-start mb-3"><h2 class="font-bold">📒 บัญชีเงินสี</h2><span class="text-xs text-gray-400">เปิดเผยเพื่อความโปร่งใส</span></div>
        ${(() => {
          const entries=fundLedger?.entries||[]
          const duesTotal=Number(fundLedger?.dues_total)||0
          const schoolSupportTotal=entries.filter(e=>e.category==='school_support').reduce((s,e)=>s+Number(e.amount||0),0)
          const prizeTotal=entries.filter(e=>e.category==='prize').reduce((s,e)=>s+Number(e.amount||0),0)
          const expenseTotal=entries.filter(e=>e.category==='expense').reduce((s,e)=>s+Number(e.amount||0),0)
          const balance=duesTotal+schoolSupportTotal+prizeTotal-expenseTotal
          return `<div class="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-3">
            <div class="bg-gray-50 rounded-xl p-2.5 text-center"><p class="text-[10px] text-gray-500 font-bold">ค่าบำรุงสี</p><b class="text-sm">${duesTotal.toLocaleString('th-TH')}</b></div>
            <div class="bg-gray-50 rounded-xl p-2.5 text-center"><p class="text-[10px] text-gray-500 font-bold">สนับสนุนโรงเรียน</p><b class="text-sm">${schoolSupportTotal.toLocaleString('th-TH')}</b></div>
            <div class="bg-gray-50 rounded-xl p-2.5 text-center"><p class="text-[10px] text-gray-500 font-bold">เงินรางวัล</p><b class="text-sm">${prizeTotal.toLocaleString('th-TH')}</b></div>
            <div class="bg-red-50 rounded-xl p-2.5 text-center"><p class="text-[10px] text-red-500 font-bold">รายจ่ายรวม</p><b class="text-sm text-red-700">${expenseTotal.toLocaleString('th-TH')}</b></div>
            <div class="bg-emerald-50 rounded-xl p-2.5 text-center"><p class="text-[10px] text-emerald-600 font-bold">คงเหลือ</p><b class="text-sm text-emerald-700">${balance.toLocaleString('th-TH')}</b></div>
          </div>
          <button id="open-fund-ledger" class="w-full py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-bold hover:bg-gray-50">ดูรายการละเอียดทั้งหมด →</button>`
        })()}
      </section>`
    } else {
      // overview
      const shirtSize=req?.confirmed_size || req?.requested_size || student.sports_shirt_size
      content=`<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button data-sports-quick-tab="shirt" class="bg-white rounded-2xl border p-4 text-left hover:border-indigo-300 transition"><p class="text-xs text-gray-500 font-bold">👕 เสื้อกีฬาสี</p><p class="text-xl font-black mt-1">${esc(shirtSize||'—')}</p><p class="text-[11px] text-gray-400 mt-0.5">ไซซ์เสื้อ</p></button>
        <button data-sports-quick-tab="compete" class="bg-white rounded-2xl border p-4 text-left hover:border-indigo-300 transition"><p class="text-xs text-gray-500 font-bold">🏃 แข่งขัน</p><p class="text-xl font-black mt-1">${regs?.length||0}</p><p class="text-[11px] text-gray-400 mt-0.5">รายการที่ลงทะเบียน</p></button>
        <button data-sports-quick-tab="together" class="bg-white rounded-2xl border p-4 text-left hover:border-indigo-300 transition"><p class="text-xs text-gray-500 font-bold">✅ เช็คชื่อ</p><p class="text-xl font-black mt-1">${attendancePct!==null?attendancePct+'%':'—'}</p><p class="text-[11px] text-gray-400 mt-0.5">เข้าร่วมกิจกรรม</p></button>
        <button data-sports-quick-tab="together" class="bg-white rounded-2xl border p-4 text-left hover:border-indigo-300 transition"><p class="text-xs text-gray-500 font-bold">💰 ค่าบำรุงสี</p><p class="text-xl font-black mt-1">${duesStatus?.paid?'จ่ายแล้ว':'ยังไม่จ่าย'}</p><p class="text-[11px] text-gray-400 mt-0.5">สถานะการชำระ</p></button>
      </div>
      <button id="open-my-color" class="w-full py-4 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-base">🎨 สีของฉัน<span class="font-normal text-sm opacity-80"> — ${esc(student.house_color||'')}</span></button>
      <button id="open-gallery" class="w-full py-4 rounded-2xl bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-base">📸 ภาพกิจกรรมกีฬาสี</button>
      <button id="open-full-sports" class="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm">🏆 ระบบกีฬาสีหลัก (ภาพรวมทุกสี)</button>`
    }

    el.innerHTML=`<div class="max-w-5xl mx-auto space-y-5 pb-28">${banner}<div class="space-y-4">${content}</div></div>`

    el.querySelectorAll('[data-sports-quick-tab]').forEach(b=>b.addEventListener('click',()=>window._stuNavSportsTab?.(b.dataset.sportsQuickTab)))
    el.querySelector('#open-my-color')?.addEventListener('click',()=>openMyColorAsStudent(student))
    el.querySelector('#sports-home-banner')?.addEventListener('click',()=>openMyColorAsStudent(student))
    el.querySelector('#open-full-sports')?.addEventListener('click',()=>openAzizGamesModal())
    el.querySelector('#open-fund-ledger')?.addEventListener('click',()=>openMyColorAsStudent(student))
    el.querySelector('#open-gallery')?.addEventListener('click',()=>openSportsGalleryModal(event))
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
    const openShirtPreview=(code)=>{
      const meta=shirtSizes.find(s=>s.code===code)
      if(!meta) return
      showShirtSizePreviewModal(c,meta,async()=>{
        const {error}=await supabase.rpc('request_my_sports_shirt_size',{p_event:event.id,p_size:meta.code})
        if(error){toast(error.message,'error');return false}
        document.getElementById('shirt-size-preview-modal')?.remove()
        showShirtRequestSubmittedModal(meta.code)
        renderStudentSportsHome(student,tab)
        return true
      })
    }
    el.querySelector('#stu-shirt-size')?.addEventListener('change',e=>{if(e.target.value)openShirtPreview(e.target.value)})
    el.querySelector('#stu-shirt-chest-go')?.addEventListener('click',()=>{
      const val=Number(el.querySelector('#stu-shirt-chest-input')?.value)
      if(!val){toast('กรุณากรอกตัวเลขรอบอกก่อน','warning');return}
      const candidates=_filterSizesForRoom(shirtSizes,student.main_room,cfg)
      const rec=_recommendSizes(val,candidates,c.gender==='W')
      const pick=(meta)=>{const sizeSel=el.querySelector('#stu-shirt-size'); if(sizeSel) sizeSel.value=meta.code; openShirtPreview(meta.code)}
      if(rec.length<2) pick(rec[0])
      else showShirtSizeChoiceModal(rec[0],rec[1],pick)
    })
    el.querySelector('#stu-shirt-chest-input')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();el.querySelector('#stu-shirt-chest-go')?.click()}})
  } catch(e) { console.error(e); el.innerHTML=missing() }
}

// ป๊อปอัพโชว์ตัวอย่างเสื้อกีฬาสีตามสี+ไซซ์ที่กำลังเลือก (ก่อนบันทึกจริง) — เด้งทันทีตอนเลือกไซซ์
// จากดรอปดาวน์ หรือกรอกรอบอกให้ระบบแนะไซซ์ รูปมาจาก team_colors.shirt_preview_url (1 รูปต่อสี
// ไม่แยกรูปตามไซซ์) ซ้อนเลขรอบอกทับด้วย CSS แทนการทำรูปแยกทุกไซซ์ทุกสี — กด "ยืนยันไซซ์นี้" แล้ว
// ค่อยบันทึกจริงผ่าน onConfirm (async, return true ถ้าสำเร็จ)
function showShirtSizePreviewModal(color, meta, onConfirm) {
  if (!color?.shirt_preview_url) { onConfirm?.(); return }
  document.getElementById('shirt-size-preview-modal')?.remove()
  const overlay=document.createElement('div')
  overlay.id='shirt-size-preview-modal'
  overlay.className='fixed inset-0 z-[500] bg-black/80 flex items-center justify-center p-4'
  overlay.innerHTML=`<div class="w-full max-w-sm bg-white rounded-2xl overflow-hidden relative">
      <button data-preview-close class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center z-10">✕</button>
      <div class="relative"><img src="${esc(color.shirt_preview_url)}" class="w-full block">
        <span class="absolute top-3 left-3 bg-white/95 text-slate-900 font-black text-sm px-2.5 py-1 rounded-lg shadow-lg border-2 z-10" style="border-color:${esc(color.hex_color||'#000')}">ไซซ์ ${esc(meta.code)}</span>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="12" y1="33.5" x2="45" y2="33.5" stroke="#fff" stroke-width="0.6" stroke-linecap="round"/>
          <line x1="12" y1="32" x2="12" y2="35" stroke="#fff" stroke-width="0.6"/>
          <line x1="45" y1="32" x2="45" y2="35" stroke="#fff" stroke-width="0.6"/>
        </svg>
        <span class="absolute -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white text-lg font-black px-2.5 py-1 rounded-md shadow-lg ring-2 ring-white" style="left:28.5%;top:33.5%">${esc(meta.chest)}"</span>
      </div>
      <div class="p-4 space-y-3">
        <p class="text-sm text-center text-gray-600">ตัวอย่างเสื้อทีมสี<b style="color:${esc(color.hex_color||'#000')}">${esc(color.name||'')}</b> ไซซ์ ${esc(meta.code)}</p>
        <div class="flex gap-2">
          <button data-preview-cancel class="flex-1 py-2.5 rounded-xl border font-semibold text-sm text-gray-600">เลือกไซซ์ใหม่</button>
          <button data-preview-confirm class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm">✅ ยืนยันไซซ์นี้</button>
        </div>
      </div>
    </div>`
  document.body.appendChild(overlay)
  const close=()=>overlay.remove()
  overlay.querySelector('[data-preview-close]').onclick=close
  overlay.querySelector('[data-preview-cancel]').onclick=close
  overlay.addEventListener('mousedown',e=>{if(e.target===overlay)close()})
  overlay.querySelector('[data-preview-confirm]').onclick=async()=>{
    const btn=overlay.querySelector('[data-preview-confirm]')
    btn.disabled=true; btn.textContent='กำลังบันทึก...'
    const ok=await onConfirm()
    if(ok===false){btn.disabled=false;btn.textContent='✅ ยืนยันไซซ์นี้'}
  }
}

// ป๊อปอัพให้นักเรียนหญิงเลือกระหว่าง 2 ไซซ์ที่แนะนำ (จาก _recommendSizes) — ก่อนเข้าป๊อปอัพ
// ตัวอย่างเสื้อ+ยืนยัน
function showShirtSizeChoiceModal(a, b, onPick) {
  document.getElementById('shirt-size-choice-modal')?.remove()
  const overlay=document.createElement('div')
  overlay.id='shirt-size-choice-modal'
  overlay.className='fixed inset-0 z-[500] bg-black/80 flex items-center justify-center p-4'
  overlay.innerHTML=`<div class="w-full max-w-sm bg-white rounded-2xl p-5 space-y-3">
      <h3 class="font-bold text-base text-center">เลือกไซซ์ที่สบายใจที่สุด</h3>
      <p class="text-xs text-gray-500 text-center">แนะนำ 2 ไซซ์นี้ เพื่อความสบายใจ เคลื่อนไหวสะดวก และผ่านเกณฑ์ฝ่ายปกครอง</p>
      <div class="grid grid-cols-2 gap-3">
        <button data-choice="${esc(a.code)}" class="p-4 rounded-xl border-2 border-indigo-200 hover:border-indigo-500 text-center transition"><div class="text-2xl font-black">${esc(a.code)}</div><div class="text-xs text-gray-500 mt-1">รอบอก ${esc(a.chest)} นิ้ว</div></button>
        <button data-choice="${esc(b.code)}" class="p-4 rounded-xl border-2 border-indigo-200 hover:border-indigo-500 text-center transition"><div class="text-2xl font-black">${esc(b.code)}</div><div class="text-xs text-gray-500 mt-1">รอบอก ${esc(b.chest)} นิ้ว</div></button>
      </div>
      <button data-choice-cancel class="w-full py-2 text-xs text-gray-400">ยกเลิก</button>
    </div>`
  document.body.appendChild(overlay)
  const close=()=>overlay.remove()
  overlay.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>{const meta=btn.dataset.choice===a.code?a:b;close();onPick(meta)})
  overlay.querySelector('[data-choice-cancel]').onclick=close
  overlay.addEventListener('mousedown',e=>{if(e.target===overlay)close()})
}

// ป๊อปอัพสรุปหลังส่งไซซ์สำเร็จ — เด้งต่อจากป๊อปอัพตัวอย่างเสื้อ (หลังกด "ยืนยันไซซ์นี้")
function showShirtRequestSubmittedModal(size) {
  document.getElementById('shirt-request-submitted-modal')?.remove()
  const overlay=document.createElement('div')
  overlay.id='shirt-request-submitted-modal'
  overlay.className='fixed inset-0 z-[500] bg-black/80 flex items-center justify-center p-4'
  overlay.innerHTML=`<div class="w-full max-w-sm bg-white rounded-2xl p-6 text-center space-y-3">
      <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto text-2xl">✅</div>
      <h3 class="font-bold text-lg">แจ้งไซซ์ ${esc(size)} เรียบร้อยแล้ว</h3>
      <p class="text-sm text-gray-500">รอครูที่ปรึกษาสามัญยืนยันเพื่อเสร็จสิ้นการแจ้งไซซ์</p>
      <button data-submitted-close class="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm mt-2">ตกลง</button>
    </div>`
  document.body.appendChild(overlay)
  const close=()=>overlay.remove()
  overlay.querySelector('[data-submitted-close]').onclick=close
  overlay.addEventListener('mousedown',e=>{if(e.target===overlay)close()})
}

// เช็คว่าควรโชว์ไอคอน "แจ้งไซซ์เสื้อ" ให้ครูคนนี้ไหม + สถานะเปิด/ปิดรับแจ้ง — ใช้จากกริดไอคอน
// "ระบบอื่นๆ" ในหน้าภาพรวม (renderTeacherOverview) ที่ต้องรู้ผลลัพธ์ก่อนตัดสินใจสร้าง tile ในกริด
export async function getTeacherShirtButtonState(teacher) {
  let enabled = false, existing = false
  try {
    const {event,cfg} = await context()
    const {data:row} = await supabase.from('sports_shirt_teacher_requests').select('id').eq('event_id',event.id).eq('teacher_id',teacher.id).maybeSingle()
    enabled = !!cfg?.teacher_shirt_request_enabled
    existing = !!row
  } catch (e) { console.error(e); return { visible: false, enabled: false } }
  return { visible: enabled || existing, enabled }
}

// ป๊อปอัพแจ้ง/แก้ไขไซซ์เสื้อของครู — ขั้นตอน: เลือกไซซ์ (form) → ยืนยัน (confirm) → เสร็จสิ้น (done)
// ถ้าเคยแจ้งไว้แล้วจะโชว์ประวัติก่อน (history) พร้อมปุ่มแก้ไขถ้ายังไม่ปิดรับแจ้ง
export async function openTeacherShirtSizeModal(teacher) {
  document.getElementById('teacher-shirt-modal')?.remove()
  const overlay=document.createElement('div')
  overlay.id='teacher-shirt-modal'
  overlay.className='fixed inset-0 z-[500] bg-black/70 flex items-center justify-center p-4'
  overlay.innerHTML='<div class="modal-box w-full max-w-sm bg-white rounded-2xl p-8 text-center text-gray-400">กำลังโหลด...</div>'
  document.body.appendChild(overlay)
  overlay.addEventListener('mousedown',e=>{if(e.target===overlay)overlay.remove()})
  try{
    const {event,cfg}=await context()
    const useStudentSizes = cfg?.teacher_shirt_use_student_sizes !== false
    const {data:sizesRow} = await supabase.from('settings').select('value').eq('key', useStudentSizes?'shirt_sizes':'teacher_shirt_sizes').maybeSingle()
    const sizeList = (Array.isArray(sizesRow?.value) && sizesRow.value.length) ? sizesRow.value : DEFAULT_SHIRT_SIZES
    let {data:existing} = await supabase.from('sports_shirt_teacher_requests').select('*').eq('event_id',event.id).eq('teacher_id',teacher.id).maybeSingle()
    const enabled = !!cfg?.teacher_shirt_request_enabled

    let mode = existing ? 'history' : 'form'
    let pendingSize = existing?.size || sizeList[0]?.code || ''
    if (!enabled && !existing) mode='closed'

    const render=()=>{
      const box=overlay.querySelector('.modal-box')
      if(mode==='closed'){
        box.innerHTML=`<div class="text-center space-y-3"><div class="text-3xl">🔒</div><p class="font-bold">ยังไม่เปิดรับแจ้งไซซ์เสื้อคุณครู</p><button data-close class="mt-2 px-4 py-2 rounded-xl border">ปิด</button></div>`
      } else if(mode==='history'){
        box.innerHTML=`<div class="space-y-4"><h3 class="font-bold text-lg text-center">👕 ไซซ์เสื้อที่แจ้งไว้</h3>
          <div class="text-center"><p class="text-4xl font-black">${esc(existing.size)}</p><p class="text-xs text-gray-500 mt-1">แจ้งเมื่อ ${new Date(existing.updated_at).toLocaleString('th-TH',{dateStyle:'medium',timeStyle:'short'})}</p></div>
          ${enabled?`<button data-edit class="w-full py-2.5 rounded-xl border font-bold text-sm">แก้ไขไซซ์</button>`:`<p class="text-xs text-center text-gray-400">ปิดรับแจ้ง/แก้ไขแล้ว</p>`}
          <button data-close class="w-full py-2 text-xs text-gray-400">ปิดหน้าต่าง</button>
        </div>`
      } else if(mode==='form'){
        box.innerHTML=`<div class="space-y-4"><h3 class="font-bold text-lg text-center">👕 แจ้งไซซ์เสื้อวันกีฬาสี2026</h3>
          <select id="teacher-shirt-size-select" class="w-full border rounded-xl px-3 py-2">${sizeList.map(s=>`<option value="${esc(s.code)}" ${s.code===pendingSize?'selected':''}>${esc(s.code)} (รอบอก ${esc(s.chest)} นิ้ว)</option>`).join('')}</select>
          <button data-next class="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm">บันทึก</button>
          <button data-close class="w-full py-2 text-xs text-gray-400">ยกเลิก</button>
        </div>`
        const sel=box.querySelector('#teacher-shirt-size-select')
        if(!pendingSize && sizeList[0]) pendingSize=sizeList[0].code
        sel.onchange=e=>{pendingSize=e.target.value}
      } else if(mode==='confirm'){
        box.innerHTML=`<div class="space-y-4 text-center"><h3 class="font-bold text-lg">ยืนยันไซซ์เสื้อ</h3><p class="text-4xl font-black">${esc(pendingSize)}</p><p class="text-sm text-gray-500">ยืนยันไซซ์นี้ใช่ไหม?</p>
          <div class="flex gap-2"><button data-back class="flex-1 py-2.5 rounded-xl border font-bold text-sm">← เลือกใหม่</button><button data-confirm class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm">✅ ยืนยัน</button></div>
        </div>`
      } else if(mode==='done'){
        box.innerHTML=`<div class="space-y-3 text-center"><div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto text-2xl">✅</div><h3 class="font-bold text-lg">แจ้งไซซ์ ${esc(pendingSize)} เรียบร้อยแล้ว</h3><button data-close class="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm mt-2">ตกลง</button></div>`
      }
      box.querySelector('[data-close]')?.addEventListener('click',()=>overlay.remove())
      box.querySelector('[data-edit]')?.addEventListener('click',()=>{mode='form';render()})
      box.querySelector('[data-next]')?.addEventListener('click',()=>{mode='confirm';render()})
      box.querySelector('[data-back]')?.addEventListener('click',()=>{mode='form';render()})
      box.querySelector('[data-confirm]')?.addEventListener('click',async()=>{
        const btn=box.querySelector('[data-confirm]'); btn.disabled=true; btn.textContent='กำลังบันทึก...'
        const {error}=await supabase.rpc('request_my_teacher_shirt_size',{p_event:event.id,p_size:pendingSize})
        if(error){toast(error.message,'error');btn.disabled=false;btn.textContent='✅ ยืนยัน';return}
        existing={size:pendingSize,updated_at:new Date().toISOString()}
        mode='done';render()
      })
    }
    render()
  }catch(e){console.error(e);overlay.querySelector('.modal-box').innerHTML=`<p class="text-red-600 text-sm">โหลดข้อมูลไม่สำเร็จ: ${esc(e.message)}</p>`}
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

export async function renderAdvisorStudents(teacher,rooms=[],tab='list',category=null) {
  if (typeof window._cleanupAdvisorShirtPaymentScanner === 'function') {
    await window._cleanupAdvisorShirtPaymentScanner()
  }
  const el=main(); el.innerHTML='<div class="py-16 text-center">กำลังโหลด...</div>'
  const samai=rooms.filter(r=>r.category==='สามัญ')
  const religion=rooms.filter(r=>r.category==='ศาสนา')
  if(!samai.length && !religion.length){el.innerHTML='<div class="text-center py-16 text-gray-500">หน้านี้สำหรับครูที่ปรึกษาเท่านั้น</div>';return}
  const cat = category || (samai.length ? 'สามัญ' : 'ศาสนา')
  const activeRooms = cat==='ศาสนา' ? religion : samai
  const roomNames=activeRooms.map(r=>r.main_room)
  const hasBoth = samai.length && religion.length
  // เช็คชื่อเข้าสีวันแรก: รวมห้องทุกประเภทที่ครูคนนี้เป็นที่ปรึกษาอยู่ (ไม่แยกตามแท็บสามัญ/ศาสนา
  // ที่กำลังดู) เพราะบางห้องเรียนสามัญและศาสนาเป็นห้องเดียวกัน ครูที่ปรึกษาศาสนาต้องเช็คชื่อแทน
  // ครูที่ปรึกษาสามัญที่ลาได้ — เห็นห้องของตัวเองครบทุกห้องไม่ว่าจะสลับแท็บไหนอยู่
  const allRoomNames=[...new Set(rooms.map(r=>r.main_room))]
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
      <button data-advisor-tab="checkin" class="px-4 py-2 rounded-xl text-sm font-bold border ${tab==='checkin'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">🎽 เช็คชื่อเข้าสีวันแรก</button>
      ${cat==='สามัญ'?`
      <button data-advisor-tab="size" class="px-4 py-2 rounded-xl text-sm font-bold border ${tab==='size'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">👕 ไซซ์เสื้อ</button>
      <button data-advisor-tab="vote" class="px-4 py-2 rounded-xl text-sm font-bold border ${tab==='vote'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">🗳️ โหวตแบบเสื้อ</button>`:`
      <button data-advisor-tab="shirt-payment" class="px-4 py-2 rounded-xl text-sm font-bold border ${tab==='shirt-payment'?'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-500 border-gray-200'}">💰 รับชำระค่าเสื้อ</button>`}
    </div>
    <div id="advisor-tab-body"></div>
  </div>`
  el.querySelectorAll('[data-advisor-tab]').forEach(b=>b.addEventListener('click',()=>renderAdvisorStudents(teacher,rooms,b.dataset.advisorTab,cat)))
  el.querySelectorAll('[data-advisor-cat]').forEach(b=>b.addEventListener('click',()=>renderAdvisorStudents(teacher,rooms,'list',b.dataset.advisorCat)))
  const body=el.querySelector('#advisor-tab-body')
  if(tab==='vote') await _renderAdvisorVoteTab(body,teacher,rooms,roomNames)
  else if(tab==='size') await _renderAdvisorSizeTab(body,teacher,rooms,roomNames)
  else if(tab==='shirt-payment') await _renderAdvisorShirtPaymentTab(body,teacher,rooms,roomNames)
  else if(tab==='checkin') await _renderAdvisorCheckinTab(body,teacher,rooms,allRoomNames)
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

async function _renderAdvisorShirtPaymentTab(body,teacher,rooms,roomNames,selectedRoom=null) {
  const room=selectedRoom&&roomNames.includes(selectedRoom)?selectedRoom:roomNames[0]
  body.innerHTML='<div class="py-12 text-center text-gray-400">กำลังโหลดข้อมูลการชำระค่าเสื้อ...</div>'
  if(!room){body.innerHTML='<div class="py-12 text-center text-gray-400">ไม่พบห้องที่ปรึกษาศาสนา</div>';return}
  try{
    const {event}=await context()
    const {data:snapshot,error}=await supabase.rpc('get_religion_advisor_shirt_payment_snapshot',{p_event:event.id,p_room:room})
    if(error)throw error
    const students=snapshot?.students||[]
    let payments=[...(snapshot?.payments||[])]
    const amountM=Number(snapshot?.amount_m||0),amountW=Number(snapshot?.amount_w||0)
    const amountFor=s=>{const g=String(s?.gender||'');return (g==='หญิง'||g==='W')?amountW:amountM}
    const bothZero=amountM<=0&&amountW<=0
    const amountBadgeText=bothZero?'รอแอดมินตั้งราคา':`ชาย ${amountM>0?amountM.toLocaleString('th-TH'):'รอตั้งราคา'} · หญิง ${amountW>0?amountW.toLocaleString('th-TH'):'รอตั้งราคา'} บาท`
    let html5Qrcode=null,scanning=false,recentScans=[],filter='all'

    const stopScanner=async()=>{
      if(html5Qrcode){try{await html5Qrcode.stop()}catch(e){}try{await html5Qrcode.clear()}catch(e){}}
      html5Qrcode=null;scanning=false
    }
    window._cleanupAdvisorShirtPaymentScanner=stopScanner

    body.innerHTML=`
      ${roomNames.length>1?`<div class="flex flex-wrap gap-2 mb-3">${roomNames.map(r=>`<button data-shirt-pay-room="${esc(r)}" class="px-3 py-2 rounded-xl text-xs font-bold border ${r===room?'bg-violet-600 text-white border-violet-600':'bg-white text-gray-500 border-gray-200'}">${esc(r)}</button>`).join('')}</div>`:''}
      <section class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div class="p-4 sm:p-5 border-b border-gray-100 flex flex-wrap items-start justify-between gap-3">
          <div><h2 class="font-bold text-gray-800">💰 รับชำระค่าเสื้อกีฬาสี</h2><p class="text-xs text-gray-500 mt-1">ห้องศาสนา ${esc(room)} · สแกน QR ประจำตัวนักเรียนหรือกรอกรหัสด้วยมือ</p></div>
          <span class="px-3 py-1.5 rounded-full text-xs font-bold ${bothZero?'bg-amber-100 text-amber-700':'bg-violet-100 text-violet-700'}">${amountBadgeText}</span>
        </div>
        ${bothZero?'<div class="mx-4 mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-700">⚠️ แอดมินยังไม่ได้ตั้งราคาค่าเสื้อ ระบบจึงปิดการรับชำระชั่วคราว</div>':(amountM<=0||amountW<=0)?`<div class="mx-4 mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-700">⚠️ แอดมินยังไม่ได้ตั้งราคาค่าเสื้อของ${amountM<=0?'นักเรียนชาย':'นักเรียนหญิง'} ระบบจะรับชำระได้เฉพาะอีกเพศก่อน</div>`:''}
        <div id="advisor-shirt-pay-summary" class="p-4 pb-0"></div>
        <div class="grid md:grid-cols-2 gap-4 p-4">
          <div class="rounded-2xl bg-slate-900 p-4 space-y-3">
            <div id="advisor-shirt-pay-camera" class="w-full aspect-square rounded-xl overflow-hidden bg-black/40" style="display:none"></div>
            <button type="button" id="advisor-shirt-pay-camera-toggle" ${bothZero?'disabled':''} class="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white text-sm font-bold">📷 เปิดกล้องสแกน QR</button>
            <div id="advisor-shirt-pay-feedback"></div>
          </div>
          <div class="rounded-2xl bg-gray-50 border border-gray-200 p-4 space-y-4">
            <div><label class="text-xs font-bold text-gray-600">กรอกรหัสนักเรียน (กรณีไม่ได้พก QR)</label><div class="flex gap-2 mt-2"><input id="advisor-shirt-pay-code" type="text" inputmode="numeric" placeholder="รหัสนักเรียน" ${bothZero?'disabled':''} class="flex-1 min-w-0 border border-gray-200 bg-white rounded-xl px-3 py-2.5 text-sm"><button id="advisor-shirt-pay-submit" ${bothZero?'disabled':''} class="px-4 py-2.5 rounded-xl bg-emerald-600 disabled:bg-gray-400 text-white text-sm font-bold">รับเงิน</button></div></div>
            <div><p class="text-xs font-bold text-gray-600 mb-2">รับชำระล่าสุด</p><div id="advisor-shirt-pay-recent" class="space-y-2 max-h-56 overflow-y-auto"><p class="text-xs text-gray-400 text-center py-4">ยังไม่มีรายการใหม่</p></div></div>
          </div>
        </div>
        <div class="border-t border-gray-100 p-4">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div class="inline-flex rounded-xl bg-gray-100 p-1"><button data-shirt-pay-filter="all" class="px-3 py-1.5 rounded-lg text-xs font-bold">ทั้งหมด</button><button data-shirt-pay-filter="paid" class="px-3 py-1.5 rounded-lg text-xs font-bold">ชำระแล้ว</button><button data-shirt-pay-filter="unpaid" class="px-3 py-1.5 rounded-lg text-xs font-bold">ยังไม่ชำระ</button></div><button id="advisor-shirt-pay-csv" class="px-3 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-600">⬇️ รายชื่อยังไม่ชำระ CSV</button></div>
          <div id="advisor-shirt-pay-list" class="grid md:grid-cols-2 gap-2"></div>
        </div>
      </section>`

    body.querySelectorAll('[data-shirt-pay-room]').forEach(b=>b.onclick=async()=>{
      await stopScanner();await _renderAdvisorShirtPaymentTab(body,teacher,rooms,roomNames,b.dataset.shirtPayRoom)
    })

    const paidOf=id=>payments.find(p=>Number(p.student_id)===Number(id))
    const renderSummary=()=>{
      const paid=students.filter(s=>paidOf(s.id)),unpaid=students.filter(s=>!paidOf(s.id))
      const total=payments.reduce((sum,p)=>sum+(Number(p.amount)||0),0)
      const pct=students.length?Math.round(paid.length/students.length*100):0
      body.querySelector('#advisor-shirt-pay-summary').innerHTML=`<div class="grid grid-cols-2 lg:grid-cols-5 gap-2"><div class="rounded-xl bg-gray-50 border p-3 text-center"><p class="text-[10px] text-gray-500 font-bold">ทั้งหมด</p><b class="text-xl">${students.length}</b></div><div class="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">ชำระแล้ว</p><b class="text-xl text-emerald-700">${paid.length}</b></div><div class="rounded-xl bg-red-50 border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">ยังไม่ชำระ</p><b class="text-xl text-red-700">${unpaid.length}</b></div><div class="rounded-xl bg-violet-50 border border-violet-200 p-3 text-center"><p class="text-[10px] text-violet-600 font-bold">รวมเงิน</p><b class="text-xl text-violet-700">${total.toLocaleString('th-TH')}</b><span class="text-[10px] ml-1">บาท</span></div><div class="rounded-xl bg-blue-50 border border-blue-200 p-3 text-center"><p class="text-[10px] text-blue-600 font-bold">ความคืบหน้า</p><b class="text-xl text-blue-700">${pct}%</b></div></div>`
    }
    const studentRow=s=>{
      const p=paidOf(s.id),photo=s.image_url||s.photo_url
      return `<div class="rounded-xl border ${p?'border-emerald-200 bg-emerald-50/50':'border-gray-200 bg-white'} p-3 flex items-center gap-3">${photo?`<img src="${esc(photo)}" class="w-9 h-11 rounded-lg object-cover border bg-gray-100">`:`<div class="w-9 h-11 rounded-lg bg-violet-50 text-violet-600 grid place-items-center font-bold">${esc((s.full_name||'?').charAt(0))}</div>`}<div class="min-w-0 flex-1"><b class="text-sm text-gray-800 truncate block">${esc(s.full_name)}</b><p class="text-[11px] text-gray-500">${esc(s.student_code)} · ${esc(s.main_room||'—')} · เสื้อ ${esc(s.sports_shirt_size||'—')}</p>${p?`<p class="text-[10px] text-emerald-600">${new Date(p.paid_at).toLocaleString('th-TH',{dateStyle:'medium',timeStyle:'short'})}</p>`:''}</div><div class="text-right flex-shrink-0">${p?`<span class="block text-xs font-bold text-emerald-700">✓ ชำระแล้ว</span><button data-shirt-pay-cancel="${esc(p.id)}" data-student-name="${esc(s.full_name)}" class="mt-1 text-[10px] text-red-500 hover:underline">ยกเลิกรายการ</button>`:'<span class="text-xs font-bold text-red-600">ยังไม่ชำระ</span>'}</div></div>`
    }
    const renderList=()=>{
      body.querySelectorAll('[data-shirt-pay-filter]').forEach(b=>{const active=b.dataset.shirtPayFilter===filter;b.className=`px-3 py-1.5 rounded-lg text-xs font-bold ${active?'bg-white text-violet-700 shadow':'text-gray-500'}`})
      const list=students.filter(s=>filter==='all'||(filter==='paid'?!!paidOf(s.id):!paidOf(s.id)))
      const listEl=body.querySelector('#advisor-shirt-pay-list')
      listEl.innerHTML=list.map(studentRow).join('')||'<p class="md:col-span-2 text-sm text-gray-400 text-center py-8">ไม่พบรายการ</p>'
      listEl.querySelectorAll('[data-shirt-pay-cancel]').forEach(b=>b.onclick=async()=>{
        if(!confirm(`ยกเลิกรายการรับชำระค่าเสื้อของ ${b.dataset.studentName}?`))return
        const {data,error}=await supabase.rpc('cancel_religion_advisor_shirt_payment',{p_payment:b.dataset.shirtPayCancel})
        if(error||!data){toast(error?.message||'ยกเลิกไม่สำเร็จ','error');return}
        payments=payments.filter(p=>String(p.id)!==String(b.dataset.shirtPayCancel));toast('ยกเลิกรายการรับชำระแล้ว');renderSummary();renderList()
      })
    }
    const renderRecent=()=>{
      const el=body.querySelector('#advisor-shirt-pay-recent')
      el.innerHTML=recentScans.length?recentScans.map(s=>`<div class="bg-white border border-emerald-200 rounded-xl p-2 flex items-center gap-2"><div class="min-w-0 flex-1"><b class="text-xs text-gray-800 truncate block">${esc(s.full_name)}</b><span class="text-[10px] text-gray-500">${esc(s.student_code)}</span></div><span class="text-xs font-bold text-emerald-600">✓ ${amountFor(s).toLocaleString('th-TH')} บาท</span></div>`).join(''):'<p class="text-xs text-gray-400 text-center py-4">ยังไม่มีรายการใหม่</p>'
    }
    const feedback=(ok,title,detail='')=>{body.querySelector('#advisor-shirt-pay-feedback').innerHTML=`<div class="rounded-xl p-3 flex items-center gap-3 ${ok?'bg-emerald-950/70 border border-emerald-700':'bg-red-950/70 border border-red-700'}"><span class="text-lg">${ok?'✅':'❌'}</span><div class="min-w-0"><b class="text-xs block truncate ${ok?'text-emerald-300':'text-red-300'}">${esc(title)}</b><span class="text-[10px] text-slate-300 truncate block">${esc(detail)}</span></div></div>`}
    const showSuccessPopup=student=>{
      document.getElementById('advisor-shirt-pay-success')?.remove();const m=document.createElement('div');m.id='advisor-shirt-pay-success';m.className='fixed inset-0 z-[400] bg-black/70 flex items-center justify-center p-6';const photo=student.image_url||student.photo_url;m.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center"><div class="text-5xl mb-2">✅</div>${photo?`<img src="${esc(photo)}" class="w-20 h-24 rounded-xl object-cover border-2 border-emerald-400 mx-auto mb-3 shadow-md">`:''}<h3 class="font-bold text-gray-800 text-lg">${esc(student.full_name)}</h3><p class="text-xs text-gray-500 mb-3">${esc(student.student_code)} · ${esc(student.religion_room||'')}</p><p class="text-3xl font-black text-emerald-600 mb-1">${amountFor(student).toLocaleString('th-TH')} บาท</p><p class="text-sm text-emerald-700 font-bold mb-5">ชำระค่าเสื้อกีฬาสีสำเร็จ</p><button id="advisor-shirt-pay-next" class="w-full py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm">📷 สแกนคนถัดไป</button><div class="h-1 bg-gray-100 rounded-full mt-4 overflow-hidden"><div id="advisor-shirt-pay-popup-bar" class="h-full bg-emerald-500" style="width:100%"></div></div></div>`;document.body.appendChild(m);const bar=m.querySelector('#advisor-shirt-pay-popup-bar');requestAnimationFrame(()=>{bar.style.transition='width 5s linear';bar.style.width='0%'});const close=()=>m.remove(),timer=setTimeout(close,5000);m.querySelector('#advisor-shirt-pay-next').onclick=()=>{clearTimeout(timer);close()};m.onclick=e=>{if(e.target===m){clearTimeout(timer);close()}}
    }
    const commitPayment=async(student,method)=>{
      if(!student){_playScanBeepAtt(false);feedback(false,'ไม่พบนักเรียนในห้องนี้','ตรวจสอบรหัสหรือ QR Code อีกครั้ง');return}
      const existing=paidOf(student.id)
      if(existing){_playScanBeepAtt(false);feedback(false,`${student.full_name} ชำระแล้ว`,`${Number(existing.amount).toLocaleString('th-TH')} บาท`);return}
      const {data,error}=await supabase.rpc('record_religion_advisor_shirt_payment',{p_event:event.id,p_student:student.id,p_method:method})
      if(error){_playScanBeepAtt(false);feedback(false,'บันทึกไม่สำเร็จ',error.message);return}
      payments.unshift({...data,student_id:student.id});recentScans.unshift(student);_playScanBeepAtt(true);feedback(true,`รับเงิน ${student.full_name} สำเร็จ`,`${amountFor(student).toLocaleString('th-TH')} บาท`);renderSummary();renderList();renderRecent();showSuccessPopup(student)
    }

    body.querySelectorAll('[data-shirt-pay-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.shirtPayFilter;renderList()})
    body.querySelector('#advisor-shirt-pay-submit').onclick=()=>{const input=body.querySelector('#advisor-shirt-pay-code'),code=input.value.trim();if(!code)return;commitPayment(students.find(s=>s.student_code===code),'manual');input.value='';input.focus()}
    body.querySelector('#advisor-shirt-pay-code').addEventListener('keydown',e=>{if(e.key==='Enter')body.querySelector('#advisor-shirt-pay-submit').click()})
    body.querySelector('#advisor-shirt-pay-camera-toggle').onclick=async()=>{
      const btn=body.querySelector('#advisor-shirt-pay-camera-toggle'),reader=body.querySelector('#advisor-shirt-pay-camera')
      if(scanning){await stopScanner();reader.style.display='none';btn.textContent='📷 เปิดกล้องสแกน QR';return}
      try{const Html5Qrcode=await _loadHtml5QrcodeAtt();reader.style.display='block';html5Qrcode=new Html5Qrcode('advisor-shirt-pay-camera');let lastCode=null,lastTime=0;await html5Qrcode.start({facingMode:'environment'},{fps:15,aspectRatio:1},decodedText=>{if(decodedText===lastCode&&Date.now()-lastTime<2000)return;lastCode=decodedText;lastTime=Date.now();let code=decodedText;if(code.startsWith('SQ:'))code=code.split(':')[1];commitPayment(students.find(s=>s.student_code===code),'qr')});scanning=true;btn.textContent='⏹ ปิดกล้อง'}catch(e){feedback(false,'เปิดกล้องไม่สำเร็จ',e.message);await stopScanner();reader.style.display='none'}
    }
    body.querySelector('#advisor-shirt-pay-csv').onclick=()=>{const unpaid=students.filter(s=>!paidOf(s.id));const rows=['รหัส,ชื่อ-สกุล,ห้องสามัญ,ห้องศาสนา,สี,ไซซ์เสื้อ,ยอดที่ต้องชำระ',...unpaid.map(s=>[s.student_code,s.full_name,s.main_room,s.religion_room,s.house_color,s.sports_shirt_size,amountFor(s)].map(x=>`"${String(x||'').replaceAll('"','""')}"`).join(','))];const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+rows.join('\n')],{type:'text/csv'}));a.download=`ยังไม่ชำระค่าเสื้อ-${room}.csv`;a.click();URL.revokeObjectURL(a.href)}
    renderSummary();renderList();renderRecent()
  }catch(e){console.error(e);body.innerHTML=`<div class="p-8 text-center text-red-500">โหลดข้อมูลค่าเสื้อไม่สำเร็จ: ${esc(e.message||'')}</div>`}
}

// แท็บ "เช็คชื่อเข้าสีวันแรก" — ครูที่ปรึกษาทั้งสามัญและศาสนาใช้ได้ (บางห้องเรียนสามัญ+ศาสนา
// เป็นห้องเดียวกัน เผื่อกรณีครูที่ปรึกษาสามัญลา) ใช้ตาราง sports_attendance ชุดเดียวกับ
// หน้า "จัดการสีของฉัน" (RPC หาสีจริงของนักเรียนแล้วบันทึกให้อัตโนมัติ) เปิดใช้งานได้เฉพาะวันที่
// แอดมินกำหนดไว้ใน sports_portal_settings.advisor_checkin_date เท่านั้น — วันอื่นเห็นรายชื่อ/
// สถานะได้แต่กดเช็คชื่อไม่ได้ (ฝั่งเซิร์ฟเวอร์เช็คซ้ำอีกชั้น ไม่ใช่แค่ปิดปุ่มฝั่งหน้าเว็บ)
async function _renderAdvisorCheckinTab(body,teacher,rooms,roomNames) {
  body.innerHTML='<div class="py-12 text-center text-gray-400">กำลังโหลดข้อมูลเช็คชื่อเข้าสีวันแรก...</div>'
  try {
    const {event}=await context()
    const {data:snapshot,error}=await supabase.rpc('get_advisor_sports_checkin_snapshot',{p_event:event.id})
    if(error)throw error
    const todayStr=todayLocal()
    const students=snapshot?.students||[]
    // เก็บเช็คชื่อทั้งหมด (ไม่ใช่แค่วันนี้แล้ว) คีย์ด้วย studentId|date เพราะเปิดโหมดย้อนหลังได้
    const attendanceMap={}
    ;(snapshot?.attendance||[]).forEach(a=>{attendanceMap[`${a.student_id}|${a.session_date}`]=a})
    const checkinDate=snapshot?.checkin_date
    const backfillEnabled=!!snapshot?.backfill_enabled
    const isScheduledToday=!!checkinDate && todayStr===checkinDate
    // ตัวเลือกวันที่ย้อนหลัง — มีให้เลือกเฉพาะตอนแอดมินเปิด backfillEnabled เท่านั้น (ปิดอยู่ใช้
    // พฤติกรรมเดิมเป๊ะ ล็อกวันเดียวตาม advisor_checkin_date) ดึงจากปฏิทินปฏิบัติงานเหมือนฝั่งฝ่ายสี
    const calendarDaysDesc=_expandCalendarDays(snapshot?.camp_calendar||[])
    const pastCalendarDays=calendarDaysDesc.filter(d=>d.date<todayStr)
    const dateOptions=[{date:todayStr,label:calendarDaysDesc.find(d=>d.date===todayStr)?.label||''},...pastCalendarDays]
    let sessionDate=todayStr
    let active=backfillEnabled?true:(isScheduledToday && sessionDate===todayStr)
    let html5Qrcode=null,scanning=false,recentScans=[],filter='all'

    const stopScanner=async()=>{
      if(html5Qrcode){try{await html5Qrcode.stop()}catch(e){}try{await html5Qrcode.clear()}catch(e){}}
      html5Qrcode=null;scanning=false
    }
    window._cleanupAdvisorShirtPaymentScanner=stopScanner

    const statusBannerHtml=()=>{
      if(backfillEnabled){
        if(sessionDate===todayStr && isScheduledToday) return `<div class="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs font-semibold text-emerald-700">✅ วันนี้ (${esc(checkinDate)}) เป็นวันเช็คชื่อเข้าสีวันแรก</div>`
        if(sessionDate===todayStr) return `<div class="rounded-xl bg-sky-50 border border-sky-200 px-4 py-3 text-xs font-semibold text-sky-700">ℹ️ แอดมินเปิดโหมดเช็คชื่อย้อนหลังไว้ — บันทึกของวันนี้ได้ตามปกติ</div>`
        return `<div class="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-700">⚠️ กำลังบันทึกเช็คชื่อ<b>ย้อนหลัง</b>สำหรับวันที่ ${esc(sessionDate)} ไม่ใช่วันนี้ — ตรวจสอบวันที่ให้ถูกต้องก่อนสแกน</div>`
      }
      if(!checkinDate) return `<div class="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs font-semibold text-amber-700">⚠️ แอดมินยังไม่ได้กำหนดวันเช็คชื่อเข้าสีวันแรก ระบบนี้จึงยังปิดอยู่</div>`
      if(isScheduledToday) return `<div class="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs font-semibold text-emerald-700">✅ วันนี้ (${esc(checkinDate)}) เป็นวันเช็คชื่อเข้าสีวันแรก — ครูที่ปรึกษาบันทึกแทนฝ่ายสีได้เฉพาะวันนี้เท่านั้น</div>`
      const future=new Date(checkinDate)>new Date()
      return `<div class="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-xs font-semibold text-gray-600">${future?`⏳ ยังไม่ถึงวันเช็คชื่อเข้าสีวันแรก (กำหนดไว้วันที่ ${esc(checkinDate)})`:`ℹ️ พ้นวันเช็คชื่อเข้าสีวันแรกแล้ว (${esc(checkinDate)}) ระบบกลับไปใช้การเช็คชื่อโดยฝ่ายสีตามปกติ — ให้แอดมินเปิด "เช็คชื่อย้อนหลัง" ถ้าต้องการแก้ไข`} — ดูข้อมูลได้อย่างเดียว</div>`
    }

    body.innerHTML=`
      <section class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div class="p-4 sm:p-5 border-b border-gray-100 flex flex-wrap items-start justify-between gap-3">
          <div><h2 class="font-bold text-gray-800">🎽 เช็คชื่อเข้าสีวันแรก</h2><p class="text-xs text-gray-500 mt-1">ห้อง ${roomNames.map(esc).join(', ')} · สแกน QR ประจำตัวนักเรียนหรือกรอกรหัสด้วยมือ</p></div>
          ${backfillEnabled&&dateOptions.length>1?`<select id="advisor-checkin-date-select" class="rounded-xl border border-gray-200 px-3 py-2 text-xs font-bold bg-white">${dateOptions.map(d=>`<option value="${esc(d.date)}">${d.date===todayStr?'วันนี้':esc(d.date)}${d.label?` — ${esc(d.label)}`:''}</option>`).join('')}</select>`:''}
        </div>
        <div id="advisor-checkin-banner" class="p-4 pb-0"></div>
        <div id="advisor-checkin-summary" class="p-4 pb-0"></div>
        <div class="grid md:grid-cols-2 gap-4 p-4">
          <div class="rounded-2xl bg-slate-900 p-4 space-y-3">
            <div id="advisor-checkin-camera" class="w-full aspect-square rounded-xl overflow-hidden bg-black/40" style="display:none"></div>
            <button type="button" id="advisor-checkin-camera-toggle" ${active?'':'disabled'} class="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white text-sm font-bold">📷 เปิดกล้องสแกน QR</button>
            <div id="advisor-checkin-feedback"></div>
          </div>
          <div class="rounded-2xl bg-gray-50 border border-gray-200 p-4 space-y-4">
            <div><label class="text-xs font-bold text-gray-600">กรอกรหัสนักเรียน (กรณีไม่ได้พก QR)</label><div class="flex gap-2 mt-2"><input id="advisor-checkin-code" type="text" inputmode="numeric" placeholder="รหัสนักเรียน" ${active?'':'disabled'} class="flex-1 min-w-0 border border-gray-200 bg-white rounded-xl px-3 py-2.5 text-sm"><button id="advisor-checkin-submit" ${active?'':'disabled'} class="px-4 py-2.5 rounded-xl bg-emerald-600 disabled:bg-gray-400 text-white text-sm font-bold">เช็คชื่อ</button></div></div>
            <div><p class="text-xs font-bold text-gray-600 mb-2">สแกนล่าสุด</p><div id="advisor-checkin-recent" class="space-y-2 max-h-56 overflow-y-auto"><p class="text-xs text-gray-400 text-center py-4">ยังไม่มีรายการใหม่</p></div></div>
          </div>
        </div>
        <div class="border-t border-gray-100 p-4">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div class="inline-flex rounded-xl bg-gray-100 p-1"><button data-checkin-filter="all" class="px-3 py-1.5 rounded-lg text-xs font-bold">ทั้งหมด</button><button data-checkin-filter="came" class="px-3 py-1.5 rounded-lg text-xs font-bold">มาแล้ว</button><button data-checkin-filter="pending" class="px-3 py-1.5 rounded-lg text-xs font-bold">ยังไม่มา</button></div></div>
          <div id="advisor-checkin-list" class="grid md:grid-cols-2 gap-2"></div>
        </div>
      </section>`

    const attOf=id=>attendanceMap[`${id}|${sessionDate}`]
    const renderBanner=()=>{ body.querySelector('#advisor-checkin-banner').innerHTML=statusBannerHtml() }
    const renderSummary=()=>{
      const came=students.filter(s=>attOf(s.id)),pending=students.filter(s=>!attOf(s.id))
      body.querySelector('#advisor-checkin-summary').innerHTML=`<div class="grid grid-cols-3 gap-2"><div class="rounded-xl bg-gray-50 border p-3 text-center"><p class="text-[10px] text-gray-500 font-bold">ทั้งหมด</p><b class="text-xl">${students.length}</b></div><div class="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">มาแล้ว</p><b class="text-xl text-emerald-700">${came.length}</b></div><div class="rounded-xl bg-red-50 border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">ยังไม่มา</p><b class="text-xl text-red-700">${pending.length}</b></div></div>`
    }
    const studentRow=s=>{
      const a=attOf(s.id),photo=s.image_url||s.photo_url
      const fromAdvisor=a?.recorded_source==='homeroom_advisor'
      const sourceLabel=fromAdvisor?'ครูที่ปรึกษา':'ฝ่ายสี'
      // ยกเลิกได้เฉพาะรายการที่ครูที่ปรึกษาบันทึกเอง (กันแก้ข้อมูลที่ฝ่ายสีบันทึกไว้) และ
      // เฉพาะช่วงวันเช็คชื่อเข้าสีวันแรกที่ยังเปิดอยู่เท่านั้น (หรือช่วงย้อนหลังที่เปิดใช้งาน)
      return `<div class="rounded-xl border ${a?'border-emerald-200 bg-emerald-50/50':'border-gray-200 bg-white'} p-3 flex items-center gap-3">${photo?`<img src="${esc(photo)}" class="w-9 h-11 rounded-lg object-cover border bg-gray-100">`:`<div class="w-9 h-11 rounded-lg bg-pink-50 text-pink-600 grid place-items-center font-bold">${esc((s.full_name||'?').charAt(0))}</div>`}<div class="min-w-0 flex-1"><b class="text-sm text-gray-800 truncate block">${esc(s.full_name)}</b><p class="text-[11px] text-gray-500">${esc(s.student_code)} · ${esc(s.main_room||'—')}</p>${a?`<p class="text-[10px] text-emerald-600">${new Date(a.scanned_at).toLocaleString('th-TH',{dateStyle:'medium',timeStyle:'short'})} · ${esc(sourceLabel)}${a.team_color_name?` · สี${esc(a.team_color_name)}`:''}</p>`:''}</div><div class="text-right flex-shrink-0">${a?`<span class="text-xs font-bold text-emerald-700 block">✓ มาแล้ว</span>${active&&fromAdvisor?`<button data-checkin-undo="${s.id}" class="mt-1 text-[10px] text-red-600 hover:underline">ยกเลิก</button>`:''}`:`<span class="text-xs font-bold text-red-600 block">ยังไม่มา</span>${active?`<button data-checkin-manual-mark="${s.id}" class="mt-1 text-[10px] text-indigo-600 hover:underline">มาร์กมาแล้ว</button>`:''}`}</div></div>`
    }
    const renderList=()=>{
      body.querySelectorAll('[data-checkin-filter]').forEach(b=>{const on=b.dataset.checkinFilter===filter;b.className=`px-3 py-1.5 rounded-lg text-xs font-bold ${on?'bg-white text-pink-700 shadow':'text-gray-500'}`})
      const list=students.filter(s=>filter==='all'||(filter==='came'?!!attOf(s.id):!attOf(s.id)))
      const listEl=body.querySelector('#advisor-checkin-list')
      listEl.innerHTML=list.map(studentRow).join('')||'<p class="md:col-span-2 text-sm text-gray-400 text-center py-8">ไม่พบรายการ</p>'
      listEl.querySelectorAll('[data-checkin-manual-mark]').forEach(b=>b.onclick=()=>{
        const s=students.find(x=>String(x.id)===String(b.dataset.checkinManualMark))
        if(s)commitCheckin(s,'manual')
      })
      listEl.querySelectorAll('[data-checkin-undo]').forEach(b=>b.onclick=()=>{
        const s=students.find(x=>String(x.id)===String(b.dataset.checkinUndo))
        if(s)undoCheckin(s)
      })
    }
    const renderRecent=()=>{
      const elR=body.querySelector('#advisor-checkin-recent')
      elR.innerHTML=recentScans.length?recentScans.map(s=>`<div class="bg-white border border-emerald-200 rounded-xl p-2 flex items-center gap-2"><div class="min-w-0 flex-1"><b class="text-xs text-gray-800 truncate block">${esc(s.full_name)}</b><span class="text-[10px] text-gray-500">${esc(s.student_code)}</span></div><span class="text-xs font-bold text-emerald-600">✓ เช็คชื่อแล้ว</span></div>`).join(''):'<p class="text-xs text-gray-400 text-center py-4">ยังไม่มีรายการใหม่</p>'
    }
    const feedback=(ok,title,detail='')=>{body.querySelector('#advisor-checkin-feedback').innerHTML=`<div class="rounded-xl p-3 flex items-center gap-3 ${ok?'bg-emerald-950/70 border border-emerald-700':'bg-red-950/70 border border-red-700'}"><span class="text-lg">${ok?'✅':'❌'}</span><div class="min-w-0"><b class="text-xs block truncate ${ok?'text-emerald-300':'text-red-300'}">${esc(title)}</b><span class="text-[10px] text-slate-300 truncate block">${esc(detail)}</span></div></div>`}
    const showSuccessPopup=(student,teamColorName)=>{
      document.getElementById('advisor-checkin-success')?.remove();const m=document.createElement('div');m.id='advisor-checkin-success';m.className='fixed inset-0 z-[400] bg-black/70 flex items-center justify-center p-6';const photo=student.image_url||student.photo_url;m.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center"><div class="text-5xl mb-2">✅</div>${photo?`<img src="${esc(photo)}" class="w-20 h-24 rounded-xl object-cover border-2 border-emerald-400 mx-auto mb-3 shadow-md">`:''}<h3 class="font-bold text-gray-800 text-lg">${esc(student.full_name)}</h3><p class="text-xs text-gray-500 mb-3">${esc(student.student_code)} · ${esc(student.main_room||'')}</p><p class="text-sm text-emerald-700 font-bold mb-1">เช็คชื่อเข้าสีวันแรกสำเร็จ${sessionDate!==todayStr?` (ย้อนหลังวันที่ ${esc(sessionDate)})`:''}</p>${teamColorName?`<p class="text-2xl font-black" style="color:${esc(_colorSwatchHex(teamColorName))}">สี${esc(teamColorName)}</p>`:''}<button id="advisor-checkin-next" class="w-full py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm mt-4">📷 สแกนคนถัดไป</button><div class="h-1 bg-gray-100 rounded-full mt-4 overflow-hidden"><div id="advisor-checkin-popup-bar" class="h-full bg-emerald-500" style="width:100%"></div></div></div>`;document.body.appendChild(m);const bar=m.querySelector('#advisor-checkin-popup-bar');requestAnimationFrame(()=>{bar.style.transition='width 2.5s linear';bar.style.width='0%'});const close=()=>m.remove(),timer=setTimeout(close,2500);m.querySelector('#advisor-checkin-next').onclick=()=>{clearTimeout(timer);close()};m.onclick=e=>{if(e.target===m){clearTimeout(timer);close()}}
    }
    const commitCheckin=async(student,method)=>{
      if(!active){feedback(false,'ยังไม่อยู่ในช่วงเช็คชื่อเข้าสีวันแรก','');return}
      if(!student){_playScanBeepAtt(false);feedback(false,'ไม่พบนักเรียนในห้องที่ปรึกษา','ตรวจสอบรหัสหรือ QR Code อีกครั้ง');return}
      const {data,error}=await supabase.rpc('advisor_record_sports_attendance_for_student',{p_event:event.id,p_student:student.id,p_method:method,p_date:sessionDate})
      if(error){_playScanBeepAtt(false);feedback(false,'บันทึกไม่สำเร็จ',error.message);return}
      attendanceMap[`${student.id}|${sessionDate}`]={student_id:student.id,session_date:sessionDate,method:data.method,scanned_at:data.scanned_at,recorded_source:'homeroom_advisor',team_color_name:data.team_color_name}
      recentScans.unshift(student);_playScanBeepAtt(true);feedback(true,`เช็คชื่อ ${student.full_name} สำเร็จ`,data.team_color_name?`สี${data.team_color_name}`:'')
      renderSummary();renderList();renderRecent();showSuccessPopup(student,data.team_color_name)
    }
    const undoCheckin=async(student)=>{
      if(!active){feedback(false,'ยังไม่อยู่ในช่วงเช็คชื่อเข้าสีวันแรก','');return}
      const {error}=await supabase.rpc('advisor_undo_sports_attendance_for_student',{p_event:event.id,p_student:student.id,p_date:sessionDate})
      if(error){feedback(false,'ยกเลิกไม่สำเร็จ',error.message);return}
      delete attendanceMap[`${student.id}|${sessionDate}`]
      feedback(true,`ยกเลิกการเช็คชื่อ ${student.full_name} แล้ว`,'')
      renderSummary();renderList()
    }

    body.querySelectorAll('[data-checkin-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.checkinFilter;renderList()})
    body.querySelector('#advisor-checkin-date-select')?.addEventListener('change',async e=>{
      await stopScanner()
      const reader=body.querySelector('#advisor-checkin-camera'),btn=body.querySelector('#advisor-checkin-camera-toggle')
      if(reader)reader.style.display='none'
      if(btn)btn.textContent='📷 เปิดกล้องสแกน QR'
      sessionDate=e.target.value
      active=backfillEnabled?true:(isScheduledToday && sessionDate===todayStr)
      body.querySelector('#advisor-checkin-camera-toggle').disabled=!active
      body.querySelector('#advisor-checkin-code').disabled=!active
      body.querySelector('#advisor-checkin-submit').disabled=!active
      renderBanner();renderSummary();renderList()
    })
    body.querySelector('#advisor-checkin-submit').onclick=()=>{const input=body.querySelector('#advisor-checkin-code'),code=input.value.trim();if(!code)return;commitCheckin(students.find(s=>s.student_code===code),'manual');input.value='';input.focus()}
    body.querySelector('#advisor-checkin-code').addEventListener('keydown',e=>{if(e.key==='Enter')body.querySelector('#advisor-checkin-submit').click()})
    body.querySelector('#advisor-checkin-camera-toggle').onclick=async()=>{
      if(!active)return
      const btn=body.querySelector('#advisor-checkin-camera-toggle'),reader=body.querySelector('#advisor-checkin-camera')
      if(scanning){await stopScanner();reader.style.display='none';btn.textContent='📷 เปิดกล้องสแกน QR';return}
      try{const Html5Qrcode=await _loadHtml5QrcodeAtt();reader.style.display='block';html5Qrcode=new Html5Qrcode('advisor-checkin-camera');let lastCode=null,lastTime=0;await html5Qrcode.start({facingMode:'environment'},{fps:15,aspectRatio:1},decodedText=>{if(decodedText===lastCode&&Date.now()-lastTime<2000)return;lastCode=decodedText;lastTime=Date.now();let code=decodedText;if(code.startsWith('SQ:'))code=code.split(':')[1];const student=students.find(s=>s.student_code===code);_playScanBeepAtt(!!student);commitCheckin(student,'qr')});scanning=true;btn.textContent='⏹ ปิดกล้อง'}catch(e){feedback(false,'เปิดกล้องไม่สำเร็จ',e.message);await stopScanner();reader.style.display='none'}
    }
    renderBanner();renderSummary();renderList();renderRecent()
  } catch(e) { console.error(e); body.innerHTML=`<div class="p-8 text-center text-red-500">โหลดข้อมูลเช็คชื่อเข้าสีวันแรกไม่สำเร็จ: ${esc(e.message||'')}</div>` }
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
    const {event,cfg,shirtSizes}=await context()
    const {data:students,error}=await supabase.from('students').select('id,student_code,full_name,main_room,house_color,image_url,photo_url,sports_shirt_size,sports_shirt_requests(*)').in('main_room',roomNames).eq('is_active',true).order('main_room').order('student_code'); if(error)throw error
    let filter='all'
    const draw=()=>{const rows=(students||[]).filter(s=>{const r=(s.sports_shirt_requests||[]).find(x=>x.event_id===event.id);return filter==='all'||(filter==='none'?!r:r?.status===filter)});body.querySelector('#advisor-rows').innerHTML=rows.map(s=>{const r=(s.sports_shirt_requests||[]).find(x=>x.event_id===event.id),photo=s.image_url||s.photo_url;return `<tr class="border-t"><td class="p-3"><div class="flex items-center gap-3">${photo?`<img src="${esc(photo)}" alt="" class="w-9 h-11 rounded-lg object-cover border border-gray-200 bg-gray-100 flex-shrink-0 shadow-sm" loading="lazy">`:`<div class="w-9 h-11 rounded-lg bg-emerald-50 text-emerald-600 grid place-items-center font-bold flex-shrink-0 border border-gray-200">${esc((s.full_name||'?').charAt(0))}</div>`}<div><b>${esc(s.full_name)}</b><p class="text-xs text-gray-500">${esc(s.student_code)} · ${esc(s.main_room)} · สี${esc(s.house_color||'—')}</p></div></div></td><td class="p-3">${esc(r?.requested_size||'—')}</td><td class="p-3"><select data-size="${s.id}" class="border rounded-lg px-2 py-1">${_filterSizesForRoom(shirtSizes,s.main_room,cfg).map(sz=>`<option value="${esc(sz.code)}" ${sz.code===(r?.confirmed_size||r?.requested_size)?'selected':''}>${esc(sz.code)} (รอบอก ${sz.chest})</option>`).join('')}</select></td><td class="p-3"><span class="text-xs ${statusClass(r?.status)} px-2 py-1 rounded-full">${badge(r?.status)}</span></td><td class="p-3"><button data-confirm="${s.id}" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs">ยืนยัน</button></td></tr>`}).join('')||'<tr><td colspan="5" class="p-8 text-center text-gray-400">ไม่พบข้อมูล</td></tr>';body.querySelectorAll('[data-confirm]').forEach(b=>b.onclick=async()=>{const id=Number(b.dataset.confirm),size=body.querySelector(`[data-size="${id}"]`).value;b.disabled=true;const prevText=b.textContent;b.textContent='กำลังบันทึก...';const {data,error}=await supabase.rpc('advisor_confirm_sports_shirt',{p_event:event.id,p_student:id,p_size:size,p_note:null});if(error){toast(error.message,'error');b.disabled=false;b.textContent=prevText;return}toast('ยืนยันไซซ์แล้ว');const s=students.find(x=>x.id===id);if(s){const arr=s.sports_shirt_requests||(s.sports_shirt_requests=[]);const idx=arr.findIndex(x=>x.event_id===event.id);if(idx>=0)arr[idx]=data;else arr.push(data)}draw()})}
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

async function renderGalleryUploadTypeAdmin(root,event){
  const slot=root.querySelector('#sports-gallery-type-admin')
  if(!slot)return
  slot.innerHTML='<div class="py-8 text-center text-gray-400">กำลังโหลดประเภทภาพกิจกรรม...</div>'
  const {data,error}=await supabase.from('sports_gallery_upload_types').select('*').eq('event_id',event.id).order('event_date',{ascending:true,nullsFirst:false}).order('display_order').order('created_at')
  if(error){
    slot.innerHTML=`<div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">ยังไม่พร้อมใช้งานส่วนจัดการประเภทภาพกิจกรรม — กรุณารันไฟล์ <code>patch_sports_gallery_upload_types.sql</code> ใน Supabase SQL Editor</div>`
    return
  }
  let rows=data||[]
  const render=()=>{
    slot.innerHTML=`
      <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div><h2 class="font-bold">📸 ประเภทภาพกิจกรรม</h2><p class="text-xs text-gray-500 mt-1">เพิ่มชื่อและวันที่สำหรับให้สต๊าฟเลือกตอนอัปโหลด ปิดใช้งานแล้วรูปเดิมยังอยู่ครบ</p></div>
      </div>
      <div class="grid md:grid-cols-[1fr_180px_auto] gap-2 rounded-2xl bg-slate-50 border p-3 mb-4">
        <input id="gallery-type-new-name" class="border rounded-xl px-3 py-2 text-sm bg-white" placeholder="เช่น บรรยากาศวันเข้าสี วันที่ 2">
        <input id="gallery-type-new-date" type="date" class="border rounded-xl px-3 py-2 text-sm bg-white">
        <button id="gallery-type-add" class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">เพิ่มรายการ</button>
      </div>
      <div class="space-y-2">${rows.map(row=>`
        <div class="grid md:grid-cols-[1fr_180px_auto] gap-2 items-center rounded-2xl border p-3 ${row.is_active?'bg-white':'bg-slate-50 opacity-75'}" data-gallery-type-row="${esc(row.id)}">
          <input data-gallery-type-name class="border rounded-xl px-3 py-2 text-sm bg-white" value="${esc(row.name)}">
          <input data-gallery-type-date type="date" class="border rounded-xl px-3 py-2 text-sm bg-white" value="${esc(row.event_date||'')}">
          <div class="flex gap-2 md:justify-end">
            <button data-gallery-type-save="${esc(row.id)}" class="px-3 py-2 rounded-xl border border-indigo-200 text-indigo-700 text-xs font-bold">บันทึกแก้ไข</button>
            <button data-gallery-type-active="${esc(row.id)}" data-active="${row.is_active?'true':'false'}" class="px-3 py-2 rounded-xl text-xs font-bold ${row.is_active?'border border-red-200 text-red-700 bg-red-50':'bg-emerald-600 text-white'}">${row.is_active?'ปิดใช้งาน':'เปิดใช้งาน'}</button>
          </div>
        </div>`).join('')||'<p class="text-sm text-gray-400 text-center py-6">ยังไม่มีประเภทภาพกิจกรรม</p>'}</div>`

    slot.querySelector('#gallery-type-add')?.addEventListener('click',async()=>{
      const name=slot.querySelector('#gallery-type-new-name').value.trim()
      const eventDate=slot.querySelector('#gallery-type-new-date').value||null
      if(!name)return toast('กรุณากรอกชื่อประเภทภาพกิจกรรม','error')
      const btn=slot.querySelector('#gallery-type-add');btn.disabled=true
      const {data:created,error:insertError}=await supabase.from('sports_gallery_upload_types').insert({event_id:event.id,name,event_date:eventDate,is_active:true,display_order:rows.length*10}).select('*').single()
      if(insertError){btn.disabled=false;return toast(insertError.message,'error')}
      rows.push(created);toast('เพิ่มประเภทภาพกิจกรรมแล้ว');render()
    })
    slot.querySelectorAll('[data-gallery-type-save]').forEach(btn=>btn.addEventListener('click',async()=>{
      const rowEl=slot.querySelector(`[data-gallery-type-row="${btn.dataset.galleryTypeSave}"]`)
      const name=rowEl.querySelector('[data-gallery-type-name]').value.trim()
      const eventDate=rowEl.querySelector('[data-gallery-type-date]').value||null
      if(!name)return toast('ชื่อประเภทต้องไม่ว่าง','error')
      btn.disabled=true
      const {data:updated,error:updateError}=await supabase.from('sports_gallery_upload_types').update({name,event_date:eventDate,updated_at:new Date().toISOString()}).eq('id',btn.dataset.galleryTypeSave).select('*').single()
      if(updateError){btn.disabled=false;return toast(updateError.message,'error')}
      rows=rows.map(row=>row.id===updated.id?updated:row);toast('บันทึกการแก้ไขแล้ว');render()
    }))
    slot.querySelectorAll('[data-gallery-type-active]').forEach(btn=>btn.addEventListener('click',async()=>{
      const next=btn.dataset.active!=='true';btn.disabled=true
      const {data:updated,error:updateError}=await supabase.from('sports_gallery_upload_types').update({is_active:next,updated_at:new Date().toISOString()}).eq('id',btn.dataset.galleryTypeActive).select('*').single()
      if(updateError){btn.disabled=false;return toast(updateError.message,'error')}
      rows=rows.map(row=>row.id===updated.id?updated:row);toast(next?'เปิดใช้งานรายการแล้ว':'ปิดใช้งานรายการแล้ว');render()
    }))
  }
  render()
}

export async function renderShirtSummary() {
  const el=main(); el.innerHTML='<div class="py-16 text-center">กำลังสรุปยอด...</div>'
  try { const {event,cfg,shirtSizes}=await context()
    let sizeRows=shirtSizes.map(sz=>({...sz}))
    const {data:teacherSizesRow}=await supabase.from('settings').select('value').eq('key','teacher_shirt_sizes').maybeSingle()
    let teacherSizeRows=(Array.isArray(teacherSizesRow?.value)&&teacherSizesRow.value.length?teacherSizesRow.value:DEFAULT_SHIRT_SIZES).map(sz=>({...sz}))
    const profileId=await getEffectiveProfileId(supabase); const {data:profile}=await supabase.from('profiles').select('role,is_also_admin').eq('id',profileId).maybeSingle(); const isAdmin=profile?.role==='admin'||profile?.is_also_admin===true||await _hasHouseColorAdminPosition(profileId)
    if(cfg?.shirt_summary_enabled===false&&!isAdmin){el.innerHTML='<div class="text-center py-16">แอดมินปิดหน้าสรุปยอดไว้</div>';return}
    const {data:myTeamMemberships}=await supabase.from('sports_team_memberships').select('team_color_id,role,permissions').eq('event_id',event.id).eq('profile_id',profileId).eq('is_active',true)
    const canManageTeamStaff=isAdmin||(myTeamMemberships||[]).some(m=>m.role==='lead_teacher')
    const [{data:colors},reqs,{data:approvals}]=await Promise.all([supabase.from('team_colors').select('id,name,hex_color').eq('event_id',event.id).order('display_order'),_fetchAllRows('sports_shirt_requests', q=>q.select('status,requested_size,confirmed_size,students(full_name,student_code,main_room,house_color)').eq('event_id',event.id)),isAdmin?supabase.from('sports_team_identity_requests').select('*,team_colors(name,logo_url)').eq('event_id',event.id).eq('status','pending_admin'):Promise.resolve({data:[]})])
    const sizes=shirtSizes.map(s=>s.code); const confirmed=(reqs||[]).filter(r=>['confirmed','advisor_updated'].includes(r.status));
    el.innerHTML=`<div class="max-w-7xl mx-auto space-y-5"><div class="flex justify-between"><div><h1 class="text-2xl font-bold">📊 สรุปยอดเสื้อกีฬาสี</h1><p class="text-sm text-gray-500">ยอดผลิตนับเฉพาะรายการที่ครูยืนยันแล้ว</p></div><button id="shirt-export" class="px-4 py-2 bg-emerald-600 text-white rounded-xl">ส่งออก CSV</button></div>${isAdmin?`<section class="bg-white border border-indigo-100 rounded-2xl p-4"><div class="flex items-center justify-between gap-3 mb-3"><div><h2 class="font-bold">⚙️ การเปิดใช้งาน</h2><p class="text-xs text-gray-500 mt-1">กดปุ่มในแต่ละการ์ดเพื่อเปลี่ยนสถานะ แล้วบันทึก</p></div><button id="cfg-save" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">บันทึกการตั้งค่า</button></div><div class="grid md:grid-cols-4 gap-3">${actionCard('shirt_request_enabled','รับจำนงไซซ์เสื้อ','นักเรียนจะเห็นปุ่มส่งไซซ์ และรอครูที่ปรึกษายืนยัน',!!cfg?.shirt_request_enabled)}${actionCard('shirt_summary_enabled','หน้าสรุปยอดเสื้อ','ผู้รับผิดชอบสามารถดูยอดสีและไซซ์เสื้อได้',!!cfg?.shirt_summary_enabled)}${actionCard('team_workspace_enabled','จัดการสีของฉัน','ครูประจำสีและสต๊าฟเข้าหน้าจัดการสีได้',!!cfg?.team_workspace_enabled)}${actionCard('shirt_vote_enabled','โหวตแบบเสื้อกีฬาสี','นักเรียนเปิดหน้าโหวตดีไซน์เสื้อได้',!!cfg?.shirt_vote_enabled)}${actionCard('teacher_shirt_request_enabled','รับแจ้งไซซ์เสื้อคุณครู','คุณครูจะเห็นปุ่มแจ้งไซซ์ในหน้าภาพรวม แยกจากของนักเรียน',!!cfg?.teacher_shirt_request_enabled)}</div><div class="grid md:grid-cols-2 gap-3 mt-3"><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">ค่าบำรุงสี (บาท/คน)</h3><p class="text-xs text-gray-500 mt-1">จำนวนเงินเริ่มต้นที่จะบันทึกทุกครั้งที่สแกน QR เก็บค่าบำรุง</p><input id="cfg-dues-amount" type="number" min="0" step="1" value="${Number(cfg?.dues_amount ?? 30)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div><div class="rounded-2xl border p-4 bg-slate-50 border-slate-200"><h3 class="font-bold text-sm text-slate-800">เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (%)</h3><p class="text-xs text-gray-500 mt-1">ค่าเริ่มต้นทุกสี — พ่อสี/แม่สีแต่ละคนตั้งค่าเฉพาะสีตัวเองทับได้ในหน้าจัดการสี</p><input id="cfg-cert-threshold" type="number" min="0" max="100" step="1" value="${Number(cfg?.cert_attendance_threshold_pct ?? 80)}" class="mt-3 w-full border rounded-xl px-3 py-2 text-sm"></div></div></section>`:''}<div class="grid grid-cols-3 gap-3"><div class="bg-white border rounded-2xl p-4"><p class="text-xs text-gray-500">ส่งข้อมูล</p><b class="text-2xl">${reqs?.length||0}</b></div><div class="bg-amber-50 rounded-2xl p-4"><p class="text-xs text-amber-700">รอยืนยัน</p><b class="text-2xl">${(reqs||[]).filter(x=>x.status==='pending').length}</b></div><div class="bg-emerald-50 rounded-2xl p-4"><p class="text-xs text-emerald-700">ยืนยันแล้ว</p><b class="text-2xl">${confirmed.length}</b></div></div><div class="bg-white border rounded-2xl overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">สี</th>${sizes.map(s=>`<th>${esc(s)}</th>`).join('')}<th>รวม</th></tr></thead><tbody>${(colors||[]).map(c=>{const rr=confirmed.filter(r=>r.students?.house_color===c.name);return `<tr class="border-t"><td class="p-3 font-bold" style="color:${c.hex_color}">สี${esc(c.name)}</td>${sizes.map(s=>`<td class="text-center">${rr.filter(r=>r.confirmed_size===s).length}</td>`).join('')}<td class="text-center font-bold">${rr.length}</td></tr>`}).join('')}</tbody></table></div>${canManageTeamStaff?`<section id="sports-team-membership-admin" class="bg-white border rounded-2xl p-5"><div class="py-8 text-center text-gray-400">กำลังโหลดหน้ามอบหมายผู้ดูแลสี...</div></section>`:''}${isAdmin?`<section class="bg-white border rounded-2xl p-5"><h2 class="font-bold mb-3">🎨 คิวอนุมัติอัตลักษณ์ขั้นสุดท้าย</h2>${approvals?.map(a=>`<div class="p-3 bg-gray-50 rounded-xl flex items-center gap-3 mb-2">${a.proposed_logo_url?`<img src="${esc(a.proposed_logo_url)}" class="w-12 h-12 rounded-full object-cover">`:''}<div class="flex-1"><b>ทีมสี${esc(a.team_colors?.name)}</b><p class="text-xs text-gray-500">${esc(a.proposed_name||a.proposed_motto||'เปลี่ยนโลโก้/อัตลักษณ์')}</p></div><button data-review="${a.id}" data-decision="reject" class="px-3 py-1.5 border rounded-lg text-red-600">ปฏิเสธ</button><button data-review="${a.id}" data-decision="approve" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg">อนุมัติ</button></div>`).join('')||'<p class="text-sm text-gray-400">ไม่มีคำขอรออนุมัติ</p>'}</section>`:''}</div>`
    if(isAdmin){
      const galleryTypeSection=document.createElement('section')
      galleryTypeSection.id='sports-gallery-type-admin'
      galleryTypeSection.className='bg-white border rounded-2xl p-5'
      const membershipSection=el.querySelector('#sports-team-membership-admin')
      if(membershipSection)membershipSection.before(galleryTypeSection)
      else el.querySelector('.max-w-7xl')?.appendChild(galleryTypeSection)
      await renderGalleryUploadTypeAdmin(el,event)
      const settingsGrid=el.querySelector('#cfg-dues-amount')?.closest('.grid')
      settingsGrid?.insertAdjacentHTML('beforeend',`<div class="rounded-2xl border p-4 bg-violet-50 border-violet-200"><h3 class="font-bold text-sm text-violet-900">ค่าเสื้อกีฬาสี (บาท/คน)</h3><p class="text-xs text-violet-700 mt-1">ยอดที่ครูที่ปรึกษาศาสนาจะบันทึกเมื่อสแกนรับชำระ แยกชาย/หญิงเพราะราคาต่างกัน ตั้งเป็น 0 เพื่อปิดรับชำระของเพศนั้นชั่วคราว</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-violet-700">👦 ชาย</span><input id="cfg-shirt-payment-amount-m" type="number" min="0" step="1" value="${Number(cfg?.shirt_payment_amount_m||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-violet-700">👧 หญิง</span><input id="cfg-shirt-payment-amount-w" type="number" min="0" step="1" value="${Number(cfg?.shirt_payment_amount_w||0)}" class="mt-1 w-full border border-violet-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`)
      el.querySelector('#cfg-shirt-payment-amount-m')?.addEventListener('input',e=>{renderShirtSummary.pendingCfg={...(renderShirtSummary.pendingCfg||{}),shirt_payment_amount_m:Math.max(0,Number(e.target.value)||0)}})
      el.querySelector('#cfg-shirt-payment-amount-w')?.addEventListener('input',e=>{renderShirtSummary.pendingCfg={...(renderShirtSummary.pendingCfg||{}),shirt_payment_amount_w:Math.max(0,Number(e.target.value)||0)}})
      settingsGrid?.insertAdjacentHTML('beforeend',`<div class="rounded-2xl border p-4 bg-teal-50 border-teal-200"><h3 class="font-bold text-sm text-teal-900">📏 ไซซ์เริ่มต้นขั้นต่ำ</h3><p class="text-xs text-teal-700 mt-1">ไซซ์ที่เล็กกว่าที่เลือกจะถูกซ่อนจากตัวเลือกของกลุ่มนั้นอัตโนมัติ (เฉพาะตอนนักเรียนเลือกไซซ์เอง — ตารางสรุปยอดยังโชว์ครบทุกไซซ์)</p><div class="grid grid-cols-2 gap-2 mt-3"><label class="block"><span class="text-xs text-teal-700">ม.ต้น (ม.1-3)</span><select id="cfg-shirt-size-min-junior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${shirtSizes.map(s=>`<option value="${esc(s.code)}" ${cfg?.shirt_size_min_junior===s.code?'selected':''}>${esc(s.code)}</option>`).join('')}</select></label><label class="block"><span class="text-xs text-teal-700">ม.ปลาย/ปวช (ม.4-6, ปวช.1-3)</span><select id="cfg-shirt-size-min-senior" class="mt-1 w-full border border-teal-200 rounded-xl px-3 py-2 text-sm bg-white"><option value="">ไม่จำกัด</option>${shirtSizes.map(s=>`<option value="${esc(s.code)}" ${(cfg?.shirt_size_min_senior||'M')===s.code?'selected':''}>${esc(s.code)}</option>`).join('')}</select></label></div></div>`)
      settingsGrid?.insertAdjacentHTML('beforeend',`<div class="rounded-2xl border p-4 bg-sky-50 border-sky-200"><h3 class="font-bold text-sm text-sky-900">🎽 วันเช็คชื่อเข้าสีวันแรก</h3><p class="text-xs text-sky-700 mt-1">เฉพาะวันนี้ ให้ครูที่ปรึกษา (สามัญ/ศาสนา) เช็คชื่อนักเรียนแทนฝ่ายสี (ฝ่ายสีเห็นข้อมูลอ่านอย่างเดียวชั่วคราว) เว้นว่างเพื่อปิดระบบนี้</p><input id="cfg-advisor-checkin-date" type="date" value="${esc(cfg?.advisor_checkin_date||'')}" class="mt-3 w-full border border-sky-200 rounded-xl px-3 py-2 text-sm bg-white"><label class="flex items-center gap-2 mt-3 text-xs text-sky-800 cursor-pointer"><input id="cfg-advisor-checkin-backfill" type="checkbox" ${cfg?.advisor_checkin_backfill_enabled?'checked':''} class="w-4 h-4">เปิดให้ครูที่ปรึกษาเช็คชื่อ<b>ย้อนหลัง</b>ได้ (เลือกวันที่จากปฏิทินปฏิบัติงาน ไม่จำกัดแค่วันที่ตั้งไว้ด้านบน — ใช้แก้ห้องที่ครูลา/ตกหล่น)</label></div>`)
      settingsGrid?.insertAdjacentHTML('beforeend',`<div class="rounded-2xl border p-4 bg-emerald-50 border-emerald-200 md:col-span-2"><h3 class="font-bold text-sm text-emerald-900">🏃 ช่วงเวลารับสมัครและแก้ไขข้อมูลนักกีฬา</h3><p class="text-xs text-emerald-700 mt-1">หลังปิดรับสมัคร สามารถเปิดช่วงแก้ไขข้อมูลเดิมให้ครูและสต๊าฟแต่ละสีได้ โดยแก้ได้เฉพาะนักกีฬาของสีตนเอง เช่น หมายเลขเสื้อ ไม่สามารถเพิ่มหรือถอนรายชื่อผ่านช่องทางนี้</p><div class="grid md:grid-cols-3 gap-2 mt-3"><label class="block"><span class="text-xs text-emerald-800">ปิดรับสมัคร</span><input id="cfg-athlete-registration-closes" type="datetime-local" value="${esc(toDatetimeLocalValue(cfg?.athlete_registration_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">เปิดให้ฝ่ายสีแก้ไข</span><input id="cfg-athlete-edit-opens" type="datetime-local" value="${esc(toDatetimeLocalValue(cfg?.athlete_edit_opens_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label><label class="block"><span class="text-xs text-emerald-800">ปิดการแก้ไข</span><input id="cfg-athlete-edit-closes" type="datetime-local" value="${esc(toDatetimeLocalValue(cfg?.athlete_edit_closes_at))}" class="mt-1 w-full border border-emerald-200 rounded-xl px-3 py-2 text-sm bg-white"></label></div></div>`)
      // ไซซ์เสื้อที่เปิดให้แจ้งได้ — บันทึกในตาราง settings (key='shirt_sizes') ตารางเดียวกับที่
      // AZIZGAMES ใช้ ตั้งค่าฝั่งไหนก็ได้ อีกฝั่งเห็นอัตโนมัติ ไม่ต้องตั้งซ้ำ 2 ที่
      settingsGrid?.insertAdjacentHTML('afterend',`<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👕 ไซซ์เสื้อที่เปิดให้แจ้งได้</h3><button id="shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border">+ เพิ่มไซซ์</button></div><p class="text-xs text-gray-500 mb-3">ตั้งค่าที่นี่หรือฝั่ง AZIZGAMES ก็ได้ บันทึกในตารางเดียวกัน อีกฝั่งเห็นอัตโนมัติ — กด "บันทึกการตั้งค่า" ด้านบนเพื่อบันทึกด้วย</p><div id="shirt-size-rows" class="space-y-2"></div></div>`)
      const drawSizeRows=()=>{
        const box=el.querySelector('#shirt-size-rows'); if(!box) return
        box.innerHTML=sizeRows.map((sz,i)=>`<div class="flex items-center gap-2" data-size-row="${i}"><input data-size-code value="${esc(sz.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-size-chest type="number" min="0" value="${esc(sz.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-size-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join('')
        box.querySelectorAll('[data-size-row]').forEach(rowEl=>{
          const i=Number(rowEl.dataset.sizeRow)
          rowEl.querySelector('[data-size-code]').addEventListener('input',e=>{sizeRows[i].code=e.target.value})
          rowEl.querySelector('[data-size-chest]').addEventListener('input',e=>{sizeRows[i].chest=e.target.value})
          rowEl.querySelector('[data-size-remove]').addEventListener('click',()=>{sizeRows.splice(i,1);drawSizeRows()})
        })
      }
      drawSizeRows()
      el.querySelector('#shirt-size-add').addEventListener('click',()=>{sizeRows.push({code:'',chest:''});drawSizeRows()})
      // ไซซ์เสื้อคุณครู — ติ๊ก "ใช้ตารางเดียวกับนักเรียน" (ค่าเริ่มต้น) หรือปลดติ๊กเพื่อแก้ตารางแยกของครูเอง
      el.querySelector('#shirt-size-rows')?.closest('div.rounded-2xl')?.insertAdjacentHTML('afterend',`<div class="rounded-2xl border p-4 bg-white border-slate-200 mt-3"><div class="flex items-center justify-between gap-3 mb-1"><h3 class="font-bold text-sm text-slate-800">👔 ไซซ์เสื้อคุณครู</h3><button id="teacher-shirt-size-add" type="button" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border hidden">+ เพิ่มไซซ์</button></div><label class="flex items-center gap-2 text-xs text-gray-600 mb-3"><input id="teacher-shirt-use-student-sizes" type="checkbox" ${cfg?.teacher_shirt_use_student_sizes!==false?'checked':''} class="w-4 h-4">ใช้ตารางไซซ์เดียวกับนักเรียน (ปลดติ๊กเพื่อตั้งไซซ์แยกสำหรับครู)</label><div id="teacher-shirt-size-rows" class="space-y-2"></div></div>`)
      const drawTeacherSizeRows=()=>{
        const box=el.querySelector('#teacher-shirt-size-rows'); if(!box) return
        box.innerHTML=teacherSizeRows.map((sz,i)=>`<div class="flex items-center gap-2" data-tsize-row="${i}"><input data-tsize-code value="${esc(sz.code)}" placeholder="รหัสไซซ์ เช่น M" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><input data-tsize-chest type="number" min="0" value="${esc(sz.chest)}" placeholder="รอบอก" class="w-24 border rounded-lg px-2 py-1.5 text-xs"><span class="text-xs text-gray-400 flex-1">นิ้ว (รอบอก)</span><button type="button" data-tsize-remove class="w-8 h-8 rounded-lg border text-red-600 flex items-center justify-center flex-shrink-0">✕</button></div>`).join('')
        box.querySelectorAll('[data-tsize-row]').forEach(rowEl=>{
          const i=Number(rowEl.dataset.tsizeRow)
          rowEl.querySelector('[data-tsize-code]').addEventListener('input',e=>{teacherSizeRows[i].code=e.target.value})
          rowEl.querySelector('[data-tsize-chest]').addEventListener('input',e=>{teacherSizeRows[i].chest=e.target.value})
          rowEl.querySelector('[data-tsize-remove]').addEventListener('click',()=>{teacherSizeRows.splice(i,1);drawTeacherSizeRows()})
        })
      }
      const syncTeacherSizeVisibility=()=>{
        const useStudent=el.querySelector('#teacher-shirt-use-student-sizes')?.checked
        el.querySelector('#teacher-shirt-size-rows').style.display=useStudent?'none':''
        el.querySelector('#teacher-shirt-size-add').classList.toggle('hidden',!!useStudent)
      }
      drawTeacherSizeRows()
      syncTeacherSizeVisibility()
      el.querySelector('#teacher-shirt-use-student-sizes').addEventListener('change',syncTeacherSizeVisibility)
      el.querySelector('#teacher-shirt-size-add').addEventListener('click',()=>{teacherSizeRows.push({code:'',chest:''});drawTeacherSizeRows()})
    }
    el.querySelector('#shirt-export').onclick=()=>{const rows=['รหัส,ชื่อ,ห้อง,สี,ไซซ์,สถานะ',...confirmed.map(r=>[r.students?.student_code,r.students?.full_name,r.students?.main_room,r.students?.house_color,r.confirmed_size,r.status].map(x=>`"${String(x||'').replaceAll('"','""')}"`).join(','))];const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+rows.join('\n')],{type:'text/csv'}));a.download='sports-shirt-summary.csv';a.click();URL.revokeObjectURL(a.href)}
    el.querySelectorAll('[data-cfg]').forEach(b=>b.addEventListener('click',()=>{const next=b.dataset.enabled!=='true';b.dataset.enabled=next?'true':'false';renderShirtSummary.pendingCfg={...(renderShirtSummary.pendingCfg||{}),[b.dataset.cfg]:next};b.textContent=next?'ปิดใช้งาน':'เปิดใช้งาน';toast(`เปลี่ยนสถานะแล้ว กดบันทึกเพื่อยืนยัน`)}))
    el.querySelector('#cfg-save')?.addEventListener('click',async()=>{
      const dateValue=id=>{const v=el.querySelector(id)?.value;return v?new Date(v).toISOString():null}
      const registrationCloses=dateValue('#cfg-athlete-registration-closes')
      const editOpens=dateValue('#cfg-athlete-edit-opens')
      const editCloses=dateValue('#cfg-athlete-edit-closes')
      if(editOpens&&registrationCloses&&new Date(editOpens)<new Date(registrationCloses))return toast('เวลาเปิดแก้ไขต้องไม่ก่อนเวลาปิดรับสมัคร','error')
      if(editCloses&&editOpens&&new Date(editCloses)<=new Date(editOpens))return toast('เวลาปิดแก้ไขต้องอยู่หลังเวลาเปิดแก้ไข','error')
      const payload={
        shirt_request_enabled:!!cfg?.shirt_request_enabled,shirt_summary_enabled:!!cfg?.shirt_summary_enabled,
        team_workspace_enabled:!!cfg?.team_workspace_enabled,shirt_vote_enabled:!!cfg?.shirt_vote_enabled,
        teacher_shirt_request_enabled:!!cfg?.teacher_shirt_request_enabled,
        teacher_shirt_use_student_sizes:el.querySelector('#teacher-shirt-use-student-sizes')?.checked!==false,
        dues_amount:Number(el.querySelector('#cfg-dues-amount')?.value)||30,
        cert_attendance_threshold_pct:Number(el.querySelector('#cfg-cert-threshold')?.value)||80,
        advisor_checkin_date:el.querySelector('#cfg-advisor-checkin-date')?.value||null,
        advisor_checkin_backfill_enabled:!!el.querySelector('#cfg-advisor-checkin-backfill')?.checked,
        shirt_size_min_junior:el.querySelector('#cfg-shirt-size-min-junior')?.value||null,
        shirt_size_min_senior:el.querySelector('#cfg-shirt-size-min-senior')?.value||null,
        athlete_registration_closes_at:registrationCloses,athlete_edit_opens_at:editOpens,athlete_edit_closes_at:editCloses,
        ...(renderShirtSummary.pendingCfg||{})
      }
      const {error}=await supabase.from('sports_portal_settings').update({...payload,updated_at:new Date().toISOString()}).eq('event_id',event.id)
      if(error)return toast(error.message,'error')
      const cleanedSizes=sizeRows.filter(sz=>String(sz.code||'').trim()).map(sz=>({code:String(sz.code).trim(),chest:Number(sz.chest)||0}))
      if(cleanedSizes.length){try{await updateShirtSizes(cleanedSizes)}catch(e){toast('บันทึกไซซ์เสื้อไม่สำเร็จ: '+e.message,'error')}}
      const cleanedTeacherSizes=teacherSizeRows.filter(sz=>String(sz.code||'').trim()).map(sz=>({code:String(sz.code).trim(),chest:Number(sz.chest)||0}))
      if(cleanedTeacherSizes.length){try{await updateTeacherShirtSizes(cleanedTeacherSizes)}catch(e){toast('บันทึกไซซ์เสื้อครูไม่สำเร็จ: '+e.message,'error')}}
      try{await syncAzizPublicShirtButton(payload.shirt_request_enabled)}catch(e){console.warn('Unable to sync AZIZGAMES shirt button',e)}
      renderShirtSummary.pendingCfg={};toast('บันทึกการเปิดใช้งานแล้ว');renderShirtSummary()
    })
    el.querySelectorAll('[data-review]').forEach(b=>b.onclick=async()=>{const {error}=await supabase.rpc('review_team_identity',{p_request:b.dataset.review,p_decision:b.dataset.decision,p_comment:null});if(error)return toast(error.message,'error');toast('บันทึกผลตรวจสอบแล้ว');renderShirtSummary()})
    if(canManageTeamStaff) renderTeamMembershipAdmin(el,event,colors||[],{isAdmin,myTeamMemberships:myTeamMemberships||[]})
  }catch(e){console.error(e);el.innerHTML=missing()}
}

// ดรอปดาวน์แบบพิมพ์ค้นหา ใช้ซ้ำได้ทั่วไป — items ต้องเป็น [{id,label,sub,photo}] ที่ normalize มาแล้ว
// (ไม่ใช้ select ธรรมดาเวลาตัวเลือกเยอะ ตามธรรมเนียมเดิมของระบบ)
function _createPickerSelect({wrap,items,placeholder='ค้นหา...',emptyLabel='-- เลือก --',photoClass='w-7 h-9 rounded object-cover flex-shrink-0 border',onChange=null}) {
  let _selected=null,_open=false
  wrap.style.position='relative'
  wrap.innerHTML=`
    <div class="ps-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-indigo-300 transition" tabindex="0">
      <span class="ps-display flex-1 text-sm text-gray-400 truncate">${esc(emptyLabel)}</span>
      <svg class="ps-arrow w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
    </div>
    <div class="ps-dropdown absolute left-0 right-0 z-[9999] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hidden">
      <div class="p-2 border-b border-gray-100"><input class="ps-search w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="${esc(placeholder)}" autocomplete="off"></div>
      <ul class="ps-list max-h-52 overflow-y-auto"></ul>
    </div>`
  const inputEl=wrap.querySelector('.ps-input'),dropdown=wrap.querySelector('.ps-dropdown'),searchEl=wrap.querySelector('.ps-search'),listEl=wrap.querySelector('.ps-list'),displayEl=wrap.querySelector('.ps-display'),arrowEl=wrap.querySelector('.ps-arrow')
  function _renderList(q=''){
    const lq=q.toLowerCase()
    const filtered=items.filter(it=>!q||(it.label||'').toLowerCase().includes(lq)||(it.sub||'').toLowerCase().includes(lq))
    listEl.innerHTML=filtered.length?filtered.map(it=>{
      const active=_selected?.id===it.id
      return `<li data-id="${esc(String(it.id))}" class="ps-opt px-3 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2 ${active?'bg-indigo-50 font-semibold text-indigo-700':'text-gray-700'}">
        ${it.photo?`<img src="${esc(it.photo)}" class="${photoClass}">`:''}
        <span class="truncate">${esc(it.label)}${it.sub?` <span class="text-xs text-gray-400 font-mono">${esc(it.sub)}</span>`:''}</span>
      </li>`
    }).join(''):`<li class="px-4 py-3 text-sm text-gray-400 text-center">ไม่พบรายการ</li>`
    listEl.querySelectorAll('.ps-opt').forEach(li=>li.addEventListener('mousedown',e=>{
      e.preventDefault()
      _selected=items.find(it=>String(it.id)===li.dataset.id)||null
      displayEl.textContent=_selected?_selected.label:emptyLabel
      displayEl.classList.toggle('text-gray-400',!_selected)
      displayEl.classList.toggle('text-gray-800',!!_selected)
      _close()
      onChange?.(_selected?.id??null)
    }))
  }
  function _open_(){_open=true;dropdown.classList.remove('hidden');arrowEl.style.transform='rotate(180deg)';searchEl.value='';_renderList();setTimeout(()=>searchEl.focus(),50)}
  function _close(){_open=false;dropdown.classList.add('hidden');arrowEl.style.transform=''}
  inputEl.addEventListener('click',()=>_open?_close():_open_())
  inputEl.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();_open?_close():_open_()}})
  searchEl.addEventListener('input',()=>_renderList(searchEl.value.trim()))
  document.addEventListener('mousedown',e=>{if(_open&&!wrap.contains(e.target))_close()},true)
  return {getValue:()=>_selected?.id??null,reset:()=>{_selected=null;displayEl.textContent=emptyLabel;displayEl.classList.add('text-gray-400');displayEl.classList.remove('text-gray-800')}}
}

// มอบหมายรายการแข่งขันให้สตาฟรับผิดชอบเฉพาะคน — คนละกลไกกับ sports.responsible_teacher_id เดิม
// (แอดมินระบบตั้งได้คนเดียวต่อรายการทั้งโรงเรียน) อันนี้ระดับทีมสี มอบหมายได้เองหลายคน/หลายรายการ
// ผ่านสิทธิ์ "มอบหมายรายการแข่งขัน" (comp_assign) ที่เปิด/ปิดแยกได้ต่อสมาชิกแต่ละคน
async function renderCompetitionAssignmentSection(root,{event,c,m,competitions,canManage}) {
  const slot=root.querySelector('#sports-comp-assign'); if(!slot)return
  const [{data:staffRows},{data:assignments}] = await Promise.all([
    supabase.from('sports_team_memberships').select('id,student_id,role,students(id,full_name,student_code,image_url,photo_url)').eq('team_color_id',c.id).eq('is_active',true).not('student_id','is',null),
    supabase.from('sports_team_competition_assignments').select('id,sport_id,student_id,sports(name),students(full_name,student_code,image_url,photo_url)').eq('team_color_id',c.id).order('assigned_at',{ascending:false}),
  ])
  const staffList=staffRows||[], assignList=assignments||[]
  // ทีมสีหนึ่งมีเพศเดียวเสมอ (4 สีต่อเพศ) — กรองรายการแข่งขันให้ตรงเพศทีมนี้ (หรือ Coed) เท่านั้น
  const sportsForTeam=(competitions||[]).filter(s=>!s.gender||s.gender==='Coed'||s.gender===c.gender)
  slot.innerHTML=`
    <div class="mb-4"><h2 class="font-bold">🎯 มอบหมายรายการแข่งขันให้สตาฟ</h2><p class="text-xs muted mt-1">กำหนดว่าสตาฟคนไหนรับผิดชอบรายการไหน — คนที่ถูกมอบหมายจะเห็นเมนู "รายการของฉัน" ในหน้าแข่งขันของ AZIZGAMES พร้อมปุ่มอัปโหลดรูปตรงรายการนั้นได้เลย</p></div>
    ${canManage?`<div class="team-sub rounded-2xl p-4 mb-4 grid sm:grid-cols-3 gap-3 items-end">
      <div><label class="text-xs font-bold muted">รายการแข่งขัน</label><div id="comp-assign-sport-wrap" class="mt-1"></div></div>
      <div><label class="text-xs font-bold muted">สตาฟที่รับผิดชอบ</label><div id="comp-assign-student-wrap" class="mt-1"></div></div>
      <button id="comp-assign-btn" class="px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold">➕ มอบหมาย</button>
    </div>`:''}
    <div class="space-y-2">
      ${assignList.map(a=>{const photo=a.students?.image_url||a.students?.photo_url;return `<div class="team-sub rounded-xl p-3 flex items-center gap-3">
        ${photo?`<img src="${esc(photo)}" class="w-9 h-11 rounded-lg object-cover border flex-shrink-0">`:`<div class="w-9 h-11 rounded-lg bg-gray-200 flex-shrink-0 grid place-items-center text-lg">👤</div>`}
        <div class="flex-1 min-w-0"><b>${esc(a.sports?.name||'—')}</b><p class="text-xs muted truncate">${esc(a.students?.full_name||'—')} (${esc(a.students?.student_code||'')})</p></div>
        ${canManage?`<button data-remove-assign="${a.id}" class="px-3 py-1.5 border rounded-lg text-red-500 text-xs flex-shrink-0">ยกเลิก</button>`:''}
      </div>`}).join('')||'<p class="text-sm muted">ยังไม่มีการมอบหมาย</p>'}
    </div>`
  let sportPicker=null,staffPicker=null
  if(canManage){
    sportPicker=_createPickerSelect({wrap:slot.querySelector('#comp-assign-sport-wrap'),items:sportsForTeam.map(s=>({id:s.id,label:s.name,photo:sportIconUrl(s)})),placeholder:'พิมพ์ชื่อรายการ...',emptyLabel:'-- เลือกรายการ --',photoClass:'w-7 h-7 object-contain flex-shrink-0'})
    staffPicker=_createPickerSelect({wrap:slot.querySelector('#comp-assign-student-wrap'),items:staffList.map(s=>({id:s.student_id,label:s.students?.full_name||'—',sub:s.students?.student_code||'',photo:s.students?.image_url||s.students?.photo_url})),placeholder:'พิมพ์ชื่อหรือรหัสนักเรียน...',emptyLabel:'-- เลือกสตาฟ --'})
  }
  slot.querySelector('#comp-assign-btn')?.addEventListener('click',async()=>{
    const sportId=sportPicker?.getValue()
    const studentId=staffPicker?.getValue()
    if(!sportId||!studentId){toast('เลือกทั้งรายการแข่งขันและสตาฟก่อน','warning');return}
    const user=await getEffectiveUser(supabase)
    const {error}=await supabase.from('sports_team_competition_assignments').upsert({
      event_id:event.id,team_color_id:c.id,sport_id:sportId,student_id:Number(studentId),assigned_by:user?.id||null,
    },{onConflict:'team_color_id,sport_id,student_id'})
    if(error)return toast(error.message,'error')
    toast('มอบหมายแล้ว')
    renderCompetitionAssignmentSection(root,{event,c,m,competitions,canManage})
  })
  slot.querySelectorAll('[data-remove-assign]').forEach(b=>b.addEventListener('click',async()=>{
    if(!confirm('ยกเลิกการมอบหมายนี้?'))return
    const {error}=await supabase.from('sports_team_competition_assignments').delete().eq('id',b.dataset.removeAssign)
    if(error)return toast(error.message,'error')
    toast('ยกเลิกแล้ว')
    renderCompetitionAssignmentSection(root,{event,c,m,competitions,canManage})
  }))
}

async function renderTeamMembershipAdmin(root,event,colors=[],access={isAdmin:false,myTeamMemberships:[]}) {
  const slot=root.querySelector('#sports-team-membership-admin'); if(!slot)return
  const roleLabels={lead_teacher:'หัวหน้าครูประจำสี',teacher:'ครูประจำสี',staff_lead:'หัวหน้านักเรียนสต๊าฟสี',staff:'นักเรียนสต๊าฟสี'}
  const permLabels={members:'สมาชิก',registrations:'ลงทะเบียนกีฬา',announcements:'ประกาศ',tasks:'งานของสี',shirt_summary:'สรุปเสื้อ',attendance:'เช็คชื่อ',dues:'เก็บค่าบำรุงสี',expenses:'บันทึกรายรับ-รายจ่ายสี',comp_assign:'มอบหมายรายการแข่งขัน'}
  const isStaffLevel=s=>/^\s*(?:ม\.?\s*[456]|ปวช\.?\s*[123])(?:\s*\/|\s|$)/i.test(String(s?.main_room||''))
  const leadTeamIds=new Set((access.myTeamMemberships||[]).filter(m=>m.role==='lead_teacher').map(m=>m.team_color_id))
  const manageableColors=access.isAdmin?colors:colors.filter(c=>leadTeamIds.has(c.id))
  const canAssignTeachers=!!access.isAdmin
  if(!manageableColors.length){slot.innerHTML='<div class="p-6 text-center text-gray-400">ยังไม่มีสีที่คุณมีสิทธิ์มอบหมายสต๊าฟ</div>';return}
  try {
    const [{data:memberships,error},{data:teachers},students] = await Promise.all([
      supabase.from('sports_team_memberships').select('*,team_colors(name,hex_color),teachers(full_name,teacher_code),students(full_name,student_code,main_room)').eq('event_id',event.id).eq('is_active',true).order('created_at',{ascending:false}),
      supabase.from('teachers').select('id,teacher_code,full_name,dept,image_url,profile_id').not('profile_id','is',null).order('full_name'),
      _fetchAllRows('students',q=>q.select('id,student_code,full_name,main_room,profile_id,is_active,image_url,team_color_id,house_color').order('student_code')),
    ])
    if(error)throw error
    const manageableColorIds=new Set(manageableColors.map(c=>c.id))
    const visibleMemberships=(memberships||[]).filter(m=>access.isAdmin||manageableColorIds.has(m.team_color_id))
    // แต่ละสีมีหัวหน้านักเรียนสต๊าฟสีได้แค่คนเดียว — ใช้คำนวณว่าจะปิดตัวเลือกนี้ในฟอร์มมอบหมายไหม
    const staffLeadColorIds=new Set((memberships||[]).filter(m=>m.role==='staff_lead').map(m=>m.team_color_id))
    let foundTeamMembers=[]
    slot.innerHTML=`<div class="flex flex-wrap items-start justify-between gap-3 mb-4"><div><h2 class="font-bold">🛡️ มอบหมายผู้ดูแลประจำสี</h2><p class="text-xs text-gray-500 mt-1">${access.isAdmin?'แอดมินกำหนดครูประจำสีและนักเรียนสต๊าฟได้ทุกสี':'พ่อสี/แม่สีมอบหมายได้เฉพาะนักเรียนสต๊าฟในสีของตนเอง'}</p></div><span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">ใช้งานอยู่ ${memberships?.length||0} คน</span></div>
      <div class="grid lg:grid-cols-5 gap-3 mb-4">
        <select id="team-member-color" class="team-field rounded-xl px-3 py-2 text-sm">${manageableColors.map(c=>`<option value="${esc(c.id)}">สี${esc(c.name)}</option>`).join('')}</select>
        <input id="team-member-code-input" class="team-field rounded-xl px-3 py-2 text-sm lg:col-span-2" placeholder="กรอกรหัสครู/รหัสนักเรียน เช่น 1087, 608001">
        <select id="team-member-role" class="team-field rounded-xl px-3 py-2 text-sm">
          ${canAssignTeachers?'<option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option>':''}
          <option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option>
          <option value="staff">นักเรียนสต๊าฟสี</option>
        </select>
        <button id="team-member-search" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm">ค้นหารายชื่อ</button>
      </div>
      <p class="text-[11px] text-gray-500 -mt-2 mb-3">มอบสิทธิ์นักเรียนระดับ ม.4–ม.6 และ ปวช.1–3 ที่อยู่สีเดียวกันและมีบัญชีเข้าใช้งานระบบแล้ว</p>
      <div class="flex flex-wrap gap-2 mb-4">${Object.entries(permLabels).map(([k,v])=>permissionButton(k,v,true)).join('')}</div>
      <div id="team-member-preview" class="hidden border border-indigo-100 bg-indigo-50/40 rounded-2xl p-4 mb-4">
        <p class="text-xs font-bold text-indigo-700 mb-2">ตรวจสอบรายชื่อที่ต้องการมอบหมาย:</p>
        <div id="team-member-preview-cards" class="grid md:grid-cols-2 gap-3 mb-3"></div>
        <button id="team-member-add" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold">ยืนยันและมอบหมายสิทธิ์ประจำสี</button>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 mt-2 mb-2"><h3 class="font-bold text-sm">📋 ตรวจสอบรายชื่อผู้ได้รับสิทธิ์</h3><span id="team-member-count" class="text-xs text-gray-500"></span></div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <select id="team-member-filter-color" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${manageableColors.map(c=>`<option value="${esc(c.id)}">สี${esc(c.name)}</option>`).join('')}</select>
        <select id="team-member-filter-role" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกบทบาท</option><option value="lead_teacher">พ่อสี/แม่สี (หัวหน้าครูประจำสี)</option><option value="teacher">ครูประจำสี</option><option value="staff_lead">หัวหน้านักเรียนสต๊าฟสี</option><option value="staff">นักเรียนสต๊าฟสี</option></select>
        <input id="team-member-filter-search" class="team-field rounded-xl px-3 py-2 text-sm" placeholder="🔍 ค้นหาชื่อ/รหัสครู/รหัสนักเรียน...">
      </div>
      <div id="team-member-table-wrap"></div>`
    const updateRoleOptions=()=>{
      const colorId=slot.querySelector('#team-member-color')?.value
      const roleSel=slot.querySelector('#team-member-role')
      const opt=roleSel?.querySelector('option[value="staff_lead"]')
      if(!roleSel||!opt)return
      const taken=staffLeadColorIds.has(colorId)
      opt.disabled=taken
      opt.textContent=taken?'หัวหน้านักเรียนสต๊าฟสี (มีแล้ว — เลือกนักเรียนสต๊าฟสีแทน)':'หัวหน้านักเรียนสต๊าฟสี'
      if(taken&&roleSel.value==='staff_lead')roleSel.value='staff'
    }
    updateRoleOptions()
    slot.querySelector('#team-member-color')?.addEventListener('change',updateRoleOptions)
    const memberPersonText=m=>m.teachers?.full_name?`${m.teachers.full_name}${m.teachers.teacher_code?` (${m.teachers.teacher_code})`:''}`:`${m.students?.student_code||''} ${m.students?.full_name||''} ${m.students?.main_room?`· ${m.students.main_room}`:''}`
    const openEditPermsModal=(id,perms)=>{
      document.getElementById('team-member-edit-modal')?.remove()
      const modal=document.createElement('div');modal.id='team-member-edit-modal';modal.className='fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true')
      modal.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"><div class="p-5 border-b border-gray-100"><h3 class="font-bold text-gray-800">✏️ แก้ไขสิทธิ์</h3><p class="text-xs text-gray-500 mt-1">แตะเพื่อเปิด/ปิดสิทธิ์แต่ละอย่าง แล้วกดบันทึก</p></div><div class="p-5"><div id="team-member-edit-perms" class="flex flex-wrap gap-2"></div></div><div class="p-4 border-t border-gray-100 flex gap-2"><button id="team-member-edit-cancel" class="flex-1 py-2.5 rounded-xl border text-sm font-bold">ยกเลิก</button><button id="team-member-edit-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold">บันทึก</button></div></div>`
      document.body.appendChild(modal)
      const permsWrap=modal.querySelector('#team-member-edit-perms')
      permsWrap.innerHTML=Object.entries(permLabels).map(([k,v])=>permissionButton(k,v,perms?.[k]===true)).join('')
      permsWrap.querySelectorAll('[data-team-perm]').forEach(b=>b.addEventListener('click',()=>{const next=b.dataset.enabled!=='true';b.dataset.enabled=next?'true':'false';b.className=`px-3 py-2 rounded-xl text-xs font-bold border ${next?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-slate-50 text-slate-500 border-slate-200'}`;const label=(b.textContent.split(':').pop()||'').trim();b.textContent=`${next?'อนุญาต':'ไม่อนุญาต'}: ${label}`}))
      modal.querySelector('#team-member-edit-cancel').onclick=()=>modal.remove()
      modal.onclick=e=>{if(e.target===modal)modal.remove()}
      modal.querySelector('#team-member-edit-save').onclick=async()=>{
        const newPerms={};permsWrap.querySelectorAll('[data-team-perm]').forEach(x=>newPerms[x.dataset.teamPerm]=x.dataset.enabled==='true')
        const {error}=await supabase.from('sports_team_memberships').update({permissions:newPerms}).eq('id',id)
        if(error)return toast(error.message,'error')
        modal.remove();toast('บันทึกสิทธิ์แล้ว');renderTeamMembershipAdmin(root,event,colors,access)
      }
    }
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
      tableWrap.innerHTML=`<div class="overflow-x-auto border rounded-2xl"><table class="w-full text-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left">ผู้ได้รับสิทธิ์</th><th>สี</th><th>บทบาท</th><th>สิทธิ์</th><th></th></tr></thead><tbody>${filtered.map(m=>{const person=memberPersonText(m);const perms=Object.entries(m.permissions||{}).filter(([,v])=>v).map(([k])=>permLabels[k]||k).join(', ')||'ไม่มีสิทธิ์ย่อย';const canRemove=access.isAdmin||(m.student_id&&['staff_lead','staff'].includes(m.role));return `<tr class="border-t"><td class="p-3 font-medium">${esc(person||'ไม่พบชื่อ')}</td><td class="p-3"><span class="font-bold" style="color:${esc(m.team_colors?.hex_color||'#334155')}">สี${esc(m.team_colors?.name||'—')}</span></td><td class="p-3">${esc(roleLabels[m.role]||m.role)}</td><td class="p-3 text-xs text-gray-500">${esc(perms)}</td><td class="p-3 text-right whitespace-nowrap">${canRemove?`<button data-team-member-edit="${esc(m.id)}" data-perms='${esc(JSON.stringify(m.permissions||{}))}' class="px-3 py-1.5 rounded-lg border text-indigo-600 text-xs mr-1">แก้ไขสิทธิ์</button><button data-team-member-remove="${esc(m.id)}" class="px-3 py-1.5 rounded-lg border text-red-600 text-xs">ปิดสิทธิ์</button>`:'<span class="text-xs text-gray-300">ล็อกโดยแอดมิน</span>'}</td></tr>`}).join('')||`<tr><td colspan="5" class="p-6 text-center text-gray-400">${visibleMemberships.length?'ไม่พบรายชื่อที่ตรงกับตัวกรอง':'ยังไม่มีผู้ได้รับสิทธิ์ประจำสี'}</td></tr>`}</tbody></table></div>`
      tableWrap.querySelectorAll('[data-team-member-remove]').forEach(b=>b.addEventListener('click',async()=>{const {error}=await supabase.from('sports_team_memberships').update({is_active:false,ends_at:new Date().toISOString()}).eq('id',b.dataset.teamMemberRemove);if(error)return toast(error.message,'error');toast('ปิดสิทธิ์แล้ว');renderTeamMembershipAdmin(root,event,colors,access)}))
      tableWrap.querySelectorAll('[data-team-member-edit]').forEach(b=>b.addEventListener('click',()=>{let perms={};try{perms=JSON.parse(b.dataset.perms||'{}')}catch(e){perms={}};openEditPermsModal(b.dataset.teamMemberEdit,perms)}))
    }
    renderMemberTable()
    slot.querySelector('#team-member-filter-color')?.addEventListener('change',renderMemberTable)
    slot.querySelector('#team-member-filter-role')?.addEventListener('change',renderMemberTable)
    slot.querySelector('#team-member-filter-search')?.addEventListener('input',renderMemberTable)
    const parseCodes=value=>String(value||'').split(/[\s,]+/).map(x=>x.trim()).filter(Boolean)
    const showLookupIssues=issues=>{
      document.getElementById('team-member-lookup-issue')?.remove()
      const modal=document.createElement('div');modal.id='team-member-lookup-issue';modal.className='fixed inset-0 z-[420] bg-black/60 flex items-center justify-center p-4';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true')
      modal.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"><div class="p-5 border-b border-red-100 bg-red-50"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-full bg-red-100 grid place-items-center text-xl flex-shrink-0">🔎</div><div><h3 class="font-bold text-red-800">ไม่สามารถเลือกรายชื่อนี้ได้</h3><p class="text-xs text-red-600 mt-1">ระบบตรวจสอบพบสาเหตุดังต่อไปนี้</p></div></div></div><div class="p-5 space-y-2 max-h-[55vh] overflow-y-auto">${issues.map(x=>`<div class="rounded-xl border border-gray-200 p-3"><b class="text-sm text-gray-800">รหัส ${esc(x.code)}</b><p class="text-xs text-gray-600 mt-1">${esc(x.reason)}</p></div>`).join('')}</div><div class="p-4 border-t border-gray-100"><button id="team-member-lookup-close" class="w-full py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold">รับทราบ</button></div></div>`
      document.body.appendChild(modal);modal.querySelector('#team-member-lookup-close').onclick=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)modal.remove()}
    }
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
      const teacherCodes=new Set(foundTeachers.map(t=>String(t.code)))
      const foundStudents=[],issues=[]
      codes.forEach(code=>{
        if(teacherCodes.has(String(code)))return
        const matches=(students||[]).filter(s=>String(s.student_code)===String(code))
        if(!matches.length){issues.push({code,reason:'ไม่พบรหัสนักเรียนนี้ในฐานข้อมูล'});return}
        const student=matches.find(s=>s.is_active)||matches[0]
        if(!student.is_active){issues.push({code,reason:'บัญชีนักเรียนถูกปิดสถานะ ไม่ใช่นักเรียนที่กำลังใช้งาน'});return}
        if(!(student.team_color_id===selectedColorId||student.house_color===selectedColor?.name)){issues.push({code,reason:`นักเรียนอยู่สี${student.house_color||'อื่น'} ไม่ใช่สี${selectedColor?.name||'ที่เลือก'}`});return}
        if(!isStaffLevel(student)){issues.push({code,reason:`นักเรียนอยู่ห้อง ${student.main_room||'ไม่ระบุ'} ระบบอนุญาตให้มอบสิทธิ์เฉพาะ ม.4–ม.6 และ ปวช.1–3`});return}
        if(!student.profile_id){issues.push({code,reason:'นักเรียนยังไม่มีบัญชีเข้าใช้งานระบบ จึงยังผูกสิทธิ์ประจำสีไม่ได้'});return}
        foundStudents.push({...student,kind:'student',code:student.student_code,detail:`รหัส ${student.student_code} · ห้อง ${student.main_room||'—'} · สี${selectedColor?.name||'—'}`})
      })
      foundTeamMembers=[...foundTeachers,...foundStudents]
      if(issues.length)showLookupIssues(issues)
      if(!foundTeamMembers.length)return
      renderPreview()
    })
    slot.querySelector('#team-member-code-input')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();slot.querySelector('#team-member-search')?.click()}})
    slot.querySelector('#team-member-add')?.addEventListener('click',async()=>{
      const role=slot.querySelector('#team-member-role')?.value, teamColorId=slot.querySelector('#team-member-color')?.value
      if(!teamColorId||!foundTeamMembers.length)return toast('กรุณาเลือกสีและค้นหารายชื่อก่อน','error')
      if(!access.isAdmin&&!leadTeamIds.has(teamColorId))return toast('หัวหน้าครูประจำสีมอบหมายได้เฉพาะสีของตนเอง','error')
      if(foundTeamMembers.some(p=>p.kind==='student')&&!['staff_lead','staff'].includes(role))return toast('บทบาทนี้ใช้กับครูเท่านั้น หากจะมอบหมายให้นักเรียนให้เลือกบทบาทนักเรียนสต๊าฟ','error')
      if(foundTeamMembers.some(p=>p.kind==='teacher')&&!['lead_teacher','teacher'].includes(role))return toast('บทบาทนี้ใช้กับนักเรียนเท่านั้น หากจะมอบหมายให้ครูให้เลือกบทบาทครูประจำสี','error')
      if(role==='staff_lead'&&(staffLeadColorIds.has(teamColorId)||foundTeamMembers.length>1))return toast('สีนี้มีหัวหน้านักเรียนสต๊าฟสีอยู่แล้ว หรือเลือกได้ทีละ 1 คนเท่านั้นสำหรับบทบาทนี้','error')
      const permissions={};slot.querySelectorAll('[data-team-perm]').forEach(x=>permissions[x.dataset.teamPerm]=x.dataset.enabled==='true')
      const payload=foundTeamMembers.map(p=>({event_id:event.id,team_color_id:teamColorId,profile_id:p.profile_id,teacher_id:p.kind==='teacher'?Number(p.id):null,student_id:p.kind==='student'?Number(p.id):null,role,permissions,is_active:true,ends_at:null}))
      const {error}=await supabase.from('sports_team_memberships').upsert(payload,{onConflict:'event_id,team_color_id,profile_id'})
      if(error)return toast(error.message,'error')
      toast(`มอบหมายสิทธิ์ประจำสีแล้ว ${payload.length} คน`); renderTeamMembershipAdmin(root,event,colors,access)
    })
    slot.querySelectorAll('[data-team-perm]').forEach(b=>b.addEventListener('click',()=>{const next=b.dataset.enabled!=='true';b.dataset.enabled=next?'true':'false';b.className=`px-3 py-2 rounded-xl text-xs font-bold border ${next?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-slate-50 text-slate-500 border-slate-200'}`;const label=(b.textContent.split(':').pop()||'').trim();b.textContent=`${next?'อนุญาต':'ไม่อนุญาต'}: ${label}`}))
  } catch(e) { console.error(e); slot.innerHTML='<div class="p-5 rounded-2xl bg-red-50 text-red-700 text-sm">โหลดหน้ามอบหมายผู้ดูแลสีไม่สำเร็จ</div>' }
}

// หน้าแอดมิน "บัญชีเงินกีฬาสี" — เพิ่ม/แก้ไข/ลบ เงินสนับสนุนโรงเรียน และเงินรางวัลของแต่ละสี
// (ค่าบำรุงสีไม่ได้จัดการที่นี่ ยังคงเก็บผ่านหน้าสแกน QR เดิม, รายจ่ายบันทึกโดยสต๊าฟ/ครูในแต่ละสี
// ผ่านแท็บ "บัญชีสี" ในหน้าจัดการสีของตัวเอง — หน้านี้แยกต่างหาก จัดการเฉพาะฝั่งรายรับที่แอดมิน
// เป็นผู้กำหนดเท่านั้น) แยกหน้าตามที่ผู้ใช้ขอ ไม่รวมเข้ากับหน้าสรุปยอดเสื้อเดิม
export async function renderSportsFundAdmin() {
  const el=main(); el.innerHTML='<div class="py-16 text-center">กำลังโหลดบัญชีเงินกีฬาสี...</div>'
  try {
    const {event}=await context()
    const [{data:colors,error:colorsErr},{data:entries,error:entriesErr}] = await Promise.all([
      supabase.from('team_colors').select('id,name,hex_color,gender').eq('event_id',event.id).order('gender').order('display_order'),
      supabase.from('sports_team_fund_entries').select('*').eq('event_id',event.id).in('category',['school_support','prize']).order('entry_date',{ascending:false}).order('created_at',{ascending:false}),
    ])
    if(colorsErr) throw colorsErr
    if(entriesErr) throw entriesErr
    let rows=entries||[]
    const colorOf=id=>(colors||[]).find(c=>c.id===id)

    el.innerHTML=`<div class="max-w-5xl mx-auto space-y-5">
      <div><h1 class="text-2xl font-bold">💰 บัญชีเงินกีฬาสี (แอดมิน)</h1><p class="text-sm text-gray-500">เพิ่ม/แก้ไข/ลบเงินสนับสนุนโรงเรียนและเงินรางวัลของแต่ละสี — ข้อมูลจะไปแสดงในหน้า "สีของฉัน" ของนักเรียนทุกคนทันที</p></div>
      <section class="bg-white border rounded-2xl p-5">
        <h2 class="font-bold mb-3">➕ เพิ่มรายการใหม่</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
          <select id="fund-admin-color" class="border rounded-xl px-3 py-2 text-sm">${(colors||[]).map(c=>`<option value="${esc(c.id)}">สี${esc(c.name)} (${c.gender==='M'?'ชาย':'หญิง'})</option>`).join('')}</select>
          <select id="fund-admin-category" class="border rounded-xl px-3 py-2 text-sm"><option value="school_support">เงินสนับสนุนโรงเรียน</option><option value="prize">เงินรางวัล</option></select>
          <input id="fund-admin-amount" type="number" min="1" step="1" placeholder="จำนวนเงิน" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-desc" type="text" placeholder="รายละเอียด เช่น ชนะเลิศฟุตซอลชาย ม.ต้น" class="border rounded-xl px-3 py-2 text-sm">
          <input id="fund-admin-date" type="date" value="${todayLocal()}" class="border rounded-xl px-3 py-2 text-sm">
        </div>
        <button id="fund-admin-submit" class="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">➕ เพิ่มรายการ</button>
        <div id="fund-admin-status" class="text-xs text-gray-500 mt-2"></div>
      </section>
      <section class="bg-white border rounded-2xl overflow-hidden">
        <div class="p-4 border-b bg-gray-50"><h2 class="font-bold text-sm">📋 รายการทั้งหมด (${rows.length})</h2></div>
        <div id="fund-admin-list" class="divide-y"></div>
      </section>
    </div>`

    const renderList=()=>{
      const listEl=el.querySelector('#fund-admin-list')
      listEl.innerHTML=rows.length?rows.map(en=>{
        const c=colorOf(en.team_color_id)
        return `<div class="p-3 flex items-center gap-3" data-fund-row="${esc(en.id)}">
          <span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${esc(c?.hex_color||'#94a3b8')}"></span>
          <div class="min-w-0 flex-1" data-fund-view>
            <div class="flex items-center gap-2 flex-wrap"><b class="text-sm">สี${esc(c?.name||'—')}</b><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${en.category==='prize'?'bg-amber-100 text-amber-700':'bg-blue-100 text-blue-700'}">${en.category==='prize'?'เงินรางวัล':'เงินสนับสนุนโรงเรียน'}</span></div>
            <p class="text-sm text-gray-700 mt-0.5">${esc(en.description)}</p>
            <p class="text-[11px] text-gray-400 mt-0.5">${new Date(en.entry_date).toLocaleDateString('th-TH',{day:'2-digit',month:'short',year:'2-digit'})}</p>
          </div>
          <b class="flex-shrink-0 text-emerald-600">+${Number(en.amount).toLocaleString('th-TH')}</b>
          <div class="flex gap-1.5 flex-shrink-0">
            <button data-fund-edit="${esc(en.id)}" class="px-2.5 py-1.5 rounded-lg border text-xs font-bold text-gray-600 hover:bg-gray-50">แก้ไข</button>
            <button data-fund-del="${esc(en.id)}" class="px-2.5 py-1.5 rounded-lg border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50">ลบ</button>
          </div>
        </div>`
      }).join(''):'<p class="p-8 text-center text-gray-400 text-sm">ยังไม่มีรายการ</p>'

      listEl.querySelectorAll('[data-fund-del]').forEach(b=>b.onclick=async()=>{
        if(!confirm('ลบรายการนี้?'))return
        const id=b.dataset.fundDel
        const {error}=await supabase.from('sports_team_fund_entries').delete().eq('id',id)
        if(error){toast(error.message,'error');return}
        rows=rows.filter(r=>String(r.id)!==String(id))
        toast('ลบรายการแล้ว'); renderList()
      })
      listEl.querySelectorAll('[data-fund-edit]').forEach(b=>b.onclick=()=>{
        const id=b.dataset.fundEdit
        const row=listEl.querySelector(`[data-fund-row="${id}"]`)
        const en=rows.find(r=>String(r.id)===String(id))
        const viewEl=row.querySelector('[data-fund-view]')
        viewEl.innerHTML=`<div class="grid sm:grid-cols-3 gap-1.5">
          <input data-edit-amount type="number" min="1" step="1" value="${Number(en.amount)}" class="border rounded-lg px-2 py-1.5 text-xs">
          <input data-edit-desc type="text" value="${esc(en.description)}" class="border rounded-lg px-2 py-1.5 text-xs sm:col-span-2">
          <input data-edit-date type="date" value="${en.entry_date}" class="border rounded-lg px-2 py-1.5 text-xs">
          <div class="flex gap-1.5"><button data-edit-save class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold">บันทึก</button><button data-edit-cancel class="px-3 py-1.5 rounded-lg border text-xs font-bold">ยกเลิก</button></div>
        </div>`
        viewEl.querySelector('[data-edit-cancel]').onclick=()=>renderList()
        viewEl.querySelector('[data-edit-save]').onclick=async()=>{
          const amount=Number(viewEl.querySelector('[data-edit-amount]').value)
          const description=viewEl.querySelector('[data-edit-desc]').value.trim()
          const entry_date=viewEl.querySelector('[data-edit-date]').value
          if(!amount||amount<=0||!description){toast('กรอกข้อมูลให้ครบ','error');return}
          const {error}=await supabase.from('sports_team_fund_entries').update({amount,description,entry_date}).eq('id',id)
          if(error){toast(error.message,'error');return}
          Object.assign(en,{amount,description,entry_date})
          toast('แก้ไขแล้ว'); renderList()
        }
      })
    }
    renderList()

    el.querySelector('#fund-admin-submit').onclick=async()=>{
      const team_color_id=el.querySelector('#fund-admin-color').value
      const category=el.querySelector('#fund-admin-category').value
      const amount=Number(el.querySelector('#fund-admin-amount').value)
      const description=el.querySelector('#fund-admin-desc').value.trim()
      const entry_date=el.querySelector('#fund-admin-date').value||todayLocal()
      const statusEl=el.querySelector('#fund-admin-status')
      if(!amount||amount<=0||!description){statusEl.textContent='กรุณากรอกจำนวนเงินและรายละเอียดให้ครบ';statusEl.className='text-xs text-red-600 mt-2';return}
      const btn=el.querySelector('#fund-admin-submit');btn.disabled=true
      const {data,error}=await supabase.from('sports_team_fund_entries').insert({event_id:event.id,team_color_id,category,amount,description,entry_date}).select().single()
      btn.disabled=false
      if(error){statusEl.textContent='บันทึกไม่สำเร็จ: '+error.message;statusEl.className='text-xs text-red-600 mt-2';return}
      rows.unshift(data)
      el.querySelector('#fund-admin-amount').value=''
      el.querySelector('#fund-admin-desc').value=''
      statusEl.textContent=''
      toast('เพิ่มรายการแล้ว')
      renderList()
    }
  } catch(e) { console.error(e); el.innerHTML=missing() }
}

export async function renderShirtVoteSettings(gender='ชาย') {
  const el=main(); el.innerHTML='<div class="py-16 text-center text-gray-400">กำลังโหลด...</div>'
  try {
    const {event,cfg}=await context()
    const user=await getEffectiveUser(supabase)
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
    const user=await getEffectiveUser(supabase)
    const {data:profile}=await supabase.from('profiles').select('role,is_also_admin').eq('id',user.id).maybeSingle()
    const isAdmin=profile?.role==='admin'||profile?.is_also_admin===true
    const {data:manager}=await supabase.from('sports_shirt_vote_managers').select('id').eq('event_id',event.id).eq('profile_id',user.id).maybeSingle()
    if(!isAdmin&&!manager){el.innerHTML='<div class="max-w-lg mx-auto mt-16 p-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-center">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</div>';return}
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
    const user=await getEffectiveUser(supabase)
    const {data:members,error}=await supabase.from('sports_team_memberships').select('*,team_colors(*)').eq('profile_id',user.id).eq('is_active',true)
    if(error)throw error
    const m=members?.[0]
    if(!m){wrap.innerHTML='<button class="absolute right-4 top-4" data-close>✕</button><div class="py-24 text-center">ยังไม่ได้รับแต่งตั้งให้ดูแลคณะสี</div>';wrap.querySelector('[data-close]').onclick=()=>wrap.remove();return}
    await renderColorWorkspace(wrap,m,m.team_colors)
  } catch(e){console.error(e);wrap.innerHTML=`<button class="absolute right-4 top-4" onclick="this.parentElement.remove()">✕</button>${missing()}`}
}

// หน้า "สีของฉัน" — ถ้านักเรียนคนนี้ได้รับแต่งตั้งเป็นสตาฟสีจริง (พ่อสี/แม่สีให้สิทธิ์ไว้ผ่าน
// sports_team_memberships.student_id) ต้องแสดงผลด้วยสิทธิ์จริงที่ได้รับ (studentView:false)
// ไม่งั้นปุ่มที่ได้รับสิทธิ์มา (เช่นเช็คชื่อ/งานของสี/ประกาศ) จะไม่โผล่เลยแม้จะถูกเปิดให้แล้วก็ตาม
// ถ้าไม่มีแถวแต่งตั้งจริง ถือเป็นนักเรียนทั่วไป ใช้โหมดดูอย่างเดียว (studentView:true, สิทธิ์ว่าง)
// เพราะแท็บเช็คชื่อให้แก้ไขข้อมูลการเข้าแถวของคนอื่นได้ นักเรียนทั่วไปไม่ควรมีสิทธิ์นี้เด็ดขาด
export async function openMyColorAsStudent(student) {
  const old=document.getElementById('my-team-workspace');old?.remove(); const wrap=document.createElement('div');wrap.id='my-team-workspace';wrap.className='fixed inset-0 bg-slate-950 text-slate-100 overflow-hidden';wrap.style.zIndex='350';wrap.innerHTML='<div class="py-20 text-center">กำลังโหลดสีของฉัน...</div>';document.body.appendChild(wrap)
  try {
    const {data:staffRows}=await supabase.from('sports_team_memberships').select('*,team_colors(*)').eq('student_id',student.id).eq('is_active',true).limit(1)
    const staffM=staffRows?.[0]
    if(staffM){
      // ติด student_code ไปกับ m เพื่อส่งต่อให้ AZIZGAMES รู้จักตัวเอง (กรอง "รายการของฉัน")
      // ตอนเปิด modal ผ่านปุ่ม AZIZGAMES — เก็บเป็นคีย์ขึ้นต้น _ กันชนกับคอลัมน์จริงของตาราง
      staffM._studentCode=student.student_code
      await renderColorWorkspace(wrap,staffM,staffM.team_colors)
      return
    }
    const {event}=await context()
    let q=supabase.from('team_colors').select('*').eq('event_id',event.id)
    q=student.team_color_id?q.eq('id',student.team_color_id):q.eq('name',student.house_color||'')
    const {data:c,error}=await q.maybeSingle()
    if(error)throw error
    if(!c){wrap.innerHTML='<button class="absolute right-4 top-4" data-close>✕</button><div class="py-24 text-center">ยังไม่พบข้อมูลสีของคุณ</div>';wrap.querySelector('[data-close]').onclick=()=>wrap.remove();return}
    const user=await getEffectiveUser(supabase)
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
    // เหมือน dues — เกี่ยวกับเงินจริง (รายจ่ายของสี) ต้องเปิดชัดเจนเท่านั้น ไม่ default เปิด
    const canExpenses=!studentView&&perms.expenses===true
    // มอบหมายรายการแข่งขันให้สตาฟ — สิทธิ์แยกต่างหาก ไม่ผูกกับ role และไม่ปนกับ registrations
    // ต้องเปิดชัดเจนเหมือน dues/expenses เพราะเป็นสิทธิ์มอบหมายงานให้คนอื่นในทีม
    const canCompAssign=!studentView&&perms.comp_assign===true
    // แต่งตั้ง/แก้ไขสิทธิ์สตาฟในทีม (หน้าสิทธิ์ประจำสี) — เดิมให้แค่ครูประจำสี (lead_teacher)
    // เท่านั้น ผู้ใช้ขอให้หัวหน้าสตาฟนักเรียน (staff_lead) ทำแทนได้ด้วย เผื่อพ่อสี/แม่สีมอบหมายให้ช่วย
    const canManageStaff=isLead||m.role==='staff_lead'
    const theme=localStorage.getItem('sports_team_theme')||'dark'; wrap.dataset.theme=theme
    const [{event,cfg,shirtSizes},{data:pub},{data:headerRows}] = await Promise.all([context(),supabase.from('settings').select('value').eq('key','public_buttons').maybeSingle(),supabase.from('settings').select('key,value').in('key',['school_name','school_name_2'])])
    const publicButtons=pub?.value&&typeof pub.value==='object'?pub.value:{}
    const headerMap=Object.fromEntries((headerRows||[]).map(r=>[r.key,r.value]))
    const docHeader={academicYear:event?.academic_year||'2569',schoolName:headerMap.school_name||'โรงเรียนมูลนิธิอาซิซสถานร่วมกับวิทยาลัยเทคโนโลยีอาซิซสถานพณิชยการ',schoolName2:headerMap.school_name_2||''}
    // หมายเหตุ: ตาราง sports_registrations/sports_matches/sports_color_totals/sports_competitions
    // เป็นสคีมาเก่าที่ไม่มีข้อมูลจริง (AZIZGAMES เขียนลง registrations/matches/color_totals/sports แทน)
    // — สลับมาใช้ตารางจริงเพื่อให้ "นักกีฬาในสี" ตรงกับสิ่งที่ลงทะเบียนจริงใน AZIZGAMES
    const [membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions,attendance,scoreCriteria,scoreEntries,medalAwards,campCalendar,duesPayments,fundLedger,compAssignments] = await Promise.all([
      safe(supabase.from('students').select('id,student_code,full_name,main_room,house_color,sports_shirt_size,image_url,photo_url').eq('is_active',true).or(`team_color_id.eq.${c.id},house_color.eq.${c.name}`).order('main_room').order('student_code')),
      safe(supabase.from('sports_team_tasks').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false})),
      safe(supabase.from('sports_team_announcements').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false})),
      safe(supabase.from('sports_team_identity_requests').select('*').eq('team_color_id',c.id).order('created_at',{ascending:false}).limit(10)),
      safe(supabase.from('registrations').select('*,students(id,student_code,full_name,main_room,house_color,sports_shirt_size,image_url,photo_url),sports(id,code,name,category,gender)').eq('event_id',event.id).eq('team_color_id',c.id).order('registered_at',{ascending:false})),
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
      // บัญชีสี (เงินสนับสนุนโรงเรียน+เงินรางวัล+รายจ่าย+ยอดค่าบำรุงรวม) — เปิดให้ทุกคนเห็นเสมอ
      // เพื่อความโปร่งใส ไม่ผูกกับ canX ใดๆ (RLS ฝั่ง DB เป็นคนกันสิทธิ์เขียนอยู่แล้ว)
      supabase.rpc('get_team_fund_ledger',{p_event:event.id,p_team_color_id:c.id}).then(r=>r.error?{entries:[],dues_total:0}:(r.data||{entries:[],dues_total:0})).catch(()=>({entries:[],dues_total:0})),
      // นับจำนวนการมอบหมาย "ผู้จัดการทีม" ไว้โชว์เป็นตัวเลขในการ์ดภาพรวม (รายละเอียดเต็มอยู่ในแท็บ managers)
      safe(supabase.from('sports_team_competition_assignments').select('id').eq('team_color_id',c.id)),
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
      ['managers','ผู้จัดการทีม','🧑‍💼',true],
      ['attendance','เช็คชื่อ','📷',canAttendance],
      ['dues','ค่าบำรุงสี','💰',canDues],
      ['ledger','บัญชีสี','📒',true],
      ['permissions','สิทธิ์ประจำสี','🛡️',canManageStaff],
      ['shirts','ไซซ์เสื้อ','👕',canShirt],
      ['work','งาน/ประกาศ','📋',canTasks||canAnn],
      ['schedule','ตาราง/ผล','🗓️',true],
      ['scores','คะแนน/เหรียญ','🏅',true],
      ['identity','อัตลักษณ์','🎨',!studentView],
      ['gallery','ภาพกิจกรรม','📸',true],
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
      /* input/select/textarea ทุกจุดในหน้านี้ต้องผ่าน .team-field เสมอ — ห้ามปล่อย <input>/<select> ดิบๆ
         ไม่งั้นจะใช้สีพื้นหลัง/ตัวอักษรของเบราว์เซอร์ดีฟอลต์ที่ไม่รู้จัก data-theme ของแอป ทำให้อ่านไม่ออก
         เวลาสลับโหมด (ตัวอักษรมืดตัดกับพื้นมืด หรือกล่องขาวโพลนกลางหน้าธีมมืด) */
      #my-team-workspace .team-field{color-scheme:light}
      /* masonry จัดคอลัมน์ตามสัดส่วนภาพจริง (แบบ Pinterest) ใช้กับแท็บภาพกิจกรรม แทนกริดสี่เหลี่ยม
         ตัดเท่ากันทุกรูปแบบเดิม ให้ความรู้สึกเป็นแกลเลอรีจริงมากกว่าตารางไฟล์ */
      #my-team-workspace .masonry{column-count:2;column-gap:.75rem}
      @media(min-width:640px){#my-team-workspace .masonry{column-count:3}}
      @media(min-width:1024px){#my-team-workspace .masonry{column-count:4}}
      #my-team-workspace .masonry>*{break-inside:avoid;margin-bottom:.75rem}
      #my-team-workspace[data-theme="light"] .team-field{background:#fff;border:1px solid #e2e8f0;color:#0f172a}
      #my-team-workspace[data-theme="dark"] .team-field{background:rgba(15,23,42,.6);border:1px solid rgba(255,255,255,.12);color:#f8fafc;color-scheme:dark}
      #my-team-workspace[data-theme="light"] .team-field::placeholder{color:#94a3b8}
      #my-team-workspace[data-theme="dark"] .team-field::placeholder{color:#64748b}
      #my-team-workspace[data-theme="dark"] .team-field option{background:#0f172a;color:#f8fafc}
      #my-team-workspace h2{font-size:.95rem;letter-spacing:-.01em;font-weight:800}
      #my-team-workspace[data-theme="light"] table th{background:#f1f5f9;color:#475569}
      #my-team-workspace[data-theme="dark"] table th{background:rgba(30,41,59,.6);color:#94a3b8}
      .team-tab-active{background:#db2777!important;color:white!important;border-color:#db2777!important;box-shadow:0 4px 12px -4px rgba(219,39,119,.5)}
      .sport-icon{width:1.75rem;height:1.75rem;object-fit:contain;flex-shrink:0}
      #team-tab-body{height:calc(100vh - 180px);overflow:auto}
      .status-pill{display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:800;padding:3px 9px;border-radius:999px;white-space:nowrap}
      /* badge สีทึบแบบ rgba(...,.15)+ตัวหนังสือสว่าง ถูกปรับจูนมาสำหรับพื้นมืดเท่านั้น — บนพื้นสว่าง
         ตัวหนังสือสว่างจะจมกับพื้นสีอ่อนของตัวเอง ต้องมีชุดสีแยกสำหรับโหมดสว่างเสมอ */
      #my-team-workspace[data-theme="dark"] .status-done{background:rgba(16,185,129,.15);color:#10b981}
      #my-team-workspace[data-theme="light"] .status-done{background:#d1fae5;color:#047857}
      #my-team-workspace[data-theme="dark"] .status-live{background:rgba(245,158,11,.15);color:#f59e0b}
      #my-team-workspace[data-theme="light"] .status-live{background:#fef3c7;color:#b45309}
      .status-live{animation:status-pulse 1.6s ease-in-out infinite}
      #my-team-workspace[data-theme="dark"] .status-pending{background:rgba(100,116,139,.15);color:#94a3b8}
      #my-team-workspace[data-theme="light"] .status-pending{background:#f1f5f9;color:#475569}
      #my-team-workspace[data-theme="dark"] .status-bad{background:rgba(239,68,68,.15);color:#f87171}
      #my-team-workspace[data-theme="light"] .status-bad{background:#fee2e2;color:#b91c1c}
      #my-team-workspace[data-theme="dark"] .status-warn{background:rgba(245,158,11,.15);color:#fbbf24}
      #my-team-workspace[data-theme="light"] .status-warn{background:#fef3c7;color:#92400e}
      #my-team-workspace[data-theme="dark"] .tone-warn{color:#fbbf24}
      #my-team-workspace[data-theme="light"] .tone-warn{color:#b45309}
      #my-team-workspace[data-theme="dark"] .tone-ok{color:#34d399}
      #my-team-workspace[data-theme="light"] .tone-ok{color:#047857}
      #my-team-workspace[data-theme="dark"] .tone-bad{color:#f87171}
      #my-team-workspace[data-theme="light"] .tone-bad{color:#b91c1c}
      #my-team-workspace[data-theme="dark"] .btn-danger-ghost{background:rgba(127,29,29,.4);color:#fca5a5;border:1px solid rgba(153,27,27,.6)}
      #my-team-workspace[data-theme="light"] .btn-danger-ghost{background:#fef2f2;color:#b91c1c;border:1px solid #fecaca}
      @keyframes status-pulse{0%,100%{opacity:1}50%{opacity:.55}}
      @media (max-width:480px){#my-team-workspace .team-head b{font-size:.95rem}#my-team-workspace table{font-size:12px}#my-team-workspace .team-card{padding:1rem!important}}
      @media (max-width:639px){#team-tab-body{height:calc(100vh - 132px);box-sizing:border-box;padding-bottom:calc(7.5rem + env(safe-area-inset-bottom))}}
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
    const data={m,c,event,cfg,shirtSizes,publicButtons,docHeader,membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions,attendance,scoreBreakdown,maxParadeScore,maxPageScore,maxColorEvalScore,medalBreakdown,campCalendar,duesPayments,fundLedger,compAssignments,myTotal,scoreRank,medalRank,pendingTasks,doneMatches,canMembers,canReg,canTasks,canAnn,canShirt,canAttendance,canDues,canExpenses,canCompAssign,isLead,canManageStaff,theme,studentView}
    const drawTab=()=>renderTeamWorkspaceTab(wrap,tabState.active,data)
    // จัดกลุ่มแท็บสำหรับแถบเมนูด้านล่างบนมือถือ (บนเดสก์ท็อปยังใช้แถบเดิมด้านบนเหมือนเดิม)
    // กดกลุ่มที่มีแท็บเดียว (เช่น ภาพรวม) ไปหน้านั้นทันที ส่วนกลุ่มที่มีหลายแท็บ ปุ่มด้านล่างจะ
    // เปลี่ยนเป็นแท็บย่อยของกลุ่มนั้นแทน พร้อมปุ่ม "กลับ" ให้ย้อนไปเลือกกลุ่มอื่นได้
    const groupDefs=[
      {key:'overview',label:'ภาพรวม',icon:'🏠',keys:['overview']},
      {key:'team',label:'ทีม',icon:'👥',keys:['members','athletes','managers','permissions']},
      {key:'event',label:'กิจกรรม',icon:'📅',keys:['attendance','dues','ledger','schedule','work']},
      {key:'results',label:'ผลงาน',icon:'🏆',keys:['scores','shirts','identity','gallery']},
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
    wrap.querySelector('[data-close]').onclick=()=>wrap.remove();wrap.querySelectorAll('[data-full]').forEach(b=>b.onclick=()=>openAzizGamesModal({tab:b.dataset.azizTab||'',stdid:m?.student_id?m._studentCode||'':''}))
    wrap.querySelectorAll('[data-team-tab]').forEach(b=>b.onclick=()=>selectTab(b.dataset.teamTab))
    wrap.querySelector('[data-theme-toggle]').onclick=()=>{const next=wrap.dataset.theme==='dark'?'light':'dark';wrap.dataset.theme=next;localStorage.setItem('sports_team_theme',next);wrap.querySelector('[data-theme-toggle]').textContent=next==='dark'?'☀️ โหมดสว่าง':'🌙 โหมดมืด'}
    renderBottomNav()
    drawTab()
    if(m.role==='lead_teacher') identity?.filter(x=>x.status==='pending_lead'&&x.submitted_by!==m.profile_id).forEach(x=>{const bar=document.createElement('div');bar.className='fixed right-4 z-30 bg-slate-800 border border-amber-500 rounded-xl p-3 shadow-xl';bar.style.bottom='calc(5.5rem + env(safe-area-inset-bottom))';bar.innerHTML=`<p class="text-sm mb-2">คำขอแก้อัตลักษณ์รอหัวหน้าครูตรวจสอบ</p><button data-no class="px-3 py-1 border border-red-400 text-red-300 rounded-lg mr-2">ปฏิเสธ</button><button data-yes class="px-3 py-1 bg-emerald-600 rounded-lg">อนุมัติส่งแอดมิน</button>`;wrap.appendChild(bar);const media=window.matchMedia('(min-width:640px)');const position=()=>{bar.style.bottom=media.matches?'1rem':'calc(5.5rem + env(safe-area-inset-bottom))'};position();media.addEventListener?.('change',position);const review=async decision=>{const {error}=await supabase.rpc('review_team_identity',{p_request:x.id,p_decision:decision,p_comment:null});if(error)return toast(error.message,'error');toast('บันทึกผลตรวจสอบแล้ว');openMyTeamWorkspace()};bar.querySelector('[data-yes]').onclick=()=>review('approve');bar.querySelector('[data-no]').onclick=()=>review('reject')})
  } catch(e){console.error(e);wrap.innerHTML=`<button class="absolute right-4 top-4" onclick="this.parentElement.remove()">✕</button>${missing()}`}
}

const roleLabel = role => ({lead_teacher:'พ่อสี/แม่สี (หัวหน้าครูประจำสี)',teacher:'ครูประจำสี',staff_lead:'หัวหน้านักเรียนสต๊าฟ',staff:'นักเรียนสต๊าฟ'}[role]||role)
const permPill = (label,on) => `<div class="rounded-xl px-3 py-2 text-xs font-bold ${on?'status-done':'status-pending'}">${on?'เปิดให้ใช้':'ไม่เปิดให้ใช้'} · ${esc(label)}</div>`
// duesPaidIds: Set ของ student.id ที่จ่ายค่าบำรุงสีแล้ว — ส่ง undefined ถ้าผู้ดูไม่มีสิทธิ์เห็นค่าบำรุง
// (ไม่แสดงป้ายเลยดีกว่าแสดงป้าย "แดง/ยังไม่จ่าย" มั่วๆ ทั้งที่จริงๆ แค่ไม่มีสิทธิ์ดึงข้อมูลมา)
const memberCard = (s,duesPaidIds) => `<div class="team-sub rounded-xl p-3 flex items-center gap-3">${(s.image_url||s.photo_url)?`<img src="${esc(s.image_url||s.photo_url)}" class="w-9 h-11 rounded-lg object-cover border border-slate-700/60 shadow-sm shadow-black/30 flex-shrink-0">`:''}<div class="min-w-0 flex-1"><b class="text-sm truncate block">${esc(s.full_name)}</b><p class="text-xs muted truncate">${esc(s.student_code)} · ${esc(s.main_room)} · เสื้อ ${esc(s.sports_shirt_size||'—')}</p></div>${duesPaidIds?(duesPaidIds.has(s.id)?'<span class="status-pill status-done flex-shrink-0">💰 จ่ายแล้ว</span>':'<span class="status-pill status-bad flex-shrink-0">💰 ยังไม่จ่าย</span>'):''}</div>`

async function openTeamAthleteQR(reg,c){
  document.getElementById('sports-athlete-qr-modal')?.remove()
  const modal=document.createElement('div');modal.id='sports-athlete-qr-modal';modal.className='fixed inset-0 z-[700] bg-black/75 p-4 flex items-center justify-center'
  const photo=reg.students?.image_url||reg.students?.photo_url
  modal.innerHTML=`<div class="bg-white text-slate-900 rounded-3xl p-5 w-full max-w-sm text-center shadow-2xl"><div class="flex justify-end"><button data-close class="text-2xl text-slate-400">×</button></div>${photo?`<img src="${esc(photo)}" class="w-20 h-24 rounded-xl object-cover mx-auto border">`:''}<h3 class="font-extrabold mt-3">${esc(reg.students?.full_name||'นักกีฬา')}</h3><p class="text-xs text-slate-500">สี${esc(c.name)} · ${esc(reg.students?.main_room||'')} · ${esc(reg.sports?.name||'')}</p><div data-qr class="mt-4 min-h-[220px] flex items-center justify-center text-sm text-slate-400">กำลังสร้าง QR Code...</div><p class="font-bold tracking-wider mt-2">${esc(reg.students?.student_code||'')}</p><p class="text-xs text-slate-500 mt-1">ใช้สแกนรายงานตัวแทน QR ประจำตัวนักเรียนได้</p></div>`
  document.body.appendChild(modal);modal.querySelector('[data-close]').onclick=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)modal.remove()}
  try{const url=await QRCode.toDataURL(reg.students?.student_code||'',{width:220,margin:2,color:{dark:'#111827',light:'#ffffff'}});modal.querySelector('[data-qr]').innerHTML=`<img src="${url}" class="w-[220px] h-[220px] rounded-xl border p-2" alt="QR Code">`}catch{modal.querySelector('[data-qr]').textContent='สร้าง QR Code ไม่สำเร็จ'}
}

function openTeamAthleteEdit(reg,onSaved){
  document.getElementById('sports-athlete-edit-modal')?.remove()
  const modal=document.createElement('div');modal.id='sports-athlete-edit-modal';modal.className='fixed inset-0 z-[700] bg-black/75 p-4 flex items-center justify-center'
  modal.innerHTML=`<form class="bg-white text-slate-900 rounded-3xl p-5 w-full max-w-sm shadow-2xl"><div class="flex justify-between items-start gap-3"><div><h3 class="font-extrabold">✏️ แก้ไขข้อมูลนักกีฬา</h3><p class="text-xs text-slate-500 mt-1">${esc(reg.students?.full_name||'')} · ${esc(reg.sports?.name||'')}</p></div><button type="button" data-close class="text-2xl text-slate-400">×</button></div><label class="block text-sm font-bold mt-5">หมายเลขเสื้อ</label><input data-jersey value="${esc(reg.jersey_number||'')}" maxlength="20" inputmode="numeric" class="mt-2 w-full border rounded-xl px-4 py-3" placeholder="เว้นว่างได้"><p class="text-xs text-slate-500 mt-2">ช่วงแก้ไขนี้เปลี่ยนได้เฉพาะข้อมูลเดิม ไม่สามารถเพิ่มหรือถอนนักกีฬา</p><button class="mt-5 w-full bg-emerald-600 text-white rounded-xl py-3 font-bold">บันทึก</button></form>`
  document.body.appendChild(modal);modal.querySelector('[data-close]').onclick=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)modal.remove()}
  modal.querySelector('form').onsubmit=async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;btn.textContent='กำลังบันทึก...';const {data,error}=await supabase.rpc('team_update_athlete_registration',{p_registration:reg.id,p_jersey_number:modal.querySelector('[data-jersey]').value});if(error){btn.disabled=false;btn.textContent='บันทึก';return toast(error.message,'error')}reg.jersey_number=Array.isArray(data)?data[0]?.jersey_number:data?.jersey_number;modal.remove();toast('แก้ไขหมายเลขเสื้อแล้ว');onSaved?.()}
}

function renderTeamAthletesTab(body,data,card){
  const {c,cfg,regs,competitions,publicButtons,canReg,studentView}=data
  const eligible=(competitions||[]).filter(s=>!s.gender||s.gender==='Coed'||s.gender===c.gender)
  const registeredIds=new Set(regs.map(r=>String(r.sport_id||r.sports?.id||'')))
  const uniqueAthletes=new Set(regs.map(r=>r.student_id||r.students?.id).filter(Boolean)).size
  const coverage=eligible.length?Math.round(registeredIds.size*100/eligible.length):0
  const now=Date.now(), editOpen=cfg?.athlete_edit_opens_at&&now>=new Date(cfg.athlete_edit_opens_at).getTime()&&(!cfg?.athlete_edit_closes_at||now<=new Date(cfg.athlete_edit_closes_at).getTime())
  const canEdit=!studentView&&canReg&&editOpen
  const counts=new Map();regs.forEach(r=>{const id=String(r.sport_id||r.sports?.id||'');counts.set(id,(counts.get(id)||0)+1)})
  body.innerHTML=`<div class="space-y-4"><section class="${card}"><div class="flex flex-wrap justify-between gap-3"><div><h2 class="font-bold">🏃 นักกีฬาในสี</h2><p class="text-xs muted">นักกีฬาไม่ซ้ำ ${uniqueAthletes} คน · ${regs.length} รายการสมัคร · ลงแล้ว ${registeredIds.size}/${eligible.length} ประเภท (${coverage}%)</p></div><div class="flex flex-wrap gap-2">${publicButtons.athlete_print!==false?`<button data-print-athletes class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">🖨️ พิมพ์/บันทึกใบรายชื่อ</button>`:''}${publicButtons.athlete_registration?`<button data-full data-aziz-tab="p2" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">ลงทะเบียนนักกีฬา</button>`:''}</div></div><div class="mt-4 h-3 rounded-full team-sub overflow-hidden"><div class="h-full bg-emerald-500 rounded-full" style="width:${coverage}%"></div></div><div class="flex justify-between text-xs muted mt-1"><span>ความครอบคลุมรายการแข่งขัน</span><span>ยังขาด ${Math.max(0,eligible.length-registeredIds.size)} ประเภท</span></div>${canEdit?`<p class="mt-3 text-xs tone-ok">เปิดให้ฝ่ายสีแก้ไขข้อมูลเดิมถึง ${cfg.athlete_edit_closes_at?new Date(cfg.athlete_edit_closes_at).toLocaleString('th-TH'):'ไม่กำหนดเวลาปิด'}</p>`:''}</section><details class="${card}"><summary class="font-bold cursor-pointer">📊 ดูประเภทที่ลงแล้วและยังขาด</summary><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">${eligible.map(s=>{const n=counts.get(String(s.id))||0;return `<button type="button" data-filter-sport="${esc(s.id)}" class="team-sub rounded-xl p-3 text-left flex justify-between gap-2"><span><b class="text-sm">${n?'✅':'❌'} ${esc(s.name)}</b><small class="block muted mt-1">${esc(s.code||'')} · ${esc(s.gender||'รวม')}</small></span><b class="${n?'tone-ok':'tone-bad'}">${n} คน</b></button>`}).join('')||'<p class="text-sm muted">ยังไม่มีประเภทการแข่งขัน</p>'}</div></details><section class="${card}"><div class="grid md:grid-cols-[1fr_260px] gap-2 mb-4"><input id="athlete-search" class="team-field rounded-xl px-3 py-2 text-sm" placeholder="🔍 ค้นหาชื่อ รหัส ห้อง กีฬา หรือเบอร์เสื้อ"><select id="athlete-sport-filter" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกประเภทการแข่งขัน</option>${eligible.map(s=>`<option value="${esc(s.id)}">${esc(s.name)}</option>`).join('')}</select></div><p id="athlete-result-count" class="text-xs muted mb-2"></p><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2 text-left">นักเรียน</th><th class="p-2 text-left">รายการ</th><th class="p-2">เบอร์</th><th class="p-2 text-right">เครื่องมือ</th></tr></thead><tbody id="athlete-rows"></tbody></table></div></section></div>`
  let query='',sportId=''
  const draw=()=>{
    const q=query.trim().toLowerCase()
    const filtered=regs.filter(r=>{
      const rid=String(r.sport_id||r.sports?.id||'')
      if(sportId&&rid!==sportId)return false
      return !q||[r.students?.full_name,r.students?.student_code,r.students?.main_room,r.sports?.name,r.sports?.code,r.jersey_number].some(v=>String(v||'').toLowerCase().includes(q))
    })
    body.querySelector('#athlete-result-count').textContent=`แสดง ${filtered.length} จาก ${regs.length} รายการ`
    body.querySelector('#athlete-rows').innerHTML=filtered.map(r=>{
      const photo=r.students?.image_url||r.students?.photo_url
      const initial=(r.students?.full_name||'?').trim().charAt(0)||'?'
      return `<tr class="border-b line"><td class="p-2"><div class="flex items-center gap-3 min-w-[190px]">${photo?`<img data-athlete-photo src="${esc(photo)}" alt="รูป ${esc(r.students?.full_name||'นักเรียน')}" class="w-10 h-12 rounded-lg object-cover border border-slate-700/60 bg-slate-800 flex-shrink-0" loading="lazy"><div data-athlete-photo-fallback class="hidden w-10 h-12 rounded-lg team-sub place-items-center font-bold flex-shrink-0">${esc(initial)}</div>`:`<div class="w-10 h-12 rounded-lg team-sub grid place-items-center font-bold flex-shrink-0">${esc(initial)}</div>`}<div class="min-w-0"><b class="block truncate">${esc(r.students?.full_name||'—')}</b><p class="text-xs muted truncate">${esc(r.students?.student_code||'')} · ${esc(r.students?.main_room||'')}</p></div></div></td><td class="p-2">${esc(r.sports?.name||'—')}</td><td class="p-2 text-center font-bold">${esc(r.jersey_number||'—')}</td><td class="p-2"><div class="flex justify-end gap-1"><button data-athlete-qr="${r.id}" class="px-2 py-1.5 rounded-lg team-sub text-xs font-bold">🔳 QR</button>${canEdit?`<button data-athlete-edit="${r.id}" class="px-2 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold">✏️ แก้ไข</button>`:''}</div></td></tr>`
    }).join('')||'<tr><td colspan="4" class="p-8 text-center muted">ไม่พบข้อมูลที่ตรงกับเงื่อนไข</td></tr>'
    body.querySelectorAll('[data-athlete-photo]').forEach(img=>img.onerror=()=>{img.classList.add('hidden');const fallback=img.nextElementSibling;fallback?.classList.remove('hidden');fallback?.classList.add('grid')})
    body.querySelectorAll('[data-athlete-qr]').forEach(b=>b.onclick=()=>openTeamAthleteQR(regs.find(r=>String(r.id)===b.dataset.athleteQr),c))
    body.querySelectorAll('[data-athlete-edit]').forEach(b=>b.onclick=()=>openTeamAthleteEdit(regs.find(r=>String(r.id)===b.dataset.athleteEdit),draw))
  }
  body.querySelector('#athlete-search').oninput=e=>{query=e.target.value;draw()};body.querySelector('#athlete-sport-filter').onchange=e=>{sportId=e.target.value;draw()};body.querySelectorAll('[data-filter-sport]').forEach(b=>b.onclick=()=>{sportId=b.dataset.filterSport;body.querySelector('#athlete-sport-filter').value=sportId;draw();body.querySelector('#athlete-search').scrollIntoView({behavior:'smooth',block:'center'})});draw()
}

function renderTeamWorkspaceTab(wrap,tab,data){
  const body=wrap.querySelector('#team-tab-body'), {m,c,event,cfg,shirtSizes,publicButtons,docHeader,membersList,tasks,anns,identity,regs,matches,totals,shirtReqs,competitions,attendance,scoreBreakdown,maxParadeScore,maxPageScore,maxColorEvalScore,medalBreakdown,campCalendar,duesPayments,fundLedger,compAssignments,myTotal,scoreRank,medalRank,pendingTasks,doneMatches,canMembers,canReg,canTasks,canAnn,canShirt,canAttendance,canDues,canExpenses,canCompAssign,isLead,canManageStaff,studentView}=data
  const card='team-card rounded-2xl p-5 border', sub='team-sub rounded-xl p-3'
  if(tab==='overview') {
    const eligibleSports=(competitions||[]).filter(s=>!s.gender||s.gender==='Coed'||s.gender===c.gender)
    const registeredSportCount=new Set(regs.map(r=>String(r.sport_id||r.sports?.id||''))).size
    const uniqueAthleteCount=new Set(regs.map(r=>r.student_id||r.students?.id).filter(Boolean)).size
    const registrationCoverage=eligibleSports.length?Math.round(registeredSportCount*100/eligibleSports.length):0
    const kpisBefore=[
      {label:'สมาชิก',value:membersList.length,icon:'👥',bg:'from-blue-500 to-indigo-600',goto:'members'},
      {label:'นักกีฬาไม่ซ้ำ',value:uniqueAthleteCount,detail:`${regs.length} รายการ · ${registeredSportCount}/${eligibleSports.length} ประเภท (${registrationCoverage}%)`,icon:'🏃',bg:'from-emerald-500 to-teal-600',goto:'athletes'},
      {label:'ผู้จัดการทีม',value:compAssignments.length,icon:'🧑‍💼',bg:'from-cyan-500 to-blue-600',goto:'managers'},
      {label:'งานค้าง',value:pendingTasks,icon:'📋',bg:'from-amber-400 to-orange-600',goto:'work'},
    ]
    const kpisAfter=[
      {label:'อันดับคะแนน',value:`#${scoreRank}`,icon:'🏅',bg:'from-violet-500 to-purple-600',goto:'scores'},
      {label:'อันดับเหรียญ',value:`#${medalRank}`,icon:'🥇',bg:'from-yellow-500 to-amber-600',goto:'scores'},
    ]
    const kpiBtn=k=>`<button type="button" data-goto-tab="${k.goto}" class="text-left rounded-2xl p-4 flex flex-col justify-between shadow-lg text-white bg-gradient-to-br ${k.bg} transition-transform duration-300 hover:-translate-y-1 cursor-pointer"><div class="flex justify-between items-start"><span class="text-[10px] md:text-xs text-white/80 font-semibold tracking-wide leading-tight">${esc(k.label)}</span><span class="text-lg">${k.icon}</span></div><span class="text-2xl md:text-3xl font-extrabold mt-3">${esc(k.value)}</span>${k.detail?`<span class="text-[10px] text-white/85 mt-1">${esc(k.detail)}</span>`:''}</button>`
    // "แข่งแล้ว" แยกออกมาจาก kpis ทั่วไปเพราะมีปุ่มสลับช่วงเวลาในตัว — ดีฟอลต์นับเฉพาะนัดที่นัดไว้
    // วันนี้ (scheduled_date ตรงวันปัจจุบัน) สลับดูรวมทุกวันได้โดยไม่ต้องออกจากการ์ด
    const todayStr=_dateInputValueLocal(new Date())
    const matchesToday=matches.filter(x=>x.scheduled_date===todayStr)
    const doneMatchesToday=matchesToday.filter(x=>x.status==='done').length
    // ใช้ <div> ห่อนอกแทน <button> (แต่ยังใช้ data-goto-tab ได้เหมือนกัน — ตัว wiring จับทุก element
    // ที่มี attribute นี้ ไม่จำกัดแค่ <button>) เพราะข้างในมีปุ่มสลับช่วงเวลาซ้อนอยู่ ห้ามซ้อน
    // <button> ใน <button> (HTML ไม่รองรับ เบราว์เซอร์จะดันปุ่มในออกมานอกโครงสร้างเอง)
    const matchesTile=`<div data-goto-tab="schedule" data-matches-tile class="relative text-left rounded-2xl p-4 flex flex-col justify-between shadow-lg text-white bg-gradient-to-br from-pink-500 to-rose-600 transition-transform duration-300 hover:-translate-y-1 cursor-pointer"><div class="flex justify-between items-start"><span data-matches-label class="text-[10px] md:text-xs text-white/80 font-semibold tracking-wide leading-tight">แข่งแล้ว (วันนี้)</span><span class="text-lg">🗓️</span></div><span data-matches-value class="text-2xl md:text-3xl font-extrabold mt-3">${doneMatchesToday}/${matchesToday.length}</span><button type="button" data-toggle-matches-scope data-scope="today" class="self-end text-[9px] font-bold bg-black/25 hover:bg-black/40 rounded-full px-2 py-0.5 mt-1">ดูทั้งหมด</button></div>`
    body.innerHTML=`<div class="space-y-5">
      <section class="rounded-3xl p-5 text-white overflow-hidden" style="background:linear-gradient(135deg,${esc(c.hex_color)},#111827)"><h2 class="font-bold text-sm">👋 สรุปภาพรวมสี${esc(c.name)}</h2><p class="text-xs opacity-80 mt-1">${esc(roleLabel(m.role))} — แตะการ์ดด้านล่างเพื่อไปยังหน้าที่เกี่ยวข้องได้เลย</p></section>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">${kpisBefore.map(kpiBtn).join('')}${matchesTile}${kpisAfter.map(kpiBtn).join('')}</div>
      <section class="${card} flex flex-wrap items-center justify-between gap-3">
        <div><h2 class="font-bold">📷 ช่วยกันเก็บภาพความทรงจำหน่อย!</h2><p class="text-xs muted mt-1">ถ่ายภาพบรรยากาศตอนเข้าค่ายสี ตอนแข่งขัน หรือเชียร์เพื่อนๆ แล้วอัปโหลดเก็บไว้ — ทุกสีเห็นภาพของกันและกันได้ในแกลเลอรีรวม</p></div>
        <button type="button" data-goto-tab="gallery" class="px-5 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold flex-shrink-0">📸 ไปถ่าย/อัปโหลดรูป</button>
      </section>
      <section class="${card}"><h2 class="font-bold mb-3">🧭 สิทธิ์และเมนูของบทบาทนี้</h2><div class="grid md:grid-cols-5 gap-2">${permPill('สมาชิก',canMembers)}${permPill('ลงทะเบียนนักกีฬา',canReg)}${permPill('ประกาศ',canAnn)}${permPill('งานของสี',canTasks)}${permPill('สรุปเสื้อเฉพาะสี',canShirt)}${permPill('เก็บค่าบำรุงสี',canDues)}${permPill('บันทึกรายรับ-รายจ่ายสี',canExpenses)}${permPill('มอบหมายรายการแข่งขัน',canCompAssign)}</div></section>
    </div>`
    // สลับตัวเลข "แข่งแล้ว" ระหว่างวันนี้/ทั้งหมดในเครื่อง ไม่ต้องรีเฟรชข้อมูลใหม่ทั้งหน้า เพราะ
    // ทั้งสองค่าคำนวณไว้ในตัวแปรพร้อมอยู่แล้ว (matches ทั้งชุดโหลดมาแล้วตั้งแต่ต้น)
    body.querySelector('[data-toggle-matches-scope]')?.addEventListener('click',e=>{
      e.stopPropagation()
      const btn=e.currentTarget, tile=btn.closest('[data-matches-tile]')
      const valueEl=tile.querySelector('[data-matches-value]'), labelEl=tile.querySelector('[data-matches-label]')
      if(btn.dataset.scope==='today'){
        valueEl.textContent=`${doneMatches}/${matches.length}`
        labelEl.textContent='แข่งแล้ว (ทั้งหมด)'
        btn.textContent='ดูวันนี้'
        btn.dataset.scope='all'
      } else {
        valueEl.textContent=`${doneMatchesToday}/${matchesToday.length}`
        labelEl.textContent='แข่งแล้ว (วันนี้)'
        btn.textContent='ดูทั้งหมด'
        btn.dataset.scope='today'
      }
    })
  }
  else if(tab==='members'){
    const duesPaidIds=canDues?new Set((duesPayments||[]).map(d=>d.student_id)):null
    const memberLevelOf=room=>{const r=String(room||'ไม่ระบุ');return r.startsWith('ปวช.')?'ปวช.':(r.split('/')[0]||'ไม่ระบุ')}
    const memberLevelSortKey=l=>l.startsWith('ปวช.')?100:(parseInt(l.replace('ม.',''))||99)
    const memberLevels=[...new Set(membersList.map(s=>memberLevelOf(s.main_room)))].sort((a,b)=>memberLevelSortKey(a)-memberLevelSortKey(b))
    let memberSearch='', memberLevel=''
    body.innerHTML=`<section class="${card}">
      <div class="flex flex-wrap justify-between gap-3 mb-4">
        <div><h2 class="font-bold">👥 รายชื่อสมาชิกในสี</h2><p class="text-xs muted">รายชื่อนักเรียนสี${esc(c.name)} ทั้งหมด ${membersList.length} คน</p></div>
        ${publicButtons.athlete_print!==false?`<button data-print-members class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">🖨️ พิมพ์/บันทึกใบรายชื่อสมาชิก</button>`:''}
      </div>
      <div class="flex flex-wrap gap-2 mb-3">
        <input id="member-search" type="text" placeholder="🔍 ค้นหาชื่อหรือรหัสนักเรียน..." class="team-field rounded-xl px-3 py-2 text-sm flex-1 min-w-[220px]">
        <select id="member-level-filter" class="team-field rounded-xl px-3 py-2 text-sm"><option value="">ทุกระดับชั้น</option>${memberLevels.map(l=>`<option value="${esc(l)}">${esc(l)}</option>`).join('')}</select>
      </div>
      <p id="member-count" class="text-xs muted mb-3"></p>
      <div id="member-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-2"></div>
    </section>`
    const drawMembers=()=>{
      const q=memberSearch.trim().toLowerCase()
      const filtered=membersList.filter(s=>{
        if(memberLevel && memberLevelOf(s.main_room)!==memberLevel) return false
        if(q && !(String(s.full_name||'').toLowerCase().includes(q) || String(s.student_code||'').toLowerCase().includes(q))) return false
        return true
      })
      body.querySelector('#member-count').textContent=`แสดง ${filtered.length} จาก ${membersList.length} คน`
      body.querySelector('#member-grid').innerHTML=filtered.map(s=>memberCard(s,duesPaidIds)).join('')||'<p class="text-sm muted col-span-full">ไม่พบรายชื่อที่ตรงกับเงื่อนไข</p>'
    }
    body.querySelector('#member-search').addEventListener('input',e=>{memberSearch=e.target.value;drawMembers()})
    body.querySelector('#member-level-filter').addEventListener('change',e=>{memberLevel=e.target.value;drawMembers()})
    drawMembers()
  }
  else if(tab==='athletes') renderTeamAthletesTab(body,data,card)
  else if(tab==='managers') body.innerHTML=`<section id="sports-comp-assign" class="${card}"><div class="py-8 text-center muted">กำลังโหลดหน้ามอบหมายรายการแข่งขัน...</div></section>`
  else if(tab==='permissions') body.innerHTML=`${isLead?`<section class="${card} mb-4"><h2 class="font-bold mb-1">🎖️ เกณฑ์เช็คชื่อขั้นต่ำสำหรับเกียรติบัตร (เฉพาะสีนี้)</h2><p class="text-xs muted mb-3">ปล่อยว่างไว้ = ใช้ค่าเริ่มต้นของแอดมิน (ตอนนี้ ${Number(cfg?.cert_attendance_threshold_pct??80)}%) — กำหนดเป็นตัวเลขถ้าอยากให้สีนี้เข้มงวด/ผ่อนปรนกว่าสีอื่น</p><div class="flex gap-2 items-center"><input id="cert-threshold-override" type="number" min="0" max="100" step="1" placeholder="ค่าเริ่มต้น (${Number(cfg?.cert_attendance_threshold_pct??80)}%)" value="${c.cert_attendance_threshold_pct_override ?? ''}" class="w-40 rounded-xl team-field px-3 py-2 text-sm"><button id="cert-threshold-save" class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold">บันทึก</button></div></section>`:''}<section id="sports-team-membership-admin" class="${card}"><div class="py-8 text-center muted">กำลังโหลดหน้ามอบหมายสิทธิ์ประจำสี...</div></section>`
  else if(tab==='shirts') body.innerHTML=shirtSection(c,shirtReqs,shirtSizes)
  else if(tab==='work') body.innerHTML=`<div class="grid xl:grid-cols-2 gap-5">${canTasks?`<section class="${card}"><h2 class="font-bold mb-3">📋 งานของสี</h2>${tasks.map(t=>`<div class="${sub} mb-2"><b>${esc(t.title)}</b><span class="float-right text-xs text-cyan-400">${esc(t.status)}</span><p class="text-xs muted">${esc(t.detail||'')}</p></div>`).join('')||'<p class="text-sm muted">ยังไม่มีงาน</p>'}</section>`:''}${canAnn?`<section class="${card}"><h2 class="font-bold mb-3">📢 ประกาศ</h2>${anns.map(a=>`<div class="${sub} mb-2"><b>${esc(a.title)}</b><p class="text-sm muted">${esc(a.body)}</p></div>`).join('')||'<p class="text-sm muted">ยังไม่มีประกาศ</p>'}</section>`:''}</div>`
  else if(tab==='attendance') renderAttendanceSection(body,{event,c,membersList,attendance,campCalendar,card,cfg})
  else if(tab==='dues') renderDuesSection(body,{event,c,membersList,duesPayments,duesAmount:cfg?.dues_amount||30,card})
  else if(tab==='ledger') renderTeamLedgerSection(body,{event,c,fundLedger,canExpenses,card})
  else if(tab==='gallery') renderGallerySection(body,{event,c,competitions,card,studentView:data.studentView})
  else if(tab==='schedule') renderScheduleSection(body,matches,c.name,card)
  else if(tab==='scores') renderScoreMedalSection(body,{totals,colorName:c.name,gender:c.gender,myTotal,scoreRank,medalRank,scoreBreakdown,maxParadeScore,maxPageScore,maxColorEvalScore,medalBreakdown,card})
  else if(tab==='identity') body.innerHTML=`<section class="${card}"><div class="flex flex-wrap justify-between gap-3 mb-3"><div><h2 class="font-bold">🎨 เสนอแก้อัตลักษณ์ประจำสี</h2><p class="text-xs muted">โลโก้/ชื่อ/คำขวัญใช้ชุดเดียวกับระบบกีฬาสีหลัก และต้องผ่านหัวหน้าครูประจำสี + แอดมิน</p></div><button id="identity-new" class="px-4 py-2 bg-violet-600 text-white rounded-xl">สร้างคำขอ</button></div><div class="space-y-2">${identity.map(x=>`<div class="${sub} flex justify-between gap-3"><span>${esc(x.proposed_name||'แก้ไขอัตลักษณ์/โลโก้')}</span><span class="text-xs tone-warn">${esc(x.status)}</span></div>`).join('')||'<p class="text-sm muted">ยังไม่มีคำขอ</p>'}</div></section>`
  body.querySelectorAll('[data-full]').forEach(b=>b.onclick=()=>openAzizGamesModal({tab:b.dataset.azizTab||'',stdid:m?.student_id?m._studentCode||'':''}))
  body.querySelectorAll('[data-goto-tab]').forEach(b=>b.onclick=()=>wrap.querySelector(`[data-team-tab="${b.dataset.gotoTab}"]`)?.click())
  body.querySelector('#identity-new')?.addEventListener('click',()=>identityForm(wrap,m,c))
  body.querySelector('[data-print-members]')?.addEventListener('click',()=>printColorRoster(c.name,membersList,docHeader))
  body.querySelector('[data-print-athletes]')?.addEventListener('click',()=>openAthletePrintDialog(wrap,c,regs,competitions))
  if(tab==='managers'){
    // มอบหมายรายการแข่งขันให้สตาฟรับผิดชอบเฉพาะคน — สิทธิ์แยกต่างหาก (comp_assign) ไม่ผูกกับ
    // role และไม่ปนกับสิทธิ์ลงทะเบียนกีฬา ใครก็ได้ในทีมที่ได้รับสิทธิ์นี้มอบหมายได้ คนอื่นเห็นได้แต่แก้ไม่ได้
    // แยกเป็นแท็บของตัวเอง ("ผู้จัดการทีม") ไม่ปนกับแท็บ "นักกีฬา" ตามคำขอผู้ใช้ — คนละความหมายกัน
    renderCompetitionAssignmentSection(wrap,{event,c,m,competitions,canManage:canCompAssign})
  }
  if(tab==='permissions'&&canManageStaff){
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
function shirtSection(c, reqs, shirtSizes) {
  const sizes=(shirtSizes||DEFAULT_SHIRT_SIZES).map(s=>s.code); const rows=(reqs||[]).filter(r=>r.students?.house_color===c.name); const confirmed=rows.filter(r=>['confirmed','advisor_updated'].includes(r.status))
  return `<section class="team-card rounded-2xl p-5 border"><div class="flex flex-wrap justify-between gap-3 mb-3"><div><h2 class="font-bold">👕 ข้อมูลไซซ์เสื้อเฉพาะสี${esc(c.name)}</h2><p class="text-xs muted">ไม่แสดงยอดทุกสีแบบแอดมิน เห็นเฉพาะสีของตัวเอง</p></div><div class="text-sm muted">ยืนยันแล้ว ${confirmed.length}/${rows.length}</div></div><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b line"><th class="p-2 text-left">ไซซ์</th>${sizes.map(s=>`<th class="p-2">${esc(s)}</th>`).join('')}<th class="p-2">รวม</th></tr></thead><tbody><tr><td class="p-2 font-bold">ยืนยันแล้ว</td>${sizes.map(s=>`<td class="p-2 text-center">${confirmed.filter(r=>r.confirmed_size===s).length}</td>`).join('')}<td class="p-2 text-center font-bold">${confirmed.length}</td></tr><tr class="border-t line"><td class="p-2 font-bold">รอยืนยัน</td>${sizes.map(s=>`<td class="p-2 text-center">${rows.filter(r=>r.status==='pending'&&r.requested_size===s).length}</td>`).join('')}<td class="p-2 text-center font-bold">${rows.filter(r=>r.status==='pending').length}</td></tr></tbody></table></div></section>`
}
function trackingSection(matches, totals, colorName, myTotal, scoreRank, medalRank) {
  const done=matches.filter(m=>m.status==='done'), upcoming=matches.filter(m=>m.status!=='done')
  return `<section class="team-card rounded-2xl p-5 border"><div class="flex flex-wrap justify-between gap-3 mb-4"><div><h2 class="font-bold">📊 ติดตามการแข่งขัน คะแนน และเหรียญ</h2><p class="text-xs muted">ข้อมูลอ่านจากตารางเดียวกับระบบกีฬาสีหลัก</p></div><div class="flex gap-2 text-xs"><span class="px-3 py-1 rounded-full status-warn">อันดับสี #${scoreRank}</span><span class="px-3 py-1 rounded-full status-warn">อันดับเหรียญ #${medalRank}</span></div></div><div class="grid md:grid-cols-5 gap-2 mb-4">${[['คะแนนรวม',myTotal.grand_total||0],['คะแนนกรรมการ',myTotal.rubric_points||0],['🥇 ทอง',myTotal.gold_count||0],['🥈 เงิน',myTotal.silver_count||0],['🥉 ทองแดง',myTotal.bronze_count||0]].map(([l,v])=>`<div class="team-sub rounded-xl p-3"><p class="text-xs muted">${l}</p><b class="text-2xl">${Number(v).toLocaleString()}</b></div>`).join('')}</div><div class="grid xl:grid-cols-2 gap-4"><div><h3 class="font-bold mb-2">🗓️ ตาราง/ติดตามการแข่งขันของสี${esc(colorName)}</h3><div class="space-y-2">${upcoming.slice(0,12).map(m=>matchRow(m)).join('')||'<p class="text-sm muted">ยังไม่มีตารางที่รอแข่งขัน</p>'}</div></div><div><h3 class="font-bold mb-2">✅ ผลการแข่งขันล่าสุด</h3><div class="space-y-2">${done.slice(0,12).map(m=>matchRow(m)).join('')||'<p class="text-sm muted">ยังไม่มีผลการแข่งขัน</p>'}</div></div></div></section>`
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
  const todayStr=todayLocal()

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
      <div id="sched-sport-select-wrap" class="flex-1 min-w-[200px]"></div>
    </div>
    <div id="sched-list"></div>
  </section>`

  const sportPicker=_createPickerSelect({wrap:body.querySelector('#sched-sport-select-wrap'),items:sportOptions.map(s=>({id:s.id,label:s.name,photo:sportIconUrl(s)})),placeholder:'พิมพ์ชื่อรายการ...',emptyLabel:'-- เลือกรายการแข่งขันเพื่อดูทุกรอบ --',photoClass:'w-6 h-6 object-contain flex-shrink-0',onChange:v=>{filterMode=v||'none';renderList()}})

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
  body.querySelector('[data-sched-today]').onclick=()=>{filterMode=filterMode==='today'?'none':'today';sportPicker.reset();renderList()}
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

// ---------------- คิวออฟไลน์สำหรับเช็คชื่อ/เก็บค่าบำรุงสี (กันเน็ตหลุดกลางสนามกีฬา) ----------------
// แพทเทิร์นเดียวกับ az_offline_queue ใน js/azfutsal.js: เขียนลง localStorage ทันทีเสมอ (ไม่รอเช็ค
// ว่าออนไลน์ก่อน) แล้วค่อยพยายาม sync ขึ้นเซิร์ฟเวอร์เป็นพื้นหลัง ถ้าพลาด (เน็ตหลุด) ค้างคิวไว้
// retry ใหม่เรื่อยๆ รักษาลำดับเดิม — sports_attendance/sports_team_dues มี unique constraint
// อยู่แล้ว ถ้า sync ช้าแล้วมีคนอื่นบันทึกซ้ำไปก่อน (23505) ถือว่าสำเร็จแล้วเหมือนกัน ไม่ต้อง error
const SPORTS_QUEUE_KEY='sports_offline_queue'
const sqGet=()=>{try{return JSON.parse(localStorage.getItem(SPORTS_QUEUE_KEY)||'[]')}catch{return[]}}
const sqSet=q=>localStorage.setItem(SPORTS_QUEUE_KEY,JSON.stringify(q))
const sqMakeLocalId=()=>'local_'+Date.now()+'_'+Math.random().toString(36).slice(2,9)
// heuristic: เน็ตหลุดจริงๆ ต่างจาก error อื่น (สิทธิ์ไม่พอ/validation) ที่ retry ไปก็ไม่หาย
const sqLikelyOffline=e=>!navigator.onLine||/fetch|network|load failed/i.test(e?.message||'')

let _sportsSyncing=false
const _sportsQueueListeners=new Set()
function onSportsQueueChange(fn){_sportsQueueListeners.add(fn);return()=>_sportsQueueListeners.delete(fn)}
function _notifySportsQueueChange(){const q=sqGet();_sportsQueueListeners.forEach(fn=>{try{fn(q)}catch(e){console.warn(e)}})}

function sportsQueuePush(item){
  const q=sqGet()
  q.push({localId:sqMakeLocalId(),...item})
  sqSet(q)
  _notifySportsQueueChange()
  trySyncSportsQueue()
  return q[q.length-1].localId
}
function sportsQueueRemoveLocal(localId){
  sqSet(sqGet().filter(item=>item.localId!==localId))
  _notifySportsQueueChange()
}
async function _processSportsQueueItem(item){
  const table=item.type==='attendance'?'sports_attendance':'sports_team_dues'
  const{error}=await supabase.from(table).insert(item.payload)
  if(error&&error.code!=='23505')throw error
}
async function trySyncSportsQueue(){
  if(_sportsSyncing)return
  let queue=sqGet()
  if(!queue.length)return
  _sportsSyncing=true
  let processed=0
  for(const item of queue){
    try{await _processSportsQueueItem(item);processed++}
    catch(e){break} // เจอปัญหา (เน็ตหลุดจริง) หยุดตรงนี้ เก็บที่เหลือไว้ retry รอบหน้า รักษาลำดับเดิม
  }
  _sportsSyncing=false
  if(processed>0){
    queue=queue.slice(processed)
    sqSet(queue)
    _notifySportsQueueChange()
  }
}
window.addEventListener('online',()=>trySyncSportsQueue())

// แท็บ "เช็คชื่อ" — เช็คชื่อนักกีฬาเข้าค่ายสี/วันงานจริงด้วยสแกน QR ประจำตัว (หรือกรอกรหัสมือ
// เผื่อไม่ได้พก QR) เห็นได้เฉพาะพ่อสี/แม่สี ครูประจำสี และนักเรียนสต๊าฟที่ได้รับมอบสิทธิ์
// "attendance" (ดูสิทธิ์ได้ที่แท็บ "สิทธิ์ประจำสี") — สรุปคนขาดออกเป็นรายงาน CSV ให้ครูกิจการ
// นักเรียนเอาไปหักคะแนนกิจกรรมพัฒนาผู้เรียนนอกระบบ (ระบบนี้ไม่ได้เชื่อมคะแนนให้อัตโนมัติ)
function renderAttendanceSection(body,{event,c,membersList,attendance,campCalendar,card,cfg}){
  const todayStr=todayLocal()
  // จับคู่วันนี้กับ "ปฏิทินปฏิบัติงาน" ที่ครูตั้งวันเข้าสี/กีฬาสีไว้ล่วงหน้าแล้ว (work_calendar_events)
  // แทนที่จะให้เลือกประเภทเช็คชื่อเองมั่วๆ ทุกครั้ง — ยังกดสลับมือทับได้เผื่อปฏิทินผิด/ทดสอบระบบ
  const todayMatch=(campCalendar||[]).find(ev=>todayStr>=ev.event_date && todayStr<=(ev.end_date||ev.event_date))
  const sessionTypeForLabel=label=>label&&label.includes('เข้าสี')?'pre_event':'event_day'
  const autoSessionType=todayMatch ? sessionTypeForLabel(todayMatch.label) : null
  let sessionType=autoSessionType||'pre_event'
  // เช็คชื่อย้อนหลัง — เดิมบันทึกลง session_date=วันนี้ตายตัวเสมอ ไม่มีทางแก้ห้องที่ตกหล่นไปแล้ว
  // (เช่นครูที่ปรึกษาลาวันนั้น ทั้งแท็บของครูที่ปรึกษาเองก็ล็อกเฉพาะ advisor_checkin_date วันเดียว)
  // เพิ่มดรอปดาวน์เลือกวันที่จากปฏิทินปฏิบัติงาน (เฉพาะวันที่ผ่านมาแล้วหรือวันนี้ ห้ามอนาคต) ให้
  // ฝ่ายสีย้อนกลับไปบันทึกแทนได้ — ดีฟอลต์ยังเป็นวันนี้เสมอ กันกดพลาดย้อนหลังโดยไม่ตั้งใจ
  const calendarDaysDesc=_expandCalendarDays(campCalendar) // เรียงใหม่→เก่าอยู่แล้ว
  const pastCalendarDays=calendarDaysDesc.filter(d=>d.date<todayStr)
  const dateOptions=[{date:todayStr,label:todayMatch?.label||'วันนี้'},...pastCalendarDays]
  let sessionDate=todayStr
  // วันเข้าสีวันแรกที่แอดมินกำหนดไว้ (sports_portal_settings.advisor_checkin_date) — ครูที่ปรึกษา
  // สามัญเช็คชื่อช่วงเข้าแถวตอนเช้าเท่านั้น (คนละช่วงเวลากับที่ฝ่ายสีใช้หน้านี้) ถ้าตกหล่นหรือครูที่
  // ปรึกษาไม่ได้เช็ค นักเรียนต้องแจ้งพ่อสี/แม่สี/ครูประจำสีให้เช็คแทนได้เลยตามปกติ — จึง "ไม่ล็อก"
  // ปุ่มใดๆ แค่ขึ้นแบนเนอร์แจ้งเตือนเฉยๆ ส่วนการกันบันทึกทับกันจริงอาศัย unique constraint เดิม
  // ของตาราง sports_attendance (ใครกดซ้ำทีหลังจะเจอ error 23505 ซึ่งจัดการเป็นข้อความที่เข้าใจง่ายแทน)
  const advisorCheckinToday=!!cfg?.advisor_checkin_date && todayStr===cfg.advisor_checkin_date
  let attendanceLocal=[...attendance]
  let leavePasses=[]
  let recentScans=[]
  let html5Qrcode=null, scanning=false, reportAbsent=[]
  let areaLeaveModal=null, areaLeaveScanner=null, areaLeaveScanning=false, leaveSystemReady=true

  const campBanner=(()=>{
    if(!todayMatch) return `<div class="rounded-xl px-3 py-2 text-xs font-bold bg-amber-500/10 text-amber-400 mb-3">⚠️ วันนี้ไม่ตรงกับวันเข้าสี/กีฬาสีในปฏิทินปฏิบัติงาน — เลือกประเภทด้วยตนเองด้านล่าง (หรือกำลังทดสอบระบบ)</div>`
    const isMulti=todayMatch.end_date&&todayMatch.end_date!==todayMatch.event_date
    const dayNo=isMulti?Math.floor((new Date(todayStr)-new Date(todayMatch.event_date))/86400000)+1:null
    const totalDays=isMulti?Math.floor((new Date(todayMatch.end_date)-new Date(todayMatch.event_date))/86400000)+1:null
    return `<div class="rounded-xl px-3 py-2 text-xs font-bold bg-emerald-500/10 text-emerald-400 mb-3">📅 วันนี้ตรงกับ "${esc(todayMatch.label)}"${isMulti?` (วันที่ ${dayNo} จาก ${totalDays})`:''} ในปฏิทินปฏิบัติงาน — ตั้งประเภทเช็คชื่อให้อัตโนมัติแล้ว</div>`
  })()

  body.innerHTML=`<section class="${card}">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <div><h2 class="font-bold">📷 เช็คชื่อเข้าร่วมสี${esc(c.name)}</h2><p id="att-subtitle" class="text-xs muted">สแกน QR ประจำตัวนักเรียน หรือกรอกรหัสด้วยมือ — บันทึกของวันที่ ${todayStr}</p></div>
      <div class="flex flex-wrap items-center gap-2">
        ${dateOptions.length>1?`<select id="att-session-date" class="rounded-xl team-field px-3 py-2 text-xs font-bold">${dateOptions.map(d=>`<option value="${esc(d.date)}">${d.date===todayStr?'วันนี้':esc(d.date)}${d.label?` — ${esc(d.label)}`:''}</option>`).join('')}</select>`:''}
        <div class="inline-flex p-1 rounded-xl team-sub gap-1">
          <button type="button" data-att-type="pre_event" class="px-3 py-2 rounded-lg text-xs font-bold transition-all">🏕️ เข้าค่ายสี</button>
          <button type="button" data-att-type="event_day" class="px-3 py-2 rounded-lg text-xs font-bold transition-all">🏆 วันงานจริง</button>
        </div>
      </div>
    </div>
    <div id="att-backfill-warning"></div>
    ${advisorCheckinToday?`<div class="rounded-xl px-3 py-2 text-xs font-bold bg-sky-500/10 text-sky-300 mb-3">ℹ️ วันนี้ครูที่ปรึกษาเช็คชื่อเข้าสีช่วงเข้าแถวตอนเช้าแล้ว หากพบนักเรียนตกหล่นหรือครูที่ปรึกษาไม่ได้เช็ค ฝ่ายสีเช็คชื่อเพิ่มเติมที่นี่ได้ตามปกติ</div>`:''}
    ${campBanner}
    <div id="att-queue-status" class="mb-3"></div>
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
            <input id="att-manual-code" type="text" inputmode="numeric" placeholder="รหัสนักเรียน" class="flex-1 rounded-xl team-field px-3 py-2 text-sm">
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
      <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div><h3 class="font-bold">🚪 ติดตามการออกจากพื้นที่สี</h3><p class="text-xs muted mt-1">บันทึกผู้ที่ขอออก กำหนดเวลากลับ และยกเลิกเช็คชื่อวันนี้ได้หากไม่กลับ</p></div>
        <span id="area-leave-count" class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400">กำลังโหลด...</span>
      </div>
      <button id="area-leave-open" type="button" class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-lg shadow-amber-900/20 mb-3">📷 สแกนเพื่ออนุญาตออกนอกพื้นที่</button>
      <div id="area-leave-status" class="mb-3"></div>
      <div id="area-leave-list" class="grid md:grid-cols-2 gap-2"></div>
      <div id="area-leave-history" class="mt-4"></div>
    </div>
    <div class="line border-t mt-5 pt-5">
      <h3 class="font-bold mb-3">📄 รายงานขาดเช็คชื่อ</h3>
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <input id="att-report-date" type="date" value="${todayStr}" class="rounded-xl team-field px-3 py-2 text-xs font-bold">
        <button type="button" id="att-report-run" class="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold">สร้างรายงาน</button>
        <button type="button" id="att-report-csv" class="px-4 py-2 rounded-xl border line text-xs font-bold" style="display:none">⬇️ ส่งออก CSV</button>
      </div>
      <div id="att-report-result"></div>
    </div>
  </section>`

  const renderProgress=()=>{
    const scannedForDate=attendanceLocal.filter(a=>a.session_date===sessionDate).length
    const pct=membersList.length?Math.round(scannedForDate/membersList.length*100):0
    const dateLabel=sessionDate===todayStr?'วันนี้':`วันที่ ${sessionDate}`
    body.querySelector('#att-progress').innerHTML=`<div class="flex items-center justify-between text-xs font-bold mb-1.5"><span>เช็คชื่อ${dateLabel}แล้ว ${scannedForDate}/${membersList.length} คน</span><span class="muted">${pct}%</span></div><div class="h-2 rounded-full team-sub overflow-hidden"><div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style="width:${pct}%"></div></div>`
    body.querySelectorAll('[data-att-type]').forEach(b=>b.classList.toggle('team-tab-active',b.dataset.attType===sessionType))
    const subtitle=body.querySelector('#att-subtitle')
    if(subtitle) subtitle.textContent=`สแกน QR ประจำตัวนักเรียน หรือกรอกรหัสด้วยมือ — บันทึกของวันที่ ${sessionDate}`
    const warnEl=body.querySelector('#att-backfill-warning')
    if(warnEl) warnEl.innerHTML=sessionDate!==todayStr?`<div class="rounded-xl px-3 py-2 text-xs font-bold bg-amber-500/10 text-amber-400 mb-3">⚠️ กำลังบันทึกเช็คชื่อ<b>ย้อนหลัง</b>สำหรับวันที่ ${esc(sessionDate)} ไม่ใช่วันนี้ — ตรวจสอบวันที่ให้ถูกต้องก่อนสแกน</div>`:''
  }
  const renderRecent=()=>{
    const el=body.querySelector('#att-recent')
    el.innerHTML=recentScans.length ? recentScans.map(s=>`<div class="flex items-center gap-2 team-card rounded-lg p-2"><img src="${esc(s.image_url||s.photo_url||'')}" class="w-7 h-9 rounded object-cover border border-slate-700 flex-shrink-0" onerror="this.style.display='none'"><div class="min-w-0 flex-1"><b class="text-xs truncate block">${esc(s.full_name)}</b><span class="text-[10px] muted">${esc(s.student_code)}</span></div><span class="text-xs ${s._pending?'tone-warn':'tone-ok'}" title="${s._pending?'รอซิงก์ (ยังไม่มีเน็ต)':'ซิงก์แล้ว'}">${s._pending?'⏳':'✓'}</span><button type="button" data-cancel-scan="${esc(s._attendanceId)}" class="px-2 py-1 rounded-lg btn-danger-ghost hover:bg-red-600 hover:text-white transition text-[10px] font-bold flex-shrink-0">ยกเลิก</button></div>`).join('') : '<p class="text-xs muted text-center py-4">ยังไม่มีการสแกน</p>'
    el.querySelectorAll('[data-cancel-scan]').forEach(btn=>btn.onclick=()=>cancelScan(btn.dataset.cancelScan))
  }
  const leaveStudent=id=>membersList.find(s=>String(s.id)===String(id))
  const stopAreaLeaveScanner=async()=>{
    const scanner=areaLeaveScanner
    areaLeaveScanner=null;areaLeaveScanning=false
    if(!scanner)return
    try{await scanner.stop()}catch(e){}
    try{await scanner.clear()}catch(e){}
  }
  const closeAreaLeaveModal=async()=>{
    const modal=areaLeaveModal
    areaLeaveModal=null
    await stopAreaLeaveScanner()
    modal?.remove()
  }
  const openAreaLeaveModal=()=>{
    if(!leaveSystemReady)return toast('ระบบติดตามการออกจากพื้นที่ยังไม่พร้อมใช้งาน','error')
    closeAreaLeaveModal()
    const modal=document.createElement('div')
    modal.className='fixed inset-0 bg-black/75 grid place-items-center p-3 sm:p-5 overflow-y-auto'
    modal.style.zIndex='500'
    modal.innerHTML=`<div class="team-card border rounded-3xl w-full max-w-xl shadow-2xl my-auto overflow-hidden">
      <div class="flex items-start justify-between gap-3 p-4 border-b line"><div><h3 class="font-bold">🚪 อนุญาตออกนอกพื้นที่สี</h3><p class="text-xs muted mt-1">สแกน QR หรือกรอกรหัส แล้วตรวจสอบว่าเป็นสมาชิกสี${esc(c.name)}</p></div><button type="button" data-area-modal-close class="w-10 h-10 rounded-xl border line flex-shrink-0">✕</button></div>
      <div id="area-leave-modal-content" class="p-4 sm:p-5"></div>
    </div>`
    ;(body.closest('#my-team-workspace')||document.body).appendChild(modal)
    areaLeaveModal=modal
    modal.querySelector('[data-area-modal-close]').onclick=closeAreaLeaveModal
    modal.addEventListener('click',e=>{if(e.target===modal)closeAreaLeaveModal()})

    const content=modal.querySelector('#area-leave-modal-content')
    let lookupBusy=false
    const normalizeCode=value=>{let code=String(value||'').trim();if(code.startsWith('SQ:'))code=code.split(':')[1]||'';return code.trim()}
    const showScanner=()=>{
      stopAreaLeaveScanner()
      content.innerHTML=`<div class="space-y-4">
        <div id="area-leave-reader" class="hidden w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-black"></div>
        <button type="button" data-area-camera class="w-full py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">📷 เปิดกล้องสแกน QR</button>
        <div class="flex items-center gap-3"><span class="h-px bg-slate-700 flex-1"></span><span class="text-xs muted">หรือกรอกรหัสนักเรียน</span><span class="h-px bg-slate-700 flex-1"></span></div>
        <div class="flex gap-2"><input data-area-code type="text" inputmode="numeric" autocomplete="off" placeholder="รหัสประจำตัวนักเรียน" class="team-field rounded-xl px-3 py-3 text-sm flex-1 min-w-0"><button type="button" data-area-find class="px-4 py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold">ตรวจสอบ</button></div>
        <div data-area-lookup-status></div>
      </div>`
      const input=content.querySelector('[data-area-code]'), cameraBtn=content.querySelector('[data-area-camera]'), reader=content.querySelector('#area-leave-reader')
      const runManual=()=>processStudent(input.value)
      content.querySelector('[data-area-find]').onclick=runManual
      input.addEventListener('keydown',e=>{if(e.key==='Enter')runManual()})
      cameraBtn.onclick=async()=>{
        if(areaLeaveScanning){await stopAreaLeaveScanner();reader.classList.add('hidden');cameraBtn.textContent='📷 เปิดกล้องสแกน QR';return}
        try{
          cameraBtn.disabled=true;cameraBtn.textContent='กำลังเปิดกล้อง...';reader.classList.remove('hidden')
          const Html5Qrcode=await _loadHtml5QrcodeAtt()
          areaLeaveScanner=new Html5Qrcode('area-leave-reader')
          let lastCode='',lastAt=0
          await areaLeaveScanner.start({facingMode:'environment'},{fps:15,aspectRatio:1},decodedText=>{
            if(decodedText===lastCode&&Date.now()-lastAt<2000)return
            lastCode=decodedText;lastAt=Date.now();processStudent(decodedText)
          })
          areaLeaveScanning=true;cameraBtn.disabled=false;cameraBtn.textContent='⏹ ปิดกล้อง'
        }catch(error){await stopAreaLeaveScanner();reader.classList.add('hidden');cameraBtn.disabled=false;cameraBtn.textContent='📷 เปิดกล้องสแกน QR';content.querySelector('[data-area-lookup-status]').innerHTML=`<p class="rounded-xl p-3 text-xs bg-red-500/10 text-red-400">เปิดกล้องไม่สำเร็จ: ${esc(error?.message||'กรุณาตรวจสิทธิ์กล้อง')}</p>`}
      }
      setTimeout(()=>input.focus(),50)
    }
    const processStudent=async raw=>{
      if(lookupBusy)return
      const code=normalizeCode(raw), status=content.querySelector('[data-area-lookup-status]')
      if(!code){if(status)status.innerHTML='<p class="text-xs text-red-400">กรุณากรอกรหัสนักเรียน</p>';return}
      lookupBusy=true
      if(status)status.innerHTML='<p class="text-xs muted text-center py-2">กำลังตรวจสอบข้อมูล...</p>'
      try{
        let student=membersList.find(s=>String(s.student_code)===code)
        let sameColor=!!student
        if(!student){
          const {data,error}=await supabase.from('students').select('id,student_code,full_name,main_room,house_color,team_color_id,image_url,photo_url').eq('student_code',code).eq('is_active',true).maybeSingle()
          if(error)throw error
          student=data
          sameColor=!!student&&(String(student.team_color_id||'')===String(c.id)||String(student.house_color||'')===String(c.name))
        }
        _playScanBeepAtt(!!student&&sameColor)
        await stopAreaLeaveScanner()
        if(!student){
          content.innerHTML=`<div class="text-center space-y-4 py-3"><div class="text-5xl">⚠️</div><div><h4 class="font-bold text-red-400">ไม่พบนักเรียนรหัส ${esc(code)}</h4><p class="text-xs muted mt-1">ตรวจสอบรหัสแล้วลองใหม่อีกครั้ง</p></div><button type="button" data-area-retry class="w-full py-3 rounded-2xl bg-slate-700 text-white font-bold">สแกนหรือกรอกใหม่</button></div>`
          content.querySelector('[data-area-retry]').onclick=showScanner
          return
        }
        showStudent(student,sameColor)
      }catch(error){if(status)status.innerHTML=`<p class="rounded-xl p-3 text-xs bg-red-500/10 text-red-400">ตรวจสอบไม่สำเร็จ: ${esc(error?.message||'ไม่สามารถเชื่อมต่อระบบได้')}</p>`}
      finally{lookupBusy=false}
    }
    const showStudent=(student,sameColor)=>{
      const attended=attendanceLocal.some(a=>String(a.student_id)===String(student.id)&&a.session_date===todayStr)
      const alreadyOut=leavePasses.some(lp=>String(lp.student_id)===String(student.id)&&lp.status==='out')
      const canPermit=sameColor&&attended&&!alreadyOut
      const photo=student.image_url||student.photo_url
      const colorText=sameColor?`เป็นสมาชิกสี${c.name}`:`ไม่ได้อยู่ในสี${c.name}${student.house_color?` · อยู่สี${student.house_color}`:''}`
      content.innerHTML=`<div class="space-y-4">
        <div class="flex items-center gap-4 team-sub rounded-2xl p-4"><div class="w-24 h-28 rounded-2xl overflow-hidden bg-slate-800 flex-shrink-0">${photo?`<img src="${esc(photo)}" class="w-full h-full object-cover">`:'<div class="w-full h-full grid place-items-center text-4xl">👤</div>'}</div><div class="min-w-0 flex-1"><p class="text-xs muted">ข้อมูลนักเรียน</p><h4 class="font-extrabold text-lg mt-1">${esc(student.full_name)}</h4><p class="text-xs muted mt-1">${esc(student.student_code)} · ${esc(student.main_room||'ไม่ระบุห้อง')}</p><span class="inline-flex mt-2 px-2.5 py-1 rounded-full text-xs font-bold ${sameColor?'bg-emerald-500/15 text-emerald-400':'bg-red-500/15 text-red-400'}">${sameColor?'✅':'❌'} ${esc(colorText)}</span><span class="inline-flex mt-2 ml-1 px-2.5 py-1 rounded-full text-xs font-bold ${attended?'bg-sky-500/15 text-sky-300':'bg-amber-500/15 text-amber-400'}">${attended?'✅ เช็คชื่อวันนี้แล้ว':'⚠️ ยังไม่ได้เช็คชื่อวันนี้'}</span>${alreadyOut?'<span class="inline-flex mt-2 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400">อยู่ระหว่างออกนอกพื้นที่แล้ว</span>':''}</div></div>
        ${!canPermit?`<p class="rounded-xl p-3 text-xs ${sameColor?'bg-amber-500/10 text-amber-300':'bg-red-500/10 text-red-400'}">${!sameColor?'ไม่สามารถอนุญาตได้ เพราะนักเรียนไม่ได้อยู่ในสีเดียวกัน':alreadyOut?'นักเรียนมีรายการออกนอกพื้นที่ที่ยังไม่ปิด':'ต้องเช็คชื่อนักเรียนของวันนี้ก่อน จึงจะอนุญาตให้ออกได้'}</p>`:''}
        <div class="grid grid-cols-2 gap-2"><button type="button" data-area-retry class="py-3 rounded-2xl border line font-bold">สแกนใหม่</button><button type="button" data-area-permit class="py-3 rounded-2xl bg-amber-600 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed" ${canPermit?'':'disabled'}>อนุญาต</button></div>
      </div>`
      content.querySelector('[data-area-retry]').onclick=showScanner
      content.querySelector('[data-area-permit]').onclick=()=>showOptions(student)
    }
    const showOptions=student=>{
      const reasons=[['🚽','ไปห้องน้ำ'],['💊','ไปห้องพยาบาล'],['👩‍🏫','ไปพบครู/ทำธุระ'],['🕌','ไปทำศาสนกิจ'],['✏️','อื่นๆ']]
      const durations=[5,10,15,30]
      let reason='',minutes=15
      content.innerHTML=`<div class="space-y-5"><div class="flex items-center gap-3"><div class="w-12 h-14 rounded-xl overflow-hidden bg-slate-800">${student.image_url||student.photo_url?`<img src="${esc(student.image_url||student.photo_url)}" class="w-full h-full object-cover">`:'<div class="w-full h-full grid place-items-center">👤</div>'}</div><div><p class="text-xs muted">กำลังอนุญาตให้ออก</p><b>${esc(student.full_name)}</b><p class="text-xs muted">${esc(student.student_code)}</p></div></div>
        <div><p class="text-xs font-bold muted mb-2">เลือกเหตุผล</p><div class="grid grid-cols-2 gap-2">${reasons.map(([icon,label])=>`<button type="button" data-area-reason="${esc(label)}" class="team-sub rounded-2xl p-3 text-left border line"><span class="text-xl">${icon}</span><b class="block text-xs mt-1">${esc(label)}</b></button>`).join('')}</div><input data-area-detail class="hidden mt-2 w-full team-field rounded-xl px-3 py-2 text-sm" placeholder="ระบุเหตุผลเพิ่มเติม"></div>
        <div><p class="text-xs font-bold muted mb-2">กำหนดเวลากลับ</p><div class="grid grid-cols-4 gap-2">${durations.map(value=>`<button type="button" data-area-minutes="${value}" class="rounded-xl border line py-3 text-xs font-bold ${value===15?'team-tab-active':''}">${value} นาที</button>`).join('')}</div><div class="flex items-center gap-2 mt-2"><button type="button" data-area-custom-minutes class="rounded-xl border line px-3 py-2 text-xs font-bold">กำหนดเอง</button><input data-area-minutes-input type="number" min="1" max="240" class="hidden flex-1 team-field rounded-xl px-3 py-2 text-sm" placeholder="1–240 นาที"></div></div>
        <div class="grid grid-cols-2 gap-2"><button type="button" data-area-back class="py-3 rounded-2xl border line font-bold">ย้อนกลับ</button><button type="button" data-area-confirm class="py-3 rounded-2xl bg-amber-600 text-white font-bold">ยืนยันอนุญาต</button></div><div data-area-save-status></div></div>`
      const reasonButtons=[...content.querySelectorAll('[data-area-reason]')], minuteButtons=[...content.querySelectorAll('[data-area-minutes]')], detail=content.querySelector('[data-area-detail]'), customInput=content.querySelector('[data-area-minutes-input]')
      reasonButtons.forEach(btn=>btn.onclick=()=>{reason=btn.dataset.areaReason;reasonButtons.forEach(x=>x.classList.toggle('team-tab-active',x===btn));detail.classList.toggle('hidden',reason!=='อื่นๆ');if(reason==='อื่นๆ')detail.focus()})
      minuteButtons.forEach(btn=>btn.onclick=()=>{minutes=Number(btn.dataset.areaMinutes);minuteButtons.forEach(x=>x.classList.toggle('team-tab-active',x===btn));customInput.classList.add('hidden');customInput.value=''})
      content.querySelector('[data-area-custom-minutes]').onclick=()=>{minutes=0;minuteButtons.forEach(x=>x.classList.remove('team-tab-active'));customInput.classList.remove('hidden');customInput.focus()}
      content.querySelector('[data-area-back]').onclick=()=>showStudent(student,true)
      content.querySelector('[data-area-confirm]').onclick=async()=>{
        const saveStatus=content.querySelector('[data-area-save-status]'),submit=content.querySelector('[data-area-confirm]')
        const detailText=detail.value.trim(), selectedMinutes=minutes||Number(customInput.value)
        if(!reason){saveStatus.innerHTML='<p class="text-xs text-red-400">กรุณาเลือกเหตุผล</p>';return}
        if(reason==='อื่นๆ'&&!detailText){saveStatus.innerHTML='<p class="text-xs text-red-400">กรุณาระบุเหตุผลเพิ่มเติม</p>';detail.focus();return}
        if(!selectedMinutes||selectedMinutes<1||selectedMinutes>240){saveStatus.innerHTML='<p class="text-xs text-red-400">กรุณากำหนดเวลากลับ 1–240 นาที</p>';return}
        const finalReason=detailText?`${reason}: ${detailText}`:reason
        submit.disabled=true;submit.textContent='กำลังบันทึก...'
        const {data,error}=await supabase.rpc('record_sports_area_exit',{p_event:event.id,p_team_color_id:c.id,p_student:student.id,p_reason:finalReason,p_expected_minutes:selectedMinutes})
        if(error){saveStatus.innerHTML=`<p class="rounded-xl p-3 text-xs bg-red-500/10 text-red-400">${esc(error.message)}</p>`;submit.disabled=false;submit.textContent='ยืนยันอนุญาต';return}
        leavePasses.unshift(data);renderLeaveTracking();await closeAreaLeaveModal();feedback(true,`อนุญาตให้ ${student.full_name} ออกจากพื้นที่แล้ว`,`ควรกลับภายใน ${selectedMinutes} นาที`);toast(`อนุญาตให้ ${student.full_name} ออกนอกพื้นที่แล้ว`)
      }
    }
    showScanner()
  }
  const renderLeaveTracking=()=>{
    const now=Date.now()
    const active=leavePasses.filter(x=>x.status==='out').sort((a,b)=>new Date(a.expected_return_at)-new Date(b.expected_return_at))
    const history=leavePasses.filter(x=>x.status!=='out').sort((a,b)=>new Date(b.closed_at||b.updated_at)-new Date(a.closed_at||a.updated_at)).slice(0,12)
    const overdue=active.filter(x=>new Date(x.expected_return_at).getTime()<now).length
    const countEl=body.querySelector('#area-leave-count')
    if(countEl){countEl.textContent=overdue?`เกินเวลา ${overdue} คน`:`อยู่นอกพื้นที่ ${active.length} คน`;countEl.className=`px-3 py-1 rounded-full text-xs font-bold ${overdue?'bg-red-500/15 text-red-400':'bg-amber-500/10 text-amber-400'}`}
    const listEl=body.querySelector('#area-leave-list')
    listEl.innerHTML=active.length?active.map(lp=>{
      const s=leaveStudent(lp.student_id)||{}, late=new Date(lp.expected_return_at).getTime()<now
      return `<div class="team-sub rounded-xl p-3 border ${late?'border-red-500/60':'line'}">
        <div class="flex items-start gap-3">
          ${(s.image_url||s.photo_url)?`<img src="${esc(s.image_url||s.photo_url)}" class="w-10 h-12 rounded-lg object-cover flex-shrink-0">`:''}
          <div class="min-w-0 flex-1"><b class="text-sm truncate block">${esc(s.full_name||'ไม่พบชื่อ')}</b><p class="text-[11px] muted">${esc(s.student_code||'')} · ${esc(lp.reason)}</p><p class="text-[10px] ${late?'tone-bad':'tone-warn'}">ออก ${new Date(lp.out_at).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'})} · ควรกลับ ${new Date(lp.expected_return_at).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'})}${late?' · เกินเวลาแล้ว':''}</p></div>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-3"><button data-area-return="${esc(lp.id)}" class="py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">✅ กลับแล้ว</button><button data-area-no-return="${esc(lp.id)}" class="py-2 rounded-xl bg-red-600 text-white text-xs font-bold">❌ ไม่กลับ–ยกเลิกเช็คชื่อ</button></div>
      </div>`
    }).join(''):'<p class="md:col-span-2 text-sm muted text-center py-5">ขณะนี้ไม่มีนักเรียนอยู่นอกพื้นที่สี</p>'
    const historyEl=body.querySelector('#area-leave-history')
    historyEl.innerHTML=history.length?`<details class="team-sub rounded-xl p-3"><summary class="text-xs font-bold cursor-pointer">ประวัติออก–กลับวันนี้ (${history.length} รายการ)</summary><div class="space-y-1.5 mt-3">${history.map(lp=>{const s=leaveStudent(lp.student_id)||{};return `<div class="flex items-center gap-2 text-xs"><span>${lp.status==='returned'?'✅':'❌'}</span><b class="truncate flex-1">${esc(s.full_name||'ไม่พบชื่อ')}</b><span class="muted">${lp.status==='returned'?'กลับแล้ว':'ยกเลิกเช็คชื่อ'}${lp.close_note?` · ${esc(lp.close_note)}`:''}</span></div>`}).join('')}</div></details>`:''
    listEl.querySelectorAll('[data-area-return]').forEach(btn=>btn.onclick=()=>closeAreaLeave(btn.dataset.areaReturn,'returned'))
    listEl.querySelectorAll('[data-area-no-return]').forEach(btn=>btn.onclick=()=>closeAreaLeave(btn.dataset.areaNoReturn,'not_returned'))
  }
  const loadLeavePasses=async()=>{
    const statusEl=body.querySelector('#area-leave-status')
    const {data,error}=await supabase.from('sports_area_leave_passes').select('*').eq('event_id',event.id).eq('team_color_id',c.id).eq('session_date',todayStr).order('out_at',{ascending:false})
    if(error){
      statusEl.innerHTML=`<div class="rounded-xl px-3 py-2 text-xs bg-amber-500/10 text-amber-400">ยังไม่ได้ติดตั้งระบบติดตามการออกจากพื้นที่ — รัน <code>patch_sports_area_leave_tracking.sql</code></div>`
      leaveSystemReady=false
      body.querySelector('#area-leave-open').disabled=true
      body.querySelector('#area-leave-count').textContent='ยังไม่พร้อมใช้งาน'
      return
    }
    statusEl.innerHTML='';leavePasses=data||[];renderLeaveTracking()
  }
  const closeAreaLeave=async(id,action)=>{
    const lp=leavePasses.find(x=>String(x.id)===String(id)), student=leaveStudent(lp?.student_id)
    let note=null
    if(action==='not_returned'){
      note=prompt(`ระบุเหตุผลที่ยกเลิกเช็คชื่อวันนี้ของ ${student?.full_name||'นักเรียน'} (จำเป็น)`,`ออกจากพื้นที่แล้วไม่กลับตามเวลาที่กำหนด`)
      if(note===null)return
      note=note.trim()
      if(!note)return toast('กรุณาระบุเหตุผลที่ยกเลิกเช็คชื่อ','error')
      if(!confirm(`ยืนยันว่า ${student?.full_name||'นักเรียน'} ไม่กลับเข้าสี และยกเลิกเช็คชื่อของวันนี้?`))return
    }
    const {data,error}=await supabase.rpc('close_sports_area_leave',{p_leave:id,p_action:action,p_note:note})
    if(error){toast(error.message,'error');return}
    leavePasses=leavePasses.map(x=>String(x.id)===String(id)?{...x,status:data.status,closed_at:data.closed_at,close_note:note,returned_at:action==='returned'?data.closed_at:null}:x)
    if(action==='not_returned'){
      attendanceLocal=attendanceLocal.filter(a=>!(String(a.student_id)===String(data.student_id)&&a.session_date===data.session_date))
      recentScans=recentScans.filter(s=>String(s.id)!==String(data.student_id))
      feedback(true,`ยกเลิกเช็คชื่อ ${student?.full_name||''} แล้ว`,'เก็บเหตุผลและผู้ดำเนินการไว้ตรวจสอบย้อนหลัง')
      renderProgress();renderRecent()
    }else feedback(true,`${student?.full_name||'นักเรียน'} กลับเข้าสีแล้ว`,'บันทึกเวลากลับเรียบร้อย')
    renderLeaveTracking()
  }
  const renderQueueStatus=(queue)=>{
    const pending=(queue||sqGet()).filter(i=>i.type==='attendance').length
    body.querySelector('#att-queue-status').innerHTML=pending?`<div class="rounded-xl px-3 py-2 text-xs font-bold bg-amber-500/10 text-amber-400">⏳ มีเช็คชื่อ ${pending} รายการรอซิงก์ (ไม่มีเน็ตตอนบันทึก) จะซิงก์อัตโนมัติเมื่อเชื่อมต่อได้</div>`:''
  }
  const feedback=(ok,title,detail)=>{
    body.querySelector('#att-feedback').innerHTML=`<div class="rounded-xl p-3 flex items-center gap-3 ${ok?'bg-emerald-950/40 border border-emerald-800/60':'bg-red-950/40 border border-red-800/60'}"><span class="text-lg">${ok?'✅':'❌'}</span><div class="min-w-0"><b class="text-xs block truncate ${ok?'text-emerald-300':'text-red-300'}">${esc(title)}</b><span class="text-[10px] muted truncate block">${esc(detail||'')}</span></div></div>`
  }
  // ป๊อบอัพยืนยันเต็มจอตอนเช็คชื่อสำเร็จ (ตามแบบเดียวกับแท็บค่าบำรุงสี) — แต่เช็คชื่อสแกนถี่กว่า
  // มากในช่วงเข้าแถว จึงหายเองไวกว่าแค่ 2 วิ (ค่าบำรุงจ่ายครั้งเดียวจบเลยให้เวลาอ่านนานกว่า)
  const showAttendanceSuccessPopup=(student)=>{
    document.getElementById('attendance-success-popup')?.remove()
    const m=document.createElement('div')
    m.id='attendance-success-popup'
    m.className='fixed inset-0 z-[400] bg-black/70 flex items-center justify-center p-6'
    m.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <div class="text-5xl mb-2">✅</div>
      ${(student.image_url||student.photo_url)?`<img src="${esc(student.image_url||student.photo_url)}" class="w-20 h-24 rounded-xl object-cover border-2 border-emerald-400 mx-auto mb-3 shadow-md">`:''}
      <h3 class="font-bold text-gray-800 text-lg">${esc(student.full_name)}</h3>
      <p class="text-xs text-gray-500 mb-3">${esc(student.student_code)}${student.main_room?` · ${esc(student.main_room)}`:''}</p>
      <p class="text-sm text-emerald-700 font-bold mb-5">เช็คชื่อสำเร็จ</p>
      <button id="att-popup-next" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">📷 สแกนคนถัดไป</button>
      <div class="h-1 bg-gray-100 rounded-full mt-4 overflow-hidden"><div id="att-popup-bar" class="h-full bg-emerald-500" style="width:100%"></div></div>
    </div>`
    document.body.appendChild(m)
    const bar=m.querySelector('#att-popup-bar')
    requestAnimationFrame(()=>{bar.style.transition='width 2s linear';bar.style.width='0%'})
    const close=()=>m.remove()
    const timer=setTimeout(close,2000)
    m.querySelector('#att-popup-next').onclick=()=>{clearTimeout(timer);close()}
    m.addEventListener('click',e=>{if(e.target===m){clearTimeout(timer);close()}})
  }
  const commitAttendance=async(student,method)=>{
    if(!student){feedback(false,'ไม่พบนักเรียน','ตรวจสอบรหัส/QR อีกครั้ง — หรือไม่ใช่สมาชิกสีนี้');return}
    const already=attendanceLocal.find(a=>a.student_id===student.id&&a.session_date===sessionDate)
    if(already){feedback(false,`${student.full_name} เช็คชื่อไปแล้ว`,already._pending?'บันทึกไว้ในเครื่อง รอซิงก์อยู่':`บันทึกไว้แล้ววันที่ ${sessionDate}`);return}
    const payload={event_id:event.id,team_color_id:c.id,student_id:student.id,session_date:sessionDate,session_type:sessionType,method}
    const queueOffline=()=>{
      const localId=sportsQueuePush({type:'attendance',payload})
      attendanceLocal.push({...payload,id:localId,_pending:true})
      recentScans.unshift({...student,_attendanceId:localId,_pending:true})
      feedback(true,`บันทึก ${student.full_name} ไว้ในเครื่องแล้ว`,'ไม่มีเน็ตตอนนี้ — จะซิงก์อัตโนมัติเมื่อเชื่อมต่อได้')
      renderProgress();renderRecent()
    }
    let data,error
    try{
      ;({data,error}=await supabase.from('sports_attendance').insert(payload).select().single())
    }catch(e){queueOffline();return} // fetch เองก็ throw ได้ตอนไม่มีเน็ตจริงๆ (ไม่ใช่แค่ error object)
    if(error){
      if(sqLikelyOffline(error)){queueOffline();return}
      // 23505 = ชนกับแถวที่มีอยู่แล้ว (unique event_id+student_id+session_date) — ปกติมากตอนนี้
      // เพราะครูที่ปรึกษาสามัญก็เช็คชื่อลงตารางเดียวกันนี้ได้เหมือนกัน แค่ local state ของหน้านี้
      // ยังไม่รู้ (โหลดหน้าไว้ก่อนครูที่ปรึกษาเช็ค) ไม่ใช่ error จริง แจ้งแบบเข้าใจง่ายแทน
      if(error.code==='23505'){feedback(false,`${student.full_name} เช็คชื่อไปแล้ว`,'อาจถูกเช็คชื่อไปแล้วโดยครูที่ปรึกษาช่วงเข้าแถว ลองรีเฟรชหน้านี้เพื่ออัปเดตรายชื่อ');return}
      feedback(false,'บันทึกไม่สำเร็จ',error.message);return
    }
    attendanceLocal.push(data)
    recentScans.unshift({...student,_attendanceId:data.id})
    feedback(true,`เช็คชื่อ ${student.full_name} สำเร็จ`,`รหัส ${student.student_code}`)
    showAttendanceSuccessPopup(student)
    renderProgress();renderRecent()
  }
  // ยกเลิกรายการที่สแกนผิด/พลาด — ถ้ายังไม่ sync (รอคิวออฟไลน์อยู่) ลบออกจากคิว+local state
  // ตรงๆ พอ (ยังไม่มีแถวจริงใน DB ให้ลบ) ถ้า sync ไปแล้วค่อยลบจากฐานข้อมูลจริง
  const cancelScan=async(attendanceId)=>{
    const student=recentScans.find(s=>String(s._attendanceId)===String(attendanceId))
    if(String(attendanceId).startsWith('local_')){
      sportsQueueRemoveLocal(attendanceId)
      attendanceLocal=attendanceLocal.filter(a=>String(a.id)!==String(attendanceId))
      recentScans=recentScans.filter(s=>String(s._attendanceId)!==String(attendanceId))
      feedback(true,`ยกเลิกการเช็คชื่อ${student?` ${student.full_name}`:''}แล้ว`,'ลบออกจากคิวที่รอซิงก์แล้ว')
      renderProgress();renderRecent()
      return
    }
    const {error}=await supabase.from('sports_attendance').delete().eq('id',attendanceId)
    if(error){feedback(false,'ยกเลิกไม่สำเร็จ',error.message);return}
    attendanceLocal=attendanceLocal.filter(a=>String(a.id)!==String(attendanceId))
    recentScans=recentScans.filter(s=>String(s._attendanceId)!==String(attendanceId))
    feedback(true,`ยกเลิกการเช็คชื่อ${student?` ${student.full_name}`:''}แล้ว`,'ลบออกจากระบบเรียบร้อย')
    renderProgress();renderRecent()
  }
  // ฟังการเปลี่ยนแปลงคิวออฟไลน์ — พอ sync สำเร็จ (รายการหายไปจากคิว) ให้ลบ badge "รอซิงก์" ออก
  onSportsQueueChange(queue=>{
    const stillPendingIds=new Set(queue.filter(i=>i.type==='attendance').map(i=>i.localId))
    let changed=false
    attendanceLocal.forEach(a=>{if(a._pending&&!stillPendingIds.has(a.id)){a._pending=false;changed=true}})
    recentScans.forEach(s=>{if(s._pending&&!stillPendingIds.has(s._attendanceId)){s._pending=false;changed=true}})
    renderQueueStatus(queue)
    if(changed){renderProgress();renderRecent()}
  })
  renderQueueStatus()
  trySyncSportsQueue()

  body.querySelectorAll('[data-att-type]').forEach(b=>b.onclick=()=>{sessionType=b.dataset.attType;renderProgress()})

  body.querySelector('#att-session-date')?.addEventListener('change',e=>{
    sessionDate=e.target.value
    // ถ้าวันที่เลือกตรงกับปฏิทินปฏิบัติงานพอดี ตั้งประเภทเช็คชื่อให้อัตโนมัติตามป้ายชื่อวันนั้น
    const matched=dateOptions.find(d=>d.date===sessionDate)
    if(matched?.label) sessionType=sessionTypeForLabel(matched.label)
    renderProgress()
  })

  body.querySelector('#att-manual-submit').onclick=()=>{
    const input=body.querySelector('#att-manual-code')
    const code=input.value.trim()
    if(!code)return
    const student=membersList.find(s=>s.student_code===code)
    commitAttendance(student,'manual')
    input.value='';input.focus()
  }
  body.querySelector('#att-manual-code').addEventListener('keydown',e=>{if(e.key==='Enter')body.querySelector('#att-manual-submit').click()})

  body.querySelector('#area-leave-open').onclick=openAreaLeaveModal

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

  renderProgress();renderRecent();loadLeavePasses()
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
    <div id="dues-queue-status" class="mb-3"></div>
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
            <input id="dues-manual-code" type="text" inputmode="numeric" placeholder="รหัสนักเรียน" class="flex-1 rounded-xl team-field px-3 py-2 text-sm">
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
    el.innerHTML=recentScans.length ? recentScans.map(s=>`<div class="flex items-center gap-2 team-card rounded-lg p-2"><img src="${esc(s.image_url||s.photo_url||'')}" class="w-7 h-9 rounded object-cover border border-slate-700 flex-shrink-0" onerror="this.style.display='none'"><div class="min-w-0 flex-1"><b class="text-xs truncate block">${esc(s.full_name)}</b><span class="text-[10px] muted">${esc(s.student_code)}</span></div><span class="text-xs ${s._pending?'tone-warn':'tone-ok'}" title="${s._pending?'รอซิงก์ (ยังไม่มีเน็ต)':'ซิงก์แล้ว'}">${s._pending?'⏳':'✓'}</span><button type="button" data-cancel-dues="${esc(s._duesId)}" class="px-2 py-1 rounded-lg btn-danger-ghost hover:bg-red-600 hover:text-white transition text-[10px] font-bold flex-shrink-0">ยกเลิก</button></div>`).join('') : '<p class="text-xs muted text-center py-4">ยังไม่มีการรับเงิน</p>'
    el.querySelectorAll('[data-cancel-dues]').forEach(btn=>btn.onclick=()=>cancelDues(btn.dataset.cancelDues))
  }
  const renderQueueStatus=(queue)=>{
    const pending=(queue||sqGet()).filter(i=>i.type==='dues').length
    body.querySelector('#dues-queue-status').innerHTML=pending?`<div class="rounded-xl px-3 py-2 text-xs font-bold bg-amber-500/10 text-amber-400">⏳ มีรายการรับเงิน ${pending} รายการรอซิงก์ (ไม่มีเน็ตตอนบันทึก) จะซิงก์อัตโนมัติเมื่อเชื่อมต่อได้</div>`:''
  }
  const feedback=(ok,title,detail)=>{
    body.querySelector('#dues-feedback').innerHTML=`<div class="rounded-xl p-3 flex items-center gap-3 ${ok?'bg-emerald-950/40 border border-emerald-800/60':'bg-red-950/40 border border-red-800/60'}"><span class="text-lg">${ok?'✅':'❌'}</span><div class="min-w-0"><b class="text-xs block truncate ${ok?'text-emerald-300':'text-red-300'}">${esc(title)}</b><span class="text-[10px] muted truncate block">${esc(detail||'')}</span></div></div>`
  }
  // ป๊อบอัพยืนยันเต็มจอตอนรับเงินสำเร็จ — ให้ผู้สแกนมั่นใจว่าบันทึกเข้าระบบแล้วจริงๆ
  // (ตัวเลขเล็กๆ ใน #dues-feedback อาจมองข้ามได้ง่ายตอนรับเงินติดๆ กันหลายคน) หายเองใน 5 วิ
  // หรือกดปุ่ม "สแกนคนถัดไป" ปิดทันทีได้เผื่อรีบ — ปิดสองทางไว้ครอบคลุมทั้งคิวยาวและคนละเอียด
  const showDuesSuccessPopup=(student,amount)=>{
    document.getElementById('dues-success-popup')?.remove()
    const m=document.createElement('div')
    m.id='dues-success-popup'
    m.className='fixed inset-0 z-[400] bg-black/70 flex items-center justify-center p-6'
    m.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <div class="text-5xl mb-2">✅</div>
      ${(student.image_url||student.photo_url)?`<img src="${esc(student.image_url||student.photo_url)}" class="w-20 h-24 rounded-xl object-cover border-2 border-emerald-400 mx-auto mb-3 shadow-md">`:''}
      <h3 class="font-bold text-gray-800 text-lg">${esc(student.full_name)}</h3>
      <p class="text-xs text-gray-500 mb-3">${esc(student.student_code)}${student.main_room?` · ${esc(student.main_room)}`:''}</p>
      <p class="text-3xl font-black text-emerald-600 mb-1">${Number(amount).toLocaleString('th-TH')} บาท</p>
      <p class="text-sm text-emerald-700 font-bold mb-5">ชำระค่าบำรุงสีสำเร็จ</p>
      <button id="dues-popup-next" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">📷 สแกนคนถัดไป</button>
      <div class="h-1 bg-gray-100 rounded-full mt-4 overflow-hidden"><div id="dues-popup-bar" class="h-full bg-emerald-500" style="width:100%"></div></div>
    </div>`
    document.body.appendChild(m)
    const bar=m.querySelector('#dues-popup-bar')
    requestAnimationFrame(()=>{bar.style.transition='width 5s linear';bar.style.width='0%'})
    const close=()=>m.remove()
    const timer=setTimeout(close,5000)
    m.querySelector('#dues-popup-next').onclick=()=>{clearTimeout(timer);close()}
    m.addEventListener('click',e=>{if(e.target===m){clearTimeout(timer);close()}})
  }
  const commitDues=async(student,method)=>{
    if(!student){feedback(false,'ไม่พบนักเรียน','ตรวจสอบรหัส/QR อีกครั้ง — หรือไม่ใช่สมาชิกสีนี้');return}
    const already=duesLocal.find(d=>d.student_id===student.id)
    if(already){feedback(false,`${student.full_name} จ่ายไปแล้ว`,already._pending?'บันทึกไว้ในเครื่อง รอซิงก์อยู่':`บันทึกไว้แล้ว ${Number(already.amount).toLocaleString('th-TH')} บาท`);return}
    const payload={event_id:event.id,team_color_id:c.id,student_id:student.id,amount:duesAmount,method}
    const queueOffline=()=>{
      const localId=sportsQueuePush({type:'dues',payload})
      duesLocal.push({...payload,id:localId,_pending:true})
      recentScans.unshift({...student,_duesId:localId,_pending:true})
      feedback(true,`บันทึกรับเงิน ${student.full_name} ไว้ในเครื่องแล้ว`,`ไม่มีเน็ตตอนนี้ — จะซิงก์อัตโนมัติเมื่อเชื่อมต่อได้ (${Number(duesAmount).toLocaleString('th-TH')} บาท)`)
      renderProgress();renderRecent()
    }
    let data,error
    try{
      ;({data,error}=await supabase.from('sports_team_dues').insert(payload).select().single())
    }catch(e){queueOffline();return}
    if(error){
      if(sqLikelyOffline(error)){queueOffline();return}
      feedback(false,'บันทึกไม่สำเร็จ',error.message);return
    }
    duesLocal.push(data)
    recentScans.unshift({...student,_duesId:data.id})
    feedback(true,`รับเงิน ${student.full_name} สำเร็จ`,`รหัส ${student.student_code} · ${Number(duesAmount).toLocaleString('th-TH')} บาท`)
    showDuesSuccessPopup(student,duesAmount)
    renderProgress();renderRecent()
  }
  // ยกเลิกรายการที่สแกนผิด/พลาด — ถ้ายังไม่ sync (รอคิวออฟไลน์อยู่) ลบออกจากคิว+local state
  // ตรงๆ พอ (ยังไม่มีแถวจริงใน DB ให้ลบ) ถ้า sync ไปแล้วค่อยลบจากฐานข้อมูลจริง
  const cancelDues=async(duesId)=>{
    const student=recentScans.find(s=>String(s._duesId)===String(duesId))
    if(String(duesId).startsWith('local_')){
      sportsQueueRemoveLocal(duesId)
      duesLocal=duesLocal.filter(d=>String(d.id)!==String(duesId))
      recentScans=recentScans.filter(s=>String(s._duesId)!==String(duesId))
      feedback(true,`ยกเลิกรายการรับเงิน${student?` ${student.full_name}`:''}แล้ว`,'ลบออกจากคิวที่รอซิงก์แล้ว')
      renderProgress();renderRecent()
      return
    }
    const {error}=await supabase.from('sports_team_dues').delete().eq('id',duesId)
    if(error){feedback(false,'ยกเลิกไม่สำเร็จ',error.message);return}
    duesLocal=duesLocal.filter(d=>String(d.id)!==String(duesId))
    recentScans=recentScans.filter(s=>String(s._duesId)!==String(duesId))
    feedback(true,`ยกเลิกรายการรับเงิน${student?` ${student.full_name}`:''}แล้ว`,'ลบออกจากระบบเรียบร้อย')
    renderProgress();renderRecent()
  }
  // ฟังการเปลี่ยนแปลงคิวออฟไลน์ — พอ sync สำเร็จ (รายการหายไปจากคิว) ให้ลบ badge "รอซิงก์" ออก
  onSportsQueueChange(queue=>{
    const stillPendingIds=new Set(queue.filter(i=>i.type==='dues').map(i=>i.localId))
    let changed=false
    duesLocal.forEach(d=>{if(d._pending&&!stillPendingIds.has(d.id)){d._pending=false;changed=true}})
    recentScans.forEach(s=>{if(s._pending&&!stillPendingIds.has(s._duesId)){s._pending=false;changed=true}})
    renderQueueStatus(queue)
    if(changed){renderProgress();renderRecent()}
  })
  renderQueueStatus()
  trySyncSportsQueue()

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

// แท็บ "ภาพกิจกรรม" — อัปโหลดรูปเข้าคลังกลาง (ไม่แบ่งสีตอนแสดงผล ทุกสีเห็นกันหมด) สตาฟทุกสี
// อัปโหลดได้เลยไม่ต้องขอสิทธิ์เพิ่ม (ความเสี่ยงต่ำกว่าเงิน/เช็คชื่อ) ในนี้แสดงเฉพาะรูปที่สีตัวเอง
// อัปโหลดไว้ (จัดการลบได้) ส่วนแกลเลอรีรวมทุกสีเปิดผ่านปุ่มแยกไปอีกหน้า (renderSportsGalleryModal)
// แท็บ "บัญชีสี" — บัญชีเงินโปร่งใสของสี รวมค่าบำรุง (จากตาราง sports_team_dues เดิม) +
// เงินสนับสนุนโรงเรียน + เงินรางวัล (แอดมินบันทึกในหน้าแยกต่างหาก) + รายจ่าย (สต๊าฟ/ครูในสีที่
// ได้รับสิทธิ์ "expenses" บันทึกเองได้ตรงนี้) — ทุกคนในทีม (รวมนักเรียนทั่วไปที่เข้ามาดูผ่าน
// studentView) เห็นได้หมดเพื่อความโปร่งใส ต่างจากแท็บอื่นที่ต้องมีสิทธิ์เฉพาะถึงจะเห็นแท็บ
const fundCategoryLabel=cat=>({school_support:'เงินสนับสนุนโรงเรียน',prize:'เงินรางวัล',expense:'รายจ่าย'}[cat]||cat)
const fundCategoryTone=cat=>({school_support:'status-done',prize:'status-warn',expense:'status-bad'}[cat]||'status-pending')
function renderTeamLedgerSection(body,{event,c,fundLedger,canExpenses,card}){
  let entries=[...(fundLedger?.entries||[])]
  const duesTotal=Number(fundLedger?.dues_total)||0

  const render=()=>{
    const schoolSupportTotal=entries.filter(e=>e.category==='school_support').reduce((s,e)=>s+Number(e.amount||0),0)
    const prizeTotal=entries.filter(e=>e.category==='prize').reduce((s,e)=>s+Number(e.amount||0),0)
    const expenseTotal=entries.filter(e=>e.category==='expense').reduce((s,e)=>s+Number(e.amount||0),0)
    const balance=duesTotal+schoolSupportTotal+prizeTotal-expenseTotal

    body.innerHTML=`<section class="${card}">
      <div class="mb-4"><h2 class="font-bold">📒 บัญชีเงินสี${esc(c.name)}</h2><p class="text-xs muted">รายรับ-รายจ่ายทั้งหมดของสี เปิดให้ทุกคนในทีมเห็นเพื่อความโปร่งใส</p></div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-2 mb-5">
        <div class="team-sub rounded-xl p-3 text-center"><p class="text-[10px] muted font-bold">ค่าบำรุงสี</p><b class="text-lg">${duesTotal.toLocaleString('th-TH')}</b></div>
        <div class="team-sub rounded-xl p-3 text-center"><p class="text-[10px] muted font-bold">สนับสนุนโรงเรียน</p><b class="text-lg">${schoolSupportTotal.toLocaleString('th-TH')}</b></div>
        <div class="team-sub rounded-xl p-3 text-center"><p class="text-[10px] muted font-bold">เงินรางวัล</p><b class="text-lg">${prizeTotal.toLocaleString('th-TH')}</b></div>
        <div class="team-sub rounded-xl p-3 text-center"><p class="text-[10px] muted font-bold">รายจ่ายรวม</p><b class="text-lg tone-bad">${expenseTotal.toLocaleString('th-TH')}</b></div>
        <div class="team-sub rounded-xl p-3 text-center"><p class="text-[10px] muted font-bold">คงเหลือ</p><b class="text-lg tone-ok">${balance.toLocaleString('th-TH')}</b></div>
      </div>
      ${canExpenses?`<div class="team-sub rounded-2xl p-4 mb-4 space-y-3">
        <p class="text-xs font-bold">➕ บันทึกรายรับใหม่</p>
        <div class="grid sm:grid-cols-5 gap-2">
          <select id="fund-income-category" class="team-field rounded-xl px-3 py-2 text-sm"><option value="school_support">สนับสนุนโรงเรียน</option><option value="prize">เงินรางวัล</option></select>
          <input id="fund-income-amount" type="number" min="1" step="1" placeholder="จำนวนเงิน" class="team-field rounded-xl px-3 py-2 text-sm">
          <input id="fund-income-desc" type="text" placeholder="รายละเอียด เช่น ชนะเลิศฟุตซอลชาย" class="team-field rounded-xl px-3 py-2 text-sm sm:col-span-2">
          <input id="fund-income-date" type="date" value="${todayLocal()}" class="team-field rounded-xl px-3 py-2 text-sm">
        </div>
        <button id="fund-income-submit" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">➕ บันทึกรายรับ</button>
        <div id="fund-income-status" class="text-xs muted"></div>
      </div>
      <div class="team-sub rounded-2xl p-4 mb-4 space-y-3">
        <p class="text-xs font-bold">➖ บันทึกรายจ่ายใหม่</p>
        <div class="grid sm:grid-cols-4 gap-2">
          <input id="fund-expense-amount" type="number" min="1" step="1" placeholder="จำนวนเงิน" class="team-field rounded-xl px-3 py-2 text-sm">
          <input id="fund-expense-desc" type="text" placeholder="ใช้จ่ายเรื่องอะไร" class="team-field rounded-xl px-3 py-2 text-sm sm:col-span-2">
          <input id="fund-expense-date" type="date" value="${todayLocal()}" class="team-field rounded-xl px-3 py-2 text-sm">
        </div>
        <button id="fund-expense-submit" class="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-bold">➖ บันทึกรายจ่าย</button>
        <div id="fund-expense-status" class="text-xs muted"></div>
      </div>`:''}
      <div class="space-y-2">
        ${entries.length?entries.map(en=>`
          <div class="team-sub rounded-xl p-3 flex items-center gap-3">
            <span class="status-pill ${fundCategoryTone(en.category)} flex-shrink-0">${esc(fundCategoryLabel(en.category))}</span>
            <div class="min-w-0 flex-1">
              <b class="text-sm block truncate">${esc(en.description)}</b>
              <p class="text-[10px] muted">${new Date(en.entry_date).toLocaleDateString('th-TH',{day:'2-digit',month:'short',year:'2-digit'})} · บันทึกโดย ${esc(en.recorded_by_name)}</p>
            </div>
            <b class="flex-shrink-0 ${en.category==='expense'?'tone-bad':'tone-ok'}">${en.category==='expense'?'-':'+'}${Number(en.amount).toLocaleString('th-TH')}</b>
            ${canExpenses?`<button type="button" data-fund-delete="${esc(en.id)}" class="btn-danger-ghost px-2 py-1 rounded-lg text-[10px] font-bold hover:bg-red-600 hover:text-white transition flex-shrink-0">ลบ</button>`:''}
          </div>`).join(''):'<p class="text-sm muted text-center py-6">ยังไม่มีรายการเงินสนับสนุน/รางวัล/รายจ่าย</p>'}
      </div>
    </section>`

    body.querySelector('#fund-income-submit')?.addEventListener('click',async()=>{
      const catEl=body.querySelector('#fund-income-category'),amountEl=body.querySelector('#fund-income-amount'),descEl=body.querySelector('#fund-income-desc'),dateEl=body.querySelector('#fund-income-date')
      const statusEl=body.querySelector('#fund-income-status')
      const category=catEl.value,amount=Number(amountEl.value),description=descEl.value.trim()
      if(!amount||amount<=0||!description){statusEl.textContent='กรุณากรอกจำนวนเงินและรายละเอียดให้ครบ';statusEl.className='text-xs tone-bad';return}
      const btn=body.querySelector('#fund-income-submit');btn.disabled=true
      const {data,error}=await supabase.from('sports_team_fund_entries').insert({event_id:event.id,team_color_id:c.id,category,amount,description,entry_date:dateEl.value||todayLocal()}).select().single()
      btn.disabled=false
      if(error){statusEl.textContent='บันทึกไม่สำเร็จ: '+error.message;statusEl.className='text-xs tone-bad';return}
      entries.unshift({id:data.id,category,amount:data.amount,description:data.description,entry_date:data.entry_date,created_at:data.created_at,recorded_by_name:'ฉัน'})
      toast('บันทึกรายรับแล้ว')
      amountEl.value='';descEl.value='';statusEl.textContent=''
      render()
    })
    body.querySelector('#fund-expense-submit')?.addEventListener('click',async()=>{
      const amountEl=body.querySelector('#fund-expense-amount'),descEl=body.querySelector('#fund-expense-desc'),dateEl=body.querySelector('#fund-expense-date')
      const statusEl=body.querySelector('#fund-expense-status')
      const amount=Number(amountEl.value),description=descEl.value.trim()
      if(!amount||amount<=0||!description){statusEl.textContent='กรุณากรอกจำนวนเงินและรายละเอียดให้ครบ';statusEl.className='text-xs tone-bad';return}
      const btn=body.querySelector('#fund-expense-submit');btn.disabled=true
      const {data,error}=await supabase.from('sports_team_fund_entries').insert({event_id:event.id,team_color_id:c.id,category:'expense',amount,description,entry_date:dateEl.value||todayLocal()}).select().single()
      btn.disabled=false
      if(error){statusEl.textContent='บันทึกไม่สำเร็จ: '+error.message;statusEl.className='text-xs tone-bad';return}
      entries.unshift({id:data.id,category:'expense',amount:data.amount,description:data.description,entry_date:data.entry_date,created_at:data.created_at,recorded_by_name:'ฉัน'})
      toast('บันทึกรายจ่ายแล้ว')
      render()
    })
    body.querySelectorAll('[data-fund-delete]').forEach(btn=>btn.onclick=async()=>{
      if(!confirm('ลบรายการนี้?'))return
      const id=btn.dataset.fundDelete
      const {error}=await supabase.from('sports_team_fund_entries').delete().eq('id',id)
      if(error){toast(error.message,'error');return}
      entries=entries.filter(e=>String(e.id)!==String(id))
      toast('ลบรายการแล้ว')
      render()
    })
  }
  render()
}

// ดึง "กลุ่มประเภทกีฬา" จากชื่อรายการแข่งขัน — ตัดวงเล็บ (ชาย)/(หญิง)/(เดี่ยว)/(ทีมคู่)
// และท้ายชื่อ "ม.ต้น"/"ม.ปลาย" ออก เหลือแค่ชื่อกีฬาฐาน เช่น "ฟุตซอล ม.ต้น" → "ฟุตซอล",
// "วอลเลย์บอล(ชาย) ม.ต้น" → "วอลเลย์บอล" — ใช้เป็นปุ่มกรองด่วนโดยไม่ต้องมี column แยกในฐานข้อมูล
const sportGroupOf=name=>String(name||'').replace(/\([^)]*\)/g,'').replace(/\s*ม\.(ต้น|ปลาย)\s*$/,'').trim()||'อื่นๆ'

// ป้ายเดิมใช้เป็น fallback ให้รูปเก่าระหว่างที่ยังไม่ได้รัน patch ตารางประเภทภาพกิจกรรม
const GALLERY_LEGACY_LABELS=[
  {key:'opening_ceremony',name:'🎉 พิธีเปิด'},
  {key:'closing_ceremony',name:'🏁 พิธีปิด'},
]

async function _loadGalleryUploadTypes(eventId,{activeOnly=false}={}){
  let q=supabase.from('sports_gallery_upload_types').select('*').eq('event_id',eventId)
  if(activeOnly)q=q.eq('is_active',true)
  const {data,error}=await q.order('event_date',{ascending:true,nullsFirst:false}).order('display_order').order('created_at')
  if(error){console.warn('sports_gallery_upload_types unavailable:',error.message);return null}
  return data||[]
}
function _galleryUploadTypeMap(rows){
  const map={}
  ;(rows||[]).forEach(row=>{
    map[row.id]=row
    if(row.legacy_key)map[row.legacy_key]=row
  })
  return map
}

// รวมตัวเลือก "รายการที่เกี่ยวข้อง" ของภาพกิจกรรมเป็นชุดเดียว — กีฬาแข่งขันจริง (id เดิม เก็บ
// backward-compat กับรูปเก่าที่ผูก sport_id ตรงๆ) + ปฏิทินปฏิบัติงาน (เข้าสีครั้งที่ N/กีฬาสี จาก
// work_calendar_events ตัวเดียวกับที่หน้าเช็คชื่อใช้) + รายการพิเศษด้านบน — ใส่ prefix แยกชนิดไว้ที่
// id (cal:/label:) แล้วค่อยแกะกลับตอนบันทึกจริงด้วย _resolveGalleryItemFields
async function _buildGalleryItemOptions(competitions,eventId){
  const [{data:calRows},uploadTypes]=await Promise.all([
    supabase.from('work_calendar_events').select('id,label,event_date,end_date').or('label.ilike.%เข้าสี%,label.ilike.%กีฬาสี%,label.ilike.%วันงาน%'),
    _loadGalleryUploadTypes(eventId,{activeOnly:true}),
  ])
  const calOptions=(calRows||[]).map(ev=>({id:`cal:${ev.id}`,name:`📅 ${ev.label}`}))
  const typeOptions=(uploadTypes||[]).map(row=>({id:`type:${row.id}`,name:`📸 ${_galleryTypeOptionLabel(row)}`}))
  const legacyOptions=uploadTypes===null?GALLERY_LEGACY_LABELS.map(l=>({id:`label:${l.key}`,name:l.name})):[]
  return [...(competitions||[]),...calOptions,...typeOptions,...legacyOptions]
}

// แกะค่าที่เลือกจาก _buildGalleryItemOptions กลับเป็นฟิลด์ที่จะ insert ลง sports_gallery_photos —
// เลือกได้แค่หนึ่งใน sport_id/calendar_event_id/custom_label ต่อรูปเสมอ
function _resolveGalleryItemFields(selectedId){
  if(!selectedId) return {sport_id:null,calendar_event_id:null,custom_label:null}
  const val=String(selectedId)
  if(val.startsWith('cal:')) return {sport_id:null,calendar_event_id:Number(val.slice(4)),custom_label:null}
  if(val.startsWith('type:')) return {sport_id:null,calendar_event_id:null,custom_label:`admin:${val.slice(5)}`}
  if(val.startsWith('label:')) return {sport_id:null,calendar_event_id:null,custom_label:val.slice(6)}
  return {sport_id:selectedId,calendar_event_id:null,custom_label:null}
}

// กุญแจจัดกลุ่มอัลบั้ม + ป้ายชื่อที่จะโชว์ — ใช้ร่วมกันทั้ง renderGallerySection (เฉพาะสี) และ
// openSportsGalleryModal (รวมทุกสี) ต้องมี calendarMap ({id:label}) ประกอบเพราะรูปที่ผูกปฏิทิน
// ไม่มี join แบบ sports(name) ให้มาด้วยตรงๆ
function _galleryPhotoGroupKey(p){
  if(p.sport_id) return p.sport_id
  if(p.calendar_event_id) return `cal:${p.calendar_event_id}`
  if(p.custom_label) return `label:${p.custom_label}`
  return 'general'
}
function _galleryPhotoGroupLabel(p,calendarMap,uploadTypeMap={}){
  if(p.sports?.name) return p.sports.name
  if(p.calendar_event_id) return `📅 ${calendarMap?.[p.calendar_event_id]?.label||'ปฏิทินกิจกรรม'}`
  if(p.custom_label){
    const typeKey=String(p.custom_label).startsWith('admin:')?String(p.custom_label).slice(6):p.custom_label
    const uploadType=uploadTypeMap[typeKey]
    if(uploadType)return `📸 ${_galleryTypeOptionLabel(uploadType)}`
    return GALLERY_LEGACY_LABELS.find(l=>l.key===p.custom_label)?.name||p.custom_label
  }
  return 'ภาพทั่วไป/บรรยากาศ'
}

// ดรอปดาวน์ค้นหา+กรองตามกลุ่มประเภทกีฬา สำหรับเลือกรายการแข่งขัน (ใช้กับ "ภาพกิจกรรม" ที่มี
// ตัวเลือกเป็นสิบๆ รายการ) — panel เป็น portal ต่อท้าย document.body เสมอ (ตามกฎ floating UI
// ของโปรเจกต์นี้) กันโดน overflow:auto ของ #team-tab-body ตัดบัง แทนที่จะ absolute ธรรมดา
function createSportSearchSelect({wrap,options}){
  let selected=null, activeGroup=null, open=false
  const groups=[...new Set(options.map(o=>sportGroupOf(o.name)))]
  wrap.innerHTML=`<button type="button" class="sss-trigger w-full flex items-center justify-between gap-2 rounded-xl team-field px-3 py-2 text-sm text-left">
    <span class="sss-display muted truncate">— ภาพทั่วไป/บรรยากาศ —</span>
    <span class="text-xs muted flex-shrink-0">▾</span>
  </button>`
  const trigger=wrap.querySelector('.sss-trigger')
  const displayEl=wrap.querySelector('.sss-display')
  let panel=null

  const closePanel=()=>{panel?.remove();panel=null;open=false}

  const renderList=()=>{
    const q=panel.querySelector('.sss-search').value.trim().toLowerCase()
    const listEl=panel.querySelector('.sss-list')
    const filtered=options.filter(o=>{
      if(activeGroup&&sportGroupOf(o.name)!==activeGroup)return false
      if(q&&!o.name.toLowerCase().includes(q))return false
      return true
    })
    listEl.innerHTML=`<li data-val="" class="sss-opt px-3 py-2 text-sm cursor-pointer hover:bg-white/10 flex items-center gap-2 ${!selected?'text-pink-400 font-bold':'text-slate-300'}"><span class="w-5 h-5 flex-shrink-0"></span>— ภาพทั่วไป/บรรยากาศ —</li>`+
      (filtered.map(o=>{const icon=sportIconUrl(o);return `<li data-val="${o.id}" class="sss-opt px-3 py-2 text-sm cursor-pointer hover:bg-white/10 flex items-center gap-2 ${selected===o.id?'text-pink-400 font-bold':'text-slate-300'}">${icon?`<img src="${esc(icon)}" class="w-5 h-5 object-contain flex-shrink-0">`:'<span class="w-5 h-5 flex-shrink-0"></span>'}${esc(o.name)}</li>`}).join('')||`<li class="px-3 py-4 text-xs muted text-center">ไม่พบรายการที่ตรงกับคำค้น</li>`)
    listEl.querySelectorAll('.sss-opt[data-val]').forEach(li=>li.addEventListener('mousedown',e=>{
      e.preventDefault()
      const val=li.dataset.val
      selected=val||null
      const opt=options.find(o=>String(o.id)===val)
      displayEl.textContent=opt?opt.name:'— ภาพทั่วไป/บรรยากาศ —'
      displayEl.classList.toggle('muted',!opt)
      closePanel()
    }))
  }

  const openPanel=()=>{
    if(open)return
    open=true
    const rect=trigger.getBoundingClientRect()
    // เผื่อพื้นที่เหลือใต้ปุ่มไม่พอ (จอมือถือเตี้ย/ปุ่มอยู่ค่อนไปทางล่างจอ) — คำนวณความสูง
    // สูงสุดจากพื้นที่ว่างจริงแทนตัวเลขตายตัว กันไม่ให้ panel ล้นจอจนกดสิ่งอื่นไม่ได้
    const spaceBelow=window.innerHeight-rect.bottom-16
    const maxH=Math.max(200,Math.min(320,spaceBelow))
    panel=document.createElement('div')
    panel.className='fixed z-[500] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col'
    panel.style.left=`${rect.left}px`
    panel.style.top=`${rect.bottom+4}px`
    panel.style.width=`${rect.width}px`
    panel.style.maxHeight=`${maxH}px`
    panel.innerHTML=`
      <div class="p-2 border-b border-slate-700 flex-shrink-0">
        <input class="sss-search w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="ค้นหาชื่อรายการแข่งขัน...">
      </div>
      <div class="sss-groups flex flex-nowrap gap-1.5 p-2 border-b border-slate-700 overflow-x-auto flex-shrink-0">
        <button type="button" data-group="" class="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${!activeGroup?'bg-pink-600 text-white':'bg-white/5 text-slate-300'}">ทั้งหมด</button>
        ${groups.map(g=>`<button type="button" data-group="${esc(g)}" class="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${activeGroup===g?'bg-pink-600 text-white':'bg-white/5 text-slate-300'}">${esc(g)}</button>`).join('')}
      </div>
      <ul class="sss-list flex-1 overflow-y-auto" style="-webkit-overflow-scrolling:touch"></ul>`
    document.body.appendChild(panel)
    panel.querySelectorAll('[data-group]').forEach(btn=>btn.addEventListener('click',()=>{
      activeGroup=btn.dataset.group||null
      panel.querySelectorAll('[data-group]').forEach(b=>{b.classList.toggle('bg-pink-600',b.dataset.group===(activeGroup||''));b.classList.toggle('text-white',b.dataset.group===(activeGroup||''));b.classList.toggle('bg-white/5',b.dataset.group!==(activeGroup||''));b.classList.toggle('text-slate-300',b.dataset.group!==(activeGroup||''))})
      renderList()
    }))
    panel.querySelector('.sss-search').addEventListener('input',renderList)
    renderList()
    setTimeout(()=>panel.querySelector('.sss-search').focus(),30)
  }

  trigger.addEventListener('click',()=>open?closePanel():openPanel())
  // ปิดเฉพาะตอนคลิก/แตะนอก panel เท่านั้น — ห้ามปิดตอนเลื่อนหน้าจอ (เดิมปิดตอน scroll
  // ด้วย ทำให้เลื่อนดูรายการยาวๆ ในมือถือไม่ได้เลยเพราะโดนปิดก่อนจะทันเห็น)
  document.addEventListener('mousedown',e=>{if(open&&panel&&!panel.contains(e.target)&&!trigger.contains(e.target))closePanel()},true)
  document.addEventListener('touchstart',e=>{if(open&&panel&&!panel.contains(e.target)&&!trigger.contains(e.target))closePanel()},true)

  return {getValue:()=>selected, setValue:v=>{selected=v||null;const opt=options.find(o=>String(o.id)===String(v));displayEl.textContent=opt?opt.name:'— ภาพทั่วไป/บรรยากาศ —';displayEl.classList.toggle('muted',!opt)}}
}

async function renderGallerySection(body,{event,c,competitions,card,studentView}){
  body.innerHTML=`<div class="py-16 text-center muted">กำลังโหลดภาพกิจกรรม...</div>`
  const [{data:myPhotos,error},{data:calRows},uploadTypes]=await Promise.all([
    supabase.from('sports_gallery_photos').select('*,sports(name,gender)').eq('team_color_id',c.id).order('created_at',{ascending:false}),
    supabase.from('work_calendar_events').select('id,label'),
    _loadGalleryUploadTypes(event.id),
  ])
  if(error){body.innerHTML=`<section class="${card}"><p class="text-center tone-bad py-8">โหลดไม่สำเร็จ: ${esc(error.message)}</p></section>`;return}
  const calendarMap=Object.fromEntries((calRows||[]).map(ev=>[ev.id,ev]))
  const uploadTypeMap=_galleryUploadTypeMap(uploadTypes)
  let photos=myPhotos||[]
  // 'groups' = การ์ดรวมตามรายการแข่งขันที่เคยอัปโหลดแล้ว, 'detail' = คลิกเข้าไปดู/อัปโหลดเพิ่มในรายการนั้น
  let viewMode='groups', activeGroupKey=null

  body.innerHTML=`<section class="${card}">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div><h2 class="font-bold">📸 ภาพกิจกรรมสี${esc(c.name)}</h2><p class="text-xs muted">อัปโหลดภาพกิจกรรม/บรรยากาศ — ทุกสีเห็นภาพของกันและกันได้ในแกลเลอรีรวม</p></div>
      <button id="gallery-open-full" class="px-4 py-2 rounded-xl bg-pink-600 text-white text-sm font-bold">🖼️ เปิดแกลเลอรีรวมทุกสี</button>
    </div>
    ${!studentView?`<div class="team-sub rounded-2xl p-4 mb-4 space-y-3">
      <p class="text-xs font-bold">⬆️ อัปโหลดรูปใหม่ (รายการที่ยังไม่เคยอัปโหลด/ภาพทั่วไป)</p>
      <div class="grid sm:grid-cols-2 gap-3">
        <div>
          <label class="text-xs font-bold muted">รายการแข่งขันที่เกี่ยวข้อง (ถ้ามี)</label>
          <div id="gallery-sport-wrap" class="mt-1.5"></div>
        </div>
        <div>
          <label class="text-xs font-bold muted">เลือกรูปภาพ (เลือกได้หลายรูป)</label>
          <input id="gallery-files" type="file" accept="image/*" multiple class="w-full mt-1.5 text-xs">
        </div>
      </div>
      <button id="gallery-upload-btn" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">⬆️ อัปโหลด</button>
      <div id="gallery-upload-status" class="text-xs muted"></div>
    </div>`:''}
    <div id="gallery-body"></div>
  </section>`

  // จัดกลุ่มรูปที่สีนี้เคยอัปโหลดแล้วตามรายการแข่งขันจริง/ปฏิทินกิจกรรม/รายการพิเศษ — ใช้แสดงเป็นการ์ด
  const groupsOf=()=>{
    const map={}
    photos.forEach(p=>{
      const key=_galleryPhotoGroupKey(p)
      ;(map[key]=map[key]||{key,label:_galleryPhotoGroupLabel(p,calendarMap,uploadTypeMap),icon:p.sports?sportIconUrl(p.sports):null,photos:[]}).photos.push(p)
    })
    return Object.values(map).sort((a,b)=>a.key==='general'?1:b.key==='general'?-1:b.photos.length-a.photos.length)
  }

  const renderBody=()=>{
    const el=body.querySelector('#gallery-body')
    if(viewMode==='detail'){
      const group=groupsOf().find(g=>g.key===activeGroupKey)
      if(!group){viewMode='groups';renderBody();return}
      el.innerHTML=`
        <div class="flex items-center justify-between mb-3">
          <button data-gallery-back class="px-3 py-1.5 rounded-lg team-sub text-xs font-bold">← กลับ</button>
          <b class="text-sm">${esc(group.label)} (${group.photos.length} รูป)</b>
          <span></span>
        </div>
        ${!studentView?`<div class="team-sub rounded-xl p-3 mb-3 flex flex-wrap items-center gap-2">
          <input id="gallery-add-files" type="file" accept="image/*" multiple class="text-xs flex-1 min-w-[160px]">
          <button id="gallery-add-btn" class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold flex-shrink-0">⬆️ อัปโหลดเพิ่มในรายการนี้</button>
          <span id="gallery-add-status" class="text-[11px] muted w-full"></span>
        </div>`:''}
        <div class="masonry">
          ${group.photos.map((p,i)=>`
            <div class="team-sub rounded-xl overflow-hidden">
              <button type="button" data-open-lightbox="${i}" class="block w-full"><img src="${esc(p.photo_url)}" class="w-full block" loading="lazy"></button>
              <div class="p-2">
                <p class="text-[10px] muted">${new Date(p.taken_at).toLocaleDateString('th-TH',{day:'2-digit',month:'short'})}</p>
                ${!studentView?`<button data-gallery-delete="${esc(p.id)}" class="w-full mt-1 px-2 py-1 rounded-lg btn-danger-ghost hover:bg-red-600 hover:text-white transition text-[10px] font-bold">ลบ</button>`:''}
              </div>
            </div>`).join('')}
        </div>`
      el.querySelector('[data-gallery-back]').onclick=()=>{viewMode='groups';renderBody()}
      el.querySelectorAll('[data-open-lightbox]').forEach(btn=>btn.onclick=()=>openGalleryLightbox(document.body,group,{},{},Number(btn.dataset.openLightbox)))
      el.querySelectorAll('[data-gallery-delete]').forEach(btn=>btn.onclick=async()=>{
        if(!confirm('ลบภาพนี้?'))return
        const id=btn.dataset.galleryDelete
        const {error}=await supabase.from('sports_gallery_photos').delete().eq('id',id)
        if(error){toast(error.message,'error');return}
        photos=photos.filter(p=>String(p.id)!==String(id))
        renderBody()
        toast('ลบภาพแล้ว')
      })
      // อัปโหลดเพิ่มในรายการเดิม — ล็อค sport_id ตามการ์ดที่กำลังเปิดอยู่เลย ไม่ต้องเลือกใหม่
      el.querySelector('#gallery-add-btn')?.addEventListener('click',async()=>{
        const filesInput=el.querySelector('#gallery-add-files')
        const files=Array.from(filesInput.files||[])
        if(!files.length)return
        const statusEl=el.querySelector('#gallery-add-status')
        const btn=el.querySelector('#gallery-add-btn')
        btn.disabled=true
        const itemFields=_resolveGalleryItemFields(group.key==='general'?null:group.key)
        for(let i=0;i<files.length;i++){
          statusEl.textContent=`กำลังอัปโหลด ${i+1}/${files.length}...`
          try{
            const url=await uploadGalleryPhoto(event.id,c.id,files[i])
            const {data,error:insErr}=await supabase.from('sports_gallery_photos').insert({event_id:event.id,team_color_id:c.id,...itemFields,photo_url:url}).select('*,sports(name,gender)').single()
            if(insErr)throw insErr
            photos.unshift(data)
          }catch(e){statusEl.textContent=`อัปโหลดรูปที่ ${i+1} ไม่สำเร็จ: ${e.message}`;btn.disabled=false;renderBody();return}
        }
        statusEl.textContent=`อัปโหลดสำเร็จ ${files.length} รูป`
        filesInput.value=''
        btn.disabled=false
        renderBody()
      })
    }else{
      const groups=groupsOf()
      el.innerHTML=groups.length?`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">${groups.map(g=>`
        <button type="button" data-gallery-group="${esc(g.key)}" class="text-left team-sub rounded-xl overflow-hidden">
          <div class="aspect-square relative">
            <img src="${esc(g.photos[0].photo_url)}" class="w-full h-full object-cover" loading="lazy">
            <span class="absolute bottom-1 right-1 bg-black/70 px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white">${g.photos.length} รูป</span>
          </div>
          <p class="p-2 text-[11px] font-bold truncate flex items-center gap-1.5">${g.icon?`<img src="${esc(g.icon)}" class="w-4 h-4 object-contain flex-shrink-0">`:''}<span class="truncate">${esc(g.label)}</span></p>
        </button>`).join('')}</div>`:`<p class="text-sm muted text-center py-8">ยังไม่มีภาพที่สีนี้อัปโหลด</p>`
      el.querySelectorAll('[data-gallery-group]').forEach(btn=>btn.onclick=()=>{activeGroupKey=btn.dataset.galleryGroup;viewMode='detail';renderBody()})
    }
  }
  renderBody()

  let sportSelectApi=null
  if(body.querySelector('#gallery-sport-wrap')){
    sportSelectApi=createSportSearchSelect({wrap:body.querySelector('#gallery-sport-wrap'),options:await _buildGalleryItemOptions(competitions,event.id)})
  }

  body.querySelector('#gallery-open-full').onclick=()=>openSportsGalleryModal(event)

  body.querySelector('#gallery-upload-btn')?.addEventListener('click',async()=>{
    const filesInput=body.querySelector('#gallery-files')
    const itemFields=_resolveGalleryItemFields(sportSelectApi?.getValue()||null)
    const files=Array.from(filesInput.files||[])
    if(!files.length)return
    const statusEl=body.querySelector('#gallery-upload-status')
    const btn=body.querySelector('#gallery-upload-btn')
    btn.disabled=true
    for(let i=0;i<files.length;i++){
      statusEl.textContent=`กำลังอัปโหลด ${i+1}/${files.length}...`
      try{
        const url=await uploadGalleryPhoto(event.id,c.id,files[i])
        const {data,error:insErr}=await supabase.from('sports_gallery_photos').insert({event_id:event.id,team_color_id:c.id,...itemFields,photo_url:url}).select('*,sports(name,gender)').single()
        if(insErr)throw insErr
        photos.unshift(data)
      }catch(e){statusEl.textContent=`อัปโหลดรูปที่ ${i+1} ไม่สำเร็จ: ${e.message}`;btn.disabled=false;renderBody();return}
    }
    statusEl.textContent=`อัปโหลดสำเร็จ ${files.length} รูป`
    filesInput.value=''
    btn.disabled=false
    renderBody()
  })
}

// แกลเลอรีรวมทุกสี — ไม่แยกสี จัดกลุ่มตามรายการแข่งขัน คลิกเปิดเต็มจอเรียงตามเวลาถ่ายจริง
// แต่ละรูปโชว์ผู้อัปโหลด+สี+เวลา กดดาวน์โหลดทีละรูปได้ และดาวน์โหลดทั้งหมดเป็น zip (JSZip จาก CDN)
export async function openSportsGalleryModal(event) {
  document.getElementById('sports-gallery-modal')?.remove()
  const m=document.createElement('div')
  m.id='sports-gallery-modal'
  m.className='fixed inset-0 z-[380] bg-slate-950 text-slate-100 overflow-y-auto'
  m.innerHTML=`<div class="py-20 text-center">กำลังโหลดแกลเลอรี...</div>`
  document.body.appendChild(m)
  try{
    if(!event) event=(await context()).event
    const [{data:photos,error},{data:colors},{data:teachersAll},{data:studentsAll},{data:calRows},uploadTypes]=await Promise.all([
      supabase.from('sports_gallery_photos').select('*,sports(name,gender)').eq('event_id',event.id).order('taken_at',{ascending:true}),
      supabase.from('team_colors').select('id,name,hex_color').eq('event_id',event.id),
      supabase.from('teachers').select('profile_id,full_name').not('profile_id','is',null),
      supabase.from('students').select('profile_id,full_name').not('profile_id','is',null),
      supabase.from('work_calendar_events').select('id,label'),
      _loadGalleryUploadTypes(event.id),
    ])
    if(error)throw error
    const colorMap=Object.fromEntries((colors||[]).map(c=>[c.id,c]))
    const nameMap=Object.fromEntries([...(teachersAll||[]).map(t=>[t.profile_id,t.full_name]),...(studentsAll||[]).map(s=>[s.profile_id,s.full_name])])
    const calendarMap=Object.fromEntries((calRows||[]).map(ev=>[ev.id,ev]))
    const uploadTypeMap=_galleryUploadTypeMap(uploadTypes)
    const groups={}
    ;(photos||[]).forEach(p=>{
      const key=_galleryPhotoGroupKey(p)
      ;(groups[key]=groups[key]||{label:_galleryPhotoGroupLabel(p,calendarMap,uploadTypeMap),icon:p.sports?sportIconUrl(p.sports):null,photos:[]}).photos.push(p)
    })
    const groupKeys=Object.keys(groups).sort((a,b)=>a==='general'?1:b==='general'?-1:0)
    // masonry จัดคอลัมน์ตามสัดส่วนภาพจริง (แบบ Pinterest) แทนกริดสี่เหลี่ยมตัดเท่ากันทุกรูป — ใส่
    // ไว้ในโมดัลนี้เองเพราะเรียกได้จากหน้านักเรียน (ไม่มี #my-team-workspace ห่ออยู่เสมอไป)
    const masonryStyle=`<style>#sports-gallery-modal .masonry{column-count:2;column-gap:.75rem}@media(min-width:640px){#sports-gallery-modal .masonry{column-count:3}}@media(min-width:1024px){#sports-gallery-modal .masonry{column-count:4}}#sports-gallery-modal .masonry>*{break-inside:avoid;margin-bottom:.75rem}</style>`
    let viewMode='groups', activeKey=null

    const renderView=()=>{
      const slot=m.querySelector('#gallery-view')
      if(viewMode==='detail'){
        const g=groups[activeKey]
        slot.innerHTML=`
          <div class="flex items-center justify-between mb-4">
            <button data-gallery-modal-back class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold">← กลับ</button>
            <b class="text-sm">${esc(g.label)} (${g.photos.length} รูป)</b>
            <span></span>
          </div>
          <div class="masonry">${g.photos.map((p,i)=>`
            <button type="button" data-open-photo="${i}" class="block w-full rounded-2xl overflow-hidden border border-slate-800 hover:border-pink-500/60 transition">
              <img src="${esc(p.photo_url)}" class="w-full block" loading="lazy">
            </button>`).join('')}</div>`
        slot.querySelector('[data-gallery-modal-back]').onclick=()=>{viewMode='groups';renderView()}
        slot.querySelectorAll('[data-open-photo]').forEach(btn=>btn.onclick=()=>openGalleryLightbox(m,g,colorMap,nameMap,Number(btn.dataset.openPhoto)))
      }else{
        slot.innerHTML=groupKeys.length?`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">${groupKeys.map(k=>{
          const g=groups[k]
          return `<button data-open-group="${esc(k)}" class="text-left rounded-2xl overflow-hidden border border-slate-800 hover:border-pink-500/60 transition group">
            <div class="aspect-video bg-slate-900 relative">
              <img src="${esc(g.photos[0].photo_url)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              <span class="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded-full text-[10px] font-bold">${g.photos.length} รูป</span>
            </div>
            <div class="p-3 flex items-center gap-2">${g.icon?`<img src="${esc(g.icon)}" class="w-5 h-5 object-contain flex-shrink-0">`:''}<b class="text-sm truncate">${esc(g.label)}</b></div>
          </button>`
        }).join('')}</div>`:'<p class="text-center muted py-20">ยังไม่มีภาพในระบบ</p>'
        slot.querySelectorAll('[data-open-group]').forEach(btn=>btn.onclick=()=>{activeKey=btn.dataset.openGroup;viewMode='detail';renderView()})
      }
    }

    m.innerHTML=`${masonryStyle}<div class="max-w-6xl mx-auto p-4 md:p-6">
      <div class="flex items-center justify-between gap-3 mb-5">
        <h1 class="text-xl font-extrabold">📸 ประมวลภาพกีฬาสี</h1>
        <div class="flex gap-2">
          <button id="gallery-download-all" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">⬇️ ดาวน์โหลดทั้งหมด</button>
          <button id="gallery-modal-close" class="w-10 h-10 border border-slate-700 rounded-xl">✕</button>
        </div>
      </div>
      <div id="gallery-view"></div>
    </div>`
    renderView()

    m.querySelector('#gallery-modal-close').onclick=()=>m.remove()
    m.querySelector('#gallery-download-all').onclick=()=>openGalleryDownloadPicker(groups)
  }catch(e){console.error(e);m.innerHTML=`<button class="absolute right-4 top-4" onclick="this.parentElement.remove()">✕</button>${missing()}`}
}

// ป๊อปอัปเลือกรายการที่ต้องการดาวน์โหลด — ติ๊กได้หลายรายการ (ค่าเริ่มต้นติ๊กทุกรายการ) กด
// ดาวน์โหลดแล้วแยกโฟลเดอร์ในซิปตามรายการที่เลือกให้อัตโนมัติ (ดู downloadGalleryGroupsAsZip)
function openGalleryDownloadPicker(groups){
  const entries=Object.entries(groups)
  document.getElementById('gallery-download-picker')?.remove()
  const overlay=document.createElement('div')
  overlay.id='gallery-download-picker'
  overlay.className='fixed inset-0 z-[400] bg-black/70 flex items-center justify-center p-4'
  overlay.innerHTML=`
    <div class="w-full max-w-md bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3 max-h-[85vh] flex flex-col">
      <div class="flex items-center justify-between flex-shrink-0">
        <b class="text-sm text-slate-100">⬇️ เลือกรายการที่ต้องการดาวน์โหลด</b>
        <button data-picker-close class="w-8 h-8 rounded-lg bg-white/10 text-slate-200">✕</button>
      </div>
      <p class="text-[10.5px] muted flex-shrink-0">แต่ละรายการจะถูกแยกเป็นคนละโฟลเดอร์ในไฟล์ zip ให้อัตโนมัติ</p>
      <div class="flex gap-2 flex-shrink-0">
        <button data-picker-all class="flex-1 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold">เลือกทั้งหมด</button>
        <button data-picker-none class="flex-1 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold">ไม่เลือกเลย</button>
      </div>
      <div class="space-y-1.5 overflow-y-auto flex-1">
        ${entries.map(([key,g])=>`
          <label class="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800 cursor-pointer">
            <input type="checkbox" data-picker-key="${esc(key)}" checked class="w-4 h-4 flex-shrink-0">
            ${g.icon?`<img src="${esc(g.icon)}" class="w-5 h-5 object-contain flex-shrink-0">`:''}
            <span class="text-xs text-slate-200 flex-1 truncate">${esc(g.label)}</span>
            <span class="text-[10px] muted flex-shrink-0">${g.photos.length} รูป</span>
          </label>`).join('')}
      </div>
      <button data-picker-download class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex-shrink-0">⬇️ ดาวน์โหลดที่เลือก</button>
    </div>`
  document.body.appendChild(overlay)
  const close=()=>overlay.remove()
  overlay.querySelector('[data-picker-close]').onclick=close
  overlay.addEventListener('mousedown',e=>{if(e.target===overlay)close()})
  overlay.querySelector('[data-picker-all]').onclick=()=>overlay.querySelectorAll('[data-picker-key]').forEach(cb=>cb.checked=true)
  overlay.querySelector('[data-picker-none]').onclick=()=>overlay.querySelectorAll('[data-picker-key]').forEach(cb=>cb.checked=false)
  overlay.querySelector('[data-picker-download]').onclick=()=>{
    const selectedKeys=[...overlay.querySelectorAll('[data-picker-key]:checked')].map(cb=>cb.dataset.pickerKey)
    if(!selectedKeys.length){toast('เลือกอย่างน้อย 1 รายการ','warning');return}
    close()
    downloadGalleryGroupsAsZip(selectedKeys.map(k=>groups[k]))
  }
}

function openGalleryLightbox(modalRoot,group,colorMap,nameMap,startIdx=0){
  let idx=Math.min(Math.max(startIdx,0),group.photos.length-1)
  let slideshowTimer=null
  const overlay=document.createElement('div')
  overlay.className='fixed inset-0 z-[390] bg-black/95 flex flex-col'
  modalRoot.appendChild(overlay)
  const photoInfo=p=>{
    const color=colorMap[p.team_color_id]
    const uploader=nameMap[p.uploaded_by]||'ไม่ระบุ'
    return `<b>${esc(uploader)}</b>${color?` · <span style="color:${esc(color.hex_color)}">สี${esc(color.name)}</span>`:''} · ${new Date(p.taken_at).toLocaleString('th-TH',{dateStyle:'medium',timeStyle:'short'})}`
  }
  const goPrev=()=>{if(idx>0){idx--;render()}}
  const goNext=()=>{if(idx<group.photos.length-1){idx++;render()}else stopSlideshow()}
  const stopSlideshow=()=>{if(slideshowTimer){clearInterval(slideshowTimer);slideshowTimer=null}}
  const close=()=>{stopSlideshow();document.removeEventListener('keydown',onKeydown);overlay.remove()}
  const onKeydown=e=>{
    if(e.key==='Escape')close()
    else if(e.key==='ArrowLeft')goPrev()
    else if(e.key==='ArrowRight')goNext()
  }
  document.addEventListener('keydown',onKeydown)
  // ปัดนิ้วซ้าย-ขวาเปลี่ยนรูปบนมือถือ (ระยะปัดขั้นต่ำ 40px กันสลับมือถือแตะพลาด)
  let touchStartX=null
  overlay.addEventListener('touchstart',e=>{touchStartX=e.touches[0].clientX},{passive:true})
  overlay.addEventListener('touchend',e=>{
    if(touchStartX===null)return
    const dx=e.changedTouches[0].clientX-touchStartX
    if(Math.abs(dx)>40){dx>0?goPrev():goNext()}
    touchStartX=null
  },{passive:true})
  const render=()=>{
    const p=group.photos[idx]
    overlay.innerHTML=`
      <div class="flex items-center justify-between p-3 text-white text-xs sm:text-sm gap-3">
        <span class="truncate">${photoInfo(p)}</span>
        <div class="flex gap-2 flex-shrink-0">
          <button data-lightbox-slideshow class="px-3 py-1.5 rounded-lg bg-white/10 font-bold">${slideshowTimer?'⏸ หยุด':'▶️ สไลด์โชว์'}</button>
          <a href="${esc(p.photo_url)}" download target="_blank" class="px-3 py-1.5 rounded-lg bg-emerald-600 font-bold">⬇️ โหลด</a>
          <button data-lightbox-close class="w-8 h-8 rounded-lg bg-white/10">✕</button>
        </div>
      </div>
      <div class="flex-1 min-h-0 flex items-center justify-center relative px-2">
        ${idx>0?`<button data-lightbox-prev class="absolute left-2 w-11 h-11 rounded-full bg-white/10 text-white text-xl">‹</button>`:''}
        <img src="${esc(p.photo_url)}" class="max-w-full max-h-full object-contain">
        ${idx<group.photos.length-1?`<button data-lightbox-next class="absolute right-2 w-11 h-11 rounded-full bg-white/10 text-white text-xl">›</button>`:''}
      </div>
      <p class="text-center text-white/60 text-xs py-3">${idx+1} / ${group.photos.length}</p>`
    overlay.querySelector('[data-lightbox-close]').onclick=close
    overlay.querySelector('[data-lightbox-prev]')?.addEventListener('click',goPrev)
    overlay.querySelector('[data-lightbox-next]')?.addEventListener('click',goNext)
    overlay.querySelector('[data-lightbox-slideshow]').onclick=()=>{
      if(slideshowTimer)stopSlideshow()
      else slideshowTimer=setInterval(goNext,3000)
      render()
    }
  }
  render()
}

// ดาวน์โหลดทั้งหมดเป็น zip — โหลด JSZip จาก CDN แบบ lazy (ไม่ต้องเพิ่ม dependency ถ้าไม่ได้ใช้ปุ่มนี้)
let _jsZipPromise=null
function _loadJSZip(){
  if(window.JSZip) return Promise.resolve(window.JSZip)
  if(_jsZipPromise) return _jsZipPromise
  _jsZipPromise=new Promise((resolve,reject)=>{
    const s=document.createElement('script')
    s.src='https://unpkg.com/jszip@3.10.1/dist/jszip.min.js'
    s.onload=()=>resolve(window.JSZip)
    s.onerror=reject
    document.head.appendChild(s)
  })
  return _jsZipPromise
}
// selectedGroups = [{label, photos}] — แยกโฟลเดอร์ในซิปตาม label ของแต่ละรายการที่เลือกให้อัตโนมัติ
async function downloadGalleryGroupsAsZip(selectedGroups){
  const totalPhotos=selectedGroups.reduce((s,g)=>s+g.photos.length,0)
  if(!totalPhotos){toast('ยังไม่มีภาพให้ดาวน์โหลด','error');return}
  toast(`กำลังเตรียมไฟล์ ${totalPhotos} รูป...`)
  try{
    const JSZip=await _loadJSZip()
    const zip=new JSZip()
    let done=0
    for(const g of selectedGroups){
      // ตัดอักขระต้องห้ามของชื่อไฟล์/โฟลเดอร์ระบบออก (/ \ : * ? " < > |) กันสร้างโฟลเดอร์พลาด
      const folderName=(g.label||'ภาพทั่วไป').replace(/[\\/:*?"<>|]/g,'-').trim()||'ภาพทั่วไป'
      const folder=zip.folder(folderName)
      for(let i=0;i<g.photos.length;i++){
        const res=await fetch(g.photos[i].photo_url)
        const blob=await res.blob()
        folder.file(`${folderName}-${i+1}.jpg`,blob)
        done++
        if(done%5===0) toast(`กำลังเตรียมไฟล์ ${done}/${totalPhotos} รูป...`)
      }
    }
    const content=await zip.generateAsync({type:'blob'})
    const a=document.createElement('a')
    a.href=URL.createObjectURL(content)
    a.download='ภาพกิจกรรมกีฬาสี.zip'
    a.click();URL.revokeObjectURL(a.href)
    toast('ดาวน์โหลดสำเร็จ')
  }catch(e){toast('ดาวน์โหลดไม่สำเร็จ: '+e.message,'error')}
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
  modal.innerHTML=`<div class="team-card border rounded-3xl w-full max-w-2xl p-5 shadow-2xl"><div class="flex items-center justify-between gap-3 mb-4"><div><h2 class="text-lg font-bold">🖨️ พิมพ์บัญชีนักกีฬา สี${esc(c.name)}</h2><p class="text-xs muted">เลือกรายการกีฬาและรูปแบบใบรายชื่อก่อนสร้างเอกสาร</p></div><button data-close-print class="w-10 h-10 rounded-xl border line">✕</button></div><div class="space-y-4"><div><label class="text-xs font-bold muted">เลือกรายการกีฬา</label><div id="ath-print-comp-wrap" class="mt-1"></div></div><div><label class="text-xs font-bold muted">เลือกรูปแบบเอกสารพิมพ์</label><div class="grid sm:grid-cols-2 gap-2 mt-2"><button data-ath-format="table" class="ath-format team-tab-active rounded-xl border line px-4 py-3 text-left"><b>📋 แบบตารางรายชื่อ</b><p class="text-xs opacity-80">เหมาะสำหรับเซ็นชื่อ/ตรวจสอบ</p></button><button data-ath-format="cards" class="ath-format rounded-xl border line px-4 py-3 text-left"><b>🖼️ แบบการ์ดรูปภาพ</b><p class="text-xs opacity-80">เหมาะสำหรับตรวจตัวนักกีฬา</p></button></div></div><button data-ath-print-confirm class="w-full py-3 rounded-xl bg-pink-600 text-white font-bold">สร้างเอกสาร / พิมพ์</button></div></div>`
  wrap.appendChild(modal)
  const compPicker=_createPickerSelect({wrap:modal.querySelector('#ath-print-comp-wrap'),items:comps.map(x=>({id:x.id,label:x.name+(x.code?` (${x.code})`:''),photo:sportIconUrl(x)})),placeholder:'พิมพ์ชื่อรายการ...',emptyLabel:'-- ทุกประเภทกีฬาที่สีนี้ลงทะเบียน --',photoClass:'w-6 h-6 object-contain flex-shrink-0'})
  let format='table'
  modal.querySelector('[data-close-print]').onclick=()=>modal.remove()
  modal.querySelectorAll('[data-ath-format]').forEach(b=>b.onclick=()=>{format=b.dataset.athFormat;modal.querySelectorAll('[data-ath-format]').forEach(x=>x.classList.toggle('team-tab-active',x.dataset.athFormat===format))})
  modal.querySelector('[data-ath-print-confirm]').onclick=()=>{const comp=compPicker.getValue();const rows=regs.filter(r=>!comp||String(r.sport_id)===String(comp)).map(r=>({name:r.students?.full_name,code:r.students?.student_code,room:r.students?.main_room,detail:r.sports?.name||'—',extra:r.jersey_number?`เบอร์ ${r.jersey_number}`:'',photo:r.students?.image_url}));const label=!comp?'ทุกประเภทกีฬา':(comps.find(x=>String(x.id)===String(comp))?.name||'รายการกีฬา');modal.remove();printTeamList(`บัญชีนักกีฬาสี${c.name} · ${label}`,c,rows,{mode:format})}
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
  openHtmlPrintOverlay(html, { autoprint: true })
}
function printTeamList(title,c,rows,{mode='table'}={}){
  const cards=rows.map((r,i)=>`<div class="print-card"><div class="print-photo">${r.photo?`<img src="${esc(r.photo)}">`:i+1}</div><div><b>${esc(r.name)}</b><p>${esc(r.code)} · ${esc(r.room)}</p><p>${esc(r.detail)} ${esc(r.extra||'')}</p></div></div>`).join('')
  const table=`<table class="print-table"><thead><tr><th>#</th><th>รหัส</th><th>ชื่อ - สกุล</th><th>ชั้น</th><th>รายละเอียด</th><th>หมายเหตุ</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(r.code)}</td><td>${esc(r.name)}</td><td>${esc(r.room)}</td><td>${esc(r.detail)}</td><td>${esc(r.extra||'')}</td></tr>`).join('')}</tbody></table>`
  const area=document.createElement('div');area.id='team-print-area';area.innerHTML=`<style>@media print{body>*:not(#team-print-area){display:none!important}.print-actions{display:none!important}#team-print-area{position:static!important;padding:0!important}}#team-print-area{position:fixed;inset:0;z-index:9999;background:white;color:#111827;overflow:auto;padding:24px;font-family:Sarabun,Arial,sans-serif}.print-actions{position:sticky;top:0;background:white;padding-bottom:12px;text-align:right}.print-table{width:100%;border-collapse:collapse}.print-table th,.print-table td{border:1px solid #111827;padding:6px 8px;font-size:12px}.print-table th{background:#f3f4f6}.print-title{text-align:center;margin:8px 0 16px}.print-logos{display:flex;justify-content:center;gap:8px;margin-top:4px}.print-logo{width:54px;height:54px;border-radius:999px;object-fit:cover}.print-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.print-card{border:1px solid #111827;border-radius:12px;padding:10px;display:flex;gap:10px;align-items:center;min-height:88px}.print-photo{width:56px;height:64px;border:1px solid #9ca3af;border-radius:8px;display:grid;place-items:center;font-weight:bold;overflow:hidden}.print-photo img{width:100%;height:100%;object-fit:cover}</style><div class="print-actions"><button id="team-print-confirm" style="padding:8px 14px;background:#111827;color:white;border-radius:10px">🖨️ สั่งพิมพ์ / บันทึก PDF</button> <button id="team-print-close" style="padding:8px 14px;border:1px solid #d1d5db;border-radius:10px">ปิด</button></div><div class="print-logos">${c.logo_url?`<img src="${esc(c.logo_url)}" class="print-logo">`:''}</div><div class="print-title"><h2>${esc(title)}</h2><p>กิจกรรมกีฬาสีภายใน · พิมพ์ ${new Date().toLocaleDateString('th-TH')}</p></div>${mode==='cards'?`<div class="print-grid">${cards}</div>`:table}`;document.body.appendChild(area);area.querySelector('#team-print-confirm').onclick=()=>window.print();area.querySelector('#team-print-close').onclick=()=>area.remove()
}

function identityForm(wrap,m,c){
  const box=document.createElement('div')
  box.className='fixed inset-0 z-[400] bg-black/70 grid place-items-center p-4'
  box.innerHTML=`<form class="bg-slate-900 border border-slate-700 rounded-2xl p-5 w-full max-w-lg space-y-3">
    <div class="flex items-center justify-between gap-3"><div><h3 class="font-bold">เสนอแก้อัตลักษณ์ทีมสี${esc(c.name)}</h3><p class="text-xs text-slate-400 mt-1">อัปโหลดไฟล์ภาพจริง แล้วส่งให้หัวหน้าครูประจำสีตรวจสอบ</p></div><button type="button" data-cancel class="w-9 h-9 rounded-xl border border-slate-600">✕</button></div>
    <label class="block rounded-2xl border border-dashed border-slate-600 p-4 text-center cursor-pointer hover:border-violet-400 transition">
      <input name="logo_file" type="file" accept="image/jpeg,image/png,image/webp" class="hidden">
      <div id="identity-logo-preview" class="mx-auto mb-2 w-24 h-24 rounded-2xl bg-slate-800 overflow-hidden grid place-items-center text-3xl">${c.logo_url?`<img src="${esc(c.logo_url)}" class="w-full h-full object-cover">`:'🖼️'}</div>
      <b class="text-sm text-violet-300">เลือกรูปโลโก้ใหม่</b><p id="identity-file-name" class="text-xs text-slate-500 mt-1">JPG, PNG หรือ WebP ไม่เกิน 5 MB</p>
    </label>
    <input name="name" placeholder="ชื่อทีมใหม่ (ถ้ามี)" class="w-full bg-slate-800 rounded-xl px-3 py-2">
    <input name="motto" placeholder="คำขวัญ" class="w-full bg-slate-800 rounded-xl px-3 py-2">
    <input name="mascot" placeholder="มาสคอต" class="w-full bg-slate-800 rounded-xl px-3 py-2">
    <div class="flex gap-2"><button type="button" class="flex-1 border border-slate-600 rounded-xl py-2" data-cancel>ยกเลิก</button><button class="flex-1 bg-violet-600 rounded-xl py-2 font-bold" data-submit>ส่งตรวจสอบ</button></div>
  </form>`
  wrap.appendChild(box)
  const form=box.querySelector('form'), fileInput=form.elements.logo_file, preview=box.querySelector('#identity-logo-preview')
  let previewUrl=null
  const close=()=>{if(previewUrl)URL.revokeObjectURL(previewUrl);box.remove()}
  box.querySelectorAll('[data-cancel]').forEach(btn=>btn.onclick=close)
  box.addEventListener('click',e=>{if(e.target===box)close()})
  fileInput.onchange=()=>{
    const file=fileInput.files?.[0]
    if(!file)return
    if(!['image/jpeg','image/png','image/webp'].includes(file.type)){toast('รองรับเฉพาะไฟล์ JPG, PNG หรือ WebP','error');fileInput.value='';return}
    if(file.size>5*1024*1024){toast('ไฟล์โลโก้ต้องมีขนาดไม่เกิน 5 MB','error');fileInput.value='';return}
    if(previewUrl)URL.revokeObjectURL(previewUrl)
    previewUrl=URL.createObjectURL(file)
    preview.innerHTML=`<img src="${esc(previewUrl)}" class="w-full h-full object-cover">`
    box.querySelector('#identity-file-name').textContent=file.name
  }
  form.onsubmit=async e=>{
    e.preventDefault()
    const f=new FormData(form), file=fileInput.files?.[0]
    const hasText=['name','motto','mascot'].some(key=>String(f.get(key)||'').trim())
    if(!file&&!hasText)return toast('กรุณาเลือกรูป หรือกรอกข้อมูลที่ต้องการแก้ไขอย่างน้อย 1 รายการ','error')
    const submit=box.querySelector('[data-submit]');submit.disabled=true;submit.textContent=file?'กำลังอัปโหลดรูป...':'กำลังส่ง...'
    try{
      let logoUrl=null
      if(file){
        const unique=`${Date.now()}-${Math.random().toString(36).slice(2,8)}`
        logoUrl=await uploadSystemAsset(`sports/team-identity/${c.id}/${unique}`,file)
      }
      submit.textContent='กำลังบันทึกคำขอ...'
      const {error}=await supabase.from('sports_team_identity_requests').insert({event_id:m.event_id,team_color_id:c.id,proposed_logo_url:logoUrl,proposed_name:String(f.get('name')||'').trim()||null,proposed_motto:String(f.get('motto')||'').trim()||null,proposed_mascot:String(f.get('mascot')||'').trim()||null,status:'pending_lead',submitted_at:new Date().toISOString()})
      if(error)throw error
      close();toast('อัปโหลดและส่งให้หัวหน้าครูประจำสีตรวจสอบแล้ว');openMyTeamWorkspace()
    }catch(error){toast(error?.message||'อัปโหลดหรือส่งคำขอไม่สำเร็จ','error');submit.disabled=false;submit.textContent='ส่งตรวจสอบ'}
  }
}
