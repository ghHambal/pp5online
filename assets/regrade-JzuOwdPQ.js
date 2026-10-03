import{s as _e}from"./supabase-BV-W2lsh.js";/* empty css             */import{a as x}from"./ui-BRupvAcB.js";import{p as lt}from"./import-CWvnWIc3.js";import{g as ce,c as ot,a as it,b as ct,d as ut,e as pt,f as mt,h as De,i as Pe,j as gt,r as Se,k as ft,l as vt,m as bt,n as xt,o as yt,p as ht,u as Ee,q as $t,s as wt,t as kt,v as _t,w as St,x as Et,y as Tt,z as Lt,A as jt,B as Rt,C as At,D as Ht,E as Ct,F as qt,G as Oe,H as It,I as Mt,J as Bt,K as Ve,L as ze}from"./regrade-api-DtUo0XvO.js";import{b as Nt,c as Dt,u as Pt,e as Ot,o as Vt}from"./certificate-engine-CN0kp0dY.js";import{o as Te}from"./certificate-editor-CPm5WZt-.js";import{o as zt}from"./print-overlay-BVfxEd6n.js";import{uploadAssignmentFile as Ft}from"./storage-CuUjCgvI.js";const Le=[{token:"{{student_name}}",label:"ชื่อนักเรียน"},{token:"{{student_code}}",label:"รหัสนักเรียน"},{token:"{{room}}",label:"ห้องเรียน"},{token:"{{class_level}}",label:"ชั้น/ระดับ"},{token:"{{category}}",label:"หมวด (สามัญ/ศาสนา)"},{token:"{{subject_name}}",label:"ชื่อรายวิชา"},{token:"{{subject_code}}",label:"รหัสวิชา"},{token:"{{semester}}",label:"ภาคเรียน"},{token:"{{grade_failed_at}}",label:"ผลการเรียนที่ติด (ร/มส/0)"},{token:"{{teacher_name}}",label:"ชื่อครูผู้สอน"},{token:"{{response_method}}",label:"วิธีตอบรับ/วิธีแก้"},{token:"{{due_date}}",label:"วันนัดสอบ/กำหนดส่ง"},{token:"{{file_url}}",label:"ลิงก์ไฟล์งานแก้"}],je={student_name:"ตัวอย่าง ชื่อ-สกุล นักเรียน",student_code:"00000",room:"ม.6/1",class_level:"ม.6",category:"สามัญ",subject_name:"วิชาตัวอย่าง",subject_code:"ว00000",semester:"1/2569",grade_failed_at:"ร",teacher_name:"ครูตัวอย่าง",response_method:"นัดสอบปรับ",due_date:"12 ธ.ค. 2569 เวลา 09:00 น.",file_url:"https://example.com/work"},Ut={orientation:"portrait",background:{type:"flat",color:"#ffffff",cardColor:"#ffffff",borderColor:"#94a3b8",borderWidth:2,borderStyle:"solid"},elements:[{id:"title",text:"ใบมอบหมายงานแก้ค้างเก่า",x:50,y:8,fontSize:22,color:"#1e293b",align:"center",bold:!0},{id:"student",text:"ชื่อ-สกุล: {{student_name}}   รหัส: {{student_code}}   ห้อง: {{room}}",x:8,y:22,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"subject",text:"รายวิชา: {{subject_name}} ({{subject_code}})   ภาคเรียน: {{semester}}",x:8,y:30,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"teacher",text:"ครูผู้สอน: {{teacher_name}}",x:8,y:38,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"issued",text:"ออกให้ ณ วันที่ {{date}}",x:8,y:85,fontSize:11,color:"#64748b",align:"left",bold:!1},{id:"sign",text:"ลายเซ็นครูผู้สอน",x:70,y:92,fontSize:11,color:"#64748b",align:"center",bold:!1,borderTop:!0}]},le=[{key:"สามัญ",suffix:"samai",emoji:"📘",label:"สามัญ"},{key:"ศาสนา",suffix:"religion",emoji:"🕌",label:"ศาสนา"}];async function ge(e,a){var l,u,b,f,w,o,c,h;const t=e.category==="ศาสนา"?"ศาสนา":"สามัญ",r=Number((u=(l=g.cfg)==null?void 0:l.regrade_slip_template_ids)==null?void 0:u[t]);if(!r){x(`ยังไม่ได้ตั้งค่าเทมเพลตใบสั้นสำหรับหมวด "${t}" — ไปตั้งค่าที่แท็บ "เอกสาร" ก่อนครับ`,"warning");return}const s=await Ot(r).catch(()=>null);if(!s){x("ไม่พบเทมเพลตที่ตั้งค่าไว้ อาจถูกลบไปแล้ว","error");return}const n=((b=e.students)==null?void 0:b.main_room)||((f=e.students)==null?void 0:f.religion_room)||"";Vt({layout:s.layout,variables:{student_name:((w=e.students)==null?void 0:w.full_name)??"",student_code:((o=e.students)==null?void 0:o.student_code)??"",room:n,class_level:e.class_level??"",category:e.category??"",subject_name:e.subject_name??"",subject_code:e.subject_code??"",semester:e.semester??"",grade_failed_at:e.grade_failed_at??"",teacher_name:a??((c=e.teachers)==null?void 0:c.full_name)??e.teacher_name_raw??"",response_method:e.method??"",due_date:K(e.due_text),file_url:e.file_url??""},docTitle:`ใบแก้ค้างเก่า ${((h=e.students)==null?void 0:h.full_name)??""}`})}const ue={ว:"SC",อ:"ENG",จ:"ENG",ค:"MATH",ท:"THAI",ส:"SOC",ง:"OCC",ศ:"ART",พ:"HEALTH"};function d(e){return String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a])}function Y(e){const a={ยังไม่แจ้ง:{bg:"#f3f4f6",text:"#6b7280",border:"#e5e7eb",label:"ยังไม่แจ้ง"},จำนงแล้ว:{bg:"var(--gold-soft)",text:"var(--gold-ink)",border:"var(--gold-soft-line)",label:"จำนงแล้ว · รอครูตอบรับ"},กำลังดำเนินการปรับแก้:{bg:"var(--info-soft)",text:"var(--info)",border:"var(--info-soft-line)",label:"กำลังดำเนินการปรับแก้"},ปรับแก้สำเร็จ:{bg:"var(--ok-soft)",text:"var(--ok)",border:"var(--ok-soft-line)",label:"ปรับแก้สำเร็จ ✓"}};return a[e]||a.ยังไม่แจ้ง}const X=e=>{const a=Y(e);return`background:${a.bg};color:${a.text};border:1px solid ${a.border};`},Fe=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function Re(e){if(!e)return null;const a=new Date(e);if(isNaN(a.getTime()))return null;const t=String(a.getHours()).padStart(2,"0"),r=String(a.getMinutes()).padStart(2,"0");return`${a.getDate()} ${Fe[a.getMonth()]} ${a.getFullYear()+543} เวลา ${t}:${r} น.`}function Ue(e){const a=String(e||"").trim();if(!a)return{date:"",time:""};const t=a.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);if(t)return{date:`${t[1]}-${t[2]}-${t[3]}`,time:t[4]?`${t[4]}:${t[5]}`:""};const r=a.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})(?:\s+(\d{1,2}):(\d{2}))?/);if(!r)return{date:"",time:""};let s=Number(r[3]);s<100&&(s+=2500),s>2400&&(s-=543);const n=String(Number(r[2])).padStart(2,"0"),l=String(Number(r[1])).padStart(2,"0");return{date:`${s}-${n}-${l}`,time:r[4]?`${String(Number(r[4])).padStart(2,"0")}:${r[5]}`:""}}function K(e){const a=Ue(e);if(!a.date)return String(e||"-");const[t,r,s]=a.date.split("-").map(Number),n=`${s} ${Fe[r-1]} ${t+543}`;return a.time?`${n} เวลา ${a.time} น.`:n}function We(e,a){const t=Ue(e.due_text);p.form={id:Number(e.id),method:a,dueDate:t.date,dueTime:t.time,fileUrl:a==="ให้งานแก้"&&e.file_url||"",file:null,fileSource:e.file_url?"current":"none",editing:e.status==="กำลังดำเนินการปรับแก้"}}function Wt(e){return p.subjects.filter(a=>Number(a.id)!==Number(e.id)&&Number(a.teacher_id)===Number(e.teacher_id)&&a.subject_code===e.subject_code&&a.semester===e.semester&&a.category===e.category&&/^https:\/\//i.test(a.file_url||"")).sort((a,t)=>new Date(t.assigned_at||t.updated_at||0)-new Date(a.assigned_at||a.updated_at||0))[0]||null}async function Gt(e){if(We(e,"ให้งานแก้"),e.file_url){E();return}const a=Wt(e);if(a){const t=await Xt(e,a);t==="reuse"?(p.form.fileUrl=a.file_url,p.form.fileSource="reuse"):(p.form.fileUrl="",p.form.fileSource=t==="upload"?"upload":"none")}E()}function Ge(e,a,t,r,s,n){const l=Re(e),u=Re(a);return!l&&!u?"":`<div class="rg-card p-4 mb-4" style="border-left:4px solid var(${r})">
    <p class="text-xs font-bold" style="color:var(${r})">🗓 ${d(t)}</p>
    <p class="text-sm font-bold text-[var(--ink)] mt-1">${l?`เริ่ม ${l}`:""}${l&&u?" — ":""}${u?`ถึง ${u}`:""}</p>
    <button data-deadline-cta="${d(n)}" class="mt-3 w-full py-2 rounded-xl text-white font-bold text-xs" style="background:linear-gradient(135deg,var(${r}),var(${r}-dark))">${d(s)} →</button>
  </div>`}const fe=e=>e==="ศาสนา"?"background:var(--secondary-soft);color:var(--secondary-dark);border:1px solid var(--secondary-soft-line);":"background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line);",Kt=["เด็กชาย","เด็กหญิง","ด.ช.","ด.ญ.","นางสาว","น.ส.","นาย","นาง"];function Yt(e){let a=String(e);for(const t of Kt)if(a.startsWith(t)){a=a.slice(t.length).trim();break}return a.charAt(0)||"?"}function Jt(e,a){let t=0;for(let l=0;l<String(e).length;l++)t+=e.charCodeAt(l);const r=[["#eef2ff","#4f46e5"],["#ecfdf5","#059669"],["#fef3c7","#b45309"],["#fce7f3","#be185d"],["#e0f2fe","#0284c7"],["#f3e8ff","#7c3aed"]],[s,n]=r[t%r.length];return a?`width:34px;height:44px;border-radius:8px;background:${s};color:${n};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);`:`width:30px;height:30px;border-radius:9999px;background:${s};color:${n};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0;`}function B(e,a){const t=(e==null?void 0:e.full_name)||"-",r=(e==null?void 0:e.photo_url)||(e==null?void 0:e.image_url);if(!r)return`<div style="${Jt(t,a)}">${Yt(t)}</div>`;const s=a?"width:34px;height:44px;border-radius:8px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);object-fit:cover;":"width:30px;height:30px;border-radius:9999px;flex-shrink:0;object-fit:cover;";return`<img src="${d(r)}" alt="${d(t)}" style="${s}">`}function R({title:e="ยืนยันการดำเนินการ",message:a="",confirmText:t="ยืนยัน",cancelText:r="ยกเลิก"}={}){return new Promise(s=>{var u;(u=document.getElementById("regrade-confirm-modal"))==null||u.remove();const n=document.createElement("div");n.id="regrade-confirm-modal",n.className="fixed inset-0 z-[99999] flex items-center justify-center p-4",n.innerHTML=`
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="rgc-overlay"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark))"></div>
        <div class="px-6 pt-6 pb-5 text-center">
          <h3 class="text-lg font-bold text-gray-900 mb-2">${d(e)}</h3>
          ${a?`<p class="text-sm text-gray-600 leading-relaxed">${d(a)}</p>`:""}
        </div>
        <div class="px-6 pb-6 grid grid-cols-2 gap-3">
          <button id="rgc-cancel" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-[0.97] transition-all">${d(r)}</button>
          <button id="rgc-confirm" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all"
            style="background: linear-gradient(135deg, var(--primary), var(--primary-dark))">${d(t)}</button>
        </div>
      </div>`,document.body.appendChild(n);const l=b=>{n.remove(),s(b)};n.querySelector("#rgc-overlay").addEventListener("click",()=>l(!1)),n.querySelector("#rgc-cancel").addEventListener("click",()=>l(!1)),n.querySelector("#rgc-confirm").addEventListener("click",()=>l(!0))})}function Xt(e,a){return new Promise(t=>{var b;(b=document.getElementById("regrade-reuse-file-modal"))==null||b.remove();const r=document.createElement("div");r.id="regrade-reuse-file-modal",r.className="fixed inset-0 z-[99999] flex items-center justify-center p-4";const s=a.assigned_at||a.updated_at,n=s?new Date(s).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"-",l=/^https:\/\//i.test(a.file_url||"")?a.file_url:"";r.innerHTML=`
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" data-reuse-choice="upload"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background:linear-gradient(135deg,var(--gold),var(--gold-dark))"></div>
        <div class="px-6 pt-6 pb-4 text-center">
          <div class="mx-auto mb-3 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style="background:var(--gold-soft)">📎</div>
          <h3 class="text-lg font-bold text-gray-900">พบไฟล์เดิมของรายวิชานี้</h3>
          <p class="text-sm text-gray-600 leading-relaxed mt-2">${d(e.subject_name)} (${d(e.subject_code)})<br>ภาคเรียน ${d(e.semester||"-")} · ${d(e.category||"-")}</p>
          <div class="mt-3 p-3 rounded-xl text-left" style="background:var(--surface-2);border:1px solid var(--line)">
            <p class="text-xs font-bold text-[var(--ink)]">ไฟล์งานแก้ที่เคยอัปโหลด</p>
            <p class="text-[10px] text-[var(--muted-2)] mt-1">ใช้ล่าสุด ${d(n)}</p>
            ${l?`<a href="${d(l)}" target="_blank" rel="noopener" class="inline-flex mt-2 text-xs font-bold" style="color:var(--info)">เปิดดูไฟล์เดิม ↗</a>`:""}
          </div>
        </div>
        <div class="px-6 pb-6 grid gap-2">
          <button data-reuse-choice="reuse" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">ใช้ไฟล์เดิม</button>
          <button data-reuse-choice="upload" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 active:scale-[0.97] transition-all">อัปโหลดไฟล์ใหม่</button>
          <button data-reuse-choice="none" class="py-2 text-xs font-semibold text-gray-500">ไม่แนบไฟล์</button>
        </div>
      </div>`,document.body.appendChild(r);const u=f=>{r.remove(),t(f)};r.querySelectorAll("[data-reuse-choice]").forEach(f=>f.addEventListener("click",()=>u(f.dataset.reuseChoice)))})}function V(e,a="primary"){return e?`flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});`:"flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:var(--muted);background:var(--surface-2);"}function Q(e,a){return`<div class="flex items-center gap-2 flex-shrink-0">
    <span data-badge class="px-2 py-1 rounded-full text-[11px] font-bold" style="background:${a?"var(--ok-soft)":"var(--surface-2)"};color:${a?"var(--ok)":"var(--muted)"}">${a?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span>
    <button type="button" id="${e}" data-on="${a?"1":"0"}" class="px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0"
      style="${a?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;"}">${a?"ปิดใช้งาน":"เปิดใช้งาน"}</button>
  </div>`}function Zt(e,a){a.forEach(t=>{const r=e.querySelector("#"+t);r&&r.addEventListener("click",()=>{const s=r.dataset.on!=="1";r.dataset.on=s?"1":"0",r.style.cssText=s?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;",r.textContent=s?"ปิดใช้งาน":"เปิดใช้งาน";const n=r.parentElement.querySelector("[data-badge]");n&&(n.textContent=s?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่",n.style.background=s?"var(--ok-soft)":"var(--surface-2)",n.style.color=s?"var(--ok)":"var(--muted)")})})}const ee=(e,a)=>{var t;return((t=e.querySelector("#"+a))==null?void 0:t.dataset.on)==="1"};function C(e,a="primary"){return e?`padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:800;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});box-shadow:0 2px 8px rgba(0,0,0,.15);white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;`:"padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:700;color:var(--muted);background:transparent;white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;"}const de="inline-flex gap-1 p-1 rounded-full bg-[var(--surface-2)] flex-wrap";function Ke(e,a,t){const r=document.getElementById("regrade-bottom-tabs");r.innerHTML=`<div class="flex">${e.map(s=>`
    <button data-nav="${s.key}" class="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5" style="transition:transform .15s ease;${a===s.key?"transform:scale(1.12)":""}">
      <span class="text-lg">${s.icon}</span>
      <span class="text-[10px] font-bold" style="color:${a===s.key?"var(--primary)":"var(--muted-2)"}">${d(s.label)}</span>
    </button>`).join("")}</div>`,r.querySelectorAll("[data-nav]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.nav)))}const g={role:null,isAdmin:!1,isRegistrar:!1,isExecutive:!1,studentRow:null,teacherRow:null,cfg:{}};function Z(e,a){document.getElementById("regrade-title-mobile").textContent=e,document.getElementById("regrade-view-title").textContent=a}function ve(e,a,t){const r=document.getElementById("regrade-sidebar-nav");r.innerHTML=e.map(s=>`
    <button data-sec="${s.key}" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-left"
      style="${a===s.key?"background:var(--primary);color:#fff;":"color:var(--primary-45);"}">
      <span>${s.icon}</span> ${d(s.label)}
    </button>`).join(""),r.querySelectorAll("[data-sec]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.sec)))}const j={subView:"catalog",categoryTab:"สามัญ",subjects:[]};async function Ye(){j.subjects=await $t(g.studentRow.id)}function Je(){return!!g.cfg.intent_open}function Qt(e){var s,n;const a=g.cfg.intent_open_levels;if(!a||!a.length)return!0;const t=e==="ศาสนา"?(s=g.studentRow)==null?void 0:s.religion_room:(n=g.studentRow)==null?void 0:n.main_room,r=t?t.split("/")[0].trim():null;return r?a.includes(`${e}|${r}`):!1}async function U(){var o;Z("แก้ค้างเก่า","รายวิชาค้างของฉัน"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");if(!j.subjects.length&&j.subjects!==null)try{await Ye()}catch(c){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${d(c.message)}</div>`;return}const a=j.subjects,t=a.filter(c=>c.category==="สามัญ").length,r=a.filter(c=>c.category==="ศาสนา").length,s=a.filter(c=>c.status==="กำลังดำเนินการปรับแก้"),n=a.length,l=a.filter(c=>c.status==="จำนงแล้ว").length,u=s.length,b=a.filter(c=>c.status==="ปรับแก้สำเร็จ").length;let f="";if(j.subView==="catalog"){const c=a.filter(h=>h.category===j.categoryTab);f=`
      <div class="flex gap-2 mb-4">
        <button data-tab="สามัญ" style="${V(j.categoryTab==="สามัญ")}">รายวิชาสามัญ (${t})</button>
        <button data-tab="ศาสนา" style="${V(j.categoryTab==="ศาสนา","secondary")}">รายวิชาศาสนา (${r})</button>
      </div>
      <div class="flex flex-col gap-3">
        ${c.length?c.map(h=>Ae(h)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในหมวดนี้ 🎉</div>'}
      </div>`}else j.subView==="overview"?f=`
      ${g.cfg.show_deadline_banner?Ge(g.cfg.intent_window_start,g.cfg.intent_window_end,"กำหนดแจ้งความจำนงขอแก้/ปรับ","--primary","ไปแจ้งความจำนง","catalog"):""}
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        ${qe(a.filter(c=>c.category==="สามัญ"),"📘 สามัญ","var(--primary-dark)")}
        ${qe(a.filter(c=>c.category==="ศาสนา"),"🕌 ศาสนา","var(--secondary-dark)")}
      </div>
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-2">สรุปของฉัน</p>
        <div class="grid grid-cols-2 gap-3">
          ${te(n,"วิชาค้างทั้งหมด","var(--ink)")}
          ${te(l,"จำนงแล้ว","var(--gold-ink)")}
          ${te(u,"กำลังดำเนินการ","var(--info)")}
          ${te(b,"สำเร็จแล้ว","var(--ok)")}
        </div>
      </div>`:j.subView==="myWork"&&(f=`<div class="flex flex-col gap-3">
      ${s.length?s.map(c=>Ae(c)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่ต้องทำตอนนี้ 🎉</div>'}
    </div>`);e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">
      ${f}
    </div>
    ${Je()?`
    <button id="regrade-student-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--gold),var(--gold-ink))">📝 จำนงขอแก้/ปรับ</button>`:""}`,e.querySelectorAll("[data-tab]").forEach(c=>c.addEventListener("click",()=>{j.categoryTab=c.dataset.tab,U()})),e.querySelectorAll("[data-declare]").forEach(c=>c.addEventListener("click",()=>ea(c))),e.querySelectorAll("[data-print-slip]").forEach(c=>c.addEventListener("click",()=>{const h=a.find($=>$.id===Number(c.dataset.printSlip));h&&ge(h)})),e.querySelectorAll("[data-deadline-cta]").forEach(c=>c.addEventListener("click",()=>{j.subView=c.dataset.deadlineCta,U()})),(o=document.getElementById("regrade-student-fab"))==null||o.addEventListener("click",()=>{j.subView="catalog",U()}),ve([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],j.subView,c=>{j.subView=c,U()}),Ke([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],j.subView,c=>{j.subView=c,U()})}function te(e,a,t){return`<div class="bg-[var(--surface-2)] rounded-xl p-3 text-center">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${d(a)}</p>
  </div>`}function Ae(e){var r;const a=((r=e.teachers)==null?void 0:r.full_name)||"-",t=Je()&&Qt(e.category);return`
  <div class="rg-card p-4 shadow-sm">
    <div class="flex justify-between gap-2 items-start">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${d(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${d(e.subject_code)} · ${d(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold" style="${X(e.status)}">${Y(e.status).label}</span>
    </div>
    <div class="flex items-center gap-2 mt-2 pt-2 border-t border-dashed border-[var(--line-soft)]">
      ${B(e.teachers,!0)}
      <div><p class="text-[10px] text-[var(--muted-2)]">ครูผู้สอน</p><p class="text-xs font-bold text-[var(--ink-2)]">${d(a)}</p></div>
    </div>
    ${e.status==="ยังไม่แจ้ง"&&t?`
      <button data-declare="${e.id}" data-subject="${d(e.subject_name)}"
        class="mt-3 w-full py-2.5 rounded-xl text-white font-bold text-xs"
        style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">แจ้งความจำนง</button>`:""}
    ${e.status==="ยังไม่แจ้ง"&&!t?`
      <p class="mt-3 text-center text-[10px] text-[var(--muted-2)]">ยังไม่เปิดให้แจ้งความจำนงในขณะนี้</p>`:""}
    ${e.status==="กำลังดำเนินการปรับแก้"?`
      <div class="mt-3 rounded-xl p-3" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
        <p class="text-xs font-bold" style="color:var(--info)">${d(e.method||"")}</p>
        <p class="text-xs mt-1" style="color:var(--info)">กำหนด: ${d(K(e.due_text))}</p>
      </div>
      <button data-print-slip="${e.id}" class="mt-2 w-full py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>`:""}
  </div>`}async function ea(e){const a=Number(e.dataset.declare);if(await R({title:"ยืนยันแจ้งความจำนง",message:`ยืนยันแจ้งความจำนงขอปรับแก้วิชา "${e.dataset.subject}" ใช่หรือไม่? เมื่อกดยืนยัน ครูผู้สอนจะได้รับแจ้งเตือนทันที`,confirmText:"ยืนยันแจ้งความจำนง"}))try{await wt(a),x("แจ้งความจำนงเรียบร้อย ครูผู้สอนจะได้รับแจ้งเตือนทันที ✅","success"),await Ye(),U()}catch(r){x("บันทึกไม่สำเร็จ: "+r.message,"error")}}const p={subView:"overview",subjects:[],form:null,editingResponseId:null,catalogExpanded:new Set,catalogSemesterFilter:{},assignedExpanded:new Set,assignedSemesterFilter:{},deptHeadExpanded:new Set,unassigned:[],deptHeadTeacherOptions:null,deptHeadDept:void 0,deptHeadShowAll:!1,deptHeadSelectMode:new Set,deptHeadSelected:{}};function He(){var t;const e=g.teacherRow,a=(t=e==null?void 0:e.positions)!=null&&t.length?e.positions:e!=null&&e.position?[e.position]:[];return["dept_head","religion_group_head","religion_subgroup_head"].some(r=>a.includes(r))}async function ta(){p.subjects=await kt(g.teacherRow.id)}async function aa(){const[e,a]=await Promise.all([_t(g.teacherRow.category),p.deptHeadTeacherOptions?Promise.resolve(p.deptHeadTeacherOptions):De(),p.deptHeadDept!==void 0?Promise.resolve(p.deptHeadDept):St(g.teacherRow.position_dept_id).then(t=>{p.deptHeadDept=t})]);p.unassigned=e,p.deptHeadTeacherOptions=a.filter(t=>t.category===g.teacherRow.category)}function ra(e){var t;const a=(t=p.deptHeadDept)==null?void 0:t.dept_code;return!a||p.deptHeadShowAll?e:e.filter(r=>ue[r.subject_code.charAt(0)]===a)}async function E(){var b,f,w;Z("แก้ค้างเก่า","งานแก้ค้างเก่า"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");try{await ta(),p.subView==="depthead"&&He()&&await aa()}catch(o){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${d(o.message)}</div>`;return}const a=p.subjects,t=a.filter(o=>o.status==="จำนงแล้ว"),r=a.filter(o=>o.status==="กำลังดำเนินการปรับแก้"),s=a.filter(o=>o.status==="ปรับแก้สำเร็จ").length;let n="";if(p.subView==="catalog"){const o=G(a);n=`<div class="flex flex-col gap-3">${o.length?o.map(c=>Ce(c,{scope:"catalog",expandedSet:p.catalogExpanded,semesterFilterMap:p.catalogSemesterFilter,renderRow:Xe})).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในความรับผิดชอบตอนนี้ 🎉</div>'}</div>`}else if(p.subView==="overview"){const o=a.length-t.length-r.length-s,c=a.length?Math.round(s/a.length*100):0;n=`
      ${g.cfg.show_deadline_banner?Ge(g.cfg.response_window_start,g.cfg.response_window_end,"กำหนดตอบรับคำร้องของนักเรียน","--secondary","ไปตอบรับ","respond"):""}
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สรุปของฉัน</p>
        ${a.length?be([{value:o,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:t.length,color:"var(--gold-ink)",label:"รอตอบรับ"},{value:r.length,color:"var(--info)",label:"กำลังดำเนินการ"},{value:s,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${c}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีรายวิชาค้างในความรับผิดชอบ</p>'}
        <div class="grid grid-cols-2 gap-3 mt-4">
          ${ae(a.length,"วิชาค้างทั้งหมด","var(--ink)","catalog")}
          ${ae(t.length,"รอตอบรับ","var(--gold-ink)","respond")}
          ${ae(r.length,"กำลังดำเนินการ","var(--info)","assigned")}
          ${ae(s,"สำเร็จแล้ว","var(--ok)","catalog")}
        </div>
      </div>`}else if(p.subView==="assigned"){const o=G(r);n=`<div class="flex flex-col gap-3">${o.length?o.map(c=>Ce(c,{scope:"assigned",expandedSet:p.assignedExpanded,semesterFilterMap:p.assignedSemesterFilter,renderRow:sa})).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่มอบหมายอยู่</div>'}</div>`}else if(p.subView==="respond")n=`
      <div class="flex items-center gap-2 mb-3">
        <button id="regrade-teacher-back" class="w-8 h-8 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-sm">←</button>
        <p class="text-sm font-bold text-[var(--ink)]">ตอบรับคำร้อง</p>
      </div>
      <div class="flex flex-col gap-3">${t.length?t.map(o=>ca(o)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ตอบรับครบหมดแล้ว 🎉</div>'}</div>`;else if(p.subView==="depthead"){const o=G(p.unassigned),c=(b=p.deptHeadDept)==null?void 0:b.dept_code,h=c&&Object.values(ue).includes(c),$=ra(o);n=`
      <div class="rg-card p-3 mb-4 text-xs text-[var(--muted-2)]">🗂️ วิชาในหมวด${d(g.teacherRow.category)}ที่ยังไม่มีครูผู้สอน — มอบหมายครูที่สอนอยู่จริงตอนนี้ให้แต่ละวิชาได้เลย</div>
      ${h?`
      <div class="flex gap-2 mb-4">
        <button data-depthead-scope="own" style="${V(!p.deptHeadShowAll)}">📘 เฉพาะกลุ่มสาระของฉัน (${d(p.deptHeadDept.dept_name)}) · ${o.filter(L=>ue[L.subject_code.charAt(0)]===c).length}</button>
        <button data-depthead-scope="all" style="${V(p.deptHeadShowAll,"secondary")}">ดูทั้งหมด · ${o.length}</button>
      </div>
      <p class="text-[10px] text-[var(--muted-2)] mb-3">การกรองนี้ช่วยดูง่ายขึ้นเท่านั้น ยังมอบหมายวิชานอกกลุ่มสาระของตัวเองได้ถ้าจำเป็น — ระบบจะรู้ตำแหน่งวิชาแค่แบบคร่าวๆ จากรหัสวิชา อาจไม่ครบ 100%</p>`:""}
      <div class="flex flex-col gap-3">${$.length?$.map(L=>na(L,p.deptHeadExpanded)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีวิชาที่ขาดครูผู้สอนแล้ว 🎉</div>'}</div>
      <datalist id="regrade-depthead-teacher-list">${p.deptHeadTeacherOptions.map(L=>`<option value="${d(L.full_name)}${L.teacher_code?` (${d(L.teacher_code)})`:""} · รหัส ${L.id}"></option>`).join("")}</datalist>`}e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">${n}</div>
    ${t.length?`
    <button id="regrade-teacher-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">
      ✅ ตอบรับ
      <span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">${t.length}</span>
    </button>`:""}`,(f=document.getElementById("regrade-teacher-fab"))==null||f.addEventListener("click",()=>{p.subView="respond",E()}),(w=document.getElementById("regrade-teacher-back"))==null||w.addEventListener("click",()=>{p.subView="overview",E()}),e.querySelectorAll("[data-deadline-cta]").forEach(o=>o.addEventListener("click",()=>{p.subView=o.dataset.deadlineCta,E()})),e.querySelectorAll("[data-edit-response]").forEach(o=>o.addEventListener("click",()=>{p.form=null,p.editingResponseId=Number(o.dataset.editResponse),E()})),e.querySelectorAll("[data-close-edit-response]").forEach(o=>o.addEventListener("click",()=>{p.form=null,p.editingResponseId=null,E()})),e.querySelectorAll("[data-open-exam]").forEach(o=>o.addEventListener("click",()=>{const c=a.find(h=>h.id===Number(o.dataset.openExam));c&&We(c,"นัดสอบปรับ"),E()})),e.querySelectorAll("[data-open-work]").forEach(o=>o.addEventListener("click",()=>{const c=a.find(h=>h.id===Number(o.dataset.openWork));c&&Gt(c)})),e.querySelectorAll("[data-cancel-form]").forEach(o=>o.addEventListener("click",()=>{p.form=null,E()})),e.querySelectorAll("[data-due-date]").forEach(o=>o.addEventListener("input",()=>{p.form.dueDate=o.value})),e.querySelectorAll("[data-due-time]").forEach(o=>o.addEventListener("input",()=>{p.form.dueTime=o.value})),e.querySelectorAll("[data-work-file]").forEach(o=>o.addEventListener("change",()=>{var $;const c=(($=o.files)==null?void 0:$[0])||null;if(c&&c.size>5*1024*1024){o.value="",x("ไฟล์ต้องมีขนาดไม่เกิน 5 MB","warning");return}p.form.file=c,p.form.fileUrl="",p.form.fileSource=c?"upload":"none";const h=e.querySelector("[data-work-file-name]");h&&(h.textContent=c?c.name:"ยังไม่ได้เลือกไฟล์")})),e.querySelectorAll("[data-remove-work-file]").forEach(o=>o.addEventListener("click",()=>{p.form.file=null,p.form.fileUrl="",p.form.fileSource="none",E()})),e.querySelectorAll("[data-confirm-assign]").forEach(o=>o.addEventListener("click",()=>pa(o))),e.querySelectorAll("[data-cancel-response]").forEach(o=>o.addEventListener("click",()=>ma(o))),e.querySelectorAll("[data-print-slip]").forEach(o=>o.addEventListener("click",()=>{var h;const c=a.find($=>$.id===Number(o.dataset.printSlip));c&&ge(c,(h=g.teacherRow)==null?void 0:h.full_name)})),e.querySelectorAll("[data-toggle-group]").forEach(o=>o.addEventListener("click",()=>{const[c,h]=o.dataset.toggleGroup.split("|"),$=c==="catalog"?p.catalogExpanded:c==="assigned"?p.assignedExpanded:p.deptHeadExpanded;$.has(h)?$.delete(h):$.add(h),E()})),e.querySelectorAll("[data-depthead-assign]").forEach(o=>o.addEventListener("click",()=>oa(o))),e.querySelectorAll("[data-depthead-scope]").forEach(o=>o.addEventListener("click",()=>{p.deptHeadShowAll=o.dataset.deptheadScope==="all",E()})),e.querySelectorAll("[data-depthead-toggle-select]").forEach(o=>o.addEventListener("click",()=>{const c=o.dataset.deptheadToggleSelect;p.deptHeadSelectMode.has(c)?p.deptHeadSelectMode.delete(c):p.deptHeadSelectMode.add(c),p.deptHeadSelected[c]=new Set,E()})),e.querySelectorAll("[data-depthead-student-select]").forEach(o=>o.addEventListener("change",()=>{const c=o.dataset.deptheadCode,h=Number(o.dataset.deptheadStudentSelect);p.deptHeadSelected[c]||(p.deptHeadSelected[c]=new Set);const $=p.deptHeadSelected[c];o.checked?$.add(h):$.delete(h),la(c)})),e.querySelectorAll("[data-depthead-select-all]").forEach(o=>o.addEventListener("change",()=>{const c=o.dataset.deptheadSelectAll,h=G(p.unassigned).find($=>$.subject_code===c);p.deptHeadSelected[c]=new Set(o.checked?(h==null?void 0:h.items.map($=>$.id))??[]:[]),E()})),e.querySelectorAll("[data-depthead-assign-selected]").forEach(o=>o.addEventListener("click",()=>ia(o))),e.querySelectorAll("[data-group-sem]").forEach(o=>o.addEventListener("change",c=>{const[h,$]=o.dataset.groupSem.split("|"),L=h==="catalog"?p.catalogSemesterFilter:p.assignedSemesterFilter;L[$]=c.target.value,E()})),e.querySelectorAll("[data-goto-sub]").forEach(o=>o.addEventListener("click",()=>{p.subView=o.dataset.gotoSub,E()}));const l=[{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"assigned",icon:"📝",label:"มอบหมายงาน"}];He()&&l.push({key:"depthead",icon:"🗂️",label:"จัดการรายวิชา"});const u=p.subView==="respond"?"overview":p.subView;ve(l,u,o=>{p.subView=o,E()}),Ke(l,u,o=>{p.subView=o,E()})}function G(e){const a=new Map;return e.forEach(t=>{a.has(t.subject_code)||a.set(t.subject_code,{subject_code:t.subject_code,subject_name:t.subject_name,category:t.category,items:[]}),a.get(t.subject_code).items.push(t)}),[...a.values()].sort((t,r)=>r.items.length-t.items.length)}function Ce(e,{scope:a,expandedSet:t,semesterFilterMap:r,renderRow:s}){const n=e.subject_code,l=t.has(n),u=[...new Set(e.items.map(w=>w.semester).filter(Boolean))].sort().reverse(),b=r[n]||"all",f=b==="all"?e.items:e.items.filter(w=>w.semester===b);return`
  <div class="rg-card p-4">
    <button data-toggle-group="${a}|${d(n)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${d(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${d(n)}</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${fe(e.category)}">${d(e.category)}</span>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">นักเรียนติด ${e.items.length} คน</span>
        <span class="text-[var(--muted-2)] text-sm inline-block transition-transform" style="transform:rotate(${l?"180deg":"0deg"})">▾</span>
      </div>
    </button>
    ${l?`
    <div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      ${u.length>1?`
      <select data-group-sem="${a}|${d(n)}" class="w-full mb-3 px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
        <option value="all">ทุกภาคเรียน (${e.items.length})</option>
        ${u.map(w=>`<option value="${d(w)}" ${b===w?"selected":""}>${d(w)} (${e.items.filter(o=>o.semester===w).length})</option>`).join("")}
      </select>`:""}
      <div class="flex flex-col gap-2">${f.map(w=>s(w)).join("")}</div>
    </div>`:""}
  </div>`}function Xe(e){var t,r,s,n;const a=((t=e.students)==null?void 0:t.full_name)||"-";return`
  <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)]">
    ${B(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${d(a)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${d(((r=e.students)==null?void 0:r.student_code)||"")} · ${d(((s=e.students)==null?void 0:s.main_room)||((n=e.students)==null?void 0:n.religion_room)||"")} · ${d(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${X(e.status)}">${Y(e.status).label}</span>
  </div>`}function sa(e){var u,b,f,w;const a=((u=e.students)==null?void 0:u.full_name)||"-",t=p.form,r=Number(p.editingResponseId)===Number(e.id),s=t&&Number(t.id)===Number(e.id)&&t.method==="นัดสอบปรับ",n=t&&Number(t.id)===Number(e.id)&&t.method==="ให้งานแก้",l=/^https:\/\//i.test(e.file_url||"")?e.file_url:"";return`
  <div class="p-2.5 rounded-xl bg-[var(--surface-2)]">
    <div class="flex items-center gap-2.5">
      ${B(e.students,!1)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${d(a)}</p>
        <p class="text-[10px] text-[var(--muted-2)] truncate">${d(((b=e.students)==null?void 0:b.student_code)||"")} · ${d(((f=e.students)==null?void 0:f.main_room)||((w=e.students)==null?void 0:w.religion_room)||"")} · ${d(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${X(e.status)}">ตอบรับแล้ว</span>
    </div>
    <div class="mt-2 rounded-lg p-2" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
      <p class="text-[11px] font-bold" style="color:var(--info)">${d(e.method||"")}</p>
      <p class="text-[11px] mt-0.5" style="color:var(--info)">กำหนด: ${d(K(e.due_text))}</p>
    </div>
    <div class="grid ${l?"grid-cols-2":"grid-cols-1"} gap-2 mt-2">
      ${l?`<a href="${d(l)}" target="_blank" rel="noopener" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">📎 เปิดไฟล์งาน ↗</a>`:""}
      <button data-print-slip="${e.id}" class="py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
    </div>
    ${r?!s&&!n?`
      <p class="text-[10px] font-bold text-[var(--muted-2)] mt-3">เลือกวิธีที่ต้องการแก้ไข</p>
      <div class="flex gap-2 mt-1.5">
        <button data-open-exam="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
        <button data-open-work="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
      </div>
      <button data-close-edit-response class="mt-2 w-full py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิดการแก้ไข</button>
    `:"":`
      <button data-edit-response="${e.id}" class="mt-2 w-full py-2 rounded-xl text-xs font-bold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">✏️ แก้ไข</button>
    `}
    ${s?ne(e,t,!0):""}
    ${n?ne(e,t,!1):""}
  </div>`}function da(e,a,t){var s,n,l,u;const r=((s=e.students)==null?void 0:s.full_name)||"-";return`
  <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)] cursor-pointer">
    <input type="checkbox" data-depthead-student-select="${e.id}" data-depthead-code="${d(a)}" ${t?"checked":""} class="flex-shrink-0 rounded border-gray-300 text-[var(--primary)]">
    ${B(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${d(r)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${d(((n=e.students)==null?void 0:n.student_code)||"")} · ${d(((l=e.students)==null?void 0:l.main_room)||((u=e.students)==null?void 0:u.religion_room)||"")} · ${d(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${X(e.status)}">${Y(e.status).label}</span>
  </label>`}function na(e,a,t){const r=e.subject_code,s=a.has(r),n=p.deptHeadSelectMode.has(r),l=p.deptHeadSelected[r]||new Set;return`
  <div class="rg-card p-4">
    <button data-toggle-group="depthead|${d(r)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${d(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${d(r)}</p>
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
        <button type="button" data-depthead-toggle-select="${d(r)}" class="flex-shrink-0 text-[10px] font-bold" style="color:var(--primary)">${n?"✕ ยกเลิกเลือกเฉพาะคน":"☑️ เลือกเฉพาะบางคน"}</button>
      </div>
      <div class="flex gap-2 mb-3">
        <input data-depthead-input="${d(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
        <button data-depthead-assign="${d(r)}" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">มอบหมายทั้งหมด</button>
      </div>
      ${n?`
      <label class="flex items-center gap-2 mb-2 px-1 text-[11px] text-[var(--muted-2)] select-none">
        <input type="checkbox" data-depthead-select-all="${d(r)}" data-total="${e.items.length}" class="rounded border-gray-300 text-[var(--primary)]">
        เลือกทั้งหมดในวิชานี้
      </label>`:""}
      <div class="flex flex-col gap-2">${e.items.map(u=>n?da(u,r,l.has(u.id)):Xe(u)).join("")}</div>
      ${n?`
      <div data-depthead-selected-bar="${d(r)}" class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex gap-2 ${l.size===0?"opacity-40":""}">
        <input data-depthead-selected-input="${d(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครูสำหรับคนที่เลือก...">
        <button data-depthead-assign-selected="${d(r)}" ${l.size===0?"disabled":""} class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">มอบหมายที่เลือก (<span data-depthead-selected-count="${d(r)}">${l.size}</span>)</button>
      </div>`:""}
    </div>`:""}
  </div>`}function la(e){const a=p.deptHeadSelected[e]||new Set,t=document.querySelector(`[data-depthead-selected-bar="${CSS.escape(e)}"]`),r=document.querySelector(`[data-depthead-selected-count="${CSS.escape(e)}"]`),s=document.querySelector(`[data-depthead-assign-selected="${CSS.escape(e)}"]`),n=document.querySelector(`[data-depthead-select-all="${CSS.escape(e)}"]`);if(r&&(r.textContent=String(a.size)),s&&(s.disabled=a.size===0),t&&t.classList.toggle("opacity-40",a.size===0),n){const l=Number(n.dataset.total||0);n.checked=l>0&&a.size===l,n.indeterminate=a.size>0&&a.size<l}}async function oa(e){const a=e.dataset.deptheadAssign,t=document.querySelector(`[data-depthead-input="${CSS.escape(a)}"]`),r=J(t.value,p.deptHeadTeacherOptions);if(!r){x("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=G(p.unassigned).find(l=>l.subject_code===a);if(await R({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(s==null?void 0:s.subject_name)||a}" ให้นักเรียนที่ยังไม่มีครูทั้ง ${(s==null?void 0:s.items.length)??""} รายการใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const l=await Lt(a,g.teacherRow.category,r.id);x(`มอบหมายครูผู้สอนให้ ${l} รายการเรียบร้อย ✅`,"success"),E()}catch(l){x("มอบหมายไม่สำเร็จ: "+l.message,"error")}}async function ia(e){const a=e.dataset.deptheadAssignSelected,t=document.querySelector(`[data-depthead-selected-input="${CSS.escape(a)}"]`),r=J(t.value,p.deptHeadTeacherOptions);if(!r){x("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=[...p.deptHeadSelected[a]||[]];if(!s.length){x("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}const n=G(p.unassigned).find(u=>u.subject_code===a);if(await R({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(n==null?void 0:n.subject_name)||a}" ให้นักเรียนที่เลือกไว้ ${s.length} คนใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const u=await jt(s,r.id);x(`มอบหมายครูผู้สอนให้ ${u} คนที่เลือกเรียบร้อย ✅`,"success"),p.deptHeadSelectMode.delete(a),delete p.deptHeadSelected[a],E()}catch(u){x("มอบหมายไม่สำเร็จ: "+u.message,"error")}}function be(e,a,t){const r=e.reduce((l,u)=>l+u.value,0)||1;let s=0;return`
  <div class="flex items-center gap-4">
    <div style="width:96px;height:96px;border-radius:9999px;background:conic-gradient(${e.map(l=>{const u=s/r*360;s+=l.value;const b=s/r*360;return`${l.color} ${u}deg ${b}deg`}).join(", ")});flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <div style="width:64px;height:64px;border-radius:9999px;background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p class="text-base font-extrabold text-[var(--ink)]">${d(a)}</p>
        <p class="text-[9px] text-[var(--muted-2)]">${d(t)}</p>
      </div>
    </div>
    <div class="flex-1 min-w-0 grid grid-cols-1 gap-1.5">
      ${e.map(l=>`
      <div class="flex items-center gap-1.5 text-[11px]">
        <span style="width:8px;height:8px;border-radius:9999px;background:${l.color};flex-shrink:0;"></span>
        <span class="text-[var(--muted)] truncate">${d(l.label)}</span>
        <span class="ml-auto font-bold text-[var(--ink-2)]">${l.value}</span>
      </div>`).join("")}
    </div>
  </div>`}function qe(e,a,t){const r=e.filter(f=>f.status==="ยังไม่แจ้ง").length,s=e.filter(f=>f.status==="จำนงแล้ว").length,n=e.filter(f=>f.status==="กำลังดำเนินการปรับแก้").length,l=e.filter(f=>f.status==="ปรับแก้สำเร็จ").length,u=e.length,b=u?Math.round(l/u*100):0;return`
  <div class="rg-card p-4 flex-1 min-w-0">
    <p class="text-xs font-bold mb-3" style="color:${t}">${d(a)} (${u})</p>
    ${u?be([{value:r,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:s,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:n,color:"var(--info)",label:"กำลังดำเนินการ"},{value:l,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${b}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีวิชาค้างในหมวดนี้ 🎉</p>'}
  </div>`}function ae(e,a,t,r){return`<button data-goto-sub="${d(r)}" class="bg-[var(--surface-2)] rounded-xl p-3 text-center hover:opacity-80 active:scale-[0.98] transition cursor-pointer">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${d(a)}</p>
  </button>`}function ca(e){var n,l,u,b;const a=((n=e.students)==null?void 0:n.full_name)||"-",t=p.form,r=t&&t.id===e.id&&t.method==="นัดสอบปรับ",s=t&&t.id===e.id&&t.method==="ให้งานแก้";return`
  <div class="rg-card p-4">
    <div class="flex gap-2">
      ${B(e.students,!0)}
      <div class="min-w-0">
        <p class="font-bold text-xs text-[var(--ink)]">${d(a)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">(${d(((l=e.students)==null?void 0:l.student_code)||"")} · ${d(((u=e.students)==null?void 0:u.main_room)||((b=e.students)==null?void 0:b.religion_room)||"")})</p>
        <p class="text-xs text-[var(--muted)] mt-0.5">${d(e.subject_name)} (${d(e.subject_code)})</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${fe(e.category)}">${d(e.category)}</span>
      </div>
    </div>
    ${ua(e)}
    ${r?ne(e,t,!0):""}
    ${s?ne(e,t,!1):""}
  </div>`}function ua(e){const a=p.form;if(a&&a.id===e.id)return"";const t=e.status==="กำลังดำเนินการปรับแก้";return`
    ${t?'<p class="text-[10px] font-bold text-[var(--muted-2)] mt-3">แก้ไขหรือเปลี่ยนคำตอบ (ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ)</p>':""}
    <div class="flex gap-2 mt-${t?"1.5":"3"}">
      <button data-open-exam="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
      <button data-open-work="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
    </div>
    ${t?`<button data-cancel-response="${e.id}" class="mt-2 w-full py-2 rounded-xl text-xs font-bold" style="background:var(--bad-soft);color:var(--bad);border:1px solid var(--bad-soft-line)">✕ ยกเลิกคำตอบนี้</button>`:""}`}function ne(e,a,t){var n;const r=!t&&!!a.fileUrl,s=r&&/^https:\/\//i.test(a.fileUrl)?a.fileUrl:"";return`
    <div class="mt-3 rounded-xl p-3 bg-[var(--surface-2)]">
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">${t?"วันที่นัดสอบปรับ":"กำหนดส่งงาน"}</label>
      <input data-due-date type="date" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" value="${d(a.dueDate)}">
      ${t?`<label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">เวลานัดสอบ</label>
      <input data-due-time type="time" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" value="${d(a.dueTime)}">`:`
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">ไฟล์ชี้แจงงานแก้ (ถ้ามี · ไม่เกิน 5 MB)</label>
      ${r?`
        <div class="p-3 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
          <p class="text-xs font-bold text-[var(--ink)]">📎 ${a.fileSource==="reuse"?"ใช้ไฟล์เดิมของรายวิชานี้":"ไฟล์ที่แนบอยู่ปัจจุบัน"}</p>
          <div class="flex gap-3 mt-2">
            ${s?`<a href="${d(s)}" target="_blank" rel="noopener" class="text-[11px] font-bold" style="color:var(--info)">เปิดดูไฟล์ ↗</a>`:""}
            <button type="button" data-remove-work-file class="text-[11px] font-bold" style="color:var(--bad)">เอาไฟล์ออก</button>
          </div>
        </div>`:""}
      <label class="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-dashed border-[var(--line)] bg-[var(--surface)] text-xs font-bold text-[var(--ink-2)] cursor-pointer">
        <span>${r?"อัปโหลดไฟล์ใหม่แทน":"เลือกไฟล์จากเครื่อง"}</span>
        <input data-work-file type="file" class="sr-only" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png">
      </label>
      <p data-work-file-name class="mt-1 text-[10px] text-[var(--muted-2)] truncate">${d(((n=a.file)==null?void 0:n.name)||(r?"หากไม่เลือกไฟล์ใหม่ ระบบจะใช้ไฟล์ที่แสดงอยู่":"ยังไม่ได้เลือกไฟล์"))}</p>`}
      <div class="flex gap-2 mt-2">
        <button data-confirm-assign="${e.id}" class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">${a.editing?"บันทึกการแก้ไข":t?"ยืนยันนัดสอบ":"ยืนยันมอบหมายงาน"}</button>
        <button data-cancel-form class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิด</button>
      </div>
    </div>`}async function pa(e){var u,b;const a=Number(e.dataset.confirmAssign),t=p.form;if(!(t!=null&&t.dueDate)){x("กรุณาเลือกวันที่จากปฏิทินก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){x("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const r=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,s=p.subjects.find(f=>f.id===a),n=t.method==="นัดสอบปรับ"?`นัดสอบปรับวิชา "${s.subject_name}" ให้ ${((u=s.students)==null?void 0:u.full_name)||""} วันที่ ${K(r)} ใช่หรือไม่?`:`มอบหมายงานแก้วิชา "${s.subject_name}" ให้ ${((b=s.students)==null?void 0:b.full_name)||""} กำหนดส่ง ${K(r)} ใช่หรือไม่?`;if(await R({title:t.editing?"ยืนยันแก้ไขคำตอบ":t.method==="นัดสอบปรับ"?"ยืนยันนัดสอบปรับ":"ยืนยันมอบหมายงานแก้",message:n,confirmText:t.editing?"บันทึกการแก้ไข":"ยืนยัน"}))try{e.disabled=!0;let f=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const w=c=>String(c||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";f=(await Ft(t.file,`regrade/teacher-${g.teacherRow.id}/${w(s.subject_code)}/${w(s.semester)}`)).url}await Et(a,{method:t.method,dueText:r,fileUrl:f}),x(t.editing?"แก้ไขคำตอบแล้ว ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ ✅":"บันทึกการมอบหมายเรียบร้อย ✅","success"),p.form=null,p.editingResponseId=null,E()}catch(f){e.disabled=!1,x("บันทึกไม่สำเร็จ: "+f.message,"error")}}async function ma(e){var s;const a=Number(e.dataset.cancelResponse),t=p.subjects.find(n=>n.id===a);if(await R({title:"ยืนยันยกเลิกคำตอบ",message:`ยกเลิกคำตอบของ ${((s=t==null?void 0:t.students)==null?void 0:s.full_name)||""} วิชา "${(t==null?void 0:t.subject_name)||""}" ใช่หรือไม่? รายการจะกลับไปรอครูตอบรับใหม่`,confirmText:"ยกเลิกคำตอบ"}))try{await Tt(a),p.form=null,p.editingResponseId=null,x("ยกเลิกคำตอบแล้ว รายการกลับไปรอตอบรับใหม่เรียบร้อย","success"),E()}catch(n){x("ยกเลิกคำตอบไม่สำเร็จ: "+n.message,"error")}}const q={view:"close",query:"",gradeCategory:"สามัญ"};async function pe(){Z("ฝ่ายทะเบียน","แก้ค้างเก่า — ฝ่ายทะเบียน");const e=document.getElementById("regrade-content");e.innerHTML=`<div class="max-w-3xl mx-auto p-4">
    <div class="${de} mb-4">
      <button data-rview="close" style="${C(q.view==="close")}">📋 รอปิดงาน</button>
      <button data-rview="grade" style="${C(q.view==="grade")}">🎓 เกรดที่ต้องอัปเดต</button>
    </div>
    <div id="regrade-registrar-body"></div>
  </div>`,e.querySelectorAll("[data-rview]").forEach(t=>t.addEventListener("click",()=>{q.view=t.dataset.rview,pe()}));const a=document.getElementById("regrade-registrar-body");if(q.view==="close"){a.innerHTML=`<input id="regrade-registrar-search" class="w-full max-w-sm px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-4" placeholder="ค้นหาชื่อหรือเลขประจำตัวนักเรียน...">
      <div id="regrade-close-list" class="flex flex-col gap-3"></div>`;const t=document.getElementById("regrade-registrar-search");t.value=q.query,t.addEventListener("input",()=>{q.query=t.value,me()}),await me()}else a.innerHTML=`<div class="flex gap-2 mb-4">
        <button data-gcat="สามัญ" style="${V(q.gradeCategory==="สามัญ")}">สามัญ</button>
        <button data-gcat="ศาสนา" style="${V(q.gradeCategory==="ศาสนา","secondary")}">ศาสนา</button>
      </div>
      <div class="overflow-x-auto"><table class="w-full text-xs" id="regrade-grade-table"></table></div>`,a.querySelectorAll("[data-gcat]").forEach(t=>t.addEventListener("click",()=>{q.gradeCategory=t.dataset.gcat,pe()})),await Ze()}async function me(){const e=document.getElementById("regrade-close-list");let a;try{a=await Rt(q.query)}catch(t){e.innerHTML=`<div class="text-center text-red-500 text-sm py-8">โหลดไม่สำเร็จ: ${d(t.message)}</div>`;return}e.innerHTML=a.length?a.map(t=>{var s,n,l,u;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`
    <div class="rg-card p-4 flex justify-between items-center gap-3 flex-wrap">
      <div class="flex gap-2.5 items-center min-w-0">
        ${B(t.students,!0)}
        <div class="min-w-0">
          <p class="font-bold text-sm text-[var(--ink)]">${d(r)} <span class="text-[var(--muted-2)] font-normal">(${d(((n=t.students)==null?void 0:n.student_code)||"")} · ${d(((l=t.students)==null?void 0:l.main_room)||((u=t.students)==null?void 0:u.religion_room)||"")})</span></p>
          <p class="text-xs text-[var(--muted)] mt-0.5">${d(t.subject_name)} (${d(t.subject_code)}) · ${d(t.method||"")} — กำหนด ${d(K(t.due_text))}</p>
          <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${fe(t.category)}">${d(t.category)}</span>
        </div>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button data-print-slip="${t.id}" class="px-3 py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
        <button data-closeout="${t.id}" data-name="${d(r)}" data-subject="${d(t.subject_name)}"
          class="px-4 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">✓ ปิดงาน (ปรับแก้สำเร็จ)</button>
      </div>
    </div>`}).join(""):'<div class="text-center text-[var(--muted-2)] text-sm py-12">📭 ไม่พบรายการที่รอปิดงาน</div>',e.querySelectorAll("[data-print-slip]").forEach(t=>t.addEventListener("click",()=>{const r=a.find(s=>s.id===Number(t.dataset.printSlip));r&&ge(r)})),e.querySelectorAll("[data-closeout]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.closeout);if(await R({title:"ยืนยันปิดงาน",message:`ยืนยันบันทึกว่า ${t.dataset.name} ปรับแก้วิชา "${t.dataset.subject}" สำเร็จแล้วใช่หรือไม่? สถานะจะเปลี่ยนเป็น "ปรับแก้สำเร็จ" ทันที`,confirmText:"ยืนยันปิดงาน"}))try{await At(r),x("ปิดงานเรียบร้อย ✅","success"),await me()}catch(n){x("ไม่สำเร็จ: "+n.message,"error")}}))}async function Ze(){const e=document.getElementById("regrade-grade-table");let a;try{a=await Ht(q.gradeCategory)}catch(t){e.innerHTML=`<tr><td class="text-red-500 text-sm py-8 text-center">โหลดไม่สำเร็จ: ${d(t.message)}</td></tr>`;return}e.innerHTML=`
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">รายวิชา</th><th class="py-2 px-2">ครูผู้สอน</th><th class="py-2 px-2">สถานะเกรด</th><th class="py-2 px-2 text-right">จัดการ</th>
    </tr></thead>
    <tbody>${a.length?a.map(t=>{var s,n,l;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`<tr class="border-b border-[var(--line-soft)]">
        <td class="py-2 px-2"><div class="flex items-center gap-2">${B(t.students,!0)}<div><p class="font-bold text-[var(--ink)]">${d(r)}</p><p class="text-[10px] text-[var(--muted-2)]">(${d(((n=t.students)==null?void 0:n.student_code)||"")})</p></div></div></td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${d(t.subject_name)} (${d(t.subject_code)})</td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${d(((l=t.teachers)==null?void 0:l.full_name)||"-")}</td>
        <td class="py-2 px-2">${t.grade_entered?'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok);border:1px solid var(--ok-soft-line)">อัปเดตแล้ว ✓</span>':'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">รอกรอกเกรด</span>'}</td>
        <td class="py-2 px-2 text-right">${t.grade_entered?"":`<button data-mark-entered="${t.id}" data-name="${d(r)}" data-subject="${d(t.subject_name)}" class="px-3 py-1.5 rounded-lg text-white text-[11px] font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">กรอกข้อมูลแล้ว</button>`}</td>
      </tr>`}).join(""):'<tr><td colspan="5" class="text-center text-[var(--muted-2)] text-sm py-10">ไม่มีรายการในหมวดนี้</td></tr>'}</tbody>`,e.querySelectorAll("[data-mark-entered]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.markEntered);if(await R({title:"ยืนยันกรอกข้อมูลเกรดแล้ว",message:`ยืนยันว่าได้นำเกรดของ ${t.dataset.name} วิชา "${t.dataset.subject}" ไปกรอกในระบบเกรด (แยกต่างหาก) เรียบร้อยแล้วใช่หรือไม่?`,confirmText:"ยืนยัน"}))try{await Ct(r),x("บันทึกแล้ว ✅","success"),await Ze()}catch(n){x("ไม่สำเร็จ: "+n.message,"error")}}))}const i={categoryTab:"all",drilldown:null,view:"overview",overviewTab:"summary",teacherSort:{key:"pending",dir:"desc"},classLevels:null,attnLevelKey:"",attnRoom:"",attnRooms:[],browseCategory:"สามัญ",browseLevel:"",browseRoomsCache:[],classroomSortDesc:!0,expandedRooms:new Set,roomStudents:{},expandedStudents:new Set,studentSubjects:{}},H=e=>e.reduce((a,t)=>a+Number(t.cnt),0);function ga(e,a){const t=a.dir==="asc"?1:-1;return[...e].sort((r,s)=>{const n=r[a.key],l=s[a.key];return typeof n=="string"?n.localeCompare(l,"th")*t:(n-l)*t})}function fa(e,a){return e.key===a?e.dir==="asc"?" ▲":" ▼":""}async function Qe(){return i.classLevels||(i.classLevels=await Pe()),i.classLevels}async function xe(){Z("ผู้บริหาร","ภาพรวมทั้งโรงเรียน — บอร์ดผู้บริหาร");const e=document.getElementById("regrade-content");e.innerHTML=`
    <div class="w-full p-4 md:p-6">
      <div class="${de} mb-4">
        <button data-dview="overview" style="${C(i.view==="overview")}">📊 ภาพรวม</button>
        <button data-dview="students" style="${C(i.view==="students")}">🎓 รายชื่อนักเรียน</button>
      </div>
      <div id="regrade-dashboard-body"></div>
    </div>`,e.querySelectorAll("[data-dview]").forEach(t=>t.addEventListener("click",()=>{i.view=t.dataset.dview,xe()}));const a=document.getElementById("regrade-dashboard-body");i.view==="students"?await et(a):await se(a)}async function se(e){let a;try{a=await qt()}catch(y){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${d(y.message)}</div>`;return}const t=i.categoryTab==="all"?a:a.filter(y=>y.category===i.categoryTab),r=H(t),s=H(t.filter(y=>y.status==="ยังไม่แจ้ง")),n=H(t.filter(y=>y.status==="จำนงแล้ว")),l=H(t.filter(y=>y.status==="กำลังดำเนินการปรับแก้")),u=H(t.filter(y=>y.status==="ปรับแก้สำเร็จ")),b=n+l,f={};t.forEach(y=>{var _;(f[_=y.teacher_name]??(f[_]={dept:y.teacher_dept||"-",list:[]})).list.push(y)});const w=ga(Object.entries(f).map(([y,_])=>({name:y,dept:_.dept,total:H(_.list),pending:H(_.list.filter(T=>T.status==="จำนงแล้ว")),assigned:H(_.list.filter(T=>T.status==="กำลังดำเนินการปรับแก้")),done:H(_.list.filter(T=>T.status==="ปรับแก้สำเร็จ"))})),i.teacherSort),o=H(a.filter(y=>y.category==="สามัญ")),c=H(a.filter(y=>y.category==="ศาสนา")),h=`
    <div class="${de}">
      <button data-otab="summary" style="${C(i.overviewTab==="summary")}">📊 สรุปตัวเลข</button>
      <button data-otab="teachers" style="${C(i.overviewTab==="teachers")}">👩‍🏫 รายครูผู้สอน</button>
      <button data-otab="attention" style="${C(i.overviewTab==="attention")}">🎯 นักเรียนที่ต้องติดตาม</button>
    </div>`,$=`
    <div class="${de}">
      <button data-dcat="all" style="${C(i.categoryTab==="all")}">📊 ทั้งหมด (${a.length})</button>
      <button data-dcat="สามัญ" style="${C(i.categoryTab==="สามัญ")}">📘 สามัญ (${o})</button>
      <button data-dcat="ศาสนา" style="${C(i.categoryTab==="ศาสนา","secondary")}">🕌 ศาสนา (${c})</button>
    </div>`,L=`
    <div class="flex items-center justify-between gap-3 mb-4 flex-wrap">
      ${h}
      ${i.overviewTab!=="attention"?$:""}
    </div>`;let z="";if(i.overviewTab==="teachers"){const y=(_,T,I="")=>`<th class="py-2 px-2 cursor-pointer select-none hover:text-[var(--ink-2)] ${I}" data-sort-key="${T}">${d(_)}${fa(i.teacherSort,T)}</th>`;z=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">ความคืบหน้าแยกรายครูผู้สอน</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">คลิกหัวคอลัมน์เพื่อเรียงจากมาก↔น้อย หรือ ก↔ฮ</p>
        <div class="overflow-x-auto"><table class="w-full text-xs">
          <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
            ${y("ครูผู้สอน","name")}${y("กลุ่มสาระ","dept")}${y("ทั้งหมด","total","text-center")}${y("รอตอบรับ","pending","text-center")}${y("มอบหมายแล้ว","assigned","text-center")}${y("สำเร็จ","done","text-center")}
          </tr></thead>
          <tbody>${w.map(_=>`<tr class="border-b border-[var(--line-soft)]">
            <td class="py-2 px-2 font-bold text-[var(--ink-2)]">${d(_.name)}</td>
            <td class="py-2 px-2 text-[var(--muted)]">${d(_.dept)}</td>
            <td class="py-2 px-2 text-center text-[var(--muted)]">${_.total}</td>
            <td class="py-2 px-2 text-center">${_.pending>0?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">${_.pending}</span>`:_.pending}</td>
            <td class="py-2 px-2 text-center" style="color:var(--info)">${_.assigned}</td>
            <td class="py-2 px-2 text-center" style="color:var(--ok)">${_.done}</td>
          </tr>`).join("")}</tbody>
        </table></div>
      </div>`}else if(i.overviewTab==="attention"){let y;try{y=await Qe()}catch{y=[]}z=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">นักเรียนที่จำเป็นต้องติดตาม</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">เรียงจากคนที่มีรายวิชาค้างมากที่สุดก่อน (สูงสุด 20 คน)</p>
        <div class="flex gap-2 mb-3 flex-wrap">
          <select id="regrade-attn-level" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">${'<option value="">ทุกระดับชั้น</option>'+["สามัญ","ศาสนา"].map(T=>{const I=y.filter(N=>N.category===T);return I.length?`<optgroup label="${T}">${I.map(N=>`<option value="${T}|${d(N.class_level)}" ${i.attnLevelKey===`${T}|${N.class_level}`?"selected":""}>${d(N.class_level)}</option>`).join("")}</optgroup>`:""}).join("")}</select>
          <select id="regrade-attn-room" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" ${i.attnLevelKey?"":"disabled"}>
            <option value="">ทุกห้อง</option>
            ${i.attnRooms.map(T=>`<option value="${d(T)}" ${i.attnRoom===T?"selected":""}>${d(T)}</option>`).join("")}
          </select>
        </div>
        <div id="regrade-attn-list" class="overflow-x-auto"></div>
      </div>`}else{const y=r?Math.round(u/r*100):0;z=`
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สัดส่วนสถานะ</p>
        ${r?be([{value:s,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:n,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:l,color:"var(--info)",label:"กำลังดำเนินการ"},{value:u,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${y}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีข้อมูล</p>'}
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <button data-drill="all" class="rg-card p-4 text-center">${re(r,"รายวิชาค้างทั้งหมด","var(--ink)")}</button>
        <button data-drill="requested" class="rg-card p-4 text-center">${re(b,"จำนงแล้ว","var(--gold-ink)")}</button>
        <button data-drill="assigned" class="rg-card p-4 text-center">${re(l,"กำลังดำเนินการปรับแก้","var(--info)")}</button>
        <button data-drill="done" class="rg-card p-4 text-center">${re(u,"ปรับแก้สำเร็จ","var(--ok)")}</button>
      </div>
      <div id="regrade-drilldown"></div>`}e.innerHTML=L+z,e.querySelectorAll("[data-otab]").forEach(y=>y.addEventListener("click",()=>{i.overviewTab=y.dataset.otab,se(e)})),e.querySelectorAll("[data-sort-key]").forEach(y=>y.addEventListener("click",()=>{const _=y.dataset.sortKey;i.teacherSort.key===_?i.teacherSort.dir=i.teacherSort.dir==="asc"?"desc":"asc":(i.teacherSort.key=_,i.teacherSort.dir=_==="name"||_==="dept"?"asc":"desc"),se(e)})),e.querySelectorAll("[data-dcat]").forEach(y=>y.addEventListener("click",()=>{i.categoryTab=y.dataset.dcat,i.drilldown=null,xe()})),i.overviewTab==="summary"&&(e.querySelectorAll("[data-drill]").forEach(y=>y.addEventListener("click",()=>{i.drilldown=y.dataset.drill,Be(t)})),i.drilldown&&Be(t)),i.overviewTab==="attention"&&(document.getElementById("regrade-attn-level").addEventListener("change",async y=>{if(i.attnLevelKey=y.target.value,i.attnRoom="",i.attnRooms=[],i.attnLevelKey){const[_,T]=i.attnLevelKey.split("|");try{i.attnRooms=(await Oe(_,T)).map(I=>I.room)}catch{i.attnRooms=[]}}se(e)}),document.getElementById("regrade-attn-room").addEventListener("change",y=>{i.attnRoom=y.target.value,Ie()}),Ie())}async function Ie(){const e=document.getElementById("regrade-attn-list");if(!e)return;e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';const[a,t]=i.attnLevelKey?i.attnLevelKey.split("|"):[null,null];let r;try{r=await Bt({category:a,classLevel:t,room:i.attnRoom||null,limit:20})}catch(s){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${d(s.message)}</p>`;return}if(!r.length){e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-8 text-center">ไม่มีนักเรียนที่ต้องติดตามในเงื่อนไขนี้ 🎉</p>';return}e.innerHTML=`<table class="w-full text-xs">
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">ห้อง</th>
      <th class="py-2 px-2 text-center">ค้าง</th><th class="py-2 px-2 text-center">จำนงแล้ว</th><th class="py-2 px-2 text-center">สำเร็จ</th>
    </tr></thead>
    <tbody>${r.map(s=>`<tr class="border-b border-[var(--line-soft)]">
      <td class="py-2 px-2"><div class="flex items-center gap-2">${B(s,!1)}<div><p class="font-bold text-[var(--ink)]">${d(s.full_name)}</p><p class="text-[10px] text-[var(--muted-2)]">${d(s.student_code||"")}</p></div></div></td>
      <td class="py-2 px-2 text-[var(--muted)]">${d((s.category==="ศาสนา"?s.religion_room:s.main_room)||"-")}</td>
      <td class="py-2 px-2 text-center font-bold" style="color:var(--bad)">${s.not_yet}</td>
      <td class="py-2 px-2 text-center" style="color:var(--gold-ink)">${s.requested}</td>
      <td class="py-2 px-2 text-center" style="color:var(--ok)">${s.done}</td>
    </tr>`).join("")}</tbody>
  </table>`}function re(e,a,t){return`<p class="text-2xl font-extrabold" style="color:${t}">${e}</p><p class="text-[10px] text-[var(--muted-2)] mt-1">${d(a)}</p>`}async function et(e){let a;try{a=await Qe()}catch{a=[]}const t=a.filter(r=>r.category===i.browseCategory);e.innerHTML=`
    <div class="flex gap-2 mb-4">
      <button data-bcat="สามัญ" style="${V(i.browseCategory==="สามัญ")}">📘 สามัญ</button>
      <button data-bcat="ศาสนา" style="${V(i.browseCategory==="ศาสนา","secondary")}">🕌 ศาสนา</button>
    </div>
    <select id="regrade-browse-level" class="w-full max-w-xs px-3 py-2 rounded-lg border border-[var(--line)] text-sm bg-[var(--surface)] mb-4">
      <option value="">— เลือกระดับชั้น —</option>
      ${t.map(r=>`<option value="${d(r.class_level)}" ${i.browseLevel===r.class_level?"selected":""}>${d(r.class_level)}</option>`).join("")}
    </select>
    <div id="regrade-browse-rooms" class="flex flex-col gap-3"></div>`,e.querySelectorAll("[data-bcat]").forEach(r=>r.addEventListener("click",()=>{i.browseCategory=r.dataset.bcat,i.browseLevel="",i.browseRoomsCache=[],i.expandedRooms.clear(),i.roomStudents={},i.expandedStudents.clear(),i.studentSubjects={},et(e)})),document.getElementById("regrade-browse-level").addEventListener("change",r=>{i.browseLevel=r.target.value,i.expandedRooms.clear(),i.roomStudents={},i.expandedStudents.clear(),i.studentSubjects={},Me()}),Me()}async function Me(){const e=document.getElementById("regrade-browse-rooms");if(e){if(!i.browseLevel){i.browseRoomsCache=[],e.innerHTML='<div class="text-center py-12 text-[var(--muted-2)] text-sm">เลือกระดับชั้นเพื่อดูรายชื่อห้องเรียน</div>';return}e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';try{i.browseRoomsCache=await Oe(i.browseCategory,i.browseLevel)}catch(a){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${d(a.message)}</p>`;return}P()}}function P(){const e=document.getElementById("regrade-browse-rooms");e&&(e.innerHTML=i.browseRoomsCache.length?i.browseRoomsCache.map(a=>va(a)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่พบห้องเรียนที่มีวิชาค้างในระดับชั้นนี้ 🎉</div>',xa(e))}function tt(e){const a=i.classroomSortDesc?-1:1;return[...e].sort((t,r)=>(t.not_yet-r.not_yet)*a)}function va(e){const a=i.expandedRooms.has(e.room),t=i.roomStudents[e.room],r=t?tt(t):null;return`
  <div class="rg-card p-4">
    <div class="flex justify-between items-start gap-2">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${d(e.room)}</p>
        <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${e.student_count} คนมีวิชาค้าง</p>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0 flex-wrap justify-end">
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--bad-soft);color:var(--bad)">ค้าง ${e.not_yet}</span>
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">จำนง ${e.requested}</span>
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok)">สำเร็จ ${e.done}</span>
      </div>
    </div>
    <div class="flex gap-2 mt-3">
      <button data-toggle-room="${d(e.room)}" class="flex-1 py-1.5 rounded-lg text-[10px] font-bold bg-[var(--surface-2)] text-[var(--muted)]">${a?"▲ ย่อ":"▾ ดูรายชื่อนักเรียน"}</button>
      <button data-print-room="${d(e.room)}" class="px-3 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายชื่อห้อง</button>
    </div>
    ${a?`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex flex-col gap-2">
      <button data-toggle-sort class="self-start px-2.5 py-1 rounded-full text-[10px] font-bold mb-1" style="background:var(--surface-2);color:var(--muted)">↕️ เรียง${i.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</button>
      ${r?r.length?r.map(s=>ba(s)).join(""):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีข้อมูลนักเรียน</p>':'<p class="text-center text-xs text-[var(--muted-2)] py-4">กำลังโหลด...</p>'}
    </div>`:""}
  </div>`}function ba(e){const a=i.expandedStudents.has(e.student_id),t=i.studentSubjects[e.student_id];return`
  <div class="rounded-xl bg-[var(--surface-2)] overflow-hidden">
    <button data-toggle-student="${e.student_id}" class="w-full flex items-center gap-2.5 p-2.5 text-left">
      ${B(e,!1)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${d(e.full_name)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">${d(e.student_code||"")}</p>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0 text-[10px] font-bold">
        <span style="color:var(--bad)">${e.not_yet}</span>/<span style="color:var(--gold-ink)">${e.requested}</span>/<span style="color:var(--ok)">${e.done}</span>
      </div>
    </button>
    ${a?`<div class="px-2.5 pb-2.5 flex flex-col gap-1.5">
      ${t?t.length?t.map(r=>`
      <div class="flex justify-between items-center gap-2 bg-[var(--surface)] rounded-lg px-2.5 py-1.5">
        <div class="min-w-0"><p class="text-[11px] font-bold text-[var(--ink)] truncate">${d(r.subject_name)}</p><p class="text-[9px] text-[var(--muted-2)]">${d(r.subject_code)} · ${d(r.semester)} · ${d(r.teacher_name)}</p></div>
        <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${X(r.status)}">${Y(r.status).label}</span>
      </div>`).join(""):'<p class="text-center text-[11px] text-[var(--muted-2)] py-2">ไม่มีรายวิชา</p>':'<p class="text-center text-[11px] text-[var(--muted-2)] py-2">กำลังโหลด...</p>'}
      <button data-print-student="${e.student_id}" class="mt-1 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายบุคคล</button>
    </div>`:""}
  </div>`}function xa(e){e.querySelectorAll("[data-toggle-room]").forEach(a=>a.addEventListener("click",async()=>{const t=a.dataset.toggleRoom;if(i.expandedRooms.has(t))i.expandedRooms.delete(t),P();else if(i.expandedRooms.add(t),P(),!i.roomStudents[t]){try{i.roomStudents[t]=await Ve(i.browseCategory,t)}catch{i.roomStudents[t]=[]}P()}})),e.querySelectorAll("[data-toggle-student]").forEach(a=>a.addEventListener("click",async()=>{const t=Number(a.dataset.toggleStudent);if(i.expandedStudents.has(t))i.expandedStudents.delete(t),P();else if(i.expandedStudents.add(t),P(),!i.studentSubjects[t]){try{i.studentSubjects[t]=await ze(t)}catch{i.studentSubjects[t]=[]}P()}})),e.querySelectorAll("[data-toggle-sort]").forEach(a=>a.addEventListener("click",()=>{i.classroomSortDesc=!i.classroomSortDesc,P()})),e.querySelectorAll("[data-print-room]").forEach(a=>a.addEventListener("click",()=>ha(a.dataset.printRoom))),e.querySelectorAll("[data-print-student]").forEach(a=>a.addEventListener("click",()=>$a(Number(a.dataset.printStudent))))}const ya=`
  body{font-family:'Sarabun',sans-serif;padding:24px;color:#1f2937;}
  h1{font-size:18px;margin-bottom:4px;}
  p.sub{color:#666;font-size:12px;margin-bottom:16px;}
  table{width:100%;border-collapse:collapse;font-size:13px;}
  th,td{border:1px solid #ccc;padding:6px 8px;text-align:left;}
  th{background:#f3f4f6;}
  @media print { body{padding:0;} }`;function at(e,a){const t=`<!doctype html><html><head><meta charset="utf-8"><title>${d(e)}</title><style>${ya}</style></head><body>${a}</body></html>`;zt(t,{autoprint:!0})}async function ha(e){let a=i.roomStudents[e];if(!a)try{a=await Ve(i.browseCategory,e)}catch(r){x("โหลดข้อมูลไม่สำเร็จ: "+r.message,"error");return}a=tt(a);const t=a.map((r,s)=>`<tr>
    <td>${s+1}</td><td style="text-align:center">${d(r.student_code||"")}</td><td>${d(r.full_name)}</td>
    <td style="text-align:center">${r.not_yet}</td><td style="text-align:center">${r.requested}</td><td style="text-align:center">${r.done}</td>
  </tr>`).join("");at(`รายชื่อห้อง ${e}`,`
    <h1>รายชื่อนักเรียนที่มีวิชาค้าง — ห้อง ${d(e)}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} คน · เรียงตาม${i.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</p>
    <table><thead><tr><th>#</th><th style="text-align:center">เลขประจำตัว</th><th>ชื่อ-สกุล</th><th>ค้าง</th><th>จำนงแล้ว</th><th>สำเร็จ</th></tr></thead>
    <tbody>${t}</tbody></table>`)}async function $a(e){var n;let a=i.studentSubjects[e],t=null;for(const l in i.roomStudents){const u=(n=i.roomStudents[l])==null?void 0:n.find(b=>b.student_id===e);if(u){t=u;break}}if(!a)try{a=await ze(e)}catch(l){x("โหลดข้อมูลไม่สำเร็จ: "+l.message,"error");return}const r=a.map((l,u)=>`<tr>
    <td>${u+1}</td><td>${d(l.subject_name)}</td><td>${d(l.subject_code)}</td>
    <td>${d(l.category)}</td><td>${d(l.semester)}</td><td>${d(l.teacher_name)}</td><td>${d(Y(l.status).label)}</td>
  </tr>`).join(""),s=(t==null?void 0:t.full_name)||"-";at(`รายวิชาค้าง ${s}`,`
    <h1>รายวิชาที่ค้างของ ${d(s)}${t!=null&&t.student_code?` (${d(t.student_code)})`:""}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} วิชา</p>
    <table><thead><tr><th>#</th><th>รายวิชา</th><th>รหัสวิชา</th><th>หมวด</th><th>ภาคเรียน</th><th>ครูผู้สอน</th><th>สถานะ</th></tr></thead>
    <tbody>${r}</tbody></table>`)}function Be(e){const a=document.getElementById("regrade-drilldown");if(!i.drilldown){a.innerHTML="";return}const t={all:"รายวิชาค้างทั้งหมด",requested:"จำนงแล้ว",assigned:"กำลังดำเนินการปรับแก้",done:"ปรับแก้สำเร็จ"};let r=[];i.drilldown==="all"?r=e:i.drilldown==="requested"?r=e.filter(n=>n.status==="จำนงแล้ว"||n.status==="กำลังดำเนินการปรับแก้"):i.drilldown==="assigned"?r=e.filter(n=>n.status==="กำลังดำเนินการปรับแก้"):i.drilldown==="done"&&(r=e.filter(n=>n.status==="ปรับแก้สำเร็จ"));const s=r.reduce((n,l)=>(n[l.class_level||"-"]=(n[l.class_level||"-"]||0)+Number(l.cnt),n),{});a.innerHTML=`<div class="rg-card p-4 mb-4">
    <div class="flex justify-between items-center mb-3">
      <p class="text-xs font-bold text-[var(--ink-2)]">รายละเอียด: ${d(t[i.drilldown])}</p>
      <button id="regrade-drill-close" class="w-6 h-6 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-xs">✕</button>
    </div>
    <p class="text-xs text-[var(--muted-2)]">${H(r)} รายการ</p>
    <p class="text-[11px] text-[var(--muted)] mt-2">แยกตามชั้น: ${Object.entries(s).map(([n,l])=>`${d(n)} (${l})`).join(", ")||"-"}</p>
  </div>`,document.getElementById("regrade-drill-close").addEventListener("click",()=>{i.drilldown=null,a.innerHTML=""})}const O={activeTab:"general"};function W(e,a,t){return`<button type="button" data-settings-tab="${e}" class="flex-shrink-0" style="${C(t)}">${d(a)}</button>`}function wa(e,a,t){return`<button type="button" data-level-chip="${d(e)}" data-on="${t?"1":"0"}" class="px-2.5 py-1 rounded-full text-[11px] font-bold" style="${t?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}">${d(a)}</button>`}function Ne(e,a){O.activeTab=a,e.querySelectorAll("[data-settings-group]").forEach(t=>t.classList.toggle("hidden",t.dataset.settingsGroup!==a)),e.querySelectorAll("[data-settings-tab]").forEach(t=>{t.style.cssText=C(t.dataset.settingsTab===a)+"flex-shrink:0;"})}async function M(){var T,I,N,$e;Z("ตั้งค่าระบบ",`⚙️ ตั้งค่า${g.cfg.system_name||"แก้ค้างเก่า"}`);const e=document.getElementById("regrade-content");let a,t,r,s,n,l,u;try{[a,t,r,s,n,l,u]=await Promise.all([ut(),pt(),mt(),De(),Pe(),Nt(),gt()])}catch(m){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${d(m.message)}</div>`;return}const b=new Map(s.map(m=>[m.profile_id,m])),f=g.cfg,w=new Set(f.intent_open_levels||[]);e.innerHTML=`
    <div class="max-w-2xl mx-auto p-4 flex flex-col gap-4">

      <div class="flex gap-1 p-1 rounded-full bg-[var(--surface-2)] overflow-x-auto">
        ${W("general","⚙️ ทั่วไป",O.activeTab==="general")}
        ${W("intent","📝 การแจ้งจำนง",O.activeTab==="intent")}
        ${W("theme","🎨 ดีไซน์",O.activeTab==="theme")}
        ${W("data","📥 ข้อมูล",O.activeTab==="data")}
        ${W("document","📄 เอกสาร",O.activeTab==="document")}
        ${W("access","🔐 สิทธิ์การเข้าถึง",O.activeTab==="access")}
      </div>

      <button id="regrade-set-save" class="w-full py-3 rounded-2xl text-white font-bold text-sm" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">บันทึกการตั้งค่า</button>

      <div data-settings-group="general" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ชื่อระบบ</p>
          <input id="regrade-set-name" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm" value="${d(f.system_name||"แก้ค้างเก่า")}">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ข้อความประกาศ</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎓 สำหรับนักเรียน</label>
          <textarea id="regrade-set-ann-student" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">${d(f.student_announcement||"")}</textarea>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">👨‍🏫 สำหรับครูผู้สอน</label>
          <textarea id="regrade-set-ann-teacher" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">${d(f.teacher_announcement||"")}</textarea>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">การมองเห็นเมนู</p>
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้านักเรียน</span>
            ${Q("regrade-set-vis-student",(T=f.visibility)==null?void 0:T.student_menu)}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้าครู</span>
            ${Q("regrade-set-vis-teacher",(I=f.visibility)==null?void 0:I.teacher_menu)}
          </div>
        </div>
      </div>

      <div data-settings-group="intent" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <div class="flex items-center justify-between mb-1">
            <p class="text-sm font-bold text-[var(--ink)]">การแจ้งความจำนงของนักเรียน</p>
            ${Q("regrade-set-intent",f.intent_open)}
          </div>
          <p class="text-xs text-[var(--muted-2)] mb-3">ควบคุมปุ่มลอย "จำนงขอแก้/ปรับ" และปุ่มแจ้งความจำนงในการ์ดแต่ละวิชาที่นักเรียนเห็น</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เปิดรับตั้งแต่</label>
          <input id="regrade-set-intent-start" type="datetime-local" value="${d(f.intent_window_start||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ถึงวันที่</label>
          <input id="regrade-set-intent-end" type="datetime-local" value="${d(f.intent_window_end||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ระดับชั้นที่เปิดให้แจ้งความจำนง</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">เลือกเฉพาะระดับชั้นที่ต้องการเปิดรับ — ถ้าไม่เลือกเลยสักระดับ = เปิดทุกระดับชั้น (ค่าเริ่มต้น)</p>
          ${["สามัญ","ศาสนา"].map(m=>{const v=n.filter(k=>k.category===m);return v.length?`<p class="text-[11px] font-bold text-[var(--ink-2)] mb-1.5 mt-2">${m==="สามัญ"?"📘":"🕌"} ${d(m)}</p>
            <div class="flex flex-wrap gap-1.5 mb-2">${v.map(k=>wa(`${k.category}|${k.class_level}`,k.class_level,w.has(`${k.category}|${k.class_level}`))).join("")}</div>`:""}).join("")}
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">กำหนดเวลาตอบรับของครูผู้สอน</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ช่วงเวลาที่ครูควรตอบรับ (นัดสอบปรับ/ให้งานแก้) หลังนักเรียนแจ้งความจำนง</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เริ่มตอบรับได้ตั้งแต่</label>
          <input id="regrade-set-response-start" type="datetime-local" value="${d(f.response_window_start||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ตอบรับให้เสร็จภายใน</label>
          <input id="regrade-set-response-end" type="datetime-local" value="${d(f.response_window_end||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ปุ่ม "ส่งสรุปเกรดเข้าระบบ" ในหน้าบันทึกคะแนนของครู</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ครูจะเห็นปุ่มนี้ในหน้าบันทึกคะแนนของแต่ละห้อง (pp5 ปกติ) ก็ต่อเมื่อถึงวันที่กำหนดไว้นี้แล้วเท่านั้น — กดแล้วระบบจะสรุปว่านักเรียนคนไหนติด 0/ถูกบังคับเกรด แล้วส่งเข้าระบบแก้ค้างเก่าอัตโนมัติ (ไม่ทับรายการที่มีอยู่แล้ว กดซ้ำได้ปลอดภัย)</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">แสดงปุ่มตั้งแต่วันที่</label>
          <input id="regrade-set-live-submit-date" type="date" value="${d(f.live_submit_open_date||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
          <p class="text-[11px] text-[var(--muted-2)] mt-1.5">เว้นว่างไว้ = ยังไม่แสดงปุ่มนี้เลย</p>
        </div>

        <div class="rg-card p-5">
          <div class="flex items-center justify-between">
            <div class="min-w-0 pr-3">
              <p class="text-sm font-bold text-[var(--ink)]">แสดงกำหนดเวลาในหน้าภาพรวม</p>
              <p class="text-xs text-[var(--muted-2)] mt-0.5">เปิดแล้วนักเรียนจะเห็นกำหนดการแจ้งความจำนงพร้อมปุ่มไปแจ้งความจำนง และครูจะเห็นกำหนดการตอบรับพร้อมปุ่มไปตอบรับ ในแท็บ "ภาพรวม" ของตัวเอง</p>
            </div>
            ${Q("regrade-set-show-deadline",f.show_deadline_banner)}
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
            ${Object.entries(rt).map(([m,v])=>`
            <button data-preset="${m}" class="flex flex-col items-center gap-1.5">
              <span class="block w-11 h-11 rounded-xl border border-[var(--line)]" style="background:linear-gradient(135deg, ${v.primary} 30%, ${v.secondary} 65%, ${v.gold} 100%)"></span>
              <span class="text-[10px] font-bold text-[var(--muted)]">${d(v.label)}</span>
            </button>`).join("")}
          </div>

          <div class="grid grid-cols-3 gap-3 mb-4">
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎀 สีหลัก (สามัญ)</label><input id="regrade-set-primary" type="color" value="${f.primary_color||"#9d174d"}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🕌 สีรอง (ศาสนา)</label><input id="regrade-set-secondary" type="color" value="${f.secondary_color||"#065f46"}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">✨ สีทอง</label><input id="regrade-set-gold" type="color" value="${f.gold_color||"#b45309"}" class="w-full h-9"></div>
          </div>

          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ความโปร่งของกระจก (เฉพาะหน้าจอมือถือ)</label>
          <input id="regrade-set-glass-alpha" type="range" min="0.2" max="0.9" step="0.05" value="${f.glass_alpha??.55}" class="w-full">
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
              <input id="admin-regrade-year" type="number" min="2500" max="2700" value="${d((u==null?void 0:u.academicYear)??2569)}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
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
        ${le.map(({key:m,suffix:v,emoji:k,label:S})=>{var D;const A=(D=f.regrade_slip_template_ids)==null?void 0:D[m];return`
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">${k} เทมเพลตใบสั้น — ${S}</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เทมเพลตที่ใช้อยู่</label>
          <select id="regrade-set-slip-template-${v}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
            <option value="">— ยังไม่เลือก —</option>
            ${l.map(F=>`<option value="${F.id}" ${String(A??"")===String(F.id)?"selected":""}>${d(F.name)}</option>`).join("")}
          </select>
          <button id="regrade-slip-design-edit-${v}" type="button" class="w-full mb-3 py-2 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🎨 แก้ไขดีไซน์เทมเพลตที่เลือก</button>
          <div class="pt-3 border-t border-dashed border-[var(--line-soft)]">
            <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">หรือสร้างเทมเพลตใหม่</label>
            <div class="flex gap-2">
              <input id="regrade-slip-new-name-${v}" placeholder="ชื่อเทมเพลต เช่น ใบสั้น${S}" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs">
              <button id="regrade-slip-design-new-${v}" type="button" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ ออกแบบใหม่</button>
            </div>
          </div>
        </div>`}).join("")}
      </div>

      <div data-settings-group="access" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้ดูแลระบบ (เข้าหน้าตั้งค่านี้ได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${a.map(m=>oe(m,"admin",b)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-admin" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-admin" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้ ไม่แก้ตั้งค่า)</p>
          <div class="flex flex-wrap gap-2 mb-3">${r.map(m=>oe(m,"executive",b)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-executive" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-executive" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">เจ้าหน้าที่ฝ่ายทะเบียน (เข้าหน้าปิดงานได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${t.map(m=>oe(m,"registrar",b)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-registrar" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-registrar" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">+ เพิ่ม</button>
          </div>
        </div>
      </div>

      <datalist id="regrade-teacher-datalist">${s.map(m=>`<option value="${d(m.full_name)}${m.teacher_code?` (${d(m.teacher_code)})`:""} · รหัส ${m.id}"></option>`).join("")}</datalist>
    </div>`,Ne(e,O.activeTab),e.querySelectorAll("[data-settings-tab]").forEach(m=>m.addEventListener("click",()=>Ne(e,m.dataset.settingsTab))),e.querySelectorAll("[data-level-chip]").forEach(m=>m.addEventListener("click",()=>{const v=m.dataset.on!=="1";m.dataset.on=v?"1":"0",m.style.cssText=v?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}));const o=e.querySelector("#admin-regrade-batch-result"),c=e.querySelector("#admin-regrade-preview"),h=e.querySelector("#admin-regrade-submit");let $=null,L=null;const z=(m,v=!1)=>{const k=Array.isArray(m==null?void 0:m.classes)?m.classes:[],S=k.slice(0,30).map(A=>`
      <tr class="border-t border-[var(--line-soft)]">
        <td class="px-2 py-1.5">${d(A.class_name||"-")}</td>
        <td class="px-2 py-1.5">${d(A.subject_code||"-")} ${d(A.subject_name||"")}</td>
        <td class="px-2 py-1.5">${d(A.teacher_name||"-")}</td>
        <td class="px-2 py-1.5 text-right font-bold">${Number(A.failing_count||0)}</td>
      </tr>`).join("");o.innerHTML=`
      <div class="rounded-xl p-3 text-xs" style="background:var(--surface-2);border:1px solid var(--line-soft);">
        <p class="font-bold text-[var(--ink)]">${v?"ส่งข้อมูลเรียบร้อยแล้ว":"ผลการตรวจสอบรายการ"}</p>
        <p class="mt-1 text-[var(--muted)]">ภาคเรียน ${d(m.semester)}/${d(m.academic_year)} · พบห้องที่มีรายการติด ${Number(m.class_count||0)} ห้อง · นักเรียนที่ติดทั้งหมด ${Number(m.failing_count||0)} คน</p>
        <p class="mt-1 text-[var(--muted-2)]">ระบบจะไม่นับนักเรียนที่ยังไม่มีคะแนนครบทุกช่อง เว้นแต่มีการกำหนดผลพิเศษไว้แล้ว</p>
        ${v?`<p class="mt-1 font-bold" style="color:var(--ok)">เพิ่มรายการใหม่ ${Number(m.submitted||0)} รายการ</p>`:`<p class="mt-1" style="color:var(--gold-ink)">รายการที่มีอยู่แล้ว ${Number(m.existing_count||0)} รายการ จะไม่ถูกสร้างซ้ำ</p>`}
        ${k.length?`<div class="overflow-x-auto mt-3"><table class="w-full text-[11px]"><thead><tr class="text-left text-[var(--muted-2)]"><th class="px-2 py-1">ห้อง</th><th class="px-2 py-1">รายวิชา</th><th class="px-2 py-1">ครูผู้สอน</th><th class="px-2 py-1 text-right">ติด</th></tr></thead><tbody>${S}</tbody></table>${k.length>30?`<p class="text-center text-[10px] text-[var(--muted-2)] mt-2">แสดง 30 จาก ${k.length} ห้อง</p>`:""}</div>`:'<p class="text-center text-[var(--muted-2)] py-3">ไม่พบรายการนักเรียนที่ติดในภาคเรียนนี้</p>'}
      </div>`},y=()=>{var m,v;return{year:Number((m=e.querySelector("#admin-regrade-year"))==null?void 0:m.value),semester:Number((v=e.querySelector("#admin-regrade-semester"))==null?void 0:v.value)}},_=()=>{$=null,L=null,h==null||h.classList.add("hidden")};(N=e.querySelector("#admin-regrade-year"))==null||N.addEventListener("input",_),($e=e.querySelector("#admin-regrade-semester"))==null||$e.addEventListener("change",_),c==null||c.addEventListener("click",async()=>{const{year:m,semester:v}=y();if(!Number.isInteger(m)||m<2500||![1,2].includes(v)){x("กรุณาเลือกปีการศึกษาและภาคเรียนให้ถูกต้อง","warning");return}c.disabled=!0,c.textContent="กำลังตรวจสอบ...";try{$=await Se(m,v,!1),L={year:m,semester:v},z($),h.classList.toggle("hidden",!Number($.failing_count))}catch(k){x("ตรวจสอบไม่สำเร็จ: "+k.message,"error")}finally{c.disabled=!1,c.textContent="🔎 ตรวจสอบรายการก่อนส่ง"}}),h==null||h.addEventListener("click",async()=>{const{year:m,semester:v}=y();if(!($!=null&&$.failing_count)||(L==null?void 0:L.year)!==m||(L==null?void 0:L.semester)!==v){x("กรุณาตรวจสอบรายการของภาคเรียนที่เลือกใหม่ก่อนส่ง","warning");return}if(await R({title:"ยืนยันส่งสรุปเกรดทุกห้อง",message:`ส่งนักเรียนที่ติด ${Number($.failing_count)} คน ของภาคเรียน ${v}/${m} เข้าระบบแก้ค้างเก่าใช่หรือไม่? รายการเดิมจะไม่ถูกสร้างซ้ำ`,confirmText:"ยืนยันส่งทุกห้อง"})){h.disabled=!0,h.textContent="กำลังส่ง...";try{const S=await Se(m,v,!0);z(S,!0),x(`ส่งสำเร็จ เพิ่มรายการใหม่ ${Number(S.submitted||0)} รายการ ✅`,"success")}catch(S){x("ส่งข้อมูลไม่สำเร็จ: "+S.message,"error")}finally{h.disabled=!1,h.textContent="📤 ยืนยันส่งทุกห้อง"}}}),e.querySelectorAll("[data-remove-admin]").forEach(m=>m.addEventListener("click",async()=>{if(await R({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้ดูแลระบบของ "${m.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await ft(m.dataset.removeAdmin),x("ถอดสิทธิ์แล้ว","success"),M()}catch(k){x(k.message,"error")}})),e.querySelectorAll("[data-remove-registrar]").forEach(m=>m.addEventListener("click",async()=>{if(await R({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์เจ้าหน้าที่ทะเบียนของ "${m.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await vt(m.dataset.removeRegistrar),x("ถอดสิทธิ์แล้ว","success"),M()}catch(k){x(k.message,"error")}})),e.querySelectorAll("[data-remove-executive]").forEach(m=>m.addEventListener("click",async()=>{if(await R({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้บริหารของ "${m.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await bt(m.dataset.removeExecutive),x("ถอดสิทธิ์แล้ว","success"),M()}catch(k){x(k.message,"error")}})),document.getElementById("regrade-add-admin").addEventListener("click",async()=>{const m=document.getElementById("regrade-new-admin"),v=J(m.value,s);if(!v){x("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(a.some(S=>S.profile_id===v.profile_id)){x("ครูคนนี้เป็นผู้ดูแลระบบอยู่แล้ว","warning");return}if(await R({title:"ยืนยันเพิ่มผู้ดูแลระบบ",message:`เพิ่ม "${v.full_name}" เป็นผู้ดูแลระบบแก้ค้างเก่าใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await xt(v.profile_id),m.value="",x("เพิ่มแล้ว ✅","success"),M()}catch(S){x(S.message,"error")}}),document.getElementById("regrade-add-registrar").addEventListener("click",async()=>{const m=document.getElementById("regrade-new-registrar"),v=J(m.value,s);if(!v){x("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(t.some(S=>S.profile_id===v.profile_id)){x("ครูคนนี้เป็นเจ้าหน้าที่ทะเบียนอยู่แล้ว","warning");return}if(await R({title:"ยืนยันเพิ่มเจ้าหน้าที่ทะเบียน",message:`เพิ่ม "${v.full_name}" เป็นเจ้าหน้าที่ฝ่ายทะเบียนใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await yt(v.profile_id),m.value="",x("เพิ่มแล้ว ✅","success"),M()}catch(S){x(S.message,"error")}}),document.getElementById("regrade-add-executive").addEventListener("click",async()=>{const m=document.getElementById("regrade-new-executive"),v=J(m.value,s);if(!v){x("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(r.some(S=>S.profile_id===v.profile_id)){x("ครูคนนี้เป็นผู้บริหารอยู่แล้ว","warning");return}if(await R({title:"ยืนยันเพิ่มผู้บริหาร",message:`เพิ่ม "${v.full_name}" เป็นผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้) ใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await ht(v.profile_id),m.value="",x("เพิ่มแล้ว ✅","success"),M()}catch(S){x(S.message,"error")}}),document.getElementById("regrade-set-save").addEventListener("click",async()=>{if(await R({title:"ยืนยันบันทึกการตั้งค่า",message:"บันทึกการตั้งค่าทั้งหมดนี้ใช่หรือไม่? จะมีผลกับทุกคนทันที",confirmText:"บันทึก"}))try{await Ee({intent_open:ee(e,"regrade-set-intent"),intent_window_start:document.getElementById("regrade-set-intent-start").value,intent_window_end:document.getElementById("regrade-set-intent-end").value,intent_open_levels:[...e.querySelectorAll('[data-level-chip][data-on="1"]')].map(v=>v.dataset.levelChip),response_window_start:document.getElementById("regrade-set-response-start").value,response_window_end:document.getElementById("regrade-set-response-end").value,live_submit_open_date:document.getElementById("regrade-set-live-submit-date").value,show_deadline_banner:ee(e,"regrade-set-show-deadline"),visibility:{student_menu:ee(e,"regrade-set-vis-student"),teacher_menu:ee(e,"regrade-set-vis-teacher")},primary_color:document.getElementById("regrade-set-primary").value,secondary_color:document.getElementById("regrade-set-secondary").value,gold_color:document.getElementById("regrade-set-gold").value,glass_alpha:Number(document.getElementById("regrade-set-glass-alpha").value),student_announcement:document.getElementById("regrade-set-ann-student").value,teacher_announcement:document.getElementById("regrade-set-ann-teacher").value,system_name:document.getElementById("regrade-set-name").value.trim()||"แก้ค้างเก่า",regrade_slip_template_ids:Object.fromEntries(le.map(({key:v,suffix:k})=>[v,document.getElementById(`regrade-set-slip-template-${k}`).value||null]))}),x("บันทึกการตั้งค่าเรียบร้อย ✅","success"),g.cfg=await ce(),st(),M()}catch(v){x("บันทึกไม่สำเร็จ: "+v.message,"error")}}),le.forEach(({key:m,suffix:v,label:k})=>{document.getElementById(`regrade-slip-design-new-${v}`).addEventListener("click",()=>{const S=document.getElementById(`regrade-slip-new-name-${v}`).value.trim()||`ใบสั้นแก้ค้างเก่า (${k})`;Te({template:{name:S,type:"custom",layout:Ut},previewVariables:je,placeholderTokens:Le,onSave:async(A,D)=>{var we,ke;const F=await Dt({name:S,type:"custom",presetKey:null,backgroundImageUrl:D,layout:A,createdByTeacherId:((we=g.teacherRow)==null?void 0:we.id)??null}),nt={...((ke=g.cfg)==null?void 0:ke.regrade_slip_template_ids)||{},[m]:F.id};await Ee({regrade_slip_template_ids:nt}),x(`สร้างเทมเพลต "${k}" และตั้งเป็นค่าที่ใช้แล้ว ✅`,"success"),g.cfg=await ce(),M()}})}),document.getElementById(`regrade-slip-design-edit-${v}`).addEventListener("click",()=>{const S=Number(document.getElementById(`regrade-set-slip-template-${v}`).value);if(!S){x("กรุณาเลือกเทมเพลตก่อน","warning");return}const A=l.find(D=>D.id===S);A&&Te({template:A,previewVariables:je,placeholderTokens:Le,onSave:async(D,F)=>{await Pt({id:A.id,layout:D,backgroundImageUrl:F}),x("บันทึกดีไซน์แล้ว ✅","success")}})})}),Zt(e,["regrade-set-intent","regrade-set-vis-student","regrade-set-vis-teacher","regrade-set-show-deadline"]),Sa(e),ka(e)}const rt={default:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.55,label:"ค่าเริ่มต้น"},dark:{primary:"#701138",secondary:"#043d2d",gold:"#78350f",glassAlpha:.45,label:"เข้ม"},airy:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.25,label:"โปร่งใส"},tint:{primary:"#db2777",secondary:"#059669",gold:"#d97706",glassAlpha:.65,label:"ย้อมสี"}};function ka(e){const a=e.querySelector("#regrade-set-primary"),t=e.querySelector("#regrade-set-secondary"),r=e.querySelector("#regrade-set-gold"),s=e.querySelector("#regrade-set-glass-alpha"),n=e.querySelector("#regrade-theme-preview"),l=e.querySelector("#regrade-theme-preview-sec"),u=e.querySelector("#regrade-theme-preview-gold"),b=document.documentElement;function f(){n.style.background=a.value,l.style.background=t.value,u.style.background=r.value,b.style.setProperty("--primary",a.value),b.style.setProperty("--secondary",t.value),b.style.setProperty("--gold",r.value),b.style.setProperty("--glass-alpha",s.value)}f(),[a,t,r,s].forEach(w=>w.addEventListener("input",f)),e.querySelectorAll("[data-preset]").forEach(w=>w.addEventListener("click",()=>{const o=rt[w.dataset.preset];o&&(a.value=o.primary,t.value=o.secondary,r.value=o.gold,s.value=o.glassAlpha,f())}))}function _a(e){if(!e.length)return'<p class="text-xs text-[var(--muted-2)] text-center py-4">ไม่พบข้อมูลในไฟล์</p>';const a=["student_code","subject_code","subject_name","category","semester","class_level","teacher_code"],t=e.slice(0,10);return`<div class="overflow-x-auto rounded-xl border border-[var(--line)]">
    <table class="w-full text-[11px]">
      <thead class="bg-[var(--surface-2)] text-[var(--muted-2)]"><tr>${a.map(r=>`<th class="px-2 py-1.5 text-left">${r}</th>`).join("")}</tr></thead>
      <tbody>${t.map(r=>`<tr class="border-t border-[var(--line-soft)]">${a.map(s=>`<td class="px-2 py-1.5 text-[var(--ink-2)]">${d(r[s]??"")}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
    ${e.length>10?`<p class="text-center text-[10px] text-[var(--muted-2)] py-1.5">แสดง 10 จาก ${e.length} แถว</p>`:""}
  </div>`}function Sa(e){let a=null;const t=e.querySelector("#regrade-csv-file"),r=e.querySelector("#regrade-csv-preview"),s=e.querySelector("#regrade-csv-import-btn"),n=e.querySelector("#regrade-csv-result");t==null||t.addEventListener("change",async()=>{var u;n.innerHTML="";const l=(u=t.files)==null?void 0:u[0];if(!l){a=null,r.innerHTML="",s.classList.add("hidden");return}try{const b=await l.text();a=lt(b),r.innerHTML=_a(It(a)),s.classList.toggle("hidden",a.length===0)}catch(b){r.innerHTML="",x("อ่านไฟล์ CSV ไม่สำเร็จ: "+b.message,"error")}}),s==null||s.addEventListener("click",async()=>{if(!(!(a!=null&&a.length)||!await R({title:"ยืนยันนำเข้าข้อมูล CSV",message:`นำเข้าข้อมูลรายวิชาค้าง ${a.length} แถวเข้าสู่ระบบใช่หรือไม่? แถวที่มีอยู่แล้วในระบบจะถูกข้าม ไม่ทับข้อมูลเดิม`,confirmText:"ยืนยันนำเข้า"}))){s.disabled=!0,s.textContent="กำลังนำเข้า...";try{const u=await Mt(a);n.innerHTML=`
        <div class="rounded-xl p-3" style="background:var(--ok-soft);border:1px solid var(--ok-soft-line);color:var(--ok)">
          นำเข้าสำเร็จ ${u.imported} แถว จากทั้งหมด ${u.total} แถว
          ${u.skippedDuplicate?`<br>ข้าม ${u.skippedDuplicate} แถว (มีอยู่แล้วในระบบ)`:""}
          ${u.skippedNoStudent?`<br>ข้าม ${u.skippedNoStudent} แถว (ไม่พบรหัสนักเรียนในระบบ)`:""}
          ${u.skippedInvalid?`<br>ข้าม ${u.skippedInvalid} แถว (ข้อมูลไม่ครบ/หมวดไม่ถูกต้อง)`:""}
          ${u.unmatchedTeacher?`<br>⚠️ ${u.unmatchedTeacher} แถว ไม่พบรหัสครู (นำเข้าแล้วแต่ยังไม่ผูกครูผู้สอน)`:""}
        </div>`,x("นำเข้าข้อมูลเรียบร้อย ✅","success"),a=null,t.value="",r.innerHTML="",s.classList.add("hidden")}catch(u){x("นำเข้าไม่สำเร็จ: "+u.message,"error")}finally{s.disabled=!1,s.textContent="นำเข้าข้อมูล"}}})}function J(e,a){const t=e.trim().match(/· รหัส (\d+)$/);return t?a.find(r=>r.id===Number(t[1]))??null:null}function oe(e,a,t){var l;const r=t==null?void 0:t.get(e.profile_id),s=r?`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`:((l=e.profiles)==null?void 0:l.user_code)||e.profile_id,n=a==="admin"?`data-remove-admin="${d(e.profile_id)}"`:a==="executive"?`data-remove-executive="${d(e.profile_id)}"`:`data-remove-registrar="${d(e.profile_id)}"`;return`<span class="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">
    ${d(s)}
    <button ${n} data-name="${d(s)}" class="w-4 h-4 rounded-full text-[10px]" style="background:var(--primary-soft-line)">×</button>
  </span>`}function st(){const e=document.documentElement;g.cfg.primary_color&&e.style.setProperty("--primary",g.cfg.primary_color),g.cfg.secondary_color&&e.style.setProperty("--secondary",g.cfg.secondary_color),g.cfg.gold_color&&e.style.setProperty("--gold",g.cfg.gold_color),g.cfg.glass_alpha!=null&&e.style.setProperty("--glass-alpha",g.cfg.glass_alpha)}let ye=null;function dt(){var a,t;const e=[];return g.role==="student"&&g.studentRow&&((a=g.cfg.visibility)!=null&&a.student_menu||g.isAdmin)&&e.push({key:"student",icon:"🎓",label:"ของฉัน"}),g.role==="teacher"&&g.teacherRow&&((t=g.cfg.visibility)!=null&&t.teacher_menu||g.isAdmin)&&e.push({key:"teacher",icon:"📚",label:"งานสอนของฉัน"}),g.isRegistrar&&e.push({key:"registrar",icon:"📋",label:"ฝ่ายทะเบียน"}),g.isExecutive&&e.push({key:"dashboard",icon:"📊",label:"ผู้บริหาร"}),g.isAdmin&&e.push({key:"settings",icon:"⚙️",label:"ตั้งค่าระบบ"}),e}async function he(e){ye=e,document.getElementById("regrade-bottom-tabs").innerHTML="";const a=dt();if(Ea(a),Ta(a),e==="student")return U();if(e==="teacher")return E();if(e==="registrar")return pe();if(e==="dashboard")return xe();if(e==="settings")return M()}function Ea(e){e.length>1?ve(e,ye,he):document.getElementById("regrade-sidebar-nav").innerHTML=""}function Ta(e){const a=document.getElementById("regrade-role-switcher");if(a){if(e.length<=1){a.innerHTML="";return}a.innerHTML=`<div class="rg-switcher-bar flex gap-2 overflow-x-auto px-4 py-2 border-b border-[var(--line-soft)]">${e.map(t=>`
    <button data-switch-sec="${t.key}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition"
      style="${ye===t.key?"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;":"background:var(--surface-2);color:var(--muted);"}">${t.icon} ${d(t.label)}</button>`).join("")}</div>`,a.querySelectorAll("[data-switch-sec]").forEach(t=>t.addEventListener("click",()=>he(t.dataset.switchSec)))}}function ie(){document.getElementById("regrade-content").innerHTML=`
    <div class="max-w-md mx-auto p-6 text-center text-[var(--muted)]">
      <p class="text-4xl mb-3">🔒</p>
      <p class="text-sm">บัญชีนี้ยังไม่มีสิทธิ์เข้าใช้งานระบบแก้ค้างเก่า</p>
    </div>`}async function La(){const{data:{session:e}}=await _e.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:a}=await _e.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single();g.role=a==null?void 0:a.role;const r={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[g.role]||"index.html",s=document.getElementById("regrade-back-btn-desktop"),n=document.getElementById("regrade-back-btn-mobile");if(window.self!==window.top){const b=f=>{f.preventDefault(),typeof window.parent.closeRegradeModal=="function"?window.parent.closeRegradeModal():window.parent.location.href=r};s.removeAttribute("href"),n.removeAttribute("href"),s.addEventListener("click",b),n.addEventListener("click",b)}else s.href=r,n.href=r;try{g.cfg=await ce();const b=await ot();g.isAdmin=b.isAdmin||g.role==="admin"||(a==null?void 0:a.is_also_admin)===!0,g.isRegistrar=b.isRegistrar||g.isAdmin,g.isExecutive=b.isExecutive||g.isAdmin}catch(b){document.getElementById("regrade-content").innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดการตั้งค่าไม่สำเร็จ: ${d(b.message)}</div>`;return}if(st(),g.role==="student"&&(g.studentRow=await it()),g.role==="teacher"&&(g.teacherRow=await ct()),g.role==="student"&&!g.studentRow){ie();return}if(g.role==="teacher"&&!g.teacherRow){ie();return}const l=dt();if(!l.length){ie();return}const u=g.isAdmin||g.isExecutive?"dashboard":g.isRegistrar?"registrar":l[0].key;await he(u)}La();
