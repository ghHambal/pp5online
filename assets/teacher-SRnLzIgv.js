const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-BzTMalao.js","assets/ui-Dh03k4iX.js","assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/sports-portals.js_v_10.22-BrIjazIR.js","assets/impersonation-C66q0Y-O.js","assets/storage-D6nkcVz6.js","assets/browser-JP79f-a9.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/teacher-views-grades-DyBe1K7u.js","assets/regrade-api-C8s-TuM0.js","assets/score-qr-scanner-SDrghEsT.js","assets/teacher-views-classes-s_CI5F_w.js","assets/pp5-doc-CVTwqJKw.js","assets/teacher-views-attendance-C31WiJPz.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/views-Dsbi1Yvn.js","assets/leave-monitor.js_v_10.18-Dz2vtIpz.js","assets/import-D0GLDW1_.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azfutsal-modal-wts4xj80.js","assets/teacher-views-flashcards-C2yTyS1-.js","assets/teacher-views-certificates-jK9ebQ-w.js","assets/certificate-engine-Ciw2pKHx.js","assets/certificate-editor-CGT2GcIB.js","assets/teacher-views-quiz-banks-C8BgK7Kc.js","assets/quiz-api-DaBneRGn.js","assets/katex-loader-DUJObfzT.js","assets/teacher-views-exam-docs.js_v_10.22-DNUQgRUW.js","assets/teacher-views-leave-scanner.js_v_10.18-DZbO8ZZf.js","assets/teacher-views-smart-classroom-BNyIlVzh.js","assets/teacher-views-quiz-monitor-BIcUtV1X.js","assets/teacher-views-quiz-analytics-CZtaCsWK.js","assets/teacher-views-dashboard-MihUIb1e.js","assets/lesson-plan-ai-workspace-Be7c01S6.js","assets/promptpay-CIuxvxIA.js","assets/push-notify-qsIWmalF.js","assets/wen-sso-CcN06Rhh.js","assets/tutorial-FuIPnEx0.js","assets/terangganu-api-C1IjZK4l.js","assets/supervisor-UNgZXUnN.js","assets/student-views-DJMSwDcA.js","assets/student-api-q3ZleCC5.js","assets/teacher-views-donor-chat-xe-Dhac5.js"])))=>i.map(i=>d[i]);
import{a as L,_ as f,s as ue,i as at,c as Se,d as rt,e as it}from"./ui-Dh03k4iX.js";import{s as q}from"./supabase-BV-W2lsh.js";import{getMyClasses as ee,getSystemConfig as V,createSubject as De,getMasterSubjects as le,updateSubject as dt,getCourseDocPage2 as lt,saveCourseDocPage2 as ct,deleteSubject as pt,getTeacherPackageAccess as mt,getMyPaymentRequests as ut,createPaymentRequest as ye,uploadPaymentSlip as Me,getMySchedule as ve,getClassScheduleLinks as he,getPeriods as Be,linkClassToSchedule as xt,unlinkClassFromSchedule as ft,getMyTeacherProfile as J,getTeacherById as Le,getMyHomeroomRooms as ae,getTeacherPositionPermissions as $e,updateLastSeen as bt,logLogin as gt,getClassByIdFull as yt,getMySubjects as ce,getMyDonationRequests as Ne,submitAppFeedback as vt,getPendingExamRequestCount as ht,getActiveAnnouncements as wt,getUnreadNotifications as _t,markNotificationsRead as kt}from"./api-1xsyVspL.js";import{p as Oe}from"./promptpay-CIuxvxIA.js";import{C as Ie,o as Et,r as St,a as Lt,b as $t,c as It,d as Ve,e as He,f as Ct,g as qt}from"./sports-portals.js_v_10.22-BrIjazIR.js";import{a as Fe}from"./theme-DIdoXkqD.js";import{g as Tt,v as Pt,e as Ce,c as At,A as jt,o as ze}from"./impersonation-C66q0Y-O.js";import{b as Rt}from"./anti-pull-refresh-BGrI1pMY.js";import{i as Dt,e as Ue}from"./push-notify-qsIWmalF.js";import{_teacherPositionList as Mt,_teacherPositionLabel as Bt}from"./teacher-views-utils-B2Iz3UWp.js";import{b as Nt,c as Ot}from"./wen-sso-CcN06Rhh.js";import{o as Vt}from"./azfutsal-modal-wts4xj80.js";import{renderTutorial as Ht}from"./tutorial-FuIPnEx0.js";import{g as Ft}from"./terangganu-api-C1IjZK4l.js";import{g as zt}from"./regrade-api-C8s-TuM0.js";let t=null,H=[],F=!1,ne=!1,se=!1,O={},Q={enabled:!0,teacher_menu:!0,student_menu:!0,public_page:!0};window._pp5DonorTierIndex=0;window._pp5SystemCfg={};async function we(){try{const{data:e,error:s}=await q.from("settings").select("value").eq("key","sports_visibility").maybeSingle();!s&&(e!=null&&e.value)&&(Q={...Q,...e.value})}catch{}return Q}async function Ut(){ue(!0);const{data:{session:e}}=await q.auth.getSession();return e||(window.location.replace("index.html"),null)}async function _e(e){var l,r,i;const[s,n,o]=await Promise.all([J(e),q.auth.getSession(),q.from("profiles").select("role, is_also_admin").eq("id",e).maybeSingle()]);t=s,t&&(t.auth_email=((i=(r=(l=n==null?void 0:n.data)==null?void 0:l.session)==null?void 0:r.user)==null?void 0:i.email)??""),await Fe("teacher",t??{});const a=o==null?void 0:o.data;F=(a==null?void 0:a.is_also_admin)===!0,se=(a==null?void 0:a.role)==="admin"||F;const d=document.querySelector("header .flex.items-center.gap-3:last-child");if(F&&d&&!document.getElementById("btn-switch-admin")){const p=document.createElement("a");p.id="btn-switch-admin",p.href="dashboard.html",p.title="สลับไปหน้าแอดมิน",p.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 shadow-sm border border-emerald-200/50 mr-1",p.innerHTML="<span>⚙️</span><span>สลับเป็นแอดมิน</span>",d.insertBefore(p,d.firstChild)}await we(),Qe(t)}function Qe(e){const s=document.querySelector("#sidebar nav"),n=Mt(e),o=Bt(e);if(n.length>0&&s&&!document.getElementById("btn-sv-mode")){const c=document.createElement("button");c.id="btn-sv-mode",c.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition w-full text-left text-emerald-200 hover:bg-emerald-800 hover:text-white",c.style.color="#93c5fd",c.innerHTML=`<span>📊</span><span>Dashboard ${o}</span>`,c.onclick=Ee;const m=s.querySelector('[data-nav="work-calendar-view"]');m?m.insertAdjacentElement("afterend",c):s.insertBefore(c,s.firstChild)}Qt();const a=(e==null?void 0:e.full_name)??"ครูผู้สอน",d=e!=null&&e.teacher_code?`รหัส ${e.teacher_code}`:"",l=(e==null?void 0:e.image_url)??"",r=document.getElementById("t-avatar");l?r.innerHTML=`<img src="${l}" class="w-full h-full object-cover" />`:r.textContent=a.charAt(0).toUpperCase(),document.getElementById("t-name").textContent=a,document.getElementById("t-code").textContent=d,e!=null&&e.id&&rn(e.id),document.getElementById("user-name").textContent=a;const i=document.getElementById("user-role-label");i&&(i.textContent=n.length?o:"ครูผู้สอน");const p=document.getElementById("user-avatar");l?p.innerHTML=`<img src="${l}" class="w-full h-full object-cover" />`:p.textContent=a.charAt(0).toUpperCase()}function Qt(){const e=document.getElementById("menu-sports-shortcut");if(!e)return;const s=Q.enabled!==!1&&Q.teacher_menu!==!1;e.classList.toggle("hidden",!s)}function me(e,s){if(e.length===1){s(e[0].main_room);return}const n=document.createElement("div");n.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">🏠 เลือกห้องที่ปรึกษา</h3>
        <p class="text-xs text-gray-400 mt-1">คุณเป็นที่ปรึกษาหลายห้อง — เลือกห้องที่ต้องการ</p>
      </div>
      <div class="px-5 py-4 space-y-2">
        ${e.map(o=>`
        <button data-room="${o.main_room}"
          class="room-pick-btn w-full text-left px-4 py-3 rounded-xl border border-gray-200
                 hover:border-emerald-400 hover:bg-emerald-50 text-sm font-medium transition">
          ${o.main_room}
        </button>`).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="room-pick-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">ยกเลิก</button>
      </div>
    </div>`,document.body.appendChild(n),n.querySelectorAll(".room-pick-btn").forEach(o=>o.addEventListener("click",()=>{n.remove(),s(o.dataset.room)})),n.querySelector("#room-pick-cancel").addEventListener("click",()=>n.remove())}const Ge={"announcements-view":()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderAnnouncementsView(t)),"work-calendar-view":()=>f(async()=>{const{renderWorkCalendarView:e,renderWorkCalendar:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderWorkCalendarView:e,renderWorkCalendar:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22])).then(({renderWorkCalendarView:e,renderWorkCalendar:s})=>O.work_calendar?s(t):e()),overview:()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderTeacherOverview(t,H)),"my-courses":()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderMyCourses(t)),"my-classes":()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderMyClasses(t)),attendance:()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderAttendance(t)),"life-skill-score":()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>{const s=H.filter(n=>n.category==="สามัญ");me(s,n=>e.renderLifeSkillScore(t,s.filter(o=>o.main_room===n)))}),"reading-score":()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>{const s=window._pendingReadingRoom;window._pendingReadingRoom=null,e.renderReadingScore(t,s)}),"prayer-score":()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>{const s=H.filter(n=>n.category==="ศาสนา");s.length===0?e.renderPrayerScore(t,[]):me(s,n=>e.renderPrayerScore(t,s.filter(o=>o.main_room===n)))}),"prayer-monitor":()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>{const s=H.filter(o=>o.category==="ศาสนา"),n=window._pendingPrayerMonitorRoom||null;window._pendingPrayerMonitorRoom=null,s.length===0?e.renderPrayerRoomMonitor(t,[]):n&&s.some(o=>o.main_room===n)?e.renderPrayerRoomMonitor(t,s,n):s.length===1?e.renderPrayerRoomMonitor(t,s,s[0].main_room):me(s,o=>e.renderPrayerRoomMonitor(t,s,o))}),grades:()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderGrades()),requests:()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderRequests(t)),schedule:()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderSchedule(t)),tutorial:()=>Ht(),flashcards:()=>f(()=>import("./teacher-views-flashcards-C2yTyS1-.js"),__vite__mapDeps([23,1,2,3,8])).then(e=>e.renderFlashcardDecks(t)),certificates:()=>f(()=>import("./teacher-views-certificates-jK9ebQ-w.js"),__vite__mapDeps([24,1,25,3,6,26,8])).then(e=>e.renderCertificateManager(t)),"quiz-system":()=>f(()=>import("./teacher-views-quiz-banks-C8BgK7Kc.js"),__vite__mapDeps([27,1,28,3,19,8,29])).then(e=>e.renderQuizBanks(t)),"exam-docs":()=>f(()=>import("./teacher-views-exam-docs.js_v_10.22-DNUQgRUW.js"),__vite__mapDeps([30,2,3,1,6,8])).then(e=>e.renderExamDocuments(t)),sports:()=>{var n;const e=(n=t==null?void 0:t.positions)!=null&&n.length?t.positions:t!=null&&t.position?[t.position]:[],s=O.menu_sports_admin||e.includes("house_color_admin")||(t==null?void 0:t.staff_type)==="แอดมิน"||(t==null?void 0:t.position)==="admin";ze(s?{admin:!0,teacherName:t==null?void 0:t.full_name,teacherCode:t==null?void 0:t.teacher_code}:{})},"advisor-students":()=>Ct(t,H),"shirt-summary":()=>He(),"sports-fund-admin":()=>Ve(),"sports-overview-admin":()=>It(),"sports-evaluation":()=>$t(),"shirt-vote-settings":()=>Lt(),"shirt-vote-dashboard":()=>St(),"my-team-workspace":()=>Et(),"student-qr-print":()=>{const e=window._pendingQRClassId||null;window._pendingQRClassId=null,f(()=>import("./teacher-views-classes-s_CI5F_w.js").then(s=>s.t),__vite__mapDeps([12,1,2,3,7,4,5,6,13,8,9,10,11,14,15,16])).then(s=>s.renderStudentQRPrint(t,e,{isQrManager:ne}))},"student-leave-scanner":()=>{f(()=>import("./teacher-views-leave-scanner.js_v_10.18-DZbO8ZZf.js"),__vite__mapDeps([31,2,3,18,15,1,8])).then(e=>e.renderStudentLeaveScanner(t))},"smart-classroom":()=>{const e=window._pendingSmartClassroomId;window._pendingSmartClassroomId=null,f(()=>import("./teacher-views-smart-classroom-BNyIlVzh.js"),__vite__mapDeps([32,1,2,3,28,11,14,15,8,33,34,35,12,7,4,5,6,13,9,10,16,36,37,20,21,38,39,22,40,41])).then(s=>s.renderSmartClassroom(t,e))},"schedule-builder":()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderScheduleBuilder(t,()=>M("overview"))),profile:()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderProfile(t,H,Kt)),setup:()=>f(()=>import("./teacher-views-BzTMalao.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(e=>e.renderProfileSetup(t,H,Zt))};let Z="overview";async function M(e){if(!(t!=null&&t.id))try{const{data:{user:n}}=await q.auth.getUser();n!=null&&n.id&&(t=await J(n.id).catch(()=>null)??t)}catch{}if(document.body.classList.remove("sc-fullscreen"),window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),typeof window._cleanupLeaveScanner=="function")try{window._cleanupLeaveScanner()}catch{}if(typeof window._cleanupPrayerRoomMonitor=="function")try{window._cleanupPrayerRoomMonitor()}catch{}if(typeof window._cleanupAdvisorShirtPaymentScanner=="function")try{window._cleanupAdvisorShirtPaymentScanner()}catch{}if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}const s=Ge[e];s&&(Z=e,s()),ie(e)}window._navTo=M;window._goBack=()=>M("my-courses");window._refreshCurrentView=()=>M(Z);window.addEventListener("pp5:open-sports-shirt-summary",()=>M("shirt-summary"));window.addEventListener("pp5:open-shirt-vote-settings",()=>M("shirt-vote-settings"));window.addEventListener("pp5:open-shirt-vote-dashboard",()=>M("shirt-vote-dashboard"));const I=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),z=(e,s)=>{const n=parseInt(e,10);return Number.isFinite(n)&&n>0?n:s};function Gt(e){return[1,2,3,4].map(s=>(e[`donationGeminiKey${s}`]??"").trim()).filter(Boolean)}async function Jt(e,s,{maxTokens:n=1024}={}){var l,r,i,p,c;const{data:o,error:a}=await q.functions.invoke("gemini-proxy",{body:{keyType:"donation",prompt:s,maxTokens:n}});if(a)throw new Error(a.message??"Edge Function error");if(o!=null&&o.error)throw new Error(o.error.message??"Gemini error");return{text:((c=(p=(i=(r=(l=o==null?void 0:o.candidates)==null?void 0:l[0])==null?void 0:r.content)==null?void 0:i.parts)==null?void 0:p[0])==null?void 0:c.text)??"",keyIndex:1}}window._callDonationAI=Jt;window._getDonationGeminiKeys=Gt;const ke=e=>{const s=String(e.donationSpecialFeatures??"").trim();return(s?s.split(`
`).map(a=>a.trim()).filter(Boolean).map(a=>{const d=a.split("|").map(p=>p.trim()),l=d[0]||"✨",r=d[1]||d[0]||a,i=parseInt(d[2])||1;return{icon:l,text:r,minTier:i}}):[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1]].map(([a,d,l])=>({icon:a,text:d,minTier:l}))).filter(a=>a.text)},Je=(e,s,n)=>{var a;if(!n)return 0;const o=(a=[...s].map((d,l)=>({t:d,i:l})).reverse().find(({t:d})=>n>=d.amount))==null?void 0:a.i;return o!==void 0?o+1:0},pe=(e,s,n)=>{const o=String(e.donationStickerTiers??"").trim();return(o?o.split(`
`).map(r=>r.trim()).filter(Boolean).map(r=>{const[i,p,c,m,x]=r.split("|").map(b=>b.trim());return{amount:z(i,0),sticker:p||"🏅",title:c||`ผู้สนับสนุน ${i||""} บาท`,note:m||"ขอบคุณที่ช่วยสนับสนุนการพัฒนาระบบครับ",color:x||""}}):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([r,i,p,c,m])=>({amount:r,sticker:i,title:p,note:c,color:m}))).filter(r=>r.amount>0).sort((r,i)=>r.amount-i.amount).map((r,i)=>{const p=e[`donationStickerImg${i+1}`]??"";return p&&/^https?:\/\//.test(p)?{...r,sticker:p}:r})},qe=e=>{if(!e)return"";const s=String(e.sticker??"");return`
    <div class="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-3 shadow-sm">
      ${/^https?:\/\//.test(s)?`<img src="${I(s)}" class="w-14 h-14 object-contain drop-shadow-md" />`:`<div class="w-14 h-14 flex items-center justify-center text-3xl">${I(s||"🏅")}</div>`}
      <div class="min-w-0">
        <p class="text-sm font-bold text-amber-900">${I(e.title)}</p>
        <p class="text-[11px] text-amber-700 leading-relaxed">${I(e.note)}</p>
      </div>
    </div>`},Wt=e=>`https://docs.google.com/spreadsheets/d/${encodeURIComponent(e)}/copy`;async function We(){var l;const e=await V().catch(()=>({})),s={start:[{key:"สามัญ",label:"📚 สามัญ"},{key:"ศาสนา",label:"🕌 ศาสนา"}],สามัญ:Ie.filter(r=>r.category==="สามัญ"),ศาสนา:Ie.filter(r=>r.category==="ศาสนา")},n=["start"];(l=document.getElementById("standalone-copy-modal"))==null||l.remove();const o=document.createElement("div");o.id="standalone-copy-modal",o.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`<div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div>
        <h3 class="text-xl font-bold text-pink-500 leading-tight">สร้างสำเนาไฟล์ ปพ5Online</h3>
        <p class="text-xs text-gray-400 mt-1">สำหรับใช้งานไฟล์ Google Sheet แบบเดิม</p>
      </div>
      <button id="copy-flow-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div id="copy-flow-app"></div>
  </div>`,document.body.appendChild(o);const a=o.querySelector("#copy-flow-app"),d=()=>{var p;const r=n[n.length-1],i=s[r]||[];a.innerHTML=`
      <div class="text-center text-lg text-gray-600 mb-4">${n.length===1?"เลือกหมวดหมู่":"เลือกกลุ่ม/ประเภท"}</div>
      <div class="flex flex-col gap-3">
        ${i.map(c=>{const m=c.defaultId?qt(e,c.key):"";return m?`
            <a href="${Wt(m)}" target="_blank" rel="noopener noreferrer"
              class="w-full ${c.color||"bg-gradient-to-r from-pink-400 to-green-400"} text-white font-semibold py-3 rounded-2xl shadow-md hover:scale-[1.02] transition-all text-center block text-lg">
              🔗 เปิดไฟล์: ${I(c.label)}
            </a>`:`
            <button data-next="${I(c.key)}"
              class="copy-flow-next w-full bg-pink-200 hover:bg-pink-300 text-pink-700 font-medium py-3 rounded-2xl shadow text-lg transition-all">
              ${I(c.label)}
            </button>`}).join("")}
      </div>
      ${n.length>1?'<button id="copy-flow-back" class="mt-6 text-sm text-gray-400 underline hover:text-pink-400 transition-all">⬅️ ย้อนกลับ</button>':""}`,a.querySelectorAll(".copy-flow-next").forEach(c=>{c.addEventListener("click",()=>{n.push(c.dataset.next),d()})}),(p=a.querySelector("#copy-flow-back"))==null||p.addEventListener("click",()=>{n.length>1&&n.pop(),d()})};o.querySelector("#copy-flow-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),d()}window._openStandaloneCopyFlow=We;window._showQuotaFromOverview=()=>{Promise.all([ee((t==null?void 0:t.id)??null).catch(()=>[]),V().catch(()=>({}))]).then(([e,s])=>X(e.length,null,s)).catch(()=>X(0,null,{}))};window._openWenDuty=e=>{var n;(n=document.getElementById("wen-duty-modal"))==null||n.remove();const s=document.createElement("div");s.id="wen-duty-modal",s.className="fixed inset-0 z-[300] bg-white flex flex-col",s.innerHTML=`
    <div class="flex items-center justify-between px-4 py-2 bg-amber-600 text-white shadow flex-shrink-0">
      <span class="font-bold text-sm flex items-center gap-2">🛡️ ระบบเวรประจำวัน</span>
      <button id="wen-duty-close" class="text-white text-2xl leading-none px-2 hover:opacity-75">×</button>
    </div>
    <iframe src="${Nt(e)}" class="flex-1 w-full border-0"></iframe>`,document.body.appendChild(s),s.querySelector("#wen-duty-close").addEventListener("click",()=>s.remove())};window._openLifeSkillScore=e=>M("life-skill-score");window._openReligionScore=e=>M("prayer-score");window._openReligionPrayerMonitor=e=>{window._pendingPrayerMonitorRoom=e||null,M("prayer-monitor")};window._openReadingScore=()=>{window._pendingReadingRoom=null,M("reading-score")};window._openReadingScoreRoom=e=>{window._pendingReadingRoom=e,M("reading-score")};window._openReadingScorePicker=e=>{var o;let s=[];try{s=JSON.parse(e.replace(/&quot;/g,'"'))}catch{s=[]}if(!s.length){L("ยังไม่มีห้องเรียน — ลงทะเบียนห้องก่อนบันทึกคะแนน","warning");return}(o=document.getElementById("rsp-modal"))==null||o.remove();const n=document.createElement("div");n.id="rsp-modal",n.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800">📖 เลือกห้องบันทึกคะแนน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อ่านคิดวิเคราะห์และเขียน</p>
        </div>
        <button id="rsp-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
      </div>
      <div class="p-4 grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
        ${s.map(a=>`
        <button class="rsp-room px-3 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-800
                       text-sm font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition text-center"
          data-room="${a}">${a}</button>`).join("")}
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#rsp-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",a=>{a.target===n&&n.remove()}),n.querySelectorAll(".rsp-room").forEach(a=>{a.addEventListener("click",()=>{n.remove(),window._openReadingScoreRoom(a.dataset.room)})})};let te=null,K=null;async function xe(){if(t)try{const e=await ht(t.id),s=document.getElementById("badge-requests");if(s&&(e>0?(s.textContent=e>99?"99+":e,s.classList.remove("hidden")):s.classList.add("hidden")),te!==null&&e>te){const n=e-te;L(`🔔 มีคำร้องนักเรียนใหม่ ${n} รายการ`,"info")}te=e}catch{}}function Ye(e){var l,r,i;const s=Math.max(0,Number(e)||0),n=s>99?"99+":String(s),o=document.getElementById("menu-regrade");(l=o==null?void 0:o.querySelector("[data-regrade-menu-badge]"))==null||l.remove(),o&&s>0&&o.insertAdjacentHTML("beforeend",`<span data-regrade-menu-badge class="ml-auto min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold inline-flex items-center justify-center">${n}</span>`);const a=document.getElementById("teacher-regrade-overview-tile");(r=a==null?void 0:a.querySelector("[data-icon-tile-badge]"))==null||r.remove(),a&&s>0&&a.insertAdjacentHTML("afterbegin",`<span data-icon-tile-badge class="absolute -top-1 right-1 z-10 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold flex items-center justify-center shadow">${n}</span>`);const d=(i=window._teacherOverviewSystems)==null?void 0:i.find(p=>p.key==="regrade");d&&(d.badge=s)}async function fe(){if(t)try{const{count:e,error:s}=await q.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",t.id).eq("status","จำนงแล้ว");if(s)throw s;const n=Number(e)||0;Ye(n),K!==null&&n>K&&L(`🔔 มีคำร้องแก้ค้างเก่าใหม่ ${n-K} รายการ`,"info"),K=n}catch{}}function Yt(){setInterval(()=>{document.visibilityState==="visible"&&(xe(),fe())},3e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(xe(),fe())})}async function re(){var w,C,T,B,D;const e=H.some(P=>P.category==="สามัญ"),s=(t==null?void 0:t.dept)==="THAI";let n=H.some(P=>P.category==="ศาสนา");const o=(P,N)=>Promise.resolve(P).catch(()=>N),[a,d,l,r,i,p,c,m,x]=await Promise.all([o(V(),{}),t?o(q.from("profiles").select("role").eq("id",t.profile_id).maybeSingle(),{data:null}):Promise.resolve({data:null}),o(q.rpc("get_terangganu_access"),{data:null}),o(q.from("sports_team_memberships").select("id,role,permissions").eq("profile_id",t==null?void 0:t.profile_id).eq("is_active",!0),{data:[]}),o(q.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),{data:null}),o(q.from("qr_reissue_managers").select("profile_id").eq("profile_id",t==null?void 0:t.profile_id).maybeSingle(),{data:null}),o(zt(),{}),t?o(q.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",t.id).eq("status","จำนงแล้ว"),{count:0}):Promise.resolve({count:0}),o(q.from("sports_score_evaluators").select("id").eq("profile_id",t==null?void 0:t.profile_id).eq("is_active",!0),{data:[]})]);if(!n&&t){const P=(a.prayerScannerTeachers||"").split(/[\s,]+/).map(ot=>ot.trim()).filter(Boolean),N=(d==null?void 0:d.data)??null;(P.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(N==null?void 0:N.role)==="admin")&&(n=!0)}const b=(P,N)=>{const U=document.getElementById(P);U&&(U.classList.toggle("hidden",!N),U.classList.toggle("flex",N))},h=(P,N)=>{var U;(U=document.getElementById(P))==null||U.classList.toggle("hidden",!N)},g=H.length>0,E=(w=t==null?void 0:t.positions)!=null&&w.length?t.positions:t!=null&&t.position?[t.position]:[],j=E.includes("executive")||F,v=E.includes("executive");b("menu-life-skill",e),b("menu-reading",s),b("menu-prayer",n),b("menu-advisor-students",g),b("menu-council",a.council_visible_to_all!=="false"||F||j),b("menu-my-courses",!v),b("menu-my-classes",!v),b("menu-dashboard",!v),h("daily-work-section",!v),h("sem-work-section",!v);const $=l==null?void 0:l.data;b("menu-terangganu",($==null?void 0:$.is_manager)===!0||($==null?void 0:$.teacher_participant)===!0),b("menu-regrade",((C=c.visibility)==null?void 0:C.teacher_menu)===!0||F);const u=Number(m==null?void 0:m.count)||0;Ye(u);const S=(r==null?void 0:r.data)||[];b("menu-my-team",S.length>0);const k=O.menu_sports_admin||E.includes("house_color_admin")||(t==null?void 0:t.staff_type)==="แอดมิน"||(t==null?void 0:t.position)==="admin",A=k||S.some(P=>{var N;return P.role==="lead_teacher"||((N=P.permissions)==null?void 0:N.shirt_summary)===!0});b("menu-shirt-summary",!!A),b("menu-sports-fund-admin",!!k),b("menu-sports-overview-admin",!!k);const y=k||((T=x==null?void 0:x.data)==null?void 0:T.length)>0;b("menu-sports-evaluation",!!y);let _=!1;try{const P=((B=i==null?void 0:i.data)==null?void 0:B.id)||"00000000-0000-0000-0000-000000000001",{data:N}=await q.from("sports_shirt_vote_managers").select("id").eq("event_id",P).eq("profile_id",t==null?void 0:t.profile_id).maybeSingle();_=!!N}catch{_=!1}b("menu-shirt-vote-dashboard",!!(k||_)),ne=!!(p!=null&&p.data),b("menu-qr-reissue-requests",ne);const R=Q.enabled!==!1&&Q.teacher_menu!==!1;window._teacherOverviewSystems=[{key:"council",show:a.council_visible_to_all!=="false"||F||j,emoji:"🏛️",label:"สภา<br>นักเรียน",href:"council.html"},{key:"terangganu",show:($==null?void 0:$.is_manager)===!0||($==null?void 0:$.teacher_participant)===!0,emoji:"⚜️",label:"ค่าย<br>TERANGGANU",href:"terangganu.html"},{key:"regrade",id:"teacher-regrade-overview-tile",show:((D=c.visibility)==null?void 0:D.teacher_menu)===!0||F,emoji:"📋",label:"แก้ค้าง<br>เก่า",href:"regrade.html",badge:u},{key:"sports",show:R,emoji:"🏆",label:"กีฬาสี",nav:"sports"},{key:"certificates",show:!0,emoji:"🏅",label:"เกียรติ<br>บัตร",nav:"certificates"},{key:"advisor-students",show:g,emoji:"👥",label:"นักเรียน<br>ที่ปรึกษา",nav:"advisor-students"},{key:"my-team",show:S.length>0,emoji:"🛡️",label:"จัดการ<br>สีของฉัน",nav:"my-team-workspace"},{key:"shirt-summary",show:!!A,emoji:"📦",label:"สรุปยอด<br>เสื้อกีฬาสี",nav:"shirt-summary"},{key:"sports-fund",show:!!k,emoji:"💰",label:"บัญชีเงิน<br>กีฬาสี",nav:"sports-fund-admin"},{key:"sports-overview",show:!!k,emoji:"📊",label:"ภาพรวม<br>กีฬาสี",nav:"sports-overview-admin"},{key:"sports-evaluation",show:!!y,emoji:"🧑‍⚖️",label:"ประเมิน<br>กีฬาสี",nav:"sports-evaluation"},{key:"shirt-vote",show:!!(k||_),emoji:"🗳️",label:"ผลโหวต<br>แบบเสื้อ",nav:"shirt-vote-dashboard"},{key:"qr-print",show:ne,emoji:"🎫",label:"พิมพ์/คำขอ<br>QR",nav:"student-qr-print"},{key:"prayer-score",show:n,emoji:"🕌",label:"คะแนน<br>ศาสนา",nav:"prayer-score"}],K=u}async function Kt(e){t=await J(e),H=t?await ae(t.id).catch(()=>[]):[],await _e(e),await re(),M("profile")}async function Zt(e){t=await J(e),H=t?await ae(t.id).catch(()=>[]):[],await _e(e),await re(),M("schedule-builder")}window._openCourseForm=async()=>{const{renderCourseForm:e}=await f(async()=>{const{renderCourseForm:s}=await import("./teacher-views-BzTMalao.js");return{renderCourseForm:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));e(t,async(s,n=[])=>{await De(s,n)})};window._editCourse=async e=>{const n=(t?await ce(t.id).catch(()=>[]):await le().catch(()=>[])).find(a=>a.id===e);if(!n){L("ไม่พบข้อมูลคอร์ส","error");return}const{renderCourseForm:o}=await f(async()=>{const{renderCourseForm:a}=await import("./teacher-views-BzTMalao.js");return{renderCourseForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));o(t,async(a,d=[])=>{await dt(e,a,d)},n)};window._copyCourse=async e=>{const n=(t?await ce(t.id).catch(()=>[]):await le().catch(()=>[])).find(a=>a.id===e);if(!n){L("ไม่พบข้อมูลคอร์สต้นฉบับ","error");return}const{renderCourseForm:o}=await f(async()=>{const{renderCourseForm:a}=await import("./teacher-views-BzTMalao.js");return{renderCourseForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));o(t,async(a,d=[])=>{const l=await De(a,d);try{const r=await lt(e);if(r){const{subject_id:i,updated_at:p,updated_by:c,...m}=r;await ct(l.id,m)}}catch(r){L("คัดลอกคำอธิบายรายวิชาไม่สำเร็จ (สร้างคอร์สแล้ว แก้ไขคำอธิบายเพิ่มเองได้): "+(r.message??""),"warning")}},n,{cloneFrom:e})};window._deleteCourse=(e,s)=>{var o;(o=document.getElementById("del-course-modal"))==null||o.remove();const n=document.createElement("div");n.id="del-course-modal",n.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-fade">
      <div class="text-center mb-5">
        <div class="text-4xl mb-3">🗑️</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ลบคอร์สวิชา</h3>
        <p class="text-sm text-gray-500">"${s}"</p>
        <p class="text-xs text-red-500 mt-2">⚠️ ห้องเรียนทั้งหมดในคอร์สนี้จะถูกลบด้วย</p>
      </div>
      <div class="flex gap-3">
        <button id="del-course-cancel"
          class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">
          ยกเลิก
        </button>
        <button id="del-course-confirm"
          class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600">
          ลบ
        </button>
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#del-course-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#del-course-confirm").addEventListener("click",async()=>{const a=n.querySelector("#del-course-confirm");a.disabled=!0,a.textContent="กำลังลบ...";try{await pt(e),n.remove(),L(`ลบ "${s}" แล้ว`,"success"),M("my-courses")}catch(d){n.remove(),L("ลบไม่สำเร็จ: "+(d.message??""),"error")}})};window._openRegisterClass=async e=>{const n=(t?await ce(t.id).catch(()=>[]):await le().catch(()=>[])).find(x=>x.id===e);if(!n){L("ไม่พบข้อมูลคอร์ส","error");return}const o=t==null?void 0:t.teachers_quota,[a,d,l]=await Promise.all([ee((t==null?void 0:t.id)??null).catch(()=>[]),V().catch(()=>({})),mt((t==null?void 0:t.id)??null).catch(()=>({hasSemester:!1,paidRoomCount:0}))]),r=parseInt(d.freeClassQuota??2),i=(o==null?void 0:o.is_paid)&&!(o!=null&&o.package_type)&&!l.hasSemester&&!l.paidRoomCount,c=l.hasSemester||(o==null?void 0:o.package_type)==="semester"||i?1/0:r+l.paidRoomCount;if(a.length>=c){X(a.length,n,d);return}const{renderClassForm:m}=await f(async()=>{const{renderClassForm:x}=await import("./teacher-views-BzTMalao.js");return{renderClassForm:x}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));m(t,n)};window._openCourseDocPage2=async e=>{const n=(t?await ce(t.id).catch(()=>[]):await le().catch(()=>[])).find(a=>a.id===e);if(!n){L("ไม่พบข้อมูลคอร์ส","error");return}const{openCourseDocPage2Modal:o}=await f(async()=>{const{openCourseDocPage2Modal:a}=await import("./teacher-views-BzTMalao.js");return{openCourseDocPage2Modal:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));await o(t,n)};function X(e,s,n={}){var a;if(n.quotaMode==="school_sponsored"){Ke(e,s,n);return}(a=document.getElementById("quota-popup"))==null||a.remove();const o=document.createElement("div");o.id="quota-popup",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <div class="flex items-center gap-3 mb-1">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">🔒</div>
          <div>
            <h3 class="font-bold text-gray-800 leading-tight">ครบโควตาฟรีแล้ว</h3>
            <p class="text-xs text-gray-400">ระบบ ปพ.5 ออนไลน์</p>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="overflow-auto flex-1 px-5 py-4 space-y-4">

        <!-- สถานะปัจจุบัน -->
        ${(()=>{const d=parseInt(n.freeClassQuota??2),l=parseInt(n.pricePerClass??49),r=parseInt(n.priceSemester??299),i=n.pkgPerClassDesc??"เพิ่มได้ 1 ห้องเรียนต่อการชำระเงิน",p=n.pkgSemesterDesc??"ทุกวิชา ทุกห้อง ไม่จำกัด",c=d+1;return`
        <div class="bg-gray-50 rounded-xl p-3.5 text-sm">
          <p class="text-gray-600">คุณสร้างห้องเรียนไปแล้ว
            <span class="font-bold text-indigo-600">${e} ห้อง</span>
            จาก <span class="font-bold">${d} ห้องฟรี</span>
          </p>
          <p class="text-gray-400 text-xs mt-1">
            การสร้างห้องเรียนตั้งแต่ห้องที่ ${c} เป็นต้นไป
            จำเป็นต้องเลือกแพ็กเกจด้านล่าง
          </p>
        </div>

        <!-- แพ็กเกจ 1 -->
        <label class="block cursor-pointer">
          <input type="radio" name="pkg" value="per_subject" class="sr-only peer" />
          <div class="border-2 border-gray-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-50
                      rounded-xl p-4 transition-all">
            <div class="flex items-start justify-between mb-2">
              <div>
                <p class="font-bold text-gray-800">รายห้อง</p>
                <p class="text-xs text-gray-400 mt-0.5">${i}</p>
              </div>
              <div class="text-right flex-shrink-0 ml-3">
                <p class="text-2xl font-extrabold text-indigo-600">${l}<span class="text-sm font-normal text-gray-400"> บ.</span></p>
                <p class="text-[10px] text-gray-400">ต่อวิชา / เทอม</p>
              </div>
            </div>
            <div class="space-y-1 text-xs text-gray-500">
              <p>✅ เพิ่ม 1 ห้องเรียนทันที</p>
              <p>✅ เหมาะถ้าต้องการเพิ่มเพียง 1-2 ห้อง</p>
            </div>
          </div>
        </label>

        <!-- แพ็กเกจ 2 (แนะนำ) -->
        <label class="block cursor-pointer">
          <input type="radio" name="pkg" value="semester" class="sr-only peer" />
          <div class="border-2 border-gray-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50
                      rounded-xl p-4 transition-all relative">
            <div class="absolute -top-2.5 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              แนะนำ ⭐
            </div>
            <div class="flex items-start justify-between mb-2">
              <div>
                <p class="font-bold text-gray-800">เหมาทั้งเทอม</p>
                <p class="text-xs text-gray-400 mt-0.5">${p}</p>
              </div>
              <div class="text-right flex-shrink-0 ml-3">
                <p class="text-2xl font-extrabold text-emerald-600">${r}<span class="text-sm font-normal text-gray-400"> บ.</span></p>
                <p class="text-[10px] text-gray-400">ต่อเทอม</p>
              </div>
            </div>
            <div class="space-y-1 text-xs text-gray-500">
              <p>✅ สร้างห้องเรียนได้ไม่จำกัดทุกวิชา</p>
              <p>✅ ประหยัดกว่าถ้าสอนมากกว่า 6 วิชา</p>
              <p>✅ ใช้ได้ตลอดภาคเรียนนี้</p>
            </div>
          </div>
        </label>`})()}

        <p class="text-[11px] text-gray-400 text-center">
          💡 ชำระเงินผ่าน PromptPay / โอนเงิน แล้วอัปโหลดสลิป<br/>
          แอดมินจะอนุมัติภายใน 24 ชั่วโมง
        </p>
        <button id="qp-copy-file"
          class="w-full py-2.5 rounded-xl border border-amber-200 bg-white text-amber-700 text-sm font-semibold hover:bg-amber-50 transition">
          🔗 ทำสำเนาไฟล์ ปพ.5 ใช้งานฟรี
        </button>
      </div>

      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="qp-cancel"
          class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 font-medium">
          ยกเลิก
        </button>
        <button id="qp-next"
          class="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
          ถัดไป →
        </button>
      </div>
    </div>`,document.body.appendChild(o),o.querySelector("#qp-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#qp-copy-file").addEventListener("click",()=>{o.remove(),We()}),o.querySelector("#qp-next").addEventListener("click",()=>{var l;const d=(l=o.querySelector('input[name="pkg"]:checked'))==null?void 0:l.value;if(!d){alert("กรุณาเลือกแพ็กเกจก่อนครับ");return}o.remove(),d==="per_subject"?et(s,n):tt(d,s,1,n)})}function Ke(e,s,n={}){var a;(a=document.getElementById("school-sponsored-popup"))==null||a.remove();const o=document.createElement("div");o.id="school-sponsored-popup",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-4 pb-4 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">🎉</div>
          <div>
            <h3 class="font-bold text-gray-800 leading-tight">${n.sponsoredHeaderTitle||"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"}</h3>
            <p class="text-xs text-gray-400">ระบบ ปพ.5 ออนไลน์</p>
          </div>
        </div>
      </div>
      <div class="px-5 py-4 space-y-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
          <p class="text-sm font-semibold text-emerald-800">${n.sponsoredBoxTitle||"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"}</p>
          <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
            ${n.sponsoredBoxBody||"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา — เป็นของขวัญจากโรงเรียนให้คุณครูทุกท่านครับ"}
          </p>
        </div>

        <button id="sp-donate"
          class="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-bold text-sm
                 shadow-lg shadow-amber-200/60 transition-all flex items-center justify-center gap-2">
          ${n.sponsoredDonateBtn||"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"}
          <span class="font-normal text-xs opacity-90">${n.sponsoredDonateSub||"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"}</span>
        </button>

        <button id="sp-access"
          class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm
                 shadow-lg shadow-emerald-200/60 transition-all flex items-center justify-center gap-2">
          ${n.sponsoredAccessBtn||"✨ รับของขวัญจากโรงเรียนเลย"}
        </button>

        <p class="text-center text-[11px] text-gray-400 pb-1">${n.sponsoredFooter||"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}</p>
      </div>
    </div>`,document.body.appendChild(o),o.querySelector("#sp-donate").addEventListener("click",()=>{o.remove(),W(s,n)}),o.querySelector("#sp-access").addEventListener("click",async()=>{const d=o.querySelector("#sp-access");d.disabled=!0,d.textContent="⏳ กำลังตรวจสอบ...";try{const r=(await ut(t==null?void 0:t.id).catch(()=>[])).find(i=>i.package_type==="school_sponsored"&&(i.status==="pending"||i.status==="approved"));if(r){L(r.status==="approved"?"คุณได้รับสิทธิ์แล้วครับ ✅":"ส่งคำขอไปแล้ว รอแอดมินอนุมัติครับ ⏳","info"),o.remove();return}await ye({teacher_id:t==null?void 0:t.id,package_type:"school_sponsored",amount:0,status:"pending"}),L("ส่งคำขอแล้ว ✅ แอดมินจะอนุมัติให้เร็วๆ นี้ครับ","success"),o.remove()}catch(l){L("เกิดข้อผิดพลาด: "+(l.message??""),"error"),d.disabled=!1,d.textContent="🎓 รับสิทธิ์ไม่จำกัดเลย"}})}async function W(e,s={}){var A,y,_,R;(A=document.getElementById("donate-modal"))==null||A.remove();const n=z(s.donationMinAmount,49),o=z(s.donationAmountStep,50),a=pe(s);let d=0,l=!1,r=null;if(t!=null&&t.id)try{const w=await Ne(t.id);if(w.some(T=>T.package_type==="donation"&&T.status==="pending")){L("คุณครูส่งหลักฐานรอการอนุมัติอยู่แล้วครับ — กรุณารอแอดมินตรวจสอบก่อนนะครับ","warning");return}if(d=w.filter(T=>T.package_type==="donation"&&T.status==="approved").reduce((T,B)=>T+(B.amount??0),0),d>0){const T=((y=a[a.length-1])==null?void 0:y.amount)??1/0;if(d>=T){L("คุณครูสนับสนุนระดับสูงสุดแล้วครับ ขอบคุณมากๆ นะครับ 🙏👑","success");return}l=!0,r=((_=a.find(B=>B.amount>d))==null?void 0:_.amount)??null}}catch{}const i=document.createElement("div");i.id="donate-modal",i.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4";const p=s.paymentPromptpay??"",c=Math.min(z(s.donationQuickCount,4),8),m=l?Math.max(n,(r??n)-d):n,x=Array.from({length:c},(w,C)=>m+C*o),b=ke(s),h=a[0],g=w=>b.map(C=>w>=(C.minTier??1)?`<div class="flex gap-2 text-amber-900"><span>${I(C.icon)}</span><span>${I(C.text)}</span></div>`:`<div class="flex gap-2 text-gray-300 opacity-70"><span>🔒</span><span class="line-through">${I(C.text)}<span class="ml-1 text-[9px] no-underline not-italic text-gray-400">ระดับ ${C.minTier}+</span></span></div>`).join("");i.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]">
      <div class="flex justify-center pt-3 pb-1 sm:hidden">
        <div class="w-10 h-1 rounded-full bg-gray-200"></div>
      </div>
      <div class="px-5 pt-4 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="donate-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">${l?"⭐ อัปเกรดระดับผู้สนับสนุน":"☕ สนับสนุนผู้พัฒนา"}</h3>
          <p class="text-xs text-gray-400">${l?"สนับสนุนเพิ่มเพื่ออัปเกรดระดับครับ 🙏":"ขอบคุณมากเลยครับ 🙏"}</p>
        </div>
      </div>
      <div class="px-5 py-4 space-y-4 overflow-auto flex-1">
        <p class="text-sm text-gray-600 text-center leading-relaxed">
          ${l?`คุณครูสนับสนุนสะสมแล้ว ${d} บาท${r?` — อีก ${Math.max(0,r-d)} บาทจะครบ ${r} บาทสำหรับระดับถัดไป`:""}<br/><span class="text-xs text-gray-400">ยอดที่สนับสนุนเพิ่มจะถูกรวมกับยอดเดิมโดยอัตโนมัติครับ</span>`:`สนับสนุนขั้นต่ำ ${n} บาท เพื่อรับสิทธิ์ผู้สนับสนุน<br/><span class="text-xs text-gray-400">ระบบหลักใช้งานได้ไม่จำกัดอยู่แล้ว สิทธิ์นี้เป็นฟีเจอร์พิเศษเพิ่มเติมครับ</span>`}
        </p>
        <!-- Feature list: อัปเดตตาม amount -->
        <div class="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
          <p class="text-xs font-bold text-amber-800 mb-2">ฟีเจอร์พิเศษสำหรับคุณครูที่โดเนท</p>
          <div id="donate-feature-list" class="grid grid-cols-1 gap-1.5 text-[11px] leading-snug">
            ${g(1)}
          </div>
        </div>
        <!-- Sticker preview -->
        <div id="donate-sticker-preview">
          ${qe(h)}
        </div>
        <!-- Amount input -->
        <div class="flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 focus-within:border-amber-400 transition">
          <span class="text-2xl font-bold text-amber-500">฿</span>
          <input id="donate-amount" type="number" min="${n}" step="${o}" value="${m}" placeholder="${m}"
            class="flex-1 bg-transparent text-3xl font-extrabold text-amber-700 outline-none w-full" />
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${x.map(w=>`<button class="donate-quick flex-1 py-2 rounded-xl border-2 border-amber-200 text-amber-700 text-sm font-bold hover:bg-amber-50 transition">${w}</button>`).join("")}
        </div>
        <p class="text-[11px] text-gray-400 text-center leading-relaxed">
          ยอดที่สูงขึ้นจะปลดล็อกฟีเจอร์เพิ่มเติม และอัปเกรดระดับตราผู้สนับสนุนครับ
        </p>
        <div id="donate-qr-area" class="hidden flex-col items-center gap-3 py-2">
          <img id="donate-qr-img" class="w-56 h-56 rounded-2xl shadow-md" />
          <p class="text-xs text-gray-500 text-center">สแกนด้วย app ธนาคาร หรือ PromptPay</p>
        </div>
        <!-- อัปโหลดสลิป (แสดงหลัง QR) -->
        <div id="donate-slip-area" class="hidden space-y-2">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">อัปโหลดสลิปการโอนเงิน <span class="text-red-400">*</span></p>
          <label id="donate-slip-label"
            class="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-amber-200
                   rounded-xl py-5 cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition">
            <span class="text-3xl">📎</span>
            <span class="text-sm text-gray-500">แตะเพื่อเลือกรูปสลิป</span>
            <span class="text-xs text-gray-400">รองรับ JPG, PNG, PDF</span>
            <input type="file" id="donate-slip-file" accept="image/*,application/pdf" class="sr-only" />
          </label>
          <div id="donate-slip-preview" class="hidden relative">
            <img id="donate-slip-img" class="w-full rounded-xl object-cover max-h-48 border border-gray-100" />
            <p id="donate-slip-name" class="text-xs text-gray-500 mt-1 text-center truncate"></p>
            <button id="donate-slip-remove" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">✕</button>
          </div>
          <p id="donate-slip-err" class="hidden text-xs text-red-500 text-center">กรุณาอัปโหลดสลิปก่อนส่งนะครับ</p>
        </div>
        <button id="donate-gen-qr"
          class="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-white font-bold text-sm shadow-md shadow-amber-200/50 transition">
          สร้าง QR Code →
        </button>
        <button id="donate-confirm"
          class="hidden w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-200/50 transition">
          ✅ ส่งหลักฐานการโอน
        </button>
      </div>
    </div>`,document.body.appendChild(i);const E=i.querySelector("#donate-amount"),j=i.querySelector("#donate-sticker-preview"),v=i.querySelector("#donate-feature-list"),$=()=>{const w=parseFloat(E.value)||0,C=[...a].reverse().find(B=>w>=B.amount)||a[0],T=a.indexOf(C)+1;j&&(j.innerHTML=qe(C)),v&&(v.innerHTML=g(T))};i.querySelectorAll(".donate-quick").forEach(w=>{w.addEventListener("click",()=>{E.value=w.textContent.trim(),$()})}),E.addEventListener("input",$),i.querySelector("#donate-back").addEventListener("click",()=>{i.remove(),Ke(0,e,s)}),i.querySelector("#donate-gen-qr").addEventListener("click",async()=>{const w=parseFloat(E.value);if(!w||w<n){L(`กรุณาระบุยอดโดเนทขั้นต่ำ ${n} บาทครับ`,"error");return}if(!p){L("แอดมินยังไม่ได้ตั้งค่าเบอร์ PromptPay","error");return}try{const C=await Oe(p,w);i.querySelector("#donate-qr-img").src=C,i.querySelector("#donate-qr-area").classList.remove("hidden"),i.querySelector("#donate-qr-area").classList.add("flex"),i.querySelector("#donate-slip-area").classList.remove("hidden"),i.querySelector("#donate-confirm").classList.remove("hidden"),i.querySelector("#donate-gen-qr").classList.add("hidden")}catch(C){L("สร้าง QR ไม่สำเร็จ: "+(C.message??""),"error")}});let u=null;const S=i.querySelector("#donate-slip-file"),k=i.querySelector("#donate-slip-preview");S==null||S.addEventListener("change",w=>{u=w.target.files[0],u&&(i.querySelector("#donate-slip-name").textContent=u.name,u.type.startsWith("image/")?(i.querySelector("#donate-slip-img").src=URL.createObjectURL(u),i.querySelector("#donate-slip-img").classList.remove("hidden")):i.querySelector("#donate-slip-img").classList.add("hidden"),k.classList.remove("hidden"),i.querySelector("#donate-slip-label").classList.add("hidden"),i.querySelector("#donate-slip-err").classList.add("hidden"))}),(R=i.querySelector("#donate-slip-remove"))==null||R.addEventListener("click",()=>{u=null,S.value="",k.classList.add("hidden"),i.querySelector("#donate-slip-label").classList.remove("hidden")}),i.querySelector("#donate-confirm").addEventListener("click",async()=>{const w=parseFloat(E.value);if(!u){i.querySelector("#donate-slip-err").classList.remove("hidden"),i.querySelector("#donate-slip-area").scrollIntoView({behavior:"smooth",block:"center"});return}const C=i.querySelector("#donate-confirm");C.disabled=!0,C.textContent="⏳ กำลังส่งข้อมูล...";try{const T=await ye({teacher_id:t==null?void 0:t.id,package_type:"donation",amount:w,status:"pending"}),B=await Me(u,T.id);await q.from("payment_requests").update({slip_url:B}).eq("id",T.id),L("ส่งหลักฐานสำเร็จ! 🙏 แอดมินจะตรวจสอบและส่งการ์ดขอบคุณให้ครับ","success"),i.remove(),Xe(!0)}catch(T){L("เกิดข้อผิดพลาด: "+(T.message??""),"error"),C.disabled=!1,C.textContent="✅ ส่งหลักฐานการโอน"}})}window._showThankYouCardAdmin=(e,s)=>Ze(e,s);async function Ze(e,s=null){var m;(m=document.getElementById("thankyou-card-modal"))==null||m.remove();const n=s??await V().catch(()=>({}));z(n.donationMinAmount,99),z(n.donationAmountStep,50);const o=ke(n),a=pe(n),d=e.amount??0,l=[...a].reverse().find(x=>d>=x.amount)??a[0],r=Je(n,a,d),i=(n.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

การสนับสนุนของคุณครูมีค่ามากกว่าจำนวนเงินครับ ☕
เพราะมันคือกำลังใจสำคัญที่ทำให้ผมรู้สึกว่า
ระบบเล็ก ๆ นี้ได้ช่วยลดภาระงานของครูได้จริง 🌷

ขอบคุณที่ทำให้ผมมีกำลังใจพัฒนาระบบนี้ต่อไปเพื่อครูครับ 🙏✨

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`,p=(()=>{if(!l)return'<div class="text-5xl mb-3">☕</div>';const x=String(l.sticker??"");return/^https?:\/\//.test(x)?`<div class="w-20 h-20 mx-auto mb-3 flex items-center justify-center drop-shadow-lg">
        <img src="${I(x)}" class="w-full h-full object-contain" /></div>`:`<div class="text-5xl mb-3">${I(x||"☕")}</div>`})(),c=document.createElement("div");c.id="thankyou-card-modal",c.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",c.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Header — สีตาม tier.color -->
      <div class="px-6 py-6 text-center flex-shrink-0" style="${(()=>{const x=(l==null?void 0:l.color)||"#f59e0b",b=parseInt(x.slice(1,3),16),h=parseInt(x.slice(3,5),16),g=parseInt(x.slice(5,7),16);return`background:linear-gradient(135deg,rgba(${b},${h},${g},0.85),rgba(${b},${h},${g},1))`})()}">
        ${p}
        ${l?`<div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">${I(l.title)}</div>`:""}
        <h2 class="text-white font-bold text-xl">ขอบคุณครับ! 🙏</h2>
        <p class="text-white/80 text-sm mt-1">${d?`โดเนท ${d.toLocaleString()} บาท`:"การสนับสนุนของคุณครูมีความหมายมากครับ"}</p>
      </div>
      <!-- Body -->
      <div class="px-5 py-4 overflow-y-auto flex-1 space-y-4">
        <!-- ข้อความขอบคุณ -->
        ${e.admin_note||i?`
        <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
          ${I(e.admin_note||i)}
        </div>`:""}
        <!-- ฟีเจอร์พิเศษ: unlocked / locked -->
        ${o.length?`
        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-1.5">
            ${o.map(x=>r>=(x.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900">
                     <span class="flex-shrink-0">${I(x.icon)}</span>
                     <span>${I(x.text)}</span>
                   </div>`:`<div class="flex items-start gap-2 text-sm text-gray-400 opacity-60">
                     <span class="flex-shrink-0">🔒</span>
                     <span class="line-through">${I(x.text)}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap">ระดับ ${x.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${r<a.length?`
          <p class="text-[10px] text-emerald-700 mt-3 pt-2 border-t border-emerald-200">
            🔓 อัปเกรดเพื่อปลดล็อกฟีเจอร์ที่เหลือได้เลยครับ
          </p>`:""}
        </div>`:""}
        <!-- คำอธิบาย tier -->
        ${l!=null&&l.note?`
        <p class="text-xs text-center text-gray-400 italic">"${I(l.note)}"</p>`:""}
      </div>
      <!-- Footer -->
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="tc-close"
          class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${(l==null?void 0:l.color)||"#f59e0b"}">
          รับทราบและเริ่มใช้งาน 🚀
        </button>
      </div>
    </div>`,document.body.appendChild(c),c.querySelector("#tc-close").addEventListener("click",()=>{var x;localStorage.setItem(`pp5_thankyou_seen_${e.id}`,"1"),c.remove(),(x=document.getElementById("donate-float-btn"))==null||x.remove(),be(e)})}async function be(e=null){if(document.getElementById("sidebar-donate-item"))return;const s=document.querySelector("#sidebar nav");if(!s)return;let n="<span>☕</span>",o="สนับสนุนผู้พัฒนาอีกครั้ง";if(e){const d=await V().catch(()=>({}));z(d.donationMinAmount,99),z(d.donationAmountStep,50);const l=pe(d),r=e.amount??0,i=[...l].reverse().find(p=>r>=p.amount)??l[0];if(i){const p=String(i.sticker??"");n=/^https?:\/\//.test(p)?`<img src="${I(p)}" class="w-6 h-6 object-contain rounded" title="${I(i.title)}" />`:`<span title="${I(i.title)}">${I(p||"🏅")}</span>`,o=`${i.title} — คลิกเพื่อโดเนทอีกครั้ง`}}const a=document.createElement("a");a.id="sidebar-donate-item",a.href="#",a.title=o,a.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-emerald-400/60 hover:text-amber-400 hover:bg-emerald-800/40 opacity-60 hover:opacity-100",a.innerHTML=`${n} <span>${e?"ผู้สนับสนุนระบบ":"สนับสนุนผู้พัฒนา"}</span>`,a.addEventListener("click",async d=>{d.preventDefault();const l=await V().catch(()=>({}));W(null,l)}),s.appendChild(a)}function Xt(){var s;return((s=t==null?void 0:t.positions)!=null&&s.length?t.positions:t!=null&&t.position?[t.position]:[]).includes("executive")}function ie(e){const s=e==="overview"&&Xt();["donate-float-btn","feedback-fab","donor-chat-fab"].forEach(n=>{const o=document.getElementById(n);o&&(o.style.display=s?"none":"")}),tn(e)}function en(){if(document.getElementById("home-fab"))return;const e=document.createElement("button");e.id="home-fab",e.title="กลับหน้าภาพรวม",e.className="hidden fixed z-40 items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105",e.style.cssText="position:fixed;left:max(0.75rem, env(safe-area-inset-left));bottom:max(0.75rem, env(safe-area-inset-bottom));right:auto;top:auto;",e.innerHTML='<span class="text-lg">🏠</span><span>หน้าภาพรวม</span>',e.addEventListener("click",()=>M("overview")),document.body.appendChild(e)}function tn(e){const s=document.getElementById("home-fab");if(!s)return;const n=e!=="overview";s.classList.toggle("hidden",!n),s.classList.toggle("flex",n)}function Xe(e=!1){var n;(n=document.getElementById("donate-float-btn"))==null||n.remove();const s=document.createElement("button");s.id="donate-float-btn",s.title=e?"รอแอดมินรับทราบการโดเนทของคุณ":"สนับสนุนผู้พัฒนา",s.className="fixed z-[40] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-white shadow-lg shadow-amber-300/40 flex items-center justify-center overflow-hidden transition-transform hover:scale-105",s.style.cssText="position:fixed;right:max(0.75rem, env(safe-area-inset-right));bottom:max(0.75rem, env(safe-area-inset-bottom));top:auto;left:auto;",s.innerHTML=e?'<span class="text-xl sm:text-2xl">☕</span>':`<span class="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full">
        <span class="absolute inset-1 rounded-full bg-amber-300/40"></span>
        <span class="relative text-xl sm:text-2xl">☕</span>
       </span>`,s.addEventListener("click",async()=>{const o=await V().catch(()=>({}));W(null,o)}),document.body.appendChild(s),ie(Z)}function nn(e,s,n){var x;(x=document.getElementById("promo-popup"))==null||x.remove();const o="pp5_promo_seen",a=z(e.donationMinAmount,49);let d=0;const l=b=>{const h=b+1;return n.map(g=>h>=(g.minTier??1)?`<div class="flex items-center gap-2.5 text-sm text-gray-800 py-1">
             <span class="text-base flex-shrink-0">${I(g.icon)}</span>
             <span>${I(g.text)}</span>
           </div>`:`<div class="flex items-center gap-2.5 text-sm text-gray-300 py-1">
             <span class="text-base flex-shrink-0">🔒</span>
             <span class="line-through">${I(g.text)}</span>
             <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${g.minTier}+</span>
           </div>`).join("")},r=document.createElement("div");r.id="promo-popup",r.className="fixed inset-0 z-[85] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4";const i=b=>{var v,$;const h=s[b],g=(h==null?void 0:h.color)||"#f59e0b",E=String((h==null?void 0:h.sticker)??""),j=/^https?:\/\//.test(E)?`<img src="${I(E)}" class="w-16 h-16 object-contain drop-shadow-md" />`:`<span class="text-5xl">${I(E||"🏅")}</span>`;return`
    <div class="bg-white w-full sm:max-w-sm rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Sticker row -->
      <div class="pt-5 px-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">เลือกระดับที่สนใจ</p>
        <div class="flex justify-center gap-2">
          ${s.map((u,S)=>{const k=String(u.sticker??""),A=u.color||"#f59e0b",y=S===b,_=/^https?:\/\//.test(k)?`<img src="${I(k)}" class="w-10 h-10 object-contain" />`:`<span class="text-3xl">${I(k)}</span>`;return`<button class="promo-tier-btn flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all"
              data-idx="${S}"
              style="${y?`box-shadow:0 0 0 3px ${A};`:"box-shadow:0 0 0 2px #e5e7eb;"}">
              ${_}
            </button>`}).join("")}
        </div>
      </div>
      <!-- Tier info + features -->
      <div class="px-5 py-4 overflow-y-auto flex-1">
        <div class="flex items-center gap-2 mb-1">
          ${j}
          <div>
            <p class="font-bold text-gray-800 text-base">${I((h==null?void 0:h.title)??"")}</p>
            <p class="text-xs" style="color:${g}">${I((h==null?void 0:h.note)??"")}</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-2 mb-3">ยอดสนับสนุนขั้นต่ำ <span class="font-bold text-gray-700">${((v=h==null?void 0:h.amount)==null?void 0:v.toLocaleString())??a} บาท</span></p>
        <div class="divide-y divide-gray-50">
          ${l(b)}
        </div>
      </div>
      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex-shrink-0 space-y-3">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="promo-no-show" class="w-4 h-4 rounded accent-gray-400" />
          <span class="text-xs text-gray-400">ไม่ต้องการให้แสดงหน้านี้อีก</span>
        </label>
        <button id="promo-support" class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${g}">
          สนับสนุนในระดับนี้ (${(($=h==null?void 0:h.amount)==null?void 0:$.toLocaleString())??a} บาท+)
        </button>
        <button id="promo-later" class="w-full text-sm text-gray-400 hover:text-gray-600 py-1 transition">
          ภายหลัง
        </button>
      </div>
    </div>`};r.innerHTML=i(d),document.body.appendChild(r);const p=b=>{d=b,r.querySelector(".bg-white").outerHTML=i(b),m()},c=()=>{var b;(b=r.querySelector("#promo-no-show"))!=null&&b.checked&&localStorage.setItem(o,String(Date.now())),r.remove()},m=()=>{var b,h;r.querySelectorAll(".promo-tier-btn").forEach(g=>{g.addEventListener("click",()=>p(parseInt(g.dataset.idx)))}),(b=r.querySelector("#promo-support"))==null||b.addEventListener("click",()=>{c(),W(null,e)}),(h=r.querySelector("#promo-later"))==null||h.addEventListener("click",c),r.addEventListener("click",g=>{g.target===r&&c()})};m()}function sn(e,s,n){if(document.getElementById("sidebar-upgrade-item"))return;const o=document.querySelector("#sidebar nav");if(!o)return;const a=s[n-1],d=s[n],l=String((a==null?void 0:a.sticker)??""),r=/^https?:\/\//.test(l)?`<img src="${I(l)}" class="w-5 h-5 object-contain flex-shrink-0" />`:`<span class="flex-shrink-0">${I(l||"🏅")}</span>`,i=document.createElement("a");i.id="sidebar-upgrade-item",i.href="#",i.className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition text-amber-400/70 hover:text-amber-300 hover:bg-emerald-800/40 opacity-70 hover:opacity-100",i.innerHTML=`${r} <span>อัปเกรดระดับ</span>`,i.title=d?`อัปเกรดเป็น ${d.title}`:"สนับสนุนเพิ่มเติม",i.addEventListener("click",async p=>{p.preventDefault(),W(null,e)}),o.appendChild(i)}async function on(e){try{const[s,n]=await Promise.all([Ne(e),V().catch(()=>({}))]);if((n.quotaMode??"payment")!=="school_sponsored")return;const o=z(n.donationMinAmount,49),a=z(n.donationAmountStep,50),d=pe(n,o,a),l=ke(n),r=d.length,i=s.find(m=>m.package_type==="donation"&&m.status==="approved"),p=s.some(m=>m.package_type==="donation"&&m.status==="pending"),c=s.filter(m=>m.package_type==="donation"&&m.status==="approved").reduce((m,x)=>m+(x.amount??0),0);if(window._pp5SystemCfg=n,i){!localStorage.getItem(`pp5_thankyou_seen_${i.id}`)&&i.admin_note&&Ze(i);const x=Je(n,d,c);window._pp5DonorTierIndex=x,x>=r?be(i):(be(i),sn(n,d,x))}else if(Xe(p),!p&&n.donationPromoEnabled!=="false"){const x=localStorage.getItem("pp5_promo_seen");(!x||Date.now()-parseInt(x)>14*24*60*60*1e3)&&setTimeout(()=>nn(n,d,l),1500)}}catch{}}function et(e,s={}){var i;(i=document.getElementById("room-count-page"))==null||i.remove();const n=parseInt(s.pricePerClass??49),o=document.createElement("div");o.id="room-count-page",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="rc-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">แพ็กเกจรายห้อง</h3>
          <p class="text-xs text-gray-400">${n} บาท / ห้อง / เทอม</p>
        </div>
      </div>
      <div class="px-5 py-6 flex flex-col gap-5">
        <p class="text-sm text-gray-600">ต้องการเพิ่มห้องเรียนอีกกี่ห้อง?</p>
        <div class="flex items-center justify-center gap-5">
          <button id="rc-minus"
            class="w-12 h-12 rounded-xl border-2 border-gray-200 text-2xl font-bold text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition flex items-center justify-center">
            −
          </button>
          <div class="text-center min-w-[80px]">
            <p id="rc-count" class="text-5xl font-extrabold text-indigo-600">1</p>
            <p class="text-xs text-gray-400 mt-1">ห้อง</p>
          </div>
          <button id="rc-plus"
            class="w-12 h-12 rounded-xl border-2 border-gray-200 text-2xl font-bold text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition flex items-center justify-center">
            ＋
          </button>
        </div>
        <div class="bg-indigo-50 rounded-xl p-4 text-center">
          <p class="text-xs text-gray-500 mb-1">ยอดที่ต้องชำระ</p>
          <p id="rc-total" class="text-3xl font-extrabold text-indigo-600">${n} <span class="text-sm font-normal text-gray-400">บาท</span></p>
          <p class="text-xs text-gray-400 mt-1">(${n} บ. × 1 ห้อง)</p>
        </div>
      </div>
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="rc-cancel"
          class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 font-medium">
          ยกเลิก
        </button>
        <button id="rc-next"
          class="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
          ถัดไป →
        </button>
      </div>
    </div>`,document.body.appendChild(o);let a=1;const d=o.querySelector("#rc-count"),l=o.querySelector("#rc-total"),r=()=>{d.textContent=a;const p=n*a;l.innerHTML=`${p.toLocaleString()} <span class="text-sm font-normal text-gray-400">บาท</span>`,l.nextElementSibling.textContent=`(${n} บ. × ${a} ห้อง)`,o.querySelector("#rc-minus").disabled=a<=1};o.querySelector("#rc-minus").addEventListener("click",()=>{a>1&&(a--,r())}),o.querySelector("#rc-plus").addEventListener("click",()=>{a++,r()}),o.querySelector("#rc-back").addEventListener("click",()=>{o.remove(),X(0,e,s)}),o.querySelector("#rc-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#rc-next").addEventListener("click",()=>{o.remove(),tt("per_subject",e,a,s)})}async function tt(e,s,n=1,o=null){var j;(j=document.getElementById("payment-page"))==null||j.remove();const a=o??await V().catch(()=>({})),d=parseInt(a.pricePerClass??49),l=parseInt(a.priceSemester??299),r=(a.paymentPromptpay??"0825424340").replace(/\D/g,""),i=e==="semester"?l:d*n,p=e==="semester"?"เหมาทั้งเทอม":`รายห้อง × ${n} ห้อง`,c=e==="semester"?"ทุกวิชา ทุกห้อง ตลอดเทอม":`${d} บ. × ${n} ห้อง = ${i.toLocaleString()} บ.`,m=document.createElement("div");m.id="payment-page",m.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="pp-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none mr-1">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">ชำระเงิน — ${p}</h3>
          <p class="text-xs text-gray-400">${c}</p>
        </div>
        <div class="bg-indigo-600 text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
          ${i.toLocaleString()} บ.
        </div>
      </div>

      <!-- Body -->
      <div class="overflow-auto flex-1 px-5 py-4 space-y-4">

        <!-- QR Code PromptPay (dynamic) -->
        <div class="text-center">
          <p class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">สแกน QR PromptPay</p>
          <div id="pp-qr-wrap" class="flex flex-col items-center gap-2">
            <div class="w-[220px] h-[220px] bg-gray-100 rounded-xl flex items-center justify-center animate-pulse mx-auto">
              <p class="text-xs text-gray-400">กำลังสร้าง QR...</p>
            </div>
          </div>
          <div class="mt-2 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2">
            <span class="text-xs text-gray-500">ยอดที่ต้องชำระ</span>
            <span class="font-extrabold text-emerald-700 text-lg">${i.toLocaleString()} บาท</span>
          </div>
          <p class="text-[11px] text-gray-400 mt-1">พร้อมเพย์ ${r.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")}</p>
        </div>

        <!-- รายละเอียดบัญชี (คัดลอกได้) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2.5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">ข้อมูลการโอน</p>
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">พร้อมเพย์</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1.5"
              data-copy="${r}">
              ${r.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")} <span class="text-[10px] text-gray-400">คัดลอก</span>
            </button>
          </div>
          ${a.paymentBankName?`
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ธนาคาร</span>
            <span class="text-sm font-medium text-gray-700">${a.paymentBankName}</span>
          </div>`:""}
          ${a.paymentAccountNo?`
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">เลขบัญชี</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1.5"
              data-copy="${a.paymentAccountNo}">
              ${a.paymentAccountNo} <span class="text-[10px] text-gray-400">คัดลอก</span>
            </button>
          </div>`:""}
          ${a.paymentAccountName?`
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ชื่อบัญชี</span>
            <span class="text-sm font-medium text-gray-700">${a.paymentAccountName}</span>
          </div>`:""}
          ${a.paymentNote?`
          <p class="text-[11px] text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mt-1">${a.paymentNote}</p>`:""}
        </div>

        <!-- อัปโหลดสลิป -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">อัปโหลดสลิปการโอนเงิน</p>
          <label id="slip-label"
            class="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200
                   rounded-xl py-6 cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition">
            <span class="text-3xl">📎</span>
            <span class="text-sm text-gray-500">แตะเพื่อเลือกรูปสลิป</span>
            <span class="text-xs text-gray-400">รองรับ JPG, PNG, PDF</span>
            <input type="file" id="slip-file" accept="image/*,application/pdf" class="sr-only"/>
          </label>
          <div id="slip-preview" class="hidden mt-2 relative">
            <img id="slip-img" class="w-full rounded-xl object-cover max-h-48 border border-gray-100"/>
            <p id="slip-name" class="text-xs text-gray-500 mt-1 text-center truncate"></p>
            <button id="slip-remove" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs">✕</button>
          </div>
        </div>

        <p class="text-[11px] text-gray-400 text-center">
          หลังส่งหลักฐาน แอดมินจะตรวจสอบและอนุมัติภายใน 24 ชั่วโมง
        </p>
      </div>

      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
        <button id="pp-submit"
          class="w-full py-3.5 rounded-xl bg-emerald-600 text-white text-sm font-bold
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ✅ ส่งหลักฐานการชำระเงิน
        </button>
        <p id="pp-err" class="hidden text-xs text-red-500 text-center mt-2"></p>
      </div>
    </div>`,document.body.appendChild(m),Oe(r,i).then(v=>{const $=m.querySelector("#pp-qr-wrap");$&&($.innerHTML=`
      <img src="${v}" class="w-[220px] h-[220px] rounded-xl border border-gray-100 shadow-sm mx-auto" />
      <p class="text-[10px] text-gray-400">QR สำหรับ ${i.toLocaleString()} บาทเท่านั้น</p>`)}).catch(()=>{if(a.paymentQrUrl){const v=m.querySelector("#pp-qr-wrap");v&&(v.innerHTML=`<img src="${a.paymentQrUrl}" class="mx-auto h-[220px] object-contain rounded-xl border border-gray-100 shadow-sm" />`)}}),m.querySelector("#pp-back").addEventListener("click",()=>{var v;m.remove(),e==="per_subject"?et(s,a):X(((v=t==null?void 0:t.teachers_quota)==null?void 0:v.total_classes_created)??0,s,a)}),m.querySelectorAll(".copy-btn").forEach(v=>{v.addEventListener("click",()=>{navigator.clipboard.writeText(v.dataset.copy).catch(()=>{}),v.querySelector("span").textContent="✓ คัดลอกแล้ว",setTimeout(()=>v.querySelector("span").textContent="คัดลอก",2e3)})});let x=null;const b=m.querySelector("#slip-file"),h=m.querySelector("#slip-preview"),g=m.querySelector("#slip-img"),E=m.querySelector("#slip-name");b.addEventListener("change",v=>{x=v.target.files[0],x&&(E.textContent=x.name,x.type.startsWith("image/")?(g.src=URL.createObjectURL(x),g.classList.remove("hidden")):g.classList.add("hidden"),h.classList.remove("hidden"),m.querySelector("#slip-label").classList.add("hidden"))}),m.querySelector("#slip-remove").addEventListener("click",()=>{x=null,b.value="",h.classList.add("hidden"),m.querySelector("#slip-label").classList.remove("hidden")}),m.querySelector("#pp-submit").addEventListener("click",async()=>{const v=m.querySelector("#pp-err");if(!x){v.textContent="กรุณาอัปโหลดสลิปก่อนนะครับ",v.classList.remove("hidden");return}v.classList.add("hidden");const $=m.querySelector("#pp-submit");$.disabled=!0,$.textContent="⏳ กำลังส่ง...";try{const u=await ye({teacher_id:t.id,package_type:e,amount:i,room_count:e==="per_subject"?n:null,subject_id:e==="per_subject"?(s==null?void 0:s.id)??null:null,status:"pending"}),S=await Me(x,u.id);await q.from("payment_requests").update({slip_url:S}).eq("id",u.id),m.remove(),an()}catch(u){$.disabled=!1,$.textContent="✅ ส่งหลักฐานการชำระเงิน",v.textContent="เกิดข้อผิดพลาด กรุณาลองใหม่: "+(u.message??""),v.classList.remove("hidden")}})}function an(){const e=document.createElement("div");e.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-7 text-center">
      <div class="text-6xl mb-4">✅</div>
      <h3 class="text-lg font-bold text-gray-800 mb-2">ส่งหลักฐานแล้ว!</h3>
      <p class="text-sm text-gray-500 mb-1">แอดมินจะตรวจสอบและอนุมัติ</p>
      <p class="text-sm font-semibold text-indigo-600 mb-5">ภายใน 24 ชั่วโมง</p>
      <div class="bg-amber-50 rounded-xl p-3 mb-5 text-left">
        <p class="text-xs text-amber-700">
          📱 คุณจะได้รับการแจ้งเตือนในแอปเมื่อแอดมินอนุมัติแล้ว
          หลังจากนั้นกลับมากด "สร้างห้องเรียน" ได้เลยครับ
        </p>
      </div>
      <button onclick="this.closest('.fixed').remove()"
        class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700">
        รับทราบ ขอบคุณครับ
      </button>
    </div>`,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&e.remove()})}async function Te(e){try{const s=await V(),n=s.semester??s.semester??"—",o=s.academicYear??s.academic_year??"—",a=document.getElementById("sidebar-term");a&&(a.textContent=`ภาคเรียนที่ ${n} / ${o}`);const d=(e==null?void 0:e.category)??"",r=/ปวช/i.test(d)?s.porworLogoUrl??s.samaiLogoUrl??"":s.samaiLogoUrl??"",i=document.getElementById("school-logo"),p=document.getElementById("school-logo-fallback");i&&r&&(i.src=r,i.classList.remove("hidden"),p==null||p.classList.add("hidden"));const c=document.getElementById("sidebar-contact");if(c){const m=[s.contactPhone&&{icon:"📞",label:s.contactPhone,href:`tel:${s.contactPhone.replace(/\s/g,"")}`},s.contactLine&&{icon:"💬",label:"LINE: "+s.contactLine,href:s.contactLine.startsWith("http")?s.contactLine:`https://line.me/R/ti/p/${s.contactLine}`},s.contactFacebook&&{icon:"📘",label:"Facebook",href:s.contactFacebook},s.contactEmail&&{icon:"📧",label:s.contactEmail,href:`mailto:${s.contactEmail}`},s.contactOther&&{icon:"🔗",label:s.contactOther,href:null}].filter(Boolean);m.length>0&&(window._contactLinks=m,c.innerHTML=`
          <button id="btn-contact-admin"
            class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm
                   font-medium text-emerald-200 hover:bg-emerald-700 border border-emerald-700 transition">
            📞 ติดต่อผู้ดูแล
          </button>`,c.classList.remove("hidden"),document.getElementById("btn-contact-admin").addEventListener("click",()=>{var b,h;(b=document.getElementById("contact-modal"))==null||b.remove();const x=document.createElement("div");x.id="contact-modal",x.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade">
              <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 class="font-bold text-gray-800">📞 ติดต่อผู้ดูแลระบบ</h3>
                <button id="contact-modal-close"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-lg">×</button>
              </div>
              <div class="p-5 space-y-3">
                ${m.map(g=>g.href?`<a href="${g.href}" target="_blank" rel="noopener"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 transition group">
                        <span class="text-xl">${g.icon}</span>
                        <span class="text-sm font-medium text-gray-700 group-hover:text-emerald-700 break-all">${g.label}</span>
                        <span class="ml-auto text-gray-300 group-hover:text-emerald-400 text-xs">→</span>
                      </a>`:`<div class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50">
                       <span class="text-xl">${g.icon}</span>
                       <span class="text-sm font-medium text-gray-700 break-all">${g.label}</span>
                     </div>`).join("")}
                <button id="contact-donate-btn"
                  class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-white font-semibold text-sm shadow-md shadow-amber-200/50 transition">
                  ☕ สนับสนุนผู้พัฒนา
                </button>
              </div>
            </div>`,document.body.appendChild(x),x.querySelector("#contact-modal-close").addEventListener("click",()=>x.remove()),(h=x.querySelector("#contact-donate-btn"))==null||h.addEventListener("click",async()=>{x.remove();const g=await V().catch(()=>({}));W(null,g)}),x.addEventListener("click",g=>{g.target===x&&x.remove()})}))}}catch{}}let G=[];async function rn(e){try{G=await _t(e),dn()}catch{}}function dn(){var n;if(document.querySelectorAll("#sv-notif-badge").forEach(o=>o.remove()),!G.length)return;const e=G.length,s=document.getElementById("t-name");if(s){const o=document.createElement("span");o.id="sv-notif-badge",o.style.cssText="display:inline-block;background:#dc2626;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 6px;margin-left:6px;cursor:pointer;",o.textContent=e,o.title=`${e} ข้อความจากหัวหน้า`,o.onclick=()=>Pe(t==null?void 0:t.id),(n=s.parentElement)==null||n.appendChild(o)}window._showSvNotifPopup=()=>Pe(t==null?void 0:t.id),"Notification"in window&&Notification.permission==="granted"&&e>0&&new Notification("ปพ.5 ออนไลน์ — มีข้อความจากหัวหน้า",{body:G[0].comment,icon:"/pp5online/public/pp5-form-logo.png"})}async function Pe(e){const s={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},n={general:"#f9fafb",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},o={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},a={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},d=r=>{const i=r.supervisor;if(!i)return"หัวหน้า";const p=a[i.position]??"หัวหน้า";return i.full_name?`${p} (${i.full_name})`:p},l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;",l.innerHTML=`<div style="background:#fff;border-radius:16px;width:min(500px,96vw);max-height:85vh;overflow-y:auto;padding:24px;position:relative;">
    <button style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;" onclick="this.closest('div').parentElement.remove()">✕</button>
    <div style="font-size:16px;font-weight:700;margin-bottom:4px;">🔔 ข้อความจากหัวหน้า</div>
    <div style="font-size:12px;color:#6b7280;margin-bottom:16px;">ได้รับการตรวจสอบแล้ว ${G.length} รายการ</div>
    ${G.map(r=>`
      <div style="background:${n[r.metric]??"#f9fafb"};border-radius:12px;padding:14px 16px;margin-bottom:10px;border-left:4px solid ${o[r.metric]??"#6b7280"};">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:700;color:${o[r.metric]??"#374151"};background:${n[r.metric]??"#f9fafb"};
            border:1px solid currentColor;border-radius:8px;padding:1px 8px;">
            ${s[r.metric]??r.metric}
          </span>
          <span style="font-size:10px;color:#9ca3af;">${new Date(r.created_at).toLocaleString("th")}</span>
        </div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;">จาก: ${d(r)}</div>
        <div style="font-size:13px;color:#374151;line-height:1.5;">${r.comment}</div>
      </div>`).join("")}
    <button id="sv-mark-read"
      style="width:100%;margin-top:8px;padding:10px;background:#059669;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
      ✓ รับทราบทั้งหมด
    </button>
  </div>`,document.body.appendChild(l),l.addEventListener("click",r=>{r.target===l&&l.remove()}),l.querySelector("#sv-mark-read").onclick=async()=>{await kt(e),G=[],document.querySelectorAll("#sv-notif-badge").forEach(r=>r.remove()),l.remove()}}let de=!1,oe=null;async function Ee(){var o;const e=document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area"),s=document.querySelector("#sidebar nav");if(!e||de)return;if(!(t!=null&&t.id)){L("กำลังโหลดข้อมูลครู กรุณารอสักครู่แล้วลองใหม่","warning");try{t=await J((o=(await q.auth.getUser()).data.user)==null?void 0:o.id)}catch{}if(!(t!=null&&t.id))return}de=!0,s&&(oe=s.innerHTML),await we(),mn(s,e,F);const{renderSupervisorDashboard:n}=await f(async()=>{const{renderSupervisorDashboard:a}=await import("./supervisor-UNgZXUnN.js");return{renderSupervisorDashboard:a}},__vite__mapDeps([42,1,2,3,13,6,8]));n(e,t,F)}window._enterSupervisorMode=Ee;function ln(){document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area");const e=document.querySelector("#sidebar nav");de&&(de=!1,e&&oe&&(e.innerHTML=oe,oe=null,un(e)),M("overview"))}async function cn(){try{const e=await wt("teacher",(t==null?void 0:t.id)??null);rt(e,"pp5_ann_dismissed")}catch{}}async function pn(){try{const e=await Ft();e!=null&&e.is_participant&&!e.completed&&it("teacher")}catch{}}const Ae=[{key:"announce_create",icon:"📢",label:"จัดการประกาศ",fn:(e,s)=>{f(async()=>{const{renderSupervisorAnnouncements:n}=await import("./views-Dsbi1Yvn.js").then(o=>o.J);return{renderSupervisorAnnouncements:n}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22])).then(({renderSupervisorAnnouncements:n})=>n(e,s))}},{key:"work_calendar",icon:"📅",label:"ปฏิทินปฏิบัติงาน",fn:e=>{f(async()=>{const{renderWorkCalendar:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderWorkCalendar:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22])).then(({renderWorkCalendar:s})=>s(e))}},{key:"lang_config",icon:"⚙️",label:"ตั้งค่าคำอธิบายฯ",fn:async(e,s)=>{const{renderCourseDocLangConfig:n}=await f(async()=>{const{renderCourseDocLangConfig:o}=await import("./teacher-views-BzTMalao.js");return{renderCourseDocLangConfig:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));n(e,s)}},{key:"menu_holidays",icon:"📅",label:"วันหยุด",fn:async()=>{const{renderHolidays:e}=await f(async()=>{const{renderHolidays:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderHolidays:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_periods",icon:"🕐",label:"คาบเรียน",fn:async()=>{const{renderPeriods:e}=await f(async()=>{const{renderPeriods:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderPeriods:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_curriculum",icon:"📘",label:"หลักสูตรแกนกลาง",fn:async()=>{const{renderCurriculum:e}=await f(async()=>{const{renderCurriculum:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderCurriculum:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_subjects",icon:"📖",label:"รายวิชา",fn:async()=>{const{renderSubjects:e}=await f(async()=>{const{renderSubjects:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderSubjects:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_departments",icon:"🏫",label:"กลุ่มสาระ",fn:async()=>{const{renderDepartments:e}=await f(async()=>{const{renderDepartments:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderDepartments:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_homeroom",icon:"🏠",label:"ครูที่ปรึกษา",fn:async()=>{const{renderHomeroom:e}=await f(async()=>{const{renderHomeroom:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderHomeroom:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_students",icon:"👨‍🎓",label:"นักเรียน",fn:async()=>{const{renderStudents:e}=await f(async()=>{const{renderStudents:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderStudents:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_classrooms",icon:"🚪",label:"ห้องเรียน",fn:async()=>{const{renderClassroomsAdmin:e}=await f(async()=>{const{renderClassroomsAdmin:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderClassroomsAdmin:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_score_config",icon:"📊",label:"คอลัมน์คะแนน",fn:async()=>{const{renderScoreColConfig:e}=await f(async()=>{const{renderScoreColConfig:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderScoreColConfig:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_life_skill",icon:"🌱",label:"ทักษะชีวิต",fn:async()=>{const{renderLifeSkillAdmin:e}=await f(async()=>{const{renderLifeSkillAdmin:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderLifeSkillAdmin:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_reading",icon:"📗",label:"การอ่าน",fn:async()=>{const{renderReadingAdmin:e}=await f(async()=>{const{renderReadingAdmin:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderReadingAdmin:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_prayer",icon:"🕌",label:"ละหมาด",fn:async()=>{const{renderPrayerAdmin:e}=await f(async()=>{const{renderPrayerAdmin:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderPrayerAdmin:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_house_colors",icon:"🎨",label:"สีนักเรียน",fn:async()=>{const{renderHouseColors:e}=await f(async()=>{const{renderHouseColors:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderHouseColors:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_sports_admin",icon:"🏆",label:"ระบบกีฬาสี",fn:async()=>ze({admin:!0,teacherName:t==null?void 0:t.full_name,teacherCode:t==null?void 0:t.teacher_code})},{key:"menu_azfutsal",icon:"⚽",label:"AZFUTSALCUP",fn:async()=>Vt()},{key:"menu_sports_shirt_settings",icon:"👕",label:"ตั้งค่าและสรุปเสื้อกีฬาสี",fn:async()=>He()},{key:"menu_sports_fund_admin",icon:"💰",label:"บัญชีเงินกีฬาสี",fn:async()=>Ve()},{key:"manage_religion_groups",icon:"🕌",label:"กลุ่มวิชาศาสนา",fn:async()=>{const{renderReligionGroups:e}=await f(async()=>{const{renderReligionGroups:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderReligionGroups:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"manage_my_religion_group",icon:"👥",label:"กลุ่มของฉัน",fn:async e=>{const{renderMyReligionGroup:s}=await f(async()=>{const{renderMyReligionGroup:n}=await import("./views-Dsbi1Yvn.js").then(o=>o.J);return{renderMyReligionGroup:n}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));s(e)}},{key:"menu_classroom_leaders",icon:"👑",label:"หัวหน้า/รองหัวหน้าห้อง",fn:async()=>{const{renderClassroomLeaders:e}=await f(async()=>{const{renderClassroomLeaders:s}=await import("./views-Dsbi1Yvn.js").then(n=>n.J);return{renderClassroomLeaders:s}},__vite__mapDeps([17,1,2,3,18,15,4,5,6,7,8,9,10,11,12,13,14,16,0,19,20,21,22]));e()}},{key:"menu_tutorial",icon:"📖",label:"คู่มือการใช้งาน",fn:async()=>{const{renderTutorialAdmin:e}=await f(async()=>{const{renderTutorialAdmin:s}=await import("./tutorial-FuIPnEx0.js");return{renderTutorialAdmin:s}},__vite__mapDeps([40,2,3,8,1]));e()}}];function mn(e,s,n=!1){var p;if(!e)return;const o={dept_head:"หัวหน้ากลุ่มสาระ",religion_group_head:"หัวหน้ากลุ่ม (ศาสนา)",religion_subgroup_head:"หัวหน้ากลุ่มย่อย (ศาสนา)",registrar_samai:"ทะเบียน (สามัญ)",registrar_religion:"ทะเบียน (ศาสนา)",registrar_pvch:"ทะเบียน (ปวช)",academic_samai:"วิชาการ (สามัญ)",academic_religion:"วิชาการ (ศาสนา)",academic_pvch:"วิชาการ (ปวช)",house_color_admin:"สีนักเรียน",classroom_leaders_admin:"ผู้ดูแลหัวหน้า/รองหัวหน้า",executive:"ผู้บริหาร"},a=(p=t==null?void 0:t.positions)!=null&&p.length?t.positions:t!=null&&t.position?[t.position]:[],d=a.length?a.map(c=>o[c]??c).join(" / "):n?"แอดมิน":"หัวหน้า",l=Q.enabled!==!1&&Q.teacher_menu!==!1,r=n?Ae:Ae.filter(c=>c.key==="lang_config"?O.lang_config||a.includes("dept_head"):c.key==="menu_house_colors"?O.menu_house_colors||a.includes("house_color_admin"):c.key==="menu_sports_admin"?l&&(O.menu_sports_admin||a.includes("house_color_admin")):c.key==="menu_sports_shirt_settings"||c.key==="menu_sports_fund_admin"?O.menu_sports_admin||a.includes("house_color_admin"):c.key==="menu_azfutsal"?!0:c.key==="menu_classroom_leaders"?O.menu_classroom_leaders||a.includes("classroom_leaders_admin"):c.key==="manage_religion_groups"?O.manage_religion_groups||a.includes("religion_group_head"):c.key==="manage_my_religion_group"?a.includes("religion_subgroup_head"):c.key==="announce_manage"?!!O.announce_manage:c.key==="announce_create"?!!O.announce_create:c.key==="work_calendar"?!!O.work_calendar:!!O[c.key]),i=(c,m,x)=>`<button data-sv="${c}" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium w-full text-left transition hover:bg-emerald-800/50" style="color:#d1fae5;">${m} ${x}</button>`;e.innerHTML=`
    <div style="padding:8px 12px;font-size:11px;color:#6ee7b7;font-weight:600;letter-spacing:.5px;margin-bottom:4px;">📊 ${d}</div>
    ${i("back","←","กลับโหมดสอน")}
    <div style="height:1px;background:#065f46;margin:8px 12px;"></div>
    ${i("dashboard","📊","Dashboard ติดตาม")}
    ${r.map(c=>i(c.key,c.icon,c.label)).join("")}`,e.querySelector('[data-sv="back"]').onclick=ln,e.querySelector('[data-sv="dashboard"]').onclick=()=>f(()=>import("./supervisor-UNgZXUnN.js"),__vite__mapDeps([42,1,2,3,13,6,8])).then(c=>c.renderSupervisorDashboard(s,t,F)),r.forEach(c=>{var m;(m=e.querySelector(`[data-sv="${c.key}"]`))==null||m.addEventListener("click",()=>c.fn(t,n))})}function un(e,s){e.querySelectorAll("[data-nav]").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),M(n.dataset.nav)})}),e.querySelectorAll("button").forEach(n=>{n.textContent.trim().includes("Dashboard")&&(n.onclick=Ee)})}async function ge(e){if(!t)return;let s=[];try{s=await ee(t.id);const d=s.map(l=>l.id).filter(Boolean);if(d.length){const{data:l,error:r}=await q.from("class_students").select("class_id").in("class_id",d);r&&console.warn("[quick-class-picker] โหลดจำนวนนักเรียนไม่สำเร็จ",r);const i=(l??[]).reduce((p,c)=>(p[c.class_id]=(p[c.class_id]||0)+1,p),{});s=s.map(p=>({...p,_studentCount:i[p.id]||0}))}}catch(d){console.error("[quick-class-picker] โหลดรายการห้องไม่สำเร็จ",d),L("โหลดรายการห้องเรียนไม่สำเร็จ กรุณาลองใหม่","error");return}if(!s.length){L("ยังไม่มีห้องเรียน","warning");return}if(s.length===1){je(e,s[0]);return}const n=e==="attendance"?"✅ เลือกห้องเรียน — เช็คชื่อ":"📝 เลือกห้องเรียน — บันทึกคะแนน",o=document.createElement("div");o.id="qcp-overlay",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4",o.innerHTML=`
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="qcp-backdrop"></div>
    <div class="relative bg-white w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[70vh] flex flex-col">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">${n}</p>
        <button id="qcp-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <div class="overflow-y-auto p-3 space-y-2">
        ${s.map(d=>{var l;return`
          <button data-cid="${d.id}" class="qcp-cls w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition border border-gray-100">
            <p class="font-semibold text-gray-800 text-sm">${d.class_name}</p>
            <p class="text-xs text-gray-400 mt-0.5">${((l=d.master_subjects)==null?void 0:l.subject_name)??""} · ${d._studentCount??0} คน</p>
          </button>`}).join("")}
      </div>
    </div>`,document.body.appendChild(o);const a=()=>o.remove();o.querySelector("#qcp-backdrop").onclick=a,o.querySelector("#qcp-close").onclick=a,o.querySelectorAll(".qcp-cls").forEach(d=>{d.onclick=()=>{a();const l=s.find(r=>String(r.id)===d.dataset.cid);l&&je(e,l)}})}window._showClassQuickPicker=ge;async function je(e,s){if(e==="attendance"){const{renderAttendanceGrid:n}=await f(async()=>{const{renderAttendanceGrid:o}=await import("./teacher-views-attendance-C31WiJPz.js");return{renderAttendanceGrid:o}},__vite__mapDeps([14,1,2,3,15,8]));n(t,s)}else{const{renderGradesGrid:n}=await f(async()=>{const{renderGradesGrid:o}=await import("./teacher-views-grades-DyBe1K7u.js").then(a=>a.t);return{renderGradesGrid:o}},__vite__mapDeps([9,2,3,10,1,11,8]));n(t,s)}}const xn=`
  <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`,Y="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/20 shadow-[0_10px_20px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.28)] ring-1 ring-white/30 text-2xl leading-none";function fn(e,s=null){return t?(e.prayerScannerTeachers||"").split(/[\s,]+/).map(o=>o.trim()).filter(Boolean).includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||s==="admin":!1}async function nt(){var i,p,c,m,x,b,h,g;if(!t)return;(i=document.getElementById("teacher-scan-launcher"))==null||i.remove();const e=document.createElement("div");e.id="teacher-scan-launcher",e.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
    <div class="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-9 h-9 rounded-2xl text-white bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-700 flex items-center justify-center shadow-[0_10px_24px_rgba(5,150,105,0.30),inset_0_1px_0_rgba(255,255,255,0.35)]">${xn}</span>
            <span>เลือกงานสแกน</span>
          </h3>
          <p class="text-xs text-gray-400 mt-0.5">เปิดกล้องสำหรับงานประจำวันจากจุดเดียว</p>
        </div>
        <button id="scan-launcher-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
      </div>
      <div id="scan-launcher-body" class="p-5 overflow-y-auto">
        <div class="flex items-center justify-center py-10 text-gray-400 text-sm">
          <svg class="animate-spin h-5 w-5 text-emerald-400 mr-2" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          กำลังตรวจสอบสิทธิ์...
        </div>
      </div>
    </div>
  `,document.body.appendChild(e);const s=()=>e.remove();e.addEventListener("click",E=>{E.target===e&&s()}),(p=e.querySelector("#scan-launcher-close"))==null||p.addEventListener("click",s);const n=e.querySelector("#scan-launcher-body"),[o,a]=await Promise.all([V().catch(()=>({})),(async()=>{try{return await q.from("profiles").select("role").eq("id",t.profile_id).maybeSingle()}catch{return{data:null}}})()]),d=fn(o,((c=a==null?void 0:a.data)==null?void 0:c.role)??null),l="group w-full text-left rounded-3xl border p-4 flex gap-3 items-start hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition shadow-[0_14px_30px_rgba(15,23,42,0.12)]",r={attendance:{card:`${l} border-sky-700 bg-sky-600 hover:bg-sky-700 hover:shadow-[0_20px_42px_rgba(2,132,199,0.30)]`,icon:`${Y} text-white group-hover:shadow-[0_14px_26px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-sky-50/85"},prayer:{card:`${l} border-emerald-700 bg-emerald-600 hover:bg-emerald-700 hover:shadow-[0_20px_42px_rgba(16,185,129,0.30)]`,icon:`${Y} text-white group-hover:shadow-[0_14px_26px_rgba(16,185,129,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-emerald-50/85"},leave:{card:`${l} border-orange-700 bg-orange-500 hover:bg-orange-600 hover:shadow-[0_20px_42px_rgba(249,115,22,0.30)]`,icon:`${Y} text-white group-hover:shadow-[0_14px_26px_rgba(249,115,22,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-orange-50/90"},score:{card:`${l} border-indigo-700 bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_20px_42px_rgba(79,70,229,0.30)]`,icon:`${Y} text-white group-hover:shadow-[0_14px_26px_rgba(79,70,229,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-indigo-50/85"}};n.innerHTML=`
    <div class="space-y-3">
      <button id="scan-launcher-attendance" type="button" class="${r.attendance.card}">
        <span class="${r.attendance.icon}" aria-hidden="true">✅</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${r.attendance.title} text-sm">สแกน QR เช็คชื่อ</span>
          <span class="block text-xs ${r.attendance.sub} mt-1">เลือกห้องและคาบ ระบบจะโหลดข้อมูลเดิม แล้วเปิดกล้องสแกน</span>
        </span>
      </button>

      ${d?`
      <button id="scan-launcher-prayer-open" type="button" class="${r.prayer.card}">
        <span class="${r.prayer.icon}" aria-hidden="true">🕌</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${r.prayer.title} text-sm">สแกนละหมาด</span>
          <span class="block text-xs ${r.prayer.sub} mt-1">เปิดระบบสแกน แล้วเลือกจุด/บริเวณในหน้าถัดไป</span>
        </span>
      </button>
      `:`
      <div class="rounded-3xl border border-emerald-700 bg-emerald-600 p-4 space-y-3 shadow-[0_14px_30px_rgba(16,185,129,0.22)]">
        <div class="flex gap-3 items-start">
          <span class="${Y} text-white" aria-hidden="true">🕌</span>
          <span class="min-w-0 flex-1">
            <span class="block font-extrabold text-white text-sm">สแกนละหมาด</span>
            <span class="block text-xs text-emerald-50/85 mt-1">ต้องได้รับสิทธิ์สแกนจากแอดมินก่อนใช้งาน</span>
          </span>
        </div>
        <button id="scan-launcher-prayer-request" type="button" class="w-full py-3 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-700 text-sm font-extrabold shadow-md transition active:scale-[0.99]">
          ขอสิทธิ์สแกนละหมาด
        </button>
      </div>
      `}

      <button id="scan-launcher-leave" type="button" class="${r.leave.card}">
        <span class="${r.leave.icon}" aria-hidden="true">🚪</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${r.leave.title} text-sm">ตรวจใบอนุญาตออกนอกห้อง</span>
          <span class="block text-xs ${r.leave.sub} mt-1">เปิดหน้าเดิมสำหรับสแกน QR ตรวจสถานะใบอนุญาต</span>
        </span>
      </button>

      <button id="scan-launcher-score" type="button" class="${r.score.card}">
        <span class="${r.score.icon}" aria-hidden="true">📷</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${r.score.title} text-sm">สแกนบันทึกคะแนน</span>
          <span class="block text-xs ${r.score.sub} mt-1">เลือกห้องและคอลัมน์ แล้วสแกน QR นักเรียนเพื่อกรอกคะแนนต่อเนื่อง</span>
        </span>
      </button>
    </div>
  `,(m=n.querySelector("#scan-launcher-attendance"))==null||m.addEventListener("click",async()=>{s();const{openAttendanceScanSetup:E}=await f(async()=>{const{openAttendanceScanSetup:j}=await import("./teacher-views-attendance-C31WiJPz.js");return{openAttendanceScanSetup:j}},__vite__mapDeps([14,1,2,3,15,8]));E(t)}),(x=n.querySelector("#scan-launcher-leave"))==null||x.addEventListener("click",()=>{s(),M("student-leave-scanner")}),(b=n.querySelector("#scan-launcher-score"))==null||b.addEventListener("click",async()=>{s();const{openScoreScannerPickClass:E}=await f(async()=>{const{openScoreScannerPickClass:j}=await import("./score-qr-scanner-SDrghEsT.js");return{openScoreScannerPickClass:j}},__vite__mapDeps([11,2,3,1]));E(t)}),(h=n.querySelector("#scan-launcher-prayer-open"))==null||h.addEventListener("click",async()=>{s();const{renderStudentPrayerScanner:E}=await f(async()=>{const{renderStudentPrayerScanner:j}=await import("./student-views-DJMSwDcA.js");return{renderStudentPrayerScanner:j}},__vite__mapDeps([43,1,44,3,20,2,8,28,15,6,7,10,25,22]));E(t)}),(g=n.querySelector("#scan-launcher-prayer-request"))==null||g.addEventListener("click",async()=>{const E=n.querySelector("#scan-launcher-prayer-request");E.disabled=!0,E.textContent="กำลังส่งคำขอ...";const j=["ขอสิทธิ์สแกนละหมาด",`ชื่อครู: ${t.full_name||"-"}`,`รหัสครู: ${t.teacher_code||"-"}`,`กลุ่มสาระ: ${t.dept||"-"}`,"","ต้องการใช้งานปุ่มกล้องกลางเพื่อสแกนละหมาด"].join(`
`);try{await vt({profileId:t.profile_id,senderRole:"teacher",senderName:t.full_name||t.teacher_code||"คุณครู",category:"suggestion",message:j}),L("ส่งคำขอสิทธิ์สแกนละหมาดถึงแอดมินแล้ว","success"),s()}catch(v){E.disabled=!1,E.textContent="ขอสิทธิ์สแกนละหมาด",L((v==null?void 0:v.code)==="FEEDBACK_LIMIT_REACHED"?`ส่งความคิดเห็นครบโควต้าเดือนนี้แล้ว (${v.limit} ครั้ง/เดือน)`:"ส่งคำขอไม่สำเร็จ กรุณาลองใหม่",(v==null?void 0:v.code)==="FEEDBACK_LIMIT_REACHED"?"warning":"error")}})}window._openTeacherScanLauncher=nt;async function bn(){if("serviceWorker"in navigator)try{await navigator.serviceWorker.register("/pp5online/sw.js",{scope:"/pp5online/"})}catch{}}function gn(){if(document.getElementById("notify-banner"))return;const e=document.createElement("div");e.id="notify-banner",e.className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[80] w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-indigo-100 p-4 flex items-center gap-3 animate-fade",e.innerHTML=`
    <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">🔔</div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-gray-800">เปิดการแจ้งเตือน?</p>
      <p class="text-xs text-gray-400 mt-0.5">แจ้งก่อนเข้าสอนตามที่ตั้งค่าไว้</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <button id="notify-deny" class="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">ไม่</button>
      <button id="notify-allow" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition">เปิด</button>
    </div>`,document.body.appendChild(e),e.querySelector("#notify-deny").addEventListener("click",()=>{e.remove(),localStorage.setItem("pp5_notify_dismissed","1")}),e.querySelector("#notify-allow").addEventListener("click",async()=>{e.remove(),await Notification.requestPermission()==="granted"&&(L("เปิดการแจ้งเตือนแล้ว ✅","success"),t!=null&&t.id&&await st(t.id),t!=null&&t.profile_id&&Ue(t.profile_id))}),setTimeout(()=>e.remove(),12e3)}async function st(e){var s,n,o;if(!(!("Notification"in window)||Notification.permission!=="granted"))try{const a=await V().catch(()=>({})),d=parseInt(a.notifyBeforeMinutes)||10,l=parseInt(a.academicYear??2568),r=parseInt(a.semester??1),[i,p,c,m]=await Promise.all([ve(e,l,r).catch(()=>[]),he(e).catch(()=>[]),Be().catch(()=>[]),ee(e).catch(()=>[])]),x=new Date,b=x.getDay(),h=x.getHours()*60+x.getMinutes(),g={};p.forEach(u=>{g[u.teacher_schedule_id]||(g[u.teacher_schedule_id]=[]),g[u.teacher_schedule_id].push(u.class_id)});const E=Object.fromEntries(m.map(u=>[u.id,u])),j=Object.fromEntries(c.map(u=>[u.period_no,u]));(window._notifyTimeouts??[]).forEach(u=>clearTimeout(u)),window._notifyTimeouts=[];const v=i.filter(u=>u.day_of_week===b&&(g[u.id]??[]).length>0).map(u=>({...u,linkedClasses:(g[u.id]??[]).map(S=>E[S]).filter(Boolean),period:j[u.period_no]}));let $=0;for(const u of v){if(!((s=u.period)!=null&&s.start_time))continue;const[S,k]=u.period.start_time.split(":").map(Number),y=S*60+k-d,_=y-h;if(_<=0)continue;const R=((o=(n=u.linkedClasses[0])==null?void 0:n.master_subjects)==null?void 0:o.subject_name)??"วิชา",w=u.linkedClasses.map(B=>{var P;const D=B.classroom_id?(P=window._classroomMapGlobal)==null?void 0:P[B.classroom_id]:null;return B.class_name+(D?` 📍${D.building} ${D.room_number}`:"")}).join(", "),C=u.period.start_time.substring(0,5),T=setTimeout(async()=>{var P;const B=await((P=navigator.serviceWorker)==null?void 0:P.ready.catch(()=>null)),D={body:`${R} · ${w}
คาบ ${u.period_no} เวลา ${C}`,icon:"/pp5online/vite.svg",badge:"/pp5online/vite.svg",tag:`class-${u.id}-${y}`,requireInteraction:!1,silent:!1};B?B.showNotification(`🔔 อีก ${d} นาที — คาบถัดไป`,D):new Notification(`🔔 อีก ${d} นาที — คาบถัดไป`,D)},_*6e4);window._notifyTimeouts.push(T),$++}$>0&&L(`ตั้งแจ้งเตือน ${$} คาบสำหรับวันนี้ 🔔`,"info")}catch{}}async function yn(e){"Notification"in window&&(await bn(),Notification.permission==="granted"?(await st(e),t!=null&&t.profile_id&&Ue(t.profile_id)):Notification.permission==="default"&&(localStorage.getItem("pp5_notify_dismissed")||setTimeout(gn,2e3)))}async function vn(){try{const{data:e}=await q.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(!e)return;const{data:s}=await q.from("sports_portal_settings").select("teacher_shirt_request_enabled").eq("event_id",e.id).maybeSingle();if(!(s!=null&&s.teacher_shirt_request_enabled))return;const{data:n}=await q.from("sports_shirt_teacher_requests").select("id").eq("event_id",e.id).eq("teacher_id",t.id).maybeSingle();if(n)return;hn()}catch{}}function hn(){var s;(s=document.getElementById("shirt-size-reminder-popup"))==null||s.remove();const e=document.createElement("div");e.id="shirt-size-reminder-popup",e.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-pink-500 to-rose-500 px-6 py-6 text-center">
        <div class="text-4xl mb-2">👕</div>
        <h3 class="text-white font-bold text-base">ยังไม่ได้แจ้งไซซ์เสื้อกีฬาสี</h3>
        <p class="text-white/80 text-xs mt-1">ฝ่ายที่รับผิดชอบต้องการสรุปยอดภายในสัปดาห์หน้า กรุณาแจ้งไซซ์โดยเร็ว</p>
      </div>
      <div class="p-6">
        <button id="ssrp-go"
          class="w-full py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm shadow-md transition mb-2">
          👕 แจ้งไซซ์เสื้อตอนนี้
        </button>
        <button id="ssrp-close"
          class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">
          ภายหลัง
        </button>
      </div>
    </div>`,document.body.appendChild(e),e.querySelector("#ssrp-go").addEventListener("click",()=>{e.remove(),f(()=>import("./sports-portals.js_v_10.22-BrIjazIR.js").then(n=>n.p),__vite__mapDeps([4,1,3,5,6,7])).then(n=>{var o;return(o=n.openTeacherShirtSizeModal)==null?void 0:o.call(n,t)})}),e.querySelector("#ssrp-close").addEventListener("click",()=>e.remove())}async function wn(){try{const e=await V().catch(()=>({})),s=parseInt(e.academicYear??2568),n=parseInt(e.semester??1),[o,a,d]=await Promise.all([ee(t.id).catch(()=>[]),ve(t.id,s,n).catch(()=>[]),he(t.id).catch(()=>[])]);if(!o.length)return;if(!a.length){Re("no_schedule");return}const l=new Set(d.map(i=>i.class_id)),r=o.filter(i=>!l.has(i.id));r.length>0&&Re("has_unlinked",r.length,r.map(i=>i.id))}catch{}}function Re(e,s=0,n=[]){var d;(d=document.getElementById("sched-link-prompt"))==null||d.remove();const o=e==="no_schedule",a=document.createElement("div");a.id="sched-link-prompt",a.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",a.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br ${o?"from-indigo-500 to-purple-500":"from-amber-400 to-orange-400"} px-6 py-6 text-center">
        <div class="text-4xl mb-2">${o?"🗓️":"🔗"}</div>
        <h3 class="text-white font-bold text-base">${o?"ยังไม่มีตารางสอน":`มี ${s} ห้องที่ยังไม่เชื่อมโยง`}</h3>
        <p class="text-white/80 text-xs mt-1">${o?"สร้างตารางสอนเพื่อรับสิทธิ์การแจ้งเตือนและการเรียงห้อง":"เชื่อมโยงห้องเรียนกับตารางสอนเพื่อใช้ฟีเจอร์เต็มประสิทธิภาพ"}</p>
      </div>
      <div class="p-6">
        <div class="space-y-2 mb-5">
          ${["แจ้งเตือนวันนี้สอนวิชาอะไร กี่โมง","Countdown นับถอยหลังก่อนเข้าสอน","เรียงห้องเรียนตามเวลาที่ใกล้ที่สุด","แสดงวัน/คาบบนการ์ดแต่ละห้อง"].map(l=>`<p class="text-xs text-gray-500">✅ ${l}</p>`).join("")}
        </div>
        <button id="slp-go"
          class="w-full py-3 rounded-2xl ${o?"bg-indigo-600 hover:bg-indigo-700":"bg-amber-500 hover:bg-amber-600"}
                 text-white font-bold text-sm shadow-md transition mb-2">
          ${o?"🗓️ สร้างตารางสอนตอนนี้":"🔗 ไปเชื่อมโยงห้องเรียน"}
        </button>
        <button id="slp-close"
          class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">
          ภายหลัง
        </button>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#slp-go").addEventListener("click",()=>{a.remove(),o?window._navTo("schedule-builder"):n.length===1&&window._openCombinedEdit?(window._navTo("my-classes"),setTimeout(()=>{var l;return(l=window._openCombinedEdit)==null?void 0:l.call(window,n[0],"schedule")},400)):window._navTo("my-classes")}),a.querySelector("#slp-close").addEventListener("click",()=>a.remove())}window._openScheduleLinkModal=async e=>{var d,l,r;const s=(d=window._classCache)==null?void 0:d[e],n=(l=window._classColorCache)==null?void 0:l[e],o=(s==null?void 0:s.class_name)??"—",a=s==null?void 0:s.master_subjects;try{L("กำลังโหลด...","info");const i=await V().catch(()=>({})),p=parseInt(i.academicYear??2568),c=parseInt(i.semester??1),[m,x,b]=await Promise.all([ve(t==null?void 0:t.id,p,c).catch(()=>[]),he(t==null?void 0:t.id).catch(()=>[]),Be().catch(()=>[])]);if(!m.length){L("ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อนครับ","error");return}const h=new Set(x.filter(y=>y.class_id===e).map(y=>y.teacher_schedule_id)),g=new Set(h),E=Object.fromEntries(b.map(y=>[y.period_no,y])),j=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],v={};x.filter(y=>y.class_id!==e).forEach(y=>{var R,w;const _=(R=window._classCache)==null?void 0:R[y.class_id];_&&(v[y.teacher_schedule_id]||(v[y.teacher_schedule_id]=[]),v[y.teacher_schedule_id].push({className:_.class_name??"—",subjectName:((w=_.master_subjects)==null?void 0:w.subject_name)??"—"}))});const $=(n==null?void 0:n.soft)??"#f0fdf4",u=(n==null?void 0:n.border)??"#d1fae5",S=(n==null?void 0:n.text)??"#065f46";(r=document.getElementById("sched-link-modal"))==null||r.remove();const k=document.createElement("div");k.id="sched-link-modal",k.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4";const A=(y,_)=>{const R=E[y.period_no],w=R?`${R.start_time.substring(0,5)} – ${R.end_time.substring(0,5)}`:"",C=y.span_periods>1?`–${y.period_no+y.span_periods-1}`:"",T=v[y.id]??[],B=T.length>0&&!_;let D,P;_?(D="border-emerald-400 bg-emerald-50 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]",P='<span class="text-xl flex-shrink-0 mt-0.5">✅</span>'):B?(D="border-gray-200 bg-gray-50 opacity-70 cursor-pointer",P='<span class="text-xl flex-shrink-0 mt-0.5">🔒</span>'):(D="border-gray-200 bg-white hover:border-gray-300",P='<span class="text-xl flex-shrink-0 mt-0.5">⬜</span>');const N=T.map(U=>`${U.subjectName} (${U.className})`).join(", ");return`
      <button type="button" class="slm-card w-full text-left p-4 rounded-2xl border-2 transition-all ${D}"
        data-id="${y.id}" data-sel="${_?"1":"0"}" data-locked="${B?"1":"0"}"
        data-others="${N.replace(/"/g,"&quot;")}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            <p class="text-base font-bold text-gray-800">${j[y.day_of_week]} · คาบ ${y.period_no}${C}</p>
            <p class="text-sm text-gray-500 mt-0.5">${w}</p>
            ${y.class_name?`<p class="text-base font-semibold mt-1" style="color:${S}">${y.class_name}</p>`:""}
            ${T.length>0?`<p class="text-[11px] text-amber-600 mt-1.5">⚠️ เชื่อมกับ: ${N}</p>`:""}
          </div>
          ${P}
        </div>
      </button>`};k.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>

        <!-- Header พร้อมสีห้อง -->
        <div class="px-5 pt-5 pb-4 border-b rounded-t-2xl flex-shrink-0"
          style="background:${$}; border-color:${u}">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-wider mb-1" style="color:${S}">🔗 เชื่อมโยงตารางสอน</p>
              <h3 class="text-xl font-extrabold leading-tight" style="color:${S}">${o}</h3>
              ${a!=null&&a.subject_name?`<p class="text-sm mt-0.5" style="color:${S};opacity:.75">${a.subject_name}</p>`:""}
            </div>
            <button id="slm-close" class="text-2xl leading-none flex-shrink-0 opacity-60 hover:opacity-100 transition"
              style="color:${S}">×</button>
          </div>
        </div>

        <!-- Slot list -->
        <div class="px-4 py-3 overflow-auto flex-1">
          <p class="text-xs text-gray-400 mb-3">แตะการ์ดเพื่อเลือก/ยกเลิก (เลือกได้หลายคาบ)</p>
          <div id="slm-list" class="space-y-2">
            ${m.map(y=>A(y,g.has(y.id))).join("")}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-4 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
          <button id="slm-save"
            class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition">
            บันทึกการเชื่อมโยง
          </button>
        </div>
      </div>`,document.body.appendChild(k),k.querySelector("#slm-list").addEventListener("click",y=>{var B;const _=y.target.closest(".slm-card");if(!_)return;const R=parseInt(_.dataset.id),w=_.dataset.sel==="1",C=_.dataset.locked==="1",T=m.find(D=>D.id===R);if(C&&!w){(B=document.getElementById("slm-confirm-popup"))==null||B.remove();const D=document.createElement("div");D.id="slm-confirm-popup",D.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-6";const P=_.dataset.others;D.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">⚠️</div>
            <h4 class="font-bold text-gray-800 mb-2">คาบนี้ถูกเชื่อมโยงแล้ว</h4>
            <p class="text-xs text-gray-500 leading-relaxed mb-5">
              คาบนี้ถูกเชื่อมโยงกับ<br/>
              <span class="font-semibold text-amber-700">${P}</span><br/>
              ต้องการเชื่อมโยงเพิ่มเข้า<br/>
              <span class="font-semibold text-indigo-700">${o}</span> ด้วยหรือไม่?
            </p>
            <div class="flex gap-2">
              <button id="slm-conf-no"
                class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">
                ยกเลิก
              </button>
              <button id="slm-conf-yes"
                class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
                ยืนยัน
              </button>
            </div>
          </div>`,document.body.appendChild(D),D.querySelector("#slm-conf-no").addEventListener("click",()=>D.remove()),D.querySelector("#slm-conf-yes").addEventListener("click",()=>{D.remove(),g.add(R),_.outerHTML=A(T,!0)});return}w?g.delete(R):g.add(R),_.outerHTML=A(T,!w)}),k.querySelector("#slm-close").addEventListener("click",()=>k.remove()),k.addEventListener("click",y=>{y.target===k&&k.remove()}),k.querySelector("#slm-save").addEventListener("click",async()=>{const y=k.querySelector("#slm-save");y.disabled=!0,y.textContent="⏳ กำลังบันทึก...";try{const _=[...g].filter(w=>!h.has(w)),R=[...h].filter(w=>!g.has(w));await Promise.all([..._.map(w=>xt(e,w)),...R.map(w=>ft(e,w))]),L("บันทึกการเชื่อมโยงแล้ว ✅","success"),k.remove(),window._navTo("my-classes")}catch(_){L("เกิดข้อผิดพลาด: "+(_.message??""),"error"),y.disabled=!1,y.textContent="บันทึกการเชื่อมโยง"}})}catch(i){L("โหลดข้อมูลไม่ได้: "+(i.message??""),"error")}};document.addEventListener("DOMContentLoaded",async()=>{var i,p,c,m,x,b,h,g,E,j,v,$;Rt();const e=Tt();let s=!1;if(e)try{if(ue(!0),await Pt(q),t=e.profile_id?await J(e.profile_id).catch(()=>null)??await Le(e.id).catch(()=>e):await Le(e.id).catch(()=>e),!(t!=null&&t.id)||(t==null?void 0:t.profile_id)!==e.profile_id)throw new Error("ไม่พบข้อมูลครูเป้าหมายของเซสชันสวมบทบาท");const{data:u}=await q.from("profiles").select("role,is_also_admin").eq("id",e.profile_id).maybeSingle();if(F=(u==null?void 0:u.is_also_admin)===!0,se=(u==null?void 0:u.role)==="admin"||F,await we(),await Fe("teacher",t??{}),H=t!=null&&t.id?await ae(t.id).catch(()=>[]):[],t!=null&&t.position||(i=t==null?void 0:t.positions)!=null&&i.length){const y=(p=t.positions)!=null&&p.length?t.positions:[t.position];O=await $e(y).catch(()=>({}))}await re(),Te(t),Qe(t);const S=document.getElementById("impersonation-banner"),k=document.getElementById("impersonation-name"),A=document.getElementById("impersonation-exit");S&&k&&(k.textContent=`${(t==null?void 0:t.full_name)??e.full_name} (${(t==null?void 0:t.teacher_code)??e.teacher_code??""})`,S.classList.remove("hidden"),S.classList.add("flex")),A&&A.addEventListener("click",async()=>{try{A.disabled=!0,A.textContent="กำลังกลับสู่บัญชีแอดมิน...",await Ce(q),window.location.replace("dashboard.html")}catch(y){console.error("Cannot end impersonation:",y),A.disabled=!1,A.textContent="← ออกจากโหมดนี้",L("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}}),s=!0}catch(u){console.error("Invalid impersonation session:",u),At(),await q.auth.signOut(),L("เซสชันสวมบทบาทไม่ถูกต้อง กรุณาเข้าสู่ระบบแอดมินใหม่","error"),setTimeout(()=>window.location.replace("index.html"),1e3);return}if(!s){const u=await Ut();if(!u)return;if(await _e(u.user.id),H=t?await ae(t.id).catch(()=>[]):[],t!=null&&t.position||(c=t==null?void 0:t.positions)!=null&&c.length){const S=(m=t.positions)!=null&&m.length?t.positions:[t.position];O=await $e(S).catch(()=>({}))}await re(),Te(t),bt("teachers").catch(()=>{}),gt("teacher").catch(()=>{})}xe(),fe(),Yt(),t!=null&&t.id&&on(t.id),t!=null&&t.id&&wn(),t!=null&&t.id&&vn(),t!=null&&t.id&&yn(t.id),Dt(),cn(),pn(),t!=null&&t.profile_id&&at({profileId:t.profile_id,role:"teacher",name:t.full_name}),t!=null&&t.id&&f(()=>import("./teacher-views-donor-chat-xe-Dhac5.js"),__vite__mapDeps([45,1,2,3,8,6,37,7,4,5,20,21,38,39,22,40,41,10])).then(u=>{u.injectDonorChatWidget(t),ie(Z)}),en(),ie(Z);const n=document.getElementById("app-version");if(n&&(n.textContent=`v${jt}`,se)){n.classList.add("cursor-pointer","hover:underline");const u=(t==null?void 0:t.profile_id)||((b=(x=(await q.auth.getSession()).data.session)==null?void 0:x.user)==null?void 0:b.id);u&&n.addEventListener("click",()=>Se(u,!0,!0))}!s&&(t!=null&&t.profile_id)&&se&&Se(t.profile_id,!1,!0),window.addEventListener("teacher-nav",async u=>{const{view:S,classId:k}=u.detail??{};if(S==="class-detail-sv"&&k){try{const A=await yt(k);if(A){window._openStudentManager=()=>Promise.resolve(),window._openCombinedEditModal=()=>{},window._classCache={[A.id]:A};const{renderClassDetail:y}=await f(async()=>{const{renderClassDetail:_}=await import("./teacher-views-BzTMalao.js");return{renderClassDetail:_}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));if(await y(t,k,{supervisorMode:!0,classes:[A],defaultTab:"attendance"}),window._svBackToDetail){const _=window._svBackToDetail,R=window._backToClasses;window._backToClasses=()=>{const w=document.getElementById("main-content-bak"),C=document.getElementById("main-content");C&&(C.id="cd-tab-content"),w&&(w.id="main-content"),_()}}setTimeout(()=>{document.querySelectorAll(".cd-tab").forEach(_=>{_.dataset.tab==="students"&&(_.style.display="none")}),document.querySelectorAll("button").forEach(_=>{const R=_.textContent.trim();["ทำสำเนา","แก้ไข","ลบ"].some(w=>R.includes(w))&&(_.style.display="none"),R.includes("ปพ.5")&&!R.includes("ดูภาพรวม")&&(_.innerHTML="📋 ดูภาพรวม ปพ.5")})},200)}}catch(A){console.error("supervisor class view error:",A)}return}k&&(window._sv_classId=k),M(S??"overview")}),document.querySelectorAll("[data-nav]").forEach(u=>{u.addEventListener("click",S=>{S.preventDefault(),M(u.dataset.nav)})}),(h=document.getElementById("btn-quick-attendance"))==null||h.addEventListener("click",u=>{u.preventDefault(),ge("attendance")}),(g=document.getElementById("btn-quick-grades"))==null||g.addEventListener("click",u=>{u.preventDefault(),ge("grades")}),(E=document.getElementById("btn-quick-leave-scanner"))==null||E.addEventListener("click",u=>{u.preventDefault(),nt()}),(j=document.getElementById("menu-dashboard"))==null||j.addEventListener("click",async u=>{u.preventDefault();const{openDashboardRoomPicker:S}=await f(async()=>{const{openDashboardRoomPicker:k}=await import("./teacher-views-dashboard-MihUIb1e.js");return{openDashboardRoomPicker:k}},__vite__mapDeps([35,2,3]));S(t,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})});const o=document.getElementById("sidebar"),a=document.getElementById("sidebar-overlay");(v=document.getElementById("btn-menu"))==null||v.addEventListener("click",()=>{o.classList.toggle("-translate-x-full"),a.classList.toggle("hidden")}),a==null||a.addEventListener("click",()=>{o.classList.add("-translate-x-full"),a.classList.add("hidden")}),($=document.getElementById("btn-logout"))==null||$.addEventListener("click",async()=>{if(s){try{await Ce(q),window.location.replace("dashboard.html")}catch(u){console.error("Cannot end impersonation:",u),L("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}return}await q.auth.signOut(),Ot(),L("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}),ue(!1);const d=new URLSearchParams(window.location.search),l=d.get("setup")==="1",r=d.get("view");l?(M("setup"),history.replaceState({},"","teacher.html")):r&&Ge[r]?(window._pendingQRTab=d.get("tab")||null,M(r)):M("overview")});export{z as _,pe as a,Je as b};
