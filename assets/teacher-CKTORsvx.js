const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-B31NLFxx.js","assets/ui-MMtcTwtt.js","assets/api-CWYJTdOa.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/sync-CtuAgrx7.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-bZoYj54P.js","assets/teacher-views-classes-DgW_t4uH.js","assets/browser-JP79f-a9.js","assets/pp5-doc-WG5YzWe3.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js","assets/teacher-views-grades-CXFdJBGK.js","assets/regrade-api-JnlABjxU.js","assets/score-qr-scanner-CfDHgG4i.js","assets/teacher-views-attendance-DkKZdoEb.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/views-BHzV9Ke0.js","assets/leave-monitor.js_v_10.18-DU3VpOVf.js","assets/workload-scheduler-C9WpzjbH.js","assets/import-DZhJ-DY2.js","assets/theme-qDnPEUQn.js","assets/azfutsal-modal-CITqdeT7.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azizgames-modal-d_408eQI.js","assets/sports-portals.js_v_10.22-0gLUuL_V.js","assets/sports-awards-admin-6oCPrlSb.js","assets/teacher-views-flashcards-VQwdZYvD.js","assets/teacher-views-certificates-Dla4IuOS.js","assets/certificate-engine-BrPYUHds.js","assets/certificate-editor-DpGkilqh.js","assets/teacher-views-quiz-banks-CQPj6WDR.js","assets/quiz-api-BIDUVPR5.js","assets/katex-loader-DUJObfzT.js","assets/teacher-views-exam-docs.js_v_10.22-P1naxcKL.js","assets/teacher-views-leave-scanner.js_v_10.18-De-ELtd1.js","assets/teacher-views-smart-classroom-DZSSjXJI.js","assets/teacher-Cbd3fiuS.js","assets/promptpay-CIuxvxIA.js","assets/push-notify-CAl1Kmx3.js","assets/wen-sso-CcN06Rhh.js","assets/sports-portals.js_v_10.22-7yFaQki7.js","assets/tutorial-D2C4vUJE.js","assets/terangganu-api-C1IjZK4l.js","assets/teacher-views-quiz-monitor-BXd4d18R.js","assets/teacher-views-quiz-analytics-D6GQhJUz.js","assets/teacher-views-dashboard-B0a46sXh.js","assets/lesson-plan-ai-workspace-BgLV29Ng.js","assets/supervisor-DNXYl8Fo.js","assets/student-views-BkdO1EKt.js","assets/student-api-BkkkCebX.js","assets/teacher-views-donor-chat-DuEU7Pt_.js"])))=>i.map(i=>d[i]);
import{s as C}from"./supabase-BV-W2lsh.js";/* empty css             */import{a as L,_ as g,g as G,s as ge,i as ut,c as xt,d as Ae,e as ft,f as bt}from"./ui-MMtcTwtt.js";import{getMyClasses as ae,getSystemConfig as O,createSubject as ze,getMasterSubjects as ue,updateSubjectAtomic as gt,getCourseDocPage2 as yt,saveCourseDocPage2 as vt,deleteSubject as ht,getTeacherPackageAccess as wt,getMyPaymentRequests as _t,createPaymentRequest as _e,uploadPaymentSlip as Ue,getMySchedule as ke,getClassScheduleLinks as Ee,getPeriods as Qe,linkClassToSchedule as kt,unlinkClassFromSchedule as Et,getMyTeacherProfile as J,getTeacherById as je,getMyHomeroomRooms as le,getTeacherPositionPermissions as Me,updateLastSeen as St,logLogin as Lt,getClassByIdFull as $t,getMySubjects as xe,getMyDonationRequests as Ge,submitAppFeedback as It,getPendingExamRequestCount as Ct,getActiveAnnouncements as qt,getUnreadNotifications as Tt,markNotificationsRead as Pt}from"./api-CWYJTdOa.js";import{p as We}from"./promptpay-CIuxvxIA.js";import{COPY_TEMPLATE_CONFIG as Re,getCopyTemplateId as At}from"./sync-CtuAgrx7.js";import{a as Ye}from"./theme-qDnPEUQn.js";import{A as jt,o as Mt}from"./azfutsal-modal-CITqdeT7.js";import{b as Rt}from"./anti-pull-refresh-BGrI1pMY.js";import{i as Dt,e as Ke}from"./push-notify-CAl1Kmx3.js";import{_teacherPositionList as Bt,_teacherPositionLabel as Nt}from"./teacher-views-utils-bZoYj54P.js";import{b as Ot,c as Vt}from"./wen-sso-CcN06Rhh.js";import{o as Je}from"./azizgames-modal-d_408eQI.js";import{getImpersonationContext as Ht,validateImpersonation as Ft,endImpersonation as De,clearImpersonation as zt}from"./impersonation-0xVfgYVY.js";import{o as Ut,r as Qt,a as Gt,b as Wt,c as Yt,d as Kt,e as Ze,f as Xe,g as Jt}from"./sports-portals.js_v_10.22-7yFaQki7.js";import{renderTutorial as Zt}from"./tutorial-D2C4vUJE.js";import{g as Xt}from"./terangganu-api-C1IjZK4l.js";import{g as en}from"./regrade-api-JnlABjxU.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./sports-awards-admin-6oCPrlSb.js";import"./print-overlay-BVfxEd6n.js";import"./storage-CuUjCgvI.js";let t=null,F=[],U=!1,ie=!1,K=!1,N={},z={enabled:!0,teacher_menu:!0,student_menu:!0,public_page:!0};window._pp5DonorTierIndex=0;window._pp5SystemCfg={};async function Se(){try{const{data:e,error:n}=await C.from("settings").select("value").eq("key","sports_visibility").maybeSingle();!n&&(e!=null&&e.value)&&(z={...z,...e.value})}catch{}return z}async function tn(){ge(!0);const{data:{session:e}}=await C.auth.getSession();return e||(window.location.replace("index.html"),null)}async function Le(e){var l,i,r;const[n,s,o]=await Promise.all([J(e),C.auth.getSession(),C.from("profiles").select("role, is_also_admin").eq("id",e).maybeSingle()]);t=n,t&&(t.auth_email=((r=(i=(l=s==null?void 0:s.data)==null?void 0:l.session)==null?void 0:i.user)==null?void 0:r.email)??""),await Ye("teacher",t??{});const a=o==null?void 0:o.data;U=(a==null?void 0:a.is_also_admin)===!0,K=(a==null?void 0:a.role)==="admin"||U;const d=document.querySelector("header .flex.items-center.gap-3:last-child");if(U&&d&&!document.getElementById("btn-switch-admin")){const p=document.createElement("a");p.id="btn-switch-admin",p.href="dashboard.html",p.title="สลับไปหน้าแอดมิน",p.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 shadow-sm border border-emerald-200/50 mr-1",p.innerHTML="<span>⚙️</span><span>สลับเป็นแอดมิน</span>",d.insertBefore(p,d.firstChild)}await Se(),et(t)}function et(e){const n=document.querySelector("#sidebar nav"),s=Bt(e),o=Nt(e);if(s.length>0&&n&&!document.getElementById("btn-sv-mode")){const c=document.createElement("button");c.id="btn-sv-mode",c.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition w-full text-left text-emerald-200 hover:bg-emerald-800 hover:text-white",c.style.color="#93c5fd",c.innerHTML=`<span>📊</span><span>Dashboard ${o}</span>`,c.onclick=Ie;const u=n.querySelector('[data-nav="work-calendar-view"]');u?u.insertAdjacentElement("afterend",c):n.insertBefore(c,n.firstChild)}nn();const a=(e==null?void 0:e.full_name)??"ครูผู้สอน",d=e!=null&&e.teacher_code?`รหัส ${e.teacher_code}`:"",l=(e==null?void 0:e.image_url)??"",i=document.getElementById("t-avatar");l?i.innerHTML=`<img src="${l}" class="w-full h-full object-cover" />`:i.textContent=a.charAt(0).toUpperCase(),document.getElementById("t-name").textContent=a,document.getElementById("t-code").textContent=d,e!=null&&e.id&&gn(e.id),document.getElementById("user-name").textContent=a;const r=document.getElementById("user-role-label");r&&(r.textContent=s.length?o:"ครูผู้สอน");const p=document.getElementById("user-avatar");l?p.innerHTML=`<img src="${l}" class="w-full h-full object-cover" />`:p.textContent=a.charAt(0).toUpperCase()}function nn(){const e=document.getElementById("menu-sports-shortcut");if(!e)return;const n=z.enabled!==!1&&z.teacher_menu!==!1;e.classList.toggle("hidden",!n)}function be(e,n){if(e.length===1){n(e[0].main_room);return}const s=document.createElement("div");s.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.querySelectorAll(".room-pick-btn").forEach(o=>o.addEventListener("click",()=>{s.remove(),n(o.dataset.room)})),s.querySelector("#room-pick-cancel").addEventListener("click",()=>s.remove())}const tt={"announcements-view":()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderAnnouncementsView(t)),"work-calendar-view":()=>g(async()=>{const{renderWorkCalendarView:e,renderWorkCalendar:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderWorkCalendarView:e,renderWorkCalendar:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30])).then(({renderWorkCalendarView:e,renderWorkCalendar:n})=>N.work_calendar?n(t):e()),overview:()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderTeacherOverview(t,F)),"my-courses":()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderMyCourses(t)),"my-classes":()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderMyClasses(t)),attendance:()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderAttendance(t)),"life-skill-score":()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>{const n=F.filter(s=>s.category==="สามัญ");be(n,s=>e.renderLifeSkillScore(t,n.filter(o=>o.main_room===s)))}),"reading-score":()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>{const n=window._pendingReadingRoom;window._pendingReadingRoom=null,e.renderReadingScore(t,n)}),"prayer-score":()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>{const n=F.filter(s=>s.category==="ศาสนา");n.length===0?e.renderPrayerScore(t,[]):be(n,s=>e.renderPrayerScore(t,n.filter(o=>o.main_room===s)))}),"prayer-monitor":()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>{const n=F.filter(o=>o.category==="ศาสนา"),s=window._pendingPrayerMonitorRoom||null;window._pendingPrayerMonitorRoom=null,n.length===0?e.renderPrayerRoomMonitor(t,[]):s&&n.some(o=>o.main_room===s)?e.renderPrayerRoomMonitor(t,n,s):n.length===1?e.renderPrayerRoomMonitor(t,n,n[0].main_room):be(n,o=>e.renderPrayerRoomMonitor(t,n,o))}),grades:()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderGrades()),requests:()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderRequests(t)),schedule:()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderSchedule(t)),tutorial:()=>Zt(),flashcards:()=>g(()=>import("./teacher-views-flashcards-VQwdZYvD.js"),__vite__mapDeps([31,1,2,3,4,5,6,9])).then(e=>e.renderFlashcardDecks(t)),certificates:()=>g(()=>import("./teacher-views-certificates-Dla4IuOS.js"),__vite__mapDeps([32,1,33,3,8,34,14,9])).then(e=>e.renderCertificateManager(t)),"quiz-system":()=>g(()=>import("./teacher-views-quiz-banks-CQPj6WDR.js"),__vite__mapDeps([35,1,36,3,24,9,37])).then(e=>e.renderQuizBanks(t)),"exam-docs":()=>g(()=>import("./teacher-views-exam-docs.js_v_10.22-P1naxcKL.js"),__vite__mapDeps([38,2,3,4,5,6,1,8,9])).then(e=>e.renderExamDocuments(t)),sports:()=>{var s;const e=(s=t==null?void 0:t.positions)!=null&&s.length?t.positions:t!=null&&t.position?[t.position]:[],n=K||N.menu_sports_admin||e.includes("house_color_admin")||(t==null?void 0:t.staff_type)==="แอดมิน"||(t==null?void 0:t.position)==="admin";Je(n?{admin:!0,teacherName:t==null?void 0:t.full_name,teacherCode:t==null?void 0:t.teacher_code}:{})},"advisor-students":()=>Jt(t,F),"shirt-summary":()=>Xe(),"sports-fund-admin":()=>Ze(),"sports-overview-admin":()=>Kt(),"sports-competition-manager":()=>Yt(),"sports-evaluation":()=>Wt(),"shirt-vote-settings":()=>Gt(),"shirt-vote-dashboard":()=>Qt(),"my-team-workspace":()=>Ut(),"student-qr-print":()=>{const e=window._pendingQRClassId||null;window._pendingQRClassId=null,g(()=>import("./teacher-views-classes-DgW_t4uH.js").then(n=>n.t),__vite__mapDeps([10,1,2,3,4,5,6,11,7,12,13,8,9,14,15,16,17,18,19,20])).then(n=>n.renderStudentQRPrint(t,e,{isQrManager:ie}))},"student-leave-scanner":()=>{g(()=>import("./teacher-views-leave-scanner.js_v_10.18-De-ELtd1.js"),__vite__mapDeps([39,2,3,4,5,6,22,19,1,9])).then(e=>e.renderStudentLeaveScanner(t))},"smart-classroom":()=>{const e=window._pendingSmartClassroomId;window._pendingSmartClassroomId=null,g(()=>import("./teacher-views-smart-classroom-DZSSjXJI.js"),__vite__mapDeps([40,1,2,3,4,5,6,41,42,11,7,25,26,27,43,9,44,28,45,30,8,14,46,47,16,36,17,18,19,15,13,48,49,50,10,12,20,51])).then(n=>n.renderSmartClassroom(t,e))},"schedule-builder":()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderScheduleBuilder(t,()=>D("overview"))),profile:()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderProfile(t,F,dn)),setup:()=>g(()=>import("./teacher-views-B31NLFxx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.renderProfileSetup(t,F,ln))};let se="overview";async function D(e){if(!(t!=null&&t.id))try{const{data:{user:s}}=await C.auth.getUser();s!=null&&s.id&&(t=await J(s.id).catch(()=>null)??t)}catch{}if(document.body.classList.remove("sc-fullscreen"),window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),typeof window._cleanupLeaveScanner=="function")try{window._cleanupLeaveScanner()}catch{}if(typeof window._cleanupPrayerRoomMonitor=="function")try{window._cleanupPrayerRoomMonitor()}catch{}if(typeof window._cleanupAdvisorShirtPaymentScanner=="function")try{window._cleanupAdvisorShirtPaymentScanner()}catch{}if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}const n=tt[e];n&&(se=e,n()),pe(e)}window._navTo=D;window._goBack=()=>D("my-courses");window._refreshCurrentView=()=>D(se);window.addEventListener("pp5:open-sports-shirt-summary",()=>D("shirt-summary"));window.addEventListener("pp5:open-shirt-vote-settings",()=>D("shirt-vote-settings"));window.addEventListener("pp5:open-shirt-vote-dashboard",()=>D("shirt-vote-dashboard"));const $=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Q=(e,n)=>{const s=parseInt(e,10);return Number.isFinite(s)&&s>0?s:n};function sn(e){return[1,2,3,4].map(n=>(e[`donationGeminiKey${n}`]??"").trim()).filter(Boolean)}async function on(e,n,{maxTokens:s=1024}={}){var l,i,r,p,c;const{data:o,error:a}=await C.functions.invoke("gemini-proxy",{body:{keyType:"donation",prompt:n,maxTokens:s}});if(a)throw new Error(a.message??"Edge Function error");if(o!=null&&o.error)throw new Error(o.error.message??"Gemini error");return{text:((c=(p=(r=(i=(l=o==null?void 0:o.candidates)==null?void 0:l[0])==null?void 0:i.content)==null?void 0:r.parts)==null?void 0:p[0])==null?void 0:c.text)??"",keyIndex:1}}window._callDonationAI=on;window._getDonationGeminiKeys=sn;const $e=e=>{const n=String(e.donationSpecialFeatures??"").trim();return(n?n.split(`
`).map(a=>a.trim()).filter(Boolean).map(a=>{const d=a.split("|").map(p=>p.trim()),l=d[0]||"✨",i=d[1]||d[0]||a,r=parseInt(d[2])||1;return{icon:l,text:i,minTier:r}}):[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([a,d,l])=>({icon:a,text:d,minTier:l}))).filter(a=>a.text)},nt=(e,n,s)=>{var a;if(!s)return 0;const o=(a=[...n].map((d,l)=>({t:d,i:l})).reverse().find(({t:d})=>s>=d.amount))==null?void 0:a.i;return o!==void 0?o+1:0},fe=(e,n,s)=>{const o=String(e.donationStickerTiers??"").trim();return(o?o.split(`
`).map(i=>i.trim()).filter(Boolean).map(i=>{const[r,p,c,u,x]=i.split("|").map(_=>_.trim());return{amount:Q(r,0),sticker:p||"🏅",title:c||`ผู้สนับสนุน ${r||""} บาท`,note:u||"ขอบคุณที่ช่วยสนับสนุนการพัฒนาระบบครับ",color:x||""}}):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([i,r,p,c,u])=>({amount:i,sticker:r,title:p,note:c,color:u}))).filter(i=>i.amount>0).sort((i,r)=>i.amount-r.amount).map((i,r)=>{const p=e[`donationStickerImg${r+1}`]??"";return p&&/^https?:\/\//.test(p)?{...i,sticker:p}:i})},Be=e=>{if(!e)return"";const n=String(e.sticker??"");return`
    <div class="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-3 shadow-sm">
      ${/^https?:\/\//.test(n)?`<img src="${$(n)}" class="w-14 h-14 object-contain drop-shadow-md" />`:`<div class="w-14 h-14 flex items-center justify-center text-3xl">${$(n||"🏅")}</div>`}
      <div class="min-w-0">
        <p class="text-sm font-bold text-amber-900">${$(e.title)}</p>
        <p class="text-[11px] text-amber-700 leading-relaxed">${$(e.note)}</p>
      </div>
    </div>`},an=e=>`https://docs.google.com/spreadsheets/d/${encodeURIComponent(e)}/copy`;async function st(){var l;const e=await O().catch(()=>({})),n={start:[{key:"สามัญ",label:"📚 สามัญ"},{key:"ศาสนา",label:"🕌 ศาสนา"}],สามัญ:Re.filter(i=>i.category==="สามัญ"),ศาสนา:Re.filter(i=>i.category==="ศาสนา")},s=["start"];(l=document.getElementById("standalone-copy-modal"))==null||l.remove();const o=document.createElement("div");o.id="standalone-copy-modal",o.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`<div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div>
        <h3 class="text-xl font-bold text-pink-500 leading-tight">สร้างสำเนาไฟล์ ปพ5Online</h3>
        <p class="text-xs text-gray-400 mt-1">สำหรับใช้งานไฟล์ Google Sheet แบบเดิม</p>
      </div>
      <button id="copy-flow-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div id="copy-flow-app"></div>
  </div>`,document.body.appendChild(o);const a=o.querySelector("#copy-flow-app"),d=()=>{var p;const i=s[s.length-1],r=n[i]||[];a.innerHTML=`
      <div class="text-center text-lg text-gray-600 mb-4">${s.length===1?"เลือกหมวดหมู่":"เลือกกลุ่ม/ประเภท"}</div>
      <div class="flex flex-col gap-3">
        ${r.map(c=>{const u=c.defaultId?At(e,c.key):"";return u?`
            <a href="${an(u)}" target="_blank" rel="noopener noreferrer"
              class="w-full ${c.color||"bg-gradient-to-r from-pink-400 to-green-400"} text-white font-semibold py-3 rounded-2xl shadow-md hover:scale-[1.02] transition-all text-center block text-lg">
              🔗 เปิดไฟล์: ${$(c.label)}
            </a>`:`
            <button data-next="${$(c.key)}"
              class="copy-flow-next w-full bg-pink-200 hover:bg-pink-300 text-pink-700 font-medium py-3 rounded-2xl shadow text-lg transition-all">
              ${$(c.label)}
            </button>`}).join("")}
      </div>
      ${s.length>1?'<button id="copy-flow-back" class="mt-6 text-sm text-gray-400 underline hover:text-pink-400 transition-all">⬅️ ย้อนกลับ</button>':""}`,a.querySelectorAll(".copy-flow-next").forEach(c=>{c.addEventListener("click",()=>{s.push(c.dataset.next),d()})}),(p=a.querySelector("#copy-flow-back"))==null||p.addEventListener("click",()=>{s.length>1&&s.pop(),d()})};o.querySelector("#copy-flow-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",i=>{i.target===o&&o.remove()}),d()}window._openStandaloneCopyFlow=st;window._showQuotaFromOverview=()=>{Promise.all([ae((t==null?void 0:t.id)??null).catch(()=>[]),O().catch(()=>({}))]).then(([e,n])=>oe(e.length,null,n)).catch(()=>oe(0,null,{}))};window._openWenDuty=e=>{var s;(s=document.getElementById("wen-duty-modal"))==null||s.remove();const n=document.createElement("div");n.id="wen-duty-modal",n.className="fixed inset-0 z-[300] bg-white flex flex-col",n.innerHTML=`
    <div class="flex items-center justify-between px-4 py-2 bg-amber-600 text-white shadow flex-shrink-0">
      <span class="font-bold text-sm flex items-center gap-2">🛡️ ระบบเวรประจำวัน</span>
      <button id="wen-duty-close" class="text-white text-2xl leading-none px-2 hover:opacity-75">×</button>
    </div>
    <iframe src="${Ot(e)}" class="flex-1 w-full border-0"></iframe>`,document.body.appendChild(n),n.querySelector("#wen-duty-close").addEventListener("click",()=>n.remove())};window._openLifeSkillScore=e=>D("life-skill-score");window._openReligionScore=e=>D("prayer-score");window._openReligionPrayerMonitor=e=>{window._pendingPrayerMonitorRoom=e||null,D("prayer-monitor")};window._openReadingScore=()=>{window._pendingReadingRoom=null,D("reading-score")};window._openReadingScoreRoom=e=>{window._pendingReadingRoom=e,D("reading-score")};window._openReadingScorePicker=e=>{var o;let n=[];try{n=JSON.parse(e.replace(/&quot;/g,'"'))}catch{n=[]}if(!n.length){L("ยังไม่มีห้องเรียน — ลงทะเบียนห้องก่อนบันทึกคะแนน","warning");return}(o=document.getElementById("rsp-modal"))==null||o.remove();const s=document.createElement("div");s.id="rsp-modal",s.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",s.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800">📖 เลือกห้องบันทึกคะแนน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อ่านคิดวิเคราะห์และเขียน</p>
        </div>
        <button id="rsp-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
      </div>
      <div class="p-4 grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
        ${n.map(a=>`
        <button class="rsp-room px-3 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-800
                       text-sm font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition text-center"
          data-room="${a}">${a}</button>`).join("")}
      </div>
    </div>`,document.body.appendChild(s),s.querySelector("#rsp-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",a=>{a.target===s&&s.remove()}),s.querySelectorAll(".rsp-room").forEach(a=>{a.addEventListener("click",()=>{s.remove(),window._openReadingScoreRoom(a.dataset.room)})})};let re=null,ne=null;async function ye(){if(t)try{const e=await Ct(t.id),n=document.getElementById("badge-requests");if(n&&(e>0?(n.textContent=e>99?"99+":e,n.classList.remove("hidden")):n.classList.add("hidden")),re!==null&&e>re){const s=e-re;L(`🔔 มีคำร้องนักเรียนใหม่ ${s} รายการ`,"info")}re=e}catch{}}function ot(e){var l,i,r;const n=Math.max(0,Number(e)||0),s=n>99?"99+":String(n),o=document.getElementById("menu-regrade");(l=o==null?void 0:o.querySelector("[data-regrade-menu-badge]"))==null||l.remove(),o&&n>0&&o.insertAdjacentHTML("beforeend",`<span data-regrade-menu-badge class="ml-auto min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold inline-flex items-center justify-center">${s}</span>`);const a=document.getElementById("teacher-regrade-overview-tile");(i=a==null?void 0:a.querySelector("[data-icon-tile-badge]"))==null||i.remove(),a&&n>0&&a.insertAdjacentHTML("afterbegin",`<span data-icon-tile-badge class="absolute -top-1 right-1 z-10 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold flex items-center justify-center shadow">${s}</span>`);const d=(r=window._teacherOverviewSystems)==null?void 0:r.find(p=>p.key==="regrade");d&&(d.badge=n)}async function ve(){if(t)try{const{count:e,error:n}=await C.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",t.id).eq("status","จำนงแล้ว");if(n)throw n;const s=Number(e)||0;ot(s),ne!==null&&s>ne&&L(`🔔 มีคำร้องแก้ค้างเก่าใหม่ ${s-ne} รายการ`,"info"),ne=s}catch{}}function rn(){setInterval(()=>{document.visibilityState==="visible"&&(ye(),ve())},3e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(ye(),ve())})}async function ce(){var V,X,ee,Ce,qe,Te,Pe;const e=F.some(B=>B.category==="สามัญ"),n=(t==null?void 0:t.dept)==="THAI";let s=F.some(B=>B.category==="ศาสนา");const o=(B,H)=>Promise.resolve(B).catch(()=>H),[a,d,l,i,r,p,c,u,x,_,y]=await Promise.all([o(O(),{}),t?o(C.from("profiles").select("role").eq("id",t.profile_id).maybeSingle(),{data:null}):Promise.resolve({data:null}),o(C.rpc("get_terangganu_access"),{data:null}),o(C.from("sports_team_memberships").select("id,role,permissions").eq("profile_id",t==null?void 0:t.profile_id).eq("is_active",!0),{data:[]}),o(C.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),{data:null}),o(C.from("sports").select("id,event_id").eq("responsible_teacher_id",t==null?void 0:t.profile_id).eq("is_active",!0),{data:[]}),o(C.from("qr_reissue_managers").select("profile_id").eq("profile_id",t==null?void 0:t.profile_id).maybeSingle(),{data:null}),o(en(),{}),t?o(C.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",t.id).eq("status","จำนงแล้ว"),{count:0}):Promise.resolve({count:0}),o(C.from("sports_score_evaluators").select("id").eq("profile_id",t==null?void 0:t.profile_id).eq("is_active",!0),{data:[]}),o(C.rpc("sports_awards_access"),{data:null})]);if(!s&&t){const B=(a.prayerScannerTeachers||"").split(/[\s,]+/).map(mt=>mt.trim()).filter(Boolean),H=(d==null?void 0:d.data)??null;(B.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(H==null?void 0:H.role)==="admin")&&(s=!0)}const f=(B,H)=>{const W=document.getElementById(B);W&&(W.classList.toggle("hidden",!H),W.classList.toggle("flex",H))},S=(B,H)=>{var W;(W=document.getElementById(B))==null||W.classList.toggle("hidden",!H)},A=F.length>0,v=(V=t==null?void 0:t.positions)!=null&&V.length?t.positions:t!=null&&t.position?[t.position]:[],j=v.includes("executive")||U,m=v.includes("executive");f("menu-life-skill",e),f("menu-reading",n),f("menu-prayer",s),f("menu-advisor-students",A),f("menu-council",a.council_visible_to_all!=="false"||U||j),f("menu-my-courses",!m),f("menu-my-classes",!m),f("menu-dashboard",!m),S("daily-work-section",!m),S("sem-work-section",!m);const w=l==null?void 0:l.data;f("menu-terangganu",(w==null?void 0:w.is_manager)===!0||(w==null?void 0:w.teacher_participant)===!0),f("menu-regrade",((X=u.visibility)==null?void 0:X.teacher_menu)===!0||U);const E=Number(x==null?void 0:x.count)||0;ot(E);const T=(i==null?void 0:i.data)||[];f("menu-my-team",T.length>0);const b=K||N.menu_sports_admin||v.includes("house_color_admin")||(t==null?void 0:t.staff_type)==="แอดมิน"||(t==null?void 0:t.position)==="admin",k=(ee=r==null?void 0:r.data)==null?void 0:ee.id,P=((p==null?void 0:p.data)||[]).some(B=>!k||B.event_id===k),h=z.enabled!==!1&&z.teacher_menu!==!1&&!!k;f("menu-sports-competition-manager",!!(b||P||h)),f("menu-sports-checkin",z.enabled!==!1&&z.teacher_menu!==!1);const I=b||T.some(B=>{var H;return B.role==="lead_teacher"||((H=B.permissions)==null?void 0:H.shirt_summary)===!0});f("menu-shirt-summary",!!I),f("menu-sports-fund-admin",!!b),f("menu-sports-overview-admin",!!b);const q=b||((Ce=_==null?void 0:_.data)==null?void 0:Ce.length)>0;f("menu-sports-evaluation",!!q),S("menu-awards-group",((qe=y==null?void 0:y.data)==null?void 0:qe.allowed)===!0);let M=!1;try{const B=((Te=r==null?void 0:r.data)==null?void 0:Te.id)||"00000000-0000-0000-0000-000000000001",{data:H}=await C.from("sports_shirt_vote_managers").select("id").eq("event_id",B).eq("profile_id",t==null?void 0:t.profile_id).maybeSingle();M=!!H}catch{M=!1}f("menu-shirt-vote-dashboard",!!(b||M)),ie=!!(c!=null&&c.data),f("menu-qr-reissue-requests",ie);const R=z.enabled!==!1&&z.teacher_menu!==!1;window._teacherOverviewSystems=[{key:"council",show:a.council_visible_to_all!=="false"||U||j,emoji:"🏛️",label:"สภา<br>นักเรียน",href:"council.html"},{key:"terangganu",show:(w==null?void 0:w.is_manager)===!0||(w==null?void 0:w.teacher_participant)===!0,emoji:"⚜️",label:"ค่าย<br>TERANGGANU",href:"terangganu.html"},{key:"regrade",id:"teacher-regrade-overview-tile",show:((Pe=u.visibility)==null?void 0:Pe.teacher_menu)===!0||U,emoji:"📋",label:"แก้ค้าง<br>เก่า",href:"regrade.html",badge:E},{key:"sports",show:R,emoji:"🏆",label:"กีฬาสี",nav:"sports"},{key:"certificates",show:!0,emoji:"🏅",label:"เกียรติ<br>บัตร",nav:"certificates"},{key:"advisor-students",show:A,emoji:"👥",label:"นักเรียน<br>ที่ปรึกษา",nav:"advisor-students"},{key:"my-team",show:T.length>0,emoji:"🛡️",label:"จัดการ<br>สีของฉัน",nav:"my-team-workspace"},{key:"shirt-summary",show:!!I,emoji:"📦",label:"สรุปยอด<br>เสื้อกีฬาสี",nav:"shirt-summary"},{key:"sports-fund",show:!!b,emoji:"💰",label:"บัญชีเงิน<br>กีฬาสี",nav:"sports-fund-admin"},{key:"sports-overview",show:!!b,emoji:"📊",label:"ภาพรวม<br>กีฬาสี",nav:"sports-overview-admin"},{key:"sports-competition-manager",show:!!(b||P||h),emoji:"🏟️",label:"รายการแข่งขัน<br>ของฉัน",nav:"sports-competition-manager"},{key:"sports-evaluation",show:!!q,emoji:"🧑‍⚖️",label:"ประเมิน<br>กีฬาสี",nav:"sports-evaluation"},{key:"shirt-vote",show:!!(b||M),emoji:"🗳️",label:"ผลโหวต<br>แบบเสื้อ",nav:"shirt-vote-dashboard"},{key:"qr-print",show:ie,emoji:"🎫",label:"พิมพ์/คำขอ<br>QR",nav:"student-qr-print"},{key:"prayer-score",show:s,emoji:"🕌",label:"คะแนน<br>ศาสนา",nav:"prayer-score"}],ne=E}async function dn(e){t=await J(e),F=t?await le(t.id).catch(()=>[]):[],await Le(e),await ce(),D("profile")}async function ln(e){t=await J(e),F=t?await le(t.id).catch(()=>[]):[],await Le(e),await ce(),D("schedule-builder")}window._openCourseForm=async()=>{const{renderCourseForm:e}=await g(async()=>{const{renderCourseForm:n}=await import("./teacher-views-B31NLFxx.js");return{renderCourseForm:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));e(t,async(n,s=[])=>{await ze(n,s)})};window._editCourse=async e=>{const s=(t?await xe(t.id).catch(()=>[]):await ue().catch(()=>[])).find(a=>a.id===e);if(!s){L("ไม่พบข้อมูลคอร์ส","error");return}const{renderCourseForm:o}=await g(async()=>{const{renderCourseForm:a}=await import("./teacher-views-B31NLFxx.js");return{renderCourseForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));o(t,async(a,d=[])=>{await gt(e,a,d)},s)};window._copyCourse=async e=>{const s=(t?await xe(t.id).catch(()=>[]):await ue().catch(()=>[])).find(a=>a.id===e);if(!s){L("ไม่พบข้อมูลคอร์สต้นฉบับ","error");return}const{renderCourseForm:o}=await g(async()=>{const{renderCourseForm:a}=await import("./teacher-views-B31NLFxx.js");return{renderCourseForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));o(t,async(a,d=[])=>{const l=await ze(a,d);try{const i=await yt(e);if(i){const{subject_id:r,updated_at:p,updated_by:c,...u}=i;await vt(l.id,u)}}catch(i){L("คัดลอกคำอธิบายรายวิชาไม่สำเร็จ (สร้างคอร์สแล้ว แก้ไขคำอธิบายเพิ่มเองได้): "+G(i),"warning")}},s,{cloneFrom:e})};window._deleteCourse=(e,n)=>{var o;(o=document.getElementById("del-course-modal"))==null||o.remove();const s=document.createElement("div");s.id="del-course-modal",s.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-fade">
      <div class="text-center mb-5">
        <div class="text-4xl mb-3">🗑️</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ลบคอร์สวิชา</h3>
        <p class="text-sm text-gray-500">"${n}"</p>
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
    </div>`,document.body.appendChild(s),s.querySelector("#del-course-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#del-course-confirm").addEventListener("click",async()=>{const a=s.querySelector("#del-course-confirm");a.disabled=!0,a.textContent="กำลังลบ...";try{await ht(e),s.remove(),L(`ลบ "${n}" แล้ว`,"success"),D("my-courses")}catch(d){s.remove(),L("ลบไม่สำเร็จ: "+G(d),"error")}})};window._openRegisterClass=async e=>{const s=(t?await xe(t.id).catch(()=>[]):await ue().catch(()=>[])).find(x=>x.id===e);if(!s){L("ไม่พบข้อมูลคอร์ส","error");return}const o=t==null?void 0:t.teachers_quota,[a,d,l]=await Promise.all([ae((t==null?void 0:t.id)??null).catch(()=>[]),O().catch(()=>({})),wt((t==null?void 0:t.id)??null).catch(()=>({hasSemester:!1,paidRoomCount:0}))]),i=parseInt(d.freeClassQuota??2),r=(o==null?void 0:o.is_paid)&&!(o!=null&&o.package_type)&&!l.hasSemester&&!l.paidRoomCount,c=l.hasSemester||(o==null?void 0:o.package_type)==="semester"||r?1/0:i+l.paidRoomCount;if(a.length>=c){oe(a.length,s,d);return}const{renderClassForm:u}=await g(async()=>{const{renderClassForm:x}=await import("./teacher-views-B31NLFxx.js");return{renderClassForm:x}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));u(t,s)};window._openCourseDocPage2=async e=>{const s=(t?await xe(t.id).catch(()=>[]):await ue().catch(()=>[])).find(a=>a.id===e);if(!s){L("ไม่พบข้อมูลคอร์ส","error");return}const{openCourseDocPage2Modal:o}=await g(async()=>{const{openCourseDocPage2Modal:a}=await import("./teacher-views-B31NLFxx.js");return{openCourseDocPage2Modal:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));await o(t,s)};function oe(e,n,s={}){var a;if(s.quotaMode==="school_sponsored"){at(e,n,s);return}(a=document.getElementById("quota-popup"))==null||a.remove();const o=document.createElement("div");o.id="quota-popup",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
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
        ${(()=>{const d=parseInt(s.freeClassQuota??2),l=parseInt(s.pricePerClass??49),i=parseInt(s.priceSemester??299),r=s.pkgPerClassDesc??"เพิ่มได้ 1 ห้องเรียนต่อการชำระเงิน",p=s.pkgSemesterDesc??"ทุกวิชา ทุกห้อง ไม่จำกัด",c=d+1;return`
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
                <p class="text-xs text-gray-400 mt-0.5">${r}</p>
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
                <p class="text-2xl font-extrabold text-emerald-600">${i}<span class="text-sm font-normal text-gray-400"> บ.</span></p>
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
    </div>`,document.body.appendChild(o),o.querySelector("#qp-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#qp-copy-file").addEventListener("click",()=>{o.remove(),st()}),o.querySelector("#qp-next").addEventListener("click",()=>{var l;const d=(l=o.querySelector('input[name="pkg"]:checked'))==null?void 0:l.value;if(!d){alert("กรุณาเลือกแพ็กเกจก่อนครับ");return}o.remove(),d==="per_subject"?dt(n,s):lt(d,n,1,s)})}function at(e,n,s={}){var a;(a=document.getElementById("school-sponsored-popup"))==null||a.remove();const o=document.createElement("div");o.id="school-sponsored-popup",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-4 pb-4 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">🎉</div>
          <div>
            <h3 class="font-bold text-gray-800 leading-tight">${s.sponsoredHeaderTitle||"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"}</h3>
            <p class="text-xs text-gray-400">ระบบ ปพ.5 ออนไลน์</p>
          </div>
        </div>
      </div>
      <div class="px-5 py-4 space-y-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
          <p class="text-sm font-semibold text-emerald-800">${s.sponsoredBoxTitle||"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"}</p>
          <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
            ${s.sponsoredBoxBody||"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา — เป็นของขวัญจากโรงเรียนให้คุณครูทุกท่านครับ"}
          </p>
        </div>

        <button id="sp-donate"
          class="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-bold text-sm
                 shadow-lg shadow-amber-200/60 transition-all flex items-center justify-center gap-2">
          ${s.sponsoredDonateBtn||"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"}
          <span class="font-normal text-xs opacity-90">${s.sponsoredDonateSub||"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"}</span>
        </button>

        <button id="sp-access"
          class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm
                 shadow-lg shadow-emerald-200/60 transition-all flex items-center justify-center gap-2">
          ${s.sponsoredAccessBtn||"✨ รับของขวัญจากโรงเรียนเลย"}
        </button>

        <p class="text-center text-[11px] text-gray-400 pb-1">${s.sponsoredFooter||"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}</p>
      </div>
    </div>`,document.body.appendChild(o),o.querySelector("#sp-donate").addEventListener("click",()=>{o.remove(),Z(n,s)}),o.querySelector("#sp-access").addEventListener("click",async()=>{const d=o.querySelector("#sp-access");d.disabled=!0,d.textContent="⏳ กำลังตรวจสอบ...";try{const i=(await _t(t==null?void 0:t.id).catch(()=>[])).find(r=>r.package_type==="school_sponsored"&&(r.status==="pending"||r.status==="approved"));if(i){L(i.status==="approved"?"คุณได้รับสิทธิ์แล้วครับ ✅":"ส่งคำขอไปแล้ว รอแอดมินอนุมัติครับ ⏳","info"),o.remove();return}await _e({teacher_id:t==null?void 0:t.id,package_type:"school_sponsored",amount:0,status:"pending"}),L("ส่งคำขอแล้ว ✅ แอดมินจะอนุมัติให้เร็วๆ นี้ครับ","success"),o.remove()}catch(l){L("เกิดข้อผิดพลาด: "+G(l),"error"),d.disabled=!1,d.textContent="🎓 รับสิทธิ์ไม่จำกัดเลย"}})}async function Z(e,n={}){var T,b,k,P;(T=document.getElementById("donate-modal"))==null||T.remove();const s=Q(n.donationMinAmount,49),o=Q(n.donationAmountStep,50),a=fe(n);let d=0,l=!1,i=null;if(t!=null&&t.id)try{const h=await Ge(t.id);if(h.some(q=>q.package_type==="donation"&&q.status==="pending")){L("คุณครูส่งหลักฐานรอการอนุมัติอยู่แล้วครับ — กรุณารอแอดมินตรวจสอบก่อนนะครับ","warning");return}if(d=h.filter(q=>q.package_type==="donation"&&q.status==="approved").reduce((q,M)=>q+(M.amount??0),0),d>0){const q=((b=a[a.length-1])==null?void 0:b.amount)??1/0;if(d>=q){L("คุณครูสนับสนุนระดับสูงสุดแล้วครับ ขอบคุณมากๆ นะครับ 🙏👑","success");return}l=!0,i=((k=a.find(M=>M.amount>d))==null?void 0:k.amount)??null}}catch{}const r=document.createElement("div");r.id="donate-modal",r.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4";const p=n.paymentPromptpay??"",c=Math.min(Q(n.donationQuickCount,4),8),u=l?Math.max(s,(i??s)-d):s,x=Array.from({length:c},(h,I)=>u+I*o),_=$e(n),y=a[0],f=h=>_.map(I=>h>=(I.minTier??1)?`<div class="flex gap-2 text-amber-900"><span>${$(I.icon)}</span><span>${$(I.text)}</span></div>`:`<div class="flex gap-2 text-gray-300 opacity-70"><span>🔒</span><span class="line-through">${$(I.text)}<span class="ml-1 text-[9px] no-underline not-italic text-gray-400">ระดับ ${I.minTier}+</span></span></div>`).join("");r.innerHTML=`
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
          ${l?`คุณครูสนับสนุนสะสมแล้ว ${d} บาท${i?` — อีก ${Math.max(0,i-d)} บาทจะครบ ${i} บาทสำหรับระดับถัดไป`:""}<br/><span class="text-xs text-gray-400">ยอดที่สนับสนุนเพิ่มจะถูกรวมกับยอดเดิมโดยอัตโนมัติครับ</span>`:`สนับสนุนขั้นต่ำ ${s} บาท เพื่อรับสิทธิ์ผู้สนับสนุน<br/><span class="text-xs text-gray-400">ระบบหลักใช้งานได้ไม่จำกัดอยู่แล้ว สิทธิ์นี้เป็นฟีเจอร์พิเศษเพิ่มเติมครับ</span>`}
        </p>
        <!-- Feature list: อัปเดตตาม amount -->
        <div class="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
          <p class="text-xs font-bold text-amber-800 mb-2">ฟีเจอร์พิเศษสำหรับคุณครูที่โดเนท</p>
          <div id="donate-feature-list" class="grid grid-cols-1 gap-1.5 text-[11px] leading-snug">
            ${f(1)}
          </div>
        </div>
        <!-- Sticker preview -->
        <div id="donate-sticker-preview">
          ${Be(y)}
        </div>
        <!-- Amount input -->
        <div class="flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 focus-within:border-amber-400 transition">
          <span class="text-2xl font-bold text-amber-500">฿</span>
          <input id="donate-amount" type="number" min="${s}" step="${o}" value="${u}" placeholder="${u}"
            class="flex-1 bg-transparent text-3xl font-extrabold text-amber-700 outline-none w-full" />
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${x.map(h=>`<button class="donate-quick flex-1 py-2 rounded-xl border-2 border-amber-200 text-amber-700 text-sm font-bold hover:bg-amber-50 transition">${h}</button>`).join("")}
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
    </div>`,document.body.appendChild(r);const S=r.querySelector("#donate-amount"),A=r.querySelector("#donate-sticker-preview"),v=r.querySelector("#donate-feature-list"),j=()=>{const h=parseFloat(S.value)||0,I=[...a].reverse().find(M=>h>=M.amount)||a[0],q=a.indexOf(I)+1;A&&(A.innerHTML=Be(I)),v&&(v.innerHTML=f(q))};r.querySelectorAll(".donate-quick").forEach(h=>{h.addEventListener("click",()=>{S.value=h.textContent.trim(),j()})}),S.addEventListener("input",j),r.querySelector("#donate-back").addEventListener("click",()=>{r.remove(),at(0,e,n)}),r.querySelector("#donate-gen-qr").addEventListener("click",async()=>{const h=parseFloat(S.value);if(!h||h<s){L(`กรุณาระบุยอดโดเนทขั้นต่ำ ${s} บาทครับ`,"error");return}if(!p){L("แอดมินยังไม่ได้ตั้งค่าเบอร์ PromptPay","error");return}try{const I=await We(p,h);r.querySelector("#donate-qr-img").src=I,r.querySelector("#donate-qr-area").classList.remove("hidden"),r.querySelector("#donate-qr-area").classList.add("flex"),r.querySelector("#donate-slip-area").classList.remove("hidden"),r.querySelector("#donate-confirm").classList.remove("hidden"),r.querySelector("#donate-gen-qr").classList.add("hidden")}catch(I){L("สร้าง QR ไม่สำเร็จ: "+G(I),"error")}});let m=null;const w=r.querySelector("#donate-slip-file"),E=r.querySelector("#donate-slip-preview");w==null||w.addEventListener("change",h=>{m=h.target.files[0],m&&(r.querySelector("#donate-slip-name").textContent=m.name,m.type.startsWith("image/")?(r.querySelector("#donate-slip-img").src=URL.createObjectURL(m),r.querySelector("#donate-slip-img").classList.remove("hidden")):r.querySelector("#donate-slip-img").classList.add("hidden"),E.classList.remove("hidden"),r.querySelector("#donate-slip-label").classList.add("hidden"),r.querySelector("#donate-slip-err").classList.add("hidden"))}),(P=r.querySelector("#donate-slip-remove"))==null||P.addEventListener("click",()=>{m=null,w.value="",E.classList.add("hidden"),r.querySelector("#donate-slip-label").classList.remove("hidden")}),r.querySelector("#donate-confirm").addEventListener("click",async()=>{const h=parseFloat(S.value);if(!m){r.querySelector("#donate-slip-err").classList.remove("hidden"),r.querySelector("#donate-slip-area").scrollIntoView({behavior:"smooth",block:"center"});return}const I=r.querySelector("#donate-confirm");I.disabled=!0,I.textContent="⏳ กำลังส่งข้อมูล...";try{const q=await _e({teacher_id:t==null?void 0:t.id,package_type:"donation",amount:h,status:"pending"}),M=await Ue(m,q.id);await C.from("payment_requests").update({slip_url:M}).eq("id",q.id),L("ส่งหลักฐานสำเร็จ! 🙏 แอดมินจะตรวจสอบและส่งการ์ดขอบคุณให้ครับ","success"),r.remove(),it(!0)}catch(q){L("เกิดข้อผิดพลาด: "+G(q),"error"),I.disabled=!1,I.textContent="✅ ส่งหลักฐานการโอน"}})}window._showThankYouCardAdmin=(e,n)=>rt(e,n);async function rt(e,n=null){var u;(u=document.getElementById("thankyou-card-modal"))==null||u.remove();const s=n??await O().catch(()=>({}));Q(s.donationMinAmount,99),Q(s.donationAmountStep,50);const o=$e(s),a=fe(s),d=e.amount??0,l=[...a].reverse().find(x=>d>=x.amount)??a[0],i=nt(s,a,d),r=(s.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

การสนับสนุนของคุณครูมีค่ามากกว่าจำนวนเงินครับ ☕
เพราะมันคือกำลังใจสำคัญที่ทำให้ผมรู้สึกว่า
ระบบเล็ก ๆ นี้ได้ช่วยลดภาระงานของครูได้จริง 🌷

ขอบคุณที่ทำให้ผมมีกำลังใจพัฒนาระบบนี้ต่อไปเพื่อครูครับ 🙏✨

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`,p=(()=>{if(!l)return'<div class="text-5xl mb-3">☕</div>';const x=String(l.sticker??"");return/^https?:\/\//.test(x)?`<div class="w-20 h-20 mx-auto mb-3 flex items-center justify-center drop-shadow-lg">
        <img src="${$(x)}" class="w-full h-full object-contain" /></div>`:`<div class="text-5xl mb-3">${$(x||"☕")}</div>`})(),c=document.createElement("div");c.id="thankyou-card-modal",c.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",c.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Header — สีตาม tier.color -->
      <div class="px-6 py-6 text-center flex-shrink-0" style="${(()=>{const x=(l==null?void 0:l.color)||"#f59e0b",_=parseInt(x.slice(1,3),16),y=parseInt(x.slice(3,5),16),f=parseInt(x.slice(5,7),16);return`background:linear-gradient(135deg,rgba(${_},${y},${f},0.85),rgba(${_},${y},${f},1))`})()}">
        ${p}
        ${l?`<div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">${$(l.title)}</div>`:""}
        <h2 class="text-white font-bold text-xl">ขอบคุณครับ! 🙏</h2>
        <p class="text-white/80 text-sm mt-1">${d?`โดเนท ${d.toLocaleString()} บาท`:"การสนับสนุนของคุณครูมีความหมายมากครับ"}</p>
      </div>
      <!-- Body -->
      <div class="px-5 py-4 overflow-y-auto flex-1 space-y-4">
        <!-- ข้อความขอบคุณ -->
        ${e.admin_note||r?`
        <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
          ${$(e.admin_note||r)}
        </div>`:""}
        <!-- ฟีเจอร์พิเศษ: unlocked / locked -->
        ${o.length?`
        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-1.5">
            ${o.map(x=>i>=(x.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900">
                     <span class="flex-shrink-0">${$(x.icon)}</span>
                     <span>${$(x.text)}</span>
                   </div>`:`<div class="flex items-start gap-2 text-sm text-gray-400 opacity-60">
                     <span class="flex-shrink-0">🔒</span>
                     <span class="line-through">${$(x.text)}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap">ระดับ ${x.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${i<a.length?`
          <p class="text-[10px] text-emerald-700 mt-3 pt-2 border-t border-emerald-200">
            🔓 อัปเกรดเพื่อปลดล็อกฟีเจอร์ที่เหลือได้เลยครับ
          </p>`:""}
        </div>`:""}
        <!-- คำอธิบาย tier -->
        ${l!=null&&l.note?`
        <p class="text-xs text-center text-gray-400 italic">"${$(l.note)}"</p>`:""}
      </div>
      <!-- Footer -->
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="tc-close"
          class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${(l==null?void 0:l.color)||"#f59e0b"}">
          รับทราบและเริ่มใช้งาน 🚀
        </button>
      </div>
    </div>`,document.body.appendChild(c),c.querySelector("#tc-close").addEventListener("click",()=>{var x;localStorage.setItem(`pp5_thankyou_seen_${e.id}`,"1"),c.remove(),(x=document.getElementById("donate-float-btn"))==null||x.remove(),he(e)})}async function he(e=null){if(document.getElementById("sidebar-donate-item"))return;const n=document.querySelector("#sidebar nav");if(!n)return;let s="<span>☕</span>",o="สนับสนุนผู้พัฒนาอีกครั้ง";if(e){const d=await O().catch(()=>({}));Q(d.donationMinAmount,99),Q(d.donationAmountStep,50);const l=fe(d),i=e.amount??0,r=[...l].reverse().find(p=>i>=p.amount)??l[0];if(r){const p=String(r.sticker??"");s=/^https?:\/\//.test(p)?`<img src="${$(p)}" class="w-6 h-6 object-contain rounded" title="${$(r.title)}" />`:`<span title="${$(r.title)}">${$(p||"🏅")}</span>`,o=`${r.title} — คลิกเพื่อโดเนทอีกครั้ง`}}const a=document.createElement("a");a.id="sidebar-donate-item",a.href="#",a.title=o,a.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-emerald-400/60 hover:text-amber-400 hover:bg-emerald-800/40 opacity-60 hover:opacity-100",a.innerHTML=`${s} <span>${e?"ผู้สนับสนุนระบบ":"สนับสนุนผู้พัฒนา"}</span>`,a.addEventListener("click",async d=>{d.preventDefault();const l=await O().catch(()=>({}));Z(null,l)}),n.appendChild(a)}function cn(){var n;return((n=t==null?void 0:t.positions)!=null&&n.length?t.positions:t!=null&&t.position?[t.position]:[]).includes("executive")}function pe(e){const n=e==="overview"&&cn();["donate-float-btn","feedback-fab","donor-chat-fab"].forEach(s=>{const o=document.getElementById(s);o&&(o.style.display=n?"none":"")}),mn(e)}function pn(){if(document.getElementById("home-fab"))return;const e=document.createElement("button");e.id="home-fab",e.title="กลับหน้าภาพรวม",e.className="hidden fixed z-40 items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105",e.style.cssText="position:fixed;left:max(0.75rem, env(safe-area-inset-left));bottom:max(0.75rem, env(safe-area-inset-bottom));right:auto;top:auto;",e.innerHTML='<span class="text-lg">🏠</span><span>หน้าภาพรวม</span>',e.addEventListener("click",()=>D("overview")),document.body.appendChild(e)}function mn(e){const n=document.getElementById("home-fab");if(!n)return;const s=e!=="overview";n.classList.toggle("hidden",!s),n.classList.toggle("flex",s)}function it(e=!1){var s;(s=document.getElementById("donate-float-btn"))==null||s.remove();const n=document.createElement("button");n.id="donate-float-btn",n.title=e?"รอแอดมินรับทราบการโดเนทของคุณ":"สนับสนุนผู้พัฒนา",n.className="fixed z-[40] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-white shadow-lg shadow-amber-300/40 flex items-center justify-center overflow-hidden transition-transform hover:scale-105",n.style.cssText="position:fixed;right:max(0.75rem, env(safe-area-inset-right));bottom:max(0.75rem, env(safe-area-inset-bottom));top:auto;left:auto;",n.innerHTML=e?'<span class="text-xl sm:text-2xl">☕</span>':`<span class="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full">
        <span class="absolute inset-1 rounded-full bg-amber-300/40"></span>
        <span class="relative text-xl sm:text-2xl">☕</span>
       </span>`,n.addEventListener("click",async()=>{const o=await O().catch(()=>({}));Z(null,o)}),document.body.appendChild(n),pe(se)}function un(e,n,s){var x;(x=document.getElementById("promo-popup"))==null||x.remove();const o="pp5_promo_seen",a=Q(e.donationMinAmount,49);let d=0;const l=_=>{const y=_+1;return s.map(f=>y>=(f.minTier??1)?`<div class="flex items-center gap-2.5 text-sm text-gray-800 py-1">
             <span class="text-base flex-shrink-0">${$(f.icon)}</span>
             <span>${$(f.text)}</span>
           </div>`:`<div class="flex items-center gap-2.5 text-sm text-gray-300 py-1">
             <span class="text-base flex-shrink-0">🔒</span>
             <span class="line-through">${$(f.text)}</span>
             <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${f.minTier}+</span>
           </div>`).join("")},i=document.createElement("div");i.id="promo-popup",i.className="fixed inset-0 z-[85] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4";const r=_=>{var v,j;const y=n[_],f=(y==null?void 0:y.color)||"#f59e0b",S=String((y==null?void 0:y.sticker)??""),A=/^https?:\/\//.test(S)?`<img src="${$(S)}" class="w-16 h-16 object-contain drop-shadow-md" />`:`<span class="text-5xl">${$(S||"🏅")}</span>`;return`
    <div class="bg-white w-full sm:max-w-sm rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Sticker row -->
      <div class="pt-5 px-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">เลือกระดับที่สนใจ</p>
        <div class="flex justify-center gap-2">
          ${n.map((m,w)=>{const E=String(m.sticker??""),T=m.color||"#f59e0b",b=w===_,k=/^https?:\/\//.test(E)?`<img src="${$(E)}" class="w-10 h-10 object-contain" />`:`<span class="text-3xl">${$(E)}</span>`;return`<button class="promo-tier-btn flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all"
              data-idx="${w}"
              style="${b?`box-shadow:0 0 0 3px ${T};`:"box-shadow:0 0 0 2px #e5e7eb;"}">
              ${k}
            </button>`}).join("")}
        </div>
      </div>
      <!-- Tier info + features -->
      <div class="px-5 py-4 overflow-y-auto flex-1">
        <div class="flex items-center gap-2 mb-1">
          ${A}
          <div>
            <p class="font-bold text-gray-800 text-base">${$((y==null?void 0:y.title)??"")}</p>
            <p class="text-xs" style="color:${f}">${$((y==null?void 0:y.note)??"")}</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-2 mb-3">ยอดสนับสนุนขั้นต่ำ <span class="font-bold text-gray-700">${((v=y==null?void 0:y.amount)==null?void 0:v.toLocaleString())??a} บาท</span></p>
        <div class="divide-y divide-gray-50">
          ${l(_)}
        </div>
      </div>
      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex-shrink-0 space-y-3">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="promo-no-show" class="w-4 h-4 rounded accent-gray-400" />
          <span class="text-xs text-gray-400">ไม่ต้องการให้แสดงหน้านี้อีก</span>
        </label>
        <button id="promo-support" class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${f}">
          สนับสนุนในระดับนี้ (${((j=y==null?void 0:y.amount)==null?void 0:j.toLocaleString())??a} บาท+)
        </button>
        <button id="promo-later" class="w-full text-sm text-gray-400 hover:text-gray-600 py-1 transition">
          ภายหลัง
        </button>
      </div>
    </div>`};i.innerHTML=r(d),document.body.appendChild(i);const p=_=>{d=_,i.querySelector(".bg-white").outerHTML=r(_),u()},c=()=>{var _;(_=i.querySelector("#promo-no-show"))!=null&&_.checked&&localStorage.setItem(o,String(Date.now())),i.remove()},u=()=>{var _,y;i.querySelectorAll(".promo-tier-btn").forEach(f=>{f.addEventListener("click",()=>p(parseInt(f.dataset.idx)))}),(_=i.querySelector("#promo-support"))==null||_.addEventListener("click",()=>{c(),Z(null,e)}),(y=i.querySelector("#promo-later"))==null||y.addEventListener("click",c),i.addEventListener("click",f=>{f.target===i&&c()})};u()}function xn(e,n,s){if(document.getElementById("sidebar-upgrade-item"))return;const o=document.querySelector("#sidebar nav");if(!o)return;const a=n[s-1],d=n[s],l=String((a==null?void 0:a.sticker)??""),i=/^https?:\/\//.test(l)?`<img src="${$(l)}" class="w-5 h-5 object-contain flex-shrink-0" />`:`<span class="flex-shrink-0">${$(l||"🏅")}</span>`,r=document.createElement("a");r.id="sidebar-upgrade-item",r.href="#",r.className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition text-amber-400/70 hover:text-amber-300 hover:bg-emerald-800/40 opacity-70 hover:opacity-100",r.innerHTML=`${i} <span>อัปเกรดระดับ</span>`,r.title=d?`อัปเกรดเป็น ${d.title}`:"สนับสนุนเพิ่มเติม",r.addEventListener("click",async p=>{p.preventDefault(),Z(null,e)}),o.appendChild(r)}async function fn(e){try{const[n,s]=await Promise.all([Ge(e),O().catch(()=>({}))]);if((s.quotaMode??"payment")!=="school_sponsored")return;const o=Q(s.donationMinAmount,49),a=Q(s.donationAmountStep,50),d=fe(s,o,a),l=$e(s),i=d.length,r=n.find(u=>u.package_type==="donation"&&u.status==="approved"),p=n.some(u=>u.package_type==="donation"&&u.status==="pending"),c=n.filter(u=>u.package_type==="donation"&&u.status==="approved").reduce((u,x)=>u+(x.amount??0),0);if(window._pp5SystemCfg=s,r){!localStorage.getItem(`pp5_thankyou_seen_${r.id}`)&&r.admin_note&&rt(r);const x=nt(s,d,c);window._pp5DonorTierIndex=x,x>=i?he(r):(he(r),xn(s,d,x))}else if(it(p),!p&&s.donationPromoEnabled!=="false"){const x=localStorage.getItem("pp5_promo_seen");(!x||Date.now()-parseInt(x)>14*24*60*60*1e3)&&setTimeout(()=>un(s,d,l),1500)}}catch{}}function dt(e,n={}){var r;(r=document.getElementById("room-count-page"))==null||r.remove();const s=parseInt(n.pricePerClass??49),o=document.createElement("div");o.id="room-count-page",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="rc-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">แพ็กเกจรายห้อง</h3>
          <p class="text-xs text-gray-400">${s} บาท / ห้อง / เทอม</p>
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
          <p id="rc-total" class="text-3xl font-extrabold text-indigo-600">${s} <span class="text-sm font-normal text-gray-400">บาท</span></p>
          <p class="text-xs text-gray-400 mt-1">(${s} บ. × 1 ห้อง)</p>
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
    </div>`,document.body.appendChild(o);let a=1;const d=o.querySelector("#rc-count"),l=o.querySelector("#rc-total"),i=()=>{d.textContent=a;const p=s*a;l.innerHTML=`${p.toLocaleString()} <span class="text-sm font-normal text-gray-400">บาท</span>`,l.nextElementSibling.textContent=`(${s} บ. × ${a} ห้อง)`,o.querySelector("#rc-minus").disabled=a<=1};o.querySelector("#rc-minus").addEventListener("click",()=>{a>1&&(a--,i())}),o.querySelector("#rc-plus").addEventListener("click",()=>{a++,i()}),o.querySelector("#rc-back").addEventListener("click",()=>{o.remove(),oe(0,e,n)}),o.querySelector("#rc-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#rc-next").addEventListener("click",()=>{o.remove(),lt("per_subject",e,a,n)})}async function lt(e,n,s=1,o=null){var A;(A=document.getElementById("payment-page"))==null||A.remove();const a=o??await O().catch(()=>({})),d=parseInt(a.pricePerClass??49),l=parseInt(a.priceSemester??299),i=(a.paymentPromptpay??"0825424340").replace(/\D/g,""),r=e==="semester"?l:d*s,p=e==="semester"?"เหมาทั้งเทอม":`รายห้อง × ${s} ห้อง`,c=e==="semester"?"ทุกวิชา ทุกห้อง ตลอดเทอม":`${d} บ. × ${s} ห้อง = ${r.toLocaleString()} บ.`,u=document.createElement("div");u.id="payment-page",u.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",u.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="pp-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none mr-1">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">ชำระเงิน — ${p}</h3>
          <p class="text-xs text-gray-400">${c}</p>
        </div>
        <div class="bg-indigo-600 text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
          ${r.toLocaleString()} บ.
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
            <span class="font-extrabold text-emerald-700 text-lg">${r.toLocaleString()} บาท</span>
          </div>
          <p class="text-[11px] text-gray-400 mt-1">พร้อมเพย์ ${i.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")}</p>
        </div>

        <!-- รายละเอียดบัญชี (คัดลอกได้) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2.5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">ข้อมูลการโอน</p>
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">พร้อมเพย์</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1.5"
              data-copy="${i}">
              ${i.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")} <span class="text-[10px] text-gray-400">คัดลอก</span>
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
    </div>`,document.body.appendChild(u),We(i,r).then(v=>{const j=u.querySelector("#pp-qr-wrap");j&&(j.innerHTML=`
      <img src="${v}" class="w-[220px] h-[220px] rounded-xl border border-gray-100 shadow-sm mx-auto" />
      <p class="text-[10px] text-gray-400">QR สำหรับ ${r.toLocaleString()} บาทเท่านั้น</p>`)}).catch(()=>{if(a.paymentQrUrl){const v=u.querySelector("#pp-qr-wrap");v&&(v.innerHTML=`<img src="${a.paymentQrUrl}" class="mx-auto h-[220px] object-contain rounded-xl border border-gray-100 shadow-sm" />`)}}),u.querySelector("#pp-back").addEventListener("click",()=>{var v;u.remove(),e==="per_subject"?dt(n,a):oe(((v=t==null?void 0:t.teachers_quota)==null?void 0:v.total_classes_created)??0,n,a)}),u.querySelectorAll(".copy-btn").forEach(v=>{v.addEventListener("click",()=>{navigator.clipboard.writeText(v.dataset.copy).catch(()=>{}),v.querySelector("span").textContent="✓ คัดลอกแล้ว",setTimeout(()=>v.querySelector("span").textContent="คัดลอก",2e3)})});let x=null;const _=u.querySelector("#slip-file"),y=u.querySelector("#slip-preview"),f=u.querySelector("#slip-img"),S=u.querySelector("#slip-name");_.addEventListener("change",v=>{x=v.target.files[0],x&&(S.textContent=x.name,x.type.startsWith("image/")?(f.src=URL.createObjectURL(x),f.classList.remove("hidden")):f.classList.add("hidden"),y.classList.remove("hidden"),u.querySelector("#slip-label").classList.add("hidden"))}),u.querySelector("#slip-remove").addEventListener("click",()=>{x=null,_.value="",y.classList.add("hidden"),u.querySelector("#slip-label").classList.remove("hidden")}),u.querySelector("#pp-submit").addEventListener("click",async()=>{const v=u.querySelector("#pp-err");if(!x){v.textContent="กรุณาอัปโหลดสลิปก่อนนะครับ",v.classList.remove("hidden");return}v.classList.add("hidden");const j=u.querySelector("#pp-submit");j.disabled=!0,j.textContent="⏳ กำลังส่ง...";try{const m=await _e({teacher_id:t.id,package_type:e,amount:r,room_count:e==="per_subject"?s:null,subject_id:e==="per_subject"?(n==null?void 0:n.id)??null:null,status:"pending"}),w=await Ue(x,m.id);await C.from("payment_requests").update({slip_url:w}).eq("id",m.id),u.remove(),bn()}catch(m){j.disabled=!1,j.textContent="✅ ส่งหลักฐานการชำระเงิน",v.textContent="เกิดข้อผิดพลาด กรุณาลองใหม่: "+G(m),v.classList.remove("hidden")}})}function bn(){const e=document.createElement("div");e.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&e.remove()})}async function Ne(e){try{const n=await O(),s=n.semester??n.semester??"—",o=n.academicYear??n.academic_year??"—",a=document.getElementById("sidebar-term");a&&(a.textContent=`ภาคเรียนที่ ${s} / ${o}`);const d=(e==null?void 0:e.category)??"",i=/ปวช/i.test(d)?n.porworLogoUrl??n.samaiLogoUrl??"":n.samaiLogoUrl??"",r=document.getElementById("school-logo"),p=document.getElementById("school-logo-fallback");r&&i&&(r.src=i,r.classList.remove("hidden"),p==null||p.classList.add("hidden"));const c=document.getElementById("sidebar-contact");if(c){const u=[n.contactPhone&&{icon:"📞",label:n.contactPhone,href:`tel:${n.contactPhone.replace(/\s/g,"")}`},n.contactLine&&{icon:"💬",label:"LINE: "+n.contactLine,href:n.contactLine.startsWith("http")?n.contactLine:`https://line.me/R/ti/p/${n.contactLine}`},n.contactFacebook&&{icon:"📘",label:"Facebook",href:n.contactFacebook},n.contactEmail&&{icon:"📧",label:n.contactEmail,href:`mailto:${n.contactEmail}`},n.contactOther&&{icon:"🔗",label:n.contactOther,href:null}].filter(Boolean);u.length>0&&(window._contactLinks=u,c.innerHTML=`
          <button id="btn-contact-admin"
            class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm
                   font-medium text-emerald-200 hover:bg-emerald-700 border border-emerald-700 transition">
            📞 ติดต่อผู้ดูแล
          </button>`,c.classList.remove("hidden"),document.getElementById("btn-contact-admin").addEventListener("click",()=>{var _,y;(_=document.getElementById("contact-modal"))==null||_.remove();const x=document.createElement("div");x.id="contact-modal",x.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade">
              <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 class="font-bold text-gray-800">📞 ติดต่อผู้ดูแลระบบ</h3>
                <button id="contact-modal-close"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-lg">×</button>
              </div>
              <div class="p-5 space-y-3">
                ${u.map(f=>f.href?`<a href="${f.href}" target="_blank" rel="noopener"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 transition group">
                        <span class="text-xl">${f.icon}</span>
                        <span class="text-sm font-medium text-gray-700 group-hover:text-emerald-700 break-all">${f.label}</span>
                        <span class="ml-auto text-gray-300 group-hover:text-emerald-400 text-xs">→</span>
                      </a>`:`<div class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50">
                       <span class="text-xl">${f.icon}</span>
                       <span class="text-sm font-medium text-gray-700 break-all">${f.label}</span>
                     </div>`).join("")}
                <button id="contact-donate-btn"
                  class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-white font-semibold text-sm shadow-md shadow-amber-200/50 transition">
                  ☕ สนับสนุนผู้พัฒนา
                </button>
              </div>
            </div>`,document.body.appendChild(x),x.querySelector("#contact-modal-close").addEventListener("click",()=>x.remove()),(y=x.querySelector("#contact-donate-btn"))==null||y.addEventListener("click",async()=>{x.remove();const f=await O().catch(()=>({}));Z(null,f)}),x.addEventListener("click",f=>{f.target===x&&x.remove()})}))}}catch{}}let Y=[];async function gn(e){try{Y=await Tt(e),yn()}catch{}}function yn(){var s;if(document.querySelectorAll("#sv-notif-badge").forEach(o=>o.remove()),!Y.length)return;const e=Y.length,n=document.getElementById("t-name");if(n){const o=document.createElement("span");o.id="sv-notif-badge",o.style.cssText="display:inline-block;background:#dc2626;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 6px;margin-left:6px;cursor:pointer;",o.textContent=e,o.title=`${e} ข้อความจากหัวหน้า`,o.onclick=()=>Oe(t==null?void 0:t.id),(s=n.parentElement)==null||s.appendChild(o)}window._showSvNotifPopup=()=>Oe(t==null?void 0:t.id),"Notification"in window&&Notification.permission==="granted"&&e>0&&new Notification("ปพ.5 ออนไลน์ — มีข้อความจากหัวหน้า",{body:Y[0].comment,icon:"/pp5online/public/pp5-form-logo.png"})}async function Oe(e){const n={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},s={general:"#f9fafb",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},o={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},a={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},d=i=>{const r=i.supervisor;if(!r)return"หัวหน้า";const p=a[r.position]??"หัวหน้า";return r.full_name?`${p} (${r.full_name})`:p},l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;",l.innerHTML=`<div style="background:#fff;border-radius:16px;width:min(500px,96vw);max-height:85vh;overflow-y:auto;padding:24px;position:relative;">
    <button style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;" onclick="this.closest('div').parentElement.remove()">✕</button>
    <div style="font-size:16px;font-weight:700;margin-bottom:4px;">🔔 ข้อความจากหัวหน้า</div>
    <div style="font-size:12px;color:#6b7280;margin-bottom:16px;">ได้รับการตรวจสอบแล้ว ${Y.length} รายการ</div>
    ${Y.map(i=>`
      <div style="background:${s[i.metric]??"#f9fafb"};border-radius:12px;padding:14px 16px;margin-bottom:10px;border-left:4px solid ${o[i.metric]??"#6b7280"};">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:700;color:${o[i.metric]??"#374151"};background:${s[i.metric]??"#f9fafb"};
            border:1px solid currentColor;border-radius:8px;padding:1px 8px;">
            ${n[i.metric]??i.metric}
          </span>
          <span style="font-size:10px;color:#9ca3af;">${new Date(i.created_at).toLocaleString("th")}</span>
        </div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;">จาก: ${d(i)}</div>
        <div style="font-size:13px;color:#374151;line-height:1.5;">${i.comment}</div>
      </div>`).join("")}
    <button id="sv-mark-read"
      style="width:100%;margin-top:8px;padding:10px;background:#059669;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
      ✓ รับทราบทั้งหมด
    </button>
  </div>`,document.body.appendChild(l),l.addEventListener("click",i=>{i.target===l&&l.remove()}),l.querySelector("#sv-mark-read").onclick=async()=>{await Pt(e),Y=[],document.querySelectorAll("#sv-notif-badge").forEach(i=>i.remove()),l.remove()}}let me=!1,de=null;async function Ie(){var o;const e=document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area"),n=document.querySelector("#sidebar nav");if(!e||me)return;if(!(t!=null&&t.id)){L("กำลังโหลดข้อมูลครู กรุณารอสักครู่แล้วลองใหม่","warning");try{t=await J((o=(await C.auth.getUser()).data.user)==null?void 0:o.id)}catch{}if(!(t!=null&&t.id))return}me=!0,n&&(de=n.innerHTML),await Se(),_n(n,e,U);const{renderSupervisorDashboard:s}=await g(async()=>{const{renderSupervisorDashboard:a}=await import("./supervisor-DNXYl8Fo.js");return{renderSupervisorDashboard:a}},__vite__mapDeps([52,1,2,3,4,5,6,12,13,8,9]));s(e,t,U)}window._enterSupervisorMode=Ie;function vn(){document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area");const e=document.querySelector("#sidebar nav");me&&(me=!1,e&&de&&(e.innerHTML=de,de=null,kn(e)),D("overview"))}async function hn(){try{const e=await qt("teacher",(t==null?void 0:t.id)??null);ft(e,"pp5_ann_dismissed")}catch{}}async function wn(){try{const e=await Xt();e!=null&&e.is_participant&&!e.completed&&bt("teacher")}catch{}}const Ve=[{key:"announce_create",icon:"📢",label:"จัดการประกาศ",fn:(e,n)=>{g(async()=>{const{renderSupervisorAnnouncements:s}=await import("./views-BHzV9Ke0.js").then(o=>o.M);return{renderSupervisorAnnouncements:s}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30])).then(({renderSupervisorAnnouncements:s})=>s(e,n))}},{key:"work_calendar",icon:"📅",label:"ปฏิทินปฏิบัติงาน",fn:e=>{g(async()=>{const{renderWorkCalendar:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderWorkCalendar:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30])).then(({renderWorkCalendar:n})=>n(e))}},{key:"lang_config",icon:"⚙️",label:"ตั้งค่าคำอธิบายฯ",fn:async(e,n)=>{const{renderCourseDocLangConfig:s}=await g(async()=>{const{renderCourseDocLangConfig:o}=await import("./teacher-views-B31NLFxx.js");return{renderCourseDocLangConfig:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));s(e,n)}},{key:"menu_holidays",icon:"📅",label:"วันหยุด",fn:async()=>{const{renderHolidays:e}=await g(async()=>{const{renderHolidays:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderHolidays:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_periods",icon:"🕐",label:"คาบเรียน",fn:async()=>{const{renderPeriods:e}=await g(async()=>{const{renderPeriods:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderPeriods:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_curriculum",icon:"📘",label:"หลักสูตรแกนกลาง",fn:async()=>{const{renderCurriculum:e}=await g(async()=>{const{renderCurriculum:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderCurriculum:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_subjects",icon:"📖",label:"รายวิชา",fn:async()=>{const{renderSubjects:e}=await g(async()=>{const{renderSubjects:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderSubjects:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_departments",icon:"🏫",label:"กลุ่มสาระ",fn:async()=>{const{renderDepartments:e}=await g(async()=>{const{renderDepartments:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderDepartments:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_homeroom",icon:"🏠",label:"ครูที่ปรึกษา",fn:async()=>{const{renderHomeroom:e}=await g(async()=>{const{renderHomeroom:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderHomeroom:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_students",icon:"👨‍🎓",label:"นักเรียน",fn:async()=>{const{renderStudents:e}=await g(async()=>{const{renderStudents:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderStudents:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_classrooms",icon:"🚪",label:"ห้องเรียน",fn:async()=>{const{renderClassroomsAdmin:e}=await g(async()=>{const{renderClassroomsAdmin:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderClassroomsAdmin:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_score_config",icon:"📊",label:"คอลัมน์คะแนน",fn:async()=>{const{renderScoreColConfig:e}=await g(async()=>{const{renderScoreColConfig:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderScoreColConfig:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_life_skill",icon:"🌱",label:"ทักษะชีวิต",fn:async()=>{const{renderLifeSkillAdmin:e}=await g(async()=>{const{renderLifeSkillAdmin:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderLifeSkillAdmin:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_reading",icon:"📗",label:"การอ่าน",fn:async()=>{const{renderReadingAdmin:e}=await g(async()=>{const{renderReadingAdmin:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderReadingAdmin:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_prayer",icon:"🕌",label:"ละหมาด",fn:async()=>{const{renderPrayerAdmin:e}=await g(async()=>{const{renderPrayerAdmin:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderPrayerAdmin:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_house_colors",icon:"🎨",label:"สีนักเรียน",fn:async()=>{const{renderHouseColors:e}=await g(async()=>{const{renderHouseColors:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderHouseColors:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_sports_admin",icon:"🏆",label:"ระบบกีฬาสี",fn:async()=>Je({admin:!0,teacherName:t==null?void 0:t.full_name,teacherCode:t==null?void 0:t.teacher_code})},{key:"menu_azfutsal",icon:"⚽",label:"AZFUTSALCUP",fn:async()=>Mt()},{key:"menu_sports_shirt_settings",icon:"👕",label:"ตั้งค่าและสรุปเสื้อกีฬาสี",fn:async()=>Xe()},{key:"menu_sports_fund_admin",icon:"💰",label:"บัญชีเงินกีฬาสี",fn:async()=>Ze()},{key:"manage_religion_groups",icon:"🕌",label:"กลุ่มวิชาศาสนา",fn:async()=>{const{renderReligionGroups:e}=await g(async()=>{const{renderReligionGroups:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderReligionGroups:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"manage_my_religion_group",icon:"👥",label:"กลุ่มของฉัน",fn:async e=>{const{renderMyReligionGroup:n}=await g(async()=>{const{renderMyReligionGroup:s}=await import("./views-BHzV9Ke0.js").then(o=>o.M);return{renderMyReligionGroup:s}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));n(e)}},{key:"menu_classroom_leaders",icon:"👑",label:"หัวหน้า/รองหัวหน้าห้อง",fn:async()=>{const{renderClassroomLeaders:e}=await g(async()=>{const{renderClassroomLeaders:n}=await import("./views-BHzV9Ke0.js").then(s=>s.M);return{renderClassroomLeaders:n}},__vite__mapDeps([21,1,2,3,4,5,6,22,19,7,8,9,10,11,12,13,14,15,16,17,18,20,0,23,24,25,26,27,28,29,30]));e()}},{key:"menu_tutorial",icon:"📖",label:"คู่มือการใช้งาน",fn:async()=>{const{renderTutorialAdmin:e}=await g(async()=>{const{renderTutorialAdmin:n}=await import("./tutorial-D2C4vUJE.js");return{renderTutorialAdmin:n}},__vite__mapDeps([46,2,3,4,5,6,9,1]));e()}}];function _n(e,n,s=!1){var p;if(!e)return;const o={dept_head:"หัวหน้ากลุ่มสาระ",religion_group_head:"หัวหน้ากลุ่ม (ศาสนา)",religion_subgroup_head:"หัวหน้ากลุ่มย่อย (ศาสนา)",registrar_samai:"ทะเบียน (สามัญ)",registrar_religion:"ทะเบียน (ศาสนา)",registrar_pvch:"ทะเบียน (ปวช)",academic_samai:"วิชาการ (สามัญ)",academic_religion:"วิชาการ (ศาสนา)",academic_pvch:"วิชาการ (ปวช)",house_color_admin:"สีนักเรียน",classroom_leaders_admin:"ผู้ดูแลหัวหน้า/รองหัวหน้า",executive:"ผู้บริหาร"},a=(p=t==null?void 0:t.positions)!=null&&p.length?t.positions:t!=null&&t.position?[t.position]:[],d=a.length?a.map(c=>o[c]??c).join(" / "):s?"แอดมิน":"หัวหน้า",l=z.enabled!==!1&&z.teacher_menu!==!1,i=s?Ve:Ve.filter(c=>c.key==="lang_config"?N.lang_config||a.includes("dept_head"):c.key==="menu_house_colors"?N.menu_house_colors||a.includes("house_color_admin"):c.key==="menu_sports_admin"?l&&(N.menu_sports_admin||a.includes("house_color_admin")):c.key==="menu_sports_shirt_settings"||c.key==="menu_sports_fund_admin"?N.menu_sports_admin||a.includes("house_color_admin"):c.key==="menu_azfutsal"?!0:c.key==="menu_classroom_leaders"?N.menu_classroom_leaders||a.includes("classroom_leaders_admin"):c.key==="manage_religion_groups"?N.manage_religion_groups||a.includes("religion_group_head"):c.key==="manage_my_religion_group"?a.includes("religion_subgroup_head"):c.key==="announce_manage"?!!N.announce_manage:c.key==="announce_create"?!!N.announce_create:c.key==="work_calendar"?!!N.work_calendar:!!N[c.key]),r=(c,u,x)=>`<button data-sv="${c}" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium w-full text-left transition hover:bg-emerald-800/50" style="color:#d1fae5;">${u} ${x}</button>`;e.innerHTML=`
    <div style="padding:8px 12px;font-size:11px;color:#6ee7b7;font-weight:600;letter-spacing:.5px;margin-bottom:4px;">📊 ${d}</div>
    ${r("back","←","กลับโหมดสอน")}
    <div style="height:1px;background:#065f46;margin:8px 12px;"></div>
    ${r("dashboard","📊","Dashboard ติดตาม")}
    ${i.map(c=>r(c.key,c.icon,c.label)).join("")}`,e.querySelector('[data-sv="back"]').onclick=vn,e.querySelector('[data-sv="dashboard"]').onclick=()=>g(()=>import("./supervisor-DNXYl8Fo.js"),__vite__mapDeps([52,1,2,3,4,5,6,12,13,8,9])).then(c=>c.renderSupervisorDashboard(n,t,U)),i.forEach(c=>{var u;(u=e.querySelector(`[data-sv="${c.key}"]`))==null||u.addEventListener("click",()=>c.fn(t,s))})}function kn(e,n){e.querySelectorAll("[data-nav]").forEach(s=>{s.addEventListener("click",o=>{o.preventDefault(),D(s.dataset.nav)})}),e.querySelectorAll("button").forEach(s=>{s.textContent.trim().includes("Dashboard")&&(s.onclick=Ie)})}async function we(e){if(!t)return;let n=[];try{n=await ae(t.id);const d=n.map(l=>l.id).filter(Boolean);if(d.length){const{data:l,error:i}=await C.from("class_students").select("class_id").in("class_id",d);i&&console.warn("[quick-class-picker] โหลดจำนวนนักเรียนไม่สำเร็จ",i);const r=(l??[]).reduce((p,c)=>(p[c.class_id]=(p[c.class_id]||0)+1,p),{});n=n.map(p=>({...p,_studentCount:r[p.id]||0}))}}catch(d){console.error("[quick-class-picker] โหลดรายการห้องไม่สำเร็จ",d),L("โหลดรายการห้องเรียนไม่สำเร็จ กรุณาลองใหม่","error");return}if(!n.length){L("ยังไม่มีห้องเรียน","warning");return}if(n.length===1){He(e,n[0]);return}const s=e==="attendance"?"✅ เลือกห้องเรียน — เช็คชื่อ":"📝 เลือกห้องเรียน — บันทึกคะแนน",o=document.createElement("div");o.id="qcp-overlay",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4",o.innerHTML=`
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="qcp-backdrop"></div>
    <div class="relative bg-white w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[70vh] flex flex-col">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">${s}</p>
        <button id="qcp-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <div class="overflow-y-auto p-3 space-y-2">
        ${n.map(d=>{var l;return`
          <button data-cid="${d.id}" class="qcp-cls w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition border border-gray-100">
            <p class="font-semibold text-gray-800 text-sm">${d.class_name}</p>
            <p class="text-xs text-gray-400 mt-0.5">${((l=d.master_subjects)==null?void 0:l.subject_name)??""} · ${d._studentCount??0} คน</p>
          </button>`}).join("")}
      </div>
    </div>`,document.body.appendChild(o);const a=()=>o.remove();o.querySelector("#qcp-backdrop").onclick=a,o.querySelector("#qcp-close").onclick=a,o.querySelectorAll(".qcp-cls").forEach(d=>{d.onclick=()=>{a();const l=n.find(i=>String(i.id)===d.dataset.cid);l&&He(e,l)}})}window._showClassQuickPicker=we;async function He(e,n){if(e==="attendance"){const{renderAttendanceGrid:s}=await g(async()=>{const{renderAttendanceGrid:o}=await import("./teacher-views-attendance-DkKZdoEb.js");return{renderAttendanceGrid:o}},__vite__mapDeps([18,1,2,3,4,5,6,19,9]));s(t,n)}else{const{renderGradesGrid:s}=await g(async()=>{const{renderGradesGrid:o}=await import("./teacher-views-grades-CXFdJBGK.js").then(a=>a.t);return{renderGradesGrid:o}},__vite__mapDeps([15,2,3,4,5,6,13,16,1,17,9]));s(t,n)}}const En=`
  <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`,te="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/20 shadow-[0_10px_20px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.28)] ring-1 ring-white/30 text-2xl leading-none";function Sn(e,n=null){return t?(e.prayerScannerTeachers||"").split(/[\s,]+/).map(o=>o.trim()).filter(Boolean).includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||n==="admin":!1}async function ct(){var r,p,c,u,x,_,y,f;if(!t)return;(r=document.getElementById("teacher-scan-launcher"))==null||r.remove();const e=document.createElement("div");e.id="teacher-scan-launcher",e.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
    <div class="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-9 h-9 rounded-2xl text-white bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-700 flex items-center justify-center shadow-[0_10px_24px_rgba(5,150,105,0.30),inset_0_1px_0_rgba(255,255,255,0.35)]">${En}</span>
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
  `,document.body.appendChild(e);const n=()=>e.remove();e.addEventListener("click",S=>{S.target===e&&n()}),(p=e.querySelector("#scan-launcher-close"))==null||p.addEventListener("click",n);const s=e.querySelector("#scan-launcher-body"),[o,a]=await Promise.all([O().catch(()=>({})),(async()=>{try{return await C.from("profiles").select("role").eq("id",t.profile_id).maybeSingle()}catch{return{data:null}}})()]),d=Sn(o,((c=a==null?void 0:a.data)==null?void 0:c.role)??null),l="group w-full text-left rounded-3xl border p-4 flex gap-3 items-start hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition shadow-[0_14px_30px_rgba(15,23,42,0.12)]",i={attendance:{card:`${l} border-sky-700 bg-sky-600 hover:bg-sky-700 hover:shadow-[0_20px_42px_rgba(2,132,199,0.30)]`,icon:`${te} text-white group-hover:shadow-[0_14px_26px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-sky-50/85"},prayer:{card:`${l} border-emerald-700 bg-emerald-600 hover:bg-emerald-700 hover:shadow-[0_20px_42px_rgba(16,185,129,0.30)]`,icon:`${te} text-white group-hover:shadow-[0_14px_26px_rgba(16,185,129,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-emerald-50/85"},leave:{card:`${l} border-orange-700 bg-orange-500 hover:bg-orange-600 hover:shadow-[0_20px_42px_rgba(249,115,22,0.30)]`,icon:`${te} text-white group-hover:shadow-[0_14px_26px_rgba(249,115,22,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-orange-50/90"},score:{card:`${l} border-indigo-700 bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_20px_42px_rgba(79,70,229,0.30)]`,icon:`${te} text-white group-hover:shadow-[0_14px_26px_rgba(79,70,229,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-indigo-50/85"}};s.innerHTML=`
    <div class="space-y-3">
      <button id="scan-launcher-attendance" type="button" class="${i.attendance.card}">
        <span class="${i.attendance.icon}" aria-hidden="true">✅</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${i.attendance.title} text-sm">สแกน QR เช็คชื่อ</span>
          <span class="block text-xs ${i.attendance.sub} mt-1">เลือกห้องและคาบ ระบบจะโหลดข้อมูลเดิม แล้วเปิดกล้องสแกน</span>
        </span>
      </button>

      ${d?`
      <button id="scan-launcher-prayer-open" type="button" class="${i.prayer.card}">
        <span class="${i.prayer.icon}" aria-hidden="true">🕌</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${i.prayer.title} text-sm">สแกนละหมาด</span>
          <span class="block text-xs ${i.prayer.sub} mt-1">เปิดระบบสแกน แล้วเลือกจุด/บริเวณในหน้าถัดไป</span>
        </span>
      </button>
      `:`
      <div class="rounded-3xl border border-emerald-700 bg-emerald-600 p-4 space-y-3 shadow-[0_14px_30px_rgba(16,185,129,0.22)]">
        <div class="flex gap-3 items-start">
          <span class="${te} text-white" aria-hidden="true">🕌</span>
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

      <button id="scan-launcher-leave" type="button" class="${i.leave.card}">
        <span class="${i.leave.icon}" aria-hidden="true">🚪</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${i.leave.title} text-sm">ตรวจใบอนุญาตออกนอกห้อง</span>
          <span class="block text-xs ${i.leave.sub} mt-1">เปิดหน้าเดิมสำหรับสแกน QR ตรวจสถานะใบอนุญาต</span>
        </span>
      </button>

      <button id="scan-launcher-score" type="button" class="${i.score.card}">
        <span class="${i.score.icon}" aria-hidden="true">📷</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${i.score.title} text-sm">สแกนบันทึกคะแนน</span>
          <span class="block text-xs ${i.score.sub} mt-1">เลือกห้องและคอลัมน์ แล้วสแกน QR นักเรียนเพื่อกรอกคะแนนต่อเนื่อง</span>
        </span>
      </button>
    </div>
  `,(u=s.querySelector("#scan-launcher-attendance"))==null||u.addEventListener("click",async()=>{n();const{openAttendanceScanSetup:S}=await g(async()=>{const{openAttendanceScanSetup:A}=await import("./teacher-views-attendance-DkKZdoEb.js");return{openAttendanceScanSetup:A}},__vite__mapDeps([18,1,2,3,4,5,6,19,9]));S(t)}),(x=s.querySelector("#scan-launcher-leave"))==null||x.addEventListener("click",()=>{n(),D("student-leave-scanner")}),(_=s.querySelector("#scan-launcher-score"))==null||_.addEventListener("click",async()=>{n();const{openScoreScannerPickClass:S}=await g(async()=>{const{openScoreScannerPickClass:A}=await import("./score-qr-scanner-CfDHgG4i.js");return{openScoreScannerPickClass:A}},__vite__mapDeps([17,2,3,4,5,6,1]));S(t)}),(y=s.querySelector("#scan-launcher-prayer-open"))==null||y.addEventListener("click",async()=>{n();const{renderStudentPrayerScanner:S}=await g(async()=>{const{renderStudentPrayerScanner:A}=await import("./student-views-BkdO1EKt.js");return{renderStudentPrayerScanner:A}},__vite__mapDeps([53,1,2,3,4,5,6,13,54,9,25,36,19,14,26,11,16,33,8]));S(t)}),(f=s.querySelector("#scan-launcher-prayer-request"))==null||f.addEventListener("click",async()=>{const S=s.querySelector("#scan-launcher-prayer-request");S.disabled=!0,S.textContent="กำลังส่งคำขอ...";const A=["ขอสิทธิ์สแกนละหมาด",`ชื่อครู: ${t.full_name||"-"}`,`รหัสครู: ${t.teacher_code||"-"}`,`กลุ่มสาระ: ${t.dept||"-"}`,"","ต้องการใช้งานปุ่มกล้องกลางเพื่อสแกนละหมาด"].join(`
`);try{await It({profileId:t.profile_id,senderRole:"teacher",senderName:t.full_name||t.teacher_code||"คุณครู",category:"suggestion",message:A}),L("ส่งคำขอสิทธิ์สแกนละหมาดถึงแอดมินแล้ว","success"),n()}catch(v){S.disabled=!1,S.textContent="ขอสิทธิ์สแกนละหมาด",L((v==null?void 0:v.code)==="FEEDBACK_LIMIT_REACHED"?`ส่งความคิดเห็นครบโควต้าเดือนนี้แล้ว (${v.limit} ครั้ง/เดือน)`:"ส่งคำขอไม่สำเร็จ กรุณาลองใหม่",(v==null?void 0:v.code)==="FEEDBACK_LIMIT_REACHED"?"warning":"error")}})}window._openTeacherScanLauncher=ct;async function Ln(){if("serviceWorker"in navigator)try{await navigator.serviceWorker.register("/pp5online/sw.js",{scope:"/pp5online/"})}catch{}}function $n(){if(document.getElementById("notify-banner"))return;const e=document.createElement("div");e.id="notify-banner",e.className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[80] w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-indigo-100 p-4 flex items-center gap-3 animate-fade",e.innerHTML=`
    <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">🔔</div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-gray-800">เปิดการแจ้งเตือน?</p>
      <p class="text-xs text-gray-400 mt-0.5">แจ้งก่อนเข้าสอนตามที่ตั้งค่าไว้</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <button id="notify-deny" class="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">ไม่</button>
      <button id="notify-allow" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition">เปิด</button>
    </div>`,document.body.appendChild(e),e.querySelector("#notify-deny").addEventListener("click",()=>{e.remove(),localStorage.setItem("pp5_notify_dismissed","1")}),e.querySelector("#notify-allow").addEventListener("click",async()=>{e.remove(),await Notification.requestPermission()==="granted"&&(L("เปิดการแจ้งเตือนแล้ว ✅","success"),t!=null&&t.id&&await pt(t.id),t!=null&&t.profile_id&&Ke(t.profile_id))}),setTimeout(()=>e.remove(),12e3)}async function pt(e){var n,s,o;if(!(!("Notification"in window)||Notification.permission!=="granted"))try{const a=await O().catch(()=>({})),d=parseInt(a.notifyBeforeMinutes)||10,l=parseInt(a.academicYear??2568),i=parseInt(a.semester??1),[r,p,c,u]=await Promise.all([ke(e,l,i).catch(()=>[]),Ee(e).catch(()=>[]),Qe().catch(()=>[]),ae(e).catch(()=>[])]),x=new Date,_=x.getDay(),y=x.getHours()*60+x.getMinutes(),f={};p.forEach(m=>{f[m.teacher_schedule_id]||(f[m.teacher_schedule_id]=[]),f[m.teacher_schedule_id].push(m.class_id)});const S=Object.fromEntries(u.map(m=>[m.id,m])),A=Object.fromEntries(c.map(m=>[m.period_no,m]));(window._notifyTimeouts??[]).forEach(m=>clearTimeout(m)),window._notifyTimeouts=[];const v=r.filter(m=>m.day_of_week===_&&(f[m.id]??[]).length>0).map(m=>({...m,linkedClasses:(f[m.id]??[]).map(w=>S[w]).filter(Boolean),period:A[m.period_no]}));let j=0;for(const m of v){if(!((n=m.period)!=null&&n.start_time))continue;const[w,E]=m.period.start_time.split(":").map(Number),b=w*60+E-d,k=b-y;if(k<=0)continue;const P=((o=(s=m.linkedClasses[0])==null?void 0:s.master_subjects)==null?void 0:o.subject_name)??"วิชา",h=m.linkedClasses.map(M=>{var V;const R=M.classroom_id?(V=window._classroomMapGlobal)==null?void 0:V[M.classroom_id]:null;return M.class_name+(R?` 📍${R.building} ${R.room_number}`:"")}).join(", "),I=m.period.start_time.substring(0,5),q=setTimeout(async()=>{var V;const M=await((V=navigator.serviceWorker)==null?void 0:V.ready.catch(()=>null)),R={body:`${P} · ${h}
คาบ ${m.period_no} เวลา ${I}`,icon:"/pp5online/vite.svg",badge:"/pp5online/vite.svg",tag:`class-${m.id}-${b}`,requireInteraction:!1,silent:!1};M?M.showNotification(`🔔 อีก ${d} นาที — คาบถัดไป`,R):new Notification(`🔔 อีก ${d} นาที — คาบถัดไป`,R)},k*6e4);window._notifyTimeouts.push(q),j++}j>0&&L(`ตั้งแจ้งเตือน ${j} คาบสำหรับวันนี้ 🔔`,"info")}catch{}}async function In(e){"Notification"in window&&(await Ln(),Notification.permission==="granted"?(await pt(e),t!=null&&t.profile_id&&Ke(t.profile_id)):Notification.permission==="default"&&(localStorage.getItem("pp5_notify_dismissed")||setTimeout($n,2e3)))}async function Cn(){try{const{data:e}=await C.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(!e)return;const{data:n}=await C.from("sports_portal_settings").select("teacher_shirt_request_enabled").eq("event_id",e.id).maybeSingle();if(!(n!=null&&n.teacher_shirt_request_enabled))return;const{data:s}=await C.from("sports_shirt_teacher_requests").select("id").eq("event_id",e.id).eq("teacher_id",t.id).maybeSingle();if(s)return;qn()}catch{}}function qn(){var n;(n=document.getElementById("shirt-size-reminder-popup"))==null||n.remove();const e=document.createElement("div");e.id="shirt-size-reminder-popup",e.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.querySelector("#ssrp-go").addEventListener("click",()=>{e.remove(),g(()=>import("./sports-portals.js_v_10.22-0gLUuL_V.js"),__vite__mapDeps([29,1,30,3,28,8,14,4,11])).then(s=>{var o;return(o=s.openTeacherShirtSizeModal)==null?void 0:o.call(s,t)})}),e.querySelector("#ssrp-close").addEventListener("click",()=>e.remove())}async function Tn(){try{const e=await O().catch(()=>({})),n=parseInt(e.academicYear??2568),s=parseInt(e.semester??1),[o,a,d]=await Promise.all([ae(t.id).catch(()=>[]),ke(t.id,n,s).catch(()=>[]),Ee(t.id).catch(()=>[])]);if(!o.length)return;if(!a.length){Fe("no_schedule");return}const l=new Set(d.map(r=>r.class_id)),i=o.filter(r=>!l.has(r.id));i.length>0&&Fe("has_unlinked",i.length,i.map(r=>r.id))}catch{}}function Fe(e,n=0,s=[]){var d;(d=document.getElementById("sched-link-prompt"))==null||d.remove();const o=e==="no_schedule",a=document.createElement("div");a.id="sched-link-prompt",a.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",a.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br ${o?"from-indigo-500 to-purple-500":"from-amber-400 to-orange-400"} px-6 py-6 text-center">
        <div class="text-4xl mb-2">${o?"🗓️":"🔗"}</div>
        <h3 class="text-white font-bold text-base">${o?"ยังไม่มีตารางสอน":`มี ${n} ห้องที่ยังไม่เชื่อมโยง`}</h3>
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
    </div>`,document.body.appendChild(a),a.querySelector("#slp-go").addEventListener("click",()=>{a.remove(),o?window._navTo("schedule-builder"):s.length===1&&window._openCombinedEdit?(window._navTo("my-classes"),setTimeout(()=>{var l;return(l=window._openCombinedEdit)==null?void 0:l.call(window,s[0],"schedule")},400)):window._navTo("my-classes")}),a.querySelector("#slp-close").addEventListener("click",()=>a.remove())}window._openScheduleLinkModal=async e=>{var d,l,i;const n=(d=window._classCache)==null?void 0:d[e],s=(l=window._classColorCache)==null?void 0:l[e],o=(n==null?void 0:n.class_name)??"—",a=n==null?void 0:n.master_subjects;try{L("กำลังโหลด...","info");const r=await O().catch(()=>({})),p=parseInt(r.academicYear??2568),c=parseInt(r.semester??1),[u,x,_]=await Promise.all([ke(t==null?void 0:t.id,p,c).catch(()=>[]),Ee(t==null?void 0:t.id).catch(()=>[]),Qe().catch(()=>[])]);if(!u.length){L("ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อนครับ","error");return}const y=new Set(x.filter(b=>b.class_id===e).map(b=>b.teacher_schedule_id)),f=new Set(y),S=Object.fromEntries(_.map(b=>[b.period_no,b])),A=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],v={};x.filter(b=>b.class_id!==e).forEach(b=>{var P,h;const k=(P=window._classCache)==null?void 0:P[b.class_id];k&&(v[b.teacher_schedule_id]||(v[b.teacher_schedule_id]=[]),v[b.teacher_schedule_id].push({className:k.class_name??"—",subjectName:((h=k.master_subjects)==null?void 0:h.subject_name)??"—"}))});const j=(s==null?void 0:s.soft)??"#f0fdf4",m=(s==null?void 0:s.border)??"#d1fae5",w=(s==null?void 0:s.text)??"#065f46";(i=document.getElementById("sched-link-modal"))==null||i.remove();const E=document.createElement("div");E.id="sched-link-modal",E.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4";const T=(b,k)=>{const P=S[b.period_no],h=P?`${P.start_time.substring(0,5)} – ${P.end_time.substring(0,5)}`:"",I=b.span_periods>1?`–${b.period_no+b.span_periods-1}`:"",q=v[b.id]??[],M=q.length>0&&!k;let R,V;k?(R="border-emerald-400 bg-emerald-50 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]",V='<span class="text-xl flex-shrink-0 mt-0.5">✅</span>'):M?(R="border-gray-200 bg-gray-50 opacity-70 cursor-pointer",V='<span class="text-xl flex-shrink-0 mt-0.5">🔒</span>'):(R="border-gray-200 bg-white hover:border-gray-300",V='<span class="text-xl flex-shrink-0 mt-0.5">⬜</span>');const X=q.map(ee=>`${ee.subjectName} (${ee.className})`).join(", ");return`
      <button type="button" class="slm-card w-full text-left p-4 rounded-2xl border-2 transition-all ${R}"
        data-id="${b.id}" data-sel="${k?"1":"0"}" data-locked="${M?"1":"0"}"
        data-others="${X.replace(/"/g,"&quot;")}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            <p class="text-base font-bold text-gray-800">${A[b.day_of_week]} · คาบ ${b.period_no}${I}</p>
            <p class="text-sm text-gray-500 mt-0.5">${h}</p>
            ${b.class_name?`<p class="text-base font-semibold mt-1" style="color:${w}">${b.class_name}</p>`:""}
            ${q.length>0?`<p class="text-[11px] text-amber-600 mt-1.5">⚠️ เชื่อมกับ: ${X}</p>`:""}
          </div>
          ${V}
        </div>
      </button>`};E.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>

        <!-- Header พร้อมสีห้อง -->
        <div class="px-5 pt-5 pb-4 border-b rounded-t-2xl flex-shrink-0"
          style="background:${j}; border-color:${m}">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-wider mb-1" style="color:${w}">🔗 เชื่อมโยงตารางสอน</p>
              <h3 class="text-xl font-extrabold leading-tight" style="color:${w}">${o}</h3>
              ${a!=null&&a.subject_name?`<p class="text-sm mt-0.5" style="color:${w};opacity:.75">${a.subject_name}</p>`:""}
            </div>
            <button id="slm-close" class="text-2xl leading-none flex-shrink-0 opacity-60 hover:opacity-100 transition"
              style="color:${w}">×</button>
          </div>
        </div>

        <!-- Slot list -->
        <div class="px-4 py-3 overflow-auto flex-1">
          <p class="text-xs text-gray-400 mb-3">แตะการ์ดเพื่อเลือก/ยกเลิก (เลือกได้หลายคาบ)</p>
          <div id="slm-list" class="space-y-2">
            ${u.map(b=>T(b,f.has(b.id))).join("")}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-4 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
          <button id="slm-save"
            class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition">
            บันทึกการเชื่อมโยง
          </button>
        </div>
      </div>`,document.body.appendChild(E),E.querySelector("#slm-list").addEventListener("click",b=>{var M;const k=b.target.closest(".slm-card");if(!k)return;const P=parseInt(k.dataset.id),h=k.dataset.sel==="1",I=k.dataset.locked==="1",q=u.find(R=>R.id===P);if(I&&!h){(M=document.getElementById("slm-confirm-popup"))==null||M.remove();const R=document.createElement("div");R.id="slm-confirm-popup",R.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-6";const V=k.dataset.others;R.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">⚠️</div>
            <h4 class="font-bold text-gray-800 mb-2">คาบนี้ถูกเชื่อมโยงแล้ว</h4>
            <p class="text-xs text-gray-500 leading-relaxed mb-5">
              คาบนี้ถูกเชื่อมโยงกับ<br/>
              <span class="font-semibold text-amber-700">${V}</span><br/>
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
          </div>`,document.body.appendChild(R),R.querySelector("#slm-conf-no").addEventListener("click",()=>R.remove()),R.querySelector("#slm-conf-yes").addEventListener("click",()=>{R.remove(),f.add(P),k.outerHTML=T(q,!0)});return}h?f.delete(P):f.add(P),k.outerHTML=T(q,!h)}),E.querySelector("#slm-close").addEventListener("click",()=>E.remove()),E.addEventListener("click",b=>{b.target===E&&E.remove()}),E.querySelector("#slm-save").addEventListener("click",async()=>{const b=E.querySelector("#slm-save");b.disabled=!0,b.textContent="⏳ กำลังบันทึก...";try{const k=[...f].filter(h=>!y.has(h)),P=[...y].filter(h=>!f.has(h));await Promise.all([...k.map(h=>kt(e,h)),...P.map(h=>Et(e,h))]),L("บันทึกการเชื่อมโยงแล้ว ✅","success"),E.remove(),window._navTo("my-classes")}catch(k){L("เกิดข้อผิดพลาด: "+G(k),"error"),b.disabled=!1,b.textContent="บันทึกการเชื่อมโยง"}})}catch(r){L("โหลดข้อมูลไม่ได้: "+G(r),"error")}};document.addEventListener("DOMContentLoaded",async()=>{var r,p,c,u,x,_,y,f,S,A,v,j;Rt();const e=Ht();let n=!1;if(e)try{if(ge(!0),await Ft(C),t=e.profile_id?await J(e.profile_id).catch(()=>null)??await je(e.id).catch(()=>e):await je(e.id).catch(()=>e),!(t!=null&&t.id)||(t==null?void 0:t.profile_id)!==e.profile_id)throw new Error("ไม่พบข้อมูลครูเป้าหมายของเซสชันสวมบทบาท");const{data:m}=await C.from("profiles").select("role,is_also_admin").eq("id",e.profile_id).maybeSingle();if(U=(m==null?void 0:m.is_also_admin)===!0,K=(m==null?void 0:m.role)==="admin"||U,await Se(),await Ye("teacher",t??{}),F=t!=null&&t.id?await le(t.id).catch(()=>[]):[],t!=null&&t.position||(r=t==null?void 0:t.positions)!=null&&r.length){const b=(p=t.positions)!=null&&p.length?t.positions:[t.position];N=await Me(b).catch(()=>({}))}await ce(),Ne(t),et(t);const w=document.getElementById("impersonation-banner"),E=document.getElementById("impersonation-name"),T=document.getElementById("impersonation-exit");w&&E&&(E.textContent=`${(t==null?void 0:t.full_name)??e.full_name} (${(t==null?void 0:t.teacher_code)??e.teacher_code??""})`,w.classList.remove("hidden"),w.classList.add("flex")),T&&T.addEventListener("click",async()=>{try{T.disabled=!0,T.textContent="กำลังกลับสู่บัญชีแอดมิน...",await De(C),window.location.replace("dashboard.html")}catch(b){console.error("Cannot end impersonation:",b),T.disabled=!1,T.textContent="← ออกจากโหมดนี้",L("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}}),n=!0}catch(m){console.error("Invalid impersonation session:",m),zt(),await C.auth.signOut(),L("เซสชันสวมบทบาทไม่ถูกต้อง กรุณาเข้าสู่ระบบแอดมินใหม่","error"),setTimeout(()=>window.location.replace("index.html"),1e3);return}if(!n){const m=await tn();if(!m)return;if(await Le(m.user.id),F=t?await le(t.id).catch(()=>[]):[],t!=null&&t.position||(c=t==null?void 0:t.positions)!=null&&c.length){const w=(u=t.positions)!=null&&u.length?t.positions:[t.position];N=await Me(w).catch(()=>({}))}await ce(),Ne(t),St("teachers").catch(()=>{}),Lt("teacher").catch(()=>{})}ye(),ve(),rn(),t!=null&&t.id&&fn(t.id),t!=null&&t.id&&Tn(),t!=null&&t.id&&Cn(),t!=null&&t.id&&In(t.id),Dt(),hn(),wn(),ut(),t!=null&&t.profile_id&&xt({profileId:t.profile_id,role:"teacher",name:t.full_name}),t!=null&&t.id&&g(()=>import("./teacher-views-donor-chat-DuEU7Pt_.js"),__vite__mapDeps([55,1,2,3,4,5,6,9,14,41,42,11,7,25,26,27,43,44,28,45,30,8,46,47,16])).then(m=>{m.injectDonorChatWidget(t),pe(se)}),pn(),pe(se);const s=document.getElementById("app-version");if(s&&(s.textContent=`v${jt}`,K)){s.classList.add("cursor-pointer","hover:underline");const m=(t==null?void 0:t.profile_id)||((_=(x=(await C.auth.getSession()).data.session)==null?void 0:x.user)==null?void 0:_.id);m&&s.addEventListener("click",()=>Ae(m,!0,!0))}!n&&(t!=null&&t.profile_id)&&K&&Ae(t.profile_id,!1,!0),window.addEventListener("teacher-nav",async m=>{const{view:w,classId:E}=m.detail??{};if(w==="class-detail-sv"&&E){try{const T=await $t(E);if(T){window._openStudentManager=()=>Promise.resolve(),window._openCombinedEditModal=()=>{},window._classCache={[T.id]:T};const{renderClassDetail:b}=await g(async()=>{const{renderClassDetail:k}=await import("./teacher-views-B31NLFxx.js");return{renderClassDetail:k}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));if(await b(t,E,{supervisorMode:!0,classes:[T],defaultTab:"attendance"}),window._svBackToDetail){const k=window._svBackToDetail,P=window._backToClasses;window._backToClasses=()=>{const h=document.getElementById("main-content-bak"),I=document.getElementById("main-content");I&&(I.id="cd-tab-content"),h&&(h.id="main-content"),k()}}setTimeout(()=>{document.querySelectorAll(".cd-tab").forEach(k=>{k.dataset.tab==="students"&&(k.style.display="none")}),document.querySelectorAll("button").forEach(k=>{const P=k.textContent.trim();["ทำสำเนา","แก้ไข","ลบ"].some(h=>P.includes(h))&&(k.style.display="none"),P.includes("ปพ.5")&&!P.includes("ดูภาพรวม")&&(k.innerHTML="📋 ดูภาพรวม ปพ.5")})},200)}}catch(T){console.error("supervisor class view error:",T)}return}E&&(window._sv_classId=E),D(w??"overview")}),document.querySelectorAll("[data-nav]").forEach(m=>{m.addEventListener("click",w=>{w.preventDefault(),D(m.dataset.nav)})}),(y=document.getElementById("btn-quick-attendance"))==null||y.addEventListener("click",m=>{m.preventDefault(),we("attendance")}),(f=document.getElementById("btn-quick-grades"))==null||f.addEventListener("click",m=>{m.preventDefault(),we("grades")}),(S=document.getElementById("btn-quick-leave-scanner"))==null||S.addEventListener("click",m=>{m.preventDefault(),ct()}),(A=document.getElementById("menu-dashboard"))==null||A.addEventListener("click",async m=>{m.preventDefault();const{openDashboardRoomPicker:w}=await g(async()=>{const{openDashboardRoomPicker:E}=await import("./teacher-views-dashboard-B0a46sXh.js");return{openDashboardRoomPicker:E}},__vite__mapDeps([50,2,3,4,5,6]));w(t,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})});const o=document.getElementById("sidebar"),a=document.getElementById("sidebar-overlay");(v=document.getElementById("btn-menu"))==null||v.addEventListener("click",()=>{o.classList.toggle("-translate-x-full"),a.classList.toggle("hidden")}),a==null||a.addEventListener("click",()=>{o.classList.add("-translate-x-full"),a.classList.add("hidden")}),(j=document.getElementById("btn-logout"))==null||j.addEventListener("click",async()=>{if(n){try{await De(C),window.location.replace("dashboard.html")}catch(m){console.error("Cannot end impersonation:",m),L("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}return}await C.auth.signOut(),Vt(),L("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}),ge(!1);const d=new URLSearchParams(window.location.search),l=d.get("setup")==="1",i=d.get("view");l?(D("setup"),history.replaceState({},"","teacher.html")):i&&tt[i]?(window._pendingQRTab=d.get("tab")||null,D(i)):D("overview")});
