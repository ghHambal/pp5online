const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-CnonnVVn.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/views-B39y6ETM.js","assets/ui-DI1UEpN2.js","assets/version.js_v_10.22-DxLTis1W.js","assets/leave-monitor.js_v_10.18-BVSLTvM6.js","assets/leave-time-CrS9gT63.js","assets/sports-portals.js_v_10.22-BUafGoVM.js","assets/sports-awards-admin-6oCPrlSb.js","assets/azizgames-modal-BVIqoUog.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/browser-JP79f-a9.js","assets/teacher-views-utils-Ceiaeijy.js","assets/teacher-views-classes-DL_utrrp.js","assets/pp5-doc-tM_R--md.js","assets/score-display-BIDpG83o.js","assets/teacher-views-grades-BNr4W9tM.js","assets/regrade-api-C8s-TuM0.js","assets/score-qr-scanner-5qGz2lzF.js","assets/teacher-views-attendance-4LvVNsuY.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-Bd39g1Ox.js","assets/import-D0GLDW1_.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azfutsal-modal-C49SHklA.js"])))=>i.map(i=>d[i]);
import{_ as xt,g as ye}from"./ui-DI1UEpN2.js";import{getSystemConfig as Be,getClassScoreRounding as qt,submitQrReissueRequest as Mt,notifyQrReissueManagers as Tt,notifySubjectGroupAdmins as Bt}from"./api-CnonnVVn.js";import{i as Ve,c as nt,b as Dt,d as We,r as Nt}from"./score-display-BIDpG83o.js";import{c as bt,d as At,s as gt,e as Pt,f as Ge,h as Ht,i as Rt,j as Ot,k as zt,l as Ft,m as Gt,n as Qt,b as tt,o as Vt,p as Wt,q as ft,r as Ut,u as yt,t as vt,v as Yt,w as Jt,x as Kt,y as Xt,z as Zt,A as es,B as ts,C as ss,D as as,E as rs,F as ns,G as os,H as ls,I as ot}from"./student-api-B9JY02Vu.js";import{g as ds}from"./theme-DIdoXkqD.js";import{_dateInputValue as ht,_currentWeek as is,applyReadingGradesFromConfig as cs,_readingGrade as ms,renderIconTile as Ce}from"./teacher-views-utils-Ceiaeijy.js";import{g as wt,a as _t,b as $t,r as St}from"./quiz-api-BIDUVPR5.js";import{f as us}from"./leave-time-CrS9gT63.js";import{uploadAssignmentFile as ps}from"./storage-CuUjCgvI.js";import{A as xs}from"./version.js_v_10.22-DxLTis1W.js";import{s as Se}from"./supabase-BV-W2lsh.js";import{b as bs}from"./browser-JP79f-a9.js";import{g as gs}from"./regrade-api-C8s-TuM0.js";import{y as fs,o as ys}from"./certificate-engine-CjKzMmMi.js";import{o as vs}from"./azfutsal-modal-C49SHklA.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./print-overlay-BVfxEd6n.js";const Ue=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function kt(e){var q;(q=document.getElementById("my-certificates-modal"))==null||q.remove();const t=document.body.style.overflow;document.body.style.overflow="hidden";const s=document.createElement("div");s.id="my-certificates-modal",s.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",s.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const o=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=t,s.remove()},l=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",l),document.body.appendChild(s),s.querySelector("[data-mycert-close]").addEventListener("click",o);const m=s.querySelector("#my-certificates-body"),i=[];(await fs(e.id).catch(()=>[])).forEach(r=>i.push({key:`central-${r.id}`,emoji:"🏅",title:r.title||"เกียรติบัตร",sub:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>ys({layout:r.layout_snapshot,variables:{name:e.full_name,date:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:r.certificate_no,...r.variables},docTitle:r.title})}));const B=await bt(e.main_room).catch(()=>null),b=B&&Number(B.head_student_id)===Number(e.id),N=B&&Number(B.vice_head_student_id)===Number(e.id),A=b?B==null?void 0:B.head_cert_url:N?B==null?void 0:B.vice_head_cert_url:null;A&&i.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${b?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(A,"_blank")});try{const{data:r}=await Se.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(r){const[{data:u},{data:S}]=await Promise.all([Se.rpc("get_my_sports_eligibility",{p_event:r.id}).then(L=>L.error?null:L.data).catch(()=>null),Se.from("outstanding_athletes").select("id, note, sports(name)").eq("event_id",r.id).eq("student_id",e.id).then(L=>L.data??[]).catch(()=>[])]);u!=null&&u.eligible&&(u!=null&&u.certificate_url)&&i.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(u.certificate_url,"_blank")}),S.forEach(L=>{var g;return i.push({key:`sports-award-${L.id}`,emoji:"🏆",title:((g=L.sports)==null?void 0:g.name)||"รางวัลนักกีฬาดีเด่น",sub:L.note||"",onOpen:null})})}}catch{}i.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>vs(e.student_code)}),m.innerHTML=i.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${i.map(r=>`
        <div data-key="${Ue(r.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${r.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${r.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${Ue(r.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${Ue(r.sub||"")}</p>
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',i.forEach(r=>{var u;r.onOpen&&((u=m.querySelector(`[data-key="${CSS.escape(r.key)}"]`))==null||u.addEventListener("click",r.onOpen))})}const ke=e=>(e??"").replace(/\/\d+/,"").trim(),Ne=e=>!e.mySubmission||e.mySubmission.status==="rejected",ee=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ie(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function U(e,t="info"){const s={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},o=document.createElement("div");o.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${s[t]??s.info} transition-all`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2800)}const hs={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},ws={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},Te={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Fe=["อา","จ","อ","พ","พฤ","ศ","ส"],Ae={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},Ye=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function _s(e){if(e!=null&&e.teacher_code)return Ye;const t=String((e==null?void 0:e.gender)||"").trim(),s=Ye.filter(o=>o.genders.includes(t));return s.length?s:Ye}function $s(e){const t=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!t)return{grade:null,isVoc:!1};const s=t.match(/^ม\.?([1-6])/);return{grade:s?parseInt(s[1],10):null,isVoc:t.startsWith("ปวช")}}function Ss(e,t){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:s,isVoc:o}=$s(e),l=t==="musolla_male",m=t==="masjid_kuwait";return!l&&!m?"":m&&!(s===6||o)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":l&&!(s>=1&&s<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function lt(e){const s=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(s.slice(0,2),16),g:parseInt(s.slice(2,4),16),b:parseInt(s.slice(4,6),16)}}function ks({r:e,g:t,b:s}){return"#"+[e,t,s].map(o=>Math.max(0,Math.min(255,Math.round(o))).toString(16).padStart(2,"0")).join("")}function He(e,t,s){const o=lt(e),l=lt(t);return ks({r:o.r+(l.r-o.r)*s,g:o.g+(l.g-o.g)*s,b:o.b+(l.b-o.b)*s})}function Me(e){if(!e)return"—";const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()+543}`}function Je(e){if(!e)return"";const t=new Date(e),s=new Date;t.setHours(0,0,0,0),s.setHours(0,0,0,0);const o=Math.round((t-s)/864e5);return o>1?`อีก ${o} วัน`:o===1?"พรุ่งนี้":o===0?"วันนี้":o===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(o)} วัน`}function Es(e){var l,m,i;const t=((l=e.master_subjects)==null?void 0:l.subject_group)??"",s=e.skill_group??"";return(((i=(m=e.master_subjects)==null?void 0:m.teachers)==null?void 0:i.category)??"")==="ศาสนา"||t==="AGM"||t==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:t==="ACDMVOC"||s==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:s==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:s==="ชีวิต"?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:s==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function Ls(e,t={}){var B,b,N;const s=((B=e.master_subjects)==null?void 0:B.subject_group)??"",o=e.skill_group??"",l=((N=(b=e.master_subjects)==null?void 0:b.teachers)==null?void 0:N.category)??"",m=l==="ศาสนา"||s==="AGM"||s==="AGMVOC"?t.teacherReligionColor||"#b45309":s==="ACDMVOC"||o==="สามัญปวช"?t.teacherVocColor||"#7c3aed":o==="ภาษา"?t.teacherLanguageColor||"#2563eb":o==="ชีวิต"?t.teacherLifeColor||"#059669":o==="วิชาการ"?t.teacherAcademicColor||"#ea580c":t.teacherDefaultColor||"#059669",i=l==="ศาสนา"||s==="AGM"||s==="AGMVOC"?s==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":s==="ACDMVOC"||o==="สามัญปวช"?"กลุ่มสามัญ ปวช":o?`กลุ่มทักษะ: ${o}`:"กลุ่มวิชาสามัญ",T=i.replace("กลุ่มทักษะ: ","");return{color:m,label:i,short:T,bg:He(m,"#ffffff",.9),badgeBg:He(m,"#ffffff",.86),border:He(m,"#ffffff",.35),text:He(m,"#000000",.35)}}function Ke(e=0){const t=new Date,s=t.getDay(),o=new Date(t);o.setDate(t.getDate()-(s===0?6:s-1)),o.setDate(o.getDate()+e*7);const l=new Date(o);l.setDate(o.getDate()-1);const m={};m[0]=l;for(let i=1;i<=7;i++){const T=new Date(o);T.setDate(o.getDate()+i-1),m[i]=T}return m}function Re(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const Et="12:20",js="12:50",Cs="13:05",Is=60;function ze(e,t){const o=String(e||t||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return ze(t,Et);const l=Math.max(0,Math.min(23,parseInt(o[1],10))),m=Math.max(0,Math.min(59,parseInt(o[2],10)));return l*60+m}function dt(e){const t=(e%1440+1440)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function qe(e){return String(e||"").split(/[\s,]+/).map(t=>t.trim()).filter(Boolean)}function it(e,t=!1){return e==null||e===""?t:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function qs(e,t={}){return String(e||"").trim()==="หญิง"?it(t.prayerSameRoomGuardFemaleEnabled,!1):it(t.prayerSameRoomGuardMaleEnabled,!0)}function ct(e){return String(e||"").replace(/\s+/g,"").trim()}function Lt(e,t={}){return e!=null&&e.student_code?qe(t.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function jt(e,t={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const s=String(e.student_code).trim(),o=qe(t.prayerScannerSun),l=qe(t.prayerScannerMon),m=qe(t.prayerScannerTue),i=qe(t.prayerScannerWed),T=qe(t.prayerScannerThu);if(!(o.includes(s)||l.includes(s)||m.includes(s)||i.includes(s)||T.includes(s)))return!0;const b=new Date().getDay();return!!(b===0&&o.includes(s)||b===1&&l.includes(s)||b===2&&m.includes(s)||b===3&&i.includes(s)||b===4&&T.includes(s))}function st(e={},t=!1){const s=ze(e.prayerScanStartTime,Et),o=ze(e.prayerScanEndTime,js),l=ze(e.prayerScanExtendedEndTime,Cs),m=t?l:o;return{start:s,end:m,startLabel:dt(s),endLabel:dt(m)}}function Xe(e={},t=!1){const s=new Date,o=s.getHours(),l=s.getMinutes(),m=o*60+l,{start:i,end:T}=st(e,t);return T<i?m>=i||m<=T:m>=i&&m<=T}function Ms(e={},t=!1){const s=new Date,o=s.getHours()*3600+s.getMinutes()*60+s.getSeconds(),{start:l,end:m}=st(e,t),i=l*60;let T=m*60,B=o;return m<l&&B<i&&(B+=86400),m<l&&(T+=86400),Math.max(0,T-B)}function Ts(e){const t=Math.floor(e/60),s=e%60;return`${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function je(e){var i,T;let t=e.getFullYear();const s=((i=window._pp5SystemCfg)==null?void 0:i.academicYear)||((T=window._pp5SystemCfg)==null?void 0:T.academic_year)||2569,o=parseInt(s)-543;(t>2030||t<2024)&&(t=o);const l=String(e.getMonth()+1).padStart(2,"0"),m=String(e.getDate()).padStart(2,"0");return`${t}-${l}-${m}`}function Ct(e,t=[]){const s=t.map(i=>i.check_date).filter(Boolean).sort()[0],o=e||s||new Date().toISOString().slice(0,10),l=new Date(o);l.setHours(0,0,0,0);const m=l.getDay();return m&&l.setDate(l.getDate()-m),Array.from({length:20},(i,T)=>{const B=Array.from({length:5},(b,N)=>{const A=new Date(l);return A.setDate(l.getDate()+T*7+N),{date:A,ds:je(A),day:Fe[N]}});return{n:T+1,days:B}})}function mt(e,t){const s=Object.fromEntries((t??[]).map(o=>[o.column_id,o.score]));return(e??[]).map(o=>({...o,score:s[o.id]??null}))}async function ia(e){var _e,y,Z,z,te;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,o,l,m,i,T,B]=await Promise.all([Ge(e.id).catch(()=>[]),tt(e.id).catch(()=>[]),es(e.id).catch(()=>({linked:[],unlinked:[]})),ts(e.id).catch(()=>[]),ss(e.id).catch(()=>({samai:[],sasana:[]})),Be().catch(()=>({})),bt(e.main_room).catch(()=>null),vt(e.id).catch(()=>[])]),b=B.filter(Ne).sort((c,_)=>(c.due_at?new Date(c.due_at).getTime():1/0)-(_.due_at?new Date(_.due_at).getTime():1/0)),N=s.filter(c=>c.status==="pending"),A=s.slice(0,3),q=Lt(e,i),r=await Promise.all(t.map(c=>wt(c.id,e.id).catch(()=>[]))),u=t.flatMap((c,_)=>(r[_]??[]).map(k=>({...k,_class:c}))),S=await _t(u.map(c=>c.id),e.id).catch(()=>new Set),L=u.filter(c=>{if(c.status!=="started"||S.has(c.id))return!1;const _=c.attempts.filter(n=>n.status==="submitted"||n.status==="terminated_violation").length;return!(c.attempts.length&&c.attempts[c.attempts.length-1].status==="terminated_violation")&&_<c.max_attempts}),g=T&&Number(T.head_student_id)===Number(e.id),I=T&&Number(T.vice_head_student_id)===Number(e.id),j=(i.council_test_student_codes||"").split(/[\s,]+/).map(c=>c.trim()).filter(Boolean),$=i.council_visible_to_all!=="false"||j.includes(e.student_code);let X=!1;try{const{data:c,error:_}=await Se.rpc("get_terangganu_access");_||(X=(c==null?void 0:c.visible)===!0&&(c==null?void 0:c.student_allowed)===!0)}catch{X=!1}let re=!1,le=0;try{const[c,_]=await Promise.all([gs(),Promise.resolve(Se.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);re=((_e=c.visibility)==null?void 0:_e.student_menu)===!0,le=Number(_==null?void 0:_.count)||0}catch{re=!1,le=0}let G=!0;try{const{data:c}=await Se.from("settings").select("value").eq("key","sports_visibility").maybeSingle();c!=null&&c.value&&(G=c.value.enabled!==!1&&c.value.student_menu!==!1)}catch{G=!0}let de=!1;try{const{data:c}=await Se.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();de=!!c}catch{de=!1}let me=!1;try{const{data:c}=await Se.from("attendance_delegates").select("id, classes!inner(attendance_delegate_enabled)").eq("student_id",e.id).eq("classes.attendance_delegate_enabled",!0).limit(1);me=!!(c!=null&&c.length)}catch{me=!1}ie(`
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
          ${I?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              🥈 รองหัวหน้าห้อง
            </span>
          `:""}
        </div>
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${e.student_code} · ${ke(e.main_room??"—")}</p>
      </div>
    </div>

    <!-- ระบบอื่น ๆ — กริดไอคอนแอปเลื่อนแนวนอนได้ถ้ามีมากกว่าที่จอแสดงพอดี (sportsVisible/councilVisible/
         terangganuVisible/regradeVisible/can_scan_prayer ล้วนเปิด-ปิดแยกอิสระ รวมกันอาจเกิน 4 ช่องได้)
         — เกียรติบัตรแสดงเสมอ ส่วนที่เหลือ conditional เหมือนเดิมทุกประการ แค่เปลี่ยนรูปแบบจากแบนเนอร์
         เต็มแถว/แถบเมนูล่างถาวร (กีฬาสี) มาเป็นไอคอน -->
    <div class="mb-4">
      <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</p>
      ${[G,de,$,X,re,e.can_scan_prayer,me].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Ce({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},i.iconTileStyle)}
        ${G?Ce({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},i.iconTileStyle):""}
        ${de?Ce({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},i.iconTileStyle):""}
        ${$?Ce({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},i.iconTileStyle):""}
        ${X?Ce({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},i.iconTileStyle):""}
        ${re?Ce({id:"student-regrade-tile",emoji:"📋",label:"แก้ค้างเก่า",from:"#FBD0D6",to:"#E0616F",badge:le,onclick:"window.location.href='regrade.html'"},i.iconTileStyle):""}
        ${e.can_scan_prayer?Ce({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},i.iconTileStyle):""}
        ${me?Ce({id:"student-attendance-delegate-tile",emoji:"✅",label:"เช็คชื่อ<br>แทนครู",from:"#CDEBD6",to:"#4CA778",onclick:"window._stuNav('attendance_delegate')"},i.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${jt(e,i)&&Xe(i,q)?`
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
    ${L.map(c=>{var k,n;const _=c.attempts.some(x=>x.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${_?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${ee(c.title)} · ${ee(((n=(k=c._class)==null?void 0:k.master_subjects)==null?void 0:n.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${c.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
          ${_?"ทำต่อ →":"เข้าสอบ →"}
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
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${N.length}</p>
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
      ${(()=>{const c=`stu_ann_seen_${e.id}`,_=new Set(JSON.parse(localStorage.getItem(c)??"[]")),k=l.filter(n=>!_.has(n.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${l.length} รายการ</p>
          ${k>0?`<span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">${k}</span>`:""}
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
    ${(()=>{const c=b.length>0,_=b[0],k=_!=null&&_.due_at?new Date(_.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${c?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${c?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${c?`ค้างอยู่ ${b.length} ชิ้น · ใกล้สุด: ${ee(_.title)}${k?` (${k})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const _=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],k=new Date,n=k.getHours()*3600+k.getMinutes()*60+k.getSeconds(),x=w=>{if(!w)return null;const[D,W]=w.split(":").map(Number);return D*3600+W*60},C=o.linked.map(({cls:w,sched:D,period:W})=>{var se,a;const O=w==null?void 0:w.master_subjects,ne=x(W==null?void 0:W.start_time),v=x(W==null?void 0:W.end_time),R=ne!=null&&v!=null&&n>=ne&&n<v,Y=v!=null&&n>=v,J=R?"🟢":Y?"✅":"⬜",P=W?`${(se=W.start_time)==null?void 0:se.slice(0,5)}–${(a=W.end_time)==null?void 0:a.slice(0,5)}`:`คาบ ${D.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${J}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${D.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(O==null?void 0:O.subject_name)??D.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${P} · ${(w==null?void 0:w.class_name)??""}</p>
          </div>
          ${R?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),E=l.filter(w=>w.ann_type==="deadline"&&w.deadline_at&&new Date(w.deadline_at)>k).sort((w,D)=>new Date(w.deadline_at)-new Date(D.deadline_at)).slice(0,5),Q=w=>{const D=new Date(w)-k,W=Math.floor(D/6e4);if(W<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${W} น.</span>`;const O=Math.floor(W/60);return O<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${O} ชม. ${W%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(O/24)} วัน</span>`},p=E.map(w=>{var W,O;const D=(W=w.cls)==null?void 0:W.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${w.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(D==null?void 0:D.subject_name)??""} · ${((O=w.cls)==null?void 0:O.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${Q(w.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${_}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${k.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${C?`
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${C}</div>`:'<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>'}
        ${p?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${p}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${A.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${A.map(c=>{var n;const _=Te[c.status]??Te.pending,k=c.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${((n=k==null?void 0:k.master_subjects)==null?void 0:n.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${c.request_type} · ${Me(c.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${_.cls}">${_.label}</span>
            </div>
          </div>`}).join("")}
      </div>
    </div>`:`
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `);const ce=document.getElementById("stu-live-clock");if(ce){const c=()=>{const k=new Date;ce.textContent=`${String(k.getHours()).padStart(2,"0")}:${String(k.getMinutes()).padStart(2,"0")}:${String(k.getSeconds()).padStart(2,"0")}`};c();const _=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(_);return}c()},1e3)}const pe=(c,_)=>{const k=document.createElement("div");return k.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",k.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${c}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${_}</div>`,document.body.appendChild(k),k.querySelector("#stu-popup-back").addEventListener("click",()=>k.remove()),k},he=o.linked.find(({period:c})=>{if(!(c!=null&&c.start_time)||!(c!=null&&c.end_time))return!1;const _=new Date,k=_.getHours()*3600+_.getMinutes()*60+_.getSeconds(),[n,x]=c.start_time.split(":").map(Number),[C,E]=c.end_time.split(":").map(Number);return k>=n*3600+x*60&&k<C*3600+E*60});if(he){const c=(()=>{const[k,n]=he.period.end_time.split(":").map(Number);return k*3600+n*60})(),_=setInterval(()=>{const k=document.getElementById("stu-period-countdown");if(!k){clearInterval(_);return}const n=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),x=Math.max(0,c-n);if(x===0){k.textContent="หมดคาบ",clearInterval(_);return}const C=Math.floor(x/3600),E=Math.floor(x%3600/60),Q=x%60;k.textContent=`${String(C).padStart(2,"0")}:${String(E).padStart(2,"0")}:${String(Q).padStart(2,"0")}`},1e3)}const Ee={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},we=c=>{if(!c)return"";const _=new Date(c),n=Math.floor((_-new Date)/6e4),x=_.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if(n<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${x}</span>`;if(n<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${n} น. · ${x}</span>`;const C=Math.floor(n/60);return C<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${C} ชม. ${n%60} น. · ${x}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(C/24)} วัน · ${x}</span>`};(y=document.getElementById("btn-stu-my-certificates"))==null||y.addEventListener("click",()=>kt(e)),(Z=document.getElementById("btn-stu-anns"))==null||Z.addEventListener("click",()=>{const c=`stu_ann_seen_${e.id}`,_=new Set(JSON.parse(localStorage.getItem(c)??"[]"));l.forEach(x=>_.add(x.id)),localStorage.setItem(c,JSON.stringify([..._]));const k=document.querySelector("#btn-stu-anns span.absolute");k&&k.remove();const n=l.length?`<div class="space-y-3">${l.map(x=>{var Q,p,w;const C=Ee[x.ann_type]??Ee.general,E=(Q=x.cls)==null?void 0:Q.master_subjects;return`<div class="rounded-2xl border ${C.border} ${C.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${x.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${C.icon} ${C.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(E==null?void 0:E.subject_name)??""} · ${((p=x.cls)==null?void 0:p.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${x.title??""}</p>
        ${x.body?`<p class="text-xs text-gray-500 mt-1">${x.body}</p>`:""}
        ${x.ann_type==="deadline"&&x.deadline_at?`<div class="mt-2">${we(x.deadline_at)}</div>`:""}
        ${x.file_url?`<a href="${x.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(w=x.attachment_urls)!=null&&w.length?`<div class="flex flex-wrap gap-1.5 mt-2">${x.attachment_urls.map(D=>`<a href="${ee(D.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${ee(D.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';pe("📢 ประกาศของฉัน",n)}),(z=document.getElementById("btn-stu-gpa"))==null||z.addEventListener("click",()=>{const c=v=>{const R=v.filter(P=>P.grade!=null);if(!R.length)return null;const Y=R.reduce((P,se)=>P+(se.credit||1),0),J=R.reduce((P,se)=>P+se.grade*(se.credit||1),0);return Y>0?(J/Y).toFixed(2):null},_=v=>v==null?"text-gray-400":v>=3.5?"text-emerald-600":v>=3?"text-blue-500":v>=2?"text-amber-600":"text-red-500",k=v=>v>=3.5?"ดีเยี่ยม":v>=3?"ดี":v>=2?"พอใช้":v>=1?"ผ่าน":"ไม่ผ่าน",n=v=>v.grade==null&&v.totalCols>0?`<span class="text-[10px] font-semibold text-amber-500 whitespace-nowrap" title="ครูให้คะแนนแล้ว ${v.scoredCount}/${v.totalCols} ช่อง — วิชานี้ยังไม่ถูกนับเข้าเกรดเฉลี่ยจนกว่าจะครบ">⏳ ${v.scoredCount}/${v.totalCols} · ยังไม่นับเข้า GPA</span>`:null,x=(v,R,Y)=>{const P=v.filter(a=>a.grade!=null).reduce((a,d)=>a+(d.credit||1),0),se=parseFloat(R);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${Y}" class="text-5xl font-extrabold ${R?_(se):"text-gray-300"} hover:opacity-70 transition">${R??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${R?_(se):"text-gray-400"}">${R?k(se):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${v.length?`
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
            ${v.map((a,d)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${d+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${a.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${a.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${a.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${a.score!=null?a.score:n(a)??"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${_(a.grade)}">${a.grade!=null?a.grade.toFixed(1):n(a)?"":"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${a.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${a.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${P}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${P}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${_(R?se:null)}">${R??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},C=(v,R,Y)=>{const J=parseFloat(R);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${Y}" class="text-5xl font-extrabold ${R?_(J):"text-gray-300"} hover:opacity-70 transition">${R??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${R?_(J):"text-gray-400"}">${R?k(J):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${v.length?`
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${v.map(P=>`
        <button class="gpa-pp5-btn text-left border border-gray-200 rounded-2xl p-3 hover:shadow-md transition bg-white" data-class-id="${P.classId}">
          <p class="text-[10px] text-gray-400 font-mono truncate">${P.subjectCode??""}</p>
          <p class="font-bold text-xs text-gray-800 leading-tight line-clamp-2 mt-0.5 min-h-[2rem]">${P.subjectName}</p>
          <div class="flex items-center justify-between mt-2 gap-1">
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${P.credit} นก. ${P.hasRetake?"· แก้":""}</span>
            ${n(P)??`<span class="text-lg font-extrabold ${_(P.grade)}">${P.grade!=null?P.grade.toFixed(1):"—"}</span>`}
          </div>
        </button>`).join("")}
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},E=c(m.samai),Q=c(m.sasana),p=v=>{const R=v==="samai"?m.samai:m.sasana,Y=v==="samai"?E:Q;return(localStorage.getItem("studentGpaView")==="card"?"card":"table")==="card"?C(R,Y,v):x(R,Y,v)},w=`
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
      <div id="gpa-pop-samai">${p("samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${p("sasana")}</div>`,D=pe("🎓 เกรดเฉลี่ยของฉัน",w),W=()=>{D.querySelectorAll(".gpa-pp5-btn").forEach(v=>{v.addEventListener("click",()=>{var Y;const R=Number(v.dataset.classId);D.remove(),(Y=window._stuOpenClass)==null||Y.call(window,R)})}),["samai","sasana"].forEach(v=>{const R=D.querySelector(`#gpa-val-btn-${v}`);R&&R.addEventListener("click",()=>{const J=(v==="samai"?m.samai:m.sasana).filter(f=>f.grade!=null),P=J.reduce((f,M)=>f+(M.credit||1),0),se=J.reduce((f,M)=>f+M.grade*(M.credit||1),0),a=P>0?(se/P).toFixed(2):"—",d=document.createElement("div");d.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",d.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
            <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
            <div class="text-sm text-gray-600 mb-3">
              <p class="font-mono text-base font-semibold text-purple-700">
                Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
              <p class="text-gray-700">${se.toFixed(2)} ÷ ${P}</p>
              <p class="text-purple-700 font-bold text-lg mt-1">= ${a}</p>
            </div>
            <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่ครูให้คะแนนครบทุกช่องแล้วเท่านั้น (${J.length} วิชา)</p>
            <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
          </div>`,document.body.appendChild(d),d.querySelector("#gpa-tip-close").addEventListener("click",()=>d.remove()),d.addEventListener("click",f=>{f.target===d&&d.remove()})})})},O=()=>{const v=localStorage.getItem("studentGpaView")==="card"?"card":"table";D.querySelector("#gpa-view-table").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${v==="table"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`,D.querySelector("#gpa-view-card").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${v==="card"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`};O(),W();const ne=v=>{localStorage.setItem("studentGpaView",v==="card"?"card":"table"),D.querySelector("#gpa-pop-samai").innerHTML=p("samai"),D.querySelector("#gpa-pop-sasana").innerHTML=p("sasana"),O(),W()};D.querySelector("#gpa-view-table").addEventListener("click",()=>ne("table")),D.querySelector("#gpa-view-card").addEventListener("click",()=>ne("card")),D.querySelectorAll(".gpa-pop-tab").forEach(v=>{v.addEventListener("click",()=>{const R=v.dataset.tab;D.querySelector("#gpa-pop-samai").classList.toggle("hidden",R!=="samai"),D.querySelector("#gpa-pop-sasana").classList.toggle("hidden",R!=="sasana"),D.querySelectorAll(".gpa-pop-tab").forEach(Y=>{Y.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${Y.dataset.tab===R?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})})}),window._stuOpenClassFromTT=c=>{var _;document.querySelectorAll(".stu-fullpop").forEach(k=>k.remove()),window._stuFromTimetable=!0,(_=window._stuOpenClass)==null||_.call(window,c)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const ue=async()=>{const c=pe("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:_,periods:k}=await as(e.id).catch(()=>({slots:[],periods:[]})),n=c.querySelector(".flex-1.overflow-y-auto");if(!n)return;const x=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],C=["อา","จ","อ","พ","พฤ","ศ","ส"],E=[0,1,2,3,4,5,6].filter(v=>_.some(R=>R.dow===v)),Q=new Date().getDay();let p="day",w=E.includes(Q)?Q:E[0]??0;const D={};_.forEach(v=>{D[`${v.dow}-${v.periodNo}`]=v});const W=v=>{var f,M,V,ae;const R=new Date,Y=R.getHours()*3600+R.getMinutes()*60+R.getSeconds(),J={};_.filter(H=>H.dow===v&&H.span>1).forEach(H=>{for(let F=1;F<H.span;F++)J[H.periodNo+F]=H.periodNo});const P=((M=(f=k.find(H=>H.period_no===5))==null?void 0:f.end_time)==null?void 0:M.slice(0,5))??"",se=((ae=(V=k.find(H=>H.period_no===6))==null?void 0:V.start_time)==null?void 0:ae.slice(0,5))??"",a=P&&se?`${P}–${se}`:"";let d="";return k.forEach(H=>{var at,rt;H.period_no===6&&k.find(Qe=>Qe.period_no===5)&&(d+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${a?`<p class="text-[10px] text-emerald-500 mt-0.5">${a}</p>`:""}
            </td></tr>`);const F=D[`${v}-${H.period_no}`],oe=(F==null?void 0:F.span)??1,h=oe>1?k.find(Qe=>Qe.period_no===H.period_no+oe-1)??H:H,[K,ge]=(H.start_time??"0:0").split(":").map(Number),[Le,$e]=(h.end_time??"0:0").split(":").map(Number),xe=Y>=K*3600+ge*60&&Y<Le*3600+$e*60,be=(at=F==null?void 0:F.cls)==null?void 0:at.master_subjects,fe=["AGM","AGMVOC"].includes((be==null?void 0:be.subject_group)??""),Pe=F?fe?"bg-amber-50":"bg-emerald-50":"",De=F?fe?"text-amber-800":"text-emerald-800":"text-gray-300",Ie=J[H.period_no]!=null;d+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${xe?"text-emerald-600":"text-gray-500"}">คาบ ${H.period_no}</p>
            <p class="text-[10px] text-gray-400">${((rt=H.start_time)==null?void 0:rt.slice(0,5))??""}</p>
          </td>
          ${Ie?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${oe>1?`rowspan="${oe}"`:""}
              ${F?`onclick="window._stuOpenClassFromTT(${F.cls.id})"`:""}>
            ${F?`
              <div class="rounded-xl ${Pe} border-l-4 ${fe?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${xe?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${oe>1?oe*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${De} leading-tight">${(be==null?void 0:be.subject_name)??"—"}</p>
                <p class="text-[10px] ${De} opacity-60 mt-0.5">${(be==null?void 0:be.subject_code)??""}</p>
                ${xe?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${d}</tbody>
      </table>`},O=()=>{const v=`${Math.floor(100/(E.length+1))}%`,R=`<th style="width:${v}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+E.map(P=>`<th style="width:${v}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${P===Q?"text-teal-600":"text-gray-600"}">${C[P]}</th>`).join(""),Y={};E.forEach(P=>{Y[P]=new Set});let J="";return k.forEach((P,se)=>{var f,M,V,ae;const a=new Date;a.getHours()*3600+a.getMinutes()*60+a.getSeconds();const d=E.map(H=>{var De;if(Y[H].has(P.period_no))return"";const F=D[`${H}-${P.period_no}`],oe=(F==null?void 0:F.span)??1,h=(De=F==null?void 0:F.cls)==null?void 0:De.master_subjects,K=["AGM","AGMVOC"].includes((h==null?void 0:h.subject_group)??""),ge=F?K?"bg-amber-50":"bg-emerald-50":"",Le=F?K?"text-amber-700":"text-emerald-700":"text-gray-200",$e=oe>1?k.find(Ie=>Ie.period_no===P.period_no+oe-1)??P:P,[xe,be]=(P.start_time??"0:0").split(":").map(Number),[fe,Pe]=($e.end_time??"0:0").split(":").map(Number);for(let Ie=1;Ie<oe;Ie++)Y[H].add(P.period_no+Ie);return`<td style="width:${v};padding:2px" ${oe>1?`rowspan="${oe}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${F?`onclick="window._stuOpenClassFromTT(${F.cls.id})"`:""}>
            ${F?`
              <div class="rounded-lg ${ge} border-l-2 ${K?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${oe>1?oe*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${Le} text-[8px] font-semibold leading-tight line-clamp-3">${(h==null?void 0:h.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(J+=`<tr>
          <td style="width:${v}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${P.period_no}</p>
            <p class="text-[8px] text-gray-300">${((f=P.start_time)==null?void 0:f.slice(0,5))??""}</p>
          </td>${d}</tr>`,P.period_no===5&&k.find(H=>H.period_no===6)){const H=((M=P.end_time)==null?void 0:M.slice(0,5))??"",F=((ae=(V=k.find(oe=>oe.period_no===6))==null?void 0:V.start_time)==null?void 0:ae.slice(0,5))??"";J+=`<tr><td colspan="${E.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${H&&F?` ${H}–${F}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${R}</tr></thead>
          <tbody>${J}</tbody>
        </table>
      </div>`},ne=()=>{var R,Y,J,P;const v=p==="week";if(n.innerHTML=`
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${v?"text-gray-500":"bg-white shadow text-teal-600"}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${v?"bg-white shadow text-teal-600":"text-gray-500"}">ทั้งสัปดาห์</button>
        </div>
        ${v?"":`
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${x[w]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>`}
      </div>
      ${v?O():W(w)}
      ${_.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(R=n.querySelector("#tt-btn-day"))==null||R.addEventListener("click",()=>{p="day",ne()}),(Y=n.querySelector("#tt-btn-week"))==null||Y.addEventListener("click",()=>{p="week",ne()}),(J=n.querySelector("#tt-prev"))==null||J.addEventListener("click",()=>{const se=E.indexOf(w);w=E[(se-1+E.length)%E.length],ne()}),(P=n.querySelector("#tt-next"))==null||P.addEventListener("click",()=>{const se=E.indexOf(w);w=E[(se+1)%E.length],ne()}),!v&&n.querySelector("#tt-day-cd")){const a=k.find(d=>{if(!D[`${w}-${d.period_no}`]||!d.end_time)return!1;const M=new Date,V=M.getHours()*3600+M.getMinutes()*60+M.getSeconds(),[ae,H]=d.end_time.split(":").map(Number),[F,oe]=(d.start_time??"0:0").split(":").map(Number);return V>=F*3600+oe*60&&V<ae*3600+H*60});if(a){const[d,f]=a.end_time.split(":").map(Number),M=d*3600+f*60,V=setInterval(()=>{const ae=n.querySelector("#tt-day-cd");if(!ae){clearInterval(V);return}const H=new Date,F=Math.max(0,M-H.getHours()*3600-H.getMinutes()*60-H.getSeconds()),oe=Math.floor(F/3600),h=Math.floor(F%3600/60),K=F%60;ae.textContent=`${String(oe).padStart(2,"0")}:${String(h).padStart(2,"0")}:${String(K).padStart(2,"0")}`,F===0&&clearInterval(V)},1e3)}}};ne()};window._stuOpenTimetablePopup=ue,(te=document.getElementById("btn-stu-timetable"))==null||te.addEventListener("click",ue),window._stuStartQuiz=async c=>{try{const _=await $t(c,e.id).catch(()=>null);if(_&&_.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${_.id}`;return}const k=await St(c);window.location.href=`quiz-exam.html?attempt=${k.id}`}catch(_){U("เข้าสอบไม่สำเร็จ: "+ye(_),"error")}}}async function ca(e,t="life"){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await Be().catch(()=>({}));cs(s);const o=s.academicYear,l=s.semester,[m,i,T]=await Promise.all([Yt(e.id,o,l).catch(G=>({columns:[],scores:[],error:G})),Jt(e.id,o,l).catch(G=>({columns:[],scores:[],error:G})),Kt(e.id).catch(G=>Object.assign([],{error:G}))]),B=mt(m.columns,m.scores),b=mt(i.columns,i.scores),N=b.reduce((G,de)=>G+(parseFloat(de.score)||0),0),A=b.reduce((G,de)=>G+(parseFloat(de.max_score)||0),0),q=A>0?Math.round(N/A*1e3)/10:0,r=N>0?ms(q):null,u=Object.fromEntries((T??[]).map(G=>[G.check_date,G.status])),S=Ct(s.semester_start,T??[]),L=S.flatMap(G=>G.days),g=L.reduce((G,de)=>{var me;return G+(((me=Ae[u[de.ds]])==null?void 0:me.score)??0)},0),I=L.length*2,j=I?Math.max(0,Math.round(g/I*100)/10):0,$=(G,de,me,ce)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${de} ${G}</h3>
        <span class="text-[11px] text-gray-400">${me.length} หัวข้อ</span>
      </div>
      ${me.length?`<div class="divide-y divide-gray-50">
        ${me.map(pe=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${pe.name}</p>
              <p class="text-[11px] text-gray-400">${pe.sheet_col?`คอลัมน์ ${pe.sheet_col} · `:""}เต็ม ${pe.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${ce}">${pe.score??"—"}</p>
              <p class="text-[10px] text-gray-400">/ ${pe.max_score??"—"}</p>
            </div>
          </div>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลคะแนน</div>'}
    </section>`,X=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">20 สัปดาห์ · สัปดาห์ละ 5 วัน</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-amber-600">${j}</p>
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
            ${S.map(G=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${G.n}</td>
              ${G.days.map(de=>{const me=u[de.ds],ce=Ae[me];return`<td class="px-1 py-1 text-center">
                  <span title="${(ce==null?void 0:ce.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(ce==null?void 0:ce.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(ce==null?void 0:ce.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(Ae).map(G=>`<span><b class="${G.cls.split(" ").find(de=>de.startsWith("text-"))??""}">${G.label}</b> ${G.title}</span>`).join("")}
      </div>
    </section>
  `,re={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[t]??"คะแนนทักษะชีวิต",le={life:$("คะแนนทักษะชีวิต","🌱",B,"text-emerald-600"),prayer:X,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${r?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${r.cls}">${r.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${N?`${q} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${N||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${A||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${N?q:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${$("คะแนนอ่านคิดวิเคราะห์ฯ","📖",b,"text-sky-600")}
    `}[t]??$("คะแนนทักษะชีวิต","🌱",B,"text-emerald-600");ie(`
    <h2 class="font-bold text-gray-800 mb-1">📊 คะแนนของฉัน</h2>
    <p class="text-xs text-gray-400 mb-2">คะแนนรวมอื่น ๆ นอกเหนือจากคะแนนรายวิชา · ภาค ${l??"—"} / ${o??"—"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${re}</p>
    ${le}
  `)}async function Ze(e){var L;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,o]=await Promise.all([Ge(e.id).catch(()=>[]),ds().catch(()=>({})),Xt(e.id).catch(()=>[])]),l=Object.fromEntries(o.filter(g=>g.status==="pending").map(g=>[g.class_id,g])),m=["อา","จ","อ","พ","พฤ","ศ","ส"],i=t.length?await Zt(t.map(g=>g.id)).catch(()=>({})):{},T=g=>{const I=i[g]??[];if(!I.length)return"";const j={};return I.forEach($=>{const X=$.day_of_week;j[X]||(j[X]=[]);const re=$.span_periods??1;for(let le=0;le<re;le++)j[X].push(($.period_no??0)+le)}),Object.entries(j).sort(([$],[X])=>Number($)-Number(X)).map(([$,X])=>{const re=[...new Set(X)].sort((G,de)=>G-de),le=re.length===1?`คาบ ${re[0]}`:`คาบ ${re[0]}–${re[re.length-1]}`;return`${m[Number($)]??$} ${le}`}).join(" · ")};if(!t.length){ie(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const B=g=>{var $,X,re;if(g.subject_group_override)return g.subject_group_override==="sasana";const I=(($=g.master_subjects)==null?void 0:$.subject_group)??"";return(((re=(X=g.master_subjects)==null?void 0:X.teachers)==null?void 0:re.category)??"")==="ศาสนา"||I==="AGM"||I==="AGMVOC"},b=t.filter(g=>!B(g)),N=t.filter(g=>B(g)),q=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid",r=localStorage.getItem("studentSubjectsGroup")==="sasana"?"sasana":"samai";window._stuSetSubjectView=g=>{localStorage.setItem("studentSubjectsView",g==="grid"?"grid":"list"),Ze(e)},window._stuSetSubjectGroup=g=>{localStorage.setItem("studentSubjectsGroup",g==="sasana"?"sasana":"samai"),Ze(e)};const u=g=>{const I=g.master_subjects,j=I==null?void 0:I.teachers,$=Ls(g,s);return q?`<button onclick="window._stuOpenClass(${g.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${$.bg}; border-color:${$.border}; border-left-color:${$.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${$.badgeBg}; color:${$.text};">${$.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${$.text};">${(I==null?void 0:I.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${(I==null?void 0:I.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${ke(g.class_name)}</p>
            ${T(g.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${T(g.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${j!=null&&j.image_url?`<img src="${j.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${((j==null?void 0:j.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${(j==null?void 0:j.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${g.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${$.bg}; border-color:${$.border}; border-left-color:${$.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${$.text};">${(I==null?void 0:I.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${(I==null?void 0:I.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${$.text};">${$.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${$.badgeBg}; color:${$.text};">${$.short}</span>
          <span class="text-[10px] text-gray-400">${(I==null?void 0:I.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${T(g.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${T(g.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${j!=null&&j.image_url?`<img src="${j.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${((j==null?void 0:j.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${(j==null?void 0:j.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${ke(g.class_name)}</span>
      </div>
    </div>`},S=(g,I,j)=>j.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${I}</span>
          <h3 class="font-bold text-gray-700 text-sm">${g}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${j.length} วิชา</span>
        </div>
        <div class="${q?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${j.map(u).join("")}
        </div>
      </div>`:"";ie(`
    <div class="flex items-center justify-between gap-3 mb-3">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${q?"text-gray-400":"bg-white text-emerald-600 shadow-sm"}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${q?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}">กริด</button>
      </div>
    </div>
    <div class="flex gap-2 mb-2">
      <button type="button" onclick="window._stuSetSubjectGroup('samai')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">📖 สามัญ (${b.length})</button>
      <button type="button" onclick="window._stuSetSubjectGroup('sasana')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">🕌 ศาสนา (${N.length})</button>
    </div>
    <div class="flex justify-end mb-4">
      <button id="btn-manage-subject-groups" type="button" class="text-xs text-indigo-600 font-semibold hover:text-indigo-800">🔧 จัดการกลุ่มรายวิชา</button>
    </div>
    ${r==="samai"?S("วิชาสามัญ","📖",b):S("วิชาศาสนา","🕌",N)}
  `),(L=document.getElementById("btn-manage-subject-groups"))==null||L.addEventListener("click",()=>{Bs(e,t,l,B)})}function Bs(e,t,s,o){var b;(b=document.getElementById("subject-group-mgr"))==null||b.remove();const l=document.createElement("div");l.id="subject-group-mgr",l.className="fixed inset-0 z-[400] bg-white flex flex-col";const m=(N,A)=>{const q=N.master_subjects,r=s[N.id];return`
    <div class="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3">
      <p class="font-semibold text-sm text-gray-800 truncate min-w-0">${(q==null?void 0:q.subject_name)??"—"}</p>
      ${r?'<span class="text-[11px] font-semibold text-amber-500 whitespace-nowrap flex-shrink-0">⏳ รอตรวจสอบ</span>':A?`<button class="sgm-move-btn text-[11px] font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-1.5 hover:bg-indigo-50 whitespace-nowrap flex-shrink-0"
              data-class-id="${N.id}" data-requested="samai">ย้ายไป 📖 สามัญ</button>`:""}
    </div>`};let i="samai";const T=()=>{const N=t.filter(q=>(o(q)?"sasana":"samai")===i),A=l.querySelector("#sgm-list");A.innerHTML=N.length?N.map(q=>m(q,i==="sasana")).join(""):'<p class="text-center text-gray-400 text-sm py-8">ไม่มีวิชาในกลุ่มนี้</p>',A.querySelectorAll(".sgm-move-btn").forEach(q=>{q.addEventListener("click",async()=>{var S,L;const r=Number(q.dataset.classId),u=t.find(g=>g.id===r);if(confirm(`ขอย้ายวิชา "${((S=u==null?void 0:u.master_subjects)==null?void 0:S.subject_name)??""}" ไปกลุ่ม 📖 สามัญ?
(ต้องรอแอดมินตรวจสอบและอนุมัติก่อนจึงจะมีผลจริง)`)){q.disabled=!0,q.textContent="กำลังส่ง...";try{await ls(r,"samai"),Bt({title:"🔀 มีคำขอย้ายกลุ่มวิชาใหม่",body:`นักเรียนขอย้ายวิชา "${((L=u==null?void 0:u.master_subjects)==null?void 0:L.subject_name)??""}" ไปกลุ่ม 📖 สามัญ — รอตรวจสอบ`,url:"dashboard.html"}).catch(()=>{}),U("ส่งคำขอแล้ว รอแอดมินตรวจสอบ","success"),l.remove(),Ze(e)}catch(g){U("ส่งคำขอไม่สำเร็จ: "+ye(g),"error"),q.disabled=!1,q.textContent="ย้ายไป 📖 สามัญ"}}})})};l.innerHTML=`
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
    <div id="sgm-list" class="flex-1 overflow-y-auto px-4 py-3 space-y-2"></div>`,document.body.appendChild(l),l.querySelector("#sgm-back").addEventListener("click",()=>l.remove());const B=()=>{l.querySelector("#sgm-tab-samai").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${i==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,l.querySelector("#sgm-tab-samai").textContent=`📖 สามัญ (${t.filter(N=>!o(N)).length})`,l.querySelector("#sgm-tab-sasana").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${i==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,l.querySelector("#sgm-tab-sasana").textContent=`🕌 ศาสนา (${t.filter(N=>o(N)).length})`};l.querySelector("#sgm-tab-samai").addEventListener("click",()=>{i="samai",B(),T()}),l.querySelector("#sgm-tab-sasana").addEventListener("click",()=>{i="sasana",B(),T()}),B(),T()}async function Ds(e,t="samai"){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await vt(e.id).catch(()=>[]),o=r=>{var L,g,I,j,$;const u=((g=(L=r._class)==null?void 0:L.master_subjects)==null?void 0:g.subject_group)??"";return((($=(j=(I=r._class)==null?void 0:I.master_subjects)==null?void 0:j.teachers)==null?void 0:$.category)??"")==="ศาสนา"||u==="AGM"||u==="AGMVOC"},l=s.filter(r=>!o(r)),m=s.filter(r=>o(r)),i=r=>r?new Date(r).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",T=(r,u)=>r.due_at?new Date(u).getTime()>new Date(r.due_at).getTime():!1,B=r=>r.due_at?Date.now()>new Date(r.due_at).getTime():!1,b=r=>{var g,I;const u=r.mySubmission,S=u?T(r,u.submitted_at):!1,L=!u&&B(r);return`<div onclick="window._stuOpenClass(${r.class_id})"
      class="bg-white rounded-2xl border ${u?"border-emerald-100":L?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${ee(((I=(g=r._class)==null?void 0:g.master_subjects)==null?void 0:I.subject_name)??"")}</p>
        ${u?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${S?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${S?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${L?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${L?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${ee(r.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${i(r.due_at)}</p>
      ${u!=null&&u.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${ee(u.teacher_feedback)}</p>`:""}
    </div>`},N=r=>{if(!r.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const u=r.filter(Ne).sort((L,g)=>(L.due_at?new Date(L.due_at).getTime():1/0)-(g.due_at?new Date(g.due_at).getTime():1/0)),S=r.filter(L=>L.mySubmission&&L.mySubmission.status!=="rejected").sort((L,g)=>new Date(g.mySubmission.submitted_at).getTime()-new Date(L.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${u.length})</p>
        ${u.length?`<div class="space-y-2.5">${u.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${S.length})</p>
        ${S.length?`<div class="space-y-2.5">${S.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},A=l.filter(Ne).length,q=m.filter(Ne).length;ie(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${A?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${A}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${q?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${q}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${N(t==="sasana"?m:l)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(r=>{r.addEventListener("click",()=>Ds(e,r.dataset.grp))})}async function Ns(e,t,s="todo"){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const l=(await Ge(e.id).catch(()=>[])).find(a=>a.id===t);if(!l){ie('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:m}=await xt(async()=>{const{getClassAnnouncements:a}=await import("./api-CnonnVVn.js");return{getClassAnnouncements:a}},__vite__mapDeps([0,1,2,3])).catch(()=>({})),[{columns:i,scores:T},B,b,N,A,q,r]=await Promise.all([Gt(e.id,t).catch(()=>({columns:[],scores:[]})),Qt(e.id,t).catch(()=>[]),tt(e.id).catch(()=>[]),m?m(t).catch(()=>[]):Promise.resolve([]),wt(t,e.id).catch(()=>[]),Vt(t,e.id).catch(()=>[]),Wt(t).catch(()=>[])]),u=await _t(A.map(a=>a.id),e.id).catch(()=>new Set),S=window._pp5SystemCfg??await Be().catch(()=>({})),L=is(S.semester_start),g=r.find(a=>L>=a.week_start&&L<=a.week_end),I=b.filter(a=>{var d;return((d=a.classes)==null?void 0:d.id)===t}),j=Object.fromEntries(T.map(a=>[a.assignment_id,a])),$=l.master_subjects,X=$==null?void 0:$.teachers,re=await qt(t).catch(()=>(U("โหลดค่าปัดเลขร่วมไม่สำเร็จ","error"),null)),le=a=>Dt(i,a,d=>{var f,M;return((f=j[d])==null?void 0:f.final_score)??((M=j[d])==null?void 0:M.original_score)}),G=i.filter(Ve),de=i.filter(a=>a.column_type==="derived"),me=i.filter(a=>!nt(a)&&!Ve(a)&&!["override","derived"].includes(a.column_type)),ce=i.filter(a=>nt(a)&&!Ve(a)&&!["override","derived"].includes(a.column_type)),pe=me.reduce((a,d)=>a+(d.max_score||0),0),he=ce.reduce((a,d)=>a+(d.max_score||0),0),Ee=me.reduce((a,d)=>a+le(d),0),we=ce.reduce((a,d)=>a+le(d),0),ue=G.reduce((a,d)=>a+le(d),0),_e=de.reduce((a,d)=>a+le(d),0),y=de.reduce((a,d)=>a+Number(d.max_score||0),0),Z=Ee+we+_e,z=pe+he+y,te=z>0?Z/z*100:0,c=B.length,_=B.filter(a=>a.status==="present").length,k=c>0?Math.round(_/c*100):null,n=a=>a>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:a>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:a>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},x=z>0?n(te):null,C=a=>{const d=j[a.id],M=a.column_type==="derived"||d&&(d.final_score!=null||d.original_score!=null)?le(a):null,V=M!=null&&a.max_score>0?Math.round(M/a.max_score*100):null,ae=(d==null?void 0:d.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${a.assignment_name}
        ${ae?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${M!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${M!=null?We(re,Nt(a),M,a.column_type==="derived"?2:1):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${a.max_score!=null?"/"+a.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${M!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${a.max_score!=null?V!=null?V+"%":"—%":""}
      </td>
    </tr>`},E=(a,d,f,M,V)=>{if(!a.length)return"";const ae=f>0?Math.round(d/f*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${V}</span>
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
            ${a.map(C).join("")}
            <tr class="${M}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${We(re,a===me?"mid_subtotal":a===ce?"fin_subtotal":"bonus_subtotal",d)}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${f}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${ae}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},Q=Es(l),p=()=>`
    <div class="${Q.bg} ${Q.border} border border-l-4 ${Q.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${Q.text} text-sm leading-tight">${($==null?void 0:$.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${($==null?void 0:$.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(X==null?void 0:X.full_name)??"—"} · ${ke(l.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${z>0?We(re,"total",Z):"—"}</p>
        <p class="text-[10px] text-gray-400">/${z} คะแนน</p>
        ${ue>0?`<p class="text-[10px] text-amber-500 font-medium">คะแนนพิเศษ ${ue.toFixed(1).replace(/\.0$/,"")} (แยก ไม่บวกยอดรวม)</p>`:""}
        ${x?`<span class="inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${x.cls}">${x.label}</span>`:""}
      </div>
    </div>`,w=a=>{const d=Te[a.status]??Te.pending,f=a.class_score_columns,M=Je(a.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${a.request_type}</p>
          ${f?`<p class="text-[11px] text-gray-400 mt-0.5">${f.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${d.cls}">${d.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${Me(a.requested_date)}${a.requested_period_no?` · คาบ ${a.requested_period_no}`:""}${M?` · ${M}`:""}</p>
        ${a.reason?`<p>💬 ${a.reason}</p>`:""}
        ${a.teacher_comment?`<p class="${a.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${a.teacher_comment}</p>`:""}
      </div>
      ${a.status==="pending"?`
        <button onclick="window._stuCancelRequest(${a.id}, ${t})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},D=()=>{const a=[],d=q.filter(Ne);d.length>0&&a.push(`
        <button onclick="window._stuOpenClassTab(${t},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${d.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${d.length}</span>
        </button>`);const f=I.filter(h=>h.status==="pending");f.length>0&&f.forEach(h=>{const K=h.class_score_columns,ge=Je(h.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${h.request_type} — รอครูอนุมัติ</p>
              ${K?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${K.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${Me(h.requested_date)}${h.requested_period_no?` · คาบ ${h.requested_period_no}`:""}${ge?` · ${ge}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const M=I.filter(h=>h.status==="approved"&&h.exam_attended==null);M.length>0&&M.forEach(h=>{const K=h.class_score_columns,ge=Je(h.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${h.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${K?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${K.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${Me(h.requested_date)}${h.requested_period_no?` · คาบ ${h.requested_period_no}`:""}${ge?` · ${ge}`:""}</p>
              ${h.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${h.teacher_comment}</p>`:""}
            </div>
          </div>`)}),A.forEach(h=>{const K=h.attempts.filter(fe=>fe.status==="submitted"||fe.status==="terminated_violation").reduce((fe,Pe)=>Math.max(fe,Pe.score_pct??0),null),ge=h.attempts.length&&h.attempts[h.attempts.length-1].status==="terminated_violation"?h.attempts[h.attempts.length-1]:null,Le=h.attempts.find(fe=>fe.status==="in_progress"),$e=h.attempts.filter(fe=>fe.status==="submitted"||fe.status==="terminated_violation").length;let xe="",be="";h.status==="announced"?xe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':h.status==="started"&&u.has(h.id)?xe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':h.status==="started"&&ge?xe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':h.status==="started"&&Le?(xe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">กำลังทำอยู่</span>',be=`<button onclick="window._stuStartQuiz('${h.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):h.status==="started"&&$e>=h.max_attempts?xe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':h.status==="started"?(xe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">เปิดสอบอยู่</span>',be=`<button onclick="window._stuStartQuiz('${h.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):h.status==="closed"&&(xe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),a.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${ee(h.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${h.num_questions} ข้อ${h.time_limit_minutes?` · ${h.time_limit_minutes} นาที`:""} · ทำได้ ${$e}/${h.max_attempts} ครั้ง</p>
            ${K!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${K.toFixed(1)}%</p>`:""}
            <div class="mt-1">${xe}</div>
            ${be}
          </div>
        </div>`)});const V=[l.day1_date,l.day2_date,l.day3_date,l.day4_date,l.day5_date,l.day6_date].filter(Boolean),ae=new Date;ae.setHours(0,0,0,0);const H=V.map(h=>{const K=new Date(h);return K.setHours(0,0,0,0),K}).filter(h=>h>=ae).sort((h,K)=>h-K);if(H.length>0){const h=H[0],K=Math.round((h-ae)/864e5),ge=K===0?"🔴 วันนี้!":K===1?"🟡 พรุ่งนี้":`⏰ อีก ${K} วัน`,Le=Fe[h.getDay()]??"";a.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${Le}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${h.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${Me(ht(h))}</p>
          </div>
          <span class="text-xs font-bold ${K===0?"text-red-500":K===1?"text-amber-500":"text-emerald-600"}">${ge}</span>
        </div>`)}const F={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},oe=h=>{if(!h)return"";const K=new Date(h),Le=K-new Date,$e=Math.floor(Le/6e4),xe=K.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(Le<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${xe}</span>`;if($e<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${$e} นาที · ${xe}</span>`;const be=Math.floor($e/60);return be<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${be} ชม. ${$e%60} น. · ${xe}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(be/24)} วัน · ${xe}</span>`};return N.length>0&&[...N].sort((h,K)=>(K.priority||0)-(h.priority||0)).forEach(h=>{const K=F[h.ann_type]??F.general,ge=h.ann_type==="deadline"&&h.deadline_at?oe(h.deadline_at):"";a.push(`
          <div class="rounded-2xl border ${K.border} ${K.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${K.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${h.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${K.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${h.title??""}</p>
                ${h.body?`<p class="text-xs text-gray-500 mt-1">${h.body}</p>`:""}
                ${ge?`<div class="mt-2">${ge}</div>`:""}
                ${h.file_url?`<a href="${h.file_url}" target="_blank" rel="noopener"
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
        </div>`}`},W=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${z>0?`<span class="text-xs text-gray-400">${te.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${i.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${E(me,Ee,pe,"bg-blue-50","📘 กลางภาค")}
            ${E(ce,we,he,"bg-purple-50","📙 ปลายภาค")}
            ${E(de,_e,y,"bg-indigo-50","🔢 คะแนนสูตร")}
            ${G.length?E(G,G.reduce((a,d)=>a+le(d),0),0,"bg-amber-50","⭐ คะแนนพิเศษ (ไม่รวมเกรด)"):""}
          </div>`}
    </div>
    ${c>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${k!==null?`<span class="text-xs text-gray-400">${_}/${c} คาบ · ${k}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${B.map(a=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${a.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${ws[a.status]??"bg-gray-50 text-gray-400"}">
            ${hs[a.status]??"?"}
          </span>
        </div>`).join("")}
      </div>
    </div>`:""}`,O=()=>`
    <button onclick="window._stuOpenRequest(${t})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${I.length?`<div class="space-y-3">${I.map(w).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,ne=a=>a?new Date(a).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",v=(a,d)=>a.due_at?new Date(d).getTime()>new Date(a.due_at).getTime():!1,R=a=>a.due_at?Date.now()>new Date(a.due_at).getTime():!1,Y=a=>{var ae,H;const d=a.mySubmission,f=(d==null?void 0:d.status)==="rejected",M=d?v(a,d.submitted_at):!1,V=!d&&R(a);return`<div class="bg-white rounded-2xl border ${f?"border-red-200":d?"border-emerald-100":V?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${ee(a.title)}</p>
        ${f?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':d?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${M?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${M?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${V?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${V?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${a.description?`<p class="text-xs text-gray-500 mb-1.5">${ee(a.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${ne(a.due_at)}</p>
      ${(ae=a.attachment_urls)!=null&&ae.length?`<div class="flex flex-wrap gap-1.5 mb-2">${a.attachment_urls.map(F=>`<a href="${ee(F.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${ee(F.name)}</a>`).join("")}</div>`:""}
      ${(H=d==null?void 0:d.file_urls)!=null&&H.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(d.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${d.file_urls.map(F=>`<a href="${ee(F.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${ee(F.name)}</a>`).join("")}</div></div>`:""}
      ${d!=null&&d.teacher_feedback?f?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${ee(d.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${ee(d.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${f?"bg-red-600 text-white hover:bg-red-700":d?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${a.id}">${f?"📤 ส่งแก้ไขใหม่":d?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},P=s==="scores"?W():s==="requests"?O():s==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${q.length?`<div class="space-y-3">${q.map(Y).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:D();ie(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${p()}
    ${g?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${L}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${ee(g.topic)}</p>
      ${g.description?`<p class="text-xs text-indigo-400 mt-0.5">${ee(g.description)}</p>`:""}
    </div>`:""}
    ${P}
  `),window._stuCancelRequest=async(a,d=t)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await ft(a),U("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(d,"requests")}catch(f){U("ยกเลิกไม่สำเร็จ: "+ye(f),"error")}},window._stuStartQuiz=async a=>{try{const d=await $t(a,e.id).catch(()=>null);if(d&&d.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${d.id}`;return}const f=await St(a);window.location.href=`quiz-exam.html?attempt=${f.id}`}catch(d){U("เข้าสอบไม่สำเร็จ: "+ye(d),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(a=>{a.addEventListener("click",()=>{const d=q.find(f=>f.id===parseInt(a.dataset.aid,10));d&&se(d)})});function se(a){var f;(f=document.getElementById("stu-submit-modal"))==null||f.remove();const d=document.createElement("div");d.id="stu-submit-modal",d.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",d.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📤 ส่งงาน — ${ee(a.title)}</h3>
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
      </div>`,document.body.appendChild(d),d.addEventListener("click",M=>{M.target===d&&d.remove()}),d.querySelector("#ss-close").addEventListener("click",()=>d.remove()),d.querySelector("#ss-submit").addEventListener("click",async()=>{var ae;const M=[...d.querySelector("#ss-files").files??[]];if(!M.length&&!a.mySubmission){U("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const V=d.querySelector("#ss-submit");V.disabled=!0,V.textContent="กำลังส่ง...";try{const H=[];for(const oe of M)H.push(await ps(oe,`class-${t}/student-${e.id}`));const F=H.length?H:((ae=a.mySubmission)==null?void 0:ae.file_urls)??[];await Ut(a.id,e.id,F,d.querySelector("#ss-note").value.trim()||null),U("ส่งงานสำเร็จ ✅","success"),d.remove(),Ns(e,t,"assignments")}catch(H){U("ส่งงานไม่สำเร็จ: "+ye(H),"error"),V.disabled=!1,V.textContent="ส่งงาน"}})}}async function As(e){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const t=await tt(e.id).catch(()=>[]),s=`<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`;if(!t.length){ie(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${s}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`);return}ie(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} รายการ)</span></h2>
    ${s}
    <div class="space-y-3">
      ${t.map(o=>{var T,B;const l=Te[o.status]??Te.pending,m=o.classes,i=o.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((T=m==null?void 0:m.master_subjects)==null?void 0:T.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((B=m==null?void 0:m.master_subjects)==null?void 0:B.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${l.cls}">${l.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${o.request_type}</span></p>
            ${i?`<p>📝 หัวข้อ: <span class="text-gray-700">${i.assignment_name}</span></p>`:""}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${Me(o.requested_date)}</span>
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
  `),window._stuCancelRequest=async o=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await ft(o),U("ยกเลิกคำร้องแล้ว","success"),As(e)}catch(l){U("ยกเลิกไม่สำเร็จ: "+ye(l),"error")}}}async function ma(e,t){var we,ue,_e;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,o]=await Promise.all([Ge(e.id).catch(()=>[]),Ht(e.id).catch(()=>0)]),l=s.find(y=>y.id===t);if(!l){ie('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(o>=2){ie(`
      <button onclick="window._stuOpenClassTab(${t},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const m=o===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",i=l.master_subjects,T=i==null?void 0:i.teacher_id,B=i==null?void 0:i.teachers,b=T?(B==null?void 0:B.full_name)??"ครูผู้สอน":"ครูผู้สอน",N=String(b||"ค").trim().charAt(0).toUpperCase()||"ค",A=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||l.class_name||"—";let q=null;const[r,u,S]=await Promise.all([Rt(t).catch(()=>[]),T?Ot(T,t).catch(y=>(q=y,[])):Promise.resolve([]),zt().catch(()=>[])]),L=r.filter(y=>y.column_type!=="override"),g={};for(const y of u){g[`${y.day_of_week}_${y.period_no}`]=y;const Z=y.span_periods??1;for(let z=1;z<Z;z++)g[`${y.day_of_week}_${y.period_no+z}`]={...y,_secondary:!0}}const I=u.length>0;if(!I){ie(`
      <button onclick="window._stuOpenClassTab(${t}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(i==null?void 0:i.subject_name)??""} · ${ke(l.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${T?q?`ระบบอ่านตารางครูไม่สำเร็จ: ${q.message??q}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${T?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const j="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",$=j+" cursor-pointer";let X=null,re=0;const le=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],G=(y,Z,z=null)=>{const te=String(y??"").trim(),c=String(Z??"").trim();return te&&c?`${te} — ${c}`:te||(z!=null?String(z):"")},de=y=>{const Z=le[y%le.length];return`${Z.bg} ${Z.text}`};let me={};try{me=JSON.parse(localStorage.getItem(`scheduleColors_${T??"x"}`)??"{}")}catch{}const ce={};let pe=0;u.forEach(y=>{const Z=G(y.subject_name,y.class_name,y.subject_id);if(!Z||ce[Z]!=null)return;const z=me[Z]??me[y.subject_id]??me[y.subject_name],te=Number(z);ce[Z]=Number.isFinite(te)?te:pe++});const he=(y=0)=>{const Z=[0,1,2,3,4,5],z={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},te={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},c=Ke(y),_=new Date;_.setHours(0,0,0,0);const k=Z.map(x=>{const C=c[x];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${te[x]}">
        <p class="text-sm font-bold text-gray-700">${z[x]}</p>
        <p class="text-xs text-gray-400">${C.getDate()}/${C.getMonth()+1}</p>
      </th>`}).join(""),n=S.map(x=>{var p,w;const C=((p=x.start_time)==null?void 0:p.slice(0,5))??"",E=((w=x.end_time)==null?void 0:w.slice(0,5))??"",Q=Z.map(D=>{const W=`${D}_${x.period_no}`,O=g[W];if(O!=null&&O._secondary)return"";const v=c[D]<_;if(!O)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${x.period_no}" data-day="${D}" data-week-offset="${y}"
              ${v?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${v?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${v?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${v?"ล็อก":"＋"}</span>
            </button>
          </td>`;const R=O.span_periods??1,Y=G(O.subject_name,O.class_name,O.subject_id),J=ce[Y]??0,P=de(J);return`<td class="border border-gray-100 p-0" style="height:1px" ${R>1?`rowspan="${R}"`:""}>
          <div class="w-full h-full ${P} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${O.subject_name??"ไม่ว่าง"}</p>
            ${O.class_name?`<p class="text-[10px] opacity-80 leading-tight">${ke(O.class_name)}</p>`:""}
            ${O.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${O.teacher_name}</p>`:""}
            ${R>1?`<p class="text-[9px] opacity-40 mt-0.5">${R} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${x.period_no}</p>
          <p class="text-[10px] text-gray-400">${C}–${E}</p>
        </td>
        ${Q}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${k}
          </tr>
        </thead>
        <tbody>${n}</tbody>
      </table>
    </div>`},Ee=y=>{const Z=Ke(y);return`${y===0?"สัปดาห์นี้":y===1?"สัปดาห์หน้า":`อีก ${y} สัปดาห์`} (${Re(Z[0])} - ${Re(Z[5])})`};if(ie(`
    <button onclick="window._stuOpenClass(${t})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(i==null?void 0:i.subject_name)??""} · ${ke(l.class_name)}</p>
      ${m}

      ${I?`
      <div id="schedule-first-gate" class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-bold text-emerald-800">เลือกคาบว่างของครูก่อน</p>
        <p class="mt-1 text-xs text-emerald-600">ระบบจะเปิดตารางสอนให้เลือกวันและคาบ แล้วค่อยกรอกข้อมูลคำร้องต่อ</p>
      </div>`:""}

      <form id="req-form" class="space-y-4 ${I?"hidden":""}">
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
          <select id="req-col" class="${$}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${L.map(y=>`<option value="${y.id}">${y.assignment_name} (${y.assignment_type} · เต็ม ${y.max_score})</option>`).join("")}
          </select>
        </div>

        <!-- Schedule grid / manual date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันและคาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${I?`
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
              <input type="date" id="req-date" class="${j}"
                min="${ht(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${$}" required>
                <option value="">— เลือกคาบ —</option>
                ${S.map(y=>`<option value="${y.period_no}">คาบ ${y.period_no} (${y.start_time.slice(0,5)}–${y.end_time.slice(0,5)})</option>`).join("")}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${j} resize-none"
            placeholder="ระบุเหตุผลที่ขาดสอบ..."></textarea>
        </div>

        <button type="submit" id="req-submit"
          class="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ยื่นคำร้อง
        </button>
      </form>
    </div>
    ${I?`
      <div id="teacher-schedule-modal" class="hidden fixed inset-0 z-[120] bg-black/50 p-4 items-center justify-center">
        <div class="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold shadow-sm">
                ${B!=null&&B.image_url?`<img src="${B.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${N}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${b} · ${(i==null?void 0:i.subject_name)??""}</p>
                <p class="text-[11px] text-gray-400 mt-0.5 truncate">นักเรียน ${(e==null?void 0:e.full_name)??"—"} · รหัส ${(e==null?void 0:e.student_code)??"—"} · ห้อง ${A}</p>
              </div>
            </div>
            <button type="button" id="close-schedule-modal"
              class="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600">×</button>
          </div>
          <div class="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p class="text-[11px] text-emerald-600 font-medium">กรุณาเลือกคาบว่างก่อนกรอกคำร้อง · ช่องว่างที่ไม่ถูกล็อกเลือกได้</p>
            <select id="schedule-week-select"
              class="border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200">
              ${[0,1,2,3,4].map(y=>`<option value="${y}">${Ee(y)}</option>`).join("")}
            </select>
          </div>
          <div id="schedule-grid-wrap">${he(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(y=>{y.addEventListener("change",()=>{var te;const Z=document.getElementById("req-reason-wrap"),z=y.value==="สอบย้อนหลัง";Z.classList.toggle("hidden",!z),(te=document.getElementById("req-reason"))==null||te.toggleAttribute("required",z)})}),I){const y=document.getElementById("teacher-schedule-modal");(we=document.getElementById("open-schedule-modal"))==null||we.addEventListener("click",()=>{y==null||y.classList.remove("hidden"),y==null||y.classList.add("flex")}),(ue=document.getElementById("close-schedule-modal"))==null||ue.addEventListener("click",()=>{var z;if(!X){(z=window._stuOpenClassTab)==null||z.call(window,t,"requests");return}y==null||y.classList.add("hidden"),y==null||y.classList.remove("flex")}),y==null||y.addEventListener("click",z=>{z.target===y&&X&&(y.classList.add("hidden"),y.classList.remove("flex"))});const Z=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(z=>{z.addEventListener("click",()=>{var Q,p;const te=parseInt(z.dataset.period),c=parseInt(z.dataset.day),_=parseInt(z.dataset.weekOffset??re),n=Ke(_)[c];X={period_no:te,day_of_week:c,date:n,week_offset:_},document.getElementById("req-date").value=je(n),document.getElementById("req-period-hidden").value=te;const x=document.getElementById("period-summary"),C=document.getElementById("period-summary-text");x==null||x.classList.remove("hidden"),C&&(C.textContent=`คาบ ${te} วัน${Fe[c]??""} ${Re(n)}`);const E=document.getElementById("schedule-picker-label");E&&(E.textContent=`เลือกคาบ ${te} วัน${Fe[c]??""} ${Re(n)} แล้ว`),(Q=document.getElementById("schedule-first-gate"))==null||Q.classList.add("hidden"),(p=document.getElementById("req-form"))==null||p.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(w=>{w.classList.toggle("ring-2",w===z),w.classList.toggle("ring-emerald-500",w===z),w.classList.toggle("bg-emerald-200",w===z)}),y==null||y.classList.add("hidden"),y==null||y.classList.remove("flex")})})};Z(),(_e=document.getElementById("schedule-week-select"))==null||_e.addEventListener("change",z=>{re=parseInt(z.target.value||"0");const te=document.getElementById("schedule-grid-wrap");te&&(te.innerHTML=he(re)),Z()}),setTimeout(()=>{y==null||y.classList.remove("hidden"),y==null||y.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async y=>{var n,x,C,E,Q;y.preventDefault();const Z=document.getElementById("req-submit"),z=(n=document.querySelector('input[name="req_type"]:checked'))==null?void 0:n.value,te=document.getElementById("req-col").value,c=((x=document.getElementById("req-reason"))==null?void 0:x.value.trim())||null,_=(C=document.getElementById("req-date"))==null?void 0:C.value,k=I?(E=document.getElementById("req-period-hidden"))==null?void 0:E.value:(Q=document.getElementById("req-period-sel"))==null?void 0:Q.value;if(!z||!te||!_||!k){if(U("กรุณากรอกข้อมูลให้ครบ","warning"),I&&!k){U("กรุณาเลือกคาบว่างจากตารางครู","warning");const p=document.getElementById("teacher-schedule-modal");p==null||p.classList.remove("hidden"),p==null||p.classList.add("flex")}return}if(z==="สอบย้อนหลัง"&&!c){U("กรุณาระบุเหตุผล","warning");return}Z.disabled=!0,Z.textContent="กำลังยื่น...";try{await Ft({student_id:e.id,class_id:t,assignment_id:parseInt(te),request_type:z,requested_date:_,requested_period_no:parseInt(k),reason:z==="สอบย้อนหลัง"?c:null,status:"pending"}),U("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(t,"requests")}catch(p){U("ยื่นไม่สำเร็จ: "+ye(p),"error")}finally{Z.disabled=!1,Z.textContent="ยื่นคำร้อง"}})}async function ua(e,t){var m,i,T,B;const s=()=>`
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
      ปพ.5 ออนไลน์ © 2026 v${xs}
    </p>
  `),(m=document.getElementById("btn-stu-my-certificates-profile"))==null||m.addEventListener("click",()=>kt(e)),(i=document.getElementById("btn-stu-contact-admin"))==null||i.addEventListener("click",()=>{var b;(b=window._openFeedbackWidget)==null||b.call(window)}),(T=document.getElementById("btn-stu-pw-reset"))==null||T.addEventListener("click",()=>{o()});function o(){var N;(N=document.getElementById("pw-choice-modal"))==null||N.remove();const b=document.createElement("div");b.id="pw-choice-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#pwc-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#pwc-self").addEventListener("click",()=>{b.remove(),l()}),b.querySelector("#pwc-admin").addEventListener("click",()=>{var A;b.remove(),(A=window._openPasswordResetRequest)==null||A.call(window)})}function l(){var N;(N=document.getElementById("self-pw-modal"))==null||N.remove();const b=document.createElement("div");b.id="self-pw-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#self-pw-close").addEventListener("click",()=>b.remove()),b.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const A=b.querySelector("#btn-stu-save-pw"),q=b.querySelector("#stu-new-pw").value,r=b.querySelector("#stu-new-pw-confirm").value,u=b.querySelector("#stu-pw-msg"),S=(L,g)=>{u.className=`text-xs text-center py-2.5 rounded-xl ${g?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,u.textContent=L,u.classList.remove("hidden")};if(!q||q.length<6){S("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if(q!==r){S("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}A.disabled=!0,A.textContent="กำลังบันทึก...",u.classList.add("hidden");try{const{error:L}=await Se.auth.updateUser({password:q});if(L)throw L;S("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),b.querySelector("#stu-new-pw").value="",b.querySelector("#stu-new-pw-confirm").value=""}catch(L){S("ไม่สำเร็จ: "+ye(L),!0)}finally{A.disabled=!1,A.textContent="บันทึกรหัสผ่านใหม่"}})}(B=document.getElementById("stu-logout-btn"))==null||B.addEventListener("click",()=>{var N;(N=document.getElementById("stu-logout-confirm"))==null||N.remove();const b=document.createElement("div");b.id="stu-logout-confirm",b.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.querySelector("#stu-logout-cancel").addEventListener("click",()=>b.remove()),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#stu-logout-confirm-btn").addEventListener("click",t)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{Hs(e)}),document.getElementById("btn-request-qr-card").addEventListener("click",()=>{var N;(N=document.getElementById("qr-request-confirm"))==null||N.remove();const b=document.createElement("div");b.id="qr-request-confirm",b.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(b),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#qr-request-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#qr-request-ok").addEventListener("click",async()=>{const A=b.querySelector("#qr-request-ok");A.disabled=!0,A.textContent="กำลังส่ง...";try{await Mt({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),Tt({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),b.remove(),U("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch(q){A.disabled=!1,A.textContent="ยืนยัน",U("ส่งไม่สำเร็จ: "+ye(q),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var le;const b=window._pp5SystemCfg??await Be().catch(()=>({})),N=parseInt(b.studentQrDailyLimit||"3",10),A=parseInt(b.studentQrExpirySeconds||"60",10),q=`qr_generation_logs_${e.id}`,r=je(new Date);let u=JSON.parse(localStorage.getItem(q)||"null");if((!u||u.date!==r)&&(u={date:r,count:0}),u.count>=N){U(`คุณสร้าง QR Code ครบโควต้า ${N} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}u.count+=1,localStorage.setItem(q,JSON.stringify(u)),(le=document.getElementById("student-qr-modal"))==null||le.remove();const S=document.createElement("div");S.id="student-qr-modal",S.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",S.innerHTML=`
      <div class="text-center w-full max-w-sm">
        <div class="mb-5">
          <h3 class="text-2xl font-bold text-gray-800">🎫 QR Code ของฉัน</h3>
          <p class="text-sm font-semibold text-emerald-600 mt-1">${e.full_name}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส: ${e.student_code} · ห้อง: ${ke(e.main_room)}</p>
        </div>
        
        <div class="relative w-64 h-64 mx-auto mb-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
          <canvas id="student-qr-canvas" class="w-56 h-56 object-contain"></canvas>
        </div>

        <div class="mb-8 px-4">
          <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-2.5">
            <div id="qr-timer-bar" class="bg-emerald-500 h-full w-full transition-all duration-1000 ease-linear"></div>
          </div>
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${A}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${N-u.count} / ${N} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(S);const L=S.querySelector("#student-qr-canvas"),g=Math.floor(Date.now()/1e3),I=`SQ:${e.student_code}:${g}`;try{await bs.toCanvas(L,I,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(G){console.error("Failed to draw QR Code:",G),U("สร้าง QR Code ไม่สำเร็จ","error"),S.remove();return}let j=A;const $=S.querySelector("#qr-timer-bar"),X=S.querySelector("#qr-timer-sec"),re=setInterval(()=>{j-=1,X&&(X.textContent=j),$&&($.style.width=`${j/A*100}%`),j<=0&&(clearInterval(re),S.remove(),U("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);S.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(re),S.remove()})})}const Ps={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function Hs(e){var o;(o=document.getElementById("student-leave-modal"))==null||o.remove();const t=document.createElement("div");t.id="student-leave-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",t.innerHTML=`
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
  `,document.body.appendChild(t);const s=()=>{t._leaveTimer&&clearInterval(t._leaveTimer),t.remove()};t.querySelector("#btn-leave-modal-close").addEventListener("click",s),Os(e,t)}function Rs(e,t){e.querySelectorAll(".leave-tab-btn").forEach(s=>{const o=s.dataset.leaveTab===t;s.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${o?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function Os(e,t){const s=t.querySelector("#student-leave-body");let o="permit";try{const[l,m]=await Promise.all([ns(e.id),os(e.id)]),i=m.filter(q=>q.status==="overdue").length,T=i>=3?"danger":i>=1?"warning":"safe",B=Ps[T],b=()=>{var r,u,S,L;let q="";if(l){const g=((u=(r=l.classes)==null?void 0:r.master_subjects)==null?void 0:u.subject_name)||((S=l.classes)==null?void 0:S.class_name)||"—";q=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${ee(g)} · เหตุผล: ${ee(l.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${ee(((L=l.teachers)==null?void 0:L.full_name)||"—")}</p>
          </div>
        `}return`
        <div class="rounded-2xl ${B.badgeBg} border ${B.border} px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">สถานะปัจจุบัน</p>
            <p class="text-sm font-extrabold ${B.badgeText} mt-0.5">${B.label}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">เลยเวลา/ไม่กลับ</p>
            <p class="text-sm font-extrabold ${B.badgeText} mt-0.5">${i}/3 ครั้ง</p>
          </div>
        </div>
        ${q}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},N=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${m.length?m.map(r=>{var I,j,$;const u=((j=(I=r.classes)==null?void 0:I.master_subjects)==null?void 0:j.subject_name)||(($=r.classes)==null?void 0:$.class_name)||"—",S=r.status==="active"?"🚪 กำลังออก":r.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",L=r.status==="active"?"text-amber-600":r.status==="overdue"?"text-red-600":"text-emerald-600",g=new Date(r.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${ee(u)}</span>
                  <span class="text-[10px] font-bold ${L}">${S}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${g} · ${ee(r.reason)} · ${r.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,A=()=>{if(s.innerHTML=o==="permit"?b():N(),Rs(t,o),t.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${o==="permit"?B.border:"border-transparent"}`,o==="permit"&&l){const q=s.querySelector("#student-leave-active-card"),r=s.querySelector("#student-leave-active-label"),u=s.querySelector("#student-leave-active-timer"),S=s.querySelector("#student-leave-active-detail"),L=s.querySelector("#student-leave-active-teacher"),g=()=>{const I=us(l.created_at,l.allowed_duration);u&&(u.textContent=I.timerText),I.isOverdue&&q&&!q.classList.contains("bg-red-50")&&(q.classList.remove("border-amber-200","bg-amber-50"),q.classList.add("border-red-200","bg-red-50","animate-pulse"),r&&(r.textContent="⛔ เลยเวลา",r.classList.replace("text-amber-700","text-red-700")),u&&u.classList.replace("text-amber-700","text-red-700"),S&&S.classList.replace("text-amber-800","text-red-800"),L&&L.classList.replace("text-amber-600","text-red-600")),I.isBeyondLimit&&q&&q.classList.remove("animate-pulse")};g(),t._leaveTimer=setInterval(g,1e3)}};t.querySelectorAll(".leave-tab-btn").forEach(q=>{q.addEventListener("click",()=>{t._leaveTimer&&clearInterval(t._leaveTimer),o=q.dataset.leaveTab,A()})}),A()}catch(l){s.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${ee(ye(l))}</p>`}}async function It(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const s=document.createElement("script");s.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",s.onload=()=>e(window.Html5Qrcode),s.onerror=o=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(s)})}const zs="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",Fs="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let Oe=null;function Gs(){return Oe||(Oe=new Promise((e,t)=>{var o,l;if((l=(o=window.google)==null?void 0:o.accounts)!=null&&l.id){e();return}const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,s.onload=()=>e(),s.onerror=()=>t(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(s)}),Oe)}function pa(){var o;(o=document.getElementById("stu-email-link-modal"))==null||o.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e);const t=(l,m)=>{const i=e.querySelector("#sel-msg");i.className=`text-xs text-center py-2.5 rounded-xl ${m?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,i.textContent=l,i.classList.remove("hidden")},s=async(l,m,i)=>{m&&(m.disabled=!0);try{await yt(l),t(`เชื่อมอีเมล ${l} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(T){t("ไม่สำเร็จ: "+ye(T),!0),m&&(m.disabled=!1,m.textContent=i)}};Gs().then(()=>{window.google.accounts.id.initialize({client_id:zs,ux_mode:"redirect",login_uri:Fs}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",l=>{l.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const l=e.querySelector("#sel-save"),m=e.querySelector("#sel-email").value.trim(),i=e.querySelector("#sel-email-confirm").value.trim();if(!m||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){t("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(m!==i){t("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}l.textContent="กำลังบันทึก...",await s(m,l,"เชื่อมอีเมล")})}async function xa(e){try{await yt(e),U(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(t){U("เชื่อมอีเมลไม่สำเร็จ: "+ye(t),"error")}}const ut={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},pt={};function ve(e="success",t=null){try{const s=ut[e]?e:"error",o=t==="หญิง"?"female":"male",l=`${s}_${o}`;let m=pt[l];if(!m){const i="/pp5online/";m=new Audio(`${i}sounds/${ut[s][o]}`),pt[l]=m}m.currentTime=0,m.volume=1,m.play().catch(i=>console.warn("Play scan sound failed:",i))}catch(s){console.error("Play scan sound failed",s)}}function et(e,t){const o=Ct(t==null?void 0:t.semester_start,[]).find(l=>l.days.some(m=>m.ds===e));return o?o.n:1}async function ba(e){var _,k;const t=e;window._lastSuccessFeedbackHTML="",ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,o]=await Promise.all([Be().catch(()=>({})),At().catch(()=>[])]);window._pp5SystemCfg=s;let l=!1;if(e.student_code)l=jt(e,s);else if(e.teacher_code){const n=(s.prayerScannerTeachers||"").split(/[\s,]+/).map(C=>C.trim()).filter(Boolean);let x=null;try{const C=await Se.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();x=(C==null?void 0:C.data)??null}catch{}l=n.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(x==null?void 0:x.role)==="admin"}if(!l){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const m=!!e.teacher_code,i=!m&&Lt(e,s),T=st(s,i);if(!m&&!Xe(s,i)){ie(`
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
      </div>`),(_=document.getElementById("scanner-btn-back-restricted"))==null||_.addEventListener("click",()=>{window._stuNav("overview")});return}const B=document.querySelector("nav.safe-area-bottom");B&&B.classList.add("hidden");const b=document.getElementById("sidebar"),N=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(b&&b.classList.add("hidden"),N&&N.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const A=je(new Date);let q=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");q=q.filter(n=>n.check_date===A),localStorage.setItem("prayer_scan_history_today",JSON.stringify(q)),q.forEach(n=>window._syncedStudentIdsToday.add(n.student_id));let r=localStorage.getItem("prayer_scan_input_mode")||"camera",u=localStorage.getItem("prayer_scan_device_mode")||"single";const S=_s(e),L=localStorage.getItem("prayer_scan_active_location");let g=S.some(n=>n.id===L)?L:((k=S[0])==null?void 0:k.id)||"musolla_male",I=localStorage.getItem("prayer_scan_record_status")||"pray",j=!1,$=!1;const X="/pp5online/prayer-scanner-amanah.png";function re(){var a,d;const n=je(new Date),x=et(n,s),C=S.map(f=>`
      <option value="${f.id}" ${g===f.id?"selected":""}>${f.icon} ${f.label}${f.detail?` (${f.detail})`:""}</option>
    `).join(""),E=S.map(f=>`
      <button type="button" data-location="${f.id}"
        class="scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-emerald-100 text-xl flex items-center justify-center flex-shrink-0">${f.icon}</span>
          <span class="min-w-0">
            <span class="block text-sm font-extrabold">${f.label}</span>
            <span class="block text-xs text-gray-500 mt-0.5">${f.detail||"จุดสแกนละหมาด"}</span>
          </span>
          <span class="scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold border-gray-200 bg-white text-transparent">✓</span>
        </div>
      </button>
    `).join(""),Q=`
      <!-- Flash green screen overlay -->
      <div id="scanner-flash" class="fixed inset-0 pointer-events-none z-50 bg-emerald-500 opacity-0 transition-opacity duration-150 hidden"></div>
      <div id="scanner-time-warning-border" class="hidden fixed inset-0 pointer-events-none z-[60] border-4 border-red-500 rounded-[2rem] animate-pulse"></div>

      ${m?"":`
      <div id="scanner-amanah-modal" class="fixed inset-0 z-[90] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
        <div class="w-full max-w-3xl max-h-[92vh] overflow-hidden bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col">
          <div class="flex-1 overflow-y-auto bg-emerald-950/5">
            <img id="scanner-amanah-poster" src="${X}" alt="นาซีฮัทถึงนักเรียนแกนนำผู้รับผิดชอบการสแกนละหมาด"
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
              ${E}
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
          <p class="text-xs text-gray-400 mt-0.5">ผู้สแกน: ${e.full_name} · สัปดาห์ที่ ${x}</p>
        </div>
      </div>

      <div id="scanner-countdown-panel" class="${m?"bg-indigo-50 border-indigo-100 text-indigo-700":"bg-emerald-50 border-emerald-100 text-emerald-800"} rounded-2xl border px-4 py-3 mb-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <p class="text-[10px] font-bold uppercase tracking-wider opacity-70">${m?"สิทธิ์คุณครู":i?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-xs font-semibold mt-0.5">${m?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${T.startLabel} - ${T.endLabel} น.`}</p>
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
            ${C}
          </select>
        </div>

        ${e.gender==="หญิง"||e.teacher_code?`
        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📝 สถานะบันทึกเมื่อสแกน (Record Status)</label>
          <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
            <button id="opt-status-pray" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${I==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟢 ละหมาดปกติ
            </button>
            <button id="opt-status-usor" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${I==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
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
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const f=parseInt(s.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(f)?Math.max(0,f):2})()} ครั้ง/เดือน/คน</p>
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
    `,p=document.getElementById("stu-content")||document.getElementById("main-content");p&&(p.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${Q}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{pe(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),B&&B.classList.remove("hidden");const f=document.getElementById("sidebar"),M=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");f&&f.classList.remove("hidden"),M&&M.classList.add("md:ml-64"),e.teacher_code?xt(async()=>{const{renderPrayerAdmin:V}=await import("./views-B39y6ETM.js").then(ae=>ae.M);return{renderPrayerAdmin:V}},__vite__mapDeps([4,5,6,0,1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])).then(({renderPrayerAdmin:V})=>{V(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{le("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{le("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{G("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{G("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{te()});const w=document.getElementById("scanner-manual-code-input"),D=document.getElementById("btn-submit-manual-scan"),W=()=>{const f=w==null?void 0:w.value.trim();if(!f){U("กรุณากรอกรหัสนักเรียน","warning"),w==null||w.focus();return}w.value="",we(f,{inputMethod:"manual"})};D==null||D.addEventListener("click",W),w==null||w.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),W())});const O=document.getElementById("opt-active-location");let ne="";const v=f=>{const M=document.getElementById("btn-confirm-scanner-location");M&&(M.disabled=!f,M.className=f?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},R=(f=g)=>{document.querySelectorAll(".scanner-location-choice").forEach(M=>{const V=M.dataset.location===f;M.className=`scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] ${V?"border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm":"border-gray-200 bg-white text-gray-700 hover:bg-gray-50"}`;const ae=M.querySelector(".scanner-location-check");ae&&(ae.className=`scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold ${V?"border-emerald-500 bg-emerald-600 text-white":"border-gray-200 bg-white text-transparent"}`)})},Y=(f,{toast:M=!1}={})=>{S.some(V=>V.id===f)&&(g=f,localStorage.setItem("prayer_scan_active_location",g),O&&(O.value=g),R(),M&&U("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};O==null||O.addEventListener("change",f=>{Y(f.target.value,{toast:!0})}),document.querySelectorAll(".scanner-location-choice").forEach(f=>{f.addEventListener("click",()=>{ne=f.dataset.location||"",Y(ne),R(ne),v(!!ne)})}),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{de("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{de("usor")}));const J=()=>{$||($=!0,z(),me(),r==="camera"?ce():he())},P=()=>{const f=document.getElementById("scanner-location-modal");if(!f){J();return}ne="",R(""),v(!1),f.classList.remove("hidden"),f.classList.add("flex")};(a=document.getElementById("btn-confirm-scanner-location"))==null||a.addEventListener("click",()=>{var f;if(!ne){U("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}localStorage.setItem("prayer_scan_active_location",g),(f=document.getElementById("scanner-location-modal"))==null||f.remove(),J()}),z();const se=document.getElementById("scanner-amanah-modal");se?(d=document.getElementById("btn-ack-scanner-amanah"))==null||d.addEventListener("click",()=>{se.remove(),P()}):P()}function le(n){n!==r&&(r=n,localStorage.setItem("prayer_scan_input_mode",n),n==="camera"?(Ee(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),ce()):(pe(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),he()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function G(n){if(n===u)return;u=n,localStorage.setItem("prayer_scan_device_mode",n);const x=document.getElementById("dual-monitor-link-area");n==="dual"?x.classList.remove("hidden"):x.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function de(n){if(n===I)return;I=n,localStorage.setItem("prayer_scan_record_status",n);const x=document.getElementById("opt-status-pray"),C=document.getElementById("opt-status-usor");x&&C&&(x.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,C.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),U(`เปลี่ยนโหมดบันทึกเป็น: ${n==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function me(){if(m)return;const n=document.getElementById("scanner-countdown"),x=document.getElementById("scanner-countdown-panel"),C=document.getElementById("scanner-time-warning-border");if(!n||!x||!C)return;const E=()=>{const Q=Ms(s,i);n.textContent=Ts(Q);const p=Q<=Is;x.classList.toggle("bg-red-50",p),x.classList.toggle("border-red-200",p),x.classList.toggle("text-red-700",p),x.classList.toggle("bg-emerald-50",!p),x.classList.toggle("border-emerald-100",!p),x.classList.toggle("text-emerald-800",!p),C.classList.toggle("hidden",!p),Q<=0&&(pe(),Ee())};E(),window._activePrayerScannerState.countdownInterval=setInterval(E,1e3)}async function ce(){try{const n=await It(),x=new n("camera-reader");window._activePrayerScannerState.html5Qrcode=x;let C=null,E=0;const Q={fps:25,aspectRatio:1};await x.start({facingMode:"environment"},Q,p=>{p===C&&Date.now()-E<1800||(C=p,E=Date.now(),we(p))},()=>{})}catch(n){console.error("Camera open failed:",n),U("ไม่สามารถเปิดใช้งานกล้องได้: "+(n.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function pe(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function he(){const n=document.getElementById("scanner-gun-input");if(!n)return;n.focus();const x=setInterval(()=>{const C=document.getElementById("scanner-manual-code-input");document.activeElement!==n&&document.activeElement!==C&&document.getElementById("scanner-gun-input")&&n.focus()},1e3);window._activePrayerScannerState.focusInterval=x,n.addEventListener("keydown",C=>{if(C.key==="Enter"){C.preventDefault();const E=n.value.trim();n.value="",E&&we(E)}})}function Ee(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}async function we(n,x={}){if(console.log("[Scanner] Raw scanned text:",n),!n)return;const C=x.inputMethod==="manual"?"manual":"qr";if(!m&&!Xe(s,i)){ve("error"),ue(null,n,`ไม่อยู่ในช่วงเวลาบันทึกกิจกรรมละหมาด (${T.startLabel} - ${T.endLabel} น.)`);return}let E=String(n).trim(),Q=!1;if(E.startsWith("SQ:")){const M=E.split(":");if(M.length===3){const[,V,ae]=M,H=parseInt(ae,10),F=Math.floor(Date.now()/1e3),oe=F-H,h=parseInt(s.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${V}, QR Time: ${H}, Now: ${F}, Diff: ${oe}s, Allowed Expiry: ${h}s`),(isNaN(H)||oe>h||oe<-h)&&(Q=!0),E=V.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",M.length),ve("error"),ue(null,n,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const p=o.find(M=>String(M.student_code).trim()===E);if(console.log("[Scanner] Lookup result for code:",E,p?p.full_name:"not found"),Q){console.warn("[Scanner] QR Code has expired");const M=parseInt(s.studentQrExpirySeconds||"60",10);ve("error",p==null?void 0:p.gender),ue(p,E,`QR Code นี้หมดอายุแล้ว (เกิน ${M} วินาที)`);return}if(!p){ve("error"),ue(null,E,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const w=Ss(p,g);if(w){ve("error",p.gender),ue(p,E,w);return}const D=je(new Date),W=ct(t.main_room),O=ct(p.main_room),ne=!!W&&!!O&&W===O;if(!m&&ne&&qs(p.gender,s)){ve("error",p.gender),ue(p,E,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const v=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(v.some(M=>M.student_id===p.id&&M.check_date===D)){ve("duplicate",p.gender),ue(p,E,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(p.id)){ve("duplicate",p.gender),ue(p,E,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if(C==="manual"){const M=parseInt(s.prayerManualEntryMonthlyLimit??"2",10),V=Number.isFinite(M)?Math.max(0,M):2;if(V===0){ve("error",p.gender),ue(p,E,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const ae=v.filter(H=>H.student_id!==p.id||H.input_method!=="manual"||!H.check_date?!1:String(H.check_date).slice(0,7)===D.slice(0,7)).length;try{if(await Pt(p.id,D)+ae>=V){ve("error",p.gender),ue(p,E,`ใช้สิทธิ์กรอกรหัสครบ ${V} ครั้งในเดือนนี้แล้ว`);return}}catch(H){console.warn("Manual prayer count check failed:",H),ve("error",p.gender),ue(p,E,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}const Y=et(D,s);let J=I,P="";J==="usor"&&p.gender==="ชาย"&&(J="pray",P=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const se=t.teacher_code?`${t.full_name} (ครู)`:`${t.full_name} (รหัส ${t.student_code||"—"})`,a={student_id:p.id,main_room:p.main_room,check_date:D,status:J,week_number:Y,location:g,full_name:p.full_name,student_code:p.student_code,scanned_by:se,input_method:C,scanner_code:t.teacher_code||t.student_code||null,scanner_name:t.full_name||null,scanner_room:t.main_room||null,scanner_gender:t.gender||null,same_room_flag:ne};v.push(a),localStorage.setItem("prayer_scan_queue",JSON.stringify(v));let d=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");d=d.filter(M=>M.check_date===D),d.some(M=>M.student_id===p.id)||(d.unshift({student_id:p.id,full_name:p.full_name,student_code:p.student_code,main_room:p.main_room,check_date:D,status:J,input_method:C,same_room_flag:ne}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(d))),window._syncedStudentIdsToday.add(p.id),ve("success",p.gender),Z(),ue(p,E,`บันทึกสำเร็จลงเครื่องแล้ว${C==="manual"?" (กรอกรหัส)":""}${P}`,!0,J),z(),te()}function ue(n,x,C,E=!1,Q="pray"){const p=document.getElementById("scanner-feedback-container");if(p){if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),E&&n){const w=Q==="usor",D=n.image_url?`<img src="${n.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${w?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${n.full_name.charAt(0)}</div>`,W=w?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';p.innerHTML=`
        <div class="bg-white/95 border ${w?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${D}
          <div class="flex-1 min-w-0">
            ${W}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${n.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${n.student_code} · ห้อง ${ke(n.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${C}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${n.id}" data-name="${n.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=p.innerHTML,_e(p)}else{const w=n?n.full_name:"ไม่พบข้อมูล",D=n?`รหัส ${n.student_code} · ห้อง ${ke(n.main_room)}`:`สแกนพบ: ${x}`;p.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${w}</h4>
            <p class="text-xs text-gray-500 truncate">${D}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${C}</p>
          </div>
        </div>`,p.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(p.innerHTML=window._lastSuccessFeedbackHTML,_e(p)):(p.innerHTML="",p.classList.add("hidden"))},3500);return}p.classList.remove("hidden")}}function _e(n){const x=n.querySelector("#btn-undo-scan");x&&x.addEventListener("click",()=>{const C=parseInt(x.dataset.sid,10),E=x.dataset.name;y(C,E)})}async function y(n,x){const C=je(new Date);let E=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");E=E.filter(w=>!(w.student_id===n&&w.check_date===C)),localStorage.setItem("prayer_scan_queue",JSON.stringify(E));let Q=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");Q=Q.filter(w=>!(w.student_id===n&&w.check_date===C)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(Q)),window._syncedStudentIdsToday.delete(n),window._lastSuccessFeedbackHTML="";const p=document.getElementById("scanner-feedback-container");p&&(p.innerHTML="",p.classList.add("hidden")),z(),U(`กำลังยกเลิกรายการของ ${x}...`,"info");try{const{error:w}=await Se.from("prayer_records").delete().eq("student_id",n).eq("check_date",C).is("teacher_id",null);if(w)throw w;U(`ยกเลิกบันทึกของ ${x} สำเร็จ ✕`,"success")}catch(w){console.warn("Failed to delete from server (offline?):",w),U("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function Z(){const n=document.getElementById("scanner-flash");n&&(n.classList.remove("hidden","opacity-0"),n.classList.add("opacity-40"),setTimeout(()=>{n.classList.remove("opacity-40"),n.classList.add("opacity-0"),setTimeout(()=>n.classList.add("hidden"),150)},120))}function z(n=!1){const x=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let C=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const E=je(new Date);C=C.filter(O=>O.check_date===E);const Q=document.getElementById("scan-count-badge");Q&&(Q.textContent=`${C.length} คน`);const p=document.getElementById("sync-indicator"),w=document.getElementById("sync-title"),D=document.getElementById("sync-desc");if(!p||!w||!D)return;n?(p.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",w.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",D.textContent=`กำลังส่งข้อมูล ${x.length} คนขึ้นเซิร์ฟเวอร์`):x.length>0?(p.className="w-2.5 h-2.5 rounded-full bg-amber-500",w.textContent=`ค้างส่ง ${x.length} รายการ (ออฟไลน์)`,D.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(p.className="w-2.5 h-2.5 rounded-full bg-emerald-500",w.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",D.textContent="พร้อมบันทึกประวัติละหมาด");const W=document.getElementById("scan-list");W&&(C.length===0?W.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(W.innerHTML=C.map((O,ne)=>{const v=x.some(se=>se.student_id===O.student_id),R=O.status==="usor",Y=O.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",J=O.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",P=v?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':R?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${C.length-ne}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${O.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${O.student_code} · ห้อง ${ke(O.main_room)}</p>
              </div>
              ${Y}
              ${J}
              ${P}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${O.student_id}" data-name="${O.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),W.querySelectorAll(".btn-cancel-scan-row").forEach(O=>{O.addEventListener("click",()=>{const ne=parseInt(O.dataset.sid,10),v=O.dataset.name||"นักเรียน";y(ne,v)})})))}async function te(){if(j)return;const n=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(n.length){j=!0,z(!0);try{const x=await gt(n);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),x!=null&&x.skippedCount?U(`ซิงก์สำเร็จ (ข้าม ${x.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):U("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(x){console.warn("Sync failed, offline backup kept:",x)}finally{j=!1,z()}}}const c=setInterval(()=>{te()},8e3);window._activePrayerScannerState.syncInterval=c,re()}async function ga(e){if(!(e!=null&&e.can_scan_prayer)){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let t={},s=je(new Date),o=[];const l=r=>{if(!r)return"—";const u=new Date(r);return`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`},m=(r,u)=>{const S=new Date(r+"T00:00:00");return S.setDate(S.getDate()+u),je(S)};async function i(){try{o=await rs(e.student_code,s)}catch(u){o=[],U("โหลดข้อมูลไม่สำเร็จ: "+ye(u),"error")}const r=document.getElementById("sh-search-input");T((r==null?void 0:r.value.trim())??"")}function T(r=""){var g,I;const u=document.getElementById("sh-list"),S=document.getElementById("sh-count");if(!u)return;S&&(S.textContent=`${o.length} คน`);const L=r?o.filter(j=>{var $;return String((($=j.students)==null?void 0:$.student_code)??"").includes(r)}):o;if(r&&!L.length){u.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${ee(r)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(g=document.getElementById("sh-resave-btn"))==null||g.addEventListener("click",()=>N(r)),(I=document.getElementById("sh-report-btn"))==null||I.addEventListener("click",()=>A(r));return}if(!L.length){u.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}u.innerHTML=L.map(j=>{const $=j.students??{},X=Ae[j.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:j.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${$.image_url?`<img src="${$.image_url}" class="w-full h-full object-cover"/>`:ee(($.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${ee($.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${ee($.student_code??"—")} · ${ee($.religion_room??$.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${X.cls}" title="${ee(X.title)}">${X.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${l(j.created_at)}</p>
        </div>
      </div>`}).join("")}async function B(){window._activePrayerScannerState={html5Qrcode:null};try{const r=await It(),u=new r("sh-camera-reader");window._activePrayerScannerState.html5Qrcode=u,await u.start({facingMode:"environment"},{fps:25,aspectRatio:1},S=>{var I;let L=String(S).trim();L.startsWith("SQ:")&&(L=L.split(":")[1]??L),b(),(I=document.getElementById("sh-camera-wrap"))==null||I.classList.add("hidden");const g=document.getElementById("sh-search-input");g&&(g.value=L),T(L)},()=>{})}catch(r){U("ไม่สามารถเปิดกล้องได้: "+(r.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function b(){var r;(r=window._activePrayerScannerState)!=null&&r.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function N(r){var I;let u=null;try{u=await ot(r)}catch{}if(!u){U("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}(I=document.getElementById("sh-resave-modal"))==null||I.remove();const S=document.createElement("div");S.id="sh-resave-modal",S.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const L=Object.entries(Ae);S.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${ee(u.full_name)} (รหัส ${ee(u.student_code)})<br/>${ee(u.religion_room??u.main_room??"—")} · วันที่ ${s}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${L.map(([j,$],X)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${X===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${j}">${$.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(S);let g=L[0][0];S.querySelectorAll(".sh-status-btn").forEach(j=>{j.addEventListener("click",()=>{g=j.dataset.status,S.querySelectorAll(".sh-status-btn").forEach($=>{$.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),$.classList.add("border-gray-200","text-gray-500")}),j.classList.remove("border-gray-200","text-gray-500"),j.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),S.querySelector("#sh-resave-cancel").addEventListener("click",()=>S.remove()),S.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const j=S.querySelector("#sh-resave-confirm");j.disabled=!0,j.textContent="กำลังบันทึก...";try{const $={student_id:u.id,main_room:u.main_room,check_date:s,status:g,week_number:et(s,t),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await gt([$]),U("บันทึกสำเร็จ ✅","success"),S.remove(),await i()}catch($){U("บันทึกไม่สำเร็จ: "+ye($),"error"),j.disabled=!1,j.textContent="บันทึก"}})}async function A(r){let u=null;try{u=await ot(r)}catch{}const L=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${u?`${u.full_name} (รหัส ${u.student_code}) ห้องศาสนา ${u.religion_room??u.main_room??"—"}`:`รหัสนักเรียน ${r} (ไม่พบชื่อในระบบ)`} วันที่ ${s} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(L):U("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function q(){t=await Be().catch(()=>({})),ie(`
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
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async r=>{s=r.target.value,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{s=m(s,-1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{s=m(s,1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-search-input").addEventListener("input",r=>{T(r.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const r=document.getElementById("sh-camera-wrap");r.classList.toggle("hidden"),r.classList.contains("hidden")?b():B()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var r;b(),(r=document.getElementById("sh-camera-wrap"))==null||r.classList.add("hidden")}),await i()}q()}export{xa as completeGoogleEmailLink,pa as openEmailLinkPrompt,ma as renderExamRequestForm,Ds as renderStudentAllAssignments,ca as renderStudentMyScores,ia as renderStudentOverview,ga as renderStudentPrayerScanHistory,ba as renderStudentPrayerScanner,ua as renderStudentProfile,As as renderStudentRequests,Ns as renderStudentSubjectDetail,Ze as renderStudentSubjects};
