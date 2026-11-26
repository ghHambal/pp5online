const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-vSXCr5aV.js","assets/supabase-BV-W2lsh.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/asr-prayer-ciMuHQOE.js","assets/ui-DU3V9L7w.js","assets/views-D_csTfuZ.js","assets/leave-monitor.js_v_10.18-Uf5pBfHB.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-Cp4zp12W.js","assets/academic-term-switcher-DBo10kez.js","assets/sync-DmHbtljR.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-PYNJrmMY.js","assets/teacher-views-classes-Bd_GpQId.js","assets/browser-JP79f-a9.js","assets/regrade-menu-window-DuuFB9GJ.js","assets/pp5-doc-Dyumokif.js","assets/score-display-EKXBehKd.js","assets/storage-CuUjCgvI.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-grades-Dj__o2WA.js","assets/score-qr-scanner-Dqudf-xM.js","assets/teacher-views-attendance-DGyKbcmJ.js","assets/confetti-loader-BAN5Lv-C.js","assets/workload-scheduler-C9WpzjbH.js","assets/import-C94fAqSd.js","assets/theme-qDnPEUQn.js","assets/version.js_v_10.22-CSCTNcuM.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/feature-hub.js_v_10.22-DnX-6Sl_.js","assets/sports-portals.js_v_10.22-C7vHbj3Q.js","assets/sports-awards-admin-6oCPrlSb.js"])))=>i.map(i=>d[i]);
import{a as Ut,_ as it,g as ge}from"./ui-DU3V9L7w.js";import{b as Qe,d6 as Yt,dh as ft,di as Jt,dj as Kt,K as jt,dk as Xt}from"./api-vSXCr5aV.js";import{i as st,g as yt,c as Zt,b as es,d as ts,f as at,r as ss}from"./score-display-EKXBehKd.js";import{c as Ct,d as as,s as qt,e as rs,f as et,h as ns,i as os,j as ls,k as ds,l as is,m as cs,n as ms,b as pt,o as us,p as ps,q as It,r as xs,u as Mt,t as Tt,v as ct,w as bs,x as gs,y as fs,z as ys,A as vs,B as hs,C as ws,D as _s,E as $s,F as Ss,G as ks,H as Es,I as Ls}from"./student-api-BCYhD7hm.js";import{getMyStudentLeaveRequests as js,submitStudentLeaveRequest as Cs}from"./student-leave-api-BitSRDUl.js";import{o as qs}from"./student-leave-proof-viewer-DXpl66O1.js";import{submitStudentPasswordResetRequest as Is}from"./student-password-reset-api-Ath5foA7.js";import{g as Ms}from"./theme-qDnPEUQn.js";import{i as Bt}from"./skill-groups-BY1NTbf4.js";import{_dateInputValue as Dt,_currentWeek as Ts,applyReadingGradesFromConfig as Bs,_readingGrade as Ds,renderIconTile as Pe}from"./teacher-views-utils-PYNJrmMY.js";import{g as Nt,a as At,b as Pt,r as Rt}from"./quiz-api-MXSuDZbX.js";import{f as Ns}from"./leave-time-CrS9gT63.js";import{uploadAssignmentFile as As}from"./storage-CuUjCgvI.js";import{A as Ps}from"./version.js_v_10.22-CSCTNcuM.js";import{s as Te}from"./supabase-BV-W2lsh.js";import{b as Rs}from"./browser-JP79f-a9.js";import{g as Hs,Q as Os,R as zs}from"./regrade-menu-window-DuuFB9GJ.js";import{e as Fs,o as vt}from"./certificate-engine-Bn4Xdc-e.js";import{o as Qs,c as Gs,a as ht,r as Vs}from"./academic-term-switcher-DBo10kez.js";import"./supabase-errors-BniCCodr.js";import"./assignment-annotations-api-Y9qfMpYa.js";import"./print-overlay-BVfxEd6n.js";const rt=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Ht(e){if(!e)return"";if(e.image_review_error)return'<p class="text-xs text-amber-700 mt-2">เปิดผลตรวจแบบเขียนไม่สำเร็จ กรุณาโหลดหน้าใหม่เพื่อลองอีกครั้ง</p>';const t=e.image_reviews??[];return t.length?`<div class="mt-3 rounded-xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-xs font-bold text-indigo-700 mb-2">✍️ งานที่ครูตรวจแล้ว</p>${t.map(n=>`<div class="mb-3 last:mb-0"><p class="text-xs text-indigo-700 mb-1">${new Date(n.source_submitted_at).getTime()===new Date(e.submitted_at).getTime()&&(e.file_urls??[]).some(c=>c.url===n.source_url)?"ผลตรวจงานรอบปัจจุบัน":"ผลตรวจงานรอบก่อน"} · ${rt(new Date(n.source_submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}))}</p><a href="${rt(n.image_url)}" target="_blank" rel="noopener" class="block"><img src="${rt(n.image_url)}" alt="งานที่ครูเขียนตรวจแล้ว" loading="lazy" class="max-h-64 w-full object-contain rounded-lg bg-white"><span class="block text-xs font-bold text-indigo-700 mt-1">เปิดดูฉบับตรวจ ↗</span></a></div>`).join("")}</div>`:""}const nt=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function Ot(e){var d;(d=document.getElementById("my-certificates-modal"))==null||d.remove();const t=document.body.style.overflow;document.body.style.overflow="hidden";const n=document.createElement("div");n.id="my-certificates-modal",n.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",n.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const o=()=>{document.removeEventListener("keydown",c),document.body.style.overflow=t,n.remove()},c=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",c),document.body.appendChild(n),n.querySelector("[data-mycert-close]").addEventListener("click",o);const m=n.querySelector("#my-certificates-body"),x=[];(await Fs(e.id).catch(()=>[])).forEach(r=>x.push({key:`central-${r.id}`,emoji:"🏅",title:r.title||"เกียรติบัตร",sub:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>vt({layout:r.layout_snapshot,variables:{name:e.full_name,date:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:r.certificate_no,...r.variables},docTitle:r.title})}));const S=await Ct(e.main_room).catch(()=>null),R=S&&Number(S.head_student_id)===Number(e.id),T=S&&Number(S.vice_head_student_id)===Number(e.id),X=R?S==null?void 0:S.head_cert_url:T?S==null?void 0:S.vice_head_cert_url:null;X&&x.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${R?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(X,"_blank")});try{const{data:r}=await Te.from("events").select("id, status").order("academic_year",{ascending:!1}).order("created_at",{ascending:!1}).limit(1).maybeSingle();if(r){const[p,w]=await Promise.all([Te.rpc("get_my_sports_eligibility",{p_event:r.id}).then(b=>b.error?null:b.data).catch(()=>null),Te.rpc("get_my_sports_certificates",{p_event:r.id}).then(b=>b.error?[]:b.data??[]).catch(()=>[])]);(Array.isArray(w)?w:[]).forEach(b=>{const _=b.certificate_kind==="outstanding";x.push({key:`sports-${b.certificate_kind||"medal"}-${b.id}`,emoji:_?"🏆":"🏅",title:b.title||`เกียรติบัตร${b.medal_label?` · ${b.medal_label}`:""}`,sub:_?`นักกีฬาดีเด่น · ${b.sport_name||"กีฬาสี"}`:`${b.sport_name||"รายการแข่งขัน"} · สี${b.color||""}`,onOpen:()=>vt({layout:b.layout,variables:{name:e.full_name,date:new Date(b.awarded_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"}),no:b.certificate_no,...b.variables||{}},docTitle:b.title},Ut)})}),p!=null&&p.eligible&&(p!=null&&p.certificate_url)&&x.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(p.certificate_url,"_blank")})}}catch{}x.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>Qs(e.student_code)}),m.innerHTML=x.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${x.map(r=>`
        <div data-key="${nt(r.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${r.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${r.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${nt(r.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${nt(r.sub||"")}</p>
          ${r.onOpen?'<p class="text-[10px] text-indigo-600 mt-2 font-bold">กดเพื่อเปิด / บันทึก PDF</p>':""}
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',x.forEach(r=>{var p;r.onOpen&&((p=m.querySelector(`[data-key="${CSS.escape(r.key)}"]`))==null||p.addEventListener("click",r.onOpen))})}let Ue;async function Ws(){return window.Html5Qrcode?window.Html5Qrcode:(Ue||(Ue=new Promise((e,t)=>{const n=document.createElement("script");n.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",n.onload=()=>window.Html5Qrcode?e(window.Html5Qrcode):t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),n.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(n)}).catch(e=>{throw Ue=null,e})),Ue)}async function zt(e,t){const n=await Ws(),o=new n(e);return await o.start({facingMode:"environment"},{fps:25,aspectRatio:1},t,()=>{}),o}const Ce=e=>(e??"").replace(/\/\d+/,"").trim(),Ve=e=>!e.mySubmission||e.mySubmission.status==="rejected",W=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ie(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function V(e,t="info"){const n={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},o=document.createElement("div");o.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${n[t]??n.info} transition-all`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2800)}const Us={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},Ys={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},Fe={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Ze=["อา","จ","อ","พ","พฤ","ศ","ส"],We={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},ot=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function Js(e){if(e!=null&&e.teacher_code)return ot;const t=String((e==null?void 0:e.gender)||"").trim(),n=ot.filter(o=>o.genders.includes(t));return n.length?n:ot}function Ks(e){const t=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!t)return{grade:null,isVoc:!1};const n=t.match(/^ม\.?([1-6])/);return{grade:n?parseInt(n[1],10):null,isVoc:t.startsWith("ปวช")}}function Xs(e,t){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:n,isVoc:o}=Ks(e),c=t==="musolla_male",m=t==="masjid_kuwait";return!c&&!m?"":m&&!(n===6||o)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":c&&!(n>=1&&n<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function wt(e){const n=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16)}}function Zs({r:e,g:t,b:n}){return"#"+[e,t,n].map(o=>Math.max(0,Math.min(255,Math.round(o))).toString(16).padStart(2,"0")).join("")}function Ye(e,t,n){const o=wt(e),c=wt(t);return Zs({r:o.r+(c.r-o.r)*n,g:o.g+(c.g-o.g)*n,b:o.b+(c.b-o.b)*n})}function ze(e){if(!e)return"—";const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()+543}`}function lt(e){if(!e)return"";const t=new Date(e),n=new Date;t.setHours(0,0,0,0),n.setHours(0,0,0,0);const o=Math.round((t-n)/864e5);return o>1?`อีก ${o} วัน`:o===1?"พรุ่งนี้":o===0?"วันนี้":o===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(o)} วัน`}function ea(e){var c,m,x;const t=((c=e.master_subjects)==null?void 0:c.subject_group)??"",n=e.skill_group??"";return(((x=(m=e.master_subjects)==null?void 0:m.teachers)==null?void 0:x.category)??"")==="ศาสนา"||t==="AGM"||t==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:t==="ACDMVOC"||n==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:n==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:Bt(n)?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:n==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function ta(e,t={}){var S,R,T;const n=((S=e.master_subjects)==null?void 0:S.subject_group)??"",o=e.skill_group??"",c=((T=(R=e.master_subjects)==null?void 0:R.teachers)==null?void 0:T.category)??"",m=c==="ศาสนา"||n==="AGM"||n==="AGMVOC"?t.teacherReligionColor||"#b45309":n==="ACDMVOC"||o==="สามัญปวช"?t.teacherVocColor||"#7c3aed":o==="ภาษา"?t.teacherLanguageColor||"#2563eb":Bt(o)?t.teacherLifeColor||"#059669":o==="วิชาการ"?t.teacherAcademicColor||"#ea580c":t.teacherDefaultColor||"#059669",x=c==="ศาสนา"||n==="AGM"||n==="AGMVOC"?n==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":n==="ACDMVOC"||o==="สามัญปวช"?"กลุ่มสามัญ ปวช":o?`กลุ่มทักษะ: ${o}`:"กลุ่มวิชาสามัญ",h=x.replace("กลุ่มทักษะ: ","");return{color:m,label:x,short:h,bg:Ye(m,"#ffffff",.9),badgeBg:Ye(m,"#ffffff",.86),border:Ye(m,"#ffffff",.35),text:Ye(m,"#000000",.35)}}function dt(e=0){const t=new Date,n=t.getDay(),o=new Date(t);o.setDate(t.getDate()-(n===0?6:n-1)),o.setDate(o.getDate()+e*7);const c=new Date(o);c.setDate(o.getDate()-1);const m={};m[0]=c;for(let x=1;x<=7;x++){const h=new Date(o);h.setDate(o.getDate()+x-1),m[x]=h}return m}function Je(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const Ft="12:20",sa="12:50",aa="13:05",ra=60;function Xe(e,t){const o=String(e||t||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return Xe(t,Ft);const c=Math.max(0,Math.min(23,parseInt(o[1],10))),m=Math.max(0,Math.min(59,parseInt(o[2],10)));return c*60+m}function _t(e){const t=(e%1440+1440)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Oe(e){return String(e||"").split(/[\s,]+/).map(t=>t.trim()).filter(Boolean)}function $t(e,t=!1){return e==null||e===""?t:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function na(e,t={}){return String(e||"").trim()==="หญิง"?$t(t.prayerSameRoomGuardFemaleEnabled,!1):$t(t.prayerSameRoomGuardMaleEnabled,!0)}function St(e){return String(e||"").replace(/\s+/g,"").trim()}function Qt(e,t={}){return e!=null&&e.student_code?Oe(t.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function Gt(e,t={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const n=String(e.student_code).trim(),o=Oe(t.prayerScannerSun),c=Oe(t.prayerScannerMon),m=Oe(t.prayerScannerTue),x=Oe(t.prayerScannerWed),h=Oe(t.prayerScannerThu);if(!(o.includes(n)||c.includes(n)||m.includes(n)||x.includes(n)||h.includes(n)))return!0;const R=new Date().getDay();return!!(R===0&&o.includes(n)||R===1&&c.includes(n)||R===2&&m.includes(n)||R===3&&x.includes(n)||R===4&&h.includes(n))}function xt(e={},t=!1){const n=Xe(e.prayerScanStartTime,Ft),o=Xe(e.prayerScanEndTime,sa),c=Xe(e.prayerScanExtendedEndTime,aa),m=t?c:o;return{start:n,end:m,startLabel:_t(n),endLabel:_t(m)}}function Ge(e={},t=!1){const n=new Date,o=n.getHours(),c=n.getMinutes(),m=o*60+c,{start:x,end:h}=xt(e,t);return h<x?m>=x||m<=h:m>=x&&m<=h}function oa(e={},t=!1){const n=new Date,o=n.getHours()*3600+n.getMinutes()*60+n.getSeconds(),{start:c,end:m}=xt(e,t),x=c*60;let h=m*60,S=o;return m<c&&S<x&&(S+=86400),m<c&&(h+=86400),Math.max(0,h-S)}function la(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Ne(e){var x,h;let t=e.getFullYear();const n=((x=window._pp5SystemCfg)==null?void 0:x.academicYear)||((h=window._pp5SystemCfg)==null?void 0:h.academic_year)||2569,o=parseInt(n)-543;(t>2030||t<2024)&&(t=o);const c=String(e.getMonth()+1).padStart(2,"0"),m=String(e.getDate()).padStart(2,"0");return`${t}-${c}-${m}`}function Vt(e,t=[]){const n=t.map(x=>x.check_date).filter(Boolean).sort()[0],o=e||n||new Date().toISOString().slice(0,10),c=new Date(o);c.setHours(0,0,0,0);const m=c.getDay();return m&&c.setDate(c.getDate()-m),Array.from({length:20},(x,h)=>{const S=Array.from({length:5},(R,T)=>{const X=new Date(c);return X.setDate(c.getDate()+h*7+T),{date:X,ds:Ne(X),day:Ze[T]}});return{n:h+1,days:S}})}function kt(e,t){const n=Object.fromEntries((t??[]).map(o=>[o.column_id,o.score]));return(e??[]).map(o=>({...o,score:n[o.id]??null}))}async function za(e){var ce,me,oe,be,ke,he;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,n,o,c,m,x,h,S,R,T]=await Promise.all([et(e.id).catch(()=>[]),pt(e.id).catch(()=>[]),hs(e.id).catch(()=>({linked:[],unlinked:[]})),ws(e.id).catch(()=>[]),_s(e.id).catch(u=>(console.error("[student GPA] โหลดเกรดเฉลี่ยไม่สำเร็จ",u),{samai:[],sasana:[],error:ge(u)})),Qe().catch(()=>({})),Ct(e.main_room).catch(()=>null),Tt(e.id).catch(()=>[]),(ce=window._pp5StudentAcademicTerms)!=null&&ce.length?Promise.resolve(window._pp5StudentAcademicTerms):jt().catch(()=>[]),Te.rpc("asr_prayer_my_access").then(({data:u,error:s})=>s?null:u).catch(()=>null)]);window._pp5AsrPrayerAccess=T;const X=Gs(R,x),d=ht({academic_year:Number(x.academicYear??x.academic_year??2568),semester:Number(x.semester??1)});let r=d;try{const u=localStorage.getItem(`pp5_student_score_term_${e==null?void 0:e.id}`);X.some(s=>ht(s)===u)&&(r=u)}catch{}const p=S.filter(Ve).sort((u,s)=>(u.due_at?new Date(u.due_at).getTime():1/0)-(s.due_at?new Date(s.due_at).getTime():1/0)),w=n.filter(u=>u.status==="pending"),C=n.slice(0,3),b=Qt(e,x),_=await Promise.all(t.map(u=>Nt(u.id,e.id).catch(()=>[]))),E=t.flatMap((u,s)=>(_[s]??[]).map(l=>({...l,_class:u}))),L=await At(E.map(u=>u.id),e.id).catch(()=>new Set),Y=E.filter(u=>{const s=u.attempts.some(H=>H.status==="in_progress"),l=u.status==="closed"&&u.makeupAccess&&Date.now()>=new Date(u.makeupAccess.opened_at).getTime()&&Date.now()<=new Date(u.makeupAccess.closes_at).getTime();if(u.status!=="started"&&!(u.status==="closed"&&(l||s))||L.has(u.id))return!1;const $=u.attempts.filter(H=>H.status==="submitted"||H.status==="terminated_violation").length;return!(u.attempts.length&&u.attempts[u.attempts.length-1].status==="terminated_violation")&&$<u.max_attempts}),ae=h&&Number(h.head_student_id)===Number(e.id),de=h&&Number(h.vice_head_student_id)===Number(e.id),F=(x.council_test_student_codes||"").split(/[\s,]+/).map(u=>u.trim()).filter(Boolean),J=x.council_visible_to_all!=="false"||F.includes(e.student_code);let xe=!1;try{const{data:u,error:s}=await Te.rpc("get_terangganu_access");s||(xe=(u==null?void 0:u.visible)===!0&&(u==null?void 0:u.student_allowed)===!0)}catch{xe=!1}let fe=0,we={};try{const[u,s]=await Promise.all([Hs(),Promise.resolve(Te.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);we=u||{},fe=Number(s==null?void 0:s.count)||0}catch{fe=0}const Ee=Os(we,"student",{badge:fe});let Le=!0;try{const{data:u}=await Te.from("settings").select("value").eq("key","sports_visibility").maybeSingle();u!=null&&u.value&&(Le=u.value.enabled!==!1&&u.value.student_menu!==!1)}catch{Le=!0}let _e=!1;try{const{data:u}=await Te.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();_e=!!u}catch{_e=!1}let $e=!1;try{const{data:u}=await Te.from("attendance_delegates").select("id, classes!inner(attendance_delegate_enabled)").eq("student_id",e.id).eq("classes.attendance_delegate_enabled",!0).limit(1);$e=!!(u!=null&&u.length)}catch{$e=!1}const Se=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">ข้อมูลการเรียน งาน และกิจกรรมในหน้าภาพรวมเป็นภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="student-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Vs(X,r,d)}
        </select>
      </label>
    </div>
  </section>`;ie(`
    ${Se}
    <!-- Profile card -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 mb-4 flex items-center gap-4 sm:gap-6">
      <div class="w-14 h-20 rounded-t-2xl rounded-b-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover object-top"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <p class="font-bold text-gray-800 text-base truncate">${e.full_name}</p>
          ${ae?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
              👑 หัวหน้าห้อง
            </span>
          `:""}
          ${de?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              🥈 รองหัวหน้าห้อง
            </span>
          `:""}
        </div>
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${e.student_code} · ${Ce(e.main_room??"—")}</p>
      </div>
    </div>

    ${Ee?`<div class="mb-4">${Ee}</div>`:""}

    <!-- ระบบอื่น ๆ — กริดไอคอนแอปเลื่อนแนวนอนได้ถ้ามีมากกว่าที่จอแสดงพอดี (sportsVisible/councilVisible/
         terangganuVisible/can_scan_prayer ล้วนเปิด-ปิดแยกอิสระ รวมกันอาจเกิน 4 ช่องได้)
         — เกียรติบัตรแสดงเสมอ ส่วนที่เหลือ conditional เหมือนเดิมทุกประการ แค่เปลี่ยนรูปแบบจากแบนเนอร์
         เต็มแถว/แถบเมนูล่างถาวร (กีฬาสี) มาเป็นไอคอน -->
    <div class="mb-4">
      <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</p>
      ${[Le,_e,J,xe,e.can_scan_prayer,$e,T==null?void 0:T.can_manage,T==null?void 0:T.can_view_all,((T==null?void 0:T.assignments)??[]).length>0].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Pe({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},x.iconTileStyle)}
        ${Le?Pe({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},x.iconTileStyle):""}
        ${_e?Pe({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},x.iconTileStyle):""}
        ${J?Pe({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},x.iconTileStyle):""}
        ${xe?Pe({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},x.iconTileStyle):""}
        ${e.can_scan_prayer?Pe({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},x.iconTileStyle):""}
        ${T!=null&&T.can_manage||T!=null&&T.can_view_all||((T==null?void 0:T.assignments)??[]).length>0?Pe({emoji:"🕌",label:"ละหมาด<br>อัซรี",from:"#CDEEDB",to:"#48A77E",onclick:"window._stuNav('asr_prayer')"},x.iconTileStyle):""}
        ${$e?Pe({id:"student-attendance-delegate-tile",emoji:"✅",label:"เช็คชื่อ<br>แทนครู",from:"#CDEBD6",to:"#4CA778",onclick:"window._stuNav('attendance_delegate')"},x.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${Gt(e,x)&&Ge(x,b)?`
    <div class="relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl border border-emerald-500/20 shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4">
      <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">🕌</div>
      <div class="min-w-0 z-10">
        <h4 class="font-bold text-sm sm:text-base">🕌 ระบบเช็คชื่อละหมาด (สภานักเรียน)</h4>
        <p class="text-xs text-emerald-100 mt-1">นักเรียนได้รับสิทธิ์ให้ทำหน้าที่สแกนเนอร์ บันทึกเวลาละหมาด</p>
      </div>
      <button onclick="window._stuNav('prayer_scanner')" class="relative z-10 px-4 py-2 bg-white text-emerald-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-emerald-50 active:scale-95 transition-all shadow flex-shrink-0">
        เข้าสู่ระบบสแกน →
      </button>
    </div>
    `:""}

    <!-- แบบทดสอบที่เปิดสอบอยู่ตอนนี้ (ครูกดเริ่มแล้ว) -->
    ${Y.map(u=>{var l,$;const s=u.attempts.some(g=>g.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${s?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${W(u.title)} · ${W((($=(l=u._class)==null?void 0:l.master_subjects)==null?void 0:$.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${u.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
          ${s?"ทำต่อ →":"เข้าสอบ →"}
        </button>
      </div>`}).join("")}

    <!-- Stats row — คลิกได้แล้ว ลิงก์ไปหน้าที่เกี่ยวข้องโดยตรง -->
    <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
      <button type="button" onclick="window._stuNav('subjects')" class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center relative active:scale-95 transition-transform">
        <span class="absolute top-1.5 right-2 text-gray-300 text-xs">›</span>
        <p class="text-xl sm:text-3xl font-bold text-emerald-600">${t.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">รายวิชา</p>
      </button>
      <button type="button" onclick="window._stuNav('requests')" class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center relative active:scale-95 transition-transform">
        <span class="absolute top-1.5 right-2 text-gray-300 text-xs">›</span>
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${w.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">คำร้อง<br>รอดำเนินการ</p>
      </button>
      <button type="button" onclick="window._stuNav('requests')" class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center relative active:scale-95 transition-transform">
        <span class="absolute top-1.5 right-2 text-gray-300 text-xs">›</span>
        <p class="text-xl sm:text-3xl font-bold text-blue-600">${n.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">คำร้อง<br>ทั้งหมด</p>
      </button>
    </div>

    <!-- Quick actions — ย้ายมาอยู่ใต้การ์ดตัวเลขทันที (เดิมอยู่ล่างสุดของหน้า) — 4 ปุ่มใน grid เดียว -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
      <button onclick="window._stuNav('subjects')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
        style="background:linear-gradient(135deg,#059669,#047857)">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-xl mb-2 relative">📚</p>
        <p class="font-bold text-sm text-white relative">รายวิชาของฉัน</p>
        <p class="text-[10px] text-emerald-200 mt-0.5 relative">${t.length} วิชา</p>
      </button>
      <button onclick="window._stuNav('scores')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
        style="background:linear-gradient(135deg,#4f46e5,#4338ca)">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-xl mb-2 relative">📊</p>
        <p class="font-bold text-sm text-white relative">คะแนนของฉัน</p>
        <p class="text-[10px] text-indigo-200 mt-0.5 relative">ทักษะ / ละหมาด</p>
      </button>
      ${(()=>{const u=`stu_ann_seen_${e.id}`,s=new Set(JSON.parse(localStorage.getItem(u)??"[]")),l=c.filter($=>!s.has($.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${c.length} รายการ</p>
          ${l>0?`<span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">${l}</span>`:""}
        </button>`})()}
      <button id="btn-stu-gpa"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
        style="background:linear-gradient(135deg,#7c3aed,#6d28d9)">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-xl mb-2 relative">🎓</p>
        <p class="font-bold text-sm text-white relative">เกรดเฉลี่ย</p>
        <p class="text-[10px] text-purple-200 mt-0.5 relative">GPA ภาคเรียนนี้</p>
      </button>
    </div>

    <!-- ปุ่มภาระงานของฉัน — แสดงตลอด ไม่ใช่แค่ตอนมีงานค้าง (หาเจอง่าย เข้าถึงได้ทุกครั้ง) -->
    ${(()=>{const u=p.length>0,s=p[0],l=s!=null&&s.due_at?new Date(s.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${u?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${u?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${u?`ค้างอยู่ ${p.length} ชิ้น · ใกล้สุด: ${W(s.title)}${l?` (${l})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const s=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],l=new Date,$=l.getHours()*3600+l.getMinutes()*60+l.getSeconds(),g=B=>{if(!B)return null;const[D,N]=B.split(":").map(Number);return D*3600+N*60},H=o.linked.map(({cls:B,sched:D,period:N})=>{var i,A;const re=B==null?void 0:B.master_subjects,ue=g(N==null?void 0:N.start_time),K=g(N==null?void 0:N.end_time),I=ue!=null&&K!=null&&$>=ue&&$<K,z=K!=null&&$>=K,ee=I?"🟢":z?"✅":"⬜",a=N?`${(i=N.start_time)==null?void 0:i.slice(0,5)}–${(A=N.end_time)==null?void 0:A.slice(0,5)}`:`คาบ ${D.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${ee}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${D.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(re==null?void 0:re.subject_name)??D.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${a} · ${(B==null?void 0:B.class_name)??""}</p>
          </div>
          ${I?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),v=c.filter(B=>B.ann_type==="deadline"&&B.deadline_at&&new Date(B.deadline_at)>l).sort((B,D)=>new Date(B.deadline_at)-new Date(D.deadline_at)).slice(0,5),M=B=>{const D=new Date(B)-l,N=Math.floor(D/6e4);if(N<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${N} น.</span>`;const re=Math.floor(N/60);return re<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${re} ชม. ${N%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(re/24)} วัน</span>`},se=v.map(B=>{var N,re;const D=(N=B.cls)==null?void 0:N.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${B.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(D==null?void 0:D.subject_name)??""} · ${((re=B.cls)==null?void 0:re.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${M(B.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${s}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${l.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${H?`
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${H}</div>`:'<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>'}
        ${se?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${se}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${C.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${C.map(u=>{var $;const s=Fe[u.status]??Fe.pending,l=u.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${(($=l==null?void 0:l.master_subjects)==null?void 0:$.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${u.request_type} · ${ze(u.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${s.cls}">${s.label}</span>
            </div>
          </div>`}).join("")}
      </div>
    </div>`:`
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `),zs();const k=document.getElementById("stu-live-clock");if(k){const u=()=>{const l=new Date;k.textContent=`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}:${String(l.getSeconds()).padStart(2,"0")}`};u();const s=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(s);return}u()},1e3)}const Z=(u,s)=>{const l=document.createElement("div");return l.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",l.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${u}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${s}</div>`,document.body.appendChild(l),l.querySelector("#stu-popup-back").addEventListener("click",()=>l.remove()),l},U=o.linked.find(({period:u})=>{if(!(u!=null&&u.start_time)||!(u!=null&&u.end_time))return!1;const s=new Date,l=s.getHours()*3600+s.getMinutes()*60+s.getSeconds(),[$,g]=u.start_time.split(":").map(Number),[H,v]=u.end_time.split(":").map(Number);return l>=$*3600+g*60&&l<H*3600+v*60});if(U){const u=(()=>{const[l,$]=U.period.end_time.split(":").map(Number);return l*3600+$*60})(),s=setInterval(()=>{const l=document.getElementById("stu-period-countdown");if(!l){clearInterval(s);return}const $=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),g=Math.max(0,u-$);if(g===0){l.textContent="หมดคาบ",clearInterval(s);return}const H=Math.floor(g/3600),v=Math.floor(g%3600/60),M=g%60;l.textContent=`${String(H).padStart(2,"0")}:${String(v).padStart(2,"0")}:${String(M).padStart(2,"0")}`},1e3)}const ne={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},j=u=>{if(!u)return"";const s=new Date(u),$=Math.floor((s-new Date)/6e4),g=s.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if($<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${g}</span>`;if($<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${$} น. · ${g}</span>`;const H=Math.floor($/60);return H<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${H} ชม. ${$%60} น. · ${g}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(H/24)} วัน · ${g}</span>`};(me=document.getElementById("btn-stu-my-certificates"))==null||me.addEventListener("click",()=>Ot(e)),(oe=document.getElementById("btn-stu-anns"))==null||oe.addEventListener("click",()=>{const u=`stu_ann_seen_${e.id}`,s=new Set(JSON.parse(localStorage.getItem(u)??"[]"));c.forEach(g=>s.add(g.id)),localStorage.setItem(u,JSON.stringify([...s]));const l=document.querySelector("#btn-stu-anns span.absolute");l&&l.remove();const $=c.length?`<div class="space-y-3">${c.map(g=>{var M,se,B;const H=ne[g.ann_type]??ne.general,v=(M=g.cls)==null?void 0:M.master_subjects;return`<div class="rounded-2xl border ${H.border} ${H.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${g.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${H.icon} ${H.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(v==null?void 0:v.subject_name)??""} · ${((se=g.cls)==null?void 0:se.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${g.title??""}</p>
        ${g.body?`<p class="text-xs text-gray-500 mt-1">${g.body}</p>`:""}
        ${g.ann_type==="deadline"&&g.deadline_at?`<div class="mt-2">${j(g.deadline_at)}</div>`:""}
        ${g.file_url?`<a href="${g.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(B=g.attachment_urls)!=null&&B.length?`<div class="flex flex-wrap gap-1.5 mt-2">${g.attachment_urls.map(D=>`<a href="${W(D.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${W(D.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';Z("📢 ประกาศของฉัน",$)}),(be=document.getElementById("btn-stu-gpa"))==null||be.addEventListener("click",()=>{const u=I=>{const z=I.filter(i=>i.grade!=null);if(!z.length)return null;const ee=z.reduce((i,A)=>i+(A.credit||1),0),a=z.reduce((i,A)=>i+A.grade*(A.credit||1),0);return ee>0?(a/ee).toFixed(2):null},s=I=>I==null?"text-gray-400":I>=3.5?"text-emerald-600":I>=3?"text-blue-500":I>=2?"text-amber-600":"text-red-500",l=I=>I>=3.5?"ดีเยี่ยม":I>=3?"ดี":I>=2?"พอใช้":I>=1?"ผ่าน":"ไม่ผ่าน",$=I=>I.loadError?'<span class="text-[10px] font-semibold text-red-500 whitespace-nowrap">⚠️ โหลดข้อมูลไม่ครบ</span>':I.grade==null&&I.totalCols>0?`<span class="text-[10px] font-semibold text-amber-500 whitespace-nowrap" title="ครูให้คะแนนแล้ว ${I.scoredCount}/${I.totalCols} ช่อง — วิชานี้ยังไม่ถูกนับเข้าเกรดเฉลี่ยจนกว่าจะครบ">⏳ ${I.scoredCount}/${I.totalCols} · ยังไม่นับเข้า GPA</span>`:null,g=(I,z,ee)=>{const i=I.filter(y=>y.grade!=null).reduce((y,q)=>y+(q.credit||1),0),A=parseFloat(z);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${ee}" class="text-5xl font-extrabold ${z?s(A):"text-gray-300"} hover:opacity-70 transition">${z??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${z?s(A):"text-gray-400"}">${z?l(A):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${I.length?`
      <div class="overflow-x-auto -mx-4">
        <table class="w-full text-xs">
          <thead>
            <tr class="border-b border-gray-200 text-gray-400 text-left">
              <th class="px-4 py-2 font-medium">#</th>
              <th class="px-2 py-2 font-medium">รายวิชา</th>
              <th class="px-2 py-2 font-medium text-center">หน่วย</th>
              <th class="px-2 py-2 font-medium text-center">คะแนน</th>
              <th class="px-2 py-2 font-medium text-center">เกรด</th>
              <th class="px-2 py-2 font-medium text-center">แก้</th>
              <th class="px-2 py-2 font-medium text-center">เปิด</th>
            </tr>
          </thead>
          <tbody>
            ${I.map((y,q)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${q+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${y.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${y.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${y.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${y.score!=null?y.score:$(y)??"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${s(y.grade)}">${y.grade!=null?y.grade.toFixed(1):$(y)?"":"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${y.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${y.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${i}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${i}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${s(z?A:null)}">${z??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},H=(I,z,ee)=>{const a=parseFloat(z);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${ee}" class="text-5xl font-extrabold ${z?s(a):"text-gray-300"} hover:opacity-70 transition">${z??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${z?s(a):"text-gray-400"}">${z?l(a):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${I.length?`
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${I.map(i=>`
        <button class="gpa-pp5-btn text-left border border-gray-200 rounded-2xl p-3 hover:shadow-md transition bg-white" data-class-id="${i.classId}">
          <p class="text-[10px] text-gray-400 font-mono truncate">${i.subjectCode??""}</p>
          <p class="font-bold text-xs text-gray-800 leading-tight line-clamp-2 mt-0.5 min-h-[2rem]">${i.subjectName}</p>
          <div class="flex items-center justify-between mt-2 gap-1">
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${i.credit} นก. ${i.hasRetake?"· แก้":""}</span>
            ${$(i)??`<span class="text-lg font-extrabold ${s(i.grade)}">${i.grade!=null?i.grade.toFixed(1):"—"}</span>`}
          </div>
        </button>`).join("")}
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},v=u(m.samai),M=u(m.sasana),se=I=>{const z=I==="samai"?m.samai:m.sasana,ee=I==="samai"?v:M;return(localStorage.getItem("studentGpaView")==="card"?"card":"table")==="card"?H(z,ee,I):g(z,ee,I)},D=`
      ${m.error?`
      <div class="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700">
        <p class="font-bold">⚠️ โหลดข้อมูลเกรดเฉลี่ยได้ไม่ครบ</p>
        <p class="mt-1">${W(m.error)}</p>
        <p class="mt-1 text-amber-600">วิชาที่โหลดได้จะแสดงตามปกติ ส่วนวิชาที่มีปัญหาจะไม่ถูกนำไปคำนวณ GPA</p>
      </div>`:""}
      <div class="flex items-center justify-between gap-2 mb-4">
        <div id="gpa-pop-tabs" class="flex gap-2 flex-1">
          <button data-tab="samai" class="gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-purple-600 text-white">สามัญ</button>
          <button data-tab="sasana" class="gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold text-gray-500 border border-gray-200">ศาสนา</button>
        </div>
        <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
          <button type="button" id="gpa-view-table" class="px-2.5 py-2 rounded-lg text-xs font-semibold transition">ตาราง</button>
          <button type="button" id="gpa-view-card" class="px-2.5 py-2 rounded-lg text-xs font-semibold transition">การ์ด</button>
        </div>
      </div>
      <div id="gpa-pop-samai">${se("samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${se("sasana")}</div>`,N=Z("🎓 เกรดเฉลี่ยของฉัน",D),re=()=>{N.querySelectorAll(".gpa-pp5-btn").forEach(I=>{I.addEventListener("click",()=>{var ee;const z=Number(I.dataset.classId);N.remove(),(ee=window._stuOpenClass)==null||ee.call(window,z)})}),["samai","sasana"].forEach(I=>{const z=N.querySelector(`#gpa-val-btn-${I}`);z&&z.addEventListener("click",()=>{const a=(I==="samai"?m.samai:m.sasana).filter(O=>O.grade!=null),i=a.reduce((O,P)=>O+(P.credit||1),0),A=a.reduce((O,P)=>O+P.grade*(P.credit||1),0),y=i>0?(A/i).toFixed(2):"—",q=document.createElement("div");q.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",q.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
            <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
            <div class="text-sm text-gray-600 mb-3">
              <p class="font-mono text-base font-semibold text-purple-700">
                Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
              <p class="text-gray-700">${A.toFixed(2)} ÷ ${i}</p>
              <p class="text-purple-700 font-bold text-lg mt-1">= ${y}</p>
            </div>
            <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่ครูให้คะแนนครบทุกช่องแล้วเท่านั้น (${a.length} วิชา)</p>
            <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
          </div>`,document.body.appendChild(q),q.querySelector("#gpa-tip-close").addEventListener("click",()=>q.remove()),q.addEventListener("click",O=>{O.target===q&&q.remove()})})})},ue=()=>{const I=localStorage.getItem("studentGpaView")==="card"?"card":"table";N.querySelector("#gpa-view-table").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${I==="table"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`,N.querySelector("#gpa-view-card").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${I==="card"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`};ue(),re();const K=I=>{localStorage.setItem("studentGpaView",I==="card"?"card":"table"),N.querySelector("#gpa-pop-samai").innerHTML=se("samai"),N.querySelector("#gpa-pop-sasana").innerHTML=se("sasana"),ue(),re()};N.querySelector("#gpa-view-table").addEventListener("click",()=>K("table")),N.querySelector("#gpa-view-card").addEventListener("click",()=>K("card")),N.querySelectorAll(".gpa-pop-tab").forEach(I=>{I.addEventListener("click",()=>{const z=I.dataset.tab;N.querySelector("#gpa-pop-samai").classList.toggle("hidden",z!=="samai"),N.querySelector("#gpa-pop-sasana").classList.toggle("hidden",z!=="sasana"),N.querySelectorAll(".gpa-pop-tab").forEach(ee=>{ee.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${ee.dataset.tab===z?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})})}),window._stuOpenClassFromTT=u=>{var s;document.querySelectorAll(".stu-fullpop").forEach(l=>l.remove()),window._stuFromTimetable=!0,(s=window._stuOpenClass)==null||s.call(window,u)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const te=async()=>{const u=Z("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:s,periods:l}=await $s(e.id).catch(()=>({slots:[],periods:[]})),$=u.querySelector(".flex-1.overflow-y-auto");if(!$)return;const g=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],H=["อา","จ","อ","พ","พฤ","ศ","ส"],v=[0,1,2,3,4,5,6].filter(K=>s.some(I=>I.dow===K)),M=new Date().getDay();let se="day",B=v.includes(M)?M:v[0]??0;const D={};s.forEach(K=>{D[`${K.dow}-${K.periodNo}`]=K});const N=K=>{var q,O,P,le;const I=new Date,z=I.getHours()*3600+I.getMinutes()*60+I.getSeconds(),ee={};s.filter(G=>G.dow===K&&G.span>1).forEach(G=>{for(let f=1;f<G.span;f++)ee[G.periodNo+f]=G.periodNo});const a=((O=(q=l.find(G=>G.period_no===5))==null?void 0:q.end_time)==null?void 0:O.slice(0,5))??"",i=((le=(P=l.find(G=>G.period_no===6))==null?void 0:P.start_time)==null?void 0:le.slice(0,5))??"",A=a&&i?`${a}–${i}`:"";let y="";return l.forEach(G=>{var bt,gt;G.period_no===6&&l.find(tt=>tt.period_no===5)&&(y+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${A?`<p class="text-[10px] text-emerald-500 mt-0.5">${A}</p>`:""}
            </td></tr>`);const f=D[`${K}-${G.period_no}`],Q=(f==null?void 0:f.span)??1,pe=Q>1?l.find(tt=>tt.period_no===G.period_no+Q-1)??G:G,[ve,je]=(G.start_time??"0:0").split(":").map(Number),[qe,Ie]=(pe.end_time??"0:0").split(":").map(Number),Be=z>=ve*3600+je*60&&z<qe*3600+Ie*60,ye=(bt=f==null?void 0:f.cls)==null?void 0:bt.master_subjects,Ae=["AGM","AGMVOC"].includes((ye==null?void 0:ye.subject_group)??""),Me=f?Ae?"bg-amber-50":"bg-emerald-50":"",Re=f?Ae?"text-amber-800":"text-emerald-800":"text-gray-300",He=ee[G.period_no]!=null;y+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${Be?"text-emerald-600":"text-gray-500"}">คาบ ${G.period_no}</p>
            <p class="text-[10px] text-gray-400">${((gt=G.start_time)==null?void 0:gt.slice(0,5))??""}</p>
          </td>
          ${He?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${Q>1?`rowspan="${Q}"`:""}
              ${f?`onclick="window._stuOpenClassFromTT(${f.cls.id})"`:""}>
            ${f?`
              <div class="rounded-xl ${Me} border-l-4 ${Ae?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${Be?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${Q>1?Q*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${Re} leading-tight">${(ye==null?void 0:ye.subject_name)??"—"}</p>
                <p class="text-[10px] ${Re} opacity-60 mt-0.5">${(ye==null?void 0:ye.subject_code)??""}</p>
                ${Be?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${y}</tbody>
      </table>`},re=()=>{const K=`${Math.floor(100/(v.length+1))}%`,I=`<th style="width:${K}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+v.map(a=>`<th style="width:${K}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${a===M?"text-teal-600":"text-gray-600"}">${H[a]}</th>`).join(""),z={};v.forEach(a=>{z[a]=new Set});let ee="";return l.forEach((a,i)=>{var q,O,P,le;const A=new Date;A.getHours()*3600+A.getMinutes()*60+A.getSeconds();const y=v.map(G=>{var Re;if(z[G].has(a.period_no))return"";const f=D[`${G}-${a.period_no}`],Q=(f==null?void 0:f.span)??1,pe=(Re=f==null?void 0:f.cls)==null?void 0:Re.master_subjects,ve=["AGM","AGMVOC"].includes((pe==null?void 0:pe.subject_group)??""),je=f?ve?"bg-amber-50":"bg-emerald-50":"",qe=f?ve?"text-amber-700":"text-emerald-700":"text-gray-200",Ie=Q>1?l.find(He=>He.period_no===a.period_no+Q-1)??a:a,[Be,ye]=(a.start_time??"0:0").split(":").map(Number),[Ae,Me]=(Ie.end_time??"0:0").split(":").map(Number);for(let He=1;He<Q;He++)z[G].add(a.period_no+He);return`<td style="width:${K};padding:2px" ${Q>1?`rowspan="${Q}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${f?`onclick="window._stuOpenClassFromTT(${f.cls.id})"`:""}>
            ${f?`
              <div class="rounded-lg ${je} border-l-2 ${ve?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${Q>1?Q*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${qe} text-[8px] font-semibold leading-tight line-clamp-3">${(pe==null?void 0:pe.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(ee+=`<tr>
          <td style="width:${K}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${a.period_no}</p>
            <p class="text-[8px] text-gray-300">${((q=a.start_time)==null?void 0:q.slice(0,5))??""}</p>
          </td>${y}</tr>`,a.period_no===5&&l.find(G=>G.period_no===6)){const G=((O=a.end_time)==null?void 0:O.slice(0,5))??"",f=((le=(P=l.find(Q=>Q.period_no===6))==null?void 0:P.start_time)==null?void 0:le.slice(0,5))??"";ee+=`<tr><td colspan="${v.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${G&&f?` ${G}–${f}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${I}</tr></thead>
          <tbody>${ee}</tbody>
        </table>
      </div>`},ue=()=>{var I,z,ee,a;const K=se==="week";if($.innerHTML=`
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${K?"text-gray-500":"bg-white shadow text-teal-600"}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${K?"bg-white shadow text-teal-600":"text-gray-500"}">ทั้งสัปดาห์</button>
        </div>
        ${K?"":`
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${g[B]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>`}
      </div>
      ${K?re():N(B)}
      ${s.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(I=$.querySelector("#tt-btn-day"))==null||I.addEventListener("click",()=>{se="day",ue()}),(z=$.querySelector("#tt-btn-week"))==null||z.addEventListener("click",()=>{se="week",ue()}),(ee=$.querySelector("#tt-prev"))==null||ee.addEventListener("click",()=>{const i=v.indexOf(B);B=v[(i-1+v.length)%v.length],ue()}),(a=$.querySelector("#tt-next"))==null||a.addEventListener("click",()=>{const i=v.indexOf(B);B=v[(i+1)%v.length],ue()}),!K&&$.querySelector("#tt-day-cd")){const A=l.find(y=>{if(!D[`${B}-${y.period_no}`]||!y.end_time)return!1;const O=new Date,P=O.getHours()*3600+O.getMinutes()*60+O.getSeconds(),[le,G]=y.end_time.split(":").map(Number),[f,Q]=(y.start_time??"0:0").split(":").map(Number);return P>=f*3600+Q*60&&P<le*3600+G*60});if(A){const[y,q]=A.end_time.split(":").map(Number),O=y*3600+q*60,P=setInterval(()=>{const le=$.querySelector("#tt-day-cd");if(!le){clearInterval(P);return}const G=new Date,f=Math.max(0,O-G.getHours()*3600-G.getMinutes()*60-G.getSeconds()),Q=Math.floor(f/3600),pe=Math.floor(f%3600/60),ve=f%60;le.textContent=`${String(Q).padStart(2,"0")}:${String(pe).padStart(2,"0")}:${String(ve).padStart(2,"0")}`,f===0&&clearInterval(P)},1e3)}}};ue()};(ke=document.getElementById("student-overview-term-switcher"))==null||ke.addEventListener("change",u=>{var l,$;const s=u.target.value;try{localStorage.setItem(`pp5_student_score_term_${e==null?void 0:e.id}`,s)}catch{}s===d?(l=window._stuNav)==null||l.call(window,"overview"):($=window._stuNav)==null||$.call(window,"scores")}),window._stuOpenTimetablePopup=te,(he=document.getElementById("btn-stu-timetable"))==null||he.addEventListener("click",te),window._stuStartQuiz=async u=>{try{const s=await Pt(u,e.id).catch(()=>null);if(s&&s.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${s.id}`;return}const l=await Rt(u);window.location.href=`quiz-exam.html?attempt=${l.id}`}catch(s){V("เข้าสอบไม่สำเร็จ: "+ge(s),"error")}}}async function da(e,t="life",n=null){var ne;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[o,c]=await Promise.all([Qe().catch(()=>({})),jt().catch(()=>[])]);Bs(o);const m=Number(o.academicYear??o.academic_year),x=Number(o.semester),h=Array.isArray(c)&&c.length?c:[{academic_year:m,semester:x,start_date:o.semester_start,end_date:o.semester_end,is_current:!0}],S=j=>`${Number(j.academic_year)}:${Number(j.semester)}`,R=`${m}:${x}`,T=n?`${Number(n.academicYear)}:${Number(n.semester)}`:null,X=localStorage.getItem(`pp5_student_score_term_${e.id}`),d=[T,X,R].find(j=>j&&h.some(te=>S(te)===j))??R,r=h.find(j=>S(j)===d)??h[0],p=Number(r.academic_year),w=Number(r.semester),C={...o,semester_start:r.start_date??o.semester_start,semester_end:r.end_date??o.semester_end},[b,_,E]=await Promise.all([bs(e.id,p,w).catch(j=>({columns:[],scores:[],error:j})),gs(e.id,p,w).catch(j=>({columns:[],scores:[],error:j})),fs(e.id,p,w,C.semester_start,C.semester_end).then(j=>({records:j,error:null})).catch(j=>({records:[],error:j}))]),L=E.records,Y=kt(b.columns,b.scores),ae=kt(_.columns,_.scores),de=ae.reduce((j,te)=>j+(parseFloat(te.score)||0),0),F=ae.reduce((j,te)=>j+(parseFloat(te.max_score)||0),0),J=F>0?Math.round(de/F*1e3)/10:0,xe=de>0?Ds(J):null,fe=Object.fromEntries((L??[]).map(j=>[j.check_date,j.status])),we=Vt(C.semester_start,L??[]),Ee=we.flatMap(j=>j.days),Le=Ee.reduce((j,te)=>{var ce;return j+(((ce=We[fe[te.ds]])==null?void 0:ce.score)??0)},0),_e=Ee.length*2,$e=_e?Math.max(0,Math.round(Le/_e*100)/10):0,Se=(j,te,ce,me)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${te} ${j}</h3>
        <span class="text-[11px] text-gray-400">${ce.length} หัวข้อ</span>
      </div>
      ${ce.length?`<div class="divide-y divide-gray-50">
        ${ce.map(oe=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${oe.name}</p>
              <p class="text-[11px] text-gray-400">${oe.sheet_col?`คอลัมน์ ${oe.sheet_col} · `:""}เต็ม ${oe.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${me}">${oe.score??"—"}</p>
              <p class="text-[10px] text-gray-400">/ ${oe.max_score??"—"}</p>
            </div>
          </div>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลคะแนน</div>'}
    </section>`,k=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${E.error?'<div class="px-4 py-3 bg-amber-50 border-b border-amber-100 text-xs text-amber-800">โหลดคะแนนละหมาดไม่สำเร็จ กรุณากดรีเฟรชหรือลองใหม่อีกครั้ง</div>':""}
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">20 สัปดาห์ · สัปดาห์ละ 5 วัน</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-amber-600">${$e}</p>
          <p class="text-[10px] text-gray-400">/ 10</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[520px] text-xs">
          <thead>
            <tr class="bg-gray-50 text-gray-500">
              <th class="px-2 py-2 text-left font-semibold">สัปดาห์</th>
              ${["อา","จ","อ","พ","พฤ"].map(j=>`<th class="px-2 py-2 text-center font-semibold">${j}</th>`).join("")}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${we.map(j=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${j.n}</td>
              ${j.days.map(te=>{const ce=fe[te.ds],me=We[ce];return`<td class="px-1 py-1 text-center">
                  <span title="${(me==null?void 0:me.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(me==null?void 0:me.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(me==null?void 0:me.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(We).map(j=>`<span><b class="${j.cls.split(" ").find(te=>te.startsWith("text-"))??""}">${j.label}</b> ${j.title}</span>`).join("")}
      </div>
    </section>
  `,Z={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[t]??"คะแนนทักษะชีวิต",U={life:Se("คะแนนทักษะชีวิต","🌱",Y,"text-emerald-600"),prayer:k,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${xe?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${xe.cls}">${xe.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${de?`${J} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${de||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${F||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${de?J:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${Se("คะแนนอ่านคิดวิเคราะห์ฯ","📖",ae,"text-sky-600")}
    `}[t]??Se("คะแนนทักษะชีวิต","🌱",Y,"text-emerald-600");ie(`
    <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
      <div>
        <h2 class="font-bold text-gray-800">📊 คะแนนของฉัน</h2>
        <p class="text-xs text-gray-400 mt-1">คะแนนประกอบรายภาคเรียน</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700">
        <span>ภาคเรียน</span>
        <select id="student-score-term" class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700">
          ${h.slice().sort((j,te)=>S(j)===R?-1:S(te)===R?1:S(te).localeCompare(S(j),void 0,{numeric:!0})).map(j=>`<option value="${W(S(j))}" ${S(j)===d?"selected":""}>ภาค ${W(j.semester)}/${W(j.academic_year)}${S(j)===R?" (ปัจจุบัน)":" (ย้อนหลัง)"}</option>`).join("")}
        </select>
      </label>
    </div>
    <p class="text-xs text-gray-400 mb-2">ข้อมูลภาค ${w||"—"} / ${p||"—"} · ${d===R?"ภาคเรียนปัจจุบัน":"ข้อมูลย้อนหลัง"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${Z}</p>
    ${U}
  `),(ne=document.getElementById("student-score-term"))==null||ne.addEventListener("change",j=>{const[te,ce]=String(j.target.value).split(":").map(Number);localStorage.setItem(`pp5_student_score_term_${e.id}`,`${te}:${ce}`),da(e,t,{academicYear:te,semester:ce})})}async function mt(e){var C;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,n,o]=await Promise.all([et(e.id).catch(()=>[]),Ms().catch(()=>({})),ys(e.id).catch(()=>[])]),c=Object.fromEntries(o.filter(b=>b.status==="pending").map(b=>[b.class_id,b])),m=["อา","จ","อ","พ","พฤ","ศ","ส"],x=t.length?await vs(t.map(b=>b.id)).catch(()=>({})):{},h=b=>{const _=x[b]??[];if(!_.length)return"";const E={};return _.forEach(L=>{const Y=L.day_of_week;E[Y]||(E[Y]=[]);const ae=L.span_periods??1;for(let de=0;de<ae;de++)E[Y].push((L.period_no??0)+de)}),Object.entries(E).sort(([L],[Y])=>Number(L)-Number(Y)).map(([L,Y])=>{const ae=[...new Set(Y)].sort((F,J)=>F-J),de=ae.length===1?`คาบ ${ae[0]}`:`คาบ ${ae[0]}–${ae[ae.length-1]}`;return`${m[Number(L)]??L} ${de}`}).join(" · ")};if(!t.length){ie(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const S=b=>{var L,Y,ae;if(b.subject_group_override)return b.subject_group_override==="sasana";const _=((L=b.master_subjects)==null?void 0:L.subject_group)??"";return(((ae=(Y=b.master_subjects)==null?void 0:Y.teachers)==null?void 0:ae.category)??"")==="ศาสนา"||_==="AGM"||_==="AGMVOC"},R=t.filter(b=>!S(b)),T=t.filter(b=>S(b)),d=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid",r=localStorage.getItem("studentSubjectsGroup")==="sasana"?"sasana":"samai";window._stuSetSubjectView=b=>{localStorage.setItem("studentSubjectsView",b==="grid"?"grid":"list"),mt(e)},window._stuSetSubjectGroup=b=>{localStorage.setItem("studentSubjectsGroup",b==="sasana"?"sasana":"samai"),mt(e)};const p=b=>{const _=b.master_subjects,E=_==null?void 0:_.teachers,L=ta(b,n);return d?`<button onclick="window._stuOpenClass(${b.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${L.bg}; border-color:${L.border}; border-left-color:${L.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${L.badgeBg}; color:${L.text};">${L.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${L.text};">${(_==null?void 0:_.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${(_==null?void 0:_.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${Ce(b.class_name)}</p>
            ${h(b.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${h(b.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${E!=null&&E.image_url?`<img src="${E.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${((E==null?void 0:E.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${(E==null?void 0:E.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${b.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${L.bg}; border-color:${L.border}; border-left-color:${L.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${L.text};">${(_==null?void 0:_.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${(_==null?void 0:_.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${L.text};">${L.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${L.badgeBg}; color:${L.text};">${L.short}</span>
          <span class="text-[10px] text-gray-400">${(_==null?void 0:_.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${h(b.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${h(b.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${E!=null&&E.image_url?`<img src="${E.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${((E==null?void 0:E.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${(E==null?void 0:E.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${Ce(b.class_name)}</span>
      </div>
    </div>`},w=(b,_,E)=>E.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${_}</span>
          <h3 class="font-bold text-gray-700 text-sm">${b}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${E.length} วิชา</span>
        </div>
        <div class="${d?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${E.map(p).join("")}
        </div>
      </div>`:"";ie(`
    <div class="flex items-center justify-between gap-3 mb-3">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${d?"text-gray-400":"bg-white text-emerald-600 shadow-sm"}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${d?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}">กริด</button>
      </div>
    </div>
    <div class="flex gap-2 mb-2">
      <button type="button" onclick="window._stuSetSubjectGroup('samai')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">📖 สามัญ (${R.length})</button>
      <button type="button" onclick="window._stuSetSubjectGroup('sasana')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">🕌 ศาสนา (${T.length})</button>
    </div>
    <div class="flex justify-end mb-4">
      <button id="btn-manage-subject-groups" type="button" class="text-xs text-indigo-600 font-semibold hover:text-indigo-800">🔧 จัดการกลุ่มรายวิชา</button>
    </div>
    ${r==="samai"?w("วิชาสามัญ","📖",R):w("วิชาศาสนา","🕌",T)}
  `),(C=document.getElementById("btn-manage-subject-groups"))==null||C.addEventListener("click",()=>{ia(e,t,c,S)})}function ia(e,t,n,o){var R;(R=document.getElementById("subject-group-mgr"))==null||R.remove();const c=document.createElement("div");c.id="subject-group-mgr",c.className="fixed inset-0 z-[400] bg-white flex flex-col";const m=(T,X)=>{const d=T.master_subjects,r=n[T.id];return`
    <div class="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3">
      <p class="font-semibold text-sm text-gray-800 truncate min-w-0">${(d==null?void 0:d.subject_name)??"—"}</p>
      ${r?'<span class="text-[11px] font-semibold text-amber-500 whitespace-nowrap flex-shrink-0">⏳ รอตรวจสอบ</span>':X?`<button class="sgm-move-btn text-[11px] font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-1.5 hover:bg-indigo-50 whitespace-nowrap flex-shrink-0"
              data-class-id="${T.id}" data-requested="samai">ย้ายไป 📖 สามัญ</button>`:""}
    </div>`};let x="samai";const h=()=>{const T=t.filter(d=>(o(d)?"sasana":"samai")===x),X=c.querySelector("#sgm-list");X.innerHTML=T.length?T.map(d=>m(d,x==="sasana")).join(""):'<p class="text-center text-gray-400 text-sm py-8">ไม่มีวิชาในกลุ่มนี้</p>',X.querySelectorAll(".sgm-move-btn").forEach(d=>{d.addEventListener("click",async()=>{var w,C;const r=Number(d.dataset.classId),p=t.find(b=>b.id===r);if(confirm(`ขอย้ายวิชา "${((w=p==null?void 0:p.master_subjects)==null?void 0:w.subject_name)??""}" ไปกลุ่ม 📖 สามัญ?
(ต้องรอแอดมินตรวจสอบและอนุมัติก่อนจึงจะมีผลจริง)`)){d.disabled=!0,d.textContent="กำลังส่ง...";try{await Ls(r,"samai"),Xt({title:"🔀 มีคำขอย้ายกลุ่มวิชาใหม่",body:`นักเรียนขอย้ายวิชา "${((C=p==null?void 0:p.master_subjects)==null?void 0:C.subject_name)??""}" ไปกลุ่ม 📖 สามัญ — รอตรวจสอบ`,url:"dashboard.html"}).catch(()=>{}),V("ส่งคำขอแล้ว รอแอดมินตรวจสอบ","success"),c.remove(),mt(e)}catch(b){V("ส่งคำขอไม่สำเร็จ: "+ge(b),"error"),d.disabled=!1,d.textContent="ย้ายไป 📖 สามัญ"}}})})};c.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="sgm-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">🔧 จัดการกลุ่มรายวิชา</h3>
    </div>
    <div class="px-4 pt-3 pb-2 flex-shrink-0 space-y-2">
      <p class="text-[11px] text-gray-400 leading-relaxed">บางวิชาสามัญอาจถูกจัดเข้ากลุ่มศาสนาไปเพราะครูผู้สอนอยู่หมวดศาสนา — ขอย้ายกลับได้ที่นี่ แต่จะยังไม่มีผลทันที ต้องรอแอดมินตรวจสอบและอนุมัติก่อนเสมอ</p>
      <div class="flex gap-2">
        <button id="sgm-tab-samai" class="sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition"></button>
        <button id="sgm-tab-sasana" class="sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition"></button>
      </div>
    </div>
    <div id="sgm-list" class="flex-1 overflow-y-auto px-4 py-3 space-y-2"></div>`,document.body.appendChild(c),c.querySelector("#sgm-back").addEventListener("click",()=>c.remove());const S=()=>{c.querySelector("#sgm-tab-samai").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${x==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,c.querySelector("#sgm-tab-samai").textContent=`📖 สามัญ (${t.filter(T=>!o(T)).length})`,c.querySelector("#sgm-tab-sasana").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${x==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,c.querySelector("#sgm-tab-sasana").textContent=`🕌 ศาสนา (${t.filter(T=>o(T)).length})`};c.querySelector("#sgm-tab-samai").addEventListener("click",()=>{x="samai",S(),h()}),c.querySelector("#sgm-tab-sasana").addEventListener("click",()=>{x="sasana",S(),h()}),S(),h()}async function ca(e,t="samai"){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const n=await Tt(e.id).catch(()=>[]),o=r=>{var C,b,_,E,L;const p=((b=(C=r._class)==null?void 0:C.master_subjects)==null?void 0:b.subject_group)??"";return(((L=(E=(_=r._class)==null?void 0:_.master_subjects)==null?void 0:E.teachers)==null?void 0:L.category)??"")==="ศาสนา"||p==="AGM"||p==="AGMVOC"},c=n.filter(r=>!o(r)),m=n.filter(r=>o(r)),x=r=>r?new Date(r).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",h=(r,p)=>r.due_at?new Date(p).getTime()>new Date(r.due_at).getTime():!1,S=r=>r.due_at?Date.now()>new Date(r.due_at).getTime():!1,R=r=>{var b,_;const p=r.mySubmission,w=p?h(r,p.submitted_at):!1,C=!p&&S(r);return`<div onclick="window._stuOpenClass(${r.class_id})"
      class="bg-white rounded-2xl border ${p?"border-emerald-100":C?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${W(((_=(b=r._class)==null?void 0:b.master_subjects)==null?void 0:_.subject_name)??"")}</p>
        ${p?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${w?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${w?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${C?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${C?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${W(r.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${x(r.due_at)}</p>
      ${Ht(p)}
      ${p!=null&&p.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${W(p.teacher_feedback)}</p>`:""}
    </div>`},T=r=>{if(!r.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const p=r.filter(Ve).sort((C,b)=>(C.due_at?new Date(C.due_at).getTime():1/0)-(b.due_at?new Date(b.due_at).getTime():1/0)),w=r.filter(C=>C.mySubmission&&C.mySubmission.status!=="rejected").sort((C,b)=>new Date(b.mySubmission.submitted_at).getTime()-new Date(C.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${p.length})</p>
        ${p.length?`<div class="space-y-2.5">${p.map(R).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${w.length})</p>
        ${w.length?`<div class="space-y-2.5">${w.map(R).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},X=c.filter(Ve).length,d=m.filter(Ve).length;ie(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${X?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${X}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${d?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${d}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${T(t==="sasana"?m:c)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(r=>{r.addEventListener("click",()=>ca(e,r.dataset.grp))})}async function ma(e,t,n="todo",o=null){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const m=(await et(e.id,o==null?void 0:o.academicYear,o==null?void 0:o.semester).catch(()=>[])).find(a=>a.id===t);if(!m){ie('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:x}=await it(async()=>{const{getClassAnnouncements:a}=await import("./api-vSXCr5aV.js").then(i=>i.eB);return{getClassAnnouncements:a}},__vite__mapDeps([0,1,2,3])).catch(()=>({})),[{columns:h,scores:S},R,T,X,d,r,p]=await Promise.all([cs(e.id,t).catch(()=>({columns:[],scores:[]})),ms(e.id,t).catch(()=>[]),pt(e.id).catch(()=>[]),x?x(t).catch(()=>[]):Promise.resolve([]),Nt(t,e.id).catch(()=>[]),us(t,e.id).catch(()=>[]),ps(t).catch(()=>[])]),w=await At(d.map(a=>a.id),e.id).catch(()=>new Set),C=window._pp5SystemCfg??await Qe().catch(()=>({})),b=Ts(C.semester_start),_=p.find(a=>b>=a.week_start&&b<=a.week_end),E=T.filter(a=>{var i;return((i=a.classes)==null?void 0:i.id)===t}),L=Object.fromEntries(S.map(a=>[a.assignment_id,a])),Y=m.master_subjects,ae=Y==null?void 0:Y.teachers,de=await Yt(t).catch(()=>(V("โหลดค่าปัดเลขร่วมไม่สำเร็จ","error"),null)),F=a=>ts(h,a,i=>{var A,y;return((A=L[i])==null?void 0:A.final_score)??((y=L[i])==null?void 0:y.original_score)},L[a.id]),J=h.filter(st),xe=h.filter(a=>a.column_type==="derived"),fe=h.filter(a=>!yt(a)&&!st(a)&&!["override","derived"].includes(a.column_type)),we=h.filter(a=>yt(a)&&!st(a)&&!["override","derived"].includes(a.column_type)),Ee=fe.reduce((a,i)=>a+(i.max_score||0),0),Le=we.reduce((a,i)=>a+(i.max_score||0),0),_e=fe.reduce((a,i)=>a+F(i),0),$e=we.reduce((a,i)=>a+F(i),0),Se=J.reduce((a,i)=>a+F(i),0),k=xe.reduce((a,i)=>a+F(i),0),Z=xe.reduce((a,i)=>a+Number(i.max_score||0),0),U=_e+$e+k,ne=Zt(de,U),j=Ee+Le+Z,te=j>0?ne/j*100:0,ce=h.filter(es),me=ce.filter(a=>{const i=L[a.id];return a.column_type==="derived"||i&&(i.final_score!=null||i.original_score!=null)}),oe=ce.length>0&&me.length===ce.length,be=R.length,ke=R.filter(a=>a.status==="present").length,he=be>0?Math.round(ke/be*100):null,u=a=>a>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:a>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:a>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},s=a=>a>=80?4:a>=75?3.5:a>=70?3:a>=65?2.5:a>=60?2:a>=55?1.5:a>=50?1:0,l=oe&&j>0?{...u(te),point:s(te)}:null,$=a=>{const i=L[a.id],y=a.column_type==="derived"||i&&(i.final_score!=null||i.original_score!=null)?F(a):null,q=y!=null&&a.max_score>0?Math.round(y/a.max_score*100):null,O=(i==null?void 0:i.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${a.assignment_name}
        ${O?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${y!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${y!=null?at(de,ss(a),y,a.column_type==="derived"?2:1):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${a.max_score!=null?"/"+a.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${y!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${a.max_score!=null?q!=null?q+"%":"—%":""}
      </td>
    </tr>`},g=(a,i,A,y,q)=>{if(!a.length)return"";const O=A>0?Math.round(i/A*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${q}</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50 text-[10px] text-gray-400 uppercase tracking-wide">
              <th class="py-2 px-3 text-left font-semibold">ชื่องาน</th>
              <th class="py-2 px-3 text-center font-semibold">คะแนน</th>
              <th class="py-2 px-3 text-center font-semibold">เต็ม</th>
              <th class="py-2 px-3 text-center font-semibold">%</th>
            </tr>
          </thead>
          <tbody>
            ${a.map($).join("")}
            <tr class="${y}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${at(de,a===fe?"mid_subtotal":a===we?"fin_subtotal":"bonus_subtotal",i)}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${A}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${O}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},H=ea(m),v=()=>`
    <div class="${H.bg} ${H.border} border border-l-4 ${H.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${H.text} text-sm leading-tight">${(Y==null?void 0:Y.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${(Y==null?void 0:Y.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(ae==null?void 0:ae.full_name)??"—"} · ${Ce(m.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${j>0?at(de,"total",U):"—"}</p>
        <p class="text-[10px] text-gray-400">/${j} คะแนน</p>
        ${Se>0?`<p class="text-[10px] text-amber-500 font-medium">คะแนนพิเศษ ${Se.toFixed(1).replace(/\.0$/,"")} (แยก ไม่บวกยอดรวม)</p>`:""}
        ${l?`<div class="mt-1 flex items-center justify-end gap-1.5"><span class="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-extrabold">เกรด ${l.point.toFixed(1)}</span><span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${l.cls}">${l.label}</span></div>`:j>0?`<span class="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">ยังไม่สรุปเกรด (${me.length}/${ce.length} หัวข้อ)</span>`:""}
      </div>
    </div>`,M=a=>{const i=Fe[a.status]??Fe.pending,A=a.class_score_columns,y=lt(a.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${a.request_type}</p>
          ${A?`<p class="text-[11px] text-gray-400 mt-0.5">${A.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${i.cls}">${i.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${ze(a.requested_date)}${a.requested_period_no?` · คาบ ${a.requested_period_no}`:""}${y?` · ${y}`:""}</p>
        ${a.reason?`<p>💬 ${a.reason}</p>`:""}
        ${a.teacher_comment?`<p class="${a.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${a.teacher_comment}</p>`:""}
      </div>
      ${a.status==="pending"?`
        <button onclick="window._stuCancelRequest(${a.id}, ${t})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},se=()=>{const a=[],i=r.filter(Ve);i.length>0&&a.push(`
        <button onclick="window._stuOpenClassTab(${t},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${i.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${i.length}</span>
        </button>`);const A=E.filter(f=>f.status==="pending");A.length>0&&A.forEach(f=>{const Q=f.class_score_columns,pe=lt(f.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${f.request_type} — รอครูอนุมัติ</p>
              ${Q?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${Q.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${ze(f.requested_date)}${f.requested_period_no?` · คาบ ${f.requested_period_no}`:""}${pe?` · ${pe}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const y=E.filter(f=>f.status==="approved"&&f.exam_attended==null);y.length>0&&y.forEach(f=>{const Q=f.class_score_columns,pe=lt(f.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${f.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${Q?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${Q.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${ze(f.requested_date)}${f.requested_period_no?` · คาบ ${f.requested_period_no}`:""}${pe?` · ${pe}`:""}</p>
              ${f.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${f.teacher_comment}</p>`:""}
            </div>
          </div>`)}),d.forEach(f=>{const Q=f.attempts.filter(Me=>Me.status==="submitted"||Me.status==="terminated_violation").reduce((Me,Re)=>Math.max(Me,Re.score_pct??0),null),pe=f.attempts.length&&f.attempts[f.attempts.length-1].status==="terminated_violation"?f.attempts[f.attempts.length-1]:null,ve=f.attempts.find(Me=>Me.status==="in_progress"),je=f.attempts.filter(Me=>Me.status==="submitted"||Me.status==="terminated_violation").length,qe=f.status==="closed"&&f.makeupAccess&&Date.now()>=new Date(f.makeupAccess.opened_at).getTime()&&Date.now()<=new Date(f.makeupAccess.closes_at).getTime(),Ie=f.status==="closed"&&f.makeupAccess&&(qe||ve),Be=f.status==="started"||Ie;let ye="",Ae="";f.status==="announced"?ye='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':Be&&w.has(f.id)?ye='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':Be&&pe?ye='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':Be&&ve?(ye=`<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">${Ie?"กำลังทำสอบชดเชย":"กำลังทำอยู่"}</span>`,Ae=`<button onclick="window._stuStartQuiz('${f.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):Be&&je>=f.max_attempts?ye='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':Be?(ye=`<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${Ie?"bg-teal-50 text-teal-700 border border-teal-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${Ie?"เปิดสอบชดเชย":"เปิดสอบอยู่"}</span>`,Ae=`<button onclick="window._stuStartQuiz('${f.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):f.status==="closed"&&(ye='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),a.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${W(f.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${f.num_questions} ข้อ${f.time_limit_minutes?` · ${f.time_limit_minutes} นาที`:""} · ทำได้ ${je}/${f.max_attempts} ครั้ง</p>
            ${Q!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${Q.toFixed(1)}%</p>`:""}
            <div class="mt-1">${ye}</div>
            ${Ae}
          </div>
        </div>`)});const q=[m.day1_date,m.day2_date,m.day3_date,m.day4_date,m.day5_date,m.day6_date].filter(Boolean),O=new Date;O.setHours(0,0,0,0);const P=q.map(f=>{const Q=new Date(f);return Q.setHours(0,0,0,0),Q}).filter(f=>f>=O).sort((f,Q)=>f-Q);if(P.length>0){const f=P[0],Q=Math.round((f-O)/864e5),pe=Q===0?"🔴 วันนี้!":Q===1?"🟡 พรุ่งนี้":`⏰ อีก ${Q} วัน`,ve=Ze[f.getDay()]??"";a.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${ve}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${f.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${ze(Dt(f))}</p>
          </div>
          <span class="text-xs font-bold ${Q===0?"text-red-500":Q===1?"text-amber-500":"text-emerald-600"}">${pe}</span>
        </div>`)}const le={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},G=f=>{if(!f)return"";const Q=new Date(f),ve=Q-new Date,je=Math.floor(ve/6e4),qe=Q.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(ve<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${qe}</span>`;if(je<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${je} นาที · ${qe}</span>`;const Ie=Math.floor(je/60);return Ie<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${Ie} ชม. ${je%60} น. · ${qe}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(Ie/24)} วัน · ${qe}</span>`};return X.length>0&&[...X].sort((f,Q)=>(Q.priority||0)-(f.priority||0)).forEach(f=>{const Q=le[f.ann_type]??le.general,pe=f.ann_type==="deadline"&&f.deadline_at?G(f.deadline_at):"";a.push(`
          <div class="rounded-2xl border ${Q.border} ${Q.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${Q.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${f.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${Q.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${f.title??""}</p>
                ${f.body?`<p class="text-xs text-gray-500 mt-1">${f.body}</p>`:""}
                ${pe?`<div class="mt-2">${pe}</div>`:""}
                ${f.file_url?`<a href="${f.file_url}" target="_blank" rel="noopener"
                  class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">
                  📎 เปิดไฟล์แนบ →</a>`:""}
              </div>
            </div>
          </div>`)}),`
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-bold text-gray-800">✅ ภารกิจ / สิ่งที่ต้องทำ</h2>
      </div>
      ${a.length?`<div class="space-y-3">${a.join("")}</div>`:`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
          <p class="text-4xl mb-2">🎉</p>
          <p class="text-sm font-medium text-gray-500">ไม่มีรายการที่ต้องทำ</p>
          <p class="text-xs mt-1">ถ้าครูประกาศกำหนดสอบหรือแจ้งงานในรายวิชา ระบบจะแสดงพร้อมนับถอยหลังที่นี่</p>
        </div>`}`},B=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${j>0?`<span class="text-xs text-gray-400">${te.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${h.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${g(fe,_e,Ee,"bg-blue-50","📘 กลางภาค")}
            ${g(we,$e,Le,"bg-purple-50","📙 ปลายภาค")}
            ${g(xe,k,Z,"bg-indigo-50","🔢 คะแนนสูตร")}
            ${J.length?g(J,J.reduce((a,i)=>a+F(i),0),0,"bg-amber-50","⭐ คะแนนพิเศษ (ไม่รวมเกรด)"):""}
          </div>`}
    </div>
    ${be>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${he!==null?`<span class="text-xs text-gray-400">${ke}/${be} คาบ · ${he}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${R.map(a=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${a.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${Ys[a.status]??"bg-gray-50 text-gray-400"}">
            ${Us[a.status]??"?"}
          </span>
        </div>`).join("")}
      </div>
    </div>`:""}`,D=()=>`
    <button onclick="window._stuOpenRequest(${t})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${E.length?`<div class="space-y-3">${E.map(M).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,N=a=>a?new Date(a).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",re=(a,i)=>a.due_at?new Date(i).getTime()>new Date(a.due_at).getTime():!1,ue=a=>a.due_at?Date.now()>new Date(a.due_at).getTime():!1,K=a=>{var O,P;const i=a.mySubmission,A=(i==null?void 0:i.status)==="rejected",y=i?re(a,i.submitted_at):!1,q=!i&&ue(a);return`<div class="bg-white rounded-2xl border ${A?"border-red-200":i?"border-emerald-100":q?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${W(a.title)}</p>
        ${A?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':i?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${y?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${y?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${q?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${q?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${a.description?`<p class="text-xs text-gray-500 mb-1.5">${W(a.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${N(a.due_at)}</p>
      ${(O=a.attachment_urls)!=null&&O.length?`<div class="flex flex-wrap gap-1.5 mb-2">${a.attachment_urls.map(le=>`<a href="${W(le.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${W(le.name)}</a>`).join("")}</div>`:""}
      ${(P=i==null?void 0:i.file_urls)!=null&&P.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(i.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${i.file_urls.map(le=>`<a href="${W(le.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${W(le.name)}</a>`).join("")}</div></div>`:""}
      ${Ht(i)}
      ${i!=null&&i.teacher_feedback?A?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${W(i.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${W(i.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${A?"bg-red-600 text-white hover:bg-red-700":i?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${a.id}">${A?"📤 ส่งแก้ไขใหม่":i?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},z=n==="scores"?B():n==="requests"?D():n==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${r.length?`<div class="space-y-3">${r.map(K).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:se();ie(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${v()}
    ${_?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${b}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${W(_.topic)}</p>
      ${_.description?`<p class="text-xs text-indigo-400 mt-0.5">${W(_.description)}</p>`:""}
    </div>`:""}
    ${z}
  `),window._stuCancelRequest=async(a,i=t)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await It(a),V("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(i,"requests")}catch(A){V("ยกเลิกไม่สำเร็จ: "+ge(A),"error")}},window._stuStartQuiz=async a=>{try{const i=await Pt(a,e.id).catch(()=>null);if(i&&i.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${i.id}`;return}const A=await Rt(a);window.location.href=`quiz-exam.html?attempt=${A.id}`}catch(i){V("เข้าสอบไม่สำเร็จ: "+ge(i),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(a=>{a.addEventListener("click",()=>{const i=r.find(A=>A.id===parseInt(a.dataset.aid,10));i&&ee(i)})});function ee(a){var A;(A=document.getElementById("stu-submit-modal"))==null||A.remove();const i=document.createElement("div");i.id="stu-submit-modal",i.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📤 ส่งงาน — ${W(a.title)}</h3>
          <button id="ss-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">แนบไฟล์ (เลือกได้หลายไฟล์)</label>
          <input id="ss-files" type="file" multiple class="w-full text-xs" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">หมายเหตุถึงครู (ไม่บังคับ)</label>
          <textarea id="ss-note" rows="2" class="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
        </div>
        <button id="ss-submit" class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ส่งงาน</button>
      </div>`,document.body.appendChild(i),i.addEventListener("click",y=>{y.target===i&&i.remove()}),i.querySelector("#ss-close").addEventListener("click",()=>i.remove()),i.querySelector("#ss-submit").addEventListener("click",async()=>{var O;const y=[...i.querySelector("#ss-files").files??[]];if(!y.length&&!a.mySubmission){V("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const q=i.querySelector("#ss-submit");q.disabled=!0,q.textContent="กำลังส่ง...";try{const P=[];for(const G of y)P.push(await As(G,`class-${t}/student-${e.id}`));const le=P.length?P:((O=a.mySubmission)==null?void 0:O.file_urls)??[];await xs(a.id,e.id,le,i.querySelector("#ss-note").value.trim()||null),V("ส่งงานสำเร็จ ✅","success"),i.remove(),ma(e,t,"assignments")}catch(P){V("ส่งงานไม่สำเร็จ: "+ge(P),"error"),q.disabled=!1,q.textContent="ส่งงาน"}})}}async function ua(e){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const t=await pt(e.id).catch(()=>[]),n=`<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`;if(!t.length){ie(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${n}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`);return}ie(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} รายการ)</span></h2>
    ${n}
    <div class="space-y-3">
      ${t.map(o=>{var h,S;const c=Fe[o.status]??Fe.pending,m=o.classes,x=o.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((h=m==null?void 0:m.master_subjects)==null?void 0:h.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((S=m==null?void 0:m.master_subjects)==null?void 0:S.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${c.cls}">${c.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${o.request_type}</span></p>
            ${x?`<p>📝 หัวข้อ: <span class="text-gray-700">${x.assignment_name}</span></p>`:""}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${ze(o.requested_date)}</span>
              ${o.requested_period_no?` คาบ ${o.requested_period_no}`:""}</p>
            ${o.reason?`<p>💬 เหตุผล: <span class="text-gray-600">${o.reason}</span></p>`:""}
            ${o.teacher_comment?`<p class="${o.status==="approved"?"text-emerald-600":"text-red-500"}">
              👩‍🏫 ครู: ${o.teacher_comment}</p>`:""}
          </div>
          ${o.status==="pending"?`
          <button onclick="window._stuCancelRequest(${o.id})"
            class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">
            ✕ ยกเลิกคำร้อง
          </button>`:""}
        </div>`}).join("")}
    </div>
  `),window._stuCancelRequest=async o=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await It(o),V("ยกเลิกคำร้องแล้ว","success"),ua(e)}catch(c){V("ยกเลิกไม่สำเร็จ: "+ge(c),"error")}}}async function Wt(e){ie('<div class="text-center py-12 text-gray-400">กำลังโหลดข้อมูลแจ้งลา...</div>');let t;try{t=await js(e.id)}catch(h){ie(`<div class="rounded-2xl bg-white border border-red-100 p-5 text-sm text-red-600">โหลดรายการแจ้งลาไม่สำเร็จ: ${W(ge(h))}</div>`);return}const n={pending:"รอครูที่ปรึกษาตรวจ",approved:"ครูตรวจแล้ว · บันทึกเช็คชื่อ",rejected:"ไม่ผ่านการตรวจ",expired:"หมดอายุ · กรุณาส่งใหม่"},o={pending:"bg-amber-50 text-amber-700 border-amber-200",approved:"bg-emerald-50 text-emerald-700 border-emerald-200",rejected:"bg-red-50 text-red-600 border-red-200",expired:"bg-gray-100 text-gray-600 border-gray-200"},c={excused:"ก · ลากิจ",sick:"ป · ลาป่วย"},m=h=>h?new Date(`${h}T00:00:00`).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—";ie(`<div class="max-w-2xl mx-auto space-y-4">
    <section class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5">
      <h2 class="font-bold text-gray-800 text-lg">📄 ส่งใบลา</h2>
      <div class="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs leading-relaxed text-amber-900">
        <strong>ระบบนี้ใช้ส่งใบลาที่ฝ่ายปกครองอนุมัติแล้วให้ครูที่ปรึกษาตรวจ เพื่อบันทึกสถานะเช็คชื่อเท่านั้น</strong> ไม่ใช่การลาตามระเบียบโรงเรียน นักเรียนยังต้องยื่นใบลาและขออนุมัติจากฝ่ายปกครองตามปกติ การส่งใบลาในระบบนี้ยังไม่เปลี่ยนข้อมูลเช็คชื่อจนกว่าครูที่ปรึกษาจะตรวจและยืนยัน
      </div>
      <form id="student-leave-form" class="mt-4 space-y-3">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label class="text-xs font-semibold text-gray-600">ประเภท
            <select name="leave_type" required class="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm">
              <option value="excused">ก · ลากิจ</option><option value="sick">ป · ลาป่วย</option>
            </select>
          </label>
          <label class="text-xs font-semibold text-gray-600">ตั้งแต่วันที่
            <input name="start_date" type="date" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm">
          </label>
          <label class="text-xs font-semibold text-gray-600">ถึงวันที่
            <input name="end_date" type="date" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm">
          </label>
        </div>
        <label class="block text-xs font-semibold text-gray-600">รายละเอียดเพิ่มเติม <span class="font-normal text-gray-400">(ไม่บังคับ)</span>
          <textarea name="reason" rows="2" maxlength="500" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm" placeholder="ระบุข้อมูลเพิ่มเติมถึงครูที่ปรึกษา"></textarea>
        </label>
        <label class="block text-xs font-semibold text-gray-600">ใบลาที่ฝ่ายปกครองอนุมัติแล้ว <span class="text-red-500">*</span>
          <input name="proof" type="file" required accept="image/jpeg,image/png,application/pdf" class="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 p-2 text-xs">
          <span class="mt-1 block text-[11px] font-normal text-gray-400">JPG, PNG หรือ PDF ขนาดไม่เกิน 5 MB · หากคำขอยังไม่ถูกตรวจภายใน 7 วัน จะหมดอายุและลบไฟล์ ส่วนคำขอที่ยืนยันแล้วจะลบไฟล์หลังพ้นวันลาตามกำหนด</span>
        </label>
        <button type="submit" class="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700">ส่งใบลา</button>
      </form>
    </section>
    <section class="space-y-3">
      <h3 class="font-bold text-gray-800">ประวัติการแจ้งลา</h3>
      ${t.length?t.map(h=>`<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div class="flex items-start justify-between gap-3">
          <div><p class="font-bold text-gray-800">${c[h.leave_type]??"ลา"}</p><p class="mt-1 text-xs text-gray-500">${m(h.start_date)}${h.end_date!==h.start_date?` – ${m(h.end_date)}`:""}</p></div>
          <span class="rounded-full border px-2.5 py-1 text-[11px] font-semibold ${o[h.status]??""}">${n[h.status]??h.status}</span>
        </div>
        ${h.reason?`<p class="mt-2 whitespace-pre-wrap text-xs text-gray-600">${W(h.reason)}</p>`:""}
        ${h.teacher_comment?`<p class="mt-2 rounded-lg bg-gray-50 p-2 text-xs text-gray-600">หมายเหตุครู: ${W(h.teacher_comment)}</p>`:""}
        <div class="mt-3 flex items-center justify-between gap-2">
          <button type="button" class="student-leave-proof text-xs font-semibold text-indigo-600 hover:text-indigo-800" data-proof-path="${W(h.proof_path??"")}" ${h.proof_path?"":"disabled"}>${h.proof_path?"เปิดใบลาที่แนบ":"ไฟล์หลักฐานถูกลบแล้ว"}</button>
          ${h.status==="approved"?`<span class="text-[11px] text-emerald-700">บันทึกสถานะเช็คชื่อแล้ว ${Number(h.attendance_rows_count)||0} รายการ</span>`:""}
        </div>
      </article>`).join(""):'<div class="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-400">ยังไม่มีรายการแจ้งลา</div>'}
    </section>
  </div>`);const x=document.getElementById("student-leave-form");x==null||x.addEventListener("submit",async h=>{h.preventDefault();const S=new FormData(x),R=x.querySelector('[type="submit"]'),T=String(S.get("start_date")??""),X=String(S.get("end_date")??"");if(T>X){V("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มลา","warning");return}R.disabled=!0,R.textContent="กำลังส่ง...";try{await Cs(e,{leaveType:S.get("leave_type"),startDate:T,endDate:X,reason:S.get("reason"),file:S.get("proof")}),V("ส่งใบลาให้ครูที่ปรึกษาตรวจแล้ว","success"),await Wt(e)}catch(d){V(`ส่งใบลาไม่สำเร็จ: ${ge(d)}`,"error"),R.disabled=!1,R.textContent="ส่งใบลา"}}),document.querySelectorAll(".student-leave-proof").forEach(h=>h.addEventListener("click",async()=>{try{await qs(h.dataset.proofPath)}catch(S){V(`เปิดหลักฐานไม่สำเร็จ: ${ge(S)}`,"error")}}))}async function Fa(e,t){var _e,$e,Se;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[n,o]=await Promise.all([et(e.id).catch(()=>[]),ns(e.id).catch(()=>0)]),c=n.find(k=>k.id===t);if(!c){ie('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(o>=2){ie(`
      <button onclick="window._stuOpenClassTab(${t},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const m=o===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",x=c.master_subjects,h=x==null?void 0:x.teacher_id,S=x==null?void 0:x.teachers,R=h?(S==null?void 0:S.full_name)??"ครูผู้สอน":"ครูผู้สอน",T=String(R||"ค").trim().charAt(0).toUpperCase()||"ค",X=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||c.class_name||"—";let d=null;const[r,p,w]=await Promise.all([os(t).catch(()=>[]),h?ls(h,t).catch(k=>(d=k,[])):Promise.resolve([]),ds().catch(()=>[])]),C=r.filter(k=>k.column_type!=="override"),b={};for(const k of p){b[`${k.day_of_week}_${k.period_no}`]=k;const Z=k.span_periods??1;for(let U=1;U<Z;U++)b[`${k.day_of_week}_${k.period_no+U}`]={...k,_secondary:!0}}const _=p.length>0;if(!_){ie(`
      <button onclick="window._stuOpenClassTab(${t}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(x==null?void 0:x.subject_name)??""} · ${Ce(c.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${h?d?`ระบบอ่านตารางครูไม่สำเร็จ: ${d.message??d}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${h?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const E="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",L=E+" cursor-pointer";let Y=null,ae=0;const de=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],F=(k,Z,U=null)=>{const ne=String(k??"").trim(),j=String(Z??"").trim();return ne&&j?`${ne} — ${j}`:ne||(U!=null?String(U):"")},J=k=>{const Z=de[k%de.length];return`${Z.bg} ${Z.text}`};let xe={};try{xe=JSON.parse(localStorage.getItem(`scheduleColors_${h??"x"}`)??"{}")}catch{}const fe={};let we=0;p.forEach(k=>{const Z=F(k.subject_name,k.class_name,k.subject_id);if(!Z||fe[Z]!=null)return;const U=xe[Z]??xe[k.subject_id]??xe[k.subject_name],ne=Number(U);fe[Z]=Number.isFinite(ne)?ne:we++});const Ee=(k=0)=>{const Z=[0,1,2,3,4,5],U={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},ne={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},j=dt(k),te=new Date;te.setHours(0,0,0,0);const ce=Z.map(oe=>{const be=j[oe];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${ne[oe]}">
        <p class="text-sm font-bold text-gray-700">${U[oe]}</p>
        <p class="text-xs text-gray-400">${be.getDate()}/${be.getMonth()+1}</p>
      </th>`}).join(""),me=w.map(oe=>{var u,s;const be=((u=oe.start_time)==null?void 0:u.slice(0,5))??"",ke=((s=oe.end_time)==null?void 0:s.slice(0,5))??"",he=Z.map(l=>{const $=`${l}_${oe.period_no}`,g=b[$];if(g!=null&&g._secondary)return"";const v=j[l]<te;if(!g)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${oe.period_no}" data-day="${l}" data-week-offset="${k}"
              ${v?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${v?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${v?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${v?"ล็อก":"＋"}</span>
            </button>
          </td>`;const M=g.span_periods??1,se=F(g.subject_name,g.class_name,g.subject_id),B=fe[se]??0,D=J(B);return`<td class="border border-gray-100 p-0" style="height:1px" ${M>1?`rowspan="${M}"`:""}>
          <div class="w-full h-full ${D} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${g.subject_name??"ไม่ว่าง"}</p>
            ${g.class_name?`<p class="text-[10px] opacity-80 leading-tight">${Ce(g.class_name)}</p>`:""}
            ${g.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${g.teacher_name}</p>`:""}
            ${M>1?`<p class="text-[9px] opacity-40 mt-0.5">${M} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${oe.period_no}</p>
          <p class="text-[10px] text-gray-400">${be}–${ke}</p>
        </td>
        ${he}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${ce}
          </tr>
        </thead>
        <tbody>${me}</tbody>
      </table>
    </div>`},Le=k=>{const Z=dt(k);return`${k===0?"สัปดาห์นี้":k===1?"สัปดาห์หน้า":`อีก ${k} สัปดาห์`} (${Je(Z[0])} - ${Je(Z[5])})`};if(ie(`
    <button onclick="window._stuOpenClass(${t})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(x==null?void 0:x.subject_name)??""} · ${Ce(c.class_name)}</p>
      ${m}

      ${_?`
      <div id="schedule-first-gate" class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-bold text-emerald-800">เลือกคาบว่างของครูก่อน</p>
        <p class="mt-1 text-xs text-emerald-600">ระบบจะเปิดตารางสอนให้เลือกวันและคาบ แล้วค่อยกรอกข้อมูลคำร้องต่อ</p>
      </div>`:""}

      <form id="req-form" class="space-y-4 ${_?"hidden":""}">
        <!-- ประเภทคำร้อง -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">ประเภทคำร้อง <span class="text-red-400">*</span></label>
          <div class="grid grid-cols-2 gap-2">
            <label class="req-type-opt flex items-center gap-2 border-2 border-gray-200 rounded-xl px-3 py-3 cursor-pointer has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50 transition">
              <input type="radio" name="req_type" value="สอบย้อนหลัง" class="accent-indigo-500" required />
              <span class="text-sm font-medium text-gray-700">สอบย้อนหลัง</span>
            </label>
            <label class="req-type-opt flex items-center gap-2 border-2 border-gray-200 rounded-xl px-3 py-3 cursor-pointer has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50 transition">
              <input type="radio" name="req_type" value="สอบปรับคะแนน" class="accent-indigo-500" />
              <span class="text-sm font-medium text-gray-700">สอบปรับคะแนน</span>
            </label>
          </div>
        </div>

        <!-- หัวข้อคะแนน -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">หัวข้อคะแนนที่ต้องการสอบ <span class="text-red-400">*</span></label>
          <select id="req-col" class="${L}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${C.map(k=>`<option value="${k.id}">${k.assignment_name} (${k.assignment_type} · เต็ม ${k.max_score})</option>`).join("")}
          </select>
        </div>

        <!-- Schedule grid / manual date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันและคาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${_?`
          <button type="button" id="open-schedule-modal"
            class="w-full border-2 border-emerald-200 rounded-xl px-4 py-3 text-left bg-emerald-50 hover:bg-emerald-100 transition">
            <p class="text-sm font-semibold text-emerald-700">ดูตารางครูและเลือกคาบว่าง</p>
            <p id="schedule-picker-label" class="text-xs text-emerald-500 mt-0.5">แตะเพื่อเปิดตารางสอนของครูในสัปดาห์นี้</p>
          </button>
          <div id="period-summary" class="hidden mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p class="text-sm font-semibold text-emerald-700">✅ เลือกแล้ว: <span id="period-summary-text"></span></p>
          </div>
          <input type="hidden" id="req-date" />
          <input type="hidden" id="req-period-hidden" />
          `:`
          <!-- No schedule data: show manual inputs -->
          <div class="space-y-3">
            <div>
              <label class="block text-xs text-gray-500 mb-1">วันที่ขอสอบ</label>
              <input type="date" id="req-date" class="${E}"
                min="${Dt(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${L}" required>
                <option value="">— เลือกคาบ —</option>
                ${w.map(k=>`<option value="${k.period_no}">คาบ ${k.period_no} (${k.start_time.slice(0,5)}–${k.end_time.slice(0,5)})</option>`).join("")}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${E} resize-none"
            placeholder="ระบุเหตุผลที่ขาดสอบ..."></textarea>
        </div>

        <button type="submit" id="req-submit"
          class="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ยื่นคำร้อง
        </button>
      </form>
    </div>
    ${_?`
      <div id="teacher-schedule-modal" class="hidden fixed inset-0 z-[120] bg-black/50 p-4 items-center justify-center">
        <div class="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold shadow-sm">
                ${S!=null&&S.image_url?`<img src="${S.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${T}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${R} · ${(x==null?void 0:x.subject_name)??""}</p>
                <p class="text-[11px] text-gray-400 mt-0.5 truncate">นักเรียน ${(e==null?void 0:e.full_name)??"—"} · รหัส ${(e==null?void 0:e.student_code)??"—"} · ห้อง ${X}</p>
              </div>
            </div>
            <button type="button" id="close-schedule-modal"
              class="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600">×</button>
          </div>
          <div class="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p class="text-[11px] text-emerald-600 font-medium">กรุณาเลือกคาบว่างก่อนกรอกคำร้อง · ช่องว่างที่ไม่ถูกล็อกเลือกได้</p>
            <select id="schedule-week-select"
              class="border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200">
              ${[0,1,2,3,4].map(k=>`<option value="${k}">${Le(k)}</option>`).join("")}
            </select>
          </div>
          <div id="schedule-grid-wrap">${Ee(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(k=>{k.addEventListener("change",()=>{var ne;const Z=document.getElementById("req-reason-wrap"),U=k.value==="สอบย้อนหลัง";Z.classList.toggle("hidden",!U),(ne=document.getElementById("req-reason"))==null||ne.toggleAttribute("required",U)})}),_){const k=document.getElementById("teacher-schedule-modal");(_e=document.getElementById("open-schedule-modal"))==null||_e.addEventListener("click",()=>{k==null||k.classList.remove("hidden"),k==null||k.classList.add("flex")}),($e=document.getElementById("close-schedule-modal"))==null||$e.addEventListener("click",()=>{var U;if(!Y){(U=window._stuOpenClassTab)==null||U.call(window,t,"requests");return}k==null||k.classList.add("hidden"),k==null||k.classList.remove("flex")}),k==null||k.addEventListener("click",U=>{U.target===k&&Y&&(k.classList.add("hidden"),k.classList.remove("flex"))});const Z=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(U=>{U.addEventListener("click",()=>{var he,u;const ne=parseInt(U.dataset.period),j=parseInt(U.dataset.day),te=parseInt(U.dataset.weekOffset??ae),me=dt(te)[j];Y={period_no:ne,day_of_week:j,date:me,week_offset:te},document.getElementById("req-date").value=Ne(me),document.getElementById("req-period-hidden").value=ne;const oe=document.getElementById("period-summary"),be=document.getElementById("period-summary-text");oe==null||oe.classList.remove("hidden"),be&&(be.textContent=`คาบ ${ne} วัน${Ze[j]??""} ${Je(me)}`);const ke=document.getElementById("schedule-picker-label");ke&&(ke.textContent=`เลือกคาบ ${ne} วัน${Ze[j]??""} ${Je(me)} แล้ว`),(he=document.getElementById("schedule-first-gate"))==null||he.classList.add("hidden"),(u=document.getElementById("req-form"))==null||u.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(s=>{s.classList.toggle("ring-2",s===U),s.classList.toggle("ring-emerald-500",s===U),s.classList.toggle("bg-emerald-200",s===U)}),k==null||k.classList.add("hidden"),k==null||k.classList.remove("flex")})})};Z(),(Se=document.getElementById("schedule-week-select"))==null||Se.addEventListener("change",U=>{ae=parseInt(U.target.value||"0");const ne=document.getElementById("schedule-grid-wrap");ne&&(ne.innerHTML=Ee(ae)),Z()}),setTimeout(()=>{k==null||k.classList.remove("hidden"),k==null||k.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async k=>{var me,oe,be,ke,he;k.preventDefault();const Z=document.getElementById("req-submit"),U=(me=document.querySelector('input[name="req_type"]:checked'))==null?void 0:me.value,ne=document.getElementById("req-col").value,j=((oe=document.getElementById("req-reason"))==null?void 0:oe.value.trim())||null,te=(be=document.getElementById("req-date"))==null?void 0:be.value,ce=_?(ke=document.getElementById("req-period-hidden"))==null?void 0:ke.value:(he=document.getElementById("req-period-sel"))==null?void 0:he.value;if(!U||!ne||!te||!ce){if(V("กรุณากรอกข้อมูลให้ครบ","warning"),_&&!ce){V("กรุณาเลือกคาบว่างจากตารางครู","warning");const u=document.getElementById("teacher-schedule-modal");u==null||u.classList.remove("hidden"),u==null||u.classList.add("flex")}return}if(U==="สอบย้อนหลัง"&&!j){V("กรุณาระบุเหตุผล","warning");return}Z.disabled=!0,Z.textContent="กำลังยื่น...";try{await is({student_id:e.id,class_id:t,assignment_id:parseInt(ne),request_type:U,requested_date:te,requested_period_no:parseInt(ce),reason:U==="สอบย้อนหลัง"?j:null,status:"pending"}),V("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(t,"requests")}catch(u){V("ยื่นไม่สำเร็จ: "+ge(u),"error")}finally{Z.disabled=!1,Z.textContent="ยื่นคำร้อง"}})}async function Qa(e,t){var h,S,R,T,X;const n=()=>`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-5 py-3 border-b border-gray-50">
          <p class="text-sm font-semibold text-gray-700">💬 ติดต่อแอดมิน</p>
        </div>
        <div class="p-4 grid grid-cols-2 gap-3">
          <button id="btn-stu-contact-admin" type="button"
            class="flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition">
            <span class="text-2xl">📞</span>
            <span class="text-xs font-semibold text-gray-700">ติดต่อผู้ดูแล</span>
          </button>
          <button id="btn-stu-pw-reset" type="button"
            class="flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition">
            <span class="text-2xl">🔑</span>
            <span class="text-xs font-semibold text-gray-700">รีเซ็ทรหัสผ่าน</span>
          </button>
        </div>
      </div>`;ie(`
    <h2 class="font-bold text-gray-800 mb-4">👤 โปรไฟล์ของฉัน</h2>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4 flex flex-col gap-4 relative overflow-hidden min-h-[15rem]">
      <div class="flex w-full items-center gap-4">
        <!-- Specular vertical frame with 3D shadow and sheen -->
        <div class="relative w-[84px] h-[112px] sm:w-24 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-white shadow-[0_8px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.7)] flex items-center justify-center">
          <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/35 pointer-events-none z-10"></div>
          <div class="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none z-20"></div>
          ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover relative z-0"/>`:`<span class="text-white text-3xl font-bold bg-gradient-to-tr from-emerald-400 to-teal-400 w-full h-full flex items-center justify-center select-none relative z-0">${(e.full_name??"น").charAt(0)}</span>`}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-lg sm:text-xl leading-snug break-words">${e.full_name}</p>
          <p class="text-sm text-gray-400 mt-1">รหัส ${e.student_code}</p>
          <p class="text-sm text-gray-500 mt-0.5">ห้อง ${e.main_room??"—"}</p>
          ${e.religion_room?`<p class="text-sm text-gray-500 mt-0.5">ห้องศาสนา ${e.religion_room}</p>`:""}
        </div>
      </div>
      <div class="grid w-full grid-cols-4 gap-2 border-t border-gray-100 pt-4">
        <button id="btn-show-my-qr" class="flex min-h-16 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-xl border border-emerald-100 bg-emerald-50 px-1 py-2 text-emerald-600 shadow-sm transition hover:bg-emerald-100 active:scale-95" title="แสดง QR Code ของฉัน">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 3h6v6H3V3zm2 2v2h2V5H5z"/>
            <path d="M15 3h6v6h-6V3zm2 2v2h2V5h-2z"/>
            <path d="M3 15h6v6H3v-6zm2 2v2h2v-2H5z"/>
            <path d="M10 3h2v2h-2V3zm0 4h2v2h-2V7zm3 0h2v2h-2V7zm0-4h2v2h-2V3zm5 8h2v2h-2v-2zm-3 2h2v2h-2v-2zm3 3h2v2h-2v-2zm-3 3h2v2h-2v-2zm-3-3h2v2h-2v-2zm-3 3h2v2h-2v-2zm6-3h2v2h-2v-2zm3-3h2v2h-2v-2z"/>
          </svg>
          <span class="text-center text-[9px] font-semibold leading-tight sm:text-[11px]">QR Code</span>
        </button>
        <button id="btn-show-my-leave" class="flex min-h-16 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-xl border border-amber-100 bg-amber-50 px-1 py-2 text-amber-600 shadow-sm transition hover:bg-amber-100 active:scale-95" title="ใบอนุญาตออกนอกห้อง" aria-label="ใบอนุญาตออกนอกห้อง">
          <span class="text-xl leading-none" aria-hidden="true">🚪</span>
          <span class="text-center text-[9px] font-semibold leading-tight sm:text-[11px]">ออกนอกห้อง</span>
        </button>
        <button id="btn-stu-leave-request" class="flex min-h-16 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-xl border border-indigo-100 bg-indigo-50 px-1 py-2 text-indigo-600 shadow-sm transition hover:bg-indigo-100 active:scale-95" title="ส่งใบลาที่ฝ่ายปกครองอนุมัติแล้วให้ครูที่ปรึกษาตรวจเพื่อบันทึกเช็คชื่อ" aria-label="ส่งใบลาให้ครูที่ปรึกษาตรวจ">
          <span class="text-xl leading-none" aria-hidden="true">📄</span>
          <span class="text-center text-[9px] font-semibold leading-tight sm:text-[11px]">ส่งใบลา</span>
        </button>
        <button id="btn-request-qr-card" class="flex min-h-16 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-xl border border-pink-100 bg-pink-50 px-1 py-2 text-pink-600 shadow-sm transition hover:bg-pink-100 active:scale-95" title="แจ้งขอทำบัตร QR Code">
          <span class="text-xl leading-none" aria-hidden="true">🎫</span>
          <span class="text-center text-[9px] font-semibold leading-tight sm:text-[11px]">ขอบัตร QR</span>
        </button>
      </div>
    </div>

    <button type="button" id="btn-stu-my-certificates-profile" class="relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl border border-amber-400 shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4 hover:opacity-95 active:scale-[0.98] transition-all w-full text-left">
      <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">🎖️</div>
      <div class="min-w-0 z-10">
        <h4 class="font-bold text-xs sm:text-sm">🎖️ เกียรติบัตรของฉัน</h4>
        <p class="text-[10px] text-amber-50 mt-0.5">เกียรติบัตรทั้งหมดที่นักเรียนได้รับ</p>
      </div>
      <span class="relative z-10 px-3 py-1.5 bg-white text-amber-700 font-bold text-[10px] rounded-xl shadow flex-shrink-0">
        📄 เปิดดู
      </span>
    </button>

    ${n()}

    <button id="stu-logout-btn"
      class="w-full py-3.5 rounded-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold text-sm
             shadow-md shadow-red-200/60 transition flex items-center justify-center gap-2">
      🚪 ออกจากระบบ
    </button>

    <p class="text-center text-[10px] text-gray-300 mt-4 leading-relaxed">
      พัฒนาโดย <span class="text-gray-400 font-medium">KruHambalWaji</span><br/>
      ปพ.5 ออนไลน์ © 2026 v${Ps}
    </p>
  `),(h=document.getElementById("btn-stu-my-certificates-profile"))==null||h.addEventListener("click",()=>Ot(e)),(S=document.getElementById("btn-stu-leave-request"))==null||S.addEventListener("click",()=>Wt(e)),(R=document.getElementById("btn-stu-contact-admin"))==null||R.addEventListener("click",()=>{var d;(d=window._openFeedbackWidget)==null||d.call(window)}),(T=document.getElementById("btn-stu-pw-reset"))==null||T.addEventListener("click",()=>{o()});function o(){var r;(r=document.getElementById("pw-choice-modal"))==null||r.remove();const d=document.createElement("div");d.id="pw-choice-modal",d.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",d.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center space-y-4 animate-fade">
        <div class="text-4xl">🔑</div>
        <p class="font-bold text-gray-800">ต้องการเปลี่ยนรหัสผ่านแบบไหน?</p>
        <div class="space-y-2.5">
          <button id="pwc-self" class="w-full py-3 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition text-sm font-semibold text-gray-700">
            ✏️ เปลี่ยนด้วยตนเอง
          </button>
          <button id="pwc-admin" class="w-full py-3 rounded-2xl text-white text-sm font-semibold transition"
            style="background:linear-gradient(135deg,#db2777,#9d174d);">
            📨 ส่งคำขอให้ครูที่ปรึกษา
          </button>
        </div>
        <button id="pwc-cancel" class="text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>`,document.body.appendChild(d),d.addEventListener("click",p=>{p.target===d&&d.remove()}),d.querySelector("#pwc-cancel").addEventListener("click",()=>d.remove()),d.querySelector("#pwc-self").addEventListener("click",()=>{d.remove(),m()}),d.querySelector("#pwc-admin").addEventListener("click",()=>{d.remove(),c(e)})}function c(d){var de;(de=document.getElementById("stu-password-reset-request-modal"))==null||de.remove();const r=document.createElement("div");r.id="stu-password-reset-request-modal",r.className="fixed inset-0 z-[500] overflow-y-auto bg-white sm:flex sm:items-center sm:justify-center sm:bg-black/60 sm:p-4",r.innerHTML=`
      <div class="mx-auto flex min-h-[100dvh] w-full max-w-xl flex-col sm:min-h-0 sm:max-h-[92dvh] sm:rounded-3xl sm:bg-white sm:shadow-2xl">
        <header class="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div><h3 class="font-bold text-gray-800">🔑 ขอรีเซ็ตรหัสผ่าน</h3><p class="mt-1 text-xs text-gray-500">ครูที่ปรึกษาต้องตรวจสอบนักเรียนต่อหน้าก่อนยืนยัน</p></div>
          <button type="button" data-request-close class="rounded-full px-3 py-2 text-2xl leading-none text-gray-400">×</button>
        </header>
        <div class="flex-1 space-y-4 overflow-y-auto p-5">
          <div class="grid grid-cols-2 gap-2">
            <button type="button" data-request-kind="self" class="rounded-xl border px-3 py-3 text-sm font-semibold">🙋 ขอให้ฉันเอง</button>
            <button type="button" data-request-kind="friend" class="rounded-xl border px-3 py-3 text-sm font-semibold">📣 แจ้งรีเซ็ตให้เพื่อน</button>
          </div>
          <div class="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-800" data-request-warning></div>
          <label class="block text-sm font-semibold text-gray-600">รหัสนักเรียน</label>
          <div class="flex gap-2"><input data-request-code class="min-w-0 flex-1 rounded-xl border border-gray-300 px-4 py-3 text-base" inputmode="numeric" autocomplete="off"><button type="button" data-request-search class="rounded-xl border border-indigo-200 px-4 text-sm font-semibold text-indigo-700">ค้นหา</button></div>
          <div data-request-preview class="hidden rounded-2xl border border-gray-200 bg-gray-50 p-4"></div>
          <div data-request-result class="hidden rounded-xl px-4 py-3 text-sm leading-relaxed"></div>
        </div>
        <footer class="border-t border-gray-100 p-5"><button type="button" data-request-submit class="w-full rounded-2xl bg-pink-600 py-3.5 font-bold text-white shadow">ส่งคำขอให้ครูที่ปรึกษา</button></footer>
      </div>`,document.body.appendChild(r);let p="self",w=d;const C=r.querySelector("[data-request-code]"),b=r.querySelector("[data-request-preview]"),_=r.querySelector("[data-request-warning]"),E=r.querySelector("[data-request-result]"),L=r.querySelector("[data-request-submit]"),Y=()=>{const F=w;if(!F){b.classList.add("hidden"),b.innerHTML="";return}const J=F.image_url||F.photo_url;b.classList.remove("hidden"),b.innerHTML=`<div class="flex items-center gap-3">${J?`<img src="${W(J)}" alt="" class="h-16 w-14 rounded-xl border border-gray-200 object-cover">`:`<div class="grid h-16 w-14 place-items-center rounded-xl bg-indigo-50 font-bold text-indigo-600">${W((F.full_name||"?").charAt(0))}</div>`}<div><p class="font-bold text-gray-800">${W(F.full_name||"")}</p><p class="text-sm text-gray-500">${W(F.student_code||"")} · ${W(F.main_room||F.religion_room||"—")}</p></div></div>`},ae=F=>{p=F,r.querySelectorAll("[data-request-kind]").forEach(J=>{const xe=J.dataset.requestKind===F;J.className=`rounded-xl border px-3 py-3 text-sm font-semibold ${xe?"border-indigo-300 bg-indigo-50 text-indigo-700":"border-gray-200 text-gray-500"}`}),F==="self"?(w=d,C.value=d.student_code||"",C.readOnly=!0,_.textContent="ครูจะรีเซ็ตรหัสของคุณหลังตรวจสอบตัวตนต่อหน้า และจะแจ้งรหัสชั่วคราวให้คุณโดยตรง",r.querySelector("[data-request-search]").classList.add("hidden")):(w=null,C.value="",C.readOnly=!1,_.textContent="คุณต้องพาเพื่อนเจ้าของบัญชีมาพบครูที่ปรึกษาด้วยตนเอง ครูจะยืนยันความยินยอมก่อนรีเซ็ต และจะบอกรหัสใหม่กับเพื่อนโดยตรง",r.querySelector("[data-request-search]").classList.remove("hidden")),E.classList.add("hidden"),Y()};r.querySelectorAll("[data-request-kind]").forEach(F=>F.addEventListener("click",()=>ae(F.dataset.requestKind))),r.querySelector("[data-request-close]").addEventListener("click",()=>r.remove()),r.querySelector("[data-request-search]").addEventListener("click",async()=>{const F=C.value.trim();if(!F){V("กรุณากรอกรหัสนักเรียนของเพื่อน","warning");return}try{if(w=await ct(F),!w)throw new Error("ไม่พบนักเรียนรหัสนี้");Y()}catch(J){V(ge(J)||"ค้นหานักเรียนไม่สำเร็จ","error")}}),L.addEventListener("click",async()=>{if(!w||C.value.trim()!==String(w.student_code)){V(p==="friend"?"กรุณาค้นหาเพื่อนก่อนส่งคำขอ":"ตรวจสอบรหัสนักเรียนไม่สำเร็จ","warning");return}L.disabled=!0,L.textContent="กำลังส่งคำขอ...";try{await Is(C.value,p),E.className="rounded-xl bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-800",E.textContent=p==="friend"?"ส่งคำขอแล้ว กรุณาพาเพื่อนเจ้าของบัญชีมาพบครูที่ปรึกษาเพื่อยืนยันตัวตนและความยินยอม":"ส่งคำขอแล้ว กรุณามาพบครูที่ปรึกษาเพื่อยืนยันตัวตนและรับรหัสชั่วคราว",E.classList.remove("hidden"),L.textContent="ส่งคำขอแล้ว"}catch(F){V(`ส่งคำขอไม่สำเร็จ: ${ge(F)}`,"error"),L.disabled=!1,L.textContent="ส่งคำขอให้ครูที่ปรึกษา"}}),ae("self")}function m(){var r;(r=document.getElementById("self-pw-modal"))==null||r.remove();const d=document.createElement("div");d.id="self-pw-modal",d.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",d.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 space-y-4 animate-fade">
        <h3 class="font-bold text-gray-700 text-sm flex items-center gap-1.5">🔒 เปลี่ยนรหัสผ่าน</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-semibold text-gray-400 mb-1">รหัสผ่านใหม่ (อย่างน้อย 6 ตัว)</label>
            <input id="stu-new-pw" type="password" placeholder="รหัสผ่านใหม่"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-400 mb-1">ยืนยันรหัสผ่านใหม่</label>
            <input id="stu-new-pw-confirm" type="password" placeholder="พิมพ์ยืนยันอีกครั้ง"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition" />
          </div>
          <button id="btn-stu-save-pw"
            class="w-full py-2.5 rounded-xl bg-gray-700 hover:bg-gray-800 active:bg-gray-900 text-white font-semibold text-sm transition">
            บันทึกรหัสผ่านใหม่
          </button>
          <div id="stu-pw-msg" class="hidden text-xs text-center py-2.5 rounded-xl"></div>
        </div>
        <button id="self-pw-close" class="w-full text-xs text-gray-400 hover:text-gray-600">ปิด</button>
      </div>`,document.body.appendChild(d),d.addEventListener("click",p=>{p.target===d&&d.remove()}),d.querySelector("#self-pw-close").addEventListener("click",()=>d.remove()),d.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const p=d.querySelector("#btn-stu-save-pw"),w=d.querySelector("#stu-new-pw").value,C=d.querySelector("#stu-new-pw-confirm").value,b=d.querySelector("#stu-pw-msg"),_=(E,L)=>{b.className=`text-xs text-center py-2.5 rounded-xl ${L?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,b.textContent=E,b.classList.remove("hidden")};if(!w||w.length<6){_("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if(w!==C){_("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}p.disabled=!0,p.textContent="กำลังบันทึก...",b.classList.add("hidden");try{const{error:E}=await Te.auth.updateUser({password:w});if(E)throw E;_("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),d.querySelector("#stu-new-pw").value="",d.querySelector("#stu-new-pw-confirm").value=""}catch(E){_("ไม่สำเร็จ: "+ge(E),!0)}finally{p.disabled=!1,p.textContent="บันทึกรหัสผ่านใหม่"}})}(X=document.getElementById("stu-logout-btn"))==null||X.addEventListener("click",()=>{var r;(r=document.getElementById("stu-logout-confirm"))==null||r.remove();const d=document.createElement("div");d.id="stu-logout-confirm",d.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",d.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-4xl mb-3">🚪</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ออกจากระบบ?</h3>
        <p class="text-xs text-gray-400 mb-6">คุณต้องการออกจากระบบใช่ไหมครับ</p>
        <div class="flex gap-3">
          <button id="stu-logout-cancel"
            class="flex-1 py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition">
            ยกเลิก
          </button>
          <button id="stu-logout-confirm-btn"
            class="flex-1 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm shadow-md shadow-red-200/60 transition">
            ยืนยัน
          </button>
        </div>
      </div>`,document.body.appendChild(d),d.querySelector("#stu-logout-cancel").addEventListener("click",()=>d.remove()),d.addEventListener("click",p=>{p.target===d&&d.remove()}),d.querySelector("#stu-logout-confirm-btn").addEventListener("click",t)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{xa(e)});const x=()=>{var r,p;(r=document.getElementById("qr-request-confirm"))==null||r.remove(),(p=document.getElementById("qr-request-existing"))==null||p.remove();const d=document.createElement("div");d.id="qr-request-existing",d.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",d.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <h3 class="text-base font-bold text-gray-800">คุณเคยแจ้งขอทำบัตรแล้ว</h3>
        <p class="text-sm text-gray-600 leading-relaxed">กรุณารอแอดมินดำเนินการ และติดตามข้อความตอบกลับในหน้าข้อความเพื่อมารับ QR Code</p>
        <div class="flex gap-2">
          <button id="qr-request-existing-close" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
          <button id="qr-request-existing-messages" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ไปที่ข้อความ</button>
        </div>
      </div>`,document.body.appendChild(d),d.addEventListener("click",w=>{w.target===d&&d.remove()}),d.querySelector("#qr-request-existing-close").addEventListener("click",()=>d.remove()),d.querySelector("#qr-request-existing-messages").addEventListener("click",()=>{var w;d.remove(),(w=window._openFeedbackWidget)==null||w.call(window,void 0,void 0,"history")})};document.getElementById("btn-request-qr-card").addEventListener("click",async()=>{var r;try{if(await ft(e.id)){x();return}}catch(p){V("ตรวจสอบคำขอเดิมไม่สำเร็จ: "+ge(p),"error");return}(r=document.getElementById("qr-request-confirm"))==null||r.remove();const d=document.createElement("div");d.id="qr-request-confirm",d.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",d.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(d),d.addEventListener("click",p=>{p.target===d&&d.remove()}),d.querySelector("#qr-request-cancel").addEventListener("click",()=>d.remove()),d.querySelector("#qr-request-ok").addEventListener("click",async()=>{const p=d.querySelector("#qr-request-ok");p.disabled=!0,p.textContent="กำลังส่ง...";try{if(await ft(e.id)){x();return}await Jt({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),Kt({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),d.remove(),V("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch(w){if((w==null?void 0:w.code)==="23505"||String((w==null?void 0:w.message)??"").includes("QR_REISSUE_REQUEST_ALREADY_OPEN")){x();return}p.disabled=!1,p.textContent="ยืนยัน",V("ส่งไม่สำเร็จ: "+ge(w),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var xe;const d=window._pp5SystemCfg??await Qe().catch(()=>({})),r=parseInt(d.studentQrDailyLimit||"3",10),p=parseInt(d.studentQrExpirySeconds||"60",10),w=`qr_generation_logs_${e.id}`,C=Ne(new Date);let b=JSON.parse(localStorage.getItem(w)||"null");if((!b||b.date!==C)&&(b={date:C,count:0}),b.count>=r){V(`คุณสร้าง QR Code ครบโควต้า ${r} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}b.count+=1,localStorage.setItem(w,JSON.stringify(b)),(xe=document.getElementById("student-qr-modal"))==null||xe.remove();const _=document.createElement("div");_.id="student-qr-modal",_.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",_.innerHTML=`
      <div class="text-center w-full max-w-sm">
        <div class="mb-5">
          <h3 class="text-2xl font-bold text-gray-800">🎫 QR Code ของฉัน</h3>
          <p class="text-sm font-semibold text-emerald-600 mt-1">${e.full_name}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส: ${e.student_code} · ห้อง: ${Ce(e.main_room)}</p>
        </div>
        
        <div class="relative w-64 h-64 mx-auto mb-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
          <canvas id="student-qr-canvas" class="w-56 h-56 object-contain"></canvas>
        </div>

        <div class="mb-8 px-4">
          <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-2.5">
            <div id="qr-timer-bar" class="bg-emerald-500 h-full w-full transition-all duration-1000 ease-linear"></div>
          </div>
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${p}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${r-b.count} / ${r} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(_);const E=_.querySelector("#student-qr-canvas"),L=Math.floor(Date.now()/1e3),Y=`SQ:${e.student_code}:${L}`;try{await Rs.toCanvas(E,Y,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(fe){console.error("Failed to draw QR Code:",fe),V("สร้าง QR Code ไม่สำเร็จ","error"),_.remove();return}let ae=p;const de=_.querySelector("#qr-timer-bar"),F=_.querySelector("#qr-timer-sec"),J=setInterval(()=>{ae-=1,F&&(F.textContent=ae),de&&(de.style.width=`${ae/p*100}%`),ae<=0&&(clearInterval(J),_.remove(),V("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);_.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(J),_.remove()})})}const pa={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function xa(e){var o;(o=document.getElementById("student-leave-modal"))==null||o.remove();const t=document.createElement("div");t.id="student-leave-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",t.innerHTML=`
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
      <h3 class="text-lg font-bold text-gray-800">🚪 ใบอนุญาตออกนอกห้อง</h3>
      <button id="btn-leave-modal-close" class="w-9 h-9 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 flex items-center justify-center text-lg transition">✕</button>
    </div>
    <div class="flex border-b border-gray-100 flex-shrink-0">
      <button type="button" data-leave-tab="permit" class="leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition">📋 ใบอนุญาต</button>
      <button type="button" data-leave-tab="history" class="leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition">🕘 ประวัติ</button>
    </div>
    <div id="student-leave-body" class="flex-1 overflow-y-auto px-5 py-4 space-y-4">
      <div class="text-center text-sm text-gray-400 py-8">กำลังโหลดข้อมูล...</div>
    </div>
  `,document.body.appendChild(t);const n=()=>{t._leaveTimer&&clearInterval(t._leaveTimer),t.remove()};t.querySelector("#btn-leave-modal-close").addEventListener("click",n),ga(e,t)}function ba(e,t){e.querySelectorAll(".leave-tab-btn").forEach(n=>{const o=n.dataset.leaveTab===t;n.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${o?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function ga(e,t){const n=t.querySelector("#student-leave-body");let o="permit";try{const[c,m]=await Promise.all([ks(e.id),Es(e.id)]),x=m.filter(d=>d.status==="overdue").length,h=x>=3?"danger":x>=1?"warning":"safe",S=pa[h],R=()=>{var r,p,w,C;let d="";if(c){const b=((p=(r=c.classes)==null?void 0:r.master_subjects)==null?void 0:p.subject_name)||((w=c.classes)==null?void 0:w.class_name)||"—";d=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${W(b)} · เหตุผล: ${W(c.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${W(((C=c.teachers)==null?void 0:C.full_name)||"—")}</p>
          </div>
        `}return`
        <div class="rounded-2xl ${S.badgeBg} border ${S.border} px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">สถานะปัจจุบัน</p>
            <p class="text-sm font-extrabold ${S.badgeText} mt-0.5">${S.label}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">เลยเวลา/ไม่กลับ</p>
            <p class="text-sm font-extrabold ${S.badgeText} mt-0.5">${x}/3 ครั้ง</p>
          </div>
        </div>
        ${d}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},T=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${m.length?m.map(r=>{var _,E,L;const p=((E=(_=r.classes)==null?void 0:_.master_subjects)==null?void 0:E.subject_name)||((L=r.classes)==null?void 0:L.class_name)||"—",w=r.status==="active"?"🚪 กำลังออก":r.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",C=r.status==="active"?"text-amber-600":r.status==="overdue"?"text-red-600":"text-emerald-600",b=new Date(r.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${W(p)}</span>
                  <span class="text-[10px] font-bold ${C}">${w}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${b} · ${W(r.reason)} · ${r.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,X=()=>{if(n.innerHTML=o==="permit"?R():T(),ba(t,o),t.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${o==="permit"?S.border:"border-transparent"}`,o==="permit"&&c){const d=n.querySelector("#student-leave-active-card"),r=n.querySelector("#student-leave-active-label"),p=n.querySelector("#student-leave-active-timer"),w=n.querySelector("#student-leave-active-detail"),C=n.querySelector("#student-leave-active-teacher"),b=()=>{const _=Ns(c.created_at,c.allowed_duration);p&&(p.textContent=_.timerText),_.isOverdue&&d&&!d.classList.contains("bg-red-50")&&(d.classList.remove("border-amber-200","bg-amber-50"),d.classList.add("border-red-200","bg-red-50","animate-pulse"),r&&(r.textContent="⛔ เลยเวลา",r.classList.replace("text-amber-700","text-red-700")),p&&p.classList.replace("text-amber-700","text-red-700"),w&&w.classList.replace("text-amber-800","text-red-800"),C&&C.classList.replace("text-amber-600","text-red-600")),_.isBeyondLimit&&d&&d.classList.remove("animate-pulse")};b(),t._leaveTimer=setInterval(b,1e3)}};t.querySelectorAll(".leave-tab-btn").forEach(d=>{d.addEventListener("click",()=>{t._leaveTimer&&clearInterval(t._leaveTimer),o=d.dataset.leaveTab,X()})}),X()}catch(c){n.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${W(ge(c))}</p>`}}const fa="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",ya="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let Ke=null;function va(){return Ke||(Ke=new Promise((e,t)=>{var o,c;if((c=(o=window.google)==null?void 0:o.accounts)!=null&&c.id){e();return}const n=document.createElement("script");n.src="https://accounts.google.com/gsi/client",n.async=!0,n.defer=!0,n.onload=()=>e(),n.onerror=()=>t(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(n)}),Ke)}function Ga(){var o;(o=document.getElementById("stu-email-link-modal"))==null||o.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6">
      <div class="text-center mb-4">
        <div class="text-4xl mb-2">📧</div>
        <h3 class="font-bold text-gray-800 text-base">เชื่อมอีเมลส่วนตัวของคุณ</h3>
        <p class="text-xs text-gray-400 mt-1 leading-relaxed">เผื่อไว้กรณีลืมรหัสผ่านในอนาคต ระบบจะส่งลิงก์กู้คืนให้ทางอีเมลนี้ได้ทันที ไม่ต้องรอครูช่วยตั้งรหัสผ่านให้</p>
      </div>
      <div id="sel-google-btn" class="flex justify-center mb-1"></div>
      <p id="sel-google-status" class="hidden text-[11px] text-gray-300 text-center mb-2"></p>
      <div class="flex items-center gap-2 my-3">
        <div class="flex-1 h-px bg-gray-200"></div>
        <span class="text-[10px] text-gray-300">หรือพิมพ์เอง</span>
        <div class="flex-1 h-px bg-gray-200"></div>
      </div>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-400 mb-1">อีเมลของคุณ</label>
          <input id="sel-email" type="email" placeholder="example@gmail.com" autocomplete="email" inputmode="email"
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-400 mb-1">พิมพ์อีเมลอีกครั้งเพื่อยืนยัน</label>
          <input id="sel-email-confirm" type="email" placeholder="พิมพ์ซ้ำอีกครั้ง" autocomplete="off" inputmode="email"
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition" />
        </div>
        <button id="sel-save"
          class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition">
          เชื่อมอีเมล
        </button>
        <button id="sel-later" class="w-full py-2 text-xs text-gray-400 hover:text-gray-600 transition">
          ไว้ทีหลัง
        </button>
        <div id="sel-msg" class="hidden text-xs text-center py-2.5 rounded-xl"></div>
      </div>
    </div>`,document.body.appendChild(e);const t=(c,m)=>{const x=e.querySelector("#sel-msg");x.className=`text-xs text-center py-2.5 rounded-xl ${m?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,x.textContent=c,x.classList.remove("hidden")},n=async(c,m,x)=>{m&&(m.disabled=!0);try{await Mt(c),t(`เชื่อมอีเมล ${c} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(h){t("ไม่สำเร็จ: "+ge(h),!0),m&&(m.disabled=!1,m.textContent=x)}};va().then(()=>{window.google.accounts.id.initialize({client_id:fa,ux_mode:"redirect",login_uri:ya}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",c=>{c.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const c=e.querySelector("#sel-save"),m=e.querySelector("#sel-email").value.trim(),x=e.querySelector("#sel-email-confirm").value.trim();if(!m||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){t("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(m!==x){t("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}c.textContent="กำลังบันทึก...",await n(m,c,"เชื่อมอีเมล")})}async function Va(e){try{await Mt(e),V(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(t){V("เชื่อมอีเมลไม่สำเร็จ: "+ge(t),"error")}}const Et={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},Lt={};function De(e="success",t=null){try{const n=Et[e]?e:"error",o=t==="หญิง"?"female":"male",c=`${n}_${o}`;let m=Lt[c];if(!m){const x="/pp5online/";m=new Audio(`${x}sounds/${Et[n][o]}`),Lt[c]=m}m.currentTime=0,m.volume=1,m.play().catch(x=>console.warn("Play scan sound failed:",x))}catch(n){console.error("Play scan sound failed",n)}}function ut(e,t){const o=Vt(t==null?void 0:t.semester_start,[]).find(c=>c.days.some(m=>m.ds===e));return o?o.n:1}async function Wa(e,t={}){var he,u;if((t==null?void 0:t.prayerType)==="asr"){const{renderAsrPrayerView:s}=await it(async()=>{const{renderAsrPrayerView:l}=await import("./asr-prayer-ciMuHQOE.js");return{renderAsrPrayerView:l}},__vite__mapDeps([4,1,5]));return s(document.getElementById("stu-content"),e,{onBack:()=>{var l;return(l=window._stuNav)==null?void 0:l.call(window,"overview")}})}const{authorizedByCouncil:n=!1,onBack:o=null}=t,c=e;window._lastSuccessFeedbackHTML="",ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[m,x]=await Promise.all([Qe().catch(()=>({})),as().catch(()=>[])]);window._pp5SystemCfg=m;let h=!1;if(n)h=!0;else if(e.student_code)h=Gt(e,m);else if(e.teacher_code){const s=(m.prayerScannerTeachers||"").split(/[\s,]+/).map($=>$.trim()).filter(Boolean);let l=null;try{const $=await Te.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();l=($==null?void 0:$.data)??null}catch{}h=s.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(l==null?void 0:l.role)==="admin"}if(!h){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const S=!!e.teacher_code,R=!S&&Qt(e,m),T=xt(m,R);if(!S&&!Ge(m,R)){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-100 text-3xl">
          🕌
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">นอกช่วงเวลาบันทึกกิจกรรมละหมาด</h3>
        <p class="text-xs text-gray-500 leading-relaxed">
          ระบบสแกนเปิดให้บันทึกเวลาเฉพาะช่วงเวลา <b>${T.startLabel} น. ถึง ${T.endLabel} น.</b> เท่านั้น<br>
          (ยกเว้นคุณครูที่สามารถเข้าใช้งานได้ตลอดเวลา)
        </p>
        <button id="scanner-btn-back-restricted" class="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl active:scale-95 transition-all shadow-sm">
          ← กลับหน้าหลัก
        </button>
      </div>`),(he=document.getElementById("scanner-btn-back-restricted"))==null||he.addEventListener("click",()=>{o?o():window._stuNav("overview")});return}const X=document.querySelector("nav.safe-area-bottom");X&&X.classList.add("hidden");const d=document.getElementById("sidebar"),r=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(d&&d.classList.add("hidden"),r&&r.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const p=Ne(new Date);let w=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");w=w.filter(s=>s.check_date===p),localStorage.setItem("prayer_scan_history_today",JSON.stringify(w)),w.forEach(s=>window._syncedStudentIdsToday.add(s.student_id));let C=localStorage.getItem("prayer_scan_input_mode")||"camera",b=localStorage.getItem("prayer_scan_device_mode")||"single";const _=Js(e),E=localStorage.getItem("prayer_scan_active_location");let L=_.some(s=>s.id===E)?E:((u=_[0])==null?void 0:u.id)||"musolla_male",Y=localStorage.getItem("prayer_scan_record_status")||"pray",ae=!1,de=!1,F=!1,J=localStorage.getItem("prayer_scan_result_columns")==="one"?"one":"two";const xe="/pp5online/prayer-scanner-amanah.png";function fe(){var i,A;const s=Ne(new Date),l=ut(s,m),$=_.map(y=>`
      <option value="${y.id}" ${L===y.id?"selected":""}>${y.icon} ${y.label}${y.detail?` (${y.detail})`:""}</option>
    `).join(""),g=_.map(y=>`
      <option value="${y.id}">${y.icon} ${y.label}${y.detail?` (${y.detail})`:""}</option>
    `).join(""),H=`
      <!-- Flash green screen overlay -->
      <div id="scanner-flash" class="fixed inset-0 pointer-events-none z-50 bg-emerald-500 opacity-0 transition-opacity duration-150 hidden"></div>
      <div id="scanner-time-warning-border" class="hidden fixed inset-0 pointer-events-none z-[60] border-4 border-red-500 rounded-[2rem] animate-pulse"></div>
      <div id="scanner-result-popup" class="hidden fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm items-center justify-center p-4" role="status" aria-live="polite"></div>
      <div id="scanner-expired-modal" class="hidden fixed inset-0 z-[110] bg-slate-950/85 backdrop-blur-sm items-center justify-center p-5" role="alertdialog" aria-modal="true">
        <div class="w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl border border-amber-100">
          <div class="mx-auto mb-4 w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center text-5xl">⏰</div>
          <h2 class="text-2xl font-extrabold text-slate-900">หมดเวลาสแกน</h2>
          <p class="mt-3 text-base font-semibold leading-relaxed text-emerald-800">ขอให้องค์อัลลอฮฺทรงตอบรับละหมาดของนักเรียน</p>
          <p class="mt-3 text-sm text-gray-500">ระบบปิดรับการสแกนแล้ว</p>
        </div>
      </div>

      ${S?"":`
      <div id="scanner-amanah-modal" class="fixed inset-0 z-[90] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
        <div class="w-full max-w-3xl max-h-[92vh] overflow-hidden bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col">
          <div class="flex-1 overflow-y-auto bg-emerald-950/5">
            <img id="scanner-amanah-poster" src="${xe}" alt="นาซีฮัทถึงนักเรียนแกนนำผู้รับผิดชอบการสแกนละหมาด"
              class="w-full h-auto block"
              onerror="this.classList.add('hidden');document.getElementById('scanner-amanah-fallback')?.classList.remove('hidden')" />
            <div id="scanner-amanah-fallback" class="hidden p-5 space-y-4">
              <div class="bg-emerald-900 text-white px-5 py-4 text-center rounded-2xl">
                <p class="text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-100">นาซีฮัท</p>
                <h3 class="text-lg font-extrabold leading-snug mt-1">ถึงนักเรียนแกนนำผู้รับผิดชอบการสแกนละหมาด</h3>
              </div>
              <div class="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <p class="text-sm font-extrabold text-emerald-900 leading-relaxed">
                  หน้าที่นี้คืออะมานะห์ที่ได้รับความไว้วางใจจากเพื่อน ครู และที่สำคัญคือความรับผิดชอบต่ออัลลอฮ์
                </p>
                <p class="text-xs text-emerald-700 leading-relaxed mt-2">
                  ทุกการสแกนควรสะท้อนความจริง ผู้ที่มาละหมาดจริงควรได้รับสิทธิ์ของเขา และผู้ที่ไม่ได้มาละหมาดไม่ควรถูกบันทึกแทน
                </p>
              </div>
              <div class="space-y-2.5 text-sm text-gray-700">
                <div class="flex gap-3">
                  <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold flex-shrink-0">1</span>
                  <p class="leading-relaxed"><b>สแกนเฉพาะผู้ที่อยู่ต่อหน้า</b> และมาละหมาดจริงเท่านั้น</p>
                </div>
                <div class="flex gap-3">
                  <span class="w-7 h-7 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-extrabold flex-shrink-0">2</span>
                  <p class="leading-relaxed"><b>ห้ามฝากสแกน สแกนแทน หรือบันทึกข้อมูลเท็จ</b> เพราะเป็นการทำลายความไว้วางใจ</p>
                </div>
                <div class="flex gap-3">
                  <span class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-extrabold flex-shrink-0">3</span>
                  <p class="leading-relaxed">ระบบมีการบันทึกเวลา จุดสแกน ผู้สแกน วิธีบันทึก และตรวจสอบย้อนหลังได้</p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 bg-white border-t border-emerald-100">
            <button id="btn-ack-scanner-amanah" class="w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition">
              ข้าพเจ้าอ่านและรับทราบแล้ว
            </button>
          </div>
        </div>
      </div>
      `}

      ${S?"":`
      <div id="scanner-location-modal" class="hidden fixed inset-0 z-[90] bg-slate-950/70 backdrop-blur-sm items-center justify-center px-4 py-6">
        <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden">
          <div class="bg-emerald-900 text-white px-5 py-4 text-center">
            <p class="text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-100">เลือกจุดสแกน</p>
            <h3 class="text-lg font-extrabold leading-snug mt-1">กรุณายืนยันจุดที่กำลังปฏิบัติหน้าที่</h3>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-xs text-gray-500 leading-relaxed text-center">
              ระบบจะบันทึกจุดนี้ไปพร้อมกับทุกการสแกนในรอบนี้ กรุณาเลือกให้ตรงกับสถานที่จริงก่อนเปิดกล้อง
            </p>
            <label for="scanner-location-modal-select" class="sr-only">เลือกสถานที่สแกน</label>
            <select id="scanner-location-modal-select" class="w-full min-h-14 appearance-auto rounded-2xl border-2 border-emerald-200 bg-white px-4 py-4 text-base font-bold text-slate-800 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-100">
              <option value="" selected>แตะเพื่อเลือกสถานที่</option>
              ${g}
            </select>
          </div>
          <div class="p-4 bg-gray-50 border-t border-gray-100">
            <button id="btn-confirm-scanner-location" disabled class="w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition">
              ยืนยันจุดสแกนและเปิดระบบ
            </button>
          </div>
        </div>
      </div>
      `}

      <!-- Header with back button -->
      <div class="flex items-center gap-3 mb-5">
        <button id="scanner-btn-back" class="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ← กลับ
        </button>
        <div class="min-w-0">
          <h2 class="font-extrabold text-gray-800 text-lg leading-tight">🕌 บันทึกเวลากิจกรรมละหมาด (สภานักเรียน)</h2>
          <p class="text-xs text-gray-400 mt-0.5">ผู้สแกน: ${e.full_name} · สัปดาห์ที่ ${l}</p>
        </div>
      </div>

      <div id="scanner-countdown-panel" class="${S?"bg-indigo-50 border-indigo-100 text-indigo-700":"bg-emerald-50 border-emerald-100 text-emerald-800"} rounded-3xl border-2 px-5 py-5 mb-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left shadow-md transition-colors">
        <div class="min-w-0">
          <p class="text-xs font-extrabold uppercase tracking-wider opacity-80">${S?"สิทธิ์คุณครู":R?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-sm font-bold mt-1">${S?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${T.startLabel} - ${T.endLabel} น.`}</p>
        </div>
        <div class="min-w-[190px] rounded-2xl border border-white bg-white/90 px-6 py-3 text-center shadow-inner">
          <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">เวลาคงเหลือ</p>
          <p id="scanner-countdown" class="mt-1 font-mono text-5xl font-black leading-none tracking-wider ${S?"text-indigo-700":"text-emerald-700"} tabular-nums">${S?"∞":"--:--"}</p>
        </div>
      </div>

      <!-- Settings panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">ช่องทางสแกน</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-input-camera" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📷 ใช้กล้อง
              </button>
              <button id="opt-input-gun" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                🔌 ปืนยิงสแกน
              </button>
            </div>
          </div>
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">โหมดจอแสดงผล</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-device-single" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${b==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📱 เครื่องเดียว
              </button>
              <button id="opt-device-dual" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${b==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📡 แยกสองเครื่อง
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📍 จุดพื้นที่สแกนปัจจุบัน (Active Location)</label>
          <select id="opt-active-location" class="w-full text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            ${$}
          </select>
        </div>

        ${e.gender==="หญิง"||e.teacher_code?`
        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📝 สถานะบันทึกเมื่อสแกน (Record Status)</label>
          <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
            <button id="opt-status-pray" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${Y==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟢 ละหมาดปกติ
            </button>
            <button id="opt-status-usor" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${Y==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟣 บันทึกอูโซร
            </button>
          </div>
        </div>
        `:""}

        <!-- iPad Monitor Display Link -->
        <div id="dual-monitor-link-area" class="mt-3.5 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3 ${b==="dual"?"":"hidden"}">
          <div class="min-w-0">
            <h4 class="font-bold text-xs text-gray-700">📡 เปิดหน้าจอแสดงผลจอแยก</h4>
            <p class="text-[10px] text-gray-400 mt-0.5">เปิดลิงก์นี้บน iPad เครื่องที่ 2 เพื่อยืนยันตัวตนให้นักเรียนเห็น</p>
          </div>
          <button id="btn-open-monitor" class="px-3 py-1.5 bg-emerald-500 text-white font-bold text-xs rounded-lg hover:bg-emerald-600 shadow transition-all flex-shrink-0 active:scale-95">
            เปิดหน้าจอแยก ↗
          </button>
        </div>
      </div>

      <!-- Live Sync status panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4 flex items-center justify-between gap-4">
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span id="sync-indicator" class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h4 id="sync-title" class="font-bold text-xs text-gray-700">ซิงก์สำเร็จทั้งหมดแล้ว</h4>
          </div>
          <p id="sync-desc" class="text-[10px] text-gray-400 mt-0.5">พร้อมบันทึกประวัติละหมาด</p>
        </div>
        <button id="btn-manual-sync" class="px-3 py-1.5 bg-gray-100 text-gray-700 font-bold text-xs rounded-lg hover:bg-gray-200 transition-all flex-shrink-0 active:scale-95">
          ซิงก์ตอนนี้
        </button>
      </div>

      <!-- Scanners Area -->
      <div id="scanner-view-camera" class="relative overflow-hidden bg-slate-950 rounded-3xl w-full max-w-sm mx-auto aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4 ${C==="camera"?"":"hidden"}">
        <div id="camera-reader" class="w-full h-full rounded-2xl overflow-hidden"></div>
        
        <!-- Custom Square Viewfinder Overlay -->
        <div class="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
          <!-- Dark semi-transparent background -->
          <div class="absolute inset-0 bg-black/35"></div>
          <!-- Viewfinder Frame -->
          <div class="relative w-56 h-56 rounded-3xl border-2 border-white/20 bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden">
            <!-- Neon Corner Brackets -->
            <div class="absolute top-0 left-0 w-6 h-6 border-t-[3.5px] border-l-[3.5px] border-emerald-400 rounded-tl-md"></div>
            <div class="absolute top-0 right-0 w-6 h-6 border-t-[3.5px] border-r-[3.5px] border-emerald-400 rounded-tr-md"></div>
            <div class="absolute bottom-0 left-0 w-6 h-6 border-b-[3.5px] border-l-[3.5px] border-emerald-400 rounded-bl-md"></div>
            <div class="absolute bottom-0 right-0 w-6 h-6 border-b-[3.5px] border-r-[3.5px] border-emerald-400 rounded-br-md"></div>
            <!-- Laser Sweeper Line -->
            <div class="w-full h-[2.5px] bg-emerald-400 opacity-90 absolute top-0 shadow-[0_0_8px_rgba(52,211,153,0.85)] animate-laser-move"></div>
          </div>
        </div>
      </div>

      <style>
        @keyframes laser-sweep {
          0% { top: 0%; opacity: 0.3; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
        .animate-laser-move {
          animation: laser-sweep 2.8s infinite ease-in-out;
        }
      </style>

      <div id="scanner-view-gun" class="border border-dashed border-gray-300 bg-white rounded-3xl py-12 px-6 text-center shadow-sm mb-4 transition-all relative ${C==="gun"?"":"hidden"}">
        <input id="scanner-gun-input" type="text" inputmode="none" class="absolute opacity-0 pointer-events-none" autocomplete="off" />
        <div class="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
          <span class="text-3xl animate-pulse">🔌</span>
        </div>
        <h3 class="font-bold text-sm text-gray-800">เชื่อมต่อเครื่องสแกน (Scanner Gun) เรียบร้อย</h3>
        <p class="text-xs text-gray-400 mt-1">นำปืนยิงสแกนเนอร์บาร์โค้ดสแกนที่ QR Code ของนักเรียนได้ทันที</p>
        <span class="inline-block mt-4 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100">ระบบรักษาโฟกัสอัตโนมัติค้างไว้</span>
      </div>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">กรอกรหัสแทน QR Code</label>
        <div class="flex gap-2">
          <input id="scanner-manual-code-input" type="text" inputmode="numeric" autocomplete="off" placeholder="รหัสนักเรียน"
            class="flex-1 min-w-0 text-sm border border-gray-200 rounded-xl px-4 py-2.5 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300" />
          <button id="btn-submit-manual-scan" class="px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 transition active:scale-95 flex-shrink-0">
            บันทึก
          </button>
        </div>
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const y=parseInt(m.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(y)?Math.max(0,y):2})()} ครั้ง/เดือน/คน</p>
      </div>

      <!-- Active Check-In Popup Overlay -->
      <div id="scanner-feedback-container" class="hidden my-4 relative z-30 transition-all duration-300"></div>

      <!-- Roster Lookup Status -->
      <div id="roster-status" class="px-4 py-2 bg-gray-100 rounded-xl text-center text-[10px] text-gray-400 mb-4 border border-gray-200/50">
        บัญชีรายชื่อสภานักเรียน: โหลดแล้ว ${x.length} คน
      </div>

      <!-- Today's Local Scans List -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
          <h3 class="font-bold text-gray-700 text-xs uppercase tracking-wider">ประวัติการสแกนในเครื่องวันนี้</h3>
          <span id="scan-count-badge" class="px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-[10px] font-bold">0 คน</span>
        </div>
        <div id="scan-list" class="divide-y divide-gray-50 max-h-60 overflow-y-auto">
          <div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>
        </div>
      </div>
    `,v=document.getElementById("stu-content")||document.getElementById("main-content");v&&(v.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${H}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{Se(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),X&&X.classList.remove("hidden");const y=document.getElementById("sidebar"),q=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(y&&y.classList.remove("hidden"),q&&q.classList.add("md:ml-64"),o){o();return}e.teacher_code?it(async()=>{const{renderPrayerAdmin:O}=await import("./views-D_csTfuZ.js").then(P=>P.M);return{renderPrayerAdmin:O}},__vite__mapDeps([6,5,0,1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32])).then(({renderPrayerAdmin:O})=>{O(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{we("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{we("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{Ee("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{Ee("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{be()});const M=document.getElementById("scanner-manual-code-input"),se=document.getElementById("btn-submit-manual-scan"),B=()=>{const y=M==null?void 0:M.value.trim();if(!y){V("กรุณากรอกรหัสนักเรียน","warning"),M==null||M.focus();return}M.value="",ne(y,{inputMethod:"manual"})};se==null||se.addEventListener("click",B),M==null||M.addEventListener("keydown",y=>{y.key==="Enter"&&(y.preventDefault(),B())});const D=document.getElementById("opt-active-location"),N=document.getElementById("scanner-location-modal-select");let re="";const ue=y=>{const q=document.getElementById("btn-confirm-scanner-location");q&&(q.disabled=!y,q.className=y?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},K=(y,{toast:q=!1}={})=>{_.some(O=>O.id===y)&&(L=y,localStorage.setItem("prayer_scan_active_location",L),D&&(D.value=L),q&&V("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};D==null||D.addEventListener("change",y=>{K(y.target.value,{toast:!0}),C==="gun"&&setTimeout(()=>{const q=document.getElementById("scanner-gun-input");q&&!F&&q.focus()},350)}),D==null||D.addEventListener("input",y=>{K(y.target.value)});const I=()=>{re=(N==null?void 0:N.value)||"",re&&K(re),ue(!!re)};N==null||N.addEventListener("change",I),N==null||N.addEventListener("input",I),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{Le("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{Le("usor")}));const z=()=>{if(!de){if(!S&&!Ge(m,R)){U();return}de=!0,oe(),_e(),C==="camera"?$e():k()}},ee=()=>{const y=document.getElementById("scanner-location-modal");if(!y){z();return}re="",N&&(N.value=""),ue(!1),y.classList.remove("hidden"),y.classList.add("flex")};(i=document.getElementById("btn-confirm-scanner-location"))==null||i.addEventListener("click",()=>{var y;if(!re){V("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}K(re),(y=document.getElementById("scanner-location-modal"))==null||y.remove(),z()}),oe();const a=document.getElementById("scanner-amanah-modal");a?(A=document.getElementById("btn-ack-scanner-amanah"))==null||A.addEventListener("click",()=>{a.remove(),ee()}):ee()}function we(s){s!==C&&(C=s,localStorage.setItem("prayer_scan_input_mode",s),s==="camera"?(Z(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),$e()):(Se(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),k()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function Ee(s){if(s===b)return;b=s,localStorage.setItem("prayer_scan_device_mode",s);const l=document.getElementById("dual-monitor-link-area");s==="dual"?l.classList.remove("hidden"):l.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function Le(s){if(s===Y)return;Y=s,localStorage.setItem("prayer_scan_record_status",s);const l=document.getElementById("opt-status-pray"),$=document.getElementById("opt-status-usor");l&&$&&(l.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,$.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),V(`เปลี่ยนโหมดบันทึกเป็น: ${s==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function _e(){if(S)return;const s=document.getElementById("scanner-countdown"),l=document.getElementById("scanner-countdown-panel"),$=document.getElementById("scanner-time-warning-border");if(!s||!l||!$)return;const g=()=>{if(F)return;const H=oa(m,R);s.textContent=la(H);const v=H<=ra;l.classList.toggle("bg-red-50",v),l.classList.toggle("border-red-200",v),l.classList.toggle("text-red-700",v),l.classList.toggle("bg-emerald-50",!v),l.classList.toggle("border-emerald-100",!v),l.classList.toggle("text-emerald-800",!v),s.classList.toggle("text-red-700",v),s.classList.toggle("text-emerald-700",!v),$.classList.toggle("hidden",!v),H<=0&&U()};g(),window._activePrayerScannerState.countdownInterval=setInterval(g,1e3)}async function $e(){if(!F)try{let s=null,l=0;const $=await zt("camera-reader",g=>{g===s&&Date.now()-l<1800||(s=g,l=Date.now(),ne(g))});window._activePrayerScannerState.html5Qrcode=$}catch(s){console.error("Camera open failed:",s),V("ไม่สามารถเปิดใช้งานกล้องได้: "+(s.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function Se(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function k(){if(F)return;const s=document.getElementById("scanner-gun-input");if(!s)return;let l="";s.focus();const $=setInterval(()=>{const g=document.activeElement,H=g!==s&&((g==null?void 0:g.matches("select, input, textarea"))||(g==null?void 0:g.isContentEditable));g!==s&&!H&&document.getElementById("scanner-gun-input")&&s.focus()},1e3);window._activePrayerScannerState.focusInterval=$,s.addEventListener("keydown",g=>{var H;if(F){g.preventDefault();return}if(g.key==="Enter"){g.preventDefault();const v=(l||s.value).trim();l="",s.value="",v&&ne(v);return}if(g.code&&/^(?:Digit|Numpad)[0-9]$/.test(g.code)){g.preventDefault(),l+=g.code.slice(-1);return}((H=g.key)==null?void 0:H.length)===1&&(g.preventDefault(),l+=g.key)})}function Z(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}function U(){var v,M;if(S||F)return;F=!0,Se(),Z();const s=document.getElementById("scanner-result-popup");s==null||s.classList.add("hidden"),s==null||s.classList.remove("flex");const l=document.getElementById("scanner-expired-modal");l==null||l.classList.remove("hidden"),l==null||l.classList.add("flex");const $=document.getElementById("scanner-manual-code-input"),g=document.getElementById("btn-submit-manual-scan"),H=document.getElementById("scanner-gun-input");(v=document.getElementById("opt-input-camera"))==null||v.setAttribute("disabled","true"),(M=document.getElementById("opt-input-gun"))==null||M.setAttribute("disabled","true"),H&&(H.disabled=!0),$&&($.disabled=!0),g&&(g.disabled=!0)}async function ne(s,l={}){if(console.log("[Scanner] Raw scanned text:",s),!s)return;const $=l.inputMethod==="manual"?"manual":"qr";if(F)return;if(!S&&!Ge(m,R)){U();return}let g=String(s).trim(),H=!1;if(g.startsWith("SQ:")){const y=g.split(":");if(y.length===3){const[,q,O]=y,P=parseInt(O,10),le=Math.floor(Date.now()/1e3),G=le-P,f=parseInt(m.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${q}, QR Time: ${P}, Now: ${le}, Diff: ${G}s, Allowed Expiry: ${f}s`),(isNaN(P)||G>f||G<-f)&&(H=!0),g=q.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",y.length),De("error"),j(null,s,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const v=x.find(y=>String(y.student_code).trim()===g);if(console.log("[Scanner] Lookup result for code:",g,v?v.full_name:"not found"),H){console.warn("[Scanner] QR Code has expired");const y=parseInt(m.studentQrExpirySeconds||"60",10);De("error",v==null?void 0:v.gender),j(v,g,`QR Code นี้หมดอายุแล้ว (เกิน ${y} วินาที)`);return}if(!v){De("error"),j(null,g,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const M=Xs(v,L);if(M){De("error",v.gender),j(v,g,M);return}const se=Ne(new Date),B=St(c.main_room),D=St(v.main_room),N=!!B&&!!D&&B===D;if(!S&&N&&na(v.gender,m)){De("error",v.gender),j(v,g,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const re=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(re.some(y=>y.student_id===v.id&&y.check_date===se)){De("duplicate",v.gender),j(v,g,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(v.id)){De("duplicate",v.gender),j(v,g,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if($==="manual"){const y=parseInt(m.prayerManualEntryMonthlyLimit??"2",10),q=Number.isFinite(y)?Math.max(0,y):2;if(q===0){De("error",v.gender),j(v,g,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const O=re.filter(P=>P.student_id!==v.id||P.input_method!=="manual"||!P.check_date?!1:String(P.check_date).slice(0,7)===se.slice(0,7)).length;try{if(await rs(v.id,se)+O>=q){De("error",v.gender),j(v,g,`ใช้สิทธิ์กรอกรหัสครบ ${q} ครั้งในเดือนนี้แล้ว`);return}}catch(P){console.warn("Manual prayer count check failed:",P),De("error",v.gender),j(v,g,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}if(F||!S&&!Ge(m,R)){U();return}const K=ut(se,m);let I=Y,z="";I==="usor"&&v.gender==="ชาย"&&(I="pray",z=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const ee=c.teacher_code?`${c.full_name} (ครู)`:`${c.full_name} (รหัส ${c.student_code||"—"})`,a={student_id:v.id,main_room:v.main_room,check_date:se,status:I,week_number:K,location:L,full_name:v.full_name,student_code:v.student_code,scanned_by:ee,input_method:$,scanner_code:c.teacher_code||c.student_code||null,scanner_name:c.full_name||null,scanner_room:c.main_room||null,scanner_gender:c.gender||null,same_room_flag:N};re.push(a),localStorage.setItem("prayer_scan_queue",JSON.stringify(re));let i=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");i=i.filter(y=>y.check_date===se),i.some(y=>y.student_id===v.id)||(i.unshift({student_id:v.id,full_name:v.full_name,student_code:v.student_code,main_room:v.main_room,check_date:se,status:I,input_method:$,same_room_flag:N}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(i))),window._syncedStudentIdsToday.add(v.id),De("success",v.gender),me(),j(v,g,`บันทึกสำเร็จลงเครื่องแล้ว${$==="manual"?" (กรอกรหัส)":""}${z}`,!0,I),oe(),be()}function j(s,l,$,g=!1,H="pray"){var se;const v=document.getElementById("scanner-feedback-container");if(!v||F)return;const M=document.getElementById("scanner-result-popup");if(C==="gun"&&s&&M){const B=String($).includes("เช็คชื่อซ้ำ"),D=g?"bg-emerald-100 text-emerald-800":B?"bg-amber-100 text-amber-900":"bg-rose-100 text-rose-900",N=g?"border-emerald-400":B?"border-amber-300":"border-rose-300",re=g?"text-emerald-700":B?"text-amber-800":"text-rose-700",ue=q=>String(q??"").replace(/[&<>"']/g,O=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[O]),K=ue(s.full_name||"นักเรียน"),I=ue(s.student_code||l||""),z=ue(Ce(s.main_room)),ee=s.image_url?`<img src="${ue(s.image_url)}" alt="รูป${K}" class="w-full h-full object-cover object-top" />`:`<div class="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-700 text-7xl font-extrabold">${K.charAt(0)||"น"}</div>`,a=Ne(new Date),i=new Set(JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]").map(q=>q.student_id)),A=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]").filter(q=>q.check_date===a&&q.student_id!==s.id).slice(0,10),y=A.length?A.map((q,O)=>{const P=x.find(qe=>qe.id===q.student_id),le=ue(q.full_name||(P==null?void 0:P.full_name)||"นักเรียน"),G=ue(q.student_code||(P==null?void 0:P.student_code)||""),f=ue(Ce(q.main_room||(P==null?void 0:P.main_room))),Q=P!=null&&P.image_url?`<img src="${ue(P.image_url)}" alt="" class="h-full w-full object-cover object-top" loading="lazy" />`:`<span class="text-lg font-extrabold text-emerald-700">${le.charAt(0)||"น"}</span>`,pe=i.has(q.student_id),ve=pe?"รอซิงก์":q.status==="usor"?"อูโซร":"สำเร็จ",je=pe?"bg-amber-100 text-amber-800":q.status==="usor"?"bg-purple-100 text-purple-800":"bg-emerald-100 text-emerald-800";return`<div class="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-2.5 text-left shadow-sm">
              <span class="w-7 flex-shrink-0 text-center font-mono text-xs font-bold text-slate-400">${O+1}</span>
              <div class="h-12 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-emerald-50 flex items-center justify-center">${Q}</div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-bold text-slate-800">${le}</p>
                <p class="truncate text-[11px] text-slate-500">${G} · ${f}</p>
              </div>
              <span class="flex-shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${je}">${ve}</span>
            </div>`}).join(""):'<div class="rounded-2xl border border-dashed border-slate-200 px-4 py-10 text-center text-sm text-slate-400">ยังไม่มีรายการสแกนก่อนหน้าในวันนี้</div>';M.innerHTML=`
        <div id="scanner-result-popup-card" class="relative flex h-[94vh] w-full flex-col ${J==="two"?"max-w-6xl":"max-w-xl"} overflow-hidden rounded-3xl bg-white p-4 pt-16 sm:p-6 sm:pt-16 text-center shadow-2xl border-4 ${N}">
          <div class="absolute right-3 top-3 z-10 flex items-center gap-2">
            <div class="flex rounded-xl border border-slate-200 bg-slate-50 p-1" role="group" aria-label="รูปแบบการแสดงผล">
              <button type="button" data-result-columns="one" aria-pressed="${J==="one"}" class="rounded-lg px-3 py-2 text-xs font-extrabold transition ${J==="one"?"bg-emerald-600 text-white shadow":"text-slate-600 hover:bg-white"}">1 คอลัมน์</button>
              <button type="button" data-result-columns="two" aria-pressed="${J==="two"}" class="rounded-lg px-3 py-2 text-xs font-extrabold transition ${J==="two"?"bg-emerald-600 text-white shadow":"text-slate-600 hover:bg-white"}">2 คอลัมน์</button>
            </div>
            <button id="scanner-result-popup-close" type="button" aria-label="ปิดผลการสแกน" class="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-3xl font-bold leading-none text-gray-600 shadow hover:bg-gray-100 active:scale-95">×</button>
          </div>
          <div id="scanner-result-popup-grid" class="grid min-h-0 flex-1 ${J==="two"?"grid-cols-1 md:grid-cols-2":"grid-cols-1"} gap-4">
            <section class="flex min-h-0 flex-col items-center justify-center overflow-y-auto rounded-2xl bg-slate-50 p-3 sm:p-5">
              <p class="inline-flex items-center gap-2 rounded-full px-5 py-3 text-base sm:text-lg font-extrabold ${D}">
                <span class="text-xl">${g?"✓":B?"↻":"!"}</span>${g?"สแกนสำเร็จ":B?"ตรวจพบการสแกนซ้ำ":"สแกนไม่ผ่าน"}
              </p>
              <div class="mx-auto mt-3 ${J==="two"?"h-[min(54vh,560px)] w-[min(38vw,440px)]":"h-[min(52vh,520px)] w-[min(72vw,360px)]"} max-w-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-lg">${ee}</div>
              <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold text-slate-900">${K}</h2>
              <p class="mt-2 text-xl sm:text-2xl font-bold text-slate-600">รหัส ${I} · ห้อง ${z}</p>
              <p class="mt-3 text-lg sm:text-xl font-bold ${re}">${ue($)}</p>
              <p class="mt-3 text-sm text-gray-400">ผลการสแกนจะแสดงค้างไว้จนกว่าจะสแกนรายการถัดไปหรือหมดเวลาสแกน</p>
            </section>
            <section id="scanner-result-popup-history" class="${J==="two"?"flex":"hidden"} min-h-0 flex-col rounded-2xl bg-slate-50 p-3 sm:p-4 text-left">
              <div class="mb-3 flex items-center justify-between gap-2">
                <h3 class="font-extrabold text-slate-800">รายการสแกนก่อนหน้า</h3>
                <span class="text-xs font-semibold text-slate-500">สูงสุด 10 รายการ · วันนี้</span>
              </div>
              <div class="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">${y}</div>
            </section>
          </div>
        </div>`,M.classList.remove("hidden"),M.classList.add("flex"),M.querySelectorAll("[data-result-columns]").forEach(q=>{q.addEventListener("click",()=>{J=q.dataset.resultColumns==="one"?"one":"two",localStorage.setItem("prayer_scan_result_columns",J);const O=M.querySelector("#scanner-result-popup-card"),P=M.querySelector("#scanner-result-popup-grid"),le=M.querySelector("#scanner-result-popup-history");O==null||O.classList.toggle("max-w-6xl",J==="two"),O==null||O.classList.toggle("max-w-xl",J==="one"),P==null||P.classList.toggle("md:grid-cols-2",J==="two"),le==null||le.classList.toggle("hidden",J==="one"),le==null||le.classList.toggle("flex",J==="two"),M.querySelectorAll("[data-result-columns]").forEach(G=>{const f=G.dataset.resultColumns===J;G.setAttribute("aria-pressed",String(f)),G.className=`rounded-lg px-3 py-2 text-xs font-extrabold transition ${f?"bg-emerald-600 text-white shadow":"text-slate-600 hover:bg-white"}`})})}),(se=M.querySelector("#scanner-result-popup-close"))==null||se.addEventListener("click",()=>{M.classList.add("hidden"),M.classList.remove("flex")})}else!s&&M&&(M.classList.add("hidden"),M.classList.remove("flex"),M.innerHTML="");if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),g&&s){const B=H==="usor",D=s.image_url?`<img src="${s.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${B?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${s.full_name.charAt(0)}</div>`,N=B?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';v.innerHTML=`
        <div class="bg-white/95 border ${B?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${D}
          <div class="flex-1 min-w-0">
            ${N}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${s.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${s.student_code} · ห้อง ${Ce(s.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${$}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${s.id}" data-name="${s.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=v.innerHTML,te(v)}else{const B=s?s.full_name:"ไม่พบข้อมูล",D=s?`รหัส ${s.student_code} · ห้อง ${Ce(s.main_room)}`:`สแกนพบ: ${l}`;v.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${B}</h4>
            <p class="text-xs text-gray-500 truncate">${D}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${$}</p>
          </div>
        </div>`,v.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(v.innerHTML=window._lastSuccessFeedbackHTML,te(v)):(v.innerHTML="",v.classList.add("hidden"))},3500);return}v.classList.remove("hidden")}function te(s){const l=s.querySelector("#btn-undo-scan");l&&l.addEventListener("click",()=>{const $=parseInt(l.dataset.sid,10),g=l.dataset.name;ce($,g)})}async function ce(s,l){const $=Ne(new Date);let g=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");g=g.filter(M=>!(M.student_id===s&&M.check_date===$)),localStorage.setItem("prayer_scan_queue",JSON.stringify(g));let H=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");H=H.filter(M=>!(M.student_id===s&&M.check_date===$)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(H)),window._syncedStudentIdsToday.delete(s),window._lastSuccessFeedbackHTML="";const v=document.getElementById("scanner-feedback-container");v&&(v.innerHTML="",v.classList.add("hidden")),oe(),V(`กำลังยกเลิกรายการของ ${l}...`,"info");try{const{error:M}=await Te.from("prayer_records").delete().eq("student_id",s).eq("check_date",$).is("teacher_id",null);if(M)throw M;V(`ยกเลิกบันทึกของ ${l} สำเร็จ ✕`,"success")}catch(M){console.warn("Failed to delete from server (offline?):",M),V("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function me(){const s=document.getElementById("scanner-flash");s&&(s.classList.remove("hidden","opacity-0"),s.classList.add("opacity-40"),setTimeout(()=>{s.classList.remove("opacity-40"),s.classList.add("opacity-0"),setTimeout(()=>s.classList.add("hidden"),150)},120))}function oe(s=!1){const l=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let $=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const g=Ne(new Date);$=$.filter(D=>D.check_date===g);const H=document.getElementById("scan-count-badge");H&&(H.textContent=`${$.length} คน`);const v=document.getElementById("sync-indicator"),M=document.getElementById("sync-title"),se=document.getElementById("sync-desc");if(!v||!M||!se)return;s?(v.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",M.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",se.textContent=`กำลังส่งข้อมูล ${l.length} คนขึ้นเซิร์ฟเวอร์`):l.length>0?(v.className="w-2.5 h-2.5 rounded-full bg-amber-500",M.textContent=`ค้างส่ง ${l.length} รายการ (ออฟไลน์)`,se.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(v.className="w-2.5 h-2.5 rounded-full bg-emerald-500",M.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",se.textContent="พร้อมบันทึกประวัติละหมาด");const B=document.getElementById("scan-list");B&&($.length===0?B.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(B.innerHTML=$.map((D,N)=>{const re=l.some(ee=>ee.student_id===D.student_id),ue=D.status==="usor",K=D.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",I=D.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",z=re?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':ue?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${$.length-N}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${D.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${D.student_code} · ห้อง ${Ce(D.main_room)}</p>
              </div>
              ${K}
              ${I}
              ${z}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${D.student_id}" data-name="${D.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),B.querySelectorAll(".btn-cancel-scan-row").forEach(D=>{D.addEventListener("click",()=>{const N=parseInt(D.dataset.sid,10),re=D.dataset.name||"นักเรียน";ce(N,re)})})))}async function be(){if(ae)return;const s=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(s.length){ae=!0,oe(!0);try{const l=await qt(s);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),l!=null&&l.skippedCount?V(`ซิงก์สำเร็จ (ข้าม ${l.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):V("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(l){console.warn("Sync failed, offline backup kept:",l)}finally{ae=!1,oe()}}}const ke=setInterval(()=>{be()},8e3);window._activePrayerScannerState.syncInterval=ke,fe()}async function Ua(e){if(!(e!=null&&e.can_scan_prayer)){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let t={},n=Ne(new Date),o=[];const c=r=>{if(!r)return"—";const p=new Date(r);return`${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`},m=(r,p)=>{const w=new Date(r+"T00:00:00");return w.setDate(w.getDate()+p),Ne(w)};async function x(){try{o=await Ss(e.student_code,n)}catch(p){o=[],V("โหลดข้อมูลไม่สำเร็จ: "+ge(p),"error")}const r=document.getElementById("sh-search-input");h((r==null?void 0:r.value.trim())??"")}function h(r=""){var b,_;const p=document.getElementById("sh-list"),w=document.getElementById("sh-count");if(!p)return;w&&(w.textContent=`${o.length} คน`);const C=r?o.filter(E=>{var L;return String(((L=E.students)==null?void 0:L.student_code)??"").includes(r)}):o;if(r&&!C.length){p.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${W(r)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(b=document.getElementById("sh-resave-btn"))==null||b.addEventListener("click",()=>T(r)),(_=document.getElementById("sh-report-btn"))==null||_.addEventListener("click",()=>X(r));return}if(!C.length){p.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}p.innerHTML=C.map(E=>{const L=E.students??{},Y=We[E.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:E.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${L.image_url?`<img src="${L.image_url}" class="w-full h-full object-cover"/>`:W((L.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${W(L.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${W(L.student_code??"—")} · ${W(L.religion_room??L.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${Y.cls}" title="${W(Y.title)}">${Y.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${c(E.created_at)}</p>
        </div>
      </div>`}).join("")}async function S(){window._activePrayerScannerState={html5Qrcode:null};try{const r=await zt("sh-camera-reader",p=>{var b;let w=String(p).trim();w.startsWith("SQ:")&&(w=w.split(":")[1]??w),R(),(b=document.getElementById("sh-camera-wrap"))==null||b.classList.add("hidden");const C=document.getElementById("sh-search-input");C&&(C.value=w),h(w)});window._activePrayerScannerState.html5Qrcode=r}catch(r){V("ไม่สามารถเปิดกล้องได้: "+(r.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function R(){var r;(r=window._activePrayerScannerState)!=null&&r.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function T(r){var _;let p=null;try{p=await ct(r)}catch{}if(!p){V("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}(_=document.getElementById("sh-resave-modal"))==null||_.remove();const w=document.createElement("div");w.id="sh-resave-modal",w.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const C=Object.entries(We);w.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${W(p.full_name)} (รหัส ${W(p.student_code)})<br/>${W(p.religion_room??p.main_room??"—")} · วันที่ ${n}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${C.map(([E,L],Y)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${Y===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${E}">${L.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(w);let b=C[0][0];w.querySelectorAll(".sh-status-btn").forEach(E=>{E.addEventListener("click",()=>{b=E.dataset.status,w.querySelectorAll(".sh-status-btn").forEach(L=>{L.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),L.classList.add("border-gray-200","text-gray-500")}),E.classList.remove("border-gray-200","text-gray-500"),E.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),w.querySelector("#sh-resave-cancel").addEventListener("click",()=>w.remove()),w.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const E=w.querySelector("#sh-resave-confirm");E.disabled=!0,E.textContent="กำลังบันทึก...";try{const L={student_id:p.id,main_room:p.main_room,check_date:n,status:b,week_number:ut(n,t),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await qt([L]),V("บันทึกสำเร็จ ✅","success"),w.remove(),await x()}catch(L){V("บันทึกไม่สำเร็จ: "+ge(L),"error"),E.disabled=!1,E.textContent="บันทึก"}})}async function X(r){let p=null;try{p=await ct(r)}catch{}const C=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${p?`${p.full_name} (รหัส ${p.student_code}) ห้องศาสนา ${p.religion_room??p.main_room??"—"}`:`รหัสนักเรียน ${r} (ไม่พบชื่อในระบบ)`} วันที่ ${n} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(C):V("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function d(){t=await Qe().catch(()=>({})),ie(`
      <div class="flex items-center gap-2 mb-4">
        <button id="sh-back" class="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 flex-shrink-0">←</button>
        <div class="min-w-0">
          <h2 class="font-bold text-gray-800 text-base">🕌 ประวัติการสแกนของฉัน</h2>
          <p class="text-[11px] text-gray-400">ดูย้อนหลังว่าแต่ละวันสแกนให้ใครไว้บ้าง</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <div class="flex items-center gap-2 mb-3">
          <button id="sh-prev-day" class="w-8 h-8 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 flex-shrink-0">‹</button>
          <input type="date" id="sh-date" value="${n}" class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"/>
          <button id="sh-next-day" class="w-8 h-8 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 flex-shrink-0">›</button>
        </div>
        <div class="flex gap-2">
          <input type="text" id="sh-search-input" placeholder="พิมพ์รหัสนักเรียนเพื่อค้นหา..." class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"/>
          <button id="sh-camera-btn" class="px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm flex-shrink-0">📷</button>
        </div>
        <div id="sh-camera-wrap" class="hidden mt-3">
          <div id="sh-camera-reader" class="rounded-xl overflow-hidden border border-gray-200"></div>
          <button id="sh-camera-close" class="mt-2 w-full py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 text-xs font-semibold">ปิดกล้อง</button>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">รายชื่อที่สแกน</h3>
          <span id="sh-count" class="text-[11px] text-gray-400">0 คน</span>
        </div>
        <div id="sh-list" class="p-3"></div>
      </div>
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async r=>{n=r.target.value,document.getElementById("sh-search-input").value="",await x()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{n=m(n,-1),document.getElementById("sh-date").value=n,document.getElementById("sh-search-input").value="",await x()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{n=m(n,1),document.getElementById("sh-date").value=n,document.getElementById("sh-search-input").value="",await x()}),document.getElementById("sh-search-input").addEventListener("input",r=>{h(r.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const r=document.getElementById("sh-camera-wrap");r.classList.toggle("hidden"),r.classList.contains("hidden")?R():S()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var r;R(),(r=document.getElementById("sh-camera-wrap"))==null||r.classList.add("hidden")}),await x()}d()}export{Va as completeGoogleEmailLink,Ga as openEmailLinkPrompt,Fa as renderExamRequestForm,ca as renderStudentAllAssignments,Wt as renderStudentLeaveRequests,da as renderStudentMyScores,za as renderStudentOverview,Ua as renderStudentPrayerScanHistory,Wa as renderStudentPrayerScanner,Qa as renderStudentProfile,ua as renderStudentRequests,ma as renderStudentSubjectDetail,mt as renderStudentSubjects};
