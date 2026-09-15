const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-Bd39g1Ox.js","assets/ui-DI1UEpN2.js","assets/version.js_v_10.22-DxLTis1W.js","assets/api-CnonnVVn.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/sports-portals.js_v_10.22-BUafGoVM.js","assets/sports-awards-admin-6oCPrlSb.js","assets/azizgames-modal-BVIqoUog.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/browser-JP79f-a9.js","assets/teacher-views-utils-Ceiaeijy.js","assets/teacher-views-classes-DL_utrrp.js","assets/pp5-doc-tM_R--md.js","assets/score-display-BIDpG83o.js","assets/teacher-views-grades-BNr4W9tM.js","assets/regrade-api-C8s-TuM0.js","assets/score-qr-scanner-5qGz2lzF.js","assets/teacher-views-attendance-4LvVNsuY.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/views-B39y6ETM.js","assets/leave-monitor.js_v_10.18-BVSLTvM6.js","assets/import-D0GLDW1_.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azfutsal-modal-C49SHklA.js","assets/teacher-views-flashcards-BN6SJ7tm.js","assets/teacher-views-certificates-B8L4UJLk.js","assets/certificate-engine-CjKzMmMi.js","assets/certificate-editor-By_GCKpx.js","assets/teacher-views-quiz-banks-B-LNACQS.js","assets/quiz-api-BIDUVPR5.js","assets/katex-loader-DUJObfzT.js","assets/teacher-views-exam-docs.js_v_10.22-C9F5a_yr.js","assets/teacher-views-leave-scanner.js_v_10.18-DvOX437H.js","assets/teacher-views-smart-classroom-CE6WSwkB.js","assets/teacher-views-quiz-monitor-5lrNmmkc.js","assets/teacher-views-quiz-analytics-Bbe5qdcq.js","assets/teacher-views-dashboard-DXzxtYZl.js","assets/lesson-plan-ai-workspace-BUr-0sOG.js","assets/promptpay-CIuxvxIA.js","assets/push-notify-CIUUKsmF.js","assets/wen-sso-CcN06Rhh.js","assets/tutorial-DW5HF32q.js","assets/terangganu-api-C1IjZK4l.js","assets/supervisor-Do2RNAox.js","assets/student-views-hKS-NxYr.js","assets/student-api-B9JY02Vu.js","assets/teacher-views-donor-chat-B6PovRj_.js"])))=>i.map(i=>d[i]);
import{a as S,_ as b,g as G,s as be,i as dt,c as lt,d as Ie,e as ct,f as pt}from"./ui-DI1UEpN2.js";import{s as q}from"./supabase-BV-W2lsh.js";import{getMyClasses as se,getSystemConfig as O,createSubject as Ne,getMasterSubjects as me,updateSubjectAtomic as mt,getCourseDocPage2 as ut,saveCourseDocPage2 as xt,deleteSubject as ft,getTeacherPackageAccess as bt,getMyPaymentRequests as gt,createPaymentRequest as we,uploadPaymentSlip as Oe,getMySchedule as _e,getClassScheduleLinks as ke,getPeriods as Ve,linkClassToSchedule as yt,unlinkClassFromSchedule as vt,getMyTeacherProfile as K,getTeacherById as Ce,getMyHomeroomRooms as de,getTeacherPositionPermissions as qe,updateLastSeen as ht,logLogin as wt,getClassByIdFull as _t,getMySubjects as ue,getMyDonationRequests as He,submitAppFeedback as kt,getPendingExamRequestCount as Et,getActiveAnnouncements as St,getUnreadNotifications as Lt,markNotificationsRead as $t}from"./api-CnonnVVn.js";import{p as Fe}from"./promptpay-CIuxvxIA.js";import{C as Te,o as It,r as Ct,a as qt,b as Tt,c as Pt,d as ze,e as Ue,f as At,g as jt}from"./sports-portals.js_v_10.22-BUafGoVM.js";import{a as Qe}from"./theme-DIdoXkqD.js";import{A as Mt}from"./version.js_v_10.22-DxLTis1W.js";import{b as Rt}from"./anti-pull-refresh-BGrI1pMY.js";import{i as Dt,e as Ge}from"./push-notify-CIUUKsmF.js";import{_teacherPositionList as Bt,_teacherPositionLabel as Nt}from"./teacher-views-utils-Ceiaeijy.js";import{b as Ot,c as Vt}from"./wen-sso-CcN06Rhh.js";import{o as We}from"./azizgames-modal-BVIqoUog.js";import{o as Ht}from"./azfutsal-modal-C49SHklA.js";import{getImpersonationContext as Ft,validateImpersonation as zt,endImpersonation as Pe,clearImpersonation as Ut}from"./impersonation-0xVfgYVY.js";import{renderTutorial as Qt}from"./tutorial-DW5HF32q.js";import{g as Gt}from"./terangganu-api-C1IjZK4l.js";import{g as Wt}from"./regrade-api-C8s-TuM0.js";let t=null,F=[],z=!1,ae=!1,re=!1,N={},Q={enabled:!0,teacher_menu:!0,student_menu:!0,public_page:!0};window._pp5DonorTierIndex=0;window._pp5SystemCfg={};async function Ee(){try{const{data:e,error:s}=await q.from("settings").select("value").eq("key","sports_visibility").maybeSingle();!s&&(e!=null&&e.value)&&(Q={...Q,...e.value})}catch{}return Q}async function Yt(){be(!0);const{data:{session:e}}=await q.auth.getSession();return e||(window.location.replace("index.html"),null)}async function Se(e){var l,r,i;const[s,n,o]=await Promise.all([K(e),q.auth.getSession(),q.from("profiles").select("role, is_also_admin").eq("id",e).maybeSingle()]);t=s,t&&(t.auth_email=((i=(r=(l=n==null?void 0:n.data)==null?void 0:l.session)==null?void 0:r.user)==null?void 0:i.email)??""),await Qe("teacher",t??{});const a=o==null?void 0:o.data;z=(a==null?void 0:a.is_also_admin)===!0,re=(a==null?void 0:a.role)==="admin"||z;const d=document.querySelector("header .flex.items-center.gap-3:last-child");if(z&&d&&!document.getElementById("btn-switch-admin")){const m=document.createElement("a");m.id="btn-switch-admin",m.href="dashboard.html",m.title="สลับไปหน้าแอดมิน",m.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 shadow-sm border border-emerald-200/50 mr-1",m.innerHTML="<span>⚙️</span><span>สลับเป็นแอดมิน</span>",d.insertBefore(m,d.firstChild)}await Ee(),Ye(t)}function Ye(e){const s=document.querySelector("#sidebar nav"),n=Bt(e),o=Nt(e);if(n.length>0&&s&&!document.getElementById("btn-sv-mode")){const c=document.createElement("button");c.id="btn-sv-mode",c.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition w-full text-left text-emerald-200 hover:bg-emerald-800 hover:text-white",c.style.color="#93c5fd",c.innerHTML=`<span>📊</span><span>Dashboard ${o}</span>`,c.onclick=$e;const u=s.querySelector('[data-nav="work-calendar-view"]');u?u.insertAdjacentElement("afterend",c):s.insertBefore(c,s.firstChild)}Kt();const a=(e==null?void 0:e.full_name)??"ครูผู้สอน",d=e!=null&&e.teacher_code?`รหัส ${e.teacher_code}`:"",l=(e==null?void 0:e.image_url)??"",r=document.getElementById("t-avatar");l?r.innerHTML=`<img src="${l}" class="w-full h-full object-cover" />`:r.textContent=a.charAt(0).toUpperCase(),document.getElementById("t-name").textContent=a,document.getElementById("t-code").textContent=d,e!=null&&e.id&&pn(e.id),document.getElementById("user-name").textContent=a;const i=document.getElementById("user-role-label");i&&(i.textContent=n.length?o:"ครูผู้สอน");const m=document.getElementById("user-avatar");l?m.innerHTML=`<img src="${l}" class="w-full h-full object-cover" />`:m.textContent=a.charAt(0).toUpperCase()}function Kt(){const e=document.getElementById("menu-sports-shortcut");if(!e)return;const s=Q.enabled!==!1&&Q.teacher_menu!==!1;e.classList.toggle("hidden",!s)}function fe(e,s){if(e.length===1){s(e[0].main_room);return}const n=document.createElement("div");n.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),n.querySelectorAll(".room-pick-btn").forEach(o=>o.addEventListener("click",()=>{n.remove(),s(o.dataset.room)})),n.querySelector("#room-pick-cancel").addEventListener("click",()=>n.remove())}const Ke={"announcements-view":()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderAnnouncementsView(t)),"work-calendar-view":()=>b(async()=>{const{renderWorkCalendarView:e,renderWorkCalendar:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderWorkCalendarView:e,renderWorkCalendar:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28])).then(({renderWorkCalendarView:e,renderWorkCalendar:s})=>N.work_calendar?s(t):e()),overview:()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderTeacherOverview(t,F)),"my-courses":()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderMyCourses(t)),"my-classes":()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderMyClasses(t)),attendance:()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderAttendance(t)),"life-skill-score":()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>{const s=F.filter(n=>n.category==="สามัญ");fe(s,n=>e.renderLifeSkillScore(t,s.filter(o=>o.main_room===n)))}),"reading-score":()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>{const s=window._pendingReadingRoom;window._pendingReadingRoom=null,e.renderReadingScore(t,s)}),"prayer-score":()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>{const s=F.filter(n=>n.category==="ศาสนา");s.length===0?e.renderPrayerScore(t,[]):fe(s,n=>e.renderPrayerScore(t,s.filter(o=>o.main_room===n)))}),"prayer-monitor":()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>{const s=F.filter(o=>o.category==="ศาสนา"),n=window._pendingPrayerMonitorRoom||null;window._pendingPrayerMonitorRoom=null,s.length===0?e.renderPrayerRoomMonitor(t,[]):n&&s.some(o=>o.main_room===n)?e.renderPrayerRoomMonitor(t,s,n):s.length===1?e.renderPrayerRoomMonitor(t,s,s[0].main_room):fe(s,o=>e.renderPrayerRoomMonitor(t,s,o))}),grades:()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderGrades()),requests:()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderRequests(t)),schedule:()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderSchedule(t)),tutorial:()=>Qt(),flashcards:()=>b(()=>import("./teacher-views-flashcards-BN6SJ7tm.js"),__vite__mapDeps([29,1,2,3,4,5,6,13])).then(e=>e.renderFlashcardDecks(t)),certificates:()=>b(()=>import("./teacher-views-certificates-B8L4UJLk.js"),__vite__mapDeps([30,1,2,31,4,10,32,11,13])).then(e=>e.renderCertificateManager(t)),"quiz-system":()=>b(()=>import("./teacher-views-quiz-banks-B-LNACQS.js"),__vite__mapDeps([33,1,2,34,4,25,13,35])).then(e=>e.renderQuizBanks(t)),"exam-docs":()=>b(()=>import("./teacher-views-exam-docs.js_v_10.22-C9F5a_yr.js"),__vite__mapDeps([36,3,4,5,6,1,2,10,13])).then(e=>e.renderExamDocuments(t)),sports:()=>{var n;const e=(n=t==null?void 0:t.positions)!=null&&n.length?t.positions:t!=null&&t.position?[t.position]:[],s=N.menu_sports_admin||e.includes("house_color_admin")||(t==null?void 0:t.staff_type)==="แอดมิน"||(t==null?void 0:t.position)==="admin";We(s?{admin:!0,teacherName:t==null?void 0:t.full_name,teacherCode:t==null?void 0:t.teacher_code}:{})},"advisor-students":()=>At(t,F),"shirt-summary":()=>Ue(),"sports-fund-admin":()=>ze(),"sports-overview-admin":()=>Pt(),"sports-evaluation":()=>Tt(),"shirt-vote-settings":()=>qt(),"shirt-vote-dashboard":()=>Ct(),"my-team-workspace":()=>It(),"student-qr-print":()=>{const e=window._pendingQRClassId||null;window._pendingQRClassId=null,b(()=>import("./teacher-views-classes-DL_utrrp.js").then(s=>s.t),__vite__mapDeps([14,1,2,3,4,5,6,12,7,8,9,10,11,15,16,13,17,18,19,20,21,22])).then(s=>s.renderStudentQRPrint(t,e,{isQrManager:ae}))},"student-leave-scanner":()=>{b(()=>import("./teacher-views-leave-scanner.js_v_10.18-DvOX437H.js"),__vite__mapDeps([37,3,4,5,6,24,21,1,2,13])).then(e=>e.renderStudentLeaveScanner(t))},"smart-classroom":()=>{const e=window._pendingSmartClassroomId;window._pendingSmartClassroomId=null,b(()=>import("./teacher-views-smart-classroom-CE6WSwkB.js"),__vite__mapDeps([38,1,2,3,4,5,6,34,19,20,21,13,17,16,18,39,40,41,14,12,7,8,9,10,11,15,22,42,43,26,27,44,45,28,46,47])).then(s=>s.renderSmartClassroom(t,e))},"schedule-builder":()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderScheduleBuilder(t,()=>R("overview"))),profile:()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderProfile(t,F,tn)),setup:()=>b(()=>import("./teacher-views-Bd39g1Ox.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderProfileSetup(t,F,nn))};let te="overview";async function R(e){if(!(t!=null&&t.id))try{const{data:{user:n}}=await q.auth.getUser();n!=null&&n.id&&(t=await K(n.id).catch(()=>null)??t)}catch{}if(document.body.classList.remove("sc-fullscreen"),window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),typeof window._cleanupLeaveScanner=="function")try{window._cleanupLeaveScanner()}catch{}if(typeof window._cleanupPrayerRoomMonitor=="function")try{window._cleanupPrayerRoomMonitor()}catch{}if(typeof window._cleanupAdvisorShirtPaymentScanner=="function")try{window._cleanupAdvisorShirtPaymentScanner()}catch{}if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}const s=Ke[e];s&&(te=e,s()),ce(e)}window._navTo=R;window._goBack=()=>R("my-courses");window._refreshCurrentView=()=>R(te);window.addEventListener("pp5:open-sports-shirt-summary",()=>R("shirt-summary"));window.addEventListener("pp5:open-shirt-vote-settings",()=>R("shirt-vote-settings"));window.addEventListener("pp5:open-shirt-vote-dashboard",()=>R("shirt-vote-dashboard"));const $=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),U=(e,s)=>{const n=parseInt(e,10);return Number.isFinite(n)&&n>0?n:s};function Jt(e){return[1,2,3,4].map(s=>(e[`donationGeminiKey${s}`]??"").trim()).filter(Boolean)}async function Zt(e,s,{maxTokens:n=1024}={}){var l,r,i,m,c;const{data:o,error:a}=await q.functions.invoke("gemini-proxy",{body:{keyType:"donation",prompt:s,maxTokens:n}});if(a)throw new Error(a.message??"Edge Function error");if(o!=null&&o.error)throw new Error(o.error.message??"Gemini error");return{text:((c=(m=(i=(r=(l=o==null?void 0:o.candidates)==null?void 0:l[0])==null?void 0:r.content)==null?void 0:i.parts)==null?void 0:m[0])==null?void 0:c.text)??"",keyIndex:1}}window._callDonationAI=Zt;window._getDonationGeminiKeys=Jt;const Le=e=>{const s=String(e.donationSpecialFeatures??"").trim();return(s?s.split(`
`).map(a=>a.trim()).filter(Boolean).map(a=>{const d=a.split("|").map(m=>m.trim()),l=d[0]||"✨",r=d[1]||d[0]||a,i=parseInt(d[2])||1;return{icon:l,text:r,minTier:i}}):[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([a,d,l])=>({icon:a,text:d,minTier:l}))).filter(a=>a.text)},Je=(e,s,n)=>{var a;if(!n)return 0;const o=(a=[...s].map((d,l)=>({t:d,i:l})).reverse().find(({t:d})=>n>=d.amount))==null?void 0:a.i;return o!==void 0?o+1:0},xe=(e,s,n)=>{const o=String(e.donationStickerTiers??"").trim();return(o?o.split(`
`).map(r=>r.trim()).filter(Boolean).map(r=>{const[i,m,c,u,x]=r.split("|").map(w=>w.trim());return{amount:U(i,0),sticker:m||"🏅",title:c||`ผู้สนับสนุน ${i||""} บาท`,note:u||"ขอบคุณที่ช่วยสนับสนุนการพัฒนาระบบครับ",color:x||""}}):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([r,i,m,c,u])=>({amount:r,sticker:i,title:m,note:c,color:u}))).filter(r=>r.amount>0).sort((r,i)=>r.amount-i.amount).map((r,i)=>{const m=e[`donationStickerImg${i+1}`]??"";return m&&/^https?:\/\//.test(m)?{...r,sticker:m}:r})},Ae=e=>{if(!e)return"";const s=String(e.sticker??"");return`
    <div class="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-3 shadow-sm">
      ${/^https?:\/\//.test(s)?`<img src="${$(s)}" class="w-14 h-14 object-contain drop-shadow-md" />`:`<div class="w-14 h-14 flex items-center justify-center text-3xl">${$(s||"🏅")}</div>`}
      <div class="min-w-0">
        <p class="text-sm font-bold text-amber-900">${$(e.title)}</p>
        <p class="text-[11px] text-amber-700 leading-relaxed">${$(e.note)}</p>
      </div>
    </div>`},Xt=e=>`https://docs.google.com/spreadsheets/d/${encodeURIComponent(e)}/copy`;async function Ze(){var l;const e=await O().catch(()=>({})),s={start:[{key:"สามัญ",label:"📚 สามัญ"},{key:"ศาสนา",label:"🕌 ศาสนา"}],สามัญ:Te.filter(r=>r.category==="สามัญ"),ศาสนา:Te.filter(r=>r.category==="ศาสนา")},n=["start"];(l=document.getElementById("standalone-copy-modal"))==null||l.remove();const o=document.createElement("div");o.id="standalone-copy-modal",o.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`<div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div>
        <h3 class="text-xl font-bold text-pink-500 leading-tight">สร้างสำเนาไฟล์ ปพ5Online</h3>
        <p class="text-xs text-gray-400 mt-1">สำหรับใช้งานไฟล์ Google Sheet แบบเดิม</p>
      </div>
      <button id="copy-flow-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div id="copy-flow-app"></div>
  </div>`,document.body.appendChild(o);const a=o.querySelector("#copy-flow-app"),d=()=>{var m;const r=n[n.length-1],i=s[r]||[];a.innerHTML=`
      <div class="text-center text-lg text-gray-600 mb-4">${n.length===1?"เลือกหมวดหมู่":"เลือกกลุ่ม/ประเภท"}</div>
      <div class="flex flex-col gap-3">
        ${i.map(c=>{const u=c.defaultId?jt(e,c.key):"";return u?`
            <a href="${Xt(u)}" target="_blank" rel="noopener noreferrer"
              class="w-full ${c.color||"bg-gradient-to-r from-pink-400 to-green-400"} text-white font-semibold py-3 rounded-2xl shadow-md hover:scale-[1.02] transition-all text-center block text-lg">
              🔗 เปิดไฟล์: ${$(c.label)}
            </a>`:`
            <button data-next="${$(c.key)}"
              class="copy-flow-next w-full bg-pink-200 hover:bg-pink-300 text-pink-700 font-medium py-3 rounded-2xl shadow text-lg transition-all">
              ${$(c.label)}
            </button>`}).join("")}
      </div>
      ${n.length>1?'<button id="copy-flow-back" class="mt-6 text-sm text-gray-400 underline hover:text-pink-400 transition-all">⬅️ ย้อนกลับ</button>':""}`,a.querySelectorAll(".copy-flow-next").forEach(c=>{c.addEventListener("click",()=>{n.push(c.dataset.next),d()})}),(m=a.querySelector("#copy-flow-back"))==null||m.addEventListener("click",()=>{n.length>1&&n.pop(),d()})};o.querySelector("#copy-flow-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",r=>{r.target===o&&o.remove()}),d()}window._openStandaloneCopyFlow=Ze;window._showQuotaFromOverview=()=>{Promise.all([se((t==null?void 0:t.id)??null).catch(()=>[]),O().catch(()=>({}))]).then(([e,s])=>ne(e.length,null,s)).catch(()=>ne(0,null,{}))};window._openWenDuty=e=>{var n;(n=document.getElementById("wen-duty-modal"))==null||n.remove();const s=document.createElement("div");s.id="wen-duty-modal",s.className="fixed inset-0 z-[300] bg-white flex flex-col",s.innerHTML=`
    <div class="flex items-center justify-between px-4 py-2 bg-amber-600 text-white shadow flex-shrink-0">
      <span class="font-bold text-sm flex items-center gap-2">🛡️ ระบบเวรประจำวัน</span>
      <button id="wen-duty-close" class="text-white text-2xl leading-none px-2 hover:opacity-75">×</button>
    </div>
    <iframe src="${Ot(e)}" class="flex-1 w-full border-0"></iframe>`,document.body.appendChild(s),s.querySelector("#wen-duty-close").addEventListener("click",()=>s.remove())};window._openLifeSkillScore=e=>R("life-skill-score");window._openReligionScore=e=>R("prayer-score");window._openReligionPrayerMonitor=e=>{window._pendingPrayerMonitorRoom=e||null,R("prayer-monitor")};window._openReadingScore=()=>{window._pendingReadingRoom=null,R("reading-score")};window._openReadingScoreRoom=e=>{window._pendingReadingRoom=e,R("reading-score")};window._openReadingScorePicker=e=>{var o;let s=[];try{s=JSON.parse(e.replace(/&quot;/g,'"'))}catch{s=[]}if(!s.length){S("ยังไม่มีห้องเรียน — ลงทะเบียนห้องก่อนบันทึกคะแนน","warning");return}(o=document.getElementById("rsp-modal"))==null||o.remove();const n=document.createElement("div");n.id="rsp-modal",n.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),n.querySelector("#rsp-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",a=>{a.target===n&&n.remove()}),n.querySelectorAll(".rsp-room").forEach(a=>{a.addEventListener("click",()=>{n.remove(),window._openReadingScoreRoom(a.dataset.room)})})};let oe=null,ee=null;async function ge(){if(t)try{const e=await Et(t.id),s=document.getElementById("badge-requests");if(s&&(e>0?(s.textContent=e>99?"99+":e,s.classList.remove("hidden")):s.classList.add("hidden")),oe!==null&&e>oe){const n=e-oe;S(`🔔 มีคำร้องนักเรียนใหม่ ${n} รายการ`,"info")}oe=e}catch{}}function Xe(e){var l,r,i;const s=Math.max(0,Number(e)||0),n=s>99?"99+":String(s),o=document.getElementById("menu-regrade");(l=o==null?void 0:o.querySelector("[data-regrade-menu-badge]"))==null||l.remove(),o&&s>0&&o.insertAdjacentHTML("beforeend",`<span data-regrade-menu-badge class="ml-auto min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold inline-flex items-center justify-center">${n}</span>`);const a=document.getElementById("teacher-regrade-overview-tile");(r=a==null?void 0:a.querySelector("[data-icon-tile-badge]"))==null||r.remove(),a&&s>0&&a.insertAdjacentHTML("afterbegin",`<span data-icon-tile-badge class="absolute -top-1 right-1 z-10 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold flex items-center justify-center shadow">${n}</span>`);const d=(i=window._teacherOverviewSystems)==null?void 0:i.find(m=>m.key==="regrade");d&&(d.badge=s)}async function ye(){if(t)try{const{count:e,error:s}=await q.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",t.id).eq("status","จำนงแล้ว");if(s)throw s;const n=Number(e)||0;Xe(n),ee!==null&&n>ee&&S(`🔔 มีคำร้องแก้ค้างเก่าใหม่ ${n-ee} รายการ`,"info"),ee=n}catch{}}function en(){setInterval(()=>{document.visibilityState==="visible"&&(ge(),ye())},3e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(ge(),ye())})}async function le(){var C,T,D,M,V,Z;const e=F.some(B=>B.category==="สามัญ"),s=(t==null?void 0:t.dept)==="THAI";let n=F.some(B=>B.category==="ศาสนา");const o=(B,H)=>Promise.resolve(B).catch(()=>H),[a,d,l,r,i,m,c,u,x,w]=await Promise.all([o(O(),{}),t?o(q.from("profiles").select("role").eq("id",t.profile_id).maybeSingle(),{data:null}):Promise.resolve({data:null}),o(q.rpc("get_terangganu_access"),{data:null}),o(q.from("sports_team_memberships").select("id,role,permissions").eq("profile_id",t==null?void 0:t.profile_id).eq("is_active",!0),{data:[]}),o(q.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),{data:null}),o(q.from("qr_reissue_managers").select("profile_id").eq("profile_id",t==null?void 0:t.profile_id).maybeSingle(),{data:null}),o(Wt(),{}),t?o(q.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",t.id).eq("status","จำนงแล้ว"),{count:0}):Promise.resolve({count:0}),o(q.from("sports_score_evaluators").select("id").eq("profile_id",t==null?void 0:t.profile_id).eq("is_active",!0),{data:[]}),o(q.rpc("sports_awards_access"),{data:null})]);if(!n&&t){const B=(a.prayerScannerTeachers||"").split(/[\s,]+/).map(it=>it.trim()).filter(Boolean),H=(d==null?void 0:d.data)??null;(B.includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||(H==null?void 0:H.role)==="admin")&&(n=!0)}const f=(B,H)=>{const W=document.getElementById(B);W&&(W.classList.toggle("hidden",!H),W.classList.toggle("flex",H))},g=(B,H)=>{var W;(W=document.getElementById(B))==null||W.classList.toggle("hidden",!H)},L=F.length>0,j=(C=t==null?void 0:t.positions)!=null&&C.length?t.positions:t!=null&&t.position?[t.position]:[],v=j.includes("executive")||z,P=j.includes("executive");f("menu-life-skill",e),f("menu-reading",s),f("menu-prayer",n),f("menu-advisor-students",L),f("menu-council",a.council_visible_to_all!=="false"||z||v),f("menu-my-courses",!P),f("menu-my-classes",!P),f("menu-dashboard",!P),g("daily-work-section",!P),g("sem-work-section",!P);const p=l==null?void 0:l.data;f("menu-terangganu",(p==null?void 0:p.is_manager)===!0||(p==null?void 0:p.teacher_participant)===!0),f("menu-regrade",((T=c.visibility)==null?void 0:T.teacher_menu)===!0||z);const E=Number(u==null?void 0:u.count)||0;Xe(E);const k=(r==null?void 0:r.data)||[];f("menu-my-team",k.length>0);const I=N.menu_sports_admin||j.includes("house_color_admin")||(t==null?void 0:t.staff_type)==="แอดมิน"||(t==null?void 0:t.position)==="admin",y=I||k.some(B=>{var H;return B.role==="lead_teacher"||((H=B.permissions)==null?void 0:H.shirt_summary)===!0});f("menu-shirt-summary",!!y),f("menu-sports-fund-admin",!!I),f("menu-sports-overview-admin",!!I);const _=I||((D=x==null?void 0:x.data)==null?void 0:D.length)>0;f("menu-sports-evaluation",!!_),g("menu-awards-group",((M=w==null?void 0:w.data)==null?void 0:M.allowed)===!0);let A=!1;try{const B=((V=i==null?void 0:i.data)==null?void 0:V.id)||"00000000-0000-0000-0000-000000000001",{data:H}=await q.from("sports_shirt_vote_managers").select("id").eq("event_id",B).eq("profile_id",t==null?void 0:t.profile_id).maybeSingle();A=!!H}catch{A=!1}f("menu-shirt-vote-dashboard",!!(I||A)),ae=!!(m!=null&&m.data),f("menu-qr-reissue-requests",ae);const h=Q.enabled!==!1&&Q.teacher_menu!==!1;window._teacherOverviewSystems=[{key:"council",show:a.council_visible_to_all!=="false"||z||v,emoji:"🏛️",label:"สภา<br>นักเรียน",href:"council.html"},{key:"terangganu",show:(p==null?void 0:p.is_manager)===!0||(p==null?void 0:p.teacher_participant)===!0,emoji:"⚜️",label:"ค่าย<br>TERANGGANU",href:"terangganu.html"},{key:"regrade",id:"teacher-regrade-overview-tile",show:((Z=c.visibility)==null?void 0:Z.teacher_menu)===!0||z,emoji:"📋",label:"แก้ค้าง<br>เก่า",href:"regrade.html",badge:E},{key:"sports",show:h,emoji:"🏆",label:"กีฬาสี",nav:"sports"},{key:"certificates",show:!0,emoji:"🏅",label:"เกียรติ<br>บัตร",nav:"certificates"},{key:"advisor-students",show:L,emoji:"👥",label:"นักเรียน<br>ที่ปรึกษา",nav:"advisor-students"},{key:"my-team",show:k.length>0,emoji:"🛡️",label:"จัดการ<br>สีของฉัน",nav:"my-team-workspace"},{key:"shirt-summary",show:!!y,emoji:"📦",label:"สรุปยอด<br>เสื้อกีฬาสี",nav:"shirt-summary"},{key:"sports-fund",show:!!I,emoji:"💰",label:"บัญชีเงิน<br>กีฬาสี",nav:"sports-fund-admin"},{key:"sports-overview",show:!!I,emoji:"📊",label:"ภาพรวม<br>กีฬาสี",nav:"sports-overview-admin"},{key:"sports-evaluation",show:!!_,emoji:"🧑‍⚖️",label:"ประเมิน<br>กีฬาสี",nav:"sports-evaluation"},{key:"shirt-vote",show:!!(I||A),emoji:"🗳️",label:"ผลโหวต<br>แบบเสื้อ",nav:"shirt-vote-dashboard"},{key:"qr-print",show:ae,emoji:"🎫",label:"พิมพ์/คำขอ<br>QR",nav:"student-qr-print"},{key:"prayer-score",show:n,emoji:"🕌",label:"คะแนน<br>ศาสนา",nav:"prayer-score"}],ee=E}async function tn(e){t=await K(e),F=t?await de(t.id).catch(()=>[]):[],await Se(e),await le(),R("profile")}async function nn(e){t=await K(e),F=t?await de(t.id).catch(()=>[]):[],await Se(e),await le(),R("schedule-builder")}window._openCourseForm=async()=>{const{renderCourseForm:e}=await b(async()=>{const{renderCourseForm:s}=await import("./teacher-views-Bd39g1Ox.js");return{renderCourseForm:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));e(t,async(s,n=[])=>{await Ne(s,n)})};window._editCourse=async e=>{const n=(t?await ue(t.id).catch(()=>[]):await me().catch(()=>[])).find(a=>a.id===e);if(!n){S("ไม่พบข้อมูลคอร์ส","error");return}const{renderCourseForm:o}=await b(async()=>{const{renderCourseForm:a}=await import("./teacher-views-Bd39g1Ox.js");return{renderCourseForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));o(t,async(a,d=[])=>{await mt(e,a,d)},n)};window._copyCourse=async e=>{const n=(t?await ue(t.id).catch(()=>[]):await me().catch(()=>[])).find(a=>a.id===e);if(!n){S("ไม่พบข้อมูลคอร์สต้นฉบับ","error");return}const{renderCourseForm:o}=await b(async()=>{const{renderCourseForm:a}=await import("./teacher-views-Bd39g1Ox.js");return{renderCourseForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));o(t,async(a,d=[])=>{const l=await Ne(a,d);try{const r=await ut(e);if(r){const{subject_id:i,updated_at:m,updated_by:c,...u}=r;await xt(l.id,u)}}catch(r){S("คัดลอกคำอธิบายรายวิชาไม่สำเร็จ (สร้างคอร์สแล้ว แก้ไขคำอธิบายเพิ่มเองได้): "+G(r),"warning")}},n,{cloneFrom:e})};window._deleteCourse=(e,s)=>{var o;(o=document.getElementById("del-course-modal"))==null||o.remove();const n=document.createElement("div");n.id="del-course-modal",n.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),n.querySelector("#del-course-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#del-course-confirm").addEventListener("click",async()=>{const a=n.querySelector("#del-course-confirm");a.disabled=!0,a.textContent="กำลังลบ...";try{await ft(e),n.remove(),S(`ลบ "${s}" แล้ว`,"success"),R("my-courses")}catch(d){n.remove(),S("ลบไม่สำเร็จ: "+G(d),"error")}})};window._openRegisterClass=async e=>{const n=(t?await ue(t.id).catch(()=>[]):await me().catch(()=>[])).find(x=>x.id===e);if(!n){S("ไม่พบข้อมูลคอร์ส","error");return}const o=t==null?void 0:t.teachers_quota,[a,d,l]=await Promise.all([se((t==null?void 0:t.id)??null).catch(()=>[]),O().catch(()=>({})),bt((t==null?void 0:t.id)??null).catch(()=>({hasSemester:!1,paidRoomCount:0}))]),r=parseInt(d.freeClassQuota??2),i=(o==null?void 0:o.is_paid)&&!(o!=null&&o.package_type)&&!l.hasSemester&&!l.paidRoomCount,c=l.hasSemester||(o==null?void 0:o.package_type)==="semester"||i?1/0:r+l.paidRoomCount;if(a.length>=c){ne(a.length,n,d);return}const{renderClassForm:u}=await b(async()=>{const{renderClassForm:x}=await import("./teacher-views-Bd39g1Ox.js");return{renderClassForm:x}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));u(t,n)};window._openCourseDocPage2=async e=>{const n=(t?await ue(t.id).catch(()=>[]):await me().catch(()=>[])).find(a=>a.id===e);if(!n){S("ไม่พบข้อมูลคอร์ส","error");return}const{openCourseDocPage2Modal:o}=await b(async()=>{const{openCourseDocPage2Modal:a}=await import("./teacher-views-Bd39g1Ox.js");return{openCourseDocPage2Modal:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));await o(t,n)};function ne(e,s,n={}){var a;if(n.quotaMode==="school_sponsored"){et(e,s,n);return}(a=document.getElementById("quota-popup"))==null||a.remove();const o=document.createElement("div");o.id="quota-popup",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
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
        ${(()=>{const d=parseInt(n.freeClassQuota??2),l=parseInt(n.pricePerClass??49),r=parseInt(n.priceSemester??299),i=n.pkgPerClassDesc??"เพิ่มได้ 1 ห้องเรียนต่อการชำระเงิน",m=n.pkgSemesterDesc??"ทุกวิชา ทุกห้อง ไม่จำกัด",c=d+1;return`
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
                <p class="text-xs text-gray-400 mt-0.5">${m}</p>
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
    </div>`,document.body.appendChild(o),o.querySelector("#qp-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#qp-copy-file").addEventListener("click",()=>{o.remove(),Ze()}),o.querySelector("#qp-next").addEventListener("click",()=>{var l;const d=(l=o.querySelector('input[name="pkg"]:checked'))==null?void 0:l.value;if(!d){alert("กรุณาเลือกแพ็กเกจก่อนครับ");return}o.remove(),d==="per_subject"?st(s,n):ot(d,s,1,n)})}function et(e,s,n={}){var a;(a=document.getElementById("school-sponsored-popup"))==null||a.remove();const o=document.createElement("div");o.id="school-sponsored-popup",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#sp-donate").addEventListener("click",()=>{o.remove(),J(s,n)}),o.querySelector("#sp-access").addEventListener("click",async()=>{const d=o.querySelector("#sp-access");d.disabled=!0,d.textContent="⏳ กำลังตรวจสอบ...";try{const r=(await gt(t==null?void 0:t.id).catch(()=>[])).find(i=>i.package_type==="school_sponsored"&&(i.status==="pending"||i.status==="approved"));if(r){S(r.status==="approved"?"คุณได้รับสิทธิ์แล้วครับ ✅":"ส่งคำขอไปแล้ว รอแอดมินอนุมัติครับ ⏳","info"),o.remove();return}await we({teacher_id:t==null?void 0:t.id,package_type:"school_sponsored",amount:0,status:"pending"}),S("ส่งคำขอแล้ว ✅ แอดมินจะอนุมัติให้เร็วๆ นี้ครับ","success"),o.remove()}catch(l){S("เกิดข้อผิดพลาด: "+G(l),"error"),d.disabled=!1,d.textContent="🎓 รับสิทธิ์ไม่จำกัดเลย"}})}async function J(e,s={}){var I,y,_,A;(I=document.getElementById("donate-modal"))==null||I.remove();const n=U(s.donationMinAmount,49),o=U(s.donationAmountStep,50),a=xe(s);let d=0,l=!1,r=null;if(t!=null&&t.id)try{const h=await He(t.id);if(h.some(T=>T.package_type==="donation"&&T.status==="pending")){S("คุณครูส่งหลักฐานรอการอนุมัติอยู่แล้วครับ — กรุณารอแอดมินตรวจสอบก่อนนะครับ","warning");return}if(d=h.filter(T=>T.package_type==="donation"&&T.status==="approved").reduce((T,D)=>T+(D.amount??0),0),d>0){const T=((y=a[a.length-1])==null?void 0:y.amount)??1/0;if(d>=T){S("คุณครูสนับสนุนระดับสูงสุดแล้วครับ ขอบคุณมากๆ นะครับ 🙏👑","success");return}l=!0,r=((_=a.find(D=>D.amount>d))==null?void 0:_.amount)??null}}catch{}const i=document.createElement("div");i.id="donate-modal",i.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4";const m=s.paymentPromptpay??"",c=Math.min(U(s.donationQuickCount,4),8),u=l?Math.max(n,(r??n)-d):n,x=Array.from({length:c},(h,C)=>u+C*o),w=Le(s),f=a[0],g=h=>w.map(C=>h>=(C.minTier??1)?`<div class="flex gap-2 text-amber-900"><span>${$(C.icon)}</span><span>${$(C.text)}</span></div>`:`<div class="flex gap-2 text-gray-300 opacity-70"><span>🔒</span><span class="line-through">${$(C.text)}<span class="ml-1 text-[9px] no-underline not-italic text-gray-400">ระดับ ${C.minTier}+</span></span></div>`).join("");i.innerHTML=`
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
          ${Ae(f)}
        </div>
        <!-- Amount input -->
        <div class="flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 focus-within:border-amber-400 transition">
          <span class="text-2xl font-bold text-amber-500">฿</span>
          <input id="donate-amount" type="number" min="${n}" step="${o}" value="${u}" placeholder="${u}"
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
    </div>`,document.body.appendChild(i);const L=i.querySelector("#donate-amount"),j=i.querySelector("#donate-sticker-preview"),v=i.querySelector("#donate-feature-list"),P=()=>{const h=parseFloat(L.value)||0,C=[...a].reverse().find(D=>h>=D.amount)||a[0],T=a.indexOf(C)+1;j&&(j.innerHTML=Ae(C)),v&&(v.innerHTML=g(T))};i.querySelectorAll(".donate-quick").forEach(h=>{h.addEventListener("click",()=>{L.value=h.textContent.trim(),P()})}),L.addEventListener("input",P),i.querySelector("#donate-back").addEventListener("click",()=>{i.remove(),et(0,e,s)}),i.querySelector("#donate-gen-qr").addEventListener("click",async()=>{const h=parseFloat(L.value);if(!h||h<n){S(`กรุณาระบุยอดโดเนทขั้นต่ำ ${n} บาทครับ`,"error");return}if(!m){S("แอดมินยังไม่ได้ตั้งค่าเบอร์ PromptPay","error");return}try{const C=await Fe(m,h);i.querySelector("#donate-qr-img").src=C,i.querySelector("#donate-qr-area").classList.remove("hidden"),i.querySelector("#donate-qr-area").classList.add("flex"),i.querySelector("#donate-slip-area").classList.remove("hidden"),i.querySelector("#donate-confirm").classList.remove("hidden"),i.querySelector("#donate-gen-qr").classList.add("hidden")}catch(C){S("สร้าง QR ไม่สำเร็จ: "+G(C),"error")}});let p=null;const E=i.querySelector("#donate-slip-file"),k=i.querySelector("#donate-slip-preview");E==null||E.addEventListener("change",h=>{p=h.target.files[0],p&&(i.querySelector("#donate-slip-name").textContent=p.name,p.type.startsWith("image/")?(i.querySelector("#donate-slip-img").src=URL.createObjectURL(p),i.querySelector("#donate-slip-img").classList.remove("hidden")):i.querySelector("#donate-slip-img").classList.add("hidden"),k.classList.remove("hidden"),i.querySelector("#donate-slip-label").classList.add("hidden"),i.querySelector("#donate-slip-err").classList.add("hidden"))}),(A=i.querySelector("#donate-slip-remove"))==null||A.addEventListener("click",()=>{p=null,E.value="",k.classList.add("hidden"),i.querySelector("#donate-slip-label").classList.remove("hidden")}),i.querySelector("#donate-confirm").addEventListener("click",async()=>{const h=parseFloat(L.value);if(!p){i.querySelector("#donate-slip-err").classList.remove("hidden"),i.querySelector("#donate-slip-area").scrollIntoView({behavior:"smooth",block:"center"});return}const C=i.querySelector("#donate-confirm");C.disabled=!0,C.textContent="⏳ กำลังส่งข้อมูล...";try{const T=await we({teacher_id:t==null?void 0:t.id,package_type:"donation",amount:h,status:"pending"}),D=await Oe(p,T.id);await q.from("payment_requests").update({slip_url:D}).eq("id",T.id),S("ส่งหลักฐานสำเร็จ! 🙏 แอดมินจะตรวจสอบและส่งการ์ดขอบคุณให้ครับ","success"),i.remove(),nt(!0)}catch(T){S("เกิดข้อผิดพลาด: "+G(T),"error"),C.disabled=!1,C.textContent="✅ ส่งหลักฐานการโอน"}})}window._showThankYouCardAdmin=(e,s)=>tt(e,s);async function tt(e,s=null){var u;(u=document.getElementById("thankyou-card-modal"))==null||u.remove();const n=s??await O().catch(()=>({}));U(n.donationMinAmount,99),U(n.donationAmountStep,50);const o=Le(n),a=xe(n),d=e.amount??0,l=[...a].reverse().find(x=>d>=x.amount)??a[0],r=Je(n,a,d),i=(n.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

การสนับสนุนของคุณครูมีค่ามากกว่าจำนวนเงินครับ ☕
เพราะมันคือกำลังใจสำคัญที่ทำให้ผมรู้สึกว่า
ระบบเล็ก ๆ นี้ได้ช่วยลดภาระงานของครูได้จริง 🌷

ขอบคุณที่ทำให้ผมมีกำลังใจพัฒนาระบบนี้ต่อไปเพื่อครูครับ 🙏✨

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`,m=(()=>{if(!l)return'<div class="text-5xl mb-3">☕</div>';const x=String(l.sticker??"");return/^https?:\/\//.test(x)?`<div class="w-20 h-20 mx-auto mb-3 flex items-center justify-center drop-shadow-lg">
        <img src="${$(x)}" class="w-full h-full object-contain" /></div>`:`<div class="text-5xl mb-3">${$(x||"☕")}</div>`})(),c=document.createElement("div");c.id="thankyou-card-modal",c.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",c.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Header — สีตาม tier.color -->
      <div class="px-6 py-6 text-center flex-shrink-0" style="${(()=>{const x=(l==null?void 0:l.color)||"#f59e0b",w=parseInt(x.slice(1,3),16),f=parseInt(x.slice(3,5),16),g=parseInt(x.slice(5,7),16);return`background:linear-gradient(135deg,rgba(${w},${f},${g},0.85),rgba(${w},${f},${g},1))`})()}">
        ${m}
        ${l?`<div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">${$(l.title)}</div>`:""}
        <h2 class="text-white font-bold text-xl">ขอบคุณครับ! 🙏</h2>
        <p class="text-white/80 text-sm mt-1">${d?`โดเนท ${d.toLocaleString()} บาท`:"การสนับสนุนของคุณครูมีความหมายมากครับ"}</p>
      </div>
      <!-- Body -->
      <div class="px-5 py-4 overflow-y-auto flex-1 space-y-4">
        <!-- ข้อความขอบคุณ -->
        ${e.admin_note||i?`
        <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
          ${$(e.admin_note||i)}
        </div>`:""}
        <!-- ฟีเจอร์พิเศษ: unlocked / locked -->
        ${o.length?`
        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-1.5">
            ${o.map(x=>r>=(x.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900">
                     <span class="flex-shrink-0">${$(x.icon)}</span>
                     <span>${$(x.text)}</span>
                   </div>`:`<div class="flex items-start gap-2 text-sm text-gray-400 opacity-60">
                     <span class="flex-shrink-0">🔒</span>
                     <span class="line-through">${$(x.text)}</span>
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
    </div>`,document.body.appendChild(c),c.querySelector("#tc-close").addEventListener("click",()=>{var x;localStorage.setItem(`pp5_thankyou_seen_${e.id}`,"1"),c.remove(),(x=document.getElementById("donate-float-btn"))==null||x.remove(),ve(e)})}async function ve(e=null){if(document.getElementById("sidebar-donate-item"))return;const s=document.querySelector("#sidebar nav");if(!s)return;let n="<span>☕</span>",o="สนับสนุนผู้พัฒนาอีกครั้ง";if(e){const d=await O().catch(()=>({}));U(d.donationMinAmount,99),U(d.donationAmountStep,50);const l=xe(d),r=e.amount??0,i=[...l].reverse().find(m=>r>=m.amount)??l[0];if(i){const m=String(i.sticker??"");n=/^https?:\/\//.test(m)?`<img src="${$(m)}" class="w-6 h-6 object-contain rounded" title="${$(i.title)}" />`:`<span title="${$(i.title)}">${$(m||"🏅")}</span>`,o=`${i.title} — คลิกเพื่อโดเนทอีกครั้ง`}}const a=document.createElement("a");a.id="sidebar-donate-item",a.href="#",a.title=o,a.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-emerald-400/60 hover:text-amber-400 hover:bg-emerald-800/40 opacity-60 hover:opacity-100",a.innerHTML=`${n} <span>${e?"ผู้สนับสนุนระบบ":"สนับสนุนผู้พัฒนา"}</span>`,a.addEventListener("click",async d=>{d.preventDefault();const l=await O().catch(()=>({}));J(null,l)}),s.appendChild(a)}function sn(){var s;return((s=t==null?void 0:t.positions)!=null&&s.length?t.positions:t!=null&&t.position?[t.position]:[]).includes("executive")}function ce(e){const s=e==="overview"&&sn();["donate-float-btn","feedback-fab","donor-chat-fab"].forEach(n=>{const o=document.getElementById(n);o&&(o.style.display=s?"none":"")}),an(e)}function on(){if(document.getElementById("home-fab"))return;const e=document.createElement("button");e.id="home-fab",e.title="กลับหน้าภาพรวม",e.className="hidden fixed z-40 items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105",e.style.cssText="position:fixed;left:max(0.75rem, env(safe-area-inset-left));bottom:max(0.75rem, env(safe-area-inset-bottom));right:auto;top:auto;",e.innerHTML='<span class="text-lg">🏠</span><span>หน้าภาพรวม</span>',e.addEventListener("click",()=>R("overview")),document.body.appendChild(e)}function an(e){const s=document.getElementById("home-fab");if(!s)return;const n=e!=="overview";s.classList.toggle("hidden",!n),s.classList.toggle("flex",n)}function nt(e=!1){var n;(n=document.getElementById("donate-float-btn"))==null||n.remove();const s=document.createElement("button");s.id="donate-float-btn",s.title=e?"รอแอดมินรับทราบการโดเนทของคุณ":"สนับสนุนผู้พัฒนา",s.className="fixed z-[40] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-white shadow-lg shadow-amber-300/40 flex items-center justify-center overflow-hidden transition-transform hover:scale-105",s.style.cssText="position:fixed;right:max(0.75rem, env(safe-area-inset-right));bottom:max(0.75rem, env(safe-area-inset-bottom));top:auto;left:auto;",s.innerHTML=e?'<span class="text-xl sm:text-2xl">☕</span>':`<span class="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full">
        <span class="absolute inset-1 rounded-full bg-amber-300/40"></span>
        <span class="relative text-xl sm:text-2xl">☕</span>
       </span>`,s.addEventListener("click",async()=>{const o=await O().catch(()=>({}));J(null,o)}),document.body.appendChild(s),ce(te)}function rn(e,s,n){var x;(x=document.getElementById("promo-popup"))==null||x.remove();const o="pp5_promo_seen",a=U(e.donationMinAmount,49);let d=0;const l=w=>{const f=w+1;return n.map(g=>f>=(g.minTier??1)?`<div class="flex items-center gap-2.5 text-sm text-gray-800 py-1">
             <span class="text-base flex-shrink-0">${$(g.icon)}</span>
             <span>${$(g.text)}</span>
           </div>`:`<div class="flex items-center gap-2.5 text-sm text-gray-300 py-1">
             <span class="text-base flex-shrink-0">🔒</span>
             <span class="line-through">${$(g.text)}</span>
             <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${g.minTier}+</span>
           </div>`).join("")},r=document.createElement("div");r.id="promo-popup",r.className="fixed inset-0 z-[85] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4";const i=w=>{var v,P;const f=s[w],g=(f==null?void 0:f.color)||"#f59e0b",L=String((f==null?void 0:f.sticker)??""),j=/^https?:\/\//.test(L)?`<img src="${$(L)}" class="w-16 h-16 object-contain drop-shadow-md" />`:`<span class="text-5xl">${$(L||"🏅")}</span>`;return`
    <div class="bg-white w-full sm:max-w-sm rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Sticker row -->
      <div class="pt-5 px-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">เลือกระดับที่สนใจ</p>
        <div class="flex justify-center gap-2">
          ${s.map((p,E)=>{const k=String(p.sticker??""),I=p.color||"#f59e0b",y=E===w,_=/^https?:\/\//.test(k)?`<img src="${$(k)}" class="w-10 h-10 object-contain" />`:`<span class="text-3xl">${$(k)}</span>`;return`<button class="promo-tier-btn flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all"
              data-idx="${E}"
              style="${y?`box-shadow:0 0 0 3px ${I};`:"box-shadow:0 0 0 2px #e5e7eb;"}">
              ${_}
            </button>`}).join("")}
        </div>
      </div>
      <!-- Tier info + features -->
      <div class="px-5 py-4 overflow-y-auto flex-1">
        <div class="flex items-center gap-2 mb-1">
          ${j}
          <div>
            <p class="font-bold text-gray-800 text-base">${$((f==null?void 0:f.title)??"")}</p>
            <p class="text-xs" style="color:${g}">${$((f==null?void 0:f.note)??"")}</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-2 mb-3">ยอดสนับสนุนขั้นต่ำ <span class="font-bold text-gray-700">${((v=f==null?void 0:f.amount)==null?void 0:v.toLocaleString())??a} บาท</span></p>
        <div class="divide-y divide-gray-50">
          ${l(w)}
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
          สนับสนุนในระดับนี้ (${((P=f==null?void 0:f.amount)==null?void 0:P.toLocaleString())??a} บาท+)
        </button>
        <button id="promo-later" class="w-full text-sm text-gray-400 hover:text-gray-600 py-1 transition">
          ภายหลัง
        </button>
      </div>
    </div>`};r.innerHTML=i(d),document.body.appendChild(r);const m=w=>{d=w,r.querySelector(".bg-white").outerHTML=i(w),u()},c=()=>{var w;(w=r.querySelector("#promo-no-show"))!=null&&w.checked&&localStorage.setItem(o,String(Date.now())),r.remove()},u=()=>{var w,f;r.querySelectorAll(".promo-tier-btn").forEach(g=>{g.addEventListener("click",()=>m(parseInt(g.dataset.idx)))}),(w=r.querySelector("#promo-support"))==null||w.addEventListener("click",()=>{c(),J(null,e)}),(f=r.querySelector("#promo-later"))==null||f.addEventListener("click",c),r.addEventListener("click",g=>{g.target===r&&c()})};u()}function dn(e,s,n){if(document.getElementById("sidebar-upgrade-item"))return;const o=document.querySelector("#sidebar nav");if(!o)return;const a=s[n-1],d=s[n],l=String((a==null?void 0:a.sticker)??""),r=/^https?:\/\//.test(l)?`<img src="${$(l)}" class="w-5 h-5 object-contain flex-shrink-0" />`:`<span class="flex-shrink-0">${$(l||"🏅")}</span>`,i=document.createElement("a");i.id="sidebar-upgrade-item",i.href="#",i.className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition text-amber-400/70 hover:text-amber-300 hover:bg-emerald-800/40 opacity-70 hover:opacity-100",i.innerHTML=`${r} <span>อัปเกรดระดับ</span>`,i.title=d?`อัปเกรดเป็น ${d.title}`:"สนับสนุนเพิ่มเติม",i.addEventListener("click",async m=>{m.preventDefault(),J(null,e)}),o.appendChild(i)}async function ln(e){try{const[s,n]=await Promise.all([He(e),O().catch(()=>({}))]);if((n.quotaMode??"payment")!=="school_sponsored")return;const o=U(n.donationMinAmount,49),a=U(n.donationAmountStep,50),d=xe(n,o,a),l=Le(n),r=d.length,i=s.find(u=>u.package_type==="donation"&&u.status==="approved"),m=s.some(u=>u.package_type==="donation"&&u.status==="pending"),c=s.filter(u=>u.package_type==="donation"&&u.status==="approved").reduce((u,x)=>u+(x.amount??0),0);if(window._pp5SystemCfg=n,i){!localStorage.getItem(`pp5_thankyou_seen_${i.id}`)&&i.admin_note&&tt(i);const x=Je(n,d,c);window._pp5DonorTierIndex=x,x>=r?ve(i):(ve(i),dn(n,d,x))}else if(nt(m),!m&&n.donationPromoEnabled!=="false"){const x=localStorage.getItem("pp5_promo_seen");(!x||Date.now()-parseInt(x)>14*24*60*60*1e3)&&setTimeout(()=>rn(n,d,l),1500)}}catch{}}function st(e,s={}){var i;(i=document.getElementById("room-count-page"))==null||i.remove();const n=parseInt(s.pricePerClass??49),o=document.createElement("div");o.id="room-count-page",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
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
    </div>`,document.body.appendChild(o);let a=1;const d=o.querySelector("#rc-count"),l=o.querySelector("#rc-total"),r=()=>{d.textContent=a;const m=n*a;l.innerHTML=`${m.toLocaleString()} <span class="text-sm font-normal text-gray-400">บาท</span>`,l.nextElementSibling.textContent=`(${n} บ. × ${a} ห้อง)`,o.querySelector("#rc-minus").disabled=a<=1};o.querySelector("#rc-minus").addEventListener("click",()=>{a>1&&(a--,r())}),o.querySelector("#rc-plus").addEventListener("click",()=>{a++,r()}),o.querySelector("#rc-back").addEventListener("click",()=>{o.remove(),ne(0,e,s)}),o.querySelector("#rc-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#rc-next").addEventListener("click",()=>{o.remove(),ot("per_subject",e,a,s)})}async function ot(e,s,n=1,o=null){var j;(j=document.getElementById("payment-page"))==null||j.remove();const a=o??await O().catch(()=>({})),d=parseInt(a.pricePerClass??49),l=parseInt(a.priceSemester??299),r=(a.paymentPromptpay??"0825424340").replace(/\D/g,""),i=e==="semester"?l:d*n,m=e==="semester"?"เหมาทั้งเทอม":`รายห้อง × ${n} ห้อง`,c=e==="semester"?"ทุกวิชา ทุกห้อง ตลอดเทอม":`${d} บ. × ${n} ห้อง = ${i.toLocaleString()} บ.`,u=document.createElement("div");u.id="payment-page",u.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",u.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="pp-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none mr-1">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">ชำระเงิน — ${m}</h3>
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
    </div>`,document.body.appendChild(u),Fe(r,i).then(v=>{const P=u.querySelector("#pp-qr-wrap");P&&(P.innerHTML=`
      <img src="${v}" class="w-[220px] h-[220px] rounded-xl border border-gray-100 shadow-sm mx-auto" />
      <p class="text-[10px] text-gray-400">QR สำหรับ ${i.toLocaleString()} บาทเท่านั้น</p>`)}).catch(()=>{if(a.paymentQrUrl){const v=u.querySelector("#pp-qr-wrap");v&&(v.innerHTML=`<img src="${a.paymentQrUrl}" class="mx-auto h-[220px] object-contain rounded-xl border border-gray-100 shadow-sm" />`)}}),u.querySelector("#pp-back").addEventListener("click",()=>{var v;u.remove(),e==="per_subject"?st(s,a):ne(((v=t==null?void 0:t.teachers_quota)==null?void 0:v.total_classes_created)??0,s,a)}),u.querySelectorAll(".copy-btn").forEach(v=>{v.addEventListener("click",()=>{navigator.clipboard.writeText(v.dataset.copy).catch(()=>{}),v.querySelector("span").textContent="✓ คัดลอกแล้ว",setTimeout(()=>v.querySelector("span").textContent="คัดลอก",2e3)})});let x=null;const w=u.querySelector("#slip-file"),f=u.querySelector("#slip-preview"),g=u.querySelector("#slip-img"),L=u.querySelector("#slip-name");w.addEventListener("change",v=>{x=v.target.files[0],x&&(L.textContent=x.name,x.type.startsWith("image/")?(g.src=URL.createObjectURL(x),g.classList.remove("hidden")):g.classList.add("hidden"),f.classList.remove("hidden"),u.querySelector("#slip-label").classList.add("hidden"))}),u.querySelector("#slip-remove").addEventListener("click",()=>{x=null,w.value="",f.classList.add("hidden"),u.querySelector("#slip-label").classList.remove("hidden")}),u.querySelector("#pp-submit").addEventListener("click",async()=>{const v=u.querySelector("#pp-err");if(!x){v.textContent="กรุณาอัปโหลดสลิปก่อนนะครับ",v.classList.remove("hidden");return}v.classList.add("hidden");const P=u.querySelector("#pp-submit");P.disabled=!0,P.textContent="⏳ กำลังส่ง...";try{const p=await we({teacher_id:t.id,package_type:e,amount:i,room_count:e==="per_subject"?n:null,subject_id:e==="per_subject"?(s==null?void 0:s.id)??null:null,status:"pending"}),E=await Oe(x,p.id);await q.from("payment_requests").update({slip_url:E}).eq("id",p.id),u.remove(),cn()}catch(p){P.disabled=!1,P.textContent="✅ ส่งหลักฐานการชำระเงิน",v.textContent="เกิดข้อผิดพลาด กรุณาลองใหม่: "+G(p),v.classList.remove("hidden")}})}function cn(){const e=document.createElement("div");e.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&e.remove()})}async function je(e){try{const s=await O(),n=s.semester??s.semester??"—",o=s.academicYear??s.academic_year??"—",a=document.getElementById("sidebar-term");a&&(a.textContent=`ภาคเรียนที่ ${n} / ${o}`);const d=(e==null?void 0:e.category)??"",r=/ปวช/i.test(d)?s.porworLogoUrl??s.samaiLogoUrl??"":s.samaiLogoUrl??"",i=document.getElementById("school-logo"),m=document.getElementById("school-logo-fallback");i&&r&&(i.src=r,i.classList.remove("hidden"),m==null||m.classList.add("hidden"));const c=document.getElementById("sidebar-contact");if(c){const u=[s.contactPhone&&{icon:"📞",label:s.contactPhone,href:`tel:${s.contactPhone.replace(/\s/g,"")}`},s.contactLine&&{icon:"💬",label:"LINE: "+s.contactLine,href:s.contactLine.startsWith("http")?s.contactLine:`https://line.me/R/ti/p/${s.contactLine}`},s.contactFacebook&&{icon:"📘",label:"Facebook",href:s.contactFacebook},s.contactEmail&&{icon:"📧",label:s.contactEmail,href:`mailto:${s.contactEmail}`},s.contactOther&&{icon:"🔗",label:s.contactOther,href:null}].filter(Boolean);u.length>0&&(window._contactLinks=u,c.innerHTML=`
          <button id="btn-contact-admin"
            class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm
                   font-medium text-emerald-200 hover:bg-emerald-700 border border-emerald-700 transition">
            📞 ติดต่อผู้ดูแล
          </button>`,c.classList.remove("hidden"),document.getElementById("btn-contact-admin").addEventListener("click",()=>{var w,f;(w=document.getElementById("contact-modal"))==null||w.remove();const x=document.createElement("div");x.id="contact-modal",x.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade">
              <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 class="font-bold text-gray-800">📞 ติดต่อผู้ดูแลระบบ</h3>
                <button id="contact-modal-close"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-lg">×</button>
              </div>
              <div class="p-5 space-y-3">
                ${u.map(g=>g.href?`<a href="${g.href}" target="_blank" rel="noopener"
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
            </div>`,document.body.appendChild(x),x.querySelector("#contact-modal-close").addEventListener("click",()=>x.remove()),(f=x.querySelector("#contact-donate-btn"))==null||f.addEventListener("click",async()=>{x.remove();const g=await O().catch(()=>({}));J(null,g)}),x.addEventListener("click",g=>{g.target===x&&x.remove()})}))}}catch{}}let Y=[];async function pn(e){try{Y=await Lt(e),mn()}catch{}}function mn(){var n;if(document.querySelectorAll("#sv-notif-badge").forEach(o=>o.remove()),!Y.length)return;const e=Y.length,s=document.getElementById("t-name");if(s){const o=document.createElement("span");o.id="sv-notif-badge",o.style.cssText="display:inline-block;background:#dc2626;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 6px;margin-left:6px;cursor:pointer;",o.textContent=e,o.title=`${e} ข้อความจากหัวหน้า`,o.onclick=()=>Me(t==null?void 0:t.id),(n=s.parentElement)==null||n.appendChild(o)}window._showSvNotifPopup=()=>Me(t==null?void 0:t.id),"Notification"in window&&Notification.permission==="granted"&&e>0&&new Notification("ปพ.5 ออนไลน์ — มีข้อความจากหัวหน้า",{body:Y[0].comment,icon:"/pp5online/public/pp5-form-logo.png"})}async function Me(e){const s={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},n={general:"#f9fafb",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},o={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},a={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},d=r=>{const i=r.supervisor;if(!i)return"หัวหน้า";const m=a[i.position]??"หัวหน้า";return i.full_name?`${m} (${i.full_name})`:m},l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;",l.innerHTML=`<div style="background:#fff;border-radius:16px;width:min(500px,96vw);max-height:85vh;overflow-y:auto;padding:24px;position:relative;">
    <button style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;" onclick="this.closest('div').parentElement.remove()">✕</button>
    <div style="font-size:16px;font-weight:700;margin-bottom:4px;">🔔 ข้อความจากหัวหน้า</div>
    <div style="font-size:12px;color:#6b7280;margin-bottom:16px;">ได้รับการตรวจสอบแล้ว ${Y.length} รายการ</div>
    ${Y.map(r=>`
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
  </div>`,document.body.appendChild(l),l.addEventListener("click",r=>{r.target===l&&l.remove()}),l.querySelector("#sv-mark-read").onclick=async()=>{await $t(e),Y=[],document.querySelectorAll("#sv-notif-badge").forEach(r=>r.remove()),l.remove()}}let pe=!1,ie=null;async function $e(){var o;const e=document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area"),s=document.querySelector("#sidebar nav");if(!e||pe)return;if(!(t!=null&&t.id)){S("กำลังโหลดข้อมูลครู กรุณารอสักครู่แล้วลองใหม่","warning");try{t=await K((o=(await q.auth.getUser()).data.user)==null?void 0:o.id)}catch{}if(!(t!=null&&t.id))return}pe=!0,s&&(ie=s.innerHTML),await Ee(),bn(s,e,z);const{renderSupervisorDashboard:n}=await b(async()=>{const{renderSupervisorDashboard:a}=await import("./supervisor-Do2RNAox.js");return{renderSupervisorDashboard:a}},__vite__mapDeps([48,1,2,3,4,5,6,15,16,10,13]));n(e,t,z)}window._enterSupervisorMode=$e;function un(){document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area");const e=document.querySelector("#sidebar nav");pe&&(pe=!1,e&&ie&&(e.innerHTML=ie,ie=null,gn(e)),R("overview"))}async function xn(){try{const e=await St("teacher",(t==null?void 0:t.id)??null);ct(e,"pp5_ann_dismissed")}catch{}}async function fn(){try{const e=await Gt();e!=null&&e.is_participant&&!e.completed&&pt("teacher")}catch{}}const Re=[{key:"announce_create",icon:"📢",label:"จัดการประกาศ",fn:(e,s)=>{b(async()=>{const{renderSupervisorAnnouncements:n}=await import("./views-B39y6ETM.js").then(o=>o.M);return{renderSupervisorAnnouncements:n}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28])).then(({renderSupervisorAnnouncements:n})=>n(e,s))}},{key:"work_calendar",icon:"📅",label:"ปฏิทินปฏิบัติงาน",fn:e=>{b(async()=>{const{renderWorkCalendar:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderWorkCalendar:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28])).then(({renderWorkCalendar:s})=>s(e))}},{key:"lang_config",icon:"⚙️",label:"ตั้งค่าคำอธิบายฯ",fn:async(e,s)=>{const{renderCourseDocLangConfig:n}=await b(async()=>{const{renderCourseDocLangConfig:o}=await import("./teacher-views-Bd39g1Ox.js");return{renderCourseDocLangConfig:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));n(e,s)}},{key:"menu_holidays",icon:"📅",label:"วันหยุด",fn:async()=>{const{renderHolidays:e}=await b(async()=>{const{renderHolidays:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderHolidays:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_periods",icon:"🕐",label:"คาบเรียน",fn:async()=>{const{renderPeriods:e}=await b(async()=>{const{renderPeriods:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderPeriods:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_curriculum",icon:"📘",label:"หลักสูตรแกนกลาง",fn:async()=>{const{renderCurriculum:e}=await b(async()=>{const{renderCurriculum:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderCurriculum:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_subjects",icon:"📖",label:"รายวิชา",fn:async()=>{const{renderSubjects:e}=await b(async()=>{const{renderSubjects:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderSubjects:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_departments",icon:"🏫",label:"กลุ่มสาระ",fn:async()=>{const{renderDepartments:e}=await b(async()=>{const{renderDepartments:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderDepartments:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_homeroom",icon:"🏠",label:"ครูที่ปรึกษา",fn:async()=>{const{renderHomeroom:e}=await b(async()=>{const{renderHomeroom:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderHomeroom:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_students",icon:"👨‍🎓",label:"นักเรียน",fn:async()=>{const{renderStudents:e}=await b(async()=>{const{renderStudents:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderStudents:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_classrooms",icon:"🚪",label:"ห้องเรียน",fn:async()=>{const{renderClassroomsAdmin:e}=await b(async()=>{const{renderClassroomsAdmin:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderClassroomsAdmin:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_score_config",icon:"📊",label:"คอลัมน์คะแนน",fn:async()=>{const{renderScoreColConfig:e}=await b(async()=>{const{renderScoreColConfig:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderScoreColConfig:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_life_skill",icon:"🌱",label:"ทักษะชีวิต",fn:async()=>{const{renderLifeSkillAdmin:e}=await b(async()=>{const{renderLifeSkillAdmin:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderLifeSkillAdmin:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_reading",icon:"📗",label:"การอ่าน",fn:async()=>{const{renderReadingAdmin:e}=await b(async()=>{const{renderReadingAdmin:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderReadingAdmin:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_prayer",icon:"🕌",label:"ละหมาด",fn:async()=>{const{renderPrayerAdmin:e}=await b(async()=>{const{renderPrayerAdmin:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderPrayerAdmin:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_house_colors",icon:"🎨",label:"สีนักเรียน",fn:async()=>{const{renderHouseColors:e}=await b(async()=>{const{renderHouseColors:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderHouseColors:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_sports_admin",icon:"🏆",label:"ระบบกีฬาสี",fn:async()=>We({admin:!0,teacherName:t==null?void 0:t.full_name,teacherCode:t==null?void 0:t.teacher_code})},{key:"menu_azfutsal",icon:"⚽",label:"AZFUTSALCUP",fn:async()=>Ht()},{key:"menu_sports_shirt_settings",icon:"👕",label:"ตั้งค่าและสรุปเสื้อกีฬาสี",fn:async()=>Ue()},{key:"menu_sports_fund_admin",icon:"💰",label:"บัญชีเงินกีฬาสี",fn:async()=>ze()},{key:"manage_religion_groups",icon:"🕌",label:"กลุ่มวิชาศาสนา",fn:async()=>{const{renderReligionGroups:e}=await b(async()=>{const{renderReligionGroups:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderReligionGroups:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"manage_my_religion_group",icon:"👥",label:"กลุ่มของฉัน",fn:async e=>{const{renderMyReligionGroup:s}=await b(async()=>{const{renderMyReligionGroup:n}=await import("./views-B39y6ETM.js").then(o=>o.M);return{renderMyReligionGroup:n}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));s(e)}},{key:"menu_classroom_leaders",icon:"👑",label:"หัวหน้า/รองหัวหน้าห้อง",fn:async()=>{const{renderClassroomLeaders:e}=await b(async()=>{const{renderClassroomLeaders:s}=await import("./views-B39y6ETM.js").then(n=>n.M);return{renderClassroomLeaders:s}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28]));e()}},{key:"menu_tutorial",icon:"📖",label:"คู่มือการใช้งาน",fn:async()=>{const{renderTutorialAdmin:e}=await b(async()=>{const{renderTutorialAdmin:s}=await import("./tutorial-DW5HF32q.js");return{renderTutorialAdmin:s}},__vite__mapDeps([46,3,4,5,6,13,1,2]));e()}}];function bn(e,s,n=!1){var m;if(!e)return;const o={dept_head:"หัวหน้ากลุ่มสาระ",religion_group_head:"หัวหน้ากลุ่ม (ศาสนา)",religion_subgroup_head:"หัวหน้ากลุ่มย่อย (ศาสนา)",registrar_samai:"ทะเบียน (สามัญ)",registrar_religion:"ทะเบียน (ศาสนา)",registrar_pvch:"ทะเบียน (ปวช)",academic_samai:"วิชาการ (สามัญ)",academic_religion:"วิชาการ (ศาสนา)",academic_pvch:"วิชาการ (ปวช)",house_color_admin:"สีนักเรียน",classroom_leaders_admin:"ผู้ดูแลหัวหน้า/รองหัวหน้า",executive:"ผู้บริหาร"},a=(m=t==null?void 0:t.positions)!=null&&m.length?t.positions:t!=null&&t.position?[t.position]:[],d=a.length?a.map(c=>o[c]??c).join(" / "):n?"แอดมิน":"หัวหน้า",l=Q.enabled!==!1&&Q.teacher_menu!==!1,r=n?Re:Re.filter(c=>c.key==="lang_config"?N.lang_config||a.includes("dept_head"):c.key==="menu_house_colors"?N.menu_house_colors||a.includes("house_color_admin"):c.key==="menu_sports_admin"?l&&(N.menu_sports_admin||a.includes("house_color_admin")):c.key==="menu_sports_shirt_settings"||c.key==="menu_sports_fund_admin"?N.menu_sports_admin||a.includes("house_color_admin"):c.key==="menu_azfutsal"?!0:c.key==="menu_classroom_leaders"?N.menu_classroom_leaders||a.includes("classroom_leaders_admin"):c.key==="manage_religion_groups"?N.manage_religion_groups||a.includes("religion_group_head"):c.key==="manage_my_religion_group"?a.includes("religion_subgroup_head"):c.key==="announce_manage"?!!N.announce_manage:c.key==="announce_create"?!!N.announce_create:c.key==="work_calendar"?!!N.work_calendar:!!N[c.key]),i=(c,u,x)=>`<button data-sv="${c}" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium w-full text-left transition hover:bg-emerald-800/50" style="color:#d1fae5;">${u} ${x}</button>`;e.innerHTML=`
    <div style="padding:8px 12px;font-size:11px;color:#6ee7b7;font-weight:600;letter-spacing:.5px;margin-bottom:4px;">📊 ${d}</div>
    ${i("back","←","กลับโหมดสอน")}
    <div style="height:1px;background:#065f46;margin:8px 12px;"></div>
    ${i("dashboard","📊","Dashboard ติดตาม")}
    ${r.map(c=>i(c.key,c.icon,c.label)).join("")}`,e.querySelector('[data-sv="back"]').onclick=un,e.querySelector('[data-sv="dashboard"]').onclick=()=>b(()=>import("./supervisor-Do2RNAox.js"),__vite__mapDeps([48,1,2,3,4,5,6,15,16,10,13])).then(c=>c.renderSupervisorDashboard(s,t,z)),r.forEach(c=>{var u;(u=e.querySelector(`[data-sv="${c.key}"]`))==null||u.addEventListener("click",()=>c.fn(t,n))})}function gn(e,s){e.querySelectorAll("[data-nav]").forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),R(n.dataset.nav)})}),e.querySelectorAll("button").forEach(n=>{n.textContent.trim().includes("Dashboard")&&(n.onclick=$e)})}async function he(e){if(!t)return;let s=[];try{s=await se(t.id);const d=s.map(l=>l.id).filter(Boolean);if(d.length){const{data:l,error:r}=await q.from("class_students").select("class_id").in("class_id",d);r&&console.warn("[quick-class-picker] โหลดจำนวนนักเรียนไม่สำเร็จ",r);const i=(l??[]).reduce((m,c)=>(m[c.class_id]=(m[c.class_id]||0)+1,m),{});s=s.map(m=>({...m,_studentCount:i[m.id]||0}))}}catch(d){console.error("[quick-class-picker] โหลดรายการห้องไม่สำเร็จ",d),S("โหลดรายการห้องเรียนไม่สำเร็จ กรุณาลองใหม่","error");return}if(!s.length){S("ยังไม่มีห้องเรียน","warning");return}if(s.length===1){De(e,s[0]);return}const n=e==="attendance"?"✅ เลือกห้องเรียน — เช็คชื่อ":"📝 เลือกห้องเรียน — บันทึกคะแนน",o=document.createElement("div");o.id="qcp-overlay",o.className="fixed inset-0 z-[80] flex items-center justify-center p-4",o.innerHTML=`
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
    </div>`,document.body.appendChild(o);const a=()=>o.remove();o.querySelector("#qcp-backdrop").onclick=a,o.querySelector("#qcp-close").onclick=a,o.querySelectorAll(".qcp-cls").forEach(d=>{d.onclick=()=>{a();const l=s.find(r=>String(r.id)===d.dataset.cid);l&&De(e,l)}})}window._showClassQuickPicker=he;async function De(e,s){if(e==="attendance"){const{renderAttendanceGrid:n}=await b(async()=>{const{renderAttendanceGrid:o}=await import("./teacher-views-attendance-4LvVNsuY.js");return{renderAttendanceGrid:o}},__vite__mapDeps([20,1,2,3,4,5,6,21,13]));n(t,s)}else{const{renderGradesGrid:n}=await b(async()=>{const{renderGradesGrid:o}=await import("./teacher-views-grades-BNr4W9tM.js").then(a=>a.t);return{renderGradesGrid:o}},__vite__mapDeps([17,3,4,5,6,16,18,1,2,19,13]));n(t,s)}}const yn=`
  <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`,X="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/20 shadow-[0_10px_20px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.28)] ring-1 ring-white/30 text-2xl leading-none";function vn(e,s=null){return t?(e.prayerScannerTeachers||"").split(/[\s,]+/).map(o=>o.trim()).filter(Boolean).includes(t.teacher_code)||t.staff_type==="แอดมิน"||t.position==="admin"||s==="admin":!1}async function at(){var i,m,c,u,x,w,f,g;if(!t)return;(i=document.getElementById("teacher-scan-launcher"))==null||i.remove();const e=document.createElement("div");e.id="teacher-scan-launcher",e.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
    <div class="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-9 h-9 rounded-2xl text-white bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-700 flex items-center justify-center shadow-[0_10px_24px_rgba(5,150,105,0.30),inset_0_1px_0_rgba(255,255,255,0.35)]">${yn}</span>
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
  `,document.body.appendChild(e);const s=()=>e.remove();e.addEventListener("click",L=>{L.target===e&&s()}),(m=e.querySelector("#scan-launcher-close"))==null||m.addEventListener("click",s);const n=e.querySelector("#scan-launcher-body"),[o,a]=await Promise.all([O().catch(()=>({})),(async()=>{try{return await q.from("profiles").select("role").eq("id",t.profile_id).maybeSingle()}catch{return{data:null}}})()]),d=vn(o,((c=a==null?void 0:a.data)==null?void 0:c.role)??null),l="group w-full text-left rounded-3xl border p-4 flex gap-3 items-start hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition shadow-[0_14px_30px_rgba(15,23,42,0.12)]",r={attendance:{card:`${l} border-sky-700 bg-sky-600 hover:bg-sky-700 hover:shadow-[0_20px_42px_rgba(2,132,199,0.30)]`,icon:`${X} text-white group-hover:shadow-[0_14px_26px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-sky-50/85"},prayer:{card:`${l} border-emerald-700 bg-emerald-600 hover:bg-emerald-700 hover:shadow-[0_20px_42px_rgba(16,185,129,0.30)]`,icon:`${X} text-white group-hover:shadow-[0_14px_26px_rgba(16,185,129,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-emerald-50/85"},leave:{card:`${l} border-orange-700 bg-orange-500 hover:bg-orange-600 hover:shadow-[0_20px_42px_rgba(249,115,22,0.30)]`,icon:`${X} text-white group-hover:shadow-[0_14px_26px_rgba(249,115,22,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-orange-50/90"},score:{card:`${l} border-indigo-700 bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_20px_42px_rgba(79,70,229,0.30)]`,icon:`${X} text-white group-hover:shadow-[0_14px_26px_rgba(79,70,229,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-indigo-50/85"}};n.innerHTML=`
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
          <span class="${X} text-white" aria-hidden="true">🕌</span>
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
  `,(u=n.querySelector("#scan-launcher-attendance"))==null||u.addEventListener("click",async()=>{s();const{openAttendanceScanSetup:L}=await b(async()=>{const{openAttendanceScanSetup:j}=await import("./teacher-views-attendance-4LvVNsuY.js");return{openAttendanceScanSetup:j}},__vite__mapDeps([20,1,2,3,4,5,6,21,13]));L(t)}),(x=n.querySelector("#scan-launcher-leave"))==null||x.addEventListener("click",()=>{s(),R("student-leave-scanner")}),(w=n.querySelector("#scan-launcher-score"))==null||w.addEventListener("click",async()=>{s();const{openScoreScannerPickClass:L}=await b(async()=>{const{openScoreScannerPickClass:j}=await import("./score-qr-scanner-5qGz2lzF.js");return{openScoreScannerPickClass:j}},__vite__mapDeps([19,3,4,5,6,1,2]));L(t)}),(f=n.querySelector("#scan-launcher-prayer-open"))==null||f.addEventListener("click",async()=>{s();const{renderStudentPrayerScanner:L}=await b(async()=>{const{renderStudentPrayerScanner:j}=await import("./student-views-hKS-NxYr.js");return{renderStudentPrayerScanner:j}},__vite__mapDeps([49,1,2,3,4,5,6,16,50,13,26,34,21,11,12,18,31,10,28]));L(t)}),(g=n.querySelector("#scan-launcher-prayer-request"))==null||g.addEventListener("click",async()=>{const L=n.querySelector("#scan-launcher-prayer-request");L.disabled=!0,L.textContent="กำลังส่งคำขอ...";const j=["ขอสิทธิ์สแกนละหมาด",`ชื่อครู: ${t.full_name||"-"}`,`รหัสครู: ${t.teacher_code||"-"}`,`กลุ่มสาระ: ${t.dept||"-"}`,"","ต้องการใช้งานปุ่มกล้องกลางเพื่อสแกนละหมาด"].join(`
`);try{await kt({profileId:t.profile_id,senderRole:"teacher",senderName:t.full_name||t.teacher_code||"คุณครู",category:"suggestion",message:j}),S("ส่งคำขอสิทธิ์สแกนละหมาดถึงแอดมินแล้ว","success"),s()}catch(v){L.disabled=!1,L.textContent="ขอสิทธิ์สแกนละหมาด",S((v==null?void 0:v.code)==="FEEDBACK_LIMIT_REACHED"?`ส่งความคิดเห็นครบโควต้าเดือนนี้แล้ว (${v.limit} ครั้ง/เดือน)`:"ส่งคำขอไม่สำเร็จ กรุณาลองใหม่",(v==null?void 0:v.code)==="FEEDBACK_LIMIT_REACHED"?"warning":"error")}})}window._openTeacherScanLauncher=at;async function hn(){if("serviceWorker"in navigator)try{await navigator.serviceWorker.register("/pp5online/sw.js",{scope:"/pp5online/"})}catch{}}function wn(){if(document.getElementById("notify-banner"))return;const e=document.createElement("div");e.id="notify-banner",e.className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[80] w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-indigo-100 p-4 flex items-center gap-3 animate-fade",e.innerHTML=`
    <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">🔔</div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-gray-800">เปิดการแจ้งเตือน?</p>
      <p class="text-xs text-gray-400 mt-0.5">แจ้งก่อนเข้าสอนตามที่ตั้งค่าไว้</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <button id="notify-deny" class="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">ไม่</button>
      <button id="notify-allow" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition">เปิด</button>
    </div>`,document.body.appendChild(e),e.querySelector("#notify-deny").addEventListener("click",()=>{e.remove(),localStorage.setItem("pp5_notify_dismissed","1")}),e.querySelector("#notify-allow").addEventListener("click",async()=>{e.remove(),await Notification.requestPermission()==="granted"&&(S("เปิดการแจ้งเตือนแล้ว ✅","success"),t!=null&&t.id&&await rt(t.id),t!=null&&t.profile_id&&Ge(t.profile_id))}),setTimeout(()=>e.remove(),12e3)}async function rt(e){var s,n,o;if(!(!("Notification"in window)||Notification.permission!=="granted"))try{const a=await O().catch(()=>({})),d=parseInt(a.notifyBeforeMinutes)||10,l=parseInt(a.academicYear??2568),r=parseInt(a.semester??1),[i,m,c,u]=await Promise.all([_e(e,l,r).catch(()=>[]),ke(e).catch(()=>[]),Ve().catch(()=>[]),se(e).catch(()=>[])]),x=new Date,w=x.getDay(),f=x.getHours()*60+x.getMinutes(),g={};m.forEach(p=>{g[p.teacher_schedule_id]||(g[p.teacher_schedule_id]=[]),g[p.teacher_schedule_id].push(p.class_id)});const L=Object.fromEntries(u.map(p=>[p.id,p])),j=Object.fromEntries(c.map(p=>[p.period_no,p]));(window._notifyTimeouts??[]).forEach(p=>clearTimeout(p)),window._notifyTimeouts=[];const v=i.filter(p=>p.day_of_week===w&&(g[p.id]??[]).length>0).map(p=>({...p,linkedClasses:(g[p.id]??[]).map(E=>L[E]).filter(Boolean),period:j[p.period_no]}));let P=0;for(const p of v){if(!((s=p.period)!=null&&s.start_time))continue;const[E,k]=p.period.start_time.split(":").map(Number),y=E*60+k-d,_=y-f;if(_<=0)continue;const A=((o=(n=p.linkedClasses[0])==null?void 0:n.master_subjects)==null?void 0:o.subject_name)??"วิชา",h=p.linkedClasses.map(D=>{var V;const M=D.classroom_id?(V=window._classroomMapGlobal)==null?void 0:V[D.classroom_id]:null;return D.class_name+(M?` 📍${M.building} ${M.room_number}`:"")}).join(", "),C=p.period.start_time.substring(0,5),T=setTimeout(async()=>{var V;const D=await((V=navigator.serviceWorker)==null?void 0:V.ready.catch(()=>null)),M={body:`${A} · ${h}
คาบ ${p.period_no} เวลา ${C}`,icon:"/pp5online/vite.svg",badge:"/pp5online/vite.svg",tag:`class-${p.id}-${y}`,requireInteraction:!1,silent:!1};D?D.showNotification(`🔔 อีก ${d} นาที — คาบถัดไป`,M):new Notification(`🔔 อีก ${d} นาที — คาบถัดไป`,M)},_*6e4);window._notifyTimeouts.push(T),P++}P>0&&S(`ตั้งแจ้งเตือน ${P} คาบสำหรับวันนี้ 🔔`,"info")}catch{}}async function _n(e){"Notification"in window&&(await hn(),Notification.permission==="granted"?(await rt(e),t!=null&&t.profile_id&&Ge(t.profile_id)):Notification.permission==="default"&&(localStorage.getItem("pp5_notify_dismissed")||setTimeout(wn,2e3)))}async function kn(){try{const{data:e}=await q.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(!e)return;const{data:s}=await q.from("sports_portal_settings").select("teacher_shirt_request_enabled").eq("event_id",e.id).maybeSingle();if(!(s!=null&&s.teacher_shirt_request_enabled))return;const{data:n}=await q.from("sports_shirt_teacher_requests").select("id").eq("event_id",e.id).eq("teacher_id",t.id).maybeSingle();if(n)return;En()}catch{}}function En(){var s;(s=document.getElementById("shirt-size-reminder-popup"))==null||s.remove();const e=document.createElement("div");e.id="shirt-size-reminder-popup",e.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.querySelector("#ssrp-go").addEventListener("click",()=>{e.remove(),b(()=>import("./sports-portals.js_v_10.22-BUafGoVM.js").then(n=>n.p),__vite__mapDeps([7,1,2,8,4,9,10,11,5,12])).then(n=>{var o;return(o=n.openTeacherShirtSizeModal)==null?void 0:o.call(n,t)})}),e.querySelector("#ssrp-close").addEventListener("click",()=>e.remove())}async function Sn(){try{const e=await O().catch(()=>({})),s=parseInt(e.academicYear??2568),n=parseInt(e.semester??1),[o,a,d]=await Promise.all([se(t.id).catch(()=>[]),_e(t.id,s,n).catch(()=>[]),ke(t.id).catch(()=>[])]);if(!o.length)return;if(!a.length){Be("no_schedule");return}const l=new Set(d.map(i=>i.class_id)),r=o.filter(i=>!l.has(i.id));r.length>0&&Be("has_unlinked",r.length,r.map(i=>i.id))}catch{}}function Be(e,s=0,n=[]){var d;(d=document.getElementById("sched-link-prompt"))==null||d.remove();const o=e==="no_schedule",a=document.createElement("div");a.id="sched-link-prompt",a.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),a.querySelector("#slp-go").addEventListener("click",()=>{a.remove(),o?window._navTo("schedule-builder"):n.length===1&&window._openCombinedEdit?(window._navTo("my-classes"),setTimeout(()=>{var l;return(l=window._openCombinedEdit)==null?void 0:l.call(window,n[0],"schedule")},400)):window._navTo("my-classes")}),a.querySelector("#slp-close").addEventListener("click",()=>a.remove())}window._openScheduleLinkModal=async e=>{var d,l,r;const s=(d=window._classCache)==null?void 0:d[e],n=(l=window._classColorCache)==null?void 0:l[e],o=(s==null?void 0:s.class_name)??"—",a=s==null?void 0:s.master_subjects;try{S("กำลังโหลด...","info");const i=await O().catch(()=>({})),m=parseInt(i.academicYear??2568),c=parseInt(i.semester??1),[u,x,w]=await Promise.all([_e(t==null?void 0:t.id,m,c).catch(()=>[]),ke(t==null?void 0:t.id).catch(()=>[]),Ve().catch(()=>[])]);if(!u.length){S("ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อนครับ","error");return}const f=new Set(x.filter(y=>y.class_id===e).map(y=>y.teacher_schedule_id)),g=new Set(f),L=Object.fromEntries(w.map(y=>[y.period_no,y])),j=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],v={};x.filter(y=>y.class_id!==e).forEach(y=>{var A,h;const _=(A=window._classCache)==null?void 0:A[y.class_id];_&&(v[y.teacher_schedule_id]||(v[y.teacher_schedule_id]=[]),v[y.teacher_schedule_id].push({className:_.class_name??"—",subjectName:((h=_.master_subjects)==null?void 0:h.subject_name)??"—"}))});const P=(n==null?void 0:n.soft)??"#f0fdf4",p=(n==null?void 0:n.border)??"#d1fae5",E=(n==null?void 0:n.text)??"#065f46";(r=document.getElementById("sched-link-modal"))==null||r.remove();const k=document.createElement("div");k.id="sched-link-modal",k.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4";const I=(y,_)=>{const A=L[y.period_no],h=A?`${A.start_time.substring(0,5)} – ${A.end_time.substring(0,5)}`:"",C=y.span_periods>1?`–${y.period_no+y.span_periods-1}`:"",T=v[y.id]??[],D=T.length>0&&!_;let M,V;_?(M="border-emerald-400 bg-emerald-50 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]",V='<span class="text-xl flex-shrink-0 mt-0.5">✅</span>'):D?(M="border-gray-200 bg-gray-50 opacity-70 cursor-pointer",V='<span class="text-xl flex-shrink-0 mt-0.5">🔒</span>'):(M="border-gray-200 bg-white hover:border-gray-300",V='<span class="text-xl flex-shrink-0 mt-0.5">⬜</span>');const Z=T.map(B=>`${B.subjectName} (${B.className})`).join(", ");return`
      <button type="button" class="slm-card w-full text-left p-4 rounded-2xl border-2 transition-all ${M}"
        data-id="${y.id}" data-sel="${_?"1":"0"}" data-locked="${D?"1":"0"}"
        data-others="${Z.replace(/"/g,"&quot;")}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            <p class="text-base font-bold text-gray-800">${j[y.day_of_week]} · คาบ ${y.period_no}${C}</p>
            <p class="text-sm text-gray-500 mt-0.5">${h}</p>
            ${y.class_name?`<p class="text-base font-semibold mt-1" style="color:${E}">${y.class_name}</p>`:""}
            ${T.length>0?`<p class="text-[11px] text-amber-600 mt-1.5">⚠️ เชื่อมกับ: ${Z}</p>`:""}
          </div>
          ${V}
        </div>
      </button>`};k.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>

        <!-- Header พร้อมสีห้อง -->
        <div class="px-5 pt-5 pb-4 border-b rounded-t-2xl flex-shrink-0"
          style="background:${P}; border-color:${p}">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-wider mb-1" style="color:${E}">🔗 เชื่อมโยงตารางสอน</p>
              <h3 class="text-xl font-extrabold leading-tight" style="color:${E}">${o}</h3>
              ${a!=null&&a.subject_name?`<p class="text-sm mt-0.5" style="color:${E};opacity:.75">${a.subject_name}</p>`:""}
            </div>
            <button id="slm-close" class="text-2xl leading-none flex-shrink-0 opacity-60 hover:opacity-100 transition"
              style="color:${E}">×</button>
          </div>
        </div>

        <!-- Slot list -->
        <div class="px-4 py-3 overflow-auto flex-1">
          <p class="text-xs text-gray-400 mb-3">แตะการ์ดเพื่อเลือก/ยกเลิก (เลือกได้หลายคาบ)</p>
          <div id="slm-list" class="space-y-2">
            ${u.map(y=>I(y,g.has(y.id))).join("")}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-4 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
          <button id="slm-save"
            class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition">
            บันทึกการเชื่อมโยง
          </button>
        </div>
      </div>`,document.body.appendChild(k),k.querySelector("#slm-list").addEventListener("click",y=>{var D;const _=y.target.closest(".slm-card");if(!_)return;const A=parseInt(_.dataset.id),h=_.dataset.sel==="1",C=_.dataset.locked==="1",T=u.find(M=>M.id===A);if(C&&!h){(D=document.getElementById("slm-confirm-popup"))==null||D.remove();const M=document.createElement("div");M.id="slm-confirm-popup",M.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-6";const V=_.dataset.others;M.innerHTML=`
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
          </div>`,document.body.appendChild(M),M.querySelector("#slm-conf-no").addEventListener("click",()=>M.remove()),M.querySelector("#slm-conf-yes").addEventListener("click",()=>{M.remove(),g.add(A),_.outerHTML=I(T,!0)});return}h?g.delete(A):g.add(A),_.outerHTML=I(T,!h)}),k.querySelector("#slm-close").addEventListener("click",()=>k.remove()),k.addEventListener("click",y=>{y.target===k&&k.remove()}),k.querySelector("#slm-save").addEventListener("click",async()=>{const y=k.querySelector("#slm-save");y.disabled=!0,y.textContent="⏳ กำลังบันทึก...";try{const _=[...g].filter(h=>!f.has(h)),A=[...f].filter(h=>!g.has(h));await Promise.all([..._.map(h=>yt(e,h)),...A.map(h=>vt(e,h))]),S("บันทึกการเชื่อมโยงแล้ว ✅","success"),k.remove(),window._navTo("my-classes")}catch(_){S("เกิดข้อผิดพลาด: "+G(_),"error"),y.disabled=!1,y.textContent="บันทึกการเชื่อมโยง"}})}catch(i){S("โหลดข้อมูลไม่ได้: "+G(i),"error")}};document.addEventListener("DOMContentLoaded",async()=>{var i,m,c,u,x,w,f,g,L,j,v,P;Rt();const e=Ft();let s=!1;if(e)try{if(be(!0),await zt(q),t=e.profile_id?await K(e.profile_id).catch(()=>null)??await Ce(e.id).catch(()=>e):await Ce(e.id).catch(()=>e),!(t!=null&&t.id)||(t==null?void 0:t.profile_id)!==e.profile_id)throw new Error("ไม่พบข้อมูลครูเป้าหมายของเซสชันสวมบทบาท");const{data:p}=await q.from("profiles").select("role,is_also_admin").eq("id",e.profile_id).maybeSingle();if(z=(p==null?void 0:p.is_also_admin)===!0,re=(p==null?void 0:p.role)==="admin"||z,await Ee(),await Qe("teacher",t??{}),F=t!=null&&t.id?await de(t.id).catch(()=>[]):[],t!=null&&t.position||(i=t==null?void 0:t.positions)!=null&&i.length){const y=(m=t.positions)!=null&&m.length?t.positions:[t.position];N=await qe(y).catch(()=>({}))}await le(),je(t),Ye(t);const E=document.getElementById("impersonation-banner"),k=document.getElementById("impersonation-name"),I=document.getElementById("impersonation-exit");E&&k&&(k.textContent=`${(t==null?void 0:t.full_name)??e.full_name} (${(t==null?void 0:t.teacher_code)??e.teacher_code??""})`,E.classList.remove("hidden"),E.classList.add("flex")),I&&I.addEventListener("click",async()=>{try{I.disabled=!0,I.textContent="กำลังกลับสู่บัญชีแอดมิน...",await Pe(q),window.location.replace("dashboard.html")}catch(y){console.error("Cannot end impersonation:",y),I.disabled=!1,I.textContent="← ออกจากโหมดนี้",S("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}}),s=!0}catch(p){console.error("Invalid impersonation session:",p),Ut(),await q.auth.signOut(),S("เซสชันสวมบทบาทไม่ถูกต้อง กรุณาเข้าสู่ระบบแอดมินใหม่","error"),setTimeout(()=>window.location.replace("index.html"),1e3);return}if(!s){const p=await Yt();if(!p)return;if(await Se(p.user.id),F=t?await de(t.id).catch(()=>[]):[],t!=null&&t.position||(c=t==null?void 0:t.positions)!=null&&c.length){const E=(u=t.positions)!=null&&u.length?t.positions:[t.position];N=await qe(E).catch(()=>({}))}await le(),je(t),ht("teachers").catch(()=>{}),wt("teacher").catch(()=>{})}ge(),ye(),en(),t!=null&&t.id&&ln(t.id),t!=null&&t.id&&Sn(),t!=null&&t.id&&kn(),t!=null&&t.id&&_n(t.id),Dt(),xn(),fn(),dt(),t!=null&&t.profile_id&&lt({profileId:t.profile_id,role:"teacher",name:t.full_name}),t!=null&&t.id&&b(()=>import("./teacher-views-donor-chat-B6PovRj_.js"),__vite__mapDeps([51,1,2,3,4,5,6,13,11,43,12,7,8,9,10,26,27,44,45,28,46,47,18])).then(p=>{p.injectDonorChatWidget(t),ce(te)}),on(),ce(te);const n=document.getElementById("app-version");if(n&&(n.textContent=`v${Mt}`,re)){n.classList.add("cursor-pointer","hover:underline");const p=(t==null?void 0:t.profile_id)||((w=(x=(await q.auth.getSession()).data.session)==null?void 0:x.user)==null?void 0:w.id);p&&n.addEventListener("click",()=>Ie(p,!0,!0))}!s&&(t!=null&&t.profile_id)&&re&&Ie(t.profile_id,!1,!0),window.addEventListener("teacher-nav",async p=>{const{view:E,classId:k}=p.detail??{};if(E==="class-detail-sv"&&k){try{const I=await _t(k);if(I){window._openStudentManager=()=>Promise.resolve(),window._openCombinedEditModal=()=>{},window._classCache={[I.id]:I};const{renderClassDetail:y}=await b(async()=>{const{renderClassDetail:_}=await import("./teacher-views-Bd39g1Ox.js");return{renderClassDetail:_}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));if(await y(t,k,{supervisorMode:!0,classes:[I],defaultTab:"attendance"}),window._svBackToDetail){const _=window._svBackToDetail,A=window._backToClasses;window._backToClasses=()=>{const h=document.getElementById("main-content-bak"),C=document.getElementById("main-content");C&&(C.id="cd-tab-content"),h&&(h.id="main-content"),_()}}setTimeout(()=>{document.querySelectorAll(".cd-tab").forEach(_=>{_.dataset.tab==="students"&&(_.style.display="none")}),document.querySelectorAll("button").forEach(_=>{const A=_.textContent.trim();["ทำสำเนา","แก้ไข","ลบ"].some(h=>A.includes(h))&&(_.style.display="none"),A.includes("ปพ.5")&&!A.includes("ดูภาพรวม")&&(_.innerHTML="📋 ดูภาพรวม ปพ.5")})},200)}}catch(I){console.error("supervisor class view error:",I)}return}k&&(window._sv_classId=k),R(E??"overview")}),document.querySelectorAll("[data-nav]").forEach(p=>{p.addEventListener("click",E=>{E.preventDefault(),R(p.dataset.nav)})}),(f=document.getElementById("btn-quick-attendance"))==null||f.addEventListener("click",p=>{p.preventDefault(),he("attendance")}),(g=document.getElementById("btn-quick-grades"))==null||g.addEventListener("click",p=>{p.preventDefault(),he("grades")}),(L=document.getElementById("btn-quick-leave-scanner"))==null||L.addEventListener("click",p=>{p.preventDefault(),at()}),(j=document.getElementById("menu-dashboard"))==null||j.addEventListener("click",async p=>{p.preventDefault();const{openDashboardRoomPicker:E}=await b(async()=>{const{openDashboardRoomPicker:k}=await import("./teacher-views-dashboard-DXzxtYZl.js");return{openDashboardRoomPicker:k}},__vite__mapDeps([41,3,4,5,6]));E(t,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})});const o=document.getElementById("sidebar"),a=document.getElementById("sidebar-overlay");(v=document.getElementById("btn-menu"))==null||v.addEventListener("click",()=>{o.classList.toggle("-translate-x-full"),a.classList.toggle("hidden")}),a==null||a.addEventListener("click",()=>{o.classList.add("-translate-x-full"),a.classList.add("hidden")}),(P=document.getElementById("btn-logout"))==null||P.addEventListener("click",async()=>{if(s){try{await Pe(q),window.location.replace("dashboard.html")}catch(p){console.error("Cannot end impersonation:",p),S("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}return}await q.auth.signOut(),Vt(),S("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}),be(!1);const d=new URLSearchParams(window.location.search),l=d.get("setup")==="1",r=d.get("view");l?(R("setup"),history.replaceState({},"","teacher.html")):r&&Ke[r]?(window._pendingQRTab=d.get("tab")||null,R(r)):R("overview")});export{U as _,xe as a,Je as b};
