const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-CWYJTdOa.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-smart-classroom-DZSSjXJI.js","assets/ui-MMtcTwtt.js","assets/teacher-Cbd3fiuS.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sync-CtuAgrx7.js","assets/theme-qDnPEUQn.js","assets/azfutsal-modal-CITqdeT7.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CAl1Kmx3.js","assets/teacher-views-utils-bZoYj54P.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-d_408eQI.js","assets/sports-portals.js_v_10.22-7yFaQki7.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/tutorial-D2C4vUJE.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-JnlABjxU.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-CfDHgG4i.js","assets/teacher-views-attendance-DkKZdoEb.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-CXFdJBGK.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-quiz-monitor-BXd4d18R.js","assets/teacher-views-quiz-analytics-D6GQhJUz.js","assets/teacher-views-dashboard-B0a46sXh.js","assets/teacher-views-classes-DgW_t4uH.js","assets/pp5-doc-WG5YzWe3.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-BgLV29Ng.js","assets/sports-portals.js_v_10.22-0gLUuL_V.js"])))=>i.map(i=>d[i]);
import{a as Q,g as ue,_ as be}from"./ui-MMtcTwtt.js";import{getDepartments as We,getTeachers as St,getSubjectCoTeachers as Kt,updateMyProfile as at,getCourseDocPage2 as Jt,getSystemConfig as Ie,getMySubjects as jt,getMasterSubjects as Lt,getMyClasses as ot,getUniqueRooms as Tt,getUniqueReligionRooms as At,getHomeroomTeachers as It,getCourseDocLangSettings as Qt,getCourseSyllabus as Zt,getLessonPlans as es,findCurriculumStandards as ts,saveCourseDocPage2 as ss,getClassStudents as as,getMySchedule as os,getClassScheduleLinks as ns,getPeriods as ls,getClassrooms as rs,getWorkCalendarEvents as is,getExecutiveOverviewStats as ds,updateTeacher as mt}from"./api-CWYJTdOa.js";import{c as Bt,s as Ke}from"./supabase-BV-W2lsh.js";import"./sync-CtuAgrx7.js";import{o as Pt}from"./print-overlay-BVfxEd6n.js";import{_DAYS_TH_FULL as Mt,setActiveNav as ke,setTitle as Ee,setContent as ge,SELECT_CLS as me,INPUT_CLS as V,CREDIT_OPTS as cs,GRADE_OPTS as Xe,formatPhone as Ve,_htmlEsc as o,_dutyCountdownInfo as ps,_teacherPositionList as ut,_currentWeek as ms,renderIconTile as Nt,_activeRemainingDisplay as xt,_countdownInfo as Fe}from"./teacher-views-utils-bZoYj54P.js";import{b as Zs,e as ea,a as ta,r as sa}from"./teacher-views-classes-DgW_t4uH.js";import{f as _a,c as ka,g as Ea,h as Ca,i as Sa,d as ja}from"./teacher-views-classes-DgW_t4uH.js";import{uploadTeacherPhoto as us}from"./storage-CuUjCgvI.js";import{o as xs}from"./pp5-doc-WG5YzWe3.js";import{_ as bs}from"./teacher-views-grades-CXFdJBGK.js";import{r as Ta,a as Aa,b as Ia}from"./teacher-views-grades-CXFdJBGK.js";import{renderAttendance as Pa,renderAttendanceGrid as Ma,renderLifeSkillScore as Na,renderPrayerRoomMonitor as Da,renderPrayerScore as Oa,renderReadingScore as Ra}from"./teacher-views-attendance-DkKZdoEb.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./score-display-CQ4dUIPx.js";import"./confetti-loader-BAN5Lv-C.js";import"./regrade-api-JnlABjxU.js";import"./score-qr-scanner-CfDHgG4i.js";import"./leave-time-CrS9gT63.js";const Dt="https://zhjqkylesnhcotpkzoxr.supabase.co",Ot="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let he=null;function bt(e,a,t){const l=new Date(a+"T00:00:00"),c=new Date(e+"T00:00:00"),g=Math.floor((c-l)/864e5);if(g<0)return null;const i=Math.floor(g/7)+1;return i<=t?i:null}function gs(e,a,t){const[l,c]=e.includes(":")?e.split(":"):[null,e];return(l===null||l===t)&&c===a}async function vs(e){if(!e)return null;he||(he=Bt(Dt,Ot));const[a,t,l]=await Promise.all([he.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),he.from("duty_points").select("assigned_to"),he.from("settings").select("week_start_date,total_weeks").single()]),c=l.data||{},g=c.week_start_date,i=c.total_weeks||20;if(!g)return null;const d=new Date().toISOString().slice(0,10),_=bt(d,g,i)||1;if(_<=5)return{grade:"A",score:100,week:_};const E=String(e);let C=0;for(const $ of t.data||[])for(const T of $.assigned_to||[])(T.includes(":")?T.split(":")[1]:T)===E&&C++;if(C===0)return null;const p={};for(const $ of a.data||[]){const T=bt($.date,g,i);T!==null&&(p[T]||(p[T]=[]),p[T].push($))}const w=5,f=Math.min(_,i-2);let x=0;for(let $=1;$<=f;$++)if($<=w)x+=100;else{const T=p[$]||[],D=T.length,Y=T.filter(ae=>ae.is_late).length,v=D-Y,I=Math.min(100,Math.round(D/C*100)),X=D>0?Math.max(0,Math.round(v/D*100)):100;x+=Math.round(I*.6+X*.4)}const b=Math.round(x/f);return{grade:b>=90?"A":b>=75?"B":"C",score:b,week:_}}async function fs(e){if(!e)return[];he||(he=Bt(Dt,Ot));const{data:a,error:t}=await he.from("duty_points").select("name, time, assigned_to");if(t||!a)return[];const l=String(e),c=Mt[new Date().getDay()];return a.filter(g=>(g.assigned_to??[]).some(i=>gs(i,l,c))).map(g=>{const[i,d]=String(g.time??"").split("-").map(_=>_.trim());return{name:g.name,time:g.time,start_time:i,end_time:d}})}function Rt({prefix:e,samaiRooms:a,religionRooms:t,homeroomRooms:l,assignments:c,teacherId:g,academicYear:i,semester:d}){const _=(E,C,p,w,m)=>{const f=`${e}-advisor-rooms-${p}`,x=`${e}-room-${p}`,b=(l??[]).filter($=>$.category===E&&Number($.academic_year)===Number(i)&&Number($.semester)===Number(d)),L=new Map((c??[]).filter($=>$.category===E).map($=>[$.main_room,$]));return`<div id="${e}-room-${p}-wrap" class="space-y-2">
      <button type="button" data-advisor-room-toggle="${f}" aria-expanded="false"
        class="w-full flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 px-4 py-3 text-left transition">
        <span class="font-semibold text-sm text-gray-700">${m} ครูที่ปรึกษา${w}</span>
        <span class="flex items-center gap-2 text-xs text-gray-400">
          <span data-advisor-room-count="${x}">0 ห้อง</span><span data-advisor-room-chevron="${f}">▾</span>
        </span>
      </button>
      <div id="${f}" class="hidden border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-52 overflow-y-auto">
        <p class="text-[11px] text-gray-400 mb-2">เลือกได้มากกว่า 1 ห้อง · ห้องที่มีครูคนอื่นรับผิดชอบอยู่จะเลือกไม่ได้</p>
        ${C.length?C.map($=>{var X;const T=L.get($),D=T&&Number(T.teacher_id)===Number(g),Y=!!T&&!D,v=((X=T==null?void 0:T.teachers)==null?void 0:X.full_name)||"มีครูที่ปรึกษาแล้ว",I=b.some(ae=>ae.main_room===$);return`<label class="flex items-start gap-2 text-sm rounded-lg px-2 py-1.5 ${Y?"bg-gray-50 text-gray-400 cursor-not-allowed":"cursor-pointer hover:bg-emerald-50 hover:text-emerald-700"}">
            <input type="checkbox" name="${x}" value="${o($)}" data-advisor-room="${x}" ${I?"checked":""} ${Y?"disabled":""} class="text-emerald-600 rounded mt-0.5" />
            <span class="min-w-0 flex-1"><span class="block">${o($)}</span>${Y?`<span class="block text-[11px] text-gray-400">🔒 ${o(v)}</span>`:""}</span>
          </label>`}).join(""):`<p class="text-xs text-gray-400">ยังไม่มีห้อง${w}</p>`}
      </div>
    </div>`};return`<div class="border-t border-gray-100 pt-4 space-y-3">
    <label class="block text-sm font-semibold text-gray-700">🏠 ห้องที่ปรึกษา</label>
    ${_("สามัญ",a,"samai","สามัญ","🏫")}
    ${_("ศาสนา",t,"religion","ศาสนา","🕌")}
  </div>`}function qt(e=document){const a=()=>e.querySelectorAll("[data-advisor-room-count]").forEach(t=>{const l=t.dataset.advisorRoomCount,c=e.querySelectorAll(`input[data-advisor-room="${l}"]:checked`).length;t.textContent=`${c} ห้อง`});e.querySelectorAll("[data-advisor-room-toggle]").forEach(t=>{t.addEventListener("click",()=>{const l=e.querySelector(`#${t.dataset.advisorRoomToggle}`);if(!l)return;const c=l.classList.contains("hidden");l.classList.toggle("hidden",!c),t.setAttribute("aria-expanded",String(c));const g=e.querySelector(`[data-advisor-room-chevron="${t.dataset.advisorRoomToggle}"]`);g&&(g.textContent=c?"▴":"▾")})}),e.querySelectorAll("input[data-advisor-room]").forEach(t=>t.addEventListener("change",a)),a()}async function ba(e){ke("my-courses"),Ee("คอร์สวิชาของฉัน","courses"),ge(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[a,t]=await Promise.all([e?jt(e.id):Lt().catch(()=>[]),e?ot(e.id).catch(()=>[]):Promise.resolve([])]),l=a,c=p=>t.filter(w=>{var m;return Number(w.course_id??((m=w.master_subjects)==null?void 0:m.id))===Number(p)}),g=p=>Number.isInteger(p)?String(p):Number(p).toFixed(1).replace(/\.0$/,""),i=p=>{const w=Number(p.credit),m=Number.isFinite(w)&&w>0;return{roomCount:c(p.id).length,credit:m?g(w):"—",periodsPerWeek:m?g(w*2):"—",periodsPerTerm:m?g(w*40):"—"}},d=p=>String(p.dept??p.subject_group??"").trim()||"รายวิชาอื่น ๆ",_=[...a.reduce((p,w)=>{const m=d(w);return p.has(m)||p.set(m,[]),p.get(m).push(w),p},new Map).entries()].sort(([p],[w])=>p.localeCompare(w,"th",{numeric:!0})),E=(p,w,m,f)=>`<div class="rounded-xl border ${f} px-3 py-2.5 min-w-0">
      <div class="flex items-center gap-2"><span class="text-base">${p}</span><strong class="text-lg leading-none text-gray-800">${w}</strong></div>
      <p class="mt-1 text-[10px] font-semibold text-gray-500">${m}</p>
    </div>`,C=p=>{const w=i(p);return`<article class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden">
        <div class="p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">${o(p.subject_code??"—")}</span>
                ${p.dept?`<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">${o(p.dept)}</span>`:""}
              </div>
              <h3 class="mt-2 text-base sm:text-lg font-extrabold text-gray-900 leading-snug">${o(p.subject_name)}</h3>
              <p class="mt-1 text-xs text-gray-400">ระดับชั้น ${o(p.grade_level??"ไม่ระบุ")}</p>
            </div>
            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center text-xl">📚</div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${E("🏫",w.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${E("🎓",w.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${E("🗓️",w.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${E("⏱️",w.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
          </div>

          <div class="grid sm:grid-cols-[1fr_auto] gap-2 mt-4">
            <button class="course-workspace-btn min-h-[44px] rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-4 flex items-center justify-center gap-2 shadow-sm"
              data-sid="${p.id}">📘 กำหนดการสอนและแผนหน้าเดียว</button>
            <button onclick="window._openRegisterClass(${p.id})"
              class="min-h-[44px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 flex items-center justify-center gap-2">＋ เปิดห้องเรียน</button>
          </div>
        </div>

        <details class="border-t border-gray-100 group">
          <summary class="list-none cursor-pointer px-4 sm:px-5 py-3 flex items-center justify-between text-xs font-bold text-gray-600 hover:bg-gray-50 select-none">
            <span>เครื่องมือและเอกสารของรายวิชา</span><span class="text-gray-400 group-open:rotate-180 transition">⌄</span>
          </summary>
          <div class="px-4 sm:px-5 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button class="ccm-open-btn min-h-[40px] text-xs text-indigo-700 font-semibold border border-indigo-100 bg-indigo-50/50 rounded-xl hover:bg-indigo-50" data-sid="${p.id}" data-sname="${o(p.subject_name)}">⚙️ คอลัมน์คะแนน</button>
            <button onclick="window._openCourseDocPage2(${p.id})" class="min-h-[40px] text-xs text-emerald-700 font-semibold border border-emerald-100 bg-emerald-50/50 rounded-xl hover:bg-emerald-50">📝 คำอธิบายรายวิชา</button>
            <button class="lesson-plan-btn min-h-[40px] text-xs text-sky-700 font-semibold border border-sky-100 bg-sky-50/50 rounded-xl hover:bg-sky-50" data-sid="${p.id}">📋 ใบขออนุญาต</button>
            <button class="pp5-course-btn min-h-[40px] text-xs text-violet-700 font-semibold border border-violet-100 bg-violet-50/50 rounded-xl hover:bg-violet-50" data-sid="${p.id}">💾 เอกสาร ปพ.5</button>
          </div>
          <div class="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-end gap-2 flex-wrap">
            <button onclick="window._copyCourse(${p.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-purple-700 hover:bg-purple-50">📋 ทำสำเนา</button>
            <button onclick="window._editCourse(${p.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-gray-600 hover:bg-gray-100">✏️ แก้ไข</button>
            <button class="cd2-del-course-btn min-h-[36px] px-3 rounded-lg border border-red-100 bg-white text-xs font-semibold text-red-500 hover:bg-red-50" data-id="${p.id}" data-name="${o(p.subject_name)}">🗑️ ลบ</button>
          </div>
        </details>
      </article>`};ge(`<div class="animate-fade">
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
        ${_.map(([p,w])=>`<section>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">🏷️</div>
            <div><h2 class="font-extrabold text-gray-800">กลุ่มสาระ ${o(p)}</h2><p class="text-[11px] text-gray-400">${w.length} คอร์ส · ${w.reduce((m,f)=>m+c(f.id).length,0)} ห้องเรียน</p></div>
            <div class="h-px bg-gray-200 flex-1"></div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${w.map(C).join("")}</div>
        </section>`).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(p=>{p.addEventListener("click",()=>{window._deleteCourse(Number(p.dataset.id),p.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(p=>{p.addEventListener("click",()=>{bs(parseInt(p.dataset.sid),p.dataset.sname,t)})}),document.querySelectorAll(".course-workspace-btn").forEach(p=>{p.addEventListener("click",()=>{const w=parseInt(p.dataset.sid,10),m=a.find(f=>f.id===w);m&&Ft(e,m,t)})}),document.querySelectorAll(".lesson-plan-btn").forEach(p=>{p.addEventListener("click",async()=>{const w=parseInt(p.dataset.sid),m=a.find(T=>T.id===w);if(!m)return;const f=t.filter(T=>{var D;return T.course_id===w||((D=T.master_subjects)==null?void 0:D.id)===w}),{getSystemConfig:x,getDepartments:b}=await be(async()=>{const{getSystemConfig:T,getDepartments:D}=await import("./api-CWYJTdOa.js");return{getSystemConfig:T,getDepartments:D}},__vite__mapDeps([0,1,2,3,4])),[L,$]=await Promise.all([x().catch(()=>({})),b().catch(()=>[])]);Vs(m,f,e,L,$)})}),document.querySelectorAll(".pp5-course-btn").forEach(p=>{p.addEventListener("click",()=>{const w=parseInt(p.dataset.sid),m=t.filter(f=>{var x;return f.course_id===w||((x=f.master_subjects)==null?void 0:x.id)===w});m.length===1?openPP5Doc(m[0].id):xs(m)})})}catch{Q("โหลดข้อมูลไม่สำเร็จ","error")}}async function Ft(e,a,t){var E,C,p,w,m;(E=document.getElementById("course-workspace-modal"))==null||E.remove();const l=Number(a.id),c=t.filter(f=>{var x;return Number(f.course_id??((x=f.master_subjects)==null?void 0:x.id))===l}),g={class_name:"ทุกห้องในคอร์ส",course_id:l,master_subjects:a},i=document.createElement("div");i.id="course-workspace-modal",i.className="fixed inset-0 z-[95] bg-black/60 flex items-center justify-center p-2 sm:p-4",i.innerHTML=`<div class="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl h-[96vh] sm:h-auto sm:max-h-[92vh] overflow-hidden flex flex-col">
    <header class="flex-shrink-0 px-4 sm:px-6 py-4 border-b bg-white flex items-start justify-between gap-3">
      <div class="min-w-0">
        <span class="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold">📘 ออกแบบการสอนของคอร์ส</span>
        <h2 class="mt-2 text-lg sm:text-xl font-extrabold text-gray-900 truncate">${o(a.subject_name)}</h2>
        <p class="text-xs text-gray-500 mt-0.5"><span class="font-mono text-blue-600">${o(a.subject_code??"—")}</span> · ${o(a.grade_level??"—")} · ${c.length} ห้องเรียน</p>
      </div>
      <button data-close class="w-10 h-10 flex-shrink-0 rounded-xl border bg-white text-gray-400 text-xl hover:text-gray-700">✕</button>
    </header>
    <div id="course-workspace-body" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6">
      <div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลคอร์ส...</div>
    </div>
  </div>`,document.body.appendChild(i);const d=()=>i.remove();i.querySelector("[data-close]").addEventListener("click",d),i.addEventListener("click",f=>{f.target===i&&d()});const _=i.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:f,canUseSmartClassroomForClass:x},{openLessonPlanAIWorkspace:b,openLessonPlanDocument:L}]=await Promise.all([be(()=>import("./teacher-views-smart-classroom-DZSSjXJI.js"),__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37])),be(()=>import("./lesson-plan-ai-workspace-BgLV29Ng.js"),__vite__mapDeps([37,0,1,2,3,4,6,21]))]),[$,T,D]=await Promise.all([Zt(l).catch(()=>[]),es(l).catch(()=>[]),f(e)]),Y=c.filter(A=>x(D.unlocked,e,A.id)),v=D.unlocked||Y.length>0,I=()=>Ft(e,a,t),X=$.length?$.map(A=>`<div class="rounded-xl border border-blue-100 bg-white px-3 py-2.5 flex gap-3">
      <span class="flex-shrink-0 px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-bold h-fit">สัปดาห์ ${A.week_start}${A.week_end!==A.week_start?`–${A.week_end}`:""}</span>
      <div class="min-w-0"><p class="text-sm font-bold text-gray-800">${o(A.topic)}</p>${A.unit_title?`<p class="text-[11px] text-blue-600 mt-0.5">${o(A.unit_title)}</p>`:""}</div>
    </div>`).join(""):'<div class="rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>',ae=c.map(A=>`<option value="${A.id}">${o(A.class_name??`ห้อง ${A.id}`)}</option>`).join("");_.innerHTML=`<div class="grid lg:grid-cols-2 gap-4 items-start">
        <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-blue-950">📘 กำหนดการสอนของคอร์ส</h3><p class="text-xs text-blue-700/70 mt-1">สร้างครั้งเดียว แล้วทุกห้องในรายวิชานี้อ้างอิงชุดเดียวกัน</p></div>
            <button id="cw-ai-schedule" class="min-h-[44px] px-4 rounded-xl ${v?"bg-blue-700 hover:bg-blue-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${v?"":"disabled"}>🤖 สร้างด้วย AI</button>
          </div>
          <div class="mt-4 space-y-2 max-h-72 overflow-y-auto pr-1">${X}</div>
        </div>

        <div class="rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-violet-950">📝 แผนการสอนหน้าเดียว</h3><p class="text-xs text-violet-700/70 mt-1">ออกแบบแผนกลางของคอร์ส ใช้ร่วมกันได้ทุกห้อง และค่อยแยกบันทึกหลังสอนตามห้อง</p></div>
            <button id="cw-ai-plan" class="min-h-[44px] px-4 rounded-xl ${v?"bg-violet-700 hover:bg-violet-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${v?"":"disabled"}>✨ สร้างแผนด้วย AI</button>
          </div>
          ${T.length?`<div class="mt-4 space-y-2">${T.map(A=>`<button class="cw-plan-row w-full text-left rounded-xl border border-violet-100 bg-white px-3 py-3 hover:border-violet-300 transition" data-plan-id="${A.id}"><p class="text-sm font-bold text-gray-800">${o(A.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${A.week_start}${A.week_end!==A.week_start?`–${A.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
        </div>
    </div>
    ${T.length&&c.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้องสำหรับบันทึกหลังสอน</h3><p class="text-xs text-gray-400 mt-1">แผนเป็นของคอร์ส แต่บันทึกและลายเซ็นจะแยกตามห้อง</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${ae}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`,(C=_.querySelector("#cw-ai-schedule"))==null||C.addEventListener("click",()=>b({teacher:e,cls:g,courseId:l,syllabusItems:$,lessonPlans:T,currentWeek:1,initialMode:"schedule",onSaved:I})),(p=_.querySelector("#cw-ai-plan"))==null||p.addEventListener("click",()=>b({teacher:e,cls:g,courseId:l,syllabusItems:$,lessonPlans:T,currentWeek:1,initialMode:"plan",onSaved:I}));let le=null;const J=_.querySelector("#cw-document-picker"),re=()=>{J&&(J.classList.add("hidden"),J.classList.remove("flex"))};_.querySelectorAll(".cw-plan-row").forEach(A=>A.addEventListener("click",()=>{le=T.find(W=>W.id===parseInt(A.dataset.planId,10))??null,!(!le||!c.length||!J)&&(J.classList.remove("hidden"),J.classList.add("flex"))})),(w=_.querySelector("#cw-document-cancel"))==null||w.addEventListener("click",re),J==null||J.addEventListener("click",A=>{A.target===J&&re()}),(m=_.querySelector("#cw-document-open"))==null||m.addEventListener("click",()=>{var P;const A=parseInt((P=_.querySelector("#cw-document-class"))==null?void 0:P.value,10),W=c.find(de=>de.id===A);!le||!W||(re(),L({plan:le,cls:W,teacher:e,classId:W.id,currentWeek:le.week_start}))})}catch(f){_.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${o(ue(f))}</div>`}}const He={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 2 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"٢ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["ڤياوايان ڤمبلاجارن","ڤتوك"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمودان أساسيان",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["معايير التعلم","المؤشرات"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"2 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Piawaian pembelajaran","Petunjuk"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let Ge=null;async function ys(){if(Ge)return Ge;const e=await Qt().catch(()=>[]);return Ge=Object.fromEntries(e.map(a=>[a.lang_key,a.settings??{}])),Ge}async function ga(e,a){var ye,ce;const[t,l]=await Promise.all([Jt(a.id).catch(n=>(Q("โหลดคำอธิบายฯ ไม่สำเร็จ: "+ue(n),"error"),null)),ys()]),c=n=>{const F=Array.isArray(n)?n:["มาตรฐานการเรียนรู้","ตัวชี้วัด"];return F.length?F.map(B=>String(B??"")):["มาตรฐานการเรียนรู้","ตัวชี้วัด"]},g=(n,F)=>{const j=(Array.isArray(n)?n:[]).map(N=>{const q=Array.isArray(N)?N:Object.values(N??{});return Array.from({length:F},(U,H)=>String(q[H]??""))});return j.length?j:Array.from({length:12},()=>Array.from({length:F},()=>""))},i=n=>[...new Set((Array.isArray(n)?n:[]).map(F=>parseInt(F,10)).filter(F=>Number.isFinite(F)&&F>0))],d=a.subject_group==="ACDMVOC",_=(n,F,B)=>{const N=(Array.isArray(n)?n:[]).map(q=>Object.fromEntries(F.map(U=>[U,String((q==null?void 0:q[U])??"")])));for(;N.length<B;)N.push(Object.fromEntries(F.map(q=>[q,""])));return N};let E=c(t==null?void 0:t.table_columns),C=g(t==null?void 0:t.table_rows,E.length),p=i(t==null?void 0:t.midterm_objective_items),w=i(t==null?void 0:t.between_objective_items),m=i(t==null?void 0:t.final_objective_items),f=(t==null?void 0:t.between_objective_extra)??"",x=(t==null?void 0:t.midterm_objective_extra)??"",b=(t==null?void 0:t.final_objective_extra)??"",L=["auto","rtl","ltr"].includes(t==null?void 0:t.text_direction)?t.text_direction:"auto",$=(t==null?void 0:t.description)||"",T=(t==null?void 0:t.signer_name)||a.learning_area||"",D=(ye=t==null?void 0:t.topic_list)!=null&&ye.length?t.topic_list:[""],Y=_(t==null?void 0:t.voc_objectives,["objective","competency"],10),v=_(t==null?void 0:t.voc_schedule,["week","content","note"],20),I="",X="th";const ae=()=>{const n={...He.th,...He[X]},F=(l==null?void 0:l[X])??{},B={...n,...F};return F.pickerTitles&&(B.pickerTitles={...n.pickerTitles,...F.pickerTitles}),B},le=()=>{if(document.getElementById("cd2-rtl-font"))return;const n=document.createElement("link");n.id="cd2-rtl-font",n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(n)},[J,re]=await Promise.all([Ie().catch(()=>({})),We().catch(()=>[])]),A=re.find(n=>n.dept_code===a.dept),W=(A==null?void 0:A.dept_name)??a.dept??"";(ce=document.getElementById("course-doc-page2-modal"))==null||ce.remove();const P=document.createElement("div");P.id="course-doc-page2-modal",P.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(P);const de=(n,F="")=>{const j=[n.length?[...n].sort((N,q)=>N-q).join(", "):"",F.trim()].filter(Boolean);return j.length?j.join(", "):ae().notSelected},pe=()=>{const n=C.length;return Array.from({length:n},(F,B)=>B+1).filter(F=>{var B;return(B=C[F-1])==null?void 0:B.some(j=>String(j??"").trim())})},Z=()=>{const n=ae(),F=pe(),B=n.dir==="rtl";B&&le();const j=L==="auto"?n.dir:L,N=j==="rtl"?"text-right":"text-left",q=B?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";P.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${j}" style="${q}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${n.title}</h2>
          <p class="text-xs text-gray-400 truncate">${o(a.subject_name)} · ${o(a.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${n.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${n.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${j}" style="${q}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(He).map(U=>{var H;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${X===U.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${U.key}">${((H=l==null?void 0:l[U.key])==null?void 0:H.label)||U.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${j}" style="${q}">
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
                <span class="text-xs text-gray-400">${o(a.grade_level||"")} · ${o(W||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${D.map((U,H)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${V} flex-1" value="${o(U)}"
                      placeholder="${o(n.topicPlaceholder)}" dir="${j}" data-idx="${H}" />
                    ${D.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${H}">✕</button>`:""}
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

            ${I?`<p class="text-xs mt-3 ${I.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${o(I)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${n.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${j}"
                  class="${V} ${N} min-h-[132px] leading-7"
                  placeholder="${o(n.descPlaceholder)}">${o($)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.dirLabel}</span>
                  <select id="cd2-dir" class="${me}">
                    <option value="auto" ${L==="auto"?"selected":""}>${n.dirAuto}</option>
                    <option value="rtl" ${L==="rtl"?"selected":""}>${n.dirRTL}</option>
                    <option value="ltr" ${L==="ltr"?"selected":""}>${n.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.signerLabel}</span>
                  <input id="cd2-signer" class="${V} ${N}" value="${o(T)}" placeholder="${o(n.signerPlaceholder)}" dir="${j}" />
                  <p class="text-xs text-gray-400 mt-1">${n.signerHint}</p>
                </label>
              </div>
            </div>
          </div>

          ${d?`
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
                  ${Y.map((U,H)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${H+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${H}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${o(U.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${H}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${o(U.competency)}</textarea>
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
                  ${v.map((U,H)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${H}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${o(U.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${H}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${o(U.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${H}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${o(U.note)}" />
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
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${j}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${n.rowHeader}</th>
                    ${E.map((U,H)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${H}" class="cd2-col ${V} ${N} py-2 font-semibold" value="${o(U)}" dir="${j}" />
                          ${E.length>1?`<button data-del-col="${H}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${C.map((U,H)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${H+1}</td>
                      ${E.map((r,u)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${H}" data-cell="${u}" rows="2" dir="${j}"
                            class="cd2-cell ${N} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${o(U[u]||"")}</textarea>
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
              <button id="cd2-pick-between" class="${N} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${o(de(w,f))}</p>
              </button>
              <button id="cd2-pick-mid" class="${N} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${o(de(p,x))}</p>
              </button>
              <button id="cd2-pick-final" class="${N} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${o(de(m,b))}</p>
              </button>
            </div>
            ${F.length?"":`<p class="text-xs text-amber-600 mt-3">${n.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,xe()},ee=()=>{var n,F,B;return D=[...P.querySelectorAll(".cd2-topic-input")].map(j=>j.value.trim()).filter(Boolean),D.length||(D=[""]),$=((n=P.querySelector("#cd2-description"))==null?void 0:n.value)??"",T=((F=P.querySelector("#cd2-signer"))==null?void 0:F.value)??"",L=((B=P.querySelector("#cd2-dir"))==null?void 0:B.value)??L,P.querySelectorAll(".cd2-col").forEach(j=>{E[Number(j.dataset.col)]=j.value}),P.querySelectorAll(".cd2-cell").forEach(j=>{const N=Number(j.dataset.row),q=Number(j.dataset.cell);C[N]||(C[N]=Array.from({length:E.length},()=>"")),C[N][q]=j.value}),P.querySelectorAll(".cd2-voc-obj-cell").forEach(j=>{const N=Number(j.dataset.vocObjRow),q=j.dataset.vocObjField;Y[N]||(Y[N]={objective:"",competency:""}),Y[N][q]=j.value}),P.querySelectorAll(".cd2-voc-sch-cell").forEach(j=>{const N=Number(j.dataset.vocSchRow),q=j.dataset.vocSchField;v[N]||(v[N]={week:"",content:"",note:""}),v[N][q]=j.value}),{desc:$,signer:T}},ie=n=>{const F=Array.isArray(n==null?void 0:n.columns)&&n.columns.length?n.columns.map(q=>String(q??"").trim()).filter(Boolean):ae().colsExtra,B=Array.isArray(n==null?void 0:n.rows)?n.rows.map(q=>{const U=Array.isArray(q)?q:Object.values(q??{});return Array.from({length:F.length},(H,r)=>String(U[r]??"").trim())}).filter(q=>q.some(Boolean)):[];E=F,C=B.length?B:Array.from({length:12},()=>Array.from({length:E.length},()=>"")),n!=null&&n.description&&($=String(n.description)),p=i((n==null?void 0:n.midterm_items)??(n==null?void 0:n.midtermObjectiveItems)),w=i((n==null?void 0:n.between_items)??(n==null?void 0:n.betweenObjectiveItems)),m=i((n==null?void 0:n.final_items)??(n==null?void 0:n.finalObjectiveItems));const j=pe(),N=Math.ceil(j.length/2);p.length||(p=j.slice(0,Math.min(3,N))),w.length||(w=j.slice(0,Math.min(4,j.length))),m.length||(m=j.slice(-Math.min(3,j.length)))},ve=n=>n.some(B=>String(B.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:n.map((B,j)=>[`${B.item_no??j+1}.${B.learning_outcome_text??B.indicator_text??B.standard_text??""}`]),description:$,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((B,j)=>j+1),final_items:n.slice(Math.ceil(n.length/2)).map((B,j)=>j+1+Math.ceil(n.length/2))}:{source:"curriculum",columns:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],rows:n.map((B,j)=>[`${B.item_no??j+1}.) ${B.standard_code||B.standard_text||""}`.trim(),B.indicator_text||B.learning_outcome_text||""]),description:$,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((B,j)=>j+1),final_items:n.slice(Math.ceil(n.length/2)).map((B,j)=>j+1+Math.ceil(n.length/2))},te=async()=>{var S,k,O,s,y;const n=ae(),F=E.length===1||a.subject_group&&!["ACDM","AGM"].includes(a.subject_group),B=F?n.colsExtra:n.colsBasic,j=F?`single column named "${B[0]}"`:`two columns named "${B[0]}" and "${B[1]}"`,N=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${n.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${a.subject_name||""}
- รหัสวิชา: ${a.subject_code||""}
- ชั้น: ${a.grade_level||""}
- กลุ่มสาระ: ${W||a.dept||""}
- หน่วยกิต: ${a.credit||""}
- เรื่อง/บทที่สอน: ${D.filter(Boolean).join(", ")||"ไม่ระบุ"}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${j}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม

Return JSON object เท่านั้น:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`,{data:q,error:U}=await Ke.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:N}});if(U)throw new Error(U.message??"Edge Function error");if(q!=null&&q.error)throw new Error(`Gemini: ${q.error.message??q.error.status}`);const H=((y=(s=(O=(k=(S=q.candidates)==null?void 0:S[0])==null?void 0:k.content)==null?void 0:O.parts)==null?void 0:s[0])==null?void 0:y.text)??"",r=H.match(/```json\s*([\s\S]*?)```/)||H.match(/(\{[\s\S]*\})/),u=r?r[1]??r[0]:null;if(!u)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(u)},ne=n=>{var S;ee();const F=n==="mid"?p:n==="between"?w:m,B=n==="mid"?x:n==="between"?f:b,j=pe();if(!j.length){Q("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(S=document.getElementById("cd2-picker"))==null||S.remove();const N=ae(),q={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},U={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},H=k=>{const O=(C[k-1]??[]).find(y=>String(y??"").trim()),s=String(O??"").trim();return s.length>30?s.slice(0,30)+"…":s},r=document.createElement("div");r.id="cd2-picker",r.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",r.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${N.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${N.pickerTitles[n]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${j.map(k=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${q[n]} w-4 h-4 flex-shrink-0" value="${k}" ${F.includes(k)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${k}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${o(H(k))}</span>
            </label>`).join("")}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${o(B)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${N.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${U[n]} text-white text-sm font-semibold">${N.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(r);const u=()=>r.remove();r.querySelector("#cd2-picker-close").addEventListener("click",u),r.querySelector("#cd2-picker-cancel").addEventListener("click",u),r.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const k=[...r.querySelectorAll(".cd2-choice:checked")].map(s=>Number(s.value)),O=r.querySelector("#cd2-picker-extra").value.trim();n==="mid"?(p=k,x=O):n==="between"?(w=k,f=O):(m=k,b=O),u(),Z()})},xe=()=>{var B,j,N,q,U,H,r,u,S;const n=ae();P.querySelectorAll(".cd2-lang-btn").forEach(k=>{k.addEventListener("click",()=>{var O;ee(),X=k.dataset.lang||"th",L=((O=He[X])==null?void 0:O.dir)||"ltr",Z()})}),P.querySelector("#cd2-close").addEventListener("click",()=>P.remove()),P.querySelector("#cd2-dir").addEventListener("change",k=>{ee(),L=k.target.value,Z()}),P.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(ee(),(C.some(s=>s.some(y=>String(y??"").trim()))||$.trim())&&!confirm(n.confirmOverwrite))return;const O=P.querySelector("#cd2-search-curriculum");O.disabled=!0,O.innerHTML=`⏳ ${n.btnCurriculumLoading}`;try{const s=await ts({subjectName:a.subject_name,subjectCode:a.subject_code,gradeLevel:a.grade_level,dept:W,topic:D.filter(Boolean).join(" ")});s.length?(ie(ve(s)),I=n.toastSearchOk(s.length)):I=n.toastSearchEmpty,Z()}catch(s){Q("ค้นหลักสูตรไม่สำเร็จ: "+ue(s),"error")}finally{O.disabled=!1,O.innerHTML=`🔍 ${n.btnCurriculum}`}}),P.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(ee(),(C.some(s=>s.some(y=>String(y??"").trim()))||$.trim())&&!confirm(n.confirmAIOverwrite))return;const O=P.querySelector("#cd2-auto-fill");O.disabled=!0,O.innerHTML=`⏳ ${n.btnAILoading}`;try{const s=await te();ie(s),I=n.toastAIDone,Z()}catch(s){Q("AI ร่างไม่สำเร็จ: "+ue(s),"error")}finally{O.disabled=!1,O.innerHTML=`✨ ${n.btnAI}`}}),P.querySelector("#cd2-img-input").addEventListener("change",async k=>{var h,M,R,K,oe,z;const O=(h=k.target.files)==null?void 0:h[0];if(!O)return;if((C.some(se=>se.some(we=>String(we??"").trim()))||$.trim())&&!confirm(n.confirmImgOverwrite)){k.target.value="";return}const y=P.querySelector("#cd2-img-btn");y.textContent=`⏳ ${n.btnImgLoading}`;try{const se=await new Promise((Ut,Xt)=>{const qe=new FileReader;qe.onload=()=>Ut(qe.result.split(",")[1]),qe.onerror=Xt,qe.readAsDataURL(O)}),we=E.length===1||a.subject_group&&!["ACDM","AGM"].includes(a.subject_group),Ce=we?n.colsExtra:n.colsBasic,Yt=we?`single column named "${Ce[0]}"`:`two columns named "${Ce[0]}" and "${Ce[1]}"`,Wt=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${n.aiLang}
ข้อมูลรายวิชา: "${a.subject_name??""}" รหัส ${a.subject_code??""} ชั้น ${a.grade_level??""} กลุ่มสาระ ${W}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${Yt})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบเป็น JSON เท่านั้น (ไม่มีข้อความอื่น):
{
  "description": "...",
  "columns": ${JSON.stringify(Ce)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:Se,error:dt}=await Ke.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Wt,imageBase64:se,imageMimeType:O.type||"image/jpeg"}});if(dt)throw new Error(dt.message??"Edge Function error");if(Se!=null&&Se.error)throw new Error(`Gemini: ${Se.error.message??Se.error.status}`);const ct=((z=(oe=(K=(R=(M=Se.candidates)==null?void 0:M[0])==null?void 0:R.content)==null?void 0:K.parts)==null?void 0:oe[0])==null?void 0:z.text)??"",Ue=ct.match(/```json\s*([\s\S]*?)```/)||ct.match(/(\{[\s\S]*\})/),pt=Ue?Ue[1]??Ue[0]:null;if(!pt)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");ie(JSON.parse(pt)),I=n.toastImgDone,Z()}catch(se){Q("อ่านรูปไม่สำเร็จ: "+ue(se),"error")}finally{y.textContent=`📷 ${n.btnImg}`,k.target.value=""}});const F=k=>{if(ee(),C.some(y=>y.some(h=>String(h??"").trim()))&&!confirm(n.confirmColChange))return;const s=C;E=k,C=s.map(y=>k.length===1?[y.filter(Boolean).join(" ").trim()]:Array.from({length:k.length},(h,M)=>y[M]??"")),C.length||(C=Array.from({length:12},()=>Array.from({length:E.length},()=>""))),Z()};(B=P.querySelector("#cd2-template-basic"))==null||B.addEventListener("click",()=>{F(n.colsBasic)}),(j=P.querySelector("#cd2-template-extra"))==null||j.addEventListener("click",()=>{F(n.colsExtra)}),(N=P.querySelector("#cd2-add-col"))==null||N.addEventListener("click",()=>{ee(),E.push(n.colNew(E.length+1)),C=C.map(k=>[...k,""]),Z()}),(q=P.querySelector("#cd2-add-row"))==null||q.addEventListener("click",()=>{ee(),C.push(Array.from({length:E.length},()=>"")),Z()}),P.querySelectorAll(".cd2-del-col").forEach(k=>k.addEventListener("click",()=>{ee();const O=Number(k.dataset.delCol);E.splice(O,1),C=C.map(s=>s.filter((y,h)=>h!==O)),Z()})),P.querySelectorAll(".cd2-del-row").forEach(k=>k.addEventListener("click",()=>{ee();const O=Number(k.dataset.delRow);C.splice(O,1);const s=y=>y.filter(h=>h!==O+1).map(h=>h>O+1?h-1:h);p=s(p),w=s(w),m=s(m),Z()})),(U=P.querySelector("#cd2-pick-mid"))==null||U.addEventListener("click",()=>ne("mid")),(H=P.querySelector("#cd2-pick-between"))==null||H.addEventListener("click",()=>ne("between")),(r=P.querySelector("#cd2-pick-final"))==null||r.addEventListener("click",()=>ne("final")),(u=P.querySelector("#cd2-voc-obj-add-row"))==null||u.addEventListener("click",()=>{ee(),Y.push({objective:"",competency:""}),Z()}),P.querySelectorAll(".cd2-voc-obj-del-row").forEach(k=>k.addEventListener("click",()=>{ee(),Y.splice(Number(k.dataset.vocObjDelRow),1),Z()})),(S=P.querySelector("#cd2-voc-sch-add-row"))==null||S.addEventListener("click",()=>{ee(),v.push({week:String(v.length+1),content:"",note:""}),Z()}),P.querySelectorAll(".cd2-voc-sch-del-row").forEach(k=>k.addEventListener("click",()=>{ee(),v.splice(Number(k.dataset.vocSchDelRow),1),Z()})),P.querySelector("#cd2-add-topic").addEventListener("click",()=>{ee(),D.push(""),Z()}),P.querySelectorAll(".cd2-topic-del").forEach(k=>{k.addEventListener("click",()=>{ee(),D.splice(Number(k.dataset.idx),1),D.length||(D=[""]),Z()})}),P.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:k,signer:O}=ee(),s=P.querySelector("#cd2-save");s.disabled=!0,s.textContent=n.saving;try{await ss(a.id,{description:k,table_columns:E.map((y,h)=>y.trim()||n.colNew(h+1)),table_rows:C.map(y=>y.slice(0,E.length)),topic_list:D.filter(Boolean),midterm_objective_items:p,between_objective_items:w,final_objective_items:m,midterm_objective_extra:x,between_objective_extra:f,final_objective_extra:b,voc_objectives:Y,voc_schedule:v,signer_name:O.trim()||null,text_direction:L,updated_by:(e==null?void 0:e.id)??null}),Q(n.toastSaved,"success"),P.remove()}catch(y){Q("บันทึกไม่สำเร็จ: "+ue(y),"error"),s.disabled=!1,s.textContent=n.save}})};Z()}async function va(e,a,t=null,l={}){const c=!!l.cloneFrom;ke("my-courses"),Ee(c?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[g,i,d]=await Promise.all([We().catch(()=>[]),St().catch(()=>[]),t&&!c?Kt(t.id).catch(r=>(Q("โหลดครูร่วมสอนไม่สำเร็จ: "+ue(r),"error"),null)):Promise.resolve([])]);if(d===null){ge(`<div class="p-6 text-center text-gray-600">โหลดข้อมูลคอร์สไม่ครบ กรุณาเปิดคอร์สใหม่อีกครั้ง
      <button class="block mx-auto mt-4 text-indigo-600" onclick="window._goBack()">กลับ</button></div>`);return}let _=d??[];const E=[...new Map(g.map(r=>[r.id,r])).values()],C=(e==null?void 0:e.category)??"",p=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],w=C?p.filter(r=>r.cat===C):p,m=r=>r==="ACDM"?"สามัญ":r==="ACDMVOC"?"สามัญปวช":r==="AGM"||r==="AGMVOC"?"ศาสนา":null,f=r=>r==="ACDMVOC",x=r=>f(r)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",b=r=>f(r)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",L=r=>f(r)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",$=r=>f(r)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",T=(t==null?void 0:t.subject_group)??"",D=r=>{const u=m(r);if(!u)return E;const S=E.filter(k=>k.category===u);return S.length?S:E},Y=(r,u="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+r.map(S=>`<option value="${S.dept_code}" ${S.dept_code===u?"selected":""}>${S.dept_name}</option>`).join(""),v=[...new Set(g.map(r=>r.head_name).filter(Boolean))];ge(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${c?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์สวิชา"}</h2>
    </div>
    ${c?`
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
          <select id="cf-subg" class="${me}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${w.map(r=>`<option value="${r.value}" ${(t==null?void 0:t.subject_group)===r.value?"selected":""}>${r.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${x(T)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${me}">
            ${Y(t!=null&&t.subject_group?D(t.subject_group):C?E.filter(r=>r.category===C):E,(t==null?void 0:t.dept)??"")}
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
            <select id="cf-credit" class="${me}">
              ${cs.map(r=>`<option value="${r}">${r}</option>`).join("")}
            </select>
          </div>
          <div id="cf-grade-single-wrapper">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${me}">
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
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${b(T)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${V} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${$(T)}</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${c?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}
          </button>
        </div>
      </form>
    </div>
  </div>`);const I=t&&(t.grade_level&&t.grade_level.includes(",")||_.length>0);function X(){const r=document.getElementById("cf-coteach-selected-list");r&&(r.innerHTML=_.map(u=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${u.full_name} (${u.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${u.id}">✕</button>
      </span>
    `).join(""),r.querySelectorAll(".remove-coteacher-btn").forEach(u=>{u.addEventListener("click",()=>{const S=Number(u.dataset.id);_=_.filter(k=>k.id!==S),X()})}))}function ae(r,u){var k;(k=document.getElementById("coteach-explain-modal"))==null||k.remove();const S=document.createElement("div");S.id="coteach-explain-modal",S.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",S.innerHTML=`
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
      </div>`,document.body.appendChild(S),S.querySelector("#cf-explain-cancel").addEventListener("click",()=>{S.remove(),u()}),S.querySelector("#cf-explain-confirm").addEventListener("click",()=>{S.remove(),r()})}function le(r,u){var k;(k=document.getElementById("coteach-confirm-modal"))==null||k.remove();const S=document.createElement("div");S.id="coteach-confirm-modal",S.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",S.innerHTML=`
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
      </div>`,document.body.appendChild(S),S.querySelector("#cf-off-cancel").addEventListener("click",()=>{S.remove(),u()}),S.querySelector("#cf-off-confirm").addEventListener("click",()=>{S.remove(),r()})}function J(r,u=""){const S=Xe[r]??[],k=document.getElementById("cf-grade-checkboxes");if(!k)return;const O=u?u.split(",").map(s=>s.trim()):[];k.innerHTML=S.map(s=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${s}" ${O.includes(s)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${s}</span>
      </label>
    `).join("")}const re={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};document.getElementById("cf-subg").addEventListener("change",r=>{const u=r.target.value;document.getElementById("cf-dept-label").firstChild.textContent=x(u)+" ",document.getElementById("cf-head-label").textContent=b(u),document.getElementById("cf-head-hint").textContent=$(u);const S=document.getElementById("cf-dept"),k=S.value;S.innerHTML=Y(D(u)),S.options[0].textContent=L(u),k&&(S.value=k);const O=document.getElementById("cf-grade"),s=Xe[u]??[];O.innerHTML=s.length?['<option value="">— เลือกชั้นปี —</option>',...s.map(y=>`<option value="${y}">${y}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=re[u]??"",J(u)}),document.getElementById("cf-dept").addEventListener("change",r=>{const u=r.target.value,S=g.filter(O=>O.dept_code===u&&O.head_name).map(O=>O.head_name),k=document.getElementById("cf-dept-head");S.length===1?k.value=S[0]:S.length>1?(k.value="",P(S)):k.value=""});const A=document.getElementById("cf-dept-head"),W=document.getElementById("cf-head-dropdown");function P(r){W.innerHTML=r.map(u=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${u}">${u}</div>`).join(""),W.querySelectorAll(".head-opt").forEach(u=>u.addEventListener("mousedown",S=>{S.preventDefault(),A.value=u.dataset.val,W.classList.add("hidden")})),W.classList.toggle("hidden",!r.length)}A.addEventListener("input",()=>{const r=A.value.toLowerCase(),u=v.filter(S=>S.toLowerCase().includes(r));P(r?u:v)}),A.addEventListener("focus",()=>{const r=A.value.toLowerCase();P(r?v.filter(u=>u.toLowerCase().includes(r)):v)}),A.addEventListener("blur",()=>setTimeout(()=>W.classList.add("hidden"),150));const de=document.getElementById("cf-teacher-code"),pe=document.getElementById("cf-teacher-search"),Z=document.getElementById("cf-teacher-dropdown"),ee=document.getElementById("cf-teacher-selected"),ie=document.getElementById("cf-teacher-name"),ve=document.getElementById("cf-teacher-clear"),te=document.getElementById("cf-teacher-id"),ne=document.getElementById("cf-phone");function xe(r){if(!r){te.value="",de.value="",pe.value="",ee.classList.add("hidden"),ee.classList.remove("flex"),ne.value="";return}te.value=r.id,de.value=r.teacher_code??"",pe.value=r.full_name??"",ie.textContent=`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`,ee.classList.remove("hidden"),ee.classList.add("flex"),ne.value=Ve(r.phone??""),Z.classList.add("hidden")}function ye(r){Z.innerHTML=r.length?r.map(u=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${u.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${u.teacher_code??""}</span>
            <span class="font-medium">${u.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',Z.querySelectorAll(".t-opt").forEach(u=>u.addEventListener("mousedown",S=>{S.preventDefault(),xe(i.find(k=>String(k.id)===u.dataset.id))})),Z.classList.remove("hidden")}if(e&&!t){const r=i.find(u=>u.id===e.id);r&&xe(r)}de.oninput=()=>{const r=de.value.trim().toLowerCase();if(!r){xe(null);return}const u=i.find(S=>(S.teacher_code??"").toLowerCase()===r);if(u)xe(u);else{const S=i.filter(k=>(k.teacher_code??"").toLowerCase().startsWith(r));S.length&&ye(S)}},pe.onfocus=()=>ye(i),pe.oninput=()=>{const r=pe.value.toLowerCase();ye(r?i.filter(u=>u.full_name.toLowerCase().includes(r)||(u.teacher_code??"").toLowerCase().includes(r)):i)},pe.onblur=()=>setTimeout(()=>Z.classList.add("hidden"),150),ve.addEventListener("click",()=>xe(null));const ce=document.getElementById("cf-toggle-coteach"),n=document.getElementById("cf-grade-single-wrapper"),F=document.getElementById("cf-grade-multi-container"),B=document.getElementById("cf-coteach-section");ce.addEventListener("change",r=>{r.target.checked?(ce.checked=!1,ae(()=>{ce.checked=!0,n.classList.add("hidden"),F.classList.remove("hidden"),B.classList.remove("hidden");const S=document.getElementById("cf-subg").value;J(S),X()},()=>{ce.checked=!1})):le(()=>{ce.checked=!1,n.classList.remove("hidden"),F.classList.add("hidden"),B.classList.add("hidden"),_=[]},()=>{ce.checked=!0})});const j=document.getElementById("cf-coteach-code"),N=document.getElementById("cf-coteach-search"),q=document.getElementById("cf-coteach-dropdown");function U(r){if(!r)return;if(_.some(S=>S.id===r.id)){Q("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),j.value="",N.value="";return}const u=Number(te.value);if(r.id===u){Q("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),j.value="",N.value="";return}_.push(r),X(),j.value="",N.value="",q.classList.add("hidden")}function H(r){q.innerHTML=r.length?r.map(u=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${u.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${u.teacher_code??""}</span>
            <span class="font-medium">${u.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',q.querySelectorAll(".co-t-opt").forEach(u=>u.addEventListener("mousedown",S=>{S.preventDefault(),U(i.find(k=>String(k.id)===u.dataset.id))})),q.classList.remove("hidden")}if(j.oninput=()=>{const r=j.value.trim().toLowerCase();if(!r)return;const u=i.find(S=>(S.teacher_code??"").toLowerCase()===r);if(u)U(u);else{const S=i.filter(k=>(k.teacher_code??"").toLowerCase().startsWith(r));S.length&&H(S)}},N.onfocus=()=>H(i),N.oninput=()=>{const r=N.value.toLowerCase();H(r?i.filter(u=>u.full_name.toLowerCase().includes(r)||(u.teacher_code??"").toLowerCase().includes(r)):i)},N.onblur=()=>setTimeout(()=>q.classList.add("hidden"),150),ne.addEventListener("input",r=>{r.target.value=Ve(r.target.value)}),t){if(document.getElementById("cf-name").value=t.subject_name??"",document.getElementById("cf-code").value=t.subject_code??"",t.credit&&(document.getElementById("cf-credit").value=String(t.credit)),t.subject_group){const r=document.getElementById("cf-subg");r.value=t.subject_group,document.getElementById("cf-dept").innerHTML=Y(D(t.subject_group));const u=document.getElementById("cf-grade"),S=Xe[t.subject_group]??[];u.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...S.map(k=>`<option value="${k}">${k}</option>`)].join(""),t.grade_level&&(u.value=t.grade_level),document.getElementById("cf-code-hint").textContent=re[t.subject_group]??""}if(t.dept&&(document.getElementById("cf-dept").value=t.dept),t.learning_area)A.value=t.learning_area;else if(t.dept){const r=g.find(u=>u.dept_code===t.dept&&u.head_name);A.value=(r==null?void 0:r.head_name)??""}if(t.teacher_id){const r=i.find(u=>u.id===t.teacher_id);r&&xe(r)}else if(e){const r=i.find(u=>u.id===e.id);r&&xe(r)}if(I){ce.checked=!0,n.classList.add("hidden"),F.classList.remove("hidden"),B.classList.remove("hidden");const r=t.subject_group;J(r,t.grade_level),X()}}document.getElementById("course-form").addEventListener("submit",async r=>{r.preventDefault();const u=document.getElementById("cf-submit"),S=document.getElementById("cf-subg").value,k=document.getElementById("cf-dept").value,O=document.getElementById("cf-name").value.trim(),s=document.getElementById("cf-code").value.trim(),y=parseFloat(document.getElementById("cf-credit").value)||null;let h="";if(ce.checked){const oe=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!oe.length){Q("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}h=oe.map(z=>z.value).join(", ")}else h=document.getElementById("cf-grade").value;const M=te.value,R=ne.value.trim(),K=A.value.trim();if(!S||!O||!h){Q("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}u.disabled=!0,u.textContent="กำลังบันทึก...";try{const oe=M?Number(M):(e==null?void 0:e.id)??null,z=ce.checked?_.map(se=>se.id):[];await a({subject_group:S,dept:k||null,subject_name:O,subject_code:s||null,credit:y,grade_level:h,teacher_id:oe,learning_area:K||null},z),R&&oe&&oe===(e==null?void 0:e.id)&&await at(e.id,{phone:R}).catch(()=>{}),Q("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(oe){Q("บันทึกไม่สำเร็จ: "+ue(oe),"error")}finally{u.disabled=!1,u.textContent=c?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function fa(e,a=[],t){ke("setup"),Ee("ตั้งค่าโปรไฟล์","registration");const[l,c,g,i]=await Promise.all([We().catch(()=>[]),Tt().catch(()=>[]),At().catch(()=>[]),Ie().catch(()=>({}))]),d=parseInt(i.academicYear??2568),_=parseInt(i.semester??1),E=[...new Map(l.map(x=>[x.dept_code,x])).values()],C=(x,b="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(x?E.filter($=>!$.category||$.category===x):E).map($=>`<option value="${$.dept_code}" ${$.dept_code===b?"selected":""}>${$.dept_name}</option>`).join(""),p=c,w=g,m=await It(d,_).catch(()=>[]);if(ge(`<div class="max-w-lg mx-auto animate-fade">
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
          <select id="setup-dept" class="${me}">
            ${C(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${me}">
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
            ${["สามัญ","ศาสนา"].map(x=>`
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${(e==null?void 0:e.category)===x?"border-emerald-400 bg-emerald-50":"border-gray-200"}">
              <input type="radio" name="setup-category" value="${x}" ${(e==null?void 0:e.category)===x?"checked":""}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${x}</span>
            </label>`).join("")}
          </div>
        </div>
        ${Rt({prefix:"setup",samaiRooms:p,religionRooms:w,homeroomRooms:a,assignments:m,teacherId:e==null?void 0:e.id,academicYear:d,semester:_})}
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const f=()=>{var $;const x=($=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:$.value,b=document.getElementById("setup-room-samai-wrap"),L=document.getElementById("setup-room-religion-wrap");x==="สามัญ"?(b==null||b.classList.remove("hidden"),L==null||L.classList.add("hidden")):x==="ศาสนา"?(L==null||L.classList.remove("hidden"),b==null||b.classList.add("hidden")):(b==null||b.classList.remove("hidden"),L==null||L.classList.remove("hidden"))};f(),qt(),document.querySelectorAll('input[name="setup-category"]').forEach(x=>x.addEventListener("change",()=>{var T;f();const b=(T=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:T.value,L=document.getElementById("setup-dept"),$=L==null?void 0:L.value;L&&(L.innerHTML=C(b,$))})),document.getElementById("setup-phone").addEventListener("input",x=>{const b=x.target.value.replace(/\D/g,"").slice(0,10);x.target.value=b.length<=3?b:b.length<=6?`${b.slice(0,3)} ${b.slice(3)}`:`${b.slice(0,3)} ${b.slice(3,6)} ${b.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async x=>{var L;x.preventDefault();const b=document.getElementById("setup-save");b.disabled=!0,b.textContent="กำลังบันทึก...";try{const $=document.getElementById("setup-dept").value||null,T=document.getElementById("setup-subg").value||null,D=((L=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:L.value)||null,Y=document.getElementById("setup-phone").value.trim()||null,v=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(J=>J.value),I=[...document.querySelectorAll('input[name="setup-room-religion"]:checked')].map(J=>J.value);await at(e.id,{dept:$,subject_group:T,category:D,phone:Y});const{upsertHomeroomTeacher:X,deleteHomeroomTeacher:ae}=await be(async()=>{const{upsertHomeroomTeacher:J,deleteHomeroomTeacher:re}=await import("./api-CWYJTdOa.js");return{upsertHomeroomTeacher:J,deleteHomeroomTeacher:re}},__vite__mapDeps([0,1,2,3,4])),le=async(J,re)=>{const A=a.filter(W=>W.category===J&&Number(W.academic_year)===d&&Number(W.semester)===_);await Promise.all(A.filter(W=>!re.includes(W.main_room)).map(W=>ae(W.id).catch(()=>{}))),await Promise.all(re.map(W=>X({teacher_id:e.id,main_room:W,category:J,academic_year:d,semester:_})))};await Promise.all([le("สามัญ",v),le("ศาสนา",I)]),Q("บันทึกโปรไฟล์สำเร็จ ✅","success"),t&&await t(e.profile_id)}catch($){Q("บันทึกไม่สำเร็จ: "+ue($),"error")}finally{b.disabled=!1,b.textContent="บันทึกและเริ่มใช้งาน →"}})}async function ya(e,a=[],t){var f;ke("profile"),Ee("โปรไฟล์ของฉัน","registration");const[l,c,g]=await Promise.all([We().catch(()=>[]),Tt().catch(()=>[]),At().catch(()=>[])]),i=await Ie().catch(()=>({})),d=parseInt(i.academicYear??new Date().getFullYear()+543),_=parseInt(i.semester??1),E=await It(d,_).catch(()=>[]),C=e==null?void 0:e.category,p=C?l.filter(x=>!x.category||x.category===C):l,w=[...new Map(p.map(x=>[x.dept_code,x])).values()],m=Ve((e==null?void 0:e.phone)??"");ge(`<div class="max-w-lg mx-auto animate-fade">
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
          <input id="prof-phone" type="tel" inputmode="numeric" value="${m}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${V}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${w.length>0?`<select id="prof-dept" class="${me} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${w.map(x=>`<option value="${x.dept_code}" ${x.dept_code===(e==null?void 0:e.dept)?"selected":""}>${x.dept_name} (${x.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${V} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${me}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${(e==null?void 0:e.subject_group)==="ACDM"?"selected":""}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${(e==null?void 0:e.subject_group)==="AGM"?"selected":""}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${(e==null?void 0:e.subject_group)==="ACDMVOC"?"selected":""}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${(e==null?void 0:e.subject_group)==="AGMVOC"?"selected":""}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        ${Rt({prefix:"prof",samaiRooms:c,religionRooms:g,homeroomRooms:a,assignments:E,teacherId:e==null?void 0:e.id,academicYear:d,semester:_})}

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
  </div>`),e&&(qt(),document.getElementById("prof-phone").addEventListener("input",x=>{x.target.value=Ve(x.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",x=>{const b=x.target.files[0];b&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(b)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async x=>{var $;x.preventDefault();const b=document.getElementById("prof-save"),L=document.getElementById("prof-name").value.trim();if(!L){Q("กรุณากรอกชื่อ-นามสกุล","warning");return}b.disabled=!0,b.textContent="กำลังบันทึก...";try{const T=document.getElementById("prof-dept"),D=document.getElementById("prof-dept-txt"),Y=document.getElementById("prof-subg"),v=((D==null?void 0:D.value.trim().toUpperCase())||(T==null?void 0:T.value)||"").trim()||null,I=document.getElementById("prof-username").value.trim().toLowerCase(),X=document.getElementById("prof-email").value.trim();if(I&&!/^[a-z0-9._-]{3,32}$/.test(I)){Q("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),b.disabled=!1,b.textContent="บันทึก";return}const ae={full_name:L,phone:document.getElementById("prof-phone").value.trim()||null,dept:v,subject_group:(Y==null?void 0:Y.value)||null,username:I||null,login_email:X||null},le=($=document.getElementById("prof-photo-file").files)==null?void 0:$[0];le&&(ae.image_url=await us(e.id,le)),await at(e.id,ae);const{upsertHomeroomTeacher:J,deleteHomeroomTeacher:re,getSystemConfig:A}=await be(async()=>{const{upsertHomeroomTeacher:ie,deleteHomeroomTeacher:ve,getSystemConfig:te}=await import("./api-CWYJTdOa.js");return{upsertHomeroomTeacher:ie,deleteHomeroomTeacher:ve,getSystemConfig:te}},__vite__mapDeps([0,1,2,3,4])),W=await A().catch(()=>({})),P=parseInt(W.academicYear??new Date().getFullYear()+543),de=parseInt(W.semester??1),pe=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(ie=>ie.value),Z=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(ie=>ie.value),ee=async(ie,ve)=>{const te=a.filter(ne=>ne.category===ie&&Number(ne.academic_year)===P&&Number(ne.semester)===de);await Promise.all(te.filter(ne=>!ve.includes(ne.main_room)).map(ne=>re(ne.id).catch(()=>{}))),await Promise.all(ve.map(ne=>J({teacher_id:e.id,main_room:ne,category:ie,academic_year:P,semester:de})))};await Promise.all([ee("สามัญ",pe),ee("ศาสนา",Z)]),Q("บันทึกโปรไฟล์สำเร็จ","success"),t&&await t(e.profile_id)}catch(T){Q("บันทึกไม่สำเร็จ: "+ue(T),"error")}finally{b.disabled=!1,b.textContent="บันทึก"}}),(f=document.getElementById("prof-pw-save"))==null||f.addEventListener("click",async()=>{const x=document.getElementById("prof-pw-new").value,b=document.getElementById("prof-pw-confirm").value;if(!x){Q("กรุณากรอกรหัสผ่านใหม่","warning");return}if(x.length<6){Q("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(x!==b){Q("รหัสผ่านไม่ตรงกัน","warning");return}const L=document.getElementById("prof-pw-save");L.disabled=!0,L.textContent="⏳ กำลังบันทึก...";try{const{error:$}=await Ke.auth.updateUser({password:x});if($)throw $;Q("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch($){Q("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+ue($),"error")}finally{L.disabled=!1,L.textContent="บันทึกรหัสผ่านใหม่"}}))}const Ht="pp5_exam_docs_draft_v1",gt="pp5_exam_docs_pending_class_id",Gt="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",hs="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",ze=27,Ne=ze*2,zt=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],Je={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},De={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},ws=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let G={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...De},loadingStudents:!1},Qe=[];const $s=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},_s=()=>{try{return JSON.parse(localStorage.getItem(Ht)||"{}")||{}}catch{return{}}},Oe=()=>{localStorage.setItem(Ht,JSON.stringify(G.form))},ks=()=>{let e="";try{e=sessionStorage.getItem(gt)||"",sessionStorage.removeItem(gt)}catch{}const a=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,a?String(a):""},Ye=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},Vt=e=>[...e||[]].sort((a,t)=>String(a.student_code||"").localeCompare(String(t.student_code||""),"th",{numeric:!0})),nt=e=>{if(!e)return"";const a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?"":`${a.getDate()} เดือน ${zt[a.getMonth()]} พ.ศ. ${a.getFullYear()+543}`},Es=e=>{if(!e)return{day:"",month:"",year:""};const a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?{day:"",month:"",year:""}:{day:String(a.getDate()),month:zt[a.getMonth()],year:String(a.getFullYear()+543)}},lt=e=>{const a=e.startTime||"",t=e.endTime||"";return a&&t?`${a} - ${t}`:a||t||""},vt=(e,a)=>e?a.key==="th"?`${e} น.`:e:"",Cs=e=>{const a=String(e||"").trim();if(!a)return{room:"",name:""};const t=a.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(t)return{room:t[1],name:t[2].trim()};const[l,...c]=a.split(/\s+/);return{room:l,name:c.join(" ").trim()}},_e=e=>{const a=String(e||"").trim().toUpperCase();return a==="ชาย"||a==="M"||a==="MALE"?"M":a==="หญิง"||a==="F"||a==="W"||a==="FEMALE"?"F":""},rt=()=>{const e=new Set((G.students||[]).map(a=>_e(a.gender)).filter(Boolean));return e.has("M")&&e.has("F")},Ss=()=>{const e=G.form,a=G.students||[];if(e.studentScope!=="split"||!rt())return[a];const t=a.filter(c=>_e(c.gender)==="M"),l=a.filter(c=>_e(c.gender)==="F");return e.splitPrintMode==="both"?[t,l]:[e.splitGender==="F"?l:t]},js=()=>{const e=G.form;if(e.studentScope!=="split"||!rt())return"";const a=G.students.filter(l=>_e(l.gender)==="M").length,t=G.students.filter(l=>_e(l.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${a} + หญิง ${t})`:e.splitGender==="F"?` (เฉพาะหญิง ${t} คน)`:` (เฉพาะชาย ${a} คน)`},Ls=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),ft=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),yt=(e,a,t,l=t.loading,c=0)=>{const g=e||[],i=g.map((_,E)=>`
    <tr>
      <td>${a+E}</td>
      <td>${o(_.student_code||"")}</td>
      <td class="nm">${o(_.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),d=Array.from({length:Math.max(0,c-g.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return i||d?i+d:`<tr><td colspan="4" class="empty-students">${o(l)}</td></tr>`},Ts=(e,a,t,l,c,g)=>{const i=e.slice(a*Ne,(a+1)*Ne),d=i.slice(0,ze),_=i.slice(ze,Ne),E=a*Ne+1,C=E+ze;return`
    <div class="exam-doc-paper ${g} sign-list ${a>0?"exam-doc-page-break":""}">
      ${et(t.signListTitle)}
      ${tt(t,l,c)}
      
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
              ${yt(d,E,t)}
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
              ${yt(_,C,t," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${Ze(t,c)}
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
    <img src="${Gt}" alt="">
    <h2>${o(e)}</h2>
    <img src="${hs}" alt="">
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
  </div>`,As=e=>`
  <div class="header-single">
    <img src="${Gt}" alt="">
    <h2>${o(e)}</h2>
  </div>`,wt=(e,a)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${o(a||"")}</span>
  </div>`,Is=(e,a,t,l)=>{const[c,g]=String(l.room||"").split("/");return`
  <div class="env-line">
    ${o(e.envTerm)} <span class="textColor env-blank-sm">${o(t.semester||"")}</span>
    ${o(e.envYear)} <span class="textColor env-blank-sm">${o(t.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${o(e.envSubject)} <span class="textColor env-blank-lg">${o(a.subjectName||"")}</span>
    ${o(e.envClass)} <span class="textColor env-blank-sm">${o(c||"")}</span> / <span class="textColor env-blank-sm">${o(g||"")}</span>
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
  <div class="env-footer-dept">${o(e.envFooterDept)}</div>`},Bs=(e,a)=>{var $,T;const t=G.form,l=Je[t.lang]||Je.th,c=G.selectedClass||{},g=Ye(c),i=Vt(e),d=i.length,_=Es(t.examDate),E=($=G.teacher)!=null&&$.phone?` (${G.teacher.phone})`:"",C={className:c.class_name||"",subjectName:t.subjectLabel||g.subject_name||"",subjectCode:g.subject_code||"",teacherName:(((T=G.teacher)==null?void 0:T.full_name)||"")+E},p=Math.max(1,Math.ceil(i.length/Ne)),w=l.dir==="rtl"?"rtl":"ltr",m=a==="all"||a==="portrait",f=a==="all"||a==="envelope",x=a==="envelope"?" envelope-only":a==="portrait"?" portrait-only":"",b=t.examAmount||String(d),L=Cs(C.className);return`
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
    <div id="exam-doc-print-area" class="${x.trim()}">
    ${m?`
    ${Array.from({length:p},(D,Y)=>Ts(i,Y,l,C,t,w)).join("")}

    <div class="exam-doc-paper ${w} exam-doc-page-break">
      ${et(l.examCoverTitle)}
      ${tt(l,C,t)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${o(l.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${d}</span> ${o(l.studentUnit)}
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

    <div class="exam-doc-paper ${w} exam-doc-page-break">
      ${et(l.absentTitle)}
      ${tt(l,C,t)}
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

    ${f?t.lang==="th"?`
    <div class="exam-doc-paper ${w} landscape ${m?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${o(l.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${o(l.envelopeSubject)} <span class="textColor">${o(C.subjectName)}</span> ${o(l.subjectCode)} <span class="textColor">${o(C.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${t.examDateLabel?`${o(l.envelopeDate)} <span class="textColor">${o(t.examDateLabel)}</span>`:`${o(l.envelopeDate)} <span class="textColor">${o(_.day)}</span> ${o(l.envelopeMonth)} <span class="textColor">${o(_.month)}</span> ${o(l.envelopeYear)} <span class="textColor">${o(_.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${t.examTimeLabel?`${o(l.envelopeTime)} <span class="textColor">${o(t.examTimeLabel)}</span>`:`${o(l.envelopeTime)} <span class="textColor">${o(vt(t.startTime,l))}</span> ${o(l.envelopeTo)} <span class="textColor">${o(vt(t.endTime,l))}</span>`}
        </div>
        <div class="infoNP4">
          ${o(l.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${o(L.room)}</span>${L.name?`<span class="exam-envelope-class-name">${o(L.name)}</span>`:""}</span> ${o(l.envelopeStudents)} <span class="textColor">${d}</span> ${o(l.studentUnit)} ${o(l.examAmount)} <span class="textColor">${o(b)}</span> ${o(l.examUnit)}
        </div>
        <div class="infoNP5">
          ${o(l.envelopeTeacher)} <span class="textColor">${o(C.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${w} envelope-religious ${m?"exam-doc-page-break":""}">
      ${As(l.envSchoolName)}
      ${Is(l,C,t,L)}
    </div>
    `:""}
    </div>`},it=(e="all")=>{const t=Ss().map(_=>Bs(_,e));if(t.length<=1)return t[0]||"";const l=t[0].match(/<style[\s\S]*?<\/style>/),c=l?l[0]:"",g=t[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),i=g?g[1]:"",d=t.map(_=>{const E=_.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return E?E[1]:""});return`${c}
<div id="exam-doc-print-area" class="${i}">${d.join("")}</div>`},Ps=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${it("all")}
</body>
</html>`;Pt(e,{autoprint:!0})},Ms=()=>{const e=G.selectedClass,a=Ye(e);return e?`${a.subject_code||"-"} · ${a.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function Ns(){Qe.forEach(e=>{try{e()}catch{}}),Qe=[]}function $t(e,a){const t=document.getElementById(e),l=document.getElementById(`${e}-list`);if(!t||!l)return;const c=G.teachers||[],g=()=>{l.classList.add("hidden")},i=m=>{t.value=m.full_name||"",G.form[a]=t.value,Oe(),Re(),g()},d=()=>{const m=t.value.trim(),f=m.toLowerCase(),x=c.filter(b=>!m||Ls(b).includes(f)).slice(0,10);if(!c.length){l.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!x.length){l.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}l.innerHTML=x.map(b=>`
      <button type="button" data-id="${b.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${b.image_url?`<img src="${b.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${o((b.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${o(b.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${o(b.teacher_code||"—")}${b.dept?` · ${o(b.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),l.querySelectorAll(".exam-teacher-option").forEach(b=>{b.addEventListener("mousedown",L=>{L.preventDefault();const $=c.find(T=>String(T.id)===String(b.dataset.id));$&&i($)})})},_=()=>{d(),l.classList.remove("hidden")},E=()=>{G.form[a]=t.value,Oe(),Re(),_()},C=()=>_(),p=m=>{if(m.key==="Escape"&&g(),m.key==="Enter"){const f=l.querySelector(".exam-teacher-option");f&&!l.classList.contains("hidden")&&(m.preventDefault(),f.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},w=m=>{!t.contains(m.target)&&!l.contains(m.target)&&g()};t.addEventListener("input",E),t.addEventListener("focus",C),t.addEventListener("keydown",p),document.addEventListener("mousedown",w,!0),Qe.push(()=>{t.removeEventListener("input",E),t.removeEventListener("focus",C),t.removeEventListener("keydown",p),document.removeEventListener("mousedown",w,!0)})}function Ae(){const e=G.form,a=G.classes.map(t=>{const l=Ye(t),c=`${l.subject_code||"-"} · ${l.subject_name||"-"} · ${t.class_name||"-"}`;return`<option value="${t.id}" ${String(e.classId)===String(t.id)?"selected":""}>${o(c)}</option>`}).join("");ge(`
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
            <select id="exam-class-id" class="${me}">
              <option value="">เลือกห้องเรียน</option>
              ${a}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${me}">
              ${Object.values(Je).map(t=>`<option value="${t.key}" ${e.lang===t.key?"selected":""}>${o(t.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <input id="exam-type" list="exam-type-datalist" class="${V}" value="${o(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${ws.map(t=>`<option value="${o(t)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${V}" value="${o(e.subjectLabel)}" placeholder="${o(Ye(G.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
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

        ${rt()?(()=>{const t=G.students.filter(g=>_e(g.gender)==="M").length,l=G.students.filter(g=>_e(g.gender)==="F").length,c=e.studentScope==="split";return`
        <div class="mt-4 grid gap-3 sm:grid-cols-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">นักเรียนที่ใช้ (ห้องนี้มีทั้งชายและหญิง)</span>
            <select id="exam-student-scope" class="${me}">
              <option value="all" ${c?"":"selected"}>ทั้งห้อง (ไม่แยกเพศ)</option>
              <option value="split" ${c?"selected":""}>แยกเพศ</option>
            </select>
          </label>
          ${c?`
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">เพศที่กำลังดู/พิมพ์</span>
            <select id="exam-split-gender" class="${me}">
              <option value="M" ${e.splitGender!=="F"?"selected":""}>ชาย (${t} คน)</option>
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${l} คน)</option>
            </select>
          </label>
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รูปแบบพิมพ์</span>
            <select id="exam-split-print-mode" class="${me}">
              <option value="single" ${e.splitPrintMode!=="both"?"selected":""}>พิมพ์ทีละเพศ (เฉพาะเพศที่เลือกอยู่)</option>
              <option value="both" ${e.splitPrintMode==="both"?"selected":""}>พิมพ์ทีเดียวทั้งสองเพศ (ชายก่อน ต่อด้วยหญิง)</option>
            </select>
          </label>`:""}
        </div>`})():""}

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${o(Ms())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${G.students.length} คน${o(js())}</span>
          ${G.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${it()}</div>
      </section>
    </div>`),Os()}async function st(){const e=G.form.classId;if(G.selectedClass=G.classes.find(a=>String(a.id)===String(e))||null,G.students=[],!!e){G.loadingStudents=!0,Ae();try{G.students=Vt(await as(e))}catch(a){console.error(a),Q("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+ue(a),"error")}finally{G.loadingStudents=!1}}}function $e(){var e,a,t,l,c,g,i,d,_,E,C,p,w,m,f,x,b,L,$,T;G.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((a=document.getElementById("exam-subject-label"))==null?void 0:a.value)||"",lang:((t=document.getElementById("exam-lang"))==null?void 0:t.value)||"th",examType:((l=document.getElementById("exam-type"))==null?void 0:l.value)||"",semester:((c=document.getElementById("exam-semester"))==null?void 0:c.value)||"",academicYear:((g=document.getElementById("exam-year"))==null?void 0:g.value)||"",examDate:((i=document.getElementById("exam-date"))==null?void 0:i.value)||"",startTime:((d=document.getElementById("exam-start"))==null?void 0:d.value)||"",endTime:((_=document.getElementById("exam-end"))==null?void 0:_.value)||"",examDateLabel:((E=document.getElementById("exam-date-label"))==null?void 0:E.value)||"",examTimeLabel:((C=document.getElementById("exam-time-label"))==null?void 0:C.value)||"",classPart:((p=document.getElementById("exam-class-part"))==null?void 0:p.value)||"",periodPart:((w=document.getElementById("exam-period-part"))==null?void 0:w.value)||"",examRoom:((m=document.getElementById("exam-room"))==null?void 0:m.value)||"",examAmount:((f=document.getElementById("exam-amount"))==null?void 0:f.value)||"",invigilator1:((x=document.getElementById("exam-invigilator-1"))==null?void 0:x.value)||"",invigilator2:((b=document.getElementById("exam-invigilator-2"))==null?void 0:b.value)||"",studentScope:((L=document.getElementById("exam-student-scope"))==null?void 0:L.value)||"all",splitGender:(($=document.getElementById("exam-split-gender"))==null?void 0:$.value)||"M",splitPrintMode:((T=document.getElementById("exam-split-print-mode"))==null?void 0:T.value)||"single"},G.selectedClass=G.classes.find(D=>String(D.id)===String(G.form.classId))||null,Oe()}function Re(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=it())}function Ds(){return $e(),Re(),G.form.classId?!0:(Q("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function Os(){var a,t,l,c;Ns(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(g=>{var i,d;(i=document.getElementById(g))==null||i.addEventListener("input",()=>{$e(),Re()}),(d=document.getElementById(g))==null||d.addEventListener("change",()=>{$e(),Re()})}),(a=document.getElementById("exam-class-id"))==null||a.addEventListener("change",async()=>{$e(),Oe(),await st(),Ae()}),(t=document.getElementById("exam-lang"))==null||t.addEventListener("change",()=>{$e(),Ae()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(g=>{var i;(i=document.getElementById(g))==null||i.addEventListener("change",()=>{$e(),Ae()})}),(l=document.getElementById("exam-doc-refresh"))==null||l.addEventListener("click",async()=>{$e(),await st(),Ae(),Q("รีเฟรชรายชื่อแล้ว","success")}),(c=document.getElementById("exam-doc-print"))==null||c.addEventListener("click",()=>{Ds()&&Ps()}),$t("exam-invigilator-1","invigilator1"),$t("exam-invigilator-2","invigilator2")}async function ha(e){ke("exam-docs"),Ee("เอกสารช่วงสอบ","exam-docs"),ge(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[a,t,l]=await Promise.all([ot((e==null?void 0:e.id)??null),Ie().catch(()=>({})),St().catch(()=>[])]),c=_s(),g=ks(),i={...De,semester:String(t.semester||De.semester||""),academicYear:String(t.academicYear||De.academicYear||""),examDate:$s(),invigilator1:(e==null?void 0:e.full_name)||"",...c};g&&a.some(d=>String(d.id)===String(g))&&(i.classId=String(g)),G={teacher:e,classes:a,teachers:l,students:[],selectedClass:null,loadingStudents:!1,form:i},G.form.examType||(G.form.examType=De.examType),g&&Oe(),G.selectedClass=G.classes.find(d=>String(d.id)===String(G.form.classId))||null,await st(),Ae()}catch(a){console.error(a),ge(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${o(ue(a))}
    </div>`)}}let Be=null,je=null,Pe=null,Le=null,Te=null;const Rs={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},qs={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function Fs(e){const a=new Date,t=new Date(e.event_date+"T00:00:00"),l=new Date((e.end_date||e.event_date)+"T23:59:59");if(a>=t&&a<=l)return{status:"ongoing"};const c=Math.max(0,Math.floor((t-a)/1e3)),g=Math.floor(c/86400),i=c%86400,d=Math.floor(i/3600),_=Math.floor(i%3600/60),E=i%60,C=`${String(d).padStart(2,"0")}:${String(_).padStart(2,"0")}:${String(E).padStart(2,"0")}`,p=c<=86400?"red":c<=3*86400?"amber":"normal";return{status:"upcoming",days:g,clock:C,urgency:p}}function Hs(e,a){if(!e)return 0;const t=new Date(e),l=new Date(a+"T00:00:00");if(isNaN(t)||isNaN(l))return 0;const c=l.getTime()-t.getTime();return c<0?0:Math.floor(c/(7*24*60*60*1e3))+1}function _t(e,a){const t=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),l=i=>new Date(i+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),c=new Date().toISOString().slice(0,10),g=(e??[]).filter(i=>(i.end_date||i.event_date)>=c).map(i=>({ev:i,cd:Fs(i)})).filter(({cd:i})=>i.status==="ongoing"||i.days<=14).sort((i,d)=>i.ev.event_date.localeCompare(d.ev.event_date)).slice(0,5);return g.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${g.map(({ev:i,cd:d})=>{const _=d.status==="ongoing"||d.urgency==="red",E=d.urgency==="amber",C=_?"bg-red-50 border-red-300 ring-2 ring-red-200":E?"bg-amber-50 border-amber-200":"bg-white border-gray-200",p=_?"bg-red-100 animate-pulse":E?"bg-amber-100":"bg-gray-100",w=Hs(a,i.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${C}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${p}">${_?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${qs[i.event_type]}">${Rs[i.event_type]}</span>
            <span class="text-[11px] text-gray-400">${l(i.event_date)}</span>
            ${w>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${w}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${_?"text-red-800":"text-gray-800"}">${t(i.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${d.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${_?"text-red-600":E?"text-amber-600":"text-gray-500"}">อีก ${d.days} วัน</p>
               <p class="text-[11px] font-mono ${_?"text-red-400":"text-gray-400"}">${d.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function kt(e,a,t=null){const l=d=>d==="A"?"#059669":d==="B"?"#2563eb":"#d97706",c=(d="0.11")=>t?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${d};color:${l(t.grade)}">${t.grade}</span>
       </div>`:"";if(!e.length)return"";const g=e.map(d=>({...d,cd:ps(d.start_time,d.end_time)})).sort((d,_)=>{const E={active:0,upcoming:1,done:2};return E[d.cd.status]-E[_.cd.status]||(d.start_time??"").localeCompare(_.start_time??"")}),i=g.some(d=>d.cd.status==="active");return`
  <div onclick="window._openWenDuty('${a}')"
    class="relative overflow-hidden mb-3 border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-150
           ${i?"bg-red-50 border-red-300 ring-4 ring-red-100":"bg-amber-50 border-amber-300 ring-4 ring-amber-100"}">
    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                ${i?"bg-red-100 animate-pulse":"bg-amber-100"}">${i?"🚨":"🛡️"}</div>
    <div class="flex-1 min-w-0">
      <span class="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1
        ${i?"bg-red-200 text-red-800":"bg-amber-200 text-amber-800"}">เวรวันนี้</span>
      <p class="font-extrabold text-base mb-1 ${i?"text-red-800":"text-amber-800"}">
        ${i?"🔴 ถึงเวลาเวรแล้ว!":`วันนี้คุณมีเวร ${g.length} จุด`}
      </p>
      <div class="space-y-1">
        ${g.map(d=>d.cd.status==="active"?`
        <div class="bg-red-100/70 rounded-lg px-2 py-1.5 -mx-2">
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${o(d.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${o(d.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${d.cd.cls}">${d.cd.label}</span>
          </div>
        </div>`:`
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${d.cd.status==="done"?"text-gray-400 line-through":"text-amber-700"}">
            📍 ${o(d.name)} <span class="${d.cd.status==="done"?"text-gray-300":"text-amber-500"}">(${o(d.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${d.cd.cls}">${d.cd.label}</span>
        </div>`).join("")}
      </div>
      <p class="text-[11px] mt-2 font-semibold ${i?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${c()}
  </div>`}const Me=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let fe=null;function Et(e,a){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const t=parseInt(String(a??"").replace(/[^0-9]/g,""),10);return t>=4&&t<=6?"สามัญมัธยม ม.ปลาย":t>=1&&t<=3?"สามัญมัธยม ม.ต้น":null}async function Gs(e){ke("overview"),Ee("ภาพรวมผู้บริหาร"),ge(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[a,t]=await Promise.all([ds().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),Ie().catch(()=>({}))]),l=Object.fromEntries(a.subjectRows.map(v=>[v.id,v])),c=Object.fromEntries(Me.map(v=>[v,0]));let g=0;a.classRows.forEach(v=>{const I=l[v.course_id],X=I?Et(I.subject_group,I.grade_level):null;X?c[X]++:g++});const i=new Set(a.classRows.map(v=>v.course_id).filter(Boolean)),d=a.subjectRows.filter(v=>i.has(v.id)),_=Object.fromEntries(Me.map(v=>[v,new Set])),E=new Set;d.forEach(v=>{const I=Et(v.subject_group,v.grade_level);I?_[I].add(v.subject_name):E.add(v.subject_name)});const C=Object.fromEntries(Me.map(v=>[v,_[v].size])),p=new Set(d.map(v=>v.subject_name)).size,w=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:a.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:a.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:a.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:p,hint:"นับชื่อวิชาไม่ซ้ำ"}],m=()=>w.map(v=>`
    <button type="button" data-exec-stat="${v.key}"
      class="text-left bg-white rounded-2xl border ${fe===v.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${v.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${v.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${v.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${v.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${fe===v.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),f=(v,I)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${v}</span>
      <span class="text-sm font-bold text-gray-800">${I.toLocaleString("th-TH")}</span>
    </div>`,x=()=>{if(!fe)return"";let v="";if(fe==="teachers"||fe==="students"){const I=w.find(X=>X.key===fe);v=`<p class="text-sm text-gray-500">${I.icon} ${I.label}ทั้งหมด <b class="text-gray-800">${I.value.toLocaleString("th-TH")}</b> คน (${I.hint})</p>`}else fe==="courses"?v=Me.map(I=>f(I,c[I])).join("")+(g>0?f("ไม่ระบุหมวด/ยังไม่ผูกวิชา",g):""):fe==="subjects"&&(v=Me.map(I=>f(I,C[I])).join("")+(E.size>0?f("ไม่ระบุหมวด",E.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${v}
    </div>`},b={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},$=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter(v=>v.show&&["council","terangganu","regrade"].includes(v.key)).map(v=>{const[I,X]=b[v.key]||["#E4E4E7","#9C9CA3"];return{key:v.key,id:v.id,emoji:v.emoji,label:v.label,from:I,to:X,badge:v.badge,onclick:v.href?`window.location.href='${v.href}'`:`window._navTo('${v.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map(v=>Nt(v,t.iconTileStyle)).join(""),D=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map(v=>`
    <a href="${v.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${v.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${v.label}</span>
    </a>`).join("");ge(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${o((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${m()}
    </div>
    <div id="exec-stat-detail">${x()}</div>

    <div class="mt-5 mb-1 md:hidden">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</h4>
      <div class="flex gap-3 overflow-x-auto pb-1" id="exec-icon-grid">
        ${$}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">🖥️ จอมอนิเตอร์</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${D}
      </div>
    </div>
  </div>`);function Y(){document.querySelectorAll("[data-exec-stat]").forEach(v=>{v.onclick=()=>{var X;const I=v.dataset.execStat;fe=fe===I?null:I,document.getElementById("exec-stat-cards").innerHTML=m(),document.getElementById("exec-stat-detail").innerHTML=x(),Y(),(X=document.getElementById("exec-stat-detail-inner"))==null||X.scrollIntoView({behavior:"smooth",block:"nearest"})}})}Y()}async function Ct(e,a=[]){var O;if(ke("overview"),Ee("ภาพรวม"),ut(e).includes("executive")){Gs(e);return}const{getPendingExamRequestCount:t}=await be(async()=>{const{getPendingExamRequestCount:s}=await import("./api-CWYJTdOa.js");return{getPendingExamRequestCount:s}},__vite__mapDeps([0,1,2,3,4])),{getMyDonationRequests:l}=await be(async()=>{const{getMyDonationRequests:s}=await import("./api-CWYJTdOa.js");return{getMyDonationRequests:s}},__vite__mapDeps([0,1,2,3,4])),{getUnreadNotifications:c}=await be(async()=>{const{getUnreadNotifications:s}=await import("./api-CWYJTdOa.js");return{getUnreadNotifications:s}},__vite__mapDeps([0,1,2,3,4])),[g,i,d,_,E,C,p,w,m]=await Promise.all([e?jt(e.id).catch(()=>[]):Lt().catch(()=>[]),ot((e==null?void 0:e.id)??null).catch(()=>[]),Ie().catch(()=>({})),e?t(e.id).catch(()=>0):Promise.resolve(0),e?l(e.id).catch(()=>[]):Promise.resolve([]),e?c(e.id).catch(()=>[]):Promise.resolve([]),e?fs(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?vs(e.teacher_code).catch(()=>null):Promise.resolve(null),e?be(()=>import("./sports-portals.js_v_10.22-0gLUuL_V.js"),__vite__mapDeps([38,6,19,1,17,20,21,2,9])).then(s=>s.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1})]),f=parseInt(d.academicYear??2568),x=parseInt(d.semester??1),b=ms(d.semester_start);Be&&(clearInterval(Be),Be=null),je&&(clearInterval(je),je=null),Pe&&(clearInterval(Pe),Pe=null),Le&&(clearInterval(Le),Le=null),Te&&(clearInterval(Te),Te=null);const[L,$,T,D,Y]=await Promise.all([e?os(e.id,f,x).catch(()=>[]):Promise.resolve([]),e?ns(e.id).catch(()=>[]):Promise.resolve([]),ls().catch(()=>[]),rs().catch(()=>[]),e?is(f,x).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries(D.map(s=>[s.id,s]));const v=window._classroomMapGlobal,I={};$.forEach(s=>{I[s.teacher_schedule_id]||(I[s.teacher_schedule_id]=[]),I[s.teacher_schedule_id].push(s.class_id)});const X=Object.fromEntries(i.map(s=>[s.id,s])),ae=Object.fromEntries(T.map(s=>[s.period_no,s])),le=new Date().getDay(),J=L.filter(s=>s.day_of_week===le&&(I[s.id]??[]).length>0).map(s=>{const y=(s.period_no??1)+(s.span_periods??1)-1;return{...s,linkedClasses:(I[s.id]??[]).map(h=>X[h]).filter(Boolean),period:ae[s.period_no],actualEndPeriod:ae[y]??ae[s.period_no]}}).sort((s,y)=>s.period_no-y.period_no),re=s=>{var h,M;const y=Fe((h=s.period)==null?void 0:h.start_time,(M=s.actualEndPeriod)==null?void 0:M.end_time);return y.label.includes("กำลังสอน")?0:y.label.startsWith("เสร็จ")?2:1},A=J.find(s=>re(s)===0)??null,W=[...J].filter(s=>s!==A).sort((s,y)=>re(s)-re(y)||s.period_no-y.period_no),P=a.filter(s=>s.category==="สามัญ"),de=E.find(s=>s.package_type==="donation"&&s.status==="approved"),pe=E.filter(s=>s.package_type==="donation"&&s.status==="approved").reduce((s,y)=>s+(y.amount??0),0),Z=(s,y)=>{const h=parseInt(s,10);return Number.isFinite(h)&&h>0?h:y},ee=()=>{const s=String(d.donationStickerTiers??"").trim();return Z(d.donationMinAmount,99),Z(d.donationAmountStep,50),(s?s.split(`
`).filter(Boolean).map(R=>{const[K,oe,z,se,we]=R.split("|").map(Ce=>Ce.trim());return{amount:Z(K,0),sticker:oe||"🏅",title:z||`ผู้สนับสนุน ${K} บาท`,note:se||"",color:we||""}}).filter(R=>R.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([R,K,oe,z,se])=>({amount:R,sticker:K,title:oe,note:z,color:se}))).sort((R,K)=>R.amount-K.amount).map((R,K)=>{const oe=d[`donationStickerImg${K+1}`]??"";return oe&&/^https?:\/\//.test(oe)?{...R,sticker:oe}:R})},ie=s=>{if(!s)return"";const y=parseInt(s.slice(1,3),16),h=parseInt(s.slice(3,5),16),M=parseInt(s.slice(5,7),16);return`border:2px solid ${s};box-shadow:0 0 0 4px rgba(${y},${h},${M},0.25),0 4px 20px rgba(${y},${h},${M},0.18);`},ve=()=>{const s=String(d.donationSpecialFeatures??"").trim(),y=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return s?s.split(`
`).filter(Boolean).map(h=>{const M=h.split("|").map(R=>R.trim());return{icon:M[0]||"✨",text:M[1]||M[0]||h,minTier:parseInt(M[2])||1}}).filter(h=>h.text):y.map(([h,M,R])=>({icon:h,text:M,minTier:R}))};let te=null,ne=0,xe="",ye="",ce="border border-gray-200 shadow-md";if(de&&d.quotaMode==="school_sponsored"){const s=ee(),y=pe;if(te=[...s].reverse().find(h=>y>=h.amount)??s[0],ne=te?s.indexOf(te)+1:0,te){ye=ie(te.color),ce="";const h=String(te.sticker??""),M=/^https?:\/\//.test(h)?`<img src="${h}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${h}</span>`,R=te.color?`color:${te.color};`:"color:#f59e0b;";xe=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${M}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${R}">
            ${te.note||te.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async s=>{if(!s)return;const{renderClassDetail:y}=await be(async()=>{const{renderClassDetail:h}=await import("./teacher-views-classes-DgW_t4uH.js").then(M=>M.t);return{renderClassDetail:h}},__vite__mapDeps([34,6,0,1,2,3,4,9,10,35,30,20,15,21,29,24,26,27,28,36]));y(e,s)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:s}=await be(async()=>{const{openSmartClassroomLanding:y}=await import("./teacher-views-smart-classroom-DZSSjXJI.js");return{openSmartClassroomLanding:y}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]));s(e)};const n=b>0?(()=>{const s=new Date(d.semester_start);s.setDate(s.getDate()+(b-1)*7);const y=new Date(s);y.setDate(y.getDate()+6);const h=R=>`${String(R.getDate()).padStart(2,"0")}/${String(R.getMonth()+1).padStart(2,"0")}`,M=`📅 สัปดาห์ที่ ${b} (${h(s)} – ${h(y)}) · ภาคเรียนที่ ${x}/${f}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${M}</span><span class="mr-10 lg:mr-16">${M}</span>
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
        ${a.map(h=>`
        <div class="border border-gray-100 rounded-xl p-3">
          <p class="font-bold text-gray-800">${h.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${h.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">${h.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${h.category==="สามัญ"?`
            <button onclick="window._openLifeSkillScore('${h.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>`:`
            <button onclick="window._openReligionScore('${h.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${h.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-4">ไม่มีห้องที่ปรึกษา</p>'}
      </div>
    </div>`,document.body.appendChild(s),s.addEventListener("click",h=>{h.target===s&&s.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:s}=await be(async()=>{const{openTeacherShirtSizeModal:y}=await import("./sports-portals.js_v_10.22-0gLUuL_V.js");return{openTeacherShirtSizeModal:y}},__vite__mapDeps([38,6,19,1,17,20,21,2,9]));s(e)};const B=[...new Set(i.map(s=>s.class_name).filter(Boolean))].sort(),j=JSON.stringify(B).replace(/"/g,"&quot;"),N=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:F.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:P.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${j}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:a.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:m.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],q={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-competition-manager":["#D9E7F8","#4C86C6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},U=(window._teacherOverviewSystems||[]).filter(s=>s.show).map(s=>{const[y,h]=q[s.key]||["#E4E4E7","#9C9CA3"];return{key:s.key,id:s.id,show:!0,emoji:s.emoji,label:s.label,from:y,to:h,badge:s.badge,onclick:s.href?`window.location.href='${s.href}'`:`window._navTo('${s.nav}')`}}),H=[...N,...U].filter(s=>s.show),r=(e==null?void 0:e.overview_prefs)||null,u=r?H.filter(s=>!(r.hiddenKeys||[]).includes(s.key)).sort((s,y)=>{const h=r.iconOrder||[],M=h.indexOf(s.key),R=h.indexOf(y.key);return M===-1&&R===-1?0:M===-1?1:R===-1?-1:M-R}):H,S=u.map(s=>Nt(s,d.iconTileStyle)).join("");if(window._openOverviewCustomizer=()=>zs(e,H,a),ge(`<div class="animate-fade">

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${C.length?(()=>{const s={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},y={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},h={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},M={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},R=[...new Set(C.map(z=>z.metric))].map(z=>`<span style="background:${h[z]??"#f3f4f6"};color:${y[z]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${s[z]??z}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(C.filter(z=>z.supervisor).map(z=>[z.supervisor_id,z.supervisor])).values()].map(z=>M[z.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${C.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${R}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${e==null?void 0:e.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})():""}

    <!-- กำลังสอนอยู่ (ย้ายมาไว้ในโซนเร่งด่วนบนสุด) -->
    ${A?(()=>{var h,M;const s=A.period?`${A.period.start_time.substring(0,5)}–${A.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${A.period_no}`,y=((h=A.linkedClasses[0])==null?void 0:h.id)??null;return`
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
          ${A.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${A.linkedClasses.map(R=>{var K;return((K=R.master_subjects)==null?void 0:K.subject_name)??R.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${A.linkedClasses.map(R=>{const K=R.classroom_id?v[R.classroom_id]:null;return R.class_name+(K?` · 📍${K.building} ห้อง ${K.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${xt((M=A.actualEndPeriod)==null?void 0:M.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`})():""}

    ${n}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="bg-white rounded-2xl ${ce} px-5 pt-5 pb-5 mb-5 flex items-center gap-5 overflow-hidden" style="${ye}">
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
      ${xe}
    </div>

    <!-- สรุปของฉัน -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      ${[{label:"คอร์สวิชาของฉัน",value:g.length,icon:"📖",color:"text-emerald-700",bg:"bg-emerald-50",nav:"my-courses"},{label:"ห้องเรียน",value:i.length,icon:"🏫",color:"text-blue-700",bg:"bg-blue-50",nav:"my-classes"},{label:"คำร้องรออนุมัติ",value:_,icon:"🔔",color:_>0?"text-red-700":"text-gray-400",bg:"bg-red-50",nav:"requests"},{label:"Smart Classroom",value:"เปิดห้องสอนสด",icon:"👑",color:"text-amber-700",bg:"bg-amber-50",onclick:"window._openSmartClassroomLanding()"}].map(s=>`
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
      ${u.length>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${S}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${kt(p,e.teacher_code,w)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${_t(Y,d.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${Mt[le]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${L.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':$.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${J.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${L.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":$.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${L.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:$.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${W.map((s,y)=>{var K,oe;const h=Fe((K=s.period)==null?void 0:K.start_time,(oe=s.actualEndPeriod)==null?void 0:oe.end_time),M=h.label.startsWith("เสร็จ"),R=s.period?`${s.period.start_time.substring(0,5)}–${(s.actualEndPeriod??s.period).end_time.substring(0,5)}`:`คาบ ${s.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${M?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${M?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${M?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${s.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${M?"text-gray-400":"text-gray-700"} truncate">
                  ${s.linkedClasses.map(z=>{var se;return((se=z.master_subjects)==null?void 0:se.subject_name)??z.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${s.linkedClasses.map(z=>{const se=z.classroom_id?v[z.classroom_id]:null;return z.class_name+(se?` 📍${se.building} ห้อง ${se.room_number}`:"")}).join(" · ")} · ${R}
                </p>
              </div>
              <span id="today-cd-${y}" class="text-xs font-medium flex-shrink-0 ${h.cls}">${h.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),(O=document.getElementById("donor-sticker-btn"))==null||O.addEventListener("click",()=>{if(!te)return;const s=ve(),y=te.color||"#f59e0b",h=parseInt(y.slice(1,3),16),M=parseInt(y.slice(3,5),16),R=parseInt(y.slice(5,7),16),K=String(te.sticker??""),oe=/^https?:\/\//.test(K)?`<img src="${K}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${K}</div>`,z=document.createElement("div");z.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",z.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${h},${M},${R},0.85),rgba(${h},${M},${R},1))">
          ${oe}
          <p class="text-white font-bold text-base">${te.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${te.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${s.map(se=>ne>=(se.minTier??1)?`<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${se.icon}</span>
                     <span class="leading-snug">${se.text}</span>
                   </div>`:`<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${se.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${se.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${ne<4?`
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>`:""}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${h},${M},${R},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(z),z.addEventListener("click",se=>{se.target===z&&z.remove()})}),J.length>0&&(Be=setInterval(()=>{W.forEach((s,y)=>{var R,K;const h=document.getElementById(`today-cd-${y}`);if(!h){clearInterval(Be);return}const M=Fe((R=s.period)==null?void 0:R.start_time,(K=s.actualEndPeriod)==null?void 0:K.end_time);h.textContent=M.label,h.className=`text-xs font-medium flex-shrink-0 ${M.cls}`})},3e4)),A&&(je=setInterval(()=>{var h,M,R,K;const s=document.getElementById("active-class-countdown");if(!s){clearInterval(je);return}Fe((h=A.period)==null?void 0:h.start_time,(M=A.actualEndPeriod)==null?void 0:M.end_time).label.startsWith("เสร็จ")?(clearInterval(je),(R=document.getElementById("active-class-card"))==null||R.remove()):s.textContent=xt((K=A.actualEndPeriod)==null?void 0:K.end_time)},1e3)),document.getElementById("teacher-live-clock")){const s=()=>{const y=new Date,h=document.getElementById("teacher-live-clock");if(!h){clearInterval(Pe);return}h.textContent=`${String(y.getHours()).padStart(2,"0")}:${String(y.getMinutes()).padStart(2,"0")}:${String(y.getSeconds()).padStart(2,"0")}`};s(),Pe=setInterval(s,1e3)}e&&p.length&&(Le=setInterval(()=>{const s=document.getElementById("wen-duty-card");if(!s){clearInterval(Le),Le=null;return}s.innerHTML=kt(p,e.teacher_code,w)},3e4)),e&&Y.length&&(Te=setInterval(()=>{const s=document.getElementById("wcal-upcoming-card");if(!s){clearInterval(Te),Te=null;return}s.innerHTML=_t(Y,d.semester_start)},1e3))}function zs(e,a,t){var p,w;(p=document.getElementById("overview-customizer-modal"))==null||p.remove();const l=(e==null?void 0:e.overview_prefs)||null;let c=a.map(m=>m.key);if((w=l==null?void 0:l.iconOrder)!=null&&w.length){const m=new Set(c),f=l.iconOrder.filter(b=>m.has(b)),x=c.filter(b=>!f.includes(b));c=[...f,...x]}const g=new Set(((l==null?void 0:l.hiddenKeys)||[]).filter(m=>c.includes(m))),i=Object.fromEntries(a.map(m=>[m.key,m])),d=document.createElement("div");d.id="overview-customizer-modal",d.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const _=()=>c.map((m,f)=>{const x=i[m];if(!x)return"";const b=g.has(m),L=x.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${b?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${x.from},${x.to})">${x.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${L}</span>
      <button type="button" data-oc-up="${m}" ${f===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${m}" ${f===c.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${m}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${b?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${b?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),E=()=>{const m=d.querySelector("#oc-list");m&&(m.innerHTML=_()),C()},C=()=>{d.querySelectorAll("[data-oc-toggle]").forEach(m=>m.onclick=()=>{const f=m.dataset.ocToggle;g.has(f)?g.delete(f):g.add(f),E()}),d.querySelectorAll("[data-oc-up]").forEach(m=>m.onclick=()=>{const f=c.indexOf(m.dataset.ocUp);f>0&&([c[f-1],c[f]]=[c[f],c[f-1]],E())}),d.querySelectorAll("[data-oc-down]").forEach(m=>m.onclick=()=>{const f=c.indexOf(m.dataset.ocDown);f<c.length-1&&([c[f+1],c[f]]=[c[f],c[f+1]],E())})};d.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <div>
          <p class="font-bold text-gray-800 text-sm">⚙️ ปรับหน้าภาพรวมแบบรวดเร็ว</p>
          <p class="text-[11px] text-gray-400 mt-0.5">ซ่อน/แสดง และเรียงลำดับไอคอน "ระบบอื่น ๆ"</p>
        </div>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" id="oc-close">×</button>
      </div>
      <div class="px-4 py-2 overflow-y-auto flex-1" id="oc-list">
        ${_()}
      </div>
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0 space-y-2">
        <button type="button" id="oc-save" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">บันทึก</button>
        <button type="button" id="oc-reset" class="w-full py-2 rounded-xl text-xs text-gray-400 hover:text-gray-600 transition">รีเซ็ตเป็นค่าเริ่มต้น</button>
      </div>
    </div>`,document.body.appendChild(d),C(),d.addEventListener("click",m=>{m.target===d&&d.remove()}),d.querySelector("#oc-close").addEventListener("click",()=>d.remove()),d.querySelector("#oc-save").addEventListener("click",async()=>{const m=d.querySelector("#oc-save");m.disabled=!0,m.textContent="กำลังบันทึก...";try{const f={iconOrder:c,hiddenKeys:[...g]};await mt(e.id,{overview_prefs:f}),e.overview_prefs=f,d.remove(),Q("บันทึกการปรับแต่งแล้ว","success"),Ct(e,t)}catch(f){console.error(f),Q("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),m.disabled=!1,m.textContent="บันทึก"}}),d.querySelector("#oc-reset").addEventListener("click",async()=>{try{await mt(e.id,{overview_prefs:null}),e.overview_prefs=null,d.remove(),Q("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),Ct(e,t)}catch(m){console.error(m),Q("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function Vs(e,a,t,l,c){const g=l.samaiLogoBwUrl??l.samaiLogoUrl??"",i=Number(e.credit??1),d=i*2,_=i*2*20,C=String(e.grade_level??"").replace(/[^0-9]/g,""),p=["AGM","AGMVOC"].includes(e.subject_group??""),w=c.find(W=>W.dept_code===e.dept)??{},m=w.dept_name??e.dept??"",f=w.head_name??"",x=w.head_sign_url??"",b=l.samaiSchoolName??"",L=l.samaiDirectorName??"",$=l.samaiDirectorSignUrl??"",T=p?l.agmAcademicHeadName??l.samaiAcademicHeadName??"":l.samaiAcademicHeadName??"",D=new Date,Y=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],v=`${D.getDate()} ${Y[D.getMonth()]} พ.ศ. ${D.getFullYear()+543}`,I=l.academicYear??D.getFullYear()+543,X=l.semester??1,ae=(t==null?void 0:t.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",le=a.map(W=>W.class_name).join(", "),J=C+(le?" "+le:""),re=p?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",A=`<!DOCTYPE html>
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
    ${g?`<img src="${g}" style="width:72px;height:72px;object-fit:contain;" onerror="this.style.display='none'"/>`:'<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${o(b)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${o(v)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${X} ปีการศึกษา ${I}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${o(b)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${o((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${o(ae)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${o(m)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${o(e.subject_name??"")}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${o(e.subject_code??"")}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${i}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${d}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${_}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${p?"อิสลามศึกษา":"มัธยมศึกษา"}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${o(J)}</div>

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
    ${x?`<img src="${o(x)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${o(f)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${o(m)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${o(T)}</div>
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
    ${$?`<img src="${o($)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${o(L)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${o(b)}</div>

</div>
</body></html>`;Pt(A)}export{Vs as _openLessonPlanApproval,kt as _renderWenDutyCard,_t as _renderWorkCalendarUpcoming,ga as openCourseDocPage2Modal,_a as renderAnnouncementsView,Pa as renderAttendance,Ma as renderAttendanceGrid,ea as renderClassDetail,ka as renderClassEditForm,Zs as renderClassForm,ta as renderCourseDocLangConfig,va as renderCourseForm,ha as renderExamDocuments,Ta as renderGrades,Aa as renderGradesGrid,Na as renderLifeSkillScore,Ea as renderMyClasses,ba as renderMyCourses,Da as renderPrayerRoomMonitor,Oa as renderPrayerScore,ya as renderProfile,fa as renderProfileSetup,Ra as renderReadingScore,Ia as renderRequests,Ca as renderSchedule,Sa as renderScheduleBuilder,sa as renderScheduleGrid,ja as renderScoreColumns,Ct as renderTeacherOverview};
