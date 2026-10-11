const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-C-roKrdU.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/views-ByctfHX1.js","assets/ui-CdgrLWzs.js","assets/leave-monitor.js_v_10.18-DpEwUS_s.js","assets/leave-time-CrS9gT63.js","assets/academic-term-switcher-JTnW63gE.js","assets/sync-GIjLHUjs.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-D0Lb_BpE.js","assets/teacher-views-classes-DVprDxA6.js","assets/browser-JP79f-a9.js","assets/regrade-api-CbX4L_dw.js","assets/pp5-doc-DT_3IQge.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-grades-CEAI6LzF.js","assets/score-qr-scanner-VIO-qDxr.js","assets/teacher-views-attendance-Bf7yzdiF.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-DkRj3X4p.js","assets/workload-scheduler-C9WpzjbH.js","assets/import-C5rURn5v.js","assets/theme-qDnPEUQn.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azizgames-modal-CZNvwg6f.js","assets/sports-awards-admin-6oCPrlSb.js"])))=>i.map(i=>d[i]);
import{a as Ft,_ as $t,g as ke}from"./ui-CdgrLWzs.js";import{getSystemConfig as Oe,getClassScoreRounding as Gt,submitQrReissueRequest as Qt,notifyQrReissueManagers as Vt,getAcademicTerms as St,notifySubjectGroupAdmins as Wt}from"./api-C-roKrdU.js";import{i as Xe,g as pt,c as Yt,a as Ut,d as Jt,f as Ze,r as Kt}from"./score-display-CQ4dUIPx.js";import{c as kt,d as Xt,s as Et,e as Zt,f as Je,h as es,i as ts,j as ss,k as as,l as rs,m as ns,n as os,b as lt,o as ls,p as ds,q as Lt,r as is,u as jt,t as Ct,v as cs,w as ms,x as ps,y as It,z as us,A as xs,B as bs,C as gs,D as fs,E as ys,F as vs,G as hs,H as ws,I as ut}from"./student-api-Pom1H7Xo.js";import{g as _s}from"./theme-qDnPEUQn.js";import{i as qt}from"./skill-groups-BY1NTbf4.js";import{_dateInputValue as Mt,_currentWeek as $s,applyReadingGradesFromConfig as Ss,_readingGrade as ks,renderIconTile as De}from"./teacher-views-utils-D0Lb_BpE.js";import{g as Tt,a as Bt,b as Dt,r as Nt}from"./quiz-api-BIDUVPR5.js";import{f as Es}from"./leave-time-CrS9gT63.js";import{uploadAssignmentFile as Ls}from"./storage-CuUjCgvI.js";import{A as js}from"./version.js_v_10.22-A-Q3FjCD.js";import{s as qe}from"./supabase-BV-W2lsh.js";import{b as Cs}from"./browser-JP79f-a9.js";import{g as Is}from"./regrade-api-CbX4L_dw.js";import{f as qs,o as xt}from"./certificate-engine-CN0kp0dY.js";import{o as Ms,c as Ts,a as bt,r as Bs}from"./academic-term-switcher-JTnW63gE.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./print-overlay-BVfxEd6n.js";const et=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function At(e){var j;(j=document.getElementById("my-certificates-modal"))==null||j.remove();const t=document.body.style.overflow;document.body.style.overflow="hidden";const a=document.createElement("div");a.id="my-certificates-modal",a.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",a.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const n=()=>{document.removeEventListener("keydown",c),document.body.style.overflow=t,a.remove()},c=o=>{o.key==="Escape"&&n()};document.addEventListener("keydown",c),document.body.appendChild(a),a.querySelector("[data-mycert-close]").addEventListener("click",n);const i=a.querySelector("#my-certificates-body"),p=[];(await qs(e.id).catch(()=>[])).forEach(o=>p.push({key:`central-${o.id}`,emoji:"🏅",title:o.title||"เกียรติบัตร",sub:new Date(o.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>xt({layout:o.layout_snapshot,variables:{name:e.full_name,date:new Date(o.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:o.certificate_no,...o.variables},docTitle:o.title})}));const q=await kt(e.main_room).catch(()=>null),g=q&&Number(q.head_student_id)===Number(e.id),A=q&&Number(q.vice_head_student_id)===Number(e.id),D=g?q==null?void 0:q.head_cert_url:A?q==null?void 0:q.vice_head_cert_url:null;D&&p.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${g?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(D,"_blank")});try{const{data:o}=await qe.from("events").select("id, status").order("academic_year",{ascending:!1}).order("created_at",{ascending:!1}).limit(1).maybeSingle();if(o){const[x,w]=await Promise.all([qe.rpc("get_my_sports_eligibility",{p_event:o.id}).then(b=>b.error?null:b.data).catch(()=>null),qe.rpc("get_my_sports_certificates",{p_event:o.id}).then(b=>b.error?[]:b.data??[]).catch(()=>[])]);(Array.isArray(w)?w:[]).forEach(b=>{const $=b.certificate_kind==="outstanding";p.push({key:`sports-${b.certificate_kind||"medal"}-${b.id}`,emoji:$?"🏆":"🏅",title:b.title||`เกียรติบัตร${b.medal_label?` · ${b.medal_label}`:""}`,sub:$?`นักกีฬาดีเด่น · ${b.sport_name||"กีฬาสี"}`:`${b.sport_name||"รายการแข่งขัน"} · สี${b.color||""}`,onOpen:()=>xt({layout:b.layout,variables:{name:e.full_name,date:new Date(b.awarded_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"}),no:b.certificate_no,...b.variables||{}},docTitle:b.title},Ft)})}),x!=null&&x.eligible&&(x!=null&&x.certificate_url)&&p.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(x.certificate_url,"_blank")})}}catch{}p.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>Ms(e.student_code)}),i.innerHTML=p.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${p.map(o=>`
        <div data-key="${et(o.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${o.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${o.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${et(o.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${et(o.sub||"")}</p>
          ${o.onOpen?'<p class="text-[10px] text-indigo-600 mt-2 font-bold">กดเพื่อเปิด / บันทึก PDF</p>':""}
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',p.forEach(o=>{var x;o.onOpen&&((x=i.querySelector(`[data-key="${CSS.escape(o.key)}"]`))==null||x.addEventListener("click",o.onOpen))})}const Me=e=>(e??"").replace(/\/\d+/,"").trim(),Fe=e=>!e.mySubmission||e.mySubmission.status==="rejected",W=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ie(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function K(e,t="info"){const a={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},n=document.createElement("div");n.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${a[t]??a.info} transition-all`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2800)}const Ds={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},Ns={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},He={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Ue=["อา","จ","อ","พ","พฤ","ศ","ส"],Ge={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},tt=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function As(e){if(e!=null&&e.teacher_code)return tt;const t=String((e==null?void 0:e.gender)||"").trim(),a=tt.filter(n=>n.genders.includes(t));return a.length?a:tt}function Ps(e){const t=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!t)return{grade:null,isVoc:!1};const a=t.match(/^ม\.?([1-6])/);return{grade:a?parseInt(a[1],10):null,isVoc:t.startsWith("ปวช")}}function Rs(e,t){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:a,isVoc:n}=Ps(e),c=t==="musolla_male",i=t==="masjid_kuwait";return!c&&!i?"":i&&!(a===6||n)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":c&&!(a>=1&&a<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function gt(e){const a=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(a.slice(0,2),16),g:parseInt(a.slice(2,4),16),b:parseInt(a.slice(4,6),16)}}function Hs({r:e,g:t,b:a}){return"#"+[e,t,a].map(n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0")).join("")}function Qe(e,t,a){const n=gt(e),c=gt(t);return Hs({r:n.r+(c.r-n.r)*a,g:n.g+(c.g-n.g)*a,b:n.b+(c.b-n.b)*a})}function Re(e){if(!e)return"—";const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()+543}`}function st(e){if(!e)return"";const t=new Date(e),a=new Date;t.setHours(0,0,0,0),a.setHours(0,0,0,0);const n=Math.round((t-a)/864e5);return n>1?`อีก ${n} วัน`:n===1?"พรุ่งนี้":n===0?"วันนี้":n===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(n)} วัน`}function Os(e){var c,i,p;const t=((c=e.master_subjects)==null?void 0:c.subject_group)??"",a=e.skill_group??"";return(((p=(i=e.master_subjects)==null?void 0:i.teachers)==null?void 0:p.category)??"")==="ศาสนา"||t==="AGM"||t==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:t==="ACDMVOC"||a==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:a==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:qt(a)?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:a==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function zs(e,t={}){var q,g,A;const a=((q=e.master_subjects)==null?void 0:q.subject_group)??"",n=e.skill_group??"",c=((A=(g=e.master_subjects)==null?void 0:g.teachers)==null?void 0:A.category)??"",i=c==="ศาสนา"||a==="AGM"||a==="AGMVOC"?t.teacherReligionColor||"#b45309":a==="ACDMVOC"||n==="สามัญปวช"?t.teacherVocColor||"#7c3aed":n==="ภาษา"?t.teacherLanguageColor||"#2563eb":qt(n)?t.teacherLifeColor||"#059669":n==="วิชาการ"?t.teacherAcademicColor||"#ea580c":t.teacherDefaultColor||"#059669",p=c==="ศาสนา"||a==="AGM"||a==="AGMVOC"?a==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":a==="ACDMVOC"||n==="สามัญปวช"?"กลุ่มสามัญ ปวช":n?`กลุ่มทักษะ: ${n}`:"กลุ่มวิชาสามัญ",S=p.replace("กลุ่มทักษะ: ","");return{color:i,label:p,short:S,bg:Qe(i,"#ffffff",.9),badgeBg:Qe(i,"#ffffff",.86),border:Qe(i,"#ffffff",.35),text:Qe(i,"#000000",.35)}}function at(e=0){const t=new Date,a=t.getDay(),n=new Date(t);n.setDate(t.getDate()-(a===0?6:a-1)),n.setDate(n.getDate()+e*7);const c=new Date(n);c.setDate(n.getDate()-1);const i={};i[0]=c;for(let p=1;p<=7;p++){const S=new Date(n);S.setDate(n.getDate()+p-1),i[p]=S}return i}function Ve(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const Pt="12:20",Fs="12:50",Gs="13:05",Qs=60;function Ye(e,t){const n=String(e||t||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!n)return Ye(t,Pt);const c=Math.max(0,Math.min(23,parseInt(n[1],10))),i=Math.max(0,Math.min(59,parseInt(n[2],10)));return c*60+i}function ft(e){const t=(e%1440+1440)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Pe(e){return String(e||"").split(/[\s,]+/).map(t=>t.trim()).filter(Boolean)}function yt(e,t=!1){return e==null||e===""?t:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function Vs(e,t={}){return String(e||"").trim()==="หญิง"?yt(t.prayerSameRoomGuardFemaleEnabled,!1):yt(t.prayerSameRoomGuardMaleEnabled,!0)}function vt(e){return String(e||"").replace(/\s+/g,"").trim()}function Rt(e,t={}){return e!=null&&e.student_code?Pe(t.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function Ht(e,t={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const a=String(e.student_code).trim(),n=Pe(t.prayerScannerSun),c=Pe(t.prayerScannerMon),i=Pe(t.prayerScannerTue),p=Pe(t.prayerScannerWed),S=Pe(t.prayerScannerThu);if(!(n.includes(a)||c.includes(a)||i.includes(a)||p.includes(a)||S.includes(a)))return!0;const g=new Date().getDay();return!!(g===0&&n.includes(a)||g===1&&c.includes(a)||g===2&&i.includes(a)||g===3&&p.includes(a)||g===4&&S.includes(a))}function dt(e={},t=!1){const a=Ye(e.prayerScanStartTime,Pt),n=Ye(e.prayerScanEndTime,Fs),c=Ye(e.prayerScanExtendedEndTime,Gs),i=t?c:n;return{start:a,end:i,startLabel:ft(a),endLabel:ft(i)}}function rt(e={},t=!1){const a=new Date,n=a.getHours(),c=a.getMinutes(),i=n*60+c,{start:p,end:S}=dt(e,t);return S<p?i>=p||i<=S:i>=p&&i<=S}function Ws(e={},t=!1){const a=new Date,n=a.getHours()*3600+a.getMinutes()*60+a.getSeconds(),{start:c,end:i}=dt(e,t),p=c*60;let S=i*60,q=n;return i<c&&q<p&&(q+=86400),i<c&&(S+=86400),Math.max(0,S-q)}function Ys(e){const t=Math.floor(e/60),a=e%60;return`${String(t).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Be(e){var p,S;let t=e.getFullYear();const a=((p=window._pp5SystemCfg)==null?void 0:p.academicYear)||((S=window._pp5SystemCfg)==null?void 0:S.academic_year)||2569,n=parseInt(a)-543;(t>2030||t<2024)&&(t=n);const c=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${c}-${i}`}function Ot(e,t=[]){const a=t.map(p=>p.check_date).filter(Boolean).sort()[0],n=e||a||new Date().toISOString().slice(0,10),c=new Date(n);c.setHours(0,0,0,0);const i=c.getDay();return i&&c.setDate(c.getDate()-i),Array.from({length:20},(p,S)=>{const q=Array.from({length:5},(g,A)=>{const D=new Date(c);return D.setDate(c.getDate()+S*7+A),{date:D,ds:Be(D),day:Ue[A]}});return{n:S+1,days:q}})}function ht(e,t){const a=Object.fromEntries((t??[]).map(n=>[n.column_id,n.score]));return(e??[]).map(n=>({...n,score:a[n.id]??null}))}async function Ea(e){var oe,xe,h,d,_,E,N;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,a,n,c,i,p,S,q,g]=await Promise.all([Je(e.id).catch(()=>[]),lt(e.id).catch(()=>[]),bs(e.id).catch(()=>({linked:[],unlinked:[]})),gs(e.id).catch(()=>[]),It(e.id).catch(l=>(console.error("[student GPA] โหลดเกรดเฉลี่ยไม่สำเร็จ",l),{samai:[],sasana:[],error:ke(l)})),Oe().catch(()=>({})),kt(e.main_room).catch(()=>null),Ct(e.id).catch(()=>[]),(oe=window._pp5StudentAcademicTerms)!=null&&oe.length?Promise.resolve(window._pp5StudentAcademicTerms):St().catch(()=>[])]),A=Ts(g,p),D=bt({academic_year:Number(p.academicYear??p.academic_year??2568),semester:Number(p.semester??1)});let j=D;try{const l=localStorage.getItem(`pp5_student_score_term_${e==null?void 0:e.id}`);A.some(r=>bt(r)===l)&&(j=l)}catch{}const o=q.filter(Fe).sort((l,r)=>(l.due_at?new Date(l.due_at).getTime():1/0)-(r.due_at?new Date(r.due_at).getTime():1/0)),x=a.filter(l=>l.status==="pending"),w=a.slice(0,3),M=Rt(e,p),b=await Promise.all(t.map(l=>Tt(l.id,e.id).catch(()=>[]))),$=t.flatMap((l,r)=>(b[r]??[]).map(u=>({...u,_class:l}))),k=await Bt($.map(l=>l.id),e.id).catch(()=>new Set),C=$.filter(l=>{if(l.status!=="started"||k.has(l.id))return!1;const r=l.attempts.filter(L=>L.status==="submitted"||L.status==="terminated_violation").length;return!(l.attempts.length&&l.attempts[l.attempts.length-1].status==="terminated_violation")&&r<l.max_attempts}),U=S&&Number(S.head_student_id)===Number(e.id),ne=S&&Number(S.vice_head_student_id)===Number(e.id),de=(p.council_test_student_codes||"").split(/[\s,]+/).map(l=>l.trim()).filter(Boolean),me=p.council_visible_to_all!=="false"||de.includes(e.student_code);let fe=!1;try{const{data:l,error:r}=await qe.rpc("get_terangganu_access");r||(fe=(l==null?void 0:l.visible)===!0&&(l==null?void 0:l.student_allowed)===!0)}catch{fe=!1}let ye=!1,ve=0;try{const[l,r]=await Promise.all([Is(),Promise.resolve(qe.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);ye=((xe=l.visibility)==null?void 0:xe.student_menu)===!0,ve=Number(r==null?void 0:r.count)||0}catch{ye=!1,ve=0}let he=!0;try{const{data:l}=await qe.from("settings").select("value").eq("key","sports_visibility").maybeSingle();l!=null&&l.value&&(he=l.value.enabled!==!1&&l.value.student_menu!==!1)}catch{he=!0}let $e=!1;try{const{data:l}=await qe.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();$e=!!l}catch{$e=!1}let Ee=!1;try{const{data:l}=await qe.from("attendance_delegates").select("id, classes!inner(attendance_delegate_enabled)").eq("student_id",e.id).eq("classes.attendance_delegate_enabled",!0).limit(1);Ee=!!(l!=null&&l.length)}catch{Ee=!1}const Le=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">ข้อมูลการเรียน งาน และกิจกรรมในหน้าภาพรวมเป็นภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="student-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Bs(A,j,D)}
        </select>
      </label>
    </div>
  </section>`;ie(`
    ${Le}
    <!-- Profile card -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 mb-4 flex items-center gap-4 sm:gap-6">
      <div class="w-14 h-20 rounded-t-2xl rounded-b-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover object-top"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <p class="font-bold text-gray-800 text-base truncate">${e.full_name}</p>
          ${U?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
              👑 หัวหน้าห้อง
            </span>
          `:""}
          ${ne?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              🥈 รองหัวหน้าห้อง
            </span>
          `:""}
        </div>
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${e.student_code} · ${Me(e.main_room??"—")}</p>
      </div>
    </div>

    <!-- ระบบอื่น ๆ — กริดไอคอนแอปเลื่อนแนวนอนได้ถ้ามีมากกว่าที่จอแสดงพอดี (sportsVisible/councilVisible/
         terangganuVisible/regradeVisible/can_scan_prayer ล้วนเปิด-ปิดแยกอิสระ รวมกันอาจเกิน 4 ช่องได้)
         — เกียรติบัตรแสดงเสมอ ส่วนที่เหลือ conditional เหมือนเดิมทุกประการ แค่เปลี่ยนรูปแบบจากแบนเนอร์
         เต็มแถว/แถบเมนูล่างถาวร (กีฬาสี) มาเป็นไอคอน -->
    <div class="mb-4">
      <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</p>
      ${[he,$e,me,fe,ye,e.can_scan_prayer,Ee].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${De({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},p.iconTileStyle)}
        ${he?De({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},p.iconTileStyle):""}
        ${$e?De({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},p.iconTileStyle):""}
        ${me?De({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},p.iconTileStyle):""}
        ${fe?De({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},p.iconTileStyle):""}
        ${ye?De({id:"student-regrade-tile",emoji:"📋",label:"แก้ค้างเก่า",from:"#FBD0D6",to:"#E0616F",badge:ve,onclick:"window.location.href='regrade.html'"},p.iconTileStyle):""}
        ${e.can_scan_prayer?De({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},p.iconTileStyle):""}
        ${Ee?De({id:"student-attendance-delegate-tile",emoji:"✅",label:"เช็คชื่อ<br>แทนครู",from:"#CDEBD6",to:"#4CA778",onclick:"window._stuNav('attendance_delegate')"},p.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${Ht(e,p)&&rt(p,M)?`
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
    ${C.map(l=>{var u,L;const r=l.attempts.some(P=>P.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${r?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${W(l.title)} · ${W(((L=(u=l._class)==null?void 0:u.master_subjects)==null?void 0:L.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${l.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
          ${r?"ทำต่อ →":"เข้าสอบ →"}
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
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${x.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">คำร้อง<br>รอดำเนินการ</p>
      </button>
      <button type="button" onclick="window._stuNav('requests')" class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center relative active:scale-95 transition-transform">
        <span class="absolute top-1.5 right-2 text-gray-300 text-xs">›</span>
        <p class="text-xl sm:text-3xl font-bold text-blue-600">${a.length}</p>
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
      ${(()=>{const l=`stu_ann_seen_${e.id}`,r=new Set(JSON.parse(localStorage.getItem(l)??"[]")),u=c.filter(L=>!r.has(L.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${c.length} รายการ</p>
          ${u>0?`<span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">${u}</span>`:""}
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
    ${(()=>{const l=o.length>0,r=o[0],u=r!=null&&r.due_at?new Date(r.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${l?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${l?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${l?`ค้างอยู่ ${o.length} ชิ้น · ใกล้สุด: ${W(r.title)}${u?` (${u})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const r=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],u=new Date,L=u.getHours()*3600+u.getMinutes()*60+u.getSeconds(),P=V=>{if(!V)return null;const[Z,z]=V.split(":").map(Number);return Z*3600+z*60},B=n.linked.map(({cls:V,sched:Z,period:z})=>{var s,m;const ce=V==null?void 0:V.master_subjects,we=P(z==null?void 0:z.start_time),ee=P(z==null?void 0:z.end_time),f=we!=null&&ee!=null&&L>=we&&L<ee,I=ee!=null&&L>=ee,F=f?"🟢":I?"✅":"⬜",G=z?`${(s=z.start_time)==null?void 0:s.slice(0,5)}–${(m=z.end_time)==null?void 0:m.slice(0,5)}`:`คาบ ${Z.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${F}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${Z.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(ce==null?void 0:ce.subject_name)??Z.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${G} · ${(V==null?void 0:V.class_name)??""}</p>
          </div>
          ${f?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),O=c.filter(V=>V.ann_type==="deadline"&&V.deadline_at&&new Date(V.deadline_at)>u).sort((V,Z)=>new Date(V.deadline_at)-new Date(Z.deadline_at)).slice(0,5),ae=V=>{const Z=new Date(V)-u,z=Math.floor(Z/6e4);if(z<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${z} น.</span>`;const ce=Math.floor(z/60);return ce<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${ce} ชม. ${z%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(ce/24)} วัน</span>`},le=O.map(V=>{var z,ce;const Z=(z=V.cls)==null?void 0:z.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${V.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(Z==null?void 0:Z.subject_name)??""} · ${((ce=V.cls)==null?void 0:ce.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${ae(V.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${r}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${u.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${B?`
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${B}</div>`:'<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>'}
        ${le?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${le}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${w.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${w.map(l=>{var L;const r=He[l.status]??He.pending,u=l.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${((L=u==null?void 0:u.master_subjects)==null?void 0:L.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${l.request_type} · ${Re(l.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${r.cls}">${r.label}</span>
            </div>
          </div>`}).join("")}
      </div>
    </div>`:`
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `);const pe=document.getElementById("stu-live-clock");if(pe){const l=()=>{const u=new Date;pe.textContent=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}:${String(u.getSeconds()).padStart(2,"0")}`};l();const r=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(r);return}l()},1e3)}const Se=(l,r)=>{const u=document.createElement("div");return u.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",u.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${l}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${r}</div>`,document.body.appendChild(u),u.querySelector("#stu-popup-back").addEventListener("click",()=>u.remove()),u},v=n.linked.find(({period:l})=>{if(!(l!=null&&l.start_time)||!(l!=null&&l.end_time))return!1;const r=new Date,u=r.getHours()*3600+r.getMinutes()*60+r.getSeconds(),[L,P]=l.start_time.split(":").map(Number),[B,O]=l.end_time.split(":").map(Number);return u>=L*3600+P*60&&u<B*3600+O*60});if(v){const l=(()=>{const[u,L]=v.period.end_time.split(":").map(Number);return u*3600+L*60})(),r=setInterval(()=>{const u=document.getElementById("stu-period-countdown");if(!u){clearInterval(r);return}const L=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),P=Math.max(0,l-L);if(P===0){u.textContent="หมดคาบ",clearInterval(r);return}const B=Math.floor(P/3600),O=Math.floor(P%3600/60),ae=P%60;u.textContent=`${String(B).padStart(2,"0")}:${String(O).padStart(2,"0")}:${String(ae).padStart(2,"0")}`},1e3)}const X={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},H=l=>{if(!l)return"";const r=new Date(l),L=Math.floor((r-new Date)/6e4),P=r.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if(L<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${P}</span>`;if(L<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${L} น. · ${P}</span>`;const B=Math.floor(L/60);return B<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${B} ชม. ${L%60} น. · ${P}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(B/24)} วัน · ${P}</span>`};(h=document.getElementById("btn-stu-my-certificates"))==null||h.addEventListener("click",()=>At(e)),(d=document.getElementById("btn-stu-anns"))==null||d.addEventListener("click",()=>{const l=`stu_ann_seen_${e.id}`,r=new Set(JSON.parse(localStorage.getItem(l)??"[]"));c.forEach(P=>r.add(P.id)),localStorage.setItem(l,JSON.stringify([...r]));const u=document.querySelector("#btn-stu-anns span.absolute");u&&u.remove();const L=c.length?`<div class="space-y-3">${c.map(P=>{var ae,le,V;const B=X[P.ann_type]??X.general,O=(ae=P.cls)==null?void 0:ae.master_subjects;return`<div class="rounded-2xl border ${B.border} ${B.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${P.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${B.icon} ${B.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(O==null?void 0:O.subject_name)??""} · ${((le=P.cls)==null?void 0:le.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${P.title??""}</p>
        ${P.body?`<p class="text-xs text-gray-500 mt-1">${P.body}</p>`:""}
        ${P.ann_type==="deadline"&&P.deadline_at?`<div class="mt-2">${H(P.deadline_at)}</div>`:""}
        ${P.file_url?`<a href="${P.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(V=P.attachment_urls)!=null&&V.length?`<div class="flex flex-wrap gap-1.5 mt-2">${P.attachment_urls.map(Z=>`<a href="${W(Z.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${W(Z.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';Se("📢 ประกาศของฉัน",L)}),(_=document.getElementById("btn-stu-gpa"))==null||_.addEventListener("click",()=>{const l=f=>{const I=f.filter(s=>s.grade!=null);if(!I.length)return null;const F=I.reduce((s,m)=>s+(m.credit||1),0),G=I.reduce((s,m)=>s+m.grade*(m.credit||1),0);return F>0?(G/F).toFixed(2):null},r=f=>f==null?"text-gray-400":f>=3.5?"text-emerald-600":f>=3?"text-blue-500":f>=2?"text-amber-600":"text-red-500",u=f=>f>=3.5?"ดีเยี่ยม":f>=3?"ดี":f>=2?"พอใช้":f>=1?"ผ่าน":"ไม่ผ่าน",L=f=>f.loadError?'<span class="text-[10px] font-semibold text-red-500 whitespace-nowrap">⚠️ โหลดข้อมูลไม่ครบ</span>':f.grade==null&&f.totalCols>0?`<span class="text-[10px] font-semibold text-amber-500 whitespace-nowrap" title="ครูให้คะแนนแล้ว ${f.scoredCount}/${f.totalCols} ช่อง — วิชานี้ยังไม่ถูกนับเข้าเกรดเฉลี่ยจนกว่าจะครบ">⏳ ${f.scoredCount}/${f.totalCols} · ยังไม่นับเข้า GPA</span>`:null,P=(f,I,F)=>{const s=f.filter(T=>T.grade!=null).reduce((T,R)=>T+(R.credit||1),0),m=parseFloat(I);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${F}" class="text-5xl font-extrabold ${I?r(m):"text-gray-300"} hover:opacity-70 transition">${I??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${I?r(m):"text-gray-400"}">${I?u(m):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${f.length?`
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
            ${f.map((T,R)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${R+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${T.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${T.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${T.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${T.score!=null?T.score:L(T)??"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${r(T.grade)}">${T.grade!=null?T.grade.toFixed(1):L(T)?"":"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${T.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${T.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${s}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${s}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${r(I?m:null)}">${I??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},B=(f,I,F)=>{const G=parseFloat(I);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${F}" class="text-5xl font-extrabold ${I?r(G):"text-gray-300"} hover:opacity-70 transition">${I??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${I?r(G):"text-gray-400"}">${I?u(G):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${f.length?`
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${f.map(s=>`
        <button class="gpa-pp5-btn text-left border border-gray-200 rounded-2xl p-3 hover:shadow-md transition bg-white" data-class-id="${s.classId}">
          <p class="text-[10px] text-gray-400 font-mono truncate">${s.subjectCode??""}</p>
          <p class="font-bold text-xs text-gray-800 leading-tight line-clamp-2 mt-0.5 min-h-[2rem]">${s.subjectName}</p>
          <div class="flex items-center justify-between mt-2 gap-1">
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${s.credit} นก. ${s.hasRetake?"· แก้":""}</span>
            ${L(s)??`<span class="text-lg font-extrabold ${r(s.grade)}">${s.grade!=null?s.grade.toFixed(1):"—"}</span>`}
          </div>
        </button>`).join("")}
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},O=l(i.samai),ae=l(i.sasana),le=f=>{const I=f==="samai"?i.samai:i.sasana,F=f==="samai"?O:ae;return(localStorage.getItem("studentGpaView")==="card"?"card":"table")==="card"?B(I,F,f):P(I,F,f)},Z=`
      ${i.error?`
      <div class="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700">
        <p class="font-bold">⚠️ โหลดข้อมูลเกรดเฉลี่ยได้ไม่ครบ</p>
        <p class="mt-1">${W(i.error)}</p>
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
      <div id="gpa-pop-samai">${le("samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${le("sasana")}</div>`,z=Se("🎓 เกรดเฉลี่ยของฉัน",Z),ce=()=>{z.querySelectorAll(".gpa-pp5-btn").forEach(f=>{f.addEventListener("click",()=>{var F;const I=Number(f.dataset.classId);z.remove(),(F=window._stuOpenClass)==null||F.call(window,I)})}),["samai","sasana"].forEach(f=>{const I=z.querySelector(`#gpa-val-btn-${f}`);I&&I.addEventListener("click",()=>{const G=(f==="samai"?i.samai:i.sasana).filter(te=>te.grade!=null),s=G.reduce((te,re)=>te+(re.credit||1),0),m=G.reduce((te,re)=>te+re.grade*(re.credit||1),0),T=s>0?(m/s).toFixed(2):"—",R=document.createElement("div");R.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",R.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
            <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
            <div class="text-sm text-gray-600 mb-3">
              <p class="font-mono text-base font-semibold text-purple-700">
                Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
              <p class="text-gray-700">${m.toFixed(2)} ÷ ${s}</p>
              <p class="text-purple-700 font-bold text-lg mt-1">= ${T}</p>
            </div>
            <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่ครูให้คะแนนครบทุกช่องแล้วเท่านั้น (${G.length} วิชา)</p>
            <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
          </div>`,document.body.appendChild(R),R.querySelector("#gpa-tip-close").addEventListener("click",()=>R.remove()),R.addEventListener("click",te=>{te.target===R&&R.remove()})})})},we=()=>{const f=localStorage.getItem("studentGpaView")==="card"?"card":"table";z.querySelector("#gpa-view-table").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${f==="table"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`,z.querySelector("#gpa-view-card").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${f==="card"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`};we(),ce();const ee=f=>{localStorage.setItem("studentGpaView",f==="card"?"card":"table"),z.querySelector("#gpa-pop-samai").innerHTML=le("samai"),z.querySelector("#gpa-pop-sasana").innerHTML=le("sasana"),we(),ce()};z.querySelector("#gpa-view-table").addEventListener("click",()=>ee("table")),z.querySelector("#gpa-view-card").addEventListener("click",()=>ee("card")),z.querySelectorAll(".gpa-pop-tab").forEach(f=>{f.addEventListener("click",()=>{const I=f.dataset.tab;z.querySelector("#gpa-pop-samai").classList.toggle("hidden",I!=="samai"),z.querySelector("#gpa-pop-sasana").classList.toggle("hidden",I!=="sasana"),z.querySelectorAll(".gpa-pop-tab").forEach(F=>{F.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${F.dataset.tab===I?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})})}),window._stuOpenClassFromTT=l=>{var r;document.querySelectorAll(".stu-fullpop").forEach(u=>u.remove()),window._stuFromTimetable=!0,(r=window._stuOpenClass)==null||r.call(window,l)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const se=async()=>{const l=Se("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:r,periods:u}=await fs(e.id).catch(()=>({slots:[],periods:[]})),L=l.querySelector(".flex-1.overflow-y-auto");if(!L)return;const P=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],B=["อา","จ","อ","พ","พฤ","ศ","ส"],O=[0,1,2,3,4,5,6].filter(ee=>r.some(f=>f.dow===ee)),ae=new Date().getDay();let le="day",V=O.includes(ae)?ae:O[0]??0;const Z={};r.forEach(ee=>{Z[`${ee.dow}-${ee.periodNo}`]=ee});const z=ee=>{var R,te,re,ue;const f=new Date,I=f.getHours()*3600+f.getMinutes()*60+f.getSeconds(),F={};r.filter(Q=>Q.dow===ee&&Q.span>1).forEach(Q=>{for(let Y=1;Y<Q.span;Y++)F[Q.periodNo+Y]=Q.periodNo});const G=((te=(R=u.find(Q=>Q.period_no===5))==null?void 0:R.end_time)==null?void 0:te.slice(0,5))??"",s=((ue=(re=u.find(Q=>Q.period_no===6))==null?void 0:re.start_time)==null?void 0:ue.slice(0,5))??"",m=G&&s?`${G}–${s}`:"";let T="";return u.forEach(Q=>{var ct,mt;Q.period_no===6&&u.find(Ke=>Ke.period_no===5)&&(T+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${m?`<p class="text-[10px] text-emerald-500 mt-0.5">${m}</p>`:""}
            </td></tr>`);const Y=Z[`${ee}-${Q.period_no}`],y=(Y==null?void 0:Y.span)??1,J=y>1?u.find(Ke=>Ke.period_no===Q.period_no+y-1)??Q:Q,[be,Te]=(Q.start_time??"0:0").split(":").map(Number),[Ie,_e]=(J.end_time??"0:0").split(":").map(Number),je=I>=be*3600+Te*60&&I<Ie*3600+_e*60,ge=(ct=Y==null?void 0:Y.cls)==null?void 0:ct.master_subjects,Ae=["AGM","AGMVOC"].includes((ge==null?void 0:ge.subject_group)??""),it=Y?Ae?"bg-amber-50":"bg-emerald-50":"",ze=Y?Ae?"text-amber-800":"text-emerald-800":"text-gray-300",Ne=F[Q.period_no]!=null;T+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${je?"text-emerald-600":"text-gray-500"}">คาบ ${Q.period_no}</p>
            <p class="text-[10px] text-gray-400">${((mt=Q.start_time)==null?void 0:mt.slice(0,5))??""}</p>
          </td>
          ${Ne?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${y>1?`rowspan="${y}"`:""}
              ${Y?`onclick="window._stuOpenClassFromTT(${Y.cls.id})"`:""}>
            ${Y?`
              <div class="rounded-xl ${it} border-l-4 ${Ae?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${je?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${y>1?y*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${ze} leading-tight">${(ge==null?void 0:ge.subject_name)??"—"}</p>
                <p class="text-[10px] ${ze} opacity-60 mt-0.5">${(ge==null?void 0:ge.subject_code)??""}</p>
                ${je?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${T}</tbody>
      </table>`},ce=()=>{const ee=`${Math.floor(100/(O.length+1))}%`,f=`<th style="width:${ee}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+O.map(G=>`<th style="width:${ee}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${G===ae?"text-teal-600":"text-gray-600"}">${B[G]}</th>`).join(""),I={};O.forEach(G=>{I[G]=new Set});let F="";return u.forEach((G,s)=>{var R,te,re,ue;const m=new Date;m.getHours()*3600+m.getMinutes()*60+m.getSeconds();const T=O.map(Q=>{var ze;if(I[Q].has(G.period_no))return"";const Y=Z[`${Q}-${G.period_no}`],y=(Y==null?void 0:Y.span)??1,J=(ze=Y==null?void 0:Y.cls)==null?void 0:ze.master_subjects,be=["AGM","AGMVOC"].includes((J==null?void 0:J.subject_group)??""),Te=Y?be?"bg-amber-50":"bg-emerald-50":"",Ie=Y?be?"text-amber-700":"text-emerald-700":"text-gray-200",_e=y>1?u.find(Ne=>Ne.period_no===G.period_no+y-1)??G:G,[je,ge]=(G.start_time??"0:0").split(":").map(Number),[Ae,it]=(_e.end_time??"0:0").split(":").map(Number);for(let Ne=1;Ne<y;Ne++)I[Q].add(G.period_no+Ne);return`<td style="width:${ee};padding:2px" ${y>1?`rowspan="${y}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${Y?`onclick="window._stuOpenClassFromTT(${Y.cls.id})"`:""}>
            ${Y?`
              <div class="rounded-lg ${Te} border-l-2 ${be?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${y>1?y*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${Ie} text-[8px] font-semibold leading-tight line-clamp-3">${(J==null?void 0:J.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(F+=`<tr>
          <td style="width:${ee}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${G.period_no}</p>
            <p class="text-[8px] text-gray-300">${((R=G.start_time)==null?void 0:R.slice(0,5))??""}</p>
          </td>${T}</tr>`,G.period_no===5&&u.find(Q=>Q.period_no===6)){const Q=((te=G.end_time)==null?void 0:te.slice(0,5))??"",Y=((ue=(re=u.find(y=>y.period_no===6))==null?void 0:re.start_time)==null?void 0:ue.slice(0,5))??"";F+=`<tr><td colspan="${O.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${Q&&Y?` ${Q}–${Y}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${f}</tr></thead>
          <tbody>${F}</tbody>
        </table>
      </div>`},we=()=>{var f,I,F,G;const ee=le==="week";if(L.innerHTML=`
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${ee?"text-gray-500":"bg-white shadow text-teal-600"}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${ee?"bg-white shadow text-teal-600":"text-gray-500"}">ทั้งสัปดาห์</button>
        </div>
        ${ee?"":`
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${P[V]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>`}
      </div>
      ${ee?ce():z(V)}
      ${r.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(f=L.querySelector("#tt-btn-day"))==null||f.addEventListener("click",()=>{le="day",we()}),(I=L.querySelector("#tt-btn-week"))==null||I.addEventListener("click",()=>{le="week",we()}),(F=L.querySelector("#tt-prev"))==null||F.addEventListener("click",()=>{const s=O.indexOf(V);V=O[(s-1+O.length)%O.length],we()}),(G=L.querySelector("#tt-next"))==null||G.addEventListener("click",()=>{const s=O.indexOf(V);V=O[(s+1)%O.length],we()}),!ee&&L.querySelector("#tt-day-cd")){const m=u.find(T=>{if(!Z[`${V}-${T.period_no}`]||!T.end_time)return!1;const te=new Date,re=te.getHours()*3600+te.getMinutes()*60+te.getSeconds(),[ue,Q]=T.end_time.split(":").map(Number),[Y,y]=(T.start_time??"0:0").split(":").map(Number);return re>=Y*3600+y*60&&re<ue*3600+Q*60});if(m){const[T,R]=m.end_time.split(":").map(Number),te=T*3600+R*60,re=setInterval(()=>{const ue=L.querySelector("#tt-day-cd");if(!ue){clearInterval(re);return}const Q=new Date,Y=Math.max(0,te-Q.getHours()*3600-Q.getMinutes()*60-Q.getSeconds()),y=Math.floor(Y/3600),J=Math.floor(Y%3600/60),be=Y%60;ue.textContent=`${String(y).padStart(2,"0")}:${String(J).padStart(2,"0")}:${String(be).padStart(2,"0")}`,Y===0&&clearInterval(re)},1e3)}}};we()};(E=document.getElementById("student-overview-term-switcher"))==null||E.addEventListener("change",l=>{var u,L;const r=l.target.value;try{localStorage.setItem(`pp5_student_score_term_${e==null?void 0:e.id}`,r)}catch{}r===D?(u=window._stuNav)==null||u.call(window,"overview"):(L=window._stuNav)==null||L.call(window,"scores")}),window._stuOpenTimetablePopup=se,(N=document.getElementById("btn-stu-timetable"))==null||N.addEventListener("click",se),window._stuStartQuiz=async l=>{try{const r=await Dt(l,e.id).catch(()=>null);if(r&&r.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${r.id}`;return}const u=await Nt(l);window.location.href=`quiz-exam.html?attempt=${u.id}`}catch(r){K("เข้าสอบไม่สำเร็จ: "+ke(r),"error")}}}async function Us(e,t="life",a=null){var xe;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[n,c]=await Promise.all([Oe().catch(()=>({})),St().catch(()=>[])]);Ss(n);const i=Number(n.academicYear??n.academic_year),p=Number(n.semester),S=Array.isArray(c)&&c.length?c:[{academic_year:i,semester:p,start_date:n.semester_start,end_date:n.semester_end,is_current:!0}],q=h=>`${Number(h.academic_year)}:${Number(h.semester)}`,g=`${i}:${p}`,A=a?`${Number(a.academicYear)}:${Number(a.semester)}`:null,D=localStorage.getItem(`pp5_student_score_term_${e.id}`),j=[A,D,g].find(h=>h&&S.some(d=>q(d)===h))??g,o=S.find(h=>q(h)===j)??S[0],x=Number(o.academic_year),w=Number(o.semester),M={...n,semester_start:o.start_date??n.semester_start,semester_end:o.end_date??n.semester_end},[b,$,k,C]=await Promise.all([cs(e.id,x,w).catch(h=>({columns:[],scores:[],error:h})),ms(e.id,x,w).catch(h=>({columns:[],scores:[],error:h})),ps(e.id,x,w).catch(h=>Object.assign([],{error:h})),It(e.id,x,w).catch(h=>({samai:[],sasana:[],error:h}))]),U=ht(b.columns,b.scores),ne=ht($.columns,$.scores),de=ne.reduce((h,d)=>h+(parseFloat(d.score)||0),0),me=ne.reduce((h,d)=>h+(parseFloat(d.max_score)||0),0),fe=me>0?Math.round(de/me*1e3)/10:0,ye=de>0?ks(fe):null,ve=Object.fromEntries((k??[]).map(h=>[h.check_date,h.status])),he=Ot(M.semester_start,k??[]),$e=he.flatMap(h=>h.days),Ee=$e.reduce((h,d)=>{var _;return h+(((_=Ge[ve[d.ds]])==null?void 0:_.score)??0)},0),Le=$e.length*2,pe=Le?Math.max(0,Math.round(Ee/Le*100)/10):0,Se=[...C.samai??[],...C.sasana??[]],v=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-3">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🎓 ผลการเรียนรายวิชา</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">ข้อมูลตามภาคเรียนที่เลือก</p>
        </div>
        <span class="text-[11px] text-gray-400">${Se.length} วิชา</span>
      </div>
      ${Se.length?`<div class="divide-y divide-gray-50">
        ${Se.map(h=>`
          <button type="button" class="student-score-course w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-gray-50 transition" data-class-id="${h.classId}" data-term-year="${x}" data-term-semester="${w}">
            <div class="min-w-0">
              <p class="text-[10px] text-gray-400 font-mono truncate">${W(h.subjectCode??"")}</p>
              <p class="text-sm font-semibold text-gray-700 truncate">${W(h.subjectName??"—")}</p>
              <p class="text-[11px] text-gray-400">${W(h.teacherName??"—")} · ${h.score!=null&&h.maxScore!=null?`${h.score}/${h.maxScore}`:`รอคะแนน ${h.scoredCount??0}/${h.totalCols??0}`}</p>
            </div>
            <span class="text-lg font-extrabold ${h.grade==null?"text-gray-300":"text-indigo-600"}">${h.grade==null?"—":Number(h.grade).toFixed(1)}</span>
          </button>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีผลการเรียนในภาคเรียนนี้</div>'}
    </section>`,X=(h,d,_,E)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${d} ${h}</h3>
        <span class="text-[11px] text-gray-400">${_.length} หัวข้อ</span>
      </div>
      ${_.length?`<div class="divide-y divide-gray-50">
        ${_.map(N=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${N.name}</p>
              <p class="text-[11px] text-gray-400">${N.sheet_col?`คอลัมน์ ${N.sheet_col} · `:""}เต็ม ${N.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${E}">${N.score??"—"}</p>
              <p class="text-[10px] text-gray-400">/ ${N.max_score??"—"}</p>
            </div>
          </div>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลคะแนน</div>'}
    </section>`,H=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">20 สัปดาห์ · สัปดาห์ละ 5 วัน</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-amber-600">${pe}</p>
          <p class="text-[10px] text-gray-400">/ 10</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[520px] text-xs">
          <thead>
            <tr class="bg-gray-50 text-gray-500">
              <th class="px-2 py-2 text-left font-semibold">สัปดาห์</th>
              ${["อา","จ","อ","พ","พฤ"].map(h=>`<th class="px-2 py-2 text-center font-semibold">${h}</th>`).join("")}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${he.map(h=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${h.n}</td>
              ${h.days.map(d=>{const _=ve[d.ds],E=Ge[_];return`<td class="px-1 py-1 text-center">
                  <span title="${(E==null?void 0:E.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(E==null?void 0:E.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(E==null?void 0:E.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(Ge).map(h=>`<span><b class="${h.cls.split(" ").find(d=>d.startsWith("text-"))??""}">${h.label}</b> ${h.title}</span>`).join("")}
      </div>
    </section>
  `,se={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[t]??"คะแนนทักษะชีวิต",oe={life:X("คะแนนทักษะชีวิต","🌱",U,"text-emerald-600"),prayer:H,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${ye?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${ye.cls}">${ye.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${de?`${fe} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${de||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${me||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${de?fe:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${X("คะแนนอ่านคิดวิเคราะห์ฯ","📖",ne,"text-sky-600")}
    `}[t]??X("คะแนนทักษะชีวิต","🌱",U,"text-emerald-600");ie(`
    <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
      <div>
        <h2 class="font-bold text-gray-800">📊 คะแนนของฉัน</h2>
        <p class="text-xs text-gray-400 mt-1">ผลการเรียนและคะแนนประกอบรายภาคเรียน</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700">
        <span>ภาคเรียน</span>
        <select id="student-score-term" class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700">
          ${S.slice().sort((h,d)=>q(h)===g?-1:q(d)===g?1:q(d).localeCompare(q(h),void 0,{numeric:!0})).map(h=>`<option value="${W(q(h))}" ${q(h)===j?"selected":""}>ภาค ${W(h.semester)}/${W(h.academic_year)}${q(h)===g?" (ปัจจุบัน)":" (ย้อนหลัง)"}</option>`).join("")}
        </select>
      </label>
    </div>
    <p class="text-xs text-gray-400 mb-2">ข้อมูลภาค ${w||"—"} / ${x||"—"} · ${j===g?"ภาคเรียนปัจจุบัน":"ข้อมูลย้อนหลัง"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${se}</p>
    ${v}
    ${oe}
  `),(xe=document.getElementById("student-score-term"))==null||xe.addEventListener("change",h=>{const[d,_]=String(h.target.value).split(":").map(Number);localStorage.setItem(`pp5_student_score_term_${e.id}`,`${d}:${_}`),Us(e,t,{academicYear:d,semester:_})}),document.querySelectorAll(".student-score-course").forEach(h=>{h.addEventListener("click",()=>{var d;window._stuPendingClassTerm={academicYear:Number(h.dataset.termYear),semester:Number(h.dataset.termSemester)},(d=window._stuOpenClass)==null||d.call(window,Number(h.dataset.classId))})})}async function nt(e){var M;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,a,n]=await Promise.all([Je(e.id).catch(()=>[]),_s().catch(()=>({})),us(e.id).catch(()=>[])]),c=Object.fromEntries(n.filter(b=>b.status==="pending").map(b=>[b.class_id,b])),i=["อา","จ","อ","พ","พฤ","ศ","ส"],p=t.length?await xs(t.map(b=>b.id)).catch(()=>({})):{},S=b=>{const $=p[b]??[];if(!$.length)return"";const k={};return $.forEach(C=>{const U=C.day_of_week;k[U]||(k[U]=[]);const ne=C.span_periods??1;for(let de=0;de<ne;de++)k[U].push((C.period_no??0)+de)}),Object.entries(k).sort(([C],[U])=>Number(C)-Number(U)).map(([C,U])=>{const ne=[...new Set(U)].sort((me,fe)=>me-fe),de=ne.length===1?`คาบ ${ne[0]}`:`คาบ ${ne[0]}–${ne[ne.length-1]}`;return`${i[Number(C)]??C} ${de}`}).join(" · ")};if(!t.length){ie(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const q=b=>{var C,U,ne;if(b.subject_group_override)return b.subject_group_override==="sasana";const $=((C=b.master_subjects)==null?void 0:C.subject_group)??"";return(((ne=(U=b.master_subjects)==null?void 0:U.teachers)==null?void 0:ne.category)??"")==="ศาสนา"||$==="AGM"||$==="AGMVOC"},g=t.filter(b=>!q(b)),A=t.filter(b=>q(b)),j=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid",o=localStorage.getItem("studentSubjectsGroup")==="sasana"?"sasana":"samai";window._stuSetSubjectView=b=>{localStorage.setItem("studentSubjectsView",b==="grid"?"grid":"list"),nt(e)},window._stuSetSubjectGroup=b=>{localStorage.setItem("studentSubjectsGroup",b==="sasana"?"sasana":"samai"),nt(e)};const x=b=>{const $=b.master_subjects,k=$==null?void 0:$.teachers,C=zs(b,a);return j?`<button onclick="window._stuOpenClass(${b.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${C.bg}; border-color:${C.border}; border-left-color:${C.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${C.badgeBg}; color:${C.text};">${C.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${C.text};">${($==null?void 0:$.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${($==null?void 0:$.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${Me(b.class_name)}</p>
            ${S(b.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${S(b.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${k!=null&&k.image_url?`<img src="${k.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${((k==null?void 0:k.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${(k==null?void 0:k.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${b.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${C.bg}; border-color:${C.border}; border-left-color:${C.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${C.text};">${($==null?void 0:$.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${($==null?void 0:$.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${C.text};">${C.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${C.badgeBg}; color:${C.text};">${C.short}</span>
          <span class="text-[10px] text-gray-400">${($==null?void 0:$.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${S(b.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${S(b.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${k!=null&&k.image_url?`<img src="${k.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${((k==null?void 0:k.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${(k==null?void 0:k.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${Me(b.class_name)}</span>
      </div>
    </div>`},w=(b,$,k)=>k.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${$}</span>
          <h3 class="font-bold text-gray-700 text-sm">${b}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${k.length} วิชา</span>
        </div>
        <div class="${j?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${k.map(x).join("")}
        </div>
      </div>`:"";ie(`
    <div class="flex items-center justify-between gap-3 mb-3">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${j?"text-gray-400":"bg-white text-emerald-600 shadow-sm"}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${j?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}">กริด</button>
      </div>
    </div>
    <div class="flex gap-2 mb-2">
      <button type="button" onclick="window._stuSetSubjectGroup('samai')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${o==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">📖 สามัญ (${g.length})</button>
      <button type="button" onclick="window._stuSetSubjectGroup('sasana')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${o==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">🕌 ศาสนา (${A.length})</button>
    </div>
    <div class="flex justify-end mb-4">
      <button id="btn-manage-subject-groups" type="button" class="text-xs text-indigo-600 font-semibold hover:text-indigo-800">🔧 จัดการกลุ่มรายวิชา</button>
    </div>
    ${o==="samai"?w("วิชาสามัญ","📖",g):w("วิชาศาสนา","🕌",A)}
  `),(M=document.getElementById("btn-manage-subject-groups"))==null||M.addEventListener("click",()=>{Js(e,t,c,q)})}function Js(e,t,a,n){var g;(g=document.getElementById("subject-group-mgr"))==null||g.remove();const c=document.createElement("div");c.id="subject-group-mgr",c.className="fixed inset-0 z-[400] bg-white flex flex-col";const i=(A,D)=>{const j=A.master_subjects,o=a[A.id];return`
    <div class="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3">
      <p class="font-semibold text-sm text-gray-800 truncate min-w-0">${(j==null?void 0:j.subject_name)??"—"}</p>
      ${o?'<span class="text-[11px] font-semibold text-amber-500 whitespace-nowrap flex-shrink-0">⏳ รอตรวจสอบ</span>':D?`<button class="sgm-move-btn text-[11px] font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-1.5 hover:bg-indigo-50 whitespace-nowrap flex-shrink-0"
              data-class-id="${A.id}" data-requested="samai">ย้ายไป 📖 สามัญ</button>`:""}
    </div>`};let p="samai";const S=()=>{const A=t.filter(j=>(n(j)?"sasana":"samai")===p),D=c.querySelector("#sgm-list");D.innerHTML=A.length?A.map(j=>i(j,p==="sasana")).join(""):'<p class="text-center text-gray-400 text-sm py-8">ไม่มีวิชาในกลุ่มนี้</p>',D.querySelectorAll(".sgm-move-btn").forEach(j=>{j.addEventListener("click",async()=>{var w,M;const o=Number(j.dataset.classId),x=t.find(b=>b.id===o);if(confirm(`ขอย้ายวิชา "${((w=x==null?void 0:x.master_subjects)==null?void 0:w.subject_name)??""}" ไปกลุ่ม 📖 สามัญ?
(ต้องรอแอดมินตรวจสอบและอนุมัติก่อนจึงจะมีผลจริง)`)){j.disabled=!0,j.textContent="กำลังส่ง...";try{await ws(o,"samai"),Wt({title:"🔀 มีคำขอย้ายกลุ่มวิชาใหม่",body:`นักเรียนขอย้ายวิชา "${((M=x==null?void 0:x.master_subjects)==null?void 0:M.subject_name)??""}" ไปกลุ่ม 📖 สามัญ — รอตรวจสอบ`,url:"dashboard.html"}).catch(()=>{}),K("ส่งคำขอแล้ว รอแอดมินตรวจสอบ","success"),c.remove(),nt(e)}catch(b){K("ส่งคำขอไม่สำเร็จ: "+ke(b),"error"),j.disabled=!1,j.textContent="ย้ายไป 📖 สามัญ"}}})})};c.innerHTML=`
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
    <div id="sgm-list" class="flex-1 overflow-y-auto px-4 py-3 space-y-2"></div>`,document.body.appendChild(c),c.querySelector("#sgm-back").addEventListener("click",()=>c.remove());const q=()=>{c.querySelector("#sgm-tab-samai").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${p==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,c.querySelector("#sgm-tab-samai").textContent=`📖 สามัญ (${t.filter(A=>!n(A)).length})`,c.querySelector("#sgm-tab-sasana").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${p==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,c.querySelector("#sgm-tab-sasana").textContent=`🕌 ศาสนา (${t.filter(A=>n(A)).length})`};c.querySelector("#sgm-tab-samai").addEventListener("click",()=>{p="samai",q(),S()}),c.querySelector("#sgm-tab-sasana").addEventListener("click",()=>{p="sasana",q(),S()}),q(),S()}async function Ks(e,t="samai"){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const a=await Ct(e.id).catch(()=>[]),n=o=>{var M,b,$,k,C;const x=((b=(M=o._class)==null?void 0:M.master_subjects)==null?void 0:b.subject_group)??"";return(((C=(k=($=o._class)==null?void 0:$.master_subjects)==null?void 0:k.teachers)==null?void 0:C.category)??"")==="ศาสนา"||x==="AGM"||x==="AGMVOC"},c=a.filter(o=>!n(o)),i=a.filter(o=>n(o)),p=o=>o?new Date(o).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",S=(o,x)=>o.due_at?new Date(x).getTime()>new Date(o.due_at).getTime():!1,q=o=>o.due_at?Date.now()>new Date(o.due_at).getTime():!1,g=o=>{var b,$;const x=o.mySubmission,w=x?S(o,x.submitted_at):!1,M=!x&&q(o);return`<div onclick="window._stuOpenClass(${o.class_id})"
      class="bg-white rounded-2xl border ${x?"border-emerald-100":M?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${W((($=(b=o._class)==null?void 0:b.master_subjects)==null?void 0:$.subject_name)??"")}</p>
        ${x?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${w?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${w?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${M?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${M?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${W(o.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${p(o.due_at)}</p>
      ${x!=null&&x.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${W(x.teacher_feedback)}</p>`:""}
    </div>`},A=o=>{if(!o.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const x=o.filter(Fe).sort((M,b)=>(M.due_at?new Date(M.due_at).getTime():1/0)-(b.due_at?new Date(b.due_at).getTime():1/0)),w=o.filter(M=>M.mySubmission&&M.mySubmission.status!=="rejected").sort((M,b)=>new Date(b.mySubmission.submitted_at).getTime()-new Date(M.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${x.length})</p>
        ${x.length?`<div class="space-y-2.5">${x.map(g).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${w.length})</p>
        ${w.length?`<div class="space-y-2.5">${w.map(g).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},D=c.filter(Fe).length,j=i.filter(Fe).length;ie(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${D?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${D}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${j?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${j}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${A(t==="sasana"?i:c)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(o=>{o.addEventListener("click",()=>Ks(e,o.dataset.grp))})}async function Xs(e,t,a="todo",n=null){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const i=(await Je(e.id,n==null?void 0:n.academicYear,n==null?void 0:n.semester).catch(()=>[])).find(s=>s.id===t);if(!i){ie('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:p}=await $t(async()=>{const{getClassAnnouncements:s}=await import("./api-C-roKrdU.js");return{getClassAnnouncements:s}},__vite__mapDeps([0,1,2,3,4])).catch(()=>({})),[{columns:S,scores:q},g,A,D,j,o,x]=await Promise.all([ns(e.id,t).catch(()=>({columns:[],scores:[]})),os(e.id,t).catch(()=>[]),lt(e.id).catch(()=>[]),p?p(t).catch(()=>[]):Promise.resolve([]),Tt(t,e.id).catch(()=>[]),ls(t,e.id).catch(()=>[]),ds(t).catch(()=>[])]),w=await Bt(j.map(s=>s.id),e.id).catch(()=>new Set),M=window._pp5SystemCfg??await Oe().catch(()=>({})),b=$s(M.semester_start),$=x.find(s=>b>=s.week_start&&b<=s.week_end),k=A.filter(s=>{var m;return((m=s.classes)==null?void 0:m.id)===t}),C=Object.fromEntries(q.map(s=>[s.assignment_id,s])),U=i.master_subjects,ne=U==null?void 0:U.teachers,de=await Gt(t).catch(()=>(K("โหลดค่าปัดเลขร่วมไม่สำเร็จ","error"),null)),me=s=>Jt(S,s,m=>{var T,R;return((T=C[m])==null?void 0:T.final_score)??((R=C[m])==null?void 0:R.original_score)}),fe=S.filter(Xe),ye=S.filter(s=>s.column_type==="derived"),ve=S.filter(s=>!pt(s)&&!Xe(s)&&!["override","derived"].includes(s.column_type)),he=S.filter(s=>pt(s)&&!Xe(s)&&!["override","derived"].includes(s.column_type)),$e=ve.reduce((s,m)=>s+(m.max_score||0),0),Ee=he.reduce((s,m)=>s+(m.max_score||0),0),Le=ve.reduce((s,m)=>s+me(m),0),pe=he.reduce((s,m)=>s+me(m),0),Se=fe.reduce((s,m)=>s+me(m),0),v=ye.reduce((s,m)=>s+me(m),0),X=ye.reduce((s,m)=>s+Number(m.max_score||0),0),H=Le+pe+v,se=Yt(de,H),oe=$e+Ee+X,xe=oe>0?se/oe*100:0,h=S.filter(Ut),d=h.filter(s=>{const m=C[s.id];return s.column_type==="derived"||m&&(m.final_score!=null||m.original_score!=null)}),_=h.length>0&&d.length===h.length,E=g.length,N=g.filter(s=>s.status==="present").length,l=E>0?Math.round(N/E*100):null,r=s=>s>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:s>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:s>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},u=s=>s>=80?4:s>=75?3.5:s>=70?3:s>=65?2.5:s>=60?2:s>=55?1.5:s>=50?1:0,L=_&&oe>0?{...r(xe),point:u(xe)}:null,P=s=>{const m=C[s.id],R=s.column_type==="derived"||m&&(m.final_score!=null||m.original_score!=null)?me(s):null,te=R!=null&&s.max_score>0?Math.round(R/s.max_score*100):null,re=(m==null?void 0:m.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${s.assignment_name}
        ${re?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${R!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${R!=null?Ze(de,Kt(s),R,s.column_type==="derived"?2:1):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${s.max_score!=null?"/"+s.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${R!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${s.max_score!=null?te!=null?te+"%":"—%":""}
      </td>
    </tr>`},B=(s,m,T,R,te)=>{if(!s.length)return"";const re=T>0?Math.round(m/T*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${te}</span>
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
            ${s.map(P).join("")}
            <tr class="${R}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${Ze(de,s===ve?"mid_subtotal":s===he?"fin_subtotal":"bonus_subtotal",m)}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${T}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${re}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},O=Os(i),ae=()=>`
    <div class="${O.bg} ${O.border} border border-l-4 ${O.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${O.text} text-sm leading-tight">${(U==null?void 0:U.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${(U==null?void 0:U.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(ne==null?void 0:ne.full_name)??"—"} · ${Me(i.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${oe>0?Ze(de,"total",H):"—"}</p>
        <p class="text-[10px] text-gray-400">/${oe} คะแนน</p>
        ${Se>0?`<p class="text-[10px] text-amber-500 font-medium">คะแนนพิเศษ ${Se.toFixed(1).replace(/\.0$/,"")} (แยก ไม่บวกยอดรวม)</p>`:""}
        ${L?`<div class="mt-1 flex items-center justify-end gap-1.5"><span class="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-extrabold">เกรด ${L.point.toFixed(1)}</span><span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${L.cls}">${L.label}</span></div>`:oe>0?`<span class="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">ยังไม่สรุปเกรด (${d.length}/${h.length} หัวข้อ)</span>`:""}
      </div>
    </div>`,le=s=>{const m=He[s.status]??He.pending,T=s.class_score_columns,R=st(s.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${s.request_type}</p>
          ${T?`<p class="text-[11px] text-gray-400 mt-0.5">${T.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${m.cls}">${m.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${Re(s.requested_date)}${s.requested_period_no?` · คาบ ${s.requested_period_no}`:""}${R?` · ${R}`:""}</p>
        ${s.reason?`<p>💬 ${s.reason}</p>`:""}
        ${s.teacher_comment?`<p class="${s.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${s.teacher_comment}</p>`:""}
      </div>
      ${s.status==="pending"?`
        <button onclick="window._stuCancelRequest(${s.id}, ${t})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},V=()=>{const s=[],m=o.filter(Fe);m.length>0&&s.push(`
        <button onclick="window._stuOpenClassTab(${t},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${m.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${m.length}</span>
        </button>`);const T=k.filter(y=>y.status==="pending");T.length>0&&T.forEach(y=>{const J=y.class_score_columns,be=st(y.requested_date);s.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${y.request_type} — รอครูอนุมัติ</p>
              ${J?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${J.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${Re(y.requested_date)}${y.requested_period_no?` · คาบ ${y.requested_period_no}`:""}${be?` · ${be}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const R=k.filter(y=>y.status==="approved"&&y.exam_attended==null);R.length>0&&R.forEach(y=>{const J=y.class_score_columns,be=st(y.requested_date);s.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${y.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${J?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${J.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${Re(y.requested_date)}${y.requested_period_no?` · คาบ ${y.requested_period_no}`:""}${be?` · ${be}`:""}</p>
              ${y.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${y.teacher_comment}</p>`:""}
            </div>
          </div>`)}),j.forEach(y=>{const J=y.attempts.filter(ge=>ge.status==="submitted"||ge.status==="terminated_violation").reduce((ge,Ae)=>Math.max(ge,Ae.score_pct??0),null),be=y.attempts.length&&y.attempts[y.attempts.length-1].status==="terminated_violation"?y.attempts[y.attempts.length-1]:null,Te=y.attempts.find(ge=>ge.status==="in_progress"),Ie=y.attempts.filter(ge=>ge.status==="submitted"||ge.status==="terminated_violation").length;let _e="",je="";y.status==="announced"?_e='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':y.status==="started"&&w.has(y.id)?_e='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':y.status==="started"&&be?_e='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':y.status==="started"&&Te?(_e='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">กำลังทำอยู่</span>',je=`<button onclick="window._stuStartQuiz('${y.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):y.status==="started"&&Ie>=y.max_attempts?_e='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':y.status==="started"?(_e='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">เปิดสอบอยู่</span>',je=`<button onclick="window._stuStartQuiz('${y.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):y.status==="closed"&&(_e='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),s.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${W(y.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${y.num_questions} ข้อ${y.time_limit_minutes?` · ${y.time_limit_minutes} นาที`:""} · ทำได้ ${Ie}/${y.max_attempts} ครั้ง</p>
            ${J!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${J.toFixed(1)}%</p>`:""}
            <div class="mt-1">${_e}</div>
            ${je}
          </div>
        </div>`)});const te=[i.day1_date,i.day2_date,i.day3_date,i.day4_date,i.day5_date,i.day6_date].filter(Boolean),re=new Date;re.setHours(0,0,0,0);const ue=te.map(y=>{const J=new Date(y);return J.setHours(0,0,0,0),J}).filter(y=>y>=re).sort((y,J)=>y-J);if(ue.length>0){const y=ue[0],J=Math.round((y-re)/864e5),be=J===0?"🔴 วันนี้!":J===1?"🟡 พรุ่งนี้":`⏰ อีก ${J} วัน`,Te=Ue[y.getDay()]??"";s.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${Te}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${y.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${Re(Mt(y))}</p>
          </div>
          <span class="text-xs font-bold ${J===0?"text-red-500":J===1?"text-amber-500":"text-emerald-600"}">${be}</span>
        </div>`)}const Q={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},Y=y=>{if(!y)return"";const J=new Date(y),Te=J-new Date,Ie=Math.floor(Te/6e4),_e=J.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(Te<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${_e}</span>`;if(Ie<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${Ie} นาที · ${_e}</span>`;const je=Math.floor(Ie/60);return je<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${je} ชม. ${Ie%60} น. · ${_e}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(je/24)} วัน · ${_e}</span>`};return D.length>0&&[...D].sort((y,J)=>(J.priority||0)-(y.priority||0)).forEach(y=>{const J=Q[y.ann_type]??Q.general,be=y.ann_type==="deadline"&&y.deadline_at?Y(y.deadline_at):"";s.push(`
          <div class="rounded-2xl border ${J.border} ${J.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${J.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${y.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${J.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${y.title??""}</p>
                ${y.body?`<p class="text-xs text-gray-500 mt-1">${y.body}</p>`:""}
                ${be?`<div class="mt-2">${be}</div>`:""}
                ${y.file_url?`<a href="${y.file_url}" target="_blank" rel="noopener"
                  class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">
                  📎 เปิดไฟล์แนบ →</a>`:""}
              </div>
            </div>
          </div>`)}),`
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-bold text-gray-800">✅ ภารกิจ / สิ่งที่ต้องทำ</h2>
      </div>
      ${s.length?`<div class="space-y-3">${s.join("")}</div>`:`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
          <p class="text-4xl mb-2">🎉</p>
          <p class="text-sm font-medium text-gray-500">ไม่มีรายการที่ต้องทำ</p>
          <p class="text-xs mt-1">ถ้าครูประกาศกำหนดสอบหรือแจ้งงานในรายวิชา ระบบจะแสดงพร้อมนับถอยหลังที่นี่</p>
        </div>`}`},Z=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${oe>0?`<span class="text-xs text-gray-400">${xe.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${S.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${B(ve,Le,$e,"bg-blue-50","📘 กลางภาค")}
            ${B(he,pe,Ee,"bg-purple-50","📙 ปลายภาค")}
            ${B(ye,v,X,"bg-indigo-50","🔢 คะแนนสูตร")}
            ${fe.length?B(fe,fe.reduce((s,m)=>s+me(m),0),0,"bg-amber-50","⭐ คะแนนพิเศษ (ไม่รวมเกรด)"):""}
          </div>`}
    </div>
    ${E>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${l!==null?`<span class="text-xs text-gray-400">${N}/${E} คาบ · ${l}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${g.map(s=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${s.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${Ns[s.status]??"bg-gray-50 text-gray-400"}">
            ${Ds[s.status]??"?"}
          </span>
        </div>`).join("")}
      </div>
    </div>`:""}`,z=()=>`
    <button onclick="window._stuOpenRequest(${t})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${k.length?`<div class="space-y-3">${k.map(le).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,ce=s=>s?new Date(s).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",we=(s,m)=>s.due_at?new Date(m).getTime()>new Date(s.due_at).getTime():!1,ee=s=>s.due_at?Date.now()>new Date(s.due_at).getTime():!1,f=s=>{var re,ue;const m=s.mySubmission,T=(m==null?void 0:m.status)==="rejected",R=m?we(s,m.submitted_at):!1,te=!m&&ee(s);return`<div class="bg-white rounded-2xl border ${T?"border-red-200":m?"border-emerald-100":te?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${W(s.title)}</p>
        ${T?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':m?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${R?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${R?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${te?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${te?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${s.description?`<p class="text-xs text-gray-500 mb-1.5">${W(s.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${ce(s.due_at)}</p>
      ${(re=s.attachment_urls)!=null&&re.length?`<div class="flex flex-wrap gap-1.5 mb-2">${s.attachment_urls.map(Q=>`<a href="${W(Q.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${W(Q.name)}</a>`).join("")}</div>`:""}
      ${(ue=m==null?void 0:m.file_urls)!=null&&ue.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(m.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${m.file_urls.map(Q=>`<a href="${W(Q.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${W(Q.name)}</a>`).join("")}</div></div>`:""}
      ${m!=null&&m.teacher_feedback?T?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${W(m.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${W(m.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${T?"bg-red-600 text-white hover:bg-red-700":m?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${s.id}">${T?"📤 ส่งแก้ไขใหม่":m?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},F=a==="scores"?Z():a==="requests"?z():a==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${o.length?`<div class="space-y-3">${o.map(f).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:V();ie(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${ae()}
    ${$?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${b}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${W($.topic)}</p>
      ${$.description?`<p class="text-xs text-indigo-400 mt-0.5">${W($.description)}</p>`:""}
    </div>`:""}
    ${F}
  `),window._stuCancelRequest=async(s,m=t)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await Lt(s),K("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(m,"requests")}catch(T){K("ยกเลิกไม่สำเร็จ: "+ke(T),"error")}},window._stuStartQuiz=async s=>{try{const m=await Dt(s,e.id).catch(()=>null);if(m&&m.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${m.id}`;return}const T=await Nt(s);window.location.href=`quiz-exam.html?attempt=${T.id}`}catch(m){K("เข้าสอบไม่สำเร็จ: "+ke(m),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(s=>{s.addEventListener("click",()=>{const m=o.find(T=>T.id===parseInt(s.dataset.aid,10));m&&G(m)})});function G(s){var T;(T=document.getElementById("stu-submit-modal"))==null||T.remove();const m=document.createElement("div");m.id="stu-submit-modal",m.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📤 ส่งงาน — ${W(s.title)}</h3>
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
      </div>`,document.body.appendChild(m),m.addEventListener("click",R=>{R.target===m&&m.remove()}),m.querySelector("#ss-close").addEventListener("click",()=>m.remove()),m.querySelector("#ss-submit").addEventListener("click",async()=>{var re;const R=[...m.querySelector("#ss-files").files??[]];if(!R.length&&!s.mySubmission){K("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const te=m.querySelector("#ss-submit");te.disabled=!0,te.textContent="กำลังส่ง...";try{const ue=[];for(const Y of R)ue.push(await Ls(Y,`class-${t}/student-${e.id}`));const Q=ue.length?ue:((re=s.mySubmission)==null?void 0:re.file_urls)??[];await is(s.id,e.id,Q,m.querySelector("#ss-note").value.trim()||null),K("ส่งงานสำเร็จ ✅","success"),m.remove(),Xs(e,t,"assignments")}catch(ue){K("ส่งงานไม่สำเร็จ: "+ke(ue),"error"),te.disabled=!1,te.textContent="ส่งงาน"}})}}async function Zs(e){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const t=await lt(e.id).catch(()=>[]),a=`<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`;if(!t.length){ie(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${a}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`);return}ie(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} รายการ)</span></h2>
    ${a}
    <div class="space-y-3">
      ${t.map(n=>{var S,q;const c=He[n.status]??He.pending,i=n.classes,p=n.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((S=i==null?void 0:i.master_subjects)==null?void 0:S.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((q=i==null?void 0:i.master_subjects)==null?void 0:q.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${c.cls}">${c.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${n.request_type}</span></p>
            ${p?`<p>📝 หัวข้อ: <span class="text-gray-700">${p.assignment_name}</span></p>`:""}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${Re(n.requested_date)}</span>
              ${n.requested_period_no?` คาบ ${n.requested_period_no}`:""}</p>
            ${n.reason?`<p>💬 เหตุผล: <span class="text-gray-600">${n.reason}</span></p>`:""}
            ${n.teacher_comment?`<p class="${n.status==="approved"?"text-emerald-600":"text-red-500"}">
              👩‍🏫 ครู: ${n.teacher_comment}</p>`:""}
          </div>
          ${n.status==="pending"?`
          <button onclick="window._stuCancelRequest(${n.id})"
            class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">
            ✕ ยกเลิกคำร้อง
          </button>`:""}
        </div>`}).join("")}
    </div>
  `),window._stuCancelRequest=async n=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await Lt(n),K("ยกเลิกคำร้องแล้ว","success"),Zs(e)}catch(c){K("ยกเลิกไม่สำเร็จ: "+ke(c),"error")}}}async function La(e,t){var Le,pe,Se;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[a,n]=await Promise.all([Je(e.id).catch(()=>[]),es(e.id).catch(()=>0)]),c=a.find(v=>v.id===t);if(!c){ie('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(n>=2){ie(`
      <button onclick="window._stuOpenClassTab(${t},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const i=n===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",p=c.master_subjects,S=p==null?void 0:p.teacher_id,q=p==null?void 0:p.teachers,g=S?(q==null?void 0:q.full_name)??"ครูผู้สอน":"ครูผู้สอน",A=String(g||"ค").trim().charAt(0).toUpperCase()||"ค",D=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||c.class_name||"—";let j=null;const[o,x,w]=await Promise.all([ts(t).catch(()=>[]),S?ss(S,t).catch(v=>(j=v,[])):Promise.resolve([]),as().catch(()=>[])]),M=o.filter(v=>v.column_type!=="override"),b={};for(const v of x){b[`${v.day_of_week}_${v.period_no}`]=v;const X=v.span_periods??1;for(let H=1;H<X;H++)b[`${v.day_of_week}_${v.period_no+H}`]={...v,_secondary:!0}}const $=x.length>0;if(!$){ie(`
      <button onclick="window._stuOpenClassTab(${t}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(p==null?void 0:p.subject_name)??""} · ${Me(c.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${S?j?`ระบบอ่านตารางครูไม่สำเร็จ: ${j.message??j}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${S?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const k="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",C=k+" cursor-pointer";let U=null,ne=0;const de=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],me=(v,X,H=null)=>{const se=String(v??"").trim(),oe=String(X??"").trim();return se&&oe?`${se} — ${oe}`:se||(H!=null?String(H):"")},fe=v=>{const X=de[v%de.length];return`${X.bg} ${X.text}`};let ye={};try{ye=JSON.parse(localStorage.getItem(`scheduleColors_${S??"x"}`)??"{}")}catch{}const ve={};let he=0;x.forEach(v=>{const X=me(v.subject_name,v.class_name,v.subject_id);if(!X||ve[X]!=null)return;const H=ye[X]??ye[v.subject_id]??ye[v.subject_name],se=Number(H);ve[X]=Number.isFinite(se)?se:he++});const $e=(v=0)=>{const X=[0,1,2,3,4,5],H={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},se={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},oe=at(v),xe=new Date;xe.setHours(0,0,0,0);const h=X.map(_=>{const E=oe[_];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${se[_]}">
        <p class="text-sm font-bold text-gray-700">${H[_]}</p>
        <p class="text-xs text-gray-400">${E.getDate()}/${E.getMonth()+1}</p>
      </th>`}).join(""),d=w.map(_=>{var r,u;const E=((r=_.start_time)==null?void 0:r.slice(0,5))??"",N=((u=_.end_time)==null?void 0:u.slice(0,5))??"",l=X.map(L=>{const P=`${L}_${_.period_no}`,B=b[P];if(B!=null&&B._secondary)return"";const ae=oe[L]<xe;if(!B)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${_.period_no}" data-day="${L}" data-week-offset="${v}"
              ${ae?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${ae?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${ae?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${ae?"ล็อก":"＋"}</span>
            </button>
          </td>`;const le=B.span_periods??1,V=me(B.subject_name,B.class_name,B.subject_id),Z=ve[V]??0,z=fe(Z);return`<td class="border border-gray-100 p-0" style="height:1px" ${le>1?`rowspan="${le}"`:""}>
          <div class="w-full h-full ${z} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${B.subject_name??"ไม่ว่าง"}</p>
            ${B.class_name?`<p class="text-[10px] opacity-80 leading-tight">${Me(B.class_name)}</p>`:""}
            ${B.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${B.teacher_name}</p>`:""}
            ${le>1?`<p class="text-[9px] opacity-40 mt-0.5">${le} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${_.period_no}</p>
          <p class="text-[10px] text-gray-400">${E}–${N}</p>
        </td>
        ${l}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${h}
          </tr>
        </thead>
        <tbody>${d}</tbody>
      </table>
    </div>`},Ee=v=>{const X=at(v);return`${v===0?"สัปดาห์นี้":v===1?"สัปดาห์หน้า":`อีก ${v} สัปดาห์`} (${Ve(X[0])} - ${Ve(X[5])})`};if(ie(`
    <button onclick="window._stuOpenClass(${t})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(p==null?void 0:p.subject_name)??""} · ${Me(c.class_name)}</p>
      ${i}

      ${$?`
      <div id="schedule-first-gate" class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-bold text-emerald-800">เลือกคาบว่างของครูก่อน</p>
        <p class="mt-1 text-xs text-emerald-600">ระบบจะเปิดตารางสอนให้เลือกวันและคาบ แล้วค่อยกรอกข้อมูลคำร้องต่อ</p>
      </div>`:""}

      <form id="req-form" class="space-y-4 ${$?"hidden":""}">
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
          <select id="req-col" class="${C}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${M.map(v=>`<option value="${v.id}">${v.assignment_name} (${v.assignment_type} · เต็ม ${v.max_score})</option>`).join("")}
          </select>
        </div>

        <!-- Schedule grid / manual date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันและคาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${$?`
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
              <input type="date" id="req-date" class="${k}"
                min="${Mt(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${C}" required>
                <option value="">— เลือกคาบ —</option>
                ${w.map(v=>`<option value="${v.period_no}">คาบ ${v.period_no} (${v.start_time.slice(0,5)}–${v.end_time.slice(0,5)})</option>`).join("")}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${k} resize-none"
            placeholder="ระบุเหตุผลที่ขาดสอบ..."></textarea>
        </div>

        <button type="submit" id="req-submit"
          class="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ยื่นคำร้อง
        </button>
      </form>
    </div>
    ${$?`
      <div id="teacher-schedule-modal" class="hidden fixed inset-0 z-[120] bg-black/50 p-4 items-center justify-center">
        <div class="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold shadow-sm">
                ${q!=null&&q.image_url?`<img src="${q.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${A}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${g} · ${(p==null?void 0:p.subject_name)??""}</p>
                <p class="text-[11px] text-gray-400 mt-0.5 truncate">นักเรียน ${(e==null?void 0:e.full_name)??"—"} · รหัส ${(e==null?void 0:e.student_code)??"—"} · ห้อง ${D}</p>
              </div>
            </div>
            <button type="button" id="close-schedule-modal"
              class="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600">×</button>
          </div>
          <div class="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p class="text-[11px] text-emerald-600 font-medium">กรุณาเลือกคาบว่างก่อนกรอกคำร้อง · ช่องว่างที่ไม่ถูกล็อกเลือกได้</p>
            <select id="schedule-week-select"
              class="border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200">
              ${[0,1,2,3,4].map(v=>`<option value="${v}">${Ee(v)}</option>`).join("")}
            </select>
          </div>
          <div id="schedule-grid-wrap">${$e(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(v=>{v.addEventListener("change",()=>{var se;const X=document.getElementById("req-reason-wrap"),H=v.value==="สอบย้อนหลัง";X.classList.toggle("hidden",!H),(se=document.getElementById("req-reason"))==null||se.toggleAttribute("required",H)})}),$){const v=document.getElementById("teacher-schedule-modal");(Le=document.getElementById("open-schedule-modal"))==null||Le.addEventListener("click",()=>{v==null||v.classList.remove("hidden"),v==null||v.classList.add("flex")}),(pe=document.getElementById("close-schedule-modal"))==null||pe.addEventListener("click",()=>{var H;if(!U){(H=window._stuOpenClassTab)==null||H.call(window,t,"requests");return}v==null||v.classList.add("hidden"),v==null||v.classList.remove("flex")}),v==null||v.addEventListener("click",H=>{H.target===v&&U&&(v.classList.add("hidden"),v.classList.remove("flex"))});const X=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(H=>{H.addEventListener("click",()=>{var l,r;const se=parseInt(H.dataset.period),oe=parseInt(H.dataset.day),xe=parseInt(H.dataset.weekOffset??ne),d=at(xe)[oe];U={period_no:se,day_of_week:oe,date:d,week_offset:xe},document.getElementById("req-date").value=Be(d),document.getElementById("req-period-hidden").value=se;const _=document.getElementById("period-summary"),E=document.getElementById("period-summary-text");_==null||_.classList.remove("hidden"),E&&(E.textContent=`คาบ ${se} วัน${Ue[oe]??""} ${Ve(d)}`);const N=document.getElementById("schedule-picker-label");N&&(N.textContent=`เลือกคาบ ${se} วัน${Ue[oe]??""} ${Ve(d)} แล้ว`),(l=document.getElementById("schedule-first-gate"))==null||l.classList.add("hidden"),(r=document.getElementById("req-form"))==null||r.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(u=>{u.classList.toggle("ring-2",u===H),u.classList.toggle("ring-emerald-500",u===H),u.classList.toggle("bg-emerald-200",u===H)}),v==null||v.classList.add("hidden"),v==null||v.classList.remove("flex")})})};X(),(Se=document.getElementById("schedule-week-select"))==null||Se.addEventListener("change",H=>{ne=parseInt(H.target.value||"0");const se=document.getElementById("schedule-grid-wrap");se&&(se.innerHTML=$e(ne)),X()}),setTimeout(()=>{v==null||v.classList.remove("hidden"),v==null||v.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async v=>{var d,_,E,N,l;v.preventDefault();const X=document.getElementById("req-submit"),H=(d=document.querySelector('input[name="req_type"]:checked'))==null?void 0:d.value,se=document.getElementById("req-col").value,oe=((_=document.getElementById("req-reason"))==null?void 0:_.value.trim())||null,xe=(E=document.getElementById("req-date"))==null?void 0:E.value,h=$?(N=document.getElementById("req-period-hidden"))==null?void 0:N.value:(l=document.getElementById("req-period-sel"))==null?void 0:l.value;if(!H||!se||!xe||!h){if(K("กรุณากรอกข้อมูลให้ครบ","warning"),$&&!h){K("กรุณาเลือกคาบว่างจากตารางครู","warning");const r=document.getElementById("teacher-schedule-modal");r==null||r.classList.remove("hidden"),r==null||r.classList.add("flex")}return}if(H==="สอบย้อนหลัง"&&!oe){K("กรุณาระบุเหตุผล","warning");return}X.disabled=!0,X.textContent="กำลังยื่น...";try{await rs({student_id:e.id,class_id:t,assignment_id:parseInt(se),request_type:H,requested_date:xe,requested_period_no:parseInt(h),reason:H==="สอบย้อนหลัง"?oe:null,status:"pending"}),K("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(t,"requests")}catch(r){K("ยื่นไม่สำเร็จ: "+ke(r),"error")}finally{X.disabled=!1,X.textContent="ยื่นคำร้อง"}})}async function ja(e,t){var i,p,S,q;const a=()=>`
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

    ${a()}

    <button id="stu-logout-btn"
      class="w-full py-3.5 rounded-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold text-sm
             shadow-md shadow-red-200/60 transition flex items-center justify-center gap-2">
      🚪 ออกจากระบบ
    </button>

    <p class="text-center text-[10px] text-gray-300 mt-4 leading-relaxed">
      พัฒนาโดย <span class="text-gray-400 font-medium">KruHambalWaji</span><br/>
      ปพ.5 ออนไลน์ © 2026 v${js}
    </p>
  `),(i=document.getElementById("btn-stu-my-certificates-profile"))==null||i.addEventListener("click",()=>At(e)),(p=document.getElementById("btn-stu-contact-admin"))==null||p.addEventListener("click",()=>{var g;(g=window._openFeedbackWidget)==null||g.call(window)}),(S=document.getElementById("btn-stu-pw-reset"))==null||S.addEventListener("click",()=>{n()});function n(){var A;(A=document.getElementById("pw-choice-modal"))==null||A.remove();const g=document.createElement("div");g.id="pw-choice-modal",g.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",g.innerHTML=`
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
      </div>`,document.body.appendChild(g),g.addEventListener("click",D=>{D.target===g&&g.remove()}),g.querySelector("#pwc-cancel").addEventListener("click",()=>g.remove()),g.querySelector("#pwc-self").addEventListener("click",()=>{g.remove(),c()}),g.querySelector("#pwc-admin").addEventListener("click",()=>{var D;g.remove(),(D=window._openPasswordResetRequest)==null||D.call(window)})}function c(){var A;(A=document.getElementById("self-pw-modal"))==null||A.remove();const g=document.createElement("div");g.id="self-pw-modal",g.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",g.innerHTML=`
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
      </div>`,document.body.appendChild(g),g.addEventListener("click",D=>{D.target===g&&g.remove()}),g.querySelector("#self-pw-close").addEventListener("click",()=>g.remove()),g.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const D=g.querySelector("#btn-stu-save-pw"),j=g.querySelector("#stu-new-pw").value,o=g.querySelector("#stu-new-pw-confirm").value,x=g.querySelector("#stu-pw-msg"),w=(M,b)=>{x.className=`text-xs text-center py-2.5 rounded-xl ${b?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,x.textContent=M,x.classList.remove("hidden")};if(!j||j.length<6){w("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if(j!==o){w("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}D.disabled=!0,D.textContent="กำลังบันทึก...",x.classList.add("hidden");try{const{error:M}=await qe.auth.updateUser({password:j});if(M)throw M;w("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),g.querySelector("#stu-new-pw").value="",g.querySelector("#stu-new-pw-confirm").value=""}catch(M){w("ไม่สำเร็จ: "+ke(M),!0)}finally{D.disabled=!1,D.textContent="บันทึกรหัสผ่านใหม่"}})}(q=document.getElementById("stu-logout-btn"))==null||q.addEventListener("click",()=>{var A;(A=document.getElementById("stu-logout-confirm"))==null||A.remove();const g=document.createElement("div");g.id="stu-logout-confirm",g.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",g.innerHTML=`
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
      </div>`,document.body.appendChild(g),g.querySelector("#stu-logout-cancel").addEventListener("click",()=>g.remove()),g.addEventListener("click",D=>{D.target===g&&g.remove()}),g.querySelector("#stu-logout-confirm-btn").addEventListener("click",t)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{ta(e)}),document.getElementById("btn-request-qr-card").addEventListener("click",()=>{var A;(A=document.getElementById("qr-request-confirm"))==null||A.remove();const g=document.createElement("div");g.id="qr-request-confirm",g.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",g.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",D=>{D.target===g&&g.remove()}),g.querySelector("#qr-request-cancel").addEventListener("click",()=>g.remove()),g.querySelector("#qr-request-ok").addEventListener("click",async()=>{const D=g.querySelector("#qr-request-ok");D.disabled=!0,D.textContent="กำลังส่ง...";try{await Qt({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),Vt({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),g.remove(),K("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch(j){D.disabled=!1,D.textContent="ยืนยัน",K("ส่งไม่สำเร็จ: "+ke(j),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var de;const g=window._pp5SystemCfg??await Oe().catch(()=>({})),A=parseInt(g.studentQrDailyLimit||"3",10),D=parseInt(g.studentQrExpirySeconds||"60",10),j=`qr_generation_logs_${e.id}`,o=Be(new Date);let x=JSON.parse(localStorage.getItem(j)||"null");if((!x||x.date!==o)&&(x={date:o,count:0}),x.count>=A){K(`คุณสร้าง QR Code ครบโควต้า ${A} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}x.count+=1,localStorage.setItem(j,JSON.stringify(x)),(de=document.getElementById("student-qr-modal"))==null||de.remove();const w=document.createElement("div");w.id="student-qr-modal",w.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",w.innerHTML=`
      <div class="text-center w-full max-w-sm">
        <div class="mb-5">
          <h3 class="text-2xl font-bold text-gray-800">🎫 QR Code ของฉัน</h3>
          <p class="text-sm font-semibold text-emerald-600 mt-1">${e.full_name}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส: ${e.student_code} · ห้อง: ${Me(e.main_room)}</p>
        </div>
        
        <div class="relative w-64 h-64 mx-auto mb-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
          <canvas id="student-qr-canvas" class="w-56 h-56 object-contain"></canvas>
        </div>

        <div class="mb-8 px-4">
          <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-2.5">
            <div id="qr-timer-bar" class="bg-emerald-500 h-full w-full transition-all duration-1000 ease-linear"></div>
          </div>
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${D}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${A-x.count} / ${A} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(w);const M=w.querySelector("#student-qr-canvas"),b=Math.floor(Date.now()/1e3),$=`SQ:${e.student_code}:${b}`;try{await Cs.toCanvas(M,$,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(me){console.error("Failed to draw QR Code:",me),K("สร้าง QR Code ไม่สำเร็จ","error"),w.remove();return}let k=D;const C=w.querySelector("#qr-timer-bar"),U=w.querySelector("#qr-timer-sec"),ne=setInterval(()=>{k-=1,U&&(U.textContent=k),C&&(C.style.width=`${k/D*100}%`),k<=0&&(clearInterval(ne),w.remove(),K("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);w.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(ne),w.remove()})})}const ea={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function ta(e){var n;(n=document.getElementById("student-leave-modal"))==null||n.remove();const t=document.createElement("div");t.id="student-leave-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",t.innerHTML=`
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
  `,document.body.appendChild(t);const a=()=>{t._leaveTimer&&clearInterval(t._leaveTimer),t.remove()};t.querySelector("#btn-leave-modal-close").addEventListener("click",a),aa(e,t)}function sa(e,t){e.querySelectorAll(".leave-tab-btn").forEach(a=>{const n=a.dataset.leaveTab===t;a.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${n?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function aa(e,t){const a=t.querySelector("#student-leave-body");let n="permit";try{const[c,i]=await Promise.all([vs(e.id),hs(e.id)]),p=i.filter(j=>j.status==="overdue").length,S=p>=3?"danger":p>=1?"warning":"safe",q=ea[S],g=()=>{var o,x,w,M;let j="";if(c){const b=((x=(o=c.classes)==null?void 0:o.master_subjects)==null?void 0:x.subject_name)||((w=c.classes)==null?void 0:w.class_name)||"—";j=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${W(b)} · เหตุผล: ${W(c.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${W(((M=c.teachers)==null?void 0:M.full_name)||"—")}</p>
          </div>
        `}return`
        <div class="rounded-2xl ${q.badgeBg} border ${q.border} px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">สถานะปัจจุบัน</p>
            <p class="text-sm font-extrabold ${q.badgeText} mt-0.5">${q.label}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">เลยเวลา/ไม่กลับ</p>
            <p class="text-sm font-extrabold ${q.badgeText} mt-0.5">${p}/3 ครั้ง</p>
          </div>
        </div>
        ${j}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},A=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${i.length?i.map(o=>{var $,k,C;const x=((k=($=o.classes)==null?void 0:$.master_subjects)==null?void 0:k.subject_name)||((C=o.classes)==null?void 0:C.class_name)||"—",w=o.status==="active"?"🚪 กำลังออก":o.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",M=o.status==="active"?"text-amber-600":o.status==="overdue"?"text-red-600":"text-emerald-600",b=new Date(o.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${W(x)}</span>
                  <span class="text-[10px] font-bold ${M}">${w}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${b} · ${W(o.reason)} · ${o.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,D=()=>{if(a.innerHTML=n==="permit"?g():A(),sa(t,n),t.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${n==="permit"?q.border:"border-transparent"}`,n==="permit"&&c){const j=a.querySelector("#student-leave-active-card"),o=a.querySelector("#student-leave-active-label"),x=a.querySelector("#student-leave-active-timer"),w=a.querySelector("#student-leave-active-detail"),M=a.querySelector("#student-leave-active-teacher"),b=()=>{const $=Es(c.created_at,c.allowed_duration);x&&(x.textContent=$.timerText),$.isOverdue&&j&&!j.classList.contains("bg-red-50")&&(j.classList.remove("border-amber-200","bg-amber-50"),j.classList.add("border-red-200","bg-red-50","animate-pulse"),o&&(o.textContent="⛔ เลยเวลา",o.classList.replace("text-amber-700","text-red-700")),x&&x.classList.replace("text-amber-700","text-red-700"),w&&w.classList.replace("text-amber-800","text-red-800"),M&&M.classList.replace("text-amber-600","text-red-600")),$.isBeyondLimit&&j&&j.classList.remove("animate-pulse")};b(),t._leaveTimer=setInterval(b,1e3)}};t.querySelectorAll(".leave-tab-btn").forEach(j=>{j.addEventListener("click",()=>{t._leaveTimer&&clearInterval(t._leaveTimer),n=j.dataset.leaveTab,D()})}),D()}catch(c){a.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${W(ke(c))}</p>`}}async function zt(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const a=document.createElement("script");a.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",a.onload=()=>e(window.Html5Qrcode),a.onerror=n=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(a)})}const ra="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",na="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let We=null;function oa(){return We||(We=new Promise((e,t)=>{var n,c;if((c=(n=window.google)==null?void 0:n.accounts)!=null&&c.id){e();return}const a=document.createElement("script");a.src="https://accounts.google.com/gsi/client",a.async=!0,a.defer=!0,a.onload=()=>e(),a.onerror=()=>t(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(a)}),We)}function Ca(){var n;(n=document.getElementById("stu-email-link-modal"))==null||n.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e);const t=(c,i)=>{const p=e.querySelector("#sel-msg");p.className=`text-xs text-center py-2.5 rounded-xl ${i?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,p.textContent=c,p.classList.remove("hidden")},a=async(c,i,p)=>{i&&(i.disabled=!0);try{await jt(c),t(`เชื่อมอีเมล ${c} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(S){t("ไม่สำเร็จ: "+ke(S),!0),i&&(i.disabled=!1,i.textContent=p)}};oa().then(()=>{window.google.accounts.id.initialize({client_id:ra,ux_mode:"redirect",login_uri:na}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",c=>{c.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const c=e.querySelector("#sel-save"),i=e.querySelector("#sel-email").value.trim(),p=e.querySelector("#sel-email-confirm").value.trim();if(!i||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){t("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(i!==p){t("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}c.textContent="กำลังบันทึก...",await a(i,c,"เชื่อมอีเมล")})}async function Ia(e){try{await jt(e),K(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(t){K("เชื่อมอีเมลไม่สำเร็จ: "+ke(t),"error")}}const wt={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},_t={};function Ce(e="success",t=null){try{const a=wt[e]?e:"error",n=t==="หญิง"?"female":"male",c=`${a}_${n}`;let i=_t[c];if(!i){const p="/pp5online/";i=new Audio(`${p}sounds/${wt[a][n]}`),_t[c]=i}i.currentTime=0,i.volume=1,i.play().catch(p=>console.warn("Play scan sound failed:",p))}catch(a){console.error("Play scan sound failed",a)}}function ot(e,t){const n=Ot(t==null?void 0:t.semester_start,[]).find(c=>c.days.some(i=>i.ds===e));return n?n.n:1}async function qa(e){var xe,h;const t=e;window._lastSuccessFeedbackHTML="",ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[a,n]=await Promise.all([Oe().catch(()=>({})),Xt().catch(()=>[])]);window._pp5SystemCfg=a;let c=!1;if(e.student_code)c=Ht(e,a);else if(e.teacher_code){const d=(a.prayerScannerTeachers||"").split(/[\s,]+/).map(E=>E.trim()).filter(Boolean);let _=null;try{const E=await qe.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();_=(E==null?void 0:E.data)??null}catch{}c=d.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(_==null?void 0:_.role)==="admin"}if(!c){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const i=!!e.teacher_code,p=!i&&Rt(e,a),S=dt(a,p);if(!i&&!rt(a,p)){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-100 text-3xl">
          🕌
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">นอกช่วงเวลาบันทึกกิจกรรมละหมาด</h3>
        <p class="text-xs text-gray-500 leading-relaxed">
          ระบบสแกนเปิดให้บันทึกเวลาเฉพาะช่วงเวลา <b>${S.startLabel} น. ถึง ${S.endLabel} น.</b> เท่านั้น<br>
          (ยกเว้นคุณครูที่สามารถเข้าใช้งานได้ตลอดเวลา)
        </p>
        <button id="scanner-btn-back-restricted" class="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl active:scale-95 transition-all shadow-sm">
          ← กลับหน้าหลัก
        </button>
      </div>`),(xe=document.getElementById("scanner-btn-back-restricted"))==null||xe.addEventListener("click",()=>{window._stuNav("overview")});return}const q=document.querySelector("nav.safe-area-bottom");q&&q.classList.add("hidden");const g=document.getElementById("sidebar"),A=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(g&&g.classList.add("hidden"),A&&A.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const D=Be(new Date);let j=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");j=j.filter(d=>d.check_date===D),localStorage.setItem("prayer_scan_history_today",JSON.stringify(j)),j.forEach(d=>window._syncedStudentIdsToday.add(d.student_id));let o=localStorage.getItem("prayer_scan_input_mode")||"camera",x=localStorage.getItem("prayer_scan_device_mode")||"single";const w=As(e),M=localStorage.getItem("prayer_scan_active_location");let b=w.some(d=>d.id===M)?M:((h=w[0])==null?void 0:h.id)||"musolla_male",$=localStorage.getItem("prayer_scan_record_status")||"pray",k=!1,C=!1;const U="/pp5online/prayer-scanner-amanah.png";function ne(){var we,ee;const d=Be(new Date),_=ot(d,a),E=w.map(f=>`
      <option value="${f.id}" ${b===f.id?"selected":""}>${f.icon} ${f.label}${f.detail?` (${f.detail})`:""}</option>
    `).join(""),N=w.map(f=>`
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
    `).join(""),l=`
      <!-- Flash green screen overlay -->
      <div id="scanner-flash" class="fixed inset-0 pointer-events-none z-50 bg-emerald-500 opacity-0 transition-opacity duration-150 hidden"></div>
      <div id="scanner-time-warning-border" class="hidden fixed inset-0 pointer-events-none z-[60] border-4 border-red-500 rounded-[2rem] animate-pulse"></div>

      ${i?"":`
      <div id="scanner-amanah-modal" class="fixed inset-0 z-[90] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
        <div class="w-full max-w-3xl max-h-[92vh] overflow-hidden bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col">
          <div class="flex-1 overflow-y-auto bg-emerald-950/5">
            <img id="scanner-amanah-poster" src="${U}" alt="นาซีฮัทถึงนักเรียนแกนนำผู้รับผิดชอบการสแกนละหมาด"
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

      ${i?"":`
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
              ${N}
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
          <p class="text-xs text-gray-400 mt-0.5">ผู้สแกน: ${e.full_name} · สัปดาห์ที่ ${_}</p>
        </div>
      </div>

      <div id="scanner-countdown-panel" class="${i?"bg-indigo-50 border-indigo-100 text-indigo-700":"bg-emerald-50 border-emerald-100 text-emerald-800"} rounded-2xl border px-4 py-3 mb-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <p class="text-[10px] font-bold uppercase tracking-wider opacity-70">${i?"สิทธิ์คุณครู":p?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-xs font-semibold mt-0.5">${i?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${S.startLabel} - ${S.endLabel} น.`}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <p class="text-[10px] font-bold opacity-70">เวลาคงเหลือ</p>
          <p id="scanner-countdown" class="font-mono text-2xl font-extrabold leading-none">${i?"∞":"--:--"}</p>
        </div>
      </div>

      <!-- Settings panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">ช่องทางสแกน</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-input-camera" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${o==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📷 ใช้กล้อง
              </button>
              <button id="opt-input-gun" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${o==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                🔌 ปืนยิงสแกน
              </button>
            </div>
          </div>
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">โหมดจอแสดงผล</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-device-single" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${x==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📱 เครื่องเดียว
              </button>
              <button id="opt-device-dual" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${x==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📡 แยกสองเครื่อง
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📍 จุดพื้นที่สแกนปัจจุบัน (Active Location)</label>
          <select id="opt-active-location" class="w-full text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            ${E}
          </select>
        </div>

        ${e.gender==="หญิง"||e.teacher_code?`
        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📝 สถานะบันทึกเมื่อสแกน (Record Status)</label>
          <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
            <button id="opt-status-pray" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${$==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟢 ละหมาดปกติ
            </button>
            <button id="opt-status-usor" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${$==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟣 บันทึกอูโซร
            </button>
          </div>
        </div>
        `:""}

        <!-- iPad Monitor Display Link -->
        <div id="dual-monitor-link-area" class="mt-3.5 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3 ${x==="dual"?"":"hidden"}">
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
      <div id="scanner-view-camera" class="relative overflow-hidden bg-slate-950 rounded-3xl w-full max-w-sm mx-auto aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4 ${o==="camera"?"":"hidden"}">
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

      <div id="scanner-view-gun" class="border border-dashed border-gray-300 bg-white rounded-3xl py-12 px-6 text-center shadow-sm mb-4 transition-all relative ${o==="gun"?"":"hidden"}">
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
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const f=parseInt(a.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(f)?Math.max(0,f):2})()} ครั้ง/เดือน/คน</p>
      </div>

      <!-- Active Check-In Popup Overlay -->
      <div id="scanner-feedback-container" class="hidden my-4 relative z-30 transition-all duration-300"></div>

      <!-- Roster Lookup Status -->
      <div id="roster-status" class="px-4 py-2 bg-gray-100 rounded-xl text-center text-[10px] text-gray-400 mb-4 border border-gray-200/50">
        บัญชีรายชื่อสภานักเรียน: โหลดแล้ว ${n.length} คน
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
    `,r=document.getElementById("stu-content")||document.getElementById("main-content");r&&(r.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${l}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{he(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),q&&q.classList.remove("hidden");const f=document.getElementById("sidebar"),I=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");f&&f.classList.remove("hidden"),I&&I.classList.add("md:ml-64"),e.teacher_code?$t(async()=>{const{renderPrayerAdmin:F}=await import("./views-ByctfHX1.js").then(G=>G.T);return{renderPrayerAdmin:F}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])).then(({renderPrayerAdmin:F})=>{F(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{de("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{de("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{me("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{me("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{se()});const u=document.getElementById("scanner-manual-code-input"),L=document.getElementById("btn-submit-manual-scan"),P=()=>{const f=u==null?void 0:u.value.trim();if(!f){K("กรุณากรอกรหัสนักเรียน","warning"),u==null||u.focus();return}u.value="",Le(f,{inputMethod:"manual"})};L==null||L.addEventListener("click",P),u==null||u.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),P())});const B=document.getElementById("opt-active-location");let O="";const ae=f=>{const I=document.getElementById("btn-confirm-scanner-location");I&&(I.disabled=!f,I.className=f?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},le=(f=b)=>{document.querySelectorAll(".scanner-location-choice").forEach(I=>{const F=I.dataset.location===f;I.className=`scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] ${F?"border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm":"border-gray-200 bg-white text-gray-700 hover:bg-gray-50"}`;const G=I.querySelector(".scanner-location-check");G&&(G.className=`scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold ${F?"border-emerald-500 bg-emerald-600 text-white":"border-gray-200 bg-white text-transparent"}`)})},V=(f,{toast:I=!1}={})=>{w.some(F=>F.id===f)&&(b=f,localStorage.setItem("prayer_scan_active_location",b),B&&(B.value=b),le(),I&&K("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};B==null||B.addEventListener("change",f=>{V(f.target.value,{toast:!0})}),document.querySelectorAll(".scanner-location-choice").forEach(f=>{f.addEventListener("click",()=>{O=f.dataset.location||"",V(O),le(O),ae(!!O)})}),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{fe("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{fe("usor")}));const Z=()=>{C||(C=!0,H(),ye(),o==="camera"?ve():$e())},z=()=>{const f=document.getElementById("scanner-location-modal");if(!f){Z();return}O="",le(""),ae(!1),f.classList.remove("hidden"),f.classList.add("flex")};(we=document.getElementById("btn-confirm-scanner-location"))==null||we.addEventListener("click",()=>{var f;if(!O){K("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}localStorage.setItem("prayer_scan_active_location",b),(f=document.getElementById("scanner-location-modal"))==null||f.remove(),Z()}),H();const ce=document.getElementById("scanner-amanah-modal");ce?(ee=document.getElementById("btn-ack-scanner-amanah"))==null||ee.addEventListener("click",()=>{ce.remove(),z()}):z()}function de(d){d!==o&&(o=d,localStorage.setItem("prayer_scan_input_mode",d),d==="camera"?(Ee(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),ve()):(he(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),$e()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${d==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${d==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function me(d){if(d===x)return;x=d,localStorage.setItem("prayer_scan_device_mode",d);const _=document.getElementById("dual-monitor-link-area");d==="dual"?_.classList.remove("hidden"):_.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${d==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${d==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function fe(d){if(d===$)return;$=d,localStorage.setItem("prayer_scan_record_status",d);const _=document.getElementById("opt-status-pray"),E=document.getElementById("opt-status-usor");_&&E&&(_.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${d==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,E.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${d==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),K(`เปลี่ยนโหมดบันทึกเป็น: ${d==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function ye(){if(i)return;const d=document.getElementById("scanner-countdown"),_=document.getElementById("scanner-countdown-panel"),E=document.getElementById("scanner-time-warning-border");if(!d||!_||!E)return;const N=()=>{const l=Ws(a,p);d.textContent=Ys(l);const r=l<=Qs;_.classList.toggle("bg-red-50",r),_.classList.toggle("border-red-200",r),_.classList.toggle("text-red-700",r),_.classList.toggle("bg-emerald-50",!r),_.classList.toggle("border-emerald-100",!r),_.classList.toggle("text-emerald-800",!r),E.classList.toggle("hidden",!r),l<=0&&(he(),Ee())};N(),window._activePrayerScannerState.countdownInterval=setInterval(N,1e3)}async function ve(){try{const d=await zt(),_=new d("camera-reader");window._activePrayerScannerState.html5Qrcode=_;let E=null,N=0;const l={fps:25,aspectRatio:1};await _.start({facingMode:"environment"},l,r=>{r===E&&Date.now()-N<1800||(E=r,N=Date.now(),Le(r))},()=>{})}catch(d){console.error("Camera open failed:",d),K("ไม่สามารถเปิดใช้งานกล้องได้: "+(d.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function he(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function $e(){const d=document.getElementById("scanner-gun-input");if(!d)return;d.focus();const _=setInterval(()=>{const E=document.getElementById("scanner-manual-code-input");document.activeElement!==d&&document.activeElement!==E&&document.getElementById("scanner-gun-input")&&d.focus()},1e3);window._activePrayerScannerState.focusInterval=_,d.addEventListener("keydown",E=>{if(E.key==="Enter"){E.preventDefault();const N=d.value.trim();d.value="",N&&Le(N)}})}function Ee(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}async function Le(d,_={}){if(console.log("[Scanner] Raw scanned text:",d),!d)return;const E=_.inputMethod==="manual"?"manual":"qr";if(!i&&!rt(a,p)){Ce("error"),pe(null,d,`ไม่อยู่ในช่วงเวลาบันทึกกิจกรรมละหมาด (${S.startLabel} - ${S.endLabel} น.)`);return}let N=String(d).trim(),l=!1;if(N.startsWith("SQ:")){const I=N.split(":");if(I.length===3){const[,F,G]=I,s=parseInt(G,10),m=Math.floor(Date.now()/1e3),T=m-s,R=parseInt(a.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${F}, QR Time: ${s}, Now: ${m}, Diff: ${T}s, Allowed Expiry: ${R}s`),(isNaN(s)||T>R||T<-R)&&(l=!0),N=F.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",I.length),Ce("error"),pe(null,d,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const r=n.find(I=>String(I.student_code).trim()===N);if(console.log("[Scanner] Lookup result for code:",N,r?r.full_name:"not found"),l){console.warn("[Scanner] QR Code has expired");const I=parseInt(a.studentQrExpirySeconds||"60",10);Ce("error",r==null?void 0:r.gender),pe(r,N,`QR Code นี้หมดอายุแล้ว (เกิน ${I} วินาที)`);return}if(!r){Ce("error"),pe(null,N,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const u=Rs(r,b);if(u){Ce("error",r.gender),pe(r,N,u);return}const L=Be(new Date),P=vt(t.main_room),B=vt(r.main_room),O=!!P&&!!B&&P===B;if(!i&&O&&Vs(r.gender,a)){Ce("error",r.gender),pe(r,N,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const ae=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(ae.some(I=>I.student_id===r.id&&I.check_date===L)){Ce("duplicate",r.gender),pe(r,N,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(r.id)){Ce("duplicate",r.gender),pe(r,N,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if(E==="manual"){const I=parseInt(a.prayerManualEntryMonthlyLimit??"2",10),F=Number.isFinite(I)?Math.max(0,I):2;if(F===0){Ce("error",r.gender),pe(r,N,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const G=ae.filter(s=>s.student_id!==r.id||s.input_method!=="manual"||!s.check_date?!1:String(s.check_date).slice(0,7)===L.slice(0,7)).length;try{if(await Zt(r.id,L)+G>=F){Ce("error",r.gender),pe(r,N,`ใช้สิทธิ์กรอกรหัสครบ ${F} ครั้งในเดือนนี้แล้ว`);return}}catch(s){console.warn("Manual prayer count check failed:",s),Ce("error",r.gender),pe(r,N,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}const V=ot(L,a);let Z=$,z="";Z==="usor"&&r.gender==="ชาย"&&(Z="pray",z=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const ce=t.teacher_code?`${t.full_name} (ครู)`:`${t.full_name} (รหัส ${t.student_code||"—"})`,we={student_id:r.id,main_room:r.main_room,check_date:L,status:Z,week_number:V,location:b,full_name:r.full_name,student_code:r.student_code,scanned_by:ce,input_method:E,scanner_code:t.teacher_code||t.student_code||null,scanner_name:t.full_name||null,scanner_room:t.main_room||null,scanner_gender:t.gender||null,same_room_flag:O};ae.push(we),localStorage.setItem("prayer_scan_queue",JSON.stringify(ae));let ee=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");ee=ee.filter(I=>I.check_date===L),ee.some(I=>I.student_id===r.id)||(ee.unshift({student_id:r.id,full_name:r.full_name,student_code:r.student_code,main_room:r.main_room,check_date:L,status:Z,input_method:E,same_room_flag:O}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(ee))),window._syncedStudentIdsToday.add(r.id),Ce("success",r.gender),X(),pe(r,N,`บันทึกสำเร็จลงเครื่องแล้ว${E==="manual"?" (กรอกรหัส)":""}${z}`,!0,Z),H(),se()}function pe(d,_,E,N=!1,l="pray"){const r=document.getElementById("scanner-feedback-container");if(r){if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),N&&d){const u=l==="usor",L=d.image_url?`<img src="${d.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${u?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${d.full_name.charAt(0)}</div>`,P=u?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';r.innerHTML=`
        <div class="bg-white/95 border ${u?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${L}
          <div class="flex-1 min-w-0">
            ${P}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${d.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${d.student_code} · ห้อง ${Me(d.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${E}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${d.id}" data-name="${d.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=r.innerHTML,Se(r)}else{const u=d?d.full_name:"ไม่พบข้อมูล",L=d?`รหัส ${d.student_code} · ห้อง ${Me(d.main_room)}`:`สแกนพบ: ${_}`;r.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${u}</h4>
            <p class="text-xs text-gray-500 truncate">${L}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${E}</p>
          </div>
        </div>`,r.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(r.innerHTML=window._lastSuccessFeedbackHTML,Se(r)):(r.innerHTML="",r.classList.add("hidden"))},3500);return}r.classList.remove("hidden")}}function Se(d){const _=d.querySelector("#btn-undo-scan");_&&_.addEventListener("click",()=>{const E=parseInt(_.dataset.sid,10),N=_.dataset.name;v(E,N)})}async function v(d,_){const E=Be(new Date);let N=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");N=N.filter(u=>!(u.student_id===d&&u.check_date===E)),localStorage.setItem("prayer_scan_queue",JSON.stringify(N));let l=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");l=l.filter(u=>!(u.student_id===d&&u.check_date===E)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(l)),window._syncedStudentIdsToday.delete(d),window._lastSuccessFeedbackHTML="";const r=document.getElementById("scanner-feedback-container");r&&(r.innerHTML="",r.classList.add("hidden")),H(),K(`กำลังยกเลิกรายการของ ${_}...`,"info");try{const{error:u}=await qe.from("prayer_records").delete().eq("student_id",d).eq("check_date",E).is("teacher_id",null);if(u)throw u;K(`ยกเลิกบันทึกของ ${_} สำเร็จ ✕`,"success")}catch(u){console.warn("Failed to delete from server (offline?):",u),K("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function X(){const d=document.getElementById("scanner-flash");d&&(d.classList.remove("hidden","opacity-0"),d.classList.add("opacity-40"),setTimeout(()=>{d.classList.remove("opacity-40"),d.classList.add("opacity-0"),setTimeout(()=>d.classList.add("hidden"),150)},120))}function H(d=!1){const _=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let E=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const N=Be(new Date);E=E.filter(B=>B.check_date===N);const l=document.getElementById("scan-count-badge");l&&(l.textContent=`${E.length} คน`);const r=document.getElementById("sync-indicator"),u=document.getElementById("sync-title"),L=document.getElementById("sync-desc");if(!r||!u||!L)return;d?(r.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",u.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",L.textContent=`กำลังส่งข้อมูล ${_.length} คนขึ้นเซิร์ฟเวอร์`):_.length>0?(r.className="w-2.5 h-2.5 rounded-full bg-amber-500",u.textContent=`ค้างส่ง ${_.length} รายการ (ออฟไลน์)`,L.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(r.className="w-2.5 h-2.5 rounded-full bg-emerald-500",u.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",L.textContent="พร้อมบันทึกประวัติละหมาด");const P=document.getElementById("scan-list");P&&(E.length===0?P.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(P.innerHTML=E.map((B,O)=>{const ae=_.some(ce=>ce.student_id===B.student_id),le=B.status==="usor",V=B.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",Z=B.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",z=ae?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':le?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${E.length-O}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${B.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${B.student_code} · ห้อง ${Me(B.main_room)}</p>
              </div>
              ${V}
              ${Z}
              ${z}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${B.student_id}" data-name="${B.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),P.querySelectorAll(".btn-cancel-scan-row").forEach(B=>{B.addEventListener("click",()=>{const O=parseInt(B.dataset.sid,10),ae=B.dataset.name||"นักเรียน";v(O,ae)})})))}async function se(){if(k)return;const d=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(d.length){k=!0,H(!0);try{const _=await Et(d);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),_!=null&&_.skippedCount?K(`ซิงก์สำเร็จ (ข้าม ${_.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):K("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(_){console.warn("Sync failed, offline backup kept:",_)}finally{k=!1,H()}}}const oe=setInterval(()=>{se()},8e3);window._activePrayerScannerState.syncInterval=oe,ne()}async function Ma(e){if(!(e!=null&&e.can_scan_prayer)){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let t={},a=Be(new Date),n=[];const c=o=>{if(!o)return"—";const x=new Date(o);return`${String(x.getHours()).padStart(2,"0")}:${String(x.getMinutes()).padStart(2,"0")}`},i=(o,x)=>{const w=new Date(o+"T00:00:00");return w.setDate(w.getDate()+x),Be(w)};async function p(){try{n=await ys(e.student_code,a)}catch(x){n=[],K("โหลดข้อมูลไม่สำเร็จ: "+ke(x),"error")}const o=document.getElementById("sh-search-input");S((o==null?void 0:o.value.trim())??"")}function S(o=""){var b,$;const x=document.getElementById("sh-list"),w=document.getElementById("sh-count");if(!x)return;w&&(w.textContent=`${n.length} คน`);const M=o?n.filter(k=>{var C;return String(((C=k.students)==null?void 0:C.student_code)??"").includes(o)}):n;if(o&&!M.length){x.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${W(o)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(b=document.getElementById("sh-resave-btn"))==null||b.addEventListener("click",()=>A(o)),($=document.getElementById("sh-report-btn"))==null||$.addEventListener("click",()=>D(o));return}if(!M.length){x.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}x.innerHTML=M.map(k=>{const C=k.students??{},U=Ge[k.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:k.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${C.image_url?`<img src="${C.image_url}" class="w-full h-full object-cover"/>`:W((C.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${W(C.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${W(C.student_code??"—")} · ${W(C.religion_room??C.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${U.cls}" title="${W(U.title)}">${U.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${c(k.created_at)}</p>
        </div>
      </div>`}).join("")}async function q(){window._activePrayerScannerState={html5Qrcode:null};try{const o=await zt(),x=new o("sh-camera-reader");window._activePrayerScannerState.html5Qrcode=x,await x.start({facingMode:"environment"},{fps:25,aspectRatio:1},w=>{var $;let M=String(w).trim();M.startsWith("SQ:")&&(M=M.split(":")[1]??M),g(),($=document.getElementById("sh-camera-wrap"))==null||$.classList.add("hidden");const b=document.getElementById("sh-search-input");b&&(b.value=M),S(M)},()=>{})}catch(o){K("ไม่สามารถเปิดกล้องได้: "+(o.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function g(){var o;(o=window._activePrayerScannerState)!=null&&o.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function A(o){var $;let x=null;try{x=await ut(o)}catch{}if(!x){K("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}($=document.getElementById("sh-resave-modal"))==null||$.remove();const w=document.createElement("div");w.id="sh-resave-modal",w.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const M=Object.entries(Ge);w.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${W(x.full_name)} (รหัส ${W(x.student_code)})<br/>${W(x.religion_room??x.main_room??"—")} · วันที่ ${a}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${M.map(([k,C],U)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${U===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${k}">${C.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(w);let b=M[0][0];w.querySelectorAll(".sh-status-btn").forEach(k=>{k.addEventListener("click",()=>{b=k.dataset.status,w.querySelectorAll(".sh-status-btn").forEach(C=>{C.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),C.classList.add("border-gray-200","text-gray-500")}),k.classList.remove("border-gray-200","text-gray-500"),k.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),w.querySelector("#sh-resave-cancel").addEventListener("click",()=>w.remove()),w.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const k=w.querySelector("#sh-resave-confirm");k.disabled=!0,k.textContent="กำลังบันทึก...";try{const C={student_id:x.id,main_room:x.main_room,check_date:a,status:b,week_number:ot(a,t),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await Et([C]),K("บันทึกสำเร็จ ✅","success"),w.remove(),await p()}catch(C){K("บันทึกไม่สำเร็จ: "+ke(C),"error"),k.disabled=!1,k.textContent="บันทึก"}})}async function D(o){let x=null;try{x=await ut(o)}catch{}const M=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${x?`${x.full_name} (รหัส ${x.student_code}) ห้องศาสนา ${x.religion_room??x.main_room??"—"}`:`รหัสนักเรียน ${o} (ไม่พบชื่อในระบบ)`} วันที่ ${a} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(M):K("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function j(){t=await Oe().catch(()=>({})),ie(`
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
          <input type="date" id="sh-date" value="${a}" class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"/>
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
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async o=>{a=o.target.value,document.getElementById("sh-search-input").value="",await p()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{a=i(a,-1),document.getElementById("sh-date").value=a,document.getElementById("sh-search-input").value="",await p()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{a=i(a,1),document.getElementById("sh-date").value=a,document.getElementById("sh-search-input").value="",await p()}),document.getElementById("sh-search-input").addEventListener("input",o=>{S(o.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const o=document.getElementById("sh-camera-wrap");o.classList.toggle("hidden"),o.classList.contains("hidden")?g():q()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var o;g(),(o=document.getElementById("sh-camera-wrap"))==null||o.classList.add("hidden")}),await p()}j()}export{Ia as completeGoogleEmailLink,Ca as openEmailLinkPrompt,La as renderExamRequestForm,Ks as renderStudentAllAssignments,Us as renderStudentMyScores,Ea as renderStudentOverview,Ma as renderStudentPrayerScanHistory,qa as renderStudentPrayerScanner,ja as renderStudentProfile,Zs as renderStudentRequests,Xs as renderStudentSubjectDetail,nt as renderStudentSubjects};
