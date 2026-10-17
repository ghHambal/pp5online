const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-BeOZLsOo.js","assets/ui-Dw34xP85.js","assets/api-Bf4Tf4Cp.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/academic-term-switcher-BEH7jaVk.js","assets/sync-DqwcQWV1.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-CcIxYoIw.js","assets/teacher-views-classes-Dfj6NaFe.js","assets/browser-JP79f-a9.js","assets/regrade-api-CLR_bWyN.js","assets/pp5-doc-CXhD6zs9.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-grades-DEPKarZO.js","assets/score-qr-scanner-DlvhhgkY.js","assets/teacher-views-attendance-BcU-JXax.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/views-o4B-VA-E.js","assets/leave-monitor.js_v_10.18-BV4BodaP.js","assets/workload-scheduler-C9WpzjbH.js","assets/import-B9koCv_2.js","assets/theme-qDnPEUQn.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azizgames-modal-CZNvwg6f.js","assets/sports-awards-admin-6oCPrlSb.js","assets/teacher-views-flashcards-BwrP4L3O.js","assets/teacher-views-certificates-Ct7phr74.js","assets/certificate-engine-C9CSnChU.js","assets/certificate-editor-Bnyi9SE_.js","assets/teacher-views-quiz-banks-DLz0kuJO.js","assets/quiz-api-BIDUVPR5.js","assets/katex-loader-DUJObfzT.js","assets/teacher-views-exam-docs.js_v_10.22-lHXBxq4T.js","assets/teacher-views-grade-day-B9TekPFo.js","assets/teacher-views-leave-scanner.js_v_10.18-DVptSpEt.js","assets/teacher-views-smart-classroom-DhSgYFBn.js","assets/teacher-views-quiz-monitor-BkuCBbcY.js","assets/teacher-views-quiz-analytics-DcOCMZI8.js","assets/teacher-views-dashboard-DhbvEKQG.js","assets/lesson-plan-ai-workspace-DSAy33Oi.js","assets/council-api-DYf7ov7O.js","assets/regrade-notifications--64rJp2Z.js","assets/promptpay-CIuxvxIA.js","assets/push-notify-CvrEZx9U.js","assets/wen-sso-CcN06Rhh.js","assets/sports-portals.js_v_10.22-Dz4YR1a0.js","assets/tutorial-DqRRkJk5.js","assets/terangganu-api-C1IjZK4l.js","assets/supervisor-BEUNby6n.js","assets/student-views-Wi1nWdWa.js","assets/student-api-DXsWQ_3V.js","assets/teacher-views-donor-chat-Ccw2OW67.js"])))=>i.map(i=>d[i]);
import{a as k,_ as v,g as X,s as Ie,i as Tt,c as At,d as Fe,e as Pt,f as Rt}from"./ui-Dw34xP85.js";import{p as jt}from"./regrade-notifications--64rJp2Z.js";import{s as T}from"./supabase-BV-W2lsh.js";import{getMyClasses as ue,getSystemConfig as V,createSubject as at,getMasterSubjects as _e,updateSubjectAtomic as Bt,getCourseDocPage2 as Mt,saveCourseDocPage2 as Dt,deleteSubject as Nt,getTeacherPackageAccess as Ot,getMyPaymentRequests as Vt,createPaymentRequest as Re,getSupporterRenewalQuote as ze,createSupporterRenewalPaymentRequest as Ht,uploadPaymentSlip as st,getMySchedule as ke,getClassScheduleLinks as je,getPeriods as rt,linkClassToSchedule as Ft,unlinkClassFromSchedule as zt,getMyTeacherProfile as se,getTeacherById as Ge,getMyHomeroomRooms as ye,getTeacherPositionPermissions as Ue,updateLastSeen as Gt,logLogin as Ut,getClassByIdFull as Qt,getMySubjects as Ee,getMyDonationRequests as it,getMySupporterRenewalEntitlement as Yt,submitAppFeedback as Wt,getAcademicTerms as Kt,getPendingExamRequestCount as Jt,getActiveAnnouncements as Zt,getMyAcks as Xt,ackAnnouncementsBulk as en,getUnreadNotifications as tn,markNotificationsRead as nn}from"./api-Bf4Tf4Cp.js";import{p as qe}from"./promptpay-CIuxvxIA.js";import{COPY_TEMPLATE_CONFIG as Qe,getCopyTemplateId as on}from"./sync-DqwcQWV1.js";import{a as lt}from"./theme-qDnPEUQn.js";import{A as an,c as sn,r as rn,o as ln,a as dt}from"./academic-term-switcher-BEH7jaVk.js";import{b as dn}from"./anti-pull-refresh-BGrI1pMY.js";import{i as cn,e as ct}from"./push-notify-CvrEZx9U.js";import{_teacherPositionList as mn,_teacherPositionLabel as un}from"./teacher-views-utils-CcIxYoIw.js";import{b as pn,c as bn}from"./wen-sso-CcN06Rhh.js";import{o as mt}from"./azizgames-modal-CZNvwg6f.js";import{getImpersonationContext as fn,validateImpersonation as gn,endImpersonation as Ye,clearImpersonation as xn}from"./impersonation-0xVfgYVY.js";import{openMyTeamWorkspace as yn,renderShirtVoteDashboard as vn,renderShirtVoteSettings as hn,renderSportsEvaluationWorkspace as wn,renderSportsCompetitionManager as _n,renderSportsOverviewAdmin as kn,renderSportsFundAdmin as ut,renderShirtSummary as pt,renderAdvisorStudents as En}from"./sports-portals.js_v_10.22-Dz4YR1a0.js";import{renderTutorial as Sn}from"./tutorial-DqRRkJk5.js";import{g as Ln}from"./terangganu-api-C1IjZK4l.js";import{g as $n}from"./regrade-api-CLR_bWyN.js";let n=null,Q=[],W=!1,be=!1,oe=!1,z={},Y={enabled:!0,teacher_menu:!0,student_menu:!0,public_page:!0};window._pp5DonorTierIndex=0;window._pp5SystemCfg={};window._pp5AcademicTerms=[];function Be(e=window._pp5SystemCfg){return dt({academic_year:Number((e==null?void 0:e.academicYear)??(e==null?void 0:e.academic_year)??2568),semester:Number((e==null?void 0:e.semester)??1)})}function In(){const e=Be();let t=null;try{t=localStorage.getItem(`pp5_teacher_grade_term_${n==null?void 0:n.id}`)}catch{}return window._pp5AcademicTerms.some(o=>dt(o)===t)?t:e}function qn(e){if(!(!e||!(n!=null&&n.id))){try{localStorage.setItem(`pp5_teacher_grade_term_${n.id}`,e)}catch{}if(e===Be()){P("overview");return}k("เลือกภาคเรียนย้อนหลังแล้ว — เปิดจากหน้าบันทึกคะแนน/ปพ.5 ได้ที่นี่","info"),P("grades")}}function Cn(){var a;const e=document.getElementById("page-title");if(!(e!=null&&e.parentElement)||!window._pp5AcademicTerms.length)return;let t=document.getElementById("teacher-term-switcher-wrap");t||(t=document.createElement("label"),t.id="teacher-term-switcher-wrap",t.className="hidden sm:flex items-center gap-2 ml-2 text-xs font-semibold text-gray-500",e.parentElement.appendChild(t));const o=Be();t.innerHTML=`<span class="whitespace-nowrap">กำลังดู</span>
    <select id="teacher-term-switcher" aria-label="เลือกภาคเรียนที่ต้องการดู"
      class="max-w-[170px] rounded-xl border border-indigo-200 bg-indigo-50 px-2.5 py-1.5 text-xs font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
      ${rn(window._pp5AcademicTerms,In(),o)}
    </select>`,(a=t.querySelector("select"))==null||a.addEventListener("change",s=>qn(s.target.value))}async function bt(){const[e,t]=await Promise.all([V().catch(()=>({})),Kt().catch(()=>[])]);window._pp5SystemCfg=e,window._pp5AcademicTerms=sn(t,e),Cn()}async function Me(){try{const{data:e,error:t}=await T.from("settings").select("value").eq("key","sports_visibility").maybeSingle();!t&&(e!=null&&e.value)&&(Y={...Y,...e.value})}catch{}return Y}async function Tn(){Ie(!0);const{data:{session:e}}=await T.auth.getSession();return e||(window.location.replace("index.html"),null)}async function De(e){var d,r,i;const[t,o,a]=await Promise.all([se(e),T.auth.getSession(),T.from("profiles").select("role, is_also_admin").eq("id",e).maybeSingle()]);n=t,n&&(n.auth_email=((i=(r=(d=o==null?void 0:o.data)==null?void 0:d.session)==null?void 0:r.user)==null?void 0:i.email)??""),await lt("teacher",n??{});const s=a==null?void 0:a.data;W=(s==null?void 0:s.is_also_admin)===!0,oe=(s==null?void 0:s.role)==="admin"||W;const l=document.querySelector("header .flex.items-center.gap-3:last-child");if(W&&l&&!document.getElementById("btn-switch-admin")){const m=document.createElement("a");m.id="btn-switch-admin",m.href="dashboard.html",m.title="สลับไปหน้าแอดมิน",m.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 shadow-sm border border-emerald-200/50 mr-1",m.innerHTML="<span>⚙️</span><span>สลับเป็นแอดมิน</span>",l.insertBefore(m,l.firstChild)}await Me(),ft(n),await bt()}function ft(e){const t=document.querySelector("#sidebar nav"),o=mn(e),a=un(e);if(o.length>0&&t&&!document.getElementById("btn-sv-mode")){const c=document.createElement("button");c.id="btn-sv-mode",c.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition w-full text-left text-emerald-200 hover:bg-emerald-800 hover:text-white",c.style.color="#93c5fd",c.innerHTML=`<span>📊</span><span>Dashboard ${a}</span>`,c.onclick=He;const b=t.querySelector('[data-nav="work-calendar-view"]');b?b.insertAdjacentElement("afterend",c):t.insertBefore(c,t.firstChild)}An();const s=(e==null?void 0:e.full_name)??"ครูผู้สอน",l=e!=null&&e.teacher_code?`รหัส ${e.teacher_code}`:"",d=(e==null?void 0:e.image_url)??"",r=document.getElementById("t-avatar");d?r.innerHTML=`<img src="${d}" class="w-full h-full object-cover" />`:r.textContent=s.charAt(0).toUpperCase(),document.getElementById("t-name").textContent=s,document.getElementById("t-code").textContent=l,e!=null&&e.id&&eo(e.id),document.getElementById("user-name").textContent=s;const i=document.getElementById("user-role-label");i&&(i.textContent=o.length?a:"ครูผู้สอน");const m=document.getElementById("user-avatar");d?m.innerHTML=`<img src="${d}" class="w-full h-full object-cover" />`:m.textContent=s.charAt(0).toUpperCase()}function An(){const e=document.getElementById("menu-sports-shortcut");if(!e)return;const t=Y.enabled!==!1&&Y.teacher_menu!==!1;e.classList.toggle("hidden",!t)}function $e(e,t){if(e.length===1){t(e[0].main_room);return}const o=document.createElement("div");o.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">🏠 เลือกห้องที่ปรึกษา</h3>
        <p class="text-xs text-gray-400 mt-1">คุณเป็นที่ปรึกษาหลายห้อง — เลือกห้องที่ต้องการ</p>
      </div>
      <div class="px-5 py-4 space-y-2">
        ${e.map(a=>`
        <button data-room="${a.main_room}"
          class="room-pick-btn w-full text-left px-4 py-3 rounded-xl border border-gray-200
                 hover:border-emerald-400 hover:bg-emerald-50 text-sm font-medium transition">
          ${a.main_room}
        </button>`).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="room-pick-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">ยกเลิก</button>
      </div>
    </div>`,document.body.appendChild(o),o.querySelectorAll(".room-pick-btn").forEach(a=>a.addEventListener("click",()=>{o.remove(),t(a.dataset.room)})),o.querySelector("#room-pick-cancel").addEventListener("click",()=>o.remove())}const gt={"announcements-view":()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderAnnouncementsView(n)),"work-calendar-view":()=>v(async()=>{const{renderWorkCalendarView:e,renderWorkCalendar:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderWorkCalendarView:e,renderWorkCalendar:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30])).then(({renderWorkCalendarView:e,renderWorkCalendar:t})=>z.work_calendar?t(n):e()),overview:()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderTeacherOverview(n,Q)),"my-courses":()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderMyCourses(n)),"my-classes":()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderMyClasses(n)),attendance:()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderAttendance(n)),"life-skill-score":()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>{const t=Q.filter(o=>o.category==="สามัญ");$e(t,o=>e.renderLifeSkillScore(n,t.filter(a=>a.main_room===o)))}),"reading-score":()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>{const t=window._pendingReadingRoom;window._pendingReadingRoom=null,e.renderReadingScore(n,t)}),"prayer-score":()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>{const t=Q.filter(o=>o.category==="ศาสนา");t.length===0?e.renderPrayerScore(n,[]):$e(t,o=>e.renderPrayerScore(n,t.filter(a=>a.main_room===o)))}),"prayer-monitor":()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>{const t=Q.filter(a=>a.category==="ศาสนา"),o=window._pendingPrayerMonitorRoom||null;window._pendingPrayerMonitorRoom=null,t.length===0?e.renderPrayerRoomMonitor(n,[]):o&&t.some(a=>a.main_room===o)?e.renderPrayerRoomMonitor(n,t,o):t.length===1?e.renderPrayerRoomMonitor(n,t,t[0].main_room):$e(t,a=>e.renderPrayerRoomMonitor(n,t,a))}),grades:()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderGrades(n)),requests:()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderRequests(n)),schedule:()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderSchedule(n)),tutorial:()=>Sn(),flashcards:()=>v(()=>import("./teacher-views-flashcards-BwrP4L3O.js"),__vite__mapDeps([31,1,2,3,4,5,6,10])).then(e=>e.renderFlashcardDecks(n)),certificates:()=>v(()=>import("./teacher-views-certificates-Ct7phr74.js"),__vite__mapDeps([32,1,33,3,9,34,16,10])).then(e=>e.renderCertificateManager(n)),"quiz-system":()=>v(()=>import("./teacher-views-quiz-banks-DLz0kuJO.js"),__vite__mapDeps([35,1,36,3,26,17,10,37])).then(e=>e.renderQuizBanks(n)),"exam-docs":()=>v(()=>import("./teacher-views-exam-docs.js_v_10.22-lHXBxq4T.js"),__vite__mapDeps([38,2,3,4,5,6,1,9,10])).then(e=>e.renderExamDocuments(n)),"grade-day":()=>v(()=>import("./teacher-views-grade-day-B9TekPFo.js"),__vite__mapDeps([39,2,3,4,5,6,9,1,10])).then(e=>e.renderGradeDayDocuments(n)),sports:()=>{var o;const e=(o=n==null?void 0:n.positions)!=null&&o.length?n.positions:n!=null&&n.position?[n.position]:[],t=oe||z.menu_sports_admin||e.includes("house_color_admin")||(n==null?void 0:n.staff_type)==="แอดมิน"||(n==null?void 0:n.position)==="admin";mt(t?{admin:!0,teacherName:n==null?void 0:n.full_name,teacherCode:n==null?void 0:n.teacher_code}:{})},"advisor-students":()=>En(n,Q),"shirt-summary":()=>pt(),"sports-fund-admin":()=>ut(),"sports-overview-admin":()=>kn(),"sports-competition-manager":()=>_n(),"sports-evaluation":()=>wn(),"shirt-vote-settings":()=>hn(),"shirt-vote-dashboard":()=>vn(),"my-team-workspace":()=>yn(),"student-qr-print":()=>{const e=window._pendingQRClassId||null;window._pendingQRClassId=null,v(()=>import("./teacher-views-classes-Dfj6NaFe.js").then(t=>t.t),__vite__mapDeps([11,1,2,3,4,5,6,12,8,13,14,15,9,10,16,17,18,19,20,21,22])).then(t=>t.renderStudentQRPrint(n,e,{isQrManager:be}))},"student-leave-scanner":()=>{v(()=>import("./teacher-views-leave-scanner.js_v_10.18-DVptSpEt.js"),__vite__mapDeps([40,2,3,4,5,6,24,21,1,10])).then(e=>e.renderStudentLeaveScanner(n))},"smart-classroom":()=>{const e=window._pendingSmartClassroomId;window._pendingSmartClassroomId=null,v(()=>import("./teacher-views-smart-classroom-DhSgYFBn.js"),__vite__mapDeps([41,1,2,3,4,5,6,36,19,20,21,10,18,15,13,42,43,44,11,12,8,14,9,16,17,22,45,46,47,48,27,7,28,49,50,29,51,30,52,53])).then(t=>t.renderSmartClassroom(n,e))},"schedule-builder":()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderScheduleBuilder(n,()=>P("overview"))),profile:()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderProfile(n,Q,Gn)),setup:()=>v(()=>import("./teacher-views-BeOZLsOo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>e.renderProfileSetup(n,Q,Un))},We={teaching:{title:"งานสอน",items:[{selector:"#menu-my-courses",icon:"📖",label:"คอร์สวิชาของฉัน"},{selector:"#menu-my-classes",icon:"🏫",label:"ห้องเรียนของฉัน"},{selector:"#btn-quick-attendance",icon:"✅",label:"เช็คชื่อ"},{selector:"#btn-quick-grades",icon:"📝",label:"บันทึกคะแนน"},{selector:'[data-nav="schedule"]',icon:"🗓️",label:"ตารางสอน"},{selector:'[data-nav="requests"]',icon:"🔔",label:"คำร้องนักเรียน"},{selector:"#menu-dashboard",icon:"📈",label:"Dashboard ห้องเรียน"}]},students:{title:"นักเรียน",items:[{selector:"#btn-quick-leave-scanner",icon:"📷",label:"สแกนเอกสารนักเรียน"},{selector:"#menu-advisor-students",icon:"👥",label:"นักเรียนที่ปรึกษา"},{selector:'[data-nav="student-leave-scanner"]',icon:"📋",label:"ตรวจสอบใบอนุญาตออกนอกห้อง"},{selector:'[data-nav="student-qr-print"]',icon:"🖨️",label:"พิมพ์ QR Code นักเรียน"}]},tools:{title:"เครื่องมือ",items:[{selector:'[data-nav="flashcards"]',icon:"🃏",label:"บัตรคำศัพท์"},{selector:'[data-nav="quiz-system"]',icon:"📝",label:"แบบทดสอบออนไลน์"},{selector:'[data-nav="exam-docs"]',icon:"📄",label:"เอกสารช่วงสอบ"},{selector:'[data-nav="grade-day"]',icon:"📋",label:"เอกสารตารางวันรับเกรด"},{selector:'[data-nav="certificates"]',icon:"🏅",label:"ระบบเกียรติบัตร"},{selector:'[data-nav="tutorial"]',icon:"📖",label:"คู่มือการใช้งาน"}]},more:{title:"เพิ่มเติม",items:[{selector:'[data-nav="announcements-view"]',icon:"📢",label:"ประกาศ"},{selector:'[data-nav="work-calendar-view"]',icon:"📅",label:"ปฏิทินปฏิบัติงาน"},{selector:'[data-nav="life-skill-score"]',icon:"🌱",label:"คะแนนทักษะชีวิต"},{selector:'[data-nav="reading-score"]',icon:"📖",label:"คะแนนอ่านคิดวิเคราะห์"},{selector:'[data-nav="prayer-score"]',icon:"🕌",label:"คะแนนละหมาด"},{selector:"#menu-council",icon:"🏛️",label:"ระบบสภานักเรียน"},{selector:"#menu-terangganu",icon:"⚜️",label:"ค่าย TERANGGANU 2026"},{selector:"#menu-regrade",icon:"📋",label:"แก้ค้างเก่า"},{selector:"#menu-sports-shortcut",icon:"🏆",label:"ระบบกีฬาสี"},{selector:"#menu-my-team",icon:"🛡️",label:"จัดการสีของฉัน"},{selector:"#menu-shirt-summary",icon:"📦",label:"สรุปยอดเสื้อกีฬาสี"},{selector:"#menu-sports-fund-admin",icon:"💰",label:"บัญชีเงินกีฬาสี"},{selector:"#menu-sports-overview-admin",icon:"📊",label:"ภาพรวมกีฬาสี"},{selector:"#menu-sports-competition-manager",icon:"🏟️",label:"รายการแข่งขันของฉัน"},{selector:"#menu-sports-checkin",icon:"📷",label:"รับรายงานตัวนักกีฬา"},{selector:"#menu-sports-evaluation",icon:"🧑‍⚖️",label:"ประเมินกีฬาสี"},{selector:"#menu-shirt-vote-dashboard",icon:"🗳️",label:"ผลโหวตแบบเสื้อ"},{selector:"#menu-qr-reissue-requests",icon:"🎫",label:"พิมพ์/คำขอ QR Code"}]}},Pn={overview:"home","my-courses":"teaching","my-classes":"teaching",grades:"teaching",requests:"teaching",schedule:"teaching","advisor-students":"students","student-qr-print":"students","student-leave-scanner":"students",flashcards:"tools","quiz-system":"tools","exam-docs":"tools","grade-day":"tools",certificates:"tools",tutorial:"tools","announcements-view":"more","work-calendar-view":"more","life-skill-score":"more","reading-score":"more","prayer-score":"more",sports:"more","shirt-summary":"more","sports-fund-admin":"more","sports-overview-admin":"more","sports-competition-manager":"more","sports-evaluation":"more","shirt-vote-dashboard":"more","my-team-workspace":"more"},fe={teaching:0,more:0,moreAnnouncements:0,moreRegrade:0};function xt(e,t){const o=Math.max(0,Number(t)||0);fe[e]=o;const a=document.querySelector(`[data-mobile-badge="${e}"]`);a&&(o>0?(a.textContent=o>99?"99+":String(o),a.classList.remove("hidden")):a.classList.add("hidden"))}function Ce(e,t){fe[e]=Math.max(0,Number(t)||0),xt("more",fe.moreAnnouncements+fe.moreRegrade)}function Rn(e){return!e||e.closest(".hidden")||e.classList.contains("hidden")?!1:window.getComputedStyle(e).display!=="none"}function yt(e){return[...document.querySelectorAll(e)].find(Rn)||null}function ne(e=null){const t=document.getElementById("mobile-nav-sheet"),o=document.getElementById("mobile-nav-backdrop"),a=document.getElementById("mobile-nav-sheet-items"),s=document.getElementById("mobile-nav-sheet-title");if(!t||!o||!a||!s)return;const l=!!(e&&We[e]);if(document.querySelectorAll("[data-mobile-group]").forEach(i=>{const m=l&&i.dataset.mobileGroup===e;i.classList.toggle("active",m),i.setAttribute("aria-expanded",m?"true":"false")}),t.classList.toggle("mobile-nav-open",l),o.classList.toggle("mobile-nav-open",l),t.setAttribute("aria-hidden",l?"false":"true"),o.setAttribute("aria-hidden",l?"false":"true"),!l)return;const d=We[e];s.textContent=d.title,a.replaceChildren();const r=d.items.map(i=>({...i,source:yt(i.selector)})).filter(i=>i.source);if(!r.length){const i=document.createElement("p");i.className="mobile-nav-sheet-empty",i.textContent="ยังไม่มีเมนูสำหรับบัญชีนี้",a.append(i);return}r.forEach(i=>{const m=document.createElement("button");m.type="button",m.className="mobile-nav-sheet-item",m.innerHTML=`<span class="mobile-nav-sheet-item-icon" aria-hidden="true">${i.icon}</span><span>${i.label}</span>`,m.addEventListener("click",()=>{ne(),i.source.click()}),a.append(m)})}function jn(){var o,a,s,l;const e=()=>yt('[data-nav="overview"]');document.querySelectorAll("[data-mobile-group]").forEach(d=>{d.addEventListener("click",()=>{var m;const r=d.dataset.mobileGroup;if(r==="home"){ne(),(m=e())==null||m.click();return}const i=d.getAttribute("aria-expanded")==="true";ne(i?null:r)})}),(o=document.getElementById("mobile-nav-backdrop"))==null||o.addEventListener("click",()=>ne()),(a=document.getElementById("mobile-nav-sheet-close"))==null||a.addEventListener("click",()=>ne()),document.addEventListener("keydown",d=>{d.key==="Escape"&&ne()});let t=null;(s=document.getElementById("mobile-nav-sheet"))==null||s.addEventListener("touchstart",d=>{var r;t=((r=d.touches[0])==null?void 0:r.clientY)??null},{passive:!0}),(l=document.getElementById("mobile-nav-sheet"))==null||l.addEventListener("touchend",d=>{var i;if(t===null)return;(((i=d.changedTouches[0])==null?void 0:i.clientY)??t)-t>55&&ne(),t=null},{passive:!0}),window._mobileNavSync=d=>{const r=Pn[d]||null;document.querySelectorAll("[data-mobile-group]").forEach(i=>{i.classList.toggle("active",i.dataset.mobileGroup===r&&i.getAttribute("aria-expanded")!=="true")})}}function te(e){var m,c;const t=document.getElementById("mobile-profile-sheet"),o=document.getElementById("mobile-profile-backdrop");if(!t||!o||(t.classList.toggle("mobile-profile-open",e),o.classList.toggle("mobile-profile-open",e),t.setAttribute("aria-hidden",e?"false":"true"),o.setAttribute("aria-hidden",e?"false":"true"),!e))return;const a=(n==null?void 0:n.full_name)||((m=document.getElementById("user-name"))==null?void 0:m.textContent)||"ครูผู้สอน",s=n!=null&&n.teacher_code?`รหัส ${n.teacher_code}`:"",l=(n==null?void 0:n.category)||((c=document.getElementById("user-role-label"))==null?void 0:c.textContent)||"ครูผู้สอน",d=document.getElementById("mobile-profile-name"),r=document.getElementById("mobile-profile-meta"),i=document.getElementById("mobile-profile-avatar");if(d&&(d.textContent=a),r&&(r.textContent=[s,l].filter(Boolean).join(" · ")||"ครูผู้สอน"),i){i.replaceChildren();const b=document.querySelector("#user-avatar img");if(b){const g=b.cloneNode(!0);g.removeAttribute("class"),i.append(g)}else i.textContent=a.trim().charAt(0).toUpperCase()||"ค"}}function Bn(){var o,a,s,l,d,r;const e=document.getElementById("user-avatar"),t=()=>te(!0);e==null||e.addEventListener("click",t),e==null||e.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),t())}),(o=document.getElementById("mobile-profile-close"))==null||o.addEventListener("click",()=>te(!1)),(a=document.getElementById("mobile-profile-backdrop"))==null||a.addEventListener("click",()=>te(!1)),(s=document.getElementById("mobile-profile-edit"))==null||s.addEventListener("click",()=>{te(!1),P("profile")}),(l=document.getElementById("mobile-profile-password"))==null||l.addEventListener("click",()=>{te(!1),window._profileFocus="password",P("profile")}),(d=document.getElementById("mobile-profile-contact"))==null||d.addEventListener("click",()=>{te(!1);const i=document.getElementById("btn-contact-admin");i?i.click():typeof window._openFeedbackWidget=="function"?window._openFeedbackWidget():k("ยังโหลดช่องทางติดต่อไม่เสร็จ กรุณาลองอีกครั้ง","info")}),(r=document.getElementById("mobile-profile-logout"))==null||r.addEventListener("click",()=>{var i;te(!1),(i=document.getElementById("btn-logout"))==null||i.click()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&te(!1)})}const Ke=[{key:"courses",icon:"📚",title:"รายวิชาและภาพรวม",defaultOpen:!0,selectors:['[data-nav="overview"]',"#menu-my-courses","#menu-my-classes","#menu-dashboard"]},{key:"teaching",icon:"🧑‍🏫",title:"งานสอนประจำวัน",defaultOpen:!0,selectors:["#daily-work-section"]},{key:"students",icon:"👥",title:"นักเรียน",defaultOpen:!1,selectors:["#menu-advisor-students"]},{key:"semester",icon:"📋",title:"งานรายภาคเรียน",defaultOpen:!1,selectors:["#sem-work-section"]},{key:"sports",icon:"🏆",title:"ระบบกีฬาสี",defaultOpen:!1,selectors:["#menu-sports-shortcut","#menu-my-team","#menu-shirt-summary","#menu-sports-fund-admin","#menu-sports-overview-admin","#menu-sports-competition-manager","#menu-sports-checkin","#menu-awards-group","#menu-sports-evaluation","#menu-shirt-vote-dashboard","#menu-qr-reissue-requests"]},{key:"general",icon:"📢",title:"ประกาศและกิจกรรม",defaultOpen:!0,selectors:['[data-nav="announcements-view"]','[data-nav="work-calendar-view"]',"#btn-sv-mode","#menu-council","#menu-terangganu","#menu-regrade"]},{key:"tools",icon:"🧰",title:"เครื่องมือและคู่มือ",defaultOpen:!1,selectors:['[data-nav="certificates"]','[data-nav="tutorial"]']}],Je=new WeakSet,Mn={overview:"courses","my-courses":"courses","my-classes":"courses",attendance:"teaching",grades:"teaching",requests:"teaching",schedule:"teaching",flashcards:"teaching","quiz-system":"teaching","exam-docs":"teaching","student-qr-print":"teaching","student-leave-scanner":"teaching","advisor-students":"students","life-skill-score":"semester","reading-score":"semester","prayer-score":"semester",sports:"sports","shirt-summary":"sports","sports-fund-admin":"sports","sports-overview-admin":"sports","sports-competition-manager":"sports","sports-evaluation":"sports","shirt-vote-dashboard":"sports","my-team-workspace":"sports","announcements-view":"general","work-calendar-view":"general",certificates:"tools",tutorial:"tools"};function Ne(e,t,o=!0){e.classList.toggle("is-collapsed",!t);const a=e.querySelector(".sidebar-menu-group-toggle");if(a==null||a.setAttribute("aria-expanded",t?"true":"false"),o)try{localStorage.setItem(`pp5_teacher_sidebar_group_${e.dataset.sidebarGroup}`,t?"1":"0")}catch{}}function Dn(e){const t=e.querySelector(".sidebar-menu-group-toggle");!t||Je.has(t)||(Je.add(t),t.addEventListener("click",()=>{const o=t.getAttribute("aria-expanded")==="true";Ne(e,!o)}))}function vt(){const e=document.querySelector("#sidebar nav");if(e){if(!e.querySelector(":scope > .sidebar-menu-group")){const t=new Set,o=Ke.map(a=>{const s=document.createElement("section");s.className="sidebar-menu-group",s.dataset.sidebarGroup=a.key;const l=document.createElement("button");l.type="button",l.className="sidebar-menu-group-toggle",l.innerHTML=`<span class="sidebar-menu-group-toggle-label"><span aria-hidden="true">${a.icon}</span><span>${a.title}</span></span><span class="sidebar-menu-group-chevron" aria-hidden="true">⌄</span>`;const d=document.createElement("div");return d.className="sidebar-menu-group-items",a.selectors.forEach(r=>{var m;const i=e.querySelector(r);!i||t.has(i)||(t.add(i),(m=i.querySelector(":scope > p"))==null||m.classList.add("sidebar-group-legacy-label"),d.append(i))}),s.append(l,d),s}).filter(a=>{var s;return(s=a.querySelector(".sidebar-menu-group-items"))==null?void 0:s.children.length});e.replaceChildren(...o)}e.querySelectorAll(":scope > .sidebar-menu-group").forEach(t=>{const o=Ke.find(s=>s.key===t.dataset.sidebarGroup);let a=null;try{a=localStorage.getItem(`pp5_teacher_sidebar_group_${t.dataset.sidebarGroup}`)}catch{}Ne(t,a===null?!!(o!=null&&o.defaultOpen):a==="1",!1),Dn(t)})}}function Nn(e){const t=Mn[e];if(!t)return;const o=document.querySelector(`#sidebar .sidebar-menu-group[data-sidebar-group="${t}"]`);o&&Ne(o,!0,!1)}let ce="overview";async function P(e){var o;if(!(n!=null&&n.id))try{const{data:{user:a}}=await T.auth.getUser();a!=null&&a.id&&(n=await se(a.id).catch(()=>null)??n)}catch{}if(document.body.classList.remove("sc-fullscreen"),window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),typeof window._cleanupLeaveScanner=="function")try{window._cleanupLeaveScanner()}catch{}if(typeof window._cleanupPrayerRoomMonitor=="function")try{window._cleanupPrayerRoomMonitor()}catch{}if(typeof window._cleanupAdvisorShirtPaymentScanner=="function")try{window._cleanupAdvisorShirtPaymentScanner()}catch{}if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}const t=gt[e];t&&(ce=e,t()),he(e),(o=window._mobileNavSync)==null||o.call(window,e),Nn(e)}window._navTo=P;window._goBack=()=>P("my-courses");window._refreshCurrentView=()=>P(ce);window.addEventListener("pp5:open-sports-shirt-summary",()=>P("shirt-summary"));window.addEventListener("pp5:open-shirt-vote-settings",()=>P("shirt-vote-settings"));window.addEventListener("pp5:open-shirt-vote-dashboard",()=>P("shirt-vote-dashboard"));const q=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Z=(e,t)=>{const o=parseInt(e,10);return Number.isFinite(o)&&o>0?o:t};function On(e){return[1,2,3,4].map(t=>(e[`donationGeminiKey${t}`]??"").trim()).filter(Boolean)}async function Vn(e,t,{maxTokens:o=1024}={}){var d,r,i,m,c;const{data:a,error:s}=await T.functions.invoke("gemini-proxy",{body:{keyType:"donation",prompt:t,maxTokens:o}});if(s)throw new Error(s.message??"Edge Function error");if(a!=null&&a.error)throw new Error(a.error.message??"Gemini error");return{text:((c=(m=(i=(r=(d=a==null?void 0:a.candidates)==null?void 0:d[0])==null?void 0:r.content)==null?void 0:i.parts)==null?void 0:m[0])==null?void 0:c.text)??"",keyIndex:1}}window._callDonationAI=Vn;window._getDonationGeminiKeys=On;const Oe=e=>{const t=String(e.donationSpecialFeatures??"").trim();return(t?t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const l=s.split("|").map(m=>m.trim()),d=l[0]||"✨",r=l[1]||l[0]||s,i=parseInt(l[2])||1;return{icon:d,text:r,minTier:i}}):[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([s,l,d])=>({icon:s,text:l,minTier:d}))).filter(s=>s.text)},ht=(e,t,o)=>{var s;if(!o)return 0;const a=(s=[...t].map((l,d)=>({t:l,i:d})).reverse().find(({t:l})=>o>=l.amount))==null?void 0:s.i;return a!==void 0?a+1:0},Se=(e,t,o)=>{const a=String(e.donationStickerTiers??"").trim();return(a?a.split(`
`).map(r=>r.trim()).filter(Boolean).map(r=>{const[i,m,c,b,g]=r.split("|").map(f=>f.trim());return{amount:Z(i,0),sticker:m||"🏅",title:c||`ผู้สนับสนุน ${i||""} บาท`,note:b||"ขอบคุณที่ช่วยสนับสนุนการพัฒนาระบบครับ",color:g||""}}):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([r,i,m,c,b])=>({amount:r,sticker:i,title:m,note:c,color:b}))).filter(r=>r.amount>0).sort((r,i)=>r.amount-i.amount).map((r,i)=>{const m=e[`donationStickerImg${i+1}`]??"";return m&&/^https?:\/\//.test(m)?{...r,sticker:m}:r})},Ze=e=>{if(!e)return"";const t=String(e.sticker??"");return`
    <div class="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-3 shadow-sm">
      ${/^https?:\/\//.test(t)?`<img src="${q(t)}" class="w-14 h-14 object-contain drop-shadow-md" />`:`<div class="w-14 h-14 flex items-center justify-center text-3xl">${q(t||"🏅")}</div>`}
      <div class="min-w-0">
        <p class="text-sm font-bold text-amber-900">${q(e.title)}</p>
        <p class="text-[11px] text-amber-700 leading-relaxed">${q(e.note)}</p>
      </div>
    </div>`},Hn=e=>`https://docs.google.com/spreadsheets/d/${encodeURIComponent(e)}/copy`;async function wt(){var d;const e=await V().catch(()=>({})),t={start:[{key:"สามัญ",label:"📚 สามัญ"},{key:"ศาสนา",label:"🕌 ศาสนา"}],สามัญ:Qe.filter(r=>r.category==="สามัญ"),ศาสนา:Qe.filter(r=>r.category==="ศาสนา")},o=["start"];(d=document.getElementById("standalone-copy-modal"))==null||d.remove();const a=document.createElement("div");a.id="standalone-copy-modal",a.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",a.innerHTML=`<div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div>
        <h3 class="text-xl font-bold text-pink-500 leading-tight">สร้างสำเนาไฟล์ ปพ5Online</h3>
        <p class="text-xs text-gray-400 mt-1">สำหรับใช้งานไฟล์ Google Sheet แบบเดิม</p>
      </div>
      <button id="copy-flow-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div id="copy-flow-app"></div>
  </div>`,document.body.appendChild(a);const s=a.querySelector("#copy-flow-app"),l=()=>{var m;const r=o[o.length-1],i=t[r]||[];s.innerHTML=`
      <div class="text-center text-lg text-gray-600 mb-4">${o.length===1?"เลือกหมวดหมู่":"เลือกกลุ่ม/ประเภท"}</div>
      <div class="flex flex-col gap-3">
        ${i.map(c=>{const b=c.defaultId?on(e,c.key):"";return b?`
            <a href="${Hn(b)}" target="_blank" rel="noopener noreferrer"
              class="w-full ${c.color||"bg-gradient-to-r from-pink-400 to-green-400"} text-white font-semibold py-3 rounded-2xl shadow-md hover:scale-[1.02] transition-all text-center block text-lg">
              🔗 เปิดไฟล์: ${q(c.label)}
            </a>`:`
            <button data-next="${q(c.key)}"
              class="copy-flow-next w-full bg-pink-200 hover:bg-pink-300 text-pink-700 font-medium py-3 rounded-2xl shadow text-lg transition-all">
              ${q(c.label)}
            </button>`}).join("")}
      </div>
      ${o.length>1?'<button id="copy-flow-back" class="mt-6 text-sm text-gray-400 underline hover:text-pink-400 transition-all">⬅️ ย้อนกลับ</button>':""}`,s.querySelectorAll(".copy-flow-next").forEach(c=>{c.addEventListener("click",()=>{o.push(c.dataset.next),l()})}),(m=s.querySelector("#copy-flow-back"))==null||m.addEventListener("click",()=>{o.length>1&&o.pop(),l()})};a.querySelector("#copy-flow-close").addEventListener("click",()=>a.remove()),a.addEventListener("click",r=>{r.target===a&&a.remove()}),l()}window._openStandaloneCopyFlow=wt;window._showQuotaFromOverview=()=>{Promise.all([ue((n==null?void 0:n.id)??null).catch(()=>[]),V().catch(()=>({}))]).then(([e,t])=>me(e.length,null,t)).catch(()=>me(0,null,{}))};window._openWenDuty=e=>{var o;(o=document.getElementById("wen-duty-modal"))==null||o.remove();const t=document.createElement("div");t.id="wen-duty-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col",t.innerHTML=`
    <div class="flex items-center justify-between px-4 py-2 bg-amber-600 text-white shadow flex-shrink-0">
      <span class="font-bold text-sm flex items-center gap-2">🛡️ ระบบเวรประจำวัน</span>
      <button id="wen-duty-close" class="text-white text-2xl leading-none px-2 hover:opacity-75">×</button>
    </div>
    <iframe src="${pn(e)}" class="flex-1 w-full border-0"></iframe>`,document.body.appendChild(t),t.querySelector("#wen-duty-close").addEventListener("click",()=>t.remove())};window._openLifeSkillScore=e=>P("life-skill-score");window._openReligionScore=e=>P("prayer-score");window._openReligionPrayerMonitor=e=>{window._pendingPrayerMonitorRoom=e||null,P("prayer-monitor")};window._openReadingScore=()=>{window._pendingReadingRoom=null,P("reading-score")};window._openReadingScoreRoom=e=>{window._pendingReadingRoom=e,P("reading-score")};window._openReadingScorePicker=e=>{var a;let t=[];try{t=JSON.parse(e.replace(/&quot;/g,'"'))}catch{t=[]}if(!t.length){k("ยังไม่มีห้องเรียน — ลงทะเบียนห้องก่อนบันทึกคะแนน","warning");return}(a=document.getElementById("rsp-modal"))==null||a.remove();const o=document.createElement("div");o.id="rsp-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800">📖 เลือกห้องบันทึกคะแนน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อ่านคิดวิเคราะห์และเขียน</p>
        </div>
        <button id="rsp-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
      </div>
      <div class="p-4 grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
        ${t.map(s=>`
        <button class="rsp-room px-3 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-800
                       text-sm font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition text-center"
          data-room="${s}">${s}</button>`).join("")}
      </div>
    </div>`,document.body.appendChild(o),o.querySelector("#rsp-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",s=>{s.target===o&&o.remove()}),o.querySelectorAll(".rsp-room").forEach(s=>{s.addEventListener("click",()=>{o.remove(),window._openReadingScoreRoom(s.dataset.room)})})};let pe=null,_t=null,le=null,de=null;async function Te(){if(n)try{const e=await Jt(n.id),t=document.getElementById("badge-requests");if(t&&(e>0?(t.textContent=e>99?"99+":e,t.classList.remove("hidden")):t.classList.add("hidden")),xt("teaching",e),pe!==null&&e>pe){const o=e-pe;k(`🔔 มีคำร้องนักเรียนใหม่ ${o} รายการ`,"info")}pe=e}catch{}}function kt(e){var d,r,i;const t=Math.max(0,Number(e)||0);Ce("moreRegrade",t);const o=t>99?"99+":String(t),a=document.getElementById("menu-regrade");(d=a==null?void 0:a.querySelector("[data-regrade-menu-badge]"))==null||d.remove(),a&&t>0&&a.insertAdjacentHTML("beforeend",`<span data-regrade-menu-badge class="ml-auto min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold inline-flex items-center justify-center">${o}</span>`);const s=document.getElementById("teacher-regrade-overview-tile");(r=s==null?void 0:s.querySelector("[data-icon-tile-badge]"))==null||r.remove(),s&&t>0&&s.insertAdjacentHTML("afterbegin",`<span data-icon-tile-badge class="absolute -top-1 right-1 z-10 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold flex items-center justify-center shadow">${o}</span>`);const l=(i=window._teacherOverviewSystems)==null?void 0:i.find(m=>m.key==="regrade");l&&(l.badge=t)}async function ge(){if(n)try{const e=await jt("teacher",n.id);kt(e),_t=e}catch{}}function Fn(){if(le)return;ge(),le=setInterval(()=>{document.visibilityState==="visible"&&(Te(),ge())},3e4),de=()=>{document.visibilityState==="visible"&&(Te(),ge())},document.addEventListener("visibilitychange",de),window._cleanupTeacherPolling=zn}function zn(){le&&clearInterval(le),le=null,de&&document.removeEventListener("visibilitychange",de),de=null}async function ve(){var H,ee,S,I,U,A,K;const e=Q.some(O=>O.category==="สามัญ"),t=(n==null?void 0:n.dept)==="THAI";let o=Q.some(O=>O.category==="ศาสนา");const a=(O,D)=>Promise.resolve(O).catch(()=>D),[s,l,d,r,i,m,c,b,g,f,x]=await Promise.all([a(V(),{}),n?a(T.from("profiles").select("role").eq("id",n.profile_id).maybeSingle(),{data:null}):Promise.resolve({data:null}),a(T.rpc("get_terangganu_access"),{data:null}),a(T.from("sports_team_memberships").select("id,role,permissions").eq("profile_id",n==null?void 0:n.profile_id).eq("is_active",!0),{data:[]}),a(T.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),{data:null}),a(T.from("sports").select("id,event_id").eq("responsible_teacher_id",n==null?void 0:n.profile_id).eq("is_active",!0),{data:[]}),a(T.from("qr_reissue_managers").select("profile_id").eq("profile_id",n==null?void 0:n.profile_id).maybeSingle(),{data:null}),a($n(),{}),n?a(T.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",n.id).eq("status","จำนงแล้ว"),{count:0}):Promise.resolve({count:0}),a(T.from("sports_score_evaluators").select("id").eq("profile_id",n==null?void 0:n.profile_id).eq("is_active",!0),{data:[]}),a(T.rpc("sports_awards_access"),{data:null})]);if(!o&&n){const O=(s.prayerScannerTeachers||"").split(/[\s,]+/).map(Le=>Le.trim()).filter(Boolean),D=(l==null?void 0:l.data)??null;(O.includes(n.teacher_code)||n.staff_type==="แอดมิน"||n.position==="admin"||(D==null?void 0:D.role)==="admin")&&(o=!0)}const p=(O,D)=>{const J=document.getElementById(O);J&&(J.classList.toggle("hidden",!D),J.classList.toggle("flex",D))},E=(O,D)=>{var J;(J=document.getElementById(O))==null||J.classList.toggle("hidden",!D)},M=Q.length>0,h=(H=n==null?void 0:n.positions)!=null&&H.length?n.positions:n!=null&&n.position?[n.position]:[],C=h.includes("executive")||W,u=h.includes("executive");p("menu-life-skill",e),p("menu-reading",t),p("menu-prayer",o),p("menu-advisor-students",M),p("menu-council",s.council_visible_to_all!=="false"||W||C),p("menu-my-courses",!u),p("menu-my-classes",!u),p("menu-dashboard",!u),E("daily-work-section",!u),E("sem-work-section",!u);const w=d==null?void 0:d.data;p("menu-terangganu",(w==null?void 0:w.is_manager)===!0||(w==null?void 0:w.teacher_participant)===!0),p("menu-regrade",((ee=b.visibility)==null?void 0:ee.teacher_menu)===!0||W);const L=Number(g==null?void 0:g.count)||0;kt(L);const j=(r==null?void 0:r.data)||[];p("menu-my-team",j.length>0);const y=oe||z.menu_sports_admin||h.includes("house_color_admin")||(n==null?void 0:n.staff_type)==="แอดมิน"||(n==null?void 0:n.position)==="admin",_=(S=i==null?void 0:i.data)==null?void 0:S.id,R=((m==null?void 0:m.data)||[]).some(O=>!_||O.event_id===_),$=Y.enabled!==!1&&Y.teacher_menu!==!1&&!!_;p("menu-sports-competition-manager",!!(y||R||$)),p("menu-sports-checkin",Y.enabled!==!1&&Y.teacher_menu!==!1);const F=y||j.some(O=>{var D;return O.role==="lead_teacher"||((D=O.permissions)==null?void 0:D.shirt_summary)===!0});p("menu-shirt-summary",!!F),p("menu-sports-fund-admin",!!y),p("menu-sports-overview-admin",!!y);const G=y||((I=f==null?void 0:f.data)==null?void 0:I.length)>0;p("menu-sports-evaluation",!!G),E("menu-awards-group",((U=x==null?void 0:x.data)==null?void 0:U.allowed)===!0);let N=!1;try{const O=((A=i==null?void 0:i.data)==null?void 0:A.id)||"00000000-0000-0000-0000-000000000001",{data:D}=await T.from("sports_shirt_vote_managers").select("id").eq("event_id",O).eq("profile_id",n==null?void 0:n.profile_id).maybeSingle();N=!!D}catch{N=!1}p("menu-shirt-vote-dashboard",!!(y||N)),be=!!(c!=null&&c.data),p("menu-qr-reissue-requests",be);const B=Y.enabled!==!1&&Y.teacher_menu!==!1;window._teacherOverviewSystems=[{key:"council",show:s.council_visible_to_all!=="false"||W||C,emoji:"🏛️",label:"สภา<br>นักเรียน",href:"council.html"},{key:"terangganu",show:(w==null?void 0:w.is_manager)===!0||(w==null?void 0:w.teacher_participant)===!0,emoji:"⚜️",label:"ค่าย<br>TERANGGANU",href:"terangganu.html"},{key:"regrade",id:"teacher-regrade-overview-tile",show:((K=b.visibility)==null?void 0:K.teacher_menu)===!0||W,emoji:"📋",label:"แก้ค้าง<br>เก่า",href:"regrade.html",badge:L},{key:"sports",show:B,emoji:"🏆",label:"กีฬาสี",nav:"sports"},{key:"certificates",show:!0,emoji:"🏅",label:"เกียรติ<br>บัตร",nav:"certificates"},{key:"advisor-students",show:M,emoji:"👥",label:"นักเรียน<br>ที่ปรึกษา",nav:"advisor-students"},{key:"my-team",show:j.length>0,emoji:"🛡️",label:"จัดการ<br>สีของฉัน",nav:"my-team-workspace"},{key:"shirt-summary",show:!!F,emoji:"📦",label:"สรุปยอด<br>เสื้อกีฬาสี",nav:"shirt-summary"},{key:"sports-fund",show:!!y,emoji:"💰",label:"บัญชีเงิน<br>กีฬาสี",nav:"sports-fund-admin"},{key:"sports-overview",show:!!y,emoji:"📊",label:"ภาพรวม<br>กีฬาสี",nav:"sports-overview-admin"},{key:"sports-competition-manager",show:!!(y||R||$),emoji:"🏟️",label:"รายการแข่งขัน<br>ของฉัน",nav:"sports-competition-manager"},{key:"sports-evaluation",show:!!G,emoji:"🧑‍⚖️",label:"ประเมิน<br>กีฬาสี",nav:"sports-evaluation"},{key:"shirt-vote",show:!!(y||N),emoji:"🗳️",label:"ผลโหวต<br>แบบเสื้อ",nav:"shirt-vote-dashboard"},{key:"qr-print",show:be,emoji:"🎫",label:"พิมพ์/คำขอ<br>QR",nav:"student-qr-print"},{key:"prayer-score",show:o,emoji:"🕌",label:"คะแนน<br>ศาสนา",nav:"prayer-score"}],_t=L}async function Gn(e){n=await se(e),Q=n?await ye(n.id).catch(()=>[]):[],await De(e),await ve(),P("profile")}async function Un(e){n=await se(e),Q=n?await ye(n.id).catch(()=>[]):[],await De(e),await ve(),P("schedule-builder")}async function Ve(e){var d;if(oe)return!0;if(!(n!=null&&n.id))return k("ไม่พบข้อมูลครู กรุณาเข้าสู่ระบบใหม่","error"),!1;const t=await V().catch(()=>null);if(!t)return k("ตรวจสอบตารางสอนไม่สำเร็จ กรุณาลองใหม่","error"),!1;const o=Number(t.academicYear??t.academic_year),a=Number(t.semester);if(!Number.isInteger(o)||![1,2].includes(a))return k("ยังระบุภาคเรียนปัจจุบันไม่ครบ จึงตรวจสอบตารางสอนไม่ได้","error"),!1;let s;try{s=await ke(n.id,o,a)}catch(r){return k("ตรวจสอบตารางสอนไม่สำเร็จ: "+X(r),"error"),!1}if(s.length>0)return!0;(d=document.getElementById("teacher-schedule-required-modal"))==null||d.remove();const l=document.createElement("div");return l.id="teacher-schedule-required-modal",l.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",l.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="schedule-required-title" class="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
    <div class="text-center">
      <div class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-3xl">🗓️</div>
      <h3 id="schedule-required-title" class="text-lg font-extrabold text-gray-800">ต้องสร้างตารางสอนก่อน</h3>
      <p class="mt-2 text-sm leading-relaxed text-gray-600">ก่อน${e} ต้องมีตารางสอนของภาค ${a}/${o} ในระบบก่อน จะกรอกเองหรือนำเข้าจาก API ที่เชื่อมต่อในอนาคตก็ได้</p>
    </div>
    <div class="mt-5 flex gap-2">
      <button type="button" data-schedule-later class="flex-1 rounded-xl border border-gray-200 px-3 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50">ไว้ก่อน</button>
      <button type="button" data-open-schedule class="flex-1 rounded-xl bg-emerald-600 px-3 py-3 text-sm font-bold text-white hover:bg-emerald-700">ไปสร้างตารางสอน</button>
    </div>
  </section>`,document.body.appendChild(l),l.querySelector("[data-schedule-later]").addEventListener("click",()=>l.remove()),l.querySelector("[data-open-schedule]").addEventListener("click",()=>{l.remove(),P("schedule")}),l.addEventListener("click",r=>{r.target===l&&l.remove()}),!1}window._openCourseForm=async()=>{if(!await Ve("เปิดคอร์สวิชา"))return;const{renderCourseForm:e}=await v(async()=>{const{renderCourseForm:t}=await import("./teacher-views-BeOZLsOo.js");return{renderCourseForm:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));e(n,async(t,o=[])=>{await at(t,o)})};window._openScheduleCourseReview=async()=>{if(!await Ve("ตรวจสอบคอร์สจากตารางสอน"))return;const{openScheduleCourseReview:e}=await v(async()=>{const{openScheduleCourseReview:t}=await import("./teacher-views-BeOZLsOo.js");return{openScheduleCourseReview:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));e(n)};window._editCourse=async e=>{const o=(n?await Ee(n.id).catch(()=>[]):await _e().catch(()=>[])).find(s=>s.id===e);if(!o){k("ไม่พบข้อมูลคอร์ส","error");return}const{renderCourseForm:a}=await v(async()=>{const{renderCourseForm:s}=await import("./teacher-views-BeOZLsOo.js");return{renderCourseForm:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));a(n,async(s,l=[])=>{const{catalog_id:d,...r}=s;await Bt(e,r,l)},o)};window._copyCourse=async e=>{const o=(n?await Ee(n.id).catch(()=>[]):await _e().catch(()=>[])).find(s=>s.id===e);if(!o){k("ไม่พบข้อมูลคอร์สต้นฉบับ","error");return}const{renderCourseForm:a}=await v(async()=>{const{renderCourseForm:s}=await import("./teacher-views-BeOZLsOo.js");return{renderCourseForm:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));a(n,async(s,l=[])=>{const d=await at(s,l);try{const r=await Mt(e);if(r){const{subject_id:i,updated_at:m,updated_by:c,...b}=r;await Dt(d.id,b)}}catch(r){k("คัดลอกคำอธิบายรายวิชาไม่สำเร็จ (สร้างคอร์สแล้ว แก้ไขคำอธิบายเพิ่มเองได้): "+X(r),"warning")}},o,{cloneFrom:e})};window._deleteCourse=(e,t)=>{var a;(a=document.getElementById("del-course-modal"))==null||a.remove();const o=document.createElement("div");o.id="del-course-modal",o.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-fade">
      <div class="text-center mb-5">
        <div class="text-4xl mb-3">🗑️</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ลบคอร์สวิชา</h3>
        <p class="text-sm text-gray-500">"${t}"</p>
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
    </div>`,document.body.appendChild(o),o.querySelector("#del-course-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#del-course-confirm").addEventListener("click",async()=>{const s=o.querySelector("#del-course-confirm");s.disabled=!0,s.textContent="กำลังลบ...";try{await Nt(e),o.remove(),k(`ลบ "${t}" แล้ว`,"success"),P("my-courses")}catch(l){o.remove(),k("ลบไม่สำเร็จ: "+X(l),"error")}})};window._openRegisterClass=async e=>{if(!await Ve("เปิดห้องเรียน"))return;const o=(n?await Ee(n.id).catch(()=>[]):await _e().catch(()=>[])).find(f=>f.id===e);if(!o){k("ไม่พบข้อมูลคอร์ส","error");return}const a=n==null?void 0:n.teachers_quota,[s,l,d]=await Promise.all([ue((n==null?void 0:n.id)??null).catch(()=>[]),V().catch(()=>({})),Ot((n==null?void 0:n.id)??null).catch(()=>({hasSemester:!1,paidRoomCount:0}))]),r=parseInt(l.freeClassQuota??2),i=l.unlimitedTeacherClassCreation===!0||String(l.unlimitedTeacherClassCreation).toLowerCase()==="true",m=(a==null?void 0:a.is_paid)&&!(a!=null&&a.package_type)&&!d.hasSemester&&!d.paidRoomCount,c=d.hasSemester||(a==null?void 0:a.package_type)==="semester"||m,b=i||c?1/0:r+d.paidRoomCount;if(s.length>=b){me(s.length,o,l);return}const{renderClassForm:g}=await v(async()=>{const{renderClassForm:f}=await import("./teacher-views-BeOZLsOo.js");return{renderClassForm:f}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));g(n,o)};window._openCourseDocPage2=async e=>{const o=(n?await Ee(n.id).catch(()=>[]):await _e().catch(()=>[])).find(s=>s.id===e);if(!o){k("ไม่พบข้อมูลคอร์ส","error");return}const{openCourseDocPage2Modal:a}=await v(async()=>{const{openCourseDocPage2Modal:s}=await import("./teacher-views-BeOZLsOo.js");return{openCourseDocPage2Modal:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));await a(n,o)};function me(e,t,o={}){var s;if(o.quotaMode==="school_sponsored"){Et(e,t,o);return}(s=document.getElementById("quota-popup"))==null||s.remove();const a=document.createElement("div");a.id="quota-popup",a.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",a.innerHTML=`
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
        ${(()=>{const l=parseInt(o.freeClassQuota??2),d=parseInt(o.pricePerClass??49),r=parseInt(o.priceSemester??299),i=o.pkgPerClassDesc??"เพิ่มได้ 1 ห้องเรียนต่อการชำระเงิน",m=o.pkgSemesterDesc??"ทุกวิชา ทุกห้อง ไม่จำกัด",c=l+1;return`
        <div class="bg-gray-50 rounded-xl p-3.5 text-sm">
          <p class="text-gray-600">คุณสร้างห้องเรียนไปแล้ว
            <span class="font-bold text-indigo-600">${e} ห้อง</span>
            จาก <span class="font-bold">${l} ห้องฟรี</span>
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
                <p class="text-2xl font-extrabold text-indigo-600">${d}<span class="text-sm font-normal text-gray-400"> บ.</span></p>
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
    </div>`,document.body.appendChild(a),a.querySelector("#qp-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#qp-copy-file").addEventListener("click",()=>{a.remove(),wt()}),a.querySelector("#qp-next").addEventListener("click",()=>{var d;const l=(d=a.querySelector('input[name="pkg"]:checked'))==null?void 0:d.value;if(!l){alert("กรุณาเลือกแพ็กเกจก่อนครับ");return}a.remove(),l==="per_subject"?$t(t,o):It(l,t,1,o)})}function Et(e,t,o={}){var s;(s=document.getElementById("school-sponsored-popup"))==null||s.remove();const a=document.createElement("div");a.id="school-sponsored-popup",a.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",a.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-4 pb-4 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">🎉</div>
          <div>
            <h3 class="font-bold text-gray-800 leading-tight">${o.sponsoredHeaderTitle||"ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ"}</h3>
            <p class="text-xs text-gray-400">ระบบ ปพ.5 ออนไลน์</p>
          </div>
        </div>
      </div>
      <div class="px-5 py-4 space-y-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
          <p class="text-sm font-semibold text-emerald-800">${o.sponsoredBoxTitle||"🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว"}</p>
          <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
            ${o.sponsoredBoxBody||"ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา — เป็นของขวัญจากโรงเรียนให้คุณครูทุกท่านครับ"}
          </p>
        </div>

        <button id="sp-donate"
          class="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-bold text-sm
                 shadow-lg shadow-amber-200/60 transition-all flex items-center justify-center gap-2">
          ${o.sponsoredDonateBtn||"☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว"}
          <span class="font-normal text-xs opacity-90">${o.sponsoredDonateSub||"ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง"}</span>
        </button>

        <button id="sp-access"
          class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm
                 shadow-lg shadow-emerald-200/60 transition-all flex items-center justify-center gap-2">
          ${o.sponsoredAccessBtn||"✨ รับของขวัญจากโรงเรียนเลย"}
        </button>

        <p class="text-center text-[11px] text-gray-400 pb-1">${o.sponsoredFooter||"ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏"}</p>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#sp-donate").addEventListener("click",()=>{a.remove(),re(t,o)}),a.querySelector("#sp-access").addEventListener("click",async()=>{const l=a.querySelector("#sp-access");l.disabled=!0,l.textContent="⏳ กำลังตรวจสอบ...";try{const r=(await Vt(n==null?void 0:n.id).catch(()=>[])).find(i=>i.package_type==="school_sponsored"&&(i.status==="pending"||i.status==="approved"));if(r){k(r.status==="approved"?"คุณได้รับสิทธิ์แล้วครับ ✅":"ส่งคำขอไปแล้ว รอแอดมินอนุมัติครับ ⏳","info"),a.remove();return}await Re({teacher_id:n==null?void 0:n.id,package_type:"school_sponsored",amount:0,status:"pending"}),k("ส่งคำขอแล้ว ✅ แอดมินจะอนุมัติให้เร็วๆ นี้ครับ","success"),a.remove()}catch(d){k("เกิดข้อผิดพลาด: "+X(d),"error"),l.disabled=!1,l.textContent="🎓 รับสิทธิ์ไม่จำกัดเลย"}})}async function re(e,t={}){var N,B,H,ee;(N=document.getElementById("donate-modal"))==null||N.remove();const o=Z(t.donationMinAmount,49),a=Z(t.donationAmountStep,50),s=Se(t);let l=0,d=!1,r=null,i=!1,m=null;if(n!=null&&n.id)try{const[S,I]=await Promise.all([it(n.id),Yt(n.id).catch(()=>null)]);if(r=I,i=(I==null?void 0:I.status)==="available",S.some(A=>A.package_type==="donation"&&A.status==="pending")){k("คุณครูส่งหลักฐานรอการอนุมัติอยู่แล้วครับ — กรุณารอแอดมินตรวจสอบก่อนนะครับ","warning");return}if(l=S.filter(A=>A.package_type==="donation"&&A.status==="approved").reduce((A,K)=>A+(K.amount??0),0),l>0){const A=((B=s[s.length-1])==null?void 0:B.amount)??1/0;if(l>=A){k("คุณครูสนับสนุนระดับสูงสุดแล้วครับ ขอบคุณมากๆ นะครับ 🙏👑","success");return}d=!0,m=((H=s.find(K=>K.amount>l))==null?void 0:H.amount)??null}}catch{}const c=document.createElement("div");c.id="donate-modal",c.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4";const b=t.paymentPromptpay??"",g=Math.min(Z(t.donationQuickCount,4),8),f=Oe(t),x=s[0],p=i?s[Math.max(0,Math.min(s.length-1,(r.source_tier||1)-1))]:null,E=i?(p==null?void 0:p.amount)??(x==null?void 0:x.amount)??o:d?Math.max(o,(m??o)-l):o,M=Array.from({length:g},(S,I)=>E+I*a),h=S=>f.map(I=>S>=(I.minTier??1)?`<div class="flex gap-2 text-amber-900"><span>${q(I.icon)}</span><span>${q(I.text)}</span></div>`:`<div class="flex gap-2 text-gray-300 opacity-70"><span>🔒</span><span class="line-through">${q(I.text)}<span class="ml-1 text-[9px] no-underline not-italic text-gray-400">ระดับ ${I.minTier}+</span></span></div>`).join("");c.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]">
      <div class="flex justify-center pt-3 pb-1 sm:hidden">
        <div class="w-10 h-1 rounded-full bg-gray-200"></div>
      </div>
      <div class="px-5 pt-4 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="donate-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">${i?"🎁 สิทธิ์ส่วนลดผู้สนับสนุนเดิม":d?"⭐ อัปเกรดระดับผู้สนับสนุน":"☕ สนับสนุนผู้พัฒนา"}</h3>
          <p class="text-xs text-gray-400">${i?"เลือกระดับใหม่ ยิ่งสูงยิ่งได้ส่วนลดมากครับ 🙏":d?"สนับสนุนเพิ่มเพื่ออัปเกรดระดับครับ 🙏":"ขอบคุณมากเลยครับ 🙏"}</p>
        </div>
      </div>
      <div class="px-5 py-4 space-y-4 overflow-auto flex-1">
        <p class="text-sm text-gray-600 text-center leading-relaxed">
          ${i?`คุณครูมีสิทธิ์ส่วนลดจากการสนับสนุนภาคเรียนที่ ${r.source_semester}/${r.source_academic_year}<br/><span class="text-xs text-gray-400">ยอดสะสมเดิม ${Number(r.source_total_amount||0).toLocaleString()} บาท — เลือกระดับใหม่เพื่อคำนวณส่วนลด</span>`:d?`คุณครูสนับสนุนสะสมแล้ว ${l} บาท${m?` — อีก ${Math.max(0,m-l)} บาทจะครบ ${m} บาทสำหรับระดับถัดไป`:""}<br/><span class="text-xs text-gray-400">ยอดที่สนับสนุนเพิ่มจะถูกรวมกับยอดเดิมโดยอัตโนมัติครับ</span>`:`สนับสนุนขั้นต่ำ ${o} บาท เพื่อรับสิทธิ์ผู้สนับสนุน<br/><span class="text-xs text-gray-400">ระบบหลักใช้งานได้ไม่จำกัดอยู่แล้ว สิทธิ์นี้เป็นฟีเจอร์พิเศษเพิ่มเติมครับ</span>`}
        </p>
        <!-- Feature list: อัปเดตตาม amount -->
        <div class="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
          <p class="text-xs font-bold text-amber-800 mb-2">ฟีเจอร์พิเศษสำหรับคุณครูที่โดเนท</p>
          <div id="donate-feature-list" class="grid grid-cols-1 gap-1.5 text-[11px] leading-snug">
            ${h(1)}
          </div>
        </div>
        <!-- Sticker preview -->
        <div id="donate-sticker-preview">
          ${Ze(x)}
        </div>
        ${i?`
        <!-- Renewal tier selector -->
        <div class="space-y-2">
          <label for="donate-renewal-tier" class="text-xs font-bold text-amber-800">เลือกระดับการสนับสนุนรอบนี้</label>
          <select id="donate-renewal-tier" class="w-full bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 text-lg font-extrabold text-amber-700 outline-none">
            ${s.map((S,I)=>`<option value="${S.amount}" ${S.amount===E?"selected":""}>ระดับ ${I+1} — ${S.amount.toLocaleString()} บาท — ส่วนลด ${Math.min(25,(I+1)*5)}%</option>`).join("")}
          </select>
          <div id="donate-renewal-quote" class="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800"></div>
        </div>`:`
        <!-- Amount input -->
        <div class="flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 focus-within:border-amber-400 transition">
          <span class="text-2xl font-bold text-amber-500">฿</span>
          <input id="donate-amount" type="number" min="${o}" step="${a}" value="${E}" placeholder="${E}"
            class="flex-1 bg-transparent text-3xl font-extrabold text-amber-700 outline-none w-full" />
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${M.map(S=>`<button class="donate-quick flex-1 py-2 rounded-xl border-2 border-amber-200 text-amber-700 text-sm font-bold hover:bg-amber-50 transition">${S}</button>`).join("")}
        </div>
        <p class="text-[11px] text-gray-400 text-center leading-relaxed">
          ยอดที่สูงขึ้นจะปลดล็อกฟีเจอร์เพิ่มเติม และอัปเกรดระดับตราผู้สนับสนุนครับ
        </p>`}
        <div id="donate-qr-area" class="hidden flex-col items-center gap-3 py-2">
          <img id="donate-qr-img" class="w-56 h-56 rounded-2xl shadow-md" />
          <p id="donate-qr-total" class="text-sm font-extrabold text-emerald-700"></p>
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
    </div>`,document.body.appendChild(c);const C=c.querySelector("#donate-amount"),u=c.querySelector("#donate-renewal-tier"),w=c.querySelector("#donate-sticker-preview"),L=c.querySelector("#donate-feature-list"),j=c.querySelector("#donate-renewal-quote"),y=()=>i?parseInt((u==null?void 0:u.value)||0):parseFloat(C==null?void 0:C.value)||0,_=S=>[...s].reverse().find(I=>S>=I.amount)||s[0],R=()=>{const S=y(),I=_(S),U=s.indexOf(I)+1;if(w&&(w.innerHTML=Ze(I)),L&&(L.innerHTML=h(U)),i&&j){const A=Math.min(25,Math.max(0,U*5)),K=Math.round(S*(100-A)/100);j.innerHTML=`ยอดปกติ <b>${S.toLocaleString()} บาท</b> · ส่วนลด <b>${A}%</b><br/>ยอดชำระจริง <b class="text-lg">${K.toLocaleString()} บาท</b>`}};c.querySelectorAll(".donate-quick").forEach(S=>{S.addEventListener("click",()=>{C&&(C.value=S.textContent.trim()),R()})}),C==null||C.addEventListener("input",R),u==null||u.addEventListener("change",R),R(),c.querySelector("#donate-back").addEventListener("click",()=>{c.remove(),Et(0,e,t)}),c.querySelector("#donate-gen-qr").addEventListener("click",async()=>{const S=y();if(!S||!i&&S<o){k(`กรุณาระบุยอดโดเนทขั้นต่ำ ${o} บาทครับ`,"error");return}if(!b){k("แอดมินยังไม่ได้ตั้งค่าเบอร์ PromptPay","error");return}try{let I=S;if(i){const A=await ze(S);if(I=Number(A==null?void 0:A.amount),!Number.isInteger(I)||I<=0)throw new Error("ยอดส่วนลดไม่ถูกต้อง")}const U=await qe(b,I);c.dataset.renewalBaseAmount=String(S),c.dataset.payableAmount=String(I),c.querySelector("#donate-qr-img").src=U,c.querySelector("#donate-qr-total").textContent=`ยอดที่ต้องชำระ ${I.toLocaleString()} บาท`,c.querySelector("#donate-qr-area").classList.remove("hidden"),c.querySelector("#donate-qr-area").classList.add("flex"),c.querySelector("#donate-slip-area").classList.remove("hidden"),c.querySelector("#donate-confirm").classList.remove("hidden"),c.querySelector("#donate-gen-qr").classList.add("hidden")}catch(I){k("สร้าง QR ไม่สำเร็จ: "+X(I),"error")}});let $=null;const F=c.querySelector("#donate-slip-file"),G=c.querySelector("#donate-slip-preview");F==null||F.addEventListener("change",S=>{$=S.target.files[0],$&&(c.querySelector("#donate-slip-name").textContent=$.name,$.type.startsWith("image/")?(c.querySelector("#donate-slip-img").src=URL.createObjectURL($),c.querySelector("#donate-slip-img").classList.remove("hidden")):c.querySelector("#donate-slip-img").classList.add("hidden"),G.classList.remove("hidden"),c.querySelector("#donate-slip-label").classList.add("hidden"),c.querySelector("#donate-slip-err").classList.add("hidden"))}),(ee=c.querySelector("#donate-slip-remove"))==null||ee.addEventListener("click",()=>{$=null,F.value="",G.classList.add("hidden"),c.querySelector("#donate-slip-label").classList.remove("hidden")}),c.querySelector("#donate-confirm").addEventListener("click",async()=>{const S=y(),I=Number(c.dataset.payableAmount||S);if(!$){c.querySelector("#donate-slip-err").classList.remove("hidden"),c.querySelector("#donate-slip-area").scrollIntoView({behavior:"smooth",block:"center"});return}const U=c.querySelector("#donate-confirm");U.disabled=!0,U.textContent="⏳ กำลังส่งข้อมูล...";try{let A;if(i){const D=await ze(S);if(Number(D==null?void 0:D.amount)!==I){const J=Number(D==null?void 0:D.amount),Le=await qe(b,J);throw c.querySelector("#donate-qr-img").src=Le,c.querySelector("#donate-qr-total").textContent=`ยอดที่ต้องชำระ ${J.toLocaleString()} บาท`,c.dataset.payableAmount=String(J),new Error("ระบบอัปเดตยอดส่วนลดล่าสุดแล้ว กรุณาตรวจสอบ QR แล้วกดส่งอีกครั้ง")}A=await Ht(S)}else A=await Re({teacher_id:n==null?void 0:n.id,package_type:"donation",amount:I,status:"pending"});const K=Number((A==null?void 0:A.id)??(A==null?void 0:A.request_id)),O=await st($,K);await T.from("payment_requests").update({slip_url:O}).eq("id",K),k("ส่งหลักฐานสำเร็จ! 🙏 แอดมินจะตรวจสอบและส่งการ์ดขอบคุณให้ครับ","success"),c.remove(),Lt(!0)}catch(A){k("เกิดข้อผิดพลาด: "+X(A),"error"),U.disabled=!1,U.textContent="✅ ส่งหลักฐานการโอน"}})}window._showThankYouCardAdmin=(e,t)=>St(e,t);async function St(e,t=null){var g;(g=document.getElementById("thankyou-card-modal"))==null||g.remove();const o=t??await V().catch(()=>({}));Z(o.donationMinAmount,99),Z(o.donationAmountStep,50);const a=Oe(o),s=Se(o),l=e.amount??0,d=Number.parseInt(String(e.donation_tier??""),10),r=Number.isInteger(d)&&d>=1&&d<=s.length?s[d-1]:[...s].reverse().find(f=>l>=f.amount)??s[0],i=Number.isInteger(d)&&d>=1&&d<=s.length?d:ht(o,s,l),m=(o.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

การสนับสนุนของคุณครูมีค่ามากกว่าจำนวนเงินครับ ☕
เพราะมันคือกำลังใจสำคัญที่ทำให้ผมรู้สึกว่า
ระบบเล็ก ๆ นี้ได้ช่วยลดภาระงานของครูได้จริง 🌷

ขอบคุณที่ทำให้ผมมีกำลังใจพัฒนาระบบนี้ต่อไปเพื่อครูครับ 🙏✨

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`,c=(()=>{if(!r)return'<div class="text-5xl mb-3">☕</div>';const f=String(r.sticker??"");return/^https?:\/\//.test(f)?`<div class="w-20 h-20 mx-auto mb-3 flex items-center justify-center drop-shadow-lg">
        <img src="${q(f)}" class="w-full h-full object-contain" /></div>`:`<div class="text-5xl mb-3">${q(f||"☕")}</div>`})(),b=document.createElement("div");b.id="thankyou-card-modal",b.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",b.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Header — สีตาม tier.color -->
      <div class="px-6 py-6 text-center flex-shrink-0" style="${(()=>{const f=(r==null?void 0:r.color)||"#f59e0b",x=parseInt(f.slice(1,3),16),p=parseInt(f.slice(3,5),16),E=parseInt(f.slice(5,7),16);return`background:linear-gradient(135deg,rgba(${x},${p},${E},0.85),rgba(${x},${p},${E},1))`})()}">
        ${c}
        ${r?`<div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">${q(r.title)}</div>`:""}
        <h2 class="text-white font-bold text-xl">ขอบคุณครับ! 🙏</h2>
        <p class="text-white/80 text-sm mt-1">${l?`โดเนท ${l.toLocaleString()} บาท`:"การสนับสนุนของคุณครูมีความหมายมากครับ"}</p>
      </div>
      <!-- Body -->
      <div class="px-5 py-4 overflow-y-auto flex-1 space-y-4">
        <!-- ข้อความขอบคุณ -->
        ${e.admin_note||m?`
        <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
          ${q(e.admin_note||m)}
        </div>`:""}
        <!-- ฟีเจอร์พิเศษ: unlocked / locked -->
        ${a.length?`
        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-1.5">
            ${a.map(f=>i>=(f.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900">
                     <span class="flex-shrink-0">${q(f.icon)}</span>
                     <span>${q(f.text)}</span>
                   </div>`:`<div class="flex items-start gap-2 text-sm text-gray-400 opacity-60">
                     <span class="flex-shrink-0">🔒</span>
                     <span class="line-through">${q(f.text)}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap">ระดับ ${f.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${i<s.length?`
          <p class="text-[10px] text-emerald-700 mt-3 pt-2 border-t border-emerald-200">
            🔓 อัปเกรดเพื่อปลดล็อกฟีเจอร์ที่เหลือได้เลยครับ
          </p>`:""}
        </div>`:""}
        <!-- คำอธิบาย tier -->
        ${r!=null&&r.note?`
        <p class="text-xs text-center text-gray-400 italic">"${q(r.note)}"</p>`:""}
      </div>
      <!-- Footer -->
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="tc-close"
          class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${(r==null?void 0:r.color)||"#f59e0b"}">
          รับทราบและเริ่มใช้งาน 🚀
        </button>
      </div>
    </div>`,document.body.appendChild(b),b.querySelector("#tc-close").addEventListener("click",()=>{var f;localStorage.setItem(`pp5_thankyou_seen_${e.id}`,"1"),b.remove(),(f=document.getElementById("donate-float-btn"))==null||f.remove(),Ae(e)})}async function Ae(e=null){if(document.getElementById("sidebar-donate-item"))return;const t=document.querySelector("#sidebar nav");if(!t)return;let o="<span>☕</span>",a="สนับสนุนผู้พัฒนาอีกครั้ง";if(e){const l=await V().catch(()=>({}));Z(l.donationMinAmount,99),Z(l.donationAmountStep,50);const d=Se(l),r=e.amount??0,i=Number.parseInt(String(e.donation_tier??""),10),m=Number.isInteger(i)&&i>=1&&i<=d.length?d[i-1]:[...d].reverse().find(c=>r>=c.amount)??d[0];if(m){const c=String(m.sticker??"");o=/^https?:\/\//.test(c)?`<img src="${q(c)}" class="w-6 h-6 object-contain rounded" title="${q(m.title)}" />`:`<span title="${q(m.title)}">${q(c||"🏅")}</span>`,a=`${m.title} — คลิกเพื่อโดเนทอีกครั้ง`}}const s=document.createElement("a");s.id="sidebar-donate-item",s.href="#",s.title=a,s.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-emerald-400/60 hover:text-amber-400 hover:bg-emerald-800/40 opacity-60 hover:opacity-100",s.innerHTML=`${o} <span>${e?"ผู้สนับสนุนระบบ":"สนับสนุนผู้พัฒนา"}</span>`,s.addEventListener("click",async l=>{l.preventDefault();const d=await V().catch(()=>({}));re(null,d)}),t.appendChild(s)}function Qn(){var t;return((t=n==null?void 0:n.positions)!=null&&t.length?n.positions:n!=null&&n.position?[n.position]:[]).includes("executive")}function he(e){const t=e==="overview"&&Qn();["donate-float-btn","feedback-fab","donor-chat-fab"].forEach(o=>{const a=document.getElementById(o);a&&(a.style.display=t?"none":"")}),Wn(e)}function Yn(){if(document.getElementById("home-fab"))return;const e=document.createElement("button");e.id="home-fab",e.title="กลับหน้าภาพรวม",e.className="hidden fixed z-40 items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105",e.style.cssText="position:fixed;left:max(0.75rem, env(safe-area-inset-left));bottom:max(0.75rem, env(safe-area-inset-bottom));right:auto;top:auto;",e.innerHTML='<span class="text-lg">🏠</span><span>หน้าภาพรวม</span>',e.addEventListener("click",()=>P("overview")),document.body.appendChild(e)}function Wn(e){const t=document.getElementById("home-fab");if(!t)return;const o=e!=="overview";t.classList.toggle("hidden",!o),t.classList.toggle("flex",o)}function Lt(e=!1){var o;(o=document.getElementById("donate-float-btn"))==null||o.remove();const t=document.createElement("button");t.id="donate-float-btn",t.title=e?"รอแอดมินรับทราบการโดเนทของคุณ":"สนับสนุนผู้พัฒนา",t.className="fixed z-[40] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-white shadow-lg shadow-amber-300/40 flex items-center justify-center overflow-hidden transition-transform hover:scale-105",t.style.cssText="position:fixed;right:max(0.75rem, env(safe-area-inset-right));bottom:max(0.75rem, env(safe-area-inset-bottom));top:auto;left:auto;",t.innerHTML=e?'<span class="text-xl sm:text-2xl">☕</span>':`<span class="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full">
        <span class="absolute inset-1 rounded-full bg-amber-300/40"></span>
        <span class="relative text-xl sm:text-2xl">☕</span>
       </span>`,t.addEventListener("click",async()=>{const a=await V().catch(()=>({}));re(null,a)}),document.body.appendChild(t),he(ce)}function Kn(e,t,o){var g;(g=document.getElementById("promo-popup"))==null||g.remove();const a="pp5_promo_seen",s=Z(e.donationMinAmount,49);let l=0;const d=f=>{const x=f+1;return o.map(p=>x>=(p.minTier??1)?`<div class="flex items-center gap-2.5 text-sm text-gray-800 py-1">
             <span class="text-base flex-shrink-0">${q(p.icon)}</span>
             <span>${q(p.text)}</span>
           </div>`:`<div class="flex items-center gap-2.5 text-sm text-gray-300 py-1">
             <span class="text-base flex-shrink-0">🔒</span>
             <span class="line-through">${q(p.text)}</span>
             <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${p.minTier}+</span>
           </div>`).join("")},r=document.createElement("div");r.id="promo-popup",r.className="fixed inset-0 z-[85] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4";const i=f=>{var h,C;const x=t[f],p=(x==null?void 0:x.color)||"#f59e0b",E=String((x==null?void 0:x.sticker)??""),M=/^https?:\/\//.test(E)?`<img src="${q(E)}" class="w-16 h-16 object-contain drop-shadow-md" />`:`<span class="text-5xl">${q(E||"🏅")}</span>`;return`
    <div class="bg-white w-full sm:max-w-sm rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Sticker row -->
      <div class="pt-5 px-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">เลือกระดับที่สนใจ</p>
        <div class="flex justify-center gap-2">
          ${t.map((u,w)=>{const L=String(u.sticker??""),j=u.color||"#f59e0b",y=w===f,_=/^https?:\/\//.test(L)?`<img src="${q(L)}" class="w-10 h-10 object-contain" />`:`<span class="text-3xl">${q(L)}</span>`;return`<button class="promo-tier-btn flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all"
              data-idx="${w}"
              style="${y?`box-shadow:0 0 0 3px ${j};`:"box-shadow:0 0 0 2px #e5e7eb;"}">
              ${_}
            </button>`}).join("")}
        </div>
      </div>
      <!-- Tier info + features -->
      <div class="px-5 py-4 overflow-y-auto flex-1">
        <div class="flex items-center gap-2 mb-1">
          ${M}
          <div>
            <p class="font-bold text-gray-800 text-base">${q((x==null?void 0:x.title)??"")}</p>
            <p class="text-xs" style="color:${p}">${q((x==null?void 0:x.note)??"")}</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-2 mb-3">ยอดสนับสนุนขั้นต่ำ <span class="font-bold text-gray-700">${((h=x==null?void 0:x.amount)==null?void 0:h.toLocaleString())??s} บาท</span></p>
        <div class="divide-y divide-gray-50">
          ${d(f)}
        </div>
      </div>
      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex-shrink-0 space-y-3">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="promo-no-show" class="w-4 h-4 rounded accent-gray-400" />
          <span class="text-xs text-gray-400">ไม่ต้องการให้แสดงหน้านี้อีก</span>
        </label>
        <button id="promo-support" class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${p}">
          สนับสนุนในระดับนี้ (${((C=x==null?void 0:x.amount)==null?void 0:C.toLocaleString())??s} บาท+)
        </button>
        <button id="promo-later" class="w-full text-sm text-gray-400 hover:text-gray-600 py-1 transition">
          ภายหลัง
        </button>
      </div>
    </div>`};r.innerHTML=i(l),document.body.appendChild(r);const m=f=>{l=f,r.querySelector(".bg-white").outerHTML=i(f),b()},c=()=>{var f;(f=r.querySelector("#promo-no-show"))!=null&&f.checked&&localStorage.setItem(a,String(Date.now())),r.remove()},b=()=>{var f,x;r.querySelectorAll(".promo-tier-btn").forEach(p=>{p.addEventListener("click",()=>m(parseInt(p.dataset.idx)))}),(f=r.querySelector("#promo-support"))==null||f.addEventListener("click",()=>{c(),re(null,e)}),(x=r.querySelector("#promo-later"))==null||x.addEventListener("click",c),r.addEventListener("click",p=>{p.target===r&&c()})};b()}function Jn(e,t,o){if(document.getElementById("sidebar-upgrade-item"))return;const a=document.querySelector("#sidebar nav");if(!a)return;const s=t[o-1],l=t[o],d=String((s==null?void 0:s.sticker)??""),r=/^https?:\/\//.test(d)?`<img src="${q(d)}" class="w-5 h-5 object-contain flex-shrink-0" />`:`<span class="flex-shrink-0">${q(d||"🏅")}</span>`,i=document.createElement("a");i.id="sidebar-upgrade-item",i.href="#",i.className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition text-amber-400/70 hover:text-amber-300 hover:bg-emerald-800/40 opacity-70 hover:opacity-100",i.innerHTML=`${r} <span>อัปเกรดระดับ</span>`,i.title=l?`อัปเกรดเป็น ${l.title}`:"สนับสนุนเพิ่มเติม",i.addEventListener("click",async m=>{m.preventDefault(),re(null,e)}),a.appendChild(i)}async function Zn(e){var t;try{const[o,a]=await Promise.all([it(e),V().catch(()=>({}))]);if((a.quotaMode??"payment")!=="school_sponsored")return;const s=Z(a.donationMinAmount,49),l=Z(a.donationAmountStep,50),d=Se(a,s,l),r=Oe(a),i=d.length,m=o.find(g=>g.package_type==="donation"&&g.status==="approved"),c=o.some(g=>g.package_type==="donation"&&g.status==="pending"),b=o.filter(g=>g.package_type==="donation"&&g.status==="approved").reduce((g,f)=>g+(f.amount??0),0);if(window._pp5SystemCfg=a,m){(t=document.getElementById("donate-float-btn"))==null||t.remove(),!localStorage.getItem(`pp5_thankyou_seen_${m.id}`)&&m.admin_note&&St(m);const f=Math.max(0,...o.filter(p=>p.package_type==="donation"&&p.status==="approved").map(p=>Number.parseInt(String(p.donation_tier??""),10)).filter(p=>Number.isInteger(p)&&p>=1&&p<=d.length)),x=Math.max(ht(a,d,b),f);window._pp5DonorTierIndex=x,x>=i?Ae(m):(Ae(m),Jn(a,d,x))}else if(Lt(c),!c&&a.donationPromoEnabled!=="false"){const f=localStorage.getItem("pp5_promo_seen");(!f||Date.now()-parseInt(f)>14*24*60*60*1e3)&&setTimeout(()=>Kn(a,d,r),1500)}}catch{}}function $t(e,t={}){var i;(i=document.getElementById("room-count-page"))==null||i.remove();const o=parseInt(t.pricePerClass??49),a=document.createElement("div");a.id="room-count-page",a.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",a.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="rc-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">แพ็กเกจรายห้อง</h3>
          <p class="text-xs text-gray-400">${o} บาท / ห้อง / เทอม</p>
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
          <p id="rc-total" class="text-3xl font-extrabold text-indigo-600">${o} <span class="text-sm font-normal text-gray-400">บาท</span></p>
          <p class="text-xs text-gray-400 mt-1">(${o} บ. × 1 ห้อง)</p>
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
    </div>`,document.body.appendChild(a);let s=1;const l=a.querySelector("#rc-count"),d=a.querySelector("#rc-total"),r=()=>{l.textContent=s;const m=o*s;d.innerHTML=`${m.toLocaleString()} <span class="text-sm font-normal text-gray-400">บาท</span>`,d.nextElementSibling.textContent=`(${o} บ. × ${s} ห้อง)`,a.querySelector("#rc-minus").disabled=s<=1};a.querySelector("#rc-minus").addEventListener("click",()=>{s>1&&(s--,r())}),a.querySelector("#rc-plus").addEventListener("click",()=>{s++,r()}),a.querySelector("#rc-back").addEventListener("click",()=>{a.remove(),me(0,e,t)}),a.querySelector("#rc-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#rc-next").addEventListener("click",()=>{a.remove(),It("per_subject",e,s,t)})}async function It(e,t,o=1,a=null){var M;(M=document.getElementById("payment-page"))==null||M.remove();const s=a??await V().catch(()=>({})),l=parseInt(s.pricePerClass??49),d=parseInt(s.priceSemester??299),r=(s.paymentPromptpay??"0825424340").replace(/\D/g,""),i=e==="semester"?d:l*o,m=e==="semester"?"เหมาทั้งเทอม":`รายห้อง × ${o} ห้อง`,c=e==="semester"?"ทุกวิชา ทุกห้อง ตลอดเทอม":`${l} บ. × ${o} ห้อง = ${i.toLocaleString()} บ.`,b=document.createElement("div");b.id="payment-page",b.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",b.innerHTML=`
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
          ${s.paymentBankName?`
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ธนาคาร</span>
            <span class="text-sm font-medium text-gray-700">${s.paymentBankName}</span>
          </div>`:""}
          ${s.paymentAccountNo?`
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">เลขบัญชี</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1.5"
              data-copy="${s.paymentAccountNo}">
              ${s.paymentAccountNo} <span class="text-[10px] text-gray-400">คัดลอก</span>
            </button>
          </div>`:""}
          ${s.paymentAccountName?`
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ชื่อบัญชี</span>
            <span class="text-sm font-medium text-gray-700">${s.paymentAccountName}</span>
          </div>`:""}
          ${s.paymentNote?`
          <p class="text-[11px] text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mt-1">${s.paymentNote}</p>`:""}
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
    </div>`,document.body.appendChild(b),qe(r,i).then(h=>{const C=b.querySelector("#pp-qr-wrap");C&&(C.innerHTML=`
      <img src="${h}" class="w-[220px] h-[220px] rounded-xl border border-gray-100 shadow-sm mx-auto" />
      <p class="text-[10px] text-gray-400">QR สำหรับ ${i.toLocaleString()} บาทเท่านั้น</p>`)}).catch(()=>{if(s.paymentQrUrl){const h=b.querySelector("#pp-qr-wrap");h&&(h.innerHTML=`<img src="${s.paymentQrUrl}" class="mx-auto h-[220px] object-contain rounded-xl border border-gray-100 shadow-sm" />`)}}),b.querySelector("#pp-back").addEventListener("click",()=>{var h;b.remove(),e==="per_subject"?$t(t,s):me(((h=n==null?void 0:n.teachers_quota)==null?void 0:h.total_classes_created)??0,t,s)}),b.querySelectorAll(".copy-btn").forEach(h=>{h.addEventListener("click",()=>{navigator.clipboard.writeText(h.dataset.copy).catch(()=>{}),h.querySelector("span").textContent="✓ คัดลอกแล้ว",setTimeout(()=>h.querySelector("span").textContent="คัดลอก",2e3)})});let g=null;const f=b.querySelector("#slip-file"),x=b.querySelector("#slip-preview"),p=b.querySelector("#slip-img"),E=b.querySelector("#slip-name");f.addEventListener("change",h=>{g=h.target.files[0],g&&(E.textContent=g.name,g.type.startsWith("image/")?(p.src=URL.createObjectURL(g),p.classList.remove("hidden")):p.classList.add("hidden"),x.classList.remove("hidden"),b.querySelector("#slip-label").classList.add("hidden"))}),b.querySelector("#slip-remove").addEventListener("click",()=>{g=null,f.value="",x.classList.add("hidden"),b.querySelector("#slip-label").classList.remove("hidden")}),b.querySelector("#pp-submit").addEventListener("click",async()=>{const h=b.querySelector("#pp-err");if(!g){h.textContent="กรุณาอัปโหลดสลิปก่อนนะครับ",h.classList.remove("hidden");return}h.classList.add("hidden");const C=b.querySelector("#pp-submit");C.disabled=!0,C.textContent="⏳ กำลังส่ง...";try{const u=await Re({teacher_id:n.id,package_type:e,amount:i,room_count:e==="per_subject"?o:null,subject_id:e==="per_subject"?(t==null?void 0:t.id)??null:null,status:"pending"}),w=await st(g,u.id);await T.from("payment_requests").update({slip_url:w}).eq("id",u.id),b.remove(),Xn()}catch(u){C.disabled=!1,C.textContent="✅ ส่งหลักฐานการชำระเงิน",h.textContent="เกิดข้อผิดพลาด กรุณาลองใหม่: "+X(u),h.classList.remove("hidden")}})}function Xn(){const e=document.createElement("div");e.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()})}async function Xe(e){try{const t=await V(),o=t.semester??t.semester??"—",a=t.academicYear??t.academic_year??"—",s=document.getElementById("sidebar-term");s&&(s.textContent=`ภาคเรียนที่ ${o} / ${a}`);const l=(e==null?void 0:e.category)??"",r=/ปวช/i.test(l)?t.porworLogoUrl??t.samaiLogoUrl??"":t.samaiLogoUrl??"",i=document.getElementById("school-logo"),m=document.getElementById("school-logo-fallback");i&&r&&(i.src=r,i.classList.remove("hidden"),m==null||m.classList.add("hidden"));const c=document.getElementById("sidebar-contact");if(c){const b=[t.contactPhone&&{icon:"📞",label:t.contactPhone,href:`tel:${t.contactPhone.replace(/\s/g,"")}`},t.contactLine&&{icon:"💬",label:"LINE: "+t.contactLine,href:t.contactLine.startsWith("http")?t.contactLine:`https://line.me/R/ti/p/${t.contactLine}`},t.contactFacebook&&{icon:"📘",label:"Facebook",href:t.contactFacebook},t.contactEmail&&{icon:"📧",label:t.contactEmail,href:`mailto:${t.contactEmail}`},t.contactOther&&{icon:"🔗",label:t.contactOther,href:null}].filter(Boolean);b.length>0&&(window._contactLinks=b,c.innerHTML=`
          <button id="btn-contact-admin"
            class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm
                   font-medium text-emerald-200 hover:bg-emerald-700 border border-emerald-700 transition">
            📞 ติดต่อผู้ดูแล
          </button>`,c.classList.remove("hidden"),document.getElementById("btn-contact-admin").addEventListener("click",()=>{var f,x;(f=document.getElementById("contact-modal"))==null||f.remove();const g=document.createElement("div");g.id="contact-modal",g.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",g.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade">
              <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 class="font-bold text-gray-800">📞 ติดต่อผู้ดูแลระบบ</h3>
                <button id="contact-modal-close"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-lg">×</button>
              </div>
              <div class="p-5 space-y-3">
                ${b.map(p=>p.href?`<a href="${p.href}" target="_blank" rel="noopener"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 transition group">
                        <span class="text-xl">${p.icon}</span>
                        <span class="text-sm font-medium text-gray-700 group-hover:text-emerald-700 break-all">${p.label}</span>
                        <span class="ml-auto text-gray-300 group-hover:text-emerald-400 text-xs">→</span>
                      </a>`:`<div class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50">
                       <span class="text-xl">${p.icon}</span>
                       <span class="text-sm font-medium text-gray-700 break-all">${p.label}</span>
                     </div>`).join("")}
                <button id="contact-donate-btn"
                  class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-white font-semibold text-sm shadow-md shadow-amber-200/50 transition">
                  ☕ สนับสนุนผู้พัฒนา
                </button>
              </div>
            </div>`,document.body.appendChild(g),g.querySelector("#contact-modal-close").addEventListener("click",()=>g.remove()),(x=g.querySelector("#contact-donate-btn"))==null||x.addEventListener("click",async()=>{g.remove();const p=await V().catch(()=>({}));re(null,p)}),g.addEventListener("click",p=>{p.target===g&&g.remove()})}))}}catch{}}let ae=[];async function eo(e){try{ae=await tn(e),to()}catch{}}function to(){var o;if(document.querySelectorAll("#sv-notif-badge").forEach(a=>a.remove()),!ae.length)return;const e=ae.length,t=document.getElementById("t-name");if(t){const a=document.createElement("span");a.id="sv-notif-badge",a.style.cssText="display:inline-block;background:#dc2626;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 6px;margin-left:6px;cursor:pointer;",a.textContent=e,a.title=`${e} ข้อความจากหัวหน้า`,a.onclick=()=>et(n==null?void 0:n.id),(o=t.parentElement)==null||o.appendChild(a)}window._showSvNotifPopup=()=>et(n==null?void 0:n.id),"Notification"in window&&Notification.permission==="granted"&&e>0&&new Notification("ปพ.5 ออนไลน์ — มีข้อความจากหัวหน้า",{body:ae[0].comment,icon:"/pp5online/public/pp5-form-logo.png"})}async function et(e){const t={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},o={general:"#f9fafb",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},a={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},s={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},l=r=>{const i=r.supervisor;if(!i)return"หัวหน้า";const m=s[i.position]??"หัวหน้า";return i.full_name?`${m} (${i.full_name})`:m},d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;",d.innerHTML=`<div style="background:#fff;border-radius:16px;width:min(500px,96vw);max-height:85vh;overflow-y:auto;padding:24px;position:relative;">
    <button style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;" onclick="this.closest('div').parentElement.remove()">✕</button>
    <div style="font-size:16px;font-weight:700;margin-bottom:4px;">🔔 ข้อความจากหัวหน้า</div>
    <div style="font-size:12px;color:#6b7280;margin-bottom:16px;">ได้รับการตรวจสอบแล้ว ${ae.length} รายการ</div>
    ${ae.map(r=>`
      <div style="background:${o[r.metric]??"#f9fafb"};border-radius:12px;padding:14px 16px;margin-bottom:10px;border-left:4px solid ${a[r.metric]??"#6b7280"};">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:700;color:${a[r.metric]??"#374151"};background:${o[r.metric]??"#f9fafb"};
            border:1px solid currentColor;border-radius:8px;padding:1px 8px;">
            ${t[r.metric]??r.metric}
          </span>
          <span style="font-size:10px;color:#9ca3af;">${new Date(r.created_at).toLocaleString("th")}</span>
        </div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;">จาก: ${l(r)}</div>
        <div style="font-size:13px;color:#374151;line-height:1.5;">${r.comment}</div>
      </div>`).join("")}
    <button id="sv-mark-read"
      style="width:100%;margin-top:8px;padding:10px;background:#059669;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
      ✓ รับทราบทั้งหมด
    </button>
  </div>`,document.body.appendChild(d),d.addEventListener("click",r=>{r.target===d&&d.remove()}),d.querySelector("#sv-mark-read").onclick=async()=>{await nn(e),ae=[],document.querySelectorAll("#sv-notif-badge").forEach(r=>r.remove()),d.remove()}}let we=!1,xe=null;async function He(){var a;const e=document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area"),t=document.querySelector("#sidebar nav");if(!e||we)return;if(!(n!=null&&n.id)){k("กำลังโหลดข้อมูลครู กรุณารอสักครู่แล้วลองใหม่","warning");try{n=await se((a=(await T.auth.getUser()).data.user)==null?void 0:a.id)}catch{}if(!(n!=null&&n.id))return}we=!0,t&&(xe=t.innerHTML),await Me(),so(t,e,W);const{renderSupervisorDashboard:o}=await v(async()=>{const{renderSupervisorDashboard:s}=await import("./supervisor-BEUNby6n.js");return{renderSupervisorDashboard:s}},__vite__mapDeps([54,1,2,3,4,5,6,14,15,9,10]));o(e,n,W)}window._enterSupervisorMode=He;function no(){document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area");const e=document.querySelector("#sidebar nav");we&&(we=!1,e&&xe&&(e.innerHTML=xe,xe=null,ro(e),vt()),P("overview"))}async function oo(){if(n!=null&&n.id)try{const[e,t]=await Promise.all([Zt("teacher",(n==null?void 0:n.id)??null),n!=null&&n.id?Xt(n.id):Promise.resolve([])]),o=new Set((t??[]).map(s=>Number(s.announcement_id))),a=e.filter(s=>!o.has(Number(s.id))&&(s.requires_ack||Number(s.priority)>=5&&s.ann_type!=="system"));Ce("moreAnnouncements",a.length),Pt(a,"pp5_ann_dismissed",{useLocalSeen:!1,onAcknowledgeAll:async s=>{await en(s,n==null?void 0:n.id),Ce("moreAnnouncements",Math.max(0,a.length-s.length))}})}catch{}}async function ao(){try{const e=await Ln();e!=null&&e.is_participant&&!e.completed&&Rt("teacher")}catch{}}const tt=[{key:"announce_create",icon:"📢",label:"จัดการประกาศ",fn:(e,t)=>{v(async()=>{const{renderSupervisorAnnouncements:o}=await import("./views-o4B-VA-E.js").then(a=>a.S);return{renderSupervisorAnnouncements:o}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30])).then(({renderSupervisorAnnouncements:o})=>o(e,t))}},{key:"work_calendar",icon:"📅",label:"ปฏิทินปฏิบัติงาน",fn:e=>{v(async()=>{const{renderWorkCalendar:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderWorkCalendar:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30])).then(({renderWorkCalendar:t})=>t(e))}},{key:"lang_config",icon:"⚙️",label:"ตั้งค่าคำอธิบายฯ",fn:async(e,t)=>{const{renderCourseDocLangConfig:o}=await v(async()=>{const{renderCourseDocLangConfig:a}=await import("./teacher-views-BeOZLsOo.js");return{renderCourseDocLangConfig:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));o(e,t)}},{key:"menu_holidays",icon:"📅",label:"วันหยุด",fn:async()=>{const{renderHolidays:e}=await v(async()=>{const{renderHolidays:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderHolidays:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_periods",icon:"🕐",label:"คาบเรียน",fn:async()=>{const{renderPeriods:e}=await v(async()=>{const{renderPeriods:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderPeriods:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_curriculum",icon:"📘",label:"หลักสูตรแกนกลาง",fn:async()=>{const{renderCurriculum:e}=await v(async()=>{const{renderCurriculum:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderCurriculum:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_subjects",icon:"📖",label:"รายวิชา",fn:async()=>{const{renderSubjects:e}=await v(async()=>{const{renderSubjects:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderSubjects:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_departments",icon:"🏫",label:"กลุ่มสาระ",fn:async()=>{const{renderDepartments:e}=await v(async()=>{const{renderDepartments:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderDepartments:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_homeroom",icon:"🏠",label:"ครูที่ปรึกษา",fn:async()=>{const{renderHomeroom:e}=await v(async()=>{const{renderHomeroom:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderHomeroom:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_students",icon:"👨‍🎓",label:"นักเรียน",fn:async()=>{const{renderStudents:e}=await v(async()=>{const{renderStudents:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderStudents:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_classrooms",icon:"🚪",label:"ห้องเรียน",fn:async()=>{const{renderClassroomsAdmin:e}=await v(async()=>{const{renderClassroomsAdmin:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderClassroomsAdmin:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_score_config",icon:"📊",label:"คอลัมน์คะแนน",fn:async()=>{const{renderScoreColConfig:e}=await v(async()=>{const{renderScoreColConfig:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderScoreColConfig:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_life_skill",icon:"🌱",label:"ทักษะชีวิต",fn:async()=>{const{renderLifeSkillAdmin:e}=await v(async()=>{const{renderLifeSkillAdmin:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderLifeSkillAdmin:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_reading",icon:"📗",label:"การอ่าน",fn:async()=>{const{renderReadingAdmin:e}=await v(async()=>{const{renderReadingAdmin:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderReadingAdmin:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_prayer",icon:"🕌",label:"ละหมาด",fn:async()=>{const{renderPrayerAdmin:e}=await v(async()=>{const{renderPrayerAdmin:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderPrayerAdmin:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_house_colors",icon:"🎨",label:"สีนักเรียน",fn:async()=>{const{renderHouseColors:e}=await v(async()=>{const{renderHouseColors:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderHouseColors:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_sports_admin",icon:"🏆",label:"ระบบกีฬาสี",fn:async()=>mt({admin:!0,teacherName:n==null?void 0:n.full_name,teacherCode:n==null?void 0:n.teacher_code})},{key:"menu_azfutsal",icon:"⚽",label:"AZFUTSALCUP",fn:async()=>ln()},{key:"menu_sports_shirt_settings",icon:"👕",label:"ตั้งค่าและสรุปเสื้อกีฬาสี",fn:async()=>pt()},{key:"menu_sports_fund_admin",icon:"💰",label:"บัญชีเงินกีฬาสี",fn:async()=>ut()},{key:"manage_religion_groups",icon:"🕌",label:"กลุ่มวิชาศาสนา",fn:async()=>{const{renderReligionGroups:e}=await v(async()=>{const{renderReligionGroups:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderReligionGroups:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"manage_my_religion_group",icon:"👥",label:"กลุ่มของฉัน",fn:async e=>{const{renderMyReligionGroup:t}=await v(async()=>{const{renderMyReligionGroup:o}=await import("./views-o4B-VA-E.js").then(a=>a.S);return{renderMyReligionGroup:o}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));t(e)}},{key:"menu_classroom_leaders",icon:"👑",label:"หัวหน้า/รองหัวหน้าห้อง",fn:async()=>{const{renderClassroomLeaders:e}=await v(async()=>{const{renderClassroomLeaders:t}=await import("./views-o4B-VA-E.js").then(o=>o.S);return{renderClassroomLeaders:t}},__vite__mapDeps([23,1,2,3,4,5,6,24,21,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,0,25,26,27,28,29,30]));e()}},{key:"menu_tutorial",icon:"📖",label:"คู่มือการใช้งาน",fn:async()=>{const{renderTutorialAdmin:e}=await v(async()=>{const{renderTutorialAdmin:t}=await import("./tutorial-DqRRkJk5.js");return{renderTutorialAdmin:t}},__vite__mapDeps([52,2,3,4,5,6,10,1]));e()}}];function so(e,t,o=!1){var m;if(!e)return;const a={dept_head:"หัวหน้ากลุ่มสาระ",religion_group_head:"หัวหน้ากลุ่ม (ศาสนา)",religion_subgroup_head:"หัวหน้ากลุ่มย่อย (ศาสนา)",registrar_samai:"ทะเบียน (สามัญ)",registrar_religion:"ทะเบียน (ศาสนา)",registrar_pvch:"ทะเบียน (ปวช)",academic_samai:"วิชาการ (สามัญ)",academic_religion:"วิชาการ (ศาสนา)",academic_pvch:"วิชาการ (ปวช)",house_color_admin:"สีนักเรียน",classroom_leaders_admin:"ผู้ดูแลหัวหน้า/รองหัวหน้า",executive:"ผู้บริหาร"},s=(m=n==null?void 0:n.positions)!=null&&m.length?n.positions:n!=null&&n.position?[n.position]:[],l=s.length?s.map(c=>a[c]??c).join(" / "):o?"แอดมิน":"หัวหน้า",d=Y.enabled!==!1&&Y.teacher_menu!==!1,r=o?tt:tt.filter(c=>c.key==="lang_config"?z.lang_config||s.includes("dept_head"):c.key==="menu_house_colors"?z.menu_house_colors||s.includes("house_color_admin"):c.key==="menu_sports_admin"?d&&(z.menu_sports_admin||s.includes("house_color_admin")):c.key==="menu_sports_shirt_settings"||c.key==="menu_sports_fund_admin"?z.menu_sports_admin||s.includes("house_color_admin"):c.key==="menu_azfutsal"?!0:c.key==="menu_classroom_leaders"?z.menu_classroom_leaders||s.includes("classroom_leaders_admin"):c.key==="manage_religion_groups"?z.manage_religion_groups||s.includes("religion_group_head"):c.key==="manage_my_religion_group"?s.includes("religion_subgroup_head"):c.key==="announce_manage"?!!z.announce_manage:c.key==="announce_create"?!!z.announce_create:c.key==="work_calendar"?!!z.work_calendar:!!z[c.key]),i=(c,b,g)=>`<button data-sv="${c}" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium w-full text-left transition hover:bg-emerald-800/50" style="color:#d1fae5;">${b} ${g}</button>`;e.innerHTML=`
    <div style="padding:8px 12px;font-size:11px;color:#6ee7b7;font-weight:600;letter-spacing:.5px;margin-bottom:4px;">📊 ${l}</div>
    ${i("back","←","กลับโหมดสอน")}
    <div style="height:1px;background:#065f46;margin:8px 12px;"></div>
    ${i("dashboard","📊","Dashboard ติดตาม")}
    ${r.map(c=>i(c.key,c.icon,c.label)).join("")}`,e.querySelector('[data-sv="back"]').onclick=no,e.querySelector('[data-sv="dashboard"]').onclick=()=>v(()=>import("./supervisor-BEUNby6n.js"),__vite__mapDeps([54,1,2,3,4,5,6,14,15,9,10])).then(c=>c.renderSupervisorDashboard(t,n,W)),r.forEach(c=>{var b;(b=e.querySelector(`[data-sv="${c.key}"]`))==null||b.addEventListener("click",()=>c.fn(n,o))})}function ro(e,t){e.querySelectorAll("[data-nav]").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),P(o.dataset.nav)})}),e.querySelectorAll("button").forEach(o=>{o.textContent.trim().includes("Dashboard")&&(o.onclick=He)})}async function Pe(e){if(!n)return;let t=[];try{const[l,d]=await Promise.all([ue(n.id),V().catch(()=>({}))]),r=parseInt(d.academicYear??d.academic_year??2568),i=parseInt(d.semester??1);t=e==="attendance"?l.filter(c=>c.academic_year==null||+c.academic_year===r&&+c.semester===i):l;const m=t.map(c=>c.id).filter(Boolean);if(m.length){const{data:c,error:b}=await T.from("class_students").select("class_id").in("class_id",m);b&&console.warn("[quick-class-picker] โหลดจำนวนนักเรียนไม่สำเร็จ",b);const g=(c??[]).reduce((f,x)=>(f[x.class_id]=(f[x.class_id]||0)+1,f),{});t=t.map(f=>({...f,_studentCount:g[f.id]||0}))}}catch(l){console.error("[quick-class-picker] โหลดรายการห้องไม่สำเร็จ",l),k("โหลดรายการห้องเรียนไม่สำเร็จ กรุณาลองใหม่","error");return}if(!t.length){k("ยังไม่มีห้องเรียน","warning");return}if(t.length===1){nt(e,t[0]);return}const o=e==="attendance"?"✅ เลือกห้องเรียน — เช็คชื่อ":"📝 เลือกห้องเรียน — บันทึกคะแนน",a=document.createElement("div");a.id="qcp-overlay",a.className="fixed inset-0 z-[80] flex items-center justify-center p-4",a.innerHTML=`
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="qcp-backdrop"></div>
    <div class="relative bg-white w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[70vh] flex flex-col">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">${o}</p>
        <button id="qcp-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <div class="overflow-y-auto p-3 space-y-2">
        ${t.map(l=>{var d;return`
          <button data-cid="${l.id}" class="qcp-cls w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition border border-gray-100">
            <p class="font-semibold text-gray-800 text-sm">${l.class_name}</p>
            <p class="text-xs text-gray-400 mt-0.5">${((d=l.master_subjects)==null?void 0:d.subject_name)??""} · ${l.academic_year??currentYear}/${l.semester??currentSemester} · ${l._studentCount??0} คน</p>
          </button>`}).join("")}
      </div>
    </div>`,document.body.appendChild(a);const s=()=>a.remove();a.querySelector("#qcp-backdrop").onclick=s,a.querySelector("#qcp-close").onclick=s,a.querySelectorAll(".qcp-cls").forEach(l=>{l.onclick=()=>{s();const d=t.find(r=>String(r.id)===l.dataset.cid);d&&nt(e,d)}})}window._showClassQuickPicker=Pe;async function nt(e,t){if(e==="attendance"){const{renderAttendanceGrid:o}=await v(async()=>{const{renderAttendanceGrid:a}=await import("./teacher-views-attendance-BcU-JXax.js");return{renderAttendanceGrid:a}},__vite__mapDeps([20,1,2,3,4,5,6,21,10]));o(n,t)}else{const{renderGradesGrid:o}=await v(async()=>{const{renderGradesGrid:a}=await import("./teacher-views-grades-DEPKarZO.js").then(s=>s.t);return{renderGradesGrid:a}},__vite__mapDeps([18,1,2,3,4,5,6,15,13,19,10]));o(n,t)}}const io=`
  <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`,ie="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/20 shadow-[0_10px_20px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.28)] ring-1 ring-white/30 text-2xl leading-none";function lo(e,t=null){return n?(e.prayerScannerTeachers||"").split(/[\s,]+/).map(a=>a.trim()).filter(Boolean).includes(n.teacher_code)||n.staff_type==="แอดมิน"||n.position==="admin"||t==="admin":!1}async function qt(){var i,m,c,b,g,f,x,p;if(!n)return;(i=document.getElementById("teacher-scan-launcher"))==null||i.remove();const e=document.createElement("div");e.id="teacher-scan-launcher",e.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
    <div class="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-9 h-9 rounded-2xl text-white bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-700 flex items-center justify-center shadow-[0_10px_24px_rgba(5,150,105,0.30),inset_0_1px_0_rgba(255,255,255,0.35)]">${io}</span>
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
  `,document.body.appendChild(e);const t=()=>e.remove();e.addEventListener("click",E=>{E.target===e&&t()}),(m=e.querySelector("#scan-launcher-close"))==null||m.addEventListener("click",t);const o=e.querySelector("#scan-launcher-body"),[a,s]=await Promise.all([V().catch(()=>({})),(async()=>{try{return await T.from("profiles").select("role").eq("id",n.profile_id).maybeSingle()}catch{return{data:null}}})()]),l=lo(a,((c=s==null?void 0:s.data)==null?void 0:c.role)??null),d="group w-full text-left rounded-3xl border p-4 flex gap-3 items-start hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition shadow-[0_14px_30px_rgba(15,23,42,0.12)]",r={attendance:{card:`${d} border-sky-700 bg-sky-600 hover:bg-sky-700 hover:shadow-[0_20px_42px_rgba(2,132,199,0.30)]`,icon:`${ie} text-white group-hover:shadow-[0_14px_26px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-sky-50/85"},prayer:{card:`${d} border-emerald-700 bg-emerald-600 hover:bg-emerald-700 hover:shadow-[0_20px_42px_rgba(16,185,129,0.30)]`,icon:`${ie} text-white group-hover:shadow-[0_14px_26px_rgba(16,185,129,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-emerald-50/85"},leave:{card:`${d} border-orange-700 bg-orange-500 hover:bg-orange-600 hover:shadow-[0_20px_42px_rgba(249,115,22,0.30)]`,icon:`${ie} text-white group-hover:shadow-[0_14px_26px_rgba(249,115,22,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-orange-50/90"},score:{card:`${d} border-indigo-700 bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_20px_42px_rgba(79,70,229,0.30)]`,icon:`${ie} text-white group-hover:shadow-[0_14px_26px_rgba(79,70,229,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-indigo-50/85"}};o.innerHTML=`
    <div class="space-y-3">
      <button id="scan-launcher-attendance" type="button" class="${r.attendance.card}">
        <span class="${r.attendance.icon}" aria-hidden="true">✅</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${r.attendance.title} text-sm">สแกน QR เช็คชื่อ</span>
          <span class="block text-xs ${r.attendance.sub} mt-1">เลือกห้องและคาบ ระบบจะโหลดข้อมูลเดิม แล้วเปิดกล้องสแกน</span>
        </span>
      </button>

      ${l?`
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
          <span class="${ie} text-white" aria-hidden="true">🕌</span>
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
  `,(b=o.querySelector("#scan-launcher-attendance"))==null||b.addEventListener("click",async()=>{t();const{openAttendanceScanSetup:E}=await v(async()=>{const{openAttendanceScanSetup:M}=await import("./teacher-views-attendance-BcU-JXax.js");return{openAttendanceScanSetup:M}},__vite__mapDeps([20,1,2,3,4,5,6,21,10]));E(n)}),(g=o.querySelector("#scan-launcher-leave"))==null||g.addEventListener("click",()=>{t(),P("student-leave-scanner")}),(f=o.querySelector("#scan-launcher-score"))==null||f.addEventListener("click",async()=>{t();const{openScoreScannerPickClass:E}=await v(async()=>{const{openScoreScannerPickClass:M}=await import("./score-qr-scanner-DlvhhgkY.js");return{openScoreScannerPickClass:M}},__vite__mapDeps([19,2,3,4,5,6,1]));E(n)}),(x=o.querySelector("#scan-launcher-prayer-open"))==null||x.addEventListener("click",async()=>{t();const{renderStudentPrayerScanner:E}=await v(async()=>{const{renderStudentPrayerScanner:M}=await import("./student-views-Wi1nWdWa.js");return{renderStudentPrayerScanner:M}},__vite__mapDeps([55,1,2,3,4,5,6,15,56,10,27,36,21,16,7,12,13,33,9]));E(n)}),(p=o.querySelector("#scan-launcher-prayer-request"))==null||p.addEventListener("click",async()=>{const E=o.querySelector("#scan-launcher-prayer-request");E.disabled=!0,E.textContent="กำลังส่งคำขอ...";const M=["ขอสิทธิ์สแกนละหมาด",`ชื่อครู: ${n.full_name||"-"}`,`รหัสครู: ${n.teacher_code||"-"}`,`กลุ่มสาระ: ${n.dept||"-"}`,"","ต้องการใช้งานปุ่มกล้องกลางเพื่อสแกนละหมาด"].join(`
`);try{await Wt({profileId:n.profile_id,senderRole:"teacher",senderName:n.full_name||n.teacher_code||"คุณครู",category:"suggestion",message:M}),k("ส่งคำขอสิทธิ์สแกนละหมาดถึงแอดมินแล้ว","success"),t()}catch(h){E.disabled=!1,E.textContent="ขอสิทธิ์สแกนละหมาด",k((h==null?void 0:h.code)==="FEEDBACK_LIMIT_REACHED"?`ส่งความคิดเห็นครบโควต้าเดือนนี้แล้ว (${h.limit} ครั้ง/เดือน)`:"ส่งคำขอไม่สำเร็จ กรุณาลองใหม่",(h==null?void 0:h.code)==="FEEDBACK_LIMIT_REACHED"?"warning":"error")}})}window._openTeacherScanLauncher=qt;async function co(){if("serviceWorker"in navigator)try{await navigator.serviceWorker.register("/pp5online/sw.js",{scope:"/pp5online/"})}catch{}}function mo(){if(document.getElementById("notify-banner"))return;const e=document.createElement("div");e.id="notify-banner",e.className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[80] w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-indigo-100 p-4 flex items-center gap-3 animate-fade",e.innerHTML=`
    <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">🔔</div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-gray-800">เปิดการแจ้งเตือน?</p>
      <p class="text-xs text-gray-400 mt-0.5">แจ้งก่อนเข้าสอนตามที่ตั้งค่าไว้</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <button id="notify-deny" class="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">ไม่</button>
      <button id="notify-allow" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition">เปิด</button>
    </div>`,document.body.appendChild(e),e.querySelector("#notify-deny").addEventListener("click",()=>{e.remove(),localStorage.setItem("pp5_notify_dismissed","1")}),e.querySelector("#notify-allow").addEventListener("click",async()=>{e.remove(),await Notification.requestPermission()==="granted"&&(k("เปิดการแจ้งเตือนแล้ว ✅","success"),n!=null&&n.id&&await Ct(n.id),n!=null&&n.profile_id&&ct(n.profile_id))}),setTimeout(()=>e.remove(),12e3)}async function Ct(e){var t,o,a;if(!(!("Notification"in window)||Notification.permission!=="granted"))try{const s=await V().catch(()=>({})),l=parseInt(s.notifyBeforeMinutes)||10,d=parseInt(s.academicYear??2568),r=parseInt(s.semester??1),[i,m,c,b]=await Promise.all([ke(e,d,r).catch(()=>[]),je(e).catch(()=>[]),rt().catch(()=>[]),ue(e).catch(()=>[])]),g=new Date,f=g.getDay(),x=g.getHours()*60+g.getMinutes(),p={};m.forEach(u=>{p[u.teacher_schedule_id]||(p[u.teacher_schedule_id]=[]),p[u.teacher_schedule_id].push(u.class_id)});const E=Object.fromEntries(b.map(u=>[u.id,u])),M=Object.fromEntries(c.map(u=>[u.period_no,u]));(window._notifyTimeouts??[]).forEach(u=>clearTimeout(u)),window._notifyTimeouts=[];const h=i.filter(u=>u.day_of_week===f&&(p[u.id]??[]).length>0).map(u=>({...u,linkedClasses:(p[u.id]??[]).map(w=>E[w]).filter(Boolean),period:M[u.period_no]}));let C=0;for(const u of h){if(!((t=u.period)!=null&&t.start_time))continue;const[w,L]=u.period.start_time.split(":").map(Number),y=w*60+L-l,_=y-x;if(_<=0)continue;const R=((a=(o=u.linkedClasses[0])==null?void 0:o.master_subjects)==null?void 0:a.subject_name)??"วิชา",$=u.linkedClasses.map(N=>{var H;const B=N.classroom_id?(H=window._classroomMapGlobal)==null?void 0:H[N.classroom_id]:null;return N.class_name+(B?` 📍${B.building} ${B.room_number}`:"")}).join(", "),F=u.period.start_time.substring(0,5),G=setTimeout(async()=>{var H;const N=await((H=navigator.serviceWorker)==null?void 0:H.ready.catch(()=>null)),B={body:`${R} · ${$}
คาบ ${u.period_no} เวลา ${F}`,icon:"/pp5online/vite.svg",badge:"/pp5online/vite.svg",tag:`class-${u.id}-${y}`,requireInteraction:!1,silent:!1};N?N.showNotification(`🔔 อีก ${l} นาที — คาบถัดไป`,B):new Notification(`🔔 อีก ${l} นาที — คาบถัดไป`,B)},_*6e4);window._notifyTimeouts.push(G),C++}C>0&&k(`ตั้งแจ้งเตือน ${C} คาบสำหรับวันนี้ 🔔`,"info")}catch{}}async function uo(e){"Notification"in window&&(await co(),Notification.permission==="granted"?(await Ct(e),n!=null&&n.profile_id&&ct(n.profile_id)):Notification.permission==="default"&&(localStorage.getItem("pp5_notify_dismissed")||setTimeout(mo,2e3)))}async function po(){try{const{data:e}=await T.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(!e)return;const{data:t}=await T.from("sports_portal_settings").select("teacher_shirt_request_enabled").eq("event_id",e.id).maybeSingle();if(!(t!=null&&t.teacher_shirt_request_enabled))return;const{data:o}=await T.from("sports_shirt_teacher_requests").select("id").eq("event_id",e.id).eq("teacher_id",n.id).maybeSingle();if(o)return;bo()}catch{}}function bo(){var t;(t=document.getElementById("shirt-size-reminder-popup"))==null||t.remove();const e=document.createElement("div");e.id="shirt-size-reminder-popup",e.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.querySelector("#ssrp-go").addEventListener("click",()=>{e.remove(),v(()=>import("./sports-portals.js_v_10.22-Dz4YR1a0.js"),__vite__mapDeps([51,1,30,3,29,9,16,4,12])).then(o=>{var a;return(a=o.openTeacherShirtSizeModal)==null?void 0:a.call(o,n)})}),e.querySelector("#ssrp-close").addEventListener("click",()=>e.remove())}async function fo(){try{const e=await V().catch(()=>({})),t=parseInt(e.academicYear??2568),o=parseInt(e.semester??1),[a,s,l]=await Promise.all([ue(n.id).catch(()=>[]),ke(n.id,t,o).catch(()=>[]),je(n.id).catch(()=>[])]),d=a.filter(m=>m.academic_year==null||Number(m.academic_year)===t&&Number(m.semester)===o);if(!d.length)return;if(!s.length){ot("no_schedule");return}const r=new Set(l.map(m=>m.class_id)),i=d.filter(m=>!r.has(m.id));i.length>0&&ot("has_unlinked",i.length,i.map(m=>m.id))}catch{}}function ot(e,t=0,o=[]){var l;(l=document.getElementById("sched-link-prompt"))==null||l.remove();const a=e==="no_schedule",s=document.createElement("div");s.id="sched-link-prompt",s.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",s.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br ${a?"from-indigo-500 to-purple-500":"from-amber-400 to-orange-400"} px-6 py-6 text-center">
        <div class="text-4xl mb-2">${a?"🗓️":"🔗"}</div>
        <h3 class="text-white font-bold text-base">${a?"ยังไม่มีตารางสอน":`มี ${t} ห้องที่ยังไม่เชื่อมโยง`}</h3>
        <p class="text-white/80 text-xs mt-1">${a?"สร้างตารางสอนเพื่อรับสิทธิ์การแจ้งเตือนและการเรียงห้อง":"เชื่อมโยงห้องเรียนกับตารางสอนเพื่อใช้ฟีเจอร์เต็มประสิทธิภาพ"}</p>
      </div>
      <div class="p-6">
        <div class="space-y-2 mb-5">
          ${["แจ้งเตือนวันนี้สอนวิชาอะไร กี่โมง","Countdown นับถอยหลังก่อนเข้าสอน","เรียงห้องเรียนตามเวลาที่ใกล้ที่สุด","แสดงวัน/คาบบนการ์ดแต่ละห้อง"].map(d=>`<p class="text-xs text-gray-500">✅ ${d}</p>`).join("")}
        </div>
        <button id="slp-go"
          class="w-full py-3 rounded-2xl ${a?"bg-indigo-600 hover:bg-indigo-700":"bg-amber-500 hover:bg-amber-600"}
                 text-white font-bold text-sm shadow-md transition mb-2">
          ${a?"🗓️ สร้างตารางสอนตอนนี้":"🔗 ไปเชื่อมโยงห้องเรียน"}
        </button>
        <button id="slp-close"
          class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">
          ภายหลัง
        </button>
      </div>
    </div>`,document.body.appendChild(s),s.querySelector("#slp-go").addEventListener("click",()=>{s.remove(),a?window._navTo("schedule-builder"):o.length===1&&window._openCombinedEdit?(window._navTo("my-classes"),setTimeout(()=>{var d;return(d=window._openCombinedEdit)==null?void 0:d.call(window,o[0],"schedule")},400)):window._navTo("my-classes")}),s.querySelector("#slp-close").addEventListener("click",()=>s.remove())}window._openScheduleLinkModal=async e=>{var l,d,r;const t=(l=window._classCache)==null?void 0:l[e],o=(d=window._classColorCache)==null?void 0:d[e],a=(t==null?void 0:t.class_name)??"—",s=t==null?void 0:t.master_subjects;try{k("กำลังโหลด...","info");const i=await V().catch(()=>({})),m=parseInt(i.academicYear??2568),c=parseInt(i.semester??1),[b,g,f]=await Promise.all([ke(n==null?void 0:n.id,m,c).catch(()=>[]),je(n==null?void 0:n.id).catch(()=>[]),rt().catch(()=>[])]);if(!b.length){k("ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อนครับ","error");return}const x=new Set(g.filter(y=>y.class_id===e).map(y=>y.teacher_schedule_id)),p=new Set(x),E=Object.fromEntries(f.map(y=>[y.period_no,y])),M=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],h={};g.filter(y=>y.class_id!==e).forEach(y=>{var R,$;const _=(R=window._classCache)==null?void 0:R[y.class_id];_&&(h[y.teacher_schedule_id]||(h[y.teacher_schedule_id]=[]),h[y.teacher_schedule_id].push({className:_.class_name??"—",subjectName:(($=_.master_subjects)==null?void 0:$.subject_name)??"—"}))});const C=(o==null?void 0:o.soft)??"#f0fdf4",u=(o==null?void 0:o.border)??"#d1fae5",w=(o==null?void 0:o.text)??"#065f46";(r=document.getElementById("sched-link-modal"))==null||r.remove();const L=document.createElement("div");L.id="sched-link-modal",L.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4";const j=(y,_)=>{const R=E[y.period_no],$=R?`${R.start_time.substring(0,5)} – ${R.end_time.substring(0,5)}`:"",F=y.span_periods>1?`–${y.period_no+y.span_periods-1}`:"",G=h[y.id]??[],N=G.length>0&&!_;let B,H;_?(B="border-emerald-400 bg-emerald-50 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]",H='<span class="text-xl flex-shrink-0 mt-0.5">✅</span>'):N?(B="border-gray-200 bg-gray-50 opacity-70 cursor-pointer",H='<span class="text-xl flex-shrink-0 mt-0.5">🔒</span>'):(B="border-gray-200 bg-white hover:border-gray-300",H='<span class="text-xl flex-shrink-0 mt-0.5">⬜</span>');const ee=G.map(S=>`${S.subjectName} (${S.className})`).join(", ");return`
      <button type="button" class="slm-card w-full text-left p-4 rounded-2xl border-2 transition-all ${B}"
        data-id="${y.id}" data-sel="${_?"1":"0"}" data-locked="${N?"1":"0"}"
        data-others="${ee.replace(/"/g,"&quot;")}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            <p class="text-base font-bold text-gray-800">${M[y.day_of_week]} · คาบ ${y.period_no}${F}</p>
            <p class="text-sm text-gray-500 mt-0.5">${$}</p>
            ${y.class_name?`<p class="text-base font-semibold mt-1" style="color:${w}">${y.class_name}</p>`:""}
            ${G.length>0?`<p class="text-[11px] text-amber-600 mt-1.5">⚠️ เชื่อมกับ: ${ee}</p>`:""}
          </div>
          ${H}
        </div>
      </button>`};L.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>

        <!-- Header พร้อมสีห้อง -->
        <div class="px-5 pt-5 pb-4 border-b rounded-t-2xl flex-shrink-0"
          style="background:${C}; border-color:${u}">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-wider mb-1" style="color:${w}">🔗 เชื่อมโยงตารางสอน</p>
              <h3 class="text-xl font-extrabold leading-tight" style="color:${w}">${a}</h3>
              ${s!=null&&s.subject_name?`<p class="text-sm mt-0.5" style="color:${w};opacity:.75">${s.subject_name}</p>`:""}
            </div>
            <button id="slm-close" class="text-2xl leading-none flex-shrink-0 opacity-60 hover:opacity-100 transition"
              style="color:${w}">×</button>
          </div>
        </div>

        <!-- Slot list -->
        <div class="px-4 py-3 overflow-auto flex-1">
          <p class="text-xs text-gray-400 mb-3">แตะการ์ดเพื่อเลือก/ยกเลิก (เลือกได้หลายคาบ)</p>
          <div id="slm-list" class="space-y-2">
            ${b.map(y=>j(y,p.has(y.id))).join("")}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-4 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
          <button id="slm-save"
            class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition">
            บันทึกการเชื่อมโยง
          </button>
        </div>
      </div>`,document.body.appendChild(L),L.querySelector("#slm-list").addEventListener("click",y=>{var N;const _=y.target.closest(".slm-card");if(!_)return;const R=parseInt(_.dataset.id),$=_.dataset.sel==="1",F=_.dataset.locked==="1",G=b.find(B=>B.id===R);if(F&&!$){(N=document.getElementById("slm-confirm-popup"))==null||N.remove();const B=document.createElement("div");B.id="slm-confirm-popup",B.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-6";const H=_.dataset.others;B.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">⚠️</div>
            <h4 class="font-bold text-gray-800 mb-2">คาบนี้ถูกเชื่อมโยงแล้ว</h4>
            <p class="text-xs text-gray-500 leading-relaxed mb-5">
              คาบนี้ถูกเชื่อมโยงกับ<br/>
              <span class="font-semibold text-amber-700">${H}</span><br/>
              ต้องการเชื่อมโยงเพิ่มเข้า<br/>
              <span class="font-semibold text-indigo-700">${a}</span> ด้วยหรือไม่?
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
          </div>`,document.body.appendChild(B),B.querySelector("#slm-conf-no").addEventListener("click",()=>B.remove()),B.querySelector("#slm-conf-yes").addEventListener("click",()=>{B.remove(),p.add(R),_.outerHTML=j(G,!0)});return}$?p.delete(R):p.add(R),_.outerHTML=j(G,!$)}),L.querySelector("#slm-close").addEventListener("click",()=>L.remove()),L.addEventListener("click",y=>{y.target===L&&L.remove()}),L.querySelector("#slm-save").addEventListener("click",async()=>{const y=L.querySelector("#slm-save");y.disabled=!0,y.textContent="⏳ กำลังบันทึก...";try{const _=[...p].filter($=>!x.has($)),R=[...x].filter($=>!p.has($));await Promise.all([..._.map($=>Ft(e,$)),...R.map($=>zt(e,$))]),k("บันทึกการเชื่อมโยงแล้ว ✅","success"),L.remove(),window._navTo("my-classes")}catch(_){k("เกิดข้อผิดพลาด: "+X(_),"error"),y.disabled=!1,y.textContent="บันทึกการเชื่อมโยง"}})}catch(i){k("โหลดข้อมูลไม่ได้: "+X(i),"error")}};document.addEventListener("DOMContentLoaded",async()=>{var i,m,c,b,g,f,x,p,E,M,h,C;dn();const e=fn();let t=!1;if(e)try{if(Ie(!0),await gn(T),n=e.profile_id?await se(e.profile_id).catch(()=>null)??await Ge(e.id).catch(()=>e):await Ge(e.id).catch(()=>e),!(n!=null&&n.id)||(n==null?void 0:n.profile_id)!==e.profile_id)throw new Error("ไม่พบข้อมูลครูเป้าหมายของเซสชันสวมบทบาท");const{data:u}=await T.from("profiles").select("role,is_also_admin").eq("id",e.profile_id).maybeSingle();if(W=(u==null?void 0:u.is_also_admin)===!0,oe=(u==null?void 0:u.role)==="admin"||W,await Me(),await lt("teacher",n??{}),Q=n!=null&&n.id?await ye(n.id).catch(()=>[]):[],n!=null&&n.position||(i=n==null?void 0:n.positions)!=null&&i.length){const y=(m=n.positions)!=null&&m.length?n.positions:[n.position];z=await Ue(y).catch(()=>({}))}await ve(),Xe(n),ft(n),await bt();const w=document.getElementById("impersonation-banner"),L=document.getElementById("impersonation-name"),j=document.getElementById("impersonation-exit");w&&L&&(L.textContent=`${(n==null?void 0:n.full_name)??e.full_name} (${(n==null?void 0:n.teacher_code)??e.teacher_code??""})`,w.classList.remove("hidden"),w.classList.add("flex")),j&&j.addEventListener("click",async()=>{try{j.disabled=!0,j.textContent="กำลังกลับสู่บัญชีแอดมิน...",await Ye(T),window.location.replace("dashboard.html")}catch(y){console.error("Cannot end impersonation:",y),j.disabled=!1,j.textContent="← ออกจากโหมดนี้",k("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}}),t=!0}catch(u){console.error("Invalid impersonation session:",u),xn(),await T.auth.signOut(),k("เซสชันสวมบทบาทไม่ถูกต้อง กรุณาเข้าสู่ระบบแอดมินใหม่","error"),setTimeout(()=>window.location.replace("index.html"),1e3);return}if(!t){const u=await Tn();if(!u)return;if(await De(u.user.id),Q=n?await ye(n.id).catch(()=>[]):[],n!=null&&n.position||(c=n==null?void 0:n.positions)!=null&&c.length){const w=(b=n.positions)!=null&&b.length?n.positions:[n.position];z=await Ue(w).catch(()=>({}))}await ve(),Xe(n),Gt("teachers").catch(()=>{}),Ut("teacher").catch(()=>{})}Te(),ge(),Fn(),n!=null&&n.id&&Zn(n.id),n!=null&&n.id&&fo(),n!=null&&n.id&&po(),n!=null&&n.id&&uo(n.id),cn(),oo(),ao(),Tt(),n!=null&&n.profile_id&&At({profileId:n.profile_id,role:"teacher",name:n.full_name}),n!=null&&n.id&&v(()=>import("./teacher-views-donor-chat-Ccw2OW67.js"),__vite__mapDeps([57,1,2,3,4,5,6,10,16,47,48,12,8,27,7,28,49,50,29,51,30,9,52,53,13])).then(u=>{u.injectDonorChatWidget(n),he(ce)}),Yn(),he(ce);const o=document.getElementById("app-version");if(o&&(o.textContent=`v${an}`,oe)){o.classList.add("cursor-pointer","hover:underline");const u=(n==null?void 0:n.profile_id)||((f=(g=(await T.auth.getSession()).data.session)==null?void 0:g.user)==null?void 0:f.id);u&&o.addEventListener("click",()=>Fe(u,!0,!0))}!t&&(n!=null&&n.profile_id)&&oe&&Fe(n.profile_id,!1,!0),window.addEventListener("teacher-nav",async u=>{const{view:w,classId:L}=u.detail??{};if(w==="class-detail-sv"&&L){try{const j=await Qt(L);if(j){window._openStudentManager=()=>Promise.resolve(),window._openCombinedEditModal=()=>{},window._classCache={[j.id]:j};const{renderClassDetail:y}=await v(async()=>{const{renderClassDetail:_}=await import("./teacher-views-BeOZLsOo.js");return{renderClassDetail:_}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));if(await y(n,L,{supervisorMode:!0,classes:[j],defaultTab:"attendance"}),window._svBackToDetail){const _=window._svBackToDetail,R=window._backToClasses;window._backToClasses=()=>{const $=document.getElementById("main-content-bak"),F=document.getElementById("main-content");F&&(F.id="cd-tab-content"),$&&($.id="main-content"),_()}}setTimeout(()=>{document.querySelectorAll(".cd-tab").forEach(_=>{_.dataset.tab==="students"&&(_.style.display="none")}),document.querySelectorAll("button").forEach(_=>{const R=_.textContent.trim();["ทำสำเนา","แก้ไข","ลบ"].some($=>R.includes($))&&(_.style.display="none"),R.includes("ปพ.5")&&!R.includes("ดูภาพรวม")&&(_.innerHTML="📋 ดูภาพรวม ปพ.5")})},200)}}catch(j){console.error("supervisor class view error:",j)}return}L&&(window._sv_classId=L),P(w??"overview")}),document.querySelectorAll("[data-nav]").forEach(u=>{u.addEventListener("click",w=>{w.preventDefault(),P(u.dataset.nav)})}),(x=document.getElementById("btn-quick-attendance"))==null||x.addEventListener("click",u=>{u.preventDefault(),Pe("attendance")}),(p=document.getElementById("btn-quick-grades"))==null||p.addEventListener("click",u=>{u.preventDefault(),Pe("grades")}),(E=document.getElementById("btn-quick-leave-scanner"))==null||E.addEventListener("click",u=>{u.preventDefault(),qt()}),(M=document.getElementById("menu-dashboard"))==null||M.addEventListener("click",async u=>{u.preventDefault();const{openDashboardRoomPicker:w}=await v(async()=>{const{openDashboardRoomPicker:L}=await import("./teacher-views-dashboard-DhbvEKQG.js");return{openDashboardRoomPicker:L}},__vite__mapDeps([44,2,3,4,5,6]));w(n,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})}),vt(),jn(),Bn();const a=document.getElementById("sidebar"),s=document.getElementById("sidebar-overlay");(h=document.getElementById("btn-menu"))==null||h.addEventListener("click",()=>{a.classList.toggle("-translate-x-full");const u=!a.classList.contains("-translate-x-full");s.classList.toggle("hidden",!u),document.body.classList.toggle("mobile-sidebar-open",u)}),s==null||s.addEventListener("click",()=>{a.classList.add("-translate-x-full"),s.classList.add("hidden"),document.body.classList.remove("mobile-sidebar-open")}),(C=document.getElementById("btn-logout"))==null||C.addEventListener("click",async()=>{if(t){try{await Ye(T),window.location.replace("dashboard.html")}catch(u){console.error("Cannot end impersonation:",u),k("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}return}await T.auth.signOut(),bn(),k("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}),Ie(!1);const l=new URLSearchParams(window.location.search),d=l.get("setup")==="1",r=l.get("view");d?(P("setup"),history.replaceState({},"","teacher.html")):r&&gt[r]?(window._pendingQRTab=l.get("tab")||null,P(r)):P("overview")});export{Z as _,Se as a,ht as b};
