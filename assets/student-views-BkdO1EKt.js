const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-CWYJTdOa.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/views-BHzV9Ke0.js","assets/ui-MMtcTwtt.js","assets/leave-monitor.js_v_10.18-DU3VpOVf.js","assets/leave-time-CrS9gT63.js","assets/sync-CtuAgrx7.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-bZoYj54P.js","assets/teacher-views-classes-DgW_t4uH.js","assets/browser-JP79f-a9.js","assets/pp5-doc-WG5YzWe3.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js","assets/teacher-views-grades-CXFdJBGK.js","assets/regrade-api-JnlABjxU.js","assets/score-qr-scanner-CfDHgG4i.js","assets/teacher-views-attendance-DkKZdoEb.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-B31NLFxx.js","assets/workload-scheduler-C9WpzjbH.js","assets/import-DZhJ-DY2.js","assets/theme-qDnPEUQn.js","assets/azfutsal-modal-CITqdeT7.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azizgames-modal-d_408eQI.js","assets/sports-portals.js_v_10.22-0gLUuL_V.js","assets/sports-awards-admin-6oCPrlSb.js"])))=>i.map(i=>d[i]);
import{_ as xt,g as ve}from"./ui-MMtcTwtt.js";import{getSystemConfig as Pe,getClassScoreRounding as Mt,submitQrReissueRequest as Tt,notifyQrReissueManagers as Bt,notifySubjectGroupAdmins as Dt}from"./api-CWYJTdOa.js";import{i as Ue,g as nt,c as Nt,a as At,d as Pt,f as Ye,r as Ht}from"./score-display-CQ4dUIPx.js";import{c as bt,d as Rt,s as gt,e as Ot,f as We,h as zt,i as Ft,j as Gt,k as Qt,l as Vt,m as Wt,n as Ut,b as at,o as Yt,p as Jt,q as ft,r as Kt,u as yt,t as vt,v as Xt,w as Zt,x as es,y as ts,z as ss,A as as,B as rs,C as ns,D as os,E as ls,F as ds,G as is,H as cs,I as ot}from"./student-api-BkkkCebX.js";import{g as ms}from"./theme-qDnPEUQn.js";import{i as ht}from"./skill-groups-BY1NTbf4.js";import{_dateInputValue as wt,_currentWeek as us,applyReadingGradesFromConfig as ps,_readingGrade as xs,renderIconTile as Te}from"./teacher-views-utils-bZoYj54P.js";import{g as _t,a as $t,b as St,r as kt}from"./quiz-api-BIDUVPR5.js";import{f as bs}from"./leave-time-CrS9gT63.js";import{uploadAssignmentFile as gs}from"./storage-CuUjCgvI.js";import{o as fs,A as ys}from"./azfutsal-modal-CITqdeT7.js";import{s as Le}from"./supabase-BV-W2lsh.js";import{b as vs}from"./browser-JP79f-a9.js";import{g as hs}from"./regrade-api-JnlABjxU.js";import{f as ws,o as _s}from"./certificate-engine-BrPYUHds.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./print-overlay-BVfxEd6n.js";const Je=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function Et(e){var C;(C=document.getElementById("my-certificates-modal"))==null||C.remove();const t=document.body.style.overflow;document.body.style.overflow="hidden";const s=document.createElement("div");s.id="my-certificates-modal",s.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",s.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const o=()=>{document.removeEventListener("keydown",d),document.body.style.overflow=t,s.remove()},d=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",d),document.body.appendChild(s),s.querySelector("[data-mycert-close]").addEventListener("click",o);const m=s.querySelector("#my-certificates-body"),i=[];(await ws(e.id).catch(()=>[])).forEach(r=>i.push({key:`central-${r.id}`,emoji:"🏅",title:r.title||"เกียรติบัตร",sub:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>_s({layout:r.layout_snapshot,variables:{name:e.full_name,date:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:r.certificate_no,...r.variables},docTitle:r.title})}));const T=await bt(e.main_room).catch(()=>null),b=T&&Number(T.head_student_id)===Number(e.id),D=T&&Number(T.vice_head_student_id)===Number(e.id),N=b?T==null?void 0:T.head_cert_url:D?T==null?void 0:T.vice_head_cert_url:null;N&&i.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${b?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(N,"_blank")});try{const{data:r}=await Le.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(r){const[{data:u},{data:w}]=await Promise.all([Le.rpc("get_my_sports_eligibility",{p_event:r.id}).then(E=>E.error?null:E.data).catch(()=>null),Le.from("outstanding_athletes").select("id, note, sports(name)").eq("event_id",r.id).eq("student_id",e.id).then(E=>E.data??[]).catch(()=>[])]);u!=null&&u.eligible&&(u!=null&&u.certificate_url)&&i.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(u.certificate_url,"_blank")}),w.forEach(E=>{var g;return i.push({key:`sports-award-${E.id}`,emoji:"🏆",title:((g=E.sports)==null?void 0:g.name)||"รางวัลนักกีฬาดีเด่น",sub:E.note||"",onOpen:null})})}}catch{}i.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>fs(e.student_code)}),m.innerHTML=i.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${i.map(r=>`
        <div data-key="${Je(r.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${r.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${r.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${Je(r.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${Je(r.sub||"")}</p>
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',i.forEach(r=>{var u;r.onOpen&&((u=m.querySelector(`[data-key="${CSS.escape(r.key)}"]`))==null||u.addEventListener("click",r.onOpen))})}const je=e=>(e??"").replace(/\/\d+/,"").trim(),Re=e=>!e.mySubmission||e.mySubmission.status==="rejected",te=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ce(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function X(e,t="info"){const s={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},o=document.createElement("div");o.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${s[t]??s.info} transition-all`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2800)}const $s={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},Ss={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},Ae={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Ve=["อา","จ","อ","พ","พฤ","ศ","ส"],Oe={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},Ke=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function ks(e){if(e!=null&&e.teacher_code)return Ke;const t=String((e==null?void 0:e.gender)||"").trim(),s=Ke.filter(o=>o.genders.includes(t));return s.length?s:Ke}function Es(e){const t=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!t)return{grade:null,isVoc:!1};const s=t.match(/^ม\.?([1-6])/);return{grade:s?parseInt(s[1],10):null,isVoc:t.startsWith("ปวช")}}function Ls(e,t){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:s,isVoc:o}=Es(e),d=t==="musolla_male",m=t==="masjid_kuwait";return!d&&!m?"":m&&!(s===6||o)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":d&&!(s>=1&&s<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function lt(e){const s=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(s.slice(0,2),16),g:parseInt(s.slice(2,4),16),b:parseInt(s.slice(4,6),16)}}function js({r:e,g:t,b:s}){return"#"+[e,t,s].map(o=>Math.max(0,Math.min(255,Math.round(o))).toString(16).padStart(2,"0")).join("")}function ze(e,t,s){const o=lt(e),d=lt(t);return js({r:o.r+(d.r-o.r)*s,g:o.g+(d.g-o.g)*s,b:o.b+(d.b-o.b)*s})}function Ne(e){if(!e)return"—";const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()+543}`}function Xe(e){if(!e)return"";const t=new Date(e),s=new Date;t.setHours(0,0,0,0),s.setHours(0,0,0,0);const o=Math.round((t-s)/864e5);return o>1?`อีก ${o} วัน`:o===1?"พรุ่งนี้":o===0?"วันนี้":o===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(o)} วัน`}function Cs(e){var d,m,i;const t=((d=e.master_subjects)==null?void 0:d.subject_group)??"",s=e.skill_group??"";return(((i=(m=e.master_subjects)==null?void 0:m.teachers)==null?void 0:i.category)??"")==="ศาสนา"||t==="AGM"||t==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:t==="ACDMVOC"||s==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:s==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:ht(s)?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:s==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function Is(e,t={}){var T,b,D;const s=((T=e.master_subjects)==null?void 0:T.subject_group)??"",o=e.skill_group??"",d=((D=(b=e.master_subjects)==null?void 0:b.teachers)==null?void 0:D.category)??"",m=d==="ศาสนา"||s==="AGM"||s==="AGMVOC"?t.teacherReligionColor||"#b45309":s==="ACDMVOC"||o==="สามัญปวช"?t.teacherVocColor||"#7c3aed":o==="ภาษา"?t.teacherLanguageColor||"#2563eb":ht(o)?t.teacherLifeColor||"#059669":o==="วิชาการ"?t.teacherAcademicColor||"#ea580c":t.teacherDefaultColor||"#059669",i=d==="ศาสนา"||s==="AGM"||s==="AGMVOC"?s==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":s==="ACDMVOC"||o==="สามัญปวช"?"กลุ่มสามัญ ปวช":o?`กลุ่มทักษะ: ${o}`:"กลุ่มวิชาสามัญ",q=i.replace("กลุ่มทักษะ: ","");return{color:m,label:i,short:q,bg:ze(m,"#ffffff",.9),badgeBg:ze(m,"#ffffff",.86),border:ze(m,"#ffffff",.35),text:ze(m,"#000000",.35)}}function Ze(e=0){const t=new Date,s=t.getDay(),o=new Date(t);o.setDate(t.getDate()-(s===0?6:s-1)),o.setDate(o.getDate()+e*7);const d=new Date(o);d.setDate(o.getDate()-1);const m={};m[0]=d;for(let i=1;i<=7;i++){const q=new Date(o);q.setDate(o.getDate()+i-1),m[i]=q}return m}function Fe(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const Lt="12:20",qs="12:50",Ms="13:05",Ts=60;function Qe(e,t){const o=String(e||t||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return Qe(t,Lt);const d=Math.max(0,Math.min(23,parseInt(o[1],10))),m=Math.max(0,Math.min(59,parseInt(o[2],10)));return d*60+m}function dt(e){const t=(e%1440+1440)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function De(e){return String(e||"").split(/[\s,]+/).map(t=>t.trim()).filter(Boolean)}function it(e,t=!1){return e==null||e===""?t:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function Bs(e,t={}){return String(e||"").trim()==="หญิง"?it(t.prayerSameRoomGuardFemaleEnabled,!1):it(t.prayerSameRoomGuardMaleEnabled,!0)}function ct(e){return String(e||"").replace(/\s+/g,"").trim()}function jt(e,t={}){return e!=null&&e.student_code?De(t.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function Ct(e,t={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const s=String(e.student_code).trim(),o=De(t.prayerScannerSun),d=De(t.prayerScannerMon),m=De(t.prayerScannerTue),i=De(t.prayerScannerWed),q=De(t.prayerScannerThu);if(!(o.includes(s)||d.includes(s)||m.includes(s)||i.includes(s)||q.includes(s)))return!0;const b=new Date().getDay();return!!(b===0&&o.includes(s)||b===1&&d.includes(s)||b===2&&m.includes(s)||b===3&&i.includes(s)||b===4&&q.includes(s))}function rt(e={},t=!1){const s=Qe(e.prayerScanStartTime,Lt),o=Qe(e.prayerScanEndTime,qs),d=Qe(e.prayerScanExtendedEndTime,Ms),m=t?d:o;return{start:s,end:m,startLabel:dt(s),endLabel:dt(m)}}function et(e={},t=!1){const s=new Date,o=s.getHours(),d=s.getMinutes(),m=o*60+d,{start:i,end:q}=rt(e,t);return q<i?m>=i||m<=q:m>=i&&m<=q}function Ds(e={},t=!1){const s=new Date,o=s.getHours()*3600+s.getMinutes()*60+s.getSeconds(),{start:d,end:m}=rt(e,t),i=d*60;let q=m*60,T=o;return m<d&&T<i&&(T+=86400),m<d&&(q+=86400),Math.max(0,q-T)}function Ns(e){const t=Math.floor(e/60),s=e%60;return`${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function qe(e){var i,q;let t=e.getFullYear();const s=((i=window._pp5SystemCfg)==null?void 0:i.academicYear)||((q=window._pp5SystemCfg)==null?void 0:q.academic_year)||2569,o=parseInt(s)-543;(t>2030||t<2024)&&(t=o);const d=String(e.getMonth()+1).padStart(2,"0"),m=String(e.getDate()).padStart(2,"0");return`${t}-${d}-${m}`}function It(e,t=[]){const s=t.map(i=>i.check_date).filter(Boolean).sort()[0],o=e||s||new Date().toISOString().slice(0,10),d=new Date(o);d.setHours(0,0,0,0);const m=d.getDay();return m&&d.setDate(d.getDate()-m),Array.from({length:20},(i,q)=>{const T=Array.from({length:5},(b,D)=>{const N=new Date(d);return N.setDate(d.getDate()+q*7+D),{date:N,ds:qe(N),day:Ve[D]}});return{n:q+1,days:T}})}function mt(e,t){const s=Object.fromEntries((t??[]).map(o=>[o.column_id,o.score]));return(e??[]).map(o=>({...o,score:s[o.id]??null}))}async function ua(e){var Ee,f,se,Q,Z;ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,o,d,m,i,q,T]=await Promise.all([We(e.id).catch(()=>[]),at(e.id).catch(()=>[]),as(e.id).catch(()=>({linked:[],unlinked:[]})),rs(e.id).catch(()=>[]),ns(e.id).catch(c=>(console.error("[student GPA] โหลดเกรดเฉลี่ยไม่สำเร็จ",c),{samai:[],sasana:[],error:ve(c)})),Pe().catch(()=>({})),bt(e.main_room).catch(()=>null),vt(e.id).catch(()=>[])]),b=T.filter(Re).sort((c,v)=>(c.due_at?new Date(c.due_at).getTime():1/0)-(v.due_at?new Date(v.due_at).getTime():1/0)),D=s.filter(c=>c.status==="pending"),N=s.slice(0,3),C=jt(e,i),r=await Promise.all(t.map(c=>_t(c.id,e.id).catch(()=>[]))),u=t.flatMap((c,v)=>(r[v]??[]).map($=>({...$,_class:c}))),w=await $t(u.map(c=>c.id),e.id).catch(()=>new Set),E=u.filter(c=>{if(c.status!=="started"||w.has(c.id))return!1;const v=c.attempts.filter(n=>n.status==="submitted"||n.status==="terminated_violation").length;return!(c.attempts.length&&c.attempts[c.attempts.length-1].status==="terminated_violation")&&v<c.max_attempts}),g=q&&Number(q.head_student_id)===Number(e.id),L=q&&Number(q.vice_head_student_id)===Number(e.id),_=(i.council_test_student_codes||"").split(/[\s,]+/).map(c=>c.trim()).filter(Boolean),h=i.council_visible_to_all!=="false"||_.includes(e.student_code);let ee=!1;try{const{data:c,error:v}=await Le.rpc("get_terangganu_access");v||(ee=(c==null?void 0:c.visible)===!0&&(c==null?void 0:c.student_allowed)===!0)}catch{ee=!1}let ne=!1,de=0;try{const[c,v]=await Promise.all([hs(),Promise.resolve(Le.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);ne=((Ee=c.visibility)==null?void 0:Ee.student_menu)===!0,de=Number(v==null?void 0:v.count)||0}catch{ne=!1,de=0}let G=!0;try{const{data:c}=await Le.from("settings").select("value").eq("key","sports_visibility").maybeSingle();c!=null&&c.value&&(G=c.value.enabled!==!1&&c.value.student_menu!==!1)}catch{G=!0}let ie=!1;try{const{data:c}=await Le.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();ie=!!c}catch{ie=!1}let ue=!1;try{const{data:c}=await Le.from("attendance_delegates").select("id, classes!inner(attendance_delegate_enabled)").eq("student_id",e.id).eq("classes.attendance_delegate_enabled",!0).limit(1);ue=!!(c!=null&&c.length)}catch{ue=!1}ce(`
    <!-- Profile card -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 mb-4 flex items-center gap-4 sm:gap-6">
      <div class="w-14 h-20 rounded-t-2xl rounded-b-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover object-top"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <p class="font-bold text-gray-800 text-base truncate">${e.full_name}</p>
          ${g?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
              👑 หัวหน้าห้อง
            </span>
          `:""}
          ${L?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              🥈 รองหัวหน้าห้อง
            </span>
          `:""}
        </div>
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${e.student_code} · ${je(e.main_room??"—")}</p>
      </div>
    </div>

    <!-- ระบบอื่น ๆ — กริดไอคอนแอปเลื่อนแนวนอนได้ถ้ามีมากกว่าที่จอแสดงพอดี (sportsVisible/councilVisible/
         terangganuVisible/regradeVisible/can_scan_prayer ล้วนเปิด-ปิดแยกอิสระ รวมกันอาจเกิน 4 ช่องได้)
         — เกียรติบัตรแสดงเสมอ ส่วนที่เหลือ conditional เหมือนเดิมทุกประการ แค่เปลี่ยนรูปแบบจากแบนเนอร์
         เต็มแถว/แถบเมนูล่างถาวร (กีฬาสี) มาเป็นไอคอน -->
    <div class="mb-4">
      <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</p>
      ${[G,ie,h,ee,ne,e.can_scan_prayer,ue].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Te({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},i.iconTileStyle)}
        ${G?Te({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},i.iconTileStyle):""}
        ${ie?Te({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},i.iconTileStyle):""}
        ${h?Te({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},i.iconTileStyle):""}
        ${ee?Te({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},i.iconTileStyle):""}
        ${ne?Te({id:"student-regrade-tile",emoji:"📋",label:"แก้ค้างเก่า",from:"#FBD0D6",to:"#E0616F",badge:de,onclick:"window.location.href='regrade.html'"},i.iconTileStyle):""}
        ${e.can_scan_prayer?Te({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},i.iconTileStyle):""}
        ${ue?Te({id:"student-attendance-delegate-tile",emoji:"✅",label:"เช็คชื่อ<br>แทนครู",from:"#CDEBD6",to:"#4CA778",onclick:"window._stuNav('attendance_delegate')"},i.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${Ct(e,i)&&et(i,C)?`
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
    ${E.map(c=>{var $,n;const v=c.attempts.some(p=>p.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${v?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${te(c.title)} · ${te(((n=($=c._class)==null?void 0:$.master_subjects)==null?void 0:n.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${c.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
          ${v?"ทำต่อ →":"เข้าสอบ →"}
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
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${D.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">คำร้อง<br>รอดำเนินการ</p>
      </button>
      <button type="button" onclick="window._stuNav('requests')" class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center relative active:scale-95 transition-transform">
        <span class="absolute top-1.5 right-2 text-gray-300 text-xs">›</span>
        <p class="text-xl sm:text-3xl font-bold text-blue-600">${s.length}</p>
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
      ${(()=>{const c=`stu_ann_seen_${e.id}`,v=new Set(JSON.parse(localStorage.getItem(c)??"[]")),$=d.filter(n=>!v.has(n.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${d.length} รายการ</p>
          ${$>0?`<span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">${$}</span>`:""}
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
    ${(()=>{const c=b.length>0,v=b[0],$=v!=null&&v.due_at?new Date(v.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${c?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${c?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${c?`ค้างอยู่ ${b.length} ชิ้น · ใกล้สุด: ${te(v.title)}${$?` (${$})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const v=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],$=new Date,n=$.getHours()*3600+$.getMinutes()*60+$.getSeconds(),p=y=>{if(!y)return null;const[O,P]=y.split(":").map(Number);return O*3600+P*60},S=o.linked.map(({cls:y,sched:O,period:P})=>{var U,re;const A=y==null?void 0:y.master_subjects,le=p(P==null?void 0:P.start_time),V=p(P==null?void 0:P.end_time),I=le!=null&&V!=null&&n>=le&&n<V,H=V!=null&&n>=V,W=I?"🟢":H?"✅":"⬜",F=P?`${(U=P.start_time)==null?void 0:U.slice(0,5)}–${(re=P.end_time)==null?void 0:re.slice(0,5)}`:`คาบ ${O.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${W}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${O.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(A==null?void 0:A.subject_name)??O.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${F} · ${(y==null?void 0:y.class_name)??""}</p>
          </div>
          ${I?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),j=d.filter(y=>y.ann_type==="deadline"&&y.deadline_at&&new Date(y.deadline_at)>$).sort((y,O)=>new Date(y.deadline_at)-new Date(O.deadline_at)).slice(0,5),Y=y=>{const O=new Date(y)-$,P=Math.floor(O/6e4);if(P<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${P} น.</span>`;const A=Math.floor(P/60);return A<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${A} ชม. ${P%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(A/24)} วัน</span>`},x=j.map(y=>{var P,A;const O=(P=y.cls)==null?void 0:P.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${y.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(O==null?void 0:O.subject_name)??""} · ${((A=y.cls)==null?void 0:A.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${Y(y.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${v}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${$.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${S?`
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${S}</div>`:'<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>'}
        ${x?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${x}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${N.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${N.map(c=>{var n;const v=Ae[c.status]??Ae.pending,$=c.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${((n=$==null?void 0:$.master_subjects)==null?void 0:n.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${c.request_type} · ${Ne(c.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${v.cls}">${v.label}</span>
            </div>
          </div>`}).join("")}
      </div>
    </div>`:`
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `);const me=document.getElementById("stu-live-clock");if(me){const c=()=>{const $=new Date;me.textContent=`${String($.getHours()).padStart(2,"0")}:${String($.getMinutes()).padStart(2,"0")}:${String($.getSeconds()).padStart(2,"0")}`};c();const v=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(v);return}c()},1e3)}const ge=(c,v)=>{const $=document.createElement("div");return $.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",$.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${c}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${v}</div>`,document.body.appendChild($),$.querySelector("#stu-popup-back").addEventListener("click",()=>$.remove()),$},Se=o.linked.find(({period:c})=>{if(!(c!=null&&c.start_time)||!(c!=null&&c.end_time))return!1;const v=new Date,$=v.getHours()*3600+v.getMinutes()*60+v.getSeconds(),[n,p]=c.start_time.split(":").map(Number),[S,j]=c.end_time.split(":").map(Number);return $>=n*3600+p*60&&$<S*3600+j*60});if(Se){const c=(()=>{const[$,n]=Se.period.end_time.split(":").map(Number);return $*3600+n*60})(),v=setInterval(()=>{const $=document.getElementById("stu-period-countdown");if(!$){clearInterval(v);return}const n=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),p=Math.max(0,c-n);if(p===0){$.textContent="หมดคาบ",clearInterval(v);return}const S=Math.floor(p/3600),j=Math.floor(p%3600/60),Y=p%60;$.textContent=`${String(S).padStart(2,"0")}:${String(j).padStart(2,"0")}:${String(Y).padStart(2,"0")}`},1e3)}const Ce={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},ke=c=>{if(!c)return"";const v=new Date(c),n=Math.floor((v-new Date)/6e4),p=v.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if(n<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${p}</span>`;if(n<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${n} น. · ${p}</span>`;const S=Math.floor(n/60);return S<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${S} ชม. ${n%60} น. · ${p}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(S/24)} วัน · ${p}</span>`};(f=document.getElementById("btn-stu-my-certificates"))==null||f.addEventListener("click",()=>Et(e)),(se=document.getElementById("btn-stu-anns"))==null||se.addEventListener("click",()=>{const c=`stu_ann_seen_${e.id}`,v=new Set(JSON.parse(localStorage.getItem(c)??"[]"));d.forEach(p=>v.add(p.id)),localStorage.setItem(c,JSON.stringify([...v]));const $=document.querySelector("#btn-stu-anns span.absolute");$&&$.remove();const n=d.length?`<div class="space-y-3">${d.map(p=>{var Y,x,y;const S=Ce[p.ann_type]??Ce.general,j=(Y=p.cls)==null?void 0:Y.master_subjects;return`<div class="rounded-2xl border ${S.border} ${S.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${p.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${S.icon} ${S.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(j==null?void 0:j.subject_name)??""} · ${((x=p.cls)==null?void 0:x.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${p.title??""}</p>
        ${p.body?`<p class="text-xs text-gray-500 mt-1">${p.body}</p>`:""}
        ${p.ann_type==="deadline"&&p.deadline_at?`<div class="mt-2">${ke(p.deadline_at)}</div>`:""}
        ${p.file_url?`<a href="${p.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(y=p.attachment_urls)!=null&&y.length?`<div class="flex flex-wrap gap-1.5 mt-2">${p.attachment_urls.map(O=>`<a href="${te(O.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${te(O.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';ge("📢 ประกาศของฉัน",n)}),(Q=document.getElementById("btn-stu-gpa"))==null||Q.addEventListener("click",()=>{const c=I=>{const H=I.filter(U=>U.grade!=null);if(!H.length)return null;const W=H.reduce((U,re)=>U+(re.credit||1),0),F=H.reduce((U,re)=>U+re.grade*(re.credit||1),0);return W>0?(F/W).toFixed(2):null},v=I=>I==null?"text-gray-400":I>=3.5?"text-emerald-600":I>=3?"text-blue-500":I>=2?"text-amber-600":"text-red-500",$=I=>I>=3.5?"ดีเยี่ยม":I>=3?"ดี":I>=2?"พอใช้":I>=1?"ผ่าน":"ไม่ผ่าน",n=I=>I.loadError?'<span class="text-[10px] font-semibold text-red-500 whitespace-nowrap">⚠️ โหลดข้อมูลไม่ครบ</span>':I.grade==null&&I.totalCols>0?`<span class="text-[10px] font-semibold text-amber-500 whitespace-nowrap" title="ครูให้คะแนนแล้ว ${I.scoredCount}/${I.totalCols} ช่อง — วิชานี้ยังไม่ถูกนับเข้าเกรดเฉลี่ยจนกว่าจะครบ">⏳ ${I.scoredCount}/${I.totalCols} · ยังไม่นับเข้า GPA</span>`:null,p=(I,H,W)=>{const U=I.filter(J=>J.grade!=null).reduce((J,B)=>J+(B.credit||1),0),re=parseFloat(H);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${W}" class="text-5xl font-extrabold ${H?v(re):"text-gray-300"} hover:opacity-70 transition">${H??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${H?v(re):"text-gray-400"}">${H?$(re):"—"}</p>
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
            ${I.map((J,B)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${B+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${J.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${J.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${J.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${J.score!=null?J.score:n(J)??"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${v(J.grade)}">${J.grade!=null?J.grade.toFixed(1):n(J)?"":"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${J.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${J.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${U}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${U}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${v(H?re:null)}">${H??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},S=(I,H,W)=>{const F=parseFloat(H);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${W}" class="text-5xl font-extrabold ${H?v(F):"text-gray-300"} hover:opacity-70 transition">${H??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${H?v(F):"text-gray-400"}">${H?$(F):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${I.length?`
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${I.map(U=>`
        <button class="gpa-pp5-btn text-left border border-gray-200 rounded-2xl p-3 hover:shadow-md transition bg-white" data-class-id="${U.classId}">
          <p class="text-[10px] text-gray-400 font-mono truncate">${U.subjectCode??""}</p>
          <p class="font-bold text-xs text-gray-800 leading-tight line-clamp-2 mt-0.5 min-h-[2rem]">${U.subjectName}</p>
          <div class="flex items-center justify-between mt-2 gap-1">
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${U.credit} นก. ${U.hasRetake?"· แก้":""}</span>
            ${n(U)??`<span class="text-lg font-extrabold ${v(U.grade)}">${U.grade!=null?U.grade.toFixed(1):"—"}</span>`}
          </div>
        </button>`).join("")}
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},j=c(m.samai),Y=c(m.sasana),x=I=>{const H=I==="samai"?m.samai:m.sasana,W=I==="samai"?j:Y;return(localStorage.getItem("studentGpaView")==="card"?"card":"table")==="card"?S(H,W,I):p(H,W,I)},O=`
      ${m.error?`
      <div class="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700">
        <p class="font-bold">⚠️ โหลดข้อมูลเกรดเฉลี่ยได้ไม่ครบ</p>
        <p class="mt-1">${te(m.error)}</p>
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
      <div id="gpa-pop-samai">${x("samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${x("sasana")}</div>`,P=ge("🎓 เกรดเฉลี่ยของฉัน",O),A=()=>{P.querySelectorAll(".gpa-pp5-btn").forEach(I=>{I.addEventListener("click",()=>{var W;const H=Number(I.dataset.classId);P.remove(),(W=window._stuOpenClass)==null||W.call(window,H)})}),["samai","sasana"].forEach(I=>{const H=P.querySelector(`#gpa-val-btn-${I}`);H&&H.addEventListener("click",()=>{const F=(I==="samai"?m.samai:m.sasana).filter(R=>R.grade!=null),U=F.reduce((R,ae)=>R+(ae.credit||1),0),re=F.reduce((R,ae)=>R+ae.grade*(ae.credit||1),0),J=U>0?(re/U).toFixed(2):"—",B=document.createElement("div");B.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",B.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
            <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
            <div class="text-sm text-gray-600 mb-3">
              <p class="font-mono text-base font-semibold text-purple-700">
                Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
              <p class="text-gray-700">${re.toFixed(2)} ÷ ${U}</p>
              <p class="text-purple-700 font-bold text-lg mt-1">= ${J}</p>
            </div>
            <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่ครูให้คะแนนครบทุกช่องแล้วเท่านั้น (${F.length} วิชา)</p>
            <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
          </div>`,document.body.appendChild(B),B.querySelector("#gpa-tip-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",R=>{R.target===B&&B.remove()})})})},le=()=>{const I=localStorage.getItem("studentGpaView")==="card"?"card":"table";P.querySelector("#gpa-view-table").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${I==="table"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`,P.querySelector("#gpa-view-card").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${I==="card"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`};le(),A();const V=I=>{localStorage.setItem("studentGpaView",I==="card"?"card":"table"),P.querySelector("#gpa-pop-samai").innerHTML=x("samai"),P.querySelector("#gpa-pop-sasana").innerHTML=x("sasana"),le(),A()};P.querySelector("#gpa-view-table").addEventListener("click",()=>V("table")),P.querySelector("#gpa-view-card").addEventListener("click",()=>V("card")),P.querySelectorAll(".gpa-pop-tab").forEach(I=>{I.addEventListener("click",()=>{const H=I.dataset.tab;P.querySelector("#gpa-pop-samai").classList.toggle("hidden",H!=="samai"),P.querySelector("#gpa-pop-sasana").classList.toggle("hidden",H!=="sasana"),P.querySelectorAll(".gpa-pop-tab").forEach(W=>{W.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${W.dataset.tab===H?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})})}),window._stuOpenClassFromTT=c=>{var v;document.querySelectorAll(".stu-fullpop").forEach($=>$.remove()),window._stuFromTimetable=!0,(v=window._stuOpenClass)==null||v.call(window,c)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const pe=async()=>{const c=ge("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:v,periods:$}=await os(e.id).catch(()=>({slots:[],periods:[]})),n=c.querySelector(".flex-1.overflow-y-auto");if(!n)return;const p=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],S=["อา","จ","อ","พ","พฤ","ศ","ส"],j=[0,1,2,3,4,5,6].filter(V=>v.some(I=>I.dow===V)),Y=new Date().getDay();let x="day",y=j.includes(Y)?Y:j[0]??0;const O={};v.forEach(V=>{O[`${V.dow}-${V.periodNo}`]=V});const P=V=>{var B,R,ae,a;const I=new Date,H=I.getHours()*3600+I.getMinutes()*60+I.getSeconds(),W={};v.filter(l=>l.dow===V&&l.span>1).forEach(l=>{for(let M=1;M<l.span;M++)W[l.periodNo+M]=l.periodNo});const F=((R=(B=$.find(l=>l.period_no===5))==null?void 0:B.end_time)==null?void 0:R.slice(0,5))??"",U=((a=(ae=$.find(l=>l.period_no===6))==null?void 0:ae.start_time)==null?void 0:a.slice(0,5))??"",re=F&&U?`${F}–${U}`:"";let J="";return $.forEach(l=>{var Ie,_e;l.period_no===6&&$.find(He=>He.period_no===5)&&(J+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${re?`<p class="text-[10px] text-emerald-500 mt-0.5">${re}</p>`:""}
            </td></tr>`);const M=O[`${V}-${l.period_no}`],z=(M==null?void 0:M.span)??1,oe=z>1?$.find(He=>He.period_no===l.period_no+z-1)??l:l,[xe,ye]=(l.start_time??"0:0").split(":").map(Number),[he,Be]=(oe.end_time??"0:0").split(":").map(Number),k=H>=xe*3600+ye*60&&H<he*3600+Be*60,K=(Ie=M==null?void 0:M.cls)==null?void 0:Ie.master_subjects,fe=["AGM","AGMVOC"].includes((K==null?void 0:K.subject_group)??""),Me=M?fe?"bg-amber-50":"bg-emerald-50":"",we=M?fe?"text-amber-800":"text-emerald-800":"text-gray-300",be=W[l.period_no]!=null;J+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${k?"text-emerald-600":"text-gray-500"}">คาบ ${l.period_no}</p>
            <p class="text-[10px] text-gray-400">${((_e=l.start_time)==null?void 0:_e.slice(0,5))??""}</p>
          </td>
          ${be?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${z>1?`rowspan="${z}"`:""}
              ${M?`onclick="window._stuOpenClassFromTT(${M.cls.id})"`:""}>
            ${M?`
              <div class="rounded-xl ${Me} border-l-4 ${fe?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${k?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${z>1?z*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${we} leading-tight">${(K==null?void 0:K.subject_name)??"—"}</p>
                <p class="text-[10px] ${we} opacity-60 mt-0.5">${(K==null?void 0:K.subject_code)??""}</p>
                ${k?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${J}</tbody>
      </table>`},A=()=>{const V=`${Math.floor(100/(j.length+1))}%`,I=`<th style="width:${V}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+j.map(F=>`<th style="width:${V}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${F===Y?"text-teal-600":"text-gray-600"}">${S[F]}</th>`).join(""),H={};j.forEach(F=>{H[F]=new Set});let W="";return $.forEach((F,U)=>{var B,R,ae,a;const re=new Date;re.getHours()*3600+re.getMinutes()*60+re.getSeconds();const J=j.map(l=>{var we;if(H[l].has(F.period_no))return"";const M=O[`${l}-${F.period_no}`],z=(M==null?void 0:M.span)??1,oe=(we=M==null?void 0:M.cls)==null?void 0:we.master_subjects,xe=["AGM","AGMVOC"].includes((oe==null?void 0:oe.subject_group)??""),ye=M?xe?"bg-amber-50":"bg-emerald-50":"",he=M?xe?"text-amber-700":"text-emerald-700":"text-gray-200",Be=z>1?$.find(be=>be.period_no===F.period_no+z-1)??F:F,[k,K]=(F.start_time??"0:0").split(":").map(Number),[fe,Me]=(Be.end_time??"0:0").split(":").map(Number);for(let be=1;be<z;be++)H[l].add(F.period_no+be);return`<td style="width:${V};padding:2px" ${z>1?`rowspan="${z}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${M?`onclick="window._stuOpenClassFromTT(${M.cls.id})"`:""}>
            ${M?`
              <div class="rounded-lg ${ye} border-l-2 ${xe?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${z>1?z*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${he} text-[8px] font-semibold leading-tight line-clamp-3">${(oe==null?void 0:oe.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(W+=`<tr>
          <td style="width:${V}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${F.period_no}</p>
            <p class="text-[8px] text-gray-300">${((B=F.start_time)==null?void 0:B.slice(0,5))??""}</p>
          </td>${J}</tr>`,F.period_no===5&&$.find(l=>l.period_no===6)){const l=((R=F.end_time)==null?void 0:R.slice(0,5))??"",M=((a=(ae=$.find(z=>z.period_no===6))==null?void 0:ae.start_time)==null?void 0:a.slice(0,5))??"";W+=`<tr><td colspan="${j.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${l&&M?` ${l}–${M}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${I}</tr></thead>
          <tbody>${W}</tbody>
        </table>
      </div>`},le=()=>{var I,H,W,F;const V=x==="week";if(n.innerHTML=`
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${V?"text-gray-500":"bg-white shadow text-teal-600"}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${V?"bg-white shadow text-teal-600":"text-gray-500"}">ทั้งสัปดาห์</button>
        </div>
        ${V?"":`
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${p[y]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>`}
      </div>
      ${V?A():P(y)}
      ${v.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(I=n.querySelector("#tt-btn-day"))==null||I.addEventListener("click",()=>{x="day",le()}),(H=n.querySelector("#tt-btn-week"))==null||H.addEventListener("click",()=>{x="week",le()}),(W=n.querySelector("#tt-prev"))==null||W.addEventListener("click",()=>{const U=j.indexOf(y);y=j[(U-1+j.length)%j.length],le()}),(F=n.querySelector("#tt-next"))==null||F.addEventListener("click",()=>{const U=j.indexOf(y);y=j[(U+1)%j.length],le()}),!V&&n.querySelector("#tt-day-cd")){const re=$.find(J=>{if(!O[`${y}-${J.period_no}`]||!J.end_time)return!1;const R=new Date,ae=R.getHours()*3600+R.getMinutes()*60+R.getSeconds(),[a,l]=J.end_time.split(":").map(Number),[M,z]=(J.start_time??"0:0").split(":").map(Number);return ae>=M*3600+z*60&&ae<a*3600+l*60});if(re){const[J,B]=re.end_time.split(":").map(Number),R=J*3600+B*60,ae=setInterval(()=>{const a=n.querySelector("#tt-day-cd");if(!a){clearInterval(ae);return}const l=new Date,M=Math.max(0,R-l.getHours()*3600-l.getMinutes()*60-l.getSeconds()),z=Math.floor(M/3600),oe=Math.floor(M%3600/60),xe=M%60;a.textContent=`${String(z).padStart(2,"0")}:${String(oe).padStart(2,"0")}:${String(xe).padStart(2,"0")}`,M===0&&clearInterval(ae)},1e3)}}};le()};window._stuOpenTimetablePopup=pe,(Z=document.getElementById("btn-stu-timetable"))==null||Z.addEventListener("click",pe),window._stuStartQuiz=async c=>{try{const v=await St(c,e.id).catch(()=>null);if(v&&v.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${v.id}`;return}const $=await kt(c);window.location.href=`quiz-exam.html?attempt=${$.id}`}catch(v){X("เข้าสอบไม่สำเร็จ: "+ve(v),"error")}}}async function pa(e,t="life"){ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await Pe().catch(()=>({}));ps(s);const o=s.academicYear,d=s.semester,[m,i,q]=await Promise.all([Xt(e.id,o,d).catch(G=>({columns:[],scores:[],error:G})),Zt(e.id,o,d).catch(G=>({columns:[],scores:[],error:G})),es(e.id).catch(G=>Object.assign([],{error:G}))]),T=mt(m.columns,m.scores),b=mt(i.columns,i.scores),D=b.reduce((G,ie)=>G+(parseFloat(ie.score)||0),0),N=b.reduce((G,ie)=>G+(parseFloat(ie.max_score)||0),0),C=N>0?Math.round(D/N*1e3)/10:0,r=D>0?xs(C):null,u=Object.fromEntries((q??[]).map(G=>[G.check_date,G.status])),w=It(s.semester_start,q??[]),E=w.flatMap(G=>G.days),g=E.reduce((G,ie)=>{var ue;return G+(((ue=Oe[u[ie.ds]])==null?void 0:ue.score)??0)},0),L=E.length*2,_=L?Math.max(0,Math.round(g/L*100)/10):0,h=(G,ie,ue,me)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${ie} ${G}</h3>
        <span class="text-[11px] text-gray-400">${ue.length} หัวข้อ</span>
      </div>
      ${ue.length?`<div class="divide-y divide-gray-50">
        ${ue.map(ge=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${ge.name}</p>
              <p class="text-[11px] text-gray-400">${ge.sheet_col?`คอลัมน์ ${ge.sheet_col} · `:""}เต็ม ${ge.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${me}">${ge.score??"—"}</p>
              <p class="text-[10px] text-gray-400">/ ${ge.max_score??"—"}</p>
            </div>
          </div>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลคะแนน</div>'}
    </section>`,ee=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">20 สัปดาห์ · สัปดาห์ละ 5 วัน</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-amber-600">${_}</p>
          <p class="text-[10px] text-gray-400">/ 10</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[520px] text-xs">
          <thead>
            <tr class="bg-gray-50 text-gray-500">
              <th class="px-2 py-2 text-left font-semibold">สัปดาห์</th>
              ${["อา","จ","อ","พ","พฤ"].map(G=>`<th class="px-2 py-2 text-center font-semibold">${G}</th>`).join("")}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${w.map(G=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${G.n}</td>
              ${G.days.map(ie=>{const ue=u[ie.ds],me=Oe[ue];return`<td class="px-1 py-1 text-center">
                  <span title="${(me==null?void 0:me.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(me==null?void 0:me.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(me==null?void 0:me.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(Oe).map(G=>`<span><b class="${G.cls.split(" ").find(ie=>ie.startsWith("text-"))??""}">${G.label}</b> ${G.title}</span>`).join("")}
      </div>
    </section>
  `,ne={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[t]??"คะแนนทักษะชีวิต",de={life:h("คะแนนทักษะชีวิต","🌱",T,"text-emerald-600"),prayer:ee,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${r?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${r.cls}">${r.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${D?`${C} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${D||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${N||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${D?C:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${h("คะแนนอ่านคิดวิเคราะห์ฯ","📖",b,"text-sky-600")}
    `}[t]??h("คะแนนทักษะชีวิต","🌱",T,"text-emerald-600");ce(`
    <h2 class="font-bold text-gray-800 mb-1">📊 คะแนนของฉัน</h2>
    <p class="text-xs text-gray-400 mb-2">คะแนนรวมอื่น ๆ นอกเหนือจากคะแนนรายวิชา · ภาค ${d??"—"} / ${o??"—"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${ne}</p>
    ${de}
  `)}async function tt(e){var E;ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,o]=await Promise.all([We(e.id).catch(()=>[]),ms().catch(()=>({})),ts(e.id).catch(()=>[])]),d=Object.fromEntries(o.filter(g=>g.status==="pending").map(g=>[g.class_id,g])),m=["อา","จ","อ","พ","พฤ","ศ","ส"],i=t.length?await ss(t.map(g=>g.id)).catch(()=>({})):{},q=g=>{const L=i[g]??[];if(!L.length)return"";const _={};return L.forEach(h=>{const ee=h.day_of_week;_[ee]||(_[ee]=[]);const ne=h.span_periods??1;for(let de=0;de<ne;de++)_[ee].push((h.period_no??0)+de)}),Object.entries(_).sort(([h],[ee])=>Number(h)-Number(ee)).map(([h,ee])=>{const ne=[...new Set(ee)].sort((G,ie)=>G-ie),de=ne.length===1?`คาบ ${ne[0]}`:`คาบ ${ne[0]}–${ne[ne.length-1]}`;return`${m[Number(h)]??h} ${de}`}).join(" · ")};if(!t.length){ce(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const T=g=>{var h,ee,ne;if(g.subject_group_override)return g.subject_group_override==="sasana";const L=((h=g.master_subjects)==null?void 0:h.subject_group)??"";return(((ne=(ee=g.master_subjects)==null?void 0:ee.teachers)==null?void 0:ne.category)??"")==="ศาสนา"||L==="AGM"||L==="AGMVOC"},b=t.filter(g=>!T(g)),D=t.filter(g=>T(g)),C=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid",r=localStorage.getItem("studentSubjectsGroup")==="sasana"?"sasana":"samai";window._stuSetSubjectView=g=>{localStorage.setItem("studentSubjectsView",g==="grid"?"grid":"list"),tt(e)},window._stuSetSubjectGroup=g=>{localStorage.setItem("studentSubjectsGroup",g==="sasana"?"sasana":"samai"),tt(e)};const u=g=>{const L=g.master_subjects,_=L==null?void 0:L.teachers,h=Is(g,s);return C?`<button onclick="window._stuOpenClass(${g.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${h.bg}; border-color:${h.border}; border-left-color:${h.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${h.badgeBg}; color:${h.text};">${h.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${h.text};">${(L==null?void 0:L.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${(L==null?void 0:L.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${je(g.class_name)}</p>
            ${q(g.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${q(g.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${_!=null&&_.image_url?`<img src="${_.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${((_==null?void 0:_.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${(_==null?void 0:_.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${g.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${h.bg}; border-color:${h.border}; border-left-color:${h.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${h.text};">${(L==null?void 0:L.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${(L==null?void 0:L.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${h.text};">${h.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${h.badgeBg}; color:${h.text};">${h.short}</span>
          <span class="text-[10px] text-gray-400">${(L==null?void 0:L.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${q(g.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${q(g.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${_!=null&&_.image_url?`<img src="${_.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${((_==null?void 0:_.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${(_==null?void 0:_.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${je(g.class_name)}</span>
      </div>
    </div>`},w=(g,L,_)=>_.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${L}</span>
          <h3 class="font-bold text-gray-700 text-sm">${g}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${_.length} วิชา</span>
        </div>
        <div class="${C?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${_.map(u).join("")}
        </div>
      </div>`:"";ce(`
    <div class="flex items-center justify-between gap-3 mb-3">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${C?"text-gray-400":"bg-white text-emerald-600 shadow-sm"}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${C?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}">กริด</button>
      </div>
    </div>
    <div class="flex gap-2 mb-2">
      <button type="button" onclick="window._stuSetSubjectGroup('samai')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">📖 สามัญ (${b.length})</button>
      <button type="button" onclick="window._stuSetSubjectGroup('sasana')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">🕌 ศาสนา (${D.length})</button>
    </div>
    <div class="flex justify-end mb-4">
      <button id="btn-manage-subject-groups" type="button" class="text-xs text-indigo-600 font-semibold hover:text-indigo-800">🔧 จัดการกลุ่มรายวิชา</button>
    </div>
    ${r==="samai"?w("วิชาสามัญ","📖",b):w("วิชาศาสนา","🕌",D)}
  `),(E=document.getElementById("btn-manage-subject-groups"))==null||E.addEventListener("click",()=>{As(e,t,d,T)})}function As(e,t,s,o){var b;(b=document.getElementById("subject-group-mgr"))==null||b.remove();const d=document.createElement("div");d.id="subject-group-mgr",d.className="fixed inset-0 z-[400] bg-white flex flex-col";const m=(D,N)=>{const C=D.master_subjects,r=s[D.id];return`
    <div class="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3">
      <p class="font-semibold text-sm text-gray-800 truncate min-w-0">${(C==null?void 0:C.subject_name)??"—"}</p>
      ${r?'<span class="text-[11px] font-semibold text-amber-500 whitespace-nowrap flex-shrink-0">⏳ รอตรวจสอบ</span>':N?`<button class="sgm-move-btn text-[11px] font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-1.5 hover:bg-indigo-50 whitespace-nowrap flex-shrink-0"
              data-class-id="${D.id}" data-requested="samai">ย้ายไป 📖 สามัญ</button>`:""}
    </div>`};let i="samai";const q=()=>{const D=t.filter(C=>(o(C)?"sasana":"samai")===i),N=d.querySelector("#sgm-list");N.innerHTML=D.length?D.map(C=>m(C,i==="sasana")).join(""):'<p class="text-center text-gray-400 text-sm py-8">ไม่มีวิชาในกลุ่มนี้</p>',N.querySelectorAll(".sgm-move-btn").forEach(C=>{C.addEventListener("click",async()=>{var w,E;const r=Number(C.dataset.classId),u=t.find(g=>g.id===r);if(confirm(`ขอย้ายวิชา "${((w=u==null?void 0:u.master_subjects)==null?void 0:w.subject_name)??""}" ไปกลุ่ม 📖 สามัญ?
(ต้องรอแอดมินตรวจสอบและอนุมัติก่อนจึงจะมีผลจริง)`)){C.disabled=!0,C.textContent="กำลังส่ง...";try{await cs(r,"samai"),Dt({title:"🔀 มีคำขอย้ายกลุ่มวิชาใหม่",body:`นักเรียนขอย้ายวิชา "${((E=u==null?void 0:u.master_subjects)==null?void 0:E.subject_name)??""}" ไปกลุ่ม 📖 สามัญ — รอตรวจสอบ`,url:"dashboard.html"}).catch(()=>{}),X("ส่งคำขอแล้ว รอแอดมินตรวจสอบ","success"),d.remove(),tt(e)}catch(g){X("ส่งคำขอไม่สำเร็จ: "+ve(g),"error"),C.disabled=!1,C.textContent="ย้ายไป 📖 สามัญ"}}})})};d.innerHTML=`
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
    <div id="sgm-list" class="flex-1 overflow-y-auto px-4 py-3 space-y-2"></div>`,document.body.appendChild(d),d.querySelector("#sgm-back").addEventListener("click",()=>d.remove());const T=()=>{d.querySelector("#sgm-tab-samai").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${i==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,d.querySelector("#sgm-tab-samai").textContent=`📖 สามัญ (${t.filter(D=>!o(D)).length})`,d.querySelector("#sgm-tab-sasana").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${i==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,d.querySelector("#sgm-tab-sasana").textContent=`🕌 ศาสนา (${t.filter(D=>o(D)).length})`};d.querySelector("#sgm-tab-samai").addEventListener("click",()=>{i="samai",T(),q()}),d.querySelector("#sgm-tab-sasana").addEventListener("click",()=>{i="sasana",T(),q()}),T(),q()}async function Ps(e,t="samai"){ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await vt(e.id).catch(()=>[]),o=r=>{var E,g,L,_,h;const u=((g=(E=r._class)==null?void 0:E.master_subjects)==null?void 0:g.subject_group)??"";return(((h=(_=(L=r._class)==null?void 0:L.master_subjects)==null?void 0:_.teachers)==null?void 0:h.category)??"")==="ศาสนา"||u==="AGM"||u==="AGMVOC"},d=s.filter(r=>!o(r)),m=s.filter(r=>o(r)),i=r=>r?new Date(r).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",q=(r,u)=>r.due_at?new Date(u).getTime()>new Date(r.due_at).getTime():!1,T=r=>r.due_at?Date.now()>new Date(r.due_at).getTime():!1,b=r=>{var g,L;const u=r.mySubmission,w=u?q(r,u.submitted_at):!1,E=!u&&T(r);return`<div onclick="window._stuOpenClass(${r.class_id})"
      class="bg-white rounded-2xl border ${u?"border-emerald-100":E?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${te(((L=(g=r._class)==null?void 0:g.master_subjects)==null?void 0:L.subject_name)??"")}</p>
        ${u?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${w?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${w?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${E?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${E?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${te(r.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${i(r.due_at)}</p>
      ${u!=null&&u.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${te(u.teacher_feedback)}</p>`:""}
    </div>`},D=r=>{if(!r.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const u=r.filter(Re).sort((E,g)=>(E.due_at?new Date(E.due_at).getTime():1/0)-(g.due_at?new Date(g.due_at).getTime():1/0)),w=r.filter(E=>E.mySubmission&&E.mySubmission.status!=="rejected").sort((E,g)=>new Date(g.mySubmission.submitted_at).getTime()-new Date(E.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${u.length})</p>
        ${u.length?`<div class="space-y-2.5">${u.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${w.length})</p>
        ${w.length?`<div class="space-y-2.5">${w.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},N=d.filter(Re).length,C=m.filter(Re).length;ce(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${N?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${N}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${C?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${C}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${D(t==="sasana"?m:d)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(r=>{r.addEventListener("click",()=>Ps(e,r.dataset.grp))})}async function Hs(e,t,s="todo"){ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const d=(await We(e.id).catch(()=>[])).find(a=>a.id===t);if(!d){ce('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:m}=await xt(async()=>{const{getClassAnnouncements:a}=await import("./api-CWYJTdOa.js");return{getClassAnnouncements:a}},__vite__mapDeps([0,1,2,3,4])).catch(()=>({})),[{columns:i,scores:q},T,b,D,N,C,r]=await Promise.all([Wt(e.id,t).catch(()=>({columns:[],scores:[]})),Ut(e.id,t).catch(()=>[]),at(e.id).catch(()=>[]),m?m(t).catch(()=>[]):Promise.resolve([]),_t(t,e.id).catch(()=>[]),Yt(t,e.id).catch(()=>[]),Jt(t).catch(()=>[])]),u=await $t(N.map(a=>a.id),e.id).catch(()=>new Set),w=window._pp5SystemCfg??await Pe().catch(()=>({})),E=us(w.semester_start),g=r.find(a=>E>=a.week_start&&E<=a.week_end),L=b.filter(a=>{var l;return((l=a.classes)==null?void 0:l.id)===t}),_=Object.fromEntries(q.map(a=>[a.assignment_id,a])),h=d.master_subjects,ee=h==null?void 0:h.teachers,ne=await Mt(t).catch(()=>(X("โหลดค่าปัดเลขร่วมไม่สำเร็จ","error"),null)),de=a=>Pt(i,a,l=>{var M,z;return((M=_[l])==null?void 0:M.final_score)??((z=_[l])==null?void 0:z.original_score)}),G=i.filter(Ue),ie=i.filter(a=>a.column_type==="derived"),ue=i.filter(a=>!nt(a)&&!Ue(a)&&!["override","derived"].includes(a.column_type)),me=i.filter(a=>nt(a)&&!Ue(a)&&!["override","derived"].includes(a.column_type)),ge=ue.reduce((a,l)=>a+(l.max_score||0),0),Se=me.reduce((a,l)=>a+(l.max_score||0),0),Ce=ue.reduce((a,l)=>a+de(l),0),ke=me.reduce((a,l)=>a+de(l),0),pe=G.reduce((a,l)=>a+de(l),0),Ee=ie.reduce((a,l)=>a+de(l),0),f=ie.reduce((a,l)=>a+Number(l.max_score||0),0),se=Ce+ke+Ee,Q=Nt(ne,se),Z=ge+Se+f,c=Z>0?Q/Z*100:0,v=i.filter(At),$=v.filter(a=>{const l=_[a.id];return a.column_type==="derived"||l&&(l.final_score!=null||l.original_score!=null)}),n=v.length>0&&$.length===v.length,p=T.length,S=T.filter(a=>a.status==="present").length,j=p>0?Math.round(S/p*100):null,Y=a=>a>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:a>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:a>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},x=a=>a>=80?4:a>=75?3.5:a>=70?3:a>=65?2.5:a>=60?2:a>=55?1.5:a>=50?1:0,y=n&&Z>0?{...Y(c),point:x(c)}:null,O=a=>{const l=_[a.id],z=a.column_type==="derived"||l&&(l.final_score!=null||l.original_score!=null)?de(a):null,oe=z!=null&&a.max_score>0?Math.round(z/a.max_score*100):null,xe=(l==null?void 0:l.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${a.assignment_name}
        ${xe?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${z!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${z!=null?Ye(ne,Ht(a),z,a.column_type==="derived"?2:1):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${a.max_score!=null?"/"+a.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${z!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${a.max_score!=null?oe!=null?oe+"%":"—%":""}
      </td>
    </tr>`},P=(a,l,M,z,oe)=>{if(!a.length)return"";const xe=M>0?Math.round(l/M*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${oe}</span>
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
            ${a.map(O).join("")}
            <tr class="${z}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${Ye(ne,a===ue?"mid_subtotal":a===me?"fin_subtotal":"bonus_subtotal",l)}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${M}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${xe}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},A=Cs(d),le=()=>`
    <div class="${A.bg} ${A.border} border border-l-4 ${A.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${A.text} text-sm leading-tight">${(h==null?void 0:h.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${(h==null?void 0:h.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(ee==null?void 0:ee.full_name)??"—"} · ${je(d.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${Z>0?Ye(ne,"total",se):"—"}</p>
        <p class="text-[10px] text-gray-400">/${Z} คะแนน</p>
        ${pe>0?`<p class="text-[10px] text-amber-500 font-medium">คะแนนพิเศษ ${pe.toFixed(1).replace(/\.0$/,"")} (แยก ไม่บวกยอดรวม)</p>`:""}
        ${y?`<div class="mt-1 flex items-center justify-end gap-1.5"><span class="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-extrabold">เกรด ${y.point.toFixed(1)}</span><span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${y.cls}">${y.label}</span></div>`:Z>0?`<span class="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">ยังไม่สรุปเกรด (${$.length}/${v.length} หัวข้อ)</span>`:""}
      </div>
    </div>`,V=a=>{const l=Ae[a.status]??Ae.pending,M=a.class_score_columns,z=Xe(a.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${a.request_type}</p>
          ${M?`<p class="text-[11px] text-gray-400 mt-0.5">${M.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${l.cls}">${l.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${Ne(a.requested_date)}${a.requested_period_no?` · คาบ ${a.requested_period_no}`:""}${z?` · ${z}`:""}</p>
        ${a.reason?`<p>💬 ${a.reason}</p>`:""}
        ${a.teacher_comment?`<p class="${a.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${a.teacher_comment}</p>`:""}
      </div>
      ${a.status==="pending"?`
        <button onclick="window._stuCancelRequest(${a.id}, ${t})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},I=()=>{const a=[],l=C.filter(Re);l.length>0&&a.push(`
        <button onclick="window._stuOpenClassTab(${t},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${l.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${l.length}</span>
        </button>`);const M=L.filter(k=>k.status==="pending");M.length>0&&M.forEach(k=>{const K=k.class_score_columns,fe=Xe(k.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${k.request_type} — รอครูอนุมัติ</p>
              ${K?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${K.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${Ne(k.requested_date)}${k.requested_period_no?` · คาบ ${k.requested_period_no}`:""}${fe?` · ${fe}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const z=L.filter(k=>k.status==="approved"&&k.exam_attended==null);z.length>0&&z.forEach(k=>{const K=k.class_score_columns,fe=Xe(k.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${k.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${K?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${K.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${Ne(k.requested_date)}${k.requested_period_no?` · คาบ ${k.requested_period_no}`:""}${fe?` · ${fe}`:""}</p>
              ${k.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${k.teacher_comment}</p>`:""}
            </div>
          </div>`)}),N.forEach(k=>{const K=k.attempts.filter(_e=>_e.status==="submitted"||_e.status==="terminated_violation").reduce((_e,He)=>Math.max(_e,He.score_pct??0),null),fe=k.attempts.length&&k.attempts[k.attempts.length-1].status==="terminated_violation"?k.attempts[k.attempts.length-1]:null,Me=k.attempts.find(_e=>_e.status==="in_progress"),we=k.attempts.filter(_e=>_e.status==="submitted"||_e.status==="terminated_violation").length;let be="",Ie="";k.status==="announced"?be='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':k.status==="started"&&u.has(k.id)?be='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':k.status==="started"&&fe?be='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':k.status==="started"&&Me?(be='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">กำลังทำอยู่</span>',Ie=`<button onclick="window._stuStartQuiz('${k.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):k.status==="started"&&we>=k.max_attempts?be='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':k.status==="started"?(be='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">เปิดสอบอยู่</span>',Ie=`<button onclick="window._stuStartQuiz('${k.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):k.status==="closed"&&(be='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),a.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${te(k.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${k.num_questions} ข้อ${k.time_limit_minutes?` · ${k.time_limit_minutes} นาที`:""} · ทำได้ ${we}/${k.max_attempts} ครั้ง</p>
            ${K!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${K.toFixed(1)}%</p>`:""}
            <div class="mt-1">${be}</div>
            ${Ie}
          </div>
        </div>`)});const oe=[d.day1_date,d.day2_date,d.day3_date,d.day4_date,d.day5_date,d.day6_date].filter(Boolean),xe=new Date;xe.setHours(0,0,0,0);const ye=oe.map(k=>{const K=new Date(k);return K.setHours(0,0,0,0),K}).filter(k=>k>=xe).sort((k,K)=>k-K);if(ye.length>0){const k=ye[0],K=Math.round((k-xe)/864e5),fe=K===0?"🔴 วันนี้!":K===1?"🟡 พรุ่งนี้":`⏰ อีก ${K} วัน`,Me=Ve[k.getDay()]??"";a.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${Me}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${k.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${Ne(wt(k))}</p>
          </div>
          <span class="text-xs font-bold ${K===0?"text-red-500":K===1?"text-amber-500":"text-emerald-600"}">${fe}</span>
        </div>`)}const he={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},Be=k=>{if(!k)return"";const K=new Date(k),Me=K-new Date,we=Math.floor(Me/6e4),be=K.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(Me<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${be}</span>`;if(we<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${we} นาที · ${be}</span>`;const Ie=Math.floor(we/60);return Ie<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${Ie} ชม. ${we%60} น. · ${be}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(Ie/24)} วัน · ${be}</span>`};return D.length>0&&[...D].sort((k,K)=>(K.priority||0)-(k.priority||0)).forEach(k=>{const K=he[k.ann_type]??he.general,fe=k.ann_type==="deadline"&&k.deadline_at?Be(k.deadline_at):"";a.push(`
          <div class="rounded-2xl border ${K.border} ${K.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${K.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${k.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${K.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${k.title??""}</p>
                ${k.body?`<p class="text-xs text-gray-500 mt-1">${k.body}</p>`:""}
                ${fe?`<div class="mt-2">${fe}</div>`:""}
                ${k.file_url?`<a href="${k.file_url}" target="_blank" rel="noopener"
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
        </div>`}`},H=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${Z>0?`<span class="text-xs text-gray-400">${c.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${i.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${P(ue,Ce,ge,"bg-blue-50","📘 กลางภาค")}
            ${P(me,ke,Se,"bg-purple-50","📙 ปลายภาค")}
            ${P(ie,Ee,f,"bg-indigo-50","🔢 คะแนนสูตร")}
            ${G.length?P(G,G.reduce((a,l)=>a+de(l),0),0,"bg-amber-50","⭐ คะแนนพิเศษ (ไม่รวมเกรด)"):""}
          </div>`}
    </div>
    ${p>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${j!==null?`<span class="text-xs text-gray-400">${S}/${p} คาบ · ${j}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${T.map(a=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${a.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${Ss[a.status]??"bg-gray-50 text-gray-400"}">
            ${$s[a.status]??"?"}
          </span>
        </div>`).join("")}
      </div>
    </div>`:""}`,W=()=>`
    <button onclick="window._stuOpenRequest(${t})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${L.length?`<div class="space-y-3">${L.map(V).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,F=a=>a?new Date(a).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",U=(a,l)=>a.due_at?new Date(l).getTime()>new Date(a.due_at).getTime():!1,re=a=>a.due_at?Date.now()>new Date(a.due_at).getTime():!1,J=a=>{var xe,ye;const l=a.mySubmission,M=(l==null?void 0:l.status)==="rejected",z=l?U(a,l.submitted_at):!1,oe=!l&&re(a);return`<div class="bg-white rounded-2xl border ${M?"border-red-200":l?"border-emerald-100":oe?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${te(a.title)}</p>
        ${M?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':l?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${z?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${z?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${oe?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${oe?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${a.description?`<p class="text-xs text-gray-500 mb-1.5">${te(a.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${F(a.due_at)}</p>
      ${(xe=a.attachment_urls)!=null&&xe.length?`<div class="flex flex-wrap gap-1.5 mb-2">${a.attachment_urls.map(he=>`<a href="${te(he.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${te(he.name)}</a>`).join("")}</div>`:""}
      ${(ye=l==null?void 0:l.file_urls)!=null&&ye.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(l.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${l.file_urls.map(he=>`<a href="${te(he.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${te(he.name)}</a>`).join("")}</div></div>`:""}
      ${l!=null&&l.teacher_feedback?M?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${te(l.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${te(l.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${M?"bg-red-600 text-white hover:bg-red-700":l?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${a.id}">${M?"📤 ส่งแก้ไขใหม่":l?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},R=s==="scores"?H():s==="requests"?W():s==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${C.length?`<div class="space-y-3">${C.map(J).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:I();ce(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${le()}
    ${g?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${E}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${te(g.topic)}</p>
      ${g.description?`<p class="text-xs text-indigo-400 mt-0.5">${te(g.description)}</p>`:""}
    </div>`:""}
    ${R}
  `),window._stuCancelRequest=async(a,l=t)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await ft(a),X("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(l,"requests")}catch(M){X("ยกเลิกไม่สำเร็จ: "+ve(M),"error")}},window._stuStartQuiz=async a=>{try{const l=await St(a,e.id).catch(()=>null);if(l&&l.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${l.id}`;return}const M=await kt(a);window.location.href=`quiz-exam.html?attempt=${M.id}`}catch(l){X("เข้าสอบไม่สำเร็จ: "+ve(l),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(a=>{a.addEventListener("click",()=>{const l=C.find(M=>M.id===parseInt(a.dataset.aid,10));l&&ae(l)})});function ae(a){var M;(M=document.getElementById("stu-submit-modal"))==null||M.remove();const l=document.createElement("div");l.id="stu-submit-modal",l.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",l.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📤 ส่งงาน — ${te(a.title)}</h3>
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
      </div>`,document.body.appendChild(l),l.addEventListener("click",z=>{z.target===l&&l.remove()}),l.querySelector("#ss-close").addEventListener("click",()=>l.remove()),l.querySelector("#ss-submit").addEventListener("click",async()=>{var xe;const z=[...l.querySelector("#ss-files").files??[]];if(!z.length&&!a.mySubmission){X("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const oe=l.querySelector("#ss-submit");oe.disabled=!0,oe.textContent="กำลังส่ง...";try{const ye=[];for(const Be of z)ye.push(await gs(Be,`class-${t}/student-${e.id}`));const he=ye.length?ye:((xe=a.mySubmission)==null?void 0:xe.file_urls)??[];await Kt(a.id,e.id,he,l.querySelector("#ss-note").value.trim()||null),X("ส่งงานสำเร็จ ✅","success"),l.remove(),Hs(e,t,"assignments")}catch(ye){X("ส่งงานไม่สำเร็จ: "+ve(ye),"error"),oe.disabled=!1,oe.textContent="ส่งงาน"}})}}async function Rs(e){ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const t=await at(e.id).catch(()=>[]),s=`<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`;if(!t.length){ce(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${s}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`);return}ce(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} รายการ)</span></h2>
    ${s}
    <div class="space-y-3">
      ${t.map(o=>{var q,T;const d=Ae[o.status]??Ae.pending,m=o.classes,i=o.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((q=m==null?void 0:m.master_subjects)==null?void 0:q.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((T=m==null?void 0:m.master_subjects)==null?void 0:T.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${d.cls}">${d.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${o.request_type}</span></p>
            ${i?`<p>📝 หัวข้อ: <span class="text-gray-700">${i.assignment_name}</span></p>`:""}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${Ne(o.requested_date)}</span>
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
  `),window._stuCancelRequest=async o=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await ft(o),X("ยกเลิกคำร้องแล้ว","success"),Rs(e)}catch(d){X("ยกเลิกไม่สำเร็จ: "+ve(d),"error")}}}async function xa(e,t){var ke,pe,Ee;ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,o]=await Promise.all([We(e.id).catch(()=>[]),zt(e.id).catch(()=>0)]),d=s.find(f=>f.id===t);if(!d){ce('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(o>=2){ce(`
      <button onclick="window._stuOpenClassTab(${t},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const m=o===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",i=d.master_subjects,q=i==null?void 0:i.teacher_id,T=i==null?void 0:i.teachers,b=q?(T==null?void 0:T.full_name)??"ครูผู้สอน":"ครูผู้สอน",D=String(b||"ค").trim().charAt(0).toUpperCase()||"ค",N=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||d.class_name||"—";let C=null;const[r,u,w]=await Promise.all([Ft(t).catch(()=>[]),q?Gt(q,t).catch(f=>(C=f,[])):Promise.resolve([]),Qt().catch(()=>[])]),E=r.filter(f=>f.column_type!=="override"),g={};for(const f of u){g[`${f.day_of_week}_${f.period_no}`]=f;const se=f.span_periods??1;for(let Q=1;Q<se;Q++)g[`${f.day_of_week}_${f.period_no+Q}`]={...f,_secondary:!0}}const L=u.length>0;if(!L){ce(`
      <button onclick="window._stuOpenClassTab(${t}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(i==null?void 0:i.subject_name)??""} · ${je(d.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${q?C?`ระบบอ่านตารางครูไม่สำเร็จ: ${C.message??C}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${q?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const _="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",h=_+" cursor-pointer";let ee=null,ne=0;const de=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],G=(f,se,Q=null)=>{const Z=String(f??"").trim(),c=String(se??"").trim();return Z&&c?`${Z} — ${c}`:Z||(Q!=null?String(Q):"")},ie=f=>{const se=de[f%de.length];return`${se.bg} ${se.text}`};let ue={};try{ue=JSON.parse(localStorage.getItem(`scheduleColors_${q??"x"}`)??"{}")}catch{}const me={};let ge=0;u.forEach(f=>{const se=G(f.subject_name,f.class_name,f.subject_id);if(!se||me[se]!=null)return;const Q=ue[se]??ue[f.subject_id]??ue[f.subject_name],Z=Number(Q);me[se]=Number.isFinite(Z)?Z:ge++});const Se=(f=0)=>{const se=[0,1,2,3,4,5],Q={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},Z={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},c=Ze(f),v=new Date;v.setHours(0,0,0,0);const $=se.map(p=>{const S=c[p];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${Z[p]}">
        <p class="text-sm font-bold text-gray-700">${Q[p]}</p>
        <p class="text-xs text-gray-400">${S.getDate()}/${S.getMonth()+1}</p>
      </th>`}).join(""),n=w.map(p=>{var x,y;const S=((x=p.start_time)==null?void 0:x.slice(0,5))??"",j=((y=p.end_time)==null?void 0:y.slice(0,5))??"",Y=se.map(O=>{const P=`${O}_${p.period_no}`,A=g[P];if(A!=null&&A._secondary)return"";const V=c[O]<v;if(!A)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${p.period_no}" data-day="${O}" data-week-offset="${f}"
              ${V?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${V?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${V?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${V?"ล็อก":"＋"}</span>
            </button>
          </td>`;const I=A.span_periods??1,H=G(A.subject_name,A.class_name,A.subject_id),W=me[H]??0,F=ie(W);return`<td class="border border-gray-100 p-0" style="height:1px" ${I>1?`rowspan="${I}"`:""}>
          <div class="w-full h-full ${F} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${A.subject_name??"ไม่ว่าง"}</p>
            ${A.class_name?`<p class="text-[10px] opacity-80 leading-tight">${je(A.class_name)}</p>`:""}
            ${A.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${A.teacher_name}</p>`:""}
            ${I>1?`<p class="text-[9px] opacity-40 mt-0.5">${I} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${p.period_no}</p>
          <p class="text-[10px] text-gray-400">${S}–${j}</p>
        </td>
        ${Y}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${$}
          </tr>
        </thead>
        <tbody>${n}</tbody>
      </table>
    </div>`},Ce=f=>{const se=Ze(f);return`${f===0?"สัปดาห์นี้":f===1?"สัปดาห์หน้า":`อีก ${f} สัปดาห์`} (${Fe(se[0])} - ${Fe(se[5])})`};if(ce(`
    <button onclick="window._stuOpenClass(${t})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(i==null?void 0:i.subject_name)??""} · ${je(d.class_name)}</p>
      ${m}

      ${L?`
      <div id="schedule-first-gate" class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-bold text-emerald-800">เลือกคาบว่างของครูก่อน</p>
        <p class="mt-1 text-xs text-emerald-600">ระบบจะเปิดตารางสอนให้เลือกวันและคาบ แล้วค่อยกรอกข้อมูลคำร้องต่อ</p>
      </div>`:""}

      <form id="req-form" class="space-y-4 ${L?"hidden":""}">
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
          <select id="req-col" class="${h}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${E.map(f=>`<option value="${f.id}">${f.assignment_name} (${f.assignment_type} · เต็ม ${f.max_score})</option>`).join("")}
          </select>
        </div>

        <!-- Schedule grid / manual date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันและคาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${L?`
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
              <input type="date" id="req-date" class="${_}"
                min="${wt(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${h}" required>
                <option value="">— เลือกคาบ —</option>
                ${w.map(f=>`<option value="${f.period_no}">คาบ ${f.period_no} (${f.start_time.slice(0,5)}–${f.end_time.slice(0,5)})</option>`).join("")}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${_} resize-none"
            placeholder="ระบุเหตุผลที่ขาดสอบ..."></textarea>
        </div>

        <button type="submit" id="req-submit"
          class="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ยื่นคำร้อง
        </button>
      </form>
    </div>
    ${L?`
      <div id="teacher-schedule-modal" class="hidden fixed inset-0 z-[120] bg-black/50 p-4 items-center justify-center">
        <div class="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold shadow-sm">
                ${T!=null&&T.image_url?`<img src="${T.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${D}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${b} · ${(i==null?void 0:i.subject_name)??""}</p>
                <p class="text-[11px] text-gray-400 mt-0.5 truncate">นักเรียน ${(e==null?void 0:e.full_name)??"—"} · รหัส ${(e==null?void 0:e.student_code)??"—"} · ห้อง ${N}</p>
              </div>
            </div>
            <button type="button" id="close-schedule-modal"
              class="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600">×</button>
          </div>
          <div class="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p class="text-[11px] text-emerald-600 font-medium">กรุณาเลือกคาบว่างก่อนกรอกคำร้อง · ช่องว่างที่ไม่ถูกล็อกเลือกได้</p>
            <select id="schedule-week-select"
              class="border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200">
              ${[0,1,2,3,4].map(f=>`<option value="${f}">${Ce(f)}</option>`).join("")}
            </select>
          </div>
          <div id="schedule-grid-wrap">${Se(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(f=>{f.addEventListener("change",()=>{var Z;const se=document.getElementById("req-reason-wrap"),Q=f.value==="สอบย้อนหลัง";se.classList.toggle("hidden",!Q),(Z=document.getElementById("req-reason"))==null||Z.toggleAttribute("required",Q)})}),L){const f=document.getElementById("teacher-schedule-modal");(ke=document.getElementById("open-schedule-modal"))==null||ke.addEventListener("click",()=>{f==null||f.classList.remove("hidden"),f==null||f.classList.add("flex")}),(pe=document.getElementById("close-schedule-modal"))==null||pe.addEventListener("click",()=>{var Q;if(!ee){(Q=window._stuOpenClassTab)==null||Q.call(window,t,"requests");return}f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex")}),f==null||f.addEventListener("click",Q=>{Q.target===f&&ee&&(f.classList.add("hidden"),f.classList.remove("flex"))});const se=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(Q=>{Q.addEventListener("click",()=>{var Y,x;const Z=parseInt(Q.dataset.period),c=parseInt(Q.dataset.day),v=parseInt(Q.dataset.weekOffset??ne),n=Ze(v)[c];ee={period_no:Z,day_of_week:c,date:n,week_offset:v},document.getElementById("req-date").value=qe(n),document.getElementById("req-period-hidden").value=Z;const p=document.getElementById("period-summary"),S=document.getElementById("period-summary-text");p==null||p.classList.remove("hidden"),S&&(S.textContent=`คาบ ${Z} วัน${Ve[c]??""} ${Fe(n)}`);const j=document.getElementById("schedule-picker-label");j&&(j.textContent=`เลือกคาบ ${Z} วัน${Ve[c]??""} ${Fe(n)} แล้ว`),(Y=document.getElementById("schedule-first-gate"))==null||Y.classList.add("hidden"),(x=document.getElementById("req-form"))==null||x.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(y=>{y.classList.toggle("ring-2",y===Q),y.classList.toggle("ring-emerald-500",y===Q),y.classList.toggle("bg-emerald-200",y===Q)}),f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex")})})};se(),(Ee=document.getElementById("schedule-week-select"))==null||Ee.addEventListener("change",Q=>{ne=parseInt(Q.target.value||"0");const Z=document.getElementById("schedule-grid-wrap");Z&&(Z.innerHTML=Se(ne)),se()}),setTimeout(()=>{f==null||f.classList.remove("hidden"),f==null||f.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async f=>{var n,p,S,j,Y;f.preventDefault();const se=document.getElementById("req-submit"),Q=(n=document.querySelector('input[name="req_type"]:checked'))==null?void 0:n.value,Z=document.getElementById("req-col").value,c=((p=document.getElementById("req-reason"))==null?void 0:p.value.trim())||null,v=(S=document.getElementById("req-date"))==null?void 0:S.value,$=L?(j=document.getElementById("req-period-hidden"))==null?void 0:j.value:(Y=document.getElementById("req-period-sel"))==null?void 0:Y.value;if(!Q||!Z||!v||!$){if(X("กรุณากรอกข้อมูลให้ครบ","warning"),L&&!$){X("กรุณาเลือกคาบว่างจากตารางครู","warning");const x=document.getElementById("teacher-schedule-modal");x==null||x.classList.remove("hidden"),x==null||x.classList.add("flex")}return}if(Q==="สอบย้อนหลัง"&&!c){X("กรุณาระบุเหตุผล","warning");return}se.disabled=!0,se.textContent="กำลังยื่น...";try{await Vt({student_id:e.id,class_id:t,assignment_id:parseInt(Z),request_type:Q,requested_date:v,requested_period_no:parseInt($),reason:Q==="สอบย้อนหลัง"?c:null,status:"pending"}),X("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(t,"requests")}catch(x){X("ยื่นไม่สำเร็จ: "+ve(x),"error")}finally{se.disabled=!1,se.textContent="ยื่นคำร้อง"}})}async function ba(e,t){var m,i,q,T;const s=()=>`
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
      </div>`;ce(`
    <h2 class="font-bold text-gray-800 mb-4">👤 โปรไฟล์ของฉัน</h2>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4 flex items-center gap-4 relative overflow-hidden">
      <!-- Specular vertical frame with 3D shadow and sheen -->
      <div class="relative w-[72px] h-[96px] rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-white shadow-[0_8px_16px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.7)] flex items-center justify-center">
        <!-- Glass sheen overlay for 3D look -->
        <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/35 pointer-events-none z-10"></div>
        <div class="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none z-20"></div>
        
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover relative z-0"/>`:`<span class="text-white text-3xl font-bold bg-gradient-to-tr from-emerald-400 to-teal-400 w-full h-full flex items-center justify-center select-none relative z-0">
               ${(e.full_name??"น").charAt(0)}
             </span>`}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold text-gray-800 text-base leading-snug truncate">${e.full_name}</p>
        <p class="text-xs text-gray-400 mt-1">รหัส ${e.student_code}</p>
        <p class="text-xs text-gray-500 mt-0.5">ห้อง ${e.main_room??"—"}</p>
      </div>
      <!-- QR Code + Leave Permission trigger icons inside card -->
      <div class="flex flex-col gap-2 flex-shrink-0">
        <button id="btn-show-my-qr"
          class="w-12 h-12 rounded-2xl bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-emerald-600 flex items-center justify-center shadow-sm border border-emerald-100/50 transition-all"
          title="แสดง QR Code ของฉัน">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h6v6H3V3zm2 2v2h2V5H5z"/>
            <path d="M15 3h6v6h-6V3zm2 2v2h2V5h-2z"/>
            <path d="M3 15h6v6H3v-6zm2 2v2h2v-2H5z"/>
            <path d="M10 3h2v2h-2V3zm0 4h2v2h-2V7zm3 0h2v2h-2V7zm0-4h2v2h-2V3zm5 8h2v2h-2v-2zm-3 2h2v2h-2v-2zm3 3h2v2h-2v-2zm-3 3h2v2h-2v-2zm-3-3h2v2h-2v-2zm-3 3h2v2h-2v-2zm6-3h2v2h-2v-2zm3-3h2v2h-2v-2z"/>
          </svg>
        </button>
        <button id="btn-show-my-leave"
          class="w-12 h-12 rounded-2xl bg-amber-50 hover:bg-amber-100 active:scale-95 text-amber-600 flex items-center justify-center shadow-sm border border-amber-100/50 transition-all text-xl"
          title="ใบอนุญาตออกนอกห้อง">
          🚪
        </button>
        <button id="btn-request-qr-card"
          class="w-12 h-12 rounded-2xl bg-pink-50 hover:bg-pink-100 active:scale-95 text-pink-600 flex items-center justify-center shadow-sm border border-pink-100/50 transition-all text-xl"
          title="แจ้งขอทำบัตร QR Code">
          🎫
        </button>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-6">
      <div class="px-5 py-3.5 border-b border-gray-50 flex justify-between">
        <span class="text-sm text-gray-500">รหัสนักเรียน</span>
        <span class="text-sm font-medium text-gray-800">${e.student_code}</span>
      </div>
      <div class="px-5 py-3.5 border-b border-gray-50 flex justify-between">
        <span class="text-sm text-gray-500">ห้องเรียน</span>
        <span class="text-sm font-medium text-gray-800">${e.main_room??"—"}</span>
      </div>
      ${e.religion_room?`
      <div class="px-5 py-3.5 flex justify-between">
        <span class="text-sm text-gray-500">ห้องศาสนา</span>
        <span class="text-sm font-medium text-gray-800">${e.religion_room}</span>
      </div>`:""}
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

    ${s()}

    <button id="stu-logout-btn"
      class="w-full py-3.5 rounded-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold text-sm
             shadow-md shadow-red-200/60 transition flex items-center justify-center gap-2">
      🚪 ออกจากระบบ
    </button>

    <p class="text-center text-[10px] text-gray-300 mt-4 leading-relaxed">
      พัฒนาโดย <span class="text-gray-400 font-medium">KruHambalWaji</span><br/>
      ปพ.5 ออนไลน์ © 2026 v${ys}
    </p>
  `),(m=document.getElementById("btn-stu-my-certificates-profile"))==null||m.addEventListener("click",()=>Et(e)),(i=document.getElementById("btn-stu-contact-admin"))==null||i.addEventListener("click",()=>{var b;(b=window._openFeedbackWidget)==null||b.call(window)}),(q=document.getElementById("btn-stu-pw-reset"))==null||q.addEventListener("click",()=>{o()});function o(){var D;(D=document.getElementById("pw-choice-modal"))==null||D.remove();const b=document.createElement("div");b.id="pw-choice-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center space-y-4 animate-fade">
        <div class="text-4xl">🔑</div>
        <p class="font-bold text-gray-800">ต้องการเปลี่ยนรหัสผ่านแบบไหน?</p>
        <div class="space-y-2.5">
          <button id="pwc-self" class="w-full py-3 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition text-sm font-semibold text-gray-700">
            ✏️ เปลี่ยนด้วยตนเอง
          </button>
          <button id="pwc-admin" class="w-full py-3 rounded-2xl text-white text-sm font-semibold transition"
            style="background:linear-gradient(135deg,#db2777,#9d174d);">
            📨 ให้แอดมินรีเซ็ทให้
          </button>
        </div>
        <button id="pwc-cancel" class="text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>`,document.body.appendChild(b),b.addEventListener("click",N=>{N.target===b&&b.remove()}),b.querySelector("#pwc-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#pwc-self").addEventListener("click",()=>{b.remove(),d()}),b.querySelector("#pwc-admin").addEventListener("click",()=>{var N;b.remove(),(N=window._openPasswordResetRequest)==null||N.call(window)})}function d(){var D;(D=document.getElementById("self-pw-modal"))==null||D.remove();const b=document.createElement("div");b.id="self-pw-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",N=>{N.target===b&&b.remove()}),b.querySelector("#self-pw-close").addEventListener("click",()=>b.remove()),b.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const N=b.querySelector("#btn-stu-save-pw"),C=b.querySelector("#stu-new-pw").value,r=b.querySelector("#stu-new-pw-confirm").value,u=b.querySelector("#stu-pw-msg"),w=(E,g)=>{u.className=`text-xs text-center py-2.5 rounded-xl ${g?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,u.textContent=E,u.classList.remove("hidden")};if(!C||C.length<6){w("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if(C!==r){w("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}N.disabled=!0,N.textContent="กำลังบันทึก...",u.classList.add("hidden");try{const{error:E}=await Le.auth.updateUser({password:C});if(E)throw E;w("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),b.querySelector("#stu-new-pw").value="",b.querySelector("#stu-new-pw-confirm").value=""}catch(E){w("ไม่สำเร็จ: "+ve(E),!0)}finally{N.disabled=!1,N.textContent="บันทึกรหัสผ่านใหม่"}})}(T=document.getElementById("stu-logout-btn"))==null||T.addEventListener("click",()=>{var D;(D=document.getElementById("stu-logout-confirm"))==null||D.remove();const b=document.createElement("div");b.id="stu-logout-confirm",b.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.querySelector("#stu-logout-cancel").addEventListener("click",()=>b.remove()),b.addEventListener("click",N=>{N.target===b&&b.remove()}),b.querySelector("#stu-logout-confirm-btn").addEventListener("click",t)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{zs(e)}),document.getElementById("btn-request-qr-card").addEventListener("click",()=>{var D;(D=document.getElementById("qr-request-confirm"))==null||D.remove();const b=document.createElement("div");b.id="qr-request-confirm",b.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(b),b.addEventListener("click",N=>{N.target===b&&b.remove()}),b.querySelector("#qr-request-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#qr-request-ok").addEventListener("click",async()=>{const N=b.querySelector("#qr-request-ok");N.disabled=!0,N.textContent="กำลังส่ง...";try{await Tt({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),Bt({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),b.remove(),X("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch(C){N.disabled=!1,N.textContent="ยืนยัน",X("ส่งไม่สำเร็จ: "+ve(C),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var de;const b=window._pp5SystemCfg??await Pe().catch(()=>({})),D=parseInt(b.studentQrDailyLimit||"3",10),N=parseInt(b.studentQrExpirySeconds||"60",10),C=`qr_generation_logs_${e.id}`,r=qe(new Date);let u=JSON.parse(localStorage.getItem(C)||"null");if((!u||u.date!==r)&&(u={date:r,count:0}),u.count>=D){X(`คุณสร้าง QR Code ครบโควต้า ${D} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}u.count+=1,localStorage.setItem(C,JSON.stringify(u)),(de=document.getElementById("student-qr-modal"))==null||de.remove();const w=document.createElement("div");w.id="student-qr-modal",w.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",w.innerHTML=`
      <div class="text-center w-full max-w-sm">
        <div class="mb-5">
          <h3 class="text-2xl font-bold text-gray-800">🎫 QR Code ของฉัน</h3>
          <p class="text-sm font-semibold text-emerald-600 mt-1">${e.full_name}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส: ${e.student_code} · ห้อง: ${je(e.main_room)}</p>
        </div>
        
        <div class="relative w-64 h-64 mx-auto mb-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
          <canvas id="student-qr-canvas" class="w-56 h-56 object-contain"></canvas>
        </div>

        <div class="mb-8 px-4">
          <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-2.5">
            <div id="qr-timer-bar" class="bg-emerald-500 h-full w-full transition-all duration-1000 ease-linear"></div>
          </div>
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${N}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${D-u.count} / ${D} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(w);const E=w.querySelector("#student-qr-canvas"),g=Math.floor(Date.now()/1e3),L=`SQ:${e.student_code}:${g}`;try{await vs.toCanvas(E,L,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(G){console.error("Failed to draw QR Code:",G),X("สร้าง QR Code ไม่สำเร็จ","error"),w.remove();return}let _=N;const h=w.querySelector("#qr-timer-bar"),ee=w.querySelector("#qr-timer-sec"),ne=setInterval(()=>{_-=1,ee&&(ee.textContent=_),h&&(h.style.width=`${_/N*100}%`),_<=0&&(clearInterval(ne),w.remove(),X("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);w.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(ne),w.remove()})})}const Os={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function zs(e){var o;(o=document.getElementById("student-leave-modal"))==null||o.remove();const t=document.createElement("div");t.id="student-leave-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",t.innerHTML=`
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
  `,document.body.appendChild(t);const s=()=>{t._leaveTimer&&clearInterval(t._leaveTimer),t.remove()};t.querySelector("#btn-leave-modal-close").addEventListener("click",s),Gs(e,t)}function Fs(e,t){e.querySelectorAll(".leave-tab-btn").forEach(s=>{const o=s.dataset.leaveTab===t;s.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${o?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function Gs(e,t){const s=t.querySelector("#student-leave-body");let o="permit";try{const[d,m]=await Promise.all([ds(e.id),is(e.id)]),i=m.filter(C=>C.status==="overdue").length,q=i>=3?"danger":i>=1?"warning":"safe",T=Os[q],b=()=>{var r,u,w,E;let C="";if(d){const g=((u=(r=d.classes)==null?void 0:r.master_subjects)==null?void 0:u.subject_name)||((w=d.classes)==null?void 0:w.class_name)||"—";C=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${te(g)} · เหตุผล: ${te(d.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${te(((E=d.teachers)==null?void 0:E.full_name)||"—")}</p>
          </div>
        `}return`
        <div class="rounded-2xl ${T.badgeBg} border ${T.border} px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">สถานะปัจจุบัน</p>
            <p class="text-sm font-extrabold ${T.badgeText} mt-0.5">${T.label}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">เลยเวลา/ไม่กลับ</p>
            <p class="text-sm font-extrabold ${T.badgeText} mt-0.5">${i}/3 ครั้ง</p>
          </div>
        </div>
        ${C}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},D=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${m.length?m.map(r=>{var L,_,h;const u=((_=(L=r.classes)==null?void 0:L.master_subjects)==null?void 0:_.subject_name)||((h=r.classes)==null?void 0:h.class_name)||"—",w=r.status==="active"?"🚪 กำลังออก":r.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",E=r.status==="active"?"text-amber-600":r.status==="overdue"?"text-red-600":"text-emerald-600",g=new Date(r.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${te(u)}</span>
                  <span class="text-[10px] font-bold ${E}">${w}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${g} · ${te(r.reason)} · ${r.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,N=()=>{if(s.innerHTML=o==="permit"?b():D(),Fs(t,o),t.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${o==="permit"?T.border:"border-transparent"}`,o==="permit"&&d){const C=s.querySelector("#student-leave-active-card"),r=s.querySelector("#student-leave-active-label"),u=s.querySelector("#student-leave-active-timer"),w=s.querySelector("#student-leave-active-detail"),E=s.querySelector("#student-leave-active-teacher"),g=()=>{const L=bs(d.created_at,d.allowed_duration);u&&(u.textContent=L.timerText),L.isOverdue&&C&&!C.classList.contains("bg-red-50")&&(C.classList.remove("border-amber-200","bg-amber-50"),C.classList.add("border-red-200","bg-red-50","animate-pulse"),r&&(r.textContent="⛔ เลยเวลา",r.classList.replace("text-amber-700","text-red-700")),u&&u.classList.replace("text-amber-700","text-red-700"),w&&w.classList.replace("text-amber-800","text-red-800"),E&&E.classList.replace("text-amber-600","text-red-600")),L.isBeyondLimit&&C&&C.classList.remove("animate-pulse")};g(),t._leaveTimer=setInterval(g,1e3)}};t.querySelectorAll(".leave-tab-btn").forEach(C=>{C.addEventListener("click",()=>{t._leaveTimer&&clearInterval(t._leaveTimer),o=C.dataset.leaveTab,N()})}),N()}catch(d){s.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${te(ve(d))}</p>`}}async function qt(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const s=document.createElement("script");s.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",s.onload=()=>e(window.Html5Qrcode),s.onerror=o=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(s)})}const Qs="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",Vs="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let Ge=null;function Ws(){return Ge||(Ge=new Promise((e,t)=>{var o,d;if((d=(o=window.google)==null?void 0:o.accounts)!=null&&d.id){e();return}const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,s.onload=()=>e(),s.onerror=()=>t(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(s)}),Ge)}function ga(){var o;(o=document.getElementById("stu-email-link-modal"))==null||o.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e);const t=(d,m)=>{const i=e.querySelector("#sel-msg");i.className=`text-xs text-center py-2.5 rounded-xl ${m?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,i.textContent=d,i.classList.remove("hidden")},s=async(d,m,i)=>{m&&(m.disabled=!0);try{await yt(d),t(`เชื่อมอีเมล ${d} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(q){t("ไม่สำเร็จ: "+ve(q),!0),m&&(m.disabled=!1,m.textContent=i)}};Ws().then(()=>{window.google.accounts.id.initialize({client_id:Qs,ux_mode:"redirect",login_uri:Vs}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",d=>{d.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const d=e.querySelector("#sel-save"),m=e.querySelector("#sel-email").value.trim(),i=e.querySelector("#sel-email-confirm").value.trim();if(!m||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){t("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(m!==i){t("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}d.textContent="กำลังบันทึก...",await s(m,d,"เชื่อมอีเมล")})}async function fa(e){try{await yt(e),X(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(t){X("เชื่อมอีเมลไม่สำเร็จ: "+ve(t),"error")}}const ut={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},pt={};function $e(e="success",t=null){try{const s=ut[e]?e:"error",o=t==="หญิง"?"female":"male",d=`${s}_${o}`;let m=pt[d];if(!m){const i="/pp5online/";m=new Audio(`${i}sounds/${ut[s][o]}`),pt[d]=m}m.currentTime=0,m.volume=1,m.play().catch(i=>console.warn("Play scan sound failed:",i))}catch(s){console.error("Play scan sound failed",s)}}function st(e,t){const o=It(t==null?void 0:t.semester_start,[]).find(d=>d.days.some(m=>m.ds===e));return o?o.n:1}async function ya(e){var v,$;const t=e;window._lastSuccessFeedbackHTML="",ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,o]=await Promise.all([Pe().catch(()=>({})),Rt().catch(()=>[])]);window._pp5SystemCfg=s;let d=!1;if(e.student_code)d=Ct(e,s);else if(e.teacher_code){const n=(s.prayerScannerTeachers||"").split(/[\s,]+/).map(S=>S.trim()).filter(Boolean);let p=null;try{const S=await Le.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();p=(S==null?void 0:S.data)??null}catch{}d=n.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(p==null?void 0:p.role)==="admin"}if(!d){ce(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const m=!!e.teacher_code,i=!m&&jt(e,s),q=rt(s,i);if(!m&&!et(s,i)){ce(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-100 text-3xl">
          🕌
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">นอกช่วงเวลาบันทึกกิจกรรมละหมาด</h3>
        <p class="text-xs text-gray-500 leading-relaxed">
          ระบบสแกนเปิดให้บันทึกเวลาเฉพาะช่วงเวลา <b>${q.startLabel} น. ถึง ${q.endLabel} น.</b> เท่านั้น<br>
          (ยกเว้นคุณครูที่สามารถเข้าใช้งานได้ตลอดเวลา)
        </p>
        <button id="scanner-btn-back-restricted" class="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl active:scale-95 transition-all shadow-sm">
          ← กลับหน้าหลัก
        </button>
      </div>`),(v=document.getElementById("scanner-btn-back-restricted"))==null||v.addEventListener("click",()=>{window._stuNav("overview")});return}const T=document.querySelector("nav.safe-area-bottom");T&&T.classList.add("hidden");const b=document.getElementById("sidebar"),D=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(b&&b.classList.add("hidden"),D&&D.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const N=qe(new Date);let C=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");C=C.filter(n=>n.check_date===N),localStorage.setItem("prayer_scan_history_today",JSON.stringify(C)),C.forEach(n=>window._syncedStudentIdsToday.add(n.student_id));let r=localStorage.getItem("prayer_scan_input_mode")||"camera",u=localStorage.getItem("prayer_scan_device_mode")||"single";const w=ks(e),E=localStorage.getItem("prayer_scan_active_location");let g=w.some(n=>n.id===E)?E:(($=w[0])==null?void 0:$.id)||"musolla_male",L=localStorage.getItem("prayer_scan_record_status")||"pray",_=!1,h=!1;const ee="/pp5online/prayer-scanner-amanah.png";function ne(){var re,J;const n=qe(new Date),p=st(n,s),S=w.map(B=>`
      <option value="${B.id}" ${g===B.id?"selected":""}>${B.icon} ${B.label}${B.detail?` (${B.detail})`:""}</option>
    `).join(""),j=w.map(B=>`
      <button type="button" data-location="${B.id}"
        class="scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-emerald-100 text-xl flex items-center justify-center flex-shrink-0">${B.icon}</span>
          <span class="min-w-0">
            <span class="block text-sm font-extrabold">${B.label}</span>
            <span class="block text-xs text-gray-500 mt-0.5">${B.detail||"จุดสแกนละหมาด"}</span>
          </span>
          <span class="scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold border-gray-200 bg-white text-transparent">✓</span>
        </div>
      </button>
    `).join(""),Y=`
      <!-- Flash green screen overlay -->
      <div id="scanner-flash" class="fixed inset-0 pointer-events-none z-50 bg-emerald-500 opacity-0 transition-opacity duration-150 hidden"></div>
      <div id="scanner-time-warning-border" class="hidden fixed inset-0 pointer-events-none z-[60] border-4 border-red-500 rounded-[2rem] animate-pulse"></div>

      ${m?"":`
      <div id="scanner-amanah-modal" class="fixed inset-0 z-[90] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
        <div class="w-full max-w-3xl max-h-[92vh] overflow-hidden bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col">
          <div class="flex-1 overflow-y-auto bg-emerald-950/5">
            <img id="scanner-amanah-poster" src="${ee}" alt="นาซีฮัทถึงนักเรียนแกนนำผู้รับผิดชอบการสแกนละหมาด"
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

      ${m?"":`
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
            <div id="scanner-location-choice-list" class="space-y-2">
              ${j}
            </div>
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
          <p class="text-xs text-gray-400 mt-0.5">ผู้สแกน: ${e.full_name} · สัปดาห์ที่ ${p}</p>
        </div>
      </div>

      <div id="scanner-countdown-panel" class="${m?"bg-indigo-50 border-indigo-100 text-indigo-700":"bg-emerald-50 border-emerald-100 text-emerald-800"} rounded-2xl border px-4 py-3 mb-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <p class="text-[10px] font-bold uppercase tracking-wider opacity-70">${m?"สิทธิ์คุณครู":i?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-xs font-semibold mt-0.5">${m?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${q.startLabel} - ${q.endLabel} น.`}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <p class="text-[10px] font-bold opacity-70">เวลาคงเหลือ</p>
          <p id="scanner-countdown" class="font-mono text-2xl font-extrabold leading-none">${m?"∞":"--:--"}</p>
        </div>
      </div>

      <!-- Settings panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">ช่องทางสแกน</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-input-camera" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${r==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📷 ใช้กล้อง
              </button>
              <button id="opt-input-gun" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${r==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                🔌 ปืนยิงสแกน
              </button>
            </div>
          </div>
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">โหมดจอแสดงผล</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-device-single" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${u==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📱 เครื่องเดียว
              </button>
              <button id="opt-device-dual" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${u==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📡 แยกสองเครื่อง
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📍 จุดพื้นที่สแกนปัจจุบัน (Active Location)</label>
          <select id="opt-active-location" class="w-full text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            ${S}
          </select>
        </div>

        ${e.gender==="หญิง"||e.teacher_code?`
        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📝 สถานะบันทึกเมื่อสแกน (Record Status)</label>
          <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
            <button id="opt-status-pray" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${L==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟢 ละหมาดปกติ
            </button>
            <button id="opt-status-usor" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${L==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟣 บันทึกอูโซร
            </button>
          </div>
        </div>
        `:""}

        <!-- iPad Monitor Display Link -->
        <div id="dual-monitor-link-area" class="mt-3.5 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3 ${u==="dual"?"":"hidden"}">
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
      <div id="scanner-view-camera" class="relative overflow-hidden bg-slate-950 rounded-3xl w-full max-w-sm mx-auto aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4 ${r==="camera"?"":"hidden"}">
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

      <div id="scanner-view-gun" class="border border-dashed border-gray-300 bg-white rounded-3xl py-12 px-6 text-center shadow-sm mb-4 transition-all relative ${r==="gun"?"":"hidden"}">
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
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const B=parseInt(s.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(B)?Math.max(0,B):2})()} ครั้ง/เดือน/คน</p>
      </div>

      <!-- Active Check-In Popup Overlay -->
      <div id="scanner-feedback-container" class="hidden my-4 relative z-30 transition-all duration-300"></div>

      <!-- Roster Lookup Status -->
      <div id="roster-status" class="px-4 py-2 bg-gray-100 rounded-xl text-center text-[10px] text-gray-400 mb-4 border border-gray-200/50">
        บัญชีรายชื่อสภานักเรียน: โหลดแล้ว ${o.length} คน
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
    `,x=document.getElementById("stu-content")||document.getElementById("main-content");x&&(x.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${Y}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{ge(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),T&&T.classList.remove("hidden");const B=document.getElementById("sidebar"),R=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");B&&B.classList.remove("hidden"),R&&R.classList.add("md:ml-64"),e.teacher_code?xt(async()=>{const{renderPrayerAdmin:ae}=await import("./views-BHzV9Ke0.js").then(a=>a.M);return{renderPrayerAdmin:ae}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])).then(({renderPrayerAdmin:ae})=>{ae(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{de("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{de("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{G("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{G("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{Z()});const y=document.getElementById("scanner-manual-code-input"),O=document.getElementById("btn-submit-manual-scan"),P=()=>{const B=y==null?void 0:y.value.trim();if(!B){X("กรุณากรอกรหัสนักเรียน","warning"),y==null||y.focus();return}y.value="",ke(B,{inputMethod:"manual"})};O==null||O.addEventListener("click",P),y==null||y.addEventListener("keydown",B=>{B.key==="Enter"&&(B.preventDefault(),P())});const A=document.getElementById("opt-active-location");let le="";const V=B=>{const R=document.getElementById("btn-confirm-scanner-location");R&&(R.disabled=!B,R.className=B?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},I=(B=g)=>{document.querySelectorAll(".scanner-location-choice").forEach(R=>{const ae=R.dataset.location===B;R.className=`scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] ${ae?"border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm":"border-gray-200 bg-white text-gray-700 hover:bg-gray-50"}`;const a=R.querySelector(".scanner-location-check");a&&(a.className=`scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold ${ae?"border-emerald-500 bg-emerald-600 text-white":"border-gray-200 bg-white text-transparent"}`)})},H=(B,{toast:R=!1}={})=>{w.some(ae=>ae.id===B)&&(g=B,localStorage.setItem("prayer_scan_active_location",g),A&&(A.value=g),I(),R&&X("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};A==null||A.addEventListener("change",B=>{H(B.target.value,{toast:!0})}),document.querySelectorAll(".scanner-location-choice").forEach(B=>{B.addEventListener("click",()=>{le=B.dataset.location||"",H(le),I(le),V(!!le)})}),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{ie("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{ie("usor")}));const W=()=>{h||(h=!0,Q(),ue(),r==="camera"?me():Se())},F=()=>{const B=document.getElementById("scanner-location-modal");if(!B){W();return}le="",I(""),V(!1),B.classList.remove("hidden"),B.classList.add("flex")};(re=document.getElementById("btn-confirm-scanner-location"))==null||re.addEventListener("click",()=>{var B;if(!le){X("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}localStorage.setItem("prayer_scan_active_location",g),(B=document.getElementById("scanner-location-modal"))==null||B.remove(),W()}),Q();const U=document.getElementById("scanner-amanah-modal");U?(J=document.getElementById("btn-ack-scanner-amanah"))==null||J.addEventListener("click",()=>{U.remove(),F()}):F()}function de(n){n!==r&&(r=n,localStorage.setItem("prayer_scan_input_mode",n),n==="camera"?(Ce(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),me()):(ge(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),Se()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function G(n){if(n===u)return;u=n,localStorage.setItem("prayer_scan_device_mode",n);const p=document.getElementById("dual-monitor-link-area");n==="dual"?p.classList.remove("hidden"):p.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function ie(n){if(n===L)return;L=n,localStorage.setItem("prayer_scan_record_status",n);const p=document.getElementById("opt-status-pray"),S=document.getElementById("opt-status-usor");p&&S&&(p.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,S.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),X(`เปลี่ยนโหมดบันทึกเป็น: ${n==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function ue(){if(m)return;const n=document.getElementById("scanner-countdown"),p=document.getElementById("scanner-countdown-panel"),S=document.getElementById("scanner-time-warning-border");if(!n||!p||!S)return;const j=()=>{const Y=Ds(s,i);n.textContent=Ns(Y);const x=Y<=Ts;p.classList.toggle("bg-red-50",x),p.classList.toggle("border-red-200",x),p.classList.toggle("text-red-700",x),p.classList.toggle("bg-emerald-50",!x),p.classList.toggle("border-emerald-100",!x),p.classList.toggle("text-emerald-800",!x),S.classList.toggle("hidden",!x),Y<=0&&(ge(),Ce())};j(),window._activePrayerScannerState.countdownInterval=setInterval(j,1e3)}async function me(){try{const n=await qt(),p=new n("camera-reader");window._activePrayerScannerState.html5Qrcode=p;let S=null,j=0;const Y={fps:25,aspectRatio:1};await p.start({facingMode:"environment"},Y,x=>{x===S&&Date.now()-j<1800||(S=x,j=Date.now(),ke(x))},()=>{})}catch(n){console.error("Camera open failed:",n),X("ไม่สามารถเปิดใช้งานกล้องได้: "+(n.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function ge(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function Se(){const n=document.getElementById("scanner-gun-input");if(!n)return;n.focus();const p=setInterval(()=>{const S=document.getElementById("scanner-manual-code-input");document.activeElement!==n&&document.activeElement!==S&&document.getElementById("scanner-gun-input")&&n.focus()},1e3);window._activePrayerScannerState.focusInterval=p,n.addEventListener("keydown",S=>{if(S.key==="Enter"){S.preventDefault();const j=n.value.trim();n.value="",j&&ke(j)}})}function Ce(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}async function ke(n,p={}){if(console.log("[Scanner] Raw scanned text:",n),!n)return;const S=p.inputMethod==="manual"?"manual":"qr";if(!m&&!et(s,i)){$e("error"),pe(null,n,`ไม่อยู่ในช่วงเวลาบันทึกกิจกรรมละหมาด (${q.startLabel} - ${q.endLabel} น.)`);return}let j=String(n).trim(),Y=!1;if(j.startsWith("SQ:")){const R=j.split(":");if(R.length===3){const[,ae,a]=R,l=parseInt(a,10),M=Math.floor(Date.now()/1e3),z=M-l,oe=parseInt(s.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${ae}, QR Time: ${l}, Now: ${M}, Diff: ${z}s, Allowed Expiry: ${oe}s`),(isNaN(l)||z>oe||z<-oe)&&(Y=!0),j=ae.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",R.length),$e("error"),pe(null,n,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const x=o.find(R=>String(R.student_code).trim()===j);if(console.log("[Scanner] Lookup result for code:",j,x?x.full_name:"not found"),Y){console.warn("[Scanner] QR Code has expired");const R=parseInt(s.studentQrExpirySeconds||"60",10);$e("error",x==null?void 0:x.gender),pe(x,j,`QR Code นี้หมดอายุแล้ว (เกิน ${R} วินาที)`);return}if(!x){$e("error"),pe(null,j,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const y=Ls(x,g);if(y){$e("error",x.gender),pe(x,j,y);return}const O=qe(new Date),P=ct(t.main_room),A=ct(x.main_room),le=!!P&&!!A&&P===A;if(!m&&le&&Bs(x.gender,s)){$e("error",x.gender),pe(x,j,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const V=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(V.some(R=>R.student_id===x.id&&R.check_date===O)){$e("duplicate",x.gender),pe(x,j,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(x.id)){$e("duplicate",x.gender),pe(x,j,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if(S==="manual"){const R=parseInt(s.prayerManualEntryMonthlyLimit??"2",10),ae=Number.isFinite(R)?Math.max(0,R):2;if(ae===0){$e("error",x.gender),pe(x,j,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const a=V.filter(l=>l.student_id!==x.id||l.input_method!=="manual"||!l.check_date?!1:String(l.check_date).slice(0,7)===O.slice(0,7)).length;try{if(await Ot(x.id,O)+a>=ae){$e("error",x.gender),pe(x,j,`ใช้สิทธิ์กรอกรหัสครบ ${ae} ครั้งในเดือนนี้แล้ว`);return}}catch(l){console.warn("Manual prayer count check failed:",l),$e("error",x.gender),pe(x,j,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}const H=st(O,s);let W=L,F="";W==="usor"&&x.gender==="ชาย"&&(W="pray",F=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const U=t.teacher_code?`${t.full_name} (ครู)`:`${t.full_name} (รหัส ${t.student_code||"—"})`,re={student_id:x.id,main_room:x.main_room,check_date:O,status:W,week_number:H,location:g,full_name:x.full_name,student_code:x.student_code,scanned_by:U,input_method:S,scanner_code:t.teacher_code||t.student_code||null,scanner_name:t.full_name||null,scanner_room:t.main_room||null,scanner_gender:t.gender||null,same_room_flag:le};V.push(re),localStorage.setItem("prayer_scan_queue",JSON.stringify(V));let J=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");J=J.filter(R=>R.check_date===O),J.some(R=>R.student_id===x.id)||(J.unshift({student_id:x.id,full_name:x.full_name,student_code:x.student_code,main_room:x.main_room,check_date:O,status:W,input_method:S,same_room_flag:le}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(J))),window._syncedStudentIdsToday.add(x.id),$e("success",x.gender),se(),pe(x,j,`บันทึกสำเร็จลงเครื่องแล้ว${S==="manual"?" (กรอกรหัส)":""}${F}`,!0,W),Q(),Z()}function pe(n,p,S,j=!1,Y="pray"){const x=document.getElementById("scanner-feedback-container");if(x){if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),j&&n){const y=Y==="usor",O=n.image_url?`<img src="${n.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${y?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${n.full_name.charAt(0)}</div>`,P=y?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';x.innerHTML=`
        <div class="bg-white/95 border ${y?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${O}
          <div class="flex-1 min-w-0">
            ${P}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${n.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${n.student_code} · ห้อง ${je(n.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${S}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${n.id}" data-name="${n.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=x.innerHTML,Ee(x)}else{const y=n?n.full_name:"ไม่พบข้อมูล",O=n?`รหัส ${n.student_code} · ห้อง ${je(n.main_room)}`:`สแกนพบ: ${p}`;x.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${y}</h4>
            <p class="text-xs text-gray-500 truncate">${O}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${S}</p>
          </div>
        </div>`,x.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(x.innerHTML=window._lastSuccessFeedbackHTML,Ee(x)):(x.innerHTML="",x.classList.add("hidden"))},3500);return}x.classList.remove("hidden")}}function Ee(n){const p=n.querySelector("#btn-undo-scan");p&&p.addEventListener("click",()=>{const S=parseInt(p.dataset.sid,10),j=p.dataset.name;f(S,j)})}async function f(n,p){const S=qe(new Date);let j=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");j=j.filter(y=>!(y.student_id===n&&y.check_date===S)),localStorage.setItem("prayer_scan_queue",JSON.stringify(j));let Y=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");Y=Y.filter(y=>!(y.student_id===n&&y.check_date===S)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(Y)),window._syncedStudentIdsToday.delete(n),window._lastSuccessFeedbackHTML="";const x=document.getElementById("scanner-feedback-container");x&&(x.innerHTML="",x.classList.add("hidden")),Q(),X(`กำลังยกเลิกรายการของ ${p}...`,"info");try{const{error:y}=await Le.from("prayer_records").delete().eq("student_id",n).eq("check_date",S).is("teacher_id",null);if(y)throw y;X(`ยกเลิกบันทึกของ ${p} สำเร็จ ✕`,"success")}catch(y){console.warn("Failed to delete from server (offline?):",y),X("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function se(){const n=document.getElementById("scanner-flash");n&&(n.classList.remove("hidden","opacity-0"),n.classList.add("opacity-40"),setTimeout(()=>{n.classList.remove("opacity-40"),n.classList.add("opacity-0"),setTimeout(()=>n.classList.add("hidden"),150)},120))}function Q(n=!1){const p=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let S=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const j=qe(new Date);S=S.filter(A=>A.check_date===j);const Y=document.getElementById("scan-count-badge");Y&&(Y.textContent=`${S.length} คน`);const x=document.getElementById("sync-indicator"),y=document.getElementById("sync-title"),O=document.getElementById("sync-desc");if(!x||!y||!O)return;n?(x.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",y.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",O.textContent=`กำลังส่งข้อมูล ${p.length} คนขึ้นเซิร์ฟเวอร์`):p.length>0?(x.className="w-2.5 h-2.5 rounded-full bg-amber-500",y.textContent=`ค้างส่ง ${p.length} รายการ (ออฟไลน์)`,O.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(x.className="w-2.5 h-2.5 rounded-full bg-emerald-500",y.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",O.textContent="พร้อมบันทึกประวัติละหมาด");const P=document.getElementById("scan-list");P&&(S.length===0?P.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(P.innerHTML=S.map((A,le)=>{const V=p.some(U=>U.student_id===A.student_id),I=A.status==="usor",H=A.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",W=A.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",F=V?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':I?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${S.length-le}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${A.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${A.student_code} · ห้อง ${je(A.main_room)}</p>
              </div>
              ${H}
              ${W}
              ${F}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${A.student_id}" data-name="${A.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),P.querySelectorAll(".btn-cancel-scan-row").forEach(A=>{A.addEventListener("click",()=>{const le=parseInt(A.dataset.sid,10),V=A.dataset.name||"นักเรียน";f(le,V)})})))}async function Z(){if(_)return;const n=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(n.length){_=!0,Q(!0);try{const p=await gt(n);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),p!=null&&p.skippedCount?X(`ซิงก์สำเร็จ (ข้าม ${p.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):X("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(p){console.warn("Sync failed, offline backup kept:",p)}finally{_=!1,Q()}}}const c=setInterval(()=>{Z()},8e3);window._activePrayerScannerState.syncInterval=c,ne()}async function va(e){if(!(e!=null&&e.can_scan_prayer)){ce(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let t={},s=qe(new Date),o=[];const d=r=>{if(!r)return"—";const u=new Date(r);return`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`},m=(r,u)=>{const w=new Date(r+"T00:00:00");return w.setDate(w.getDate()+u),qe(w)};async function i(){try{o=await ls(e.student_code,s)}catch(u){o=[],X("โหลดข้อมูลไม่สำเร็จ: "+ve(u),"error")}const r=document.getElementById("sh-search-input");q((r==null?void 0:r.value.trim())??"")}function q(r=""){var g,L;const u=document.getElementById("sh-list"),w=document.getElementById("sh-count");if(!u)return;w&&(w.textContent=`${o.length} คน`);const E=r?o.filter(_=>{var h;return String(((h=_.students)==null?void 0:h.student_code)??"").includes(r)}):o;if(r&&!E.length){u.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${te(r)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(g=document.getElementById("sh-resave-btn"))==null||g.addEventListener("click",()=>D(r)),(L=document.getElementById("sh-report-btn"))==null||L.addEventListener("click",()=>N(r));return}if(!E.length){u.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}u.innerHTML=E.map(_=>{const h=_.students??{},ee=Oe[_.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:_.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${h.image_url?`<img src="${h.image_url}" class="w-full h-full object-cover"/>`:te((h.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${te(h.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${te(h.student_code??"—")} · ${te(h.religion_room??h.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${ee.cls}" title="${te(ee.title)}">${ee.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${d(_.created_at)}</p>
        </div>
      </div>`}).join("")}async function T(){window._activePrayerScannerState={html5Qrcode:null};try{const r=await qt(),u=new r("sh-camera-reader");window._activePrayerScannerState.html5Qrcode=u,await u.start({facingMode:"environment"},{fps:25,aspectRatio:1},w=>{var L;let E=String(w).trim();E.startsWith("SQ:")&&(E=E.split(":")[1]??E),b(),(L=document.getElementById("sh-camera-wrap"))==null||L.classList.add("hidden");const g=document.getElementById("sh-search-input");g&&(g.value=E),q(E)},()=>{})}catch(r){X("ไม่สามารถเปิดกล้องได้: "+(r.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function b(){var r;(r=window._activePrayerScannerState)!=null&&r.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function D(r){var L;let u=null;try{u=await ot(r)}catch{}if(!u){X("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}(L=document.getElementById("sh-resave-modal"))==null||L.remove();const w=document.createElement("div");w.id="sh-resave-modal",w.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const E=Object.entries(Oe);w.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${te(u.full_name)} (รหัส ${te(u.student_code)})<br/>${te(u.religion_room??u.main_room??"—")} · วันที่ ${s}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${E.map(([_,h],ee)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${ee===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${_}">${h.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(w);let g=E[0][0];w.querySelectorAll(".sh-status-btn").forEach(_=>{_.addEventListener("click",()=>{g=_.dataset.status,w.querySelectorAll(".sh-status-btn").forEach(h=>{h.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),h.classList.add("border-gray-200","text-gray-500")}),_.classList.remove("border-gray-200","text-gray-500"),_.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),w.querySelector("#sh-resave-cancel").addEventListener("click",()=>w.remove()),w.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const _=w.querySelector("#sh-resave-confirm");_.disabled=!0,_.textContent="กำลังบันทึก...";try{const h={student_id:u.id,main_room:u.main_room,check_date:s,status:g,week_number:st(s,t),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await gt([h]),X("บันทึกสำเร็จ ✅","success"),w.remove(),await i()}catch(h){X("บันทึกไม่สำเร็จ: "+ve(h),"error"),_.disabled=!1,_.textContent="บันทึก"}})}async function N(r){let u=null;try{u=await ot(r)}catch{}const E=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${u?`${u.full_name} (รหัส ${u.student_code}) ห้องศาสนา ${u.religion_room??u.main_room??"—"}`:`รหัสนักเรียน ${r} (ไม่พบชื่อในระบบ)`} วันที่ ${s} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(E):X("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function C(){t=await Pe().catch(()=>({})),ce(`
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
          <input type="date" id="sh-date" value="${s}" class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"/>
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
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async r=>{s=r.target.value,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{s=m(s,-1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{s=m(s,1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-search-input").addEventListener("input",r=>{q(r.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const r=document.getElementById("sh-camera-wrap");r.classList.toggle("hidden"),r.classList.contains("hidden")?b():T()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var r;b(),(r=document.getElementById("sh-camera-wrap"))==null||r.classList.add("hidden")}),await i()}C()}export{fa as completeGoogleEmailLink,ga as openEmailLinkPrompt,xa as renderExamRequestForm,Ps as renderStudentAllAssignments,pa as renderStudentMyScores,ua as renderStudentOverview,va as renderStudentPrayerScanHistory,ya as renderStudentPrayerScanner,ba as renderStudentProfile,Rs as renderStudentRequests,Hs as renderStudentSubjectDetail,tt as renderStudentSubjects};
