import { supabase } from './supabase.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'

const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]))
const bangkokDate = () => new Intl.DateTimeFormat('en-CA', { timeZone:'Asia/Bangkok', year:'numeric', month:'2-digit', day:'2-digit' }).format(new Date())
const call = async (name, args = {}) => {
  const { data, error } = await supabase.rpc(name, args)
  if (error) throw error
  return data
}
const timeLabel = value => String(value ?? '').slice(0, 5)
const accessRoles = access => access?.assignments ?? []

export async function getAsrPrayerAccess() {
  try { return await call('asr_prayer_my_access') } catch { return null }
}

function progressHtml(groups = []) {
  if (!groups.length) return '<div class="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-400">ยังไม่มีขอบเขตข้อมูลให้ติดตาม</div>'
  return `<div class="space-y-4">${groups.map(group => {
    const pct = Number(group.percent) || 0
    const round = group.round === 'commuter' ? 'ไปกลับ' : 'หอพัก'
    const rows = (group.students ?? []).map(student => `<tr class="border-t border-gray-100">
      <td class="px-3 py-2"><b class="text-gray-800">${esc(student.full_name)}</b><div class="text-[10px] text-gray-400">${esc(student.student_code)} · ${esc(student.main_room || '—')}</div></td>
      <td class="px-3 py-2 text-center"><span class="rounded-full px-2 py-1 text-[10px] font-bold ${student.scanned ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-50 text-amber-700'}">${student.scanned ? 'สแกนแล้ว' : 'ยังไม่มีรายการ'}</span></td>
      <td class="px-3 py-2 text-right text-[10px] text-gray-400">${student.recorded_at ? new Date(student.recorded_at).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Bangkok'}) : '—'}</td>
    </tr>`).join('')
    return `<section class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 p-4">
        <div><p class="font-bold text-gray-800">${round} · ${esc(group.scope_value)}</p><p class="mt-0.5 text-xs text-gray-400">สแกนแล้ว ${group.scanned} / ${group.eligible} คน · ยังไม่มีรายการ ${group.pending} คน</p></div>
        <div class="text-right"><b class="text-xl text-emerald-700">${pct}%</b><p class="text-[10px] text-gray-400">ความคืบหน้า</p></div>
      </div>
      <div class="h-2 bg-gray-100"><div class="h-full bg-emerald-500 transition-all" style="width:${Math.max(0,Math.min(100,pct))}%"></div></div>
      <details><summary class="cursor-pointer px-4 py-3 text-xs font-semibold text-indigo-600">ดูรายชื่อนักเรียน (${group.eligible})</summary>
        <div class="max-h-80 overflow-auto"><table class="w-full text-left text-xs"><tbody>${rows || '<tr><td class="p-4 text-center text-gray-400">ไม่มีรายชื่อ</td></tr>'}</tbody></table></div>
      </details>
    </section>`
  }).join('')}</div>`
}

function checkList(items, { name, checkedIds = [], label = x => x.full_name, value = x => x.id, disabled = false, limit = 250 } = {}) {
  const checked = new Set((checkedIds ?? []).map(String))
  return (items ?? []).slice(0, limit).map(item => {
    const id = String(value(item) ?? '')
    return `<label class="flex min-w-0 items-start gap-2 rounded-lg border border-gray-100 px-2.5 py-2 text-xs hover:bg-indigo-50">
      <input type="checkbox" name="${esc(name)}" value="${esc(id)}" ${checked.has(id) ? 'checked' : ''} ${disabled ? 'disabled' : ''} class="mt-0.5 rounded border-gray-300 text-indigo-600">
      <span class="min-w-0"><b class="block truncate text-gray-700">${esc(label(item))}</b><span class="text-[10px] text-gray-400">${esc(item.student_code ?? item.teacher_code ?? '')} · ${esc(item.main_room ?? item.dept ?? '')}</span></span>
    </label>`
  }).join('') || '<p class="col-span-full p-3 text-xs text-gray-400">ไม่พบรายชื่อ</p>'
}

function renderManager(data, access) {
  const settings = data.settings ?? access.settings ?? {}
  const candidates = data.m6_candidates ?? []
  const delegateCandidates = data.delegate_candidates ?? candidates
  const delegates = data.delegates ?? []
  const scanners = data.color_scanners ?? []
  const colors = data.colors ?? []
  const canAdmin = !!access.is_admin
  const dorms = data.dorms ?? []
  const femaleStudents = data.female_students ?? []
  const teachers = data.teachers ?? []
  const viewers = data.report_viewers ?? []
  const selectedDorm = dorms.find(d => d.is_active) ?? dorms[0]
  const dormStudents = selectedDorm ? femaleStudents.filter(s => (selectedDorm.student_ids ?? []).includes(s.id)) : []
  return `<div class="space-y-5">
    <section class="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm sm:p-5">
      <div class="mb-4"><h2 class="font-bold text-gray-800">⏱️ ตั้งเวลาสแกนอัซรี</h2><p class="mt-1 text-xs text-gray-500">ปรับได้โดยแอดมินและนักเรียนตัวแทน · เวลาเริ่มละหมาดตรงกับเวลาปิดสแกนแต่ละรอบ</p></div>
      <form id="asr-schedule-form" class="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <label class="text-xs text-gray-500">รอบไปกลับ · เริ่มสแกน<input name="commuter_start" type="time" value="${timeLabel(settings.commuter_scan_start)||'16:10'}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800"></label>
        <label class="text-xs text-gray-500">ปิดสแกน/เริ่มละหมาด<input name="commuter_end" type="time" value="${timeLabel(settings.commuter_scan_end)||'16:20'}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800"></label>
        <label class="text-xs text-gray-500">รอบหอพัก · เริ่มสแกน<input name="dorm_start" type="time" value="${timeLabel(settings.dorm_scan_start)||'16:20'}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800"></label>
        <label class="text-xs text-gray-500">ปิดสแกน/เริ่มละหมาด<input name="dorm_end" type="time" value="${timeLabel(settings.dorm_scan_end)||'16:30'}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800"></label>
        <button class="col-span-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 sm:col-span-4">บันทึกช่วงเวลา</button>
      </form>
    </section>

    ${canAdmin ? `<section class="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">👑 แต่งตั้งนักเรียนตัวแทน</h2><p class="mt-1 text-xs text-gray-500">ตัวแทนที่เลือกจัดการผู้สแกน ม.6 ได้ทุกสีและปรับเวลาสองรอบได้</p>
      <div class="mt-3 grid max-h-56 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2">${checkList(delegateCandidates,{name:'asr-delegate',checkedIds:delegates.map(x=>x.student_id),label:x=>`${x.full_name} · ${x.main_room}`,value:x=>x.id})}</div>
      <button id="asr-save-delegates" class="mt-3 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white">บันทึกนักเรียนตัวแทน</button>
    </section>` : ''}

    <section class="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">🎨 ผู้สแกนประจำสี · รอบไปกลับ</h2><p class="mt-1 text-xs text-gray-500">จัดการได้ทุกสี · ผู้สแกนต้องเป็นนักเรียนหญิง ม.6 ในสีที่เลือก และสแกนข้ามสีไม่ได้</p>
      <div class="mt-3 flex flex-wrap items-center gap-2"><label for="asr-color-select" class="text-xs font-semibold text-gray-500">เลือกสี</label><select id="asr-color-select" class="rounded-xl border border-gray-200 px-3 py-2 text-sm">${colors.map(color=>`<option value="${esc(color)}">สี${esc(color)}</option>`).join('')}</select><button id="asr-load-color-scanners" class="rounded-xl border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600">แสดงรายชื่อ</button></div>
      <div id="asr-color-candidates" class="mt-3 grid max-h-64 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2"></div>
      <button id="asr-save-color-scanners" class="mt-3 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white">บันทึกผู้สแกนของสีนี้</button>
    </section>

    ${canAdmin ? `<section class="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">🏠 จัดกลุ่มนักเรียนหญิงหอพัก</h2><p class="mt-1 text-xs text-gray-500">ระบบไม่มีช่องข้อมูลหอพักเดิม ให้แอดมินสร้างชื่อหอและจัดรายชื่อที่นี่ นักเรียนอื่นที่ไม่ได้อยู่ในทะเบียนหอจะอยู่รอบไปกลับ</p>
      <form id="asr-dorm-create-form" class="mt-3 flex flex-wrap gap-2"><input name="name" required maxlength="100" placeholder="ชื่อหอพัก เช่น หอหญิง 1" class="min-w-[220px] flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm"><button class="rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white">เพิ่มหอพัก</button></form>
      <div class="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div><label class="text-xs font-semibold text-gray-500">เลือกหอพัก</label><select id="asr-dorm-select" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm">${dorms.filter(d=>d.is_active).map(d=>`<option value="${d.id}" ${d.id===selectedDorm?.id?'selected':''}>${esc(d.name)} · ${(d.student_ids??[]).length} คน</option>`).join('')}</select>
          <div id="asr-dorm-current" class="mt-2 max-h-52 space-y-1 overflow-auto rounded-xl bg-gray-50 p-2">${dormStudents.map(s=>`<div class="flex items-center justify-between gap-2 rounded-lg bg-white px-2 py-1.5 text-xs"><span>${esc(s.full_name)} <span class="text-gray-400">${esc(s.student_code)} · ${esc(s.main_room)}</span></span></div>`).join('') || '<p class="p-2 text-xs text-gray-400">ยังไม่มีรายชื่อในหอนี้</p>'}</div>
          <div class="mt-3 flex gap-2"><select id="asr-dorm-staff" class="min-w-0 flex-1 rounded-xl border border-gray-200 px-2 py-2 text-xs"><option value="">เลือกครู/ผู้ดูแล</option>${teachers.map(t=>`<option value="${esc(t.profile_id)}">${esc(t.full_name)} · ${esc(t.teacher_code)}</option>`).join('')}</select><select id="asr-dorm-role" class="rounded-xl border border-gray-200 px-2 py-2 text-xs"><option value="dorm_monitor">ติดตามผล</option><option value="dorm_scanner">สแกนและติดตาม</option></select><button id="asr-add-dorm-staff" class="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white">เพิ่ม</button></div>
          <div id="asr-dorm-staff-list" class="mt-2 space-y-1">${(selectedDorm?.staff??[]).map(person=>`<div class="flex items-center justify-between gap-2 rounded-lg border border-gray-100 px-2 py-1.5 text-xs"><span>${esc(person.name)} · ${person.role==='dorm_scanner'?'สแกนและติดตาม':'ติดตามผล'}</span><button data-remove-dorm-staff="${esc(person.profile_id)}" data-role="${esc(person.role)}" class="text-red-500">ถอนสิทธิ์</button></div>`).join('')}</div>
        </div>
        <div><label for="asr-dorm-search" class="text-xs font-semibold text-gray-500">ค้นหานักเรียนหญิงแล้วเลือกสมาชิกหอ</label><input id="asr-dorm-search" placeholder="ค้นหาชื่อ รหัส หรือห้อง" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"><div id="asr-dorm-search-results" class="mt-2 max-h-64 space-y-1 overflow-auto"></div><p id="asr-dorm-selection-count" class="mt-2 text-xs text-gray-500">เลือกแล้ว ${(selectedDorm?.student_ids??[]).length} คน</p><button id="asr-save-dorm-roster" class="mt-2 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white">บันทึกรายชื่อหอนี้</button></div>
      </div>
    </section>` : ''}

    ${canAdmin ? `<section class="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-5"><h2 class="font-bold text-gray-800">📊 ผู้ติดตามภาพรวม</h2><p class="mt-1 text-xs text-gray-500">มอบสิทธิ์ดูแดชบอร์ดภาพรวมแก่นักบริหารหรือฝ่ายปกครองที่เลือก</p><div class="mt-3 grid max-h-56 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2">${checkList(teachers,{name:'asr-report-viewer',checkedIds:viewers.map(x=>x.profile_id),label:x=>`${x.full_name} · ${x.dept||'ครู'}`,value:x=>x.profile_id})}</div><button id="asr-save-report-viewers" class="mt-3 rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white">บันทึกผู้ติดตามภาพรวม</button></section>` : ''}
    ${canAdmin && data.audit?.length ? `<details class="rounded-2xl border border-gray-200 bg-white p-4"><summary class="cursor-pointer text-sm font-bold text-gray-700">ประวัติการตั้งค่าและมอบหมายสิทธิ์ล่าสุด</summary><div class="mt-3 space-y-2">${data.audit.map(row=>`<div class="border-t border-gray-100 pt-2 text-xs"><b>${esc(row.actor||'ผู้ใช้')}</b> · ${esc(row.action)}<span class="ml-2 text-gray-400">${new Date(row.created_at).toLocaleString('th-TH',{timeZone:'Asia/Bangkok'})}</span></div>`).join('')}</div></details>` : ''}
  </div>`
}

function bindManager(root, data, access, reload) {
  const canAdmin = !!access.is_admin
  root.querySelector('#asr-schedule-form')?.addEventListener('submit', async event => {
    event.preventDefault()
    const form = event.currentTarget
    const fd = new FormData(form)
    const button = form.querySelector('button')
    button.disabled = true
    try {
      await call('asr_prayer_save_schedule',{p_commuter_start:fd.get('commuter_start'),p_commuter_end:fd.get('commuter_end'),p_dorm_start:fd.get('dorm_start'),p_dorm_end:fd.get('dorm_end')})
      showToast('บันทึกช่วงเวลาสแกนแล้ว','success')
      await reload()
    } catch(error) { showToast(getFriendlyErrorMessage(error),'error') } finally { button.disabled=false }
  })

  root.querySelector('#asr-save-delegates')?.addEventListener('click',async event=>{
    const ids=[...root.querySelectorAll('[name="asr-delegate"]:checked')].map(x=>Number(x.value))
    event.currentTarget.disabled=true
    try { await call('asr_prayer_set_delegates',{p_student_ids:ids}); showToast(`บันทึกนักเรียนตัวแทน ${ids.length} คนแล้ว`,'success'); await reload() }
    catch(error){showToast(getFriendlyErrorMessage(error),'error')} finally{event.currentTarget.disabled=false}
  })

  const colorSelect=root.querySelector('#asr-color-select')
  const drawColorCandidates=()=>{
    const color=colorSelect?.value
    const assigned=data.color_scanners.filter(row=>row.scope_value===color).map(row=>row.student_id)
    const list=data.m6_candidates.filter(row=>row.house_color===color)
    const target=root.querySelector('#asr-color-candidates')
    if(target) target.innerHTML=checkList(list,{name:'asr-color-scanner',checkedIds:assigned,label:x=>`${x.full_name} · ${x.main_room}`,value:x=>x.id})
  }
  drawColorCandidates()
  root.querySelector('#asr-load-color-scanners')?.addEventListener('click',drawColorCandidates)
  colorSelect?.addEventListener('change',drawColorCandidates)
  root.querySelector('#asr-save-color-scanners')?.addEventListener('click',async event=>{
    const ids=[...root.querySelectorAll('[name="asr-color-scanner"]:checked')].map(x=>Number(x.value))
    event.currentTarget.disabled=true
    try { await call('asr_prayer_set_color_scanners',{p_color:colorSelect.value,p_student_ids:ids}); showToast(`บันทึกผู้สแกนสี${colorSelect.value} ${ids.length} คนแล้ว`,'success'); await reload() }
    catch(error){showToast(getFriendlyErrorMessage(error),'error')} finally{event.currentTarget.disabled=false}
  })

  if (!canAdmin) return
  root.querySelector('#asr-dorm-create-form')?.addEventListener('submit',async event=>{
    event.preventDefault(); const name=new FormData(event.currentTarget).get('name')?.trim()
    try { await call('asr_prayer_save_dorm',{p_dorm_id:null,p_name:name,p_is_active:true}); showToast('เพิ่มหอพักแล้ว','success'); await reload() }
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}
  })

  const dormSelect=root.querySelector('#asr-dorm-select')
  let currentDorm=()=>data.dorms.find(d=>String(d.id)===String(dormSelect?.value))
  let staged=new Set((currentDorm()?.student_ids??[]).map(Number))
  let query=''
  const drawDormResults=()=>{
    const wrap=root.querySelector('#asr-dorm-search-results'); if(!wrap)return
    const q=query.trim().toLowerCase()
    const matches=(data.female_students??[]).filter(s=>!q||[s.full_name,s.student_code,s.main_room,s.house_color].some(v=>String(v??'').toLowerCase().includes(q))).slice(0,60)
    const checked=new Set([...staged].map(String))
    wrap.innerHTML=checkList(matches,{name:'asr-dorm-student',checkedIds:[...checked],label:s=>`${s.full_name} · ${s.main_room} · ${s.house_color||'ยังไม่ระบุสี'}`,value:s=>s.id,limit:60})
    root.querySelector('#asr-dorm-selection-count').textContent=`เลือกแล้ว ${staged.size} คน · ค้นพบ ${matches.length} รายชื่อ (แสดงไม่เกิน 60)`
  }
  dormSelect?.addEventListener('change',()=>{staged=new Set((currentDorm()?.student_ids??[]).map(Number)); const members=(currentDorm()?.student_ids??[]);root.querySelector('#asr-dorm-current').innerHTML=data.female_students.filter(s=>members.includes(s.id)).map(s=>`<div class="rounded-lg bg-white px-2 py-1.5 text-xs">${esc(s.full_name)} <span class="text-gray-400">${esc(s.student_code)} · ${esc(s.main_room)}</span></div>`).join('')||'<p class="p-2 text-xs text-gray-400">ยังไม่มีรายชื่อในหอนี้</p>';drawDormResults()})
  root.querySelector('#asr-dorm-search')?.addEventListener('input',e=>{query=e.target.value;drawDormResults()})
  root.querySelector('#asr-dorm-search-results')?.addEventListener('change',e=>{if(e.target.name!=='asr-dorm-student')return;const id=Number(e.target.value);if(e.target.checked)staged.add(id);else staged.delete(id);drawDormResults()})
  drawDormResults()
  root.querySelector('#asr-save-dorm-roster')?.addEventListener('click',async event=>{
    const dorm=currentDorm();if(!dorm)return showToast('กรุณาเพิ่มและเลือกหอพักก่อน','warning')
    event.currentTarget.disabled=true
    try{await call('asr_prayer_replace_dorm_roster',{p_dorm_id:dorm.id,p_student_ids:[...staged]});showToast(`บันทึกรายชื่อหอ ${dorm.name} ${staged.size} คนแล้ว`,'success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}finally{event.currentTarget.disabled=false}
  })
  root.querySelector('#asr-add-dorm-staff')?.addEventListener('click',async event=>{
    const profileId=root.querySelector('#asr-dorm-staff')?.value;const dorm=currentDorm();const role=root.querySelector('#asr-dorm-role')?.value
    if(!profileId||!dorm)return showToast('เลือกหอและผู้ดูแลก่อน','warning')
    event.currentTarget.disabled=true
    try{await call('asr_prayer_set_dorm_access',{p_profile_id:profileId,p_dorm_id:dorm.id,p_role:role,p_enabled:true});showToast('เพิ่มสิทธิ์ผู้ดูแลหอแล้ว','success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}finally{event.currentTarget.disabled=false}
  })
  root.querySelectorAll('[data-remove-dorm-staff]').forEach(button=>button.addEventListener('click',async()=>{
    const dorm=currentDorm();if(!dorm)return
    try{await call('asr_prayer_set_dorm_access',{p_profile_id:button.dataset.removeDormStaff,p_dorm_id:dorm.id,p_role:button.dataset.role,p_enabled:false});showToast('ถอนสิทธิ์แล้ว','success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}
  }))
  root.querySelector('#asr-save-report-viewers')?.addEventListener('click',async event=>{
    const ids=[...root.querySelectorAll('[name="asr-report-viewer"]:checked')].map(x=>x.value)
    event.currentTarget.disabled=true
    try{await call('asr_prayer_set_report_viewers',{p_profile_ids:ids});showToast('บันทึกผู้ติดตามภาพรวมแล้ว','success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}finally{event.currentTarget.disabled=false}
  })
}

function renderScannerSection(access) {
  const roles=accessRoles(access)
  const canScan=roles.some(row=>['color_scanner','dorm_scanner'].includes(row.role))
  if(!canScan)return ''
  const settings=access.settings??{}
  return `<section class="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm sm:p-5">
    <div class="mb-3 flex flex-wrap items-center justify-between gap-2"><div><h2 class="font-bold text-gray-800">📷 สแกนบันทึกละหมาดอัซรี</h2><p class="mt-1 text-xs text-gray-500">ระบบเลือกและตรวจรอบจากเวลาและสิทธิ์ของผู้สแกน</p></div><span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">รอบไปกลับ ${timeLabel(settings.commuter_scan_start)}–${timeLabel(settings.commuter_scan_end)} · หอพัก ${timeLabel(settings.dorm_scan_start)}–${timeLabel(settings.dorm_scan_end)}</span></div>
    <div class="grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px]">
      <div id="asr-camera-reader" class="min-h-52 overflow-hidden rounded-xl bg-gray-950"></div>
      <div class="space-y-2"><button id="asr-camera-start" class="w-full rounded-xl bg-indigo-600 px-3 py-2.5 text-sm font-bold text-white">เปิดกล้องสแกน</button><button id="asr-camera-stop" class="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600">ปิดกล้อง</button>
        <form id="asr-code-form"><label for="asr-student-code" class="text-xs font-semibold text-gray-500">หรือใช้เครื่องยิงรหัส/กรอกรหัส</label><input id="asr-student-code" autocomplete="off" inputmode="numeric" placeholder="รหัสนักเรียน" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 font-mono text-sm"><button class="mt-2 w-full rounded-xl bg-emerald-600 px-3 py-2.5 text-sm font-bold text-white">บันทึกผลสแกน</button></form>
      </div>
    </div><div id="asr-scan-feedback" class="mt-3 hidden rounded-xl p-3 text-sm"></div>
  </section>`
}

export async function renderAsrPrayerView(root, actor = null, { onBack = null } = {}) {
  if (!root) throw new Error('ไม่พบพื้นที่แสดงระบบอัซรี')
  window._activeAsrPrayerCleanup?.()
  root.innerHTML='<div class="py-16 text-center text-sm text-gray-400">กำลังโหลดระบบติดตามละหมาดอัซรี…</div>'
  let access, data=null, dashboard=null, selectedDate=bangkokDate()
  let camera=null, refreshing=null, timer=null
  const cleanup=()=>{if(timer)clearInterval(timer);timer=null;if(camera){camera.stop().catch(()=>{});camera.clear().catch(()=>{});camera=null}if(window._activePrayerScannerState?.asrMode)window._activePrayerScannerState=null}
  window._activeAsrPrayerCleanup=cleanup
  const load=async()=>{
    access=await call('asr_prayer_my_access')
    const roles=accessRoles(access)
    const canManage=!!access.can_manage
    if(canManage){
      data=await call('asr_prayer_admin_data')
      if(access.is_admin)data.delegate_candidates=await call('asr_prayer_delegate_candidates')
    }
    const canDashboard=access.is_admin||access.can_view_all||roles.some(row=>['color_scanner','dorm_scanner','dorm_monitor'].includes(row.role))
    if(canDashboard)dashboard=await call('asr_prayer_dashboard',{p_check_date:selectedDate})
    if(!canManage&&!canDashboard)throw new Error('คุณยังไม่ได้รับมอบหมายสิทธิ์ใช้งานระบบติดตามละหมาดอัซรี')
  }
  try{await load()}catch(error){root.innerHTML=`<div class="mx-auto max-w-xl rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center"><p class="text-3xl">🔒</p><p class="mt-2 font-bold text-gray-800">ยังไม่มีสิทธิ์ใช้งานระบบอัซรี</p><p class="mt-1 text-sm text-gray-600">${esc(getFriendlyErrorMessage(error))}</p><button id="asr-back" class="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-700">← กลับ</button></div>`;root.querySelector('#asr-back')?.addEventListener('click',()=>onBack?.());return}

  const drawDashboard=()=>{
    const wrap=root.querySelector('#asr-dashboard-content');if(wrap)wrap.innerHTML=progressHtml(dashboard?.groups??[])
    const dateText=root.querySelector('#asr-dashboard-date-label');if(dateText)dateText.textContent=`ข้อมูลวันที่ ${new Date(`${selectedDate}T12:00:00+07:00`).toLocaleDateString('th-TH',{dateStyle:'long',timeZone:'Asia/Bangkok'})} · “ยังไม่มีรายการ” ไม่ได้แปลว่าขาดละหมาด`
  }
  const canManage=!!access.can_manage
  const roles=accessRoles(access)
  const canDashboard=!!dashboard
  const scanner=renderScannerSection(access)
  const manager=data?renderManager(data,access):''
  const headerBack=onBack?'<button id="asr-back" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600">← กลับ</button>':''
  root.innerHTML=`<div class="mx-auto max-w-6xl space-y-4 animate-fade">
    <header class="flex flex-wrap items-center justify-between gap-3"><div><p class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">ระบบติดตามระยะเริ่มต้น · นักเรียนหญิง</p><h1 class="text-xl font-extrabold text-gray-800 sm:text-2xl">🕌 ติดตามละหมาดอัซรี</h1></div>${headerBack}</header>
    <div class="grid grid-cols-2 gap-2 rounded-2xl border border-gray-100 bg-white p-3 text-center shadow-sm sm:grid-cols-4"><div><p class="text-[10px] font-semibold text-gray-400">รอบ 1 · ไปกลับ</p><p class="mt-1 font-mono text-sm font-bold text-emerald-700">${timeLabel(access.settings?.commuter_scan_start)}–${timeLabel(access.settings?.commuter_scan_end)}</p><p class="text-[10px] text-gray-400">เริ่มละหมาด ${timeLabel(access.settings?.commuter_scan_end)}</p></div><div><p class="text-[10px] font-semibold text-gray-400">รอบ 2 · หอพัก</p><p class="mt-1 font-mono text-sm font-bold text-indigo-700">${timeLabel(access.settings?.dorm_scan_start)}–${timeLabel(access.settings?.dorm_scan_end)}</p><p class="text-[10px] text-gray-400">เริ่มละหมาด ${timeLabel(access.settings?.dorm_scan_end)}</p></div><div><p class="text-[10px] font-semibold text-gray-400">ขอบเขตของฉัน</p><p class="mt-1 text-sm font-bold text-gray-700">${access.is_admin||access.can_view_all?'ภาพรวมทั้งหมด':roles.filter(r=>r.role!=='delegate').map(r=>r.scope_value).join(', ')||'จัดการสิทธิ์'}</p></div><div><p class="text-[10px] font-semibold text-gray-400">บันทึกลง</p><p class="mt-1 text-sm font-bold text-gray-700">ตารางอัซรีแยก</p></div></div>
    <nav class="flex flex-wrap gap-2">${canDashboard?'<button data-asr-tab="dashboard" class="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white">📊 ติดตามผล</button>':''}${scanner?'<button data-asr-tab="scanner" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600">📷 สแกน</button>':''}${canManage?'<button data-asr-tab="manager" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600">⚙️ ตั้งค่าและมอบสิทธิ์</button>':''}</nav>
    ${canDashboard?`<section id="asr-dashboard-panel" class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white p-3"><label class="text-xs font-semibold text-gray-600">เลือกวันที่ <input id="asr-dashboard-date" type="date" value="${esc(selectedDate)}" max="${bangkokDate()}" class="ml-1 rounded-lg border border-gray-200 px-2 py-1.5"></label><button id="asr-dashboard-refresh" class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600">รีเฟรช</button></div><p id="asr-dashboard-date-label" class="text-[10px] text-amber-700"></p><div id="asr-dashboard-content"></div></section>`:''}
    ${scanner?`<section id="asr-scanner-panel" class="hidden">${scanner}</section>`:''}
    ${canManage?`<section id="asr-manager-panel" class="hidden">${manager}</section>`:''}
  </div>`
  root.querySelector('#asr-back')?.addEventListener('click',()=>{cleanup();onBack?.()})
  drawDashboard()
  const showTab=tab=>{
    root.querySelector('#asr-dashboard-panel')?.classList.toggle('hidden',tab!=='dashboard')
    root.querySelector('#asr-scanner-panel')?.classList.toggle('hidden',tab!=='scanner')
    root.querySelector('#asr-manager-panel')?.classList.toggle('hidden',tab!=='manager')
    root.querySelectorAll('[data-asr-tab]').forEach(button=>{const active=button.dataset.asrTab===tab;button.className=`rounded-xl px-3 py-2 text-xs font-bold ${active?'bg-emerald-600 text-white':'border border-gray-200 bg-white text-gray-600'}`})
  }
  root.querySelectorAll('[data-asr-tab]').forEach(button=>button.addEventListener('click',()=>showTab(button.dataset.asrTab)))
  showTab(scanner?'scanner':canDashboard?'dashboard':'manager')

  const reload=async()=>{await load();if(data)root.querySelector('#asr-manager-panel').innerHTML=renderManager(data,access);if(dashboard)drawDashboard();bindManager(root,data,access,reload)}
  if(data)bindManager(root,data,access,reload)
  const fetchDashboard=async()=>{
    if(!canDashboard)return
    try{dashboard=await call('asr_prayer_dashboard',{p_check_date:selectedDate});drawDashboard()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}
  }
  root.querySelector('#asr-dashboard-date')?.addEventListener('change',async event=>{selectedDate=event.target.value||bangkokDate();await fetchDashboard()})
  root.querySelector('#asr-dashboard-refresh')?.addEventListener('click',fetchDashboard)
  if(canDashboard)timer=setInterval(()=>{if(document.visibilityState==='visible')fetchDashboard()},15000)

  const feedback=root.querySelector('#asr-scan-feedback')
  const showFeedback=(result,error)=>{
    if(!feedback)return
    feedback.classList.remove('hidden','bg-red-50','text-red-700','bg-emerald-50','text-emerald-800','bg-amber-50','text-amber-800')
    if(error){feedback.classList.add('bg-red-50','text-red-700');feedback.innerHTML=`ไม่บันทึก: ${esc(getFriendlyErrorMessage(error))}`;return}
    const duplicate=result.status==='duplicate';feedback.classList.add(duplicate?'bg-amber-50':'bg-emerald-50',duplicate?'text-amber-800':'text-emerald-800')
    feedback.innerHTML=`<div class="flex items-center gap-3">${result.student?.image_url?`<img src="${esc(result.student.image_url)}" class="h-14 w-12 rounded-lg border border-white object-cover" alt="">`:''}<div><b>${duplicate?'สแกนรายการนี้แล้ว':'บันทึกสำเร็จ'} · ${esc(result.student?.full_name)}</b><p class="mt-1 text-xs">${esc(result.student?.student_code)} · ${esc(result.student?.main_room)} · ${esc(result.scope_value)} · ${new Date(result.recorded_at).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Bangkok'})}</p></div></div>`
  }
  let saving=false
  const processCode=async raw=>{
    const code=String(raw??'').trim();if(!code||saving)return
    saving=true
    try{const result=await call('asr_prayer_scan',{p_student_code:code});showFeedback(result,null);if(selectedDate===bangkokDate())await fetchDashboard()}
    catch(error){showFeedback(null,error)}finally{saving=false;const input=root.querySelector('#asr-student-code');if(input){input.value='';input.focus()}}
  }
  root.querySelector('#asr-code-form')?.addEventListener('submit',event=>{event.preventDefault();processCode(root.querySelector('#asr-student-code')?.value)})
  root.querySelector('#asr-camera-start')?.addEventListener('click',async event=>{
    if(typeof Html5Qrcode==='undefined')return showToast('ไม่พบตัวอ่าน QR ในหน้านี้','error')
    const button=event.currentTarget;button.disabled=true;button.textContent='กำลังเปิดกล้อง…'
    try{camera=new Html5Qrcode('asr-camera-reader');window._activePrayerScannerState={asrMode:true,html5Qrcode:camera};await camera.start({facingMode:'environment'},{fps:10,qrbox:{width:230,height:230}},code=>processCode(code));button.textContent='กล้องกำลังทำงาน';showToast('เปิดกล้องแล้ว','success')}
    catch(error){camera=null;button.disabled=false;button.textContent='เปิดกล้องสแกน';showToast(getFriendlyErrorMessage(error),'error')}
  })
  root.querySelector('#asr-camera-stop')?.addEventListener('click',async()=>{if(camera){await camera.stop().catch(()=>{});await camera.clear().catch(()=>{});camera=null;window._activePrayerScannerState=null}const button=root.querySelector('#asr-camera-start');if(button){button.disabled=false;button.textContent='เปิดกล้องสแกน'}})
}
