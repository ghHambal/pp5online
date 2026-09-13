const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-Cf_Y4s92.js","assets/supabase-BV-W2lsh.js","assets/views-Et56asKJ.js","assets/ui-FQqAmrdo.js","assets/version.js_v_10.22-ffVTG8-v.js","assets/leave-monitor.js_v_10.18-Dilj5yL_.js","assets/leave-time-CrS9gT63.js","assets/sports-portals.js_v_10.22-D7ID6515.js","assets/impersonation-BOpkwoRR.js","assets/storage-D6nkcVz6.js","assets/browser-JP79f-a9.js","assets/teacher-views-utils-BWmONzsh.js","assets/teacher-views-grades-YSTUQyr0.js","assets/regrade-api-C8s-TuM0.js","assets/score-qr-scanner-eQmyTC7-.js","assets/teacher-views-classes-dyQ0iCt1.js","assets/pp5-doc-DfU8adgJ.js","assets/teacher-views-attendance-3FnuSi2-.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-jqu-uPJr.js","assets/import-D0GLDW1_.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azfutsal-modal-3jBbVg9C.js"])))=>i.map(i=>d[i]);
import{_ as mt,g as ge}from"./ui-FQqAmrdo.js";import{c as pt,d as jt,s as ut,e as Ct,f as ze,h as It,i as qt,j as Mt,k as Tt,l as Bt,m as Dt,n as Nt,b as Xe,o as At,p as Pt,q as xt,r as Ht,u as bt,t as gt,v as Rt,w as Ot,x as zt,y as Ft,z as Gt,A as Qt,B as Vt,C as Wt,D as Ut,E as Yt,F as Jt,G as Kt,H as Xt,I as at}from"./student-api-GdZ3AenK.js";import{g as Zt}from"./theme-DIdoXkqD.js";import{getSystemConfig as Ie,submitQrReissueRequest as es,notifyQrReissueManagers as ts,notifySubjectGroupAdmins as ss}from"./api-Cf_Y4s92.js";import{_dateInputValue as ft,_currentWeek as as,applyReadingGradesFromConfig as rs,_readingGrade as ns,renderIconTile as ke}from"./teacher-views-utils-BWmONzsh.js";import{i as yt,j as vt,k as ht,r as wt}from"./quiz-api-DaBneRGn.js";import{f as os}from"./leave-time-CrS9gT63.js";import{n as ls}from"./storage-D6nkcVz6.js";import{A as ds}from"./version.js_v_10.22-ffVTG8-v.js";import{s as he}from"./supabase-BV-W2lsh.js";import{b as is}from"./browser-JP79f-a9.js";import{g as cs}from"./regrade-api-C8s-TuM0.js";import{y as ms,o as ps}from"./certificate-engine-R4UFir_Q.js";import{o as us}from"./azfutsal-modal-3jBbVg9C.js";const Qe=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function _t(e){var I;(I=document.getElementById("my-certificates-modal"))==null||I.remove();const t=document.body.style.overflow;document.body.style.overflow="hidden";const s=document.createElement("div");s.id="my-certificates-modal",s.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",s.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const o=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=t,s.remove()},l=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",l),document.body.appendChild(s),s.querySelector("[data-mycert-close]").addEventListener("click",o);const c=s.querySelector("#my-certificates-body"),i=[];(await ms(e.id).catch(()=>[])).forEach(r=>i.push({key:`central-${r.id}`,emoji:"🏅",title:r.title||"เกียรติบัตร",sub:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>ps({layout:r.layout_snapshot,variables:{name:e.full_name,date:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:r.certificate_no,...r.variables},docTitle:r.title})}));const B=await pt(e.main_room).catch(()=>null),b=B&&Number(B.head_student_id)===Number(e.id),P=B&&Number(B.vice_head_student_id)===Number(e.id),H=b?B==null?void 0:B.head_cert_url:P?B==null?void 0:B.vice_head_cert_url:null;H&&i.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${b?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(H,"_blank")});try{const{data:r}=await he.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(r){const[{data:p},{data:k}]=await Promise.all([he.rpc("get_my_sports_eligibility",{p_event:r.id}).then(E=>E.error?null:E.data).catch(()=>null),he.from("outstanding_athletes").select("id, note, sports(name)").eq("event_id",r.id).eq("student_id",e.id).then(E=>E.data??[]).catch(()=>[])]);p!=null&&p.eligible&&(p!=null&&p.certificate_url)&&i.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(p.certificate_url,"_blank")}),k.forEach(E=>{var f;return i.push({key:`sports-award-${E.id}`,emoji:"🏆",title:((f=E.sports)==null?void 0:f.name)||"รางวัลนักกีฬาดีเด่น",sub:E.note||"",onOpen:null})})}}catch{}i.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>us(e.student_code)}),c.innerHTML=i.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${i.map(r=>`
        <div data-key="${Qe(r.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${r.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${r.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${Qe(r.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${Qe(r.sub||"")}</p>
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',i.forEach(r=>{var p;r.onOpen&&((p=c.querySelector(`[data-key="${CSS.escape(r.key)}"]`))==null||p.addEventListener("click",r.onOpen))})}const we=e=>(e??"").replace(/\/\d+/,"").trim(),Te=e=>!e.mySubmission||e.mySubmission.status==="rejected",ee=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function le(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function K(e,t="info"){const s={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},o=document.createElement("div");o.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${s[t]??s.info} transition-all`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2800)}const xs={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},bs={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},Ce={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Oe=["อา","จ","อ","พ","พฤ","ศ","ส"],Be={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},Ve=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function gs(e){if(e!=null&&e.teacher_code)return Ve;const t=String((e==null?void 0:e.gender)||"").trim(),s=Ve.filter(o=>o.genders.includes(t));return s.length?s:Ve}function fs(e){const t=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!t)return{grade:null,isVoc:!1};const s=t.match(/^ม\.?([1-6])/);return{grade:s?parseInt(s[1],10):null,isVoc:t.startsWith("ปวช")}}function ys(e,t){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:s,isVoc:o}=fs(e),l=t==="musolla_male",c=t==="masjid_kuwait";return!l&&!c?"":c&&!(s===6||o)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":l&&!(s>=1&&s<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function rt(e){const s=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(s.slice(0,2),16),g:parseInt(s.slice(2,4),16),b:parseInt(s.slice(4,6),16)}}function vs({r:e,g:t,b:s}){return"#"+[e,t,s].map(o=>Math.max(0,Math.min(255,Math.round(o))).toString(16).padStart(2,"0")).join("")}function Ae(e,t,s){const o=rt(e),l=rt(t);return vs({r:o.r+(l.r-o.r)*s,g:o.g+(l.g-o.g)*s,b:o.b+(l.b-o.b)*s})}function je(e){if(!e)return"—";const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()+543}`}function We(e){if(!e)return"";const t=new Date(e),s=new Date;t.setHours(0,0,0,0),s.setHours(0,0,0,0);const o=Math.round((t-s)/864e5);return o>1?`อีก ${o} วัน`:o===1?"พรุ่งนี้":o===0?"วันนี้":o===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(o)} วัน`}function hs(e){var l,c,i;const t=((l=e.master_subjects)==null?void 0:l.subject_group)??"",s=e.skill_group??"";return(((i=(c=e.master_subjects)==null?void 0:c.teachers)==null?void 0:i.category)??"")==="ศาสนา"||t==="AGM"||t==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:t==="ACDMVOC"||s==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:s==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:s==="ชีวิต"?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:s==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function ws(e,t={}){var B,b,P;const s=((B=e.master_subjects)==null?void 0:B.subject_group)??"",o=e.skill_group??"",l=((P=(b=e.master_subjects)==null?void 0:b.teachers)==null?void 0:P.category)??"",c=l==="ศาสนา"||s==="AGM"||s==="AGMVOC"?t.teacherReligionColor||"#b45309":s==="ACDMVOC"||o==="สามัญปวช"?t.teacherVocColor||"#7c3aed":o==="ภาษา"?t.teacherLanguageColor||"#2563eb":o==="ชีวิต"?t.teacherLifeColor||"#059669":o==="วิชาการ"?t.teacherAcademicColor||"#ea580c":t.teacherDefaultColor||"#059669",i=l==="ศาสนา"||s==="AGM"||s==="AGMVOC"?s==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":s==="ACDMVOC"||o==="สามัญปวช"?"กลุ่มสามัญ ปวช":o?`กลุ่มทักษะ: ${o}`:"กลุ่มวิชาสามัญ",T=i.replace("กลุ่มทักษะ: ","");return{color:c,label:i,short:T,bg:Ae(c,"#ffffff",.9),badgeBg:Ae(c,"#ffffff",.86),border:Ae(c,"#ffffff",.35),text:Ae(c,"#000000",.35)}}function Ue(e=0){const t=new Date,s=t.getDay(),o=new Date(t);o.setDate(t.getDate()-(s===0?6:s-1)),o.setDate(o.getDate()+e*7);const l=new Date(o);l.setDate(o.getDate()-1);const c={};c[0]=l;for(let i=1;i<=7;i++){const T=new Date(o);T.setDate(o.getDate()+i-1),c[i]=T}return c}function Pe(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const $t="12:20",_s="12:50",$s="13:05",Ss=60;function Re(e,t){const o=String(e||t||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return Re(t,$t);const l=Math.max(0,Math.min(23,parseInt(o[1],10))),c=Math.max(0,Math.min(59,parseInt(o[2],10)));return l*60+c}function nt(e){const t=(e%1440+1440)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Le(e){return String(e||"").split(/[\s,]+/).map(t=>t.trim()).filter(Boolean)}function ot(e,t=!1){return e==null||e===""?t:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function ks(e,t={}){return String(e||"").trim()==="หญิง"?ot(t.prayerSameRoomGuardFemaleEnabled,!1):ot(t.prayerSameRoomGuardMaleEnabled,!0)}function lt(e){return String(e||"").replace(/\s+/g,"").trim()}function St(e,t={}){return e!=null&&e.student_code?Le(t.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function kt(e,t={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const s=String(e.student_code).trim(),o=Le(t.prayerScannerSun),l=Le(t.prayerScannerMon),c=Le(t.prayerScannerTue),i=Le(t.prayerScannerWed),T=Le(t.prayerScannerThu);if(!(o.includes(s)||l.includes(s)||c.includes(s)||i.includes(s)||T.includes(s)))return!0;const b=new Date().getDay();return!!(b===0&&o.includes(s)||b===1&&l.includes(s)||b===2&&c.includes(s)||b===3&&i.includes(s)||b===4&&T.includes(s))}function Ze(e={},t=!1){const s=Re(e.prayerScanStartTime,$t),o=Re(e.prayerScanEndTime,_s),l=Re(e.prayerScanExtendedEndTime,$s),c=t?l:o;return{start:s,end:c,startLabel:nt(s),endLabel:nt(c)}}function Ye(e={},t=!1){const s=new Date,o=s.getHours(),l=s.getMinutes(),c=o*60+l,{start:i,end:T}=Ze(e,t);return T<i?c>=i||c<=T:c>=i&&c<=T}function Es(e={},t=!1){const s=new Date,o=s.getHours()*3600+s.getMinutes()*60+s.getSeconds(),{start:l,end:c}=Ze(e,t),i=l*60;let T=c*60,B=o;return c<l&&B<i&&(B+=86400),c<l&&(T+=86400),Math.max(0,T-B)}function Ls(e){const t=Math.floor(e/60),s=e%60;return`${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function Se(e){var i,T;let t=e.getFullYear();const s=((i=window._pp5SystemCfg)==null?void 0:i.academicYear)||((T=window._pp5SystemCfg)==null?void 0:T.academic_year)||2569,o=parseInt(s)-543;(t>2030||t<2024)&&(t=o);const l=String(e.getMonth()+1).padStart(2,"0"),c=String(e.getDate()).padStart(2,"0");return`${t}-${l}-${c}`}function Et(e,t=[]){const s=t.map(i=>i.check_date).filter(Boolean).sort()[0],o=e||s||new Date().toISOString().slice(0,10),l=new Date(o);l.setHours(0,0,0,0);const c=l.getDay();return c&&l.setDate(l.getDate()-c),Array.from({length:20},(i,T)=>{const B=Array.from({length:5},(b,P)=>{const H=new Date(l);return H.setDate(l.getDate()+T*7+P),{date:H,ds:Se(H),day:Oe[P]}});return{n:T+1,days:B}})}function dt(e,t){const s=Object.fromEntries((t??[]).map(o=>[o.column_id,o.score]));return(e??[]).map(o=>({...o,score:s[o.id]??null}))}async function Zs(e){var fe,y,Z,W,te;le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,o,l,c,i,T,B]=await Promise.all([ze(e.id).catch(()=>[]),Xe(e.id).catch(()=>[]),Qt(e.id).catch(()=>({linked:[],unlinked:[]})),Vt(e.id).catch(()=>[]),Wt(e.id).catch(()=>({samai:[],sasana:[]})),Ie().catch(()=>({})),pt(e.main_room).catch(()=>null),gt(e.id).catch(()=>[])]),b=B.filter(Te).sort((m,h)=>(m.due_at?new Date(m.due_at).getTime():1/0)-(h.due_at?new Date(h.due_at).getTime():1/0)),P=s.filter(m=>m.status==="pending"),H=s.slice(0,3),I=St(e,i),r=await Promise.all(t.map(m=>yt(m.id,e.id).catch(()=>[]))),p=t.flatMap((m,h)=>(r[h]??[]).map(S=>({...S,_class:m}))),k=await vt(p.map(m=>m.id),e.id).catch(()=>new Set),E=p.filter(m=>{if(m.status!=="started"||k.has(m.id))return!1;const h=m.attempts.filter(n=>n.status==="submitted"||n.status==="terminated_violation").length;return!(m.attempts.length&&m.attempts[m.attempts.length-1].status==="terminated_violation")&&h<m.max_attempts}),f=T&&Number(T.head_student_id)===Number(e.id),C=T&&Number(T.vice_head_student_id)===Number(e.id),L=(i.council_test_student_codes||"").split(/[\s,]+/).map(m=>m.trim()).filter(Boolean),_=i.council_visible_to_all!=="false"||L.includes(e.student_code);let X=!1;try{const{data:m,error:h}=await he.rpc("get_terangganu_access");h||(X=(m==null?void 0:m.visible)===!0&&(m==null?void 0:m.student_allowed)===!0)}catch{X=!1}let ae=!1,de=0;try{const[m,h]=await Promise.all([cs(),Promise.resolve(he.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);ae=((fe=m.visibility)==null?void 0:fe.student_menu)===!0,de=Number(h==null?void 0:h.count)||0}catch{ae=!1,de=0}let V=!0;try{const{data:m}=await he.from("settings").select("value").eq("key","sports_visibility").maybeSingle();m!=null&&m.value&&(V=m.value.enabled!==!1&&m.value.student_menu!==!1)}catch{V=!0}let oe=!1;try{const{data:m}=await he.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();oe=!!m}catch{oe=!1}let ce=!1;try{const{data:m}=await he.from("attendance_delegates").select("id, classes!inner(attendance_delegate_enabled)").eq("student_id",e.id).eq("classes.attendance_delegate_enabled",!0).limit(1);ce=!!(m!=null&&m.length)}catch{ce=!1}le(`
    <!-- Profile card -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 mb-4 flex items-center gap-4 sm:gap-6">
      <div class="w-14 h-20 rounded-t-2xl rounded-b-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover object-top"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <p class="font-bold text-gray-800 text-base truncate">${e.full_name}</p>
          ${f?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
              👑 หัวหน้าห้อง
            </span>
          `:""}
          ${C?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              🥈 รองหัวหน้าห้อง
            </span>
          `:""}
        </div>
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${e.student_code} · ${we(e.main_room??"—")}</p>
      </div>
    </div>

    <!-- ระบบอื่น ๆ — กริดไอคอนแอปเลื่อนแนวนอนได้ถ้ามีมากกว่าที่จอแสดงพอดี (sportsVisible/councilVisible/
         terangganuVisible/regradeVisible/can_scan_prayer ล้วนเปิด-ปิดแยกอิสระ รวมกันอาจเกิน 4 ช่องได้)
         — เกียรติบัตรแสดงเสมอ ส่วนที่เหลือ conditional เหมือนเดิมทุกประการ แค่เปลี่ยนรูปแบบจากแบนเนอร์
         เต็มแถว/แถบเมนูล่างถาวร (กีฬาสี) มาเป็นไอคอน -->
    <div class="mb-4">
      <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</p>
      ${[V,oe,_,X,ae,e.can_scan_prayer,ce].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${ke({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},i.iconTileStyle)}
        ${V?ke({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},i.iconTileStyle):""}
        ${oe?ke({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},i.iconTileStyle):""}
        ${_?ke({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},i.iconTileStyle):""}
        ${X?ke({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},i.iconTileStyle):""}
        ${ae?ke({id:"student-regrade-tile",emoji:"📋",label:"แก้ค้างเก่า",from:"#FBD0D6",to:"#E0616F",badge:de,onclick:"window.location.href='regrade.html'"},i.iconTileStyle):""}
        ${e.can_scan_prayer?ke({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},i.iconTileStyle):""}
        ${ce?ke({id:"student-attendance-delegate-tile",emoji:"✅",label:"เช็คชื่อ<br>แทนครู",from:"#CDEBD6",to:"#4CA778",onclick:"window._stuNav('attendance_delegate')"},i.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${kt(e,i)&&Ye(i,I)?`
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
    ${E.map(m=>{var S,n;const h=m.attempts.some(x=>x.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${h?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${ee(m.title)} · ${ee(((n=(S=m._class)==null?void 0:S.master_subjects)==null?void 0:n.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${m.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
          ${h?"ทำต่อ →":"เข้าสอบ →"}
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
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${P.length}</p>
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
      ${(()=>{const m=`stu_ann_seen_${e.id}`,h=new Set(JSON.parse(localStorage.getItem(m)??"[]")),S=l.filter(n=>!h.has(n.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${l.length} รายการ</p>
          ${S>0?`<span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">${S}</span>`:""}
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
    ${(()=>{const m=b.length>0,h=b[0],S=h!=null&&h.due_at?new Date(h.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${m?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${m?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${m?`ค้างอยู่ ${b.length} ชิ้น · ใกล้สุด: ${ee(h.title)}${S?` (${S})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const h=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],S=new Date,n=S.getHours()*3600+S.getMinutes()*60+S.getSeconds(),x=w=>{if(!w)return null;const[N,J]=w.split(":").map(Number);return N*3600+J*60},j=o.linked.map(({cls:w,sched:N,period:J})=>{var G,z;const R=w==null?void 0:w.master_subjects,re=x(J==null?void 0:J.start_time),v=x(J==null?void 0:J.end_time),a=re!=null&&v!=null&&n>=re&&n<v,d=v!=null&&n>=v,D=a?"🟢":d?"✅":"⬜",$=J?`${(G=J.start_time)==null?void 0:G.slice(0,5)}–${(z=J.end_time)==null?void 0:z.slice(0,5)}`:`คาบ ${N.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${D}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${N.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(R==null?void 0:R.subject_name)??N.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${$} · ${(w==null?void 0:w.class_name)??""}</p>
          </div>
          ${a?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),q=l.filter(w=>w.ann_type==="deadline"&&w.deadline_at&&new Date(w.deadline_at)>S).sort((w,N)=>new Date(w.deadline_at)-new Date(N.deadline_at)).slice(0,5),Y=w=>{const N=new Date(w)-S,J=Math.floor(N/6e4);if(J<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${J} น.</span>`;const R=Math.floor(J/60);return R<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${R} ชม. ${J%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(R/24)} วัน</span>`},u=q.map(w=>{var J,R;const N=(J=w.cls)==null?void 0:J.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${w.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(N==null?void 0:N.subject_name)??""} · ${((R=w.cls)==null?void 0:R.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${Y(w.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${h}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${S.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${j?`
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${j}</div>`:'<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>'}
        ${u?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${u}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${H.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${H.map(m=>{var n;const h=Ce[m.status]??Ce.pending,S=m.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${((n=S==null?void 0:S.master_subjects)==null?void 0:n.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${m.request_type} · ${je(m.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${h.cls}">${h.label}</span>
            </div>
          </div>`}).join("")}
      </div>
    </div>`:`
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `);const ie=document.getElementById("stu-live-clock");if(ie){const m=()=>{const S=new Date;ie.textContent=`${String(S.getHours()).padStart(2,"0")}:${String(S.getMinutes()).padStart(2,"0")}:${String(S.getSeconds()).padStart(2,"0")}`};m();const h=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(h);return}m()},1e3)}const pe=(m,h)=>{const S=document.createElement("div");return S.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",S.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${m}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${h}</div>`,document.body.appendChild(S),S.querySelector("#stu-popup-back").addEventListener("click",()=>S.remove()),S},ye=o.linked.find(({period:m})=>{if(!(m!=null&&m.start_time)||!(m!=null&&m.end_time))return!1;const h=new Date,S=h.getHours()*3600+h.getMinutes()*60+h.getSeconds(),[n,x]=m.start_time.split(":").map(Number),[j,q]=m.end_time.split(":").map(Number);return S>=n*3600+x*60&&S<j*3600+q*60});if(ye){const m=(()=>{const[S,n]=ye.period.end_time.split(":").map(Number);return S*3600+n*60})(),h=setInterval(()=>{const S=document.getElementById("stu-period-countdown");if(!S){clearInterval(h);return}const n=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),x=Math.max(0,m-n);if(x===0){S.textContent="หมดคาบ",clearInterval(h);return}const j=Math.floor(x/3600),q=Math.floor(x%3600/60),Y=x%60;S.textContent=`${String(j).padStart(2,"0")}:${String(q).padStart(2,"0")}:${String(Y).padStart(2,"0")}`},1e3)}const _e={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},ue=m=>{if(!m)return"";const h=new Date(m),n=Math.floor((h-new Date)/6e4),x=h.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if(n<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${x}</span>`;if(n<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${n} น. · ${x}</span>`;const j=Math.floor(n/60);return j<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${j} ชม. ${n%60} น. · ${x}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(j/24)} วัน · ${x}</span>`};(y=document.getElementById("btn-stu-my-certificates"))==null||y.addEventListener("click",()=>_t(e)),(Z=document.getElementById("btn-stu-anns"))==null||Z.addEventListener("click",()=>{const m=`stu_ann_seen_${e.id}`,h=new Set(JSON.parse(localStorage.getItem(m)??"[]"));l.forEach(x=>h.add(x.id)),localStorage.setItem(m,JSON.stringify([...h]));const S=document.querySelector("#btn-stu-anns span.absolute");S&&S.remove();const n=l.length?`<div class="space-y-3">${l.map(x=>{var Y,u,w;const j=_e[x.ann_type]??_e.general,q=(Y=x.cls)==null?void 0:Y.master_subjects;return`<div class="rounded-2xl border ${j.border} ${j.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${x.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${j.icon} ${j.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(q==null?void 0:q.subject_name)??""} · ${((u=x.cls)==null?void 0:u.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${x.title??""}</p>
        ${x.body?`<p class="text-xs text-gray-500 mt-1">${x.body}</p>`:""}
        ${x.ann_type==="deadline"&&x.deadline_at?`<div class="mt-2">${ue(x.deadline_at)}</div>`:""}
        ${x.file_url?`<a href="${x.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(w=x.attachment_urls)!=null&&w.length?`<div class="flex flex-wrap gap-1.5 mt-2">${x.attachment_urls.map(N=>`<a href="${ee(N.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${ee(N.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';pe("📢 ประกาศของฉัน",n)}),(W=document.getElementById("btn-stu-gpa"))==null||W.addEventListener("click",()=>{const m=v=>{const a=v.filter($=>$.grade!=null);if(!a.length)return null;const d=a.reduce(($,G)=>$+(G.credit||1),0),D=a.reduce(($,G)=>$+G.grade*(G.credit||1),0);return d>0?(D/d).toFixed(2):null},h=v=>v==null?"text-gray-400":v>=3.5?"text-emerald-600":v>=3?"text-blue-500":v>=2?"text-amber-600":"text-red-500",S=v=>v>=3.5?"ดีเยี่ยม":v>=3?"ดี":v>=2?"พอใช้":v>=1?"ผ่าน":"ไม่ผ่าน",n=v=>v.grade==null&&v.totalCols>0?`<span class="text-[10px] font-semibold text-amber-500 whitespace-nowrap" title="ครูให้คะแนนแล้ว ${v.scoredCount}/${v.totalCols} ช่อง — วิชานี้ยังไม่ถูกนับเข้าเกรดเฉลี่ยจนกว่าจะครบ">⏳ ${v.scoredCount}/${v.totalCols} · ยังไม่นับเข้า GPA</span>`:null,x=(v,a,d)=>{const $=v.filter(z=>z.grade!=null).reduce((z,U)=>z+(U.credit||1),0),G=parseFloat(a);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${d}" class="text-5xl font-extrabold ${a?h(G):"text-gray-300"} hover:opacity-70 transition">${a??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${a?h(G):"text-gray-400"}">${a?S(G):"—"}</p>
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
            ${v.map((z,U)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${U+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${z.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${z.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${z.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${z.score!=null?z.score:n(z)??"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${h(z.grade)}">${z.grade!=null?z.grade.toFixed(1):n(z)?"":"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${z.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${z.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${$}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${$}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${h(a?G:null)}">${a??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},j=(v,a,d)=>{const D=parseFloat(a);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${d}" class="text-5xl font-extrabold ${a?h(D):"text-gray-300"} hover:opacity-70 transition">${a??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${a?h(D):"text-gray-400"}">${a?S(D):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${v.length?`
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${v.map($=>`
        <button class="gpa-pp5-btn text-left border border-gray-200 rounded-2xl p-3 hover:shadow-md transition bg-white" data-class-id="${$.classId}">
          <p class="text-[10px] text-gray-400 font-mono truncate">${$.subjectCode??""}</p>
          <p class="font-bold text-xs text-gray-800 leading-tight line-clamp-2 mt-0.5 min-h-[2rem]">${$.subjectName}</p>
          <div class="flex items-center justify-between mt-2 gap-1">
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${$.credit} นก. ${$.hasRetake?"· แก้":""}</span>
            ${n($)??`<span class="text-lg font-extrabold ${h($.grade)}">${$.grade!=null?$.grade.toFixed(1):"—"}</span>`}
          </div>
        </button>`).join("")}
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},q=m(c.samai),Y=m(c.sasana),u=v=>{const a=v==="samai"?c.samai:c.sasana,d=v==="samai"?q:Y;return(localStorage.getItem("studentGpaView")==="card"?"card":"table")==="card"?j(a,d,v):x(a,d,v)},w=`
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
      <div id="gpa-pop-samai">${u("samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${u("sasana")}</div>`,N=pe("🎓 เกรดเฉลี่ยของฉัน",w),J=()=>{N.querySelectorAll(".gpa-pp5-btn").forEach(v=>{v.addEventListener("click",()=>{var d;const a=Number(v.dataset.classId);N.remove(),(d=window._stuOpenClass)==null||d.call(window,a)})}),["samai","sasana"].forEach(v=>{const a=N.querySelector(`#gpa-val-btn-${v}`);a&&a.addEventListener("click",()=>{const D=(v==="samai"?c.samai:c.sasana).filter(M=>M.grade!=null),$=D.reduce((M,O)=>M+(O.credit||1),0),G=D.reduce((M,O)=>M+O.grade*(O.credit||1),0),z=$>0?(G/$).toFixed(2):"—",U=document.createElement("div");U.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",U.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
            <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
            <div class="text-sm text-gray-600 mb-3">
              <p class="font-mono text-base font-semibold text-purple-700">
                Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
              <p class="text-gray-700">${G.toFixed(2)} ÷ ${$}</p>
              <p class="text-purple-700 font-bold text-lg mt-1">= ${z}</p>
            </div>
            <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่ครูให้คะแนนครบทุกช่องแล้วเท่านั้น (${D.length} วิชา)</p>
            <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
          </div>`,document.body.appendChild(U),U.querySelector("#gpa-tip-close").addEventListener("click",()=>U.remove()),U.addEventListener("click",M=>{M.target===U&&U.remove()})})})},R=()=>{const v=localStorage.getItem("studentGpaView")==="card"?"card":"table";N.querySelector("#gpa-view-table").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${v==="table"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`,N.querySelector("#gpa-view-card").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${v==="card"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`};R(),J();const re=v=>{localStorage.setItem("studentGpaView",v==="card"?"card":"table"),N.querySelector("#gpa-pop-samai").innerHTML=u("samai"),N.querySelector("#gpa-pop-sasana").innerHTML=u("sasana"),R(),J()};N.querySelector("#gpa-view-table").addEventListener("click",()=>re("table")),N.querySelector("#gpa-view-card").addEventListener("click",()=>re("card")),N.querySelectorAll(".gpa-pop-tab").forEach(v=>{v.addEventListener("click",()=>{const a=v.dataset.tab;N.querySelector("#gpa-pop-samai").classList.toggle("hidden",a!=="samai"),N.querySelector("#gpa-pop-sasana").classList.toggle("hidden",a!=="sasana"),N.querySelectorAll(".gpa-pop-tab").forEach(d=>{d.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${d.dataset.tab===a?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})})}),window._stuOpenClassFromTT=m=>{var h;document.querySelectorAll(".stu-fullpop").forEach(S=>S.remove()),window._stuFromTimetable=!0,(h=window._stuOpenClass)==null||h.call(window,m)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const me=async()=>{const m=pe("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:h,periods:S}=await Ut(e.id).catch(()=>({slots:[],periods:[]})),n=m.querySelector(".flex-1.overflow-y-auto");if(!n)return;const x=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],j=["อา","จ","อ","พ","พฤ","ศ","ส"],q=[0,1,2,3,4,5,6].filter(v=>h.some(a=>a.dow===v)),Y=new Date().getDay();let u="day",w=q.includes(Y)?Y:q[0]??0;const N={};h.forEach(v=>{N[`${v.dow}-${v.periodNo}`]=v});const J=v=>{var M,O,g,F;const a=new Date,d=a.getHours()*3600+a.getMinutes()*60+a.getSeconds(),D={};h.filter(A=>A.dow===v&&A.span>1).forEach(A=>{for(let Q=1;Q<A.span;Q++)D[A.periodNo+Q]=A.periodNo});const $=((O=(M=S.find(A=>A.period_no===5))==null?void 0:M.end_time)==null?void 0:O.slice(0,5))??"",G=((F=(g=S.find(A=>A.period_no===6))==null?void 0:g.start_time)==null?void 0:F.slice(0,5))??"",z=$&&G?`${$}–${G}`:"";let U="";return S.forEach(A=>{var tt,st;A.period_no===6&&S.find(Ge=>Ge.period_no===5)&&(U+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${z?`<p class="text-[10px] text-emerald-500 mt-0.5">${z}</p>`:""}
            </td></tr>`);const Q=N[`${v}-${A.period_no}`],se=(Q==null?void 0:Q.span)??1,ne=se>1?S.find(Ge=>Ge.period_no===A.period_no+se-1)??A:A,[xe,be]=(A.start_time??"0:0").split(":").map(Number),[qe,Fe]=(ne.end_time??"0:0").split(":").map(Number),De=d>=xe*3600+be*60&&d<qe*3600+Fe*60,$e=(tt=Q==null?void 0:Q.cls)==null?void 0:tt.master_subjects,Ne=["AGM","AGMVOC"].includes(($e==null?void 0:$e.subject_group)??""),et=Q?Ne?"bg-amber-50":"bg-emerald-50":"",Me=Q?Ne?"text-amber-800":"text-emerald-800":"text-gray-300",Ee=D[A.period_no]!=null;U+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${De?"text-emerald-600":"text-gray-500"}">คาบ ${A.period_no}</p>
            <p class="text-[10px] text-gray-400">${((st=A.start_time)==null?void 0:st.slice(0,5))??""}</p>
          </td>
          ${Ee?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${se>1?`rowspan="${se}"`:""}
              ${Q?`onclick="window._stuOpenClassFromTT(${Q.cls.id})"`:""}>
            ${Q?`
              <div class="rounded-xl ${et} border-l-4 ${Ne?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${De?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${se>1?se*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${Me} leading-tight">${($e==null?void 0:$e.subject_name)??"—"}</p>
                <p class="text-[10px] ${Me} opacity-60 mt-0.5">${($e==null?void 0:$e.subject_code)??""}</p>
                ${De?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${U}</tbody>
      </table>`},R=()=>{const v=`${Math.floor(100/(q.length+1))}%`,a=`<th style="width:${v}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+q.map($=>`<th style="width:${v}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${$===Y?"text-teal-600":"text-gray-600"}">${j[$]}</th>`).join(""),d={};q.forEach($=>{d[$]=new Set});let D="";return S.forEach(($,G)=>{var M,O,g,F;const z=new Date;z.getHours()*3600+z.getMinutes()*60+z.getSeconds();const U=q.map(A=>{var Me;if(d[A].has($.period_no))return"";const Q=N[`${A}-${$.period_no}`],se=(Q==null?void 0:Q.span)??1,ne=(Me=Q==null?void 0:Q.cls)==null?void 0:Me.master_subjects,xe=["AGM","AGMVOC"].includes((ne==null?void 0:ne.subject_group)??""),be=Q?xe?"bg-amber-50":"bg-emerald-50":"",qe=Q?xe?"text-amber-700":"text-emerald-700":"text-gray-200",Fe=se>1?S.find(Ee=>Ee.period_no===$.period_no+se-1)??$:$,[De,$e]=($.start_time??"0:0").split(":").map(Number),[Ne,et]=(Fe.end_time??"0:0").split(":").map(Number);for(let Ee=1;Ee<se;Ee++)d[A].add($.period_no+Ee);return`<td style="width:${v};padding:2px" ${se>1?`rowspan="${se}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${Q?`onclick="window._stuOpenClassFromTT(${Q.cls.id})"`:""}>
            ${Q?`
              <div class="rounded-lg ${be} border-l-2 ${xe?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${se>1?se*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${qe} text-[8px] font-semibold leading-tight line-clamp-3">${(ne==null?void 0:ne.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(D+=`<tr>
          <td style="width:${v}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${$.period_no}</p>
            <p class="text-[8px] text-gray-300">${((M=$.start_time)==null?void 0:M.slice(0,5))??""}</p>
          </td>${U}</tr>`,$.period_no===5&&S.find(A=>A.period_no===6)){const A=((O=$.end_time)==null?void 0:O.slice(0,5))??"",Q=((F=(g=S.find(se=>se.period_no===6))==null?void 0:g.start_time)==null?void 0:F.slice(0,5))??"";D+=`<tr><td colspan="${q.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${A&&Q?` ${A}–${Q}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${a}</tr></thead>
          <tbody>${D}</tbody>
        </table>
      </div>`},re=()=>{var a,d,D,$;const v=u==="week";if(n.innerHTML=`
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
      ${v?R():J(w)}
      ${h.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(a=n.querySelector("#tt-btn-day"))==null||a.addEventListener("click",()=>{u="day",re()}),(d=n.querySelector("#tt-btn-week"))==null||d.addEventListener("click",()=>{u="week",re()}),(D=n.querySelector("#tt-prev"))==null||D.addEventListener("click",()=>{const G=q.indexOf(w);w=q[(G-1+q.length)%q.length],re()}),($=n.querySelector("#tt-next"))==null||$.addEventListener("click",()=>{const G=q.indexOf(w);w=q[(G+1)%q.length],re()}),!v&&n.querySelector("#tt-day-cd")){const z=S.find(U=>{if(!N[`${w}-${U.period_no}`]||!U.end_time)return!1;const O=new Date,g=O.getHours()*3600+O.getMinutes()*60+O.getSeconds(),[F,A]=U.end_time.split(":").map(Number),[Q,se]=(U.start_time??"0:0").split(":").map(Number);return g>=Q*3600+se*60&&g<F*3600+A*60});if(z){const[U,M]=z.end_time.split(":").map(Number),O=U*3600+M*60,g=setInterval(()=>{const F=n.querySelector("#tt-day-cd");if(!F){clearInterval(g);return}const A=new Date,Q=Math.max(0,O-A.getHours()*3600-A.getMinutes()*60-A.getSeconds()),se=Math.floor(Q/3600),ne=Math.floor(Q%3600/60),xe=Q%60;F.textContent=`${String(se).padStart(2,"0")}:${String(ne).padStart(2,"0")}:${String(xe).padStart(2,"0")}`,Q===0&&clearInterval(g)},1e3)}}};re()};window._stuOpenTimetablePopup=me,(te=document.getElementById("btn-stu-timetable"))==null||te.addEventListener("click",me),window._stuStartQuiz=async m=>{try{const h=await ht(m,e.id).catch(()=>null);if(h&&h.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${h.id}`;return}const S=await wt(m);window.location.href=`quiz-exam.html?attempt=${S.id}`}catch(h){K("เข้าสอบไม่สำเร็จ: "+ge(h),"error")}}}async function ea(e,t="life"){le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await Ie().catch(()=>({}));rs(s);const o=s.academicYear,l=s.semester,[c,i,T]=await Promise.all([Rt(e.id,o,l).catch(V=>({columns:[],scores:[],error:V})),Ot(e.id,o,l).catch(V=>({columns:[],scores:[],error:V})),zt(e.id).catch(V=>Object.assign([],{error:V}))]),B=dt(c.columns,c.scores),b=dt(i.columns,i.scores),P=b.reduce((V,oe)=>V+(parseFloat(oe.score)||0),0),H=b.reduce((V,oe)=>V+(parseFloat(oe.max_score)||0),0),I=H>0?Math.round(P/H*1e3)/10:0,r=P>0?ns(I):null,p=Object.fromEntries((T??[]).map(V=>[V.check_date,V.status])),k=Et(s.semester_start,T??[]),E=k.flatMap(V=>V.days),f=E.reduce((V,oe)=>{var ce;return V+(((ce=Be[p[oe.ds]])==null?void 0:ce.score)??0)},0),C=E.length*2,L=C?Math.max(0,Math.round(f/C*100)/10):0,_=(V,oe,ce,ie)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${oe} ${V}</h3>
        <span class="text-[11px] text-gray-400">${ce.length} หัวข้อ</span>
      </div>
      ${ce.length?`<div class="divide-y divide-gray-50">
        ${ce.map(pe=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${pe.name}</p>
              <p class="text-[11px] text-gray-400">${pe.sheet_col?`คอลัมน์ ${pe.sheet_col} · `:""}เต็ม ${pe.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${ie}">${pe.score??"—"}</p>
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
          <p class="text-lg font-bold text-amber-600">${L}</p>
          <p class="text-[10px] text-gray-400">/ 10</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[520px] text-xs">
          <thead>
            <tr class="bg-gray-50 text-gray-500">
              <th class="px-2 py-2 text-left font-semibold">สัปดาห์</th>
              ${["อา","จ","อ","พ","พฤ"].map(V=>`<th class="px-2 py-2 text-center font-semibold">${V}</th>`).join("")}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${k.map(V=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${V.n}</td>
              ${V.days.map(oe=>{const ce=p[oe.ds],ie=Be[ce];return`<td class="px-1 py-1 text-center">
                  <span title="${(ie==null?void 0:ie.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(ie==null?void 0:ie.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(ie==null?void 0:ie.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(Be).map(V=>`<span><b class="${V.cls.split(" ").find(oe=>oe.startsWith("text-"))??""}">${V.label}</b> ${V.title}</span>`).join("")}
      </div>
    </section>
  `,ae={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[t]??"คะแนนทักษะชีวิต",de={life:_("คะแนนทักษะชีวิต","🌱",B,"text-emerald-600"),prayer:X,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${r?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${r.cls}">${r.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${P?`${I} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${P||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${H||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${P?I:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${_("คะแนนอ่านคิดวิเคราะห์ฯ","📖",b,"text-sky-600")}
    `}[t]??_("คะแนนทักษะชีวิต","🌱",B,"text-emerald-600");le(`
    <h2 class="font-bold text-gray-800 mb-1">📊 คะแนนของฉัน</h2>
    <p class="text-xs text-gray-400 mb-2">คะแนนรวมอื่น ๆ นอกเหนือจากคะแนนรายวิชา · ภาค ${l??"—"} / ${o??"—"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${ae}</p>
    ${de}
  `)}async function Je(e){var E;le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,o]=await Promise.all([ze(e.id).catch(()=>[]),Zt().catch(()=>({})),Ft(e.id).catch(()=>[])]),l=Object.fromEntries(o.filter(f=>f.status==="pending").map(f=>[f.class_id,f])),c=["อา","จ","อ","พ","พฤ","ศ","ส"],i=t.length?await Gt(t.map(f=>f.id)).catch(()=>({})):{},T=f=>{const C=i[f]??[];if(!C.length)return"";const L={};return C.forEach(_=>{const X=_.day_of_week;L[X]||(L[X]=[]);const ae=_.span_periods??1;for(let de=0;de<ae;de++)L[X].push((_.period_no??0)+de)}),Object.entries(L).sort(([_],[X])=>Number(_)-Number(X)).map(([_,X])=>{const ae=[...new Set(X)].sort((V,oe)=>V-oe),de=ae.length===1?`คาบ ${ae[0]}`:`คาบ ${ae[0]}–${ae[ae.length-1]}`;return`${c[Number(_)]??_} ${de}`}).join(" · ")};if(!t.length){le(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const B=f=>{var _,X,ae;if(f.subject_group_override)return f.subject_group_override==="sasana";const C=((_=f.master_subjects)==null?void 0:_.subject_group)??"";return(((ae=(X=f.master_subjects)==null?void 0:X.teachers)==null?void 0:ae.category)??"")==="ศาสนา"||C==="AGM"||C==="AGMVOC"},b=t.filter(f=>!B(f)),P=t.filter(f=>B(f)),I=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid",r=localStorage.getItem("studentSubjectsGroup")==="sasana"?"sasana":"samai";window._stuSetSubjectView=f=>{localStorage.setItem("studentSubjectsView",f==="grid"?"grid":"list"),Je(e)},window._stuSetSubjectGroup=f=>{localStorage.setItem("studentSubjectsGroup",f==="sasana"?"sasana":"samai"),Je(e)};const p=f=>{const C=f.master_subjects,L=C==null?void 0:C.teachers,_=ws(f,s);return I?`<button onclick="window._stuOpenClass(${f.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${_.bg}; border-color:${_.border}; border-left-color:${_.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${_.badgeBg}; color:${_.text};">${_.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${_.text};">${(C==null?void 0:C.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${(C==null?void 0:C.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${we(f.class_name)}</p>
            ${T(f.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${T(f.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${L!=null&&L.image_url?`<img src="${L.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${((L==null?void 0:L.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${(L==null?void 0:L.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${f.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${_.bg}; border-color:${_.border}; border-left-color:${_.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${_.text};">${(C==null?void 0:C.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${(C==null?void 0:C.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${_.text};">${_.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${_.badgeBg}; color:${_.text};">${_.short}</span>
          <span class="text-[10px] text-gray-400">${(C==null?void 0:C.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${T(f.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${T(f.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${L!=null&&L.image_url?`<img src="${L.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${((L==null?void 0:L.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${(L==null?void 0:L.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${we(f.class_name)}</span>
      </div>
    </div>`},k=(f,C,L)=>L.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${C}</span>
          <h3 class="font-bold text-gray-700 text-sm">${f}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${L.length} วิชา</span>
        </div>
        <div class="${I?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${L.map(p).join("")}
        </div>
      </div>`:"";le(`
    <div class="flex items-center justify-between gap-3 mb-3">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${I?"text-gray-400":"bg-white text-emerald-600 shadow-sm"}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${I?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}">กริด</button>
      </div>
    </div>
    <div class="flex gap-2 mb-2">
      <button type="button" onclick="window._stuSetSubjectGroup('samai')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">📖 สามัญ (${b.length})</button>
      <button type="button" onclick="window._stuSetSubjectGroup('sasana')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">🕌 ศาสนา (${P.length})</button>
    </div>
    <div class="flex justify-end mb-4">
      <button id="btn-manage-subject-groups" type="button" class="text-xs text-indigo-600 font-semibold hover:text-indigo-800">🔧 จัดการกลุ่มรายวิชา</button>
    </div>
    ${r==="samai"?k("วิชาสามัญ","📖",b):k("วิชาศาสนา","🕌",P)}
  `),(E=document.getElementById("btn-manage-subject-groups"))==null||E.addEventListener("click",()=>{js(e,t,l,B)})}function js(e,t,s,o){var b;(b=document.getElementById("subject-group-mgr"))==null||b.remove();const l=document.createElement("div");l.id="subject-group-mgr",l.className="fixed inset-0 z-[400] bg-white flex flex-col";const c=(P,H)=>{const I=P.master_subjects,r=s[P.id];return`
    <div class="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3">
      <p class="font-semibold text-sm text-gray-800 truncate min-w-0">${(I==null?void 0:I.subject_name)??"—"}</p>
      ${r?'<span class="text-[11px] font-semibold text-amber-500 whitespace-nowrap flex-shrink-0">⏳ รอตรวจสอบ</span>':H?`<button class="sgm-move-btn text-[11px] font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-1.5 hover:bg-indigo-50 whitespace-nowrap flex-shrink-0"
              data-class-id="${P.id}" data-requested="samai">ย้ายไป 📖 สามัญ</button>`:""}
    </div>`};let i="samai";const T=()=>{const P=t.filter(I=>(o(I)?"sasana":"samai")===i),H=l.querySelector("#sgm-list");H.innerHTML=P.length?P.map(I=>c(I,i==="sasana")).join(""):'<p class="text-center text-gray-400 text-sm py-8">ไม่มีวิชาในกลุ่มนี้</p>',H.querySelectorAll(".sgm-move-btn").forEach(I=>{I.addEventListener("click",async()=>{var k,E;const r=Number(I.dataset.classId),p=t.find(f=>f.id===r);if(confirm(`ขอย้ายวิชา "${((k=p==null?void 0:p.master_subjects)==null?void 0:k.subject_name)??""}" ไปกลุ่ม 📖 สามัญ?
(ต้องรอแอดมินตรวจสอบและอนุมัติก่อนจึงจะมีผลจริง)`)){I.disabled=!0,I.textContent="กำลังส่ง...";try{await Xt(r,"samai"),ss({title:"🔀 มีคำขอย้ายกลุ่มวิชาใหม่",body:`นักเรียนขอย้ายวิชา "${((E=p==null?void 0:p.master_subjects)==null?void 0:E.subject_name)??""}" ไปกลุ่ม 📖 สามัญ — รอตรวจสอบ`,url:"dashboard.html"}).catch(()=>{}),K("ส่งคำขอแล้ว รอแอดมินตรวจสอบ","success"),l.remove(),Je(e)}catch(f){K("ส่งคำขอไม่สำเร็จ: "+ge(f),"error"),I.disabled=!1,I.textContent="ย้ายไป 📖 สามัญ"}}})})};l.innerHTML=`
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
    <div id="sgm-list" class="flex-1 overflow-y-auto px-4 py-3 space-y-2"></div>`,document.body.appendChild(l),l.querySelector("#sgm-back").addEventListener("click",()=>l.remove());const B=()=>{l.querySelector("#sgm-tab-samai").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${i==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,l.querySelector("#sgm-tab-samai").textContent=`📖 สามัญ (${t.filter(P=>!o(P)).length})`,l.querySelector("#sgm-tab-sasana").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${i==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,l.querySelector("#sgm-tab-sasana").textContent=`🕌 ศาสนา (${t.filter(P=>o(P)).length})`};l.querySelector("#sgm-tab-samai").addEventListener("click",()=>{i="samai",B(),T()}),l.querySelector("#sgm-tab-sasana").addEventListener("click",()=>{i="sasana",B(),T()}),B(),T()}async function Cs(e,t="samai"){le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await gt(e.id).catch(()=>[]),o=r=>{var E,f,C,L,_;const p=((f=(E=r._class)==null?void 0:E.master_subjects)==null?void 0:f.subject_group)??"";return(((_=(L=(C=r._class)==null?void 0:C.master_subjects)==null?void 0:L.teachers)==null?void 0:_.category)??"")==="ศาสนา"||p==="AGM"||p==="AGMVOC"},l=s.filter(r=>!o(r)),c=s.filter(r=>o(r)),i=r=>r?new Date(r).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",T=(r,p)=>r.due_at?new Date(p).getTime()>new Date(r.due_at).getTime():!1,B=r=>r.due_at?Date.now()>new Date(r.due_at).getTime():!1,b=r=>{var f,C;const p=r.mySubmission,k=p?T(r,p.submitted_at):!1,E=!p&&B(r);return`<div onclick="window._stuOpenClass(${r.class_id})"
      class="bg-white rounded-2xl border ${p?"border-emerald-100":E?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${ee(((C=(f=r._class)==null?void 0:f.master_subjects)==null?void 0:C.subject_name)??"")}</p>
        ${p?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${k?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${k?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${E?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${E?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${ee(r.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${i(r.due_at)}</p>
      ${p!=null&&p.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${ee(p.teacher_feedback)}</p>`:""}
    </div>`},P=r=>{if(!r.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const p=r.filter(Te).sort((E,f)=>(E.due_at?new Date(E.due_at).getTime():1/0)-(f.due_at?new Date(f.due_at).getTime():1/0)),k=r.filter(E=>E.mySubmission&&E.mySubmission.status!=="rejected").sort((E,f)=>new Date(f.mySubmission.submitted_at).getTime()-new Date(E.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${p.length})</p>
        ${p.length?`<div class="space-y-2.5">${p.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${k.length})</p>
        ${k.length?`<div class="space-y-2.5">${k.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},H=l.filter(Te).length,I=c.filter(Te).length;le(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${H?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${H}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${I?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${I}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${P(t==="sasana"?c:l)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(r=>{r.addEventListener("click",()=>Cs(e,r.dataset.grp))})}async function Is(e,t,s="todo"){le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const l=(await ze(e.id).catch(()=>[])).find(a=>a.id===t);if(!l){le('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:c}=await mt(async()=>{const{getClassAnnouncements:a}=await import("./api-Cf_Y4s92.js");return{getClassAnnouncements:a}},__vite__mapDeps([0,1])).catch(()=>({})),[{columns:i,scores:T},B,b,P,H,I,r]=await Promise.all([Dt(e.id,t).catch(()=>({columns:[],scores:[]})),Nt(e.id,t).catch(()=>[]),Xe(e.id).catch(()=>[]),c?c(t).catch(()=>[]):Promise.resolve([]),yt(t,e.id).catch(()=>[]),At(t,e.id).catch(()=>[]),Pt(t).catch(()=>[])]),p=await vt(H.map(a=>a.id),e.id).catch(()=>new Set),k=window._pp5SystemCfg??await Ie().catch(()=>({})),E=as(k.semester_start),f=r.find(a=>E>=a.week_start&&E<=a.week_end),C=b.filter(a=>{var d;return((d=a.classes)==null?void 0:d.id)===t}),L=Object.fromEntries(T.map(a=>[a.assignment_id,a])),_=l.master_subjects,X=_==null?void 0:_.teachers,ae=a=>{var d,D;return parseFloat(((d=L[a.id])==null?void 0:d.final_score)??((D=L[a.id])==null?void 0:D.original_score)??0)||0},de=i.filter(a=>a.assignment_type==="คะแนนพิเศษ"),V=i.filter(a=>a.assignment_type!=="final"&&a.assignment_type!=="คะแนนพิเศษ"),oe=i.filter(a=>a.assignment_type==="final"),ce=V.reduce((a,d)=>a+(d.max_score||0),0),ie=oe.reduce((a,d)=>a+(d.max_score||0),0),pe=V.reduce((a,d)=>a+ae(d),0),ye=oe.reduce((a,d)=>a+ae(d),0),_e=de.reduce((a,d)=>a+ae(d),0),ue=ce+ie,me=ue>0?(pe+ye)/ue*100:0,fe=B.length,y=B.filter(a=>a.status==="present").length,Z=fe>0?Math.round(y/fe*100):null,W=a=>a>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:a>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:a>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},te=ue>0?W(me):null,m=a=>{const d=L[a.id],$=d&&(d.final_score!=null||d.original_score!=null)?parseFloat((d==null?void 0:d.final_score)??(d==null?void 0:d.original_score))||0:null,G=$!=null&&a.max_score>0?Math.round($/a.max_score*100):null,z=(d==null?void 0:d.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${a.assignment_name}
        ${z?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${$!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${$!=null?$.toFixed(1).replace(/\.0$/,""):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${a.max_score!=null?"/"+a.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${$!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${a.max_score!=null?G!=null?G+"%":"—%":""}
      </td>
    </tr>`},h=(a,d,D,$,G)=>{if(!a.length)return"";const z=D>0?Math.round(d/D*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${G}</span>
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
            ${a.map(m).join("")}
            <tr class="${$}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${d.toFixed(1).replace(/\.0$/,"")}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${D}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${z}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},S=hs(l),n=()=>`
    <div class="${S.bg} ${S.border} border border-l-4 ${S.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${S.text} text-sm leading-tight">${(_==null?void 0:_.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${(_==null?void 0:_.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(X==null?void 0:X.full_name)??"—"} · ${we(l.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${ue>0?(pe+ye).toFixed(1).replace(/\.0$/,""):"—"}</p>
        <p class="text-[10px] text-gray-400">/${ue} คะแนน</p>
        ${_e>0?`<p class="text-[10px] text-amber-500 font-medium">+${_e.toFixed(1).replace(/\.0$/,"")} โบนัส</p>`:""}
        ${te?`<span class="inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${te.cls}">${te.label}</span>`:""}
      </div>
    </div>`,x=a=>{const d=Ce[a.status]??Ce.pending,D=a.class_score_columns,$=We(a.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${a.request_type}</p>
          ${D?`<p class="text-[11px] text-gray-400 mt-0.5">${D.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${d.cls}">${d.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${je(a.requested_date)}${a.requested_period_no?` · คาบ ${a.requested_period_no}`:""}${$?` · ${$}`:""}</p>
        ${a.reason?`<p>💬 ${a.reason}</p>`:""}
        ${a.teacher_comment?`<p class="${a.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${a.teacher_comment}</p>`:""}
      </div>
      ${a.status==="pending"?`
        <button onclick="window._stuCancelRequest(${a.id}, ${t})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},j=()=>{const a=[],d=I.filter(Te);d.length>0&&a.push(`
        <button onclick="window._stuOpenClassTab(${t},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${d.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${d.length}</span>
        </button>`);const D=C.filter(g=>g.status==="pending");D.length>0&&D.forEach(g=>{const F=g.class_score_columns,A=We(g.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${g.request_type} — รอครูอนุมัติ</p>
              ${F?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${F.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${je(g.requested_date)}${g.requested_period_no?` · คาบ ${g.requested_period_no}`:""}${A?` · ${A}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const $=C.filter(g=>g.status==="approved"&&g.exam_attended==null);$.length>0&&$.forEach(g=>{const F=g.class_score_columns,A=We(g.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${g.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${F?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${F.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${je(g.requested_date)}${g.requested_period_no?` · คาบ ${g.requested_period_no}`:""}${A?` · ${A}`:""}</p>
              ${g.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${g.teacher_comment}</p>`:""}
            </div>
          </div>`)}),H.forEach(g=>{const F=g.attempts.filter(be=>be.status==="submitted"||be.status==="terminated_violation").reduce((be,qe)=>Math.max(be,qe.score_pct??0),null),A=g.attempts.length&&g.attempts[g.attempts.length-1].status==="terminated_violation"?g.attempts[g.attempts.length-1]:null,Q=g.attempts.find(be=>be.status==="in_progress"),se=g.attempts.filter(be=>be.status==="submitted"||be.status==="terminated_violation").length;let ne="",xe="";g.status==="announced"?ne='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':g.status==="started"&&p.has(g.id)?ne='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':g.status==="started"&&A?ne='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':g.status==="started"&&Q?(ne='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">กำลังทำอยู่</span>',xe=`<button onclick="window._stuStartQuiz('${g.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):g.status==="started"&&se>=g.max_attempts?ne='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':g.status==="started"?(ne='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">เปิดสอบอยู่</span>',xe=`<button onclick="window._stuStartQuiz('${g.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):g.status==="closed"&&(ne='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),a.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${ee(g.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${g.num_questions} ข้อ${g.time_limit_minutes?` · ${g.time_limit_minutes} นาที`:""} · ทำได้ ${se}/${g.max_attempts} ครั้ง</p>
            ${F!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${F.toFixed(1)}%</p>`:""}
            <div class="mt-1">${ne}</div>
            ${xe}
          </div>
        </div>`)});const G=[l.day1_date,l.day2_date,l.day3_date,l.day4_date,l.day5_date,l.day6_date].filter(Boolean),z=new Date;z.setHours(0,0,0,0);const U=G.map(g=>{const F=new Date(g);return F.setHours(0,0,0,0),F}).filter(g=>g>=z).sort((g,F)=>g-F);if(U.length>0){const g=U[0],F=Math.round((g-z)/864e5),A=F===0?"🔴 วันนี้!":F===1?"🟡 พรุ่งนี้":`⏰ อีก ${F} วัน`,Q=Oe[g.getDay()]??"";a.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${Q}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${g.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${je(ft(g))}</p>
          </div>
          <span class="text-xs font-bold ${F===0?"text-red-500":F===1?"text-amber-500":"text-emerald-600"}">${A}</span>
        </div>`)}const M={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},O=g=>{if(!g)return"";const F=new Date(g),Q=F-new Date,se=Math.floor(Q/6e4),ne=F.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(Q<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${ne}</span>`;if(se<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${se} นาที · ${ne}</span>`;const xe=Math.floor(se/60);return xe<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${xe} ชม. ${se%60} น. · ${ne}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(xe/24)} วัน · ${ne}</span>`};return P.length>0&&[...P].sort((g,F)=>(F.priority||0)-(g.priority||0)).forEach(g=>{const F=M[g.ann_type]??M.general,A=g.ann_type==="deadline"&&g.deadline_at?O(g.deadline_at):"";a.push(`
          <div class="rounded-2xl border ${F.border} ${F.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${F.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${g.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${F.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${g.title??""}</p>
                ${g.body?`<p class="text-xs text-gray-500 mt-1">${g.body}</p>`:""}
                ${A?`<div class="mt-2">${A}</div>`:""}
                ${g.file_url?`<a href="${g.file_url}" target="_blank" rel="noopener"
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
        </div>`}`},q=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${ue>0?`<span class="text-xs text-gray-400">${me.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${i.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${h(V,pe,ce,"bg-blue-50","📘 กลางภาค")}
            ${h(oe,ye,ie,"bg-purple-50","📙 ปลายภาค")}
            ${de.length?h(de,de.reduce((a,d)=>a+ae(d),0),0,"bg-amber-50","⭐ คะแนนพิเศษ/โบนัส"):""}
          </div>`}
    </div>
    ${fe>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${Z!==null?`<span class="text-xs text-gray-400">${y}/${fe} คาบ · ${Z}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${B.map(a=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${a.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${bs[a.status]??"bg-gray-50 text-gray-400"}">
            ${xs[a.status]??"?"}
          </span>
        </div>`).join("")}
      </div>
    </div>`:""}`,Y=()=>`
    <button onclick="window._stuOpenRequest(${t})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${C.length?`<div class="space-y-3">${C.map(x).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,u=a=>a?new Date(a).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",w=(a,d)=>a.due_at?new Date(d).getTime()>new Date(a.due_at).getTime():!1,N=a=>a.due_at?Date.now()>new Date(a.due_at).getTime():!1,J=a=>{var z,U;const d=a.mySubmission,D=(d==null?void 0:d.status)==="rejected",$=d?w(a,d.submitted_at):!1,G=!d&&N(a);return`<div class="bg-white rounded-2xl border ${D?"border-red-200":d?"border-emerald-100":G?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${ee(a.title)}</p>
        ${D?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':d?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${$?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${$?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${G?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${G?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${a.description?`<p class="text-xs text-gray-500 mb-1.5">${ee(a.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${u(a.due_at)}</p>
      ${(z=a.attachment_urls)!=null&&z.length?`<div class="flex flex-wrap gap-1.5 mb-2">${a.attachment_urls.map(M=>`<a href="${ee(M.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${ee(M.name)}</a>`).join("")}</div>`:""}
      ${(U=d==null?void 0:d.file_urls)!=null&&U.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(d.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${d.file_urls.map(M=>`<a href="${ee(M.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${ee(M.name)}</a>`).join("")}</div></div>`:""}
      ${d!=null&&d.teacher_feedback?D?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${ee(d.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${ee(d.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${D?"bg-red-600 text-white hover:bg-red-700":d?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${a.id}">${D?"📤 ส่งแก้ไขใหม่":d?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},re=s==="scores"?q():s==="requests"?Y():s==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${I.length?`<div class="space-y-3">${I.map(J).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:j();le(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${n()}
    ${f?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${E}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${ee(f.topic)}</p>
      ${f.description?`<p class="text-xs text-indigo-400 mt-0.5">${ee(f.description)}</p>`:""}
    </div>`:""}
    ${re}
  `),window._stuCancelRequest=async(a,d=t)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await xt(a),K("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(d,"requests")}catch(D){K("ยกเลิกไม่สำเร็จ: "+ge(D),"error")}},window._stuStartQuiz=async a=>{try{const d=await ht(a,e.id).catch(()=>null);if(d&&d.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${d.id}`;return}const D=await wt(a);window.location.href=`quiz-exam.html?attempt=${D.id}`}catch(d){K("เข้าสอบไม่สำเร็จ: "+ge(d),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(a=>{a.addEventListener("click",()=>{const d=I.find(D=>D.id===parseInt(a.dataset.aid,10));d&&v(d)})});function v(a){var D;(D=document.getElementById("stu-submit-modal"))==null||D.remove();const d=document.createElement("div");d.id="stu-submit-modal",d.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",d.innerHTML=`
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
      </div>`,document.body.appendChild(d),d.addEventListener("click",$=>{$.target===d&&d.remove()}),d.querySelector("#ss-close").addEventListener("click",()=>d.remove()),d.querySelector("#ss-submit").addEventListener("click",async()=>{var z;const $=[...d.querySelector("#ss-files").files??[]];if(!$.length&&!a.mySubmission){K("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const G=d.querySelector("#ss-submit");G.disabled=!0,G.textContent="กำลังส่ง...";try{const U=[];for(const O of $)U.push(await ls(O,`class-${t}/student-${e.id}`));const M=U.length?U:((z=a.mySubmission)==null?void 0:z.file_urls)??[];await Ht(a.id,e.id,M,d.querySelector("#ss-note").value.trim()||null),K("ส่งงานสำเร็จ ✅","success"),d.remove(),Is(e,t,"assignments")}catch(U){K("ส่งงานไม่สำเร็จ: "+ge(U),"error"),G.disabled=!1,G.textContent="ส่งงาน"}})}}async function qs(e){le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const t=await Xe(e.id).catch(()=>[]),s=`<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`;if(!t.length){le(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${s}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`);return}le(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} รายการ)</span></h2>
    ${s}
    <div class="space-y-3">
      ${t.map(o=>{var T,B;const l=Ce[o.status]??Ce.pending,c=o.classes,i=o.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((T=c==null?void 0:c.master_subjects)==null?void 0:T.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((B=c==null?void 0:c.master_subjects)==null?void 0:B.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${l.cls}">${l.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${o.request_type}</span></p>
            ${i?`<p>📝 หัวข้อ: <span class="text-gray-700">${i.assignment_name}</span></p>`:""}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${je(o.requested_date)}</span>
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
  `),window._stuCancelRequest=async o=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await xt(o),K("ยกเลิกคำร้องแล้ว","success"),qs(e)}catch(l){K("ยกเลิกไม่สำเร็จ: "+ge(l),"error")}}}async function ta(e,t){var ue,me,fe;le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,o]=await Promise.all([ze(e.id).catch(()=>[]),It(e.id).catch(()=>0)]),l=s.find(y=>y.id===t);if(!l){le('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(o>=2){le(`
      <button onclick="window._stuOpenClassTab(${t},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const c=o===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",i=l.master_subjects,T=i==null?void 0:i.teacher_id,B=i==null?void 0:i.teachers,b=T?(B==null?void 0:B.full_name)??"ครูผู้สอน":"ครูผู้สอน",P=String(b||"ค").trim().charAt(0).toUpperCase()||"ค",H=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||l.class_name||"—";let I=null;const[r,p,k]=await Promise.all([qt(t).catch(()=>[]),T?Mt(T,t).catch(y=>(I=y,[])):Promise.resolve([]),Tt().catch(()=>[])]),E=r.filter(y=>y.column_type!=="override"),f={};for(const y of p){f[`${y.day_of_week}_${y.period_no}`]=y;const Z=y.span_periods??1;for(let W=1;W<Z;W++)f[`${y.day_of_week}_${y.period_no+W}`]={...y,_secondary:!0}}const C=p.length>0;if(!C){le(`
      <button onclick="window._stuOpenClassTab(${t}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(i==null?void 0:i.subject_name)??""} · ${we(l.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${T?I?`ระบบอ่านตารางครูไม่สำเร็จ: ${I.message??I}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${T?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const L="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",_=L+" cursor-pointer";let X=null,ae=0;const de=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],V=(y,Z,W=null)=>{const te=String(y??"").trim(),m=String(Z??"").trim();return te&&m?`${te} — ${m}`:te||(W!=null?String(W):"")},oe=y=>{const Z=de[y%de.length];return`${Z.bg} ${Z.text}`};let ce={};try{ce=JSON.parse(localStorage.getItem(`scheduleColors_${T??"x"}`)??"{}")}catch{}const ie={};let pe=0;p.forEach(y=>{const Z=V(y.subject_name,y.class_name,y.subject_id);if(!Z||ie[Z]!=null)return;const W=ce[Z]??ce[y.subject_id]??ce[y.subject_name],te=Number(W);ie[Z]=Number.isFinite(te)?te:pe++});const ye=(y=0)=>{const Z=[0,1,2,3,4,5],W={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},te={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},m=Ue(y),h=new Date;h.setHours(0,0,0,0);const S=Z.map(x=>{const j=m[x];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${te[x]}">
        <p class="text-sm font-bold text-gray-700">${W[x]}</p>
        <p class="text-xs text-gray-400">${j.getDate()}/${j.getMonth()+1}</p>
      </th>`}).join(""),n=k.map(x=>{var u,w;const j=((u=x.start_time)==null?void 0:u.slice(0,5))??"",q=((w=x.end_time)==null?void 0:w.slice(0,5))??"",Y=Z.map(N=>{const J=`${N}_${x.period_no}`,R=f[J];if(R!=null&&R._secondary)return"";const v=m[N]<h;if(!R)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${x.period_no}" data-day="${N}" data-week-offset="${y}"
              ${v?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${v?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${v?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${v?"ล็อก":"＋"}</span>
            </button>
          </td>`;const a=R.span_periods??1,d=V(R.subject_name,R.class_name,R.subject_id),D=ie[d]??0,$=oe(D);return`<td class="border border-gray-100 p-0" style="height:1px" ${a>1?`rowspan="${a}"`:""}>
          <div class="w-full h-full ${$} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${R.subject_name??"ไม่ว่าง"}</p>
            ${R.class_name?`<p class="text-[10px] opacity-80 leading-tight">${we(R.class_name)}</p>`:""}
            ${R.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${R.teacher_name}</p>`:""}
            ${a>1?`<p class="text-[9px] opacity-40 mt-0.5">${a} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${x.period_no}</p>
          <p class="text-[10px] text-gray-400">${j}–${q}</p>
        </td>
        ${Y}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${S}
          </tr>
        </thead>
        <tbody>${n}</tbody>
      </table>
    </div>`},_e=y=>{const Z=Ue(y);return`${y===0?"สัปดาห์นี้":y===1?"สัปดาห์หน้า":`อีก ${y} สัปดาห์`} (${Pe(Z[0])} - ${Pe(Z[5])})`};if(le(`
    <button onclick="window._stuOpenClass(${t})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(i==null?void 0:i.subject_name)??""} · ${we(l.class_name)}</p>
      ${c}

      ${C?`
      <div id="schedule-first-gate" class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-bold text-emerald-800">เลือกคาบว่างของครูก่อน</p>
        <p class="mt-1 text-xs text-emerald-600">ระบบจะเปิดตารางสอนให้เลือกวันและคาบ แล้วค่อยกรอกข้อมูลคำร้องต่อ</p>
      </div>`:""}

      <form id="req-form" class="space-y-4 ${C?"hidden":""}">
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
          <select id="req-col" class="${_}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${E.map(y=>`<option value="${y.id}">${y.assignment_name} (${y.assignment_type} · เต็ม ${y.max_score})</option>`).join("")}
          </select>
        </div>

        <!-- Schedule grid / manual date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันและคาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${C?`
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
              <input type="date" id="req-date" class="${L}"
                min="${ft(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${_}" required>
                <option value="">— เลือกคาบ —</option>
                ${k.map(y=>`<option value="${y.period_no}">คาบ ${y.period_no} (${y.start_time.slice(0,5)}–${y.end_time.slice(0,5)})</option>`).join("")}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${L} resize-none"
            placeholder="ระบุเหตุผลที่ขาดสอบ..."></textarea>
        </div>

        <button type="submit" id="req-submit"
          class="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ยื่นคำร้อง
        </button>
      </form>
    </div>
    ${C?`
      <div id="teacher-schedule-modal" class="hidden fixed inset-0 z-[120] bg-black/50 p-4 items-center justify-center">
        <div class="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold shadow-sm">
                ${B!=null&&B.image_url?`<img src="${B.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${P}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${b} · ${(i==null?void 0:i.subject_name)??""}</p>
                <p class="text-[11px] text-gray-400 mt-0.5 truncate">นักเรียน ${(e==null?void 0:e.full_name)??"—"} · รหัส ${(e==null?void 0:e.student_code)??"—"} · ห้อง ${H}</p>
              </div>
            </div>
            <button type="button" id="close-schedule-modal"
              class="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600">×</button>
          </div>
          <div class="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p class="text-[11px] text-emerald-600 font-medium">กรุณาเลือกคาบว่างก่อนกรอกคำร้อง · ช่องว่างที่ไม่ถูกล็อกเลือกได้</p>
            <select id="schedule-week-select"
              class="border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200">
              ${[0,1,2,3,4].map(y=>`<option value="${y}">${_e(y)}</option>`).join("")}
            </select>
          </div>
          <div id="schedule-grid-wrap">${ye(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(y=>{y.addEventListener("change",()=>{var te;const Z=document.getElementById("req-reason-wrap"),W=y.value==="สอบย้อนหลัง";Z.classList.toggle("hidden",!W),(te=document.getElementById("req-reason"))==null||te.toggleAttribute("required",W)})}),C){const y=document.getElementById("teacher-schedule-modal");(ue=document.getElementById("open-schedule-modal"))==null||ue.addEventListener("click",()=>{y==null||y.classList.remove("hidden"),y==null||y.classList.add("flex")}),(me=document.getElementById("close-schedule-modal"))==null||me.addEventListener("click",()=>{var W;if(!X){(W=window._stuOpenClassTab)==null||W.call(window,t,"requests");return}y==null||y.classList.add("hidden"),y==null||y.classList.remove("flex")}),y==null||y.addEventListener("click",W=>{W.target===y&&X&&(y.classList.add("hidden"),y.classList.remove("flex"))});const Z=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(W=>{W.addEventListener("click",()=>{var Y,u;const te=parseInt(W.dataset.period),m=parseInt(W.dataset.day),h=parseInt(W.dataset.weekOffset??ae),n=Ue(h)[m];X={period_no:te,day_of_week:m,date:n,week_offset:h},document.getElementById("req-date").value=Se(n),document.getElementById("req-period-hidden").value=te;const x=document.getElementById("period-summary"),j=document.getElementById("period-summary-text");x==null||x.classList.remove("hidden"),j&&(j.textContent=`คาบ ${te} วัน${Oe[m]??""} ${Pe(n)}`);const q=document.getElementById("schedule-picker-label");q&&(q.textContent=`เลือกคาบ ${te} วัน${Oe[m]??""} ${Pe(n)} แล้ว`),(Y=document.getElementById("schedule-first-gate"))==null||Y.classList.add("hidden"),(u=document.getElementById("req-form"))==null||u.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(w=>{w.classList.toggle("ring-2",w===W),w.classList.toggle("ring-emerald-500",w===W),w.classList.toggle("bg-emerald-200",w===W)}),y==null||y.classList.add("hidden"),y==null||y.classList.remove("flex")})})};Z(),(fe=document.getElementById("schedule-week-select"))==null||fe.addEventListener("change",W=>{ae=parseInt(W.target.value||"0");const te=document.getElementById("schedule-grid-wrap");te&&(te.innerHTML=ye(ae)),Z()}),setTimeout(()=>{y==null||y.classList.remove("hidden"),y==null||y.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async y=>{var n,x,j,q,Y;y.preventDefault();const Z=document.getElementById("req-submit"),W=(n=document.querySelector('input[name="req_type"]:checked'))==null?void 0:n.value,te=document.getElementById("req-col").value,m=((x=document.getElementById("req-reason"))==null?void 0:x.value.trim())||null,h=(j=document.getElementById("req-date"))==null?void 0:j.value,S=C?(q=document.getElementById("req-period-hidden"))==null?void 0:q.value:(Y=document.getElementById("req-period-sel"))==null?void 0:Y.value;if(!W||!te||!h||!S){if(K("กรุณากรอกข้อมูลให้ครบ","warning"),C&&!S){K("กรุณาเลือกคาบว่างจากตารางครู","warning");const u=document.getElementById("teacher-schedule-modal");u==null||u.classList.remove("hidden"),u==null||u.classList.add("flex")}return}if(W==="สอบย้อนหลัง"&&!m){K("กรุณาระบุเหตุผล","warning");return}Z.disabled=!0,Z.textContent="กำลังยื่น...";try{await Bt({student_id:e.id,class_id:t,assignment_id:parseInt(te),request_type:W,requested_date:h,requested_period_no:parseInt(S),reason:W==="สอบย้อนหลัง"?m:null,status:"pending"}),K("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(t,"requests")}catch(u){K("ยื่นไม่สำเร็จ: "+ge(u),"error")}finally{Z.disabled=!1,Z.textContent="ยื่นคำร้อง"}})}async function sa(e,t){var c,i,T,B;const s=()=>`
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
      </div>`;le(`
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
      ปพ.5 ออนไลน์ © 2026 v${ds}
    </p>
  `),(c=document.getElementById("btn-stu-my-certificates-profile"))==null||c.addEventListener("click",()=>_t(e)),(i=document.getElementById("btn-stu-contact-admin"))==null||i.addEventListener("click",()=>{var b;(b=window._openFeedbackWidget)==null||b.call(window)}),(T=document.getElementById("btn-stu-pw-reset"))==null||T.addEventListener("click",()=>{o()});function o(){var P;(P=document.getElementById("pw-choice-modal"))==null||P.remove();const b=document.createElement("div");b.id="pw-choice-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",H=>{H.target===b&&b.remove()}),b.querySelector("#pwc-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#pwc-self").addEventListener("click",()=>{b.remove(),l()}),b.querySelector("#pwc-admin").addEventListener("click",()=>{var H;b.remove(),(H=window._openPasswordResetRequest)==null||H.call(window)})}function l(){var P;(P=document.getElementById("self-pw-modal"))==null||P.remove();const b=document.createElement("div");b.id="self-pw-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",H=>{H.target===b&&b.remove()}),b.querySelector("#self-pw-close").addEventListener("click",()=>b.remove()),b.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const H=b.querySelector("#btn-stu-save-pw"),I=b.querySelector("#stu-new-pw").value,r=b.querySelector("#stu-new-pw-confirm").value,p=b.querySelector("#stu-pw-msg"),k=(E,f)=>{p.className=`text-xs text-center py-2.5 rounded-xl ${f?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,p.textContent=E,p.classList.remove("hidden")};if(!I||I.length<6){k("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if(I!==r){k("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}H.disabled=!0,H.textContent="กำลังบันทึก...",p.classList.add("hidden");try{const{error:E}=await he.auth.updateUser({password:I});if(E)throw E;k("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),b.querySelector("#stu-new-pw").value="",b.querySelector("#stu-new-pw-confirm").value=""}catch(E){k("ไม่สำเร็จ: "+ge(E),!0)}finally{H.disabled=!1,H.textContent="บันทึกรหัสผ่านใหม่"}})}(B=document.getElementById("stu-logout-btn"))==null||B.addEventListener("click",()=>{var P;(P=document.getElementById("stu-logout-confirm"))==null||P.remove();const b=document.createElement("div");b.id="stu-logout-confirm",b.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.querySelector("#stu-logout-cancel").addEventListener("click",()=>b.remove()),b.addEventListener("click",H=>{H.target===b&&b.remove()}),b.querySelector("#stu-logout-confirm-btn").addEventListener("click",t)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{Ts(e)}),document.getElementById("btn-request-qr-card").addEventListener("click",()=>{var P;(P=document.getElementById("qr-request-confirm"))==null||P.remove();const b=document.createElement("div");b.id="qr-request-confirm",b.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(b),b.addEventListener("click",H=>{H.target===b&&b.remove()}),b.querySelector("#qr-request-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#qr-request-ok").addEventListener("click",async()=>{const H=b.querySelector("#qr-request-ok");H.disabled=!0,H.textContent="กำลังส่ง...";try{await es({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),ts({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),b.remove(),K("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch(I){H.disabled=!1,H.textContent="ยืนยัน",K("ส่งไม่สำเร็จ: "+ge(I),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var de;const b=window._pp5SystemCfg??await Ie().catch(()=>({})),P=parseInt(b.studentQrDailyLimit||"3",10),H=parseInt(b.studentQrExpirySeconds||"60",10),I=`qr_generation_logs_${e.id}`,r=Se(new Date);let p=JSON.parse(localStorage.getItem(I)||"null");if((!p||p.date!==r)&&(p={date:r,count:0}),p.count>=P){K(`คุณสร้าง QR Code ครบโควต้า ${P} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}p.count+=1,localStorage.setItem(I,JSON.stringify(p)),(de=document.getElementById("student-qr-modal"))==null||de.remove();const k=document.createElement("div");k.id="student-qr-modal",k.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",k.innerHTML=`
      <div class="text-center w-full max-w-sm">
        <div class="mb-5">
          <h3 class="text-2xl font-bold text-gray-800">🎫 QR Code ของฉัน</h3>
          <p class="text-sm font-semibold text-emerald-600 mt-1">${e.full_name}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส: ${e.student_code} · ห้อง: ${we(e.main_room)}</p>
        </div>
        
        <div class="relative w-64 h-64 mx-auto mb-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
          <canvas id="student-qr-canvas" class="w-56 h-56 object-contain"></canvas>
        </div>

        <div class="mb-8 px-4">
          <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-2.5">
            <div id="qr-timer-bar" class="bg-emerald-500 h-full w-full transition-all duration-1000 ease-linear"></div>
          </div>
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${H}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${P-p.count} / ${P} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(k);const E=k.querySelector("#student-qr-canvas"),f=Math.floor(Date.now()/1e3),C=`SQ:${e.student_code}:${f}`;try{await is.toCanvas(E,C,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(V){console.error("Failed to draw QR Code:",V),K("สร้าง QR Code ไม่สำเร็จ","error"),k.remove();return}let L=H;const _=k.querySelector("#qr-timer-bar"),X=k.querySelector("#qr-timer-sec"),ae=setInterval(()=>{L-=1,X&&(X.textContent=L),_&&(_.style.width=`${L/H*100}%`),L<=0&&(clearInterval(ae),k.remove(),K("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);k.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(ae),k.remove()})})}const Ms={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function Ts(e){var o;(o=document.getElementById("student-leave-modal"))==null||o.remove();const t=document.createElement("div");t.id="student-leave-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",t.innerHTML=`
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
  `,document.body.appendChild(t);const s=()=>{t._leaveTimer&&clearInterval(t._leaveTimer),t.remove()};t.querySelector("#btn-leave-modal-close").addEventListener("click",s),Ds(e,t)}function Bs(e,t){e.querySelectorAll(".leave-tab-btn").forEach(s=>{const o=s.dataset.leaveTab===t;s.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${o?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function Ds(e,t){const s=t.querySelector("#student-leave-body");let o="permit";try{const[l,c]=await Promise.all([Jt(e.id),Kt(e.id)]),i=c.filter(I=>I.status==="overdue").length,T=i>=3?"danger":i>=1?"warning":"safe",B=Ms[T],b=()=>{var r,p,k,E;let I="";if(l){const f=((p=(r=l.classes)==null?void 0:r.master_subjects)==null?void 0:p.subject_name)||((k=l.classes)==null?void 0:k.class_name)||"—";I=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${ee(f)} · เหตุผล: ${ee(l.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${ee(((E=l.teachers)==null?void 0:E.full_name)||"—")}</p>
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
        ${I}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},P=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${c.length?c.map(r=>{var C,L,_;const p=((L=(C=r.classes)==null?void 0:C.master_subjects)==null?void 0:L.subject_name)||((_=r.classes)==null?void 0:_.class_name)||"—",k=r.status==="active"?"🚪 กำลังออก":r.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",E=r.status==="active"?"text-amber-600":r.status==="overdue"?"text-red-600":"text-emerald-600",f=new Date(r.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${ee(p)}</span>
                  <span class="text-[10px] font-bold ${E}">${k}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${f} · ${ee(r.reason)} · ${r.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,H=()=>{if(s.innerHTML=o==="permit"?b():P(),Bs(t,o),t.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${o==="permit"?B.border:"border-transparent"}`,o==="permit"&&l){const I=s.querySelector("#student-leave-active-card"),r=s.querySelector("#student-leave-active-label"),p=s.querySelector("#student-leave-active-timer"),k=s.querySelector("#student-leave-active-detail"),E=s.querySelector("#student-leave-active-teacher"),f=()=>{const C=os(l.created_at,l.allowed_duration);p&&(p.textContent=C.timerText),C.isOverdue&&I&&!I.classList.contains("bg-red-50")&&(I.classList.remove("border-amber-200","bg-amber-50"),I.classList.add("border-red-200","bg-red-50","animate-pulse"),r&&(r.textContent="⛔ เลยเวลา",r.classList.replace("text-amber-700","text-red-700")),p&&p.classList.replace("text-amber-700","text-red-700"),k&&k.classList.replace("text-amber-800","text-red-800"),E&&E.classList.replace("text-amber-600","text-red-600")),C.isBeyondLimit&&I&&I.classList.remove("animate-pulse")};f(),t._leaveTimer=setInterval(f,1e3)}};t.querySelectorAll(".leave-tab-btn").forEach(I=>{I.addEventListener("click",()=>{t._leaveTimer&&clearInterval(t._leaveTimer),o=I.dataset.leaveTab,H()})}),H()}catch(l){s.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${ee(ge(l))}</p>`}}async function Lt(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const s=document.createElement("script");s.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",s.onload=()=>e(window.Html5Qrcode),s.onerror=o=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(s)})}const Ns="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",As="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let He=null;function Ps(){return He||(He=new Promise((e,t)=>{var o,l;if((l=(o=window.google)==null?void 0:o.accounts)!=null&&l.id){e();return}const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,s.onload=()=>e(),s.onerror=()=>t(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(s)}),He)}function aa(){var o;(o=document.getElementById("stu-email-link-modal"))==null||o.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e);const t=(l,c)=>{const i=e.querySelector("#sel-msg");i.className=`text-xs text-center py-2.5 rounded-xl ${c?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,i.textContent=l,i.classList.remove("hidden")},s=async(l,c,i)=>{c&&(c.disabled=!0);try{await bt(l),t(`เชื่อมอีเมล ${l} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(T){t("ไม่สำเร็จ: "+ge(T),!0),c&&(c.disabled=!1,c.textContent=i)}};Ps().then(()=>{window.google.accounts.id.initialize({client_id:Ns,ux_mode:"redirect",login_uri:As}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",l=>{l.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const l=e.querySelector("#sel-save"),c=e.querySelector("#sel-email").value.trim(),i=e.querySelector("#sel-email-confirm").value.trim();if(!c||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)){t("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(c!==i){t("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}l.textContent="กำลังบันทึก...",await s(c,l,"เชื่อมอีเมล")})}async function ra(e){try{await bt(e),K(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(t){K("เชื่อมอีเมลไม่สำเร็จ: "+ge(t),"error")}}const it={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},ct={};function ve(e="success",t=null){try{const s=it[e]?e:"error",o=t==="หญิง"?"female":"male",l=`${s}_${o}`;let c=ct[l];if(!c){const i="/pp5online/";c=new Audio(`${i}sounds/${it[s][o]}`),ct[l]=c}c.currentTime=0,c.volume=1,c.play().catch(i=>console.warn("Play scan sound failed:",i))}catch(s){console.error("Play scan sound failed",s)}}function Ke(e,t){const o=Et(t==null?void 0:t.semester_start,[]).find(l=>l.days.some(c=>c.ds===e));return o?o.n:1}async function na(e){var h,S;const t=e;window._lastSuccessFeedbackHTML="",le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,o]=await Promise.all([Ie().catch(()=>({})),jt().catch(()=>[])]);window._pp5SystemCfg=s;let l=!1;if(e.student_code)l=kt(e,s);else if(e.teacher_code){const n=(s.prayerScannerTeachers||"").split(/[\s,]+/).map(j=>j.trim()).filter(Boolean);let x=null;try{const j=await he.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();x=(j==null?void 0:j.data)??null}catch{}l=n.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(x==null?void 0:x.role)==="admin"}if(!l){le(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const c=!!e.teacher_code,i=!c&&St(e,s),T=Ze(s,i);if(!c&&!Ye(s,i)){le(`
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
      </div>`),(h=document.getElementById("scanner-btn-back-restricted"))==null||h.addEventListener("click",()=>{window._stuNav("overview")});return}const B=document.querySelector("nav.safe-area-bottom");B&&B.classList.add("hidden");const b=document.getElementById("sidebar"),P=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(b&&b.classList.add("hidden"),P&&P.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const H=Se(new Date);let I=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");I=I.filter(n=>n.check_date===H),localStorage.setItem("prayer_scan_history_today",JSON.stringify(I)),I.forEach(n=>window._syncedStudentIdsToday.add(n.student_id));let r=localStorage.getItem("prayer_scan_input_mode")||"camera",p=localStorage.getItem("prayer_scan_device_mode")||"single";const k=gs(e),E=localStorage.getItem("prayer_scan_active_location");let f=k.some(n=>n.id===E)?E:((S=k[0])==null?void 0:S.id)||"musolla_male",C=localStorage.getItem("prayer_scan_record_status")||"pray",L=!1,_=!1;const X="/pp5online/prayer-scanner-amanah.png";function ae(){var z,U;const n=Se(new Date),x=Ke(n,s),j=k.map(M=>`
      <option value="${M.id}" ${f===M.id?"selected":""}>${M.icon} ${M.label}${M.detail?` (${M.detail})`:""}</option>
    `).join(""),q=k.map(M=>`
      <button type="button" data-location="${M.id}"
        class="scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-emerald-100 text-xl flex items-center justify-center flex-shrink-0">${M.icon}</span>
          <span class="min-w-0">
            <span class="block text-sm font-extrabold">${M.label}</span>
            <span class="block text-xs text-gray-500 mt-0.5">${M.detail||"จุดสแกนละหมาด"}</span>
          </span>
          <span class="scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold border-gray-200 bg-white text-transparent">✓</span>
        </div>
      </button>
    `).join(""),Y=`
      <!-- Flash green screen overlay -->
      <div id="scanner-flash" class="fixed inset-0 pointer-events-none z-50 bg-emerald-500 opacity-0 transition-opacity duration-150 hidden"></div>
      <div id="scanner-time-warning-border" class="hidden fixed inset-0 pointer-events-none z-[60] border-4 border-red-500 rounded-[2rem] animate-pulse"></div>

      ${c?"":`
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

      ${c?"":`
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
              ${q}
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

      <div id="scanner-countdown-panel" class="${c?"bg-indigo-50 border-indigo-100 text-indigo-700":"bg-emerald-50 border-emerald-100 text-emerald-800"} rounded-2xl border px-4 py-3 mb-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <p class="text-[10px] font-bold uppercase tracking-wider opacity-70">${c?"สิทธิ์คุณครู":i?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-xs font-semibold mt-0.5">${c?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${T.startLabel} - ${T.endLabel} น.`}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <p class="text-[10px] font-bold opacity-70">เวลาคงเหลือ</p>
          <p id="scanner-countdown" class="font-mono text-2xl font-extrabold leading-none">${c?"∞":"--:--"}</p>
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
              <button id="opt-device-single" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${p==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📱 เครื่องเดียว
              </button>
              <button id="opt-device-dual" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${p==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📡 แยกสองเครื่อง
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📍 จุดพื้นที่สแกนปัจจุบัน (Active Location)</label>
          <select id="opt-active-location" class="w-full text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            ${j}
          </select>
        </div>

        ${e.gender==="หญิง"||e.teacher_code?`
        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📝 สถานะบันทึกเมื่อสแกน (Record Status)</label>
          <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
            <button id="opt-status-pray" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟢 ละหมาดปกติ
            </button>
            <button id="opt-status-usor" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟣 บันทึกอูโซร
            </button>
          </div>
        </div>
        `:""}

        <!-- iPad Monitor Display Link -->
        <div id="dual-monitor-link-area" class="mt-3.5 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3 ${p==="dual"?"":"hidden"}">
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
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const M=parseInt(s.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(M)?Math.max(0,M):2})()} ครั้ง/เดือน/คน</p>
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
    `,u=document.getElementById("stu-content")||document.getElementById("main-content");u&&(u.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${Y}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{pe(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),B&&B.classList.remove("hidden");const M=document.getElementById("sidebar"),O=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");M&&M.classList.remove("hidden"),O&&O.classList.add("md:ml-64"),e.teacher_code?mt(async()=>{const{renderPrayerAdmin:g}=await import("./views-Et56asKJ.js").then(F=>F.M);return{renderPrayerAdmin:g}},__vite__mapDeps([2,3,4,0,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])).then(({renderPrayerAdmin:g})=>{g(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{de("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{de("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{V("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{V("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{te()});const w=document.getElementById("scanner-manual-code-input"),N=document.getElementById("btn-submit-manual-scan"),J=()=>{const M=w==null?void 0:w.value.trim();if(!M){K("กรุณากรอกรหัสนักเรียน","warning"),w==null||w.focus();return}w.value="",ue(M,{inputMethod:"manual"})};N==null||N.addEventListener("click",J),w==null||w.addEventListener("keydown",M=>{M.key==="Enter"&&(M.preventDefault(),J())});const R=document.getElementById("opt-active-location");let re="";const v=M=>{const O=document.getElementById("btn-confirm-scanner-location");O&&(O.disabled=!M,O.className=M?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},a=(M=f)=>{document.querySelectorAll(".scanner-location-choice").forEach(O=>{const g=O.dataset.location===M;O.className=`scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] ${g?"border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm":"border-gray-200 bg-white text-gray-700 hover:bg-gray-50"}`;const F=O.querySelector(".scanner-location-check");F&&(F.className=`scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold ${g?"border-emerald-500 bg-emerald-600 text-white":"border-gray-200 bg-white text-transparent"}`)})},d=(M,{toast:O=!1}={})=>{k.some(g=>g.id===M)&&(f=M,localStorage.setItem("prayer_scan_active_location",f),R&&(R.value=f),a(),O&&K("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};R==null||R.addEventListener("change",M=>{d(M.target.value,{toast:!0})}),document.querySelectorAll(".scanner-location-choice").forEach(M=>{M.addEventListener("click",()=>{re=M.dataset.location||"",d(re),a(re),v(!!re)})}),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{oe("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{oe("usor")}));const D=()=>{_||(_=!0,W(),ce(),r==="camera"?ie():ye())},$=()=>{const M=document.getElementById("scanner-location-modal");if(!M){D();return}re="",a(""),v(!1),M.classList.remove("hidden"),M.classList.add("flex")};(z=document.getElementById("btn-confirm-scanner-location"))==null||z.addEventListener("click",()=>{var M;if(!re){K("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}localStorage.setItem("prayer_scan_active_location",f),(M=document.getElementById("scanner-location-modal"))==null||M.remove(),D()}),W();const G=document.getElementById("scanner-amanah-modal");G?(U=document.getElementById("btn-ack-scanner-amanah"))==null||U.addEventListener("click",()=>{G.remove(),$()}):$()}function de(n){n!==r&&(r=n,localStorage.setItem("prayer_scan_input_mode",n),n==="camera"?(_e(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),ie()):(pe(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),ye()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function V(n){if(n===p)return;p=n,localStorage.setItem("prayer_scan_device_mode",n);const x=document.getElementById("dual-monitor-link-area");n==="dual"?x.classList.remove("hidden"):x.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function oe(n){if(n===C)return;C=n,localStorage.setItem("prayer_scan_record_status",n);const x=document.getElementById("opt-status-pray"),j=document.getElementById("opt-status-usor");x&&j&&(x.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,j.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),K(`เปลี่ยนโหมดบันทึกเป็น: ${n==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function ce(){if(c)return;const n=document.getElementById("scanner-countdown"),x=document.getElementById("scanner-countdown-panel"),j=document.getElementById("scanner-time-warning-border");if(!n||!x||!j)return;const q=()=>{const Y=Es(s,i);n.textContent=Ls(Y);const u=Y<=Ss;x.classList.toggle("bg-red-50",u),x.classList.toggle("border-red-200",u),x.classList.toggle("text-red-700",u),x.classList.toggle("bg-emerald-50",!u),x.classList.toggle("border-emerald-100",!u),x.classList.toggle("text-emerald-800",!u),j.classList.toggle("hidden",!u),Y<=0&&(pe(),_e())};q(),window._activePrayerScannerState.countdownInterval=setInterval(q,1e3)}async function ie(){try{const n=await Lt(),x=new n("camera-reader");window._activePrayerScannerState.html5Qrcode=x;let j=null,q=0;const Y={fps:25,aspectRatio:1};await x.start({facingMode:"environment"},Y,u=>{u===j&&Date.now()-q<1800||(j=u,q=Date.now(),ue(u))},()=>{})}catch(n){console.error("Camera open failed:",n),K("ไม่สามารถเปิดใช้งานกล้องได้: "+(n.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function pe(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function ye(){const n=document.getElementById("scanner-gun-input");if(!n)return;n.focus();const x=setInterval(()=>{const j=document.getElementById("scanner-manual-code-input");document.activeElement!==n&&document.activeElement!==j&&document.getElementById("scanner-gun-input")&&n.focus()},1e3);window._activePrayerScannerState.focusInterval=x,n.addEventListener("keydown",j=>{if(j.key==="Enter"){j.preventDefault();const q=n.value.trim();n.value="",q&&ue(q)}})}function _e(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}async function ue(n,x={}){if(console.log("[Scanner] Raw scanned text:",n),!n)return;const j=x.inputMethod==="manual"?"manual":"qr";if(!c&&!Ye(s,i)){ve("error"),me(null,n,`ไม่อยู่ในช่วงเวลาบันทึกกิจกรรมละหมาด (${T.startLabel} - ${T.endLabel} น.)`);return}let q=String(n).trim(),Y=!1;if(q.startsWith("SQ:")){const O=q.split(":");if(O.length===3){const[,g,F]=O,A=parseInt(F,10),Q=Math.floor(Date.now()/1e3),se=Q-A,ne=parseInt(s.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${g}, QR Time: ${A}, Now: ${Q}, Diff: ${se}s, Allowed Expiry: ${ne}s`),(isNaN(A)||se>ne||se<-ne)&&(Y=!0),q=g.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",O.length),ve("error"),me(null,n,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const u=o.find(O=>String(O.student_code).trim()===q);if(console.log("[Scanner] Lookup result for code:",q,u?u.full_name:"not found"),Y){console.warn("[Scanner] QR Code has expired");const O=parseInt(s.studentQrExpirySeconds||"60",10);ve("error",u==null?void 0:u.gender),me(u,q,`QR Code นี้หมดอายุแล้ว (เกิน ${O} วินาที)`);return}if(!u){ve("error"),me(null,q,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const w=ys(u,f);if(w){ve("error",u.gender),me(u,q,w);return}const N=Se(new Date),J=lt(t.main_room),R=lt(u.main_room),re=!!J&&!!R&&J===R;if(!c&&re&&ks(u.gender,s)){ve("error",u.gender),me(u,q,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const v=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(v.some(O=>O.student_id===u.id&&O.check_date===N)){ve("duplicate",u.gender),me(u,q,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(u.id)){ve("duplicate",u.gender),me(u,q,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if(j==="manual"){const O=parseInt(s.prayerManualEntryMonthlyLimit??"2",10),g=Number.isFinite(O)?Math.max(0,O):2;if(g===0){ve("error",u.gender),me(u,q,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const F=v.filter(A=>A.student_id!==u.id||A.input_method!=="manual"||!A.check_date?!1:String(A.check_date).slice(0,7)===N.slice(0,7)).length;try{if(await Ct(u.id,N)+F>=g){ve("error",u.gender),me(u,q,`ใช้สิทธิ์กรอกรหัสครบ ${g} ครั้งในเดือนนี้แล้ว`);return}}catch(A){console.warn("Manual prayer count check failed:",A),ve("error",u.gender),me(u,q,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}const d=Ke(N,s);let D=C,$="";D==="usor"&&u.gender==="ชาย"&&(D="pray",$=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const G=t.teacher_code?`${t.full_name} (ครู)`:`${t.full_name} (รหัส ${t.student_code||"—"})`,z={student_id:u.id,main_room:u.main_room,check_date:N,status:D,week_number:d,location:f,full_name:u.full_name,student_code:u.student_code,scanned_by:G,input_method:j,scanner_code:t.teacher_code||t.student_code||null,scanner_name:t.full_name||null,scanner_room:t.main_room||null,scanner_gender:t.gender||null,same_room_flag:re};v.push(z),localStorage.setItem("prayer_scan_queue",JSON.stringify(v));let U=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");U=U.filter(O=>O.check_date===N),U.some(O=>O.student_id===u.id)||(U.unshift({student_id:u.id,full_name:u.full_name,student_code:u.student_code,main_room:u.main_room,check_date:N,status:D,input_method:j,same_room_flag:re}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(U))),window._syncedStudentIdsToday.add(u.id),ve("success",u.gender),Z(),me(u,q,`บันทึกสำเร็จลงเครื่องแล้ว${j==="manual"?" (กรอกรหัส)":""}${$}`,!0,D),W(),te()}function me(n,x,j,q=!1,Y="pray"){const u=document.getElementById("scanner-feedback-container");if(u){if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),q&&n){const w=Y==="usor",N=n.image_url?`<img src="${n.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${w?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${n.full_name.charAt(0)}</div>`,J=w?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';u.innerHTML=`
        <div class="bg-white/95 border ${w?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${N}
          <div class="flex-1 min-w-0">
            ${J}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${n.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${n.student_code} · ห้อง ${we(n.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${j}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${n.id}" data-name="${n.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=u.innerHTML,fe(u)}else{const w=n?n.full_name:"ไม่พบข้อมูล",N=n?`รหัส ${n.student_code} · ห้อง ${we(n.main_room)}`:`สแกนพบ: ${x}`;u.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${w}</h4>
            <p class="text-xs text-gray-500 truncate">${N}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${j}</p>
          </div>
        </div>`,u.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(u.innerHTML=window._lastSuccessFeedbackHTML,fe(u)):(u.innerHTML="",u.classList.add("hidden"))},3500);return}u.classList.remove("hidden")}}function fe(n){const x=n.querySelector("#btn-undo-scan");x&&x.addEventListener("click",()=>{const j=parseInt(x.dataset.sid,10),q=x.dataset.name;y(j,q)})}async function y(n,x){const j=Se(new Date);let q=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");q=q.filter(w=>!(w.student_id===n&&w.check_date===j)),localStorage.setItem("prayer_scan_queue",JSON.stringify(q));let Y=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");Y=Y.filter(w=>!(w.student_id===n&&w.check_date===j)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(Y)),window._syncedStudentIdsToday.delete(n),window._lastSuccessFeedbackHTML="";const u=document.getElementById("scanner-feedback-container");u&&(u.innerHTML="",u.classList.add("hidden")),W(),K(`กำลังยกเลิกรายการของ ${x}...`,"info");try{const{error:w}=await he.from("prayer_records").delete().eq("student_id",n).eq("check_date",j).is("teacher_id",null);if(w)throw w;K(`ยกเลิกบันทึกของ ${x} สำเร็จ ✕`,"success")}catch(w){console.warn("Failed to delete from server (offline?):",w),K("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function Z(){const n=document.getElementById("scanner-flash");n&&(n.classList.remove("hidden","opacity-0"),n.classList.add("opacity-40"),setTimeout(()=>{n.classList.remove("opacity-40"),n.classList.add("opacity-0"),setTimeout(()=>n.classList.add("hidden"),150)},120))}function W(n=!1){const x=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let j=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const q=Se(new Date);j=j.filter(R=>R.check_date===q);const Y=document.getElementById("scan-count-badge");Y&&(Y.textContent=`${j.length} คน`);const u=document.getElementById("sync-indicator"),w=document.getElementById("sync-title"),N=document.getElementById("sync-desc");if(!u||!w||!N)return;n?(u.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",w.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",N.textContent=`กำลังส่งข้อมูล ${x.length} คนขึ้นเซิร์ฟเวอร์`):x.length>0?(u.className="w-2.5 h-2.5 rounded-full bg-amber-500",w.textContent=`ค้างส่ง ${x.length} รายการ (ออฟไลน์)`,N.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(u.className="w-2.5 h-2.5 rounded-full bg-emerald-500",w.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",N.textContent="พร้อมบันทึกประวัติละหมาด");const J=document.getElementById("scan-list");J&&(j.length===0?J.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(J.innerHTML=j.map((R,re)=>{const v=x.some(G=>G.student_id===R.student_id),a=R.status==="usor",d=R.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",D=R.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",$=v?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':a?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${j.length-re}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${R.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${R.student_code} · ห้อง ${we(R.main_room)}</p>
              </div>
              ${d}
              ${D}
              ${$}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${R.student_id}" data-name="${R.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),J.querySelectorAll(".btn-cancel-scan-row").forEach(R=>{R.addEventListener("click",()=>{const re=parseInt(R.dataset.sid,10),v=R.dataset.name||"นักเรียน";y(re,v)})})))}async function te(){if(L)return;const n=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(n.length){L=!0,W(!0);try{const x=await ut(n);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),x!=null&&x.skippedCount?K(`ซิงก์สำเร็จ (ข้าม ${x.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):K("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(x){console.warn("Sync failed, offline backup kept:",x)}finally{L=!1,W()}}}const m=setInterval(()=>{te()},8e3);window._activePrayerScannerState.syncInterval=m,ae()}async function oa(e){if(!(e!=null&&e.can_scan_prayer)){le(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}le(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let t={},s=Se(new Date),o=[];const l=r=>{if(!r)return"—";const p=new Date(r);return`${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`},c=(r,p)=>{const k=new Date(r+"T00:00:00");return k.setDate(k.getDate()+p),Se(k)};async function i(){try{o=await Yt(e.student_code,s)}catch(p){o=[],K("โหลดข้อมูลไม่สำเร็จ: "+ge(p),"error")}const r=document.getElementById("sh-search-input");T((r==null?void 0:r.value.trim())??"")}function T(r=""){var f,C;const p=document.getElementById("sh-list"),k=document.getElementById("sh-count");if(!p)return;k&&(k.textContent=`${o.length} คน`);const E=r?o.filter(L=>{var _;return String(((_=L.students)==null?void 0:_.student_code)??"").includes(r)}):o;if(r&&!E.length){p.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${ee(r)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(f=document.getElementById("sh-resave-btn"))==null||f.addEventListener("click",()=>P(r)),(C=document.getElementById("sh-report-btn"))==null||C.addEventListener("click",()=>H(r));return}if(!E.length){p.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}p.innerHTML=E.map(L=>{const _=L.students??{},X=Be[L.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:L.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${_.image_url?`<img src="${_.image_url}" class="w-full h-full object-cover"/>`:ee((_.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${ee(_.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${ee(_.student_code??"—")} · ${ee(_.religion_room??_.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${X.cls}" title="${ee(X.title)}">${X.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${l(L.created_at)}</p>
        </div>
      </div>`}).join("")}async function B(){window._activePrayerScannerState={html5Qrcode:null};try{const r=await Lt(),p=new r("sh-camera-reader");window._activePrayerScannerState.html5Qrcode=p,await p.start({facingMode:"environment"},{fps:25,aspectRatio:1},k=>{var C;let E=String(k).trim();E.startsWith("SQ:")&&(E=E.split(":")[1]??E),b(),(C=document.getElementById("sh-camera-wrap"))==null||C.classList.add("hidden");const f=document.getElementById("sh-search-input");f&&(f.value=E),T(E)},()=>{})}catch(r){K("ไม่สามารถเปิดกล้องได้: "+(r.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function b(){var r;(r=window._activePrayerScannerState)!=null&&r.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function P(r){var C;let p=null;try{p=await at(r)}catch{}if(!p){K("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}(C=document.getElementById("sh-resave-modal"))==null||C.remove();const k=document.createElement("div");k.id="sh-resave-modal",k.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const E=Object.entries(Be);k.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${ee(p.full_name)} (รหัส ${ee(p.student_code)})<br/>${ee(p.religion_room??p.main_room??"—")} · วันที่ ${s}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${E.map(([L,_],X)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${X===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${L}">${_.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(k);let f=E[0][0];k.querySelectorAll(".sh-status-btn").forEach(L=>{L.addEventListener("click",()=>{f=L.dataset.status,k.querySelectorAll(".sh-status-btn").forEach(_=>{_.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),_.classList.add("border-gray-200","text-gray-500")}),L.classList.remove("border-gray-200","text-gray-500"),L.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),k.querySelector("#sh-resave-cancel").addEventListener("click",()=>k.remove()),k.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const L=k.querySelector("#sh-resave-confirm");L.disabled=!0,L.textContent="กำลังบันทึก...";try{const _={student_id:p.id,main_room:p.main_room,check_date:s,status:f,week_number:Ke(s,t),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await ut([_]),K("บันทึกสำเร็จ ✅","success"),k.remove(),await i()}catch(_){K("บันทึกไม่สำเร็จ: "+ge(_),"error"),L.disabled=!1,L.textContent="บันทึก"}})}async function H(r){let p=null;try{p=await at(r)}catch{}const E=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${p?`${p.full_name} (รหัส ${p.student_code}) ห้องศาสนา ${p.religion_room??p.main_room??"—"}`:`รหัสนักเรียน ${r} (ไม่พบชื่อในระบบ)`} วันที่ ${s} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(E):K("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function I(){t=await Ie().catch(()=>({})),le(`
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
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async r=>{s=r.target.value,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{s=c(s,-1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{s=c(s,1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await i()}),document.getElementById("sh-search-input").addEventListener("input",r=>{T(r.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const r=document.getElementById("sh-camera-wrap");r.classList.toggle("hidden"),r.classList.contains("hidden")?b():B()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var r;b(),(r=document.getElementById("sh-camera-wrap"))==null||r.classList.add("hidden")}),await i()}I()}export{ra as completeGoogleEmailLink,aa as openEmailLinkPrompt,ta as renderExamRequestForm,Cs as renderStudentAllAssignments,ea as renderStudentMyScores,Zs as renderStudentOverview,oa as renderStudentPrayerScanHistory,na as renderStudentPrayerScanner,sa as renderStudentProfile,qs as renderStudentRequests,Is as renderStudentSubjectDetail,Je as renderStudentSubjects};
