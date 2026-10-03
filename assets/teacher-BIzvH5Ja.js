const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-CWNu-rJ1.js","assets/ui-BRupvAcB.js","assets/api-J-Ak1T-Y.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/academic-term-switcher-BnvBvx15.js","assets/sync-Bgbsg-ec.js","assets/print-overlay-BVfxEd6n.js","assets/teacher-views-utils-D4PCqVsX.js","assets/teacher-views-classes-DL4zHYyC.js","assets/browser-JP79f-a9.js","assets/pp5-doc-x5ykYQ5S.js","assets/score-display-CQ4dUIPx.js","assets/storage-CuUjCgvI.js","assets/teacher-views-grades-BZQUk4FN.js","assets/regrade-api-DtUo0XvO.js","assets/score-qr-scanner-VY_3enml.js","assets/teacher-views-attendance-B8qX3FnK.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js","assets/views-DFKnUweL.js","assets/leave-monitor.js_v_10.18-HBhfoKqd.js","assets/workload-scheduler-C9WpzjbH.js","assets/import-CWvnWIc3.js","assets/theme-qDnPEUQn.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/azizgames-modal-CZNvwg6f.js","assets/sports-awards-admin-6oCPrlSb.js","assets/teacher-views-flashcards-CzNFTJr3.js","assets/teacher-views-certificates-h1tZX8oq.js","assets/certificate-engine-CN0kp0dY.js","assets/certificate-editor-CPm5WZt-.js","assets/teacher-views-quiz-banks-rSM1U-ly.js","assets/quiz-api-BIDUVPR5.js","assets/katex-loader-DUJObfzT.js","assets/teacher-views-exam-docs.js_v_10.22-C5_gAegi.js","assets/teacher-views-leave-scanner.js_v_10.18-BapuGWbG.js","assets/teacher-views-smart-classroom-D3DhAsOr.js","assets/teacher-KTKXfqj4.js","assets/promptpay-CIuxvxIA.js","assets/push-notify-DGb4Ysbu.js","assets/wen-sso-CcN06Rhh.js","assets/sports-portals.js_v_10.22-kVNs_U_9.js","assets/tutorial-C3EpULMT.js","assets/terangganu-api-C1IjZK4l.js","assets/teacher-views-quiz-monitor-DA1yIqRo.js","assets/teacher-views-quiz-analytics-Cq25asc_.js","assets/teacher-views-dashboard-B4a2-7-n.js","assets/lesson-plan-ai-workspace-BYoW1xGl.js","assets/supervisor-B9QXB6Pr.js","assets/student-views-BUKOlkJv.js","assets/student-api-CjEjxwy9.js","assets/teacher-views-donor-chat-CqRXptr9.js"])))=>i.map(i=>d[i]);
import{s as T}from"./supabase-BV-W2lsh.js";/* empty css             */import{a as E,_ as x,g as te,s as $e,i as Tt,c as Ct,A as At,d as Fe,e as Pt,f as jt}from"./ui-BRupvAcB.js";import{getMyClasses as pe,getSystemConfig as H,createSubject as st,getMasterSubjects as _e,updateSubjectAtomic as Rt,getCourseDocPage2 as Bt,saveCourseDocPage2 as Mt,deleteSubject as Dt,getTeacherPackageAccess as Nt,getMyPaymentRequests as Ot,createPaymentRequest as je,getSupporterRenewalQuote as ze,createSupporterRenewalPaymentRequest as Vt,uploadPaymentSlip as at,getMySchedule as Re,getClassScheduleLinks as Be,getPeriods as rt,linkClassToSchedule as Ht,unlinkClassFromSchedule as Ft,getMyTeacherProfile as ae,getTeacherById as Ge,getMyHomeroomRooms as ye,getTeacherPositionPermissions as Ue,updateLastSeen as zt,logLogin as Gt,getClassByIdFull as Ut,getMySubjects as ke,getMyDonationRequests as it,getMySupporterRenewalEntitlement as Qt,submitAppFeedback as Wt,getAcademicTerms as Yt,getPendingExamRequestCount as Kt,getActiveAnnouncements as Jt,getMyAcks as Zt,ackAnnouncementsBulk as Xt,getUnreadNotifications as en,markNotificationsRead as tn}from"./api-J-Ak1T-Y.js";import{p as Ie}from"./promptpay-CIuxvxIA.js";import{COPY_TEMPLATE_CONFIG as Qe,getCopyTemplateId as nn}from"./sync-Bgbsg-ec.js";import{a as lt}from"./theme-qDnPEUQn.js";import{b as on}from"./anti-pull-refresh-BGrI1pMY.js";import{i as sn,e as ct}from"./push-notify-DGb4Ysbu.js";import{_teacherPositionList as an,_teacherPositionLabel as rn}from"./teacher-views-utils-D4PCqVsX.js";import{b as ln,c as cn}from"./wen-sso-CcN06Rhh.js";import{o as dt}from"./azizgames-modal-CZNvwg6f.js";import{c as dn,r as mn,o as un,a as mt}from"./academic-term-switcher-BnvBvx15.js";import{getImpersonationContext as pn,validateImpersonation as bn,endImpersonation as We,clearImpersonation as fn}from"./impersonation-0xVfgYVY.js";import{openMyTeamWorkspace as gn,renderShirtVoteDashboard as xn,renderShirtVoteSettings as yn,renderSportsEvaluationWorkspace as vn,renderSportsCompetitionManager as hn,renderSportsOverviewAdmin as wn,renderSportsFundAdmin as ut,renderShirtSummary as pt,renderAdvisorStudents as _n}from"./sports-portals.js_v_10.22-kVNs_U_9.js";import{renderTutorial as kn}from"./tutorial-C3EpULMT.js";import{g as En}from"./terangganu-api-C1IjZK4l.js";import{g as Sn}from"./regrade-api-DtUo0XvO.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./sports-awards-admin-6oCPrlSb.js";import"./print-overlay-BVfxEd6n.js";import"./storage-CuUjCgvI.js";let n=null,Q=[],Y=!1,fe=!1,se=!1,z={},W={enabled:!0,teacher_menu:!0,student_menu:!0,public_page:!0};window._pp5DonorTierIndex=0;window._pp5SystemCfg={};window._pp5AcademicTerms=[];function Me(e=window._pp5SystemCfg){return mt({academic_year:Number((e==null?void 0:e.academicYear)??(e==null?void 0:e.academic_year)??2568),semester:Number((e==null?void 0:e.semester)??1)})}function Ln(){const e=Me();let t=null;try{t=localStorage.getItem(`pp5_teacher_grade_term_${n==null?void 0:n.id}`)}catch{}return window._pp5AcademicTerms.some(o=>mt(o)===t)?t:e}function $n(e){if(!(!e||!(n!=null&&n.id))){try{localStorage.setItem(`pp5_teacher_grade_term_${n.id}`,e)}catch{}if(e===Me()){j("overview");return}E("เลือกภาคเรียนย้อนหลังแล้ว — เปิดจากหน้าบันทึกคะแนน/ปพ.5 ได้ที่นี่","info"),j("grades")}}function In(){var s;const e=document.getElementById("page-title");if(!(e!=null&&e.parentElement)||!window._pp5AcademicTerms.length)return;let t=document.getElementById("teacher-term-switcher-wrap");t||(t=document.createElement("label"),t.id="teacher-term-switcher-wrap",t.className="hidden sm:flex items-center gap-2 ml-2 text-xs font-semibold text-gray-500",e.parentElement.appendChild(t));const o=Me();t.innerHTML=`<span class="whitespace-nowrap">กำลังดู</span>
    <select id="teacher-term-switcher" aria-label="เลือกภาคเรียนที่ต้องการดู"
      class="max-w-[170px] rounded-xl border border-indigo-200 bg-indigo-50 px-2.5 py-1.5 text-xs font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
      ${mn(window._pp5AcademicTerms,Ln(),o)}
    </select>`,(s=t.querySelector("select"))==null||s.addEventListener("change",a=>$n(a.target.value))}async function bt(){const[e,t]=await Promise.all([H().catch(()=>({})),Yt().catch(()=>[])]);window._pp5SystemCfg=e,window._pp5AcademicTerms=dn(t,e),In()}async function De(){try{const{data:e,error:t}=await T.from("settings").select("value").eq("key","sports_visibility").maybeSingle();!t&&(e!=null&&e.value)&&(W={...W,...e.value})}catch{}return W}async function qn(){$e(!0);const{data:{session:e}}=await T.auth.getSession();return e||(window.location.replace("index.html"),null)}async function Ne(e){var l,i,r;const[t,o,s]=await Promise.all([ae(e),T.auth.getSession(),T.from("profiles").select("role, is_also_admin").eq("id",e).maybeSingle()]);n=t,n&&(n.auth_email=((r=(i=(l=o==null?void 0:o.data)==null?void 0:l.session)==null?void 0:i.user)==null?void 0:r.email)??""),await lt("teacher",n??{});const a=s==null?void 0:s.data;Y=(a==null?void 0:a.is_also_admin)===!0,se=(a==null?void 0:a.role)==="admin"||Y;const c=document.querySelector("header .flex.items-center.gap-3:last-child");if(Y&&c&&!document.getElementById("btn-switch-admin")){const m=document.createElement("a");m.id="btn-switch-admin",m.href="dashboard.html",m.title="สลับไปหน้าแอดมิน",m.className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 shadow-sm border border-emerald-200/50 mr-1",m.innerHTML="<span>⚙️</span><span>สลับเป็นแอดมิน</span>",c.insertBefore(m,c.firstChild)}await De(),ft(n),await bt()}function ft(e){const t=document.querySelector("#sidebar nav"),o=an(e),s=rn(e);if(o.length>0&&t&&!document.getElementById("btn-sv-mode")){const d=document.createElement("button");d.id="btn-sv-mode",d.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition w-full text-left text-emerald-200 hover:bg-emerald-800 hover:text-white",d.style.color="#93c5fd",d.innerHTML=`<span>📊</span><span>Dashboard ${s}</span>`,d.onclick=He;const u=t.querySelector('[data-nav="work-calendar-view"]');u?u.insertAdjacentElement("afterend",d):t.insertBefore(d,t.firstChild)}Tn();const a=(e==null?void 0:e.full_name)??"ครูผู้สอน",c=e!=null&&e.teacher_code?`รหัส ${e.teacher_code}`:"",l=(e==null?void 0:e.image_url)??"",i=document.getElementById("t-avatar");l?i.innerHTML=`<img src="${l}" class="w-full h-full object-cover" />`:i.textContent=a.charAt(0).toUpperCase(),document.getElementById("t-name").textContent=a,document.getElementById("t-code").textContent=c,e!=null&&e.id&&Zn(e.id),document.getElementById("user-name").textContent=a;const r=document.getElementById("user-role-label");r&&(r.textContent=o.length?s:"ครูผู้สอน");const m=document.getElementById("user-avatar");l?m.innerHTML=`<img src="${l}" class="w-full h-full object-cover" />`:m.textContent=a.charAt(0).toUpperCase()}function Tn(){const e=document.getElementById("menu-sports-shortcut");if(!e)return;const t=W.enabled!==!1&&W.teacher_menu!==!1;e.classList.toggle("hidden",!t)}function Le(e,t){if(e.length===1){t(e[0].main_room);return}const o=document.createElement("div");o.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">🏠 เลือกห้องที่ปรึกษา</h3>
        <p class="text-xs text-gray-400 mt-1">คุณเป็นที่ปรึกษาหลายห้อง — เลือกห้องที่ต้องการ</p>
      </div>
      <div class="px-5 py-4 space-y-2">
        ${e.map(s=>`
        <button data-room="${s.main_room}"
          class="room-pick-btn w-full text-left px-4 py-3 rounded-xl border border-gray-200
                 hover:border-emerald-400 hover:bg-emerald-50 text-sm font-medium transition">
          ${s.main_room}
        </button>`).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="room-pick-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">ยกเลิก</button>
      </div>
    </div>`,document.body.appendChild(o),o.querySelectorAll(".room-pick-btn").forEach(s=>s.addEventListener("click",()=>{o.remove(),t(s.dataset.room)})),o.querySelector("#room-pick-cancel").addEventListener("click",()=>o.remove())}const gt={"announcements-view":()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderAnnouncementsView(n)),"work-calendar-view":()=>x(async()=>{const{renderWorkCalendarView:e,renderWorkCalendar:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderWorkCalendarView:e,renderWorkCalendar:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29])).then(({renderWorkCalendarView:e,renderWorkCalendar:t})=>z.work_calendar?t(n):e()),overview:()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderTeacherOverview(n,Q)),"my-courses":()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderMyCourses(n)),"my-classes":()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderMyClasses(n)),attendance:()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderAttendance(n)),"life-skill-score":()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>{const t=Q.filter(o=>o.category==="สามัญ");Le(t,o=>e.renderLifeSkillScore(n,t.filter(s=>s.main_room===o)))}),"reading-score":()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>{const t=window._pendingReadingRoom;window._pendingReadingRoom=null,e.renderReadingScore(n,t)}),"prayer-score":()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>{const t=Q.filter(o=>o.category==="ศาสนา");t.length===0?e.renderPrayerScore(n,[]):Le(t,o=>e.renderPrayerScore(n,t.filter(s=>s.main_room===o)))}),"prayer-monitor":()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>{const t=Q.filter(s=>s.category==="ศาสนา"),o=window._pendingPrayerMonitorRoom||null;window._pendingPrayerMonitorRoom=null,t.length===0?e.renderPrayerRoomMonitor(n,[]):o&&t.some(s=>s.main_room===o)?e.renderPrayerRoomMonitor(n,t,o):t.length===1?e.renderPrayerRoomMonitor(n,t,t[0].main_room):Le(t,s=>e.renderPrayerRoomMonitor(n,t,s))}),grades:()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderGrades(n)),requests:()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderRequests(n)),schedule:()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderSchedule(n)),tutorial:()=>kn(),flashcards:()=>x(()=>import("./teacher-views-flashcards-CzNFTJr3.js"),__vite__mapDeps([30,1,2,3,4,5,6,10])).then(e=>e.renderFlashcardDecks(n)),certificates:()=>x(()=>import("./teacher-views-certificates-h1tZX8oq.js"),__vite__mapDeps([31,1,32,3,9,33,15,10])).then(e=>e.renderCertificateManager(n)),"quiz-system":()=>x(()=>import("./teacher-views-quiz-banks-rSM1U-ly.js"),__vite__mapDeps([34,1,35,3,25,10,36])).then(e=>e.renderQuizBanks(n)),"exam-docs":()=>x(()=>import("./teacher-views-exam-docs.js_v_10.22-C5_gAegi.js"),__vite__mapDeps([37,2,3,4,5,6,1,9,10])).then(e=>e.renderExamDocuments(n)),sports:()=>{var o;const e=(o=n==null?void 0:n.positions)!=null&&o.length?n.positions:n!=null&&n.position?[n.position]:[],t=se||z.menu_sports_admin||e.includes("house_color_admin")||(n==null?void 0:n.staff_type)==="แอดมิน"||(n==null?void 0:n.position)==="admin";dt(t?{admin:!0,teacherName:n==null?void 0:n.full_name,teacherCode:n==null?void 0:n.teacher_code}:{})},"advisor-students":()=>_n(n,Q),"shirt-summary":()=>pt(),"sports-fund-admin":()=>ut(),"sports-overview-admin":()=>wn(),"sports-competition-manager":()=>hn(),"sports-evaluation":()=>vn(),"shirt-vote-settings":()=>yn(),"shirt-vote-dashboard":()=>xn(),"my-team-workspace":()=>gn(),"student-qr-print":()=>{const e=window._pendingQRClassId||null;window._pendingQRClassId=null,x(()=>import("./teacher-views-classes-DL4zHYyC.js").then(t=>t.t),__vite__mapDeps([11,1,2,3,4,5,6,12,8,13,14,9,10,15,16,17,18,19,20,21])).then(t=>t.renderStudentQRPrint(n,e,{isQrManager:fe}))},"student-leave-scanner":()=>{x(()=>import("./teacher-views-leave-scanner.js_v_10.18-BapuGWbG.js"),__vite__mapDeps([38,2,3,4,5,6,23,20,1,10])).then(e=>e.renderStudentLeaveScanner(n))},"smart-classroom":()=>{const e=window._pendingSmartClassroomId;window._pendingSmartClassroomId=null,x(()=>import("./teacher-views-smart-classroom-D3DhAsOr.js"),__vite__mapDeps([39,1,2,3,4,5,6,40,41,12,8,26,27,42,10,43,28,7,44,29,9,15,45,46,17,35,18,19,20,16,14,47,48,49,11,13,21,50])).then(t=>t.renderSmartClassroom(n,e))},"schedule-builder":()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderScheduleBuilder(n,()=>j("overview"))),profile:()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderProfile(n,Q,Fn)),setup:()=>x(()=>import("./teacher-views-CWNu-rJ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.renderProfileSetup(n,Q,zn))},Ye={teaching:{title:"งานสอน",items:[{selector:"#menu-my-courses",icon:"📖",label:"คอร์สวิชาของฉัน"},{selector:"#menu-my-classes",icon:"🏫",label:"ห้องเรียนของฉัน"},{selector:"#btn-quick-attendance",icon:"✅",label:"เช็คชื่อ"},{selector:"#btn-quick-grades",icon:"📝",label:"บันทึกคะแนน"},{selector:'[data-nav="schedule"]',icon:"🗓️",label:"ตารางสอน"},{selector:'[data-nav="requests"]',icon:"🔔",label:"คำร้องนักเรียน"},{selector:"#menu-dashboard",icon:"📈",label:"Dashboard ห้องเรียน"}]},students:{title:"นักเรียน",items:[{selector:"#btn-quick-leave-scanner",icon:"📷",label:"สแกนเอกสารนักเรียน"},{selector:"#menu-advisor-students",icon:"👥",label:"นักเรียนที่ปรึกษา"},{selector:'[data-nav="student-leave-scanner"]',icon:"📋",label:"ตรวจสอบใบอนุญาตออกนอกห้อง"},{selector:'[data-nav="student-qr-print"]',icon:"🖨️",label:"พิมพ์ QR Code นักเรียน"}]},tools:{title:"เครื่องมือ",items:[{selector:'[data-nav="flashcards"]',icon:"🃏",label:"บัตรคำศัพท์"},{selector:'[data-nav="quiz-system"]',icon:"📝",label:"แบบทดสอบออนไลน์"},{selector:'[data-nav="exam-docs"]',icon:"📄",label:"เอกสารช่วงสอบ"},{selector:'[data-nav="certificates"]',icon:"🏅",label:"ระบบเกียรติบัตร"},{selector:'[data-nav="tutorial"]',icon:"📖",label:"คู่มือการใช้งาน"}]},more:{title:"เพิ่มเติม",items:[{selector:'[data-nav="announcements-view"]',icon:"📢",label:"ประกาศ"},{selector:'[data-nav="work-calendar-view"]',icon:"📅",label:"ปฏิทินปฏิบัติงาน"},{selector:'[data-nav="life-skill-score"]',icon:"🌱",label:"คะแนนทักษะชีวิต"},{selector:'[data-nav="reading-score"]',icon:"📖",label:"คะแนนอ่านคิดวิเคราะห์"},{selector:'[data-nav="prayer-score"]',icon:"🕌",label:"คะแนนละหมาด"},{selector:"#menu-council",icon:"🏛️",label:"ระบบสภานักเรียน"},{selector:"#menu-terangganu",icon:"⚜️",label:"ค่าย TERANGGANU 2026"},{selector:"#menu-regrade",icon:"📋",label:"แก้ค้างเก่า"},{selector:"#menu-sports-shortcut",icon:"🏆",label:"ระบบกีฬาสี"},{selector:"#menu-my-team",icon:"🛡️",label:"จัดการสีของฉัน"},{selector:"#menu-shirt-summary",icon:"📦",label:"สรุปยอดเสื้อกีฬาสี"},{selector:"#menu-sports-fund-admin",icon:"💰",label:"บัญชีเงินกีฬาสี"},{selector:"#menu-sports-overview-admin",icon:"📊",label:"ภาพรวมกีฬาสี"},{selector:"#menu-sports-competition-manager",icon:"🏟️",label:"รายการแข่งขันของฉัน"},{selector:"#menu-sports-checkin",icon:"📷",label:"รับรายงานตัวนักกีฬา"},{selector:"#menu-sports-evaluation",icon:"🧑‍⚖️",label:"ประเมินกีฬาสี"},{selector:"#menu-shirt-vote-dashboard",icon:"🗳️",label:"ผลโหวตแบบเสื้อ"},{selector:"#menu-qr-reissue-requests",icon:"🎫",label:"พิมพ์/คำขอ QR Code"}]}},Cn={overview:"home","my-courses":"teaching","my-classes":"teaching",grades:"teaching",requests:"teaching",schedule:"teaching","advisor-students":"students","student-qr-print":"students","student-leave-scanner":"students",flashcards:"tools","quiz-system":"tools","exam-docs":"tools",certificates:"tools",tutorial:"tools","announcements-view":"more","work-calendar-view":"more","life-skill-score":"more","reading-score":"more","prayer-score":"more",sports:"more","shirt-summary":"more","sports-fund-admin":"more","sports-overview-admin":"more","sports-competition-manager":"more","sports-evaluation":"more","shirt-vote-dashboard":"more","my-team-workspace":"more"},ge={teaching:0,more:0,moreAnnouncements:0,moreRegrade:0};function xt(e,t){const o=Math.max(0,Number(t)||0);ge[e]=o;const s=document.querySelector(`[data-mobile-badge="${e}"]`);s&&(o>0?(s.textContent=o>99?"99+":String(o),s.classList.remove("hidden")):s.classList.add("hidden"))}function qe(e,t){ge[e]=Math.max(0,Number(t)||0),xt("more",ge.moreAnnouncements+ge.moreRegrade)}function An(e){return!e||e.closest(".hidden")||e.classList.contains("hidden")?!1:window.getComputedStyle(e).display!=="none"}function yt(e){return[...document.querySelectorAll(e)].find(An)||null}function ne(e=null){const t=document.getElementById("mobile-nav-sheet"),o=document.getElementById("mobile-nav-backdrop"),s=document.getElementById("mobile-nav-sheet-items"),a=document.getElementById("mobile-nav-sheet-title");if(!t||!o||!s||!a)return;const c=!!(e&&Ye[e]);if(document.querySelectorAll("[data-mobile-group]").forEach(r=>{const m=c&&r.dataset.mobileGroup===e;r.classList.toggle("active",m),r.setAttribute("aria-expanded",m?"true":"false")}),t.classList.toggle("mobile-nav-open",c),o.classList.toggle("mobile-nav-open",c),t.setAttribute("aria-hidden",c?"false":"true"),o.setAttribute("aria-hidden",c?"false":"true"),!c)return;const l=Ye[e];a.textContent=l.title,s.replaceChildren();const i=l.items.map(r=>({...r,source:yt(r.selector)})).filter(r=>r.source);if(!i.length){const r=document.createElement("p");r.className="mobile-nav-sheet-empty",r.textContent="ยังไม่มีเมนูสำหรับบัญชีนี้",s.append(r);return}i.forEach(r=>{const m=document.createElement("button");m.type="button",m.className="mobile-nav-sheet-item",m.innerHTML=`<span class="mobile-nav-sheet-item-icon" aria-hidden="true">${r.icon}</span><span>${r.label}</span>`,m.addEventListener("click",()=>{ne(),r.source.click()}),s.append(m)})}function Pn(){var o,s,a,c;const e=()=>yt('[data-nav="overview"]');document.querySelectorAll("[data-mobile-group]").forEach(l=>{l.addEventListener("click",()=>{var m;const i=l.dataset.mobileGroup;if(i==="home"){ne(),(m=e())==null||m.click();return}const r=l.getAttribute("aria-expanded")==="true";ne(r?null:i)})}),(o=document.getElementById("mobile-nav-backdrop"))==null||o.addEventListener("click",()=>ne()),(s=document.getElementById("mobile-nav-sheet-close"))==null||s.addEventListener("click",()=>ne()),document.addEventListener("keydown",l=>{l.key==="Escape"&&ne()});let t=null;(a=document.getElementById("mobile-nav-sheet"))==null||a.addEventListener("touchstart",l=>{var i;t=((i=l.touches[0])==null?void 0:i.clientY)??null},{passive:!0}),(c=document.getElementById("mobile-nav-sheet"))==null||c.addEventListener("touchend",l=>{var r;if(t===null)return;(((r=l.changedTouches[0])==null?void 0:r.clientY)??t)-t>55&&ne(),t=null},{passive:!0}),window._mobileNavSync=l=>{const i=Cn[l]||null;document.querySelectorAll("[data-mobile-group]").forEach(r=>{r.classList.toggle("active",r.dataset.mobileGroup===i&&r.getAttribute("aria-expanded")!=="true")})}}function ee(e){var m,d;const t=document.getElementById("mobile-profile-sheet"),o=document.getElementById("mobile-profile-backdrop");if(!t||!o||(t.classList.toggle("mobile-profile-open",e),o.classList.toggle("mobile-profile-open",e),t.setAttribute("aria-hidden",e?"false":"true"),o.setAttribute("aria-hidden",e?"false":"true"),!e))return;const s=(n==null?void 0:n.full_name)||((m=document.getElementById("user-name"))==null?void 0:m.textContent)||"ครูผู้สอน",a=n!=null&&n.teacher_code?`รหัส ${n.teacher_code}`:"",c=(n==null?void 0:n.category)||((d=document.getElementById("user-role-label"))==null?void 0:d.textContent)||"ครูผู้สอน",l=document.getElementById("mobile-profile-name"),i=document.getElementById("mobile-profile-meta"),r=document.getElementById("mobile-profile-avatar");if(l&&(l.textContent=s),i&&(i.textContent=[a,c].filter(Boolean).join(" · ")||"ครูผู้สอน"),r){r.replaceChildren();const u=document.querySelector("#user-avatar img");if(u){const b=u.cloneNode(!0);b.removeAttribute("class"),r.append(b)}else r.textContent=s.trim().charAt(0).toUpperCase()||"ค"}}function jn(){var o,s,a,c,l,i;const e=document.getElementById("user-avatar"),t=()=>ee(!0);e==null||e.addEventListener("click",t),e==null||e.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),t())}),(o=document.getElementById("mobile-profile-close"))==null||o.addEventListener("click",()=>ee(!1)),(s=document.getElementById("mobile-profile-backdrop"))==null||s.addEventListener("click",()=>ee(!1)),(a=document.getElementById("mobile-profile-edit"))==null||a.addEventListener("click",()=>{ee(!1),j("profile")}),(c=document.getElementById("mobile-profile-password"))==null||c.addEventListener("click",()=>{ee(!1),window._profileFocus="password",j("profile")}),(l=document.getElementById("mobile-profile-contact"))==null||l.addEventListener("click",()=>{ee(!1);const r=document.getElementById("btn-contact-admin");r?r.click():typeof window._openFeedbackWidget=="function"?window._openFeedbackWidget():E("ยังโหลดช่องทางติดต่อไม่เสร็จ กรุณาลองอีกครั้ง","info")}),(i=document.getElementById("mobile-profile-logout"))==null||i.addEventListener("click",()=>{var r;ee(!1),(r=document.getElementById("btn-logout"))==null||r.click()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&ee(!1)})}const Ke=[{key:"courses",icon:"📚",title:"รายวิชาและภาพรวม",defaultOpen:!0,selectors:['[data-nav="overview"]',"#menu-my-courses","#menu-my-classes","#menu-dashboard"]},{key:"teaching",icon:"🧑‍🏫",title:"งานสอนประจำวัน",defaultOpen:!0,selectors:["#daily-work-section"]},{key:"students",icon:"👥",title:"นักเรียน",defaultOpen:!1,selectors:["#menu-advisor-students"]},{key:"semester",icon:"📋",title:"งานรายภาคเรียน",defaultOpen:!1,selectors:["#sem-work-section"]},{key:"sports",icon:"🏆",title:"ระบบกีฬาสี",defaultOpen:!1,selectors:["#menu-sports-shortcut","#menu-my-team","#menu-shirt-summary","#menu-sports-fund-admin","#menu-sports-overview-admin","#menu-sports-competition-manager","#menu-sports-checkin","#menu-awards-group","#menu-sports-evaluation","#menu-shirt-vote-dashboard","#menu-qr-reissue-requests"]},{key:"general",icon:"📢",title:"ประกาศและกิจกรรม",defaultOpen:!0,selectors:['[data-nav="announcements-view"]','[data-nav="work-calendar-view"]',"#btn-sv-mode","#menu-council","#menu-terangganu","#menu-regrade"]},{key:"tools",icon:"🧰",title:"เครื่องมือและคู่มือ",defaultOpen:!1,selectors:['[data-nav="certificates"]','[data-nav="tutorial"]']}],Je=new WeakSet,Rn={overview:"courses","my-courses":"courses","my-classes":"courses",attendance:"teaching",grades:"teaching",requests:"teaching",schedule:"teaching",flashcards:"teaching","quiz-system":"teaching","exam-docs":"teaching","student-qr-print":"teaching","student-leave-scanner":"teaching","advisor-students":"students","life-skill-score":"semester","reading-score":"semester","prayer-score":"semester",sports:"sports","shirt-summary":"sports","sports-fund-admin":"sports","sports-overview-admin":"sports","sports-competition-manager":"sports","sports-evaluation":"sports","shirt-vote-dashboard":"sports","my-team-workspace":"sports","announcements-view":"general","work-calendar-view":"general",certificates:"tools",tutorial:"tools"};function Oe(e,t,o=!0){e.classList.toggle("is-collapsed",!t);const s=e.querySelector(".sidebar-menu-group-toggle");if(s==null||s.setAttribute("aria-expanded",t?"true":"false"),o)try{localStorage.setItem(`pp5_teacher_sidebar_group_${e.dataset.sidebarGroup}`,t?"1":"0")}catch{}}function Bn(e){const t=e.querySelector(".sidebar-menu-group-toggle");!t||Je.has(t)||(Je.add(t),t.addEventListener("click",()=>{const o=t.getAttribute("aria-expanded")==="true";Oe(e,!o)}))}function vt(){const e=document.querySelector("#sidebar nav");if(e){if(!e.querySelector(":scope > .sidebar-menu-group")){const t=new Set,o=Ke.map(s=>{const a=document.createElement("section");a.className="sidebar-menu-group",a.dataset.sidebarGroup=s.key;const c=document.createElement("button");c.type="button",c.className="sidebar-menu-group-toggle",c.innerHTML=`<span class="sidebar-menu-group-toggle-label"><span aria-hidden="true">${s.icon}</span><span>${s.title}</span></span><span class="sidebar-menu-group-chevron" aria-hidden="true">⌄</span>`;const l=document.createElement("div");return l.className="sidebar-menu-group-items",s.selectors.forEach(i=>{var m;const r=e.querySelector(i);!r||t.has(r)||(t.add(r),(m=r.querySelector(":scope > p"))==null||m.classList.add("sidebar-group-legacy-label"),l.append(r))}),a.append(c,l),a}).filter(s=>{var a;return(a=s.querySelector(".sidebar-menu-group-items"))==null?void 0:a.children.length});e.replaceChildren(...o)}e.querySelectorAll(":scope > .sidebar-menu-group").forEach(t=>{const o=Ke.find(a=>a.key===t.dataset.sidebarGroup);let s=null;try{s=localStorage.getItem(`pp5_teacher_sidebar_group_${t.dataset.sidebarGroup}`)}catch{}Oe(t,s===null?!!(o!=null&&o.defaultOpen):s==="1",!1),Bn(t)})}}function Mn(e){const t=Rn[e];if(!t)return;const o=document.querySelector(`#sidebar .sidebar-menu-group[data-sidebar-group="${t}"]`);o&&Oe(o,!0,!1)}let me="overview";async function j(e){var o;if(!(n!=null&&n.id))try{const{data:{user:s}}=await T.auth.getUser();s!=null&&s.id&&(n=await ae(s.id).catch(()=>null)??n)}catch{}if(document.body.classList.remove("sc-fullscreen"),window._scClockInterval&&(clearInterval(window._scClockInterval),window._scClockInterval=null),window._scQuizPollInterval&&(clearInterval(window._scQuizPollInterval),window._scQuizPollInterval=null),typeof window._cleanupLeaveScanner=="function")try{window._cleanupLeaveScanner()}catch{}if(typeof window._cleanupPrayerRoomMonitor=="function")try{window._cleanupPrayerRoomMonitor()}catch{}if(typeof window._cleanupAdvisorShirtPaymentScanner=="function")try{window._cleanupAdvisorShirtPaymentScanner()}catch{}if(typeof window._cleanupDonorChat=="function")try{window._cleanupDonorChat()}catch{}const t=gt[e];t&&(me=e,t()),he(e),(o=window._mobileNavSync)==null||o.call(window,e),Mn(e)}window._navTo=j;window._goBack=()=>j("my-courses");window._refreshCurrentView=()=>j(me);window.addEventListener("pp5:open-sports-shirt-summary",()=>j("shirt-summary"));window.addEventListener("pp5:open-shirt-vote-settings",()=>j("shirt-vote-settings"));window.addEventListener("pp5:open-shirt-vote-dashboard",()=>j("shirt-vote-dashboard"));const q=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Z=(e,t)=>{const o=parseInt(e,10);return Number.isFinite(o)&&o>0?o:t};function Dn(e){return[1,2,3,4].map(t=>(e[`donationGeminiKey${t}`]??"").trim()).filter(Boolean)}async function Nn(e,t,{maxTokens:o=1024}={}){var l,i,r,m,d;const{data:s,error:a}=await T.functions.invoke("gemini-proxy",{body:{keyType:"donation",prompt:t,maxTokens:o}});if(a)throw new Error(a.message??"Edge Function error");if(s!=null&&s.error)throw new Error(s.error.message??"Gemini error");return{text:((d=(m=(r=(i=(l=s==null?void 0:s.candidates)==null?void 0:l[0])==null?void 0:i.content)==null?void 0:r.parts)==null?void 0:m[0])==null?void 0:d.text)??"",keyIndex:1}}window._callDonationAI=Nn;window._getDonationGeminiKeys=Dn;const Ve=e=>{const t=String(e.donationSpecialFeatures??"").trim();return(t?t.split(`
`).map(a=>a.trim()).filter(Boolean).map(a=>{const c=a.split("|").map(m=>m.trim()),l=c[0]||"✨",i=c[1]||c[0]||a,r=parseInt(c[2])||1;return{icon:l,text:i,minTier:r}}):[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",3],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",3],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",4],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",5],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",5],["🎲","สุ่มรายชื่อนักเรียน/แบ่งกลุ่มนักเรียน",1],["👑","Smart Classroom — หน้าควบคุมขณะสอนสด รวมเครื่องมือทั้งหมด",4],["✨","ดึงข้อมูลการมาเรียนในระบบดูแลในคลิกเดียว",2],["💬","แชทครูผู้สนับสนุน — คุยตรงกับแอดมิน/ครูโดเนทคนอื่นแบบเรียลไทม์",1],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]].map(([a,c,l])=>({icon:a,text:c,minTier:l}))).filter(a=>a.text)},ht=(e,t,o)=>{var a;if(!o)return 0;const s=(a=[...t].map((c,l)=>({t:c,i:l})).reverse().find(({t:c})=>o>=c.amount))==null?void 0:a.i;return s!==void 0?s+1:0},Ee=(e,t,o)=>{const s=String(e.donationStickerTiers??"").trim();return(s?s.split(`
`).map(i=>i.trim()).filter(Boolean).map(i=>{const[r,m,d,u,b]=i.split("|").map(v=>v.trim());return{amount:Z(r,0),sticker:m||"🏅",title:d||`ผู้สนับสนุน ${r||""} บาท`,note:u||"ขอบคุณที่ช่วยสนับสนุนการพัฒนาระบบครับ",color:b||""}}):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([i,r,m,d,u])=>({amount:i,sticker:r,title:m,note:d,color:u}))).filter(i=>i.amount>0).sort((i,r)=>i.amount-r.amount).map((i,r)=>{const m=e[`donationStickerImg${r+1}`]??"";return m&&/^https?:\/\//.test(m)?{...i,sticker:m}:i})},Ze=e=>{if(!e)return"";const t=String(e.sticker??"");return`
    <div class="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-3 shadow-sm">
      ${/^https?:\/\//.test(t)?`<img src="${q(t)}" class="w-14 h-14 object-contain drop-shadow-md" />`:`<div class="w-14 h-14 flex items-center justify-center text-3xl">${q(t||"🏅")}</div>`}
      <div class="min-w-0">
        <p class="text-sm font-bold text-amber-900">${q(e.title)}</p>
        <p class="text-[11px] text-amber-700 leading-relaxed">${q(e.note)}</p>
      </div>
    </div>`},On=e=>`https://docs.google.com/spreadsheets/d/${encodeURIComponent(e)}/copy`;async function wt(){var l;const e=await H().catch(()=>({})),t={start:[{key:"สามัญ",label:"📚 สามัญ"},{key:"ศาสนา",label:"🕌 ศาสนา"}],สามัญ:Qe.filter(i=>i.category==="สามัญ"),ศาสนา:Qe.filter(i=>i.category==="ศาสนา")},o=["start"];(l=document.getElementById("standalone-copy-modal"))==null||l.remove();const s=document.createElement("div");s.id="standalone-copy-modal",s.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`<div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div>
        <h3 class="text-xl font-bold text-pink-500 leading-tight">สร้างสำเนาไฟล์ ปพ5Online</h3>
        <p class="text-xs text-gray-400 mt-1">สำหรับใช้งานไฟล์ Google Sheet แบบเดิม</p>
      </div>
      <button id="copy-flow-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div id="copy-flow-app"></div>
  </div>`,document.body.appendChild(s);const a=s.querySelector("#copy-flow-app"),c=()=>{var m;const i=o[o.length-1],r=t[i]||[];a.innerHTML=`
      <div class="text-center text-lg text-gray-600 mb-4">${o.length===1?"เลือกหมวดหมู่":"เลือกกลุ่ม/ประเภท"}</div>
      <div class="flex flex-col gap-3">
        ${r.map(d=>{const u=d.defaultId?nn(e,d.key):"";return u?`
            <a href="${On(u)}" target="_blank" rel="noopener noreferrer"
              class="w-full ${d.color||"bg-gradient-to-r from-pink-400 to-green-400"} text-white font-semibold py-3 rounded-2xl shadow-md hover:scale-[1.02] transition-all text-center block text-lg">
              🔗 เปิดไฟล์: ${q(d.label)}
            </a>`:`
            <button data-next="${q(d.key)}"
              class="copy-flow-next w-full bg-pink-200 hover:bg-pink-300 text-pink-700 font-medium py-3 rounded-2xl shadow text-lg transition-all">
              ${q(d.label)}
            </button>`}).join("")}
      </div>
      ${o.length>1?'<button id="copy-flow-back" class="mt-6 text-sm text-gray-400 underline hover:text-pink-400 transition-all">⬅️ ย้อนกลับ</button>':""}`,a.querySelectorAll(".copy-flow-next").forEach(d=>{d.addEventListener("click",()=>{o.push(d.dataset.next),c()})}),(m=a.querySelector("#copy-flow-back"))==null||m.addEventListener("click",()=>{o.length>1&&o.pop(),c()})};s.querySelector("#copy-flow-close").addEventListener("click",()=>s.remove()),s.addEventListener("click",i=>{i.target===s&&s.remove()}),c()}window._openStandaloneCopyFlow=wt;window._showQuotaFromOverview=()=>{Promise.all([pe((n==null?void 0:n.id)??null).catch(()=>[]),H().catch(()=>({}))]).then(([e,t])=>ue(e.length,null,t)).catch(()=>ue(0,null,{}))};window._openWenDuty=e=>{var o;(o=document.getElementById("wen-duty-modal"))==null||o.remove();const t=document.createElement("div");t.id="wen-duty-modal",t.className="fixed inset-0 z-[300] bg-white flex flex-col",t.innerHTML=`
    <div class="flex items-center justify-between px-4 py-2 bg-amber-600 text-white shadow flex-shrink-0">
      <span class="font-bold text-sm flex items-center gap-2">🛡️ ระบบเวรประจำวัน</span>
      <button id="wen-duty-close" class="text-white text-2xl leading-none px-2 hover:opacity-75">×</button>
    </div>
    <iframe src="${ln(e)}" class="flex-1 w-full border-0"></iframe>`,document.body.appendChild(t),t.querySelector("#wen-duty-close").addEventListener("click",()=>t.remove())};window._openLifeSkillScore=e=>j("life-skill-score");window._openReligionScore=e=>j("prayer-score");window._openReligionPrayerMonitor=e=>{window._pendingPrayerMonitorRoom=e||null,j("prayer-monitor")};window._openReadingScore=()=>{window._pendingReadingRoom=null,j("reading-score")};window._openReadingScoreRoom=e=>{window._pendingReadingRoom=e,j("reading-score")};window._openReadingScorePicker=e=>{var s;let t=[];try{t=JSON.parse(e.replace(/&quot;/g,'"'))}catch{t=[]}if(!t.length){E("ยังไม่มีห้องเรียน — ลงทะเบียนห้องก่อนบันทึกคะแนน","warning");return}(s=document.getElementById("rsp-modal"))==null||s.remove();const o=document.createElement("div");o.id="rsp-modal",o.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800">📖 เลือกห้องบันทึกคะแนน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อ่านคิดวิเคราะห์และเขียน</p>
        </div>
        <button id="rsp-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
      </div>
      <div class="p-4 grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
        ${t.map(a=>`
        <button class="rsp-room px-3 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-800
                       text-sm font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition text-center"
          data-room="${a}">${a}</button>`).join("")}
      </div>
    </div>`,document.body.appendChild(o),o.querySelector("#rsp-close").addEventListener("click",()=>o.remove()),o.addEventListener("click",a=>{a.target===o&&o.remove()}),o.querySelectorAll(".rsp-room").forEach(a=>{a.addEventListener("click",()=>{o.remove(),window._openReadingScoreRoom(a.dataset.room)})})};let be=null,le=null,ce=null,de=null;async function Te(){if(n)try{const e=await Kt(n.id),t=document.getElementById("badge-requests");if(t&&(e>0?(t.textContent=e>99?"99+":e,t.classList.remove("hidden")):t.classList.add("hidden")),xt("teaching",e),be!==null&&e>be){const o=e-be;E(`🔔 มีคำร้องนักเรียนใหม่ ${o} รายการ`,"info")}be=e}catch{}}function _t(e){var l,i,r;const t=Math.max(0,Number(e)||0);qe("moreRegrade",t);const o=t>99?"99+":String(t),s=document.getElementById("menu-regrade");(l=s==null?void 0:s.querySelector("[data-regrade-menu-badge]"))==null||l.remove(),s&&t>0&&s.insertAdjacentHTML("beforeend",`<span data-regrade-menu-badge class="ml-auto min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold inline-flex items-center justify-center">${o}</span>`);const a=document.getElementById("teacher-regrade-overview-tile");(i=a==null?void 0:a.querySelector("[data-icon-tile-badge]"))==null||i.remove(),a&&t>0&&a.insertAdjacentHTML("afterbegin",`<span data-icon-tile-badge class="absolute -top-1 right-1 z-10 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-extrabold flex items-center justify-center shadow">${o}</span>`);const c=(r=window._teacherOverviewSystems)==null?void 0:r.find(m=>m.key==="regrade");c&&(c.badge=t)}async function Ce(){if(n)try{const{count:e,error:t}=await T.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",n.id).eq("status","จำนงแล้ว");if(t)throw t;const o=Number(e)||0;_t(o),le!==null&&o>le&&E(`🔔 มีคำร้องแก้ค้างเก่าใหม่ ${o-le} รายการ`,"info"),le=o}catch{}}function Vn(){if(ce)return;ce=setInterval(()=>{document.visibilityState==="visible"&&(Te(),Ce())},3e4),de=()=>{document.visibilityState==="visible"&&(Te(),Ce())},document.addEventListener("visibilitychange",de),window._cleanupTeacherPolling=Hn}function Hn(){ce&&clearInterval(ce),ce=null,de&&document.removeEventListener("visibilitychange",de),de=null}async function ve(){var V,X,k,I,U,A,K;const e=Q.some(O=>O.category==="สามัญ"),t=(n==null?void 0:n.dept)==="THAI";let o=Q.some(O=>O.category==="ศาสนา");const s=(O,D)=>Promise.resolve(O).catch(()=>D),[a,c,l,i,r,m,d,u,b,v,y]=await Promise.all([s(H(),{}),n?s(T.from("profiles").select("role").eq("id",n.profile_id).maybeSingle(),{data:null}):Promise.resolve({data:null}),s(T.rpc("get_terangganu_access"),{data:null}),s(T.from("sports_team_memberships").select("id,role,permissions").eq("profile_id",n==null?void 0:n.profile_id).eq("is_active",!0),{data:[]}),s(T.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle(),{data:null}),s(T.from("sports").select("id,event_id").eq("responsible_teacher_id",n==null?void 0:n.profile_id).eq("is_active",!0),{data:[]}),s(T.from("qr_reissue_managers").select("profile_id").eq("profile_id",n==null?void 0:n.profile_id).maybeSingle(),{data:null}),s(Sn(),{}),n?s(T.from("regrade_subjects").select("id",{count:"exact",head:!0}).eq("teacher_id",n.id).eq("status","จำนงแล้ว"),{count:0}):Promise.resolve({count:0}),s(T.from("sports_score_evaluators").select("id").eq("profile_id",n==null?void 0:n.profile_id).eq("is_active",!0),{data:[]}),s(T.rpc("sports_awards_access"),{data:null})]);if(!o&&n){const O=(a.prayerScannerTeachers||"").split(/[\s,]+/).map(Se=>Se.trim()).filter(Boolean),D=(c==null?void 0:c.data)??null;(O.includes(n.teacher_code)||n.staff_type==="แอดมิน"||n.position==="admin"||(D==null?void 0:D.role)==="admin")&&(o=!0)}const f=(O,D)=>{const J=document.getElementById(O);J&&(J.classList.toggle("hidden",!D),J.classList.toggle("flex",D))},L=(O,D)=>{var J;(J=document.getElementById(O))==null||J.classList.toggle("hidden",!D)},M=Q.length>0,h=(V=n==null?void 0:n.positions)!=null&&V.length?n.positions:n!=null&&n.position?[n.position]:[],C=h.includes("executive")||Y,p=h.includes("executive");f("menu-life-skill",e),f("menu-reading",t),f("menu-prayer",o),f("menu-advisor-students",M),f("menu-council",a.council_visible_to_all!=="false"||Y||C),f("menu-my-courses",!p),f("menu-my-classes",!p),f("menu-dashboard",!p),L("daily-work-section",!p),L("sem-work-section",!p);const w=l==null?void 0:l.data;f("menu-terangganu",(w==null?void 0:w.is_manager)===!0||(w==null?void 0:w.teacher_participant)===!0),f("menu-regrade",((X=u.visibility)==null?void 0:X.teacher_menu)===!0||Y);const S=Number(b==null?void 0:b.count)||0;_t(S);const R=(i==null?void 0:i.data)||[];f("menu-my-team",R.length>0);const g=se||z.menu_sports_admin||h.includes("house_color_admin")||(n==null?void 0:n.staff_type)==="แอดมิน"||(n==null?void 0:n.position)==="admin",_=(k=r==null?void 0:r.data)==null?void 0:k.id,P=((m==null?void 0:m.data)||[]).some(O=>!_||O.event_id===_),$=W.enabled!==!1&&W.teacher_menu!==!1&&!!_;f("menu-sports-competition-manager",!!(g||P||$)),f("menu-sports-checkin",W.enabled!==!1&&W.teacher_menu!==!1);const F=g||R.some(O=>{var D;return O.role==="lead_teacher"||((D=O.permissions)==null?void 0:D.shirt_summary)===!0});f("menu-shirt-summary",!!F),f("menu-sports-fund-admin",!!g),f("menu-sports-overview-admin",!!g);const G=g||((I=v==null?void 0:v.data)==null?void 0:I.length)>0;f("menu-sports-evaluation",!!G),L("menu-awards-group",((U=y==null?void 0:y.data)==null?void 0:U.allowed)===!0);let N=!1;try{const O=((A=r==null?void 0:r.data)==null?void 0:A.id)||"00000000-0000-0000-0000-000000000001",{data:D}=await T.from("sports_shirt_vote_managers").select("id").eq("event_id",O).eq("profile_id",n==null?void 0:n.profile_id).maybeSingle();N=!!D}catch{N=!1}f("menu-shirt-vote-dashboard",!!(g||N)),fe=!!(d!=null&&d.data),f("menu-qr-reissue-requests",fe);const B=W.enabled!==!1&&W.teacher_menu!==!1;window._teacherOverviewSystems=[{key:"council",show:a.council_visible_to_all!=="false"||Y||C,emoji:"🏛️",label:"สภา<br>นักเรียน",href:"council.html"},{key:"terangganu",show:(w==null?void 0:w.is_manager)===!0||(w==null?void 0:w.teacher_participant)===!0,emoji:"⚜️",label:"ค่าย<br>TERANGGANU",href:"terangganu.html"},{key:"regrade",id:"teacher-regrade-overview-tile",show:((K=u.visibility)==null?void 0:K.teacher_menu)===!0||Y,emoji:"📋",label:"แก้ค้าง<br>เก่า",href:"regrade.html",badge:S},{key:"sports",show:B,emoji:"🏆",label:"กีฬาสี",nav:"sports"},{key:"certificates",show:!0,emoji:"🏅",label:"เกียรติ<br>บัตร",nav:"certificates"},{key:"advisor-students",show:M,emoji:"👥",label:"นักเรียน<br>ที่ปรึกษา",nav:"advisor-students"},{key:"my-team",show:R.length>0,emoji:"🛡️",label:"จัดการ<br>สีของฉัน",nav:"my-team-workspace"},{key:"shirt-summary",show:!!F,emoji:"📦",label:"สรุปยอด<br>เสื้อกีฬาสี",nav:"shirt-summary"},{key:"sports-fund",show:!!g,emoji:"💰",label:"บัญชีเงิน<br>กีฬาสี",nav:"sports-fund-admin"},{key:"sports-overview",show:!!g,emoji:"📊",label:"ภาพรวม<br>กีฬาสี",nav:"sports-overview-admin"},{key:"sports-competition-manager",show:!!(g||P||$),emoji:"🏟️",label:"รายการแข่งขัน<br>ของฉัน",nav:"sports-competition-manager"},{key:"sports-evaluation",show:!!G,emoji:"🧑‍⚖️",label:"ประเมิน<br>กีฬาสี",nav:"sports-evaluation"},{key:"shirt-vote",show:!!(g||N),emoji:"🗳️",label:"ผลโหวต<br>แบบเสื้อ",nav:"shirt-vote-dashboard"},{key:"qr-print",show:fe,emoji:"🎫",label:"พิมพ์/คำขอ<br>QR",nav:"student-qr-print"},{key:"prayer-score",show:o,emoji:"🕌",label:"คะแนน<br>ศาสนา",nav:"prayer-score"}],le=S}async function Fn(e){n=await ae(e),Q=n?await ye(n.id).catch(()=>[]):[],await Ne(e),await ve(),j("profile")}async function zn(e){n=await ae(e),Q=n?await ye(n.id).catch(()=>[]):[],await Ne(e),await ve(),j("schedule-builder")}window._openCourseForm=async()=>{const{renderCourseForm:e}=await x(async()=>{const{renderCourseForm:t}=await import("./teacher-views-CWNu-rJ1.js");return{renderCourseForm:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));e(n,async(t,o=[])=>{await st(t,o)})};window._editCourse=async e=>{const o=(n?await ke(n.id).catch(()=>[]):await _e().catch(()=>[])).find(a=>a.id===e);if(!o){E("ไม่พบข้อมูลคอร์ส","error");return}const{renderCourseForm:s}=await x(async()=>{const{renderCourseForm:a}=await import("./teacher-views-CWNu-rJ1.js");return{renderCourseForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));s(n,async(a,c=[])=>{await Rt(e,a,c)},o)};window._copyCourse=async e=>{const o=(n?await ke(n.id).catch(()=>[]):await _e().catch(()=>[])).find(a=>a.id===e);if(!o){E("ไม่พบข้อมูลคอร์สต้นฉบับ","error");return}const{renderCourseForm:s}=await x(async()=>{const{renderCourseForm:a}=await import("./teacher-views-CWNu-rJ1.js");return{renderCourseForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));s(n,async(a,c=[])=>{const l=await st(a,c);try{const i=await Bt(e);if(i){const{subject_id:r,updated_at:m,updated_by:d,...u}=i;await Mt(l.id,u)}}catch(i){E("คัดลอกคำอธิบายรายวิชาไม่สำเร็จ (สร้างคอร์สแล้ว แก้ไขคำอธิบายเพิ่มเองได้): "+te(i),"warning")}},o,{cloneFrom:e})};window._deleteCourse=(e,t)=>{var s;(s=document.getElementById("del-course-modal"))==null||s.remove();const o=document.createElement("div");o.id="del-course-modal",o.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.querySelector("#del-course-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#del-course-confirm").addEventListener("click",async()=>{const a=o.querySelector("#del-course-confirm");a.disabled=!0,a.textContent="กำลังลบ...";try{await Dt(e),o.remove(),E(`ลบ "${t}" แล้ว`,"success"),j("my-courses")}catch(c){o.remove(),E("ลบไม่สำเร็จ: "+te(c),"error")}})};window._openRegisterClass=async e=>{const o=(n?await ke(n.id).catch(()=>[]):await _e().catch(()=>[])).find(v=>v.id===e);if(!o){E("ไม่พบข้อมูลคอร์ส","error");return}const s=n==null?void 0:n.teachers_quota,[a,c,l]=await Promise.all([pe((n==null?void 0:n.id)??null).catch(()=>[]),H().catch(()=>({})),Nt((n==null?void 0:n.id)??null).catch(()=>({hasSemester:!1,paidRoomCount:0}))]),i=parseInt(c.freeClassQuota??2),r=c.unlimitedTeacherClassCreation===!0||String(c.unlimitedTeacherClassCreation).toLowerCase()==="true",m=(s==null?void 0:s.is_paid)&&!(s!=null&&s.package_type)&&!l.hasSemester&&!l.paidRoomCount,d=l.hasSemester||(s==null?void 0:s.package_type)==="semester"||m,u=r||d?1/0:i+l.paidRoomCount;if(a.length>=u){ue(a.length,o,c);return}const{renderClassForm:b}=await x(async()=>{const{renderClassForm:v}=await import("./teacher-views-CWNu-rJ1.js");return{renderClassForm:v}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));b(n,o)};window._openCourseDocPage2=async e=>{const o=(n?await ke(n.id).catch(()=>[]):await _e().catch(()=>[])).find(a=>a.id===e);if(!o){E("ไม่พบข้อมูลคอร์ส","error");return}const{openCourseDocPage2Modal:s}=await x(async()=>{const{openCourseDocPage2Modal:a}=await import("./teacher-views-CWNu-rJ1.js");return{openCourseDocPage2Modal:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));await s(n,o)};function ue(e,t,o={}){var a;if(o.quotaMode==="school_sponsored"){kt(e,t,o);return}(a=document.getElementById("quota-popup"))==null||a.remove();const s=document.createElement("div");s.id="quota-popup",s.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
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
        ${(()=>{const c=parseInt(o.freeClassQuota??2),l=parseInt(o.pricePerClass??49),i=parseInt(o.priceSemester??299),r=o.pkgPerClassDesc??"เพิ่มได้ 1 ห้องเรียนต่อการชำระเงิน",m=o.pkgSemesterDesc??"ทุกวิชา ทุกห้อง ไม่จำกัด",d=c+1;return`
        <div class="bg-gray-50 rounded-xl p-3.5 text-sm">
          <p class="text-gray-600">คุณสร้างห้องเรียนไปแล้ว
            <span class="font-bold text-indigo-600">${e} ห้อง</span>
            จาก <span class="font-bold">${c} ห้องฟรี</span>
          </p>
          <p class="text-gray-400 text-xs mt-1">
            การสร้างห้องเรียนตั้งแต่ห้องที่ ${d} เป็นต้นไป
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
                <p class="text-xs text-gray-400 mt-0.5">${m}</p>
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
    </div>`,document.body.appendChild(s),s.querySelector("#qp-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#qp-copy-file").addEventListener("click",()=>{s.remove(),wt()}),s.querySelector("#qp-next").addEventListener("click",()=>{var l;const c=(l=s.querySelector('input[name="pkg"]:checked'))==null?void 0:l.value;if(!c){alert("กรุณาเลือกแพ็กเกจก่อนครับ");return}s.remove(),c==="per_subject"?Lt(t,o):$t(c,t,1,o)})}function kt(e,t,o={}){var a;(a=document.getElementById("school-sponsored-popup"))==null||a.remove();const s=document.createElement("div");s.id="school-sponsored-popup",s.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.querySelector("#sp-donate").addEventListener("click",()=>{s.remove(),re(t,o)}),s.querySelector("#sp-access").addEventListener("click",async()=>{const c=s.querySelector("#sp-access");c.disabled=!0,c.textContent="⏳ กำลังตรวจสอบ...";try{const i=(await Ot(n==null?void 0:n.id).catch(()=>[])).find(r=>r.package_type==="school_sponsored"&&(r.status==="pending"||r.status==="approved"));if(i){E(i.status==="approved"?"คุณได้รับสิทธิ์แล้วครับ ✅":"ส่งคำขอไปแล้ว รอแอดมินอนุมัติครับ ⏳","info"),s.remove();return}await je({teacher_id:n==null?void 0:n.id,package_type:"school_sponsored",amount:0,status:"pending"}),E("ส่งคำขอแล้ว ✅ แอดมินจะอนุมัติให้เร็วๆ นี้ครับ","success"),s.remove()}catch(l){E("เกิดข้อผิดพลาด: "+te(l),"error"),c.disabled=!1,c.textContent="🎓 รับสิทธิ์ไม่จำกัดเลย"}})}async function re(e,t={}){var N,B,V,X;(N=document.getElementById("donate-modal"))==null||N.remove();const o=Z(t.donationMinAmount,49),s=Z(t.donationAmountStep,50),a=Ee(t);let c=0,l=!1,i=null,r=!1,m=null;if(n!=null&&n.id)try{const[k,I]=await Promise.all([it(n.id),Qt(n.id).catch(()=>null)]);if(i=I,r=(I==null?void 0:I.status)==="available",k.some(A=>A.package_type==="donation"&&A.status==="pending")){E("คุณครูส่งหลักฐานรอการอนุมัติอยู่แล้วครับ — กรุณารอแอดมินตรวจสอบก่อนนะครับ","warning");return}if(c=k.filter(A=>A.package_type==="donation"&&A.status==="approved").reduce((A,K)=>A+(K.amount??0),0),c>0){const A=((B=a[a.length-1])==null?void 0:B.amount)??1/0;if(c>=A){E("คุณครูสนับสนุนระดับสูงสุดแล้วครับ ขอบคุณมากๆ นะครับ 🙏👑","success");return}l=!0,m=((V=a.find(K=>K.amount>c))==null?void 0:V.amount)??null}}catch{}const d=document.createElement("div");d.id="donate-modal",d.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4";const u=t.paymentPromptpay??"",b=Math.min(Z(t.donationQuickCount,4),8),v=Ve(t),y=a[0],f=r?a[Math.max(0,Math.min(a.length-1,(i.source_tier||1)-1))]:null,L=r?(f==null?void 0:f.amount)??(y==null?void 0:y.amount)??o:l?Math.max(o,(m??o)-c):o,M=Array.from({length:b},(k,I)=>L+I*s),h=k=>v.map(I=>k>=(I.minTier??1)?`<div class="flex gap-2 text-amber-900"><span>${q(I.icon)}</span><span>${q(I.text)}</span></div>`:`<div class="flex gap-2 text-gray-300 opacity-70"><span>🔒</span><span class="line-through">${q(I.text)}<span class="ml-1 text-[9px] no-underline not-italic text-gray-400">ระดับ ${I.minTier}+</span></span></div>`).join("");d.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]">
      <div class="flex justify-center pt-3 pb-1 sm:hidden">
        <div class="w-10 h-1 rounded-full bg-gray-200"></div>
      </div>
      <div class="px-5 pt-4 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="donate-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">${r?"🎁 สิทธิ์ส่วนลดผู้สนับสนุนเดิม":l?"⭐ อัปเกรดระดับผู้สนับสนุน":"☕ สนับสนุนผู้พัฒนา"}</h3>
          <p class="text-xs text-gray-400">${r?"เลือกระดับใหม่ ยิ่งสูงยิ่งได้ส่วนลดมากครับ 🙏":l?"สนับสนุนเพิ่มเพื่ออัปเกรดระดับครับ 🙏":"ขอบคุณมากเลยครับ 🙏"}</p>
        </div>
      </div>
      <div class="px-5 py-4 space-y-4 overflow-auto flex-1">
        <p class="text-sm text-gray-600 text-center leading-relaxed">
          ${r?`คุณครูมีสิทธิ์ส่วนลดจากการสนับสนุนภาคเรียนที่ ${i.source_semester}/${i.source_academic_year}<br/><span class="text-xs text-gray-400">ยอดสะสมเดิม ${Number(i.source_total_amount||0).toLocaleString()} บาท — เลือกระดับใหม่เพื่อคำนวณส่วนลด</span>`:l?`คุณครูสนับสนุนสะสมแล้ว ${c} บาท${m?` — อีก ${Math.max(0,m-c)} บาทจะครบ ${m} บาทสำหรับระดับถัดไป`:""}<br/><span class="text-xs text-gray-400">ยอดที่สนับสนุนเพิ่มจะถูกรวมกับยอดเดิมโดยอัตโนมัติครับ</span>`:`สนับสนุนขั้นต่ำ ${o} บาท เพื่อรับสิทธิ์ผู้สนับสนุน<br/><span class="text-xs text-gray-400">ระบบหลักใช้งานได้ไม่จำกัดอยู่แล้ว สิทธิ์นี้เป็นฟีเจอร์พิเศษเพิ่มเติมครับ</span>`}
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
          ${Ze(y)}
        </div>
        ${r?`
        <!-- Renewal tier selector -->
        <div class="space-y-2">
          <label for="donate-renewal-tier" class="text-xs font-bold text-amber-800">เลือกระดับการสนับสนุนรอบนี้</label>
          <select id="donate-renewal-tier" class="w-full bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 text-lg font-extrabold text-amber-700 outline-none">
            ${a.map((k,I)=>`<option value="${k.amount}" ${k.amount===L?"selected":""}>ระดับ ${I+1} — ${k.amount.toLocaleString()} บาท — ส่วนลด ${Math.min(25,(I+1)*5)}%</option>`).join("")}
          </select>
          <div id="donate-renewal-quote" class="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800"></div>
        </div>`:`
        <!-- Amount input -->
        <div class="flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 focus-within:border-amber-400 transition">
          <span class="text-2xl font-bold text-amber-500">฿</span>
          <input id="donate-amount" type="number" min="${o}" step="${s}" value="${L}" placeholder="${L}"
            class="flex-1 bg-transparent text-3xl font-extrabold text-amber-700 outline-none w-full" />
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${M.map(k=>`<button class="donate-quick flex-1 py-2 rounded-xl border-2 border-amber-200 text-amber-700 text-sm font-bold hover:bg-amber-50 transition">${k}</button>`).join("")}
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
    </div>`,document.body.appendChild(d);const C=d.querySelector("#donate-amount"),p=d.querySelector("#donate-renewal-tier"),w=d.querySelector("#donate-sticker-preview"),S=d.querySelector("#donate-feature-list"),R=d.querySelector("#donate-renewal-quote"),g=()=>r?parseInt((p==null?void 0:p.value)||0):parseFloat(C==null?void 0:C.value)||0,_=k=>[...a].reverse().find(I=>k>=I.amount)||a[0],P=()=>{const k=g(),I=_(k),U=a.indexOf(I)+1;if(w&&(w.innerHTML=Ze(I)),S&&(S.innerHTML=h(U)),r&&R){const A=Math.min(25,Math.max(0,U*5)),K=Math.round(k*(100-A)/100);R.innerHTML=`ยอดปกติ <b>${k.toLocaleString()} บาท</b> · ส่วนลด <b>${A}%</b><br/>ยอดชำระจริง <b class="text-lg">${K.toLocaleString()} บาท</b>`}};d.querySelectorAll(".donate-quick").forEach(k=>{k.addEventListener("click",()=>{C&&(C.value=k.textContent.trim()),P()})}),C==null||C.addEventListener("input",P),p==null||p.addEventListener("change",P),P(),d.querySelector("#donate-back").addEventListener("click",()=>{d.remove(),kt(0,e,t)}),d.querySelector("#donate-gen-qr").addEventListener("click",async()=>{const k=g();if(!k||!r&&k<o){E(`กรุณาระบุยอดโดเนทขั้นต่ำ ${o} บาทครับ`,"error");return}if(!u){E("แอดมินยังไม่ได้ตั้งค่าเบอร์ PromptPay","error");return}try{let I=k;if(r){const A=await ze(k);if(I=Number(A==null?void 0:A.amount),!Number.isInteger(I)||I<=0)throw new Error("ยอดส่วนลดไม่ถูกต้อง")}const U=await Ie(u,I);d.dataset.renewalBaseAmount=String(k),d.dataset.payableAmount=String(I),d.querySelector("#donate-qr-img").src=U,d.querySelector("#donate-qr-total").textContent=`ยอดที่ต้องชำระ ${I.toLocaleString()} บาท`,d.querySelector("#donate-qr-area").classList.remove("hidden"),d.querySelector("#donate-qr-area").classList.add("flex"),d.querySelector("#donate-slip-area").classList.remove("hidden"),d.querySelector("#donate-confirm").classList.remove("hidden"),d.querySelector("#donate-gen-qr").classList.add("hidden")}catch(I){E("สร้าง QR ไม่สำเร็จ: "+te(I),"error")}});let $=null;const F=d.querySelector("#donate-slip-file"),G=d.querySelector("#donate-slip-preview");F==null||F.addEventListener("change",k=>{$=k.target.files[0],$&&(d.querySelector("#donate-slip-name").textContent=$.name,$.type.startsWith("image/")?(d.querySelector("#donate-slip-img").src=URL.createObjectURL($),d.querySelector("#donate-slip-img").classList.remove("hidden")):d.querySelector("#donate-slip-img").classList.add("hidden"),G.classList.remove("hidden"),d.querySelector("#donate-slip-label").classList.add("hidden"),d.querySelector("#donate-slip-err").classList.add("hidden"))}),(X=d.querySelector("#donate-slip-remove"))==null||X.addEventListener("click",()=>{$=null,F.value="",G.classList.add("hidden"),d.querySelector("#donate-slip-label").classList.remove("hidden")}),d.querySelector("#donate-confirm").addEventListener("click",async()=>{const k=g(),I=Number(d.dataset.payableAmount||k);if(!$){d.querySelector("#donate-slip-err").classList.remove("hidden"),d.querySelector("#donate-slip-area").scrollIntoView({behavior:"smooth",block:"center"});return}const U=d.querySelector("#donate-confirm");U.disabled=!0,U.textContent="⏳ กำลังส่งข้อมูล...";try{let A;if(r){const D=await ze(k);if(Number(D==null?void 0:D.amount)!==I){const J=Number(D==null?void 0:D.amount),Se=await Ie(u,J);throw d.querySelector("#donate-qr-img").src=Se,d.querySelector("#donate-qr-total").textContent=`ยอดที่ต้องชำระ ${J.toLocaleString()} บาท`,d.dataset.payableAmount=String(J),new Error("ระบบอัปเดตยอดส่วนลดล่าสุดแล้ว กรุณาตรวจสอบ QR แล้วกดส่งอีกครั้ง")}A=await Vt(k)}else A=await je({teacher_id:n==null?void 0:n.id,package_type:"donation",amount:I,status:"pending"});const K=Number((A==null?void 0:A.id)??(A==null?void 0:A.request_id)),O=await at($,K);await T.from("payment_requests").update({slip_url:O}).eq("id",K),E("ส่งหลักฐานสำเร็จ! 🙏 แอดมินจะตรวจสอบและส่งการ์ดขอบคุณให้ครับ","success"),d.remove(),St(!0)}catch(A){E("เกิดข้อผิดพลาด: "+te(A),"error"),U.disabled=!1,U.textContent="✅ ส่งหลักฐานการโอน"}})}window._showThankYouCardAdmin=(e,t)=>Et(e,t);async function Et(e,t=null){var u;(u=document.getElementById("thankyou-card-modal"))==null||u.remove();const o=t??await H().catch(()=>({}));Z(o.donationMinAmount,99),Z(o.donationAmountStep,50);const s=Ve(o),a=Ee(o),c=e.amount??0,l=[...a].reverse().find(b=>c>=b.amount)??a[0],i=ht(o,a,c),r=(o.donationThankYouCard??"").trim()||`❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

การสนับสนุนของคุณครูมีค่ามากกว่าจำนวนเงินครับ ☕
เพราะมันคือกำลังใจสำคัญที่ทำให้ผมรู้สึกว่า
ระบบเล็ก ๆ นี้ได้ช่วยลดภาระงานของครูได้จริง 🌷

ขอบคุณที่ทำให้ผมมีกำลังใจพัฒนาระบบนี้ต่อไปเพื่อครูครับ 🙏✨

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`,m=(()=>{if(!l)return'<div class="text-5xl mb-3">☕</div>';const b=String(l.sticker??"");return/^https?:\/\//.test(b)?`<div class="w-20 h-20 mx-auto mb-3 flex items-center justify-center drop-shadow-lg">
        <img src="${q(b)}" class="w-full h-full object-contain" /></div>`:`<div class="text-5xl mb-3">${q(b||"☕")}</div>`})(),d=document.createElement("div");d.id="thankyou-card-modal",d.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",d.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Header — สีตาม tier.color -->
      <div class="px-6 py-6 text-center flex-shrink-0" style="${(()=>{const b=(l==null?void 0:l.color)||"#f59e0b",v=parseInt(b.slice(1,3),16),y=parseInt(b.slice(3,5),16),f=parseInt(b.slice(5,7),16);return`background:linear-gradient(135deg,rgba(${v},${y},${f},0.85),rgba(${v},${y},${f},1))`})()}">
        ${m}
        ${l?`<div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">${q(l.title)}</div>`:""}
        <h2 class="text-white font-bold text-xl">ขอบคุณครับ! 🙏</h2>
        <p class="text-white/80 text-sm mt-1">${c?`โดเนท ${c.toLocaleString()} บาท`:"การสนับสนุนของคุณครูมีความหมายมากครับ"}</p>
      </div>
      <!-- Body -->
      <div class="px-5 py-4 overflow-y-auto flex-1 space-y-4">
        <!-- ข้อความขอบคุณ -->
        ${e.admin_note||r?`
        <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
          ${q(e.admin_note||r)}
        </div>`:""}
        <!-- ฟีเจอร์พิเศษ: unlocked / locked -->
        ${s.length?`
        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-1.5">
            ${s.map(b=>i>=(b.minTier??1)?`<div class="flex items-start gap-2 text-sm text-emerald-900">
                     <span class="flex-shrink-0">${q(b.icon)}</span>
                     <span>${q(b.text)}</span>
                   </div>`:`<div class="flex items-start gap-2 text-sm text-gray-400 opacity-60">
                     <span class="flex-shrink-0">🔒</span>
                     <span class="line-through">${q(b.text)}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap">ระดับ ${b.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${i<a.length?`
          <p class="text-[10px] text-emerald-700 mt-3 pt-2 border-t border-emerald-200">
            🔓 อัปเกรดเพื่อปลดล็อกฟีเจอร์ที่เหลือได้เลยครับ
          </p>`:""}
        </div>`:""}
        <!-- คำอธิบาย tier -->
        ${l!=null&&l.note?`
        <p class="text-xs text-center text-gray-400 italic">"${q(l.note)}"</p>`:""}
      </div>
      <!-- Footer -->
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="tc-close"
          class="w-full py-3 rounded-2xl text-white font-bold text-sm transition shadow-md"
          style="background:${(l==null?void 0:l.color)||"#f59e0b"}">
          รับทราบและเริ่มใช้งาน 🚀
        </button>
      </div>
    </div>`,document.body.appendChild(d),d.querySelector("#tc-close").addEventListener("click",()=>{var b;localStorage.setItem(`pp5_thankyou_seen_${e.id}`,"1"),d.remove(),(b=document.getElementById("donate-float-btn"))==null||b.remove(),Ae(e)})}async function Ae(e=null){if(document.getElementById("sidebar-donate-item"))return;const t=document.querySelector("#sidebar nav");if(!t)return;let o="<span>☕</span>",s="สนับสนุนผู้พัฒนาอีกครั้ง";if(e){const c=await H().catch(()=>({}));Z(c.donationMinAmount,99),Z(c.donationAmountStep,50);const l=Ee(c),i=e.amount??0,r=[...l].reverse().find(m=>i>=m.amount)??l[0];if(r){const m=String(r.sticker??"");o=/^https?:\/\//.test(m)?`<img src="${q(m)}" class="w-6 h-6 object-contain rounded" title="${q(r.title)}" />`:`<span title="${q(r.title)}">${q(m||"🏅")}</span>`,s=`${r.title} — คลิกเพื่อโดเนทอีกครั้ง`}}const a=document.createElement("a");a.id="sidebar-donate-item",a.href="#",a.title=s,a.className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-emerald-400/60 hover:text-amber-400 hover:bg-emerald-800/40 opacity-60 hover:opacity-100",a.innerHTML=`${o} <span>${e?"ผู้สนับสนุนระบบ":"สนับสนุนผู้พัฒนา"}</span>`,a.addEventListener("click",async c=>{c.preventDefault();const l=await H().catch(()=>({}));re(null,l)}),t.appendChild(a)}function Gn(){var t;return((t=n==null?void 0:n.positions)!=null&&t.length?n.positions:n!=null&&n.position?[n.position]:[]).includes("executive")}function he(e){const t=e==="overview"&&Gn();["donate-float-btn","feedback-fab","donor-chat-fab"].forEach(o=>{const s=document.getElementById(o);s&&(s.style.display=t?"none":"")}),Qn(e)}function Un(){if(document.getElementById("home-fab"))return;const e=document.createElement("button");e.id="home-fab",e.title="กลับหน้าภาพรวม",e.className="hidden fixed z-40 items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105",e.style.cssText="position:fixed;left:max(0.75rem, env(safe-area-inset-left));bottom:max(0.75rem, env(safe-area-inset-bottom));right:auto;top:auto;",e.innerHTML='<span class="text-lg">🏠</span><span>หน้าภาพรวม</span>',e.addEventListener("click",()=>j("overview")),document.body.appendChild(e)}function Qn(e){const t=document.getElementById("home-fab");if(!t)return;const o=e!=="overview";t.classList.toggle("hidden",!o),t.classList.toggle("flex",o)}function St(e=!1){var o;(o=document.getElementById("donate-float-btn"))==null||o.remove();const t=document.createElement("button");t.id="donate-float-btn",t.title=e?"รอแอดมินรับทราบการโดเนทของคุณ":"สนับสนุนผู้พัฒนา",t.className="fixed z-[40] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-white shadow-lg shadow-amber-300/40 flex items-center justify-center overflow-hidden transition-transform hover:scale-105",t.style.cssText="position:fixed;right:max(0.75rem, env(safe-area-inset-right));bottom:max(0.75rem, env(safe-area-inset-bottom));top:auto;left:auto;",t.innerHTML=e?'<span class="text-xl sm:text-2xl">☕</span>':`<span class="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full">
        <span class="absolute inset-1 rounded-full bg-amber-300/40"></span>
        <span class="relative text-xl sm:text-2xl">☕</span>
       </span>`,t.addEventListener("click",async()=>{const s=await H().catch(()=>({}));re(null,s)}),document.body.appendChild(t),he(me)}function Wn(e,t,o){var b;(b=document.getElementById("promo-popup"))==null||b.remove();const s="pp5_promo_seen",a=Z(e.donationMinAmount,49);let c=0;const l=v=>{const y=v+1;return o.map(f=>y>=(f.minTier??1)?`<div class="flex items-center gap-2.5 text-sm text-gray-800 py-1">
             <span class="text-base flex-shrink-0">${q(f.icon)}</span>
             <span>${q(f.text)}</span>
           </div>`:`<div class="flex items-center gap-2.5 text-sm text-gray-300 py-1">
             <span class="text-base flex-shrink-0">🔒</span>
             <span class="line-through">${q(f.text)}</span>
             <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${f.minTier}+</span>
           </div>`).join("")},i=document.createElement("div");i.id="promo-popup",i.className="fixed inset-0 z-[85] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4";const r=v=>{var h,C;const y=t[v],f=(y==null?void 0:y.color)||"#f59e0b",L=String((y==null?void 0:y.sticker)??""),M=/^https?:\/\//.test(L)?`<img src="${q(L)}" class="w-16 h-16 object-contain drop-shadow-md" />`:`<span class="text-5xl">${q(L||"🏅")}</span>`;return`
    <div class="bg-white w-full sm:max-w-sm rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Sticker row -->
      <div class="pt-5 px-5 pb-3 border-b border-gray-100 flex-shrink-0">
        <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">เลือกระดับที่สนใจ</p>
        <div class="flex justify-center gap-2">
          ${t.map((p,w)=>{const S=String(p.sticker??""),R=p.color||"#f59e0b",g=w===v,_=/^https?:\/\//.test(S)?`<img src="${q(S)}" class="w-10 h-10 object-contain" />`:`<span class="text-3xl">${q(S)}</span>`;return`<button class="promo-tier-btn flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all"
              data-idx="${w}"
              style="${g?`box-shadow:0 0 0 3px ${R};`:"box-shadow:0 0 0 2px #e5e7eb;"}">
              ${_}
            </button>`}).join("")}
        </div>
      </div>
      <!-- Tier info + features -->
      <div class="px-5 py-4 overflow-y-auto flex-1">
        <div class="flex items-center gap-2 mb-1">
          ${M}
          <div>
            <p class="font-bold text-gray-800 text-base">${q((y==null?void 0:y.title)??"")}</p>
            <p class="text-xs" style="color:${f}">${q((y==null?void 0:y.note)??"")}</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-2 mb-3">ยอดสนับสนุนขั้นต่ำ <span class="font-bold text-gray-700">${((h=y==null?void 0:y.amount)==null?void 0:h.toLocaleString())??a} บาท</span></p>
        <div class="divide-y divide-gray-50">
          ${l(v)}
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
          สนับสนุนในระดับนี้ (${((C=y==null?void 0:y.amount)==null?void 0:C.toLocaleString())??a} บาท+)
        </button>
        <button id="promo-later" class="w-full text-sm text-gray-400 hover:text-gray-600 py-1 transition">
          ภายหลัง
        </button>
      </div>
    </div>`};i.innerHTML=r(c),document.body.appendChild(i);const m=v=>{c=v,i.querySelector(".bg-white").outerHTML=r(v),u()},d=()=>{var v;(v=i.querySelector("#promo-no-show"))!=null&&v.checked&&localStorage.setItem(s,String(Date.now())),i.remove()},u=()=>{var v,y;i.querySelectorAll(".promo-tier-btn").forEach(f=>{f.addEventListener("click",()=>m(parseInt(f.dataset.idx)))}),(v=i.querySelector("#promo-support"))==null||v.addEventListener("click",()=>{d(),re(null,e)}),(y=i.querySelector("#promo-later"))==null||y.addEventListener("click",d),i.addEventListener("click",f=>{f.target===i&&d()})};u()}function Yn(e,t,o){if(document.getElementById("sidebar-upgrade-item"))return;const s=document.querySelector("#sidebar nav");if(!s)return;const a=t[o-1],c=t[o],l=String((a==null?void 0:a.sticker)??""),i=/^https?:\/\//.test(l)?`<img src="${q(l)}" class="w-5 h-5 object-contain flex-shrink-0" />`:`<span class="flex-shrink-0">${q(l||"🏅")}</span>`,r=document.createElement("a");r.id="sidebar-upgrade-item",r.href="#",r.className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition text-amber-400/70 hover:text-amber-300 hover:bg-emerald-800/40 opacity-70 hover:opacity-100",r.innerHTML=`${i} <span>อัปเกรดระดับ</span>`,r.title=c?`อัปเกรดเป็น ${c.title}`:"สนับสนุนเพิ่มเติม",r.addEventListener("click",async m=>{m.preventDefault(),re(null,e)}),s.appendChild(r)}async function Kn(e){try{const[t,o]=await Promise.all([it(e),H().catch(()=>({}))]);if((o.quotaMode??"payment")!=="school_sponsored")return;const s=Z(o.donationMinAmount,49),a=Z(o.donationAmountStep,50),c=Ee(o,s,a),l=Ve(o),i=c.length,r=t.find(u=>u.package_type==="donation"&&u.status==="approved"),m=t.some(u=>u.package_type==="donation"&&u.status==="pending"),d=t.filter(u=>u.package_type==="donation"&&u.status==="approved").reduce((u,b)=>u+(b.amount??0),0);if(window._pp5SystemCfg=o,r){!localStorage.getItem(`pp5_thankyou_seen_${r.id}`)&&r.admin_note&&Et(r);const b=ht(o,c,d);window._pp5DonorTierIndex=b,b>=i?Ae(r):(Ae(r),Yn(o,c,b))}else if(St(m),!m&&o.donationPromoEnabled!=="false"){const b=localStorage.getItem("pp5_promo_seen");(!b||Date.now()-parseInt(b)>14*24*60*60*1e3)&&setTimeout(()=>Wn(o,c,l),1500)}}catch{}}function Lt(e,t={}){var r;(r=document.getElementById("room-count-page"))==null||r.remove();const o=parseInt(t.pricePerClass??49),s=document.createElement("div");s.id="room-count-page",s.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
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
    </div>`,document.body.appendChild(s);let a=1;const c=s.querySelector("#rc-count"),l=s.querySelector("#rc-total"),i=()=>{c.textContent=a;const m=o*a;l.innerHTML=`${m.toLocaleString()} <span class="text-sm font-normal text-gray-400">บาท</span>`,l.nextElementSibling.textContent=`(${o} บ. × ${a} ห้อง)`,s.querySelector("#rc-minus").disabled=a<=1};s.querySelector("#rc-minus").addEventListener("click",()=>{a>1&&(a--,i())}),s.querySelector("#rc-plus").addEventListener("click",()=>{a++,i()}),s.querySelector("#rc-back").addEventListener("click",()=>{s.remove(),ue(0,e,t)}),s.querySelector("#rc-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#rc-next").addEventListener("click",()=>{s.remove(),$t("per_subject",e,a,t)})}async function $t(e,t,o=1,s=null){var M;(M=document.getElementById("payment-page"))==null||M.remove();const a=s??await H().catch(()=>({})),c=parseInt(a.pricePerClass??49),l=parseInt(a.priceSemester??299),i=(a.paymentPromptpay??"0825424340").replace(/\D/g,""),r=e==="semester"?l:c*o,m=e==="semester"?"เหมาทั้งเทอม":`รายห้อง × ${o} ห้อง`,d=e==="semester"?"ทุกวิชา ทุกห้อง ตลอดเทอม":`${c} บ. × ${o} ห้อง = ${r.toLocaleString()} บ.`,u=document.createElement("div");u.id="payment-page",u.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",u.innerHTML=`
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="pp-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none mr-1">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">ชำระเงิน — ${m}</h3>
          <p class="text-xs text-gray-400">${d}</p>
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
    </div>`,document.body.appendChild(u),Ie(i,r).then(h=>{const C=u.querySelector("#pp-qr-wrap");C&&(C.innerHTML=`
      <img src="${h}" class="w-[220px] h-[220px] rounded-xl border border-gray-100 shadow-sm mx-auto" />
      <p class="text-[10px] text-gray-400">QR สำหรับ ${r.toLocaleString()} บาทเท่านั้น</p>`)}).catch(()=>{if(a.paymentQrUrl){const h=u.querySelector("#pp-qr-wrap");h&&(h.innerHTML=`<img src="${a.paymentQrUrl}" class="mx-auto h-[220px] object-contain rounded-xl border border-gray-100 shadow-sm" />`)}}),u.querySelector("#pp-back").addEventListener("click",()=>{var h;u.remove(),e==="per_subject"?Lt(t,a):ue(((h=n==null?void 0:n.teachers_quota)==null?void 0:h.total_classes_created)??0,t,a)}),u.querySelectorAll(".copy-btn").forEach(h=>{h.addEventListener("click",()=>{navigator.clipboard.writeText(h.dataset.copy).catch(()=>{}),h.querySelector("span").textContent="✓ คัดลอกแล้ว",setTimeout(()=>h.querySelector("span").textContent="คัดลอก",2e3)})});let b=null;const v=u.querySelector("#slip-file"),y=u.querySelector("#slip-preview"),f=u.querySelector("#slip-img"),L=u.querySelector("#slip-name");v.addEventListener("change",h=>{b=h.target.files[0],b&&(L.textContent=b.name,b.type.startsWith("image/")?(f.src=URL.createObjectURL(b),f.classList.remove("hidden")):f.classList.add("hidden"),y.classList.remove("hidden"),u.querySelector("#slip-label").classList.add("hidden"))}),u.querySelector("#slip-remove").addEventListener("click",()=>{b=null,v.value="",y.classList.add("hidden"),u.querySelector("#slip-label").classList.remove("hidden")}),u.querySelector("#pp-submit").addEventListener("click",async()=>{const h=u.querySelector("#pp-err");if(!b){h.textContent="กรุณาอัปโหลดสลิปก่อนนะครับ",h.classList.remove("hidden");return}h.classList.add("hidden");const C=u.querySelector("#pp-submit");C.disabled=!0,C.textContent="⏳ กำลังส่ง...";try{const p=await je({teacher_id:n.id,package_type:e,amount:r,room_count:e==="per_subject"?o:null,subject_id:e==="per_subject"?(t==null?void 0:t.id)??null:null,status:"pending"}),w=await at(b,p.id);await T.from("payment_requests").update({slip_url:w}).eq("id",p.id),u.remove(),Jn()}catch(p){C.disabled=!1,C.textContent="✅ ส่งหลักฐานการชำระเงิน",h.textContent="เกิดข้อผิดพลาด กรุณาลองใหม่: "+te(p),h.classList.remove("hidden")}})}function Jn(){const e=document.createElement("div");e.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()})}async function Xe(e){try{const t=await H(),o=t.semester??t.semester??"—",s=t.academicYear??t.academic_year??"—",a=document.getElementById("sidebar-term");a&&(a.textContent=`ภาคเรียนที่ ${o} / ${s}`);const c=(e==null?void 0:e.category)??"",i=/ปวช/i.test(c)?t.porworLogoUrl??t.samaiLogoUrl??"":t.samaiLogoUrl??"",r=document.getElementById("school-logo"),m=document.getElementById("school-logo-fallback");r&&i&&(r.src=i,r.classList.remove("hidden"),m==null||m.classList.add("hidden"));const d=document.getElementById("sidebar-contact");if(d){const u=[t.contactPhone&&{icon:"📞",label:t.contactPhone,href:`tel:${t.contactPhone.replace(/\s/g,"")}`},t.contactLine&&{icon:"💬",label:"LINE: "+t.contactLine,href:t.contactLine.startsWith("http")?t.contactLine:`https://line.me/R/ti/p/${t.contactLine}`},t.contactFacebook&&{icon:"📘",label:"Facebook",href:t.contactFacebook},t.contactEmail&&{icon:"📧",label:t.contactEmail,href:`mailto:${t.contactEmail}`},t.contactOther&&{icon:"🔗",label:t.contactOther,href:null}].filter(Boolean);u.length>0&&(window._contactLinks=u,d.innerHTML=`
          <button id="btn-contact-admin"
            class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm
                   font-medium text-emerald-200 hover:bg-emerald-700 border border-emerald-700 transition">
            📞 ติดต่อผู้ดูแล
          </button>`,d.classList.remove("hidden"),document.getElementById("btn-contact-admin").addEventListener("click",()=>{var v,y;(v=document.getElementById("contact-modal"))==null||v.remove();const b=document.createElement("div");b.id="contact-modal",b.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",b.innerHTML=`
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
            </div>`,document.body.appendChild(b),b.querySelector("#contact-modal-close").addEventListener("click",()=>b.remove()),(y=b.querySelector("#contact-donate-btn"))==null||y.addEventListener("click",async()=>{b.remove();const f=await H().catch(()=>({}));re(null,f)}),b.addEventListener("click",f=>{f.target===b&&b.remove()})}))}}catch{}}let oe=[];async function Zn(e){try{oe=await en(e),Xn()}catch{}}function Xn(){var o;if(document.querySelectorAll("#sv-notif-badge").forEach(s=>s.remove()),!oe.length)return;const e=oe.length,t=document.getElementById("t-name");if(t){const s=document.createElement("span");s.id="sv-notif-badge",s.style.cssText="display:inline-block;background:#dc2626;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 6px;margin-left:6px;cursor:pointer;",s.textContent=e,s.title=`${e} ข้อความจากหัวหน้า`,s.onclick=()=>et(n==null?void 0:n.id),(o=t.parentElement)==null||o.appendChild(s)}window._showSvNotifPopup=()=>et(n==null?void 0:n.id),"Notification"in window&&Notification.permission==="granted"&&e>0&&new Notification("ปพ.5 ออนไลน์ — มีข้อความจากหัวหน้า",{body:oe[0].comment,icon:"/pp5online/public/pp5-form-logo.png"})}async function et(e){const t={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},o={general:"#f9fafb",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},s={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},a={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},c=i=>{const r=i.supervisor;if(!r)return"หัวหน้า";const m=a[r.position]??"หัวหน้า";return r.full_name?`${m} (${r.full_name})`:m},l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;",l.innerHTML=`<div style="background:#fff;border-radius:16px;width:min(500px,96vw);max-height:85vh;overflow-y:auto;padding:24px;position:relative;">
    <button style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;" onclick="this.closest('div').parentElement.remove()">✕</button>
    <div style="font-size:16px;font-weight:700;margin-bottom:4px;">🔔 ข้อความจากหัวหน้า</div>
    <div style="font-size:12px;color:#6b7280;margin-bottom:16px;">ได้รับการตรวจสอบแล้ว ${oe.length} รายการ</div>
    ${oe.map(i=>`
      <div style="background:${o[i.metric]??"#f9fafb"};border-radius:12px;padding:14px 16px;margin-bottom:10px;border-left:4px solid ${s[i.metric]??"#6b7280"};">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:700;color:${s[i.metric]??"#374151"};background:${o[i.metric]??"#f9fafb"};
            border:1px solid currentColor;border-radius:8px;padding:1px 8px;">
            ${t[i.metric]??i.metric}
          </span>
          <span style="font-size:10px;color:#9ca3af;">${new Date(i.created_at).toLocaleString("th")}</span>
        </div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;">จาก: ${c(i)}</div>
        <div style="font-size:13px;color:#374151;line-height:1.5;">${i.comment}</div>
      </div>`).join("")}
    <button id="sv-mark-read"
      style="width:100%;margin-top:8px;padding:10px;background:#059669;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
      ✓ รับทราบทั้งหมด
    </button>
  </div>`,document.body.appendChild(l),l.addEventListener("click",i=>{i.target===l&&l.remove()}),l.querySelector("#sv-mark-read").onclick=async()=>{await tn(e),oe=[],document.querySelectorAll("#sv-notif-badge").forEach(i=>i.remove()),l.remove()}}let we=!1,xe=null;async function He(){var s;const e=document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area"),t=document.querySelector("#sidebar nav");if(!e||we)return;if(!(n!=null&&n.id)){E("กำลังโหลดข้อมูลครู กรุณารอสักครู่แล้วลองใหม่","warning");try{n=await ae((s=(await T.auth.getUser()).data.user)==null?void 0:s.id)}catch{}if(!(n!=null&&n.id))return}we=!0,t&&(xe=t.innerHTML),await De(),oo(t,e,Y);const{renderSupervisorDashboard:o}=await x(async()=>{const{renderSupervisorDashboard:a}=await import("./supervisor-B9QXB6Pr.js");return{renderSupervisorDashboard:a}},__vite__mapDeps([51,1,2,3,4,5,6,13,14,9,10]));o(e,n,Y)}window._enterSupervisorMode=He;function eo(){document.getElementById("main-content")??document.querySelector("main")??document.getElementById("content-area");const e=document.querySelector("#sidebar nav");we&&(we=!1,e&&xe&&(e.innerHTML=xe,xe=null,so(e),vt()),j("overview"))}async function to(){if(n!=null&&n.id)try{const[e,t]=await Promise.all([Jt("teacher",(n==null?void 0:n.id)??null),n!=null&&n.id?Zt(n.id):Promise.resolve([])]),o=new Set((t??[]).map(a=>Number(a.announcement_id))),s=e.filter(a=>!o.has(Number(a.id))&&(a.requires_ack||Number(a.priority)>=5&&a.ann_type!=="system"));qe("moreAnnouncements",s.length),Pt(s,"pp5_ann_dismissed",{useLocalSeen:!1,onAcknowledgeAll:async a=>{await Xt(a,n==null?void 0:n.id),qe("moreAnnouncements",Math.max(0,s.length-a.length))}})}catch{}}async function no(){try{const e=await En();e!=null&&e.is_participant&&!e.completed&&jt("teacher")}catch{}}const tt=[{key:"announce_create",icon:"📢",label:"จัดการประกาศ",fn:(e,t)=>{x(async()=>{const{renderSupervisorAnnouncements:o}=await import("./views-DFKnUweL.js").then(s=>s.T);return{renderSupervisorAnnouncements:o}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29])).then(({renderSupervisorAnnouncements:o})=>o(e,t))}},{key:"work_calendar",icon:"📅",label:"ปฏิทินปฏิบัติงาน",fn:e=>{x(async()=>{const{renderWorkCalendar:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderWorkCalendar:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29])).then(({renderWorkCalendar:t})=>t(e))}},{key:"lang_config",icon:"⚙️",label:"ตั้งค่าคำอธิบายฯ",fn:async(e,t)=>{const{renderCourseDocLangConfig:o}=await x(async()=>{const{renderCourseDocLangConfig:s}=await import("./teacher-views-CWNu-rJ1.js");return{renderCourseDocLangConfig:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));o(e,t)}},{key:"menu_holidays",icon:"📅",label:"วันหยุด",fn:async()=>{const{renderHolidays:e}=await x(async()=>{const{renderHolidays:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderHolidays:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_periods",icon:"🕐",label:"คาบเรียน",fn:async()=>{const{renderPeriods:e}=await x(async()=>{const{renderPeriods:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderPeriods:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_curriculum",icon:"📘",label:"หลักสูตรแกนกลาง",fn:async()=>{const{renderCurriculum:e}=await x(async()=>{const{renderCurriculum:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderCurriculum:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_subjects",icon:"📖",label:"รายวิชา",fn:async()=>{const{renderSubjects:e}=await x(async()=>{const{renderSubjects:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderSubjects:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_departments",icon:"🏫",label:"กลุ่มสาระ",fn:async()=>{const{renderDepartments:e}=await x(async()=>{const{renderDepartments:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderDepartments:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_homeroom",icon:"🏠",label:"ครูที่ปรึกษา",fn:async()=>{const{renderHomeroom:e}=await x(async()=>{const{renderHomeroom:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderHomeroom:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_students",icon:"👨‍🎓",label:"นักเรียน",fn:async()=>{const{renderStudents:e}=await x(async()=>{const{renderStudents:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderStudents:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_classrooms",icon:"🚪",label:"ห้องเรียน",fn:async()=>{const{renderClassroomsAdmin:e}=await x(async()=>{const{renderClassroomsAdmin:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderClassroomsAdmin:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_score_config",icon:"📊",label:"คอลัมน์คะแนน",fn:async()=>{const{renderScoreColConfig:e}=await x(async()=>{const{renderScoreColConfig:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderScoreColConfig:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_life_skill",icon:"🌱",label:"ทักษะชีวิต",fn:async()=>{const{renderLifeSkillAdmin:e}=await x(async()=>{const{renderLifeSkillAdmin:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderLifeSkillAdmin:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_reading",icon:"📗",label:"การอ่าน",fn:async()=>{const{renderReadingAdmin:e}=await x(async()=>{const{renderReadingAdmin:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderReadingAdmin:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_prayer",icon:"🕌",label:"ละหมาด",fn:async()=>{const{renderPrayerAdmin:e}=await x(async()=>{const{renderPrayerAdmin:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderPrayerAdmin:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_house_colors",icon:"🎨",label:"สีนักเรียน",fn:async()=>{const{renderHouseColors:e}=await x(async()=>{const{renderHouseColors:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderHouseColors:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_sports_admin",icon:"🏆",label:"ระบบกีฬาสี",fn:async()=>dt({admin:!0,teacherName:n==null?void 0:n.full_name,teacherCode:n==null?void 0:n.teacher_code})},{key:"menu_azfutsal",icon:"⚽",label:"AZFUTSALCUP",fn:async()=>un()},{key:"menu_sports_shirt_settings",icon:"👕",label:"ตั้งค่าและสรุปเสื้อกีฬาสี",fn:async()=>pt()},{key:"menu_sports_fund_admin",icon:"💰",label:"บัญชีเงินกีฬาสี",fn:async()=>ut()},{key:"manage_religion_groups",icon:"🕌",label:"กลุ่มวิชาศาสนา",fn:async()=>{const{renderReligionGroups:e}=await x(async()=>{const{renderReligionGroups:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderReligionGroups:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"manage_my_religion_group",icon:"👥",label:"กลุ่มของฉัน",fn:async e=>{const{renderMyReligionGroup:t}=await x(async()=>{const{renderMyReligionGroup:o}=await import("./views-DFKnUweL.js").then(s=>s.T);return{renderMyReligionGroup:o}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));t(e)}},{key:"menu_classroom_leaders",icon:"👑",label:"หัวหน้า/รองหัวหน้าห้อง",fn:async()=>{const{renderClassroomLeaders:e}=await x(async()=>{const{renderClassroomLeaders:t}=await import("./views-DFKnUweL.js").then(o=>o.T);return{renderClassroomLeaders:t}},__vite__mapDeps([22,1,2,3,4,5,6,23,20,8,9,10,11,12,13,14,15,16,17,18,19,21,0,7,24,25,26,27,28,29]));e()}},{key:"menu_tutorial",icon:"📖",label:"คู่มือการใช้งาน",fn:async()=>{const{renderTutorialAdmin:e}=await x(async()=>{const{renderTutorialAdmin:t}=await import("./tutorial-C3EpULMT.js");return{renderTutorialAdmin:t}},__vite__mapDeps([45,2,3,4,5,6,10,1]));e()}}];function oo(e,t,o=!1){var m;if(!e)return;const s={dept_head:"หัวหน้ากลุ่มสาระ",religion_group_head:"หัวหน้ากลุ่ม (ศาสนา)",religion_subgroup_head:"หัวหน้ากลุ่มย่อย (ศาสนา)",registrar_samai:"ทะเบียน (สามัญ)",registrar_religion:"ทะเบียน (ศาสนา)",registrar_pvch:"ทะเบียน (ปวช)",academic_samai:"วิชาการ (สามัญ)",academic_religion:"วิชาการ (ศาสนา)",academic_pvch:"วิชาการ (ปวช)",house_color_admin:"สีนักเรียน",classroom_leaders_admin:"ผู้ดูแลหัวหน้า/รองหัวหน้า",executive:"ผู้บริหาร"},a=(m=n==null?void 0:n.positions)!=null&&m.length?n.positions:n!=null&&n.position?[n.position]:[],c=a.length?a.map(d=>s[d]??d).join(" / "):o?"แอดมิน":"หัวหน้า",l=W.enabled!==!1&&W.teacher_menu!==!1,i=o?tt:tt.filter(d=>d.key==="lang_config"?z.lang_config||a.includes("dept_head"):d.key==="menu_house_colors"?z.menu_house_colors||a.includes("house_color_admin"):d.key==="menu_sports_admin"?l&&(z.menu_sports_admin||a.includes("house_color_admin")):d.key==="menu_sports_shirt_settings"||d.key==="menu_sports_fund_admin"?z.menu_sports_admin||a.includes("house_color_admin"):d.key==="menu_azfutsal"?!0:d.key==="menu_classroom_leaders"?z.menu_classroom_leaders||a.includes("classroom_leaders_admin"):d.key==="manage_religion_groups"?z.manage_religion_groups||a.includes("religion_group_head"):d.key==="manage_my_religion_group"?a.includes("religion_subgroup_head"):d.key==="announce_manage"?!!z.announce_manage:d.key==="announce_create"?!!z.announce_create:d.key==="work_calendar"?!!z.work_calendar:!!z[d.key]),r=(d,u,b)=>`<button data-sv="${d}" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium w-full text-left transition hover:bg-emerald-800/50" style="color:#d1fae5;">${u} ${b}</button>`;e.innerHTML=`
    <div style="padding:8px 12px;font-size:11px;color:#6ee7b7;font-weight:600;letter-spacing:.5px;margin-bottom:4px;">📊 ${c}</div>
    ${r("back","←","กลับโหมดสอน")}
    <div style="height:1px;background:#065f46;margin:8px 12px;"></div>
    ${r("dashboard","📊","Dashboard ติดตาม")}
    ${i.map(d=>r(d.key,d.icon,d.label)).join("")}`,e.querySelector('[data-sv="back"]').onclick=eo,e.querySelector('[data-sv="dashboard"]').onclick=()=>x(()=>import("./supervisor-B9QXB6Pr.js"),__vite__mapDeps([51,1,2,3,4,5,6,13,14,9,10])).then(d=>d.renderSupervisorDashboard(t,n,Y)),i.forEach(d=>{var u;(u=e.querySelector(`[data-sv="${d.key}"]`))==null||u.addEventListener("click",()=>d.fn(n,o))})}function so(e,t){e.querySelectorAll("[data-nav]").forEach(o=>{o.addEventListener("click",s=>{s.preventDefault(),j(o.dataset.nav)})}),e.querySelectorAll("button").forEach(o=>{o.textContent.trim().includes("Dashboard")&&(o.onclick=He)})}async function Pe(e){if(!n)return;let t=[];try{const[c,l]=await Promise.all([pe(n.id),H().catch(()=>({}))]),i=parseInt(l.academicYear??l.academic_year??2568),r=parseInt(l.semester??1);t=e==="attendance"?c.filter(d=>d.academic_year==null||+d.academic_year===i&&+d.semester===r):c;const m=t.map(d=>d.id).filter(Boolean);if(m.length){const{data:d,error:u}=await T.from("class_students").select("class_id").in("class_id",m);u&&console.warn("[quick-class-picker] โหลดจำนวนนักเรียนไม่สำเร็จ",u);const b=(d??[]).reduce((v,y)=>(v[y.class_id]=(v[y.class_id]||0)+1,v),{});t=t.map(v=>({...v,_studentCount:b[v.id]||0}))}}catch(c){console.error("[quick-class-picker] โหลดรายการห้องไม่สำเร็จ",c),E("โหลดรายการห้องเรียนไม่สำเร็จ กรุณาลองใหม่","error");return}if(!t.length){E("ยังไม่มีห้องเรียน","warning");return}if(t.length===1){nt(e,t[0]);return}const o=e==="attendance"?"✅ เลือกห้องเรียน — เช็คชื่อ":"📝 เลือกห้องเรียน — บันทึกคะแนน",s=document.createElement("div");s.id="qcp-overlay",s.className="fixed inset-0 z-[80] flex items-center justify-center p-4",s.innerHTML=`
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="qcp-backdrop"></div>
    <div class="relative bg-white w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[70vh] flex flex-col">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">${o}</p>
        <button id="qcp-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <div class="overflow-y-auto p-3 space-y-2">
        ${t.map(c=>{var l;return`
          <button data-cid="${c.id}" class="qcp-cls w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition border border-gray-100">
            <p class="font-semibold text-gray-800 text-sm">${c.class_name}</p>
            <p class="text-xs text-gray-400 mt-0.5">${((l=c.master_subjects)==null?void 0:l.subject_name)??""} · ${c.academic_year??currentYear}/${c.semester??currentSemester} · ${c._studentCount??0} คน</p>
          </button>`}).join("")}
      </div>
    </div>`,document.body.appendChild(s);const a=()=>s.remove();s.querySelector("#qcp-backdrop").onclick=a,s.querySelector("#qcp-close").onclick=a,s.querySelectorAll(".qcp-cls").forEach(c=>{c.onclick=()=>{a();const l=t.find(i=>String(i.id)===c.dataset.cid);l&&nt(e,l)}})}window._showClassQuickPicker=Pe;async function nt(e,t){if(e==="attendance"){const{renderAttendanceGrid:o}=await x(async()=>{const{renderAttendanceGrid:s}=await import("./teacher-views-attendance-B8qX3FnK.js");return{renderAttendanceGrid:s}},__vite__mapDeps([19,1,2,3,4,5,6,20,10]));o(n,t)}else{const{renderGradesGrid:o}=await x(async()=>{const{renderGradesGrid:s}=await import("./teacher-views-grades-BZQUk4FN.js").then(a=>a.t);return{renderGradesGrid:s}},__vite__mapDeps([16,1,2,3,4,5,6,14,17,18,10]));o(n,t)}}const ao=`
  <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`,ie="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/20 shadow-[0_10px_20px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.28)] ring-1 ring-white/30 text-2xl leading-none";function ro(e,t=null){return n?(e.prayerScannerTeachers||"").split(/[\s,]+/).map(s=>s.trim()).filter(Boolean).includes(n.teacher_code)||n.staff_type==="แอดมิน"||n.position==="admin"||t==="admin":!1}async function It(){var r,m,d,u,b,v,y,f;if(!n)return;(r=document.getElementById("teacher-scan-launcher"))==null||r.remove();const e=document.createElement("div");e.id="teacher-scan-launcher",e.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/50 p-4",e.innerHTML=`
    <div class="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-9 h-9 rounded-2xl text-white bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-700 flex items-center justify-center shadow-[0_10px_24px_rgba(5,150,105,0.30),inset_0_1px_0_rgba(255,255,255,0.35)]">${ao}</span>
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
  `,document.body.appendChild(e);const t=()=>e.remove();e.addEventListener("click",L=>{L.target===e&&t()}),(m=e.querySelector("#scan-launcher-close"))==null||m.addEventListener("click",t);const o=e.querySelector("#scan-launcher-body"),[s,a]=await Promise.all([H().catch(()=>({})),(async()=>{try{return await T.from("profiles").select("role").eq("id",n.profile_id).maybeSingle()}catch{return{data:null}}})()]),c=ro(s,((d=a==null?void 0:a.data)==null?void 0:d.role)??null),l="group w-full text-left rounded-3xl border p-4 flex gap-3 items-start hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition shadow-[0_14px_30px_rgba(15,23,42,0.12)]",i={attendance:{card:`${l} border-sky-700 bg-sky-600 hover:bg-sky-700 hover:shadow-[0_20px_42px_rgba(2,132,199,0.30)]`,icon:`${ie} text-white group-hover:shadow-[0_14px_26px_rgba(2,132,199,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-sky-50/85"},prayer:{card:`${l} border-emerald-700 bg-emerald-600 hover:bg-emerald-700 hover:shadow-[0_20px_42px_rgba(16,185,129,0.30)]`,icon:`${ie} text-white group-hover:shadow-[0_14px_26px_rgba(16,185,129,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-emerald-50/85"},leave:{card:`${l} border-orange-700 bg-orange-500 hover:bg-orange-600 hover:shadow-[0_20px_42px_rgba(249,115,22,0.30)]`,icon:`${ie} text-white group-hover:shadow-[0_14px_26px_rgba(249,115,22,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-orange-50/90"},score:{card:`${l} border-indigo-700 bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_20px_42px_rgba(79,70,229,0.30)]`,icon:`${ie} text-white group-hover:shadow-[0_14px_26px_rgba(79,70,229,0.28),inset_0_1px_0_rgba(255,255,255,0.36)]`,title:"text-white",sub:"text-indigo-50/85"}};o.innerHTML=`
    <div class="space-y-3">
      <button id="scan-launcher-attendance" type="button" class="${i.attendance.card}">
        <span class="${i.attendance.icon}" aria-hidden="true">✅</span>
        <span class="min-w-0">
          <span class="block font-extrabold ${i.attendance.title} text-sm">สแกน QR เช็คชื่อ</span>
          <span class="block text-xs ${i.attendance.sub} mt-1">เลือกห้องและคาบ ระบบจะโหลดข้อมูลเดิม แล้วเปิดกล้องสแกน</span>
        </span>
      </button>

      ${c?`
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
  `,(u=o.querySelector("#scan-launcher-attendance"))==null||u.addEventListener("click",async()=>{t();const{openAttendanceScanSetup:L}=await x(async()=>{const{openAttendanceScanSetup:M}=await import("./teacher-views-attendance-B8qX3FnK.js");return{openAttendanceScanSetup:M}},__vite__mapDeps([19,1,2,3,4,5,6,20,10]));L(n)}),(b=o.querySelector("#scan-launcher-leave"))==null||b.addEventListener("click",()=>{t(),j("student-leave-scanner")}),(v=o.querySelector("#scan-launcher-score"))==null||v.addEventListener("click",async()=>{t();const{openScoreScannerPickClass:L}=await x(async()=>{const{openScoreScannerPickClass:M}=await import("./score-qr-scanner-VY_3enml.js");return{openScoreScannerPickClass:M}},__vite__mapDeps([18,2,3,4,5,6,1]));L(n)}),(y=o.querySelector("#scan-launcher-prayer-open"))==null||y.addEventListener("click",async()=>{t();const{renderStudentPrayerScanner:L}=await x(async()=>{const{renderStudentPrayerScanner:M}=await import("./student-views-BUKOlkJv.js");return{renderStudentPrayerScanner:M}},__vite__mapDeps([52,1,2,3,4,5,6,14,53,10,26,35,20,15,12,17,32,9,7]));L(n)}),(f=o.querySelector("#scan-launcher-prayer-request"))==null||f.addEventListener("click",async()=>{const L=o.querySelector("#scan-launcher-prayer-request");L.disabled=!0,L.textContent="กำลังส่งคำขอ...";const M=["ขอสิทธิ์สแกนละหมาด",`ชื่อครู: ${n.full_name||"-"}`,`รหัสครู: ${n.teacher_code||"-"}`,`กลุ่มสาระ: ${n.dept||"-"}`,"","ต้องการใช้งานปุ่มกล้องกลางเพื่อสแกนละหมาด"].join(`
`);try{await Wt({profileId:n.profile_id,senderRole:"teacher",senderName:n.full_name||n.teacher_code||"คุณครู",category:"suggestion",message:M}),E("ส่งคำขอสิทธิ์สแกนละหมาดถึงแอดมินแล้ว","success"),t()}catch(h){L.disabled=!1,L.textContent="ขอสิทธิ์สแกนละหมาด",E((h==null?void 0:h.code)==="FEEDBACK_LIMIT_REACHED"?`ส่งความคิดเห็นครบโควต้าเดือนนี้แล้ว (${h.limit} ครั้ง/เดือน)`:"ส่งคำขอไม่สำเร็จ กรุณาลองใหม่",(h==null?void 0:h.code)==="FEEDBACK_LIMIT_REACHED"?"warning":"error")}})}window._openTeacherScanLauncher=It;async function io(){if("serviceWorker"in navigator)try{await navigator.serviceWorker.register("/pp5online/sw.js",{scope:"/pp5online/"})}catch{}}function lo(){if(document.getElementById("notify-banner"))return;const e=document.createElement("div");e.id="notify-banner",e.className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[80] w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-indigo-100 p-4 flex items-center gap-3 animate-fade",e.innerHTML=`
    <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">🔔</div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-gray-800">เปิดการแจ้งเตือน?</p>
      <p class="text-xs text-gray-400 mt-0.5">แจ้งก่อนเข้าสอนตามที่ตั้งค่าไว้</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <button id="notify-deny" class="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">ไม่</button>
      <button id="notify-allow" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition">เปิด</button>
    </div>`,document.body.appendChild(e),e.querySelector("#notify-deny").addEventListener("click",()=>{e.remove(),localStorage.setItem("pp5_notify_dismissed","1")}),e.querySelector("#notify-allow").addEventListener("click",async()=>{e.remove(),await Notification.requestPermission()==="granted"&&(E("เปิดการแจ้งเตือนแล้ว ✅","success"),n!=null&&n.id&&await qt(n.id),n!=null&&n.profile_id&&ct(n.profile_id))}),setTimeout(()=>e.remove(),12e3)}async function qt(e){var t,o,s;if(!(!("Notification"in window)||Notification.permission!=="granted"))try{const a=await H().catch(()=>({})),c=parseInt(a.notifyBeforeMinutes)||10,l=parseInt(a.academicYear??2568),i=parseInt(a.semester??1),[r,m,d,u]=await Promise.all([Re(e,l,i).catch(()=>[]),Be(e).catch(()=>[]),rt().catch(()=>[]),pe(e).catch(()=>[])]),b=new Date,v=b.getDay(),y=b.getHours()*60+b.getMinutes(),f={};m.forEach(p=>{f[p.teacher_schedule_id]||(f[p.teacher_schedule_id]=[]),f[p.teacher_schedule_id].push(p.class_id)});const L=Object.fromEntries(u.map(p=>[p.id,p])),M=Object.fromEntries(d.map(p=>[p.period_no,p]));(window._notifyTimeouts??[]).forEach(p=>clearTimeout(p)),window._notifyTimeouts=[];const h=r.filter(p=>p.day_of_week===v&&(f[p.id]??[]).length>0).map(p=>({...p,linkedClasses:(f[p.id]??[]).map(w=>L[w]).filter(Boolean),period:M[p.period_no]}));let C=0;for(const p of h){if(!((t=p.period)!=null&&t.start_time))continue;const[w,S]=p.period.start_time.split(":").map(Number),g=w*60+S-c,_=g-y;if(_<=0)continue;const P=((s=(o=p.linkedClasses[0])==null?void 0:o.master_subjects)==null?void 0:s.subject_name)??"วิชา",$=p.linkedClasses.map(N=>{var V;const B=N.classroom_id?(V=window._classroomMapGlobal)==null?void 0:V[N.classroom_id]:null;return N.class_name+(B?` 📍${B.building} ${B.room_number}`:"")}).join(", "),F=p.period.start_time.substring(0,5),G=setTimeout(async()=>{var V;const N=await((V=navigator.serviceWorker)==null?void 0:V.ready.catch(()=>null)),B={body:`${P} · ${$}
คาบ ${p.period_no} เวลา ${F}`,icon:"/pp5online/vite.svg",badge:"/pp5online/vite.svg",tag:`class-${p.id}-${g}`,requireInteraction:!1,silent:!1};N?N.showNotification(`🔔 อีก ${c} นาที — คาบถัดไป`,B):new Notification(`🔔 อีก ${c} นาที — คาบถัดไป`,B)},_*6e4);window._notifyTimeouts.push(G),C++}C>0&&E(`ตั้งแจ้งเตือน ${C} คาบสำหรับวันนี้ 🔔`,"info")}catch{}}async function co(e){"Notification"in window&&(await io(),Notification.permission==="granted"?(await qt(e),n!=null&&n.profile_id&&ct(n.profile_id)):Notification.permission==="default"&&(localStorage.getItem("pp5_notify_dismissed")||setTimeout(lo,2e3)))}async function mo(){try{const{data:e}=await T.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(!e)return;const{data:t}=await T.from("sports_portal_settings").select("teacher_shirt_request_enabled").eq("event_id",e.id).maybeSingle();if(!(t!=null&&t.teacher_shirt_request_enabled))return;const{data:o}=await T.from("sports_shirt_teacher_requests").select("id").eq("event_id",e.id).eq("teacher_id",n.id).maybeSingle();if(o)return;uo()}catch{}}function uo(){var t;(t=document.getElementById("shirt-size-reminder-popup"))==null||t.remove();const e=document.createElement("div");e.id="shirt-size-reminder-popup",e.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.querySelector("#ssrp-go").addEventListener("click",()=>{e.remove(),x(()=>import("./sports-portals.js_v_10.22-kVNs_U_9.js"),__vite__mapDeps([44,1,29,3,28,9,15,4,12])).then(o=>{var s;return(s=o.openTeacherShirtSizeModal)==null?void 0:s.call(o,n)})}),e.querySelector("#ssrp-close").addEventListener("click",()=>e.remove())}async function po(){try{const e=await H().catch(()=>({})),t=parseInt(e.academicYear??2568),o=parseInt(e.semester??1),[s,a,c]=await Promise.all([pe(n.id).catch(()=>[]),Re(n.id,t,o).catch(()=>[]),Be(n.id).catch(()=>[])]);if(!s.length)return;if(!a.length){ot("no_schedule");return}const l=new Set(c.map(r=>r.class_id)),i=s.filter(r=>!l.has(r.id));i.length>0&&ot("has_unlinked",i.length,i.map(r=>r.id))}catch{}}function ot(e,t=0,o=[]){var c;(c=document.getElementById("sched-link-prompt"))==null||c.remove();const s=e==="no_schedule",a=document.createElement("div");a.id="sched-link-prompt",a.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6",a.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br ${s?"from-indigo-500 to-purple-500":"from-amber-400 to-orange-400"} px-6 py-6 text-center">
        <div class="text-4xl mb-2">${s?"🗓️":"🔗"}</div>
        <h3 class="text-white font-bold text-base">${s?"ยังไม่มีตารางสอน":`มี ${t} ห้องที่ยังไม่เชื่อมโยง`}</h3>
        <p class="text-white/80 text-xs mt-1">${s?"สร้างตารางสอนเพื่อรับสิทธิ์การแจ้งเตือนและการเรียงห้อง":"เชื่อมโยงห้องเรียนกับตารางสอนเพื่อใช้ฟีเจอร์เต็มประสิทธิภาพ"}</p>
      </div>
      <div class="p-6">
        <div class="space-y-2 mb-5">
          ${["แจ้งเตือนวันนี้สอนวิชาอะไร กี่โมง","Countdown นับถอยหลังก่อนเข้าสอน","เรียงห้องเรียนตามเวลาที่ใกล้ที่สุด","แสดงวัน/คาบบนการ์ดแต่ละห้อง"].map(l=>`<p class="text-xs text-gray-500">✅ ${l}</p>`).join("")}
        </div>
        <button id="slp-go"
          class="w-full py-3 rounded-2xl ${s?"bg-indigo-600 hover:bg-indigo-700":"bg-amber-500 hover:bg-amber-600"}
                 text-white font-bold text-sm shadow-md transition mb-2">
          ${s?"🗓️ สร้างตารางสอนตอนนี้":"🔗 ไปเชื่อมโยงห้องเรียน"}
        </button>
        <button id="slp-close"
          class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">
          ภายหลัง
        </button>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#slp-go").addEventListener("click",()=>{a.remove(),s?window._navTo("schedule-builder"):o.length===1&&window._openCombinedEdit?(window._navTo("my-classes"),setTimeout(()=>{var l;return(l=window._openCombinedEdit)==null?void 0:l.call(window,o[0],"schedule")},400)):window._navTo("my-classes")}),a.querySelector("#slp-close").addEventListener("click",()=>a.remove())}window._openScheduleLinkModal=async e=>{var c,l,i;const t=(c=window._classCache)==null?void 0:c[e],o=(l=window._classColorCache)==null?void 0:l[e],s=(t==null?void 0:t.class_name)??"—",a=t==null?void 0:t.master_subjects;try{E("กำลังโหลด...","info");const r=await H().catch(()=>({})),m=parseInt(r.academicYear??2568),d=parseInt(r.semester??1),[u,b,v]=await Promise.all([Re(n==null?void 0:n.id,m,d).catch(()=>[]),Be(n==null?void 0:n.id).catch(()=>[]),rt().catch(()=>[])]);if(!u.length){E("ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อนครับ","error");return}const y=new Set(b.filter(g=>g.class_id===e).map(g=>g.teacher_schedule_id)),f=new Set(y),L=Object.fromEntries(v.map(g=>[g.period_no,g])),M=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],h={};b.filter(g=>g.class_id!==e).forEach(g=>{var P,$;const _=(P=window._classCache)==null?void 0:P[g.class_id];_&&(h[g.teacher_schedule_id]||(h[g.teacher_schedule_id]=[]),h[g.teacher_schedule_id].push({className:_.class_name??"—",subjectName:(($=_.master_subjects)==null?void 0:$.subject_name)??"—"}))});const C=(o==null?void 0:o.soft)??"#f0fdf4",p=(o==null?void 0:o.border)??"#d1fae5",w=(o==null?void 0:o.text)??"#065f46";(i=document.getElementById("sched-link-modal"))==null||i.remove();const S=document.createElement("div");S.id="sched-link-modal",S.className="fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4";const R=(g,_)=>{const P=L[g.period_no],$=P?`${P.start_time.substring(0,5)} – ${P.end_time.substring(0,5)}`:"",F=g.span_periods>1?`–${g.period_no+g.span_periods-1}`:"",G=h[g.id]??[],N=G.length>0&&!_;let B,V;_?(B="border-emerald-400 bg-emerald-50 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]",V='<span class="text-xl flex-shrink-0 mt-0.5">✅</span>'):N?(B="border-gray-200 bg-gray-50 opacity-70 cursor-pointer",V='<span class="text-xl flex-shrink-0 mt-0.5">🔒</span>'):(B="border-gray-200 bg-white hover:border-gray-300",V='<span class="text-xl flex-shrink-0 mt-0.5">⬜</span>');const X=G.map(k=>`${k.subjectName} (${k.className})`).join(", ");return`
      <button type="button" class="slm-card w-full text-left p-4 rounded-2xl border-2 transition-all ${B}"
        data-id="${g.id}" data-sel="${_?"1":"0"}" data-locked="${N?"1":"0"}"
        data-others="${X.replace(/"/g,"&quot;")}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            <p class="text-base font-bold text-gray-800">${M[g.day_of_week]} · คาบ ${g.period_no}${F}</p>
            <p class="text-sm text-gray-500 mt-0.5">${$}</p>
            ${g.class_name?`<p class="text-base font-semibold mt-1" style="color:${w}">${g.class_name}</p>`:""}
            ${G.length>0?`<p class="text-[11px] text-amber-600 mt-1.5">⚠️ เชื่อมกับ: ${X}</p>`:""}
          </div>
          ${V}
        </div>
      </button>`};S.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>

        <!-- Header พร้อมสีห้อง -->
        <div class="px-5 pt-5 pb-4 border-b rounded-t-2xl flex-shrink-0"
          style="background:${C}; border-color:${p}">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-wider mb-1" style="color:${w}">🔗 เชื่อมโยงตารางสอน</p>
              <h3 class="text-xl font-extrabold leading-tight" style="color:${w}">${s}</h3>
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
            ${u.map(g=>R(g,f.has(g.id))).join("")}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-4 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
          <button id="slm-save"
            class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition">
            บันทึกการเชื่อมโยง
          </button>
        </div>
      </div>`,document.body.appendChild(S),S.querySelector("#slm-list").addEventListener("click",g=>{var N;const _=g.target.closest(".slm-card");if(!_)return;const P=parseInt(_.dataset.id),$=_.dataset.sel==="1",F=_.dataset.locked==="1",G=u.find(B=>B.id===P);if(F&&!$){(N=document.getElementById("slm-confirm-popup"))==null||N.remove();const B=document.createElement("div");B.id="slm-confirm-popup",B.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-6";const V=_.dataset.others;B.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">⚠️</div>
            <h4 class="font-bold text-gray-800 mb-2">คาบนี้ถูกเชื่อมโยงแล้ว</h4>
            <p class="text-xs text-gray-500 leading-relaxed mb-5">
              คาบนี้ถูกเชื่อมโยงกับ<br/>
              <span class="font-semibold text-amber-700">${V}</span><br/>
              ต้องการเชื่อมโยงเพิ่มเข้า<br/>
              <span class="font-semibold text-indigo-700">${s}</span> ด้วยหรือไม่?
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
          </div>`,document.body.appendChild(B),B.querySelector("#slm-conf-no").addEventListener("click",()=>B.remove()),B.querySelector("#slm-conf-yes").addEventListener("click",()=>{B.remove(),f.add(P),_.outerHTML=R(G,!0)});return}$?f.delete(P):f.add(P),_.outerHTML=R(G,!$)}),S.querySelector("#slm-close").addEventListener("click",()=>S.remove()),S.addEventListener("click",g=>{g.target===S&&S.remove()}),S.querySelector("#slm-save").addEventListener("click",async()=>{const g=S.querySelector("#slm-save");g.disabled=!0,g.textContent="⏳ กำลังบันทึก...";try{const _=[...f].filter($=>!y.has($)),P=[...y].filter($=>!f.has($));await Promise.all([..._.map($=>Ht(e,$)),...P.map($=>Ft(e,$))]),E("บันทึกการเชื่อมโยงแล้ว ✅","success"),S.remove(),window._navTo("my-classes")}catch(_){E("เกิดข้อผิดพลาด: "+te(_),"error"),g.disabled=!1,g.textContent="บันทึกการเชื่อมโยง"}})}catch(r){E("โหลดข้อมูลไม่ได้: "+te(r),"error")}};document.addEventListener("DOMContentLoaded",async()=>{var r,m,d,u,b,v,y,f,L,M,h,C;on();const e=pn();let t=!1;if(e)try{if($e(!0),await bn(T),n=e.profile_id?await ae(e.profile_id).catch(()=>null)??await Ge(e.id).catch(()=>e):await Ge(e.id).catch(()=>e),!(n!=null&&n.id)||(n==null?void 0:n.profile_id)!==e.profile_id)throw new Error("ไม่พบข้อมูลครูเป้าหมายของเซสชันสวมบทบาท");const{data:p}=await T.from("profiles").select("role,is_also_admin").eq("id",e.profile_id).maybeSingle();if(Y=(p==null?void 0:p.is_also_admin)===!0,se=(p==null?void 0:p.role)==="admin"||Y,await De(),await lt("teacher",n??{}),Q=n!=null&&n.id?await ye(n.id).catch(()=>[]):[],n!=null&&n.position||(r=n==null?void 0:n.positions)!=null&&r.length){const g=(m=n.positions)!=null&&m.length?n.positions:[n.position];z=await Ue(g).catch(()=>({}))}await ve(),Xe(n),ft(n),await bt();const w=document.getElementById("impersonation-banner"),S=document.getElementById("impersonation-name"),R=document.getElementById("impersonation-exit");w&&S&&(S.textContent=`${(n==null?void 0:n.full_name)??e.full_name} (${(n==null?void 0:n.teacher_code)??e.teacher_code??""})`,w.classList.remove("hidden"),w.classList.add("flex")),R&&R.addEventListener("click",async()=>{try{R.disabled=!0,R.textContent="กำลังกลับสู่บัญชีแอดมิน...",await We(T),window.location.replace("dashboard.html")}catch(g){console.error("Cannot end impersonation:",g),R.disabled=!1,R.textContent="← ออกจากโหมดนี้",E("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}}),t=!0}catch(p){console.error("Invalid impersonation session:",p),fn(),await T.auth.signOut(),E("เซสชันสวมบทบาทไม่ถูกต้อง กรุณาเข้าสู่ระบบแอดมินใหม่","error"),setTimeout(()=>window.location.replace("index.html"),1e3);return}if(!t){const p=await qn();if(!p)return;if(await Ne(p.user.id),Q=n?await ye(n.id).catch(()=>[]):[],n!=null&&n.position||(d=n==null?void 0:n.positions)!=null&&d.length){const w=(u=n.positions)!=null&&u.length?n.positions:[n.position];z=await Ue(w).catch(()=>({}))}await ve(),Xe(n),zt("teachers").catch(()=>{}),Gt("teacher").catch(()=>{})}Te(),Ce(),Vn(),n!=null&&n.id&&Kn(n.id),n!=null&&n.id&&po(),n!=null&&n.id&&mo(),n!=null&&n.id&&co(n.id),sn(),to(),no(),Tt(),n!=null&&n.profile_id&&Ct({profileId:n.profile_id,role:"teacher",name:n.full_name}),n!=null&&n.id&&x(()=>import("./teacher-views-donor-chat-CqRXptr9.js"),__vite__mapDeps([54,1,2,3,4,5,6,10,15,40,41,12,8,26,27,42,43,28,7,44,29,9,45,46,17])).then(p=>{p.injectDonorChatWidget(n),he(me)}),Un(),he(me);const o=document.getElementById("app-version");if(o&&(o.textContent=`v${At}`,se)){o.classList.add("cursor-pointer","hover:underline");const p=(n==null?void 0:n.profile_id)||((v=(b=(await T.auth.getSession()).data.session)==null?void 0:b.user)==null?void 0:v.id);p&&o.addEventListener("click",()=>Fe(p,!0,!0))}!t&&(n!=null&&n.profile_id)&&se&&Fe(n.profile_id,!1,!0),window.addEventListener("teacher-nav",async p=>{const{view:w,classId:S}=p.detail??{};if(w==="class-detail-sv"&&S){try{const R=await Ut(S);if(R){window._openStudentManager=()=>Promise.resolve(),window._openCombinedEditModal=()=>{},window._classCache={[R.id]:R};const{renderClassDetail:g}=await x(async()=>{const{renderClassDetail:_}=await import("./teacher-views-CWNu-rJ1.js");return{renderClassDetail:_}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));if(await g(n,S,{supervisorMode:!0,classes:[R],defaultTab:"attendance"}),window._svBackToDetail){const _=window._svBackToDetail,P=window._backToClasses;window._backToClasses=()=>{const $=document.getElementById("main-content-bak"),F=document.getElementById("main-content");F&&(F.id="cd-tab-content"),$&&($.id="main-content"),_()}}setTimeout(()=>{document.querySelectorAll(".cd-tab").forEach(_=>{_.dataset.tab==="students"&&(_.style.display="none")}),document.querySelectorAll("button").forEach(_=>{const P=_.textContent.trim();["ทำสำเนา","แก้ไข","ลบ"].some($=>P.includes($))&&(_.style.display="none"),P.includes("ปพ.5")&&!P.includes("ดูภาพรวม")&&(_.innerHTML="📋 ดูภาพรวม ปพ.5")})},200)}}catch(R){console.error("supervisor class view error:",R)}return}S&&(window._sv_classId=S),j(w??"overview")}),document.querySelectorAll("[data-nav]").forEach(p=>{p.addEventListener("click",w=>{w.preventDefault(),j(p.dataset.nav)})}),(y=document.getElementById("btn-quick-attendance"))==null||y.addEventListener("click",p=>{p.preventDefault(),Pe("attendance")}),(f=document.getElementById("btn-quick-grades"))==null||f.addEventListener("click",p=>{p.preventDefault(),Pe("grades")}),(L=document.getElementById("btn-quick-leave-scanner"))==null||L.addEventListener("click",p=>{p.preventDefault(),It()}),(M=document.getElementById("menu-dashboard"))==null||M.addEventListener("click",async p=>{p.preventDefault();const{openDashboardRoomPicker:w}=await x(async()=>{const{openDashboardRoomPicker:S}=await import("./teacher-views-dashboard-B4a2-7-n.js");return{openDashboardRoomPicker:S}},__vite__mapDeps([49,2,3,4,5,6]));w(n,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})}),vt(),Pn(),jn();const s=document.getElementById("sidebar"),a=document.getElementById("sidebar-overlay");(h=document.getElementById("btn-menu"))==null||h.addEventListener("click",()=>{s.classList.toggle("-translate-x-full");const p=!s.classList.contains("-translate-x-full");a.classList.toggle("hidden",!p),document.body.classList.toggle("mobile-sidebar-open",p)}),a==null||a.addEventListener("click",()=>{s.classList.add("-translate-x-full"),a.classList.add("hidden"),document.body.classList.remove("mobile-sidebar-open")}),(C=document.getElementById("btn-logout"))==null||C.addEventListener("click",async()=>{if(t){try{await We(T),window.location.replace("dashboard.html")}catch(p){console.error("Cannot end impersonation:",p),E("ยังไม่สามารถกลับสู่บัญชีแอดมินได้ กรุณาลองอีกครั้ง","error")}return}await T.auth.signOut(),cn(),E("ออกจากระบบแล้ว","info"),setTimeout(()=>window.location.replace("index.html"),800)}),$e(!1);const c=new URLSearchParams(window.location.search),l=c.get("setup")==="1",i=c.get("view");l?(j("setup"),history.replaceState({},"","teacher.html")):i&&gt[i]?(window._pendingQRTab=c.get("tab")||null,j(i)):j("overview")});
