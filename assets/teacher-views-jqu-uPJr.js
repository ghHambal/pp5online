const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-Cf_Y4s92.js","assets/supabase-BV-W2lsh.js","assets/teacher-views-smart-classroom-CzhdvGBS.js","assets/ui-FQqAmrdo.js","assets/version.js_v_10.22-ffVTG8-v.js","assets/teacher-DkO8mDLW.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sports-portals.js_v_10.22-D7ID6515.js","assets/impersonation-BOpkwoRR.js","assets/storage-D6nkcVz6.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-BsRasLc4.js","assets/teacher-views-utils-BWmONzsh.js","assets/wen-sso-CcN06Rhh.js","assets/azfutsal-modal-3jBbVg9C.js","assets/tutorial-ByeZ0chX.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-C8s-TuM0.js","assets/quiz-api-DaBneRGn.js","assets/score-qr-scanner-eQmyTC7-.js","assets/teacher-views-attendance-3FnuSi2-.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-YSTUQyr0.js","assets/teacher-views-quiz-monitor-DrZre72l.js","assets/teacher-views-quiz-analytics-Bj3NqnvT.js","assets/teacher-views-dashboard-CdUOoqKF.js","assets/teacher-views-classes-dyQ0iCt1.js","assets/pp5-doc-DfU8adgJ.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-LD-SW21q.js"])))=>i.map(i=>d[i]);
import{a as J,g as xe,_ as ue}from"./ui-FQqAmrdo.js";import{getDepartments as Ue,getTeachers as St,getSubjectCoTeachers as Ut,updateMyProfile as at,getCourseDocPage2 as Yt,getSystemConfig as Re,getMySubjects as jt,getMasterSubjects as Lt,getMyClasses as ot,getUniqueRooms as Tt,getUniqueReligionRooms as At,getCourseDocLangSettings as Xt,getCourseSyllabus as Kt,getLessonPlans as Jt,findCurriculumStandards as Qt,saveCourseDocPage2 as Zt,getClassStudents as es,getMySchedule as ts,getClassScheduleLinks as ss,getPeriods as as,getClassrooms as os,getWorkCalendarEvents as ns,getExecutiveOverviewStats as ls,updateTeacher as mt}from"./api-Cf_Y4s92.js";import{c as It,s as Ke}from"./supabase-BV-W2lsh.js";import"./sports-portals.js_v_10.22-D7ID6515.js";import{u as rs,o as Bt}from"./storage-D6nkcVz6.js";import{_DAYS_TH_FULL as Pt,setActiveNav as _e,setTitle as ke,setContent as be,SELECT_CLS as ce,INPUT_CLS as V,CREDIT_OPTS as is,GRADE_OPTS as Xe,formatPhone as Ve,_htmlEsc as o,_dutyCountdownInfo as ds,_teacherPositionList as ut,_currentWeek as cs,renderIconTile as Mt,_activeRemainingDisplay as xt,_countdownInfo as Fe}from"./teacher-views-utils-BWmONzsh.js";import{_ as ps}from"./teacher-views-grades-YSTUQyr0.js";import{a as va,b as fa,c as ya,r as ha}from"./teacher-views-grades-YSTUQyr0.js";import{b as Js,d as Qs,a as Zs,r as ea}from"./teacher-views-classes-dyQ0iCt1.js";import{e as $a,c as _a,f as ka,g as Ea,h as Ca}from"./teacher-views-classes-dyQ0iCt1.js";import{o as ms}from"./pp5-doc-DfU8adgJ.js";import{renderAttendance as ja,renderAttendanceGrid as La,renderLifeSkillScore as Ta,renderPrayerRoomMonitor as Aa,renderPrayerScore as Ia,renderReadingScore as Ba}from"./teacher-views-attendance-3FnuSi2-.js";import"./version.js_v_10.22-ffVTG8-v.js";import"./impersonation-BOpkwoRR.js";import"./browser-JP79f-a9.js";import"./regrade-api-C8s-TuM0.js";import"./score-qr-scanner-eQmyTC7-.js";import"./confetti-loader-BAN5Lv-C.js";import"./leave-time-CrS9gT63.js";const Dt="https://zhjqkylesnhcotpkzoxr.supabase.co",Nt="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let fe=null;function bt(e,a,t){const l=new Date(a+"T00:00:00"),u=new Date(e+"T00:00:00"),f=Math.floor((u-l)/864e5);if(f<0)return null;const d=Math.floor(f/7)+1;return d<=t?d:null}function us(e,a,t){const[l,u]=e.includes(":")?e.split(":"):[null,e];return(l===null||l===t)&&u===a}async function xs(e){if(!e)return null;fe||(fe=It(Dt,Nt));const[a,t,l]=await Promise.all([fe.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),fe.from("duty_points").select("assigned_to"),fe.from("settings").select("week_start_date,total_weeks").single()]),u=l.data||{},f=u.week_start_date,d=u.total_weeks||20;if(!f)return null;const p=new Date().toISOString().slice(0,10),$=bt(p,f,d)||1;if($<=5)return{grade:"A",score:100,week:$};const k=String(e);let E=0;for(const L of t.data||[])for(const A of L.assigned_to||[])(A.includes(":")?A.split(":")[1]:A)===k&&E++;if(E===0)return null;const i={};for(const L of a.data||[]){const A=bt(L.date,f,d);A!==null&&(i[A]||(i[A]=[]),i[A].push(L))}const b=5,c=Math.min($,d-2);let h=0;for(let L=1;L<=c;L++)if(L<=b)h+=100;else{const A=i[L]||[],q=A.length,Q=A.filter(oe=>oe.is_late).length,v=q-Q,M=Math.min(100,Math.round(q/E*100)),Y=q>0?Math.max(0,Math.round(v/q*100)):100;h+=Math.round(M*.6+Y*.4)}const _=Math.round(h/c);return{grade:_>=90?"A":_>=75?"B":"C",score:_,week:$}}async function bs(e){if(!e)return[];fe||(fe=It(Dt,Nt));const{data:a,error:t}=await fe.from("duty_points").select("name, time, assigned_to");if(t||!a)return[];const l=String(e),u=Pt[new Date().getDay()];return a.filter(f=>(f.assigned_to??[]).some(d=>us(d,l,u))).map(f=>{const[d,p]=String(f.time??"").split("-").map($=>$.trim());return{name:f.name,time:f.time,start_time:d,end_time:p}})}async function da(e){_e("my-courses"),ke("คอร์สวิชาของฉัน","courses"),be(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[a,t]=await Promise.all([e?jt(e.id):Lt().catch(()=>[]),e?ot(e.id).catch(()=>[]):Promise.resolve([])]),l=a,u=i=>t.filter(b=>{var m;return Number(b.course_id??((m=b.master_subjects)==null?void 0:m.id))===Number(i)}),f=i=>Number.isInteger(i)?String(i):Number(i).toFixed(1).replace(/\.0$/,""),d=i=>{const b=Number(i.credit),m=Number.isFinite(b)&&b>0;return{roomCount:u(i.id).length,credit:m?f(b):"—",periodsPerWeek:m?f(b*2):"—",periodsPerTerm:m?f(b*40):"—"}},p=i=>String(i.dept??i.subject_group??"").trim()||"รายวิชาอื่น ๆ",$=[...a.reduce((i,b)=>{const m=p(b);return i.has(m)||i.set(m,[]),i.get(m).push(b),i},new Map).entries()].sort(([i],[b])=>i.localeCompare(b,"th",{numeric:!0})),k=(i,b,m,c)=>`<div class="rounded-xl border ${c} px-3 py-2.5 min-w-0">
      <div class="flex items-center gap-2"><span class="text-base">${i}</span><strong class="text-lg leading-none text-gray-800">${b}</strong></div>
      <p class="mt-1 text-[10px] font-semibold text-gray-500">${m}</p>
    </div>`,E=i=>{const b=d(i);return`<article class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden">
        <div class="p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">${o(i.subject_code??"—")}</span>
                ${i.dept?`<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">${o(i.dept)}</span>`:""}
              </div>
              <h3 class="mt-2 text-base sm:text-lg font-extrabold text-gray-900 leading-snug">${o(i.subject_name)}</h3>
              <p class="mt-1 text-xs text-gray-400">ระดับชั้น ${o(i.grade_level??"ไม่ระบุ")}</p>
            </div>
            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center text-xl">📚</div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${k("🏫",b.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${k("🎓",b.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${k("🗓️",b.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${k("⏱️",b.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
          </div>

          <div class="grid sm:grid-cols-[1fr_auto] gap-2 mt-4">
            <button class="course-workspace-btn min-h-[44px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-4 flex items-center justify-center gap-2 shadow-sm"
              data-sid="${i.id}">📘 กำหนดการสอนและแผนหน้าเดียว</button>
            <button onclick="window._openRegisterClass(${i.id})"
              class="min-h-[44px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 flex items-center justify-center gap-2">＋ เปิดห้องเรียน</button>
          </div>
        </div>

        <details class="border-t border-gray-100 group">
          <summary class="list-none cursor-pointer px-4 sm:px-5 py-3 flex items-center justify-between text-xs font-bold text-gray-600 hover:bg-gray-50 select-none">
            <span>เครื่องมือและเอกสารของรายวิชา</span><span class="text-gray-400 group-open:rotate-180 transition">⌄</span>
          </summary>
          <div class="px-4 sm:px-5 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button class="ccm-open-btn min-h-[40px] text-xs text-indigo-700 font-semibold border border-indigo-100 bg-indigo-50/50 rounded-xl hover:bg-indigo-50" data-sid="${i.id}" data-sname="${o(i.subject_name)}">⚙️ คอลัมน์คะแนน</button>
            <button onclick="window._openCourseDocPage2(${i.id})" class="min-h-[40px] text-xs text-emerald-700 font-semibold border border-emerald-100 bg-emerald-50/50 rounded-xl hover:bg-emerald-50">📝 คำอธิบายรายวิชา</button>
            <button class="lesson-plan-btn min-h-[40px] text-xs text-sky-700 font-semibold border border-sky-100 bg-sky-50/50 rounded-xl hover:bg-sky-50" data-sid="${i.id}">📋 ใบขออนุญาต</button>
            <button class="pp5-course-btn min-h-[40px] text-xs text-violet-700 font-semibold border border-violet-100 bg-violet-50/50 rounded-xl hover:bg-violet-50" data-sid="${i.id}">💾 เอกสาร ปพ.5</button>
          </div>
          <div class="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-end gap-2 flex-wrap">
            <button onclick="window._copyCourse(${i.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-purple-700 hover:bg-purple-50">📋 ทำสำเนา</button>
            <button onclick="window._editCourse(${i.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-gray-600 hover:bg-gray-100">✏️ แก้ไข</button>
            <button class="cd2-del-course-btn min-h-[36px] px-3 rounded-lg border border-red-100 bg-white text-xs font-semibold text-red-500 hover:bg-red-50" data-id="${i.id}" data-name="${o(i.subject_name)}">🗑️ ลบ</button>
          </div>
        </details>
      </article>`};be(`<div class="animate-fade">
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
        ${$.map(([i,b])=>`<section>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">🏷️</div>
            <div><h2 class="font-extrabold text-gray-800">กลุ่มสาระ ${o(i)}</h2><p class="text-[11px] text-gray-400">${b.length} คอร์ส · ${b.reduce((m,c)=>m+u(c.id).length,0)} ห้องเรียน</p></div>
            <div class="h-px bg-gray-200 flex-1"></div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${b.map(E).join("")}</div>
        </section>`).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(i=>{i.addEventListener("click",()=>{window._deleteCourse(Number(i.dataset.id),i.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(i=>{i.addEventListener("click",()=>{ps(parseInt(i.dataset.sid),i.dataset.sname,t)})}),document.querySelectorAll(".course-workspace-btn").forEach(i=>{i.addEventListener("click",()=>{const b=parseInt(i.dataset.sid,10),m=a.find(c=>c.id===b);m&&Ot(e,m,t)})}),document.querySelectorAll(".lesson-plan-btn").forEach(i=>{i.addEventListener("click",async()=>{const b=parseInt(i.dataset.sid),m=a.find(A=>A.id===b);if(!m)return;const c=t.filter(A=>{var q;return A.course_id===b||((q=A.master_subjects)==null?void 0:q.id)===b}),{getSystemConfig:h,getDepartments:_}=await ue(async()=>{const{getSystemConfig:A,getDepartments:q}=await import("./api-Cf_Y4s92.js");return{getSystemConfig:A,getDepartments:q}},__vite__mapDeps([0,1])),[T,L]=await Promise.all([h().catch(()=>({})),_().catch(()=>[])]);Hs(m,c,e,T,L)})}),document.querySelectorAll(".pp5-course-btn").forEach(i=>{i.addEventListener("click",()=>{const b=parseInt(i.dataset.sid),m=t.filter(c=>{var h;return c.course_id===b||((h=c.master_subjects)==null?void 0:h.id)===b});m.length===1?openPP5Doc(m[0].id):ms(m)})})}catch{J("โหลดข้อมูลไม่สำเร็จ","error")}}async function Ot(e,a,t){var k,E,i,b,m;(k=document.getElementById("course-workspace-modal"))==null||k.remove();const l=Number(a.id),u=t.filter(c=>{var h;return Number(c.course_id??((h=c.master_subjects)==null?void 0:h.id))===l}),f={class_name:"ทุกห้องในคอร์ส",course_id:l,master_subjects:a},d=document.createElement("div");d.id="course-workspace-modal",d.className="fixed inset-0 z-[95] bg-black/60 flex items-center justify-center p-2 sm:p-4",d.innerHTML=`<div class="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl h-[96vh] sm:h-auto sm:max-h-[92vh] overflow-hidden flex flex-col">
    <header class="flex-shrink-0 px-4 sm:px-6 py-4 border-b bg-white flex items-start justify-between gap-3">
      <div class="min-w-0">
        <span class="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold">📘 ออกแบบการสอนของคอร์ส</span>
        <h2 class="mt-2 text-lg sm:text-xl font-extrabold text-gray-900 truncate">${o(a.subject_name)}</h2>
        <p class="text-xs text-gray-500 mt-0.5"><span class="font-mono text-blue-600">${o(a.subject_code??"—")}</span> · ${o(a.grade_level??"—")} · ${u.length} ห้องเรียน</p>
      </div>
      <button data-close class="w-10 h-10 flex-shrink-0 rounded-xl border bg-white text-gray-400 text-xl hover:text-gray-700">✕</button>
    </header>
    <div id="course-workspace-body" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6">
      <div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลคอร์ส...</div>
    </div>
  </div>`,document.body.appendChild(d);const p=()=>d.remove();d.querySelector("[data-close]").addEventListener("click",p),d.addEventListener("click",c=>{c.target===d&&p()});const $=d.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:c,canUseSmartClassroomForClass:h},{openLessonPlanAIWorkspace:_,openLessonPlanDocument:T}]=await Promise.all([ue(()=>import("./teacher-views-smart-classroom-CzhdvGBS.js"),__vite__mapDeps([2,3,4,0,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),ue(()=>import("./lesson-plan-ai-workspace-LD-SW21q.js"),__vite__mapDeps([31,0,1,3,4,10]))]),[L,A,q]=await Promise.all([Kt(l).catch(()=>[]),Jt(l).catch(()=>[]),c(e)]),Q=u.filter(j=>h(q.unlocked,e,j.id)),v=q.unlocked||Q.length>0,M=()=>Ot(e,a,t),Y=L.length?L.map(j=>`<div class="rounded-xl border border-blue-100 bg-white px-3 py-2.5 flex gap-3">
      <span class="flex-shrink-0 px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-bold h-fit">สัปดาห์ ${j.week_start}${j.week_end!==j.week_start?`–${j.week_end}`:""}</span>
      <div class="min-w-0"><p class="text-sm font-bold text-gray-800">${o(j.topic)}</p>${j.unit_title?`<p class="text-[11px] text-blue-600 mt-0.5">${o(j.unit_title)}</p>`:""}</div>
    </div>`).join(""):'<div class="rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>',oe=u.map(j=>`<option value="${j.id}">${o(j.class_name??`ห้อง ${j.id}`)}</option>`).join("");$.innerHTML=`<div class="grid lg:grid-cols-2 gap-4 items-start">
        <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-blue-950">📘 กำหนดการสอนของคอร์ส</h3><p class="text-xs text-blue-700/70 mt-1">สร้างครั้งเดียว แล้วทุกห้องในรายวิชานี้อ้างอิงชุดเดียวกัน</p></div>
            <button id="cw-ai-schedule" class="min-h-[44px] px-4 rounded-xl ${v?"bg-blue-700 hover:bg-blue-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${v?"":"disabled"}>🤖 สร้างด้วย AI</button>
          </div>
          <div class="mt-4 space-y-2 max-h-72 overflow-y-auto pr-1">${Y}</div>
        </div>

        <div class="rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-violet-950">📝 แผนการสอนหน้าเดียว</h3><p class="text-xs text-violet-700/70 mt-1">ออกแบบแผนกลางของคอร์ส ใช้ร่วมกันได้ทุกห้อง และค่อยแยกบันทึกหลังสอนตามห้อง</p></div>
            <button id="cw-ai-plan" class="min-h-[44px] px-4 rounded-xl ${v?"bg-violet-700 hover:bg-violet-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${v?"":"disabled"}>✨ สร้างแผนด้วย AI</button>
          </div>
          ${A.length?`<div class="mt-4 space-y-2">${A.map(j=>`<button class="cw-plan-row w-full text-left rounded-xl border border-violet-100 bg-white px-3 py-3 hover:border-violet-300 transition" data-plan-id="${j.id}"><p class="text-sm font-bold text-gray-800">${o(j.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${j.week_start}${j.week_end!==j.week_start?`–${j.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
        </div>
    </div>
    ${A.length&&u.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้องสำหรับบันทึกหลังสอน</h3><p class="text-xs text-gray-400 mt-1">แผนเป็นของคอร์ส แต่บันทึกและลายเซ็นจะแยกตามห้อง</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${oe}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`,(E=$.querySelector("#cw-ai-schedule"))==null||E.addEventListener("click",()=>_({teacher:e,cls:f,courseId:l,syllabusItems:L,lessonPlans:A,currentWeek:1,initialMode:"schedule",onSaved:M})),(i=$.querySelector("#cw-ai-plan"))==null||i.addEventListener("click",()=>_({teacher:e,cls:f,courseId:l,syllabusItems:L,lessonPlans:A,currentWeek:1,initialMode:"plan",onSaved:M}));let ee=null;const Z=$.querySelector("#cw-document-picker"),re=()=>{Z&&(Z.classList.add("hidden"),Z.classList.remove("flex"))};$.querySelectorAll(".cw-plan-row").forEach(j=>j.addEventListener("click",()=>{ee=A.find(se=>se.id===parseInt(j.dataset.planId,10))??null,!(!ee||!u.length||!Z)&&(Z.classList.remove("hidden"),Z.classList.add("flex"))})),(b=$.querySelector("#cw-document-cancel"))==null||b.addEventListener("click",re),Z==null||Z.addEventListener("click",j=>{j.target===Z&&re()}),(m=$.querySelector("#cw-document-open"))==null||m.addEventListener("click",()=>{var B;const j=parseInt((B=$.querySelector("#cw-document-class"))==null?void 0:B.value,10),se=u.find(le=>le.id===j);!ee||!se||(re(),T({plan:ee,cls:se,teacher:e,classId:se.id,currentWeek:ee.week_start}))})}catch(c){$.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${o(xe(c))}</div>`}}const He={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 2 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"٢ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["ڤياوايان ڤمبلاجارن","ڤتوك"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمودان أساسيان",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["معايير التعلم","المؤشرات"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"2 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Piawaian pembelajaran","Petunjuk"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let ze=null;async function gs(){if(ze)return ze;const e=await Xt().catch(()=>[]);return ze=Object.fromEntries(e.map(a=>[a.lang_key,a.settings??{}])),ze}async function ca(e,a){var ve,de;const[t,l]=await Promise.all([Yt(a.id).catch(n=>(J("โหลดคำอธิบายฯ ไม่สำเร็จ: "+xe(n),"error"),null)),gs()]),u=n=>{const F=Array.isArray(n)?n:["มาตรฐานการเรียนรู้","ตัวชี้วัด"];return F.length?F.map(I=>String(I??"")):["มาตรฐานการเรียนรู้","ตัวชี้วัด"]},f=(n,F)=>{const S=(Array.isArray(n)?n:[]).map(D=>{const R=Array.isArray(D)?D:Object.values(D??{});return Array.from({length:F},(W,H)=>String(R[H]??""))});return S.length?S:Array.from({length:12},()=>Array.from({length:F},()=>""))},d=n=>[...new Set((Array.isArray(n)?n:[]).map(F=>parseInt(F,10)).filter(F=>Number.isFinite(F)&&F>0))],p=a.subject_group==="ACDMVOC",$=(n,F,I)=>{const D=(Array.isArray(n)?n:[]).map(R=>Object.fromEntries(F.map(W=>[W,String((R==null?void 0:R[W])??"")])));for(;D.length<I;)D.push(Object.fromEntries(F.map(R=>[R,""])));return D};let k=u(t==null?void 0:t.table_columns),E=f(t==null?void 0:t.table_rows,k.length),i=d(t==null?void 0:t.midterm_objective_items),b=d(t==null?void 0:t.between_objective_items),m=d(t==null?void 0:t.final_objective_items),c=(t==null?void 0:t.between_objective_extra)??"",h=(t==null?void 0:t.midterm_objective_extra)??"",_=(t==null?void 0:t.final_objective_extra)??"",T=["auto","rtl","ltr"].includes(t==null?void 0:t.text_direction)?t.text_direction:"auto",L=(t==null?void 0:t.description)||"",A=(t==null?void 0:t.signer_name)||a.learning_area||"",q=(ve=t==null?void 0:t.topic_list)!=null&&ve.length?t.topic_list:[""],Q=$(t==null?void 0:t.voc_objectives,["objective","competency"],10),v=$(t==null?void 0:t.voc_schedule,["week","content","note"],20),M="",Y="th";const oe=()=>{const n={...He.th,...He[Y]},F=(l==null?void 0:l[Y])??{},I={...n,...F};return F.pickerTitles&&(I.pickerTitles={...n.pickerTitles,...F.pickerTitles}),I},ee=()=>{if(document.getElementById("cd2-rtl-font"))return;const n=document.createElement("link");n.id="cd2-rtl-font",n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(n)},[Z,re]=await Promise.all([Re().catch(()=>({})),Ue().catch(()=>[])]),j=re.find(n=>n.dept_code===a.dept),se=(j==null?void 0:j.dept_name)??a.dept??"";(de=document.getElementById("course-doc-page2-modal"))==null||de.remove();const B=document.createElement("div");B.id="course-doc-page2-modal",B.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(B);const le=(n,F="")=>{const S=[n.length?[...n].sort((D,R)=>D-R).join(", "):"",F.trim()].filter(Boolean);return S.length?S.join(", "):oe().notSelected},ie=()=>{const n=E.length;return Array.from({length:n},(F,I)=>I+1).filter(F=>{var I;return(I=E[F-1])==null?void 0:I.some(S=>String(S??"").trim())})},X=()=>{const n=oe(),F=ie(),I=n.dir==="rtl";I&&ee();const S=T==="auto"?n.dir:T,D=S==="rtl"?"text-right":"text-left",R=I?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";B.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${S}" style="${R}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${n.title}</h2>
          <p class="text-xs text-gray-400 truncate">${o(a.subject_name)} · ${o(a.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${n.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${n.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${S}" style="${R}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(He).map(W=>{var H;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${Y===W.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${W.key}">${((H=l==null?void 0:l[W.key])==null?void 0:H.label)||W.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${S}" style="${R}">
        <div class="max-w-6xl mx-auto p-4 sm:p-6 space-y-4">
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 sm:p-5">
            <div>
              <h3 class="font-bold text-gray-800">${n.helpTitle}</h3>
              <p class="text-xs text-gray-400 mt-0.5">${n.helpSub}</p>
            </div>

            <!-- topic list -->
            <div class="mt-4 space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-semibold text-gray-500">${n.topicLabel}</span>
                <span class="text-xs text-gray-400">${o(a.grade_level||"")} · ${o(se||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${q.map((W,H)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${V} flex-1" value="${o(W)}"
                      placeholder="${o(n.topicPlaceholder)}" dir="${S}" data-idx="${H}" />
                    ${q.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${H}">✕</button>`:""}
                  </div>`).join("")}
              </div>
              <button id="cd2-add-topic" type="button"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 mt-1">
                <span class="text-base leading-none">＋</span> ${n.addTopic}
              </button>
            </div>

            <!-- 3 action buttons grid -->
            <div class="grid grid-cols-3 gap-2 mt-4">
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-search-curriculum"
                  class="w-full py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  🔍 ${n.btnCurriculum}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${n.btnCurriculumSub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-auto-fill"
                  class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  ✨ ${n.btnAI}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${n.btnAISub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <label class="cursor-pointer w-full">
                  <span id="cd2-img-btn"
                    class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 flex items-center justify-center gap-1">
                    📷 ${n.btnImg}
                  </span>
                  <input type="file" id="cd2-img-input" accept="image/*" class="hidden" />
                </label>
                <span class="text-[10px] text-gray-400 text-center">${n.btnImgSub}</span>
              </div>
            </div>

            ${M?`<p class="text-xs mt-3 ${M.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${o(M)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${n.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${S}"
                  class="${V} ${D} min-h-[132px] leading-7"
                  placeholder="${o(n.descPlaceholder)}">${o(L)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.dirLabel}</span>
                  <select id="cd2-dir" class="${ce}">
                    <option value="auto" ${T==="auto"?"selected":""}>${n.dirAuto}</option>
                    <option value="rtl" ${T==="rtl"?"selected":""}>${n.dirRTL}</option>
                    <option value="ltr" ${T==="ltr"?"selected":""}>${n.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.signerLabel}</span>
                  <input id="cd2-signer" class="${V} ${D}" value="${o(A)}" placeholder="${o(n.signerPlaceholder)}" dir="${S}" />
                  <p class="text-xs text-gray-400 mt-1">${n.signerHint}</p>
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
                  ${Q.map((W,H)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${H+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${H}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${o(W.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${H}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${o(W.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${H}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                  ${v.map((W,H)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${H}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${o(W.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${H}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${o(W.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${H}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${o(W.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${H}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                <h3 class="font-bold text-gray-800">${n.tableTitle}</h3>
                <p class="text-xs text-gray-400 mt-0.5">${n.tableHint}</p>
              </div>
              <div class="flex gap-2">
                <button id="cd2-template-basic" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${n.tplBasic}</button>
                <button id="cd2-template-extra" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${n.tplExtra}</button>
                <button id="cd2-add-col" class="px-3 py-2 rounded-xl border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50">${n.addCol}</button>
                <button id="cd2-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">${n.addRow}</button>
              </div>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${S}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${n.rowHeader}</th>
                    ${k.map((W,H)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${H}" class="cd2-col ${V} ${D} py-2 font-semibold" value="${o(W)}" dir="${S}" />
                          ${k.length>1?`<button data-del-col="${H}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${E.map((W,H)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${H+1}</td>
                      ${k.map((r,x)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${H}" data-cell="${x}" rows="2" dir="${S}"
                            class="cd2-cell ${D} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${o(W[x]||"")}</textarea>
                        </td>`).join("")}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${H}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${n.delRow}</button>
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <h3 class="font-bold text-gray-800 mb-3">${n.objTitle} <span class="text-xs font-normal text-gray-400">${n.objHint}</span></h3>
            <div class="grid sm:grid-cols-3 gap-3">
              <button id="cd2-pick-between" class="${D} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${o(le(b,c))}</p>
              </button>
              <button id="cd2-pick-mid" class="${D} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${o(le(i,h))}</p>
              </button>
              <button id="cd2-pick-final" class="${D} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${o(le(m,_))}</p>
              </button>
            </div>
            ${F.length?"":`<p class="text-xs text-amber-600 mt-3">${n.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,me()},K=()=>{var n,F,I;return q=[...B.querySelectorAll(".cd2-topic-input")].map(S=>S.value.trim()).filter(Boolean),q.length||(q=[""]),L=((n=B.querySelector("#cd2-description"))==null?void 0:n.value)??"",A=((F=B.querySelector("#cd2-signer"))==null?void 0:F.value)??"",T=((I=B.querySelector("#cd2-dir"))==null?void 0:I.value)??T,B.querySelectorAll(".cd2-col").forEach(S=>{k[Number(S.dataset.col)]=S.value}),B.querySelectorAll(".cd2-cell").forEach(S=>{const D=Number(S.dataset.row),R=Number(S.dataset.cell);E[D]||(E[D]=Array.from({length:k.length},()=>"")),E[D][R]=S.value}),B.querySelectorAll(".cd2-voc-obj-cell").forEach(S=>{const D=Number(S.dataset.vocObjRow),R=S.dataset.vocObjField;Q[D]||(Q[D]={objective:"",competency:""}),Q[D][R]=S.value}),B.querySelectorAll(".cd2-voc-sch-cell").forEach(S=>{const D=Number(S.dataset.vocSchRow),R=S.dataset.vocSchField;v[D]||(v[D]={week:"",content:"",note:""}),v[D][R]=S.value}),{desc:L,signer:A}},ye=n=>{const F=Array.isArray(n==null?void 0:n.columns)&&n.columns.length?n.columns.map(R=>String(R??"").trim()).filter(Boolean):oe().colsExtra,I=Array.isArray(n==null?void 0:n.rows)?n.rows.map(R=>{const W=Array.isArray(R)?R:Object.values(R??{});return Array.from({length:F.length},(H,r)=>String(W[r]??"").trim())}).filter(R=>R.some(Boolean)):[];k=F,E=I.length?I:Array.from({length:12},()=>Array.from({length:k.length},()=>"")),n!=null&&n.description&&(L=String(n.description)),i=d((n==null?void 0:n.midterm_items)??(n==null?void 0:n.midtermObjectiveItems)),b=d((n==null?void 0:n.between_items)??(n==null?void 0:n.betweenObjectiveItems)),m=d((n==null?void 0:n.final_items)??(n==null?void 0:n.finalObjectiveItems));const S=ie(),D=Math.ceil(S.length/2);i.length||(i=S.slice(0,Math.min(3,D))),b.length||(b=S.slice(0,Math.min(4,S.length))),m.length||(m=S.slice(-Math.min(3,S.length)))},Ae=n=>n.some(I=>String(I.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:n.map((I,S)=>[`${I.item_no??S+1}.${I.learning_outcome_text??I.indicator_text??I.standard_text??""}`]),description:L,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((I,S)=>S+1),final_items:n.slice(Math.ceil(n.length/2)).map((I,S)=>S+1+Math.ceil(n.length/2))}:{source:"curriculum",columns:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],rows:n.map((I,S)=>[`${I.item_no??S+1}.) ${I.standard_code||I.standard_text||""}`.trim(),I.indicator_text||I.learning_outcome_text||""]),description:L,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((I,S)=>S+1),final_items:n.slice(Math.ceil(n.length/2)).map((I,S)=>S+1+Math.ceil(n.length/2))},ne=async()=>{var C,w,N,s,y;const n=oe(),F=k.length===1||a.subject_group&&!["ACDM","AGM"].includes(a.subject_group),I=F?n.colsExtra:n.colsBasic,S=F?`single column named "${I[0]}"`:`two columns named "${I[0]}" and "${I[1]}"`,D=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${n.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${a.subject_name||""}
- รหัสวิชา: ${a.subject_code||""}
- ชั้น: ${a.grade_level||""}
- กลุ่มสาระ: ${se||a.dept||""}
- หน่วยกิต: ${a.credit||""}
- เรื่อง/บทที่สอน: ${q.filter(Boolean).join(", ")||"ไม่ระบุ"}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${S}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม

Return JSON object เท่านั้น:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`,{data:R,error:W}=await Ke.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:D}});if(W)throw new Error(W.message??"Edge Function error");if(R!=null&&R.error)throw new Error(`Gemini: ${R.error.message??R.error.status}`);const H=((y=(s=(N=(w=(C=R.candidates)==null?void 0:C[0])==null?void 0:w.content)==null?void 0:N.parts)==null?void 0:s[0])==null?void 0:y.text)??"",r=H.match(/```json\s*([\s\S]*?)```/)||H.match(/(\{[\s\S]*\})/),x=r?r[1]??r[0]:null;if(!x)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(x)},pe=n=>{var C;K();const F=n==="mid"?i:n==="between"?b:m,I=n==="mid"?h:n==="between"?c:_,S=ie();if(!S.length){J("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(C=document.getElementById("cd2-picker"))==null||C.remove();const D=oe(),R={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},W={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},H=w=>{const N=(E[w-1]??[]).find(y=>String(y??"").trim()),s=String(N??"").trim();return s.length>30?s.slice(0,30)+"…":s},r=document.createElement("div");r.id="cd2-picker",r.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",r.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${D.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${D.pickerTitles[n]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${S.map(w=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${R[n]} w-4 h-4 flex-shrink-0" value="${w}" ${F.includes(w)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${w}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${o(H(w))}</span>
            </label>`).join("")}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${o(I)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${D.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${W[n]} text-white text-sm font-semibold">${D.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(r);const x=()=>r.remove();r.querySelector("#cd2-picker-close").addEventListener("click",x),r.querySelector("#cd2-picker-cancel").addEventListener("click",x),r.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const w=[...r.querySelectorAll(".cd2-choice:checked")].map(s=>Number(s.value)),N=r.querySelector("#cd2-picker-extra").value.trim();n==="mid"?(i=w,h=N):n==="between"?(b=w,c=N):(m=w,_=N),x(),X()})},me=()=>{var I,S,D,R,W,H,r,x,C;const n=oe();B.querySelectorAll(".cd2-lang-btn").forEach(w=>{w.addEventListener("click",()=>{var N;K(),Y=w.dataset.lang||"th",T=((N=He[Y])==null?void 0:N.dir)||"ltr",X()})}),B.querySelector("#cd2-close").addEventListener("click",()=>B.remove()),B.querySelector("#cd2-dir").addEventListener("change",w=>{K(),T=w.target.value,X()}),B.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(K(),(E.some(s=>s.some(y=>String(y??"").trim()))||L.trim())&&!confirm(n.confirmOverwrite))return;const N=B.querySelector("#cd2-search-curriculum");N.disabled=!0,N.innerHTML=`⏳ ${n.btnCurriculumLoading}`;try{const s=await Qt({subjectName:a.subject_name,subjectCode:a.subject_code,gradeLevel:a.grade_level,dept:se,topic:q.filter(Boolean).join(" ")});s.length?(ye(Ae(s)),M=n.toastSearchOk(s.length)):M=n.toastSearchEmpty,X()}catch(s){J("ค้นหลักสูตรไม่สำเร็จ: "+xe(s),"error")}finally{N.disabled=!1,N.innerHTML=`🔍 ${n.btnCurriculum}`}}),B.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(K(),(E.some(s=>s.some(y=>String(y??"").trim()))||L.trim())&&!confirm(n.confirmAIOverwrite))return;const N=B.querySelector("#cd2-auto-fill");N.disabled=!0,N.innerHTML=`⏳ ${n.btnAILoading}`;try{const s=await ne();ye(s),M=n.toastAIDone,X()}catch(s){J("AI ร่างไม่สำเร็จ: "+xe(s),"error")}finally{N.disabled=!1,N.innerHTML=`✨ ${n.btnAI}`}}),B.querySelector("#cd2-img-input").addEventListener("change",async w=>{var g,P,O,U,ae,G;const N=(g=w.target.files)==null?void 0:g[0];if(!N)return;if((E.some(te=>te.some(he=>String(he??"").trim()))||L.trim())&&!confirm(n.confirmImgOverwrite)){w.target.value="";return}const y=B.querySelector("#cd2-img-btn");y.textContent=`⏳ ${n.btnImgLoading}`;try{const te=await new Promise((Vt,Wt)=>{const qe=new FileReader;qe.onload=()=>Vt(qe.result.split(",")[1]),qe.onerror=Wt,qe.readAsDataURL(N)}),he=k.length===1||a.subject_group&&!["ACDM","AGM"].includes(a.subject_group),Ee=he?n.colsExtra:n.colsBasic,zt=he?`single column named "${Ee[0]}"`:`two columns named "${Ee[0]}" and "${Ee[1]}"`,Gt=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${n.aiLang}
ข้อมูลรายวิชา: "${a.subject_name??""}" รหัส ${a.subject_code??""} ชั้น ${a.grade_level??""} กลุ่มสาระ ${se}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${zt})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบเป็น JSON เท่านั้น (ไม่มีข้อความอื่น):
{
  "description": "...",
  "columns": ${JSON.stringify(Ee)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:Ce,error:dt}=await Ke.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Gt,imageBase64:te,imageMimeType:N.type||"image/jpeg"}});if(dt)throw new Error(dt.message??"Edge Function error");if(Ce!=null&&Ce.error)throw new Error(`Gemini: ${Ce.error.message??Ce.error.status}`);const ct=((G=(ae=(U=(O=(P=Ce.candidates)==null?void 0:P[0])==null?void 0:O.content)==null?void 0:U.parts)==null?void 0:ae[0])==null?void 0:G.text)??"",Ye=ct.match(/```json\s*([\s\S]*?)```/)||ct.match(/(\{[\s\S]*\})/),pt=Ye?Ye[1]??Ye[0]:null;if(!pt)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");ye(JSON.parse(pt)),M=n.toastImgDone,X()}catch(te){J("อ่านรูปไม่สำเร็จ: "+xe(te),"error")}finally{y.textContent=`📷 ${n.btnImg}`,w.target.value=""}});const F=w=>{if(K(),E.some(y=>y.some(g=>String(g??"").trim()))&&!confirm(n.confirmColChange))return;const s=E;k=w,E=s.map(y=>w.length===1?[y.filter(Boolean).join(" ").trim()]:Array.from({length:w.length},(g,P)=>y[P]??"")),E.length||(E=Array.from({length:12},()=>Array.from({length:k.length},()=>""))),X()};(I=B.querySelector("#cd2-template-basic"))==null||I.addEventListener("click",()=>{F(n.colsBasic)}),(S=B.querySelector("#cd2-template-extra"))==null||S.addEventListener("click",()=>{F(n.colsExtra)}),(D=B.querySelector("#cd2-add-col"))==null||D.addEventListener("click",()=>{K(),k.push(n.colNew(k.length+1)),E=E.map(w=>[...w,""]),X()}),(R=B.querySelector("#cd2-add-row"))==null||R.addEventListener("click",()=>{K(),E.push(Array.from({length:k.length},()=>"")),X()}),B.querySelectorAll(".cd2-del-col").forEach(w=>w.addEventListener("click",()=>{K();const N=Number(w.dataset.delCol);k.splice(N,1),E=E.map(s=>s.filter((y,g)=>g!==N)),X()})),B.querySelectorAll(".cd2-del-row").forEach(w=>w.addEventListener("click",()=>{K();const N=Number(w.dataset.delRow);E.splice(N,1);const s=y=>y.filter(g=>g!==N+1).map(g=>g>N+1?g-1:g);i=s(i),b=s(b),m=s(m),X()})),(W=B.querySelector("#cd2-pick-mid"))==null||W.addEventListener("click",()=>pe("mid")),(H=B.querySelector("#cd2-pick-between"))==null||H.addEventListener("click",()=>pe("between")),(r=B.querySelector("#cd2-pick-final"))==null||r.addEventListener("click",()=>pe("final")),(x=B.querySelector("#cd2-voc-obj-add-row"))==null||x.addEventListener("click",()=>{K(),Q.push({objective:"",competency:""}),X()}),B.querySelectorAll(".cd2-voc-obj-del-row").forEach(w=>w.addEventListener("click",()=>{K(),Q.splice(Number(w.dataset.vocObjDelRow),1),X()})),(C=B.querySelector("#cd2-voc-sch-add-row"))==null||C.addEventListener("click",()=>{K(),v.push({week:String(v.length+1),content:"",note:""}),X()}),B.querySelectorAll(".cd2-voc-sch-del-row").forEach(w=>w.addEventListener("click",()=>{K(),v.splice(Number(w.dataset.vocSchDelRow),1),X()})),B.querySelector("#cd2-add-topic").addEventListener("click",()=>{K(),q.push(""),X()}),B.querySelectorAll(".cd2-topic-del").forEach(w=>{w.addEventListener("click",()=>{K(),q.splice(Number(w.dataset.idx),1),q.length||(q=[""]),X()})}),B.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:w,signer:N}=K(),s=B.querySelector("#cd2-save");s.disabled=!0,s.textContent=n.saving;try{await Zt(a.id,{description:w,table_columns:k.map((y,g)=>y.trim()||n.colNew(g+1)),table_rows:E.map(y=>y.slice(0,k.length)),topic_list:q.filter(Boolean),midterm_objective_items:i,between_objective_items:b,final_objective_items:m,midterm_objective_extra:h,between_objective_extra:c,final_objective_extra:_,voc_objectives:Q,voc_schedule:v,signer_name:N.trim()||null,text_direction:T,updated_by:(e==null?void 0:e.id)??null}),J(n.toastSaved,"success"),B.remove()}catch(y){J("บันทึกไม่สำเร็จ: "+xe(y),"error"),s.disabled=!1,s.textContent=n.save}})};X()}async function pa(e,a,t=null,l={}){const u=!!l.cloneFrom;_e("my-courses"),ke(u?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[f,d,p]=await Promise.all([Ue().catch(()=>[]),St().catch(()=>[]),t&&!u?Ut(t.id).catch(()=>[]):Promise.resolve([])]);let $=p??[];const k=[...new Map(f.map(r=>[r.id,r])).values()],E=(e==null?void 0:e.category)??"",i=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],b=E?i.filter(r=>r.cat===E):i,m=r=>r==="ACDM"?"สามัญ":r==="ACDMVOC"?"สามัญปวช":r==="AGM"||r==="AGMVOC"?"ศาสนา":null,c=r=>r==="ACDMVOC",h=r=>c(r)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",_=r=>c(r)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",T=r=>c(r)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",L=r=>c(r)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",A=(t==null?void 0:t.subject_group)??"",q=r=>{const x=m(r);if(!x)return k;const C=k.filter(w=>w.category===x);return C.length?C:k},Q=(r,x="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+r.map(C=>`<option value="${C.dept_code}" ${C.dept_code===x?"selected":""}>${C.dept_name}</option>`).join(""),v=[...new Set(f.map(r=>r.head_name).filter(Boolean))];be(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${u?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์สวิชา"}</h2>
    </div>
    ${u?`
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
          <select id="cf-subg" class="${ce}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${b.map(r=>`<option value="${r.value}" ${(t==null?void 0:t.subject_group)===r.value?"selected":""}>${r.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${h(A)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${ce}">
            ${Q(t!=null&&t.subject_group?q(t.subject_group):E?k.filter(r=>r.category===E):k,(t==null?void 0:t.dept)??"")}
          </select>
        </div>
        <!-- ชื่อวิชา + รหัสวิชา -->
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 sm:col-span-1">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชื่อวิชา <span class="text-red-400">*</span>
            </label>
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${V}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${V}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${ce}">
              ${is.map(r=>`<option value="${r}">${r}</option>`).join("")}
            </select>
          </div>
          <div id="cf-grade-single-wrapper">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${ce}">
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
                class="${V}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${V}" autocomplete="off" />
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
            maxlength="12" class="${V}" />
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
                class="${V} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${V} bg-white" autocomplete="off" />
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
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${_(A)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${V} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${L(A)}</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${u?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}
          </button>
        </div>
      </form>
    </div>
  </div>`);const M=t&&(t.grade_level&&t.grade_level.includes(",")||$.length>0);function Y(){const r=document.getElementById("cf-coteach-selected-list");r&&(r.innerHTML=$.map(x=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${x.full_name} (${x.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${x.id}">✕</button>
      </span>
    `).join(""),r.querySelectorAll(".remove-coteacher-btn").forEach(x=>{x.addEventListener("click",()=>{const C=Number(x.dataset.id);$=$.filter(w=>w.id!==C),Y()})}))}function oe(r,x){var w;(w=document.getElementById("coteach-explain-modal"))==null||w.remove();const C=document.createElement("div");C.id="coteach-explain-modal",C.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",C.innerHTML=`
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
      </div>`,document.body.appendChild(C),C.querySelector("#cf-explain-cancel").addEventListener("click",()=>{C.remove(),x()}),C.querySelector("#cf-explain-confirm").addEventListener("click",()=>{C.remove(),r()})}function ee(r,x){var w;(w=document.getElementById("coteach-confirm-modal"))==null||w.remove();const C=document.createElement("div");C.id="coteach-confirm-modal",C.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",C.innerHTML=`
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
      </div>`,document.body.appendChild(C),C.querySelector("#cf-off-cancel").addEventListener("click",()=>{C.remove(),x()}),C.querySelector("#cf-off-confirm").addEventListener("click",()=>{C.remove(),r()})}function Z(r,x=""){const C=Xe[r]??[],w=document.getElementById("cf-grade-checkboxes");if(!w)return;const N=x?x.split(",").map(s=>s.trim()):[];w.innerHTML=C.map(s=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${s}" ${N.includes(s)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${s}</span>
      </label>
    `).join("")}const re={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};document.getElementById("cf-subg").addEventListener("change",r=>{const x=r.target.value;document.getElementById("cf-dept-label").firstChild.textContent=h(x)+" ",document.getElementById("cf-head-label").textContent=_(x),document.getElementById("cf-head-hint").textContent=L(x);const C=document.getElementById("cf-dept"),w=C.value;C.innerHTML=Q(q(x)),C.options[0].textContent=T(x),w&&(C.value=w);const N=document.getElementById("cf-grade"),s=Xe[x]??[];N.innerHTML=s.length?['<option value="">— เลือกชั้นปี —</option>',...s.map(y=>`<option value="${y}">${y}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=re[x]??"",Z(x)}),document.getElementById("cf-dept").addEventListener("change",r=>{const x=r.target.value,C=f.filter(N=>N.dept_code===x&&N.head_name).map(N=>N.head_name),w=document.getElementById("cf-dept-head");C.length===1?w.value=C[0]:C.length>1?(w.value="",B(C)):w.value=""});const j=document.getElementById("cf-dept-head"),se=document.getElementById("cf-head-dropdown");function B(r){se.innerHTML=r.map(x=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${x}">${x}</div>`).join(""),se.querySelectorAll(".head-opt").forEach(x=>x.addEventListener("mousedown",C=>{C.preventDefault(),j.value=x.dataset.val,se.classList.add("hidden")})),se.classList.toggle("hidden",!r.length)}j.addEventListener("input",()=>{const r=j.value.toLowerCase(),x=v.filter(C=>C.toLowerCase().includes(r));B(r?x:v)}),j.addEventListener("focus",()=>{const r=j.value.toLowerCase();B(r?v.filter(x=>x.toLowerCase().includes(r)):v)}),j.addEventListener("blur",()=>setTimeout(()=>se.classList.add("hidden"),150));const le=document.getElementById("cf-teacher-code"),ie=document.getElementById("cf-teacher-search"),X=document.getElementById("cf-teacher-dropdown"),K=document.getElementById("cf-teacher-selected"),ye=document.getElementById("cf-teacher-name"),Ae=document.getElementById("cf-teacher-clear"),ne=document.getElementById("cf-teacher-id"),pe=document.getElementById("cf-phone");function me(r){if(!r){ne.value="",le.value="",ie.value="",K.classList.add("hidden"),K.classList.remove("flex"),pe.value="";return}ne.value=r.id,le.value=r.teacher_code??"",ie.value=r.full_name??"",ye.textContent=`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`,K.classList.remove("hidden"),K.classList.add("flex"),pe.value=Ve(r.phone??""),X.classList.add("hidden")}function ve(r){X.innerHTML=r.length?r.map(x=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${x.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${x.teacher_code??""}</span>
            <span class="font-medium">${x.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',X.querySelectorAll(".t-opt").forEach(x=>x.addEventListener("mousedown",C=>{C.preventDefault(),me(d.find(w=>String(w.id)===x.dataset.id))})),X.classList.remove("hidden")}if(e&&!t){const r=d.find(x=>x.id===e.id);r&&me(r)}le.oninput=()=>{const r=le.value.trim().toLowerCase();if(!r){me(null);return}const x=d.find(C=>(C.teacher_code??"").toLowerCase()===r);if(x)me(x);else{const C=d.filter(w=>(w.teacher_code??"").toLowerCase().startsWith(r));C.length&&ve(C)}},ie.onfocus=()=>ve(d),ie.oninput=()=>{const r=ie.value.toLowerCase();ve(r?d.filter(x=>x.full_name.toLowerCase().includes(r)||(x.teacher_code??"").toLowerCase().includes(r)):d)},ie.onblur=()=>setTimeout(()=>X.classList.add("hidden"),150),Ae.addEventListener("click",()=>me(null));const de=document.getElementById("cf-toggle-coteach"),n=document.getElementById("cf-grade-single-wrapper"),F=document.getElementById("cf-grade-multi-container"),I=document.getElementById("cf-coteach-section");de.addEventListener("change",r=>{r.target.checked?(de.checked=!1,oe(()=>{de.checked=!0,n.classList.add("hidden"),F.classList.remove("hidden"),I.classList.remove("hidden");const C=document.getElementById("cf-subg").value;Z(C),Y()},()=>{de.checked=!1})):ee(()=>{de.checked=!1,n.classList.remove("hidden"),F.classList.add("hidden"),I.classList.add("hidden"),$=[]},()=>{de.checked=!0})});const S=document.getElementById("cf-coteach-code"),D=document.getElementById("cf-coteach-search"),R=document.getElementById("cf-coteach-dropdown");function W(r){if(!r)return;if($.some(C=>C.id===r.id)){J("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),S.value="",D.value="";return}const x=Number(ne.value);if(r.id===x){J("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),S.value="",D.value="";return}$.push(r),Y(),S.value="",D.value="",R.classList.add("hidden")}function H(r){R.innerHTML=r.length?r.map(x=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${x.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${x.teacher_code??""}</span>
            <span class="font-medium">${x.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',R.querySelectorAll(".co-t-opt").forEach(x=>x.addEventListener("mousedown",C=>{C.preventDefault(),W(d.find(w=>String(w.id)===x.dataset.id))})),R.classList.remove("hidden")}if(S.oninput=()=>{const r=S.value.trim().toLowerCase();if(!r)return;const x=d.find(C=>(C.teacher_code??"").toLowerCase()===r);if(x)W(x);else{const C=d.filter(w=>(w.teacher_code??"").toLowerCase().startsWith(r));C.length&&H(C)}},D.onfocus=()=>H(d),D.oninput=()=>{const r=D.value.toLowerCase();H(r?d.filter(x=>x.full_name.toLowerCase().includes(r)||(x.teacher_code??"").toLowerCase().includes(r)):d)},D.onblur=()=>setTimeout(()=>R.classList.add("hidden"),150),pe.addEventListener("input",r=>{r.target.value=Ve(r.target.value)}),t){if(document.getElementById("cf-name").value=t.subject_name??"",document.getElementById("cf-code").value=t.subject_code??"",t.credit&&(document.getElementById("cf-credit").value=String(t.credit)),t.subject_group){const r=document.getElementById("cf-subg");r.value=t.subject_group,document.getElementById("cf-dept").innerHTML=Q(q(t.subject_group));const x=document.getElementById("cf-grade"),C=Xe[t.subject_group]??[];x.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...C.map(w=>`<option value="${w}">${w}</option>`)].join(""),t.grade_level&&(x.value=t.grade_level),document.getElementById("cf-code-hint").textContent=re[t.subject_group]??""}if(t.dept&&(document.getElementById("cf-dept").value=t.dept),t.learning_area)j.value=t.learning_area;else if(t.dept){const r=f.find(x=>x.dept_code===t.dept&&x.head_name);j.value=(r==null?void 0:r.head_name)??""}if(t.teacher_id){const r=d.find(x=>x.id===t.teacher_id);r&&me(r)}else if(e){const r=d.find(x=>x.id===e.id);r&&me(r)}if(M){de.checked=!0,n.classList.add("hidden"),F.classList.remove("hidden"),I.classList.remove("hidden");const r=t.subject_group;Z(r,t.grade_level),Y()}}document.getElementById("course-form").addEventListener("submit",async r=>{r.preventDefault();const x=document.getElementById("cf-submit"),C=document.getElementById("cf-subg").value,w=document.getElementById("cf-dept").value,N=document.getElementById("cf-name").value.trim(),s=document.getElementById("cf-code").value.trim(),y=parseFloat(document.getElementById("cf-credit").value)||null;let g="";if(de.checked){const ae=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!ae.length){J("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}g=ae.map(G=>G.value).join(", ")}else g=document.getElementById("cf-grade").value;const P=ne.value,O=pe.value.trim(),U=j.value.trim();if(!C||!N||!g){J("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}x.disabled=!0,x.textContent="กำลังบันทึก...";try{const ae=P?Number(P):(e==null?void 0:e.id)??null,G=de.checked?$.map(te=>te.id):[];await a({subject_group:C,dept:w||null,subject_name:N,subject_code:s||null,credit:y,grade_level:g,teacher_id:ae,learning_area:U||null},G),O&&ae&&ae===(e==null?void 0:e.id)&&await at(e.id,{phone:O}).catch(()=>{}),J("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(ae){J("บันทึกไม่สำเร็จ: "+xe(ae),"error")}finally{x.disabled=!1,x.textContent=u?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function ma(e,a=[],t){_e("setup"),ke("ตั้งค่าโปรไฟล์","registration");const[l,u,f,d]=await Promise.all([Ue().catch(()=>[]),Tt().catch(()=>[]),At().catch(()=>[]),Re().catch(()=>({}))]),p=parseInt(d.academicYear??2568),$=parseInt(d.semester??1),k=[...new Map(l.map(c=>[c.dept_code,c])).values()],E=(c,h="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(c?k.filter(T=>!T.category||T.category===c):k).map(T=>`<option value="${T.dept_code}" ${T.dept_code===h?"selected":""}>${T.dept_name}</option>`).join(""),i=u.filter(c=>/^ม\./.test(c)),b=f;if(be(`<div class="max-w-lg mx-auto animate-fade">
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
            class="${V}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${ce}">
            ${E(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${ce}">
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
            ${["สามัญ","ศาสนา"].map(c=>`
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${(e==null?void 0:e.category)===c?"border-emerald-400 bg-emerald-50":"border-gray-200"}">
              <input type="radio" name="setup-category" value="${c}" ${(e==null?void 0:e.category)===c?"checked":""}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${c}</span>
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
            ${i.length?i.map(c=>`
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
              <input type="checkbox" name="setup-room-samai" value="${c}" ${a.find(h=>h.main_room===c&&h.category==="สามัญ")?"checked":""} class="text-emerald-600 rounded" />
              <span>${c}</span>
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
            ${b.length?b.map(c=>`
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
              <input type="checkbox" name="setup-room-sadsana" value="${c}" ${a.find(h=>h.main_room===c&&h.category==="ศาสนา")?"checked":""} class="text-emerald-600 rounded" />
              <span>${c}</span>
            </label>`).join(""):'<p class="text-xs text-gray-400">ยังไม่มีห้องศาสนา</p>'}
          </div>
        </div>
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const m=()=>{var A;const c=(A=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:A.value,h=document.getElementById("setup-room-samai-wrap"),_=document.getElementById("setup-room-sadsana-wrap"),T=document.getElementById("setup-room-samai"),L=document.getElementById("setup-room-sadsana");c==="สามัญ"?(h==null||h.classList.remove("hidden"),_==null||_.classList.add("hidden"),L&&(L.value="")):c==="ศาสนา"?(_==null||_.classList.remove("hidden"),h==null||h.classList.add("hidden"),T&&(T.value="")):(h==null||h.classList.remove("hidden"),_==null||_.classList.remove("hidden"))};m(),document.querySelectorAll('input[name="setup-category"]').forEach(c=>c.addEventListener("change",()=>{var L;m();const h=(L=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:L.value,_=document.getElementById("setup-dept"),T=_==null?void 0:_.value;_&&(_.innerHTML=E(h,T))})),document.getElementById("setup-phone").addEventListener("input",c=>{const h=c.target.value.replace(/\D/g,"").slice(0,10);c.target.value=h.length<=3?h:h.length<=6?`${h.slice(0,3)} ${h.slice(3)}`:`${h.slice(0,3)} ${h.slice(3,6)} ${h.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async c=>{var _;c.preventDefault();const h=document.getElementById("setup-save");h.disabled=!0,h.textContent="กำลังบันทึก...";try{const T=document.getElementById("setup-dept").value||null,L=document.getElementById("setup-subg").value||null,A=((_=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:_.value)||null,q=document.getElementById("setup-phone").value.trim()||null,Q=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(ee=>ee.value),v=[...document.querySelectorAll('input[name="setup-room-sadsana"]:checked')].map(ee=>ee.value);await at(e.id,{dept:T,subject_group:L,category:A,phone:q});const{upsertHomeroomTeacher:M,deleteHomeroomTeacher:Y}=await ue(async()=>{const{upsertHomeroomTeacher:ee,deleteHomeroomTeacher:Z}=await import("./api-Cf_Y4s92.js");return{upsertHomeroomTeacher:ee,deleteHomeroomTeacher:Z}},__vite__mapDeps([0,1])),oe=async(ee,Z)=>{const re=a.filter(j=>j.category===ee);await Promise.all(re.filter(j=>!Z.includes(j.main_room)).map(j=>Y(j.id).catch(()=>{}))),await Promise.all(Z.map(j=>M({teacher_id:e.id,main_room:j,category:ee,academic_year:p,semester:$})))};await Promise.all([oe("สามัญ",Q),oe("ศาสนา",v)]),J("บันทึกโปรไฟล์สำเร็จ ✅","success"),t&&await t(e.profile_id)}catch(T){J("บันทึกไม่สำเร็จ: "+xe(T),"error")}finally{h.disabled=!1,h.textContent="บันทึกและเริ่มใช้งาน →"}})}async function ua(e,a=[],t){var E;_e("profile"),ke("โปรไฟล์ของฉัน","registration");const[l,u,f]=await Promise.all([Ue().catch(()=>[]),Tt().catch(()=>[]),At().catch(()=>[])]),d=e==null?void 0:e.category,p=d?l.filter(i=>!i.category||i.category===d):l,$=[...new Map(p.map(i=>[i.dept_code,i])).values()],k=Ve((e==null?void 0:e.phone)??"");be(`<div class="max-w-lg mx-auto animate-fade">
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
              class="${V} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${(e==null?void 0:e.category)??"—"}"
              class="${V} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${(e==null?void 0:e.full_name)??""}" class="${V}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||""}" class="${V}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${(e==null?void 0:e.username)??""}" placeholder="เช่น hambal.waji"
            class="${V} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${k}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${V}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${$.length>0?`<select id="prof-dept" class="${ce} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${$.map(i=>`<option value="${i.dept_code}" ${i.dept_code===(e==null?void 0:e.dept)?"selected":""}>${i.dept_name} (${i.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${V} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${ce}">
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
                ${u.length?u.map(i=>`
                <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
                  <input type="checkbox" name="prof-room-samai" value="${i}" ${a.find(b=>b.main_room===i&&b.category==="สามัญ")?"checked":""} class="text-emerald-600 rounded" />
                  <span>${i}</span>
                </label>`).join(""):'<p class="text-xs text-gray-400">ยังไม่มีห้องสามัญ</p>'}
              </div>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ห้องศาสนา — เลือกได้มากกว่า 1 ห้อง</label>
              <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
                ${f.length?f.map(i=>`
                <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
                  <input type="checkbox" name="prof-room-religion" value="${i}" ${a.find(b=>b.main_room===i&&b.category==="ศาสนา")?"checked":""} class="text-emerald-600 rounded" />
                  <span>${i}</span>
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
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${V}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${V}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`),e&&(document.getElementById("prof-phone").addEventListener("input",i=>{i.target.value=Ve(i.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",i=>{const b=i.target.files[0];b&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(b)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async i=>{var c;i.preventDefault();const b=document.getElementById("prof-save"),m=document.getElementById("prof-name").value.trim();if(!m){J("กรุณากรอกชื่อ-นามสกุล","warning");return}b.disabled=!0,b.textContent="กำลังบันทึก...";try{const h=document.getElementById("prof-dept"),_=document.getElementById("prof-dept-txt"),T=document.getElementById("prof-subg"),L=((_==null?void 0:_.value.trim().toUpperCase())||(h==null?void 0:h.value)||"").trim()||null,A=document.getElementById("prof-username").value.trim().toLowerCase(),q=document.getElementById("prof-email").value.trim();if(A&&!/^[a-z0-9._-]{3,32}$/.test(A)){J("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),b.disabled=!1,b.textContent="บันทึก";return}const Q={full_name:m,phone:document.getElementById("prof-phone").value.trim()||null,dept:L,subject_group:(T==null?void 0:T.value)||null,username:A||null,login_email:q||null},v=(c=document.getElementById("prof-photo-file").files)==null?void 0:c[0];v&&(Q.image_url=await rs(e.id,v)),await at(e.id,Q);const{upsertHomeroomTeacher:M,deleteHomeroomTeacher:Y,getSystemConfig:oe}=await ue(async()=>{const{upsertHomeroomTeacher:le,deleteHomeroomTeacher:ie,getSystemConfig:X}=await import("./api-Cf_Y4s92.js");return{upsertHomeroomTeacher:le,deleteHomeroomTeacher:ie,getSystemConfig:X}},__vite__mapDeps([0,1])),ee=await oe().catch(()=>({})),Z=parseInt(ee.academicYear??new Date().getFullYear()+543),re=parseInt(ee.semester??1),j=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(le=>le.value),se=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(le=>le.value),B=async(le,ie)=>{const X=a.filter(K=>K.category===le);await Promise.all(X.filter(K=>!ie.includes(K.main_room)).map(K=>Y(K.id).catch(()=>{}))),await Promise.all(ie.map(K=>M({teacher_id:e.id,main_room:K,category:le,academic_year:Z,semester:re})))};await Promise.all([B("สามัญ",j),B("ศาสนา",se)]),J("บันทึกโปรไฟล์สำเร็จ","success"),t&&await t(e.profile_id)}catch(h){J("บันทึกไม่สำเร็จ: "+xe(h),"error")}finally{b.disabled=!1,b.textContent="บันทึก"}}),(E=document.getElementById("prof-pw-save"))==null||E.addEventListener("click",async()=>{const i=document.getElementById("prof-pw-new").value,b=document.getElementById("prof-pw-confirm").value;if(!i){J("กรุณากรอกรหัสผ่านใหม่","warning");return}if(i.length<6){J("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(i!==b){J("รหัสผ่านไม่ตรงกัน","warning");return}const m=document.getElementById("prof-pw-save");m.disabled=!0,m.textContent="⏳ กำลังบันทึก...";try{const{error:c}=await Ke.auth.updateUser({password:i});if(c)throw c;J("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch(c){J("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+xe(c),"error")}finally{m.disabled=!1,m.textContent="บันทึกรหัสผ่านใหม่"}}))}const Rt="pp5_exam_docs_draft_v1",gt="pp5_exam_docs_pending_class_id",qt="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",vs="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",Ge=27,Me=Ge*2,Ft=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],Je={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},De={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},fs=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let z={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...De},loadingStudents:!1},Qe=[];const ys=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},hs=()=>{try{return JSON.parse(localStorage.getItem(Rt)||"{}")||{}}catch{return{}}},Ne=()=>{localStorage.setItem(Rt,JSON.stringify(z.form))},ws=()=>{let e="";try{e=sessionStorage.getItem(gt)||"",sessionStorage.removeItem(gt)}catch{}const a=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,a?String(a):""},We=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},Ht=e=>[...e||[]].sort((a,t)=>String(a.student_code||"").localeCompare(String(t.student_code||""),"th",{numeric:!0})),nt=e=>{if(!e)return"";const a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?"":`${a.getDate()} เดือน ${Ft[a.getMonth()]} พ.ศ. ${a.getFullYear()+543}`},$s=e=>{if(!e)return{day:"",month:"",year:""};const a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?{day:"",month:"",year:""}:{day:String(a.getDate()),month:Ft[a.getMonth()],year:String(a.getFullYear()+543)}},lt=e=>{const a=e.startTime||"",t=e.endTime||"";return a&&t?`${a} - ${t}`:a||t||""},vt=(e,a)=>e?a.key==="th"?`${e} น.`:e:"",_s=e=>{const a=String(e||"").trim();if(!a)return{room:"",name:""};const t=a.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(t)return{room:t[1],name:t[2].trim()};const[l,...u]=a.split(/\s+/);return{room:l,name:u.join(" ").trim()}},$e=e=>{const a=String(e||"").trim().toUpperCase();return a==="ชาย"||a==="M"||a==="MALE"?"M":a==="หญิง"||a==="F"||a==="W"||a==="FEMALE"?"F":""},rt=()=>{const e=new Set((z.students||[]).map(a=>$e(a.gender)).filter(Boolean));return e.has("M")&&e.has("F")},ks=()=>{const e=z.form,a=z.students||[];if(e.studentScope!=="split"||!rt())return[a];const t=a.filter(u=>$e(u.gender)==="M"),l=a.filter(u=>$e(u.gender)==="F");return e.splitPrintMode==="both"?[t,l]:[e.splitGender==="F"?l:t]},Es=()=>{const e=z.form;if(e.studentScope!=="split"||!rt())return"";const a=z.students.filter(l=>$e(l.gender)==="M").length,t=z.students.filter(l=>$e(l.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${a} + หญิง ${t})`:e.splitGender==="F"?` (เฉพาะหญิง ${t} คน)`:` (เฉพาะชาย ${a} คน)`},Cs=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),ft=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),yt=(e,a,t,l=t.loading,u=0)=>{const f=e||[],d=f.map(($,k)=>`
    <tr>
      <td>${a+k}</td>
      <td>${o($.student_code||"")}</td>
      <td class="nm">${o($.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),p=Array.from({length:Math.max(0,u-f.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return d||p?d+p:`<tr><td colspan="4" class="empty-students">${o(l)}</td></tr>`},Ss=(e,a,t,l,u,f)=>{const d=e.slice(a*Me,(a+1)*Me),p=d.slice(0,Ge),$=d.slice(Ge,Me),k=a*Me+1,E=k+Ge;return`
    <div class="exam-doc-paper ${f} sign-list ${a>0?"exam-doc-page-break":""}">
      ${et(t.signListTitle)}
      ${tt(t,l,u)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${o(t.studentCode)}</th>
                <th>${o(t.studentName)}</th>
                <th style="width:80px;">${o(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${yt(p,k,t)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${o(t.studentCode)}</th>
                <th>${o(t.studentName)}</th>
                <th style="width:80px;">${o(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${yt($,E,t," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${Ze(t,u)}
    </div>`},ht=(e,a)=>a?`${e}. .................................................... <span class="textColor">(${o(a)})</span>`:`${e}. ...........................................................................................`,Ze=(e,a)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${o(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>${ht(1,a.invigilator1)}</div>
      </div>
      <div class="examiner-signature">
        <div>${ht(2,a.invigilator2)}</div>
      </div>
    </div>
  </div>`,et=e=>`
  <div class="header">
    <img src="${qt}" alt="">
    <h2>${o(e)}</h2>
    <img src="${vs}" alt="">
  </div>`,tt=(e,a,t)=>`
  <div class="infoG">
    <div class="info1">
      ${o(e.examType)}: <span class="textColor">${o(t.examType||"")}</span>
      ${o(e.term)}: <span class="textColor">${o(t.semester||"")}</span>
      ${o(e.year)}: <span class="textColor">${o(t.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${o(e.subject)}: <span class="textColor">${o(a.subjectName||"")}</span>
      ${o(e.subjectCode)}: <span class="textColor">${o(a.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${o(e.examDate)}: <span class="textColor">${o(t.examDateLabel||nt(t.examDate))}</span>
      ${o(e.examTime)}: <span class="textColor">${o(t.examTimeLabel||lt(t))}</span>
    </div>
    <div class="info4">
      ${o(e.teacher)}: <span class="textColor">${o(a.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${o(e.classLevel)}: <span class="textColor">${o(a.className||"")}</span>
    </div>
  </div>`,js=e=>`
  <div class="header-single">
    <img src="${qt}" alt="">
    <h2>${o(e)}</h2>
  </div>`,wt=(e,a)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${o(a||"")}</span>
  </div>`,Ls=(e,a,t,l)=>{const[u,f]=String(l.room||"").split("/");return`
  <div class="env-line">
    ${o(e.envTerm)} <span class="textColor env-blank-sm">${o(t.semester||"")}</span>
    ${o(e.envYear)} <span class="textColor env-blank-sm">${o(t.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${o(e.envSubject)} <span class="textColor env-blank-lg">${o(a.subjectName||"")}</span>
    ${o(e.envClass)} <span class="textColor env-blank-sm">${o(u||"")}</span> / <span class="textColor env-blank-sm">${o(f||"")}</span>
  </div>
  <div class="env-line">
    ${o(e.envTeacher)} <span class="textColor env-blank-lg">${o(a.teacherName||"")}</span>
  </div>
  <div class="env-line env-invigilator-heading">${o(e.envInvigilatorHeading)}:-</div>
  ${wt(1,t.invigilator1)}
  ${wt(2,t.invigilator2)}
  <table class="envelope-summary-table">
    <tbody>
      <tr><th>${o(e.envDate)}</th><td class="textColor">${o(t.examDateLabel||nt(t.examDate))}</td></tr>
      <tr><th>${o(e.envPeriod)}</th><td class="textColor">${o(t.examTimeLabel||lt(t))}</td></tr>
      <tr><th>${o(e.envGroup)}</th><td class="textColor">${o(t.classPart||"")}</td></tr>
      <tr><th>${o(e.envRoomNo)}</th><td class="textColor">${o(t.examRoom||"")}</td></tr>
    </tbody>
  </table>
  <div class="env-footer-dept">${o(e.envFooterDept)}</div>`},Ts=(e,a)=>{var L,A;const t=z.form,l=Je[t.lang]||Je.th,u=z.selectedClass||{},f=We(u),d=Ht(e),p=d.length,$=$s(t.examDate),k=(L=z.teacher)!=null&&L.phone?` (${z.teacher.phone})`:"",E={className:u.class_name||"",subjectName:t.subjectLabel||f.subject_name||"",subjectCode:f.subject_code||"",teacherName:(((A=z.teacher)==null?void 0:A.full_name)||"")+k},i=Math.max(1,Math.ceil(d.length/Me)),b=l.dir==="rtl"?"rtl":"ltr",m=a==="all"||a==="portrait",c=a==="all"||a==="envelope",h=a==="envelope"?" envelope-only":a==="portrait"?" portrait-only":"",_=t.examAmount||String(p),T=_s(E.className);return`
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
        --exam-font: ${l.font};
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

      .exam-doc-paper.envelope-religious {
        display: flex;
        flex-direction: column;
        padding-top: 14mm;
      }

      .header-single {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 20px;
      }

      .header-single img {
        width: 100px;
        margin-bottom: 10px;
      }

      .header-single h2 {
        font-size: 20pt;
        font-weight: 700;
        margin: 0;
      }

      .env-line {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
        font-size: 17pt;
        margin-top: 34px;
      }

      .env-blank-sm {
        display: inline-block;
        min-width: 60px;
        text-align: center;
      }

      .env-blank-lg {
        display: inline-block;
        flex-grow: 1;
        min-width: 220px;
      }

      .env-blank-full {
        display: inline-block;
        flex-grow: 1;
        min-width: 260px;
      }

      .env-invigilator-heading {
        font-size: 17pt;
        font-weight: 700;
        margin-top: 46px;
      }

      .env-invigilator-row {
        font-size: 16pt;
        margin-top: 28px;
      }

      .envelope-summary-table {
        margin-top: 54px;
      }

      .envelope-summary-table th,
      .envelope-summary-table td {
        font-size: 15pt;
        padding: 14px;
      }

      .envelope-summary-table th {
        width: 45%;
        background: #f3f4f6;
      }

      .exam-doc-paper .env-footer-dept {
        margin-top: auto;
        padding-top: 24px;
        font-size: 11pt;
        direction: rtl;
        text-align: left;
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
    <div id="exam-doc-print-area" class="${h.trim()}">
    ${m?`
    ${Array.from({length:i},(q,Q)=>Ss(d,Q,l,E,t,b)).join("")}

    <div class="exam-doc-paper ${b} exam-doc-page-break">
      ${et(l.examCoverTitle)}
      ${tt(l,E,t)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${o(l.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${p}</span> ${o(l.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${o(l.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${o(l.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${o(l.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${o(l.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${o(l.no)}</th>
            <th>${o(l.studentCode)}</th>
            <th>${o(l.absentName)}</th>
            <th>${o(l.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${ft(15)}
        </tbody>
      </table>
      ${Ze(l,t)}
    </div>

    <div class="exam-doc-paper ${b} exam-doc-page-break">
      ${et(l.absentTitle)}
      ${tt(l,E,t)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${o(l.no)}</th>
            <th>${o(l.studentCode)}</th>
            <th>${o(l.absentName)}</th>
            <th>${o(l.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${ft(15)}
        </tbody>
      </table>
      ${Ze(l,t)}
    </div>
    `:""}

    ${c?t.lang==="th"?`
    <div class="exam-doc-paper ${b} landscape ${m?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${o(l.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${o(l.envelopeSubject)} <span class="textColor">${o(E.subjectName)}</span> ${o(l.subjectCode)} <span class="textColor">${o(E.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${t.examDateLabel?`${o(l.envelopeDate)} <span class="textColor">${o(t.examDateLabel)}</span>`:`${o(l.envelopeDate)} <span class="textColor">${o($.day)}</span> ${o(l.envelopeMonth)} <span class="textColor">${o($.month)}</span> ${o(l.envelopeYear)} <span class="textColor">${o($.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${t.examTimeLabel?`${o(l.envelopeTime)} <span class="textColor">${o(t.examTimeLabel)}</span>`:`${o(l.envelopeTime)} <span class="textColor">${o(vt(t.startTime,l))}</span> ${o(l.envelopeTo)} <span class="textColor">${o(vt(t.endTime,l))}</span>`}
        </div>
        <div class="infoNP4">
          ${o(l.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${o(T.room)}</span>${T.name?`<span class="exam-envelope-class-name">${o(T.name)}</span>`:""}</span> ${o(l.envelopeStudents)} <span class="textColor">${p}</span> ${o(l.studentUnit)} ${o(l.examAmount)} <span class="textColor">${o(_)}</span> ${o(l.examUnit)}
        </div>
        <div class="infoNP5">
          ${o(l.envelopeTeacher)} <span class="textColor">${o(E.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${b} envelope-religious ${m?"exam-doc-page-break":""}">
      ${js(l.envSchoolName)}
      ${Ls(l,E,t,T)}
    </div>
    `:""}
    </div>`},it=(e="all")=>{const t=ks().map($=>Ts($,e));if(t.length<=1)return t[0]||"";const l=t[0].match(/<style[\s\S]*?<\/style>/),u=l?l[0]:"",f=t[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),d=f?f[1]:"",p=t.map($=>{const k=$.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return k?k[1]:""});return`${u}
<div id="exam-doc-print-area" class="${d}">${p.join("")}</div>`},As=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${it("all")}
</body>
</html>`;Bt(e,{autoprint:!0})},Is=()=>{const e=z.selectedClass,a=We(e);return e?`${a.subject_code||"-"} · ${a.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function Bs(){Qe.forEach(e=>{try{e()}catch{}}),Qe=[]}function $t(e,a){const t=document.getElementById(e),l=document.getElementById(`${e}-list`);if(!t||!l)return;const u=z.teachers||[],f=()=>{l.classList.add("hidden")},d=m=>{t.value=m.full_name||"",z.form[a]=t.value,Ne(),Oe(),f()},p=()=>{const m=t.value.trim(),c=m.toLowerCase(),h=u.filter(_=>!m||Cs(_).includes(c)).slice(0,10);if(!u.length){l.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!h.length){l.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}l.innerHTML=h.map(_=>`
      <button type="button" data-id="${_.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${_.image_url?`<img src="${_.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${o((_.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${o(_.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${o(_.teacher_code||"—")}${_.dept?` · ${o(_.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),l.querySelectorAll(".exam-teacher-option").forEach(_=>{_.addEventListener("mousedown",T=>{T.preventDefault();const L=u.find(A=>String(A.id)===String(_.dataset.id));L&&d(L)})})},$=()=>{p(),l.classList.remove("hidden")},k=()=>{z.form[a]=t.value,Ne(),Oe(),$()},E=()=>$(),i=m=>{if(m.key==="Escape"&&f(),m.key==="Enter"){const c=l.querySelector(".exam-teacher-option");c&&!l.classList.contains("hidden")&&(m.preventDefault(),c.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},b=m=>{!t.contains(m.target)&&!l.contains(m.target)&&f()};t.addEventListener("input",k),t.addEventListener("focus",E),t.addEventListener("keydown",i),document.addEventListener("mousedown",b,!0),Qe.push(()=>{t.removeEventListener("input",k),t.removeEventListener("focus",E),t.removeEventListener("keydown",i),document.removeEventListener("mousedown",b,!0)})}function Te(){const e=z.form,a=z.classes.map(t=>{const l=We(t),u=`${l.subject_code||"-"} · ${l.subject_name||"-"} · ${t.class_name||"-"}`;return`<option value="${t.id}" ${String(e.classId)===String(t.id)?"selected":""}>${o(u)}</option>`}).join("");be(`
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
            <select id="exam-class-id" class="${ce}">
              <option value="">เลือกห้องเรียน</option>
              ${a}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${ce}">
              ${Object.values(Je).map(t=>`<option value="${t.key}" ${e.lang===t.key?"selected":""}>${o(t.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <input id="exam-type" list="exam-type-datalist" class="${V}" value="${o(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${fs.map(t=>`<option value="${o(t)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${V}" value="${o(e.subjectLabel)}" placeholder="${o(We(z.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${V}" value="${o(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${V}" value="${o(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${V}" value="${o(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${V}" value="${o(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${V}" value="${o(e.endTime)}">
            </label>
          </div>
          ${e.lang!=="th"?`
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความวันที่สอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = แปลงจากวันที่ด้านบนแบบไทยให้อัตโนมัติ)</span>
            <input id="exam-date-label" class="${V}" value="${o(e.examDateLabel)}" placeholder="${o(nt(e.examDate)||"เช่น ١٥ يوليو ٢٠٢٦")}">
          </label>
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความเวลาสอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = ใช้เวลาด้านบนตามที่ตั้งไว้)</span>
            <input id="exam-time-label" class="${V}" value="${o(e.examTimeLabel)}" placeholder="${o(lt(e)||"เช่น ٠٨:٣٠ - ٠٩:٣٠")}">
          </label>`:""}
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${V}" value="${o(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${V}" value="${o(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${V}" value="${o(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${V}" value="${o(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${V}" value="${o(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${V}" value="${o(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        ${rt()?(()=>{const t=z.students.filter(f=>$e(f.gender)==="M").length,l=z.students.filter(f=>$e(f.gender)==="F").length,u=e.studentScope==="split";return`
        <div class="mt-4 grid gap-3 sm:grid-cols-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">นักเรียนที่ใช้ (ห้องนี้มีทั้งชายและหญิง)</span>
            <select id="exam-student-scope" class="${ce}">
              <option value="all" ${u?"":"selected"}>ทั้งห้อง (ไม่แยกเพศ)</option>
              <option value="split" ${u?"selected":""}>แยกเพศ</option>
            </select>
          </label>
          ${u?`
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">เพศที่กำลังดู/พิมพ์</span>
            <select id="exam-split-gender" class="${ce}">
              <option value="M" ${e.splitGender!=="F"?"selected":""}>ชาย (${t} คน)</option>
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${l} คน)</option>
            </select>
          </label>
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รูปแบบพิมพ์</span>
            <select id="exam-split-print-mode" class="${ce}">
              <option value="single" ${e.splitPrintMode!=="both"?"selected":""}>พิมพ์ทีละเพศ (เฉพาะเพศที่เลือกอยู่)</option>
              <option value="both" ${e.splitPrintMode==="both"?"selected":""}>พิมพ์ทีเดียวทั้งสองเพศ (ชายก่อน ต่อด้วยหญิง)</option>
            </select>
          </label>`:""}
        </div>`})():""}

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${o(Is())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${z.students.length} คน${o(Es())}</span>
          ${z.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${it()}</div>
      </section>
    </div>`),Ms()}async function st(){const e=z.form.classId;if(z.selectedClass=z.classes.find(a=>String(a.id)===String(e))||null,z.students=[],!!e){z.loadingStudents=!0,Te();try{z.students=Ht(await es(e))}catch(a){console.error(a),J("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+xe(a),"error")}finally{z.loadingStudents=!1}}}function we(){var e,a,t,l,u,f,d,p,$,k,E,i,b,m,c,h,_,T,L,A;z.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((a=document.getElementById("exam-subject-label"))==null?void 0:a.value)||"",lang:((t=document.getElementById("exam-lang"))==null?void 0:t.value)||"th",examType:((l=document.getElementById("exam-type"))==null?void 0:l.value)||"",semester:((u=document.getElementById("exam-semester"))==null?void 0:u.value)||"",academicYear:((f=document.getElementById("exam-year"))==null?void 0:f.value)||"",examDate:((d=document.getElementById("exam-date"))==null?void 0:d.value)||"",startTime:((p=document.getElementById("exam-start"))==null?void 0:p.value)||"",endTime:(($=document.getElementById("exam-end"))==null?void 0:$.value)||"",examDateLabel:((k=document.getElementById("exam-date-label"))==null?void 0:k.value)||"",examTimeLabel:((E=document.getElementById("exam-time-label"))==null?void 0:E.value)||"",classPart:((i=document.getElementById("exam-class-part"))==null?void 0:i.value)||"",periodPart:((b=document.getElementById("exam-period-part"))==null?void 0:b.value)||"",examRoom:((m=document.getElementById("exam-room"))==null?void 0:m.value)||"",examAmount:((c=document.getElementById("exam-amount"))==null?void 0:c.value)||"",invigilator1:((h=document.getElementById("exam-invigilator-1"))==null?void 0:h.value)||"",invigilator2:((_=document.getElementById("exam-invigilator-2"))==null?void 0:_.value)||"",studentScope:((T=document.getElementById("exam-student-scope"))==null?void 0:T.value)||"all",splitGender:((L=document.getElementById("exam-split-gender"))==null?void 0:L.value)||"M",splitPrintMode:((A=document.getElementById("exam-split-print-mode"))==null?void 0:A.value)||"single"},z.selectedClass=z.classes.find(q=>String(q.id)===String(z.form.classId))||null,Ne()}function Oe(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=it())}function Ps(){return we(),Oe(),z.form.classId?!0:(J("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function Ms(){var a,t,l,u;Bs(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(f=>{var d,p;(d=document.getElementById(f))==null||d.addEventListener("input",()=>{we(),Oe()}),(p=document.getElementById(f))==null||p.addEventListener("change",()=>{we(),Oe()})}),(a=document.getElementById("exam-class-id"))==null||a.addEventListener("change",async()=>{we(),Ne(),await st(),Te()}),(t=document.getElementById("exam-lang"))==null||t.addEventListener("change",()=>{we(),Te()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(f=>{var d;(d=document.getElementById(f))==null||d.addEventListener("change",()=>{we(),Te()})}),(l=document.getElementById("exam-doc-refresh"))==null||l.addEventListener("click",async()=>{we(),await st(),Te(),J("รีเฟรชรายชื่อแล้ว","success")}),(u=document.getElementById("exam-doc-print"))==null||u.addEventListener("click",()=>{Ps()&&As()}),$t("exam-invigilator-1","invigilator1"),$t("exam-invigilator-2","invigilator2")}async function xa(e){_e("exam-docs"),ke("เอกสารช่วงสอบ","exam-docs"),be(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[a,t,l]=await Promise.all([ot((e==null?void 0:e.id)??null),Re().catch(()=>({})),St().catch(()=>[])]),u=hs(),f=ws(),d={...De,semester:String(t.semester||De.semester||""),academicYear:String(t.academicYear||De.academicYear||""),examDate:ys(),invigilator1:(e==null?void 0:e.full_name)||"",...u};f&&a.some(p=>String(p.id)===String(f))&&(d.classId=String(f)),z={teacher:e,classes:a,teachers:l,students:[],selectedClass:null,loadingStudents:!1,form:d},z.form.examType||(z.form.examType=De.examType),f&&Ne(),z.selectedClass=z.classes.find(p=>String(p.id)===String(z.form.classId))||null,await st(),Te()}catch(a){console.error(a),be(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${o(xe(a))}
    </div>`)}}let Ie=null,Se=null,Be=null,je=null,Le=null;const Ds={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},Ns={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function Os(e){const a=new Date,t=new Date(e.event_date+"T00:00:00"),l=new Date((e.end_date||e.event_date)+"T23:59:59");if(a>=t&&a<=l)return{status:"ongoing"};const u=Math.max(0,Math.floor((t-a)/1e3)),f=Math.floor(u/86400),d=u%86400,p=Math.floor(d/3600),$=Math.floor(d%3600/60),k=d%60,E=`${String(p).padStart(2,"0")}:${String($).padStart(2,"0")}:${String(k).padStart(2,"0")}`,i=u<=86400?"red":u<=3*86400?"amber":"normal";return{status:"upcoming",days:f,clock:E,urgency:i}}function Rs(e,a){if(!e)return 0;const t=new Date(e),l=new Date(a+"T00:00:00");if(isNaN(t)||isNaN(l))return 0;const u=l.getTime()-t.getTime();return u<0?0:Math.floor(u/(7*24*60*60*1e3))+1}function _t(e,a){const t=d=>String(d??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),l=d=>new Date(d+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),u=new Date().toISOString().slice(0,10),f=(e??[]).filter(d=>(d.end_date||d.event_date)>=u).map(d=>({ev:d,cd:Os(d)})).filter(({cd:d})=>d.status==="ongoing"||d.days<=14).sort((d,p)=>d.ev.event_date.localeCompare(p.ev.event_date)).slice(0,5);return f.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${f.map(({ev:d,cd:p})=>{const $=p.status==="ongoing"||p.urgency==="red",k=p.urgency==="amber",E=$?"bg-red-50 border-red-300 ring-2 ring-red-200":k?"bg-amber-50 border-amber-200":"bg-white border-gray-200",i=$?"bg-red-100 animate-pulse":k?"bg-amber-100":"bg-gray-100",b=Rs(a,d.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${E}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${i}">${$?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${Ns[d.event_type]}">${Ds[d.event_type]}</span>
            <span class="text-[11px] text-gray-400">${l(d.event_date)}</span>
            ${b>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${b}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${$?"text-red-800":"text-gray-800"}">${t(d.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${p.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${$?"text-red-600":k?"text-amber-600":"text-gray-500"}">อีก ${p.days} วัน</p>
               <p class="text-[11px] font-mono ${$?"text-red-400":"text-gray-400"}">${p.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function kt(e,a,t=null){const l=p=>p==="A"?"#059669":p==="B"?"#2563eb":"#d97706",u=(p="0.11")=>t?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${p};color:${l(t.grade)}">${t.grade}</span>
       </div>`:"";if(!e.length)return"";const f=e.map(p=>({...p,cd:ds(p.start_time,p.end_time)})).sort((p,$)=>{const k={active:0,upcoming:1,done:2};return k[p.cd.status]-k[$.cd.status]||(p.start_time??"").localeCompare($.start_time??"")}),d=f.some(p=>p.cd.status==="active");return`
  <div onclick="window._openWenDuty('${a}')"
    class="relative overflow-hidden mb-3 border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-150
           ${d?"bg-red-50 border-red-300 ring-4 ring-red-100":"bg-amber-50 border-amber-300 ring-4 ring-amber-100"}">
    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                ${d?"bg-red-100 animate-pulse":"bg-amber-100"}">${d?"🚨":"🛡️"}</div>
    <div class="flex-1 min-w-0">
      <span class="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1
        ${d?"bg-red-200 text-red-800":"bg-amber-200 text-amber-800"}">เวรวันนี้</span>
      <p class="font-extrabold text-base mb-1 ${d?"text-red-800":"text-amber-800"}">
        ${d?"🔴 ถึงเวลาเวรแล้ว!":`วันนี้คุณมีเวร ${f.length} จุด`}
      </p>
      <div class="space-y-1">
        ${f.map(p=>p.cd.status==="active"?`
        <div class="bg-red-100/70 rounded-lg px-2 py-1.5 -mx-2">
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${o(p.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${o(p.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${p.cd.cls}">${p.cd.label}</span>
          </div>
        </div>`:`
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${p.cd.status==="done"?"text-gray-400 line-through":"text-amber-700"}">
            📍 ${o(p.name)} <span class="${p.cd.status==="done"?"text-gray-300":"text-amber-500"}">(${o(p.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${p.cd.cls}">${p.cd.label}</span>
        </div>`).join("")}
      </div>
      <p class="text-[11px] mt-2 font-semibold ${d?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${u()}
  </div>`}const Pe=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let ge=null;function Et(e,a){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const t=parseInt(String(a??"").replace(/[^0-9]/g,""),10);return t>=4&&t<=6?"สามัญมัธยม ม.ปลาย":t>=1&&t<=3?"สามัญมัธยม ม.ต้น":null}async function qs(e){_e("overview"),ke("ภาพรวมผู้บริหาร"),be(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[a,t]=await Promise.all([ls().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),Re().catch(()=>({}))]),l=Object.fromEntries(a.subjectRows.map(v=>[v.id,v])),u=Object.fromEntries(Pe.map(v=>[v,0]));let f=0;a.classRows.forEach(v=>{const M=l[v.course_id],Y=M?Et(M.subject_group,M.grade_level):null;Y?u[Y]++:f++});const d=new Set(a.classRows.map(v=>v.course_id).filter(Boolean)),p=a.subjectRows.filter(v=>d.has(v.id)),$=Object.fromEntries(Pe.map(v=>[v,new Set])),k=new Set;p.forEach(v=>{const M=Et(v.subject_group,v.grade_level);M?$[M].add(v.subject_name):k.add(v.subject_name)});const E=Object.fromEntries(Pe.map(v=>[v,$[v].size])),i=new Set(p.map(v=>v.subject_name)).size,b=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:a.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:a.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:a.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:i,hint:"นับชื่อวิชาไม่ซ้ำ"}],m=()=>b.map(v=>`
    <button type="button" data-exec-stat="${v.key}"
      class="text-left bg-white rounded-2xl border ${ge===v.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${v.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${v.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${v.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${v.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${ge===v.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),c=(v,M)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${v}</span>
      <span class="text-sm font-bold text-gray-800">${M.toLocaleString("th-TH")}</span>
    </div>`,h=()=>{if(!ge)return"";let v="";if(ge==="teachers"||ge==="students"){const M=b.find(Y=>Y.key===ge);v=`<p class="text-sm text-gray-500">${M.icon} ${M.label}ทั้งหมด <b class="text-gray-800">${M.value.toLocaleString("th-TH")}</b> คน (${M.hint})</p>`}else ge==="courses"?v=Pe.map(M=>c(M,u[M])).join("")+(f>0?c("ไม่ระบุหมวด/ยังไม่ผูกวิชา",f):""):ge==="subjects"&&(v=Pe.map(M=>c(M,E[M])).join("")+(k.size>0?c("ไม่ระบุหมวด",k.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${v}
    </div>`},_={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},L=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter(v=>v.show&&["council","terangganu","regrade"].includes(v.key)).map(v=>{const[M,Y]=_[v.key]||["#E4E4E7","#9C9CA3"];return{key:v.key,id:v.id,emoji:v.emoji,label:v.label,from:M,to:Y,badge:v.badge,onclick:v.href?`window.location.href='${v.href}'`:`window._navTo('${v.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map(v=>Mt(v,t.iconTileStyle)).join(""),q=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map(v=>`
    <a href="${v.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${v.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${v.label}</span>
    </a>`).join("");be(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${o((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${m()}
    </div>
    <div id="exec-stat-detail">${h()}</div>

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
  </div>`);function Q(){document.querySelectorAll("[data-exec-stat]").forEach(v=>{v.onclick=()=>{var Y;const M=v.dataset.execStat;ge=ge===M?null:M,document.getElementById("exec-stat-cards").innerHTML=m(),document.getElementById("exec-stat-detail").innerHTML=h(),Q(),(Y=document.getElementById("exec-stat-detail-inner"))==null||Y.scrollIntoView({behavior:"smooth",block:"nearest"})}})}Q()}async function Ct(e,a=[]){var N;if(_e("overview"),ke("ภาพรวม"),ut(e).includes("executive")){qs(e);return}const{getPendingExamRequestCount:t}=await ue(async()=>{const{getPendingExamRequestCount:s}=await import("./api-Cf_Y4s92.js");return{getPendingExamRequestCount:s}},__vite__mapDeps([0,1])),{getMyDonationRequests:l}=await ue(async()=>{const{getMyDonationRequests:s}=await import("./api-Cf_Y4s92.js");return{getMyDonationRequests:s}},__vite__mapDeps([0,1])),{getUnreadNotifications:u}=await ue(async()=>{const{getUnreadNotifications:s}=await import("./api-Cf_Y4s92.js");return{getUnreadNotifications:s}},__vite__mapDeps([0,1])),[f,d,p,$,k,E,i,b,m]=await Promise.all([e?jt(e.id).catch(()=>[]):Lt().catch(()=>[]),ot((e==null?void 0:e.id)??null).catch(()=>[]),Re().catch(()=>({})),e?t(e.id).catch(()=>0):Promise.resolve(0),e?l(e.id).catch(()=>[]):Promise.resolve([]),e?u(e.id).catch(()=>[]):Promise.resolve([]),e?bs(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?xs(e.teacher_code).catch(()=>null):Promise.resolve(null),e?ue(()=>import("./sports-portals.js_v_10.22-D7ID6515.js").then(s=>s.p),__vite__mapDeps([8,3,4,1,9,10,7])).then(s=>s.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1})]),c=parseInt(p.academicYear??2568),h=parseInt(p.semester??1),_=cs(p.semester_start);Ie&&(clearInterval(Ie),Ie=null),Se&&(clearInterval(Se),Se=null),Be&&(clearInterval(Be),Be=null),je&&(clearInterval(je),je=null),Le&&(clearInterval(Le),Le=null);const[T,L,A,q,Q]=await Promise.all([e?ts(e.id,c,h).catch(()=>[]):Promise.resolve([]),e?ss(e.id).catch(()=>[]):Promise.resolve([]),as().catch(()=>[]),os().catch(()=>[]),e?ns(c,h).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries(q.map(s=>[s.id,s]));const v=window._classroomMapGlobal,M={};L.forEach(s=>{M[s.teacher_schedule_id]||(M[s.teacher_schedule_id]=[]),M[s.teacher_schedule_id].push(s.class_id)});const Y=Object.fromEntries(d.map(s=>[s.id,s])),oe=Object.fromEntries(A.map(s=>[s.period_no,s])),ee=new Date().getDay(),Z=T.filter(s=>s.day_of_week===ee&&(M[s.id]??[]).length>0).map(s=>{const y=(s.period_no??1)+(s.span_periods??1)-1;return{...s,linkedClasses:(M[s.id]??[]).map(g=>Y[g]).filter(Boolean),period:oe[s.period_no],actualEndPeriod:oe[y]??oe[s.period_no]}}).sort((s,y)=>s.period_no-y.period_no),re=s=>{var g,P;const y=Fe((g=s.period)==null?void 0:g.start_time,(P=s.actualEndPeriod)==null?void 0:P.end_time);return y.label.includes("กำลังสอน")?0:y.label.startsWith("เสร็จ")?2:1},j=Z.find(s=>re(s)===0)??null,se=[...Z].filter(s=>s!==j).sort((s,y)=>re(s)-re(y)||s.period_no-y.period_no),B=a.filter(s=>s.category==="สามัญ"),le=k.find(s=>s.package_type==="donation"&&s.status==="approved"),ie=k.filter(s=>s.package_type==="donation"&&s.status==="approved").reduce((s,y)=>s+(y.amount??0),0),X=(s,y)=>{const g=parseInt(s,10);return Number.isFinite(g)&&g>0?g:y},K=()=>{const s=String(p.donationStickerTiers??"").trim();return X(p.donationMinAmount,99),X(p.donationAmountStep,50),(s?s.split(`
`).filter(Boolean).map(O=>{const[U,ae,G,te,he]=O.split("|").map(Ee=>Ee.trim());return{amount:X(U,0),sticker:ae||"🏅",title:G||`ผู้สนับสนุน ${U} บาท`,note:te||"",color:he||""}}).filter(O=>O.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([O,U,ae,G,te])=>({amount:O,sticker:U,title:ae,note:G,color:te}))).sort((O,U)=>O.amount-U.amount).map((O,U)=>{const ae=p[`donationStickerImg${U+1}`]??"";return ae&&/^https?:\/\//.test(ae)?{...O,sticker:ae}:O})},ye=s=>{if(!s)return"";const y=parseInt(s.slice(1,3),16),g=parseInt(s.slice(3,5),16),P=parseInt(s.slice(5,7),16);return`border:2px solid ${s};box-shadow:0 0 0 4px rgba(${y},${g},${P},0.25),0 4px 20px rgba(${y},${g},${P},0.18);`},Ae=()=>{const s=String(p.donationSpecialFeatures??"").trim(),y=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return s?s.split(`
`).filter(Boolean).map(g=>{const P=g.split("|").map(O=>O.trim());return{icon:P[0]||"✨",text:P[1]||P[0]||g,minTier:parseInt(P[2])||1}}).filter(g=>g.text):y.map(([g,P,O])=>({icon:g,text:P,minTier:O}))};let ne=null,pe=0,me="",ve="",de="border border-gray-200 shadow-md";if(le&&p.quotaMode==="school_sponsored"){const s=K(),y=ie;if(ne=[...s].reverse().find(g=>y>=g.amount)??s[0],pe=ne?s.indexOf(ne)+1:0,ne){ve=ye(ne.color),de="";const g=String(ne.sticker??""),P=/^https?:\/\//.test(g)?`<img src="${g}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${g}</span>`,O=ne.color?`color:${ne.color};`:"color:#f59e0b;";me=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${P}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${O}">
            ${ne.note||ne.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async s=>{if(!s)return;const{renderClassDetail:y}=await ue(async()=>{const{renderClassDetail:g}=await import("./teacher-views-classes-dyQ0iCt1.js").then(P=>P.t);return{renderClassDetail:g}},__vite__mapDeps([28,3,4,0,1,7,8,9,10,29,14,24,19,21,22,23,30]));y(e,s)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:s}=await ue(async()=>{const{openSmartClassroomLanding:y}=await import("./teacher-views-smart-classroom-CzhdvGBS.js");return{openSmartClassroomLanding:y}},__vite__mapDeps([2,3,4,0,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]));s(e)};const n=_>0?(()=>{const s=new Date(p.semester_start);s.setDate(s.getDate()+(_-1)*7);const y=new Date(s);y.setDate(y.getDate()+6);const g=O=>`${String(O.getDate()).padStart(2,"0")}/${String(O.getMonth()+1).padStart(2,"0")}`,P=`📅 สัปดาห์ที่ ${_} (${g(s)} – ${g(y)}) · ภาคเรียนที่ ${h}/${c}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${P}</span><span class="mr-10 lg:mr-16">${P}</span>
      </div>
    </div>
    <style>@keyframes teacher-week-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}</style>
    `})():"",F=ut(e);window._openHomeroomPopup=()=>{var y;(y=document.getElementById("homeroom-popup"))==null||y.remove();const s=document.createElement("div");s.id="homeroom-popup",s.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.addEventListener("click",g=>{g.target===s&&s.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:s}=await ue(async()=>{const{openTeacherShirtSizeModal:y}=await import("./sports-portals.js_v_10.22-D7ID6515.js").then(g=>g.p);return{openTeacherShirtSizeModal:y}},__vite__mapDeps([8,3,4,1,9,10,7]));s(e)};const I=[...new Set(d.map(s=>s.class_name).filter(Boolean))].sort(),S=JSON.stringify(I).replace(/"/g,"&quot;"),D=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:F.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:B.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${S}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:a.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:m.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],R={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},W=(window._teacherOverviewSystems||[]).filter(s=>s.show).map(s=>{const[y,g]=R[s.key]||["#E4E4E7","#9C9CA3"];return{key:s.key,id:s.id,show:!0,emoji:s.emoji,label:s.label,from:y,to:g,badge:s.badge,onclick:s.href?`window.location.href='${s.href}'`:`window._navTo('${s.nav}')`}}),H=[...D,...W].filter(s=>s.show),r=(e==null?void 0:e.overview_prefs)||null,x=r?H.filter(s=>!(r.hiddenKeys||[]).includes(s.key)).sort((s,y)=>{const g=r.iconOrder||[],P=g.indexOf(s.key),O=g.indexOf(y.key);return P===-1&&O===-1?0:P===-1?1:O===-1?-1:P-O}):H,C=x.map(s=>Mt(s,p.iconTileStyle)).join("");if(window._openOverviewCustomizer=()=>Fs(e,H,a),be(`<div class="animate-fade">

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${E.length?(()=>{const s={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},y={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},g={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},P={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},O=[...new Set(E.map(G=>G.metric))].map(G=>`<span style="background:${g[G]??"#f3f4f6"};color:${y[G]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${s[G]??G}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(E.filter(G=>G.supervisor).map(G=>[G.supervisor_id,G.supervisor])).values()].map(G=>P[G.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${E.length} รายการ — คลิกเพื่อดู
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
    ${j?(()=>{var g,P;const s=j.period?`${j.period.start_time.substring(0,5)}–${j.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${j.period_no}`,y=((g=j.linkedClasses[0])==null?void 0:g.id)??null;return`
    <div id="active-class-card" class="mb-4 bg-white rounded-2xl p-5 ${y?"cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150":""}"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);"
      ${y?`onclick="window._goToActiveClass(${y})"`:""}>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${s}</span>
        ${y?'<span class="text-[11px] text-emerald-500 ml-auto">เข้าห้องเรียน →</span>':""}
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${j.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${j.linkedClasses.map(O=>{var U;return((U=O.master_subjects)==null?void 0:U.subject_name)??O.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${j.linkedClasses.map(O=>{const U=O.classroom_id?v[O.classroom_id]:null;return O.class_name+(U?` · 📍${U.building} ห้อง ${U.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${xt((P=j.actualEndPeriod)==null?void 0:P.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`})():""}

    ${n}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="bg-white rounded-2xl ${de} px-5 pt-5 pb-5 mb-5 flex items-center gap-5 overflow-hidden" style="${ve}">
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
      ${me}
    </div>

    <!-- สรุปของฉัน -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      ${[{label:"คอร์สวิชาของฉัน",value:f.length,icon:"📖",color:"text-emerald-700",bg:"bg-emerald-50",nav:"my-courses"},{label:"ห้องเรียน",value:d.length,icon:"🏫",color:"text-blue-700",bg:"bg-blue-50",nav:"my-classes"},{label:"คำร้องรออนุมัติ",value:$,icon:"🔔",color:$>0?"text-red-700":"text-gray-400",bg:"bg-red-50",nav:"requests"},{label:"Smart Classroom",value:"เปิดห้องสอนสด",icon:"👑",color:"text-amber-700",bg:"bg-amber-50",onclick:"window._openSmartClassroomLanding()"}].map(s=>`
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
      ${x.length>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${C}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${kt(i,e.teacher_code,b)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${_t(Q,p.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${Pt[ee]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${T.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':L.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${Z.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${T.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":L.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${T.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:L.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${se.map((s,y)=>{var U,ae;const g=Fe((U=s.period)==null?void 0:U.start_time,(ae=s.actualEndPeriod)==null?void 0:ae.end_time),P=g.label.startsWith("เสร็จ"),O=s.period?`${s.period.start_time.substring(0,5)}–${(s.actualEndPeriod??s.period).end_time.substring(0,5)}`:`คาบ ${s.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${P?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${P?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${P?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${s.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${P?"text-gray-400":"text-gray-700"} truncate">
                  ${s.linkedClasses.map(G=>{var te;return((te=G.master_subjects)==null?void 0:te.subject_name)??G.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${s.linkedClasses.map(G=>{const te=G.classroom_id?v[G.classroom_id]:null;return G.class_name+(te?` 📍${te.building} ห้อง ${te.room_number}`:"")}).join(" · ")} · ${O}
                </p>
              </div>
              <span id="today-cd-${y}" class="text-xs font-medium flex-shrink-0 ${g.cls}">${g.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),(N=document.getElementById("donor-sticker-btn"))==null||N.addEventListener("click",()=>{if(!ne)return;const s=Ae(),y=ne.color||"#f59e0b",g=parseInt(y.slice(1,3),16),P=parseInt(y.slice(3,5),16),O=parseInt(y.slice(5,7),16),U=String(ne.sticker??""),ae=/^https?:\/\//.test(U)?`<img src="${U}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${U}</div>`,G=document.createElement("div");G.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",G.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${g},${P},${O},0.85),rgba(${g},${P},${O},1))">
          ${ae}
          <p class="text-white font-bold text-base">${ne.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${ne.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${s.map(te=>pe>=(te.minTier??1)?`<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${te.icon}</span>
                     <span class="leading-snug">${te.text}</span>
                   </div>`:`<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${te.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${te.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${pe<4?`
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>`:""}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${g},${P},${O},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(G),G.addEventListener("click",te=>{te.target===G&&G.remove()})}),Z.length>0&&(Ie=setInterval(()=>{se.forEach((s,y)=>{var O,U;const g=document.getElementById(`today-cd-${y}`);if(!g){clearInterval(Ie);return}const P=Fe((O=s.period)==null?void 0:O.start_time,(U=s.actualEndPeriod)==null?void 0:U.end_time);g.textContent=P.label,g.className=`text-xs font-medium flex-shrink-0 ${P.cls}`})},3e4)),j&&(Se=setInterval(()=>{var g,P,O,U;const s=document.getElementById("active-class-countdown");if(!s){clearInterval(Se);return}Fe((g=j.period)==null?void 0:g.start_time,(P=j.actualEndPeriod)==null?void 0:P.end_time).label.startsWith("เสร็จ")?(clearInterval(Se),(O=document.getElementById("active-class-card"))==null||O.remove()):s.textContent=xt((U=j.actualEndPeriod)==null?void 0:U.end_time)},1e3)),document.getElementById("teacher-live-clock")){const s=()=>{const y=new Date,g=document.getElementById("teacher-live-clock");if(!g){clearInterval(Be);return}g.textContent=`${String(y.getHours()).padStart(2,"0")}:${String(y.getMinutes()).padStart(2,"0")}:${String(y.getSeconds()).padStart(2,"0")}`};s(),Be=setInterval(s,1e3)}e&&i.length&&(je=setInterval(()=>{const s=document.getElementById("wen-duty-card");if(!s){clearInterval(je),je=null;return}s.innerHTML=kt(i,e.teacher_code,b)},3e4)),e&&Q.length&&(Le=setInterval(()=>{const s=document.getElementById("wcal-upcoming-card");if(!s){clearInterval(Le),Le=null;return}s.innerHTML=_t(Q,p.semester_start)},1e3))}function Fs(e,a,t){var i,b;(i=document.getElementById("overview-customizer-modal"))==null||i.remove();const l=(e==null?void 0:e.overview_prefs)||null;let u=a.map(m=>m.key);if((b=l==null?void 0:l.iconOrder)!=null&&b.length){const m=new Set(u),c=l.iconOrder.filter(_=>m.has(_)),h=u.filter(_=>!c.includes(_));u=[...c,...h]}const f=new Set(((l==null?void 0:l.hiddenKeys)||[]).filter(m=>u.includes(m))),d=Object.fromEntries(a.map(m=>[m.key,m])),p=document.createElement("div");p.id="overview-customizer-modal",p.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const $=()=>u.map((m,c)=>{const h=d[m];if(!h)return"";const _=f.has(m),T=h.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${_?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${h.from},${h.to})">${h.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${T}</span>
      <button type="button" data-oc-up="${m}" ${c===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${m}" ${c===u.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${m}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${_?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${_?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),k=()=>{const m=p.querySelector("#oc-list");m&&(m.innerHTML=$()),E()},E=()=>{p.querySelectorAll("[data-oc-toggle]").forEach(m=>m.onclick=()=>{const c=m.dataset.ocToggle;f.has(c)?f.delete(c):f.add(c),k()}),p.querySelectorAll("[data-oc-up]").forEach(m=>m.onclick=()=>{const c=u.indexOf(m.dataset.ocUp);c>0&&([u[c-1],u[c]]=[u[c],u[c-1]],k())}),p.querySelectorAll("[data-oc-down]").forEach(m=>m.onclick=()=>{const c=u.indexOf(m.dataset.ocDown);c<u.length-1&&([u[c+1],u[c]]=[u[c],u[c+1]],k())})};p.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <div>
          <p class="font-bold text-gray-800 text-sm">⚙️ ปรับหน้าภาพรวมแบบรวดเร็ว</p>
          <p class="text-[11px] text-gray-400 mt-0.5">ซ่อน/แสดง และเรียงลำดับไอคอน "ระบบอื่น ๆ"</p>
        </div>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" id="oc-close">×</button>
      </div>
      <div class="px-4 py-2 overflow-y-auto flex-1" id="oc-list">
        ${$()}
      </div>
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0 space-y-2">
        <button type="button" id="oc-save" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">บันทึก</button>
        <button type="button" id="oc-reset" class="w-full py-2 rounded-xl text-xs text-gray-400 hover:text-gray-600 transition">รีเซ็ตเป็นค่าเริ่มต้น</button>
      </div>
    </div>`,document.body.appendChild(p),E(),p.addEventListener("click",m=>{m.target===p&&p.remove()}),p.querySelector("#oc-close").addEventListener("click",()=>p.remove()),p.querySelector("#oc-save").addEventListener("click",async()=>{const m=p.querySelector("#oc-save");m.disabled=!0,m.textContent="กำลังบันทึก...";try{const c={iconOrder:u,hiddenKeys:[...f]};await mt(e.id,{overview_prefs:c}),e.overview_prefs=c,p.remove(),J("บันทึกการปรับแต่งแล้ว","success"),Ct(e,t)}catch(c){console.error(c),J("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),m.disabled=!1,m.textContent="บันทึก"}}),p.querySelector("#oc-reset").addEventListener("click",async()=>{try{await mt(e.id,{overview_prefs:null}),e.overview_prefs=null,p.remove(),J("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),Ct(e,t)}catch(m){console.error(m),J("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function Hs(e,a,t,l,u){const f=l.samaiLogoBwUrl??l.samaiLogoUrl??"",d=Number(e.credit??1),p=d*2,$=d*2*20,E=String(e.grade_level??"").replace(/[^0-9]/g,""),i=["AGM","AGMVOC"].includes(e.subject_group??""),b=u.find(se=>se.dept_code===e.dept)??{},m=b.dept_name??e.dept??"",c=b.head_name??"",h=b.head_sign_url??"",_=l.samaiSchoolName??"",T=l.samaiDirectorName??"",L=l.samaiDirectorSignUrl??"",A=i?l.agmAcademicHeadName??l.samaiAcademicHeadName??"":l.samaiAcademicHeadName??"",q=new Date,Q=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],v=`${q.getDate()} ${Q[q.getMonth()]} พ.ศ. ${q.getFullYear()+543}`,M=l.academicYear??q.getFullYear()+543,Y=l.semester??1,oe=(t==null?void 0:t.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",ee=a.map(se=>se.class_name).join(", "),Z=E+(ee?" "+ee:""),re=i?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",j=`<!DOCTYPE html>
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
    ${f?`<img src="${f}" style="width:72px;height:72px;object-fit:contain;" onerror="this.style.display='none'"/>`:'<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${o(_)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${o(v)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${Y} ปีการศึกษา ${M}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${o(_)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${o((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${o(oe)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${o(m)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${o(e.subject_name??"")}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${o(e.subject_code??"")}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${d}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${p}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${$}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${i?"อิสลามศึกษา":"มัธยมศึกษา"}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${o(Z)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${o((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${h?`<img src="${o(h)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${o(c)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${o(m)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${o(A)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${o(re)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${L?`<img src="${o(L)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${o(T)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${o(_)}</div>

</div>
</body></html>`;Bt(j)}export{Hs as _openLessonPlanApproval,kt as _renderWenDutyCard,_t as _renderWorkCalendarUpcoming,ca as openCourseDocPage2Modal,$a as renderAnnouncementsView,ja as renderAttendance,La as renderAttendanceGrid,Qs as renderClassDetail,_a as renderClassEditForm,Js as renderClassForm,Zs as renderCourseDocLangConfig,pa as renderCourseForm,xa as renderExamDocuments,va as renderGrades,fa as renderGradesGrid,Ta as renderLifeSkillScore,ka as renderMyClasses,da as renderMyCourses,Aa as renderPrayerRoomMonitor,Ia as renderPrayerScore,ua as renderProfile,ma as renderProfileSetup,Ba as renderReadingScore,ya as renderRequests,Ea as renderSchedule,Ca as renderScheduleBuilder,ea as renderScheduleGrid,ha as renderScoreColumns,Ct as renderTeacherOverview};
