import{s as ge}from"./supabase-BV-W2lsh.js";/* empty css             */import{a as b}from"./ui-Dh03k4iX.js";import{p as Ye}from"./import-D0GLDW1_.js";import{g as re,c as Je,a as Xe,b as Ze,d as Qe,e as et,f as tt,h as je,i as Le,r as at,j as rt,k as st,l as nt,m as dt,n as lt,u as fe,o as ot,p as it,q as ct,s as ut,t as pt,v as mt,w as gt,x as ft,y as vt,z as bt,A as xt,B as yt,C as ht,D as $t,E as Re,F as wt,G as kt,H as _t,I as Ae,J as He}from"./regrade-api-C8s-TuM0.js";import{b as St,c as Et,u as Tt,e as jt,o as Lt}from"./certificate-engine-Ciw2pKHx.js";import{o as ve}from"./certificate-editor-CGT2GcIB.js";import{n as Rt,o as At}from"./storage-D6nkcVz6.js";const be=[{token:"{{student_name}}",label:"ชื่อนักเรียน"},{token:"{{student_code}}",label:"รหัสนักเรียน"},{token:"{{room}}",label:"ห้องเรียน"},{token:"{{class_level}}",label:"ชั้น/ระดับ"},{token:"{{category}}",label:"หมวด (สามัญ/ศาสนา)"},{token:"{{subject_name}}",label:"ชื่อรายวิชา"},{token:"{{subject_code}}",label:"รหัสวิชา"},{token:"{{semester}}",label:"ภาคเรียน"},{token:"{{grade_failed_at}}",label:"ผลการเรียนที่ติด (ร/มส/0)"},{token:"{{teacher_name}}",label:"ชื่อครูผู้สอน"},{token:"{{response_method}}",label:"วิธีตอบรับ/วิธีแก้"},{token:"{{due_date}}",label:"วันนัดสอบ/กำหนดส่ง"},{token:"{{file_url}}",label:"ลิงก์ไฟล์งานแก้"}],xe={student_name:"ตัวอย่าง ชื่อ-สกุล นักเรียน",student_code:"00000",room:"ม.6/1",class_level:"ม.6",category:"สามัญ",subject_name:"วิชาตัวอย่าง",subject_code:"ว00000",semester:"1/2569",grade_failed_at:"ร",teacher_name:"ครูตัวอย่าง",response_method:"นัดสอบปรับ",due_date:"12 ธ.ค. 2569 เวลา 09:00 น.",file_url:"https://example.com/work"},Ht={orientation:"portrait",background:{type:"flat",color:"#ffffff",cardColor:"#ffffff",borderColor:"#94a3b8",borderWidth:2,borderStyle:"solid"},elements:[{id:"title",text:"ใบมอบหมายงานแก้ค้างเก่า",x:50,y:8,fontSize:22,color:"#1e293b",align:"center",bold:!0},{id:"student",text:"ชื่อ-สกุล: {{student_name}}   รหัส: {{student_code}}   ห้อง: {{room}}",x:8,y:22,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"subject",text:"รายวิชา: {{subject_name}} ({{subject_code}})   ภาคเรียน: {{semester}}",x:8,y:30,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"teacher",text:"ครูผู้สอน: {{teacher_name}}",x:8,y:38,fontSize:13,color:"#1e293b",align:"left",bold:!1,maxWidth:90},{id:"issued",text:"ออกให้ ณ วันที่ {{date}}",x:8,y:85,fontSize:11,color:"#64748b",align:"left",bold:!1},{id:"sign",text:"ลายเซ็นครูผู้สอน",x:70,y:92,fontSize:11,color:"#64748b",align:"center",bold:!1,borderTop:!0}]},ee=[{key:"สามัญ",suffix:"samai",emoji:"📘",label:"สามัญ"},{key:"ศาสนา",suffix:"religion",emoji:"🕌",label:"ศาสนา"}];async function le(e,a){var o,p,g,x,$,i,d,m;const t=e.category==="ศาสนา"?"ศาสนา":"สามัญ",r=Number((p=(o=f.cfg)==null?void 0:o.regrade_slip_template_ids)==null?void 0:p[t]);if(!r){b(`ยังไม่ได้ตั้งค่าเทมเพลตใบสั้นสำหรับหมวด "${t}" — ไปตั้งค่าที่แท็บ "เอกสาร" ก่อนครับ`,"warning");return}const s=await jt(r).catch(()=>null);if(!s){b("ไม่พบเทมเพลตที่ตั้งค่าไว้ อาจถูกลบไปแล้ว","error");return}const l=((g=e.students)==null?void 0:g.main_room)||((x=e.students)==null?void 0:x.religion_room)||"";Lt({layout:s.layout,variables:{student_name:(($=e.students)==null?void 0:$.full_name)??"",student_code:((i=e.students)==null?void 0:i.student_code)??"",room:l,class_level:e.class_level??"",category:e.category??"",subject_name:e.subject_name??"",subject_code:e.subject_code??"",semester:e.semester??"",grade_failed_at:e.grade_failed_at??"",teacher_name:a??((d=e.teachers)==null?void 0:d.full_name)??e.teacher_name_raw??"",response_method:e.method??"",due_date:O(e.due_text),file_url:e.file_url??""},docTitle:`ใบแก้ค้างเก่า ${((m=e.students)==null?void 0:m.full_name)??""}`})}const se={ว:"SC",อ:"ENG",จ:"ENG",ค:"MATH",ท:"THAI",ส:"SOC",ง:"OCC",ศ:"ART",พ:"HEALTH"};function n(e){return String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a])}function V(e){const a={ยังไม่แจ้ง:{bg:"#f3f4f6",text:"#6b7280",border:"#e5e7eb",label:"ยังไม่แจ้ง"},จำนงแล้ว:{bg:"var(--gold-soft)",text:"var(--gold-ink)",border:"var(--gold-soft-line)",label:"จำนงแล้ว · รอครูตอบรับ"},กำลังดำเนินการปรับแก้:{bg:"var(--info-soft)",text:"var(--info)",border:"var(--info-soft-line)",label:"กำลังดำเนินการปรับแก้"},ปรับแก้สำเร็จ:{bg:"var(--ok-soft)",text:"var(--ok)",border:"var(--ok-soft-line)",label:"ปรับแก้สำเร็จ ✓"}};return a[e]||a.ยังไม่แจ้ง}const F=e=>{const a=V(e);return`background:${a.bg};color:${a.text};border:1px solid ${a.border};`},Ce=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];function ye(e){if(!e)return null;const a=new Date(e);if(isNaN(a.getTime()))return null;const t=String(a.getHours()).padStart(2,"0"),r=String(a.getMinutes()).padStart(2,"0");return`${a.getDate()} ${Ce[a.getMonth()]} ${a.getFullYear()+543} เวลา ${t}:${r} น.`}function qe(e){const a=String(e||"").trim();if(!a)return{date:"",time:""};const t=a.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);if(t)return{date:`${t[1]}-${t[2]}-${t[3]}`,time:t[4]?`${t[4]}:${t[5]}`:""};const r=a.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})(?:\s+(\d{1,2}):(\d{2}))?/);if(!r)return{date:"",time:""};let s=Number(r[3]);s<100&&(s+=2500),s>2400&&(s-=543);const l=String(Number(r[2])).padStart(2,"0"),o=String(Number(r[1])).padStart(2,"0");return{date:`${s}-${l}-${o}`,time:r[4]?`${String(Number(r[4])).padStart(2,"0")}:${r[5]}`:""}}function O(e){const a=qe(e);if(!a.date)return String(e||"-");const[t,r,s]=a.date.split("-").map(Number),l=`${s} ${Ce[r-1]} ${t+543}`;return a.time?`${l} เวลา ${a.time} น.`:l}function Ie(e,a){const t=qe(e.due_text);u.form={id:Number(e.id),method:a,dueDate:t.date,dueTime:t.time,fileUrl:a==="ให้งานแก้"&&e.file_url||"",file:null,fileSource:e.file_url?"current":"none",editing:e.status==="กำลังดำเนินการปรับแก้"}}function Ct(e){return u.subjects.filter(a=>Number(a.id)!==Number(e.id)&&Number(a.teacher_id)===Number(e.teacher_id)&&a.subject_code===e.subject_code&&a.semester===e.semester&&a.category===e.category&&/^https:\/\//i.test(a.file_url||"")).sort((a,t)=>new Date(t.assigned_at||t.updated_at||0)-new Date(a.assigned_at||a.updated_at||0))[0]||null}async function qt(e){if(Ie(e,"ให้งานแก้"),e.file_url){k();return}const a=Ct(e);if(a){const t=await Dt(e,a);t==="reuse"?(u.form.fileUrl=a.file_url,u.form.fileSource="reuse"):(u.form.fileUrl="",u.form.fileSource=t==="upload"?"upload":"none")}k()}function Be(e,a,t,r,s,l){const o=ye(e),p=ye(a);return!o&&!p?"":`<div class="rg-card p-4 mb-4" style="border-left:4px solid var(${r})">
    <p class="text-xs font-bold" style="color:var(${r})">🗓 ${n(t)}</p>
    <p class="text-sm font-bold text-[var(--ink)] mt-1">${o?`เริ่ม ${o}`:""}${o&&p?" — ":""}${p?`ถึง ${p}`:""}</p>
    <button data-deadline-cta="${n(l)}" class="mt-3 w-full py-2 rounded-xl text-white font-bold text-xs" style="background:linear-gradient(135deg,var(${r}),var(${r}-dark))">${n(s)} →</button>
  </div>`}const oe=e=>e==="ศาสนา"?"background:var(--secondary-soft);color:var(--secondary-dark);border:1px solid var(--secondary-soft-line);":"background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line);",It=["เด็กชาย","เด็กหญิง","ด.ช.","ด.ญ.","นางสาว","น.ส.","นาย","นาง"];function Bt(e){let a=String(e);for(const t of It)if(a.startsWith(t)){a=a.slice(t.length).trim();break}return a.charAt(0)||"?"}function Mt(e,a){let t=0;for(let o=0;o<String(e).length;o++)t+=e.charCodeAt(o);const r=[["#eef2ff","#4f46e5"],["#ecfdf5","#059669"],["#fef3c7","#b45309"],["#fce7f3","#be185d"],["#e0f2fe","#0284c7"],["#f3e8ff","#7c3aed"]],[s,l]=r[t%r.length];return a?`width:34px;height:44px;border-radius:8px;background:${s};color:${l};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);`:`width:30px;height:30px;border-radius:9999px;background:${s};color:${l};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0;`}function C(e,a){const t=(e==null?void 0:e.full_name)||"-",r=(e==null?void 0:e.photo_url)||(e==null?void 0:e.image_url);if(!r)return`<div style="${Mt(t,a)}">${Bt(t)}</div>`;const s=a?"width:34px;height:44px;border-radius:8px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);object-fit:cover;":"width:30px;height:30px;border-radius:9999px;flex-shrink:0;object-fit:cover;";return`<img src="${n(r)}" alt="${n(t)}" style="${s}">`}function E({title:e="ยืนยันการดำเนินการ",message:a="",confirmText:t="ยืนยัน",cancelText:r="ยกเลิก"}={}){return new Promise(s=>{var p;(p=document.getElementById("regrade-confirm-modal"))==null||p.remove();const l=document.createElement("div");l.id="regrade-confirm-modal",l.className="fixed inset-0 z-[99999] flex items-center justify-center p-4",l.innerHTML=`
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
      </div>`,document.body.appendChild(l);const o=g=>{l.remove(),s(g)};l.querySelector("#rgc-overlay").addEventListener("click",()=>o(!1)),l.querySelector("#rgc-cancel").addEventListener("click",()=>o(!1)),l.querySelector("#rgc-confirm").addEventListener("click",()=>o(!0))})}function Dt(e,a){return new Promise(t=>{var g;(g=document.getElementById("regrade-reuse-file-modal"))==null||g.remove();const r=document.createElement("div");r.id="regrade-reuse-file-modal",r.className="fixed inset-0 z-[99999] flex items-center justify-center p-4";const s=a.assigned_at||a.updated_at,l=s?new Date(s).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"-",o=/^https:\/\//i.test(a.file_url||"")?a.file_url:"";r.innerHTML=`
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" data-reuse-choice="upload"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background:linear-gradient(135deg,var(--gold),var(--gold-dark))"></div>
        <div class="px-6 pt-6 pb-4 text-center">
          <div class="mx-auto mb-3 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style="background:var(--gold-soft)">📎</div>
          <h3 class="text-lg font-bold text-gray-900">พบไฟล์เดิมของรายวิชานี้</h3>
          <p class="text-sm text-gray-600 leading-relaxed mt-2">${n(e.subject_name)} (${n(e.subject_code)})<br>ภาคเรียน ${n(e.semester||"-")} · ${n(e.category||"-")}</p>
          <div class="mt-3 p-3 rounded-xl text-left" style="background:var(--surface-2);border:1px solid var(--line)">
            <p class="text-xs font-bold text-[var(--ink)]">ไฟล์งานแก้ที่เคยอัปโหลด</p>
            <p class="text-[10px] text-[var(--muted-2)] mt-1">ใช้ล่าสุด ${n(l)}</p>
            ${o?`<a href="${n(o)}" target="_blank" rel="noopener" class="inline-flex mt-2 text-xs font-bold" style="color:var(--info)">เปิดดูไฟล์เดิม ↗</a>`:""}
          </div>
        </div>
        <div class="px-6 pb-6 grid gap-2">
          <button data-reuse-choice="reuse" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">ใช้ไฟล์เดิม</button>
          <button data-reuse-choice="upload" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 active:scale-[0.97] transition-all">อัปโหลดไฟล์ใหม่</button>
          <button data-reuse-choice="none" class="py-2 text-xs font-semibold text-gray-500">ไม่แนบไฟล์</button>
        </div>
      </div>`,document.body.appendChild(r);const p=x=>{r.remove(),t(x)};r.querySelectorAll("[data-reuse-choice]").forEach(x=>x.addEventListener("click",()=>p(x.dataset.reuseChoice)))})}function M(e,a="primary"){return e?`flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});`:"flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:var(--muted);background:var(--surface-2);"}function W(e,a){return`<div class="flex items-center gap-2 flex-shrink-0">
    <span data-badge class="px-2 py-1 rounded-full text-[11px] font-bold" style="background:${a?"var(--ok-soft)":"var(--surface-2)"};color:${a?"var(--ok)":"var(--muted)"}">${a?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่"}</span>
    <button type="button" id="${e}" data-on="${a?"1":"0"}" class="px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0"
      style="${a?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;"}">${a?"ปิดใช้งาน":"เปิดใช้งาน"}</button>
  </div>`}function Nt(e,a){a.forEach(t=>{const r=e.querySelector("#"+t);r&&r.addEventListener("click",()=>{const s=r.dataset.on!=="1";r.dataset.on=s?"1":"0",r.style.cssText=s?"background:var(--bad-soft);color:var(--bad);":"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;",r.textContent=s?"ปิดใช้งาน":"เปิดใช้งาน";const l=r.parentElement.querySelector("[data-badge]");l&&(l.textContent=s?"เปิดใช้งานอยู่":"ปิดใช้งานอยู่",l.style.background=s?"var(--ok-soft)":"var(--surface-2)",l.style.color=s?"var(--ok)":"var(--muted)")})})}const G=(e,a)=>{var t;return((t=e.querySelector("#"+a))==null?void 0:t.dataset.on)==="1"};function L(e,a="primary"){return e?`padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:800;color:#fff;background:linear-gradient(135deg,${a==="secondary"?"var(--secondary),var(--secondary-dark)":"var(--primary),var(--primary-dark)"});box-shadow:0 2px 8px rgba(0,0,0,.15);white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;`:"padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:700;color:var(--muted);background:transparent;white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;"}const Z="inline-flex gap-1 p-1 rounded-full bg-[var(--surface-2)] flex-wrap";function Me(e,a,t){const r=document.getElementById("regrade-bottom-tabs");r.innerHTML=`<div class="flex">${e.map(s=>`
    <button data-nav="${s.key}" class="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5" style="transition:transform .15s ease;${a===s.key?"transform:scale(1.12)":""}">
      <span class="text-lg">${s.icon}</span>
      <span class="text-[10px] font-bold" style="color:${a===s.key?"var(--primary)":"var(--muted-2)"}">${n(s.label)}</span>
    </button>`).join("")}</div>`,r.querySelectorAll("[data-nav]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.nav)))}const f={role:null,isAdmin:!1,isRegistrar:!1,isExecutive:!1,studentRow:null,teacherRow:null,cfg:{}};function U(e,a){document.getElementById("regrade-title-mobile").textContent=e,document.getElementById("regrade-view-title").textContent=a}function ie(e,a,t){const r=document.getElementById("regrade-sidebar-nav");r.innerHTML=e.map(s=>`
    <button data-sec="${s.key}" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-left"
      style="${a===s.key?"background:var(--primary);color:#fff;":"color:var(--primary-45);"}">
      <span>${s.icon}</span> ${n(s.label)}
    </button>`).join(""),r.querySelectorAll("[data-sec]").forEach(s=>s.addEventListener("click",()=>t(s.dataset.sec)))}const S={subView:"catalog",categoryTab:"สามัญ",subjects:[]};async function De(){S.subjects=await ot(f.studentRow.id)}function Ne(){return!!f.cfg.intent_open}function Pt(e){var s,l;const a=f.cfg.intent_open_levels;if(!a||!a.length)return!0;const t=e==="ศาสนา"?(s=f.studentRow)==null?void 0:s.religion_room:(l=f.studentRow)==null?void 0:l.main_room,r=t?t.split("/")[0].trim():null;return r?a.includes(`${e}|${r}`):!1}async function D(){var i;U("แก้ค้างเก่า","รายวิชาค้างของฉัน"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");if(!S.subjects.length&&S.subjects!==null)try{await De()}catch(d){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${n(d.message)}</div>`;return}const a=S.subjects,t=a.filter(d=>d.category==="สามัญ").length,r=a.filter(d=>d.category==="ศาสนา").length,s=a.filter(d=>d.status==="กำลังดำเนินการปรับแก้"),l=a.length,o=a.filter(d=>d.status==="จำนงแล้ว").length,p=s.length,g=a.filter(d=>d.status==="ปรับแก้สำเร็จ").length;let x="";if(S.subView==="catalog"){const d=a.filter(m=>m.category===S.categoryTab);x=`
      <div class="flex gap-2 mb-4">
        <button data-tab="สามัญ" style="${M(S.categoryTab==="สามัญ")}">รายวิชาสามัญ (${t})</button>
        <button data-tab="ศาสนา" style="${M(S.categoryTab==="ศาสนา","secondary")}">รายวิชาศาสนา (${r})</button>
      </div>
      <div class="flex flex-col gap-3">
        ${d.length?d.map(m=>he(m)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในหมวดนี้ 🎉</div>'}
      </div>`}else S.subView==="overview"?x=`
      ${f.cfg.show_deadline_banner?Be(f.cfg.intent_window_start,f.cfg.intent_window_end,"กำหนดแจ้งความจำนงขอแก้/ปรับ","--primary","ไปแจ้งความจำนง","catalog"):""}
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        ${ke(a.filter(d=>d.category==="สามัญ"),"📘 สามัญ","var(--primary-dark)")}
        ${ke(a.filter(d=>d.category==="ศาสนา"),"🕌 ศาสนา","var(--secondary-dark)")}
      </div>
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-2">สรุปของฉัน</p>
        <div class="grid grid-cols-2 gap-3">
          ${K(l,"วิชาค้างทั้งหมด","var(--ink)")}
          ${K(o,"จำนงแล้ว","var(--gold-ink)")}
          ${K(p,"กำลังดำเนินการ","var(--info)")}
          ${K(g,"สำเร็จแล้ว","var(--ok)")}
        </div>
      </div>`:S.subView==="myWork"&&(x=`<div class="flex flex-col gap-3">
      ${s.length?s.map(d=>he(d)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่ต้องทำตอนนี้ 🎉</div>'}
    </div>`);e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">
      ${x}
    </div>
    ${Ne()?`
    <button id="regrade-student-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--gold),var(--gold-ink))">📝 จำนงขอแก้/ปรับ</button>`:""}`,e.querySelectorAll("[data-tab]").forEach(d=>d.addEventListener("click",()=>{S.categoryTab=d.dataset.tab,D()})),e.querySelectorAll("[data-declare]").forEach(d=>d.addEventListener("click",()=>Ot(d))),e.querySelectorAll("[data-print-slip]").forEach(d=>d.addEventListener("click",()=>{const m=a.find(y=>y.id===Number(d.dataset.printSlip));m&&le(m)})),e.querySelectorAll("[data-deadline-cta]").forEach(d=>d.addEventListener("click",()=>{S.subView=d.dataset.deadlineCta,D()})),(i=document.getElementById("regrade-student-fab"))==null||i.addEventListener("click",()=>{S.subView="catalog",D()}),ie([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],S.subView,d=>{S.subView=d,D()}),Me([{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"myWork",icon:"📝",label:"ภาระงานของฉัน"}],S.subView,d=>{S.subView=d,D()})}function K(e,a,t){return`<div class="bg-[var(--surface-2)] rounded-xl p-3 text-center">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${n(a)}</p>
  </div>`}function he(e){var r;const a=((r=e.teachers)==null?void 0:r.full_name)||"-",t=Ne()&&Pt(e.category);return`
  <div class="rg-card p-4 shadow-sm">
    <div class="flex justify-between gap-2 items-start">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${n(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${n(e.subject_code)} · ${n(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold" style="${F(e.status)}">${V(e.status).label}</span>
    </div>
    <div class="flex items-center gap-2 mt-2 pt-2 border-t border-dashed border-[var(--line-soft)]">
      ${C(e.teachers,!0)}
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
        <p class="text-xs mt-1" style="color:var(--info)">กำหนด: ${n(O(e.due_text))}</p>
      </div>
      <button data-print-slip="${e.id}" class="mt-2 w-full py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>`:""}
  </div>`}async function Ot(e){const a=Number(e.dataset.declare);if(await E({title:"ยืนยันแจ้งความจำนง",message:`ยืนยันแจ้งความจำนงขอปรับแก้วิชา "${e.dataset.subject}" ใช่หรือไม่? เมื่อกดยืนยัน ครูผู้สอนจะได้รับแจ้งเตือนทันที`,confirmText:"ยืนยันแจ้งความจำนง"}))try{await it(a),b("แจ้งความจำนงเรียบร้อย ครูผู้สอนจะได้รับแจ้งเตือนทันที ✅","success"),await De(),D()}catch(r){b("บันทึกไม่สำเร็จ: "+r.message,"error")}}const u={subView:"overview",subjects:[],form:null,editingResponseId:null,catalogExpanded:new Set,catalogSemesterFilter:{},assignedExpanded:new Set,assignedSemesterFilter:{},deptHeadExpanded:new Set,unassigned:[],deptHeadTeacherOptions:null,deptHeadDept:void 0,deptHeadShowAll:!1,deptHeadSelectMode:new Set,deptHeadSelected:{}};function $e(){var t;const e=f.teacherRow,a=(t=e==null?void 0:e.positions)!=null&&t.length?e.positions:e!=null&&e.position?[e.position]:[];return["dept_head","religion_group_head","religion_subgroup_head"].some(r=>a.includes(r))}async function Vt(){u.subjects=await ct(f.teacherRow.id)}async function zt(){const[e,a]=await Promise.all([ut(f.teacherRow.category),u.deptHeadTeacherOptions?Promise.resolve(u.deptHeadTeacherOptions):je(),u.deptHeadDept!==void 0?Promise.resolve(u.deptHeadDept):pt(f.teacherRow.position_dept_id).then(t=>{u.deptHeadDept=t})]);u.unassigned=e,u.deptHeadTeacherOptions=a.filter(t=>t.category===f.teacherRow.category)}function Ft(e){var t;const a=(t=u.deptHeadDept)==null?void 0:t.dept_code;return!a||u.deptHeadShowAll?e:e.filter(r=>se[r.subject_code.charAt(0)]===a)}async function k(){var g,x,$;U("แก้ค้างเก่า","งานแก้ค้างเก่า"),document.getElementById("regrade-sidebar-nav").innerHTML="";const e=document.getElementById("regrade-content");try{await Vt(),u.subView==="depthead"&&$e()&&await zt()}catch(i){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${n(i.message)}</div>`;return}const a=u.subjects,t=a.filter(i=>i.status==="จำนงแล้ว"),r=a.filter(i=>i.status==="กำลังดำเนินการปรับแก้"),s=a.filter(i=>i.status==="ปรับแก้สำเร็จ").length;let l="";if(u.subView==="catalog"){const i=P(a);l=`<div class="flex flex-col gap-3">${i.length?i.map(d=>we(d,{scope:"catalog",expandedSet:u.catalogExpanded,semesterFilterMap:u.catalogSemesterFilter,renderRow:Pe})).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในความรับผิดชอบตอนนี้ 🎉</div>'}</div>`}else if(u.subView==="overview"){const i=a.length-t.length-r.length-s,d=a.length?Math.round(s/a.length*100):0;l=`
      ${f.cfg.show_deadline_banner?Be(f.cfg.response_window_start,f.cfg.response_window_end,"กำหนดตอบรับคำร้องของนักเรียน","--secondary","ไปตอบรับ","respond"):""}
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สรุปของฉัน</p>
        ${a.length?ce([{value:i,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:t.length,color:"var(--gold-ink)",label:"รอตอบรับ"},{value:r.length,color:"var(--info)",label:"กำลังดำเนินการ"},{value:s,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${d}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีรายวิชาค้างในความรับผิดชอบ</p>'}
        <div class="grid grid-cols-2 gap-3 mt-4">
          ${Y(a.length,"วิชาค้างทั้งหมด","var(--ink)","catalog")}
          ${Y(t.length,"รอตอบรับ","var(--gold-ink)","respond")}
          ${Y(r.length,"กำลังดำเนินการ","var(--info)","assigned")}
          ${Y(s,"สำเร็จแล้ว","var(--ok)","catalog")}
        </div>
      </div>`}else if(u.subView==="assigned"){const i=P(r);l=`<div class="flex flex-col gap-3">${i.length?i.map(d=>we(d,{scope:"assigned",expandedSet:u.assignedExpanded,semesterFilterMap:u.assignedSemesterFilter,renderRow:Ut})).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่มอบหมายอยู่</div>'}</div>`}else if(u.subView==="respond")l=`
      <div class="flex items-center gap-2 mb-3">
        <button id="regrade-teacher-back" class="w-8 h-8 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-sm">←</button>
        <p class="text-sm font-bold text-[var(--ink)]">ตอบรับคำร้อง</p>
      </div>
      <div class="flex flex-col gap-3">${t.length?t.map(i=>Xt(i)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ตอบรับครบหมดแล้ว 🎉</div>'}</div>`;else if(u.subView==="depthead"){const i=P(u.unassigned),d=(g=u.deptHeadDept)==null?void 0:g.dept_code,m=d&&Object.values(se).includes(d),y=Ft(i);l=`
      <div class="rg-card p-3 mb-4 text-xs text-[var(--muted-2)]">🗂️ วิชาในหมวด${n(f.teacherRow.category)}ที่ยังไม่มีครูผู้สอน — มอบหมายครูที่สอนอยู่จริงตอนนี้ให้แต่ละวิชาได้เลย</div>
      ${m?`
      <div class="flex gap-2 mb-4">
        <button data-depthead-scope="own" style="${M(!u.deptHeadShowAll)}">📘 เฉพาะกลุ่มสาระของฉัน (${n(u.deptHeadDept.dept_name)}) · ${i.filter(w=>se[w.subject_code.charAt(0)]===d).length}</button>
        <button data-depthead-scope="all" style="${M(u.deptHeadShowAll,"secondary")}">ดูทั้งหมด · ${i.length}</button>
      </div>
      <p class="text-[10px] text-[var(--muted-2)] mb-3">การกรองนี้ช่วยดูง่ายขึ้นเท่านั้น ยังมอบหมายวิชานอกกลุ่มสาระของตัวเองได้ถ้าจำเป็น — ระบบจะรู้ตำแหน่งวิชาแค่แบบคร่าวๆ จากรหัสวิชา อาจไม่ครบ 100%</p>`:""}
      <div class="flex flex-col gap-3">${y.length?y.map(w=>Gt(w,u.deptHeadExpanded)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีวิชาที่ขาดครูผู้สอนแล้ว 🎉</div>'}</div>
      <datalist id="regrade-depthead-teacher-list">${u.deptHeadTeacherOptions.map(w=>`<option value="${n(w.full_name)}${w.teacher_code?` (${n(w.teacher_code)})`:""} · รหัส ${w.id}"></option>`).join("")}</datalist>`}e.innerHTML=`
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">${l}</div>
    ${t.length?`
    <button id="regrade-teacher-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">
      ✅ ตอบรับ
      <span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">${t.length}</span>
    </button>`:""}`,(x=document.getElementById("regrade-teacher-fab"))==null||x.addEventListener("click",()=>{u.subView="respond",k()}),($=document.getElementById("regrade-teacher-back"))==null||$.addEventListener("click",()=>{u.subView="overview",k()}),e.querySelectorAll("[data-deadline-cta]").forEach(i=>i.addEventListener("click",()=>{u.subView=i.dataset.deadlineCta,k()})),e.querySelectorAll("[data-edit-response]").forEach(i=>i.addEventListener("click",()=>{u.form=null,u.editingResponseId=Number(i.dataset.editResponse),k()})),e.querySelectorAll("[data-close-edit-response]").forEach(i=>i.addEventListener("click",()=>{u.form=null,u.editingResponseId=null,k()})),e.querySelectorAll("[data-open-exam]").forEach(i=>i.addEventListener("click",()=>{const d=a.find(m=>m.id===Number(i.dataset.openExam));d&&Ie(d,"นัดสอบปรับ"),k()})),e.querySelectorAll("[data-open-work]").forEach(i=>i.addEventListener("click",()=>{const d=a.find(m=>m.id===Number(i.dataset.openWork));d&&qt(d)})),e.querySelectorAll("[data-cancel-form]").forEach(i=>i.addEventListener("click",()=>{u.form=null,k()})),e.querySelectorAll("[data-due-date]").forEach(i=>i.addEventListener("input",()=>{u.form.dueDate=i.value})),e.querySelectorAll("[data-due-time]").forEach(i=>i.addEventListener("input",()=>{u.form.dueTime=i.value})),e.querySelectorAll("[data-work-file]").forEach(i=>i.addEventListener("change",()=>{var y;const d=((y=i.files)==null?void 0:y[0])||null;if(d&&d.size>5*1024*1024){i.value="",b("ไฟล์ต้องมีขนาดไม่เกิน 5 MB","warning");return}u.form.file=d,u.form.fileUrl="",u.form.fileSource=d?"upload":"none";const m=e.querySelector("[data-work-file-name]");m&&(m.textContent=d?d.name:"ยังไม่ได้เลือกไฟล์")})),e.querySelectorAll("[data-remove-work-file]").forEach(i=>i.addEventListener("click",()=>{u.form.file=null,u.form.fileUrl="",u.form.fileSource="none",k()})),e.querySelectorAll("[data-confirm-assign]").forEach(i=>i.addEventListener("click",()=>Qt(i))),e.querySelectorAll("[data-cancel-response]").forEach(i=>i.addEventListener("click",()=>ea(i))),e.querySelectorAll("[data-print-slip]").forEach(i=>i.addEventListener("click",()=>{var m;const d=a.find(y=>y.id===Number(i.dataset.printSlip));d&&le(d,(m=f.teacherRow)==null?void 0:m.full_name)})),e.querySelectorAll("[data-toggle-group]").forEach(i=>i.addEventListener("click",()=>{const[d,m]=i.dataset.toggleGroup.split("|"),y=d==="catalog"?u.catalogExpanded:d==="assigned"?u.assignedExpanded:u.deptHeadExpanded;y.has(m)?y.delete(m):y.add(m),k()})),e.querySelectorAll("[data-depthead-assign]").forEach(i=>i.addEventListener("click",()=>Yt(i))),e.querySelectorAll("[data-depthead-scope]").forEach(i=>i.addEventListener("click",()=>{u.deptHeadShowAll=i.dataset.deptheadScope==="all",k()})),e.querySelectorAll("[data-depthead-toggle-select]").forEach(i=>i.addEventListener("click",()=>{const d=i.dataset.deptheadToggleSelect;u.deptHeadSelectMode.has(d)?u.deptHeadSelectMode.delete(d):u.deptHeadSelectMode.add(d),u.deptHeadSelected[d]=new Set,k()})),e.querySelectorAll("[data-depthead-student-select]").forEach(i=>i.addEventListener("change",()=>{const d=i.dataset.deptheadCode,m=Number(i.dataset.deptheadStudentSelect);u.deptHeadSelected[d]||(u.deptHeadSelected[d]=new Set);const y=u.deptHeadSelected[d];i.checked?y.add(m):y.delete(m),Kt(d)})),e.querySelectorAll("[data-depthead-select-all]").forEach(i=>i.addEventListener("change",()=>{const d=i.dataset.deptheadSelectAll,m=P(u.unassigned).find(y=>y.subject_code===d);u.deptHeadSelected[d]=new Set(i.checked?(m==null?void 0:m.items.map(y=>y.id))??[]:[]),k()})),e.querySelectorAll("[data-depthead-assign-selected]").forEach(i=>i.addEventListener("click",()=>Jt(i))),e.querySelectorAll("[data-group-sem]").forEach(i=>i.addEventListener("change",d=>{const[m,y]=i.dataset.groupSem.split("|"),w=m==="catalog"?u.catalogSemesterFilter:u.assignedSemesterFilter;w[y]=d.target.value,k()})),e.querySelectorAll("[data-goto-sub]").forEach(i=>i.addEventListener("click",()=>{u.subView=i.dataset.gotoSub,k()}));const o=[{key:"catalog",icon:"📚",label:"รายวิชาที่ค้าง"},{key:"overview",icon:"🏠",label:"ภาพรวม"},{key:"assigned",icon:"📝",label:"มอบหมายงาน"}];$e()&&o.push({key:"depthead",icon:"🗂️",label:"จัดการรายวิชา"});const p=u.subView==="respond"?"overview":u.subView;ie(o,p,i=>{u.subView=i,k()}),Me(o,p,i=>{u.subView=i,k()})}function P(e){const a=new Map;return e.forEach(t=>{a.has(t.subject_code)||a.set(t.subject_code,{subject_code:t.subject_code,subject_name:t.subject_name,category:t.category,items:[]}),a.get(t.subject_code).items.push(t)}),[...a.values()].sort((t,r)=>r.items.length-t.items.length)}function we(e,{scope:a,expandedSet:t,semesterFilterMap:r,renderRow:s}){const l=e.subject_code,o=t.has(l),p=[...new Set(e.items.map($=>$.semester).filter(Boolean))].sort().reverse(),g=r[l]||"all",x=g==="all"?e.items:e.items.filter($=>$.semester===g);return`
  <div class="rg-card p-4">
    <button data-toggle-group="${a}|${n(l)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${n(e.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${n(l)}</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${oe(e.category)}">${n(e.category)}</span>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">นักเรียนติด ${e.items.length} คน</span>
        <span class="text-[var(--muted-2)] text-sm inline-block transition-transform" style="transform:rotate(${o?"180deg":"0deg"})">▾</span>
      </div>
    </button>
    ${o?`
    <div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      ${p.length>1?`
      <select data-group-sem="${a}|${n(l)}" class="w-full mb-3 px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
        <option value="all">ทุกภาคเรียน (${e.items.length})</option>
        ${p.map($=>`<option value="${n($)}" ${g===$?"selected":""}>${n($)} (${e.items.filter(i=>i.semester===$).length})</option>`).join("")}
      </select>`:""}
      <div class="flex flex-col gap-2">${x.map($=>s($)).join("")}</div>
    </div>`:""}
  </div>`}function Pe(e){var t,r,s,l;const a=((t=e.students)==null?void 0:t.full_name)||"-";return`
  <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)]">
    ${C(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${n(a)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${n(((r=e.students)==null?void 0:r.student_code)||"")} · ${n(((s=e.students)==null?void 0:s.main_room)||((l=e.students)==null?void 0:l.religion_room)||"")} · ${n(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${F(e.status)}">${V(e.status).label}</span>
  </div>`}function Ut(e){var p,g,x,$;const a=((p=e.students)==null?void 0:p.full_name)||"-",t=u.form,r=Number(u.editingResponseId)===Number(e.id),s=t&&Number(t.id)===Number(e.id)&&t.method==="นัดสอบปรับ",l=t&&Number(t.id)===Number(e.id)&&t.method==="ให้งานแก้",o=/^https:\/\//i.test(e.file_url||"")?e.file_url:"";return`
  <div class="p-2.5 rounded-xl bg-[var(--surface-2)]">
    <div class="flex items-center gap-2.5">
      ${C(e.students,!1)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${n(a)}</p>
        <p class="text-[10px] text-[var(--muted-2)] truncate">${n(((g=e.students)==null?void 0:g.student_code)||"")} · ${n(((x=e.students)==null?void 0:x.main_room)||(($=e.students)==null?void 0:$.religion_room)||"")} · ${n(e.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${F(e.status)}">ตอบรับแล้ว</span>
    </div>
    <div class="mt-2 rounded-lg p-2" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
      <p class="text-[11px] font-bold" style="color:var(--info)">${n(e.method||"")}</p>
      <p class="text-[11px] mt-0.5" style="color:var(--info)">กำหนด: ${n(O(e.due_text))}</p>
    </div>
    <div class="grid ${o?"grid-cols-2":"grid-cols-1"} gap-2 mt-2">
      ${o?`<a href="${n(o)}" target="_blank" rel="noopener" class="py-2 rounded-xl border border-[var(--info-soft-line)] text-[var(--info)] text-xs font-bold text-center">📎 เปิดไฟล์งาน ↗</a>`:""}
      <button data-print-slip="${e.id}" class="py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
    </div>
    ${r?!s&&!l?`
      <p class="text-[10px] font-bold text-[var(--muted-2)] mt-3">เลือกวิธีที่ต้องการแก้ไข</p>
      <div class="flex gap-2 mt-1.5">
        <button data-open-exam="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
        <button data-open-work="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
      </div>
      <button data-close-edit-response class="mt-2 w-full py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิดการแก้ไข</button>
    `:"":`
      <button data-edit-response="${e.id}" class="mt-2 w-full py-2 rounded-xl text-xs font-bold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">✏️ แก้ไข</button>
    `}
    ${s?Q(e,t,!0):""}
    ${l?Q(e,t,!1):""}
  </div>`}function Wt(e,a,t){var s,l,o,p;const r=((s=e.students)==null?void 0:s.full_name)||"-";return`
  <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)] cursor-pointer">
    <input type="checkbox" data-depthead-student-select="${e.id}" data-depthead-code="${n(a)}" ${t?"checked":""} class="flex-shrink-0 rounded border-gray-300 text-[var(--primary)]">
    ${C(e.students,!1)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${n(r)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${n(((l=e.students)==null?void 0:l.student_code)||"")} · ${n(((o=e.students)==null?void 0:o.main_room)||((p=e.students)==null?void 0:p.religion_room)||"")} · ${n(e.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${F(e.status)}">${V(e.status).label}</span>
  </label>`}function Gt(e,a,t){const r=e.subject_code,s=a.has(r),l=u.deptHeadSelectMode.has(r),o=u.deptHeadSelected[r]||new Set;return`
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
        <button type="button" data-depthead-toggle-select="${n(r)}" class="flex-shrink-0 text-[10px] font-bold" style="color:var(--primary)">${l?"✕ ยกเลิกเลือกเฉพาะคน":"☑️ เลือกเฉพาะบางคน"}</button>
      </div>
      <div class="flex gap-2 mb-3">
        <input data-depthead-input="${n(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
        <button data-depthead-assign="${n(r)}" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">มอบหมายทั้งหมด</button>
      </div>
      ${l?`
      <label class="flex items-center gap-2 mb-2 px-1 text-[11px] text-[var(--muted-2)] select-none">
        <input type="checkbox" data-depthead-select-all="${n(r)}" data-total="${e.items.length}" class="rounded border-gray-300 text-[var(--primary)]">
        เลือกทั้งหมดในวิชานี้
      </label>`:""}
      <div class="flex flex-col gap-2">${e.items.map(p=>l?Wt(p,r,o.has(p.id)):Pe(p)).join("")}</div>
      ${l?`
      <div data-depthead-selected-bar="${n(r)}" class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex gap-2 ${o.size===0?"opacity-40":""}">
        <input data-depthead-selected-input="${n(r)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครูสำหรับคนที่เลือก...">
        <button data-depthead-assign-selected="${n(r)}" ${o.size===0?"disabled":""} class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">มอบหมายที่เลือก (<span data-depthead-selected-count="${n(r)}">${o.size}</span>)</button>
      </div>`:""}
    </div>`:""}
  </div>`}function Kt(e){const a=u.deptHeadSelected[e]||new Set,t=document.querySelector(`[data-depthead-selected-bar="${CSS.escape(e)}"]`),r=document.querySelector(`[data-depthead-selected-count="${CSS.escape(e)}"]`),s=document.querySelector(`[data-depthead-assign-selected="${CSS.escape(e)}"]`),l=document.querySelector(`[data-depthead-select-all="${CSS.escape(e)}"]`);if(r&&(r.textContent=String(a.size)),s&&(s.disabled=a.size===0),t&&t.classList.toggle("opacity-40",a.size===0),l){const o=Number(l.dataset.total||0);l.checked=o>0&&a.size===o,l.indeterminate=a.size>0&&a.size<o}}async function Yt(e){const a=e.dataset.deptheadAssign,t=document.querySelector(`[data-depthead-input="${CSS.escape(a)}"]`),r=z(t.value,u.deptHeadTeacherOptions);if(!r){b("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=P(u.unassigned).find(o=>o.subject_code===a);if(await E({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(s==null?void 0:s.subject_name)||a}" ให้นักเรียนที่ยังไม่มีครูทั้ง ${(s==null?void 0:s.items.length)??""} รายการใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const o=await ft(a,f.teacherRow.category,r.id);b(`มอบหมายครูผู้สอนให้ ${o} รายการเรียบร้อย ✅`,"success"),k()}catch(o){b("มอบหมายไม่สำเร็จ: "+o.message,"error")}}async function Jt(e){const a=e.dataset.deptheadAssignSelected,t=document.querySelector(`[data-depthead-selected-input="${CSS.escape(a)}"]`),r=z(t.value,u.deptHeadTeacherOptions);if(!r){b("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=[...u.deptHeadSelected[a]||[]];if(!s.length){b("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","warning");return}const l=P(u.unassigned).find(p=>p.subject_code===a);if(await E({title:"ยืนยันมอบหมายครูผู้สอน",message:`มอบหมาย "${r.full_name}" เป็นครูผู้สอนวิชา "${(l==null?void 0:l.subject_name)||a}" ให้นักเรียนที่เลือกไว้ ${s.length} คนใช่หรือไม่?`,confirmText:"ยืนยันมอบหมาย"}))try{const p=await vt(s,r.id);b(`มอบหมายครูผู้สอนให้ ${p} คนที่เลือกเรียบร้อย ✅`,"success"),u.deptHeadSelectMode.delete(a),delete u.deptHeadSelected[a],k()}catch(p){b("มอบหมายไม่สำเร็จ: "+p.message,"error")}}function ce(e,a,t){const r=e.reduce((o,p)=>o+p.value,0)||1;let s=0;return`
  <div class="flex items-center gap-4">
    <div style="width:96px;height:96px;border-radius:9999px;background:conic-gradient(${e.map(o=>{const p=s/r*360;s+=o.value;const g=s/r*360;return`${o.color} ${p}deg ${g}deg`}).join(", ")});flex-shrink:0;display:flex;align-items:center;justify-content:center;">
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
  </div>`}function ke(e,a,t){const r=e.filter(x=>x.status==="ยังไม่แจ้ง").length,s=e.filter(x=>x.status==="จำนงแล้ว").length,l=e.filter(x=>x.status==="กำลังดำเนินการปรับแก้").length,o=e.filter(x=>x.status==="ปรับแก้สำเร็จ").length,p=e.length,g=p?Math.round(o/p*100):0;return`
  <div class="rg-card p-4 flex-1 min-w-0">
    <p class="text-xs font-bold mb-3" style="color:${t}">${n(a)} (${p})</p>
    ${p?ce([{value:r,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:s,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:l,color:"var(--info)",label:"กำลังดำเนินการ"},{value:o,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${g}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีวิชาค้างในหมวดนี้ 🎉</p>'}
  </div>`}function Y(e,a,t,r){return`<button data-goto-sub="${n(r)}" class="bg-[var(--surface-2)] rounded-xl p-3 text-center hover:opacity-80 active:scale-[0.98] transition cursor-pointer">
    <p class="text-xl font-extrabold" style="color:${t}">${e}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${n(a)}</p>
  </button>`}function Xt(e){var l,o,p;const a=((l=e.students)==null?void 0:l.full_name)||"-",t=u.form,r=t&&t.id===e.id&&t.method==="นัดสอบปรับ",s=t&&t.id===e.id&&t.method==="ให้งานแก้";return`
  <div class="rg-card p-4">
    <div class="flex gap-2">
      ${C(e.students,!0)}
      <div class="min-w-0">
        <p class="font-bold text-xs text-[var(--ink)]">${n(a)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">(${n(((o=e.students)==null?void 0:o.student_code)||"")} · ${n(((p=e.students)==null?void 0:p.main_room)||"")})</p>
        <p class="text-xs text-[var(--muted)] mt-0.5">${n(e.subject_name)} (${n(e.subject_code)})</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${oe(e.category)}">${n(e.category)}</span>
      </div>
    </div>
    ${Zt(e)}
    ${r?Q(e,t,!0):""}
    ${s?Q(e,t,!1):""}
  </div>`}function Zt(e){const a=u.form;if(a&&a.id===e.id)return"";const t=e.status==="กำลังดำเนินการปรับแก้";return`
    ${t?'<p class="text-[10px] font-bold text-[var(--muted-2)] mt-3">แก้ไขหรือเปลี่ยนคำตอบ (ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ)</p>':""}
    <div class="flex gap-2 mt-${t?"1.5":"3"}">
      <button data-open-exam="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
      <button data-open-work="${e.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
    </div>
    ${t?`<button data-cancel-response="${e.id}" class="mt-2 w-full py-2 rounded-xl text-xs font-bold" style="background:var(--bad-soft);color:var(--bad);border:1px solid var(--bad-soft-line)">✕ ยกเลิกคำตอบนี้</button>`:""}`}function Q(e,a,t){var l;const r=!t&&!!a.fileUrl,s=r&&/^https:\/\//i.test(a.fileUrl)?a.fileUrl:"";return`
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
      <p data-work-file-name class="mt-1 text-[10px] text-[var(--muted-2)] truncate">${n(((l=a.file)==null?void 0:l.name)||(r?"หากไม่เลือกไฟล์ใหม่ ระบบจะใช้ไฟล์ที่แสดงอยู่":"ยังไม่ได้เลือกไฟล์"))}</p>`}
      <div class="flex gap-2 mt-2">
        <button data-confirm-assign="${e.id}" class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">${a.editing?"บันทึกการแก้ไข":t?"ยืนยันนัดสอบ":"ยืนยันมอบหมายงาน"}</button>
        <button data-cancel-form class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface)] text-[var(--muted)]">ปิด</button>
      </div>
    </div>`}async function Qt(e){var p,g;const a=Number(e.dataset.confirmAssign),t=u.form;if(!(t!=null&&t.dueDate)){b("กรุณาเลือกวันที่จากปฏิทินก่อนยืนยัน","warning");return}if(t.method==="นัดสอบปรับ"&&!t.dueTime){b("กรุณาเลือกเวลานัดสอบก่อนยืนยัน","warning");return}const r=t.method==="นัดสอบปรับ"?`${t.dueDate}T${t.dueTime}`:t.dueDate,s=u.subjects.find(x=>x.id===a),l=t.method==="นัดสอบปรับ"?`นัดสอบปรับวิชา "${s.subject_name}" ให้ ${((p=s.students)==null?void 0:p.full_name)||""} วันที่ ${O(r)} ใช่หรือไม่?`:`มอบหมายงานแก้วิชา "${s.subject_name}" ให้ ${((g=s.students)==null?void 0:g.full_name)||""} กำหนดส่ง ${O(r)} ใช่หรือไม่?`;if(await E({title:t.editing?"ยืนยันแก้ไขคำตอบ":t.method==="นัดสอบปรับ"?"ยืนยันนัดสอบปรับ":"ยืนยันมอบหมายงานแก้",message:l,confirmText:t.editing?"บันทึกการแก้ไข":"ยืนยัน"}))try{e.disabled=!0;let x=t.fileUrl||null;if(t.method==="ให้งานแก้"&&t.file){const $=d=>String(d||"unknown").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"unknown";x=(await Rt(t.file,`regrade/teacher-${f.teacherRow.id}/${$(s.subject_code)}/${$(s.semester)}`)).url}await mt(a,{method:t.method,dueText:r,fileUrl:x}),b(t.editing?"แก้ไขคำตอบแล้ว ใบสั้นจะใช้ข้อมูลล่าสุดอัตโนมัติ ✅":"บันทึกการมอบหมายเรียบร้อย ✅","success"),u.form=null,u.editingResponseId=null,k()}catch(x){e.disabled=!1,b("บันทึกไม่สำเร็จ: "+x.message,"error")}}async function ea(e){var s;const a=Number(e.dataset.cancelResponse),t=u.subjects.find(l=>l.id===a);if(await E({title:"ยืนยันยกเลิกคำตอบ",message:`ยกเลิกคำตอบของ ${((s=t==null?void 0:t.students)==null?void 0:s.full_name)||""} วิชา "${(t==null?void 0:t.subject_name)||""}" ใช่หรือไม่? รายการจะกลับไปรอครูตอบรับใหม่`,confirmText:"ยกเลิกคำตอบ"}))try{await gt(a),u.form=null,u.editingResponseId=null,b("ยกเลิกคำตอบแล้ว รายการกลับไปรอตอบรับใหม่เรียบร้อย","success"),k()}catch(l){b("ยกเลิกคำตอบไม่สำเร็จ: "+l.message,"error")}}const R={view:"close",query:"",gradeCategory:"สามัญ"};async function ne(){U("ฝ่ายทะเบียน","แก้ค้างเก่า — ฝ่ายทะเบียน");const e=document.getElementById("regrade-content");e.innerHTML=`<div class="max-w-3xl mx-auto p-4">
    <div class="${Z} mb-4">
      <button data-rview="close" style="${L(R.view==="close")}">📋 รอปิดงาน</button>
      <button data-rview="grade" style="${L(R.view==="grade")}">🎓 เกรดที่ต้องอัปเดต</button>
    </div>
    <div id="regrade-registrar-body"></div>
  </div>`,e.querySelectorAll("[data-rview]").forEach(t=>t.addEventListener("click",()=>{R.view=t.dataset.rview,ne()}));const a=document.getElementById("regrade-registrar-body");if(R.view==="close"){a.innerHTML=`<input id="regrade-registrar-search" class="w-full max-w-sm px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-4" placeholder="ค้นหาชื่อหรือเลขประจำตัวนักเรียน...">
      <div id="regrade-close-list" class="flex flex-col gap-3"></div>`;const t=document.getElementById("regrade-registrar-search");t.value=R.query,t.addEventListener("input",()=>{R.query=t.value,de()}),await de()}else a.innerHTML=`<div class="flex gap-2 mb-4">
        <button data-gcat="สามัญ" style="${M(R.gradeCategory==="สามัญ")}">สามัญ</button>
        <button data-gcat="ศาสนา" style="${M(R.gradeCategory==="ศาสนา","secondary")}">ศาสนา</button>
      </div>
      <div class="overflow-x-auto"><table class="w-full text-xs" id="regrade-grade-table"></table></div>`,a.querySelectorAll("[data-gcat]").forEach(t=>t.addEventListener("click",()=>{R.gradeCategory=t.dataset.gcat,ne()})),await Oe()}async function de(){const e=document.getElementById("regrade-close-list");let a;try{a=await bt(R.query)}catch(t){e.innerHTML=`<div class="text-center text-red-500 text-sm py-8">โหลดไม่สำเร็จ: ${n(t.message)}</div>`;return}e.innerHTML=a.length?a.map(t=>{var s,l,o;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`
    <div class="rg-card p-4 flex justify-between items-center gap-3 flex-wrap">
      <div class="flex gap-2.5 items-center min-w-0">
        ${C(t.students,!0)}
        <div class="min-w-0">
          <p class="font-bold text-sm text-[var(--ink)]">${n(r)} <span class="text-[var(--muted-2)] font-normal">(${n(((l=t.students)==null?void 0:l.student_code)||"")} · ${n(((o=t.students)==null?void 0:o.main_room)||"")})</span></p>
          <p class="text-xs text-[var(--muted)] mt-0.5">${n(t.subject_name)} (${n(t.subject_code)}) · ${n(t.method||"")} — กำหนด ${n(O(t.due_text))}</p>
          <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${oe(t.category)}">${n(t.category)}</span>
        </div>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button data-print-slip="${t.id}" class="px-3 py-2 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🖨️ ใบสั้น</button>
        <button data-closeout="${t.id}" data-name="${n(r)}" data-subject="${n(t.subject_name)}"
          class="px-4 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">✓ ปิดงาน (ปรับแก้สำเร็จ)</button>
      </div>
    </div>`}).join(""):'<div class="text-center text-[var(--muted-2)] text-sm py-12">📭 ไม่พบรายการที่รอปิดงาน</div>',e.querySelectorAll("[data-print-slip]").forEach(t=>t.addEventListener("click",()=>{const r=a.find(s=>s.id===Number(t.dataset.printSlip));r&&le(r)})),e.querySelectorAll("[data-closeout]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.closeout);if(await E({title:"ยืนยันปิดงาน",message:`ยืนยันบันทึกว่า ${t.dataset.name} ปรับแก้วิชา "${t.dataset.subject}" สำเร็จแล้วใช่หรือไม่? สถานะจะเปลี่ยนเป็น "ปรับแก้สำเร็จ" ทันที`,confirmText:"ยืนยันปิดงาน"}))try{await xt(r),b("ปิดงานเรียบร้อย ✅","success"),await de()}catch(l){b("ไม่สำเร็จ: "+l.message,"error")}}))}async function Oe(){const e=document.getElementById("regrade-grade-table");let a;try{a=await yt(R.gradeCategory)}catch(t){e.innerHTML=`<tr><td class="text-red-500 text-sm py-8 text-center">โหลดไม่สำเร็จ: ${n(t.message)}</td></tr>`;return}e.innerHTML=`
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">รายวิชา</th><th class="py-2 px-2">ครูผู้สอน</th><th class="py-2 px-2">สถานะเกรด</th><th class="py-2 px-2 text-right">จัดการ</th>
    </tr></thead>
    <tbody>${a.length?a.map(t=>{var s,l,o;const r=((s=t.students)==null?void 0:s.full_name)||"-";return`<tr class="border-b border-[var(--line-soft)]">
        <td class="py-2 px-2"><div class="flex items-center gap-2">${C(t.students,!0)}<div><p class="font-bold text-[var(--ink)]">${n(r)}</p><p class="text-[10px] text-[var(--muted-2)]">(${n(((l=t.students)==null?void 0:l.student_code)||"")})</p></div></div></td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${n(t.subject_name)} (${n(t.subject_code)})</td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${n(((o=t.teachers)==null?void 0:o.full_name)||"-")}</td>
        <td class="py-2 px-2">${t.grade_entered?'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok);border:1px solid var(--ok-soft-line)">อัปเดตแล้ว ✓</span>':'<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">รอกรอกเกรด</span>'}</td>
        <td class="py-2 px-2 text-right">${t.grade_entered?"":`<button data-mark-entered="${t.id}" data-name="${n(r)}" data-subject="${n(t.subject_name)}" class="px-3 py-1.5 rounded-lg text-white text-[11px] font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">กรอกข้อมูลแล้ว</button>`}</td>
      </tr>`}).join(""):'<tr><td colspan="5" class="text-center text-[var(--muted-2)] text-sm py-10">ไม่มีรายการในหมวดนี้</td></tr>'}</tbody>`,e.querySelectorAll("[data-mark-entered]").forEach(t=>t.addEventListener("click",async()=>{const r=Number(t.dataset.markEntered);if(await E({title:"ยืนยันกรอกข้อมูลเกรดแล้ว",message:`ยืนยันว่าได้นำเกรดของ ${t.dataset.name} วิชา "${t.dataset.subject}" ไปกรอกในระบบเกรด (แยกต่างหาก) เรียบร้อยแล้วใช่หรือไม่?`,confirmText:"ยืนยัน"}))try{await ht(r),b("บันทึกแล้ว ✅","success"),await Oe()}catch(l){b("ไม่สำเร็จ: "+l.message,"error")}}))}const c={categoryTab:"all",drilldown:null,view:"overview",overviewTab:"summary",teacherSort:{key:"pending",dir:"desc"},classLevels:null,attnLevelKey:"",attnRoom:"",attnRooms:[],browseCategory:"สามัญ",browseLevel:"",browseRoomsCache:[],classroomSortDesc:!0,expandedRooms:new Set,roomStudents:{},expandedStudents:new Set,studentSubjects:{}},j=e=>e.reduce((a,t)=>a+Number(t.cnt),0);function ta(e,a){const t=a.dir==="asc"?1:-1;return[...e].sort((r,s)=>{const l=r[a.key],o=s[a.key];return typeof l=="string"?l.localeCompare(o,"th")*t:(l-o)*t})}function aa(e,a){return e.key===a?e.dir==="asc"?" ▲":" ▼":""}async function Ve(){return c.classLevels||(c.classLevels=await Le()),c.classLevels}async function ue(){U("ผู้บริหาร","ภาพรวมทั้งโรงเรียน — บอร์ดผู้บริหาร");const e=document.getElementById("regrade-content");e.innerHTML=`
    <div class="w-full p-4 md:p-6">
      <div class="${Z} mb-4">
        <button data-dview="overview" style="${L(c.view==="overview")}">📊 ภาพรวม</button>
        <button data-dview="students" style="${L(c.view==="students")}">🎓 รายชื่อนักเรียน</button>
      </div>
      <div id="regrade-dashboard-body"></div>
    </div>`,e.querySelectorAll("[data-dview]").forEach(t=>t.addEventListener("click",()=>{c.view=t.dataset.dview,ue()}));const a=document.getElementById("regrade-dashboard-body");c.view==="students"?await ze(a):await X(a)}async function X(e){let a;try{a=await $t()}catch(v){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${n(v.message)}</div>`;return}const t=c.categoryTab==="all"?a:a.filter(v=>v.category===c.categoryTab),r=j(t),s=j(t.filter(v=>v.status==="ยังไม่แจ้ง")),l=j(t.filter(v=>v.status==="จำนงแล้ว")),o=j(t.filter(v=>v.status==="กำลังดำเนินการปรับแก้")),p=j(t.filter(v=>v.status==="ปรับแก้สำเร็จ")),g=l+o,x={};t.forEach(v=>{var h;(x[h=v.teacher_name]??(x[h]={dept:v.teacher_dept||"-",list:[]})).list.push(v)});const $=ta(Object.entries(x).map(([v,h])=>({name:v,dept:h.dept,total:j(h.list),pending:j(h.list.filter(_=>_.status==="จำนงแล้ว")),assigned:j(h.list.filter(_=>_.status==="กำลังดำเนินการปรับแก้")),done:j(h.list.filter(_=>_.status==="ปรับแก้สำเร็จ"))})),c.teacherSort),i=j(a.filter(v=>v.category==="สามัญ")),d=j(a.filter(v=>v.category==="ศาสนา")),m=`
    <div class="${Z}">
      <button data-otab="summary" style="${L(c.overviewTab==="summary")}">📊 สรุปตัวเลข</button>
      <button data-otab="teachers" style="${L(c.overviewTab==="teachers")}">👩‍🏫 รายครูผู้สอน</button>
      <button data-otab="attention" style="${L(c.overviewTab==="attention")}">🎯 นักเรียนที่ต้องติดตาม</button>
    </div>`,y=`
    <div class="${Z}">
      <button data-dcat="all" style="${L(c.categoryTab==="all")}">📊 ทั้งหมด (${a.length})</button>
      <button data-dcat="สามัญ" style="${L(c.categoryTab==="สามัญ")}">📘 สามัญ (${i})</button>
      <button data-dcat="ศาสนา" style="${L(c.categoryTab==="ศาสนา","secondary")}">🕌 ศาสนา (${d})</button>
    </div>`,w=`
    <div class="flex items-center justify-between gap-3 mb-4 flex-wrap">
      ${m}
      ${c.overviewTab!=="attention"?y:""}
    </div>`;let T="";if(c.overviewTab==="teachers"){const v=(h,_,A="")=>`<th class="py-2 px-2 cursor-pointer select-none hover:text-[var(--ink-2)] ${A}" data-sort-key="${_}">${n(h)}${aa(c.teacherSort,_)}</th>`;T=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">ความคืบหน้าแยกรายครูผู้สอน</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">คลิกหัวคอลัมน์เพื่อเรียงจากมาก↔น้อย หรือ ก↔ฮ</p>
        <div class="overflow-x-auto"><table class="w-full text-xs">
          <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
            ${v("ครูผู้สอน","name")}${v("กลุ่มสาระ","dept")}${v("ทั้งหมด","total","text-center")}${v("รอตอบรับ","pending","text-center")}${v("มอบหมายแล้ว","assigned","text-center")}${v("สำเร็จ","done","text-center")}
          </tr></thead>
          <tbody>${$.map(h=>`<tr class="border-b border-[var(--line-soft)]">
            <td class="py-2 px-2 font-bold text-[var(--ink-2)]">${n(h.name)}</td>
            <td class="py-2 px-2 text-[var(--muted)]">${n(h.dept)}</td>
            <td class="py-2 px-2 text-center text-[var(--muted)]">${h.total}</td>
            <td class="py-2 px-2 text-center">${h.pending>0?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">${h.pending}</span>`:h.pending}</td>
            <td class="py-2 px-2 text-center" style="color:var(--info)">${h.assigned}</td>
            <td class="py-2 px-2 text-center" style="color:var(--ok)">${h.done}</td>
          </tr>`).join("")}</tbody>
        </table></div>
      </div>`}else if(c.overviewTab==="attention"){let v;try{v=await Ve()}catch{v=[]}T=`
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">นักเรียนที่จำเป็นต้องติดตาม</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">เรียงจากคนที่มีรายวิชาค้างมากที่สุดก่อน (สูงสุด 20 คน)</p>
        <div class="flex gap-2 mb-3 flex-wrap">
          <select id="regrade-attn-level" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">${'<option value="">ทุกระดับชั้น</option>'+["สามัญ","ศาสนา"].map(_=>{const A=v.filter(q=>q.category===_);return A.length?`<optgroup label="${_}">${A.map(q=>`<option value="${_}|${n(q.class_level)}" ${c.attnLevelKey===`${_}|${q.class_level}`?"selected":""}>${n(q.class_level)}</option>`).join("")}</optgroup>`:""}).join("")}</select>
          <select id="regrade-attn-room" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" ${c.attnLevelKey?"":"disabled"}>
            <option value="">ทุกห้อง</option>
            ${c.attnRooms.map(_=>`<option value="${n(_)}" ${c.attnRoom===_?"selected":""}>${n(_)}</option>`).join("")}
          </select>
        </div>
        <div id="regrade-attn-list" class="overflow-x-auto"></div>
      </div>`}else{const v=r?Math.round(p/r*100):0;T=`
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สัดส่วนสถานะ</p>
        ${r?ce([{value:s,color:"#9ca3af",label:"ยังไม่แจ้ง"},{value:l,color:"var(--gold-ink)",label:"จำนงแล้ว"},{value:o,color:"var(--info)",label:"กำลังดำเนินการ"},{value:p,color:"var(--ok)",label:"สำเร็จแล้ว"}],`${v}%`,"สำเร็จแล้ว"):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีข้อมูล</p>'}
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <button data-drill="all" class="rg-card p-4 text-center">${J(r,"รายวิชาค้างทั้งหมด","var(--ink)")}</button>
        <button data-drill="requested" class="rg-card p-4 text-center">${J(g,"จำนงแล้ว","var(--gold-ink)")}</button>
        <button data-drill="assigned" class="rg-card p-4 text-center">${J(o,"กำลังดำเนินการปรับแก้","var(--info)")}</button>
        <button data-drill="done" class="rg-card p-4 text-center">${J(p,"ปรับแก้สำเร็จ","var(--ok)")}</button>
      </div>
      <div id="regrade-drilldown"></div>`}e.innerHTML=w+T,e.querySelectorAll("[data-otab]").forEach(v=>v.addEventListener("click",()=>{c.overviewTab=v.dataset.otab,X(e)})),e.querySelectorAll("[data-sort-key]").forEach(v=>v.addEventListener("click",()=>{const h=v.dataset.sortKey;c.teacherSort.key===h?c.teacherSort.dir=c.teacherSort.dir==="asc"?"desc":"asc":(c.teacherSort.key=h,c.teacherSort.dir=h==="name"||h==="dept"?"asc":"desc"),X(e)})),e.querySelectorAll("[data-dcat]").forEach(v=>v.addEventListener("click",()=>{c.categoryTab=v.dataset.dcat,c.drilldown=null,ue()})),c.overviewTab==="summary"&&(e.querySelectorAll("[data-drill]").forEach(v=>v.addEventListener("click",()=>{c.drilldown=v.dataset.drill,Ee(t)})),c.drilldown&&Ee(t)),c.overviewTab==="attention"&&(document.getElementById("regrade-attn-level").addEventListener("change",async v=>{if(c.attnLevelKey=v.target.value,c.attnRoom="",c.attnRooms=[],c.attnLevelKey){const[h,_]=c.attnLevelKey.split("|");try{c.attnRooms=(await Re(h,_)).map(A=>A.room)}catch{c.attnRooms=[]}}X(e)}),document.getElementById("regrade-attn-room").addEventListener("change",v=>{c.attnRoom=v.target.value,_e()}),_e())}async function _e(){const e=document.getElementById("regrade-attn-list");if(!e)return;e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';const[a,t]=c.attnLevelKey?c.attnLevelKey.split("|"):[null,null];let r;try{r=await _t({category:a,classLevel:t,room:c.attnRoom||null,limit:20})}catch(s){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${n(s.message)}</p>`;return}if(!r.length){e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-8 text-center">ไม่มีนักเรียนที่ต้องติดตามในเงื่อนไขนี้ 🎉</p>';return}e.innerHTML=`<table class="w-full text-xs">
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">ห้อง</th>
      <th class="py-2 px-2 text-center">ค้าง</th><th class="py-2 px-2 text-center">จำนงแล้ว</th><th class="py-2 px-2 text-center">สำเร็จ</th>
    </tr></thead>
    <tbody>${r.map(s=>`<tr class="border-b border-[var(--line-soft)]">
      <td class="py-2 px-2"><div class="flex items-center gap-2">${C(s,!1)}<div><p class="font-bold text-[var(--ink)]">${n(s.full_name)}</p><p class="text-[10px] text-[var(--muted-2)]">${n(s.student_code||"")}</p></div></div></td>
      <td class="py-2 px-2 text-[var(--muted)]">${n((s.category==="ศาสนา"?s.religion_room:s.main_room)||"-")}</td>
      <td class="py-2 px-2 text-center font-bold" style="color:var(--bad)">${s.not_yet}</td>
      <td class="py-2 px-2 text-center" style="color:var(--gold-ink)">${s.requested}</td>
      <td class="py-2 px-2 text-center" style="color:var(--ok)">${s.done}</td>
    </tr>`).join("")}</tbody>
  </table>`}function J(e,a,t){return`<p class="text-2xl font-extrabold" style="color:${t}">${e}</p><p class="text-[10px] text-[var(--muted-2)] mt-1">${n(a)}</p>`}async function ze(e){let a;try{a=await Ve()}catch{a=[]}const t=a.filter(r=>r.category===c.browseCategory);e.innerHTML=`
    <div class="flex gap-2 mb-4">
      <button data-bcat="สามัญ" style="${M(c.browseCategory==="สามัญ")}">📘 สามัญ</button>
      <button data-bcat="ศาสนา" style="${M(c.browseCategory==="ศาสนา","secondary")}">🕌 ศาสนา</button>
    </div>
    <select id="regrade-browse-level" class="w-full max-w-xs px-3 py-2 rounded-lg border border-[var(--line)] text-sm bg-[var(--surface)] mb-4">
      <option value="">— เลือกระดับชั้น —</option>
      ${t.map(r=>`<option value="${n(r.class_level)}" ${c.browseLevel===r.class_level?"selected":""}>${n(r.class_level)}</option>`).join("")}
    </select>
    <div id="regrade-browse-rooms" class="flex flex-col gap-3"></div>`,e.querySelectorAll("[data-bcat]").forEach(r=>r.addEventListener("click",()=>{c.browseCategory=r.dataset.bcat,c.browseLevel="",c.browseRoomsCache=[],c.expandedRooms.clear(),c.roomStudents={},c.expandedStudents.clear(),c.studentSubjects={},ze(e)})),document.getElementById("regrade-browse-level").addEventListener("change",r=>{c.browseLevel=r.target.value,c.expandedRooms.clear(),c.roomStudents={},c.expandedStudents.clear(),c.studentSubjects={},Se()}),Se()}async function Se(){const e=document.getElementById("regrade-browse-rooms");if(e){if(!c.browseLevel){c.browseRoomsCache=[],e.innerHTML='<div class="text-center py-12 text-[var(--muted-2)] text-sm">เลือกระดับชั้นเพื่อดูรายชื่อห้องเรียน</div>';return}e.innerHTML='<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>';try{c.browseRoomsCache=await Re(c.browseCategory,c.browseLevel)}catch(a){e.innerHTML=`<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${n(a.message)}</p>`;return}I()}}function I(){const e=document.getElementById("regrade-browse-rooms");e&&(e.innerHTML=c.browseRoomsCache.length?c.browseRoomsCache.map(a=>ra(a)).join(""):'<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่พบห้องเรียนที่มีวิชาค้างในระดับชั้นนี้ 🎉</div>',na(e))}function Fe(e){const a=c.classroomSortDesc?-1:1;return[...e].sort((t,r)=>(t.not_yet-r.not_yet)*a)}function ra(e){const a=c.expandedRooms.has(e.room),t=c.roomStudents[e.room],r=t?Fe(t):null;return`
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
      <button data-toggle-sort class="self-start px-2.5 py-1 rounded-full text-[10px] font-bold mb-1" style="background:var(--surface-2);color:var(--muted)">↕️ เรียง${c.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</button>
      ${r?r.length?r.map(s=>sa(s)).join(""):'<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีข้อมูลนักเรียน</p>':'<p class="text-center text-xs text-[var(--muted-2)] py-4">กำลังโหลด...</p>'}
    </div>`:""}
  </div>`}function sa(e){const a=c.expandedStudents.has(e.student_id),t=c.studentSubjects[e.student_id];return`
  <div class="rounded-xl bg-[var(--surface-2)] overflow-hidden">
    <button data-toggle-student="${e.student_id}" class="w-full flex items-center gap-2.5 p-2.5 text-left">
      ${C(e,!1)}
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
        <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${F(r.status)}">${V(r.status).label}</span>
      </div>`).join(""):'<p class="text-center text-[11px] text-[var(--muted-2)] py-2">ไม่มีรายวิชา</p>':'<p class="text-center text-[11px] text-[var(--muted-2)] py-2">กำลังโหลด...</p>'}
      <button data-print-student="${e.student_id}" class="mt-1 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายบุคคล</button>
    </div>`:""}
  </div>`}function na(e){e.querySelectorAll("[data-toggle-room]").forEach(a=>a.addEventListener("click",async()=>{const t=a.dataset.toggleRoom;if(c.expandedRooms.has(t))c.expandedRooms.delete(t),I();else if(c.expandedRooms.add(t),I(),!c.roomStudents[t]){try{c.roomStudents[t]=await Ae(c.browseCategory,t)}catch{c.roomStudents[t]=[]}I()}})),e.querySelectorAll("[data-toggle-student]").forEach(a=>a.addEventListener("click",async()=>{const t=Number(a.dataset.toggleStudent);if(c.expandedStudents.has(t))c.expandedStudents.delete(t),I();else if(c.expandedStudents.add(t),I(),!c.studentSubjects[t]){try{c.studentSubjects[t]=await He(t)}catch{c.studentSubjects[t]=[]}I()}})),e.querySelectorAll("[data-toggle-sort]").forEach(a=>a.addEventListener("click",()=>{c.classroomSortDesc=!c.classroomSortDesc,I()})),e.querySelectorAll("[data-print-room]").forEach(a=>a.addEventListener("click",()=>la(a.dataset.printRoom))),e.querySelectorAll("[data-print-student]").forEach(a=>a.addEventListener("click",()=>oa(Number(a.dataset.printStudent))))}const da=`
  body{font-family:'Sarabun',sans-serif;padding:24px;color:#1f2937;}
  h1{font-size:18px;margin-bottom:4px;}
  p.sub{color:#666;font-size:12px;margin-bottom:16px;}
  table{width:100%;border-collapse:collapse;font-size:13px;}
  th,td{border:1px solid #ccc;padding:6px 8px;text-align:left;}
  th{background:#f3f4f6;}
  @media print { body{padding:0;} }`;function Ue(e,a){const t=`<!doctype html><html><head><meta charset="utf-8"><title>${n(e)}</title><style>${da}</style></head><body>${a}</body></html>`;At(t,{autoprint:!0})}async function la(e){let a=c.roomStudents[e];if(!a)try{a=await Ae(c.browseCategory,e)}catch(r){b("โหลดข้อมูลไม่สำเร็จ: "+r.message,"error");return}a=Fe(a);const t=a.map((r,s)=>`<tr>
    <td>${s+1}</td><td style="text-align:center">${n(r.student_code||"")}</td><td>${n(r.full_name)}</td>
    <td style="text-align:center">${r.not_yet}</td><td style="text-align:center">${r.requested}</td><td style="text-align:center">${r.done}</td>
  </tr>`).join("");Ue(`รายชื่อห้อง ${e}`,`
    <h1>รายชื่อนักเรียนที่มีวิชาค้าง — ห้อง ${n(e)}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} คน · เรียงตาม${c.classroomSortDesc?"ค้างมาก→น้อย":"ค้างน้อย→มาก"}</p>
    <table><thead><tr><th>#</th><th style="text-align:center">เลขประจำตัว</th><th>ชื่อ-สกุล</th><th>ค้าง</th><th>จำนงแล้ว</th><th>สำเร็จ</th></tr></thead>
    <tbody>${t}</tbody></table>`)}async function oa(e){var l;let a=c.studentSubjects[e],t=null;for(const o in c.roomStudents){const p=(l=c.roomStudents[o])==null?void 0:l.find(g=>g.student_id===e);if(p){t=p;break}}if(!a)try{a=await He(e)}catch(o){b("โหลดข้อมูลไม่สำเร็จ: "+o.message,"error");return}const r=a.map((o,p)=>`<tr>
    <td>${p+1}</td><td>${n(o.subject_name)}</td><td>${n(o.subject_code)}</td>
    <td>${n(o.category)}</td><td>${n(o.semester)}</td><td>${n(o.teacher_name)}</td><td>${n(V(o.status).label)}</td>
  </tr>`).join(""),s=(t==null?void 0:t.full_name)||"-";Ue(`รายวิชาค้าง ${s}`,`
    <h1>รายวิชาที่ค้างของ ${n(s)}${t!=null&&t.student_code?` (${n(t.student_code)})`:""}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString("th-TH")} · ทั้งหมด ${a.length} วิชา</p>
    <table><thead><tr><th>#</th><th>รายวิชา</th><th>รหัสวิชา</th><th>หมวด</th><th>ภาคเรียน</th><th>ครูผู้สอน</th><th>สถานะ</th></tr></thead>
    <tbody>${r}</tbody></table>`)}function Ee(e){const a=document.getElementById("regrade-drilldown");if(!c.drilldown){a.innerHTML="";return}const t={all:"รายวิชาค้างทั้งหมด",requested:"จำนงแล้ว",assigned:"กำลังดำเนินการปรับแก้",done:"ปรับแก้สำเร็จ"};let r=[];c.drilldown==="all"?r=e:c.drilldown==="requested"?r=e.filter(l=>l.status==="จำนงแล้ว"||l.status==="กำลังดำเนินการปรับแก้"):c.drilldown==="assigned"?r=e.filter(l=>l.status==="กำลังดำเนินการปรับแก้"):c.drilldown==="done"&&(r=e.filter(l=>l.status==="ปรับแก้สำเร็จ"));const s=r.reduce((l,o)=>(l[o.class_level||"-"]=(l[o.class_level||"-"]||0)+Number(o.cnt),l),{});a.innerHTML=`<div class="rg-card p-4 mb-4">
    <div class="flex justify-between items-center mb-3">
      <p class="text-xs font-bold text-[var(--ink-2)]">รายละเอียด: ${n(t[c.drilldown])}</p>
      <button id="regrade-drill-close" class="w-6 h-6 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-xs">✕</button>
    </div>
    <p class="text-xs text-[var(--muted-2)]">${j(r)} รายการ</p>
    <p class="text-[11px] text-[var(--muted)] mt-2">แยกตามชั้น: ${Object.entries(s).map(([l,o])=>`${n(l)} (${o})`).join(", ")||"-"}</p>
  </div>`,document.getElementById("regrade-drill-close").addEventListener("click",()=>{c.drilldown=null,a.innerHTML=""})}const B={activeTab:"general"};function N(e,a,t){return`<button type="button" data-settings-tab="${e}" class="flex-shrink-0" style="${L(t)}">${n(a)}</button>`}function ia(e,a,t){return`<button type="button" data-level-chip="${n(e)}" data-on="${t?"1":"0"}" class="px-2.5 py-1 rounded-full text-[11px] font-bold" style="${t?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"}">${n(a)}</button>`}function Te(e,a){B.activeTab=a,e.querySelectorAll("[data-settings-group]").forEach(t=>t.classList.toggle("hidden",t.dataset.settingsGroup!==a)),e.querySelectorAll("[data-settings-tab]").forEach(t=>{t.style.cssText=L(t.dataset.settingsTab===a)+"flex-shrink:0;"})}async function H(){var $,i;U("ตั้งค่าระบบ",`⚙️ ตั้งค่า${f.cfg.system_name||"แก้ค้างเก่า"}`);const e=document.getElementById("regrade-content");let a,t,r,s,l,o;try{[a,t,r,s,l,o]=await Promise.all([Qe(),et(),tt(),je(),Le(),St()])}catch(d){e.innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${n(d.message)}</div>`;return}const p=new Map(s.map(d=>[d.profile_id,d])),g=f.cfg,x=new Set(g.intent_open_levels||[]);e.innerHTML=`
    <div class="max-w-2xl mx-auto p-4 flex flex-col gap-4">

      <div class="flex gap-1 p-1 rounded-full bg-[var(--surface-2)] overflow-x-auto">
        ${N("general","⚙️ ทั่วไป",B.activeTab==="general")}
        ${N("intent","📝 การแจ้งจำนง",B.activeTab==="intent")}
        ${N("theme","🎨 ดีไซน์",B.activeTab==="theme")}
        ${N("data","📥 ข้อมูล",B.activeTab==="data")}
        ${N("document","📄 เอกสาร",B.activeTab==="document")}
        ${N("access","🔐 สิทธิ์การเข้าถึง",B.activeTab==="access")}
      </div>

      <button id="regrade-set-save" class="w-full py-3 rounded-2xl text-white font-bold text-sm" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">บันทึกการตั้งค่า</button>

      <div data-settings-group="general" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ชื่อระบบ</p>
          <input id="regrade-set-name" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm" value="${n(g.system_name||"แก้ค้างเก่า")}">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ข้อความประกาศ</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎓 สำหรับนักเรียน</label>
          <textarea id="regrade-set-ann-student" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">${n(g.student_announcement||"")}</textarea>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">👨‍🏫 สำหรับครูผู้สอน</label>
          <textarea id="regrade-set-ann-teacher" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">${n(g.teacher_announcement||"")}</textarea>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">การมองเห็นเมนู</p>
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้านักเรียน</span>
            ${W("regrade-set-vis-student",($=g.visibility)==null?void 0:$.student_menu)}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้าครู</span>
            ${W("regrade-set-vis-teacher",(i=g.visibility)==null?void 0:i.teacher_menu)}
          </div>
        </div>
      </div>

      <div data-settings-group="intent" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <div class="flex items-center justify-between mb-1">
            <p class="text-sm font-bold text-[var(--ink)]">การแจ้งความจำนงของนักเรียน</p>
            ${W("regrade-set-intent",g.intent_open)}
          </div>
          <p class="text-xs text-[var(--muted-2)] mb-3">ควบคุมปุ่มลอย "จำนงขอแก้/ปรับ" และปุ่มแจ้งความจำนงในการ์ดแต่ละวิชาที่นักเรียนเห็น</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เปิดรับตั้งแต่</label>
          <input id="regrade-set-intent-start" type="datetime-local" value="${n(g.intent_window_start||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ถึงวันที่</label>
          <input id="regrade-set-intent-end" type="datetime-local" value="${n(g.intent_window_end||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ระดับชั้นที่เปิดให้แจ้งความจำนง</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">เลือกเฉพาะระดับชั้นที่ต้องการเปิดรับ — ถ้าไม่เลือกเลยสักระดับ = เปิดทุกระดับชั้น (ค่าเริ่มต้น)</p>
          ${["สามัญ","ศาสนา"].map(d=>{const m=l.filter(y=>y.category===d);return m.length?`<p class="text-[11px] font-bold text-[var(--ink-2)] mb-1.5 mt-2">${d==="สามัญ"?"📘":"🕌"} ${n(d)}</p>
            <div class="flex flex-wrap gap-1.5 mb-2">${m.map(y=>ia(`${y.category}|${y.class_level}`,y.class_level,x.has(`${y.category}|${y.class_level}`))).join("")}</div>`:""}).join("")}
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">กำหนดเวลาตอบรับของครูผู้สอน</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ช่วงเวลาที่ครูควรตอบรับ (นัดสอบปรับ/ให้งานแก้) หลังนักเรียนแจ้งความจำนง</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เริ่มตอบรับได้ตั้งแต่</label>
          <input id="regrade-set-response-start" type="datetime-local" value="${n(g.response_window_start||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ตอบรับให้เสร็จภายใน</label>
          <input id="regrade-set-response-end" type="datetime-local" value="${n(g.response_window_end||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ปุ่ม "ส่งสรุปเกรดเข้าระบบ" ในหน้าบันทึกคะแนนของครู</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ครูจะเห็นปุ่มนี้ในหน้าบันทึกคะแนนของแต่ละห้อง (pp5 ปกติ) ก็ต่อเมื่อถึงวันที่กำหนดไว้นี้แล้วเท่านั้น — กดแล้วระบบจะสรุปว่านักเรียนคนไหนติด 0/ถูกบังคับเกรด แล้วส่งเข้าระบบแก้ค้างเก่าอัตโนมัติ (ไม่ทับรายการที่มีอยู่แล้ว กดซ้ำได้ปลอดภัย)</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">แสดงปุ่มตั้งแต่วันที่</label>
          <input id="regrade-set-live-submit-date" type="date" value="${n(g.live_submit_open_date||"")}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
          <p class="text-[11px] text-[var(--muted-2)] mt-1.5">เว้นว่างไว้ = ยังไม่แสดงปุ่มนี้เลย</p>
        </div>

        <div class="rg-card p-5">
          <div class="flex items-center justify-between">
            <div class="min-w-0 pr-3">
              <p class="text-sm font-bold text-[var(--ink)]">แสดงกำหนดเวลาในหน้าภาพรวม</p>
              <p class="text-xs text-[var(--muted-2)] mt-0.5">เปิดแล้วนักเรียนจะเห็นกำหนดการแจ้งความจำนงพร้อมปุ่มไปแจ้งความจำนง และครูจะเห็นกำหนดการตอบรับพร้อมปุ่มไปตอบรับ ในแท็บ "ภาพรวม" ของตัวเอง</p>
            </div>
            ${W("regrade-set-show-deadline",g.show_deadline_banner)}
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
            ${Object.entries(We).map(([d,m])=>`
            <button data-preset="${d}" class="flex flex-col items-center gap-1.5">
              <span class="block w-11 h-11 rounded-xl border border-[var(--line)]" style="background:linear-gradient(135deg, ${m.primary} 30%, ${m.secondary} 65%, ${m.gold} 100%)"></span>
              <span class="text-[10px] font-bold text-[var(--muted)]">${n(m.label)}</span>
            </button>`).join("")}
          </div>

          <div class="grid grid-cols-3 gap-3 mb-4">
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎀 สีหลัก (สามัญ)</label><input id="regrade-set-primary" type="color" value="${g.primary_color||"#9d174d"}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🕌 สีรอง (ศาสนา)</label><input id="regrade-set-secondary" type="color" value="${g.secondary_color||"#065f46"}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">✨ สีทอง</label><input id="regrade-set-gold" type="color" value="${g.gold_color||"#b45309"}" class="w-full h-9"></div>
          </div>

          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ความโปร่งของกระจก (เฉพาะหน้าจอมือถือ)</label>
          <input id="regrade-set-glass-alpha" type="range" min="0.2" max="0.9" step="0.05" value="${g.glass_alpha??.55}" class="w-full">
        </div>
      </div>

      <div data-settings-group="data" class="flex flex-col gap-4">
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
        ${ee.map(({key:d,suffix:m,emoji:y,label:w})=>{var v;const T=(v=g.regrade_slip_template_ids)==null?void 0:v[d];return`
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">${y} เทมเพลตใบสั้น — ${w}</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เทมเพลตที่ใช้อยู่</label>
          <select id="regrade-set-slip-template-${m}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
            <option value="">— ยังไม่เลือก —</option>
            ${o.map(h=>`<option value="${h.id}" ${String(T??"")===String(h.id)?"selected":""}>${n(h.name)}</option>`).join("")}
          </select>
          <button id="regrade-slip-design-edit-${m}" type="button" class="w-full mb-3 py-2 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🎨 แก้ไขดีไซน์เทมเพลตที่เลือก</button>
          <div class="pt-3 border-t border-dashed border-[var(--line-soft)]">
            <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">หรือสร้างเทมเพลตใหม่</label>
            <div class="flex gap-2">
              <input id="regrade-slip-new-name-${m}" placeholder="ชื่อเทมเพลต เช่น ใบสั้น${w}" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs">
              <button id="regrade-slip-design-new-${m}" type="button" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ ออกแบบใหม่</button>
            </div>
          </div>
        </div>`}).join("")}
      </div>

      <div data-settings-group="access" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้ดูแลระบบ (เข้าหน้าตั้งค่านี้ได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${a.map(d=>te(d,"admin",p)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-admin" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-admin" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้ ไม่แก้ตั้งค่า)</p>
          <div class="flex flex-wrap gap-2 mb-3">${r.map(d=>te(d,"executive",p)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-executive" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-executive" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">เจ้าหน้าที่ฝ่ายทะเบียน (เข้าหน้าปิดงานได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${t.map(d=>te(d,"registrar",p)).join("")||'<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-registrar" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-registrar" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">+ เพิ่ม</button>
          </div>
        </div>
      </div>

      <datalist id="regrade-teacher-datalist">${s.map(d=>`<option value="${n(d.full_name)}${d.teacher_code?` (${n(d.teacher_code)})`:""} · รหัส ${d.id}"></option>`).join("")}</datalist>
    </div>`,Te(e,B.activeTab),e.querySelectorAll("[data-settings-tab]").forEach(d=>d.addEventListener("click",()=>Te(e,d.dataset.settingsTab))),e.querySelectorAll("[data-level-chip]").forEach(d=>d.addEventListener("click",()=>{const m=d.dataset.on!=="1";d.dataset.on=m?"1":"0",d.style.cssText=m?"background:var(--primary);color:#fff;":"background:var(--surface-2);color:var(--muted)"})),e.querySelectorAll("[data-remove-admin]").forEach(d=>d.addEventListener("click",async()=>{if(await E({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้ดูแลระบบของ "${d.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await at(d.dataset.removeAdmin),b("ถอดสิทธิ์แล้ว","success"),H()}catch(y){b(y.message,"error")}})),e.querySelectorAll("[data-remove-registrar]").forEach(d=>d.addEventListener("click",async()=>{if(await E({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์เจ้าหน้าที่ทะเบียนของ "${d.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await rt(d.dataset.removeRegistrar),b("ถอดสิทธิ์แล้ว","success"),H()}catch(y){b(y.message,"error")}})),e.querySelectorAll("[data-remove-executive]").forEach(d=>d.addEventListener("click",async()=>{if(await E({title:"ยืนยันถอดสิทธิ์",message:`ถอดสิทธิ์ผู้บริหารของ "${d.dataset.name}" ใช่หรือไม่?`,confirmText:"ยืนยันถอดสิทธิ์"}))try{await st(d.dataset.removeExecutive),b("ถอดสิทธิ์แล้ว","success"),H()}catch(y){b(y.message,"error")}})),document.getElementById("regrade-add-admin").addEventListener("click",async()=>{const d=document.getElementById("regrade-new-admin"),m=z(d.value,s);if(!m){b("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(a.some(w=>w.profile_id===m.profile_id)){b("ครูคนนี้เป็นผู้ดูแลระบบอยู่แล้ว","warning");return}if(await E({title:"ยืนยันเพิ่มผู้ดูแลระบบ",message:`เพิ่ม "${m.full_name}" เป็นผู้ดูแลระบบแก้ค้างเก่าใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await nt(m.profile_id),d.value="",b("เพิ่มแล้ว ✅","success"),H()}catch(w){b(w.message,"error")}}),document.getElementById("regrade-add-registrar").addEventListener("click",async()=>{const d=document.getElementById("regrade-new-registrar"),m=z(d.value,s);if(!m){b("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(t.some(w=>w.profile_id===m.profile_id)){b("ครูคนนี้เป็นเจ้าหน้าที่ทะเบียนอยู่แล้ว","warning");return}if(await E({title:"ยืนยันเพิ่มเจ้าหน้าที่ทะเบียน",message:`เพิ่ม "${m.full_name}" เป็นเจ้าหน้าที่ฝ่ายทะเบียนใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await dt(m.profile_id),d.value="",b("เพิ่มแล้ว ✅","success"),H()}catch(w){b(w.message,"error")}}),document.getElementById("regrade-add-executive").addEventListener("click",async()=>{const d=document.getElementById("regrade-new-executive"),m=z(d.value,s);if(!m){b("กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง","warning");return}if(r.some(w=>w.profile_id===m.profile_id)){b("ครูคนนี้เป็นผู้บริหารอยู่แล้ว","warning");return}if(await E({title:"ยืนยันเพิ่มผู้บริหาร",message:`เพิ่ม "${m.full_name}" เป็นผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้) ใช่หรือไม่?`,confirmText:"ยืนยันเพิ่ม"}))try{await lt(m.profile_id),d.value="",b("เพิ่มแล้ว ✅","success"),H()}catch(w){b(w.message,"error")}}),document.getElementById("regrade-set-save").addEventListener("click",async()=>{if(await E({title:"ยืนยันบันทึกการตั้งค่า",message:"บันทึกการตั้งค่าทั้งหมดนี้ใช่หรือไม่? จะมีผลกับทุกคนทันที",confirmText:"บันทึก"}))try{await fe({intent_open:G(e,"regrade-set-intent"),intent_window_start:document.getElementById("regrade-set-intent-start").value,intent_window_end:document.getElementById("regrade-set-intent-end").value,intent_open_levels:[...e.querySelectorAll('[data-level-chip][data-on="1"]')].map(m=>m.dataset.levelChip),response_window_start:document.getElementById("regrade-set-response-start").value,response_window_end:document.getElementById("regrade-set-response-end").value,live_submit_open_date:document.getElementById("regrade-set-live-submit-date").value,show_deadline_banner:G(e,"regrade-set-show-deadline"),visibility:{student_menu:G(e,"regrade-set-vis-student"),teacher_menu:G(e,"regrade-set-vis-teacher")},primary_color:document.getElementById("regrade-set-primary").value,secondary_color:document.getElementById("regrade-set-secondary").value,gold_color:document.getElementById("regrade-set-gold").value,glass_alpha:Number(document.getElementById("regrade-set-glass-alpha").value),student_announcement:document.getElementById("regrade-set-ann-student").value,teacher_announcement:document.getElementById("regrade-set-ann-teacher").value,system_name:document.getElementById("regrade-set-name").value.trim()||"แก้ค้างเก่า",regrade_slip_template_ids:Object.fromEntries(ee.map(({key:m,suffix:y})=>[m,document.getElementById(`regrade-set-slip-template-${y}`).value||null]))}),b("บันทึกการตั้งค่าเรียบร้อย ✅","success"),f.cfg=await re(),Ge(),H()}catch(m){b("บันทึกไม่สำเร็จ: "+m.message,"error")}}),ee.forEach(({key:d,suffix:m,label:y})=>{document.getElementById(`regrade-slip-design-new-${m}`).addEventListener("click",()=>{const w=document.getElementById(`regrade-slip-new-name-${m}`).value.trim()||`ใบสั้นแก้ค้างเก่า (${y})`;ve({template:{name:w,type:"custom",layout:Ht},previewVariables:xe,placeholderTokens:be,onSave:async(T,v)=>{var A,q;const h=await Et({name:w,type:"custom",presetKey:null,backgroundImageUrl:v,layout:T,createdByTeacherId:((A=f.teacherRow)==null?void 0:A.id)??null}),_={...((q=f.cfg)==null?void 0:q.regrade_slip_template_ids)||{},[d]:h.id};await fe({regrade_slip_template_ids:_}),b(`สร้างเทมเพลต "${y}" และตั้งเป็นค่าที่ใช้แล้ว ✅`,"success"),f.cfg=await re(),H()}})}),document.getElementById(`regrade-slip-design-edit-${m}`).addEventListener("click",()=>{const w=Number(document.getElementById(`regrade-set-slip-template-${m}`).value);if(!w){b("กรุณาเลือกเทมเพลตก่อน","warning");return}const T=o.find(v=>v.id===w);T&&ve({template:T,previewVariables:xe,placeholderTokens:be,onSave:async(v,h)=>{await Tt({id:T.id,layout:v,backgroundImageUrl:h}),b("บันทึกดีไซน์แล้ว ✅","success")}})})}),Nt(e,["regrade-set-intent","regrade-set-vis-student","regrade-set-vis-teacher","regrade-set-show-deadline"]),pa(e),ca(e)}const We={default:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.55,label:"ค่าเริ่มต้น"},dark:{primary:"#701138",secondary:"#043d2d",gold:"#78350f",glassAlpha:.45,label:"เข้ม"},airy:{primary:"#9d174d",secondary:"#065f46",gold:"#b45309",glassAlpha:.25,label:"โปร่งใส"},tint:{primary:"#db2777",secondary:"#059669",gold:"#d97706",glassAlpha:.65,label:"ย้อมสี"}};function ca(e){const a=e.querySelector("#regrade-set-primary"),t=e.querySelector("#regrade-set-secondary"),r=e.querySelector("#regrade-set-gold"),s=e.querySelector("#regrade-set-glass-alpha"),l=e.querySelector("#regrade-theme-preview"),o=e.querySelector("#regrade-theme-preview-sec"),p=e.querySelector("#regrade-theme-preview-gold"),g=document.documentElement;function x(){l.style.background=a.value,o.style.background=t.value,p.style.background=r.value,g.style.setProperty("--primary",a.value),g.style.setProperty("--secondary",t.value),g.style.setProperty("--gold",r.value),g.style.setProperty("--glass-alpha",s.value)}x(),[a,t,r,s].forEach($=>$.addEventListener("input",x)),e.querySelectorAll("[data-preset]").forEach($=>$.addEventListener("click",()=>{const i=We[$.dataset.preset];i&&(a.value=i.primary,t.value=i.secondary,r.value=i.gold,s.value=i.glassAlpha,x())}))}function ua(e){if(!e.length)return'<p class="text-xs text-[var(--muted-2)] text-center py-4">ไม่พบข้อมูลในไฟล์</p>';const a=["student_code","subject_code","subject_name","category","semester","class_level","teacher_code"],t=e.slice(0,10);return`<div class="overflow-x-auto rounded-xl border border-[var(--line)]">
    <table class="w-full text-[11px]">
      <thead class="bg-[var(--surface-2)] text-[var(--muted-2)]"><tr>${a.map(r=>`<th class="px-2 py-1.5 text-left">${r}</th>`).join("")}</tr></thead>
      <tbody>${t.map(r=>`<tr class="border-t border-[var(--line-soft)]">${a.map(s=>`<td class="px-2 py-1.5 text-[var(--ink-2)]">${n(r[s]??"")}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
    ${e.length>10?`<p class="text-center text-[10px] text-[var(--muted-2)] py-1.5">แสดง 10 จาก ${e.length} แถว</p>`:""}
  </div>`}function pa(e){let a=null;const t=e.querySelector("#regrade-csv-file"),r=e.querySelector("#regrade-csv-preview"),s=e.querySelector("#regrade-csv-import-btn"),l=e.querySelector("#regrade-csv-result");t==null||t.addEventListener("change",async()=>{var p;l.innerHTML="";const o=(p=t.files)==null?void 0:p[0];if(!o){a=null,r.innerHTML="",s.classList.add("hidden");return}try{const g=await o.text();a=Ye(g),r.innerHTML=ua(wt(a)),s.classList.toggle("hidden",a.length===0)}catch(g){r.innerHTML="",b("อ่านไฟล์ CSV ไม่สำเร็จ: "+g.message,"error")}}),s==null||s.addEventListener("click",async()=>{if(!(!(a!=null&&a.length)||!await E({title:"ยืนยันนำเข้าข้อมูล CSV",message:`นำเข้าข้อมูลรายวิชาค้าง ${a.length} แถวเข้าสู่ระบบใช่หรือไม่? แถวที่มีอยู่แล้วในระบบจะถูกข้าม ไม่ทับข้อมูลเดิม`,confirmText:"ยืนยันนำเข้า"}))){s.disabled=!0,s.textContent="กำลังนำเข้า...";try{const p=await kt(a);l.innerHTML=`
        <div class="rounded-xl p-3" style="background:var(--ok-soft);border:1px solid var(--ok-soft-line);color:var(--ok)">
          นำเข้าสำเร็จ ${p.imported} แถว จากทั้งหมด ${p.total} แถว
          ${p.skippedDuplicate?`<br>ข้าม ${p.skippedDuplicate} แถว (มีอยู่แล้วในระบบ)`:""}
          ${p.skippedNoStudent?`<br>ข้าม ${p.skippedNoStudent} แถว (ไม่พบรหัสนักเรียนในระบบ)`:""}
          ${p.skippedInvalid?`<br>ข้าม ${p.skippedInvalid} แถว (ข้อมูลไม่ครบ/หมวดไม่ถูกต้อง)`:""}
          ${p.unmatchedTeacher?`<br>⚠️ ${p.unmatchedTeacher} แถว ไม่พบรหัสครู (นำเข้าแล้วแต่ยังไม่ผูกครูผู้สอน)`:""}
        </div>`,b("นำเข้าข้อมูลเรียบร้อย ✅","success"),a=null,t.value="",r.innerHTML="",s.classList.add("hidden")}catch(p){b("นำเข้าไม่สำเร็จ: "+p.message,"error")}finally{s.disabled=!1,s.textContent="นำเข้าข้อมูล"}}})}function z(e,a){const t=e.trim().match(/· รหัส (\d+)$/);return t?a.find(r=>r.id===Number(t[1]))??null:null}function te(e,a,t){var o;const r=t==null?void 0:t.get(e.profile_id),s=r?`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`:((o=e.profiles)==null?void 0:o.user_code)||e.profile_id,l=a==="admin"?`data-remove-admin="${n(e.profile_id)}"`:a==="executive"?`data-remove-executive="${n(e.profile_id)}"`:`data-remove-registrar="${n(e.profile_id)}"`;return`<span class="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">
    ${n(s)}
    <button ${l} data-name="${n(s)}" class="w-4 h-4 rounded-full text-[10px]" style="background:var(--primary-soft-line)">×</button>
  </span>`}function Ge(){const e=document.documentElement;f.cfg.primary_color&&e.style.setProperty("--primary",f.cfg.primary_color),f.cfg.secondary_color&&e.style.setProperty("--secondary",f.cfg.secondary_color),f.cfg.gold_color&&e.style.setProperty("--gold",f.cfg.gold_color),f.cfg.glass_alpha!=null&&e.style.setProperty("--glass-alpha",f.cfg.glass_alpha)}let pe=null;function Ke(){var a,t;const e=[];return f.role==="student"&&f.studentRow&&((a=f.cfg.visibility)!=null&&a.student_menu||f.isAdmin)&&e.push({key:"student",icon:"🎓",label:"ของฉัน"}),f.role==="teacher"&&f.teacherRow&&((t=f.cfg.visibility)!=null&&t.teacher_menu||f.isAdmin)&&e.push({key:"teacher",icon:"📚",label:"งานสอนของฉัน"}),f.isRegistrar&&e.push({key:"registrar",icon:"📋",label:"ฝ่ายทะเบียน"}),f.isExecutive&&e.push({key:"dashboard",icon:"📊",label:"ผู้บริหาร"}),f.isAdmin&&e.push({key:"settings",icon:"⚙️",label:"ตั้งค่าระบบ"}),e}async function me(e){pe=e,document.getElementById("regrade-bottom-tabs").innerHTML="";const a=Ke();if(ma(a),ga(a),e==="student")return D();if(e==="teacher")return k();if(e==="registrar")return ne();if(e==="dashboard")return ue();if(e==="settings")return H()}function ma(e){e.length>1?ie(e,pe,me):document.getElementById("regrade-sidebar-nav").innerHTML=""}function ga(e){const a=document.getElementById("regrade-role-switcher");if(a){if(e.length<=1){a.innerHTML="";return}a.innerHTML=`<div class="rg-switcher-bar flex gap-2 overflow-x-auto px-4 py-2 border-b border-[var(--line-soft)]">${e.map(t=>`
    <button data-switch-sec="${t.key}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition"
      style="${pe===t.key?"background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;":"background:var(--surface-2);color:var(--muted);"}">${t.icon} ${n(t.label)}</button>`).join("")}</div>`,a.querySelectorAll("[data-switch-sec]").forEach(t=>t.addEventListener("click",()=>me(t.dataset.switchSec)))}}function ae(){document.getElementById("regrade-content").innerHTML=`
    <div class="max-w-md mx-auto p-6 text-center text-[var(--muted)]">
      <p class="text-4xl mb-3">🔒</p>
      <p class="text-sm">บัญชีนี้ยังไม่มีสิทธิ์เข้าใช้งานระบบแก้ค้างเก่า</p>
    </div>`}async function fa(){const{data:{session:e}}=await ge.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:a}=await ge.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single();f.role=a==null?void 0:a.role;const r={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[f.role]||"index.html",s=document.getElementById("regrade-back-btn-desktop"),l=document.getElementById("regrade-back-btn-mobile");if(window.self!==window.top){const g=x=>{x.preventDefault(),typeof window.parent.closeRegradeModal=="function"?window.parent.closeRegradeModal():window.parent.location.href=r};s.removeAttribute("href"),l.removeAttribute("href"),s.addEventListener("click",g),l.addEventListener("click",g)}else s.href=r,l.href=r;try{f.cfg=await re();const g=await Je();f.isAdmin=g.isAdmin||f.role==="admin"||(a==null?void 0:a.is_also_admin)===!0,f.isRegistrar=g.isRegistrar||f.isAdmin,f.isExecutive=g.isExecutive||f.isAdmin}catch(g){document.getElementById("regrade-content").innerHTML=`<div class="p-6 text-center text-red-500 text-sm">โหลดการตั้งค่าไม่สำเร็จ: ${n(g.message)}</div>`;return}if(Ge(),f.role==="student"&&(f.studentRow=await Xe()),f.role==="teacher"&&(f.teacherRow=await Ze()),f.role==="student"&&!f.studentRow){ae();return}if(f.role==="teacher"&&!f.teacherRow){ae();return}const o=Ke();if(!o.length){ae();return}const p=f.isAdmin||f.isExecutive?"dashboard":f.isRegistrar?"registrar":o[0].key;await me(p)}fa();
