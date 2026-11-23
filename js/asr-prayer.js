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

function progressCard(group, index) {
  const pct = Math.max(0, Math.min(100, Number(group.percent) || 0))
  const color = group.round === 'commuter'
  const title = color ? `สี${group.scope_value}` : group.scope_value
  return `<button type="button" data-asr-open-group="${index}" aria-label="ดูรายชื่อนักเรียน ${esc(title)} สแกนแล้ว ${group.scanned} จาก ${group.eligible} คน" class="group w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:p-5">
    <div class="flex items-center gap-4 sm:gap-5">
      <div class="grid h-24 w-24 shrink-0 place-items-center rounded-full sm:h-28 sm:w-28" role="img" aria-label="สแกนแล้ว ${pct}%" style="background:conic-gradient(#10b981 ${pct}%,#e5e7eb ${pct}% 100%)">
        <div class="grid h-[72px] w-[72px] place-items-center rounded-full bg-white sm:h-[84px] sm:w-[84px]"><div class="text-center"><b class="text-xl font-extrabold text-emerald-700 sm:text-2xl">${pct}%</b><span class="block text-[10px] text-gray-500">บันทึกแล้ว</span></div></div>
      </div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center justify-between gap-2"><div><p class="text-xs font-semibold text-gray-400">${color ? 'รอบไปกลับ' : 'รอบหอพัก'}</p><h3 class="truncate text-lg font-extrabold text-gray-800">${esc(title)}</h3></div><span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">${pct}%</span></div>
        <p class="mt-2 text-sm text-gray-600">สแกนแล้ว <b>${group.scanned}</b> / ${group.eligible} คน</p>
        <div class="mt-2 h-3 overflow-hidden rounded-full bg-gray-100" aria-hidden="true"><div class="h-full rounded-full bg-emerald-500 transition-all" style="width:${pct}%"></div></div>
        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs"><span class="font-semibold text-emerald-700">● บันทึกแล้ว ${group.scanned}</span><span class="text-gray-500">● ยังไม่มีรายการ ${group.pending}</span></div>
        <p class="mt-3 text-xs font-semibold text-indigo-600 group-hover:text-indigo-800">คลิกดูรายชื่อนักเรียน →</p>
      </div>
    </div>
  </button>`
}

function progressHtml(groups = []) {
  const colors = groups.filter(group => group.round === 'commuter' && group.scope_type === 'color' && group.scope_value && !['#N/A','ยังไม่ระบุสี'].includes(group.scope_value.trim()))
  const dorms = groups.filter(group => group.round === 'dorm' && group.scope_type === 'dorm' && group.scope_value)
  const renderGrid = (items, empty) => items.length
    ? `<div class="grid grid-cols-1 gap-4 md:grid-cols-2">${items.map((group,index)=>progressCard(group,groups.indexOf(group))).join('')}</div>`
    : `<div class="rounded-2xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-400">${empty}</div>`
  return `<div class="space-y-7">
    <section><div class="mb-3"><h2 class="text-base font-extrabold text-gray-800">🎨 ความคืบหน้ารอบไปกลับตามสี</h2><p class="mt-1 text-xs text-gray-500">แตะการ์ดเพื่อเปิดรายชื่อนักเรียนของสีนั้น</p></div>${renderGrid(colors,'ยังไม่มีข้อมูลสีที่เข้าเงื่อนไข')}</section>
    <section><div class="mb-3"><h2 class="text-base font-extrabold text-gray-800">🏠 ความคืบหน้ารอบหอพัก</h2><p class="mt-1 text-xs text-gray-500">แยกตามชื่อหอที่แอดมินกำหนด แตะการ์ดเพื่อเปิดรายชื่อ</p></div>${renderGrid(dorms,'ยังไม่มีหอพักที่จัดกลุ่มนักเรียนไว้')}</section>
  </div>`
}

function renderGroupStudentRows(students = []) {
  return students.map((student,index) => `<tr class="${index%2?'bg-gray-50':'bg-white'} border-t border-gray-100">
    <td class="whitespace-nowrap px-4 py-3 text-xs text-gray-400">${index+1}</td>
    <td class="px-4 py-3"><b class="block text-sm text-gray-800">${esc(student.full_name)}</b><span class="text-xs text-gray-500">${esc(student.student_code)}</span></td>
    <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-600">${esc(student.main_room || '—')}</td>
    <td class="whitespace-nowrap px-4 py-3"><span class="rounded-full px-2.5 py-1 text-xs font-bold ${student.scanned?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-600'}">${student.scanned?'บันทึกแล้ว':'ยังไม่มีรายการ'}</span></td>
    <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-500">${student.recorded_at?new Date(student.recorded_at).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Bangkok'}):'—'}</td>
  </tr>`).join('') || '<tr><td colspan="5" class="p-10 text-center text-gray-400">ไม่มีรายชื่อ</td></tr>'
}

function renderGroupModal(group) {
  if (!group) return null
  const isColor = group.round === 'commuter'
  const title = isColor ? `สี${group.scope_value}` : group.scope_value
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[100] overflow-y-auto bg-slate-950/60 p-0 sm:p-4'
  modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true'); modal.setAttribute('aria-labelledby','asr-detail-title')
  modal.innerHTML = `<div class="flex min-h-screen flex-col bg-white shadow-2xl sm:mx-auto sm:min-h-[calc(100vh-2rem)] sm:max-w-6xl sm:rounded-2xl">
    <header class="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-4 sm:px-6"><div class="min-w-0"><p class="text-xs font-semibold text-emerald-700">${isColor?'รอบไปกลับ':'รอบหอพัก'} · ${esc(title)}</p><h2 id="asr-detail-title" class="text-lg font-extrabold text-gray-900 sm:text-xl">รายชื่อนักเรียน · ${esc(group.eligible)} คน</h2></div><button type="button" data-asr-close-modal aria-label="ปิดหน้ารายชื่อ" class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gray-200 text-xl text-gray-600 hover:bg-gray-50">×</button></header>
    <div class="flex flex-wrap items-center gap-3 border-b border-gray-100 bg-gray-50 px-4 py-3 text-sm sm:px-6"><span class="font-bold text-emerald-700">บันทึกแล้ว ${group.scanned}</span><span class="text-gray-500">ยังไม่มีรายการ ${group.pending}</span><span class="ml-auto text-gray-500">ความคืบหน้า ${group.percent}%</span></div>
    <div class="flex-1 overflow-auto"><table class="w-full min-w-[640px] border-collapse text-left"><thead class="sticky top-0 bg-white text-xs font-bold text-gray-500 shadow-sm"><tr><th class="px-4 py-3">ลำดับ</th><th class="px-4 py-3">นักเรียน</th><th class="px-4 py-3">ห้อง</th><th class="px-4 py-3">สถานะ</th><th class="px-4 py-3">เวลาสแกน</th></tr></thead><tbody data-asr-detail-body><tr><td colspan="5" class="p-10 text-center text-gray-400">กำลังโหลดรายชื่อ…</td></tr></tbody></table></div>
  </div>`
  const close=()=>{document.removeEventListener('keydown',onKey);modal.remove()}
  const onKey=event=>{if(event.key==='Escape')close()}
  modal.addEventListener('click',event=>{if(event.target===modal)close()})
  modal.querySelector('[data-asr-close-modal]').addEventListener('click',close)
  document.addEventListener('keydown',onKey)
  document.body.append(modal)
  modal.querySelector('[data-asr-close-modal]').focus()
  return modal
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

function roomOptions(items = [], allLabel = 'ทุกห้อง') {
  const rooms = [...new Set((items ?? []).map(item => String(item.main_room ?? '').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'th'))
  return `<option value="">${esc(allLabel)}</option>${rooms.map(room=>`<option value="${esc(room)}">${esc(room)}</option>`).join('')}`
}

function bindSearchChecklist(root, { inputId, resultsId, selectedId, filterId = null, name, items = [], initialIds = [], value = item => item.id, label = item => item.full_name, searchFields = ['full_name','student_code','main_room','house_color','teacher_code','dept'], limit = 80, emptyText = 'พิมพ์คำค้นเพื่อค้นหารายชื่อ' }) {
  const input=root.querySelector(`#${inputId}`)
  const results=root.querySelector(`#${resultsId}`)
  const selectedSummary=root.querySelector(`#${selectedId}`)
  const roomFilter=filterId?root.querySelector(`#${filterId}`):null
  let searchableItems=items
  const selected=new Set((initialIds??[]).map(String))
  if(!input||!results)return selected
  const draw=()=>{
    const query=input.value.trim().toLocaleLowerCase()
    const room=roomFilter?.value??''
    const matches=searchableItems.filter(item=>(!query||searchFields.some(field=>String(item[field]??'').toLocaleLowerCase().includes(query)))&&(!room||String(item.main_room??'').trim()===room))
    const visible=matches.slice(0,limit)
    results.innerHTML=(query||room)
      ? checkList(visible,{name,checkedIds:[...selected],label,value,limit}) + (matches.length>limit?`<p class="col-span-full px-2 text-xs text-gray-500">พบ ${matches.length} รายชื่อ · แสดง ${limit} รายชื่อแรก พิมพ์เพิ่มเพื่อกรองให้แคบลง</p>`:'')
      : `<p class="col-span-full rounded-xl bg-gray-50 p-4 text-center text-xs text-gray-500">${emptyText}</p>`
    if(selectedSummary){
      const chosen=searchableItems.filter(item=>selected.has(String(value(item))))
      selectedSummary.innerHTML=`เลือกแล้ว ${chosen.length} รายชื่อ${chosen.length?` · คลิก × เพื่อนำออก <span class="ml-1 inline-flex flex-wrap gap-1">${chosen.slice(0,20).map(item=>`<button type="button" data-asr-remove-id="${esc(value(item))}" aria-label="ถอนสิทธิ์ ${esc(label(item))}" title="คลิกเพื่อนำออก" class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-[10px] text-indigo-700 hover:bg-red-50 hover:text-red-700">${esc(label(item))} <span aria-hidden="true">×</span></button>`).join('')}${chosen.length>20?`<span class="text-[10px] text-gray-500">และอีก ${chosen.length-20} รายชื่อ · ค้นชื่อเพื่อถอนเพิ่ม</span>`:''}</span>`:''}`
    }
  }
  input.addEventListener('input',draw)
  roomFilter?.addEventListener('change',draw)
  results.addEventListener('change',event=>{
    if(event.target.name!==name)return
    const id=String(event.target.value)
    if(event.target.checked)selected.add(id);else selected.delete(id)
    draw()
  })
  selectedSummary?.addEventListener('click',event=>{
    const remove=event.target.closest('[data-asr-remove-id]')
    if(!remove)return
    selected.delete(remove.dataset.asrRemoveId)
    draw()
  })
  const setItems=(nextItems,nextIds=[])=>{
    searchableItems=nextItems??[]
    selected.clear()
    for(const id of nextIds??[])selected.add(String(id))
    if(roomFilter){const previous=roomFilter.value;roomFilter.innerHTML=roomOptions(searchableItems);if([...roomFilter.options].some(option=>option.value===previous))roomFilter.value=previous}
    draw()
  }
  draw()
  return {
    selected,
    reset(nextItems,nextIds=[]) {
      setItems(nextItems,nextIds)
    },
  }
}

function renderManager(data, access) {
  const settings = data.settings ?? access.settings ?? {}
  const candidates = data.m6_candidates ?? []
  const delegateCandidates = data.delegate_candidates ?? candidates
  const delegates = data.delegates ?? []
  const colors = data.colors ?? []
  const canAdmin = !!access.is_admin
  const dorms = data.dorms ?? []
  const femaleStudents = data.female_students ?? []
  const teachers = data.teachers ?? []
  const viewers = data.report_viewers ?? []
  const selectedDorm = dorms.find(d => d.is_active) ?? dorms[0]
  const dormStudents = selectedDorm ? femaleStudents.filter(s => (selectedDorm.student_ids ?? []).includes(s.id)) : []
  return `<div class="space-y-4">
    <nav aria-label="หมวดตั้งค่าและมอบสิทธิ์" class="sticky top-2 z-20 flex gap-2 overflow-x-auto rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-sm backdrop-blur">
      <button type="button" data-asr-manager-tab="schedule" class="shrink-0 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white">⏱️ เวลา</button>
      <button type="button" data-asr-manager-tab="scanners" class="shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50">🎨 ผู้สแกนและตัวแทน</button>
      ${canAdmin?'<button type="button" data-asr-manager-tab="dorms" class="shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50">🏠 หอพัก</button><button type="button" data-asr-manager-tab="viewers" class="shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50">📊 ผู้ติดตาม</button>':''}
    </nav>
    <section data-asr-manager-panel="schedule" class="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm sm:p-5">
      <div class="mb-4"><h2 class="font-bold text-gray-800">⏱️ ตั้งเวลาสแกนอัซรี</h2><p class="mt-1 text-xs text-gray-500">ปรับได้โดยแอดมินและนักเรียนตัวแทน · เวลาเริ่มละหมาดตรงกับเวลาปิดสแกนแต่ละรอบ</p></div>
      <form id="asr-schedule-form" class="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <label class="text-xs text-gray-500">รอบไปกลับ · เริ่มสแกน<input name="commuter_start" type="time" value="${timeLabel(settings.commuter_scan_start)||'16:10'}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800"></label>
        <label class="text-xs text-gray-500">ปิดสแกน/เริ่มละหมาด<input name="commuter_end" type="time" value="${timeLabel(settings.commuter_scan_end)||'16:20'}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800"></label>
        <label class="text-xs text-gray-500">รอบหอพัก · เริ่มสแกน<input name="dorm_start" type="time" value="${timeLabel(settings.dorm_scan_start)||'16:20'}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800"></label>
        <label class="text-xs text-gray-500">ปิดสแกน/เริ่มละหมาด<input name="dorm_end" type="time" value="${timeLabel(settings.dorm_scan_end)||'16:30'}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800"></label>
        <button class="col-span-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 sm:col-span-4">บันทึกช่วงเวลา</button>
      </form>
    </section>

    <section data-asr-manager-panel="scanners" class="hidden space-y-5">
    ${canAdmin ? `<section class="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">👑 แต่งตั้งนักเรียนตัวแทน</h2><p class="mt-1 text-xs text-gray-500">ตัวแทนที่เลือกจัดการผู้สแกน ม.6 ได้ทุกสีและปรับเวลาสองรอบได้</p>
      <label for="asr-delegate-search" class="mt-3 block text-xs font-semibold text-gray-600">ค้นหานักเรียน ม.6</label><div class="mt-1 grid gap-2 sm:grid-cols-[minmax(0,1fr)_190px]"><input id="asr-delegate-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อหรือรหัส" class="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><select id="asr-delegate-room" aria-label="กรองนักเรียนตัวแทนตามห้อง" class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${roomOptions(delegateCandidates,'ทุกห้อง ม.6')}</select></div>
      <p id="asr-delegate-selected" class="mt-2 text-xs text-gray-500"></p><div id="asr-delegate-results" class="mt-2 grid max-h-64 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2"></div>
      <button id="asr-save-delegates" class="mt-3 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white">บันทึกนักเรียนตัวแทน</button>
    </section>` : ''}

    <section class="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">🎨 ผู้สแกนประจำสี · รอบไปกลับ</h2><p class="mt-1 text-xs text-gray-500">จัดการได้ทุกสี · ผู้สแกนต้องเป็นนักเรียนหญิง ม.6 ในสีที่เลือก และสแกนข้ามสีไม่ได้</p>
      <div class="mt-3 flex flex-wrap items-center gap-2"><label for="asr-color-select" class="text-xs font-semibold text-gray-500">เลือกสี</label><select id="asr-color-select" class="rounded-xl border border-gray-200 px-3 py-2 text-sm">${colors.map(color=>`<option value="${esc(color)}">สี${esc(color)}</option>`).join('')}</select></div>
      <label for="asr-color-search" class="mt-3 block text-xs font-semibold text-gray-600">ค้นหานักเรียนหญิง ม.6 สีที่เลือก</label><div class="mt-1 grid gap-2 sm:grid-cols-[minmax(0,1fr)_190px]"><input id="asr-color-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อหรือรหัส" class="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><select id="asr-color-room" aria-label="กรองผู้สแกนตามห้อง" class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${roomOptions(candidates,'ทุกห้อง ม.6')}</select></div>
      <p id="asr-color-selected" class="mt-2 text-xs text-gray-500"></p><div id="asr-color-candidates" class="mt-2 grid max-h-64 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2"></div>
      <button id="asr-save-color-scanners" class="mt-3 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white">บันทึกผู้สแกนของสีนี้</button>
    </section>
    </section>

    ${canAdmin ? `<section data-asr-manager-panel="dorms" class="hidden space-y-5">
    <section class="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">🏠 จัดกลุ่มนักเรียนหญิงหอพัก</h2><p class="mt-1 text-xs text-gray-500">ระบบไม่มีช่องข้อมูลหอพักเดิม ให้แอดมินสร้างชื่อหอและจัดรายชื่อที่นี่ นักเรียนอื่นที่ไม่ได้อยู่ในทะเบียนหอจะอยู่รอบไปกลับ</p>
      <form id="asr-dorm-create-form" class="mt-3 flex flex-wrap gap-2"><input name="name" required maxlength="100" placeholder="ชื่อหอพัก เช่น หอหญิง 1" class="min-w-[220px] flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm"><button class="rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white">เพิ่มหอพัก</button></form>
      <div class="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div><label class="text-xs font-semibold text-gray-500">เลือกหอพัก</label><select id="asr-dorm-select" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm">${dorms.filter(d=>d.is_active).map(d=>`<option value="${d.id}" ${d.id===selectedDorm?.id?'selected':''}>${esc(d.name)} · ${(d.student_ids??[]).length} คน</option>`).join('')}</select>
          <p id="asr-dorm-current-count" class="mt-2 text-xs text-gray-500">สมาชิกหอนี้ ${dormStudents.length} คน</p>
          <label for="asr-dorm-staff-search" class="mt-3 block text-xs font-semibold text-gray-600">ค้นหาครู/ผู้ดูแลหอ</label><input id="asr-dorm-staff-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อ รหัส หรือฝ่าย" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><input id="asr-dorm-staff" type="hidden"><p id="asr-dorm-staff-selected" class="mt-1 text-xs text-gray-500">ยังไม่ได้เลือกครู</p><div id="asr-dorm-staff-results" class="mt-1 max-h-40 space-y-1 overflow-auto"></div>
          <div class="mt-3 flex gap-2"><select id="asr-dorm-role" class="min-w-0 flex-1 rounded-xl border border-gray-200 px-2 py-2 text-sm"><option value="dorm_monitor">ติดตามผล</option><option value="dorm_scanner">สแกนและติดตาม</option></select><button id="asr-add-dorm-staff" class="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white">เพิ่ม</button></div>
          <div id="asr-dorm-staff-list" class="mt-2 space-y-1">${(selectedDorm?.staff??[]).map(person=>`<div class="flex items-center justify-between gap-2 rounded-lg border border-gray-100 px-2 py-1.5 text-xs"><span>${esc(person.name)} · ${person.role==='dorm_scanner'?'สแกนและติดตาม':'ติดตามผล'}</span><button data-remove-dorm-staff="${esc(person.profile_id)}" data-role="${esc(person.role)}" class="text-red-500">ถอนสิทธิ์</button></div>`).join('')}</div>
        </div>
        <div><label for="asr-dorm-search" class="text-xs font-semibold text-gray-600">ค้นหานักเรียนหญิงแล้วเลือกสมาชิกหอ</label><div class="mt-1 grid gap-2 sm:grid-cols-[minmax(0,1fr)_190px]"><input id="asr-dorm-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อ รหัส หรือสี" class="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><select id="asr-dorm-room" aria-label="กรองนักเรียนหอตามห้อง" class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${roomOptions(femaleStudents,'ทุกห้อง')}</select></div><p id="asr-dorm-selection-count" class="mt-2 text-xs text-gray-500">เลือกแล้ว ${(selectedDorm?.student_ids??[]).length} คน</p><div id="asr-dorm-search-results" class="mt-2 max-h-64 space-y-1 overflow-auto"></div><button id="asr-save-dorm-roster" class="mt-2 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white">บันทึกรายชื่อหอนี้</button></div>
      </div>
    </section>
    </section>` : ''}

    ${canAdmin ? `<section data-asr-manager-panel="viewers" class="hidden space-y-5"><section class="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-5"><h2 class="font-bold text-gray-800">📊 ผู้ติดตามภาพรวม</h2><p class="mt-1 text-xs text-gray-500">มอบสิทธิ์ดูแดชบอร์ดภาพรวมแก่นักบริหารหรือฝ่ายปกครองที่เลือก</p><label for="asr-viewer-search" class="mt-3 block text-xs font-semibold text-gray-600">ค้นหาครู/ผู้ดูแล</label><input id="asr-viewer-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อ รหัส หรือฝ่าย" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><p id="asr-viewer-selected" class="mt-2 text-xs text-gray-500"></p><div id="asr-viewer-results" class="mt-2 grid max-h-64 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2"></div><button id="asr-save-report-viewers" class="mt-3 rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white">บันทึกผู้ติดตามภาพรวม</button></section>
    ${data.audit?.length ? `<details class="rounded-2xl border border-gray-200 bg-white p-4"><summary class="cursor-pointer text-sm font-bold text-gray-700">ประวัติการตั้งค่าและมอบหมายสิทธิ์ล่าสุด</summary><div class="mt-3 space-y-2">${data.audit.map(row=>`<div class="border-t border-gray-100 pt-2 text-xs"><b>${esc(row.actor||'ผู้ใช้')}</b> · ${esc(row.action)}<span class="ml-2 text-gray-400">${new Date(row.created_at).toLocaleString('th-TH',{timeZone:'Asia/Bangkok'})}</span></div>`).join('')}</div></details>` : ''}</section>` : ''}
  </div>`
}

function bindManager(root, data, access, reload) {
  const canAdmin = !!access.is_admin
  const m6Candidates = data.m6_candidates ?? []
  const delegateCandidates = data.delegate_candidates ?? m6Candidates
  const femaleStudents = data.female_students ?? []
  const teachers = data.teachers ?? []
  const viewers = data.report_viewers ?? []
  const delegates = data.delegates ?? []
  const colorScanners = data.color_scanners ?? []
  const dorms = data.dorms ?? []
  const managerTabButtons=[...root.querySelectorAll('[data-asr-manager-tab]')]
  const showManagerTab=tab=>{
    root.querySelectorAll('[data-asr-manager-panel]').forEach(panel=>panel.classList.toggle('hidden',panel.dataset.asrManagerPanel!==tab))
    managerTabButtons.forEach(button=>{const active=button.dataset.asrManagerTab===tab;button.className=`shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold ${active?'bg-indigo-600 text-white':'text-gray-600 hover:bg-gray-50'}`})
  }
  managerTabButtons.forEach(button=>button.addEventListener('click',()=>showManagerTab(button.dataset.asrManagerTab)))
  showManagerTab('schedule')
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

  const delegatePicker=bindSearchChecklist(root,{inputId:'asr-delegate-search',resultsId:'asr-delegate-results',selectedId:'asr-delegate-selected',filterId:'asr-delegate-room',name:'asr-delegate',items:delegateCandidates,initialIds:delegates.map(x=>x.student_id),label:x=>`${x.full_name} · ${x.main_room}`,searchFields:['full_name','student_code','main_room']})
  root.querySelector('#asr-save-delegates')?.addEventListener('click',async event=>{
    const ids=[...delegatePicker.selected].map(Number)
    event.currentTarget.disabled=true
    try { await call('asr_prayer_set_delegates',{p_student_ids:ids}); showToast(`บันทึกนักเรียนตัวแทน ${ids.length} คนแล้ว`,'success'); await reload() }
    catch(error){showToast(getFriendlyErrorMessage(error),'error')} finally{event.currentTarget.disabled=false}
  })

  const colorSelect=root.querySelector('#asr-color-select')
  const colorPicker=bindSearchChecklist(root,{inputId:'asr-color-search',resultsId:'asr-color-candidates',selectedId:'asr-color-selected',filterId:'asr-color-room',name:'asr-color-scanner',items:[],initialIds:[],label:x=>`${x.full_name} · ${x.main_room}`,searchFields:['full_name','student_code','main_room']})
  const drawColorCandidates=()=>{
    const color=colorSelect?.value
    const assigned=colorScanners.filter(row=>row.scope_value===color).map(row=>row.student_id)
    const list=m6Candidates.filter(row=>row.house_color===color)
    colorPicker.reset(list,assigned)
  }
  drawColorCandidates()
  colorSelect?.addEventListener('change',drawColorCandidates)
  root.querySelector('#asr-save-color-scanners')?.addEventListener('click',async event=>{
    const ids=[...colorPicker.selected].map(Number)
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
  let currentDorm=()=>dorms.find(d=>String(d.id)===String(dormSelect?.value))
  const dormPicker=bindSearchChecklist(root,{inputId:'asr-dorm-search',resultsId:'asr-dorm-search-results',selectedId:'asr-dorm-selection-count',filterId:'asr-dorm-room',name:'asr-dorm-student',items:femaleStudents,initialIds:currentDorm()?.student_ids??[],label:s=>`${s.full_name} · ${s.main_room} · ${s.house_color||'ไม่ระบุสี'}`,searchFields:['full_name','student_code','main_room','house_color'],limit:80,emptyText:'พิมพ์ชื่อ รหัส หรือเลือกห้องเพื่อค้นหานักเรียนหญิง'})
  dormSelect?.addEventListener('change',()=>{const dorm=currentDorm();dormPicker.reset(femaleStudents,dorm?.student_ids??[]);const count=root.querySelector('#asr-dorm-current-count');if(count)count.textContent=`สมาชิกหอนี้ ${(dorm?.student_ids??[]).length} คน`})
  root.querySelector('#asr-save-dorm-roster')?.addEventListener('click',async event=>{
    const dorm=currentDorm();if(!dorm)return showToast('กรุณาเพิ่มและเลือกหอพักก่อน','warning')
    event.currentTarget.disabled=true
    try{const ids=[...dormPicker.selected].map(Number);await call('asr_prayer_replace_dorm_roster',{p_dorm_id:dorm.id,p_student_ids:ids});showToast(`บันทึกรายชื่อหอ ${dorm.name} ${ids.length} คนแล้ว`,'success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}finally{event.currentTarget.disabled=false}
  })

  let selectedStaff=null
  const staffSearch=root.querySelector('#asr-dorm-staff-search')
  const staffResults=root.querySelector('#asr-dorm-staff-results')
  const drawStaffResults=()=>{
    if(!staffResults)return
    const query=staffSearch?.value.trim().toLocaleLowerCase()??''
    if(!query){staffResults.innerHTML='<p class="p-3 text-xs text-gray-500">พิมพ์ชื่อ รหัส หรือฝ่าย เพื่อค้นหาครู</p>';return}
    const matches=teachers.filter(t=>[t.full_name,t.teacher_code,t.dept].some(v=>String(v??'').toLocaleLowerCase().includes(query))).slice(0,40)
    staffResults.innerHTML=matches.length?matches.map(t=>`<button type="button" data-asr-staff-id="${esc(t.profile_id)}" class="block w-full rounded-lg border border-gray-100 px-3 py-2 text-left text-sm hover:bg-indigo-50"><b class="text-gray-800">${esc(t.full_name)}</b><span class="ml-2 text-xs text-gray-500">${esc(t.teacher_code)} · ${esc(t.dept||'ครู')}</span></button>`).join(''):'<p class="p-3 text-xs text-gray-500">ไม่พบรายชื่อ ลองค้นด้วยชื่อ รหัส หรือฝ่าย</p>'
  }
  staffSearch?.addEventListener('input',drawStaffResults)
  staffResults?.addEventListener('click',event=>{
    const button=event.target.closest('[data-asr-staff-id]');if(!button)return
    selectedStaff=teachers.find(t=>String(t.profile_id)===button.dataset.asrStaffId)||null
    root.querySelector('#asr-dorm-staff').value=selectedStaff?.profile_id??''
    root.querySelector('#asr-dorm-staff-selected').textContent=selectedStaff?`เลือกแล้ว: ${selectedStaff.full_name} · ${selectedStaff.teacher_code}`:'ยังไม่ได้เลือกครู'
    staffSearch.value='';drawStaffResults()
  })
  drawStaffResults()
  root.querySelector('#asr-add-dorm-staff')?.addEventListener('click',async event=>{
    const profileId=selectedStaff?.profile_id;const dorm=currentDorm();const role=root.querySelector('#asr-dorm-role')?.value
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
  const viewerPicker=bindSearchChecklist(root,{inputId:'asr-viewer-search',resultsId:'asr-viewer-results',selectedId:'asr-viewer-selected',name:'asr-report-viewer',items:teachers,initialIds:viewers.map(x=>x.profile_id),value:x=>x.profile_id,label:x=>`${x.full_name} · ${x.dept||'ครู'}`,searchFields:['full_name','teacher_code','dept']})
  root.querySelector('#asr-save-report-viewers')?.addEventListener('click',async event=>{
    const ids=[...viewerPicker.selected]
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
  let access, data=null, dashboard=null, selectedDate=bangkokDate(), managerLoaded=false
  let camera=null, refreshing=null, timer=null
  const cleanup=()=>{if(timer)clearInterval(timer);timer=null;if(camera){camera.stop().catch(()=>{});camera.clear().catch(()=>{});camera=null}if(window._activePrayerScannerState?.asrMode)window._activePrayerScannerState=null}
  window._activeAsrPrayerCleanup=cleanup
  const load=async()=>{
    access=await call('asr_prayer_my_access')
    const roles=accessRoles(access)
    const canManage=!!access.can_manage
    const canDashboard=access.is_admin||access.can_view_all||roles.some(row=>['color_scanner','dorm_scanner','dorm_monitor'].includes(row.role))
    dashboard=canDashboard?await call('asr_prayer_dashboard',{p_check_date:selectedDate}):null
    if(!canManage&&!canDashboard)throw new Error('คุณยังไม่ได้รับมอบหมายสิทธิ์ใช้งานระบบติดตามละหมาดอัซรี')
  }
  const loadManagerData=async()=>{
    const [adminData,delegateCandidates]=await Promise.all([
      call('asr_prayer_admin_data'),
      access.is_admin?call('asr_prayer_delegate_candidates'):Promise.resolve(null),
    ])
    data=adminData
    if(access.is_admin)data.delegate_candidates=delegateCandidates
    managerLoaded=true
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
  const headerBack=onBack?'<button id="asr-back" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600">← กลับ</button>':''
  root.innerHTML=`<div class="mx-auto max-w-6xl space-y-4 animate-fade">
    <header class="flex flex-wrap items-center justify-between gap-3"><div><p class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">ระบบติดตามระยะเริ่มต้น · นักเรียนหญิง</p><h1 class="text-xl font-extrabold text-gray-800 sm:text-2xl">🕌 ติดตามละหมาดอัซรี</h1></div>${headerBack}</header>
    <div class="grid grid-cols-2 gap-2 rounded-2xl border border-gray-100 bg-white p-3 text-center shadow-sm sm:grid-cols-4"><div><p class="text-[10px] font-semibold text-gray-400">รอบ 1 · ไปกลับ</p><p class="mt-1 font-mono text-sm font-bold text-emerald-700">${timeLabel(access.settings?.commuter_scan_start)}–${timeLabel(access.settings?.commuter_scan_end)}</p><p class="text-[10px] text-gray-400">เริ่มละหมาด ${timeLabel(access.settings?.commuter_scan_end)}</p></div><div><p class="text-[10px] font-semibold text-gray-400">รอบ 2 · หอพัก</p><p class="mt-1 font-mono text-sm font-bold text-indigo-700">${timeLabel(access.settings?.dorm_scan_start)}–${timeLabel(access.settings?.dorm_scan_end)}</p><p class="text-[10px] text-gray-400">เริ่มละหมาด ${timeLabel(access.settings?.dorm_scan_end)}</p></div><div><p class="text-[10px] font-semibold text-gray-400">ขอบเขตของฉัน</p><p class="mt-1 text-sm font-bold text-gray-700">${access.is_admin||access.can_view_all?'ภาพรวมทั้งหมด':roles.filter(r=>r.role!=='delegate').map(r=>r.scope_value).join(', ')||'จัดการสิทธิ์'}</p></div><div><p class="text-[10px] font-semibold text-gray-400">บันทึกลง</p><p class="mt-1 text-sm font-bold text-gray-700">ตารางอัซรีแยก</p></div></div>
    <nav class="flex flex-wrap gap-2">${canDashboard?'<button data-asr-tab="dashboard" class="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white">📊 ติดตามผล</button>':''}${scanner?'<button data-asr-tab="scanner" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600">📷 สแกน</button>':''}${canManage?'<button data-asr-tab="manager" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600">⚙️ ตั้งค่าและมอบสิทธิ์</button>':''}</nav>
    ${canDashboard?`<section id="asr-dashboard-panel" class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white p-3"><label class="text-xs font-semibold text-gray-600">เลือกวันที่ <input id="asr-dashboard-date" type="date" value="${esc(selectedDate)}" max="${bangkokDate()}" class="ml-1 rounded-lg border border-gray-200 px-2 py-1.5"></label><button id="asr-dashboard-refresh" class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600">รีเฟรช</button></div><p id="asr-dashboard-date-label" class="text-[10px] text-amber-700"></p><div id="asr-dashboard-content"></div></section>`:''}
    ${scanner?`<section id="asr-scanner-panel" class="hidden">${scanner}</section>`:''}
    ${canManage?'<section id="asr-manager-panel" class="hidden"></section>':''}
  </div>`
  root.querySelector('#asr-back')?.addEventListener('click',()=>{cleanup();onBack?.()})
  drawDashboard()
  root.querySelector('#asr-dashboard-content')?.addEventListener('click',async event=>{
    const card=event.target.closest('[data-asr-open-group]')
    if(!card)return
    const group=dashboard?.groups?.[Number(card.dataset.asrOpenGroup)]
    const modal=renderGroupModal(group)
    if(!modal)return
    try {
      const students=await call('asr_prayer_dashboard_students',{p_check_date:selectedDate,p_round_key:group.round,p_scope_value:group.scope_value})
      const body=modal.querySelector('[data-asr-detail-body]')
      if(body&&modal.isConnected)body.innerHTML=renderGroupStudentRows(students??[])
    } catch(error) {
      const body=modal.querySelector('[data-asr-detail-body]')
      if(body&&modal.isConnected)body.innerHTML='<tr><td colspan="5" class="p-10 text-center text-red-600">โหลดรายชื่อไม่สำเร็จ กรุณาปิดแล้วลองเปิดใหม่</td></tr>'
      showToast(getFriendlyErrorMessage(error),'error')
    }
  })
  const showTab=tab=>{
    root.querySelector('#asr-dashboard-panel')?.classList.toggle('hidden',tab!=='dashboard')
    root.querySelector('#asr-scanner-panel')?.classList.toggle('hidden',tab!=='scanner')
    root.querySelector('#asr-manager-panel')?.classList.toggle('hidden',tab!=='manager')
    root.querySelectorAll('[data-asr-tab]').forEach(button=>{const active=button.dataset.asrTab===tab;button.className=`rounded-xl px-3 py-2 text-xs font-bold ${active?'bg-emerald-600 text-white':'border border-gray-200 bg-white text-gray-600'}`})
  }
  const reload=async()=>{
    await loadManagerData()
    const panel=root.querySelector('#asr-manager-panel')
    if(panel)panel.innerHTML=renderManager(data,access)
    bindManager(root,data,access,reload)
    if(canDashboard)await fetchDashboard()
  }
  const openTab=async tab=>{
    showTab(tab)
    if(tab!=='manager'||!canManage||managerLoaded)return
    const panel=root.querySelector('#asr-manager-panel')
    if(!panel)return
    panel.innerHTML='<div class="rounded-2xl border border-gray-100 bg-white p-8 text-center text-sm text-gray-400">กำลังโหลดข้อมูลสำหรับตั้งค่า…</div>'
    try{await loadManagerData();panel.innerHTML=renderManager(data,access);bindManager(root,data,access,reload)}
    catch(error){panel.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-5 text-sm text-red-700">โหลดข้อมูลตั้งค่าไม่สำเร็จ: ${esc(getFriendlyErrorMessage(error))}<button type="button" data-asr-manager-retry class="ml-3 rounded-lg bg-white px-3 py-1.5 font-semibold">ลองอีกครั้ง</button></div>`;panel.querySelector('[data-asr-manager-retry]')?.addEventListener('click',()=>{managerLoaded=false;openTab('manager')})}
  }
  root.querySelectorAll('[data-asr-tab]').forEach(button=>button.addEventListener('click',()=>openTab(button.dataset.asrTab)))
  openTab(scanner?'scanner':canDashboard?'dashboard':'manager')
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
