const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/views-Dsbi1Yvn.js","assets/ui-Dh03k4iX.js","assets/leave-monitor.js_v_10.18-Dz2vtIpz.js","assets/leave-time-CrS9gT63.js","assets/sports-portals.js_v_10.22-BrIjazIR.js","assets/impersonation-C66q0Y-O.js","assets/storage-D6nkcVz6.js","assets/browser-JP79f-a9.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/teacher-views-grades-DyBe1K7u.js","assets/regrade-api-C8s-TuM0.js","assets/score-qr-scanner-SDrghEsT.js","assets/teacher-views-classes-s_CI5F_w.js","assets/pp5-doc-CVTwqJKw.js","assets/teacher-views-attendance-C31WiJPz.js","assets/confetti-loader-BAN5Lv-C.js","assets/teacher-views-BzTMalao.js","assets/import-D0GLDW1_.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azfutsal-modal-wts4xj80.js"])))=>i.map(i=>d[i]);
import{_ as dt}from"./ui-Dh03k4iX.js";import{c as it,d as kt,s as ct,e as Et,f as Oe,h as Lt,i as jt,j as Ct,k as It,l as qt,m as Mt,n as Tt,b as Ye,o as Bt,p as Dt,q as mt,r as At,u as pt,t as ut,v as Nt,w as Pt,x as Ht,y as Rt,z as Ot,A as zt,B as Ft,C as Qt,D as Gt,E as Vt,F as Wt,G as et}from"./student-api-q3ZleCC5.js";import{g as Ut}from"./theme-DIdoXkqD.js";import{getSystemConfig as Ce,submitQrReissueRequest as Yt,notifyQrReissueManagers as Jt}from"./api-1xsyVspL.js";import{_dateInputValue as xt,_currentWeek as Kt,applyReadingGradesFromConfig as Xt,_readingGrade as Zt,renderIconTile as ke}from"./teacher-views-utils-B2Iz3UWp.js";import{i as bt,j as gt,k as ft,r as yt}from"./quiz-api-DaBneRGn.js";import{f as es}from"./leave-time-CrS9gT63.js";import{n as ts}from"./storage-D6nkcVz6.js";import{s as _e}from"./supabase-BV-W2lsh.js";import{b as ss}from"./browser-JP79f-a9.js";import{g as as}from"./regrade-api-C8s-TuM0.js";import{y as rs,o as ns}from"./certificate-engine-Ciw2pKHx.js";import{o as os}from"./azfutsal-modal-wts4xj80.js";const ls="10.22.663",Fe=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function vt(e){var $;($=document.getElementById("my-certificates-modal"))==null||$.remove();const t=document.body.style.overflow;document.body.style.overflow="hidden";const s=document.createElement("div");s.id="my-certificates-modal",s.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade",s.innerHTML=`
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`;const l=()=>{document.removeEventListener("keydown",c),document.body.style.overflow=t,s.remove()},c=a=>{a.key==="Escape"&&l()};document.addEventListener("keydown",c),document.body.appendChild(s),s.querySelector("[data-mycert-close]").addEventListener("click",l);const p=s.querySelector("#my-certificates-body"),u=[];(await rs(e.id).catch(()=>[])).forEach(a=>u.push({key:`central-${a.id}`,emoji:"🏅",title:a.title||"เกียรติบัตร",sub:new Date(a.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),onOpen:()=>ns({layout:a.layout_snapshot,variables:{name:e.full_name,date:new Date(a.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:a.certificate_no,...a.variables},docTitle:a.title})}));const T=await it(e.main_room).catch(()=>null),b=T&&Number(T.head_student_id)===Number(e.id),z=T&&Number(T.vice_head_student_id)===Number(e.id),A=b?T==null?void 0:T.head_cert_url:z?T==null?void 0:T.vice_head_cert_url:null;A&&u.push({key:"classroom-leader",emoji:"👑",title:`เกียรติบัตรแต่งตั้ง${b?"หัวหน้าห้อง":"รองหัวหน้าห้อง"}`,sub:"ประจำชั้นปีการศึกษานี้",onOpen:()=>window.open(A,"_blank")});try{const{data:a}=await _e.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(a){const[{data:d},{data:x}]=await Promise.all([_e.rpc("get_my_sports_eligibility",{p_event:a.id}).then(v=>v.error?null:v.data).catch(()=>null),_e.from("outstanding_athletes").select("id, note, sports(name)").eq("event_id",a.id).eq("student_id",e.id).then(v=>v.data??[]).catch(()=>[])]);d!=null&&d.eligible&&(d!=null&&d.certificate_url)&&u.push({key:"sports-color",emoji:"🎖️",title:"เกียรติบัตรกีฬาสี",sub:`ทีมสี${e.house_color??""}`,onOpen:()=>window.open(d.certificate_url,"_blank")}),x.forEach(v=>{var E;return u.push({key:`sports-award-${v.id}`,emoji:"🏆",title:((E=v.sports)==null?void 0:E.name)||"รางวัลนักกีฬาดีเด่น",sub:v.note||"",onOpen:null})})}}catch{}u.push({key:"azfutsal",emoji:"⚽",title:"เกียรติบัตรฟุตซอล AZFUTSALCUP",sub:"เปิดดูในระบบฟุตซอล (ถ้ามี)",onOpen:()=>os(e.student_code)}),p.innerHTML=u.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${u.map(a=>`
        <div data-key="${Fe(a.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${a.onOpen?"cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition":""}">
          <div class="text-3xl mb-2">${a.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${Fe(a.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${Fe(a.sub||"")}</p>
        </div>`).join("")}
    </div>
  `:'<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>',u.forEach(a=>{var d;a.onOpen&&((d=p.querySelector(`[data-key="${CSS.escape(a.key)}"]`))==null||d.addEventListener("click",a.onOpen))})}const ve=e=>(e??"").replace(/\/\d+/,"").trim(),Me=e=>!e.mySubmission||e.mySubmission.status==="rejected",X=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function se(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${e}</div>`)}function Y(e,t="info"){const s={success:"bg-emerald-500",error:"bg-red-500",warning:"bg-amber-500",info:"bg-indigo-500"},l=document.createElement("div");l.className=`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-4 py-2.5 rounded-xl text-white text-sm
                 font-medium shadow-lg ${s[t]??s.info} transition-all`,l.textContent=e,document.body.appendChild(l),setTimeout(()=>l.remove(),2800)}const ds={present:"ม",absent:"ข",late:"ส",sick:"ป",excused:"ก"},is={present:"bg-emerald-50 text-emerald-700",absent:"bg-red-50 text-red-600",late:"bg-amber-50 text-amber-700",sick:"bg-blue-50 text-blue-600",excused:"bg-purple-50 text-purple-600"},je={pending:{label:"รอดำเนินการ",cls:"bg-amber-50 text-amber-700 border-amber-200"},approved:{label:"อนุมัติแล้ว",cls:"bg-emerald-50 text-emerald-700 border-emerald-200"},rejected:{label:"ปฏิเสธ",cls:"bg-red-50 text-red-600 border-red-200"}},Re=["อา","จ","อ","พ","พฤ","ศ","ส"],Te={pray:{label:"/",score:2,cls:"bg-emerald-50 text-emerald-700 border-emerald-100",title:"ละหมาด"},absent:{label:"X",score:0,cls:"bg-red-50 text-red-600 border-red-100",title:"ขาดละหมาด"},usor:{label:"U",score:2,cls:"bg-purple-50 text-purple-600 border-purple-100",title:"อูโซร"},followed:{label:"-",score:1,cls:"bg-blue-50 text-blue-600 border-blue-100",title:"ติดตามแล้ว"},avoid:{label:"N",score:-1,cls:"bg-orange-50 text-orange-600 border-orange-100",title:"หลีกเลี่ยง"}},Qe=[{id:"musolla_male",label:"มูซอลลาชาย",detail:"ม.1 - ม.5 ชาย",icon:"🕌",genders:["ชาย"]},{id:"masjid_kuwait",label:"มัสยิดคูเวต",detail:"ม.6, ปวช. ชาย",icon:"🕌",genders:["ชาย"]},{id:"musolla_female_1",label:"มูซอลลาหญิง 1",detail:"โรงอาหาร",icon:"🕌",genders:["หญิง"]},{id:"musolla_female_2",label:"มูซอลลาหญิง 2",detail:"อาคาร 5",icon:"🕌",genders:["หญิง"]}];function cs(e){if(e!=null&&e.teacher_code)return Qe;const t=String((e==null?void 0:e.gender)||"").trim(),s=Qe.filter(l=>l.genders.includes(t));return s.length?s:Qe}function ms(e){const t=String((e==null?void 0:e.main_room)||"").replace(/\s+/g,"").trim();if(!t)return{grade:null,isVoc:!1};const s=t.match(/^ม\.?([1-6])/);return{grade:s?parseInt(s[1],10):null,isVoc:t.startsWith("ปวช")}}function ps(e,t){if(String((e==null?void 0:e.gender)||"").trim()!=="ชาย")return"";const{grade:s,isVoc:l}=ms(e),c=t==="musolla_male",p=t==="masjid_kuwait";return!c&&!p?"":p&&!(s===6||l)?"นักเรียนชาย ม.1 - ม.5 ต้องสแกนที่มูซอลลาชาย ไม่สามารถบันทึกที่มัสยิดคูเวตได้":c&&!(s>=1&&s<=5)?"นักเรียนชาย ม.6 และ ปวช. ต้องสแกนที่มัสยิดคูเวต ไม่สามารถบันทึกที่มูซอลลาชายได้":""}function tt(e){const s=(/^#[0-9a-f]{6}$/i.test(String(e??""))?e:"#059669").slice(1);return{r:parseInt(s.slice(0,2),16),g:parseInt(s.slice(2,4),16),b:parseInt(s.slice(4,6),16)}}function us({r:e,g:t,b:s}){return"#"+[e,t,s].map(l=>Math.max(0,Math.min(255,Math.round(l))).toString(16).padStart(2,"0")).join("")}function Ae(e,t,s){const l=tt(e),c=tt(t);return us({r:l.r+(c.r-l.r)*s,g:l.g+(c.g-l.g)*s,b:l.b+(c.b-l.b)*s})}function Le(e){if(!e)return"—";const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()+543}`}function Ge(e){if(!e)return"";const t=new Date(e),s=new Date;t.setHours(0,0,0,0),s.setHours(0,0,0,0);const l=Math.round((t-s)/864e5);return l>1?`อีก ${l} วัน`:l===1?"พรุ่งนี้":l===0?"วันนี้":l===-1?"เมื่อวาน":`ผ่านมาแล้ว ${Math.abs(l)} วัน`}function xs(e){var c,p,u;const t=((c=e.master_subjects)==null?void 0:c.subject_group)??"",s=e.skill_group??"";return(((u=(p=e.master_subjects)==null?void 0:p.teachers)==null?void 0:u.category)??"")==="ศาสนา"||t==="AGM"||t==="AGMVOC"?{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",tag:"bg-amber-100 text-amber-700",accent:"border-l-amber-400"}:t==="ACDMVOC"||s==="สามัญปวช"?{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"bg-purple-100 text-purple-700",accent:"border-l-purple-400"}:s==="ภาษา"?{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"bg-blue-100 text-blue-700",accent:"border-l-blue-400"}:s==="ชีวิต"?{bg:"bg-emerald-50",border:"border-emerald-200",text:"text-emerald-800",tag:"bg-emerald-100 text-emerald-700",accent:"border-l-emerald-400"}:s==="วิชาการ"?{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"bg-orange-100 text-orange-700",accent:"border-l-orange-400"}:{bg:"bg-gray-50",border:"border-gray-200",text:"text-gray-800",tag:"bg-gray-100 text-gray-600",accent:"border-l-gray-300"}}function bs(e,t={}){var T,b,z;const s=((T=e.master_subjects)==null?void 0:T.subject_group)??"",l=e.skill_group??"",c=((z=(b=e.master_subjects)==null?void 0:b.teachers)==null?void 0:z.category)??"",p=c==="ศาสนา"||s==="AGM"||s==="AGMVOC"?t.teacherReligionColor||"#b45309":s==="ACDMVOC"||l==="สามัญปวช"?t.teacherVocColor||"#7c3aed":l==="ภาษา"?t.teacherLanguageColor||"#2563eb":l==="ชีวิต"?t.teacherLifeColor||"#059669":l==="วิชาการ"?t.teacherAcademicColor||"#ea580c":t.teacherDefaultColor||"#059669",u=c==="ศาสนา"||s==="AGM"||s==="AGMVOC"?s==="AGMVOC"?"กลุ่มวิชาศาสนา ปวช":"กลุ่มวิชาศาสนา":s==="ACDMVOC"||l==="สามัญปวช"?"กลุ่มสามัญ ปวช":l?`กลุ่มทักษะ: ${l}`:"กลุ่มวิชาสามัญ",q=u.replace("กลุ่มทักษะ: ","");return{color:p,label:u,short:q,bg:Ae(p,"#ffffff",.9),badgeBg:Ae(p,"#ffffff",.86),border:Ae(p,"#ffffff",.35),text:Ae(p,"#000000",.35)}}function Ve(e=0){const t=new Date,s=t.getDay(),l=new Date(t);l.setDate(t.getDate()-(s===0?6:s-1)),l.setDate(l.getDate()+e*7);const c=new Date(l);c.setDate(l.getDate()-1);const p={};p[0]=c;for(let u=1;u<=7;u++){const q=new Date(l);q.setDate(l.getDate()+u-1),p[u]=q}return p}function Ne(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()+543}`}const ht="12:20",gs="12:50",fs="13:05",ys=60;function He(e,t){const l=String(e||t||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!l)return He(t,ht);const c=Math.max(0,Math.min(23,parseInt(l[1],10))),p=Math.max(0,Math.min(59,parseInt(l[2],10)));return c*60+p}function st(e){const t=(e%1440+1440)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Ee(e){return String(e||"").split(/[\s,]+/).map(t=>t.trim()).filter(Boolean)}function at(e,t=!1){return e==null||e===""?t:["1","true","yes","on"].includes(String(e).trim().toLowerCase())}function vs(e,t={}){return String(e||"").trim()==="หญิง"?at(t.prayerSameRoomGuardFemaleEnabled,!1):at(t.prayerSameRoomGuardMaleEnabled,!0)}function rt(e){return String(e||"").replace(/\s+/g,"").trim()}function wt(e,t={}){return e!=null&&e.student_code?Ee(t.prayerExtendedScannerStudents).includes(String(e.student_code).trim()):!1}function _t(e,t={}){if(!(e!=null&&e.student_code)||!e.can_scan_prayer)return!1;const s=String(e.student_code).trim(),l=Ee(t.prayerScannerSun),c=Ee(t.prayerScannerMon),p=Ee(t.prayerScannerTue),u=Ee(t.prayerScannerWed),q=Ee(t.prayerScannerThu);if(!(l.includes(s)||c.includes(s)||p.includes(s)||u.includes(s)||q.includes(s)))return!0;const b=new Date().getDay();return!!(b===0&&l.includes(s)||b===1&&c.includes(s)||b===2&&p.includes(s)||b===3&&u.includes(s)||b===4&&q.includes(s))}function Je(e={},t=!1){const s=He(e.prayerScanStartTime,ht),l=He(e.prayerScanEndTime,gs),c=He(e.prayerScanExtendedEndTime,fs),p=t?c:l;return{start:s,end:p,startLabel:st(s),endLabel:st(p)}}function We(e={},t=!1){const s=new Date,l=s.getHours(),c=s.getMinutes(),p=l*60+c,{start:u,end:q}=Je(e,t);return q<u?p>=u||p<=q:p>=u&&p<=q}function hs(e={},t=!1){const s=new Date,l=s.getHours()*3600+s.getMinutes()*60+s.getSeconds(),{start:c,end:p}=Je(e,t),u=c*60;let q=p*60,T=l;return p<c&&T<u&&(T+=86400),p<c&&(q+=86400),Math.max(0,q-T)}function ws(e){const t=Math.floor(e/60),s=e%60;return`${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function we(e){var u,q;let t=e.getFullYear();const s=((u=window._pp5SystemCfg)==null?void 0:u.academicYear)||((q=window._pp5SystemCfg)==null?void 0:q.academic_year)||2569,l=parseInt(s)-543;(t>2030||t<2024)&&(t=l);const c=String(e.getMonth()+1).padStart(2,"0"),p=String(e.getDate()).padStart(2,"0");return`${t}-${c}-${p}`}function $t(e,t=[]){const s=t.map(u=>u.check_date).filter(Boolean).sort()[0],l=e||s||new Date().toISOString().slice(0,10),c=new Date(l);c.setHours(0,0,0,0);const p=c.getDay();return p&&c.setDate(c.getDate()-p),Array.from({length:20},(u,q)=>{const T=Array.from({length:5},(b,z)=>{const A=new Date(c);return A.setDate(c.getDate()+q*7+z),{date:A,ds:we(A),day:Re[z]}});return{n:q+1,days:T}})}function nt(e,t){const s=Object.fromEntries((t??[]).map(l=>[l.column_id,l.score]));return(e??[]).map(l=>({...l,score:s[l.id]??null}))}async function Vs(e){var ie,be,f,J,Q;se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s,l,c,p,u,q,T]=await Promise.all([Oe(e.id).catch(()=>[]),Ye(e.id).catch(()=>[]),Ot(e.id).catch(()=>({linked:[],unlinked:[]})),zt(e.id).catch(()=>[]),Ft(e.id).catch(()=>({samai:[],sasana:[]})),Ce().catch(()=>({})),it(e.main_room).catch(()=>null),ut(e.id).catch(()=>[])]),b=T.filter(Me).sort((i,w)=>(i.due_at?new Date(i.due_at).getTime():1/0)-(w.due_at?new Date(w.due_at).getTime():1/0)),z=s.filter(i=>i.status==="pending"),A=s.slice(0,3),$=wt(e,u),a=await Promise.all(t.map(i=>bt(i.id,e.id).catch(()=>[]))),d=t.flatMap((i,w)=>(a[w]??[]).map(S=>({...S,_class:i}))),x=await gt(d.map(i=>i.id),e.id).catch(()=>new Set),v=d.filter(i=>{if(i.status!=="started"||x.has(i.id))return!1;const w=i.attempts.filter(P=>P.status==="submitted"||P.status==="terminated_violation").length;return!(i.attempts.length&&i.attempts[i.attempts.length-1].status==="terminated_violation")&&w<i.max_attempts}),E=q&&Number(q.head_student_id)===Number(e.id),H=q&&Number(q.vice_head_student_id)===Number(e.id),F=(u.council_test_student_codes||"").split(/[\s,]+/).map(i=>i.trim()).filter(Boolean),R=u.council_visible_to_all!=="false"||F.includes(e.student_code);let ae=!1;try{const{data:i,error:w}=await _e.rpc("get_terangganu_access");w||(ae=(i==null?void 0:i.visible)===!0&&(i==null?void 0:i.student_allowed)===!0)}catch{ae=!1}let ce=!1,me=0;try{const[i,w]=await Promise.all([as(),Promise.resolve(_e.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("student_id",e.id).eq("status","กำลังดำเนินการปรับแก้")).catch(()=>({count:0}))]);ce=((ie=i.visibility)==null?void 0:ie.student_menu)===!0,me=Number(w==null?void 0:w.count)||0}catch{ce=!1,me=0}let V=!0;try{const{data:i}=await _e.from("settings").select("value").eq("key","sports_visibility").maybeSingle();i!=null&&i.value&&(V=i.value.enabled!==!1&&i.value.student_menu!==!1)}catch{V=!0}let re=!1;try{const{data:i}=await _e.from("azfutsal_players").select("id").eq("student_id",e.id).maybeSingle();re=!!i}catch{re=!1}se(`
    <!-- Profile card -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-6 mb-4 flex items-center gap-4 sm:gap-6">
      <div class="w-14 h-20 rounded-t-2xl rounded-b-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-2xl font-bold shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover object-top"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <p class="font-bold text-gray-800 text-base truncate">${e.full_name}</p>
          ${E?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
              👑 หัวหน้าห้อง
            </span>
          `:""}
          ${H?`
            <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
              🥈 รองหัวหน้าห้อง
            </span>
          `:""}
        </div>
        <p class="text-xs text-gray-400 mt-0.5 truncate">รหัส ${e.student_code} · ${ve(e.main_room??"—")}</p>
      </div>
    </div>

    <!-- ระบบอื่น ๆ — กริดไอคอนแอปเลื่อนแนวนอนได้ถ้ามีมากกว่าที่จอแสดงพอดี (sportsVisible/councilVisible/
         terangganuVisible/regradeVisible/can_scan_prayer ล้วนเปิด-ปิดแยกอิสระ รวมกันอาจเกิน 4 ช่องได้)
         — เกียรติบัตรแสดงเสมอ ส่วนที่เหลือ conditional เหมือนเดิมทุกประการ แค่เปลี่ยนรูปแบบจากแบนเนอร์
         เต็มแถว/แถบเมนูล่างถาวร (กีฬาสี) มาเป็นไอคอน -->
    <div class="mb-4">
      <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</p>
      ${[V,re,R,ae,ce,e.can_scan_prayer].filter(Boolean).length+1>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${ke({id:"btn-stu-my-certificates",emoji:"🎖️",label:"เกียรติบัตร<br>ของฉัน",from:"#FCE7A8",to:"#E3B657"},u.iconTileStyle)}
        ${V?ke({emoji:"🏆",label:"กีฬาสี",from:"#FDD9B5",to:"#E8865C",onclick:"window._stuNav('sports')"},u.iconTileStyle):""}
        ${re?ke({emoji:"⚽",label:"ฟุตซอล",from:"#C6E6FA",to:"#4F9BD6",onclick:"window._stuNav('futsal')"},u.iconTileStyle):""}
        ${R?ke({emoji:"🏛️",label:"สภา<br>นักเรียน",from:"#E2D3F5",to:"#9663D1",onclick:"window.location.href='council.html'"},u.iconTileStyle):""}
        ${ae?ke({emoji:"⚜️",label:"ค่าย<br>TERANGGANU",from:"#B7ECDB",to:"#3F9C7E",onclick:"window.location.href='terangganu.html'"},u.iconTileStyle):""}
        ${ce?ke({id:"student-regrade-tile",emoji:"📋",label:"แก้ค้างเก่า",from:"#FBD0D6",to:"#E0616F",badge:me,onclick:"window.location.href='regrade.html'"},u.iconTileStyle):""}
        ${e.can_scan_prayer?ke({emoji:"🗂️",label:"ประวัติ<br>การสแกน",from:"#B7ECDB",to:"#5FBFA3",onclick:"window._stuNav('prayer_scan_history')"},u.iconTileStyle):""}
      </div>
    </div>

    <!-- Scanner Access Banner — เร่งด่วน/ตามช่วงเวลาจริง จึงยังคงเป็นแบนเนอร์เด่นเหมือนเดิม ไม่ยุบเป็นไอคอน -->
    ${_t(e,u)&&We(u,$)?`
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
    ${v.map(i=>{var S,P;const w=i.attempts.some(o=>o.status==="in_progress");return`
      <div class="relative overflow-hidden rounded-2xl border shadow-md p-4 sm:p-5 mb-4 text-white flex items-center justify-between gap-4"
        style="background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:rgba(99,102,241,.3)">
        <div class="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none">📝</div>
        <div class="min-w-0 z-10">
          <h4 class="font-bold text-sm sm:text-base">📝 ${w?"กำลังทำแบบทดสอบอยู่":"มีแบบทดสอบเปิดสอบอยู่ตอนนี้"}</h4>
          <p class="text-xs text-indigo-100 mt-1 truncate">${X(i.title)} · ${X(((P=(S=i._class)==null?void 0:S.master_subjects)==null?void 0:P.subject_name)??"")}</p>
        </div>
        <button onclick="window._stuStartQuiz('${i.id}')" class="relative z-10 px-4 py-2 bg-white text-indigo-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow flex-shrink-0">
          ${w?"ทำต่อ →":"เข้าสอบ →"}
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
        <p class="text-xl sm:text-3xl font-bold text-amber-600">${z.length}</p>
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
      ${(()=>{const i=`stu_ann_seen_${e.id}`,w=new Set(JSON.parse(localStorage.getItem(i)??"[]")),S=c.filter(P=>!w.has(P.id)).length;return`<button id="btn-stu-anns"
          class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150"
          style="background:linear-gradient(135deg,#d97706,#b45309)">
          <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
          <p class="text-xl mb-2 relative">📢</p>
          <p class="font-bold text-sm text-white relative">ประกาศของฉัน</p>
          <p class="text-[10px] text-amber-200 mt-0.5 relative">${c.length} รายการ</p>
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
    ${(()=>{const i=b.length>0,w=b[0],S=w!=null&&w.due_at?new Date(w.due_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):null;return`<button onclick="window._stuNav('assignments')"
        class="relative overflow-hidden rounded-2xl p-4 text-left shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 w-full mb-4 flex items-center gap-3"
        style="background:linear-gradient(135deg,${i?"#dc2626,#b91c1c":"#059669,#047857"})">
        <div class="absolute inset-0 bg-white opacity-[0.07] rounded-2xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-white opacity-30 rounded-t-2xl"></div>
        <p class="text-2xl relative flex-shrink-0">📝</p>
        <div class="relative min-w-0 flex-1">
          <p class="font-bold text-sm text-white">ภาระงานของฉัน</p>
          <p class="text-[11px] ${i?"text-red-200":"text-emerald-200"} mt-0.5 truncate">${i?`ค้างอยู่ ${b.length} ชิ้น · ใกล้สุด: ${X(w.title)}${S?` (${S})`:""}`:"ไม่มีงานค้าง 🎉"}</p>
        </div>
        <p class="relative text-white text-lg flex-shrink-0">→</p>
      </button>`})()}

    <!-- รูทีนของวัน -->
    ${(()=>{const w=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"][new Date().getDay()],S=new Date,P=S.getHours()*3600+S.getMinutes()*60+S.getSeconds(),o=n=>{if(!n)return null;const[_,N]=n.split(":").map(Number);return _*3600+N*60},y=l.linked.map(({cls:n,sched:_,period:N})=>{var W,K;const U=n==null?void 0:n.master_subjects,B=o(N==null?void 0:N.start_time),O=o(N==null?void 0:N.end_time),D=B!=null&&O!=null&&P>=B&&P<O,r=O!=null&&P>=O,m=D?"🟢":r?"✅":"⬜",C=N?`${(W=N.start_time)==null?void 0:W.slice(0,5)}–${(K=N.end_time)==null?void 0:K.slice(0,5)}`:`คาบ ${_.period_no}`;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">${m}</span>
          <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-xs font-bold text-emerald-700">${_.period_no}</div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${(U==null?void 0:U.subject_name)??_.subject_name??"—"}</p>
            <p class="text-[11px] text-gray-400">${C} · ${(n==null?void 0:n.class_name)??""}</p>
          </div>
          ${D?'<span id="stu-period-countdown" class="text-xs font-bold text-emerald-600 tabular-nums flex-shrink-0">—</span>':""}
        </div>`}).join(""),h=c.filter(n=>n.ann_type==="deadline"&&n.deadline_at&&new Date(n.deadline_at)>S).sort((n,_)=>new Date(n.deadline_at)-new Date(_.deadline_at)).slice(0,5),j=n=>{const _=new Date(n)-S,N=Math.floor(_/6e4);if(N<60)return`<span class="text-red-600 font-bold text-[10px]">🔴 อีก ${N} น.</span>`;const U=Math.floor(N/60);return U<24?`<span class="text-orange-500 font-semibold text-[10px]">🟠 อีก ${U} ชม. ${N%60} น.</span>`:`<span class="text-amber-600 text-[10px]">📅 อีก ${Math.floor(U/24)} วัน</span>`},I=h.map(n=>{var N,U;const _=(N=n.cls)==null?void 0:N.master_subjects;return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span class="text-base flex-shrink-0">⏰</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${n.title??""}</p>
            <p class="text-[10px] text-gray-400 truncate">${(_==null?void 0:_.subject_name)??""} · ${((U=n.cls)==null?void 0:U.class_name)??""}</p>
          </div>
          <div class="flex-shrink-0">${j(n.deadline_at)}</div>
        </div>`}).join("");return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span class="text-sm font-bold text-gray-700 whitespace-nowrap">📅 ${w}</span>
            <span class="text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full">${S.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
            <span id="stu-live-clock"
              class="text-sm font-mono font-bold tabular-nums whitespace-nowrap px-2 py-0.5 rounded-lg"
              style="background:var(--theme-primary-soft,#d1fae5);color:var(--theme-primary,#059669)"></span>
          </div>
          <button id="btn-stu-timetable" class="text-[10px] text-teal-600 font-semibold hover:text-teal-800 transition flex items-center gap-0.5 flex-shrink-0">📋 ตารางเรียน →</button>
        </div>
        ${y?`
        <div class="px-3 py-1.5 bg-emerald-50 border-b border-emerald-100">
          <p class="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">🕐 คาบเรียน</p>
        </div>
        <div class="px-4">${y}</div>`:'<div class="px-4"><p class="text-xs text-gray-400 text-center py-4">ไม่มีคาบเรียนวันนี้</p></div>'}
        ${I?`
        <div class="px-3 py-1.5 bg-amber-50 border-t border-amber-100 border-b border-amber-100">
          <p class="text-[10px] font-semibold text-amber-600 uppercase tracking-wide">⏰ กำหนดการ</p>
        </div>
        <div class="px-4">${I}</div>`:""}
      </div>`})()}


    <!-- Recent requests -->
    ${A.length>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📋 คำร้องล่าสุด</h3>
        <button onclick="window._stuNav('requests')" class="text-xs text-emerald-600 font-medium">ดูทั้งหมด →</button>
      </div>
      <div class="divide-y divide-gray-50">
        ${A.map(i=>{var P;const w=je[i.status]??je.pending,S=i.classes;return`<div class="px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs font-semibold text-gray-800 truncate">${((P=S==null?void 0:S.master_subjects)==null?void 0:P.subject_name)??"—"}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${i.request_type} · ${Le(i.requested_date)}</p>
              </div>
              <span class="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${w.cls}">${w.label}</span>
            </div>
          </div>`}).join("")}
      </div>
    </div>`:`
    <div class="text-center py-8 text-gray-300">
      <p class="text-3xl mb-2">📭</p>
      <p class="text-sm">ยังไม่มีคำร้อง</p>
    </div>`}
  `);const de=document.getElementById("stu-live-clock");if(de){const i=()=>{const S=new Date;de.textContent=`${String(S.getHours()).padStart(2,"0")}:${String(S.getMinutes()).padStart(2,"0")}:${String(S.getSeconds()).padStart(2,"0")}`};i();const w=setInterval(()=>{if(!document.getElementById("stu-live-clock")){clearInterval(w);return}i()},1e3)}const ne=(i,w)=>{const S=document.createElement("div");return S.className="stu-fullpop fixed inset-0 z-[400] bg-white flex flex-col",S.innerHTML=`
    <div class="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
      <button id="stu-popup-back" class="text-emerald-600 font-medium text-sm">← กลับ</button>
      <h3 class="font-bold text-gray-800 flex-1">${i}</h3>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-4">${w}</div>`,document.body.appendChild(S),S.querySelector("#stu-popup-back").addEventListener("click",()=>S.remove()),S},pe=l.linked.find(({period:i})=>{if(!(i!=null&&i.start_time)||!(i!=null&&i.end_time))return!1;const w=new Date,S=w.getHours()*3600+w.getMinutes()*60+w.getSeconds(),[P,o]=i.start_time.split(":").map(Number),[y,h]=i.end_time.split(":").map(Number);return S>=P*3600+o*60&&S<y*3600+h*60});if(pe){const i=(()=>{const[S,P]=pe.period.end_time.split(":").map(Number);return S*3600+P*60})(),w=setInterval(()=>{const S=document.getElementById("stu-period-countdown");if(!S){clearInterval(w);return}const P=new Date().getHours()*3600+new Date().getMinutes()*60+new Date().getSeconds(),o=Math.max(0,i-P);if(o===0){S.textContent="หมดคาบ",clearInterval(w);return}const y=Math.floor(o/3600),h=Math.floor(o%3600/60),j=o%60;S.textContent=`${String(y).padStart(2,"0")}:${String(h).padStart(2,"0")}:${String(j).padStart(2,"0")}`},1e3)}const ge={general:{icon:"📢",label:"ประกาศ",bg:"bg-gray-50",border:"border-gray-200"},deadline:{icon:"⏰",label:"กำหนดส่งงาน/สอบ",bg:"bg-red-50",border:"border-red-200"},learning_doc:{icon:"📄",label:"เอกสารประกอบการเรียน",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{icon:"📝",label:"แบบฝึกเพิ่มเติม",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{icon:"📋",label:"แนวข้อสอบ",bg:"bg-amber-50",border:"border-amber-200"}},$e=i=>{if(!i)return"";const w=new Date(i),P=Math.floor((w-new Date)/6e4),o=w.toLocaleDateString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});if(P<0)return`<span class="text-red-500 text-xs font-bold">⛔ หมดเวลา · ${o}</span>`;if(P<60)return`<span class="text-red-600 text-xs font-bold">🔴 อีก ${P} น. · ${o}</span>`;const y=Math.floor(P/60);return y<24?`<span class="text-orange-500 text-xs font-semibold">🟠 อีก ${y} ชม. ${P%60} น. · ${o}</span>`:`<span class="text-amber-600 text-xs">📅 อีก ${Math.floor(y/24)} วัน · ${o}</span>`};(be=document.getElementById("btn-stu-my-certificates"))==null||be.addEventListener("click",()=>vt(e)),(f=document.getElementById("btn-stu-anns"))==null||f.addEventListener("click",()=>{const i=`stu_ann_seen_${e.id}`,w=new Set(JSON.parse(localStorage.getItem(i)??"[]"));c.forEach(o=>w.add(o.id)),localStorage.setItem(i,JSON.stringify([...w]));const S=document.querySelector("#btn-stu-anns span.absolute");S&&S.remove();const P=c.length?`<div class="space-y-3">${c.map(o=>{var j,I,n;const y=ge[o.ann_type]??ge.general,h=(j=o.cls)==null?void 0:j.master_subjects;return`<div class="rounded-2xl border ${y.border} ${y.bg} p-4">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${o.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌</span>':""}
          <span class="text-[10px] text-gray-500">${y.icon} ${y.label}</span>
          <span class="text-[10px] text-gray-400 ml-auto">${(h==null?void 0:h.subject_name)??""} · ${((I=o.cls)==null?void 0:I.class_name)??""}</span>
        </div>
        <p class="text-sm font-semibold text-gray-800">${o.title??""}</p>
        ${o.body?`<p class="text-xs text-gray-500 mt-1">${o.body}</p>`:""}
        ${o.ann_type==="deadline"&&o.deadline_at?`<div class="mt-2">${$e(o.deadline_at)}</div>`:""}
        ${o.file_url?`<a href="${o.file_url}" target="_blank" class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">📎 เปิดไฟล์ →</a>`:""}
        ${(n=o.attachment_urls)!=null&&n.length?`<div class="flex flex-wrap gap-1.5 mt-2">${o.attachment_urls.map(_=>`<a href="${X(_.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${X(_.name)}</a>`).join("")}</div>`:""}
      </div>`}).join("")}</div>`:'<p class="text-center text-gray-400 py-16 text-sm">ยังไม่มีประกาศ</p>';ne("📢 ประกาศของฉัน",P)}),(J=document.getElementById("btn-stu-gpa"))==null||J.addEventListener("click",()=>{const i=I=>{const n=I.filter(U=>U.grade!=null);if(!n.length)return null;const _=n.reduce((U,B)=>U+(B.credit||1),0),N=n.reduce((U,B)=>U+B.grade*(B.credit||1),0);return _>0?(N/_).toFixed(2):null},w=I=>I==null?"text-gray-400":I>=3.5?"text-emerald-600":I>=3?"text-blue-500":I>=2?"text-amber-600":"text-red-500",S=I=>I>=3.5?"ดีเยี่ยม":I>=3?"ดี":I>=2?"พอใช้":I>=1?"ผ่าน":"ไม่ผ่าน",P=(I,n,_,N)=>{const U=I.filter(D=>D.grade!=null),B=U.reduce((D,r)=>D+(r.credit||1),0);U.reduce((D,r)=>D+r.grade*(r.credit||1),0);const O=parseFloat(n);return`
      <div class="flex items-end justify-end gap-3 mb-4">
        <button id="gpa-val-btn-${N}" class="text-5xl font-extrabold ${n?w(O):"text-gray-300"} hover:opacity-70 transition">${n??"—"}</button>
        <div class="mb-1.5">
          <p class="text-base font-semibold ${n?w(O):"text-gray-400"}">${n?S(O):"—"}</p>
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
            ${I.map((D,r)=>`
            <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
              <td class="px-4 py-2.5 text-gray-400">${r+1}</td>
              <td class="px-2 py-2.5 min-w-0">
                <p class="text-gray-400 font-mono text-[10px]">${D.subjectCode??""}</p>
                <p class="font-semibold text-gray-800 leading-tight">${D.subjectName}</p>
              </td>
              <td class="px-2 py-2.5 text-center text-gray-600">${D.credit}</td>
              <td class="px-2 py-2.5 text-center font-medium text-gray-700">${D.score!=null?D.score:"—"}</td>
              <td class="px-2 py-2.5 text-center font-bold ${w(D.grade)}">${D.grade!=null?D.grade.toFixed(1):"—"}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">${D.hasRetake?"✓":""}</td>
              <td class="px-2 py-2.5 text-center">
                <button class="gpa-pp5-btn px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold hover:bg-emerald-600 transition"
                  data-class-id="${D.classId}">→</button>
              </td>
            </tr>`).join("")}
            <!-- แถวรวม -->
            <tr class="border-t border-gray-200 bg-gray-50 font-semibold">
              <td colspan="2" class="px-4 py-2 text-xs text-gray-600 text-right">รวม</td>
              <td class="px-2 py-2 text-center text-gray-700">${B}</td>
              <td class="px-2 py-2 text-center text-gray-400">—</td>
              <td colspan="3"></td>
            </tr>
            <!-- แถว GPA -->
            <tr class="border-t-2 border-gray-300 bg-purple-50">
              <td colspan="2" class="px-4 py-2.5 text-xs font-bold text-gray-700 text-right">ผลการเรียนเฉลี่ยรายภาคเรียน</td>
              <td class="px-2 py-2.5 text-center text-xs text-gray-600">${B}</td>
              <td class="px-2 py-2.5 text-center text-gray-400">—</td>
              <td class="px-2 py-2.5 text-center text-sm font-extrabold ${w(n?O:null)}">${n??"—"}</td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>`:'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลคะแนน</p>'}`},o=i(p.samai),y=i(p.sasana),h=`
      <div id="gpa-pop-tabs" class="flex gap-2 mb-4">
        <button data-tab="samai" class="gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold bg-purple-600 text-white">สามัญ</button>
        <button data-tab="sasana" class="gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold text-gray-500 border border-gray-200">ศาสนา</button>
      </div>
      <div id="gpa-pop-samai">${P(p.samai,o,"กลุ่มสามัญ","samai")}</div>
      <div id="gpa-pop-sasana" class="hidden">${P(p.sasana,y,"กลุ่มศาสนา","sasana")}</div>`,j=ne("🎓 เกรดเฉลี่ยของฉัน",h);j.querySelectorAll(".gpa-pop-tab").forEach(I=>{I.addEventListener("click",()=>{const n=I.dataset.tab;j.querySelector("#gpa-pop-samai").classList.toggle("hidden",n!=="samai"),j.querySelector("#gpa-pop-sasana").classList.toggle("hidden",n!=="sasana"),j.querySelectorAll(".gpa-pop-tab").forEach(_=>{_.className=`gpa-pop-tab flex-1 py-2 rounded-xl text-sm font-semibold ${_.dataset.tab===n?"bg-purple-600 text-white":"text-gray-500 border border-gray-200"}`})})}),j.querySelectorAll(".gpa-pp5-btn").forEach(I=>{I.addEventListener("click",()=>{var _;const n=Number(I.dataset.classId);j.remove(),(_=window._stuOpenClass)==null||_.call(window,n)})}),["samai","sasana"].forEach(I=>{const n=j.querySelector(`#gpa-val-btn-${I}`);n&&n.addEventListener("click",()=>{const N=(I==="samai"?p.samai:p.sasana).filter(r=>r.grade!=null),U=N.reduce((r,m)=>r+(m.credit||1),0),B=N.reduce((r,m)=>r+m.grade*(m.credit||1),0),O=U>0?(B/U).toFixed(2):"—",D=document.createElement("div");D.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/40 p-6",D.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full text-center">
          <p class="font-bold text-gray-800 mb-4">สูตรการคำนวณเกรดเฉลี่ย</p>
          <div class="text-sm text-gray-600 mb-3">
            <p class="font-mono text-base font-semibold text-purple-700">
              Σ(เกรด × หน่วยกิต) ÷ Σหน่วยกิต
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4 text-sm font-mono">
            <p class="text-gray-700">${B.toFixed(2)} ÷ ${U}</p>
            <p class="text-purple-700 font-bold text-lg mt-1">= ${O}</p>
          </div>
          <p class="text-xs text-gray-400 mt-3">คิดเฉพาะวิชาที่มีผลการเรียน (${N.length} วิชา)</p>
          <button id="gpa-tip-close" class="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold">ปิด</button>
        </div>`,document.body.appendChild(D),D.querySelector("#gpa-tip-close").addEventListener("click",()=>D.remove()),D.addEventListener("click",r=>{r.target===D&&D.remove()})})})}),window._stuOpenClassFromTT=i=>{var w;document.querySelectorAll(".stu-fullpop").forEach(S=>S.remove()),window._stuFromTimetable=!0,(w=window._stuOpenClass)==null||w.call(window,i)},window._stuBackFromSubject=()=>{window._stuFromTimetable?(window._stuFromTimetable=!1,window._stuOpenTimetablePopup?(window._stuNav("overview"),setTimeout(()=>window._stuOpenTimetablePopup(),300)):window._stuNav("overview")):window._stuNav("subjects")};const ue=async()=>{const i=ne("📅 ตารางเรียน",`<div class="flex justify-center py-10 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg></div>`),{slots:w,periods:S}=await Qt(e.id).catch(()=>({slots:[],periods:[]})),P=i.querySelector(".flex-1.overflow-y-auto");if(!P)return;const o=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],y=["อา","จ","อ","พ","พฤ","ศ","ส"],h=[0,1,2,3,4,5,6].filter(O=>w.some(D=>D.dow===O)),j=new Date().getDay();let I="day",n=h.includes(j)?j:h[0]??0;const _={};w.forEach(O=>{_[`${O.dow}-${O.periodNo}`]=O});const N=O=>{var te,L,G,g;const D=new Date,r=D.getHours()*3600+D.getMinutes()*60+D.getSeconds(),m={};w.filter(k=>k.dow===O&&k.span>1).forEach(k=>{for(let M=1;M<k.span;M++)m[k.periodNo+M]=k.periodNo});const C=((L=(te=S.find(k=>k.period_no===5))==null?void 0:te.end_time)==null?void 0:L.slice(0,5))??"",W=((g=(G=S.find(k=>k.period_no===6))==null?void 0:G.start_time)==null?void 0:g.slice(0,5))??"",K=C&&W?`${C}–${W}`:"";let Z="";return S.forEach(k=>{var Xe,Ze;k.period_no===6&&S.find(ze=>ze.period_no===5)&&(Z+=`<tr>
            <td colspan="2" class="bg-emerald-50 text-center py-2.5 border-b border-emerald-100">
              <p class="text-[11px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี</p>
              ${K?`<p class="text-[10px] text-emerald-500 mt-0.5">${K}</p>`:""}
            </td></tr>`);const M=_[`${O}-${k.period_no}`],ee=(M==null?void 0:M.span)??1,le=ee>1?S.find(ze=>ze.period_no===k.period_no+ee-1)??k:k,[oe,ye]=(k.start_time??"0:0").split(":").map(Number),[xe,Ie]=(le.end_time??"0:0").split(":").map(Number),Be=r>=oe*3600+ye*60&&r<xe*3600+Ie*60,he=(Xe=M==null?void 0:M.cls)==null?void 0:Xe.master_subjects,De=["AGM","AGMVOC"].includes((he==null?void 0:he.subject_group)??""),Ke=M?De?"bg-amber-50":"bg-emerald-50":"",qe=M?De?"text-amber-800":"text-emerald-800":"text-gray-300",Se=m[k.period_no]!=null;Z+=`<tr>
          <td class="border-b border-gray-100 border-r border-gray-100 text-center py-2 px-1 bg-gray-50 align-middle" style="width:56px">
            <p class="text-xs font-bold ${Be?"text-emerald-600":"text-gray-500"}">คาบ ${k.period_no}</p>
            <p class="text-[10px] text-gray-400">${((Ze=k.start_time)==null?void 0:Ze.slice(0,5))??""}</p>
          </td>
          ${Se?"":`
          <td class="border-b border-gray-100 p-1.5" style="vertical-align:stretch"
              ${ee>1?`rowspan="${ee}"`:""}
              ${M?`onclick="window._stuOpenClassFromTT(${M.cls.id})"`:""}>
            ${M?`
              <div class="rounded-xl ${Ke} border-l-4 ${De?"border-amber-400":"border-emerald-400"}
                px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer
                ${Be?"ring-2 ring-emerald-400":""}"
                style="height:100%;min-height:${ee>1?ee*52:48}px;display:flex;flex-direction:column;justify-content:center">
                <p class="text-sm font-semibold ${qe} leading-tight">${(he==null?void 0:he.subject_name)??"—"}</p>
                <p class="text-[10px] ${qe} opacity-60 mt-0.5">${(he==null?void 0:he.subject_code)??""}</p>
                ${Be?'<p id="tt-day-cd" class="text-[10px] font-bold text-emerald-600 tabular-nums mt-1">—</p>':""}
              </div>`:'<div class="h-10 flex items-center justify-center"><span class="text-xs text-gray-200">—</span></div>'}
          </td>`}
        </tr>`}),`<table class="w-full border-collapse">
        <tbody>${Z}</tbody>
      </table>`},U=()=>{const O=`${Math.floor(100/(h.length+1))}%`,D=`<th style="width:${O}" class="py-2 text-[9px] text-gray-400 font-medium text-center border-r border-gray-100">คาบ</th>`+h.map(C=>`<th style="width:${O}" class="py-2 text-[9px] font-bold text-center border-r border-gray-100 last:border-0 ${C===j?"text-teal-600":"text-gray-600"}">${y[C]}</th>`).join(""),r={};h.forEach(C=>{r[C]=new Set});let m="";return S.forEach((C,W)=>{var te,L,G,g;const K=new Date;K.getHours()*3600+K.getMinutes()*60+K.getSeconds();const Z=h.map(k=>{var qe;if(r[k].has(C.period_no))return"";const M=_[`${k}-${C.period_no}`],ee=(M==null?void 0:M.span)??1,le=(qe=M==null?void 0:M.cls)==null?void 0:qe.master_subjects,oe=["AGM","AGMVOC"].includes((le==null?void 0:le.subject_group)??""),ye=M?oe?"bg-amber-50":"bg-emerald-50":"",xe=M?oe?"text-amber-700":"text-emerald-700":"text-gray-200",Ie=ee>1?S.find(Se=>Se.period_no===C.period_no+ee-1)??C:C,[Be,he]=(C.start_time??"0:0").split(":").map(Number),[De,Ke]=(Ie.end_time??"0:0").split(":").map(Number);for(let Se=1;Se<ee;Se++)r[k].add(C.period_no+Se);return`<td style="width:${O};padding:2px" ${ee>1?`rowspan="${ee}"`:""}
            class="border-r border-gray-100 last:border-0 border-b border-gray-50 align-middle"
            ${M?`onclick="window._stuOpenClassFromTT(${M.cls.id})"`:""}>
            ${M?`
              <div class="rounded-lg ${ye} border-l-2 ${oe?"border-amber-400":"border-emerald-400"}
                px-1 py-1 shadow-sm hover:shadow transition cursor-pointer text-center"
                style="min-height:${ee>1?ee*36:32}px;display:flex;flex-direction:column;justify-content:center">
                <p class="${xe} text-[8px] font-semibold leading-tight line-clamp-3">${(le==null?void 0:le.subject_name)??""}</p>
              </div>`:'<div style="height:32px"></div>'}
          </td>`}).join("");if(m+=`<tr>
          <td style="width:${O}" class="border-r border-gray-100 border-b border-gray-50 text-center py-1 bg-gray-50">
            <p class="text-[9px] font-bold text-gray-500">${C.period_no}</p>
            <p class="text-[8px] text-gray-300">${((te=C.start_time)==null?void 0:te.slice(0,5))??""}</p>
          </td>${Z}</tr>`,C.period_no===5&&S.find(k=>k.period_no===6)){const k=((L=C.end_time)==null?void 0:L.slice(0,5))??"",M=((g=(G=S.find(ee=>ee.period_no===6))==null?void 0:G.start_time)==null?void 0:g.slice(0,5))??"";m+=`<tr><td colspan="${h.length+1}" class="bg-emerald-50 text-center py-1.5 border-b border-emerald-100">
            <p class="text-[9px] font-semibold text-emerald-700">🕌 พักเที่ยง / รับประทานอาหาร / ละหมาดซุฮรี${k&&M?` ${k}–${M}`:""}</p>
          </td></tr>`}}),`<div class="overflow-x-auto -mx-4">
        <table class="w-full border-collapse" style="min-width:100%">
          <thead><tr class="border-b-2 border-gray-200">${D}</tr></thead>
          <tbody>${m}</tbody>
        </table>
      </div>`},B=()=>{var D,r,m,C;const O=I==="week";if(P.innerHTML=`
      <!-- mode toggle -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 bg-gray-100 rounded-xl p-1">
          <button id="tt-btn-day" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${O?"text-gray-500":"bg-white shadow text-teal-600"}">รายวัน</button>
          <button id="tt-btn-week" class="tt-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${O?"bg-white shadow text-teal-600":"text-gray-500"}">ทั้งสัปดาห์</button>
        </div>
        ${O?"":`
        <div class="flex items-center gap-2">
          <button id="tt-prev" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">◀</button>
          <span class="text-sm font-semibold text-gray-700">${o[n]}</span>
          <button id="tt-next" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm">▶</button>
        </div>`}
      </div>
      ${O?U():N(n)}
      ${w.length?"":'<p class="text-xs text-gray-400 text-center py-8">ยังไม่มีข้อมูลตารางสอน — ครูต้องเชื่อมตารางสอนก่อน</p>'}`,(D=P.querySelector("#tt-btn-day"))==null||D.addEventListener("click",()=>{I="day",B()}),(r=P.querySelector("#tt-btn-week"))==null||r.addEventListener("click",()=>{I="week",B()}),(m=P.querySelector("#tt-prev"))==null||m.addEventListener("click",()=>{const W=h.indexOf(n);n=h[(W-1+h.length)%h.length],B()}),(C=P.querySelector("#tt-next"))==null||C.addEventListener("click",()=>{const W=h.indexOf(n);n=h[(W+1)%h.length],B()}),!O&&P.querySelector("#tt-day-cd")){const K=S.find(Z=>{if(!_[`${n}-${Z.period_no}`]||!Z.end_time)return!1;const L=new Date,G=L.getHours()*3600+L.getMinutes()*60+L.getSeconds(),[g,k]=Z.end_time.split(":").map(Number),[M,ee]=(Z.start_time??"0:0").split(":").map(Number);return G>=M*3600+ee*60&&G<g*3600+k*60});if(K){const[Z,te]=K.end_time.split(":").map(Number),L=Z*3600+te*60,G=setInterval(()=>{const g=P.querySelector("#tt-day-cd");if(!g){clearInterval(G);return}const k=new Date,M=Math.max(0,L-k.getHours()*3600-k.getMinutes()*60-k.getSeconds()),ee=Math.floor(M/3600),le=Math.floor(M%3600/60),oe=M%60;g.textContent=`${String(ee).padStart(2,"0")}:${String(le).padStart(2,"0")}:${String(oe).padStart(2,"0")}`,M===0&&clearInterval(G)},1e3)}}};B()};window._stuOpenTimetablePopup=ue,(Q=document.getElementById("btn-stu-timetable"))==null||Q.addEventListener("click",ue),window._stuStartQuiz=async i=>{try{const w=await ft(i,e.id).catch(()=>null);if(w&&w.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${w.id}`;return}const S=await yt(i);window.location.href=`quiz-exam.html?attempt=${S.id}`}catch(w){Y("เข้าสอบไม่สำเร็จ: "+(w.message??""),"error")}}}async function Ws(e,t="life"){se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await Ce().catch(()=>({}));Xt(s);const l=s.academicYear,c=s.semester,[p,u,q]=await Promise.all([Nt(e.id,l,c).catch(V=>({columns:[],scores:[],error:V})),Pt(e.id,l,c).catch(V=>({columns:[],scores:[],error:V})),Ht(e.id).catch(V=>Object.assign([],{error:V}))]),T=nt(p.columns,p.scores),b=nt(u.columns,u.scores),z=b.reduce((V,re)=>V+(parseFloat(re.score)||0),0),A=b.reduce((V,re)=>V+(parseFloat(re.max_score)||0),0),$=A>0?Math.round(z/A*1e3)/10:0,a=z>0?Zt($):null,d=Object.fromEntries((q??[]).map(V=>[V.check_date,V.status])),x=$t(s.semester_start,q??[]),v=x.flatMap(V=>V.days),E=v.reduce((V,re)=>{var de;return V+(((de=Te[d[re.ds]])==null?void 0:de.score)??0)},0),H=v.length*2,F=H?Math.max(0,Math.round(E/H*100)/10):0,R=(V,re,de,ne)=>`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-gray-800 text-sm">${re} ${V}</h3>
        <span class="text-[11px] text-gray-400">${de.length} หัวข้อ</span>
      </div>
      ${de.length?`<div class="divide-y divide-gray-50">
        ${de.map(pe=>`
          <div class="px-4 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-700 truncate">${pe.name}</p>
              <p class="text-[11px] text-gray-400">${pe.sheet_col?`คอลัมน์ ${pe.sheet_col} · `:""}เต็ม ${pe.max_score??"—"}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-lg font-bold ${ne}">${pe.score??"—"}</p>
              <p class="text-[10px] text-gray-400">/ ${pe.max_score??"—"}</p>
            </div>
          </div>`).join("")}
      </div>`:'<div class="py-8 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลคะแนน</div>'}
    </section>`,ae=`
    <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">20 สัปดาห์ · สัปดาห์ละ 5 วัน</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-amber-600">${F}</p>
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
            ${x.map(V=>`<tr>
              <td class="px-2 py-2 font-semibold text-gray-600">สัปดาห์ ${V.n}</td>
              ${V.days.map(re=>{const de=d[re.ds],ne=Te[de];return`<td class="px-1 py-1 text-center">
                  <span title="${(ne==null?void 0:ne.title)??"ยังไม่บันทึก"}" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold ${(ne==null?void 0:ne.cls)??"bg-gray-50 text-gray-300 border-gray-100"}">${(ne==null?void 0:ne.label)??"—"}</span>
                </td>`}).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="px-4 py-3 border-t border-gray-50 flex flex-wrap gap-2 text-[10px] text-gray-400">
        ${Object.values(Te).map(V=>`<span><b class="${V.cls.split(" ").find(re=>re.startsWith("text-"))??""}">${V.label}</b> ${V.title}</span>`).join("")}
      </div>
    </section>
  `,ce={life:"คะแนนทักษะชีวิต",prayer:"คะแนนละหมาด",reading:"คะแนนอ่านคิดวิเคราะห์ฯ"}[t]??"คะแนนทักษะชีวิต",me={life:R("คะแนนทักษะชีวิต","🌱",T,"text-emerald-600"),prayer:ae,reading:`
      <section class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">📝 ผลประเมินการอ่าน</h3>
            <p class="text-[11px] text-gray-400 mt-0.5">คำนวณจากคะแนนอ่านคิดวิเคราะห์ฯ ทั้งหมด</p>
          </div>
          <div class="text-right flex-shrink-0">
            ${a?`<span class="inline-flex px-3 py-1 rounded-full border text-sm font-bold ${a.cls}">${a.label}</span>`:'<span class="text-sm font-semibold text-gray-300">—</span>'}
            <p class="text-[11px] text-gray-400 mt-1">${z?`${$} / 100`:"ยังไม่มีคะแนน"}</p>
          </div>
        </div>
        <div class="px-4 pb-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-sky-50 border border-sky-100 py-3">
            <p class="text-lg font-bold text-sky-700">${z||"—"}</p>
            <p class="text-[10px] text-sky-500">คะแนนรวม / ${A||"—"}</p>
          </div>
          <div class="rounded-xl bg-indigo-50 border border-indigo-100 py-3">
            <p class="text-lg font-bold text-indigo-700">${z?$:"—"}</p>
            <p class="text-[10px] text-indigo-500">คะแนนเทียบ 100</p>
          </div>
        </div>
      </section>
      ${R("คะแนนอ่านคิดวิเคราะห์ฯ","📖",b,"text-sky-600")}
    `}[t]??R("คะแนนทักษะชีวิต","🌱",T,"text-emerald-600");se(`
    <h2 class="font-bold text-gray-800 mb-1">📊 คะแนนของฉัน</h2>
    <p class="text-xs text-gray-400 mb-2">คะแนนรวมอื่น ๆ นอกเหนือจากคะแนนรายวิชา · ภาค ${c??"—"} / ${l??"—"}</p>
    <p class="text-sm font-semibold text-gray-700 mb-4">${ce}</p>
    ${me}
  `)}async function _s(e){se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[t,s]=await Promise.all([Oe(e.id).catch(()=>[]),Ut().catch(()=>({}))]),l=["อา","จ","อ","พ","พฤ","ศ","ส"],c=t.length?await Rt(t.map($=>$.id)).catch(()=>({})):{},p=$=>{const a=c[$]??[];if(!a.length)return"";const d={};return a.forEach(x=>{const v=x.day_of_week;d[v]||(d[v]=[]);const E=x.span_periods??1;for(let H=0;H<E;H++)d[v].push((x.period_no??0)+H)}),Object.entries(d).sort(([x],[v])=>Number(x)-Number(v)).map(([x,v])=>{const E=[...new Set(v)].sort((F,R)=>F-R),H=E.length===1?`คาบ ${E[0]}`:`คาบ ${E[0]}–${E[E.length-1]}`;return`${l[Number(x)]??x} ${H}`}).join(" · ")};if(!t.length){se(`<div class="text-center py-16 text-gray-300">
      <p class="text-4xl mb-3">📚</p>
      <p class="font-medium text-gray-500">ยังไม่มีรายวิชา</p>
      <p class="text-xs mt-1">ติดต่อครูเพื่อลงทะเบียนรายวิชา</p>
    </div>`);return}const u=t.filter($=>{var x,v,E;const a=((x=$.master_subjects)==null?void 0:x.subject_group)??"";return!((((E=(v=$.master_subjects)==null?void 0:v.teachers)==null?void 0:E.category)??"")==="ศาสนา"||a==="AGM"||a==="AGMVOC")}),q=t.filter($=>{var x,v,E;const a=((x=$.master_subjects)==null?void 0:x.subject_group)??"";return(((E=(v=$.master_subjects)==null?void 0:v.teachers)==null?void 0:E.category)??"")==="ศาสนา"||a==="AGM"||a==="AGMVOC"}),b=(localStorage.getItem("studentSubjectsView")==="grid"?"grid":"list")==="grid";window._stuSetSubjectView=$=>{localStorage.setItem("studentSubjectsView",$==="grid"?"grid":"list"),_s(e)};const z=$=>{const a=$.master_subjects,d=a==null?void 0:a.teachers,x=bs($,s);return b?`<button onclick="window._stuOpenClass(${$.id})"
        class="min-h-[132px] border border-l-4 rounded-2xl shadow-md p-2.5 text-left cursor-pointer hover:shadow-md transition overflow-hidden"
        style="background:${x.bg}; border-color:${x.border}; border-left-color:${x.color};">
        <div class="h-full flex flex-col">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-semibold max-w-full truncate"
              style="background:${x.badgeBg}; color:${x.text};">${x.short}</span>
          </div>
          <div class="mt-2 min-w-0">
            <p class="font-bold text-[12px] leading-tight line-clamp-2" style="color:${x.text};">${(a==null?void 0:a.subject_name)??"—"}</p>
            <p class="text-[10px] text-gray-400 mt-0.5 font-mono truncate">${(a==null?void 0:a.subject_code)??""}</p>
            <p class="text-[10px] text-gray-500 mt-1 truncate">${ve($.class_name)}</p>
            ${p($.id)?`<p class="text-[9px] text-indigo-500 mt-0.5 font-medium truncate">🕐 ${p($.id)}</p>`:'<p class="text-[9px] text-amber-500 mt-0.5 font-medium">⚠️ ยังไม่มีตารางสอน</p>'}
          </div>
          <div class="mt-auto pt-2 flex items-center gap-1.5 min-w-0">
            ${d!=null&&d.image_url?`<img src="${d.image_url}" class="w-5 h-5 rounded-full object-cover flex-shrink-0"/>`:`<div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600 font-medium flex-shrink-0">${((d==null?void 0:d.full_name)??"ค").charAt(0)}</div>`}
            <span class="text-[10px] text-gray-500 truncate">${(d==null?void 0:d.full_name)??"—"}</span>
          </div>
        </div>
      </button>`:`<div onclick="window._stuOpenClass(${$.id})"
      class="border border-l-4 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-md transition"
      style="background:${x.bg}; border-color:${x.border}; border-left-color:${x.color};">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-sm leading-tight" style="color:${x.text};">${(a==null?void 0:a.subject_name)??"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5 font-mono">${(a==null?void 0:a.subject_code)??""}</p>
          <p class="text-[11px] font-medium mt-1" style="color:${x.text};">${x.label}</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style="background:${x.badgeBg}; color:${x.text};">${x.short}</span>
          <span class="text-[10px] text-gray-400">${(a==null?void 0:a.credit)??"—"} หน่วยกิต</span>
        </div>
      </div>
      ${p($.id)?`<p class="text-[11px] text-indigo-500 font-medium mt-2">🕐 ${p($.id)}</p>`:'<p class="text-[11px] text-amber-500 font-medium mt-2">⚠️ ครูยังไม่เชื่อมตารางสอน — โปรดแจ้งครูทราบ</p>'}
      <div class="flex items-center gap-3 mt-2 pt-2 border-t border-white/60">
        <div class="flex items-center gap-1.5">
          ${d!=null&&d.image_url?`<img src="${d.image_url}" class="w-6 h-6 rounded-full object-cover"/>`:`<div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">${((d==null?void 0:d.full_name)??"ค").charAt(0)}</div>`}
          <span class="text-xs text-gray-600">${(d==null?void 0:d.full_name)??"—"}</span>
        </div>
        <span class="ml-auto text-xs text-gray-400">${ve($.class_name)}</span>
      </div>
    </div>`},A=($,a,d)=>d.length?`
      <div class="mb-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">${a}</span>
          <h3 class="font-bold text-gray-700 text-sm">${$}</h3>
          <span class="ml-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${d.length} วิชา</span>
        </div>
        <div class="${b?"grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3":"space-y-3 sm:grid sm:grid-cols-2 sm:gap-3"}">
          ${d.map(z).join("")}
        </div>
      </div>`:"";se(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📚 รายวิชาของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} วิชา)</span></h2>
      <div class="flex items-center bg-gray-100 rounded-xl p-1 flex-shrink-0">
        <button type="button" onclick="window._stuSetSubjectView('list')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${b?"text-gray-400":"bg-white text-emerald-600 shadow-sm"}">แถบ</button>
        <button type="button" onclick="window._stuSetSubjectView('grid')"
          class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${b?"bg-white text-emerald-600 shadow-sm":"text-gray-400"}">กริด</button>
      </div>
    </div>
    ${A("วิชาสามัญ","📖",u)}
    ${A("วิชาศาสนา","🕌",q)}
  `)}async function $s(e,t="samai"){se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const s=await ut(e.id).catch(()=>[]),l=a=>{var v,E,H,F,R;const d=((E=(v=a._class)==null?void 0:v.master_subjects)==null?void 0:E.subject_group)??"";return(((R=(F=(H=a._class)==null?void 0:H.master_subjects)==null?void 0:F.teachers)==null?void 0:R.category)??"")==="ศาสนา"||d==="AGM"||d==="AGMVOC"},c=s.filter(a=>!l(a)),p=s.filter(a=>l(a)),u=a=>a?new Date(a).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",q=(a,d)=>a.due_at?new Date(d).getTime()>new Date(a.due_at).getTime():!1,T=a=>a.due_at?Date.now()>new Date(a.due_at).getTime():!1,b=a=>{var E,H;const d=a.mySubmission,x=d?q(a,d.submitted_at):!1,v=!d&&T(a);return`<div onclick="window._stuOpenClass(${a.class_id})"
      class="bg-white rounded-2xl border ${d?"border-emerald-100":v?"border-red-200":"border-gray-200"} shadow-sm p-3.5 cursor-pointer hover:shadow-md transition">
      <div class="flex items-start justify-between gap-2 mb-1">
        <p class="text-[10px] font-semibold text-gray-400 truncate">${X(((H=(E=a._class)==null?void 0:E.master_subjects)==null?void 0:H.subject_name)??"")}</p>
        ${d?`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${x?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${x?"⏰ ส่งช้า":"✅ ทำแล้ว"}</span>`:`<span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${v?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${v?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      <p class="font-semibold text-gray-800 text-sm">${X(a.title)}</p>
      <p class="text-xs text-gray-400 mt-1">📅 กำหนดส่ง: ${u(a.due_at)}</p>
      ${d!=null&&d.teacher_feedback?`<p class="text-[11px] text-indigo-600 mt-1.5">💬 ${X(d.teacher_feedback)}</p>`:""}
    </div>`},z=a=>{if(!a.length)return'<div class="text-center py-14 text-gray-300"><p class="text-4xl mb-2">📭</p><p class="text-sm">ไม่มีงานในกลุ่มนี้</p></div>';const d=a.filter(Me).sort((v,E)=>(v.due_at?new Date(v.due_at).getTime():1/0)-(E.due_at?new Date(E.due_at).getTime():1/0)),x=a.filter(v=>v.mySubmission&&v.mySubmission.status!=="rejected").sort((v,E)=>new Date(E.mySubmission.submitted_at).getTime()-new Date(v.mySubmission.submitted_at).getTime());return`
      <div class="mb-5">
        <p class="text-xs font-bold text-red-500 mb-2">🔴 ค้างอยู่ (${d.length})</p>
        ${d.length?`<div class="space-y-2.5">${d.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ไม่มีงานค้าง 🎉</p>'}
      </div>
      <div>
        <p class="text-xs font-bold text-emerald-600 mb-2">✅ ทำแล้ว (${x.length})</p>
        ${x.length?`<div class="space-y-2.5">${x.map(b).join("")}</div>`:'<p class="text-xs text-gray-300">ยังไม่มีงานที่ทำเสร็จ</p>'}
      </div>`},A=c.filter(Me).length,$=p.filter(Me).length;se(`
    <div class="flex items-center justify-between gap-3 mb-4">
      <h2 class="font-bold text-gray-800">📝 ภาระงานของฉัน</h2>
    </div>
    <div class="flex gap-2 mb-4">
      <button data-grp="samai" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="samai"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        📖 สามัญ ${A?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="samai"?"bg-white/25":"bg-red-100 text-red-600"}">${A}</span>`:""}
      </button>
      <button data-grp="sasana" class="stu-assign-tab flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${t==="sasana"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-500"}">
        🕌 ศาสนา ${$?`<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${t==="sasana"?"bg-white/25":"bg-red-100 text-red-600"}">${$}</span>`:""}
      </button>
    </div>
    <div id="stu-assign-content">${z(t==="sasana"?p:c)}</div>
  `),document.querySelectorAll(".stu-assign-tab").forEach(a=>{a.addEventListener("click",()=>$s(e,a.dataset.grp))})}async function Ss(e,t,s="todo"){se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const c=(await Oe(e.id).catch(()=>[])).find(r=>r.id===t);if(!c){se('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}const{getClassAnnouncements:p}=await dt(async()=>{const{getClassAnnouncements:r}=await import("./api-1xsyVspL.js");return{getClassAnnouncements:r}},__vite__mapDeps([0,1])).catch(()=>({})),[{columns:u,scores:q},T,b,z,A,$,a]=await Promise.all([Mt(e.id,t).catch(()=>({columns:[],scores:[]})),Tt(e.id,t).catch(()=>[]),Ye(e.id).catch(()=>[]),p?p(t).catch(()=>[]):Promise.resolve([]),bt(t,e.id).catch(()=>[]),Bt(t,e.id).catch(()=>[]),Dt(t).catch(()=>[])]),d=await gt(A.map(r=>r.id),e.id).catch(()=>new Set),x=window._pp5SystemCfg??await Ce().catch(()=>({})),v=Kt(x.semester_start),E=a.find(r=>v>=r.week_start&&v<=r.week_end),H=b.filter(r=>{var m;return((m=r.classes)==null?void 0:m.id)===t}),F=Object.fromEntries(q.map(r=>[r.assignment_id,r])),R=c.master_subjects,ae=R==null?void 0:R.teachers,ce=r=>{var m,C;return parseFloat(((m=F[r.id])==null?void 0:m.final_score)??((C=F[r.id])==null?void 0:C.original_score)??0)||0},me=u.filter(r=>r.assignment_type==="คะแนนพิเศษ"),V=u.filter(r=>r.assignment_type!=="final"&&r.assignment_type!=="คะแนนพิเศษ"),re=u.filter(r=>r.assignment_type==="final"),de=V.reduce((r,m)=>r+(m.max_score||0),0),ne=re.reduce((r,m)=>r+(m.max_score||0),0),pe=V.reduce((r,m)=>r+ce(m),0),ge=re.reduce((r,m)=>r+ce(m),0),$e=me.reduce((r,m)=>r+ce(m),0),ue=de+ne,ie=ue>0?(pe+ge)/ue*100:0,be=T.length,f=T.filter(r=>r.status==="present").length,J=be>0?Math.round(f/be*100):null,Q=r=>r>=80?{label:"ดีเยี่ยม",cls:"bg-emerald-100 text-emerald-700"}:r>=65?{label:"ดี",cls:"bg-blue-100 text-blue-700"}:r>=50?{label:"พอใช้",cls:"bg-yellow-100 text-yellow-700"}:{label:"ปรับปรุง",cls:"bg-red-100 text-red-600"},i=ue>0?Q(ie):null,w=r=>{const m=F[r.id],W=m&&(m.final_score!=null||m.original_score!=null)?parseFloat((m==null?void 0:m.final_score)??(m==null?void 0:m.original_score))||0:null,K=W!=null&&r.max_score>0?Math.round(W/r.max_score*100):null,Z=(m==null?void 0:m.retake_score)!=null;return`<tr class="border-b border-gray-100 last:border-0">
      <td class="py-2.5 px-3 text-xs text-gray-700 w-full">
        ${r.assignment_name}
        ${Z?'<span class="ml-1 text-[10px] text-purple-500">(ปรับ)</span>':""}
      </td>
      <td class="py-2.5 px-3 text-center text-xs font-bold ${W!=null?"text-blue-600":"text-gray-300"} whitespace-nowrap">
        ${W!=null?W.toFixed(1).replace(/\.0$/,""):"—"}
      </td>
      <td class="py-2.5 px-3 text-center text-xs text-gray-400 whitespace-nowrap">${r.max_score!=null?"/"+r.max_score:'<span class="text-amber-500 text-[10px]">โบนัส</span>'}</td>
      <td class="py-2.5 px-3 text-center text-xs ${W!=null?"text-gray-500":"text-gray-300"} whitespace-nowrap">
        ${r.max_score!=null?K!=null?K+"%":"—%":""}
      </td>
    </tr>`},S=(r,m,C,W,K)=>{if(!r.length)return"";const Z=C>0?Math.round(m/C*100):0;return`
    <div class="mb-4">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
        <span class="text-sm">${K}</span>
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
            ${r.map(w).join("")}
            <tr class="${W}">
              <td class="py-2.5 px-3 text-xs font-bold text-gray-700">รวม</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-800">${m.toFixed(1).replace(/\.0$/,"")}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-500">/${C}</td>
              <td class="py-2.5 px-3 text-center text-xs font-bold text-gray-600">${Z}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`},P=xs(c),o=()=>`
    <div class="${P.bg} ${P.border} border border-l-4 ${P.accent} rounded-2xl p-4 mb-4 flex items-start gap-3">
      <div class="w-12 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-tr from-emerald-400 to-teal-400
                  flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow">
        ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:(e.full_name??"น").charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold ${P.text} text-sm leading-tight">${(R==null?void 0:R.subject_name)??"—"}</p>
        <p class="text-[11px] text-gray-400 font-mono mt-0.5">${(R==null?void 0:R.subject_code)??""}</p>
        <p class="text-xs text-gray-500 mt-0.5">${e.full_name} · ${e.student_code}</p>
        <p class="text-[11px] text-gray-400 mt-0.5">${(ae==null?void 0:ae.full_name)??"—"} · ${ve(c.class_name)}</p>
      </div>
      <div class="flex-shrink-0 text-right">
        <p class="text-2xl font-bold text-gray-800">${ue>0?(pe+ge).toFixed(1).replace(/\.0$/,""):"—"}</p>
        <p class="text-[10px] text-gray-400">/${ue} คะแนน</p>
        ${$e>0?`<p class="text-[10px] text-amber-500 font-medium">+${$e.toFixed(1).replace(/\.0$/,"")} โบนัส</p>`:""}
        ${i?`<span class="inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${i.cls}">${i.label}</span>`:""}
      </div>
    </div>`,y=r=>{const m=je[r.status]??je.pending,C=r.class_score_columns,W=Ge(r.requested_date);return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${r.request_type}</p>
          ${C?`<p class="text-[11px] text-gray-400 mt-0.5">${C.assignment_name}</p>`:""}
        </div>
        <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${m.cls}">${m.label}</span>
      </div>
      <div class="space-y-1 text-xs text-gray-500">
        <p>📅 ${Le(r.requested_date)}${r.requested_period_no?` · คาบ ${r.requested_period_no}`:""}${W?` · ${W}`:""}</p>
        ${r.reason?`<p>💬 ${r.reason}</p>`:""}
        ${r.teacher_comment?`<p class="${r.status==="approved"?"text-emerald-600":"text-red-500"}">👩‍🏫 ${r.teacher_comment}</p>`:""}
      </div>
      ${r.status==="pending"?`
        <button onclick="window._stuCancelRequest(${r.id}, ${t})"
          class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">✕ ยกเลิกคำร้อง</button>`:""}
    </div>`},h=()=>{const r=[],m=$.filter(Me);m.length>0&&r.push(`
        <button onclick="window._stuOpenClassTab(${t},'assignments')"
          class="w-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-3 text-left hover:border-indigo-300 transition">
          <span class="text-2xl flex-shrink-0">📚</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">งานที่ยังไม่ได้ส่ง</p>
            <p class="text-xs text-gray-400 mt-0.5">${m.length} งาน — แตะเพื่อดู/ส่งงาน</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">${m.length}</span>
        </button>`);const C=H.filter(g=>g.status==="pending");C.length>0&&C.forEach(g=>{const k=g.class_score_columns,M=Ge(g.requested_date);r.push(`
          <div class="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">⏳</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${g.request_type} — รอครูอนุมัติ</p>
              ${k?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${k.assignment_name}</p>`:""}
              <p class="text-xs text-amber-600 mt-0.5">📅 ${Le(g.requested_date)}${g.requested_period_no?` · คาบ ${g.requested_period_no}`:""}${M?` · ${M}`:""}</p>
            </div>
            <span class="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอดำเนินการ</span>
          </div>`)});const W=H.filter(g=>g.status==="approved"&&g.exam_attended==null);W.length>0&&W.forEach(g=>{const k=g.class_score_columns,M=Ge(g.requested_date);r.push(`
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3">
            <span class="text-2xl flex-shrink-0">✅</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">${g.request_type} — อนุมัติแล้ว รอสอบ</p>
              ${k?`<p class="text-xs text-gray-500 mt-0.5">หัวข้อ: ${k.assignment_name}</p>`:""}
              <p class="text-xs text-emerald-600 mt-0.5">📅 ${Le(g.requested_date)}${g.requested_period_no?` · คาบ ${g.requested_period_no}`:""}${M?` · ${M}`:""}</p>
              ${g.teacher_comment?`<p class="text-xs text-gray-400 mt-0.5">💬 ${g.teacher_comment}</p>`:""}
            </div>
          </div>`)}),A.forEach(g=>{const k=g.attempts.filter(xe=>xe.status==="submitted"||xe.status==="terminated_violation").reduce((xe,Ie)=>Math.max(xe,Ie.score_pct??0),null),M=g.attempts.length&&g.attempts[g.attempts.length-1].status==="terminated_violation"?g.attempts[g.attempts.length-1]:null,ee=g.attempts.find(xe=>xe.status==="in_progress"),le=g.attempts.filter(xe=>xe.status==="submitted"||xe.status==="terminated_violation").length;let oe="",ye="";g.status==="announced"?oe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">รอครูเริ่ม</span>':g.status==="started"&&d.has(g.id)?oe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ ยืนยันคะแนนสุดท้ายแล้ว</span>':g.status==="started"&&M?oe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">🔒 ถูกล็อก — ติดต่อครูผู้สอน</span>':g.status==="started"&&ee?(oe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">กำลังทำอยู่</span>',ye=`<button onclick="window._stuStartQuiz('${g.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">ทำต่อ →</button>`):g.status==="started"&&le>=g.max_attempts?oe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ทำครบจำนวนครั้งแล้ว</span>':g.status==="started"?(oe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">เปิดสอบอยู่</span>',ye=`<button onclick="window._stuStartQuiz('${g.id}')" class="mt-2 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">เข้าสอบ →</button>`):g.status==="closed"&&(oe='<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">ปิดสอบแล้ว</span>'),r.push(`
        <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3">
          <span class="text-2xl flex-shrink-0">📝</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">${X(g.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${g.num_questions} ข้อ${g.time_limit_minutes?` · ${g.time_limit_minutes} นาที`:""} · ทำได้ ${le}/${g.max_attempts} ครั้ง</p>
            ${k!=null?`<p class="text-xs text-indigo-600 font-bold mt-0.5">คะแนนล่าสุด: ${k.toFixed(1)}%</p>`:""}
            <div class="mt-1">${oe}</div>
            ${ye}
          </div>
        </div>`)});const K=[c.day1_date,c.day2_date,c.day3_date,c.day4_date,c.day5_date,c.day6_date].filter(Boolean),Z=new Date;Z.setHours(0,0,0,0);const te=K.map(g=>{const k=new Date(g);return k.setHours(0,0,0,0),k}).filter(g=>g>=Z).sort((g,k)=>g-k);if(te.length>0){const g=te[0],k=Math.round((g-Z)/864e5),M=k===0?"🔴 วันนี้!":k===1?"🟡 พรุ่งนี้":`⏰ อีก ${k} วัน`,ee=Re[g.getDay()]??"";r.push(`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-xs text-emerald-600 font-bold">${ee}</span>
            <span class="text-lg font-extrabold text-emerald-700 leading-tight">${g.getDate()}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">📅 วันเรียนถัดไป</p>
            <p class="text-xs text-gray-400 mt-0.5">${Le(xt(g))}</p>
          </div>
          <span class="text-xs font-bold ${k===0?"text-red-500":k===1?"text-amber-500":"text-emerald-600"}">${M}</span>
        </div>`)}const L={general:{label:"ประกาศ",icon:"📢",bg:"bg-gray-50",border:"border-gray-200"},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",bg:"bg-red-50",border:"border-red-200"},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",bg:"bg-blue-50",border:"border-blue-200"},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",bg:"bg-emerald-50",border:"border-emerald-200"},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",bg:"bg-amber-50",border:"border-amber-200"}},G=g=>{if(!g)return"";const k=new Date(g),ee=k-new Date,le=Math.floor(ee/6e4),oe=k.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"});if(ee<0)return`<span class="text-red-500 font-bold text-xs">⛔ หมดเวลาแล้ว · ${oe}</span>`;if(le<60)return`<span class="text-red-600 font-bold text-xs">🔴 อีก ${le} นาที · ${oe}</span>`;const ye=Math.floor(le/60);return ye<24?`<span class="text-orange-500 font-semibold text-xs">🟠 อีก ${ye} ชม. ${le%60} น. · ${oe}</span>`:`<span class="text-amber-600 font-semibold text-xs">📅 อีก ${Math.floor(ye/24)} วัน · ${oe}</span>`};return z.length>0&&[...z].sort((g,k)=>(k.priority||0)-(g.priority||0)).forEach(g=>{const k=L[g.ann_type]??L.general,M=g.ann_type==="deadline"&&g.deadline_at?G(g.deadline_at):"";r.push(`
          <div class="rounded-2xl border ${k.border} ${k.bg} p-4">
            <div class="flex items-start gap-3">
              <span class="text-xl flex-shrink-0">${k.icon}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  ${g.priority>0?'<span class="text-[10px] font-bold text-amber-600">📌 ปักหมุด</span>':""}
                  <span class="text-[10px] text-gray-500">${k.label}</span>
                </div>
                <p class="text-sm font-semibold text-gray-800">${g.title??""}</p>
                ${g.body?`<p class="text-xs text-gray-500 mt-1">${g.body}</p>`:""}
                ${M?`<div class="mt-2">${M}</div>`:""}
                ${g.file_url?`<a href="${g.file_url}" target="_blank" rel="noopener"
                  class="inline-flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline font-medium">
                  📎 เปิดไฟล์แนบ →</a>`:""}
              </div>
            </div>
          </div>`)}),`
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-bold text-gray-800">✅ ภารกิจ / สิ่งที่ต้องทำ</h2>
      </div>
      ${r.length?`<div class="space-y-3">${r.join("")}</div>`:`
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
          <p class="text-4xl mb-2">🎉</p>
          <p class="text-sm font-medium text-gray-500">ไม่มีรายการที่ต้องทำ</p>
          <p class="text-xs mt-1">ถ้าครูประกาศกำหนดสอบหรือแจ้งงานในรายวิชา ระบบจะแสดงพร้อมนับถอยหลังที่นี่</p>
        </div>`}`},j=()=>`
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-gray-800">📊 สรุปคะแนน</h2>
      ${ue>0?`<span class="text-xs text-gray-400">${ie.toFixed(0)}% รวม</span>`:""}
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden mb-4">
      ${u.length===0?'<p class="px-4 py-8 text-center text-xs text-gray-300">ยังไม่มีคะแนน</p>':`<div>
            ${S(V,pe,de,"bg-blue-50","📘 กลางภาค")}
            ${S(re,ge,ne,"bg-purple-50","📙 ปลายภาค")}
            ${me.length?S(me,me.reduce((r,m)=>r+ce(m),0),0,"bg-amber-50","⭐ คะแนนพิเศษ/โบนัส"):""}
          </div>`}
    </div>
    ${be>0?`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <h3 class="font-semibold text-gray-700 text-sm">📅 การเข้าเรียน</h3>
        ${J!==null?`<span class="text-xs text-gray-400">${f}/${be} คาบ · ${J}%</span>`:""}
      </div>
      <div class="px-4 py-3 grid grid-cols-5 gap-1.5">
        ${T.map(r=>`
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-[9px] text-gray-400">${r.session_number}</span>
          <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                       ${is[r.status]??"bg-gray-50 text-gray-400"}">
            ${ds[r.status]??"?"}
          </span>
        </div>`).join("")}
      </div>
    </div>`:""}`,I=()=>`
    <button onclick="window._stuOpenRequest(${t})"
      class="w-full mb-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
             hover:bg-indigo-700 transition flex items-center justify-center gap-2">
      📝 ยื่นคำร้องสอบย้อนหลัง / ปรับคะแนน
    </button>
    <h2 class="font-bold text-gray-800 mb-3">ประวัติคำร้องในรายวิชานี้</h2>
    ${H.length?`<div class="space-y-3">${H.map(y).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีคำร้องในรายวิชานี้</p>
      </div>`}`,n=r=>r?new Date(r).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"ไม่กำหนดส่ง",_=(r,m)=>r.due_at?new Date(m).getTime()>new Date(r.due_at).getTime():!1,N=r=>r.due_at?Date.now()>new Date(r.due_at).getTime():!1,U=r=>{var Z,te;const m=r.mySubmission,C=(m==null?void 0:m.status)==="rejected",W=m?_(r,m.submitted_at):!1,K=!m&&N(r);return`<div class="bg-white rounded-2xl border ${C?"border-red-200":m?"border-emerald-100":K?"border-red-100":"border-gray-200"} shadow-sm p-4">
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <p class="font-semibold text-gray-800 text-sm">${X(r.title)}</p>
        ${C?'<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">❌ ถูกตีกลับ ให้แก้ไข</span>':m?`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${W?"bg-amber-50 text-amber-700 border border-amber-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}">${W?"⏰ ส่งช้า":"✅ ส่งแล้ว"}</span>`:`<span class="flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${K?"bg-red-50 text-red-700 border border-red-200":"bg-gray-50 text-gray-500 border border-gray-200"}">${K?"เลยกำหนดส่ง":"ยังไม่ส่ง"}</span>`}
      </div>
      ${r.description?`<p class="text-xs text-gray-500 mb-1.5">${X(r.description)}</p>`:""}
      <p class="text-xs text-gray-400 mb-2">📅 กำหนดส่ง: ${n(r.due_at)}</p>
      ${(Z=r.attachment_urls)!=null&&Z.length?`<div class="flex flex-wrap gap-1.5 mb-2">${r.attachment_urls.map(L=>`<a href="${X(L.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">📎 ${X(L.name)}</a>`).join("")}</div>`:""}
      ${(te=m==null?void 0:m.file_urls)!=null&&te.length?`<div class="border-t border-gray-50 pt-2 mt-1"><p class="text-[10px] text-gray-400 mb-1">ไฟล์ที่ส่ง (${new Date(m.submitted_at).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})</p>
        <div class="flex flex-wrap gap-1.5">${m.file_urls.map(L=>`<a href="${X(L.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">📎 ${X(L.name)}</a>`).join("")}</div></div>`:""}
      ${m!=null&&m.teacher_feedback?C?`<div class="bg-red-50 border border-red-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-red-500 mb-0.5">❌ เหตุผลที่ถูกตีกลับ</p><p class="text-xs text-red-800">${X(m.teacher_feedback)}</p></div>`:`<div class="bg-indigo-50 border border-indigo-100 rounded-xl p-2.5 mt-2"><p class="text-[10px] font-bold text-indigo-500 mb-0.5">💬 คอมเมนต์จากครู</p><p class="text-xs text-indigo-800">${X(m.teacher_feedback)}</p></div>`:""}
      <button class="stu-submit-assign-btn mt-3 w-full py-2 rounded-xl text-xs font-bold ${C?"bg-red-600 text-white hover:bg-red-700":m?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-indigo-600 text-white hover:bg-indigo-700"}" data-aid="${r.id}">${C?"📤 ส่งแก้ไขใหม่":m?"📤 ส่งใหม่ (แทนที่ของเดิม)":"📤 ส่งงาน"}</button>
    </div>`},O=s==="scores"?j():s==="requests"?I():s==="assignments"?`
    <h2 class="font-bold text-gray-800 mb-3">📚 งานที่ได้รับมอบหมาย</h2>
    ${$.length?`<div class="space-y-3">${$.map(U).join("")}</div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center text-gray-300">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-sm">ยังไม่มีงานที่ได้รับมอบหมายในวิชานี้</p>
      </div>`}`:h();se(`
    <button onclick="window._stuBackFromSubject()" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← ${window._stuFromTimetable?"ตารางเรียน":"รายวิชาอื่น"}</button>
    ${o()}
    ${E?`
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl px-4 py-3 mb-4">
      <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">📘 สัปดาห์นี้ — สัปดาห์ที่ ${v}</p>
      <p class="text-sm font-bold text-indigo-700 mt-0.5">${X(E.topic)}</p>
      ${E.description?`<p class="text-xs text-indigo-400 mt-0.5">${X(E.description)}</p>`:""}
    </div>`:""}
    ${O}
  `),window._stuCancelRequest=async(r,m=t)=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await mt(r),Y("ยกเลิกคำร้องแล้ว","success"),window._stuOpenClassTab(m,"requests")}catch(C){Y("ยกเลิกไม่สำเร็จ: "+(C.message??""),"error")}},window._stuStartQuiz=async r=>{try{const m=await ft(r,e.id).catch(()=>null);if(m&&m.status!=="in_progress"){window.location.href=`quiz-exam.html?attempt=${m.id}`;return}const C=await yt(r);window.location.href=`quiz-exam.html?attempt=${C.id}`}catch(m){Y("เข้าสอบไม่สำเร็จ: "+(m.message??""),"error")}},document.querySelectorAll(".stu-submit-assign-btn").forEach(r=>{r.addEventListener("click",()=>{const m=$.find(C=>C.id===parseInt(r.dataset.aid,10));m&&D(m)})});function D(r){var C;(C=document.getElementById("stu-submit-modal"))==null||C.remove();const m=document.createElement("div");m.id="stu-submit-modal",m.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-3 animate-fade">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">📤 ส่งงาน — ${X(r.title)}</h3>
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
      </div>`,document.body.appendChild(m),m.addEventListener("click",W=>{W.target===m&&m.remove()}),m.querySelector("#ss-close").addEventListener("click",()=>m.remove()),m.querySelector("#ss-submit").addEventListener("click",async()=>{var Z;const W=[...m.querySelector("#ss-files").files??[]];if(!W.length&&!r.mySubmission){Y("เลือกไฟล์อย่างน้อย 1 ไฟล์ก่อนส่งนะ","warning");return}const K=m.querySelector("#ss-submit");K.disabled=!0,K.textContent="กำลังส่ง...";try{const te=[];for(const G of W)te.push(await ts(G,`class-${t}/student-${e.id}`));const L=te.length?te:((Z=r.mySubmission)==null?void 0:Z.file_urls)??[];await At(r.id,e.id,L,m.querySelector("#ss-note").value.trim()||null),Y("ส่งงานสำเร็จ ✅","success"),m.remove(),Ss(e,t,"assignments")}catch(te){Y("ส่งงานไม่สำเร็จ: "+(te.message??""),"error"),K.disabled=!1,K.textContent="ส่งงาน"}})}}async function ks(e){se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const t=await Ye(e.id).catch(()=>[]),s=`<button onclick="window._stuNav('subjects')"
    class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
           hover:bg-indigo-700 transition mb-4">
    + ยื่นคำร้องใหม่ (เลือกรายวิชาก่อน)
  </button>`;if(!t.length){se(`
      <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน</h2>
      ${s}
      <div class="text-center py-12 text-gray-300">
        <p class="text-4xl mb-3">📭</p>
        <p class="text-sm">ยังไม่มีคำร้อง</p>
      </div>`);return}se(`
    <h2 class="font-bold text-gray-800 mb-4">📝 คำร้องของฉัน <span class="text-sm font-normal text-gray-400">(${t.length} รายการ)</span></h2>
    ${s}
    <div class="space-y-3">
      ${t.map(l=>{var q,T;const c=je[l.status]??je.pending,p=l.classes,u=l.class_score_columns;return`<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="min-w-0">
              <p class="font-semibold text-gray-800 text-sm truncate">${((q=p==null?void 0:p.master_subjects)==null?void 0:q.subject_name)??"—"}</p>
              <p class="text-[11px] text-gray-400 font-mono">${((T=p==null?void 0:p.master_subjects)==null?void 0:T.subject_code)??""}</p>
            </div>
            <span class="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full border ${c.cls}">${c.label}</span>
          </div>
          <div class="space-y-1 text-xs text-gray-500">
            <p>📋 ประเภท: <span class="text-gray-700 font-medium">${l.request_type}</span></p>
            ${u?`<p>📝 หัวข้อ: <span class="text-gray-700">${u.assignment_name}</span></p>`:""}
            <p>📅 วันที่ขอสอบ: <span class="text-gray-700">${Le(l.requested_date)}</span>
              ${l.requested_period_no?` คาบ ${l.requested_period_no}`:""}</p>
            ${l.reason?`<p>💬 เหตุผล: <span class="text-gray-600">${l.reason}</span></p>`:""}
            ${l.teacher_comment?`<p class="${l.status==="approved"?"text-emerald-600":"text-red-500"}">
              👩‍🏫 ครู: ${l.teacher_comment}</p>`:""}
          </div>
          ${l.status==="pending"?`
          <button onclick="window._stuCancelRequest(${l.id})"
            class="mt-3 text-xs text-red-400 hover:text-red-600 font-medium">
            ✕ ยกเลิกคำร้อง
          </button>`:""}
        </div>`}).join("")}
    </div>
  `),window._stuCancelRequest=async l=>{if(confirm("ยืนยันยกเลิกคำร้องนี้?"))try{await mt(l),Y("ยกเลิกคำร้องแล้ว","success"),ks(e)}catch(c){Y("ยกเลิกไม่สำเร็จ: "+(c.message??""),"error")}}}async function Us(e,t){var ue,ie,be;se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,l]=await Promise.all([Oe(e.id).catch(()=>[]),Lt(e.id).catch(()=>0)]),c=s.find(f=>f.id===t);if(!c){se('<p class="text-center py-10 text-gray-400">ไม่พบรายวิชา</p>');return}if(l>=2){se(`
      <button onclick="window._stuOpenClassTab(${t},'requests')" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับ</button>
      <div class="bg-white rounded-2xl border border-red-100 shadow-sm p-6 text-center">
        <p class="text-4xl mb-3">🚫</p>
        <p class="font-bold text-red-700 text-base mb-2">ไม่สามารถยื่นคำร้องได้</p>
        <p class="text-sm text-gray-500">เนื่องจากผิดนัดสอบครบ <b class="text-red-600">2 ครั้ง</b> แล้ว</p>
        <p class="text-xs text-gray-400 mt-2">กรุณาติดต่อครูผู้สอนโดยตรง</p>
      </div>`);return}const p=l===1?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-700 font-medium">
         ⚠️ คุณผิดนัดสอบมาแล้ว 1 ครั้ง — หากผิดนัดอีก 1 ครั้ง จะไม่สามารถยื่นคำร้องได้อีก
       </div>`:"",u=c.master_subjects,q=u==null?void 0:u.teacher_id,T=u==null?void 0:u.teachers,b=q?(T==null?void 0:T.full_name)??"ครูผู้สอน":"ครูผู้สอน",z=String(b||"ค").trim().charAt(0).toUpperCase()||"ค",A=(e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||c.class_name||"—";let $=null;const[a,d,x]=await Promise.all([jt(t).catch(()=>[]),q?Ct(q,t).catch(f=>($=f,[])):Promise.resolve([]),It().catch(()=>[])]),v=a.filter(f=>f.column_type!=="override"),E={};for(const f of d){E[`${f.day_of_week}_${f.period_no}`]=f;const J=f.span_periods??1;for(let Q=1;Q<J;Q++)E[`${f.day_of_week}_${f.period_no+Q}`]={...f,_secondary:!0}}const H=d.length>0;if(!H){se(`
      <button onclick="window._stuOpenClassTab(${t}, 'requests')"
        class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับคำร้อง</button>

      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
        <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
        <p class="text-xs text-gray-400 mb-5">${(u==null?void 0:u.subject_name)??""} · ${ve(c.class_name)}</p>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p class="text-3xl mb-2">📅</p>
          <p class="text-sm font-bold text-amber-800">ยังไม่สามารถยื่นคำร้องได้</p>
          <p class="mt-2 text-xs leading-relaxed text-amber-700">
            ${q?$?`ระบบอ่านตารางครูไม่สำเร็จ: ${$.message??$}`:"ครูผู้สอนยังไม่ได้สร้างตารางสอนในระบบ จึงยังไม่สามารถเลือกคาบว่างสำหรับขอสอบได้":"รายวิชานี้ยังไม่ได้ผูกข้อมูลครูผู้สอนในระบบ จึงยังไม่สามารถเปิดตารางครูได้"}
          </p>
          <p class="mt-2 text-xs text-amber-600">
            ${q?"กรุณาติดต่อครูผู้สอนหรือผู้ดูแลระบบ":"กรุณาติดต่อผู้ดูแลให้ตรวจการผูกครูประจำรายวิชา"}
          </p>
        </div>
      </div>
    `);return}const F="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white",R=F+" cursor-pointer";let ae=null,ce=0;const me=[{bg:"bg-emerald-100",text:"text-emerald-800"},{bg:"bg-indigo-100",text:"text-indigo-800"},{bg:"bg-amber-100",text:"text-amber-800"},{bg:"bg-rose-100",text:"text-rose-800"},{bg:"bg-cyan-100",text:"text-cyan-800"},{bg:"bg-violet-100",text:"text-violet-800"},{bg:"bg-lime-100",text:"text-lime-800"},{bg:"bg-orange-100",text:"text-orange-800"},{bg:"bg-pink-100",text:"text-pink-800"},{bg:"bg-teal-100",text:"text-teal-800"},{bg:"bg-green-100",text:"text-green-800"}],V=(f,J,Q=null)=>{const i=String(f??"").trim(),w=String(J??"").trim();return i&&w?`${i} — ${w}`:i||(Q!=null?String(Q):"")},re=f=>{const J=me[f%me.length];return`${J.bg} ${J.text}`};let de={};try{de=JSON.parse(localStorage.getItem(`scheduleColors_${q??"x"}`)??"{}")}catch{}const ne={};let pe=0;d.forEach(f=>{const J=V(f.subject_name,f.class_name,f.subject_id);if(!J||ne[J]!=null)return;const Q=de[J]??de[f.subject_id]??de[f.subject_name],i=Number(Q);ne[J]=Number.isFinite(i)?i:pe++});const ge=(f=0)=>{const J=[0,1,2,3,4,5],Q={0:"อาทิตย์",1:"จันทร์",2:"อังคาร",3:"พุธ",4:"พฤหัส",5:"ศุกร์"},i={0:"bg-red-50",1:"bg-yellow-50",2:"bg-pink-50",3:"bg-green-50",4:"bg-orange-50",5:"bg-purple-50"},w=Ve(f),S=new Date;S.setHours(0,0,0,0);const P=J.map(y=>{const h=w[y];return`<th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${i[y]}">
        <p class="text-sm font-bold text-gray-700">${Q[y]}</p>
        <p class="text-xs text-gray-400">${h.getDate()}/${h.getMonth()+1}</p>
      </th>`}).join(""),o=x.map(y=>{var n,_;const h=((n=y.start_time)==null?void 0:n.slice(0,5))??"",j=((_=y.end_time)==null?void 0:_.slice(0,5))??"",I=J.map(N=>{const U=`${N}_${y.period_no}`,B=E[U];if(B!=null&&B._secondary)return"";const D=w[N]<S;if(!B)return`<td class="border border-gray-100 p-0" style="height:1px">
            <button type="button"
              data-period="${y.period_no}" data-day="${N}" data-week-offset="${f}"
              ${D?'disabled aria-disabled="true"':""}
              class="sched-period-btn group w-full h-full min-h-[52px] flex items-center justify-center
                     ${D?"bg-gray-50 text-gray-300 cursor-not-allowed":"bg-white hover:bg-indigo-50/30 transition-colors cursor-pointer text-indigo-300"}">
              <span class="${D?"opacity-100 text-[10px]":"opacity-0 group-hover:opacity-100 text-2xl"} transition">${D?"ล็อก":"＋"}</span>
            </button>
          </td>`;const r=B.span_periods??1,m=V(B.subject_name,B.class_name,B.subject_id),C=ne[m]??0,W=re(C);return`<td class="border border-gray-100 p-0" style="height:1px" ${r>1?`rowspan="${r}"`:""}>
          <div class="w-full h-full ${W} flex flex-col justify-center items-center
                      gap-0.5 px-2 py-2 text-center" style="min-height:52px">
            <p class="font-bold leading-tight text-xs break-words">${B.subject_name??"ไม่ว่าง"}</p>
            ${B.class_name?`<p class="text-[10px] opacity-80 leading-tight">${ve(B.class_name)}</p>`:""}
            ${B.teacher_name?`<p class="text-[9px] opacity-55 leading-tight">${B.teacher_name}</p>`:""}
            ${r>1?`<p class="text-[9px] opacity-40 mt-0.5">${r} คาบ</p>`:""}
          </div>
        </td>`}).join("");return`<tr>
        <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50 sticky left-0 z-10">
          <p class="font-bold text-gray-700">คาบ ${y.period_no}</p>
          <p class="text-[10px] text-gray-400">${h}–${j}</p>
        </td>
        ${I}
      </tr>`}).join("");return`
    <div class="overflow-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center bg-gray-50 text-gray-500 sticky left-0 z-20 w-24 font-medium">คาบ / เวลา</th>
            ${P}
          </tr>
        </thead>
        <tbody>${o}</tbody>
      </table>
    </div>`},$e=f=>{const J=Ve(f);return`${f===0?"สัปดาห์นี้":f===1?"สัปดาห์หน้า":`อีก ${f} สัปดาห์`} (${Ne(J[0])} - ${Ne(J[5])})`};if(se(`
    <button onclick="window._stuOpenClass(${t})" class="text-xs text-gray-400 hover:text-emerald-600 mb-3 flex items-center gap-1">← กลับรายวิชา</button>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <h2 class="font-bold text-gray-800 mb-1">📝 ยื่นคำร้อง</h2>
      <p class="text-xs text-gray-400 mb-3">${(u==null?void 0:u.subject_name)??""} · ${ve(c.class_name)}</p>
      ${p}

      ${H?`
      <div id="schedule-first-gate" class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p class="text-sm font-bold text-emerald-800">เลือกคาบว่างของครูก่อน</p>
        <p class="mt-1 text-xs text-emerald-600">ระบบจะเปิดตารางสอนให้เลือกวันและคาบ แล้วค่อยกรอกข้อมูลคำร้องต่อ</p>
      </div>`:""}

      <form id="req-form" class="space-y-4 ${H?"hidden":""}">
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
          <select id="req-col" class="${R}" required>
            <option value="">— เลือกหัวข้อ —</option>
            ${v.map(f=>`<option value="${f.id}">${f.assignment_name} (${f.assignment_type} · เต็ม ${f.max_score})</option>`).join("")}
          </select>
        </div>

        <!-- Schedule grid / manual date -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันและคาบที่ขอสอบ <span class="text-red-400">*</span></label>
          ${H?`
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
              <input type="date" id="req-date" class="${F}"
                min="${xt(new Date)}" required />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">คาบที่ขอสอบ</label>
              <select id="req-period-sel" class="${R}" required>
                <option value="">— เลือกคาบ —</option>
                ${x.map(f=>`<option value="${f.period_no}">คาบ ${f.period_no} (${f.start_time.slice(0,5)}–${f.end_time.slice(0,5)})</option>`).join("")}
              </select>
            </div>
          </div>
          `}
        </div>

        <!-- เหตุผล (แสดงเมื่อสอบย้อนหลัง) -->
        <div id="req-reason-wrap" class="hidden">
          <label class="block text-sm font-medium text-gray-700 mb-1.5">เหตุผลที่ขาดสอบ <span class="text-red-400">*</span></label>
          <textarea id="req-reason" rows="3" class="${F} resize-none"
            placeholder="ระบุเหตุผลที่ขาดสอบ..."></textarea>
        </div>

        <button type="submit" id="req-submit"
          class="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ยื่นคำร้อง
        </button>
      </form>
    </div>
    ${H?`
      <div id="teacher-schedule-modal" class="hidden fixed inset-0 z-[120] bg-black/50 p-4 items-center justify-center">
        <div class="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-5">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold shadow-sm">
                ${T!=null&&T.image_url?`<img src="${T.image_url}" class="w-full h-full object-cover" alt="รูปครูผู้สอน"/>`:`<span>${z}</span>`}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-gray-800">เลือกคาบว่างของครู</h3>
                <p class="text-xs text-gray-500 mt-0.5 truncate">${b} · ${(u==null?void 0:u.subject_name)??""}</p>
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
              ${[0,1,2,3,4].map(f=>`<option value="${f}">${$e(f)}</option>`).join("")}
            </select>
          </div>
          <div id="schedule-grid-wrap">${ge(0)}</div>
          <p class="text-[11px] text-gray-400 mt-3">ระบบจะนำวันของสัปดาห์ที่เลือกและคาบที่เลือกไปเติมในคำร้องให้อัตโนมัติ</p>
        </div>
      </div>`:""}
  `),document.querySelectorAll('input[name="req_type"]').forEach(f=>{f.addEventListener("change",()=>{var i;const J=document.getElementById("req-reason-wrap"),Q=f.value==="สอบย้อนหลัง";J.classList.toggle("hidden",!Q),(i=document.getElementById("req-reason"))==null||i.toggleAttribute("required",Q)})}),H){const f=document.getElementById("teacher-schedule-modal");(ue=document.getElementById("open-schedule-modal"))==null||ue.addEventListener("click",()=>{f==null||f.classList.remove("hidden"),f==null||f.classList.add("flex")}),(ie=document.getElementById("close-schedule-modal"))==null||ie.addEventListener("click",()=>{var Q;if(!ae){(Q=window._stuOpenClassTab)==null||Q.call(window,t,"requests");return}f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex")}),f==null||f.addEventListener("click",Q=>{Q.target===f&&ae&&(f.classList.add("hidden"),f.classList.remove("flex"))});const J=()=>{document.querySelectorAll(".sched-period-btn:not([disabled])").forEach(Q=>{Q.addEventListener("click",()=>{var I,n;const i=parseInt(Q.dataset.period),w=parseInt(Q.dataset.day),S=parseInt(Q.dataset.weekOffset??ce),o=Ve(S)[w];ae={period_no:i,day_of_week:w,date:o,week_offset:S},document.getElementById("req-date").value=we(o),document.getElementById("req-period-hidden").value=i;const y=document.getElementById("period-summary"),h=document.getElementById("period-summary-text");y==null||y.classList.remove("hidden"),h&&(h.textContent=`คาบ ${i} วัน${Re[w]??""} ${Ne(o)}`);const j=document.getElementById("schedule-picker-label");j&&(j.textContent=`เลือกคาบ ${i} วัน${Re[w]??""} ${Ne(o)} แล้ว`),(I=document.getElementById("schedule-first-gate"))==null||I.classList.add("hidden"),(n=document.getElementById("req-form"))==null||n.classList.remove("hidden"),document.querySelectorAll(".sched-period-btn").forEach(_=>{_.classList.toggle("ring-2",_===Q),_.classList.toggle("ring-emerald-500",_===Q),_.classList.toggle("bg-emerald-200",_===Q)}),f==null||f.classList.add("hidden"),f==null||f.classList.remove("flex")})})};J(),(be=document.getElementById("schedule-week-select"))==null||be.addEventListener("change",Q=>{ce=parseInt(Q.target.value||"0");const i=document.getElementById("schedule-grid-wrap");i&&(i.innerHTML=ge(ce)),J()}),setTimeout(()=>{f==null||f.classList.remove("hidden"),f==null||f.classList.add("flex")},80)}document.getElementById("req-form").addEventListener("submit",async f=>{var o,y,h,j,I;f.preventDefault();const J=document.getElementById("req-submit"),Q=(o=document.querySelector('input[name="req_type"]:checked'))==null?void 0:o.value,i=document.getElementById("req-col").value,w=((y=document.getElementById("req-reason"))==null?void 0:y.value.trim())||null,S=(h=document.getElementById("req-date"))==null?void 0:h.value,P=H?(j=document.getElementById("req-period-hidden"))==null?void 0:j.value:(I=document.getElementById("req-period-sel"))==null?void 0:I.value;if(!Q||!i||!S||!P){if(Y("กรุณากรอกข้อมูลให้ครบ","warning"),H&&!P){Y("กรุณาเลือกคาบว่างจากตารางครู","warning");const n=document.getElementById("teacher-schedule-modal");n==null||n.classList.remove("hidden"),n==null||n.classList.add("flex")}return}if(Q==="สอบย้อนหลัง"&&!w){Y("กรุณาระบุเหตุผล","warning");return}J.disabled=!0,J.textContent="กำลังยื่น...";try{await qt({student_id:e.id,class_id:t,assignment_id:parseInt(i),request_type:Q,requested_date:S,requested_period_no:parseInt(P),reason:Q==="สอบย้อนหลัง"?w:null,status:"pending"}),Y("ยื่นคำร้องสำเร็จ ✅","success"),window._stuOpenClassTab(t,"requests")}catch(n){Y("ยื่นไม่สำเร็จ: "+(n.message??""),"error")}finally{J.disabled=!1,J.textContent="ยื่นคำร้อง"}})}async function Ys(e,t){var p,u,q,T;const s=()=>`
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
      </div>`;se(`
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
      ปพ.5 ออนไลน์ © 2026 v${ls}
    </p>
  `),(p=document.getElementById("btn-stu-my-certificates-profile"))==null||p.addEventListener("click",()=>vt(e)),(u=document.getElementById("btn-stu-contact-admin"))==null||u.addEventListener("click",()=>{var b;(b=window._openFeedbackWidget)==null||b.call(window)}),(q=document.getElementById("btn-stu-pw-reset"))==null||q.addEventListener("click",()=>{l()});function l(){var z;(z=document.getElementById("pw-choice-modal"))==null||z.remove();const b=document.createElement("div");b.id="pw-choice-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#pwc-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#pwc-self").addEventListener("click",()=>{b.remove(),c()}),b.querySelector("#pwc-admin").addEventListener("click",()=>{var A;b.remove(),(A=window._openPasswordResetRequest)==null||A.call(window)})}function c(){var z;(z=document.getElementById("self-pw-modal"))==null||z.remove();const b=document.createElement("div");b.id="self-pw-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#self-pw-close").addEventListener("click",()=>b.remove()),b.querySelector("#btn-stu-save-pw").addEventListener("click",async()=>{const A=b.querySelector("#btn-stu-save-pw"),$=b.querySelector("#stu-new-pw").value,a=b.querySelector("#stu-new-pw-confirm").value,d=b.querySelector("#stu-pw-msg"),x=(v,E)=>{d.className=`text-xs text-center py-2.5 rounded-xl ${E?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,d.textContent=v,d.classList.remove("hidden")};if(!$||$.length<6){x("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",!0);return}if($!==a){x("รหัสผ่านทั้งสองช่องไม่ตรงกัน",!0);return}A.disabled=!0,A.textContent="กำลังบันทึก...",d.classList.add("hidden");try{const{error:v}=await _e.auth.updateUser({password:$});if(v)throw v;x("เปลี่ยนรหัสผ่านสำเร็จแล้ว ✅",!1),b.querySelector("#stu-new-pw").value="",b.querySelector("#stu-new-pw-confirm").value=""}catch(v){x("ไม่สำเร็จ: "+(v.message??""),!0)}finally{A.disabled=!1,A.textContent="บันทึกรหัสผ่านใหม่"}})}(T=document.getElementById("stu-logout-btn"))==null||T.addEventListener("click",()=>{var z;(z=document.getElementById("stu-logout-confirm"))==null||z.remove();const b=document.createElement("div");b.id="stu-logout-confirm",b.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",b.innerHTML=`
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
      </div>`,document.body.appendChild(b),b.querySelector("#stu-logout-cancel").addEventListener("click",()=>b.remove()),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#stu-logout-confirm-btn").addEventListener("click",t)}),document.getElementById("btn-show-my-leave").addEventListener("click",()=>{Ls(e)}),document.getElementById("btn-request-qr-card").addEventListener("click",()=>{var z;(z=document.getElementById("qr-request-confirm"))==null||z.remove();const b=document.createElement("div");b.id="qr-request-confirm",b.className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50",b.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
        <div class="text-4xl">🎫</div>
        <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งขอทำบัตร QR Code ใหม่จริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">แอดมิน/ครูจะพิมพ์บัตรให้แล้วนัดให้มารับที่ห้องธุรการ</span></p>
        <div class="flex gap-2">
          <button id="qr-request-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-request-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold bg-pink-600 hover:bg-pink-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(b),b.addEventListener("click",A=>{A.target===b&&b.remove()}),b.querySelector("#qr-request-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#qr-request-ok").addEventListener("click",async()=>{const A=b.querySelector("#qr-request-ok");A.disabled=!0,A.textContent="กำลังส่ง...";try{await Yt({studentId:e.id,profileId:e.profile_id,senderName:e.full_name}),Jt({title:"🎫 มีคำขอทำบัตร QR Code ใหม่",body:`${e.full_name||"นักเรียน"} (${e.student_code||""}) แจ้งขอทำบัตร QR Code`,url:"teacher.html?view=student-qr-print&tab=requests"}),b.remove(),Y("แจ้งขอทำบัตรแล้ว รอแอดมิน/ครูดำเนินการนะครับ 🙏","success")}catch($){A.disabled=!1,A.textContent="ยืนยัน",Y("ส่งไม่สำเร็จ: "+($.message??""),"error")}})}),document.getElementById("btn-show-my-qr").addEventListener("click",async()=>{var me;const b=window._pp5SystemCfg??await Ce().catch(()=>({})),z=parseInt(b.studentQrDailyLimit||"3",10),A=parseInt(b.studentQrExpirySeconds||"60",10),$=`qr_generation_logs_${e.id}`,a=we(new Date);let d=JSON.parse(localStorage.getItem($)||"null");if((!d||d.date!==a)&&(d={date:a,count:0}),d.count>=z){Y(`คุณสร้าง QR Code ครบโควต้า ${z} ครั้งของวันนี้แล้ว ⚠️`,"warning");return}d.count+=1,localStorage.setItem($,JSON.stringify(d)),(me=document.getElementById("student-qr-modal"))==null||me.remove();const x=document.createElement("div");x.id="student-qr-modal",x.className="fixed inset-0 z-[300] bg-white flex flex-col items-center justify-center p-6 animate-fade",x.innerHTML=`
      <div class="text-center w-full max-w-sm">
        <div class="mb-5">
          <h3 class="text-2xl font-bold text-gray-800">🎫 QR Code ของฉัน</h3>
          <p class="text-sm font-semibold text-emerald-600 mt-1">${e.full_name}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส: ${e.student_code} · ห้อง: ${ve(e.main_room)}</p>
        </div>
        
        <div class="relative w-64 h-64 mx-auto mb-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
          <canvas id="student-qr-canvas" class="w-56 h-56 object-contain"></canvas>
        </div>

        <div class="mb-8 px-4">
          <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-2.5">
            <div id="qr-timer-bar" class="bg-emerald-500 h-full w-full transition-all duration-1000 ease-linear"></div>
          </div>
          <p class="text-xs font-semibold text-gray-500">QR Code จะหมดอายุและปิดตัวลงใน <span id="qr-timer-sec" class="text-emerald-600 font-bold text-sm">${A}</span> วินาที</p>
          <p class="text-[10px] text-gray-400 mt-1">(สิทธิ์การสร้างวันนี้เหลือ: ${z-d.count} / ${z} ครั้ง)</p>
        </div>

        <button id="btn-close-qr" class="w-full py-3.5 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
          ✕ ปิดหน้าจอ
        </button>
      </div>`,document.body.appendChild(x);const v=x.querySelector("#student-qr-canvas"),E=Math.floor(Date.now()/1e3),H=`SQ:${e.student_code}:${E}`;try{await ss.toCanvas(v,H,{width:220,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch(V){console.error("Failed to draw QR Code:",V),Y("สร้าง QR Code ไม่สำเร็จ","error"),x.remove();return}let F=A;const R=x.querySelector("#qr-timer-bar"),ae=x.querySelector("#qr-timer-sec"),ce=setInterval(()=>{F-=1,ae&&(ae.textContent=F),R&&(R.style.width=`${F/A*100}%`),F<=0&&(clearInterval(ce),x.remove(),Y("QR Code หมดอายุและปิดตัวลงแล้ว ⏱","info"))},1e3);x.querySelector("#btn-close-qr").addEventListener("click",()=>{clearInterval(ce),x.remove()})})}const Es={safe:{border:"border-emerald-400",badgeBg:"bg-emerald-50",badgeText:"text-emerald-700",label:"🟢 ปกติ"},warning:{border:"border-amber-400",badgeBg:"bg-amber-50",badgeText:"text-amber-700",label:"🟠 เสี่ยง"},danger:{border:"border-red-500",badgeBg:"bg-red-50",badgeText:"text-red-700",label:"🔴 โดนตัดสิทธิ์"}};function Ls(e){var l;(l=document.getElementById("student-leave-modal"))==null||l.remove();const t=document.createElement("div");t.id="student-leave-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 border-transparent transition-colors",t.innerHTML=`
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
  `,document.body.appendChild(t);const s=()=>{t._leaveTimer&&clearInterval(t._leaveTimer),t.remove()};t.querySelector("#btn-leave-modal-close").addEventListener("click",s),Cs(e,t)}function js(e,t){e.querySelectorAll(".leave-tab-btn").forEach(s=>{const l=s.dataset.leaveTab===t;s.className=`leave-tab-btn flex-1 py-3 text-sm font-bold border-b-2 transition ${l?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}`})}async function Cs(e,t){const s=t.querySelector("#student-leave-body");let l="permit";try{const[c,p]=await Promise.all([Vt(e.id),Wt(e.id)]),u=p.filter($=>$.status==="overdue").length,q=u>=3?"danger":u>=1?"warning":"safe",T=Es[q],b=()=>{var a,d,x,v;let $="";if(c){const E=((d=(a=c.classes)==null?void 0:a.master_subjects)==null?void 0:d.subject_name)||((x=c.classes)==null?void 0:x.class_name)||"—";$=`
          <div id="student-leave-active-card" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 transition-colors">
            <div class="flex items-center justify-between mb-1">
              <span id="student-leave-active-label" class="text-xs font-bold text-amber-700">🚪 กำลังออกนอกห้องอยู่</span>
              <span id="student-leave-active-timer" class="font-mono text-sm font-extrabold text-amber-700">--:--</span>
            </div>
            <p id="student-leave-active-detail" class="text-xs text-amber-800">${X(E)} · เหตุผล: ${X(c.reason)}</p>
            <p id="student-leave-active-teacher" class="text-[11px] text-amber-600 mt-1">ครูผู้อนุญาต: ${X(((v=c.teachers)==null?void 0:v.full_name)||"—")}</p>
          </div>
        `}return`
        <div class="rounded-2xl ${T.badgeBg} border ${T.border} px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">สถานะปัจจุบัน</p>
            <p class="text-sm font-extrabold ${T.badgeText} mt-0.5">${T.label}</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">เลยเวลา/ไม่กลับ</p>
            <p class="text-sm font-extrabold ${T.badgeText} mt-0.5">${u}/3 ครั้ง</p>
          </div>
        </div>
        ${$}
        <div class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 leading-relaxed">
          ⚠️ <strong>ข้อควรระวัง:</strong> เมื่อได้รับอนุญาตออกนอกห้องแล้ว นักเรียนต้อง<strong>กลับเข้าห้องให้ทันเวลาที่กำหนดทุกครั้ง</strong>
          หากไม่กลับเข้าห้อง หรือกลับไม่ทันเวลา สะสมครบ <strong>3 ครั้ง</strong> จะถูก<strong>ระงับสิทธิ์การขออนุญาตออกนอกห้อง</strong>
          และระบบจะ<strong>หักคะแนนความประพฤติ</strong>ในระบบดูแลนักเรียน
        </div>
      `},z=()=>`
        <div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ประวัติการขอออกนอกห้องทั้งหมด</p>
          <div class="rounded-2xl border border-gray-100 overflow-hidden">
            ${p.length?p.map(a=>{var H,F,R;const d=((F=(H=a.classes)==null?void 0:H.master_subjects)==null?void 0:F.subject_name)||((R=a.classes)==null?void 0:R.class_name)||"—",x=a.status==="active"?"🚪 กำลังออก":a.status==="overdue"?"⛔ เลยเวลา":"✅ กลับแล้ว",v=a.status==="active"?"text-amber-600":a.status==="overdue"?"text-red-600":"text-emerald-600",E=new Date(a.created_at).toLocaleString("th-TH",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"});return`
              <div class="px-3 py-2.5 border-b border-gray-50 last:border-0">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-700">${X(d)}</span>
                  <span class="text-[10px] font-bold ${v}">${x}</span>
                </div>
                <p class="text-[11px] text-gray-400 mt-0.5">${E} · ${X(a.reason)} · ${a.allowed_duration} นาที</p>
              </div>
            `}).join(""):'<p class="text-xs text-gray-400 text-center py-6">ยังไม่มีประวัติการขอออกนอกห้อง</p>'}
          </div>
        </div>
      `,A=()=>{if(s.innerHTML=l==="permit"?b():z(),js(t,l),t.className=`fixed inset-0 z-[300] bg-white flex flex-col animate-fade border-8 transition-colors ${l==="permit"?T.border:"border-transparent"}`,l==="permit"&&c){const $=s.querySelector("#student-leave-active-card"),a=s.querySelector("#student-leave-active-label"),d=s.querySelector("#student-leave-active-timer"),x=s.querySelector("#student-leave-active-detail"),v=s.querySelector("#student-leave-active-teacher"),E=()=>{const H=es(c.created_at,c.allowed_duration);d&&(d.textContent=H.timerText),H.isOverdue&&$&&!$.classList.contains("bg-red-50")&&($.classList.remove("border-amber-200","bg-amber-50"),$.classList.add("border-red-200","bg-red-50","animate-pulse"),a&&(a.textContent="⛔ เลยเวลา",a.classList.replace("text-amber-700","text-red-700")),d&&d.classList.replace("text-amber-700","text-red-700"),x&&x.classList.replace("text-amber-800","text-red-800"),v&&v.classList.replace("text-amber-600","text-red-600")),H.isBeyondLimit&&$&&$.classList.remove("animate-pulse")};E(),t._leaveTimer=setInterval(E,1e3)}};t.querySelectorAll(".leave-tab-btn").forEach($=>{$.addEventListener("click",()=>{t._leaveTimer&&clearInterval(t._leaveTimer),l=$.dataset.leaveTab,A()})}),A()}catch(c){s.innerHTML=`<p class="text-xs text-red-500 text-center py-6">โหลดข้อมูลไม่สำเร็จ: ${X(c.message??"")}</p>`}}async function St(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const s=document.createElement("script");s.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",s.onload=()=>e(window.Html5Qrcode),s.onerror=l=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต")),document.head.appendChild(s)})}const Is="311508971789-1uqrf0e36knhlp2epsdfk34e12820ef8.apps.googleusercontent.com",qs="https://isupghduywzqbmnjgtip.supabase.co/functions/v1/google-oauth-redirect";let Pe=null;function Ms(){return Pe||(Pe=new Promise((e,t)=>{var l,c;if((c=(l=window.google)==null?void 0:l.accounts)!=null&&c.id){e();return}const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,s.onload=()=>e(),s.onerror=()=>t(new Error("โหลดสคริปต์ Google ไม่สำเร็จ")),document.head.appendChild(s)}),Pe)}function Js(){var l;(l=document.getElementById("stu-email-link-modal"))==null||l.remove();const e=document.createElement("div");e.id="stu-email-link-modal",e.className="fixed inset-0 z-[210] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e);const t=(c,p)=>{const u=e.querySelector("#sel-msg");u.className=`text-xs text-center py-2.5 rounded-xl ${p?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-700"}`,u.textContent=c,u.classList.remove("hidden")},s=async(c,p,u)=>{p&&(p.disabled=!0);try{await pt(c),t(`เชื่อมอีเมล ${c} สำเร็จแล้ว ✅`,!1),setTimeout(()=>e.remove(),1200)}catch(q){t("ไม่สำเร็จ: "+(q.message??""),!0),p&&(p.disabled=!1,p.textContent=u)}};Ms().then(()=>{window.google.accounts.id.initialize({client_id:Is,ux_mode:"redirect",login_uri:qs}),window.google.accounts.id.renderButton(e.querySelector("#sel-google-btn"),{type:"standard",theme:"outline",size:"large",text:"continue_with",width:300})}).catch(()=>{e.querySelector("#sel-google-status").textContent="ไม่สามารถโหลดปุ่ม Google ได้ในขณะนี้ — พิมพ์อีเมลด้านล่างแทนได้เลยครับ",e.querySelector("#sel-google-status").classList.remove("hidden")}),e.querySelector("#sel-later").addEventListener("click",()=>e.remove()),e.addEventListener("click",c=>{c.target===e&&e.remove()}),e.querySelector("#sel-save").addEventListener("click",async()=>{const c=e.querySelector("#sel-save"),p=e.querySelector("#sel-email").value.trim(),u=e.querySelector("#sel-email-confirm").value.trim();if(!p||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p)){t("กรุณากรอกอีเมลให้ถูกต้อง",!0);return}if(p!==u){t("อีเมลทั้งสองช่องไม่ตรงกัน",!0);return}c.textContent="กำลังบันทึก...",await s(p,c,"เชื่อมอีเมล")})}async function Ks(e){try{await pt(e),Y(`เชื่อมอีเมล ${e} สำเร็จแล้ว ✅`,"success")}catch(t){Y("เชื่อมอีเมลไม่สำเร็จ: "+(t.message??""),"error")}}const ot={success:{male:"prayer-scan-success.wav",female:"prayer-scan-success-female.wav"},error:{male:"prayer-scan-error.wav",female:"prayer-scan-error-female.wav"},duplicate:{male:"prayer-scan-duplicate.wav",female:"prayer-scan-duplicate-female.wav"}},lt={};function fe(e="success",t=null){try{const s=ot[e]?e:"error",l=t==="หญิง"?"female":"male",c=`${s}_${l}`;let p=lt[c];if(!p){const u="/pp5online/";p=new Audio(`${u}sounds/${ot[s][l]}`),lt[c]=p}p.currentTime=0,p.volume=1,p.play().catch(u=>console.warn("Play scan sound failed:",u))}catch(s){console.error("Play scan sound failed",s)}}function Ue(e,t){const l=$t(t==null?void 0:t.semester_start,[]).find(c=>c.days.some(p=>p.ds===e));return l?l.n:1}async function Xs(e){var S,P;const t=e;window._lastSuccessFeedbackHTML="",se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,l]=await Promise.all([Ce().catch(()=>({})),kt().catch(()=>[])]);window._pp5SystemCfg=s;let c=!1;if(e.student_code)c=_t(e,s);else if(e.teacher_code){const o=(s.prayerScannerTeachers||"").split(/[\s,]+/).map(h=>h.trim()).filter(Boolean);let y=null;try{const h=await _e.from("profiles").select("role").eq("id",e.profile_id).maybeSingle();y=(h==null?void 0:h.data)??null}catch{}c=o.includes(e.teacher_code)||e.staff_type==="แอดมิน"||e.position==="admin"||(y==null?void 0:y.role)==="admin"}if(!c){se(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบสแกนนี้</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์ใช้งาน</p>
      </div>`);return}const p=!!e.teacher_code,u=!p&&wt(e,s),q=Je(s,u);if(!p&&!We(s,u)){se(`
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
      </div>`),(S=document.getElementById("scanner-btn-back-restricted"))==null||S.addEventListener("click",()=>{window._stuNav("overview")});return}const T=document.querySelector("nav.safe-area-bottom");T&&T.classList.add("hidden");const b=document.getElementById("sidebar"),z=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");if(b&&b.classList.add("hidden"),z&&z.classList.remove("md:ml-64"),window._activePrayerScannerState){try{window._activePrayerScannerState.html5Qrcode&&window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{})}catch{}window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)}window._activePrayerScannerState={html5Qrcode:null,focusInterval:null,syncInterval:null,countdownInterval:null},window._syncedStudentIdsToday||(window._syncedStudentIdsToday=new Set);const A=we(new Date);let $=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");$=$.filter(o=>o.check_date===A),localStorage.setItem("prayer_scan_history_today",JSON.stringify($)),$.forEach(o=>window._syncedStudentIdsToday.add(o.student_id));let a=localStorage.getItem("prayer_scan_input_mode")||"camera",d=localStorage.getItem("prayer_scan_device_mode")||"single";const x=cs(e),v=localStorage.getItem("prayer_scan_active_location");let E=x.some(o=>o.id===v)?v:((P=x[0])==null?void 0:P.id)||"musolla_male",H=localStorage.getItem("prayer_scan_record_status")||"pray",F=!1,R=!1;const ae="/pp5online/prayer-scanner-amanah.png";function ce(){var Z,te;const o=we(new Date),y=Ue(o,s),h=x.map(L=>`
      <option value="${L.id}" ${E===L.id?"selected":""}>${L.icon} ${L.label}${L.detail?` (${L.detail})`:""}</option>
    `).join(""),j=x.map(L=>`
      <button type="button" data-location="${L.id}"
        class="scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-emerald-100 text-xl flex items-center justify-center flex-shrink-0">${L.icon}</span>
          <span class="min-w-0">
            <span class="block text-sm font-extrabold">${L.label}</span>
            <span class="block text-xs text-gray-500 mt-0.5">${L.detail||"จุดสแกนละหมาด"}</span>
          </span>
          <span class="scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold border-gray-200 bg-white text-transparent">✓</span>
        </div>
      </button>
    `).join(""),I=`
      <!-- Flash green screen overlay -->
      <div id="scanner-flash" class="fixed inset-0 pointer-events-none z-50 bg-emerald-500 opacity-0 transition-opacity duration-150 hidden"></div>
      <div id="scanner-time-warning-border" class="hidden fixed inset-0 pointer-events-none z-[60] border-4 border-red-500 rounded-[2rem] animate-pulse"></div>

      ${p?"":`
      <div id="scanner-amanah-modal" class="fixed inset-0 z-[90] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
        <div class="w-full max-w-3xl max-h-[92vh] overflow-hidden bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col">
          <div class="flex-1 overflow-y-auto bg-emerald-950/5">
            <img id="scanner-amanah-poster" src="${ae}" alt="นาซีฮัทถึงนักเรียนแกนนำผู้รับผิดชอบการสแกนละหมาด"
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

      ${p?"":`
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
          <p class="text-xs text-gray-400 mt-0.5">ผู้สแกน: ${e.full_name} · สัปดาห์ที่ ${y}</p>
        </div>
      </div>

      <div id="scanner-countdown-panel" class="${p?"bg-indigo-50 border-indigo-100 text-indigo-700":"bg-emerald-50 border-emerald-100 text-emerald-800"} rounded-2xl border px-4 py-3 mb-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <p class="text-[10px] font-bold uppercase tracking-wider opacity-70">${p?"สิทธิ์คุณครู":u?"สิทธิ์ประธาน/รองประธาน":"สิทธิ์นักเรียนแกนนำ"}</p>
          <p id="scanner-window-label" class="text-xs font-semibold mt-0.5">${p?"คุณครูเข้าใช้งานได้ตลอดเวลา":`ช่วงสแกน ${q.startLabel} - ${q.endLabel} น.`}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <p class="text-[10px] font-bold opacity-70">เวลาคงเหลือ</p>
          <p id="scanner-countdown" class="font-mono text-2xl font-extrabold leading-none">${p?"∞":"--:--"}</p>
        </div>
      </div>

      <!-- Settings panel -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">ช่องทางสแกน</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-input-camera" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${a==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📷 ใช้กล้อง
              </button>
              <button id="opt-input-gun" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${a==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                🔌 ปืนยิงสแกน
              </button>
            </div>
          </div>
          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">โหมดจอแสดงผล</label>
            <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
              <button id="opt-device-single" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${d==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📱 เครื่องเดียว
              </button>
              <button id="opt-device-dual" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${d==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}">
                📡 แยกสองเครื่อง
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📍 จุดพื้นที่สแกนปัจจุบัน (Active Location)</label>
          <select id="opt-active-location" class="w-full text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            ${h}
          </select>
        </div>

        ${e.gender==="หญิง"||e.teacher_code?`
        <div class="border-t border-gray-100 pt-3 mb-3">
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">📝 สถานะบันทึกเมื่อสแกน (Record Status)</label>
          <div class="flex rounded-xl bg-gray-100 p-0.5 border border-gray-200/50">
            <button id="opt-status-pray" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${H==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟢 ละหมาดปกติ
            </button>
            <button id="opt-status-usor" class="flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${H==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}">
              🟣 บันทึกอูโซร
            </button>
          </div>
        </div>
        `:""}

        <!-- iPad Monitor Display Link -->
        <div id="dual-monitor-link-area" class="mt-3.5 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3 ${d==="dual"?"":"hidden"}">
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
      <div id="scanner-view-camera" class="relative overflow-hidden bg-slate-950 rounded-3xl w-full max-w-sm mx-auto aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4 ${a==="camera"?"":"hidden"}">
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

      <div id="scanner-view-gun" class="border border-dashed border-gray-300 bg-white rounded-3xl py-12 px-6 text-center shadow-sm mb-4 transition-all relative ${a==="gun"?"":"hidden"}">
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
        <p class="text-[10px] text-gray-400 mt-1.5">ใช้เฉพาะกรณีสแกนไม่ติดหรือ QR Code หาย จำกัด ${(()=>{const L=parseInt(s.prayerManualEntryMonthlyLimit??"2",10);return Number.isFinite(L)?Math.max(0,L):2})()} ครั้ง/เดือน/คน</p>
      </div>

      <!-- Active Check-In Popup Overlay -->
      <div id="scanner-feedback-container" class="hidden my-4 relative z-30 transition-all duration-300"></div>

      <!-- Roster Lookup Status -->
      <div id="roster-status" class="px-4 py-2 bg-gray-100 rounded-xl text-center text-[10px] text-gray-400 mb-4 border border-gray-200/50">
        บัญชีรายชื่อสภานักเรียน: โหลดแล้ว ${l.length} คน
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
    `,n=document.getElementById("stu-content")||document.getElementById("main-content");n&&(n.innerHTML=`<div class="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 pb-6 animate-fade">${I}</div>`),document.getElementById("scanner-btn-back").addEventListener("click",()=>{pe(),window._activePrayerScannerState&&(window._activePrayerScannerState.focusInterval&&clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.syncInterval&&clearInterval(window._activePrayerScannerState.syncInterval),window._activePrayerScannerState.countdownInterval&&clearInterval(window._activePrayerScannerState.countdownInterval)),T&&T.classList.remove("hidden");const L=document.getElementById("sidebar"),G=document.querySelector(".md\\:ml-64")||document.querySelector("body > div.md\\:ml-64");L&&L.classList.remove("hidden"),G&&G.classList.add("md:ml-64"),e.teacher_code?dt(async()=>{const{renderPrayerAdmin:g}=await import("./views-Dsbi1Yvn.js").then(k=>k.J);return{renderPrayerAdmin:g}},__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(({renderPrayerAdmin:g})=>{g(e)}):window._stuNav("overview")}),document.getElementById("opt-input-camera").addEventListener("click",()=>{me("camera")}),document.getElementById("opt-input-gun").addEventListener("click",()=>{me("gun")}),document.getElementById("opt-device-single").addEventListener("click",()=>{V("single")}),document.getElementById("opt-device-dual").addEventListener("click",()=>{V("dual")}),document.getElementById("btn-open-monitor").addEventListener("click",()=>{window.open("/pp5online/prayer-monitor.html","_blank")}),document.getElementById("btn-manual-sync").addEventListener("click",()=>{i()});const _=document.getElementById("scanner-manual-code-input"),N=document.getElementById("btn-submit-manual-scan"),U=()=>{const L=_==null?void 0:_.value.trim();if(!L){Y("กรุณากรอกรหัสนักเรียน","warning"),_==null||_.focus();return}_.value="",ue(L,{inputMethod:"manual"})};N==null||N.addEventListener("click",U),_==null||_.addEventListener("keydown",L=>{L.key==="Enter"&&(L.preventDefault(),U())});const B=document.getElementById("opt-active-location");let O="";const D=L=>{const G=document.getElementById("btn-confirm-scanner-location");G&&(G.disabled=!L,G.className=L?"w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-lg shadow-emerald-200/60 active:scale-95 transition":"w-full py-3 rounded-2xl bg-gray-300 text-white text-sm font-extrabold shadow-sm cursor-not-allowed transition")},r=(L=E)=>{document.querySelectorAll(".scanner-location-choice").forEach(G=>{const g=G.dataset.location===L;G.className=`scanner-location-choice w-full text-left px-4 py-3 rounded-2xl border transition active:scale-[0.99] ${g?"border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm":"border-gray-200 bg-white text-gray-700 hover:bg-gray-50"}`;const k=G.querySelector(".scanner-location-check");k&&(k.className=`scanner-location-check ml-auto w-6 h-6 rounded-full border flex items-center justify-center text-xs font-extrabold ${g?"border-emerald-500 bg-emerald-600 text-white":"border-gray-200 bg-white text-transparent"}`)})},m=(L,{toast:G=!1}={})=>{x.some(g=>g.id===L)&&(E=L,localStorage.setItem("prayer_scan_active_location",E),B&&(B.value=E),r(),G&&Y("เปลี่ยนจุดสแกนปัจจุบันสำเร็จ","info"))};B==null||B.addEventListener("change",L=>{m(L.target.value,{toast:!0})}),document.querySelectorAll(".scanner-location-choice").forEach(L=>{L.addEventListener("click",()=>{O=L.dataset.location||"",m(O),r(O),D(!!O)})}),(e.gender==="หญิง"||e.teacher_code)&&(document.getElementById("opt-status-pray").addEventListener("click",()=>{re("pray")}),document.getElementById("opt-status-usor").addEventListener("click",()=>{re("usor")}));const C=()=>{R||(R=!0,Q(),de(),a==="camera"?ne():ge())},W=()=>{const L=document.getElementById("scanner-location-modal");if(!L){C();return}O="",r(""),D(!1),L.classList.remove("hidden"),L.classList.add("flex")};(Z=document.getElementById("btn-confirm-scanner-location"))==null||Z.addEventListener("click",()=>{var L;if(!O){Y("กรุณาเลือกจุดสแกนก่อนเปิดระบบ","warning");return}localStorage.setItem("prayer_scan_active_location",E),(L=document.getElementById("scanner-location-modal"))==null||L.remove(),C()}),Q();const K=document.getElementById("scanner-amanah-modal");K?(te=document.getElementById("btn-ack-scanner-amanah"))==null||te.addEventListener("click",()=>{K.remove(),W()}):W()}function me(o){o!==a&&(a=o,localStorage.setItem("prayer_scan_input_mode",o),o==="camera"?($e(),document.getElementById("scanner-view-gun").classList.add("hidden"),document.getElementById("scanner-view-camera").classList.remove("hidden"),ne()):(pe(),document.getElementById("scanner-view-camera").classList.add("hidden"),document.getElementById("scanner-view-gun").classList.remove("hidden"),ge()),document.getElementById("opt-input-camera").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${o==="camera"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-input-gun").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${o==="gun"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`)}function V(o){if(o===d)return;d=o,localStorage.setItem("prayer_scan_device_mode",o);const y=document.getElementById("dual-monitor-link-area");o==="dual"?y.classList.remove("hidden"):y.classList.add("hidden"),document.getElementById("opt-device-single").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${o==="single"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`,document.getElementById("opt-device-dual").className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${o==="dual"?"bg-white text-emerald-700 shadow-sm":"text-gray-500"}`}function re(o){if(o===H)return;H=o,localStorage.setItem("prayer_scan_record_status",o);const y=document.getElementById("opt-status-pray"),h=document.getElementById("opt-status-usor");y&&h&&(y.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${o==="pray"?"bg-emerald-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`,h.className=`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${o==="usor"?"bg-purple-600 text-white shadow-sm":"text-gray-500 hover:text-gray-700"}`),Y(`เปลี่ยนโหมดบันทึกเป็น: ${o==="pray"?"ละหมาดปกติ":"อูโซร"}`,"info")}function de(){if(p)return;const o=document.getElementById("scanner-countdown"),y=document.getElementById("scanner-countdown-panel"),h=document.getElementById("scanner-time-warning-border");if(!o||!y||!h)return;const j=()=>{const I=hs(s,u);o.textContent=ws(I);const n=I<=ys;y.classList.toggle("bg-red-50",n),y.classList.toggle("border-red-200",n),y.classList.toggle("text-red-700",n),y.classList.toggle("bg-emerald-50",!n),y.classList.toggle("border-emerald-100",!n),y.classList.toggle("text-emerald-800",!n),h.classList.toggle("hidden",!n),I<=0&&(pe(),$e())};j(),window._activePrayerScannerState.countdownInterval=setInterval(j,1e3)}async function ne(){try{const o=await St(),y=new o("camera-reader");window._activePrayerScannerState.html5Qrcode=y;let h=null,j=0;const I={fps:25,aspectRatio:1};await y.start({facingMode:"environment"},I,n=>{n===h&&Date.now()-j<1800||(h=n,j=Date.now(),ue(n))},()=>{})}catch(o){console.error("Camera open failed:",o),Y("ไม่สามารถเปิดใช้งานกล้องได้: "+(o.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function pe(){window._activePrayerScannerState&&window._activePrayerScannerState.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}function ge(){const o=document.getElementById("scanner-gun-input");if(!o)return;o.focus();const y=setInterval(()=>{const h=document.getElementById("scanner-manual-code-input");document.activeElement!==o&&document.activeElement!==h&&document.getElementById("scanner-gun-input")&&o.focus()},1e3);window._activePrayerScannerState.focusInterval=y,o.addEventListener("keydown",h=>{if(h.key==="Enter"){h.preventDefault();const j=o.value.trim();o.value="",j&&ue(j)}})}function $e(){window._activePrayerScannerState&&window._activePrayerScannerState.focusInterval&&(clearInterval(window._activePrayerScannerState.focusInterval),window._activePrayerScannerState.focusInterval=null)}async function ue(o,y={}){if(console.log("[Scanner] Raw scanned text:",o),!o)return;const h=y.inputMethod==="manual"?"manual":"qr";if(!p&&!We(s,u)){fe("error"),ie(null,o,`ไม่อยู่ในช่วงเวลาบันทึกกิจกรรมละหมาด (${q.startLabel} - ${q.endLabel} น.)`);return}let j=String(o).trim(),I=!1;if(j.startsWith("SQ:")){const G=j.split(":");if(G.length===3){const[,g,k]=G,M=parseInt(k,10),ee=Math.floor(Date.now()/1e3),le=ee-M,oe=parseInt(s.studentQrExpirySeconds||"60",10);console.log(`[Scanner] Dynamic QR parsed - Code: ${g}, QR Time: ${M}, Now: ${ee}, Diff: ${le}s, Allowed Expiry: ${oe}s`),(isNaN(M)||le>oe||le<-oe)&&(I=!0),j=g.trim()}else{console.warn("[Scanner] Invalid SQ payload parts count:",G.length),fe("error"),ie(null,o,"รูปแบบ QR Code ไม่ถูกต้อง");return}}const n=l.find(G=>String(G.student_code).trim()===j);if(console.log("[Scanner] Lookup result for code:",j,n?n.full_name:"not found"),I){console.warn("[Scanner] QR Code has expired");const G=parseInt(s.studentQrExpirySeconds||"60",10);fe("error",n==null?void 0:n.gender),ie(n,j,`QR Code นี้หมดอายุแล้ว (เกิน ${G} วินาที)`);return}if(!n){fe("error"),ie(null,j,"ไม่พบข้อมูลนักเรียนรหัสนี้");return}const _=ps(n,E);if(_){fe("error",n.gender),ie(n,j,_);return}const N=we(new Date),U=rt(t.main_room),B=rt(n.main_room),O=!!U&&!!B&&U===B;if(!p&&O&&vs(n.gender,s)){fe("error",n.gender),ie(n,j,"ระบบป้องกันการบันทึกนักเรียนห้องเดียวกับผู้สแกนกำลังเปิดอยู่");return}const D=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(D.some(G=>G.student_id===n.id&&G.check_date===N)){fe("duplicate",n.gender),ie(n,j,"เช็คชื่อซ้ำ! มีชื่อในคิวรอส่งขึ้นเซิร์ฟเวอร์แล้ว");return}if(window._syncedStudentIdsToday.has(n.id)){fe("duplicate",n.gender),ie(n,j,"เช็คชื่อซ้ำ! บันทึกข้อมูลวันนี้ไปแล้ว");return}if(h==="manual"){const G=parseInt(s.prayerManualEntryMonthlyLimit??"2",10),g=Number.isFinite(G)?Math.max(0,G):2;if(g===0){fe("error",n.gender),ie(n,j,"ระบบปิดการบันทึกด้วยการกรอกรหัสอยู่");return}const k=D.filter(M=>M.student_id!==n.id||M.input_method!=="manual"||!M.check_date?!1:String(M.check_date).slice(0,7)===N.slice(0,7)).length;try{if(await Et(n.id,N)+k>=g){fe("error",n.gender),ie(n,j,`ใช้สิทธิ์กรอกรหัสครบ ${g} ครั้งในเดือนนี้แล้ว`);return}}catch(M){console.warn("Manual prayer count check failed:",M),fe("error",n.gender),ie(n,j,"ตรวจสอบจำนวนครั้งกรอกรหัสไม่สำเร็จ กรุณาเช็กว่าได้รัน patch_prayer_scanner_safety.sql แล้ว");return}}const m=Ue(N,s);let C=H,W="";C==="usor"&&n.gender==="ชาย"&&(C="pray",W=" (เปลี่ยนเป็นละหมาดเนื่องจากเป็นนักเรียนชาย)");const K=t.teacher_code?`${t.full_name} (ครู)`:`${t.full_name} (รหัส ${t.student_code||"—"})`,Z={student_id:n.id,main_room:n.main_room,check_date:N,status:C,week_number:m,location:E,full_name:n.full_name,student_code:n.student_code,scanned_by:K,input_method:h,scanner_code:t.teacher_code||t.student_code||null,scanner_name:t.full_name||null,scanner_room:t.main_room||null,scanner_gender:t.gender||null,same_room_flag:O};D.push(Z),localStorage.setItem("prayer_scan_queue",JSON.stringify(D));let te=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");te=te.filter(G=>G.check_date===N),te.some(G=>G.student_id===n.id)||(te.unshift({student_id:n.id,full_name:n.full_name,student_code:n.student_code,main_room:n.main_room,check_date:N,status:C,input_method:h,same_room_flag:O}),localStorage.setItem("prayer_scan_history_today",JSON.stringify(te))),window._syncedStudentIdsToday.add(n.id),fe("success",n.gender),J(),ie(n,j,`บันทึกสำเร็จลงเครื่องแล้ว${h==="manual"?" (กรอกรหัส)":""}${W}`,!0,C),Q(),i()}function ie(o,y,h,j=!1,I="pray"){const n=document.getElementById("scanner-feedback-container");if(n){if(window._feedbackTimeout&&clearTimeout(window._feedbackTimeout),j&&o){const _=I==="usor",N=o.image_url?`<img src="${o.image_url}" class="w-16 h-20 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-16 h-20 rounded-xl ${_?"bg-purple-50 border-purple-100 text-purple-600":"bg-emerald-50 border-emerald-100 text-emerald-600"} font-bold text-2xl flex items-center justify-center">${o.full_name.charAt(0)}</div>`,U=_?'<span class="inline-block px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold">บันทึกอูโซรสำเร็จ</span>':'<span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold">บันทึกผ่านสำเร็จ</span>';n.innerHTML=`
        <div class="bg-white/95 border ${_?"border-purple-200":"border-emerald-200"} rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          ${N}
          <div class="flex-1 min-w-0">
            ${U}
            <h4 class="font-extrabold text-gray-800 text-sm mt-1 truncate">${o.full_name}</h4>
            <p class="text-xs text-gray-500 truncate">รหัส ${o.student_code} · ห้อง ${ve(o.main_room)}</p>
            <p class="text-[10px] text-gray-400 mt-1.5 font-mono">${h}</p>
          </div>
          <button id="btn-undo-scan" data-sid="${o.id}" data-name="${o.full_name}" class="px-2.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-all text-xs font-bold active:scale-95 flex-shrink-0 flex items-center gap-0.5">
            ✕ ยกเลิก
          </button>
        </div>`,window._lastSuccessFeedbackHTML=n.innerHTML,be(n)}else{const _=o?o.full_name:"ไม่พบข้อมูล",N=o?`รหัส ${o.student_code} · ห้อง ${ve(o.main_room)}`:`สแกนพบ: ${y}`;n.innerHTML=`
        <div class="bg-white/95 border border-red-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <div class="w-16 h-20 rounded-xl bg-red-50 border border-red-100 text-red-500 font-bold text-2xl flex items-center justify-center">❌</div>
          <div class="flex-1 min-w-0">
            <span class="inline-block px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
            <h4 class="font-bold text-gray-800 text-sm mt-1 truncate">${_}</h4>
            <p class="text-xs text-gray-500 truncate">${N}</p>
            <p class="text-xs font-bold text-red-600 mt-1.5">${h}</p>
          </div>
        </div>`,n.classList.remove("hidden"),window._feedbackTimeout=setTimeout(()=>{window._lastSuccessFeedbackHTML?(n.innerHTML=window._lastSuccessFeedbackHTML,be(n)):(n.innerHTML="",n.classList.add("hidden"))},3500);return}n.classList.remove("hidden")}}function be(o){const y=o.querySelector("#btn-undo-scan");y&&y.addEventListener("click",()=>{const h=parseInt(y.dataset.sid,10),j=y.dataset.name;f(h,j)})}async function f(o,y){const h=we(new Date);let j=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");j=j.filter(_=>!(_.student_id===o&&_.check_date===h)),localStorage.setItem("prayer_scan_queue",JSON.stringify(j));let I=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");I=I.filter(_=>!(_.student_id===o&&_.check_date===h)),localStorage.setItem("prayer_scan_history_today",JSON.stringify(I)),window._syncedStudentIdsToday.delete(o),window._lastSuccessFeedbackHTML="";const n=document.getElementById("scanner-feedback-container");n&&(n.innerHTML="",n.classList.add("hidden")),Q(),Y(`กำลังยกเลิกรายการของ ${y}...`,"info");try{const{error:_}=await _e.from("prayer_records").delete().eq("student_id",o).eq("check_date",h).is("teacher_id",null);if(_)throw _;Y(`ยกเลิกบันทึกของ ${y} สำเร็จ ✕`,"success")}catch(_){console.warn("Failed to delete from server (offline?):",_),Y("ยกเลิกในเครื่องสำเร็จ (จะปรับปรุงบนเซิร์ฟเวอร์เมื่อออนไลน์)","warning")}}function J(){const o=document.getElementById("scanner-flash");o&&(o.classList.remove("hidden","opacity-0"),o.classList.add("opacity-40"),setTimeout(()=>{o.classList.remove("opacity-40"),o.classList.add("opacity-0"),setTimeout(()=>o.classList.add("hidden"),150)},120))}function Q(o=!1){const y=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");let h=JSON.parse(localStorage.getItem("prayer_scan_history_today")||"[]");const j=we(new Date);h=h.filter(B=>B.check_date===j);const I=document.getElementById("scan-count-badge");I&&(I.textContent=`${h.length} คน`);const n=document.getElementById("sync-indicator"),_=document.getElementById("sync-title"),N=document.getElementById("sync-desc");if(!n||!_||!N)return;o?(n.className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse",_.textContent="กำลังซิงก์ประวัติเวลากิจกรรม...",N.textContent=`กำลังส่งข้อมูล ${y.length} คนขึ้นเซิร์ฟเวอร์`):y.length>0?(n.className="w-2.5 h-2.5 rounded-full bg-amber-500",_.textContent=`ค้างส่ง ${y.length} รายการ (ออฟไลน์)`,N.textContent="ข้อมูลจัดเก็บในระบบออฟไลน์ชั่วคราว รอการเชื่อมต่ออินเทอร์เน็ต"):(n.className="w-2.5 h-2.5 rounded-full bg-emerald-500",_.textContent="ซิงก์ข้อมูลทั้งหมดเรียบร้อยแล้ว",N.textContent="พร้อมบันทึกประวัติละหมาด");const U=document.getElementById("scan-list");U&&(h.length===0?U.innerHTML='<div class="text-center py-6 text-xs text-gray-400">ยังไม่มีประวัติสแกนวันนี้</div>':(U.innerHTML=h.map((B,O)=>{const D=y.some(K=>K.student_id===B.student_id),r=B.status==="usor",m=B.input_method==="manual"?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-50 text-slate-700 text-[10px] font-bold border border-slate-200">กรอกรหัส</span>':"",C=B.same_room_flag?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">ห้องเดียวกัน</span>':"",W=D?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 animate-pulse">ออฟไลน์</span>':r?'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-100">อูโซร 🟣</span>':'<span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">✓ สำเร็จ</span>';return`
            <div class="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <span class="text-gray-400 font-mono">${h.length-O}</span>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-gray-800 truncate">${B.full_name}</p>
                <p class="text-[10px] text-gray-400 truncate">รหัส ${B.student_code} · ห้อง ${ve(B.main_room)}</p>
              </div>
              ${m}
              ${C}
              ${W}
              <button class="btn-cancel-scan-row px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition text-[10px] font-bold"
                data-sid="${B.student_id}" data-name="${B.full_name}">
                ยกเลิก
              </button>
            </div>
          `}).join(""),U.querySelectorAll(".btn-cancel-scan-row").forEach(B=>{B.addEventListener("click",()=>{const O=parseInt(B.dataset.sid,10),D=B.dataset.name||"นักเรียน";f(O,D)})})))}async function i(){if(F)return;const o=JSON.parse(localStorage.getItem("prayer_scan_queue")||"[]");if(o.length){F=!0,Q(!0);try{const y=await ct(o);localStorage.setItem("prayer_scan_queue",JSON.stringify([])),y!=null&&y.skippedCount?Y(`ซิงก์สำเร็จ (ข้าม ${y.skippedCount} รายการที่ครูบันทึกไว้แล้ว)`,"warning"):Y("ซิงก์บันทึกสแกนละหมาดสำเร็จ","success")}catch(y){console.warn("Sync failed, offline backup kept:",y)}finally{F=!1,Q()}}}const w=setInterval(()=>{i()},8e3);window._activePrayerScannerState.syncInterval=w,ce()}async function Zs(e){if(!(e!=null&&e.can_scan_prayer)){se(`
      <div class="max-w-lg mx-auto px-4 py-16 text-center text-gray-400">
        <p class="text-4xl mb-3">⚠️</p>
        <p class="font-medium text-gray-600">ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้</p>
      </div>`);return}se(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);let t={},s=we(new Date),l=[];const c=a=>{if(!a)return"—";const d=new Date(a);return`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`},p=(a,d)=>{const x=new Date(a+"T00:00:00");return x.setDate(x.getDate()+d),we(x)};async function u(){try{l=await Gt(e.student_code,s)}catch(d){l=[],Y("โหลดข้อมูลไม่สำเร็จ: "+(d.message??""),"error")}const a=document.getElementById("sh-search-input");q((a==null?void 0:a.value.trim())??"")}function q(a=""){var E,H;const d=document.getElementById("sh-list"),x=document.getElementById("sh-count");if(!d)return;x&&(x.textContent=`${l.length} คน`);const v=a?l.filter(F=>{var R;return String(((R=F.students)==null?void 0:R.student_code)??"").includes(a)}):l;if(a&&!v.length){d.innerHTML=`
        <div class="py-8 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm text-gray-500 mb-1">ไม่พบข้อมูลการสแกนของรหัส "<b>${X(a)}</b>" ในวันที่เลือก</p>
          <p class="text-xs text-gray-400 mb-4">ถ้าตรวจสอบแล้วว่านักเรียนคนนี้ละหมาดจริง บันทึกซ้ำได้เลย หรือถ้าไม่มั่นใจให้ส่งแอดมินตรวจสอบ</p>
          <div class="flex flex-col sm:flex-row gap-2 justify-center">
            <button id="sh-resave-btn" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">✏️ บันทึกซ้ำ</button>
            <button id="sh-report-btn" class="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition">🚩 ไม่มั่นใจ ส่งแอดมิน</button>
          </div>
        </div>`,(E=document.getElementById("sh-resave-btn"))==null||E.addEventListener("click",()=>z(a)),(H=document.getElementById("sh-report-btn"))==null||H.addEventListener("click",()=>A(a));return}if(!v.length){d.innerHTML='<div class="py-10 text-center text-gray-300 text-sm">ยังไม่มีข้อมูลการสแกนในวันที่เลือก</div>';return}d.innerHTML=v.map(F=>{const R=F.students??{},ae=Te[F.status]??{label:"?",cls:"bg-gray-50 text-gray-400 border-gray-100",title:F.status??"—"};return`
      <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 mb-1.5">
        <div class="w-9 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">
          ${R.image_url?`<img src="${R.image_url}" class="w-full h-full object-cover"/>`:X((R.full_name??"?").charAt(0))}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-gray-700 truncate">${X(R.full_name??"—")}</p>
          <p class="text-[11px] text-gray-400">รหัส ${X(R.student_code??"—")} · ${X(R.religion_room??R.main_room??"—")}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold ${ae.cls}" title="${X(ae.title)}">${ae.label}</span>
          <p class="text-[10px] text-gray-400 mt-0.5">${c(F.created_at)}</p>
        </div>
      </div>`}).join("")}async function T(){window._activePrayerScannerState={html5Qrcode:null};try{const a=await St(),d=new a("sh-camera-reader");window._activePrayerScannerState.html5Qrcode=d,await d.start({facingMode:"environment"},{fps:25,aspectRatio:1},x=>{var H;let v=String(x).trim();v.startsWith("SQ:")&&(v=v.split(":")[1]??v),b(),(H=document.getElementById("sh-camera-wrap"))==null||H.classList.add("hidden");const E=document.getElementById("sh-search-input");E&&(E.value=v),q(v)},()=>{})}catch(a){Y("ไม่สามารถเปิดกล้องได้: "+(a.message||"ไม่มีสิทธิ์เข้าถึง"),"error")}}function b(){var a;(a=window._activePrayerScannerState)!=null&&a.html5Qrcode&&(window._activePrayerScannerState.html5Qrcode.stop().catch(()=>{}),window._activePrayerScannerState.html5Qrcode=null)}async function z(a){var H;let d=null;try{d=await et(a)}catch{}if(!d){Y("ไม่พบนักเรียนรหัสนี้ในระบบ","error");return}(H=document.getElementById("sh-resave-modal"))==null||H.remove();const x=document.createElement("div");x.id="sh-resave-modal",x.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4";const v=Object.entries(Te);x.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h4 class="font-bold text-gray-800 mb-1">✏️ บันทึกซ้ำ</h4>
        <p class="text-xs text-gray-500 mb-3">${X(d.full_name)} (รหัส ${X(d.student_code)})<br/>${X(d.religion_room??d.main_room??"—")} · วันที่ ${s}</p>
        <p class="text-xs font-medium text-gray-600 mb-1.5">สถานะ</p>
        <div class="grid grid-cols-2 gap-1.5 mb-4" id="sh-status-grid">
          ${v.map(([F,R],ae)=>`
            <button class="sh-status-btn px-3 py-2 rounded-xl border text-xs font-bold transition ${ae===0?"border-emerald-400 bg-emerald-50 text-emerald-700":"border-gray-200 text-gray-500"}" data-status="${F}">${R.title}</button>
          `).join("")}
        </div>
        <div class="flex gap-2">
          <button id="sh-resave-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold">ยกเลิก</button>
          <button id="sh-resave-confirm" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">บันทึก</button>
        </div>
      </div>`,document.body.appendChild(x);let E=v[0][0];x.querySelectorAll(".sh-status-btn").forEach(F=>{F.addEventListener("click",()=>{E=F.dataset.status,x.querySelectorAll(".sh-status-btn").forEach(R=>{R.classList.remove("border-emerald-400","bg-emerald-50","text-emerald-700"),R.classList.add("border-gray-200","text-gray-500")}),F.classList.remove("border-gray-200","text-gray-500"),F.classList.add("border-emerald-400","bg-emerald-50","text-emerald-700")})}),x.querySelector("#sh-resave-cancel").addEventListener("click",()=>x.remove()),x.querySelector("#sh-resave-confirm").addEventListener("click",async()=>{const F=x.querySelector("#sh-resave-confirm");F.disabled=!0,F.textContent="กำลังบันทึก...";try{const R={student_id:d.id,main_room:d.main_room,check_date:s,status:E,week_number:Ue(s,t),location:null,scanned_by:`${e.full_name} (รหัส ${e.student_code||"—"})`,input_method:"manual",scanner_code:e.student_code,scanner_name:e.full_name,scanner_room:e.main_room,scanner_gender:e.gender,same_room_flag:!1};await ct([R]),Y("บันทึกสำเร็จ ✅","success"),x.remove(),await u()}catch(R){Y("บันทึกไม่สำเร็จ: "+(R.message??""),"error"),F.disabled=!1,F.textContent="บันทึก"}})}async function A(a){let d=null;try{d=await et(a)}catch{}const v=`[รายงานการสแกนละหมาด] ไม่พบข้อมูลการสแกนของ ${d?`${d.full_name} (รหัส ${d.student_code}) ห้องศาสนา ${d.religion_room??d.main_room??"—"}`:`รหัสนักเรียน ${a} (ไม่พบชื่อในระบบ)`} วันที่ ${s} — ${e.full_name} (รหัส ${e.student_code}) ไม่แน่ใจว่าตนเองสแกนไว้หรือไม่ รบกวนแอดมินช่วยตรวจสอบให้ด้วยครับ`;window._openFeedbackWidget?window._openFeedbackWidget(v):Y("ไม่พบระบบ Feedback กรุณาติดต่อแอดมินโดยตรง","error")}async function $(){t=await Ce().catch(()=>({})),se(`
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
    `),document.getElementById("sh-back").addEventListener("click",()=>window._stuNav("overview")),document.getElementById("sh-date").addEventListener("change",async a=>{s=a.target.value,document.getElementById("sh-search-input").value="",await u()}),document.getElementById("sh-prev-day").addEventListener("click",async()=>{s=p(s,-1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await u()}),document.getElementById("sh-next-day").addEventListener("click",async()=>{s=p(s,1),document.getElementById("sh-date").value=s,document.getElementById("sh-search-input").value="",await u()}),document.getElementById("sh-search-input").addEventListener("input",a=>{q(a.target.value.trim())}),document.getElementById("sh-camera-btn").addEventListener("click",()=>{const a=document.getElementById("sh-camera-wrap");a.classList.toggle("hidden"),a.classList.contains("hidden")?b():T()}),document.getElementById("sh-camera-close").addEventListener("click",()=>{var a;b(),(a=document.getElementById("sh-camera-wrap"))==null||a.classList.add("hidden")}),await u()}$()}export{Ks as completeGoogleEmailLink,Js as openEmailLinkPrompt,Us as renderExamRequestForm,$s as renderStudentAllAssignments,Ws as renderStudentMyScores,Vs as renderStudentOverview,Zs as renderStudentPrayerScanHistory,Xs as renderStudentPrayerScanner,Ys as renderStudentProfile,ks as renderStudentRequests,Ss as renderStudentSubjectDetail,_s as renderStudentSubjects};
