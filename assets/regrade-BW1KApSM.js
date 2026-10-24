import{s as Se}from"./supabase-BV-W2lsh.js";/* empty css             */import{openRegradeSlip as it}from"./regrade-slip-Dlk_TT9w.js";import{o as Ee,p as ct}from"./regrade-notifications-eJhhpMPr.js";import{a as f}from"./ui-ByLHWuG5.js";import{p as ut}from"./import-BeVIEaS6.js";import{g as pe,c as pt,a as mt,b as gt,d as vt,e as bt,f as ft,h as xt,i as Oe,j as Ve,k as yt,r as Le,l as ht,m as $t,n as wt,o as kt,p as _t,q as St,u as je,s as Et,t as Lt,v as jt,w as Tt,x as Rt,y as At,z as Ht,A as qt,B as Ct,C as It,D as Bt,E as Mt,F as Nt,G as ze,H as Dt,I as Pt,J as Ot,K as Fe,L as Ue}from"./regrade-api-CLR_bWyN.js";import{b as Vt,c as zt,u as Ft}from"./certificate-engine-C9CSnChU.js";import{o as Ut}from"./print-overlay-BVfxEd6n.js";import{o as Te}from"./certificate-editor-83ibZcxD.js";import{uploadAssignmentFile as Wt}from"./storage-CuUjCgvI.js";function We(e,a){var r;const t=(r=e==null?void 0:e.intent_test_subjects)==null?void 0:r[String(a)];return Array.isArray(t)?t.filter(Number.isSafeInteger):[]}function Gt(e,a,t){return We(e,a).includes(Number(t))}const Re=[{token:"{{student_name}}",label:"ชื่อนักเรียน"},{token:"{{student_code}}",label:"รหัสนักเรียน"},{token:"{{room}}",label:"ห้องเรียน"},{token:"{{class_level}}",label:"ชั้น/ระดับ"},{token:"{{category}}",label:"หมวด (สามัญ/ศาสนา)"},{token:"{{subject_name}}",label:"ชื่อรายวิชา"},{token:"{{subject_code}}",label:"รหัสวิชา"},{token:"{{semester}}",label:"ภาคเรียน"},{token:"{{grade_failed_at}}",label:"ผลการเรียนที่ติด (ร/มส/0)"},{token:"{{teacher_name}}",label:"ชื่อครูผู้สอน"},{token:"{{response_method}}",label:"วิธีตอบรับ/วิธีแก้"},{token:"{{due_date}}",label:"วันนัดสอบ/กำหนดส่ง"},{token:"{{file_url}}",label:"ลิงก์ไฟล์งานแก้"}],Ae={student_name:"ตัวอย่าง ชื่อ-สกุล นักเรียน",student_code:"00000",room:"ม.6/1",class_level:"ม.6",category:"สามัญ",subject_name:"วิชาตัวอย่าง",subject_code:"ว00000",semester:"1/2569",grade_failed_at:"ร",teacher_name:"ครูตัวอย่าง",response_method:"นัดสอบปรับ",due_date:"12 ธ.ค. 2569 เวลา 09:00 น.",file_url:"https://example.com/work"},Kt={orientation:"portrait",background:{type:"flat",color:"#ffffff",cardColor:"#ffffff",borderColor:"#94a3b8",borderWidth:2,borderStyle:"solid"},elements:[{id:"title",text:"ใบมอบหมายงานแก้ค้างเก่า",x:50,y:8,fontSize:22,color:"#1e293b",align:"center",bold:!0},{id:"student",text:"ชื่อ-สกุล: {{student_name}}   รหัส: {{student_code}}   ห้อง: {{room}}",x:8,y:22,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"subject",text:"รายวิชา: {{subject_name}} ({{subject_code}})   ภาคเรียน: {{semester}}",x:8,y:30,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"teacher",text:"ครูผู้สอน: {{teacher_name}}",x:8,y:38,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"issued",text:"ออกให้ ณ วันที่ {{date}}",x:8,y:85,fontSize:11,color:"#64748b",align:"left",bold:!1},{id:"sign",text:"ลายเซ็นครูผู้สอน",x:70,y:92,fontSize:11,color:"#64748b",align:"center",bold:!1,borderTop:!0}]},ie=[{key:"สามัญ",suffix:"samai",emoji:"📘",label:"สามัญ"},{key:"ศาสนา",suffix:"religion",emoji:"🕌",label:"ศาสนา"}];function be(e,a){return it(e,a,g.cfg)}const me={ว:"SC",อ:"ENG",จ:"ENG",ค:"MATH",ท:"THAI",ส:"SOC",ง:"OCC",ศ:"ART",พ:"HEALTH"};function n(e){return String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a])}function K(e){const a={ยังไม่แจ้ง:{bg:"#f3f4f6",text:"#6b7280",border:"#e5e7eb",label:"ยังไม่แจ้ง"},จำนงแล้ว:{bg:"var(--gold-soft)",text:"var(--gold-ink)",border:"var(--gold-soft-line)",label:"จำนงแล้ว · รอครูตอบรับ"},กำลังดำเนินการปรับแก้:{bg:"var(--info-soft)",text:"var(--info)",border:"var(--info-soft-line)",label:"กำลังดำเนินการปรับแก้"},ปรับแก้สำเร็จ:{bg:"var(--ok-soft)",text:"var(--ok)",border:"var(--ok-soft-line)",label:"ปรับแก้สำเร็จ ✓"}};return a[e]||a.ยังไม่แจ้ง}const Z=e=>{const a=K(e);return`background:${a.bg};color:${a.text};border:1px solid ${a.border};`},Ge=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function He(e){if(!e)return null;const a=new Date(e);if(isNaN(a.getTime()))return null;const t=String(a.getHours()).padStart(2,"0"),r=String(a.getMinutes()).padStart(2,"0");return`${a.getDate()} ${Ge[a.getMonth()]} ${a.getFullYear()+543} เวลา ${t}:${r} น.`}function Ke(e){const a=String(e||"").trim();if(!a)return{date:"",time:""};const t=a.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);if(t)return{date:`${t[1]}-${t[2]}-${t[3]}`,time:t[4]?`${t[4]}:${t[5]}`:""};const r=a.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})(?:\s+(\d{1,2}):(\d{2}))?/);if(!r)return{date:"",time:""};let s=Number(r[3]);s<100&&(s+=2500),s>2400&&(s-=543);const d=String(Number(r[2])).padStart(2,"0"),o=String(Number(r[1])).padStart(2,"0");return{date:`${s}-${d}-${o}`,time:r[4]?`${String(Number(r[4])).padStart(2,"0")}:${r[5]}`:""}}function X(e){const a=Ke(e);if(!a.date)return String(e||"-");const[t,r,s]=a.date.split("-").map(Number),d=`${s} ${Ge[r-1]} ${t+543}`;return a.time?`${d} เวลา ${a.time} น.`:d}function de(e,a){const t=Ke(e.due_text);u.form={id:Number(e.id),method:a,dueDate:t.date,dueTime:t.time,fileUrl:a==="ให้งานแก้"&&e.file_url||"",file:null,fileSource:e.file_url?"current":"none",editing:e.status==="กำลังดำเนินการปรับแก้"}}function Yt(e){return u.subjects.filter(a=>Number(a.id)!==Number(e.id)&&Number(a.teacher_id)===Number(e.teacher_id)&&a.subject_code===e.subject_code&&a.semester===e.semester&&a.category===e.category&&/^https:\/\//i.test(a.file_url||"")).sort((a,t)=>new Date(t.assigned_at||t.updated_at||0)-new Date(a.assigned_at||a.updated_at||0))[0]||null}async function Jt(e){if(de(e,"ให้งานแก้"),e.file_url){E();return}const a=Yt(e);if(a){const t=await ea(e,a);t==="reuse"?(u.form.fileUrl=a.file_url,u.form.fileSource="reuse"):(u.form.fileUrl="",u.form.fileSource=t==="upload"?"upload":"none")}E()}function Ye(e,a,t,r,s,d){const o=He(e),p=He(a);return!o&&!p?"":`<div class="rg-card p-4 mb-4" style="border-left:4px solid var(${r})">
    <p class="text-xs font-bold" style="color:var(${r})">🗓 ${n(t)}</p>
    <p class="text-sm font-bold text-[var(--ink)] mt-1">${o?`เริ่ม ${o}`:""}${o&&p?" — ":""}${p?`ถึง ${p}`:""}</p>
    <button data-deadline-cta="${n(d)}" class="mt-3 w-full py-2 rounded-xl text-white font-bold text-xs" style="background:linear-gradient(135deg,var(${r}),var(${r}-dark))">${n(s)} →</button>
  </div>`}const fe=e=>e==="ศาสนา"?"background:var(--secondary-soft);color:var(--secondary-dark);border:1px solid var(--secondary-soft-line);":"background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line);",Xt=["เด็กชาย","เด็กหญิง","ด.ช.","ด.ญ.","นางสาว","น.ส.","นาย","นาง"];function Zt(e){let a=String(e);for(const t of Xt)if(a.startsWith(t)){a=a.slice(t.length).trim();break}return a.charAt(0)||"?"}function Qt(e,a){let t=0;for(let o=0;o<String(e).length;o++)t+=e.charCodeAt(o);const r=[["#eef2ff","#4f46e5"],["#ecfdf5","#059669"],["#fef3c7","#b45309"],["#fce7f3","#be185d"],["#e0f2fe","#0284c7"],["#f3e8ff","#7c3aed"]],[s,d]=r[t%r.length];return a?`width:34px;height:44px;border-radius:8px;background:${s};color:${d};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);`:`width:30px;height:30px;border-radius:9999px;background:${s};color:${d};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0;`}function M(e,a){const t=(e==null?void 0:e.full_name)||"-",r=(e==null?void 0:e.photo_url)||(e==null?void 0:e.image_url);if(!r)return`<div style="${Qt(t,a)}">${Zt(t)}</div>`;const s=a?"width:34px;height:44px;border-radius:8px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);object-fit:cover;":"width:30px;height:30px;border-radius:9999px;flex-shrink:0;object-fit:cover;";return`<img src="${n(r)}" alt="${n(t)}" style="${s}">`}function R({title:e="ยืนยันการดำเนินการ",message:a="",confirmText:t="ยืนยัน",cancelText:r="ยกเลิก"}={}){return new Promise(s=>{var p;(p=document.getElementById("regrade-confirm-modal"))==null||p.remove();const d=document.createElement("div");d.id="regrade-confirm-modal",d.className="fixed inset-0 z-[99999] flex items-center justify-center p-4",d.innerHTML=`
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="rgc-overlay"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark))"></div>
        <div class="px-6 pt-6 pb-5 text-center">
          <h3 class="text-lg font-bold text-gray-900 mb-2">${n(e)}</h3>
          ${a?`<p class="text-sm text-gray-600 leading-relaxed">${n(a)}</p>`:""}
        </div>
        <div class="px-6 pb-6 grid grid-cols-2 gap-3">
          <button id="rgc-cancel" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-[0.97] transition-all">${n(r)}</button>
          <button id="rgc-confirm" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all"
            style="background: linear-gradient(135deg, var(--primary), var(--primary-dark))">${n(t)}</button>
        </div>
      </div>`,document.body.appendChild(d);const o=h=>{d.remove(),s(h)};d.querySelector("#rgc-overlay").addEventListener("click",()=>o(!1)),d.querySelector("#rgc-cancel").addEventListener("click",()=>o(!1)),d.querySelector("#rgc-confirm").addEventListener("click",()=>o(!0))})}function ea(e,a){return new Promise(t=>{var h;(h=document.getElementById("regrade-reuse-file-modal"))==null||h.remove();const r=document.createElement("div");r.id="regrade-reuse-file-modal",r.className="fixed inset-0 z-[99999] flex items-center justify-center p-4";const s=a.assigned_at||a.updated_at,d=s?new Date(s).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"-",o=/^https:\/\//i.test(a.file_url||"")?a.file_url:"";r.innerHTML=`
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" data-reuse-choice="upload"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background:linear-gradient(135deg,var(--gold),var(--gold-dark))"></div>
        <div class="px-6 pt-6 pb-4 text-center">
          <div class="mx-auto mb-3 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style="background:var(--gold-soft)">📎</div>
          <h3 class="text-lg font-bold text-gray-900">พบไฟล์เดิมของรายวิชานี้</h3>
          <p class="text-sm text-gray-600 leading-relaxed mt-2">${n(e.subject_name)} (${n(e.subject_code)})<br>ภาคเรียน ${n(e.semester||"-")} · ${n(e.category||"-")}</p>
          <div class="mt-3 p-3 rounded-xl text-left" style="background:var(--surface-2);border:1px solid var(--line)">
            <p class="text-xs font-bold text-[var(--ink)]">ไฟล์งานแก้ที่เคยอัปโหลด</p>
            <p class="text-[10px] text-[var(--muted-2)] mt-1">ใช้ล่าสุด ${n(d)}</p>
            ${o?`<a href="${n(o)}" target="_blank" rel="noopener" class="inline-flex mt-2 text-xs font-bold" style="color:var(--info)">เปิดดูไฟล์เดิม ↗</a>`:""}
          </div>
        </div>
        <div class="px-6 pb-6 grid gap-2">
          <button data-reuse-choice="reuse" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">ใช้ไฟล์เดิม</button>
          <button data-reuse-choice="upload" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 active:scale-[0.97] transition-all">อัปโหลดไฟล์ใหม่</button>
          <button data-reuse-choice="none" class="py-2 text-xs font-semibold text-gray-500">ไม่แนบไฟล์</button>
        </div>
      </div>`,document.body.appendChild(r);const p=v=>{r.remove(),t(v)};r.querySelectorAll("[data-reuse-choice]").forEach(v=>v.addEventListener("click",()=>p(v.dataset.reuseChoice)))})}function V(e,a="primary"){return e?`flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});`:"flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:var(--muted);background:var(--surface-2);"}function ee(e,a){return`<div class="flex items-center gap-2 flex-shrink-0">
    <span data-badge class="px-2 py-1 rounded-full text-[11px] font-bold" style="background:${a?"var(--ok-soft)":"var(--surface-2)"};color:${a?"var(--ok)":"var(--muted)"}">${a?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span>
    <button type="button" id="${e}" data-on="${a?"1":"0"}" class="px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0"
      style="${a?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;"}">${a?"ปิดใช้งาน":"เปิดใช้งาน"}</button>
  </div>`}function ta(e,a){a.forEach(t=>{const r=e.querySelector("#"+t);r&&r.addEventListener("click",()=>{const s=r.dataset.on!=="1";r.dataset.on=s?"1":"0",r.style.cssText=s?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;",r.textContent=s?"ปิดใช้งาน":"เปิดใช้งาน";const d=r.parentElement.querySelector("[data-badge]");d&&(d.textContent=s?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่",d.style.background=s?"var(--ok-soft)":"var(--surface-2)",d.style.color=s?"var(--ok)":"var(--muted)")})})}const te=(e,a)=>{var t;return((t=e.querySelector("#"+a))==null?void 0:t.dataset.on)==="1"};function q(e,a="primary"){return e?`padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:800;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});box-shadow:0 2px 8px rgba(0,0,0,.15);white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;`:"padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:700;color:var(--muted);background:transparent;white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;"}const le="inline-flex gap-1 p-1 rounded-full bg-[var(--surface-2)] flex-wrap";function Je(e,a,t){const r=document.getElementById("regrade-bottom-tabs");r.innerHTML=`<div class="flex">${e.map(s=>`
    <button data-nav="${s.key}" class="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5" style="transition:transform .15s ease;${a===s.key?"transform:scale(1.12)":""}">
      <span class="text-lg">${s.icon}</span>
      <span class="text-[10px] font-bold" style="color:${a===s.key?"var(--primary)":"var(--muted-2)"}">${n(s.label)}</span>
    </button>`).join("")}</div>`,r.querySelectorAll("[data-nav]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.nav)))}const g={role:null,isAdmin:!1,isRegistrar:!1,isExecutive:!1,studentRow:null,teacherRow:null,cfg:{}};function Q(e,a){document.getElementById("regrade-title-mobile").textContent=e,document.getElementById("regrade-view-title").textContent=a}function xe(e,a,t){const r=document.getElementById("regrade-sidebar-nav");r.innerHTML=e.map(s=>`
    <button data-sec="${s.key}" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-left"
      style="${a===s.key?"background:var(--primary);color:#fff;":"color:var(--primary-45);"}">
      <span>${s.icon}</span> ${n(s.label)}
    </button>`).join(""),r.querySelectorAll("[data-sec]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.sec)))}const T={subView:"catalog",categoryTab:"สามัญ",subjects:[]};async function Xe(){T.subjects=await Et(g.studentRow.id)}function aa(){var e;return!!g.cfg.intent_open||We(g.cfg,(e=g.studentRow)==null?void 0:e.id).length>0}function ra(e){var s,d;const a=g.cfg.intent_open_levels;if(!a||!a.length)return!0;const t=e==="ศาสนา"?(s=g.studentRow)==null?void 0:s.religion_room:(d=g.studentRow)==null?void 0:d.main_room,r=t?t.split("/")[0].trim():null;return r?a.includes(`${e}|${r}`):!1}async function U(){var l;Q("แก้ค้างเก่า","รายวิชาค้างของฉัน"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");if(!T.subjects.length&&T.subjects!==null)try{await Xe()}catch(c){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${n(c.message)}</div>`;return}const a=T.subjects,t=a.filter(c=>c.category==="สามัญ").length,r=a.filter(c=>c.category==="ศาสนา").length,s=a.filter(c=>c.status==="กำลังดำเนินการปรับแก้"),d=a.length,o=a.filter(c=>c.status==="จำนงแล้ว").length,p=s.length,h=a.filter(c=>c.status==="ปรับแก้สำเร็จ").length;let v="";if(T.subView==="catalog"){const c=a.filter(y=>y.category===T.categoryTab);v=`
      <div class="flex gap-2 mb-4">
        <button data-tab="สามัญ" style="${V(T.categoryTab==="สามัญ")}">รายวิชาสามัญ (${t})</button>
        <button data-tab="ศาสนา" style="${V(T.categoryTab==="ศาสนา","secondary")}">รายวิชาศาสนา (${r})</button>
      </div>
      <div class="flex flex-col gap-3">
        ${c.length?c.map(y=>qe(y)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในหมวดนี้ 🎉</div>'}
      </div>`}else T.subView==="overview"?v=`
      ${g.cfg.show_deadline_banner?Ye(g.cfg.intent_window_start,g.cfg.intent_window_end,"กำหนดแจ้งความจำนงขอแก้/ปรับ","--primary","ไปแจ้งความจำนง","catalog"):""}
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        ${Be(a.filter(c=>c.category==="สามัญ"),"📘 สามัญ","var(--primary-dark)")}
        ${Be(a.filter(c=>c.category==="ศาสนา"),"🕌 ศาสนา","var(--secondary-dark)")}
      </div>
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-2">สรุปของฉัน</p>
        <div class="grid grid-cols-2 gap-3">
          ${ae(d,"วิชาค้างทั้งหมด","var(--ink)")}
          ${ae(o,"จำนงแล้ว","var(--gold-ink)")}
          ${ae(p,"กำลังดำเนินการ","var(--info)")}
          ${ae(h,"สำเร็จแล้ว","var(--ok)")}
        </div>
      </div>`:T.subView==="myWork"&&(v=`<div class="flex flex-col gap-3">
      ${s.length?s.map(c=>qe(c)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่ต้องทำตอนนี้ 🎉</div>'}
    </div>`);e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">
      ${v}
    </div>
    ${aa()?`
    <button id="regrade-student-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--gold),var(--gold-ink))">📝 จำนงขอแก้/ปรับ</button>`:""}`,e.querySelectorAll("[data-tab]").forEach(c=>c.addEventListener("click",()=>{T.categoryTab=c.dataset.tab,U()})),e.querySelectorAll("[data-declare]").forEach(c=>c.addEventListener("click",()=>sa(c))),e.querySelectorAll("[data-print-slip]").forEach(c=>c.addEventListener("click",()=>{const y=a.find(w=>w.id===Number(c.dataset.printSlip));y&&be(y)})),e.querySelectorAll("[data-deadline-cta]").forEach(c=>c.addEventListener("click",()=>{T.subView=c.dataset.deadlineCta,U()})),(l=document.getElementById("regrade-student-fab"))==null||l.addEventListener("click",()=>{T.subView="catalog",U()}),xe([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],T.subView,c=>{T.subView=c,U()}),Je([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],T.subView,c=>{T.subView=c,U()})}function ae(e,a,t){return`<div class="bg-[var(--surface-2)] rounded-xl p-3 text-center">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${n(a)}</p>
  </div>`}function qe(e){var r,s;const a=((r=e.teachers)==null?void 0:r.full_name)||"-",t=!!g.cfg.intent_open&&ra(e.category)||Gt(g.cfg,(s=g.studentRow)==null?void 0:s.id,e.id);return`
  <div class="rg-card p-4 shadow-sm">
    <div class="flex justify-between gap-2 items-start">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${n(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${n(e.subject_code)} · ${n(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold" style="${Z(e.status)}">${K(e.status).label}</span>
    </div>
    <div class="flex items-center gap-2 mt-2 pt-2 border-t border-dashed border-[var(--line-soft)]">
      ${M(e.teachers,!0)}
      <div><p class="text-[10px] text-[var(--muted-2)]">ครูผู้สอน</p><p class="text-xs font-bold text-[var(--ink-2)]">${n(a)}</p></div>
    </div>
    ${e.status==="ยังไม่แจ้ง"&&t?`
      <button data-declare="${e.id}" data-subject="${n(e.subject_name)}"
        class="mt-3 w-full py-2.5 rounded-xl text-white font-bold text-xs"
        style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">แจ้งความจำนง</button>`:""}
    ${e.status==="ยังไม่แจ้ง"&&!t?`
      <p class="mt-3 text-center text-[10px] text-[var(--muted-2)]">ยังไม่เปิดให้แจ้งความจำนงในขณะนี้</p>`:""}
    ${e.status==="กำลังดำเนินการปรับแก้"?`
      <div class="mt-3 rounded-xl p-3" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
        <p class="text-xs font-bold" style="color:var(--info)">${n(e.method||"")}</p>
        <p class="text-xs mt-1" style="color:var(--info)">กำหนด: ${n(X(e.due_text))}</p>
      </div>
      <button data-print-slip="${e.id}" class="mt-2 w-full py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>`:""}
  </div>`}async function sa(e){const a=Number(e.dataset.declare);if(await R({title:"ยืนยันแจ้งความจำนง",message:`ยืนยันแจ้งความจำนงขอปรับแก้วิชา "${e.dataset.subject}" ใช่หรือไม่? เมื่อกดยืนยัน ครูผู้สอนจะได้รับแจ้งเตือนทันที`,confirmText:"ยืนยันแจ้งความจำนง"}))try{await Lt(a),f("แจ้งความจำนงเรียบร้อย ครูผู้สอนจะได้รับแจ้งเตือนทันที ✅","success"),await Xe(),U()}catch(r){f("บันทึกไม่สำเร็จ: "+r.message,"error")}}const u={subView:"overview",subjects:[],form:null,editingResponseId:null,catalogExpanded:new Set,catalogSemesterFilter:{},assignedExpanded:new Set,assignedSemesterFilter:{},deptHeadExpanded:new Set,unassigned:[],deptHeadTeacherOptions:null,deptHeadDept:void 0,deptHeadShowAll:!1,deptHeadSelectMode:new Set,deptHeadSelected:{}};function Ce(){var t;const e=g.teacherRow,a=(t=e==null?void 0:e.positions)!=null&&t.length?e.positions:e!=null&&e.position?[e.position]:[];return["dept_head","religion_group_head","religion_subgroup_head"].some(r=>a.includes(r))}async function Ze(){u.subjects=await vt(g.teacherRow.id)}async function na(){const[e,a]=await Promise.all([jt(g.teacherRow.category),u.deptHeadTeacherOptions?Promise.resolve(u.deptHeadTeacherOptions):Oe(),u.deptHeadDept!==void 0?Promise.resolve(u.deptHeadDept):Tt(g.teacherRow.position_dept_id).then(t=>{u.deptHeadDept=t})]);u.unassigned=e,u.deptHeadTeacherOptions=a.filter(t=>t.category===g.teacherRow.category)}function da(e){var t;const a=(t=u.deptHeadDept)==null?void 0:t.dept_code;return!a||u.deptHeadShowAll?e:e.filter(r=>me[r.subject_code.charAt(0)]===a)}async function E(){var h,v,$;Q("แก้ค้างเก่า","งานแก้ค้างเก่า"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");try{await Ze(),u.subView==="depthead"&&Ce()&&await na()}catch(l){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${n(l.message)}</div>`;return}const a=u.subjects,t=a.filter(l=>l.status==="จำนงแล้ว"),r=a.filter(l=>l.status==="กำลังดำเนินการปรับแก้"),s=a.filter(l=>l.status==="ปรับแก้สำเร็จ").length;let d="";if(u.subView==="catalog"){const l=G(a);d=`<div class="flex flex-col gap-3">${l.length?l.map(c=>Ie(c,{scope:"catalog",expandedSet:u.catalogExpanded,semesterFilterMap:u.catalogSemesterFilter,renderRow:Qe})).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในความรับผิดชอบตอนนี้ 🎉</div>'}</div>`}else if(u.subView==="overview"){const l=a.length-t.length-r.length-s,c=a.length?Math.round(s/a.length*100):0;d=`
      ${g.cfg.show_deadline_banner?Ye(g.cfg.response_window_start,g.cfg.response_window_end,"กำหนดตอบรับคำร้องของนักเรียน","--secondary","ไปตอบรับ","respond"):""}
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สรุปของฉัน</p>
        ${a.length?ye([{value:l,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:t.length,color:"var(--gold-ink)",label:"รอตอบรับ"},{value:r.length,color:"var(--info)",label:"กำลังดำเนินการ"},{value:s,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${c}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีรายวิชาค้างในความรับผิดชอบ</p>'}
        <div class="grid grid-cols-2 gap-3 mt-4">
          ${re(a.length,"วิชาค้างทั้งหมด","var(--ink)","catalog")}
          ${re(t.length,"รอตอบรับ","var(--gold-ink)","respond")}
          ${re(r.length,"กำลังดำเนินการ","var(--info)","assigned")}
          ${re(s,"สำเร็จแล้ว","var(--ok)","catalog")}
        </div>
      </div>`}else if(u.subView==="assigned"){const l=G(r);d=`<div class="flex flex-col gap-3">${l.length?l.map(c=>Ie(c,{scope:"assigned",expandedSet:u.assignedExpanded,semesterFilterMap:u.assignedSemesterFilter,renderRow:la})).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่มอบหมายอยู่</div>'}</div>`}else if(u.subView==="respond")d=`
      <div class="flex items-center gap-2 mb-3">
        <button id="regrade-teacher-back" class="w-8 h-8 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-sm">←</button>
        <p class="text-sm font-bold text-[var(--ink)]">ตอบรับคำร้อง</p>
      </div>
      <div class="flex flex-col gap-3">${t.length?t.map(l=>ma(l)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ตอบรับครบหมดแล้ว 🎉</div>'}</div>`;else if(u.subView==="depthead"){const l=G(u.unassigned),c=(h=u.deptHeadDept)==null?void 0:h.dept_code,y=c&&Object.values(me).includes(c),w=da(l);d=`
      <div class="rg-card p-3 mb-4 text-xs text-[var(--muted-2)]">🗂️ วิชาในหมวด${n(g.teacherRow.category)}ที่ยังไม่มีครูผู้สอน — มอบหมายครูที่สอนอยู่จริงตอนนี้ให้แต่ละวิชาได้เลย</div>
      ${y?`
      <div class="flex gap-2 mb-4">
        <button data-depthead-scope="own" style="${V(!u.deptHeadShowAll)}">📘 เฉพาะกลุ่มสาระของฉัน (${n(u.deptHeadDept.dept_name)}) · ${l.filter(j=>me[j.subject_code.charAt(0)]===c).length}</button>
        <button data-depthead-scope="all" style="${V(u.deptHeadShowAll,"secondary")}">ดูทั้งหมด · ${l.length}</button>
      </div>
      <p class="text-[10px] text-[var(--muted-2)] mb-3">การกรองนี้ช่วยดูง่ายขึ้นเท่านั้น ยังมอบหมายวิชานอกกลุ่มสาระของตัวเองได้ถ้าจำเป็น — ระบบจะรู้ตำแหน่งวิชาแค่แบบคร่าวๆ จากรหัสวิชา อาจไม่ครบ 100%</p>`:""}
      <div class="flex flex-col gap-3">${w.length?w.map(j=>ia(j,u.deptHeadExpanded)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีวิชาที่ขาดครูผู้สอนแล้ว 🎉</div>'}</div>
      <datalist id="regrade-depthead-teacher-list">${u.deptHeadTeacherOptions.map(j=>`<option value="${n(j.full_name)}${j.teacher_code?` (${n(j.teacher_code)})`:""} · รหัส ${j.id}"></option>`).join("")}</datalist>`}e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">${d}</div>
    ${t.length?`
    <button id="regrade-teacher-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">
      ✅ ตอบรับ
      <span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">${t.length}</span>
    </button>`:""}`,(v=document.getElementById("regrade-teacher-fab"))==null||v.addEventListener("click",()=>{u.subView="respond",E()}),($=document.getElementById("regrade-teacher-back"))==null||$.addEventListener("click",()=>{u.subView="overview",E()}),e.querySelectorAll("[data-deadline-cta]").forEach(l=>l.addEventListener("click",()=>{u.subView=l.dataset.deadlineCta,E()})),e.querySelectorAll("[data-edit-response]").forEach(l=>l.addEventListener("click",()=>{u.form=null,u.editingResponseId=Number(l.dataset.editResponse),E()})),e.querySelectorAll("[data-close-edit-response]").forEach(l=>l.addEventListener("click",()=>{u.form=null,u.editingResponseId=null,E()})),e.querySelectorAll("[data-open-exam]").forEach(l=>l.addEventListener("click",()=>{const c=a.find(y=>y.id===Number(l.dataset.openExam));c&&de(c,"นัดสอบปรับ"),E()})),e.querySelectorAll("[data-open-work]").forEach(l=>l.addEventListener("click",()=>{const c=a.find(y=>y.id===Number(l.dataset.openWork));c&&Jt(c)})),e.querySelectorAll("[data-cancel-form]").forEach(l=>l.addEventListener("click",()=>{u.form=null,E()})),e.querySelectorAll("[data-due-date]").forEach(l=>l.addEventListener("input",()=>{u.form.dueDate=l.value})),e.querySelectorAll("[data-due-time]").forEach(l=>l.addEventListener("input",()=>{u.form.dueTime=l.value})),e.querySelectorAll("[data-work-file]").forEach(l=>l.addEventListener("change",()=>{var w;const c=((w=l.files)==null?void 0:w[0])||null;if(c&&c.size>5*1024*1024){l.value="",f("ไฟล์ต้องมีขนาดไม่เกิน 5 MB","warning");return}u.form.file=c,u.form.fileUrl="",u.form.fileSource=c?"upload":"none";const y=e.querySelector("[data-work-file-name]");y&&(y.textContent=c?c.name:"ยังไม่ได้เลือกไฟล์")})),e.querySelectorAll("[data-remove-work-file]").forEach(l=>l.addEventListener("click",()=>{u.form.file=null,u.form.fileUrl="",u.form.fileSource="none",E()})),e.querySelectorAll("[data-confirm-assign]").forEach(l=>l.addEventListener("click",()=>va(l))),e.querySelectorAll("[data-cancel-response]").forEach(l=>l.addEventListener("click",()=>ba(l))),e.querySelectorAll("[data-print-slip]").forEach(l=>l.addEventListener("click",()=>{var y;const c=a.find(w=>w.id===Number(l.dataset.printSlip));c&&be(c,(y=g.teacherRow)==null?void 0:y.full_name)})),e.querySelectorAll("[data-toggle-group]").forEach(l=>l.addEventListener("click",()=>{const[c,y]=l.dataset.toggleGroup.split("|"),w=c==="catalog"?u.catalogExpanded:c==="assigned"?u.assignedExpanded:u.deptHeadExpanded;w.has(y)?w.delete(y):w.add(y),E()})),e.querySelectorAll("[data-depthead-assign]").forEach(l=>l.addEventListener("click",()=>ua(l))),e.querySelectorAll("[data-depthead-scope]").forEach(l=>l.addEventListener("click",()=>{u.deptHeadShowAll=l.dataset.deptheadScope==="all",E()})),e.querySelectorAll("[data-depthead-toggle-select]").forEach(l=>l.addEventListener("click",()=>{const c=l.dataset.deptheadToggleSelect;u.deptHeadSelectMode.has(c)?u.deptHeadSelectMode.delete(c):u.deptHeadSelectMode.add(c),u.deptHeadSelected[c]=new Set,E()})),e.querySelectorAll("[data-depthead-student-select]").forEach(l=>l.addEventListener("change",()=>{const c=l.dataset.deptheadCode,y=Number(l.dataset.deptheadStudentSelect);u.deptHeadSelected[c]||(u.deptHeadSelected[c]=new Set);const w=u.deptHeadSelected[c];l.checked?w.add(y):w.delete(y),ca(c)})),e.querySelectorAll("[data-depthead-select-all]").forEach(l=>l.addEventListener("change",()=>{const c=l.dataset.deptheadSelectAll,y=G(u.unassigned).find(w=>w.subject_code===c);u.deptHeadSelected[c]=new Set(l.checked?(y==null?void 0:y.items.map(w=>w.id))??[]:[]),E()})),e.querySelectorAll("[data-depthead-assign-selected]").forEach(l=>l.addEventListener("click",()=>pa(l))),e.querySelectorAll("[data-group-sem]").forEach(l=>l.addEventListener("change",c=>{const[y,w]=l.dataset.groupSem.split("|"),j=y==="catalog"?u.catalogSemesterFilter:u.assignedSemesterFilter;j[w]=c.target.value,E()})),e.querySelectorAll("[data-goto-sub]").forEach(l=>l.addEventListener("click",()=>{u.subView=l.dataset.gotoSub,E()}));const o=[{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"assigned",icon:"📝",label:"มอบหมายงาน"}];Ce()&&o.push({key:"depthead",icon:"🗂️",label:"จัดการรายวิชา"});const p=u.subView==="respond"?"overview":u.subView;xe(o,p,l=>{u.subView=l,E()}),Je(o,p,l=>{u.subView=l,E()})}function G(e){const a=new Map;return e.forEach(t=>{a.has(t.subject_code)||a.set(t.subject_code,{subject_code:t.subject_code,subject_name:t.subject_name,category:t.category,items:[]}),a.get(t.subject_code).items.push(t)}),[...a.values()].sort((t,r)=>r.items.length-t.items.length)}function Ie(e,{scope:a,expandedSet:t,semesterFilterMap:r,renderRow:s}){const d=e.subject_code,o=t.has(d),p=[...new Set(e.items.map($=>$.semester).filter(Boolean))].sort().reverse(),h=r[d]||"all",v=h==="all"?e.items:e.items.filter($=>$.semester===h);return`
  <div class="rg-card p-4">
    <button data-toggle-group="${a}|${n(d)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${n(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${n(d)}</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${fe(e.category)}">${n(e.category)}</span>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">นักเรียนติด ${e.items.length} คน</span>
        <span class="text-[var(--muted-2)] text-sm inline-block transition-transform" style="transform:rotate(${o?"180deg":"0deg"})">▾</span>
      </div>
    </button>
    ${o?`
    <div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      ${p.length>1?`
      <select data-group-sem="${a}|${n(d)}" class="w-full mb-3 px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
        <option value="all">ทุกภาคเรียน (${e.items.length})</option>
        ${p.map($=>`<option value="${n($)}" ${h===$?"selected":""}>${n($)} (${e.items.filter(l=>l.semester===$).length})</option>`).join("")}
      </select>`:""}
      <div class="flex flex-col gap-2">${v.map($=>s($)).join("")}</div>
    </div>`:""}
  </div>`}function Qe(e){var t,r,s,d;const a=((t=e.students)==null?void 0:t.full_name)||"-";return`
  <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)]">
    ${M(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${n(a)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${n(((r=e.students)==null?void 0:r.student_code)||"")} · ${n(((s=e.students)==null?void 0:s.main_room)||((d=e.students)==null?void 0:d.religion_room)||"")} · ${n(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${Z(e.status)}">${K(e.status).label}</span>
  </div>`}function la(e){var p,h,v,$;const a=((p=e.students)==null?void 0:p.full_name)||"-",t=u.form,r=Number(u.editingResponseId)===Number(e.id),s=t&&Number(t.id)===Number(e.id)&&t.method==="นัดสอบปรับ",d=t&&Number(t.id)===Number(e.id)&&t.method==="ให้งานแก้",o=/^https:\/\//i.test(e.file_url||"")?e.file_url:"";return`
  <div class="p-2.5 rounded-xl bg-[var(--surface-2)]">
    <div class="flex items-center gap-2.5">
      ${M(e.students,!1)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${n(a)}</p>
        <p class="text-[10px] text-[var(--muted-2)] truncate">${n(((h=e.students)==null?void 0:h.student_code)||"")} · ${n(((v=e.students)==null?void 0:v.main_room)||(($=e.students)==null?void 0:$.religion_room)||"")} · ${n(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${Z(e.status)}">ตอบรับแล้ว</span>
    </div>
    <div class="mt-2 rounded-lg p-2" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
      <p class="text-[11px] font-bold" style="color:var(--info)">${n(e.method||"")}</p>
      <p class="text-[11px] mt-0.5" style="color:var(--info)">กำหนด: ${n(X(e.due_text))}</p>
    </div>
    <div class="grid ${o?"grid-cols-2":"grid-cols-1"} gap-2 mt-2">
      ${o?`<a href="${n(o)}" target="_blank" rel="noopener" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">📎 เปิดไฟล์งาน ↗</a>`:""}
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
    ${s?oe(e,t,!0):""}
    ${d?oe(e,t,!1):""}
  </div>`}function oa(e,a,t){var s,d,o,p;const r=((s=e.students)==null?void 0:s.full_name)||"-";return`
  <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)] cursor-pointer">
    <input type="checkbox" data-depthead-student-select="${e.id}" data-depthead-code="${n(a)}" ${t?"checked":""} class="flex-shrink-0 rounded border-gray-300 text-[var(--primary)]">
    ${M(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${n(r)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${n(((d=e.students)==null?void 0:d.student_code)||"")} · ${n(((o=e.students)==null?void 0:o.main_room)||((p=e.students)==null?void 0:p.religion_room)||"")} · ${n(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${Z(e.status)}">${K(e.status).label}</span>
  </label>`}function ia(e,a,t){const r=e.subject_code,s=a.has(r),d=u.deptHeadSelectMode.has(r),o=u.deptHeadSelected[r]||new Set;return`
  <div class="rg-card p-4">
    <button data-toggle-group="depthead|${n(r)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${n(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${n(r)}</p>
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
        <button type="button" data-depthead-toggle-select="${n(r)}" class="flex-shrink-0 text-[10px] font-bold" style="color:var(--primary)">${d?"✕ ยกเลิกเลือกเฉพาะคน":"☑️ เลือกเฉพาะบางคน"}</button>
      </div>
      <div class="flex gap-2 mb-3">
        <input data-depthead-input="${n(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
        <button data-depthead-assign="${n(r)}" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">มอบหมายทั้งหมด</button>
      </div>
      ${d?`
      <label class="flex items-center gap-2 mb-2 px-1 text-[11px] text-[var(--muted-2)] select-none">
        <input type="checkbox" data-depthead-select-all="${n(r)}" data-total="${e.items.length}" class="rounded border-gray-300 text-[var(--primary)]">
        เลือกทั้งหมดในวิชานี้
      </label>`:""}
      <div class="flex flex-col gap-2">${e.items.map(p=>d?oa(p,r,o.has(p.id)):Qe(p)).join("")}</div>
      ${d?`
      <div data-depthead-selected-bar="${n(r)}" class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex gap-2 ${o.size===0?"opacity-40":""}">
        <input data-depthead-selected-input="${n(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครูสำหรับคนที่เลือก...">
        <button data-depthead-assign-selected="${n(r)}" ${o.size===0?"disabled":""} class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">มอบหมายที่เลือก (<span data-depthead-selected-count="${n(r)}">${o.size}</span>)</button>
      </div>`:""}
    </div>`:""}
  </div>`}function ca(e){const a=u.deptHeadSelected[e]||new Set,t=document.querySelector(`[data-depthead-selected-bar="${CSS.escape(e)}"]`),r=document.querySelector(`[data-depthead-selected-count="${CSS.escape(e)}"]`),s=document.querySelector(`[data-depthead-assign-selected="${CSS.escape(e)}"]`),d=document.querySelector(`[data-depthead-select-all="${CSS.escape(e)}"]`);if(r&&(r.textContent=String(a.size)),s&&(s.disabled=a.size===0),t&&t.classList.toggle("opacity-40",a.size===0),d){const o=Number(d.dataset.total||0);d.checked=o>0&&a.size===o,d.indeterminate=a.size>0&&a.size<o}}async function ua(e){const a=e.dataset.deptheadAssign,t=document.querySelector(`[data-depthead-input="${CSS.escape(a)}"]`),r=Y(t.value,u.deptHeadTeacherOptions);if(!r){f("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=G(u.unassigned).find(o=>o.subject_code===a);if(await R({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(s==null?void 0:s.subject_name)||a}" ให้นักเรียนที่ยังไม่มีครูทั้ง ${(s==null?void 0:s.items.length)??""} รายการใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const o=await Ht(a,g.teacherRow.category,r.id);f(`มอบหมายครูผู้สอนให้ ${o} รายการเรียบร้อย ✅`,"success"),E()}catch(o){f("มอบหมายไม่สำเร็จ: "+o.message,"error")}}async function pa(e){const a=e.dataset.deptheadAssignSelected,t=document.querySelector(`[data-depthead-selected-input="${CSS.escape(a)}"]`),r=Y(t.value,u.deptHeadTeacherOptions);if(!r){f("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=[...u.deptHeadSelected[a]||[]];if(!s.length){f("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}const d=G(u.unassigned).find(p=>p.subject_code===a);if(await R({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(d==null?void 0:d.subject_name)||a}" ให้นักเรียนที่เลือกไว้ ${s.length} คนใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const p=await qt(s,r.id);f(`มอบหมายครูผู้สอนให้ ${p} คนที่เลือกเรียบร้อย ✅`,"success"),u.deptHeadSelectMode.delete(a),delete u.deptHeadSelected[a],E()}catch(p){f("มอบหมายไม่สำเร็จ: "+p.message,"error")}}function ye(e,a,t){const r=e.reduce((o,p)=>o+p.value,0)||1;let s=0;return`
  <div class="flex items-center gap-4">
    <div style="width:96px;height:96px;border-radius:9999px;background:conic-gradient(${e.map(o=>{const p=s/r*360;s+=o.value;const h=s/r*360;return`${o.color} ${p}deg ${h}deg`}).join(", ")});flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <div style="width:64px;height:64px;border-radius:9999px;background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p class="text-base font-extrabold text-[var(--ink)]">${n(a)}</p>
        <p class="text-[9px] text-[var(--muted-2)]">${n(t)}</p>
      </div>
    </div>
    <div class="flex-1 min-w-0 grid grid-cols-1 gap-1.5">
      ${e.map(o=>`
      <div class="flex items-center gap-1.5 text-[11px]">
        <span style="width:8px;height:8px;border-radius:9999px;background:${o.color};flex-shrink:0;"></span>
        <span class="text-[var(--muted)] truncate">${n(o.label)}</span>
        <span class="ml-auto font-bold text-[var(--ink-2)]">${o.value}</span>
      </div>`).join("")}
    </div>
  </div>`}function Be(e,a,t){const r=e.filter(v=>v.status==="ยังไม่แจ้ง").length,s=e.filter(v=>v.status==="จำนงแล้ว").length,d=e.filter(v=>v.status==="กำลังดำเนินการปรับแก้").length,o=e.filter(v=>v.status==="ปรับแก้สำเร็จ").length,p=e.length,h=p?Math.round(o/p*100):0;return`
  <div class="rg-card p-4 flex-1 min-w-0">
    <p class="text-xs font-bold mb-3" style="color:${t}">${n(a)} (${p})</p>
    ${p?ye([{value:r,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:s,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:d,color:"var(--info)",label:"กำลังดำเนินการ"},{value:o,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${h}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีวิชาค้างในหมวดนี้ 🎉</p>'}
  </div>`}function re(e,a,t,r){return`<button data-goto-sub="${n(r)}" class="bg-[var(--surface-2)] rounded-xl p-3 text-center hover:opacity-80 active:scale-[0.98] transition cursor-pointer">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${n(a)}</p>
  </button>`}function ma(e){var d,o,p,h;const a=((d=e.students)==null?void 0:d.full_name)||"-",t=u.form,r=t&&t.id===e.id&&t.method==="นัดสอบปรับ",s=t&&t.id===e.id&&t.method==="ให้งานแก้";return`
  <div class="rg-card p-4">
    <div class="flex gap-2">
      ${M(e.students,!0)}
      <div class="min-w-0">
        <p class="font-bold text-xs text-[var(--ink)]">${n(a)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">(${n(((o=e.students)==null?void 0:o.student_code)||"")} · ${n(((p=e.students)==null?void 0:p.main_room)||((h=e.students)==null?void 0:h.religion_room)||"")})</p>
        <p class="text-xs text-[var(--muted)] mt-0.5">${n(e.subject_name)} (${n(e.subject_code)})</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${fe(e.category)}">${n(e.category)}</span>
      </div>
    </div>
    ${ga(e)}
    ${r?oe(e,t,!0):""}
    ${s?oe(e,t,!1):""}
  </div>`}function ga(e){const a=u.form;if(a&&a.id===e.id)return"";const t=e.status==="กำลังดำเนินการปรับแก้";return`
    ${t?'<p class="text-[10px] font-bold text-[var(--muted-2)] mt-3">แก้ไขหรือเปลี่ยนคำตอบ (ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ)</p>':""}
    <div class="flex gap-2 mt-${t?"1.5":"3"}">
      <button data-open-exam="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
      <button data-open-work="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
    </div>
    ${t?`<button data-cancel-response="${e.id}" class="mt-2 w-full py-2 rounded-xl text-xs font-bold" style="background:var(--bad-soft);color:var(--bad);border:1px solid var(--bad-soft-line)">✕ ยกเลิกคำตอบนี้</button>`:""}`}function oe(e,a,t){var d;const r=!t&&!!a.fileUrl,s=r&&/^https:\/\//i.test(a.fileUrl)?a.fileUrl:"";return`
    <div class="mt-3 rounded-xl p-3 bg-[var(--surface-2)]">
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">${t?"วันที่นัดสอบปรับ":"กำหนดส่งงาน"}</label>
      <input data-due-date type="date" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" value="${n(a.dueDate)}">
      ${t?`<label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">เวลานัดสอบ</label>
      <input data-due-time type="time" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" value="${n(a.dueTime)}">`:`
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mt-2 mb-1">ไฟล์ชี้แจงงานแก้ (ถ้ามี · ไม่เกิน 5 MB)</label>
      ${r?`
        <div class="p-3 rounded-xl bg-[var(--surface)] border border-[var(--line)]">
          <p class="text-xs font-bold text-[var(--ink)]">📎 ${a.fileSource==="reuse"?"ใช้ไฟล์เดิมของรายวิชานี้":"ไฟล์ที่แนบอยู่ปัจจุบัน"}</p>
          <div class="flex gap-3 mt-2">
            ${s?`<a href="${n(s)}" target="_blank" rel="noopener" class="text-[11px] font-bold" style="color:var(--info)">เปิดดูไฟล์ ↗</a>`:""}
            <button type="button" data-remove-work-file class="text-[11px] font-bold" style="color:var(--bad)">เอาไฟล์ออก</button>
          </div>
        </div>`:""}
      <label class="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-dashed border-[var(--line)] bg-[var(--surface)] text-xs font-bold text-[var(--ink-2)] cursor-pointer">
        <span>${r?"อัปโหลดไฟล์ใหม่แทน":"เลือกไฟล์จากเครื่อง"}</span>
        <input data-work-file type="file" class="sr-only" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png">
      </label>
      <p data-work-file-name class="mt-1 text-[10px] text-[var(--muted-2)] truncate">${n(((d=a.file)==null?void 0:d.name)||(r?"หากไม่เลือกไฟล์ใหม่ ระบบจะใช้ไฟล์ที่แสดงอยู่":"ยังไม่ได้เลือกไฟล์"))}</p>`}
      <div class="flex gap-2 mt-2">
        <button data-confirm-assign="${e.id}" class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">${a.editing?"บันทึกการแก้ไข":t?"ยืนยันนัดสอบ":"ยืนยันมอบหมายงาน"}</button>
        <button data-cancel-form class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิด</button>
      </div>
    </div>`}async function va(e){var p,h;const a=Number(e.dataset.confirmAssign),t=u.form;if(!(t!=null&&t.dueDate)){f("กรุณาเลือกวันที่จากปฏิทินก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){f("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const r=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,s=u.subjects.find(v=>v.id===a),d=t.method==="นัดสอบปรับ"?`นัดสอบปรับวิชา "${s.subject_name}" ให้ ${((p=s.students)==null?void 0:p.full_name)||""} วันที่ ${X(r)} ใช่หรือไม่?`:`มอบหมายงานแก้วิชา "${s.subject_name}" ให้ ${((h=s.students)==null?void 0:h.full_name)||""} กำหนดส่ง ${X(r)} ใช่หรือไม่?`;if(await R({title:t.editing?"ยืนยันแก้ไขคำตอบ":t.method==="นัดสอบปรับ"?"ยืนยันนัดสอบปรับ":"ยืนยันมอบหมายงานแก้",message:d,confirmText:t.editing?"บันทึกการแก้ไข":"ยืนยัน"}))try{e.disabled=!0;let v=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const $=c=>String(c||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";v=(await Wt(t.file,`regrade/teacher-${g.teacherRow.id}/${$(s.subject_code)}/${$(s.semester)}`)).url}await Rt(a,{method:t.method,dueText:r,fileUrl:v}),f(t.editing?"แก้ไขคำตอบแล้ว ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ ✅":"บันทึกการมอบหมายเรียบร้อย ✅","success"),u.form=null,u.editingResponseId=null,E()}catch(v){e.disabled=!1,f("บันทึกไม่สำเร็จ: "+v.message,"error")}}async function ba(e){var s;const a=Number(e.dataset.cancelResponse),t=u.subjects.find(d=>d.id===a);if(await R({title:"ยืนยันยกเลิกคำตอบ",message:`ยกเลิกคำตอบของ ${((s=t==null?void 0:t.students)==null?void 0:s.full_name)||""} วิชา "${(t==null?void 0:t.subject_name)||""}" ใช่หรือไม่? รายการจะกลับไปรอครูตอบรับใหม่`,confirmText:"ยกเลิกคำตอบ"}))try{await At(a),u.form=null,u.editingResponseId=null,f("ยกเลิกคำตอบแล้ว รายการกลับไปรอตอบรับใหม่เรียบร้อย","success"),E()}catch(d){f("ยกเลิกคำตอบไม่สำเร็จ: "+d.message,"error")}}const C={view:"close",query:"",gradeCategory:"สามัญ"};async function ge(){Q("ฝ่ายทะเบียน","แก้ค้างเก่า — ฝ่ายทะเบียน");const e=document.getElementById("regrade-content");e.innerHTML=`<div class="max-w-3xl mx-auto p-4">
    <div class="${le} mb-4">
      <button data-rview="close" style="${q(C.view==="close")}">📋 รอปิดงาน</button>
      <button data-rview="grade" style="${q(C.view==="grade")}">🎓 เกรดที่ต้องอัปเดต</button>
    </div>
    <div id="regrade-registrar-body"></div>
  </div>`,e.querySelectorAll("[data-rview]").forEach(t=>t.addEventListener("click",()=>{C.view=t.dataset.rview,ge()}));const a=document.getElementById("regrade-registrar-body");if(C.view==="close"){a.innerHTML=`<input id="regrade-registrar-search" class="w-full max-w-sm px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-4" placeholder="ค้นหาชื่อหรือเลขประจำตัวนักเรียน...">
      <div id="regrade-close-list" class="flex flex-col gap-3"></div>`;const t=document.getElementById("regrade-registrar-search");t.value=C.query,t.addEventListener("input",()=>{C.query=t.value,ve()}),await ve()}else a.innerHTML=`<div class="flex gap-2 mb-4">
        <button data-gcat="สามัญ" style="${V(C.gradeCategory==="สามัญ")}">สามัญ</button>
        <button data-gcat="ศาสนา" style="${V(C.gradeCategory==="ศาสนา","secondary")}">ศาสนา</button>
      </div>
      <div class="overflow-x-auto"><table class="w-full text-xs" id="regrade-grade-table"></table></div>`,a.querySelectorAll("[data-gcat]").forEach(t=>t.addEventListener("click",()=>{C.gradeCategory=t.dataset.gcat,ge()})),await et()}async function ve(){const e=document.getElementById("regrade-close-list");let a;try{a=await Ct(C.query)}catch(t){e.innerHTML=`<div class="text-center text-red-500 text-sm py-8">โหลดไม่สำเร็จ: ${n(t.message)}</div>`;return}e.innerHTML=a.length?a.map(t=>{var s,d,o,p;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`
    <div class="rg-card p-4 flex justify-between items-center gap-3 flex-wrap">
      <div class="flex gap-2.5 items-center min-w-0">
        ${M(t.students,!0)}
        <div class="min-w-0">
          <p class="font-bold text-sm text-[var(--ink)]">${n(r)} <span class="text-[var(--muted-2)] font-normal">(${n(((d=t.students)==null?void 0:d.student_code)||"")} · ${n(((o=t.students)==null?void 0:o.main_room)||((p=t.students)==null?void 0:p.religion_room)||"")})</span></p>
          <p class="text-xs text-[var(--muted)] mt-0.5">${n(t.subject_name)} (${n(t.subject_code)}) · ${n(t.method||"")} — กำหนด ${n(X(t.due_text))}</p>
          <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${fe(t.category)}">${n(t.category)}</span>
        </div>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button data-print-slip="${t.id}" class="px-3 py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
        <button data-closeout="${t.id}" data-name="${n(r)}" data-subject="${n(t.subject_name)}"
          class="px-4 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">✓ ปิดงาน (ปรับแก้สำเร็จ)</button>
      </div>
    </div>`}).join(""):'<div class="text-center text-[var(--muted-2)] text-sm py-12">📭 ไม่พบรายการที่รอปิดงาน</div>',e.querySelectorAll("[data-print-slip]").forEach(t=>t.addEventListener("click",()=>{const r=a.find(s=>s.id===Number(t.dataset.printSlip));r&&be(r)})),e.querySelectorAll("[data-closeout]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.closeout);if(await R({title:"ยืนยันปิดงาน",message:`ยืนยันบันทึกว่า ${t.dataset.name} ปรับแก้วิชา "${t.dataset.subject}" สำเร็จแล้วใช่หรือไม่? สถานะจะเปลี่ยนเป็น "ปรับแก้สำเร็จ" ทันที`,confirmText:"ยืนยันปิดงาน"}))try{await It(r),f("ปิดงานเรียบร้อย ✅","success"),await ve()}catch(d){f("ไม่สำเร็จ: "+d.message,"error")}}))}async function et(){const e=document.getElementById("regrade-grade-table");let a;try{a=await Bt(C.gradeCategory)}catch(t){e.innerHTML=`<tr><td class="text-red-500 text-sm py-8 text-center">โหลดไม่สำเร็จ: ${n(t.message)}</td></tr>`;return}e.innerHTML=`
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">รายวิชา</th><th class="py-2 px-2">ครูผู้สอน</th><th class="py-2 px-2">สถานะเกรด</th><th class="py-2 px-2 text-right">จัดการ</th>
    </tr></thead>
    <tbody>${a.length?a.map(t=>{var s,d,o;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`<tr class="border-b border-[var(--line-soft)]">
        <td class="py-2 px-2"><div class="flex items-center gap-2">${M(t.students,!0)}<div><p class="font-bold text-[var(--ink)]">${n(r)}</p><p class="text-[10px] text-[var(--muted-2)]">(${n(((d=t.students)==null?void 0:d.student_code)||"")})</p></div></div></td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${n(t.subject_name)} (${n(t.subject_code)})</td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${n(((o=t.teachers)==null?void 0:o.full_name)||"-")}</td>
        <td class="py-2 px-2">${t.grade_entered?'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok);border:1px solid var(--ok-soft-line)">อัปเดตแล้ว ✓</span>':'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">รอกรอกเกรด</span>'}</td>
        <td class="py-2 px-2 text-right">${t.grade_entered?"":`<button data-mark-entered="${t.id}" data-name="${n(r)}" data-subject="${n(t.subject_name)}" class="px-3 py-1.5 rounded-lg text-white text-[11px] font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">กรอกข้อมูลแล้ว</button>`}</td>
      </tr>`}).join(""):'<tr><td colspan="5" class="text-center text-[var(--muted-2)] text-sm py-10">ไม่มีรายการในหมวดนี้</td></tr>'}</tbody>`,e.querySelectorAll("[data-mark-entered]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.markEntered);if(await R({title:"ยืนยันกรอกข้อมูลเกรดแล้ว",message:`ยืนยันว่าได้นำเกรดของ ${t.dataset.name} วิชา "${t.dataset.subject}" ไปกรอกในระบบเกรด (แยกต่างหาก) เรียบร้อยแล้วใช่หรือไม่?`,confirmText:"ยืนยัน"}))try{await Mt(r),f("บันทึกแล้ว ✅","success"),await et()}catch(d){f("ไม่สำเร็จ: "+d.message,"error")}}))}const i={categoryTab:"all",drilldown:null,view:"overview",overviewTab:"summary",teacherSort:{key:"pending",dir:"desc"},classLevels:null,attnLevelKey:"",attnRoom:"",attnRooms:[],browseCategory:"สามัญ",browseLevel:"",browseRoomsCache:[],classroomSortDesc:!0,expandedRooms:new Set,roomStudents:{},expandedStudents:new Set,studentSubjects:{}},H=e=>e.reduce((a,t)=>a+Number(t.cnt),0);function fa(e,a){const t=a.dir==="asc"?1:-1;return[...e].sort((r,s)=>{const d=r[a.key],o=s[a.key];return typeof d=="string"?d.localeCompare(o,"th")*t:(d-o)*t})}function xa(e,a){return e.key===a?e.dir==="asc"?" ▲":" ▼":""}async function tt(){return i.classLevels||(i.classLevels=await Ve()),i.classLevels}async function he(){Q("ผู้บริหาร","ภาพรวมทั้งโรงเรียน — บอร์ดผู้บริหาร");const e=document.getElementById("regrade-content");e.innerHTML=`
    <div class="w-full p-4 md:p-6">
      <div class="${le} mb-4">
        <button data-dview="overview" style="${q(i.view==="overview")}">📊 ภาพรวม</button>
        <button data-dview="students" style="${q(i.view==="students")}">🎓 รายชื่อนักเรียน</button>
      </div>
      <div id="regrade-dashboard-body"></div>
    </div>`,e.querySelectorAll("[data-dview]").forEach(t=>t.addEventListener("click",()=>{i.view=t.dataset.dview,he()}));const a=document.getElementById("regrade-dashboard-body");i.view==="students"?await at(a):await ne(a)}async function ne(e){let a;try{a=await Nt()}catch(x){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${n(x.message)}</div>`;return}const t=i.categoryTab==="all"?a:a.filter(x=>x.category===i.categoryTab),r=H(t),s=H(t.filter(x=>x.status==="ยังไม่แจ้ง")),d=H(t.filter(x=>x.status==="จำนงแล้ว")),o=H(t.filter(x=>x.status==="กำลังดำเนินการปรับแก้")),p=H(t.filter(x=>x.status==="ปรับแก้สำเร็จ")),h=d+o,v={};t.forEach(x=>{var _;(v[_=x.teacher_name]??(v[_]={dept:x.teacher_dept||"-",list:[]})).list.push(x)});const $=fa(Object.entries(v).map(([x,_])=>({name:x,dept:_.dept,total:H(_.list),pending:H(_.list.filter(L=>L.status==="จำนงแล้ว")),assigned:H(_.list.filter(L=>L.status==="กำลังดำเนินการปรับแก้")),done:H(_.list.filter(L=>L.status==="ปรับแก้สำเร็จ"))})),i.teacherSort),l=H(a.filter(x=>x.category==="สามัญ")),c=H(a.filter(x=>x.category==="ศาสนา")),y=`
    <div class="${le}">
      <button data-otab="summary" style="${q(i.overviewTab==="summary")}">📊 สรุปตัวเลข</button>
      <button data-otab="teachers" style="${q(i.overviewTab==="teachers")}">👩‍🏫 รายครูผู้สอน</button>
      <button data-otab="attention" style="${q(i.overviewTab==="attention")}">🎯 นักเรียนที่ต้องติดตาม</button>
    </div>`,w=`
    <div class="${le}">
      <button data-dcat="all" style="${q(i.categoryTab==="all")}">📊 ทั้งหมด (${a.length})</button>
      <button data-dcat="สามัญ" style="${q(i.categoryTab==="สามัญ")}">📘 สามัญ (${l})</button>
      <button data-dcat="ศาสนา" style="${q(i.categoryTab==="ศาสนา","secondary")}">🕌 ศาสนา (${c})</button>
    </div>`,j=`
    <div class="flex items-center justify-between gap-3 mb-4 flex-wrap">
      ${y}
      ${i.overviewTab!=="attention"?w:""}
    </div>`;let z="";if(i.overviewTab==="teachers"){const x=(_,L,I="")=>`<th class="py-2 px-2 cursor-pointer select-none hover:text-[var(--ink-2)] ${I}" data-sort-key="${L}">${n(_)}${xa(i.teacherSort,L)}</th>`;z=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">ความคืบหน้าแยกรายครูผู้สอน</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">คลิกหัวคอลัมน์เพื่อเรียงจากมาก↔น้อย หรือ ก↔ฮ</p>
        <div class="overflow-x-auto"><table class="w-full text-xs">
          <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
            ${x("ครูผู้สอน","name")}${x("กลุ่มสาระ","dept")}${x("ทั้งหมด","total","text-center")}${x("รอตอบรับ","pending","text-center")}${x("มอบหมายแล้ว","assigned","text-center")}${x("สำเร็จ","done","text-center")}
          </tr></thead>
          <tbody>${$.map(_=>`<tr class="border-b border-[var(--line-soft)]">
            <td class="py-2 px-2 font-bold text-[var(--ink-2)]">${n(_.name)}</td>
            <td class="py-2 px-2 text-[var(--muted)]">${n(_.dept)}</td>
            <td class="py-2 px-2 text-center text-[var(--muted)]">${_.total}</td>
            <td class="py-2 px-2 text-center">${_.pending>0?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">${_.pending}</span>`:_.pending}</td>
            <td class="py-2 px-2 text-center" style="color:var(--info)">${_.assigned}</td>
            <td class="py-2 px-2 text-center" style="color:var(--ok)">${_.done}</td>
          </tr>`).join("")}</tbody>
        </table></div>
      </div>`}else if(i.overviewTab==="attention"){let x;try{x=await tt()}catch{x=[]}z=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">นักเรียนที่จำเป็นต้องติดตาม</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">เรียงจากคนที่มีรายวิชาค้างมากที่สุดก่อน (สูงสุด 20 คน)</p>
        <div class="flex gap-2 mb-3 flex-wrap">
          <select id="regrade-attn-level" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">${'<option value="">ทุกระดับชั้น</option>'+["สามัญ","ศาสนา"].map(L=>{const I=x.filter(N=>N.category===L);return I.length?`<optgroup label="${L}">${I.map(N=>`<option value="${L}|${n(N.class_level)}" ${i.attnLevelKey===`${L}|${N.class_level}`?"selected":""}>${n(N.class_level)}</option>`).join("")}</optgroup>`:""}).join("")}</select>
          <select id="regrade-attn-room" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" ${i.attnLevelKey?"":"disabled"}>
            <option value="">ทุกห้อง</option>
            ${i.attnRooms.map(L=>`<option value="${n(L)}" ${i.attnRoom===L?"selected":""}>${n(L)}</option>`).join("")}
          </select>
        </div>
        <div id="regrade-attn-list" class="overflow-x-auto"></div>
      </div>`}else{const x=r?Math.round(p/r*100):0;z=`
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สัดส่วนสถานะ</p>
        ${r?ye([{value:s,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:d,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:o,color:"var(--info)",label:"กำลังดำเนินการ"},{value:p,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${x}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีข้อมูล</p>'}
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <button data-drill="all" class="rg-card p-4 text-center">${se(r,"รายวิชาค้างทั้งหมด","var(--ink)")}</button>
        <button data-drill="requested" class="rg-card p-4 text-center">${se(h,"จำนงแล้ว","var(--gold-ink)")}</button>
        <button data-drill="assigned" class="rg-card p-4 text-center">${se(o,"กำลังดำเนินการปรับแก้","var(--info)")}</button>
        <button data-drill="done" class="rg-card p-4 text-center">${se(p,"ปรับแก้สำเร็จ","var(--ok)")}</button>
      </div>
      <div id="regrade-drilldown"></div>`}e.innerHTML=j+z,e.querySelectorAll("[data-otab]").forEach(x=>x.addEventListener("click",()=>{i.overviewTab=x.dataset.otab,ne(e)})),e.querySelectorAll("[data-sort-key]").forEach(x=>x.addEventListener("click",()=>{const _=x.dataset.sortKey;i.teacherSort.key===_?i.teacherSort.dir=i.teacherSort.dir==="asc"?"desc":"asc":(i.teacherSort.key=_,i.teacherSort.dir=_==="name"||_==="dept"?"asc":"desc"),ne(e)})),e.querySelectorAll("[data-dcat]").forEach(x=>x.addEventListener("click",()=>{i.categoryTab=x.dataset.dcat,i.drilldown=null,he()})),i.overviewTab==="summary"&&(e.querySelectorAll("[data-drill]").forEach(x=>x.addEventListener("click",()=>{i.drilldown=x.dataset.drill,De(t)})),i.drilldown&&De(t)),i.overviewTab==="attention"&&(document.getElementById("regrade-attn-level").addEventListener("change",async x=>{if(i.attnLevelKey=x.target.value,i.attnRoom="",i.attnRooms=[],i.attnLevelKey){const[_,L]=i.attnLevelKey.split("|");try{i.attnRooms=(await ze(_,L)).map(I=>I.room)}catch{i.attnRooms=[]}}ne(e)}),document.getElementById("regrade-attn-room").addEventListener("change",x=>{i.attnRoom=x.target.value,Me()}),Me())}async function Me(){const e=document.getElementById("regrade-attn-list");if(!e)return;e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';const[a,t]=i.attnLevelKey?i.attnLevelKey.split("|"):[null,null];let r;try{r=await Ot({category:a,classLevel:t,room:i.attnRoom||null,limit:20})}catch(s){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${n(s.message)}</p>`;return}if(!r.length){e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-8 text-center">ไม่มีนักเรียนที่ต้องติดตามในเงื่อนไขนี้ 🎉</p>';return}e.innerHTML=`<table class="w-full text-xs">
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">ห้อง</th>
      <th class="py-2 px-2 text-center">ค้าง</th><th class="py-2 px-2 text-center">จำนงแล้ว</th><th class="py-2 px-2 text-center">สำเร็จ</th>
    </tr></thead>
    <tbody>${r.map(s=>`<tr class="border-b border-[var(--line-soft)]">
      <td class="py-2 px-2"><div class="flex items-center gap-2">${M(s,!1)}<div><p class="font-bold text-[var(--ink)]">${n(s.full_name)}</p><p class="text-[10px] text-[var(--muted-2)]">${n(s.student_code||"")}</p></div></div></td>
      <td class="py-2 px-2 text-[var(--muted)]">${n((s.category==="ศาสนา"?s.religion_room:s.main_room)||"-")}</td>
      <td class="py-2 px-2 text-center font-bold" style="color:var(--bad)">${s.not_yet}</td>
      <td class="py-2 px-2 text-center" style="color:var(--gold-ink)">${s.requested}</td>
      <td class="py-2 px-2 text-center" style="color:var(--ok)">${s.done}</td>
    </tr>`).join("")}</tbody>
  </table>`}function se(e,a,t){return`<p class="text-2xl font-extrabold" style="color:${t}">${e}</p><p class="text-[10px] text-[var(--muted-2)] mt-1">${n(a)}</p>`}async function at(e){let a;try{a=await tt()}catch{a=[]}const t=a.filter(r=>r.category===i.browseCategory);e.innerHTML=`
    <div class="flex gap-2 mb-4">
      <button data-bcat="สามัญ" style="${V(i.browseCategory==="สามัญ")}">📘 สามัญ</button>
      <button data-bcat="ศาสนา" style="${V(i.browseCategory==="ศาสนา","secondary")}">🕌 ศาสนา</button>
    </div>
    <select id="regrade-browse-level" class="w-full max-w-xs px-3 py-2 rounded-lg border border-[var(--line)] text-sm bg-[var(--surface)] mb-4">
      <option value="">— เลือกระดับชั้น —</option>
      ${t.map(r=>`<option value="${n(r.class_level)}" ${i.browseLevel===r.class_level?"selected":""}>${n(r.class_level)}</option>`).join("")}
    </select>
    <div id="regrade-browse-rooms" class="flex flex-col gap-3"></div>`,e.querySelectorAll("[data-bcat]").forEach(r=>r.addEventListener("click",()=>{i.browseCategory=r.dataset.bcat,i.browseLevel="",i.browseRoomsCache=[],i.expandedRooms.clear(),i.roomStudents={},i.expandedStudents.clear(),i.studentSubjects={},at(e)})),document.getElementById("regrade-browse-level").addEventListener("change",r=>{i.browseLevel=r.target.value,i.expandedRooms.clear(),i.roomStudents={},i.expandedStudents.clear(),i.studentSubjects={},Ne()}),Ne()}async function Ne(){const e=document.getElementById("regrade-browse-rooms");if(e){if(!i.browseLevel){i.browseRoomsCache=[],e.innerHTML='<div class="text-center py-12 text-[var(--muted-2)] text-sm">เลือกระดับชั้นเพื่อดูรายชื่อห้องเรียน</div>';return}e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';try{i.browseRoomsCache=await ze(i.browseCategory,i.browseLevel)}catch(a){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${n(a.message)}</p>`;return}P()}}function P(){const e=document.getElementById("regrade-browse-rooms");e&&(e.innerHTML=i.browseRoomsCache.length?i.browseRoomsCache.map(a=>ya(a)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่พบห้องเรียนที่มีวิชาค้างในระดับชั้นนี้ 🎉</div>',$a(e))}function rt(e){const a=i.classroomSortDesc?-1:1;return[...e].sort((t,r)=>(t.not_yet-r.not_yet)*a)}function ya(e){const a=i.expandedRooms.has(e.room),t=i.roomStudents[e.room],r=t?rt(t):null;return`
  <div class="rg-card p-4">
    <div class="flex justify-between items-start gap-2">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${n(e.room)}</p>
        <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${e.student_count} คนมีวิชาค้าง</p>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0 flex-wrap justify-end">
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--bad-soft);color:var(--bad)">ค้าง ${e.not_yet}</span>
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">จำนง ${e.requested}</span>
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok)">สำเร็จ ${e.done}</span>
      </div>
    </div>
    <div class="flex gap-2 mt-3">
      <button data-toggle-room="${n(e.room)}" class="flex-1 py-1.5 rounded-lg text-[10px] font-bold bg-[var(--surface-2)] text-[var(--muted)]">${a?"▲ ย่อ":"▾ ดูรายชื่อนักเรียน"}</button>
      <button data-print-room="${n(e.room)}" class="px-3 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายชื่อห้อง</button>
    </div>
    ${a?`<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex flex-col gap-2">
      <button data-toggle-sort class="self-start px-2.5 py-1 rounded-full text-[10px] font-bold mb-1" style="background:var(--surface-2);color:var(--muted)">↕️ เรียง${i.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</button>
      ${r?r.length?r.map(s=>ha(s)).join(""):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีข้อมูลนักเรียน</p>':'<p class="text-center text-xs text-[var(--muted-2)] py-4">กำลังโหลด...</p>'}
    </div>`:""}
  </div>`}function ha(e){const a=i.expandedStudents.has(e.student_id),t=i.studentSubjects[e.student_id];return`
  <div class="rounded-xl bg-[var(--surface-2)] overflow-hidden">
    <button data-toggle-student="${e.student_id}" class="w-full flex items-center gap-2.5 p-2.5 text-left">
      ${M(e,!1)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${n(e.full_name)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">${n(e.student_code||"")}</p>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0 text-[10px] font-bold">
        <span style="color:var(--bad)">${e.not_yet}</span>/<span style="color:var(--gold-ink)">${e.requested}</span>/<span style="color:var(--ok)">${e.done}</span>
      </div>
    </button>
    ${a?`<div class="px-2.5 pb-2.5 flex flex-col gap-1.5">
      ${t?t.length?t.map(r=>`
      <div class="flex justify-between items-center gap-2 bg-[var(--surface)] rounded-lg px-2.5 py-1.5">
        <div class="min-w-0"><p class="text-[11px] font-bold text-[var(--ink)] truncate">${n(r.subject_name)}</p><p class="text-[9px] text-[var(--muted-2)]">${n(r.subject_code)} · ${n(r.semester)} · ${n(r.teacher_name)}</p></div>
        <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${Z(r.status)}">${K(r.status).label}</span>
      </div>`).join(""):'<p class="text-center text-[11px] text-[var(--muted-2)] py-2">ไม่มีรายวิชา</p>':'<p class="text-center text-[11px] text-[var(--muted-2)] py-2">กำลังโหลด...</p>'}
      <button data-print-student="${e.student_id}" class="mt-1 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายบุคคล</button>
    </div>`:""}
  </div>`}function $a(e){e.querySelectorAll("[data-toggle-room]").forEach(a=>a.addEventListener("click",async()=>{const t=a.dataset.toggleRoom;if(i.expandedRooms.has(t))i.expandedRooms.delete(t),P();else if(i.expandedRooms.add(t),P(),!i.roomStudents[t]){try{i.roomStudents[t]=await Fe(i.browseCategory,t)}catch{i.roomStudents[t]=[]}P()}})),e.querySelectorAll("[data-toggle-student]").forEach(a=>a.addEventListener("click",async()=>{const t=Number(a.dataset.toggleStudent);if(i.expandedStudents.has(t))i.expandedStudents.delete(t),P();else if(i.expandedStudents.add(t),P(),!i.studentSubjects[t]){try{i.studentSubjects[t]=await Ue(t)}catch{i.studentSubjects[t]=[]}P()}})),e.querySelectorAll("[data-toggle-sort]").forEach(a=>a.addEventListener("click",()=>{i.classroomSortDesc=!i.classroomSortDesc,P()})),e.querySelectorAll("[data-print-room]").forEach(a=>a.addEventListener("click",()=>ka(a.dataset.printRoom))),e.querySelectorAll("[data-print-student]").forEach(a=>a.addEventListener("click",()=>_a(Number(a.dataset.printStudent))))}const wa=`
  body{font-family:'Sarabun',sans-serif;padding:24px;color:#1f2937;}
  h1{font-size:18px;margin-bottom:4px;}
  p.sub{color:#666;font-size:12px;margin-bottom:16px;}
  table{width:100%;border-collapse:collapse;font-size:13px;}
  th,td{border:1px solid #ccc;padding:6px 8px;text-align:left;}
  th{background:#f3f4f6;}
  @media print { body{padding:0;} }`;function st(e,a){const t=`<!doctype html><html><head><meta charset="utf-8"><title>${n(e)}</title><style>${wa}</style></head><body>${a}</body></html>`;Ut(t,{autoprint:!0})}async function ka(e){let a=i.roomStudents[e];if(!a)try{a=await Fe(i.browseCategory,e)}catch(r){f("โหลดข้อมูลไม่สำเร็จ: "+r.message,"error");return}a=rt(a);const t=a.map((r,s)=>`<tr>
    <td>${s+1}</td><td style="text-align:center">${n(r.student_code||"")}</td><td>${n(r.full_name)}</td>
    <td style="text-align:center">${r.not_yet}</td><td style="text-align:center">${r.requested}</td><td style="text-align:center">${r.done}</td>
  </tr>`).join("");st(`รายชื่อห้อง ${e}`,`
    <h1>รายชื่อนักเรียนที่มีวิชาค้าง — ห้อง ${n(e)}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} คน · เรียงตาม${i.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</p>
    <table><thead><tr><th>#</th><th style="text-align:center">เลขประจำตัว</th><th>ชื่อ-สกุล</th><th>ค้าง</th><th>จำนงแล้ว</th><th>สำเร็จ</th></tr></thead>
    <tbody>${t}</tbody></table>`)}async function _a(e){var d;let a=i.studentSubjects[e],t=null;for(const o in i.roomStudents){const p=(d=i.roomStudents[o])==null?void 0:d.find(h=>h.student_id===e);if(p){t=p;break}}if(!a)try{a=await Ue(e)}catch(o){f("โหลดข้อมูลไม่สำเร็จ: "+o.message,"error");return}const r=a.map((o,p)=>`<tr>
    <td>${p+1}</td><td>${n(o.subject_name)}</td><td>${n(o.subject_code)}</td>
    <td>${n(o.category)}</td><td>${n(o.semester)}</td><td>${n(o.teacher_name)}</td><td>${n(K(o.status).label)}</td>
  </tr>`).join(""),s=(t==null?void 0:t.full_name)||"-";st(`รายวิชาค้าง ${s}`,`
    <h1>รายวิชาที่ค้างของ ${n(s)}${t!=null&&t.student_code?` (${n(t.student_code)})`:""}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} วิชา</p>
    <table><thead><tr><th>#</th><th>รายวิชา</th><th>รหัสวิชา</th><th>หมวด</th><th>ภาคเรียน</th><th>ครูผู้สอน</th><th>สถานะ</th></tr></thead>
    <tbody>${r}</tbody></table>`)}function De(e){const a=document.getElementById("regrade-drilldown");if(!i.drilldown){a.innerHTML="";return}const t={all:"รายวิชาค้างทั้งหมด",requested:"จำนงแล้ว",assigned:"กำลังดำเนินการปรับแก้",done:"ปรับแก้สำเร็จ"};let r=[];i.drilldown==="all"?r=e:i.drilldown==="requested"?r=e.filter(d=>d.status==="จำนงแล้ว"||d.status==="กำลังดำเนินการปรับแก้"):i.drilldown==="assigned"?r=e.filter(d=>d.status==="กำลังดำเนินการปรับแก้"):i.drilldown==="done"&&(r=e.filter(d=>d.status==="ปรับแก้สำเร็จ"));const s=r.reduce((d,o)=>(d[o.class_level||"-"]=(d[o.class_level||"-"]||0)+Number(o.cnt),d),{});a.innerHTML=`<div class="rg-card p-4 mb-4">
    <div class="flex justify-between items-center mb-3">
      <p class="text-xs font-bold text-[var(--ink-2)]">รายละเอียด: ${n(t[i.drilldown])}</p>
      <button id="regrade-drill-close" class="w-6 h-6 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-xs">✕</button>
    </div>
    <p class="text-xs text-[var(--muted-2)]">${H(r)} รายการ</p>
    <p class="text-[11px] text-[var(--muted)] mt-2">แยกตามชั้น: ${Object.entries(s).map(([d,o])=>`${n(d)} (${o})`).join(", ")||"-"}</p>
  </div>`,document.getElementById("regrade-drill-close").addEventListener("click",()=>{i.drilldown=null,a.innerHTML=""})}const O={activeTab:"general"};function W(e,a,t){return`<button type="button" data-settings-tab="${e}" class="flex-shrink-0" style="${q(t)}">${n(a)}</button>`}function Sa(e,a,t){return`<button type="button" data-level-chip="${n(e)}" data-on="${t?"1":"0"}" class="px-2.5 py-1 rounded-full text-[11px] font-bold" style="${t?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}">${n(a)}</button>`}function Pe(e,a){O.activeTab=a,e.querySelectorAll("[data-settings-group]").forEach(t=>t.classList.toggle("hidden",t.dataset.settingsGroup!==a)),e.querySelectorAll("[data-settings-tab]").forEach(t=>{t.style.cssText=q(t.dataset.settingsTab===a)+"flex-shrink:0;"})}async function B(){var L,I,N,we;Q("ตั้งค่าระบบ",`⚙️ ตั้งค่า${g.cfg.system_name||"แก้ค้างเก่า"}`);const e=document.getElementById("regrade-content");let a,t,r,s,d,o,p;try{[a,t,r,s,d,o,p]=await Promise.all([bt(),ft(),xt(),Oe(),Ve(),Vt(),yt()])}catch(m){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${n(m.message)}</div>`;return}const h=new Map(s.map(m=>[m.profile_id,m])),v=g.cfg,$=new Set(v.intent_open_levels||[]);e.innerHTML=`
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
          <input id="regrade-set-name" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm" value="${n(v.system_name||"แก้ค้างเก่า")}">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ข้อความประกาศ</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎓 สำหรับนักเรียน</label>
          <textarea id="regrade-set-ann-student" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">${n(v.student_announcement||"")}</textarea>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">👨‍🏫 สำหรับครูผู้สอน</label>
          <textarea id="regrade-set-ann-teacher" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">${n(v.teacher_announcement||"")}</textarea>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">การมองเห็นเมนู</p>
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้านักเรียน</span>
            ${ee("regrade-set-vis-student",(L=v.visibility)==null?void 0:L.student_menu)}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้าครู</span>
            ${ee("regrade-set-vis-teacher",(I=v.visibility)==null?void 0:I.teacher_menu)}
          </div>
        </div>
      </div>

      <div data-settings-group="intent" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <div class="flex items-center justify-between mb-1">
            <p class="text-sm font-bold text-[var(--ink)]">การแจ้งความจำนงของนักเรียน</p>
            ${ee("regrade-set-intent",v.intent_open)}
          </div>
          <p class="text-xs text-[var(--muted-2)] mb-3">ควบคุมปุ่มลอย "จำนงขอแก้/ปรับ" และปุ่มแจ้งความจำนงในการ์ดแต่ละวิชาที่นักเรียนเห็น</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เปิดรับตั้งแต่</label>
          <input id="regrade-set-intent-start" type="datetime-local" value="${n(v.intent_window_start||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ถึงวันที่</label>
          <input id="regrade-set-intent-end" type="datetime-local" value="${n(v.intent_window_end||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ระดับชั้นที่เปิดให้แจ้งความจำนง</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">เลือกเฉพาะระดับชั้นที่ต้องการเปิดรับ — ถ้าไม่เลือกเลยสักระดับ = เปิดทุกระดับชั้น (ค่าเริ่มต้น)</p>
          ${["สามัญ","ศาสนา"].map(m=>{const b=d.filter(S=>S.category===m);return b.length?`<p class="text-[11px] font-bold text-[var(--ink-2)] mb-1.5 mt-2">${m==="สามัญ"?"📘":"🕌"} ${n(m)}</p>
            <div class="flex flex-wrap gap-1.5 mb-2">${b.map(S=>Sa(`${S.category}|${S.class_level}`,S.class_level,$.has(`${S.category}|${S.class_level}`))).join("")}</div>`:""}).join("")}
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">กำหนดเวลาตอบรับของครูผู้สอน</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ช่วงเวลาที่ครูควรตอบรับ (นัดสอบปรับ/ให้งานแก้) หลังนักเรียนแจ้งความจำนง</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เริ่มตอบรับได้ตั้งแต่</label>
          <input id="regrade-set-response-start" type="datetime-local" value="${n(v.response_window_start||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ตอบรับให้เสร็จภายใน</label>
          <input id="regrade-set-response-end" type="datetime-local" value="${n(v.response_window_end||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ปุ่ม "ส่งสรุปเกรดเข้าระบบ" ในหน้าบันทึกคะแนนของครู</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ปุ่มส่งเกรดจะแสดงในหน้าบันทึกคะแนนและการ์ดห้องเรียนเฉพาะช่วงวันที่นี้เท่านั้น โดยรวมวันเริ่มและวันสิ้นสุดไว้ในช่วงที่เปิดรับ</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <label class="block text-[11px] font-bold text-[var(--ink-2)]">แสดงปุ่มตั้งแต่วันที่
              <input id="regrade-set-live-submit-date" type="date" value="${n(v.live_submit_open_date||"")}" class="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
            </label>
            <label class="block text-[11px] font-bold text-[var(--ink-2)]">ถึงวันที่
              <input id="regrade-set-live-submit-end" type="date" value="${n(v.live_submit_close_date||"")}" class="mt-1 w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
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
            ${ee("regrade-set-show-deadline",v.show_deadline_banner)}
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
            ${Object.entries(nt).map(([m,b])=>`
            <button data-preset="${m}" class="flex flex-col items-center gap-1.5">
              <span class="block w-11 h-11 rounded-xl border border-[var(--line)]" style="background:linear-gradient(135deg, ${b.primary} 30%, ${b.secondary} 65%, ${b.gold} 100%)"></span>
              <span class="text-[10px] font-bold text-[var(--muted)]">${n(b.label)}</span>
            </button>`).join("")}
          </div>

          <div class="grid grid-cols-3 gap-3 mb-4">
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎀 สีหลัก (สามัญ)</label><input id="regrade-set-primary" type="color" value="${v.primary_color||"#9d174d"}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🕌 สีรอง (ศาสนา)</label><input id="regrade-set-secondary" type="color" value="${v.secondary_color||"#065f46"}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">✨ สีทอง</label><input id="regrade-set-gold" type="color" value="${v.gold_color||"#b45309"}" class="w-full h-9"></div>
          </div>

          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ความโปร่งของกระจก (เฉพาะหน้าจอมือถือ)</label>
          <input id="regrade-set-glass-alpha" type="range" min="0.2" max="0.9" step="0.05" value="${v.glass_alpha??.55}" class="w-full">
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
              <input id="admin-regrade-year" type="number" min="2500" max="2700" value="${n((p==null?void 0:p.academicYear)??2569)}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ภาคเรียน</label>
              <select id="admin-regrade-semester" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm bg-[var(--surface)]">
                <option value="1" ${Number(p==null?void 0:p.semester)===1?"selected":""}>1</option>
                <option value="2" ${Number(p==null?void 0:p.semester)===2?"selected":""}>2</option>
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
        ${ie.map(({key:m,suffix:b,emoji:S,label:k})=>{var D;const A=(D=v.regrade_slip_template_ids)==null?void 0:D[m];return`
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">${S} เทมเพลตใบสั้น — ${k}</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เทมเพลตที่ใช้อยู่</label>
          <select id="regrade-set-slip-template-${b}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
            <option value="">— ยังไม่เลือก —</option>
            ${o.map(F=>`<option value="${F.id}" ${String(A??"")===String(F.id)?"selected":""}>${n(F.name)}</option>`).join("")}
          </select>
          <button id="regrade-slip-design-edit-${b}" type="button" class="w-full mb-3 py-2 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🎨 แก้ไขดีไซน์เทมเพลตที่เลือก</button>
          <div class="pt-3 border-t border-dashed border-[var(--line-soft)]">
            <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">หรือสร้างเทมเพลตใหม่</label>
            <div class="flex gap-2">
              <input id="regrade-slip-new-name-${b}" placeholder="ชื่อเทมเพลต เช่น ใบสั้น${k}" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs">
              <button id="regrade-slip-design-new-${b}" type="button" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ ออกแบบใหม่</button>
            </div>
          </div>
        </div>`}).join("")}
      </div>

      <div data-settings-group="access" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้ดูแลระบบ (เข้าหน้าตั้งค่านี้ได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${a.map(m=>ce(m,"admin",h)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-admin" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-admin" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้ ไม่แก้ตั้งค่า)</p>
          <div class="flex flex-wrap gap-2 mb-3">${r.map(m=>ce(m,"executive",h)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-executive" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-executive" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">เจ้าหน้าที่ฝ่ายทะเบียน (เข้าหน้าปิดงานได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${t.map(m=>ce(m,"registrar",h)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-registrar" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-registrar" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">+ เพิ่ม</button>
          </div>
        </div>
      </div>

      <datalist id="regrade-teacher-datalist">${s.map(m=>`<option value="${n(m.full_name)}${m.teacher_code?` (${n(m.teacher_code)})`:""} · รหัส ${m.id}"></option>`).join("")}</datalist>
    </div>`,Pe(e,O.activeTab),e.querySelectorAll("[data-settings-tab]").forEach(m=>m.addEventListener("click",()=>Pe(e,m.dataset.settingsTab))),e.querySelectorAll("[data-level-chip]").forEach(m=>m.addEventListener("click",()=>{const b=m.dataset.on!=="1";m.dataset.on=b?"1":"0",m.style.cssText=b?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}));const l=e.querySelector("#admin-regrade-batch-result"),c=e.querySelector("#admin-regrade-preview"),y=e.querySelector("#admin-regrade-submit");let w=null,j=null;const z=(m,b=!1)=>{const S=Array.isArray(m==null?void 0:m.classes)?m.classes:[],k=S.slice(0,30).map(A=>`
      <tr class="border-t border-[var(--line-soft)]">
        <td class="px-2 py-1.5">${n(A.class_name||"-")}</td>
        <td class="px-2 py-1.5">${n(A.subject_code||"-")} ${n(A.subject_name||"")}</td>
        <td class="px-2 py-1.5">${n(A.teacher_name||"-")}</td>
        <td class="px-2 py-1.5 text-right font-bold">${Number(A.failing_count||0)}</td>
      </tr>`).join("");l.innerHTML=`
      <div class="rounded-xl p-3 text-xs" style="background:var(--surface-2);border:1px solid var(--line-soft);">
        <p class="font-bold text-[var(--ink)]">${b?"ส่งข้อมูลเรียบร้อยแล้ว":"ผลการตรวจสอบรายการ"}</p>
        <p class="mt-1 text-[var(--muted)]">ภาคเรียน ${n(m.semester)}/${n(m.academic_year)} · พบห้องที่มีรายการติด ${Number(m.class_count||0)} ห้อง · นักเรียนที่ติดทั้งหมด ${Number(m.failing_count||0)} คน</p>
        <p class="mt-1 text-[var(--muted-2)]">ระบบจะไม่นับนักเรียนที่ยังไม่มีคะแนนครบทุกช่อง เว้นแต่มีการกำหนดผลพิเศษไว้แล้ว</p>
        ${b?`<p class="mt-1 font-bold" style="color:var(--ok)">เพิ่มรายการใหม่ ${Number(m.submitted||0)} รายการ</p>`:`<p class="mt-1" style="color:var(--gold-ink)">รายการที่มีอยู่แล้ว ${Number(m.existing_count||0)} รายการ จะไม่ถูกสร้างซ้ำ</p>`}
        ${S.length?`<div class="overflow-x-auto mt-3"><table class="w-full text-[11px]"><thead><tr class="text-left text-[var(--muted-2)]"><th class="px-2 py-1">ห้อง</th><th class="px-2 py-1">รายวิชา</th><th class="px-2 py-1">ครูผู้สอน</th><th class="px-2 py-1 text-right">ติด</th></tr></thead><tbody>${k}</tbody></table>${S.length>30?`<p class="text-center text-[10px] text-[var(--muted-2)] mt-2">แสดง 30 จาก ${S.length} ห้อง</p>`:""}</div>`:'<p class="text-center text-[var(--muted-2)] py-3">ไม่พบรายการนักเรียนที่ติดในภาคเรียนนี้</p>'}
      </div>`},x=()=>{var m,b;return{year:Number((m=e.querySelector("#admin-regrade-year"))==null?void 0:m.value),semester:Number((b=e.querySelector("#admin-regrade-semester"))==null?void 0:b.value)}},_=()=>{w=null,j=null,y==null||y.classList.add("hidden")};(N=e.querySelector("#admin-regrade-year"))==null||N.addEventListener("input",_),(we=e.querySelector("#admin-regrade-semester"))==null||we.addEventListener("change",_),c==null||c.addEventListener("click",async()=>{const{year:m,semester:b}=x();if(!Number.isInteger(m)||m<2500||![1,2].includes(b)){f("กรุณาเลือกปีการศึกษาและภาคเรียนให้ถูกต้อง","warning");return}c.disabled=!0,c.textContent="กำลังตรวจสอบ...";try{w=await Le(m,b,!1),j={year:m,semester:b},z(w),y.classList.toggle("hidden",!Number(w.failing_count))}catch(S){f("ตรวจสอบไม่สำเร็จ: "+S.message,"error")}finally{c.disabled=!1,c.textContent="🔎 ตรวจสอบรายการก่อนส่ง"}}),y==null||y.addEventListener("click",async()=>{const{year:m,semester:b}=x();if(!(w!=null&&w.failing_count)||(j==null?void 0:j.year)!==m||(j==null?void 0:j.semester)!==b){f("กรุณาตรวจสอบรายการของภาคเรียนที่เลือกใหม่ก่อนส่ง","warning");return}if(await R({title:"ยืนยันส่งสรุปเกรดทุกห้อง",message:`ส่งนักเรียนที่ติด ${Number(w.failing_count)} คน ของภาคเรียน ${b}/${m} เข้าระบบแก้ค้างเก่าใช่หรือไม่? รายการเดิมจะไม่ถูกสร้างซ้ำ`,confirmText:"ยืนยันส่งทุกห้อง"})){y.disabled=!0,y.textContent="กำลังส่ง...";try{const k=await Le(m,b,!0);z(k,!0),f(`ส่งสำเร็จ เพิ่มรายการใหม่ ${Number(k.submitted||0)} รายการ ✅`,"success")}catch(k){f("ส่งข้อมูลไม่สำเร็จ: "+k.message,"error")}finally{y.disabled=!1,y.textContent="📤 ยืนยันส่งทุกห้อง"}}}),e.querySelectorAll("[data-remove-admin]").forEach(m=>m.addEventListener("click",async()=>{if(await R({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้ดูแลระบบของ "${m.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await ht(m.dataset.removeAdmin),f("ถอดสิทธิ์แล้ว","success"),B()}catch(S){f(S.message,"error")}})),e.querySelectorAll("[data-remove-registrar]").forEach(m=>m.addEventListener("click",async()=>{if(await R({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์เจ้าหน้าที่ทะเบียนของ "${m.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await $t(m.dataset.removeRegistrar),f("ถอดสิทธิ์แล้ว","success"),B()}catch(S){f(S.message,"error")}})),e.querySelectorAll("[data-remove-executive]").forEach(m=>m.addEventListener("click",async()=>{if(await R({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้บริหารของ "${m.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await wt(m.dataset.removeExecutive),f("ถอดสิทธิ์แล้ว","success"),B()}catch(S){f(S.message,"error")}})),document.getElementById("regrade-add-admin").addEventListener("click",async()=>{const m=document.getElementById("regrade-new-admin"),b=Y(m.value,s);if(!b){f("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(a.some(k=>k.profile_id===b.profile_id)){f("ครูคนนี้เป็นผู้ดูแลระบบอยู่แล้ว","warning");return}if(await R({title:"ยืนยันเพิ่มผู้ดูแลระบบ",message:`เพิ่ม "${b.full_name}" เป็นผู้ดูแลระบบแก้ค้างเก่าใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await kt(b.profile_id),m.value="",f("เพิ่มแล้ว ✅","success"),B()}catch(k){f(k.message,"error")}}),document.getElementById("regrade-add-registrar").addEventListener("click",async()=>{const m=document.getElementById("regrade-new-registrar"),b=Y(m.value,s);if(!b){f("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(t.some(k=>k.profile_id===b.profile_id)){f("ครูคนนี้เป็นเจ้าหน้าที่ทะเบียนอยู่แล้ว","warning");return}if(await R({title:"ยืนยันเพิ่มเจ้าหน้าที่ทะเบียน",message:`เพิ่ม "${b.full_name}" เป็นเจ้าหน้าที่ฝ่ายทะเบียนใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await _t(b.profile_id),m.value="",f("เพิ่มแล้ว ✅","success"),B()}catch(k){f(k.message,"error")}}),document.getElementById("regrade-add-executive").addEventListener("click",async()=>{const m=document.getElementById("regrade-new-executive"),b=Y(m.value,s);if(!b){f("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(r.some(k=>k.profile_id===b.profile_id)){f("ครูคนนี้เป็นผู้บริหารอยู่แล้ว","warning");return}if(await R({title:"ยืนยันเพิ่มผู้บริหาร",message:`เพิ่ม "${b.full_name}" เป็นผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้) ใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await St(b.profile_id),m.value="",f("เพิ่มแล้ว ✅","success"),B()}catch(k){f(k.message,"error")}}),document.getElementById("regrade-set-save").addEventListener("click",async()=>{const m=document.getElementById("regrade-set-live-submit-date").value,b=document.getElementById("regrade-set-live-submit-end").value;if(m&&b&&b<m){f("วันสิ้นสุดการแสดงปุ่มส่งเกรดต้องไม่ก่อนวันเริ่มต้น","warning");return}if(await R({title:"ยืนยันบันทึกการตั้งค่า",message:"บันทึกการตั้งค่าทั้งหมดนี้ใช่หรือไม่? จะมีผลกับทุกคนทันที",confirmText:"บันทึก"}))try{await je({intent_open:te(e,"regrade-set-intent"),intent_window_start:document.getElementById("regrade-set-intent-start").value,intent_window_end:document.getElementById("regrade-set-intent-end").value,intent_open_levels:[...e.querySelectorAll('[data-level-chip][data-on="1"]')].map(k=>k.dataset.levelChip),response_window_start:document.getElementById("regrade-set-response-start").value,response_window_end:document.getElementById("regrade-set-response-end").value,live_submit_open_date:document.getElementById("regrade-set-live-submit-date").value,live_submit_close_date:document.getElementById("regrade-set-live-submit-end").value,show_deadline_banner:te(e,"regrade-set-show-deadline"),visibility:{student_menu:te(e,"regrade-set-vis-student"),teacher_menu:te(e,"regrade-set-vis-teacher")},primary_color:document.getElementById("regrade-set-primary").value,secondary_color:document.getElementById("regrade-set-secondary").value,gold_color:document.getElementById("regrade-set-gold").value,glass_alpha:Number(document.getElementById("regrade-set-glass-alpha").value),student_announcement:document.getElementById("regrade-set-ann-student").value,teacher_announcement:document.getElementById("regrade-set-ann-teacher").value,system_name:document.getElementById("regrade-set-name").value.trim()||"แก้ค้างเก่า",regrade_slip_template_ids:Object.fromEntries(ie.map(({key:k,suffix:A})=>[k,document.getElementById(`regrade-set-slip-template-${A}`).value||null]))}),f("บันทึกการตั้งค่าเรียบร้อย ✅","success"),g.cfg=await pe(),dt(),B()}catch(k){f("บันทึกไม่สำเร็จ: "+k.message,"error")}}),ie.forEach(({key:m,suffix:b,label:S})=>{document.getElementById(`regrade-slip-design-new-${b}`).addEventListener("click",()=>{const k=document.getElementById(`regrade-slip-new-name-${b}`).value.trim()||`ใบสั้นแก้ค้างเก่า (${S})`;Te({template:{name:k,type:"custom",layout:Kt},previewVariables:Ae,placeholderTokens:Re,onSave:async(A,D)=>{var ke,_e;const F=await zt({name:k,type:"custom",presetKey:null,backgroundImageUrl:D,layout:A,createdByTeacherId:((ke=g.teacherRow)==null?void 0:ke.id)??null}),ot={...((_e=g.cfg)==null?void 0:_e.regrade_slip_template_ids)||{},[m]:F.id};await je({regrade_slip_template_ids:ot}),f(`สร้างเทมเพลต "${S}" และตั้งเป็นค่าที่ใช้แล้ว ✅`,"success"),g.cfg=await pe(),B()}})}),document.getElementById(`regrade-slip-design-edit-${b}`).addEventListener("click",()=>{const k=Number(document.getElementById(`regrade-set-slip-template-${b}`).value);if(!k){f("กรุณาเลือกเทมเพลตก่อน","warning");return}const A=o.find(D=>D.id===k);A&&Te({template:A,previewVariables:Ae,placeholderTokens:Re,onSave:async(D,F)=>{await Ft({id:A.id,layout:D,backgroundImageUrl:F}),f("บันทึกดีไซน์แล้ว ✅","success")}})})}),ta(e,["regrade-set-intent","regrade-set-vis-student","regrade-set-vis-teacher","regrade-set-show-deadline"]),ja(e),Ea(e)}const nt={default:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.55,label:"ค่าเริ่มต้น"},dark:{primary:"#701138",secondary:"#043d2d",gold:"#78350f",glassAlpha:.45,label:"เข้ม"},airy:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.25,label:"โปร่งใส"},tint:{primary:"#db2777",secondary:"#059669",gold:"#d97706",glassAlpha:.65,label:"ย้อมสี"}};function Ea(e){const a=e.querySelector("#regrade-set-primary"),t=e.querySelector("#regrade-set-secondary"),r=e.querySelector("#regrade-set-gold"),s=e.querySelector("#regrade-set-glass-alpha"),d=e.querySelector("#regrade-theme-preview"),o=e.querySelector("#regrade-theme-preview-sec"),p=e.querySelector("#regrade-theme-preview-gold"),h=document.documentElement;function v(){d.style.background=a.value,o.style.background=t.value,p.style.background=r.value,h.style.setProperty("--primary",a.value),h.style.setProperty("--secondary",t.value),h.style.setProperty("--gold",r.value),h.style.setProperty("--glass-alpha",s.value)}v(),[a,t,r,s].forEach($=>$.addEventListener("input",v)),e.querySelectorAll("[data-preset]").forEach($=>$.addEventListener("click",()=>{const l=nt[$.dataset.preset];l&&(a.value=l.primary,t.value=l.secondary,r.value=l.gold,s.value=l.glassAlpha,v())}))}function La(e){if(!e.length)return'<p class="text-xs text-[var(--muted-2)] text-center py-4">ไม่พบข้อมูลในไฟล์</p>';const a=["student_code","subject_code","subject_name","category","semester","class_level","teacher_code"],t=e.slice(0,10);return`<div class="overflow-x-auto rounded-xl border border-[var(--line)]">
    <table class="w-full text-[11px]">
      <thead class="bg-[var(--surface-2)] text-[var(--muted-2)]"><tr>${a.map(r=>`<th class="px-2 py-1.5 text-left">${r}</th>`).join("")}</tr></thead>
      <tbody>${t.map(r=>`<tr class="border-t border-[var(--line-soft)]">${a.map(s=>`<td class="px-2 py-1.5 text-[var(--ink-2)]">${n(r[s]??"")}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
    ${e.length>10?`<p class="text-center text-[10px] text-[var(--muted-2)] py-1.5">แสดง 10 จาก ${e.length} แถว</p>`:""}
  </div>`}function ja(e){let a=null;const t=e.querySelector("#regrade-csv-file"),r=e.querySelector("#regrade-csv-preview"),s=e.querySelector("#regrade-csv-import-btn"),d=e.querySelector("#regrade-csv-result");t==null||t.addEventListener("change",async()=>{var p;d.innerHTML="";const o=(p=t.files)==null?void 0:p[0];if(!o){a=null,r.innerHTML="",s.classList.add("hidden");return}try{const h=await o.text();a=ut(h),r.innerHTML=La(Dt(a)),s.classList.toggle("hidden",a.length===0)}catch(h){r.innerHTML="",f("อ่านไฟล์ CSV ไม่สำเร็จ: "+h.message,"error")}}),s==null||s.addEventListener("click",async()=>{if(!(!(a!=null&&a.length)||!await R({title:"ยืนยันนำเข้าข้อมูล CSV",message:`นำเข้าข้อมูลรายวิชาค้าง ${a.length} แถวเข้าสู่ระบบใช่หรือไม่? แถวที่มีอยู่แล้วในระบบจะถูกข้าม ไม่ทับข้อมูลเดิม`,confirmText:"ยืนยันนำเข้า"}))){s.disabled=!0,s.textContent="กำลังนำเข้า...";try{const p=await Pt(a);d.innerHTML=`
        <div class="rounded-xl p-3" style="background:var(--ok-soft);border:1px solid var(--ok-soft-line);color:var(--ok)">
          นำเข้าสำเร็จ ${p.imported} แถว จากทั้งหมด ${p.total} แถว
          ${p.skippedDuplicate?`<br>ข้าม ${p.skippedDuplicate} แถว (มีอยู่แล้วในระบบ)`:""}
          ${p.skippedNoStudent?`<br>ข้าม ${p.skippedNoStudent} แถว (ไม่พบรหัสนักเรียนในระบบ)`:""}
          ${p.skippedInvalid?`<br>ข้าม ${p.skippedInvalid} แถว (ข้อมูลไม่ครบ/หมวดไม่ถูกต้อง)`:""}
          ${p.unmatchedTeacher?`<br>⚠️ ${p.unmatchedTeacher} แถว ไม่พบรหัสครู (นำเข้าแล้วแต่ยังไม่ผูกครูผู้สอน)`:""}
        </div>`,f("นำเข้าข้อมูลเรียบร้อย ✅","success"),a=null,t.value="",r.innerHTML="",s.classList.add("hidden")}catch(p){f("นำเข้าไม่สำเร็จ: "+p.message,"error")}finally{s.disabled=!1,s.textContent="นำเข้าข้อมูล"}}})}function Y(e,a){const t=e.trim().match(/· รหัส (\d+)$/);return t?a.find(r=>r.id===Number(t[1]))??null:null}function ce(e,a,t){var o;const r=t==null?void 0:t.get(e.profile_id),s=r?`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`:((o=e.profiles)==null?void 0:o.user_code)||e.profile_id,d=a==="admin"?`data-remove-admin="${n(e.profile_id)}"`:a==="executive"?`data-remove-executive="${n(e.profile_id)}"`:`data-remove-registrar="${n(e.profile_id)}"`;return`<span class="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">
    ${n(s)}
    <button ${d} data-name="${n(s)}" class="w-4 h-4 rounded-full text-[10px]" style="background:var(--primary-soft-line)">×</button>
  </span>`}function dt(){const e=document.documentElement;g.cfg.primary_color&&e.style.setProperty("--primary",g.cfg.primary_color),g.cfg.secondary_color&&e.style.setProperty("--secondary",g.cfg.secondary_color),g.cfg.gold_color&&e.style.setProperty("--gold",g.cfg.gold_color),g.cfg.glass_alpha!=null&&e.style.setProperty("--glass-alpha",g.cfg.glass_alpha)}let $e=null;function lt(){var a,t;const e=[];return g.role==="student"&&g.studentRow&&((a=g.cfg.visibility)!=null&&a.student_menu||g.isAdmin)&&e.push({key:"student",icon:"🎓",label:"ของฉัน"}),g.role==="teacher"&&g.teacherRow&&((t=g.cfg.visibility)!=null&&t.teacher_menu||g.isAdmin)&&e.push({key:"teacher",icon:"📚",label:"งานสอนของฉัน"}),g.isRegistrar&&e.push({key:"registrar",icon:"📋",label:"ฝ่ายทะเบียน"}),g.isExecutive&&e.push({key:"dashboard",icon:"📊",label:"ผู้บริหาร"}),g.isAdmin&&e.push({key:"settings",icon:"⚙️",label:"ตั้งค่าระบบ"}),e}async function J(e){$e=e,document.getElementById("regrade-bottom-tabs").innerHTML="";const a=lt();if(Ta(a),Ra(a),e==="student")return U();if(e==="teacher")return E();if(e==="registrar")return ge();if(e==="dashboard")return he();if(e==="settings")return B()}function Ta(e){e.length>1?xe(e,$e,J):document.getElementById("regrade-sidebar-nav").innerHTML=""}function Ra(e){const a=document.getElementById("regrade-role-switcher");if(a){if(e.length<=1){a.innerHTML="";return}a.innerHTML=`<div class="rg-switcher-bar flex gap-2 overflow-x-auto px-4 py-2 border-b border-[var(--line-soft)]">${e.map(t=>`
    <button data-switch-sec="${t.key}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition"
      style="${$e===t.key?"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;":"background:var(--surface-2);color:var(--muted);"}">${t.icon} ${n(t.label)}</button>`).join("")}</div>`,a.querySelectorAll("[data-switch-sec]").forEach(t=>t.addEventListener("click",()=>J(t.dataset.switchSec)))}}function ue(){document.getElementById("regrade-content").innerHTML=`
    <div class="max-w-md mx-auto p-6 text-center text-[var(--muted)]">
      <p class="text-4xl mb-3">🔒</p>
      <p class="text-sm">บัญชีนี้ยังไม่มีสิทธิ์เข้าใช้งานระบบแก้ค้างเก่า</p>
    </div>`}async function Aa(){const{data:{session:e}}=await Se.auth.getSession();if(!e){sessionStorage.setItem("regrade-pending-subject",new URLSearchParams(location.search).get("subject")||""),window.location.replace("index.html?next=regrade.html");return}const{data:a}=await Se.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single();g.role=a==null?void 0:a.role;const r={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[g.role]||"index.html",s=document.getElementById("regrade-back-btn-desktop"),d=document.getElementById("regrade-back-btn-mobile");if(window.self!==window.top){const l=c=>{c.preventDefault(),typeof window.parent.closeRegradeModal=="function"?window.parent.closeRegradeModal():window.parent.location.href=r};s.removeAttribute("href"),d.removeAttribute("href"),s.addEventListener("click",l),d.addEventListener("click",l)}else s.href=r,d.href=r;try{g.cfg=await pe();const l=await pt();g.isAdmin=l.isAdmin||g.role==="admin"||(a==null?void 0:a.is_also_admin)===!0,g.isRegistrar=l.isRegistrar||g.isAdmin,g.isExecutive=l.isExecutive||g.isAdmin}catch(l){document.getElementById("regrade-content").innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดการตั้งค่าไม่สำเร็จ: ${n(l.message)}</div>`;return}if(dt(),g.role==="student"&&(g.studentRow=await mt()),g.role==="teacher"&&(g.teacherRow=await gt()),g.role==="student"&&!g.studentRow){ue();return}if(g.role==="teacher"&&!g.teacherRow){ue();return}const o=lt();if(!o.length){ue();return}const p=g.isAdmin||g.isExecutive?"dashboard":g.isRegistrar?"registrar":o[0].key;await J(p);const h=new URLSearchParams(location.search),v=h.get("subject")||sessionStorage.getItem("regrade-pending-subject");if(sessionStorage.removeItem("regrade-pending-subject"),v)if(h.get("action")==="respond"&&g.teacherRow){await Ze();const l=u.subjects.find(c=>Number(c.id)===Number(v));l&&l.status==="จำนงแล้ว"?(u.subView="respond",de(l,"ให้งานแก้"),await J("teacher")):await Ee(v)}else await Ee(v,{onRespond:async l=>{g.teacherRow&&(u.subView="respond",de(l,"ให้งานแก้"),await J("teacher"))}});const $=g.role==="student"?"student":g.teacherRow?"teacher":null;if($){const l=$==="student"?g.studentRow.id:g.teacherRow.id,c=()=>{document.visibilityState==="visible"&&ct($,l).catch(()=>{})};c();const y=setInterval(c,3e4);document.addEventListener("visibilitychange",c),window.addEventListener("pagehide",()=>{clearInterval(y),document.removeEventListener("visibilitychange",c)},{once:!0})}}Aa();
