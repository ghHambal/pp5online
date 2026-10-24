import{s as Ot}from"./supabase-BV-W2lsh.js";/* empty css             */const C=s=>String(s??"").replace(/[&<>"']/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[l]),Z="px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white hover:bg-slate-50",lt="block w-full mt-1 border border-slate-300 rounded-lg p-2 text-sm",vt={advisor:"ครูที่ปรึกษา",leader:"หัวหน้าห้อง",other:"ผู้แทนอื่น"},St={receive:"รับเสื้อ",issue:"เพิ่มเรื่องค้าง",resolve:"แก้ไขเรื่องค้างแล้ว",reopen:"เปิดเรื่องค้างอีกครั้ง",cancel:"ยกเลิกบันทึก"},kt=[["เสื้อไม่ครบ","เสื้อไม่ครบ ขาด ___ ตัว สี ___ ไซซ์ ___ นัดรับส่วนที่เหลือวันที่ ___"],["เปลี่ยนไซซ์","ขอเปลี่ยนไซซ์จาก ___ เป็น ___ จำนวน ___ ตัว นักเรียน ___"],["สีหรือไซซ์ไม่ตรง","ได้รับสี/ไซซ์ไม่ตรง: ต้องการ ___ ได้รับ ___ จำนวน ___ ตัว"],["เสื้อชำรุด","เสื้อชำรุด จำนวน ___ ตัว รายละเอียด ___"],["นัดรับภายหลัง","นัดรับเสื้อส่วนที่เหลือวันที่ ___ ผู้ประสานงาน ___"],["อื่น ๆ","ปัญหาอื่น ๆ: ___ แนวทางติดตาม ___"]];function Wt(s){const l=(s.target||[]).filter($=>$.confirmed).length,T=(s.receipts||[]).filter($=>!$.cancelled_at).reduce(($,z)=>$+Number(z.quantity),0);return{target:l,received:T,remaining:Math.max(0,l-T),unconfirmed:(s.target||[]).length-l,status:T===0?"pending":T<l?"partial":"complete",issues:(s.issues||[]).filter($=>!$.resolved_at).length,changed:T>l}}function Dt(s,l,T=new Map((l.shirt_payments||[]).map($=>[$.student_id,$]))){const $=h=>{const N=Number(h);return Number.isFinite(N)&&N>0?N:0},z=(s.target||[]).map(h=>{const N=T.get(h.id),_=h.gender==="M"?$(l.shirt_payment_amount_m):h.gender==="W"?$(l.shirt_payment_amount_w):0;return{...h,payment:N,status:N?"paid":_>0?"unpaid":"waiting",paidAmount:N?$(N.amount):0,dueAmount:!N&&_>0?_:0}});return{students:z,paid:z.filter(h=>h.status==="paid").length,unpaid:z.filter(h=>h.status==="unpaid").length,waiting:z.filter(h=>h.status==="waiting").length,paidAmount:z.reduce((h,N)=>h+N.paidAmount,0),dueAmount:z.reduce((h,N)=>h+N.dueAmount,0)}}function It(s,l){var N;const T=new Map((l.team_colors||[]).map((_,H)=>[_.id,{..._,index:H}])),$=(N=l.allowed_sizes)!=null&&N.length?l.allowed_sizes:["SS","S","M","L","XL","2X","2XL","3X","3XL","4X","4XL","5X","5XL","6X","6XL","7X","7XL","8X","8XL"],z=_=>{const H=$.indexOf(_);return H<0?$.length:H},h=new Map;for(const _ of s.target||[]){const H=_.color_id||_.color||"unknown",W=T.get(_.color_id);h.has(H)||h.set(H,{key:H,name:(W==null?void 0:W.name)||_.color||"ไม่ระบุสี",hex:/^#[0-9a-f]{6}$/i.test((W==null?void 0:W.hex_color)||"")?W.hex_color:"#64748b",order:(W==null?void 0:W.index)??T.size,confirmed:0,pending:0,sizes:new Map});const I=h.get(H);_.confirmed&&_.size?(I.confirmed++,I.sizes.set(_.size,(I.sizes.get(_.size)||0)+1)):I.pending++}return[...h.values()].sort((_,H)=>_.order-H.order||_.name.localeCompare(H.name,"th")).map(_=>({..._,sizes:[..._.sizes].sort(([H],[W])=>z(H)-z(W)||H.localeCompare(W,"th",{numeric:!0}))}))}const Bt=s=>`<div class="space-y-2" aria-label="สรุปสีและไซซ์เสื้อทั้งห้อง">
 <p class="text-xs font-bold text-slate-500">👕 ยอดจัดเสื้อทั้งห้องตามไซซ์ที่ยืนยันแล้ว</p>
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${s.map(l=>`<div class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm" style="border-top:3px solid ${l.hex}">
 <div class="flex flex-wrap items-center justify-between gap-2"><b class="text-sm flex items-center gap-2"><span class="w-3 h-3 rounded-full inline-block" style="background:${l.hex}"></span>${C(l.name)}</b><span class="text-xs font-bold">ยืนยัน ${l.confirmed} ตัว</span></div>
 <div class="flex flex-wrap gap-2 mt-2">${l.sizes.map(([T,$])=>`<span class="rounded-lg bg-slate-100 px-2 py-1 text-xs">${C(T)} <b>× ${$}</b></span>`).join("")||'<span class="text-xs text-slate-400">ยังไม่มีไซซ์ที่ยืนยัน</span>'}</div>
 ${l.pending?`<p class="text-xs text-amber-700 mt-2">รอยืนยันไซซ์ ${l.pending} คน</p>`:""}</div>`).join("")||'<p class="text-xs text-slate-500">ยังไม่มีข้อมูลนักเรียนในห้อง</p>'}</div></div>`,ut=s=>Number(s).toLocaleString("th-TH",{maximumFractionDigits:2}),At=s=>`<div class="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-2" aria-label="สรุปค่าเสื้อทั้งห้อง">
 <span class="text-emerald-700">💰 ชำระแล้ว ${s.paid} คน · ${ut(s.paidAmount)} บาท</span>
 <span class="text-red-700">ยังไม่ชำระ ${s.unpaid} คน · ค้าง ${ut(s.dueAmount)} บาท</span>
 ${s.waiting?`<span class="text-amber-700">รอระบุราคา/เพศ ${s.waiting} คน</span>`:""}
 </div>`,Kt=s=>`<section class="border border-slate-200 rounded-xl p-4 space-y-2">
 <h3 class="font-bold">💰 ค่าเสื้อกีฬาสีของห้องนี้</h3>${At(s)}
 <p class="text-xs text-slate-500">รวมทุกคนในห้อง ทั้งผู้ที่ยืนยันและยังไม่ยืนยันไซซ์</p>
 <details><summary class="cursor-pointer text-sm font-bold">ดูสถานะชำระเงินรายคน (${s.students.length} คน)</summary>
 <div class="overflow-x-auto mt-2"><table class="w-full text-xs text-left"><thead><tr class="border-b text-slate-500">
 <th class="p-2">นักเรียน</th><th class="p-2">สี / ไซซ์</th><th class="p-2">สถานะ</th><th class="p-2 text-right">ชำระแล้ว (บาท)</th><th class="p-2 text-right">ค้าง (บาท)</th><th class="p-2">วันที่ชำระ</th>
 </tr></thead><tbody>${s.students.map(l=>{var T;return`<tr class="border-b border-slate-100">
 <td class="p-2"><span class="block">${C(l.name)}</span><span class="text-slate-500">${C(l.student_code)}</span></td>
 <td class="p-2">${C(l.color||"—")} / ${C(l.size||"—")}</td>
 <td class="p-2 whitespace-nowrap ${l.status==="paid"?"text-emerald-700":l.status==="unpaid"?"text-red-700":"text-amber-700"}">${{paid:"ชำระแล้ว",unpaid:"ยังไม่ชำระ",waiting:"รอระบุราคา/เพศ"}[l.status]}</td>
 <td class="p-2 text-right">${l.payment?ut(l.paidAmount):"—"}</td><td class="p-2 text-right">${l.status==="waiting"?"—":ut(l.dueAmount)}</td>
 <td class="p-2 whitespace-nowrap">${(T=l.payment)!=null&&T.paid_at?C(it(l.payment.paid_at)):"—"}</td>
 </tr>`}).join("")||'<tr><td colspan="6" class="p-2 text-slate-500">ไม่มีนักเรียนในห้องปัจจุบัน</td></tr>'}</tbody></table></div></details>
 </section>`,zt={pending:"ยังไม่ได้รับ",partial:"รับบางส่วน",complete:"รับครบตามยอดยืนยัน"},it=s=>new Date(s).toLocaleString("th-TH",{timeZone:"Asia/Bangkok",dateStyle:"short",timeStyle:"short"});function Gt({root:s,getSnapshot:l,save:T,refresh:$,onChange:z}){const h=s.querySelector("#shirt-handoff-panel");let N="all",_="",H="",W=!1,I=null;const F=()=>l().handoff_rooms||[],et=M=>F().find(c=>c.room===M);let at,Q=new Map;const x=M=>{const c=l();if(c!==at){const v=new Map((c.shirt_payments||[]).map(S=>[S.student_id,S])),L=new Map;for(const S of c.homeroom_teachers||[])L.has(S.main_room)||L.set(S.main_room,[]),L.get(S.main_room).push(S.teacher_name);Q=new Map(F().map(S=>[S.room,{state:Wt(S),payment:Dt(S,c,v),cards:Bt(It(S,c)),advisors:(L.get(S.room)||[]).join(" / "),search:JSON.stringify([S.room,S.receipts,S.issues,L.get(S.room)]).toLowerCase()}])),at=c}return Q.get(M.room)},st=M=>{const c=x(M).state;return`<span class="inline-block rounded-full px-2 py-1 text-xs ${c.status==="complete"?"bg-emerald-100 text-emerald-700":c.status==="partial"?"bg-amber-100 text-amber-800":"bg-slate-100 text-slate-600"}">${zt[c.status]} · ${c.received}/${c.target} ตัว</span> ${c.issues?`<span class="text-xs text-red-700 bg-red-50 rounded-full px-2 py-1">เรื่องค้าง ${c.issues}</span>`:""} ${c.changed?'<span class="text-xs text-red-700">ยอดยืนยันลดลง กรุณาตรวจสอบ</span>':""}`},y=M=>et(M)?`<button type="button" data-handoff-room="${C(M)}" class="${Z}">${st(et(M))} · ดู/บันทึก</button>`:"";function E(){if(!l().handoff_event_id){h.innerHTML='<p class="p-5 bg-amber-50 rounded-xl">ระบบรับมอบเสื้อยังไม่พร้อมใช้งาน กรุณาลองรีเฟรชภายหลัง</p>';return}h.innerHTML=`<div class="bg-white border border-slate-200 rounded-xl p-4 space-y-3"><h2 class="font-bold text-lg">📦 รับมอบเสื้อรายห้อง</h2><p class="text-sm text-slate-500">ยอดรับสะสมของทั้งห้องตามไซซ์ที่ยืนยันแล้ว รวมทุกสีและเพศ • หมายเหตุเปลี่ยนไซซ์จะไม่แก้ข้อมูลไซซ์เดิม</p><input aria-label="ค้นหาห้องรับเสื้อ" class="${lt}" placeholder="ค้นหาห้อง / ครูที่ปรึกษา / ผู้รับ / หมายเหตุ" value="${C(_)}"><div class="flex flex-wrap gap-2">${Object.entries({all:"ทั้งหมด",...zt,issues:"มีเรื่องค้าง"}).map(([c,v])=>`<button type="button" class="${Z} ${N===c?"ring-2 ring-pink-500":""}" data-handoff-filter="${c}">${v} (${F().filter(L=>c==="all"||(c==="issues"?x(L).state.issues>0:x(L).state.status===c)).length})</button>`).join("")}</div><div id="handoff-room-list" class="space-y-3"></div></div>`;const M=()=>{const c=F().filter(v=>(N==="all"||(N==="issues"?x(v).state.issues>0:x(v).state.status===N))&&x(v).search.includes(_.toLowerCase())).sort((v,L)=>v.room.localeCompare(L.room,"th",{numeric:!0}));h.querySelector("#handoff-room-list").innerHTML=c.map(v=>`<div class="border border-slate-200 rounded-xl p-3 space-y-3"><div class="flex flex-wrap justify-between gap-3 items-center"><div><b>ห้อง ${C(v.room)}</b><p class="text-xs text-slate-500">${C(x(v).advisors)}</p>${x(v).state.unconfirmed?`<p class="text-xs text-amber-700">ยังไม่ยืนยันไซซ์ ${x(v).state.unconfirmed} คน</p>`:""}${At(x(v).payment)}</div>${y(v.room)}</div>${x(v).cards}</div>`).join("")||'<p class="p-4 text-slate-500">ไม่พบห้องตามเงื่อนไข</p>'};h.querySelector("input").oninput=c=>{_=c.target.value,M()},h.querySelectorAll("[data-handoff-filter]").forEach(c=>c.onclick=()=>{N=c.dataset.handoffFilter,E()}),M()}const i=document.createElement("dialog");i.className="rounded-2xl p-0 w-full max-w-3xl max-h-[90dvh] shadow-xl backdrop:bg-slate-900/40",document.body.append(i),i.addEventListener("cancel",M=>{W&&M.preventDefault()});function J(M){const c=et(M);if(!c||W)return;const v=x(c),L=v.state,S=l();i.innerHTML=`<div class="p-5 space-y-4"><div class="flex justify-between gap-2"><h2 class="text-xl font-bold">รับมอบเสื้อ · ห้อง ${C(M)}</h2><button type="button" data-close class="${Z}">ปิด</button></div><div>${st(c)}</div><p class="text-sm">นักเรียน ${c.target.length} คน · ยืนยันไซซ์ ${L.target} คน · ยังไม่ยืนยัน ${L.unconfirmed} คน · เหลือรับ ${L.remaining} ตัว</p>${v.cards}
   ${Kt(v.payment)}
   <form id="handoff-form" class="space-y-3 border rounded-xl p-4">
    <h3 class="font-bold">บันทึกการรับครั้งนี้</h3><label class="block text-sm">ชื่อผู้บันทึก<input name="recorder_name" class="${lt}" maxlength="200" minlength="2" required value="${C(S.handoff_recorder||H)}" ${S.handoff_recorder?"readonly":""}></label>
    <label class="block text-sm">ผู้มารับ<select name="receiver_kind" class="${lt}">${Object.entries(vt).map(([d,O])=>`<option value="${d}">${O}</option>`).join("")}</select></label>
    <label class="block text-sm">ชื่อผู้รับ<input name="receiver_name" class="${lt}" list="handoff-names" maxlength="200" minlength="2" ${L.remaining?"required":""} placeholder="เลือกชื่อแนะนำ หรือพิมพ์เอง"></label><datalist id="handoff-names"></datalist>
    <label class="block text-sm">จำนวนที่รับครั้งนี้ (ตัว)<input name="quantity" type="number" min="1" max="${L.remaining}" step="1" class="${lt}" value="${L.remaining||""}" ${L.remaining?"required":"disabled"}></label>
    <p class="text-xs text-slate-500">รับครบจะขึ้นสถานะอัตโนมัติตามยอดสะสม</p>
    <div class="flex flex-wrap gap-2">${kt.map(([d],O)=>`<button type="button" data-preset="${O}" class="${Z}">${d}</button>`).join("")}</div>
    <label class="block text-sm">หมายเหตุ (เลือกตัวอย่างแล้วแก้ไขเพิ่มเติมได้)<textarea name="note" rows="3" maxlength="3000" class="${lt}"></textarea></label>
    <div class="flex flex-wrap gap-2" id="issue-choice"><button type="button" data-issue="false" class="${Z} ring-2 ring-pink-500">ไม่มีเรื่องค้าง</button><button type="button" data-issue="true" class="${Z} ring-pink-500">มีเรื่องค้างให้ติดตาม</button></div>
    <div class="flex flex-wrap gap-2"><button type="submit" class="${Z.replace("bg-white hover:bg-slate-50","bg-pink-600 hover:bg-pink-700 text-white")}" ${L.remaining?"":"disabled"}>บันทึกรับเสื้อ</button><button type="button" data-add-issue class="${Z}">บันทึกเฉพาะเรื่องค้าง</button></div>
   </form>
   <p data-feedback role="status" class="text-sm text-red-700 whitespace-pre-wrap"></p><button type="button" data-refresh class="${Z}">โหลดข้อมูลล่าสุด (เริ่มกรอกใหม่)</button>
   <section class="space-y-2"><h3 class="font-bold">เรื่องค้าง / ผลการแก้ไข</h3>${c.issues.map(d=>`<div class="border rounded-lg p-3 text-sm"><b>${d.resolved_at?"✅ แก้ไขแล้ว":"⚠️ รอติดตาม"}</b><p class="whitespace-pre-wrap">${C(d.note)}</p><p class="text-xs text-slate-500">${C(d.opened_by)} · ${it(d.opened_at)}</p>${d.resolved_at?`<p class="whitespace-pre-wrap">ผล: ${C(d.resolution)} · ${C(d.resolved_by)} · ${it(d.resolved_at)}</p>`:""}<button type="button" data-action="${d.resolved_at?"reopen":"resolve"}" data-item="${C(d.id)}" class="${Z} mt-2">${d.resolved_at?"เปิดเรื่องอีกครั้ง":"บันทึกผลการแก้ไข"}</button></div>`).join("")||'<p class="text-sm text-slate-500">ไม่มีเรื่องค้าง</p>'}</section>
   <section class="space-y-2"><h3 class="font-bold">ประวัติการรับเสื้อ</h3>${c.receipts.map(d=>`<div class="border rounded-lg p-3 text-sm"><b>${d.quantity} ตัว · ${C(vt[d.receiver_kind])} ${C(d.receiver_name)} ${d.cancelled_at?"(ยกเลิกแล้ว)":""}</b><p class="text-xs text-slate-500">ผู้บันทึก ${C(d.recorder_name)} · ${it(d.created_at)}</p><p class="whitespace-pre-wrap">${C(d.note)}</p>${d.cancelled_at?`<p>เหตุผลยกเลิก: ${C(d.cancel_reason)}</p>`:`<button type="button" data-action="cancel" data-item="${C(d.id)}" class="${Z} mt-2">ยกเลิกบันทึกนี้</button>`}</div>`).join("")||'<p class="text-sm text-slate-500">ยังไม่มีการรับเสื้อ</p>'}</section>
   <form id="handoff-action" class="hidden border rounded-xl p-4 space-y-2"><h3 data-action-title class="font-bold"></h3><label class="block text-sm">รายละเอียด / เหตุผล<textarea name="reason" required maxlength="3000" class="${lt}"></textarea></label><button type="submit" class="${Z}">ยืนยันบันทึก</button></form>
   <details><summary class="cursor-pointer text-sm">ประวัติการเปลี่ยนแปลง (${c.history.length})</summary>${c.history.map(d=>`<p class="text-xs py-2 border-b">${it(d.at)} · ${C(d.name)} · ${C(St[d.action])} · ${C(d.detail.note)}</p>`).join("")}</details></div>`,i.open||i.showModal();const B=i.querySelector("#handoff-form"),nt=i.querySelector("[data-feedback]");let U=!1,Y=null;const ct=()=>{const d=B.elements.receiver_kind.value,O=d==="advisor"?(S.homeroom_teachers||[]).filter(P=>P.main_room===M).map(P=>P.teacher_name):d==="leader"?c.target.map(P=>P.name):[];i.querySelector("datalist").innerHTML=O.map(P=>`<option value="${C(P)}"></option>`).join("")};ct(),B.elements.receiver_kind.onchange=ct,i.querySelector("[data-close]").onclick=()=>i.close(),i.querySelectorAll("[data-preset]").forEach(d=>d.onclick=()=>{const O=B.elements.note;O.value=[O.value.trim(),kt[Number(d.dataset.preset)][1]].filter(Boolean).join(`
`),O.focus()}),i.querySelectorAll("[data-issue]").forEach(d=>d.onclick=()=>{U=d.dataset.issue==="true",i.querySelectorAll("[data-issue]").forEach(O=>O.classList.toggle("ring-2",O===d))});const V=d=>{W=d,i.querySelectorAll("button,input,select,textarea").forEach(O=>{d?(O.dataset.wasDisabled=String(O.disabled),O.disabled=!0):O.disabled=O.dataset.wasDisabled==="true"})};async function tt(d,O){if(W)return;if(H=B.elements.recorder_name.value.trim(),H.length<2){nt.textContent="กรุณาระบุชื่อผู้บันทึก";return}const P={p_event:S.handoff_event_id,p_room:M,p_action:d,p_revision:c.revision,p_target_hash:c.target_hash,p_data:{...O,recorder_name:H}},pt=JSON.stringify(P);(I==null?void 0:I.signature)!==pt&&(I={signature:pt,id:crypto.randomUUID()}),V(!0),nt.textContent="กำลังบันทึก…";try{await T({...P,p_request_id:I.id}),await $(),I=null,V(!1),z(),J(M),i.querySelector("[data-feedback]").textContent="บันทึกเรียบร้อยแล้ว"}catch(bt){V(!1),nt.textContent=bt.message||"บันทึกไม่สำเร็จ กรุณาลองอีกครั้ง"}}B.onsubmit=d=>{d.preventDefault(),tt("receive",{quantity:Number(B.elements.quantity.value),receiver_kind:B.elements.receiver_kind.value,receiver_name:B.elements.receiver_name.value.trim(),note:B.elements.note.value,has_issue:U})},i.querySelector("[data-add-issue]").onclick=()=>{if(!B.elements.note.value.trim()){nt.textContent="กรุณาระบุรายละเอียดเรื่องค้าง";return}tt("issue",{note:B.elements.note.value})},i.querySelectorAll("[data-action]").forEach(d=>d.onclick=()=>{Y={action:d.dataset.action,id:d.dataset.item};const O=i.querySelector("#handoff-action");O.classList.remove("hidden"),O.querySelector("[data-action-title]").textContent=St[Y.action]+(Y.action==="cancel"?" (เรื่องค้างเดิมจะยังอยู่)":""),O.elements.reason.value="",O.elements.reason.focus()}),i.querySelector("#handoff-action").onsubmit=d=>{d.preventDefault(),Y&&tt(Y.action,{[Y.action==="cancel"?"receipt_id":"issue_id"]:Y.id,note:d.target.elements.reason.value})},i.querySelector("[data-refresh]").onclick=async()=>{V(!0);try{await $(),I=null,V(!1),z(),J(M)}catch(d){V(!1),nt.textContent=d.message}}}return s.addEventListener("click",M=>{const c=M.target.closest("[data-handoff-room]");c&&J(c.dataset.handoffRoom)}),{render:E,roomButton:y}}const $t="sports_shirt_monitor_pw",b=document.getElementById("shirt-monitor-root"),Lt="โรงเรียนมูลนิธิอาซิซสถานร่วมกับวิทยาลัยเทคโนโลยีอาซิซสถานพณิชยการ",qt=["https://lh3.googleusercontent.com/d/1JDduqJInp2BjORgZhhUgv80fXtMs3JzV","https://lh3.googleusercontent.com/d/1lXMVnPf8rIl5SBzqZeSCEtbpf6U7idWa","https://lh3.googleusercontent.com/d/1JPmgiu_pgACGYTymHsLqROm1GrzZSklP"],o=s=>String(s??"").replace(/[&<>"']/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[l]),Ft=s=>{const l=String(s||"").replace("#","");if(!/^[0-9a-fA-F]{6}$/.test(l))return"transparent";const T=.85,$=z=>Math.round(parseInt(l.slice(z*2,z*2+2),16)+(255-parseInt(l.slice(z*2,z*2+2),16))*T);return`rgb(${$(0)}, ${$(1)}, ${$(2)})`},yt=s=>({pending:"รอยืนยัน",confirmed:"ยืนยันแล้ว",advisor_updated:"ครูเลือก/แก้ไขแทน"})[s]||"ยังไม่จำนง",Vt=s=>s==="confirmed"||s==="advisor_updated",xt=s=>{const l=String(s||"").match(/ม\.(\d+)\/(\d+)/);return l?[parseInt(l[1]),parseInt(l[2])]:String(s||"").startsWith("ปวช.")?[parseInt(s.split(".")[1])+6,1]:[99,99]},jt=s=>{const l=String(s||"ไม่ระบุ");return l.startsWith("ปวช.")?"ปวช.":l.split("/")[0]||"ไม่ระบุ"},Tt=s=>s.startsWith("ปวช.")?100:parseInt(s.replace("ม.",""))||99,Jt=(s,l)=>{const[T,$]=[xt(s.main_room),xt(l.main_room)];return T[0]-$[0]||T[1]-$[1]||s.full_name.localeCompare(l.full_name,"th")};async function wt(s){const{data:l,error:T}=await Ot.rpc("get_sports_shirt_handoff_snapshot",{p_password:s});if(T)throw T;return l}function Pt(s){b.innerHTML=`
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับฝ่ายที่ได้รับสิทธิ์เข้าถึงข้อมูลไซซ์เสื้อและค่าเสื้อกีฬาสีเท่านั้น</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าดูข้อมูล</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`;const l=b.querySelector("#gate-password"),T=b.querySelector("#gate-error"),$=async()=>{const z=l.value.trim();if(z){b.querySelector("#gate-submit").disabled=!0;try{const h=await wt(z);try{sessionStorage.setItem($t,z)}catch{}s(h,z)}catch{T.classList.remove("hidden"),b.querySelector("#gate-submit").disabled=!1}}};b.querySelector("#gate-submit").onclick=$,l.addEventListener("keydown",z=>{z.key==="Enter"&&$()})}function Mt(s,l){const T=Number(s.shirt_payment_amount_m)||0,$=Number(s.shirt_payment_amount_w)||0,z=t=>t==="W"?$:T,h=T>0||$>0,N=s.allowed_sizes&&s.allowed_sizes.length?s.allowed_sizes:["SS","S","M","L","XL","2X","3X","4X","5X","6X","7X","8X"],_=s.team_colors||[],H=s.teachers||[],W=s.teacher_shirt_requests||[],I=s.teacher_allowed_sizes&&s.teacher_allowed_sizes.length?s.teacher_allowed_sizes:N,F=t=>W.find(e=>e.teacher_id===t),et=s.personnel_shirt_requests||[],at={};(s.homeroom_teachers||[]).forEach(t=>{at[t.main_room]=at[t.main_room]?`${at[t.main_room]} / ${t.teacher_name}`:t.teacher_name});const Q=t=>at[t]||"—";let x="size",st="teacher",y="ALL",E=null,i=null,J=null,M="",c="list",v="all",L=!1;const S=new Set,B=t=>(s.shirt_requests||[]).find(e=>e.student_id===t),nt=t=>(s.shirt_payments||[]).find(e=>e.student_id===t),U=t=>{const e=B(t.id),n=nt(t.id);return{req:e,pay:n,sizeStatus:(e==null?void 0:e.status)||null,sizeReported:!!e,sizeOk:Vt(e==null?void 0:e.status),paid:!!n}},Y=()=>y==="ALL"?_:_.filter(t=>t.gender===y),ct=t=>t==="ALL"?s.students||[]:(s.students||[]).filter(e=>e.gender===t),V=()=>ct(y),tt=()=>{let t=V();if(E&&(t=t.filter(e=>e.team_color_id===E)),J&&(t=t.filter(e=>jt(e.main_room)===J)),M.trim()){const e=M.trim().toLowerCase();t=t.filter(n=>(n.full_name||"").toLowerCase().includes(e)||(n.student_code||"").toLowerCase().includes(e)||(n.main_room||"").toLowerCase().includes(e)||(n.color_name||"").toLowerCase().includes(e))}return x==="size"?(i&&(t=t.filter(e=>{var n;return((n=B(e.id))==null?void 0:n.confirmed_size)===i})),v==="pending"&&(t=t.filter(e=>!U(e).sizeOk)),v==="confirmed"&&(t=t.filter(e=>U(e).sizeOk))):h&&v==="unpaid"?t=t.filter(e=>z(e.gender)>0&&!U(e).paid):h&&v==="paid"&&(t=t.filter(e=>U(e).paid)),t},d=()=>[...new Set(V().map(e=>jt(e.main_room)))].sort((e,n)=>Tt(e)-Tt(n));b.innerHTML=`
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex flex-wrap p-1 rounded-xl bg-white border border-slate-200 gap-1">
          <button type="button" data-tab="size" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👕 ไซซ์เสื้อ</button>
          <button type="button" data-tab="payment" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">💰 ค่าเสื้อ</button>
          <button type="button" data-tab="handoff" class="px-4 py-2 rounded-lg text-xs font-bold">📦 รับมอบเสื้อรายห้อง</button>
          <button type="button" data-tab="teacher" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👔 ไซซ์เสื้อครู/บุคลากร</button>
        </div>
        <div id="shirt-genders" class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 ชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 หญิง</button>
          <button type="button" data-gender="UNKNOWN" class="px-4 py-2 rounded-lg text-xs font-bold transition-all hidden">❔ ไม่ระบุเพศ</button>
          <button type="button" data-gender="ALL" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👥 ทั้งหมด</button>
        </div>
      </div>

      <div id="shirt-handoff-panel" class="no-print hidden"></div>
      <div id="shirt-standard-panel" class="space-y-4">
      <div id="role-filter-row" class="no-print"></div>

      <div id="search-row" class="no-print">
        <input id="shirt-search" type="text" placeholder="🔍 ค้นหาชื่อ/รหัส/ห้อง/สี — พิมพ์อะไรก็เจอ" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm bg-white">
      </div>

      <p id="scope-line" class="no-print text-xs text-slate-500"></p>

      <div id="color-cards" class="no-print grid grid-cols-2 sm:grid-cols-4 gap-2"></div>
      <div id="size-grid-wrap" class="no-print bg-white rounded-xl border border-slate-200 p-3 overflow-x-auto"></div>

      <div class="no-print bg-white rounded-xl border border-slate-200 p-3 flex flex-wrap items-center gap-3">
        <span class="text-xs font-bold text-slate-500">กรองสถานะ:</span>
        <div id="status-filter" class="inline-flex p-1 rounded-xl bg-slate-100 gap-1"></div>
        <div id="view-mode-row" class="inline-flex p-1 rounded-xl bg-slate-100 gap-1 ml-auto"></div>
      </div>

      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ดาวน์โหลด Excel (CSV)</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="level-filter-row" class="no-print"></div>

      <div id="shirt-list" class="no-print space-y-4"></div>
      <div id="print-content" class="print-only"></div>
      </div>
    </div>`;const O=Gt({root:b,getSnapshot:()=>s,save:async t=>{const{error:e}=await Ot.rpc("save_sports_shirt_handoff",{p_password:l,...t});if(e)throw e},refresh:async()=>{s=await wt(l)},onChange:()=>D()}),P=()=>{const t=Y();b.querySelector("#color-cards").innerHTML=t.map(e=>{const n=V().filter(k=>k.team_color_id===e.id),f=x==="size"?`${n.filter(k=>U(k).sizeOk).length} / ${n.length}`:z(e.gender)>0?`${n.filter(k=>U(k).paid).length} / ${n.length}`:"รอราคา",w=E===e.id;return`<button type="button" data-color-card="${o(e.id)}" class="text-left rounded-xl border p-3 transition-all ${w?"ring-2 ring-offset-1":"border-slate-200 bg-white hover:border-slate-300"}" style="${w?`border-color:${o(e.hex_color)};box-shadow:0 0 0 2px ${o(e.hex_color)}22;`:""}">
        <div class="flex items-center gap-2 mb-1"><span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${o(e.hex_color)}"></span><b class="text-xs text-slate-700">สี${o(e.name)}</b></div>
        <p class="text-[10px] text-slate-400">${n.length} คน</p>
        <p class="text-lg font-black mt-0.5" style="color:${o(e.hex_color)}">${o(f)}</p>
      </button>`}).join("")||'<p class="col-span-full text-xs text-slate-400 text-center py-4">ไม่มีข้อมูลสี</p>',b.querySelectorAll("[data-color-card]").forEach(e=>e.onclick=()=>{E=E===e.dataset.colorCard?null:e.dataset.colorCard,D()})},pt=()=>{const t=b.querySelector("#size-grid-wrap");if(x!=="size"){t.innerHTML="";return}const e=Y(),n=(r,u)=>V().filter(m=>{var q;return m.team_color_id===r&&((q=B(m.id))==null?void 0:q.confirmed_size)===u}).length,f=r=>V().filter(u=>u.team_color_id===r&&U(u).sizeOk).length,w=r=>V().filter(u=>{var m;return((m=B(u.id))==null?void 0:m.confirmed_size)===r&&u.team_color_id&&e.some(q=>q.id===u.team_color_id)}).length,k=e.reduce((r,u)=>r+f(u.id),0);t.innerHTML=`
      <p class="text-xs font-bold text-slate-500 mb-2">สรุปจำนวนไซซ์ที่ยืนยันแล้วต่อสี — กดตัวเลขเพื่อกรองรายชื่อด้านล่าง</p>
      <table class="w-full text-xs border-collapse">
        <thead><tr>
          <th class="p-2 text-left border-b border-slate-200">สี</th>
          ${N.map(r=>`<th class="p-2 text-center border-b border-slate-200 ${i===r?"text-pink-600":"text-slate-500"}"><button type="button" data-size-col="${o(r)}" class="font-bold hover:underline">${o(r)}</button></th>`).join("")}
          <th class="p-2 text-center border-b border-slate-200 text-slate-500 font-bold">รวม</th>
        </tr></thead>
        <tbody>
          ${e.map(r=>`<tr class="border-b border-slate-100">
            <td class="p-2"><span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${o(r.hex_color)}"></span>${o(r.name)}</span></td>
            ${N.map(u=>{const m=n(r.id,u),q=E===r.id&&i===u;return`<td class="p-1 text-center"><button type="button" data-cell-color="${o(r.id)}" data-cell-size="${o(u)}" class="w-9 h-8 rounded-lg text-xs font-bold ${q?"bg-pink-600 text-white":m>0?"bg-slate-100 hover:bg-slate-200 text-slate-700":"text-slate-300"}">${m||"·"}</button></td>`}).join("")}
            <td class="p-1 text-center"><button type="button" data-color-total="${o(r.id)}" class="w-10 h-8 rounded-lg text-xs font-bold ${E===r.id&&!i?"bg-pink-600 text-white":"bg-slate-50 hover:bg-slate-100 text-slate-700"}">${f(r.id)}</button></td>
          </tr>`).join("")}
          <tr>
            <td class="p-2 font-bold text-slate-600">รวม</td>
            ${N.map(r=>`<td class="p-1 text-center"><button type="button" data-size-total="${o(r)}" class="w-9 h-8 rounded-lg text-xs font-bold ${!E&&i===r?"bg-pink-600 text-white":"bg-slate-50 hover:bg-slate-100 text-slate-700"}">${w(r)}</button></td>`).join("")}
            <td class="p-1 text-center font-black text-slate-700">${k}</td>
          </tr>
        </tbody>
      </table>`,t.querySelectorAll("[data-cell-color]").forEach(r=>r.onclick=()=>{const u=r.dataset.cellColor,m=r.dataset.cellSize;E===u&&i===m?(E=null,i=null):(E=u,i=m),D()}),t.querySelectorAll("[data-color-total]").forEach(r=>r.onclick=()=>{const u=r.dataset.colorTotal;E===u&&!i?E=null:(E=u,i=null),D()}),t.querySelectorAll("[data-size-total],[data-size-col]").forEach(r=>r.onclick=()=>{const u=r.dataset.sizeTotal||r.dataset.sizeCol;!E&&i===u?i=null:(i=u,E=null),D()})},bt=()=>{const t=b.querySelector("#status-filter"),e=x==="size"?[["all","ทั้งหมด"],["pending","ไซซ์ยังไม่ยืนยัน"],["confirmed","ยืนยันแล้ว"]]:h?[["all","ทั้งหมด"],["unpaid","ยังไม่ชำระ"],["paid","ชำระแล้ว"]]:[["all","ทั้งหมด"]];t.innerHTML=e.map(([n,f])=>`<button type="button" data-status="${n}" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${v===n?"bg-pink-600 text-white":"text-slate-500"}">${o(f)}</button>`).join(""),t.querySelectorAll("[data-status]").forEach(n=>n.onclick=()=>{v=n.dataset.status,D()})},Ct=()=>{const t=b.querySelector("#level-filter-row"),e=d();if(e.length<=1){t.innerHTML="";return}t.innerHTML=`<div class="flex flex-wrap gap-1.5">
      <button type="button" data-level="" class="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${J?"bg-white text-slate-500 border-slate-200":"bg-pink-600 text-white border-pink-600"}">ทุกระดับชั้น</button>
      ${e.map(n=>`<button type="button" data-level="${o(n)}" class="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${J===n?"bg-pink-600 text-white border-pink-600":"bg-white text-slate-500 border-slate-200"}">${o(n)}</button>`).join("")}
    </div>`,t.querySelectorAll("[data-level]").forEach(n=>n.onclick=()=>{J=n.dataset.level||null,D()})},Nt=()=>{const t=b.querySelector("#view-mode-row");t.innerHTML=`
      <button type="button" data-view="list" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${c==="list"?"bg-pink-600 text-white":"text-slate-500"}">📋 รายชื่อ</button>
      <button type="button" data-view="summary" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${c==="summary"?"bg-pink-600 text-white":"text-slate-500"}">📊 สรุปตามห้อง</button>`,t.querySelectorAll("[data-view]").forEach(e=>e.onclick=()=>{c=e.dataset.view,D()})},Et=()=>{const t=b.querySelector("#view-mode-row");t.innerHTML=`
      <button type="button" id="btn-select-mode" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${L?"bg-pink-600 text-white":"text-slate-500"}">☑️ เลือกเพื่อพิมพ์${L&&S.size?` (${S.size})`:""}</button>`,t.querySelector("#btn-select-mode").onclick=()=>{L=!L,L||S.clear(),D()}},rt=t=>{const e={};return t.forEach(n=>{(e[n.main_room||"ไม่ระบุห้อง"]=e[n.main_room||"ไม่ระบุห้อง"]||[]).push(n)}),Object.keys(e).sort((n,f)=>{const[w,k]=[xt(n),xt(f)];return w[0]-k[0]||w[1]-k[1]}).map(n=>({room:n,students:e[n]}))},Ht=()=>{var m;const t=tt(),e=`<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${qt.map(q=>`<img src="${q}" style="height:56px">`).join("")}</div>`,n=y==="M"?"ชาย":y==="W"?"หญิง":"",f=E?(m=_.find(q=>q.id===E))==null?void 0:m.name:"",w=J?` — ชั้น${J}`:"",k=x==="size"?"รายชื่อนักเรียน — ไซซ์เสื้อกีฬาสี":"รายชื่อนักเรียน — ค่าเสื้อกีฬาสี",r=q=>`
      ${e}
      <div style="text-align:center;margin-bottom:10px">
        <h2 style="font-size:16px;margin:0 0 4px">${o(k)}${n?o(n):""}${f?` — สี${o(f)}`:""}${i?` — ไซซ์ ${o(i)}`:""}${o(w)}</h2>
        <p style="font-size:13px;margin:0;font-weight:bold">${o(Lt)}</p>
        ${q?`<p style="font-size:14px;margin:6px 0 0;font-weight:bold">${o(q)}</p>`:""}
      </div>`;if(c==="summary"){const q=rt(t);return`<div style="padding-top:12px">
        ${r("สรุปตามห้อง")}
        <div style="text-align:center;margin-bottom:10px;font-size:12px">จำนวนทั้งหมด: <b>${t.length}</b> คน</div>
        <table style="width:100%;border-collapse:collapse;font-size:10.5px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ครูที่ปรึกษา</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">จำนวน</th>
            ${x==="size"?'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">นักเรียนแจ้งแล้ว</th><th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ครูยืนยันแล้ว</th>':'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ชำระแล้ว</th><th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ยังไม่ชำระ</th>'}
          </tr></thead>
          <tbody>${q.map(({room:K,students:g})=>{const A=g.filter(j=>U(j).sizeReported).length,a=g.filter(j=>U(j).sizeOk).length,p=g.filter(j=>U(j).paid).length;return`<tr>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${o(K)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${o(Q(K))}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${g.length}</td>
              ${x==="size"?`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${A} / ${g.length}</td><td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${a} / ${g.length}</td>`:`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${p}</td><td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${g.length-p}</td>`}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`}return rt(t).map(({room:q,students:K},g)=>{const A=[...K].sort((p,j)=>p.full_name.localeCompare(j.full_name,"th")),a=Q(q);return`<div style="${g>0?"page-break-before:always;":""}padding-top:12px">
        ${r(`ห้อง ${q}${a!=="—"?` — ครูที่ปรึกษา: ${a}`:""}`)}
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>จำนวน: <b>${A.length}</b> คน</span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:10.5px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สี</th>
            ${x==="size"?'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ไซซ์ยืนยัน</th><th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สถานะ</th>':h?'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สถานะชำระ</th>':""}
          </tr></thead>
          <tbody>${A.map((p,j)=>{var G,ot;const X=U(p);return`<tr style="background:${Ft((G=_.find(mt=>mt.id===p.team_color_id))==null?void 0:G.hex_color)}">
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${j+1}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${o(p.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${o(p.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${o(p.color_name||"—")}</td>
              ${x==="size"?`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${o(((ot=X.req)==null?void 0:ot.confirmed_size)||"—")}</td><td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${o(yt(X.sizeStatus))}</td>`:h?`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${z(p.gender)>0?X.paid?"ชำระแล้ว":"ยังไม่ชำระ":"รอราคา"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`}).join("")},ft=t=>t==="ALL"?et:t==="UNKNOWN"?et.filter(e=>!e.gender):et.filter(e=>e.gender===t),ht=t=>t==="ALL"?H:t==="UNKNOWN"?H.filter(e=>!e.gender):H.filter(e=>e.gender===t),dt=t=>String(t.id??t.full_name),_t=()=>{const t=M.trim().toLowerCase();if(st==="personnel"){let n=ft(y);return i&&(n=n.filter(f=>f.size===i)),t&&(n=n.filter(f=>(f.full_name||"").toLowerCase().includes(t))),n}let e=ht(y);return i&&(e=e.filter(n=>{var f;return((f=F(n.id))==null?void 0:f.size)===i})),v==="not_reported"&&(e=e.filter(n=>!F(n.id))),v==="reported"&&(e=e.filter(n=>!!F(n.id))),t&&(e=e.filter(n=>(n.full_name||"").toLowerCase().includes(t)||(n.teacher_code||"").toLowerCase().includes(t))),e},Rt=()=>{b.querySelector("#color-cards").innerHTML="";const t=st==="personnel",e=y==="M"?"ชาย":y==="W"?"หญิง":y==="UNKNOWN"?"ที่ไม่ระบุเพศ":"ทั้งหมด",n=b.querySelector("#role-filter-row");n.innerHTML=`<div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1 mb-1">
      <button type="button" data-role="teacher" class="px-4 py-2 rounded-lg text-xs font-bold transition-all ${t?"text-slate-500":"bg-pink-600 text-white"}">👔 ครู</button>
      <button type="button" data-role="personnel" class="px-4 py-2 rounded-lg text-xs font-bold transition-all ${t?"bg-pink-600 text-white":"text-slate-500"}">🧑‍💼 บุคลากร</button>
    </div>`,n.querySelectorAll("[data-role]").forEach(a=>a.onclick=()=>{st=a.dataset.role,i=null,v="all",L=!1,S.clear(),D()});let f,w;if(t){const a=ft(y);f=a.length,w=`บุคลากร${e} แจ้งไซซ์แล้ว ${a.length} คน (ไม่มีรายชื่อล่วงหน้า — พิมพ์ชื่อเองอิสระ)`}else{const a=ht(y);f=a.filter(p=>F(p.id)).length,w=`คุณครู${e} ${a.length} คน — แจ้งไซซ์แล้ว ${f} คน`}b.querySelector("#scope-line").textContent=w;const k=[["M","👦 ชาย"],["W","👧 หญิง"]];!t&&H.some(a=>!a.gender)&&k.push(["UNKNOWN","❔ ไม่ระบุเพศ"]);const r=a=>t?ft(a):ht(a),u=(a,p)=>t?r(a).filter(j=>j.size===p).length:r(a).filter(j=>{var X;return((X=F(j.id))==null?void 0:X.size)===p}).length,m=a=>t?r(a).length:r(a).filter(p=>F(p.id)).length,q=a=>k.reduce((p,[j])=>p+u(j,a),0),K=k.reduce((a,[p])=>a+m(p),0);b.querySelector("#size-grid-wrap").innerHTML=`
      <p class="text-xs font-bold text-slate-500 mb-2">สรุปจำนวนไซซ์เสื้อ${t?"บุคลากร":"ครู"}ที่แจ้งแล้ว แยกชาย/หญิง — กดตัวเลขเพื่อกรองรายชื่อด้านล่าง</p>
      <table class="w-full text-xs border-collapse">
        <thead><tr>
          <th class="p-2 text-left border-b border-slate-200"></th>
          ${I.map(a=>`<th class="p-2 text-center border-b border-slate-200 text-slate-500 font-bold">${o(a)}</th>`).join("")}
          <th class="p-2 text-center border-b border-slate-200 text-slate-500 font-bold">รวม</th>
        </tr></thead>
        <tbody>
          ${k.map(([a,p])=>`<tr class="border-b border-slate-100">
            <td class="p-2 font-bold text-slate-600 whitespace-nowrap">${o(p)}</td>
            ${I.map(j=>{const X=u(a,j),R=y===a&&i===j;return`<td class="p-1 text-center"><button type="button" data-tsize-cell data-tsize-gender="${o(a)}" data-tsize-size="${o(j)}" class="w-9 h-8 rounded-lg text-xs font-bold ${R?"bg-pink-600 text-white":X>0?"bg-slate-100 hover:bg-slate-200 text-slate-700":"text-slate-300"}">${X||"·"}</button></td>`}).join("")}
            <td class="p-1 text-center"><button type="button" data-tgender-total="${o(a)}" class="w-10 h-8 rounded-lg text-xs font-bold ${y===a&&!i?"bg-pink-600 text-white":"bg-slate-50 hover:bg-slate-100 text-slate-700"}">${m(a)}</button></td>
          </tr>`).join("")}
          <tr>
            <td class="p-2 font-bold text-slate-600">รวม</td>
            ${I.map(a=>`<td class="p-1 text-center"><button type="button" data-tsize-total="${o(a)}" class="w-9 h-8 rounded-lg text-xs font-bold ${y==="ALL"&&i===a?"bg-pink-600 text-white":"bg-slate-50 hover:bg-slate-100 text-slate-700"}">${q(a)}</button></td>`).join("")}
            <td class="p-1 text-center font-black text-slate-700">${K}</td>
          </tr>
        </tbody>
      </table>`,b.querySelectorAll("[data-tsize-cell]").forEach(a=>a.onclick=()=>{const p=a.dataset.tsizeGender,j=a.dataset.tsizeSize;y===p&&i===j?i=null:(y=p,i=j),D()}),b.querySelectorAll("[data-tgender-total]").forEach(a=>a.onclick=()=>{const p=a.dataset.tgenderTotal;y===p&&!i?y="ALL":(y=p,i=null),D()}),b.querySelectorAll("[data-tsize-total]").forEach(a=>a.onclick=()=>{const p=a.dataset.tsizeTotal;y==="ALL"&&i===p?i=null:(y="ALL",i=p),D()});const g=b.querySelector("#status-filter");t?g.innerHTML="":(g.innerHTML=[["all","ทั้งหมด"],["not_reported","ยังไม่แจ้ง"],["reported","แจ้งแล้ว"]].map(([a,p])=>`<button type="button" data-status="${a}" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${v===a?"bg-pink-600 text-white":"text-slate-500"}">${o(p)}</button>`).join(""),g.querySelectorAll("[data-status]").forEach(a=>a.onclick=()=>{v=a.dataset.status,D()}));const A=_t().sort((a,p)=>a.full_name.localeCompare(p.full_name,"th"));b.querySelector("#shirt-list").innerHTML=A.length?`
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table class="w-full text-xs">
          <thead><tr class="text-slate-400 text-left bg-slate-50">
            ${L?'<th class="p-2 w-8"></th>':""}${t?"":'<th class="p-2 font-bold">รหัส</th>'}<th class="p-2 font-bold">ชื่อ-สกุล</th><th class="p-2 font-bold text-center">ไซซ์ที่แจ้ง</th><th class="p-2 font-bold text-center">วันที่แจ้ง</th>
          </tr></thead>
          <tbody>${t?A.map(a=>`<tr class="border-t border-slate-100">
              ${L?`<td class="p-2"><input type="checkbox" data-select-id="${o(dt(a))}" ${S.has(dt(a))?"checked":""}></td>`:""}
              <td class="p-2">${o(a.full_name)}</td>
              <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">${o(a.size)}</span></td>
              <td class="p-2 text-center text-slate-400">${a.updated_at?new Date(a.updated_at).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</td>
            </tr>`).join(""):A.map(a=>{const p=F(a.id);return`<tr class="border-t border-slate-100">
              ${L?`<td class="p-2"><input type="checkbox" data-select-id="${o(dt(a))}" ${S.has(dt(a))?"checked":""}></td>`:""}
              <td class="p-2 w-24 text-slate-500">${o(a.teacher_code)}</td>
              <td class="p-2">${o(a.full_name)}</td>
              <td class="p-2 text-center">${p?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">${o(p.size)}</span>`:'<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-500">ยังไม่แจ้ง</span>'}</td>
              <td class="p-2 text-center text-slate-400">${p!=null&&p.updated_at?new Date(p.updated_at).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</td>
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:'<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>',L&&b.querySelectorAll("[data-select-id]").forEach(a=>a.onchange=()=>{a.checked?S.add(a.dataset.selectId):S.delete(a.dataset.selectId),D()}),b.querySelector("#print-content").innerHTML=Ut(A,t)},Ut=(t,e)=>{const n=L&&S.size?t.filter(r=>S.has(dt(r))):t;if(!n.length)return"";const f=`<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${qt.map(r=>`<img src="${r}" style="height:56px">`).join("")}</div>`,w=y==="M"?"ชาย":y==="W"?"หญิง":y==="UNKNOWN"?"ไม่ระบุเพศ":"";return`<div style="padding-top:12px">
      ${f}
      <div style="text-align:center;margin-bottom:10px">
        <h2 style="font-size:16px;margin:0 0 4px">${o(`รายชื่อ${e?"บุคลากร":"ครู"} — ไซซ์เสื้อกีฬาสี`)}${w?o(w):""}</h2>
        <p style="font-size:13px;margin:0;font-weight:bold">${o(Lt)}</p>
      </div>
      <div style="text-align:center;margin-bottom:10px;font-size:12px">จำนวน: <b>${n.length}</b> คน</div>
      <table style="width:100%;border-collapse:collapse;font-size:10.5px">
        <thead><tr>
          <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
          ${e?"":'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>'}
          <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
          <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ไซซ์ที่แจ้ง</th>
          <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">วันที่แจ้ง</th>
        </tr></thead>
        <tbody>${n.map((r,u)=>{const m=e?r:F(r.id),q=e?r.size:(m==null?void 0:m.size)||"—",K=e?r.updated_at:m==null?void 0:m.updated_at;return`<tr>
            <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${u+1}</td>
            ${e?"":`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${o(r.teacher_code)}</td>`}
            <td style="border:1px solid #cbd5e1;padding:4px 6px">${o(r.full_name)}</td>
            <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${o(q)}</td>
            <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${K?new Date(K).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</td>
          </tr>`}).join("")}</tbody>
      </table>
    </div>`},Xt=t=>{const e=rt(t);return e.length?`
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-slate-400 text-left bg-slate-50">
            <th class="p-2 font-bold">ห้อง</th><th class="p-2 font-bold">ครูที่ปรึกษา</th><th class="p-2 font-bold text-center">จำนวน</th>
            ${x==="size"?'<th class="p-2 font-bold text-center">นักเรียนแจ้งแล้ว</th><th class="p-2 font-bold text-center">ครูยืนยันแล้ว</th>':'<th class="p-2 font-bold text-center">ชำระแล้ว</th><th class="p-2 font-bold text-center">ยังไม่ชำระ</th>'}
          </tr></thead>
          <tbody>${e.map(({room:n,students:f})=>{const w=f.filter(u=>U(u).sizeReported).length,k=f.filter(u=>U(u).sizeOk).length,r=f.filter(u=>U(u).paid).length;return`<tr class="border-t border-slate-100">
              <td class="p-2 font-bold text-slate-700 whitespace-nowrap">${o(n)}<div class="mt-2">${O.roomButton(n)}</div></td>
              <td class="p-2 text-slate-600">${o(Q(n))}</td>
              <td class="p-2 text-center">${f.length}</td>
              ${x==="size"?`
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${w===f.length?"bg-emerald-100 text-emerald-700":"bg-amber-100 text-amber-700"}">${w} / ${f.length}</span></td>
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${k===f.length?"bg-emerald-100 text-emerald-700":"bg-amber-100 text-amber-700"}">${k} / ${f.length}</span></td>
              `:`
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">${r}</span></td>
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">${f.length-r}</span></td>
              `}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:'<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>'},D=()=>{if(b.querySelector("#shirt-standard-panel").classList.toggle("hidden",x==="handoff"),b.querySelector("#shirt-handoff-panel").classList.toggle("hidden",x!=="handoff"),b.querySelector("#shirt-genders").classList.toggle("hidden",x==="handoff"),b.querySelectorAll("[data-tab]").forEach(w=>{const k=w.dataset.tab===x;w.classList.toggle("bg-pink-600",k),w.classList.toggle("text-white",k)}),x==="handoff"){O.render();return}b.querySelector('[data-gender="UNKNOWN"]').classList.toggle("hidden",x!=="teacher"),b.querySelectorAll("[data-gender]").forEach(w=>{const k=w.dataset.gender===y;w.classList.toggle("bg-pink-600",k),w.classList.toggle("text-white",k)});const t=b.querySelector("#shirt-search");if(t.placeholder=x==="teacher"?"🔍 ค้นหาชื่อ...":"🔍 ค้นหาชื่อ/รหัส/ห้อง/สี — พิมพ์อะไรก็เจอ",t.value!==M&&(t.value=M),t.oninput=w=>{M=w.target.value,D()},x==="teacher"){b.querySelector("#level-filter-row").innerHTML="",Et(),Rt();return}b.querySelector("#role-filter-row").innerHTML="";const e=V(),n=y==="M"?"นักเรียนชาย":y==="W"?"นักเรียนหญิง":"นักเรียนทั้งหมด";b.querySelector("#scope-line").textContent=`${n} ${e.length} คน — กำลังแสดง ${tt().length} คนตามตัวกรองที่เลือก`,P(),pt(),bt(),Ct(),Nt();const f=tt();if(c==="summary")b.querySelector("#shirt-list").innerHTML=Xt(f);else{const w=rt(f);b.querySelector("#shirt-list").innerHTML=w.length?w.map(({room:k,students:r})=>`
        <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between gap-2 flex-wrap">
            <div><b class="text-sm">ห้อง ${o(k)}</b><span class="text-xs text-slate-500 ml-2">ครูที่ปรึกษา: ${o(Q(k))}</span></div>
            <span class="text-xs text-slate-500 font-bold">${r.length} คน</span>${O.roomButton(k)}
          </div>
          <table class="w-full text-xs">
            <thead><tr class="text-slate-400 text-left">
              <th class="p-2 font-bold">รหัส</th><th class="p-2 font-bold">ชื่อ-สกุล</th><th class="p-2 font-bold text-center">สี</th>
              ${x==="size"?'<th class="p-2 font-bold text-center">ไซซ์จำนง</th><th class="p-2 font-bold text-center">ไซซ์ยืนยัน</th><th class="p-2 font-bold text-center">สถานะไซซ์</th>':h?'<th class="p-2 font-bold text-center">สถานะชำระ</th><th class="p-2 font-bold text-right">จำนวนเงิน</th>':'<th class="p-2 font-bold text-center">สถานะชำระ</th>'}
            </tr></thead>
            <tbody>${r.sort((u,m)=>u.full_name.localeCompare(m.full_name,"th")).map(u=>{var K,g;const m=U(u),q=_.find(A=>A.id===u.team_color_id);return`<tr class="border-t border-slate-100">
                <td class="p-2 w-24 text-slate-500">${o(u.student_code)}</td>
                <td class="p-2">
                  <div class="flex items-center gap-2">
                    ${u.photo_url?`<img src="${o(u.photo_url)}" alt="" class="w-7 h-9 rounded-md object-cover border border-slate-200 bg-slate-100 flex-shrink-0 shadow-sm" loading="lazy">`:`<div class="w-7 h-9 rounded-md bg-slate-100 text-slate-400 grid place-items-center flex-shrink-0 border border-slate-200 text-[10px] font-bold">${o((u.full_name||"?").charAt(0))}</div>`}
                    <span>${o(u.full_name)}</span>
                  </div>
                </td>
                <td class="p-2 text-center"><span class="inline-flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:${o((q==null?void 0:q.hex_color)||"#94a3b8")}"></span>${o(u.color_name||"—")}</span></td>
                ${x==="size"?`
                  <td class="p-2 text-center">${o(((K=m.req)==null?void 0:K.requested_size)||"—")}</td>
                  <td class="p-2 text-center">${o(((g=m.req)==null?void 0:g.confirmed_size)||"—")}</td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${m.sizeOk?"bg-emerald-100 text-emerald-700":m.sizeStatus==="pending"?"bg-amber-100 text-amber-700":"bg-gray-100 text-gray-500"}">${o(yt(m.sizeStatus))}</span></td>
                `:h?z(u.gender)>0?`
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${m.paid?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}">${m.paid?"ชำระแล้ว":"ยังไม่ชำระ"}</span></td>
                  <td class="p-2 text-right">${m.paid?`${Number(m.pay.amount).toLocaleString("th-TH")} บาท`:"—"}</td>
                `:`
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">รอราคา</span></td>
                  <td class="p-2 text-right text-slate-400">—</td>
                `:'<td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">รอประกาศราคา</span></td>'}
              </tr>`}).join("")}</tbody>
          </table>
        </div>`).join(""):'<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>'}b.querySelector("#print-content").innerHTML=Ht()||'<p style="text-align:center;padding:40px">ไม่มีข้อมูลนักเรียน</p>'};b.querySelectorAll("[data-tab]").forEach(t=>t.onclick=()=>{x=t.dataset.tab,x!=="teacher"&&y==="UNKNOWN"&&(y="ALL"),i=null,v="all",L=!1,S.clear(),D()}),b.querySelectorAll("[data-gender]").forEach(t=>t.onclick=()=>{y=t.dataset.gender,E&&!Y().some(e=>e.id===E)&&(E=null),D()}),b.querySelector("#btn-export-csv").onclick=()=>{var K;const t=g=>`"${String(g||"").replaceAll('"','""')}"`,e=y==="M"?"ชาย":y==="W"?"หญิง":y==="UNKNOWN"?"ไม่ระบุเพศ":"ทั้งหมด",n=i?`-${i}`:"";if(x==="teacher"){const g=_t().sort((R,G)=>R.full_name.localeCompare(G.full_name,"th")),A=st==="personnel",a=A?["ชื่อ-สกุล","ไซซ์ที่แจ้ง","วันที่แจ้ง"]:["รหัส","ชื่อ-สกุล","ไซซ์ที่แจ้ง","วันที่แจ้ง"],p=A?g.map(R=>[R.full_name,R.size||"",R.updated_at?new Date(R.updated_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""].map(t).join(",")):g.map(R=>{const G=F(R.id);return[R.teacher_code,R.full_name,(G==null?void 0:G.size)||"",G!=null&&G.updated_at?new Date(G.updated_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""].map(t).join(",")}),j=[a.map(t).join(","),...p],X=document.createElement("a");X.href=URL.createObjectURL(new Blob(["\uFEFF"+j.join(`
`)],{type:"text/csv"})),X.download=`ไซซ์เสื้อ${A?"บุคลากร":"ครู"}-${e}${n}.csv`,X.click(),URL.revokeObjectURL(X.href);return}const f=tt().sort(Jt),w=E?`-${((K=_.find(g=>g.id===E))==null?void 0:K.name)||""}`:"",k=J?`-ชั้น${J}`:"";if(c==="summary"){const g=rt(f),A=x==="size"?["ห้อง","ครูที่ปรึกษา","จำนวน","นักเรียนแจ้งแล้ว","ครูยืนยันแล้ว"]:["ห้อง","ครูที่ปรึกษา","จำนวน","ชำระแล้ว","ยังไม่ชำระ"],a=g.map(({room:X,students:R})=>{if(x==="size"){const ot=R.filter(gt=>U(gt).sizeReported).length,mt=R.filter(gt=>U(gt).sizeOk).length;return[X,Q(X),R.length,ot,mt].map(t).join(",")}const G=R.filter(ot=>U(ot).paid).length;return[X,Q(X),R.length,G,R.length-G].map(t).join(",")}),p=[A.map(t).join(","),...a],j=document.createElement("a");j.href=URL.createObjectURL(new Blob(["\uFEFF"+p.join(`
`)],{type:"text/csv"})),j.download=`สรุปตามห้อง-${x==="size"?"ไซซ์เสื้อ":"ค่าเสื้อ"}กีฬาสี-${e}${w}${k}${n}.csv`,j.click(),URL.revokeObjectURL(j.href);return}const r=x==="size"?["ห้อง","ครูที่ปรึกษา","รหัส","ชื่อ-สกุล","สี","ไซซ์ที่จำนง","ไซซ์ที่ยืนยัน","สถานะไซซ์"]:["ห้อง","ครูที่ปรึกษา","รหัส","ชื่อ-สกุล","สี","สถานะชำระ","วันที่ชำระ","จำนวนเงิน","วิธีชำระ"],u=f.map(g=>{var X,R;const A=U(g);if(x==="size")return[g.main_room,Q(g.main_room),g.student_code,g.full_name,g.color_name,((X=A.req)==null?void 0:X.requested_size)||"",((R=A.req)==null?void 0:R.confirmed_size)||"",yt(A.sizeStatus)].map(t).join(",");const a=z(g.gender)<=0?"รอประกาศราคา":A.paid?"ชำระแล้ว":"ยังไม่ชำระ",p=A.paid?new Date(A.pay.paid_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"",j=A.paid?A.pay.method==="qr"?"สแกน QR":"กรอกรหัส":"";return[g.main_room,Q(g.main_room),g.student_code,g.full_name,g.color_name,a,p,A.paid?Number(A.pay.amount):"",j].map(t).join(",")}),m=[r.map(t).join(","),...u],q=document.createElement("a");q.href=URL.createObjectURL(new Blob(["\uFEFF"+m.join(`
`)],{type:"text/csv"})),q.download=`${x==="size"?"ไซซ์เสื้อ":"ค่าเสื้อ"}กีฬาสี-${e}${w}${k}${n}.csv`,q.click(),URL.revokeObjectURL(q.href)},b.querySelector("#btn-print").onclick=()=>window.print(),D()}async function Zt(){let s;try{s=sessionStorage.getItem($t)}catch{}if(s)try{const l=await wt(s);Mt(l,s);return}catch{try{sessionStorage.removeItem($t)}catch{}}Pt(Mt)}Zt();
