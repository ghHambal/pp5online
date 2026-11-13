const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-BQaMiX9s.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/views-D468naNk.js","assets/ui-C-ZO4RB5.js","assets/leave-monitor.js_v_10.18-SIVlCHtZ.js","assets/leave-time-CrS9gT63.js","assets/academic-term-switcher-CWR_JlXz.js","assets/sync-C11n1XX8.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-DMDc0a8I.js","assets/teacher-views-classes-ot6k83TX.js","assets/browser-JP79f-a9.js","assets/regrade-menu-window-CMWxZTka.js","assets/pp5-doc-ycuHtLuK.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-grades-DS4Q-oBA.js","assets/score-qr-scanner-CfASQNHx.js","assets/teacher-views-attendance-Cj5tnwUe.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-CXWdz8q-.js","assets/workload-scheduler-C9WpzjbH.js","assets/import-BUUT5wvS.js","assets/theme-qDnPEUQn.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azizgames-modal-CZNvwg6f.js","assets/sports-awards-admin-6oCPrlSb.js"])))=>i.map(i=>d[i]);
import{a as Vt,_ as kt,g as _e,A as Wt}from"./ui-C-ZO4RB5.js";import{getSystemConfig as Oe,getClassScoreRounding as Yt,getMyOpenQrReissueRequest as pt,submitQrReissueRequest as Ut,notifyQrReissueManagers as Jt,getAcademicTerms as Et,notifySubjectGroupAdmins as Kt}from"./api-BQaMiX9s.js";import{i as Xe,g as xt,c as Xt,a as Zt,d as es,f as Ze,r as ts}from"./score-display-CQ4dUIPx.js";import{c as Lt,d as ss,s as jt,e as as,f as Je,h as rs,i as ns,j as os,k as ls,l as ds,m as is,n as cs,b as dt,o as ms,p as us,q as Ct,r as ps,u as It,t as qt,v as xs,w as bs,x as gs,y as Mt,z as fs,A as ys,B as vs,C as hs,D as ws,E as _s,F as $s,G as Ss,H as ks,I as bt}from"./student-api-C610hcu8.js";import{g as Es}from"./theme-qDnPEUQn.js";import{i as Tt}from"./skill-groups-BY1NTbf4.js";import{_dateInputValue as Bt,_currentWeek as Ls,applyReadingGradesFromConfig as js,_readingGrade as Cs,renderIconTile as Ne}from"./teacher-views-utils-DMDc0a8I.js";import{g as Dt,a as Nt,b as At,r as Pt}from"./quiz-api-CcBTN73s.js";import{f as Is}from"./leave-time-CrS9gT63.js";import{uploadAssignmentFile as qs}from"./storage-CuUjCgvI.js";import{s as qe}from"./supabase-BV-W2lsh.js";import{b as Ms}from"./browser-JP79f-a9.js";import{g as Ts,Q as Bs,R as Ds}from"./regrade-menu-window-CMWxZTka.js";import{e as Ns,o as gt}from"./certificate-engine-Bn4Xdc-e.js";import{o as As,c as Ps,a as ft,r as Rs}from"./academic-term-switcher-CWR_JlXz.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./assignment-annotations-api-Y9qfMpYa.js";import"./print-overlay-BVfxEd6n.js";const et=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]);function Rt(e){if(!e)return"";if(e.image_review_error)return'<p class="text-xs text-amber-700 mt-2">เปิดผลตรวจแบบเขียนไม่สำเร็จ กรุณาโหลดหน้าใหม่เพื่อลองอีกครั้ง</p>';const s=e.image_reviews??[];return s.length?`<div class="mt-3 rounded-xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-xs font-bold text-indigo-700 mb-2">✍️ งานที่ครูตรวจแล้ว</p>${s.map(n=>`<div class="mb-3 last:mb-0"><p class="text-xs text-indigo-700 mb-1">${new Date(n.source_submitted_at).getTime()===new Date(e.submitted_at).getTime()&&(e.file_urls??[]).some(i=>i.url===n.source_url)?"ผลตรวจงานรอบปัจจุบัน":"ผลตรวจงานรอบก่อน"} · ${et(new Date(n.source_submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}))}</p><a href="${et(n.image_url)}" target="_blank" rel="noopener" class="block"><img src="${et(n.image_url)}" alt="งานที่ครูเขียนตรวจแล้ว" loading="lazy" class="max-h-64 w-full object-contain rounded-lg bg-white"><span class="block text-xs font-bold text-indigo-700 mt-1">เปิดดูฉบับตรวจ ↗</span></a></div>`).join("")}</div>`:""}const tt=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]);async function Ht(e){var h;(h=document.getElementById("my-certificates-modal"))==null||h.remove();const s=document.body.style.overflow;document.body.style.overflow="hidden";const n=document.createElement("div");n.id="my-certificates-modal",n.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",n.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const o=()=>{document.removeEventListener("keydown",i),document.body.style.overflow=s,n.remove()},i=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",i),document.body.appendChild(n),n.querySelector("[data-mycert-close]").addEventListener("click",o);const c=n.querySelector("#my-certificates-body"),x=[];(await Ns(e.id).catch(()=>[])).forEach(r=>x.push({key:`central-${r.id}`,emoji:"🏅",title:r.title||"เกียรติบัตร",sub:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>gt({layout:r.layout_snapshot,variables:{name:e.full_name,date:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:r.certificate_no,...r.variables},docTitle:r.title})}));const k=await Lt(e.main_room).catch(()=>null),P=k&&Number(k.head_student_id)===Number(e.id),p=k&&Number(k.vice_head_student_id)===Number(e.id),D=P?k==null?void 0:k.head_cert_url:p?k==null?void 0:k.vice_head_cert_url:null;D&&x.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${P?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(D,"_blank")});try{const{data:r}=await qe.from("events").select("id, status").order("academic_year",{ascending:!1}).order("created_at",{ascending:!1}).limit(1).maybeSingle();if(r){const[f,E]=await Promise.all([qe.rpc("get_my_sports_eligibility",{p_event:r.id}).then(b=>b.error?null:b.data).catch(()=>null),qe.rpc("get_my_sports_certificates",{p_event:r.id}).then(b=>b.error?[]:b.data??[]).catch(()=>[])]);(Array.isArray(E)?E:[]).forEach(b=>{const $=b.certificate_kind==="outstanding";x.push({key:`sports-${b.certificate_kind||"medal"}-${b.id}`,emoji:$?"🏆":"🏅",title:b.title||`เกียรติบัตร${b.medal_label?` · ${b.medal_label}`:""}`,sub:$?`นักกีฬาดีเด่น · ${b.sport_name||"กีฬาสี"}`:`${b.sport_name||"รายการแข่งขัน"} · สี${b.color||""}`,onOpen:()=>gt({layout:b.layout,variables:{name:e.full_name,date:new Date(b.awarded_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"}),no:b.certificate_no,...b.variables||{}},docTitle:b.title},Vt)})}),f!=null&&f.eligible&&(f!=null&&f.certificate_url)&&x.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(f.certificate_url,"_blank")})}}catch{}x.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>As(e.student_code)}),c.innerHTML=x.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${x.map(r=>`
        <div data-key="${tt(r.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${r.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${r.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${tt(r.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${tt(r.sub||"")}</p>
          ${r.onOpen?'<p class="text-[10px] text-indigo-600 mt-2 font-bold">กดเพื่อเปิด / บันทึก PDF</p>':""}
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',x.forEach(r=>{var f;r.onOpen&&((f=c.querySelector(`[data-key="${CSS.escape(r.key)}"]`))==null||f.addEventListener("click",r.onOpen))})}const Me=e=>(e??"").replace(/\/\d+/,"").trim(),Fe=e=>!e.mySubmission||e.mySubmission.status==="rejected",V=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ie(e){const s=document.getElementById("stu-content")||document.getElementById("main-content");s&&(s.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function Y(e,s="info"){const n={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},o=document.createElement("div");o.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${n[s]??n.info} transition-all`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2800)}const Hs={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},Os={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},He={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Ue=["อา","จ","อ","พ","พฤ","ศ","ส"],Ge={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},st=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function zs(e){if(e!=null&&e.teacher_code)return st;const s=String((e==null?void 0:e.gender)||"").trim(),n=st.filter(o=>o.genders.includes(s));return n.length?n:st}function Fs(e){const s=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!s)return{grade:null,isVoc:!1};const n=s.match(/^ม\.?([1-6])/);return{grade:n?parseInt(n[1],10):null,isVoc:s.startsWith("ปวช")}}function Gs(e,s){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:n,isVoc:o}=Fs(e),i=s==="musolla_male",c=s==="masjid_kuwait";return!i&&!c?"":c&&!(n===6||o)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":i&&!(n>=1&&n<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function yt(e){const n=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16)}}function Qs({r:e,g:s,b:n}){return"#"+[e,s,n].map(o=>Math.max(0,Math.min(255,Math.round(o))).toString(16).padStart(2,"0")).join("")}function Qe(e,s,n){const o=yt(e),i=yt(s);return Qs({r:o.r+(i.r-o.r)*n,g:o.g+(i.g-o.g)*n,b:o.b+(i.b-o.b)*n})}function Re(e){if(!e)return"—";const s=new Date(e);return`${s.getDate()}/${s.getMonth()+1}/${s.getFullYear()+543}`}function at(e){if(!e)return"";const s=new Date(e),n=new Date;s.setHours(0,0,0,0),n.setHours(0,0,0,0);const o=Math.round((s-n)/864e5);return o>1?`อีก ${o} วัน`:o===1?"พรุ่งนี้":o===0?"วันนี้":o===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(o)} วัน`}function Vs(e){var i,c,x;const s=((i=e.master_subjects)==null?void 0:i.subject_group)??"",n=e.skill_group??"";return(((x=(c=e.master_subjects)==null?void 0:c.teachers)==null?void 0:x.category)??"")==="ศาสนา"||s==="AGM"||s==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:s==="ACDMVOC"||n==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:n==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:Tt(n)?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:n==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function Ws(e,s={}){var k,P,p;const n=((k=e.master_subjects)==null?void 0:k.subject_group)??"",o=e.skill_group??"",i=((p=(P=e.master_subjects)==null?void 0:P.teachers)==null?void 0:p.category)??"",c=i==="ศาสนา"||n==="AGM"||n==="AGMVOC"?s.teacherReligionColor||"#b45309":n==="ACDMVOC"||o==="สามัญปวช"?s.teacherVocColor||"#7c3aed":o==="ภาษา"?s.teacherLanguageColor||"#2563eb":Tt(o)?s.teacherLifeColor||"#059669":o==="วิชาการ"?s.teacherAcademicColor||"#ea580c":s.teacherDefaultColor||"#059669",x=i==="ศาสนา"||n==="AGM"||n==="AGMVOC"?n==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":n==="ACDMVOC"||o==="สามัญปวช"?"กลุ่มสามัญ ปวช":o?`กลุ่มทักษะ: ${o}`:"กลุ่มวิชาสามัญ",j=x.replace("กลุ่มทักษะ: ","");return{color:c,label:x,short:j,bg:Qe(c,"#ffffff",.9),badgeBg:Qe(c,"#ffffff",.86),border:Qe(c,"#ffffff",.35),text:Qe(c,"#000000",.35)}}function rt(e=0){const s=new Date,n=s.getDay(),o=new Date(s);o.setDate(s.getDate()-(n===0?6:n-1)),o.setDate(o.getDate()+e*7);const i=new Date(o);i.setDate(o.getDate()-1);const c={};c[0]=i;for(let x=1;x<=7;x++){const j=new Date(o);j.setDate(o.getDate()+x-1),c[x]=j}return c}function Ve(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const Ot="12:20",Ys="12:50",Us="13:05",Js=60;function Ye(e,s){const o=String(e||s||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return Ye(s,Ot);const i=Math.max(0,Math.min(23,parseInt(o[1],10))),c=Math.max(0,Math.min(59,parseInt(o[2],10)));return i*60+c}function vt(e){const s=(e%1440+1440)%1440;return`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}function Pe(e){return String(e||"").split(/[\s,]+/).map(s=>s.trim()).filter(Boolean)}function ht(e,s=!1){return e==null||e===""?s:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function Ks(e,s={}){return String(e||"").trim()==="หญิง"?ht(s.prayerSameRoomGuardFemaleEnabled,!1):ht(s.prayerSameRoomGuardMaleEnabled,!0)}function wt(e){return String(e||"").replace(/\s+/g,"").trim()}function zt(e,s={}){return e!=null&&e.student_code?Pe(s.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function Ft(e,s={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const n=String(e.student_code).trim(),o=Pe(s.prayerScannerSun),i=Pe(s.prayerScannerMon),c=Pe(s.prayerScannerTue),x=Pe(s.prayerScannerWed),j=Pe(s.prayerScannerThu);if(!(o.includes(n)||i.includes(n)||c.includes(n)||x.includes(n)||j.includes(n)))return!0;const P=new Date().getDay();return!!(P===0&&o.includes(n)||P===1&&i.includes(n)||P===2&&c.includes(n)||P===3&&x.includes(n)||P===4&&j.includes(n))}function it(e={},s=!1){const n=Ye(e.prayerScanStartTime,Ot),o=Ye(e.prayerScanEndTime,Ys),i=Ye(e.prayerScanExtendedEndTime,Us),c=s?i:o;return{start:n,end:c,startLabel:vt(n),endLabel:vt(c)}}function nt(e={},s=!1){const n=new Date,o=n.getHours(),i=n.getMinutes(),c=o*60+i,{start:x,end:j}=it(e,s);return j<x?c>=x||c<=j:c>=x&&c<=j}function Xs(e={},s=!1){const n=new Date,o=n.getHours()*3600+n.getMinutes()*60+n.getSeconds(),{start:i,end:c}=it(e,s),x=i*60;let j=c*60,k=o;return c<i&&k<x&&(k+=86400),c<i&&(j+=86400),Math.max(0,j-k)}function Zs(e){const s=Math.floor(e/60),n=e%60;return`${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Be(e){var x,j;let s=e.getFullYear();const n=((x=window._pp5SystemCfg)==null?void 0:x.academicYear)||((j=window._pp5SystemCfg)==null?void 0:j.academic_year)||2569,o=parseInt(n)-543;(s>2030||s<2024)&&(s=o);const i=String(e.getMonth()+1).padStart(2,"0"),c=String(e.getDate()).padStart(2,"0");return`${s}-${i}-${c}`}function Gt(e,s=[]){const n=s.map(x=>x.check_date).filter(Boolean).sort()[0],o=e||n||new Date().toISOString().slice(0,10),i=new Date(o);i.setHours(0,0,0,0);const c=i.getDay();return c&&i.setDate(i.getDate()-c),Array.from({length:20},(x,j)=>{const k=Array.from({length:5},(P,p)=>{const D=new Date(i);return D.setDate(i.getDate()+j*7+p),{date:D,ds:Be(D),day:Ue[p]}});return{n:j+1,days:k}})}function _t(e,s){const n=Object.fromEntries((s??[]).map(o=>[o.column_id,o.score]));return(e??[]).map(o=>({...o,score:n[o.id]??null}))}async function qa(e){var me,w,U,te,ae,g;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,n,o,i,c,x,j,k,P]=await Promise.all([Je(e.id).catch(()=>[]),dt(e.id).catch(()=>[]),vs(e.id).catch(()=>({linked:[],unlinked:[]})),hs(e.id).catch(()=>[]),Mt(e.id).catch(a=>(console.error("[student GPA] โหลดเกรดเฉลี่ยไม่สำเร็จ",a),{samai:[],sasana:[],error:_e(a)})),Oe().catch(()=>({})),Lt(e.main_room).catch(()=>null),qt(e.id).catch(()=>[]),(me=window._pp5StudentAcademicTerms)!=null&&me.length?Promise.resolve(window._pp5StudentAcademicTerms):Et().catch(()=>[])]),p=Ps(P,x),D=ft({academic_year:Number(x.academicYear??x.academic_year??2568),semester:Number(x.semester??1)});let h=D;try{const a=localStorage.getItem(`pp5_student_score_term_${e==null?void 0:e.id}`);p.some(d=>ft(d)===a)&&(h=a)}catch{}const r=k.filter(Fe).sort((a,d)=>(a.due_at?new Date(a.due_at).getTime():1/0)-(d.due_at?new Date(d.due_at).getTime():1/0)),f=n.filter(a=>a.status==="pending"),E=n.slice(0,3),L=zt(e,x),b=await Promise.all(s.map(a=>Dt(a.id,e.id).catch(()=>[]))),$=s.flatMap((a,d)=>(b[d]??[]).map(u=>({...u,_class:a}))),C=await Nt($.map(a=>a.id),e.id).catch(()=>new Set),S=$.filter(a=>{if(a.status!=="started"||C.has(a.id))return!1;const d=a.attempts.filter(q=>q.status==="submitted"||q.status==="terminated_violation").length;return!(a.attempts.length&&a.attempts[a.attempts.length-1].status==="terminated_violation")&&d<a.max_attempts}),Q=j&&Number(j.head_student_id)===Number(e.id),oe=j&&Number(j.vice_head_student_id)===Number(e.id),de=(x.council_test_student_codes||"").split(/[\s,]+/).map(a=>a.trim()).filter(Boolean),xe=x.council_visible_to_all!=="false"||de.includes(e.student_code);let be=!1;try{const{data:a,error:d}=await qe.rpc("get_terangganu_access");d||(be=(a==null?void 0:a.visible)===!0&&(a==null?void 0:a.student_allowed)===!0)}catch{be=!1}let ye=0,ve={};try{const[a,d]=await Promise.all([Ts(),Promise.resolve(qe.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);ve=a||{},ye=Number(d==null?void 0:d.count)||0}catch{ye=0}const $e=Bs(ve,"student",{badge:ye});let Se=!0;try{const{data:a}=await qe.from("settings").select("value").eq("key","sports_visibility").maybeSingle();a!=null&&a.value&&(Se=a.value.enabled!==!1&&a.value.student_menu!==!1)}catch{Se=!0}let Ee=!1;try{const{data:a}=await qe.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();Ee=!!a}catch{Ee=!1}let he=!1;try{const{data:a}=await qe.from("attendance_delegates").select("id, classes!inner(attendance_delegate_enabled)").eq("student_id",e.id).eq("classes.attendance_delegate_enabled",!0).limit(1);he=!!(a!=null&&a.length)}catch{he=!1}const Le=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">ข้อมูลการเรียน งาน และกิจกรรมในหน้าภาพรวมเป็นภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="student-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Rs(p,h,D)}
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
          ${Q?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
              👑 หัวหน้าห้อง
            </span>
          `:""}
          ${oe?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              🥈 รองหัวหน้าห้อง
            </span>
          `:""}
        </div>
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${e.student_code} · ${Me(e.main_room??"—")}</p>
      </div>
    </div>

    ${$e?`<div class="mb-4">${$e}</div>`:""}

    <!-- ระบบอื่น ๆ — กริดไอคอนแอปเลื่อนแนวนอนได้ถ้ามีมากกว่าที่จอแสดงพอดี (sportsVisible/councilVisible/
         terangganuVisible/can_scan_prayer ล้วนเปิด-ปิดแยกอิสระ รวมกันอาจเกิน 4 ช่องได้)
         — เกียรติบัตรแสดงเสมอ ส่วนที่เหลือ conditional เหมือนเดิมทุกประการ แค่เปลี่ยนรูปแบบจากแบนเนอร์
         เต็มแถว/แถบเมนูล่างถาวร (กีฬาสี) มาเป็นไอคอน -->
    <div class="mb-4">
      <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</p>
      ${[Se,Ee,xe,be,e.can_scan_prayer,he].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Ne({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},x.iconTileStyle)}
        ${Se?Ne({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},x.iconTileStyle):""}
        ${Ee?Ne({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},x.iconTileStyle):""}
        ${xe?Ne({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},x.iconTileStyle):""}
        ${be?Ne({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},x.iconTileStyle):""}
        ${e.can_scan_prayer?Ne({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},x.iconTileStyle):""}
        ${he?Ne({id:"student-attendance-delegate-tile",emoji:"✅",label:"เช็คชื่อ<br>แทนครู",from:"#CDEBD6",to:"#4CA778",onclick:"window._stuNav('attendance_delegate')"},x.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${Ft(e,x)&&nt(x,L)?`
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
    ${S.map(a=>{var u,q;const d=a.attempts.some(m=>m.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${d?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${V(a.title)} · ${V(((q=(u=a._class)==null?void 0:u.master_subjects)==null?void 0:q.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${a.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
          ${d?"ทำต่อ →":"เข้าสอบ →"}
        </button>
      </div>`}).join("")}

    <!-- Stats row — คลิกได้แล้ว ลิงก์ไปหน้าที่เกี่ยวข้องโดยตรง -->
    <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
      <button type="button" onclick="window._stuNav('subjects')" class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center relative active:scale-95 transition-transform">
        <span class="absolute top-1.5 right-2 text-gray-300 text-xs">›</span>
        <p class="text-xl sm:text-3xl font-bold text-emerald-600">${s.length}</p>
        <p class="text-[9px] sm:text-xs text-gray-400 mt-0.5 leading-tight">รายวิชา</p>
      </button>
      <button type="button" onclick="window._stuNav('requests')" class="bg-white rounded-xl border border-gray-200 shadow-md p-2.5 sm:p-4 text-center relative active:scale-95 transition-transform">
        <span class="absolute top-1.5 right-2 text-gray-300 text-xs">›</span>
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${f.length}</p>
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
        <p class="text-[10px] text-emerald-200 mt-0.5 relative">${s.length} วิชา</p>
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
      ${(()=>{const a=`stu_ann_seen_${e.id}`,d=new Set(JSON.parse(localStorage.getItem(a)??"[]")),u=i.filter(q=>!d.has(q.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${i.length} รายการ</p>
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
    ${(()=>{const a=r.length>0,d=r[0],u=d!=null&&d.due_at?new Date(d.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${a?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${a?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${a?`ค้างอยู่ ${r.length} ชิ้น · ใกล้สุด: ${V(d.title)}${u?` (${u})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const d=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],u=new Date,q=u.getHours()*3600+u.getMinutes()*60+u.getSeconds(),m=A=>{if(!A)return null;const[K,z]=A.split(":").map(Number);return K*3600+z*60},I=o.linked.map(({cls:A,sched:K,period:z})=>{var t,l;const ue=A==null?void 0:A.master_subjects,pe=m(z==null?void 0:z.start_time),ee=m(z==null?void 0:z.end_time),T=pe!=null&&ee!=null&&q>=pe&&q<ee,H=ee!=null&&q>=ee,X=T?"🟢":H?"✅":"⬜",_=z?`${(t=z.start_time)==null?void 0:t.slice(0,5)}–${(l=z.end_time)==null?void 0:l.slice(0,5)}`:`คาบ ${K.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${X}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${K.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(ue==null?void 0:ue.subject_name)??K.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${_} · ${(A==null?void 0:A.class_name)??""}</p>
          </div>
          ${T?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),N=i.filter(A=>A.ann_type==="deadline"&&A.deadline_at&&new Date(A.deadline_at)>u).sort((A,K)=>new Date(A.deadline_at)-new Date(K.deadline_at)).slice(0,5),ne=A=>{const K=new Date(A)-u,z=Math.floor(K/6e4);if(z<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${z} น.</span>`;const ue=Math.floor(z/60);return ue<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${ue} ชม. ${z%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(ue/24)} วัน</span>`},O=N.map(A=>{var z,ue;const K=(z=A.cls)==null?void 0:z.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${A.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(K==null?void 0:K.subject_name)??""} · ${((ue=A.cls)==null?void 0:ue.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${ne(A.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${d}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${u.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${I?`
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${I}</div>`:'<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>'}
        ${O?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${O}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${E.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${E.map(a=>{var q;const d=He[a.status]??He.pending,u=a.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${((q=u==null?void 0:u.master_subjects)==null?void 0:q.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${a.request_type} · ${Re(a.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${d.cls}">${d.label}</span>
            </div>
          </div>`}).join("")}
      </div>
    </div>`:`
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `),Ds();const ke=document.getElementById("stu-live-clock");if(ke){const a=()=>{const u=new Date;ke.textContent=`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}:${String(u.getSeconds()).padStart(2,"0")}`};a();const d=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(d);return}a()},1e3)}const y=(a,d)=>{const u=document.createElement("div");return u.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",u.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${a}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${d}</div>`,document.body.appendChild(u),u.querySelector("#stu-popup-back").addEventListener("click",()=>u.remove()),u},R=o.linked.find(({period:a})=>{if(!(a!=null&&a.start_time)||!(a!=null&&a.end_time))return!1;const d=new Date,u=d.getHours()*3600+d.getMinutes()*60+d.getSeconds(),[q,m]=a.start_time.split(":").map(Number),[I,N]=a.end_time.split(":").map(Number);return u>=q*3600+m*60&&u<I*3600+N*60});if(R){const a=(()=>{const[u,q]=R.period.end_time.split(":").map(Number);return u*3600+q*60})(),d=setInterval(()=>{const u=document.getElementById("stu-period-countdown");if(!u){clearInterval(d);return}const q=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),m=Math.max(0,a-q);if(m===0){u.textContent="หมดคาบ",clearInterval(d);return}const I=Math.floor(m/3600),N=Math.floor(m%3600/60),ne=m%60;u.textContent=`${String(I).padStart(2,"0")}:${String(N).padStart(2,"0")}:${String(ne).padStart(2,"0")}`},1e3)}const G={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},re=a=>{if(!a)return"";const d=new Date(a),q=Math.floor((d-new Date)/6e4),m=d.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if(q<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${m}</span>`;if(q<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${q} น. · ${m}</span>`;const I=Math.floor(q/60);return I<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${I} ชม. ${q%60} น. · ${m}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(I/24)} วัน · ${m}</span>`};(w=document.getElementById("btn-stu-my-certificates"))==null||w.addEventListener("click",()=>Ht(e)),(U=document.getElementById("btn-stu-anns"))==null||U.addEventListener("click",()=>{const a=`stu_ann_seen_${e.id}`,d=new Set(JSON.parse(localStorage.getItem(a)??"[]"));i.forEach(m=>d.add(m.id)),localStorage.setItem(a,JSON.stringify([...d]));const u=document.querySelector("#btn-stu-anns span.absolute");u&&u.remove();const q=i.length?`<div class="space-y-3">${i.map(m=>{var ne,O,A;const I=G[m.ann_type]??G.general,N=(ne=m.cls)==null?void 0:ne.master_subjects;return`<div class="rounded-2xl border ${I.border} ${I.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${m.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${I.icon} ${I.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(N==null?void 0:N.subject_name)??""} · ${((O=m.cls)==null?void 0:O.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${m.title??""}</p>
        ${m.body?`<p class="text-xs text-gray-500 mt-1">${m.body}</p>`:""}
        ${m.ann_type==="deadline"&&m.deadline_at?`<div class="mt-2">${re(m.deadline_at)}</div>`:""}
        ${m.file_url?`<a href="${m.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(A=m.attachment_urls)!=null&&A.length?`<div class="flex flex-wrap gap-1.5 mt-2">${m.attachment_urls.map(K=>`<a href="${V(K.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${V(K.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';y("📢 ประกาศของฉัน",q)}),(te=document.getElementById("btn-stu-gpa"))==null||te.addEventListener("click",()=>{const a=T=>{const H=T.filter(t=>t.grade!=null);if(!H.length)return null;const X=H.reduce((t,l)=>t+(l.credit||1),0),_=H.reduce((t,l)=>t+l.grade*(l.credit||1),0);return X>0?(_/X).toFixed(2):null},d=T=>T==null?"text-gray-400":T>=3.5?"text-emerald-600":T>=3?"text-blue-500":T>=2?"text-amber-600":"text-red-500",u=T=>T>=3.5?"ดีเยี่ยม":T>=3?"ดี":T>=2?"พอใช้":T>=1?"ผ่าน":"ไม่ผ่าน",q=T=>T.loadError?'<span class="text-[10px] font-semibold text-red-500 whitespace-nowrap">⚠️ โหลดข้อมูลไม่ครบ</span>':T.grade==null&&T.totalCols>0?`<span class="text-[10px] font-semibold text-amber-500 whitespace-nowrap" title="ครูให้คะแนนแล้ว ${T.scoredCount}/${T.totalCols} ช่อง — วิชานี้ยังไม่ถูกนับเข้าเกรดเฉลี่ยจนกว่าจะครบ">⏳ ${T.scoredCount}/${T.totalCols} · ยังไม่นับเข้า GPA</span>`:null,m=(T,H,X)=>{const t=T.filter(M=>M.grade!=null).reduce((M,B)=>M+(B.credit||1),0),l=parseFloat(H);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${X}" class="text-5xl font-extrabold ${H?d(l):"text-gray-300"} hover:opacity-70 transition">${H??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${H?d(l):"text-gray-400"}">${H?u(l):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${T.length?`
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
            ${T.map((M,B)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${B+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${M.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${M.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${M.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${M.score!=null?M.score:q(M)??"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${d(M.grade)}">${M.grade!=null?M.grade.toFixed(1):q(M)?"":"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${M.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${M.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${t}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${t}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${d(H?l:null)}">${H??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},I=(T,H,X)=>{const _=parseFloat(H);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${X}" class="text-5xl font-extrabold ${H?d(_):"text-gray-300"} hover:opacity-70 transition">${H??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${H?d(_):"text-gray-400"}">${H?u(_):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${T.length?`
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${T.map(t=>`
        <button class="gpa-pp5-btn text-left border border-gray-200 rounded-2xl p-3 hover:shadow-md transition bg-white" data-class-id="${t.classId}">
          <p class="text-[10px] text-gray-400 font-mono truncate">${t.subjectCode??""}</p>
          <p class="font-bold text-xs text-gray-800 leading-tight line-clamp-2 mt-0.5 min-h-[2rem]">${t.subjectName}</p>
          <div class="flex items-center justify-between mt-2 gap-1">
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${t.credit} นก. ${t.hasRetake?"· แก้":""}</span>
            ${q(t)??`<span class="text-lg font-extrabold ${d(t.grade)}">${t.grade!=null?t.grade.toFixed(1):"—"}</span>`}
          </div>
        </button>`).join("")}
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},N=a(c.samai),ne=a(c.sasana),O=T=>{const H=T==="samai"?c.samai:c.sasana,X=T==="samai"?N:ne;return(localStorage.getItem("studentGpaView")==="card"?"card":"table")==="card"?I(H,X,T):m(H,X,T)},K=`
      ${c.error?`
      <div class="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700">
        <p class="font-bold">⚠️ โหลดข้อมูลเกรดเฉลี่ยได้ไม่ครบ</p>
        <p class="mt-1">${V(c.error)}</p>
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
      <div id="gpa-pop-samai">${O("samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${O("sasana")}</div>`,z=y("🎓 เกรดเฉลี่ยของฉัน",K),ue=()=>{z.querySelectorAll(".gpa-pp5-btn").forEach(T=>{T.addEventListener("click",()=>{var X;const H=Number(T.dataset.classId);z.remove(),(X=window._stuOpenClass)==null||X.call(window,H)})}),["samai","sasana"].forEach(T=>{const H=z.querySelector(`#gpa-val-btn-${T}`);H&&H.addEventListener("click",()=>{const _=(T==="samai"?c.samai:c.sasana).filter(Z=>Z.grade!=null),t=_.reduce((Z,se)=>Z+(se.credit||1),0),l=_.reduce((Z,se)=>Z+se.grade*(se.credit||1),0),M=t>0?(l/t).toFixed(2):"—",B=document.createElement("div");B.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",B.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
            <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
            <div class="text-sm text-gray-600 mb-3">
              <p class="font-mono text-base font-semibold text-purple-700">
                Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
              <p class="text-gray-700">${l.toFixed(2)} ÷ ${t}</p>
              <p class="text-purple-700 font-bold text-lg mt-1">= ${M}</p>
            </div>
            <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่ครูให้คะแนนครบทุกช่องแล้วเท่านั้น (${_.length} วิชา)</p>
            <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
          </div>`,document.body.appendChild(B),B.querySelector("#gpa-tip-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",Z=>{Z.target===B&&B.remove()})})})},pe=()=>{const T=localStorage.getItem("studentGpaView")==="card"?"card":"table";z.querySelector("#gpa-view-table").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${T==="table"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`,z.querySelector("#gpa-view-card").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${T==="card"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`};pe(),ue();const ee=T=>{localStorage.setItem("studentGpaView",T==="card"?"card":"table"),z.querySelector("#gpa-pop-samai").innerHTML=O("samai"),z.querySelector("#gpa-pop-sasana").innerHTML=O("sasana"),pe(),ue()};z.querySelector("#gpa-view-table").addEventListener("click",()=>ee("table")),z.querySelector("#gpa-view-card").addEventListener("click",()=>ee("card")),z.querySelectorAll(".gpa-pop-tab").forEach(T=>{T.addEventListener("click",()=>{const H=T.dataset.tab;z.querySelector("#gpa-pop-samai").classList.toggle("hidden",H!=="samai"),z.querySelector("#gpa-pop-sasana").classList.toggle("hidden",H!=="sasana"),z.querySelectorAll(".gpa-pop-tab").forEach(X=>{X.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${X.dataset.tab===H?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})})}),window._stuOpenClassFromTT=a=>{var d;document.querySelectorAll(".stu-fullpop").forEach(u=>u.remove()),window._stuFromTimetable=!0,(d=window._stuOpenClass)==null||d.call(window,a)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const le=async()=>{const a=y("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:d,periods:u}=await ws(e.id).catch(()=>({slots:[],periods:[]})),q=a.querySelector(".flex-1.overflow-y-auto");if(!q)return;const m=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],I=["อา","จ","อ","พ","พฤ","ศ","ส"],N=[0,1,2,3,4,5,6].filter(ee=>d.some(T=>T.dow===ee)),ne=new Date().getDay();let O="day",A=N.includes(ne)?ne:N[0]??0;const K={};d.forEach(ee=>{K[`${ee.dow}-${ee.periodNo}`]=ee});const z=ee=>{var B,Z,se,ce;const T=new Date,H=T.getHours()*3600+T.getMinutes()*60+T.getSeconds(),X={};d.filter(F=>F.dow===ee&&F.span>1).forEach(F=>{for(let W=1;W<F.span;W++)X[F.periodNo+W]=F.periodNo});const _=((Z=(B=u.find(F=>F.period_no===5))==null?void 0:B.end_time)==null?void 0:Z.slice(0,5))??"",t=((ce=(se=u.find(F=>F.period_no===6))==null?void 0:se.start_time)==null?void 0:ce.slice(0,5))??"",l=_&&t?`${_}–${t}`:"";let M="";return u.forEach(F=>{var mt,ut;F.period_no===6&&u.find(Ke=>Ke.period_no===5)&&(M+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${l?`<p class="text-[10px] text-emerald-500 mt-0.5">${l}</p>`:""}
            </td></tr>`);const W=K[`${ee}-${F.period_no}`],v=(W==null?void 0:W.span)??1,J=v>1?u.find(Ke=>Ke.period_no===F.period_no+v-1)??F:F,[ge,Te]=(F.start_time??"0:0").split(":").map(Number),[Ie,we]=(J.end_time??"0:0").split(":").map(Number),je=H>=ge*3600+Te*60&&H<Ie*3600+we*60,fe=(mt=W==null?void 0:W.cls)==null?void 0:mt.master_subjects,Ae=["AGM","AGMVOC"].includes((fe==null?void 0:fe.subject_group)??""),ct=W?Ae?"bg-amber-50":"bg-emerald-50":"",ze=W?Ae?"text-amber-800":"text-emerald-800":"text-gray-300",De=X[F.period_no]!=null;M+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${je?"text-emerald-600":"text-gray-500"}">คาบ ${F.period_no}</p>
            <p class="text-[10px] text-gray-400">${((ut=F.start_time)==null?void 0:ut.slice(0,5))??""}</p>
          </td>
          ${De?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${v>1?`rowspan="${v}"`:""}
              ${W?`onclick="window._stuOpenClassFromTT(${W.cls.id})"`:""}>
            ${W?`
              <div class="rounded-xl ${ct} border-l-4 ${Ae?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${je?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${v>1?v*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${ze} leading-tight">${(fe==null?void 0:fe.subject_name)??"—"}</p>
                <p class="text-[10px] ${ze} opacity-60 mt-0.5">${(fe==null?void 0:fe.subject_code)??""}</p>
                ${je?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${M}</tbody>
      </table>`},ue=()=>{const ee=`${Math.floor(100/(N.length+1))}%`,T=`<th style="width:${ee}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+N.map(_=>`<th style="width:${ee}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${_===ne?"text-teal-600":"text-gray-600"}">${I[_]}</th>`).join(""),H={};N.forEach(_=>{H[_]=new Set});let X="";return u.forEach((_,t)=>{var B,Z,se,ce;const l=new Date;l.getHours()*3600+l.getMinutes()*60+l.getSeconds();const M=N.map(F=>{var ze;if(H[F].has(_.period_no))return"";const W=K[`${F}-${_.period_no}`],v=(W==null?void 0:W.span)??1,J=(ze=W==null?void 0:W.cls)==null?void 0:ze.master_subjects,ge=["AGM","AGMVOC"].includes((J==null?void 0:J.subject_group)??""),Te=W?ge?"bg-amber-50":"bg-emerald-50":"",Ie=W?ge?"text-amber-700":"text-emerald-700":"text-gray-200",we=v>1?u.find(De=>De.period_no===_.period_no+v-1)??_:_,[je,fe]=(_.start_time??"0:0").split(":").map(Number),[Ae,ct]=(we.end_time??"0:0").split(":").map(Number);for(let De=1;De<v;De++)H[F].add(_.period_no+De);return`<td style="width:${ee};padding:2px" ${v>1?`rowspan="${v}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${W?`onclick="window._stuOpenClassFromTT(${W.cls.id})"`:""}>
            ${W?`
              <div class="rounded-lg ${Te} border-l-2 ${ge?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${v>1?v*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${Ie} text-[8px] font-semibold leading-tight line-clamp-3">${(J==null?void 0:J.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(X+=`<tr>
          <td style="width:${ee}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${_.period_no}</p>
            <p class="text-[8px] text-gray-300">${((B=_.start_time)==null?void 0:B.slice(0,5))??""}</p>
          </td>${M}</tr>`,_.period_no===5&&u.find(F=>F.period_no===6)){const F=((Z=_.end_time)==null?void 0:Z.slice(0,5))??"",W=((ce=(se=u.find(v=>v.period_no===6))==null?void 0:se.start_time)==null?void 0:ce.slice(0,5))??"";X+=`<tr><td colspan="${N.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${F&&W?` ${F}–${W}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${T}</tr></thead>
          <tbody>${X}</tbody>
        </table>
      </div>`},pe=()=>{var T,H,X,_;const ee=O==="week";if(q.innerHTML=`
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${ee?"text-gray-500":"bg-white shadow text-teal-600"}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${ee?"bg-white shadow text-teal-600":"text-gray-500"}">ทั้งสัปดาห์</button>
        </div>
        ${ee?"":`
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${m[A]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>`}
      </div>
      ${ee?ue():z(A)}
      ${d.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(T=q.querySelector("#tt-btn-day"))==null||T.addEventListener("click",()=>{O="day",pe()}),(H=q.querySelector("#tt-btn-week"))==null||H.addEventListener("click",()=>{O="week",pe()}),(X=q.querySelector("#tt-prev"))==null||X.addEventListener("click",()=>{const t=N.indexOf(A);A=N[(t-1+N.length)%N.length],pe()}),(_=q.querySelector("#tt-next"))==null||_.addEventListener("click",()=>{const t=N.indexOf(A);A=N[(t+1)%N.length],pe()}),!ee&&q.querySelector("#tt-day-cd")){const l=u.find(M=>{if(!K[`${A}-${M.period_no}`]||!M.end_time)return!1;const Z=new Date,se=Z.getHours()*3600+Z.getMinutes()*60+Z.getSeconds(),[ce,F]=M.end_time.split(":").map(Number),[W,v]=(M.start_time??"0:0").split(":").map(Number);return se>=W*3600+v*60&&se<ce*3600+F*60});if(l){const[M,B]=l.end_time.split(":").map(Number),Z=M*3600+B*60,se=setInterval(()=>{const ce=q.querySelector("#tt-day-cd");if(!ce){clearInterval(se);return}const F=new Date,W=Math.max(0,Z-F.getHours()*3600-F.getMinutes()*60-F.getSeconds()),v=Math.floor(W/3600),J=Math.floor(W%3600/60),ge=W%60;ce.textContent=`${String(v).padStart(2,"0")}:${String(J).padStart(2,"0")}:${String(ge).padStart(2,"0")}`,W===0&&clearInterval(se)},1e3)}}};pe()};(ae=document.getElementById("student-overview-term-switcher"))==null||ae.addEventListener("change",a=>{var u,q;const d=a.target.value;try{localStorage.setItem(`pp5_student_score_term_${e==null?void 0:e.id}`,d)}catch{}d===D?(u=window._stuNav)==null||u.call(window,"overview"):(q=window._stuNav)==null||q.call(window,"scores")}),window._stuOpenTimetablePopup=le,(g=document.getElementById("btn-stu-timetable"))==null||g.addEventListener("click",le),window._stuStartQuiz=async a=>{try{const d=await At(a,e.id).catch(()=>null);if(d&&d.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${d.id}`;return}const u=await Pt(a);window.location.href=`quiz-exam.html?attempt=${u.id}`}catch(d){Y("เข้าสอบไม่สำเร็จ: "+_e(d),"error")}}}async function ea(e,s="life",n=null){var me;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[o,i]=await Promise.all([Oe().catch(()=>({})),Et().catch(()=>[])]);js(o);const c=Number(o.academicYear??o.academic_year),x=Number(o.semester),j=Array.isArray(i)&&i.length?i:[{academic_year:c,semester:x,start_date:o.semester_start,end_date:o.semester_end,is_current:!0}],k=w=>`${Number(w.academic_year)}:${Number(w.semester)}`,P=`${c}:${x}`,p=n?`${Number(n.academicYear)}:${Number(n.semester)}`:null,D=localStorage.getItem(`pp5_student_score_term_${e.id}`),h=[p,D,P].find(w=>w&&j.some(U=>k(U)===w))??P,r=j.find(w=>k(w)===h)??j[0],f=Number(r.academic_year),E=Number(r.semester),L={...o,semester_start:r.start_date??o.semester_start,semester_end:r.end_date??o.semester_end},[b,$,C,S]=await Promise.all([xs(e.id,f,E).catch(w=>({columns:[],scores:[],error:w})),bs(e.id,f,E).catch(w=>({columns:[],scores:[],error:w})),gs(e.id,f,E).catch(w=>Object.assign([],{error:w})),Mt(e.id,f,E).catch(w=>({samai:[],sasana:[],error:w}))]),Q=_t(b.columns,b.scores),oe=_t($.columns,$.scores),de=oe.reduce((w,U)=>w+(parseFloat(U.score)||0),0),xe=oe.reduce((w,U)=>w+(parseFloat(U.max_score)||0),0),be=xe>0?Math.round(de/xe*1e3)/10:0,ye=de>0?Cs(be):null,ve=Object.fromEntries((C??[]).map(w=>[w.check_date,w.status])),$e=Gt(L.semester_start,C??[]),Se=$e.flatMap(w=>w.days),Ee=Se.reduce((w,U)=>{var te;return w+(((te=Ge[ve[U.ds]])==null?void 0:te.score)??0)},0),he=Se.length*2,Le=he?Math.max(0,Math.round(Ee/he*100)/10):0,ke=[...S.samai??[],...S.sasana??[]],y=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-3">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🎓 ผลการเรียนรายวิชา</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">ข้อมูลตามภาคเรียนที่เลือก</p>
        </div>
        <span class="text-[11px] text-gray-400">${ke.length} วิชา</span>
      </div>
      ${ke.length?`<div class="divide-y divide-gray-50">
        ${ke.map(w=>`
          <button type="button" class="student-score-course w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-gray-50 transition" data-class-id="${w.classId}" data-term-year="${f}" data-term-semester="${E}">
            <div class="min-w-0">
              <p class="text-[10px] text-gray-400 font-mono truncate">${V(w.subjectCode??"")}</p>
              <p class="text-sm font-semibold text-gray-700 truncate">${V(w.subjectName??"—")}</p>
              <p class="text-[11px] text-gray-400">${V(w.teacherName??"—")} · ${w.score!=null&&w.maxScore!=null?`${w.score}/${w.maxScore}`:`รอคะแนน ${w.scoredCount??0}/${w.totalCols??0}`}</p>
            </div>
            <span class="text-lg font-extrabold ${w.grade==null?"text-gray-300":"text-indigo-600"}">${w.grade==null?"—":Number(w.grade).toFixed(1)}</span>
          </button>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีผลการเรียนในภาคเรียนนี้</div>'}
    </section>`,R=(w,U,te,ae)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${U} ${w}</h3>
        <span class="text-[11px] text-gray-400">${te.length} หัวข้อ</span>
      </div>
      ${te.length?`<div class="divide-y divide-gray-50">
        ${te.map(g=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${g.name}</p>
              <p class="text-[11px] text-gray-400">${g.sheet_col?`คอลัมน์ ${g.sheet_col} · `:""}เต็ม ${g.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${ae}">${g.score??"—"}</p>
              <p class="text-[10px] text-gray-400">/ ${g.max_score??"—"}</p>
            </div>
          </div>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลคะแนน</div>'}
    </section>`,G=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">20 สัปดาห์ · สัปดาห์ละ 5 วัน</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-amber-600">${Le}</p>
          <p class="text-[10px] text-gray-400">/ 10</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[520px] text-xs">
          <thead>
            <tr class="bg-gray-50 text-gray-500">
              <th class="px-2 py-2 text-left font-semibold">สัปดาห์</th>
              ${["อา","จ","อ","พ","พฤ"].map(w=>`<th class="px-2 py-2 text-center font-semibold">${w}</th>`).join("")}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${$e.map(w=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${w.n}</td>
              ${w.days.map(U=>{const te=ve[U.ds],ae=Ge[te];return`<td class="px-1 py-1 text-center">
                  <span title="${(ae==null?void 0:ae.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(ae==null?void 0:ae.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(ae==null?void 0:ae.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(Ge).map(w=>`<span><b class="${w.cls.split(" ").find(U=>U.startsWith("text-"))??""}">${w.label}</b> ${w.title}</span>`).join("")}
      </div>
    </section>
  `,re={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[s]??"คะแนนทักษะชีวิต",le={life:R("คะแนนทักษะชีวิต","🌱",Q,"text-emerald-600"),prayer:G,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${ye?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${ye.cls}">${ye.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${de?`${be} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${de||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${xe||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${de?be:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${R("คะแนนอ่านคิดวิเคราะห์ฯ","📖",oe,"text-sky-600")}
    `}[s]??R("คะแนนทักษะชีวิต","🌱",Q,"text-emerald-600");ie(`
    <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
      <div>
        <h2 class="font-bold text-gray-800">📊 คะแนนของฉัน</h2>
        <p class="text-xs text-gray-400 mt-1">ผลการเรียนและคะแนนประกอบรายภาคเรียน</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700">
        <span>ภาคเรียน</span>
        <select id="student-score-term" class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700">
          ${j.slice().sort((w,U)=>k(w)===P?-1:k(U)===P?1:k(U).localeCompare(k(w),void 0,{numeric:!0})).map(w=>`<option value="${V(k(w))}" ${k(w)===h?"selected":""}>ภาค ${V(w.semester)}/${V(w.academic_year)}${k(w)===P?" (ปัจจุบัน)":" (ย้อนหลัง)"}</option>`).join("")}
        </select>
      </label>
    </div>
    <p class="text-xs text-gray-400 mb-2">ข้อมูลภาค ${E||"—"} / ${f||"—"} · ${h===P?"ภาคเรียนปัจจุบัน":"ข้อมูลย้อนหลัง"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${re}</p>
    ${y}
    ${le}
  `),(me=document.getElementById("student-score-term"))==null||me.addEventListener("change",w=>{const[U,te]=String(w.target.value).split(":").map(Number);localStorage.setItem(`pp5_student_score_term_${e.id}`,`${U}:${te}`),ea(e,s,{academicYear:U,semester:te})}),document.querySelectorAll(".student-score-course").forEach(w=>{w.addEventListener("click",()=>{var U;window._stuPendingClassTerm={academicYear:Number(w.dataset.termYear),semester:Number(w.dataset.termSemester)},(U=window._stuOpenClass)==null||U.call(window,Number(w.dataset.classId))})})}async function ot(e){var L;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,n,o]=await Promise.all([Je(e.id).catch(()=>[]),Es().catch(()=>({})),fs(e.id).catch(()=>[])]),i=Object.fromEntries(o.filter(b=>b.status==="pending").map(b=>[b.class_id,b])),c=["อา","จ","อ","พ","พฤ","ศ","ส"],x=s.length?await ys(s.map(b=>b.id)).catch(()=>({})):{},j=b=>{const $=x[b]??[];if(!$.length)return"";const C={};return $.forEach(S=>{const Q=S.day_of_week;C[Q]||(C[Q]=[]);const oe=S.span_periods??1;for(let de=0;de<oe;de++)C[Q].push((S.period_no??0)+de)}),Object.entries(C).sort(([S],[Q])=>Number(S)-Number(Q)).map(([S,Q])=>{const oe=[...new Set(Q)].sort((xe,be)=>xe-be),de=oe.length===1?`คาบ ${oe[0]}`:`คาบ ${oe[0]}–${oe[oe.length-1]}`;return`${c[Number(S)]??S} ${de}`}).join(" · ")};if(!s.length){ie(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const k=b=>{var S,Q,oe;if(b.subject_group_override)return b.subject_group_override==="sasana";const $=((S=b.master_subjects)==null?void 0:S.subject_group)??"";return(((oe=(Q=b.master_subjects)==null?void 0:Q.teachers)==null?void 0:oe.category)??"")==="ศาสนา"||$==="AGM"||$==="AGMVOC"},P=s.filter(b=>!k(b)),p=s.filter(b=>k(b)),h=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid",r=localStorage.getItem("studentSubjectsGroup")==="sasana"?"sasana":"samai";window._stuSetSubjectView=b=>{localStorage.setItem("studentSubjectsView",b==="grid"?"grid":"list"),ot(e)},window._stuSetSubjectGroup=b=>{localStorage.setItem("studentSubjectsGroup",b==="sasana"?"sasana":"samai"),ot(e)};const f=b=>{const $=b.master_subjects,C=$==null?void 0:$.teachers,S=Ws(b,n);return h?`<button onclick="window._stuOpenClass(${b.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${S.bg}; border-color:${S.border}; border-left-color:${S.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${S.badgeBg}; color:${S.text};">${S.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${S.text};">${($==null?void 0:$.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${($==null?void 0:$.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${Me(b.class_name)}</p>
            ${j(b.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${j(b.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${C!=null&&C.image_url?`<img src="${C.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${((C==null?void 0:C.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${(C==null?void 0:C.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${b.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${S.bg}; border-color:${S.border}; border-left-color:${S.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${S.text};">${($==null?void 0:$.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${($==null?void 0:$.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${S.text};">${S.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${S.badgeBg}; color:${S.text};">${S.short}</span>
          <span class="text-[10px] text-gray-400">${($==null?void 0:$.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${j(b.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${j(b.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${C!=null&&C.image_url?`<img src="${C.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${((C==null?void 0:C.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${(C==null?void 0:C.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${Me(b.class_name)}</span>
      </div>
    </div>`},E=(b,$,C)=>C.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${$}</span>
          <h3 class="font-bold text-gray-700 text-sm">${b}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${C.length} วิชา</span>
        </div>
        <div class="${h?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${C.map(f).join("")}
        </div>
      </div>`:"";ie(`
    <div class="flex items-center justify-between gap-3 mb-3">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${s.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${h?"text-gray-400":"bg-white text-emerald-600 shadow-sm"}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${h?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}">กริด</button>
      </div>
    </div>
    <div class="flex gap-2 mb-2">
      <button type="button" onclick="window._stuSetSubjectGroup('samai')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">📖 สามัญ (${P.length})</button>
      <button type="button" onclick="window._stuSetSubjectGroup('sasana')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">🕌 ศาสนา (${p.length})</button>
    </div>
    <div class="flex justify-end mb-4">
      <button id="btn-manage-subject-groups" type="button" class="text-xs text-indigo-600 font-semibold hover:text-indigo-800">🔧 จัดการกลุ่มรายวิชา</button>
    </div>
    ${r==="samai"?E("วิชาสามัญ","📖",P):E("วิชาศาสนา","🕌",p)}
  `),(L=document.getElementById("btn-manage-subject-groups"))==null||L.addEventListener("click",()=>{ta(e,s,i,k)})}function ta(e,s,n,o){var P;(P=document.getElementById("subject-group-mgr"))==null||P.remove();const i=document.createElement("div");i.id="subject-group-mgr",i.className="fixed inset-0 z-[400] bg-white flex flex-col";const c=(p,D)=>{const h=p.master_subjects,r=n[p.id];return`
    <div class="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3">
      <p class="font-semibold text-sm text-gray-800 truncate min-w-0">${(h==null?void 0:h.subject_name)??"—"}</p>
      ${r?'<span class="text-[11px] font-semibold text-amber-500 whitespace-nowrap flex-shrink-0">⏳ รอตรวจสอบ</span>':D?`<button class="sgm-move-btn text-[11px] font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-1.5 hover:bg-indigo-50 whitespace-nowrap flex-shrink-0"
              data-class-id="${p.id}" data-requested="samai">ย้ายไป 📖 สามัญ</button>`:""}
    </div>`};let x="samai";const j=()=>{const p=s.filter(h=>(o(h)?"sasana":"samai")===x),D=i.querySelector("#sgm-list");D.innerHTML=p.length?p.map(h=>c(h,x==="sasana")).join(""):'<p class="text-center text-gray-400 text-sm py-8">ไม่มีวิชาในกลุ่มนี้</p>',D.querySelectorAll(".sgm-move-btn").forEach(h=>{h.addEventListener("click",async()=>{var E,L;const r=Number(h.dataset.classId),f=s.find(b=>b.id===r);if(confirm(`ขอย้ายวิชา "${((E=f==null?void 0:f.master_subjects)==null?void 0:E.subject_name)??""}" ไปกลุ่ม 📖 สามัญ?
(ต้องรอแอดมินตรวจสอบและอนุมัติก่อนจึงจะมีผลจริง)`)){h.disabled=!0,h.textContent="กำลังส่ง...";try{await ks(r,"samai"),Kt({title:"🔀 มีคำขอย้ายกลุ่มวิชาใหม่",body:`นักเรียนขอย้ายวิชา "${((L=f==null?void 0:f.master_subjects)==null?void 0:L.subject_name)??""}" ไปกลุ่ม 📖 สามัญ — รอตรวจสอบ`,url:"dashboard.html"}).catch(()=>{}),Y("ส่งคำขอแล้ว รอแอดมินตรวจสอบ","success"),i.remove(),ot(e)}catch(b){Y("ส่งคำขอไม่สำเร็จ: "+_e(b),"error"),h.disabled=!1,h.textContent="ย้ายไป 📖 สามัญ"}}})})};i.innerHTML=`
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
    <div id="sgm-list" class="flex-1 overflow-y-auto px-4 py-3 space-y-2"></div>`,document.body.appendChild(i),i.querySelector("#sgm-back").addEventListener("click",()=>i.remove());const k=()=>{i.querySelector("#sgm-tab-samai").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${x==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,i.querySelector("#sgm-tab-samai").textContent=`📖 สามัญ (${s.filter(p=>!o(p)).length})`,i.querySelector("#sgm-tab-sasana").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${x==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,i.querySelector("#sgm-tab-sasana").textContent=`🕌 ศาสนา (${s.filter(p=>o(p)).length})`};i.querySelector("#sgm-tab-samai").addEventListener("click",()=>{x="samai",k(),j()}),i.querySelector("#sgm-tab-sasana").addEventListener("click",()=>{x="sasana",k(),j()}),k(),j()}async function sa(e,s="samai"){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const n=await qt(e.id).catch(()=>[]),o=r=>{var L,b,$,C,S;const f=((b=(L=r._class)==null?void 0:L.master_subjects)==null?void 0:b.subject_group)??"";return(((S=(C=($=r._class)==null?void 0:$.master_subjects)==null?void 0:C.teachers)==null?void 0:S.category)??"")==="ศาสนา"||f==="AGM"||f==="AGMVOC"},i=n.filter(r=>!o(r)),c=n.filter(r=>o(r)),x=r=>r?new Date(r).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",j=(r,f)=>r.due_at?new Date(f).getTime()>new Date(r.due_at).getTime():!1,k=r=>r.due_at?Date.now()>new Date(r.due_at).getTime():!1,P=r=>{var b,$;const f=r.mySubmission,E=f?j(r,f.submitted_at):!1,L=!f&&k(r);return`<div onclick="window._stuOpenClass(${r.class_id})"
      class="bg-white rounded-2xl border ${f?"border-emerald-100":L?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${V((($=(b=r._class)==null?void 0:b.master_subjects)==null?void 0:$.subject_name)??"")}</p>
        ${f?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${E?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${E?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${L?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${L?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${V(r.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${x(r.due_at)}</p>
      ${Rt(f)}
      ${f!=null&&f.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${V(f.teacher_feedback)}</p>`:""}
    </div>`},p=r=>{if(!r.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const f=r.filter(Fe).sort((L,b)=>(L.due_at?new Date(L.due_at).getTime():1/0)-(b.due_at?new Date(b.due_at).getTime():1/0)),E=r.filter(L=>L.mySubmission&&L.mySubmission.status!=="rejected").sort((L,b)=>new Date(b.mySubmission.submitted_at).getTime()-new Date(L.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${f.length})</p>
        ${f.length?`<div class="space-y-2.5">${f.map(P).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${E.length})</p>
        ${E.length?`<div class="space-y-2.5">${E.map(P).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},D=i.filter(Fe).length,h=c.filter(Fe).length;ie(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${s==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${D?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${s==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${D}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${s==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${h?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${s==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${h}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${p(s==="sasana"?c:i)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(r=>{r.addEventListener("click",()=>sa(e,r.dataset.grp))})}async function aa(e,s,n="todo",o=null){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const c=(await Je(e.id,o==null?void 0:o.academicYear,o==null?void 0:o.semester).catch(()=>[])).find(t=>t.id===s);if(!c){ie('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:x}=await kt(async()=>{const{getClassAnnouncements:t}=await import("./api-BQaMiX9s.js");return{getClassAnnouncements:t}},__vite__mapDeps([0,1,2,3,4])).catch(()=>({})),[{columns:j,scores:k},P,p,D,h,r,f]=await Promise.all([is(e.id,s).catch(()=>({columns:[],scores:[]})),cs(e.id,s).catch(()=>[]),dt(e.id).catch(()=>[]),x?x(s).catch(()=>[]):Promise.resolve([]),Dt(s,e.id).catch(()=>[]),ms(s,e.id).catch(()=>[]),us(s).catch(()=>[])]),E=await Nt(h.map(t=>t.id),e.id).catch(()=>new Set),L=window._pp5SystemCfg??await Oe().catch(()=>({})),b=Ls(L.semester_start),$=f.find(t=>b>=t.week_start&&b<=t.week_end),C=p.filter(t=>{var l;return((l=t.classes)==null?void 0:l.id)===s}),S=Object.fromEntries(k.map(t=>[t.assignment_id,t])),Q=c.master_subjects,oe=Q==null?void 0:Q.teachers,de=await Yt(s).catch(()=>(Y("โหลดค่าปัดเลขร่วมไม่สำเร็จ","error"),null)),xe=t=>es(j,t,l=>{var M,B;return((M=S[l])==null?void 0:M.final_score)??((B=S[l])==null?void 0:B.original_score)}),be=j.filter(Xe),ye=j.filter(t=>t.column_type==="derived"),ve=j.filter(t=>!xt(t)&&!Xe(t)&&!["override","derived"].includes(t.column_type)),$e=j.filter(t=>xt(t)&&!Xe(t)&&!["override","derived"].includes(t.column_type)),Se=ve.reduce((t,l)=>t+(l.max_score||0),0),Ee=$e.reduce((t,l)=>t+(l.max_score||0),0),he=ve.reduce((t,l)=>t+xe(l),0),Le=$e.reduce((t,l)=>t+xe(l),0),ke=be.reduce((t,l)=>t+xe(l),0),y=ye.reduce((t,l)=>t+xe(l),0),R=ye.reduce((t,l)=>t+Number(l.max_score||0),0),G=he+Le+y,re=Xt(de,G),le=Se+Ee+R,me=le>0?re/le*100:0,w=j.filter(Zt),U=w.filter(t=>{const l=S[t.id];return t.column_type==="derived"||l&&(l.final_score!=null||l.original_score!=null)}),te=w.length>0&&U.length===w.length,ae=P.length,g=P.filter(t=>t.status==="present").length,a=ae>0?Math.round(g/ae*100):null,d=t=>t>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:t>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:t>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},u=t=>t>=80?4:t>=75?3.5:t>=70?3:t>=65?2.5:t>=60?2:t>=55?1.5:t>=50?1:0,q=te&&le>0?{...d(me),point:u(me)}:null,m=t=>{const l=S[t.id],B=t.column_type==="derived"||l&&(l.final_score!=null||l.original_score!=null)?xe(t):null,Z=B!=null&&t.max_score>0?Math.round(B/t.max_score*100):null,se=(l==null?void 0:l.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${t.assignment_name}
        ${se?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${B!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${B!=null?Ze(de,ts(t),B,t.column_type==="derived"?2:1):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${t.max_score!=null?"/"+t.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${B!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${t.max_score!=null?Z!=null?Z+"%":"—%":""}
      </td>
    </tr>`},I=(t,l,M,B,Z)=>{if(!t.length)return"";const se=M>0?Math.round(l/M*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${Z}</span>
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
            ${t.map(m).join("")}
            <tr class="${B}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${Ze(de,t===ve?"mid_subtotal":t===$e?"fin_subtotal":"bonus_subtotal",l)}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${M}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${se}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},N=Vs(c),ne=()=>`
    <div class="${N.bg} ${N.border} border border-l-4 ${N.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${N.text} text-sm leading-tight">${(Q==null?void 0:Q.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${(Q==null?void 0:Q.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(oe==null?void 0:oe.full_name)??"—"} · ${Me(c.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${le>0?Ze(de,"total",G):"—"}</p>
        <p class="text-[10px] text-gray-400">/${le} คะแนน</p>
        ${ke>0?`<p class="text-[10px] text-amber-500 font-medium">คะแนนพิเศษ ${ke.toFixed(1).replace(/\.0$/,"")} (แยก ไม่บวกยอดรวม)</p>`:""}
        ${q?`<div class="mt-1 flex items-center justify-end gap-1.5"><span class="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-extrabold">เกรด ${q.point.toFixed(1)}</span><span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${q.cls}">${q.label}</span></div>`:le>0?`<span class="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">ยังไม่สรุปเกรด (${U.length}/${w.length} หัวข้อ)</span>`:""}
      </div>
    </div>`,O=t=>{const l=He[t.status]??He.pending,M=t.class_score_columns,B=at(t.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${t.request_type}</p>
          ${M?`<p class="text-[11px] text-gray-400 mt-0.5">${M.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${l.cls}">${l.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${Re(t.requested_date)}${t.requested_period_no?` · คาบ ${t.requested_period_no}`:""}${B?` · ${B}`:""}</p>
        ${t.reason?`<p>💬 ${t.reason}</p>`:""}
        ${t.teacher_comment?`<p class="${t.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${t.teacher_comment}</p>`:""}
      </div>
      ${t.status==="pending"?`
        <button onclick="window._stuCancelRequest(${t.id}, ${s})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},A=()=>{const t=[],l=r.filter(Fe);l.length>0&&t.push(`
        <button onclick="window._stuOpenClassTab(${s},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${l.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${l.length}</span>
        </button>`);const M=C.filter(v=>v.status==="pending");M.length>0&&M.forEach(v=>{const J=v.class_score_columns,ge=at(v.requested_date);t.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${v.request_type} — รอครูอนุมัติ</p>
              ${J?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${J.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${Re(v.requested_date)}${v.requested_period_no?` · คาบ ${v.requested_period_no}`:""}${ge?` · ${ge}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const B=C.filter(v=>v.status==="approved"&&v.exam_attended==null);B.length>0&&B.forEach(v=>{const J=v.class_score_columns,ge=at(v.requested_date);t.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${v.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${J?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${J.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${Re(v.requested_date)}${v.requested_period_no?` · คาบ ${v.requested_period_no}`:""}${ge?` · ${ge}`:""}</p>
              ${v.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${v.teacher_comment}</p>`:""}
            </div>
          </div>`)}),h.forEach(v=>{const J=v.attempts.filter(fe=>fe.status==="submitted"||fe.status==="terminated_violation").reduce((fe,Ae)=>Math.max(fe,Ae.score_pct??0),null),ge=v.attempts.length&&v.attempts[v.attempts.length-1].status==="terminated_violation"?v.attempts[v.attempts.length-1]:null,Te=v.attempts.find(fe=>fe.status==="in_progress"),Ie=v.attempts.filter(fe=>fe.status==="submitted"||fe.status==="terminated_violation").length;let we="",je="";v.status==="announced"?we='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':v.status==="started"&&E.has(v.id)?we='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':v.status==="started"&&ge?we='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':v.status==="started"&&Te?(we='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">กำลังทำอยู่</span>',je=`<button onclick="window._stuStartQuiz('${v.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):v.status==="started"&&Ie>=v.max_attempts?we='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':v.status==="started"?(we='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">เปิดสอบอยู่</span>',je=`<button onclick="window._stuStartQuiz('${v.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):v.status==="closed"&&(we='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),t.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${V(v.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${v.num_questions} ข้อ${v.time_limit_minutes?` · ${v.time_limit_minutes} นาที`:""} · ทำได้ ${Ie}/${v.max_attempts} ครั้ง</p>
            ${J!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${J.toFixed(1)}%</p>`:""}
            <div class="mt-1">${we}</div>
            ${je}
          </div>
        </div>`)});const Z=[c.day1_date,c.day2_date,c.day3_date,c.day4_date,c.day5_date,c.day6_date].filter(Boolean),se=new Date;se.setHours(0,0,0,0);const ce=Z.map(v=>{const J=new Date(v);return J.setHours(0,0,0,0),J}).filter(v=>v>=se).sort((v,J)=>v-J);if(ce.length>0){const v=ce[0],J=Math.round((v-se)/864e5),ge=J===0?"🔴 วันนี้!":J===1?"🟡 พรุ่งนี้":`⏰ อีก ${J} วัน`,Te=Ue[v.getDay()]??"";t.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${Te}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${v.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${Re(Bt(v))}</p>
          </div>
          <span class="text-xs font-bold ${J===0?"text-red-500":J===1?"text-amber-500":"text-emerald-600"}">${ge}</span>
        </div>`)}const F={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},W=v=>{if(!v)return"";const J=new Date(v),Te=J-new Date,Ie=Math.floor(Te/6e4),we=J.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(Te<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${we}</span>`;if(Ie<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${Ie} นาที · ${we}</span>`;const je=Math.floor(Ie/60);return je<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${je} ชม. ${Ie%60} น. · ${we}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(je/24)} วัน · ${we}</span>`};return D.length>0&&[...D].sort((v,J)=>(J.priority||0)-(v.priority||0)).forEach(v=>{const J=F[v.ann_type]??F.general,ge=v.ann_type==="deadline"&&v.deadline_at?W(v.deadline_at):"";t.push(`
          <div class="rounded-2xl border ${J.border} ${J.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${J.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${v.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${J.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${v.title??""}</p>
                ${v.body?`<p class="text-xs text-gray-500 mt-1">${v.body}</p>`:""}
                ${ge?`<div class="mt-2">${ge}</div>`:""}
                ${v.file_url?`<a href="${v.file_url}" target="_blank" rel="noopener"
                  class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">
                  📎 เปิดไฟล์แนบ →</a>`:""}
              </div>
            </div>
          </div>`)}),`
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-bold text-gray-800">✅ ภารกิจ / สิ่งที่ต้องทำ</h2>
      </div>
      ${t.length?`<div class="space-y-3">${t.join("")}</div>`:`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
          <p class="text-4xl mb-2">🎉</p>
          <p class="text-sm font-medium text-gray-500">ไม่มีรายการที่ต้องทำ</p>
          <p class="text-xs mt-1">ถ้าครูประกาศกำหนดสอบหรือแจ้งงานในรายวิชา ระบบจะแสดงพร้อมนับถอยหลังที่นี่</p>
        </div>`}`},K=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${le>0?`<span class="text-xs text-gray-400">${me.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${j.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${I(ve,he,Se,"bg-blue-50","📘 กลางภาค")}
            ${I($e,Le,Ee,"bg-purple-50","📙 ปลายภาค")}
            ${I(ye,y,R,"bg-indigo-50","🔢 คะแนนสูตร")}
            ${be.length?I(be,be.reduce((t,l)=>t+xe(l),0),0,"bg-amber-50","⭐ คะแนนพิเศษ (ไม่รวมเกรด)"):""}
          </div>`}
    </div>
    ${ae>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${a!==null?`<span class="text-xs text-gray-400">${g}/${ae} คาบ · ${a}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${P.map(t=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${t.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${Os[t.status]??"bg-gray-50 text-gray-400"}">
            ${Hs[t.status]??"?"}
          </span>
        </div>`).join("")}
      </div>
    </div>`:""}`,z=()=>`
    <button onclick="window._stuOpenRequest(${s})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${C.length?`<div class="space-y-3">${C.map(O).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,ue=t=>t?new Date(t).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",pe=(t,l)=>t.due_at?new Date(l).getTime()>new Date(t.due_at).getTime():!1,ee=t=>t.due_at?Date.now()>new Date(t.due_at).getTime():!1,T=t=>{var se,ce;const l=t.mySubmission,M=(l==null?void 0:l.status)==="rejected",B=l?pe(t,l.submitted_at):!1,Z=!l&&ee(t);return`<div class="bg-white rounded-2xl border ${M?"border-red-200":l?"border-emerald-100":Z?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${V(t.title)}</p>
        ${M?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':l?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${B?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${B?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${Z?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${Z?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${t.description?`<p class="text-xs text-gray-500 mb-1.5">${V(t.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${ue(t.due_at)}</p>
      ${(se=t.attachment_urls)!=null&&se.length?`<div class="flex flex-wrap gap-1.5 mb-2">${t.attachment_urls.map(F=>`<a href="${V(F.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${V(F.name)}</a>`).join("")}</div>`:""}
      ${(ce=l==null?void 0:l.file_urls)!=null&&ce.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(l.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${l.file_urls.map(F=>`<a href="${V(F.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${V(F.name)}</a>`).join("")}</div></div>`:""}
      ${Rt(l)}
      ${l!=null&&l.teacher_feedback?M?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${V(l.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${V(l.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${M?"bg-red-600 text-white hover:bg-red-700":l?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${t.id}">${M?"📤 ส่งแก้ไขใหม่":l?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},X=n==="scores"?K():n==="requests"?z():n==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${r.length?`<div class="space-y-3">${r.map(T).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:A();ie(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${ne()}
    ${$?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${b}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${V($.topic)}</p>
      ${$.description?`<p class="text-xs text-indigo-400 mt-0.5">${V($.description)}</p>`:""}
    </div>`:""}
    ${X}
  `),window._stuCancelRequest=async(t,l=s)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await Ct(t),Y("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(l,"requests")}catch(M){Y("ยกเลิกไม่สำเร็จ: "+_e(M),"error")}},window._stuStartQuiz=async t=>{try{const l=await At(t,e.id).catch(()=>null);if(l&&l.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${l.id}`;return}const M=await Pt(t);window.location.href=`quiz-exam.html?attempt=${M.id}`}catch(l){Y("เข้าสอบไม่สำเร็จ: "+_e(l),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(t=>{t.addEventListener("click",()=>{const l=r.find(M=>M.id===parseInt(t.dataset.aid,10));l&&_(l)})});function _(t){var M;(M=document.getElementById("stu-submit-modal"))==null||M.remove();const l=document.createElement("div");l.id="stu-submit-modal",l.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",l.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📤 ส่งงาน — ${V(t.title)}</h3>
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
      </div>`,document.body.appendChild(l),l.addEventListener("click",B=>{B.target===l&&l.remove()}),l.querySelector("#ss-close").addEventListener("click",()=>l.remove()),l.querySelector("#ss-submit").addEventListener("click",async()=>{var se;const B=[...l.querySelector("#ss-files").files??[]];if(!B.length&&!t.mySubmission){Y("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const Z=l.querySelector("#ss-submit");Z.disabled=!0,Z.textContent="กำลังส่ง...";try{const ce=[];for(const W of B)ce.push(await qs(W,`class-${s}/student-${e.id}`));const F=ce.length?ce:((se=t.mySubmission)==null?void 0:se.file_urls)??[];await ps(t.id,e.id,F,l.querySelector("#ss-note").value.trim()||null),Y("ส่งงานสำเร็จ ✅","success"),l.remove(),aa(e,s,"assignments")}catch(ce){Y("ส่งงานไม่สำเร็จ: "+_e(ce),"error"),Z.disabled=!1,Z.textContent="ส่งงาน"}})}}async function ra(e){ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await dt(e.id).catch(()=>[]),n=`<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`;if(!s.length){ie(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${n}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`);return}ie(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${s.length} รายการ)</span></h2>
    ${n}
    <div class="space-y-3">
      ${s.map(o=>{var j,k;const i=He[o.status]??He.pending,c=o.classes,x=o.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((j=c==null?void 0:c.master_subjects)==null?void 0:j.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((k=c==null?void 0:c.master_subjects)==null?void 0:k.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${i.cls}">${i.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${o.request_type}</span></p>
            ${x?`<p>📝 หัวข้อ: <span class="text-gray-700">${x.assignment_name}</span></p>`:""}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${Re(o.requested_date)}</span>
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
  `),window._stuCancelRequest=async o=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await Ct(o),Y("ยกเลิกคำร้องแล้ว","success"),ra(e)}catch(i){Y("ยกเลิกไม่สำเร็จ: "+_e(i),"error")}}}async function Ma(e,s){var he,Le,ke;ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[n,o]=await Promise.all([Je(e.id).catch(()=>[]),rs(e.id).catch(()=>0)]),i=n.find(y=>y.id===s);if(!i){ie('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(o>=2){ie(`
      <button onclick="window._stuOpenClassTab(${s},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const c=o===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",x=i.master_subjects,j=x==null?void 0:x.teacher_id,k=x==null?void 0:x.teachers,P=j?(k==null?void 0:k.full_name)??"ครูผู้สอน":"ครูผู้สอน",p=String(P||"ค").trim().charAt(0).toUpperCase()||"ค",D=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||i.class_name||"—";let h=null;const[r,f,E]=await Promise.all([ns(s).catch(()=>[]),j?os(j,s).catch(y=>(h=y,[])):Promise.resolve([]),ls().catch(()=>[])]),L=r.filter(y=>y.column_type!=="override"),b={};for(const y of f){b[`${y.day_of_week}_${y.period_no}`]=y;const R=y.span_periods??1;for(let G=1;G<R;G++)b[`${y.day_of_week}_${y.period_no+G}`]={...y,_secondary:!0}}const $=f.length>0;if(!$){ie(`
      <button onclick="window._stuOpenClassTab(${s}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(x==null?void 0:x.subject_name)??""} · ${Me(i.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${j?h?`ระบบอ่านตารางครูไม่สำเร็จ: ${h.message??h}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${j?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const C="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",S=C+" cursor-pointer";let Q=null,oe=0;const de=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],xe=(y,R,G=null)=>{const re=String(y??"").trim(),le=String(R??"").trim();return re&&le?`${re} — ${le}`:re||(G!=null?String(G):"")},be=y=>{const R=de[y%de.length];return`${R.bg} ${R.text}`};let ye={};try{ye=JSON.parse(localStorage.getItem(`scheduleColors_${j??"x"}`)??"{}")}catch{}const ve={};let $e=0;f.forEach(y=>{const R=xe(y.subject_name,y.class_name,y.subject_id);if(!R||ve[R]!=null)return;const G=ye[R]??ye[y.subject_id]??ye[y.subject_name],re=Number(G);ve[R]=Number.isFinite(re)?re:$e++});const Se=(y=0)=>{const R=[0,1,2,3,4,5],G={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},re={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},le=rt(y),me=new Date;me.setHours(0,0,0,0);const w=R.map(te=>{const ae=le[te];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${re[te]}">
        <p class="text-sm font-bold text-gray-700">${G[te]}</p>
        <p class="text-xs text-gray-400">${ae.getDate()}/${ae.getMonth()+1}</p>
      </th>`}).join(""),U=E.map(te=>{var d,u;const ae=((d=te.start_time)==null?void 0:d.slice(0,5))??"",g=((u=te.end_time)==null?void 0:u.slice(0,5))??"",a=R.map(q=>{const m=`${q}_${te.period_no}`,I=b[m];if(I!=null&&I._secondary)return"";const ne=le[q]<me;if(!I)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${te.period_no}" data-day="${q}" data-week-offset="${y}"
              ${ne?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${ne?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${ne?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${ne?"ล็อก":"＋"}</span>
            </button>
          </td>`;const O=I.span_periods??1,A=xe(I.subject_name,I.class_name,I.subject_id),K=ve[A]??0,z=be(K);return`<td class="border border-gray-100 p-0" style="height:1px" ${O>1?`rowspan="${O}"`:""}>
          <div class="w-full h-full ${z} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${I.subject_name??"ไม่ว่าง"}</p>
            ${I.class_name?`<p class="text-[10px] opacity-80 leading-tight">${Me(I.class_name)}</p>`:""}
            ${I.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${I.teacher_name}</p>`:""}
            ${O>1?`<p class="text-[9px] opacity-40 mt-0.5">${O} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${te.period_no}</p>
          <p class="text-[10px] text-gray-400">${ae}–${g}</p>
        </td>
        ${a}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${w}
          </tr>
        </thead>
        <tbody>${U}</tbody>
      </table>
    </div>`},Ee=y=>{const R=rt(y);return`${y===0?"สัปดาห์นี้":y===1?"สัปดาห์หน้า":`อีก ${y} สัปดาห์`} (${Ve(R[0])} - ${Ve(R[5])})`};if(ie(`
    <button onclick="window._stuOpenClass(${s})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(x==null?void 0:x.subject_name)??""} · ${Me(i.class_name)}</p>
      ${c}

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
          <select id="req-col" class="${S}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${L.map(y=>`<option value="${y.id}">${y.assignment_name} (${y.assignment_type} · เต็ม ${y.max_score})</option>`).join("")}
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
              <input type="date" id="req-date" class="${C}"
                min="${Bt(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${S}" required>
                <option value="">— เลือกคาบ —</option>
                ${E.map(y=>`<option value="${y.period_no}">คาบ ${y.period_no} (${y.start_time.slice(0,5)}–${y.end_time.slice(0,5)})</option>`).join("")}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${C} resize-none"
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
                ${k!=null&&k.image_url?`<img src="${k.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${p}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${P} · ${(x==null?void 0:x.subject_name)??""}</p>
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
              ${[0,1,2,3,4].map(y=>`<option value="${y}">${Ee(y)}</option>`).join("")}
            </select>
          </div>
          <div id="schedule-grid-wrap">${Se(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(y=>{y.addEventListener("change",()=>{var re;const R=document.getElementById("req-reason-wrap"),G=y.value==="สอบย้อนหลัง";R.classList.toggle("hidden",!G),(re=document.getElementById("req-reason"))==null||re.toggleAttribute("required",G)})}),$){const y=document.getElementById("teacher-schedule-modal");(he=document.getElementById("open-schedule-modal"))==null||he.addEventListener("click",()=>{y==null||y.classList.remove("hidden"),y==null||y.classList.add("flex")}),(Le=document.getElementById("close-schedule-modal"))==null||Le.addEventListener("click",()=>{var G;if(!Q){(G=window._stuOpenClassTab)==null||G.call(window,s,"requests");return}y==null||y.classList.add("hidden"),y==null||y.classList.remove("flex")}),y==null||y.addEventListener("click",G=>{G.target===y&&Q&&(y.classList.add("hidden"),y.classList.remove("flex"))});const R=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(G=>{G.addEventListener("click",()=>{var a,d;const re=parseInt(G.dataset.period),le=parseInt(G.dataset.day),me=parseInt(G.dataset.weekOffset??oe),U=rt(me)[le];Q={period_no:re,day_of_week:le,date:U,week_offset:me},document.getElementById("req-date").value=Be(U),document.getElementById("req-period-hidden").value=re;const te=document.getElementById("period-summary"),ae=document.getElementById("period-summary-text");te==null||te.classList.remove("hidden"),ae&&(ae.textContent=`คาบ ${re} วัน${Ue[le]??""} ${Ve(U)}`);const g=document.getElementById("schedule-picker-label");g&&(g.textContent=`เลือกคาบ ${re} วัน${Ue[le]??""} ${Ve(U)} แล้ว`),(a=document.getElementById("schedule-first-gate"))==null||a.classList.add("hidden"),(d=document.getElementById("req-form"))==null||d.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(u=>{u.classList.toggle("ring-2",u===G),u.classList.toggle("ring-emerald-500",u===G),u.classList.toggle("bg-emerald-200",u===G)}),y==null||y.classList.add("hidden"),y==null||y.classList.remove("flex")})})};R(),(ke=document.getElementById("schedule-week-select"))==null||ke.addEventListener("change",G=>{oe=parseInt(G.target.value||"0");const re=document.getElementById("schedule-grid-wrap");re&&(re.innerHTML=Se(oe)),R()}),setTimeout(()=>{y==null||y.classList.remove("hidden"),y==null||y.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async y=>{var U,te,ae,g,a;y.preventDefault();const R=document.getElementById("req-submit"),G=(U=document.querySelector('input[name="req_type"]:checked'))==null?void 0:U.value,re=document.getElementById("req-col").value,le=((te=document.getElementById("req-reason"))==null?void 0:te.value.trim())||null,me=(ae=document.getElementById("req-date"))==null?void 0:ae.value,w=$?(g=document.getElementById("req-period-hidden"))==null?void 0:g.value:(a=document.getElementById("req-period-sel"))==null?void 0:a.value;if(!G||!re||!me||!w){if(Y("กรุณากรอกข้อมูลให้ครบ","warning"),$&&!w){Y("กรุณาเลือกคาบว่างจากตารางครู","warning");const d=document.getElementById("teacher-schedule-modal");d==null||d.classList.remove("hidden"),d==null||d.classList.add("flex")}return}if(G==="สอบย้อนหลัง"&&!le){Y("กรุณาระบุเหตุผล","warning");return}R.disabled=!0,R.textContent="กำลังยื่น...";try{await ds({student_id:e.id,class_id:s,assignment_id:parseInt(re),request_type:G,requested_date:me,requested_period_no:parseInt(w),reason:G==="สอบย้อนหลัง"?le:null,status:"pending"}),Y("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(s,"requests")}catch(d){Y("ยื่นไม่สำเร็จ: "+_e(d),"error")}finally{R.disabled=!1,R.textContent="ยื่นคำร้อง"}})}async function Ta(e,s){var x,j,k,P;const n=()=>`
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

    ${n()}

    <button id="stu-logout-btn"
      class="w-full py-3.5 rounded-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold text-sm
             shadow-md shadow-red-200/60 transition flex items-center justify-center gap-2">
      🚪 ออกจากระบบ
    </button>

    <p class="text-center text-[10px] text-gray-300 mt-4 leading-relaxed">
      พัฒนาโดย <span class="text-gray-400 font-medium">KruHambalWaji</span><br/>
      ปพ.5 ออนไลน์ © 2026 v${Wt}
    </p>
  `),(x=document.getElementById("btn-stu-my-certificates-profile"))==null||x.addEventListener("click",()=>Ht(e)),(j=document.getElementById("btn-stu-contact-admin"))==null||j.addEventListener("click",()=>{var p;(p=window._openFeedbackWidget)==null||p.call(window)}),(k=document.getElementById("btn-stu-pw-reset"))==null||k.addEventListener("click",()=>{o()});function o(){var D;(D=document.getElementById("pw-choice-modal"))==null||D.remove();const p=document.createElement("div");p.id="pw-choice-modal",p.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",p.innerHTML=`
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
      </div>`,document.body.appendChild(p),p.addEventListener("click",h=>{h.target===p&&p.remove()}),p.querySelector("#pwc-cancel").addEventListener("click",()=>p.remove()),p.querySelector("#pwc-self").addEventListener("click",()=>{p.remove(),i()}),p.querySelector("#pwc-admin").addEventListener("click",()=>{var h;p.remove(),(h=window._openPasswordResetRequest)==null||h.call(window)})}function i(){var D;(D=document.getElementById("self-pw-modal"))==null||D.remove();const p=document.createElement("div");p.id="self-pw-modal",p.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",p.innerHTML=`
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
      </div>`,document.body.appendChild(p),p.addEventListener("click",h=>{h.target===p&&p.remove()}),p.querySelector("#self-pw-close").addEventListener("click",()=>p.remove()),p.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const h=p.querySelector("#btn-stu-save-pw"),r=p.querySelector("#stu-new-pw").value,f=p.querySelector("#stu-new-pw-confirm").value,E=p.querySelector("#stu-pw-msg"),L=(b,$)=>{E.className=`text-xs text-center py-2.5 rounded-xl ${$?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,E.textContent=b,E.classList.remove("hidden")};if(!r||r.length<6){L("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if(r!==f){L("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}h.disabled=!0,h.textContent="กำลังบันทึก...",E.classList.add("hidden");try{const{error:b}=await qe.auth.updateUser({password:r});if(b)throw b;L("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),p.querySelector("#stu-new-pw").value="",p.querySelector("#stu-new-pw-confirm").value=""}catch(b){L("ไม่สำเร็จ: "+_e(b),!0)}finally{h.disabled=!1,h.textContent="บันทึกรหัสผ่านใหม่"}})}(P=document.getElementById("stu-logout-btn"))==null||P.addEventListener("click",()=>{var D;(D=document.getElementById("stu-logout-confirm"))==null||D.remove();const p=document.createElement("div");p.id="stu-logout-confirm",p.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",p.innerHTML=`
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
      </div>`,document.body.appendChild(p),p.querySelector("#stu-logout-cancel").addEventListener("click",()=>p.remove()),p.addEventListener("click",h=>{h.target===p&&p.remove()}),p.querySelector("#stu-logout-confirm-btn").addEventListener("click",s)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{oa(e)});const c=()=>{var D,h;(D=document.getElementById("qr-request-confirm"))==null||D.remove(),(h=document.getElementById("qr-request-existing"))==null||h.remove();const p=document.createElement("div");p.id="qr-request-existing",p.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",p.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <h3 class="text-base font-bold text-gray-800">คุณเคยแจ้งขอทำบัตรแล้ว</h3>
        <p class="text-sm text-gray-600 leading-relaxed">กรุณารอแอดมินดำเนินการ และติดตามข้อความตอบกลับในหน้าข้อความเพื่อมารับ QR Code</p>
        <div class="flex gap-2">
          <button id="qr-request-existing-close" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
          <button id="qr-request-existing-messages" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ไปที่ข้อความ</button>
        </div>
      </div>`,document.body.appendChild(p),p.addEventListener("click",r=>{r.target===p&&p.remove()}),p.querySelector("#qr-request-existing-close").addEventListener("click",()=>p.remove()),p.querySelector("#qr-request-existing-messages").addEventListener("click",()=>{var r;p.remove(),(r=window._openFeedbackWidget)==null||r.call(window,void 0,void 0,"history")})};document.getElementById("btn-request-qr-card").addEventListener("click",async()=>{var D;try{if(await pt(e.id)){c();return}}catch(h){Y("ตรวจสอบคำขอเดิมไม่สำเร็จ: "+_e(h),"error");return}(D=document.getElementById("qr-request-confirm"))==null||D.remove();const p=document.createElement("div");p.id="qr-request-confirm",p.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",p.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(p),p.addEventListener("click",h=>{h.target===p&&p.remove()}),p.querySelector("#qr-request-cancel").addEventListener("click",()=>p.remove()),p.querySelector("#qr-request-ok").addEventListener("click",async()=>{const h=p.querySelector("#qr-request-ok");h.disabled=!0,h.textContent="กำลังส่ง...";try{if(await pt(e.id)){c();return}await Ut({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),Jt({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),p.remove(),Y("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch(r){if((r==null?void 0:r.code)==="23505"||String((r==null?void 0:r.message)??"").includes("QR_REISSUE_REQUEST_ALREADY_OPEN")){c();return}h.disabled=!1,h.textContent="ยืนยัน",Y("ส่งไม่สำเร็จ: "+_e(r),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var xe;const p=window._pp5SystemCfg??await Oe().catch(()=>({})),D=parseInt(p.studentQrDailyLimit||"3",10),h=parseInt(p.studentQrExpirySeconds||"60",10),r=`qr_generation_logs_${e.id}`,f=Be(new Date);let E=JSON.parse(localStorage.getItem(r)||"null");if((!E||E.date!==f)&&(E={date:f,count:0}),E.count>=D){Y(`คุณสร้าง QR Code ครบโควต้า ${D} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}E.count+=1,localStorage.setItem(r,JSON.stringify(E)),(xe=document.getElementById("student-qr-modal"))==null||xe.remove();const L=document.createElement("div");L.id="student-qr-modal",L.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",L.innerHTML=`
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
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${h}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${D-E.count} / ${D} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(L);const b=L.querySelector("#student-qr-canvas"),$=Math.floor(Date.now()/1e3),C=`SQ:${e.student_code}:${$}`;try{await Ms.toCanvas(b,C,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(be){console.error("Failed to draw QR Code:",be),Y("สร้าง QR Code ไม่สำเร็จ","error"),L.remove();return}let S=h;const Q=L.querySelector("#qr-timer-bar"),oe=L.querySelector("#qr-timer-sec"),de=setInterval(()=>{S-=1,oe&&(oe.textContent=S),Q&&(Q.style.width=`${S/h*100}%`),S<=0&&(clearInterval(de),L.remove(),Y("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);L.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(de),L.remove()})})}const na={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function oa(e){var o;(o=document.getElementById("student-leave-modal"))==null||o.remove();const s=document.createElement("div");s.id="student-leave-modal",s.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",s.innerHTML=`
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
  `,document.body.appendChild(s);const n=()=>{s._leaveTimer&&clearInterval(s._leaveTimer),s.remove()};s.querySelector("#btn-leave-modal-close").addEventListener("click",n),da(e,s)}function la(e,s){e.querySelectorAll(".leave-tab-btn").forEach(n=>{const o=n.dataset.leaveTab===s;n.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${o?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function da(e,s){const n=s.querySelector("#student-leave-body");let o="permit";try{const[i,c]=await Promise.all([$s(e.id),Ss(e.id)]),x=c.filter(h=>h.status==="overdue").length,j=x>=3?"danger":x>=1?"warning":"safe",k=na[j],P=()=>{var r,f,E,L;let h="";if(i){const b=((f=(r=i.classes)==null?void 0:r.master_subjects)==null?void 0:f.subject_name)||((E=i.classes)==null?void 0:E.class_name)||"—";h=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${V(b)} · เหตุผล: ${V(i.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${V(((L=i.teachers)==null?void 0:L.full_name)||"—")}</p>
          </div>
        `}return`
        <div class="rounded-2xl ${k.badgeBg} border ${k.border} px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">สถานะปัจจุบัน</p>
            <p class="text-sm font-extrabold ${k.badgeText} mt-0.5">${k.label}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">เลยเวลา/ไม่กลับ</p>
            <p class="text-sm font-extrabold ${k.badgeText} mt-0.5">${x}/3 ครั้ง</p>
          </div>
        </div>
        ${h}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},p=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${c.length?c.map(r=>{var $,C,S;const f=((C=($=r.classes)==null?void 0:$.master_subjects)==null?void 0:C.subject_name)||((S=r.classes)==null?void 0:S.class_name)||"—",E=r.status==="active"?"🚪 กำลังออก":r.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",L=r.status==="active"?"text-amber-600":r.status==="overdue"?"text-red-600":"text-emerald-600",b=new Date(r.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${V(f)}</span>
                  <span class="text-[10px] font-bold ${L}">${E}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${b} · ${V(r.reason)} · ${r.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,D=()=>{if(n.innerHTML=o==="permit"?P():p(),la(s,o),s.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${o==="permit"?k.border:"border-transparent"}`,o==="permit"&&i){const h=n.querySelector("#student-leave-active-card"),r=n.querySelector("#student-leave-active-label"),f=n.querySelector("#student-leave-active-timer"),E=n.querySelector("#student-leave-active-detail"),L=n.querySelector("#student-leave-active-teacher"),b=()=>{const $=Is(i.created_at,i.allowed_duration);f&&(f.textContent=$.timerText),$.isOverdue&&h&&!h.classList.contains("bg-red-50")&&(h.classList.remove("border-amber-200","bg-amber-50"),h.classList.add("border-red-200","bg-red-50","animate-pulse"),r&&(r.textContent="⛔ เลยเวลา",r.classList.replace("text-amber-700","text-red-700")),f&&f.classList.replace("text-amber-700","text-red-700"),E&&E.classList.replace("text-amber-800","text-red-800"),L&&L.classList.replace("text-amber-600","text-red-600")),$.isBeyondLimit&&h&&h.classList.remove("animate-pulse")};b(),s._leaveTimer=setInterval(b,1e3)}};s.querySelectorAll(".leave-tab-btn").forEach(h=>{h.addEventListener("click",()=>{s._leaveTimer&&clearInterval(s._leaveTimer),o=h.dataset.leaveTab,D()})}),D()}catch(i){n.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${V(_e(i))}</p>`}}async function Qt(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,s)=>{const n=document.createElement("script");n.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",n.onload=()=>e(window.Html5Qrcode),n.onerror=o=>s(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(n)})}const ia="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",ca="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let We=null;function ma(){return We||(We=new Promise((e,s)=>{var o,i;if((i=(o=window.google)==null?void 0:o.accounts)!=null&&i.id){e();return}const n=document.createElement("script");n.src="https://accounts.google.com/gsi/client",n.async=!0,n.defer=!0,n.onload=()=>e(),n.onerror=()=>s(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(n)}),We)}function Ba(){var o;(o=document.getElementById("stu-email-link-modal"))==null||o.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e);const s=(i,c)=>{const x=e.querySelector("#sel-msg");x.className=`text-xs text-center py-2.5 rounded-xl ${c?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,x.textContent=i,x.classList.remove("hidden")},n=async(i,c,x)=>{c&&(c.disabled=!0);try{await It(i),s(`เชื่อมอีเมล ${i} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(j){s("ไม่สำเร็จ: "+_e(j),!0),c&&(c.disabled=!1,c.textContent=x)}};ma().then(()=>{window.google.accounts.id.initialize({client_id:ia,ux_mode:"redirect",login_uri:ca}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",i=>{i.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const i=e.querySelector("#sel-save"),c=e.querySelector("#sel-email").value.trim(),x=e.querySelector("#sel-email-confirm").value.trim();if(!c||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)){s("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(c!==x){s("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}i.textContent="กำลังบันทึก...",await n(c,i,"เชื่อมอีเมล")})}async function Da(e){try{await It(e),Y(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(s){Y("เชื่อมอีเมลไม่สำเร็จ: "+_e(s),"error")}}const $t={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},St={};function Ce(e="success",s=null){try{const n=$t[e]?e:"error",o=s==="หญิง"?"female":"male",i=`${n}_${o}`;let c=St[i];if(!c){const x="/pp5online/";c=new Audio(`${x}sounds/${$t[n][o]}`),St[i]=c}c.currentTime=0,c.volume=1,c.play().catch(x=>console.warn("Play scan sound failed:",x))}catch(n){console.error("Play scan sound failed",n)}}function lt(e,s){const o=Gt(s==null?void 0:s.semester_start,[]).find(i=>i.days.some(c=>c.ds===e));return o?o.n:1}async function Na(e,s={}){var te,ae;const{authorizedByCouncil:n=!1,onBack:o=null}=s,i=e;window._lastSuccessFeedbackHTML="",ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[c,x]=await Promise.all([Oe().catch(()=>({})),ss().catch(()=>[])]);window._pp5SystemCfg=c;let j=!1;if(n)j=!0;else if(e.student_code)j=Ft(e,c);else if(e.teacher_code){const g=(c.prayerScannerTeachers||"").split(/[\s,]+/).map(d=>d.trim()).filter(Boolean);let a=null;try{const d=await qe.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();a=(d==null?void 0:d.data)??null}catch{}j=g.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(a==null?void 0:a.role)==="admin"}if(!j){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const k=!!e.teacher_code,P=!k&&zt(e,c),p=it(c,P);if(!k&&!nt(c,P)){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-100 text-3xl">
          🕌
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">นอกช่วงเวลาบันทึกกิจกรรมละหมาด</h3>
        <p class="text-xs text-gray-500 leading-relaxed">
          ระบบสแกนเปิดให้บันทึกเวลาเฉพาะช่วงเวลา <b>${p.startLabel} น. ถึง ${p.endLabel} น.</b> เท่านั้น<br>
          (ยกเว้นคุณครูที่สามารถเข้าใช้งานได้ตลอดเวลา)
        </p>
        <button id="scanner-btn-back-restricted" class="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl active:scale-95 transition-all shadow-sm">
          ← กลับหน้าหลัก
        </button>
      </div>`),(te=document.getElementById("scanner-btn-back-restricted"))==null||te.addEventListener("click",()=>{o?o():window._stuNav("overview")});return}const D=document.querySelector("nav.safe-area-bottom");D&&D.classList.add("hidden");const h=document.getElementById("sidebar"),r=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(h&&h.classList.add("hidden"),r&&r.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const f=Be(new Date);let E=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");E=E.filter(g=>g.check_date===f),localStorage.setItem("prayer_scan_history_today",JSON.stringify(E)),E.forEach(g=>window._syncedStudentIdsToday.add(g.student_id));let L=localStorage.getItem("prayer_scan_input_mode")||"camera",b=localStorage.getItem("prayer_scan_device_mode")||"single";const $=zs(e),C=localStorage.getItem("prayer_scan_active_location");let S=$.some(g=>g.id===C)?C:((ae=$[0])==null?void 0:ae.id)||"musolla_male",Q=localStorage.getItem("prayer_scan_record_status")||"pray",oe=!1,de=!1;const xe="/pp5online/prayer-scanner-amanah.png";function be(){var H,X;const g=Be(new Date),a=lt(g,c),d=$.map(_=>`
      <option value="${_.id}" ${S===_.id?"selected":""}>${_.icon} ${_.label}${_.detail?` (${_.detail})`:""}</option>
    `).join(""),u=$.map(_=>`
      <button type="button" data-location="${_.id}"
        class="scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-emerald-100 text-xl flex items-center justify-center flex-shrink-0">${_.icon}</span>
          <span class="min-w-0">
            <span class="block text-sm font-extrabold">${_.label}</span>
            <span class="block text-xs text-gray-500 mt-0.5">${_.detail||"จุดสแกนละหมาด"}</span>
          </span>
          <span class="scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold border-gray-200 bg-white text-transparent">✓</span>
        </div>
      </button>
    `).join(""),q=`
      <!-- Flash green screen overlay -->
      <div id="scanner-flash" class="fixed inset-0 pointer-events-none z-50 bg-emerald-500 opacity-0 transition-opacity duration-150 hidden"></div>
      <div id="scanner-time-warning-border" class="hidden fixed inset-0 pointer-events-none z-[60] border-4 border-red-500 rounded-[2rem] animate-pulse"></div>

      ${k?"":`
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

      ${k?"":`
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
              ${u}
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
          <p class="text-xs text-gray-400 mt-0.5">ผู้สแกน: ${e.full_name} · สัปดาห์ที่ ${a}</p>
        </div>
      </div>

      <div id="scanner-countdown-panel" class="${k?"bg-indigo-50 border-indigo-100 text-indigo-700":"bg-emerald-50 border-emerald-100 text-emerald-800"} rounded-2xl border px-4 py-3 mb-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <p class="text-[10px] font-bold uppercase tracking-wider opacity-70">${k?"สิทธิ์คุณครู":P?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-xs font-semibold mt-0.5">${k?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${p.startLabel} - ${p.endLabel} น.`}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <p class="text-[10px] font-bold opacity-70">เวลาคงเหลือ</p>
          <p id="scanner-countdown" class="font-mono text-2xl font-extrabold leading-none">${k?"∞":"--:--"}</p>
        </div>
      </div>

      <!-- Settings panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">ช่องทางสแกน</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-input-camera" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${L==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📷 ใช้กล้อง
              </button>
              <button id="opt-input-gun" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${L==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
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
            ${d}
          </select>
        </div>

        ${e.gender==="หญิง"||e.teacher_code?`
        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📝 สถานะบันทึกเมื่อสแกน (Record Status)</label>
          <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
            <button id="opt-status-pray" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${Q==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟢 ละหมาดปกติ
            </button>
            <button id="opt-status-usor" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${Q==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
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
      <div id="scanner-view-camera" class="relative overflow-hidden bg-slate-950 rounded-3xl w-full max-w-sm mx-auto aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4 ${L==="camera"?"":"hidden"}">
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

      <div id="scanner-view-gun" class="border border-dashed border-gray-300 bg-white rounded-3xl py-12 px-6 text-center shadow-sm mb-4 transition-all relative ${L==="gun"?"":"hidden"}">
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
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const _=parseInt(c.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(_)?Math.max(0,_):2})()} ครั้ง/เดือน/คน</p>
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
    `,m=document.getElementById("stu-content")||document.getElementById("main-content");m&&(m.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${q}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{he(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),D&&D.classList.remove("hidden");const _=document.getElementById("sidebar"),t=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(_&&_.classList.remove("hidden"),t&&t.classList.add("md:ml-64"),o){o();return}e.teacher_code?kt(async()=>{const{renderPrayerAdmin:l}=await import("./views-D468naNk.js").then(M=>M.S);return{renderPrayerAdmin:l}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])).then(({renderPrayerAdmin:l})=>{l(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{ye("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{ye("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{ve("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{ve("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{w()});const I=document.getElementById("scanner-manual-code-input"),N=document.getElementById("btn-submit-manual-scan"),ne=()=>{const _=I==null?void 0:I.value.trim();if(!_){Y("กรุณากรอกรหัสนักเรียน","warning"),I==null||I.focus();return}I.value="",y(_,{inputMethod:"manual"})};N==null||N.addEventListener("click",ne),I==null||I.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),ne())});const O=document.getElementById("opt-active-location");let A="";const K=_=>{const t=document.getElementById("btn-confirm-scanner-location");t&&(t.disabled=!_,t.className=_?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},z=(_=S)=>{document.querySelectorAll(".scanner-location-choice").forEach(t=>{const l=t.dataset.location===_;t.className=`scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] ${l?"border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm":"border-gray-200 bg-white text-gray-700 hover:bg-gray-50"}`;const M=t.querySelector(".scanner-location-check");M&&(M.className=`scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold ${l?"border-emerald-500 bg-emerald-600 text-white":"border-gray-200 bg-white text-transparent"}`)})},ue=(_,{toast:t=!1}={})=>{$.some(l=>l.id===_)&&(S=_,localStorage.setItem("prayer_scan_active_location",S),O&&(O.value=S),z(),t&&Y("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};O==null||O.addEventListener("change",_=>{ue(_.target.value,{toast:!0})}),document.querySelectorAll(".scanner-location-choice").forEach(_=>{_.addEventListener("click",()=>{A=_.dataset.location||"",ue(A),z(A),K(!!A)})}),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{$e("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{$e("usor")}));const pe=()=>{de||(de=!0,me(),Se(),L==="camera"?Ee():Le())},ee=()=>{const _=document.getElementById("scanner-location-modal");if(!_){pe();return}A="",z(""),K(!1),_.classList.remove("hidden"),_.classList.add("flex")};(H=document.getElementById("btn-confirm-scanner-location"))==null||H.addEventListener("click",()=>{var _;if(!A){Y("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}localStorage.setItem("prayer_scan_active_location",S),(_=document.getElementById("scanner-location-modal"))==null||_.remove(),pe()}),me();const T=document.getElementById("scanner-amanah-modal");T?(X=document.getElementById("btn-ack-scanner-amanah"))==null||X.addEventListener("click",()=>{T.remove(),ee()}):ee()}function ye(g){g!==L&&(L=g,localStorage.setItem("prayer_scan_input_mode",g),g==="camera"?(ke(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),Ee()):(he(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),Le()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${g==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${g==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function ve(g){if(g===b)return;b=g,localStorage.setItem("prayer_scan_device_mode",g);const a=document.getElementById("dual-monitor-link-area");g==="dual"?a.classList.remove("hidden"):a.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${g==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${g==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function $e(g){if(g===Q)return;Q=g,localStorage.setItem("prayer_scan_record_status",g);const a=document.getElementById("opt-status-pray"),d=document.getElementById("opt-status-usor");a&&d&&(a.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${g==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,d.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${g==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),Y(`เปลี่ยนโหมดบันทึกเป็น: ${g==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function Se(){if(k)return;const g=document.getElementById("scanner-countdown"),a=document.getElementById("scanner-countdown-panel"),d=document.getElementById("scanner-time-warning-border");if(!g||!a||!d)return;const u=()=>{const q=Xs(c,P);g.textContent=Zs(q);const m=q<=Js;a.classList.toggle("bg-red-50",m),a.classList.toggle("border-red-200",m),a.classList.toggle("text-red-700",m),a.classList.toggle("bg-emerald-50",!m),a.classList.toggle("border-emerald-100",!m),a.classList.toggle("text-emerald-800",!m),d.classList.toggle("hidden",!m),q<=0&&(he(),ke())};u(),window._activePrayerScannerState.countdownInterval=setInterval(u,1e3)}async function Ee(){try{const g=await Qt(),a=new g("camera-reader");window._activePrayerScannerState.html5Qrcode=a;let d=null,u=0;const q={fps:25,aspectRatio:1};await a.start({facingMode:"environment"},q,m=>{m===d&&Date.now()-u<1800||(d=m,u=Date.now(),y(m))},()=>{})}catch(g){console.error("Camera open failed:",g),Y("ไม่สามารถเปิดใช้งานกล้องได้: "+(g.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function he(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function Le(){const g=document.getElementById("scanner-gun-input");if(!g)return;g.focus();const a=setInterval(()=>{const d=document.getElementById("scanner-manual-code-input");document.activeElement!==g&&document.activeElement!==d&&document.getElementById("scanner-gun-input")&&g.focus()},1e3);window._activePrayerScannerState.focusInterval=a,g.addEventListener("keydown",d=>{if(d.key==="Enter"){d.preventDefault();const u=g.value.trim();g.value="",u&&y(u)}})}function ke(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}async function y(g,a={}){if(console.log("[Scanner] Raw scanned text:",g),!g)return;const d=a.inputMethod==="manual"?"manual":"qr";if(!k&&!nt(c,P)){Ce("error"),R(null,g,`ไม่อยู่ในช่วงเวลาบันทึกกิจกรรมละหมาด (${p.startLabel} - ${p.endLabel} น.)`);return}let u=String(g).trim(),q=!1;if(u.startsWith("SQ:")){const t=u.split(":");if(t.length===3){const[,l,M]=t,B=parseInt(M,10),Z=Math.floor(Date.now()/1e3),se=Z-B,ce=parseInt(c.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${l}, QR Time: ${B}, Now: ${Z}, Diff: ${se}s, Allowed Expiry: ${ce}s`),(isNaN(B)||se>ce||se<-ce)&&(q=!0),u=l.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",t.length),Ce("error"),R(null,g,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const m=x.find(t=>String(t.student_code).trim()===u);if(console.log("[Scanner] Lookup result for code:",u,m?m.full_name:"not found"),q){console.warn("[Scanner] QR Code has expired");const t=parseInt(c.studentQrExpirySeconds||"60",10);Ce("error",m==null?void 0:m.gender),R(m,u,`QR Code นี้หมดอายุแล้ว (เกิน ${t} วินาที)`);return}if(!m){Ce("error"),R(null,u,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const I=Gs(m,S);if(I){Ce("error",m.gender),R(m,u,I);return}const N=Be(new Date),ne=wt(i.main_room),O=wt(m.main_room),A=!!ne&&!!O&&ne===O;if(!k&&A&&Ks(m.gender,c)){Ce("error",m.gender),R(m,u,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const K=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(K.some(t=>t.student_id===m.id&&t.check_date===N)){Ce("duplicate",m.gender),R(m,u,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(m.id)){Ce("duplicate",m.gender),R(m,u,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if(d==="manual"){const t=parseInt(c.prayerManualEntryMonthlyLimit??"2",10),l=Number.isFinite(t)?Math.max(0,t):2;if(l===0){Ce("error",m.gender),R(m,u,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const M=K.filter(B=>B.student_id!==m.id||B.input_method!=="manual"||!B.check_date?!1:String(B.check_date).slice(0,7)===N.slice(0,7)).length;try{if(await as(m.id,N)+M>=l){Ce("error",m.gender),R(m,u,`ใช้สิทธิ์กรอกรหัสครบ ${l} ครั้งในเดือนนี้แล้ว`);return}}catch(B){console.warn("Manual prayer count check failed:",B),Ce("error",m.gender),R(m,u,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}const ue=lt(N,c);let pe=Q,ee="";pe==="usor"&&m.gender==="ชาย"&&(pe="pray",ee=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const T=i.teacher_code?`${i.full_name} (ครู)`:`${i.full_name} (รหัส ${i.student_code||"—"})`,H={student_id:m.id,main_room:m.main_room,check_date:N,status:pe,week_number:ue,location:S,full_name:m.full_name,student_code:m.student_code,scanned_by:T,input_method:d,scanner_code:i.teacher_code||i.student_code||null,scanner_name:i.full_name||null,scanner_room:i.main_room||null,scanner_gender:i.gender||null,same_room_flag:A};K.push(H),localStorage.setItem("prayer_scan_queue",JSON.stringify(K));let X=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");X=X.filter(t=>t.check_date===N),X.some(t=>t.student_id===m.id)||(X.unshift({student_id:m.id,full_name:m.full_name,student_code:m.student_code,main_room:m.main_room,check_date:N,status:pe,input_method:d,same_room_flag:A}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(X))),window._syncedStudentIdsToday.add(m.id),Ce("success",m.gender),le(),R(m,u,`บันทึกสำเร็จลงเครื่องแล้ว${d==="manual"?" (กรอกรหัส)":""}${ee}`,!0,pe),me(),w()}function R(g,a,d,u=!1,q="pray"){const m=document.getElementById("scanner-feedback-container");if(m){if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),u&&g){const I=q==="usor",N=g.image_url?`<img src="${g.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${I?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${g.full_name.charAt(0)}</div>`,ne=I?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';m.innerHTML=`
        <div class="bg-white/95 border ${I?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${N}
          <div class="flex-1 min-w-0">
            ${ne}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${g.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${g.student_code} · ห้อง ${Me(g.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${d}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${g.id}" data-name="${g.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=m.innerHTML,G(m)}else{const I=g?g.full_name:"ไม่พบข้อมูล",N=g?`รหัส ${g.student_code} · ห้อง ${Me(g.main_room)}`:`สแกนพบ: ${a}`;m.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${I}</h4>
            <p class="text-xs text-gray-500 truncate">${N}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${d}</p>
          </div>
        </div>`,m.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(m.innerHTML=window._lastSuccessFeedbackHTML,G(m)):(m.innerHTML="",m.classList.add("hidden"))},3500);return}m.classList.remove("hidden")}}function G(g){const a=g.querySelector("#btn-undo-scan");a&&a.addEventListener("click",()=>{const d=parseInt(a.dataset.sid,10),u=a.dataset.name;re(d,u)})}async function re(g,a){const d=Be(new Date);let u=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");u=u.filter(I=>!(I.student_id===g&&I.check_date===d)),localStorage.setItem("prayer_scan_queue",JSON.stringify(u));let q=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");q=q.filter(I=>!(I.student_id===g&&I.check_date===d)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(q)),window._syncedStudentIdsToday.delete(g),window._lastSuccessFeedbackHTML="";const m=document.getElementById("scanner-feedback-container");m&&(m.innerHTML="",m.classList.add("hidden")),me(),Y(`กำลังยกเลิกรายการของ ${a}...`,"info");try{const{error:I}=await qe.from("prayer_records").delete().eq("student_id",g).eq("check_date",d).is("teacher_id",null);if(I)throw I;Y(`ยกเลิกบันทึกของ ${a} สำเร็จ ✕`,"success")}catch(I){console.warn("Failed to delete from server (offline?):",I),Y("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function le(){const g=document.getElementById("scanner-flash");g&&(g.classList.remove("hidden","opacity-0"),g.classList.add("opacity-40"),setTimeout(()=>{g.classList.remove("opacity-40"),g.classList.add("opacity-0"),setTimeout(()=>g.classList.add("hidden"),150)},120))}function me(g=!1){const a=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let d=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const u=Be(new Date);d=d.filter(O=>O.check_date===u);const q=document.getElementById("scan-count-badge");q&&(q.textContent=`${d.length} คน`);const m=document.getElementById("sync-indicator"),I=document.getElementById("sync-title"),N=document.getElementById("sync-desc");if(!m||!I||!N)return;g?(m.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",I.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",N.textContent=`กำลังส่งข้อมูล ${a.length} คนขึ้นเซิร์ฟเวอร์`):a.length>0?(m.className="w-2.5 h-2.5 rounded-full bg-amber-500",I.textContent=`ค้างส่ง ${a.length} รายการ (ออฟไลน์)`,N.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(m.className="w-2.5 h-2.5 rounded-full bg-emerald-500",I.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",N.textContent="พร้อมบันทึกประวัติละหมาด");const ne=document.getElementById("scan-list");ne&&(d.length===0?ne.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(ne.innerHTML=d.map((O,A)=>{const K=a.some(T=>T.student_id===O.student_id),z=O.status==="usor",ue=O.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",pe=O.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",ee=K?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':z?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${d.length-A}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${O.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${O.student_code} · ห้อง ${Me(O.main_room)}</p>
              </div>
              ${ue}
              ${pe}
              ${ee}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${O.student_id}" data-name="${O.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),ne.querySelectorAll(".btn-cancel-scan-row").forEach(O=>{O.addEventListener("click",()=>{const A=parseInt(O.dataset.sid,10),K=O.dataset.name||"นักเรียน";re(A,K)})})))}async function w(){if(oe)return;const g=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(g.length){oe=!0,me(!0);try{const a=await jt(g);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),a!=null&&a.skippedCount?Y(`ซิงก์สำเร็จ (ข้าม ${a.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):Y("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(a){console.warn("Sync failed, offline backup kept:",a)}finally{oe=!1,me()}}}const U=setInterval(()=>{w()},8e3);window._activePrayerScannerState.syncInterval=U,be()}async function Aa(e){if(!(e!=null&&e.can_scan_prayer)){ie(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}ie(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let s={},n=Be(new Date),o=[];const i=r=>{if(!r)return"—";const f=new Date(r);return`${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}`},c=(r,f)=>{const E=new Date(r+"T00:00:00");return E.setDate(E.getDate()+f),Be(E)};async function x(){try{o=await _s(e.student_code,n)}catch(f){o=[],Y("โหลดข้อมูลไม่สำเร็จ: "+_e(f),"error")}const r=document.getElementById("sh-search-input");j((r==null?void 0:r.value.trim())??"")}function j(r=""){var b,$;const f=document.getElementById("sh-list"),E=document.getElementById("sh-count");if(!f)return;E&&(E.textContent=`${o.length} คน`);const L=r?o.filter(C=>{var S;return String(((S=C.students)==null?void 0:S.student_code)??"").includes(r)}):o;if(r&&!L.length){f.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${V(r)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(b=document.getElementById("sh-resave-btn"))==null||b.addEventListener("click",()=>p(r)),($=document.getElementById("sh-report-btn"))==null||$.addEventListener("click",()=>D(r));return}if(!L.length){f.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}f.innerHTML=L.map(C=>{const S=C.students??{},Q=Ge[C.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:C.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${S.image_url?`<img src="${S.image_url}" class="w-full h-full object-cover"/>`:V((S.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${V(S.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${V(S.student_code??"—")} · ${V(S.religion_room??S.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${Q.cls}" title="${V(Q.title)}">${Q.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${i(C.created_at)}</p>
        </div>
      </div>`}).join("")}async function k(){window._activePrayerScannerState={html5Qrcode:null};try{const r=await Qt(),f=new r("sh-camera-reader");window._activePrayerScannerState.html5Qrcode=f,await f.start({facingMode:"environment"},{fps:25,aspectRatio:1},E=>{var $;let L=String(E).trim();L.startsWith("SQ:")&&(L=L.split(":")[1]??L),P(),($=document.getElementById("sh-camera-wrap"))==null||$.classList.add("hidden");const b=document.getElementById("sh-search-input");b&&(b.value=L),j(L)},()=>{})}catch(r){Y("ไม่สามารถเปิดกล้องได้: "+(r.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function P(){var r;(r=window._activePrayerScannerState)!=null&&r.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function p(r){var $;let f=null;try{f=await bt(r)}catch{}if(!f){Y("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}($=document.getElementById("sh-resave-modal"))==null||$.remove();const E=document.createElement("div");E.id="sh-resave-modal",E.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const L=Object.entries(Ge);E.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${V(f.full_name)} (รหัส ${V(f.student_code)})<br/>${V(f.religion_room??f.main_room??"—")} · วันที่ ${n}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${L.map(([C,S],Q)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${Q===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${C}">${S.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(E);let b=L[0][0];E.querySelectorAll(".sh-status-btn").forEach(C=>{C.addEventListener("click",()=>{b=C.dataset.status,E.querySelectorAll(".sh-status-btn").forEach(S=>{S.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),S.classList.add("border-gray-200","text-gray-500")}),C.classList.remove("border-gray-200","text-gray-500"),C.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),E.querySelector("#sh-resave-cancel").addEventListener("click",()=>E.remove()),E.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const C=E.querySelector("#sh-resave-confirm");C.disabled=!0,C.textContent="กำลังบันทึก...";try{const S={student_id:f.id,main_room:f.main_room,check_date:n,status:b,week_number:lt(n,s),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await jt([S]),Y("บันทึกสำเร็จ ✅","success"),E.remove(),await x()}catch(S){Y("บันทึกไม่สำเร็จ: "+_e(S),"error"),C.disabled=!1,C.textContent="บันทึก"}})}async function D(r){let f=null;try{f=await bt(r)}catch{}const L=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${f?`${f.full_name} (รหัส ${f.student_code}) ห้องศาสนา ${f.religion_room??f.main_room??"—"}`:`รหัสนักเรียน ${r} (ไม่พบชื่อในระบบ)`} วันที่ ${n} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(L):Y("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function h(){s=await Oe().catch(()=>({})),ie(`
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
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async r=>{n=r.target.value,document.getElementById("sh-search-input").value="",await x()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{n=c(n,-1),document.getElementById("sh-date").value=n,document.getElementById("sh-search-input").value="",await x()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{n=c(n,1),document.getElementById("sh-date").value=n,document.getElementById("sh-search-input").value="",await x()}),document.getElementById("sh-search-input").addEventListener("input",r=>{j(r.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const r=document.getElementById("sh-camera-wrap");r.classList.toggle("hidden"),r.classList.contains("hidden")?P():k()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var r;P(),(r=document.getElementById("sh-camera-wrap"))==null||r.classList.add("hidden")}),await x()}h()}export{Da as completeGoogleEmailLink,Ba as openEmailLinkPrompt,Ma as renderExamRequestForm,sa as renderStudentAllAssignments,ea as renderStudentMyScores,qa as renderStudentOverview,Aa as renderStudentPrayerScanHistory,Na as renderStudentPrayerScanner,Ta as renderStudentProfile,ra as renderStudentRequests,aa as renderStudentSubjectDetail,ot as renderStudentSubjects};
