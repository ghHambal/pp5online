import { supabase } from './supabase.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'
import { startPrayerCamera } from './prayer-camera.js?v=10.22.1148'

const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]))
const bangkokDate = () => new Intl.DateTimeFormat('en-CA', { timeZone:'Asia/Bangkok', year:'numeric', month:'2-digit', day:'2-digit' }).format(new Date())
const call = async (name, args = {}) => {
  const { data, error } = await supabase.rpc(name, args)
  if (error) throw error
  return data
}
const timeLabel = value => String(value ?? '').slice(0, 5)
const weekdayLabels = ['วันอาทิตย์','วันจันทร์','วันอังคาร','วันพุธ','วันพฤหัสบดี']
const accessRoles = access => access?.assignments ?? []

export async function getAsrPrayerAccess() {
  try { return await call('asr_prayer_my_access') } catch { return null }
}

function progressCard(group, index, periodKey = 'day') {
  const pct = Math.max(0, Math.min(100, Number(group.percent) || 0))
  const color = group.round === 'commuter'
  const title = color ? `สี${group.scope_value}` : group.scope_value
  const countUnit = periodKey === 'day' ? 'คน' : 'ครั้ง'
  return `<button type="button" data-asr-open-group="${index}" aria-label="ดูรายชื่อนักเรียน ${esc(title)} บันทึกแล้ว ${group.scanned} จาก ${group.eligible} ${countUnit}" class="group w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:p-5">
    <div class="flex items-center gap-4 sm:gap-5">
      <div class="grid h-24 w-24 shrink-0 place-items-center rounded-full sm:h-28 sm:w-28" role="img" aria-label="สแกนแล้ว ${pct}%" style="background:conic-gradient(#10b981 ${pct}%,#e5e7eb ${pct}% 100%)">
        <div class="grid h-[72px] w-[72px] place-items-center rounded-full bg-white sm:h-[84px] sm:w-[84px]"><div class="text-center"><b class="text-xl font-extrabold text-emerald-700 sm:text-2xl">${pct}%</b><span class="block text-[10px] text-gray-500">บันทึกแล้ว</span></div></div>
      </div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center justify-between gap-2"><div><p class="text-xs font-semibold text-gray-400">${color ? 'รอบไปกลับ' : 'รอบหอพัก'}</p><h3 class="truncate text-lg font-extrabold text-gray-800">${esc(title)}</h3></div><span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">${pct}%</span></div>
        <p class="mt-2 text-sm text-gray-600">บันทึกแล้ว <b>${group.scanned}</b> / ${group.eligible} ${countUnit}</p>
        <div class="mt-2 h-3 overflow-hidden rounded-full bg-gray-100" aria-hidden="true"><div class="h-full rounded-full bg-emerald-500 transition-all" style="width:${pct}%"></div></div>
        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs"><span class="font-semibold text-emerald-700">บันทึกแล้ว ${group.scanned}</span><span class="text-gray-500">ยังไม่มีรายการ ${group.pending}</span>${group.mismatches?`<span class="font-semibold text-amber-700">ต้องตรวจสอบ ${group.mismatches}</span>`:''}</div>
        <p class="mt-3 text-xs font-semibold text-indigo-600 group-hover:text-indigo-800">คลิกดูรายชื่อนักเรียน →</p>
      </div>
    </div>
  </button>`
}

function optionList(values = [], selected = '', allLabel = 'ทั้งหมด') {
  return `<option value="">${esc(allLabel)}</option>${values.map(value=>`<option value="${esc(value)}" ${value===selected?'selected':''}>${esc(value)}</option>`).join('')}`
}

function studentPhoto(student, size = 'h-12 w-10') {
  const initials = String(student.full_name ?? '?').trim().slice(0,1) || '?'
  return student.image_url
    ? `<img src="${esc(student.image_url)}" alt="รูปนักเรียน ${esc(student.full_name)}" loading="lazy" class="${size} shrink-0 rounded-lg border border-gray-200 bg-gray-50 object-cover object-top">`
    : `<span aria-label="ไม่มีรูปนักเรียน" class="${size} grid shrink-0 place-items-center rounded-lg bg-emerald-50 text-sm font-bold text-emerald-700">${esc(initials)}</span>`
}

function renderFollowup(students = [], total = 0) {
  const rows = students.map((student,index)=>`<article class="flex min-w-0 items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
    ${studentPhoto(student)}
    <div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-x-2"><b class="truncate text-sm text-gray-800">${esc(student.full_name)}</b><span class="text-xs text-gray-500">${esc(student.student_code)}</span></div>
      <p class="mt-0.5 truncate text-xs text-gray-500">${esc(student.main_room||'ไม่ระบุห้อง')} · สี${esc(student.house_color||'ไม่ระบุ')} · ${esc(student.dorm_name||'รอบไปกลับ')}</p>
      <p class="mt-1 text-xs"><span class="font-semibold text-rose-700">ขาดสแกน ${student.missing_days} วัน</span>${student.mismatch_days?`<span class="ml-2 font-semibold text-amber-700">ข้อมูลไม่ตรง ${student.mismatch_days} วัน</span>`:''}</p>
    </div>
    <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-rose-50 text-xs font-extrabold text-rose-700">${index+1}</span>
  </article>`).join('')
  return `<section class="space-y-3" aria-labelledby="asr-followup-title"><div class="flex flex-wrap items-end justify-between gap-2"><div><h2 id="asr-followup-title" class="text-base font-extrabold text-gray-800">นักเรียนที่ควรติดตาม</h2><p class="mt-1 text-xs text-gray-500">เรียงจากจำนวนวันที่ขาดบันทึกและรายการที่ขอบเขตไม่ตรง · แสดง ${students.length} จาก ${total} คน</p></div></div>
    ${rows?`<div class="grid grid-cols-1 gap-2 lg:grid-cols-2">${rows}</div>`:'<div class="rounded-xl border border-dashed border-gray-300 bg-white p-7 text-center text-sm text-gray-500">ยังไม่มีรายการที่ต้องติดตามในช่วงนี้</div>'}
    ${total>students.length?'<p class="text-center text-xs text-gray-500">รายการจัดอันดับแสดง 100 คนแรก · ใช้ตัวกรองห้อง สี หรือหอพักเพื่อเจาะจงกลุ่ม</p>':''}
    <p class="text-xs text-gray-500">“ขาดสแกน” หมายถึงยังไม่มีบันทึกในระบบ และไม่ได้ยืนยันว่าขาดการละหมาด</p>
  </section>`
}

function progressHtml(data = {}, periodKey = 'day', filters = {}) {
  const groups = data.groups ?? []
  const followup = data.followup ?? []
  const followupTotal = Number(data.followup_total) || 0
  const filtersHtml = `<section class="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"><h2 class="mb-2 text-sm font-bold text-gray-700">กรองภาพรวมและรายชื่อนักเรียน</h2><div class="grid grid-cols-1 gap-2 sm:grid-cols-3" role="group" aria-label="ตัวกรองห้อง สี และหอพัก"><label class="text-xs font-semibold text-gray-600">ห้อง<select data-asr-filter="room" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">${optionList(data.filter_options?.rooms,filters.room,'ทุกห้อง')}</select></label><label class="text-xs font-semibold text-gray-600">สี<select data-asr-filter="color" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">${optionList(data.filter_options?.colors,filters.color,'ทุกสี')}</select></label><label class="text-xs font-semibold text-gray-600">หอพัก<select data-asr-filter="dorm" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">${optionList(data.filter_options?.dorms,filters.dorm,'ทุกหอพัก')}</select></label></div></section>`
  const colors = groups.filter(group => group.round === 'commuter' && group.scope_type === 'color' && group.scope_value && !['#N/A','ยังไม่ระบุสี'].includes(group.scope_value.trim()))
  const dorms = groups.filter(group => group.round === 'dorm' && group.scope_type === 'dorm' && group.scope_value)
  const renderGrid = (items, empty) => items.length
    ? `<div class="grid grid-cols-1 gap-4 md:grid-cols-2">${items.map(group=>progressCard(group,groups.indexOf(group),periodKey)).join('')}</div>`
    : `<div class="rounded-2xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-400">${empty}</div>`
  return `<div class="space-y-7">
    <section class="grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-xl bg-white p-3"><p class="text-xs text-gray-500">วันตามรอบ</p><b class="text-lg text-gray-800">${data.school_days??0}</b><p class="text-[10px] text-gray-500">อาทิตย์–พฤหัสฯ</p></div><div class="rounded-xl bg-white p-3"><p class="text-xs text-gray-500">นักเรียนที่ควรติดตาม</p><b class="text-lg text-rose-700">${followupTotal}</b><p class="text-[10px] text-gray-500">ในขอบเขตตัวกรอง</p></div><div class="rounded-xl bg-white p-3"><p class="text-xs text-gray-500">ช่วงข้อมูล</p><b class="text-sm text-gray-800">${esc(data.start_date||'—')} – ${esc(data.end_date||'—')}</b></div><div class="rounded-xl bg-white p-3"><p class="text-xs text-gray-500">ระบบเริ่มเก็บข้อมูล</p><b class="text-sm text-gray-800">${esc(data.tracking_started_on||'—')}</b></div></section>
    ${filtersHtml}
    <section><div class="mb-3"><h2 class="text-base font-extrabold text-gray-800">🎨 ความคืบหน้ารอบไปกลับตามสี</h2><p class="mt-1 text-xs text-gray-500">แตะการ์ดเพื่อเปิดรายชื่อนักเรียนของสีนั้น</p></div>${renderGrid(colors,'ยังไม่มีข้อมูลสีที่เข้าเงื่อนไข')}</section>
    <section><div class="mb-3"><h2 class="text-base font-extrabold text-gray-800">🏠 ความคืบหน้ารอบหอพัก</h2><p class="mt-1 text-xs text-gray-500">แยกตามชื่อหอที่แอดมินกำหนด แตะการ์ดเพื่อเปิดรายชื่อ</p></div>${renderGrid(dorms,'ยังไม่มีหอพักที่จัดกลุ่มนักเรียนไว้')}</section>
  </div>`
}

function followupPanelHtml(data = {}, filters = {}) {
  const followup = data.followup ?? []
  const total = Number(data.followup_total) || 0
  const options = data.filter_options ?? {}
  return `<div class="space-y-4">
    <section class="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm sm:p-5"><div><h2 class="text-lg font-extrabold text-gray-800">นักเรียนที่ควรติดตาม</h2><p class="mt-1 text-sm text-gray-500">เรียงตามจำนวนวันที่ขาดบันทึกและรายการที่ขอบเขตไม่ตรง ในช่วง ${esc(data.start_date||'—')} ถึง ${esc(data.end_date||'—')}</p></div>
      <div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3" role="group" aria-label="กรองรายชื่อนักเรียน"><label class="text-xs font-semibold text-gray-600">ห้อง<select data-asr-followup-filter="room" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm">${optionList(options.rooms,filters.room,'ทุกห้อง')}</select></label><label class="text-xs font-semibold text-gray-600">สี<select data-asr-followup-filter="color" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm">${optionList(options.colors,filters.color,'ทุกสี')}</select></label><label class="text-xs font-semibold text-gray-600">หอพัก<select data-asr-followup-filter="dorm" class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm">${optionList(options.dorms,filters.dorm,'ทุกหอพัก')}</select></label></div>
    </section>${renderFollowup(followup,total)}</div>`
}

function renderGroupStudentRows(students = []) {
  return students.map((student,index) => `<tr class="${index%2?'bg-gray-50':'bg-white'} border-t border-gray-100">
    <td class="whitespace-nowrap px-4 py-3 text-xs text-gray-400">${index+1}</td>
    <td class="px-4 py-3"><div class="flex items-center gap-2">${studentPhoto(student,'h-11 w-9')}<div><b class="block text-sm text-gray-800">${esc(student.full_name)}</b><span class="text-xs text-gray-500">${esc(student.student_code)}</span></div></div></td>
    <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-600">${esc(student.main_room || '—')}</td>
    <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-600">${esc(student.house_color||'—')}</td>
    <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-600">${esc(student.dorm_name||'—')}</td>
    <td class="whitespace-nowrap px-4 py-3 text-sm text-emerald-700">${student.scanned_days??(student.scanned?1:0)} / ${student.expected_days??1}</td>
    <td class="whitespace-nowrap px-4 py-3 text-sm font-semibold ${student.missing_days?'text-rose-700':'text-gray-500'}">${student.missing_days??(student.scanned?0:1)}</td>
    <td class="whitespace-nowrap px-4 py-3 text-sm font-semibold ${student.mismatch_days?'text-amber-700':'text-gray-500'}">${student.mismatch_days??0}</td>
  </tr>`).join('') || '<tr><td colspan="8" class="p-10 text-center text-gray-400">ไม่มีรายชื่อ</td></tr>'
}

function renderGroupModal(group, periodKey = 'day', periodLabel = '') {
  if (!group) return null
  const isColor = group.round === 'commuter'
  const title = isColor ? `สี${group.scope_value}` : group.scope_value
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[100] overflow-y-auto bg-slate-950/60 p-0 sm:p-4'
  modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true'); modal.setAttribute('aria-labelledby','asr-detail-title')
  modal.innerHTML = `<div class="flex min-h-screen flex-col bg-white shadow-2xl sm:mx-auto sm:min-h-[calc(100vh-2rem)] sm:max-w-6xl sm:rounded-2xl">
    <header class="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-4 sm:px-6"><div class="min-w-0"><p class="text-xs font-semibold text-emerald-700">${isColor?'รอบไปกลับ':'รอบหอพัก'} · ${esc(title)} · ${esc(periodLabel)}</p><h2 id="asr-detail-title" class="text-lg font-extrabold text-gray-900 sm:text-xl">รายชื่อนักเรียน · ${esc(group.student_count??group.eligible)} คน</h2></div><button type="button" data-asr-close-modal aria-label="ปิดหน้ารายชื่อ" class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gray-200 text-xl text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500">×</button></header>
    <div class="flex flex-wrap items-center gap-3 border-b border-gray-100 bg-gray-50 px-4 py-3 text-sm sm:px-6"><span class="font-bold text-emerald-700">บันทึกแล้ว ${group.scanned} ครั้ง</span><span class="text-gray-500">ยังไม่มีรายการ ${group.pending} ครั้ง</span>${group.mismatches?`<span class="font-semibold text-amber-700">ข้อมูลไม่ตรง ${group.mismatches} ครั้ง</span>`:''}<span class="ml-auto text-gray-500">ความคืบหน้า ${group.percent}%</span></div>
    <div class="flex-1 overflow-auto"><table class="w-full min-w-[900px] border-collapse text-left"><thead class="sticky top-0 bg-white text-xs font-bold text-gray-500 shadow-sm"><tr><th class="px-4 py-3">ลำดับ</th><th class="px-4 py-3">นักเรียน</th><th class="px-4 py-3">ห้อง</th><th class="px-4 py-3">สี</th><th class="px-4 py-3">หอพัก</th><th class="px-4 py-3">บันทึก / วัน</th><th class="px-4 py-3">ขาดสแกน</th><th class="px-4 py-3">ข้อมูลไม่ตรง</th></tr></thead><tbody data-asr-detail-body><tr><td colspan="8" class="p-10 text-center text-gray-400">กำลังโหลดรายชื่อ…</td></tr></tbody></table></div>
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
  const scheduleData = data.schedule_data ?? {}
  const scheduleColors = scheduleData.colors ?? []
  const scheduleScanners = scheduleData.scanners ?? []
  const colorManagers = scheduleData.color_managers ?? []
  const duties = scheduleData.duties ?? []
  const dutyGroups = [...duties.reduce((map,row)=>{const key=`${row.day_of_week}|${row.house_color}`;const group=map.get(key)??{day_of_week:Number(row.day_of_week),house_color:row.house_color,people:[]};group.people.push(row);map.set(key,group);return map},new Map()).values()]
  const candidates = data.m6_candidates ?? []
  const delegateCandidates = data.delegate_candidates ?? candidates
  const delegates = data.delegates ?? []
  const colors = data.colors ?? []
  const canAdmin = !!access.is_admin
  const canManageGlobal = !!access.can_manage_global
  const dorms = data.dorms ?? []
  const femaleStudents = data.female_students ?? []
  const teachers = data.teachers ?? []
  const viewers = data.report_viewers ?? []
  const selectedDorm = dorms.find(d => d.is_active) ?? dorms[0]
  const dormStudents = selectedDorm ? femaleStudents.filter(s => (selectedDorm.student_ids ?? []).includes(s.id)) : []
  return `<div class="space-y-4">
    <nav aria-label="หมวดตั้งค่าและมอบสิทธิ์" class="sticky top-2 z-20 flex gap-2 overflow-x-auto rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-sm backdrop-blur">
      <button type="button" data-asr-manager-tab="schedule" class="shrink-0 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white">⏱️ เวลา</button>
      ${canManageGlobal?'<button type="button" data-asr-manager-tab="scanners" class="shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50">🎨 ผู้สแกนและตัวแทน</button>':''}
      ${canAdmin?'<button type="button" data-asr-manager-tab="dorms" class="shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50">🏠 หอพัก</button><button type="button" data-asr-manager-tab="viewers" class="shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50">📊 ผู้ติดตาม</button>':''}
    </nav>
    <section data-asr-manager-panel="schedule" class="space-y-5">
      ${canAdmin?`<section class="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm sm:p-5"><div class="mb-4"><h2 class="font-bold text-gray-800">📅 กำหนดช่วงเปิดใช้ระบบติดตาม</h2><p class="mt-1 text-xs text-gray-500">ระบบจะเปิดรับการสแกนและนับความคืบหน้าตั้งแต่วันเริ่มถึงวันสิ้นสุด · เว้นวันสิ้นสุดไว้หากยังไม่กำหนด</p></div><form id="asr-window-form" class="grid grid-cols-1 gap-3 sm:grid-cols-3"><label class="text-xs text-gray-600">วันเริ่มต้น<input name="start_date" type="date" value="${esc(settings.tracking_started_on||'2026-11-22')}" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"></label><label class="text-xs text-gray-600">วันสิ้นสุด<input name="end_date" type="date" value="${esc(settings.tracking_ends_on||'')}" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"></label><button class="self-end rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white">บันทึกช่วงเปิดใช้</button></form></section>`:''}
      <section class="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm sm:p-5"><div class="mb-4"><h2 class="font-bold text-gray-800">⏱️ ตั้งเวลาสแกนอัซรี</h2><p class="mt-1 text-xs text-gray-500">${canManageGlobal?'ปรับได้โดยแอดมินและนักเรียนตัวแทน':'ดูช่วงเวลาที่แอดมินและตัวแทนกำหนด'} · เวลาเริ่มละหมาดตรงกับเวลาปิดสแกนแต่ละรอบ</p></div>
      <form id="asr-schedule-form" class="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <label class="text-xs text-gray-500">รอบไปกลับ · เริ่มสแกน<input name="commuter_start" type="time" value="${timeLabel(settings.commuter_scan_start)||'16:10'}" required ${canManageGlobal?'':'disabled'} class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800 disabled:bg-gray-50"></label>
        <label class="text-xs text-gray-500">ปิดสแกน/เริ่มละหมาด<input name="commuter_end" type="time" value="${timeLabel(settings.commuter_scan_end)||'16:20'}" required ${canManageGlobal?'':'disabled'} class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800 disabled:bg-gray-50"></label>
        <label class="text-xs text-gray-500">รอบหอพัก · เริ่มสแกน<input name="dorm_start" type="time" value="${timeLabel(settings.dorm_scan_start)||'16:20'}" required ${canManageGlobal?'':'disabled'} class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800 disabled:bg-gray-50"></label>
        <label class="text-xs text-gray-500">ปิดสแกน/เริ่มละหมาด<input name="dorm_end" type="time" value="${timeLabel(settings.dorm_scan_end)||'16:30'}" required ${canManageGlobal?'':'disabled'} class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 font-mono text-sm text-gray-800 disabled:bg-gray-50"></label>
        ${canManageGlobal?'<button class="col-span-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 sm:col-span-4">บันทึกช่วงเวลา</button>':''}
      </form></section>
      <section class="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-5"><div class="mb-4"><h2 class="font-bold text-gray-800">🗓️ จัดเวรผู้สแกนประจำสี</h2><p class="mt-1 text-xs text-gray-500">กำหนดเวรซ้ำทุกสัปดาห์ แยกตามวันอาทิตย์–พฤหัสบดีและสี · จำนวนคนต่อวันแสดงตามรายชื่อที่เลือก</p></div>
        <form id="asr-duty-form" class="grid grid-cols-1 gap-3 sm:grid-cols-[180px_220px_minmax(0,1fr)]"><label class="text-xs font-semibold text-gray-600">วันที่ประจำสัปดาห์<select name="day_of_week" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${weekdayLabels.map((day,index)=>`<option value="${index}">${day}</option>`).join('')}</select></label><label class="text-xs font-semibold text-gray-600">สี<select name="color" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${scheduleColors.map(color=>`<option value="${esc(color)}">สี${esc(color)}</option>`).join('')}</select></label><div class="text-xs font-semibold text-gray-600">เลือกผู้รับผิดชอบ<select id="asr-duty-scanner-filter" aria-label="กรองผู้สแกนตามห้อง" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><option value="">ทุกห้อง</option>${roomOptions(scheduleScanners,'ทุกห้อง').replace('<option value="">ทุกห้อง</option>','')}</select></div>
          <div class="sm:col-span-3"><label for="asr-duty-search" class="block text-xs font-semibold text-gray-600">ค้นหาผู้สแกน</label><input id="asr-duty-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อนักเรียนหรือรหัส" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><p id="asr-duty-selected" class="my-2 text-xs text-gray-500"></p><div id="asr-duty-scanners" class="grid max-h-56 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2"></div><button class="mt-3 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white disabled:opacity-50">บันทึกเวร · <span data-asr-duty-count>0</span> คน</button></div>
        </form><div class="mt-5 border-t border-gray-100 pt-4"><h3 class="text-sm font-bold text-gray-700">ตารางเวรประจำสัปดาห์</h3><div id="asr-duty-list" class="mt-2 grid max-h-72 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2">${dutyGroups.map(group=>`<button type="button" data-asr-duty-edit data-weekday="${group.day_of_week}" data-color="${esc(group.house_color)}" class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-left text-xs hover:border-emerald-300"><span class="flex items-center justify-between gap-2"><b>${weekdayLabels[group.day_of_week]||'วัน'} · สี${esc(group.house_color)}</b><span class="rounded-full bg-emerald-100 px-2 py-1 font-bold text-emerald-800">${group.people.length} คน</span></span><span class="mt-1 block text-gray-600">${group.people.map(person=>esc(person.full_name)).join(' · ')}</span><span class="mt-1 block text-indigo-600">วนใช้ซ้ำทุกสัปดาห์ · คลิกเพื่อแก้ไข</span></button>`).join('')||'<p class="col-span-full rounded-xl bg-gray-50 p-4 text-center text-xs text-gray-400">ยังไม่มีการกำหนดเวร</p>'}</div><p class="mt-2 text-[11px] text-gray-400">หัวหน้าสตาฟเห็นและจัดได้เฉพาะสีที่ได้รับมอบหมาย ส่วนแอดมินเห็นและปรับได้ทุกสี</p></div>
      </section>
    </section>

    ${canManageGlobal?`<section data-asr-manager-panel="scanners" class="hidden space-y-5">
    ${canAdmin ? `<section class="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">👑 แต่งตั้งนักเรียนตัวแทน</h2><p class="mt-1 text-xs text-gray-500">ตัวแทนที่เลือกจัดการผู้สแกน ม.6 ได้ทุกสีและปรับเวลาสองรอบได้</p>
      <label for="asr-delegate-search" class="mt-3 block text-xs font-semibold text-gray-600">ค้นหานักเรียน ม.6</label><div class="mt-1 grid gap-2 sm:grid-cols-[minmax(0,1fr)_190px]"><input id="asr-delegate-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อหรือรหัส" class="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><select id="asr-delegate-room" aria-label="กรองนักเรียนตัวแทนตามห้อง" class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${roomOptions(delegateCandidates,'ทุกห้อง ม.6')}</select></div>
      <p id="asr-delegate-selected" class="mt-2 text-xs text-gray-500"></p><div id="asr-delegate-results" class="mt-2 grid max-h-64 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2"></div>
      <button id="asr-save-delegates" class="mt-3 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white">บันทึกนักเรียนตัวแทน</button>
    </section>` : ''}

    <section class="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">🎨 ผู้สแกนประจำสี · รอบไปกลับ</h2><p class="mt-1 text-xs text-gray-500">จัดการได้ทุกสี · ผู้สแกนต้องเป็นนักเรียนหญิง ม.6 ในสีที่เลือก และสแกนข้ามสีไม่ได้</p>
      <div class="mt-3 flex flex-wrap items-center gap-2"><label for="asr-color-select" class="text-xs font-semibold text-gray-500">เลือกสี</label><select id="asr-color-select" class="rounded-xl border border-gray-200 px-3 py-2 text-sm">${colors.map(color=>`<option value="${esc(color)}">สี${esc(color)}</option>`).join('')}</select></div><p id="asr-color-eligibility" class="mt-2 text-xs text-gray-500"></p>
      <label for="asr-color-search" class="mt-3 block text-xs font-semibold text-gray-600">ค้นหานักเรียนหญิง ม.6 สีที่เลือก</label><div class="mt-1 grid gap-2 sm:grid-cols-[minmax(0,1fr)_190px]"><input id="asr-color-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อหรือรหัส" class="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><select id="asr-color-room" aria-label="กรองผู้สแกนตามห้อง" class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${roomOptions(candidates,'ทุกห้อง ม.6')}</select></div>
      <p id="asr-color-selected" class="mt-2 text-xs text-gray-500"></p><div id="asr-color-candidates" class="mt-2 grid max-h-64 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2"></div>
      <button id="asr-save-color-scanners" class="mt-3 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">บันทึกผู้สแกนของสีนี้</button>
      ${canAdmin?'<div class="mt-4 border-t border-gray-100 pt-4"><h3 class="text-sm font-bold text-gray-700">👑 หัวหน้าสตาฟประจำสี</h3><p class="mt-1 text-xs text-gray-500">เลือกจากผู้สแกนที่มอบหมายไว้ในสีนี้ หัวหน้าจะจัดเวรได้เฉพาะสีของตน</p><input id="asr-color-manager-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อหรือรหัสผู้สแกน" class="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"><p id="asr-color-manager-selected" class="mt-2 text-xs text-gray-500"></p><div id="asr-color-manager-candidates" class="mt-2 grid max-h-48 grid-cols-1 gap-2 overflow-auto sm:grid-cols-2"></div><button id="asr-save-color-managers" class="mt-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white">บันทึกหัวหน้าสตาฟสีนี้</button></div>':''}
    </section>
    </section>`:''}

    ${canAdmin ? `<section data-asr-manager-panel="dorms" class="hidden space-y-5">
    <section class="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm sm:p-5">
      <h2 class="font-bold text-gray-800">🏠 จัดกลุ่มนักเรียนหญิงหอพัก</h2><p class="mt-1 text-xs text-gray-500">ระบบไม่มีช่องข้อมูลหอพักเดิม ให้แอดมินสร้างชื่อหอและจัดรายชื่อที่นี่ นักเรียนอื่นที่ไม่ได้อยู่ในทะเบียนหอจะอยู่รอบไปกลับ</p>
      <form id="asr-dorm-create-form" class="mt-3 flex flex-wrap gap-2"><input name="name" required maxlength="100" placeholder="ชื่อหอพัก เช่น หอหญิง 1" class="min-w-[220px] flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm"><button class="rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white">เพิ่มหอพัก</button></form>
      <div class="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div><label class="text-xs font-semibold text-gray-500">เลือกหอพัก</label><select id="asr-dorm-select" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm">${dorms.filter(d=>d.is_active).map(d=>`<option value="${d.id}" ${d.id===selectedDorm?.id?'selected':''}>${esc(d.name)} · ${(d.student_ids??[]).length} คน</option>`).join('')}</select>
          <p id="asr-dorm-current-count" class="mt-2 text-xs text-gray-500">สมาชิกหอนี้ ${dormStudents.length} คน</p>
          <label for="asr-dorm-staff-search" class="mt-3 block text-xs font-semibold text-gray-600">ค้นหาครู/ผู้ดูแลหอ</label><input id="asr-dorm-staff-search" type="search" autocomplete="off" placeholder="พิมพ์ชื่อ รหัส หรือฝ่าย" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><input id="asr-dorm-staff" type="hidden"><p id="asr-dorm-staff-selected" class="mt-1 text-xs text-gray-500">ยังไม่ได้เลือกครู</p><div id="asr-dorm-staff-results" class="mt-1 max-h-40 space-y-1 overflow-auto"></div>
          <div class="mt-3 flex gap-2"><select id="asr-dorm-role" class="min-w-0 flex-1 rounded-xl border border-gray-200 px-2 py-2 text-sm"><option value="dorm_monitor">ติดตามผล</option><option value="dorm_scanner">สแกนและติดตาม</option></select><button id="asr-add-dorm-staff" class="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white">เพิ่มหอนี้</button></div>
          <div class="mt-2 grid grid-cols-2 gap-2"><button id="asr-add-all-dorms" class="rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700">มอบหมายทุกหอพัก</button><button id="asr-remove-all-dorms" class="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold text-red-600">ถอนทุกหอพัก</button></div>
          <p class="mt-1 text-[11px] text-gray-400">บัญชีผู้ปกครองหอพักบัญชีเดียวเลือก “ติดตามผล” แล้วมอบหมายทุกหอพักได้ จะเห็นเฉพาะรอบหอพัก</p>
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
  const canManageGlobal = !!access.can_manage_global
  const scheduleData = data.schedule_data ?? {}
  const scheduleScanners = scheduleData.scanners ?? []
  const colorManagers = scheduleData.color_managers ?? []
  const duties = scheduleData.duties ?? []
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
  root.querySelector('#asr-window-form')?.addEventListener('submit',async event=>{
    event.preventDefault()
    const fd=new FormData(event.currentTarget),button=event.currentTarget.querySelector('button')
    button.disabled=true
    try{await call('asr_prayer_save_tracking_window',{p_start_date:fd.get('start_date'),p_end_date:fd.get('end_date')||null});showToast('บันทึกช่วงเปิดใช้ระบบแล้ว','success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}finally{button.disabled=false}
  })
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

  const dutyForm=root.querySelector('#asr-duty-form')
  const dutyWeekday=dutyForm?.querySelector('[name="day_of_week"]')
  const dutyColor=dutyForm?.querySelector('[name="color"]')
  const dutyCount=root.querySelector('[data-asr-duty-count]')
  const dutyPicker=bindSearchChecklist(root,{inputId:'asr-duty-search',resultsId:'asr-duty-scanners',selectedId:'asr-duty-selected',filterId:'asr-duty-scanner-filter',name:'asr-duty-scanner',items:[],initialIds:[],value:x=>x.student_id,label:x=>`${x.full_name} · สี${x.house_color}`,searchFields:['full_name','student_code','main_room','house_color'],emptyText:'ไม่มีผู้สแกนที่ได้รับมอบหมายในสีนี้'})
  const updateDutyRoster=(loadSaved=true)=>{
    const color=dutyColor?.value,day=Number(dutyWeekday?.value)
    const candidates=scheduleScanners.filter(student=>student.house_color===color)
    const ids=loadSaved?duties.filter(row=>Number(row.day_of_week)===day&&row.house_color===color).map(row=>row.student_id):[...dutyPicker.selected]
    dutyPicker.reset(candidates,ids)
    if(dutyCount)dutyCount.textContent=String(dutyPicker.selected.size)
    const submit=dutyForm?.querySelector('button[type="submit"],button:not([type])')
    if(submit)submit.disabled=!candidates.length
  }
  dutyColor?.addEventListener('change',()=>updateDutyRoster(true))
  dutyWeekday?.addEventListener('change',()=>updateDutyRoster(true))
  root.querySelector('#asr-duty-scanners')?.addEventListener('change',()=>{if(dutyCount)dutyCount.textContent=String(dutyPicker.selected.size)})
  updateDutyRoster(true)
  dutyForm?.addEventListener('submit',async event=>{
    event.preventDefault()
    const day=Number(dutyWeekday?.value),color=dutyColor?.value,ids=[...dutyPicker.selected].map(Number)
    if(!Number.isInteger(day)||day<0||day>4||!color)return showToast('เลือกวันประจำสัปดาห์และสีก่อนบันทึก','warning')
    const button=dutyForm.querySelector('button[type="submit"],button:not([type])');if(button)button.disabled=true
    try{const result=await call('asr_prayer_save_color_duty',{p_day_of_week:day,p_color:color,p_student_ids:ids});showToast(`บันทึกเวรประจำ${weekdayLabels[day]} สี${color} ${result.assigned_count} คนแล้ว`,'success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}finally{if(button)button.disabled=false}
  })
  root.querySelector('#asr-duty-list')?.addEventListener('click',event=>{
    const item=event.target.closest('[data-asr-duty-edit]');if(!item)return
    if(dutyWeekday)dutyWeekday.value=item.dataset.weekday
    if(dutyColor)dutyColor.value=item.dataset.color
    updateDutyRoster(true)
    dutyForm?.scrollIntoView({behavior:'smooth',block:'center'})
  })

  if(!canManageGlobal)return
  const delegatePicker=bindSearchChecklist(root,{inputId:'asr-delegate-search',resultsId:'asr-delegate-results',selectedId:'asr-delegate-selected',filterId:'asr-delegate-room',name:'asr-delegate',items:delegateCandidates,initialIds:delegates.map(x=>x.student_id),label:x=>`${x.full_name} · ${x.main_room}`,searchFields:['full_name','student_code','main_room']})
  root.querySelector('#asr-save-delegates')?.addEventListener('click',async event=>{
    const ids=[...delegatePicker.selected].map(Number)
    event.currentTarget.disabled=true
    try { await call('asr_prayer_set_delegates',{p_student_ids:ids}); showToast(`บันทึกนักเรียนตัวแทน ${ids.length} คนแล้ว`,'success'); await reload() }
    catch(error){showToast(getFriendlyErrorMessage(error),'error')} finally{event.currentTarget.disabled=false}
  })

  const colorSelect=root.querySelector('#asr-color-select')
  const colorPicker=bindSearchChecklist(root,{inputId:'asr-color-search',resultsId:'asr-color-candidates',selectedId:'asr-color-selected',filterId:'asr-color-room',name:'asr-color-scanner',items:[],initialIds:[],label:x=>`${x.full_name} · ${x.main_room}`,searchFields:['full_name','student_code','main_room']})
  const colorManagerPicker=canAdmin?bindSearchChecklist(root,{inputId:'asr-color-manager-search',resultsId:'asr-color-manager-candidates',selectedId:'asr-color-manager-selected',name:'asr-color-manager',items:[],initialIds:[],value:x=>x.student_id,label:x=>`${x.full_name} · ${x.main_room}`,searchFields:['full_name','student_code','main_room']}):null
  const drawColorCandidates=()=>{
    const color=colorSelect?.value
    const assigned=colorScanners.filter(row=>row.scope_value===color).map(row=>row.student_id)
    const list=m6Candidates.filter(row=>row.house_color===color)
    colorPicker.reset(list,assigned)
    colorManagerPicker?.reset(colorScanners.filter(row=>row.scope_value===color),colorManagers.filter(row=>row.scope_value===color).map(row=>row.student_id))
    const eligibility=root.querySelector('#asr-color-eligibility')
    const saveButton=root.querySelector('#asr-save-color-scanners')
    if(eligibility)eligibility.textContent=list.length?`มีนักเรียนหญิง ม.6 สี${color} ${list.length} คนที่เลือกเป็นผู้สแกนได้`:`สี${color} ยังไม่มีนักเรียนหญิง ม.6 ที่มีบัญชีผู้ใช้ จึงยังมอบหมายผู้สแกนไม่ได้`
    if(saveButton)saveButton.disabled=list.length===0
  }
  drawColorCandidates()
  colorSelect?.addEventListener('change',drawColorCandidates)
  root.querySelector('#asr-save-color-scanners')?.addEventListener('click',async event=>{
    const ids=[...colorPicker.selected].map(Number)
    event.currentTarget.disabled=true
    try { await call('asr_prayer_set_color_scanners',{p_color:colorSelect.value,p_student_ids:ids}); showToast(`บันทึกผู้สแกนสี${colorSelect.value} ${ids.length} คนแล้ว`,'success'); await reload() }
    catch(error){showToast(getFriendlyErrorMessage(error),'error')} finally{event.currentTarget.disabled=false}
  })

  root.querySelector('#asr-save-color-managers')?.addEventListener('click',async event=>{
    const ids=[...(colorManagerPicker?.selected??[])].map(Number)
    event.currentTarget.disabled=true
    try{await call('asr_prayer_set_color_managers',{p_color:colorSelect.value,p_student_ids:ids});showToast(`บันทึกหัวหน้าสตาฟสี${colorSelect.value} ${ids.length} คนแล้ว`,'success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}finally{event.currentTarget.disabled=false}
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
  root.querySelector('#asr-add-all-dorms')?.addEventListener('click',async event=>{
    const profileId=selectedStaff?.profile_id;const role=root.querySelector('#asr-dorm-role')?.value
    if(!profileId)return showToast('ค้นหาและเลือกบัญชีผู้ดูแลหอก่อน','warning')
    event.currentTarget.disabled=true
    try{const count=await call('asr_prayer_set_dorm_access_all',{p_profile_id:profileId,p_role:role,p_enabled:true});showToast(`มอบหมายสิทธิ์ให้ทุกหอพักแล้ว · ${count} หอ`,'success');await reload()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}finally{event.currentTarget.disabled=false}
  })
  root.querySelector('#asr-remove-all-dorms')?.addEventListener('click',async event=>{
    const profileId=selectedStaff?.profile_id;const role=root.querySelector('#asr-dorm-role')?.value
    if(!profileId)return showToast('ค้นหาและเลือกบัญชีผู้ดูแลหอก่อน','warning')
    event.currentTarget.disabled=true
    try{const count=await call('asr_prayer_set_dorm_access_all',{p_profile_id:profileId,p_role:role,p_enabled:false});showToast(`ถอนสิทธิ์ทุกหอพักแล้ว · ${count} หอ`,'success');await reload()}
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
      <div id="asr-scanner-view" class="relative mx-auto mb-1 flex aspect-square w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-0 shadow-inner">
        <div id="asr-camera-reader" class="h-full w-full overflow-hidden rounded-2xl"></div>
        <div class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden"><div class="absolute inset-0 bg-black/35"></div><div class="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-3xl border-2 border-white/20 bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,0.4)]"><div class="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-[3.5px] border-t-[3.5px] border-emerald-400"></div><div class="absolute right-0 top-0 h-6 w-6 rounded-tr-md border-r-[3.5px] border-t-[3.5px] border-emerald-400"></div><div class="absolute bottom-0 left-0 h-6 w-6 rounded-bl-md border-b-[3.5px] border-l-[3.5px] border-emerald-400"></div><div class="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-[3.5px] border-r-[3.5px] border-emerald-400"></div><div class="absolute top-0 h-[2.5px] w-full animate-laser-move bg-emerald-400 opacity-90 shadow-[0_0_8px_rgba(52,211,153,0.85)]"></div></div></div>
      </div>
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
  let access, data=null, dashboard=null, selectedDate=bangkokDate(), dashboardMode='day', managerLoaded=false, dashboardRequestId=0
  let reportFilters={room:'',color:'',dorm:''}, camera=null, timer=null
  const cleanup=()=>{if(timer)clearInterval(timer);timer=null;if(camera){camera.stop().catch(()=>{});camera.clear().catch(()=>{});camera=null}if(window._activePrayerScannerState?.asrMode)window._activePrayerScannerState=null}
  window._activeAsrPrayerCleanup=cleanup
  const load=async()=>{
    access=await call('asr_prayer_my_access')
    const roles=accessRoles(access)
    const canManage=!!access.can_manage
    const canDashboard=access.is_admin||access.can_view_all||access.can_view_commuter||roles.some(row=>['color_scanner','dorm_scanner','dorm_monitor'].includes(row.role))
    dashboard=canDashboard?await call(access.can_view_commuter?'asr_prayer_student_period':'asr_prayer_dashboard_period',{p_period_key:dashboardMode,p_anchor_date:selectedDate}):null
    if(!canManage&&!canDashboard)throw new Error('คุณยังไม่ได้รับมอบหมายสิทธิ์ใช้งานระบบติดตามละหมาดอัซรี')
  }
  const loadManagerData=async()=>{
    const scheduleData=await call('asr_prayer_color_schedule_data')
    if(access.can_manage_global){
      const [adminData,delegateCandidates]=await Promise.all([
        call('asr_prayer_admin_data'),
        access.is_admin?call('asr_prayer_delegate_candidates'):Promise.resolve(null),
      ])
      data=adminData
      if(access.is_admin)data.delegate_candidates=delegateCandidates
      data.colors=scheduleData.colors??data.colors??[]
    } else data={settings:scheduleData.settings,m6_candidates:[],colors:scheduleData.colors??[]}
    data.settings=scheduleData.settings??data.settings
    data.schedule_data=scheduleData
    managerLoaded=true
  }
  try{await load()}catch(error){root.innerHTML=`<div class="mx-auto max-w-xl rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center"><p class="text-3xl">🔒</p><p class="mt-2 font-bold text-gray-800">ยังไม่มีสิทธิ์ใช้งานระบบอัซรี</p><p class="mt-1 text-sm text-gray-600">${esc(getFriendlyErrorMessage(error))}</p><button id="asr-back" class="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-700">← กลับ</button></div>`;root.querySelector('#asr-back')?.addEventListener('click',()=>onBack?.());return}

  const drawDashboard=()=>{
    const wrap=root.querySelector('#asr-dashboard-content');if(wrap)wrap.innerHTML=progressHtml(dashboard??{},dashboardMode,reportFilters)
    const followupWrap=root.querySelector('#asr-followup-content');if(followupWrap)followupWrap.innerHTML=followupPanelHtml(dashboard??{},reportFilters)
    const dateText=root.querySelector('#asr-dashboard-date-label')
    if(dateText){const label=dashboardMode==='day'?'รายวัน':dashboardMode==='week'?'รายสัปดาห์ (อาทิตย์–พฤหัสฯ)':'รายเดือน';dateText.textContent=`${label} · ${dashboard?.start_date??selectedDate} ถึง ${dashboard?.end_date??selectedDate} · ช่องว่างคือการไม่มีบันทึก ไม่ใช่หลักฐานว่าขาดละหมาด`}
    const followupDate=root.querySelector('[data-asr-followup-date]');if(followupDate&&followupDate.value!==selectedDate)followupDate.value=selectedDate
    const followupLabel=root.querySelector('[data-asr-followup-period-label]');if(followupLabel)followupLabel.textContent=dateText?.textContent??''
    root.querySelectorAll('[data-asr-period]').forEach(button=>{const active=button.dataset.asrPeriod===dashboardMode;button.className=`rounded-xl px-3 py-2 text-xs font-bold ${active?'bg-emerald-600 text-white':'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'}`})
  }
  const canManage=!!access.can_manage
  const roles=accessRoles(access)
  const canDashboard=!!dashboard
  const scanner=renderScannerSection(access)
  const headerBack=onBack?'<button id="asr-back" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600">← กลับ</button>':''
  root.innerHTML=`<div class="mx-auto max-w-6xl space-y-4 animate-fade">
    <header class="flex flex-wrap items-center justify-between gap-3"><div><p class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">ระบบติดตามระยะเริ่มต้น · นักเรียนหญิง</p><h1 class="text-xl font-extrabold text-gray-800 sm:text-2xl">🕌 ติดตามละหมาดอัซรี</h1></div>${headerBack}</header>
    <div class="grid grid-cols-2 gap-2 rounded-2xl border border-gray-100 bg-white p-3 text-center shadow-sm sm:grid-cols-4"><div><p class="text-[10px] font-semibold text-gray-400">รอบ 1 · ไปกลับ</p><p class="mt-1 font-mono text-sm font-bold text-emerald-700">${timeLabel(access.settings?.commuter_scan_start)}–${timeLabel(access.settings?.commuter_scan_end)}</p><p class="text-[10px] text-gray-400">เริ่มละหมาด ${timeLabel(access.settings?.commuter_scan_end)}</p></div><div><p class="text-[10px] font-semibold text-gray-400">รอบ 2 · หอพัก</p><p class="mt-1 font-mono text-sm font-bold text-indigo-700">${timeLabel(access.settings?.dorm_scan_start)}–${timeLabel(access.settings?.dorm_scan_end)}</p><p class="text-[10px] text-gray-400">เริ่มละหมาด ${timeLabel(access.settings?.dorm_scan_end)}</p></div><div><p class="text-[10px] font-semibold text-gray-400">ขอบเขตของฉัน</p><p class="mt-1 text-sm font-bold text-gray-700">${access.is_admin||access.can_view_all?'ภาพรวมทั้งหมด':access.can_view_commuter?'ข้อมูลของฉัน · รอบไปกลับ':roles.filter(r=>r.role!=='delegate').map(r=>r.scope_value).join(', ')||'จัดการสิทธิ์'}</p></div><div><p class="text-[10px] font-semibold text-gray-400">บันทึกลง</p><p class="mt-1 text-sm font-bold text-gray-700">ตารางอัซรีแยก</p></div></div>
    <nav class="flex flex-wrap gap-2">${canDashboard?'<button data-asr-tab="dashboard" class="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white">📊 ติดตามผล</button><button data-asr-tab="followup" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600">⚠️ นักเรียนที่ควรติดตาม</button>':''}${scanner?'<button data-asr-tab="scanner" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600">📷 สแกน</button>':''}${canManage?'<button data-asr-tab="manager" class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-600">⚙️ ตั้งค่าและมอบสิทธิ์</button>':''}</nav>
    ${canDashboard?`<section id="asr-dashboard-panel" class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-3"><div class="flex flex-wrap gap-2" role="group" aria-label="เลือกระยะเวลาติดตาม"><button type="button" data-asr-period="day" class="rounded-xl px-3 py-2 text-xs font-bold">รายวัน</button><button type="button" data-asr-period="week" class="rounded-xl px-3 py-2 text-xs font-bold">รายสัปดาห์</button><button type="button" data-asr-period="month" class="rounded-xl px-3 py-2 text-xs font-bold">รายเดือน</button></div><label class="text-xs font-semibold text-gray-600">วันที่อ้างอิง <input id="asr-dashboard-date" type="date" value="${esc(selectedDate)}" max="${bangkokDate()}" class="ml-1 rounded-lg border border-gray-200 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"></label><button id="asr-dashboard-refresh" class="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600">รีเฟรช</button></div><p id="asr-dashboard-date-label" class="text-xs text-amber-700"></p><div id="asr-dashboard-content"></div></section>`:''}
    ${canDashboard?`<section id="asr-followup-panel" class="hidden space-y-3"><div class="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-3"><div class="flex flex-wrap gap-2" role="group" aria-label="เลือกระยะเวลาติดตาม"><button type="button" data-asr-period="day" class="rounded-xl px-3 py-2 text-xs font-bold">รายวัน</button><button type="button" data-asr-period="week" class="rounded-xl px-3 py-2 text-xs font-bold">รายสัปดาห์</button><button type="button" data-asr-period="month" class="rounded-xl px-3 py-2 text-xs font-bold">รายเดือน</button></div><label class="text-xs font-semibold text-gray-600">วันที่อ้างอิง <input data-asr-followup-date type="date" value="${esc(selectedDate)}" max="${bangkokDate()}" class="ml-1 rounded-lg border border-gray-200 px-2 py-1.5"></label><button data-asr-followup-refresh class="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600">รีเฟรช</button></div><p class="text-xs text-amber-700" data-asr-followup-period-label></p><div id="asr-followup-content"></div></section>`:''}
    ${scanner?`<section id="asr-scanner-panel" class="hidden">${scanner}</section>`:''}
    ${canManage?'<section id="asr-manager-panel" class="hidden"></section>':''}
  </div>`
  root.querySelector('#asr-back')?.addEventListener('click',()=>{cleanup();onBack?.()})
  drawDashboard()
  root.querySelector('#asr-dashboard-content')?.addEventListener('click',async event=>{
    const card=event.target.closest('[data-asr-open-group]')
    if(!card)return
    const group=dashboard?.groups?.[Number(card.dataset.asrOpenGroup)]
    const periodLabel=dashboardMode==='day'?'รายวัน':dashboardMode==='week'?'รายสัปดาห์':'รายเดือน'
    const modal=renderGroupModal(group,dashboardMode,periodLabel)
    if(!modal)return
    try {
      const students=await call(access.can_view_commuter?'asr_prayer_student_period_students':'asr_prayer_dashboard_period_students',access.can_view_commuter?{p_period_key:dashboardMode,p_anchor_date:selectedDate}:{p_period_key:dashboardMode,p_anchor_date:selectedDate,p_round_key:group.round,p_scope_value:group.scope_value,p_room:reportFilters.room||null,p_color:reportFilters.color||null,p_dorm:reportFilters.dorm||null})
      const body=modal.querySelector('[data-asr-detail-body]')
      if(body&&modal.isConnected)body.innerHTML=renderGroupStudentRows(students??[])
    } catch(error) {
      const body=modal.querySelector('[data-asr-detail-body]')
      if(body&&modal.isConnected)body.innerHTML='<tr><td colspan="8" class="p-10 text-center text-red-600">โหลดรายชื่อไม่สำเร็จ กรุณาปิดแล้วลองเปิดใหม่</td></tr>'
      showToast(getFriendlyErrorMessage(error),'error')
    }
  })
  root.querySelector('#asr-dashboard-content')?.addEventListener('change',event=>{
    const filter=event.target.closest('[data-asr-filter]')
    if(!filter)return
    reportFilters[filter.dataset.asrFilter]=filter.value
    fetchDashboard()
  })
  root.querySelector('#asr-followup-content')?.addEventListener('change',event=>{
    const filter=event.target.closest('[data-asr-followup-filter]')
    if(!filter)return
    reportFilters[filter.dataset.asrFollowupFilter]=filter.value
    fetchDashboard()
  })
  const showTab=tab=>{
    root.querySelector('#asr-dashboard-panel')?.classList.toggle('hidden',tab!=='dashboard')
    root.querySelector('#asr-followup-panel')?.classList.toggle('hidden',tab!=='followup')
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
    const requestId=++dashboardRequestId
    try{const nextDashboard=await call(access.can_view_commuter?'asr_prayer_student_period':'asr_prayer_dashboard_period',access.can_view_commuter?{p_period_key:dashboardMode,p_anchor_date:selectedDate}:{p_period_key:dashboardMode,p_anchor_date:selectedDate,p_room:reportFilters.room||null,p_color:reportFilters.color||null,p_dorm:reportFilters.dorm||null});if(requestId!==dashboardRequestId)return;dashboard=nextDashboard;drawDashboard()}
    catch(error){showToast(getFriendlyErrorMessage(error),'error')}
  }
  root.querySelectorAll('[data-asr-period]').forEach(button=>button.addEventListener('click',async()=>{dashboardMode=button.dataset.asrPeriod;await fetchDashboard()}))
  root.querySelector('#asr-dashboard-date')?.addEventListener('change',async event=>{selectedDate=event.target.value||bangkokDate();await fetchDashboard()})
  root.querySelector('[data-asr-followup-date]')?.addEventListener('change',async event=>{selectedDate=event.target.value||bangkokDate();const dashboardDate=root.querySelector('#asr-dashboard-date');if(dashboardDate)dashboardDate.value=selectedDate;await fetchDashboard()})
  root.querySelector('#asr-dashboard-refresh')?.addEventListener('click',fetchDashboard)
  root.querySelector('[data-asr-followup-refresh]')?.addEventListener('click',fetchDashboard)
  if(canDashboard)timer=setInterval(()=>{if(dashboardMode==='day'&&document.visibilityState==='visible')fetchDashboard()},30000)

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
    let code=String(raw??'').trim();if(!code||saving)return
    if(code.startsWith('SQ:')){const parts=code.split(':');if(parts.length!==3){showFeedback(null,new Error('รูปแบบ QR Code ไม่ถูกต้อง'));return}code=parts[1].trim()}
    saving=true
    try{const result=await call('asr_prayer_scan',{p_student_code:code});showFeedback(result,null);if(selectedDate===bangkokDate())await fetchDashboard()}
    catch(error){showFeedback(null,error)}finally{saving=false;const input=root.querySelector('#asr-student-code');if(input){input.value='';input.focus()}}
  }
  root.querySelector('#asr-code-form')?.addEventListener('submit',event=>{event.preventDefault();processCode(root.querySelector('#asr-student-code')?.value)})
  root.querySelector('#asr-camera-start')?.addEventListener('click',async event=>{
    const button=event.currentTarget;button.disabled=true;button.textContent='กำลังเปิดกล้อง…'
    try{window._activePrayerScannerState={asrMode:true,html5Qrcode:null};camera=await startPrayerCamera('asr-camera-reader',code=>processCode(code));window._activePrayerScannerState.html5Qrcode=camera;button.textContent='กล้องกำลังทำงาน';showToast('เปิดกล้องแล้ว','success')}
    catch(error){camera=null;window._activePrayerScannerState=null;button.disabled=false;button.textContent='เปิดกล้องสแกน';showToast(getFriendlyErrorMessage(error),'error')}
  })
  root.querySelector('#asr-camera-stop')?.addEventListener('click',async()=>{if(camera){await camera.stop().catch(()=>{});await camera.clear().catch(()=>{});camera=null;window._activePrayerScannerState=null}const button=root.querySelector('#asr-camera-start');if(button){button.disabled=false;button.textContent='เปิดกล้องสแกน'}})
}
