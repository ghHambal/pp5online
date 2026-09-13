const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
const button = 'px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white hover:bg-slate-50'
const input = 'block w-full mt-1 border border-slate-300 rounded-lg p-2 text-sm'
const kinds = {advisor:'ครูที่ปรึกษา',leader:'หัวหน้าห้อง',other:'ผู้แทนอื่น'}
const actions = {receive:'รับเสื้อ',issue:'เพิ่มเรื่องค้าง',resolve:'แก้ไขเรื่องค้างแล้ว',reopen:'เปิดเรื่องค้างอีกครั้ง',cancel:'ยกเลิกบันทึก'}
export const notePresets = [
 ['เสื้อไม่ครบ','เสื้อไม่ครบ ขาด ___ ตัว สี ___ ไซซ์ ___ นัดรับส่วนที่เหลือวันที่ ___'],
 ['เปลี่ยนไซซ์','ขอเปลี่ยนไซซ์จาก ___ เป็น ___ จำนวน ___ ตัว นักเรียน ___'],
 ['สีหรือไซซ์ไม่ตรง','ได้รับสี/ไซซ์ไม่ตรง: ต้องการ ___ ได้รับ ___ จำนวน ___ ตัว'],
 ['เสื้อชำรุด','เสื้อชำรุด จำนวน ___ ตัว รายละเอียด ___'],
 ['นัดรับภายหลัง','นัดรับเสื้อส่วนที่เหลือวันที่ ___ ผู้ประสานงาน ___'],
 ['อื่น ๆ','ปัญหาอื่น ๆ: ___ แนวทางติดตาม ___'],
]
export function handoffState(row) {
 const target = (row.target || []).filter(s => s.confirmed).length
 const received = (row.receipts || []).filter(r => !r.cancelled_at).reduce((n,r) => n + Number(r.quantity),0)
 return {target,received,remaining:Math.max(0,target-received),unconfirmed:(row.target || []).length-target,
  status:received === 0 ? 'pending' : received < target ? 'partial' : 'complete',
  issues:(row.issues || []).filter(i => !i.resolved_at).length,changed:received>target}
}
const labels = {pending:'ยังไม่ได้รับ',partial:'รับบางส่วน',complete:'รับครบตามยอดยืนยัน'}
const time = value => new Date(value).toLocaleString('th-TH',{timeZone:'Asia/Bangkok',dateStyle:'short',timeStyle:'short'})
export function createShirtHandoffs({root,getSnapshot,save,refresh,onChange}) {
 const panel = root.querySelector('#shirt-handoff-panel')
 let filter = 'all', query = '', recorder = '', busy = false, pending = null
 const rows = () => getSnapshot().handoff_rooms || []
 const rowOf = room => rows().find(r => r.room === room)
 const badges = row => {
  const s = handoffState(row)
  return `<span class="inline-block rounded-full px-2 py-1 text-xs ${s.status==='complete'?'bg-emerald-100 text-emerald-700':s.status==='partial'?'bg-amber-100 text-amber-800':'bg-slate-100 text-slate-600'}">${labels[s.status]} · ${s.received}/${s.target} ตัว</span> ${s.issues ? `<span class="text-xs text-red-700 bg-red-50 rounded-full px-2 py-1">เรื่องค้าง ${s.issues}</span>`:''} ${s.changed?'<span class="text-xs text-red-700">ยอดยืนยันลดลง กรุณาตรวจสอบ</span>':''}`
 }
 const roomButton = room => rowOf(room) ? `<button type="button" data-handoff-room="${esc(room)}" class="${button}">${badges(rowOf(room))} · ดู/บันทึก</button>` : ''
 function render() {
  if (!getSnapshot().handoff_event_id) {panel.innerHTML='<p class="p-5 bg-amber-50 rounded-xl">ระบบรับมอบเสื้อยังไม่พร้อมใช้งาน กรุณาลองรีเฟรชภายหลัง</p>';return}
  panel.innerHTML=`<div class="bg-white border border-slate-200 rounded-xl p-4 space-y-3"><h2 class="font-bold text-lg">📦 รับมอบเสื้อรายห้อง</h2><p class="text-sm text-slate-500">ยอดรับสะสมของทั้งห้องตามไซซ์ที่ยืนยันแล้ว รวมทุกสีและเพศ • หมายเหตุเปลี่ยนไซซ์จะไม่แก้ข้อมูลไซซ์เดิม</p><input aria-label="ค้นหาห้องรับเสื้อ" class="${input}" placeholder="ค้นหาห้อง / ครูที่ปรึกษา / ผู้รับ / หมายเหตุ" value="${esc(query)}"><div class="flex flex-wrap gap-2">${Object.entries({all:'ทั้งหมด',...labels,issues:'มีเรื่องค้าง'}).map(([key,label])=>`<button type="button" class="${button} ${filter===key?'ring-2 ring-pink-500':''}" data-handoff-filter="${key}">${label} (${rows().filter(r=>key==='all'||(key==='issues'?handoffState(r).issues>0:handoffState(r).status===key)).length})</button>`).join('')}</div><div id="handoff-room-list" class="space-y-3"></div></div>`
  const renderList=()=>{
   const list=rows().filter(r=>(filter==='all'||(filter==='issues'?handoffState(r).issues>0:handoffState(r).status===filter)) && JSON.stringify([r.room,r.receipts,r.issues,(getSnapshot().homeroom_teachers||[]).filter(t=>t.main_room===r.room)]).toLowerCase().includes(query.toLowerCase())).sort((a,b)=>a.room.localeCompare(b.room,'th',{numeric:true}))
   panel.querySelector('#handoff-room-list').innerHTML=list.map(r=>`<div class="border border-slate-200 rounded-xl p-3 flex flex-wrap justify-between gap-3 items-center"><div><b>ห้อง ${esc(r.room)}</b><p class="text-xs text-slate-500">${esc((getSnapshot().homeroom_teachers||[]).filter(t=>t.main_room===r.room).map(t=>t.teacher_name).join(' / '))}</p>${handoffState(r).unconfirmed?`<p class="text-xs text-amber-700">ยังไม่ยืนยันไซซ์ ${handoffState(r).unconfirmed} คน</p>`:''}</div>${roomButton(r.room)}</div>`).join('') || '<p class="p-4 text-slate-500">ไม่พบห้องตามเงื่อนไข</p>'
  }
  panel.querySelector('input').oninput=e=>{query=e.target.value;renderList()}
  panel.querySelectorAll('[data-handoff-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.handoffFilter;render()})
  renderList()
 }
 const dialog = document.createElement('dialog')
 dialog.className='rounded-2xl p-0 w-full max-w-3xl max-h-[90dvh] shadow-xl backdrop:bg-slate-900/40'
 document.body.append(dialog)
 dialog.addEventListener('cancel',e=>{if(busy)e.preventDefault()})
 function open(room) {
  const row = rowOf(room)
  if(!row || busy)return
  const s=handoffState(row), snap=getSnapshot()
  const totals=new Map()
  row.target.filter(t=>t.confirmed).forEach(t=>{const key=`${t.color||'ไม่ระบุสี'} / ${t.size}`;totals.set(key,(totals.get(key)||0)+1)})
  dialog.innerHTML=`<div class="p-5 space-y-4"><div class="flex justify-between gap-2"><h2 class="text-xl font-bold">รับมอบเสื้อ · ห้อง ${esc(room)}</h2><button type="button" data-close class="${button}">ปิด</button></div><div>${badges(row)}</div><p class="text-sm">นักเรียน ${row.target.length} คน · ยืนยันไซซ์ ${s.target} คน · ยังไม่ยืนยัน ${s.unconfirmed} คน · เหลือรับ ${s.remaining} ตัว</p><details><summary class="cursor-pointer text-sm font-bold">ดูยอดจัดเสื้อทั้งห้องแยกสี / ไซซ์</summary><div class="flex flex-wrap gap-2 mt-2">${[...totals].map(([key,n])=>`<span class="bg-slate-100 p-2 rounded text-xs">${esc(key)}: ${n}</span>`).join('')}</div></details>
   <form id="handoff-form" class="space-y-3 border rounded-xl p-4">
    <h3 class="font-bold">บันทึกการรับครั้งนี้</h3><label class="block text-sm">ชื่อผู้บันทึก<input name="recorder_name" class="${input}" maxlength="200" minlength="2" required value="${esc(snap.handoff_recorder||recorder)}" ${snap.handoff_recorder?'readonly':''}></label>
    <label class="block text-sm">ผู้มารับ<select name="receiver_kind" class="${input}">${Object.entries(kinds).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select></label>
    <label class="block text-sm">ชื่อผู้รับ<input name="receiver_name" class="${input}" list="handoff-names" maxlength="200" minlength="2" ${s.remaining?'required':''} placeholder="เลือกชื่อแนะนำ หรือพิมพ์เอง"></label><datalist id="handoff-names"></datalist>
    <label class="block text-sm">จำนวนที่รับครั้งนี้ (ตัว)<input name="quantity" type="number" min="1" max="${s.remaining}" step="1" class="${input}" value="${s.remaining||''}" ${s.remaining?'required':'disabled'}></label>
    <p class="text-xs text-slate-500">รับครบจะขึ้นสถานะอัตโนมัติตามยอดสะสม</p>
    <div class="flex flex-wrap gap-2">${notePresets.map(([label],i)=>`<button type="button" data-preset="${i}" class="${button}">${label}</button>`).join('')}</div>
    <label class="block text-sm">หมายเหตุ (เลือกตัวอย่างแล้วแก้ไขเพิ่มเติมได้)<textarea name="note" rows="3" maxlength="3000" class="${input}"></textarea></label>
    <div class="flex flex-wrap gap-2" id="issue-choice"><button type="button" data-issue="false" class="${button} ring-2 ring-pink-500">ไม่มีเรื่องค้าง</button><button type="button" data-issue="true" class="${button} ring-pink-500">มีเรื่องค้างให้ติดตาม</button></div>
    <div class="flex flex-wrap gap-2"><button type="submit" class="${button.replace('bg-white hover:bg-slate-50', 'bg-pink-600 hover:bg-pink-700 text-white')}" ${s.remaining?'':'disabled'}>บันทึกรับเสื้อ</button><button type="button" data-add-issue class="${button}">บันทึกเฉพาะเรื่องค้าง</button></div>
   </form>
   <p data-feedback role="status" class="text-sm text-red-700 whitespace-pre-wrap"></p><button type="button" data-refresh class="${button}">โหลดข้อมูลล่าสุด (เริ่มกรอกใหม่)</button>
   <section class="space-y-2"><h3 class="font-bold">เรื่องค้าง / ผลการแก้ไข</h3>${row.issues.map(i=>`<div class="border rounded-lg p-3 text-sm"><b>${i.resolved_at?'✅ แก้ไขแล้ว':'⚠️ รอติดตาม'}</b><p class="whitespace-pre-wrap">${esc(i.note)}</p><p class="text-xs text-slate-500">${esc(i.opened_by)} · ${time(i.opened_at)}</p>${i.resolved_at?`<p class="whitespace-pre-wrap">ผล: ${esc(i.resolution)} · ${esc(i.resolved_by)} · ${time(i.resolved_at)}</p>`:''}<button type="button" data-action="${i.resolved_at?'reopen':'resolve'}" data-item="${esc(i.id)}" class="${button} mt-2">${i.resolved_at?'เปิดเรื่องอีกครั้ง':'บันทึกผลการแก้ไข'}</button></div>`).join('')||'<p class="text-sm text-slate-500">ไม่มีเรื่องค้าง</p>'}</section>
   <section class="space-y-2"><h3 class="font-bold">ประวัติการรับเสื้อ</h3>${row.receipts.map(r=>`<div class="border rounded-lg p-3 text-sm"><b>${r.quantity} ตัว · ${esc(kinds[r.receiver_kind])} ${esc(r.receiver_name)} ${r.cancelled_at?'(ยกเลิกแล้ว)':''}</b><p class="text-xs text-slate-500">ผู้บันทึก ${esc(r.recorder_name)} · ${time(r.created_at)}</p><p class="whitespace-pre-wrap">${esc(r.note)}</p>${r.cancelled_at?`<p>เหตุผลยกเลิก: ${esc(r.cancel_reason)}</p>`:`<button type="button" data-action="cancel" data-item="${esc(r.id)}" class="${button} mt-2">ยกเลิกบันทึกนี้</button>`}</div>`).join('')||'<p class="text-sm text-slate-500">ยังไม่มีการรับเสื้อ</p>'}</section>
   <form id="handoff-action" class="hidden border rounded-xl p-4 space-y-2"><h3 data-action-title class="font-bold"></h3><label class="block text-sm">รายละเอียด / เหตุผล<textarea name="reason" required maxlength="3000" class="${input}"></textarea></label><button type="submit" class="${button}">ยืนยันบันทึก</button></form>
   <details><summary class="cursor-pointer text-sm">ประวัติการเปลี่ยนแปลง (${row.history.length})</summary>${row.history.map(h=>`<p class="text-xs py-2 border-b">${time(h.at)} · ${esc(h.name)} · ${esc(actions[h.action])} · ${esc(h.detail.note)}</p>`).join('')}</details></div>`
  if(!dialog.open)dialog.showModal()
  const form=dialog.querySelector('#handoff-form'), feedback=dialog.querySelector('[data-feedback]')
  let hasIssue=false, selectedAction=null
  const names=()=>{
   const kind=form.elements.receiver_kind.value
   const names=kind==='advisor'?(snap.homeroom_teachers||[]).filter(t=>t.main_room===room).map(t=>t.teacher_name):kind==='leader'?row.target.map(t=>t.name):[]
   dialog.querySelector('datalist').innerHTML=names.map(n=>`<option value="${esc(n)}"></option>`).join('')
  }
  names();form.elements.receiver_kind.onchange=names
  dialog.querySelector('[data-close]').onclick=()=>dialog.close()
  dialog.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>{const t=form.elements.note;t.value=[t.value.trim(),notePresets[Number(b.dataset.preset)][1]].filter(Boolean).join('\n');t.focus()})
  dialog.querySelectorAll('[data-issue]').forEach(b=>b.onclick=()=>{hasIssue=b.dataset.issue==='true';dialog.querySelectorAll('[data-issue]').forEach(x=>x.classList.toggle('ring-2',x===b))})
  const setBusy=value=>{busy=value;dialog.querySelectorAll('button,input,select,textarea').forEach(el=>{if(value){el.dataset.wasDisabled=String(el.disabled);el.disabled=true}else el.disabled=el.dataset.wasDisabled==='true'})}
  async function submit(action,data) {
   if(busy)return
   recorder=form.elements.recorder_name.value.trim()
   if(recorder.length<2){feedback.textContent='กรุณาระบุชื่อผู้บันทึก';return}
   const request={p_event:snap.handoff_event_id,p_room:room,p_action:action,p_revision:row.revision,p_target_hash:row.target_hash,p_data:{...data,recorder_name:recorder}}
   const signature=JSON.stringify(request)
   if(pending?.signature!==signature)pending={signature,id:crypto.randomUUID()}
   setBusy(true);feedback.textContent='กำลังบันทึก…'
   try {
    await save({...request,p_request_id:pending.id})
    // Keep request ID until refreshed: a retry after a lost response must be idempotent.
    await refresh();pending=null;setBusy(false);onChange();open(room)
    dialog.querySelector('[data-feedback]').textContent='บันทึกเรียบร้อยแล้ว'
   } catch(e){setBusy(false);feedback.textContent=e.message||'บันทึกไม่สำเร็จ กรุณาลองอีกครั้ง'}
  }
  form.onsubmit=e=>{e.preventDefault();submit('receive',{quantity:Number(form.elements.quantity.value),receiver_kind:form.elements.receiver_kind.value,receiver_name:form.elements.receiver_name.value.trim(),note:form.elements.note.value,has_issue:hasIssue})}
  dialog.querySelector('[data-add-issue]').onclick=()=>{if(!form.elements.note.value.trim()){feedback.textContent='กรุณาระบุรายละเอียดเรื่องค้าง';return}submit('issue',{note:form.elements.note.value})}
  dialog.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{
   selectedAction={action:b.dataset.action,id:b.dataset.item}
   const f=dialog.querySelector('#handoff-action');f.classList.remove('hidden');f.querySelector('[data-action-title]').textContent=actions[selectedAction.action]+(selectedAction.action==='cancel'?' (เรื่องค้างเดิมจะยังอยู่)':'');f.elements.reason.value='';f.elements.reason.focus()
  })
  dialog.querySelector('#handoff-action').onsubmit=e=>{e.preventDefault();if(selectedAction)submit(selectedAction.action,{[selectedAction.action==='cancel'?'receipt_id':'issue_id']:selectedAction.id,note:e.target.elements.reason.value})}
  dialog.querySelector('[data-refresh]').onclick=async()=>{setBusy(true);try{await refresh();pending=null;setBusy(false);onChange();open(room)}catch(e){setBusy(false);feedback.textContent=e.message}}
 }
 root.addEventListener('click',e=>{const b=e.target.closest('[data-handoff-room]');if(b)open(b.dataset.handoffRoom)})
 return {render,roomButton}
}
