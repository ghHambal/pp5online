import{s as Ne}from"./supabase-BV-W2lsh.js";/* empty css             */import{openRegradeSlip as _t,openRegradeSlipsBatch as St}from"./regrade-slip-B486U3RX.js";import{o as He,p as Et}from"./regrade-notifications-ByJLencb.js";import{a as h}from"./ui-DU3V9L7w.js";import{p as Tt}from"./import-C94fAqSd.js";import{g as he,c as jt,b as Lt,d as At,e as It,f as Rt,h as qt,j as Nt,k as Xe,l as Qe,m as Ht,n as Ce,o as Ct,p as Ft,q as Bt,s as Mt,t as Ut,u as Dt,v as Fe,a as zt,w as Pt,x as Ot,y as Vt,z as Wt,A as Gt,B as Kt,C as Yt,D as Jt,E as Zt,F as Xt,G as Qt,H as ea,I as ta,J as aa,K as et,L as ra,M as sa,N as na,O as tt,P as at}from"./regrade-menu-window-DuuFB9GJ.js";import{b as la,c as oa,u as da}from"./certificate-engine-Bn4Xdc-e.js";import{o as ia}from"./print-overlay-BVfxEd6n.js";import{o as Be}from"./certificate-editor-wNzZtZbX.js";import{uploadAssignmentFile as fe}from"./storage-CuUjCgvI.js";import{W as ca}from"./api-vSXCr5aV.js";import{regradeHeadNameForSubject as rt}from"./regrade-overview-notice-D00tJyTp.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";function st(e,a){var r;const t=(r=e==null?void 0:e.intent_test_subjects)==null?void 0:r[String(a)];return Array.isArray(t)?t.filter(Number.isSafeInteger):[]}function ua(e,a,t){return st(e,a).includes(Number(t))}const X={fontFamily:"Sarabun",fontSize:20,color:"#183b56"},V={Sarabun:"'Sarabun', 'Noto Sans Thai', sans-serif",Tahoma:"Tahoma, 'Noto Sans Thai', sans-serif",serif:"Georgia, 'Noto Serif Thai', serif",handwritten:"'Comic Sans MS', 'Noto Sans Thai', cursive"},Me=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function pa(e,a,t){const r=typeof Intl.Segmenter=="function"?new Intl.Segmenter("th",{granularity:"word"}):null,s=r?[...r.segment(a)].map(u=>u.segment):Array.from(a),d=[];let i="";for(const u of s){const y=i+u;i&&e.measureText(y).width>t?(d.push(i.trimEnd()),i=u.trimStart()):i=y}return d.push(i),d}function ma(e,a,t,r){if(!e&&!r)return Promise.resolve(null);const s=1200,d=72,i=Math.max(14,Math.min(32,Number(a.fontSize)||X.fontSize))*2,u=document.createElement("canvas"),y=u.getContext("2d");y.font=`${i}px ${V[a.fontFamily]||V.Sarabun}`;const k=String(e||"").split(/\r?\n/).flatMap(x=>x?pa(y,x,s-d*2):[" "]),$=Math.round(i*1.65),g=120,n=k.length*$,c=r?320:0,b=g+n+c+d*2;u.width=s,u.height=b;const w=u.getContext("2d");if(w.fillStyle="#ffffff",w.fillRect(0,0,s,b),w.strokeStyle="#dbe4ec",w.lineWidth=4,w.strokeRect(24,24,s-48,b-48),w.fillStyle="#173b56",w.font=`bold 36px ${V.Sarabun}`,w.fillText("คำชี้แจง / แนวทางการแก้ค้างเก่า",d,94),w.fillStyle=/^#[\da-f]{6}$/i.test(a.color||"")?a.color:X.color,w.font=`${i}px ${V[a.fontFamily]||V.Sarabun}`,k.forEach((x,E)=>w.fillText(x,d,g+E*$,s-d*2)),r){const x=g+n+36;w.strokeStyle="#dbe4ec",w.lineWidth=2,w.beginPath(),w.moveTo(d,x-18),w.lineTo(s-d,x-18),w.stroke(),w.drawImage(t,d,x,s-d*2,c)}return new Promise((x,E)=>{u.toBlob(j=>j?x(j):E(new Error("สร้างภาพคำชี้แจงไม่สำเร็จ")),"image/jpeg",.88)})}function Ue(e={}){return new Promise(a=>{const t=String(e.text||""),r={...X,...e.style||{}},s=String(e.imageUrl||""),d=document.createElement("div");d.className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-5",d.innerHTML=`
      <section role="dialog" aria-modal="true" aria-labelledby="regrade-note-title" class="w-full max-w-xl max-h-[94vh] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col">
        <header class="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200">
          <div><h2 id="regrade-note-title" class="text-base font-extrabold text-slate-800">✍️ เขียนคำชี้แจงถึงนักเรียน</h2><p class="text-[11px] text-slate-500 mt-0.5">ข้อความจะแสดงในระบบ และสร้างภาพขนาดเล็กไว้เปิดหรือดาวน์โหลด</p></div>
          <button type="button" data-note-close aria-label="ปิด" class="rounded-full w-9 h-9 text-slate-500 hover:bg-slate-100">✕</button>
        </header>
        <div class="p-4 overflow-y-auto space-y-3">
          <label class="block text-xs font-bold text-slate-700">พิมพ์คำชี้แจง
            <textarea data-note-text maxlength="2000" rows="4" class="mt-1 w-full rounded-xl border border-slate-300 p-3 text-sm leading-7 text-slate-800" placeholder="เช่น ให้นักเรียนทำแบบฝึกหัดหน้า 12 ข้อ 1–5 แล้วส่งภายในวันที่กำหนด">${Me(t)}</textarea>
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 items-end">
            <label class="block text-[11px] font-bold text-slate-600">แบบอักษร
              <select data-note-font class="mt-1 w-full rounded-lg border border-slate-300 px-2 py-2 text-xs bg-white">
                <option value="Sarabun">สารบรรณ</option><option value="Tahoma">Tahoma</option><option value="serif">มีเชิง</option><option value="handwritten">ลายมือ</option>
              </select>
            </label>
            <label class="block text-[11px] font-bold text-slate-600">ขนาดตัวอักษร
              <select data-note-size class="mt-1 w-full rounded-lg border border-slate-300 px-2 py-2 text-xs bg-white">
                ${[16,18,20,22,24,28,32].map(S=>`<option value="${S}">${S} px</option>`).join("")}
              </select>
            </label>
            <label class="block text-[11px] font-bold text-slate-600">สีตัวอักษร
              <input data-note-color type="color" class="mt-1 h-9 w-full rounded-lg border border-slate-300 bg-white p-1">
            </label>
          </div>
          <div class="rounded-xl border border-slate-200 p-3">
            <div class="flex items-center justify-between gap-2 mb-2"><div><p class="text-xs font-bold text-slate-700">เขียนหรือวาดด้วยลายมือ</p><p class="text-[10px] text-slate-500">ใช้เมาส์ ปากกา หรือแตะหน้าจอ</p></div><button type="button" data-note-clear class="text-[11px] font-bold text-rose-600">ล้างลายมือ</button></div>
            <canvas data-note-canvas width="1000" height="300" class="w-full h-32 sm:h-40 rounded-lg border border-dashed border-slate-300 bg-white touch-none"></canvas>
          </div>
          <div class="rounded-xl border border-sky-100 bg-sky-50 p-3">
            <p class="text-[10px] font-bold text-sky-800 mb-1">ตัวอย่าง</p>
            <div data-note-preview class="min-h-12 whitespace-pre-wrap break-words rounded-lg bg-white p-3"></div>
          </div>
          ${s?`<div class="text-[10px] text-slate-500">มีภาพคำชี้แจงเดิมแนบอยู่ <a href="${Me(s)}" target="_blank" rel="noopener" class="font-bold text-sky-700 underline">เปิดดู</a> · หากบันทึกการแก้ไข ระบบจะสร้างภาพใหม่ตามข้อความและลายมือในหน้านี้</div>`:""}
          <p class="text-[10px] text-slate-500">ระบบสร้างไฟล์ JPG จากข้อความและลายมือเพื่อแนบให้ ขนาดขึ้นกับเนื้อหาและภาพที่เขียน</p>
        </div>
        <footer class="flex gap-2 border-t border-slate-200 p-3">
          <button type="button" data-note-cancel class="flex-1 rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-700">ยกเลิก</button>
          <button type="button" data-note-save class="flex-1 rounded-xl bg-emerald-700 py-2.5 text-xs font-bold text-white">บันทึกคำชี้แจง</button>
        </footer>
      </section>`,document.body.append(d);const i=d.querySelector("[data-note-text]"),u=d.querySelector("[data-note-font]"),y=d.querySelector("[data-note-size]"),m=d.querySelector("[data-note-color]"),k=d.querySelector("[data-note-canvas]"),$=k.getContext("2d"),g=d.querySelector("[data-note-preview]");let n=!1,c=!1,b=!1;const w=S=>{b||(b=!0,d.remove(),a(S))};u.value=V[r.fontFamily]?r.fontFamily:X.fontFamily,y.value=String(Math.max(16,Math.min(32,Number(r.fontSize)||X.fontSize))),m.value=/^#[\da-f]{6}$/i.test(r.color||"")?r.color:X.color,$.lineCap="round",$.lineJoin="round",$.strokeStyle=m.value,$.lineWidth=5;const x=()=>{g.textContent=i.value||"ตัวอย่างคำชี้แจงจะแสดงตรงนี้",g.style.fontFamily=V[u.value]||V.Sarabun,g.style.fontSize=`${y.value}px`,g.style.color=m.value};[i,u,y,m].forEach(S=>S.addEventListener("input",x)),m.addEventListener("input",()=>{$.strokeStyle=m.value}),x();const E=S=>{const I=k.getBoundingClientRect();return{x:(S.clientX-I.left)*k.width/I.width,y:(S.clientY-I.top)*k.height/I.height}};k.addEventListener("pointerdown",S=>{n=!0,c=!0,k.setPointerCapture(S.pointerId);const I=E(S);$.beginPath(),$.moveTo(I.x,I.y)}),k.addEventListener("pointermove",S=>{if(!n)return;const I=E(S);$.lineTo(I.x,I.y),$.stroke()});const j=()=>{n=!1,$.closePath()};k.addEventListener("pointerup",j),k.addEventListener("pointercancel",j),d.querySelector("[data-note-clear]").addEventListener("click",()=>{$.clearRect(0,0,k.width,k.height),c=!1}),d.querySelectorAll("[data-note-close], [data-note-cancel]").forEach(S=>S.addEventListener("click",()=>w(null))),d.addEventListener("keydown",S=>{S.key==="Escape"&&w(null)}),d.querySelector("[data-note-save]").addEventListener("click",async S=>{const I=S.currentTarget;I.disabled=!0,I.textContent="กำลังสร้างภาพ…";try{const z=i.value.trim(),ae={fontFamily:u.value,fontSize:Number(y.value),color:m.value},oe=await ma(z,ae,k,c);w({text:z,style:ae,imageBlob:oe,clearImage:!z&&!c})}catch(z){I.disabled=!1,I.textContent="บันทึกคำชี้แจง",window.alert(z.message||"สร้างภาพคำชี้แจงไม่สำเร็จ")}})})}const De=[{token:"{{student_name}}",label:"ชื่อนักเรียน"},{token:"{{student_code}}",label:"รหัสนักเรียน"},{token:"{{room}}",label:"ห้องเรียน"},{token:"{{class_level}}",label:"ชั้น/ระดับ"},{token:"{{category}}",label:"หมวด (สามัญ/ศาสนา)"},{token:"{{subject_name}}",label:"ชื่อรายวิชา"},{token:"{{subject_code}}",label:"รหัสวิชา"},{token:"{{semester}}",label:"ภาคเรียน"},{token:"{{grade_failed_at}}",label:"ผลการเรียนที่ติด (ร/มส/0)"},{token:"{{teacher_name}}",label:"ชื่อครูผู้สอน"},{token:"{{response_method}}",label:"วิธีตอบรับ/วิธีแก้"},{token:"{{due_date}}",label:"วันนัดสอบ/กำหนดส่ง"},{token:"{{file_url}}",label:"ลิงก์ไฟล์งานแก้"},{token:"{{work_url}}",label:"ลิงก์งาน / เอกสาร"},{token:"{{teacher_note}}",label:"คำชี้แจงจากครู"},{token:"{{teacher_note_image_url}}",label:"ลิงก์ภาพคำชี้แจงจากครู"}],ze={student_name:"ตัวอย่าง ชื่อ-สกุล นักเรียน",student_code:"00000",room:"ม.6/1",class_level:"ม.6",category:"สามัญ",subject_name:"วิชาตัวอย่าง",subject_code:"ว00000",semester:"1/2569",grade_failed_at:"ร",teacher_name:"ครูตัวอย่าง",response_method:"นัดสอบปรับ",due_date:"12 ธ.ค. 2569 เวลา 09:00 น.",file_url:"https://example.com/work.pdf",work_url:"https://example.com/work",teacher_note:"อ่านคำชี้แจงและทำตามกำหนดส่ง",teacher_note_image_url:"https://example.com/teacher-note.jpg"},ba={orientation:"portrait",background:{type:"flat",color:"#ffffff",cardColor:"#ffffff",borderColor:"#94a3b8",borderWidth:2,borderStyle:"solid"},elements:[{id:"title",text:"ใบมอบหมายงานแก้ค้างเก่า",x:50,y:8,fontSize:22,color:"#1e293b",align:"center",bold:!0},{id:"student",text:"ชื่อ-สกุล: {{student_name}}   รหัส: {{student_code}}   ห้อง: {{room}}",x:8,y:22,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"subject",text:"รายวิชา: {{subject_name}} ({{subject_code}})   ภาคเรียน: {{semester}}",x:8,y:30,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"teacher",text:"ครูผู้สอน: {{teacher_name}}",x:8,y:38,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"issued",text:"ออกให้ ณ วันที่ {{date}}",x:8,y:85,fontSize:11,color:"#64748b",align:"left",bold:!1},{id:"sign",text:"ลายเซ็นครูผู้สอน",x:70,y:92,fontSize:11,color:"#64748b",align:"center",bold:!1,borderTop:!0}]},xe=[{key:"สามัญ",suffix:"samai",emoji:"📘",label:"สามัญ"},{key:"ศาสนา",suffix:"religion",emoji:"🕌",label:"ศาสนา"}];function Se(e,a){return _t(e,a,f.cfg)}const ke={ว:"SC",อ:"ENG",จ:"ENG",ค:"MATH",ท:"THAI",ส:"SOC",ง:"OCC",ศ:"ART",พ:"HEALTH"};function l(e){return String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a])}function ee(e){const a={ยังไม่แจ้ง:{bg:"#f3f4f6",text:"#6b7280",border:"#e5e7eb",label:"ยังไม่แจ้ง"},จำนงแล้ว:{bg:"var(--gold-soft)",text:"var(--gold-ink)",border:"var(--gold-soft-line)",label:"จำนงแล้ว · รอครูตอบรับ"},กำลังดำเนินการปรับแก้:{bg:"var(--info-soft)",text:"var(--info)",border:"var(--info-soft-line)",label:"กำลังดำเนินการปรับแก้"},ปรับแก้สำเร็จ:{bg:"var(--ok-soft)",text:"var(--ok)",border:"var(--ok-soft-line)",label:"ปรับแก้สำเร็จ ✓"}};return a[e]||a.ยังไม่แจ้ง}const te=e=>{const a=ee(e);return`background:${a.bg};color:${a.text};border:1px solid ${a.border};`},nt=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function Pe(e){if(!e)return null;const a=new Date(e);if(isNaN(a.getTime()))return null;const t=String(a.getHours()).padStart(2,"0"),r=String(a.getMinutes()).padStart(2,"0");return`${a.getDate()} ${nt[a.getMonth()]} ${a.getFullYear()+543} เวลา ${t}:${r} น.`}function lt(e){const a=String(e||"").trim();if(!a)return{date:"",time:""};const t=a.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);if(t)return{date:`${t[1]}-${t[2]}-${t[3]}`,time:t[4]?`${t[4]}:${t[5]}`:""};const r=a.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})(?:\s+(\d{1,2}):(\d{2}))?/);if(!r)return{date:"",time:""};let s=Number(r[3]);s<100&&(s+=2500),s>2400&&(s-=543);const d=String(Number(r[2])).padStart(2,"0"),i=String(Number(r[1])).padStart(2,"0");return{date:`${s}-${d}-${i}`,time:r[4]?`${String(Number(r[4])).padStart(2,"0")}:${r[5]}`:""}}function K(e){const a=lt(e);if(!a.date)return String(e||"-");const[t,r,s]=a.date.split("-").map(Number),d=`${s} ${nt[r-1]} ${t+543}`;return a.time?`${d} เวลา ${a.time} น.`:d}function Q(e){const a=String(e||"").trim();if(!a)return"";try{const t=new URL(a);return["https:","http:"].includes(t.protocol)&&!t.username&&!t.password&&a.length<=2e3?t.href:null}catch{return null}}function pe(e,a){const t=lt(e.due_text);o.form={id:Number(e.id),method:a,dueDate:t.date,dueTime:t.time,fileUrl:a==="ให้งานแก้"&&e.file_url||"",workUrl:a==="ให้งานแก้"&&e.work_url||"",file:null,fileSource:e.file_url?"current":"none",editing:e.status==="กำลังดำเนินการปรับแก้",noteText:e.teacher_note||"",noteStyle:e.teacher_note_style||null,noteImageUrl:e.teacher_note_image_url||"",noteImageBlob:null}}function fa(e){return o.subjects.filter(a=>Number(a.id)!==Number(e.id)&&Number(a.teacher_id)===Number(e.teacher_id)&&a.subject_code===e.subject_code&&a.semester===e.semester&&a.category===e.category&&/^https:\/\//i.test(a.file_url||"")).sort((a,t)=>new Date(t.assigned_at||t.updated_at||0)-new Date(a.assigned_at||a.updated_at||0))[0]||null}async function ga(e){if(pe(e,"ให้งานแก้"),e.file_url){T();return}const a=fa(e);if(a){const t=await ha(e,a);t==="reuse"?(o.form.fileUrl=a.file_url,o.form.fileSource="reuse"):(o.form.fileUrl="",o.form.fileSource=t==="upload"?"upload":"none")}T()}function ot(e,a,t,r,s,d){const i=Pe(e),u=Pe(a);return!i&&!u?"":`<div class="rg-card p-4 mb-4" style="border-left:4px solid var(${r})">
    <p class="text-xs font-bold" style="color:var(${r})">🗓 ${l(t)}</p>
    <p class="text-sm font-bold text-[var(--ink)] mt-1">${i?`เริ่ม ${i}`:""}${i&&u?" — ":""}${u?`ถึง ${u}`:""}</p>
    <button data-deadline-cta="${l(d)}" class="mt-3 w-full py-2 rounded-xl text-white font-bold text-xs" style="background:linear-gradient(135deg,var(${r}),var(${r}-dark))">${l(s)} →</button>
  </div>`}const ge=e=>e==="ศาสนา"?"background:var(--secondary-soft);color:var(--secondary-dark);border:1px solid var(--secondary-soft-line);":"background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line);",xa=["เด็กชาย","เด็กหญิง","ด.ช.","ด.ญ.","นางสาว","น.ส.","นาย","นาง"];function va(e){let a=String(e);for(const t of xa)if(a.startsWith(t)){a=a.slice(t.length).trim();break}return a.charAt(0)||"?"}function ya(e,a){let t=0;for(let i=0;i<String(e).length;i++)t+=e.charCodeAt(i);const r=[["#eef2ff","#4f46e5"],["#ecfdf5","#059669"],["#fef3c7","#b45309"],["#fce7f3","#be185d"],["#e0f2fe","#0284c7"],["#f3e8ff","#7c3aed"]],[s,d]=r[t%r.length];return a?`width:34px;height:44px;border-radius:8px;background:${s};color:${d};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);`:`width:30px;height:30px;border-radius:9999px;background:${s};color:${d};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0;`}function U(e,a){const t=(e==null?void 0:e.full_name)||"-",r=(e==null?void 0:e.photo_url)||(e==null?void 0:e.image_url);if(!r)return`<div style="${ya(t,a)}">${va(t)}</div>`;const s=a?"width:34px;height:44px;border-radius:8px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);object-fit:cover;":"width:30px;height:30px;border-radius:9999px;flex-shrink:0;object-fit:cover;";return`<img src="${l(r)}" alt="${l(t)}" style="${s}">`}function N({title:e="ยืนยันการดำเนินการ",message:a="",confirmText:t="ยืนยัน",cancelText:r="ยกเลิก"}={}){return new Promise(s=>{var u;(u=document.getElementById("regrade-confirm-modal"))==null||u.remove();const d=document.createElement("div");d.id="regrade-confirm-modal",d.className="fixed inset-0 z-[99999] flex items-center justify-center p-4",d.innerHTML=`
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="rgc-overlay"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark))"></div>
        <div class="px-6 pt-6 pb-5 text-center">
          <h3 class="text-lg font-bold text-gray-900 mb-2">${l(e)}</h3>
          ${a?`<p class="text-sm text-gray-600 leading-relaxed">${l(a)}</p>`:""}
        </div>
        <div class="px-6 pb-6 grid grid-cols-2 gap-3">
          <button id="rgc-cancel" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-[0.97] transition-all">${l(r)}</button>
          <button id="rgc-confirm" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all"
            style="background: linear-gradient(135deg, var(--primary), var(--primary-dark))">${l(t)}</button>
        </div>
      </div>`,document.body.appendChild(d);const i=y=>{d.remove(),s(y)};d.querySelector("#rgc-overlay").addEventListener("click",()=>i(!1)),d.querySelector("#rgc-cancel").addEventListener("click",()=>i(!1)),d.querySelector("#rgc-confirm").addEventListener("click",()=>i(!0))})}function ha(e,a){return new Promise(t=>{var y;(y=document.getElementById("regrade-reuse-file-modal"))==null||y.remove();const r=document.createElement("div");r.id="regrade-reuse-file-modal",r.className="fixed inset-0 z-[99999] flex items-center justify-center p-4";const s=a.assigned_at||a.updated_at,d=s?new Date(s).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"-",i=/^https:\/\//i.test(a.file_url||"")?a.file_url:"";r.innerHTML=`
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" data-reuse-choice="upload"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background:linear-gradient(135deg,var(--gold),var(--gold-dark))"></div>
        <div class="px-6 pt-6 pb-4 text-center">
          <div class="mx-auto mb-3 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style="background:var(--gold-soft)">📎</div>
          <h3 class="text-lg font-bold text-gray-900">พบไฟล์เดิมของรายวิชานี้</h3>
          <p class="text-sm text-gray-600 leading-relaxed mt-2">${l(e.subject_name)} (${l(e.subject_code)})<br>ภาคเรียน ${l(e.semester||"-")} · ${l(e.category||"-")}</p>
          <div class="mt-3 p-3 rounded-xl text-left" style="background:var(--surface-2);border:1px solid var(--line)">
            <p class="text-xs font-bold text-[var(--ink)]">ไฟล์งานแก้ที่เคยอัปโหลด</p>
            <p class="text-[10px] text-[var(--muted-2)] mt-1">ใช้ล่าสุด ${l(d)}</p>
            ${i?`<a href="${l(i)}" target="_blank" rel="noopener" class="inline-flex mt-2 text-xs font-bold" style="color:var(--info)">เปิดดูไฟล์เดิม ↗</a>`:""}
          </div>
        </div>
        <div class="px-6 pb-6 grid gap-2">
          <button data-reuse-choice="reuse" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">ใช้ไฟล์เดิม</button>
          <button data-reuse-choice="upload" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 active:scale-[0.97] transition-all">อัปโหลดไฟล์ใหม่</button>
          <button data-reuse-choice="none" class="py-2 text-xs font-semibold text-gray-500">ไม่แนบไฟล์</button>
        </div>
      </div>`,document.body.appendChild(r);const u=m=>{r.remove(),t(m)};r.querySelectorAll("[data-reuse-choice]").forEach(m=>m.addEventListener("click",()=>u(m.dataset.reuseChoice)))})}function M(e,a="primary"){return e?`flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});`:"flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:var(--muted);background:var(--surface-2);"}function Y(e,a){return`<div class="flex items-center gap-2 flex-shrink-0">
    <span data-badge class="px-2 py-1 rounded-full text-[11px] font-bold" style="background:${a?"var(--ok-soft)":"var(--surface-2)"};color:${a?"var(--ok)":"var(--muted)"}">${a?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span>
    <button type="button" id="${e}" data-on="${a?"1":"0"}" class="px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0"
      style="${a?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;"}">${a?"ปิดใช้งาน":"เปิดใช้งาน"}</button>
  </div>`}function ka(e,a){a.forEach(t=>{const r=e.querySelector("#"+t);r&&r.addEventListener("click",()=>{const s=r.dataset.on!=="1";r.dataset.on=s?"1":"0",r.style.cssText=s?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;",r.textContent=s?"ปิดใช้งาน":"เปิดใช้งาน";const d=r.parentElement.querySelector("[data-badge]");d&&(d.textContent=s?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่",d.style.background=s?"var(--ok-soft)":"var(--surface-2)",d.style.color=s?"var(--ok)":"var(--muted)")})})}const J=(e,a)=>{var t;return((t=e.querySelector("#"+a))==null?void 0:t.dataset.on)==="1"};function C(e,a="primary"){return e?`padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:800;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});box-shadow:0 2px 8px rgba(0,0,0,.15);white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;`:"padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:700;color:var(--muted);background:transparent;white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;"}const me="inline-flex gap-1 p-1 rounded-full bg-[var(--surface-2)] flex-wrap";function dt(e,a,t){const r=document.getElementById("regrade-bottom-tabs");r.innerHTML=`<div class="flex">${e.map(s=>`
    <button data-nav="${s.key}" class="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5" style="transition:transform .15s ease;${a===s.key?"transform:scale(1.12)":""}">
      <span class="text-lg">${s.icon}</span>
      <span class="text-[10px] font-bold" style="color:${a===s.key?"var(--primary)":"var(--muted-2)"}">${l(s.label)}</span>
    </button>`).join("")}</div>`,r.querySelectorAll("[data-nav]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.nav)))}const f={role:null,isAdmin:!1,isRegistrar:!1,isExecutive:!1,studentRow:null,teacherRow:null,cfg:{}};function le(e,a){document.getElementById("regrade-title-mobile").textContent=e,document.getElementById("regrade-view-title").textContent=a}function Ee(e,a,t){const r=document.getElementById("regrade-sidebar-nav");r.innerHTML=e.map(s=>`
    <button data-sec="${s.key}" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-left"
      style="${a===s.key?"background:var(--primary);color:#fff;":"color:var(--primary-45);"}">
      <span>${s.icon}</span> ${l(s.label)}
    </button>`).join(""),r.querySelectorAll("[data-sec]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.sec)))}const R={subView:"catalog",categoryTab:"สามัญ",subjects:[],departments:[]};async function it(){R.subjects=await zt(f.studentRow.id),R.subjects.some(e=>e.status==="ยังไม่แจ้ง"&&e.teacher_id==null)&&!R.departments.length&&(R.departments=await ca().catch(()=>[]))}function $a(){var e;return!!f.cfg.intent_open||st(f.cfg,(e=f.studentRow)==null?void 0:e.id).length>0}function wa(e){var s,d;const a=f.cfg.intent_open_levels;if(!a||!a.length)return!0;const t=e==="ศาสนา"?(s=f.studentRow)==null?void 0:s.religion_room:(d=f.studentRow)==null?void 0:d.main_room,r=t?t.split("/")[0].trim():null;return r?a.includes(`${e}|${r}`):!1}async function G(){var $;le("แก้ค้างเก่า","รายวิชาค้างของฉัน"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");if(!R.subjects.length&&R.subjects!==null)try{await it()}catch(g){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(g.message)}</div>`;return}const a=R.subjects,t=a.filter(g=>g.category==="สามัญ").length,r=a.filter(g=>g.category==="ศาสนา").length,s=a.filter(g=>g.status==="กำลังดำเนินการปรับแก้"),d=a.length,i=a.filter(g=>g.status==="จำนงแล้ว").length,u=s.length,y=a.filter(g=>g.status==="ปรับแก้สำเร็จ").length;let m="";if(R.subView==="catalog"){const g=a.filter(n=>n.category===R.categoryTab);m=`
      <div class="flex gap-2 mb-4">
        <button data-tab="สามัญ" style="${M(R.categoryTab==="สามัญ")}">รายวิชาสามัญ (${t})</button>
        <button data-tab="ศาสนา" style="${M(R.categoryTab==="ศาสนา","secondary")}">รายวิชาศาสนา (${r})</button>
      </div>
      <div class="flex flex-col gap-3">
        ${g.length?g.map(n=>Oe(n)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในหมวดนี้ 🎉</div>'}
      </div>`}else R.subView==="overview"?m=`
      ${f.cfg.show_deadline_banner?ot(f.cfg.intent_window_start,f.cfg.intent_window_end,"กำหนดแจ้งความจำนงขอแก้/ปรับ","--primary","ไปแจ้งความจำนง","catalog"):""}
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        ${We(a.filter(g=>g.category==="สามัญ"),"📘 สามัญ","var(--primary-dark)")}
        ${We(a.filter(g=>g.category==="ศาสนา"),"🕌 ศาสนา","var(--secondary-dark)")}
      </div>
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-2">สรุปของฉัน</p>
        <div class="grid grid-cols-2 gap-3">
          ${de(d,"วิชาค้างทั้งหมด","var(--ink)")}
          ${de(i,"จำนงแล้ว","var(--gold-ink)")}
          ${de(u,"กำลังดำเนินการ","var(--info)")}
          ${de(y,"สำเร็จแล้ว","var(--ok)")}
        </div>
      </div>`:R.subView==="myWork"&&(m=`<div class="flex flex-col gap-3">
      ${s.length?s.map(g=>Oe(g)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่ต้องทำตอนนี้ 🎉</div>'}
    </div>`);e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">
      ${m}
    </div>
    ${$a()?`
    <button id="regrade-student-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--gold),var(--gold-ink))">📝 จำนงขอแก้/ปรับ</button>`:""}`,e.querySelectorAll("[data-tab]").forEach(g=>g.addEventListener("click",()=>{R.categoryTab=g.dataset.tab,G()})),e.querySelectorAll("[data-declare]").forEach(g=>g.addEventListener("click",()=>Sa(g))),e.querySelectorAll("[data-declare-blocked]").forEach(g=>g.addEventListener("click",()=>{const n=R.subjects.find(c=>Number(c.id)===Number(g.dataset.declareBlocked));$e(n)})),e.querySelectorAll("[data-print-slip]").forEach(g=>g.addEventListener("click",()=>{var x;const n=a.find(E=>E.id===Number(g.dataset.printSlip));if(!n)return;const c=f.studentRow||{},w=((x=(n.category==="ศาสนา"?c.religion_room||c.main_room||"":c.main_room||c.religion_room||"").match(/^(ม\.[0-9]+|ปวช\.[0-9]+)/))==null?void 0:x[1])||"";Se({...n,students:{...c,...n.students||{}},class_level:n.class_level||w})})),e.querySelectorAll("[data-deadline-cta]").forEach(g=>g.addEventListener("click",()=>{R.subView=g.dataset.deadlineCta,G()})),($=document.getElementById("regrade-student-fab"))==null||$.addEventListener("click",()=>{R.subView="catalog",G()}),Ee([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],R.subView,g=>{R.subView=g,G()}),dt([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],R.subView,g=>{R.subView=g,G()})}function de(e,a,t){return`<div class="bg-[var(--surface-2)] rounded-xl p-3 text-center">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${l(a)}</p>
  </div>`}function Oe(e){var d,i;const a=((d=e.teachers)==null?void 0:d.full_name)||"-",t=e.teacher_id!=null&&Number.isFinite(Number(e.teacher_id)),r=t&&(!!f.cfg.intent_open&&wa(e.category)||ua(f.cfg,(i=f.studentRow)==null?void 0:i.id,e.id)),s=t?"":rt(e,R.departments);return`
  <div class="rg-card p-4 shadow-sm">
    <div class="flex justify-between gap-2 items-start">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${l(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${l(e.subject_code)} · ${l(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold" style="${te(e.status)}">${ee(e.status).label}</span>
    </div>
    <div class="flex items-center gap-2 mt-2 pt-2 border-t border-dashed border-[var(--line-soft)]">
      ${U(e.teachers,!0)}
      <div><p class="text-[10px] text-[var(--muted-2)]">ครูผู้สอน</p><p class="text-xs font-bold text-[var(--ink-2)]">${l(a)}</p></div>
    </div>
    ${e.status==="ยังไม่แจ้ง"&&!t?`
      <button data-declare-blocked="${e.id}"
        class="mt-3 w-full rounded-xl border border-amber-300 bg-amber-50 py-2.5 text-xs font-bold text-amber-900">
        ⏳ ยังแจ้งไม่ได้ · รอมอบหมายครูผู้สอน
      </button>
      <p class="mt-1.5 text-center text-[10px] leading-relaxed text-amber-800">โปรดรอหรือแจ้งหัวหน้ากลุ่มสาระ${s?` ${l(s)}`:"ที่รับผิดชอบ"} ให้มอบหมายครูผู้สอน</p>`:""}
    ${e.status==="ยังไม่แจ้ง"&&t&&r?`
      <button data-declare="${e.id}" data-subject="${l(e.subject_name)}"
        class="mt-3 w-full py-2.5 rounded-xl text-white font-bold text-xs"
        style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">แจ้งความจำนง</button>`:""}
    ${e.status==="ยังไม่แจ้ง"&&t&&!r?`
      <p class="mt-3 text-center text-[10px] text-[var(--muted-2)]">ยังไม่เปิดให้แจ้งความจำนงในขณะนี้</p>`:""}
    ${e.status==="กำลังดำเนินการปรับแก้"?`
      <div class="mt-3 rounded-xl p-3" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
        <p class="text-xs font-bold" style="color:var(--info)">${l(e.method||"")}</p>
        <p class="text-xs mt-1" style="color:var(--info)">กำหนด: ${l(K(e.due_text))}</p>
        ${ct(e)}
      </div>
      ${_a(e)}
      <button data-print-slip="${e.id}" class="mt-2 w-full py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>`:""}
  </div>`}function $e(e){const a=e?rt(e,R.departments):"",t=a?`หัวหน้ากลุ่มสาระ ${l(a)}`:"หัวหน้ากลุ่มสาระที่รับผิดชอบ";h(`ยังแจ้งความจำนงไม่ได้ เพราะรายวิชายังไม่มีครูผู้สอน โปรดรอหรือรีบติดต่อ${t} ให้มอบหมายครู`,"warning")}function _a(e){const a=Q(e.file_url),t=Q(e.work_url);return!a&&!t?"":`<div class="grid ${a&&t?"grid-cols-2":"grid-cols-1"} gap-2 mt-2">
    ${a?`<a href="${l(a)}" target="_blank" rel="noopener noreferrer" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">📎 เปิดไฟล์งานที่ครูแนบ ↗</a>`:""}
    ${t?`<a href="${l(t)}" target="_blank" rel="noopener noreferrer" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">🔗 เปิดลิงก์งาน / เอกสาร ↗</a>`:""}
  </div>`}function ct(e){if(!e.teacher_note&&!e.teacher_note_image_url)return"";const a=e.teacher_note_style&&typeof e.teacher_note_style=="object"?e.teacher_note_style:{},t={Sarabun:"'Sarabun', 'Noto Sans Thai', sans-serif",Tahoma:"Tahoma, 'Noto Sans Thai', sans-serif",serif:"Georgia, 'Noto Serif Thai', serif",handwritten:"'Comic Sans MS', 'Noto Sans Thai', cursive"},r=t[a.fontFamily]||t.Sarabun,s=Math.max(12,Math.min(28,Number(a.fontSize)||18)),d=/^#[\da-f]{6}$/i.test(a.color||"")?a.color:"#183b56",i=/^https:\/\//i.test(e.teacher_note_image_url||"")?e.teacher_note_image_url:"";return`<div class="mt-3 rounded-xl bg-white/80 p-3" style="border:1px solid var(--info-soft-line)">
    <p class="text-[10px] font-bold text-[var(--info)] mb-1">✍️ คำชี้แจงจากครู</p>
    ${e.teacher_note?`<p class="whitespace-pre-wrap break-words leading-relaxed" style="font-family:${r};font-size:${s}px;color:${d}">${l(e.teacher_note)}</p>`:""}
    ${i?`<a href="${l(i)}" target="_blank" rel="noopener" class="block mt-2"><img src="${l(i)}" alt="ภาพคำชี้แจงจากครู" loading="lazy" class="max-h-64 max-w-full rounded-lg border border-slate-200 object-contain"><span class="inline-block mt-1 text-[10px] font-bold text-sky-700">เปิดหรือดาวน์โหลดภาพคำชี้แจง ↗</span></a>`:""}
  </div>`}async function Sa(e){const a=Number(e.dataset.declare),t=R.subjects.find(s=>Number(s.id)===a);if(!t||t.teacher_id==null){$e(t);return}if(await N({title:"ยืนยันแจ้งความจำนง",message:`ยืนยันแจ้งความจำนงขอปรับแก้วิชา "${e.dataset.subject}" ใช่หรือไม่? เมื่อกดยืนยัน ครูผู้สอนจะได้รับแจ้งเตือนทันที`,confirmText:"ยืนยันแจ้งความจำนง"}))try{await Pt(a),h("แจ้งความจำนงเรียบร้อย ครูผู้สอนจะได้รับแจ้งเตือนทันที ✅","success"),await it(),G()}catch(s){(s==null?void 0:s.code)==="23514"||String((s==null?void 0:s.message)??"").includes("ยังไม่มีครูผู้สอน")?$e(t):h("บันทึกไม่สำเร็จ: "+s.message,"error")}}const o={subView:"overview",subjects:[],form:null,bulkForm:null,editingResponseId:null,respondExpanded:new Set,responseExpandedId:null,catalogExpanded:new Set,catalogSemesterFilter:{},assignedExpanded:new Set,assignedSemesterFilter:{},deptHeadExpanded:new Set,unassigned:[],deptHeadTeacherOptions:null,deptHeadDept:void 0,deptHeadShowAll:!1,deptHeadCategory:"all",deptHeadSelectMode:new Set,deptHeadSelected:{}};function Ve(){var t;const e=f.teacherRow,a=(t=e==null?void 0:e.positions)!=null&&t.length?e.positions:e!=null&&e.position?[e.position]:[];return["dept_head","religion_group_head","religion_subgroup_head"].some(r=>a.includes(r))}function Te(){var e;return f.isAdmin&&String(((e=f.teacherRow)==null?void 0:e.teacher_code)||"").trim()==="1087"}async function ut(){o.subjects=await It(f.teacherRow.id)}async function Ea(){const e=Te(),[a,t]=await Promise.all([Ot(e?"all":f.teacherRow.category),o.deptHeadTeacherOptions?Promise.resolve(o.deptHeadTeacherOptions):Xe(),o.deptHeadDept!==void 0?Promise.resolve(o.deptHeadDept):Vt(f.teacherRow.position_dept_id).then(r=>{o.deptHeadDept=r})]);o.unassigned=a,o.deptHeadTeacherOptions=t.filter(r=>e?["สามัญ","ศาสนา"].includes(r.category):r.category===f.teacherRow.category)}function Ta(e){var t;const a=(t=o.deptHeadDept)==null?void 0:t.dept_code;return!a||o.deptHeadShowAll?e:e.filter(r=>ke[r.subject_code.charAt(0)]===a)}async function T(){var k,$,g;le("แก้ค้างเก่า","งานแก้ค้างเก่า"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");try{await ut(),o.subView==="depthead"&&Ve()&&await Ea()}catch(n){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(n.message)}</div>`;return}const a=o.subjects,t=a.filter(n=>n.status==="จำนงแล้ว"),r=a.filter(n=>n.status==="กำลังดำเนินการปรับแก้"),s=a.filter(n=>n.status==="ปรับแก้สำเร็จ").length,d=o.subView==="respond"?Ge(t):[],i=o.subView==="assigned"?Ge(r):[];let u="";if(o.subView==="catalog"){const n=re(a);u=`<div class="flex flex-col gap-3">${n.length?n.map(c=>ja(c,{scope:"catalog",expandedSet:o.catalogExpanded,semesterFilterMap:o.catalogSemesterFilter,renderRow:pt})).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในความรับผิดชอบตอนนี้ 🎉</div>'}</div>`}else if(o.subView==="overview"){const n=a.length-t.length-r.length-s,c=a.length?Math.round(s/a.length*100):0;u=`
      ${f.cfg.show_deadline_banner?ot(f.cfg.response_window_start,f.cfg.response_window_end,"กำหนดตอบรับคำร้องของนักเรียน","--secondary","ไปตอบรับ","respond"):""}
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สรุปของฉัน</p>
        ${a.length?je([{value:n,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:t.length,color:"var(--gold-ink)",label:"รอตอบรับ"},{value:r.length,color:"var(--info)",label:"กำลังดำเนินการ"},{value:s,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${c}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีรายวิชาค้างในความรับผิดชอบ</p>'}
        <div class="grid grid-cols-2 gap-3 mt-4">
          ${ie(a.length,"วิชาค้างทั้งหมด","var(--ink)","catalog")}
          ${ie(t.length,"รอตอบรับ","var(--gold-ink)","respond")}
          ${ie(r.length,"กำลังดำเนินการ","var(--info)","assigned")}
          ${ie(s,"สำเร็จแล้ว","var(--ok)","catalog")}
        </div>
      </div>`}else if(o.subView==="assigned")u=`<div class="flex flex-col gap-3">${i.length?i.map((n,c)=>Ba(n,c)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่มอบหมายอยู่</div>'}</div>`;else if(o.subView==="respond")u=`
      <div class="flex items-center gap-2 mb-3">
        <button id="regrade-teacher-back" class="w-8 h-8 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-sm">←</button>
        <p class="text-sm font-bold text-[var(--ink)]">ตอบรับคำร้อง</p>
      </div>
      ${d.length?`<div class="rg-card p-3 mb-3 text-xs text-[var(--muted-2)]">แตะการ์ดรายวิชาเพื่อดูรายชื่อนักเรียน แตะแถวนักเรียนเพื่อตอบรับรายคน หรือใช้ปุ่มด้านบนของการ์ดเพื่อตอบรับเป็นชุด</div>
      <div class="flex flex-col gap-3">${d.map((n,c)=>Fa(n,c)).join("")}</div>`:'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ตอบรับครบหมดแล้ว 🎉</div>'}`;else if(o.subView==="depthead"){const n=re(o.unassigned),c=(k=o.deptHeadDept)==null?void 0:k.dept_code,b=Te(),w=c&&Object.values(ke).includes(c),x=b&&o.deptHeadCategory!=="all"?n.filter(S=>S.category===o.deptHeadCategory):n,E=b?x:Ta(x),j=["สามัญ","ศาสนา"].map(S=>({category:S,count:n.filter(I=>I.category===S).length}));u=`
      <div class="rg-card p-3 mb-4 text-xs text-[var(--muted-2)]">🗂️ ${b?"รายการวิชาที่ยังไม่มีครูผู้สอนทุกหมวด":`วิชาในหมวด${l(f.teacherRow.category)}ที่ยังไม่มีครูผู้สอน`} — มอบหมายครูที่สอนอยู่จริงตอนนี้ให้แต่ละวิชาได้เลย</div>
      ${b?`<div class="flex gap-2 mb-4 flex-wrap">
        <button data-depthead-category="all" style="${M(o.deptHeadCategory==="all")}">ทุกหมวด · ${n.length}</button>
        ${j.map(S=>`<button data-depthead-category="${S.category}" style="${M(o.deptHeadCategory===S.category,S.category==="ศาสนา"?"secondary":void 0)}">${S.category} · ${S.count}</button>`).join("")}
      </div>`:""}
      ${!b&&w?`
      <div class="flex gap-2 mb-4">
        <button data-depthead-scope="own" style="${M(!o.deptHeadShowAll)}">📘 เฉพาะกลุ่มสาระของฉัน (${l(o.deptHeadDept.dept_name)}) · ${n.filter(S=>ke[S.subject_code.charAt(0)]===c).length}</button>
        <button data-depthead-scope="all" style="${M(o.deptHeadShowAll,"secondary")}">ดูทั้งหมด · ${n.length}</button>
      </div>
      <p class="text-[10px] text-[var(--muted-2)] mb-3">การกรองนี้ช่วยดูง่ายขึ้นเท่านั้น ยังมอบหมายวิชานอกกลุ่มสาระของตัวเองได้ถ้าจำเป็น — ระบบจะรู้ตำแหน่งวิชาแค่แบบคร่าวๆ จากรหัสวิชา อาจไม่ครบ 100%</p>`:""}
      <div class="flex flex-col gap-3">${E.length?E.map(S=>Ia(S,o.deptHeadExpanded)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีวิชาที่ขาดครูผู้สอนแล้ว 🎉</div>'}</div>
      <datalist id="regrade-depthead-teacher-list">${o.deptHeadTeacherOptions.map(S=>`<option value="${l(S.full_name)}${S.teacher_code?` (${l(S.teacher_code)})`:""} · รหัส ${S.id}"></option>`).join("")}</datalist>`}e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">${u}</div>
    ${t.length?`
    <button id="regrade-teacher-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">
      ✅ ตอบรับ
      <span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">${t.length}</span>
    </button>`:""}`,($=document.getElementById("regrade-teacher-fab"))==null||$.addEventListener("click",()=>{o.subView="respond",T()}),(g=document.getElementById("regrade-teacher-back"))==null||g.addEventListener("click",()=>{o.subView="overview",T()}),e.querySelectorAll("[data-deadline-cta]").forEach(n=>n.addEventListener("click",()=>{o.subView=n.dataset.deadlineCta,T()})),e.querySelectorAll("[data-edit-response]").forEach(n=>n.addEventListener("click",()=>{o.form=null,o.editingResponseId=Number(n.dataset.editResponse),o.responseExpandedId=Number(n.dataset.editResponse),T()})),e.querySelectorAll("[data-close-edit-response]").forEach(n=>n.addEventListener("click",()=>{o.form=null,o.editingResponseId=null,T()})),e.querySelectorAll("[data-open-exam]").forEach(n=>n.addEventListener("click",()=>{const c=a.find(b=>b.id===Number(n.dataset.openExam));c&&pe(c,"นัดสอบปรับ"),T()})),e.querySelectorAll("[data-open-work]").forEach(n=>n.addEventListener("click",()=>{const c=a.find(b=>b.id===Number(n.dataset.openWork));c&&ga(c)})),e.querySelectorAll("[data-open-bulk-response]").forEach(n=>n.addEventListener("click",()=>{var b;const c=d[Number(n.dataset.openBulkResponse)];c&&(((b=o.bulkForm)==null?void 0:b.scope)==="respond"&&o.bulkForm.key===c.key?o.bulkForm=null:o.bulkForm={scope:"respond",key:c.key,ids:new Set(c.items.map(w=>Number(w.id))),method:"",dueDate:"",dueTime:"",file:null,fileUrl:"",fileSource:"none",noteText:"",noteStyle:null,noteImageUrl:"",noteImageBlob:null,workUrl:""},o.respondExpanded.add(c.key),T())})),e.querySelectorAll("[data-open-bulk-update]").forEach(n=>n.addEventListener("click",()=>{var b;const c=i[Number(n.dataset.openBulkUpdate)];c&&(((b=o.bulkForm)==null?void 0:b.scope)==="assigned"&&o.bulkForm.key===c.key?o.bulkForm=null:o.bulkForm=Ca(c),o.assignedExpanded.add(c.key),T())})),e.querySelectorAll("[data-toggle-assigned-group]").forEach(n=>n.addEventListener("click",()=>{const c=n.dataset.toggleAssignedGroup;o.assignedExpanded.has(c)?o.assignedExpanded.delete(c):o.assignedExpanded.add(c),T()})),e.querySelectorAll("[data-toggle-response-group]").forEach(n=>n.addEventListener("click",()=>{const c=n.dataset.toggleResponseGroup;o.respondExpanded.has(c)?o.respondExpanded.delete(c):o.respondExpanded.add(c),T()})),e.querySelectorAll("[data-toggle-individual-response]").forEach(n=>n.addEventListener("click",()=>{const c=Number(n.dataset.toggleIndividualResponse);o.responseExpandedId=o.responseExpandedId===c?null:c,T()})),e.querySelectorAll("[data-bulk-student-select]").forEach(n=>n.addEventListener("change",()=>{var x,E,j,S;const c=Number(n.dataset.bulkStudentSelect);n.checked?(x=o.bulkForm)==null||x.ids.add(c):(E=o.bulkForm)==null||E.ids.delete(c);const b=e.querySelector("[data-bulk-selected-count]");b&&(b.textContent=String(((j=o.bulkForm)==null?void 0:j.ids.size)??0));const w=e.querySelector("[data-bulk-confirm-count]");w&&(w.textContent=String(((S=o.bulkForm)==null?void 0:S.ids.size)??0))})),e.querySelectorAll("[data-bulk-select-all]").forEach(n=>n.addEventListener("click",()=>{var b;const c=d[Number(n.dataset.bulkSelectAll)];c&&((b=o.bulkForm)==null?void 0:b.key)===c.key&&(o.bulkForm.ids=new Set(c.items.map(w=>Number(w.id)))),T()})),e.querySelectorAll("[data-bulk-select-none]").forEach(n=>n.addEventListener("click",()=>{var b;const c=d[Number(n.dataset.bulkSelectNone)];c&&((b=o.bulkForm)==null?void 0:b.key)===c.key&&o.bulkForm.ids.clear(),T()})),e.querySelectorAll("[data-bulk-select-all-assigned]").forEach(n=>n.addEventListener("click",()=>{var b;const c=i[Number(n.dataset.bulkSelectAllAssigned)];c&&((b=o.bulkForm)==null?void 0:b.scope)==="assigned"&&o.bulkForm.key===c.key&&(o.bulkForm.ids=new Set(c.items.map(w=>Number(w.id)))),T()})),e.querySelectorAll("[data-bulk-select-none-assigned]").forEach(n=>n.addEventListener("click",()=>{var b;const c=i[Number(n.dataset.bulkSelectNoneAssigned)];c&&((b=o.bulkForm)==null?void 0:b.scope)==="assigned"&&o.bulkForm.key===c.key&&o.bulkForm.ids.clear(),T()})),e.querySelectorAll("[data-bulk-method]").forEach(n=>n.addEventListener("click",()=>{o.bulkForm&&(o.bulkForm.method=n.dataset.bulkMethod==="exam"?"นัดสอบปรับ":"ให้งานแก้",T())})),e.querySelectorAll("[data-bulk-due-date]").forEach(n=>n.addEventListener("input",()=>{o.bulkForm&&(o.bulkForm.dueDate=n.value)})),e.querySelectorAll("[data-bulk-due-time]").forEach(n=>n.addEventListener("input",()=>{o.bulkForm&&(o.bulkForm.dueTime=n.value)})),e.querySelectorAll("[data-bulk-work-url]").forEach(n=>n.addEventListener("input",()=>{o.bulkForm&&(o.bulkForm.workUrl=n.value,o.bulkForm.scope==="assigned"&&(o.bulkForm.preserveWorkUrlIfEmpty=!1))})),e.querySelectorAll("[data-bulk-work-file]").forEach(n=>n.addEventListener("change",()=>{var w;const c=((w=n.files)==null?void 0:w[0])||null;if(c&&c.size>5*1024*1024){n.value="",h("ไฟล์ต้องมีขนาดไม่เกิน 5 MB","warning");return}if(!o.bulkForm)return;o.bulkForm.file=c,o.bulkForm.fileUrl="",o.bulkForm.fileSource=c?"upload":"none",o.bulkForm.scope==="assigned"&&(o.bulkForm.preserveFileIfEmpty=!1);const b=e.querySelector("[data-bulk-work-file-name]");b&&(b.textContent=c?c.name:"ยังไม่ได้เลือกไฟล์")})),e.querySelectorAll("[data-bulk-reuse-file]").forEach(n=>n.addEventListener("click",()=>{o.bulkForm&&(o.bulkForm.file=null,o.bulkForm.fileUrl=n.dataset.bulkReuseFile,o.bulkForm.fileSource="reuse",o.bulkForm.scope==="assigned"&&(o.bulkForm.preserveFileIfEmpty=!1),T())})),e.querySelectorAll("[data-bulk-no-file]").forEach(n=>n.addEventListener("click",()=>{o.bulkForm&&(o.bulkForm.file=null,o.bulkForm.fileUrl="",o.bulkForm.fileSource="none",o.bulkForm.scope==="assigned"&&(o.bulkForm.preserveFileIfEmpty=!1),T())})),e.querySelectorAll("[data-bulk-clear-work-url]").forEach(n=>n.addEventListener("click",()=>{o.bulkForm&&(o.bulkForm.workUrl="",o.bulkForm.preserveWorkUrlIfEmpty=!1,T())})),e.querySelectorAll("[data-bulk-clear-work-file]").forEach(n=>n.addEventListener("click",()=>{o.bulkForm&&(o.bulkForm.file=null,o.bulkForm.fileUrl="",o.bulkForm.fileSource="none",o.bulkForm.scope==="assigned"&&(o.bulkForm.preserveFileIfEmpty=!1),T())})),e.querySelectorAll("[data-bulk-confirm]").forEach(n=>n.addEventListener("click",()=>{const c=d[Number(n.dataset.bulkConfirm)];c&&Ua(n,c)})),e.querySelectorAll("[data-bulk-update]").forEach(n=>n.addEventListener("click",()=>{const c=i[Number(n.dataset.bulkUpdate)];c&&Da(n,c)})),e.querySelectorAll("[data-bulk-edit-note]").forEach(n=>n.addEventListener("click",async()=>{const c=o.bulkForm;if(!c)return;const b=await Ue({text:c.noteText,style:c.noteStyle,imageUrl:c.noteImageUrl});b&&(c.noteText=b.text,c.noteStyle=b.clearImage?null:b.style,c.noteImageBlob=b.imageBlob,c.scope==="assigned"&&(c.preserveNoteIfUntouched=!1),b.clearImage&&(c.noteImageUrl=""),T())})),e.querySelectorAll("[data-clear-bulk-note]").forEach(n=>n.addEventListener("click",()=>{o.bulkForm&&(Object.assign(o.bulkForm,{noteText:"",noteStyle:null,noteImageUrl:"",noteImageBlob:null}),o.bulkForm.scope==="assigned"&&(o.bulkForm.preserveNoteIfUntouched=!1),T())})),e.querySelectorAll("[data-bulk-cancel]").forEach(n=>n.addEventListener("click",()=>{o.bulkForm=null,T()})),e.querySelectorAll("[data-cancel-form]").forEach(n=>n.addEventListener("click",()=>{o.form=null,T()})),e.querySelectorAll("[data-due-date]").forEach(n=>n.addEventListener("input",()=>{o.form.dueDate=n.value})),e.querySelectorAll("[data-due-time]").forEach(n=>n.addEventListener("input",()=>{o.form.dueTime=n.value})),e.querySelectorAll("[data-work-url]").forEach(n=>n.addEventListener("input",()=>{o.form.workUrl=n.value})),e.querySelectorAll("[data-work-file]").forEach(n=>n.addEventListener("change",()=>{var w;const c=((w=n.files)==null?void 0:w[0])||null;if(c&&c.size>5*1024*1024){n.value="",h("ไฟล์ต้องมีขนาดไม่เกิน 5 MB","warning");return}o.form.file=c,o.form.fileUrl="",o.form.fileSource=c?"upload":"none";const b=e.querySelector("[data-work-file-name]");b&&(b.textContent=c?c.name:"ยังไม่ได้เลือกไฟล์")})),e.querySelectorAll("[data-remove-work-file]").forEach(n=>n.addEventListener("click",()=>{o.form.file=null,o.form.fileUrl="",o.form.fileSource="none",T()})),e.querySelectorAll("[data-confirm-assign]").forEach(n=>n.addEventListener("click",()=>Pa(n))),e.querySelectorAll("[data-edit-regrade-note]").forEach(n=>n.addEventListener("click",async()=>{const c=o.form;if(!c)return;const b=await Ue({text:c.noteText,style:c.noteStyle,imageUrl:c.noteImageUrl});b&&(c.noteText=b.text,c.noteStyle=b.clearImage?null:b.style,c.noteImageBlob=b.imageBlob,b.clearImage&&(c.noteImageUrl=""),T())})),e.querySelectorAll("[data-clear-regrade-note]").forEach(n=>n.addEventListener("click",()=>{o.form&&(Object.assign(o.form,{noteText:"",noteStyle:null,noteImageUrl:"",noteImageBlob:null}),T())})),e.querySelectorAll("[data-cancel-response]").forEach(n=>n.addEventListener("click",()=>Oa(n))),e.querySelectorAll("[data-print-slip]").forEach(n=>n.addEventListener("click",()=>{var b;const c=a.find(w=>w.id===Number(n.dataset.printSlip));c&&Se(c,(b=f.teacherRow)==null?void 0:b.full_name)})),e.querySelectorAll("[data-toggle-group]").forEach(n=>n.addEventListener("click",()=>{const[c,...b]=n.dataset.toggleGroup.split("|"),w=b.join("|"),x=c==="catalog"?o.catalogExpanded:c==="assigned"?o.assignedExpanded:o.deptHeadExpanded;x.has(w)?x.delete(w):x.add(w),T()})),e.querySelectorAll("[data-depthead-assign]").forEach(n=>n.addEventListener("click",()=>qa(n))),e.querySelectorAll("[data-depthead-scope]").forEach(n=>n.addEventListener("click",()=>{o.deptHeadShowAll=n.dataset.deptheadScope==="all",T()})),e.querySelectorAll("[data-depthead-category]").forEach(n=>n.addEventListener("click",()=>{o.deptHeadCategory=n.dataset.deptheadCategory,T()})),e.querySelectorAll("[data-depthead-toggle-select]").forEach(n=>n.addEventListener("click",()=>{const c=n.dataset.deptheadToggleSelect;o.deptHeadSelectMode.has(c)?o.deptHeadSelectMode.delete(c):o.deptHeadSelectMode.add(c),o.deptHeadSelected[c]=new Set,T()})),e.querySelectorAll("[data-depthead-student-select]").forEach(n=>n.addEventListener("change",()=>{const c=n.dataset.deptheadCode,b=Number(n.dataset.deptheadStudentSelect);o.deptHeadSelected[c]||(o.deptHeadSelected[c]=new Set);const w=o.deptHeadSelected[c];n.checked?w.add(b):w.delete(b),Ra(c)})),e.querySelectorAll("[data-depthead-select-all]").forEach(n=>n.addEventListener("change",()=>{const c=n.dataset.deptheadSelectAll,b=re(o.unassigned).find(w=>w.key===c);o.deptHeadSelected[c]=new Set(n.checked?(b==null?void 0:b.items.map(w=>w.id))??[]:[]),T()})),e.querySelectorAll("[data-depthead-assign-selected]").forEach(n=>n.addEventListener("click",()=>Na(n))),e.querySelectorAll("[data-group-sem]").forEach(n=>n.addEventListener("change",c=>{const[b,...w]=n.dataset.groupSem.split("|"),x=w.join("|"),E=b==="catalog"?o.catalogSemesterFilter:o.assignedSemesterFilter;E[x]=c.target.value,T()})),e.querySelectorAll("[data-goto-sub]").forEach(n=>n.addEventListener("click",()=>{o.subView=n.dataset.gotoSub,T()}));const y=[{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"assigned",icon:"📝",label:"มอบหมายงาน"}];Ve()&&y.push({key:"depthead",icon:"🗂️",label:"จัดการรายวิชา"});const m=o.subView==="respond"?"overview":o.subView;Ee(y,m,n=>{o.subView=n,T()}),dt(y,m,n=>{o.subView=n,T()})}function re(e){const a=new Map;return e.forEach(t=>{const r=`${t.category||""}|${t.subject_code}`;a.has(r)||a.set(r,{key:r,subject_code:t.subject_code,subject_name:t.subject_name,category:t.category,items:[]}),a.get(r).items.push(t)}),[...a.values()].sort((t,r)=>r.items.length-t.items.length)}function ja(e,{scope:a,expandedSet:t,semesterFilterMap:r,renderRow:s}){const d=e.key,i=t.has(d),u=[...new Set(e.items.map(k=>k.semester).filter(Boolean))].sort().reverse(),y=r[d]||"all",m=y==="all"?e.items:e.items.filter(k=>k.semester===y);return`
  <div class="rg-card p-4">
    <button data-toggle-group="${a}|${l(d)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${l(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${l(e.subject_code)}</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${ge(e.category)}">${l(e.category)}</span>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">นักเรียนติด ${e.items.length} คน</span>
        <span class="text-[var(--muted-2)] text-sm inline-block transition-transform" style="transform:rotate(${i?"180deg":"0deg"})">▾</span>
      </div>
    </button>
    ${i?`
    <div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      ${u.length>1?`
      <select data-group-sem="${a}|${l(d)}" class="w-full mb-3 px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
        <option value="all">ทุกภาคเรียน (${e.items.length})</option>
        ${u.map(k=>`<option value="${l(k)}" ${y===k?"selected":""}>${l(k)} (${e.items.filter($=>$.semester===k).length})</option>`).join("")}
      </select>`:""}
      <div class="flex flex-col gap-2">${m.map(k=>s(k)).join("")}</div>
    </div>`:""}
  </div>`}function pt(e){var t,r,s,d;const a=((t=e.students)==null?void 0:t.full_name)||"-";return`
  <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)]">
    ${U(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${l(a)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${l(((r=e.students)==null?void 0:r.student_code)||"")} · ${l(((s=e.students)==null?void 0:s.main_room)||((d=e.students)==null?void 0:d.religion_room)||"")} · ${l(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(e.status)}">${ee(e.status).label}</span>
  </div>`}function La(e){var y,m,k,$;const a=((y=e.students)==null?void 0:y.full_name)||"-",t=o.form,r=Number(o.editingResponseId)===Number(e.id),s=t&&Number(t.id)===Number(e.id)&&t.method==="นัดสอบปรับ",d=t&&Number(t.id)===Number(e.id)&&t.method==="ให้งานแก้",i=/^https:\/\//i.test(e.file_url||"")?e.file_url:"",u=Q(e.work_url);return`
  <div class="p-2.5 rounded-xl bg-[var(--surface-2)]">
    <div class="flex items-center gap-2.5">
      ${U(e.students,!1)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${l(a)}</p>
        <p class="text-[10px] text-[var(--muted-2)] truncate">${l(((m=e.students)==null?void 0:m.student_code)||"")} · ${l(((k=e.students)==null?void 0:k.main_room)||(($=e.students)==null?void 0:$.religion_room)||"")} · ${l(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(e.status)}">ตอบรับแล้ว</span>
    </div>
    <div class="mt-2 rounded-lg p-2" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
      <p class="text-[11px] font-bold" style="color:var(--info)">${l(e.method||"")}</p>
      <p class="text-[11px] mt-0.5" style="color:var(--info)">กำหนด: ${l(K(e.due_text))}</p>
      ${ct(e)}
    </div>
    <div class="grid ${i||u?"grid-cols-2":"grid-cols-1"} gap-2 mt-2">
      ${i?`<a href="${l(i)}" target="_blank" rel="noopener" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">📎 เปิดไฟล์งาน ↗</a>`:""}
      ${u?`<a href="${l(u)}" target="_blank" rel="noopener noreferrer" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">🔗 เปิดลิงก์งาน ↗</a>`:""}
      <button data-print-slip="${e.id}" class="py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
    </div>
    ${r?!s&&!d?`
      <p class="text-[10px] font-bold text-[var(--muted-2)] mt-3">เลือกวิธีที่ต้องการแก้ไข</p>
      <div class="flex gap-2 mt-1.5">
        <button data-open-exam="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
        <button data-open-work="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
      </div>
      <button data-close-edit-response class="mt-2 w-full py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิดการแก้ไข</button>
    `:"":`
      <button data-edit-response="${e.id}" class="mt-2 w-full py-2 rounded-xl text-xs font-bold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">✏️ แก้ไข</button>
    `}
    ${s?be(e,t,!0):""}
    ${d?be(e,t,!1):""}
  </div>`}function Aa(e,a,t){var s,d,i,u;const r=((s=e.students)==null?void 0:s.full_name)||"-";return`
  <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)] cursor-pointer">
    <input type="checkbox" data-depthead-student-select="${e.id}" data-depthead-code="${l(a)}" ${t?"checked":""} class="flex-shrink-0 rounded border-gray-300 text-[var(--primary)]">
    ${U(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${l(r)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${l(((d=e.students)==null?void 0:d.student_code)||"")} · ${l(((i=e.students)==null?void 0:i.main_room)||((u=e.students)==null?void 0:u.religion_room)||"")} · ${l(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(e.status)}">${ee(e.status).label}</span>
  </label>`}function Ia(e,a,t){const r=e.key,s=a.has(r),d=o.deptHeadSelectMode.has(r),i=o.deptHeadSelected[r]||new Set;return`
  <div class="rg-card p-4">
    <button data-toggle-group="depthead|${l(r)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${l(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${l(e.subject_code)}</p>
        ${Te()?`<span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${ge(e.category)}">${l(e.category)}</span>`:""}
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--bad-soft);color:var(--bad);border:1px solid var(--bad-soft-line)">ยังไม่มีครู ${e.items.length} คน</span>
        <span class="text-[var(--muted-2)] text-sm inline-block transition-transform" style="transform:rotate(${s?"180deg":"0deg"})">▾</span>
      </div>
    </button>
    ${s?`
    <div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      <div class="flex items-center justify-between gap-2 mb-1.5">
        <label class="block text-[11px] font-bold text-[var(--ink-2)]">มอบหมายครูผู้สอนปัจจุบันให้วิชานี้ทั้งหมด (${e.items.length} รายการ)</label>
        <button type="button" data-depthead-toggle-select="${l(r)}" class="flex-shrink-0 text-[10px] font-bold" style="color:var(--primary)">${d?"✕ ยกเลิกเลือกเฉพาะคน":"☑️ เลือกเฉพาะบางคน"}</button>
      </div>
      <div class="flex gap-2 mb-3">
        <input data-depthead-input="${l(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
        <button data-depthead-assign="${l(r)}" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">มอบหมายทั้งหมด</button>
      </div>
      ${d?`
      <label class="flex items-center gap-2 mb-2 px-1 text-[11px] text-[var(--muted-2)] select-none">
        <input type="checkbox" data-depthead-select-all="${l(r)}" data-total="${e.items.length}" class="rounded border-gray-300 text-[var(--primary)]">
        เลือกทั้งหมดในวิชานี้
      </label>`:""}
      <div class="flex flex-col gap-2">${e.items.map(u=>d?Aa(u,r,i.has(u.id)):pt(u)).join("")}</div>
      ${d?`
      <div data-depthead-selected-bar="${l(r)}" class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex gap-2 ${i.size===0?"opacity-40":""}">
        <input data-depthead-selected-input="${l(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครูสำหรับคนที่เลือก...">
        <button data-depthead-assign-selected="${l(r)}" ${i.size===0?"disabled":""} class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">มอบหมายที่เลือก (<span data-depthead-selected-count="${l(r)}">${i.size}</span>)</button>
      </div>`:""}
    </div>`:""}
  </div>`}function Ra(e){const a=o.deptHeadSelected[e]||new Set,t=document.querySelector(`[data-depthead-selected-bar="${CSS.escape(e)}"]`),r=document.querySelector(`[data-depthead-selected-count="${CSS.escape(e)}"]`),s=document.querySelector(`[data-depthead-assign-selected="${CSS.escape(e)}"]`),d=document.querySelector(`[data-depthead-select-all="${CSS.escape(e)}"]`);if(r&&(r.textContent=String(a.size)),s&&(s.disabled=a.size===0),t&&t.classList.toggle("opacity-40",a.size===0),d){const i=Number(d.dataset.total||0);d.checked=i>0&&a.size===i,d.indeterminate=a.size>0&&a.size<i}}async function qa(e){const a=e.dataset.deptheadAssign,t=document.querySelector(`[data-depthead-input="${CSS.escape(a)}"]`),r=se(t.value,o.deptHeadTeacherOptions);if(!r){h("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=re(o.unassigned).find(i=>i.key===a);if(!s){h("ไม่พบรายการวิชาที่เลือก กรุณาโหลดหน้าใหม่","error");return}if(await N({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(s==null?void 0:s.subject_name)||a}" ให้นักเรียนที่ยังไม่มีครูทั้ง ${(s==null?void 0:s.items.length)??""} รายการใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const i=await Jt(s.subject_code,s.category,r.id);h(`มอบหมายครูผู้สอนให้ ${i} รายการเรียบร้อย ✅`,"success"),T()}catch(i){h("มอบหมายไม่สำเร็จ: "+i.message,"error")}}async function Na(e){const a=e.dataset.deptheadAssignSelected,t=document.querySelector(`[data-depthead-selected-input="${CSS.escape(a)}"]`),r=se(t.value,o.deptHeadTeacherOptions);if(!r){h("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=[...o.deptHeadSelected[a]||[]];if(!s.length){h("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}const d=re(o.unassigned).find(u=>u.key===a);if(!d){h("ไม่พบรายการวิชาที่เลือก กรุณาโหลดหน้าใหม่","error");return}if(await N({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(d==null?void 0:d.subject_name)||a}" ให้นักเรียนที่เลือกไว้ ${s.length} คนใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const u=await Zt(s,r.id);h(`มอบหมายครูผู้สอนให้ ${u} คนที่เลือกเรียบร้อย ✅`,"success"),o.deptHeadSelectMode.delete(a),delete o.deptHeadSelected[a],T()}catch(u){h("มอบหมายไม่สำเร็จ: "+u.message,"error")}}function je(e,a,t){const r=e.reduce((i,u)=>i+u.value,0)||1;let s=0;return`
  <div class="flex items-center gap-4">
    <div style="width:96px;height:96px;border-radius:9999px;background:conic-gradient(${e.map(i=>{const u=s/r*360;s+=i.value;const y=s/r*360;return`${i.color} ${u}deg ${y}deg`}).join(", ")});flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <div style="width:64px;height:64px;border-radius:9999px;background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p class="text-base font-extrabold text-[var(--ink)]">${l(a)}</p>
        <p class="text-[9px] text-[var(--muted-2)]">${l(t)}</p>
      </div>
    </div>
    <div class="flex-1 min-w-0 grid grid-cols-1 gap-1.5">
      ${e.map(i=>`
      <div class="flex items-center gap-1.5 text-[11px]">
        <span style="width:8px;height:8px;border-radius:9999px;background:${i.color};flex-shrink:0;"></span>
        <span class="text-[var(--muted)] truncate">${l(i.label)}</span>
        <span class="ml-auto font-bold text-[var(--ink-2)]">${i.value}</span>
      </div>`).join("")}
    </div>
  </div>`}function We(e,a,t){const r=e.filter(m=>m.status==="ยังไม่แจ้ง").length,s=e.filter(m=>m.status==="จำนงแล้ว").length,d=e.filter(m=>m.status==="กำลังดำเนินการปรับแก้").length,i=e.filter(m=>m.status==="ปรับแก้สำเร็จ").length,u=e.length,y=u?Math.round(i/u*100):0;return`
  <div class="rg-card p-4 flex-1 min-w-0">
    <p class="text-xs font-bold mb-3" style="color:${t}">${l(a)} (${u})</p>
    ${u?je([{value:r,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:s,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:d,color:"var(--info)",label:"กำลังดำเนินการ"},{value:i,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${y}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีวิชาค้างในหมวดนี้ 🎉</p>'}
  </div>`}function ie(e,a,t,r){return`<button data-goto-sub="${l(r)}" class="bg-[var(--surface-2)] rounded-xl p-3 text-center hover:opacity-80 active:scale-[0.98] transition cursor-pointer">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${l(a)}</p>
  </button>`}function Ha(e,a=!1){var i,u,y,m;const t=((i=e.students)==null?void 0:i.full_name)||"-",r=o.form,s=r&&r.id===e.id&&r.method==="นัดสอบปรับ",d=r&&r.id===e.id&&r.method==="ให้งานแก้";return`
  <div class="${a?"rounded-xl bg-[var(--surface)] p-3 border border-[var(--line-soft)]":"rg-card p-4"}">
    ${a?`<p class="text-[10px] text-[var(--muted-2)] mb-2">ตอบรับรายคน · ${l(t)}</p>`:`<div class="flex gap-2">
      ${U(e.students,!0)}
      <div class="min-w-0">
        <p class="font-bold text-xs text-[var(--ink)]">${l(t)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">(${l(((u=e.students)==null?void 0:u.student_code)||"")} · ${l(((y=e.students)==null?void 0:y.main_room)||((m=e.students)==null?void 0:m.religion_room)||"")})</p>
        <p class="text-xs text-[var(--muted)] mt-0.5">${l(e.subject_name)} (${l(e.subject_code)})</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${ge(e.category)}">${l(e.category)}</span>
      </div>
    </div>`}
    ${za(e)}
    ${s?be(e,r,!0):""}
    ${d?be(e,r,!1):""}
  </div>`}function Ge(e){const a=new Map;for(const t of e){const r=[t.subject_code,t.semester,t.category].join("|");a.has(r)||a.set(r,{key:r,subject_code:t.subject_code,subject_name:t.subject_name,semester:t.semester,category:t.category,items:[]}),a.get(r).items.push(t)}return[...a.values()].sort((t,r)=>r.items.length-t.items.length||String(t.subject_name).localeCompare(String(r.subject_name),"th"))}function Ca(e){const a=e.items[0]||{},t=k=>e.items.every($=>JSON.stringify($[k]??null)===JSON.stringify(a[k]??null)),r=t("method"),s=t("due_text"),[d="",i=""]=s?String(a.due_text||"").split("T"):[],u=t("file_url"),y=t("work_url"),m=t("teacher_note")&&t("teacher_note_style")&&t("teacher_note_image_url");return{scope:"assigned",key:e.key,ids:new Set(e.items.map(k=>Number(k.id))),method:r&&a.method||"",dueDate:d,dueTime:i,file:null,fileUrl:r&&a.method==="ให้งานแก้"&&u&&a.file_url||"",fileSource:u&&a.file_url?"current":"none",workUrl:r&&a.method==="ให้งานแก้"&&y&&a.work_url||"",preserveFileIfEmpty:!0,preserveNoteIfUntouched:!0,preserveWorkUrlIfEmpty:!0,noteText:m&&a.teacher_note||"",noteStyle:m&&a.teacher_note_style||null,noteImageUrl:m&&a.teacher_note_image_url||"",noteImageBlob:null}}function Fa(e,a){var s;const t=o.respondExpanded.has(e.key),r=((s=o.bulkForm)==null?void 0:s.scope)==="respond"&&o.bulkForm.key===e.key;return`<section class="rg-card p-4">
    <div class="flex items-start gap-2">
      <button data-toggle-response-group="${l(e.key)}" class="flex-1 min-w-0 flex items-start justify-between gap-2 text-left">
        <span class="min-w-0"><span class="block font-bold text-sm text-[var(--ink)] truncate">${l(e.subject_name||e.subject_code)}</span>
        <span class="block text-[10px] text-[var(--muted-2)] mt-0.5">${l(e.subject_code)} · ${l(e.semester)} · ${l(e.category)}</span></span>
        <span class="flex items-center gap-2 shrink-0"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">รอตอบ ${e.items.length} คน</span><span class="text-[var(--muted-2)] text-sm transition-transform" style="transform:rotate(${t?"180deg":"0deg"})">▾</span></span>
      </button>
      <button data-open-bulk-response="${a}" class="shrink-0 px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">${r?"ปิดชุด":"ตอบรับเป็นชุด"}</button>
    </div>
    ${r?bt(e,a):""}
    ${t?`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex flex-col gap-2">${e.items.map(d=>Ma(d)).join("")}</div>`:""}
  </section>`}function Ba(e,a){var s;const t=o.assignedExpanded.has(e.key),r=((s=o.bulkForm)==null?void 0:s.scope)==="assigned"&&o.bulkForm.key===e.key;return`<section class="rg-card p-4">
    <div class="flex items-start gap-2">
      <button data-toggle-assigned-group="${l(e.key)}" class="flex-1 min-w-0 flex items-start justify-between gap-2 text-left">
        <span class="min-w-0"><span class="block font-bold text-sm text-[var(--ink)] truncate">${l(e.subject_name||e.subject_code)}</span>
        <span class="block text-[10px] text-[var(--muted-2)] mt-0.5">${l(e.subject_code)} · ${l(e.semester)} · ${l(e.category)}</span></span>
        <span class="flex items-center gap-2 shrink-0"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">ตอบรับแล้ว ${e.items.length} คน</span><span class="text-[var(--muted-2)] text-sm transition-transform" style="transform:rotate(${t?"180deg":"0deg"})">▾</span></span>
      </button>
      <button data-open-bulk-update="${a}" class="shrink-0 px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">${r?"ปิดชุดแก้ไข":"แก้ไขเป็นชุด"}</button>
    </div>
    ${r?bt(e,a,!0):""}
    ${t?`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex flex-col gap-2">${e.items.map(d=>La(d)).join("")}</div>`:""}
  </section>`}function Ma(e){var r,s,d,i;const a=Number(e.id),t=o.responseExpandedId===a;return`<div class="rounded-xl bg-[var(--surface-2)] overflow-hidden">
    <button data-toggle-individual-response="${a}" class="w-full flex items-center gap-2.5 p-2.5 text-left">
      ${U(e.students,!1)}
      <span class="min-w-0 flex-1"><span class="block text-xs font-bold text-[var(--ink)] truncate">${l(((r=e.students)==null?void 0:r.full_name)||"-")}</span><span class="block text-[10px] text-[var(--muted-2)] truncate">${l(((s=e.students)==null?void 0:s.student_code)||"")} · ${l(((d=e.students)==null?void 0:d.main_room)||((i=e.students)==null?void 0:i.religion_room)||"")}</span></span>
      <span class="px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(e.status)}">รอตอบ</span>
      <span class="text-[var(--muted-2)] text-xs transition-transform" style="transform:rotate(${t?"180deg":"0deg"})">▾</span>
    </button>
    ${t?`<div class="px-2.5 pb-2.5">${Ha(e,!0)}</div>`:""}
  </div>`}function mt(e,a=!1){const t=a?"data-bulk-edit-note":"data-edit-regrade-note",r=a?"data-clear-bulk-note":"data-clear-regrade-note",s=/^https:\/\//i.test(e.noteImageUrl||"")?e.noteImageUrl:"",d=!!(e.noteText||s||e.noteImageBlob),i=d||a&&e.scope==="assigned"&&e.preserveNoteIfUntouched;return`<div class="mt-3 rounded-xl border border-sky-100 bg-sky-50 p-3">
    <div class="flex items-start justify-between gap-2">
      <div class="min-w-0"><p class="text-xs font-bold text-sky-900">✍️ คำชี้แจงจากครู (ถ้ามี)</p>
        <p class="text-[10px] text-sky-800 mt-0.5">พิมพ์หรือเขียนด้วยลายมือได้ ระบบจะแสดงข้อความในหน้าของนักเรียนและสร้างภาพขนาดเล็กแนบให้</p>
        ${e.noteText?`<p class="mt-2 text-xs text-slate-700 whitespace-pre-wrap line-clamp-3">${l(e.noteText)}</p>`:'<p class="mt-2 text-[10px] text-slate-500">ยังไม่มีคำชี้แจง</p>'}
        ${s?`<a href="${l(s)}" target="_blank" rel="noopener" class="inline-block mt-1 text-[10px] font-bold text-sky-700 underline">เปิดภาพคำชี้แจงเดิม ↗</a>`:""}
        ${e.noteImageBlob?`<span class="block mt-1 text-[10px] font-bold text-emerald-700">พร้อมแนบภาพ JPG ใหม่ · ${(e.noteImageBlob.size/1024).toFixed(1)} KB</span>`:""}
      </div>
      <div class="shrink-0 flex flex-col gap-1.5"><button type="button" ${t} class="rounded-lg bg-white px-3 py-2 text-[10px] font-bold text-sky-800 border border-sky-200">${d?"แก้คำชี้แจง":"เขียนคำชี้แจง"}</button>
        ${i?`<button type="button" ${r} class="rounded-lg px-2 py-1 text-[10px] font-bold text-rose-600">${d?"ลบ":"ล้างคำชี้แจงเดิม"}</button>`:""}</div>
    </div>
  </div>`}function bt(e,a,t=!1){var y,m;const r=t?"assigned":"respond",s=((y=o.bulkForm)==null?void 0:y.scope)===r&&o.bulkForm.key===e.key?o.bulkForm:null;if(!s)return"";const d=(s==null?void 0:s.ids.size)??e.items.length,i=[...new Set(e.items.map(k=>k.file_url).filter(Boolean))],u=e.items.map(k=>{var n,c,b,w;const $=Number(k.id),g=s?s.ids.has($):!0;return`<label class="flex items-center gap-2 py-2 border-t border-[var(--line)] cursor-pointer">
      <input data-bulk-student-select="${$}" type="checkbox" ${g?"checked":""} ${s?"":"disabled"} class="accent-[var(--primary)]">
      <span class="min-w-0 flex-1"><span class="block text-xs font-bold text-[var(--ink)]">${l(((n=k.students)==null?void 0:n.full_name)||"-")}</span><span class="text-[10px] text-[var(--muted-2)]">${l(((c=k.students)==null?void 0:c.student_code)||"")} · ${l(((b=k.students)==null?void 0:b.main_room)||((w=k.students)==null?void 0:w.religion_room)||"")}</span></span>
    </label>`}).join("");return`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      <div class="text-[10px] text-[var(--muted-2)] mb-2">${t?"เลือกนักเรียนที่ต้องการ แล้วกำหนดวิธี/วันนัด/ไฟล์/คำชี้แจงใหม่ร่วมกัน":"เลือกนักเรียนและกำหนดวิธี/วันนัดร่วมกันสำหรับวิชานี้"}</div>
      <div>
      <div class="flex justify-between items-center mb-1"><span class="text-xs font-bold text-[var(--ink-2)]">${t?"แก้ไขคำตอบให้":"ผู้รับคำตอบ"}: <b data-bulk-selected-count>${d}</b> คน</span><span class="flex gap-3"><button ${t?`data-bulk-select-all-assigned="${a}"`:`data-bulk-select-all="${a}"`} class="text-[10px] font-bold text-[var(--info)]">เลือกทั้งหมด</button><button ${t?`data-bulk-select-none-assigned="${a}"`:`data-bulk-select-none="${a}"`} class="text-[10px] font-bold text-[var(--muted)]">ล้าง</button></span></div>
      <div class="max-h-48 overflow-auto">${u}</div>
      <div class="grid grid-cols-2 gap-2 mt-3">
        <button data-bulk-method="exam" class="py-2 rounded-xl text-xs font-bold ${s.method==="นัดสอบปรับ"?"ring-2 ring-[var(--info)]":""}" style="background:var(--info-soft);color:var(--info)">🗓 นัดสอบปรับ</button>
        <button data-bulk-method="work" class="py-2 rounded-xl text-xs font-bold ${s.method==="ให้งานแก้"?"ring-2 ring-[var(--gold-ink)]":""}" style="background:var(--gold-soft);color:var(--gold-ink)">📎 ให้งานแก้</button>
      </div>
      ${s.method?`<label class="block text-[11px] font-bold text-[var(--ink-2)] mt-3 mb-1">${s.method==="นัดสอบปรับ"?"วันที่นัดสอบ":"กำหนดส่งงาน"}</label>
      <input data-bulk-due-date type="date" value="${l(s.dueDate)}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
      ${s.method==="นัดสอบปรับ"?`<label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">เวลานัดสอบ</label><input data-bulk-due-time type="time" value="${l(s.dueTime)}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">`:`
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">ลิงก์งาน / เอกสาร (ถ้ามี)</label>
      <input data-bulk-work-url type="url" maxlength="2000" value="${l(s.workUrl||"")}" placeholder="https://..." class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
      ${t&&s.preserveWorkUrlIfEmpty?'<p class="mt-1 text-[10px] text-[var(--muted-2)]">หากไม่แก้ช่องนี้ ระบบจะเก็บลิงก์เดิมของแต่ละคนไว้</p>':""}
      ${t?'<button data-bulk-clear-work-url class="mt-1 text-[10px] font-bold text-[var(--bad)]">ล้างลิงก์เดิมของคนที่เลือก</button>':""}
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">ไฟล์งานร่วมกัน (ถ้ามี · ไม่เกิน 5 MB)</label>
      ${s.fileUrl?`<div class="flex justify-between items-center p-2 rounded-lg bg-[var(--surface)] text-[10px]"><a href="${l(/^https:\/\//i.test(s.fileUrl)?s.fileUrl:"")}" target="_blank" rel="noopener" class="text-[var(--info)] font-bold">ไฟล์ที่เลือก ↗</a><button data-bulk-clear-work-file class="text-[var(--bad)] font-bold">เอาออก</button></div>`:""}
      ${i.length===1?`<button data-bulk-reuse-file="${l(i[0])}" class="mt-2 w-full py-2 rounded-lg bg-[var(--surface)] text-[10px] font-bold text-[var(--info)]">ใช้ไฟล์เดิมที่ใช้ร่วมกันอยู่แล้ว</button>`:""}
      <label class="mt-2 flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-dashed border-[var(--line)] bg-[var(--surface)] text-xs font-bold text-[var(--ink-2)] cursor-pointer"><span>เลือกไฟล์จากเครื่อง</span><input data-bulk-work-file type="file" class="sr-only" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png"></label>
      <p data-bulk-work-file-name class="mt-1 text-[10px] text-[var(--muted-2)] truncate">${l(((m=s.file)==null?void 0:m.name)||(s.fileUrl?"ใช้ไฟล์ที่เลือกไว้":"ยังไม่ได้เลือกไฟล์"))}</p>`}${t&&s.method==="ให้งานแก้"?`<p class="mt-1 text-[10px] text-[var(--muted-2)]">${s.preserveFileIfEmpty?"หากไม่เลือกไฟล์ใหม่ จะเก็บไฟล์เดิมของแต่ละคนไว้":"การบันทึกจะใช้ไฟล์ที่เลือก หรือเอาไฟล์เดิมออก"}</p><button data-bulk-no-file class="mt-1 text-[10px] font-bold text-[var(--bad)]">เอาไฟล์เดิมออกจากคนที่เลือก</button>`:""}${mt(s,!0)}${t&&s.preserveNoteIfUntouched?'<p class="mt-1 text-[10px] text-[var(--muted-2)]">หากไม่แก้คำชี้แจง ระบบจะเก็บคำชี้แจงเดิมของแต่ละคนไว้</p>':""}`:""}
      <div class="flex gap-2 mt-3"><button ${t?`data-bulk-update="${a}"`:`data-bulk-confirm="${a}"`} class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">${t?"บันทึกการแก้ไข":"ตอบรับ"} <span data-bulk-confirm-count>${d}</span> คน</button><button data-bulk-cancel class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิด</button></div>
      </div>
    </div>`}async function Ua(e,a){const t=o.bulkForm;if(!t||t.key!==a.key)return;const r=[...t.ids];if(!r.length){h("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}if(!t.method){h("กรุณาเลือกวิธีแก้ก่อน","warning");return}if(!t.dueDate){h("กรุณาเลือกวันที่ก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){h("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const s=t.method==="ให้งานแก้"?Q(t.workUrl):"";if(t.method==="ให้งานแก้"&&t.workUrl&&!s){h("ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https:// และไม่เกิน 2,000 ตัวอักษร","warning");return}const d=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,i=a.items.filter(y=>r.includes(Number(y.id)));if(await N({title:t.method==="นัดสอบปรับ"?"ยืนยันตอบรับและนัดสอบเป็นชุด":"ยืนยันมอบหมายงานเป็นชุด",message:`${t.method==="นัดสอบปรับ"?"นัดสอบปรับ":"มอบหมายงานแก้"}วิชา "${a.subject_name}" ให้ ${i.length} คน วันที่ ${K(d)}${t.noteText?" พร้อมคำชี้แจงจากครู":""} ใช่หรือไม่?`,confirmText:`ยืนยัน ${i.length} คน`}))try{e.disabled=!0;let y=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const g=c=>String(c||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";y=(await fe(t.file,`regrade/teacher-${f.teacherRow.id}/${g(a.subject_code)}/${g(a.semester)}`)).url}const m=g=>String(g||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";let k=t.noteImageUrl||null;t.noteImageBlob&&(k=await Le(t.noteImageBlob,`regrade/teacher-${f.teacherRow.id}/${m(a.subject_code)}/${m(a.semester)}/notes`)),await Wt(r,{method:t.method,dueText:d,fileUrl:y,workUrl:s,teacherNote:t.noteText,teacherNoteStyle:t.noteStyle,teacherNoteImageUrl:k});const $=i.map(g=>({...g,method:t.method,due_text:d,file_url:y||"",work_url:s||"",teacher_note:t.noteText,teacher_note_style:t.noteStyle,teacher_note_image_url:k}));o.bulkForm=null,await St($,f.teacherRow.full_name,f.cfg),h(`บันทึกคำตอบและแจ้งนักเรียน ${i.length} คนแล้ว`,"success"),T()}catch(y){e.disabled=!1,h("บันทึกเป็นชุดไม่สำเร็จ: "+y.message,"error")}}async function Da(e,a){const t=o.bulkForm;if(!t||t.scope!=="assigned"||t.key!==a.key)return;const r=[...t.ids];if(!r.length){h("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}if(!t.method){h("กรุณาเลือกวิธีแก้ก่อน","warning");return}if(!t.dueDate){h("กรุณาเลือกวันที่ก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){h("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const s=t.method==="ให้งานแก้"?Q(t.workUrl):"";if(t.method==="ให้งานแก้"&&t.workUrl&&!s){h("ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https:// และไม่เกิน 2,000 ตัวอักษร","warning");return}const d=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,i=a.items.filter(y=>r.includes(Number(y.id)));if(await N({title:"ยืนยันแก้ไขคำตอบเป็นชุด",message:`ปรับคำตอบวิชา "${a.subject_name}" ให้ ${i.length} คนเป็น${t.method} กำหนด ${K(d)}${t.noteText?" พร้อมคำชี้แจงจากครู":""} ใช่หรือไม่?`,confirmText:`บันทึก ${i.length} คน`}))try{e.disabled=!0;let y=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const $=n=>String(n||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";y=(await fe(t.file,`regrade/teacher-${f.teacherRow.id}/${$(a.subject_code)}/${$(a.semester)}`)).url}let m=t.noteImageUrl||null;const k=$=>String($||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";t.noteImageBlob&&(m=await Le(t.noteImageBlob,`regrade/teacher-${f.teacherRow.id}/${k(a.subject_code)}/${k(a.semester)}/notes`)),await Gt(r,{method:t.method,dueText:d,fileUrl:y,workUrl:s,teacherNote:t.noteText,teacherNoteStyle:t.noteStyle,teacherNoteImageUrl:m,preserveFileIfEmpty:t.method==="ให้งานแก้"&&t.preserveFileIfEmpty,preserveNoteIfUntouched:t.preserveNoteIfUntouched,preserveWorkUrlIfEmpty:t.method==="ให้งานแก้"&&t.preserveWorkUrlIfEmpty}),o.bulkForm=null,h(`บันทึกการแก้ไขให้นักเรียน ${i.length} คนแล้ว`,"success"),T()}catch(y){e.disabled=!1,h("แก้ไขเป็นชุดไม่สำเร็จ: "+y.message,"error")}}function za(e){const a=o.form;if(a&&a.id===e.id)return"";const t=e.status==="กำลังดำเนินการปรับแก้";return`
    ${t?'<p class="text-[10px] font-bold text-[var(--muted-2)] mt-3">แก้ไขหรือเปลี่ยนคำตอบ (ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ)</p>':""}
    <div class="flex gap-2 mt-${t?"1.5":"3"}">
      <button data-open-exam="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
      <button data-open-work="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
    </div>
    ${t?`<button data-cancel-response="${e.id}" class="mt-2 w-full py-2 rounded-xl text-xs font-bold" style="background:var(--bad-soft);color:var(--bad);border:1px solid var(--bad-soft-line)">✕ ยกเลิกคำตอบนี้</button>`:""}`}function be(e,a,t){var d;const r=!t&&!!a.fileUrl,s=r&&/^https:\/\//i.test(a.fileUrl)?a.fileUrl:"";return`
    <div class="mt-3 rounded-xl p-3 bg-[var(--surface-2)]">
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">${t?"วันที่นัดสอบปรับ":"กำหนดส่งงาน"}</label>
      <input data-due-date type="date" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" value="${l(a.dueDate)}">
      ${t?`<label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">เวลานัดสอบ</label>
      <input data-due-time type="time" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" value="${l(a.dueTime)}">`:`
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">ลิงก์งาน / เอกสาร (ถ้ามี)</label>
      <input data-work-url type="url" maxlength="2000" value="${l(a.workUrl||"")}" placeholder="https://..." class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">ไฟล์ชี้แจงงานแก้ (ถ้ามี · ไม่เกิน 5 MB)</label>
      ${r?`
        <div class="p-3 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
          <p class="text-xs font-bold text-[var(--ink)]">📎 ${a.fileSource==="reuse"?"ใช้ไฟล์เดิมของรายวิชานี้":"ไฟล์ที่แนบอยู่ปัจจุบัน"}</p>
          <div class="flex gap-3 mt-2">
            ${s?`<a href="${l(s)}" target="_blank" rel="noopener" class="text-[11px] font-bold" style="color:var(--info)">เปิดดูไฟล์ ↗</a>`:""}
            <button type="button" data-remove-work-file class="text-[11px] font-bold" style="color:var(--bad)">เอาไฟล์ออก</button>
          </div>
        </div>`:""}
      <label class="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-dashed border-[var(--line)] bg-[var(--surface)] text-xs font-bold text-[var(--ink-2)] cursor-pointer">
        <span>${r?"อัปโหลดไฟล์ใหม่แทน":"เลือกไฟล์จากเครื่อง"}</span>
        <input data-work-file type="file" class="sr-only" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png">
      </label>
      <p data-work-file-name class="mt-1 text-[10px] text-[var(--muted-2)] truncate">${l(((d=a.file)==null?void 0:d.name)||(r?"หากไม่เลือกไฟล์ใหม่ ระบบจะใช้ไฟล์ที่แสดงอยู่":"ยังไม่ได้เลือกไฟล์"))}</p>`}
      ${mt(a)}
      <div class="flex gap-2 mt-2">
        <button data-confirm-assign="${e.id}" class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">${a.editing?"บันทึกการแก้ไข":t?"ยืนยันนัดสอบ":"ยืนยันมอบหมายงาน"}</button>
        <button data-cancel-form class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิด</button>
      </div>
    </div>`}async function Pa(e){var y,m;const a=Number(e.dataset.confirmAssign),t=o.form;if(!(t!=null&&t.dueDate)){h("กรุณาเลือกวันที่จากปฏิทินก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){h("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const r=t.method==="ให้งานแก้"?Q(t.workUrl):"";if(t.method==="ให้งานแก้"&&t.workUrl&&!r){h("ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https:// และไม่เกิน 2,000 ตัวอักษร","warning");return}const s=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,d=o.subjects.find(k=>k.id===a),i=t.method==="นัดสอบปรับ"?`นัดสอบปรับวิชา "${d.subject_name}" ให้ ${((y=d.students)==null?void 0:y.full_name)||""} วันที่ ${K(s)} ใช่หรือไม่?`:`มอบหมายงานแก้วิชา "${d.subject_name}" ให้ ${((m=d.students)==null?void 0:m.full_name)||""} กำหนดส่ง ${K(s)}${t.noteText?" พร้อมคำชี้แจงจากครู":""} ใช่หรือไม่?`;if(await N({title:t.editing?"ยืนยันแก้ไขคำตอบ":t.method==="นัดสอบปรับ"?"ยืนยันนัดสอบปรับ":"ยืนยันมอบหมายงานแก้",message:i,confirmText:t.editing?"บันทึกการแก้ไข":"ยืนยัน"}))try{e.disabled=!0;let k=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const n=b=>String(b||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";k=(await fe(t.file,`regrade/teacher-${f.teacherRow.id}/${n(d.subject_code)}/${n(d.semester)}`)).url}let $=t.noteImageUrl||null;const g=n=>String(n||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";t.noteImageBlob&&($=await Le(t.noteImageBlob,`regrade/teacher-${f.teacherRow.id}/${g(d.subject_code)}/${g(d.semester)}/notes`)),await Kt(a,{method:t.method,dueText:s,fileUrl:k,workUrl:r,teacherNote:t.noteText,teacherNoteStyle:t.noteStyle,teacherNoteImageUrl:$}),h(t.editing?"แก้ไขคำตอบแล้ว ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ ✅":"บันทึกการมอบหมายเรียบร้อย ✅","success"),o.form=null,o.editingResponseId=null,T()}catch(k){e.disabled=!1,h("บันทึกไม่สำเร็จ: "+k.message,"error")}}async function Le(e,a){const t=new File([e],"teacher-note.jpg",{type:"image/jpeg"});if(t.size>5*1024*1024)throw new Error("ภาพคำชี้แจงมีขนาดเกิน 5 MB กรุณาลดเนื้อหาหรือลายมือ");return(await fe(t,a)).url}async function Oa(e){var s;const a=Number(e.dataset.cancelResponse),t=o.subjects.find(d=>d.id===a);if(await N({title:"ยืนยันยกเลิกคำตอบ",message:`ยกเลิกคำตอบของ ${((s=t==null?void 0:t.students)==null?void 0:s.full_name)||""} วิชา "${(t==null?void 0:t.subject_name)||""}" ใช่หรือไม่? รายการจะกลับไปรอครูตอบรับใหม่`,confirmText:"ยกเลิกคำตอบ"}))try{await Yt(a),o.form=null,o.editingResponseId=null,h("ยกเลิกคำตอบแล้ว รายการกลับไปรอตอบรับใหม่เรียบร้อย","success"),T()}catch(d){h("ยกเลิกคำตอบไม่สำเร็จ: "+d.message,"error")}}const F={view:"close",query:"",gradeCategory:"สามัญ"};async function we(){le("ฝ่ายทะเบียน","แก้ค้างเก่า — ฝ่ายทะเบียน");const e=document.getElementById("regrade-content");e.innerHTML=`<div class="max-w-3xl mx-auto p-4">
    <div class="${me} mb-4">
      <button data-rview="close" style="${C(F.view==="close")}">📋 รอปิดงาน</button>
      <button data-rview="grade" style="${C(F.view==="grade")}">🎓 เกรดที่ต้องอัปเดต</button>
    </div>
    <div id="regrade-registrar-body"></div>
  </div>`,e.querySelectorAll("[data-rview]").forEach(t=>t.addEventListener("click",()=>{F.view=t.dataset.rview,we()}));const a=document.getElementById("regrade-registrar-body");if(F.view==="close"){a.innerHTML=`<input id="regrade-registrar-search" class="w-full max-w-sm px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-4" placeholder="ค้นหาชื่อหรือเลขประจำตัวนักเรียน...">
      <div id="regrade-close-list" class="flex flex-col gap-3"></div>`;const t=document.getElementById("regrade-registrar-search");t.value=F.query,t.addEventListener("input",()=>{F.query=t.value,_e()}),await _e()}else a.innerHTML=`<div class="flex gap-2 mb-4">
        <button data-gcat="สามัญ" style="${M(F.gradeCategory==="สามัญ")}">สามัญ</button>
        <button data-gcat="ศาสนา" style="${M(F.gradeCategory==="ศาสนา","secondary")}">ศาสนา</button>
      </div>
      <div class="overflow-x-auto"><table class="w-full text-xs" id="regrade-grade-table"></table></div>`,a.querySelectorAll("[data-gcat]").forEach(t=>t.addEventListener("click",()=>{F.gradeCategory=t.dataset.gcat,we()})),await ft()}async function _e(){const e=document.getElementById("regrade-close-list");let a;try{a=await Xt(F.query)}catch(t){e.innerHTML=`<div class="text-center text-red-500 text-sm py-8">โหลดไม่สำเร็จ: ${l(t.message)}</div>`;return}e.innerHTML=a.length?a.map(t=>{var s,d,i,u;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`
    <div class="rg-card p-4 flex justify-between items-center gap-3 flex-wrap">
      <div class="flex gap-2.5 items-center min-w-0">
        ${U(t.students,!0)}
        <div class="min-w-0">
          <p class="font-bold text-sm text-[var(--ink)]">${l(r)} <span class="text-[var(--muted-2)] font-normal">(${l(((d=t.students)==null?void 0:d.student_code)||"")} · ${l(((i=t.students)==null?void 0:i.main_room)||((u=t.students)==null?void 0:u.religion_room)||"")})</span></p>
          <p class="text-xs text-[var(--muted)] mt-0.5">${l(t.subject_name)} (${l(t.subject_code)}) · ${l(t.method||"")} — กำหนด ${l(K(t.due_text))}</p>
          <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${ge(t.category)}">${l(t.category)}</span>
        </div>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button data-print-slip="${t.id}" class="px-3 py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
        <button data-closeout="${t.id}" data-name="${l(r)}" data-subject="${l(t.subject_name)}"
          class="px-4 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">✓ ปิดงาน (ปรับแก้สำเร็จ)</button>
      </div>
    </div>`}).join(""):'<div class="text-center text-[var(--muted-2)] text-sm py-12">📭 ไม่พบรายการที่รอปิดงาน</div>',e.querySelectorAll("[data-print-slip]").forEach(t=>t.addEventListener("click",()=>{const r=a.find(s=>s.id===Number(t.dataset.printSlip));r&&Se(r)})),e.querySelectorAll("[data-closeout]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.closeout);if(await N({title:"ยืนยันปิดงาน",message:`ยืนยันบันทึกว่า ${t.dataset.name} ปรับแก้วิชา "${t.dataset.subject}" สำเร็จแล้วใช่หรือไม่? สถานะจะเปลี่ยนเป็น "ปรับแก้สำเร็จ" ทันที`,confirmText:"ยืนยันปิดงาน"}))try{await Qt(r),h("ปิดงานเรียบร้อย ✅","success"),await _e()}catch(d){h("ไม่สำเร็จ: "+d.message,"error")}}))}async function ft(){const e=document.getElementById("regrade-grade-table");let a;try{a=await ea(F.gradeCategory)}catch(t){e.innerHTML=`<tr><td class="text-red-500 text-sm py-8 text-center">โหลดไม่สำเร็จ: ${l(t.message)}</td></tr>`;return}e.innerHTML=`
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">รายวิชา</th><th class="py-2 px-2">ครูผู้สอน</th><th class="py-2 px-2">สถานะเกรด</th><th class="py-2 px-2 text-right">จัดการ</th>
    </tr></thead>
    <tbody>${a.length?a.map(t=>{var s,d,i;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`<tr class="border-b border-[var(--line-soft)]">
        <td class="py-2 px-2"><div class="flex items-center gap-2">${U(t.students,!0)}<div><p class="font-bold text-[var(--ink)]">${l(r)}</p><p class="text-[10px] text-[var(--muted-2)]">(${l(((d=t.students)==null?void 0:d.student_code)||"")})</p></div></div></td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${l(t.subject_name)} (${l(t.subject_code)})</td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${l(((i=t.teachers)==null?void 0:i.full_name)||"-")}</td>
        <td class="py-2 px-2">${t.grade_entered?'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok);border:1px solid var(--ok-soft-line)">อัปเดตแล้ว ✓</span>':'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">รอกรอกเกรด</span>'}</td>
        <td class="py-2 px-2 text-right">${t.grade_entered?"":`<button data-mark-entered="${t.id}" data-name="${l(r)}" data-subject="${l(t.subject_name)}" class="px-3 py-1.5 rounded-lg text-white text-[11px] font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">กรอกข้อมูลแล้ว</button>`}</td>
      </tr>`}).join(""):'<tr><td colspan="5" class="text-center text-[var(--muted-2)] text-sm py-10">ไม่มีรายการในหมวดนี้</td></tr>'}</tbody>`,e.querySelectorAll("[data-mark-entered]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.markEntered);if(await N({title:"ยืนยันกรอกข้อมูลเกรดแล้ว",message:`ยืนยันว่าได้นำเกรดของ ${t.dataset.name} วิชา "${t.dataset.subject}" ไปกรอกในระบบเกรด (แยกต่างหาก) เรียบร้อยแล้วใช่หรือไม่?`,confirmText:"ยืนยัน"}))try{await ta(r),h("บันทึกแล้ว ✅","success"),await ft()}catch(d){h("ไม่สำเร็จ: "+d.message,"error")}}))}const p={categoryTab:"all",drilldown:null,view:"overview",overviewTab:"summary",teacherSort:{key:"pending",dir:"desc"},classLevels:null,attnLevelKey:"",attnRoom:"",attnRooms:[],browseCategory:"สามัญ",browseLevel:"",browseRoomsCache:[],classroomSortDesc:!0,expandedRooms:new Set,roomStudents:{},expandedStudents:new Set,studentSubjects:{}},H=e=>e.reduce((a,t)=>a+Number(t.cnt),0);function Va(e,a){const t=a.dir==="asc"?1:-1;return[...e].sort((r,s)=>{const d=r[a.key],i=s[a.key];return typeof d=="string"?d.localeCompare(i,"th")*t:(d-i)*t})}function Wa(e,a){return e.key===a?e.dir==="asc"?" ▲":" ▼":""}async function gt(){return p.classLevels||(p.classLevels=await Qe()),p.classLevels}async function Ae(){le("ผู้บริหาร","ภาพรวมทั้งโรงเรียน — บอร์ดผู้บริหาร");const e=document.getElementById("regrade-content");e.innerHTML=`
    <div class="w-full p-4 md:p-6">
      <div class="${me} mb-4">
        <button data-dview="overview" style="${C(p.view==="overview")}">📊 ภาพรวม</button>
        <button data-dview="students" style="${C(p.view==="students")}">🎓 รายชื่อนักเรียน</button>
      </div>
      <div id="regrade-dashboard-body"></div>
    </div>`,e.querySelectorAll("[data-dview]").forEach(t=>t.addEventListener("click",()=>{p.view=t.dataset.dview,Ae()}));const a=document.getElementById("regrade-dashboard-body");p.view==="students"?await xt(a):await ue(a)}async function ue(e){let a;try{a=await aa()}catch(x){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(x.message)}</div>`;return}const t=p.categoryTab==="all"?a:a.filter(x=>x.category===p.categoryTab),r=H(t),s=H(t.filter(x=>x.status==="ยังไม่แจ้ง")),d=H(t.filter(x=>x.status==="จำนงแล้ว")),i=H(t.filter(x=>x.status==="กำลังดำเนินการปรับแก้")),u=H(t.filter(x=>x.status==="ปรับแก้สำเร็จ")),y=d+i,m={};t.forEach(x=>{var E;(m[E=x.teacher_name]??(m[E]={dept:x.teacher_dept||"-",list:[]})).list.push(x)});const k=Va(Object.entries(m).map(([x,E])=>({name:x,dept:E.dept,total:H(E.list),pending:H(E.list.filter(j=>j.status==="จำนงแล้ว")),assigned:H(E.list.filter(j=>j.status==="กำลังดำเนินการปรับแก้")),done:H(E.list.filter(j=>j.status==="ปรับแก้สำเร็จ"))})),p.teacherSort),$=H(a.filter(x=>x.category==="สามัญ")),g=H(a.filter(x=>x.category==="ศาสนา")),n=`
    <div class="${me}">
      <button data-otab="summary" style="${C(p.overviewTab==="summary")}">📊 สรุปตัวเลข</button>
      <button data-otab="teachers" style="${C(p.overviewTab==="teachers")}">👩‍🏫 รายครูผู้สอน</button>
      <button data-otab="attention" style="${C(p.overviewTab==="attention")}">🎯 นักเรียนที่ต้องติดตาม</button>
    </div>`,c=`
    <div class="${me}">
      <button data-dcat="all" style="${C(p.categoryTab==="all")}">📊 ทั้งหมด (${a.length})</button>
      <button data-dcat="สามัญ" style="${C(p.categoryTab==="สามัญ")}">📘 สามัญ (${$})</button>
      <button data-dcat="ศาสนา" style="${C(p.categoryTab==="ศาสนา","secondary")}">🕌 ศาสนา (${g})</button>
    </div>`,b=`
    <div class="flex items-center justify-between gap-3 mb-4 flex-wrap">
      ${n}
      ${p.overviewTab!=="attention"?c:""}
    </div>`;let w="";if(p.overviewTab==="teachers"){const x=(E,j,S="")=>`<th class="py-2 px-2 cursor-pointer select-none hover:text-[var(--ink-2)] ${S}" data-sort-key="${j}">${l(E)}${Wa(p.teacherSort,j)}</th>`;w=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">ความคืบหน้าแยกรายครูผู้สอน</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">คลิกหัวคอลัมน์เพื่อเรียงจากมาก↔น้อย หรือ ก↔ฮ</p>
        <div class="overflow-x-auto"><table class="w-full text-xs">
          <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
            ${x("ครูผู้สอน","name")}${x("กลุ่มสาระ","dept")}${x("ทั้งหมด","total","text-center")}${x("รอตอบรับ","pending","text-center")}${x("มอบหมายแล้ว","assigned","text-center")}${x("สำเร็จ","done","text-center")}
          </tr></thead>
          <tbody>${k.map(E=>`<tr class="border-b border-[var(--line-soft)]">
            <td class="py-2 px-2 font-bold text-[var(--ink-2)]">${l(E.name)}</td>
            <td class="py-2 px-2 text-[var(--muted)]">${l(E.dept)}</td>
            <td class="py-2 px-2 text-center text-[var(--muted)]">${E.total}</td>
            <td class="py-2 px-2 text-center">${E.pending>0?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">${E.pending}</span>`:E.pending}</td>
            <td class="py-2 px-2 text-center" style="color:var(--info)">${E.assigned}</td>
            <td class="py-2 px-2 text-center" style="color:var(--ok)">${E.done}</td>
          </tr>`).join("")}</tbody>
        </table></div>
      </div>`}else if(p.overviewTab==="attention"){let x;try{x=await gt()}catch{x=[]}w=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">นักเรียนที่จำเป็นต้องติดตาม</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">เรียงจากคนที่มีรายวิชาค้างมากที่สุดก่อน (สูงสุด 20 คน)</p>
        <div class="flex gap-2 mb-3 flex-wrap">
          <select id="regrade-attn-level" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">${'<option value="">ทุกระดับชั้น</option>'+["สามัญ","ศาสนา"].map(j=>{const S=x.filter(I=>I.category===j);return S.length?`<optgroup label="${j}">${S.map(I=>`<option value="${j}|${l(I.class_level)}" ${p.attnLevelKey===`${j}|${I.class_level}`?"selected":""}>${l(I.class_level)}</option>`).join("")}</optgroup>`:""}).join("")}</select>
          <select id="regrade-attn-room" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" ${p.attnLevelKey?"":"disabled"}>
            <option value="">ทุกห้อง</option>
            ${p.attnRooms.map(j=>`<option value="${l(j)}" ${p.attnRoom===j?"selected":""}>${l(j)}</option>`).join("")}
          </select>
        </div>
        <div id="regrade-attn-list" class="overflow-x-auto"></div>
      </div>`}else{const x=r?Math.round(u/r*100):0;w=`
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สัดส่วนสถานะ</p>
        ${r?je([{value:s,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:d,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:i,color:"var(--info)",label:"กำลังดำเนินการ"},{value:u,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${x}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีข้อมูล</p>'}
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <button data-drill="all" class="rg-card p-4 text-center">${ce(r,"รายวิชาค้างทั้งหมด","var(--ink)")}</button>
        <button data-drill="requested" class="rg-card p-4 text-center">${ce(y,"จำนงแล้ว","var(--gold-ink)")}</button>
        <button data-drill="assigned" class="rg-card p-4 text-center">${ce(i,"กำลังดำเนินการปรับแก้","var(--info)")}</button>
        <button data-drill="done" class="rg-card p-4 text-center">${ce(u,"ปรับแก้สำเร็จ","var(--ok)")}</button>
      </div>
      <div id="regrade-drilldown"></div>`}e.innerHTML=b+w,e.querySelectorAll("[data-otab]").forEach(x=>x.addEventListener("click",()=>{p.overviewTab=x.dataset.otab,ue(e)})),e.querySelectorAll("[data-sort-key]").forEach(x=>x.addEventListener("click",()=>{const E=x.dataset.sortKey;p.teacherSort.key===E?p.teacherSort.dir=p.teacherSort.dir==="asc"?"desc":"asc":(p.teacherSort.key=E,p.teacherSort.dir=E==="name"||E==="dept"?"asc":"desc"),ue(e)})),e.querySelectorAll("[data-dcat]").forEach(x=>x.addEventListener("click",()=>{p.categoryTab=x.dataset.dcat,p.drilldown=null,Ae()})),p.overviewTab==="summary"&&(e.querySelectorAll("[data-drill]").forEach(x=>x.addEventListener("click",()=>{p.drilldown=x.dataset.drill,Je(t)})),p.drilldown&&Je(t)),p.overviewTab==="attention"&&(document.getElementById("regrade-attn-level").addEventListener("change",async x=>{if(p.attnLevelKey=x.target.value,p.attnRoom="",p.attnRooms=[],p.attnLevelKey){const[E,j]=p.attnLevelKey.split("|");try{p.attnRooms=(await et(E,j)).map(S=>S.room)}catch{p.attnRooms=[]}}ue(e)}),document.getElementById("regrade-attn-room").addEventListener("change",x=>{p.attnRoom=x.target.value,Ke()}),Ke())}async function Ke(){const e=document.getElementById("regrade-attn-list");if(!e)return;e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';const[a,t]=p.attnLevelKey?p.attnLevelKey.split("|"):[null,null];let r;try{r=await na({category:a,classLevel:t,room:p.attnRoom||null,limit:20})}catch(s){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${l(s.message)}</p>`;return}if(!r.length){e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-8 text-center">ไม่มีนักเรียนที่ต้องติดตามในเงื่อนไขนี้ 🎉</p>';return}e.innerHTML=`<table class="w-full text-xs">
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">ห้อง</th>
      <th class="py-2 px-2 text-center">ค้าง</th><th class="py-2 px-2 text-center">จำนงแล้ว</th><th class="py-2 px-2 text-center">สำเร็จ</th>
    </tr></thead>
    <tbody>${r.map(s=>`<tr class="border-b border-[var(--line-soft)]">
      <td class="py-2 px-2"><div class="flex items-center gap-2">${U(s,!1)}<div><p class="font-bold text-[var(--ink)]">${l(s.full_name)}</p><p class="text-[10px] text-[var(--muted-2)]">${l(s.student_code||"")}</p></div></div></td>
      <td class="py-2 px-2 text-[var(--muted)]">${l((s.category==="ศาสนา"?s.religion_room:s.main_room)||"-")}</td>
      <td class="py-2 px-2 text-center font-bold" style="color:var(--bad)">${s.not_yet}</td>
      <td class="py-2 px-2 text-center" style="color:var(--gold-ink)">${s.requested}</td>
      <td class="py-2 px-2 text-center" style="color:var(--ok)">${s.done}</td>
    </tr>`).join("")}</tbody>
  </table>`}function ce(e,a,t){return`<p class="text-2xl font-extrabold" style="color:${t}">${e}</p><p class="text-[10px] text-[var(--muted-2)] mt-1">${l(a)}</p>`}async function xt(e){let a;try{a=await gt()}catch{a=[]}const t=a.filter(r=>r.category===p.browseCategory);e.innerHTML=`
    <div class="flex gap-2 mb-4">
      <button data-bcat="สามัญ" style="${M(p.browseCategory==="สามัญ")}">📘 สามัญ</button>
      <button data-bcat="ศาสนา" style="${M(p.browseCategory==="ศาสนา","secondary")}">🕌 ศาสนา</button>
    </div>
    <select id="regrade-browse-level" class="w-full max-w-xs px-3 py-2 rounded-lg border border-[var(--line)] text-sm bg-[var(--surface)] mb-4">
      <option value="">— เลือกระดับชั้น —</option>
      ${t.map(r=>`<option value="${l(r.class_level)}" ${p.browseLevel===r.class_level?"selected":""}>${l(r.class_level)}</option>`).join("")}
    </select>
    <div id="regrade-browse-rooms" class="flex flex-col gap-3"></div>`,e.querySelectorAll("[data-bcat]").forEach(r=>r.addEventListener("click",()=>{p.browseCategory=r.dataset.bcat,p.browseLevel="",p.browseRoomsCache=[],p.expandedRooms.clear(),p.roomStudents={},p.expandedStudents.clear(),p.studentSubjects={},xt(e)})),document.getElementById("regrade-browse-level").addEventListener("change",r=>{p.browseLevel=r.target.value,p.expandedRooms.clear(),p.roomStudents={},p.expandedStudents.clear(),p.studentSubjects={},Ye()}),Ye()}async function Ye(){const e=document.getElementById("regrade-browse-rooms");if(e){if(!p.browseLevel){p.browseRoomsCache=[],e.innerHTML='<div class="text-center py-12 text-[var(--muted-2)] text-sm">เลือกระดับชั้นเพื่อดูรายชื่อห้องเรียน</div>';return}e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';try{p.browseRoomsCache=await et(p.browseCategory,p.browseLevel)}catch(a){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${l(a.message)}</p>`;return}P()}}function P(){const e=document.getElementById("regrade-browse-rooms");e&&(e.innerHTML=p.browseRoomsCache.length?p.browseRoomsCache.map(a=>Ga(a)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่พบห้องเรียนที่มีวิชาค้างในระดับชั้นนี้ 🎉</div>',Ya(e))}function vt(e){const a=p.classroomSortDesc?-1:1;return[...e].sort((t,r)=>(t.not_yet-r.not_yet)*a)}function Ga(e){const a=p.expandedRooms.has(e.room),t=p.roomStudents[e.room],r=t?vt(t):null;return`
  <div class="rg-card p-4">
    <div class="flex justify-between items-start gap-2">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${l(e.room)}</p>
        <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${e.student_count} คนมีวิชาค้าง</p>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0 flex-wrap justify-end">
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--bad-soft);color:var(--bad)">ค้าง ${e.not_yet}</span>
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">จำนง ${e.requested}</span>
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok)">สำเร็จ ${e.done}</span>
      </div>
    </div>
    <div class="flex gap-2 mt-3">
      <button data-toggle-room="${l(e.room)}" class="flex-1 py-1.5 rounded-lg text-[10px] font-bold bg-[var(--surface-2)] text-[var(--muted)]">${a?"▲ ย่อ":"▾ ดูรายชื่อนักเรียน"}</button>
      <button data-print-room="${l(e.room)}" class="px-3 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายชื่อห้อง</button>
    </div>
    ${a?`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex flex-col gap-2">
      <button data-toggle-sort class="self-start px-2.5 py-1 rounded-full text-[10px] font-bold mb-1" style="background:var(--surface-2);color:var(--muted)">↕️ เรียง${p.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</button>
      ${r?r.length?r.map(s=>Ka(s)).join(""):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีข้อมูลนักเรียน</p>':'<p class="text-center text-xs text-[var(--muted-2)] py-4">กำลังโหลด...</p>'}
    </div>`:""}
  </div>`}function Ka(e){const a=p.expandedStudents.has(e.student_id),t=p.studentSubjects[e.student_id];return`
  <div class="rounded-xl bg-[var(--surface-2)] overflow-hidden">
    <button data-toggle-student="${e.student_id}" class="w-full flex items-center gap-2.5 p-2.5 text-left">
      ${U(e,!1)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${l(e.full_name)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">${l(e.student_code||"")}</p>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0 text-[10px] font-bold">
        <span style="color:var(--bad)">${e.not_yet}</span>/<span style="color:var(--gold-ink)">${e.requested}</span>/<span style="color:var(--ok)">${e.done}</span>
      </div>
    </button>
    ${a?`<div class="px-2.5 pb-2.5 flex flex-col gap-1.5">
      ${t?t.length?t.map(r=>`
      <div class="flex justify-between items-center gap-2 bg-[var(--surface)] rounded-lg px-2.5 py-1.5">
        <div class="min-w-0"><p class="text-[11px] font-bold text-[var(--ink)] truncate">${l(r.subject_name)}</p><p class="text-[9px] text-[var(--muted-2)]">${l(r.subject_code)} · ${l(r.semester)} · ${l(r.teacher_name)}</p></div>
        <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(r.status)}">${ee(r.status).label}</span>
      </div>`).join(""):'<p class="text-center text-[11px] text-[var(--muted-2)] py-2">ไม่มีรายวิชา</p>':'<p class="text-center text-[11px] text-[var(--muted-2)] py-2">กำลังโหลด...</p>'}
      <button data-print-student="${e.student_id}" class="mt-1 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายบุคคล</button>
    </div>`:""}
  </div>`}function Ya(e){e.querySelectorAll("[data-toggle-room]").forEach(a=>a.addEventListener("click",async()=>{const t=a.dataset.toggleRoom;if(p.expandedRooms.has(t))p.expandedRooms.delete(t),P();else if(p.expandedRooms.add(t),P(),!p.roomStudents[t]){try{p.roomStudents[t]=await tt(p.browseCategory,t)}catch{p.roomStudents[t]=[]}P()}})),e.querySelectorAll("[data-toggle-student]").forEach(a=>a.addEventListener("click",async()=>{const t=Number(a.dataset.toggleStudent);if(p.expandedStudents.has(t))p.expandedStudents.delete(t),P();else if(p.expandedStudents.add(t),P(),!p.studentSubjects[t]){try{p.studentSubjects[t]=await at(t)}catch{p.studentSubjects[t]=[]}P()}})),e.querySelectorAll("[data-toggle-sort]").forEach(a=>a.addEventListener("click",()=>{p.classroomSortDesc=!p.classroomSortDesc,P()})),e.querySelectorAll("[data-print-room]").forEach(a=>a.addEventListener("click",()=>Za(a.dataset.printRoom))),e.querySelectorAll("[data-print-student]").forEach(a=>a.addEventListener("click",()=>Xa(Number(a.dataset.printStudent))))}const Ja=`
  body{font-family:'Sarabun',sans-serif;padding:24px;color:#1f2937;}
  h1{font-size:18px;margin-bottom:4px;}
  p.sub{color:#666;font-size:12px;margin-bottom:16px;}
  table{width:100%;border-collapse:collapse;font-size:13px;}
  th,td{border:1px solid #ccc;padding:6px 8px;text-align:left;}
  th{background:#f3f4f6;}
  @media print { body{padding:0;} }`;function yt(e,a){const t=`<!doctype html><html><head><meta charset="utf-8"><title>${l(e)}</title><style>${Ja}</style></head><body>${a}</body></html>`;ia(t,{autoprint:!0})}async function Za(e){let a=p.roomStudents[e];if(!a)try{a=await tt(p.browseCategory,e)}catch(r){h("โหลดข้อมูลไม่สำเร็จ: "+r.message,"error");return}a=vt(a);const t=a.map((r,s)=>`<tr>
    <td>${s+1}</td><td style="text-align:center">${l(r.student_code||"")}</td><td>${l(r.full_name)}</td>
    <td style="text-align:center">${r.not_yet}</td><td style="text-align:center">${r.requested}</td><td style="text-align:center">${r.done}</td>
  </tr>`).join("");yt(`รายชื่อห้อง ${e}`,`
    <h1>รายชื่อนักเรียนที่มีวิชาค้าง — ห้อง ${l(e)}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} คน · เรียงตาม${p.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</p>
    <table><thead><tr><th>#</th><th style="text-align:center">เลขประจำตัว</th><th>ชื่อ-สกุล</th><th>ค้าง</th><th>จำนงแล้ว</th><th>สำเร็จ</th></tr></thead>
    <tbody>${t}</tbody></table>`)}async function Xa(e){var d;let a=p.studentSubjects[e],t=null;for(const i in p.roomStudents){const u=(d=p.roomStudents[i])==null?void 0:d.find(y=>y.student_id===e);if(u){t=u;break}}if(!a)try{a=await at(e)}catch(i){h("โหลดข้อมูลไม่สำเร็จ: "+i.message,"error");return}const r=a.map((i,u)=>`<tr>
    <td>${u+1}</td><td>${l(i.subject_name)}</td><td>${l(i.subject_code)}</td>
    <td>${l(i.category)}</td><td>${l(i.semester)}</td><td>${l(i.teacher_name)}</td><td>${l(ee(i.status).label)}</td>
  </tr>`).join(""),s=(t==null?void 0:t.full_name)||"-";yt(`รายวิชาค้าง ${s}`,`
    <h1>รายวิชาที่ค้างของ ${l(s)}${t!=null&&t.student_code?` (${l(t.student_code)})`:""}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} วิชา</p>
    <table><thead><tr><th>#</th><th>รายวิชา</th><th>รหัสวิชา</th><th>หมวด</th><th>ภาคเรียน</th><th>ครูผู้สอน</th><th>สถานะ</th></tr></thead>
    <tbody>${r}</tbody></table>`)}function Je(e){const a=document.getElementById("regrade-drilldown");if(!p.drilldown){a.innerHTML="";return}const t={all:"รายวิชาค้างทั้งหมด",requested:"จำนงแล้ว",assigned:"กำลังดำเนินการปรับแก้",done:"ปรับแก้สำเร็จ"};let r=[];p.drilldown==="all"?r=e:p.drilldown==="requested"?r=e.filter(d=>d.status==="จำนงแล้ว"||d.status==="กำลังดำเนินการปรับแก้"):p.drilldown==="assigned"?r=e.filter(d=>d.status==="กำลังดำเนินการปรับแก้"):p.drilldown==="done"&&(r=e.filter(d=>d.status==="ปรับแก้สำเร็จ"));const s=r.reduce((d,i)=>(d[i.class_level||"-"]=(d[i.class_level||"-"]||0)+Number(i.cnt),d),{});a.innerHTML=`<div class="rg-card p-4 mb-4">
    <div class="flex justify-between items-center mb-3">
      <p class="text-xs font-bold text-[var(--ink-2)]">รายละเอียด: ${l(t[p.drilldown])}</p>
      <button id="regrade-drill-close" class="w-6 h-6 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-xs">✕</button>
    </div>
    <p class="text-xs text-[var(--muted-2)]">${H(r)} รายการ</p>
    <p class="text-[11px] text-[var(--muted)] mt-2">แยกตามชั้น: ${Object.entries(s).map(([d,i])=>`${l(d)} (${i})`).join(", ")||"-"}</p>
  </div>`,document.getElementById("regrade-drill-close").addEventListener("click",()=>{p.drilldown=null,a.innerHTML=""})}const O={activeTab:"general"};function Z(e,a,t){return`<button type="button" data-settings-tab="${e}" class="flex-shrink-0" style="${C(t)}">${l(a)}</button>`}function Qa(e,a,t){return`<button type="button" data-level-chip="${l(e)}" data-on="${t?"1":"0"}" class="px-2.5 py-1 rounded-full text-[11px] font-bold" style="${t?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}">${l(a)}</button>`}function Ze(e,a){O.activeTab=a,e.querySelectorAll("[data-settings-group]").forEach(t=>t.classList.toggle("hidden",t.dataset.settingsGroup!==a)),e.querySelectorAll("[data-settings-tab]").forEach(t=>{t.style.cssText=C(t.dataset.settingsTab===a)+"flex-shrink:0;"})}async function D(){var j,S,I,z,ae,oe;le("ตั้งค่าระบบ",`⚙️ ตั้งค่า${f.cfg.system_name||"แก้ค้างเก่า"}`);const e=document.getElementById("regrade-content");let a,t,r,s,d,i,u;try{[a,t,r,s,d,i,u]=await Promise.all([Rt(),qt(),Nt(),Xe(),Qe(),la(),Ht()])}catch(v){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(v.message)}</div>`;return}const y=new Map(s.map(v=>[v.profile_id,v])),m=f.cfg,k=new Set(m.intent_open_levels||[]);e.innerHTML=`
    <div class="max-w-2xl mx-auto p-4 flex flex-col gap-4">

      <div class="flex gap-1 p-1 rounded-full bg-[var(--surface-2)] overflow-x-auto">
        ${Z("general","⚙️ ทั่วไป",O.activeTab==="general")}
        ${Z("intent","📝 การแจ้งจำนง",O.activeTab==="intent")}
        ${Z("theme","🎨 ดีไซน์",O.activeTab==="theme")}
        ${Z("data","📥 ข้อมูล",O.activeTab==="data")}
        ${Z("document","📄 เอกสาร",O.activeTab==="document")}
        ${Z("access","🔐 สิทธิ์การเข้าถึง",O.activeTab==="access")}
      </div>

      <button id="regrade-set-save" class="w-full py-3 rounded-2xl text-white font-bold text-sm" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">บันทึกการตั้งค่า</button>

      <div data-settings-group="general" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ชื่อระบบ</p>
          <input id="regrade-set-name" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm" value="${l(m.system_name||"แก้ค้างเก่า")}">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ข้อความประกาศ</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎓 สำหรับนักเรียน</label>
          <textarea id="regrade-set-ann-student" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">${l(m.student_announcement||"")}</textarea>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">👨‍🏫 สำหรับครูผู้สอน</label>
          <textarea id="regrade-set-ann-teacher" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">${l(m.teacher_announcement||"")}</textarea>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">การเปิด/ปิดเมนูระบบแก้ค้างเก่า</p>
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้านักเรียน</span>
            ${Y("regrade-set-vis-student",(j=m.visibility)==null?void 0:j.student_menu)}
          </div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้าครู</span>
            ${Y("regrade-set-vis-teacher",(S=m.visibility)==null?void 0:S.teacher_menu)}
          </div>
          <label for="regrade-set-menu-end" class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">กำหนดเวลาปิดเมนู</label>
          <input id="regrade-set-menu-end" type="datetime-local" value="${l(m.regrade_menu_end_at||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
          <p class="mt-2 text-[10px] text-[var(--muted-2)]">ครูและนักเรียนจะเห็นเวลานับถอยหลังบนปุ่มหน้า “ภาพรวม” เมื่อถึงกำหนด ปุ่มเมนูจะซ่อนอัตโนมัติ หากเว้นว่าง เมนูที่เปิดไว้จะไม่มีกำหนดปิดอัตโนมัติ</p>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ป๊อปอัพเตือนหลังลงชื่อเข้าใช้</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ป๊อปอัพจะแสดงอัตโนมัติหลังเข้าสู่ระบบแต่ละครั้ง ปิดได้ และสรุปกำหนดเวลากับสิ่งที่ควรทำตามสถานะจริง ใช้กำหนดสิ้นสุดช่วงแจ้งความจำนงหรือช่วงตอบรับที่ตั้งไว้ด้านล่าง</p>
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-[var(--ink-2)]">แสดงป๊อปอัพเตือนนักเรียน</span>
            ${Y("regrade-set-notice-student",((I=m.overview_notice)==null?void 0:I.student)!==!1)}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-[var(--ink-2)]">แสดงป๊อปอัพเตือนครู</span>
            ${Y("regrade-set-notice-teacher",((z=m.overview_notice)==null?void 0:z.teacher)!==!1)}
          </div>
        </div>
      </div>

      <div data-settings-group="intent" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <div class="flex items-center justify-between mb-1">
            <p class="text-sm font-bold text-[var(--ink)]">การแจ้งความจำนงของนักเรียน</p>
            ${Y("regrade-set-intent",m.intent_open)}
          </div>
          <p class="text-xs text-[var(--muted-2)] mb-3">ควบคุมปุ่มลอย "จำนงขอแก้/ปรับ" และปุ่มแจ้งความจำนงในการ์ดแต่ละวิชาที่นักเรียนเห็น</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เปิดรับตั้งแต่</label>
          <input id="regrade-set-intent-start" type="datetime-local" value="${l(m.intent_window_start||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ถึงวันที่</label>
          <input id="regrade-set-intent-end" type="datetime-local" value="${l(m.intent_window_end||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ระดับชั้นที่เปิดให้แจ้งความจำนง</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">เลือกเฉพาะระดับชั้นที่ต้องการเปิดรับ — ถ้าไม่เลือกเลยสักระดับ = เปิดทุกระดับชั้น (ค่าเริ่มต้น)</p>
          ${["สามัญ","ศาสนา"].map(v=>{const _=d.filter(L=>L.category===v);return _.length?`<p class="text-[11px] font-bold text-[var(--ink-2)] mb-1.5 mt-2">${v==="สามัญ"?"📘":"🕌"} ${l(v)}</p>
            <div class="flex flex-wrap gap-1.5 mb-2">${_.map(L=>Qa(`${L.category}|${L.class_level}`,L.class_level,k.has(`${L.category}|${L.class_level}`))).join("")}</div>`:""}).join("")}
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">กำหนดเวลาตอบรับของครูผู้สอน</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ช่วงเวลาที่ครูควรตอบรับ (นัดสอบปรับ/ให้งานแก้) หลังนักเรียนแจ้งความจำนง</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เริ่มตอบรับได้ตั้งแต่</label>
          <input id="regrade-set-response-start" type="datetime-local" value="${l(m.response_window_start||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ตอบรับให้เสร็จภายใน</label>
          <input id="regrade-set-response-end" type="datetime-local" value="${l(m.response_window_end||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ปุ่ม "ส่งสรุปเกรดเข้าระบบ" ในหน้าบันทึกคะแนนของครู</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ปุ่มส่งเกรดจะแสดงในหน้าบันทึกคะแนนและการ์ดห้องเรียนเฉพาะช่วงวันที่นี้เท่านั้น โดยรวมวันเริ่มและวันสิ้นสุดไว้ในช่วงที่เปิดรับ</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <label class="block text-[11px] font-bold text-[var(--ink-2)]">แสดงปุ่มตั้งแต่วันที่
              <input id="regrade-set-live-submit-date" type="date" value="${l(m.live_submit_open_date||"")}" class="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
            </label>
            <label class="block text-[11px] font-bold text-[var(--ink-2)]">ถึงวันที่
              <input id="regrade-set-live-submit-end" type="date" value="${l(m.live_submit_close_date||"")}" class="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
            </label>
          </div>
          <p class="text-[11px] text-[var(--muted-2)] mt-1.5">ต้องกำหนดวันเริ่มและวันสิ้นสุดให้ครบ จึงจะแสดงปุ่ม</p>
        </div>

        <div class="rg-card p-5">
          <div class="flex items-center justify-between">
            <div class="min-w-0 pr-3">
              <p class="text-sm font-bold text-[var(--ink)]">แสดงกำหนดเวลาในหน้าภาพรวม</p>
              <p class="text-xs text-[var(--muted-2)] mt-0.5">เปิดแล้วนักเรียนจะเห็นกำหนดการแจ้งความจำนงพร้อมปุ่มไปแจ้งความจำนง และครูจะเห็นกำหนดการตอบรับพร้อมปุ่มไปตอบรับ ในแท็บ "ภาพรวม" ของตัวเอง</p>
            </div>
            ${Y("regrade-set-show-deadline",m.show_deadline_banner)}
          </div>
        </div>
      </div>

      <div data-settings-group="theme" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ตั้งค่าสีธีม</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">เลือกพรีเซ็ตด่วน หรือปรับเองทีละสี — พรีวิวด้านล่างอัปเดตทันที ยังไม่บันทึกจนกว่าจะกด "บันทึกการตั้งค่า"</p>

          <div id="regrade-theme-preview" class="rounded-2xl p-4 mb-4 text-white" style="transition:background .15s ease">
            <p class="text-[11px] opacity-80 mb-1">ตัวอย่างพรีวิว</p>
            <p class="font-extrabold text-sm">คณิตศาสตร์พื้นฐาน</p>
            <div class="flex gap-2 mt-2.5">
              <span id="regrade-theme-preview-sec" class="px-2.5 py-1 rounded-lg text-[10px] font-bold">ศาสนา</span>
              <span id="regrade-theme-preview-gold" class="px-2.5 py-1 rounded-lg text-[10px] font-bold">ทอง</span>
            </div>
          </div>

          <p class="text-[11px] font-bold text-[var(--ink-2)] mb-2">พรีเซ็ตด่วน</p>
          <div class="grid grid-cols-4 gap-2 mb-4">
            ${Object.entries(ht).map(([v,_])=>`
            <button data-preset="${v}" class="flex flex-col items-center gap-1.5">
              <span class="block w-11 h-11 rounded-xl border border-[var(--line)]" style="background:linear-gradient(135deg, ${_.primary} 30%, ${_.secondary} 65%, ${_.gold} 100%)"></span>
              <span class="text-[10px] font-bold text-[var(--muted)]">${l(_.label)}</span>
            </button>`).join("")}
          </div>

          <div class="grid grid-cols-3 gap-3 mb-4">
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎀 สีหลัก (สามัญ)</label><input id="regrade-set-primary" type="color" value="${m.primary_color||"#9d174d"}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🕌 สีรอง (ศาสนา)</label><input id="regrade-set-secondary" type="color" value="${m.secondary_color||"#065f46"}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">✨ สีทอง</label><input id="regrade-set-gold" type="color" value="${m.gold_color||"#b45309"}" class="w-full h-9"></div>
          </div>

          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ความโปร่งของกระจก (เฉพาะหน้าจอมือถือ)</label>
          <input id="regrade-set-glass-alpha" type="range" min="0.2" max="0.9" step="0.05" value="${m.glass_alpha??.55}" class="w-full">
        </div>
      </div>

      <div data-settings-group="data" class="flex flex-col gap-4">
        <div class="rg-card p-5 border-2" style="border-color:var(--primary-soft-line);">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">📤 ส่งสรุปเกรดแบบรวมแทนครูผู้สอน</p>
          <p class="text-xs text-[var(--muted-2)] leading-relaxed mb-3">
            ทำงานแยกจากปุ่มส่งผลการเรียนในหน้ากรอกคะแนนของครู ระบบจะอ่านห้องเรียนของภาคเรียนที่เลือก ค้นหานักเรียนที่ติดผลการเรียน แล้วส่งเข้าระบบแก้ค้างเก่าในฐานข้อมูลแบบชุดเดียว
          </p>
          <div class="rounded-xl p-3 mb-3 text-[11px] leading-relaxed" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line);">
            ควรตรวจสอบตัวอย่างรายการก่อนยืนยันส่งทุกครั้ง รายการที่มีอยู่แล้วจะไม่ถูกสร้างซ้ำ และข้อมูลการส่งของครูแต่ละห้องยังทำงานแยกตามเดิม
          </div>
          <div class="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ปีการศึกษา</label>
              <input id="admin-regrade-year" type="number" min="2500" max="2700" value="${l((u==null?void 0:u.academicYear)??2569)}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ภาคเรียน</label>
              <select id="admin-regrade-semester" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm bg-[var(--surface)]">
                <option value="1" ${Number(u==null?void 0:u.semester)===1?"selected":""}>1</option>
                <option value="2" ${Number(u==null?void 0:u.semester)===2?"selected":""}>2</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            <button id="admin-regrade-preview" type="button" class="flex-1 py-2.5 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">🔎 ตรวจสอบรายการก่อนส่ง</button>
            <button id="admin-regrade-submit" type="button" class="hidden flex-1 py-2.5 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">📤 ยืนยันส่งทุกห้อง</button>
          </div>
          <div id="admin-regrade-batch-result" class="mt-3"></div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">นำเข้าข้อมูลย้อนหลัง (CSV)</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">สำหรับรายวิชาค้างของภาคเรียนก่อนหน้าภาคเรียนปัจจุบันเท่านั้น (ภาคเรียนปัจจุบันระบบดึงจากฐานข้อมูล ปพ.5 อัตโนมัติ)</p>
          <div class="bg-[var(--surface-2)] rounded-xl p-3 mb-3 text-[11px] text-[var(--muted)] leading-relaxed">
            <b>คอลัมน์ที่ต้องมี:</b> student_code (รหัสนักเรียน), subject_code (รหัสวิชา), subject_name (รายวิชา), category (หมวด: สามัญ/ศาสนา เท่านั้น), semester (ภาคเรียน)<br>
            <b>ไม่บังคับ:</b> class_level (ชั้นที่ติด), teacher_code (รหัสครู), grade_failed_at (เกรดที่ติด)<br>
            แถวที่มีอยู่แล้วในระบบ (นักเรียน+รหัสวิชา+ภาคเรียนเดียวกัน) จะถูกข้าม ไม่ทับข้อมูลเดิม
          </div>
          <input id="regrade-csv-file" type="file" accept=".csv,text/csv" class="w-full text-sm mb-3">
          <div id="regrade-csv-preview"></div>
          <button id="regrade-csv-import-btn" class="hidden mt-3 w-full py-2.5 rounded-xl text-white font-bold text-xs" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">นำเข้าข้อมูล</button>
          <div id="regrade-csv-result" class="mt-3 text-xs"></div>
        </div>
      </div>

      <div data-settings-group="document" class="flex flex-col gap-4">
        <p class="text-xs text-[var(--muted-2)] -mb-1 px-1">ใช้ตอนครูมอบหมายงานให้นักเรียน และฝ่ายทะเบียนเปิดดูก่อนปิดงาน — ออกแบบตำแหน่งได้อิสระด้วยตัวแก้ไขลากวางเดียวกับระบบเกียรติบัตรกลาง แยกเทมเพลตกันคนละแบบระหว่างสามัญกับศาสนาได้ (เช่น ฉบับภาษาไทย/ฉบับภาษายาวี)</p>
        ${xe.map(({key:v,suffix:_,emoji:L,label:A})=>{var B;const q=(B=m.regrade_slip_template_ids)==null?void 0:B[v];return`
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">${L} เทมเพลตใบสั้น — ${A}</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เทมเพลตที่ใช้อยู่</label>
          <select id="regrade-set-slip-template-${_}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
            <option value="">— ยังไม่เลือก —</option>
            ${i.map(W=>`<option value="${W.id}" ${String(q??"")===String(W.id)?"selected":""}>${l(W.name)}</option>`).join("")}
          </select>
          <button id="regrade-slip-design-edit-${_}" type="button" class="w-full mb-3 py-2 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🎨 แก้ไขดีไซน์เทมเพลตที่เลือก</button>
          <div class="pt-3 border-t border-dashed border-[var(--line-soft)]">
            <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">หรือสร้างเทมเพลตใหม่</label>
            <div class="flex gap-2">
              <input id="regrade-slip-new-name-${_}" placeholder="ชื่อเทมเพลต เช่น ใบสั้น${A}" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs">
              <button id="regrade-slip-design-new-${_}" type="button" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ ออกแบบใหม่</button>
            </div>
          </div>
        </div>`}).join("")}
      </div>

      <div data-settings-group="access" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้ดูแลระบบ (เข้าหน้าตั้งค่านี้ได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${a.map(v=>ve(v,"admin",y)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-admin" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-admin" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้ ไม่แก้ตั้งค่า)</p>
          <div class="flex flex-wrap gap-2 mb-3">${r.map(v=>ve(v,"executive",y)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-executive" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-executive" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">เจ้าหน้าที่ฝ่ายทะเบียน (เข้าหน้าปิดงานได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${t.map(v=>ve(v,"registrar",y)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-registrar" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-registrar" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">+ เพิ่ม</button>
          </div>
        </div>
      </div>

      <datalist id="regrade-teacher-datalist">${s.map(v=>`<option value="${l(v.full_name)}${v.teacher_code?` (${l(v.teacher_code)})`:""} · รหัส ${v.id}"></option>`).join("")}</datalist>
    </div>`,Ze(e,O.activeTab),e.querySelectorAll("[data-settings-tab]").forEach(v=>v.addEventListener("click",()=>Ze(e,v.dataset.settingsTab))),e.querySelectorAll("[data-level-chip]").forEach(v=>v.addEventListener("click",()=>{const _=v.dataset.on!=="1";v.dataset.on=_?"1":"0",v.style.cssText=_?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}));const $=e.querySelector("#admin-regrade-batch-result"),g=e.querySelector("#admin-regrade-preview"),n=e.querySelector("#admin-regrade-submit");let c=null,b=null;const w=(v,_=!1)=>{const L=Array.isArray(v==null?void 0:v.classes)?v.classes:[],A=L.slice(0,30).map(q=>`
      <tr class="border-t border-[var(--line-soft)]">
        <td class="px-2 py-1.5">${l(q.class_name||"-")}</td>
        <td class="px-2 py-1.5">${l(q.subject_code||"-")} ${l(q.subject_name||"")}</td>
        <td class="px-2 py-1.5">${l(q.teacher_name||"-")}</td>
        <td class="px-2 py-1.5 text-right font-bold">${Number(q.failing_count||0)}</td>
      </tr>`).join("");$.innerHTML=`
      <div class="rounded-xl p-3 text-xs" style="background:var(--surface-2);border:1px solid var(--line-soft);">
        <p class="font-bold text-[var(--ink)]">${_?"ส่งข้อมูลเรียบร้อยแล้ว":"ผลการตรวจสอบรายการ"}</p>
        <p class="mt-1 text-[var(--muted)]">ภาคเรียน ${l(v.semester)}/${l(v.academic_year)} · พบห้องที่มีรายการติด ${Number(v.class_count||0)} ห้อง · นักเรียนที่ติดทั้งหมด ${Number(v.failing_count||0)} คน</p>
        <p class="mt-1 text-[var(--muted-2)]">ระบบจะไม่นับนักเรียนที่ยังไม่มีคะแนนครบทุกช่อง เว้นแต่มีการกำหนดผลพิเศษไว้แล้ว</p>
        ${_?`<p class="mt-1 font-bold" style="color:var(--ok)">เพิ่มรายการใหม่ ${Number(v.submitted||0)} รายการ</p>`:`<p class="mt-1" style="color:var(--gold-ink)">รายการที่มีอยู่แล้ว ${Number(v.existing_count||0)} รายการ จะไม่ถูกสร้างซ้ำ</p>`}
        ${L.length?`<div class="overflow-x-auto mt-3"><table class="w-full text-[11px]"><thead><tr class="text-left text-[var(--muted-2)]"><th class="px-2 py-1">ห้อง</th><th class="px-2 py-1">รายวิชา</th><th class="px-2 py-1">ครูผู้สอน</th><th class="px-2 py-1 text-right">ติด</th></tr></thead><tbody>${A}</tbody></table>${L.length>30?`<p class="text-center text-[10px] text-[var(--muted-2)] mt-2">แสดง 30 จาก ${L.length} ห้อง</p>`:""}</div>`:'<p class="text-center text-[var(--muted-2)] py-3">ไม่พบรายการนักเรียนที่ติดในภาคเรียนนี้</p>'}
      </div>`},x=()=>{var v,_;return{year:Number((v=e.querySelector("#admin-regrade-year"))==null?void 0:v.value),semester:Number((_=e.querySelector("#admin-regrade-semester"))==null?void 0:_.value)}},E=()=>{c=null,b=null,n==null||n.classList.add("hidden")};(ae=e.querySelector("#admin-regrade-year"))==null||ae.addEventListener("input",E),(oe=e.querySelector("#admin-regrade-semester"))==null||oe.addEventListener("change",E),g==null||g.addEventListener("click",async()=>{const{year:v,semester:_}=x();if(!Number.isInteger(v)||v<2500||![1,2].includes(_)){h("กรุณาเลือกปีการศึกษาและภาคเรียนให้ถูกต้อง","warning");return}g.disabled=!0,g.textContent="กำลังตรวจสอบ...";try{c=await Ce(v,_,!1),b={year:v,semester:_},w(c),n.classList.toggle("hidden",!Number(c.failing_count))}catch(L){h("ตรวจสอบไม่สำเร็จ: "+L.message,"error")}finally{g.disabled=!1,g.textContent="🔎 ตรวจสอบรายการก่อนส่ง"}}),n==null||n.addEventListener("click",async()=>{const{year:v,semester:_}=x();if(!(c!=null&&c.failing_count)||(b==null?void 0:b.year)!==v||(b==null?void 0:b.semester)!==_){h("กรุณาตรวจสอบรายการของภาคเรียนที่เลือกใหม่ก่อนส่ง","warning");return}if(await N({title:"ยืนยันส่งสรุปเกรดทุกห้อง",message:`ส่งนักเรียนที่ติด ${Number(c.failing_count)} คน ของภาคเรียน ${_}/${v} เข้าระบบแก้ค้างเก่าใช่หรือไม่? รายการเดิมจะไม่ถูกสร้างซ้ำ`,confirmText:"ยืนยันส่งทุกห้อง"})){n.disabled=!0,n.textContent="กำลังส่ง...";try{const A=await Ce(v,_,!0);w(A,!0),h(`ส่งสำเร็จ เพิ่มรายการใหม่ ${Number(A.submitted||0)} รายการ ✅`,"success")}catch(A){h("ส่งข้อมูลไม่สำเร็จ: "+A.message,"error")}finally{n.disabled=!1,n.textContent="📤 ยืนยันส่งทุกห้อง"}}}),e.querySelectorAll("[data-remove-admin]").forEach(v=>v.addEventListener("click",async()=>{if(await N({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้ดูแลระบบของ "${v.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await Ct(v.dataset.removeAdmin),h("ถอดสิทธิ์แล้ว","success"),D()}catch(L){h(L.message,"error")}})),e.querySelectorAll("[data-remove-registrar]").forEach(v=>v.addEventListener("click",async()=>{if(await N({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์เจ้าหน้าที่ทะเบียนของ "${v.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await Ft(v.dataset.removeRegistrar),h("ถอดสิทธิ์แล้ว","success"),D()}catch(L){h(L.message,"error")}})),e.querySelectorAll("[data-remove-executive]").forEach(v=>v.addEventListener("click",async()=>{if(await N({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้บริหารของ "${v.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await Bt(v.dataset.removeExecutive),h("ถอดสิทธิ์แล้ว","success"),D()}catch(L){h(L.message,"error")}})),document.getElementById("regrade-add-admin").addEventListener("click",async()=>{const v=document.getElementById("regrade-new-admin"),_=se(v.value,s);if(!_){h("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(a.some(A=>A.profile_id===_.profile_id)){h("ครูคนนี้เป็นผู้ดูแลระบบอยู่แล้ว","warning");return}if(await N({title:"ยืนยันเพิ่มผู้ดูแลระบบ",message:`เพิ่ม "${_.full_name}" เป็นผู้ดูแลระบบแก้ค้างเก่าใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await Mt(_.profile_id),v.value="",h("เพิ่มแล้ว ✅","success"),D()}catch(A){h(A.message,"error")}}),document.getElementById("regrade-add-registrar").addEventListener("click",async()=>{const v=document.getElementById("regrade-new-registrar"),_=se(v.value,s);if(!_){h("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(t.some(A=>A.profile_id===_.profile_id)){h("ครูคนนี้เป็นเจ้าหน้าที่ทะเบียนอยู่แล้ว","warning");return}if(await N({title:"ยืนยันเพิ่มเจ้าหน้าที่ทะเบียน",message:`เพิ่ม "${_.full_name}" เป็นเจ้าหน้าที่ฝ่ายทะเบียนใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await Ut(_.profile_id),v.value="",h("เพิ่มแล้ว ✅","success"),D()}catch(A){h(A.message,"error")}}),document.getElementById("regrade-add-executive").addEventListener("click",async()=>{const v=document.getElementById("regrade-new-executive"),_=se(v.value,s);if(!_){h("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(r.some(A=>A.profile_id===_.profile_id)){h("ครูคนนี้เป็นผู้บริหารอยู่แล้ว","warning");return}if(await N({title:"ยืนยันเพิ่มผู้บริหาร",message:`เพิ่ม "${_.full_name}" เป็นผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้) ใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await Dt(_.profile_id),v.value="",h("เพิ่มแล้ว ✅","success"),D()}catch(A){h(A.message,"error")}}),document.getElementById("regrade-set-save").addEventListener("click",async()=>{const v=document.getElementById("regrade-set-live-submit-date").value,_=document.getElementById("regrade-set-live-submit-end").value,L=document.getElementById("regrade-set-menu-end").value;if(L&&new Date(L).getTime()<=Date.now()){h("เวลาปิดเมนูต้องเป็นเวลาในอนาคต","warning");return}if(v&&_&&_<v){h("วันสิ้นสุดการแสดงปุ่มส่งเกรดต้องไม่ก่อนวันเริ่มต้น","warning");return}if(await N({title:"ยืนยันบันทึกการตั้งค่า",message:"บันทึกการตั้งค่าทั้งหมดนี้ใช่หรือไม่? จะมีผลกับทุกคนทันที",confirmText:"บันทึก"}))try{await Fe({intent_open:J(e,"regrade-set-intent"),intent_window_start:document.getElementById("regrade-set-intent-start").value,intent_window_end:document.getElementById("regrade-set-intent-end").value,intent_open_levels:[...e.querySelectorAll('[data-level-chip][data-on="1"]')].map(q=>q.dataset.levelChip),response_window_start:document.getElementById("regrade-set-response-start").value,response_window_end:document.getElementById("regrade-set-response-end").value,live_submit_open_date:document.getElementById("regrade-set-live-submit-date").value,live_submit_close_date:document.getElementById("regrade-set-live-submit-end").value,show_deadline_banner:J(e,"regrade-set-show-deadline"),visibility:{student_menu:J(e,"regrade-set-vis-student"),teacher_menu:J(e,"regrade-set-vis-teacher")},overview_notice:{student:J(e,"regrade-set-notice-student"),teacher:J(e,"regrade-set-notice-teacher")},regrade_menu_end_at:L,primary_color:document.getElementById("regrade-set-primary").value,secondary_color:document.getElementById("regrade-set-secondary").value,gold_color:document.getElementById("regrade-set-gold").value,glass_alpha:Number(document.getElementById("regrade-set-glass-alpha").value),student_announcement:document.getElementById("regrade-set-ann-student").value,teacher_announcement:document.getElementById("regrade-set-ann-teacher").value,system_name:document.getElementById("regrade-set-name").value.trim()||"แก้ค้างเก่า",regrade_slip_template_ids:Object.fromEntries(xe.map(({key:q,suffix:B})=>[q,document.getElementById(`regrade-set-slip-template-${B}`).value||null]))}),h("บันทึกการตั้งค่าเรียบร้อย ✅","success"),f.cfg=await he(),kt(),D()}catch(q){h("บันทึกไม่สำเร็จ: "+q.message,"error")}}),xe.forEach(({key:v,suffix:_,label:L})=>{document.getElementById(`regrade-slip-design-new-${_}`).addEventListener("click",()=>{const A=document.getElementById(`regrade-slip-new-name-${_}`).value.trim()||`ใบสั้นแก้ค้างเก่า (${L})`;Be({template:{name:A,type:"custom",layout:ba},previewVariables:ze,placeholderTokens:De,onSave:async(q,B)=>{var Re,qe;const W=await oa({name:A,type:"custom",presetKey:null,backgroundImageUrl:B,layout:q,createdByTeacherId:((Re=f.teacherRow)==null?void 0:Re.id)??null}),wt={...((qe=f.cfg)==null?void 0:qe.regrade_slip_template_ids)||{},[v]:W.id};await Fe({regrade_slip_template_ids:wt}),h(`สร้างเทมเพลต "${L}" และตั้งเป็นค่าที่ใช้แล้ว ✅`,"success"),f.cfg=await he(),D()}})}),document.getElementById(`regrade-slip-design-edit-${_}`).addEventListener("click",()=>{const A=Number(document.getElementById(`regrade-set-slip-template-${_}`).value);if(!A){h("กรุณาเลือกเทมเพลตก่อน","warning");return}const q=i.find(B=>B.id===A);q&&Be({template:q,previewVariables:ze,placeholderTokens:De,onSave:async(B,W)=>{await da({id:q.id,layout:B,backgroundImageUrl:W}),h("บันทึกดีไซน์แล้ว ✅","success")}})})}),ka(e,["regrade-set-intent","regrade-set-vis-student","regrade-set-vis-teacher","regrade-set-notice-student","regrade-set-notice-teacher","regrade-set-show-deadline"]),ar(e),er(e)}const ht={default:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.55,label:"ค่าเริ่มต้น"},dark:{primary:"#701138",secondary:"#043d2d",gold:"#78350f",glassAlpha:.45,label:"เข้ม"},airy:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.25,label:"โปร่งใส"},tint:{primary:"#db2777",secondary:"#059669",gold:"#d97706",glassAlpha:.65,label:"ย้อมสี"}};function er(e){const a=e.querySelector("#regrade-set-primary"),t=e.querySelector("#regrade-set-secondary"),r=e.querySelector("#regrade-set-gold"),s=e.querySelector("#regrade-set-glass-alpha"),d=e.querySelector("#regrade-theme-preview"),i=e.querySelector("#regrade-theme-preview-sec"),u=e.querySelector("#regrade-theme-preview-gold"),y=document.documentElement;function m(){d.style.background=a.value,i.style.background=t.value,u.style.background=r.value,y.style.setProperty("--primary",a.value),y.style.setProperty("--secondary",t.value),y.style.setProperty("--gold",r.value),y.style.setProperty("--glass-alpha",s.value)}m(),[a,t,r,s].forEach(k=>k.addEventListener("input",m)),e.querySelectorAll("[data-preset]").forEach(k=>k.addEventListener("click",()=>{const $=ht[k.dataset.preset];$&&(a.value=$.primary,t.value=$.secondary,r.value=$.gold,s.value=$.glassAlpha,m())}))}function tr(e){if(!e.length)return'<p class="text-xs text-[var(--muted-2)] text-center py-4">ไม่พบข้อมูลในไฟล์</p>';const a=["student_code","subject_code","subject_name","category","semester","class_level","teacher_code"],t=e.slice(0,10);return`<div class="overflow-x-auto rounded-xl border border-[var(--line)]">
    <table class="w-full text-[11px]">
      <thead class="bg-[var(--surface-2)] text-[var(--muted-2)]"><tr>${a.map(r=>`<th class="px-2 py-1.5 text-left">${r}</th>`).join("")}</tr></thead>
      <tbody>${t.map(r=>`<tr class="border-t border-[var(--line-soft)]">${a.map(s=>`<td class="px-2 py-1.5 text-[var(--ink-2)]">${l(r[s]??"")}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
    ${e.length>10?`<p class="text-center text-[10px] text-[var(--muted-2)] py-1.5">แสดง 10 จาก ${e.length} แถว</p>`:""}
  </div>`}function ar(e){let a=null;const t=e.querySelector("#regrade-csv-file"),r=e.querySelector("#regrade-csv-preview"),s=e.querySelector("#regrade-csv-import-btn"),d=e.querySelector("#regrade-csv-result");t==null||t.addEventListener("change",async()=>{var u;d.innerHTML="";const i=(u=t.files)==null?void 0:u[0];if(!i){a=null,r.innerHTML="",s.classList.add("hidden");return}try{const y=await i.text();a=Tt(y),r.innerHTML=tr(ra(a)),s.classList.toggle("hidden",a.length===0)}catch(y){r.innerHTML="",h("อ่านไฟล์ CSV ไม่สำเร็จ: "+y.message,"error")}}),s==null||s.addEventListener("click",async()=>{if(!(!(a!=null&&a.length)||!await N({title:"ยืนยันนำเข้าข้อมูล CSV",message:`นำเข้าข้อมูลรายวิชาค้าง ${a.length} แถวเข้าสู่ระบบใช่หรือไม่? แถวที่มีอยู่แล้วในระบบจะถูกข้าม ไม่ทับข้อมูลเดิม`,confirmText:"ยืนยันนำเข้า"}))){s.disabled=!0,s.textContent="กำลังนำเข้า...";try{const u=await sa(a);d.innerHTML=`
        <div class="rounded-xl p-3" style="background:var(--ok-soft);border:1px solid var(--ok-soft-line);color:var(--ok)">
          นำเข้าสำเร็จ ${u.imported} แถว จากทั้งหมด ${u.total} แถว
          ${u.skippedDuplicate?`<br>ข้าม ${u.skippedDuplicate} แถว (มีอยู่แล้วในระบบ)`:""}
          ${u.skippedNoStudent?`<br>ข้าม ${u.skippedNoStudent} แถว (ไม่พบรหัสนักเรียนในระบบ)`:""}
          ${u.skippedInvalid?`<br>ข้าม ${u.skippedInvalid} แถว (ข้อมูลไม่ครบ/หมวดไม่ถูกต้อง)`:""}
          ${u.unmatchedTeacher?`<br>⚠️ ${u.unmatchedTeacher} แถว ไม่พบรหัสครู (นำเข้าแล้วแต่ยังไม่ผูกครูผู้สอน)`:""}
        </div>`,h("นำเข้าข้อมูลเรียบร้อย ✅","success"),a=null,t.value="",r.innerHTML="",s.classList.add("hidden")}catch(u){h("นำเข้าไม่สำเร็จ: "+u.message,"error")}finally{s.disabled=!1,s.textContent="นำเข้าข้อมูล"}}})}function se(e,a){const t=e.trim().match(/· รหัส (\d+)$/);return t?a.find(r=>r.id===Number(t[1]))??null:null}function ve(e,a,t){var i;const r=t==null?void 0:t.get(e.profile_id),s=r?`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`:((i=e.profiles)==null?void 0:i.user_code)||e.profile_id,d=a==="admin"?`data-remove-admin="${l(e.profile_id)}"`:a==="executive"?`data-remove-executive="${l(e.profile_id)}"`:`data-remove-registrar="${l(e.profile_id)}"`;return`<span class="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">
    ${l(s)}
    <button ${d} data-name="${l(s)}" class="w-4 h-4 rounded-full text-[10px]" style="background:var(--primary-soft-line)">×</button>
  </span>`}function kt(){const e=document.documentElement;f.cfg.primary_color&&e.style.setProperty("--primary",f.cfg.primary_color),f.cfg.secondary_color&&e.style.setProperty("--secondary",f.cfg.secondary_color),f.cfg.gold_color&&e.style.setProperty("--gold",f.cfg.gold_color),f.cfg.glass_alpha!=null&&e.style.setProperty("--glass-alpha",f.cfg.glass_alpha)}let Ie=null;function $t(){var a,t;const e=[];return f.role==="student"&&f.studentRow&&((a=f.cfg.visibility)!=null&&a.student_menu||f.isAdmin)&&e.push({key:"student",icon:"🎓",label:"ของฉัน"}),f.role==="teacher"&&f.teacherRow&&((t=f.cfg.visibility)!=null&&t.teacher_menu||f.isAdmin)&&e.push({key:"teacher",icon:"📚",label:"งานสอนของฉัน"}),f.isRegistrar&&e.push({key:"registrar",icon:"📋",label:"ฝ่ายทะเบียน"}),f.isExecutive&&e.push({key:"dashboard",icon:"📊",label:"ผู้บริหาร"}),f.isAdmin&&e.push({key:"settings",icon:"⚙️",label:"ตั้งค่าระบบ"}),e}async function ne(e){Ie=e,document.getElementById("regrade-bottom-tabs").innerHTML="";const a=$t();if(rr(a),sr(a),e==="student")return G();if(e==="teacher")return T();if(e==="registrar")return we();if(e==="dashboard")return Ae();if(e==="settings")return D()}function rr(e){e.length>1?Ee(e,Ie,ne):document.getElementById("regrade-sidebar-nav").innerHTML=""}function sr(e){const a=document.getElementById("regrade-role-switcher");if(a){if(e.length<=1){a.innerHTML="";return}a.innerHTML=`<div class="rg-switcher-bar flex gap-2 overflow-x-auto px-4 py-2 border-b border-[var(--line-soft)]">${e.map(t=>`
    <button data-switch-sec="${t.key}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition"
      style="${Ie===t.key?"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;":"background:var(--surface-2);color:var(--muted);"}">${t.icon} ${l(t.label)}</button>`).join("")}</div>`,a.querySelectorAll("[data-switch-sec]").forEach(t=>t.addEventListener("click",()=>ne(t.dataset.switchSec)))}}function ye(){document.getElementById("regrade-content").innerHTML=`
    <div class="max-w-md mx-auto p-6 text-center text-[var(--muted)]">
      <p class="text-4xl mb-3">🔒</p>
      <p class="text-sm">บัญชีนี้ยังไม่มีสิทธิ์เข้าใช้งานระบบแก้ค้างเก่า</p>
    </div>`}async function nr(){const{data:{session:e}}=await Ne.auth.getSession();if(!e){sessionStorage.setItem("regrade-pending-subject",new URLSearchParams(location.search).get("subject")||""),window.location.replace("index.html?next=regrade.html");return}const{data:a}=await Ne.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single();f.role=a==null?void 0:a.role;const r={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[f.role]||"index.html",s=document.getElementById("regrade-back-btn-desktop"),d=document.getElementById("regrade-back-btn-mobile");if(window.self!==window.top){const $=g=>{g.preventDefault(),typeof window.parent.closeRegradeModal=="function"?window.parent.closeRegradeModal():window.parent.location.href=r};s.removeAttribute("href"),d.removeAttribute("href"),s.addEventListener("click",$),d.addEventListener("click",$)}else s.href=r,d.href=r;try{f.cfg=await he();const $=await jt();f.isAdmin=$.isAdmin||f.role==="admin"||(a==null?void 0:a.is_also_admin)===!0,f.isRegistrar=$.isRegistrar||f.isAdmin,f.isExecutive=$.isExecutive||f.isAdmin}catch($){document.getElementById("regrade-content").innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดการตั้งค่าไม่สำเร็จ: ${l($.message)}</div>`;return}if(kt(),f.role==="student"&&(f.studentRow=await Lt()),f.role==="teacher"&&(f.teacherRow=await At()),f.role==="student"&&!f.studentRow){ye();return}if(f.role==="teacher"&&!f.teacherRow){ye();return}const i=$t();if(!i.length){ye();return}const u=f.isAdmin||f.isExecutive?"dashboard":f.isRegistrar?"registrar":i[0].key;await ne(u);const y=new URLSearchParams(location.search),m=y.get("subject")||sessionStorage.getItem("regrade-pending-subject");if(sessionStorage.removeItem("regrade-pending-subject"),m)if(y.get("action")==="respond"&&f.teacherRow){await ut();const $=o.subjects.find(g=>Number(g.id)===Number(m));$&&$.status==="จำนงแล้ว"?(o.subView="respond",pe($,"ให้งานแก้"),await ne("teacher")):await He(m)}else await He(m,{onRespond:async $=>{f.teacherRow&&(o.subView="respond",pe($,"ให้งานแก้"),await ne("teacher"))}});const k=f.role==="student"?"student":f.teacherRow?"teacher":null;if(k){const $=k==="student"?f.studentRow.id:f.teacherRow.id,g=()=>{document.visibilityState==="visible"&&Et(k,$).catch(()=>{})};g();const n=setInterval(g,3e4);document.addEventListener("visibilitychange",g),window.addEventListener("pagehide",()=>{clearInterval(n),document.removeEventListener("visibilitychange",g)},{once:!0})}}nr();
