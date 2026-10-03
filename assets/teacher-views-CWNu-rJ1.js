const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-J-Ak1T-Y.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-smart-classroom-D3DhAsOr.js","assets/ui-BRupvAcB.js","assets/teacher-KTKXfqj4.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sync-Bgbsg-ec.js","assets/theme-qDnPEUQn.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-DGb4Ysbu.js","assets/teacher-views-utils-D4PCqVsX.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-CZNvwg6f.js","assets/academic-term-switcher-BnvBvx15.js","assets/sports-portals.js_v_10.22-kVNs_U_9.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/tutorial-C3EpULMT.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-DtUo0XvO.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-VY_3enml.js","assets/teacher-views-attendance-B8qX3FnK.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-BZQUk4FN.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-quiz-monitor-DA1yIqRo.js","assets/teacher-views-quiz-analytics-Cq25asc_.js","assets/teacher-views-dashboard-B4a2-7-n.js","assets/teacher-views-classes-DL4zHYyC.js","assets/pp5-doc-x5ykYQ5S.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-BYoW1xGl.js","assets/sports-portals.js_v_10.22-DkDEs7nU.js"])))=>i.map(i=>d[i]);
import{a as Q,g as ve,_ as fe}from"./ui-BRupvAcB.js";import{getDepartments as Ze,getTeachers as Tt,getSubjectCoTeachers as Jt,updateMyProfile as it,getCourseDocPage2 as Qt,getSystemConfig as De,getMySubjects as At,getMasterSubjects as It,getMyClasses as dt,getUniqueRooms as Bt,getUniqueReligionRooms as Pt,getHomeroomTeachers as Mt,getCourseDocLangSettings as Zt,getCourseSyllabus as es,getLessonPlans as ts,findCurriculumStandards as ss,saveCourseDocPage2 as as,getClassStudents as os,getAcademicTerms as ns,getMySchedule as ls,getClassScheduleLinks as rs,getPeriods as is,getClassrooms as ds,getWorkCalendarEvents as cs,getExecutiveOverviewStats as ps,updateTeacher as xt}from"./api-J-Ak1T-Y.js";import{c as ms,a as bt,r as us}from"./academic-term-switcher-BnvBvx15.js";import{c as Nt,s as tt}from"./supabase-BV-W2lsh.js";import"./sync-Bgbsg-ec.js";import{o as Dt}from"./print-overlay-BVfxEd6n.js";import{_DAYS_TH_FULL as Ot,setActiveNav as Te,setTitle as Ae,setContent as ye,SELECT_CLS as ge,INPUT_CLS as Y,CREDIT_OPTS as xs,GRADE_OPTS as et,formatPhone as Je,_htmlEsc as a,_dutyCountdownInfo as bs,_teacherPositionList as gt,_currentWeek as gs,renderIconTile as Rt,_activeRemainingDisplay as vt,_countdownInfo as We}from"./teacher-views-utils-D4PCqVsX.js";import{b as oa,e as na,a as la,r as ra}from"./teacher-views-classes-DL4zHYyC.js";import{f as ja,c as La,g as Ta,h as Aa,i as Ia,d as Ba}from"./teacher-views-classes-DL4zHYyC.js";import{uploadTeacherPhoto as vs}from"./storage-CuUjCgvI.js";import{openPP5CourseModal as fs}from"./pp5-doc-x5ykYQ5S.js";import{_ as ys}from"./teacher-views-grades-BZQUk4FN.js";import{r as Ma,a as Na,b as Da}from"./teacher-views-grades-BZQUk4FN.js";import{renderAttendance as Ra,renderAttendanceGrid as qa,renderLifeSkillScore as Fa,renderPrayerRoomMonitor as Ha,renderPrayerScore as Ga,renderReadingScore as za}from"./teacher-views-attendance-B8qX3FnK.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./score-display-CQ4dUIPx.js";import"./confetti-loader-BAN5Lv-C.js";import"./regrade-api-DtUo0XvO.js";import"./score-qr-scanner-VY_3enml.js";import"./leave-time-CrS9gT63.js";const qt="https://zhjqkylesnhcotpkzoxr.supabase.co",Ft="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let Ce=null;function ft(e,s,t){const l=new Date(s+"T00:00:00"),c=new Date(e+"T00:00:00"),g=Math.floor((c-l)/864e5);if(g<0)return null;const i=Math.floor(g/7)+1;return i<=t?i:null}function hs(e,s,t){const[l,c]=e.includes(":")?e.split(":"):[null,e];return(l===null||l===t)&&c===s}async function ws(e){if(!e)return null;Ce||(Ce=Nt(qt,Ft));const[s,t,l]=await Promise.all([Ce.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),Ce.from("duty_points").select("assigned_to"),Ce.from("settings").select("week_start_date,total_weeks").single()]),c=l.data||{},g=c.week_start_date,i=c.total_weeks||20;if(!g)return null;const d=new Date().toISOString().slice(0,10),$=ft(d,g,i)||1;if($<=5)return{grade:"A",score:100,week:$};const _=String(e);let k=0;for(const h of t.data||[])for(const T of h.assigned_to||[])(T.includes(":")?T.split(":")[1]:T)===_&&k++;if(k===0)return null;const p={};for(const h of s.data||[]){const T=ft(h.date,g,i);T!==null&&(p[T]||(p[T]=[]),p[T].push(h))}const y=5,f=Math.min($,i-2);let u=0;for(let h=1;h<=f;h++)if(h<=y)u+=100;else{const T=p[h]||[],B=T.length,V=T.filter(ne=>ne.is_late).length,v=B-V,M=Math.min(100,Math.round(B/k*100)),X=B>0?Math.max(0,Math.round(v/B*100)):100;u+=Math.round(M*.6+X*.4)}const b=Math.round(u/f);return{grade:b>=90?"A":b>=75?"B":"C",score:b,week:$}}async function $s(e){if(!e)return[];Ce||(Ce=Nt(qt,Ft));const{data:s,error:t}=await Ce.from("duty_points").select("name, time, assigned_to");if(t||!s)return[];const l=String(e),c=Ot[new Date().getDay()];return s.filter(g=>(g.assigned_to??[]).some(i=>hs(i,l,c))).map(g=>{const[i,d]=String(g.time??"").split("-").map($=>$.trim());return{name:g.name,time:g.time,start_time:i,end_time:d}})}function Ht({prefix:e,samaiRooms:s,religionRooms:t,homeroomRooms:l,assignments:c,teacherId:g,academicYear:i,semester:d}){const $=(_,k,p,y,m)=>{const f=`${e}-advisor-rooms-${p}`,u=`${e}-room-${p}`,b=(l??[]).filter(h=>h.category===_&&Number(h.academic_year)===Number(i)&&Number(h.semester)===Number(d)),L=new Map((c??[]).filter(h=>h.category===_).map(h=>[h.main_room,h]));return`<div id="${e}-room-${p}-wrap" class="space-y-2">
      <button type="button" data-advisor-room-toggle="${f}" aria-expanded="false"
        class="w-full flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 px-4 py-3 text-left transition">
        <span class="font-semibold text-sm text-gray-700">${m} ครูที่ปรึกษา${y}</span>
        <span class="flex items-center gap-2 text-xs text-gray-400">
          <span data-advisor-room-count="${u}">0 ห้อง</span><span data-advisor-room-chevron="${f}">▾</span>
        </span>
      </button>
      <div id="${f}" class="hidden border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-52 overflow-y-auto">
        <p class="text-[11px] text-gray-400 mb-2">เลือกได้มากกว่า 1 ห้อง · ห้องที่มีครูคนอื่นรับผิดชอบอยู่จะเลือกไม่ได้</p>
        ${k.length?k.map(h=>{var X;const T=L.get(h),B=T&&Number(T.teacher_id)===Number(g),V=!!T&&!B,v=((X=T==null?void 0:T.teachers)==null?void 0:X.full_name)||"มีครูที่ปรึกษาแล้ว",M=b.some(ne=>ne.main_room===h);return`<label class="flex items-start gap-2 text-sm rounded-lg px-2 py-1.5 ${V?"bg-gray-50 text-gray-400 cursor-not-allowed":"cursor-pointer hover:bg-emerald-50 hover:text-emerald-700"}">
            <input type="checkbox" name="${u}" value="${a(h)}" data-advisor-room="${u}" ${M?"checked":""} ${V?"disabled":""} class="text-emerald-600 rounded mt-0.5" />
            <span class="min-w-0 flex-1"><span class="block">${a(h)}</span>${V?`<span class="block text-[11px] text-gray-400">🔒 ${a(v)}</span>`:""}</span>
          </label>`}).join(""):`<p class="text-xs text-gray-400">ยังไม่มีห้อง${y}</p>`}
      </div>
    </div>`};return`<div class="border-t border-gray-100 pt-4 space-y-3">
    <label class="block text-sm font-semibold text-gray-700">🏠 ห้องที่ปรึกษา</label>
    ${$("สามัญ",s,"samai","สามัญ","🏫")}
    ${$("ศาสนา",t,"religion","ศาสนา","🕌")}
  </div>`}function Gt(e=document){const s=()=>e.querySelectorAll("[data-advisor-room-count]").forEach(t=>{const l=t.dataset.advisorRoomCount,c=e.querySelectorAll(`input[data-advisor-room="${l}"]:checked`).length;t.textContent=`${c} ห้อง`});e.querySelectorAll("[data-advisor-room-toggle]").forEach(t=>{t.addEventListener("click",()=>{const l=e.querySelector(`#${t.dataset.advisorRoomToggle}`);if(!l)return;const c=l.classList.contains("hidden");l.classList.toggle("hidden",!c),t.setAttribute("aria-expanded",String(c));const g=e.querySelector(`[data-advisor-room-chevron="${t.dataset.advisorRoomToggle}"]`);g&&(g.textContent=c?"▴":"▾")})}),e.querySelectorAll("input[data-advisor-room]").forEach(t=>t.addEventListener("change",s)),s()}async function ha(e){Te("my-courses"),Ae("คอร์สวิชาของฉัน","courses"),ye(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[s,t]=await Promise.all([e?At(e.id):It().catch(()=>[]),e?dt(e.id).catch(()=>[]):Promise.resolve([])]),l=s,c=p=>t.filter(y=>{var m;return Number(y.course_id??((m=y.master_subjects)==null?void 0:m.id))===Number(p)}),g=p=>Number.isInteger(p)?String(p):Number(p).toFixed(1).replace(/\.0$/,""),i=p=>{const y=Number(p.credit),m=Number.isFinite(y)&&y>0;return{roomCount:c(p.id).length,credit:m?g(y):"—",periodsPerWeek:m?g(y*2):"—",periodsPerTerm:m?g(y*40):"—"}},d=p=>String(p.dept??p.subject_group??"").trim()||"รายวิชาอื่น ๆ",$=[...s.reduce((p,y)=>{const m=d(y);return p.has(m)||p.set(m,[]),p.get(m).push(y),p},new Map).entries()].sort(([p],[y])=>p.localeCompare(y,"th",{numeric:!0})),_=(p,y,m,f)=>`<div class="rounded-xl border ${f} px-3 py-2.5 min-w-0">
      <div class="flex items-center gap-2"><span class="text-base">${p}</span><strong class="text-lg leading-none text-gray-800">${y}</strong></div>
      <p class="mt-1 text-[10px] font-semibold text-gray-500">${m}</p>
    </div>`,k=p=>{const y=i(p);return`<article class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden">
        <div class="p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">${a(p.subject_code??"—")}</span>
                ${p.dept?`<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">${a(p.dept)}</span>`:""}
              </div>
              <h3 class="mt-2 text-base sm:text-lg font-extrabold text-gray-900 leading-snug">${a(p.subject_name)}</h3>
              <p class="mt-1 text-xs text-gray-400">ระดับชั้น ${a(p.grade_level??"ไม่ระบุ")}</p>
            </div>
            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center text-xl">📚</div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${_("🏫",y.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${_("🎓",y.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${_("🗓️",y.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${_("⏱️",y.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
          </div>

          <div class="mt-4 flex justify-end">
            <button onclick="window._openRegisterClass(${p.id})"
              class="w-full sm:w-auto min-h-[44px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 flex items-center justify-center gap-2">＋ เปิดห้องเรียน</button>
          </div>
        </div>

        <details class="border-t border-gray-100 group">
          <summary aria-label="ขยายเมนูเครื่องมือและเอกสารของรายวิชา"
            class="list-none cursor-pointer mx-3 sm:mx-4 my-3 px-3 py-2.5 flex items-center justify-between gap-3 rounded-xl border border-indigo-100 bg-indigo-50/60 text-xs font-bold text-indigo-800 hover:bg-indigo-100/70 hover:border-indigo-200 select-none transition">
            <span class="flex items-center gap-2 min-w-0"><span class="w-7 h-7 rounded-lg bg-white border border-indigo-100 flex items-center justify-center text-base flex-shrink-0">🧰</span><span class="truncate">เครื่องมือและเอกสารของรายวิชา</span></span>
            <span class="flex items-center gap-2 text-[10px] text-indigo-500 whitespace-nowrap"><span class="hidden sm:inline">คลิกเพื่อขยาย</span><span class="group-open:hidden">＋</span><span class="hidden group-open:inline">−</span></span>
          </summary>
          <div class="px-4 sm:px-5 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button class="course-workspace-btn col-span-2 min-h-[44px] text-xs text-white font-bold border border-blue-700 bg-blue-700 rounded-xl hover:bg-blue-800 shadow-sm" data-sid="${p.id}">📘 กำหนดการสอนและแผนหน้าเดียว</button>
            <button class="ccm-open-btn min-h-[40px] text-xs text-indigo-700 font-semibold border border-indigo-100 bg-indigo-50/50 rounded-xl hover:bg-indigo-50" data-sid="${p.id}" data-sname="${a(p.subject_name)}">⚙️ คอลัมน์คะแนน</button>
            <button onclick="window._openCourseDocPage2(${p.id})" class="min-h-[40px] text-xs text-emerald-700 font-semibold border border-emerald-100 bg-emerald-50/50 rounded-xl hover:bg-emerald-50">📝 คำอธิบายรายวิชา</button>
            <button class="lesson-plan-btn min-h-[40px] text-xs text-sky-700 font-semibold border border-sky-100 bg-sky-50/50 rounded-xl hover:bg-sky-50" data-sid="${p.id}">📋 ใบขออนุญาต</button>
            <button class="pp5-course-btn min-h-[40px] text-xs text-violet-700 font-semibold border border-violet-100 bg-violet-50/50 rounded-xl hover:bg-violet-50" data-sid="${p.id}">💾 เอกสาร ปพ.5</button>
          </div>
          <div class="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-end gap-2 flex-wrap">
            <button onclick="window._copyCourse(${p.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-purple-700 hover:bg-purple-50">📋 ทำสำเนา</button>
            <button onclick="window._editCourse(${p.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-gray-600 hover:bg-gray-100">✏️ แก้ไข</button>
            <button class="cd2-del-course-btn min-h-[36px] px-3 rounded-lg border border-red-100 bg-white text-xs font-semibold text-red-500 hover:bg-red-50" data-id="${p.id}" data-name="${a(p.subject_name)}">🗑️ ลบ</button>
          </div>
        </details>
      </article>`};ye(`<div class="animate-fade">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <p class="text-sm font-bold text-gray-700">รายวิชาที่เปิดสอน ${s.length} คอร์ส · ${t.length} ห้องเรียน</p>
          <p class="text-xs text-gray-400 mt-1">จำนวนคาบคำนวณตามโครงสร้างหลักสูตร 1 หน่วยกิต = 2 คาบต่อสัปดาห์ = 40 คาบต่อภาคเรียน</p>
        </div>
        <button onclick="window._openCourseForm()"
          class="btn-primary min-h-[44px] px-5 py-2.5 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 flex-shrink-0">
          <span>＋</span> เปิดคอร์สใหม่
        </button>
      </div>
      ${s.length?`
      <div class="space-y-7">
        ${$.map(([p,y])=>`<section>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">🏷️</div>
            <div><h2 class="font-extrabold text-gray-800">กลุ่มสาระ ${a(p)}</h2><p class="text-[11px] text-gray-400">${y.length} คอร์ส · ${y.reduce((m,f)=>m+c(f.id).length,0)} ห้องเรียน</p></div>
            <div class="h-px bg-gray-200 flex-1"></div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${y.map(k).join("")}</div>
        </section>`).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(p=>{p.addEventListener("click",()=>{window._deleteCourse(Number(p.dataset.id),p.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(p=>{p.addEventListener("click",()=>{ys(parseInt(p.dataset.sid),p.dataset.sname,t)})}),document.querySelectorAll(".course-workspace-btn").forEach(p=>{p.addEventListener("click",()=>{const y=parseInt(p.dataset.sid,10),m=s.find(f=>f.id===y);m&&zt(e,m,t)})}),document.querySelectorAll(".lesson-plan-btn").forEach(p=>{p.addEventListener("click",async()=>{const y=parseInt(p.dataset.sid),m=s.find(T=>T.id===y);if(!m)return;const f=t.filter(T=>{var B;return T.course_id===y||((B=T.master_subjects)==null?void 0:B.id)===y}),{getSystemConfig:u,getDepartments:b}=await fe(async()=>{const{getSystemConfig:T,getDepartments:B}=await import("./api-J-Ak1T-Y.js");return{getSystemConfig:T,getDepartments:B}},__vite__mapDeps([0,1,2,3,4])),[L,h]=await Promise.all([u().catch(()=>({})),b().catch(()=>[])]);Xs(m,f,e,L,h)})}),document.querySelectorAll(".pp5-course-btn").forEach(p=>{p.addEventListener("click",()=>{const y=parseInt(p.dataset.sid),m=t.filter(f=>{var u;return f.course_id===y||((u=f.master_subjects)==null?void 0:u.id)===y});m.length===1?openPP5Doc(m[0].id):fs(m)})})}catch{Q("โหลดข้อมูลไม่สำเร็จ","error")}}async function zt(e,s,t){var _,k,p,y,m;(_=document.getElementById("course-workspace-modal"))==null||_.remove();const l=Number(s.id),c=t.filter(f=>{var u;return Number(f.course_id??((u=f.master_subjects)==null?void 0:u.id))===l}),g={class_name:"ทุกห้องในคอร์ส",course_id:l,master_subjects:s},i=document.createElement("div");i.id="course-workspace-modal",i.className="fixed inset-0 z-[95] bg-black/60 flex items-center justify-center p-2 sm:p-4",i.innerHTML=`<div class="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl h-[96vh] sm:h-auto sm:max-h-[92vh] overflow-hidden flex flex-col">
    <header class="flex-shrink-0 px-4 sm:px-6 py-4 border-b bg-white flex items-start justify-between gap-3">
      <div class="min-w-0">
        <span class="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold">📘 ออกแบบการสอนของคอร์ส</span>
        <h2 class="mt-2 text-lg sm:text-xl font-extrabold text-gray-900 truncate">${a(s.subject_name)}</h2>
        <p class="text-xs text-gray-500 mt-0.5"><span class="font-mono text-blue-600">${a(s.subject_code??"—")}</span> · ${a(s.grade_level??"—")} · ${c.length} ห้องเรียน</p>
      </div>
      <button data-close class="w-10 h-10 flex-shrink-0 rounded-xl border bg-white text-gray-400 text-xl hover:text-gray-700">✕</button>
    </header>
    <div id="course-workspace-body" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6">
      <div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลคอร์ส...</div>
    </div>
  </div>`,document.body.appendChild(i);const d=()=>i.remove();i.querySelector("[data-close]").addEventListener("click",d),i.addEventListener("click",f=>{f.target===i&&d()});const $=i.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:f,canUseSmartClassroomForClass:u},{openLessonPlanAIWorkspace:b,openLessonPlanDocument:L}]=await Promise.all([fe(()=>import("./teacher-views-smart-classroom-D3DhAsOr.js"),__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37])),fe(()=>import("./lesson-plan-ai-workspace-BYoW1xGl.js"),__vite__mapDeps([37,0,1,2,3,4,6,21]))]),[h,T,B]=await Promise.all([es(l).catch(()=>[]),ts(l).catch(()=>[]),f(e)]),V=c.filter(N=>u(B.unlocked,e,N.id)),v=B.unlocked||V.length>0,M=()=>zt(e,s,t),X=h.length?h.map(N=>`<div class="rounded-xl border border-blue-100 bg-white px-3 py-2.5 flex gap-3">
      <span class="flex-shrink-0 px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-bold h-fit">สัปดาห์ ${N.week_start}${N.week_end!==N.week_start?`–${N.week_end}`:""}</span>
      <div class="min-w-0"><p class="text-sm font-bold text-gray-800">${a(N.topic)}</p>${N.unit_title?`<p class="text-[11px] text-blue-600 mt-0.5">${a(N.unit_title)}</p>`:""}</div>
    </div>`).join(""):'<div class="rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>',ne=c.map(N=>`<option value="${N.id}">${a(N.class_name??`ห้อง ${N.id}`)}</option>`).join("");$.innerHTML=`<div class="grid lg:grid-cols-2 gap-4 items-start">
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
          ${T.length?`<div class="mt-4 space-y-2">${T.map(N=>`<button class="cw-plan-row w-full text-left rounded-xl border border-violet-100 bg-white px-3 py-3 hover:border-violet-300 transition" data-plan-id="${N.id}"><p class="text-sm font-bold text-gray-800">${a(N.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${N.week_start}${N.week_end!==N.week_start?`–${N.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
        </div>
    </div>
    ${T.length&&c.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้องสำหรับบันทึกหลังสอน</h3><p class="text-xs text-gray-400 mt-1">แผนเป็นของคอร์ส แต่บันทึกและลายเซ็นจะแยกตามห้อง</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${ne}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`,(k=$.querySelector("#cw-ai-schedule"))==null||k.addEventListener("click",()=>b({teacher:e,cls:g,courseId:l,syllabusItems:h,lessonPlans:T,currentWeek:1,initialMode:"schedule",onSaved:M})),(p=$.querySelector("#cw-ai-plan"))==null||p.addEventListener("click",()=>b({teacher:e,cls:g,courseId:l,syllabusItems:h,lessonPlans:T,currentWeek:1,initialMode:"plan",onSaved:M}));let re=null;const K=$.querySelector("#cw-document-picker"),pe=()=>{K&&(K.classList.add("hidden"),K.classList.remove("flex"))};$.querySelectorAll(".cw-plan-row").forEach(N=>N.addEventListener("click",()=>{re=T.find(W=>W.id===parseInt(N.dataset.planId,10))??null,!(!re||!c.length||!K)&&(K.classList.remove("hidden"),K.classList.add("flex"))})),(y=$.querySelector("#cw-document-cancel"))==null||y.addEventListener("click",pe),K==null||K.addEventListener("click",N=>{N.target===K&&pe()}),(m=$.querySelector("#cw-document-open"))==null||m.addEventListener("click",()=>{var A;const N=parseInt((A=$.querySelector("#cw-document-class"))==null?void 0:A.value,10),W=c.find(me=>me.id===N);!re||!W||(pe(),L({plan:re,cls:W,teacher:e,classId:W.id,currentWeek:re.week_start}))})}catch(f){$.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${a(ve(f))}</div>`}}const Ue={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 2 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"٢ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["ڤياوايان ڤمبلاجارن","ڤتوك"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمودان أساسيان",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["معايير التعلم","المؤشرات"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"2 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Piawaian pembelajaran","Petunjuk"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let Xe=null;async function _s(){if(Xe)return Xe;const e=await Zt().catch(()=>[]);return Xe=Object.fromEntries(e.map(s=>[s.lang_key,s.settings??{}])),Xe}async function wa(e,s){var _e,ae;const[t,l]=await Promise.all([Qt(s.id).catch(n=>(Q("โหลดคำอธิบายฯ ไม่สำเร็จ: "+ve(n),"error"),null)),_s()]),c=n=>{const F=Array.isArray(n)?n:["มาตรฐานการเรียนรู้","ตัวชี้วัด"];return F.length?F.map(I=>String(I??"")):["มาตรฐานการเรียนรู้","ตัวชี้วัด"]},g=(n,F)=>{const S=(Array.isArray(n)?n:[]).map(D=>{const q=Array.isArray(D)?D:Object.values(D??{});return Array.from({length:F},(U,z)=>String(q[z]??""))});return S.length?S:Array.from({length:12},()=>Array.from({length:F},()=>""))},i=n=>[...new Set((Array.isArray(n)?n:[]).map(F=>parseInt(F,10)).filter(F=>Number.isFinite(F)&&F>0))],d=s.subject_group==="ACDMVOC",$=(n,F,I)=>{const D=(Array.isArray(n)?n:[]).map(q=>Object.fromEntries(F.map(U=>[U,String((q==null?void 0:q[U])??"")])));for(;D.length<I;)D.push(Object.fromEntries(F.map(q=>[q,""])));return D};let _=c(t==null?void 0:t.table_columns),k=g(t==null?void 0:t.table_rows,_.length),p=i(t==null?void 0:t.midterm_objective_items),y=i(t==null?void 0:t.between_objective_items),m=i(t==null?void 0:t.final_objective_items),f=(t==null?void 0:t.between_objective_extra)??"",u=(t==null?void 0:t.midterm_objective_extra)??"",b=(t==null?void 0:t.final_objective_extra)??"",L=["auto","rtl","ltr"].includes(t==null?void 0:t.text_direction)?t.text_direction:"auto",h=(t==null?void 0:t.description)||"",T=(t==null?void 0:t.signer_name)||s.learning_area||"",B=(_e=t==null?void 0:t.topic_list)!=null&&_e.length?t.topic_list:[""],V=$(t==null?void 0:t.voc_objectives,["objective","competency"],10),v=$(t==null?void 0:t.voc_schedule,["week","content","note"],20),M="",X="th";const ne=()=>{const n={...Ue.th,...Ue[X]},F=(l==null?void 0:l[X])??{},I={...n,...F};return F.pickerTitles&&(I.pickerTitles={...n.pickerTitles,...F.pickerTitles}),I},re=()=>{if(document.getElementById("cd2-rtl-font"))return;const n=document.createElement("link");n.id="cd2-rtl-font",n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(n)},[K,pe]=await Promise.all([De().catch(()=>({})),Ze().catch(()=>[])]),N=pe.find(n=>n.dept_code===s.dept),W=(N==null?void 0:N.dept_name)??s.dept??"";(ae=document.getElementById("course-doc-page2-modal"))==null||ae.remove();const A=document.createElement("div");A.id="course-doc-page2-modal",A.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(A);const me=(n,F="")=>{const S=[n.length?[...n].sort((D,q)=>D-q).join(", "):"",F.trim()].filter(Boolean);return S.length?S.join(", "):ne().notSelected},se=()=>{const n=k.length;return Array.from({length:n},(F,I)=>I+1).filter(F=>{var I;return(I=k[F-1])==null?void 0:I.some(S=>String(S??"").trim())})},te=()=>{const n=ne(),F=se(),I=n.dir==="rtl";I&&re();const S=L==="auto"?n.dir:L,D=S==="rtl"?"text-right":"text-left",q=I?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";A.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${S}" style="${q}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${n.title}</h2>
          <p class="text-xs text-gray-400 truncate">${a(s.subject_name)} · ${a(s.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${n.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${n.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${S}" style="${q}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(Ue).map(U=>{var z;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${X===U.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${U.key}">${((z=l==null?void 0:l[U.key])==null?void 0:z.label)||U.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${S}" style="${q}">
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
                <span class="text-xs text-gray-400">${a(s.grade_level||"")} · ${a(W||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${B.map((U,z)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${Y} flex-1" value="${a(U)}"
                      placeholder="${a(n.topicPlaceholder)}" dir="${S}" data-idx="${z}" />
                    ${B.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${z}">✕</button>`:""}
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

            ${M?`<p class="text-xs mt-3 ${M.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${a(M)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${n.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${S}"
                  class="${Y} ${D} min-h-[132px] leading-7"
                  placeholder="${a(n.descPlaceholder)}">${a(h)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.dirLabel}</span>
                  <select id="cd2-dir" class="${ge}">
                    <option value="auto" ${L==="auto"?"selected":""}>${n.dirAuto}</option>
                    <option value="rtl" ${L==="rtl"?"selected":""}>${n.dirRTL}</option>
                    <option value="ltr" ${L==="ltr"?"selected":""}>${n.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.signerLabel}</span>
                  <input id="cd2-signer" class="${Y} ${D}" value="${a(T)}" placeholder="${a(n.signerPlaceholder)}" dir="${S}" />
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
                  ${V.map((U,z)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${z+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${z}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${a(U.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${z}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${a(U.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${z}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                  ${v.map((U,z)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${z}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${a(U.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${z}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${a(U.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${z}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${a(U.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${z}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                    ${_.map((U,z)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${z}" class="cd2-col ${Y} ${D} py-2 font-semibold" value="${a(U)}" dir="${S}" />
                          ${_.length>1?`<button data-del-col="${z}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${k.map((U,z)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${z+1}</td>
                      ${_.map((r,x)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${z}" data-cell="${x}" rows="2" dir="${S}"
                            class="cd2-cell ${D} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${a(U[x]||"")}</textarea>
                        </td>`).join("")}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${z}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${n.delRow}</button>
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
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${a(me(y,f))}</p>
              </button>
              <button id="cd2-pick-mid" class="${D} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${a(me(p,u))}</p>
              </button>
              <button id="cd2-pick-final" class="${D} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${a(me(m,b))}</p>
              </button>
            </div>
            ${F.length?"":`<p class="text-xs text-amber-600 mt-3">${n.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,he()},oe=()=>{var n,F,I;return B=[...A.querySelectorAll(".cd2-topic-input")].map(S=>S.value.trim()).filter(Boolean),B.length||(B=[""]),h=((n=A.querySelector("#cd2-description"))==null?void 0:n.value)??"",T=((F=A.querySelector("#cd2-signer"))==null?void 0:F.value)??"",L=((I=A.querySelector("#cd2-dir"))==null?void 0:I.value)??L,A.querySelectorAll(".cd2-col").forEach(S=>{_[Number(S.dataset.col)]=S.value}),A.querySelectorAll(".cd2-cell").forEach(S=>{const D=Number(S.dataset.row),q=Number(S.dataset.cell);k[D]||(k[D]=Array.from({length:_.length},()=>"")),k[D][q]=S.value}),A.querySelectorAll(".cd2-voc-obj-cell").forEach(S=>{const D=Number(S.dataset.vocObjRow),q=S.dataset.vocObjField;V[D]||(V[D]={objective:"",competency:""}),V[D][q]=S.value}),A.querySelectorAll(".cd2-voc-sch-cell").forEach(S=>{const D=Number(S.dataset.vocSchRow),q=S.dataset.vocSchField;v[D]||(v[D]={week:"",content:"",note:""}),v[D][q]=S.value}),{desc:h,signer:T}},ue=n=>{const F=Array.isArray(n==null?void 0:n.columns)&&n.columns.length?n.columns.map(q=>String(q??"").trim()).filter(Boolean):ne().colsExtra,I=Array.isArray(n==null?void 0:n.rows)?n.rows.map(q=>{const U=Array.isArray(q)?q:Object.values(q??{});return Array.from({length:F.length},(z,r)=>String(U[r]??"").trim())}).filter(q=>q.some(Boolean)):[];_=F,k=I.length?I:Array.from({length:12},()=>Array.from({length:_.length},()=>"")),n!=null&&n.description&&(h=String(n.description)),p=i((n==null?void 0:n.midterm_items)??(n==null?void 0:n.midtermObjectiveItems)),y=i((n==null?void 0:n.between_items)??(n==null?void 0:n.betweenObjectiveItems)),m=i((n==null?void 0:n.final_items)??(n==null?void 0:n.finalObjectiveItems));const S=se(),D=Math.ceil(S.length/2);p.length||(p=S.slice(0,Math.min(3,D))),y.length||(y=S.slice(0,Math.min(4,S.length))),m.length||(m=S.slice(-Math.min(3,S.length)))},we=n=>n.some(I=>String(I.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:n.map((I,S)=>[`${I.item_no??S+1}.${I.learning_outcome_text??I.indicator_text??I.standard_text??""}`]),description:h,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((I,S)=>S+1),final_items:n.slice(Math.ceil(n.length/2)).map((I,S)=>S+1+Math.ceil(n.length/2))}:{source:"curriculum",columns:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],rows:n.map((I,S)=>[`${I.item_no??S+1}.) ${I.standard_code||I.standard_text||""}`.trim(),I.indicator_text||I.learning_outcome_text||""]),description:h,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((I,S)=>S+1),final_items:n.slice(Math.ceil(n.length/2)).map((I,S)=>S+1+Math.ceil(n.length/2))},xe=async()=>{var E,w,O,R,Z;const n=ne(),F=_.length===1||s.subject_group&&!["ACDM","AGM"].includes(s.subject_group),I=F?n.colsExtra:n.colsBasic,S=F?`single column named "${I[0]}"`:`two columns named "${I[0]}" and "${I[1]}"`,D=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${n.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${s.subject_name||""}
- รหัสวิชา: ${s.subject_code||""}
- ชั้น: ${s.grade_level||""}
- กลุ่มสาระ: ${W||s.dept||""}
- หน่วยกิต: ${s.credit||""}
- เรื่อง/บทที่สอน: ${B.filter(Boolean).join(", ")||"ไม่ระบุ"}

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
}`,{data:q,error:U}=await tt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:D}});if(U)throw new Error(U.message??"Edge Function error");if(q!=null&&q.error)throw new Error(`Gemini: ${q.error.message??q.error.status}`);const z=((Z=(R=(O=(w=(E=q.candidates)==null?void 0:E[0])==null?void 0:w.content)==null?void 0:O.parts)==null?void 0:R[0])==null?void 0:Z.text)??"",r=z.match(/```json\s*([\s\S]*?)```/)||z.match(/(\{[\s\S]*\})/),x=r?r[1]??r[0]:null;if(!x)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(x)},de=n=>{var E;oe();const F=n==="mid"?p:n==="between"?y:m,I=n==="mid"?u:n==="between"?f:b,S=se();if(!S.length){Q("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(E=document.getElementById("cd2-picker"))==null||E.remove();const D=ne(),q={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},U={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},z=w=>{const O=(k[w-1]??[]).find(Z=>String(Z??"").trim()),R=String(O??"").trim();return R.length>30?R.slice(0,30)+"…":R},r=document.createElement("div");r.id="cd2-picker",r.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",r.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${D.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${D.pickerTitles[n]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${S.map(w=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${q[n]} w-4 h-4 flex-shrink-0" value="${w}" ${F.includes(w)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${w}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${a(z(w))}</span>
            </label>`).join("")}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${a(I)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${D.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${U[n]} text-white text-sm font-semibold">${D.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(r);const x=()=>r.remove();r.querySelector("#cd2-picker-close").addEventListener("click",x),r.querySelector("#cd2-picker-cancel").addEventListener("click",x),r.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const w=[...r.querySelectorAll(".cd2-choice:checked")].map(R=>Number(R.value)),O=r.querySelector("#cd2-picker-extra").value.trim();n==="mid"?(p=w,u=O):n==="between"?(y=w,f=O):(m=w,b=O),x(),te()})},he=()=>{var I,S,D,q,U,z,r,x,E;const n=ne();A.querySelectorAll(".cd2-lang-btn").forEach(w=>{w.addEventListener("click",()=>{var O;oe(),X=w.dataset.lang||"th",L=((O=Ue[X])==null?void 0:O.dir)||"ltr",te()})}),A.querySelector("#cd2-close").addEventListener("click",()=>A.remove()),A.querySelector("#cd2-dir").addEventListener("change",w=>{oe(),L=w.target.value,te()}),A.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(oe(),(k.some(R=>R.some(Z=>String(Z??"").trim()))||h.trim())&&!confirm(n.confirmOverwrite))return;const O=A.querySelector("#cd2-search-curriculum");O.disabled=!0,O.innerHTML=`⏳ ${n.btnCurriculumLoading}`;try{const R=await ss({subjectName:s.subject_name,subjectCode:s.subject_code,gradeLevel:s.grade_level,dept:W,topic:B.filter(Boolean).join(" ")});R.length?(ue(we(R)),M=n.toastSearchOk(R.length)):M=n.toastSearchEmpty,te()}catch(R){Q("ค้นหลักสูตรไม่สำเร็จ: "+ve(R),"error")}finally{O.disabled=!1,O.innerHTML=`🔍 ${n.btnCurriculum}`}}),A.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(oe(),(k.some(R=>R.some(Z=>String(Z??"").trim()))||h.trim())&&!confirm(n.confirmAIOverwrite))return;const O=A.querySelector("#cd2-auto-fill");O.disabled=!0,O.innerHTML=`⏳ ${n.btnAILoading}`;try{const R=await xe();ue(R),M=n.toastAIDone,te()}catch(R){Q("AI ร่างไม่สำเร็จ: "+ve(R),"error")}finally{O.disabled=!1,O.innerHTML=`✨ ${n.btnAI}`}}),A.querySelector("#cd2-img-input").addEventListener("change",async w=>{var le,ke,Ee,Se,be,o;const O=(le=w.target.files)==null?void 0:le[0];if(!O)return;if((k.some(j=>j.some(C=>String(C??"").trim()))||h.trim())&&!confirm(n.confirmImgOverwrite)){w.target.value="";return}const Z=A.querySelector("#cd2-img-btn");Z.textContent=`⏳ ${n.btnImgLoading}`;try{const j=await new Promise((Xt,Kt)=>{const Ye=new FileReader;Ye.onload=()=>Xt(Ye.result.split(",")[1]),Ye.onerror=Kt,Ye.readAsDataURL(O)}),C=_.length===1||s.subject_group&&!["ACDM","AGM"].includes(s.subject_group),P=C?n.colsExtra:n.colsBasic,H=C?`single column named "${P[0]}"`:`two columns named "${P[0]}" and "${P[1]}"`,ee=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${n.aiLang}
ข้อมูลรายวิชา: "${s.subject_name??""}" รหัส ${s.subject_code??""} ชั้น ${s.grade_level??""} กลุ่มสาระ ${W}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${H})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบเป็น JSON เท่านั้น (ไม่มีข้อความอื่น):
{
  "description": "...",
  "columns": ${JSON.stringify(P)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:ce,error:J}=await tt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:ee,imageBase64:j,imageMimeType:O.type||"image/jpeg"}});if(J)throw new Error(J.message??"Edge Function error");if(ce!=null&&ce.error)throw new Error(`Gemini: ${ce.error.message??ce.error.status}`);const ie=((o=(be=(Se=(Ee=(ke=ce.candidates)==null?void 0:ke[0])==null?void 0:Ee.content)==null?void 0:Se.parts)==null?void 0:be[0])==null?void 0:o.text)??"",Ie=ie.match(/```json\s*([\s\S]*?)```/)||ie.match(/(\{[\s\S]*\})/),Ve=Ie?Ie[1]??Ie[0]:null;if(!Ve)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");ue(JSON.parse(Ve)),M=n.toastImgDone,te()}catch(j){Q("อ่านรูปไม่สำเร็จ: "+ve(j),"error")}finally{Z.textContent=`📷 ${n.btnImg}`,w.target.value=""}});const F=w=>{if(oe(),k.some(Z=>Z.some(le=>String(le??"").trim()))&&!confirm(n.confirmColChange))return;const R=k;_=w,k=R.map(Z=>w.length===1?[Z.filter(Boolean).join(" ").trim()]:Array.from({length:w.length},(le,ke)=>Z[ke]??"")),k.length||(k=Array.from({length:12},()=>Array.from({length:_.length},()=>""))),te()};(I=A.querySelector("#cd2-template-basic"))==null||I.addEventListener("click",()=>{F(n.colsBasic)}),(S=A.querySelector("#cd2-template-extra"))==null||S.addEventListener("click",()=>{F(n.colsExtra)}),(D=A.querySelector("#cd2-add-col"))==null||D.addEventListener("click",()=>{oe(),_.push(n.colNew(_.length+1)),k=k.map(w=>[...w,""]),te()}),(q=A.querySelector("#cd2-add-row"))==null||q.addEventListener("click",()=>{oe(),k.push(Array.from({length:_.length},()=>"")),te()}),A.querySelectorAll(".cd2-del-col").forEach(w=>w.addEventListener("click",()=>{oe();const O=Number(w.dataset.delCol);_.splice(O,1),k=k.map(R=>R.filter((Z,le)=>le!==O)),te()})),A.querySelectorAll(".cd2-del-row").forEach(w=>w.addEventListener("click",()=>{oe();const O=Number(w.dataset.delRow);k.splice(O,1);const R=Z=>Z.filter(le=>le!==O+1).map(le=>le>O+1?le-1:le);p=R(p),y=R(y),m=R(m),te()})),(U=A.querySelector("#cd2-pick-mid"))==null||U.addEventListener("click",()=>de("mid")),(z=A.querySelector("#cd2-pick-between"))==null||z.addEventListener("click",()=>de("between")),(r=A.querySelector("#cd2-pick-final"))==null||r.addEventListener("click",()=>de("final")),(x=A.querySelector("#cd2-voc-obj-add-row"))==null||x.addEventListener("click",()=>{oe(),V.push({objective:"",competency:""}),te()}),A.querySelectorAll(".cd2-voc-obj-del-row").forEach(w=>w.addEventListener("click",()=>{oe(),V.splice(Number(w.dataset.vocObjDelRow),1),te()})),(E=A.querySelector("#cd2-voc-sch-add-row"))==null||E.addEventListener("click",()=>{oe(),v.push({week:String(v.length+1),content:"",note:""}),te()}),A.querySelectorAll(".cd2-voc-sch-del-row").forEach(w=>w.addEventListener("click",()=>{oe(),v.splice(Number(w.dataset.vocSchDelRow),1),te()})),A.querySelector("#cd2-add-topic").addEventListener("click",()=>{oe(),B.push(""),te()}),A.querySelectorAll(".cd2-topic-del").forEach(w=>{w.addEventListener("click",()=>{oe(),B.splice(Number(w.dataset.idx),1),B.length||(B=[""]),te()})}),A.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:w,signer:O}=oe(),R=A.querySelector("#cd2-save");R.disabled=!0,R.textContent=n.saving;try{await as(s.id,{description:w,table_columns:_.map((Z,le)=>Z.trim()||n.colNew(le+1)),table_rows:k.map(Z=>Z.slice(0,_.length)),topic_list:B.filter(Boolean),midterm_objective_items:p,between_objective_items:y,final_objective_items:m,midterm_objective_extra:u,between_objective_extra:f,final_objective_extra:b,voc_objectives:V,voc_schedule:v,signer_name:O.trim()||null,text_direction:L,updated_by:(e==null?void 0:e.id)??null}),Q(n.toastSaved,"success"),A.remove()}catch(Z){Q("บันทึกไม่สำเร็จ: "+ve(Z),"error"),R.disabled=!1,R.textContent=n.save}})};te()}async function $a(e,s,t=null,l={}){const c=!!l.cloneFrom;Te("my-courses"),Ae(c?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[g,i,d]=await Promise.all([Ze().catch(()=>[]),Tt().catch(()=>[]),t&&!c?Jt(t.id).catch(r=>(Q("โหลดครูร่วมสอนไม่สำเร็จ: "+ve(r),"error"),null)):Promise.resolve([])]);if(d===null){ye(`<div class="p-6 text-center text-gray-600">โหลดข้อมูลคอร์สไม่ครบ กรุณาเปิดคอร์สใหม่อีกครั้ง
      <button class="block mx-auto mt-4 text-indigo-600" onclick="window._goBack()">กลับ</button></div>`);return}let $=d??[];const _=[...new Map(g.map(r=>[r.id,r])).values()],k=(e==null?void 0:e.category)??"",p=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],y=k?p.filter(r=>r.cat===k):p,m=r=>r==="ACDM"?"สามัญ":r==="ACDMVOC"?"สามัญปวช":r==="AGM"||r==="AGMVOC"?"ศาสนา":null,f=r=>r==="ACDMVOC",u=r=>f(r)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",b=r=>f(r)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",L=r=>f(r)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",h=r=>f(r)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",T=(t==null?void 0:t.subject_group)??"",B=r=>{const x=m(r);if(!x)return _;const E=_.filter(w=>w.category===x);return E.length?E:_},V=(r,x="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+r.map(E=>`<option value="${E.dept_code}" ${E.dept_code===x?"selected":""}>${E.dept_name}</option>`).join(""),v=[...new Set(g.map(r=>r.head_name).filter(Boolean))];ye(`<div class="max-w-2xl mx-auto animate-fade">
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
          <select id="cf-subg" class="${ge}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${y.map(r=>`<option value="${r.value}" ${(t==null?void 0:t.subject_group)===r.value?"selected":""}>${r.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${u(T)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${ge}">
            ${V(t!=null&&t.subject_group?B(t.subject_group):k?_.filter(r=>r.category===k):_,(t==null?void 0:t.dept)??"")}
          </select>
        </div>
        <!-- ชื่อวิชา + รหัสวิชา -->
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 sm:col-span-1">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชื่อวิชา <span class="text-red-400">*</span>
            </label>
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${Y}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${Y}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${ge}">
              ${xs.map(r=>`<option value="${r}">${r}</option>`).join("")}
            </select>
          </div>
          <div id="cf-grade-single-wrapper">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${ge}">
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
                class="${Y}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${Y}" autocomplete="off" />
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
            maxlength="12" class="${Y}" />
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
                class="${Y} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${Y} bg-white" autocomplete="off" />
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
              class="${Y} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${h(T)}</p>
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
  </div>`);const M=t&&(t.grade_level&&t.grade_level.includes(",")||$.length>0);function X(){const r=document.getElementById("cf-coteach-selected-list");r&&(r.innerHTML=$.map(x=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${x.full_name} (${x.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${x.id}">✕</button>
      </span>
    `).join(""),r.querySelectorAll(".remove-coteacher-btn").forEach(x=>{x.addEventListener("click",()=>{const E=Number(x.dataset.id);$=$.filter(w=>w.id!==E),X()})}))}function ne(r,x){var w;(w=document.getElementById("coteach-explain-modal"))==null||w.remove();const E=document.createElement("div");E.id="coteach-explain-modal",E.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",E.innerHTML=`
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
      </div>`,document.body.appendChild(E),E.querySelector("#cf-explain-cancel").addEventListener("click",()=>{E.remove(),x()}),E.querySelector("#cf-explain-confirm").addEventListener("click",()=>{E.remove(),r()})}function re(r,x){var w;(w=document.getElementById("coteach-confirm-modal"))==null||w.remove();const E=document.createElement("div");E.id="coteach-confirm-modal",E.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",E.innerHTML=`
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
      </div>`,document.body.appendChild(E),E.querySelector("#cf-off-cancel").addEventListener("click",()=>{E.remove(),x()}),E.querySelector("#cf-off-confirm").addEventListener("click",()=>{E.remove(),r()})}function K(r,x=""){const E=et[r]??[],w=document.getElementById("cf-grade-checkboxes");if(!w)return;const O=x?x.split(",").map(R=>R.trim()):[];w.innerHTML=E.map(R=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${R}" ${O.includes(R)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${R}</span>
      </label>
    `).join("")}const pe={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};document.getElementById("cf-subg").addEventListener("change",r=>{const x=r.target.value;document.getElementById("cf-dept-label").firstChild.textContent=u(x)+" ",document.getElementById("cf-head-label").textContent=b(x),document.getElementById("cf-head-hint").textContent=h(x);const E=document.getElementById("cf-dept"),w=E.value;E.innerHTML=V(B(x)),E.options[0].textContent=L(x),w&&(E.value=w);const O=document.getElementById("cf-grade"),R=et[x]??[];O.innerHTML=R.length?['<option value="">— เลือกชั้นปี —</option>',...R.map(Z=>`<option value="${Z}">${Z}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=pe[x]??"",K(x)}),document.getElementById("cf-dept").addEventListener("change",r=>{const x=r.target.value,E=g.filter(O=>O.dept_code===x&&O.head_name).map(O=>O.head_name),w=document.getElementById("cf-dept-head");E.length===1?w.value=E[0]:E.length>1?(w.value="",A(E)):w.value=""});const N=document.getElementById("cf-dept-head"),W=document.getElementById("cf-head-dropdown");function A(r){W.innerHTML=r.map(x=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${x}">${x}</div>`).join(""),W.querySelectorAll(".head-opt").forEach(x=>x.addEventListener("mousedown",E=>{E.preventDefault(),N.value=x.dataset.val,W.classList.add("hidden")})),W.classList.toggle("hidden",!r.length)}N.addEventListener("input",()=>{const r=N.value.toLowerCase(),x=v.filter(E=>E.toLowerCase().includes(r));A(r?x:v)}),N.addEventListener("focus",()=>{const r=N.value.toLowerCase();A(r?v.filter(x=>x.toLowerCase().includes(r)):v)}),N.addEventListener("blur",()=>setTimeout(()=>W.classList.add("hidden"),150));const me=document.getElementById("cf-teacher-code"),se=document.getElementById("cf-teacher-search"),te=document.getElementById("cf-teacher-dropdown"),oe=document.getElementById("cf-teacher-selected"),ue=document.getElementById("cf-teacher-name"),we=document.getElementById("cf-teacher-clear"),xe=document.getElementById("cf-teacher-id"),de=document.getElementById("cf-phone");function he(r){if(!r){xe.value="",me.value="",se.value="",oe.classList.add("hidden"),oe.classList.remove("flex"),de.value="";return}xe.value=r.id,me.value=r.teacher_code??"",se.value=r.full_name??"",ue.textContent=`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`,oe.classList.remove("hidden"),oe.classList.add("flex"),de.value=Je(r.phone??""),te.classList.add("hidden")}function _e(r){te.innerHTML=r.length?r.map(x=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${x.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${x.teacher_code??""}</span>
            <span class="font-medium">${x.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',te.querySelectorAll(".t-opt").forEach(x=>x.addEventListener("mousedown",E=>{E.preventDefault(),he(i.find(w=>String(w.id)===x.dataset.id))})),te.classList.remove("hidden")}if(e&&!t){const r=i.find(x=>x.id===e.id);r&&he(r)}me.oninput=()=>{const r=me.value.trim().toLowerCase();if(!r){he(null);return}const x=i.find(E=>(E.teacher_code??"").toLowerCase()===r);if(x)he(x);else{const E=i.filter(w=>(w.teacher_code??"").toLowerCase().startsWith(r));E.length&&_e(E)}},se.onfocus=()=>_e(i),se.oninput=()=>{const r=se.value.toLowerCase();_e(r?i.filter(x=>x.full_name.toLowerCase().includes(r)||(x.teacher_code??"").toLowerCase().includes(r)):i)},se.onblur=()=>setTimeout(()=>te.classList.add("hidden"),150),we.addEventListener("click",()=>he(null));const ae=document.getElementById("cf-toggle-coteach"),n=document.getElementById("cf-grade-single-wrapper"),F=document.getElementById("cf-grade-multi-container"),I=document.getElementById("cf-coteach-section");ae.addEventListener("change",r=>{r.target.checked?(ae.checked=!1,ne(()=>{ae.checked=!0,n.classList.add("hidden"),F.classList.remove("hidden"),I.classList.remove("hidden");const E=document.getElementById("cf-subg").value;K(E),X()},()=>{ae.checked=!1})):re(()=>{ae.checked=!1,n.classList.remove("hidden"),F.classList.add("hidden"),I.classList.add("hidden"),$=[]},()=>{ae.checked=!0})});const S=document.getElementById("cf-coteach-code"),D=document.getElementById("cf-coteach-search"),q=document.getElementById("cf-coteach-dropdown");function U(r){if(!r)return;if($.some(E=>E.id===r.id)){Q("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),S.value="",D.value="";return}const x=Number(xe.value);if(r.id===x){Q("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),S.value="",D.value="";return}$.push(r),X(),S.value="",D.value="",q.classList.add("hidden")}function z(r){q.innerHTML=r.length?r.map(x=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${x.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${x.teacher_code??""}</span>
            <span class="font-medium">${x.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',q.querySelectorAll(".co-t-opt").forEach(x=>x.addEventListener("mousedown",E=>{E.preventDefault(),U(i.find(w=>String(w.id)===x.dataset.id))})),q.classList.remove("hidden")}if(S.oninput=()=>{const r=S.value.trim().toLowerCase();if(!r)return;const x=i.find(E=>(E.teacher_code??"").toLowerCase()===r);if(x)U(x);else{const E=i.filter(w=>(w.teacher_code??"").toLowerCase().startsWith(r));E.length&&z(E)}},D.onfocus=()=>z(i),D.oninput=()=>{const r=D.value.toLowerCase();z(r?i.filter(x=>x.full_name.toLowerCase().includes(r)||(x.teacher_code??"").toLowerCase().includes(r)):i)},D.onblur=()=>setTimeout(()=>q.classList.add("hidden"),150),de.addEventListener("input",r=>{r.target.value=Je(r.target.value)}),t){if(document.getElementById("cf-name").value=t.subject_name??"",document.getElementById("cf-code").value=t.subject_code??"",t.credit&&(document.getElementById("cf-credit").value=String(t.credit)),t.subject_group){const r=document.getElementById("cf-subg");r.value=t.subject_group,document.getElementById("cf-dept").innerHTML=V(B(t.subject_group));const x=document.getElementById("cf-grade"),E=et[t.subject_group]??[];x.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...E.map(w=>`<option value="${w}">${w}</option>`)].join(""),t.grade_level&&(x.value=t.grade_level),document.getElementById("cf-code-hint").textContent=pe[t.subject_group]??""}if(t.dept&&(document.getElementById("cf-dept").value=t.dept),t.learning_area)N.value=t.learning_area;else if(t.dept){const r=g.find(x=>x.dept_code===t.dept&&x.head_name);N.value=(r==null?void 0:r.head_name)??""}if(t.teacher_id){const r=i.find(x=>x.id===t.teacher_id);r&&he(r)}else if(e){const r=i.find(x=>x.id===e.id);r&&he(r)}if(M){ae.checked=!0,n.classList.add("hidden"),F.classList.remove("hidden"),I.classList.remove("hidden");const r=t.subject_group;K(r,t.grade_level),X()}}document.getElementById("course-form").addEventListener("submit",async r=>{r.preventDefault();const x=document.getElementById("cf-submit"),E=document.getElementById("cf-subg").value,w=document.getElementById("cf-dept").value,O=document.getElementById("cf-name").value.trim(),R=document.getElementById("cf-code").value.trim(),Z=parseFloat(document.getElementById("cf-credit").value)||null;let le="";if(ae.checked){const be=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!be.length){Q("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}le=be.map(o=>o.value).join(", ")}else le=document.getElementById("cf-grade").value;const ke=xe.value,Ee=de.value.trim(),Se=N.value.trim();if(!E||!O||!le){Q("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}x.disabled=!0,x.textContent="กำลังบันทึก...";try{const be=ke?Number(ke):(e==null?void 0:e.id)??null,o=ae.checked?$.map(j=>j.id):[];await s({subject_group:E,dept:w||null,subject_name:O,subject_code:R||null,credit:Z,grade_level:le,teacher_id:be,learning_area:Se||null},o),Ee&&be&&be===(e==null?void 0:e.id)&&await it(e.id,{phone:Ee}).catch(()=>{}),Q("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(be){Q("บันทึกไม่สำเร็จ: "+ve(be),"error")}finally{x.disabled=!1,x.textContent=c?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function _a(e,s=[],t){Te("setup"),Ae("ตั้งค่าโปรไฟล์","registration");const[l,c,g,i]=await Promise.all([Ze().catch(()=>[]),Bt().catch(()=>[]),Pt().catch(()=>[]),De().catch(()=>({}))]),d=parseInt(i.academicYear??2568),$=parseInt(i.semester??1),_=[...new Map(l.map(u=>[u.dept_code,u])).values()],k=(u,b="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(u?_.filter(h=>!h.category||h.category===u):_).map(h=>`<option value="${h.dept_code}" ${h.dept_code===b?"selected":""}>${h.dept_name}</option>`).join(""),p=c,y=g,m=await Mt(d,$).catch(()=>[]);if(ye(`<div class="max-w-lg mx-auto animate-fade">
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
            class="${Y}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${ge}">
            ${k(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${ge}">
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
            ${["สามัญ","ศาสนา"].map(u=>`
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${(e==null?void 0:e.category)===u?"border-emerald-400 bg-emerald-50":"border-gray-200"}">
              <input type="radio" name="setup-category" value="${u}" ${(e==null?void 0:e.category)===u?"checked":""}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${u}</span>
            </label>`).join("")}
          </div>
        </div>
        ${Ht({prefix:"setup",samaiRooms:p,religionRooms:y,homeroomRooms:s,assignments:m,teacherId:e==null?void 0:e.id,academicYear:d,semester:$})}
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const f=()=>{var h;const u=(h=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:h.value,b=document.getElementById("setup-room-samai-wrap"),L=document.getElementById("setup-room-religion-wrap");u==="สามัญ"?(b==null||b.classList.remove("hidden"),L==null||L.classList.add("hidden")):u==="ศาสนา"?(L==null||L.classList.remove("hidden"),b==null||b.classList.add("hidden")):(b==null||b.classList.remove("hidden"),L==null||L.classList.remove("hidden"))};f(),Gt(),document.querySelectorAll('input[name="setup-category"]').forEach(u=>u.addEventListener("change",()=>{var T;f();const b=(T=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:T.value,L=document.getElementById("setup-dept"),h=L==null?void 0:L.value;L&&(L.innerHTML=k(b,h))})),document.getElementById("setup-phone").addEventListener("input",u=>{const b=u.target.value.replace(/\D/g,"").slice(0,10);u.target.value=b.length<=3?b:b.length<=6?`${b.slice(0,3)} ${b.slice(3)}`:`${b.slice(0,3)} ${b.slice(3,6)} ${b.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async u=>{var L;u.preventDefault();const b=document.getElementById("setup-save");b.disabled=!0,b.textContent="กำลังบันทึก...";try{const h=document.getElementById("setup-dept").value||null,T=document.getElementById("setup-subg").value||null,B=((L=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:L.value)||null,V=document.getElementById("setup-phone").value.trim()||null,v=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(K=>K.value),M=[...document.querySelectorAll('input[name="setup-room-religion"]:checked')].map(K=>K.value);await it(e.id,{dept:h,subject_group:T,category:B,phone:V});const{upsertHomeroomTeacher:X,deleteHomeroomTeacher:ne}=await fe(async()=>{const{upsertHomeroomTeacher:K,deleteHomeroomTeacher:pe}=await import("./api-J-Ak1T-Y.js");return{upsertHomeroomTeacher:K,deleteHomeroomTeacher:pe}},__vite__mapDeps([0,1,2,3,4])),re=async(K,pe)=>{const N=s.filter(W=>W.category===K&&Number(W.academic_year)===d&&Number(W.semester)===$);await Promise.all(N.filter(W=>!pe.includes(W.main_room)).map(W=>ne(W.id).catch(()=>{}))),await Promise.all(pe.map(W=>X({teacher_id:e.id,main_room:W,category:K,academic_year:d,semester:$})))};await Promise.all([re("สามัญ",v),re("ศาสนา",M)]),Q("บันทึกโปรไฟล์สำเร็จ ✅","success"),t&&await t(e.profile_id)}catch(h){Q("บันทึกไม่สำเร็จ: "+ve(h),"error")}finally{b.disabled=!1,b.textContent="บันทึกและเริ่มใช้งาน →"}})}async function ka(e,s=[],t){var f;Te("profile"),Ae("โปรไฟล์ของฉัน","registration");const[l,c,g]=await Promise.all([Ze().catch(()=>[]),Bt().catch(()=>[]),Pt().catch(()=>[])]),i=await De().catch(()=>({})),d=parseInt(i.academicYear??new Date().getFullYear()+543),$=parseInt(i.semester??1),_=await Mt(d,$).catch(()=>[]),k=e==null?void 0:e.category,p=k?l.filter(u=>!u.category||u.category===k):l,y=[...new Map(p.map(u=>[u.dept_code,u])).values()],m=Je((e==null?void 0:e.phone)??"");ye(`<div class="max-w-lg mx-auto animate-fade">
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
              class="${Y} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${(e==null?void 0:e.category)??"—"}"
              class="${Y} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${(e==null?void 0:e.full_name)??""}" class="${Y}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||""}" class="${Y}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${(e==null?void 0:e.username)??""}" placeholder="เช่น hambal.waji"
            class="${Y} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${m}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${Y}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${y.length>0?`<select id="prof-dept" class="${ge} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${y.map(u=>`<option value="${u.dept_code}" ${u.dept_code===(e==null?void 0:e.dept)?"selected":""}>${u.dept_name} (${u.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${Y} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${ge}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${(e==null?void 0:e.subject_group)==="ACDM"?"selected":""}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${(e==null?void 0:e.subject_group)==="AGM"?"selected":""}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${(e==null?void 0:e.subject_group)==="ACDMVOC"?"selected":""}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${(e==null?void 0:e.subject_group)==="AGMVOC"?"selected":""}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        ${Ht({prefix:"prof",samaiRooms:c,religionRooms:g,homeroomRooms:s,assignments:_,teacherId:e==null?void 0:e.id,academicYear:d,semester:$})}

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
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${Y}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${Y}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`),window._profileFocus==="password"&&(window._profileFocus=null,requestAnimationFrame(()=>{const u=document.getElementById("prof-pw-new");u==null||u.scrollIntoView({behavior:"smooth",block:"center"}),u==null||u.focus()})),e&&(Gt(),document.getElementById("prof-phone").addEventListener("input",u=>{u.target.value=Je(u.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",u=>{const b=u.target.files[0];b&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(b)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async u=>{var h;u.preventDefault();const b=document.getElementById("prof-save"),L=document.getElementById("prof-name").value.trim();if(!L){Q("กรุณากรอกชื่อ-นามสกุล","warning");return}b.disabled=!0,b.textContent="กำลังบันทึก...";try{const T=document.getElementById("prof-dept"),B=document.getElementById("prof-dept-txt"),V=document.getElementById("prof-subg"),v=((B==null?void 0:B.value.trim().toUpperCase())||(T==null?void 0:T.value)||"").trim()||null,M=document.getElementById("prof-username").value.trim().toLowerCase(),X=document.getElementById("prof-email").value.trim();if(M&&!/^[a-z0-9._-]{3,32}$/.test(M)){Q("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),b.disabled=!1,b.textContent="บันทึก";return}const ne={full_name:L,phone:document.getElementById("prof-phone").value.trim()||null,dept:v,subject_group:(V==null?void 0:V.value)||null,username:M||null,login_email:X||null},re=(h=document.getElementById("prof-photo-file").files)==null?void 0:h[0];re&&(ne.image_url=await vs(e.id,re)),await it(e.id,ne);const{upsertHomeroomTeacher:K,deleteHomeroomTeacher:pe,getSystemConfig:N}=await fe(async()=>{const{upsertHomeroomTeacher:ue,deleteHomeroomTeacher:we,getSystemConfig:xe}=await import("./api-J-Ak1T-Y.js");return{upsertHomeroomTeacher:ue,deleteHomeroomTeacher:we,getSystemConfig:xe}},__vite__mapDeps([0,1,2,3,4])),W=await N().catch(()=>({})),A=parseInt(W.academicYear??new Date().getFullYear()+543),me=parseInt(W.semester??1),se=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(ue=>ue.value),te=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(ue=>ue.value),oe=async(ue,we)=>{const xe=s.filter(de=>de.category===ue&&Number(de.academic_year)===A&&Number(de.semester)===me);await Promise.all(xe.filter(de=>!we.includes(de.main_room)).map(de=>pe(de.id).catch(()=>{}))),await Promise.all(we.map(de=>K({teacher_id:e.id,main_room:de,category:ue,academic_year:A,semester:me})))};await Promise.all([oe("สามัญ",se),oe("ศาสนา",te)]),Q("บันทึกโปรไฟล์สำเร็จ","success"),t&&await t(e.profile_id)}catch(T){Q("บันทึกไม่สำเร็จ: "+ve(T),"error")}finally{b.disabled=!1,b.textContent="บันทึก"}}),(f=document.getElementById("prof-pw-save"))==null||f.addEventListener("click",async()=>{const u=document.getElementById("prof-pw-new").value,b=document.getElementById("prof-pw-confirm").value;if(!u){Q("กรุณากรอกรหัสผ่านใหม่","warning");return}if(u.length<6){Q("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(u!==b){Q("รหัสผ่านไม่ตรงกัน","warning");return}const L=document.getElementById("prof-pw-save");L.disabled=!0,L.textContent="⏳ กำลังบันทึก...";try{const{error:h}=await tt.auth.updateUser({password:u});if(h)throw h;Q("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch(h){Q("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+ve(h),"error")}finally{L.disabled=!1,L.textContent="บันทึกรหัสผ่านใหม่"}}))}const Vt="pp5_exam_docs_draft_v1",yt="pp5_exam_docs_pending_class_id",Yt="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",ks="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",Ke=27,Fe=Ke*2,Wt=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],st={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},He={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},Es=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let G={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...He},loadingStudents:!1},at=[];const Cs=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Ss=()=>{try{return JSON.parse(localStorage.getItem(Vt)||"{}")||{}}catch{return{}}},Ge=()=>{localStorage.setItem(Vt,JSON.stringify(G.form))},js=()=>{let e="";try{e=sessionStorage.getItem(yt)||"",sessionStorage.removeItem(yt)}catch{}const s=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,s?String(s):""},Qe=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},Ut=e=>[...e||[]].sort((s,t)=>String(s.student_code||"").localeCompare(String(t.student_code||""),"th",{numeric:!0})),ct=e=>{if(!e)return"";const s=new Date(`${e}T00:00:00`);return Number.isNaN(s.getTime())?"":`${s.getDate()} เดือน ${Wt[s.getMonth()]} พ.ศ. ${s.getFullYear()+543}`},Ls=e=>{if(!e)return{day:"",month:"",year:""};const s=new Date(`${e}T00:00:00`);return Number.isNaN(s.getTime())?{day:"",month:"",year:""}:{day:String(s.getDate()),month:Wt[s.getMonth()],year:String(s.getFullYear()+543)}},pt=e=>{const s=e.startTime||"",t=e.endTime||"";return s&&t?`${s} - ${t}`:s||t||""},ht=(e,s)=>e?s.key==="th"?`${e} น.`:e:"",Ts=e=>{const s=String(e||"").trim();if(!s)return{room:"",name:""};const t=s.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(t)return{room:t[1],name:t[2].trim()};const[l,...c]=s.split(/\s+/);return{room:l,name:c.join(" ").trim()}},Le=e=>{const s=String(e||"").trim().toUpperCase();return s==="ชาย"||s==="M"||s==="MALE"?"M":s==="หญิง"||s==="F"||s==="W"||s==="FEMALE"?"F":""},mt=()=>{const e=new Set((G.students||[]).map(s=>Le(s.gender)).filter(Boolean));return e.has("M")&&e.has("F")},As=()=>{const e=G.form,s=G.students||[];if(e.studentScope!=="split"||!mt())return[s];const t=s.filter(c=>Le(c.gender)==="M"),l=s.filter(c=>Le(c.gender)==="F");return e.splitPrintMode==="both"?[t,l]:[e.splitGender==="F"?l:t]},Is=()=>{const e=G.form;if(e.studentScope!=="split"||!mt())return"";const s=G.students.filter(l=>Le(l.gender)==="M").length,t=G.students.filter(l=>Le(l.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${s} + หญิง ${t})`:e.splitGender==="F"?` (เฉพาะหญิง ${t} คน)`:` (เฉพาะชาย ${s} คน)`},Bs=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),wt=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),$t=(e,s,t,l=t.loading,c=0)=>{const g=e||[],i=g.map(($,_)=>`
    <tr>
      <td>${s+_}</td>
      <td>${a($.student_code||"")}</td>
      <td class="nm">${a($.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),d=Array.from({length:Math.max(0,c-g.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return i||d?i+d:`<tr><td colspan="4" class="empty-students">${a(l)}</td></tr>`},Ps=(e,s,t,l,c,g)=>{const i=e.slice(s*Fe,(s+1)*Fe),d=i.slice(0,Ke),$=i.slice(Ke,Fe),_=s*Fe+1,k=_+Ke;return`
    <div class="exam-doc-paper ${g} sign-list ${s>0?"exam-doc-page-break":""}">
      ${nt(t.signListTitle)}
      ${lt(t,l,c)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${a(t.studentCode)}</th>
                <th>${a(t.studentName)}</th>
                <th style="width:80px;">${a(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${$t(d,_,t)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${a(t.studentCode)}</th>
                <th>${a(t.studentName)}</th>
                <th style="width:80px;">${a(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${$t($,k,t," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${ot(t,c)}
    </div>`},_t=(e,s)=>s?`${e}. .................................................... <span class="textColor">(${a(s)})</span>`:`${e}. ...........................................................................................`,ot=(e,s)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${a(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>${_t(1,s.invigilator1)}</div>
      </div>
      <div class="examiner-signature">
        <div>${_t(2,s.invigilator2)}</div>
      </div>
    </div>
  </div>`,nt=e=>`
  <div class="header">
    <img src="${Yt}" alt="">
    <h2>${a(e)}</h2>
    <img src="${ks}" alt="">
  </div>`,lt=(e,s,t)=>`
  <div class="infoG">
    <div class="info1">
      ${a(e.examType)}: <span class="textColor">${a(t.examType||"")}</span>
      ${a(e.term)}: <span class="textColor">${a(t.semester||"")}</span>
      ${a(e.year)}: <span class="textColor">${a(t.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${a(e.subject)}: <span class="textColor">${a(s.subjectName||"")}</span>
      ${a(e.subjectCode)}: <span class="textColor">${a(s.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${a(e.examDate)}: <span class="textColor">${a(t.examDateLabel||ct(t.examDate))}</span>
      ${a(e.examTime)}: <span class="textColor">${a(t.examTimeLabel||pt(t))}</span>
    </div>
    <div class="info4">
      ${a(e.teacher)}: <span class="textColor">${a(s.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${a(e.classLevel)}: <span class="textColor">${a(s.className||"")}</span>
    </div>
  </div>`,Ms=e=>`
  <div class="header-single">
    <img src="${Yt}" alt="">
    <h2>${a(e)}</h2>
  </div>`,kt=(e,s)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${a(s||"")}</span>
  </div>`,Ns=(e,s,t,l)=>{const[c,g]=String(l.room||"").split("/");return`
  <div class="env-line">
    ${a(e.envTerm)} <span class="textColor env-blank-sm">${a(t.semester||"")}</span>
    ${a(e.envYear)} <span class="textColor env-blank-sm">${a(t.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${a(e.envSubject)} <span class="textColor env-blank-lg">${a(s.subjectName||"")}</span>
    ${a(e.envClass)} <span class="textColor env-blank-sm">${a(c||"")}</span> / <span class="textColor env-blank-sm">${a(g||"")}</span>
  </div>
  <div class="env-line">
    ${a(e.envTeacher)} <span class="textColor env-blank-lg">${a(s.teacherName||"")}</span>
  </div>
  <div class="env-line env-invigilator-heading">${a(e.envInvigilatorHeading)}:-</div>
  ${kt(1,t.invigilator1)}
  ${kt(2,t.invigilator2)}
  <table class="envelope-summary-table">
    <tbody>
      <tr><th>${a(e.envDate)}</th><td class="textColor">${a(t.examDateLabel||ct(t.examDate))}</td></tr>
      <tr><th>${a(e.envPeriod)}</th><td class="textColor">${a(t.examTimeLabel||pt(t))}</td></tr>
      <tr><th>${a(e.envGroup)}</th><td class="textColor">${a(t.classPart||"")}</td></tr>
      <tr><th>${a(e.envRoomNo)}</th><td class="textColor">${a(t.examRoom||"")}</td></tr>
    </tbody>
  </table>
  <div class="env-footer-dept">${a(e.envFooterDept)}</div>`},Ds=(e,s)=>{var h,T;const t=G.form,l=st[t.lang]||st.th,c=G.selectedClass||{},g=Qe(c),i=Ut(e),d=i.length,$=Ls(t.examDate),_=(h=G.teacher)!=null&&h.phone?` (${G.teacher.phone})`:"",k={className:c.class_name||"",subjectName:t.subjectLabel||g.subject_name||"",subjectCode:g.subject_code||"",teacherName:(((T=G.teacher)==null?void 0:T.full_name)||"")+_},p=Math.max(1,Math.ceil(i.length/Fe)),y=l.dir==="rtl"?"rtl":"ltr",m=s==="all"||s==="portrait",f=s==="all"||s==="envelope",u=s==="envelope"?" envelope-only":s==="portrait"?" portrait-only":"",b=t.examAmount||String(d),L=Ts(k.className);return`
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
    <div id="exam-doc-print-area" class="${u.trim()}">
    ${m?`
    ${Array.from({length:p},(B,V)=>Ps(i,V,l,k,t,y)).join("")}

    <div class="exam-doc-paper ${y} exam-doc-page-break">
      ${nt(l.examCoverTitle)}
      ${lt(l,k,t)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${a(l.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${d}</span> ${a(l.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${a(l.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${a(l.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${a(l.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${a(l.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${a(l.no)}</th>
            <th>${a(l.studentCode)}</th>
            <th>${a(l.absentName)}</th>
            <th>${a(l.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${wt(15)}
        </tbody>
      </table>
      ${ot(l,t)}
    </div>

    <div class="exam-doc-paper ${y} exam-doc-page-break">
      ${nt(l.absentTitle)}
      ${lt(l,k,t)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${a(l.no)}</th>
            <th>${a(l.studentCode)}</th>
            <th>${a(l.absentName)}</th>
            <th>${a(l.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${wt(15)}
        </tbody>
      </table>
      ${ot(l,t)}
    </div>
    `:""}

    ${f?t.lang==="th"?`
    <div class="exam-doc-paper ${y} landscape ${m?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${a(l.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${a(l.envelopeSubject)} <span class="textColor">${a(k.subjectName)}</span> ${a(l.subjectCode)} <span class="textColor">${a(k.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${t.examDateLabel?`${a(l.envelopeDate)} <span class="textColor">${a(t.examDateLabel)}</span>`:`${a(l.envelopeDate)} <span class="textColor">${a($.day)}</span> ${a(l.envelopeMonth)} <span class="textColor">${a($.month)}</span> ${a(l.envelopeYear)} <span class="textColor">${a($.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${t.examTimeLabel?`${a(l.envelopeTime)} <span class="textColor">${a(t.examTimeLabel)}</span>`:`${a(l.envelopeTime)} <span class="textColor">${a(ht(t.startTime,l))}</span> ${a(l.envelopeTo)} <span class="textColor">${a(ht(t.endTime,l))}</span>`}
        </div>
        <div class="infoNP4">
          ${a(l.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${a(L.room)}</span>${L.name?`<span class="exam-envelope-class-name">${a(L.name)}</span>`:""}</span> ${a(l.envelopeStudents)} <span class="textColor">${d}</span> ${a(l.studentUnit)} ${a(l.examAmount)} <span class="textColor">${a(b)}</span> ${a(l.examUnit)}
        </div>
        <div class="infoNP5">
          ${a(l.envelopeTeacher)} <span class="textColor">${a(k.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${y} envelope-religious ${m?"exam-doc-page-break":""}">
      ${Ms(l.envSchoolName)}
      ${Ns(l,k,t,L)}
    </div>
    `:""}
    </div>`},ut=(e="all")=>{const t=As().map($=>Ds($,e));if(t.length<=1)return t[0]||"";const l=t[0].match(/<style[\s\S]*?<\/style>/),c=l?l[0]:"",g=t[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),i=g?g[1]:"",d=t.map($=>{const _=$.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return _?_[1]:""});return`${c}
<div id="exam-doc-print-area" class="${i}">${d.join("")}</div>`},Os=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${ut("all")}
</body>
</html>`;Dt(e,{autoprint:!0})},Rs=()=>{const e=G.selectedClass,s=Qe(e);return e?`${s.subject_code||"-"} · ${s.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function qs(){at.forEach(e=>{try{e()}catch{}}),at=[]}function Et(e,s){const t=document.getElementById(e),l=document.getElementById(`${e}-list`);if(!t||!l)return;const c=G.teachers||[],g=()=>{l.classList.add("hidden")},i=m=>{t.value=m.full_name||"",G.form[s]=t.value,Ge(),ze(),g()},d=()=>{const m=t.value.trim(),f=m.toLowerCase(),u=c.filter(b=>!m||Bs(b).includes(f)).slice(0,10);if(!c.length){l.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!u.length){l.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}l.innerHTML=u.map(b=>`
      <button type="button" data-id="${b.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${b.image_url?`<img src="${b.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${a((b.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${a(b.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${a(b.teacher_code||"—")}${b.dept?` · ${a(b.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),l.querySelectorAll(".exam-teacher-option").forEach(b=>{b.addEventListener("mousedown",L=>{L.preventDefault();const h=c.find(T=>String(T.id)===String(b.dataset.id));h&&i(h)})})},$=()=>{d(),l.classList.remove("hidden")},_=()=>{G.form[s]=t.value,Ge(),ze(),$()},k=()=>$(),p=m=>{if(m.key==="Escape"&&g(),m.key==="Enter"){const f=l.querySelector(".exam-teacher-option");f&&!l.classList.contains("hidden")&&(m.preventDefault(),f.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},y=m=>{!t.contains(m.target)&&!l.contains(m.target)&&g()};t.addEventListener("input",_),t.addEventListener("focus",k),t.addEventListener("keydown",p),document.addEventListener("mousedown",y,!0),at.push(()=>{t.removeEventListener("input",_),t.removeEventListener("focus",k),t.removeEventListener("keydown",p),document.removeEventListener("mousedown",y,!0)})}function Ne(){const e=G.form,s=G.classes.map(t=>{const l=Qe(t),c=`${l.subject_code||"-"} · ${l.subject_name||"-"} · ${t.class_name||"-"}`;return`<option value="${t.id}" ${String(e.classId)===String(t.id)?"selected":""}>${a(c)}</option>`}).join("");ye(`
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
            <select id="exam-class-id" class="${ge}">
              <option value="">เลือกห้องเรียน</option>
              ${s}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${ge}">
              ${Object.values(st).map(t=>`<option value="${t.key}" ${e.lang===t.key?"selected":""}>${a(t.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <input id="exam-type" list="exam-type-datalist" class="${Y}" value="${a(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${Es.map(t=>`<option value="${a(t)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${Y}" value="${a(e.subjectLabel)}" placeholder="${a(Qe(G.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${Y}" value="${a(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${Y}" value="${a(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${Y}" value="${a(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${Y}" value="${a(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${Y}" value="${a(e.endTime)}">
            </label>
          </div>
          ${e.lang!=="th"?`
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความวันที่สอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = แปลงจากวันที่ด้านบนแบบไทยให้อัตโนมัติ)</span>
            <input id="exam-date-label" class="${Y}" value="${a(e.examDateLabel)}" placeholder="${a(ct(e.examDate)||"เช่น ١٥ يوليو ٢٠٢٦")}">
          </label>
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความเวลาสอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = ใช้เวลาด้านบนตามที่ตั้งไว้)</span>
            <input id="exam-time-label" class="${Y}" value="${a(e.examTimeLabel)}" placeholder="${a(pt(e)||"เช่น ٠٨:٣٠ - ٠٩:٣٠")}">
          </label>`:""}
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${Y}" value="${a(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${Y}" value="${a(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${Y}" value="${a(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${Y}" value="${a(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${Y}" value="${a(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${Y}" value="${a(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        ${mt()?(()=>{const t=G.students.filter(g=>Le(g.gender)==="M").length,l=G.students.filter(g=>Le(g.gender)==="F").length,c=e.studentScope==="split";return`
        <div class="mt-4 grid gap-3 sm:grid-cols-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">นักเรียนที่ใช้ (ห้องนี้มีทั้งชายและหญิง)</span>
            <select id="exam-student-scope" class="${ge}">
              <option value="all" ${c?"":"selected"}>ทั้งห้อง (ไม่แยกเพศ)</option>
              <option value="split" ${c?"selected":""}>แยกเพศ</option>
            </select>
          </label>
          ${c?`
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">เพศที่กำลังดู/พิมพ์</span>
            <select id="exam-split-gender" class="${ge}">
              <option value="M" ${e.splitGender!=="F"?"selected":""}>ชาย (${t} คน)</option>
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${l} คน)</option>
            </select>
          </label>
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รูปแบบพิมพ์</span>
            <select id="exam-split-print-mode" class="${ge}">
              <option value="single" ${e.splitPrintMode!=="both"?"selected":""}>พิมพ์ทีละเพศ (เฉพาะเพศที่เลือกอยู่)</option>
              <option value="both" ${e.splitPrintMode==="both"?"selected":""}>พิมพ์ทีเดียวทั้งสองเพศ (ชายก่อน ต่อด้วยหญิง)</option>
            </select>
          </label>`:""}
        </div>`})():""}

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${a(Rs())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${G.students.length} คน${a(Is())}</span>
          ${G.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${ut()}</div>
      </section>
    </div>`),Hs()}async function rt(){const e=G.form.classId;if(G.selectedClass=G.classes.find(s=>String(s.id)===String(e))||null,G.students=[],!!e){G.loadingStudents=!0,Ne();try{G.students=Ut(await os(e))}catch(s){console.error(s),Q("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+ve(s),"error")}finally{G.loadingStudents=!1}}}function je(){var e,s,t,l,c,g,i,d,$,_,k,p,y,m,f,u,b,L,h,T;G.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((s=document.getElementById("exam-subject-label"))==null?void 0:s.value)||"",lang:((t=document.getElementById("exam-lang"))==null?void 0:t.value)||"th",examType:((l=document.getElementById("exam-type"))==null?void 0:l.value)||"",semester:((c=document.getElementById("exam-semester"))==null?void 0:c.value)||"",academicYear:((g=document.getElementById("exam-year"))==null?void 0:g.value)||"",examDate:((i=document.getElementById("exam-date"))==null?void 0:i.value)||"",startTime:((d=document.getElementById("exam-start"))==null?void 0:d.value)||"",endTime:(($=document.getElementById("exam-end"))==null?void 0:$.value)||"",examDateLabel:((_=document.getElementById("exam-date-label"))==null?void 0:_.value)||"",examTimeLabel:((k=document.getElementById("exam-time-label"))==null?void 0:k.value)||"",classPart:((p=document.getElementById("exam-class-part"))==null?void 0:p.value)||"",periodPart:((y=document.getElementById("exam-period-part"))==null?void 0:y.value)||"",examRoom:((m=document.getElementById("exam-room"))==null?void 0:m.value)||"",examAmount:((f=document.getElementById("exam-amount"))==null?void 0:f.value)||"",invigilator1:((u=document.getElementById("exam-invigilator-1"))==null?void 0:u.value)||"",invigilator2:((b=document.getElementById("exam-invigilator-2"))==null?void 0:b.value)||"",studentScope:((L=document.getElementById("exam-student-scope"))==null?void 0:L.value)||"all",splitGender:((h=document.getElementById("exam-split-gender"))==null?void 0:h.value)||"M",splitPrintMode:((T=document.getElementById("exam-split-print-mode"))==null?void 0:T.value)||"single"},G.selectedClass=G.classes.find(B=>String(B.id)===String(G.form.classId))||null,Ge()}function ze(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=ut())}function Fs(){return je(),ze(),G.form.classId?!0:(Q("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function Hs(){var s,t,l,c;qs(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(g=>{var i,d;(i=document.getElementById(g))==null||i.addEventListener("input",()=>{je(),ze()}),(d=document.getElementById(g))==null||d.addEventListener("change",()=>{je(),ze()})}),(s=document.getElementById("exam-class-id"))==null||s.addEventListener("change",async()=>{je(),Ge(),await rt(),Ne()}),(t=document.getElementById("exam-lang"))==null||t.addEventListener("change",()=>{je(),Ne()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(g=>{var i;(i=document.getElementById(g))==null||i.addEventListener("change",()=>{je(),Ne()})}),(l=document.getElementById("exam-doc-refresh"))==null||l.addEventListener("click",async()=>{je(),await rt(),Ne(),Q("รีเฟรชรายชื่อแล้ว","success")}),(c=document.getElementById("exam-doc-print"))==null||c.addEventListener("click",()=>{Fs()&&Os()}),Et("exam-invigilator-1","invigilator1"),Et("exam-invigilator-2","invigilator2")}async function Ea(e){Te("exam-docs"),Ae("เอกสารช่วงสอบ","exam-docs"),ye(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[s,t,l]=await Promise.all([dt((e==null?void 0:e.id)??null),De().catch(()=>({})),Tt().catch(()=>[])]),c=Ss(),g=js(),i={...He,semester:String(t.semester||He.semester||""),academicYear:String(t.academicYear||He.academicYear||""),examDate:Cs(),invigilator1:(e==null?void 0:e.full_name)||"",...c};g&&s.some(d=>String(d.id)===String(g))&&(i.classId=String(g)),G={teacher:e,classes:s,teachers:l,students:[],selectedClass:null,loadingStudents:!1,form:i},G.form.examType||(G.form.examType=He.examType),g&&Ge(),G.selectedClass=G.classes.find(d=>String(d.id)===String(G.form.classId))||null,await rt(),Ne()}catch(s){console.error(s),ye(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${a(ve(s))}
    </div>`)}}let Oe=null,Be=null,Re=null,Pe=null,Me=null;const Gs={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},zs={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function Vs(e){const s=new Date,t=new Date(e.event_date+"T00:00:00"),l=new Date((e.end_date||e.event_date)+"T23:59:59");if(s>=t&&s<=l)return{status:"ongoing"};const c=Math.max(0,Math.floor((t-s)/1e3)),g=Math.floor(c/86400),i=c%86400,d=Math.floor(i/3600),$=Math.floor(i%3600/60),_=i%60,k=`${String(d).padStart(2,"0")}:${String($).padStart(2,"0")}:${String(_).padStart(2,"0")}`,p=c<=86400?"red":c<=3*86400?"amber":"normal";return{status:"upcoming",days:g,clock:k,urgency:p}}function Ys(e,s){if(!e)return 0;const t=new Date(e),l=new Date(s+"T00:00:00");if(isNaN(t)||isNaN(l))return 0;const c=l.getTime()-t.getTime();return c<0?0:Math.floor(c/(7*24*60*60*1e3))+1}function Ct(e,s){const t=i=>String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),l=i=>new Date(i+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),c=new Date().toISOString().slice(0,10),g=(e??[]).filter(i=>(i.end_date||i.event_date)>=c).map(i=>({ev:i,cd:Vs(i)})).filter(({cd:i})=>i.status==="ongoing"||i.days<=14).sort((i,d)=>i.ev.event_date.localeCompare(d.ev.event_date)).slice(0,5);return g.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${g.map(({ev:i,cd:d})=>{const $=d.status==="ongoing"||d.urgency==="red",_=d.urgency==="amber",k=$?"bg-red-50 border-red-300 ring-2 ring-red-200":_?"bg-amber-50 border-amber-200":"bg-white border-gray-200",p=$?"bg-red-100 animate-pulse":_?"bg-amber-100":"bg-gray-100",y=Ys(s,i.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${k}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${p}">${$?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${zs[i.event_type]}">${Gs[i.event_type]}</span>
            <span class="text-[11px] text-gray-400">${l(i.event_date)}</span>
            ${y>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${y}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${$?"text-red-800":"text-gray-800"}">${t(i.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${d.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${$?"text-red-600":_?"text-amber-600":"text-gray-500"}">อีก ${d.days} วัน</p>
               <p class="text-[11px] font-mono ${$?"text-red-400":"text-gray-400"}">${d.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function St(e,s,t=null){const l=d=>d==="A"?"#059669":d==="B"?"#2563eb":"#d97706",c=(d="0.11")=>t?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${d};color:${l(t.grade)}">${t.grade}</span>
       </div>`:"";if(!e.length)return"";const g=e.map(d=>({...d,cd:bs(d.start_time,d.end_time)})).sort((d,$)=>{const _={active:0,upcoming:1,done:2};return _[d.cd.status]-_[$.cd.status]||(d.start_time??"").localeCompare($.start_time??"")}),i=g.some(d=>d.cd.status==="active");return`
  <div onclick="window._openWenDuty('${s}')"
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
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${a(d.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${a(d.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${d.cd.cls}">${d.cd.label}</span>
          </div>
        </div>`:`
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${d.cd.status==="done"?"text-gray-400 line-through":"text-amber-700"}">
            📍 ${a(d.name)} <span class="${d.cd.status==="done"?"text-gray-300":"text-amber-500"}">(${a(d.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${d.cd.cls}">${d.cd.label}</span>
        </div>`).join("")}
      </div>
      <p class="text-[11px] mt-2 font-semibold ${i?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${c()}
  </div>`}const qe=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let $e=null;function jt(e,s){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const t=parseInt(String(s??"").replace(/[^0-9]/g,""),10);return t>=4&&t<=6?"สามัญมัธยม ม.ปลาย":t>=1&&t<=3?"สามัญมัธยม ม.ต้น":null}async function Ws(e){Te("overview"),Ae("ภาพรวมผู้บริหาร"),ye(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,t]=await Promise.all([ps().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),De().catch(()=>({}))]),l=Object.fromEntries(s.subjectRows.map(v=>[v.id,v])),c=Object.fromEntries(qe.map(v=>[v,0]));let g=0;s.classRows.forEach(v=>{const M=l[v.course_id],X=M?jt(M.subject_group,M.grade_level):null;X?c[X]++:g++});const i=new Set(s.classRows.map(v=>v.course_id).filter(Boolean)),d=s.subjectRows.filter(v=>i.has(v.id)),$=Object.fromEntries(qe.map(v=>[v,new Set])),_=new Set;d.forEach(v=>{const M=jt(v.subject_group,v.grade_level);M?$[M].add(v.subject_name):_.add(v.subject_name)});const k=Object.fromEntries(qe.map(v=>[v,$[v].size])),p=new Set(d.map(v=>v.subject_name)).size,y=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:s.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:s.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:s.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:p,hint:"นับชื่อวิชาไม่ซ้ำ"}],m=()=>y.map(v=>`
    <button type="button" data-exec-stat="${v.key}"
      class="text-left bg-white rounded-2xl border ${$e===v.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${v.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${v.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${v.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${v.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${$e===v.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),f=(v,M)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${v}</span>
      <span class="text-sm font-bold text-gray-800">${M.toLocaleString("th-TH")}</span>
    </div>`,u=()=>{if(!$e)return"";let v="";if($e==="teachers"||$e==="students"){const M=y.find(X=>X.key===$e);v=`<p class="text-sm text-gray-500">${M.icon} ${M.label}ทั้งหมด <b class="text-gray-800">${M.value.toLocaleString("th-TH")}</b> คน (${M.hint})</p>`}else $e==="courses"?v=qe.map(M=>f(M,c[M])).join("")+(g>0?f("ไม่ระบุหมวด/ยังไม่ผูกวิชา",g):""):$e==="subjects"&&(v=qe.map(M=>f(M,k[M])).join("")+(_.size>0?f("ไม่ระบุหมวด",_.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${v}
    </div>`},b={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},h=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter(v=>v.show&&["council","terangganu","regrade"].includes(v.key)).map(v=>{const[M,X]=b[v.key]||["#E4E4E7","#9C9CA3"];return{key:v.key,id:v.id,emoji:v.emoji,label:v.label,from:M,to:X,badge:v.badge,onclick:v.href?`window.location.href='${v.href}'`:`window._navTo('${v.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map(v=>Rt(v,t.iconTileStyle)).join(""),B=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map(v=>`
    <a href="${v.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${v.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${v.label}</span>
    </a>`).join("");ye(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${a((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${m()}
    </div>
    <div id="exec-stat-detail">${u()}</div>

    <div class="mt-5 mb-1 md:hidden">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</h4>
      <div class="flex gap-3 overflow-x-auto pb-1" id="exec-icon-grid">
        ${h}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">🖥️ จอมอนิเตอร์</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${B}
      </div>
    </div>
  </div>`);function V(){document.querySelectorAll("[data-exec-stat]").forEach(v=>{v.onclick=()=>{var X;const M=v.dataset.execStat;$e=$e===M?null:M,document.getElementById("exec-stat-cards").innerHTML=m(),document.getElementById("exec-stat-detail").innerHTML=u(),V(),(X=document.getElementById("exec-stat-detail-inner"))==null||X.scrollIntoView({behavior:"smooth",block:"nearest"})}})}V()}async function Lt(e,s=[]){var Ee,Se,be;if(Te("overview"),Ae("ภาพรวม"),gt(e).includes("executive")){Ws(e);return}const{getPendingExamRequestCount:t}=await fe(async()=>{const{getPendingExamRequestCount:o}=await import("./api-J-Ak1T-Y.js");return{getPendingExamRequestCount:o}},__vite__mapDeps([0,1,2,3,4])),{getMyDonationRequests:l}=await fe(async()=>{const{getMyDonationRequests:o}=await import("./api-J-Ak1T-Y.js");return{getMyDonationRequests:o}},__vite__mapDeps([0,1,2,3,4])),{getUnreadNotifications:c}=await fe(async()=>{const{getUnreadNotifications:o}=await import("./api-J-Ak1T-Y.js");return{getUnreadNotifications:o}},__vite__mapDeps([0,1,2,3,4])),[g,i,d,$,_,k,p,y,m,f]=await Promise.all([e?At(e.id).catch(()=>[]):It().catch(()=>[]),dt((e==null?void 0:e.id)??null).catch(()=>[]),De().catch(()=>({})),e?t(e.id).catch(()=>0):Promise.resolve(0),e?l(e.id).catch(()=>[]):Promise.resolve([]),e?c(e.id).catch(()=>[]):Promise.resolve([]),e?$s(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?ws(e.teacher_code).catch(()=>null):Promise.resolve(null),e?fe(()=>import("./sports-portals.js_v_10.22-DkDEs7nU.js"),__vite__mapDeps([38,6,19,1,16,20,21,2,9])).then(o=>o.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1}),(Ee=window._pp5AcademicTerms)!=null&&Ee.length?Promise.resolve(window._pp5AcademicTerms):ns().catch(()=>[])]),u=parseInt(d.academicYear??2568),b=parseInt(d.semester??1),L=ms(f,d),h=bt({academic_year:u,semester:b});let T=h;try{const o=localStorage.getItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`);L.some(j=>bt(j)===o)&&(T=o)}catch{}const B=gs(d.semester_start);Oe&&(clearInterval(Oe),Oe=null),Be&&(clearInterval(Be),Be=null),Re&&(clearInterval(Re),Re=null),Pe&&(clearInterval(Pe),Pe=null),Me&&(clearInterval(Me),Me=null);const[V,v,M,X,ne]=await Promise.all([e?ls(e.id,u,b).catch(()=>[]):Promise.resolve([]),e?rs(e.id).catch(()=>[]):Promise.resolve([]),is().catch(()=>[]),ds().catch(()=>[]),e?cs(u,b).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries(X.map(o=>[o.id,o]));const re=window._classroomMapGlobal,K={};v.forEach(o=>{K[o.teacher_schedule_id]||(K[o.teacher_schedule_id]=[]),K[o.teacher_schedule_id].push(o.class_id)});const pe=Object.fromEntries(i.map(o=>[o.id,o])),N=Object.fromEntries(M.map(o=>[o.period_no,o])),W=new Date().getDay(),A=V.filter(o=>o.day_of_week===W&&(K[o.id]??[]).length>0).map(o=>{const j=(o.period_no??1)+(o.span_periods??1)-1;return{...o,linkedClasses:(K[o.id]??[]).map(C=>pe[C]).filter(Boolean),period:N[o.period_no],actualEndPeriod:N[j]??N[o.period_no]}}).sort((o,j)=>o.period_no-j.period_no),me=o=>{var C,P;const j=We((C=o.period)==null?void 0:C.start_time,(P=o.actualEndPeriod)==null?void 0:P.end_time);return j.label.includes("กำลังสอน")?0:j.label.startsWith("เสร็จ")?2:1},se=A.find(o=>me(o)===0)??null,te=[...A].filter(o=>o!==se).sort((o,j)=>me(o)-me(j)||o.period_no-j.period_no),oe=s.filter(o=>o.category==="สามัญ"),ue=_.find(o=>o.package_type==="donation"&&o.status==="approved"),we=_.filter(o=>o.package_type==="donation"&&o.status==="approved").reduce((o,j)=>o+(j.amount??0),0),xe=(o,j)=>{const C=parseInt(o,10);return Number.isFinite(C)&&C>0?C:j},de=()=>{const o=String(d.donationStickerTiers??"").trim();return xe(d.donationMinAmount,99),xe(d.donationAmountStep,50),(o?o.split(`
`).filter(Boolean).map(H=>{const[ee,ce,J,ie,Ie]=H.split("|").map(Ve=>Ve.trim());return{amount:xe(ee,0),sticker:ce||"🏅",title:J||`ผู้สนับสนุน ${ee} บาท`,note:ie||"",color:Ie||""}}).filter(H=>H.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([H,ee,ce,J,ie])=>({amount:H,sticker:ee,title:ce,note:J,color:ie}))).sort((H,ee)=>H.amount-ee.amount).map((H,ee)=>{const ce=d[`donationStickerImg${ee+1}`]??"";return ce&&/^https?:\/\//.test(ce)?{...H,sticker:ce}:H})},he=o=>{if(!o)return"";const j=parseInt(o.slice(1,3),16),C=parseInt(o.slice(3,5),16),P=parseInt(o.slice(5,7),16);return`border:2px solid ${o};box-shadow:0 0 0 4px rgba(${j},${C},${P},0.25),0 4px 20px rgba(${j},${C},${P},0.18);`},_e=()=>{const o=String(d.donationSpecialFeatures??"").trim(),j=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return o?o.split(`
`).filter(Boolean).map(C=>{const P=C.split("|").map(H=>H.trim());return{icon:P[0]||"✨",text:P[1]||P[0]||C,minTier:parseInt(P[2])||1}}).filter(C=>C.text):j.map(([C,P,H])=>({icon:C,text:P,minTier:H}))};let ae=null,n=0,F="",I="",S="border border-gray-200 shadow-md";if(ue&&d.quotaMode==="school_sponsored"){const o=de(),j=we;if(ae=[...o].reverse().find(C=>j>=C.amount)??o[0],n=ae?o.indexOf(ae)+1:0,ae){I=he(ae.color),S="";const C=String(ae.sticker??""),P=/^https?:\/\//.test(C)?`<img src="${C}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${C}</span>`,H=ae.color?`color:${ae.color};`:"color:#f59e0b;";F=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${P}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${H}">
            ${ae.note||ae.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async o=>{if(!o)return;const{renderClassDetail:j}=await fe(async()=>{const{renderClassDetail:C}=await import("./teacher-views-classes-DL4zHYyC.js").then(P=>P.t);return{renderClassDetail:C}},__vite__mapDeps([34,6,0,1,2,3,4,9,10,35,30,20,14,21,29,24,26,27,28,36]));j(e,o)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:o}=await fe(async()=>{const{openSmartClassroomLanding:j}=await import("./teacher-views-smart-classroom-D3DhAsOr.js");return{openSmartClassroomLanding:j}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]));o(e)};const D=B>0?(()=>{const o=new Date(d.semester_start);o.setDate(o.getDate()+(B-1)*7);const j=new Date(o);j.setDate(j.getDate()+6);const C=H=>`${String(H.getDate()).padStart(2,"0")}/${String(H.getMonth()+1).padStart(2,"0")}`,P=`📅 สัปดาห์ที่ ${B} (${C(o)} – ${C(j)}) · ภาคเรียนที่ ${b}/${u}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${P}</span><span class="mr-10 lg:mr-16">${P}</span>
      </div>
    </div>
    <style>@keyframes teacher-week-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}</style>
    `})():"",q=gt(e);window._openHomeroomPopup=()=>{var j;(j=document.getElementById("homeroom-popup"))==null||j.remove();const o=document.createElement("div");o.id="homeroom-popup",o.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",o.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">🏠 ห้องที่ปรึกษาของฉัน</p>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" onclick="this.closest('.fixed').remove()">×</button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3">
        ${s.map(C=>`
        <div class="border border-gray-100 rounded-xl p-3">
          <p class="font-bold text-gray-800">${C.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${C.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">${C.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${C.category==="สามัญ"?`
            <button onclick="window._openLifeSkillScore('${C.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>`:`
            <button onclick="window._openReligionScore('${C.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${C.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-4">ไม่มีห้องที่ปรึกษา</p>'}
      </div>
    </div>`,document.body.appendChild(o),o.addEventListener("click",C=>{C.target===o&&o.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:o}=await fe(async()=>{const{openTeacherShirtSizeModal:j}=await import("./sports-portals.js_v_10.22-DkDEs7nU.js");return{openTeacherShirtSizeModal:j}},__vite__mapDeps([38,6,19,1,16,20,21,2,9]));o(e)};const U=[...new Set(i.map(o=>o.class_name).filter(Boolean))].sort(),z=JSON.stringify(U).replace(/"/g,"&quot;"),r=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:q.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:oe.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${z}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:s.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:m.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],x={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-competition-manager":["#D9E7F8","#4C86C6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},E=(window._teacherOverviewSystems||[]).filter(o=>o.show).map(o=>{const[j,C]=x[o.key]||["#E4E4E7","#9C9CA3"];return{key:o.key,id:o.id,show:!0,emoji:o.emoji,label:o.label,from:j,to:C,badge:o.badge,onclick:o.href?`window.location.href='${o.href}'`:`window._navTo('${o.nav}')`}}),w=[...r,...E].filter(o=>o.show),O=(e==null?void 0:e.overview_prefs)||null,R=O?w.filter(o=>!(O.hiddenKeys||[]).includes(o.key)).sort((o,j)=>{const C=O.iconOrder||[],P=C.indexOf(o.key),H=C.indexOf(j.key);return P===-1&&H===-1?0:P===-1?1:H===-1?-1:P-H}):w,Z=R.map(o=>Rt(o,d.iconTileStyle)).join("");window._openOverviewCustomizer=()=>Us(e,w,s);const le=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">หน้าภาพรวมและงานประจำวันใช้ภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนและเอกสาร ปพ.5 ของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="teacher-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${us(L,T,h)}
        </select>
      </label>
    </div>
  </section>`;if(ye(`<div class="animate-fade">
    ${le}

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${k.length?(()=>{const o={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},j={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},C={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},P={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},H=[...new Set(k.map(J=>J.metric))].map(J=>`<span style="background:${C[J]??"#f3f4f6"};color:${j[J]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${o[J]??J}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(k.filter(J=>J.supervisor).map(J=>[J.supervisor_id,J.supervisor])).values()].map(J=>P[J.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${k.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${H}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${e==null?void 0:e.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})():""}

    <!-- กำลังสอนอยู่ (ย้ายมาไว้ในโซนเร่งด่วนบนสุด) -->
    ${se?(()=>{var C,P;const o=se.period?`${se.period.start_time.substring(0,5)}–${se.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${se.period_no}`,j=((C=se.linkedClasses[0])==null?void 0:C.id)??null;return`
    <div id="active-class-card" class="mb-4 bg-white rounded-2xl p-5 ${j?"cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150":""}"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);"
      ${j?`onclick="window._goToActiveClass(${j})"`:""}>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${o}</span>
        ${j?'<span class="text-[11px] text-emerald-500 ml-auto">เข้าห้องเรียน →</span>':""}
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${se.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${se.linkedClasses.map(H=>{var ee;return((ee=H.master_subjects)==null?void 0:ee.subject_name)??H.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${se.linkedClasses.map(H=>{const ee=H.classroom_id?re[H.classroom_id]:null;return H.class_name+(ee?` · 📍${ee.building} ห้อง ${ee.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${vt((P=se.actualEndPeriod)==null?void 0:P.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`})():""}

    ${D}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="bg-white rounded-2xl ${S} px-5 pt-5 pb-5 mb-5 flex items-center gap-5 overflow-hidden" style="${I}">
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
          ${s.map(o=>`<span class="px-2 py-0.5 rounded-full text-xs ${o.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"} font-medium">🏠 ${o.main_room}</span>`).join("")}
          ${s.length===0?'<span class="px-2 py-0.5 rounded-full text-xs bg-gray-50 text-gray-400">ไม่มีห้องที่ปรึกษา</span>':""}
        </div>
      </div>
      <!-- สติกเกอร์ -->
      ${F}
    </div>

    <!-- สรุปของฉัน -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      ${[{label:"คอร์สวิชาของฉัน",value:g.length,icon:"📖",color:"text-emerald-700",bg:"bg-emerald-50",nav:"my-courses"},{label:"ห้องเรียน",value:i.length,icon:"🏫",color:"text-blue-700",bg:"bg-blue-50",nav:"my-classes"},{label:"คำร้องรออนุมัติ",value:$,icon:"🔔",color:$>0?"text-red-700":"text-gray-400",bg:"bg-red-50",nav:"requests"},{label:"Smart Classroom",value:"เปิดห้องสอนสด",icon:"👑",color:"text-amber-700",bg:"bg-amber-50",onclick:"window._openSmartClassroomLanding()"}].map(o=>`
        <div onclick="${o.onclick||`window._navTo('${o.nav}')`}"
          class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md p-5 flex items-center gap-4 cursor-pointer hover:shadow-lg active:scale-[0.98] transition-all duration-150 bg-white">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80"></div>
          <div class="w-11 h-11 rounded-xl ${o.bg} flex items-center justify-center text-xl shadow-sm">${o.icon}</div>
          <div>
            <p class="text-xs text-gray-500">${o.label}</p>
            <p class="${typeof o.value=="number"?"text-2xl":"text-sm mt-1"} font-bold ${o.color}">${o.value}</p>
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
      ${R.length>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Z}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${St(p,e.teacher_code,y)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${Ct(ne,d.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${Ot[W]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${V.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':v.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${A.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${V.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":v.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${V.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:v.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${te.map((o,j)=>{var ee,ce;const C=We((ee=o.period)==null?void 0:ee.start_time,(ce=o.actualEndPeriod)==null?void 0:ce.end_time),P=C.label.startsWith("เสร็จ"),H=o.period?`${o.period.start_time.substring(0,5)}–${(o.actualEndPeriod??o.period).end_time.substring(0,5)}`:`คาบ ${o.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${P?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${P?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${P?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${o.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${P?"text-gray-400":"text-gray-700"} truncate">
                  ${o.linkedClasses.map(J=>{var ie;return((ie=J.master_subjects)==null?void 0:ie.subject_name)??J.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${o.linkedClasses.map(J=>{const ie=J.classroom_id?re[J.classroom_id]:null;return J.class_name+(ie?` 📍${ie.building} ห้อง ${ie.room_number}`:"")}).join(" · ")} · ${H}
                </p>
              </div>
              <span id="today-cd-${j}" class="text-xs font-medium flex-shrink-0 ${C.cls}">${C.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),(Se=document.getElementById("donor-sticker-btn"))==null||Se.addEventListener("click",()=>{if(!ae)return;const o=_e(),j=ae.color||"#f59e0b",C=parseInt(j.slice(1,3),16),P=parseInt(j.slice(3,5),16),H=parseInt(j.slice(5,7),16),ee=String(ae.sticker??""),ce=/^https?:\/\//.test(ee)?`<img src="${ee}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${ee}</div>`,J=document.createElement("div");J.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",J.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${C},${P},${H},0.85),rgba(${C},${P},${H},1))">
          ${ce}
          <p class="text-white font-bold text-base">${ae.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${ae.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${o.map(ie=>n>=(ie.minTier??1)?`<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${ie.icon}</span>
                     <span class="leading-snug">${ie.text}</span>
                   </div>`:`<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${ie.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${ie.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${n<4?`
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>`:""}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${C},${P},${H},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(J),J.addEventListener("click",ie=>{ie.target===J&&J.remove()})}),(be=document.getElementById("teacher-overview-term-switcher"))==null||be.addEventListener("change",o=>{var C,P;const j=o.target.value;try{localStorage.setItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`,j)}catch{}j===h?(C=window._navTo)==null||C.call(window,"overview"):(P=window._navTo)==null||P.call(window,"grades")}),A.length>0&&(Oe=setInterval(()=>{te.forEach((o,j)=>{var H,ee;const C=document.getElementById(`today-cd-${j}`);if(!C){clearInterval(Oe);return}const P=We((H=o.period)==null?void 0:H.start_time,(ee=o.actualEndPeriod)==null?void 0:ee.end_time);C.textContent=P.label,C.className=`text-xs font-medium flex-shrink-0 ${P.cls}`})},3e4)),se&&(Be=setInterval(()=>{var C,P,H,ee;const o=document.getElementById("active-class-countdown");if(!o){clearInterval(Be);return}We((C=se.period)==null?void 0:C.start_time,(P=se.actualEndPeriod)==null?void 0:P.end_time).label.startsWith("เสร็จ")?(clearInterval(Be),(H=document.getElementById("active-class-card"))==null||H.remove()):o.textContent=vt((ee=se.actualEndPeriod)==null?void 0:ee.end_time)},1e3)),document.getElementById("teacher-live-clock")){const o=()=>{const j=new Date,C=document.getElementById("teacher-live-clock");if(!C){clearInterval(Re);return}C.textContent=`${String(j.getHours()).padStart(2,"0")}:${String(j.getMinutes()).padStart(2,"0")}:${String(j.getSeconds()).padStart(2,"0")}`};o(),Re=setInterval(o,1e3)}e&&p.length&&(Pe=setInterval(()=>{const o=document.getElementById("wen-duty-card");if(!o){clearInterval(Pe),Pe=null;return}o.innerHTML=St(p,e.teacher_code,y)},3e4)),e&&ne.length&&(Me=setInterval(()=>{const o=document.getElementById("wcal-upcoming-card");if(!o){clearInterval(Me),Me=null;return}o.innerHTML=Ct(ne,d.semester_start)},1e3))}function Us(e,s,t){var p,y;(p=document.getElementById("overview-customizer-modal"))==null||p.remove();const l=(e==null?void 0:e.overview_prefs)||null;let c=s.map(m=>m.key);if((y=l==null?void 0:l.iconOrder)!=null&&y.length){const m=new Set(c),f=l.iconOrder.filter(b=>m.has(b)),u=c.filter(b=>!f.includes(b));c=[...f,...u]}const g=new Set(((l==null?void 0:l.hiddenKeys)||[]).filter(m=>c.includes(m))),i=Object.fromEntries(s.map(m=>[m.key,m])),d=document.createElement("div");d.id="overview-customizer-modal",d.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const $=()=>c.map((m,f)=>{const u=i[m];if(!u)return"";const b=g.has(m),L=u.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${b?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${u.from},${u.to})">${u.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${L}</span>
      <button type="button" data-oc-up="${m}" ${f===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${m}" ${f===c.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${m}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${b?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${b?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),_=()=>{const m=d.querySelector("#oc-list");m&&(m.innerHTML=$()),k()},k=()=>{d.querySelectorAll("[data-oc-toggle]").forEach(m=>m.onclick=()=>{const f=m.dataset.ocToggle;g.has(f)?g.delete(f):g.add(f),_()}),d.querySelectorAll("[data-oc-up]").forEach(m=>m.onclick=()=>{const f=c.indexOf(m.dataset.ocUp);f>0&&([c[f-1],c[f]]=[c[f],c[f-1]],_())}),d.querySelectorAll("[data-oc-down]").forEach(m=>m.onclick=()=>{const f=c.indexOf(m.dataset.ocDown);f<c.length-1&&([c[f+1],c[f]]=[c[f],c[f+1]],_())})};d.innerHTML=`
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
    </div>`,document.body.appendChild(d),k(),d.addEventListener("click",m=>{m.target===d&&d.remove()}),d.querySelector("#oc-close").addEventListener("click",()=>d.remove()),d.querySelector("#oc-save").addEventListener("click",async()=>{const m=d.querySelector("#oc-save");m.disabled=!0,m.textContent="กำลังบันทึก...";try{const f={iconOrder:c,hiddenKeys:[...g]};await xt(e.id,{overview_prefs:f}),e.overview_prefs=f,d.remove(),Q("บันทึกการปรับแต่งแล้ว","success"),Lt(e,t)}catch(f){console.error(f),Q("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),m.disabled=!1,m.textContent="บันทึก"}}),d.querySelector("#oc-reset").addEventListener("click",async()=>{try{await xt(e.id,{overview_prefs:null}),e.overview_prefs=null,d.remove(),Q("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),Lt(e,t)}catch(m){console.error(m),Q("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function Xs(e,s,t,l,c){const g=l.samaiLogoBwUrl??l.samaiLogoUrl??"",i=Number(e.credit??1),d=i*2,$=i*2*20,k=String(e.grade_level??"").replace(/[^0-9]/g,""),p=["AGM","AGMVOC"].includes(e.subject_group??""),y=c.find(W=>W.dept_code===e.dept)??{},m=y.dept_name??e.dept??"",f=y.head_name??"",u=y.head_sign_url??"",b=l.samaiSchoolName??"",L=l.samaiDirectorName??"",h=l.samaiDirectorSignUrl??"",T=p?l.agmAcademicHeadName??l.samaiAcademicHeadName??"":l.samaiAcademicHeadName??"",B=new Date,V=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],v=`${B.getDate()} ${V[B.getMonth()]} พ.ศ. ${B.getFullYear()+543}`,M=l.academicYear??B.getFullYear()+543,X=l.semester??1,ne=(t==null?void 0:t.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",re=s.map(W=>W.class_name).join(", "),K=k+(re?" "+re:""),pe=p?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",N=`<!DOCTYPE html>
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
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${a(b)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${a(v)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${X} ปีการศึกษา ${M}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${a(b)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${a((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${a(ne)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${a(m)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${a(e.subject_name??"")}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${a(e.subject_code??"")}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${i}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${d}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${$}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${p?"อิสลามศึกษา":"มัธยมศึกษา"}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${a(K)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${a((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${u?`<img src="${a(u)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${a(f)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${a(m)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${a(T)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${a(pe)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${h?`<img src="${a(h)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${a(L)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${a(b)}</div>

</div>
</body></html>`;Dt(N)}export{Xs as _openLessonPlanApproval,St as _renderWenDutyCard,Ct as _renderWorkCalendarUpcoming,wa as openCourseDocPage2Modal,ja as renderAnnouncementsView,Ra as renderAttendance,qa as renderAttendanceGrid,na as renderClassDetail,La as renderClassEditForm,oa as renderClassForm,la as renderCourseDocLangConfig,$a as renderCourseForm,Ea as renderExamDocuments,Ma as renderGrades,Na as renderGradesGrid,Fa as renderLifeSkillScore,Ta as renderMyClasses,ha as renderMyCourses,Ha as renderPrayerRoomMonitor,Ga as renderPrayerScore,ka as renderProfile,_a as renderProfileSetup,za as renderReadingScore,Da as renderRequests,Aa as renderSchedule,Ia as renderScheduleBuilder,ra as renderScheduleGrid,Ba as renderScoreColumns,Lt as renderTeacherOverview};
