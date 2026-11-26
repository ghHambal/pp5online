const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-vSXCr5aV.js","assets/supabase-BV-W2lsh.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/student-views-XU2YRhG1.js","assets/ui-DU3V9L7w.js","assets/score-display-EKXBehKd.js","assets/student-api-BCYhD7hm.js","assets/assignment-annotations-api-Y9qfMpYa.js","assets/teacher-views-utils-PYNJrmMY.js","assets/student-leave-api-BitSRDUl.js","assets/student-leave-proof-viewer-DXpl66O1.js","assets/student-password-reset-api-Ath5foA7.js","assets/theme-qDnPEUQn.js","assets/quiz-api-MXSuDZbX.js","assets/leave-time-CrS9gT63.js","assets/storage-CuUjCgvI.js","assets/version.js_v_10.22-CSCTNcuM.js","assets/browser-JP79f-a9.js","assets/regrade-menu-window-DuuFB9GJ.js","assets/certificate-engine-Bn4Xdc-e.js","assets/print-overlay-BVfxEd6n.js","assets/academic-term-switcher-DBo10kez.js"])))=>i.map(i=>d[i]);
import{a as H,h as Se,g as ae,_ as ue,n as Je}from"./ui-DU3V9L7w.js";import{cK as he,c as we,cF as Ge,c9 as fe,bS as He,cL as Pe,cM as Fe,cN as Ze,cO as Xe,cP as et,cQ as tt,cR as st,cS as Be,cJ as ke,b as $e,cT as at,cU as nt,cV as rt,cW as ot,cX as lt,aF as dt,c1 as ze,cY as it,b0 as ct,cZ as ut,aG as xt,c_ as pt,c$ as mt,d0 as bt,d1 as De}from"./api-vSXCr5aV.js";import{s as Ee}from"./supabase-BV-W2lsh.js";import{f as gt}from"./leave-time-CrS9gT63.js";import{_htmlEsc as Y,_fmtDate as de,ATT_STATUS as ie,setActiveNav as xe,setTitle as pe,setContent as ne,_generateSessions as ye,ATT_CYCLE as _e,applyReadingGradesFromConfig as ft,_dateInputValue as Ve,_readingGrade as yt}from"./teacher-views-utils-PYNJrmMY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";const Ne=Object.keys(ie);function ht({classData:t,students:a,sessions:r,holidaySet:v,attMap:p,saveClassId:f,saveSessN:j,onSaved:I}){var k;const T=r.filter(s=>!v.has(s.ds));if(!T.length){H("ไม่มีคาบที่ใช้เช็คชื่อได้ในห้องนี้","warning");return}const d=document.createElement("div");d.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-3 sm:p-5",d.innerHTML=`
    <section class="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[94vh] flex flex-col overflow-hidden">
      <header class="px-5 py-4 border-b flex items-start justify-between gap-4">
        <div><h2 class="text-xl font-bold text-gray-900">🤖 ช่วยเช็คชื่อด้วย AI</h2>
          <p class="text-sm text-gray-500 mt-1">เลือกหลายคาบและนักเรียน → คัดลอกคำสั่งไปให้ AI → วางผลเพื่อตรวจรายคนก่อนบันทึก</p></div>
        <button type="button" data-close class="text-gray-500 hover:text-gray-800 text-2xl leading-none" aria-label="ปิด">×</button>
      </header>
      <div class="p-5 overflow-y-auto space-y-5">
        <section>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 class="font-semibold text-gray-700">เลือกคาบเรียน <span data-session-count class="text-gray-400 font-normal"></span></h3>
            <div class="flex gap-3 text-sm"><button type="button" data-session-all class="text-emerald-700 font-semibold">เลือกทุกคาบ</button><button type="button" data-session-none class="text-gray-500">ล้างที่เลือก</button></div>
          </div>
          <div data-sessions class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1 max-h-40 overflow-y-auto rounded-lg border p-3">
            ${T.map((s,e)=>`<label class="flex items-center gap-2 py-1 text-sm"><input data-session type="checkbox" value="${s.n}" ${e===0?"checked":""} class="rounded text-emerald-600"><span>คาบ ${s.n} · ${Y(de(s.date))} (${Y(s.ds)})</span></label>`).join("")}
          </div>
          <div class="text-sm text-gray-500 mt-2">${Y(((k=t.master_subjects)==null?void 0:k.subject_name)??"วิชา")} · ${Y(t.class_name??"")}</div>
        </section>

        <section>
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold text-gray-800">เลือกนักเรียน <span data-count class="text-gray-400 font-normal"></span></h3>
            <div class="flex gap-3 text-sm"><button type="button" data-select-all class="text-emerald-700 font-semibold">เลือกทั้งหมด</button><button type="button" data-select-none class="text-gray-500">ล้างที่เลือก</button></div>
          </div>
          <div data-roster class="grid sm:grid-cols-2 gap-x-5 gap-y-1 max-h-44 overflow-y-auto rounded-lg border p-3">
            ${a.map(s=>`<label class="flex items-center gap-2 py-1 text-sm"><input data-student type="checkbox" value="${Y(s.id)}" checked class="rounded text-emerald-600"><span>${Y(s.student_code??"")} · ${Y(s.full_name??"")}</span></label>`).join("")}
          </div>
        </section>

        <label class="block text-sm font-semibold text-gray-700">ข้อมูลที่ใช้ประกอบการเช็คชื่อ
          <textarea data-evidence rows="3" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal" placeholder="เช่น จากภาพใบเช็คชื่อที่แนบให้ AI: เครื่องหมาย ✓ คือมา, ข คือขาด, ส คือสาย"></textarea>
        </label>
        <div class="flex flex-wrap items-center gap-3">
          <button type="button" data-copy-prompt class="rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 font-semibold">✨ คัดลอกคำสั่งให้ AI</button>
          <span class="text-xs text-gray-500">นำคำสั่งไปใช้กับ AI พร้อมแนบหลักฐาน แล้วขอผลเป็น JSON ตามรูปแบบที่ระบุ</span>
        </div>
        <textarea data-prompt readonly rows="5" class="hidden w-full rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 font-mono text-xs"></textarea>
        <label class="block text-sm font-semibold text-gray-700">วางผลจากกล่องโค้ด AI (JSON)
          <textarea data-json rows="5" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-mono text-sm" placeholder='&#96;&#96;&#96;json&#10;[{"student_code":"26056","session_number":1,"status":"present"}]&#10;&#96;&#96;&#96;'></textarea>
        </label>
        <div class="flex items-center gap-3">
          <button type="button" data-preview class="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 font-semibold">🔎 ตรวจผลและแสดงตัวอย่าง</button>
          <span data-error class="text-sm text-red-600"></span>
        </div>
        <section data-preview-panel class="hidden space-y-3">
          <div class="flex flex-wrap justify-between items-center gap-2"><h3 class="font-bold text-gray-800">ตัวอย่างสถานะรายคน</h3><span data-preview-summary class="text-sm text-gray-500"></span></div>
          <div class="max-h-72 overflow-auto border rounded-lg">
            <table class="w-full text-sm"><thead class="sticky top-0 bg-gray-100"><tr><th class="p-2">คาบ / วันที่</th><th class="p-2 text-left">รหัส / ชื่อ</th><th class="p-2">สถานะเดิม</th><th class="p-2">สถานะที่จะบันทึก</th></tr></thead><tbody data-preview-rows></tbody></table>
          </div>
          <label data-overwrite-row class="hidden flex items-start gap-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900"><input data-overwrite type="checkbox" class="mt-0.5"><span>อนุญาตเขียนทับสถานะเดิมในคาบที่เลือก เฉพาะรายการที่ครูเลือกสถานะใหม่</span></label>
        </section>
      </div>
      <footer class="px-5 py-4 border-t flex justify-end gap-2">
        <button type="button" data-close class="px-4 py-2 rounded-lg border text-gray-600">ปิด</button>
        <button type="button" data-save disabled class="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold disabled:opacity-40">ตรวจและบันทึกเช็คชื่อ</button>
      </footer>
    </section>`,document.body.append(d);const o=s=>d.querySelector(s),S=()=>[...d.querySelectorAll("[data-student]")],R=()=>[...d.querySelectorAll("[data-session]")],w=()=>R().filter(s=>s.checked).map(s=>T.find(e=>e.n===Number(s.value))).filter(Boolean),q=()=>S().filter(s=>s.checked).map(s=>a.find(e=>String(e.id)===s.value)).filter(Boolean),$=()=>{o("[data-count]").textContent=`(${q().length}/${a.length} คน)`},x=()=>{o("[data-session-count]").textContent=`(${w().length}/${T.length} คาบ)`},i=()=>{o("[data-preview-panel]").classList.add("hidden"),o("[data-save]").disabled=!0},y=()=>d.remove();d.querySelectorAll("[data-close]").forEach(s=>s.addEventListener("click",y)),d.addEventListener("click",s=>{s.target===d&&y()}),S().forEach(s=>s.addEventListener("change",()=>{$(),i()})),o("[data-select-all]").addEventListener("click",()=>{S().forEach(s=>{s.checked=!0}),$(),i()}),o("[data-select-none]").addEventListener("click",()=>{S().forEach(s=>{s.checked=!1}),$(),i()}),R().forEach(s=>s.addEventListener("change",()=>{x(),i()})),o("[data-session-all]").addEventListener("click",()=>{R().forEach(s=>{s.checked=!0}),x(),i()}),o("[data-session-none]").addEventListener("click",()=>{R().forEach(s=>{s.checked=!1}),x(),i()}),o("[data-json]").addEventListener("input",i),$(),x(),o("[data-copy-prompt]").addEventListener("click",async()=>{var N;const s=q(),e=w();if(!s.length){H("เลือกนักเรียนอย่างน้อย 1 คนก่อน","warning");return}if(!e.length){H("เลือกคาบเรียนอย่างน้อย 1 คาบก่อน","warning");return}const l=s.map(n=>String(n.student_code??""));if(new Set(l).size!==l.length||l.some(n=>!n)){H("รหัสนักเรียนว่างหรือซ้ำ ทำให้ AI ระบุคนไม่ชัดเจน","error");return}const _=o("[data-evidence]").value.trim(),b=s.map(n=>({student_code:String(n.student_code??""),name:n.full_name??""})),B=e.map(n=>({session_number:n.n,date:n.ds})),A="`".repeat(3),u=`ช่วยประเมินสถานะการเข้าเรียนจากหลักฐานที่แนบ โดยใช้ข้อมูลประกอบต่อไปนี้เท่านั้น: ${_||"(ครูจะให้คำอธิบายพร้อมหลักฐาน โดยระบุให้ชัดว่าหลักฐานตรงกับวันหรือคาบใด)"}
วิชา: ${((N=t.master_subjects)==null?void 0:N.subject_name)??""} ห้อง: ${t.class_name??""}
คาบที่ต้องประเมิน:
${JSON.stringify(B,null,2)}
รายชื่อนักเรียนที่ต้องประเมิน:
${JSON.stringify(b,null,2)}

คืนคำตอบเป็น JSON array เท่านั้น หนึ่งรายการต่อรหัสนักเรียนและคาบ ในรูปแบบ [{"student_code":"รหัส","session_number":1,"status":"present"}] โดย session_number ต้องเป็นเลขคาบจากรายการที่เลือก ใช้ status ได้เฉพาะ present=มา, absent=ขาด, late=สาย, excused=ลากิจ, sick=ป่วย; ถ้าหลักฐานระบุไม่ได้ให้ใช้ null ห้ามเดาหรืออนุมาน ห้ามใส่รหัสหรือคาบนอกบัญชีที่ให้มา

บังคับรูปแบบคำตอบ: ใส่ JSON ทั้งหมดไว้ใน Markdown code block ที่เปิดด้วย ${A}json และปิดด้วย ${A} เท่านั้น ห้ามมีข้อความ คำอธิบาย หรืออักขระใดอยู่นอก code block ตัวอย่าง:
${A}json
[{"student_code":"26056","session_number":1,"status":"present"}]
${A}`;try{await navigator.clipboard.writeText(u),H("คัดลอกคำสั่งแล้ว แนบหลักฐานให้ AI และขอคำตอบเป็น JSON ได้เลย","success")}catch{o("[data-prompt]").value=u,o("[data-prompt]").classList.remove("hidden"),o("[data-prompt]").focus(),o("[data-prompt]").select(),H("คัดลอกคำสั่งจากช่องสีม่วงด้วยตนเอง แล้วนำไปให้ AI","warning")}}),o("[data-preview]").addEventListener("click",()=>{const s=o("[data-error]");s.textContent="",o("[data-save]").disabled=!0,o("[data-preview-panel]").classList.add("hidden");const e=q();if(!e.length){s.textContent="เลือกนักเรียนอย่างน้อย 1 คน";return}const l=w();if(!l.length){s.textContent="เลือกคาบเรียนอย่างน้อย 1 คาบ";return}const _=e.map(h=>String(h.student_code??""));if(_.some(h=>!h)||new Set(_).size!==_.length){s.textContent="รายชื่อที่เลือกมีรหัสว่างหรือซ้ำ จึงแยกผลรายคนไม่ได้";return}let b;try{const h=o("[data-json]").value.trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,"");b=JSON.parse(h)}catch{s.textContent="JSON ไม่ถูกต้อง กรุณาตรวจรูปแบบแล้วลองใหม่";return}if(!Array.isArray(b)){s.textContent="ผลลัพธ์ต้องเป็น JSON array";return}const B=new Map(e.map(h=>[String(h.student_code??""),h])),A=new Map(l.map(h=>[h.n,h])),u=new Map,N=[];if(b.forEach(h=>{const O=String((h==null?void 0:h.student_code)??""),c=Number(h==null?void 0:h.session_number),g=A.get(c),E=`${c}::${O}`;if(!B.has(O)){N.push(`ไม่พบรหัส ${O||"(ว่าง)"}`);return}if(!g){N.push(`คาบ ${(h==null?void 0:h.session_number)??"(ว่าง)"} ไม่ได้เลือกหรือไม่มีในห้อง`);return}if(u.has(E)){N.push(`รหัส ${O} คาบ ${c} ซ้ำ`);return}if(h.status!==null&&h.status!==""&&!Ne.includes(h.status)){N.push(`สถานะของ ${O} ไม่ถูกต้อง`);return}u.set(E,{status:h.status||null,session:g})}),N.length){s.textContent=N.slice(0,3).join(" · ");return}if(!b.length){s.textContent="ไม่พบผลประเมิน";return}const n=l.flatMap(h=>e.map(O=>{var V;const c=String(O.student_code??""),g=`${h.n}::${c}`,E=u.get(g);return{student:O,session:h,key:g,proposed:(E==null?void 0:E.status)??null,hasResult:u.has(g),current:((V=p[O.id])==null?void 0:V[h.n])??null}})),L=n.map(h=>{var z;const{student:O,session:c,key:g,proposed:E,hasResult:V,current:W}=h,F=W?`${((z=ie[W])==null?void 0:z.label)??W} (${W})`:"ยังไม่บันทึก",P=E??"";return`<tr class="border-t"><td class="p-2 text-center whitespace-nowrap">คาบ ${c.n}<br><span class="text-xs text-gray-500">${Y(c.ds)}</span></td><td class="p-2">${Y(O.student_code??"")} · ${Y(O.full_name??"")}</td><td class="p-2 text-center">${Y(F)}</td><td class="p-2"><select data-proposal data-code="${Y(O.student_code??"")}" data-session-number="${c.n}" class="w-full rounded border border-gray-300 px-2 py-1"><option value="">ไม่เปลี่ยนแปลง${V?" (AI ระบุไม่ชัด)":" (ไม่มีผลจาก AI)"}</option>${Ne.map(J=>`<option value="${J}" ${P===J?"selected":""}>${ie[J].label} · ${J}</option>`).join("")}</select></td></tr>`}).join("");o("[data-preview-rows]").innerHTML=L,o("[data-preview-summary]").textContent=`${l.length} คาบ · ${e.length} คน · ได้ผล ${u.size}/${n.length} รายการ · ไม่มีผล/ไม่ชัดเจนจะไม่เปลี่ยนข้อมูลเดิม`;const m=n.some(h=>h.current!=null);o("[data-overwrite-row]").classList.toggle("hidden",!m),o("[data-overwrite]").checked=!1,o("[data-preview-panel]").classList.remove("hidden"),o("[data-save]").disabled=!0;const M=()=>{const h=[...d.querySelectorAll("[data-proposal]")].some(O=>{var g;const c=B.get(O.dataset.code);return O.value&&O.value!==(((g=p[c==null?void 0:c.id])==null?void 0:g[Number(O.dataset.sessionNumber)])??"")});o("[data-save]").disabled=!h};d.querySelectorAll("[data-proposal]").forEach(h=>h.addEventListener("change",M)),o("[data-overwrite]").addEventListener("change",M),M()}),o("[data-save]").addEventListener("click",async()=>{const s=q(),e=new Map(s.map(B=>[String(B.student_code??""),B])),l=[...d.querySelectorAll("[data-proposal]")].map(B=>{var n;const A=e.get(B.dataset.code),u=T.find(L=>L.n===Number(B.dataset.sessionNumber));if(!A||!u)return null;const N=((n=p[A.id])==null?void 0:n[u.n])??null;return B.value&&B.value!==N?{student:A,session:u,status:B.value,current:N}:null}).filter(Boolean);if(!l.length){H("ไม่มีสถานะใหม่ที่ต้องบันทึก","warning");return}const _=l.filter(B=>B.current);if(_.length&&!o("[data-overwrite]").checked){H("มีสถานะเดิม กรุณาติ๊กอนุญาตเขียนทับก่อนบันทึก","warning");return}if(await Se({title:"ตรวจยืนยันการบันทึกเช็คชื่อ",message:`จะบันทึก ${l.length} รายการ ใน ${new Set(l.map(B=>B.session.n)).size} คาบ${_.length?` และเขียนทับสถานะเดิม ${_.length} รายการ`:""}`,detail:"ระบบจะบันทึกเฉพาะสถานะที่แสดงในตัวอย่างและครูตรวจแล้ว ส่วนที่ AI ระบุไม่ชัดหรือไม่มีผลจะคงข้อมูลเดิม",confirmText:"บันทึกเช็คชื่อ"}))try{await he(l.map(B=>({class_id:f,student_id:B.student.id,session_number:j(B.session.n),check_date:B.session.ds,status:B.status}))),H(`บันทึกเช็คชื่อสำเร็จ ${l.length} คน`,"success"),y(),I==null||I()}catch(B){H("บันทึกไม่สำเร็จ: "+ae(B),"error")}})}const ve=`
  <svg aria-hidden="true" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`,Te=`
  <svg aria-hidden="true" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`;async function ce(t,a){var p,f,j,I,T,d,o,S;xe("attendance"),pe("เช็คชื่อ","attendance");const r=a.master_subjects,v=(r==null?void 0:r.credit)??1;ne(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-emerald-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดข้อมูล...
  </div>`);try{const{getSystemConfig:R,getClassSessionDOWs:w}=await ue(async()=>{const{getSystemConfig:C,getClassSessionDOWs:D}=await import("./api-vSXCr5aV.js").then(K=>K.eB);return{getSystemConfig:C,getClassSessionDOWs:D}},__vite__mapDeps([0,1,2,3])),q=await R().catch(()=>({})),$=q.academicYear??q.academic_year??new Date().getFullYear()+543,x=q.semester??1,i=a.source_class_id??null,[y,k,s,e,l,_]=await Promise.all([He(a.id),Pe(i??a.id),Fe($,x),w(a.id).catch(()=>[]),Ze(a.id).catch(()=>[]),Xe(a.id,{week:"current"}).catch(()=>[])]);let b=await et(a.id).catch(()=>3),B=await tt(a.id).catch(()=>2);const A=(r==null?void 0:r.subject_group)==="ACDMVOC",u=ye(a,v,e.length?e:null,A),N=new Set(s),n={};l.forEach(C=>{n[C.student_id]=C});const L={};_.forEach(C=>{L[C.student_id]=(L[C.student_id]||0)+1});const m={},M=new Map;if(i){const{getMyClasses:C}=await ue(async()=>{const{getMyClasses:Q}=await import("./api-vSXCr5aV.js").then(X=>X.eB);return{getMyClasses:Q}},__vite__mapDeps([0,1,2,3])),D=A&&e.length?e.length:Math.max(1,Math.round(v*2));let K=D;try{const Q=A?await w(i).catch(()=>[]):[];if(Q.length)K=Q.length;else{const ee=(await C(null).catch(()=>[])).find(Z=>Number(Z.id)===Number(i));(p=ee==null?void 0:ee.master_subjects)!=null&&p.credit&&(K=Math.max(1,Math.round(ee.master_subjects.credit*2)))}}catch{}const U=u.length;for(let Q=1;Q<=U;Q++){const X=Math.floor((Q-1)/D),ee=(Q-1)%D,Z=X*K+ee+1;M.set(Q,Z);for(const te of k)te.session_number===Z&&(m[te.student_id]||(m[te.student_id]={}),m[te.student_id][Q]=te.status)}}else for(const C of k)m[C.student_id]||(m[C.student_id]={}),m[C.student_id][C.session_number]=C.status;const h=i??a.id,O=C=>M.get(C)??C,c=k.filter(C=>{const D=u.find(K=>K.n===C.session_number);return D&&N.has(D.ds)}),g=38,E=160,V="border border-gray-200 text-center text-xs select-none",W="sticky left-0 z-20 bg-white border border-gray-200",F="sticky z-20 bg-white border border-gray-200";ne(`
    <div class="flex flex-col h-screen overflow-hidden animate-fade">
      <!-- Top bar -->
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')"
          class="text-sm text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-1">
          ← กลับ
        </button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${(r==null?void 0:r.subject_name)??"—"}</h2>
          <p class="text-xs text-gray-400">${a.class_name} · ${v} หน่วยกิต · ${u.length} คาบ/เทอม</p>
        </div>
        <div class="flex gap-2 text-xs flex-shrink-0 items-center">
          <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg hidden sm:inline">ม=มา</span>
          <span class="px-2 py-1 bg-red-50 text-red-600 rounded-lg hidden sm:inline">ข=ขาด</span>
          <span class="px-2 py-1 bg-amber-50 text-amber-500 rounded-lg hidden sm:inline">ส=สาย</span>
          <span class="px-2 py-1 bg-blue-50 text-blue-500 rounded-lg hidden sm:inline">ก=กิจ</span>
          <span class="px-2 py-1 bg-orange-50 text-orange-500 rounded-lg hidden sm:inline">ป=ป่วย</span>
          <button id="btn-att-stats"
            class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-medium
                   hover:bg-indigo-700 transition flex items-center gap-1">
            📊 <span class="hidden sm:inline">สถิติ</span>
          </button>
          <button id="btn-att-check-all"
            class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-medium
                   hover:bg-emerald-700 transition flex items-center gap-1">
            ✅ <span class="hidden sm:inline">เช็คทั้งหมด</span>
          </button>
          <button id="btn-att-ai"
            class="px-3 py-1.5 bg-violet-600 text-white rounded-lg font-medium
                   hover:bg-violet-700 transition flex items-center gap-1"
            title="ให้ AI ช่วยอ่านหลักฐาน แล้วตรวจสถานะรายคนก่อนบันทึก">
            🤖 <span class="hidden sm:inline">AI เช็คชื่อ</span>
          </button>
          <button id="btn-leave-quota"
            class="px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-lg font-semibold
                   hover:bg-amber-100 transition flex items-center gap-1">
            🚪 <span class="hidden sm:inline">โควต้า</span> <span id="leave-quota-label">${Object.keys(n).length}/${b}</span>
          </button>
          <button id="btn-att-import-studentcare-bulk"
            class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-medium
                   hover:bg-indigo-700 transition flex items-center gap-1"
            title="นำเข้าเช็คชื่อจากระบบดูแลทีเดียวหลายวัน (ต้องกดส่งจากหน้าระบบดูแลของแต่ละวันมาก่อน)">
            📥 <span class="hidden sm:inline">ระบบดูแล (หลายวัน)</span>
          </button>
          <button id="btn-att-studentcare-help" type="button"
            class="px-2 py-1.5 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition flex items-center"
            title="วิธีติดตั้งปุ่มดึงเช็คชื่อจากระบบดูแล (ครั้งแรกเท่านั้น)">
            ❓
          </button>
        </div>
      </div>
      ${c.length>0?`
      <!-- Holiday attendance banner -->
      <div class="flex items-center justify-between gap-3 px-4 py-2 bg-red-50 border-b border-red-100 text-xs text-red-700 flex-shrink-0">
        <span>⚠️ พบข้อมูลเช็คชื่อ ${c.length} รายการในคาบที่ตรงกับวันหยุด (คอลัมน์สีแดง)</span>
        <button id="btn-clear-holiday-att"
          class="px-3 py-1.5 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition flex-shrink-0">
          🗑️ ลบข้อมูลนี้
        </button>
      </div>`:""}
      <!-- Saving indicator -->
      <div id="att-saving" class="hidden fixed top-16 right-4 z-50
        bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
        💾 กำลังบันทึก...
      </div>
      <!-- Grid wrapper -->
      <div class="flex-1 overflow-auto" id="att-grid-wrap">
        ${y.length?`<table class="border-collapse text-xs" style="min-width: max-content">
          <thead>
            <!-- Row 1: dates (clickable) -->
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${W} bg-emerald-50/60" style="width:32px"></th>
              <th class="${F} bg-emerald-50/60" style="left:32px;width:72px"></th>
              <th class="${F} bg-emerald-50/60 text-left px-2" style="left:104px;min-width:${E}px">
                <span class="text-[10px] text-emerald-600 font-medium">✏️ กดวันที่เพื่อเช็คชื่อ</span>
              </th>
              ${u.map(C=>{const D=N.has(C.ds);return`<th class="${V} p-0 cursor-pointer att-date-th ${D?"bg-red-100 hover:bg-red-200":"bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200"}"
                  data-open-session="${C.n}" data-date="${C.ds}"
                  style="width:${g}px;min-width:${g}px" title="คลิกเพื่อเช็คชื่อ ${C.ds}">
                  <div class="flex flex-col items-center justify-center py-1 gap-0 ${D?"text-red-400":"text-emerald-700"}">
                    <span class="text-[9px] leading-none">${D?"🔴":"✏️"}</span>
                    <span class="text-[11px] font-semibold leading-tight">${de(C.date)}</span>
                  </div>
                </th>`}).join("")}
            </tr>
            <!-- Row 2: session numbers -->
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${W} bg-gray-100 font-semibold text-gray-500" style="width:32px">#</th>
              <th class="${F} bg-gray-100 font-semibold text-gray-500" style="left:32px;width:72px">รหัส</th>
              <th class="${F} bg-gray-100 font-semibold text-gray-500 text-left px-2"
                style="left:104px;min-width:${E}px">ชื่อ-นามสกุล</th>
              ${u.map(C=>{const D=N.has(C.ds);return`<th class="${V} ${D?"bg-red-50 text-red-300":"bg-gray-100 text-gray-500"}"

                  style="width:${g}px;min-width:${g}px">${C.n}</th>`}).join("")}
            </tr>
          </thead>
          <tbody>
            ${y.map((C,D)=>{const K=(C.full_name??"?").charAt(0);return`<tr class="hover:bg-gray-50 transition" data-sid="${C.id}">
                <td class="${W} text-center text-gray-400" style="width:32px">${D+1}</td>
                <td class="${F} text-center font-mono text-gray-600" style="left:32px;width:72px">${C.student_code}</td>
                <td class="${F} px-2 student-name-cell cursor-pointer hover:bg-emerald-50"
                  style="left:104px;min-width:${E}px" title="คลิกดูสถิติรายบุคคล">
                  <div class="flex items-center gap-1.5 py-1">
                    ${C.image_url?`<img src="${C.image_url}" class="w-8 h-8 object-cover rounded border flex-shrink-0" />`:'<div class="w-8 h-8 rounded border bg-gray-100 flex items-center justify-center flex-shrink-0 text-sm">👤</div>'}
                    <div class="flex flex-col min-w-0">
                      <span class="text-gray-800 text-xs truncate max-w-[105px] font-semibold">${C.full_name}</span>
                      ${vt(C,n,L,B)}
                    </div>
                  </div>
                </td>
                ${u.map(U=>{var Z;const Q=((Z=m[C.id])==null?void 0:Z[U.n])??null,X=Q?ie[Q]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    att-cell ${N.has(U.ds)?"bg-red-50":"hover:bg-gray-100"} ${X?X.bg:""}"
                    data-sid="${C.id}" data-session="${U.n}" data-date="${U.ds}"
                    style="width:${g}px;min-width:${g}px;height:32px">
                    ${X?`<span class="${X.color}">${X.label}</span>`:""}
                  </td>`}).join("")}
              </tr>`}).join("")}
          </tbody>
        </table>`:`<div class="p-16 text-center text-gray-400">
               <p class="text-4xl mb-3">👦</p>
               <p>ยังไม่มีนักเรียนในห้องนี้</p>
             </div>`}
      </div>
    </div>`);const P=document.getElementById("att-grid-wrap");if(!P)return;(f=document.getElementById("btn-att-stats"))==null||f.addEventListener("click",()=>{_t(a,y,u,m,N)}),(j=document.getElementById("btn-att-check-all"))==null||j.addEventListener("click",()=>{if(!u.length){H("ห้องนี้ยังไม่มีคาบเรียนให้เช็คชื่อ","warning");return}$t({students:y,sessions:u,attMap:m,holidaySet:N,saveClassId:h,saveSessN:O,onDone:()=>ce(t,a)})}),(I=document.getElementById("btn-att-ai"))==null||I.addEventListener("click",()=>{ht({classData:a,students:y,sessions:u,holidaySet:N,attMap:m,saveClassId:h,saveSessN:O,onSaved:()=>ce(t,a)})});const z=()=>{wt(a,b,B,()=>{ce(t,a)})};(T=document.getElementById("btn-leave-quota"))==null||T.addEventListener("click",z),(d=document.getElementById("btn-att-studentcare-help"))==null||d.addEventListener("click",Et),(o=document.getElementById("btn-att-import-studentcare-bulk"))==null||o.addEventListener("click",async()=>{const C=Le(y,a);if(!C){H("หาห้องเรียนหลักของนักเรียนกลุ่มนี้ไม่เจอ","error");return}const D=Ye(y,a,C),K=(window._pp5DonorTierIndex??0)>=2,U=Ce(t==null?void 0:t.id,C,K);if(!U.allowed){Ie(U.claimedRoom,C);return}!K&&!U.claimedRoom&&je(t==null?void 0:t.id,C);let Q;try{Q=await st(C,D)}catch(Z){H("ดึงข้อมูลไม่สำเร็จ: "+ae(Z),"error");return}if(!Q.length){H(`ยังไม่มีข้อมูลจากระบบดูแลสำหรับห้อง ${C} เลย — ไปกดส่งข้อมูลจากหน้าระบบดูแลก่อน`,"warning");return}const X={};Q.forEach(Z=>{var te;(X[te=Z.check_date]??(X[te]=[])).push(Z)});const ee=Object.keys(X).sort().map(Z=>{const te=u.filter(oe=>oe.ds===Z).map(oe=>oe.n),re={};X[Z].forEach(oe=>{(!re[oe.student_code]||oe.main_room===C)&&(re[oe.student_code]=oe)});const le=y.map(oe=>({student:oe,staged:re[oe.student_code]})).filter(oe=>oe.staged),me=te.length?le.some(({student:oe})=>te.some(Me=>{var be;return((be=m[oe.id])==null?void 0:be[Me])!=null})):!1;return{date:Z,ns:te,matched:le,isHoliday:N.has(Z),hasExisting:me}}).filter(Z=>Z.matched.length>0);if(!ee.length){H("มีข้อมูลจากระบบดูแล แต่ไม่ตรงกับรหัสนักเรียนในห้องนี้เลยสักคน","error");return}It(ee,async Z=>{const te=[];if(Z.forEach(re=>{re.ns.forEach(le=>{re.matched.forEach(({student:me,staged:oe})=>{te.push({class_id:h,student_id:me.id,session_number:O(le),check_date:re.date,status:oe.status})})})}),!!te.length)try{await he(te),H(`นำเข้าและบันทึกสำเร็จ ${te.length} รายการ (${Z.length} วัน) ✅`,"success"),ce(t,a)}catch(re){H("บันทึกไม่สำเร็จ: "+ae(re),"error")}})}),P.addEventListener("click",C=>{C.target.closest(".btn-leave-quota-badge")&&z()}),(S=document.getElementById("btn-clear-holiday-att"))==null||S.addEventListener("click",async()=>{const C=[...new Set(c.map(K=>{var U;return(U=u.find(Q=>Q.n===K.session_number))==null?void 0:U.ds}).filter(Boolean))].sort();await Se({title:"ลบข้อมูลเช็คชื่อในวันหยุด",message:`พบข้อมูลเช็คชื่อ ${c.length} รายการ ในคาบที่ตรงกับวันหยุดโรงเรียน (${C.join(", ")})`,detail:"คาบเหล่านี้ถูกล็อกไม่ให้แก้ไข ข้อมูลเก่าที่ค้างอยู่จะถูกลบออกถาวรและไม่สามารถกู้คืนได้",confirmText:"ลบข้อมูลนี้"})&&(await Promise.all(c.map(K=>Be(a.id,K.student_id,K.session_number,null,null))),H(`ลบข้อมูลเช็คชื่อในวันหยุดเรียบร้อย ${c.length} รายการ`,"success"),ce(t,a))}),P.addEventListener("click",C=>{var Q;if(C.target.closest(".btn-request-leave")||C.target.closest(".leave-badge"))return;const D=C.target.closest(".student-name-cell");if(!D)return;const K=parseInt((Q=D.closest("[data-sid]"))==null?void 0:Q.dataset.sid),U=y.find(X=>X.id===K);U&&Rt(U,y.indexOf(U)+1,u,m,N,a)}),P.addEventListener("click",async C=>{var re;const D=C.target.closest(".att-cell");if(!D)return;const K=parseInt(D.dataset.sid),U=parseInt(D.dataset.session),Q=D.dataset.date;if(N.has(Q)){H("วันหยุดโรงเรียน — ไม่สามารถเช็คชื่อได้","warning");return}const X=((re=m[K])==null?void 0:re[U])??null,ee=_e[(_e.indexOf(X)+1)%_e.length];m[K]||(m[K]={}),m[K][U]=ee;const Z=ee?ie[ee]:null;Object.values(ie).forEach(le=>D.classList.remove(le.bg)),Z&&D.classList.add(Z.bg),D.innerHTML=Z?`<span class="${Z.color}">${Z.label}</span>`:"";const te=document.getElementById("att-saving");te==null||te.classList.remove("hidden");try{await Be(h,K,O(U),Q,ee)}catch(le){H("บันทึกไม่สำเร็จ: "+ae(le),"error")}finally{te==null||te.classList.add("hidden")}}),P.addEventListener("click",C=>{const D=C.target.closest(".att-date-th[data-open-session]");if(!D)return;const K=parseInt(D.dataset.openSession),U=D.dataset.date;if(N.has(U)){H("วันหยุดโรงเรียน — ไม่สามารถเช็คชื่อได้","warning");return}if(!u.find(ee=>ee.n===K))return;window._preSelectClass=a.id,window._preSelectDate=U,window._preSelectSessN=K;const X=u.filter(ee=>ee.ds===U);Ae(t,a,y,m,K,U,X,N,h,O)}),window._leaveTimerInterval&&(clearInterval(window._leaveTimerInterval),window._leaveTimerInterval=null),window._overdueQueue=window._overdueQueue||[],window._isProcessingOverdue=!1,window._notifiedOverdueLeaves=window._notifiedOverdueLeaves||new Set;const J=()=>{const C=document.querySelectorAll(".leave-timer");if(C.length===0)return;const D=new Date;C.forEach(async K=>{const U=K.closest(".leave-badge");if(!U)return;const Q=U.dataset.start,X=parseInt(U.dataset.duration),ee=U.dataset.leaveId,Z=U.dataset.name,te=gt(Q,X,D);if(te.isOverdue){if(K.innerHTML=te.timerText,!U.classList.contains("bg-red-100")){U.classList.remove("bg-amber-100","text-amber-700"),U.classList.add("bg-red-100","text-red-700","animate-pulse");const le=U.querySelector("span");le&&(le.textContent="เลยเวลา"),window._notifiedOverdueLeaves.has(ee)||(window._notifiedOverdueLeaves.add(ee),window._overdueQueue.push({leaveId:ee,studentName:Z,classId:a.id,teacherId:t.id}),G())}te.isBeyondLimit&&U.classList.remove("animate-pulse")}else K.innerHTML=te.timerText})},G=async()=>{if(window._isProcessingOverdue||window._overdueQueue.length===0)return;window._isProcessingOverdue=!0;const C=window._overdueQueue.shift(),D=document.getElementById("overdue-check-modal");D&&D.remove();const K=document.createElement("div");K.id="overdue-check-modal",K.className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 animate-fade",K.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4">
          <div class="text-4xl text-amber-500 animate-bounce">🚪⌛</div>
          <h3 class="text-lg font-bold text-gray-800">นักเรียนหมดเวลาขออนุญาตแล้ว</h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            นักเรียน <strong class="text-gray-800">${Y(C.studentName)}</strong> ครบกำหนดเวลาขออนุญาตออกจากห้องแล้ว เดินทางกลับเข้าห้องเรียนแล้วหรือยัง?
          </p>
          <div class="grid grid-cols-2 gap-3 pt-2">
            <button id="btn-overdue-yes" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md transition-all">
              ✅ กลับเข้าห้องแล้ว
            </button>
            <button id="btn-overdue-no" class="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold text-xs transition-all">
              ❌ ยังไม่กลับเข้าห้อง
            </button>
          </div>
        </div>
      `,document.body.appendChild(K),K.querySelector("#btn-overdue-yes").addEventListener("click",async()=>{try{await ke(C.leaveId,"returned"),H(`บันทึกการกลับห้องของ ${C.studentName} เรียบร้อย`,"success"),K.remove(),window._isProcessingOverdue=!1,ce(t,a),G()}catch(U){H("บันทึกผิดพลาด: "+ae(U),"error"),window._isProcessingOverdue=!1}}),K.querySelector("#btn-overdue-no").addEventListener("click",async()=>{try{await ke(C.leaveId,"overdue"),H(`บันทึกประวัติการเลยเวลาของ ${C.studentName} แล้ว`,"info"),K.remove(),window._isProcessingOverdue=!1,ce(t,a),G()}catch(U){H("บันทึกผิดพลาด: "+ae(U),"error"),window._isProcessingOverdue=!1}})};window._leaveTimerInterval=setInterval(J,1e3),setTimeout(J,100),P.addEventListener("click",async C=>{const D=C.target.closest(".btn-request-leave");if(!D)return;const K=parseInt(D.dataset.sid),U=D.dataset.name,Q=D.dataset.img||"";if(Object.keys(n).length>=b){H(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${b} คนแล้ว`,"warning");return}kt(t,a,K,U,Q,n,b,()=>ce(t,a))}),P.addEventListener("click",async C=>{const D=C.target.closest(".leave-badge");if(!D)return;const K=D.dataset.leaveId,U=D.dataset.name,Q=D.dataset.reason;if(await Se({title:"นักเรียนกลับเข้าห้องเรียน?",message:`ยืนยันว่านักเรียน "${U}" (ออกนอกห้องด้วยเหตุผล: ${Q}) กลับเข้าห้องเรียนเรียบร้อยแล้ว`,confirmText:"กลับเข้าห้องแล้ว"}))try{await ke(K,"returned"),H(`บันทึกการกลับห้องของ ${U} เรียบร้อย`,"success"),ce(t,a)}catch(ee){H("บันทึกไม่สำเร็จ: "+ae(ee),"error")}})}catch(R){H("โหลดข้อมูลไม่สำเร็จ: "+ae(R),"error")}}function vt(t,a,r,v){const p=a[t.id],f=r[t.id]||0,j=f>=v;return p?`
      <div class="mt-0.5 flex items-center">
        <span class="leave-badge cursor-pointer inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${p.status==="overdue"?"bg-red-100 text-red-700 animate-pulse":"bg-amber-100 text-amber-700"}"
          data-leave-id="${p.id}" data-sid="${t.id}" data-name="${Y(t.full_name)}" data-reason="${Y(p.reason)}" data-start="${p.created_at}" data-duration="${p.allowed_duration}" title="ขออนุญาตออกนอกห้อง: ${p.reason} (คลิกเพื่อบันทึกกลับห้อง)">
          🚪 <span>${p.status==="overdue"?"เลยเวลา":"ออกห้อง"}</span> <span class="leave-timer font-mono text-[9px]">--:--</span>
        </span>
      </div>
    `:j?`
      <div class="mt-0.5 flex items-center">
        <button type="button" class="btn-leave-quota-badge inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-400 border border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition cursor-pointer" title="นักเรียนใช้สิทธิ์ออกนอกห้องครบ ${v} ครั้งแล้วในสัปดาห์นี้ (คลิกเพื่อปรับโควต้า)">
          ✓ ออกแล้ว (${f}/${v})
        </button>
      </div>
    `:`
      <div class="mt-0.5 flex items-center gap-1">
        <button type="button" class="btn-request-leave text-[9px] text-gray-500 hover:text-indigo-600 border border-gray-200 hover:border-indigo-300 rounded px-1 py-0.5 bg-gray-50 hover:bg-indigo-50 transition font-medium"
          data-sid="${t.id}" data-name="${Y(t.full_name)}" data-img="${t.image_url||""}">
          🚪 ขอออกห้อง
        </button>
        <span class="text-[9px] text-gray-400 font-mono" title="ใช้สิทธิ์ออกนอกห้องไปแล้ว ${f} จาก ${v} ครั้งในสัปดาห์นี้">${f}/${v}</span>
      </div>
    `}function wt(t,a,r,v){var I,T,d;(I=document.getElementById("leave-quota-modal"))==null||I.remove();const p=document.createElement("div");p.id="leave-quota-modal",p.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",p.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🚪 ตั้งค่าโควต้าออกนอกห้อง</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">${Y(t.class_name||"ห้องเรียนนี้")}</p>
        </div>
        <button id="btn-leave-quota-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">จำนวนนักเรียนที่อนุญาตให้อยู่นอกห้องพร้อมกัน</label>
        <div class="flex items-center gap-2">
          <input type="number" id="input-leave-quota" min="1" max="30" value="${a}"
            class="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-indigo-500" />
          <span class="text-xs text-gray-500 font-medium">คน</span>
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${[1,2,3,5].map(o=>`
            <button type="button" class="btn-leave-quota-preset px-3 py-2 rounded-xl border text-xs font-bold ${o===a?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}"
              data-value="${o}">${o} คน</button>
          `).join("")}
        </div>
      </div>
      <div class="space-y-2 border-t pt-3">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">จำนวนครั้งสูงสุดต่อสัปดาห์ (ต่อนักเรียน 1 คน)</label>
        <div class="flex items-center gap-2">
          <input type="number" id="input-leave-quota-per-week" min="1" max="14" value="${r}"
            class="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-indigo-500" />
          <span class="text-xs text-gray-500 font-medium">ครั้ง/สัปดาห์</span>
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${[1,2,3,5].map(o=>`
            <button type="button" class="btn-leave-quota-week-preset px-3 py-2 rounded-xl border text-xs font-bold ${o===r?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}"
              data-value="${o}">${o} ครั้ง</button>
          `).join("")}
        </div>
      </div>
      <button id="btn-save-leave-quota" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all">
        บันทึกโควต้า
      </button>
    </div>
  `,document.body.appendChild(p);const f=p.querySelector("#input-leave-quota"),j=p.querySelector("#input-leave-quota-per-week");(T=p.querySelector("#btn-leave-quota-close"))==null||T.addEventListener("click",()=>p.remove()),p.querySelectorAll(".btn-leave-quota-preset").forEach(o=>{o.addEventListener("click",()=>{f.value=o.dataset.value})}),p.querySelectorAll(".btn-leave-quota-week-preset").forEach(o=>{o.addEventListener("click",()=>{j.value=o.dataset.value})}),(d=p.querySelector("#btn-save-leave-quota"))==null||d.addEventListener("click",async()=>{const o=parseInt(f.value,10);if(!Number.isFinite(o)||o<1||o>30){H("กรุณาระบุโควต้าคนออกพร้อมกันระหว่าง 1-30 คน","warning");return}const S=parseInt(j.value,10);if(!Number.isFinite(S)||S<1||S>14){H("กรุณาระบุจำนวนครั้งต่อสัปดาห์ระหว่าง 1-14 ครั้ง","warning");return}try{await Promise.all([at(t.id,o),nt(t.id,S)]),H(`บันทึกโควต้าออกนอกห้องเป็น ${o} คน / ${S} ครั้งต่อสัปดาห์แล้ว`,"success"),p.remove(),v==null||v(o,S)}catch(R){H("บันทึกโควต้าไม่สำเร็จ: "+ae(R),"error")}})}function $t({students:t,sessions:a,attMap:r,holidaySet:v,saveClassId:p,saveSessN:f,onDone:j}){var y,k,s;(y=document.getElementById("bulk-checkall-modal"))==null||y.remove();const I=a[0].ds,T=a[a.length-1].ds;let d=null,o=[];const S=document.createElement("div");S.id="bulk-checkall-modal",S.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4",S.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">✅ เช็คชื่อทั้งหมด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">เติมเฉพาะช่องที่ยังไม่ได้เช็คชื่อ — ช่องที่เช็คไว้แล้วจะไม่ถูกเปลี่ยน</p>
        </div>
        <button id="btn-bulk-checkall-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">ช่วงวันที่</label>
        <div class="flex items-center gap-2">
          <input type="date" id="bulk-checkall-from" min="${I}" max="${T}" value="${I}"
            class="flex-1 border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500" />
          <span class="text-gray-400 text-xs flex-shrink-0">ถึง</span>
          <input type="date" id="bulk-checkall-to" min="${I}" max="${T}" value="${T}"
            class="flex-1 border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500" />
        </div>
        <button id="btn-bulk-checkall-fullterm" type="button" class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium">เลือกทั้งเทอม</button>
      </div>
      <div class="space-y-2 border-t pt-3">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">เช็คเป็นสถานะ</label>
        <div class="grid grid-cols-5 gap-1.5">
          ${Object.entries(ie).map(([e,l])=>`
            <button type="button" data-status="${e}"
              class="bulk-checkall-status-btn py-2.5 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 transition">
              <span class="${l.color} text-base">${l.label}</span>
            </button>
          `).join("")}
        </div>
      </div>
      <div id="bulk-checkall-preview" class="text-xs text-center text-gray-500 bg-gray-50 rounded-xl py-2.5 px-3 leading-relaxed"></div>
      <button id="btn-bulk-checkall-confirm" disabled
        class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl shadow-md transition-all">
        ยืนยันเช็คชื่อทั้งหมด
      </button>
    </div>
  `,document.body.appendChild(S);const R=S.querySelector("#bulk-checkall-from"),w=S.querySelector("#bulk-checkall-to"),q=S.querySelector("#bulk-checkall-preview"),$=S.querySelector("#btn-bulk-checkall-confirm"),x=S.querySelectorAll(".bulk-checkall-status-btn"),i=()=>{var B;const e=R.value,l=w.value;if(!e||!l||e>l){o=[],q.textContent="กรุณาเลือกช่วงวันที่ให้ถูกต้อง",$.disabled=!0;return}const _=a.filter(A=>A.ds>=e&&A.ds<=l&&!v.has(A.ds));o=[];const b=new Set;if(d)for(const A of t)for(const u of _)(((B=r[A.id])==null?void 0:B[u.n])??null)==null&&(o.push({class_id:p,student_id:A.id,session_number:f(u.n),check_date:u.ds,status:d}),b.add(A.id));_.length?d?o.length?(q.innerHTML=`จะเช็คชื่อ <b class="text-gray-700">${o.length}</b> ช่องว่าง
        (${b.size} นักเรียน × ${_.length} คาบ) เป็น
        <span class="${ie[d].color}">${ie[d].label}</span>`,$.disabled=!1):(q.textContent="ไม่มีช่องว่างในช่วงวันที่นี้แล้ว (เช็คครบทุกคนทุกคาบแล้ว)",$.disabled=!0):(q.textContent=`พบ ${_.length} คาบในช่วงนี้ — กรุณาเลือกสถานะที่ต้องการเช็ค`,$.disabled=!0):(q.textContent="ไม่มีคาบเรียนในช่วงวันที่นี้ (อาจตรงกับวันหยุดทั้งหมด)",$.disabled=!0)};(k=S.querySelector("#btn-bulk-checkall-close"))==null||k.addEventListener("click",()=>S.remove()),R.addEventListener("change",i),w.addEventListener("change",i),(s=S.querySelector("#btn-bulk-checkall-fullterm"))==null||s.addEventListener("click",()=>{R.value=I,w.value=T,i()}),x.forEach(e=>{e.addEventListener("click",()=>{d=e.dataset.status,x.forEach(l=>l.classList.remove("border-emerald-500","bg-emerald-50")),e.classList.add("border-emerald-500","bg-emerald-50"),i()})}),$.addEventListener("click",async()=>{if(o.length){$.disabled=!0,$.textContent="กำลังบันทึก...";try{await he(o),H(`เช็คชื่อทั้งหมดสำเร็จ ${o.length} ช่อง ✅`,"success"),S.remove(),j==null||j()}catch(e){H("บันทึกไม่สำเร็จ: "+ae(e),"error"),$.disabled=!1,$.textContent="ยืนยันเช็คชื่อทั้งหมด"}}}),i()}function kt(t,a,r,v,p,f,j,I){const T=document.getElementById("leave-request-modal");T&&T.remove();const d=["🚽 ไปห้องน้ำ","💊 ไปห้องพยาบาล","🏢 ไปฝ่ายปกครอง/ธุรการ","✏️ อื่นๆ"],o=[5,10,15,30];let S=d[0],R=10;const w=document.createElement("div");w.id="leave-request-modal",w.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-4",w.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <h3 class="font-bold text-gray-800 text-sm">🚪 ขออนุญาตออกนอกห้องเรียน</h3>
        <button id="btn-leave-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="rounded-2xl border border-amber-100 bg-amber-50 px-3 py-2 text-xs text-amber-800 flex items-center justify-between gap-3">
        <span class="font-semibold">โควต้านอกห้องตอนนี้</span>
        <span class="font-extrabold">${Object.keys(f).length}/${j} คน</span>
      </div>
      
      <!-- ข้อมูลและรูปนักเรียน -->
      <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
        <div class="w-12 h-16 rounded-xl overflow-hidden bg-gray-150 border border-gray-250 flex-shrink-0">
          ${p?`<img src="${Y(p)}" class="w-full h-full object-cover" />`:'<div class="w-full h-full flex items-center justify-center text-xl font-bold text-gray-400 bg-gray-200">👤</div>'}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">นักเรียนผู้ขออนุญาต</p>
          <h4 class="font-extrabold text-gray-800 text-sm truncate mt-0.5">${Y(v)}</h4>
        </div>
      </div>
      
      <!-- เหตุผล -->
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">1. เหตุผลของการขออนุญาต</label>
        <div class="grid grid-cols-2 gap-2">
          ${d.map((k,s)=>`
            <button class="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl transition text-center
              ${s===0?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}"
              data-reason="${k}">${k}
            </button>
          `).join("")}
        </div>
        <input type="text" id="input-custom-reason" class="hidden w-full border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="กรุณาระบุเหตุผลการขออนุญาต..." />
      </div>
      
      <!-- เวลาที่อนุญาต -->
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">2. ระยะเวลาที่อนุญาต</label>
        <div class="grid grid-cols-5 gap-1.5">
          ${o.map(k=>`
            <button class="btn-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center
              ${k===10?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}"
              data-duration="${k}">${k} น.
            </button>
          `).join("")}
          <button class="btn-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            data-duration="custom">ระบุเอง...
          </button>
        </div>
        <div id="div-custom-duration" class="hidden flex items-center gap-2 mt-2">
          <input type="number" id="input-custom-duration" min="1" max="180" class="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="ระบุนาที (เช่น 20)..." />
          <span class="text-xs text-gray-500 font-medium">นาที</span>
        </div>
      </div>
      
      <button id="btn-leave-submit" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all">
        🚪 อนุมัติให้ออกนอกห้อง
      </button>
    </div>
  `,document.body.appendChild(w);const q=w.querySelector("#input-custom-reason");w.querySelectorAll(".btn-reason").forEach(k=>{k.addEventListener("click",()=>{w.querySelectorAll(".btn-reason").forEach(s=>{s.className="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center"}),k.className="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center",S=k.dataset.reason,S==="✏️ อื่นๆ"?(q.classList.remove("hidden"),q.focus()):q.classList.add("hidden")})});const $=w.querySelector("#div-custom-duration"),x=w.querySelector("#input-custom-duration");w.querySelectorAll(".btn-duration").forEach(k=>{k.addEventListener("click",()=>{w.querySelectorAll(".btn-duration").forEach(e=>{e.className="btn-duration text-[11px] font-semibold py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center"}),k.className="btn-duration text-[11px] font-semibold py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center";const s=k.dataset.duration;s==="custom"?($.classList.remove("hidden"),x.focus()):($.classList.add("hidden"),R=parseInt(s))})}),w.querySelector("#btn-leave-close").addEventListener("click",()=>w.remove());const i=w.querySelector("#btn-leave-submit"),y=i.textContent;i.addEventListener("click",async()=>{if(i.disabled)return;let k=S;if(S==="✏️ อื่นๆ"&&(k=q.value.trim(),!k)){H("กรุณาระบุเหตุผลในการขออนุญาต","warning");return}let s=R;const e=w.querySelector(".btn-duration.bg-indigo-600");if(e&&e.dataset.duration==="custom"){const l=parseInt(x.value.trim());if(isNaN(l)||l<=0){H("กรุณาระบุระยะเวลากรอกเป็นจำนวนนาทีที่ถูกต้อง (มากกว่า 0)","warning");return}s=l}try{i.disabled=!0,i.textContent="กำลังบันทึก...",i.classList.add("opacity-70","cursor-not-allowed"),await lt(r,a.id,t.id,k,s,j),w.remove(),I(),Je({title:"อนุมัติใบอนุญาตสำเร็จ 🟢",message:`ได้ออกใบอนุญาตออกนอกห้องเรียนให้แก่ <strong>${Y(v)}</strong> เป็นเวลา <strong>${s} นาที</strong> เรียบร้อยแล้ว`,confirmText:"ตกลง"})}catch(l){H("การขออนุญาตล้มเหลว: "+ae(l),"error"),i.disabled=!1,i.textContent=y,i.classList.remove("opacity-70","cursor-not-allowed")}})}function _t(t,a,r,v,p){const f=document.getElementById("att-stats-modal");f&&f.remove();const j=t.master_subjects,I=r.filter(s=>!p.has(s.ds)),T=I.length,d=["present","absent","late","excused","sick"],o=a.map((s,e)=>{var B;const l={present:0,absent:0,late:0,excused:0,sick:0,noRecord:0};for(const A of I){const u=((B=v[s.id])==null?void 0:B[A.n])??null;u&&l[u]!==void 0?l[u]++:u||l.noRecord++}const _=l.present+l.late,b=T>0?(_/T*100).toFixed(1):"0.0";return{student:s,no:e+1,...l,attended:_,pct:parseFloat(b)}}),S=o.length?(o.reduce((s,e)=>s+e.pct,0)/o.length).toFixed(1):"0.0",R={};for(const s of I){const e=new Date(s.date),l=e.getDay()||7,_=new Date(e);_.setDate(e.getDate()-l+1);const b=Ve(_);R[b]||(R[b]={label:`${de(_)}`,sessions:[]}),R[b].sessions.push(s)}const w=Object.entries(R).sort(([s],[e])=>s.localeCompare(e)),q=s=>s>=80?"text-emerald-600":s>=60?"text-amber-500":"text-red-600",$=s=>s>=80?"bg-emerald-50":s>=60?"bg-amber-50":"bg-red-50",x=document.createElement("div");x.id="att-stats-modal",x.className="fixed inset-0 z-[80] bg-white flex flex-col",x.innerHTML=`
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 border-b bg-white shadow-sm flex-shrink-0">
      <button id="stats-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800">📊 สถิติการมาเรียน</h2>
        <p class="text-xs text-gray-400">${(j==null?void 0:j.subject_name)??"—"} · ${t.class_name} · ${T} คาบที่เรียน</p>
      </div>
      <!-- Summary badges -->
      <div class="hidden sm:flex gap-2 text-xs">
        <span class="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
          เฉลี่ย ${S}%
        </span>
        <span class="px-2 py-1 ${$(parseFloat(S))} ${q(parseFloat(S))} rounded-lg font-medium">
          ${parseFloat(S)>=80?"✓ ดี":parseFloat(S)>=60?"⚠ ปานกลาง":"✗ ต่ำ"}
        </span>
      </div>
    </div>
    <!-- Tabs -->
    <div class="flex gap-0 border-b bg-white flex-shrink-0 px-4">
      ${[["sem","รายภาคเรียน"],["week","รายสัปดาห์"],["session","รายคาบ"]].map(([s,e],l)=>`
        <button class="stats-tab px-4 py-3 text-sm font-medium border-b-2 transition
          ${l===0?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}"
          data-tab="${s}">${e}
        </button>`).join("")}
    </div>
    <!-- Content -->
    <div class="flex-1 overflow-auto" id="stats-content"></div>`,document.body.appendChild(x);const i=()=>{const s=[...o].sort((e,l)=>e.pct-l.pct);document.getElementById("stats-content").innerHTML=`
      <!-- Class summary cards -->
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4">
        ${[["มาเรียน",o.reduce((e,l)=>e+l.present,0),"bg-emerald-100 text-emerald-700"],["ขาด",o.reduce((e,l)=>e+l.absent,0),"bg-red-100 text-red-700"],["สาย",o.reduce((e,l)=>e+l.late,0),"bg-amber-100 text-amber-700"],["ลากิจ",o.reduce((e,l)=>e+l.excused,0),"bg-blue-100 text-blue-700"],["ลาป่วย",o.reduce((e,l)=>e+l.sick,0),"bg-orange-100 text-orange-700"]].map(([e,l,_])=>`
          <div class="${_} rounded-xl p-3 text-center">
            <p class="text-2xl font-bold">${l}</p>
            <p class="text-xs mt-0.5">${e}</p>
          </div>`).join("")}
      </div>
      <!-- Student table -->
      <div class="px-4 pb-6">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-xs text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">#</th>
                <th class="px-3 py-3 text-left">ชื่อ-นามสกุล</th>
                <th class="px-3 py-3 text-center bg-emerald-50 text-emerald-700">มา</th>
                <th class="px-3 py-3 text-center bg-red-50 text-red-600">ขาด</th>
                <th class="px-3 py-3 text-center bg-amber-50 text-amber-500">สาย</th>
                <th class="px-3 py-3 text-center bg-blue-50 text-blue-500">กิจ</th>
                <th class="px-3 py-3 text-center bg-orange-50 text-orange-500">ป่วย</th>
                <th class="px-3 py-3 text-center">ไม่บันทึก</th>
                <th class="px-3 py-3 text-center font-semibold">% มา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${s.map(e=>`
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-3 py-2.5 text-gray-400 text-xs">${e.no}</td>
                  <td class="px-3 py-2.5">
                    <div class="flex items-center gap-2">
                      ${e.student.image_url?`<img src="${e.student.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="text-sm flex-shrink-0">👤</span>'}
                      <span class="truncate max-w-[140px] text-gray-800">${e.student.full_name}</span>
                    </div>
                  </td>
                  <td class="px-3 py-2.5 text-center text-emerald-600 font-medium">${e.present}</td>
                  <td class="px-3 py-2.5 text-center text-red-600 font-medium">${e.absent||"—"}</td>
                  <td class="px-3 py-2.5 text-center text-amber-500 font-medium">${e.late||"—"}</td>
                  <td class="px-3 py-2.5 text-center text-blue-500 font-medium">${e.excused||"—"}</td>
                  <td class="px-3 py-2.5 text-center text-orange-500 font-medium">${e.sick||"—"}</td>
                  <td class="px-3 py-2.5 text-center text-gray-400 text-xs">${e.noRecord||"—"}</td>
                  <td class="px-3 py-2.5 text-center">
                    <span class="font-bold text-sm ${q(e.pct)}">${e.pct}%</span>
                  </td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`},y=()=>{document.getElementById("stats-content").innerHTML=`
      <div class="p-4 space-y-4">
        ${w.map(([s,e],l)=>{const _=e.sessions,b=de(_[_.length-1].date),A=a.map(n=>{var m;const L={present:0,absent:0,late:0,excused:0,sick:0};for(const M of _){const h=((m=v[n.id])==null?void 0:m[M.n])??null;h&&L[h]!==void 0&&L[h]++}return L}).reduce((n,L)=>(d.forEach(m=>n[m]=(n[m]||0)+L[m]),n),{}),u=_.length*a.length,N=u>0?((A.present+A.late)/u*100).toFixed(1):"0.0";return`
            <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="font-semibold text-gray-800">สัปดาห์ที่ ${l+1}</p>
                  <p class="text-xs text-gray-400">${e.label} – ${b} · ${_.length} คาบ</p>
                </div>
                <span class="text-lg font-bold ${q(parseFloat(N))}">${N}%</span>
              </div>
              <!-- Mini bar chart -->
              <div class="flex gap-1 h-6 rounded-lg overflow-hidden">
                ${[[A.present||0,"bg-emerald-500"],[A.late||0,"bg-amber-400"],[A.absent||0,"bg-red-500"],[A.excused||0,"bg-blue-400"],[A.sick||0,"bg-orange-400"]].filter(([n])=>n>0).map(([n,L])=>`<div class="${L}" style="flex:${n}" title="${n}"></div>`).join("")}
              </div>
              <div class="flex gap-3 mt-2 text-xs text-gray-500 flex-wrap">
                <span class="text-emerald-600">มา ${A.present||0}</span>
                <span class="text-red-500">ขาด ${A.absent||0}</span>
                <span class="text-amber-500">สาย ${A.late||0}</span>
                <span class="text-blue-500">กิจ ${A.excused||0}</span>
                <span class="text-orange-500">ป่วย ${A.sick||0}</span>
              </div>
            </div>`}).join("")}
      </div>`},k=()=>{document.getElementById("stats-content").innerHTML=`
      <div class="p-4">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">คาบ</th>
                <th class="px-3 py-3 text-left">วันที่</th>
                <th class="px-3 py-3 text-center text-emerald-700">มา</th>
                <th class="px-3 py-3 text-center text-red-600">ขาด</th>
                <th class="px-3 py-3 text-center text-amber-500">สาย</th>
                <th class="px-3 py-3 text-center text-blue-500">กิจ</th>
                <th class="px-3 py-3 text-center text-orange-500">ป่วย</th>
                <th class="px-3 py-3 text-center">%มา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${I.map(s=>{var _;const e={present:0,absent:0,late:0,excused:0,sick:0};for(const b of a){const B=((_=v[b.id])==null?void 0:_[s.n])??null;B&&e[B]!==void 0&&e[B]++}const l=a.length?((e.present+e.late)/a.length*100).toFixed(0):"0";return`
                  <tr class="hover:bg-gray-50">
                    <td class="px-3 py-2 text-gray-500">${s.n}</td>
                    <td class="px-3 py-2 font-mono text-gray-700">${de(s.date)}</td>
                    <td class="px-3 py-2 text-center text-emerald-600 font-medium">${e.present}</td>
                    <td class="px-3 py-2 text-center text-red-600 font-medium">${e.absent||"—"}</td>
                    <td class="px-3 py-2 text-center text-amber-500 font-medium">${e.late||"—"}</td>
                    <td class="px-3 py-2 text-center text-blue-500 font-medium">${e.excused||"—"}</td>
                    <td class="px-3 py-2 text-center text-orange-500 font-medium">${e.sick||"—"}</td>
                    <td class="px-3 py-2 text-center font-bold ${q(parseInt(l))}">${l}%</td>
                  </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>`};i(),x.querySelectorAll(".stats-tab").forEach(s=>{s.addEventListener("click",()=>{x.querySelectorAll(".stats-tab").forEach(l=>{l.classList.replace("border-indigo-600","border-transparent"),l.classList.replace("text-indigo-600","text-gray-500")}),s.classList.replace("border-transparent","border-indigo-600"),s.classList.replace("text-gray-500","text-indigo-600");const e=s.dataset.tab;e==="sem"&&i(),e==="week"&&y(),e==="session"&&k()})}),x.querySelector("#stats-close").addEventListener("click",()=>x.remove())}function Yt(t,a,r,v,p=null){const{cls:f,ms:j,sessionNumber:I,checkDate:T,period:d}=a??{};if(!(t!=null&&t.id)||!(f!=null&&f.id)||!Number.isFinite(Number(I))||!T)throw new Error("ข้อมูลคาบเรียนสำหรับเช็คชื่อไม่ครบ");const o={};for(const R of v??[])Number(R.session_number)===Number(I)&&(o[R.student_id]||(o[R.student_id]={}),o[R.student_id][I]=R.status);const S={n:Number(I),ds:T};Ae(t,{...f,master_subjects:j},r??[],o,Number(I),T,[S],new Set,f.id,R=>R,{delegateMode:!0,period:d,onClose:p})}async function St(t,a,r,v={}){var _;const p=a.master_subjects,f=(p==null?void 0:p.credit)??1,j=await $e().catch(()=>({})),I=j.academicYear??j.academic_year??new Date().getFullYear()+543,T=j.semester??1,d=a.source_class_id??null,[o,S,R,w]=await Promise.all([He(a.id),Pe(d??a.id),Fe(I,T),fe(a.id).catch(()=>[])]),q=(p==null?void 0:p.subject_group)==="ACDMVOC",$=ye(a,f,w.length?w:null,q),x=new Set(R),i={},y=new Map;if(d){const b=q&&w.length?w.length:Math.max(1,Math.round(f*2));let B=b;try{const u=q?await fe(d).catch(()=>[]):[];if(u.length)B=u.length;else{const n=(await we((t==null?void 0:t.id)??null).catch(()=>[])).find(L=>Number(L.id)===Number(d));(_=n==null?void 0:n.master_subjects)!=null&&_.credit&&(B=Math.max(1,Math.round(n.master_subjects.credit*2)))}}catch{}const A=$.length;for(let u=1;u<=A;u++){const N=Math.floor((u-1)/b),n=(u-1)%b,L=N*B+n+1;y.set(u,L);for(const m of S)m.session_number===L&&(i[m.student_id]||(i[m.student_id]={}),i[m.student_id][u]=m.status)}}else for(const b of S)i[b.student_id]||(i[b.student_id]={}),i[b.student_id][b.session_number]=b.status;const k=$.find(b=>Number(b.n)===Number(r));if(!k)throw new Error("ไม่พบคาบเรียนที่เลือก");if(x.has(k.ds))throw new Error("คาบนี้ตรงกับวันหยุดโรงเรียน");const s=$.filter(b=>b.ds===k.ds),e=d??a.id,l=b=>y.get(b)??b;Ae(t,a,o,i,k.n,k.ds,s,x,e,l,v)}async function Jt(t){var p,f,j;(p=document.getElementById("att-scan-setup-modal"))==null||p.remove();const a=document.createElement("div");a.id="att-scan-setup-modal",a.className="fixed inset-0 z-[190] flex items-end sm:items-center justify-center bg-black/50 p-4",a.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-8 h-8 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">${Te}</span>
            <span>สแกน QR เช็คชื่อ</span>
          </h3>
          <p class="text-xs text-gray-400 mt-0.5">เลือกห้องและคาบ แล้วระบบจะเปิดฟอร์มเช็คชื่อเดิมพร้อมกล้องสแกน</p>
        </div>
        <button id="att-scan-setup-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
      </div>
      <div id="att-scan-setup-body" class="p-5">
        <div class="flex items-center justify-center py-10 text-gray-400 text-sm">
          <svg class="animate-spin h-5 w-5 text-emerald-400 mr-2" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          กำลังโหลดห้องเรียน...
        </div>
      </div>
    </div>
  `,document.body.appendChild(a);const r=()=>a.remove();a.addEventListener("click",I=>{I.target===a&&r()}),(f=a.querySelector("#att-scan-setup-close"))==null||f.addEventListener("click",r);const v=a.querySelector("#att-scan-setup-body");try{const I=await we((t==null?void 0:t.id)??null).catch(()=>[]);if(!I.length){v.innerHTML='<div class="py-10 text-center text-gray-400 text-sm">ยังไม่มีห้องเรียนสำหรับเช็คชื่อ</div>';return}v.innerHTML=`
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-gray-500 mb-1.5">ห้องเรียน / วิชา</label>
          <select id="att-scan-class" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-emerald-500">
            ${I.map(w=>{var q;return`<option value="${w.id}">${Y(w.class_name)} — ${Y(((q=w.master_subjects)==null?void 0:q.subject_name)??"—")}</option>`}).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-500 mb-1.5">คาบที่จะเช็ค</label>
          <select id="att-scan-session" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-emerald-500">
            <option value="">กำลังโหลดคาบ...</option>
          </select>
        </div>
        <div id="att-scan-session-hint" class="text-[11px] text-gray-400 bg-gray-50 border border-gray-100 rounded-2xl px-3 py-2"></div>
        <button id="att-scan-start" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white text-sm font-extrabold shadow-md transition flex items-center justify-center gap-2">
          ${ve}
          <span>เปิดฟอร์มและเริ่มสแกน</span>
        </button>
      </div>
    `;const T=v.querySelector("#att-scan-class"),d=v.querySelector("#att-scan-session"),o=v.querySelector("#att-scan-session-hint");let S=[];const R=async()=>{var k,s;const w=I.find(e=>String(e.id)===String(T.value));if(d.innerHTML='<option value="">กำลังโหลดคาบ...</option>',o.textContent="",!w)return;const q=await fe(w.id).catch(()=>[]),$=((k=w.master_subjects)==null?void 0:k.credit)??1,x=((s=w.master_subjects)==null?void 0:s.subject_group)==="ACDMVOC";S=ye(w,$,q.length?q:null,x);const i=Ve(new Date),y=S.find(e=>e.ds===i)||S.find(e=>e.ds>i)||S[0];d.innerHTML=S.map(e=>`
        <option value="${e.n}" ${(y==null?void 0:y.n)===e.n?"selected":""}>
          คาบที่ ${e.n} · ${de(e.date)}${e.ds===i?" · วันนี้":""}
        </option>
      `).join(""),o.textContent=y?`ระบบจะโหลดข้อมูลเช็คชื่อเดิมของคาบที่ ${y.n} ก่อนเปิดกล้อง`:"ไม่พบคาบเรียนสำหรับห้องนี้"};T.addEventListener("change",R),d.addEventListener("change",()=>{const w=S.find(q=>String(q.n)===String(d.value));o.textContent=w?`ระบบจะโหลดข้อมูลเช็คชื่อเดิมของคาบที่ ${w.n} ก่อนเปิดกล้อง`:""}),await R(),(j=v.querySelector("#att-scan-start"))==null||j.addEventListener("click",async()=>{const w=I.find(x=>String(x.id)===String(T.value)),q=parseInt(d.value,10);if(!w||!q){H("กรุณาเลือกห้องและคาบที่จะเช็ค","warning");return}const $=v.querySelector("#att-scan-start");$.disabled=!0,$.textContent="กำลังเปิดฟอร์ม...";try{r(),await St(t,w,q,{autoOpenScanner:!0})}catch(x){H(x.message||"เปิดสแกนเช็คชื่อไม่สำเร็จ","error")}finally{$.disabled=!1,$.innerHTML=`${ve}<span>เปิดฟอร์มและเริ่มสแกน</span>`}})}catch(I){v.innerHTML=`<div class="py-10 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${Y(ae(I))}</div>`}}function Et(){var r;(r=document.getElementById("stc-install-modal"))==null||r.remove();const t=document.createElement("div");t.id="stc-install-modal",t.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">🔗 ติดตั้งปุ่มเชื่อมกับระบบดูแล</h3>
        <button id="stc-install-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-4 space-y-5 text-sm text-gray-600">
        <p class="text-[11px] text-center bg-amber-50 text-amber-700 rounded-lg px-3 py-2">ใช้ได้ฟรี 1 ห้องเรียนต่อครู 1 คน — ห้องเพิ่มเติมต้องสนับสนุนระบบระดับ 2 ขึ้นไป</p>
        <div class="text-center space-y-2">
          <p class="text-xs font-bold text-indigo-600">① ดึงจากระบบดูแล เข้า pp5</p>
          <p class="text-xs"><b>ลากปุ่มนี้</b> ไปวางที่แถบบุ๊กมาร์กของเบราว์เซอร์ (ทำครั้งเดียว)</p>
          <a
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold shadow-lg"
            style="cursor:grab"
            href="javascript:(function(){var s=document.createElement('script');s.src='https://ghhambal.github.io/pp5online/js/studentcare-bridge.js?v='+Date.now();document.body.appendChild(s);})();"
            onclick="alert('อย่ากดปุ่มนี้ตรงๆ นะครับ — ให้ลาก (drag) ปุ่มนี้ไปวางที่แถบบุ๊กมาร์กด้านบนของเบราว์เซอร์แทน'); return false;"
          >📥 ส่งเช็คชื่อเข้า pp5</a>
        </div>
        <ol class="space-y-1.5 text-xs list-decimal list-inside">
          <li>เปิดหน้าระบบดูแล เลือกห้อง/วันที่ ติ๊กสถานะนักเรียนตามปกติ</li>
          <li>กดปุ่มบุ๊กมาร์กที่ลากไว้ — รอข้อความแจ้งผลมุมขวาล่าง</li>
          <li>ทำซ้ำได้หลายวันตามต้องการ ข้อมูลจะถูกเก็บรอไว้</li>
          <li>กลับมาที่นี่ กดปุ่ม "ระบบดูแล (หลายวัน)" เพื่อเลือกวันที่นำเข้า</li>
        </ol>

        <div class="border-t border-gray-100 pt-4 text-center space-y-2">
          <p class="text-xs font-bold text-purple-600">② ส่งจาก pp5 กลับเข้าระบบดูแล</p>
          <p class="text-xs"><b>ลากปุ่มนี้</b> ไปวางที่แถบบุ๊กมาร์กด้วยเช่นกัน (ทำครั้งเดียว)</p>
          <a
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-lg"
            style="cursor:grab"
            href="javascript:(function(){var s=document.createElement('script');s.src='https://ghhambal.github.io/pp5online/js/studentcare-bridge-push.js?v='+Date.now();document.body.appendChild(s);})();"
            onclick="alert('อย่ากดปุ่มนี้ตรงๆ นะครับ — ให้ลาก (drag) ปุ่มนี้ไปวางที่แถบบุ๊กมาร์กด้านบนของเบราว์เซอร์แทน'); return false;"
          >📤 ส่งจาก pp5 เข้าระบบดูแล</a>
        </div>
        <ol class="space-y-1.5 text-xs list-decimal list-inside">
          <li>ในหน้าเช็คชื่อ pp5-online เปิดคาบที่ต้องการ กดปุ่ม "ส่งไประบบดูแล"</li>
          <li>เปิดหน้าระบบดูแล เลือกห้อง/วันที่เดียวกัน กดปุ่มบุ๊กมาร์กที่ลากไว้</li>
          <li>สคริปต์จะติ๊กสถานะให้อัตโนมัติ — <b>ตรวจสอบให้ดีก่อนกดปุ่ม "บันทึกข้อมูล" ของระบบดูแลเอง</b> (ไม่บันทึกให้อัตโนมัติ)</li>
        </ol>
        <p class="text-[11px] text-gray-400 text-center">ไม่เห็นแถบบุ๊กมาร์ก? กด ⌘/Ctrl+Shift+B เพื่อเปิดก่อน</p>
      </div>
    </div>`,document.body.appendChild(t);const a=()=>t.remove();t.querySelector("#stc-install-close").onclick=a,t.onclick=v=>{v.target===t&&a()}}function Lt(t,a){var j;(j=document.getElementById("stc-import-preview"))==null||j.remove();const r={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},v={present:"text-emerald-600",absent:"text-red-600",late:"text-amber-500",excused:"text-blue-500",sick:"text-orange-500"},p=document.createElement("div");p.id="stc-import-preview",p.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4",p.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📥 ข้อมูลจากระบบดูแล (${t.length} คน)</h3>
        <button id="stc-preview-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1">
        ${t.map(({student:I,staged:T})=>`
          <div class="flex items-center justify-between gap-2 py-1.5 border-b border-gray-50 text-xs">
            <span class="text-gray-700 truncate">${Y(I.full_name)}</span>
            <span class="font-bold flex-shrink-0 ${v[T.status]??"text-gray-500"}">${r[T.status]??T.status}</span>
          </div>`).join("")}
      </div>
      <div class="px-4 py-3 border-t flex-shrink-0 flex gap-2">
        <button id="stc-preview-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">ยกเลิก</button>
        <button id="stc-preview-apply" class="flex-1 py-2.5 rounded-xl btn-primary text-white text-sm font-semibold">นำไปใช้</button>
      </div>
    </div>`,document.body.appendChild(p);const f=()=>p.remove();p.querySelector("#stc-preview-close").onclick=f,p.querySelector("#stc-preview-cancel").onclick=f,p.onclick=I=>{I.target===p&&f()},p.querySelector("#stc-preview-apply").onclick=()=>{a(),f()}}const Ct={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},jt={present:"text-emerald-600",absent:"text-red-600",late:"text-amber-500",excused:"text-blue-500",sick:"text-orange-500"};function It(t,a){var p;(p=document.getElementById("stc-bulk-import-preview"))==null||p.remove();const r=document.createElement("div");r.id="stc-bulk-import-preview",r.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4",r.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📥 ข้อมูลจากระบบดูแล (${t.length} วัน)</h3>
        <button id="stc-bulk-preview-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <p class="px-4 pt-2 text-xs text-gray-400">เลือกวันที่ต้องการนำเข้า — กด "ดูรายชื่อ" เพื่อตรวจก่อนบันทึก ข้อมูลของวันที่มีอยู่แล้วจะถูกเขียนทับ</p>
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1.5 mt-1">
        ${t.map((f,j)=>`
        <div class="rounded-xl border ${f.ns.length===0?"border-gray-100 opacity-50":"border-gray-100"} overflow-hidden">
          <label class="flex items-center gap-2 py-2 px-2 text-xs cursor-pointer hover:bg-gray-50">
            <input type="checkbox" class="stc-bulk-date-cb" data-idx="${j}" ${f.ns.length===0?"disabled":"checked"} />
            <span class="flex-1 text-gray-700 font-medium">${de(f.date)}</span>
            <span class="text-gray-400">${f.matched.length} คน</span>
            ${f.ns.length===0?'<span class="text-red-400 font-bold">ไม่มีคาบ</span>':""}
            ${f.isHoliday?'<span class="text-amber-500 font-bold">วันหยุด</span>':""}
            ${f.hasExisting?'<span class="text-orange-500 font-bold">มีข้อมูลแล้ว</span>':""}
            <button type="button" class="stc-bulk-date-toggle text-indigo-500 font-bold flex-shrink-0" data-idx="${j}">ดูรายชื่อ ▾</button>
          </label>
          <div class="stc-bulk-date-detail hidden border-t border-gray-50 px-2 py-2 space-y-1 max-h-56 overflow-y-auto" data-detail-idx="${j}">
            ${f.matched.map(({student:I,staged:T})=>`
              <div class="flex items-center gap-2 py-1 text-xs">
                ${I.image_url?`<img src="${I.image_url}" class="w-7 h-9 rounded-md object-cover border border-gray-200 shadow-sm flex-shrink-0" />`:'<div class="w-7 h-9 rounded-md bg-gray-100 flex-shrink-0"></div>'}
                <span class="flex-1 text-gray-700 truncate">${Y(I.full_name)}</span>
                <span class="font-bold flex-shrink-0 ${jt[T.status]??"text-gray-500"}">${Ct[T.status]??T.status}</span>
              </div>`).join("")}
          </div>
        </div>`).join("")}
      </div>
      <div class="px-4 py-3 border-t flex-shrink-0 flex gap-2">
        <button id="stc-bulk-preview-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold">ยกเลิก</button>
        <button id="stc-bulk-preview-apply" class="flex-1 py-2.5 rounded-xl btn-primary text-white text-sm font-semibold">บันทึกที่เลือก</button>
      </div>
    </div>`,document.body.appendChild(r);const v=()=>r.remove();r.querySelector("#stc-bulk-preview-close").onclick=v,r.querySelector("#stc-bulk-preview-cancel").onclick=v,r.onclick=f=>{f.target===r&&v()},r.querySelectorAll(".stc-bulk-date-toggle").forEach(f=>{f.addEventListener("click",()=>{const j=r.querySelector(`.stc-bulk-date-detail[data-detail-idx="${f.dataset.idx}"]`);if(!j)return;const I=j.classList.toggle("hidden");f.textContent=I?"ดูรายชื่อ ▾":"ซ่อนรายชื่อ ▴"})}),r.querySelector("#stc-bulk-preview-apply").onclick=()=>{const f=Array.from(r.querySelectorAll(".stc-bulk-date-cb:checked")).map(j=>t[Number(j.dataset.idx)]);v(),a(f)}}function Ae(t,a,r,v,p,f,j,I=new Set,T=null,d=S=>S,o={}){var _,b,B,A;const S=document.getElementById("att-form-modal");S&&S.remove();const R=[{key:"present",label:"มา",labelAll:"มาทุกคน",color:"bg-emerald-500 text-white",bulkCls:"bg-emerald-50 text-emerald-700 hover:bg-emerald-100"},{key:"absent",label:"ขาด",labelAll:"ขาดทุกคน",color:"bg-red-500 text-white",bulkCls:"bg-red-50 text-red-600 hover:bg-red-100"},{key:"late",label:"สาย",labelAll:"สายทุกคน",color:"bg-amber-400 text-white",bulkCls:"bg-amber-50 text-amber-600 hover:bg-amber-100"},{key:"excused",label:"ลากิจ",labelAll:"ลากิจทุกคน",color:"bg-blue-400 text-white",bulkCls:"bg-blue-50 text-blue-600 hover:bg-blue-100"},{key:"sick",label:"ลาป่วย",labelAll:"ลาป่วยทุกคน",color:"bg-orange-400 text-white",bulkCls:"bg-orange-50 text-orange-600 hover:bg-orange-100"}],w=o.delegateMode===!0,q=!w&&j.length>1;let $=q;const x=document.createElement("div");x.id="att-form-modal",x.className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-4",x.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col">
      <!-- Header -->
      <div class="px-4 py-3 border-b flex-shrink-0 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div class="min-w-0">
            <h3 class="font-bold text-gray-800 text-sm">${w?"เช็คชื่อแทนครู":"เช็คชื่อ"} — คาบที่ ${p}</h3>
            <p class="text-xs text-gray-400">${f} · ${a.class_name}${w&&((_=o.period)!=null&&_.period_no)?` · คาบเรียนที่ ${o.period.period_no}`:""}</p>
          </div>
          <button id="att-modal-close"
            class="text-gray-400 hover:text-gray-700 text-lg leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center flex-wrap gap-1.5 ${w?"hidden":""}">
          <button id="btn-att-scan-qr"
            class="text-xs px-3 py-1.5 bg-slate-900 text-white rounded-xl
                   font-bold flex items-center gap-1.5 hover:bg-slate-800 active:scale-[0.98] transition shadow-sm"
            title="สแกน QR Code ของนักเรียนเพื่อเช็คชื่อ">
            ${ve}
            <span>สแกน QR</span>
          </button>
          <button id="btn-att-import-studentcare"
            class="text-xs px-3 py-1.5 bg-indigo-600 text-white rounded-xl
                   font-bold flex items-center gap-1.5 hover:bg-indigo-700 active:scale-[0.98] transition shadow-sm"
            title="ดึงข้อมูลเช็คชื่อที่ส่งมาจากระบบดูแล (ต้องกดส่งจากหน้าระบบดูแลก่อน)">
            📥 <span>ระบบดูแล</span>
          </button>
          <button id="btn-att-export-studentcare"
            class="text-xs px-3 py-1.5 bg-purple-600 text-white rounded-xl
                   font-bold flex items-center gap-1.5 hover:bg-purple-700 active:scale-[0.98] transition shadow-sm"
            title="ส่งเช็คชื่อของวันนี้ไปรอให้บุ๊กมาร์กฝั่งระบบดูแลติ๊กให้อัตโนมัติ">
            📤 <span>ส่งไประบบดูแล</span>
          </button>
          ${q?`
          <!-- Toggle ทุกคาบ (ปุ่มสี) -->
          <button id="att-sync-btn"
            class="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all
                   bg-emerald-500 text-white shadow-sm"
            title="คลิกเพื่อเปิด/ปิดการบันทึกทุกคาบในวันนี้">
            ✓ ทุกคาบ (${j.length})
          </button>`:""}
          <!-- Bulk dropdown -->
          ${w?"":`<div class="relative" id="bulk-wrap">
            <button id="att-bulk-btn"
              class="text-xs px-2.5 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg
                     font-medium flex items-center gap-1 hover:bg-emerald-200 transition">
              <span id="bulk-label">✓ ทุกคน</span>
              <span class="opacity-60">▾</span>
            </button>
            <div id="att-bulk-dd"
              class="hidden absolute right-0 top-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-xl z-30 py-1 min-w-[130px]">
              ${R.map(u=>`
                <button class="bulk-opt w-full text-left text-xs px-3 py-2 font-medium
                  transition rounded-lg ${u.bulkCls}"
                  data-bulk="${u.key}" data-color="${u.color}" data-all-label="${u.labelAll}">
                  ${u.labelAll}
                </button>`).join("")}
            </div>
          </div>`}
        </div>
      </div>
      <!-- Student list -->
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1">
        ${r.map((u,N)=>{var m;const n=((m=v[u.id])==null?void 0:m[p])??null,L=n??(w?null:"present");return`<div class="flex items-center gap-1.5 py-1.5 border-b border-gray-50" data-modal-sid="${u.id}">
            <span class="text-gray-400 text-xs w-5 text-right flex-shrink-0">${N+1}</span>
            ${u.image_url?`<img src="${u.image_url}" class="w-7 h-7 rounded object-cover flex-shrink-0" />`:'<div class="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-xs flex-shrink-0">👤</div>'}
            <span class="flex-1 text-sm text-gray-800 truncate min-w-0">${u.full_name}</span>
            <div class="flex gap-0.5 flex-shrink-0" data-att-touched="${!w&&n?"1":"0"}">
              ${R.map(M=>`
                <button class="att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
                  ${L===M.key?M.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
                  data-modal-sid="${u.id}" data-status="${M.key}" data-color="${M.color}">
                  ${M.label}
                </button>`).join("")}
            </div>
          </div>`}).join("")}
      </div>
      <!-- Save button -->
      <div class="px-5 py-4 border-t flex-shrink-0">
        <button id="att-modal-save"
          class="btn-primary w-full py-3 text-white font-semibold text-sm rounded-xl">
          💾 บันทึกการเช็คชื่อ
        </button>
      </div>
    </div>`,document.body.appendChild(x);const i=()=>{var u;x.remove(),(u=o.onClose)==null||u.call(o)},y=x.querySelector("#att-sync-btn");y&&y.addEventListener("click",()=>{$=!$,y.className=`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all shadow-sm

        ${$?"bg-emerald-500 text-white":"bg-gray-200 text-gray-500"}`,y.innerHTML=$?`✓ ทุกคาบ (${j.length})`:`✗ ทุกคาบ (${j.length})`,H($?`เปิด: บันทึกทั้ง ${j.length} คาบในวันที่ ${f}`:`ปิด: บันทึกเฉพาะคาบที่ ${p}`,$?"success":"info")});const k=x.querySelector("#att-bulk-btn"),s=x.querySelector("#att-bulk-dd"),e=x.querySelector("#bulk-label");k==null||k.addEventListener("click",u=>{u.stopPropagation(),s.classList.toggle("hidden")});const l=()=>s==null?void 0:s.classList.add("hidden");document.addEventListener("click",l,{once:!0}),x.querySelectorAll(".bulk-opt").forEach(u=>{u.addEventListener("click",N=>{N.stopPropagation();const n=u.dataset.bulk,L=u.dataset.color,m=u.dataset.allLabel;s.classList.add("hidden"),k.className=`text-xs px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition ${L}`,e.textContent=m,r.forEach(M=>{var O;const h=x.querySelector(`[data-modal-sid="${M.id}"]`);(O=h==null?void 0:h.querySelector("[data-att-touched]"))==null||O.setAttribute("data-att-touched","1"),h==null||h.querySelectorAll(".att-modal-status").forEach(c=>{c.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

            ${c.dataset.status===n?c.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),document.addEventListener("click",l,{once:!0})})}),x.addEventListener("click",u=>{var M;const N=u.target.closest(".att-modal-status");if(!N)return;const n=N.dataset.modalSid,L=N.dataset.status,m=x.querySelector(`[data-modal-sid="${n}"]`);(M=m==null?void 0:m.querySelector("[data-att-touched]"))==null||M.setAttribute("data-att-touched","1"),m==null||m.querySelectorAll(".att-modal-status").forEach(h=>{h.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

        ${h.dataset.status===L?h.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),(b=x.querySelector("#btn-att-scan-qr"))==null||b.addEventListener("click",async()=>{var E,V,W;const u=window._pp5DonorTierIndex>0,N=Ot(t==null?void 0:t.id,u);if(!N.allowed){(E=document.getElementById("att-scan-paywall"))==null||E.remove();const F=document.createElement("div");F.id="att-scan-paywall",F.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",F.innerHTML=`
        <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
          <button id="pw-close-btn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
          <div class="text-6xl mt-4">🔒</div>
          <p class="font-bold text-gray-800 text-lg">สิทธิ์การสแกนทดลองใช้งานเต็มแล้ว</p>
          <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สแกน QR เพื่อเช็คชื่อคาบเรียนจำกัดทดลองฟรี ${N.limit} ครั้งต่อสัปดาห์สำหรับผู้ใช้งานทั่วไป<br><br>ร่วมสนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัดครับ</p>
          <button id="pw-donate-btn" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        </div>`,document.body.appendChild(F),F.querySelector("#pw-close-btn").addEventListener("click",()=>F.remove()),F.querySelector("#pw-donate-btn").addEventListener("click",()=>{var P;F.remove(),(P=document.getElementById("btn-donate-float"))==null||P.click()});return}(V=document.getElementById("att-scanner-overlay"))==null||V.remove();const n=document.createElement("div");n.id="att-scanner-overlay",n.className="fixed inset-0 z-[95] flex flex-col bg-slate-950 items-center justify-center p-4",n.innerHTML=`
      <style>
        @keyframes laser-sweep {
          0% { top: 0%; opacity: 0.3; }
          50% { opacity: 0.9; }
          100% { top: 100%; opacity: 0.3; }
        }
        .animate-laser-move {
          position: absolute;
          animation: laser-sweep 2.2s infinite ease-in-out;
        }
        .scan-flash-success {
          animation: flash-green 0.6s ease-out;
        }
        .scan-flash-error {
          animation: flash-red 0.6s ease-out;
        }
        @keyframes flash-green {
          0% { box-shadow: inset 0 0 0 0px #10b981; }
          50% { box-shadow: inset 0 0 0 12px #10b981; }
          100% { box-shadow: inset 0 0 0 0px #10b981; }
        }
        @keyframes flash-red {
          0% { box-shadow: inset 0 0 0 0px #ef4444; }
          50% { box-shadow: inset 0 0 0 12px #ef4444; }
          100% { box-shadow: inset 0 0 0 0px #ef4444; }
        }
      </style>
      <div class="relative w-full max-w-sm max-h-[calc(100vh-2rem)] overflow-y-auto flex flex-col text-white">
        <!-- Header -->
        <div class="flex items-center justify-between mb-4">
          <div>
            <h4 class="font-bold text-sm flex items-center gap-2">
              ${Te}
              <span>กล้องสแกนเช็คชื่อ</span>
            </h4>
            <p class="text-xs text-slate-400">เล็งกล้องไปที่ QR Code ของนักเรียน</p>
          </div>
          <button id="btn-close-att-scanner" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold">✕</button>
        </div>

        <!-- Camera Area -->
        <div id="att-scanner-container" class="relative overflow-hidden bg-slate-900 rounded-3xl w-full aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4">
          <div id="att-camera-reader" class="w-full h-full rounded-2xl overflow-hidden"></div>
          
          <!-- Viewfinder -->
          <div class="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="relative w-48 h-48 rounded-2xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)]">
              <!-- Corners -->
              <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400 rounded-tl"></div>
              <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400 rounded-tr"></div>
              <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400 rounded-bl"></div>
              <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400 rounded-br"></div>
              <!-- Laser sweeper -->
              <div class="w-full h-0.5 bg-emerald-400 animate-laser-move"></div>
            </div>
          </div>
        </div>

        <!-- Feedback Panel (Dynamic) -->
        <div id="scan-feedback-panel" class="mb-4 min-h-[100px]">
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400">
            ยังไม่มีข้อมูลสแกนในคาบเรียนนี้
          </div>
        </div>

        <!-- Scanned Students List -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3">
          <div class="flex items-center justify-between gap-2 mb-2">
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">นักเรียนที่สแกนแล้ว (มาเรียน)</p>
            <span id="scan-history-count" class="text-[10px] font-bold text-emerald-400">0 คน</span>
          </div>
          <div id="scan-history-list" class="space-y-1.5 text-xs max-h-56 overflow-y-auto pr-1">
            <p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>
          </div>
        </div>
      </div>`,document.body.appendChild(n);let L=null;const m=[],M=new Map,h=F=>{const P=x.querySelector(`[data-modal-sid="${F}"]`),z=P==null?void 0:P.querySelector("[data-att-touched]"),J=Array.from((P==null?void 0:P.querySelectorAll(".att-modal-status"))??[]).find(G=>!G.className.includes("bg-white"));return{touched:(z==null?void 0:z.dataset.attTouched)==="1",status:(J==null?void 0:J.dataset.status)??null}},O=(F,P)=>{const z=x.querySelector(`[data-modal-sid="${F}"]`),J=z==null?void 0:z.querySelector("[data-att-touched]");J&&(J.dataset.attTouched=P!=null&&P.touched?"1":"0"),z==null||z.querySelectorAll(".att-modal-status").forEach(G=>{const C=R.find(D=>D.key===G.dataset.status);G.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
          ${P!=null&&P.status&&G.dataset.status===P.status?(C==null?void 0:C.color)??G.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})},c=()=>{const F=n.querySelector("#scan-history-list"),P=n.querySelector("#scan-history-count");if(P&&(P.textContent=`${m.length} คน`),!!F){if(!m.length){F.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}F.innerHTML=m.map((z,J)=>`
        <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
          <span class="w-6 text-center text-slate-500 font-mono flex-shrink-0">${m.length-J}</span>
          <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${Y(z.full_name)}</span>
          <span class="text-emerald-400 font-bold text-[10px] flex-shrink-0">มา</span>
          <button type="button"
            class="btn-att-cancel-scan-row px-2 py-1 rounded-lg bg-red-950/50 text-red-300 border border-red-800/70 hover:bg-red-500 hover:text-white transition text-[10px] font-bold flex-shrink-0"
            data-sid="${z.id}">
            ยกเลิก
          </button>
        </div>
      `).join("")}};(W=n.querySelector("#scan-history-list"))==null||W.addEventListener("click",F=>{const P=F.target.closest(".btn-att-cancel-scan-row");if(!P)return;const z=Number(P.dataset.sid),J=m.findIndex(D=>Number(D.id)===z);if(J===-1)return;const[G]=m.splice(J,1);O(z,M.get(z)),M.delete(z),c();const C=n.querySelector("#scan-feedback-panel");C&&(C.innerHTML=`
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400 animate-fade">
            ยกเลิกการสแกนของ <span class="font-bold text-slate-200">${Y(G.full_name)}</span> แล้ว
          </div>`),H(`ยกเลิกการสแกนของ ${G.full_name} แล้ว`,"success")});const g=async()=>{L&&await L.stop().catch(()=>{}),r.forEach(F=>{const P=x.querySelector(`[data-modal-sid="${F.id}"]`),z=P==null?void 0:P.querySelector("[data-att-touched]");if(!((z==null?void 0:z.dataset.attTouched)==="1")){const G=x.querySelector(`.att-modal-status[data-modal-sid="${F.id}"][data-status="absent"]`);G&&(G.classList.contains("bg-red-500")||G.click())}}),n.remove()};n.querySelector("#btn-close-att-scanner").addEventListener("click",g);try{const F=await Ft();L=new F("att-camera-reader");let P=null,z=0,J=!1;const G=C=>{const D=n.querySelector("#att-scanner-container"),K=n.querySelector("#scan-feedback-panel"),U=X=>{const ee=X?"scan-flash-success":"scan-flash-error";D.classList.add(ee),setTimeout(()=>D.classList.remove(ee),600)};let Q=null;try{let X=C;if(C.startsWith("SQ:")){const[re,le,me]=C.split(":"),oe=parseInt(me,10),be=Math.floor(Date.now()/1e3)-oe;if(be>60||be<-60)throw new Error("QR Code หมดอายุแล้ว");X=le}if(Q=r.find(re=>re.student_code===X),!Q)throw new Error("ไม่พบรายชื่อในคลาสเรียนนี้");if(m.some(re=>re.id===Q.id))throw new Error("เช็คชื่อซ้ำ! นักเรียนคนนี้ได้รับการสแกนไปแล้ว");M.has(Q.id)||M.set(Q.id,h(Q.id));const Z=x.querySelector(`.att-modal-status[data-modal-sid="${Q.id}"][data-status="present"]`);Z&&(Z.classList.contains("bg-emerald-500")||Z.click()),Oe("success"),U(!0),!u&&!J&&(Ht(t==null?void 0:t.id,N.weekMonday),J=!0),m.unshift(Q);const te=Q.image_url?`<img src="${Q.image_url}" class="w-12 h-16 object-cover object-top rounded-xl border border-slate-700" />`:`<div class="w-12 h-16 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold text-lg flex items-center justify-center">${Q.full_name.charAt(0)}</div>`;K.innerHTML=`
            <div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-fade">
              ${te}
              <div class="flex-1 min-w-0 text-left">
                <span class="inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">✓ สแกนสำเร็จ</span>
                <h4 class="font-extrabold text-slate-200 text-sm mt-1 truncate">${Q.full_name}</h4>
                <p class="text-xs text-slate-400 truncate">รหัส ${Q.student_code}</p>
              </div>
            </div>`,c()}catch(X){Oe("error"),U(!1);const ee=Q?Q.full_name:"ไม่พบข้อมูล",Z=Q?`รหัส ${Q.student_code}`:`ข้อมูลดิบ: ${C}`;K.innerHTML=`
            <div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-fade">
              <div class="w-12 h-16 rounded-xl bg-red-950/80 border border-red-900 text-red-400 font-bold text-xl flex items-center justify-center">❌</div>
              <div class="flex-1 min-w-0 text-left">
                <span class="inline-block px-2 py-0.5 rounded-full bg-red-500/20 text-red-450 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
                <h4 class="font-bold text-slate-200 text-sm mt-1 truncate">${ee}</h4>
                <p class="text-xs text-slate-400 truncate">${Z}</p>
                <p class="text-xs font-bold text-red-500 mt-1">${X.message}</p>
              </div>
            </div>`}};await L.start({facingMode:"environment"},{fps:25,aspectRatio:1},C=>{C===P&&Date.now()-z<2e3||(P=C,z=Date.now(),G(C))},()=>{})}catch(F){console.error("Attendance QR scanner initialization failed:",F),H("ไม่สามารถเปิดกล้องได้: "+F.message,"error"),n.remove()}}),(B=x.querySelector("#btn-att-import-studentcare"))==null||B.addEventListener("click",async()=>{const u=Le(r,a);if(!u){H("หาห้องเรียนของนักเรียนในคลาสนี้ไม่เจอ","error");return}const N=(window._pp5DonorTierIndex??0)>=2,n=Ce(t==null?void 0:t.id,u,N);if(!n.allowed){Ie(n.claimedRoom,u);return}!N&&!n.claimedRoom&&je(t==null?void 0:t.id,u);let L;try{L=await rt(u,f,Ye(r,a,u))}catch(h){H("ดึงข้อมูลไม่สำเร็จ: "+ae(h),"error");return}if(!L.length){H(`ยังไม่มีข้อมูลจากระบบดูแลสำหรับห้อง ${u} วันที่ ${f} — ไปกดส่งข้อมูลจากหน้าระบบดูแลก่อน`,"warning");return}const m={};L.forEach(h=>{(!m[h.student_code]||h.main_room===u)&&(m[h.student_code]=h)});const M=r.map(h=>({student:h,staged:m[h.student_code]})).filter(h=>h.staged);if(!M.length){H("มีข้อมูลจากระบบดูแลสำหรับวันนี้ แต่ไม่ตรงกับรหัสนักเรียนในห้องนี้เลยสักคน","error");return}Lt(M,()=>{M.forEach(({student:h,staged:O})=>{var g;const c=x.querySelector(`[data-modal-sid="${h.id}"]`);(g=c==null?void 0:c.querySelector("[data-att-touched]"))==null||g.setAttribute("data-att-touched","1"),c==null||c.querySelectorAll(".att-modal-status").forEach(E=>{E.className=`att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
            ${E.dataset.status===O.status?E.dataset.color:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`})}),H(`นำเข้าข้อมูล ${M.length} คนจากระบบดูแลแล้ว — ตรวจสอบแล้วกด "บันทึกการเช็คชื่อ" อีกครั้ง`,"success")})}),(A=x.querySelector("#btn-att-export-studentcare"))==null||A.addEventListener("click",async()=>{const u=Le(r,a);if(!u){H("หาห้องเรียนของนักเรียนในคลาสนี้ไม่เจอ","error");return}const N=(window._pp5DonorTierIndex??0)>=2,n=Ce(t==null?void 0:t.id,u,N);if(!n.allowed){Ie(n.claimedRoom,u);return}!N&&!n.claimedRoom&&je(t==null?void 0:t.id,u);const L=r.map(M=>{const h=x.querySelector(`[data-modal-sid="${M.id}"]`),O=Array.from((h==null?void 0:h.querySelectorAll(".att-modal-status"))??[]).find(g=>!g.className.includes("bg-white")),c=(O==null?void 0:O.dataset.status)??"present";return{studentCode:M.student_code,status:c,studentName:M.full_name,classId:a.id,roomAliases:Pt(M,u)}}),m=x.querySelector("#btn-att-export-studentcare");m.disabled=!0,m.textContent="กำลังส่ง...";try{await ot(u,f,L),H(`ส่งเช็คชื่อ ${L.length} คนไปรอที่ระบบดูแลแล้ว — ไปเปิดหน้าระบบดูแลห้อง ${u} วันที่ ${f} แล้วกดปุ่มบุ๊กมาร์ก "ส่งจาก pp5" ได้เลย`,"success")}catch(M){H("ส่งไม่สำเร็จ: "+ae(M),"error")}finally{m.disabled=!1,m.innerHTML="📤 <span>ส่งไประบบดูแล</span>"}}),x.querySelector("#att-modal-close").addEventListener("click",i),x.addEventListener("click",u=>{u.target===x&&i()}),o.autoOpenScanner&&setTimeout(()=>{var u;return(u=x.querySelector("#btn-att-scan-qr"))==null?void 0:u.click()},150),x.querySelector("#att-modal-save").addEventListener("click",async()=>{var n;if(I.has(f)){H("วันหยุดโรงเรียน — ไม่สามารถบันทึกได้","warning"),i();return}const u=x.querySelector("#att-modal-save");u.disabled=!0,u.textContent="กำลังบันทึก...";const N=q&&$?j.map(L=>L.n):[p];try{const L=r.map(M=>{const h=x.querySelector(`[data-modal-sid="${M.id}"]`),O=Array.from((h==null?void 0:h.querySelectorAll(".att-modal-status"))??[]).find(g=>!g.className.includes("bg-white")),c=(O==null?void 0:O.dataset.status)??"present";return{student:M,status:c}}),m=[];for(const M of N)for(const{student:h,status:O}of L)v[h.id]={...v[h.id]??{},[M]:O},m.push({class_id:T??a.id,student_id:h.id,session_number:d(M),check_date:f,status:O});if(w){for(let M=m.length-1;M>=0;M--){const h=x.querySelector(`[data-modal-sid="${m[M].student_id}"]`);((n=h==null?void 0:h.querySelector("[data-att-touched]"))==null?void 0:n.dataset.attTouched)!=="1"&&m.splice(M,1)}if(!m.length){H("เลือกสถานะนักเรียนอย่างน้อย 1 คนก่อนบันทึก","warning"),u.disabled=!1,u.textContent="💾 บันทึกการเช็คชื่อ";return}}await he(m),m.forEach(M=>{const h=document.querySelector(`.att-cell[data-sid="${M.student_id}"][data-session="${M.session_number}"]`);if(!h)return;Object.values(ie).forEach(c=>h.classList.remove(c.bg));const O=ie[M.status];O&&(h.classList.add(O.bg),h.innerHTML=`<span class="${O.color}">${O.label}</span>`)}),H(`บันทึก${N.length>1?` ${N.length} คาบ`:""} แล้ว ✅`,"success"),i()}catch(L){H("บันทึกไม่สำเร็จ: "+ae(L),"error"),u.disabled=!1,u.textContent="💾 บันทึกการเช็คชื่อ"}})}async function Gt(t){var T;xe("attendance"),pe("เช็คชื่อ","attendance");const a=window._preSelectClass??null;window._preSelectClass=null;const r=await we((t==null?void 0:t.id)??null).catch(()=>[]),v=Qe();if(ne(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">เลือกวิชาและวันที่เพื่อเช็คชื่อ</p>
      </div>
    </div>
    ${r.length?`
    <!-- Selector -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5 mb-5">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ห้องเรียน / วิชา</label>
          <select id="att-class" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400">
            <option value="">— เลือกห้อง —</option>
            ${r.map(d=>{var o;return`<option value="${d.id}" ${String(d.id)===String(a)?"selected":""}>${d.class_name} — ${((o=d.master_subjects)==null?void 0:o.subject_name)??"—"}</option>`}).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">วันที่</label>
          <input id="att-date" type="date" value="${v}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400" />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">คาบที่</label>
          <input id="att-period" type="number" min="1" max="8" value="1"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400" />
        </div>
      </div>
      <button id="att-load-btn"
        class="mt-3 btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl w-full sm:w-auto">
        โหลดรายชื่อ
      </button>
    </div>
    <!-- Student List -->
    <div id="att-student-wrap"></div>`:`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
      <p class="text-4xl mb-3">✅</p>
      <p class="font-medium">ยังไม่มีห้องเรียน</p>
      <p class="text-xs mt-1">ลงทะเบียนห้องเรียนก่อน</p>
    </div>`}
  </div>`),!r.length)return;a&&setTimeout(()=>{var d;return(d=document.getElementById("att-load-btn"))==null?void 0:d.click()},100);const p=[{key:"present",label:"มา",color:"bg-emerald-500 text-white",border:"border-emerald-500"},{key:"absent",label:"ขาด",color:"bg-red-500 text-white",border:"border-red-500"},{key:"late",label:"สาย",color:"bg-amber-400 text-white",border:"border-amber-400"},{key:"sick",label:"ลาป่วย",color:"bg-blue-400 text-white",border:"border-blue-400"},{key:"excused",label:"ลากิจ",color:"bg-purple-400 text-white",border:"border-purple-400"}];let f=[],j={};const I=()=>{var R;const d=document.getElementById("att-student-wrap");if(!d)return;if(!f.length){d.innerHTML=`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-10 text-center text-gray-400">
        <p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียน</p></div>`;return}const o=Object.values(j).filter(w=>w==="present").length,S=Object.values(j).filter(w=>w==="absent").length;d.innerHTML=`
      <!-- Summary bar -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4 flex items-center justify-between">
        <div class="flex gap-4 text-sm">
          <span class="text-emerald-600 font-semibold">มา ${o}</span>
          <span class="text-red-500 font-semibold">ขาด ${S}</span>
          <span class="text-gray-400">รวม ${f.length}</span>
        </div>
        <div class="flex gap-2">
          <button onclick="window._attSetAll('present')"
            class="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200">✓ มาทุกคน</button>
          <button id="att-save-btn"
            class="btn-primary px-4 py-1.5 text-white text-xs font-semibold rounded-lg">
            💾 บันทึก
          </button>
        </div>
      </div>
      <!-- Student rows -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
            <tr>
              <th class="px-4 py-3 text-left w-8">#</th>
              <th class="px-4 py-3 text-left">นักเรียน</th>
              <th class="px-4 py-3 text-center">สถานะ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${f.map((w,q)=>{const $=j[w.id]??"present";return`
              <tr class="hover:bg-gray-50 transition" data-sid="${w.id}">
                <td class="px-4 py-2 text-gray-400 text-xs">${q+1}</td>
                <td class="px-4 py-2">
                  <div class="flex items-center gap-2">
                    ${w.image_url?`<img src="${w.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200" />`:""}
                    <div>
                      <p class="font-medium text-gray-800 text-sm">${w.full_name}</p>
                      <p class="text-xs text-gray-400 font-mono">${w.student_code}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-2">
                  <div class="flex gap-1 justify-center flex-wrap">
                    ${p.map(x=>`
                    <button class="att-status-btn text-xs px-2 py-1 rounded-lg border transition font-medium
                      ${$===x.key?x.color+" "+x.border:"bg-white text-gray-500 border-gray-200 hover:border-gray-400"}"
                      data-sid="${w.id}" data-status="${x.key}">
                      ${x.label}
                    </button>`).join("")}
                  </div>
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>`,document.querySelectorAll(".att-status-btn").forEach(w=>{w.addEventListener("click",()=>{const{sid:q,status:$}=w.dataset;j[q]=$,document.querySelectorAll(`.att-status-btn[data-sid="${q}"]`).forEach(x=>{const i=p.find(y=>y.key===x.dataset.status);x.className=x.className.replace(/bg-\w+-\d+ text-white border-\w+-\d+/g,""),x.dataset.status===$?x.classList.add(...i.color.split(" "),i.border):x.classList.add("bg-white","text-gray-500","border-gray-200")}),I()})}),(R=document.getElementById("att-save-btn"))==null||R.addEventListener("click",async()=>{var i,y,k;const w=document.getElementById("att-class").value,q=document.getElementById("att-date").value,$=parseInt(document.getElementById("att-period").value)||1,x=document.getElementById("att-save-btn");if(!w||!q){H("กรุณาเลือกห้องและวันที่","warning");return}x.disabled=!0,x.textContent="กำลังบันทึก...";try{const s=r.find(N=>String(N.id)===w),e=((i=s==null?void 0:s.master_subjects)==null?void 0:i.credit)??1,l=((y=s==null?void 0:s.master_subjects)==null?void 0:y.subject_group)==="ACDMVOC",_=l?await fe(s.id).catch(()=>[]):[],B=(s?ye(s,e,_.length?_:null,l):[]).filter(N=>N.ds===q),A=((k=B[$-1]??B[0]??null)==null?void 0:k.n)??null,u=f.map(N=>({class_id:Number(w),student_id:N.id,check_date:q,period_no:$,session_number:A,status:j[N.id]??"present"}));await he(u),H(`บันทึกเช็คชื่อ ${u.length} คน สำเร็จ ✅`,"success")}catch(s){H("บันทึกไม่สำเร็จ: "+ae(s),"error")}finally{x.disabled=!1,x.textContent="💾 บันทึก"}})};window._attSetAll=d=>{f.forEach(o=>{j[o.id]=d}),I()},(T=document.getElementById("att-load-btn"))==null||T.addEventListener("click",async()=>{var R,w,q;const d=document.getElementById("att-class").value,o=document.getElementById("att-date").value;if(!d){H("กรุณาเลือกห้องเรียน","warning");return}const S=document.getElementById("att-load-btn");S.disabled=!0,S.textContent="กำลังโหลด...";try{const{data:$}=await(await ue(async()=>{const{supabase:A}=await import("./supabase-BV-W2lsh.js").then(u=>u.a);return{supabase:A}},[])).supabase.from("class_students").select("student_id, students(id, student_code, full_name, image_url, main_room)").eq("class_id",d).order("students(student_code)");f=($??[]).map(A=>A.students).filter(Boolean);const x=await Ge(Number(d),o),i=r.find(A=>String(A.id)===d),y=((R=i==null?void 0:i.master_subjects)==null?void 0:R.credit)??1,k=((w=i==null?void 0:i.master_subjects)==null?void 0:w.subject_group)==="ACDMVOC",s=k?await fe(i.id).catch(()=>[]):[],e=i?ye(i,y,s.length?s:null,k):[],l=parseInt(document.getElementById("att-period").value)||1,_=e.filter(A=>A.ds===o),b=((q=_[l-1]??_[0]??null)==null?void 0:q.n)??null,B=b!==null?x.filter(A=>A.session_number===b):x;j={},f.forEach(A=>{j[A.id]="present"}),B.forEach(A=>{j[A.student_id]=A.status}),I()}catch($){H("โหลดไม่สำเร็จ: "+ae($),"error")}finally{S.disabled=!1,S.textContent="โหลดรายชื่อ"}})}async function Zt(t,a){xe("life-skill-score"),pe("บันทึกคะแนนทักษะชีวิต");const r=a.filter(T=>T.category==="สามัญ");if(!r.length){ne(`<div class="max-w-lg mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🌱</p>
      <p class="font-medium">ไม่มีห้องที่ปรึกษาสามัญ</p>
      <p class="text-xs mt-1">ฟีเจอร์นี้สำหรับครูที่ปรึกษาชั้นสามัญเท่านั้น</p>
    </div>`);return}const v=await $e().catch(()=>({})),p=parseInt(v.academicYear??2568),f=parseInt(v.semester??1);let j=r[0].main_room;const I=async T=>{var u,N;j=T,ne(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);const[d,o]=await Promise.all([dt(p,f,"สามัญ").catch(()=>[]),ze(T).catch(()=>[])]);if(!d.length){ne(`<div class="max-w-lg mx-auto text-center py-16">
        <p class="text-4xl mb-3">🌱</p>
        <p class="font-medium text-gray-600">ยังไม่มีหัวข้อคะแนนทักษะชีวิต</p>
        <p class="text-sm text-gray-400 mt-1">ให้แอดมินเพิ่มหัวข้อในเมนู "คะแนนทักษะชีวิต" ก่อนครับ</p>
      </div>`);return}const S=d.map(n=>n.id),R=await it(S,o.map(n=>n.id)).catch(()=>[]),w={};R.forEach(n=>{w[n.student_id]||(w[n.student_id]={}),w[n.student_id][n.column_id]=n.score});const q=d.reduce((n,L)=>n+(L.max_score??0),0),$="sticky left-0 z-10 bg-white border-r border-gray-100",x="sticky z-10 bg-white border-r border-gray-100",i="border border-gray-100 text-center text-xs px-2 py-2 font-medium";ne(`<div class="animate-fade">
      <div class="flex items-center gap-3 mb-4 flex-wrap">
        <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
        <h2 class="font-bold text-gray-800">🌱 คะแนนทักษะชีวิต</h2>
        ${r.length>1?`
        <select id="ls-room-sel" class="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white ml-2">
          ${r.map(n=>`<option value="${n.main_room}" ${n.main_room===T?"selected":""}>${n.main_room}</option>`).join("")}
        </select>`:`<span class="text-sm font-semibold text-emerald-700">${T}</span>`}
        <button id="ls-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600">
          ซ่อนคะแนนรวม
        </button>
        <span class="text-xs text-gray-400 ml-auto">ภาค ${f} / ${p}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 ใช้ <b>Tab / →</b> เลื่อนขวา · <b>Enter / ↓</b> เลื่อนลง · <b>↑ ↓ ← →</b> เลื่อนทิศทาง · บันทึกอัตโนมัติเมื่อออกจากช่อง
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-200 shadow-md bg-white">
        <table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:20">
              <th class="${$} ${i} bg-gray-50 text-left px-3" style="min-width:40px">#</th>
              <th class="${x} ${i} bg-gray-50 text-left px-2" style="left:40px;min-width:60px">รหัส</th>
              <th class="${x} ${i} bg-gray-50 text-left px-3" style="left:100px;min-width:180px">ชื่อ-นามสกุล</th>
              ${d.map(n=>`
              <th class="${i} bg-emerald-50 text-emerald-800" style="min-width:80px">
                <div class="font-semibold leading-tight">${n.name==="เดินสวนสนาม"?"🔒 ":""}${n.name}</div>
                <div class="text-[10px] font-normal text-emerald-600 mt-0.5">/${n.max_score}</div>
              </th>`).join("")}
              <th id="ls-total-th" class="${i} bg-indigo-50 text-indigo-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${q}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            ${o.map((n,L)=>{const m=w[n.id]??{},M=d.reduce((h,O)=>h+(parseFloat(m[O.id]??0)||0),0);return`<tr class="hover:bg-gray-50/50 ls-row" data-sid="${n.id}">
                <td class="${$} border border-gray-100 text-center text-gray-400 px-2" style="min-width:40px">${L+1}</td>
                <td class="${x} border border-gray-100 font-mono text-gray-500 px-2" style="left:40px;min-width:60px">${n.student_code}</td>
                <td class="${x} border border-gray-100 px-3 py-1.5" style="left:100px;min-width:180px">
                  <div class="flex items-center gap-2">
                    ${n.image_url?`<img src="${n.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200"/>`:`<div class="w-6 h-8 rounded-md border border-gray-200 bg-gradient-to-tr from-emerald-200 to-teal-200
                                    flex items-center justify-center text-xs font-bold text-emerald-700 flex-shrink-0">
                           ${(n.full_name??"?").charAt(0)}
                         </div>`}
                    <span class="text-gray-800 font-medium truncate max-w-[130px]">${n.full_name}</span>
                  </div>
                </td>
                ${d.map(h=>{const O=m[h.id]??"";return h.name==="เดินสวนสนาม"?`<td class="border border-gray-100 px-2 py-2 text-center bg-slate-50 text-slate-600 font-semibold"
                      title="คะแนนส่วนกลาง ครูที่ปรึกษาไม่สามารถแก้ไขได้">
                      ${O===""?"—":O}
                    </td>`:`<td class="border border-gray-100 p-0 ls-score-cell"
                    data-sid="${n.id}" data-cid="${h.id}" data-max="${h.max_score}">
                    <input type="number" min="0" max="${h.max_score}" step="0.5"
                      class="ls-input w-full h-full px-2 py-2 text-center text-xs bg-transparent outline-none
                             focus:bg-indigo-50 focus:ring-2 focus:ring-inset focus:ring-indigo-300 transition"
                      value="${O}" placeholder="—"
                      data-initial-value="${O}"
                      data-sid="${n.id}" data-cid="${h.id}" data-max="${h.max_score}" data-row="${L}" data-col="${d.filter(c=>c.name!=="เดินสวนสนาม").findIndex(c=>c.id===h.id)}" />
                  </td>`}).join("")}
                <td class="border border-gray-100 text-center font-semibold text-indigo-700 ls-total" data-sid="${n.id}">
                  ${M>0?M.toFixed(1).replace(/\.0$/,""):"—"}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>`),(u=document.getElementById("ls-room-sel"))==null||u.addEventListener("change",n=>I(n.target.value));let y=!0;(N=document.getElementById("ls-toggle-total-btn"))==null||N.addEventListener("click",function(){y=!y;const n=y?"":"none",L=document.getElementById("ls-total-th");L&&(L.style.display=n),document.querySelectorAll(".ls-total").forEach(m=>m.style.display=n),this.textContent=y?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!y),this.classList.toggle("border-amber-300",!y),this.classList.toggle("text-amber-700",!y)});const k=[...document.querySelectorAll(".ls-input")],s=d.filter(n=>n.name!=="เดินสวนสนาม").length,e=o.length,l=(n,L)=>k.find(m=>+m.dataset.row===n&&+m.dataset.col===L),_=(n,L)=>{n<0&&(n=0),n>=e&&(n=e-1),L<0&&(L=s-1),L>=s&&(L=0);const m=l(n,L);m==null||m.focus(),m==null||m.select()},b=(n,L)=>{const m=n.closest("td");if(!m)return;const M=L?"ring-2 ring-inset ring-emerald-400 bg-emerald-50":"ring-2 ring-inset ring-red-400 bg-red-50";m.classList.add(...M.split(" ")),setTimeout(()=>m.classList.remove(...M.split(" ")),1200)},B=n=>{const L=document.querySelector(`.ls-total[data-sid="${n}"]`);if(!L)return;const M=k.filter(h=>+h.dataset.sid==+n).reduce((h,O)=>h+(parseFloat(O.value)||0),0);L.textContent=M>0?M.toFixed(1).replace(/\.0$/,""):"—"},A=async n=>{const L=+n.dataset.sid,m=+n.dataset.cid,M=+n.dataset.max,h=n.value.trim();if(h===(n.dataset.initialValue??""))return;const O=h===""?null:parseFloat(h);if(O!==null&&(O<0||O>M)){b(n,!1);return}try{await mt(L,m,O,(t==null?void 0:t.id)??null),n.dataset.initialValue=h,b(n,!0),B(L)}catch(c){console.error("[life skill save]",c),b(n,!1),H(`บันทึกทักษะชีวิตไม่สำเร็จ: ${ae(c)}`,"error")}};k.forEach(n=>{n.addEventListener("blur",()=>A(n)),n.addEventListener("keydown",L=>{const m=+n.dataset.row,M=+n.dataset.col;switch(L.key){case"Tab":L.preventDefault(),L.shiftKey?M>0?_(m,M-1):_(m-1,s-1):M<s-1?_(m,M+1):_(m+1,0);break;case"Enter":L.preventDefault(),A(n),m<e-1?_(m+1,M):_(0,M);break;case"ArrowDown":L.preventDefault(),_(m<e-1?m+1:0,M);break;case"ArrowUp":L.preventDefault(),_(m>0?m-1:e-1,M);break;case"ArrowRight":L.preventDefault(),M<s-1?_(m,M+1):_(m+1,0);break;case"ArrowLeft":L.preventDefault(),M>0?_(m,M-1):_(m-1,s-1);break;case"Home":L.preventDefault(),L.ctrlKey?_(0,0):_(m,0);break;case"End":L.preventDefault(),L.ctrlKey?_(e-1,s-1):_(m,s-1);break;case"Escape":n.blur();break}}),n.addEventListener("input",()=>{const L=+n.dataset.max,m=String(Math.floor(L)).length;if(n.value.replace(".","").replace("-","").length>=m&&!n.value.includes(".")){const h=+n.dataset.row,O=+n.dataset.col;A(n),setTimeout(()=>_(h,O+1),50)}})})};I(j)}async function Xt(t,a=null){xe("reading-score"),pe("บันทึกคะแนนอ่านคิดวิเคราะห์");const r=await $e().catch(()=>({})),v=parseInt(r.academicYear??2568),p=parseInt(r.semester??1);ft(r);const f=t?await we(t.id).catch(()=>[]):[],j=[...new Set(f.map(d=>d.class_name).filter(Boolean))].sort();if(!j.length){ne(`<div class="max-w-lg mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">📖</p>
      <p class="font-medium">ยังไม่มีห้องเรียน</p>
      <p class="text-xs mt-1">กรุณาลงทะเบียนห้องเรียนก่อนบันทึกคะแนน</p>
    </div>`);return}let I=a&&j.includes(a)?a:j[0];const T=async d=>{var h,O;I=d,ne(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);let o,S;try{[o,S]=await Promise.all([xt(v,p),ze(d)])}catch(c){ne(`<div class="max-w-lg mx-auto text-center py-16 text-red-500">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium">โหลดรายชื่อนักเรียนไม่สำเร็จ</p>
        <p class="text-xs mt-1 text-gray-400">กรุณาตรวจสอบอินเทอร์เน็ตแล้วเปิดหน้านี้อีกครั้ง</p>
      </div>`),H(`โหลดข้อมูลไม่สำเร็จ: ${ae(c)}`,"error");return}if(!o.length){ne(`<div class="max-w-lg mx-auto text-center py-16">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium text-gray-600">ยังไม่มีหัวข้อคะแนนอ่านคิดวิเคราะห์</p>
        <p class="text-sm text-gray-400 mt-1">ให้แอดมินเพิ่มหัวข้อในเมนู "คะแนนอ่านคิดวิเคราะห์" ก่อนครับ</p>
      </div>`);return}const R=o.map(c=>c.id);let w;try{w=await pt(R,S.map(c=>c.id))}catch(c){ne(`<div class="max-w-lg mx-auto text-center py-16 text-red-500">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium">โหลดคะแนนไม่สำเร็จ</p>
        <p class="text-xs mt-1 text-gray-400">ระบบจะไม่แสดงช่องว่างแทนคะแนน กรุณาตรวจสอบอินเทอร์เน็ตแล้วเปิดหน้านี้อีกครั้ง</p>
      </div>`),H(`โหลดคะแนนไม่สำเร็จ: ${ae(c)}`,"error");return}const q={};w.forEach(c=>{q[c.student_id]||(q[c.student_id]={}),q[c.student_id][c.column_id]=c.score});const $=o.reduce((c,g)=>c+(g.max_score??0),0),x="sticky left-0 z-10 bg-white border-r border-gray-100",i="sticky z-10 bg-white border-r border-gray-100",y="border border-gray-100 text-center text-xs px-2 py-2 font-medium";ne(`<div class="animate-fade">
      <div class="flex items-center gap-3 mb-4 flex-wrap">
        <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-indigo-600">← กลับ</button>
        <h2 class="font-bold text-gray-800">📖 คะแนนอ่านคิดวิเคราะห์และเขียน</h2>
        ${j.length>1?`
        <select id="rs-room-sel" class="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white ml-2">
          ${j.map(c=>`<option value="${c}" ${c===d?"selected":""}>${c}</option>`).join("")}
        </select>`:`<span class="text-sm font-semibold text-indigo-700">${d}</span>`}
        <button id="rs-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-violet-300 hover:text-violet-600">
          ซ่อนคะแนนรวม
        </button>
        <span id="rs-save-status" class="text-xs text-gray-400" aria-live="polite">บันทึกอัตโนมัติ</span>
        <span class="text-xs text-gray-400 ml-auto">ภาค ${p} / ${v}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 <b>Tab / →</b> ขวา · <b>Enter / ↓</b> ลง · <b>↑ ↓ ← →</b> เลื่อน · บันทึกอัตโนมัติ
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-200 shadow-md bg-white">
        <table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:20">
              <th class="${x} ${y} bg-gray-50 text-left px-3" style="min-width:40px">#</th>
              <th class="${i} ${y} bg-gray-50 text-left px-2" style="left:40px;min-width:60px">รหัส</th>
              <th class="${i} ${y} bg-gray-50 text-left px-3" style="left:100px;min-width:180px">ชื่อ-นามสกุล</th>
              ${o.map(c=>`
              <th class="${y} bg-indigo-50 text-indigo-800" style="min-width:80px">
                <div class="font-semibold leading-tight">${c.name}</div>
                <div class="text-[10px] font-normal text-indigo-500 mt-0.5">/${c.max_score}</div>
              </th>`).join("")}
              <th id="rs-total-th" class="${y} bg-violet-50 text-violet-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${$}</span>
              </th>
              <th id="rs-score100-th" class="${y} bg-indigo-50 text-indigo-700" style="min-width:60px">
                /100
              </th>
              <th id="rs-label-th" class="${y} bg-purple-50 text-purple-700" style="min-width:90px">
                ผลประเมิน
              </th>
            </tr>
          </thead>
          <tbody>
            ${S.map((c,g)=>{const E=q[c.id]??{},V=o.reduce((W,F)=>W+(parseFloat(E[F.id]??0)||0),0);return`<tr class="hover:bg-gray-50/50" data-sid="${c.id}">
                <td class="${x} border border-gray-100 text-center text-gray-400 px-2" style="min-width:40px">${g+1}</td>
                <td class="${i} border border-gray-100 font-mono text-gray-500 px-2" style="left:40px;min-width:60px">${c.student_code}</td>
                <td class="${i} border border-gray-100 px-3 py-1.5" style="left:100px;min-width:180px">
                  <div class="flex items-center gap-2">
                    ${c.image_url?`<img src="${c.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200"/>`:`<div class="w-6 h-8 rounded-md border border-gray-200 bg-gradient-to-tr from-indigo-200 to-violet-200
                                    flex items-center justify-center text-xs font-bold text-indigo-700 flex-shrink-0">
                           ${(c.full_name??"?").charAt(0)}
                         </div>`}
                    <span class="text-gray-800 font-medium truncate max-w-[130px]">${c.full_name}</span>
                  </div>
                </td>
                ${o.map(W=>{const F=E[W.id]??"";return`<td class="border border-gray-100 p-0 rs-score-cell"
                    data-sid="${c.id}" data-cid="${W.id}" data-max="${W.max_score}">
                    <input type="number" min="0" max="${W.max_score}" step="0.5"
                      class="rs-input w-full h-full px-2 py-2 text-center text-xs bg-transparent outline-none
                             focus:bg-indigo-50 focus:ring-2 focus:ring-inset focus:ring-indigo-300 transition"
                      value="${F}" placeholder="—"
                      data-sid="${c.id}" data-cid="${W.id}" data-max="${W.max_score}"
                      data-row="${g}" data-col="${o.findIndex(P=>P.id===W.id)}" />
                  </td>`}).join("")}
                <td class="border border-gray-100 text-center font-semibold text-violet-700 rs-total" data-sid="${c.id}">
                  ${V>0?V.toFixed(1).replace(/\.0$/,""):"—"}
                </td>
                <td class="border border-gray-100 text-center text-xs font-medium text-indigo-600 rs-score100" data-sid="${c.id}">
                  ${V>0?(V/2).toFixed(1).replace(/\.0$/,""):"—"}
                </td>
                <td class="border border-gray-100 text-center rs-label" data-sid="${c.id}">
                  ${V>0?Re(V/2):"—"}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>`),(h=document.getElementById("rs-room-sel"))==null||h.addEventListener("change",c=>T(c.target.value));let k=!0;(O=document.getElementById("rs-toggle-total-btn"))==null||O.addEventListener("click",function(){k=!k;const c=k?"":"none";["rs-total-th","rs-score100-th","rs-label-th"].forEach(g=>{const E=document.getElementById(g);E&&(E.style.display=c)}),document.querySelectorAll(".rs-total,.rs-score100,.rs-label").forEach(g=>g.style.display=c),this.textContent=k?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!k),this.classList.toggle("border-amber-300",!k),this.classList.toggle("text-amber-700",!k)});const s=[...document.querySelectorAll(".rs-input")],e=o.length,l=S.length,_=(c,g)=>s.find(E=>+E.dataset.row===c&&+E.dataset.col===g),b=(c,g)=>{c<0&&(c=0),c>=l&&(c=l-1),g<0&&(g=e-1),g>=e&&(g=0);const E=_(c,g);E==null||E.focus(),E==null||E.select()},B=(c,g)=>{const E=c.closest("td");if(!E)return;const V=g?"ring-2 ring-inset ring-indigo-400 bg-indigo-50":"ring-2 ring-inset ring-red-400 bg-red-50";E.classList.add(...V.split(" ")),setTimeout(()=>E.classList.remove(...V.split(" ")),1200)},A=document.getElementById("rs-save-status");let u=null;const N=(c,g="text-gray-400",E=!1)=>{A&&(clearTimeout(u),A.className=`text-xs ${g}`,A.textContent=c,E&&(u=setTimeout(()=>{A.className="text-xs text-gray-400",A.textContent="บันทึกอัตโนมัติ"},2500)))},n=c=>{const g=document.querySelector(`.rs-total[data-sid="${c}"]`);if(!g)return;const E=document.querySelector(`.rs-score100[data-sid="${c}"]`),V=document.querySelector(`.rs-label[data-sid="${c}"]`),W=s.filter(F=>+F.dataset.sid==+c).reduce((F,P)=>F+(parseFloat(P.value)||0),0);g.textContent=W>0?W.toFixed(1).replace(/\.0$/,""):"—",E&&(E.textContent=W>0?(W/2).toFixed(1).replace(/\.0$/,""):"—"),V&&(V.innerHTML=W>0?Re(W/2):"—")},L=new Map,m=c=>c.trim()===""?"null":String(parseFloat(c));s.forEach(c=>L.set(`${c.dataset.sid}:${c.dataset.cid}`,{chain:Promise.resolve(),requested:m(c.value),saved:m(c.value)}));const M=c=>{const g=+c.dataset.sid,E=+c.dataset.cid,V=+c.dataset.max,W=c.value.trim()===""?null:parseFloat(c.value);if(W!==null&&(!Number.isFinite(W)||W<0||W>V))return B(c,!1),N(`คะแนนต้องอยู่ระหว่าง 0-${V}`,"text-red-600 font-medium"),Promise.resolve(!1);const F=`${g}:${E}`,P=W===null?"null":String(W),z=L.get(F)??{chain:Promise.resolve(),requested:null,saved:null};if(L.set(F,z),z.requested===P||z.saved===P&&z.requested===z.saved)return z.chain;z.requested=P;const J=c.value;return z.chain=z.chain.catch(()=>{}).then(async()=>{N("กำลังบันทึก...","text-indigo-500 font-medium");let G=null;for(let C=0;C<2;C++)try{await bt(g,E,W,(t==null?void 0:t.id)??null),G=null;break}catch(D){G=D,C===0&&await new Promise(K=>setTimeout(K,500))}if(G)throw G;return z.saved=P,m(c.value)===m(J)&&(B(c,!0),n(g)),N("บันทึกแล้ว ✓","text-emerald-600 font-medium",!0),!0}).catch(G=>(z.requested===P&&(z.requested=null),B(c,!1),N("บันทึกไม่สำเร็จ — กรุณาลองอีกครั้ง","text-red-600 font-medium"),H(`บันทึกคะแนนไม่สำเร็จ: ${(G==null?void 0:G.message)??"กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่"}`,"error"),!1)),z.chain};s.forEach(c=>{c.addEventListener("blur",()=>M(c)),c.addEventListener("keydown",g=>{const E=+c.dataset.row,V=+c.dataset.col;switch(g.key){case"Tab":g.preventDefault(),g.shiftKey?V>0?b(E,V-1):b(E-1,e-1):V<e-1?b(E,V+1):b(E+1,0);break;case"Enter":g.preventDefault(),M(c),E<l-1?b(E+1,V):b(0,V);break;case"ArrowDown":g.preventDefault(),b(E<l-1?E+1:0,V);break;case"ArrowUp":g.preventDefault(),b(E>0?E-1:l-1,V);break;case"ArrowRight":g.preventDefault(),V<e-1?b(E,V+1):b(E+1,0);break;case"ArrowLeft":g.preventDefault(),V>0?b(E,V-1):b(E-1,e-1);break;case"Home":g.preventDefault(),g.ctrlKey?b(0,0):b(E,0);break;case"End":g.preventDefault(),g.ctrlKey?b(l-1,e-1):b(E,e-1);break;case"Escape":c.blur();break}}),c.addEventListener("input",()=>{const g=+c.dataset.max,E=String(Math.floor(g)).length;c.value.replace(/[^0-9]/g,"").length>=E&&!c.value.includes(".")&&(M(c),setTimeout(()=>b(+c.dataset.row,+c.dataset.col+1),50))})})};T(I)}const Re=t=>{const a=yt(t);return`<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${a.cls}">${a.label}</span>`},se={pray:{label:"/",color:"text-emerald-600 font-bold",bg:"bg-emerald-50",score:2,fullLabel:"ละหมาด"},absent:{label:"X",color:"text-red-600 font-bold",bg:"bg-red-50",score:0,fullLabel:"ขาดละหมาด"},usor:{label:"U",color:"text-purple-600 font-bold",bg:"bg-purple-50",score:2,fullLabel:"อูโซร/ประจำเดือน"},followed:{label:"-",color:"text-blue-500 font-bold",bg:"bg-blue-50",score:1,fullLabel:"ติดตามแล้ว"},avoid:{label:"N",color:"text-orange-500 font-bold",bg:"bg-orange-50",score:-1,fullLabel:"หลีกเลี่ยง"}},We=["อา","จ","อ","พ","พฤ","ศ","ส"],Tt=t=>({musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"})[t]||"ไม่ระบุจุด",At=t=>({musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-purple-50 text-purple-700 border-purple-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"})[t]||"bg-gray-50 text-gray-500 border-gray-100";function Qe(t=new Date){const a=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),v=String(t.getDate()).padStart(2,"0");return`${a}-${r}-${v}`}function qt(t){if(!t)return"—";try{return new Date(t).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return"—"}}async function es(t,a=[],r=null){if(xe("prayer-score"),pe("ติดตามผลสแกนละหมาด"),window._cleanupPrayerRoomMonitor)try{window._cleanupPrayerRoomMonitor()}catch{}const v=a.filter($=>$.category==="ศาสนา");if(!(t!=null&&t.id)||!v.length){ne(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
      <p class="text-5xl mb-4">🕌</p>
      <p class="font-medium text-gray-700">หน้านี้เปิดเฉพาะครูที่ปรึกษาชั้นศาสนา</p>
      <p class="text-xs mt-1">ไม่พบห้องที่ปรึกษาศาสนาที่ผูกกับบัญชีครูของคุณ</p>
    </div>`);return}const p=v.map($=>$.main_room).filter(Boolean);let f=p.includes(r)?r:p[0],j=null,I=!1,T=0;window._cleanupPrayerRoomMonitor=()=>{j&&clearInterval(j),j=null};const d=()=>{var $,x,i,y;ne(`
      <div class="animate-fade space-y-4">
        <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col md:flex-row md:items-center gap-3">
          <button id="prm-back" class="self-start px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-50">
            ← กลับ
          </button>
          <div class="flex-1 min-w-0">
            <h2 class="font-extrabold text-gray-800 text-base">🕌 Monitor การสแกนละหมาด</h2>
            <p class="text-xs text-gray-400 mt-0.5">เฉพาะนักเรียนชั้นศาสนาในความรับผิดชอบของคุณ</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            ${p.length>1?`
            <select id="prm-room-select" class="text-xs border border-gray-200 rounded-xl px-3 py-2 bg-white font-bold text-emerald-800">
              ${p.map(k=>`<option value="${Y(k)}" ${k===f?"selected":""}>${Y(k)}</option>`).join("")}
            </select>`:`<span class="px-3 py-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 text-xs font-extrabold">${Y(f)}</span>`}
            <button id="prm-refresh" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 active:scale-95 transition">
              รีเฟรช
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-gray-400 uppercase">นักเรียนทั้งหมด</p>
            <p id="prm-total" class="text-2xl font-extrabold text-gray-800 mt-1">—</p>
          </div>
          <div class="bg-white border border-emerald-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-emerald-500 uppercase">สแกนแล้ว</p>
            <p id="prm-done" class="text-2xl font-extrabold text-emerald-700 mt-1">—</p>
          </div>
          <div class="bg-white border border-purple-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-purple-500 uppercase">อูโซร</p>
            <p id="prm-usor" class="text-2xl font-extrabold text-purple-700 mt-1">—</p>
          </div>
          <div class="bg-white border border-amber-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-amber-500 uppercase">ยังไม่สแกน</p>
            <p id="prm-pending" class="text-2xl font-extrabold text-amber-700 mt-1">—</p>
          </div>
        </div>

        <div class="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 class="font-bold text-gray-800 text-sm">รายการนักเรียนห้อง ${Y(f)}</h3>
              <p id="prm-updated" class="text-[11px] text-gray-400 mt-0.5">กำลังโหลดข้อมูล...</p>
            </div>
            <input id="prm-search" type="text" placeholder="ค้นหาชื่อหรือรหัส"
              class="w-full sm:w-56 text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
          </div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[720px] text-xs">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-center w-12">#</th>
                  <th class="px-4 py-3 text-left">นักเรียน</th>
                  <th class="px-4 py-3 text-center w-28">ห้องสามัญ</th>
                  <th class="px-4 py-3 text-center w-32">สถานะวันนี้</th>
                  <th class="px-4 py-3 text-center w-28">เวลา</th>
                  <th class="px-4 py-3 text-center w-36">จุดสแกน</th>
                  <th class="px-4 py-3 text-left w-44">ผู้สแกน</th>
                </tr>
              </thead>
              <tbody id="prm-table-body" class="divide-y divide-gray-50">
                <tr><td colspan="7" class="py-12 text-center text-gray-400">กำลังโหลดข้อมูล...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `),($=document.getElementById("prm-back"))==null||$.addEventListener("click",()=>{var k;return(k=window._navTo)==null?void 0:k.call(window,"overview")}),(x=document.getElementById("prm-refresh"))==null||x.addEventListener("click",()=>q(f,{manual:!0})),(i=document.getElementById("prm-room-select"))==null||i.addEventListener("change",k=>{f=k.target.value,d(),q(f,{manual:!0})}),(y=document.getElementById("prm-search"))==null||y.addEventListener("input",()=>R(window._prmStudents||[],window._prmRecords||[]))},o=async $=>{const x=Qe(),{data:i,error:y}=await Ee.from("students").select("id, student_code, full_name, main_room, religion_room, image_url").eq("religion_room",$).eq("is_active",!0).order("student_code",{ascending:!0});if(y)throw y;const k=(i||[]).map(l=>l.id);if(!k.length)return{students:[],records:[]};const{data:s,error:e}=await Ee.from("prayer_records").select("id, student_id, status, check_date, location, input_method, scanned_by, scanner_name, same_room_flag, created_at").eq("check_date",x).in("student_id",k).not("location","is",null).order("created_at",{ascending:!1}).limit(300);if(e)throw e;return{students:i||[],records:s||[]}},S=$=>{const x=new Map;return $.forEach(i=>{x.has(i.student_id)||x.set(i.student_id,i)}),x},R=($,x)=>{var e;const i=document.getElementById("prm-table-body");if(!i)return;const y=(((e=document.getElementById("prm-search"))==null?void 0:e.value)||"").trim().toLowerCase(),k=S(x),s=$.filter(l=>!y||[l.full_name,l.student_code,l.main_room,l.religion_room].some(_=>String(_||"").toLowerCase().includes(y)));if(!s.length){i.innerHTML='<tr><td colspan="7" class="py-12 text-center text-gray-400">ไม่พบข้อมูลนักเรียน</td></tr>';return}i.innerHTML=s.map((l,_)=>{const b=k.get(l.id),B=b?se[b.status]||se.pray:null,A=b?`<span class="inline-flex px-2.5 py-1 rounded-full ${B.bg} ${B.color}">${B.fullLabel}</span>`:'<span class="inline-flex px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 font-bold border border-gray-100">ยังไม่สแกน</span>',u=(b==null?void 0:b.input_method)==="manual"?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-[10px] font-bold">กรอกรหัส</span>':"",N=b!=null&&b.same_room_flag?'<span class="inline-flex mt-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">ห้องเดียวกัน</span>':"";return`
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${_+1}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-3">
              ${l.image_url?`<img src="${Y(l.image_url)}" class="w-7 h-9 rounded-lg object-cover object-top border border-gray-200 shadow-sm" />`:`<div class="w-7 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-gray-200">${Y((l.full_name||"?").charAt(0))}</div>`}
              <div class="min-w-0">
                <p class="font-bold text-gray-800 truncate">${Y(l.full_name||"—")}</p>
                <p class="text-[11px] text-gray-400 font-mono">รหัส ${Y(l.student_code||"—")}</p>
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-center text-gray-500 font-bold">${Y(l.main_room||"—")}</td>
          <td class="px-4 py-3 text-center">${A}<div class="flex flex-wrap justify-center gap-1">${u}${N}</div></td>
          <td class="px-4 py-3 text-center font-mono text-gray-600">${qt(b==null?void 0:b.created_at)}</td>
          <td class="px-4 py-3 text-center">
            ${b!=null&&b.location?`<span class="px-2.5 py-1 rounded-full border text-[11px] font-bold ${At(b.location)}">${Y(Tt(b.location))}</span>`:'<span class="text-gray-300">—</span>'}
          </td>
          <td class="px-4 py-3 text-gray-500">${Y((b==null?void 0:b.scanner_name)||(b==null?void 0:b.scanned_by)||"—")}</td>
        </tr>
      `}).join("")},w=($,x)=>{var l,_,b,B;const i=S(x),y=i.size,k=[...i.values()].filter(A=>A.status==="usor").length,s=Math.max(0,$.length-y);(l=document.getElementById("prm-total"))==null||l.replaceChildren(document.createTextNode(String($.length))),(_=document.getElementById("prm-done"))==null||_.replaceChildren(document.createTextNode(String(y))),(b=document.getElementById("prm-usor"))==null||b.replaceChildren(document.createTextNode(String(k))),(B=document.getElementById("prm-pending"))==null||B.replaceChildren(document.createTextNode(String(s)));const e=document.getElementById("prm-updated");e&&(e.textContent=`อัปเดตล่าสุด ${new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"})} น.`)};async function q($,{manual:x=!1}={}){var i;if(!I){I=!0;try{const{students:y,records:k}=await o($);window._prmStudents=y,window._prmRecords=k;const s=((i=k[0])==null?void 0:i.id)||0;!x&&T&&s>T&&H("มีรายการสแกนละหมาดใหม่","info"),T=Math.max(T,s),w(y,k),R(y,k)}catch(y){console.error("Prayer room monitor failed:",y),H("โหลดข้อมูล Monitor ไม่สำเร็จ: "+ae(y),"error");const k=document.getElementById("prm-table-body");k&&(k.innerHTML='<tr><td colspan="7" class="py-12 text-center text-red-400">โหลดข้อมูลไม่สำเร็จ</td></tr>')}finally{I=!1}}}d(),await q(f,{manual:!0}),j=setInterval(()=>{document.visibilityState==="visible"&&q(f)},5e3)}function Mt(t,a,r=0){const v=[],p=new Date(t),f=new Date(a),I=(p.getDay()-r+7)%7;I!==0&&p.setDate(p.getDate()-I);let T=new Date(p),d=1;for(;T<=f;){const o=[];for(let S=0;S<5;S++){const R=new Date(T);R.setDate(R.getDate()+S),R<=f&&o.push({date:new Date(R),ds:R.toISOString().slice(0,10),weekN:d})}o.length>0&&(v.push({n:d,days:o,label:`${de(o[0].date)}–${de(o[o.length-1].date)}`}),d++),T.setDate(T.getDate()+7)}return v}function qe(t,a){const r=a.reduce((p,f)=>{var j;return p+(((j=se[t[f.ds]])==null?void 0:j.score)??0)},0),v=a.length*2;return v>0?Math.min(10,Math.max(0,Math.round(r/v*100)/10)):0}async function ts(t,a){var T;xe("prayer-score"),pe("บันทึกคะแนนละหมาด");const v=((await $e().catch(()=>({}))).prayerScannerTeachers||"").split(/[\s,]+/).map(d=>d.trim()).filter(Boolean);let p=!1;if(t){let d=null;try{const{data:o}=await Ee.from("profiles").select("role").eq("id",t.profile_id).maybeSingle();d=o}catch{}p=v.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(d==null?void 0:d.role)==="admin"}if(!a.length){if(p){ne(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
        <p class="text-5xl mb-4">🕌</p>
        <p class="font-medium text-gray-700">ไม่มีห้องที่ปรึกษา (ศาสนา) ที่รับผิดชอบ</p>
        <p class="text-sm text-gray-400 mt-2 mb-6">แต่คุณได้รับสิทธิ์ในการสแกนบันทึกเวลาละหมาดของนักเรียน</p>
        <button id="btn-open-scanner-direct" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold rounded-2xl shadow-lg transition flex items-center gap-2 mx-auto">
          ${Te}
          <span>เปิดกล้องสแกน</span>
        </button>
      </div>`),(T=document.getElementById("btn-open-scanner-direct"))==null||T.addEventListener("click",async()=>{const{renderStudentPrayerScanner:d}=await ue(async()=>{const{renderStudentPrayerScanner:o}=await import("./student-views-XU2YRhG1.js");return{renderStudentPrayerScanner:o}},__vite__mapDeps([4,5,0,1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));d(t)});return}ne(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
      <p class="text-5xl mb-4">🕌</p>
      <p class="font-medium">ไม่มีห้องที่ปรึกษา (ศาสนา) ที่รับผิดชอบ</p>
    </div>`);return}const f=a.map(d=>d.main_room);let j=f[0];const I=async d=>{var m,M,h,O,c;j=d,ne(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`);const{getSystemConfig:o}=await ue(async()=>{const{getSystemConfig:g}=await import("./api-vSXCr5aV.js").then(E=>E.eB);return{getSystemConfig:g}},__vite__mapDeps([0,1,2,3])),S=await o().catch(()=>({})),R=S.academicYear??S.academic_year??new Date().getFullYear()+543,w=S.semester??1,q=S.semester_start,$=S.semester_end;if(!q||!$){ne(`<div class="max-w-xl mx-auto text-center py-20">
        <p class="text-5xl mb-4">📅</p>
        <p class="font-semibold text-gray-700">ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน</p>
        <p class="text-sm text-gray-400 mt-2">แอดมินต้องระบุวันเริ่ม-สิ้นสุดภาคเรียนในหน้าตั้งค่าระบบ</p>
      </div>`);return}const[x,i]=await Promise.all([ct(d),ut(t.id,d,q,$)]),y=Mt(q,$),k=y.flatMap(g=>g.days),s=k.length,e={};for(const g of i)e[g.student_id]||(e[g.student_id]={}),e[g.student_id][g.check_date]=g.status;const l=32,_=160,b="border border-gray-200 text-center text-xs select-none",B="sticky left-0 z-20 bg-white border border-gray-200",A="sticky z-20 bg-white border border-gray-200",u=g=>g>=8?"text-emerald-600":g>=6?"text-amber-500":"text-red-600";ne(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <!-- Top bar -->
      <div class="flex items-center gap-2 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0 flex-wrap">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-emerald-600 hover:text-emerald-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h2>
          <p class="text-xs text-gray-400">${d} · ${y.length} สัปดาห์ · ${s} วัน</p>
        </div>
        ${f.length>1?`<select id="prayer-room-sel" class="text-xs border border-gray-200 rounded-xl px-2 py-1.5 bg-white">
          ${f.map(g=>`<option value="${g}" ${g===d?"selected":""}>${g}</option>`).join("")}</select>`:""}
        <div class="flex gap-1 text-xs hidden sm:flex">
          ${Object.entries(se).map(([,g])=>`<span class="px-1.5 py-1 ${g.bg} ${g.color} rounded">${g.label}=${g.fullLabel.slice(0,3)}</span>`).join("")}
        </div>
        <button id="prayer-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-emerald-300 hover:text-emerald-600">
          ซ่อนคะแนนรวม
        </button>
        <button id="btn-prayer-stats" class="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg font-medium hover:bg-indigo-700 transition">📊 สถิติ</button>
        <button id="btn-prayer-room-monitor" class="px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 text-xs rounded-lg font-bold hover:bg-amber-100 transition">
          👁️ Monitor
        </button>
        ${p?`
        <button id="btn-prayer-scanner" class="px-3 py-1.5 bg-emerald-600 text-white text-xs rounded-xl font-bold hover:bg-emerald-700 active:scale-[0.98] transition flex items-center gap-1.5 shadow-sm">
          ${ve}
          <span>สแกนละหมาด</span>
        </button>
        `:""}
      </div>
      <div id="prayer-saving" class="hidden fixed top-16 right-4 z-50 bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
      <!-- Grid -->
      <div class="flex-1 overflow-auto" id="prayer-grid-wrap">
        ${x.length?`<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <!-- Row 1: สัปดาห์ (colspan 5, clickable) -->
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${B} bg-gray-50" style="width:28px">#</th>
              <th class="${A} bg-gray-50" style="left:28px;width:64px">รหัส</th>
              <th class="${A} bg-gray-50 text-left px-2" style="left:92px;min-width:${_}px">ชื่อ-นามสกุล</th>
              ${y.map(g=>`
                <th colspan="${g.days.length}" class="${b} bg-emerald-600 text-white font-semibold
                  cursor-pointer hover:bg-emerald-700 prayer-wk-th"
                  data-week="${g.n}" title="${g.label}">
                  Week${g.n}
                </th>`).join("")}
              <th class="${b} bg-indigo-50 text-indigo-700 font-semibold prayer-score-th" style="min-width:52px">คะแนน<br/>/10</th>
            </tr>
            <!-- Row 2: วันที่รายวัน -->
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${B} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${A} bg-gray-100 text-gray-500" style="left:28px;width:64px">รหัส</th>
              <th class="${A} bg-gray-100 text-gray-500 text-left px-2" style="left:92px;min-width:${_}px">ชื่อ-นามสกุล</th>
              ${y.map(g=>g.days.map(E=>`
                <th class="${b} bg-gray-100 text-gray-400 font-normal"
                  style="width:${l}px;min-width:${l}px;font-size:9px">
                  ${We[E.date.getDay()]}<br/>${de(E.date)}
                </th>`).join("")).join("")}
              <th class="${b} bg-indigo-50 prayer-score-th" style="min-width:52px"></th>
            </tr>
          </thead>
          <tbody>
            ${x.map((g,E)=>{const V=e[g.id]??{},W=k.reduce((P,z)=>{var J;return P+(((J=se[V[z.ds]])==null?void 0:J.score)??0)},0),F=s>0?Math.max(0,Math.round(W/(s*2)*100)/10):0;return`<tr class="hover:bg-gray-50" data-sid="${g.id}">
                <td class="${B} text-center text-gray-400" style="width:28px">${E+1}</td>
                <td class="${A} text-center font-mono text-gray-600" style="left:28px;width:64px">${g.student_code}</td>
                <td class="${A} px-2 student-name-cell cursor-pointer hover:bg-emerald-50"
                  style="left:92px;min-width:${_}px" title="คลิกดูสถิติรายบุคคล">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${g.image_url?`<img src="${g.image_url}" class="w-6 h-6 object-cover rounded flex-shrink-0"/>`:'<div class="w-6 h-6 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs">👤</div>'}
                    <span class="text-gray-800 text-xs truncate max-w-[100px]">${g.full_name}</span>
                  </div>
                </td>
                ${y.map(P=>P.days.map(z=>{const J=V[z.ds]??null,G=J?se[J]:null;return`<td class="border border-gray-100 text-center cursor-pointer select-none
                    prayer-cell hover:bg-gray-100 ${G?G.bg:""}"
                    data-sid="${g.id}" data-date="${z.ds}"
                    style="width:${l}px;min-width:${l}px;height:28px">
                    ${G?`<span class="${G.color} text-xs">${G.label}</span>`:""}
                  </td>`}).join("")).join("")}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${u(F)} prayer-score-cell"
                  id="score-${g.id}" style="min-width:52px;font-size:11px">${F}</td>
              </tr>`}).join("")}
          </tbody>
        </table>`:`<div class="p-16 text-center text-gray-400"><p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียนในห้อง ${d}</p></div>`}
      </div>
    </div>`);const N=document.getElementById("prayer-grid-wrap");if(!N)return;(m=document.getElementById("prayer-room-sel"))==null||m.addEventListener("change",g=>I(g.target.value)),(M=document.getElementById("btn-prayer-stats"))==null||M.addEventListener("click",()=>Nt(t,d,x,y,e,k,R,w)),(h=document.getElementById("btn-prayer-room-monitor"))==null||h.addEventListener("click",()=>{var g;(g=window._openReligionPrayerMonitor)==null||g.call(window,d)}),p&&((O=document.getElementById("btn-prayer-scanner"))==null||O.addEventListener("click",async()=>{const{renderStudentPrayerScanner:g}=await ue(async()=>{const{renderStudentPrayerScanner:E}=await import("./student-views-XU2YRhG1.js");return{renderStudentPrayerScanner:E}},__vite__mapDeps([4,5,0,1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));g(t)}));let n=!0;(c=document.getElementById("prayer-toggle-total-btn"))==null||c.addEventListener("click",function(){n=!n;const g=n?"":"none";document.querySelectorAll(".prayer-score-th,.prayer-score-cell").forEach(E=>E.style.display=g),this.textContent=n?"ซ่อนคะแนนรวม":"แสดงคะแนนรวม",this.classList.toggle("bg-amber-50",!n),this.classList.toggle("border-amber-300",!n),this.classList.toggle("text-amber-700",!n)}),N.addEventListener("click",g=>{var J;const E=g.target.closest(".student-name-cell");if(!E)return;const V=parseInt((J=E.closest("[data-sid]"))==null?void 0:J.dataset.sid),W=x.find(G=>G.id===V);if(!W)return;const F=e[V]??{},P={pray:0,absent:0,usor:0,followed:0,avoid:0,noRecord:0};for(const G of k){const C=F[G.ds]??null;C&&P[C]!==void 0?P[C]++:P.noRecord++}const z=qe(F,k);Ke({student:W,no:x.indexOf(W)+1,...P,score:z},y,e,k,u)});const L=g=>{const E=e[g]??{},V=k.reduce((P,z)=>{var J;return P+(((J=se[E[z.ds]])==null?void 0:J.score)??0)},0),W=s>0?Math.max(0,Math.round(V/(s*2)*100)/10):0,F=document.getElementById(`score-${g}`);F&&(F.textContent=W,F.className=`border border-indigo-100 text-center bg-indigo-50 font-bold ${u(W)}`)};N.addEventListener("click",g=>{const E=g.target.closest(".prayer-cell");if(!E)return;const V=parseInt(E.dataset.sid),W=E.dataset.date,F=k.find(P=>P.ds===W);ge(g,P=>{e[V]||(e[V]={}),e[V][W]=P;const z=P?se[P]:null;Object.values(se).forEach(J=>E.classList.remove(J.bg)),z&&E.classList.add(z.bg),E.innerHTML=z?`<span class="${z.color} text-xs">${z.label}</span>`:"",L(V),De(t.id,V,d,W,P,(F==null?void 0:F.weekN)??null,t.full_name||"คุณครู").then(()=>{E.style.outline="2px solid #059669",E.style.outlineOffset="1px",setTimeout(()=>{E.style.outline="",E.style.outlineOffset=""},700)}).catch(()=>{E.style.outline="2px solid #ef4444",E.style.outlineOffset="1px",setTimeout(()=>{E.style.outline="",E.style.outlineOffset=""},700)})})}),N.addEventListener("click",g=>{const E=g.target.closest(".prayer-wk-th");if(!E)return;const V=parseInt(E.dataset.week),W=y.find(F=>F.n===V);W&&Bt(t,x,e,W,d,k,s,L)})};I(j)}function ge(t,a){var f;(f=document.getElementById("prayer-picker"))==null||f.remove();const r=document.createElement("div");r.id="prayer-picker",r.className="fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap";const v=(t.target.closest("td,th,button")??t.target).getBoundingClientRect();r.style.top=Math.min(v.bottom+4,window.innerHeight-60)+"px",r.style.left=Math.max(4,Math.min(v.left,window.innerWidth-220))+"px";const p=document.createElement("button");p.className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200",p.textContent="✕",p.title="ล้างค่า",p.onclick=()=>{r.remove(),a(null)},r.appendChild(p),Object.entries(se).forEach(([j,I])=>{const T=document.createElement("button");T.className=`px-3 py-1.5 rounded-lg text-sm font-bold ${I.bg} ${I.color} hover:opacity-80 transition`,T.textContent=I.label,T.title=I.fullLabel,T.onclick=()=>{r.remove(),a(j)},r.appendChild(T)}),document.body.appendChild(r),setTimeout(()=>document.addEventListener("click",()=>r.remove(),{once:!0}),50)}function Bt(t,a,r,v,p,f,j,I,T){var s;(s=document.getElementById("prayer-week-modal"))==null||s.remove();const d=v.days,o={};a.forEach(e=>{o[e.id]={},d.forEach(l=>{var _;o[e.id][l.ds]=((_=r[e.id])==null?void 0:_[l.ds])??null})});const S=e=>{const l=e?se[e]:null;return l?`${l.bg} ${l.color} font-bold`:"text-gray-300"},R=e=>e?se[e].label:"·",w=document.createElement("div");w.id="prayer-week-modal",w.className="fixed inset-0 z-[80] flex flex-col bg-white",w.innerHTML=`
    <div class="flex items-center gap-2 px-4 py-3 border-b bg-emerald-700 text-white flex-shrink-0">
      <button id="pw-close" class="text-white/70 hover:text-white text-xl leading-none">✕</button>
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${v.n}</h3>
        <p class="text-xs text-emerald-200">${v.label} · ${p}</p>
      </div>
      <button id="pw-set-all" class="text-xs px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition">AllCheck</button>
      <button id="pw-save" class="text-xs px-4 py-2 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition">✕ ปิด</button>
    </div>
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse" style="min-width:max-content">
        <thead class="sticky top-0 z-10 bg-white">
          <!-- Day column set-all buttons -->
          <tr class="border-b">
            <th class="px-3 py-2 text-left text-gray-500 font-medium" style="min-width:160px">นักเรียน</th>
            ${d.map(e=>`
              <th class="px-1 py-2 text-center" style="min-width:64px">
                <div class="font-semibold text-gray-700">${We[e.date.getDay()]} ${de(e.date)}</div>
                <button class="pw-day-all mt-1 text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded hover:bg-emerald-100"
                  data-ds="${e.ds}">AllDay</button>
              </th>`).join("")}
            <th class="px-2 py-2 text-center text-gray-500 font-medium" style="min-width:60px">ทั้งสัปดาห์</th>
          </tr>
        </thead>
        <tbody id="pw-body">
          ${a.map((e,l)=>`
            <tr class="border-b hover:bg-gray-50" data-pw-sid="${e.id}">
              <td class="px-3 py-2">
                <div class="flex items-center gap-2">
                  ${e.image_url?`<img src="${e.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
                  <span class="truncate max-w-[130px] text-gray-800">${e.full_name}</span>
                </div>
              </td>
              ${d.map(_=>{var b,B;return`
                <td class="px-1 py-2 text-center">
                  <button class="pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80
                    ${S((b=o[e.id])==null?void 0:b[_.ds])}"
                    data-pw-sid="${e.id}" data-ds="${_.ds}">
                    ${R((B=o[e.id])==null?void 0:B[_.ds])}
                  </button>
                </td>`}).join("")}
              <td class="px-2 py-2 text-center">
                <button class="pw-row-all text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
                  data-pw-sid="${e.id}">ตั้งครบ ▾</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild(w);const q=(e,l=!0)=>{e&&(e.style.outline=`2px solid ${l?"#059669":"#ef4444"}`,e.style.outlineOffset="1px",setTimeout(()=>{e.style.outline="",e.style.outlineOffset=""},700))};let $=0,x=0;const i=async(e,l,_)=>{var N,n;const b=((N=o[e])==null?void 0:N[l])??null,B=((n=r[e])==null?void 0:n[l])??null;o[e][l]=_,r[e]={...r[e]??{},[l]:_};const A=w.querySelector(`.pw-cell[data-pw-sid="${e}"][data-ds="${l}"]`);A&&(A.className=`pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80 ${S(_)}`,A.textContent=R(_));const u=document.querySelector(`.prayer-cell[data-sid="${e}"][data-date="${l}"]`);if(u){const L=_?se[_]:null;Object.values(se).forEach(m=>u.classList.remove(m.bg)),L&&u.classList.add(L.bg),u.innerHTML=L?`<span class="${L.color} text-xs">${L.label}</span>`:""}I(e);try{await De(t.id,e,p,l,_,v.n,t.full_name||"คุณครู"),q(A,!0),q(u,!0)}catch(L){if(console.error("prayer save:",L),o[e][l]=b,r[e]||(r[e]={}),B===null?delete r[e][l]:r[e][l]=B,A&&(A.className=`pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80 ${S(b)}`,A.textContent=R(b)),u){const m=b?se[b]:null;Object.values(se).forEach(M=>u.classList.remove(M.bg)),m&&u.classList.add(m.bg),u.innerHTML=m?`<span class="${m.color} text-xs">${m.label}</span>`:""}throw I(e),q(A,!1),q(u,!1),L}},y=async e=>{let _=0;$+=e.length;for(let b=0;b<e.length;b+=10){const B=e.slice(b,b+10),A=await Promise.allSettled(B.map(([u,N,n])=>i(u,N,n)));_+=A.filter(u=>u.status==="rejected").length}x+=_,_>0&&H(`บันทึกไม่สำเร็จ ${_}/${e.length} รายการ — กรุณาลองใหม่`,"error")};w.addEventListener("click",e=>{const l=e.target.closest(".pw-cell");if(!l)return;e.stopPropagation();const _=parseInt(l.dataset.pwSid),b=l.dataset.ds;ge(e,B=>i(_,b,B))}),w.addEventListener("click",e=>{const l=e.target.closest(".pw-day-all");if(!l)return;e.stopPropagation();const _=l.dataset.ds;ge(e,b=>y(a.map(B=>[B.id,_,b])))}),w.addEventListener("click",e=>{const l=e.target.closest(".pw-row-all");if(!l)return;e.stopPropagation();const _=parseInt(l.dataset.pwSid);ge(e,b=>y(d.map(B=>[_,B.ds,b])))}),w.querySelector("#pw-set-all").addEventListener("click",e=>{e.stopPropagation(),ge(e,l=>y(a.flatMap(_=>d.map(b=>[_.id,b.ds,l]))))});const k=()=>{w.remove(),$>0&&x>0?H(`สัปดาห์ที่ ${v.n}: สำเร็จ ${$-x} / ไม่สำเร็จ ${x} รายการ ⚠️`,"warning"):$>0&&H(`สัปดาห์ที่ ${v.n} บันทึกเรียบร้อย ✅`,"success")};w.querySelector("#pw-close").addEventListener("click",k),w.querySelector("#pw-save").addEventListener("click",k),w.addEventListener("click",e=>{e.target===w&&k()})}function Nt(t,a,r,v,p,f,j,I){var q;(q=document.getElementById("prayer-stats-modal"))==null||q.remove();const T=$=>$>=8?"text-emerald-600":$>=6?"text-amber-500":"text-red-600",d=r.map(($,x)=>{const i=p[$.id]??{},y={pray:0,absent:0,usor:0,followed:0,avoid:0,noRecord:0};for(const s of f){const e=i[s.ds]??null;e&&y[e]!==void 0?y[e]++:y.noRecord++}const k=qe(i,f);return{student:$,no:x+1,...y,score:k}}),o=d.length?(d.reduce(($,x)=>$+x.score,0)/d.length).toFixed(1):"0.0",S=document.createElement("div");S.id="prayer-stats-modal",S.className="fixed inset-0 z-[80] bg-white flex flex-col",S.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-3 border-b bg-emerald-700 text-white flex-shrink-0">
      <button id="prayer-stats-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex-1">
        <h2 class="font-bold">📊 สถิติคะแนนละหมาด</h2>
        <p class="text-xs text-emerald-200">${a} · ปีการศึกษา ${j} ภาค ${I} · ${f.length} วัน</p>
      </div>
      <span class="px-3 py-1.5 bg-white/20 rounded-lg text-sm font-semibold">เฉลี่ย ${o}/10</span>
    </div>
    <div class="flex gap-0 border-b bg-white flex-shrink-0 px-4">
      ${[["sem","รายภาคเรียน"],["week","รายสัปดาห์"]].map(([$,x],i)=>`
        <button class="pr-stats-tab px-4 py-3 text-sm font-medium border-b-2 transition
          ${i===0?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500"}"
          data-tab="${$}">${x}</button>`).join("")}
    </div>
    <div class="flex-1 overflow-auto" id="prayer-stats-content"></div>`,document.body.appendChild(S);const R=()=>{var x;const $=[...d].sort((i,y)=>i.score-y.score);document.getElementById("prayer-stats-content").innerHTML=`
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4">
        ${Object.entries(se).map(([i,y])=>`
          <div class="${y.bg} rounded-xl p-3 text-center">
            <p class="text-2xl font-bold ${y.color}">${d.reduce((k,s)=>k+s[i],0)}</p>
            <p class="text-xs mt-0.5">${y.label} ${y.fullLabel}</p>
          </div>`).join("")}
      </div>
      <p class="px-4 text-xs text-gray-400 -mt-2 mb-2">คลิกที่แถวนักเรียนเพื่อดูสถิติรายบุคคล</p>
      <div class="px-4 pb-6">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-xs text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">#</th>
                <th class="px-3 py-3 text-left">ชื่อ</th>
                ${Object.entries(se).map(([,i])=>`<th class="px-2 py-3 text-center ${i.color}">${i.label}</th>`).join("")}
                <th class="px-3 py-3 text-center font-semibold text-indigo-700">คะแนน/10</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="pst-tbody">
              ${$.map(i=>`
                <tr class="hover:bg-emerald-50 cursor-pointer transition" data-st-sid="${i.student.id}">
                  <td class="px-3 py-2 text-gray-400 text-xs">${i.no}</td>
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${i.student.image_url?`<img src="${i.student.image_url}" class="w-6 h-6 rounded object-cover"/>`:"<span>👤</span>"}
                      <span class="truncate max-w-[130px] text-xs font-medium">${i.student.full_name}</span>
                    </div>
                  </td>
                  ${Object.keys(se).map(y=>`<td class="px-2 py-2 text-center text-xs font-medium">${i[y]||"—"}</td>`).join("")}
                  <td class="px-3 py-2 text-center font-bold ${T(i.score)}">${i.score}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`,(x=document.getElementById("pst-tbody"))==null||x.addEventListener("click",i=>{const y=i.target.closest("[data-st-sid]");if(!y)return;const k=parseInt(y.dataset.stSid),s=d.find(e=>e.student.id===k);s&&Ke(s,v,p,f,T)})},w=()=>{document.getElementById("prayer-stats-content").innerHTML=`
      <div class="p-4 space-y-4">
        ${v.map(($,x)=>{var s;const i={pray:0,absent:0,usor:0,followed:0,avoid:0};for(const e of $.days)for(const l of r){const _=((s=p[l.id])==null?void 0:s[e.ds])??null;_&&i[_]!==void 0&&i[_]++}const y=r.length*$.days.length,k=y>0?((i.pray+i.followed+i.usor)/y*100).toFixed(0):"0";return`
            <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
              <div class="flex justify-between mb-2">
                <div>
                  <p class="font-semibold text-gray-800">สัปดาห์ที่ ${$.n}</p>
                  <p class="text-xs text-gray-400">${$.label} · ${$.days.length} วัน</p>
                </div>
                <span class="font-bold text-lg ${T(parseInt(k)/10)}">${k}%</span>
              </div>
              <div class="flex gap-1 h-5 rounded-lg overflow-hidden">
                ${Object.entries(i).filter(([,e])=>e>0).map(([e,l])=>`<div class="${se[e].bg}" style="flex:${l}"></div>`).join("")}
              </div>
              <div class="flex gap-3 mt-2 text-xs flex-wrap">
                ${Object.entries(se).map(([e,l])=>`<span class="${l.color}">${l.label} ${i[e]||0}</span>`).join("")}
              </div>
            </div>`}).join("")}
      </div>`};R(),S.querySelectorAll(".pr-stats-tab").forEach($=>{$.addEventListener("click",()=>{S.querySelectorAll(".pr-stats-tab").forEach(x=>{x.classList.replace("border-emerald-600","border-transparent"),x.classList.replace("text-emerald-700","text-gray-500")}),$.classList.replace("border-transparent","border-emerald-600"),$.classList.replace("text-gray-500","text-emerald-700"),$.dataset.tab==="sem"?R():w()})}),S.querySelector("#prayer-stats-close").addEventListener("click",()=>S.remove())}function Rt(t,a,r,v,p,f){var x;(x=document.getElementById("student-att-detail"))==null||x.remove();const j=f.master_subjects,I=v[t.id]??{},T=r.filter(i=>!p.has(i.ds)),d={present:0,absent:0,late:0,excused:0,sick:0,noRecord:0};for(const i of T){const y=I[i.n]??null;y&&d[y]!==void 0?d[y]++:d.noRecord++}const o=d.present+d.late,S=T.length>0?(o/T.length*100).toFixed(1):"0.0",R=i=>parseFloat(i)>=80?"text-emerald-600":parseFloat(i)>=60?"text-amber-500":"text-red-600",w={present:"มา",absent:"ขาด",late:"สาย",excused:"ลากิจ",sick:"ลาป่วย"},q={present:"text-emerald-600 bg-emerald-50",absent:"text-red-600 bg-red-50",late:"text-amber-500 bg-amber-50",excused:"text-blue-500 bg-blue-50",sick:"text-orange-500 bg-orange-50"},$=document.createElement("div");$.id="student-att-detail",$.className="fixed inset-0 z-[80] bg-white flex flex-col",$.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-3 bg-emerald-700 text-white flex-shrink-0">
      <button id="sad-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex items-center gap-3 flex-1 min-w-0">
        ${t.image_url?`<img src="${t.image_url}" class="w-9 h-11 rounded-lg object-cover flex-shrink-0 border border-white/40 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-emerald-600 border border-white/40 shadow-sm flex items-center justify-center text-lg flex-shrink-0">👤</div>'}
        <div class="min-w-0">
          <p class="font-bold truncate">${t.full_name}</p>
          <p class="text-xs text-emerald-200">รหัส ${t.student_code} · ${(j==null?void 0:j.subject_name)??f.class_name}</p>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-2xl font-bold ${R(S)}">${S}%</p>
        <p class="text-xs text-emerald-200">เข้าเรียน</p>
      </div>
    </div>
    <!-- Summary -->
    <div class="flex gap-2 px-4 py-3 bg-emerald-50 flex-shrink-0 flex-wrap">
      ${Object.entries(w).map(([i,y])=>`<span class="px-3 py-1.5 rounded-xl text-sm font-medium ${q[i]}">
          ${y} ${d[i]||0}
        </span>`).join("")}
      <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-xl text-sm">ไม่บันทึก ${d.noRecord||0}</span>
      <span class="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-sm font-medium">รวม ${T.length} คาบ</span>
    </div>
    <!-- Session breakdown -->
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse">
        <thead class="bg-gray-50 text-gray-500 sticky top-0">
          <tr>
            <th class="px-3 py-2 text-left">คาบ</th>
            <th class="px-3 py-2 text-left">วันที่</th>
            <th class="px-3 py-2 text-center font-semibold">สถานะ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${T.map(i=>{const y=I[i.n]??null,k=y?w[y]??y:"—",s=y?q[y]:"text-gray-300";return`<tr class="hover:bg-gray-50">
              <td class="px-3 py-2 text-gray-500">${i.n}</td>
              <td class="px-3 py-2 font-mono text-gray-700">${de(i.date)}</td>
              <td class="px-3 py-2 text-center">
                <span class="px-2 py-0.5 rounded-lg text-xs font-medium ${s}">${k}</span>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild($),$.querySelector("#sad-close").addEventListener("click",()=>$.remove())}function Ke(t,a,r,v,p){var T;(T=document.getElementById("student-detail-modal"))==null||T.remove();const f=t.student,j=r[f.id]??{},I=document.createElement("div");I.id="student-detail-modal",I.className="fixed inset-0 z-[80] bg-white flex flex-col",I.innerHTML=`
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 bg-emerald-800 text-white flex-shrink-0">
      <button id="std-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex items-center gap-3 flex-1 min-w-0">
        ${f.image_url?`<img src="${f.image_url}" class="w-9 h-11 rounded-lg object-cover flex-shrink-0 border border-white/40 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-emerald-600 border border-white/40 shadow-sm flex items-center justify-center text-lg flex-shrink-0">👤</div>'}
        <div class="min-w-0">
          <p class="font-bold truncate">${f.full_name}</p>
          <p class="text-xs text-emerald-200">รหัส ${f.student_code}</p>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-2xl font-bold ${p(t.score)}">${t.score}</p>
        <p class="text-xs text-emerald-200">คะแนน/10</p>
      </div>
    </div>
    <!-- Summary badges -->
    <div class="flex gap-2 px-4 py-3 bg-emerald-50 flex-shrink-0 flex-wrap">
      ${Object.entries(se).map(([d,o])=>`<span class="px-3 py-1.5 ${o.bg} ${o.color} rounded-xl text-sm font-medium">
          ${o.label} ${t[d]||0}
        </span>`).join("")}
      <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-xl text-sm">ไม่บันทึก ${t.noRecord||0}</span>
    </div>
    <!-- Week-by-week breakdown -->
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse">
        <thead class="bg-gray-50 text-gray-500 sticky top-0">
          <tr>
            <th class="px-3 py-2 text-center text-left">สัปดาห์</th>
            <th class="px-3 py-2 text-center text-left text-gray-400">วันที่</th>
            ${Object.entries(se).map(([,d])=>`<th class="px-2 py-2 text-center ${d.color}">${d.label}</th>`).join("")}
            <th class="px-2 py-2 text-center text-indigo-600 font-semibold">คะแนน</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${a.map(d=>{const o={pray:0,absent:0,usor:0,followed:0,avoid:0};for(const w of d.days){const q=j[w.ds]??null;q&&o[q]!==void 0&&o[q]++}const S=d.days.map(w=>({...w})),R=qe(j,S);return`
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-center font-medium text-gray-700">Week${d.n}</td>
                <td class="px-3 py-2 text-center text-gray-400">${d.label}</td>
                ${Object.keys(se).map(w=>`<td class="px-2 py-2 text-center font-medium">${o[w]||"—"}</td>`).join("")}
                <td class="px-2 py-2 text-center font-bold ${p(R)}">${R}</td>
              </tr>`}).join("")}
        </tbody>
      </table>
    </div>`,document.body.appendChild(I),I.querySelector("#std-close").addEventListener("click",()=>I.remove())}function Ot(t,a){var o;const r=(o=window._pp5SystemCfg)==null?void 0:o.freeAttendanceScanLimit;let v=2;if(r!==void 0&&r!==""){const S=parseInt(r,10);Number.isFinite(S)&&(v=S)}if(a)return{allowed:!0,count:0,limit:v};const p=new Date,f=p.getDay(),j=p.getDate()-f+(f===0?-6:1),I=new Date(p.setDate(j)).toISOString().slice(0,10),T=`pp5_att_scans_week_${t}`;let d={weekMonday:I,count:0};try{const S=localStorage.getItem(T);if(S){const R=JSON.parse(S);R.weekMonday===I&&(d=R)}}catch{}return{allowed:d.count<v,count:d.count,weekMonday:I,limit:v}}function Ht(t,a){const r=`pp5_att_scans_week_${t}`;let v=0;try{const p=localStorage.getItem(r);if(p){const f=JSON.parse(p);f.weekMonday===a&&(v=f.count)}}catch{}localStorage.setItem(r,JSON.stringify({weekMonday:a,count:v+1}))}function Ue(t){var a;return((a=t==null?void 0:t.master_subjects)==null?void 0:a.subject_group)==="AGM"||/^(PR|อก\.|อป\.)/i.test((t==null?void 0:t.class_name)||"")}function Le(t,a){var p;const r=Ue(a)?"religion_room":"main_room",v={};return t.forEach(f=>{f[r]&&(v[f[r]]=(v[f[r]]||0)+1)}),((p=Object.entries(v).sort((f,j)=>j[1]-f[1])[0])==null?void 0:p[0])||""}function Ye(t,a,r){const v=new Set([r].filter(Boolean));return Ue(a)&&t.forEach(p=>{p.main_room&&v.add(p.main_room)}),[...v]}function Pt(t,a){const r=[];return(t==null?void 0:t.main_room)===a&&t.religion_room&&r.push(t.religion_room),(t==null?void 0:t.religion_room)===a&&t.main_room&&r.push(t.main_room),r}function Ce(t,a,r){if(r)return{allowed:!0,claimedRoom:null};let v=null;try{v=localStorage.getItem(`pp5_studentcare_room_${t}`)}catch{}return!v||v===a?{allowed:!0,claimedRoom:v}:{allowed:!1,claimedRoom:v}}function je(t,a){try{localStorage.setItem(`pp5_studentcare_room_${t}`,a)}catch{}}function Ie(t,a){var v;(v=document.getElementById("stc-room-paywall"))==null||v.remove();const r=document.createElement("div");r.id="stc-room-paywall",r.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",r.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="stc-pw-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">ใช้ครบโควต้าห้องฟรีแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        ฟีเจอร์เชื่อมข้อมูลกับระบบดูแลใช้ได้ฟรี <b>1 ห้องเรียน</b> ต่อครู 1 คน — ตอนนี้ผูกกับห้อง <b>${Y(t)}</b> ไว้แล้ว
        ${a?`<br><br>ต้องการใช้กับห้อง <b>${Y(a)}</b> เพิ่ม`:""}<br><br>
        ร่วมสนับสนุนระบบระดับ 2 ขึ้นไปเพื่อใช้ได้ไม่จำกัดจำนวนห้องครับ
      </p>
      <button id="stc-pw-donate" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(r),r.querySelector("#stc-pw-close").addEventListener("click",()=>r.remove()),r.querySelector("#stc-pw-donate").addEventListener("click",()=>{var p;r.remove(),(p=document.getElementById("btn-donate-float"))==null||p.click()})}function Oe(t="success"){try{const a=new(window.AudioContext||window.webkitAudioContext),r=a.createOscillator(),v=a.createGain();r.connect(v),v.connect(a.destination),t==="success"?(r.type="sine",r.frequency.setValueAtTime(880,a.currentTime),v.gain.setValueAtTime(.08,a.currentTime),v.gain.exponentialRampToValueAtTime(.01,a.currentTime+.12),r.start(),r.stop(a.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,a.currentTime),v.gain.setValueAtTime(.12,a.currentTime),v.gain.exponentialRampToValueAtTime(.01,a.currentTime+.3),r.start(),r.stop(a.currentTime+.3))}catch{}}async function Ft(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((t,a)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>t(window.Html5Qrcode),r.onerror=v=>a(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}export{St as _openAttendanceModalForSession,wt as _openLeaveQuotaModal,kt as _openLeaveRequestModal,Yt as openAttendanceDelegateForm,Jt as openAttendanceScanSetup,Gt as renderAttendance,ce as renderAttendanceGrid,Zt as renderLifeSkillScore,es as renderPrayerRoomMonitor,ts as renderPrayerScore,Xt as renderReadingScore};
