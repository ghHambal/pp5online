import{s as qe}from"./supabase-BV-W2lsh.js";/* empty css             */import{openRegradeSlip as wt,openRegradeSlipsBatch as _t}from"./regrade-slip-CCym4A7b.js";import{o as Ne,p as St}from"./regrade-notifications-DMmOJ4y0.js";import{a as k}from"./ui-C-ZO4RB5.js";import{p as Et}from"./import-BUUT5wvS.js";import{g as ye,c as Tt,b as jt,d as Lt,e as At,f as It,h as Rt,j as qt,k as Ze,l as Xe,m as Nt,n as He,o as Ht,p as Ft,q as Ct,s as Bt,t as Mt,u as Ut,v as Fe,a as Dt,w as zt,x as Pt,y as Ot,z as Vt,A as Wt,B as Gt,C as Kt,D as Yt,E as Jt,F as Zt,G as Xt,H as Qt,I as ea,J as ta,K as Qe,L as aa,M as ra,N as sa,O as et,P as tt}from"./regrade-menu-window-CMWxZTka.js";import{b as na,c as la,u as oa}from"./certificate-engine-Bn4Xdc-e.js";import{o as da}from"./print-overlay-BVfxEd6n.js";import{o as Ce}from"./certificate-editor-D_E4lbCQ.js";import{uploadAssignmentFile as fe}from"./storage-CuUjCgvI.js";import{getDepartments as ia}from"./api-BQaMiX9s.js";import{regradeHeadNameForSubject as at}from"./regrade-overview-notice-Dqi9drCm.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";function rt(e,a){var r;const t=(r=e==null?void 0:e.intent_test_subjects)==null?void 0:r[String(a)];return Array.isArray(t)?t.filter(Number.isSafeInteger):[]}function ca(e,a,t){return rt(e,a).includes(Number(t))}const X={fontFamily:"Sarabun",fontSize:20,color:"#183b56"},O={Sarabun:"'Sarabun', 'Noto Sans Thai', sans-serif",Tahoma:"Tahoma, 'Noto Sans Thai', sans-serif",serif:"Georgia, 'Noto Serif Thai', serif",handwritten:"'Comic Sans MS', 'Noto Sans Thai', cursive"},Be=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function ua(e,a,t){const r=typeof Intl.Segmenter=="function"?new Intl.Segmenter("th",{granularity:"word"}):null,s=r?[...r.segment(a)].map(u=>u.segment):Array.from(a),o=[];let i="";for(const u of s){const y=i+u;i&&e.measureText(y).width>t?(o.push(i.trimEnd()),i=u.trimStart()):i=y}return o.push(i),o}function pa(e,a,t,r){if(!e&&!r)return Promise.resolve(null);const s=1200,o=72,i=Math.max(14,Math.min(32,Number(a.fontSize)||X.fontSize))*2,u=document.createElement("canvas"),y=u.getContext("2d");y.font=`${i}px ${O[a.fontFamily]||O.Sarabun}`;const h=String(e||"").split(/\r?\n/).flatMap(g=>g?ua(y,g,s-o*2):[" "]),w=Math.round(i*1.65),x=120,n=h.length*w,c=r?320:0,b=x+n+c+o*2;u.width=s,u.height=b;const $=u.getContext("2d");if($.fillStyle="#ffffff",$.fillRect(0,0,s,b),$.strokeStyle="#dbe4ec",$.lineWidth=4,$.strokeRect(24,24,s-48,b-48),$.fillStyle="#173b56",$.font=`bold 36px ${O.Sarabun}`,$.fillText("คำชี้แจง / แนวทางการแก้ค้างเก่า",o,94),$.fillStyle=/^#[\da-f]{6}$/i.test(a.color||"")?a.color:X.color,$.font=`${i}px ${O[a.fontFamily]||O.Sarabun}`,h.forEach((g,E)=>$.fillText(g,o,x+E*w,s-o*2)),r){const g=x+n+36;$.strokeStyle="#dbe4ec",$.lineWidth=2,$.beginPath(),$.moveTo(o,g-18),$.lineTo(s-o,g-18),$.stroke(),$.drawImage(t,o,g,s-o*2,c)}return new Promise((g,E)=>{u.toBlob(L=>L?g(L):E(new Error("สร้างภาพคำชี้แจงไม่สำเร็จ")),"image/jpeg",.88)})}function Me(e={}){return new Promise(a=>{const t=String(e.text||""),r={...X,...e.style||{}},s=String(e.imageUrl||""),o=document.createElement("div");o.className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/60 p-3 sm:p-5",o.innerHTML=`
      <section role="dialog" aria-modal="true" aria-labelledby="regrade-note-title" class="w-full max-w-xl max-h-[94vh] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col">
        <header class="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200">
          <div><h2 id="regrade-note-title" class="text-base font-extrabold text-slate-800">✍️ เขียนคำชี้แจงถึงนักเรียน</h2><p class="text-[11px] text-slate-500 mt-0.5">ข้อความจะแสดงในระบบ และสร้างภาพขนาดเล็กไว้เปิดหรือดาวน์โหลด</p></div>
          <button type="button" data-note-close aria-label="ปิด" class="rounded-full w-9 h-9 text-slate-500 hover:bg-slate-100">✕</button>
        </header>
        <div class="p-4 overflow-y-auto space-y-3">
          <label class="block text-xs font-bold text-slate-700">พิมพ์คำชี้แจง
            <textarea data-note-text maxlength="2000" rows="4" class="mt-1 w-full rounded-xl border border-slate-300 p-3 text-sm leading-7 text-slate-800" placeholder="เช่น ให้นักเรียนทำแบบฝึกหัดหน้า 12 ข้อ 1–5 แล้วส่งภายในวันที่กำหนด">${Be(t)}</textarea>
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 items-end">
            <label class="block text-[11px] font-bold text-slate-600">แบบอักษร
              <select data-note-font class="mt-1 w-full rounded-lg border border-slate-300 px-2 py-2 text-xs bg-white">
                <option value="Sarabun">สารบรรณ</option><option value="Tahoma">Tahoma</option><option value="serif">มีเชิง</option><option value="handwritten">ลายมือ</option>
              </select>
            </label>
            <label class="block text-[11px] font-bold text-slate-600">ขนาดตัวอักษร
              <select data-note-size class="mt-1 w-full rounded-lg border border-slate-300 px-2 py-2 text-xs bg-white">
                ${[16,18,20,22,24,28,32].map(T=>`<option value="${T}">${T} px</option>`).join("")}
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
          ${s?`<div class="text-[10px] text-slate-500">มีภาพคำชี้แจงเดิมแนบอยู่ <a href="${Be(s)}" target="_blank" rel="noopener" class="font-bold text-sky-700 underline">เปิดดู</a> · หากบันทึกการแก้ไข ระบบจะสร้างภาพใหม่ตามข้อความและลายมือในหน้านี้</div>`:""}
          <p class="text-[10px] text-slate-500">ระบบสร้างไฟล์ JPG จากข้อความและลายมือเพื่อแนบให้ ขนาดขึ้นกับเนื้อหาและภาพที่เขียน</p>
        </div>
        <footer class="flex gap-2 border-t border-slate-200 p-3">
          <button type="button" data-note-cancel class="flex-1 rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-700">ยกเลิก</button>
          <button type="button" data-note-save class="flex-1 rounded-xl bg-emerald-700 py-2.5 text-xs font-bold text-white">บันทึกคำชี้แจง</button>
        </footer>
      </section>`,document.body.append(o);const i=o.querySelector("[data-note-text]"),u=o.querySelector("[data-note-font]"),y=o.querySelector("[data-note-size]"),m=o.querySelector("[data-note-color]"),h=o.querySelector("[data-note-canvas]"),w=h.getContext("2d"),x=o.querySelector("[data-note-preview]");let n=!1,c=!1,b=!1;const $=T=>{b||(b=!0,o.remove(),a(T))};u.value=O[r.fontFamily]?r.fontFamily:X.fontFamily,y.value=String(Math.max(16,Math.min(32,Number(r.fontSize)||X.fontSize))),m.value=/^#[\da-f]{6}$/i.test(r.color||"")?r.color:X.color,w.lineCap="round",w.lineJoin="round",w.strokeStyle=m.value,w.lineWidth=5;const g=()=>{x.textContent=i.value||"ตัวอย่างคำชี้แจงจะแสดงตรงนี้",x.style.fontFamily=O[u.value]||O.Sarabun,x.style.fontSize=`${y.value}px`,x.style.color=m.value};[i,u,y,m].forEach(T=>T.addEventListener("input",g)),m.addEventListener("input",()=>{w.strokeStyle=m.value}),g();const E=T=>{const I=h.getBoundingClientRect();return{x:(T.clientX-I.left)*h.width/I.width,y:(T.clientY-I.top)*h.height/I.height}};h.addEventListener("pointerdown",T=>{n=!0,c=!0,h.setPointerCapture(T.pointerId);const I=E(T);w.beginPath(),w.moveTo(I.x,I.y)}),h.addEventListener("pointermove",T=>{if(!n)return;const I=E(T);w.lineTo(I.x,I.y),w.stroke()});const L=()=>{n=!1,w.closePath()};h.addEventListener("pointerup",L),h.addEventListener("pointercancel",L),o.querySelector("[data-note-clear]").addEventListener("click",()=>{w.clearRect(0,0,h.width,h.height),c=!1}),o.querySelectorAll("[data-note-close], [data-note-cancel]").forEach(T=>T.addEventListener("click",()=>$(null))),o.addEventListener("keydown",T=>{T.key==="Escape"&&$(null)}),o.querySelector("[data-note-save]").addEventListener("click",async T=>{const I=T.currentTarget;I.disabled=!0,I.textContent="กำลังสร้างภาพ…";try{const D=i.value.trim(),ae={fontFamily:u.value,fontSize:Number(y.value),color:m.value},oe=await pa(D,ae,h,c);$({text:D,style:ae,imageBlob:oe,clearImage:!D&&!c})}catch(D){I.disabled=!1,I.textContent="บันทึกคำชี้แจง",window.alert(D.message||"สร้างภาพคำชี้แจงไม่สำเร็จ")}})})}const Ue=[{token:"{{student_name}}",label:"ชื่อนักเรียน"},{token:"{{student_code}}",label:"รหัสนักเรียน"},{token:"{{room}}",label:"ห้องเรียน"},{token:"{{class_level}}",label:"ชั้น/ระดับ"},{token:"{{category}}",label:"หมวด (สามัญ/ศาสนา)"},{token:"{{subject_name}}",label:"ชื่อรายวิชา"},{token:"{{subject_code}}",label:"รหัสวิชา"},{token:"{{semester}}",label:"ภาคเรียน"},{token:"{{grade_failed_at}}",label:"ผลการเรียนที่ติด (ร/มส/0)"},{token:"{{teacher_name}}",label:"ชื่อครูผู้สอน"},{token:"{{response_method}}",label:"วิธีตอบรับ/วิธีแก้"},{token:"{{due_date}}",label:"วันนัดสอบ/กำหนดส่ง"},{token:"{{file_url}}",label:"ลิงก์ไฟล์งานแก้"},{token:"{{work_url}}",label:"ลิงก์งาน / เอกสาร"},{token:"{{teacher_note}}",label:"คำชี้แจงจากครู"},{token:"{{teacher_note_image_url}}",label:"ลิงก์ภาพคำชี้แจงจากครู"}],De={student_name:"ตัวอย่าง ชื่อ-สกุล นักเรียน",student_code:"00000",room:"ม.6/1",class_level:"ม.6",category:"สามัญ",subject_name:"วิชาตัวอย่าง",subject_code:"ว00000",semester:"1/2569",grade_failed_at:"ร",teacher_name:"ครูตัวอย่าง",response_method:"นัดสอบปรับ",due_date:"12 ธ.ค. 2569 เวลา 09:00 น.",file_url:"https://example.com/work.pdf",work_url:"https://example.com/work",teacher_note:"อ่านคำชี้แจงและทำตามกำหนดส่ง",teacher_note_image_url:"https://example.com/teacher-note.jpg"},ma={orientation:"portrait",background:{type:"flat",color:"#ffffff",cardColor:"#ffffff",borderColor:"#94a3b8",borderWidth:2,borderStyle:"solid"},elements:[{id:"title",text:"ใบมอบหมายงานแก้ค้างเก่า",x:50,y:8,fontSize:22,color:"#1e293b",align:"center",bold:!0},{id:"student",text:"ชื่อ-สกุล: {{student_name}}   รหัส: {{student_code}}   ห้อง: {{room}}",x:8,y:22,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"subject",text:"รายวิชา: {{subject_name}} ({{subject_code}})   ภาคเรียน: {{semester}}",x:8,y:30,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"teacher",text:"ครูผู้สอน: {{teacher_name}}",x:8,y:38,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"issued",text:"ออกให้ ณ วันที่ {{date}}",x:8,y:85,fontSize:11,color:"#64748b",align:"left",bold:!1},{id:"sign",text:"ลายเซ็นครูผู้สอน",x:70,y:92,fontSize:11,color:"#64748b",align:"center",bold:!1,borderTop:!0}]},ge=[{key:"สามัญ",suffix:"samai",emoji:"📘",label:"สามัญ"},{key:"ศาสนา",suffix:"religion",emoji:"🕌",label:"ศาสนา"}];function _e(e,a){return wt(e,a,f.cfg)}const he={ว:"SC",อ:"ENG",จ:"ENG",ค:"MATH",ท:"THAI",ส:"SOC",ง:"OCC",ศ:"ART",พ:"HEALTH"};function l(e){return String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a])}function ee(e){const a={ยังไม่แจ้ง:{bg:"#f3f4f6",text:"#6b7280",border:"#e5e7eb",label:"ยังไม่แจ้ง"},จำนงแล้ว:{bg:"var(--gold-soft)",text:"var(--gold-ink)",border:"var(--gold-soft-line)",label:"จำนงแล้ว · รอครูตอบรับ"},กำลังดำเนินการปรับแก้:{bg:"var(--info-soft)",text:"var(--info)",border:"var(--info-soft-line)",label:"กำลังดำเนินการปรับแก้"},ปรับแก้สำเร็จ:{bg:"var(--ok-soft)",text:"var(--ok)",border:"var(--ok-soft-line)",label:"ปรับแก้สำเร็จ ✓"}};return a[e]||a.ยังไม่แจ้ง}const te=e=>{const a=ee(e);return`background:${a.bg};color:${a.text};border:1px solid ${a.border};`},st=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function ze(e){if(!e)return null;const a=new Date(e);if(isNaN(a.getTime()))return null;const t=String(a.getHours()).padStart(2,"0"),r=String(a.getMinutes()).padStart(2,"0");return`${a.getDate()} ${st[a.getMonth()]} ${a.getFullYear()+543} เวลา ${t}:${r} น.`}function nt(e){const a=String(e||"").trim();if(!a)return{date:"",time:""};const t=a.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);if(t)return{date:`${t[1]}-${t[2]}-${t[3]}`,time:t[4]?`${t[4]}:${t[5]}`:""};const r=a.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})(?:\s+(\d{1,2}):(\d{2}))?/);if(!r)return{date:"",time:""};let s=Number(r[3]);s<100&&(s+=2500),s>2400&&(s-=543);const o=String(Number(r[2])).padStart(2,"0"),i=String(Number(r[1])).padStart(2,"0");return{date:`${s}-${o}-${i}`,time:r[4]?`${String(Number(r[4])).padStart(2,"0")}:${r[5]}`:""}}function K(e){const a=nt(e);if(!a.date)return String(e||"-");const[t,r,s]=a.date.split("-").map(Number),o=`${s} ${st[r-1]} ${t+543}`;return a.time?`${o} เวลา ${a.time} น.`:o}function Q(e){const a=String(e||"").trim();if(!a)return"";try{const t=new URL(a);return["https:","http:"].includes(t.protocol)&&!t.username&&!t.password&&a.length<=2e3?t.href:null}catch{return null}}function pe(e,a){const t=nt(e.due_text);d.form={id:Number(e.id),method:a,dueDate:t.date,dueTime:t.time,fileUrl:a==="ให้งานแก้"&&e.file_url||"",workUrl:a==="ให้งานแก้"&&e.work_url||"",file:null,fileSource:e.file_url?"current":"none",editing:e.status==="กำลังดำเนินการปรับแก้",noteText:e.teacher_note||"",noteStyle:e.teacher_note_style||null,noteImageUrl:e.teacher_note_image_url||"",noteImageBlob:null}}function ba(e){return d.subjects.filter(a=>Number(a.id)!==Number(e.id)&&Number(a.teacher_id)===Number(e.teacher_id)&&a.subject_code===e.subject_code&&a.semester===e.semester&&a.category===e.category&&/^https:\/\//i.test(a.file_url||"")).sort((a,t)=>new Date(t.assigned_at||t.updated_at||0)-new Date(a.assigned_at||a.updated_at||0))[0]||null}async function fa(e){if(pe(e,"ให้งานแก้"),e.file_url){S();return}const a=ba(e);if(a){const t=await ya(e,a);t==="reuse"?(d.form.fileUrl=a.file_url,d.form.fileSource="reuse"):(d.form.fileUrl="",d.form.fileSource=t==="upload"?"upload":"none")}S()}function lt(e,a,t,r,s,o){const i=ze(e),u=ze(a);return!i&&!u?"":`<div class="rg-card p-4 mb-4" style="border-left:4px solid var(${r})">
    <p class="text-xs font-bold" style="color:var(${r})">🗓 ${l(t)}</p>
    <p class="text-sm font-bold text-[var(--ink)] mt-1">${i?`เริ่ม ${i}`:""}${i&&u?" — ":""}${u?`ถึง ${u}`:""}</p>
    <button data-deadline-cta="${l(o)}" class="mt-3 w-full py-2 rounded-xl text-white font-bold text-xs" style="background:linear-gradient(135deg,var(${r}),var(${r}-dark))">${l(s)} →</button>
  </div>`}const Se=e=>e==="ศาสนา"?"background:var(--secondary-soft);color:var(--secondary-dark);border:1px solid var(--secondary-soft-line);":"background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line);",ga=["เด็กชาย","เด็กหญิง","ด.ช.","ด.ญ.","นางสาว","น.ส.","นาย","นาง"];function xa(e){let a=String(e);for(const t of ga)if(a.startsWith(t)){a=a.slice(t.length).trim();break}return a.charAt(0)||"?"}function va(e,a){let t=0;for(let i=0;i<String(e).length;i++)t+=e.charCodeAt(i);const r=[["#eef2ff","#4f46e5"],["#ecfdf5","#059669"],["#fef3c7","#b45309"],["#fce7f3","#be185d"],["#e0f2fe","#0284c7"],["#f3e8ff","#7c3aed"]],[s,o]=r[t%r.length];return a?`width:34px;height:44px;border-radius:8px;background:${s};color:${o};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);`:`width:30px;height:30px;border-radius:9999px;background:${s};color:${o};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0;`}function M(e,a){const t=(e==null?void 0:e.full_name)||"-",r=(e==null?void 0:e.photo_url)||(e==null?void 0:e.image_url);if(!r)return`<div style="${va(t,a)}">${xa(t)}</div>`;const s=a?"width:34px;height:44px;border-radius:8px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);object-fit:cover;":"width:30px;height:30px;border-radius:9999px;flex-shrink:0;object-fit:cover;";return`<img src="${l(r)}" alt="${l(t)}" style="${s}">`}function N({title:e="ยืนยันการดำเนินการ",message:a="",confirmText:t="ยืนยัน",cancelText:r="ยกเลิก"}={}){return new Promise(s=>{var u;(u=document.getElementById("regrade-confirm-modal"))==null||u.remove();const o=document.createElement("div");o.id="regrade-confirm-modal",o.className="fixed inset-0 z-[99999] flex items-center justify-center p-4",o.innerHTML=`
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
      </div>`,document.body.appendChild(o);const i=y=>{o.remove(),s(y)};o.querySelector("#rgc-overlay").addEventListener("click",()=>i(!1)),o.querySelector("#rgc-cancel").addEventListener("click",()=>i(!1)),o.querySelector("#rgc-confirm").addEventListener("click",()=>i(!0))})}function ya(e,a){return new Promise(t=>{var y;(y=document.getElementById("regrade-reuse-file-modal"))==null||y.remove();const r=document.createElement("div");r.id="regrade-reuse-file-modal",r.className="fixed inset-0 z-[99999] flex items-center justify-center p-4";const s=a.assigned_at||a.updated_at,o=s?new Date(s).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"-",i=/^https:\/\//i.test(a.file_url||"")?a.file_url:"";r.innerHTML=`
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" data-reuse-choice="upload"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background:linear-gradient(135deg,var(--gold),var(--gold-dark))"></div>
        <div class="px-6 pt-6 pb-4 text-center">
          <div class="mx-auto mb-3 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style="background:var(--gold-soft)">📎</div>
          <h3 class="text-lg font-bold text-gray-900">พบไฟล์เดิมของรายวิชานี้</h3>
          <p class="text-sm text-gray-600 leading-relaxed mt-2">${l(e.subject_name)} (${l(e.subject_code)})<br>ภาคเรียน ${l(e.semester||"-")} · ${l(e.category||"-")}</p>
          <div class="mt-3 p-3 rounded-xl text-left" style="background:var(--surface-2);border:1px solid var(--line)">
            <p class="text-xs font-bold text-[var(--ink)]">ไฟล์งานแก้ที่เคยอัปโหลด</p>
            <p class="text-[10px] text-[var(--muted-2)] mt-1">ใช้ล่าสุด ${l(o)}</p>
            ${i?`<a href="${l(i)}" target="_blank" rel="noopener" class="inline-flex mt-2 text-xs font-bold" style="color:var(--info)">เปิดดูไฟล์เดิม ↗</a>`:""}
          </div>
        </div>
        <div class="px-6 pb-6 grid gap-2">
          <button data-reuse-choice="reuse" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">ใช้ไฟล์เดิม</button>
          <button data-reuse-choice="upload" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 active:scale-[0.97] transition-all">อัปโหลดไฟล์ใหม่</button>
          <button data-reuse-choice="none" class="py-2 text-xs font-semibold text-gray-500">ไม่แนบไฟล์</button>
        </div>
      </div>`,document.body.appendChild(r);const u=m=>{r.remove(),t(m)};r.querySelectorAll("[data-reuse-choice]").forEach(m=>m.addEventListener("click",()=>u(m.dataset.reuseChoice)))})}function V(e,a="primary"){return e?`flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});`:"flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:var(--muted);background:var(--surface-2);"}function Y(e,a){return`<div class="flex items-center gap-2 flex-shrink-0">
    <span data-badge class="px-2 py-1 rounded-full text-[11px] font-bold" style="background:${a?"var(--ok-soft)":"var(--surface-2)"};color:${a?"var(--ok)":"var(--muted)"}">${a?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span>
    <button type="button" id="${e}" data-on="${a?"1":"0"}" class="px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0"
      style="${a?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;"}">${a?"ปิดใช้งาน":"เปิดใช้งาน"}</button>
  </div>`}function ha(e,a){a.forEach(t=>{const r=e.querySelector("#"+t);r&&r.addEventListener("click",()=>{const s=r.dataset.on!=="1";r.dataset.on=s?"1":"0",r.style.cssText=s?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;",r.textContent=s?"ปิดใช้งาน":"เปิดใช้งาน";const o=r.parentElement.querySelector("[data-badge]");o&&(o.textContent=s?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่",o.style.background=s?"var(--ok-soft)":"var(--surface-2)",o.style.color=s?"var(--ok)":"var(--muted)")})})}const J=(e,a)=>{var t;return((t=e.querySelector("#"+a))==null?void 0:t.dataset.on)==="1"};function F(e,a="primary"){return e?`padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:800;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});box-shadow:0 2px 8px rgba(0,0,0,.15);white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;`:"padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:700;color:var(--muted);background:transparent;white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;"}const me="inline-flex gap-1 p-1 rounded-full bg-[var(--surface-2)] flex-wrap";function ot(e,a,t){const r=document.getElementById("regrade-bottom-tabs");r.innerHTML=`<div class="flex">${e.map(s=>`
    <button data-nav="${s.key}" class="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5" style="transition:transform .15s ease;${a===s.key?"transform:scale(1.12)":""}">
      <span class="text-lg">${s.icon}</span>
      <span class="text-[10px] font-bold" style="color:${a===s.key?"var(--primary)":"var(--muted-2)"}">${l(s.label)}</span>
    </button>`).join("")}</div>`,r.querySelectorAll("[data-nav]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.nav)))}const f={role:null,isAdmin:!1,isRegistrar:!1,isExecutive:!1,studentRow:null,teacherRow:null,cfg:{}};function le(e,a){document.getElementById("regrade-title-mobile").textContent=e,document.getElementById("regrade-view-title").textContent=a}function Ee(e,a,t){const r=document.getElementById("regrade-sidebar-nav");r.innerHTML=e.map(s=>`
    <button data-sec="${s.key}" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-left"
      style="${a===s.key?"background:var(--primary);color:#fff;":"color:var(--primary-45);"}">
      <span>${s.icon}</span> ${l(s.label)}
    </button>`).join(""),r.querySelectorAll("[data-sec]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.sec)))}const R={subView:"catalog",categoryTab:"สามัญ",subjects:[],departments:[]};async function dt(){R.subjects=await Dt(f.studentRow.id),R.subjects.some(e=>e.status==="ยังไม่แจ้ง"&&e.teacher_id==null)&&!R.departments.length&&(R.departments=await ia().catch(()=>[]))}function ka(){var e;return!!f.cfg.intent_open||rt(f.cfg,(e=f.studentRow)==null?void 0:e.id).length>0}function $a(e){var s,o;const a=f.cfg.intent_open_levels;if(!a||!a.length)return!0;const t=e==="ศาสนา"?(s=f.studentRow)==null?void 0:s.religion_room:(o=f.studentRow)==null?void 0:o.main_room,r=t?t.split("/")[0].trim():null;return r?a.includes(`${e}|${r}`):!1}async function G(){var w;le("แก้ค้างเก่า","รายวิชาค้างของฉัน"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");if(!R.subjects.length&&R.subjects!==null)try{await dt()}catch(x){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(x.message)}</div>`;return}const a=R.subjects,t=a.filter(x=>x.category==="สามัญ").length,r=a.filter(x=>x.category==="ศาสนา").length,s=a.filter(x=>x.status==="กำลังดำเนินการปรับแก้"),o=a.length,i=a.filter(x=>x.status==="จำนงแล้ว").length,u=s.length,y=a.filter(x=>x.status==="ปรับแก้สำเร็จ").length;let m="";if(R.subView==="catalog"){const x=a.filter(n=>n.category===R.categoryTab);m=`
      <div class="flex gap-2 mb-4">
        <button data-tab="สามัญ" style="${V(R.categoryTab==="สามัญ")}">รายวิชาสามัญ (${t})</button>
        <button data-tab="ศาสนา" style="${V(R.categoryTab==="ศาสนา","secondary")}">รายวิชาศาสนา (${r})</button>
      </div>
      <div class="flex flex-col gap-3">
        ${x.length?x.map(n=>Pe(n)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในหมวดนี้ 🎉</div>'}
      </div>`}else R.subView==="overview"?m=`
      ${f.cfg.show_deadline_banner?lt(f.cfg.intent_window_start,f.cfg.intent_window_end,"กำหนดแจ้งความจำนงขอแก้/ปรับ","--primary","ไปแจ้งความจำนง","catalog"):""}
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        ${Ve(a.filter(x=>x.category==="สามัญ"),"📘 สามัญ","var(--primary-dark)")}
        ${Ve(a.filter(x=>x.category==="ศาสนา"),"🕌 ศาสนา","var(--secondary-dark)")}
      </div>
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-2">สรุปของฉัน</p>
        <div class="grid grid-cols-2 gap-3">
          ${de(o,"วิชาค้างทั้งหมด","var(--ink)")}
          ${de(i,"จำนงแล้ว","var(--gold-ink)")}
          ${de(u,"กำลังดำเนินการ","var(--info)")}
          ${de(y,"สำเร็จแล้ว","var(--ok)")}
        </div>
      </div>`:R.subView==="myWork"&&(m=`<div class="flex flex-col gap-3">
      ${s.length?s.map(x=>Pe(x)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่ต้องทำตอนนี้ 🎉</div>'}
    </div>`);e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">
      ${m}
    </div>
    ${ka()?`
    <button id="regrade-student-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--gold),var(--gold-ink))">📝 จำนงขอแก้/ปรับ</button>`:""}`,e.querySelectorAll("[data-tab]").forEach(x=>x.addEventListener("click",()=>{R.categoryTab=x.dataset.tab,G()})),e.querySelectorAll("[data-declare]").forEach(x=>x.addEventListener("click",()=>_a(x))),e.querySelectorAll("[data-declare-blocked]").forEach(x=>x.addEventListener("click",()=>{const n=R.subjects.find(c=>Number(c.id)===Number(x.dataset.declareBlocked));ke(n)})),e.querySelectorAll("[data-print-slip]").forEach(x=>x.addEventListener("click",()=>{var g;const n=a.find(E=>E.id===Number(x.dataset.printSlip));if(!n)return;const c=f.studentRow||{},$=((g=(n.category==="ศาสนา"?c.religion_room||c.main_room||"":c.main_room||c.religion_room||"").match(/^(ม\.[0-9]+|ปวช\.[0-9]+)/))==null?void 0:g[1])||"";_e({...n,students:{...c,...n.students||{}},class_level:n.class_level||$})})),e.querySelectorAll("[data-deadline-cta]").forEach(x=>x.addEventListener("click",()=>{R.subView=x.dataset.deadlineCta,G()})),(w=document.getElementById("regrade-student-fab"))==null||w.addEventListener("click",()=>{R.subView="catalog",G()}),Ee([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],R.subView,x=>{R.subView=x,G()}),ot([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],R.subView,x=>{R.subView=x,G()})}function de(e,a,t){return`<div class="bg-[var(--surface-2)] rounded-xl p-3 text-center">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${l(a)}</p>
  </div>`}function Pe(e){var o,i;const a=((o=e.teachers)==null?void 0:o.full_name)||"-",t=e.teacher_id!=null&&Number.isFinite(Number(e.teacher_id)),r=t&&(!!f.cfg.intent_open&&$a(e.category)||ca(f.cfg,(i=f.studentRow)==null?void 0:i.id,e.id)),s=t?"":at(e,R.departments);return`
  <div class="rg-card p-4 shadow-sm">
    <div class="flex justify-between gap-2 items-start">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${l(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${l(e.subject_code)} · ${l(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold" style="${te(e.status)}">${ee(e.status).label}</span>
    </div>
    <div class="flex items-center gap-2 mt-2 pt-2 border-t border-dashed border-[var(--line-soft)]">
      ${M(e.teachers,!0)}
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
        ${it(e)}
      </div>
      ${wa(e)}
      <button data-print-slip="${e.id}" class="mt-2 w-full py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>`:""}
  </div>`}function ke(e){const a=e?at(e,R.departments):"",t=a?`หัวหน้ากลุ่มสาระ ${l(a)}`:"หัวหน้ากลุ่มสาระที่รับผิดชอบ";k(`ยังแจ้งความจำนงไม่ได้ เพราะรายวิชายังไม่มีครูผู้สอน โปรดรอหรือรีบติดต่อ${t} ให้มอบหมายครู`,"warning")}function wa(e){const a=Q(e.file_url),t=Q(e.work_url);return!a&&!t?"":`<div class="grid ${a&&t?"grid-cols-2":"grid-cols-1"} gap-2 mt-2">
    ${a?`<a href="${l(a)}" target="_blank" rel="noopener noreferrer" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">📎 เปิดไฟล์งานที่ครูแนบ ↗</a>`:""}
    ${t?`<a href="${l(t)}" target="_blank" rel="noopener noreferrer" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">🔗 เปิดลิงก์งาน / เอกสาร ↗</a>`:""}
  </div>`}function it(e){if(!e.teacher_note&&!e.teacher_note_image_url)return"";const a=e.teacher_note_style&&typeof e.teacher_note_style=="object"?e.teacher_note_style:{},t={Sarabun:"'Sarabun', 'Noto Sans Thai', sans-serif",Tahoma:"Tahoma, 'Noto Sans Thai', sans-serif",serif:"Georgia, 'Noto Serif Thai', serif",handwritten:"'Comic Sans MS', 'Noto Sans Thai', cursive"},r=t[a.fontFamily]||t.Sarabun,s=Math.max(12,Math.min(28,Number(a.fontSize)||18)),o=/^#[\da-f]{6}$/i.test(a.color||"")?a.color:"#183b56",i=/^https:\/\//i.test(e.teacher_note_image_url||"")?e.teacher_note_image_url:"";return`<div class="mt-3 rounded-xl bg-white/80 p-3" style="border:1px solid var(--info-soft-line)">
    <p class="text-[10px] font-bold text-[var(--info)] mb-1">✍️ คำชี้แจงจากครู</p>
    ${e.teacher_note?`<p class="whitespace-pre-wrap break-words leading-relaxed" style="font-family:${r};font-size:${s}px;color:${o}">${l(e.teacher_note)}</p>`:""}
    ${i?`<a href="${l(i)}" target="_blank" rel="noopener" class="block mt-2"><img src="${l(i)}" alt="ภาพคำชี้แจงจากครู" loading="lazy" class="max-h-64 max-w-full rounded-lg border border-slate-200 object-contain"><span class="inline-block mt-1 text-[10px] font-bold text-sky-700">เปิดหรือดาวน์โหลดภาพคำชี้แจง ↗</span></a>`:""}
  </div>`}async function _a(e){const a=Number(e.dataset.declare),t=R.subjects.find(s=>Number(s.id)===a);if(!t||t.teacher_id==null){ke(t);return}if(await N({title:"ยืนยันแจ้งความจำนง",message:`ยืนยันแจ้งความจำนงขอปรับแก้วิชา "${e.dataset.subject}" ใช่หรือไม่? เมื่อกดยืนยัน ครูผู้สอนจะได้รับแจ้งเตือนทันที`,confirmText:"ยืนยันแจ้งความจำนง"}))try{await zt(a),k("แจ้งความจำนงเรียบร้อย ครูผู้สอนจะได้รับแจ้งเตือนทันที ✅","success"),await dt(),G()}catch(s){(s==null?void 0:s.code)==="23514"||String((s==null?void 0:s.message)??"").includes("ยังไม่มีครูผู้สอน")?ke(t):k("บันทึกไม่สำเร็จ: "+s.message,"error")}}const d={subView:"overview",subjects:[],form:null,bulkForm:null,editingResponseId:null,respondExpanded:new Set,responseExpandedId:null,catalogExpanded:new Set,catalogSemesterFilter:{},assignedExpanded:new Set,assignedSemesterFilter:{},deptHeadExpanded:new Set,unassigned:[],deptHeadTeacherOptions:null,deptHeadDept:void 0,deptHeadShowAll:!1,deptHeadSelectMode:new Set,deptHeadSelected:{}};function Oe(){var t;const e=f.teacherRow,a=(t=e==null?void 0:e.positions)!=null&&t.length?e.positions:e!=null&&e.position?[e.position]:[];return["dept_head","religion_group_head","religion_subgroup_head"].some(r=>a.includes(r))}async function ct(){d.subjects=await At(f.teacherRow.id)}async function Sa(){const[e,a]=await Promise.all([Pt(f.teacherRow.category),d.deptHeadTeacherOptions?Promise.resolve(d.deptHeadTeacherOptions):Ze(),d.deptHeadDept!==void 0?Promise.resolve(d.deptHeadDept):Ot(f.teacherRow.position_dept_id).then(t=>{d.deptHeadDept=t})]);d.unassigned=e,d.deptHeadTeacherOptions=a.filter(t=>t.category===f.teacherRow.category)}function Ea(e){var t;const a=(t=d.deptHeadDept)==null?void 0:t.dept_code;return!a||d.deptHeadShowAll?e:e.filter(r=>he[r.subject_code.charAt(0)]===a)}async function S(){var h,w,x;le("แก้ค้างเก่า","งานแก้ค้างเก่า"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");try{await ct(),d.subView==="depthead"&&Oe()&&await Sa()}catch(n){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(n.message)}</div>`;return}const a=d.subjects,t=a.filter(n=>n.status==="จำนงแล้ว"),r=a.filter(n=>n.status==="กำลังดำเนินการปรับแก้"),s=a.filter(n=>n.status==="ปรับแก้สำเร็จ").length,o=d.subView==="respond"?We(t):[],i=d.subView==="assigned"?We(r):[];let u="";if(d.subView==="catalog"){const n=re(a);u=`<div class="flex flex-col gap-3">${n.length?n.map(c=>Ta(c,{scope:"catalog",expandedSet:d.catalogExpanded,semesterFilterMap:d.catalogSemesterFilter,renderRow:ut})).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในความรับผิดชอบตอนนี้ 🎉</div>'}</div>`}else if(d.subView==="overview"){const n=a.length-t.length-r.length-s,c=a.length?Math.round(s/a.length*100):0;u=`
      ${f.cfg.show_deadline_banner?lt(f.cfg.response_window_start,f.cfg.response_window_end,"กำหนดตอบรับคำร้องของนักเรียน","--secondary","ไปตอบรับ","respond"):""}
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สรุปของฉัน</p>
        ${a.length?Te([{value:n,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:t.length,color:"var(--gold-ink)",label:"รอตอบรับ"},{value:r.length,color:"var(--info)",label:"กำลังดำเนินการ"},{value:s,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${c}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีรายวิชาค้างในความรับผิดชอบ</p>'}
        <div class="grid grid-cols-2 gap-3 mt-4">
          ${ie(a.length,"วิชาค้างทั้งหมด","var(--ink)","catalog")}
          ${ie(t.length,"รอตอบรับ","var(--gold-ink)","respond")}
          ${ie(r.length,"กำลังดำเนินการ","var(--info)","assigned")}
          ${ie(s,"สำเร็จแล้ว","var(--ok)","catalog")}
        </div>
      </div>`}else if(d.subView==="assigned")u=`<div class="flex flex-col gap-3">${i.length?i.map((n,c)=>Ca(n,c)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่มอบหมายอยู่</div>'}</div>`;else if(d.subView==="respond")u=`
      <div class="flex items-center gap-2 mb-3">
        <button id="regrade-teacher-back" class="w-8 h-8 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-sm">←</button>
        <p class="text-sm font-bold text-[var(--ink)]">ตอบรับคำร้อง</p>
      </div>
      ${o.length?`<div class="rg-card p-3 mb-3 text-xs text-[var(--muted-2)]">แตะการ์ดรายวิชาเพื่อดูรายชื่อนักเรียน แตะแถวนักเรียนเพื่อตอบรับรายคน หรือใช้ปุ่มด้านบนของการ์ดเพื่อตอบรับเป็นชุด</div>
      <div class="flex flex-col gap-3">${o.map((n,c)=>Fa(n,c)).join("")}</div>`:'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ตอบรับครบหมดแล้ว 🎉</div>'}`;else if(d.subView==="depthead"){const n=re(d.unassigned),c=(h=d.deptHeadDept)==null?void 0:h.dept_code,b=c&&Object.values(he).includes(c),$=Ea(n);u=`
      <div class="rg-card p-3 mb-4 text-xs text-[var(--muted-2)]">🗂️ วิชาในหมวด${l(f.teacherRow.category)}ที่ยังไม่มีครูผู้สอน — มอบหมายครูที่สอนอยู่จริงตอนนี้ให้แต่ละวิชาได้เลย</div>
      ${b?`
      <div class="flex gap-2 mb-4">
        <button data-depthead-scope="own" style="${V(!d.deptHeadShowAll)}">📘 เฉพาะกลุ่มสาระของฉัน (${l(d.deptHeadDept.dept_name)}) · ${n.filter(g=>he[g.subject_code.charAt(0)]===c).length}</button>
        <button data-depthead-scope="all" style="${V(d.deptHeadShowAll,"secondary")}">ดูทั้งหมด · ${n.length}</button>
      </div>
      <p class="text-[10px] text-[var(--muted-2)] mb-3">การกรองนี้ช่วยดูง่ายขึ้นเท่านั้น ยังมอบหมายวิชานอกกลุ่มสาระของตัวเองได้ถ้าจำเป็น — ระบบจะรู้ตำแหน่งวิชาแค่แบบคร่าวๆ จากรหัสวิชา อาจไม่ครบ 100%</p>`:""}
      <div class="flex flex-col gap-3">${$.length?$.map(g=>Aa(g,d.deptHeadExpanded)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีวิชาที่ขาดครูผู้สอนแล้ว 🎉</div>'}</div>
      <datalist id="regrade-depthead-teacher-list">${d.deptHeadTeacherOptions.map(g=>`<option value="${l(g.full_name)}${g.teacher_code?` (${l(g.teacher_code)})`:""} · รหัส ${g.id}"></option>`).join("")}</datalist>`}e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">${u}</div>
    ${t.length?`
    <button id="regrade-teacher-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">
      ✅ ตอบรับ
      <span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">${t.length}</span>
    </button>`:""}`,(w=document.getElementById("regrade-teacher-fab"))==null||w.addEventListener("click",()=>{d.subView="respond",S()}),(x=document.getElementById("regrade-teacher-back"))==null||x.addEventListener("click",()=>{d.subView="overview",S()}),e.querySelectorAll("[data-deadline-cta]").forEach(n=>n.addEventListener("click",()=>{d.subView=n.dataset.deadlineCta,S()})),e.querySelectorAll("[data-edit-response]").forEach(n=>n.addEventListener("click",()=>{d.form=null,d.editingResponseId=Number(n.dataset.editResponse),d.responseExpandedId=Number(n.dataset.editResponse),S()})),e.querySelectorAll("[data-close-edit-response]").forEach(n=>n.addEventListener("click",()=>{d.form=null,d.editingResponseId=null,S()})),e.querySelectorAll("[data-open-exam]").forEach(n=>n.addEventListener("click",()=>{const c=a.find(b=>b.id===Number(n.dataset.openExam));c&&pe(c,"นัดสอบปรับ"),S()})),e.querySelectorAll("[data-open-work]").forEach(n=>n.addEventListener("click",()=>{const c=a.find(b=>b.id===Number(n.dataset.openWork));c&&fa(c)})),e.querySelectorAll("[data-open-bulk-response]").forEach(n=>n.addEventListener("click",()=>{var b;const c=o[Number(n.dataset.openBulkResponse)];c&&(((b=d.bulkForm)==null?void 0:b.scope)==="respond"&&d.bulkForm.key===c.key?d.bulkForm=null:d.bulkForm={scope:"respond",key:c.key,ids:new Set(c.items.map($=>Number($.id))),method:"",dueDate:"",dueTime:"",file:null,fileUrl:"",fileSource:"none",noteText:"",noteStyle:null,noteImageUrl:"",noteImageBlob:null,workUrl:""},d.respondExpanded.add(c.key),S())})),e.querySelectorAll("[data-open-bulk-update]").forEach(n=>n.addEventListener("click",()=>{var b;const c=i[Number(n.dataset.openBulkUpdate)];c&&(((b=d.bulkForm)==null?void 0:b.scope)==="assigned"&&d.bulkForm.key===c.key?d.bulkForm=null:d.bulkForm=Ha(c),d.assignedExpanded.add(c.key),S())})),e.querySelectorAll("[data-toggle-assigned-group]").forEach(n=>n.addEventListener("click",()=>{const c=n.dataset.toggleAssignedGroup;d.assignedExpanded.has(c)?d.assignedExpanded.delete(c):d.assignedExpanded.add(c),S()})),e.querySelectorAll("[data-toggle-response-group]").forEach(n=>n.addEventListener("click",()=>{const c=n.dataset.toggleResponseGroup;d.respondExpanded.has(c)?d.respondExpanded.delete(c):d.respondExpanded.add(c),S()})),e.querySelectorAll("[data-toggle-individual-response]").forEach(n=>n.addEventListener("click",()=>{const c=Number(n.dataset.toggleIndividualResponse);d.responseExpandedId=d.responseExpandedId===c?null:c,S()})),e.querySelectorAll("[data-bulk-student-select]").forEach(n=>n.addEventListener("change",()=>{var g,E,L,T;const c=Number(n.dataset.bulkStudentSelect);n.checked?(g=d.bulkForm)==null||g.ids.add(c):(E=d.bulkForm)==null||E.ids.delete(c);const b=e.querySelector("[data-bulk-selected-count]");b&&(b.textContent=String(((L=d.bulkForm)==null?void 0:L.ids.size)??0));const $=e.querySelector("[data-bulk-confirm-count]");$&&($.textContent=String(((T=d.bulkForm)==null?void 0:T.ids.size)??0))})),e.querySelectorAll("[data-bulk-select-all]").forEach(n=>n.addEventListener("click",()=>{var b;const c=o[Number(n.dataset.bulkSelectAll)];c&&((b=d.bulkForm)==null?void 0:b.key)===c.key&&(d.bulkForm.ids=new Set(c.items.map($=>Number($.id)))),S()})),e.querySelectorAll("[data-bulk-select-none]").forEach(n=>n.addEventListener("click",()=>{var b;const c=o[Number(n.dataset.bulkSelectNone)];c&&((b=d.bulkForm)==null?void 0:b.key)===c.key&&d.bulkForm.ids.clear(),S()})),e.querySelectorAll("[data-bulk-select-all-assigned]").forEach(n=>n.addEventListener("click",()=>{var b;const c=i[Number(n.dataset.bulkSelectAllAssigned)];c&&((b=d.bulkForm)==null?void 0:b.scope)==="assigned"&&d.bulkForm.key===c.key&&(d.bulkForm.ids=new Set(c.items.map($=>Number($.id)))),S()})),e.querySelectorAll("[data-bulk-select-none-assigned]").forEach(n=>n.addEventListener("click",()=>{var b;const c=i[Number(n.dataset.bulkSelectNoneAssigned)];c&&((b=d.bulkForm)==null?void 0:b.scope)==="assigned"&&d.bulkForm.key===c.key&&d.bulkForm.ids.clear(),S()})),e.querySelectorAll("[data-bulk-method]").forEach(n=>n.addEventListener("click",()=>{d.bulkForm&&(d.bulkForm.method=n.dataset.bulkMethod==="exam"?"นัดสอบปรับ":"ให้งานแก้",S())})),e.querySelectorAll("[data-bulk-due-date]").forEach(n=>n.addEventListener("input",()=>{d.bulkForm&&(d.bulkForm.dueDate=n.value)})),e.querySelectorAll("[data-bulk-due-time]").forEach(n=>n.addEventListener("input",()=>{d.bulkForm&&(d.bulkForm.dueTime=n.value)})),e.querySelectorAll("[data-bulk-work-url]").forEach(n=>n.addEventListener("input",()=>{d.bulkForm&&(d.bulkForm.workUrl=n.value,d.bulkForm.scope==="assigned"&&(d.bulkForm.preserveWorkUrlIfEmpty=!1))})),e.querySelectorAll("[data-bulk-work-file]").forEach(n=>n.addEventListener("change",()=>{var $;const c=(($=n.files)==null?void 0:$[0])||null;if(c&&c.size>5*1024*1024){n.value="",k("ไฟล์ต้องมีขนาดไม่เกิน 5 MB","warning");return}if(!d.bulkForm)return;d.bulkForm.file=c,d.bulkForm.fileUrl="",d.bulkForm.fileSource=c?"upload":"none",d.bulkForm.scope==="assigned"&&(d.bulkForm.preserveFileIfEmpty=!1);const b=e.querySelector("[data-bulk-work-file-name]");b&&(b.textContent=c?c.name:"ยังไม่ได้เลือกไฟล์")})),e.querySelectorAll("[data-bulk-reuse-file]").forEach(n=>n.addEventListener("click",()=>{d.bulkForm&&(d.bulkForm.file=null,d.bulkForm.fileUrl=n.dataset.bulkReuseFile,d.bulkForm.fileSource="reuse",d.bulkForm.scope==="assigned"&&(d.bulkForm.preserveFileIfEmpty=!1),S())})),e.querySelectorAll("[data-bulk-no-file]").forEach(n=>n.addEventListener("click",()=>{d.bulkForm&&(d.bulkForm.file=null,d.bulkForm.fileUrl="",d.bulkForm.fileSource="none",d.bulkForm.scope==="assigned"&&(d.bulkForm.preserveFileIfEmpty=!1),S())})),e.querySelectorAll("[data-bulk-clear-work-url]").forEach(n=>n.addEventListener("click",()=>{d.bulkForm&&(d.bulkForm.workUrl="",d.bulkForm.preserveWorkUrlIfEmpty=!1,S())})),e.querySelectorAll("[data-bulk-clear-work-file]").forEach(n=>n.addEventListener("click",()=>{d.bulkForm&&(d.bulkForm.file=null,d.bulkForm.fileUrl="",d.bulkForm.fileSource="none",d.bulkForm.scope==="assigned"&&(d.bulkForm.preserveFileIfEmpty=!1),S())})),e.querySelectorAll("[data-bulk-confirm]").forEach(n=>n.addEventListener("click",()=>{const c=o[Number(n.dataset.bulkConfirm)];c&&Ma(n,c)})),e.querySelectorAll("[data-bulk-update]").forEach(n=>n.addEventListener("click",()=>{const c=i[Number(n.dataset.bulkUpdate)];c&&Ua(n,c)})),e.querySelectorAll("[data-bulk-edit-note]").forEach(n=>n.addEventListener("click",async()=>{const c=d.bulkForm;if(!c)return;const b=await Me({text:c.noteText,style:c.noteStyle,imageUrl:c.noteImageUrl});b&&(c.noteText=b.text,c.noteStyle=b.clearImage?null:b.style,c.noteImageBlob=b.imageBlob,c.scope==="assigned"&&(c.preserveNoteIfUntouched=!1),b.clearImage&&(c.noteImageUrl=""),S())})),e.querySelectorAll("[data-clear-bulk-note]").forEach(n=>n.addEventListener("click",()=>{d.bulkForm&&(Object.assign(d.bulkForm,{noteText:"",noteStyle:null,noteImageUrl:"",noteImageBlob:null}),d.bulkForm.scope==="assigned"&&(d.bulkForm.preserveNoteIfUntouched=!1),S())})),e.querySelectorAll("[data-bulk-cancel]").forEach(n=>n.addEventListener("click",()=>{d.bulkForm=null,S()})),e.querySelectorAll("[data-cancel-form]").forEach(n=>n.addEventListener("click",()=>{d.form=null,S()})),e.querySelectorAll("[data-due-date]").forEach(n=>n.addEventListener("input",()=>{d.form.dueDate=n.value})),e.querySelectorAll("[data-due-time]").forEach(n=>n.addEventListener("input",()=>{d.form.dueTime=n.value})),e.querySelectorAll("[data-work-url]").forEach(n=>n.addEventListener("input",()=>{d.form.workUrl=n.value})),e.querySelectorAll("[data-work-file]").forEach(n=>n.addEventListener("change",()=>{var $;const c=(($=n.files)==null?void 0:$[0])||null;if(c&&c.size>5*1024*1024){n.value="",k("ไฟล์ต้องมีขนาดไม่เกิน 5 MB","warning");return}d.form.file=c,d.form.fileUrl="",d.form.fileSource=c?"upload":"none";const b=e.querySelector("[data-work-file-name]");b&&(b.textContent=c?c.name:"ยังไม่ได้เลือกไฟล์")})),e.querySelectorAll("[data-remove-work-file]").forEach(n=>n.addEventListener("click",()=>{d.form.file=null,d.form.fileUrl="",d.form.fileSource="none",S()})),e.querySelectorAll("[data-confirm-assign]").forEach(n=>n.addEventListener("click",()=>za(n))),e.querySelectorAll("[data-edit-regrade-note]").forEach(n=>n.addEventListener("click",async()=>{const c=d.form;if(!c)return;const b=await Me({text:c.noteText,style:c.noteStyle,imageUrl:c.noteImageUrl});b&&(c.noteText=b.text,c.noteStyle=b.clearImage?null:b.style,c.noteImageBlob=b.imageBlob,b.clearImage&&(c.noteImageUrl=""),S())})),e.querySelectorAll("[data-clear-regrade-note]").forEach(n=>n.addEventListener("click",()=>{d.form&&(Object.assign(d.form,{noteText:"",noteStyle:null,noteImageUrl:"",noteImageBlob:null}),S())})),e.querySelectorAll("[data-cancel-response]").forEach(n=>n.addEventListener("click",()=>Pa(n))),e.querySelectorAll("[data-print-slip]").forEach(n=>n.addEventListener("click",()=>{var b;const c=a.find($=>$.id===Number(n.dataset.printSlip));c&&_e(c,(b=f.teacherRow)==null?void 0:b.full_name)})),e.querySelectorAll("[data-toggle-group]").forEach(n=>n.addEventListener("click",()=>{const[c,b]=n.dataset.toggleGroup.split("|"),$=c==="catalog"?d.catalogExpanded:c==="assigned"?d.assignedExpanded:d.deptHeadExpanded;$.has(b)?$.delete(b):$.add(b),S()})),e.querySelectorAll("[data-depthead-assign]").forEach(n=>n.addEventListener("click",()=>Ra(n))),e.querySelectorAll("[data-depthead-scope]").forEach(n=>n.addEventListener("click",()=>{d.deptHeadShowAll=n.dataset.deptheadScope==="all",S()})),e.querySelectorAll("[data-depthead-toggle-select]").forEach(n=>n.addEventListener("click",()=>{const c=n.dataset.deptheadToggleSelect;d.deptHeadSelectMode.has(c)?d.deptHeadSelectMode.delete(c):d.deptHeadSelectMode.add(c),d.deptHeadSelected[c]=new Set,S()})),e.querySelectorAll("[data-depthead-student-select]").forEach(n=>n.addEventListener("change",()=>{const c=n.dataset.deptheadCode,b=Number(n.dataset.deptheadStudentSelect);d.deptHeadSelected[c]||(d.deptHeadSelected[c]=new Set);const $=d.deptHeadSelected[c];n.checked?$.add(b):$.delete(b),Ia(c)})),e.querySelectorAll("[data-depthead-select-all]").forEach(n=>n.addEventListener("change",()=>{const c=n.dataset.deptheadSelectAll,b=re(d.unassigned).find($=>$.subject_code===c);d.deptHeadSelected[c]=new Set(n.checked?(b==null?void 0:b.items.map($=>$.id))??[]:[]),S()})),e.querySelectorAll("[data-depthead-assign-selected]").forEach(n=>n.addEventListener("click",()=>qa(n))),e.querySelectorAll("[data-group-sem]").forEach(n=>n.addEventListener("change",c=>{const[b,$]=n.dataset.groupSem.split("|"),g=b==="catalog"?d.catalogSemesterFilter:d.assignedSemesterFilter;g[$]=c.target.value,S()})),e.querySelectorAll("[data-goto-sub]").forEach(n=>n.addEventListener("click",()=>{d.subView=n.dataset.gotoSub,S()}));const y=[{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"assigned",icon:"📝",label:"มอบหมายงาน"}];Oe()&&y.push({key:"depthead",icon:"🗂️",label:"จัดการรายวิชา"});const m=d.subView==="respond"?"overview":d.subView;Ee(y,m,n=>{d.subView=n,S()}),ot(y,m,n=>{d.subView=n,S()})}function re(e){const a=new Map;return e.forEach(t=>{a.has(t.subject_code)||a.set(t.subject_code,{subject_code:t.subject_code,subject_name:t.subject_name,category:t.category,items:[]}),a.get(t.subject_code).items.push(t)}),[...a.values()].sort((t,r)=>r.items.length-t.items.length)}function Ta(e,{scope:a,expandedSet:t,semesterFilterMap:r,renderRow:s}){const o=e.subject_code,i=t.has(o),u=[...new Set(e.items.map(h=>h.semester).filter(Boolean))].sort().reverse(),y=r[o]||"all",m=y==="all"?e.items:e.items.filter(h=>h.semester===y);return`
  <div class="rg-card p-4">
    <button data-toggle-group="${a}|${l(o)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${l(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${l(o)}</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${Se(e.category)}">${l(e.category)}</span>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">นักเรียนติด ${e.items.length} คน</span>
        <span class="text-[var(--muted-2)] text-sm inline-block transition-transform" style="transform:rotate(${i?"180deg":"0deg"})">▾</span>
      </div>
    </button>
    ${i?`
    <div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      ${u.length>1?`
      <select data-group-sem="${a}|${l(o)}" class="w-full mb-3 px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
        <option value="all">ทุกภาคเรียน (${e.items.length})</option>
        ${u.map(h=>`<option value="${l(h)}" ${y===h?"selected":""}>${l(h)} (${e.items.filter(w=>w.semester===h).length})</option>`).join("")}
      </select>`:""}
      <div class="flex flex-col gap-2">${m.map(h=>s(h)).join("")}</div>
    </div>`:""}
  </div>`}function ut(e){var t,r,s,o;const a=((t=e.students)==null?void 0:t.full_name)||"-";return`
  <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)]">
    ${M(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${l(a)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${l(((r=e.students)==null?void 0:r.student_code)||"")} · ${l(((s=e.students)==null?void 0:s.main_room)||((o=e.students)==null?void 0:o.religion_room)||"")} · ${l(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(e.status)}">${ee(e.status).label}</span>
  </div>`}function ja(e){var y,m,h,w;const a=((y=e.students)==null?void 0:y.full_name)||"-",t=d.form,r=Number(d.editingResponseId)===Number(e.id),s=t&&Number(t.id)===Number(e.id)&&t.method==="นัดสอบปรับ",o=t&&Number(t.id)===Number(e.id)&&t.method==="ให้งานแก้",i=/^https:\/\//i.test(e.file_url||"")?e.file_url:"",u=Q(e.work_url);return`
  <div class="p-2.5 rounded-xl bg-[var(--surface-2)]">
    <div class="flex items-center gap-2.5">
      ${M(e.students,!1)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${l(a)}</p>
        <p class="text-[10px] text-[var(--muted-2)] truncate">${l(((m=e.students)==null?void 0:m.student_code)||"")} · ${l(((h=e.students)==null?void 0:h.main_room)||((w=e.students)==null?void 0:w.religion_room)||"")} · ${l(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(e.status)}">ตอบรับแล้ว</span>
    </div>
    <div class="mt-2 rounded-lg p-2" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
      <p class="text-[11px] font-bold" style="color:var(--info)">${l(e.method||"")}</p>
      <p class="text-[11px] mt-0.5" style="color:var(--info)">กำหนด: ${l(K(e.due_text))}</p>
      ${it(e)}
    </div>
    <div class="grid ${i||u?"grid-cols-2":"grid-cols-1"} gap-2 mt-2">
      ${i?`<a href="${l(i)}" target="_blank" rel="noopener" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">📎 เปิดไฟล์งาน ↗</a>`:""}
      ${u?`<a href="${l(u)}" target="_blank" rel="noopener noreferrer" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">🔗 เปิดลิงก์งาน ↗</a>`:""}
      <button data-print-slip="${e.id}" class="py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
    </div>
    ${r?!s&&!o?`
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
    ${o?be(e,t,!1):""}
  </div>`}function La(e,a,t){var s,o,i,u;const r=((s=e.students)==null?void 0:s.full_name)||"-";return`
  <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)] cursor-pointer">
    <input type="checkbox" data-depthead-student-select="${e.id}" data-depthead-code="${l(a)}" ${t?"checked":""} class="flex-shrink-0 rounded border-gray-300 text-[var(--primary)]">
    ${M(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${l(r)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${l(((o=e.students)==null?void 0:o.student_code)||"")} · ${l(((i=e.students)==null?void 0:i.main_room)||((u=e.students)==null?void 0:u.religion_room)||"")} · ${l(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(e.status)}">${ee(e.status).label}</span>
  </label>`}function Aa(e,a,t){const r=e.subject_code,s=a.has(r),o=d.deptHeadSelectMode.has(r),i=d.deptHeadSelected[r]||new Set;return`
  <div class="rg-card p-4">
    <button data-toggle-group="depthead|${l(r)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${l(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${l(r)}</p>
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
        <button type="button" data-depthead-toggle-select="${l(r)}" class="flex-shrink-0 text-[10px] font-bold" style="color:var(--primary)">${o?"✕ ยกเลิกเลือกเฉพาะคน":"☑️ เลือกเฉพาะบางคน"}</button>
      </div>
      <div class="flex gap-2 mb-3">
        <input data-depthead-input="${l(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
        <button data-depthead-assign="${l(r)}" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">มอบหมายทั้งหมด</button>
      </div>
      ${o?`
      <label class="flex items-center gap-2 mb-2 px-1 text-[11px] text-[var(--muted-2)] select-none">
        <input type="checkbox" data-depthead-select-all="${l(r)}" data-total="${e.items.length}" class="rounded border-gray-300 text-[var(--primary)]">
        เลือกทั้งหมดในวิชานี้
      </label>`:""}
      <div class="flex flex-col gap-2">${e.items.map(u=>o?La(u,r,i.has(u.id)):ut(u)).join("")}</div>
      ${o?`
      <div data-depthead-selected-bar="${l(r)}" class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex gap-2 ${i.size===0?"opacity-40":""}">
        <input data-depthead-selected-input="${l(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครูสำหรับคนที่เลือก...">
        <button data-depthead-assign-selected="${l(r)}" ${i.size===0?"disabled":""} class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">มอบหมายที่เลือก (<span data-depthead-selected-count="${l(r)}">${i.size}</span>)</button>
      </div>`:""}
    </div>`:""}
  </div>`}function Ia(e){const a=d.deptHeadSelected[e]||new Set,t=document.querySelector(`[data-depthead-selected-bar="${CSS.escape(e)}"]`),r=document.querySelector(`[data-depthead-selected-count="${CSS.escape(e)}"]`),s=document.querySelector(`[data-depthead-assign-selected="${CSS.escape(e)}"]`),o=document.querySelector(`[data-depthead-select-all="${CSS.escape(e)}"]`);if(r&&(r.textContent=String(a.size)),s&&(s.disabled=a.size===0),t&&t.classList.toggle("opacity-40",a.size===0),o){const i=Number(o.dataset.total||0);o.checked=i>0&&a.size===i,o.indeterminate=a.size>0&&a.size<i}}async function Ra(e){const a=e.dataset.deptheadAssign,t=document.querySelector(`[data-depthead-input="${CSS.escape(a)}"]`),r=se(t.value,d.deptHeadTeacherOptions);if(!r){k("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=re(d.unassigned).find(i=>i.subject_code===a);if(await N({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(s==null?void 0:s.subject_name)||a}" ให้นักเรียนที่ยังไม่มีครูทั้ง ${(s==null?void 0:s.items.length)??""} รายการใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const i=await Yt(a,f.teacherRow.category,r.id);k(`มอบหมายครูผู้สอนให้ ${i} รายการเรียบร้อย ✅`,"success"),S()}catch(i){k("มอบหมายไม่สำเร็จ: "+i.message,"error")}}async function qa(e){const a=e.dataset.deptheadAssignSelected,t=document.querySelector(`[data-depthead-selected-input="${CSS.escape(a)}"]`),r=se(t.value,d.deptHeadTeacherOptions);if(!r){k("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=[...d.deptHeadSelected[a]||[]];if(!s.length){k("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}const o=re(d.unassigned).find(u=>u.subject_code===a);if(await N({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(o==null?void 0:o.subject_name)||a}" ให้นักเรียนที่เลือกไว้ ${s.length} คนใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const u=await Jt(s,r.id);k(`มอบหมายครูผู้สอนให้ ${u} คนที่เลือกเรียบร้อย ✅`,"success"),d.deptHeadSelectMode.delete(a),delete d.deptHeadSelected[a],S()}catch(u){k("มอบหมายไม่สำเร็จ: "+u.message,"error")}}function Te(e,a,t){const r=e.reduce((i,u)=>i+u.value,0)||1;let s=0;return`
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
  </div>`}function Ve(e,a,t){const r=e.filter(m=>m.status==="ยังไม่แจ้ง").length,s=e.filter(m=>m.status==="จำนงแล้ว").length,o=e.filter(m=>m.status==="กำลังดำเนินการปรับแก้").length,i=e.filter(m=>m.status==="ปรับแก้สำเร็จ").length,u=e.length,y=u?Math.round(i/u*100):0;return`
  <div class="rg-card p-4 flex-1 min-w-0">
    <p class="text-xs font-bold mb-3" style="color:${t}">${l(a)} (${u})</p>
    ${u?Te([{value:r,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:s,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:o,color:"var(--info)",label:"กำลังดำเนินการ"},{value:i,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${y}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีวิชาค้างในหมวดนี้ 🎉</p>'}
  </div>`}function ie(e,a,t,r){return`<button data-goto-sub="${l(r)}" class="bg-[var(--surface-2)] rounded-xl p-3 text-center hover:opacity-80 active:scale-[0.98] transition cursor-pointer">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${l(a)}</p>
  </button>`}function Na(e,a=!1){var i,u,y,m;const t=((i=e.students)==null?void 0:i.full_name)||"-",r=d.form,s=r&&r.id===e.id&&r.method==="นัดสอบปรับ",o=r&&r.id===e.id&&r.method==="ให้งานแก้";return`
  <div class="${a?"rounded-xl bg-[var(--surface)] p-3 border border-[var(--line-soft)]":"rg-card p-4"}">
    ${a?`<p class="text-[10px] text-[var(--muted-2)] mb-2">ตอบรับรายคน · ${l(t)}</p>`:`<div class="flex gap-2">
      ${M(e.students,!0)}
      <div class="min-w-0">
        <p class="font-bold text-xs text-[var(--ink)]">${l(t)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">(${l(((u=e.students)==null?void 0:u.student_code)||"")} · ${l(((y=e.students)==null?void 0:y.main_room)||((m=e.students)==null?void 0:m.religion_room)||"")})</p>
        <p class="text-xs text-[var(--muted)] mt-0.5">${l(e.subject_name)} (${l(e.subject_code)})</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${Se(e.category)}">${l(e.category)}</span>
      </div>
    </div>`}
    ${Da(e)}
    ${s?be(e,r,!0):""}
    ${o?be(e,r,!1):""}
  </div>`}function We(e){const a=new Map;for(const t of e){const r=[t.subject_code,t.semester,t.category].join("|");a.has(r)||a.set(r,{key:r,subject_code:t.subject_code,subject_name:t.subject_name,semester:t.semester,category:t.category,items:[]}),a.get(r).items.push(t)}return[...a.values()].sort((t,r)=>r.items.length-t.items.length||String(t.subject_name).localeCompare(String(r.subject_name),"th"))}function Ha(e){const a=e.items[0]||{},t=h=>e.items.every(w=>JSON.stringify(w[h]??null)===JSON.stringify(a[h]??null)),r=t("method"),s=t("due_text"),[o="",i=""]=s?String(a.due_text||"").split("T"):[],u=t("file_url"),y=t("work_url"),m=t("teacher_note")&&t("teacher_note_style")&&t("teacher_note_image_url");return{scope:"assigned",key:e.key,ids:new Set(e.items.map(h=>Number(h.id))),method:r&&a.method||"",dueDate:o,dueTime:i,file:null,fileUrl:r&&a.method==="ให้งานแก้"&&u&&a.file_url||"",fileSource:u&&a.file_url?"current":"none",workUrl:r&&a.method==="ให้งานแก้"&&y&&a.work_url||"",preserveFileIfEmpty:!0,preserveNoteIfUntouched:!0,preserveWorkUrlIfEmpty:!0,noteText:m&&a.teacher_note||"",noteStyle:m&&a.teacher_note_style||null,noteImageUrl:m&&a.teacher_note_image_url||"",noteImageBlob:null}}function Fa(e,a){var s;const t=d.respondExpanded.has(e.key),r=((s=d.bulkForm)==null?void 0:s.scope)==="respond"&&d.bulkForm.key===e.key;return`<section class="rg-card p-4">
    <div class="flex items-start gap-2">
      <button data-toggle-response-group="${l(e.key)}" class="flex-1 min-w-0 flex items-start justify-between gap-2 text-left">
        <span class="min-w-0"><span class="block font-bold text-sm text-[var(--ink)] truncate">${l(e.subject_name||e.subject_code)}</span>
        <span class="block text-[10px] text-[var(--muted-2)] mt-0.5">${l(e.subject_code)} · ${l(e.semester)} · ${l(e.category)}</span></span>
        <span class="flex items-center gap-2 shrink-0"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">รอตอบ ${e.items.length} คน</span><span class="text-[var(--muted-2)] text-sm transition-transform" style="transform:rotate(${t?"180deg":"0deg"})">▾</span></span>
      </button>
      <button data-open-bulk-response="${a}" class="shrink-0 px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">${r?"ปิดชุด":"ตอบรับเป็นชุด"}</button>
    </div>
    ${r?mt(e,a):""}
    ${t?`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex flex-col gap-2">${e.items.map(o=>Ba(o)).join("")}</div>`:""}
  </section>`}function Ca(e,a){var s;const t=d.assignedExpanded.has(e.key),r=((s=d.bulkForm)==null?void 0:s.scope)==="assigned"&&d.bulkForm.key===e.key;return`<section class="rg-card p-4">
    <div class="flex items-start gap-2">
      <button data-toggle-assigned-group="${l(e.key)}" class="flex-1 min-w-0 flex items-start justify-between gap-2 text-left">
        <span class="min-w-0"><span class="block font-bold text-sm text-[var(--ink)] truncate">${l(e.subject_name||e.subject_code)}</span>
        <span class="block text-[10px] text-[var(--muted-2)] mt-0.5">${l(e.subject_code)} · ${l(e.semester)} · ${l(e.category)}</span></span>
        <span class="flex items-center gap-2 shrink-0"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">ตอบรับแล้ว ${e.items.length} คน</span><span class="text-[var(--muted-2)] text-sm transition-transform" style="transform:rotate(${t?"180deg":"0deg"})">▾</span></span>
      </button>
      <button data-open-bulk-update="${a}" class="shrink-0 px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">${r?"ปิดชุดแก้ไข":"แก้ไขเป็นชุด"}</button>
    </div>
    ${r?mt(e,a,!0):""}
    ${t?`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex flex-col gap-2">${e.items.map(o=>ja(o)).join("")}</div>`:""}
  </section>`}function Ba(e){var r,s,o,i;const a=Number(e.id),t=d.responseExpandedId===a;return`<div class="rounded-xl bg-[var(--surface-2)] overflow-hidden">
    <button data-toggle-individual-response="${a}" class="w-full flex items-center gap-2.5 p-2.5 text-left">
      ${M(e.students,!1)}
      <span class="min-w-0 flex-1"><span class="block text-xs font-bold text-[var(--ink)] truncate">${l(((r=e.students)==null?void 0:r.full_name)||"-")}</span><span class="block text-[10px] text-[var(--muted-2)] truncate">${l(((s=e.students)==null?void 0:s.student_code)||"")} · ${l(((o=e.students)==null?void 0:o.main_room)||((i=e.students)==null?void 0:i.religion_room)||"")}</span></span>
      <span class="px-2 py-0.5 rounded-full text-[9px] font-bold" style="${te(e.status)}">รอตอบ</span>
      <span class="text-[var(--muted-2)] text-xs transition-transform" style="transform:rotate(${t?"180deg":"0deg"})">▾</span>
    </button>
    ${t?`<div class="px-2.5 pb-2.5">${Na(e,!0)}</div>`:""}
  </div>`}function pt(e,a=!1){const t=a?"data-bulk-edit-note":"data-edit-regrade-note",r=a?"data-clear-bulk-note":"data-clear-regrade-note",s=/^https:\/\//i.test(e.noteImageUrl||"")?e.noteImageUrl:"",o=!!(e.noteText||s||e.noteImageBlob),i=o||a&&e.scope==="assigned"&&e.preserveNoteIfUntouched;return`<div class="mt-3 rounded-xl border border-sky-100 bg-sky-50 p-3">
    <div class="flex items-start justify-between gap-2">
      <div class="min-w-0"><p class="text-xs font-bold text-sky-900">✍️ คำชี้แจงจากครู (ถ้ามี)</p>
        <p class="text-[10px] text-sky-800 mt-0.5">พิมพ์หรือเขียนด้วยลายมือได้ ระบบจะแสดงข้อความในหน้าของนักเรียนและสร้างภาพขนาดเล็กแนบให้</p>
        ${e.noteText?`<p class="mt-2 text-xs text-slate-700 whitespace-pre-wrap line-clamp-3">${l(e.noteText)}</p>`:'<p class="mt-2 text-[10px] text-slate-500">ยังไม่มีคำชี้แจง</p>'}
        ${s?`<a href="${l(s)}" target="_blank" rel="noopener" class="inline-block mt-1 text-[10px] font-bold text-sky-700 underline">เปิดภาพคำชี้แจงเดิม ↗</a>`:""}
        ${e.noteImageBlob?`<span class="block mt-1 text-[10px] font-bold text-emerald-700">พร้อมแนบภาพ JPG ใหม่ · ${(e.noteImageBlob.size/1024).toFixed(1)} KB</span>`:""}
      </div>
      <div class="shrink-0 flex flex-col gap-1.5"><button type="button" ${t} class="rounded-lg bg-white px-3 py-2 text-[10px] font-bold text-sky-800 border border-sky-200">${o?"แก้คำชี้แจง":"เขียนคำชี้แจง"}</button>
        ${i?`<button type="button" ${r} class="rounded-lg px-2 py-1 text-[10px] font-bold text-rose-600">${o?"ลบ":"ล้างคำชี้แจงเดิม"}</button>`:""}</div>
    </div>
  </div>`}function mt(e,a,t=!1){var y,m;const r=t?"assigned":"respond",s=((y=d.bulkForm)==null?void 0:y.scope)===r&&d.bulkForm.key===e.key?d.bulkForm:null;if(!s)return"";const o=(s==null?void 0:s.ids.size)??e.items.length,i=[...new Set(e.items.map(h=>h.file_url).filter(Boolean))],u=e.items.map(h=>{var n,c,b,$;const w=Number(h.id),x=s?s.ids.has(w):!0;return`<label class="flex items-center gap-2 py-2 border-t border-[var(--line)] cursor-pointer">
      <input data-bulk-student-select="${w}" type="checkbox" ${x?"checked":""} ${s?"":"disabled"} class="accent-[var(--primary)]">
      <span class="min-w-0 flex-1"><span class="block text-xs font-bold text-[var(--ink)]">${l(((n=h.students)==null?void 0:n.full_name)||"-")}</span><span class="text-[10px] text-[var(--muted-2)]">${l(((c=h.students)==null?void 0:c.student_code)||"")} · ${l(((b=h.students)==null?void 0:b.main_room)||(($=h.students)==null?void 0:$.religion_room)||"")}</span></span>
    </label>`}).join("");return`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      <div class="text-[10px] text-[var(--muted-2)] mb-2">${t?"เลือกนักเรียนที่ต้องการ แล้วกำหนดวิธี/วันนัด/ไฟล์/คำชี้แจงใหม่ร่วมกัน":"เลือกนักเรียนและกำหนดวิธี/วันนัดร่วมกันสำหรับวิชานี้"}</div>
      <div>
      <div class="flex justify-between items-center mb-1"><span class="text-xs font-bold text-[var(--ink-2)]">${t?"แก้ไขคำตอบให้":"ผู้รับคำตอบ"}: <b data-bulk-selected-count>${o}</b> คน</span><span class="flex gap-3"><button ${t?`data-bulk-select-all-assigned="${a}"`:`data-bulk-select-all="${a}"`} class="text-[10px] font-bold text-[var(--info)]">เลือกทั้งหมด</button><button ${t?`data-bulk-select-none-assigned="${a}"`:`data-bulk-select-none="${a}"`} class="text-[10px] font-bold text-[var(--muted)]">ล้าง</button></span></div>
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
      <p data-bulk-work-file-name class="mt-1 text-[10px] text-[var(--muted-2)] truncate">${l(((m=s.file)==null?void 0:m.name)||(s.fileUrl?"ใช้ไฟล์ที่เลือกไว้":"ยังไม่ได้เลือกไฟล์"))}</p>`}${t&&s.method==="ให้งานแก้"?`<p class="mt-1 text-[10px] text-[var(--muted-2)]">${s.preserveFileIfEmpty?"หากไม่เลือกไฟล์ใหม่ จะเก็บไฟล์เดิมของแต่ละคนไว้":"การบันทึกจะใช้ไฟล์ที่เลือก หรือเอาไฟล์เดิมออก"}</p><button data-bulk-no-file class="mt-1 text-[10px] font-bold text-[var(--bad)]">เอาไฟล์เดิมออกจากคนที่เลือก</button>`:""}${pt(s,!0)}${t&&s.preserveNoteIfUntouched?'<p class="mt-1 text-[10px] text-[var(--muted-2)]">หากไม่แก้คำชี้แจง ระบบจะเก็บคำชี้แจงเดิมของแต่ละคนไว้</p>':""}`:""}
      <div class="flex gap-2 mt-3"><button ${t?`data-bulk-update="${a}"`:`data-bulk-confirm="${a}"`} class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">${t?"บันทึกการแก้ไข":"ตอบรับ"} <span data-bulk-confirm-count>${o}</span> คน</button><button data-bulk-cancel class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิด</button></div>
      </div>
    </div>`}async function Ma(e,a){const t=d.bulkForm;if(!t||t.key!==a.key)return;const r=[...t.ids];if(!r.length){k("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}if(!t.method){k("กรุณาเลือกวิธีแก้ก่อน","warning");return}if(!t.dueDate){k("กรุณาเลือกวันที่ก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){k("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const s=t.method==="ให้งานแก้"?Q(t.workUrl):"";if(t.method==="ให้งานแก้"&&t.workUrl&&!s){k("ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https:// และไม่เกิน 2,000 ตัวอักษร","warning");return}const o=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,i=a.items.filter(y=>r.includes(Number(y.id)));if(await N({title:t.method==="นัดสอบปรับ"?"ยืนยันตอบรับและนัดสอบเป็นชุด":"ยืนยันมอบหมายงานเป็นชุด",message:`${t.method==="นัดสอบปรับ"?"นัดสอบปรับ":"มอบหมายงานแก้"}วิชา "${a.subject_name}" ให้ ${i.length} คน วันที่ ${K(o)}${t.noteText?" พร้อมคำชี้แจงจากครู":""} ใช่หรือไม่?`,confirmText:`ยืนยัน ${i.length} คน`}))try{e.disabled=!0;let y=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const x=c=>String(c||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";y=(await fe(t.file,`regrade/teacher-${f.teacherRow.id}/${x(a.subject_code)}/${x(a.semester)}`)).url}const m=x=>String(x||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";let h=t.noteImageUrl||null;t.noteImageBlob&&(h=await je(t.noteImageBlob,`regrade/teacher-${f.teacherRow.id}/${m(a.subject_code)}/${m(a.semester)}/notes`)),await Vt(r,{method:t.method,dueText:o,fileUrl:y,workUrl:s,teacherNote:t.noteText,teacherNoteStyle:t.noteStyle,teacherNoteImageUrl:h});const w=i.map(x=>({...x,method:t.method,due_text:o,file_url:y||"",work_url:s||"",teacher_note:t.noteText,teacher_note_style:t.noteStyle,teacher_note_image_url:h}));d.bulkForm=null,await _t(w,f.teacherRow.full_name,f.cfg),k(`บันทึกคำตอบและแจ้งนักเรียน ${i.length} คนแล้ว`,"success"),S()}catch(y){e.disabled=!1,k("บันทึกเป็นชุดไม่สำเร็จ: "+y.message,"error")}}async function Ua(e,a){const t=d.bulkForm;if(!t||t.scope!=="assigned"||t.key!==a.key)return;const r=[...t.ids];if(!r.length){k("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}if(!t.method){k("กรุณาเลือกวิธีแก้ก่อน","warning");return}if(!t.dueDate){k("กรุณาเลือกวันที่ก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){k("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const s=t.method==="ให้งานแก้"?Q(t.workUrl):"";if(t.method==="ให้งานแก้"&&t.workUrl&&!s){k("ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https:// และไม่เกิน 2,000 ตัวอักษร","warning");return}const o=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,i=a.items.filter(y=>r.includes(Number(y.id)));if(await N({title:"ยืนยันแก้ไขคำตอบเป็นชุด",message:`ปรับคำตอบวิชา "${a.subject_name}" ให้ ${i.length} คนเป็น${t.method} กำหนด ${K(o)}${t.noteText?" พร้อมคำชี้แจงจากครู":""} ใช่หรือไม่?`,confirmText:`บันทึก ${i.length} คน`}))try{e.disabled=!0;let y=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const w=n=>String(n||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";y=(await fe(t.file,`regrade/teacher-${f.teacherRow.id}/${w(a.subject_code)}/${w(a.semester)}`)).url}let m=t.noteImageUrl||null;const h=w=>String(w||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";t.noteImageBlob&&(m=await je(t.noteImageBlob,`regrade/teacher-${f.teacherRow.id}/${h(a.subject_code)}/${h(a.semester)}/notes`)),await Wt(r,{method:t.method,dueText:o,fileUrl:y,workUrl:s,teacherNote:t.noteText,teacherNoteStyle:t.noteStyle,teacherNoteImageUrl:m,preserveFileIfEmpty:t.method==="ให้งานแก้"&&t.preserveFileIfEmpty,preserveNoteIfUntouched:t.preserveNoteIfUntouched,preserveWorkUrlIfEmpty:t.method==="ให้งานแก้"&&t.preserveWorkUrlIfEmpty}),d.bulkForm=null,k(`บันทึกการแก้ไขให้นักเรียน ${i.length} คนแล้ว`,"success"),S()}catch(y){e.disabled=!1,k("แก้ไขเป็นชุดไม่สำเร็จ: "+y.message,"error")}}function Da(e){const a=d.form;if(a&&a.id===e.id)return"";const t=e.status==="กำลังดำเนินการปรับแก้";return`
    ${t?'<p class="text-[10px] font-bold text-[var(--muted-2)] mt-3">แก้ไขหรือเปลี่ยนคำตอบ (ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ)</p>':""}
    <div class="flex gap-2 mt-${t?"1.5":"3"}">
      <button data-open-exam="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
      <button data-open-work="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
    </div>
    ${t?`<button data-cancel-response="${e.id}" class="mt-2 w-full py-2 rounded-xl text-xs font-bold" style="background:var(--bad-soft);color:var(--bad);border:1px solid var(--bad-soft-line)">✕ ยกเลิกคำตอบนี้</button>`:""}`}function be(e,a,t){var o;const r=!t&&!!a.fileUrl,s=r&&/^https:\/\//i.test(a.fileUrl)?a.fileUrl:"";return`
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
      <p data-work-file-name class="mt-1 text-[10px] text-[var(--muted-2)] truncate">${l(((o=a.file)==null?void 0:o.name)||(r?"หากไม่เลือกไฟล์ใหม่ ระบบจะใช้ไฟล์ที่แสดงอยู่":"ยังไม่ได้เลือกไฟล์"))}</p>`}
      ${pt(a)}
      <div class="flex gap-2 mt-2">
        <button data-confirm-assign="${e.id}" class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">${a.editing?"บันทึกการแก้ไข":t?"ยืนยันนัดสอบ":"ยืนยันมอบหมายงาน"}</button>
        <button data-cancel-form class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิด</button>
      </div>
    </div>`}async function za(e){var y,m;const a=Number(e.dataset.confirmAssign),t=d.form;if(!(t!=null&&t.dueDate)){k("กรุณาเลือกวันที่จากปฏิทินก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){k("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const r=t.method==="ให้งานแก้"?Q(t.workUrl):"";if(t.method==="ให้งานแก้"&&t.workUrl&&!r){k("ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https:// และไม่เกิน 2,000 ตัวอักษร","warning");return}const s=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,o=d.subjects.find(h=>h.id===a),i=t.method==="นัดสอบปรับ"?`นัดสอบปรับวิชา "${o.subject_name}" ให้ ${((y=o.students)==null?void 0:y.full_name)||""} วันที่ ${K(s)} ใช่หรือไม่?`:`มอบหมายงานแก้วิชา "${o.subject_name}" ให้ ${((m=o.students)==null?void 0:m.full_name)||""} กำหนดส่ง ${K(s)}${t.noteText?" พร้อมคำชี้แจงจากครู":""} ใช่หรือไม่?`;if(await N({title:t.editing?"ยืนยันแก้ไขคำตอบ":t.method==="นัดสอบปรับ"?"ยืนยันนัดสอบปรับ":"ยืนยันมอบหมายงานแก้",message:i,confirmText:t.editing?"บันทึกการแก้ไข":"ยืนยัน"}))try{e.disabled=!0;let h=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const n=b=>String(b||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";h=(await fe(t.file,`regrade/teacher-${f.teacherRow.id}/${n(o.subject_code)}/${n(o.semester)}`)).url}let w=t.noteImageUrl||null;const x=n=>String(n||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";t.noteImageBlob&&(w=await je(t.noteImageBlob,`regrade/teacher-${f.teacherRow.id}/${x(o.subject_code)}/${x(o.semester)}/notes`)),await Gt(a,{method:t.method,dueText:s,fileUrl:h,workUrl:r,teacherNote:t.noteText,teacherNoteStyle:t.noteStyle,teacherNoteImageUrl:w}),k(t.editing?"แก้ไขคำตอบแล้ว ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ ✅":"บันทึกการมอบหมายเรียบร้อย ✅","success"),d.form=null,d.editingResponseId=null,S()}catch(h){e.disabled=!1,k("บันทึกไม่สำเร็จ: "+h.message,"error")}}async function je(e,a){const t=new File([e],"teacher-note.jpg",{type:"image/jpeg"});if(t.size>5*1024*1024)throw new Error("ภาพคำชี้แจงมีขนาดเกิน 5 MB กรุณาลดเนื้อหาหรือลายมือ");return(await fe(t,a)).url}async function Pa(e){var s;const a=Number(e.dataset.cancelResponse),t=d.subjects.find(o=>o.id===a);if(await N({title:"ยืนยันยกเลิกคำตอบ",message:`ยกเลิกคำตอบของ ${((s=t==null?void 0:t.students)==null?void 0:s.full_name)||""} วิชา "${(t==null?void 0:t.subject_name)||""}" ใช่หรือไม่? รายการจะกลับไปรอครูตอบรับใหม่`,confirmText:"ยกเลิกคำตอบ"}))try{await Kt(a),d.form=null,d.editingResponseId=null,k("ยกเลิกคำตอบแล้ว รายการกลับไปรอตอบรับใหม่เรียบร้อย","success"),S()}catch(o){k("ยกเลิกคำตอบไม่สำเร็จ: "+o.message,"error")}}const C={view:"close",query:"",gradeCategory:"สามัญ"};async function $e(){le("ฝ่ายทะเบียน","แก้ค้างเก่า — ฝ่ายทะเบียน");const e=document.getElementById("regrade-content");e.innerHTML=`<div class="max-w-3xl mx-auto p-4">
    <div class="${me} mb-4">
      <button data-rview="close" style="${F(C.view==="close")}">📋 รอปิดงาน</button>
      <button data-rview="grade" style="${F(C.view==="grade")}">🎓 เกรดที่ต้องอัปเดต</button>
    </div>
    <div id="regrade-registrar-body"></div>
  </div>`,e.querySelectorAll("[data-rview]").forEach(t=>t.addEventListener("click",()=>{C.view=t.dataset.rview,$e()}));const a=document.getElementById("regrade-registrar-body");if(C.view==="close"){a.innerHTML=`<input id="regrade-registrar-search" class="w-full max-w-sm px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-4" placeholder="ค้นหาชื่อหรือเลขประจำตัวนักเรียน...">
      <div id="regrade-close-list" class="flex flex-col gap-3"></div>`;const t=document.getElementById("regrade-registrar-search");t.value=C.query,t.addEventListener("input",()=>{C.query=t.value,we()}),await we()}else a.innerHTML=`<div class="flex gap-2 mb-4">
        <button data-gcat="สามัญ" style="${V(C.gradeCategory==="สามัญ")}">สามัญ</button>
        <button data-gcat="ศาสนา" style="${V(C.gradeCategory==="ศาสนา","secondary")}">ศาสนา</button>
      </div>
      <div class="overflow-x-auto"><table class="w-full text-xs" id="regrade-grade-table"></table></div>`,a.querySelectorAll("[data-gcat]").forEach(t=>t.addEventListener("click",()=>{C.gradeCategory=t.dataset.gcat,$e()})),await bt()}async function we(){const e=document.getElementById("regrade-close-list");let a;try{a=await Zt(C.query)}catch(t){e.innerHTML=`<div class="text-center text-red-500 text-sm py-8">โหลดไม่สำเร็จ: ${l(t.message)}</div>`;return}e.innerHTML=a.length?a.map(t=>{var s,o,i,u;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`
    <div class="rg-card p-4 flex justify-between items-center gap-3 flex-wrap">
      <div class="flex gap-2.5 items-center min-w-0">
        ${M(t.students,!0)}
        <div class="min-w-0">
          <p class="font-bold text-sm text-[var(--ink)]">${l(r)} <span class="text-[var(--muted-2)] font-normal">(${l(((o=t.students)==null?void 0:o.student_code)||"")} · ${l(((i=t.students)==null?void 0:i.main_room)||((u=t.students)==null?void 0:u.religion_room)||"")})</span></p>
          <p class="text-xs text-[var(--muted)] mt-0.5">${l(t.subject_name)} (${l(t.subject_code)}) · ${l(t.method||"")} — กำหนด ${l(K(t.due_text))}</p>
          <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${Se(t.category)}">${l(t.category)}</span>
        </div>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button data-print-slip="${t.id}" class="px-3 py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
        <button data-closeout="${t.id}" data-name="${l(r)}" data-subject="${l(t.subject_name)}"
          class="px-4 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">✓ ปิดงาน (ปรับแก้สำเร็จ)</button>
      </div>
    </div>`}).join(""):'<div class="text-center text-[var(--muted-2)] text-sm py-12">📭 ไม่พบรายการที่รอปิดงาน</div>',e.querySelectorAll("[data-print-slip]").forEach(t=>t.addEventListener("click",()=>{const r=a.find(s=>s.id===Number(t.dataset.printSlip));r&&_e(r)})),e.querySelectorAll("[data-closeout]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.closeout);if(await N({title:"ยืนยันปิดงาน",message:`ยืนยันบันทึกว่า ${t.dataset.name} ปรับแก้วิชา "${t.dataset.subject}" สำเร็จแล้วใช่หรือไม่? สถานะจะเปลี่ยนเป็น "ปรับแก้สำเร็จ" ทันที`,confirmText:"ยืนยันปิดงาน"}))try{await Xt(r),k("ปิดงานเรียบร้อย ✅","success"),await we()}catch(o){k("ไม่สำเร็จ: "+o.message,"error")}}))}async function bt(){const e=document.getElementById("regrade-grade-table");let a;try{a=await Qt(C.gradeCategory)}catch(t){e.innerHTML=`<tr><td class="text-red-500 text-sm py-8 text-center">โหลดไม่สำเร็จ: ${l(t.message)}</td></tr>`;return}e.innerHTML=`
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">รายวิชา</th><th class="py-2 px-2">ครูผู้สอน</th><th class="py-2 px-2">สถานะเกรด</th><th class="py-2 px-2 text-right">จัดการ</th>
    </tr></thead>
    <tbody>${a.length?a.map(t=>{var s,o,i;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`<tr class="border-b border-[var(--line-soft)]">
        <td class="py-2 px-2"><div class="flex items-center gap-2">${M(t.students,!0)}<div><p class="font-bold text-[var(--ink)]">${l(r)}</p><p class="text-[10px] text-[var(--muted-2)]">(${l(((o=t.students)==null?void 0:o.student_code)||"")})</p></div></div></td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${l(t.subject_name)} (${l(t.subject_code)})</td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${l(((i=t.teachers)==null?void 0:i.full_name)||"-")}</td>
        <td class="py-2 px-2">${t.grade_entered?'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok);border:1px solid var(--ok-soft-line)">อัปเดตแล้ว ✓</span>':'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">รอกรอกเกรด</span>'}</td>
        <td class="py-2 px-2 text-right">${t.grade_entered?"":`<button data-mark-entered="${t.id}" data-name="${l(r)}" data-subject="${l(t.subject_name)}" class="px-3 py-1.5 rounded-lg text-white text-[11px] font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">กรอกข้อมูลแล้ว</button>`}</td>
      </tr>`}).join(""):'<tr><td colspan="5" class="text-center text-[var(--muted-2)] text-sm py-10">ไม่มีรายการในหมวดนี้</td></tr>'}</tbody>`,e.querySelectorAll("[data-mark-entered]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.markEntered);if(await N({title:"ยืนยันกรอกข้อมูลเกรดแล้ว",message:`ยืนยันว่าได้นำเกรดของ ${t.dataset.name} วิชา "${t.dataset.subject}" ไปกรอกในระบบเกรด (แยกต่างหาก) เรียบร้อยแล้วใช่หรือไม่?`,confirmText:"ยืนยัน"}))try{await ea(r),k("บันทึกแล้ว ✅","success"),await bt()}catch(o){k("ไม่สำเร็จ: "+o.message,"error")}}))}const p={categoryTab:"all",drilldown:null,view:"overview",overviewTab:"summary",teacherSort:{key:"pending",dir:"desc"},classLevels:null,attnLevelKey:"",attnRoom:"",attnRooms:[],browseCategory:"สามัญ",browseLevel:"",browseRoomsCache:[],classroomSortDesc:!0,expandedRooms:new Set,roomStudents:{},expandedStudents:new Set,studentSubjects:{}},H=e=>e.reduce((a,t)=>a+Number(t.cnt),0);function Oa(e,a){const t=a.dir==="asc"?1:-1;return[...e].sort((r,s)=>{const o=r[a.key],i=s[a.key];return typeof o=="string"?o.localeCompare(i,"th")*t:(o-i)*t})}function Va(e,a){return e.key===a?e.dir==="asc"?" ▲":" ▼":""}async function ft(){return p.classLevels||(p.classLevels=await Xe()),p.classLevels}async function Le(){le("ผู้บริหาร","ภาพรวมทั้งโรงเรียน — บอร์ดผู้บริหาร");const e=document.getElementById("regrade-content");e.innerHTML=`
    <div class="w-full p-4 md:p-6">
      <div class="${me} mb-4">
        <button data-dview="overview" style="${F(p.view==="overview")}">📊 ภาพรวม</button>
        <button data-dview="students" style="${F(p.view==="students")}">🎓 รายชื่อนักเรียน</button>
      </div>
      <div id="regrade-dashboard-body"></div>
    </div>`,e.querySelectorAll("[data-dview]").forEach(t=>t.addEventListener("click",()=>{p.view=t.dataset.dview,Le()}));const a=document.getElementById("regrade-dashboard-body");p.view==="students"?await gt(a):await ue(a)}async function ue(e){let a;try{a=await ta()}catch(g){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(g.message)}</div>`;return}const t=p.categoryTab==="all"?a:a.filter(g=>g.category===p.categoryTab),r=H(t),s=H(t.filter(g=>g.status==="ยังไม่แจ้ง")),o=H(t.filter(g=>g.status==="จำนงแล้ว")),i=H(t.filter(g=>g.status==="กำลังดำเนินการปรับแก้")),u=H(t.filter(g=>g.status==="ปรับแก้สำเร็จ")),y=o+i,m={};t.forEach(g=>{var E;(m[E=g.teacher_name]??(m[E]={dept:g.teacher_dept||"-",list:[]})).list.push(g)});const h=Oa(Object.entries(m).map(([g,E])=>({name:g,dept:E.dept,total:H(E.list),pending:H(E.list.filter(L=>L.status==="จำนงแล้ว")),assigned:H(E.list.filter(L=>L.status==="กำลังดำเนินการปรับแก้")),done:H(E.list.filter(L=>L.status==="ปรับแก้สำเร็จ"))})),p.teacherSort),w=H(a.filter(g=>g.category==="สามัญ")),x=H(a.filter(g=>g.category==="ศาสนา")),n=`
    <div class="${me}">
      <button data-otab="summary" style="${F(p.overviewTab==="summary")}">📊 สรุปตัวเลข</button>
      <button data-otab="teachers" style="${F(p.overviewTab==="teachers")}">👩‍🏫 รายครูผู้สอน</button>
      <button data-otab="attention" style="${F(p.overviewTab==="attention")}">🎯 นักเรียนที่ต้องติดตาม</button>
    </div>`,c=`
    <div class="${me}">
      <button data-dcat="all" style="${F(p.categoryTab==="all")}">📊 ทั้งหมด (${a.length})</button>
      <button data-dcat="สามัญ" style="${F(p.categoryTab==="สามัญ")}">📘 สามัญ (${w})</button>
      <button data-dcat="ศาสนา" style="${F(p.categoryTab==="ศาสนา","secondary")}">🕌 ศาสนา (${x})</button>
    </div>`,b=`
    <div class="flex items-center justify-between gap-3 mb-4 flex-wrap">
      ${n}
      ${p.overviewTab!=="attention"?c:""}
    </div>`;let $="";if(p.overviewTab==="teachers"){const g=(E,L,T="")=>`<th class="py-2 px-2 cursor-pointer select-none hover:text-[var(--ink-2)] ${T}" data-sort-key="${L}">${l(E)}${Va(p.teacherSort,L)}</th>`;$=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">ความคืบหน้าแยกรายครูผู้สอน</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">คลิกหัวคอลัมน์เพื่อเรียงจากมาก↔น้อย หรือ ก↔ฮ</p>
        <div class="overflow-x-auto"><table class="w-full text-xs">
          <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
            ${g("ครูผู้สอน","name")}${g("กลุ่มสาระ","dept")}${g("ทั้งหมด","total","text-center")}${g("รอตอบรับ","pending","text-center")}${g("มอบหมายแล้ว","assigned","text-center")}${g("สำเร็จ","done","text-center")}
          </tr></thead>
          <tbody>${h.map(E=>`<tr class="border-b border-[var(--line-soft)]">
            <td class="py-2 px-2 font-bold text-[var(--ink-2)]">${l(E.name)}</td>
            <td class="py-2 px-2 text-[var(--muted)]">${l(E.dept)}</td>
            <td class="py-2 px-2 text-center text-[var(--muted)]">${E.total}</td>
            <td class="py-2 px-2 text-center">${E.pending>0?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">${E.pending}</span>`:E.pending}</td>
            <td class="py-2 px-2 text-center" style="color:var(--info)">${E.assigned}</td>
            <td class="py-2 px-2 text-center" style="color:var(--ok)">${E.done}</td>
          </tr>`).join("")}</tbody>
        </table></div>
      </div>`}else if(p.overviewTab==="attention"){let g;try{g=await ft()}catch{g=[]}$=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">นักเรียนที่จำเป็นต้องติดตาม</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">เรียงจากคนที่มีรายวิชาค้างมากที่สุดก่อน (สูงสุด 20 คน)</p>
        <div class="flex gap-2 mb-3 flex-wrap">
          <select id="regrade-attn-level" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">${'<option value="">ทุกระดับชั้น</option>'+["สามัญ","ศาสนา"].map(L=>{const T=g.filter(I=>I.category===L);return T.length?`<optgroup label="${L}">${T.map(I=>`<option value="${L}|${l(I.class_level)}" ${p.attnLevelKey===`${L}|${I.class_level}`?"selected":""}>${l(I.class_level)}</option>`).join("")}</optgroup>`:""}).join("")}</select>
          <select id="regrade-attn-room" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" ${p.attnLevelKey?"":"disabled"}>
            <option value="">ทุกห้อง</option>
            ${p.attnRooms.map(L=>`<option value="${l(L)}" ${p.attnRoom===L?"selected":""}>${l(L)}</option>`).join("")}
          </select>
        </div>
        <div id="regrade-attn-list" class="overflow-x-auto"></div>
      </div>`}else{const g=r?Math.round(u/r*100):0;$=`
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สัดส่วนสถานะ</p>
        ${r?Te([{value:s,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:o,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:i,color:"var(--info)",label:"กำลังดำเนินการ"},{value:u,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${g}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีข้อมูล</p>'}
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <button data-drill="all" class="rg-card p-4 text-center">${ce(r,"รายวิชาค้างทั้งหมด","var(--ink)")}</button>
        <button data-drill="requested" class="rg-card p-4 text-center">${ce(y,"จำนงแล้ว","var(--gold-ink)")}</button>
        <button data-drill="assigned" class="rg-card p-4 text-center">${ce(i,"กำลังดำเนินการปรับแก้","var(--info)")}</button>
        <button data-drill="done" class="rg-card p-4 text-center">${ce(u,"ปรับแก้สำเร็จ","var(--ok)")}</button>
      </div>
      <div id="regrade-drilldown"></div>`}e.innerHTML=b+$,e.querySelectorAll("[data-otab]").forEach(g=>g.addEventListener("click",()=>{p.overviewTab=g.dataset.otab,ue(e)})),e.querySelectorAll("[data-sort-key]").forEach(g=>g.addEventListener("click",()=>{const E=g.dataset.sortKey;p.teacherSort.key===E?p.teacherSort.dir=p.teacherSort.dir==="asc"?"desc":"asc":(p.teacherSort.key=E,p.teacherSort.dir=E==="name"||E==="dept"?"asc":"desc"),ue(e)})),e.querySelectorAll("[data-dcat]").forEach(g=>g.addEventListener("click",()=>{p.categoryTab=g.dataset.dcat,p.drilldown=null,Le()})),p.overviewTab==="summary"&&(e.querySelectorAll("[data-drill]").forEach(g=>g.addEventListener("click",()=>{p.drilldown=g.dataset.drill,Ye(t)})),p.drilldown&&Ye(t)),p.overviewTab==="attention"&&(document.getElementById("regrade-attn-level").addEventListener("change",async g=>{if(p.attnLevelKey=g.target.value,p.attnRoom="",p.attnRooms=[],p.attnLevelKey){const[E,L]=p.attnLevelKey.split("|");try{p.attnRooms=(await Qe(E,L)).map(T=>T.room)}catch{p.attnRooms=[]}}ue(e)}),document.getElementById("regrade-attn-room").addEventListener("change",g=>{p.attnRoom=g.target.value,Ge()}),Ge())}async function Ge(){const e=document.getElementById("regrade-attn-list");if(!e)return;e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';const[a,t]=p.attnLevelKey?p.attnLevelKey.split("|"):[null,null];let r;try{r=await sa({category:a,classLevel:t,room:p.attnRoom||null,limit:20})}catch(s){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${l(s.message)}</p>`;return}if(!r.length){e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-8 text-center">ไม่มีนักเรียนที่ต้องติดตามในเงื่อนไขนี้ 🎉</p>';return}e.innerHTML=`<table class="w-full text-xs">
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">ห้อง</th>
      <th class="py-2 px-2 text-center">ค้าง</th><th class="py-2 px-2 text-center">จำนงแล้ว</th><th class="py-2 px-2 text-center">สำเร็จ</th>
    </tr></thead>
    <tbody>${r.map(s=>`<tr class="border-b border-[var(--line-soft)]">
      <td class="py-2 px-2"><div class="flex items-center gap-2">${M(s,!1)}<div><p class="font-bold text-[var(--ink)]">${l(s.full_name)}</p><p class="text-[10px] text-[var(--muted-2)]">${l(s.student_code||"")}</p></div></div></td>
      <td class="py-2 px-2 text-[var(--muted)]">${l((s.category==="ศาสนา"?s.religion_room:s.main_room)||"-")}</td>
      <td class="py-2 px-2 text-center font-bold" style="color:var(--bad)">${s.not_yet}</td>
      <td class="py-2 px-2 text-center" style="color:var(--gold-ink)">${s.requested}</td>
      <td class="py-2 px-2 text-center" style="color:var(--ok)">${s.done}</td>
    </tr>`).join("")}</tbody>
  </table>`}function ce(e,a,t){return`<p class="text-2xl font-extrabold" style="color:${t}">${e}</p><p class="text-[10px] text-[var(--muted-2)] mt-1">${l(a)}</p>`}async function gt(e){let a;try{a=await ft()}catch{a=[]}const t=a.filter(r=>r.category===p.browseCategory);e.innerHTML=`
    <div class="flex gap-2 mb-4">
      <button data-bcat="สามัญ" style="${V(p.browseCategory==="สามัญ")}">📘 สามัญ</button>
      <button data-bcat="ศาสนา" style="${V(p.browseCategory==="ศาสนา","secondary")}">🕌 ศาสนา</button>
    </div>
    <select id="regrade-browse-level" class="w-full max-w-xs px-3 py-2 rounded-lg border border-[var(--line)] text-sm bg-[var(--surface)] mb-4">
      <option value="">— เลือกระดับชั้น —</option>
      ${t.map(r=>`<option value="${l(r.class_level)}" ${p.browseLevel===r.class_level?"selected":""}>${l(r.class_level)}</option>`).join("")}
    </select>
    <div id="regrade-browse-rooms" class="flex flex-col gap-3"></div>`,e.querySelectorAll("[data-bcat]").forEach(r=>r.addEventListener("click",()=>{p.browseCategory=r.dataset.bcat,p.browseLevel="",p.browseRoomsCache=[],p.expandedRooms.clear(),p.roomStudents={},p.expandedStudents.clear(),p.studentSubjects={},gt(e)})),document.getElementById("regrade-browse-level").addEventListener("change",r=>{p.browseLevel=r.target.value,p.expandedRooms.clear(),p.roomStudents={},p.expandedStudents.clear(),p.studentSubjects={},Ke()}),Ke()}async function Ke(){const e=document.getElementById("regrade-browse-rooms");if(e){if(!p.browseLevel){p.browseRoomsCache=[],e.innerHTML='<div class="text-center py-12 text-[var(--muted-2)] text-sm">เลือกระดับชั้นเพื่อดูรายชื่อห้องเรียน</div>';return}e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';try{p.browseRoomsCache=await Qe(p.browseCategory,p.browseLevel)}catch(a){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${l(a.message)}</p>`;return}z()}}function z(){const e=document.getElementById("regrade-browse-rooms");e&&(e.innerHTML=p.browseRoomsCache.length?p.browseRoomsCache.map(a=>Wa(a)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่พบห้องเรียนที่มีวิชาค้างในระดับชั้นนี้ 🎉</div>',Ka(e))}function xt(e){const a=p.classroomSortDesc?-1:1;return[...e].sort((t,r)=>(t.not_yet-r.not_yet)*a)}function Wa(e){const a=p.expandedRooms.has(e.room),t=p.roomStudents[e.room],r=t?xt(t):null;return`
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
      ${r?r.length?r.map(s=>Ga(s)).join(""):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีข้อมูลนักเรียน</p>':'<p class="text-center text-xs text-[var(--muted-2)] py-4">กำลังโหลด...</p>'}
    </div>`:""}
  </div>`}function Ga(e){const a=p.expandedStudents.has(e.student_id),t=p.studentSubjects[e.student_id];return`
  <div class="rounded-xl bg-[var(--surface-2)] overflow-hidden">
    <button data-toggle-student="${e.student_id}" class="w-full flex items-center gap-2.5 p-2.5 text-left">
      ${M(e,!1)}
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
  </div>`}function Ka(e){e.querySelectorAll("[data-toggle-room]").forEach(a=>a.addEventListener("click",async()=>{const t=a.dataset.toggleRoom;if(p.expandedRooms.has(t))p.expandedRooms.delete(t),z();else if(p.expandedRooms.add(t),z(),!p.roomStudents[t]){try{p.roomStudents[t]=await et(p.browseCategory,t)}catch{p.roomStudents[t]=[]}z()}})),e.querySelectorAll("[data-toggle-student]").forEach(a=>a.addEventListener("click",async()=>{const t=Number(a.dataset.toggleStudent);if(p.expandedStudents.has(t))p.expandedStudents.delete(t),z();else if(p.expandedStudents.add(t),z(),!p.studentSubjects[t]){try{p.studentSubjects[t]=await tt(t)}catch{p.studentSubjects[t]=[]}z()}})),e.querySelectorAll("[data-toggle-sort]").forEach(a=>a.addEventListener("click",()=>{p.classroomSortDesc=!p.classroomSortDesc,z()})),e.querySelectorAll("[data-print-room]").forEach(a=>a.addEventListener("click",()=>Ja(a.dataset.printRoom))),e.querySelectorAll("[data-print-student]").forEach(a=>a.addEventListener("click",()=>Za(Number(a.dataset.printStudent))))}const Ya=`
  body{font-family:'Sarabun',sans-serif;padding:24px;color:#1f2937;}
  h1{font-size:18px;margin-bottom:4px;}
  p.sub{color:#666;font-size:12px;margin-bottom:16px;}
  table{width:100%;border-collapse:collapse;font-size:13px;}
  th,td{border:1px solid #ccc;padding:6px 8px;text-align:left;}
  th{background:#f3f4f6;}
  @media print { body{padding:0;} }`;function vt(e,a){const t=`<!doctype html><html><head><meta charset="utf-8"><title>${l(e)}</title><style>${Ya}</style></head><body>${a}</body></html>`;da(t,{autoprint:!0})}async function Ja(e){let a=p.roomStudents[e];if(!a)try{a=await et(p.browseCategory,e)}catch(r){k("โหลดข้อมูลไม่สำเร็จ: "+r.message,"error");return}a=xt(a);const t=a.map((r,s)=>`<tr>
    <td>${s+1}</td><td style="text-align:center">${l(r.student_code||"")}</td><td>${l(r.full_name)}</td>
    <td style="text-align:center">${r.not_yet}</td><td style="text-align:center">${r.requested}</td><td style="text-align:center">${r.done}</td>
  </tr>`).join("");vt(`รายชื่อห้อง ${e}`,`
    <h1>รายชื่อนักเรียนที่มีวิชาค้าง — ห้อง ${l(e)}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} คน · เรียงตาม${p.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</p>
    <table><thead><tr><th>#</th><th style="text-align:center">เลขประจำตัว</th><th>ชื่อ-สกุล</th><th>ค้าง</th><th>จำนงแล้ว</th><th>สำเร็จ</th></tr></thead>
    <tbody>${t}</tbody></table>`)}async function Za(e){var o;let a=p.studentSubjects[e],t=null;for(const i in p.roomStudents){const u=(o=p.roomStudents[i])==null?void 0:o.find(y=>y.student_id===e);if(u){t=u;break}}if(!a)try{a=await tt(e)}catch(i){k("โหลดข้อมูลไม่สำเร็จ: "+i.message,"error");return}const r=a.map((i,u)=>`<tr>
    <td>${u+1}</td><td>${l(i.subject_name)}</td><td>${l(i.subject_code)}</td>
    <td>${l(i.category)}</td><td>${l(i.semester)}</td><td>${l(i.teacher_name)}</td><td>${l(ee(i.status).label)}</td>
  </tr>`).join(""),s=(t==null?void 0:t.full_name)||"-";vt(`รายวิชาค้าง ${s}`,`
    <h1>รายวิชาที่ค้างของ ${l(s)}${t!=null&&t.student_code?` (${l(t.student_code)})`:""}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} วิชา</p>
    <table><thead><tr><th>#</th><th>รายวิชา</th><th>รหัสวิชา</th><th>หมวด</th><th>ภาคเรียน</th><th>ครูผู้สอน</th><th>สถานะ</th></tr></thead>
    <tbody>${r}</tbody></table>`)}function Ye(e){const a=document.getElementById("regrade-drilldown");if(!p.drilldown){a.innerHTML="";return}const t={all:"รายวิชาค้างทั้งหมด",requested:"จำนงแล้ว",assigned:"กำลังดำเนินการปรับแก้",done:"ปรับแก้สำเร็จ"};let r=[];p.drilldown==="all"?r=e:p.drilldown==="requested"?r=e.filter(o=>o.status==="จำนงแล้ว"||o.status==="กำลังดำเนินการปรับแก้"):p.drilldown==="assigned"?r=e.filter(o=>o.status==="กำลังดำเนินการปรับแก้"):p.drilldown==="done"&&(r=e.filter(o=>o.status==="ปรับแก้สำเร็จ"));const s=r.reduce((o,i)=>(o[i.class_level||"-"]=(o[i.class_level||"-"]||0)+Number(i.cnt),o),{});a.innerHTML=`<div class="rg-card p-4 mb-4">
    <div class="flex justify-between items-center mb-3">
      <p class="text-xs font-bold text-[var(--ink-2)]">รายละเอียด: ${l(t[p.drilldown])}</p>
      <button id="regrade-drill-close" class="w-6 h-6 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-xs">✕</button>
    </div>
    <p class="text-xs text-[var(--muted-2)]">${H(r)} รายการ</p>
    <p class="text-[11px] text-[var(--muted)] mt-2">แยกตามชั้น: ${Object.entries(s).map(([o,i])=>`${l(o)} (${i})`).join(", ")||"-"}</p>
  </div>`,document.getElementById("regrade-drill-close").addEventListener("click",()=>{p.drilldown=null,a.innerHTML=""})}const P={activeTab:"general"};function Z(e,a,t){return`<button type="button" data-settings-tab="${e}" class="flex-shrink-0" style="${F(t)}">${l(a)}</button>`}function Xa(e,a,t){return`<button type="button" data-level-chip="${l(e)}" data-on="${t?"1":"0"}" class="px-2.5 py-1 rounded-full text-[11px] font-bold" style="${t?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}">${l(a)}</button>`}function Je(e,a){P.activeTab=a,e.querySelectorAll("[data-settings-group]").forEach(t=>t.classList.toggle("hidden",t.dataset.settingsGroup!==a)),e.querySelectorAll("[data-settings-tab]").forEach(t=>{t.style.cssText=F(t.dataset.settingsTab===a)+"flex-shrink:0;"})}async function U(){var L,T,I,D,ae,oe;le("ตั้งค่าระบบ",`⚙️ ตั้งค่า${f.cfg.system_name||"แก้ค้างเก่า"}`);const e=document.getElementById("regrade-content");let a,t,r,s,o,i,u;try{[a,t,r,s,o,i,u]=await Promise.all([It(),Rt(),qt(),Ze(),Xe(),na(),Nt()])}catch(v){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(v.message)}</div>`;return}const y=new Map(s.map(v=>[v.profile_id,v])),m=f.cfg,h=new Set(m.intent_open_levels||[]);e.innerHTML=`
    <div class="max-w-2xl mx-auto p-4 flex flex-col gap-4">

      <div class="flex gap-1 p-1 rounded-full bg-[var(--surface-2)] overflow-x-auto">
        ${Z("general","⚙️ ทั่วไป",P.activeTab==="general")}
        ${Z("intent","📝 การแจ้งจำนง",P.activeTab==="intent")}
        ${Z("theme","🎨 ดีไซน์",P.activeTab==="theme")}
        ${Z("data","📥 ข้อมูล",P.activeTab==="data")}
        ${Z("document","📄 เอกสาร",P.activeTab==="document")}
        ${Z("access","🔐 สิทธิ์การเข้าถึง",P.activeTab==="access")}
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
            ${Y("regrade-set-vis-student",(L=m.visibility)==null?void 0:L.student_menu)}
          </div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้าครู</span>
            ${Y("regrade-set-vis-teacher",(T=m.visibility)==null?void 0:T.teacher_menu)}
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
            ${Y("regrade-set-notice-teacher",((D=m.overview_notice)==null?void 0:D.teacher)!==!1)}
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
          ${["สามัญ","ศาสนา"].map(v=>{const _=o.filter(j=>j.category===v);return _.length?`<p class="text-[11px] font-bold text-[var(--ink-2)] mb-1.5 mt-2">${v==="สามัญ"?"📘":"🕌"} ${l(v)}</p>
            <div class="flex flex-wrap gap-1.5 mb-2">${_.map(j=>Xa(`${j.category}|${j.class_level}`,j.class_level,h.has(`${j.category}|${j.class_level}`))).join("")}</div>`:""}).join("")}
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
            ${Object.entries(yt).map(([v,_])=>`
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
        ${ge.map(({key:v,suffix:_,emoji:j,label:A})=>{var B;const q=(B=m.regrade_slip_template_ids)==null?void 0:B[v];return`
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">${j} เทมเพลตใบสั้น — ${A}</p>
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
          <div class="flex flex-wrap gap-2 mb-3">${a.map(v=>xe(v,"admin",y)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-admin" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-admin" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้ ไม่แก้ตั้งค่า)</p>
          <div class="flex flex-wrap gap-2 mb-3">${r.map(v=>xe(v,"executive",y)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-executive" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-executive" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">เจ้าหน้าที่ฝ่ายทะเบียน (เข้าหน้าปิดงานได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${t.map(v=>xe(v,"registrar",y)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-registrar" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-registrar" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">+ เพิ่ม</button>
          </div>
        </div>
      </div>

      <datalist id="regrade-teacher-datalist">${s.map(v=>`<option value="${l(v.full_name)}${v.teacher_code?` (${l(v.teacher_code)})`:""} · รหัส ${v.id}"></option>`).join("")}</datalist>
    </div>`,Je(e,P.activeTab),e.querySelectorAll("[data-settings-tab]").forEach(v=>v.addEventListener("click",()=>Je(e,v.dataset.settingsTab))),e.querySelectorAll("[data-level-chip]").forEach(v=>v.addEventListener("click",()=>{const _=v.dataset.on!=="1";v.dataset.on=_?"1":"0",v.style.cssText=_?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}));const w=e.querySelector("#admin-regrade-batch-result"),x=e.querySelector("#admin-regrade-preview"),n=e.querySelector("#admin-regrade-submit");let c=null,b=null;const $=(v,_=!1)=>{const j=Array.isArray(v==null?void 0:v.classes)?v.classes:[],A=j.slice(0,30).map(q=>`
      <tr class="border-t border-[var(--line-soft)]">
        <td class="px-2 py-1.5">${l(q.class_name||"-")}</td>
        <td class="px-2 py-1.5">${l(q.subject_code||"-")} ${l(q.subject_name||"")}</td>
        <td class="px-2 py-1.5">${l(q.teacher_name||"-")}</td>
        <td class="px-2 py-1.5 text-right font-bold">${Number(q.failing_count||0)}</td>
      </tr>`).join("");w.innerHTML=`
      <div class="rounded-xl p-3 text-xs" style="background:var(--surface-2);border:1px solid var(--line-soft);">
        <p class="font-bold text-[var(--ink)]">${_?"ส่งข้อมูลเรียบร้อยแล้ว":"ผลการตรวจสอบรายการ"}</p>
        <p class="mt-1 text-[var(--muted)]">ภาคเรียน ${l(v.semester)}/${l(v.academic_year)} · พบห้องที่มีรายการติด ${Number(v.class_count||0)} ห้อง · นักเรียนที่ติดทั้งหมด ${Number(v.failing_count||0)} คน</p>
        <p class="mt-1 text-[var(--muted-2)]">ระบบจะไม่นับนักเรียนที่ยังไม่มีคะแนนครบทุกช่อง เว้นแต่มีการกำหนดผลพิเศษไว้แล้ว</p>
        ${_?`<p class="mt-1 font-bold" style="color:var(--ok)">เพิ่มรายการใหม่ ${Number(v.submitted||0)} รายการ</p>`:`<p class="mt-1" style="color:var(--gold-ink)">รายการที่มีอยู่แล้ว ${Number(v.existing_count||0)} รายการ จะไม่ถูกสร้างซ้ำ</p>`}
        ${j.length?`<div class="overflow-x-auto mt-3"><table class="w-full text-[11px]"><thead><tr class="text-left text-[var(--muted-2)]"><th class="px-2 py-1">ห้อง</th><th class="px-2 py-1">รายวิชา</th><th class="px-2 py-1">ครูผู้สอน</th><th class="px-2 py-1 text-right">ติด</th></tr></thead><tbody>${A}</tbody></table>${j.length>30?`<p class="text-center text-[10px] text-[var(--muted-2)] mt-2">แสดง 30 จาก ${j.length} ห้อง</p>`:""}</div>`:'<p class="text-center text-[var(--muted-2)] py-3">ไม่พบรายการนักเรียนที่ติดในภาคเรียนนี้</p>'}
      </div>`},g=()=>{var v,_;return{year:Number((v=e.querySelector("#admin-regrade-year"))==null?void 0:v.value),semester:Number((_=e.querySelector("#admin-regrade-semester"))==null?void 0:_.value)}},E=()=>{c=null,b=null,n==null||n.classList.add("hidden")};(ae=e.querySelector("#admin-regrade-year"))==null||ae.addEventListener("input",E),(oe=e.querySelector("#admin-regrade-semester"))==null||oe.addEventListener("change",E),x==null||x.addEventListener("click",async()=>{const{year:v,semester:_}=g();if(!Number.isInteger(v)||v<2500||![1,2].includes(_)){k("กรุณาเลือกปีการศึกษาและภาคเรียนให้ถูกต้อง","warning");return}x.disabled=!0,x.textContent="กำลังตรวจสอบ...";try{c=await He(v,_,!1),b={year:v,semester:_},$(c),n.classList.toggle("hidden",!Number(c.failing_count))}catch(j){k("ตรวจสอบไม่สำเร็จ: "+j.message,"error")}finally{x.disabled=!1,x.textContent="🔎 ตรวจสอบรายการก่อนส่ง"}}),n==null||n.addEventListener("click",async()=>{const{year:v,semester:_}=g();if(!(c!=null&&c.failing_count)||(b==null?void 0:b.year)!==v||(b==null?void 0:b.semester)!==_){k("กรุณาตรวจสอบรายการของภาคเรียนที่เลือกใหม่ก่อนส่ง","warning");return}if(await N({title:"ยืนยันส่งสรุปเกรดทุกห้อง",message:`ส่งนักเรียนที่ติด ${Number(c.failing_count)} คน ของภาคเรียน ${_}/${v} เข้าระบบแก้ค้างเก่าใช่หรือไม่? รายการเดิมจะไม่ถูกสร้างซ้ำ`,confirmText:"ยืนยันส่งทุกห้อง"})){n.disabled=!0,n.textContent="กำลังส่ง...";try{const A=await He(v,_,!0);$(A,!0),k(`ส่งสำเร็จ เพิ่มรายการใหม่ ${Number(A.submitted||0)} รายการ ✅`,"success")}catch(A){k("ส่งข้อมูลไม่สำเร็จ: "+A.message,"error")}finally{n.disabled=!1,n.textContent="📤 ยืนยันส่งทุกห้อง"}}}),e.querySelectorAll("[data-remove-admin]").forEach(v=>v.addEventListener("click",async()=>{if(await N({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้ดูแลระบบของ "${v.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await Ht(v.dataset.removeAdmin),k("ถอดสิทธิ์แล้ว","success"),U()}catch(j){k(j.message,"error")}})),e.querySelectorAll("[data-remove-registrar]").forEach(v=>v.addEventListener("click",async()=>{if(await N({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์เจ้าหน้าที่ทะเบียนของ "${v.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await Ft(v.dataset.removeRegistrar),k("ถอดสิทธิ์แล้ว","success"),U()}catch(j){k(j.message,"error")}})),e.querySelectorAll("[data-remove-executive]").forEach(v=>v.addEventListener("click",async()=>{if(await N({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้บริหารของ "${v.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await Ct(v.dataset.removeExecutive),k("ถอดสิทธิ์แล้ว","success"),U()}catch(j){k(j.message,"error")}})),document.getElementById("regrade-add-admin").addEventListener("click",async()=>{const v=document.getElementById("regrade-new-admin"),_=se(v.value,s);if(!_){k("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(a.some(A=>A.profile_id===_.profile_id)){k("ครูคนนี้เป็นผู้ดูแลระบบอยู่แล้ว","warning");return}if(await N({title:"ยืนยันเพิ่มผู้ดูแลระบบ",message:`เพิ่ม "${_.full_name}" เป็นผู้ดูแลระบบแก้ค้างเก่าใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await Bt(_.profile_id),v.value="",k("เพิ่มแล้ว ✅","success"),U()}catch(A){k(A.message,"error")}}),document.getElementById("regrade-add-registrar").addEventListener("click",async()=>{const v=document.getElementById("regrade-new-registrar"),_=se(v.value,s);if(!_){k("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(t.some(A=>A.profile_id===_.profile_id)){k("ครูคนนี้เป็นเจ้าหน้าที่ทะเบียนอยู่แล้ว","warning");return}if(await N({title:"ยืนยันเพิ่มเจ้าหน้าที่ทะเบียน",message:`เพิ่ม "${_.full_name}" เป็นเจ้าหน้าที่ฝ่ายทะเบียนใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await Mt(_.profile_id),v.value="",k("เพิ่มแล้ว ✅","success"),U()}catch(A){k(A.message,"error")}}),document.getElementById("regrade-add-executive").addEventListener("click",async()=>{const v=document.getElementById("regrade-new-executive"),_=se(v.value,s);if(!_){k("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(r.some(A=>A.profile_id===_.profile_id)){k("ครูคนนี้เป็นผู้บริหารอยู่แล้ว","warning");return}if(await N({title:"ยืนยันเพิ่มผู้บริหาร",message:`เพิ่ม "${_.full_name}" เป็นผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้) ใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await Ut(_.profile_id),v.value="",k("เพิ่มแล้ว ✅","success"),U()}catch(A){k(A.message,"error")}}),document.getElementById("regrade-set-save").addEventListener("click",async()=>{const v=document.getElementById("regrade-set-live-submit-date").value,_=document.getElementById("regrade-set-live-submit-end").value,j=document.getElementById("regrade-set-menu-end").value;if(j&&new Date(j).getTime()<=Date.now()){k("เวลาปิดเมนูต้องเป็นเวลาในอนาคต","warning");return}if(v&&_&&_<v){k("วันสิ้นสุดการแสดงปุ่มส่งเกรดต้องไม่ก่อนวันเริ่มต้น","warning");return}if(await N({title:"ยืนยันบันทึกการตั้งค่า",message:"บันทึกการตั้งค่าทั้งหมดนี้ใช่หรือไม่? จะมีผลกับทุกคนทันที",confirmText:"บันทึก"}))try{await Fe({intent_open:J(e,"regrade-set-intent"),intent_window_start:document.getElementById("regrade-set-intent-start").value,intent_window_end:document.getElementById("regrade-set-intent-end").value,intent_open_levels:[...e.querySelectorAll('[data-level-chip][data-on="1"]')].map(q=>q.dataset.levelChip),response_window_start:document.getElementById("regrade-set-response-start").value,response_window_end:document.getElementById("regrade-set-response-end").value,live_submit_open_date:document.getElementById("regrade-set-live-submit-date").value,live_submit_close_date:document.getElementById("regrade-set-live-submit-end").value,show_deadline_banner:J(e,"regrade-set-show-deadline"),visibility:{student_menu:J(e,"regrade-set-vis-student"),teacher_menu:J(e,"regrade-set-vis-teacher")},overview_notice:{student:J(e,"regrade-set-notice-student"),teacher:J(e,"regrade-set-notice-teacher")},regrade_menu_end_at:j,primary_color:document.getElementById("regrade-set-primary").value,secondary_color:document.getElementById("regrade-set-secondary").value,gold_color:document.getElementById("regrade-set-gold").value,glass_alpha:Number(document.getElementById("regrade-set-glass-alpha").value),student_announcement:document.getElementById("regrade-set-ann-student").value,teacher_announcement:document.getElementById("regrade-set-ann-teacher").value,system_name:document.getElementById("regrade-set-name").value.trim()||"แก้ค้างเก่า",regrade_slip_template_ids:Object.fromEntries(ge.map(({key:q,suffix:B})=>[q,document.getElementById(`regrade-set-slip-template-${B}`).value||null]))}),k("บันทึกการตั้งค่าเรียบร้อย ✅","success"),f.cfg=await ye(),ht(),U()}catch(q){k("บันทึกไม่สำเร็จ: "+q.message,"error")}}),ge.forEach(({key:v,suffix:_,label:j})=>{document.getElementById(`regrade-slip-design-new-${_}`).addEventListener("click",()=>{const A=document.getElementById(`regrade-slip-new-name-${_}`).value.trim()||`ใบสั้นแก้ค้างเก่า (${j})`;Ce({template:{name:A,type:"custom",layout:ma},previewVariables:De,placeholderTokens:Ue,onSave:async(q,B)=>{var Ie,Re;const W=await la({name:A,type:"custom",presetKey:null,backgroundImageUrl:B,layout:q,createdByTeacherId:((Ie=f.teacherRow)==null?void 0:Ie.id)??null}),$t={...((Re=f.cfg)==null?void 0:Re.regrade_slip_template_ids)||{},[v]:W.id};await Fe({regrade_slip_template_ids:$t}),k(`สร้างเทมเพลต "${j}" และตั้งเป็นค่าที่ใช้แล้ว ✅`,"success"),f.cfg=await ye(),U()}})}),document.getElementById(`regrade-slip-design-edit-${_}`).addEventListener("click",()=>{const A=Number(document.getElementById(`regrade-set-slip-template-${_}`).value);if(!A){k("กรุณาเลือกเทมเพลตก่อน","warning");return}const q=i.find(B=>B.id===A);q&&Ce({template:q,previewVariables:De,placeholderTokens:Ue,onSave:async(B,W)=>{await oa({id:q.id,layout:B,backgroundImageUrl:W}),k("บันทึกดีไซน์แล้ว ✅","success")}})})}),ha(e,["regrade-set-intent","regrade-set-vis-student","regrade-set-vis-teacher","regrade-set-notice-student","regrade-set-notice-teacher","regrade-set-show-deadline"]),tr(e),Qa(e)}const yt={default:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.55,label:"ค่าเริ่มต้น"},dark:{primary:"#701138",secondary:"#043d2d",gold:"#78350f",glassAlpha:.45,label:"เข้ม"},airy:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.25,label:"โปร่งใส"},tint:{primary:"#db2777",secondary:"#059669",gold:"#d97706",glassAlpha:.65,label:"ย้อมสี"}};function Qa(e){const a=e.querySelector("#regrade-set-primary"),t=e.querySelector("#regrade-set-secondary"),r=e.querySelector("#regrade-set-gold"),s=e.querySelector("#regrade-set-glass-alpha"),o=e.querySelector("#regrade-theme-preview"),i=e.querySelector("#regrade-theme-preview-sec"),u=e.querySelector("#regrade-theme-preview-gold"),y=document.documentElement;function m(){o.style.background=a.value,i.style.background=t.value,u.style.background=r.value,y.style.setProperty("--primary",a.value),y.style.setProperty("--secondary",t.value),y.style.setProperty("--gold",r.value),y.style.setProperty("--glass-alpha",s.value)}m(),[a,t,r,s].forEach(h=>h.addEventListener("input",m)),e.querySelectorAll("[data-preset]").forEach(h=>h.addEventListener("click",()=>{const w=yt[h.dataset.preset];w&&(a.value=w.primary,t.value=w.secondary,r.value=w.gold,s.value=w.glassAlpha,m())}))}function er(e){if(!e.length)return'<p class="text-xs text-[var(--muted-2)] text-center py-4">ไม่พบข้อมูลในไฟล์</p>';const a=["student_code","subject_code","subject_name","category","semester","class_level","teacher_code"],t=e.slice(0,10);return`<div class="overflow-x-auto rounded-xl border border-[var(--line)]">
    <table class="w-full text-[11px]">
      <thead class="bg-[var(--surface-2)] text-[var(--muted-2)]"><tr>${a.map(r=>`<th class="px-2 py-1.5 text-left">${r}</th>`).join("")}</tr></thead>
      <tbody>${t.map(r=>`<tr class="border-t border-[var(--line-soft)]">${a.map(s=>`<td class="px-2 py-1.5 text-[var(--ink-2)]">${l(r[s]??"")}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
    ${e.length>10?`<p class="text-center text-[10px] text-[var(--muted-2)] py-1.5">แสดง 10 จาก ${e.length} แถว</p>`:""}
  </div>`}function tr(e){let a=null;const t=e.querySelector("#regrade-csv-file"),r=e.querySelector("#regrade-csv-preview"),s=e.querySelector("#regrade-csv-import-btn"),o=e.querySelector("#regrade-csv-result");t==null||t.addEventListener("change",async()=>{var u;o.innerHTML="";const i=(u=t.files)==null?void 0:u[0];if(!i){a=null,r.innerHTML="",s.classList.add("hidden");return}try{const y=await i.text();a=Et(y),r.innerHTML=er(aa(a)),s.classList.toggle("hidden",a.length===0)}catch(y){r.innerHTML="",k("อ่านไฟล์ CSV ไม่สำเร็จ: "+y.message,"error")}}),s==null||s.addEventListener("click",async()=>{if(!(!(a!=null&&a.length)||!await N({title:"ยืนยันนำเข้าข้อมูล CSV",message:`นำเข้าข้อมูลรายวิชาค้าง ${a.length} แถวเข้าสู่ระบบใช่หรือไม่? แถวที่มีอยู่แล้วในระบบจะถูกข้าม ไม่ทับข้อมูลเดิม`,confirmText:"ยืนยันนำเข้า"}))){s.disabled=!0,s.textContent="กำลังนำเข้า...";try{const u=await ra(a);o.innerHTML=`
        <div class="rounded-xl p-3" style="background:var(--ok-soft);border:1px solid var(--ok-soft-line);color:var(--ok)">
          นำเข้าสำเร็จ ${u.imported} แถว จากทั้งหมด ${u.total} แถว
          ${u.skippedDuplicate?`<br>ข้าม ${u.skippedDuplicate} แถว (มีอยู่แล้วในระบบ)`:""}
          ${u.skippedNoStudent?`<br>ข้าม ${u.skippedNoStudent} แถว (ไม่พบรหัสนักเรียนในระบบ)`:""}
          ${u.skippedInvalid?`<br>ข้าม ${u.skippedInvalid} แถว (ข้อมูลไม่ครบ/หมวดไม่ถูกต้อง)`:""}
          ${u.unmatchedTeacher?`<br>⚠️ ${u.unmatchedTeacher} แถว ไม่พบรหัสครู (นำเข้าแล้วแต่ยังไม่ผูกครูผู้สอน)`:""}
        </div>`,k("นำเข้าข้อมูลเรียบร้อย ✅","success"),a=null,t.value="",r.innerHTML="",s.classList.add("hidden")}catch(u){k("นำเข้าไม่สำเร็จ: "+u.message,"error")}finally{s.disabled=!1,s.textContent="นำเข้าข้อมูล"}}})}function se(e,a){const t=e.trim().match(/· รหัส (\d+)$/);return t?a.find(r=>r.id===Number(t[1]))??null:null}function xe(e,a,t){var i;const r=t==null?void 0:t.get(e.profile_id),s=r?`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`:((i=e.profiles)==null?void 0:i.user_code)||e.profile_id,o=a==="admin"?`data-remove-admin="${l(e.profile_id)}"`:a==="executive"?`data-remove-executive="${l(e.profile_id)}"`:`data-remove-registrar="${l(e.profile_id)}"`;return`<span class="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">
    ${l(s)}
    <button ${o} data-name="${l(s)}" class="w-4 h-4 rounded-full text-[10px]" style="background:var(--primary-soft-line)">×</button>
  </span>`}function ht(){const e=document.documentElement;f.cfg.primary_color&&e.style.setProperty("--primary",f.cfg.primary_color),f.cfg.secondary_color&&e.style.setProperty("--secondary",f.cfg.secondary_color),f.cfg.gold_color&&e.style.setProperty("--gold",f.cfg.gold_color),f.cfg.glass_alpha!=null&&e.style.setProperty("--glass-alpha",f.cfg.glass_alpha)}let Ae=null;function kt(){var a,t;const e=[];return f.role==="student"&&f.studentRow&&((a=f.cfg.visibility)!=null&&a.student_menu||f.isAdmin)&&e.push({key:"student",icon:"🎓",label:"ของฉัน"}),f.role==="teacher"&&f.teacherRow&&((t=f.cfg.visibility)!=null&&t.teacher_menu||f.isAdmin)&&e.push({key:"teacher",icon:"📚",label:"งานสอนของฉัน"}),f.isRegistrar&&e.push({key:"registrar",icon:"📋",label:"ฝ่ายทะเบียน"}),f.isExecutive&&e.push({key:"dashboard",icon:"📊",label:"ผู้บริหาร"}),f.isAdmin&&e.push({key:"settings",icon:"⚙️",label:"ตั้งค่าระบบ"}),e}async function ne(e){Ae=e,document.getElementById("regrade-bottom-tabs").innerHTML="";const a=kt();if(ar(a),rr(a),e==="student")return G();if(e==="teacher")return S();if(e==="registrar")return $e();if(e==="dashboard")return Le();if(e==="settings")return U()}function ar(e){e.length>1?Ee(e,Ae,ne):document.getElementById("regrade-sidebar-nav").innerHTML=""}function rr(e){const a=document.getElementById("regrade-role-switcher");if(a){if(e.length<=1){a.innerHTML="";return}a.innerHTML=`<div class="rg-switcher-bar flex gap-2 overflow-x-auto px-4 py-2 border-b border-[var(--line-soft)]">${e.map(t=>`
    <button data-switch-sec="${t.key}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition"
      style="${Ae===t.key?"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;":"background:var(--surface-2);color:var(--muted);"}">${t.icon} ${l(t.label)}</button>`).join("")}</div>`,a.querySelectorAll("[data-switch-sec]").forEach(t=>t.addEventListener("click",()=>ne(t.dataset.switchSec)))}}function ve(){document.getElementById("regrade-content").innerHTML=`
    <div class="max-w-md mx-auto p-6 text-center text-[var(--muted)]">
      <p class="text-4xl mb-3">🔒</p>
      <p class="text-sm">บัญชีนี้ยังไม่มีสิทธิ์เข้าใช้งานระบบแก้ค้างเก่า</p>
    </div>`}async function sr(){const{data:{session:e}}=await qe.auth.getSession();if(!e){sessionStorage.setItem("regrade-pending-subject",new URLSearchParams(location.search).get("subject")||""),window.location.replace("index.html?next=regrade.html");return}const{data:a}=await qe.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single();f.role=a==null?void 0:a.role;const r={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[f.role]||"index.html",s=document.getElementById("regrade-back-btn-desktop"),o=document.getElementById("regrade-back-btn-mobile");if(window.self!==window.top){const w=x=>{x.preventDefault(),typeof window.parent.closeRegradeModal=="function"?window.parent.closeRegradeModal():window.parent.location.href=r};s.removeAttribute("href"),o.removeAttribute("href"),s.addEventListener("click",w),o.addEventListener("click",w)}else s.href=r,o.href=r;try{f.cfg=await ye();const w=await Tt();f.isAdmin=w.isAdmin||f.role==="admin"||(a==null?void 0:a.is_also_admin)===!0,f.isRegistrar=w.isRegistrar||f.isAdmin,f.isExecutive=w.isExecutive||f.isAdmin}catch(w){document.getElementById("regrade-content").innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดการตั้งค่าไม่สำเร็จ: ${l(w.message)}</div>`;return}if(ht(),f.role==="student"&&(f.studentRow=await jt()),f.role==="teacher"&&(f.teacherRow=await Lt()),f.role==="student"&&!f.studentRow){ve();return}if(f.role==="teacher"&&!f.teacherRow){ve();return}const i=kt();if(!i.length){ve();return}const u=f.isAdmin||f.isExecutive?"dashboard":f.isRegistrar?"registrar":i[0].key;await ne(u);const y=new URLSearchParams(location.search),m=y.get("subject")||sessionStorage.getItem("regrade-pending-subject");if(sessionStorage.removeItem("regrade-pending-subject"),m)if(y.get("action")==="respond"&&f.teacherRow){await ct();const w=d.subjects.find(x=>Number(x.id)===Number(m));w&&w.status==="จำนงแล้ว"?(d.subView="respond",pe(w,"ให้งานแก้"),await ne("teacher")):await Ne(m)}else await Ne(m,{onRespond:async w=>{f.teacherRow&&(d.subView="respond",pe(w,"ให้งานแก้"),await ne("teacher"))}});const h=f.role==="student"?"student":f.teacherRow?"teacher":null;if(h){const w=h==="student"?f.studentRow.id:f.teacherRow.id,x=()=>{document.visibilityState==="visible"&&St(h,w).catch(()=>{})};x();const n=setInterval(x,3e4);document.addEventListener("visibilitychange",x),window.addEventListener("pagehide",()=>{clearInterval(n),document.removeEventListener("visibilitychange",x)},{once:!0})}}sr();
