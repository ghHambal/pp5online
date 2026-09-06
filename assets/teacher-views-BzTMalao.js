const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/teacher-views-smart-classroom-BNyIlVzh.js","assets/ui-Dh03k4iX.js","assets/teacher-SRnLzIgv.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sports-portals.js_v_10.22-BrIjazIR.js","assets/impersonation-C66q0Y-O.js","assets/storage-D6nkcVz6.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-qsIWmalF.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/wen-sso-CcN06Rhh.js","assets/azfutsal-modal-wts4xj80.js","assets/tutorial-FuIPnEx0.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-C8s-TuM0.js","assets/quiz-api-DaBneRGn.js","assets/score-qr-scanner-SDrghEsT.js","assets/teacher-views-attendance-C31WiJPz.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-quiz-monitor-BIcUtV1X.js","assets/teacher-views-quiz-analytics-CZtaCsWK.js","assets/teacher-views-dashboard-MihUIb1e.js","assets/teacher-views-classes-s_CI5F_w.js","assets/pp5-doc-CVTwqJKw.js","assets/teacher-views-grades-DyBe1K7u.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-Be7c01S6.js"])))=>i.map(i=>d[i]);
import{a as J,_ as me}from"./ui-Dh03k4iX.js";import{getDepartments as Ge,getTeachers as ht,getSubjectCoTeachers as qt,updateMyProfile as et,getCourseDocPage2 as Ht,getSystemConfig as Ne,getMySubjects as wt,getMasterSubjects as $t,getMyClasses as tt,getUniqueRooms as _t,getUniqueReligionRooms as kt,getCourseDocLangSettings as Ft,getCourseSyllabus as zt,getLessonPlans as Gt,findCurriculumStandards as Vt,saveCourseDocPage2 as Wt,getClassStudents as Ut,getMySchedule as Yt,getClassScheduleLinks as Xt,getPeriods as Kt,getClassrooms as Jt,getWorkCalendarEvents as Qt,getExecutiveOverviewStats as Zt,updateTeacher as rt}from"./api-1xsyVspL.js";import{c as Et,s as Ue}from"./supabase-BV-W2lsh.js";import"./sports-portals.js_v_10.22-BrIjazIR.js";import{u as es,o as Ct}from"./storage-D6nkcVz6.js";import{_DAYS_TH_FULL as St,setActiveNav as he,setTitle as we,setContent as xe,SELECT_CLS as ue,INPUT_CLS as W,CREDIT_OPTS as ts,GRADE_OPTS as We,formatPhone as Fe,_htmlEsc as n,_dutyCountdownInfo as ss,_teacherPositionList as it,_currentWeek as as,renderIconTile as jt,_activeRemainingDisplay as dt,_countdownInfo as Oe}from"./teacher-views-utils-B2Iz3UWp.js";import{_ as os}from"./teacher-views-grades-DyBe1K7u.js";import{a as la,b as ra,c as ia,r as da}from"./teacher-views-grades-DyBe1K7u.js";import{b as Hs,d as Fs,a as zs,r as Gs}from"./teacher-views-classes-s_CI5F_w.js";import{e as pa,c as ma,f as ua,g as xa,h as ba}from"./teacher-views-classes-s_CI5F_w.js";import{o as ns}from"./pp5-doc-CVTwqJKw.js";import{renderAttendance as fa,renderAttendanceGrid as va,renderLifeSkillScore as ya,renderPrayerRoomMonitor as ha,renderPrayerScore as wa,renderReadingScore as $a}from"./teacher-views-attendance-C31WiJPz.js";import"./impersonation-C66q0Y-O.js";import"./browser-JP79f-a9.js";import"./regrade-api-C8s-TuM0.js";import"./score-qr-scanner-SDrghEsT.js";import"./confetti-loader-BAN5Lv-C.js";import"./leave-time-CrS9gT63.js";const Lt="https://zhjqkylesnhcotpkzoxr.supabase.co",Tt="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let fe=null;function ct(e,a,t){const x=new Date(a+"T00:00:00"),b=new Date(e+"T00:00:00"),w=Math.floor((b-x)/864e5);if(w<0)return null;const d=Math.floor(w/7)+1;return d<=t?d:null}function ls(e,a,t){const[x,b]=e.includes(":")?e.split(":"):[null,e];return(x===null||x===t)&&b===a}async function rs(e){if(!e)return null;fe||(fe=Et(Lt,Tt));const[a,t,x]=await Promise.all([fe.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),fe.from("duty_points").select("assigned_to"),fe.from("settings").select("week_start_date,total_weeks").single()]),b=x.data||{},w=b.week_start_date,d=b.total_weeks||20;if(!w)return null;const p=new Date().toISOString().slice(0,10),E=ct(p,w,d)||1;if(E<=5)return{grade:"A",score:100,week:E};const $=String(e);let S=0;for(const L of t.data||[])for(const N of L.assigned_to||[])(N.includes(":")?N.split(":")[1]:N)===$&&S++;if(S===0)return null;const r={};for(const L of a.data||[]){const N=ct(L.date,w,d);N!==null&&(r[N]||(r[N]=[]),r[N].push(L))}const u=5,i=Math.min(E,d-2);let y=0;for(let L=1;L<=i;L++)if(L<=u)y+=100;else{const N=r[L]||[],q=N.length,Q=N.filter(oe=>oe.is_late).length,f=q-Q,P=Math.min(100,Math.round(q/S*100)),Y=q>0?Math.max(0,Math.round(f/q*100)):100;y+=Math.round(P*.6+Y*.4)}const _=Math.round(y/i);return{grade:_>=90?"A":_>=75?"B":"C",score:_,week:E}}async function is(e){if(!e)return[];fe||(fe=Et(Lt,Tt));const{data:a,error:t}=await fe.from("duty_points").select("name, time, assigned_to");if(t||!a)return[];const x=String(e),b=St[new Date().getDay()];return a.filter(w=>(w.assigned_to??[]).some(d=>ls(d,x,b))).map(w=>{const[d,p]=String(w.time??"").split("-").map(E=>E.trim());return{name:w.name,time:w.time,start_time:d,end_time:p}})}async function Qs(e){he("my-courses"),we("คอร์สวิชาของฉัน","courses"),xe(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[a,t]=await Promise.all([e?wt(e.id):$t().catch(()=>[]),e?tt(e.id).catch(()=>[]):Promise.resolve([])]),x=a,b=r=>t.filter(u=>{var c;return Number(u.course_id??((c=u.master_subjects)==null?void 0:c.id))===Number(r)}),w=r=>Number.isInteger(r)?String(r):Number(r).toFixed(1).replace(/\.0$/,""),d=r=>{const u=Number(r.credit),c=Number.isFinite(u)&&u>0;return{roomCount:b(r.id).length,credit:c?w(u):"—",periodsPerWeek:c?w(u*2):"—",periodsPerTerm:c?w(u*40):"—"}},p=r=>String(r.dept??r.subject_group??"").trim()||"รายวิชาอื่น ๆ",E=[...a.reduce((r,u)=>{const c=p(u);return r.has(c)||r.set(c,[]),r.get(c).push(u),r},new Map).entries()].sort(([r],[u])=>r.localeCompare(u,"th",{numeric:!0})),$=(r,u,c,i)=>`<div class="rounded-xl border ${i} px-3 py-2.5 min-w-0">
      <div class="flex items-center gap-2"><span class="text-base">${r}</span><strong class="text-lg leading-none text-gray-800">${u}</strong></div>
      <p class="mt-1 text-[10px] font-semibold text-gray-500">${c}</p>
    </div>`,S=r=>{const u=d(r);return`<article class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden">
        <div class="p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">${n(r.subject_code??"—")}</span>
                ${r.dept?`<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">${n(r.dept)}</span>`:""}
              </div>
              <h3 class="mt-2 text-base sm:text-lg font-extrabold text-gray-900 leading-snug">${n(r.subject_name)}</h3>
              <p class="mt-1 text-xs text-gray-400">ระดับชั้น ${n(r.grade_level??"ไม่ระบุ")}</p>
            </div>
            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center text-xl">📚</div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${$("🏫",u.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${$("🎓",u.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${$("🗓️",u.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${$("⏱️",u.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
          </div>

          <div class="grid sm:grid-cols-[1fr_auto] gap-2 mt-4">
            <button class="course-workspace-btn min-h-[44px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-4 flex items-center justify-center gap-2 shadow-sm"
              data-sid="${r.id}">📘 กำหนดการสอนและแผนหน้าเดียว</button>
            <button onclick="window._openRegisterClass(${r.id})"
              class="min-h-[44px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 flex items-center justify-center gap-2">＋ เปิดห้องเรียน</button>
          </div>
        </div>

        <details class="border-t border-gray-100 group">
          <summary class="list-none cursor-pointer px-4 sm:px-5 py-3 flex items-center justify-between text-xs font-bold text-gray-600 hover:bg-gray-50 select-none">
            <span>เครื่องมือและเอกสารของรายวิชา</span><span class="text-gray-400 group-open:rotate-180 transition">⌄</span>
          </summary>
          <div class="px-4 sm:px-5 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button class="ccm-open-btn min-h-[40px] text-xs text-indigo-700 font-semibold border border-indigo-100 bg-indigo-50/50 rounded-xl hover:bg-indigo-50" data-sid="${r.id}" data-sname="${n(r.subject_name)}">⚙️ คอลัมน์คะแนน</button>
            <button onclick="window._openCourseDocPage2(${r.id})" class="min-h-[40px] text-xs text-emerald-700 font-semibold border border-emerald-100 bg-emerald-50/50 rounded-xl hover:bg-emerald-50">📝 คำอธิบายรายวิชา</button>
            <button class="lesson-plan-btn min-h-[40px] text-xs text-sky-700 font-semibold border border-sky-100 bg-sky-50/50 rounded-xl hover:bg-sky-50" data-sid="${r.id}">📋 ใบขออนุญาต</button>
            <button class="pp5-course-btn min-h-[40px] text-xs text-violet-700 font-semibold border border-violet-100 bg-violet-50/50 rounded-xl hover:bg-violet-50" data-sid="${r.id}">💾 เอกสาร ปพ.5</button>
          </div>
          <div class="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-end gap-2 flex-wrap">
            <button onclick="window._copyCourse(${r.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-purple-700 hover:bg-purple-50">📋 ทำสำเนา</button>
            <button onclick="window._editCourse(${r.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-gray-600 hover:bg-gray-100">✏️ แก้ไข</button>
            <button class="cd2-del-course-btn min-h-[36px] px-3 rounded-lg border border-red-100 bg-white text-xs font-semibold text-red-500 hover:bg-red-50" data-id="${r.id}" data-name="${n(r.subject_name)}">🗑️ ลบ</button>
          </div>
        </details>
      </article>`};xe(`<div class="animate-fade">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <p class="text-sm font-bold text-gray-700">รายวิชาที่เปิดสอน ${a.length} คอร์ส · ${t.length} ห้องเรียน</p>
          <p class="text-xs text-gray-400 mt-1">จำนวนคาบคำนวณตามโครงสร้างหลักสูตร 1 หน่วยกิต = 2 คาบต่อสัปดาห์ = 40 คาบต่อภาคเรียน</p>
        </div>
        <button onclick="window._openCourseForm()"
          class="btn-primary min-h-[44px] px-5 py-2.5 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 flex-shrink-0">
          <span>＋</span> เปิดคอร์สใหม่
        </button>
      </div>
      ${a.length?`
      <div class="space-y-7">
        ${E.map(([r,u])=>`<section>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">🏷️</div>
            <div><h2 class="font-extrabold text-gray-800">กลุ่มสาระ ${n(r)}</h2><p class="text-[11px] text-gray-400">${u.length} คอร์ส · ${u.reduce((c,i)=>c+b(i.id).length,0)} ห้องเรียน</p></div>
            <div class="h-px bg-gray-200 flex-1"></div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${u.map(S).join("")}</div>
        </section>`).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(r=>{r.addEventListener("click",()=>{window._deleteCourse(Number(r.dataset.id),r.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(r=>{r.addEventListener("click",()=>{os(parseInt(r.dataset.sid),r.dataset.sname,t)})}),document.querySelectorAll(".course-workspace-btn").forEach(r=>{r.addEventListener("click",()=>{const u=parseInt(r.dataset.sid,10),c=a.find(i=>i.id===u);c&&At(e,c,t)})}),document.querySelectorAll(".lesson-plan-btn").forEach(r=>{r.addEventListener("click",async()=>{const u=parseInt(r.dataset.sid),c=a.find(N=>N.id===u);if(!c)return;const i=t.filter(N=>{var q;return N.course_id===u||((q=N.master_subjects)==null?void 0:q.id)===u}),{getSystemConfig:y,getDepartments:_}=await me(async()=>{const{getSystemConfig:N,getDepartments:q}=await import("./api-1xsyVspL.js");return{getSystemConfig:N,getDepartments:q}},__vite__mapDeps([0,1])),[A,L]=await Promise.all([y().catch(()=>({})),_().catch(()=>[])]);Is(c,i,e,A,L)})}),document.querySelectorAll(".pp5-course-btn").forEach(r=>{r.addEventListener("click",()=>{const u=parseInt(r.dataset.sid),c=t.filter(i=>{var y;return i.course_id===u||((y=i.master_subjects)==null?void 0:y.id)===u});c.length===1?openPP5Doc(c[0].id):ns(c)})})}catch{J("โหลดข้อมูลไม่สำเร็จ","error")}}async function At(e,a,t){var $,S,r,u,c;($=document.getElementById("course-workspace-modal"))==null||$.remove();const x=Number(a.id),b=t.filter(i=>{var y;return Number(i.course_id??((y=i.master_subjects)==null?void 0:y.id))===x}),w={class_name:"ทุกห้องในคอร์ส",course_id:x,master_subjects:a},d=document.createElement("div");d.id="course-workspace-modal",d.className="fixed inset-0 z-[95] bg-black/60 flex items-center justify-center p-2 sm:p-4",d.innerHTML=`<div class="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl h-[96vh] sm:h-auto sm:max-h-[92vh] overflow-hidden flex flex-col">
    <header class="flex-shrink-0 px-4 sm:px-6 py-4 border-b bg-white flex items-start justify-between gap-3">
      <div class="min-w-0">
        <span class="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold">📘 ออกแบบการสอนของคอร์ส</span>
        <h2 class="mt-2 text-lg sm:text-xl font-extrabold text-gray-900 truncate">${n(a.subject_name)}</h2>
        <p class="text-xs text-gray-500 mt-0.5"><span class="font-mono text-blue-600">${n(a.subject_code??"—")}</span> · ${n(a.grade_level??"—")} · ${b.length} ห้องเรียน</p>
      </div>
      <button data-close class="w-10 h-10 flex-shrink-0 rounded-xl border bg-white text-gray-400 text-xl hover:text-gray-700">✕</button>
    </header>
    <div id="course-workspace-body" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6">
      <div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลคอร์ส...</div>
    </div>
  </div>`,document.body.appendChild(d);const p=()=>d.remove();d.querySelector("[data-close]").addEventListener("click",p),d.addEventListener("click",i=>{i.target===d&&p()});const E=d.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:i,canUseSmartClassroomForClass:y},{openLessonPlanAIWorkspace:_,openLessonPlanDocument:A}]=await Promise.all([me(()=>import("./teacher-views-smart-classroom-BNyIlVzh.js"),__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])),me(()=>import("./lesson-plan-ai-workspace-Be7c01S6.js"),__vite__mapDeps([30,0,1,3,9]))]),[L,N,q]=await Promise.all([zt(x).catch(()=>[]),Gt(x).catch(()=>[]),i(e)]),Q=b.filter(j=>y(q.unlocked,e,j.id)),f=q.unlocked||Q.length>0,P=()=>At(e,a,t),Y=L.length?L.map(j=>`<div class="rounded-xl border border-blue-100 bg-white px-3 py-2.5 flex gap-3">
      <span class="flex-shrink-0 px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-bold h-fit">สัปดาห์ ${j.week_start}${j.week_end!==j.week_start?`–${j.week_end}`:""}</span>
      <div class="min-w-0"><p class="text-sm font-bold text-gray-800">${n(j.topic)}</p>${j.unit_title?`<p class="text-[11px] text-blue-600 mt-0.5">${n(j.unit_title)}</p>`:""}</div>
    </div>`).join(""):'<div class="rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>',oe=b.map(j=>`<option value="${j.id}">${n(j.class_name??`ห้อง ${j.id}`)}</option>`).join("");E.innerHTML=`<div class="grid lg:grid-cols-2 gap-4 items-start">
        <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-blue-950">📘 กำหนดการสอนของคอร์ส</h3><p class="text-xs text-blue-700/70 mt-1">สร้างครั้งเดียว แล้วทุกห้องในรายวิชานี้อ้างอิงชุดเดียวกัน</p></div>
            <button id="cw-ai-schedule" class="min-h-[44px] px-4 rounded-xl ${f?"bg-blue-700 hover:bg-blue-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${f?"":"disabled"}>🤖 สร้างด้วย AI</button>
          </div>
          <div class="mt-4 space-y-2 max-h-72 overflow-y-auto pr-1">${Y}</div>
        </div>

        <div class="rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-violet-950">📝 แผนการสอนหน้าเดียว</h3><p class="text-xs text-violet-700/70 mt-1">ออกแบบแผนกลางของคอร์ส ใช้ร่วมกันได้ทุกห้อง และค่อยแยกบันทึกหลังสอนตามห้อง</p></div>
            <button id="cw-ai-plan" class="min-h-[44px] px-4 rounded-xl ${f?"bg-violet-700 hover:bg-violet-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${f?"":"disabled"}>✨ สร้างแผนด้วย AI</button>
          </div>
          ${N.length?`<div class="mt-4 space-y-2">${N.map(j=>`<button class="cw-plan-row w-full text-left rounded-xl border border-violet-100 bg-white px-3 py-3 hover:border-violet-300 transition" data-plan-id="${j.id}"><p class="text-sm font-bold text-gray-800">${n(j.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${j.week_start}${j.week_end!==j.week_start?`–${j.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
        </div>
    </div>
    ${N.length&&b.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้องสำหรับบันทึกหลังสอน</h3><p class="text-xs text-gray-400 mt-1">แผนเป็นของคอร์ส แต่บันทึกและลายเซ็นจะแยกตามห้อง</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${oe}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`,(S=E.querySelector("#cw-ai-schedule"))==null||S.addEventListener("click",()=>_({teacher:e,cls:w,courseId:x,syllabusItems:L,lessonPlans:N,currentWeek:1,initialMode:"schedule",onSaved:P})),(r=E.querySelector("#cw-ai-plan"))==null||r.addEventListener("click",()=>_({teacher:e,cls:w,courseId:x,syllabusItems:L,lessonPlans:N,currentWeek:1,initialMode:"plan",onSaved:P}));let ee=null;const Z=E.querySelector("#cw-document-picker"),re=()=>{Z&&(Z.classList.add("hidden"),Z.classList.remove("flex"))};E.querySelectorAll(".cw-plan-row").forEach(j=>j.addEventListener("click",()=>{ee=N.find(se=>se.id===parseInt(j.dataset.planId,10))??null,!(!ee||!b.length||!Z)&&(Z.classList.remove("hidden"),Z.classList.add("flex"))})),(u=E.querySelector("#cw-document-cancel"))==null||u.addEventListener("click",re),Z==null||Z.addEventListener("click",j=>{j.target===Z&&re()}),(c=E.querySelector("#cw-document-open"))==null||c.addEventListener("click",()=>{var I;const j=parseInt((I=E.querySelector("#cw-document-class"))==null?void 0:I.value,10),se=b.find(le=>le.id===j);!ee||!se||(re(),A({plan:ee,cls:se,teacher:e,classId:se.id,currentWeek:ee.week_start}))})}catch(i){E.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${n(i.message??"")}</div>`}}const Re={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 2 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"٢ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["ڤياوايان ڤمبلاجارن","ڤتوك"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمودان أساسيان",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["معايير التعلم","المؤشرات"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"2 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Piawaian pembelajaran","Petunjuk"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let qe=null;async function ds(){if(qe)return qe;const e=await Ft().catch(()=>[]);return qe=Object.fromEntries(e.map(a=>[a.lang_key,a.settings??{}])),qe}async function Zs(e,a){var ge,de;const[t,x]=await Promise.all([Ht(a.id).catch(o=>(J("โหลดคำอธิบายฯ ไม่สำเร็จ: "+(o.message??""),"error"),null)),ds()]),b=o=>{const H=Array.isArray(o)?o:["มาตรฐานการเรียนรู้","ตัวชี้วัด"];return H.length?H.map(T=>String(T??"")):["มาตรฐานการเรียนรู้","ตัวชี้วัด"]},w=(o,H)=>{const C=(Array.isArray(o)?o:[]).map(M=>{const R=Array.isArray(M)?M:Object.values(M??{});return Array.from({length:H},(G,F)=>String(R[F]??""))});return C.length?C:Array.from({length:12},()=>Array.from({length:H},()=>""))},d=o=>[...new Set((Array.isArray(o)?o:[]).map(H=>parseInt(H,10)).filter(H=>Number.isFinite(H)&&H>0))],p=a.subject_group==="ACDMVOC",E=(o,H,T)=>{const M=(Array.isArray(o)?o:[]).map(R=>Object.fromEntries(H.map(G=>[G,String((R==null?void 0:R[G])??"")])));for(;M.length<T;)M.push(Object.fromEntries(H.map(R=>[R,""])));return M};let $=b(t==null?void 0:t.table_columns),S=w(t==null?void 0:t.table_rows,$.length),r=d(t==null?void 0:t.midterm_objective_items),u=d(t==null?void 0:t.between_objective_items),c=d(t==null?void 0:t.final_objective_items),i=(t==null?void 0:t.between_objective_extra)??"",y=(t==null?void 0:t.midterm_objective_extra)??"",_=(t==null?void 0:t.final_objective_extra)??"",A=["auto","rtl","ltr"].includes(t==null?void 0:t.text_direction)?t.text_direction:"auto",L=(t==null?void 0:t.description)||"",N=(t==null?void 0:t.signer_name)||a.learning_area||"",q=(ge=t==null?void 0:t.topic_list)!=null&&ge.length?t.topic_list:[""],Q=E(t==null?void 0:t.voc_objectives,["objective","competency"],10),f=E(t==null?void 0:t.voc_schedule,["week","content","note"],20),P="",Y="th";const oe=()=>{const o={...Re.th,...Re[Y]},H=(x==null?void 0:x[Y])??{},T={...o,...H};return H.pickerTitles&&(T.pickerTitles={...o.pickerTitles,...H.pickerTitles}),T},ee=()=>{if(document.getElementById("cd2-rtl-font"))return;const o=document.createElement("link");o.id="cd2-rtl-font",o.rel="stylesheet",o.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(o)},[Z,re]=await Promise.all([Ne().catch(()=>({})),Ge().catch(()=>[])]),j=re.find(o=>o.dept_code===a.dept),se=(j==null?void 0:j.dept_name)??a.dept??"";(de=document.getElementById("course-doc-page2-modal"))==null||de.remove();const I=document.createElement("div");I.id="course-doc-page2-modal",I.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(I);const le=(o,H="")=>{const C=[o.length?[...o].sort((M,R)=>M-R).join(", "):"",H.trim()].filter(Boolean);return C.length?C.join(", "):oe().notSelected},ie=()=>{const o=S.length;return Array.from({length:o},(H,T)=>T+1).filter(H=>{var T;return(T=S[H-1])==null?void 0:T.some(C=>String(C??"").trim())})},X=()=>{const o=oe(),H=ie(),T=o.dir==="rtl";T&&ee();const C=A==="auto"?o.dir:A,M=C==="rtl"?"text-right":"text-left",R=T?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";I.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${C}" style="${R}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${o.title}</h2>
          <p class="text-xs text-gray-400 truncate">${n(a.subject_name)} · ${n(a.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${o.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${o.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${C}" style="${R}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(Re).map(G=>{var F;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${Y===G.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${G.key}">${((F=x==null?void 0:x[G.key])==null?void 0:F.label)||G.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${C}" style="${R}">
        <div class="max-w-6xl mx-auto p-4 sm:p-6 space-y-4">
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 sm:p-5">
            <div>
              <h3 class="font-bold text-gray-800">${o.helpTitle}</h3>
              <p class="text-xs text-gray-400 mt-0.5">${o.helpSub}</p>
            </div>

            <!-- topic list -->
            <div class="mt-4 space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-semibold text-gray-500">${o.topicLabel}</span>
                <span class="text-xs text-gray-400">${n(a.grade_level||"")} · ${n(se||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${q.map((G,F)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${W} flex-1" value="${n(G)}"
                      placeholder="${n(o.topicPlaceholder)}" dir="${C}" data-idx="${F}" />
                    ${q.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${F}">✕</button>`:""}
                  </div>`).join("")}
              </div>
              <button id="cd2-add-topic" type="button"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 mt-1">
                <span class="text-base leading-none">＋</span> ${o.addTopic}
              </button>
            </div>

            <!-- 3 action buttons grid -->
            <div class="grid grid-cols-3 gap-2 mt-4">
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-search-curriculum"
                  class="w-full py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  🔍 ${o.btnCurriculum}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${o.btnCurriculumSub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-auto-fill"
                  class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  ✨ ${o.btnAI}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${o.btnAISub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <label class="cursor-pointer w-full">
                  <span id="cd2-img-btn"
                    class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 flex items-center justify-center gap-1">
                    📷 ${o.btnImg}
                  </span>
                  <input type="file" id="cd2-img-input" accept="image/*" class="hidden" />
                </label>
                <span class="text-[10px] text-gray-400 text-center">${o.btnImgSub}</span>
              </div>
            </div>

            ${P?`<p class="text-xs mt-3 ${P.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${n(P)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${o.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${C}"
                  class="${W} ${M} min-h-[132px] leading-7"
                  placeholder="${n(o.descPlaceholder)}">${n(L)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${o.dirLabel}</span>
                  <select id="cd2-dir" class="${ue}">
                    <option value="auto" ${A==="auto"?"selected":""}>${o.dirAuto}</option>
                    <option value="rtl" ${A==="rtl"?"selected":""}>${o.dirRTL}</option>
                    <option value="ltr" ${A==="ltr"?"selected":""}>${o.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${o.signerLabel}</span>
                  <input id="cd2-signer" class="${W} ${M}" value="${n(N)}" placeholder="${n(o.signerPlaceholder)}" dir="${C}" />
                  <p class="text-xs text-gray-400 mt-1">${o.signerHint}</p>
                </label>
              </div>
            </div>
          </div>

          ${p?`
          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="flex items-center justify-between gap-3 flex-wrap mb-3">
              <div>
                <h3 class="font-bold text-gray-800">จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา</h3>
                <p class="text-xs text-gray-400 mt-0.5">แสดงในเอกสาร ปพ.5 หน้า 4</p>
              </div>
              <button id="cd2-voc-obj-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">+ เพิ่มแถว</button>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-10 px-2 py-2 border border-gray-100 text-gray-500">#</th>
                    <th class="px-2 py-2 border border-gray-100">จุดประสงค์การเรียนรู้</th>
                    <th class="px-2 py-2 border border-gray-100">สมรรถนะรายวิชา</th>
                    <th class="w-14 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${Q.map((G,F)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${F+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${F}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${n(G.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${F}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${n(G.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${F}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="flex items-center justify-between gap-3 flex-wrap mb-3">
              <div>
                <h3 class="font-bold text-gray-800">กำหนดการสอน</h3>
                <p class="text-xs text-gray-400 mt-0.5">แสดงในเอกสาร ปพ.5 หน้า 4</p>
              </div>
              <button id="cd2-voc-sch-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">+ เพิ่มแถว</button>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-20 px-2 py-2 border border-gray-100">สัปดาห์ที่</th>
                    <th class="px-2 py-2 border border-gray-100">เนื้อหาที่สอน</th>
                    <th class="w-40 px-2 py-2 border border-gray-100">หมายเหตุ</th>
                    <th class="w-14 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${f.map((G,F)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${F}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${n(G.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${F}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${n(G.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${F}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${n(G.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${F}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>
          `:`
          <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
            <div class="px-4 sm:px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 class="font-bold text-gray-800">${o.tableTitle}</h3>
                <p class="text-xs text-gray-400 mt-0.5">${o.tableHint}</p>
              </div>
              <div class="flex gap-2">
                <button id="cd2-template-basic" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${o.tplBasic}</button>
                <button id="cd2-template-extra" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${o.tplExtra}</button>
                <button id="cd2-add-col" class="px-3 py-2 rounded-xl border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50">${o.addCol}</button>
                <button id="cd2-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">${o.addRow}</button>
              </div>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${C}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${o.rowHeader}</th>
                    ${$.map((G,F)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${F}" class="cd2-col ${W} ${M} py-2 font-semibold" value="${n(G)}" dir="${C}" />
                          ${$.length>1?`<button data-del-col="${F}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${S.map((G,F)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${F+1}</td>
                      ${$.map((l,m)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${F}" data-cell="${m}" rows="2" dir="${C}"
                            class="cd2-cell ${M} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${n(G[m]||"")}</textarea>
                        </td>`).join("")}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${F}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${o.delRow}</button>
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <h3 class="font-bold text-gray-800 mb-3">${o.objTitle} <span class="text-xs font-normal text-gray-400">${o.objHint}</span></h3>
            <div class="grid sm:grid-cols-3 gap-3">
              <button id="cd2-pick-between" class="${M} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${o.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${n(le(u,i))}</p>
              </button>
              <button id="cd2-pick-mid" class="${M} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${o.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${n(le(r,y))}</p>
              </button>
              <button id="cd2-pick-final" class="${M} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${o.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${n(le(c,_))}</p>
              </button>
            </div>
            ${H.length?"":`<p class="text-xs text-amber-600 mt-3">${o.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,pe()},K=()=>{var o,H,T;return q=[...I.querySelectorAll(".cd2-topic-input")].map(C=>C.value.trim()).filter(Boolean),q.length||(q=[""]),L=((o=I.querySelector("#cd2-description"))==null?void 0:o.value)??"",N=((H=I.querySelector("#cd2-signer"))==null?void 0:H.value)??"",A=((T=I.querySelector("#cd2-dir"))==null?void 0:T.value)??A,I.querySelectorAll(".cd2-col").forEach(C=>{$[Number(C.dataset.col)]=C.value}),I.querySelectorAll(".cd2-cell").forEach(C=>{const M=Number(C.dataset.row),R=Number(C.dataset.cell);S[M]||(S[M]=Array.from({length:$.length},()=>"")),S[M][R]=C.value}),I.querySelectorAll(".cd2-voc-obj-cell").forEach(C=>{const M=Number(C.dataset.vocObjRow),R=C.dataset.vocObjField;Q[M]||(Q[M]={objective:"",competency:""}),Q[M][R]=C.value}),I.querySelectorAll(".cd2-voc-sch-cell").forEach(C=>{const M=Number(C.dataset.vocSchRow),R=C.dataset.vocSchField;f[M]||(f[M]={week:"",content:"",note:""}),f[M][R]=C.value}),{desc:L,signer:N}},ve=o=>{const H=Array.isArray(o==null?void 0:o.columns)&&o.columns.length?o.columns.map(R=>String(R??"").trim()).filter(Boolean):oe().colsExtra,T=Array.isArray(o==null?void 0:o.rows)?o.rows.map(R=>{const G=Array.isArray(R)?R:Object.values(R??{});return Array.from({length:H.length},(F,l)=>String(G[l]??"").trim())}).filter(R=>R.some(Boolean)):[];$=H,S=T.length?T:Array.from({length:12},()=>Array.from({length:$.length},()=>"")),o!=null&&o.description&&(L=String(o.description)),r=d((o==null?void 0:o.midterm_items)??(o==null?void 0:o.midtermObjectiveItems)),u=d((o==null?void 0:o.between_items)??(o==null?void 0:o.betweenObjectiveItems)),c=d((o==null?void 0:o.final_items)??(o==null?void 0:o.finalObjectiveItems));const C=ie(),M=Math.ceil(C.length/2);r.length||(r=C.slice(0,Math.min(3,M))),u.length||(u=C.slice(0,Math.min(4,C.length))),c.length||(c=C.slice(-Math.min(3,C.length)))},Se=o=>o.some(T=>String(T.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:o.map((T,C)=>[`${T.item_no??C+1}.${T.learning_outcome_text??T.indicator_text??T.standard_text??""}`]),description:L,midterm_items:o.slice(0,Math.ceil(o.length/2)).map((T,C)=>C+1),final_items:o.slice(Math.ceil(o.length/2)).map((T,C)=>C+1+Math.ceil(o.length/2))}:{source:"curriculum",columns:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],rows:o.map((T,C)=>[`${T.item_no??C+1}.) ${T.standard_code||T.standard_text||""}`.trim(),T.indicator_text||T.learning_outcome_text||""]),description:L,midterm_items:o.slice(0,Math.ceil(o.length/2)).map((T,C)=>C+1),final_items:o.slice(Math.ceil(o.length/2)).map((T,C)=>C+1+Math.ceil(o.length/2))},ne=async()=>{var k,h,D,s,v;const o=oe(),H=$.length===1||a.subject_group&&!["ACDM","AGM"].includes(a.subject_group),T=H?o.colsExtra:o.colsBasic,C=H?`single column named "${T[0]}"`:`two columns named "${T[0]}" and "${T[1]}"`,M=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${o.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${a.subject_name||""}
- รหัสวิชา: ${a.subject_code||""}
- ชั้น: ${a.grade_level||""}
- กลุ่มสาระ: ${se||a.dept||""}
- หน่วยกิต: ${a.credit||""}
- เรื่อง/บทที่สอน: ${q.filter(Boolean).join(", ")||"ไม่ระบุ"}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${C}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม

Return JSON object เท่านั้น:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`,{data:R,error:G}=await Ue.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:M}});if(G)throw new Error(G.message??"Edge Function error");if(R!=null&&R.error)throw new Error(`Gemini: ${R.error.message??R.error.status}`);const F=((v=(s=(D=(h=(k=R.candidates)==null?void 0:k[0])==null?void 0:h.content)==null?void 0:D.parts)==null?void 0:s[0])==null?void 0:v.text)??"",l=F.match(/```json\s*([\s\S]*?)```/)||F.match(/(\{[\s\S]*\})/),m=l?l[1]??l[0]:null;if(!m)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(m)},ce=o=>{var k;K();const H=o==="mid"?r:o==="between"?u:c,T=o==="mid"?y:o==="between"?i:_,C=ie();if(!C.length){J("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(k=document.getElementById("cd2-picker"))==null||k.remove();const M=oe(),R={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},G={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},F=h=>{const D=(S[h-1]??[]).find(v=>String(v??"").trim()),s=String(D??"").trim();return s.length>30?s.slice(0,30)+"…":s},l=document.createElement("div");l.id="cd2-picker",l.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",l.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${M.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${M.pickerTitles[o]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${C.map(h=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${R[o]} w-4 h-4 flex-shrink-0" value="${h}" ${H.includes(h)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${h}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${n(F(h))}</span>
            </label>`).join("")}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${n(T)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${M.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${G[o]} text-white text-sm font-semibold">${M.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(l);const m=()=>l.remove();l.querySelector("#cd2-picker-close").addEventListener("click",m),l.querySelector("#cd2-picker-cancel").addEventListener("click",m),l.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const h=[...l.querySelectorAll(".cd2-choice:checked")].map(s=>Number(s.value)),D=l.querySelector("#cd2-picker-extra").value.trim();o==="mid"?(r=h,y=D):o==="between"?(u=h,i=D):(c=h,_=D),m(),X()})},pe=()=>{var T,C,M,R,G,F,l,m,k;const o=oe();I.querySelectorAll(".cd2-lang-btn").forEach(h=>{h.addEventListener("click",()=>{var D;K(),Y=h.dataset.lang||"th",A=((D=Re[Y])==null?void 0:D.dir)||"ltr",X()})}),I.querySelector("#cd2-close").addEventListener("click",()=>I.remove()),I.querySelector("#cd2-dir").addEventListener("change",h=>{K(),A=h.target.value,X()}),I.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(K(),(S.some(s=>s.some(v=>String(v??"").trim()))||L.trim())&&!confirm(o.confirmOverwrite))return;const D=I.querySelector("#cd2-search-curriculum");D.disabled=!0,D.innerHTML=`⏳ ${o.btnCurriculumLoading}`;try{const s=await Vt({subjectName:a.subject_name,subjectCode:a.subject_code,gradeLevel:a.grade_level,dept:se,topic:q.filter(Boolean).join(" ")});s.length?(ve(Se(s)),P=o.toastSearchOk(s.length)):P=o.toastSearchEmpty,X()}catch(s){J("ค้นหลักสูตรไม่สำเร็จ: "+(s.message??""),"error")}finally{D.disabled=!1,D.innerHTML=`🔍 ${o.btnCurriculum}`}}),I.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(K(),(S.some(s=>s.some(v=>String(v??"").trim()))||L.trim())&&!confirm(o.confirmAIOverwrite))return;const D=I.querySelector("#cd2-auto-fill");D.disabled=!0,D.innerHTML=`⏳ ${o.btnAILoading}`;try{const s=await ne();ve(s),P=o.toastAIDone,X()}catch(s){J("AI ร่างไม่สำเร็จ: "+(s.message??""),"error")}finally{D.disabled=!1,D.innerHTML=`✨ ${o.btnAI}`}}),I.querySelector("#cd2-img-input").addEventListener("change",async h=>{var g,B,O,V,ae,z;const D=(g=h.target.files)==null?void 0:g[0];if(!D)return;if((S.some(te=>te.some(ye=>String(ye??"").trim()))||L.trim())&&!confirm(o.confirmImgOverwrite)){h.target.value="";return}const v=I.querySelector("#cd2-img-btn");v.textContent=`⏳ ${o.btnImgLoading}`;try{const te=await new Promise((Ot,Rt)=>{const De=new FileReader;De.onload=()=>Ot(De.result.split(",")[1]),De.onerror=Rt,De.readAsDataURL(D)}),ye=$.length===1||a.subject_group&&!["ACDM","AGM"].includes(a.subject_group),$e=ye?o.colsExtra:o.colsBasic,Nt=ye?`single column named "${$e[0]}"`:`two columns named "${$e[0]}" and "${$e[1]}"`,Dt=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${o.aiLang}
ข้อมูลรายวิชา: "${a.subject_name??""}" รหัส ${a.subject_code??""} ชั้น ${a.grade_level??""} กลุ่มสาระ ${se}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${Nt})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบเป็น JSON เท่านั้น (ไม่มีข้อความอื่น):
{
  "description": "...",
  "columns": ${JSON.stringify($e)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:_e,error:ot}=await Ue.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Dt,imageBase64:te,imageMimeType:D.type||"image/jpeg"}});if(ot)throw new Error(ot.message??"Edge Function error");if(_e!=null&&_e.error)throw new Error(`Gemini: ${_e.error.message??_e.error.status}`);const nt=((z=(ae=(V=(O=(B=_e.candidates)==null?void 0:B[0])==null?void 0:O.content)==null?void 0:V.parts)==null?void 0:ae[0])==null?void 0:z.text)??"",Ve=nt.match(/```json\s*([\s\S]*?)```/)||nt.match(/(\{[\s\S]*\})/),lt=Ve?Ve[1]??Ve[0]:null;if(!lt)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");ve(JSON.parse(lt)),P=o.toastImgDone,X()}catch(te){J("อ่านรูปไม่สำเร็จ: "+(te.message??""),"error")}finally{v.textContent=`📷 ${o.btnImg}`,h.target.value=""}});const H=h=>{if(K(),S.some(v=>v.some(g=>String(g??"").trim()))&&!confirm(o.confirmColChange))return;const s=S;$=h,S=s.map(v=>h.length===1?[v.filter(Boolean).join(" ").trim()]:Array.from({length:h.length},(g,B)=>v[B]??"")),S.length||(S=Array.from({length:12},()=>Array.from({length:$.length},()=>""))),X()};(T=I.querySelector("#cd2-template-basic"))==null||T.addEventListener("click",()=>{H(o.colsBasic)}),(C=I.querySelector("#cd2-template-extra"))==null||C.addEventListener("click",()=>{H(o.colsExtra)}),(M=I.querySelector("#cd2-add-col"))==null||M.addEventListener("click",()=>{K(),$.push(o.colNew($.length+1)),S=S.map(h=>[...h,""]),X()}),(R=I.querySelector("#cd2-add-row"))==null||R.addEventListener("click",()=>{K(),S.push(Array.from({length:$.length},()=>"")),X()}),I.querySelectorAll(".cd2-del-col").forEach(h=>h.addEventListener("click",()=>{K();const D=Number(h.dataset.delCol);$.splice(D,1),S=S.map(s=>s.filter((v,g)=>g!==D)),X()})),I.querySelectorAll(".cd2-del-row").forEach(h=>h.addEventListener("click",()=>{K();const D=Number(h.dataset.delRow);S.splice(D,1);const s=v=>v.filter(g=>g!==D+1).map(g=>g>D+1?g-1:g);r=s(r),u=s(u),c=s(c),X()})),(G=I.querySelector("#cd2-pick-mid"))==null||G.addEventListener("click",()=>ce("mid")),(F=I.querySelector("#cd2-pick-between"))==null||F.addEventListener("click",()=>ce("between")),(l=I.querySelector("#cd2-pick-final"))==null||l.addEventListener("click",()=>ce("final")),(m=I.querySelector("#cd2-voc-obj-add-row"))==null||m.addEventListener("click",()=>{K(),Q.push({objective:"",competency:""}),X()}),I.querySelectorAll(".cd2-voc-obj-del-row").forEach(h=>h.addEventListener("click",()=>{K(),Q.splice(Number(h.dataset.vocObjDelRow),1),X()})),(k=I.querySelector("#cd2-voc-sch-add-row"))==null||k.addEventListener("click",()=>{K(),f.push({week:String(f.length+1),content:"",note:""}),X()}),I.querySelectorAll(".cd2-voc-sch-del-row").forEach(h=>h.addEventListener("click",()=>{K(),f.splice(Number(h.dataset.vocSchDelRow),1),X()})),I.querySelector("#cd2-add-topic").addEventListener("click",()=>{K(),q.push(""),X()}),I.querySelectorAll(".cd2-topic-del").forEach(h=>{h.addEventListener("click",()=>{K(),q.splice(Number(h.dataset.idx),1),q.length||(q=[""]),X()})}),I.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:h,signer:D}=K(),s=I.querySelector("#cd2-save");s.disabled=!0,s.textContent=o.saving;try{await Wt(a.id,{description:h,table_columns:$.map((v,g)=>v.trim()||o.colNew(g+1)),table_rows:S.map(v=>v.slice(0,$.length)),topic_list:q.filter(Boolean),midterm_objective_items:r,between_objective_items:u,final_objective_items:c,midterm_objective_extra:y,between_objective_extra:i,final_objective_extra:_,voc_objectives:Q,voc_schedule:f,signer_name:D.trim()||null,text_direction:A,updated_by:(e==null?void 0:e.id)??null}),J(o.toastSaved,"success"),I.remove()}catch(v){J("บันทึกไม่สำเร็จ: "+(v.message??""),"error"),s.disabled=!1,s.textContent=o.save}})};X()}async function ea(e,a,t=null,x={}){const b=!!x.cloneFrom;he("my-courses"),we(b?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[w,d,p]=await Promise.all([Ge().catch(()=>[]),ht().catch(()=>[]),t&&!b?qt(t.id).catch(()=>[]):Promise.resolve([])]);let E=p??[];const $=[...new Map(w.map(l=>[l.id,l])).values()],S=(e==null?void 0:e.category)??"",r=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],u=S?r.filter(l=>l.cat===S):r,c=l=>l==="ACDM"?"สามัญ":l==="ACDMVOC"?"สามัญปวช":l==="AGM"||l==="AGMVOC"?"ศาสนา":null,i=l=>l==="ACDMVOC",y=l=>i(l)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",_=l=>i(l)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",A=l=>i(l)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",L=l=>i(l)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",N=(t==null?void 0:t.subject_group)??"",q=l=>{const m=c(l);if(!m)return $;const k=$.filter(h=>h.category===m);return k.length?k:$},Q=(l,m="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+l.map(k=>`<option value="${k.dept_code}" ${k.dept_code===m?"selected":""}>${k.dept_name}</option>`).join(""),f=[...new Set(w.map(l=>l.head_name).filter(Boolean))];xe(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${b?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์สวิชา"}</h2>
    </div>
    ${b?`
    <div class="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3 mb-5 text-xs text-violet-700 max-w-2xl">
      📋 ทำสำเนาคอร์สวิชา — ระบบจะคัดลอกคำอธิบายรายวิชา (หน้า 2 ของ ปพ.5) จากคอร์สต้นฉบับให้อัตโนมัติ
      แก้ไขกลุ่มวิชา/กลุ่มสาระ/ชั้นปี/รหัสวิชาให้ตรงกับโปรแกรมใหม่ได้เลย (ไม่กระทบคอร์สต้นฉบับ)
    </div>`:""}
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="course-form" novalidate class="space-y-5">
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            กลุ่มวิชา <span class="text-red-400">*</span>
          </label>
          <select id="cf-subg" class="${ue}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${u.map(l=>`<option value="${l.value}" ${(t==null?void 0:t.subject_group)===l.value?"selected":""}>${l.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${y(N)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${ue}">
            ${Q(t!=null&&t.subject_group?q(t.subject_group):S?$.filter(l=>l.category===S):$,(t==null?void 0:t.dept)??"")}
          </select>
        </div>
        <!-- ชื่อวิชา + รหัสวิชา -->
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 sm:col-span-1">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชื่อวิชา <span class="text-red-400">*</span>
            </label>
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${W}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${W}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${ue}">
              ${ts.map(l=>`<option value="${l}">${l}</option>`).join("")}
            </select>
          </div>
          <div id="cf-grade-single-wrapper">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${ue}">
              <option value="">— เลือกกลุ่มวิชาก่อน —</option>
            </select>
          </div>
        </div>

        <!-- โหมดสอนร่วม & คละระดับชั้น -->
        <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h4 class="text-sm font-bold text-indigo-900">โหมดสอนร่วม & คละระดับชั้น (Co-teaching & Multi-grade)</h4>
            <p class="text-xs text-indigo-700 mt-0.5">เปิดเพื่อเลือกคละหลายระดับชั้น หรือกำหนดผู้ร่วมสอนวิชานี้</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="cf-toggle-coteach" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <!-- ชั้นปีแบบคละระดับชั้น (แสดงเมื่อเปิดโหมด) -->
        <div id="cf-grade-multi-container" class="hidden bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-2">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            เลือกระดับชั้นเรียน (คละระดับชั้นได้) <span class="text-red-400">*</span>
          </label>
          <div id="cf-grade-checkboxes" class="grid grid-cols-3 gap-2">
            <!-- เรนเดอร์ Checkbox อัตโนมัติทาง JS -->
          </div>
        </div>

        <!-- ครูผู้สอน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">ครูผู้สอน</label>
          <div class="flex gap-2">
            <div class="w-1/3">
              <p class="text-xs text-gray-400 mb-1">รหัสครู</p>
              <input id="cf-teacher-code" type="text" placeholder="เช่น 101"
                class="${W}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${W}" autocomplete="off" />
              <div id="cf-teacher-dropdown"
                class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                       rounded-xl shadow-lg overflow-y-auto" style="max-height:200px"></div>
            </div>
          </div>
          <div id="cf-teacher-selected"
            class="hidden mt-2 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-xl text-sm text-emerald-700">
            <span class="text-emerald-400">✓</span>
            <span id="cf-teacher-name" class="font-medium"></span>
            <button type="button" id="cf-teacher-clear" class="ml-auto text-gray-400 hover:text-red-400 text-xs">✕</button>
          </div>
          <input type="hidden" id="cf-teacher-id" />
        </div>
        <!-- เบอร์ติดต่อ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">เบอร์ติดต่อครู</label>
          <input id="cf-phone" type="tel" inputmode="numeric" placeholder="0XX XXX XXXX"
            maxlength="12" class="${W}" />
          <p class="text-xs text-gray-400 mt-1">เบอร์จะถูกเติมอัตโนมัติเมื่อเลือกครูผู้สอน</p>
        </div>

        <!-- ครูผู้สอนร่วม (Co-teachers) -->
        <div id="cf-coteach-section" class="hidden border border-indigo-100 bg-indigo-50/30 rounded-2xl p-5 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-indigo-900 mb-1">ครูผู้ร่วมสอน</label>
            <p class="text-xs text-indigo-700">ระบุรหัสครู หรือค้นหาชื่อเพื่อเพิ่มผู้ร่วมสอนร่วมจัดการห้องเรียน</p>
          </div>
          <div class="flex gap-2">
            <div class="w-1/3">
              <p class="text-xs text-gray-400 mb-1">รหัสครูผู้ร่วมสอน</p>
              <input id="cf-coteach-code" type="text" placeholder="เช่น 102"
                class="${W} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${W} bg-white" autocomplete="off" />
              <div id="cf-coteach-dropdown"
                class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                       rounded-xl shadow-lg overflow-y-auto" style="max-height:200px"></div>
            </div>
          </div>
          <div id="cf-coteach-selected-list" class="flex flex-wrap gap-2 pt-1">
            <!-- เรนเดอร์ป้ายชื่อครูผู้ร่วมสอน (Tags) ที่นี่ -->
          </div>
        </div>

        <!-- หัวหน้ากลุ่มสาระ / หัวหน้าสาขาวิชา (typeahead) -->
        <div class="bg-gray-50 rounded-xl p-4">
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${_(N)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${W} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${L(N)}</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${b?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}
          </button>
        </div>
      </form>
    </div>
  </div>`);const P=t&&(t.grade_level&&t.grade_level.includes(",")||E.length>0);function Y(){const l=document.getElementById("cf-coteach-selected-list");l&&(l.innerHTML=E.map(m=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${m.full_name} (${m.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${m.id}">✕</button>
      </span>
    `).join(""),l.querySelectorAll(".remove-coteacher-btn").forEach(m=>{m.addEventListener("click",()=>{const k=Number(m.dataset.id);E=E.filter(h=>h.id!==k),Y()})}))}function oe(l,m){var h;(h=document.getElementById("coteach-explain-modal"))==null||h.remove();const k=document.createElement("div");k.id="coteach-explain-modal",k.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",k.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md p-7 border border-indigo-50">
        <div class="text-center mb-6">
          <div class="text-5xl mb-4">👥</div>
          <h3 class="font-bold text-gray-800 text-lg mb-2">โหมดสอนร่วม & คละระดับชั้น</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            เมื่อเปิดใช้งานโหมดนี้ ท่านจะสามารถเลือก **คละระดับชั้นได้หลายระดับชั้น** ในคอร์สเดียว และสามารถระบุ **ครูผู้ร่วมสอน** เพื่อร่วมจัดการห้องเรียน (กรอกคะแนน เช็คชื่อ บันทึก ปพ.5) ได้พร้อมกัน
          </p>
          <div class="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-2xl text-left text-xs text-amber-800 flex gap-2">
            <span class="text-base leading-none">⚠️</span>
            <span>หากต้องการปิดโหมดนี้ภายหลัง ข้อมูลระดับชั้นจะเหลือเพียงระดับชั้นเดียว และรายชื่อผู้ร่วมสอนจะถูกล้างออกทั้งหมด</span>
          </div>
        </div>
        <div class="flex gap-3">
          <button id="cf-explain-cancel"
            class="flex-1 py-3 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">
            ยกเลิก
          </button>
          <button id="cf-explain-confirm"
            class="flex-1 py-3 rounded-2xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-md transition">
            ยืนยันเปิดโหมด
          </button>
        </div>
      </div>`,document.body.appendChild(k),k.querySelector("#cf-explain-cancel").addEventListener("click",()=>{k.remove(),m()}),k.querySelector("#cf-explain-confirm").addEventListener("click",()=>{k.remove(),l()})}function ee(l,m){var h;(h=document.getElementById("coteach-confirm-modal"))==null||h.remove();const k=document.createElement("div");k.id="coteach-confirm-modal",k.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",k.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 border border-red-50 text-center">
        <div class="text-4xl mb-3">⚠️</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ปิดโหมดสอนร่วม & คละชั้น?</h3>
        <p class="text-xs text-gray-500 mb-5 leading-relaxed">
          หากปิดโหมดนี้ ข้อมูลครูผู้ร่วมสอนและระดับชั้นคละจะถูกรีเซ็ตกลับเป็นปกติ คุณต้องการดำเนินการต่อใช่หรือไม่?
        </p>
        <div class="flex gap-3">
          <button id="cf-off-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">
            ยกเลิก
          </button>
          <button id="cf-off-confirm"
            class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition">
            ยืนยันปิดโหมด
          </button>
        </div>
      </div>`,document.body.appendChild(k),k.querySelector("#cf-off-cancel").addEventListener("click",()=>{k.remove(),m()}),k.querySelector("#cf-off-confirm").addEventListener("click",()=>{k.remove(),l()})}function Z(l,m=""){const k=We[l]??[],h=document.getElementById("cf-grade-checkboxes");if(!h)return;const D=m?m.split(",").map(s=>s.trim()):[];h.innerHTML=k.map(s=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${s}" ${D.includes(s)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${s}</span>
      </label>
    `).join("")}const re={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};document.getElementById("cf-subg").addEventListener("change",l=>{const m=l.target.value;document.getElementById("cf-dept-label").firstChild.textContent=y(m)+" ",document.getElementById("cf-head-label").textContent=_(m),document.getElementById("cf-head-hint").textContent=L(m);const k=document.getElementById("cf-dept"),h=k.value;k.innerHTML=Q(q(m)),k.options[0].textContent=A(m),h&&(k.value=h);const D=document.getElementById("cf-grade"),s=We[m]??[];D.innerHTML=s.length?['<option value="">— เลือกชั้นปี —</option>',...s.map(v=>`<option value="${v}">${v}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=re[m]??"",Z(m)}),document.getElementById("cf-dept").addEventListener("change",l=>{const m=l.target.value,k=w.filter(D=>D.dept_code===m&&D.head_name).map(D=>D.head_name),h=document.getElementById("cf-dept-head");k.length===1?h.value=k[0]:k.length>1?(h.value="",I(k)):h.value=""});const j=document.getElementById("cf-dept-head"),se=document.getElementById("cf-head-dropdown");function I(l){se.innerHTML=l.map(m=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${m}">${m}</div>`).join(""),se.querySelectorAll(".head-opt").forEach(m=>m.addEventListener("mousedown",k=>{k.preventDefault(),j.value=m.dataset.val,se.classList.add("hidden")})),se.classList.toggle("hidden",!l.length)}j.addEventListener("input",()=>{const l=j.value.toLowerCase(),m=f.filter(k=>k.toLowerCase().includes(l));I(l?m:f)}),j.addEventListener("focus",()=>{const l=j.value.toLowerCase();I(l?f.filter(m=>m.toLowerCase().includes(l)):f)}),j.addEventListener("blur",()=>setTimeout(()=>se.classList.add("hidden"),150));const le=document.getElementById("cf-teacher-code"),ie=document.getElementById("cf-teacher-search"),X=document.getElementById("cf-teacher-dropdown"),K=document.getElementById("cf-teacher-selected"),ve=document.getElementById("cf-teacher-name"),Se=document.getElementById("cf-teacher-clear"),ne=document.getElementById("cf-teacher-id"),ce=document.getElementById("cf-phone");function pe(l){if(!l){ne.value="",le.value="",ie.value="",K.classList.add("hidden"),K.classList.remove("flex"),ce.value="";return}ne.value=l.id,le.value=l.teacher_code??"",ie.value=l.full_name??"",ve.textContent=`${l.full_name}${l.teacher_code?` (${l.teacher_code})`:""}`,K.classList.remove("hidden"),K.classList.add("flex"),ce.value=Fe(l.phone??""),X.classList.add("hidden")}function ge(l){X.innerHTML=l.length?l.map(m=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${m.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${m.teacher_code??""}</span>
            <span class="font-medium">${m.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',X.querySelectorAll(".t-opt").forEach(m=>m.addEventListener("mousedown",k=>{k.preventDefault(),pe(d.find(h=>String(h.id)===m.dataset.id))})),X.classList.remove("hidden")}if(e&&!t){const l=d.find(m=>m.id===e.id);l&&pe(l)}le.oninput=()=>{const l=le.value.trim().toLowerCase();if(!l){pe(null);return}const m=d.find(k=>(k.teacher_code??"").toLowerCase()===l);if(m)pe(m);else{const k=d.filter(h=>(h.teacher_code??"").toLowerCase().startsWith(l));k.length&&ge(k)}},ie.onfocus=()=>ge(d),ie.oninput=()=>{const l=ie.value.toLowerCase();ge(l?d.filter(m=>m.full_name.toLowerCase().includes(l)||(m.teacher_code??"").toLowerCase().includes(l)):d)},ie.onblur=()=>setTimeout(()=>X.classList.add("hidden"),150),Se.addEventListener("click",()=>pe(null));const de=document.getElementById("cf-toggle-coteach"),o=document.getElementById("cf-grade-single-wrapper"),H=document.getElementById("cf-grade-multi-container"),T=document.getElementById("cf-coteach-section");de.addEventListener("change",l=>{l.target.checked?(de.checked=!1,oe(()=>{de.checked=!0,o.classList.add("hidden"),H.classList.remove("hidden"),T.classList.remove("hidden");const k=document.getElementById("cf-subg").value;Z(k),Y()},()=>{de.checked=!1})):ee(()=>{de.checked=!1,o.classList.remove("hidden"),H.classList.add("hidden"),T.classList.add("hidden"),E=[]},()=>{de.checked=!0})});const C=document.getElementById("cf-coteach-code"),M=document.getElementById("cf-coteach-search"),R=document.getElementById("cf-coteach-dropdown");function G(l){if(!l)return;if(E.some(k=>k.id===l.id)){J("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),C.value="",M.value="";return}const m=Number(ne.value);if(l.id===m){J("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),C.value="",M.value="";return}E.push(l),Y(),C.value="",M.value="",R.classList.add("hidden")}function F(l){R.innerHTML=l.length?l.map(m=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${m.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${m.teacher_code??""}</span>
            <span class="font-medium">${m.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',R.querySelectorAll(".co-t-opt").forEach(m=>m.addEventListener("mousedown",k=>{k.preventDefault(),G(d.find(h=>String(h.id)===m.dataset.id))})),R.classList.remove("hidden")}if(C.oninput=()=>{const l=C.value.trim().toLowerCase();if(!l)return;const m=d.find(k=>(k.teacher_code??"").toLowerCase()===l);if(m)G(m);else{const k=d.filter(h=>(h.teacher_code??"").toLowerCase().startsWith(l));k.length&&F(k)}},M.onfocus=()=>F(d),M.oninput=()=>{const l=M.value.toLowerCase();F(l?d.filter(m=>m.full_name.toLowerCase().includes(l)||(m.teacher_code??"").toLowerCase().includes(l)):d)},M.onblur=()=>setTimeout(()=>R.classList.add("hidden"),150),ce.addEventListener("input",l=>{l.target.value=Fe(l.target.value)}),t){if(document.getElementById("cf-name").value=t.subject_name??"",document.getElementById("cf-code").value=t.subject_code??"",t.credit&&(document.getElementById("cf-credit").value=String(t.credit)),t.subject_group){const l=document.getElementById("cf-subg");l.value=t.subject_group,document.getElementById("cf-dept").innerHTML=Q(q(t.subject_group));const m=document.getElementById("cf-grade"),k=We[t.subject_group]??[];m.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...k.map(h=>`<option value="${h}">${h}</option>`)].join(""),t.grade_level&&(m.value=t.grade_level),document.getElementById("cf-code-hint").textContent=re[t.subject_group]??""}if(t.dept&&(document.getElementById("cf-dept").value=t.dept),t.learning_area)j.value=t.learning_area;else if(t.dept){const l=w.find(m=>m.dept_code===t.dept&&m.head_name);j.value=(l==null?void 0:l.head_name)??""}if(t.teacher_id){const l=d.find(m=>m.id===t.teacher_id);l&&pe(l)}else if(e){const l=d.find(m=>m.id===e.id);l&&pe(l)}if(P){de.checked=!0,o.classList.add("hidden"),H.classList.remove("hidden"),T.classList.remove("hidden");const l=t.subject_group;Z(l,t.grade_level),Y()}}document.getElementById("course-form").addEventListener("submit",async l=>{l.preventDefault();const m=document.getElementById("cf-submit"),k=document.getElementById("cf-subg").value,h=document.getElementById("cf-dept").value,D=document.getElementById("cf-name").value.trim(),s=document.getElementById("cf-code").value.trim(),v=parseFloat(document.getElementById("cf-credit").value)||null;let g="";if(de.checked){const ae=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!ae.length){J("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}g=ae.map(z=>z.value).join(", ")}else g=document.getElementById("cf-grade").value;const B=ne.value,O=ce.value.trim(),V=j.value.trim();if(!k||!D||!g){J("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}m.disabled=!0,m.textContent="กำลังบันทึก...";try{const ae=B?Number(B):(e==null?void 0:e.id)??null,z=de.checked?E.map(te=>te.id):[];await a({subject_group:k,dept:h||null,subject_name:D,subject_code:s||null,credit:v,grade_level:g,teacher_id:ae,learning_area:V||null},z),O&&ae&&ae===(e==null?void 0:e.id)&&await et(e.id,{phone:O}).catch(()=>{}),J("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(ae){J("บันทึกไม่สำเร็จ: "+(ae.message??""),"error")}finally{m.disabled=!1,m.textContent=b?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function ta(e,a=[],t){he("setup"),we("ตั้งค่าโปรไฟล์","registration");const[x,b,w,d]=await Promise.all([Ge().catch(()=>[]),_t().catch(()=>[]),kt().catch(()=>[]),Ne().catch(()=>({}))]),p=parseInt(d.academicYear??2568),E=parseInt(d.semester??1),$=[...new Map(x.map(i=>[i.dept_code,i])).values()],S=(i,y="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(i?$.filter(A=>!A.category||A.category===i):$).map(A=>`<option value="${A.dept_code}" ${A.dept_code===y?"selected":""}>${A.dept_name}</option>`).join(""),r=b.filter(i=>/^ม\./.test(i)),u=w;if(xe(`<div class="max-w-lg mx-auto animate-fade">
    <!-- Header -->
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-emerald-400 to-teal-400 text-white
                  text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🎉
      </div>
      <h2 class="text-2xl font-bold text-gray-800">ยินดีต้อนรับ!</h2>
      <p class="text-gray-500 text-sm mt-1">กรุณากรอกข้อมูลเพิ่มเติม เพื่อให้ระบบทำงานได้ถูกต้อง</p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7 space-y-5">
      ${e?`
      <!-- ข้อมูลจาก teachers table -->
      <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400
                    text-white font-bold text-lg flex items-center justify-center overflow-hidden flex-shrink-0">
          ${e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover" />`:e.full_name.charAt(0)}
        </div>
        <div>
          <p class="font-bold text-emerald-900">${e.full_name}</p>
          <p class="text-xs text-emerald-600">รหัสครู: ${e.teacher_code??"—"}</p>
        </div>
      </div>`:`
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700">
        ⚠️ ไม่พบข้อมูลครูในระบบ — ติดต่อผู้ดูแลระบบเพื่อเชื่อมบัญชี
      </div>`}
      <form id="setup-form" class="space-y-4" ${e?"":'style="opacity:0.5;pointer-events:none"'}>
        <!-- เบอร์โทร -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="setup-phone" type="tel" inputmode="numeric" maxlength="12"
            value="${(e==null?void 0:e.phone)??""}" placeholder="0XX XXX XXXX"
            class="${W}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${ue}">
            ${S(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${ue}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${(e==null?void 0:e.subject_group)==="ACDM"?"selected":""}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${(e==null?void 0:e.subject_group)==="AGM"?"selected":""}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${(e==null?void 0:e.subject_group)==="ACDMVOC"?"selected":""}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${(e==null?void 0:e.subject_group)==="AGMVOC"?"selected":""}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        <!-- ประเภทครู -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ประเภทครู</label>
          <div class="flex gap-3">
            ${["สามัญ","ศาสนา"].map(i=>`
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${(e==null?void 0:e.category)===i?"border-emerald-400 bg-emerald-50":"border-gray-200"}">
              <input type="radio" name="setup-category" value="${i}" ${(e==null?void 0:e.category)===i?"checked":""}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${i}</span>
            </label>`).join("")}
          </div>
        </div>
        <!-- ห้องที่ปรึกษาสามัญ -->
        <div id="setup-room-samai-wrap">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            ห้องที่ปรึกษา <span class="font-normal text-gray-400">(สามัญ)</span>
            <span class="text-xs text-gray-400 ml-1">— เลือกได้มากกว่า 1 ห้อง</span>
          </label>
          <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
            ${r.length?r.map(i=>`
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
              <input type="checkbox" name="setup-room-samai" value="${i}" ${a.find(y=>y.main_room===i&&y.category==="สามัญ")?"checked":""} class="text-emerald-600 rounded" />
              <span>${i}</span>
            </label>`).join(""):'<p class="text-xs text-gray-400">ยังไม่มีห้องสามัญ</p>'}
          </div>
        </div>
        <!-- ห้องที่ปรึกษาศาสนา -->
        <div id="setup-room-sadsana-wrap">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            ห้องที่ปรึกษา <span class="font-normal text-gray-400">(ศาสนา)</span>
            <span class="text-xs text-gray-400 ml-1">— เลือกได้มากกว่า 1 ห้อง</span>
          </label>
          <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
            ${u.length?u.map(i=>`
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
              <input type="checkbox" name="setup-room-sadsana" value="${i}" ${a.find(y=>y.main_room===i&&y.category==="ศาสนา")?"checked":""} class="text-emerald-600 rounded" />
              <span>${i}</span>
            </label>`).join(""):'<p class="text-xs text-gray-400">ยังไม่มีห้องศาสนา</p>'}
          </div>
        </div>
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const c=()=>{var N;const i=(N=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:N.value,y=document.getElementById("setup-room-samai-wrap"),_=document.getElementById("setup-room-sadsana-wrap"),A=document.getElementById("setup-room-samai"),L=document.getElementById("setup-room-sadsana");i==="สามัญ"?(y==null||y.classList.remove("hidden"),_==null||_.classList.add("hidden"),L&&(L.value="")):i==="ศาสนา"?(_==null||_.classList.remove("hidden"),y==null||y.classList.add("hidden"),A&&(A.value="")):(y==null||y.classList.remove("hidden"),_==null||_.classList.remove("hidden"))};c(),document.querySelectorAll('input[name="setup-category"]').forEach(i=>i.addEventListener("change",()=>{var L;c();const y=(L=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:L.value,_=document.getElementById("setup-dept"),A=_==null?void 0:_.value;_&&(_.innerHTML=S(y,A))})),document.getElementById("setup-phone").addEventListener("input",i=>{const y=i.target.value.replace(/\D/g,"").slice(0,10);i.target.value=y.length<=3?y:y.length<=6?`${y.slice(0,3)} ${y.slice(3)}`:`${y.slice(0,3)} ${y.slice(3,6)} ${y.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async i=>{var _;i.preventDefault();const y=document.getElementById("setup-save");y.disabled=!0,y.textContent="กำลังบันทึก...";try{const A=document.getElementById("setup-dept").value||null,L=document.getElementById("setup-subg").value||null,N=((_=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:_.value)||null,q=document.getElementById("setup-phone").value.trim()||null,Q=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(ee=>ee.value),f=[...document.querySelectorAll('input[name="setup-room-sadsana"]:checked')].map(ee=>ee.value);await et(e.id,{dept:A,subject_group:L,category:N,phone:q});const{upsertHomeroomTeacher:P,deleteHomeroomTeacher:Y}=await me(async()=>{const{upsertHomeroomTeacher:ee,deleteHomeroomTeacher:Z}=await import("./api-1xsyVspL.js");return{upsertHomeroomTeacher:ee,deleteHomeroomTeacher:Z}},__vite__mapDeps([0,1])),oe=async(ee,Z)=>{const re=a.filter(j=>j.category===ee);await Promise.all(re.filter(j=>!Z.includes(j.main_room)).map(j=>Y(j.id).catch(()=>{}))),await Promise.all(Z.map(j=>P({teacher_id:e.id,main_room:j,category:ee,academic_year:p,semester:E})))};await Promise.all([oe("สามัญ",Q),oe("ศาสนา",f)]),J("บันทึกโปรไฟล์สำเร็จ ✅","success"),t&&await t(e.profile_id)}catch(A){J("บันทึกไม่สำเร็จ: "+(A.message??""),"error")}finally{y.disabled=!1,y.textContent="บันทึกและเริ่มใช้งาน →"}})}async function sa(e,a=[],t){var S;he("profile"),we("โปรไฟล์ของฉัน","registration");const[x,b,w]=await Promise.all([Ge().catch(()=>[]),_t().catch(()=>[]),kt().catch(()=>[])]),d=e==null?void 0:e.category,p=d?x.filter(r=>!r.category||r.category===d):x,E=[...new Map(p.map(r=>[r.dept_code,r])).values()],$=Fe((e==null?void 0:e.phone)??"");xe(`<div class="max-w-lg mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">แก้ไขโปรไฟล์</h2>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <!-- รูปโปรไฟล์ -->
      <div class="flex flex-col items-center mb-6">
        <div id="prof-avatar"
          class="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400
                 text-white text-3xl font-bold flex items-center justify-center
                 overflow-hidden border-4 border-white shadow-md">
          ${e!=null&&e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover" />`:((e==null?void 0:e.full_name)??"ค").charAt(0).toUpperCase()}
        </div>
        <label class="mt-3 cursor-pointer">
          <span class="text-sm text-emerald-600 hover:text-emerald-800 font-medium">📷 เปลี่ยนรูปโปรไฟล์</span>
          <input id="prof-photo-file" type="file" accept="image/*" class="hidden" />
        </label>
      </div>
      ${e?"":`
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-700">
        ⚠️ บัญชีนี้ยังไม่ได้เชื่อมกับข้อมูลครู กรุณาติดต่อผู้ดูแลระบบ
      </div>`}
      <form id="prof-form" class="space-y-4" ${e?"":'style="opacity:0.5;pointer-events:none"'}>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">รหัสครู</label>
            <input type="text" value="${(e==null?void 0:e.teacher_code)??""}"
              class="${W} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${(e==null?void 0:e.category)??"—"}"
              class="${W} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${(e==null?void 0:e.full_name)??""}" class="${W}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||""}" class="${W}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${(e==null?void 0:e.username)??""}" placeholder="เช่น hambal.waji"
            class="${W} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${$}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${W}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${E.length>0?`<select id="prof-dept" class="${ue} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${E.map(r=>`<option value="${r.dept_code}" ${r.dept_code===(e==null?void 0:e.dept)?"selected":""}>${r.dept_name} (${r.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${W} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${ue}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${(e==null?void 0:e.subject_group)==="ACDM"?"selected":""}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${(e==null?void 0:e.subject_group)==="AGM"?"selected":""}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${(e==null?void 0:e.subject_group)==="ACDMVOC"?"selected":""}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${(e==null?void 0:e.subject_group)==="AGMVOC"?"selected":""}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        <!-- ห้องที่ปรึกษา -->
        <div class="border-t border-gray-100 pt-4">
          <label class="block text-sm font-semibold text-gray-700 mb-3">🏠 ห้องที่ปรึกษา</label>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ห้องสามัญ — เลือกได้มากกว่า 1 ห้อง</label>
              <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
                ${b.length?b.map(r=>`
                <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
                  <input type="checkbox" name="prof-room-samai" value="${r}" ${a.find(u=>u.main_room===r&&u.category==="สามัญ")?"checked":""} class="text-emerald-600 rounded" />
                  <span>${r}</span>
                </label>`).join(""):'<p class="text-xs text-gray-400">ยังไม่มีห้องสามัญ</p>'}
              </div>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ห้องศาสนา — เลือกได้มากกว่า 1 ห้อง</label>
              <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
                ${w.length?w.map(r=>`
                <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
                  <input type="checkbox" name="prof-room-religion" value="${r}" ${a.find(u=>u.main_room===r&&u.category==="ศาสนา")?"checked":""} class="text-emerald-600 rounded" />
                  <span>${r}</span>
                </label>`).join(""):'<p class="text-xs text-gray-400">ยังไม่มีห้องศาสนา</p>'}
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._navTo('overview')"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="prof-save" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            บันทึก
          </button>
        </div>
      </form>
    </div>

    <!-- เปลี่ยนรหัสผ่าน -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7 mt-4">
      <h3 class="font-bold text-gray-800 mb-4">🔒 เปลี่ยนรหัสผ่าน</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">รหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${W}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${W}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`),e&&(document.getElementById("prof-phone").addEventListener("input",r=>{r.target.value=Fe(r.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",r=>{const u=r.target.files[0];u&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(u)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async r=>{var i;r.preventDefault();const u=document.getElementById("prof-save"),c=document.getElementById("prof-name").value.trim();if(!c){J("กรุณากรอกชื่อ-นามสกุล","warning");return}u.disabled=!0,u.textContent="กำลังบันทึก...";try{const y=document.getElementById("prof-dept"),_=document.getElementById("prof-dept-txt"),A=document.getElementById("prof-subg"),L=((_==null?void 0:_.value.trim().toUpperCase())||(y==null?void 0:y.value)||"").trim()||null,N=document.getElementById("prof-username").value.trim().toLowerCase(),q=document.getElementById("prof-email").value.trim();if(N&&!/^[a-z0-9._-]{3,32}$/.test(N)){J("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),u.disabled=!1,u.textContent="บันทึก";return}const Q={full_name:c,phone:document.getElementById("prof-phone").value.trim()||null,dept:L,subject_group:(A==null?void 0:A.value)||null,username:N||null,login_email:q||null},f=(i=document.getElementById("prof-photo-file").files)==null?void 0:i[0];f&&(Q.image_url=await es(e.id,f)),await et(e.id,Q);const{upsertHomeroomTeacher:P,deleteHomeroomTeacher:Y,getSystemConfig:oe}=await me(async()=>{const{upsertHomeroomTeacher:le,deleteHomeroomTeacher:ie,getSystemConfig:X}=await import("./api-1xsyVspL.js");return{upsertHomeroomTeacher:le,deleteHomeroomTeacher:ie,getSystemConfig:X}},__vite__mapDeps([0,1])),ee=await oe().catch(()=>({})),Z=parseInt(ee.academicYear??new Date().getFullYear()+543),re=parseInt(ee.semester??1),j=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(le=>le.value),se=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(le=>le.value),I=async(le,ie)=>{const X=a.filter(K=>K.category===le);await Promise.all(X.filter(K=>!ie.includes(K.main_room)).map(K=>Y(K.id).catch(()=>{}))),await Promise.all(ie.map(K=>P({teacher_id:e.id,main_room:K,category:le,academic_year:Z,semester:re})))};await Promise.all([I("สามัญ",j),I("ศาสนา",se)]),J("บันทึกโปรไฟล์สำเร็จ","success"),t&&await t(e.profile_id)}catch(y){J("บันทึกไม่สำเร็จ: "+(y.message??""),"error")}finally{u.disabled=!1,u.textContent="บันทึก"}}),(S=document.getElementById("prof-pw-save"))==null||S.addEventListener("click",async()=>{const r=document.getElementById("prof-pw-new").value,u=document.getElementById("prof-pw-confirm").value;if(!r){J("กรุณากรอกรหัสผ่านใหม่","warning");return}if(r.length<6){J("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(r!==u){J("รหัสผ่านไม่ตรงกัน","warning");return}const c=document.getElementById("prof-pw-save");c.disabled=!0,c.textContent="⏳ กำลังบันทึก...";try{const{error:i}=await Ue.auth.updateUser({password:r});if(i)throw i;J("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch(i){J("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+(i.message??""),"error")}finally{c.disabled=!1,c.textContent="บันทึกรหัสผ่านใหม่"}}))}const It="pp5_exam_docs_draft_v1",pt="pp5_exam_docs_pending_class_id",cs="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",ps="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",He=27,Ae=He*2,Bt=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],Ye={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)"}},Ie={classId:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:""},Pt=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let U={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...Ie},loadingStudents:!1},Xe=[];const ms=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},us=()=>{try{return JSON.parse(localStorage.getItem(It)||"{}")||{}}catch{return{}}},Pe=()=>{localStorage.setItem(It,JSON.stringify(U.form))},xs=()=>{let e="";try{e=sessionStorage.getItem(pt)||"",sessionStorage.removeItem(pt)}catch{}const a=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,a?String(a):""},st=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},Mt=e=>[...e||[]].sort((a,t)=>String(a.student_code||"").localeCompare(String(t.student_code||""),"th",{numeric:!0})),bs=e=>{if(!e)return"";const a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?"":`${a.getDate()} เดือน ${Bt[a.getMonth()]} พ.ศ. ${a.getFullYear()+543}`},gs=e=>{if(!e)return{day:"",month:"",year:""};const a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?{day:"",month:"",year:""}:{day:String(a.getDate()),month:Bt[a.getMonth()],year:String(a.getFullYear()+543)}},fs=e=>{const a=e.startTime||"",t=e.endTime||"";return a&&t?`${a} - ${t}`:a||t||""},mt=(e,a)=>e?a.key==="th"?`${e} น.`:e:"",vs=e=>{const a=String(e||"").trim();if(!a)return{room:"",name:""};const t=a.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(t)return{room:t[1],name:t[2].trim()};const[x,...b]=a.split(/\s+/);return{room:x,name:b.join(" ").trim()}},ys=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),ut=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),xt=(e,a,t,x=t.loading,b=0)=>{const w=e||[],d=w.map((E,$)=>`
    <tr>
      <td>${a+$}</td>
      <td>${n(E.student_code||"")}</td>
      <td class="nm">${n(E.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),p=Array.from({length:Math.max(0,b-w.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return d||p?d+p:`<tr><td colspan="4" class="empty-students">${n(x)}</td></tr>`},hs=(e,a,t,x,b,w)=>{const d=e.slice(a*Ae,(a+1)*Ae),p=d.slice(0,He),E=d.slice(He,Ae),$=a*Ae+1,S=$+He;return`
    <div class="exam-doc-paper ${w} sign-list ${a>0?"exam-doc-page-break":""}">
      ${Je(t.signListTitle)}
      ${Qe(t,x,b)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${n(t.studentCode)}</th>
                <th>${n(t.studentName)}</th>
                <th style="width:80px;">${n(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${xt(p,$,t)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${n(t.studentCode)}</th>
                <th>${n(t.studentName)}</th>
                <th style="width:80px;">${n(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${xt(E,S,t," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${Ke(t)}
    </div>`},Ke=(e,a)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${n(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>1. ...........................................................................................</div>
      </div>
      <div class="examiner-signature">
        <div>2. ...........................................................................................</div>
      </div>
    </div>
  </div>`,Je=e=>`
  <div class="header">
    <img src="${cs}" alt="">
    <h2>${n(e)}</h2>
    <img src="${ps}" alt="">
  </div>`,Qe=(e,a,t)=>`
  <div class="infoG">
    <div class="info1">
      ${n(e.examType)}: <span class="textColor">${n(t.examType||"")}</span>
      ${n(e.term)}: <span class="textColor">${n(t.semester||"")}</span>
      ${n(e.year)}: <span class="textColor">${n(t.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${n(e.subject)}: <span class="textColor">${n(a.subjectName||"")}</span>
      ${n(e.subjectCode)}: <span class="textColor">${n(a.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${n(e.examDate)}: <span class="textColor">${n(bs(t.examDate))}</span>
      ${n(e.examTime)}: <span class="textColor">${n(fs(t))}</span>
    </div>
    <div class="info4">
      ${n(e.teacher)}: <span class="textColor">${n(a.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${n(e.classLevel)}: <span class="textColor">${n(a.className||"")}</span>
    </div>
  </div>`,at=(e="all")=>{var A,L;const a=U.form,t=Ye[a.lang]||Ye.th,x=U.selectedClass||{},b=st(x),w=Mt(U.students),d=w.length,p=gs(a.examDate),E=(A=U.teacher)!=null&&A.phone?` (${U.teacher.phone})`:"",$={className:x.class_name||"",subjectName:b.subject_name||"",subjectCode:b.subject_code||"",teacherName:(((L=U.teacher)==null?void 0:L.full_name)||"")+E},S=Math.max(1,Math.ceil(w.length/Ae)),r=t.dir==="rtl"?"rtl":"ltr",u=e==="all"||e==="portrait",c=e==="all"||e==="envelope",i=e==="envelope"?" envelope-only":e==="portrait"?" portrait-only":"",y=a.examAmount||String(d),_=vs($.className);return`
    <style id="exam-doc-print-style">
      @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&family=Amiri:wght@400;700&display=swap');
      
      @page {
        size: A4 portrait;
        margin: 0;
      }

      @page landscape {
        size: A4 landscape;
        margin: 0;
      }

      #exam-doc-print-area {
        --exam-font: ${t.font};
        width: auto;
        margin: 0 auto;
      }

      #exam-doc-print-area.envelope-only { width: 297mm; }
      #exam-doc-print-area.portrait-only { width: 210mm; }

      .exam-doc-paper {
        font-family: var(--exam-font), 'Sarabun', sans-serif;
        font-size: 11pt;
        background: #fff;
        color: #111;
        box-sizing: border-box;
        width: 210mm;
        height: 297mm;
        margin: 0 auto 16px;
        padding: 10mm;
        box-shadow: 0 12px 30px rgba(15, 23, 42, .12);
        position: relative;
        overflow: hidden;
      }

      .exam-doc-paper.rtl {
        direction: rtl;
        text-align: right;
      }

      .exam-doc-paper.landscape {
        page: landscape;
        width: 297mm;
        height: 210mm;
        padding: 19mm 15mm 11mm 17mm;
        overflow: visible;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-bottom: 10px;
      }

      .header img {
        width: 60px;
      }

      .header h2 {
        font-size: 17pt;
        font-weight: 700;
        margin: 0;
      }

      .infoG {
        font-size: 11pt;
      }

      .infoG div {
        margin-bottom: 6px;
      }

      .info1,
      .info2,
      .info3,
      .info4,
      .info5,
      .infoNP1,
      .infoNP2,
      .infoNP3,
      .infoNP4,
      .infoNP5 {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
      }

      .infoNP1,
      .infoNP2,
      .infoNP3,
      .infoNP4,
      .infoNP5 {
        margin-top: 50px;
      }

      .textColor {
        color: rgb(0, 33, 166);
        font-weight: bold;
        border-bottom: 2px dotted black;
        padding-bottom: 2px;
        flex-grow: 1;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
      }

      th,
      td {
        border: 1px solid black;
        padding: 3px;
        text-align: center;
        font-size: 11pt;
        line-height: 1.08;
      }

      .nm {
        text-align: left;
      }

      .column-container {
        display: flex;
        justify-content: space-between;
      }

      .column {
        width: 49%;
      }

      .examiner-signature {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }

      .exam-doc-paper.landscape .headerL {
        font-size: 40pt;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 1px;
      }

      .exam-doc-paper.landscape .infoNP {
        font-size: 32pt;
        line-height: 1;
        width: 100%;
        align-items: center;
        gap: 15px;
      }

      .exam-doc-paper.landscape .infoNP div {
        justify-content: center;
        gap: 5px;
        margin-bottom: 5px;
      }

      .exam-doc-paper.landscape .infoNP4 {
        flex-wrap: nowrap;
        gap: 7px;
        font-size: 30pt;
        white-space: nowrap;
      }

      .exam-doc-paper.landscape .exam-envelope-class {
        flex-grow: 0;
        flex-basis: 50mm;
        max-width: 50mm;
        min-height: 18mm;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 1;
        padding-bottom: 1px;
      }

      .exam-envelope-class-room {
        display: block;
        font-size: 32pt;
        font-weight: 700;
        line-height: .9;
      }

      .exam-envelope-class-name {
        display: block;
        max-width: 100%;
        margin-top: 2px;
        font-size: 17pt;
        font-weight: 700;
        line-height: .95;
        white-space: nowrap;
      }

      .exam-doc-paper.landscape .infoNP4 .textColor:not(.exam-envelope-class) {
        flex-grow: 0;
        min-width: 16mm;
        padding-left: 4px;
        padding-right: 4px;
      }

      @media print {
        @page {
          size: A4 portrait;
          margin: 0;
        }

        @page landscape {
          size: A4 landscape;
          margin: 0;
        }

        body * { visibility: hidden !important; }
        #exam-doc-print-area, #exam-doc-print-area * { visibility: visible !important; }
        #exam-doc-print-area {
          position: static;
          width: auto;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          width: auto;
          height: auto;
          margin: 0 !important;
          overflow: visible;
          font-size: 11pt;
          background: #fff !important;
        }

        .exam-doc-paper {
          margin: 0 !important;
          box-shadow: none !important;
          break-after: page;
          page-break-after: always;
        }

        .landscape,
        .exam-doc-paper.landscape {
          page: landscape;
          break-before: page;
          page-break-before: always;
        }

        .exam-doc-paper:last-child {
          break-after: auto;
          page-break-after: auto;
        }
      }
    </style>
    <div id="exam-doc-print-area" class="${i.trim()}">
    ${u?`
    ${Array.from({length:S},(N,q)=>hs(w,q,t,$,a,r)).join("")}

    <div class="exam-doc-paper ${r} exam-doc-page-break">
      ${Je(t.examCoverTitle)}
      ${Qe(t,$,a)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${n(t.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${d}</span> ${n(t.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${n(t.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${n(t.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${n(t.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${n(t.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${n(t.no)}</th>
            <th>${n(t.studentCode)}</th>
            <th>${n(t.absentName)}</th>
            <th>${n(t.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${ut(15)}
        </tbody>
      </table>
      ${Ke(t)}
    </div>

    <div class="exam-doc-paper ${r} exam-doc-page-break">
      ${Je(t.absentTitle)}
      ${Qe(t,$,a)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${n(t.no)}</th>
            <th>${n(t.studentCode)}</th>
            <th>${n(t.absentName)}</th>
            <th>${n(t.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${ut(15)}
        </tbody>
      </table>
      ${Ke(t)}
    </div>
    `:""}

    ${c?`
    <div class="exam-doc-paper ${r} landscape ${u?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${n(t.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${n(t.envelopeSubject)} <span class="textColor">${n($.subjectName)}</span> ${n(t.subjectCode)} <span class="textColor">${n($.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${n(t.envelopeDate)} <span class="textColor">${n(p.day)}</span> ${n(t.envelopeMonth)} <span class="textColor">${n(p.month)}</span> ${n(t.envelopeYear)} <span class="textColor">${n(p.year)}</span>
        </div>
        <div class="infoNP3">
          ${n(t.envelopeTime)} <span class="textColor">${n(mt(a.startTime,t))}</span> ${n(t.envelopeTo)} <span class="textColor">${n(mt(a.endTime,t))}</span>
        </div>
        <div class="infoNP4">
          ${n(t.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${n(_.room)}</span>${_.name?`<span class="exam-envelope-class-name">${n(_.name)}</span>`:""}</span> ${n(t.envelopeStudents)} <span class="textColor">${d}</span> ${n(t.studentUnit)} ${n(t.examAmount)} <span class="textColor">${n(y)}</span> ${n(t.examUnit)}
        </div>
        <div class="infoNP5">
          ${n(t.envelopeTeacher)} <span class="textColor">${n($.teacherName)}</span>
        </div>
      </div>
    </div>
    `:""}
    </div>`},ws=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${at("all")}
</body>
</html>`;Ct(e,{autoprint:!0})},$s=()=>{const e=U.selectedClass,a=st(e);return e?`${a.subject_code||"-"} · ${a.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function _s(){Xe.forEach(e=>{try{e()}catch{}}),Xe=[]}function bt(e,a){const t=document.getElementById(e),x=document.getElementById(`${e}-list`);if(!t||!x)return;const b=U.teachers||[],w=()=>{x.classList.add("hidden")},d=c=>{t.value=c.full_name||"",U.form[a]=t.value,Pe(),Me(),w()},p=()=>{const c=t.value.trim(),i=c.toLowerCase(),y=b.filter(_=>!c||ys(_).includes(i)).slice(0,10);if(!b.length){x.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!y.length){x.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}x.innerHTML=y.map(_=>`
      <button type="button" data-id="${_.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${_.image_url?`<img src="${_.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${n((_.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${n(_.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${n(_.teacher_code||"—")}${_.dept?` · ${n(_.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),x.querySelectorAll(".exam-teacher-option").forEach(_=>{_.addEventListener("mousedown",A=>{A.preventDefault();const L=b.find(N=>String(N.id)===String(_.dataset.id));L&&d(L)})})},E=()=>{p(),x.classList.remove("hidden")},$=()=>{U.form[a]=t.value,Pe(),Me(),E()},S=()=>E(),r=c=>{if(c.key==="Escape"&&w(),c.key==="Enter"){const i=x.querySelector(".exam-teacher-option");i&&!x.classList.contains("hidden")&&(c.preventDefault(),i.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},u=c=>{!t.contains(c.target)&&!x.contains(c.target)&&w()};t.addEventListener("input",$),t.addEventListener("focus",S),t.addEventListener("keydown",r),document.addEventListener("mousedown",u,!0),Xe.push(()=>{t.removeEventListener("input",$),t.removeEventListener("focus",S),t.removeEventListener("keydown",r),document.removeEventListener("mousedown",u,!0)})}function ze(){const e=U.form,a=U.classes.map(t=>{const x=st(t),b=`${x.subject_code||"-"} · ${x.subject_name||"-"} · ${t.class_name||"-"}`;return`<option value="${t.id}" ${String(e.classId)===String(t.id)?"selected":""}>${n(b)}</option>`}).join("");xe(`
    <div class="animate-fade space-y-5">
      <style>
        .exam-doc-control-card { border-radius: 16px; border: 1px solid #e5e7eb; background: #fff; box-shadow: 0 8px 22px rgba(15, 23, 42, .06); }
        .exam-doc-preview-wrap { overflow-x: auto; padding: 14px; border-radius: 16px; background: #f8fafc; border: 1px solid #e5e7eb; }
        .exam-teacher-autocomplete { position: relative; }
        .exam-teacher-results { position: absolute; z-index: 40; left: 0; right: 0; top: calc(100% + 4px); max-height: 240px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; box-shadow: 0 18px 32px rgba(15, 23, 42, .14); }
        @media print { .exam-doc-screen-only { display: none !important; } }
      </style>
      <section class="exam-doc-screen-only exam-doc-control-card p-5">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
          <div>
            <h2 class="text-lg font-extrabold text-gray-800">เอกสารช่วงสอบ</h2>
            <p class="text-xs text-gray-400 mt-1">สร้างใบลงชื่อสอบ ใบปะหน้าข้อสอบ ใบแจ้งขาดสอบ และใบปะหน้าซองจากรายชื่อนักเรียนจริง</p>
          </div>
          <div class="flex gap-2 flex-wrap">
            <button id="exam-doc-refresh" class="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">รีเฟรชรายชื่อ</button>
            <button id="exam-doc-print" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 shadow-sm transition">พิมพ์ / บันทึก PDF</button>
          </div>
        </div>

        <div class="grid gap-4 lg:grid-cols-12">
          <label class="lg:col-span-5 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รายวิชา / ห้องเรียน</span>
            <select id="exam-class-id" class="${ue}">
              <option value="">เลือกห้องเรียน</option>
              ${a}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${ue}">
              ${Object.values(Ye).map(t=>`<option value="${t.key}" ${e.lang===t.key?"selected":""}>${n(t.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <select id="exam-type" class="${ue}">
              ${Pt.map(t=>`
                <option value="${n(t)}" ${e.examType===t?"selected":""}>${n(t)}</option>
              `).join("")}
            </select>
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${W}" value="${n(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${W}" value="${n(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${W}" value="${n(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${W}" value="${n(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${W}" value="${n(e.endTime)}">
            </label>
          </div>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${W}" value="${n(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${W}" value="${n(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${W}" value="${n(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${W}" value="${n(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${W}" value="${n(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${W}" value="${n(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${n($s())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${U.students.length} คน</span>
          ${U.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${at()}</div>
      </section>
    </div>`),Es()}async function Ze(){const e=U.form.classId;if(U.selectedClass=U.classes.find(a=>String(a.id)===String(e))||null,U.students=[],!!e){U.loadingStudents=!0,ze();try{U.students=Mt(await Ut(e))}catch(a){console.error(a),J("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+(a.message||""),"error")}finally{U.loadingStudents=!1}}}function Be(){var e,a,t,x,b,w,d,p,E,$,S,r,u,c;U.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",lang:((a=document.getElementById("exam-lang"))==null?void 0:a.value)||"th",examType:((t=document.getElementById("exam-type"))==null?void 0:t.value)||"",semester:((x=document.getElementById("exam-semester"))==null?void 0:x.value)||"",academicYear:((b=document.getElementById("exam-year"))==null?void 0:b.value)||"",examDate:((w=document.getElementById("exam-date"))==null?void 0:w.value)||"",startTime:((d=document.getElementById("exam-start"))==null?void 0:d.value)||"",endTime:((p=document.getElementById("exam-end"))==null?void 0:p.value)||"",classPart:((E=document.getElementById("exam-class-part"))==null?void 0:E.value)||"",periodPart:(($=document.getElementById("exam-period-part"))==null?void 0:$.value)||"",examRoom:((S=document.getElementById("exam-room"))==null?void 0:S.value)||"",examAmount:((r=document.getElementById("exam-amount"))==null?void 0:r.value)||"",invigilator1:((u=document.getElementById("exam-invigilator-1"))==null?void 0:u.value)||"",invigilator2:((c=document.getElementById("exam-invigilator-2"))==null?void 0:c.value)||""},U.selectedClass=U.classes.find(i=>String(i.id)===String(U.form.classId))||null,Pe()}function Me(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=at())}function ks(){return Be(),Me(),U.form.classId?!0:(J("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function Es(){var a,t,x;_s(),["exam-lang","exam-type","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2"].forEach(b=>{var w,d;(w=document.getElementById(b))==null||w.addEventListener("input",()=>{Be(),Me()}),(d=document.getElementById(b))==null||d.addEventListener("change",()=>{Be(),Me()})}),(a=document.getElementById("exam-class-id"))==null||a.addEventListener("change",async()=>{Be(),Pe(),await Ze(),ze()}),(t=document.getElementById("exam-doc-refresh"))==null||t.addEventListener("click",async()=>{Be(),await Ze(),ze(),J("รีเฟรชรายชื่อแล้ว","success")}),(x=document.getElementById("exam-doc-print"))==null||x.addEventListener("click",()=>{ks()&&ws()}),bt("exam-invigilator-1","invigilator1"),bt("exam-invigilator-2","invigilator2")}async function aa(e){he("exam-docs"),we("เอกสารช่วงสอบ","exam-docs"),xe(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[a,t,x]=await Promise.all([tt((e==null?void 0:e.id)??null),Ne().catch(()=>({})),ht().catch(()=>[])]),b=us(),w=xs(),d={...Ie,semester:String(t.semester||Ie.semester||""),academicYear:String(t.academicYear||Ie.academicYear||""),examDate:ms(),invigilator1:(e==null?void 0:e.full_name)||"",...b};w&&a.some(p=>String(p.id)===String(w))&&(d.classId=String(w)),U={teacher:e,classes:a,teachers:x,students:[],selectedClass:null,loadingStudents:!1,form:d},Pt.includes(U.form.examType)||(U.form.examType=Ie.examType),w&&Pe(),U.selectedClass=U.classes.find(p=>String(p.id)===String(U.form.classId))||null,await Ze(),ze()}catch(a){console.error(a),xe(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${n(a.message||"")}
    </div>`)}}let je=null,ke=null,Le=null,Ee=null,Ce=null;const Cs={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},Ss={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function js(e){const a=new Date,t=new Date(e.event_date+"T00:00:00"),x=new Date((e.end_date||e.event_date)+"T23:59:59");if(a>=t&&a<=x)return{status:"ongoing"};const b=Math.max(0,Math.floor((t-a)/1e3)),w=Math.floor(b/86400),d=b%86400,p=Math.floor(d/3600),E=Math.floor(d%3600/60),$=d%60,S=`${String(p).padStart(2,"0")}:${String(E).padStart(2,"0")}:${String($).padStart(2,"0")}`,r=b<=86400?"red":b<=3*86400?"amber":"normal";return{status:"upcoming",days:w,clock:S,urgency:r}}function Ls(e,a){if(!e)return 0;const t=new Date(e),x=new Date(a+"T00:00:00");if(isNaN(t)||isNaN(x))return 0;const b=x.getTime()-t.getTime();return b<0?0:Math.floor(b/(7*24*60*60*1e3))+1}function gt(e,a){const t=d=>String(d??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),x=d=>new Date(d+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),b=new Date().toISOString().slice(0,10),w=(e??[]).filter(d=>(d.end_date||d.event_date)>=b).map(d=>({ev:d,cd:js(d)})).filter(({cd:d})=>d.status==="ongoing"||d.days<=14).sort((d,p)=>d.ev.event_date.localeCompare(p.ev.event_date)).slice(0,5);return w.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${w.map(({ev:d,cd:p})=>{const E=p.status==="ongoing"||p.urgency==="red",$=p.urgency==="amber",S=E?"bg-red-50 border-red-300 ring-2 ring-red-200":$?"bg-amber-50 border-amber-200":"bg-white border-gray-200",r=E?"bg-red-100 animate-pulse":$?"bg-amber-100":"bg-gray-100",u=Ls(a,d.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${S}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${r}">${E?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${Ss[d.event_type]}">${Cs[d.event_type]}</span>
            <span class="text-[11px] text-gray-400">${x(d.event_date)}</span>
            ${u>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${u}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${E?"text-red-800":"text-gray-800"}">${t(d.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${p.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${E?"text-red-600":$?"text-amber-600":"text-gray-500"}">อีก ${p.days} วัน</p>
               <p class="text-[11px] font-mono ${E?"text-red-400":"text-gray-400"}">${p.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function ft(e,a,t=null){const x=p=>p==="A"?"#059669":p==="B"?"#2563eb":"#d97706",b=(p="0.11")=>t?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${p};color:${x(t.grade)}">${t.grade}</span>
       </div>`:"";if(!e.length)return"";const w=e.map(p=>({...p,cd:ss(p.start_time,p.end_time)})).sort((p,E)=>{const $={active:0,upcoming:1,done:2};return $[p.cd.status]-$[E.cd.status]||(p.start_time??"").localeCompare(E.start_time??"")}),d=w.some(p=>p.cd.status==="active");return`
  <div onclick="window._openWenDuty('${a}')"
    class="relative overflow-hidden mb-3 border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-150
           ${d?"bg-red-50 border-red-300 ring-4 ring-red-100":"bg-amber-50 border-amber-300 ring-4 ring-amber-100"}">
    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                ${d?"bg-red-100 animate-pulse":"bg-amber-100"}">${d?"🚨":"🛡️"}</div>
    <div class="flex-1 min-w-0">
      <span class="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1
        ${d?"bg-red-200 text-red-800":"bg-amber-200 text-amber-800"}">เวรวันนี้</span>
      <p class="font-extrabold text-base mb-1 ${d?"text-red-800":"text-amber-800"}">
        ${d?"🔴 ถึงเวลาเวรแล้ว!":`วันนี้คุณมีเวร ${w.length} จุด`}
      </p>
      <div class="space-y-1">
        ${w.map(p=>p.cd.status==="active"?`
        <div class="bg-red-100/70 rounded-lg px-2 py-1.5 -mx-2">
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${n(p.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${n(p.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${p.cd.cls}">${p.cd.label}</span>
          </div>
        </div>`:`
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${p.cd.status==="done"?"text-gray-400 line-through":"text-amber-700"}">
            📍 ${n(p.name)} <span class="${p.cd.status==="done"?"text-gray-300":"text-amber-500"}">(${n(p.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${p.cd.cls}">${p.cd.label}</span>
        </div>`).join("")}
      </div>
      <p class="text-[11px] mt-2 font-semibold ${d?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${b()}
  </div>`}const Te=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let be=null;function vt(e,a){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const t=parseInt(String(a??"").replace(/[^0-9]/g,""),10);return t>=4&&t<=6?"สามัญมัธยม ม.ปลาย":t>=1&&t<=3?"สามัญมัธยม ม.ต้น":null}async function Ts(e){he("overview"),we("ภาพรวมผู้บริหาร"),xe(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[a,t]=await Promise.all([Zt().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),Ne().catch(()=>({}))]),x=Object.fromEntries(a.subjectRows.map(f=>[f.id,f])),b=Object.fromEntries(Te.map(f=>[f,0]));let w=0;a.classRows.forEach(f=>{const P=x[f.course_id],Y=P?vt(P.subject_group,P.grade_level):null;Y?b[Y]++:w++});const d=new Set(a.classRows.map(f=>f.course_id).filter(Boolean)),p=a.subjectRows.filter(f=>d.has(f.id)),E=Object.fromEntries(Te.map(f=>[f,new Set])),$=new Set;p.forEach(f=>{const P=vt(f.subject_group,f.grade_level);P?E[P].add(f.subject_name):$.add(f.subject_name)});const S=Object.fromEntries(Te.map(f=>[f,E[f].size])),r=new Set(p.map(f=>f.subject_name)).size,u=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:a.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:a.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:a.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:r,hint:"นับชื่อวิชาไม่ซ้ำ"}],c=()=>u.map(f=>`
    <button type="button" data-exec-stat="${f.key}"
      class="text-left bg-white rounded-2xl border ${be===f.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${f.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${f.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${f.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${f.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${be===f.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),i=(f,P)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${f}</span>
      <span class="text-sm font-bold text-gray-800">${P.toLocaleString("th-TH")}</span>
    </div>`,y=()=>{if(!be)return"";let f="";if(be==="teachers"||be==="students"){const P=u.find(Y=>Y.key===be);f=`<p class="text-sm text-gray-500">${P.icon} ${P.label}ทั้งหมด <b class="text-gray-800">${P.value.toLocaleString("th-TH")}</b> คน (${P.hint})</p>`}else be==="courses"?f=Te.map(P=>i(P,b[P])).join("")+(w>0?i("ไม่ระบุหมวด/ยังไม่ผูกวิชา",w):""):be==="subjects"&&(f=Te.map(P=>i(P,S[P])).join("")+($.size>0?i("ไม่ระบุหมวด",$.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${f}
    </div>`},_={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},L=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter(f=>f.show&&["council","terangganu","regrade"].includes(f.key)).map(f=>{const[P,Y]=_[f.key]||["#E4E4E7","#9C9CA3"];return{key:f.key,id:f.id,emoji:f.emoji,label:f.label,from:P,to:Y,badge:f.badge,onclick:f.href?`window.location.href='${f.href}'`:`window._navTo('${f.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map(f=>jt(f,t.iconTileStyle)).join(""),q=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map(f=>`
    <a href="${f.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${f.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${f.label}</span>
    </a>`).join("");xe(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${n((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${c()}
    </div>
    <div id="exec-stat-detail">${y()}</div>

    <div class="mt-5 mb-1 md:hidden">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</h4>
      <div class="flex gap-3 overflow-x-auto pb-1" id="exec-icon-grid">
        ${L}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">🖥️ จอมอนิเตอร์</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${q}
      </div>
    </div>
  </div>`);function Q(){document.querySelectorAll("[data-exec-stat]").forEach(f=>{f.onclick=()=>{var Y;const P=f.dataset.execStat;be=be===P?null:P,document.getElementById("exec-stat-cards").innerHTML=c(),document.getElementById("exec-stat-detail").innerHTML=y(),Q(),(Y=document.getElementById("exec-stat-detail-inner"))==null||Y.scrollIntoView({behavior:"smooth",block:"nearest"})}})}Q()}async function yt(e,a=[]){var D;if(he("overview"),we("ภาพรวม"),it(e).includes("executive")){Ts(e);return}const{getPendingExamRequestCount:t}=await me(async()=>{const{getPendingExamRequestCount:s}=await import("./api-1xsyVspL.js");return{getPendingExamRequestCount:s}},__vite__mapDeps([0,1])),{getMyDonationRequests:x}=await me(async()=>{const{getMyDonationRequests:s}=await import("./api-1xsyVspL.js");return{getMyDonationRequests:s}},__vite__mapDeps([0,1])),{getUnreadNotifications:b}=await me(async()=>{const{getUnreadNotifications:s}=await import("./api-1xsyVspL.js");return{getUnreadNotifications:s}},__vite__mapDeps([0,1])),[w,d,p,E,$,S,r,u,c]=await Promise.all([e?wt(e.id).catch(()=>[]):$t().catch(()=>[]),tt((e==null?void 0:e.id)??null).catch(()=>[]),Ne().catch(()=>({})),e?t(e.id).catch(()=>0):Promise.resolve(0),e?x(e.id).catch(()=>[]):Promise.resolve([]),e?b(e.id).catch(()=>[]):Promise.resolve([]),e?is(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?rs(e.teacher_code).catch(()=>null):Promise.resolve(null),e?me(()=>import("./sports-portals.js_v_10.22-BrIjazIR.js").then(s=>s.p),__vite__mapDeps([7,3,1,8,9,6])).then(s=>s.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1})]),i=parseInt(p.academicYear??2568),y=parseInt(p.semester??1),_=as(p.semester_start);je&&(clearInterval(je),je=null),ke&&(clearInterval(ke),ke=null),Le&&(clearInterval(Le),Le=null),Ee&&(clearInterval(Ee),Ee=null),Ce&&(clearInterval(Ce),Ce=null);const[A,L,N,q,Q]=await Promise.all([e?Yt(e.id,i,y).catch(()=>[]):Promise.resolve([]),e?Xt(e.id).catch(()=>[]):Promise.resolve([]),Kt().catch(()=>[]),Jt().catch(()=>[]),e?Qt(i,y).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries(q.map(s=>[s.id,s]));const f=window._classroomMapGlobal,P={};L.forEach(s=>{P[s.teacher_schedule_id]||(P[s.teacher_schedule_id]=[]),P[s.teacher_schedule_id].push(s.class_id)});const Y=Object.fromEntries(d.map(s=>[s.id,s])),oe=Object.fromEntries(N.map(s=>[s.period_no,s])),ee=new Date().getDay(),Z=A.filter(s=>s.day_of_week===ee&&(P[s.id]??[]).length>0).map(s=>{const v=(s.period_no??1)+(s.span_periods??1)-1;return{...s,linkedClasses:(P[s.id]??[]).map(g=>Y[g]).filter(Boolean),period:oe[s.period_no],actualEndPeriod:oe[v]??oe[s.period_no]}}).sort((s,v)=>s.period_no-v.period_no),re=s=>{var g,B;const v=Oe((g=s.period)==null?void 0:g.start_time,(B=s.actualEndPeriod)==null?void 0:B.end_time);return v.label.includes("กำลังสอน")?0:v.label.startsWith("เสร็จ")?2:1},j=Z.find(s=>re(s)===0)??null,se=[...Z].filter(s=>s!==j).sort((s,v)=>re(s)-re(v)||s.period_no-v.period_no),I=a.filter(s=>s.category==="สามัญ"),le=$.find(s=>s.package_type==="donation"&&s.status==="approved"),ie=$.filter(s=>s.package_type==="donation"&&s.status==="approved").reduce((s,v)=>s+(v.amount??0),0),X=(s,v)=>{const g=parseInt(s,10);return Number.isFinite(g)&&g>0?g:v},K=()=>{const s=String(p.donationStickerTiers??"").trim();return X(p.donationMinAmount,99),X(p.donationAmountStep,50),(s?s.split(`
`).filter(Boolean).map(O=>{const[V,ae,z,te,ye]=O.split("|").map($e=>$e.trim());return{amount:X(V,0),sticker:ae||"🏅",title:z||`ผู้สนับสนุน ${V} บาท`,note:te||"",color:ye||""}}).filter(O=>O.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([O,V,ae,z,te])=>({amount:O,sticker:V,title:ae,note:z,color:te}))).sort((O,V)=>O.amount-V.amount).map((O,V)=>{const ae=p[`donationStickerImg${V+1}`]??"";return ae&&/^https?:\/\//.test(ae)?{...O,sticker:ae}:O})},ve=s=>{if(!s)return"";const v=parseInt(s.slice(1,3),16),g=parseInt(s.slice(3,5),16),B=parseInt(s.slice(5,7),16);return`border:2px solid ${s};box-shadow:0 0 0 4px rgba(${v},${g},${B},0.25),0 4px 20px rgba(${v},${g},${B},0.18);`},Se=()=>{const s=String(p.donationSpecialFeatures??"").trim(),v=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4]];return s?s.split(`
`).filter(Boolean).map(g=>{const B=g.split("|").map(O=>O.trim());return{icon:B[0]||"✨",text:B[1]||B[0]||g,minTier:parseInt(B[2])||1}}).filter(g=>g.text):v.map(([g,B,O])=>({icon:g,text:B,minTier:O}))};let ne=null,ce=0,pe="",ge="",de="border border-gray-200 shadow-md";if(le&&p.quotaMode==="school_sponsored"){const s=K(),v=ie;if(ne=[...s].reverse().find(g=>v>=g.amount)??s[0],ce=ne?s.indexOf(ne)+1:0,ne){ge=ve(ne.color),de="";const g=String(ne.sticker??""),B=/^https?:\/\//.test(g)?`<img src="${g}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${g}</span>`,O=ne.color?`color:${ne.color};`:"color:#f59e0b;";pe=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${B}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${O}">
            ${ne.note||ne.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async s=>{if(!s)return;const{renderClassDetail:v}=await me(async()=>{const{renderClassDetail:g}=await import("./teacher-views-classes-s_CI5F_w.js").then(B=>B.t);return{renderClassDetail:g}},__vite__mapDeps([26,3,0,1,6,7,8,9,27,13,28,18,20,21,22,29]));v(e,s)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:s}=await me(async()=>{const{openSmartClassroomLanding:v}=await import("./teacher-views-smart-classroom-BNyIlVzh.js");return{openSmartClassroomLanding:v}},__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]));s(e)};const o=_>0?(()=>{const s=new Date(p.semester_start);s.setDate(s.getDate()+(_-1)*7);const v=new Date(s);v.setDate(v.getDate()+6);const g=O=>`${String(O.getDate()).padStart(2,"0")}/${String(O.getMonth()+1).padStart(2,"0")}`,B=`📅 สัปดาห์ที่ ${_} (${g(s)} – ${g(v)}) · ภาคเรียนที่ ${y}/${i}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${B}</span><span class="mr-10 lg:mr-16">${B}</span>
      </div>
    </div>
    <style>@keyframes teacher-week-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}</style>
    `})():"",H=it(e);window._openHomeroomPopup=()=>{var v;(v=document.getElementById("homeroom-popup"))==null||v.remove();const s=document.createElement("div");s.id="homeroom-popup",s.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",s.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">🏠 ห้องที่ปรึกษาของฉัน</p>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" onclick="this.closest('.fixed').remove()">×</button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3">
        ${a.map(g=>`
        <div class="border border-gray-100 rounded-xl p-3">
          <p class="font-bold text-gray-800">${g.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${g.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">${g.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${g.category==="สามัญ"?`
            <button onclick="window._openLifeSkillScore('${g.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>`:`
            <button onclick="window._openReligionScore('${g.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${g.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-4">ไม่มีห้องที่ปรึกษา</p>'}
      </div>
    </div>`,document.body.appendChild(s),s.addEventListener("click",g=>{g.target===s&&s.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:s}=await me(async()=>{const{openTeacherShirtSizeModal:v}=await import("./sports-portals.js_v_10.22-BrIjazIR.js").then(g=>g.p);return{openTeacherShirtSizeModal:v}},__vite__mapDeps([7,3,1,8,9,6]));s(e)};const T=[...new Set(d.map(s=>s.class_name).filter(Boolean))].sort(),C=JSON.stringify(T).replace(/"/g,"&quot;"),M=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:H.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:I.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${C}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:a.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:c.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],R={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},G=(window._teacherOverviewSystems||[]).filter(s=>s.show).map(s=>{const[v,g]=R[s.key]||["#E4E4E7","#9C9CA3"];return{key:s.key,id:s.id,show:!0,emoji:s.emoji,label:s.label,from:v,to:g,badge:s.badge,onclick:s.href?`window.location.href='${s.href}'`:`window._navTo('${s.nav}')`}}),F=[...M,...G].filter(s=>s.show),l=(e==null?void 0:e.overview_prefs)||null,m=l?F.filter(s=>!(l.hiddenKeys||[]).includes(s.key)).sort((s,v)=>{const g=l.iconOrder||[],B=g.indexOf(s.key),O=g.indexOf(v.key);return B===-1&&O===-1?0:B===-1?1:O===-1?-1:B-O}):F,k=m.map(s=>jt(s,p.iconTileStyle)).join("");if(window._openOverviewCustomizer=()=>As(e,F,a),xe(`<div class="animate-fade">

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${S.length?(()=>{const s={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},v={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},g={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},B={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},O=[...new Set(S.map(z=>z.metric))].map(z=>`<span style="background:${g[z]??"#f3f4f6"};color:${v[z]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${s[z]??z}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(S.filter(z=>z.supervisor).map(z=>[z.supervisor_id,z.supervisor])).values()].map(z=>B[z.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${S.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${O}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${e==null?void 0:e.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})():""}

    <!-- กำลังสอนอยู่ (ย้ายมาไว้ในโซนเร่งด่วนบนสุด) -->
    ${j?(()=>{var g,B;const s=j.period?`${j.period.start_time.substring(0,5)}–${j.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${j.period_no}`,v=((g=j.linkedClasses[0])==null?void 0:g.id)??null;return`
    <div id="active-class-card" class="mb-4 bg-white rounded-2xl p-5 ${v?"cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150":""}"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);"
      ${v?`onclick="window._goToActiveClass(${v})"`:""}>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${s}</span>
        ${v?'<span class="text-[11px] text-emerald-500 ml-auto">เข้าห้องเรียน →</span>':""}
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${j.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${j.linkedClasses.map(O=>{var V;return((V=O.master_subjects)==null?void 0:V.subject_name)??O.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${j.linkedClasses.map(O=>{const V=O.classroom_id?f[O.classroom_id]:null;return O.class_name+(V?` · 📍${V.building} ห้อง ${V.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${dt((B=j.actualEndPeriod)==null?void 0:B.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`})():""}

    ${o}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="bg-white rounded-2xl ${de} px-5 pt-5 pb-5 mb-5 flex items-center gap-5 overflow-hidden" style="${ge}">
      <!-- รูปโปรไฟล์ + ปุ่มแก้ไข -->
      <div class="flex flex-col items-center gap-2 flex-shrink-0">
        <div class="w-24 h-28 rounded-xl overflow-hidden border-2 border-emerald-100 shadow-md
                    bg-gradient-to-tr from-emerald-400 to-teal-400 flex items-center justify-center
                    text-white text-3xl font-bold">
          ${e!=null&&e.image_url?`<img src="${e.image_url}" class="w-full h-full object-cover"/>`:((e==null?void 0:e.full_name)??"ค").charAt(0).toUpperCase()}
        </div>
        <button onclick="window._navTo('profile')"
          class="text-[9px] px-1.5 py-0.5 rounded-md border border-gray-200 text-gray-500
                 hover:bg-gray-50 hover:text-gray-700 transition whitespace-nowrap">
          ✏️ แก้ไขโปรไฟล์
        </button>
      </div>
      <!-- ข้อมูลครู -->
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-gray-800 text-lg truncate">${(e==null?void 0:e.full_name)??"—"}</h3>
        <p class="text-xs text-gray-400 mt-0.5">รหัสครู ${(e==null?void 0:e.teacher_code)??"—"} · ${(e==null?void 0:e.category)??"—"}</p>
        <div class="flex flex-wrap gap-1.5 mt-2">
          ${e!=null&&e.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700 font-medium">📚 ${e.dept}</span>`:'<span class="px-2 py-0.5 rounded-full text-xs bg-amber-50 text-amber-600 font-medium">⚠️ ยังไม่ระบุกลุ่มสาระ</span>'}
          ${a.map(s=>`<span class="px-2 py-0.5 rounded-full text-xs ${s.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"} font-medium">🏠 ${s.main_room}</span>`).join("")}
          ${a.length===0?'<span class="px-2 py-0.5 rounded-full text-xs bg-gray-50 text-gray-400">ไม่มีห้องที่ปรึกษา</span>':""}
        </div>
      </div>
      <!-- สติกเกอร์ -->
      ${pe}
    </div>

    <!-- สรุปของฉัน -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      ${[{label:"คอร์สวิชาของฉัน",value:w.length,icon:"📖",color:"text-emerald-700",bg:"bg-emerald-50",nav:"my-courses"},{label:"ห้องเรียน",value:d.length,icon:"🏫",color:"text-blue-700",bg:"bg-blue-50",nav:"my-classes"},{label:"คำร้องรออนุมัติ",value:E,icon:"🔔",color:E>0?"text-red-700":"text-gray-400",bg:"bg-red-50",nav:"requests"},{label:"Smart Classroom",value:"เปิดห้องสอนสด",icon:"👑",color:"text-amber-700",bg:"bg-amber-50",onclick:"window._openSmartClassroomLanding()"}].map(s=>`
        <div onclick="${s.onclick||`window._navTo('${s.nav}')`}"
          class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md p-5 flex items-center gap-4 cursor-pointer hover:shadow-lg active:scale-[0.98] transition-all duration-150 bg-white">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80"></div>
          <div class="w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center text-xl shadow-sm">${s.icon}</div>
          <div>
            <p class="text-xs text-gray-500">${s.label}</p>
            <p class="${typeof s.value=="number"?"text-2xl":"text-sm mt-1"} font-bold ${s.color}">${s.value}</p>
          </div>
        </div>`).join("")}
    </div>

    <!-- ระบบอื่น ๆ — ซ่อนบนจอใหญ่ (md ขึ้นไป) เพราะมีเมนูซ้ายแบบเปิดค้างอยู่แล้ว ไม่ต้องมีปุ่มซ้ำ -->
    <div class="mb-4 md:hidden">
      <div class="flex items-center justify-between mb-2 px-0.5">
        <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide">ระบบอื่น ๆ</h4>
        <button type="button" onclick="window._openOverviewCustomizer()"
          class="flex items-center gap-1 text-[11px] font-bold text-gray-400 hover:text-emerald-600 transition px-1.5 py-0.5 -mr-1.5">
          <span>⚙️</span><span>ปรับหน้าภาพรวมแบบรวดเร็ว</span>
        </button>
      </div>
      ${m.length>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${k}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${ft(r,e.teacher_code,u)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${gt(Q,p.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${St[ee]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${A.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':L.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${Z.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${A.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":L.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${A.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:L.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${se.map((s,v)=>{var V,ae;const g=Oe((V=s.period)==null?void 0:V.start_time,(ae=s.actualEndPeriod)==null?void 0:ae.end_time),B=g.label.startsWith("เสร็จ"),O=s.period?`${s.period.start_time.substring(0,5)}–${(s.actualEndPeriod??s.period).end_time.substring(0,5)}`:`คาบ ${s.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${B?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${B?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${B?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${s.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${B?"text-gray-400":"text-gray-700"} truncate">
                  ${s.linkedClasses.map(z=>{var te;return((te=z.master_subjects)==null?void 0:te.subject_name)??z.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${s.linkedClasses.map(z=>{const te=z.classroom_id?f[z.classroom_id]:null;return z.class_name+(te?` 📍${te.building} ห้อง ${te.room_number}`:"")}).join(" · ")} · ${O}
                </p>
              </div>
              <span id="today-cd-${v}" class="text-xs font-medium flex-shrink-0 ${g.cls}">${g.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),(D=document.getElementById("donor-sticker-btn"))==null||D.addEventListener("click",()=>{if(!ne)return;const s=Se(),v=ne.color||"#f59e0b",g=parseInt(v.slice(1,3),16),B=parseInt(v.slice(3,5),16),O=parseInt(v.slice(5,7),16),V=String(ne.sticker??""),ae=/^https?:\/\//.test(V)?`<img src="${V}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${V}</div>`,z=document.createElement("div");z.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",z.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${g},${B},${O},0.85),rgba(${g},${B},${O},1))">
          ${ae}
          <p class="text-white font-bold text-base">${ne.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${ne.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${s.map(te=>ce>=(te.minTier??1)?`<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${te.icon}</span>
                     <span class="leading-snug">${te.text}</span>
                   </div>`:`<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${te.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${te.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${ce<4?`
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>`:""}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${g},${B},${O},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(z),z.addEventListener("click",te=>{te.target===z&&z.remove()})}),Z.length>0&&(je=setInterval(()=>{se.forEach((s,v)=>{var O,V;const g=document.getElementById(`today-cd-${v}`);if(!g){clearInterval(je);return}const B=Oe((O=s.period)==null?void 0:O.start_time,(V=s.actualEndPeriod)==null?void 0:V.end_time);g.textContent=B.label,g.className=`text-xs font-medium flex-shrink-0 ${B.cls}`})},3e4)),j&&(ke=setInterval(()=>{var g,B,O,V;const s=document.getElementById("active-class-countdown");if(!s){clearInterval(ke);return}Oe((g=j.period)==null?void 0:g.start_time,(B=j.actualEndPeriod)==null?void 0:B.end_time).label.startsWith("เสร็จ")?(clearInterval(ke),(O=document.getElementById("active-class-card"))==null||O.remove()):s.textContent=dt((V=j.actualEndPeriod)==null?void 0:V.end_time)},1e3)),document.getElementById("teacher-live-clock")){const s=()=>{const v=new Date,g=document.getElementById("teacher-live-clock");if(!g){clearInterval(Le);return}g.textContent=`${String(v.getHours()).padStart(2,"0")}:${String(v.getMinutes()).padStart(2,"0")}:${String(v.getSeconds()).padStart(2,"0")}`};s(),Le=setInterval(s,1e3)}e&&r.length&&(Ee=setInterval(()=>{const s=document.getElementById("wen-duty-card");if(!s){clearInterval(Ee),Ee=null;return}s.innerHTML=ft(r,e.teacher_code,u)},3e4)),e&&Q.length&&(Ce=setInterval(()=>{const s=document.getElementById("wcal-upcoming-card");if(!s){clearInterval(Ce),Ce=null;return}s.innerHTML=gt(Q,p.semester_start)},1e3))}function As(e,a,t){var r,u;(r=document.getElementById("overview-customizer-modal"))==null||r.remove();const x=(e==null?void 0:e.overview_prefs)||null;let b=a.map(c=>c.key);if((u=x==null?void 0:x.iconOrder)!=null&&u.length){const c=new Set(b),i=x.iconOrder.filter(_=>c.has(_)),y=b.filter(_=>!i.includes(_));b=[...i,...y]}const w=new Set(((x==null?void 0:x.hiddenKeys)||[]).filter(c=>b.includes(c))),d=Object.fromEntries(a.map(c=>[c.key,c])),p=document.createElement("div");p.id="overview-customizer-modal",p.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const E=()=>b.map((c,i)=>{const y=d[c];if(!y)return"";const _=w.has(c),A=y.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${_?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${y.from},${y.to})">${y.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${A}</span>
      <button type="button" data-oc-up="${c}" ${i===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${c}" ${i===b.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${c}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${_?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${_?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),$=()=>{const c=p.querySelector("#oc-list");c&&(c.innerHTML=E()),S()},S=()=>{p.querySelectorAll("[data-oc-toggle]").forEach(c=>c.onclick=()=>{const i=c.dataset.ocToggle;w.has(i)?w.delete(i):w.add(i),$()}),p.querySelectorAll("[data-oc-up]").forEach(c=>c.onclick=()=>{const i=b.indexOf(c.dataset.ocUp);i>0&&([b[i-1],b[i]]=[b[i],b[i-1]],$())}),p.querySelectorAll("[data-oc-down]").forEach(c=>c.onclick=()=>{const i=b.indexOf(c.dataset.ocDown);i<b.length-1&&([b[i+1],b[i]]=[b[i],b[i+1]],$())})};p.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <div>
          <p class="font-bold text-gray-800 text-sm">⚙️ ปรับหน้าภาพรวมแบบรวดเร็ว</p>
          <p class="text-[11px] text-gray-400 mt-0.5">ซ่อน/แสดง และเรียงลำดับไอคอน "ระบบอื่น ๆ"</p>
        </div>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" id="oc-close">×</button>
      </div>
      <div class="px-4 py-2 overflow-y-auto flex-1" id="oc-list">
        ${E()}
      </div>
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0 space-y-2">
        <button type="button" id="oc-save" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">บันทึก</button>
        <button type="button" id="oc-reset" class="w-full py-2 rounded-xl text-xs text-gray-400 hover:text-gray-600 transition">รีเซ็ตเป็นค่าเริ่มต้น</button>
      </div>
    </div>`,document.body.appendChild(p),S(),p.addEventListener("click",c=>{c.target===p&&p.remove()}),p.querySelector("#oc-close").addEventListener("click",()=>p.remove()),p.querySelector("#oc-save").addEventListener("click",async()=>{const c=p.querySelector("#oc-save");c.disabled=!0,c.textContent="กำลังบันทึก...";try{const i={iconOrder:b,hiddenKeys:[...w]};await rt(e.id,{overview_prefs:i}),e.overview_prefs=i,p.remove(),J("บันทึกการปรับแต่งแล้ว","success"),yt(e,t)}catch(i){console.error(i),J("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),c.disabled=!1,c.textContent="บันทึก"}}),p.querySelector("#oc-reset").addEventListener("click",async()=>{try{await rt(e.id,{overview_prefs:null}),e.overview_prefs=null,p.remove(),J("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),yt(e,t)}catch(c){console.error(c),J("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function Is(e,a,t,x,b){const w=x.samaiLogoBwUrl??x.samaiLogoUrl??"",d=Number(e.credit??1),p=d*2,E=d*2*20,S=String(e.grade_level??"").replace(/[^0-9]/g,""),r=["AGM","AGMVOC"].includes(e.subject_group??""),u=b.find(se=>se.dept_code===e.dept)??{},c=u.dept_name??e.dept??"",i=u.head_name??"",y=u.head_sign_url??"",_=x.samaiSchoolName??"",A=x.samaiDirectorName??"",L=x.samaiDirectorSignUrl??"",N=r?x.agmAcademicHeadName??x.samaiAcademicHeadName??"":x.samaiAcademicHeadName??"",q=new Date,Q=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],f=`${q.getDate()} ${Q[q.getMonth()]} พ.ศ. ${q.getFullYear()+543}`,P=x.academicYear??q.getFullYear()+543,Y=x.semester??1,oe=(t==null?void 0:t.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",ee=a.map(se=>se.class_name).join(", "),Z=S+(ee?" "+ee:""),re=r?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",j=`<!DOCTYPE html>
<html lang="th"><head><meta charset="UTF-8"/>
<title>ใบขออนุญาตใช้แผนการจัดการเรียนรู้</title>
<style>
  @page { size:A4; margin:0; }
  * { box-sizing:border-box; }
  body { margin:0; background:#ddd; }
  .page { width:794px; height:1123px; background:#fff; margin:0 auto; position:relative; overflow:hidden;
    color:#000; font-family:"TH SarabunPSK","TH Sarabun New","Sarabun",sans-serif;
    font-size:22px; line-height:1; }
  @media print { body { background:#fff; } .page { margin:0; } .no-print { display:none; } }
  .t  { position:absolute; white-space:nowrap; }
  .b  { font-weight:700; }
  .title { position:absolute; top:102px; left:0; width:794px; text-align:center; font-size:26px; font-weight:700; }
  .logo { position:absolute; left:58px; top:83px; width:66px; height:66px;
    border-radius:50%; font-size:13px; display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .line { position:absolute; border-bottom:1.2px dotted #111; height:23px; }
  .fill { position:absolute; border-bottom:1.2px dotted #111; height:23px; color:#064ec7;
    text-align:center; outline:none; overflow:hidden; white-space:nowrap; padding:0 4px; }
  .comment-line { position:absolute; left:58px; width:677px; border-bottom:2px dotted #111; height:1px; }
  .check { position:absolute; width:24px; height:24px; border:3px solid #999; border-radius:3px; }
  .center { text-align:center; }
  .small  { font-size:21px; }
</style></head><body>
<div class="page">

  <div class="logo">
    ${w?`<img src="${w}" style="width:72px;height:72px;object-fit:contain;" onerror="this.style.display='none'"/>`:'<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${n(_)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${n(f)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${Y} ปีการศึกษา ${P}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${n(_)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${n((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${n(oe)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${n(c)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${n(e.subject_name??"")}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${n(e.subject_code??"")}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${d}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${p}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${E}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${r?"อิสลามศึกษา":"มัธยมศึกษา"}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${n(Z)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${n((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${y?`<img src="${n(y)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${n(i)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${n(c)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${n(N)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${n(re)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${L?`<img src="${n(L)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${n(A)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${n(_)}</div>

</div>
</body></html>`;Ct(j)}export{Is as _openLessonPlanApproval,ft as _renderWenDutyCard,gt as _renderWorkCalendarUpcoming,Zs as openCourseDocPage2Modal,pa as renderAnnouncementsView,fa as renderAttendance,va as renderAttendanceGrid,Fs as renderClassDetail,ma as renderClassEditForm,Hs as renderClassForm,zs as renderCourseDocLangConfig,ea as renderCourseForm,aa as renderExamDocuments,la as renderGrades,ra as renderGradesGrid,ya as renderLifeSkillScore,ua as renderMyClasses,Qs as renderMyCourses,ha as renderPrayerRoomMonitor,wa as renderPrayerScore,sa as renderProfile,ta as renderProfileSetup,$a as renderReadingScore,ia as renderRequests,xa as renderSchedule,ba as renderScheduleBuilder,Gs as renderScheduleGrid,da as renderScoreColumns,yt as renderTeacherOverview};
