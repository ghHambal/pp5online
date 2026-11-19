const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-SQb2A_k_.js","assets/supabase-BV-W2lsh.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/views-BWuZhE4S.js","assets/ui-B_-P5e4Y.js","assets/leave-monitor.js_v_10.18-BH3C0DwK.js","assets/leave-time-CrS9gT63.js","assets/academic-term-switcher-CIWWvfS_.js","assets/sync-CZ3nizEt.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-CAINM-1x.js","assets/teacher-views-classes-D6s4Ss-C.js","assets/browser-JP79f-a9.js","assets/regrade-menu-window-du3eAXoU.js","assets/pp5-doc-DzwPAdJH.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-grades-DRY4v7WD.js","assets/score-qr-scanner-Di3caEbI.js","assets/teacher-views-attendance-C_x_p4RB.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-RBbRhBlc.js","assets/workload-scheduler-C9WpzjbH.js","assets/import-Dg05bnNM.js","assets/theme-qDnPEUQn.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/feature-hub.js_v_10.22-DKoHi--B.js","assets/sports-portals.js_v_10.22-BwSNBzKH.js","assets/sports-awards-admin-6oCPrlSb.js"])))=>i.map(i=>d[i]);
import{a as Vt,_ as kt,g as ye,A as Wt}from"./ui-B_-P5e4Y.js";import{b as Oe,c0 as Ut,dg as xt,dh as Yt,di as Jt,K as Et,dj as Kt}from"./api-SQb2A_k_.js";import{i as Ze,g as bt,c as Xt,a as Zt,d as es,f as et,r as ts}from"./score-display-CQ4dUIPx.js";import{c as Lt,d as ss,s as jt,e as as,f as Ke,h as rs,i as ns,j as os,k as ls,l as ds,m as is,n as cs,b as it,o as ms,p as us,q as Ct,r as ps,u as qt,t as It,v as ot,w as xs,x as bs,y as gs,z as fs,A as ys,B as vs,C as hs,D as ws,E as _s,F as $s,G as Ss,H as ks,I as Es}from"./student-api-BPdPj94Z.js";import{getMyStudentLeaveRequests as Ls,submitStudentLeaveRequest as js,getStudentLeaveProofUrl as Cs}from"./student-leave-api-D1x_Y7OR.js";import{submitStudentPasswordResetRequest as qs}from"./student-password-reset-api-Ath5foA7.js";import{g as Is}from"./theme-qDnPEUQn.js";import{i as Mt}from"./skill-groups-BY1NTbf4.js";import{_dateInputValue as Tt,_currentWeek as Ms,applyReadingGradesFromConfig as Ts,_readingGrade as Bs,renderIconTile as Ne}from"./teacher-views-utils-CAINM-1x.js";import{g as Bt,a as Dt,b as Nt,r as At}from"./quiz-api-MbEYu68W.js";import{f as Ds}from"./leave-time-CrS9gT63.js";import{uploadAssignmentFile as Ns}from"./storage-CuUjCgvI.js";import{s as Be}from"./supabase-BV-W2lsh.js";import{b as As}from"./browser-JP79f-a9.js";import{g as Ps,Q as Rs,R as Hs}from"./regrade-menu-window-du3eAXoU.js";import{e as Os,o as gt}from"./certificate-engine-Bn4Xdc-e.js";import{o as zs,c as Fs,a as ft,r as Gs}from"./academic-term-switcher-CIWWvfS_.js";import"./supabase-errors-BniCCodr.js";import"./assignment-annotations-api-Y9qfMpYa.js";import"./print-overlay-BVfxEd6n.js";const tt=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Pt(e){if(!e)return"";if(e.image_review_error)return'<p class="text-xs text-amber-700 mt-2">เปิดผลตรวจแบบเขียนไม่สำเร็จ กรุณาโหลดหน้าใหม่เพื่อลองอีกครั้ง</p>';const t=e.image_reviews??[];return t.length?`<div class="mt-3 rounded-xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-xs font-bold text-indigo-700 mb-2">✍️ งานที่ครูตรวจแล้ว</p>${t.map(n=>`<div class="mb-3 last:mb-0"><p class="text-xs text-indigo-700 mb-1">${new Date(n.source_submitted_at).getTime()===new Date(e.submitted_at).getTime()&&(e.file_urls??[]).some(d=>d.url===n.source_url)?"ผลตรวจงานรอบปัจจุบัน":"ผลตรวจงานรอบก่อน"} · ${tt(new Date(n.source_submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}))}</p><a href="${tt(n.image_url)}" target="_blank" rel="noopener" class="block"><img src="${tt(n.image_url)}" alt="งานที่ครูเขียนตรวจแล้ว" loading="lazy" class="max-h-64 w-full object-contain rounded-lg bg-white"><span class="block text-xs font-bold text-indigo-700 mt-1">เปิดดูฉบับตรวจ ↗</span></a></div>`).join("")}</div>`:""}const st=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function Rt(e){var l;(l=document.getElementById("my-certificates-modal"))==null||l.remove();const t=document.body.style.overflow;document.body.style.overflow="hidden";const n=document.createElement("div");n.id="my-certificates-modal",n.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",n.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const o=()=>{document.removeEventListener("keydown",d),document.body.style.overflow=t,n.remove()},d=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",d),document.body.appendChild(n),n.querySelector("[data-mycert-close]").addEventListener("click",o);const i=n.querySelector("#my-certificates-body"),u=[];(await Os(e.id).catch(()=>[])).forEach(r=>u.push({key:`central-${r.id}`,emoji:"🏅",title:r.title||"เกียรติบัตร",sub:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>gt({layout:r.layout_snapshot,variables:{name:e.full_name,date:new Date(r.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:r.certificate_no,...r.variables},docTitle:r.title})}));const _=await Lt(e.main_room).catch(()=>null),A=_&&Number(_.head_student_id)===Number(e.id),U=_&&Number(_.vice_head_student_id)===Number(e.id),ee=A?_==null?void 0:_.head_cert_url:U?_==null?void 0:_.vice_head_cert_url:null;ee&&u.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${A?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(ee,"_blank")});try{const{data:r}=await Be.from("events").select("id, status").order("academic_year",{ascending:!1}).order("created_at",{ascending:!1}).limit(1).maybeSingle();if(r){const[m,$]=await Promise.all([Be.rpc("get_my_sports_eligibility",{p_event:r.id}).then(p=>p.error?null:p.data).catch(()=>null),Be.rpc("get_my_sports_certificates",{p_event:r.id}).then(p=>p.error?[]:p.data??[]).catch(()=>[])]);(Array.isArray($)?$:[]).forEach(p=>{const w=p.certificate_kind==="outstanding";u.push({key:`sports-${p.certificate_kind||"medal"}-${p.id}`,emoji:w?"🏆":"🏅",title:p.title||`เกียรติบัตร${p.medal_label?` · ${p.medal_label}`:""}`,sub:w?`นักกีฬาดีเด่น · ${p.sport_name||"กีฬาสี"}`:`${p.sport_name||"รายการแข่งขัน"} · สี${p.color||""}`,onOpen:()=>gt({layout:p.layout,variables:{name:e.full_name,date:new Date(p.awarded_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"}),no:p.certificate_no,...p.variables||{}},docTitle:p.title},Vt)})}),m!=null&&m.eligible&&(m!=null&&m.certificate_url)&&u.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(m.certificate_url,"_blank")})}}catch{}u.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>zs(e.student_code)}),i.innerHTML=u.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${u.map(r=>`
        <div data-key="${st(r.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${r.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${r.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${st(r.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${st(r.sub||"")}</p>
          ${r.onOpen?'<p class="text-[10px] text-indigo-600 mt-2 font-bold">กดเพื่อเปิด / บันทึก PDF</p>':""}
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',u.forEach(r=>{var m;r.onOpen&&((m=i.querySelector(`[data-key="${CSS.escape(r.key)}"]`))==null||m.addEventListener("click",r.onOpen))})}const je=e=>(e??"").replace(/\/\d+/,"").trim(),Ge=e=>!e.mySubmission||e.mySubmission.status==="rejected",W=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function me(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function V(e,t="info"){const n={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},o=document.createElement("div");o.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${n[t]??n.info} transition-all`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2800)}const Qs={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},Vs={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},He={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Je=["อา","จ","อ","พ","พฤ","ศ","ส"],Qe={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},at=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function Ws(e){if(e!=null&&e.teacher_code)return at;const t=String((e==null?void 0:e.gender)||"").trim(),n=at.filter(o=>o.genders.includes(t));return n.length?n:at}function Us(e){const t=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!t)return{grade:null,isVoc:!1};const n=t.match(/^ม\.?([1-6])/);return{grade:n?parseInt(n[1],10):null,isVoc:t.startsWith("ปวช")}}function Ys(e,t){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:n,isVoc:o}=Us(e),d=t==="musolla_male",i=t==="masjid_kuwait";return!d&&!i?"":i&&!(n===6||o)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":d&&!(n>=1&&n<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function yt(e){const n=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16)}}function Js({r:e,g:t,b:n}){return"#"+[e,t,n].map(o=>Math.max(0,Math.min(255,Math.round(o))).toString(16).padStart(2,"0")).join("")}function Ve(e,t,n){const o=yt(e),d=yt(t);return Js({r:o.r+(d.r-o.r)*n,g:o.g+(d.g-o.g)*n,b:o.b+(d.b-o.b)*n})}function Re(e){if(!e)return"—";const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()+543}`}function rt(e){if(!e)return"";const t=new Date(e),n=new Date;t.setHours(0,0,0,0),n.setHours(0,0,0,0);const o=Math.round((t-n)/864e5);return o>1?`อีก ${o} วัน`:o===1?"พรุ่งนี้":o===0?"วันนี้":o===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(o)} วัน`}function Ks(e){var d,i,u;const t=((d=e.master_subjects)==null?void 0:d.subject_group)??"",n=e.skill_group??"";return(((u=(i=e.master_subjects)==null?void 0:i.teachers)==null?void 0:u.category)??"")==="ศาสนา"||t==="AGM"||t==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:t==="ACDMVOC"||n==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:n==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:Mt(n)?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:n==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function Xs(e,t={}){var _,A,U;const n=((_=e.master_subjects)==null?void 0:_.subject_group)??"",o=e.skill_group??"",d=((U=(A=e.master_subjects)==null?void 0:A.teachers)==null?void 0:U.category)??"",i=d==="ศาสนา"||n==="AGM"||n==="AGMVOC"?t.teacherReligionColor||"#b45309":n==="ACDMVOC"||o==="สามัญปวช"?t.teacherVocColor||"#7c3aed":o==="ภาษา"?t.teacherLanguageColor||"#2563eb":Mt(o)?t.teacherLifeColor||"#059669":o==="วิชาการ"?t.teacherAcademicColor||"#ea580c":t.teacherDefaultColor||"#059669",u=d==="ศาสนา"||n==="AGM"||n==="AGMVOC"?n==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":n==="ACDMVOC"||o==="สามัญปวช"?"กลุ่มสามัญ ปวช":o?`กลุ่มทักษะ: ${o}`:"กลุ่มวิชาสามัญ",y=u.replace("กลุ่มทักษะ: ","");return{color:i,label:u,short:y,bg:Ve(i,"#ffffff",.9),badgeBg:Ve(i,"#ffffff",.86),border:Ve(i,"#ffffff",.35),text:Ve(i,"#000000",.35)}}function nt(e=0){const t=new Date,n=t.getDay(),o=new Date(t);o.setDate(t.getDate()-(n===0?6:n-1)),o.setDate(o.getDate()+e*7);const d=new Date(o);d.setDate(o.getDate()-1);const i={};i[0]=d;for(let u=1;u<=7;u++){const y=new Date(o);y.setDate(o.getDate()+u-1),i[u]=y}return i}function We(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const Ht="12:20",Zs="12:50",ea="13:05",ta=60;function Ye(e,t){const o=String(e||t||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return Ye(t,Ht);const d=Math.max(0,Math.min(23,parseInt(o[1],10))),i=Math.max(0,Math.min(59,parseInt(o[2],10)));return d*60+i}function vt(e){const t=(e%1440+1440)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Pe(e){return String(e||"").split(/[\s,]+/).map(t=>t.trim()).filter(Boolean)}function ht(e,t=!1){return e==null||e===""?t:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function sa(e,t={}){return String(e||"").trim()==="หญิง"?ht(t.prayerSameRoomGuardFemaleEnabled,!1):ht(t.prayerSameRoomGuardMaleEnabled,!0)}function wt(e){return String(e||"").replace(/\s+/g,"").trim()}function Ot(e,t={}){return e!=null&&e.student_code?Pe(t.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function zt(e,t={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const n=String(e.student_code).trim(),o=Pe(t.prayerScannerSun),d=Pe(t.prayerScannerMon),i=Pe(t.prayerScannerTue),u=Pe(t.prayerScannerWed),y=Pe(t.prayerScannerThu);if(!(o.includes(n)||d.includes(n)||i.includes(n)||u.includes(n)||y.includes(n)))return!0;const A=new Date().getDay();return!!(A===0&&o.includes(n)||A===1&&d.includes(n)||A===2&&i.includes(n)||A===3&&u.includes(n)||A===4&&y.includes(n))}function ct(e={},t=!1){const n=Ye(e.prayerScanStartTime,Ht),o=Ye(e.prayerScanEndTime,Zs),d=Ye(e.prayerScanExtendedEndTime,ea),i=t?d:o;return{start:n,end:i,startLabel:vt(n),endLabel:vt(i)}}function Fe(e={},t=!1){const n=new Date,o=n.getHours(),d=n.getMinutes(),i=o*60+d,{start:u,end:y}=ct(e,t);return y<u?i>=u||i<=y:i>=u&&i<=y}function aa(e={},t=!1){const n=new Date,o=n.getHours()*3600+n.getMinutes()*60+n.getSeconds(),{start:d,end:i}=ct(e,t),u=d*60;let y=i*60,_=o;return i<d&&_<u&&(_+=86400),i<d&&(y+=86400),Math.max(0,y-_)}function ra(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Te(e){var u,y;let t=e.getFullYear();const n=((u=window._pp5SystemCfg)==null?void 0:u.academicYear)||((y=window._pp5SystemCfg)==null?void 0:y.academic_year)||2569,o=parseInt(n)-543;(t>2030||t<2024)&&(t=o);const d=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${d}-${i}`}function Ft(e,t=[]){const n=t.map(u=>u.check_date).filter(Boolean).sort()[0],o=e||n||new Date().toISOString().slice(0,10),d=new Date(o);d.setHours(0,0,0,0);const i=d.getDay();return i&&d.setDate(d.getDate()-i),Array.from({length:20},(u,y)=>{const _=Array.from({length:5},(A,U)=>{const ee=new Date(d);return ee.setDate(d.getDate()+y*7+U),{date:ee,ds:Te(ee),day:Je[U]}});return{n:y+1,days:_}})}function _t(e,t){const n=Object.fromEntries((t??[]).map(o=>[o.column_id,o.score]));return(e??[]).map(o=>({...o,score:n[o.id]??null}))}async function Aa(e){var ne,ue,pe,le,ge,ke;me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,n,o,d,i,u,y,_,A]=await Promise.all([Ke(e.id).catch(()=>[]),it(e.id).catch(()=>[]),vs(e.id).catch(()=>({linked:[],unlinked:[]})),hs(e.id).catch(()=>[]),ws(e.id).catch(x=>(console.error("[student GPA] โหลดเกรดเฉลี่ยไม่สำเร็จ",x),{samai:[],sasana:[],error:ye(x)})),Oe().catch(()=>({})),Lt(e.main_room).catch(()=>null),It(e.id).catch(()=>[]),(ne=window._pp5StudentAcademicTerms)!=null&&ne.length?Promise.resolve(window._pp5StudentAcademicTerms):Et().catch(()=>[])]),U=Fs(A,u),ee=ft({academic_year:Number(u.academicYear??u.academic_year??2568),semester:Number(u.semester??1)});let l=ee;try{const x=localStorage.getItem(`pp5_student_score_term_${e==null?void 0:e.id}`);U.some(k=>ft(k)===x)&&(l=x)}catch{}const r=_.filter(Ge).sort((x,k)=>(x.due_at?new Date(x.due_at).getTime():1/0)-(k.due_at?new Date(k.due_at).getTime():1/0)),m=n.filter(x=>x.status==="pending"),$=n.slice(0,3),q=Ot(e,u),p=await Promise.all(t.map(x=>Bt(x.id,e.id).catch(()=>[]))),w=t.flatMap((x,k)=>(p[k]??[]).map(s=>({...s,_class:x}))),L=await Dt(w.map(x=>x.id),e.id).catch(()=>new Set),j=w.filter(x=>{if(x.status!=="started"||L.has(x.id))return!1;const k=x.attempts.filter(b=>b.status==="submitted"||b.status==="terminated_violation").length;return!(x.attempts.length&&x.attempts[x.attempts.length-1].status==="terminated_violation")&&k<x.max_attempts}),K=y&&Number(y.head_student_id)===Number(e.id),oe=y&&Number(y.vice_head_student_id)===Number(e.id),ce=(u.council_test_student_codes||"").split(/[\s,]+/).map(x=>x.trim()).filter(Boolean),z=u.council_visible_to_all!=="false"||ce.includes(e.student_code);let X=!1;try{const{data:x,error:k}=await Be.rpc("get_terangganu_access");k||(X=(x==null?void 0:x.visible)===!0&&(x==null?void 0:x.student_allowed)===!0)}catch{X=!1}let be=0,he={};try{const[x,k]=await Promise.all([Ps(),Promise.resolve(Be.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);he=x||{},be=Number(k==null?void 0:k.count)||0}catch{be=0}const $e=Rs(he,"student",{badge:be});let we=!0;try{const{data:x}=await Be.from("settings").select("value").eq("key","sports_visibility").maybeSingle();x!=null&&x.value&&(we=x.value.enabled!==!1&&x.value.student_menu!==!1)}catch{we=!0}let Ee=!1;try{const{data:x}=await Be.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();Ee=!!x}catch{Ee=!1}let Se=!1;try{const{data:x}=await Be.from("attendance_delegates").select("id, classes!inner(attendance_delegate_enabled)").eq("student_id",e.id).eq("classes.attendance_delegate_enabled",!0).limit(1);Se=!!(x!=null&&x.length)}catch{Se=!1}const Ce=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">ข้อมูลการเรียน งาน และกิจกรรมในหน้าภาพรวมเป็นภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="student-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Gs(U,l,ee)}
        </select>
      </label>
    </div>
  </section>`;me(`
    ${Ce}
    <!-- Profile card -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 mb-4 flex items-center gap-4 sm:gap-6">
      <div class="w-14 h-20 rounded-t-2xl rounded-b-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover object-top"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <p class="font-bold text-gray-800 text-base truncate">${e.full_name}</p>
          ${K?`
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
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${e.student_code} · ${je(e.main_room??"—")}</p>
      </div>
    </div>

    ${$e?`<div class="mb-4">${$e}</div>`:""}

    <!-- ระบบอื่น ๆ — กริดไอคอนแอปเลื่อนแนวนอนได้ถ้ามีมากกว่าที่จอแสดงพอดี (sportsVisible/councilVisible/
         terangganuVisible/can_scan_prayer ล้วนเปิด-ปิดแยกอิสระ รวมกันอาจเกิน 4 ช่องได้)
         — เกียรติบัตรแสดงเสมอ ส่วนที่เหลือ conditional เหมือนเดิมทุกประการ แค่เปลี่ยนรูปแบบจากแบนเนอร์
         เต็มแถว/แถบเมนูล่างถาวร (กีฬาสี) มาเป็นไอคอน -->
    <div class="mb-4">
      <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</p>
      ${[we,Ee,z,X,e.can_scan_prayer,Se].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Ne({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},u.iconTileStyle)}
        ${we?Ne({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},u.iconTileStyle):""}
        ${Ee?Ne({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},u.iconTileStyle):""}
        ${z?Ne({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},u.iconTileStyle):""}
        ${X?Ne({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},u.iconTileStyle):""}
        ${e.can_scan_prayer?Ne({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},u.iconTileStyle):""}
        ${Se?Ne({id:"student-attendance-delegate-tile",emoji:"✅",label:"เช็คชื่อ<br>แทนครู",from:"#CDEBD6",to:"#4CA778",onclick:"window._stuNav('attendance_delegate')"},u.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${zt(e,u)&&Fe(u,q)?`
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
    ${j.map(x=>{var s,b;const k=x.attempts.some(E=>E.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${k?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${W(x.title)} · ${W(((b=(s=x._class)==null?void 0:s.master_subjects)==null?void 0:b.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${x.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
          ${k?"ทำต่อ →":"เข้าสอบ →"}
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
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${m.length}</p>
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
      ${(()=>{const x=`stu_ann_seen_${e.id}`,k=new Set(JSON.parse(localStorage.getItem(x)??"[]")),s=d.filter(b=>!k.has(b.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${d.length} รายการ</p>
          ${s>0?`<span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">${s}</span>`:""}
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
    ${(()=>{const x=r.length>0,k=r[0],s=k!=null&&k.due_at?new Date(k.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${x?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${x?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${x?`ค้างอยู่ ${r.length} ชิ้น · ใกล้สุด: ${W(k.title)}${s?` (${s})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const k=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],s=new Date,b=s.getHours()*3600+s.getMinutes()*60+s.getSeconds(),E=R=>{if(!R)return null;const[Q,M]=R.split(":").map(Number);return Q*3600+M*60},h=o.linked.map(({cls:R,sched:Q,period:M})=>{var a,c;const se=R==null?void 0:R.master_subjects,ie=E(M==null?void 0:M.start_time),Z=E(M==null?void 0:M.end_time),I=ie!=null&&Z!=null&&b>=ie&&b<Z,H=Z!=null&&b>=Z,ae=I?"🟢":H?"✅":"⬜",J=M?`${(a=M.start_time)==null?void 0:a.slice(0,5)}–${(c=M.end_time)==null?void 0:c.slice(0,5)}`:`คาบ ${Q.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${ae}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${Q.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(se==null?void 0:se.subject_name)??Q.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${J} · ${(R==null?void 0:R.class_name)??""}</p>
          </div>
          ${I?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),N=d.filter(R=>R.ann_type==="deadline"&&R.deadline_at&&new Date(R.deadline_at)>s).sort((R,Q)=>new Date(R.deadline_at)-new Date(Q.deadline_at)).slice(0,5),f=R=>{const Q=new Date(R)-s,M=Math.floor(Q/6e4);if(M<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${M} น.</span>`;const se=Math.floor(M/60);return se<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${se} ชม. ${M%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(se/24)} วัน</span>`},B=N.map(R=>{var M,se;const Q=(M=R.cls)==null?void 0:M.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${R.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(Q==null?void 0:Q.subject_name)??""} · ${((se=R.cls)==null?void 0:se.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${f(R.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${k}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${s.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${h?`
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${h}</div>`:'<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>'}
        ${B?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${B}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${$.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${$.map(x=>{var b;const k=He[x.status]??He.pending,s=x.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${((b=s==null?void 0:s.master_subjects)==null?void 0:b.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${x.request_type} · ${Re(x.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${k.cls}">${k.label}</span>
            </div>
          </div>`}).join("")}
      </div>
    </div>`:`
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `),Hs();const _e=document.getElementById("stu-live-clock");if(_e){const x=()=>{const s=new Date;_e.textContent=`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}:${String(s.getSeconds()).padStart(2,"0")}`};x();const k=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(k);return}x()},1e3)}const S=(x,k)=>{const s=document.createElement("div");return s.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",s.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${x}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${k}</div>`,document.body.appendChild(s),s.querySelector("#stu-popup-back").addEventListener("click",()=>s.remove()),s},re=o.linked.find(({period:x})=>{if(!(x!=null&&x.start_time)||!(x!=null&&x.end_time))return!1;const k=new Date,s=k.getHours()*3600+k.getMinutes()*60+k.getSeconds(),[b,E]=x.start_time.split(":").map(Number),[h,N]=x.end_time.split(":").map(Number);return s>=b*3600+E*60&&s<h*3600+N*60});if(re){const x=(()=>{const[s,b]=re.period.end_time.split(":").map(Number);return s*3600+b*60})(),k=setInterval(()=>{const s=document.getElementById("stu-period-countdown");if(!s){clearInterval(k);return}const b=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),E=Math.max(0,x-b);if(E===0){s.textContent="หมดคาบ",clearInterval(k);return}const h=Math.floor(E/3600),N=Math.floor(E%3600/60),f=E%60;s.textContent=`${String(h).padStart(2,"0")}:${String(N).padStart(2,"0")}:${String(f).padStart(2,"0")}`},1e3)}const Y={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},de=x=>{if(!x)return"";const k=new Date(x),b=Math.floor((k-new Date)/6e4),E=k.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if(b<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${E}</span>`;if(b<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${b} น. · ${E}</span>`;const h=Math.floor(b/60);return h<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${h} ชม. ${b%60} น. · ${E}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(h/24)} วัน · ${E}</span>`};(ue=document.getElementById("btn-stu-my-certificates"))==null||ue.addEventListener("click",()=>Rt(e)),(pe=document.getElementById("btn-stu-anns"))==null||pe.addEventListener("click",()=>{const x=`stu_ann_seen_${e.id}`,k=new Set(JSON.parse(localStorage.getItem(x)??"[]"));d.forEach(E=>k.add(E.id)),localStorage.setItem(x,JSON.stringify([...k]));const s=document.querySelector("#btn-stu-anns span.absolute");s&&s.remove();const b=d.length?`<div class="space-y-3">${d.map(E=>{var f,B,R;const h=Y[E.ann_type]??Y.general,N=(f=E.cls)==null?void 0:f.master_subjects;return`<div class="rounded-2xl border ${h.border} ${h.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${E.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${h.icon} ${h.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(N==null?void 0:N.subject_name)??""} · ${((B=E.cls)==null?void 0:B.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${E.title??""}</p>
        ${E.body?`<p class="text-xs text-gray-500 mt-1">${E.body}</p>`:""}
        ${E.ann_type==="deadline"&&E.deadline_at?`<div class="mt-2">${de(E.deadline_at)}</div>`:""}
        ${E.file_url?`<a href="${E.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(R=E.attachment_urls)!=null&&R.length?`<div class="flex flex-wrap gap-1.5 mt-2">${E.attachment_urls.map(Q=>`<a href="${W(Q.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${W(Q.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';S("📢 ประกาศของฉัน",b)}),(le=document.getElementById("btn-stu-gpa"))==null||le.addEventListener("click",()=>{const x=I=>{const H=I.filter(a=>a.grade!=null);if(!H.length)return null;const ae=H.reduce((a,c)=>a+(c.credit||1),0),J=H.reduce((a,c)=>a+c.grade*(c.credit||1),0);return ae>0?(J/ae).toFixed(2):null},k=I=>I==null?"text-gray-400":I>=3.5?"text-emerald-600":I>=3?"text-blue-500":I>=2?"text-amber-600":"text-red-500",s=I=>I>=3.5?"ดีเยี่ยม":I>=3?"ดี":I>=2?"พอใช้":I>=1?"ผ่าน":"ไม่ผ่าน",b=I=>I.loadError?'<span class="text-[10px] font-semibold text-red-500 whitespace-nowrap">⚠️ โหลดข้อมูลไม่ครบ</span>':I.grade==null&&I.totalCols>0?`<span class="text-[10px] font-semibold text-amber-500 whitespace-nowrap" title="ครูให้คะแนนแล้ว ${I.scoredCount}/${I.totalCols} ช่อง — วิชานี้ยังไม่ถูกนับเข้าเกรดเฉลี่ยจนกว่าจะครบ">⏳ ${I.scoredCount}/${I.totalCols} · ยังไม่นับเข้า GPA</span>`:null,E=(I,H,ae)=>{const a=I.filter(D=>D.grade!=null).reduce((D,g)=>D+(g.credit||1),0),c=parseFloat(H);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${ae}" class="text-5xl font-extrabold ${H?k(c):"text-gray-300"} hover:opacity-70 transition">${H??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${H?k(c):"text-gray-400"}">${H?s(c):"—"}</p>
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
            ${I.map((D,g)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${g+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${D.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${D.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${D.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${D.score!=null?D.score:b(D)??"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${k(D.grade)}">${D.grade!=null?D.grade.toFixed(1):b(D)?"":"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${D.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${D.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${a}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${a}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${k(H?c:null)}">${H??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},h=(I,H,ae)=>{const J=parseFloat(H);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${ae}" class="text-5xl font-extrabold ${H?k(J):"text-gray-300"} hover:opacity-70 transition">${H??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${H?k(J):"text-gray-400"}">${H?s(J):"—"}</p>
          <p class="text-xs text-gray-400">เต็ม 4.0</p>
        </div>
      </div>
      ${I.length?`
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${I.map(a=>`
        <button class="gpa-pp5-btn text-left border border-gray-200 rounded-2xl p-3 hover:shadow-md transition bg-white" data-class-id="${a.classId}">
          <p class="text-[10px] text-gray-400 font-mono truncate">${a.subjectCode??""}</p>
          <p class="font-bold text-xs text-gray-800 leading-tight line-clamp-2 mt-0.5 min-h-[2rem]">${a.subjectName}</p>
          <div class="flex items-center justify-between mt-2 gap-1">
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${a.credit} นก. ${a.hasRetake?"· แก้":""}</span>
            ${b(a)??`<span class="text-lg font-extrabold ${k(a.grade)}">${a.grade!=null?a.grade.toFixed(1):"—"}</span>`}
          </div>
        </button>`).join("")}
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},N=x(i.samai),f=x(i.sasana),B=I=>{const H=I==="samai"?i.samai:i.sasana,ae=I==="samai"?N:f;return(localStorage.getItem("studentGpaView")==="card"?"card":"table")==="card"?h(H,ae,I):E(H,ae,I)},Q=`
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
      <div id="gpa-pop-samai">${B("samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${B("sasana")}</div>`,M=S("🎓 เกรดเฉลี่ยของฉัน",Q),se=()=>{M.querySelectorAll(".gpa-pp5-btn").forEach(I=>{I.addEventListener("click",()=>{var ae;const H=Number(I.dataset.classId);M.remove(),(ae=window._stuOpenClass)==null||ae.call(window,H)})}),["samai","sasana"].forEach(I=>{const H=M.querySelector(`#gpa-val-btn-${I}`);H&&H.addEventListener("click",()=>{const J=(I==="samai"?i.samai:i.sasana).filter(T=>T.grade!=null),a=J.reduce((T,F)=>T+(F.credit||1),0),c=J.reduce((T,F)=>T+F.grade*(F.credit||1),0),D=a>0?(c/a).toFixed(2):"—",g=document.createElement("div");g.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",g.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
            <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
            <div class="text-sm text-gray-600 mb-3">
              <p class="font-mono text-base font-semibold text-purple-700">
                Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
              <p class="text-gray-700">${c.toFixed(2)} ÷ ${a}</p>
              <p class="text-purple-700 font-bold text-lg mt-1">= ${D}</p>
            </div>
            <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่ครูให้คะแนนครบทุกช่องแล้วเท่านั้น (${J.length} วิชา)</p>
            <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
          </div>`,document.body.appendChild(g),g.querySelector("#gpa-tip-close").addEventListener("click",()=>g.remove()),g.addEventListener("click",T=>{T.target===g&&g.remove()})})})},ie=()=>{const I=localStorage.getItem("studentGpaView")==="card"?"card":"table";M.querySelector("#gpa-view-table").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${I==="table"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`,M.querySelector("#gpa-view-card").className=`px-2.5 py-2 rounded-lg text-xs font-semibold transition ${I==="card"?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}`};ie(),se();const Z=I=>{localStorage.setItem("studentGpaView",I==="card"?"card":"table"),M.querySelector("#gpa-pop-samai").innerHTML=B("samai"),M.querySelector("#gpa-pop-sasana").innerHTML=B("sasana"),ie(),se()};M.querySelector("#gpa-view-table").addEventListener("click",()=>Z("table")),M.querySelector("#gpa-view-card").addEventListener("click",()=>Z("card")),M.querySelectorAll(".gpa-pop-tab").forEach(I=>{I.addEventListener("click",()=>{const H=I.dataset.tab;M.querySelector("#gpa-pop-samai").classList.toggle("hidden",H!=="samai"),M.querySelector("#gpa-pop-sasana").classList.toggle("hidden",H!=="sasana"),M.querySelectorAll(".gpa-pop-tab").forEach(ae=>{ae.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${ae.dataset.tab===H?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})})}),window._stuOpenClassFromTT=x=>{var k;document.querySelectorAll(".stu-fullpop").forEach(s=>s.remove()),window._stuFromTimetable=!0,(k=window._stuOpenClass)==null||k.call(window,x)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const C=async()=>{const x=S("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:k,periods:s}=await _s(e.id).catch(()=>({slots:[],periods:[]})),b=x.querySelector(".flex-1.overflow-y-auto");if(!b)return;const E=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],h=["อา","จ","อ","พ","พฤ","ศ","ส"],N=[0,1,2,3,4,5,6].filter(Z=>k.some(I=>I.dow===Z)),f=new Date().getDay();let B="day",R=N.includes(f)?f:N[0]??0;const Q={};k.forEach(Z=>{Q[`${Z.dow}-${Z.periodNo}`]=Z});const M=Z=>{var g,T,F,O;const I=new Date,H=I.getHours()*3600+I.getMinutes()*60+I.getSeconds(),ae={};k.filter(P=>P.dow===Z&&P.span>1).forEach(P=>{for(let G=1;G<P.span;G++)ae[P.periodNo+G]=P.periodNo});const J=((T=(g=s.find(P=>P.period_no===5))==null?void 0:g.end_time)==null?void 0:T.slice(0,5))??"",a=((O=(F=s.find(P=>P.period_no===6))==null?void 0:F.start_time)==null?void 0:O.slice(0,5))??"",c=J&&a?`${J}–${a}`:"";let D="";return s.forEach(P=>{var ut,pt;P.period_no===6&&s.find(Xe=>Xe.period_no===5)&&(D+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${c?`<p class="text-[10px] text-emerald-500 mt-0.5">${c}</p>`:""}
            </td></tr>`);const G=Q[`${Z}-${P.period_no}`],v=(G==null?void 0:G.span)??1,te=v>1?s.find(Xe=>Xe.period_no===P.period_no+v-1)??P:P,[xe,qe]=(P.start_time??"0:0").split(":").map(Number),[Le,ve]=(te.end_time??"0:0").split(":").map(Number),Ie=H>=xe*3600+qe*60&&H<Le*3600+ve*60,fe=(ut=G==null?void 0:G.cls)==null?void 0:ut.master_subjects,Ae=["AGM","AGMVOC"].includes((fe==null?void 0:fe.subject_group)??""),mt=G?Ae?"bg-amber-50":"bg-emerald-50":"",ze=G?Ae?"text-amber-800":"text-emerald-800":"text-gray-300",De=ae[P.period_no]!=null;D+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${Ie?"text-emerald-600":"text-gray-500"}">คาบ ${P.period_no}</p>
            <p class="text-[10px] text-gray-400">${((pt=P.start_time)==null?void 0:pt.slice(0,5))??""}</p>
          </td>
          ${De?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${v>1?`rowspan="${v}"`:""}
              ${G?`onclick="window._stuOpenClassFromTT(${G.cls.id})"`:""}>
            ${G?`
              <div class="rounded-xl ${mt} border-l-4 ${Ae?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${Ie?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${v>1?v*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${ze} leading-tight">${(fe==null?void 0:fe.subject_name)??"—"}</p>
                <p class="text-[10px] ${ze} opacity-60 mt-0.5">${(fe==null?void 0:fe.subject_code)??""}</p>
                ${Ie?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${D}</tbody>
      </table>`},se=()=>{const Z=`${Math.floor(100/(N.length+1))}%`,I=`<th style="width:${Z}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+N.map(J=>`<th style="width:${Z}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${J===f?"text-teal-600":"text-gray-600"}">${h[J]}</th>`).join(""),H={};N.forEach(J=>{H[J]=new Set});let ae="";return s.forEach((J,a)=>{var g,T,F,O;const c=new Date;c.getHours()*3600+c.getMinutes()*60+c.getSeconds();const D=N.map(P=>{var ze;if(H[P].has(J.period_no))return"";const G=Q[`${P}-${J.period_no}`],v=(G==null?void 0:G.span)??1,te=(ze=G==null?void 0:G.cls)==null?void 0:ze.master_subjects,xe=["AGM","AGMVOC"].includes((te==null?void 0:te.subject_group)??""),qe=G?xe?"bg-amber-50":"bg-emerald-50":"",Le=G?xe?"text-amber-700":"text-emerald-700":"text-gray-200",ve=v>1?s.find(De=>De.period_no===J.period_no+v-1)??J:J,[Ie,fe]=(J.start_time??"0:0").split(":").map(Number),[Ae,mt]=(ve.end_time??"0:0").split(":").map(Number);for(let De=1;De<v;De++)H[P].add(J.period_no+De);return`<td style="width:${Z};padding:2px" ${v>1?`rowspan="${v}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${G?`onclick="window._stuOpenClassFromTT(${G.cls.id})"`:""}>
            ${G?`
              <div class="rounded-lg ${qe} border-l-2 ${xe?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${v>1?v*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${Le} text-[8px] font-semibold leading-tight line-clamp-3">${(te==null?void 0:te.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(ae+=`<tr>
          <td style="width:${Z}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${J.period_no}</p>
            <p class="text-[8px] text-gray-300">${((g=J.start_time)==null?void 0:g.slice(0,5))??""}</p>
          </td>${D}</tr>`,J.period_no===5&&s.find(P=>P.period_no===6)){const P=((T=J.end_time)==null?void 0:T.slice(0,5))??"",G=((O=(F=s.find(v=>v.period_no===6))==null?void 0:F.start_time)==null?void 0:O.slice(0,5))??"";ae+=`<tr><td colspan="${N.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${P&&G?` ${P}–${G}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${I}</tr></thead>
          <tbody>${ae}</tbody>
        </table>
      </div>`},ie=()=>{var I,H,ae,J;const Z=B==="week";if(b.innerHTML=`
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Z?"text-gray-500":"bg-white shadow text-teal-600"}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${Z?"bg-white shadow text-teal-600":"text-gray-500"}">ทั้งสัปดาห์</button>
        </div>
        ${Z?"":`
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${E[R]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>`}
      </div>
      ${Z?se():M(R)}
      ${k.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(I=b.querySelector("#tt-btn-day"))==null||I.addEventListener("click",()=>{B="day",ie()}),(H=b.querySelector("#tt-btn-week"))==null||H.addEventListener("click",()=>{B="week",ie()}),(ae=b.querySelector("#tt-prev"))==null||ae.addEventListener("click",()=>{const a=N.indexOf(R);R=N[(a-1+N.length)%N.length],ie()}),(J=b.querySelector("#tt-next"))==null||J.addEventListener("click",()=>{const a=N.indexOf(R);R=N[(a+1)%N.length],ie()}),!Z&&b.querySelector("#tt-day-cd")){const c=s.find(D=>{if(!Q[`${R}-${D.period_no}`]||!D.end_time)return!1;const T=new Date,F=T.getHours()*3600+T.getMinutes()*60+T.getSeconds(),[O,P]=D.end_time.split(":").map(Number),[G,v]=(D.start_time??"0:0").split(":").map(Number);return F>=G*3600+v*60&&F<O*3600+P*60});if(c){const[D,g]=c.end_time.split(":").map(Number),T=D*3600+g*60,F=setInterval(()=>{const O=b.querySelector("#tt-day-cd");if(!O){clearInterval(F);return}const P=new Date,G=Math.max(0,T-P.getHours()*3600-P.getMinutes()*60-P.getSeconds()),v=Math.floor(G/3600),te=Math.floor(G%3600/60),xe=G%60;O.textContent=`${String(v).padStart(2,"0")}:${String(te).padStart(2,"0")}:${String(xe).padStart(2,"0")}`,G===0&&clearInterval(F)},1e3)}}};ie()};(ge=document.getElementById("student-overview-term-switcher"))==null||ge.addEventListener("change",x=>{var s,b;const k=x.target.value;try{localStorage.setItem(`pp5_student_score_term_${e==null?void 0:e.id}`,k)}catch{}k===ee?(s=window._stuNav)==null||s.call(window,"overview"):(b=window._stuNav)==null||b.call(window,"scores")}),window._stuOpenTimetablePopup=C,(ke=document.getElementById("btn-stu-timetable"))==null||ke.addEventListener("click",C),window._stuStartQuiz=async x=>{try{const k=await Nt(x,e.id).catch(()=>null);if(k&&k.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${k.id}`;return}const s=await At(x);window.location.href=`quiz-exam.html?attempt=${s.id}`}catch(k){V("เข้าสอบไม่สำเร็จ: "+ye(k),"error")}}}async function na(e,t="life",n=null){var de;me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[o,d]=await Promise.all([Oe().catch(()=>({})),Et().catch(()=>[])]);Ts(o);const i=Number(o.academicYear??o.academic_year),u=Number(o.semester),y=Array.isArray(d)&&d.length?d:[{academic_year:i,semester:u,start_date:o.semester_start,end_date:o.semester_end,is_current:!0}],_=C=>`${Number(C.academic_year)}:${Number(C.semester)}`,A=`${i}:${u}`,U=n?`${Number(n.academicYear)}:${Number(n.semester)}`:null,ee=localStorage.getItem(`pp5_student_score_term_${e.id}`),l=[U,ee,A].find(C=>C&&y.some(ne=>_(ne)===C))??A,r=y.find(C=>_(C)===l)??y[0],m=Number(r.academic_year),$=Number(r.semester),q={...o,semester_start:r.start_date??o.semester_start,semester_end:r.end_date??o.semester_end},[p,w,L]=await Promise.all([xs(e.id,m,$).catch(C=>({columns:[],scores:[],error:C})),bs(e.id,m,$).catch(C=>({columns:[],scores:[],error:C})),gs(e.id,m,$,q.semester_start,q.semester_end).then(C=>({records:C,error:null})).catch(C=>({records:[],error:C}))]),j=L.records,K=_t(p.columns,p.scores),oe=_t(w.columns,w.scores),ce=oe.reduce((C,ne)=>C+(parseFloat(ne.score)||0),0),z=oe.reduce((C,ne)=>C+(parseFloat(ne.max_score)||0),0),X=z>0?Math.round(ce/z*1e3)/10:0,be=ce>0?Bs(X):null,he=Object.fromEntries((j??[]).map(C=>[C.check_date,C.status])),$e=Ft(q.semester_start,j??[]),we=$e.flatMap(C=>C.days),Ee=we.reduce((C,ne)=>{var ue;return C+(((ue=Qe[he[ne.ds]])==null?void 0:ue.score)??0)},0),Se=we.length*2,Ce=Se?Math.max(0,Math.round(Ee/Se*100)/10):0,_e=(C,ne,ue,pe)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${ne} ${C}</h3>
        <span class="text-[11px] text-gray-400">${ue.length} หัวข้อ</span>
      </div>
      ${ue.length?`<div class="divide-y divide-gray-50">
        ${ue.map(le=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${le.name}</p>
              <p class="text-[11px] text-gray-400">${le.sheet_col?`คอลัมน์ ${le.sheet_col} · `:""}เต็ม ${le.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${pe}">${le.score??"—"}</p>
              <p class="text-[10px] text-gray-400">/ ${le.max_score??"—"}</p>
            </div>
          </div>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลคะแนน</div>'}
    </section>`,S=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${L.error?'<div class="px-4 py-3 bg-amber-50 border-b border-amber-100 text-xs text-amber-800">โหลดคะแนนละหมาดไม่สำเร็จ กรุณากดรีเฟรชหรือลองใหม่อีกครั้ง</div>':""}
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">20 สัปดาห์ · สัปดาห์ละ 5 วัน</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-amber-600">${Ce}</p>
          <p class="text-[10px] text-gray-400">/ 10</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[520px] text-xs">
          <thead>
            <tr class="bg-gray-50 text-gray-500">
              <th class="px-2 py-2 text-left font-semibold">สัปดาห์</th>
              ${["อา","จ","อ","พ","พฤ"].map(C=>`<th class="px-2 py-2 text-center font-semibold">${C}</th>`).join("")}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${$e.map(C=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${C.n}</td>
              ${C.days.map(ne=>{const ue=he[ne.ds],pe=Qe[ue];return`<td class="px-1 py-1 text-center">
                  <span title="${(pe==null?void 0:pe.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(pe==null?void 0:pe.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(pe==null?void 0:pe.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(Qe).map(C=>`<span><b class="${C.cls.split(" ").find(ne=>ne.startsWith("text-"))??""}">${C.label}</b> ${C.title}</span>`).join("")}
      </div>
    </section>
  `,re={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[t]??"คะแนนทักษะชีวิต",Y={life:_e("คะแนนทักษะชีวิต","🌱",K,"text-emerald-600"),prayer:S,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${be?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${be.cls}">${be.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${ce?`${X} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${ce||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${z||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${ce?X:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${_e("คะแนนอ่านคิดวิเคราะห์ฯ","📖",oe,"text-sky-600")}
    `}[t]??_e("คะแนนทักษะชีวิต","🌱",K,"text-emerald-600");me(`
    <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
      <div>
        <h2 class="font-bold text-gray-800">📊 คะแนนของฉัน</h2>
        <p class="text-xs text-gray-400 mt-1">คะแนนประกอบรายภาคเรียน</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700">
        <span>ภาคเรียน</span>
        <select id="student-score-term" class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700">
          ${y.slice().sort((C,ne)=>_(C)===A?-1:_(ne)===A?1:_(ne).localeCompare(_(C),void 0,{numeric:!0})).map(C=>`<option value="${W(_(C))}" ${_(C)===l?"selected":""}>ภาค ${W(C.semester)}/${W(C.academic_year)}${_(C)===A?" (ปัจจุบัน)":" (ย้อนหลัง)"}</option>`).join("")}
        </select>
      </label>
    </div>
    <p class="text-xs text-gray-400 mb-2">ข้อมูลภาค ${$||"—"} / ${m||"—"} · ${l===A?"ภาคเรียนปัจจุบัน":"ข้อมูลย้อนหลัง"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${re}</p>
    ${Y}
  `),(de=document.getElementById("student-score-term"))==null||de.addEventListener("change",C=>{const[ne,ue]=String(C.target.value).split(":").map(Number);localStorage.setItem(`pp5_student_score_term_${e.id}`,`${ne}:${ue}`),na(e,t,{academicYear:ne,semester:ue})})}async function lt(e){var q;me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,n,o]=await Promise.all([Ke(e.id).catch(()=>[]),Is().catch(()=>({})),fs(e.id).catch(()=>[])]),d=Object.fromEntries(o.filter(p=>p.status==="pending").map(p=>[p.class_id,p])),i=["อา","จ","อ","พ","พฤ","ศ","ส"],u=t.length?await ys(t.map(p=>p.id)).catch(()=>({})):{},y=p=>{const w=u[p]??[];if(!w.length)return"";const L={};return w.forEach(j=>{const K=j.day_of_week;L[K]||(L[K]=[]);const oe=j.span_periods??1;for(let ce=0;ce<oe;ce++)L[K].push((j.period_no??0)+ce)}),Object.entries(L).sort(([j],[K])=>Number(j)-Number(K)).map(([j,K])=>{const oe=[...new Set(K)].sort((z,X)=>z-X),ce=oe.length===1?`คาบ ${oe[0]}`:`คาบ ${oe[0]}–${oe[oe.length-1]}`;return`${i[Number(j)]??j} ${ce}`}).join(" · ")};if(!t.length){me(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const _=p=>{var j,K,oe;if(p.subject_group_override)return p.subject_group_override==="sasana";const w=((j=p.master_subjects)==null?void 0:j.subject_group)??"";return(((oe=(K=p.master_subjects)==null?void 0:K.teachers)==null?void 0:oe.category)??"")==="ศาสนา"||w==="AGM"||w==="AGMVOC"},A=t.filter(p=>!_(p)),U=t.filter(p=>_(p)),l=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid",r=localStorage.getItem("studentSubjectsGroup")==="sasana"?"sasana":"samai";window._stuSetSubjectView=p=>{localStorage.setItem("studentSubjectsView",p==="grid"?"grid":"list"),lt(e)},window._stuSetSubjectGroup=p=>{localStorage.setItem("studentSubjectsGroup",p==="sasana"?"sasana":"samai"),lt(e)};const m=p=>{const w=p.master_subjects,L=w==null?void 0:w.teachers,j=Xs(p,n);return l?`<button onclick="window._stuOpenClass(${p.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${j.bg}; border-color:${j.border}; border-left-color:${j.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${j.badgeBg}; color:${j.text};">${j.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${j.text};">${(w==null?void 0:w.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${(w==null?void 0:w.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${je(p.class_name)}</p>
            ${y(p.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${y(p.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${L!=null&&L.image_url?`<img src="${L.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${((L==null?void 0:L.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${(L==null?void 0:L.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${p.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${j.bg}; border-color:${j.border}; border-left-color:${j.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${j.text};">${(w==null?void 0:w.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${(w==null?void 0:w.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${j.text};">${j.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${j.badgeBg}; color:${j.text};">${j.short}</span>
          <span class="text-[10px] text-gray-400">${(w==null?void 0:w.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${y(p.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${y(p.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${L!=null&&L.image_url?`<img src="${L.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${((L==null?void 0:L.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${(L==null?void 0:L.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${je(p.class_name)}</span>
      </div>
    </div>`},$=(p,w,L)=>L.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${w}</span>
          <h3 class="font-bold text-gray-700 text-sm">${p}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${L.length} วิชา</span>
        </div>
        <div class="${l?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${L.map(m).join("")}
        </div>
      </div>`:"";me(`
    <div class="flex items-center justify-between gap-3 mb-3">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${l?"text-gray-400":"bg-white text-emerald-600 shadow-sm"}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${l?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}">กริด</button>
      </div>
    </div>
    <div class="flex gap-2 mb-2">
      <button type="button" onclick="window._stuSetSubjectGroup('samai')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">📖 สามัญ (${A.length})</button>
      <button type="button" onclick="window._stuSetSubjectGroup('sasana')"
        class="flex-1 py-2 rounded-xl text-sm font-semibold transition ${r==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}">🕌 ศาสนา (${U.length})</button>
    </div>
    <div class="flex justify-end mb-4">
      <button id="btn-manage-subject-groups" type="button" class="text-xs text-indigo-600 font-semibold hover:text-indigo-800">🔧 จัดการกลุ่มรายวิชา</button>
    </div>
    ${r==="samai"?$("วิชาสามัญ","📖",A):$("วิชาศาสนา","🕌",U)}
  `),(q=document.getElementById("btn-manage-subject-groups"))==null||q.addEventListener("click",()=>{oa(e,t,d,_)})}function oa(e,t,n,o){var A;(A=document.getElementById("subject-group-mgr"))==null||A.remove();const d=document.createElement("div");d.id="subject-group-mgr",d.className="fixed inset-0 z-[400] bg-white flex flex-col";const i=(U,ee)=>{const l=U.master_subjects,r=n[U.id];return`
    <div class="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3">
      <p class="font-semibold text-sm text-gray-800 truncate min-w-0">${(l==null?void 0:l.subject_name)??"—"}</p>
      ${r?'<span class="text-[11px] font-semibold text-amber-500 whitespace-nowrap flex-shrink-0">⏳ รอตรวจสอบ</span>':ee?`<button class="sgm-move-btn text-[11px] font-semibold text-indigo-600 border border-indigo-200 rounded-lg px-2.5 py-1.5 hover:bg-indigo-50 whitespace-nowrap flex-shrink-0"
              data-class-id="${U.id}" data-requested="samai">ย้ายไป 📖 สามัญ</button>`:""}
    </div>`};let u="samai";const y=()=>{const U=t.filter(l=>(o(l)?"sasana":"samai")===u),ee=d.querySelector("#sgm-list");ee.innerHTML=U.length?U.map(l=>i(l,u==="sasana")).join(""):'<p class="text-center text-gray-400 text-sm py-8">ไม่มีวิชาในกลุ่มนี้</p>',ee.querySelectorAll(".sgm-move-btn").forEach(l=>{l.addEventListener("click",async()=>{var $,q;const r=Number(l.dataset.classId),m=t.find(p=>p.id===r);if(confirm(`ขอย้ายวิชา "${(($=m==null?void 0:m.master_subjects)==null?void 0:$.subject_name)??""}" ไปกลุ่ม 📖 สามัญ?
(ต้องรอแอดมินตรวจสอบและอนุมัติก่อนจึงจะมีผลจริง)`)){l.disabled=!0,l.textContent="กำลังส่ง...";try{await Es(r,"samai"),Kt({title:"🔀 มีคำขอย้ายกลุ่มวิชาใหม่",body:`นักเรียนขอย้ายวิชา "${((q=m==null?void 0:m.master_subjects)==null?void 0:q.subject_name)??""}" ไปกลุ่ม 📖 สามัญ — รอตรวจสอบ`,url:"dashboard.html"}).catch(()=>{}),V("ส่งคำขอแล้ว รอแอดมินตรวจสอบ","success"),d.remove(),lt(e)}catch(p){V("ส่งคำขอไม่สำเร็จ: "+ye(p),"error"),l.disabled=!1,l.textContent="ย้ายไป 📖 สามัญ"}}})})};d.innerHTML=`
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
    <div id="sgm-list" class="flex-1 overflow-y-auto px-4 py-3 space-y-2"></div>`,document.body.appendChild(d),d.querySelector("#sgm-back").addEventListener("click",()=>d.remove());const _=()=>{d.querySelector("#sgm-tab-samai").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${u==="samai"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,d.querySelector("#sgm-tab-samai").textContent=`📖 สามัญ (${t.filter(U=>!o(U)).length})`,d.querySelector("#sgm-tab-sasana").className=`sgm-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${u==="sasana"?"bg-emerald-600 text-white":"bg-gray-100 text-gray-500"}`,d.querySelector("#sgm-tab-sasana").textContent=`🕌 ศาสนา (${t.filter(U=>o(U)).length})`};d.querySelector("#sgm-tab-samai").addEventListener("click",()=>{u="samai",_(),y()}),d.querySelector("#sgm-tab-sasana").addEventListener("click",()=>{u="sasana",_(),y()}),_(),y()}async function la(e,t="samai"){me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const n=await It(e.id).catch(()=>[]),o=r=>{var q,p,w,L,j;const m=((p=(q=r._class)==null?void 0:q.master_subjects)==null?void 0:p.subject_group)??"";return(((j=(L=(w=r._class)==null?void 0:w.master_subjects)==null?void 0:L.teachers)==null?void 0:j.category)??"")==="ศาสนา"||m==="AGM"||m==="AGMVOC"},d=n.filter(r=>!o(r)),i=n.filter(r=>o(r)),u=r=>r?new Date(r).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",y=(r,m)=>r.due_at?new Date(m).getTime()>new Date(r.due_at).getTime():!1,_=r=>r.due_at?Date.now()>new Date(r.due_at).getTime():!1,A=r=>{var p,w;const m=r.mySubmission,$=m?y(r,m.submitted_at):!1,q=!m&&_(r);return`<div onclick="window._stuOpenClass(${r.class_id})"
      class="bg-white rounded-2xl border ${m?"border-emerald-100":q?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${W(((w=(p=r._class)==null?void 0:p.master_subjects)==null?void 0:w.subject_name)??"")}</p>
        ${m?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${$?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${$?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${q?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${q?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${W(r.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${u(r.due_at)}</p>
      ${Pt(m)}
      ${m!=null&&m.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${W(m.teacher_feedback)}</p>`:""}
    </div>`},U=r=>{if(!r.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const m=r.filter(Ge).sort((q,p)=>(q.due_at?new Date(q.due_at).getTime():1/0)-(p.due_at?new Date(p.due_at).getTime():1/0)),$=r.filter(q=>q.mySubmission&&q.mySubmission.status!=="rejected").sort((q,p)=>new Date(p.mySubmission.submitted_at).getTime()-new Date(q.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${m.length})</p>
        ${m.length?`<div class="space-y-2.5">${m.map(A).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${$.length})</p>
        ${$.length?`<div class="space-y-2.5">${$.map(A).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},ee=d.filter(Ge).length,l=i.filter(Ge).length;me(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${ee?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${ee}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${l?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${l}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${U(t==="sasana"?i:d)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(r=>{r.addEventListener("click",()=>la(e,r.dataset.grp))})}async function da(e,t,n="todo",o=null){me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const i=(await Ke(e.id,o==null?void 0:o.academicYear,o==null?void 0:o.semester).catch(()=>[])).find(a=>a.id===t);if(!i){me('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:u}=await kt(async()=>{const{getClassAnnouncements:a}=await import("./api-SQb2A_k_.js").then(c=>c.ez);return{getClassAnnouncements:a}},__vite__mapDeps([0,1,2,3])).catch(()=>({})),[{columns:y,scores:_},A,U,ee,l,r,m]=await Promise.all([is(e.id,t).catch(()=>({columns:[],scores:[]})),cs(e.id,t).catch(()=>[]),it(e.id).catch(()=>[]),u?u(t).catch(()=>[]):Promise.resolve([]),Bt(t,e.id).catch(()=>[]),ms(t,e.id).catch(()=>[]),us(t).catch(()=>[])]),$=await Dt(l.map(a=>a.id),e.id).catch(()=>new Set),q=window._pp5SystemCfg??await Oe().catch(()=>({})),p=Ms(q.semester_start),w=m.find(a=>p>=a.week_start&&p<=a.week_end),L=U.filter(a=>{var c;return((c=a.classes)==null?void 0:c.id)===t}),j=Object.fromEntries(_.map(a=>[a.assignment_id,a])),K=i.master_subjects,oe=K==null?void 0:K.teachers,ce=await Ut(t).catch(()=>(V("โหลดค่าปัดเลขร่วมไม่สำเร็จ","error"),null)),z=a=>es(y,a,c=>{var D,g;return((D=j[c])==null?void 0:D.final_score)??((g=j[c])==null?void 0:g.original_score)}),X=y.filter(Ze),be=y.filter(a=>a.column_type==="derived"),he=y.filter(a=>!bt(a)&&!Ze(a)&&!["override","derived"].includes(a.column_type)),$e=y.filter(a=>bt(a)&&!Ze(a)&&!["override","derived"].includes(a.column_type)),we=he.reduce((a,c)=>a+(c.max_score||0),0),Ee=$e.reduce((a,c)=>a+(c.max_score||0),0),Se=he.reduce((a,c)=>a+z(c),0),Ce=$e.reduce((a,c)=>a+z(c),0),_e=X.reduce((a,c)=>a+z(c),0),S=be.reduce((a,c)=>a+z(c),0),re=be.reduce((a,c)=>a+Number(c.max_score||0),0),Y=Se+Ce+S,de=Xt(ce,Y),C=we+Ee+re,ne=C>0?de/C*100:0,ue=y.filter(Zt),pe=ue.filter(a=>{const c=j[a.id];return a.column_type==="derived"||c&&(c.final_score!=null||c.original_score!=null)}),le=ue.length>0&&pe.length===ue.length,ge=A.length,ke=A.filter(a=>a.status==="present").length,x=ge>0?Math.round(ke/ge*100):null,k=a=>a>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:a>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:a>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},s=a=>a>=80?4:a>=75?3.5:a>=70?3:a>=65?2.5:a>=60?2:a>=55?1.5:a>=50?1:0,b=le&&C>0?{...k(ne),point:s(ne)}:null,E=a=>{const c=j[a.id],g=a.column_type==="derived"||c&&(c.final_score!=null||c.original_score!=null)?z(a):null,T=g!=null&&a.max_score>0?Math.round(g/a.max_score*100):null,F=(c==null?void 0:c.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${a.assignment_name}
        ${F?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${g!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${g!=null?et(ce,ts(a),g,a.column_type==="derived"?2:1):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${a.max_score!=null?"/"+a.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${g!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${a.max_score!=null?T!=null?T+"%":"—%":""}
      </td>
    </tr>`},h=(a,c,D,g,T)=>{if(!a.length)return"";const F=D>0?Math.round(c/D*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${T}</span>
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
            ${a.map(E).join("")}
            <tr class="${g}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${et(ce,a===he?"mid_subtotal":a===$e?"fin_subtotal":"bonus_subtotal",c)}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${D}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${F}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},N=Ks(i),f=()=>`
    <div class="${N.bg} ${N.border} border border-l-4 ${N.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${N.text} text-sm leading-tight">${(K==null?void 0:K.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${(K==null?void 0:K.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(oe==null?void 0:oe.full_name)??"—"} · ${je(i.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${C>0?et(ce,"total",Y):"—"}</p>
        <p class="text-[10px] text-gray-400">/${C} คะแนน</p>
        ${_e>0?`<p class="text-[10px] text-amber-500 font-medium">คะแนนพิเศษ ${_e.toFixed(1).replace(/\.0$/,"")} (แยก ไม่บวกยอดรวม)</p>`:""}
        ${b?`<div class="mt-1 flex items-center justify-end gap-1.5"><span class="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-extrabold">เกรด ${b.point.toFixed(1)}</span><span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${b.cls}">${b.label}</span></div>`:C>0?`<span class="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">ยังไม่สรุปเกรด (${pe.length}/${ue.length} หัวข้อ)</span>`:""}
      </div>
    </div>`,B=a=>{const c=He[a.status]??He.pending,D=a.class_score_columns,g=rt(a.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${a.request_type}</p>
          ${D?`<p class="text-[11px] text-gray-400 mt-0.5">${D.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${c.cls}">${c.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${Re(a.requested_date)}${a.requested_period_no?` · คาบ ${a.requested_period_no}`:""}${g?` · ${g}`:""}</p>
        ${a.reason?`<p>💬 ${a.reason}</p>`:""}
        ${a.teacher_comment?`<p class="${a.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${a.teacher_comment}</p>`:""}
      </div>
      ${a.status==="pending"?`
        <button onclick="window._stuCancelRequest(${a.id}, ${t})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},R=()=>{const a=[],c=r.filter(Ge);c.length>0&&a.push(`
        <button onclick="window._stuOpenClassTab(${t},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${c.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${c.length}</span>
        </button>`);const D=L.filter(v=>v.status==="pending");D.length>0&&D.forEach(v=>{const te=v.class_score_columns,xe=rt(v.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${v.request_type} — รอครูอนุมัติ</p>
              ${te?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${te.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${Re(v.requested_date)}${v.requested_period_no?` · คาบ ${v.requested_period_no}`:""}${xe?` · ${xe}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const g=L.filter(v=>v.status==="approved"&&v.exam_attended==null);g.length>0&&g.forEach(v=>{const te=v.class_score_columns,xe=rt(v.requested_date);a.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${v.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${te?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${te.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${Re(v.requested_date)}${v.requested_period_no?` · คาบ ${v.requested_period_no}`:""}${xe?` · ${xe}`:""}</p>
              ${v.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${v.teacher_comment}</p>`:""}
            </div>
          </div>`)}),l.forEach(v=>{const te=v.attempts.filter(fe=>fe.status==="submitted"||fe.status==="terminated_violation").reduce((fe,Ae)=>Math.max(fe,Ae.score_pct??0),null),xe=v.attempts.length&&v.attempts[v.attempts.length-1].status==="terminated_violation"?v.attempts[v.attempts.length-1]:null,qe=v.attempts.find(fe=>fe.status==="in_progress"),Le=v.attempts.filter(fe=>fe.status==="submitted"||fe.status==="terminated_violation").length;let ve="",Ie="";v.status==="announced"?ve='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':v.status==="started"&&$.has(v.id)?ve='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':v.status==="started"&&xe?ve='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':v.status==="started"&&qe?(ve='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">กำลังทำอยู่</span>',Ie=`<button onclick="window._stuStartQuiz('${v.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):v.status==="started"&&Le>=v.max_attempts?ve='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':v.status==="started"?(ve='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">เปิดสอบอยู่</span>',Ie=`<button onclick="window._stuStartQuiz('${v.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):v.status==="closed"&&(ve='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),a.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${W(v.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${v.num_questions} ข้อ${v.time_limit_minutes?` · ${v.time_limit_minutes} นาที`:""} · ทำได้ ${Le}/${v.max_attempts} ครั้ง</p>
            ${te!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${te.toFixed(1)}%</p>`:""}
            <div class="mt-1">${ve}</div>
            ${Ie}
          </div>
        </div>`)});const T=[i.day1_date,i.day2_date,i.day3_date,i.day4_date,i.day5_date,i.day6_date].filter(Boolean),F=new Date;F.setHours(0,0,0,0);const O=T.map(v=>{const te=new Date(v);return te.setHours(0,0,0,0),te}).filter(v=>v>=F).sort((v,te)=>v-te);if(O.length>0){const v=O[0],te=Math.round((v-F)/864e5),xe=te===0?"🔴 วันนี้!":te===1?"🟡 พรุ่งนี้":`⏰ อีก ${te} วัน`,qe=Je[v.getDay()]??"";a.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${qe}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${v.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${Re(Tt(v))}</p>
          </div>
          <span class="text-xs font-bold ${te===0?"text-red-500":te===1?"text-amber-500":"text-emerald-600"}">${xe}</span>
        </div>`)}const P={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},G=v=>{if(!v)return"";const te=new Date(v),qe=te-new Date,Le=Math.floor(qe/6e4),ve=te.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(qe<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${ve}</span>`;if(Le<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${Le} นาที · ${ve}</span>`;const Ie=Math.floor(Le/60);return Ie<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${Ie} ชม. ${Le%60} น. · ${ve}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(Ie/24)} วัน · ${ve}</span>`};return ee.length>0&&[...ee].sort((v,te)=>(te.priority||0)-(v.priority||0)).forEach(v=>{const te=P[v.ann_type]??P.general,xe=v.ann_type==="deadline"&&v.deadline_at?G(v.deadline_at):"";a.push(`
          <div class="rounded-2xl border ${te.border} ${te.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${te.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${v.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${te.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${v.title??""}</p>
                ${v.body?`<p class="text-xs text-gray-500 mt-1">${v.body}</p>`:""}
                ${xe?`<div class="mt-2">${xe}</div>`:""}
                ${v.file_url?`<a href="${v.file_url}" target="_blank" rel="noopener"
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
        </div>`}`},Q=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${C>0?`<span class="text-xs text-gray-400">${ne.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${y.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${h(he,Se,we,"bg-blue-50","📘 กลางภาค")}
            ${h($e,Ce,Ee,"bg-purple-50","📙 ปลายภาค")}
            ${h(be,S,re,"bg-indigo-50","🔢 คะแนนสูตร")}
            ${X.length?h(X,X.reduce((a,c)=>a+z(c),0),0,"bg-amber-50","⭐ คะแนนพิเศษ (ไม่รวมเกรด)"):""}
          </div>`}
    </div>
    ${ge>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${x!==null?`<span class="text-xs text-gray-400">${ke}/${ge} คาบ · ${x}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${A.map(a=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${a.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${Vs[a.status]??"bg-gray-50 text-gray-400"}">
            ${Qs[a.status]??"?"}
          </span>
        </div>`).join("")}
      </div>
    </div>`:""}`,M=()=>`
    <button onclick="window._stuOpenRequest(${t})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${L.length?`<div class="space-y-3">${L.map(B).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,se=a=>a?new Date(a).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",ie=(a,c)=>a.due_at?new Date(c).getTime()>new Date(a.due_at).getTime():!1,Z=a=>a.due_at?Date.now()>new Date(a.due_at).getTime():!1,I=a=>{var F,O;const c=a.mySubmission,D=(c==null?void 0:c.status)==="rejected",g=c?ie(a,c.submitted_at):!1,T=!c&&Z(a);return`<div class="bg-white rounded-2xl border ${D?"border-red-200":c?"border-emerald-100":T?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${W(a.title)}</p>
        ${D?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':c?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${g?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${g?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${T?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${T?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${a.description?`<p class="text-xs text-gray-500 mb-1.5">${W(a.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${se(a.due_at)}</p>
      ${(F=a.attachment_urls)!=null&&F.length?`<div class="flex flex-wrap gap-1.5 mb-2">${a.attachment_urls.map(P=>`<a href="${W(P.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${W(P.name)}</a>`).join("")}</div>`:""}
      ${(O=c==null?void 0:c.file_urls)!=null&&O.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(c.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${c.file_urls.map(P=>`<a href="${W(P.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${W(P.name)}</a>`).join("")}</div></div>`:""}
      ${Pt(c)}
      ${c!=null&&c.teacher_feedback?D?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${W(c.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${W(c.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${D?"bg-red-600 text-white hover:bg-red-700":c?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${a.id}">${D?"📤 ส่งแก้ไขใหม่":c?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},ae=n==="scores"?Q():n==="requests"?M():n==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${r.length?`<div class="space-y-3">${r.map(I).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:R();me(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${f()}
    ${w?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${p}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${W(w.topic)}</p>
      ${w.description?`<p class="text-xs text-indigo-400 mt-0.5">${W(w.description)}</p>`:""}
    </div>`:""}
    ${ae}
  `),window._stuCancelRequest=async(a,c=t)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await Ct(a),V("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(c,"requests")}catch(D){V("ยกเลิกไม่สำเร็จ: "+ye(D),"error")}},window._stuStartQuiz=async a=>{try{const c=await Nt(a,e.id).catch(()=>null);if(c&&c.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${c.id}`;return}const D=await At(a);window.location.href=`quiz-exam.html?attempt=${D.id}`}catch(c){V("เข้าสอบไม่สำเร็จ: "+ye(c),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(a=>{a.addEventListener("click",()=>{const c=r.find(D=>D.id===parseInt(a.dataset.aid,10));c&&J(c)})});function J(a){var D;(D=document.getElementById("stu-submit-modal"))==null||D.remove();const c=document.createElement("div");c.id="stu-submit-modal",c.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",c.innerHTML=`
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
      </div>`,document.body.appendChild(c),c.addEventListener("click",g=>{g.target===c&&c.remove()}),c.querySelector("#ss-close").addEventListener("click",()=>c.remove()),c.querySelector("#ss-submit").addEventListener("click",async()=>{var F;const g=[...c.querySelector("#ss-files").files??[]];if(!g.length&&!a.mySubmission){V("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const T=c.querySelector("#ss-submit");T.disabled=!0,T.textContent="กำลังส่ง...";try{const O=[];for(const G of g)O.push(await Ns(G,`class-${t}/student-${e.id}`));const P=O.length?O:((F=a.mySubmission)==null?void 0:F.file_urls)??[];await ps(a.id,e.id,P,c.querySelector("#ss-note").value.trim()||null),V("ส่งงานสำเร็จ ✅","success"),c.remove(),da(e,t,"assignments")}catch(O){V("ส่งงานไม่สำเร็จ: "+ye(O),"error"),T.disabled=!1,T.textContent="ส่งงาน"}})}}async function ia(e){me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const t=await it(e.id).catch(()=>[]),n=`<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`;if(!t.length){me(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${n}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`);return}me(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} รายการ)</span></h2>
    ${n}
    <div class="space-y-3">
      ${t.map(o=>{var y,_;const d=He[o.status]??He.pending,i=o.classes,u=o.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((y=i==null?void 0:i.master_subjects)==null?void 0:y.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((_=i==null?void 0:i.master_subjects)==null?void 0:_.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${d.cls}">${d.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${o.request_type}</span></p>
            ${u?`<p>📝 หัวข้อ: <span class="text-gray-700">${u.assignment_name}</span></p>`:""}
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
  `),window._stuCancelRequest=async o=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await Ct(o),V("ยกเลิกคำร้องแล้ว","success"),ia(e)}catch(d){V("ยกเลิกไม่สำเร็จ: "+ye(d),"error")}}}async function Gt(e){me('<div class="text-center py-12 text-gray-400">กำลังโหลดข้อมูลแจ้งลา...</div>');let t;try{t=await Ls(e.id)}catch(y){me(`<div class="rounded-2xl bg-white border border-red-100 p-5 text-sm text-red-600">โหลดรายการแจ้งลาไม่สำเร็จ: ${W(ye(y))}</div>`);return}const n={pending:"รอครูที่ปรึกษาตรวจ",approved:"ครูตรวจแล้ว · บันทึกเช็คชื่อ",rejected:"ไม่ผ่านการตรวจ",expired:"หมดอายุ · กรุณาส่งใหม่"},o={pending:"bg-amber-50 text-amber-700 border-amber-200",approved:"bg-emerald-50 text-emerald-700 border-emerald-200",rejected:"bg-red-50 text-red-600 border-red-200",expired:"bg-gray-100 text-gray-600 border-gray-200"},d={excused:"ก · ลากิจ",sick:"ป · ลาป่วย"},i=y=>y?new Date(`${y}T00:00:00`).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—";me(`<div class="max-w-2xl mx-auto space-y-4">
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
      ${t.length?t.map(y=>`<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div class="flex items-start justify-between gap-3">
          <div><p class="font-bold text-gray-800">${d[y.leave_type]??"ลา"}</p><p class="mt-1 text-xs text-gray-500">${i(y.start_date)}${y.end_date!==y.start_date?` – ${i(y.end_date)}`:""}</p></div>
          <span class="rounded-full border px-2.5 py-1 text-[11px] font-semibold ${o[y.status]??""}">${n[y.status]??y.status}</span>
        </div>
        ${y.reason?`<p class="mt-2 whitespace-pre-wrap text-xs text-gray-600">${W(y.reason)}</p>`:""}
        ${y.teacher_comment?`<p class="mt-2 rounded-lg bg-gray-50 p-2 text-xs text-gray-600">หมายเหตุครู: ${W(y.teacher_comment)}</p>`:""}
        <div class="mt-3 flex items-center justify-between gap-2">
          <button type="button" class="student-leave-proof text-xs font-semibold text-indigo-600 hover:text-indigo-800" data-proof-path="${W(y.proof_path??"")}" ${y.proof_path?"":"disabled"}>${y.proof_path?"เปิดใบลาที่แนบ":"ไฟล์หลักฐานถูกลบแล้ว"}</button>
          ${y.status==="approved"?`<span class="text-[11px] text-emerald-700">บันทึกสถานะเช็คชื่อแล้ว ${Number(y.attendance_rows_count)||0} รายการ</span>`:""}
        </div>
      </article>`).join(""):'<div class="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-400">ยังไม่มีรายการแจ้งลา</div>'}
    </section>
  </div>`);const u=document.getElementById("student-leave-form");u==null||u.addEventListener("submit",async y=>{y.preventDefault();const _=new FormData(u),A=u.querySelector('[type="submit"]'),U=String(_.get("start_date")??""),ee=String(_.get("end_date")??"");if(U>ee){V("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มลา","warning");return}A.disabled=!0,A.textContent="กำลังส่ง...";try{await js(e,{leaveType:_.get("leave_type"),startDate:U,endDate:ee,reason:_.get("reason"),file:_.get("proof")}),V("ส่งใบลาให้ครูที่ปรึกษาตรวจแล้ว","success"),await Gt(e)}catch(l){V(`ส่งใบลาไม่สำเร็จ: ${ye(l)}`,"error"),A.disabled=!1,A.textContent="ส่งใบลา"}}),document.querySelectorAll(".student-leave-proof").forEach(y=>y.addEventListener("click",async()=>{try{const _=await Cs(y.dataset.proofPath);_&&window.open(_,"_blank","noopener")}catch(_){V(`เปิดหลักฐานไม่สำเร็จ: ${ye(_)}`,"error")}}))}async function Pa(e,t){var Se,Ce,_e;me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[n,o]=await Promise.all([Ke(e.id).catch(()=>[]),rs(e.id).catch(()=>0)]),d=n.find(S=>S.id===t);if(!d){me('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(o>=2){me(`
      <button onclick="window._stuOpenClassTab(${t},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const i=o===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",u=d.master_subjects,y=u==null?void 0:u.teacher_id,_=u==null?void 0:u.teachers,A=y?(_==null?void 0:_.full_name)??"ครูผู้สอน":"ครูผู้สอน",U=String(A||"ค").trim().charAt(0).toUpperCase()||"ค",ee=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||d.class_name||"—";let l=null;const[r,m,$]=await Promise.all([ns(t).catch(()=>[]),y?os(y,t).catch(S=>(l=S,[])):Promise.resolve([]),ls().catch(()=>[])]),q=r.filter(S=>S.column_type!=="override"),p={};for(const S of m){p[`${S.day_of_week}_${S.period_no}`]=S;const re=S.span_periods??1;for(let Y=1;Y<re;Y++)p[`${S.day_of_week}_${S.period_no+Y}`]={...S,_secondary:!0}}const w=m.length>0;if(!w){me(`
      <button onclick="window._stuOpenClassTab(${t}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(u==null?void 0:u.subject_name)??""} · ${je(d.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${y?l?`ระบบอ่านตารางครูไม่สำเร็จ: ${l.message??l}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${y?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const L="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",j=L+" cursor-pointer";let K=null,oe=0;const ce=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],z=(S,re,Y=null)=>{const de=String(S??"").trim(),C=String(re??"").trim();return de&&C?`${de} — ${C}`:de||(Y!=null?String(Y):"")},X=S=>{const re=ce[S%ce.length];return`${re.bg} ${re.text}`};let be={};try{be=JSON.parse(localStorage.getItem(`scheduleColors_${y??"x"}`)??"{}")}catch{}const he={};let $e=0;m.forEach(S=>{const re=z(S.subject_name,S.class_name,S.subject_id);if(!re||he[re]!=null)return;const Y=be[re]??be[S.subject_id]??be[S.subject_name],de=Number(Y);he[re]=Number.isFinite(de)?de:$e++});const we=(S=0)=>{const re=[0,1,2,3,4,5],Y={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},de={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},C=nt(S),ne=new Date;ne.setHours(0,0,0,0);const ue=re.map(le=>{const ge=C[le];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${de[le]}">
        <p class="text-sm font-bold text-gray-700">${Y[le]}</p>
        <p class="text-xs text-gray-400">${ge.getDate()}/${ge.getMonth()+1}</p>
      </th>`}).join(""),pe=$.map(le=>{var k,s;const ge=((k=le.start_time)==null?void 0:k.slice(0,5))??"",ke=((s=le.end_time)==null?void 0:s.slice(0,5))??"",x=re.map(b=>{const E=`${b}_${le.period_no}`,h=p[E];if(h!=null&&h._secondary)return"";const f=C[b]<ne;if(!h)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${le.period_no}" data-day="${b}" data-week-offset="${S}"
              ${f?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${f?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${f?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${f?"ล็อก":"＋"}</span>
            </button>
          </td>`;const B=h.span_periods??1,R=z(h.subject_name,h.class_name,h.subject_id),Q=he[R]??0,M=X(Q);return`<td class="border border-gray-100 p-0" style="height:1px" ${B>1?`rowspan="${B}"`:""}>
          <div class="w-full h-full ${M} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${h.subject_name??"ไม่ว่าง"}</p>
            ${h.class_name?`<p class="text-[10px] opacity-80 leading-tight">${je(h.class_name)}</p>`:""}
            ${h.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${h.teacher_name}</p>`:""}
            ${B>1?`<p class="text-[9px] opacity-40 mt-0.5">${B} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${le.period_no}</p>
          <p class="text-[10px] text-gray-400">${ge}–${ke}</p>
        </td>
        ${x}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${ue}
          </tr>
        </thead>
        <tbody>${pe}</tbody>
      </table>
    </div>`},Ee=S=>{const re=nt(S);return`${S===0?"สัปดาห์นี้":S===1?"สัปดาห์หน้า":`อีก ${S} สัปดาห์`} (${We(re[0])} - ${We(re[5])})`};if(me(`
    <button onclick="window._stuOpenClass(${t})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(u==null?void 0:u.subject_name)??""} · ${je(d.class_name)}</p>
      ${i}

      ${w?`
      <div id="schedule-first-gate" class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-bold text-emerald-800">เลือกคาบว่างของครูก่อน</p>
        <p class="mt-1 text-xs text-emerald-600">ระบบจะเปิดตารางสอนให้เลือกวันและคาบ แล้วค่อยกรอกข้อมูลคำร้องต่อ</p>
      </div>`:""}

      <form id="req-form" class="space-y-4 ${w?"hidden":""}">
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
          <select id="req-col" class="${j}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${q.map(S=>`<option value="${S.id}">${S.assignment_name} (${S.assignment_type} · เต็ม ${S.max_score})</option>`).join("")}
          </select>
        </div>

        <!-- Schedule grid / manual date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันและคาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${w?`
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
                min="${Tt(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${j}" required>
                <option value="">— เลือกคาบ —</option>
                ${$.map(S=>`<option value="${S.period_no}">คาบ ${S.period_no} (${S.start_time.slice(0,5)}–${S.end_time.slice(0,5)})</option>`).join("")}
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
    ${w?`
      <div id="teacher-schedule-modal" class="hidden fixed inset-0 z-[120] bg-black/50 p-4 items-center justify-center">
        <div class="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold shadow-sm">
                ${_!=null&&_.image_url?`<img src="${_.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${U}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${A} · ${(u==null?void 0:u.subject_name)??""}</p>
                <p class="text-[11px] text-gray-400 mt-0.5 truncate">นักเรียน ${(e==null?void 0:e.full_name)??"—"} · รหัส ${(e==null?void 0:e.student_code)??"—"} · ห้อง ${ee}</p>
              </div>
            </div>
            <button type="button" id="close-schedule-modal"
              class="w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600">×</button>
          </div>
          <div class="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p class="text-[11px] text-emerald-600 font-medium">กรุณาเลือกคาบว่างก่อนกรอกคำร้อง · ช่องว่างที่ไม่ถูกล็อกเลือกได้</p>
            <select id="schedule-week-select"
              class="border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200">
              ${[0,1,2,3,4].map(S=>`<option value="${S}">${Ee(S)}</option>`).join("")}
            </select>
          </div>
          <div id="schedule-grid-wrap">${we(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(S=>{S.addEventListener("change",()=>{var de;const re=document.getElementById("req-reason-wrap"),Y=S.value==="สอบย้อนหลัง";re.classList.toggle("hidden",!Y),(de=document.getElementById("req-reason"))==null||de.toggleAttribute("required",Y)})}),w){const S=document.getElementById("teacher-schedule-modal");(Se=document.getElementById("open-schedule-modal"))==null||Se.addEventListener("click",()=>{S==null||S.classList.remove("hidden"),S==null||S.classList.add("flex")}),(Ce=document.getElementById("close-schedule-modal"))==null||Ce.addEventListener("click",()=>{var Y;if(!K){(Y=window._stuOpenClassTab)==null||Y.call(window,t,"requests");return}S==null||S.classList.add("hidden"),S==null||S.classList.remove("flex")}),S==null||S.addEventListener("click",Y=>{Y.target===S&&K&&(S.classList.add("hidden"),S.classList.remove("flex"))});const re=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(Y=>{Y.addEventListener("click",()=>{var x,k;const de=parseInt(Y.dataset.period),C=parseInt(Y.dataset.day),ne=parseInt(Y.dataset.weekOffset??oe),pe=nt(ne)[C];K={period_no:de,day_of_week:C,date:pe,week_offset:ne},document.getElementById("req-date").value=Te(pe),document.getElementById("req-period-hidden").value=de;const le=document.getElementById("period-summary"),ge=document.getElementById("period-summary-text");le==null||le.classList.remove("hidden"),ge&&(ge.textContent=`คาบ ${de} วัน${Je[C]??""} ${We(pe)}`);const ke=document.getElementById("schedule-picker-label");ke&&(ke.textContent=`เลือกคาบ ${de} วัน${Je[C]??""} ${We(pe)} แล้ว`),(x=document.getElementById("schedule-first-gate"))==null||x.classList.add("hidden"),(k=document.getElementById("req-form"))==null||k.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(s=>{s.classList.toggle("ring-2",s===Y),s.classList.toggle("ring-emerald-500",s===Y),s.classList.toggle("bg-emerald-200",s===Y)}),S==null||S.classList.add("hidden"),S==null||S.classList.remove("flex")})})};re(),(_e=document.getElementById("schedule-week-select"))==null||_e.addEventListener("change",Y=>{oe=parseInt(Y.target.value||"0");const de=document.getElementById("schedule-grid-wrap");de&&(de.innerHTML=we(oe)),re()}),setTimeout(()=>{S==null||S.classList.remove("hidden"),S==null||S.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async S=>{var pe,le,ge,ke,x;S.preventDefault();const re=document.getElementById("req-submit"),Y=(pe=document.querySelector('input[name="req_type"]:checked'))==null?void 0:pe.value,de=document.getElementById("req-col").value,C=((le=document.getElementById("req-reason"))==null?void 0:le.value.trim())||null,ne=(ge=document.getElementById("req-date"))==null?void 0:ge.value,ue=w?(ke=document.getElementById("req-period-hidden"))==null?void 0:ke.value:(x=document.getElementById("req-period-sel"))==null?void 0:x.value;if(!Y||!de||!ne||!ue){if(V("กรุณากรอกข้อมูลให้ครบ","warning"),w&&!ue){V("กรุณาเลือกคาบว่างจากตารางครู","warning");const k=document.getElementById("teacher-schedule-modal");k==null||k.classList.remove("hidden"),k==null||k.classList.add("flex")}return}if(Y==="สอบย้อนหลัง"&&!C){V("กรุณาระบุเหตุผล","warning");return}re.disabled=!0,re.textContent="กำลังยื่น...";try{await ds({student_id:e.id,class_id:t,assignment_id:parseInt(de),request_type:Y,requested_date:ne,requested_period_no:parseInt(ue),reason:Y==="สอบย้อนหลัง"?C:null,status:"pending"}),V("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(t,"requests")}catch(k){V("ยื่นไม่สำเร็จ: "+ye(k),"error")}finally{re.disabled=!1,re.textContent="ยื่นคำร้อง"}})}async function Ra(e,t){var y,_,A,U,ee;const n=()=>`
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
      </div>`;me(`
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
      ปพ.5 ออนไลน์ © 2026 v${Wt}
    </p>
  `),(y=document.getElementById("btn-stu-my-certificates-profile"))==null||y.addEventListener("click",()=>Rt(e)),(_=document.getElementById("btn-stu-leave-request"))==null||_.addEventListener("click",()=>Gt(e)),(A=document.getElementById("btn-stu-contact-admin"))==null||A.addEventListener("click",()=>{var l;(l=window._openFeedbackWidget)==null||l.call(window)}),(U=document.getElementById("btn-stu-pw-reset"))==null||U.addEventListener("click",()=>{o()});function o(){var r;(r=document.getElementById("pw-choice-modal"))==null||r.remove();const l=document.createElement("div");l.id="pw-choice-modal",l.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",l.innerHTML=`
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
      </div>`,document.body.appendChild(l),l.addEventListener("click",m=>{m.target===l&&l.remove()}),l.querySelector("#pwc-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#pwc-self").addEventListener("click",()=>{l.remove(),i()}),l.querySelector("#pwc-admin").addEventListener("click",()=>{l.remove(),d(e)})}function d(l){var ce;(ce=document.getElementById("stu-password-reset-request-modal"))==null||ce.remove();const r=document.createElement("div");r.id="stu-password-reset-request-modal",r.className="fixed inset-0 z-[500] overflow-y-auto bg-white sm:flex sm:items-center sm:justify-center sm:bg-black/60 sm:p-4",r.innerHTML=`
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
      </div>`,document.body.appendChild(r);let m="self",$=l;const q=r.querySelector("[data-request-code]"),p=r.querySelector("[data-request-preview]"),w=r.querySelector("[data-request-warning]"),L=r.querySelector("[data-request-result]"),j=r.querySelector("[data-request-submit]"),K=()=>{const z=$;if(!z){p.classList.add("hidden"),p.innerHTML="";return}const X=z.image_url||z.photo_url;p.classList.remove("hidden"),p.innerHTML=`<div class="flex items-center gap-3">${X?`<img src="${W(X)}" alt="" class="h-16 w-14 rounded-xl border border-gray-200 object-cover">`:`<div class="grid h-16 w-14 place-items-center rounded-xl bg-indigo-50 font-bold text-indigo-600">${W((z.full_name||"?").charAt(0))}</div>`}<div><p class="font-bold text-gray-800">${W(z.full_name||"")}</p><p class="text-sm text-gray-500">${W(z.student_code||"")} · ${W(z.main_room||z.religion_room||"—")}</p></div></div>`},oe=z=>{m=z,r.querySelectorAll("[data-request-kind]").forEach(X=>{const be=X.dataset.requestKind===z;X.className=`rounded-xl border px-3 py-3 text-sm font-semibold ${be?"border-indigo-300 bg-indigo-50 text-indigo-700":"border-gray-200 text-gray-500"}`}),z==="self"?($=l,q.value=l.student_code||"",q.readOnly=!0,w.textContent="ครูจะรีเซ็ตรหัสของคุณหลังตรวจสอบตัวตนต่อหน้า และจะแจ้งรหัสชั่วคราวให้คุณโดยตรง",r.querySelector("[data-request-search]").classList.add("hidden")):($=null,q.value="",q.readOnly=!1,w.textContent="คุณต้องพาเพื่อนเจ้าของบัญชีมาพบครูที่ปรึกษาด้วยตนเอง ครูจะยืนยันความยินยอมก่อนรีเซ็ต และจะบอกรหัสใหม่กับเพื่อนโดยตรง",r.querySelector("[data-request-search]").classList.remove("hidden")),L.classList.add("hidden"),K()};r.querySelectorAll("[data-request-kind]").forEach(z=>z.addEventListener("click",()=>oe(z.dataset.requestKind))),r.querySelector("[data-request-close]").addEventListener("click",()=>r.remove()),r.querySelector("[data-request-search]").addEventListener("click",async()=>{const z=q.value.trim();if(!z){V("กรุณากรอกรหัสนักเรียนของเพื่อน","warning");return}try{if($=await ot(z),!$)throw new Error("ไม่พบนักเรียนรหัสนี้");K()}catch(X){V(ye(X)||"ค้นหานักเรียนไม่สำเร็จ","error")}}),j.addEventListener("click",async()=>{if(!$||q.value.trim()!==String($.student_code)){V(m==="friend"?"กรุณาค้นหาเพื่อนก่อนส่งคำขอ":"ตรวจสอบรหัสนักเรียนไม่สำเร็จ","warning");return}j.disabled=!0,j.textContent="กำลังส่งคำขอ...";try{await qs(q.value,m),L.className="rounded-xl bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-800",L.textContent=m==="friend"?"ส่งคำขอแล้ว กรุณาพาเพื่อนเจ้าของบัญชีมาพบครูที่ปรึกษาเพื่อยืนยันตัวตนและความยินยอม":"ส่งคำขอแล้ว กรุณามาพบครูที่ปรึกษาเพื่อยืนยันตัวตนและรับรหัสชั่วคราว",L.classList.remove("hidden"),j.textContent="ส่งคำขอแล้ว"}catch(z){V(`ส่งคำขอไม่สำเร็จ: ${ye(z)}`,"error"),j.disabled=!1,j.textContent="ส่งคำขอให้ครูที่ปรึกษา"}}),oe("self")}function i(){var r;(r=document.getElementById("self-pw-modal"))==null||r.remove();const l=document.createElement("div");l.id="self-pw-modal",l.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",l.innerHTML=`
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
      </div>`,document.body.appendChild(l),l.addEventListener("click",m=>{m.target===l&&l.remove()}),l.querySelector("#self-pw-close").addEventListener("click",()=>l.remove()),l.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const m=l.querySelector("#btn-stu-save-pw"),$=l.querySelector("#stu-new-pw").value,q=l.querySelector("#stu-new-pw-confirm").value,p=l.querySelector("#stu-pw-msg"),w=(L,j)=>{p.className=`text-xs text-center py-2.5 rounded-xl ${j?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,p.textContent=L,p.classList.remove("hidden")};if(!$||$.length<6){w("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if($!==q){w("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}m.disabled=!0,m.textContent="กำลังบันทึก...",p.classList.add("hidden");try{const{error:L}=await Be.auth.updateUser({password:$});if(L)throw L;w("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),l.querySelector("#stu-new-pw").value="",l.querySelector("#stu-new-pw-confirm").value=""}catch(L){w("ไม่สำเร็จ: "+ye(L),!0)}finally{m.disabled=!1,m.textContent="บันทึกรหัสผ่านใหม่"}})}(ee=document.getElementById("stu-logout-btn"))==null||ee.addEventListener("click",()=>{var r;(r=document.getElementById("stu-logout-confirm"))==null||r.remove();const l=document.createElement("div");l.id="stu-logout-confirm",l.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",l.innerHTML=`
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
      </div>`,document.body.appendChild(l),l.querySelector("#stu-logout-cancel").addEventListener("click",()=>l.remove()),l.addEventListener("click",m=>{m.target===l&&l.remove()}),l.querySelector("#stu-logout-confirm-btn").addEventListener("click",t)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{ma(e)});const u=()=>{var r,m;(r=document.getElementById("qr-request-confirm"))==null||r.remove(),(m=document.getElementById("qr-request-existing"))==null||m.remove();const l=document.createElement("div");l.id="qr-request-existing",l.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",l.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <h3 class="text-base font-bold text-gray-800">คุณเคยแจ้งขอทำบัตรแล้ว</h3>
        <p class="text-sm text-gray-600 leading-relaxed">กรุณารอแอดมินดำเนินการ และติดตามข้อความตอบกลับในหน้าข้อความเพื่อมารับ QR Code</p>
        <div class="flex gap-2">
          <button id="qr-request-existing-close" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
          <button id="qr-request-existing-messages" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ไปที่ข้อความ</button>
        </div>
      </div>`,document.body.appendChild(l),l.addEventListener("click",$=>{$.target===l&&l.remove()}),l.querySelector("#qr-request-existing-close").addEventListener("click",()=>l.remove()),l.querySelector("#qr-request-existing-messages").addEventListener("click",()=>{var $;l.remove(),($=window._openFeedbackWidget)==null||$.call(window,void 0,void 0,"history")})};document.getElementById("btn-request-qr-card").addEventListener("click",async()=>{var r;try{if(await xt(e.id)){u();return}}catch(m){V("ตรวจสอบคำขอเดิมไม่สำเร็จ: "+ye(m),"error");return}(r=document.getElementById("qr-request-confirm"))==null||r.remove();const l=document.createElement("div");l.id="qr-request-confirm",l.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",l.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(l),l.addEventListener("click",m=>{m.target===l&&l.remove()}),l.querySelector("#qr-request-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#qr-request-ok").addEventListener("click",async()=>{const m=l.querySelector("#qr-request-ok");m.disabled=!0,m.textContent="กำลังส่ง...";try{if(await xt(e.id)){u();return}await Yt({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),Jt({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),l.remove(),V("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch($){if(($==null?void 0:$.code)==="23505"||String(($==null?void 0:$.message)??"").includes("QR_REISSUE_REQUEST_ALREADY_OPEN")){u();return}m.disabled=!1,m.textContent="ยืนยัน",V("ส่งไม่สำเร็จ: "+ye($),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var be;const l=window._pp5SystemCfg??await Oe().catch(()=>({})),r=parseInt(l.studentQrDailyLimit||"3",10),m=parseInt(l.studentQrExpirySeconds||"60",10),$=`qr_generation_logs_${e.id}`,q=Te(new Date);let p=JSON.parse(localStorage.getItem($)||"null");if((!p||p.date!==q)&&(p={date:q,count:0}),p.count>=r){V(`คุณสร้าง QR Code ครบโควต้า ${r} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}p.count+=1,localStorage.setItem($,JSON.stringify(p)),(be=document.getElementById("student-qr-modal"))==null||be.remove();const w=document.createElement("div");w.id="student-qr-modal",w.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",w.innerHTML=`
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
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${m}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${r-p.count} / ${r} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(w);const L=w.querySelector("#student-qr-canvas"),j=Math.floor(Date.now()/1e3),K=`SQ:${e.student_code}:${j}`;try{await As.toCanvas(L,K,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(he){console.error("Failed to draw QR Code:",he),V("สร้าง QR Code ไม่สำเร็จ","error"),w.remove();return}let oe=m;const ce=w.querySelector("#qr-timer-bar"),z=w.querySelector("#qr-timer-sec"),X=setInterval(()=>{oe-=1,z&&(z.textContent=oe),ce&&(ce.style.width=`${oe/m*100}%`),oe<=0&&(clearInterval(X),w.remove(),V("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);w.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(X),w.remove()})})}const ca={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function ma(e){var o;(o=document.getElementById("student-leave-modal"))==null||o.remove();const t=document.createElement("div");t.id="student-leave-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",t.innerHTML=`
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
  `,document.body.appendChild(t);const n=()=>{t._leaveTimer&&clearInterval(t._leaveTimer),t.remove()};t.querySelector("#btn-leave-modal-close").addEventListener("click",n),pa(e,t)}function ua(e,t){e.querySelectorAll(".leave-tab-btn").forEach(n=>{const o=n.dataset.leaveTab===t;n.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${o?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function pa(e,t){const n=t.querySelector("#student-leave-body");let o="permit";try{const[d,i]=await Promise.all([Ss(e.id),ks(e.id)]),u=i.filter(l=>l.status==="overdue").length,y=u>=3?"danger":u>=1?"warning":"safe",_=ca[y],A=()=>{var r,m,$,q;let l="";if(d){const p=((m=(r=d.classes)==null?void 0:r.master_subjects)==null?void 0:m.subject_name)||(($=d.classes)==null?void 0:$.class_name)||"—";l=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${W(p)} · เหตุผล: ${W(d.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${W(((q=d.teachers)==null?void 0:q.full_name)||"—")}</p>
          </div>
        `}return`
        <div class="rounded-2xl ${_.badgeBg} border ${_.border} px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">สถานะปัจจุบัน</p>
            <p class="text-sm font-extrabold ${_.badgeText} mt-0.5">${_.label}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">เลยเวลา/ไม่กลับ</p>
            <p class="text-sm font-extrabold ${_.badgeText} mt-0.5">${u}/3 ครั้ง</p>
          </div>
        </div>
        ${l}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},U=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${i.length?i.map(r=>{var w,L,j;const m=((L=(w=r.classes)==null?void 0:w.master_subjects)==null?void 0:L.subject_name)||((j=r.classes)==null?void 0:j.class_name)||"—",$=r.status==="active"?"🚪 กำลังออก":r.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",q=r.status==="active"?"text-amber-600":r.status==="overdue"?"text-red-600":"text-emerald-600",p=new Date(r.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${W(m)}</span>
                  <span class="text-[10px] font-bold ${q}">${$}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${p} · ${W(r.reason)} · ${r.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,ee=()=>{if(n.innerHTML=o==="permit"?A():U(),ua(t,o),t.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${o==="permit"?_.border:"border-transparent"}`,o==="permit"&&d){const l=n.querySelector("#student-leave-active-card"),r=n.querySelector("#student-leave-active-label"),m=n.querySelector("#student-leave-active-timer"),$=n.querySelector("#student-leave-active-detail"),q=n.querySelector("#student-leave-active-teacher"),p=()=>{const w=Ds(d.created_at,d.allowed_duration);m&&(m.textContent=w.timerText),w.isOverdue&&l&&!l.classList.contains("bg-red-50")&&(l.classList.remove("border-amber-200","bg-amber-50"),l.classList.add("border-red-200","bg-red-50","animate-pulse"),r&&(r.textContent="⛔ เลยเวลา",r.classList.replace("text-amber-700","text-red-700")),m&&m.classList.replace("text-amber-700","text-red-700"),$&&$.classList.replace("text-amber-800","text-red-800"),q&&q.classList.replace("text-amber-600","text-red-600")),w.isBeyondLimit&&l&&l.classList.remove("animate-pulse")};p(),t._leaveTimer=setInterval(p,1e3)}};t.querySelectorAll(".leave-tab-btn").forEach(l=>{l.addEventListener("click",()=>{t._leaveTimer&&clearInterval(t._leaveTimer),o=l.dataset.leaveTab,ee()})}),ee()}catch(d){n.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${W(ye(d))}</p>`}}async function Qt(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const n=document.createElement("script");n.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",n.onload=()=>e(window.Html5Qrcode),n.onerror=o=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(n)})}const xa="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",ba="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let Ue=null;function ga(){return Ue||(Ue=new Promise((e,t)=>{var o,d;if((d=(o=window.google)==null?void 0:o.accounts)!=null&&d.id){e();return}const n=document.createElement("script");n.src="https://accounts.google.com/gsi/client",n.async=!0,n.defer=!0,n.onload=()=>e(),n.onerror=()=>t(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(n)}),Ue)}function Ha(){var o;(o=document.getElementById("stu-email-link-modal"))==null||o.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e);const t=(d,i)=>{const u=e.querySelector("#sel-msg");u.className=`text-xs text-center py-2.5 rounded-xl ${i?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,u.textContent=d,u.classList.remove("hidden")},n=async(d,i,u)=>{i&&(i.disabled=!0);try{await qt(d),t(`เชื่อมอีเมล ${d} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(y){t("ไม่สำเร็จ: "+ye(y),!0),i&&(i.disabled=!1,i.textContent=u)}};ga().then(()=>{window.google.accounts.id.initialize({client_id:xa,ux_mode:"redirect",login_uri:ba}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",d=>{d.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const d=e.querySelector("#sel-save"),i=e.querySelector("#sel-email").value.trim(),u=e.querySelector("#sel-email-confirm").value.trim();if(!i||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){t("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(i!==u){t("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}d.textContent="กำลังบันทึก...",await n(i,d,"เชื่อมอีเมล")})}async function Oa(e){try{await qt(e),V(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(t){V("เชื่อมอีเมลไม่สำเร็จ: "+ye(t),"error")}}const $t={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},St={};function Me(e="success",t=null){try{const n=$t[e]?e:"error",o=t==="หญิง"?"female":"male",d=`${n}_${o}`;let i=St[d];if(!i){const u="/pp5online/";i=new Audio(`${u}sounds/${$t[n][o]}`),St[d]=i}i.currentTime=0,i.volume=1,i.play().catch(u=>console.warn("Play scan sound failed:",u))}catch(n){console.error("Play scan sound failed",n)}}function dt(e,t){const o=Ft(t==null?void 0:t.semester_start,[]).find(d=>d.days.some(i=>i.ds===e));return o?o.n:1}async function za(e,t={}){var x,k;const{authorizedByCouncil:n=!1,onBack:o=null}=t,d=e;window._lastSuccessFeedbackHTML="",me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[i,u]=await Promise.all([Oe().catch(()=>({})),ss().catch(()=>[])]);window._pp5SystemCfg=i;let y=!1;if(n)y=!0;else if(e.student_code)y=zt(e,i);else if(e.teacher_code){const s=(i.prayerScannerTeachers||"").split(/[\s,]+/).map(E=>E.trim()).filter(Boolean);let b=null;try{const E=await Be.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();b=(E==null?void 0:E.data)??null}catch{}y=s.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(b==null?void 0:b.role)==="admin"}if(!y){me(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const _=!!e.teacher_code,A=!_&&Ot(e,i),U=ct(i,A);if(!_&&!Fe(i,A)){me(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-100 text-3xl">
          🕌
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">นอกช่วงเวลาบันทึกกิจกรรมละหมาด</h3>
        <p class="text-xs text-gray-500 leading-relaxed">
          ระบบสแกนเปิดให้บันทึกเวลาเฉพาะช่วงเวลา <b>${U.startLabel} น. ถึง ${U.endLabel} น.</b> เท่านั้น<br>
          (ยกเว้นคุณครูที่สามารถเข้าใช้งานได้ตลอดเวลา)
        </p>
        <button id="scanner-btn-back-restricted" class="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl active:scale-95 transition-all shadow-sm">
          ← กลับหน้าหลัก
        </button>
      </div>`),(x=document.getElementById("scanner-btn-back-restricted"))==null||x.addEventListener("click",()=>{o?o():window._stuNav("overview")});return}const ee=document.querySelector("nav.safe-area-bottom");ee&&ee.classList.add("hidden");const l=document.getElementById("sidebar"),r=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(l&&l.classList.add("hidden"),r&&r.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const m=Te(new Date);let $=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");$=$.filter(s=>s.check_date===m),localStorage.setItem("prayer_scan_history_today",JSON.stringify($)),$.forEach(s=>window._syncedStudentIdsToday.add(s.student_id));let q=localStorage.getItem("prayer_scan_input_mode")||"camera",p=localStorage.getItem("prayer_scan_device_mode")||"single";const w=Ws(e),L=localStorage.getItem("prayer_scan_active_location");let j=w.some(s=>s.id===L)?L:((k=w[0])==null?void 0:k.id)||"musolla_male",K=localStorage.getItem("prayer_scan_record_status")||"pray",oe=!1,ce=!1,z=!1,X=localStorage.getItem("prayer_scan_result_columns")==="one"?"one":"two";const be="/pp5online/prayer-scanner-amanah.png";function he(){var c,D;const s=Te(new Date),b=dt(s,i),E=w.map(g=>`
      <option value="${g.id}" ${j===g.id?"selected":""}>${g.icon} ${g.label}${g.detail?` (${g.detail})`:""}</option>
    `).join(""),h=w.map(g=>`
      <option value="${g.id}">${g.icon} ${g.label}${g.detail?` (${g.detail})`:""}</option>
    `).join(""),N=`
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

      ${_?"":`
      <div id="scanner-amanah-modal" class="fixed inset-0 z-[90] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
        <div class="w-full max-w-3xl max-h-[92vh] overflow-hidden bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col">
          <div class="flex-1 overflow-y-auto bg-emerald-950/5">
            <img id="scanner-amanah-poster" src="${be}" alt="นาซีฮัทถึงนักเรียนแกนนำผู้รับผิดชอบการสแกนละหมาด"
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

      ${_?"":`
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
              ${h}
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
          <p class="text-xs text-gray-400 mt-0.5">ผู้สแกน: ${e.full_name} · สัปดาห์ที่ ${b}</p>
        </div>
      </div>

      <div id="scanner-countdown-panel" class="${_?"bg-indigo-50 border-indigo-100 text-indigo-700":"bg-emerald-50 border-emerald-100 text-emerald-800"} rounded-3xl border-2 px-5 py-5 mb-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left shadow-md transition-colors">
        <div class="min-w-0">
          <p class="text-xs font-extrabold uppercase tracking-wider opacity-80">${_?"สิทธิ์คุณครู":A?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-sm font-bold mt-1">${_?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${U.startLabel} - ${U.endLabel} น.`}</p>
        </div>
        <div class="min-w-[190px] rounded-2xl border border-white bg-white/90 px-6 py-3 text-center shadow-inner">
          <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">เวลาคงเหลือ</p>
          <p id="scanner-countdown" class="mt-1 font-mono text-5xl font-black leading-none tracking-wider ${_?"text-indigo-700":"text-emerald-700"} tabular-nums">${_?"∞":"--:--"}</p>
        </div>
      </div>

      <!-- Settings panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">ช่องทางสแกน</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-input-camera" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${q==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📷 ใช้กล้อง
              </button>
              <button id="opt-input-gun" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${q==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
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
            ${E}
          </select>
        </div>

        ${e.gender==="หญิง"||e.teacher_code?`
        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📝 สถานะบันทึกเมื่อสแกน (Record Status)</label>
          <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
            <button id="opt-status-pray" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${K==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟢 ละหมาดปกติ
            </button>
            <button id="opt-status-usor" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${K==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
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
      <div id="scanner-view-camera" class="relative overflow-hidden bg-slate-950 rounded-3xl w-full max-w-sm mx-auto aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4 ${q==="camera"?"":"hidden"}">
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

      <div id="scanner-view-gun" class="border border-dashed border-gray-300 bg-white rounded-3xl py-12 px-6 text-center shadow-sm mb-4 transition-all relative ${q==="gun"?"":"hidden"}">
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
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const g=parseInt(i.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(g)?Math.max(0,g):2})()} ครั้ง/เดือน/คน</p>
      </div>

      <!-- Active Check-In Popup Overlay -->
      <div id="scanner-feedback-container" class="hidden my-4 relative z-30 transition-all duration-300"></div>

      <!-- Roster Lookup Status -->
      <div id="roster-status" class="px-4 py-2 bg-gray-100 rounded-xl text-center text-[10px] text-gray-400 mb-4 border border-gray-200/50">
        บัญชีรายชื่อสภานักเรียน: โหลดแล้ว ${u.length} คน
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
    `,f=document.getElementById("stu-content")||document.getElementById("main-content");f&&(f.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${N}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{_e(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),ee&&ee.classList.remove("hidden");const g=document.getElementById("sidebar"),T=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(g&&g.classList.remove("hidden"),T&&T.classList.add("md:ml-64"),o){o();return}e.teacher_code?kt(async()=>{const{renderPrayerAdmin:F}=await import("./views-BWuZhE4S.js").then(O=>O.N);return{renderPrayerAdmin:F}},__vite__mapDeps([4,5,0,1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])).then(({renderPrayerAdmin:F})=>{F(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{$e("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{$e("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{we("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{we("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{ge()});const B=document.getElementById("scanner-manual-code-input"),R=document.getElementById("btn-submit-manual-scan"),Q=()=>{const g=B==null?void 0:B.value.trim();if(!g){V("กรุณากรอกรหัสนักเรียน","warning"),B==null||B.focus();return}B.value="",de(g,{inputMethod:"manual"})};R==null||R.addEventListener("click",Q),B==null||B.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),Q())});const M=document.getElementById("opt-active-location"),se=document.getElementById("scanner-location-modal-select");let ie="";const Z=g=>{const T=document.getElementById("btn-confirm-scanner-location");T&&(T.disabled=!g,T.className=g?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},I=(g,{toast:T=!1}={})=>{w.some(F=>F.id===g)&&(j=g,localStorage.setItem("prayer_scan_active_location",j),M&&(M.value=j),T&&V("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};M==null||M.addEventListener("change",g=>{I(g.target.value,{toast:!0}),q==="gun"&&setTimeout(()=>{const T=document.getElementById("scanner-gun-input");T&&!z&&T.focus()},350)}),M==null||M.addEventListener("input",g=>{I(g.target.value)});const H=()=>{ie=(se==null?void 0:se.value)||"",ie&&I(ie),Z(!!ie)};se==null||se.addEventListener("change",H),se==null||se.addEventListener("input",H),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{Ee("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{Ee("usor")}));const ae=()=>{if(!ce){if(!_&&!Fe(i,A)){Y();return}ce=!0,le(),Se(),q==="camera"?Ce():S()}},J=()=>{const g=document.getElementById("scanner-location-modal");if(!g){ae();return}ie="",se&&(se.value=""),Z(!1),g.classList.remove("hidden"),g.classList.add("flex")};(c=document.getElementById("btn-confirm-scanner-location"))==null||c.addEventListener("click",()=>{var g;if(!ie){V("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}I(ie),(g=document.getElementById("scanner-location-modal"))==null||g.remove(),ae()}),le();const a=document.getElementById("scanner-amanah-modal");a?(D=document.getElementById("btn-ack-scanner-amanah"))==null||D.addEventListener("click",()=>{a.remove(),J()}):J()}function $e(s){s!==q&&(q=s,localStorage.setItem("prayer_scan_input_mode",s),s==="camera"?(re(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),Ce()):(_e(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),S()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function we(s){if(s===p)return;p=s,localStorage.setItem("prayer_scan_device_mode",s);const b=document.getElementById("dual-monitor-link-area");s==="dual"?b.classList.remove("hidden"):b.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function Ee(s){if(s===K)return;K=s,localStorage.setItem("prayer_scan_record_status",s);const b=document.getElementById("opt-status-pray"),E=document.getElementById("opt-status-usor");b&&E&&(b.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,E.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${s==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),V(`เปลี่ยนโหมดบันทึกเป็น: ${s==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function Se(){if(_)return;const s=document.getElementById("scanner-countdown"),b=document.getElementById("scanner-countdown-panel"),E=document.getElementById("scanner-time-warning-border");if(!s||!b||!E)return;const h=()=>{if(z)return;const N=aa(i,A);s.textContent=ra(N);const f=N<=ta;b.classList.toggle("bg-red-50",f),b.classList.toggle("border-red-200",f),b.classList.toggle("text-red-700",f),b.classList.toggle("bg-emerald-50",!f),b.classList.toggle("border-emerald-100",!f),b.classList.toggle("text-emerald-800",!f),s.classList.toggle("text-red-700",f),s.classList.toggle("text-emerald-700",!f),E.classList.toggle("hidden",!f),N<=0&&Y()};h(),window._activePrayerScannerState.countdownInterval=setInterval(h,1e3)}async function Ce(){if(!z)try{const s=await Qt(),b=new s("camera-reader");window._activePrayerScannerState.html5Qrcode=b;let E=null,h=0;const N={fps:25,aspectRatio:1};await b.start({facingMode:"environment"},N,f=>{f===E&&Date.now()-h<1800||(E=f,h=Date.now(),de(f))},()=>{})}catch(s){console.error("Camera open failed:",s),V("ไม่สามารถเปิดใช้งานกล้องได้: "+(s.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function _e(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function S(){if(z)return;const s=document.getElementById("scanner-gun-input");if(!s)return;let b="";s.focus();const E=setInterval(()=>{const h=document.activeElement,N=h!==s&&((h==null?void 0:h.matches("select, input, textarea"))||(h==null?void 0:h.isContentEditable));h!==s&&!N&&document.getElementById("scanner-gun-input")&&s.focus()},1e3);window._activePrayerScannerState.focusInterval=E,s.addEventListener("keydown",h=>{var N;if(z){h.preventDefault();return}if(h.key==="Enter"){h.preventDefault();const f=(b||s.value).trim();b="",s.value="",f&&de(f);return}if(h.code&&/^(?:Digit|Numpad)[0-9]$/.test(h.code)){h.preventDefault(),b+=h.code.slice(-1);return}((N=h.key)==null?void 0:N.length)===1&&(h.preventDefault(),b+=h.key)})}function re(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}function Y(){var f,B;if(_||z)return;z=!0,_e(),re();const s=document.getElementById("scanner-result-popup");s==null||s.classList.add("hidden"),s==null||s.classList.remove("flex");const b=document.getElementById("scanner-expired-modal");b==null||b.classList.remove("hidden"),b==null||b.classList.add("flex");const E=document.getElementById("scanner-manual-code-input"),h=document.getElementById("btn-submit-manual-scan"),N=document.getElementById("scanner-gun-input");(f=document.getElementById("opt-input-camera"))==null||f.setAttribute("disabled","true"),(B=document.getElementById("opt-input-gun"))==null||B.setAttribute("disabled","true"),N&&(N.disabled=!0),E&&(E.disabled=!0),h&&(h.disabled=!0)}async function de(s,b={}){if(console.log("[Scanner] Raw scanned text:",s),!s)return;const E=b.inputMethod==="manual"?"manual":"qr";if(z)return;if(!_&&!Fe(i,A)){Y();return}let h=String(s).trim(),N=!1;if(h.startsWith("SQ:")){const g=h.split(":");if(g.length===3){const[,T,F]=g,O=parseInt(F,10),P=Math.floor(Date.now()/1e3),G=P-O,v=parseInt(i.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${T}, QR Time: ${O}, Now: ${P}, Diff: ${G}s, Allowed Expiry: ${v}s`),(isNaN(O)||G>v||G<-v)&&(N=!0),h=T.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",g.length),Me("error"),C(null,s,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const f=u.find(g=>String(g.student_code).trim()===h);if(console.log("[Scanner] Lookup result for code:",h,f?f.full_name:"not found"),N){console.warn("[Scanner] QR Code has expired");const g=parseInt(i.studentQrExpirySeconds||"60",10);Me("error",f==null?void 0:f.gender),C(f,h,`QR Code นี้หมดอายุแล้ว (เกิน ${g} วินาที)`);return}if(!f){Me("error"),C(null,h,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const B=Ys(f,j);if(B){Me("error",f.gender),C(f,h,B);return}const R=Te(new Date),Q=wt(d.main_room),M=wt(f.main_room),se=!!Q&&!!M&&Q===M;if(!_&&se&&sa(f.gender,i)){Me("error",f.gender),C(f,h,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const ie=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(ie.some(g=>g.student_id===f.id&&g.check_date===R)){Me("duplicate",f.gender),C(f,h,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(f.id)){Me("duplicate",f.gender),C(f,h,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if(E==="manual"){const g=parseInt(i.prayerManualEntryMonthlyLimit??"2",10),T=Number.isFinite(g)?Math.max(0,g):2;if(T===0){Me("error",f.gender),C(f,h,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const F=ie.filter(O=>O.student_id!==f.id||O.input_method!=="manual"||!O.check_date?!1:String(O.check_date).slice(0,7)===R.slice(0,7)).length;try{if(await as(f.id,R)+F>=T){Me("error",f.gender),C(f,h,`ใช้สิทธิ์กรอกรหัสครบ ${T} ครั้งในเดือนนี้แล้ว`);return}}catch(O){console.warn("Manual prayer count check failed:",O),Me("error",f.gender),C(f,h,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}if(z||!_&&!Fe(i,A)){Y();return}const I=dt(R,i);let H=K,ae="";H==="usor"&&f.gender==="ชาย"&&(H="pray",ae=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const J=d.teacher_code?`${d.full_name} (ครู)`:`${d.full_name} (รหัส ${d.student_code||"—"})`,a={student_id:f.id,main_room:f.main_room,check_date:R,status:H,week_number:I,location:j,full_name:f.full_name,student_code:f.student_code,scanned_by:J,input_method:E,scanner_code:d.teacher_code||d.student_code||null,scanner_name:d.full_name||null,scanner_room:d.main_room||null,scanner_gender:d.gender||null,same_room_flag:se};ie.push(a),localStorage.setItem("prayer_scan_queue",JSON.stringify(ie));let c=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");c=c.filter(g=>g.check_date===R),c.some(g=>g.student_id===f.id)||(c.unshift({student_id:f.id,full_name:f.full_name,student_code:f.student_code,main_room:f.main_room,check_date:R,status:H,input_method:E,same_room_flag:se}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(c))),window._syncedStudentIdsToday.add(f.id),Me("success",f.gender),pe(),C(f,h,`บันทึกสำเร็จลงเครื่องแล้ว${E==="manual"?" (กรอกรหัส)":""}${ae}`,!0,H),le(),ge()}function C(s,b,E,h=!1,N="pray"){var R;const f=document.getElementById("scanner-feedback-container");if(!f||z)return;const B=document.getElementById("scanner-result-popup");if(q==="gun"&&s&&B){const Q=String(E).includes("เช็คชื่อซ้ำ"),M=h?"bg-emerald-100 text-emerald-800":Q?"bg-amber-100 text-amber-900":"bg-rose-100 text-rose-900",se=h?"border-emerald-400":Q?"border-amber-300":"border-rose-300",ie=h?"text-emerald-700":Q?"text-amber-800":"text-rose-700",Z=T=>String(T??"").replace(/[&<>"']/g,F=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[F]),I=Z(s.full_name||"นักเรียน"),H=Z(s.student_code||b||""),ae=Z(je(s.main_room)),J=s.image_url?`<img src="${Z(s.image_url)}" alt="รูป${I}" class="w-full h-full object-cover object-top" />`:`<div class="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-700 text-7xl font-extrabold">${I.charAt(0)||"น"}</div>`,a=Te(new Date),c=new Set(JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]").map(T=>T.student_id)),D=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]").filter(T=>T.check_date===a&&T.student_id!==s.id).slice(0,10),g=D.length?D.map((T,F)=>{const O=u.find(ve=>ve.id===T.student_id),P=Z(T.full_name||(O==null?void 0:O.full_name)||"นักเรียน"),G=Z(T.student_code||(O==null?void 0:O.student_code)||""),v=Z(je(T.main_room||(O==null?void 0:O.main_room))),te=O!=null&&O.image_url?`<img src="${Z(O.image_url)}" alt="" class="h-full w-full object-cover object-top" loading="lazy" />`:`<span class="text-lg font-extrabold text-emerald-700">${P.charAt(0)||"น"}</span>`,xe=c.has(T.student_id),qe=xe?"รอซิงก์":T.status==="usor"?"อูโซร":"สำเร็จ",Le=xe?"bg-amber-100 text-amber-800":T.status==="usor"?"bg-purple-100 text-purple-800":"bg-emerald-100 text-emerald-800";return`<div class="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-2.5 text-left shadow-sm">
              <span class="w-7 flex-shrink-0 text-center font-mono text-xs font-bold text-slate-400">${F+1}</span>
              <div class="h-12 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-emerald-50 flex items-center justify-center">${te}</div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-bold text-slate-800">${P}</p>
                <p class="truncate text-[11px] text-slate-500">${G} · ${v}</p>
              </div>
              <span class="flex-shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${Le}">${qe}</span>
            </div>`}).join(""):'<div class="rounded-2xl border border-dashed border-slate-200 px-4 py-10 text-center text-sm text-slate-400">ยังไม่มีรายการสแกนก่อนหน้าในวันนี้</div>';B.innerHTML=`
        <div id="scanner-result-popup-card" class="relative flex h-[94vh] w-full flex-col ${X==="two"?"max-w-6xl":"max-w-xl"} overflow-hidden rounded-3xl bg-white p-4 pt-16 sm:p-6 sm:pt-16 text-center shadow-2xl border-4 ${se}">
          <div class="absolute right-3 top-3 z-10 flex items-center gap-2">
            <div class="flex rounded-xl border border-slate-200 bg-slate-50 p-1" role="group" aria-label="รูปแบบการแสดงผล">
              <button type="button" data-result-columns="one" aria-pressed="${X==="one"}" class="rounded-lg px-3 py-2 text-xs font-extrabold transition ${X==="one"?"bg-emerald-600 text-white shadow":"text-slate-600 hover:bg-white"}">1 คอลัมน์</button>
              <button type="button" data-result-columns="two" aria-pressed="${X==="two"}" class="rounded-lg px-3 py-2 text-xs font-extrabold transition ${X==="two"?"bg-emerald-600 text-white shadow":"text-slate-600 hover:bg-white"}">2 คอลัมน์</button>
            </div>
            <button id="scanner-result-popup-close" type="button" aria-label="ปิดผลการสแกน" class="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-3xl font-bold leading-none text-gray-600 shadow hover:bg-gray-100 active:scale-95">×</button>
          </div>
          <div id="scanner-result-popup-grid" class="grid min-h-0 flex-1 ${X==="two"?"grid-cols-1 md:grid-cols-2":"grid-cols-1"} gap-4">
            <section class="flex min-h-0 flex-col items-center justify-center overflow-y-auto rounded-2xl bg-slate-50 p-3 sm:p-5">
              <p class="inline-flex items-center gap-2 rounded-full px-5 py-3 text-base sm:text-lg font-extrabold ${M}">
                <span class="text-xl">${h?"✓":Q?"↻":"!"}</span>${h?"สแกนสำเร็จ":Q?"ตรวจพบการสแกนซ้ำ":"สแกนไม่ผ่าน"}
              </p>
              <div class="mx-auto mt-3 ${X==="two"?"h-[min(54vh,560px)] w-[min(38vw,440px)]":"h-[min(52vh,520px)] w-[min(72vw,360px)]"} max-w-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-lg">${J}</div>
              <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold text-slate-900">${I}</h2>
              <p class="mt-2 text-xl sm:text-2xl font-bold text-slate-600">รหัส ${H} · ห้อง ${ae}</p>
              <p class="mt-3 text-lg sm:text-xl font-bold ${ie}">${Z(E)}</p>
              <p class="mt-3 text-sm text-gray-400">ผลการสแกนจะแสดงค้างไว้จนกว่าจะสแกนรายการถัดไปหรือหมดเวลาสแกน</p>
            </section>
            <section id="scanner-result-popup-history" class="${X==="two"?"flex":"hidden"} min-h-0 flex-col rounded-2xl bg-slate-50 p-3 sm:p-4 text-left">
              <div class="mb-3 flex items-center justify-between gap-2">
                <h3 class="font-extrabold text-slate-800">รายการสแกนก่อนหน้า</h3>
                <span class="text-xs font-semibold text-slate-500">สูงสุด 10 รายการ · วันนี้</span>
              </div>
              <div class="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">${g}</div>
            </section>
          </div>
        </div>`,B.classList.remove("hidden"),B.classList.add("flex"),B.querySelectorAll("[data-result-columns]").forEach(T=>{T.addEventListener("click",()=>{X=T.dataset.resultColumns==="one"?"one":"two",localStorage.setItem("prayer_scan_result_columns",X);const F=B.querySelector("#scanner-result-popup-card"),O=B.querySelector("#scanner-result-popup-grid"),P=B.querySelector("#scanner-result-popup-history");F==null||F.classList.toggle("max-w-6xl",X==="two"),F==null||F.classList.toggle("max-w-xl",X==="one"),O==null||O.classList.toggle("md:grid-cols-2",X==="two"),P==null||P.classList.toggle("hidden",X==="one"),P==null||P.classList.toggle("flex",X==="two"),B.querySelectorAll("[data-result-columns]").forEach(G=>{const v=G.dataset.resultColumns===X;G.setAttribute("aria-pressed",String(v)),G.className=`rounded-lg px-3 py-2 text-xs font-extrabold transition ${v?"bg-emerald-600 text-white shadow":"text-slate-600 hover:bg-white"}`})})}),(R=B.querySelector("#scanner-result-popup-close"))==null||R.addEventListener("click",()=>{B.classList.add("hidden"),B.classList.remove("flex")})}else!s&&B&&(B.classList.add("hidden"),B.classList.remove("flex"),B.innerHTML="");if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),h&&s){const Q=N==="usor",M=s.image_url?`<img src="${s.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${Q?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${s.full_name.charAt(0)}</div>`,se=Q?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';f.innerHTML=`
        <div class="bg-white/95 border ${Q?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${M}
          <div class="flex-1 min-w-0">
            ${se}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${s.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${s.student_code} · ห้อง ${je(s.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${E}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${s.id}" data-name="${s.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=f.innerHTML,ne(f)}else{const Q=s?s.full_name:"ไม่พบข้อมูล",M=s?`รหัส ${s.student_code} · ห้อง ${je(s.main_room)}`:`สแกนพบ: ${b}`;f.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${Q}</h4>
            <p class="text-xs text-gray-500 truncate">${M}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${E}</p>
          </div>
        </div>`,f.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(f.innerHTML=window._lastSuccessFeedbackHTML,ne(f)):(f.innerHTML="",f.classList.add("hidden"))},3500);return}f.classList.remove("hidden")}function ne(s){const b=s.querySelector("#btn-undo-scan");b&&b.addEventListener("click",()=>{const E=parseInt(b.dataset.sid,10),h=b.dataset.name;ue(E,h)})}async function ue(s,b){const E=Te(new Date);let h=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");h=h.filter(B=>!(B.student_id===s&&B.check_date===E)),localStorage.setItem("prayer_scan_queue",JSON.stringify(h));let N=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");N=N.filter(B=>!(B.student_id===s&&B.check_date===E)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(N)),window._syncedStudentIdsToday.delete(s),window._lastSuccessFeedbackHTML="";const f=document.getElementById("scanner-feedback-container");f&&(f.innerHTML="",f.classList.add("hidden")),le(),V(`กำลังยกเลิกรายการของ ${b}...`,"info");try{const{error:B}=await Be.from("prayer_records").delete().eq("student_id",s).eq("check_date",E).is("teacher_id",null);if(B)throw B;V(`ยกเลิกบันทึกของ ${b} สำเร็จ ✕`,"success")}catch(B){console.warn("Failed to delete from server (offline?):",B),V("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function pe(){const s=document.getElementById("scanner-flash");s&&(s.classList.remove("hidden","opacity-0"),s.classList.add("opacity-40"),setTimeout(()=>{s.classList.remove("opacity-40"),s.classList.add("opacity-0"),setTimeout(()=>s.classList.add("hidden"),150)},120))}function le(s=!1){const b=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let E=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const h=Te(new Date);E=E.filter(M=>M.check_date===h);const N=document.getElementById("scan-count-badge");N&&(N.textContent=`${E.length} คน`);const f=document.getElementById("sync-indicator"),B=document.getElementById("sync-title"),R=document.getElementById("sync-desc");if(!f||!B||!R)return;s?(f.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",B.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",R.textContent=`กำลังส่งข้อมูล ${b.length} คนขึ้นเซิร์ฟเวอร์`):b.length>0?(f.className="w-2.5 h-2.5 rounded-full bg-amber-500",B.textContent=`ค้างส่ง ${b.length} รายการ (ออฟไลน์)`,R.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(f.className="w-2.5 h-2.5 rounded-full bg-emerald-500",B.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",R.textContent="พร้อมบันทึกประวัติละหมาด");const Q=document.getElementById("scan-list");Q&&(E.length===0?Q.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(Q.innerHTML=E.map((M,se)=>{const ie=b.some(J=>J.student_id===M.student_id),Z=M.status==="usor",I=M.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",H=M.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",ae=ie?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':Z?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${E.length-se}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${M.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${M.student_code} · ห้อง ${je(M.main_room)}</p>
              </div>
              ${I}
              ${H}
              ${ae}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${M.student_id}" data-name="${M.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),Q.querySelectorAll(".btn-cancel-scan-row").forEach(M=>{M.addEventListener("click",()=>{const se=parseInt(M.dataset.sid,10),ie=M.dataset.name||"นักเรียน";ue(se,ie)})})))}async function ge(){if(oe)return;const s=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(s.length){oe=!0,le(!0);try{const b=await jt(s);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),b!=null&&b.skippedCount?V(`ซิงก์สำเร็จ (ข้าม ${b.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):V("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(b){console.warn("Sync failed, offline backup kept:",b)}finally{oe=!1,le()}}}const ke=setInterval(()=>{ge()},8e3);window._activePrayerScannerState.syncInterval=ke,he()}async function Fa(e){if(!(e!=null&&e.can_scan_prayer)){me(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}me(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let t={},n=Te(new Date),o=[];const d=r=>{if(!r)return"—";const m=new Date(r);return`${String(m.getHours()).padStart(2,"0")}:${String(m.getMinutes()).padStart(2,"0")}`},i=(r,m)=>{const $=new Date(r+"T00:00:00");return $.setDate($.getDate()+m),Te($)};async function u(){try{o=await $s(e.student_code,n)}catch(m){o=[],V("โหลดข้อมูลไม่สำเร็จ: "+ye(m),"error")}const r=document.getElementById("sh-search-input");y((r==null?void 0:r.value.trim())??"")}function y(r=""){var p,w;const m=document.getElementById("sh-list"),$=document.getElementById("sh-count");if(!m)return;$&&($.textContent=`${o.length} คน`);const q=r?o.filter(L=>{var j;return String(((j=L.students)==null?void 0:j.student_code)??"").includes(r)}):o;if(r&&!q.length){m.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${W(r)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(p=document.getElementById("sh-resave-btn"))==null||p.addEventListener("click",()=>U(r)),(w=document.getElementById("sh-report-btn"))==null||w.addEventListener("click",()=>ee(r));return}if(!q.length){m.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}m.innerHTML=q.map(L=>{const j=L.students??{},K=Qe[L.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:L.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${j.image_url?`<img src="${j.image_url}" class="w-full h-full object-cover"/>`:W((j.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${W(j.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${W(j.student_code??"—")} · ${W(j.religion_room??j.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${K.cls}" title="${W(K.title)}">${K.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${d(L.created_at)}</p>
        </div>
      </div>`}).join("")}async function _(){window._activePrayerScannerState={html5Qrcode:null};try{const r=await Qt(),m=new r("sh-camera-reader");window._activePrayerScannerState.html5Qrcode=m,await m.start({facingMode:"environment"},{fps:25,aspectRatio:1},$=>{var w;let q=String($).trim();q.startsWith("SQ:")&&(q=q.split(":")[1]??q),A(),(w=document.getElementById("sh-camera-wrap"))==null||w.classList.add("hidden");const p=document.getElementById("sh-search-input");p&&(p.value=q),y(q)},()=>{})}catch(r){V("ไม่สามารถเปิดกล้องได้: "+(r.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function A(){var r;(r=window._activePrayerScannerState)!=null&&r.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function U(r){var w;let m=null;try{m=await ot(r)}catch{}if(!m){V("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}(w=document.getElementById("sh-resave-modal"))==null||w.remove();const $=document.createElement("div");$.id="sh-resave-modal",$.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const q=Object.entries(Qe);$.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${W(m.full_name)} (รหัส ${W(m.student_code)})<br/>${W(m.religion_room??m.main_room??"—")} · วันที่ ${n}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${q.map(([L,j],K)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${K===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${L}">${j.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild($);let p=q[0][0];$.querySelectorAll(".sh-status-btn").forEach(L=>{L.addEventListener("click",()=>{p=L.dataset.status,$.querySelectorAll(".sh-status-btn").forEach(j=>{j.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),j.classList.add("border-gray-200","text-gray-500")}),L.classList.remove("border-gray-200","text-gray-500"),L.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),$.querySelector("#sh-resave-cancel").addEventListener("click",()=>$.remove()),$.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const L=$.querySelector("#sh-resave-confirm");L.disabled=!0,L.textContent="กำลังบันทึก...";try{const j={student_id:m.id,main_room:m.main_room,check_date:n,status:p,week_number:dt(n,t),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await jt([j]),V("บันทึกสำเร็จ ✅","success"),$.remove(),await u()}catch(j){V("บันทึกไม่สำเร็จ: "+ye(j),"error"),L.disabled=!1,L.textContent="บันทึก"}})}async function ee(r){let m=null;try{m=await ot(r)}catch{}const q=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${m?`${m.full_name} (รหัส ${m.student_code}) ห้องศาสนา ${m.religion_room??m.main_room??"—"}`:`รหัสนักเรียน ${r} (ไม่พบชื่อในระบบ)`} วันที่ ${n} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(q):V("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function l(){t=await Oe().catch(()=>({})),me(`
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
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async r=>{n=r.target.value,document.getElementById("sh-search-input").value="",await u()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{n=i(n,-1),document.getElementById("sh-date").value=n,document.getElementById("sh-search-input").value="",await u()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{n=i(n,1),document.getElementById("sh-date").value=n,document.getElementById("sh-search-input").value="",await u()}),document.getElementById("sh-search-input").addEventListener("input",r=>{y(r.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const r=document.getElementById("sh-camera-wrap");r.classList.toggle("hidden"),r.classList.contains("hidden")?A():_()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var r;A(),(r=document.getElementById("sh-camera-wrap"))==null||r.classList.add("hidden")}),await u()}l()}export{Oa as completeGoogleEmailLink,Ha as openEmailLinkPrompt,Pa as renderExamRequestForm,la as renderStudentAllAssignments,Gt as renderStudentLeaveRequests,na as renderStudentMyScores,Aa as renderStudentOverview,Fa as renderStudentPrayerScanHistory,za as renderStudentPrayerScanner,Ra as renderStudentProfile,ia as renderStudentRequests,da as renderStudentSubjectDetail,lt as renderStudentSubjects};
