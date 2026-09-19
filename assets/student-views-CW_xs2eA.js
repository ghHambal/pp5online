const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-CnonnVVn.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/views-MaY0Yp8z.js","assets/ui-CHdefT5i.js","assets/version.js_v_10.22-mqYkeZoJ.js","assets/leave-monitor.js_v_10.18-BiKjYBa9.js","assets/leave-time-CrS9gT63.js","assets/sports-portals.js_v_10.22-CZLiBNBX.js","assets/sports-awards-admin-6oCPrlSb.js","assets/azizgames-modal-C0esVYMf.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/browser-JP79f-a9.js","assets/teacher-views-utils-B68DuafG.js","assets/teacher-views-classes-BlulhF1r.js","assets/pp5-doc-CLrzt9Hg.js","assets/score-display-BIDpG83o.js","assets/teacher-views-grades-D80Yd6id.js","assets/regrade-api-JnlABjxU.js","assets/score-qr-scanner-mLvI4Vrc.js","assets/teacher-views-attendance-DgwBiTzi.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-CiLyiHzY.js","assets/import-D0GLDW1_.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azfutsal-modal-Lu4DEcmR.js"])))=>i.map(i=>d[i]);
import{_ as xt,g as he}from"./ui-CHdefT5i.js";import{getSystemConfig as Ae,getClassScoreRounding as qt,submitQrReissueRequest as Mt,notifyQrReissueManagers as Tt,notifySubjectGroupAdmins as Bt}from"./api-CnonnVVn.js";import{i as Oe,c as nt,b as Dt,d as Ye,r as Nt}from"./score-display-BIDpG83o.js";import{c as bt,d as At,s as gt,e as Pt,f as We,h as Ht,i as Rt,j as Ot,k as zt,l as Ft,m as Gt,n as Qt,b as at,o as Vt,p as Wt,q as ft,r as Ut,u as yt,t as vt,v as Yt,w as Jt,x as Kt,y as Xt,z as Zt,A as es,B as ts,C as ss,D as as,E as rs,F as ns,G as os,H as ls,I as ot}from"./student-api-CIXkHU-1.js";import{g as ds}from"./theme-DIdoXkqD.js";import{_dateInputValue as ht,_currentWeek as is,applyReadingGradesFromConfig as cs,_readingGrade as ms,renderIconTile as Me}from"./teacher-views-utils-B68DuafG.js";import{g as wt,a as _t,b as $t,r as St}from"./quiz-api-BIDUVPR5.js";import{f as us}from"./leave-time-CrS9gT63.js";import{uploadAssignmentFile as ps}from"./storage-CuUjCgvI.js";import{A as xs}from"./version.js_v_10.22-mqYkeZoJ.js";import{s as Le}from"./supabase-BV-W2lsh.js";import{b as bs}from"./browser-JP79f-a9.js";import{g as gs}from"./regrade-api-JnlABjxU.js";import{y as fs,o as ys}from"./certificate-engine-CjKzMmMi.js";import{o as vs}from"./azfutsal-modal-Lu4DEcmR.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./print-overlay-BVfxEd6n.js";const Je=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function kt(e){var I;(I=document.getElementById("my-certificates-modal"))==null||I.remove();const t=document.body.style.overflow;document.body.style.overflow="hidden";const s=document.createElement("div");s.id="my-certificates-modal",s.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",s.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const o=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=t,s.remove()},l=n=>{n.key==="Escape"&&o()};document.addEventListener("keydown",l),document.body.appendChild(s),s.querySelector("[data-mycert-close]").addEventListener("click",o);const c=s.querySelector("#my-certificates-body"),d=[];(await fs(e.id).catch(()=>[])).forEach(n=>d.push({key:`central-${n.id}`,emoji:"🏅",title:n.title||"เกียรติบัตร",sub:new Date(n.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>ys({layout:n.layout_snapshot,variables:{name:e.full_name,date:new Date(n.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:n.certificate_no,...n.variables},docTitle:n.title})}));const T=await bt(e.main_room).catch(()=>null),b=T&&Number(T.head_student_id)===Number(e.id),A=T&&Number(T.vice_head_student_id)===Number(e.id),P=b?T==null?void 0:T.head_cert_url:A?T==null?void 0:T.vice_head_cert_url:null;P&&d.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${b?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(P,"_blank")});try{const{data:n}=await Le.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(n){const[{data:p},{data:_}]=await Promise.all([Le.rpc("get_my_sports_eligibility",{p_event:n.id}).then(k=>k.error?null:k.data).catch(()=>null),Le.from("outstanding_athletes").select("id, note, sports(name)").eq("event_id",n.id).eq("student_id",e.id).then(k=>k.data??[]).catch(()=>[])]);p!=null&&p.eligible&&(p!=null&&p.certificate_url)&&d.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(p.certificate_url,"_blank")}),_.forEach(k=>{var g;return d.push({key:`sports-award-${k.id}`,emoji:"🏆",title:((g=k.sports)==null?void 0:g.name)||"รางวัลนักกีฬาดีเด่น",sub:k.note||"",onOpen:null})})}}catch{}d.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>vs(e.student_code)}),c.innerHTML=d.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${d.map(n=>`
        <div data-key="${Je(n.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${n.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${n.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${Je(n.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${Je(n.sub||"")}</p>
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',d.forEach(n=>{var p;n.onOpen&&((p=c.querySelector(`[data-key="${CSS.escape(n.key)}"]`))==null||p.addEventListener("click",n.onOpen))})}const je=e=>(e??"").replace(/\/\d+/,"").trim(),Pe=e=>!e.mySubmission||e.mySubmission.status==="rejected",te=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ce(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function U(e,t="info"){const s={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},o=document.createElement("div");o.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${s[t]??s.info} transition-all`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2800)}const hs={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},ws={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},Ne={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Ve=["อา","จ","อ","พ","พฤ","ศ","ส"],He={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},Ke=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function _s(e){if(e!=null&&e.teacher_code)return Ke;const t=String((e==null?void 0:e.gender)||"").trim(),s=Ke.filter(o=>o.genders.includes(t));return s.length?s:Ke}function $s(e){const t=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!t)return{grade:null,isVoc:!1};const s=t.match(/^ม\.?([1-6])/);return{grade:s?parseInt(s[1],10):null,isVoc:t.startsWith("ปวช")}}function Ss(e,t){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:s,isVoc:o}=$s(e),l=t==="musolla_male",c=t==="masjid_kuwait";return!l&&!c?"":c&&!(s===6||o)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":l&&!(s>=1&&s<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function lt(e){const s=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(s.slice(0,2),16),g:parseInt(s.slice(2,4),16),b:parseInt(s.slice(4,6),16)}}function ks({r:e,g:t,b:s}){return"#"+[e,t,s].map(o=>Math.max(0,Math.min(255,Math.round(o))).toString(16).padStart(2,"0")).join("")}function ze(e,t,s){const o=lt(e),l=lt(t);return ks({r:o.r+(l.r-o.r)*s,g:o.g+(l.g-o.g)*s,b:o.b+(l.b-o.b)*s})}function De(e){if(!e)return"—";const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()+543}`}function Xe(e){if(!e)return"";const t=new Date(e),s=new Date;t.setHours(0,0,0,0),s.setHours(0,0,0,0);const o=Math.round((t-s)/864e5);return o>1?`อีก ${o} วัน`:o===1?"พรุ่งนี้":o===0?"วันนี้":o===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(o)} วัน`}function Es(e){var l,c,d;const t=((l=e.master_subjects)==null?void 0:l.subject_group)??"",s=e.skill_group??"";return(((d=(c=e.master_subjects)==null?void 0:c.teachers)==null?void 0:d.category)??"")==="ศาสนา"||t==="AGM"||t==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:t==="ACDMVOC"||s==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:s==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:s==="ชีวิต"?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:s==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function Ls(e,t={}){var T,b,A;const s=((T=e.master_subjects)==null?void 0:T.subject_group)??"",o=e.skill_group??"",l=((A=(b=e.master_subjects)==null?void 0:b.teachers)==null?void 0:A.category)??"",c=l==="ศาสนา"||s==="AGM"||s==="AGMVOC"?t.teacherReligionColor||"#b45309":s==="ACDMVOC"||o==="สามัญปวช"?t.teacherVocColor||"#7c3aed":o==="ภาษา"?t.teacherLanguageColor||"#2563eb":o==="ชีวิต"?t.teacherLifeColor||"#059669":o==="วิชาการ"?t.teacherAcademicColor||"#ea580c":t.teacherDefaultColor||"#059669",d=l==="ศาสนา"||s==="AGM"||s==="AGMVOC"?s==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":s==="ACDMVOC"||o==="สามัญปวช"?"กลุ่มสามัญ ปวช":o?`กลุ่มทักษะ: ${o}`:"กลุ่มวิชาสามัญ",M=d.replace("กลุ่มทักษะ: ","");return{color:c,label:d,short:M,bg:ze(c,"#ffffff",.9),badgeBg:ze(c,"#ffffff",.86),border:ze(c,"#ffffff",.35),text:ze(c,"#000000",.35)}}function Ze(e=0){const t=new Date,s=t.getDay(),o=new Date(t);o.setDate(t.getDate()-(s===0?6:s-1)),o.setDate(o.getDate()+e*7);const l=new Date(o);l.setDate(o.getDate()-1);const c={};c[0]=l;for(let d=1;d<=7;d++){const M=new Date(o);M.setDate(o.getDate()+d-1),c[d]=M}return c}function Fe(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const Et="12:20",js="12:50",Cs="13:05",Is=60;function Qe(e,t){const o=String(e||t||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return Qe(t,Et);const l=Math.max(0,Math.min(23,parseInt(o[1],10))),c=Math.max(0,Math.min(59,parseInt(o[2],10)));return l*60+c}function dt(e){const t=(e%1440+1440)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Be(e){return String(e||"").split(/[\s,]+/).map(t=>t.trim()).filter(Boolean)}function it(e,t=!1){return e==null||e===""?t:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function qs(e,t={}){return String(e||"").trim()==="หญิง"?it(t.prayerSameRoomGuardFemaleEnabled,!1):it(t.prayerSameRoomGuardMaleEnabled,!0)}function ct(e){return String(e||"").replace(/\s+/g,"").trim()}function Lt(e,t={}){return e!=null&&e.student_code?Be(t.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function jt(e,t={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const s=String(e.student_code).trim(),o=Be(t.prayerScannerSun),l=Be(t.prayerScannerMon),c=Be(t.prayerScannerTue),d=Be(t.prayerScannerWed),M=Be(t.prayerScannerThu);if(!(o.includes(s)||l.includes(s)||c.includes(s)||d.includes(s)||M.includes(s)))return!0;const b=new Date().getDay();return!!(b===0&&o.includes(s)||b===1&&l.includes(s)||b===2&&c.includes(s)||b===3&&d.includes(s)||b===4&&M.includes(s))}function rt(e={},t=!1){const s=Qe(e.prayerScanStartTime,Et),o=Qe(e.prayerScanEndTime,js),l=Qe(e.prayerScanExtendedEndTime,Cs),c=t?l:o;return{start:s,end:c,startLabel:dt(s),endLabel:dt(c)}}function et(e={},t=!1){const s=new Date,o=s.getHours(),l=s.getMinutes(),c=o*60+l,{start:d,end:M}=rt(e,t);return M<d?c>=d||c<=M:c>=d&&c<=M}function Ms(e={},t=!1){const s=new Date,o=s.getHours()*3600+s.getMinutes()*60+s.getSeconds(),{start:l,end:c}=rt(e,t),d=l*60;let M=c*60,T=o;return c<l&&T<d&&(T+=86400),c<l&&(M+=86400),Math.max(0,M-T)}function Ts(e){const t=Math.floor(e/60),s=e%60;return`${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function qe(e){var d,M;let t=e.getFullYear();const s=((d=window._pp5SystemCfg)==null?void 0:d.academicYear)||((M=window._pp5SystemCfg)==null?void 0:M.academic_year)||2569,o=parseInt(s)-543;(t>2030||t<2024)&&(t=o);const l=String(e.getMonth()+1).padStart(2,"0"),c=String(e.getDate()).padStart(2,"0");return`${t}-${l}-${c}`}function Ct(e,t=[]){const s=t.map(d=>d.check_date).filter(Boolean).sort()[0],o=e||s||new Date().toISOString().slice(0,10),l=new Date(o);l.setHours(0,0,0,0);const c=l.getDay();return c&&l.setDate(l.getDate()-c),Array.from({length:20},(d,M)=>{const T=Array.from({length:5},(b,A)=>{const P=new Date(l);return P.setDate(l.getDate()+M*7+A),{date:P,ds:qe(P),day:Ve[A]}});return{n:M+1,days:T}})}function mt(e,t){const s=Object.fromEntries((t??[]).map(o=>[o.column_id,o.score]));return(e??[]).map(o=>({...o,score:s[o.id]??null}))}async function ia(e){var ke,f,Z,z,se;ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,o,l,c,d,M,T]=await Promise.all([We(e.id).catch(()=>[]),at(e.id).catch(()=>[]),es(e.id).catch(()=>({linked:[],unlinked:[]})),ts(e.id).catch(()=>[]),ss(e.id).catch(()=>({samai:[],sasana:[]})),Ae().catch(()=>({})),bt(e.main_room).catch(()=>null),vt(e.id).catch(()=>[])]),b=T.filter(Pe).sort((i,h)=>(i.due_at?new Date(i.due_at).getTime():1/0)-(h.due_at?new Date(h.due_at).getTime():1/0)),A=s.filter(i=>i.status==="pending"),P=s.slice(0,3),I=Lt(e,d),n=await Promise.all(t.map(i=>wt(i.id,e.id).catch(()=>[]))),p=t.flatMap((i,h)=>(n[h]??[]).map(E=>({...E,_class:i}))),_=await _t(p.map(i=>i.id),e.id).catch(()=>new Set),k=p.filter(i=>{if(i.status!=="started"||_.has(i.id))return!1;const h=i.attempts.filter(r=>r.status==="submitted"||r.status==="terminated_violation").length;return!(i.attempts.length&&i.attempts[i.attempts.length-1].status==="terminated_violation")&&h<i.max_attempts}),g=M&&Number(M.head_student_id)===Number(e.id),C=M&&Number(M.vice_head_student_id)===Number(e.id),$=(d.council_test_student_codes||"").split(/[\s,]+/).map(i=>i.trim()).filter(Boolean),w=d.council_visible_to_all!=="false"||$.includes(e.student_code);let X=!1;try{const{data:i,error:h}=await Le.rpc("get_terangganu_access");h||(X=(i==null?void 0:i.visible)===!0&&(i==null?void 0:i.student_allowed)===!0)}catch{X=!1}let ne=!1,de=0;try{const[i,h]=await Promise.all([gs(),Promise.resolve(Le.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);ne=((ke=i.visibility)==null?void 0:ke.student_menu)===!0,de=Number(h==null?void 0:h.count)||0}catch{ne=!1,de=0}let G=!0;try{const{data:i}=await Le.from("settings").select("value").eq("key","sports_visibility").maybeSingle();i!=null&&i.value&&(G=i.value.enabled!==!1&&i.value.student_menu!==!1)}catch{G=!0}let ie=!1;try{const{data:i}=await Le.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();ie=!!i}catch{ie=!1}let ue=!1;try{const{data:i}=await Le.from("attendance_delegates").select("id, classes!inner(attendance_delegate_enabled)").eq("student_id",e.id).eq("classes.attendance_delegate_enabled",!0).limit(1);ue=!!(i!=null&&i.length)}catch{ue=!1}ce(`
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
          ${C?`
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
      ${[G,ie,w,X,ne,e.can_scan_prayer,ue].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Me({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},d.iconTileStyle)}
        ${G?Me({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},d.iconTileStyle):""}
        ${ie?Me({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},d.iconTileStyle):""}
        ${w?Me({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},d.iconTileStyle):""}
        ${X?Me({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},d.iconTileStyle):""}
        ${ne?Me({id:"student-regrade-tile",emoji:"📋",label:"แก้ค้างเก่า",from:"#FBD0D6",to:"#E0616F",badge:de,onclick:"window.location.href='regrade.html'"},d.iconTileStyle):""}
        ${e.can_scan_prayer?Me({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},d.iconTileStyle):""}
        ${ue?Me({id:"student-attendance-delegate-tile",emoji:"✅",label:"เช็คชื่อ<br>แทนครู",from:"#CDEBD6",to:"#4CA778",onclick:"window._stuNav('attendance_delegate')"},d.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${jt(e,d)&&et(d,I)?`
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
    ${k.map(i=>{var E,r;const h=i.attempts.some(x=>x.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${h?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${te(i.title)} · ${te(((r=(E=i._class)==null?void 0:E.master_subjects)==null?void 0:r.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${i.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
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
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${A.length}</p>
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
      ${(()=>{const i=`stu_ann_seen_${e.id}`,h=new Set(JSON.parse(localStorage.getItem(i)??"[]")),E=l.filter(r=>!h.has(r.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${l.length} รายการ</p>
          ${E>0?`<span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">${E}</span>`:""}
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
    ${(()=>{const i=b.length>0,h=b[0],E=h!=null&&h.due_at?new Date(h.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${i?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${i?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${i?`ค้างอยู่ ${b.length} ชิ้น · ใกล้สุด: ${te(h.title)}${E?` (${E})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const h=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],E=new Date,r=E.getHours()*3600+E.getMinutes()*60+E.getSeconds(),x=v=>{if(!v)return null;const[D,Q]=v.split(":").map(Number);return D*3600+Q*60},S=o.linked.map(({cls:v,sched:D,period:Q})=>{var re,K;const O=v==null?void 0:v.master_subjects,oe=x(Q==null?void 0:Q.start_time),y=x(Q==null?void 0:Q.end_time),R=oe!=null&&y!=null&&r>=oe&&r<y,Y=y!=null&&r>=y,J=R?"🟢":Y?"✅":"⬜",H=Q?`${(re=Q.start_time)==null?void 0:re.slice(0,5)}–${(K=Q.end_time)==null?void 0:K.slice(0,5)}`:`คาบ ${D.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${J}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${D.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(O==null?void 0:O.subject_name)??D.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${H} · ${(v==null?void 0:v.class_name)??""}</p>
          </div>
          ${R?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),q=l.filter(v=>v.ann_type==="deadline"&&v.deadline_at&&new Date(v.deadline_at)>E).sort((v,D)=>new Date(v.deadline_at)-new Date(D.deadline_at)).slice(0,5),V=v=>{const D=new Date(v)-E,Q=Math.floor(D/6e4);if(Q<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${Q} น.</span>`;const O=Math.floor(Q/60);return O<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${O} ชม. ${Q%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(O/24)} วัน</span>`},m=q.map(v=>{var Q,O;const D=(Q=v.cls)==null?void 0:Q.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${v.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(D==null?void 0:D.subject_name)??""} · ${((O=v.cls)==null?void 0:O.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${V(v.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${h}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${E.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
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
        ${m?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${m}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${P.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${P.map(i=>{var r;const h=Ne[i.status]??Ne.pending,E=i.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${((r=E==null?void 0:E.master_subjects)==null?void 0:r.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${i.request_type} · ${De(i.requested_date)}</p>
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
  `);const me=document.getElementById("stu-live-clock");if(me){const i=()=>{const E=new Date;me.textContent=`${String(E.getHours()).padStart(2,"0")}:${String(E.getMinutes()).padStart(2,"0")}:${String(E.getSeconds()).padStart(2,"0")}`};i();const h=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(h);return}i()},1e3)}const be=(i,h)=>{const E=document.createElement("div");return E.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",E.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${i}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${h}</div>`,document.body.appendChild(E),E.querySelector("#stu-popup-back").addEventListener("click",()=>E.remove()),E},$e=o.linked.find(({period:i})=>{if(!(i!=null&&i.start_time)||!(i!=null&&i.end_time))return!1;const h=new Date,E=h.getHours()*3600+h.getMinutes()*60+h.getSeconds(),[r,x]=i.start_time.split(":").map(Number),[S,q]=i.end_time.split(":").map(Number);return E>=r*3600+x*60&&E<S*3600+q*60});if($e){const i=(()=>{const[E,r]=$e.period.end_time.split(":").map(Number);return E*3600+r*60})(),h=setInterval(()=>{const E=document.getElementById("stu-period-countdown");if(!E){clearInterval(h);return}const r=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),x=Math.max(0,i-r);if(x===0){E.textContent="หมดคาบ",clearInterval(h);return}const S=Math.floor(x/3600),q=Math.floor(x%3600/60),V=x%60;E.textContent=`${String(S).padStart(2,"0")}:${String(q).padStart(2,"0")}:${String(V).padStart(2,"0")}`},1e3)}const Ce={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},Se=i=>{if(!i)return"";const h=new Date(i),r=Math.floor((h-new Date)/6e4),x=h.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if(r<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${x}</span>`;if(r<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${r} น. · ${x}</span>`;const S=Math.floor(r/60);return S<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${S} ชม. ${r%60} น. · ${x}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(S/24)} วัน · ${x}</span>`};(f=document.getElementById("btn-stu-my-certificates"))==null||f.addEventListener("click",()=>kt(e)),(Z=document.getElementById("btn-stu-anns"))==null||Z.addEventListener("click",()=>{const i=`stu_ann_seen_${e.id}`,h=new Set(JSON.parse(localStorage.getItem(i)??"[]"));l.forEach(x=>h.add(x.id)),localStorage.setItem(i,JSON.stringify([...h]));const E=document.querySelector("#btn-stu-anns span.absolute");E&&E.remove();const r=l.length?`<div class="space-y-3">${l.map(x=>{var V,m,v;const S=Ce[x.ann_type]??Ce.general,q=(V=x.cls)==null?void 0:V.master_subjects;return`<div class="rounded-2xl border ${S.border} ${S.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${x.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${S.icon} ${S.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(q==null?void 0:q.subject_name)??""} · ${((m=x.cls)==null?void 0:m.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${x.title??""}</p>
        ${x.body?`<p class="text-xs text-gray-500 mt-1">${x.body}</p>`:""}
        ${x.ann_type==="deadline"&&x.deadline_at?`<div class="mt-2">${Se(x.deadline_at)}</div>`:""}
        ${x.file_url?`<a href="${x.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(v=x.attachment_urls)!=null&&v.length?`<div class="flex flex-wrap gap-1.5 mt-2">${x.attachment_urls.map(D=>`<a href="${te(D.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${te(D.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';be("📢 ประกาศของฉัน",r)}),(z=document.getElementById("btn-stu-gpa"))==null||z.addEventListener("click",()=>{const i=y=>{const R=y.filter(H=>H.grade!=null);if(!R.length)return null;const Y=R.reduce((H,re)=>H+(re.credit||1),0),J=R.reduce((H,re)=>H+re.grade*(re.credit||1),0);return Y>0?(J/Y).toFixed(2):null},h=y=>y==null?"text-gray-400":y>=3.5?"text-emerald-600":y>=3?"text-blue-500":y>=2?"text-amber-600":"text-red-500",E=y=>y>=3.5?"ดีเยี่ยม":y>=3?"ดี":y>=2?"พอใช้":y>=1?"ผ่าน":"ไม่ผ่าน",r=y=>y.grade==null&&y.totalCols>0?`<span class="text-[10px] font-semibold text-amber-500 whitespace-nowrap" title="ครูให้คะแนนแล้ว ${y.scoredCount}/${y.totalCols} ช่อง — วิชานี้ยังไม่ถูกนับเข้าเกรดเฉลี่ยจนกว่าจะครบ">⏳ ${y.scoredCount}/${y.totalCols} · ยังไม่นับเข้า GPA</span>`:null,x=(y,R,Y)=>{const H=y.filter(K=>K.grade!=null).reduce((K,ee)=>K+(ee.credit||1),0),re=parseFloat(R);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${Y}" class="text-5xl font-extrabold ${R?h(re):"text-gray-300"} hover:opacity-70 transition">${R??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${R?h(re):"text-gray-400"}">${R?E(re):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${y.length?`
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
            ${y.map((K,ee)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${ee+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${K.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${K.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${K.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${K.score!=null?K.score:r(K)??"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${h(K.grade)}">${K.grade!=null?K.grade.toFixed(1):r(K)?"":"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${K.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${K.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${H}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${H}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${h(R?re:null)}">${R??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},S=(y,R,Y)=>{const J=parseFloat(R);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${Y}" class="text-5xl font-extrabold ${R?h(J):"text-gray-300"} hover:opacity-70 transition">${R??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${R?h(J):"text-gray-400"}">${R?E(J):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${y.length?`
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${y.map(H=>`
        <button class="gpa-pp5-btn text-left border border-gray-200 rounded-2xl p-3 hover:shadow-md transition bg-white" data-class-id="${H.classId}">
          <p class="text-[10px] text-gray-400 font-mono truncate">${H.subjectCode??""}</p>
          <p class="font-bold text-xs text-gray-800 leading-tight line-clamp-2 mt-0.5 min-h-[2rem]">${H.subjectName}</p>
          <div class="flex items-center justify-between mt-2 gap-1">
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${H.credit} นก. ${H.hasRetake?"· แก้":""}</span>
            ${r(H)??`<span class="text-lg font-extrabold ${h(H.grade)}">${H.grade!=null?H.grade.toFixed(1):"—"}</span>`}
          </div>
        </button>`).join("")}
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},q=i(c.samai),V=i(c.sasana),m=y=>{const R=y==="samai"?c.samai:c.sasana,Y=y==="samai"?q:V;return(localStorage.getItem("studentGpaView")==="card"?"card":"table")==="card"?S(R,Y,y):x(R,Y,y)},v=`
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
      <div id="gpa-pop-samai">${m("samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${m("sasana")}</div>`,D=be("🎓 เกรดเฉลี่ยของฉัน",v),Q=()=>{D.querySelectorAll(".gpa-pp5-btn").forEach(y=>{y.addEventListener("click",()=>{var Y;const R=Number(y.dataset.classId);D.remove(),(Y=window._stuOpenClass)==null||Y.call(window,R)})}),["samai","sasana"].forEach(y=>{const R=D.querySelector(`#gpa-val-btn-${y}`);R&&R.addEventListener("click",()=>{const J=(y==="samai"?c.samai:c.sasana).filter(N=>N.grade!=null),H=J.reduce((N,F)=>N+(F.credit||1),0),re=J.reduce((N,F)=>N+F.grade*(F.credit||1),0),K=H>0?(re/H).toFixed(2):"—",ee=document.createElement("div");ee.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",ee.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
            <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
            <div class="text-sm text-gray-600 mb-3">
              <p class="font-mono text-base font-semibold text-purple-700">
                Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
              <p class="text-gray-700">${re.toFixed(2)} ÷ ${H}</p>
              <p class="text-purple-700 font-bold text-lg mt-1">= ${K}</p>
            </div>
            <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่ครูให้คะแนนครบทุกช่องแล้วเท่านั้น (${J.length} วิชา)</p>
            <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
          </div>`,document.body.appendChild(ee),ee.querySelector("#gpa-tip-close").addEventListener("click",()=>ee.remove()),ee.addEventListener("click",N=>{N.target===ee&&ee.remove()})})})},O=()=>{const y=localStorage.getItem("studentGpaView")==="card"?"card":"table";D.querySelector("#gpa-view-table").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${y==="table"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`,D.querySelector("#gpa-view-card").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${y==="card"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`};O(),Q();const oe=y=>{localStorage.setItem("studentGpaView",y==="card"?"card":"table"),D.querySelector("#gpa-pop-samai").innerHTML=m("samai"),D.querySelector("#gpa-pop-sasana").innerHTML=m("sasana"),O(),Q()};D.querySelector("#gpa-view-table").addEventListener("click",()=>oe("table")),D.querySelector("#gpa-view-card").addEventListener("click",()=>oe("card")),D.querySelectorAll(".gpa-pop-tab").forEach(y=>{y.addEventListener("click",()=>{const R=y.dataset.tab;D.querySelector("#gpa-pop-samai").classList.toggle("hidden",R!=="samai"),D.querySelector("#gpa-pop-sasana").classList.toggle("hidden",R!=="sasana"),D.querySelectorAll(".gpa-pop-tab").forEach(Y=>{Y.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${Y.dataset.tab===R?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})})}),window._stuOpenClassFromTT=i=>{var h;document.querySelectorAll(".stu-fullpop").forEach(E=>E.remove()),window._stuFromTimetable=!0,(h=window._stuOpenClass)==null||h.call(window,i)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const xe=async()=>{const i=be("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:h,periods:E}=await as(e.id).catch(()=>({slots:[],periods:[]})),r=i.querySelector(".flex-1.overflow-y-auto");if(!r)return;const x=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],S=["อา","จ","อ","พ","พฤ","ศ","ส"],q=[0,1,2,3,4,5,6].filter(y=>h.some(R=>R.dow===y)),V=new Date().getDay();let m="day",v=q.includes(V)?V:q[0]??0;const D={};h.forEach(y=>{D[`${y.dow}-${y.periodNo}`]=y});const Q=y=>{var N,F,a,u;const R=new Date,Y=R.getHours()*3600+R.getMinutes()*60+R.getSeconds(),J={};h.filter(L=>L.dow===y&&L.span>1).forEach(L=>{for(let B=1;B<L.span;B++)J[L.periodNo+B]=L.periodNo});const H=((F=(N=E.find(L=>L.period_no===5))==null?void 0:N.end_time)==null?void 0:F.slice(0,5))??"",re=((u=(a=E.find(L=>L.period_no===6))==null?void 0:a.start_time)==null?void 0:u.slice(0,5))??"",K=H&&re?`${H}–${re}`:"";let ee="";return E.forEach(L=>{var we,Re;L.period_no===6&&E.find(Ue=>Ue.period_no===5)&&(ee+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${K?`<p class="text-[10px] text-emerald-500 mt-0.5">${K}</p>`:""}
            </td></tr>`);const B=D[`${y}-${L.period_no}`],W=(B==null?void 0:B.span)??1,le=W>1?E.find(Ue=>Ue.period_no===L.period_no+W-1)??L:L,[ge,ve]=(L.start_time??"0:0").split(":").map(Number),[Te,j]=(le.end_time??"0:0").split(":").map(Number),ae=Y>=ge*3600+ve*60&&Y<Te*3600+j*60,pe=(we=B==null?void 0:B.cls)==null?void 0:we.master_subjects,Ee=["AGM","AGMVOC"].includes((pe==null?void 0:pe.subject_group)??""),Ie=B?Ee?"bg-amber-50":"bg-emerald-50":"",fe=B?Ee?"text-amber-800":"text-emerald-800":"text-gray-300",ye=J[L.period_no]!=null;ee+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${ae?"text-emerald-600":"text-gray-500"}">คาบ ${L.period_no}</p>
            <p class="text-[10px] text-gray-400">${((Re=L.start_time)==null?void 0:Re.slice(0,5))??""}</p>
          </td>
          ${ye?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${W>1?`rowspan="${W}"`:""}
              ${B?`onclick="window._stuOpenClassFromTT(${B.cls.id})"`:""}>
            ${B?`
              <div class="rounded-xl ${Ie} border-l-4 ${Ee?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${ae?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${W>1?W*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${fe} leading-tight">${(pe==null?void 0:pe.subject_name)??"—"}</p>
                <p class="text-[10px] ${fe} opacity-60 mt-0.5">${(pe==null?void 0:pe.subject_code)??""}</p>
                ${ae?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${ee}</tbody>
      </table>`},O=()=>{const y=`${Math.floor(100/(q.length+1))}%`,R=`<th style="width:${y}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+q.map(H=>`<th style="width:${y}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${H===V?"text-teal-600":"text-gray-600"}">${S[H]}</th>`).join(""),Y={};q.forEach(H=>{Y[H]=new Set});let J="";return E.forEach((H,re)=>{var N,F,a,u;const K=new Date;K.getHours()*3600+K.getMinutes()*60+K.getSeconds();const ee=q.map(L=>{var fe;if(Y[L].has(H.period_no))return"";const B=D[`${L}-${H.period_no}`],W=(B==null?void 0:B.span)??1,le=(fe=B==null?void 0:B.cls)==null?void 0:fe.master_subjects,ge=["AGM","AGMVOC"].includes((le==null?void 0:le.subject_group)??""),ve=B?ge?"bg-amber-50":"bg-emerald-50":"",Te=B?ge?"text-amber-700":"text-emerald-700":"text-gray-200",j=W>1?E.find(ye=>ye.period_no===H.period_no+W-1)??H:H,[ae,pe]=(H.start_time??"0:0").split(":").map(Number),[Ee,Ie]=(j.end_time??"0:0").split(":").map(Number);for(let ye=1;ye<W;ye++)Y[L].add(H.period_no+ye);return`<td style="width:${y};padding:2px" ${W>1?`rowspan="${W}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${B?`onclick="window._stuOpenClassFromTT(${B.cls.id})"`:""}>
            ${B?`
              <div class="rounded-lg ${ve} border-l-2 ${ge?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${W>1?W*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${Te} text-[8px] font-semibold leading-tight line-clamp-3">${(le==null?void 0:le.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(J+=`<tr>
          <td style="width:${y}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${H.period_no}</p>
            <p class="text-[8px] text-gray-300">${((N=H.start_time)==null?void 0:N.slice(0,5))??""}</p>
          </td>${ee}</tr>`,H.period_no===5&&E.find(L=>L.period_no===6)){const L=((F=H.end_time)==null?void 0:F.slice(0,5))??"",B=((u=(a=E.find(W=>W.period_no===6))==null?void 0:a.start_time)==null?void 0:u.slice(0,5))??"";J+=`<tr><td colspan="${q.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${L&&B?` ${L}–${B}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${R}</tr></thead>
          <tbody>${J}</tbody>
        </table>
      </div>`},oe=()=>{var R,Y,J,H;const y=m==="week";if(r.innerHTML=`
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${y?"text-gray-500":"bg-white shadow text-teal-600"}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${y?"bg-white shadow text-teal-600":"text-gray-500"}">ทั้งสัปดาห์</button>
        </div>
        ${y?"":`
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${x[v]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>`}
      </div>
      ${y?O():Q(v)}
      ${h.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(R=r.querySelector("#tt-btn-day"))==null||R.addEventListener("click",()=>{m="day",oe()}),(Y=r.querySelector("#tt-btn-week"))==null||Y.addEventListener("click",()=>{m="week",oe()}),(J=r.querySelector("#tt-prev"))==null||J.addEventListener("click",()=>{const re=q.indexOf(v);v=q[(re-1+q.length)%q.length],oe()}),(H=r.querySelector("#tt-next"))==null||H.addEventListener("click",()=>{const re=q.indexOf(v);v=q[(re+1)%q.length],oe()}),!y&&r.querySelector("#tt-day-cd")){const K=E.find(ee=>{if(!D[`${v}-${ee.period_no}`]||!ee.end_time)return!1;const F=new Date,a=F.getHours()*3600+F.getMinutes()*60+F.getSeconds(),[u,L]=ee.end_time.split(":").map(Number),[B,W]=(ee.start_time??"0:0").split(":").map(Number);return a>=B*3600+W*60&&a<u*3600+L*60});if(K){const[ee,N]=K.end_time.split(":").map(Number),F=ee*3600+N*60,a=setInterval(()=>{const u=r.querySelector("#tt-day-cd");if(!u){clearInterval(a);return}const L=new Date,B=Math.max(0,F-L.getHours()*3600-L.getMinutes()*60-L.getSeconds()),W=Math.floor(B/3600),le=Math.floor(B%3600/60),ge=B%60;u.textContent=`${String(W).padStart(2,"0")}:${String(le).padStart(2,"0")}:${String(ge).padStart(2,"0")}`,B===0&&clearInterval(a)},1e3)}}};oe()};window._stuOpenTimetablePopup=xe,(se=document.getElementById("btn-stu-timetable"))==null||se.addEventListener("click",xe),window._stuStartQuiz=async i=>{try{const h=await $t(i,e.id).catch(()=>null);if(h&&h.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${h.id}`;return}const E=await St(i);window.location.href=`quiz-exam.html?attempt=${E.id}`}catch(h){U("เข้าสอบไม่สำเร็จ: "+he(h),"error")}}}async function ca(e,t="life"){ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await Ae().catch(()=>({}));cs(s);const o=s.academicYear,l=s.semester,[c,d,M]=await Promise.all([Yt(e.id,o,l).catch(G=>({columns:[],scores:[],error:G})),Jt(e.id,o,l).catch(G=>({columns:[],scores:[],error:G})),Kt(e.id).catch(G=>Object.assign([],{error:G}))]),T=mt(c.columns,c.scores),b=mt(d.columns,d.scores),A=b.reduce((G,ie)=>G+(parseFloat(ie.score)||0),0),P=b.reduce((G,ie)=>G+(parseFloat(ie.max_score)||0),0),I=P>0?Math.round(A/P*1e3)/10:0,n=A>0?ms(I):null,p=Object.fromEntries((M??[]).map(G=>[G.check_date,G.status])),_=Ct(s.semester_start,M??[]),k=_.flatMap(G=>G.days),g=k.reduce((G,ie)=>{var ue;return G+(((ue=He[p[ie.ds]])==null?void 0:ue.score)??0)},0),C=k.length*2,$=C?Math.max(0,Math.round(g/C*100)/10):0,w=(G,ie,ue,me)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${ie} ${G}</h3>
        <span class="text-[11px] text-gray-400">${ue.length} หัวข้อ</span>
      </div>
      ${ue.length?`<div class="divide-y divide-gray-50">
        ${ue.map(be=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${be.name}</p>
              <p class="text-[11px] text-gray-400">${be.sheet_col?`คอลัมน์ ${be.sheet_col} · `:""}เต็ม ${be.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${me}">${be.score??"—"}</p>
              <p class="text-[10px] text-gray-400">/ ${be.max_score??"—"}</p>
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
          <p class="text-lg font-bold text-amber-600">${$}</p>
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
            ${_.map(G=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${G.n}</td>
              ${G.days.map(ie=>{const ue=p[ie.ds],me=He[ue];return`<td class="px-1 py-1 text-center">
                  <span title="${(me==null?void 0:me.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(me==null?void 0:me.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(me==null?void 0:me.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(He).map(G=>`<span><b class="${G.cls.split(" ").find(ie=>ie.startsWith("text-"))??""}">${G.label}</b> ${G.title}</span>`).join("")}
      </div>
    </section>
  `,ne={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[t]??"คะแนนทักษะชีวิต",de={life:w("คะแนนทักษะชีวิต","🌱",T,"text-emerald-600"),prayer:X,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${n?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${n.cls}">${n.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${A?`${I} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${A||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${P||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${A?I:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${w("คะแนนอ่านคิดวิเคราะห์ฯ","📖",b,"text-sky-600")}
    `}[t]??w("คะแนนทักษะชีวิต","🌱",T,"text-emerald-600");ce(`
    <h2 class="font-bold text-gray-800 mb-1">📊 คะแนนของฉัน</h2>
    <p class="text-xs text-gray-400 mb-2">คะแนนรวมอื่น ๆ นอกเหนือจากคะแนนรายวิชา · ภาค ${l??"—"} / ${o??"—"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${ne}</p>
    ${de}
  `)}async function tt(e){var k;ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,o]=await Promise.all([We(e.id).catch(()=>[]),ds().catch(()=>({})),Xt(e.id).catch(()=>[])]),l=Object.fromEntries(o.filter(g=>g.status==="pending").map(g=>[g.class_id,g])),c=["อา","จ","อ","พ","พฤ","ศ","ส"],d=t.length?await Zt(t.map(g=>g.id)).catch(()=>({})):{},M=g=>{const C=d[g]??[];if(!C.length)return"";const $={};return C.forEach(w=>{const X=w.day_of_week;$[X]||($[X]=[]);const ne=w.span_periods??1;for(let de=0;de<ne;de++)$[X].push((w.period_no??0)+de)}),Object.entries($).sort(([w],[X])=>Number(w)-Number(X)).map(([w,X])=>{const ne=[...new Set(X)].sort((G,ie)=>G-ie),de=ne.length===1?`คาบ ${ne[0]}`:`คาบ ${ne[0]}–${ne[ne.length-1]}`;return`${c[Number(w)]??w} ${de}`}).join(" · ")};if(!t.length){ce(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const T=g=>{var w,X,ne;if(g.subject_group_override)return g.subject_group_override==="sasana";const C=((w=g.master_subjects)==null?void 0:w.subject_group)??"";return(((ne=(X=g.master_subjects)==null?void 0:X.teachers)==null?void 0:ne.category)??"")==="ศาสนา"||C==="AGM"||C==="AGMVOC"},b=t.filter(g=>!T(g)),A=t.filter(g=>T(g)),I=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid",n=localStorage.getItem("studentSubjectsGroup")==="sasana"?"sasana":"samai";window._stuSetSubjectView=g=>{localStorage.setItem("studentSubjectsView",g==="grid"?"grid":"list"),tt(e)},window._stuSetSubjectGroup=g=>{localStorage.setItem("studentSubjectsGroup",g==="sasana"?"sasana":"samai"),tt(e)};const p=g=>{const C=g.master_subjects,$=C==null?void 0:C.teachers,w=Ls(g,s);return I?`<button onclick="window._stuOpenClass(${g.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${w.bg}; border-color:${w.border}; border-left-color:${w.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${w.badgeBg}; color:${w.text};">${w.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${w.text};">${(C==null?void 0:C.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${(C==null?void 0:C.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${je(g.class_name)}</p>
            ${M(g.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${M(g.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${$!=null&&$.image_url?`<img src="${$.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${(($==null?void 0:$.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${($==null?void 0:$.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${g.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${w.bg}; border-color:${w.border}; border-left-color:${w.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${w.text};">${(C==null?void 0:C.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${(C==null?void 0:C.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${w.text};">${w.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${w.badgeBg}; color:${w.text};">${w.short}</span>
          <span class="text-[10px] text-gray-400">${(C==null?void 0:C.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${M(g.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${M(g.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${$!=null&&$.image_url?`<img src="${$.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${(($==null?void 0:$.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${($==null?void 0:$.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${je(g.class_name)}</span>
      </div>
    </div>`},_=(g,C,$)=>$.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${C}</span>
          <h3 class="font-bold text-gray-700 text-sm">${g}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${$.length} วิชา</span>
        </div>
        <div class="${I?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${$.map(p).join("")}
        </div>
      </div>`:"";ce(`
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
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${n==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">📖 สามัญ (${b.length})</button>
      <button type="button" onclick="window._stuSetSubjectGroup('sasana')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${n==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">🕌 ศาสนา (${A.length})</button>
    </div>
    <div class="flex justify-end mb-4">
      <button id="btn-manage-subject-groups" type="button" class="text-xs text-indigo-600 font-semibold hover:text-indigo-800">🔧 จัดการกลุ่มรายวิชา</button>
    </div>
    ${n==="samai"?_("วิชาสามัญ","📖",b):_("วิชาศาสนา","🕌",A)}
  `),(k=document.getElementById("btn-manage-subject-groups"))==null||k.addEventListener("click",()=>{Bs(e,t,l,T)})}function Bs(e,t,s,o){var b;(b=document.getElementById("subject-group-mgr"))==null||b.remove();const l=document.createElement("div");l.id="subject-group-mgr",l.className="fixed inset-0 z-[400] bg-white flex flex-col";const c=(A,P)=>{const I=A.master_subjects,n=s[A.id];return`
    <div class="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3">
      <p class="font-semibold text-sm text-gray-800 truncate min-w-0">${(I==null?void 0:I.subject_name)??"—"}</p>
      ${n?'<span class="text-[11px] font-semibold text-amber-500 whitespace-nowrap flex-shrink-0">⏳ รอตรวจสอบ</span>':P?`<button class="sgm-move-btn text-[11px] font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-1.5 hover:bg-indigo-50 whitespace-nowrap flex-shrink-0"
              data-class-id="${A.id}" data-requested="samai">ย้ายไป 📖 สามัญ</button>`:""}
    </div>`};let d="samai";const M=()=>{const A=t.filter(I=>(o(I)?"sasana":"samai")===d),P=l.querySelector("#sgm-list");P.innerHTML=A.length?A.map(I=>c(I,d==="sasana")).join(""):'<p class="text-center text-gray-400 text-sm py-8">ไม่มีวิชาในกลุ่มนี้</p>',P.querySelectorAll(".sgm-move-btn").forEach(I=>{I.addEventListener("click",async()=>{var _,k;const n=Number(I.dataset.classId),p=t.find(g=>g.id===n);if(confirm(`ขอย้ายวิชา "${((_=p==null?void 0:p.master_subjects)==null?void 0:_.subject_name)??""}" ไปกลุ่ม 📖 สามัญ?
(ต้องรอแอดมินตรวจสอบและอนุมัติก่อนจึงจะมีผลจริง)`)){I.disabled=!0,I.textContent="กำลังส่ง...";try{await ls(n,"samai"),Bt({title:"🔀 มีคำขอย้ายกลุ่มวิชาใหม่",body:`นักเรียนขอย้ายวิชา "${((k=p==null?void 0:p.master_subjects)==null?void 0:k.subject_name)??""}" ไปกลุ่ม 📖 สามัญ — รอตรวจสอบ`,url:"dashboard.html"}).catch(()=>{}),U("ส่งคำขอแล้ว รอแอดมินตรวจสอบ","success"),l.remove(),tt(e)}catch(g){U("ส่งคำขอไม่สำเร็จ: "+he(g),"error"),I.disabled=!1,I.textContent="ย้ายไป 📖 สามัญ"}}})})};l.innerHTML=`
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
    <div id="sgm-list" class="flex-1 overflow-y-auto px-4 py-3 space-y-2"></div>`,document.body.appendChild(l),l.querySelector("#sgm-back").addEventListener("click",()=>l.remove());const T=()=>{l.querySelector("#sgm-tab-samai").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${d==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,l.querySelector("#sgm-tab-samai").textContent=`📖 สามัญ (${t.filter(A=>!o(A)).length})`,l.querySelector("#sgm-tab-sasana").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${d==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,l.querySelector("#sgm-tab-sasana").textContent=`🕌 ศาสนา (${t.filter(A=>o(A)).length})`};l.querySelector("#sgm-tab-samai").addEventListener("click",()=>{d="samai",T(),M()}),l.querySelector("#sgm-tab-sasana").addEventListener("click",()=>{d="sasana",T(),M()}),T(),M()}async function Ds(e,t="samai"){ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await vt(e.id).catch(()=>[]),o=n=>{var k,g,C,$,w;const p=((g=(k=n._class)==null?void 0:k.master_subjects)==null?void 0:g.subject_group)??"";return(((w=($=(C=n._class)==null?void 0:C.master_subjects)==null?void 0:$.teachers)==null?void 0:w.category)??"")==="ศาสนา"||p==="AGM"||p==="AGMVOC"},l=s.filter(n=>!o(n)),c=s.filter(n=>o(n)),d=n=>n?new Date(n).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",M=(n,p)=>n.due_at?new Date(p).getTime()>new Date(n.due_at).getTime():!1,T=n=>n.due_at?Date.now()>new Date(n.due_at).getTime():!1,b=n=>{var g,C;const p=n.mySubmission,_=p?M(n,p.submitted_at):!1,k=!p&&T(n);return`<div onclick="window._stuOpenClass(${n.class_id})"
      class="bg-white rounded-2xl border ${p?"border-emerald-100":k?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${te(((C=(g=n._class)==null?void 0:g.master_subjects)==null?void 0:C.subject_name)??"")}</p>
        ${p?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${_?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${_?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${k?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${k?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${te(n.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${d(n.due_at)}</p>
      ${p!=null&&p.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${te(p.teacher_feedback)}</p>`:""}
    </div>`},A=n=>{if(!n.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const p=n.filter(Pe).sort((k,g)=>(k.due_at?new Date(k.due_at).getTime():1/0)-(g.due_at?new Date(g.due_at).getTime():1/0)),_=n.filter(k=>k.mySubmission&&k.mySubmission.status!=="rejected").sort((k,g)=>new Date(g.mySubmission.submitted_at).getTime()-new Date(k.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${p.length})</p>
        ${p.length?`<div class="space-y-2.5">${p.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${_.length})</p>
        ${_.length?`<div class="space-y-2.5">${_.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},P=l.filter(Pe).length,I=c.filter(Pe).length;ce(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${P?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${P}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${I?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${I}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${A(t==="sasana"?c:l)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(n=>{n.addEventListener("click",()=>Ds(e,n.dataset.grp))})}async function Ns(e,t,s="todo"){ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const l=(await We(e.id).catch(()=>[])).find(a=>a.id===t);if(!l){ce('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:c}=await xt(async()=>{const{getClassAnnouncements:a}=await import("./api-CnonnVVn.js");return{getClassAnnouncements:a}},__vite__mapDeps([0,1,2,3])).catch(()=>({})),[{columns:d,scores:M},T,b,A,P,I,n]=await Promise.all([Gt(e.id,t).catch(()=>({columns:[],scores:[]})),Qt(e.id,t).catch(()=>[]),at(e.id).catch(()=>[]),c?c(t).catch(()=>[]):Promise.resolve([]),wt(t,e.id).catch(()=>[]),Vt(t,e.id).catch(()=>[]),Wt(t).catch(()=>[])]),p=await _t(P.map(a=>a.id),e.id).catch(()=>new Set),_=window._pp5SystemCfg??await Ae().catch(()=>({})),k=is(_.semester_start),g=n.find(a=>k>=a.week_start&&k<=a.week_end),C=b.filter(a=>{var u;return((u=a.classes)==null?void 0:u.id)===t}),$=Object.fromEntries(M.map(a=>[a.assignment_id,a])),w=l.master_subjects,X=w==null?void 0:w.teachers,ne=await qt(t).catch(()=>(U("โหลดค่าปัดเลขร่วมไม่สำเร็จ","error"),null)),de=a=>Dt(d,a,u=>{var L,B;return((L=$[u])==null?void 0:L.final_score)??((B=$[u])==null?void 0:B.original_score)}),G=d.filter(Oe),ie=d.filter(a=>a.column_type==="derived"),ue=d.filter(a=>!nt(a)&&!Oe(a)&&!["override","derived"].includes(a.column_type)),me=d.filter(a=>nt(a)&&!Oe(a)&&!["override","derived"].includes(a.column_type)),be=ue.reduce((a,u)=>a+(u.max_score||0),0),$e=me.reduce((a,u)=>a+(u.max_score||0),0),Ce=ue.reduce((a,u)=>a+de(u),0),Se=me.reduce((a,u)=>a+de(u),0),xe=G.reduce((a,u)=>a+de(u),0),ke=ie.reduce((a,u)=>a+de(u),0),f=ie.reduce((a,u)=>a+Number(u.max_score||0),0),Z=Ce+Se+ke,z=be+$e+f,se=z>0?Z/z*100:0,i=d.filter(a=>!Oe(a)),h=i.filter(a=>{const u=$[a.id];return a.column_type==="derived"||u&&(u.final_score!=null||u.original_score!=null)}),E=i.length>0&&h.length===i.length,r=T.length,x=T.filter(a=>a.status==="present").length,S=r>0?Math.round(x/r*100):null,q=a=>a>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:a>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:a>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},V=a=>a>=80?4:a>=75?3.5:a>=70?3:a>=65?2.5:a>=60?2:a>=55?1.5:a>=50?1:0,m=E&&z>0?{...q(se),point:V(se)}:null,v=a=>{const u=$[a.id],B=a.column_type==="derived"||u&&(u.final_score!=null||u.original_score!=null)?de(a):null,W=B!=null&&a.max_score>0?Math.round(B/a.max_score*100):null,le=(u==null?void 0:u.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${a.assignment_name}
        ${le?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${B!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${B!=null?Ye(ne,Nt(a),B,a.column_type==="derived"?2:1):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${a.max_score!=null?"/"+a.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${B!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${a.max_score!=null?W!=null?W+"%":"—%":""}
      </td>
    </tr>`},D=(a,u,L,B,W)=>{if(!a.length)return"";const le=L>0?Math.round(u/L*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${W}</span>
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
            ${a.map(v).join("")}
            <tr class="${B}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${Ye(ne,a===ue?"mid_subtotal":a===me?"fin_subtotal":"bonus_subtotal",u)}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${L}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${le}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},Q=Es(l),O=()=>`
    <div class="${Q.bg} ${Q.border} border border-l-4 ${Q.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${Q.text} text-sm leading-tight">${(w==null?void 0:w.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${(w==null?void 0:w.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(X==null?void 0:X.full_name)??"—"} · ${je(l.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${z>0?Ye(ne,"total",Z):"—"}</p>
        <p class="text-[10px] text-gray-400">/${z} คะแนน</p>
        ${xe>0?`<p class="text-[10px] text-amber-500 font-medium">คะแนนพิเศษ ${xe.toFixed(1).replace(/\.0$/,"")} (แยก ไม่บวกยอดรวม)</p>`:""}
        ${m?`<div class="mt-1 flex items-center justify-end gap-1.5"><span class="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-extrabold">เกรด ${m.point.toFixed(1)}</span><span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${m.cls}">${m.label}</span></div>`:z>0?`<span class="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">ยังไม่สรุปเกรด (${h.length}/${i.length} หัวข้อ)</span>`:""}
      </div>
    </div>`,oe=a=>{const u=Ne[a.status]??Ne.pending,L=a.class_score_columns,B=Xe(a.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${a.request_type}</p>
          ${L?`<p class="text-[11px] text-gray-400 mt-0.5">${L.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${u.cls}">${u.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${De(a.requested_date)}${a.requested_period_no?` · คาบ ${a.requested_period_no}`:""}${B?` · ${B}`:""}</p>
        ${a.reason?`<p>💬 ${a.reason}</p>`:""}
        ${a.teacher_comment?`<p class="${a.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${a.teacher_comment}</p>`:""}
      </div>
      ${a.status==="pending"?`
        <button onclick="window._stuCancelRequest(${a.id}, ${t})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},y=()=>{const a=[],u=I.filter(Pe);u.length>0&&a.push(`
        <button onclick="window._stuOpenClassTab(${t},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${u.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${u.length}</span>
        </button>`);const L=C.filter(j=>j.status==="pending");L.length>0&&L.forEach(j=>{const ae=j.class_score_columns,pe=Xe(j.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${j.request_type} — รอครูอนุมัติ</p>
              ${ae?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${ae.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${De(j.requested_date)}${j.requested_period_no?` · คาบ ${j.requested_period_no}`:""}${pe?` · ${pe}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const B=C.filter(j=>j.status==="approved"&&j.exam_attended==null);B.length>0&&B.forEach(j=>{const ae=j.class_score_columns,pe=Xe(j.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${j.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${ae?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${ae.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${De(j.requested_date)}${j.requested_period_no?` · คาบ ${j.requested_period_no}`:""}${pe?` · ${pe}`:""}</p>
              ${j.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${j.teacher_comment}</p>`:""}
            </div>
          </div>`)}),P.forEach(j=>{const ae=j.attempts.filter(we=>we.status==="submitted"||we.status==="terminated_violation").reduce((we,Re)=>Math.max(we,Re.score_pct??0),null),pe=j.attempts.length&&j.attempts[j.attempts.length-1].status==="terminated_violation"?j.attempts[j.attempts.length-1]:null,Ee=j.attempts.find(we=>we.status==="in_progress"),Ie=j.attempts.filter(we=>we.status==="submitted"||we.status==="terminated_violation").length;let fe="",ye="";j.status==="announced"?fe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':j.status==="started"&&p.has(j.id)?fe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':j.status==="started"&&pe?fe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':j.status==="started"&&Ee?(fe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">กำลังทำอยู่</span>',ye=`<button onclick="window._stuStartQuiz('${j.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):j.status==="started"&&Ie>=j.max_attempts?fe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':j.status==="started"?(fe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">เปิดสอบอยู่</span>',ye=`<button onclick="window._stuStartQuiz('${j.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):j.status==="closed"&&(fe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),a.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${te(j.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${j.num_questions} ข้อ${j.time_limit_minutes?` · ${j.time_limit_minutes} นาที`:""} · ทำได้ ${Ie}/${j.max_attempts} ครั้ง</p>
            ${ae!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${ae.toFixed(1)}%</p>`:""}
            <div class="mt-1">${fe}</div>
            ${ye}
          </div>
        </div>`)});const W=[l.day1_date,l.day2_date,l.day3_date,l.day4_date,l.day5_date,l.day6_date].filter(Boolean),le=new Date;le.setHours(0,0,0,0);const ge=W.map(j=>{const ae=new Date(j);return ae.setHours(0,0,0,0),ae}).filter(j=>j>=le).sort((j,ae)=>j-ae);if(ge.length>0){const j=ge[0],ae=Math.round((j-le)/864e5),pe=ae===0?"🔴 วันนี้!":ae===1?"🟡 พรุ่งนี้":`⏰ อีก ${ae} วัน`,Ee=Ve[j.getDay()]??"";a.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${Ee}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${j.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${De(ht(j))}</p>
          </div>
          <span class="text-xs font-bold ${ae===0?"text-red-500":ae===1?"text-amber-500":"text-emerald-600"}">${pe}</span>
        </div>`)}const ve={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},Te=j=>{if(!j)return"";const ae=new Date(j),Ee=ae-new Date,Ie=Math.floor(Ee/6e4),fe=ae.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(Ee<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${fe}</span>`;if(Ie<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${Ie} นาที · ${fe}</span>`;const ye=Math.floor(Ie/60);return ye<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${ye} ชม. ${Ie%60} น. · ${fe}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(ye/24)} วัน · ${fe}</span>`};return A.length>0&&[...A].sort((j,ae)=>(ae.priority||0)-(j.priority||0)).forEach(j=>{const ae=ve[j.ann_type]??ve.general,pe=j.ann_type==="deadline"&&j.deadline_at?Te(j.deadline_at):"";a.push(`
          <div class="rounded-2xl border ${ae.border} ${ae.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${ae.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${j.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${ae.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${j.title??""}</p>
                ${j.body?`<p class="text-xs text-gray-500 mt-1">${j.body}</p>`:""}
                ${pe?`<div class="mt-2">${pe}</div>`:""}
                ${j.file_url?`<a href="${j.file_url}" target="_blank" rel="noopener"
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
        </div>`}`},R=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${z>0?`<span class="text-xs text-gray-400">${se.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${d.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${D(ue,Ce,be,"bg-blue-50","📘 กลางภาค")}
            ${D(me,Se,$e,"bg-purple-50","📙 ปลายภาค")}
            ${D(ie,ke,f,"bg-indigo-50","🔢 คะแนนสูตร")}
            ${G.length?D(G,G.reduce((a,u)=>a+de(u),0),0,"bg-amber-50","⭐ คะแนนพิเศษ (ไม่รวมเกรด)"):""}
          </div>`}
    </div>
    ${r>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${S!==null?`<span class="text-xs text-gray-400">${x}/${r} คาบ · ${S}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${T.map(a=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${a.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${ws[a.status]??"bg-gray-50 text-gray-400"}">
            ${hs[a.status]??"?"}
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
    ${C.length?`<div class="space-y-3">${C.map(oe).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,J=a=>a?new Date(a).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",H=(a,u)=>a.due_at?new Date(u).getTime()>new Date(a.due_at).getTime():!1,re=a=>a.due_at?Date.now()>new Date(a.due_at).getTime():!1,K=a=>{var le,ge;const u=a.mySubmission,L=(u==null?void 0:u.status)==="rejected",B=u?H(a,u.submitted_at):!1,W=!u&&re(a);return`<div class="bg-white rounded-2xl border ${L?"border-red-200":u?"border-emerald-100":W?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${te(a.title)}</p>
        ${L?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':u?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${B?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${B?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${W?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${W?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${a.description?`<p class="text-xs text-gray-500 mb-1.5">${te(a.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${J(a.due_at)}</p>
      ${(le=a.attachment_urls)!=null&&le.length?`<div class="flex flex-wrap gap-1.5 mb-2">${a.attachment_urls.map(ve=>`<a href="${te(ve.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${te(ve.name)}</a>`).join("")}</div>`:""}
      ${(ge=u==null?void 0:u.file_urls)!=null&&ge.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(u.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${u.file_urls.map(ve=>`<a href="${te(ve.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${te(ve.name)}</a>`).join("")}</div></div>`:""}
      ${u!=null&&u.teacher_feedback?L?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${te(u.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${te(u.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${L?"bg-red-600 text-white hover:bg-red-700":u?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${a.id}">${L?"📤 ส่งแก้ไขใหม่":u?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},N=s==="scores"?R():s==="requests"?Y():s==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${I.length?`<div class="space-y-3">${I.map(K).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:y();ce(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${O()}
    ${g?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${k}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${te(g.topic)}</p>
      ${g.description?`<p class="text-xs text-indigo-400 mt-0.5">${te(g.description)}</p>`:""}
    </div>`:""}
    ${N}
  `),window._stuCancelRequest=async(a,u=t)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await ft(a),U("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(u,"requests")}catch(L){U("ยกเลิกไม่สำเร็จ: "+he(L),"error")}},window._stuStartQuiz=async a=>{try{const u=await $t(a,e.id).catch(()=>null);if(u&&u.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${u.id}`;return}const L=await St(a);window.location.href=`quiz-exam.html?attempt=${L.id}`}catch(u){U("เข้าสอบไม่สำเร็จ: "+he(u),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(a=>{a.addEventListener("click",()=>{const u=I.find(L=>L.id===parseInt(a.dataset.aid,10));u&&F(u)})});function F(a){var L;(L=document.getElementById("stu-submit-modal"))==null||L.remove();const u=document.createElement("div");u.id="stu-submit-modal",u.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",u.innerHTML=`
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
      </div>`,document.body.appendChild(u),u.addEventListener("click",B=>{B.target===u&&u.remove()}),u.querySelector("#ss-close").addEventListener("click",()=>u.remove()),u.querySelector("#ss-submit").addEventListener("click",async()=>{var le;const B=[...u.querySelector("#ss-files").files??[]];if(!B.length&&!a.mySubmission){U("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const W=u.querySelector("#ss-submit");W.disabled=!0,W.textContent="กำลังส่ง...";try{const ge=[];for(const Te of B)ge.push(await ps(Te,`class-${t}/student-${e.id}`));const ve=ge.length?ge:((le=a.mySubmission)==null?void 0:le.file_urls)??[];await Ut(a.id,e.id,ve,u.querySelector("#ss-note").value.trim()||null),U("ส่งงานสำเร็จ ✅","success"),u.remove(),Ns(e,t,"assignments")}catch(ge){U("ส่งงานไม่สำเร็จ: "+he(ge),"error"),W.disabled=!1,W.textContent="ส่งงาน"}})}}async function As(e){ce(`<div class="flex justify-center py-10 text-gray-300">
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
      ${t.map(o=>{var M,T;const l=Ne[o.status]??Ne.pending,c=o.classes,d=o.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((M=c==null?void 0:c.master_subjects)==null?void 0:M.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((T=c==null?void 0:c.master_subjects)==null?void 0:T.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${l.cls}">${l.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${o.request_type}</span></p>
            ${d?`<p>📝 หัวข้อ: <span class="text-gray-700">${d.assignment_name}</span></p>`:""}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${De(o.requested_date)}</span>
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
  `),window._stuCancelRequest=async o=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await ft(o),U("ยกเลิกคำร้องแล้ว","success"),As(e)}catch(l){U("ยกเลิกไม่สำเร็จ: "+he(l),"error")}}}async function ma(e,t){var Se,xe,ke;ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,o]=await Promise.all([We(e.id).catch(()=>[]),Ht(e.id).catch(()=>0)]),l=s.find(f=>f.id===t);if(!l){ce('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(o>=2){ce(`
      <button onclick="window._stuOpenClassTab(${t},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const c=o===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",d=l.master_subjects,M=d==null?void 0:d.teacher_id,T=d==null?void 0:d.teachers,b=M?(T==null?void 0:T.full_name)??"ครูผู้สอน":"ครูผู้สอน",A=String(b||"ค").trim().charAt(0).toUpperCase()||"ค",P=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||l.class_name||"—";let I=null;const[n,p,_]=await Promise.all([Rt(t).catch(()=>[]),M?Ot(M,t).catch(f=>(I=f,[])):Promise.resolve([]),zt().catch(()=>[])]),k=n.filter(f=>f.column_type!=="override"),g={};for(const f of p){g[`${f.day_of_week}_${f.period_no}`]=f;const Z=f.span_periods??1;for(let z=1;z<Z;z++)g[`${f.day_of_week}_${f.period_no+z}`]={...f,_secondary:!0}}const C=p.length>0;if(!C){ce(`
      <button onclick="window._stuOpenClassTab(${t}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(d==null?void 0:d.subject_name)??""} · ${je(l.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${M?I?`ระบบอ่านตารางครูไม่สำเร็จ: ${I.message??I}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${M?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const $="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",w=$+" cursor-pointer";let X=null,ne=0;const de=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],G=(f,Z,z=null)=>{const se=String(f??"").trim(),i=String(Z??"").trim();return se&&i?`${se} — ${i}`:se||(z!=null?String(z):"")},ie=f=>{const Z=de[f%de.length];return`${Z.bg} ${Z.text}`};let ue={};try{ue=JSON.parse(localStorage.getItem(`scheduleColors_${M??"x"}`)??"{}")}catch{}const me={};let be=0;p.forEach(f=>{const Z=G(f.subject_name,f.class_name,f.subject_id);if(!Z||me[Z]!=null)return;const z=ue[Z]??ue[f.subject_id]??ue[f.subject_name],se=Number(z);me[Z]=Number.isFinite(se)?se:be++});const $e=(f=0)=>{const Z=[0,1,2,3,4,5],z={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},se={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},i=Ze(f),h=new Date;h.setHours(0,0,0,0);const E=Z.map(x=>{const S=i[x];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${se[x]}">
        <p class="text-sm font-bold text-gray-700">${z[x]}</p>
        <p class="text-xs text-gray-400">${S.getDate()}/${S.getMonth()+1}</p>
      </th>`}).join(""),r=_.map(x=>{var m,v;const S=((m=x.start_time)==null?void 0:m.slice(0,5))??"",q=((v=x.end_time)==null?void 0:v.slice(0,5))??"",V=Z.map(D=>{const Q=`${D}_${x.period_no}`,O=g[Q];if(O!=null&&O._secondary)return"";const y=i[D]<h;if(!O)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${x.period_no}" data-day="${D}" data-week-offset="${f}"
              ${y?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${y?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${y?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${y?"ล็อก":"＋"}</span>
            </button>
          </td>`;const R=O.span_periods??1,Y=G(O.subject_name,O.class_name,O.subject_id),J=me[Y]??0,H=ie(J);return`<td class="border border-gray-100 p-0" style="height:1px" ${R>1?`rowspan="${R}"`:""}>
          <div class="w-full h-full ${H} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${O.subject_name??"ไม่ว่าง"}</p>
            ${O.class_name?`<p class="text-[10px] opacity-80 leading-tight">${je(O.class_name)}</p>`:""}
            ${O.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${O.teacher_name}</p>`:""}
            ${R>1?`<p class="text-[9px] opacity-40 mt-0.5">${R} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${x.period_no}</p>
          <p class="text-[10px] text-gray-400">${S}–${q}</p>
        </td>
        ${V}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${E}
          </tr>
        </thead>
        <tbody>${r}</tbody>
      </table>
    </div>`},Ce=f=>{const Z=Ze(f);return`${f===0?"สัปดาห์นี้":f===1?"สัปดาห์หน้า":`อีก ${f} สัปดาห์`} (${Fe(Z[0])} - ${Fe(Z[5])})`};if(ce(`
    <button onclick="window._stuOpenClass(${t})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(d==null?void 0:d.subject_name)??""} · ${je(l.class_name)}</p>
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
          <select id="req-col" class="${w}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${k.map(f=>`<option value="${f.id}">${f.assignment_name} (${f.assignment_type} · เต็ม ${f.max_score})</option>`).join("")}
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
              <input type="date" id="req-date" class="${$}"
                min="${ht(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${w}" required>
                <option value="">— เลือกคาบ —</option>
                ${_.map(f=>`<option value="${f.period_no}">คาบ ${f.period_no} (${f.start_time.slice(0,5)}–${f.end_time.slice(0,5)})</option>`).join("")}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${$} resize-none"
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
                ${T!=null&&T.image_url?`<img src="${T.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${A}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${b} · ${(d==null?void 0:d.subject_name)??""}</p>
                <p class="text-[11px] text-gray-400 mt-0.5 truncate">นักเรียน ${(e==null?void 0:e.full_name)??"—"} · รหัส ${(e==null?void 0:e.student_code)??"—"} · ห้อง ${P}</p>
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
          <div id="schedule-grid-wrap">${$e(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(f=>{f.addEventListener("change",()=>{var se;const Z=document.getElementById("req-reason-wrap"),z=f.value==="สอบย้อนหลัง";Z.classList.toggle("hidden",!z),(se=document.getElementById("req-reason"))==null||se.toggleAttribute("required",z)})}),C){const f=document.getElementById("teacher-schedule-modal");(Se=document.getElementById("open-schedule-modal"))==null||Se.addEventListener("click",()=>{f==null||f.classList.remove("hidden"),f==null||f.classList.add("flex")}),(xe=document.getElementById("close-schedule-modal"))==null||xe.addEventListener("click",()=>{var z;if(!X){(z=window._stuOpenClassTab)==null||z.call(window,t,"requests");return}f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex")}),f==null||f.addEventListener("click",z=>{z.target===f&&X&&(f.classList.add("hidden"),f.classList.remove("flex"))});const Z=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(z=>{z.addEventListener("click",()=>{var V,m;const se=parseInt(z.dataset.period),i=parseInt(z.dataset.day),h=parseInt(z.dataset.weekOffset??ne),r=Ze(h)[i];X={period_no:se,day_of_week:i,date:r,week_offset:h},document.getElementById("req-date").value=qe(r),document.getElementById("req-period-hidden").value=se;const x=document.getElementById("period-summary"),S=document.getElementById("period-summary-text");x==null||x.classList.remove("hidden"),S&&(S.textContent=`คาบ ${se} วัน${Ve[i]??""} ${Fe(r)}`);const q=document.getElementById("schedule-picker-label");q&&(q.textContent=`เลือกคาบ ${se} วัน${Ve[i]??""} ${Fe(r)} แล้ว`),(V=document.getElementById("schedule-first-gate"))==null||V.classList.add("hidden"),(m=document.getElementById("req-form"))==null||m.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(v=>{v.classList.toggle("ring-2",v===z),v.classList.toggle("ring-emerald-500",v===z),v.classList.toggle("bg-emerald-200",v===z)}),f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex")})})};Z(),(ke=document.getElementById("schedule-week-select"))==null||ke.addEventListener("change",z=>{ne=parseInt(z.target.value||"0");const se=document.getElementById("schedule-grid-wrap");se&&(se.innerHTML=$e(ne)),Z()}),setTimeout(()=>{f==null||f.classList.remove("hidden"),f==null||f.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async f=>{var r,x,S,q,V;f.preventDefault();const Z=document.getElementById("req-submit"),z=(r=document.querySelector('input[name="req_type"]:checked'))==null?void 0:r.value,se=document.getElementById("req-col").value,i=((x=document.getElementById("req-reason"))==null?void 0:x.value.trim())||null,h=(S=document.getElementById("req-date"))==null?void 0:S.value,E=C?(q=document.getElementById("req-period-hidden"))==null?void 0:q.value:(V=document.getElementById("req-period-sel"))==null?void 0:V.value;if(!z||!se||!h||!E){if(U("กรุณากรอกข้อมูลให้ครบ","warning"),C&&!E){U("กรุณาเลือกคาบว่างจากตารางครู","warning");const m=document.getElementById("teacher-schedule-modal");m==null||m.classList.remove("hidden"),m==null||m.classList.add("flex")}return}if(z==="สอบย้อนหลัง"&&!i){U("กรุณาระบุเหตุผล","warning");return}Z.disabled=!0,Z.textContent="กำลังยื่น...";try{await Ft({student_id:e.id,class_id:t,assignment_id:parseInt(se),request_type:z,requested_date:h,requested_period_no:parseInt(E),reason:z==="สอบย้อนหลัง"?i:null,status:"pending"}),U("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(t,"requests")}catch(m){U("ยื่นไม่สำเร็จ: "+he(m),"error")}finally{Z.disabled=!1,Z.textContent="ยื่นคำร้อง"}})}async function ua(e,t){var c,d,M,T;const s=()=>`
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
      ปพ.5 ออนไลน์ © 2026 v${xs}
    </p>
  `),(c=document.getElementById("btn-stu-my-certificates-profile"))==null||c.addEventListener("click",()=>kt(e)),(d=document.getElementById("btn-stu-contact-admin"))==null||d.addEventListener("click",()=>{var b;(b=window._openFeedbackWidget)==null||b.call(window)}),(M=document.getElementById("btn-stu-pw-reset"))==null||M.addEventListener("click",()=>{o()});function o(){var A;(A=document.getElementById("pw-choice-modal"))==null||A.remove();const b=document.createElement("div");b.id="pw-choice-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",P=>{P.target===b&&b.remove()}),b.querySelector("#pwc-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#pwc-self").addEventListener("click",()=>{b.remove(),l()}),b.querySelector("#pwc-admin").addEventListener("click",()=>{var P;b.remove(),(P=window._openPasswordResetRequest)==null||P.call(window)})}function l(){var A;(A=document.getElementById("self-pw-modal"))==null||A.remove();const b=document.createElement("div");b.id="self-pw-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",P=>{P.target===b&&b.remove()}),b.querySelector("#self-pw-close").addEventListener("click",()=>b.remove()),b.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const P=b.querySelector("#btn-stu-save-pw"),I=b.querySelector("#stu-new-pw").value,n=b.querySelector("#stu-new-pw-confirm").value,p=b.querySelector("#stu-pw-msg"),_=(k,g)=>{p.className=`text-xs text-center py-2.5 rounded-xl ${g?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,p.textContent=k,p.classList.remove("hidden")};if(!I||I.length<6){_("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if(I!==n){_("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}P.disabled=!0,P.textContent="กำลังบันทึก...",p.classList.add("hidden");try{const{error:k}=await Le.auth.updateUser({password:I});if(k)throw k;_("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),b.querySelector("#stu-new-pw").value="",b.querySelector("#stu-new-pw-confirm").value=""}catch(k){_("ไม่สำเร็จ: "+he(k),!0)}finally{P.disabled=!1,P.textContent="บันทึกรหัสผ่านใหม่"}})}(T=document.getElementById("stu-logout-btn"))==null||T.addEventListener("click",()=>{var A;(A=document.getElementById("stu-logout-confirm"))==null||A.remove();const b=document.createElement("div");b.id="stu-logout-confirm",b.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.querySelector("#stu-logout-cancel").addEventListener("click",()=>b.remove()),b.addEventListener("click",P=>{P.target===b&&b.remove()}),b.querySelector("#stu-logout-confirm-btn").addEventListener("click",t)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{Hs(e)}),document.getElementById("btn-request-qr-card").addEventListener("click",()=>{var A;(A=document.getElementById("qr-request-confirm"))==null||A.remove();const b=document.createElement("div");b.id="qr-request-confirm",b.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(b),b.addEventListener("click",P=>{P.target===b&&b.remove()}),b.querySelector("#qr-request-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#qr-request-ok").addEventListener("click",async()=>{const P=b.querySelector("#qr-request-ok");P.disabled=!0,P.textContent="กำลังส่ง...";try{await Mt({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),Tt({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),b.remove(),U("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch(I){P.disabled=!1,P.textContent="ยืนยัน",U("ส่งไม่สำเร็จ: "+he(I),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var de;const b=window._pp5SystemCfg??await Ae().catch(()=>({})),A=parseInt(b.studentQrDailyLimit||"3",10),P=parseInt(b.studentQrExpirySeconds||"60",10),I=`qr_generation_logs_${e.id}`,n=qe(new Date);let p=JSON.parse(localStorage.getItem(I)||"null");if((!p||p.date!==n)&&(p={date:n,count:0}),p.count>=A){U(`คุณสร้าง QR Code ครบโควต้า ${A} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}p.count+=1,localStorage.setItem(I,JSON.stringify(p)),(de=document.getElementById("student-qr-modal"))==null||de.remove();const _=document.createElement("div");_.id="student-qr-modal",_.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",_.innerHTML=`
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
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${P}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${A-p.count} / ${A} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(_);const k=_.querySelector("#student-qr-canvas"),g=Math.floor(Date.now()/1e3),C=`SQ:${e.student_code}:${g}`;try{await bs.toCanvas(k,C,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(G){console.error("Failed to draw QR Code:",G),U("สร้าง QR Code ไม่สำเร็จ","error"),_.remove();return}let $=P;const w=_.querySelector("#qr-timer-bar"),X=_.querySelector("#qr-timer-sec"),ne=setInterval(()=>{$-=1,X&&(X.textContent=$),w&&(w.style.width=`${$/P*100}%`),$<=0&&(clearInterval(ne),_.remove(),U("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);_.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(ne),_.remove()})})}const Ps={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function Hs(e){var o;(o=document.getElementById("student-leave-modal"))==null||o.remove();const t=document.createElement("div");t.id="student-leave-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",t.innerHTML=`
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
  `,document.body.appendChild(t);const s=()=>{t._leaveTimer&&clearInterval(t._leaveTimer),t.remove()};t.querySelector("#btn-leave-modal-close").addEventListener("click",s),Os(e,t)}function Rs(e,t){e.querySelectorAll(".leave-tab-btn").forEach(s=>{const o=s.dataset.leaveTab===t;s.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${o?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function Os(e,t){const s=t.querySelector("#student-leave-body");let o="permit";try{const[l,c]=await Promise.all([ns(e.id),os(e.id)]),d=c.filter(I=>I.status==="overdue").length,M=d>=3?"danger":d>=1?"warning":"safe",T=Ps[M],b=()=>{var n,p,_,k;let I="";if(l){const g=((p=(n=l.classes)==null?void 0:n.master_subjects)==null?void 0:p.subject_name)||((_=l.classes)==null?void 0:_.class_name)||"—";I=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${te(g)} · เหตุผล: ${te(l.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${te(((k=l.teachers)==null?void 0:k.full_name)||"—")}</p>
          </div>
        `}return`
        <div class="rounded-2xl ${T.badgeBg} border ${T.border} px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">สถานะปัจจุบัน</p>
            <p class="text-sm font-extrabold ${T.badgeText} mt-0.5">${T.label}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">เลยเวลา/ไม่กลับ</p>
            <p class="text-sm font-extrabold ${T.badgeText} mt-0.5">${d}/3 ครั้ง</p>
          </div>
        </div>
        ${I}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},A=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${c.length?c.map(n=>{var C,$,w;const p=(($=(C=n.classes)==null?void 0:C.master_subjects)==null?void 0:$.subject_name)||((w=n.classes)==null?void 0:w.class_name)||"—",_=n.status==="active"?"🚪 กำลังออก":n.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",k=n.status==="active"?"text-amber-600":n.status==="overdue"?"text-red-600":"text-emerald-600",g=new Date(n.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${te(p)}</span>
                  <span class="text-[10px] font-bold ${k}">${_}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${g} · ${te(n.reason)} · ${n.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,P=()=>{if(s.innerHTML=o==="permit"?b():A(),Rs(t,o),t.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${o==="permit"?T.border:"border-transparent"}`,o==="permit"&&l){const I=s.querySelector("#student-leave-active-card"),n=s.querySelector("#student-leave-active-label"),p=s.querySelector("#student-leave-active-timer"),_=s.querySelector("#student-leave-active-detail"),k=s.querySelector("#student-leave-active-teacher"),g=()=>{const C=us(l.created_at,l.allowed_duration);p&&(p.textContent=C.timerText),C.isOverdue&&I&&!I.classList.contains("bg-red-50")&&(I.classList.remove("border-amber-200","bg-amber-50"),I.classList.add("border-red-200","bg-red-50","animate-pulse"),n&&(n.textContent="⛔ เลยเวลา",n.classList.replace("text-amber-700","text-red-700")),p&&p.classList.replace("text-amber-700","text-red-700"),_&&_.classList.replace("text-amber-800","text-red-800"),k&&k.classList.replace("text-amber-600","text-red-600")),C.isBeyondLimit&&I&&I.classList.remove("animate-pulse")};g(),t._leaveTimer=setInterval(g,1e3)}};t.querySelectorAll(".leave-tab-btn").forEach(I=>{I.addEventListener("click",()=>{t._leaveTimer&&clearInterval(t._leaveTimer),o=I.dataset.leaveTab,P()})}),P()}catch(l){s.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${te(he(l))}</p>`}}async function It(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const s=document.createElement("script");s.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",s.onload=()=>e(window.Html5Qrcode),s.onerror=o=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(s)})}const zs="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",Fs="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let Ge=null;function Gs(){return Ge||(Ge=new Promise((e,t)=>{var o,l;if((l=(o=window.google)==null?void 0:o.accounts)!=null&&l.id){e();return}const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,s.onload=()=>e(),s.onerror=()=>t(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(s)}),Ge)}function pa(){var o;(o=document.getElementById("stu-email-link-modal"))==null||o.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e);const t=(l,c)=>{const d=e.querySelector("#sel-msg");d.className=`text-xs text-center py-2.5 rounded-xl ${c?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,d.textContent=l,d.classList.remove("hidden")},s=async(l,c,d)=>{c&&(c.disabled=!0);try{await yt(l),t(`เชื่อมอีเมล ${l} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(M){t("ไม่สำเร็จ: "+he(M),!0),c&&(c.disabled=!1,c.textContent=d)}};Gs().then(()=>{window.google.accounts.id.initialize({client_id:zs,ux_mode:"redirect",login_uri:Fs}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",l=>{l.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const l=e.querySelector("#sel-save"),c=e.querySelector("#sel-email").value.trim(),d=e.querySelector("#sel-email-confirm").value.trim();if(!c||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)){t("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(c!==d){t("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}l.textContent="กำลังบันทึก...",await s(c,l,"เชื่อมอีเมล")})}async function xa(e){try{await yt(e),U(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(t){U("เชื่อมอีเมลไม่สำเร็จ: "+he(t),"error")}}const ut={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},pt={};function _e(e="success",t=null){try{const s=ut[e]?e:"error",o=t==="หญิง"?"female":"male",l=`${s}_${o}`;let c=pt[l];if(!c){const d="/pp5online/";c=new Audio(`${d}sounds/${ut[s][o]}`),pt[l]=c}c.currentTime=0,c.volume=1,c.play().catch(d=>console.warn("Play scan sound failed:",d))}catch(s){console.error("Play scan sound failed",s)}}function st(e,t){const o=Ct(t==null?void 0:t.semester_start,[]).find(l=>l.days.some(c=>c.ds===e));return o?o.n:1}async function ba(e){var h,E;const t=e;window._lastSuccessFeedbackHTML="",ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,o]=await Promise.all([Ae().catch(()=>({})),At().catch(()=>[])]);window._pp5SystemCfg=s;let l=!1;if(e.student_code)l=jt(e,s);else if(e.teacher_code){const r=(s.prayerScannerTeachers||"").split(/[\s,]+/).map(S=>S.trim()).filter(Boolean);let x=null;try{const S=await Le.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();x=(S==null?void 0:S.data)??null}catch{}l=r.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(x==null?void 0:x.role)==="admin"}if(!l){ce(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const c=!!e.teacher_code,d=!c&&Lt(e,s),M=rt(s,d);if(!c&&!et(s,d)){ce(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-100 text-3xl">
          🕌
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">นอกช่วงเวลาบันทึกกิจกรรมละหมาด</h3>
        <p class="text-xs text-gray-500 leading-relaxed">
          ระบบสแกนเปิดให้บันทึกเวลาเฉพาะช่วงเวลา <b>${M.startLabel} น. ถึง ${M.endLabel} น.</b> เท่านั้น<br>
          (ยกเว้นคุณครูที่สามารถเข้าใช้งานได้ตลอดเวลา)
        </p>
        <button id="scanner-btn-back-restricted" class="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl active:scale-95 transition-all shadow-sm">
          ← กลับหน้าหลัก
        </button>
      </div>`),(h=document.getElementById("scanner-btn-back-restricted"))==null||h.addEventListener("click",()=>{window._stuNav("overview")});return}const T=document.querySelector("nav.safe-area-bottom");T&&T.classList.add("hidden");const b=document.getElementById("sidebar"),A=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(b&&b.classList.add("hidden"),A&&A.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const P=qe(new Date);let I=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");I=I.filter(r=>r.check_date===P),localStorage.setItem("prayer_scan_history_today",JSON.stringify(I)),I.forEach(r=>window._syncedStudentIdsToday.add(r.student_id));let n=localStorage.getItem("prayer_scan_input_mode")||"camera",p=localStorage.getItem("prayer_scan_device_mode")||"single";const _=_s(e),k=localStorage.getItem("prayer_scan_active_location");let g=_.some(r=>r.id===k)?k:((E=_[0])==null?void 0:E.id)||"musolla_male",C=localStorage.getItem("prayer_scan_record_status")||"pray",$=!1,w=!1;const X="/pp5online/prayer-scanner-amanah.png";function ne(){var K,ee;const r=qe(new Date),x=st(r,s),S=_.map(N=>`
      <option value="${N.id}" ${g===N.id?"selected":""}>${N.icon} ${N.label}${N.detail?` (${N.detail})`:""}</option>
    `).join(""),q=_.map(N=>`
      <button type="button" data-location="${N.id}"
        class="scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-emerald-100 text-xl flex items-center justify-center flex-shrink-0">${N.icon}</span>
          <span class="min-w-0">
            <span class="block text-sm font-extrabold">${N.label}</span>
            <span class="block text-xs text-gray-500 mt-0.5">${N.detail||"จุดสแกนละหมาด"}</span>
          </span>
          <span class="scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold border-gray-200 bg-white text-transparent">✓</span>
        </div>
      </button>
    `).join(""),V=`
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
          <p class="text-[10px] font-bold uppercase tracking-wider opacity-70">${c?"สิทธิ์คุณครู":d?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-xs font-semibold mt-0.5">${c?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${M.startLabel} - ${M.endLabel} น.`}</p>
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
              <button id="opt-input-camera" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📷 ใช้กล้อง
              </button>
              <button id="opt-input-gun" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${n==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
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
            ${S}
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
      <div id="scanner-view-camera" class="relative overflow-hidden bg-slate-950 rounded-3xl w-full max-w-sm mx-auto aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4 ${n==="camera"?"":"hidden"}">
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

      <div id="scanner-view-gun" class="border border-dashed border-gray-300 bg-white rounded-3xl py-12 px-6 text-center shadow-sm mb-4 transition-all relative ${n==="gun"?"":"hidden"}">
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
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const N=parseInt(s.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(N)?Math.max(0,N):2})()} ครั้ง/เดือน/คน</p>
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
    `,m=document.getElementById("stu-content")||document.getElementById("main-content");m&&(m.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${V}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{be(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),T&&T.classList.remove("hidden");const N=document.getElementById("sidebar"),F=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");N&&N.classList.remove("hidden"),F&&F.classList.add("md:ml-64"),e.teacher_code?xt(async()=>{const{renderPrayerAdmin:a}=await import("./views-MaY0Yp8z.js").then(u=>u.M);return{renderPrayerAdmin:a}},__vite__mapDeps([4,5,6,0,1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])).then(({renderPrayerAdmin:a})=>{a(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{de("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{de("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{G("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{G("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{se()});const v=document.getElementById("scanner-manual-code-input"),D=document.getElementById("btn-submit-manual-scan"),Q=()=>{const N=v==null?void 0:v.value.trim();if(!N){U("กรุณากรอกรหัสนักเรียน","warning"),v==null||v.focus();return}v.value="",Se(N,{inputMethod:"manual"})};D==null||D.addEventListener("click",Q),v==null||v.addEventListener("keydown",N=>{N.key==="Enter"&&(N.preventDefault(),Q())});const O=document.getElementById("opt-active-location");let oe="";const y=N=>{const F=document.getElementById("btn-confirm-scanner-location");F&&(F.disabled=!N,F.className=N?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},R=(N=g)=>{document.querySelectorAll(".scanner-location-choice").forEach(F=>{const a=F.dataset.location===N;F.className=`scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] ${a?"border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm":"border-gray-200 bg-white text-gray-700 hover:bg-gray-50"}`;const u=F.querySelector(".scanner-location-check");u&&(u.className=`scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold ${a?"border-emerald-500 bg-emerald-600 text-white":"border-gray-200 bg-white text-transparent"}`)})},Y=(N,{toast:F=!1}={})=>{_.some(a=>a.id===N)&&(g=N,localStorage.setItem("prayer_scan_active_location",g),O&&(O.value=g),R(),F&&U("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};O==null||O.addEventListener("change",N=>{Y(N.target.value,{toast:!0})}),document.querySelectorAll(".scanner-location-choice").forEach(N=>{N.addEventListener("click",()=>{oe=N.dataset.location||"",Y(oe),R(oe),y(!!oe)})}),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{ie("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{ie("usor")}));const J=()=>{w||(w=!0,z(),ue(),n==="camera"?me():$e())},H=()=>{const N=document.getElementById("scanner-location-modal");if(!N){J();return}oe="",R(""),y(!1),N.classList.remove("hidden"),N.classList.add("flex")};(K=document.getElementById("btn-confirm-scanner-location"))==null||K.addEventListener("click",()=>{var N;if(!oe){U("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}localStorage.setItem("prayer_scan_active_location",g),(N=document.getElementById("scanner-location-modal"))==null||N.remove(),J()}),z();const re=document.getElementById("scanner-amanah-modal");re?(ee=document.getElementById("btn-ack-scanner-amanah"))==null||ee.addEventListener("click",()=>{re.remove(),H()}):H()}function de(r){r!==n&&(n=r,localStorage.setItem("prayer_scan_input_mode",r),r==="camera"?(Ce(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),me()):(be(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),$e()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${r==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${r==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function G(r){if(r===p)return;p=r,localStorage.setItem("prayer_scan_device_mode",r);const x=document.getElementById("dual-monitor-link-area");r==="dual"?x.classList.remove("hidden"):x.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${r==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${r==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function ie(r){if(r===C)return;C=r,localStorage.setItem("prayer_scan_record_status",r);const x=document.getElementById("opt-status-pray"),S=document.getElementById("opt-status-usor");x&&S&&(x.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${r==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,S.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${r==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),U(`เปลี่ยนโหมดบันทึกเป็น: ${r==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function ue(){if(c)return;const r=document.getElementById("scanner-countdown"),x=document.getElementById("scanner-countdown-panel"),S=document.getElementById("scanner-time-warning-border");if(!r||!x||!S)return;const q=()=>{const V=Ms(s,d);r.textContent=Ts(V);const m=V<=Is;x.classList.toggle("bg-red-50",m),x.classList.toggle("border-red-200",m),x.classList.toggle("text-red-700",m),x.classList.toggle("bg-emerald-50",!m),x.classList.toggle("border-emerald-100",!m),x.classList.toggle("text-emerald-800",!m),S.classList.toggle("hidden",!m),V<=0&&(be(),Ce())};q(),window._activePrayerScannerState.countdownInterval=setInterval(q,1e3)}async function me(){try{const r=await It(),x=new r("camera-reader");window._activePrayerScannerState.html5Qrcode=x;let S=null,q=0;const V={fps:25,aspectRatio:1};await x.start({facingMode:"environment"},V,m=>{m===S&&Date.now()-q<1800||(S=m,q=Date.now(),Se(m))},()=>{})}catch(r){console.error("Camera open failed:",r),U("ไม่สามารถเปิดใช้งานกล้องได้: "+(r.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function be(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function $e(){const r=document.getElementById("scanner-gun-input");if(!r)return;r.focus();const x=setInterval(()=>{const S=document.getElementById("scanner-manual-code-input");document.activeElement!==r&&document.activeElement!==S&&document.getElementById("scanner-gun-input")&&r.focus()},1e3);window._activePrayerScannerState.focusInterval=x,r.addEventListener("keydown",S=>{if(S.key==="Enter"){S.preventDefault();const q=r.value.trim();r.value="",q&&Se(q)}})}function Ce(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}async function Se(r,x={}){if(console.log("[Scanner] Raw scanned text:",r),!r)return;const S=x.inputMethod==="manual"?"manual":"qr";if(!c&&!et(s,d)){_e("error"),xe(null,r,`ไม่อยู่ในช่วงเวลาบันทึกกิจกรรมละหมาด (${M.startLabel} - ${M.endLabel} น.)`);return}let q=String(r).trim(),V=!1;if(q.startsWith("SQ:")){const F=q.split(":");if(F.length===3){const[,a,u]=F,L=parseInt(u,10),B=Math.floor(Date.now()/1e3),W=B-L,le=parseInt(s.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${a}, QR Time: ${L}, Now: ${B}, Diff: ${W}s, Allowed Expiry: ${le}s`),(isNaN(L)||W>le||W<-le)&&(V=!0),q=a.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",F.length),_e("error"),xe(null,r,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const m=o.find(F=>String(F.student_code).trim()===q);if(console.log("[Scanner] Lookup result for code:",q,m?m.full_name:"not found"),V){console.warn("[Scanner] QR Code has expired");const F=parseInt(s.studentQrExpirySeconds||"60",10);_e("error",m==null?void 0:m.gender),xe(m,q,`QR Code นี้หมดอายุแล้ว (เกิน ${F} วินาที)`);return}if(!m){_e("error"),xe(null,q,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const v=Ss(m,g);if(v){_e("error",m.gender),xe(m,q,v);return}const D=qe(new Date),Q=ct(t.main_room),O=ct(m.main_room),oe=!!Q&&!!O&&Q===O;if(!c&&oe&&qs(m.gender,s)){_e("error",m.gender),xe(m,q,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const y=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(y.some(F=>F.student_id===m.id&&F.check_date===D)){_e("duplicate",m.gender),xe(m,q,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(m.id)){_e("duplicate",m.gender),xe(m,q,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if(S==="manual"){const F=parseInt(s.prayerManualEntryMonthlyLimit??"2",10),a=Number.isFinite(F)?Math.max(0,F):2;if(a===0){_e("error",m.gender),xe(m,q,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const u=y.filter(L=>L.student_id!==m.id||L.input_method!=="manual"||!L.check_date?!1:String(L.check_date).slice(0,7)===D.slice(0,7)).length;try{if(await Pt(m.id,D)+u>=a){_e("error",m.gender),xe(m,q,`ใช้สิทธิ์กรอกรหัสครบ ${a} ครั้งในเดือนนี้แล้ว`);return}}catch(L){console.warn("Manual prayer count check failed:",L),_e("error",m.gender),xe(m,q,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}const Y=st(D,s);let J=C,H="";J==="usor"&&m.gender==="ชาย"&&(J="pray",H=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const re=t.teacher_code?`${t.full_name} (ครู)`:`${t.full_name} (รหัส ${t.student_code||"—"})`,K={student_id:m.id,main_room:m.main_room,check_date:D,status:J,week_number:Y,location:g,full_name:m.full_name,student_code:m.student_code,scanned_by:re,input_method:S,scanner_code:t.teacher_code||t.student_code||null,scanner_name:t.full_name||null,scanner_room:t.main_room||null,scanner_gender:t.gender||null,same_room_flag:oe};y.push(K),localStorage.setItem("prayer_scan_queue",JSON.stringify(y));let ee=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");ee=ee.filter(F=>F.check_date===D),ee.some(F=>F.student_id===m.id)||(ee.unshift({student_id:m.id,full_name:m.full_name,student_code:m.student_code,main_room:m.main_room,check_date:D,status:J,input_method:S,same_room_flag:oe}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(ee))),window._syncedStudentIdsToday.add(m.id),_e("success",m.gender),Z(),xe(m,q,`บันทึกสำเร็จลงเครื่องแล้ว${S==="manual"?" (กรอกรหัส)":""}${H}`,!0,J),z(),se()}function xe(r,x,S,q=!1,V="pray"){const m=document.getElementById("scanner-feedback-container");if(m){if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),q&&r){const v=V==="usor",D=r.image_url?`<img src="${r.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${v?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${r.full_name.charAt(0)}</div>`,Q=v?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';m.innerHTML=`
        <div class="bg-white/95 border ${v?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${D}
          <div class="flex-1 min-w-0">
            ${Q}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${r.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${r.student_code} · ห้อง ${je(r.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${S}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${r.id}" data-name="${r.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=m.innerHTML,ke(m)}else{const v=r?r.full_name:"ไม่พบข้อมูล",D=r?`รหัส ${r.student_code} · ห้อง ${je(r.main_room)}`:`สแกนพบ: ${x}`;m.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${v}</h4>
            <p class="text-xs text-gray-500 truncate">${D}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${S}</p>
          </div>
        </div>`,m.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(m.innerHTML=window._lastSuccessFeedbackHTML,ke(m)):(m.innerHTML="",m.classList.add("hidden"))},3500);return}m.classList.remove("hidden")}}function ke(r){const x=r.querySelector("#btn-undo-scan");x&&x.addEventListener("click",()=>{const S=parseInt(x.dataset.sid,10),q=x.dataset.name;f(S,q)})}async function f(r,x){const S=qe(new Date);let q=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");q=q.filter(v=>!(v.student_id===r&&v.check_date===S)),localStorage.setItem("prayer_scan_queue",JSON.stringify(q));let V=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");V=V.filter(v=>!(v.student_id===r&&v.check_date===S)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(V)),window._syncedStudentIdsToday.delete(r),window._lastSuccessFeedbackHTML="";const m=document.getElementById("scanner-feedback-container");m&&(m.innerHTML="",m.classList.add("hidden")),z(),U(`กำลังยกเลิกรายการของ ${x}...`,"info");try{const{error:v}=await Le.from("prayer_records").delete().eq("student_id",r).eq("check_date",S).is("teacher_id",null);if(v)throw v;U(`ยกเลิกบันทึกของ ${x} สำเร็จ ✕`,"success")}catch(v){console.warn("Failed to delete from server (offline?):",v),U("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function Z(){const r=document.getElementById("scanner-flash");r&&(r.classList.remove("hidden","opacity-0"),r.classList.add("opacity-40"),setTimeout(()=>{r.classList.remove("opacity-40"),r.classList.add("opacity-0"),setTimeout(()=>r.classList.add("hidden"),150)},120))}function z(r=!1){const x=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let S=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const q=qe(new Date);S=S.filter(O=>O.check_date===q);const V=document.getElementById("scan-count-badge");V&&(V.textContent=`${S.length} คน`);const m=document.getElementById("sync-indicator"),v=document.getElementById("sync-title"),D=document.getElementById("sync-desc");if(!m||!v||!D)return;r?(m.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",v.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",D.textContent=`กำลังส่งข้อมูล ${x.length} คนขึ้นเซิร์ฟเวอร์`):x.length>0?(m.className="w-2.5 h-2.5 rounded-full bg-amber-500",v.textContent=`ค้างส่ง ${x.length} รายการ (ออฟไลน์)`,D.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(m.className="w-2.5 h-2.5 rounded-full bg-emerald-500",v.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",D.textContent="พร้อมบันทึกประวัติละหมาด");const Q=document.getElementById("scan-list");Q&&(S.length===0?Q.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(Q.innerHTML=S.map((O,oe)=>{const y=x.some(re=>re.student_id===O.student_id),R=O.status==="usor",Y=O.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",J=O.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",H=y?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':R?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${S.length-oe}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${O.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${O.student_code} · ห้อง ${je(O.main_room)}</p>
              </div>
              ${Y}
              ${J}
              ${H}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${O.student_id}" data-name="${O.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),Q.querySelectorAll(".btn-cancel-scan-row").forEach(O=>{O.addEventListener("click",()=>{const oe=parseInt(O.dataset.sid,10),y=O.dataset.name||"นักเรียน";f(oe,y)})})))}async function se(){if($)return;const r=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(r.length){$=!0,z(!0);try{const x=await gt(r);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),x!=null&&x.skippedCount?U(`ซิงก์สำเร็จ (ข้าม ${x.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):U("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(x){console.warn("Sync failed, offline backup kept:",x)}finally{$=!1,z()}}}const i=setInterval(()=>{se()},8e3);window._activePrayerScannerState.syncInterval=i,ne()}async function ga(e){if(!(e!=null&&e.can_scan_prayer)){ce(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}ce(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let t={},s=qe(new Date),o=[];const l=n=>{if(!n)return"—";const p=new Date(n);return`${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`},c=(n,p)=>{const _=new Date(n+"T00:00:00");return _.setDate(_.getDate()+p),qe(_)};async function d(){try{o=await rs(e.student_code,s)}catch(p){o=[],U("โหลดข้อมูลไม่สำเร็จ: "+he(p),"error")}const n=document.getElementById("sh-search-input");M((n==null?void 0:n.value.trim())??"")}function M(n=""){var g,C;const p=document.getElementById("sh-list"),_=document.getElementById("sh-count");if(!p)return;_&&(_.textContent=`${o.length} คน`);const k=n?o.filter($=>{var w;return String(((w=$.students)==null?void 0:w.student_code)??"").includes(n)}):o;if(n&&!k.length){p.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${te(n)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(g=document.getElementById("sh-resave-btn"))==null||g.addEventListener("click",()=>A(n)),(C=document.getElementById("sh-report-btn"))==null||C.addEventListener("click",()=>P(n));return}if(!k.length){p.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}p.innerHTML=k.map($=>{const w=$.students??{},X=He[$.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:$.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${w.image_url?`<img src="${w.image_url}" class="w-full h-full object-cover"/>`:te((w.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${te(w.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${te(w.student_code??"—")} · ${te(w.religion_room??w.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${X.cls}" title="${te(X.title)}">${X.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${l($.created_at)}</p>
        </div>
      </div>`}).join("")}async function T(){window._activePrayerScannerState={html5Qrcode:null};try{const n=await It(),p=new n("sh-camera-reader");window._activePrayerScannerState.html5Qrcode=p,await p.start({facingMode:"environment"},{fps:25,aspectRatio:1},_=>{var C;let k=String(_).trim();k.startsWith("SQ:")&&(k=k.split(":")[1]??k),b(),(C=document.getElementById("sh-camera-wrap"))==null||C.classList.add("hidden");const g=document.getElementById("sh-search-input");g&&(g.value=k),M(k)},()=>{})}catch(n){U("ไม่สามารถเปิดกล้องได้: "+(n.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function b(){var n;(n=window._activePrayerScannerState)!=null&&n.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function A(n){var C;let p=null;try{p=await ot(n)}catch{}if(!p){U("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}(C=document.getElementById("sh-resave-modal"))==null||C.remove();const _=document.createElement("div");_.id="sh-resave-modal",_.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const k=Object.entries(He);_.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${te(p.full_name)} (รหัส ${te(p.student_code)})<br/>${te(p.religion_room??p.main_room??"—")} · วันที่ ${s}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${k.map(([$,w],X)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${X===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${$}">${w.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(_);let g=k[0][0];_.querySelectorAll(".sh-status-btn").forEach($=>{$.addEventListener("click",()=>{g=$.dataset.status,_.querySelectorAll(".sh-status-btn").forEach(w=>{w.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),w.classList.add("border-gray-200","text-gray-500")}),$.classList.remove("border-gray-200","text-gray-500"),$.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),_.querySelector("#sh-resave-cancel").addEventListener("click",()=>_.remove()),_.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const $=_.querySelector("#sh-resave-confirm");$.disabled=!0,$.textContent="กำลังบันทึก...";try{const w={student_id:p.id,main_room:p.main_room,check_date:s,status:g,week_number:st(s,t),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await gt([w]),U("บันทึกสำเร็จ ✅","success"),_.remove(),await d()}catch(w){U("บันทึกไม่สำเร็จ: "+he(w),"error"),$.disabled=!1,$.textContent="บันทึก"}})}async function P(n){let p=null;try{p=await ot(n)}catch{}const k=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${p?`${p.full_name} (รหัส ${p.student_code}) ห้องศาสนา ${p.religion_room??p.main_room??"—"}`:`รหัสนักเรียน ${n} (ไม่พบชื่อในระบบ)`} วันที่ ${s} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(k):U("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function I(){t=await Ae().catch(()=>({})),ce(`
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
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async n=>{s=n.target.value,document.getElementById("sh-search-input").value="",await d()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{s=c(s,-1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await d()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{s=c(s,1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await d()}),document.getElementById("sh-search-input").addEventListener("input",n=>{M(n.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const n=document.getElementById("sh-camera-wrap");n.classList.toggle("hidden"),n.classList.contains("hidden")?b():T()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var n;b(),(n=document.getElementById("sh-camera-wrap"))==null||n.classList.add("hidden")}),await d()}I()}export{xa as completeGoogleEmailLink,pa as openEmailLinkPrompt,ma as renderExamRequestForm,Ds as renderStudentAllAssignments,ca as renderStudentMyScores,ia as renderStudentOverview,ga as renderStudentPrayerScanHistory,ba as renderStudentPrayerScanner,ua as renderStudentProfile,As as renderStudentRequests,Ns as renderStudentSubjectDetail,tt as renderStudentSubjects};
