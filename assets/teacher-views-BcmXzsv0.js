const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-CQwFwlFA.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-smart-classroom-DRuZFVOc.js","assets/ui-ByLHWuG5.js","assets/donation-utils-DtZioNqn.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-CxdMU7pu.js","assets/teacher-views-attendance-B3O41sgB.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-utils-BqsVDKnm.js","assets/teacher-views-grades-lvpbRKMs.js","assets/score-display-CQ4dUIPx.js","assets/regrade-api-CLR_bWyN.js","assets/teacher-views-quiz-monitor-LV7NoA-J.js","assets/teacher-views-quiz-analytics-D_ldJP_V.js","assets/teacher-views-dashboard-BajxuBUs.js","assets/teacher-views-classes-BCO3d0aE.js","assets/browser-JP79f-a9.js","assets/sync-DReifb_L.js","assets/pp5-doc-xUDxxK8y.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/ai-prompt-gate-D6R7FVed.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-DxaTZ5Zg.js","assets/council-api-Dh8lgCs9.js","assets/lesson-plan-archive-YVJH6is5.js","assets/sports-portals.js_v_10.22-D8KSdgz3.js","assets/sports-awards-admin-6oCPrlSb.js","assets/azizgames-modal-CZNvwg6f.js"])))=>i.map(i=>d[i]);
import{a as Y,g as je,_ as Ne}from"./ui-ByLHWuG5.js";import{getDepartments as et,getTeachers as Xt,getSubjectCoTeachers as fs,getSubjectCatalog as Kt,getSystemConfig as De,getReligionGroups as vs,updateMyProfile as St,getMySchedule as Et,getMySubjects as Ct,createSubject as hs,getCourseDocPage2 as ys,getMasterSubjects as Qt,getMyClasses as jt,getUniqueRooms as Zt,getUniqueReligionRooms as es,getHomeroomTeachers as ts,getCourseDocLangSettings as ws,getCourseSyllabus as _s,getLessonPlans as $s,getTeachersWithSignatures as ks,getClassScheduleLinks as ss,deleteSyllabusItem as Ss,updateSyllabusItem as Es,deleteLessonPlan as Cs,findCurriculumStandards as js,saveCourseDocPage2 as Ls,getClassStudents as Is,getAcademicTerms as As,getPeriods as Ts,getClassrooms as Ns,getWorkCalendarEvents as Bs,getExecutiveOverviewStats as Ms,updateTeacher as Nt}from"./api-CQwFwlFA.js";import{c as Ps,a as Bt,r as Ds}from"./academic-term-switcher-CG6hrO1a.js";import{c as os,s as vt}from"./supabase-BV-W2lsh.js";import"./sync-DReifb_L.js";import{o as as}from"./print-overlay-BVfxEd6n.js";import{_DAYS_TH_FULL as ns,setActiveNav as We,setTitle as Ue,setContent as Me,SELECT_CLS as Le,INPUT_CLS as me,CREDIT_OPTS as Os,GRADE_OPTS as xt,_htmlEsc as l,formatPhone as ut,renderSubjectVisual as Rs,_dutyCountdownInfo as qs,_teacherPositionList as Mt,_currentWeek as Fs,renderIconTile as ls,_activeRemainingDisplay as Pt,renderConfiguredVisual as Hs,_countdownInfo as dt}from"./teacher-views-utils-BqsVDKnm.js";import{b as Po,e as Do,a as Oo,r as Ro}from"./teacher-views-classes-BCO3d0aE.js";import{f as ia,c as da,g as ca,h as pa,i as ma,d as ua}from"./teacher-views-classes-BCO3d0aE.js";import{i as ze,r as Dt,c as zs,f as lt,o as Gs,a as Ys}from"./pp5-doc-xUDxxK8y.js";import{uploadTeacherPhoto as Vs}from"./storage-CuUjCgvI.js";import{c as Ws}from"./ai-prompt-gate-D6R7FVed.js";import{_ as Us}from"./teacher-views-grades-lvpbRKMs.js";import{r as ga,a as xa,b as fa}from"./teacher-views-grades-lvpbRKMs.js";import{renderAttendance as ha,renderAttendanceGrid as ya,renderLifeSkillScore as wa,renderPrayerRoomMonitor as _a,renderPrayerScore as $a,renderReadingScore as ka}from"./teacher-views-attendance-B3O41sgB.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./regrade-api-CLR_bWyN.js";import"./score-display-CQ4dUIPx.js";import"./confetti-loader-BAN5Lv-C.js";import"./score-qr-scanner-CxdMU7pu.js";import"./leave-time-CrS9gT63.js";const rs="https://zhjqkylesnhcotpkzoxr.supabase.co",is="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let Ge=null;function Ot(e,s,t){const d=new Date(s+"T00:00:00"),f=new Date(e+"T00:00:00"),k=Math.floor((f-d)/864e5);if(k<0)return null;const b=Math.floor(k/7)+1;return b<=t?b:null}function Js(e,s,t){const[d,f]=e.includes(":")?e.split(":"):[null,e];return(d===null||d===t)&&f===s}async function Xs(e){if(!e)return null;Ge||(Ge=os(rs,is));const[s,t,d]=await Promise.all([Ge.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),Ge.from("duty_points").select("assigned_to"),Ge.from("settings").select("week_start_date,total_weeks").single()]),f=d.data||{},k=f.week_start_date,b=f.total_weeks||20;if(!k)return null;const u=new Date().toISOString().slice(0,10),S=Ot(u,k,b)||1;if(S<=5)return{grade:"A",score:100,week:S};const A=String(e);let L=0;for(const C of t.data||[])for(const M of C.assigned_to||[])(M.includes(":")?M.split(":")[1]:M)===A&&L++;if(L===0)return null;const T={};for(const C of s.data||[]){const M=Ot(C.date,k,b);M!==null&&(T[M]||(T[M]=[]),T[M].push(C))}const h=5,_=Math.min(S,b-2);let v=0;for(let C=1;C<=_;C++)if(C<=h)v+=100;else{const M=T[C]||[],X=M.length,P=M.filter(le=>le.is_late).length,E=X-P,H=Math.min(100,Math.round(X/L*100)),te=X>0?Math.max(0,Math.round(E/X*100)):100;v+=Math.round(H*.6+te*.4)}const y=Math.round(v/_);return{grade:y>=90?"A":y>=75?"B":"C",score:y,week:S}}async function Ks(e){if(!e)return[];Ge||(Ge=os(rs,is));const{data:s,error:t}=await Ge.from("duty_points").select("name, time, assigned_to");if(t||!s)return[];const d=String(e),f=ns[new Date().getDay()];return s.filter(k=>(k.assigned_to??[]).some(b=>Js(b,d,f))).map(k=>{const[b,u]=String(k.time??"").split("-").map(S=>S.trim());return{name:k.name,time:k.time,start_time:b,end_time:u}})}const bt=e=>{const s=String((e==null?void 0:e.dept_label)??"").trim(),t=String((e==null?void 0:e.subject_code)??"").trim(),d=s+" "+t+" "+String((e==null?void 0:e.subject_name_arabic)??"");return/อิสลามศึกษา|อัดดีนียะห์/u.test(s)||/^(ศอ|อก|อศ|ฟป)/u.test(t)?"ISL":/ภาษาอาหรับ/u.test(s)||/^ภอ/u.test(t)||/العربية/u.test(d)?"ARB":/ภาษามลายู/u.test(s)||/^มล/u.test(t)||/الملايو/u.test(d)?"MLB":/ภาษาไทย/u.test(s)?"THAI":/ภาษาต่างประเทศ/u.test(s)?"ENG":/คณิตศาสตร์/u.test(s)?"MATH":/วิทยาศาสตร์/u.test(s)?"SC":/สังคม|อิญติมาอียะห์|อิจญ์ติมาอียะห์/u.test(s)?"SOC":/ศิลปะ/u.test(s)?"ART":/สุขศึกษา|พลศึกษา/u.test(s)?"HEALTH":/การงานอาชีพ|เทคโนโลยี/u.test(s)?e.subject_group==="ACDMVOC"?"VOC":"OCC":""},Ee=e=>String(e??"").toLocaleLowerCase("th-TH").normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu,""),ft=e=>{const t=String(e??"").trim().match(/(ปวช\.?|ปวส\.?|อป\.?|ม\.?)\s*([1-6])/iu);if(!t)return"";const d=t[1].replace(/\s+/g,"");return d.startsWith("ม")?`ม.${t[2]}`:`${d}${t[2]}`},Qs=(e,s,t)=>{if(!s)return!1;if(bt(e)===s)return!0;const d=lt(t,e.subject_group,s);return!!(d!=null&&d.dept_name&&Ee(e.dept_label)===Ee(d.dept_name))};function ds({prefix:e,samaiRooms:s,religionRooms:t,homeroomRooms:d,assignments:f,teacherId:k,academicYear:b,semester:u}){const S=(A,L,T,h,m)=>{const _=`${e}-advisor-rooms-${T}`,v=`${e}-room-${T}`,y=(d??[]).filter(C=>C.category===A&&Number(C.academic_year)===Number(b)&&Number(C.semester)===Number(u)),O=new Map((f??[]).filter(C=>C.category===A).map(C=>[C.main_room,C]));return`<div id="${e}-room-${T}-wrap" class="space-y-2">
      <button type="button" data-advisor-room-toggle="${_}" aria-expanded="false"
        class="w-full flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 px-4 py-3 text-left transition">
        <span class="font-semibold text-sm text-gray-700">${m} ครูที่ปรึกษา${h}</span>
        <span class="flex items-center gap-2 text-xs text-gray-400">
          <span data-advisor-room-count="${v}">0 ห้อง</span><span data-advisor-room-chevron="${_}">▾</span>
        </span>
      </button>
      <div id="${_}" class="hidden border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-52 overflow-y-auto">
        <p class="text-[11px] text-gray-400 mb-2">เลือกได้มากกว่า 1 ห้อง · ห้องที่มีครูคนอื่นรับผิดชอบอยู่จะเลือกไม่ได้</p>
        ${L.length?L.map(C=>{var te;const M=O.get(C),X=M&&Number(M.teacher_id)===Number(k),P=!!M&&!X,E=((te=M==null?void 0:M.teachers)==null?void 0:te.full_name)||"มีครูที่ปรึกษาแล้ว",H=y.some(le=>le.main_room===C);return`<label class="flex items-start gap-2 text-sm rounded-lg px-2 py-1.5 ${P?"bg-gray-50 text-gray-400 cursor-not-allowed":"cursor-pointer hover:bg-emerald-50 hover:text-emerald-700"}">
            <input type="checkbox" name="${v}" value="${l(C)}" data-advisor-room="${v}" ${H?"checked":""} ${P?"disabled":""} class="text-emerald-600 rounded mt-0.5" />
            <span class="min-w-0 flex-1"><span class="block">${l(C)}</span>${P?`<span class="block text-[11px] text-gray-400">🔒 ${l(E)}</span>`:""}</span>
          </label>`}).join(""):`<p class="text-xs text-gray-400">ยังไม่มีห้อง${h}</p>`}
      </div>
    </div>`};return`<div class="border-t border-gray-100 pt-4 space-y-3">
    <label class="block text-sm font-semibold text-gray-700">🏠 ห้องที่ปรึกษา</label>
    ${S("สามัญ",s,"samai","สามัญ","🏫")}
    ${S("ศาสนา",t,"religion","ศาสนา","🕌")}
  </div>`}function cs(e=document){const s=()=>e.querySelectorAll("[data-advisor-room-count]").forEach(t=>{const d=t.dataset.advisorRoomCount,f=e.querySelectorAll(`input[data-advisor-room="${d}"]:checked`).length;t.textContent=`${f} ห้อง`});e.querySelectorAll("[data-advisor-room-toggle]").forEach(t=>{t.addEventListener("click",()=>{const d=e.querySelector(`#${t.dataset.advisorRoomToggle}`);if(!d)return;const f=d.classList.contains("hidden");d.classList.toggle("hidden",!f),t.setAttribute("aria-expanded",String(f));const k=e.querySelector(`[data-advisor-room-chevron="${t.dataset.advisorRoomToggle}"]`);k&&(k.textContent=f?"▴":"▾")})}),e.querySelectorAll("input[data-advisor-room]").forEach(t=>t.addEventListener("change",s)),s()}async function Zo(e){We("my-courses"),Ue("คอร์สวิชาของฉัน","courses"),Me(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[s,t,d]=await Promise.all([e?Ct(e.id):Qt().catch(()=>[]),e?jt(e.id).catch(()=>[]):Promise.resolve([]),De().catch(()=>({}))]),f=s,k=h=>t.filter(m=>{var _;return Number(m.course_id??((_=m.master_subjects)==null?void 0:_.id))===Number(h)}),b=h=>Number.isInteger(h)?String(h):Number(h).toFixed(1).replace(/\.0$/,""),u=h=>{const m=Number(h.credit),_=Number.isFinite(m)&&m>0;return{roomCount:k(h.id).length,credit:_?b(m):"—",periodsPerWeek:_?b(m*2):"—",periodsPerTerm:_?b(m*40):"—"}},S=h=>String(h.dept??h.subject_group??"").trim()||"รายวิชาอื่น ๆ",A=[...s.reduce((h,m)=>{const _=S(m);return h.has(_)||h.set(_,[]),h.get(_).push(m),h},new Map).entries()].sort(([h],[m])=>h.localeCompare(m,"th",{numeric:!0})),L=(h,m,_,v)=>`<div class="rounded-xl border ${v} px-3 py-2.5 min-w-0">
      <div class="flex items-center gap-2"><span class="text-base">${h}</span><strong class="text-lg leading-none text-gray-800">${m}</strong></div>
      <p class="mt-1 text-[10px] font-semibold text-gray-500">${_}</p>
    </div>`,T=h=>{const m=u(h);return`<article class="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden">
        <div class="relative p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 pr-16 sm:pr-20">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">${l(h.subject_code??"—")}</span>
                ${h.dept?`<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">${l(h.dept)}</span>`:""}
              </div>
              <h3 class="mt-2 text-base sm:text-lg font-extrabold text-gray-900 leading-snug">${l(h.subject_name)}</h3>
              <p class="mt-1 text-xs text-gray-400">ระดับชั้น ${l(h.grade_level??"ไม่ระบุ")}</p>
            </div>
          </div>
          <div class="pointer-events-none absolute right-3 bottom-4 w-20 h-20 flex items-end justify-end text-6xl opacity-80 drop-shadow-md" aria-label="ไอคอนประจำวิชา">${Rs(h,d,"max-w-full max-h-full object-contain")}</div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${L("🏫",m.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${L("🎓",m.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${L("🗓️",m.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${L("⏱️",m.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
          </div>

          <div class="mt-4 flex justify-end">
            <button onclick="window._openRegisterClass(${h.id})"
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
            <button class="course-workspace-btn col-span-2 min-h-[44px] text-xs text-white font-bold border border-blue-700 bg-blue-700 rounded-xl hover:bg-blue-800 shadow-sm" data-sid="${h.id}">📘 กำหนดการสอนและแผนหน้าเดียว</button>
            <button class="ccm-open-btn min-h-[40px] text-xs text-indigo-700 font-semibold border border-indigo-100 bg-indigo-50/50 rounded-xl hover:bg-indigo-50" data-sid="${h.id}" data-sname="${l(h.subject_name)}">⚙️ คอลัมน์คะแนน</button>
            <button onclick="window._openCourseDocPage2(${h.id})" class="min-h-[40px] text-xs text-emerald-700 font-semibold border border-emerald-100 bg-emerald-50/50 rounded-xl hover:bg-emerald-50">📝 คำอธิบายรายวิชา</button>
            <button class="lesson-plan-btn min-h-[40px] text-xs text-sky-700 font-semibold border border-sky-100 bg-sky-50/50 rounded-xl hover:bg-sky-50" data-sid="${h.id}">📋 ใบขออนุญาตใช้แผน</button>
            <button class="pp5-course-btn min-h-[40px] text-xs text-violet-700 font-semibold border border-violet-100 bg-violet-50/50 rounded-xl hover:bg-violet-50" data-sid="${h.id}">💾 เอกสาร ปพ.5</button>
          </div>
          <div class="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-end gap-2 flex-wrap">
            <button onclick="window._copyCourse(${h.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-purple-700 hover:bg-purple-50">📋 ทำสำเนา</button>
            <button onclick="window._editCourse(${h.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-gray-600 hover:bg-gray-100">✏️ แก้ไข</button>
            <button class="cd2-del-course-btn min-h-[36px] px-3 rounded-lg border border-red-100 bg-white text-xs font-semibold text-red-500 hover:bg-red-50" data-id="${h.id}" data-name="${l(h.subject_name)}">🗑️ ลบ</button>
          </div>
        </details>
      </article>`};Me(`<div class="animate-fade">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <p class="text-sm font-bold text-gray-700">รายวิชาที่เปิดสอน ${s.length} คอร์ส · ${t.length} ห้องเรียน</p>
          <p class="text-xs text-gray-400 mt-1">จำนวนคาบคำนวณตามโครงสร้างหลักสูตร 1 หน่วยกิต = 2 คาบต่อสัปดาห์ = 40 คาบต่อภาคเรียน</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 flex-shrink-0">
          <button onclick="window._openScheduleCourseReview()"
            class="min-h-[44px] px-4 py-2.5 text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-sm font-bold rounded-xl flex items-center justify-center gap-2">
            <span>📚</span> ตรวจสอบคอร์สจากตารางสอน
          </button>
          <button onclick="window._openCourseForm()"
            class="btn-primary min-h-[44px] px-5 py-2.5 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2">
            <span>＋</span> เปิดคอร์สใหม่
          </button>
        </div>
      </div>
      ${s.length?`
      <div class="space-y-7">
        ${A.map(([h,m])=>`<section>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">🏷️</div>
            <div><h2 class="font-extrabold text-gray-800">กลุ่มสาระ ${l(h)}</h2><p class="text-[11px] text-gray-400">${m.length} คอร์ส · ${m.reduce((_,v)=>_+k(v.id).length,0)} ห้องเรียน</p></div>
            <div class="h-px bg-gray-200 flex-1"></div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${m.map(T).join("")}</div>
        </section>`).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(h=>{h.addEventListener("click",()=>{window._deleteCourse(Number(h.dataset.id),h.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(h=>{h.addEventListener("click",()=>{Us(parseInt(h.dataset.sid),h.dataset.sname,t)})}),document.querySelectorAll(".course-workspace-btn").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.dataset.sid,10),_=s.find(v=>v.id===m);_&&ps(e,_,t)})}),document.querySelectorAll(".lesson-plan-btn").forEach(h=>{h.addEventListener("click",async()=>{const m=parseInt(h.dataset.sid),_=s.find(X=>X.id===m);if(!_)return;const v=t.filter(X=>{var P;return X.course_id===m||((P=X.master_subjects)==null?void 0:P.id)===m}),{getSystemConfig:y,getDepartments:O}=await Ne(async()=>{const{getSystemConfig:X,getDepartments:P}=await import("./api-CQwFwlFA.js");return{getSystemConfig:X,getDepartments:P}},__vite__mapDeps([0,1,2,3,4])),[C,M]=await Promise.all([y().catch(()=>({})),O().catch(()=>[])]);Co(_,v,e,C,M)})}),document.querySelectorAll(".pp5-course-btn").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.dataset.sid),_=t.filter(v=>{var y;return v.course_id===m||((y=v.master_subjects)==null?void 0:y.id)===m});_.length===1?openPP5Doc(_[0].id):Gs(_)})})}catch{Y("โหลดข้อมูลไม่สำเร็จ","error")}}function Zs({subject:e,teacher:s,syllabusItems:t,roomNames:d=[],semester:f,academicYear:k,semesterStart:b,semesterEnd:u,showNotesContent:S=!0,departmentHead:A,signatureTeachers:L=[]}){var ee,de;const T=[...t??[]].sort((z,pe)=>Number(z.week_start)-Number(pe.week_start)),h=S===!0,m=l,_=z=>{const pe=String(z??"").replace(/\s+/g," ").trim();if(!pe)return"";const K=typeof Intl.Segmenter=="function"?[...new Intl.Segmenter("th",{granularity:"grapheme"}).segment(pe)].map(he=>he.segment):Array.from(pe),q=60;if(K.length<=q)return pe;const U=K.slice(0,q).join(""),ue=U.lastIndexOf(" ");return`${(ue>=q*.65?U.slice(0,ue):U).trimEnd()}…`},v=z=>z?new Date(`${z}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],y=(z,pe)=>{const K=v(z),q=v(pe);if(!K.length||!q.length)return"—";const[U,ue,he]=K,[_e,$e,Ce]=q;return he===Ce&&ue===$e?`${U} - ${_e} ${$e} ${Ce}`:he===Ce?`${U} ${ue} - ${_e} ${$e} ${Ce}`:`${U} ${ue} ${he} - ${_e} ${$e} ${Ce}`},O=z=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(String(b??"")))return null;const[pe,K,q]=b.split("-").map(Number),U=new Date(pe,K-1,q+(z-1)*7),ue=new Date(pe,K-1,q+z*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(u??""))&&ue>new Date(`${u}T00:00:00`)&&ue.setTime(new Date(`${u}T00:00:00`).getTime());const he=_e=>`${_e.getFullYear()}-${String(_e.getMonth()+1).padStart(2,"0")}-${String(_e.getDate()).padStart(2,"0")}`;return{start:he(U),end:he(ue)}},C=(z,pe=Number(z.week_start))=>{const K=O(pe),q=Number(z.week_start)===pe&&Number(z.week_end??z.week_start)===pe,U=(q?z.date_start:null)||(K==null?void 0:K.start),ue=(q?z.date_end:null)||(K==null?void 0:K.end);return y(U,ue)},M=Math.min(30,Math.max(0,...T.map(z=>Number(z.week_end)||Number(z.week_start)||0))),X=Array.from({length:M},(z,pe)=>{var _e;const K=pe+1,q=T.find($e=>K>=Number($e.week_start)&&K<=Number($e.week_end)),U=(_e=q==null?void 0:q.source_json)==null?void 0:_e.week_type,ue=O(K),he=q?C(q,K):y(ue==null?void 0:ue.start,ue==null?void 0:ue.end);return`<tr><td class="week">${K}</td><td class="date-cell">${m(he)}</td><td>${m((q==null?void 0:q.topic)||(U==="midterm_exam"?"สอบกลางภาค":U==="final_exam"?"สอบปลายภาค":U==="break"?"หยุด/ไม่มีการเรียน":""))}</td><td>${m((q==null?void 0:q.teaching_methods)||(U!=null&&U.includes("exam")?"ทดสอบ/ประเมินผล":""))}</td><td class="note-cell">${h?m(_(q==null?void 0:q.notes)):""}</td></tr>`}).join(""),P=e??{},E=P.periods_per_week??(Number(P.credit)>0?Number(P.credit)*2:null),H=[...new Set(d.map(z=>String(z??"").trim()).filter(Boolean))].join(" , "),te=L.filter(z=>z==null?void 0:z.signature_url),le=(s==null?void 0:s.signature_url)??((ee=te.find(z=>Number(z.id)===Number(s==null?void 0:s.id)))==null?void 0:ee.signature_url)??"",oe=[...A!=null&&A.head_sign_url?[{id:`dept-${A.id}`,name:A.head_name||"หัวหน้ากลุ่มสาระ",signature_url:A.head_sign_url}]:[],...te].filter((z,pe,K)=>K.findIndex(q=>q.signature_url===z.signature_url)===pe),ye=`<option value="">เว้นช่องไว้เซ็นเอง</option>${le?`<option value="${m(le)}" data-name="${m((s==null?void 0:s.full_name)??"")}" selected>ใช้ลายเซ็นที่บันทึกไว้</option>`:""}`,Q=`<option value="">เว้นช่องไว้เซ็นเอง</option>${oe.map(z=>`<option value="${m(z.signature_url)}" data-name="${m(z.name??z.full_name??"")}" ${z.signature_url===(A==null?void 0:A.head_sign_url)?"selected":""}>${m(z.name??z.full_name??"ผู้ลงนาม")}</option>`).join("")}`,xe=window.open("","_blank");if(!xe){Y("เบราว์เซอร์บล็อกหน้าต่างตัวอย่าง กรุณาอนุญาต Pop-up","warning");return}const re=5,fe=new URL("pp5-form-logo.png",window.location.href).href;xe.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>กำหนดการสอน ${m(P.subject_name)}</title><style>
    @page{size:A4;margin:13mm}*{box-sizing:border-box}body{font-family:"Sarabun",Tahoma,sans-serif;color:#111;margin:0;font-size:11pt;line-height:1.5;background:#eef1f5}.toolbar{position:sticky;top:0;z-index:2;padding:10px;background:#f3f4f6;text-align:center}.toolbar button{border:0;border-radius:8px;background:#1d4ed8;color:white;padding:10px 20px;font-weight:bold;font-size:14px;cursor:pointer}.toolbar label{display:inline-flex;align-items:center;gap:6px;margin:4px;padding:7px;border:1px solid #d1d5db;border-radius:8px;background:white;font-size:12px}.toolbar select{max-width:230px;padding:6px;border:1px solid #d1d5db;border-radius:6px}.page{width:184mm;height:271mm;min-height:271mm;margin:0 auto 8mm;padding:8mm 5mm;background:white;box-shadow:0 1px 8px rgba(15,23,42,.12)}.cover{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;padding-top:12mm;break-after:page;page-break-after:always}.cover-logo{width:32mm;height:32mm;object-fit:contain;filter:grayscale(1);mix-blend-mode:multiply;margin-bottom:9mm}.cover h1{font-size:25pt;line-height:1.2;color:#167a4a;margin:0 0 15mm}.cover .cover-info{align-self:center;width:min(100%,145mm);text-align:left}.cover .course{font-size:16pt;font-weight:bold;text-align:center;margin:0 0 8mm}.cover p{font-size:14pt;margin:2.5mm 0}.cover .signatures{width:100%;margin-top:auto;padding-top:16mm;text-align:center;font-size:13pt}.cover .signatures p{margin:10mm 0;text-align:center}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:middle}.schedule{break-before:page;page-break-before:always}.table{width:100%;table-layout:fixed;border-collapse:collapse;margin-top:4mm;font-size:9.5pt}.table col.col-week{width:10mm}.table col.col-date{width:31mm}.table col.col-topic{width:53mm}.table col.col-methods{width:45mm}.table col.col-notes{width:35mm}.table th,.table td{border:1px solid #555;padding:2mm 2.2mm;vertical-align:top;overflow-wrap:anywhere}.table th{background:#e8eefb;text-align:center}.table .week{text-align:center;white-space:nowrap}.table .date-cell{text-align:center;vertical-align:middle;white-space:nowrap;font-size:9pt}.table .note-cell{font-size:9pt;line-height:1.35}.table tr{break-inside:avoid;page-break-inside:avoid}.table thead{display:table-header-group}.table .doc-title th{border:0;background:white;font-size:18pt;padding:0;text-align:center}.table .doc-meta th{border:0;background:white;font-size:10pt;font-weight:normal;padding:0;text-align:center}@media print{body{background:white}.toolbar{display:none}.page{margin:0;width:auto;height:auto;min-height:0;padding:0;box-shadow:none}.cover{height:271mm;min-height:271mm;padding:12mm 5mm;break-after:page;page-break-after:always}.schedule{break-before:page;page-break-before:always}}
  </style></head><body><div class="toolbar"><label>ลายเซ็นครู<select id="cover-teacher-sign">${ye}</select></label><label>หัวหน้ากลุ่มสาระ<select id="cover-dept-sign">${Q}</select></label><button onclick="window.print()">🖨️ พิมพ์ / บันทึก PDF</button></div><section class="page cover"><img class="cover-logo" src="${m(fe)}" alt="ตราโรงเรียน"><h1>กำหนดการสอน</h1><div class="cover-info"><p class="course">รายวิชา ${m(P.subject_name||"................................")} (${m(P.subject_code||".............")})</p><p>ครูผู้สอน ${m((s==null?void 0:s.full_name)||"................................")}</p><p>ชั้น ${m(P.grade_level||"....................")}</p><p>ห้องเรียน ${m(H||"................................")}</p><p>จำนวน ${m(E||"........")} คาบ/สัปดาห์</p><p>ภาคเรียนที่ ${m(f||"....")} ปีการศึกษา ${m(k||"........")}</p></div><div class="signatures"><p>ลงชื่อ <img id="cover-teacher-sign-img" class="sign-img" src="${m(le)}" alt="" style="${le?"":"display:none"}"> ครูผู้สอน</p><p>ลงชื่อ <img id="cover-dept-sign-img" class="sign-img" src="${m((A==null?void 0:A.head_sign_url)??"")}" alt="" style="${A!=null&&A.head_sign_url?"":"display:none"}"> หัวหน้ากลุ่มสาระการเรียนรู้</p><p>ลงชื่อ......................................................................ผู้อำนวยการโรงเรียน</p></div></section><section class="page schedule"><table class="table"><colgroup><col class="col-week"><col class="col-date"><col class="col-topic"><col class="col-methods"><col class="col-notes"></colgroup><thead><tr class="doc-title"><th colspan="${re}">กำหนดการสอน</th></tr><tr class="doc-meta"><th colspan="${re}">รายวิชา ${m(P.subject_name||"—")} รหัส ${m(P.subject_code||"—")} ${m(P.grade_level||"")} · คุณครู ${m((s==null?void 0:s.full_name)||"—")}</th></tr><tr class="doc-meta"><th colspan="${re}">ภาคเรียนที่ ${m(f||"—")} ปีการศึกษา ${m(k||"—")}</th></tr><tr><th>สัปดาห์ที่</th><th>วัน/เดือน/ปี</th><th>เนื้อหา</th><th>รูปแบบการสอน</th><th>หมายเหตุ</th></tr></thead><tbody>${X}</tbody></table></section><script>for(const role of ['teacher','dept']){const select=document.querySelector('#cover-'+role+'-sign'),img=document.querySelector('#cover-'+role+'-sign-img'),key='pp5-course-sign-'+role+'-${Number(P.id)||0}';const previous=localStorage.getItem(key);if(previous!==null&&[...select.options].some(option=>option.value===previous))select.value=previous;const update=()=>{img.src=select.value;img.style.display=select.value?'':'none';localStorage.setItem(key,select.value)};select.addEventListener('change',update);update()}<\/script></body></html>`),xe.document.close();const c=[...xe.document.querySelectorAll(".cover .cover-info p")],F=String(H||P.grade_level||"").trim()||"....................";c[2]&&(c[2].textContent=`ชั้น ${F}`),(de=c[3])==null||de.remove();const Z=xe.document.querySelector(".schedule .doc-meta th");Z&&(Z.textContent=`รายวิชา ${P.subject_name||"—"} รหัส ${P.subject_code||"—"} ${F} · คุณครู ${(s==null?void 0:s.full_name)||"—"}`);const ie=["ครูผู้สอน","หัวหน้ากลุ่มสาระการเรียนรู้","ผู้อำนวยการโรงเรียน"];[...xe.document.querySelectorAll(".cover .signatures p")].forEach((z,pe)=>{const K=z.querySelector("img");z.className="signature-row",z.replaceChildren();const q=xe.document.createElement("span");q.textContent="ลงชื่อ";const U=xe.document.createElement("span");U.className="signature-line",K&&U.append(K);const ue=xe.document.createElement("span");ue.textContent=ie[pe],z.append(q,U,ue)});const V=xe.document.createElement("style");V.textContent=".cover .signatures{width:100%;margin-top:auto;padding-top:12mm;text-align:center;font-size:13pt}.cover .signature-row{display:flex;align-items:flex-end;justify-content:center;gap:2mm;margin:8mm 0;white-space:nowrap}.cover .signature-line{position:relative;display:inline-flex;width:92mm;height:15mm;align-items:flex-end;justify-content:center;border-bottom:1px dotted #111}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:bottom}",xe.document.head.append(V)}async function ps(e,s,t){var A,L,T,h,m,_,v,y,O,C;(A=document.getElementById("course-workspace-modal"))==null||A.remove();const d=Number(s.id),f=t.filter(M=>{var X;return Number(M.course_id??((X=M.master_subjects)==null?void 0:X.id))===d}),k={class_name:"ทุกห้องในคอร์ส",course_id:d,master_subjects:s},b=document.createElement("div");b.id="course-workspace-modal",b.className="fixed inset-0 z-[95] bg-gray-50 flex items-stretch justify-stretch",b.innerHTML=`<div class="bg-gray-50 w-full h-full overflow-hidden flex flex-col">
    <header class="flex-shrink-0 px-4 sm:px-6 py-4 border-b bg-white flex items-start justify-between gap-3">
      <div class="min-w-0">
        <span class="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold">📘 ออกแบบการสอนของคอร์ส</span>
        <h2 class="mt-2 text-lg sm:text-xl font-extrabold text-gray-900 truncate">${l(s.subject_name)}</h2>
        <p class="text-xs text-gray-500 mt-0.5"><span class="font-mono text-blue-600">${l(s.subject_code??"—")}</span> · ${l(s.grade_level??"—")} · ${f.length} ห้องเรียน</p>
      </div>
      <button data-close class="w-10 h-10 flex-shrink-0 rounded-xl border bg-white text-gray-400 text-xl hover:text-gray-700">✕</button>
    </header>
    <div id="course-workspace-body" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6">
      <div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลคอร์ส...</div>
    </div>
  </div>`,document.body.appendChild(b);const u=()=>b.remove();b.querySelector("[data-close]").addEventListener("click",u),b.addEventListener("click",M=>{M.target===b&&u()});const S=b.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:M,canUseSmartClassroomForClass:X},{openLessonPlanAIWorkspace:P,openLessonPlanDocument:E,openLessonPlansPrint:H},{openLessonPlanArchiveCenter:te}]=await Promise.all([Ne(()=>import("./teacher-views-smart-classroom-DRuZFVOc.js"),__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])),Ne(()=>import("./lesson-plan-ai-workspace-DxaTZ5Zg.js"),__vite__mapDeps([27,0,1,2,3,4,6,24,28])),Ne(()=>import("./lesson-plan-archive-YVJH6is5.js"),__vite__mapDeps([29,6,0,1,2,3,4,24]))]),[le,oe,ye,Q]=await Promise.all([_s(d).catch(()=>[]),$s(d).catch(()=>[]),M(e),De().catch(()=>({}))]),xe=f.filter(i=>X(ye.unlocked,e,i.id)),re=ye.unlocked||xe.length>0,fe=()=>ps(e,s,t),[c,F]=await Promise.all([ks().catch(()=>[]),et().catch(()=>[])]),Z=((L=f[0])==null?void 0:L.master_subjects)??{},ie=String(Z.dept??s.dept??(e==null?void 0:e.dept)??"").trim().toLowerCase(),se=String(Z.learning_area??"").trim(),V=String(Z.subject_group??"").toUpperCase(),ee=V==="ACDM"?"สามัญ":V==="ACDMVOC"?"สามัญปวช":["AGM","AGMVOC"].includes(V)?"ศาสนา":"",de=F.filter(i=>String(i.dept_code??"").trim().toLowerCase()===ie||String(i.dept_name??"").trim().toLowerCase()===ie),z=ee?de.filter(i=>i.category===ee):de,pe=se&&z.find(i=>String(i.head_name??"").trim()===se)||z[0]||se&&F.find(i=>String(i.head_name??"").trim()===se)||null,K=c.find(i=>String(i.full_name??"").trim()===se),q=pe?{...pe,head_name:se||(pe.head_name==="ทีมบริหาร"?"":pe.head_name),head_sign_url:(K==null?void 0:K.signature_url)||(se&&pe.head_name!==se?null:pe.head_sign_url)}:se?{head_name:se,head_sign_url:(K==null?void 0:K.signature_url)??null}:null,U=f.map(i=>{var J;const x=String(i.class_name??`ห้อง ${i.id}`).trim(),g=String(((J=i.master_subjects)==null?void 0:J.grade_level)??s.grade_level??"").trim(),w=g&&!Ee(x).startsWith(Ee(g))?`${g} ${x}`:x;return{id:i.id,classId:i.id,label:w,roomNames:[w]}}).filter(i=>i.label),ue=[...new Set(U.map(i=>i.label))],he=/^\d{4}-\d{2}-\d{2}$/.test(String(Q.semester_start??""))?Q.semester_start:null,_e=Number(s.academic_year??Q.academicYear??Q.academic_year),$e=Number(s.semester??Q.semester),[Ce,Oe]=Number.isInteger(_e)&&[1,2].includes($e)?await Promise.all([Et(e.id,_e,$e).catch(()=>[]),ss(e.id).catch(()=>[])]):[[],[]],Re=i=>{const x=new Set(Oe.filter(g=>Number(g.class_id)===Number(i)).map(g=>Number(g.teacher_schedule_id)));return[...new Set(Ce.filter(g=>x.has(Number(g.id))).map(g=>Number(g.day_of_week)).map(g=>g===0?7:g).filter(g=>Number.isInteger(g)&&g>=1&&g<=7&&g!==6))]},a=[...new Set(f.flatMap(i=>Re(i.id)))],I=i=>{if(!he)return null;const[x,g,w]=he.split("-").map(Number),J=new Date(x,g-1,w+(i-1)*7),ae=new Date(x,g-1,w+i*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(Q.semester_end??""))&&ae>new Date(`${Q.semester_end}T00:00:00`)&&ae.setTime(new Date(`${Q.semester_end}T00:00:00`).getTime());const be=ge=>`${ge.getFullYear()}-${String(ge.getMonth()+1).padStart(2,"0")}-${String(ge.getDate()).padStart(2,"0")}`;return{start:be(J),end:be(ae)}},N=i=>i?new Date(`${i}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],j=i=>{const x=N(i);return x.length?`${x[0]} ${x[1]} ${x[2]}`:"—"},B=(i,x)=>{const g=N(i),w=N(x);return!g.length||!w.length?"—":g[1]===w[1]&&g[2]===w[2]?`${g[0]} - ${w[0]} ${w[1]} ${w[2]}`:g[2]===w[2]?`${g[0]} ${g[1]} - ${w[0]} ${w[1]} ${w[2]}`:`${g[0]} ${g[1]} ${g[2]} - ${w[0]} ${w[1]} ${w[2]}`},R={teaching:"เรียน",midterm_exam:"สอบกลางภาค",final_exam:"สอบปลายภาค",break:"หยุด/ไม่มีการเรียน"};let G=null,D=!0;try{D=localStorage.getItem(`pp5-schedule-show-notes-${d}`)!=="false"}catch{}const ce=()=>le.length?le.map(i=>{var qe,Je;const x=((qe=i.source_json)==null?void 0:qe.week_type)??"teaching",g=i.unit_title??((Je=i.source_json)==null?void 0:Je.unit_title),w=I(i.week_start),J=I(i.week_end??i.week_start),ae=i.date_start||(w==null?void 0:w.start)||"",be=i.date_end||(J==null?void 0:J.end)||"";if(String(i.id)===String(G)){const Te=(ke,Be,He="text",xs="")=>`<input data-schedule-field="${ke}" type="${He}" value="${l(Be??"")}" class="w-full min-w-24 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs ${xs}" />`,Fe=(ke,Be)=>`<textarea data-schedule-field="${ke}" rows="2" class="w-full min-w-32 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${l(Be??"")}</textarea>`;return`<tr data-schedule-row="${l(i.id)}" class="border-t border-blue-100 align-top bg-blue-50/50">
          <td class="px-2 py-2 text-xs"><div class="flex items-center gap-1">${Te("week_start",i.week_start,"number","max-w-20")}<span>–</span>${Te("week_end",i.week_end??i.week_start,"number","max-w-20")}</div><select data-schedule-field="week_type" class="mt-2 w-full rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${Object.entries(R).map(([ke,Be])=>`<option value="${ke}" ${ke===x?"selected":""}>${Be}</option>`).join("")}</select></td>
          <td class="w-[138px] min-w-[138px] px-2 py-2 text-center"><div class="space-y-1">${Te("date_start",ae,"date")}${Te("date_end",be,"date")}</div></td>
          <td class="px-2 py-2 space-y-1">${Te("topic",i.topic,"text","min-w-48")}<label class="block text-[10px] text-gray-500">หน่วยการเรียนรู้${Te("unit_title",g,"text")}</label></td>
          <td class="px-2 py-2">${Fe("teaching_methods",i.teaching_methods)}</td>
          <td class="px-2 py-2">${Fe("notes",i.notes)}</td>
          <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="save" data-schedule-id="${l(i.id)}" class="rounded-lg bg-emerald-600 px-2 py-1.5 text-[10px] font-bold text-white">บันทึก</button><button type="button" data-schedule-action="cancel" class="rounded-lg border bg-white px-2 py-1.5 text-[10px] font-bold text-gray-600">ยกเลิก</button></div></td>
        </tr>`}const ge=`สัปดาห์ ${i.week_start}${i.week_end!==i.week_start?`–${i.week_end}`:""}`,ve=B(ae,be),Ie=R[x]??"เรียน",Ae=x==="teaching"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-800";return`<tr class="border-t border-blue-100 align-top">
        <td class="px-3 py-3 text-xs font-bold whitespace-nowrap">${l(ge)}<span class="block mt-1 px-2 py-1 rounded-lg ${Ae} text-[10px] w-fit">${l(Ie)}</span></td>
        <td class="w-[138px] min-w-[138px] px-3 py-3 text-center text-xs whitespace-nowrap">${l(ve)}</td>
        <td class="px-3 py-3 text-xs min-w-48"><p class="font-bold text-gray-800">${l(i.topic)}</p>${g?`<p class="text-[11px] text-blue-700 mt-1">${l(g)}</p>`:""}</td>
        <td class="px-3 py-3 text-xs min-w-36 whitespace-pre-wrap">${l(i.teaching_methods??"—")}</td>
        <td class="px-3 py-3 text-xs min-w-28 whitespace-pre-wrap">${l(i.notes??"—")}</td>
        <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="edit" data-schedule-id="${l(i.id)}" class="rounded-lg border border-blue-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-blue-700">แก้ไข</button><button type="button" data-schedule-action="delete" data-schedule-id="${l(i.id)}" class="rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-red-600">ลบ</button></div></td>
      </tr>`}).join(""):"",we=xe.map(i=>`<option value="${i.id}">${l(i.class_name??`ห้อง ${i.id}`)}</option>`).join(""),Se=i=>{const x=Number(i),g=new Map;return le.forEach(w=>{var Ie;const J=(Ie=w.source_json)==null?void 0:Ie.class_id,ae=Number(J),be=J!=null&&J!==""&&Number.isInteger(ae)&&ae>0;if(be&&ae!==x)return;const ge=`${w.week_start}-${w.week_end??w.week_start}`,ve=g.get(ge);(!ve||be&&!ve.isScoped)&&g.set(ge,{item:w,isScoped:be})}),[...g.values()].map(w=>w.item)};S.innerHTML=`<nav class="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-4" aria-label="ส่วนออกแบบการสอน">
      <button type="button" data-course-tab="schedule" class="course-tab rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white">📘 กำหนดการสอน</button>
      <button type="button" data-course-tab="plans" class="course-tab rounded-xl border border-violet-200 bg-white px-4 py-2.5 text-sm font-bold text-violet-800">📝 แผนการจัดการเรียนรู้หน้าเดียว</button>
    </nav>
    <section data-course-panel="schedule" class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-blue-950">📘 กำหนดการสอนทั้งภาคเรียน</h3><p class="text-xs text-blue-700/70 mt-1">ภาพรวมรายสัปดาห์ของรายวิชา ใช้ร่วมกับ Smart Classroom ในห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2"><label class="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 text-xs text-blue-800"><input id="cw-schedule-show-notes" type="checkbox" class="h-4 w-4 accent-blue-700" ${D?"checked":""}> แสดงเนื้อหาหมายเหตุในเอกสาร</label><button id="cw-schedule-preview" class="min-h-[44px] px-4 rounded-xl border border-blue-200 bg-white text-blue-800 text-xs font-bold">👁️ ตัวอย่างเอกสารทั้งหมด</button><button id="cw-ai-schedule" class="min-h-[44px] px-4 rounded-xl ${re?"bg-blue-700 hover:bg-blue-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${re?"":"disabled"}>🤖 สร้างด้วย AI</button></div>
          </div>
          ${re?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${he?`<p class="mt-3 text-[11px] text-blue-700">ช่วงวันที่คำนวณจากวันเปิดภาคเรียนที่ตั้งค่าไว้: ${j(he)} · สัปดาห์ที่ 1 เริ่มวันนี้</p>`:'<p class="mt-3 text-[11px] text-amber-700">ยังไม่ได้ตั้งค่าวันเปิดภาคเรียน ระบบจะแสดงวันที่จากกำหนดการเดิมจนกว่าจะตั้งค่าวันเริ่มภาคเรียน</p>'}
          ${le.length?`<div class="mt-4 max-h-[68vh] overflow-auto rounded-xl border border-blue-100 bg-white"><table class="w-full min-w-[780px] table-fixed text-left"><colgroup><col><col class="w-[138px]"><col><col><col><col class="w-[76px]"></colgroup><thead class="sticky top-0 bg-blue-50 text-[10px] font-extrabold text-blue-900"><tr><th class="px-3 py-2">สัปดาห์</th><th class="w-[138px] px-3 py-2 text-center">วัน/เดือน</th><th class="px-3 py-2">เนื้อหา</th><th class="px-3 py-2">รูปแบบการสอน</th><th class="px-3 py-2">หมายเหตุ</th><th class="w-[76px] px-2 py-2">จัดการ</th></tr></thead><tbody id="cw-schedule-rows">${ce()}</tbody></table></div>`:'<div class="mt-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>'}
    </section>

    <section data-course-panel="plans" class="hidden rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-violet-950">📝 แผนการจัดการเรียนรู้หน้าเดียว</h3><p class="text-xs text-violet-700/70 mt-1">แผนรายครั้งที่อ้างอิงหัวข้อจากกำหนดการสอน ส่วนบันทึกหลังสอนและลายเซ็นแยกตามห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2 justify-end"><button id="cw-plan-archive" class="min-h-[44px] px-4 rounded-xl ${oe.length?"border border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50":"border border-gray-200 bg-gray-100 text-gray-400"} text-xs font-bold flex-shrink-0" ${oe.length?"":"disabled"}>📦 ส่ง/จัดเก็บรายสัปดาห์</button><button id="cw-plans-print-all" class="min-h-[44px] px-4 rounded-xl ${oe.length?"border border-violet-200 bg-white text-violet-800 hover:bg-violet-50":"border border-gray-200 bg-gray-100 text-gray-400"} text-xs font-bold flex-shrink-0" ${oe.length?"":"disabled"}>🖨️ พิมพ์/บันทึกแผนทั้งภาคเรียน</button><button id="cw-ai-plan" class="min-h-[44px] px-4 rounded-xl ${re?"bg-violet-700 hover:bg-violet-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${re?"":"disabled"}>✨ สร้างแผนด้วย AI</button></div>
          </div>
          ${re?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${oe.length?`<div class="mt-4 space-y-2">${oe.map(i=>`<div class="flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-3 py-3"><button class="cw-plan-row min-w-0 flex-1 text-left hover:text-violet-800 transition" data-plan-id="${i.id}"><p class="text-sm font-bold text-gray-800">${l(i.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${i.week_start}${i.week_end!==i.week_start?`–${i.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button><button type="button" class="cw-plan-delete shrink-0 rounded-lg border border-red-200 bg-white px-3 py-2 text-[10px] font-bold text-red-600" data-plan-id="${i.id}">ลบ</button></div>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
    </section>
    ${oe.length&&xe.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้อง Smart Classroom</h3><p class="text-xs text-gray-400 mt-1">แผนใช้ร่วมกันในรายวิชา แต่เปิดบันทึกหลังสอนเฉพาะห้องที่มีสิทธิ์</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${we}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`;const W=i=>{S.querySelectorAll("[data-course-panel]").forEach(x=>x.classList.toggle("hidden",x.dataset.coursePanel!==i)),S.querySelectorAll("[data-course-tab]").forEach(x=>{const g=x.dataset.courseTab===i;x.className=`course-tab rounded-xl px-4 py-2.5 text-sm font-bold ${g?i==="schedule"?"bg-blue-700 text-white":"bg-violet-700 text-white":"border border-gray-200 bg-white text-gray-600"}`})};S.querySelectorAll("[data-course-tab]").forEach(i=>i.addEventListener("click",()=>W(i.dataset.courseTab)));const n=S.querySelector("#cw-schedule-rows");n==null||n.addEventListener("click",async i=>{const x=i.target.closest("[data-schedule-action]");if(!x)return;const g=x.dataset.scheduleId,w=le.find(ke=>String(ke.id)===String(g));if(!w)return;if(x.dataset.scheduleAction==="delete"){if(!confirm(`ลบกำหนดการสอนสัปดาห์ ${w.week_start}${w.week_end!==w.week_start?`–${w.week_end}`:""} เรื่อง "${w.topic}"?`))return;x.disabled=!0;try{await Ss(w.id),Y("ลบกำหนดการสอนแล้ว","success"),fe()}catch(ke){x.disabled=!1,Y(`ลบไม่สำเร็จ: ${je(ke)}`,"error")}return}if(x.dataset.scheduleAction==="edit"){G=g,n.innerHTML=ce();return}if(x.dataset.scheduleAction==="cancel"){G=null,n.innerHTML=ce();return}if(x.dataset.scheduleAction!=="save")return;const J=x.closest("[data-schedule-row]"),ae=ke=>{var Be;return((Be=J.querySelector(`[data-schedule-field="${ke}"]`))==null?void 0:Be.value)??""},be=Number(ae("week_start")),ge=Number(ae("week_end")),ve=ae("week_type"),Ie=ae("date_start")||null,Ae=ae("date_end")||null,qe=ae("topic").trim();if(!Number.isInteger(be)||be<1||!Number.isInteger(ge)||ge<be){Y("ช่วงสัปดาห์ไม่ถูกต้อง","warning");return}if(!qe){Y("กรุณาระบุหัวข้อที่จะสอน","warning");return}if(!Object.hasOwn(R,ve)){Y("เลือกประเภทสัปดาห์ให้ถูกต้อง","warning");return}if(Ie&&Ae&&Ae<Ie){Y("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");return}if(le.some(ke=>{if(String(ke.id)===String(w.id))return!1;const Be=Number(ke.week_start),He=Number(ke.week_end??ke.week_start);return be<=He&&ge>=Be})){Y("ช่วงสัปดาห์นี้ซ้ำกับรายการอื่น กรุณาปรับเลขสัปดาห์","warning");return}const Te=ae("unit_title").trim(),Fe={course_id:d,week_start:be,week_end:ge,date_start:Ie,date_end:Ae,topic:qe,teaching_methods:ae("teaching_methods").trim()||null,notes:ae("notes").trim()||null,source_json:{...w.source_json??{},week_start:be,week_end:ge,date_start:Ie,date_end:Ae,week_type:ve,unit_title:Te}};x.disabled=!0,x.textContent="กำลังบันทึก…";try{await Es(w.id,Fe),Object.assign(w,Fe,{unit_title:Te||null}),G=null,n.innerHTML=ce(),Y("บันทึกแถวกำหนดการแล้ว","success")}catch(ke){x.disabled=!1,x.textContent="บันทึก",Y(`บันทึกไม่สำเร็จ: ${je(ke)}`,"error")}}),(T=S.querySelector("#cw-schedule-show-notes"))==null||T.addEventListener("change",i=>{D=i.currentTarget.checked;try{localStorage.setItem(`pp5-schedule-show-notes-${d}`,String(D))}catch{}}),(h=S.querySelector("#cw-ai-schedule"))==null||h.addEventListener("click",()=>{if(!U.length){Y("รายวิชานี้ยังไม่มีห้องเรียนสำหรับสร้างกำหนดการสอน","warning");return}const i=document.createElement("div");i.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับสร้างกำหนดการสอน</h3><p class="mt-1 text-xs text-gray-500">กำหนดการจะถูกบันทึกแยกตามห้องที่เลือก เพื่อไม่ให้หัวข้อของแต่ละชั้นปะปนกัน</p><select data-schedule-ai-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">ทุกห้องเหมือนกัน</option>${U.map((g,w)=>`<option value="${w}">${l(g.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-schedule-ai-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-schedule-ai-room-open class="min-h-[42px] rounded-xl bg-blue-700 text-xs font-bold text-white sm:col-span-2">เริ่มสร้างกำหนดการ</button></div></div>`,document.body.appendChild(i);const x=()=>i.remove();i.querySelector("[data-schedule-ai-room-cancel]").addEventListener("click",x),i.addEventListener("click",g=>{g.target===i&&x()}),i.querySelector("[data-schedule-ai-room-open]").addEventListener("click",()=>{var ge;const g=(ge=i.querySelector("[data-schedule-ai-room-select]"))==null?void 0:ge.value,w=g==="all"?U:[U[Number(g)]].filter(Boolean),J=w.map(ve=>Number(ve.classId)).filter(ve=>Number.isInteger(ve)&&ve>0),ae=w.map(ve=>ve.label),be=g==="all"?k:f.find(ve=>Number(ve.id)===J[0])??k;x(),P({teacher:e,cls:be,courseId:d,syllabusItems:le,lessonPlans:oe,currentWeek:1,initialMode:"schedule",semesterStart:he,semesterEnd:Q.semester_end,scheduledDays:a,targetClassIds:J,targetClassLabels:ae,onSaved:fe})})}),(m=S.querySelector("#cw-ai-plan"))==null||m.addEventListener("click",()=>{if(!U.length){Y("รายวิชานี้ยังไม่มีห้องเรียนสำหรับสร้างแผน","warning");return}const i=document.createElement("div");i.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับสร้างแผน</h3><p class="mt-1 text-xs text-gray-500">ต้องเลือกห้องก่อนสร้างแผน หากเลือกทุกห้อง ระบบจะสร้างแผนชุดเดียวกันแยกให้แต่ละห้อง</p><select data-plan-ai-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">ทุกห้องเหมือนกัน</option>${U.map((g,w)=>`<option value="${w}">${l(g.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-plan-ai-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-plan-ai-room-open class="min-h-[42px] rounded-xl bg-violet-700 text-xs font-bold text-white sm:col-span-2">เริ่มสร้างแผน</button></div></div>`,document.body.appendChild(i);const x=()=>i.remove();i.querySelector("[data-plan-ai-room-cancel]").addEventListener("click",x),i.addEventListener("click",g=>{g.target===i&&x()}),i.querySelector("[data-plan-ai-room-open]").addEventListener("click",()=>{var ge;const g=(ge=i.querySelector("[data-plan-ai-room-select]"))==null?void 0:ge.value,w=g==="all"?U:[U[Number(g)]].filter(Boolean),J=w.map(ve=>Number(ve.classId)).filter(ve=>Number.isInteger(ve)&&ve>0),ae=w.map(ve=>ve.label),be=g==="all"?k:f.find(ve=>Number(ve.id)===J[0])??k;x(),P({teacher:e,cls:be,courseId:d,syllabusItems:le,lessonPlans:oe,currentWeek:1,initialMode:"plan",semesterStart:he,semesterEnd:Q.semester_end,scheduledDays:a,targetClassIds:J,targetClassLabels:ae,onSaved:fe})})});const o=i=>H({plans:oe,subject:s,teacher:e,roomNames:i.flatMap(x=>x.roomNames??[]),roomGroups:i,semester:Q.semester??s.semester,academicYear:Q.academicYear??Q.academic_year??s.academic_year,departmentHead:q});(_=S.querySelector("#cw-plan-archive"))==null||_.addEventListener("click",()=>te({subject:s,teacher:e,classes:f,plans:oe,semesterStart:he,semesterEnd:Q.semester_end,termSchedule:Ce,scheduleLinks:Oe,academicYear:Q.academicYear??Q.academic_year??s.academic_year,semester:Q.semester??s.semester})),(v=S.querySelector("#cw-plans-print-all"))==null||v.addEventListener("click",()=>{const i=U;if(i.length<=1){o(i);return}const x=document.createElement("div");x.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องเรียนสำหรับพิมพ์แผน</h3><p class="mt-1 text-xs text-gray-500">เลือกห้องเดียว หรือเปิดทุกห้องเพื่อสลับแท็บและบันทึกเป็น PDF เดียว</p><select data-plan-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">เปิดทุกห้อง</option>${i.map((w,J)=>`<option value="${J}">${l(w.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-plan-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-plan-room-open class="min-h-[42px] rounded-xl bg-violet-700 text-xs font-bold text-white sm:col-span-2">เปิดแผน</button></div></div>`,document.body.appendChild(x);const g=()=>x.remove();x.querySelector("[data-plan-room-cancel]").addEventListener("click",g),x.addEventListener("click",w=>{w.target===x&&g()}),x.querySelector("[data-plan-room-open]").addEventListener("click",()=>{var J;const w=(J=x.querySelector("[data-plan-room-select]"))==null?void 0:J.value;g(),o(w==="all"?i:[i[Number(w)]])})}),(y=S.querySelector("#cw-schedule-preview"))==null||y.addEventListener("click",()=>{const i=S.querySelector("#cw-schedule-show-notes");D=(i==null?void 0:i.checked)===!0;try{localStorage.setItem(`pp5-schedule-show-notes-${d}`,String(D))}catch{}if(!U.length){Y("รายวิชานี้ยังไม่มีห้องเรียนสำหรับเปิดตัวอย่างเอกสาร","warning");return}const x=document.createElement("div");x.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",x.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับดูตัวอย่างเอกสาร</h3><p class="mt-1 text-xs text-gray-500">กรุณาเลือกห้องก่อนเปิดตัวอย่าง เพื่อให้หัวเอกสารและกำหนดการสอนตรงกับห้องนั้น</p><select data-schedule-preview-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm">${U.map((w,J)=>`<option value="${J}">${l(w.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-schedule-preview-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-schedule-preview-room-open class="min-h-[42px] rounded-xl bg-blue-700 text-xs font-bold text-white sm:col-span-2">เปิดตัวอย่างเอกสาร</button></div></div>`,document.body.appendChild(x);const g=()=>x.remove();x.querySelector("[data-schedule-preview-room-cancel]").addEventListener("click",g),x.addEventListener("click",w=>{w.target===x&&g()}),x.querySelector("[data-schedule-preview-room-open]").addEventListener("click",()=>{var ae;const w=Number((ae=x.querySelector("[data-schedule-preview-room-select]"))==null?void 0:ae.value),J=U[w];J&&(g(),Zs({subject:s,teacher:e,syllabusItems:Se(J.classId),roomNames:J.roomNames,semester:Q.semester??s.semester,academicYear:Q.academicYear??Q.academic_year??s.academic_year,semesterStart:he,semesterEnd:Q.semester_end,showNotesContent:D,departmentHead:q,signatureTeachers:c}))})});let r=null;const p=S.querySelector("#cw-document-picker"),$=()=>{p&&(p.classList.add("hidden"),p.classList.remove("flex"))};S.querySelectorAll(".cw-plan-row").forEach(i=>i.addEventListener("click",()=>{r=oe.find(x=>x.id===parseInt(i.dataset.planId,10))??null,!(!r||!xe.length||!p)&&(p.classList.remove("hidden"),p.classList.add("flex"))})),S.querySelectorAll(".cw-plan-delete").forEach(i=>i.addEventListener("click",async()=>{const x=oe.find(g=>g.id===parseInt(i.dataset.planId,10));if(x&&confirm(`ลบแผน "${x.title}"? บันทึกหลังสอนและลายเซ็นที่ผูกกับแผนนี้จะถูกลบด้วย`)){i.disabled=!0;try{await Cs(x.id),Y("ลบแผนการสอนแล้ว","success"),fe()}catch(g){i.disabled=!1,Y(`ลบไม่สำเร็จ: ${je(g)}`,"error")}}})),(O=S.querySelector("#cw-document-cancel"))==null||O.addEventListener("click",$),p==null||p.addEventListener("click",i=>{i.target===p&&$()}),(C=S.querySelector("#cw-document-open"))==null||C.addEventListener("click",()=>{var g;const i=parseInt((g=S.querySelector("#cw-document-class"))==null?void 0:g.value,10),x=xe.find(w=>w.id===i);!r||!x||($(),E({plan:r,cls:x,teacher:e,classId:x.id,currentWeek:r.week_start,semesterStart:he,semesterEnd:Q.semester_end,scheduledDays:Re(x.id)}))})}catch(M){S.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${l(je(M))}</div>`}}const ct={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnExternalAI:"ใช้ AI ของฉัน",btnExternalAISub:"คัดลอก Prompt + วาง JSON",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 1 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["รหัสมาตรฐาน/ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},en:{key:"en",dir:"ltr",aiLang:"formal English",label:"English",title:"Course Description",close:"Close",save:"Save",saving:"Saving...",helpTitle:"Help me fill this in",helpSub:"Enter the lessons/topics below, then choose a filling method",topicLabel:"Lessons / Topics (add multiple)",topicPlaceholder:"e.g. Statistics, Exponents, Reading comprehension",addTopic:"Add topic",btnCurriculum:"Find curriculum",btnCurriculumSub:"Curriculum database",btnCurriculumLoading:"Searching...",btnAI:"Draft with AI",btnAISub:"Gemini + topics",btnAILoading:"AI is drafting...",btnExternalAI:"Use my AI",btnExternalAISub:"Copy Prompt + paste JSON",btnImg:"Read image",btnImgSub:"AI reads image",btnImgLoading:"Reading...",descLabel:"Course description / overall learning outcomes",descPlaceholder:"Write in English or another language; text direction is supported automatically",dirLabel:"Text direction",dirAuto:"Automatic",dirRTL:"Right to left",dirLTR:"Left to right",signerLabel:"Signatory",signerPlaceholder:"Head of learning area",signerHint:"Used as the learning-area head in the document",tableTitle:"Standards / Indicators / Learning outcomes",tableHint:"Rows containing text become selectable assessment items",tplBasic:"Basic: 1 column",tplExtra:"Additional: 1 column",addCol:"+ Column",addRow:"+ Row",rowHeader:"No.",delRow:"Delete",objTitle:"Assessment objectives",objHint:"(click to select)",between:"During term",mid:"Midterm",final:"Final",noOpts:"No selectable items yet",notSelected:"Not selected",colsBasic:["Standard/indicator code and full text"],colsExtra:["Learning outcomes"],colNew:e=>`Column ${e}`,pickerTitles:{mid:"Select midterm items",between:"Select during-term items",final:"Select final items"},pickerCancel:"Cancel",pickerOk:"OK",confirmOverwrite:"Searching the curriculum will overwrite existing data. Continue?",confirmAIOverwrite:"Let AI draft new content over the existing data?",confirmImgOverwrite:"Fill from the image and overwrite existing data?",confirmColChange:"Change the column format? Existing data will be fitted to the new columns.",toastSaved:"Course description saved",toastSearchOk:e=>`Found ${e} curriculum items - please review before saving`,toastSearchEmpty:"No curriculum items found - try Draft with AI instead",toastAIDone:"AI drafted the content - please review it carefully before saving",toastImgDone:"AI read the image - please review the content before saving"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"١ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["كود ڤياوايان/ڤتوك دان teks penuh"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمود أساسي واحد",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["رمز المعيار/المؤشر والنص الكامل"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"1 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Kod piawaian/petunjuk dan teks penuh"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let pt=null;async function eo(){if(pt)return pt;const e=await ws().catch(()=>[]);return pt=Object.fromEntries(e.map(s=>[s.lang_key,s.settings??{}])),pt}async function ea(e,s){var Oe,Re;const[t,d]=await Promise.all([ys(s.id).catch(a=>(Y("โหลดคำอธิบายฯ ไม่สำเร็จ: "+je(a),"error"),null)),eo()]),f=a=>{const I=Array.isArray(a)?a:["รหัสมาตรฐาน/ตัวชี้วัด"];return I.length?I.map(N=>String(N??"")):["รหัสมาตรฐาน/ตัวชี้วัด"]},k=(a,I)=>{const j=(Array.isArray(a)?a:[]).map(B=>{const R=Array.isArray(B)?B:Object.values(B??{});return Array.from({length:I},(G,D)=>String(R[D]??""))});return j.length?j:Array.from({length:12},()=>Array.from({length:I},()=>""))},b=a=>[...new Set((Array.isArray(a)?a:[]).map(I=>parseInt(I,10)).filter(I=>Number.isFinite(I)&&I>0))],u=s.subject_group==="ACDMVOC",S=!u&&(!s.subject_group||["ACDM","AGM"].includes(s.subject_group)),A=(a,I,N)=>{const B=(Array.isArray(a)?a:[]).map(R=>Object.fromEntries(I.map(G=>[G,String((R==null?void 0:R[G])??"")])));for(;B.length<N;)B.push(Object.fromEntries(I.map(R=>[R,""])));return B};let L=f(t==null?void 0:t.table_columns),T=k(t==null?void 0:t.table_rows,L.length),h=b(t==null?void 0:t.midterm_objective_items),m=b(t==null?void 0:t.between_objective_items),_=b(t==null?void 0:t.final_objective_items),v=(t==null?void 0:t.between_objective_extra)??"",y=(t==null?void 0:t.midterm_objective_extra)??"",O=(t==null?void 0:t.final_objective_extra)??"",C=["auto","rtl","ltr"].includes(t==null?void 0:t.text_direction)?t.text_direction:"auto",M=(t==null?void 0:t.description)||"",X=(t==null?void 0:t.signer_name)||s.learning_area||"",P=(Oe=t==null?void 0:t.topic_list)!=null&&Oe.length?t.topic_list:[""],E=A(t==null?void 0:t.voc_objectives,["objective","competency"],10),H=A(t==null?void 0:t.voc_schedule,["week","content","note"],20),te="",le="th";const oe=()=>{const a={...ct.th,...ct[le]},I=(d==null?void 0:d[le])??{},N={...a,...I};return I.pickerTitles&&(N.pickerTitles={...a.pickerTitles,...I.pickerTitles}),N},ye=()=>{if(document.getElementById("cd2-rtl-font"))return;const a=document.createElement("link");a.id="cd2-rtl-font",a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(a)},[Q,xe]=await Promise.all([De().catch(()=>({})),et().catch(()=>[])]),re=lt(xe,s.subject_group,s.dept),fe=(re==null?void 0:re.dept_name)??s.dept??"";(Re=document.getElementById("course-doc-page2-modal"))==null||Re.remove();const c=document.createElement("div");c.id="course-doc-page2-modal",c.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(c);const F="/pp5online/course-doc/course-description-guide.png",Z=()=>{var j;(j=document.getElementById("course-description-guide-modal"))==null||j.remove();const a=document.createElement("div");a.id="course-description-guide-modal",a.className="fixed inset-0 z-[210] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6",a.innerHTML=`<div role="dialog" aria-modal="true" aria-labelledby="course-description-guide-title" class="relative flex max-h-[96vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div class="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3 sm:px-5">
        <div class="min-w-0"><h3 id="course-description-guide-title" class="truncate text-sm font-extrabold text-gray-800 sm:text-base">📘 คู่มือการเขียนคำอธิบายรายวิชา</h3><p class="mt-0.5 text-[11px] text-gray-400">โปรดอ่านแนวทางก่อนสร้าง Prompt หรือวาง JSON จาก AI</p></div>
        <button type="button" data-guide-close aria-label="ปิดคู่มือ" class="min-h-[40px] shrink-0 rounded-xl border border-gray-200 px-3 text-sm font-bold text-gray-500 hover:bg-gray-50">ปิด</button>
      </div>
      <div class="min-h-0 overflow-y-auto bg-slate-50 p-2 sm:p-4"><img src="${F}" alt="คู่มือการเขียนคำอธิบายรายวิชาพื้นฐานและรายวิชาเพิ่มเติมตามแนวทาง สพฐ." class="mx-auto block h-auto max-h-[calc(96vh-120px)] w-auto max-w-full rounded-xl object-contain shadow-sm" /></div>
      <div class="flex justify-end border-t border-gray-100 bg-white px-4 py-3 sm:px-5"><button type="button" data-guide-close class="min-h-[42px] rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white hover:bg-emerald-700">เข้าใจแล้ว เริ่มกรอกข้อมูล</button></div>
    </div>`,document.body.appendChild(a);const I=()=>{a.remove(),document.removeEventListener("keydown",N)},N=B=>{B.key==="Escape"&&I()};a.addEventListener("click",B=>{B.target===a&&I()}),a.querySelectorAll("[data-guide-close]").forEach(B=>B.addEventListener("click",I)),document.addEventListener("keydown",N)},ie=(a,I="")=>{const j=[a.length?[...a].sort((B,R)=>B-R).join(", "):"",I.trim()].filter(Boolean);return j.length?j.join(", "):oe().notSelected},se=()=>{const a=T.length;return Array.from({length:a},(I,N)=>N+1).filter(I=>{var N;return(N=T[I-1])==null?void 0:N.some(j=>String(j??"").trim())})},V=()=>{const a=oe(),I=se(),N=a.dir==="rtl";N&&ye();const j=C==="auto"?a.dir:C,B=j==="rtl"?"text-right":"text-left",R=N?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";c.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${j}" style="${R}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${a.title}</h2>
          <p class="text-xs text-gray-400 truncate">${l(s.subject_name)} · ${l(s.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${a.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${a.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${j}" style="${R}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(ct).map(G=>{var D;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${le===G.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${G.key}">${((D=d==null?void 0:d[G.key])==null?void 0:D.label)||G.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${j}" style="${R}">
        <div class="max-w-6xl mx-auto p-4 sm:p-6 space-y-4">
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 sm:p-5">
            <div>
              <h3 class="font-bold text-gray-800">${a.helpTitle}</h3>
              <p class="text-xs text-gray-400 mt-0.5">${a.helpSub}</p>
            </div>

            <!-- topic list -->
            <div class="mt-4 space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-semibold text-gray-500">${a.topicLabel}</span>
                <span class="text-xs text-gray-400">${l(s.grade_level||"")} · ${l(fe||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${P.map((G,D)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${me} flex-1" value="${l(G)}"
                      placeholder="${l(a.topicPlaceholder)}" dir="${j}" data-idx="${D}" />
                    ${P.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${D}">✕</button>`:""}
                  </div>`).join("")}
              </div>
              <button id="cd2-add-topic" type="button"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 mt-1">
                <span class="text-base leading-none">＋</span> ${a.addTopic}
              </button>
            </div>

            <!-- AI / curriculum action buttons -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-search-curriculum"
                  class="w-full py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  🔍 ${a.btnCurriculum}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${a.btnCurriculumSub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-auto-fill"
                  class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  ✨ ${a.btnAI}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${a.btnAISub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <label class="cursor-pointer w-full">
                  <span id="cd2-img-btn"
                    class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 flex items-center justify-center gap-1">
                    📷 ${a.btnImg}
                  </span>
                  <input type="file" id="cd2-img-input" accept="image/*" class="hidden" />
                </label>
                <span class="text-[10px] text-gray-400 text-center">${a.btnImgSub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-external-ai" type="button"
                  class="w-full py-2.5 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700 flex items-center justify-center gap-1">
                  🤖 ${a.btnExternalAI||"ใช้ AI ของฉัน"}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${a.btnExternalAISub||"คัดลอก Prompt + วาง JSON"}</span>
              </div>
            </div>

            ${te?`<p class="text-xs mt-3 ${te.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${l(te)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${a.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${j}"
                  class="${me} ${B} min-h-[132px] leading-7"
                  placeholder="${l(a.descPlaceholder)}">${l(M)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${a.dirLabel}</span>
                  <select id="cd2-dir" class="${Le}">
                    <option value="auto" ${C==="auto"?"selected":""}>${a.dirAuto}</option>
                    <option value="rtl" ${C==="rtl"?"selected":""}>${a.dirRTL}</option>
                    <option value="ltr" ${C==="ltr"?"selected":""}>${a.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${a.signerLabel}</span>
                  <input id="cd2-signer" class="${me} ${B}" value="${l(X)}" placeholder="${l(a.signerPlaceholder)}" dir="${j}" />
                  <p class="text-xs text-gray-400 mt-1">${a.signerHint}</p>
                </label>
              </div>
            </div>
          </div>

          ${u?`
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
                  ${E.map((G,D)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${D+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${D}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(G.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${D}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(G.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${D}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                  ${H.map((G,D)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${D}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${l(G.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${D}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(G.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${D}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${l(G.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${D}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                <h3 class="font-bold text-gray-800">${a.tableTitle}</h3>
                <p class="text-xs text-gray-400 mt-0.5">${a.tableHint}</p>
              </div>
              <div class="flex gap-2">
                <button id="cd2-template-basic" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${a.tplBasic}</button>
                <button id="cd2-template-extra" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${a.tplExtra}</button>
                <button id="cd2-add-col" class="px-3 py-2 rounded-xl border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50">${a.addCol}</button>
                <button id="cd2-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">${a.addRow}</button>
              </div>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${j}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${a.rowHeader}</th>
                    ${L.map((G,D)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${D}" class="cd2-col ${me} ${B} py-2 font-semibold" value="${l(G)}" dir="${j}" />
                          ${L.length>1?`<button data-del-col="${D}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${T.map((G,D)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${D+1}</td>
                      ${L.map((ce,we)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${D}" data-cell="${we}" rows="2" dir="${j}"
                            class="cd2-cell ${B} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(G[we]||"")}</textarea>
                        </td>`).join("")}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${D}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${a.delRow}</button>
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <h3 class="font-bold text-gray-800 mb-3">${a.objTitle} <span class="text-xs font-normal text-gray-400">${a.objHint}</span></h3>
            <div class="grid sm:grid-cols-3 gap-3">
              <button id="cd2-pick-between" class="${B} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${a.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${l(ie(m,v))}</p>
              </button>
              <button id="cd2-pick-mid" class="${B} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${a.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${l(ie(h,y))}</p>
              </button>
              <button id="cd2-pick-final" class="${B} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${a.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${l(ie(_,O))}</p>
              </button>
            </div>
            ${I.length?"":`<p class="text-xs text-amber-600 mt-3">${a.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,Ce()},ee=()=>{var a,I,N;return P=[...c.querySelectorAll(".cd2-topic-input")].map(j=>j.value.trim()).filter(Boolean),P.length||(P=[""]),M=((a=c.querySelector("#cd2-description"))==null?void 0:a.value)??"",X=((I=c.querySelector("#cd2-signer"))==null?void 0:I.value)??"",C=((N=c.querySelector("#cd2-dir"))==null?void 0:N.value)??C,c.querySelectorAll(".cd2-col").forEach(j=>{L[Number(j.dataset.col)]=j.value}),c.querySelectorAll(".cd2-cell").forEach(j=>{const B=Number(j.dataset.row),R=Number(j.dataset.cell);T[B]||(T[B]=Array.from({length:L.length},()=>"")),T[B][R]=j.value}),c.querySelectorAll(".cd2-voc-obj-cell").forEach(j=>{const B=Number(j.dataset.vocObjRow),R=j.dataset.vocObjField;E[B]||(E[B]={objective:"",competency:""}),E[B][R]=j.value}),c.querySelectorAll(".cd2-voc-sch-cell").forEach(j=>{const B=Number(j.dataset.vocSchRow),R=j.dataset.vocSchField;H[B]||(H[B]={week:"",content:"",note:""}),H[B][R]=j.value}),{desc:M,signer:X}},de=a=>{const I=Array.isArray(a==null?void 0:a.columns)&&a.columns.length?a.columns.map(R=>String(R??"").trim()).filter(Boolean):oe().colsExtra,N=Array.isArray(a==null?void 0:a.rows)?a.rows.map(R=>{const G=Array.isArray(R)?R:Object.values(R??{});return Array.from({length:I.length},(D,ce)=>String(G[ce]??"").trim())}).filter(R=>R.some(Boolean)):[];L=I,T=N.length?N:Array.from({length:12},()=>Array.from({length:L.length},()=>"")),a!=null&&a.description&&(M=String(a.description)),h=b((a==null?void 0:a.midterm_items)??(a==null?void 0:a.midtermObjectiveItems)),m=b((a==null?void 0:a.between_items)??(a==null?void 0:a.betweenObjectiveItems)),_=b((a==null?void 0:a.final_items)??(a==null?void 0:a.finalObjectiveItems));const j=se(),B=Math.ceil(j.length/2);h.length||(h=j.slice(0,Math.min(3,B))),m.length||(m=j.slice(0,Math.min(4,j.length))),_.length||(_=j.slice(-Math.min(3,j.length)))},z=a=>String(a??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,""),pe={schema_version:"pp5.course_description.v1",type:"course_description",course:{subject_code:s.subject_code??"",subject_name:s.subject_name??"",grade_level:s.grade_level??"",learning_area:fe},description:"คำอธิบายรายวิชาโดยสรุป...",topic_list:["บทที่ 1 ...","บทที่ 2 ..."],table_columns:["รหัสมาตรฐาน/ตัวชี้วัด"],table_rows:[["ค 1.1 ม.2/1 : เข้าใจ..."],["ค 1.2 ม.2/2 : วิเคราะห์..."]],between_objective_items:[1],between_objective_extra:"",midterm_objective_items:[1,2],midterm_objective_extra:"",final_objective_items:[2],final_objective_extra:"",signer_name:"",text_direction:"auto",voc_objectives:[{objective:"",competency:""}],voc_schedule:[{week:"1",content:"",note:""}]},K=()=>{ee();const a=oe(),I=S&&L.length===1,N=!u&&!S&&L.length===1,j=I?'รูปแบบรายวิชาพื้นฐาน (1 คอลัมน์): ยึดมาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก ในคำอธิบายให้เขียนเป็นความเรียงสรุปว่าเรียนอะไร ใช้กระบวนการใด และคาดหวังให้ผู้เรียนเกิดความรู้/ทักษะอะไร ตอนท้ายอาจระบุรหัสตัวชี้วัดที่เกี่ยวข้องได้ แต่ห้ามคัดลอกข้อความตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย; ในแต่ละแถวของตารางให้รวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็มไว้ในคอลัมน์เดียว เช่น "ค 1.1 ม.2/1 : ..."':N?"รูปแบบรายวิชาเพิ่มเติม (1 คอลัมน์): ยึดผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก; ในตารางให้ใส่ผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",B={subject_code:s.subject_code??"",subject_name:s.subject_name??"",grade_level:s.grade_level??"",subject_group:s.subject_group??"",learning_area:fe,credit:s.credit??"",target_language:a.aiLang,is_voc:u,topics:P.filter(Boolean),description:M,table_columns:L,table_rows:T.filter(R=>R.some(G=>String(G??"").trim())),voc_objectives:u?E.filter(R=>Object.values(R).some(G=>String(G??"").trim())):[],voc_schedule:u?H.filter(R=>Object.values(R).some(G=>String(G??"").trim())):[]};return`คุณเป็นผู้ช่วยจัดทำเอกสารคำอธิบายรายวิชา ปพ.5 สำหรับครูผู้สอน
เขียนค่าข้อมูลทุกช่องที่เป็นเนื้อหาเป็น${a.aiLang} ตามภาษาที่ครูเลือกอยู่ในขณะนี้ ส่วนชื่อ field ใน JSON ต้องคงเป็นภาษาอังกฤษตาม schema

งานที่ต้องทำ:
1. จัดทำคำอธิบายรายวิชา/ผลการเรียนรู้ภาพรวมให้เป็นภาษาทางการ กระชับ และเหมาะกับระดับชั้น
2. จัดทำรายการบท/หัวข้อการเรียนรู้ใน topic_list
3. จัดทำตารางมาตรฐานการเรียนรู้ ตัวชี้วัด หรือผลการเรียนรู้ ให้สอดคล้องกับข้อมูลหลักสูตรที่แนบหรือผู้ใช้ให้มา
4. เลือกหมายเลขแถวที่เหมาะสมสำหรับการประเมินระหว่างภาค กลางภาค และปลายภาค
5. ${u?"สำหรับ ACDMVOC ให้จัดทำ voc_objectives และ voc_schedule ด้วย โดยไม่ต้องสร้างรหัสมาตรฐานขึ้นเอง":"หากไม่มีข้อมูลมาตรฐาน/ตัวชี้วัดที่เชื่อถือได้ ให้ระบุข้อความที่ต้องตรวจสอบเพิ่มเติมแทนการแต่งรหัสขึ้นเอง"}

ข้อมูลรายวิชาจากระบบ PP5:
${JSON.stringify(B,null,2)}

ข้อกำหนดสำคัญ:
- ใช้ข้อมูลจากหลักสูตร หนังสือเรียน หรือเอกสารที่ผู้ใช้แนบเป็นหลัก และห้ามเดาข้อมูลที่ไม่มีแหล่งอ้างอิง
- แนวทางการเขียนตามคู่มือ: ${j}
- คำอธิบายรายวิชาต้องสรุปสาระสำคัญ กระบวนการเรียนรู้ และผลที่คาดหวังให้ผู้เรียนเกิดขึ้น ไม่ใช่รายการคัดลอกมาตรฐาน/ตัวชี้วัดหรือผลการเรียนรู้ทั้งหมด
- table_rows ต้องเป็น array ของ array และจำนวนช่องต้องตรงกับ table_columns
- หมายเลขใน between_objective_items, midterm_objective_items และ final_objective_items ต้องอ้างถึงแถวที่มีอยู่จริง
- ตอบกลับเป็น JSON ตาม schema นี้เท่านั้น โดยครูจะนำ JSON กลับมาวางในระบบเพื่อให้ตรวจสอบก่อนบันทึก
- ต้องตอบเป็นโค้ด JSON เพียงกล่องเดียวชนิด json ห้ามมีคำอธิบายก่อนหรือหลังกล่อง

ตัวอย่าง schema:
${JSON.stringify(pe,null,2)}`},q=a=>{var B;let I;try{I=JSON.parse(z(a))}catch{throw new Error("JSON ไม่ถูกต้อง กรุณาตรวจเครื่องหมายปีกกาและเครื่องหมายคำพูด")}if((I==null?void 0:I.type)!=="course_description")throw new Error("ต้องเป็น JSON ประเภท course_description");if(!String(I.description??"").trim())throw new Error("ยังไม่มี description คำอธิบายรายวิชา");const N=Array.isArray(I.table_columns)&&I.table_columns.length&&Array.isArray(I.table_rows);if(!u&&!N)throw new Error("ต้องมี table_columns และ table_rows สำหรับรายวิชานี้");if(N&&!I.table_rows.some(R=>Array.isArray(R)&&R.some(G=>String(G??"").trim())))throw new Error("ต้องมี table_rows อย่างน้อย 1 แถวที่มีข้อมูล");if(N&&I.table_rows.some(R=>!Array.isArray(R)||R.length!==I.table_columns.length))throw new Error("จำนวนช่องใน table_rows ต้องตรงกับจำนวน table_columns");if(I.text_direction&&!["auto","rtl","ltr"].includes(I.text_direction))throw new Error("text_direction ต้องเป็น auto, rtl หรือ ltr");const j=((B=I.table_rows)==null?void 0:B.length)??0;for(const R of["between_objective_items","midterm_objective_items","final_objective_items"])if(I[R]!=null&&(!j||!Array.isArray(I[R])||I[R].some(G=>!Number.isInteger(Number(G))||Number(G)<1||Number(G)>j)))throw new Error(`${R} ต้องเป็นหมายเลขแถวที่มีอยู่จริง`);if(u){if(!Array.isArray(I.voc_objectives)||!I.voc_objectives.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_objectives");if(!Array.isArray(I.voc_schedule)||!I.voc_schedule.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_schedule")}return I},U=a=>{Array.isArray(a.table_columns)&&a.table_columns.length&&Array.isArray(a.table_rows)?de({description:a.description,columns:a.table_columns,rows:a.table_rows,midterm_items:a.midterm_objective_items,between_items:a.between_objective_items,final_items:a.final_objective_items}):M=String(a.description??""),Array.isArray(a.topic_list)&&(P=a.topic_list.map(I=>String(I??"").trim()).filter(Boolean),P.length||(P=[""])),a.between_objective_extra!=null&&(v=String(a.between_objective_extra)),a.midterm_objective_extra!=null&&(y=String(a.midterm_objective_extra)),a.final_objective_extra!=null&&(O=String(a.final_objective_extra)),a.signer_name!=null&&(X=String(a.signer_name)),a.text_direction&&["auto","rtl","ltr"].includes(a.text_direction)&&(C=a.text_direction),u&&(E=A(a.voc_objectives,["objective","competency"],10),H=A(a.voc_schedule,["week","content","note"],20))},ue=()=>{var G;(G=document.getElementById("cd2-external-ai-modal"))==null||G.remove();const a=document.createElement("div");a.id="cd2-external-ai-modal",a.className="fixed inset-0 z-[190] flex items-center justify-center bg-black/60 p-3",a.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[94vh] overflow-y-auto p-5 sm:p-6">
      <div class="flex items-start justify-between gap-3 mb-4">
        <div><span class="inline-flex px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-[10px] font-extrabold mb-2">🤖 AI ของครูเอง</span><h3 class="font-extrabold text-gray-800 text-lg">สร้างคำอธิบายรายวิชาด้วย AI ของคุณ</h3><p class="text-xs text-gray-400 mt-1">คัดลอก Prompt ไปใช้กับ ChatGPT, Gemini หรือ AI อื่น แล้วนำ JSON กลับมาวางเพื่อตรวจสอบและเติมลงแบบฟอร์ม</p></div>
        <button data-external-close type="button" class="w-10 h-10 rounded-xl border text-gray-400 hover:bg-gray-50">✕</button>
      </div>
      <div class="rounded-2xl border border-violet-100 bg-violet-50/70 p-4 mb-4">
        <p class="text-sm font-extrabold text-violet-900">ขั้นตอนใช้งาน</p>
        <ol class="mt-2 space-y-1 text-xs text-violet-800 list-decimal list-inside">
          <li>ตรวจข้อมูลในแบบฟอร์ม แล้วกดสร้าง Prompt ก่อนคัดลอกไปใช้กับ AI พร้อมแนบเอกสารหลักสูตร/หนังสือเรียนถ้ามี</li>
          <li>ให้ AI ตอบกลับเป็น JSON ตามคำสั่ง แล้วคัดลอก JSON มาวางในช่องด้านล่าง</li>
          <li>กดตรวจ JSON และนำเข้าข้อมูล จากนั้นตรวจทานในแบบฟอร์มก่อนกดบันทึก</li>
        </ol>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">Prompt สำหรับนำไปใช้กับ AI</label><div class="grid grid-cols-2 gap-2 sm:flex"><button id="cd2-external-generate" type="button" class="min-h-[40px] px-3 rounded-xl bg-violet-700 text-white text-xs font-bold">⚡ สร้าง Prompt ใหม่</button><button id="cd2-external-copy" type="button" hidden disabled aria-disabled="true" class="min-h-[40px] px-3 rounded-xl border border-violet-200 text-violet-700 bg-violet-50 text-xs font-bold disabled:opacity-40">📋 คัดลอก Prompt</button></div></div>
      <textarea id="cd2-external-prompt" rows="12" readonly class="w-full border rounded-xl p-3 text-[11px] font-mono bg-gray-50"></textarea>
      <div class="mt-4 pt-4 border-t">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">วาง JSON ที่ได้จาก AI</label><div class="grid grid-cols-2 gap-2 sm:flex"><button id="cd2-external-validate" type="button" class="min-h-[40px] px-3 rounded-xl border border-violet-200 text-violet-700 font-bold text-xs">🔎 ตรวจ JSON</button><button id="cd2-external-import" type="button" class="min-h-[40px] px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs">📥 นำเข้าแบบฟอร์ม</button></div></div>
        <textarea id="cd2-external-json" rows="10" class="w-full border rounded-xl p-3 text-[11px] font-mono" placeholder='วาง { "schema_version": "pp5.course_description.v1", "type": "course_description", ... } ที่นี่'></textarea>
        <div id="cd2-external-result" class="hidden mt-2 rounded-xl px-3 py-2 text-xs"></div>
      </div>
    </div>`,document.body.appendChild(a);const I=()=>K(),N=(D,ce)=>{const we=a.querySelector("#cd2-external-result");we.className=`mt-2 rounded-xl px-3 py-2 text-xs ${ce?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-red-50 text-red-700 border border-red-100"}`,we.textContent=D},j=a.querySelector("#cd2-external-prompt"),B=Ws({copyButton:a.querySelector("#cd2-external-copy")});c.addEventListener("input",D=>{D.target instanceof Element&&D.target.matches("input, textarea, select")&&B.invalidate()}),c.addEventListener("change",D=>{D.target instanceof Element&&D.target.matches("input, textarea, select")&&B.invalidate()}),c.addEventListener("click",D=>{D.target.closest("button")&&B.invalidate()});const R=()=>a.remove();a.addEventListener("click",D=>{D.target===a&&R()}),a.querySelector("[data-external-close]").addEventListener("click",R),a.querySelector("#cd2-external-generate").addEventListener("click",()=>{j.value=I(),B.markGenerated(),Y("สร้าง Prompt แล้ว","success")}),a.querySelector("#cd2-external-copy").addEventListener("click",async()=>{if(!B.isReady()){Y("กรุณากด “สร้าง Prompt ใหม่” หลังแก้ข้อมูลก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(j.value),Y("คัดลอก Prompt แล้ว","success")}catch{j.select(),document.execCommand("copy"),Y("คัดลอก Prompt แล้ว","success")}}),a.querySelector("#cd2-external-validate").addEventListener("click",()=>{var D;try{const ce=q(a.querySelector("#cd2-external-json").value);N(`JSON ถูกต้อง${(D=ce.table_rows)!=null&&D.length?`: ${ce.table_rows.length} แถว`:""}${u?` · ${ce.voc_schedule.length} สัปดาห์`:""}`,!0)}catch(ce){N(ce.message,!1)}}),a.querySelector("#cd2-external-import").addEventListener("click",()=>{try{const D=q(a.querySelector("#cd2-external-json").value);U(D),R(),te="✅ นำเข้าข้อมูลจาก AI ภายนอกแล้ว — กรุณาตรวจสอบก่อนบันทึก",V(),Y("นำเข้าคำอธิบายรายวิชาแล้ว กรุณาตรวจสอบก่อนบันทึก","success")}catch(D){N(D.message,!1)}})},he=a=>a.some(N=>String(N.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:a.map((N,j)=>[`${N.item_no??j+1}.${N.learning_outcome_text??N.indicator_text??N.standard_text??""}`]),description:M,midterm_items:a.slice(0,Math.ceil(a.length/2)).map((N,j)=>j+1),final_items:a.slice(Math.ceil(a.length/2)).map((N,j)=>j+1+Math.ceil(a.length/2))}:{source:"curriculum",columns:["รหัสมาตรฐาน/ตัวชี้วัด"],rows:a.map((N,j)=>{const B=[N.standard_code,N.indicator_code].filter(Boolean).join(" "),R=N.indicator_text||N.standard_text||N.learning_outcome_text||"";return[((B||String(N.item_no??j+1)+".")+" : "+R).trim()]}),description:M,midterm_items:a.slice(0,Math.ceil(a.length/2)).map((N,j)=>j+1),final_items:a.slice(Math.ceil(a.length/2)).map((N,j)=>j+1+Math.ceil(a.length/2))},_e=async()=>{var n,o,r,p,$;const a=oe(),I=S&&L.length===1,N=!u&&!S&&L.length===1,j=I?a.colsBasic:N?a.colsExtra:L,B=I||N?'single column named "'+j[0]+'"':"custom columns named "+JSON.stringify(j),R=I?"รายวิชาพื้นฐาน: ใช้มาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก เขียนคำอธิบายเป็นความเรียงสรุปสาระ กระบวนการ และผลที่คาดหวัง ไม่คัดลอกตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย และให้แต่ละแถวในคอลัมน์เดียวรวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็ม เช่น ค 1.1 ม.2/1 : ...":N?"รายวิชาเพิ่มเติม: ใช้ผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก และให้ตารางสะท้อนผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",G=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${a.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${s.subject_name||""}
- รหัสวิชา: ${s.subject_code||""}
- ชั้น: ${s.grade_level||""}
- กลุ่มสาระ: ${fe||s.dept||""}
- หน่วยกิต: ${s.credit||""}
- เรื่อง/บทที่สอน: ${P.filter(Boolean).join(", ")||"ไม่ระบุ"}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${B}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม
5. แนวทางการเขียน: ${R}

Return exactly one JSON object wrapped in a single fenced Markdown code block using \`\`\`json and \`\`\`. No text before or after the code block. This makes the AI response show a clear copy-code button:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`,{data:D,error:ce}=await vt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:G}});if(ce)throw new Error(ce.message??"Edge Function error");if(D!=null&&D.error)throw new Error(`Gemini: ${D.error.message??D.error.status}`);const we=(($=(p=(r=(o=(n=D.candidates)==null?void 0:n[0])==null?void 0:o.content)==null?void 0:r.parts)==null?void 0:p[0])==null?void 0:$.text)??"",Se=we.match(/```json\s*([\s\S]*?)```/)||we.match(/(\{[\s\S]*\})/),W=Se?Se[1]??Se[0]:null;if(!W)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(W)},$e=a=>{var Se;ee();const I=a==="mid"?h:a==="between"?m:_,N=a==="mid"?y:a==="between"?v:O,j=se();if(!j.length){Y("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(Se=document.getElementById("cd2-picker"))==null||Se.remove();const B=oe(),R={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},G={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},D=W=>{const n=(T[W-1]??[]).find(r=>String(r??"").trim()),o=String(n??"").trim();return o.length>30?o.slice(0,30)+"…":o},ce=document.createElement("div");ce.id="cd2-picker",ce.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",ce.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${B.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${B.pickerTitles[a]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${j.map(W=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${R[a]} w-4 h-4 flex-shrink-0" value="${W}" ${I.includes(W)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${W}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${l(D(W))}</span>
            </label>`).join("")}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${l(N)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${B.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${G[a]} text-white text-sm font-semibold">${B.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(ce);const we=()=>ce.remove();ce.querySelector("#cd2-picker-close").addEventListener("click",we),ce.querySelector("#cd2-picker-cancel").addEventListener("click",we),ce.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const W=[...ce.querySelectorAll(".cd2-choice:checked")].map(o=>Number(o.value)),n=ce.querySelector("#cd2-picker-extra").value.trim();a==="mid"?(h=W,y=n):a==="between"?(m=W,v=n):(_=W,O=n),we(),V()})},Ce=()=>{var N,j,B,R,G,D,ce,we,Se;const a=oe();c.querySelectorAll(".cd2-lang-btn").forEach(W=>{W.addEventListener("click",()=>{var n;ee(),le=W.dataset.lang||"th",C=((n=ct[le])==null?void 0:n.dir)||"ltr",V()})}),c.querySelector("#cd2-close").addEventListener("click",()=>c.remove()),c.querySelector("#cd2-dir").addEventListener("change",W=>{ee(),C=W.target.value,V()}),c.querySelector("#cd2-external-ai").addEventListener("click",ue),c.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(ee(),(T.some(o=>o.some(r=>String(r??"").trim()))||M.trim())&&!confirm(a.confirmOverwrite))return;const n=c.querySelector("#cd2-search-curriculum");n.disabled=!0,n.innerHTML=`⏳ ${a.btnCurriculumLoading}`;try{const o=await js({subjectName:s.subject_name,subjectCode:s.subject_code,gradeLevel:s.grade_level,dept:fe,topic:P.filter(Boolean).join(" ")});o.length?(de(he(o)),te=a.toastSearchOk(o.length)):te=a.toastSearchEmpty,V()}catch(o){Y("ค้นหลักสูตรไม่สำเร็จ: "+je(o),"error")}finally{n.disabled=!1,n.innerHTML=`🔍 ${a.btnCurriculum}`}}),c.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(ee(),(T.some(o=>o.some(r=>String(r??"").trim()))||M.trim())&&!confirm(a.confirmAIOverwrite))return;const n=c.querySelector("#cd2-auto-fill");n.disabled=!0,n.innerHTML=`⏳ ${a.btnAILoading}`;try{const o=await _e();de(o),te=a.toastAIDone,V()}catch(o){Y("AI ร่างไม่สำเร็จ: "+je(o),"error")}finally{n.disabled=!1,n.innerHTML=`✨ ${a.btnAI}`}}),c.querySelector("#cd2-img-input").addEventListener("change",async W=>{var p,$,i,x,g,w;const n=(p=W.target.files)==null?void 0:p[0];if(!n)return;if((T.some(J=>J.some(ae=>String(ae??"").trim()))||M.trim())&&!confirm(a.confirmImgOverwrite)){W.target.value="";return}const r=c.querySelector("#cd2-img-btn");r.textContent=`⏳ ${a.btnImgLoading}`;try{const J=await new Promise((ke,Be)=>{const He=new FileReader;He.onload=()=>ke(He.result.split(",")[1]),He.onerror=Be,He.readAsDataURL(n)}),ae=S&&L.length===1,be=!u&&!S&&L.length===1,ge=ae?a.colsBasic:be?a.colsExtra:L,ve=ae||be?'single column named "'+ge[0]+'"':"custom columns named "+JSON.stringify(ge),Ie=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${a.aiLang}
ข้อมูลรายวิชา: "${s.subject_name??""}" รหัส ${s.subject_code??""} ชั้น ${s.grade_level??""} กลุ่มสาระ ${fe}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${ve})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบกลับเป็น JSON โดยครอบผลลัพธ์ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีข้อความก่อนหรือหลังกล่อง:
{
  "description": "...",
  "columns": ${JSON.stringify(ge)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:Ae,error:qe}=await vt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Ie,imageBase64:J,imageMimeType:n.type||"image/jpeg"}});if(qe)throw new Error(qe.message??"Edge Function error");if(Ae!=null&&Ae.error)throw new Error(`Gemini: ${Ae.error.message??Ae.error.status}`);const Je=((w=(g=(x=(i=($=Ae.candidates)==null?void 0:$[0])==null?void 0:i.content)==null?void 0:x.parts)==null?void 0:g[0])==null?void 0:w.text)??"",Te=Je.match(/```json\s*([\s\S]*?)```/)||Je.match(/(\{[\s\S]*\})/),Fe=Te?Te[1]??Te[0]:null;if(!Fe)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");de(JSON.parse(Fe)),te=a.toastImgDone,V()}catch(J){Y("อ่านรูปไม่สำเร็จ: "+je(J),"error")}finally{r.textContent=`📷 ${a.btnImg}`,W.target.value=""}});const I=W=>{if(ee(),T.some(r=>r.some(p=>String(p??"").trim()))&&!confirm(a.confirmColChange))return;const o=T;L=W,T=o.map(r=>W.length===1?[r.filter(Boolean).join(" ").trim()]:Array.from({length:W.length},(p,$)=>r[$]??"")),T.length||(T=Array.from({length:12},()=>Array.from({length:L.length},()=>""))),V()};(N=c.querySelector("#cd2-template-basic"))==null||N.addEventListener("click",()=>{I(a.colsBasic)}),(j=c.querySelector("#cd2-template-extra"))==null||j.addEventListener("click",()=>{I(a.colsExtra)}),(B=c.querySelector("#cd2-add-col"))==null||B.addEventListener("click",()=>{ee(),L.push(a.colNew(L.length+1)),T=T.map(W=>[...W,""]),V()}),(R=c.querySelector("#cd2-add-row"))==null||R.addEventListener("click",()=>{ee(),T.push(Array.from({length:L.length},()=>"")),V()}),c.querySelectorAll(".cd2-del-col").forEach(W=>W.addEventListener("click",()=>{ee();const n=Number(W.dataset.delCol);L.splice(n,1),T=T.map(o=>o.filter((r,p)=>p!==n)),V()})),c.querySelectorAll(".cd2-del-row").forEach(W=>W.addEventListener("click",()=>{ee();const n=Number(W.dataset.delRow);T.splice(n,1);const o=r=>r.filter(p=>p!==n+1).map(p=>p>n+1?p-1:p);h=o(h),m=o(m),_=o(_),V()})),(G=c.querySelector("#cd2-pick-mid"))==null||G.addEventListener("click",()=>$e("mid")),(D=c.querySelector("#cd2-pick-between"))==null||D.addEventListener("click",()=>$e("between")),(ce=c.querySelector("#cd2-pick-final"))==null||ce.addEventListener("click",()=>$e("final")),(we=c.querySelector("#cd2-voc-obj-add-row"))==null||we.addEventListener("click",()=>{ee(),E.push({objective:"",competency:""}),V()}),c.querySelectorAll(".cd2-voc-obj-del-row").forEach(W=>W.addEventListener("click",()=>{ee(),E.splice(Number(W.dataset.vocObjDelRow),1),V()})),(Se=c.querySelector("#cd2-voc-sch-add-row"))==null||Se.addEventListener("click",()=>{ee(),H.push({week:String(H.length+1),content:"",note:""}),V()}),c.querySelectorAll(".cd2-voc-sch-del-row").forEach(W=>W.addEventListener("click",()=>{ee(),H.splice(Number(W.dataset.vocSchDelRow),1),V()})),c.querySelector("#cd2-add-topic").addEventListener("click",()=>{ee(),P.push(""),V()}),c.querySelectorAll(".cd2-topic-del").forEach(W=>{W.addEventListener("click",()=>{ee(),P.splice(Number(W.dataset.idx),1),P.length||(P=[""]),V()})}),c.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:W,signer:n}=ee(),o=c.querySelector("#cd2-save");o.disabled=!0,o.textContent=a.saving;try{await Ls(s.id,{description:W,table_columns:L.map((r,p)=>r.trim()||a.colNew(p+1)),table_rows:T.map(r=>r.slice(0,L.length)),topic_list:P.filter(Boolean),midterm_objective_items:h,between_objective_items:m,final_objective_items:_,midterm_objective_extra:y,between_objective_extra:v,final_objective_extra:O,voc_objectives:E,voc_schedule:H,signer_name:n.trim()||null,text_direction:C,updated_by:(e==null?void 0:e.id)??null}),Y(a.toastSaved,"success"),c.remove()}catch(r){Y("บันทึกไม่สำเร็จ: "+je(r),"error"),o.disabled=!1,o.textContent=a.save}})};V(),Z()}async function ta(e){var t,d,f,k,b;if(!(e!=null&&e.id)){Y("ไม่พบข้อมูลครูผู้สอน","error");return}(t=document.getElementById("schedule-course-review-modal"))==null||t.remove();const s=document.createElement("div");s.id="schedule-course-review-modal",s.className="fixed inset-0 z-[240] bg-slate-950/60 backdrop-blur-sm p-3 sm:p-5",s.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="schedule-course-review-title"
    class="h-full w-full overflow-hidden rounded-3xl bg-slate-50 shadow-2xl flex flex-col">
    <div class="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4 sm:px-7">
      <div>
        <h2 id="schedule-course-review-title" class="text-lg sm:text-xl font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2>
        <p class="mt-1 text-xs text-gray-500">กำลังรวบรวมรายวิชาและตรวจสอบคอร์สเดิมของคุณครู...</p>
      </div>
      <button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 bg-white text-xl text-gray-500 hover:bg-gray-100">×</button>
    </div>
    <div class="flex-1 overflow-y-auto p-5 sm:p-7">
      <div class="flex min-h-64 items-center justify-center text-sm text-gray-400">กำลังประมวลผลตารางสอน...</div>
    </div>
  </section>`,document.body.appendChild(s),s.querySelector("[data-review-close]").addEventListener("click",()=>s.remove());try{const u=await De().catch(()=>({})),S=Number(u.academicYear??u.academic_year),A=Number(u.semester),[L,T,h,m]=await Promise.all([Et(e.id,S,A),Kt(),Ct(e.id).catch(()=>[]),et().catch(()=>[])]),_=e.category==="ศาสนา"?new Set(["AGM","AGMVOC"]):e.category==="สามัญ"?new Set(["ACDM","ACDMVOC"]):null,v=T.filter(c=>!_||_.has(c.subject_group)),y=new Map(v.map(c=>[String(c.id),c])),O=["","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์","อาทิตย์"],C=c=>{var de,z,pe;const F=(de=c.master_subjects)==null?void 0:de.catalog_id;if(F&&y.has(String(F)))return y.get(String(F));const Z=Ee(c.subject_code||((z=c.master_subjects)==null?void 0:z.subject_code));if(Z){const K=v.filter(ue=>Ee(ue.subject_code)===Z);if(K.length===1)return K[0];const q=ft(c.class_name),U=K.filter(ue=>q&&Ee(ue.grade_level).includes(Ee(q)));if(U.length===1)return U[0]}const ie=Ee(c.subject_name||((pe=c.master_subjects)==null?void 0:pe.subject_name));if(!ie)return null;const se=v.filter(K=>Ee(K.subject_name)===ie);if(se.length===1)return se[0];const V=ft(c.class_name),ee=se.filter(K=>V&&Ee(K.grade_level).includes(Ee(V)));return ee.length===1?ee[0]:null},M=(c,F)=>{var se,V;const Z=Ee((c==null?void 0:c.subject_code)||F.subject_code||((se=F.master_subjects)==null?void 0:se.subject_code)),ie=Ee((c==null?void 0:c.subject_name)||F.subject_name||((V=F.master_subjects)==null?void 0:V.subject_name));return h.find(ee=>c&&Number(ee.catalog_id)===Number(c.id)||Z&&Ee(ee.subject_code)===Z&&(!(c!=null&&c.subject_group)||ee.subject_group===c.subject_group)||ie&&Ee(ee.subject_name)===ie&&(!(c!=null&&c.subject_group)||ee.subject_group===c.subject_group))},X=new Map;for(const c of L){const F=C(c),Z=(F==null?void 0:F.subject_name)||c.subject_name||((d=c.master_subjects)==null?void 0:d.subject_name)||"",ie=(F==null?void 0:F.subject_code)||c.subject_code||((f=c.master_subjects)==null?void 0:f.subject_code)||"";if(!Z&&!ie)continue;const se=F?`catalog:${F.id}`:`review:${Ee(ie)}:${Ee(Z)}:${Ee((k=c.master_subjects)==null?void 0:k.subject_group)}`;let V=X.get(se);if(!V){const de=F?bt(F):"",z=lt(m,F==null?void 0:F.subject_group,de);V={id:X.size+1,item:F,name:Z,code:ie,subjectGroup:(F==null?void 0:F.subject_group)||((b=c.master_subjects)==null?void 0:b.subject_group)||"",deptCode:de,deptLabel:(F==null?void 0:F.dept_label)||(z==null?void 0:z.dept_name)||"ต้องตรวจสอบกลุ่มสาระ",rows:[],rooms:new Set,grades:new Set,existing:F?M(F,c):null},X.set(se,V)}V.rows.push(c),c.class_name&&V.rooms.add(c.class_name);const ee=(F==null?void 0:F.grade_level)||ft(c.class_name);ee&&V.grades.add(ee)}const P=[...X.values()].map(c=>{var ie,se;const F=((ie=c.item)==null?void 0:ie.grade_level)||[...c.grades].join(", "),Z=!!(c.item&&c.subjectGroup&&c.deptCode&&F&&!c.existing);return c.grade=F,c.status=c.existing?"existing":Z?"ready":"review",c.payload=c.item?{catalog_id:c.item.id,subject_group:c.item.subject_group,dept:c.deptCode,subject_name:c.item.subject_name,subject_code:c.item.subject_code||null,credit:c.item.credit??null,grade_level:F,teacher_id:e.id,learning_area:((se=lt(m,c.subjectGroup,c.deptCode))==null?void 0:se.head_name)||null}:null,c}),E=P.filter(c=>c.status==="ready").length,H=P.filter(c=>c.status==="existing").length,te=P.filter(c=>c.status==="review").length,le=new Map;P.forEach(c=>{const F=c.deptCode||"review";le.has(F)||le.set(F,{label:c.deptLabel,items:[]}),le.get(F).items.push(c)});const oe=c=>c==="ready"?'<span class="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">พร้อมสร้าง</span>':c==="existing"?'<span class="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-700">มีคอร์สแล้ว · ข้าม</span>':'<span class="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">ต้องตรวจสอบ</span>',ye=c=>{const F=c.rows.map(ie=>`${O[Number(ie.day_of_week)]||`วัน${ie.day_of_week??"?"}`} คาบ ${ie.period_no??"—"}`).join(" · "),Z=[...c.rooms].join(", ")||"ไม่ระบุห้อง";return`<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" data-review-item="${c.id}">
        <div class="flex items-start gap-3">
          ${c.status==="ready"?`<input type="checkbox" data-review-select="${c.id}" checked class="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />`:'<span class="mt-1 block h-5 w-5"></span>'}
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">${oe(c.status)}
              <span class="font-mono text-xs font-bold text-indigo-600">${l(c.code||"ไม่มีรหัส")}</span>
            </div>
            <h4 class="mt-2 font-extrabold text-gray-800">${l(c.name)}</h4>
            <p class="mt-1 text-xs text-gray-500">${l(c.grade||"ไม่ระบุระดับชั้น")} · ${l(Z)}</p>
            <p class="mt-1 text-[11px] text-gray-400">${l(F||"ไม่มีช่วงเวลาที่ระบุ")}</p>
            ${c.status==="review"?'<p class="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-800">ระบบยังจับคู่กับแคตตาล็อกไม่ได้แน่นอน จึงยังไม่สร้างอัตโนมัติ กรุณาเปิดคอร์สใหม่และเลือกรายวิชาด้วยตนเอง</p>':""}
          </div>
        </div>
      </article>`};s.querySelector("section").innerHTML=`
      <div class="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4 sm:px-7">
        <div><h2 id="schedule-course-review-title" class="text-lg sm:text-xl font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2>
          <p class="mt-1 text-xs text-gray-500">ภาคเรียน ${l(`${A}/${S}`)} · สร้างคอร์สเท่านั้น ยังไม่สร้างห้องเรียน</p></div>
        <button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 bg-white text-xl text-gray-500 hover:bg-gray-100">×</button>
      </div>
      <div class="flex-1 overflow-y-auto p-5 sm:p-7">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div class="rounded-2xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-2xl font-extrabold text-indigo-700">${P.length}</p><p class="text-[11px] text-indigo-700/70">รายการจากตารางสอน</p></div>
          <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-3"><p class="text-2xl font-extrabold text-emerald-700">${E}</p><p class="text-[11px] text-emerald-700/70">พร้อมสร้าง</p></div>
          <div class="rounded-2xl border border-blue-100 bg-blue-50 p-3"><p class="text-2xl font-extrabold text-blue-700">${H}</p><p class="text-[11px] text-blue-700/70">มีคอร์สแล้ว</p></div>
          <div class="rounded-2xl border border-amber-100 bg-amber-50 p-3"><p class="text-2xl font-extrabold text-amber-700">${te}</p><p class="text-[11px] text-amber-700/70">ต้องตรวจสอบ</p></div>
        </div>
        <div class="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-xs leading-relaxed text-indigo-800">ระบบจะไม่สร้างทับคอร์สเดิม และจะสร้างเฉพาะรายการที่จับคู่กับแคตตาล็อกได้ครบถ้วนเท่านั้น</div>
        <div class="mt-6 space-y-7">
          ${[...le.values()].map(c=>`<section><div class="mb-3 flex items-center gap-3"><div class="h-9 w-9 rounded-xl bg-emerald-100 text-center leading-9">🏷️</div><h3 class="font-extrabold text-gray-800">${l(c.label)}</h3><div class="h-px flex-1 bg-gray-200"></div></div><div class="grid grid-cols-1 gap-3 xl:grid-cols-2">${c.items.map(ye).join("")}</div></section>`).join("")||'<div class="rounded-2xl bg-white p-10 text-center text-sm text-gray-400">ไม่พบรายการตารางสอนที่นำมาสร้างคอร์สได้</div>'}
        </div>
      </div>
      <div class="flex flex-col-reverse gap-2 border-t border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p data-review-selected class="text-xs text-gray-500">เลือกสร้างแล้ว 0 คอร์ส</p>
        <div class="flex gap-2"><button type="button" data-review-cancel class="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 sm:flex-none">ยกเลิก</button>
          <button type="button" data-review-create ${E?"":"disabled"} class="flex-1 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:flex-none">ยืนยันสร้างคอร์สที่เลือก</button></div>
      </div>`;const Q=()=>s.remove();s.querySelector("[data-review-close]").addEventListener("click",Q),s.querySelector("[data-review-cancel]").addEventListener("click",Q);const xe=s.querySelector("[data-review-selected]"),re=s.querySelector("[data-review-create]"),fe=()=>{const c=s.querySelectorAll("[data-review-select]:checked").length;xe.textContent=`เลือกสร้างแล้ว ${c} คอร์ส`,re.disabled=c===0};s.querySelectorAll("[data-review-select]").forEach(c=>c.addEventListener("change",fe)),fe(),re.addEventListener("click",async()=>{var se;const c=[...s.querySelectorAll("[data-review-select]:checked")].map(V=>Number(V.dataset.reviewSelect)),F=P.filter(V=>c.includes(V.id)&&V.status==="ready");if(!F.length)return;re.disabled=!0,re.textContent="กำลังสร้างคอร์ส...";let Z=0,ie=0;for(const V of F)try{await hs(V.payload),Z+=1}catch{ie+=1}Q(),ie?Y(`สร้างคอร์สสำเร็จ ${Z} รายการ · ไม่สำเร็จ ${ie} รายการ`,"warning"):Y(`สร้างคอร์สจากตารางสอนสำเร็จ ${Z} รายการ`,"success"),(se=window._navTo)==null||se.call(window,"my-courses")})}catch(u){s.querySelector("section").innerHTML=`<div class="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4"><h2 class="font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2><button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 text-xl text-gray-500">×</button></div><div class="flex flex-1 items-center justify-center p-8 text-center text-sm text-red-500">โหลดข้อมูลตารางสอนไม่สำเร็จ: ${l(je(u))}</div>`,s.querySelector("[data-review-close]").addEventListener("click",()=>s.remove())}}async function sa(e,s,t=null,d={}){const f=!!d.cloneFrom;We("my-courses"),Ue(f?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[k,b,u,S,A,L]=await Promise.all([et().catch(()=>[]),Xt().catch(()=>[]),t&&!f?fs(t.id).catch(o=>(Y("โหลดครูร่วมสอนไม่สำเร็จ: "+je(o),"error"),null)):Promise.resolve([]),Kt().catch(()=>[]),De().catch(()=>({})),vs().catch(()=>(Y("โหลดรายชื่อหัวหน้ากลุ่มย่อยไม่สำเร็จ ยังพิมพ์ค้นหาครูศาสนาได้","warning"),[]))]);if(u===null){Me(`<div class="p-6 text-center text-gray-600">โหลดข้อมูลคอร์สไม่ครบ กรุณาเปิดคอร์สใหม่อีกครั้ง
      <button class="block mx-auto mt-4 text-indigo-600" onclick="window._goBack()">กลับ</button></div>`);return}let T=u??[];const h=[...new Map(k.map(o=>[o.id,o])).values()],m=(e==null?void 0:e.category)??"",_=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],v=m?_.filter(o=>o.cat===m):_,y=Number(A.semester),O=S.filter(o=>![1,2].includes(y)||o.semester==null||Number(o.semester)===y).filter(o=>v.some(r=>r.value===o.subject_group)),C=o=>o==="ACDMVOC",M=o=>C(o)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",X=o=>ze(o)?"หัวหน้ากลุ่มย่อย (Penyelia)":C(o)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",P=o=>C(o)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",E=o=>ze(o)?"เลือกหัวหน้ากลุ่มย่อย หรือพิมพ์ค้นหาจากรายชื่อครูศาสนา":C(o)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",H=o=>ze(o)?"ศาสนา":o,te=(t==null?void 0:t.subject_group)??"";let le=H(te);const oe=o=>Ys(h,o),ye=(o,r="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+o.map(p=>`<option value="${p.dept_code}" ${p.dept_code===r?"selected":""}>${p.dept_name}</option>`).join(""),Q=(o="")=>{const r=document.getElementById("cf-subg").value;return ze(r)?Dt(b,L,o):[...new Set(oe(r).map(p=>p.head_name).filter(Boolean))].filter(p=>p.toLowerCase().includes(o.toLowerCase()))},xe=new Map(O.map(o=>[String(o.id),o])),re=xe.get(String((t==null?void 0:t.catalog_id)??"")),fe=(t==null?void 0:t.dept)||bt(re)||"",c=(o="",r="")=>O.filter(p=>(!o||p.subject_group===o)&&Qs(p,r,h)),F=(o="",r="",p="")=>r?['<option value="">— เลือกรายวิชาภายใต้กลุ่มสาระ —</option>',...c(o,r).map(i=>{const x=i.subject_code?i.subject_code+" · ":"",g=i.grade_level?" · "+i.grade_level:"",w=i.subject_group?" · "+i.subject_group:"",J=x+i.subject_name+g+w,ae=String(p??"")===String(i.id)?" selected":"";return'<option value="'+i.id+'"'+ae+">"+l(J)+"</option>"})].join(""):'<option value="">— เลือกกลุ่มสาระก่อน —</option>';Me(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${f?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์สวิชา"}</h2>
    </div>
    ${f?`
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
          <select id="cf-subg" class="${Le}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${v.map(o=>`<option value="${o.value}" ${(t==null?void 0:t.subject_group)===o.value?"selected":""}>${o.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${M(te)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${Le}">
            ${ye(oe(te),fe)}
          </select>
        </div>
        <!-- รายวิชาภายใต้กลุ่มสาระ -->
        <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
          <label class="block text-sm font-semibold text-blue-900 mb-1">รายวิชาภายใต้กลุ่มสาระ</label>
          <select id="cf-catalog" ${Le} ${fe?"":"disabled"}>
            ${F(te,fe,t==null?void 0:t.catalog_id)}
          </select>
          <input type="hidden" id="cf-catalog-id" value="${(t==null?void 0:t.catalog_id)??""}" />
          <p class="text-xs text-blue-700/70 mt-1">เลือกรายวิชาจากกลุ่มสาระที่เลือก ระบบจะเติมข้อมูลให้ แต่ครูยังแก้ไขรายละเอียดทุกช่องได้</p>
        </div>
        <!-- ชื่อวิชา + รหัสวิชา -->
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 sm:col-span-1">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชื่อวิชา <span class="text-red-400">*</span>
            </label>
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${me}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${me}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${Le}">
              ${Os.map(o=>`<option value="${o}">${o}</option>`).join("")}
            </select>
          </div>
          <div id="cf-grade-single-wrapper">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${Le}">
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
                class="${me}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${me}" autocomplete="off" />
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
            maxlength="12" class="${me}" />
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
                class="${me} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${me} bg-white" autocomplete="off" />
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
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${X(te)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${me} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${E(te)}</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${f?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}
          </button>
        </div>
      </form>
    </div>
  </div>`);const Z=t&&(t.grade_level&&t.grade_level.includes(",")||T.length>0);function ie(){const o=document.getElementById("cf-coteach-selected-list");o&&(o.innerHTML=T.map(r=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${r.full_name} (${r.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${r.id}">✕</button>
      </span>
    `).join(""),o.querySelectorAll(".remove-coteacher-btn").forEach(r=>{r.addEventListener("click",()=>{const p=Number(r.dataset.id);T=T.filter($=>$.id!==p),ie()})}))}function se(o,r){var $;($=document.getElementById("coteach-explain-modal"))==null||$.remove();const p=document.createElement("div");p.id="coteach-explain-modal",p.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",p.innerHTML=`
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
      </div>`,document.body.appendChild(p),p.querySelector("#cf-explain-cancel").addEventListener("click",()=>{p.remove(),r()}),p.querySelector("#cf-explain-confirm").addEventListener("click",()=>{p.remove(),o()})}function V(o,r){var $;($=document.getElementById("coteach-confirm-modal"))==null||$.remove();const p=document.createElement("div");p.id="coteach-confirm-modal",p.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",p.innerHTML=`
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
      </div>`,document.body.appendChild(p),p.querySelector("#cf-off-cancel").addEventListener("click",()=>{p.remove(),r()}),p.querySelector("#cf-off-confirm").addEventListener("click",()=>{p.remove(),o()})}function ee(o,r=""){const p=xt[o]??[],$=document.getElementById("cf-grade-checkboxes");if(!$)return;const i=r?r.split(",").map(x=>x.trim()):[];$.innerHTML=p.map(x=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${x}" ${i.includes(x)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${x}</span>
      </label>
    `).join("")}const de=document.getElementById("cf-catalog"),z=(o,r,p="")=>{de&&(de.innerHTML=F(o,r,p),de.disabled=!r,p&&(de.value=String(p)))},pe=o=>{if(!o)return;const r=document.getElementById("cf-subg"),p=document.getElementById("cf-dept"),$=document.getElementById("cf-name"),i=document.getElementById("cf-code"),x=document.getElementById("cf-credit"),g=document.getElementById("cf-grade"),w=document.getElementById("cf-dept-head"),J=v.some(be=>be.value===o.subject_group)?o.subject_group:"";if(J&&r.value!==J&&(r.value=J,r.dispatchEvent(new Event("change"))),$&&($.value=o.subject_name??""),i&&(i.value=o.subject_code??""),x&&o.credit!=null){const be=String(o.credit);[...x.options].some(ge=>ge.value===be)||x.appendChild(new Option(be,be)),x.value=be}g&&o.grade_level&&([...g.options].some(be=>be.value===o.grade_level)||g.appendChild(new Option(o.grade_level,o.grade_level)),g.value=o.grade_level);const ae=bt(o);p&&ae&&oe(J).some(be=>be.dept_code===ae)&&(p.value=ae,p.dispatchEvent(new Event("change"))),w&&o.learning_area&&!ze(J)&&(w.value=o.learning_area),de&&(document.getElementById("cf-catalog-id").value=o.id,z(r.value,(p==null?void 0:p.value)||"",o.id))},K={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};de==null||de.addEventListener("change",o=>{const r=o.target.value;document.getElementById("cf-catalog-id").value=r,pe(xe.get(String(r)))}),document.getElementById("cf-subg").addEventListener("change",o=>{const r=o.target.value;document.getElementById("cf-dept-label").firstChild.textContent=M(r)+" ",document.getElementById("cf-head-label").textContent=X(r),document.getElementById("cf-head-hint").textContent=E(r);const p=document.getElementById("cf-dept"),$=p.value;p.innerHTML=ye(oe(r)),p.options[0].textContent=P(r),$&&H(r)===le&&(p.value=$),le=H(r),document.getElementById("cf-dept-head").value="",document.getElementById("cf-head-dropdown").classList.add("hidden"),z(r,p.value,"");const i=document.getElementById("cf-grade"),x=xt[r]??[];i.innerHTML=x.length?['<option value="">— เลือกชั้นปี —</option>',...x.map(g=>`<option value="${g}">${g}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=K[r]??"",ee(r)}),document.getElementById("cf-dept").addEventListener("change",o=>{var g;const r=o.target.value,p=document.getElementById("cf-subg").value,$=((g=document.getElementById("cf-catalog-id"))==null?void 0:g.value)||"";z(p,r,$);const i=ze(p)?Dt(b,L):[...new Set(k.filter(w=>w.category===zs(p)&&w.dept_code===r&&w.head_name).map(w=>w.head_name))],x=document.getElementById("cf-dept-head");i.length===1?x.value=i[0]:i.length>1?(x.value="",ue(i)):x.value=""});const q=document.getElementById("cf-dept-head"),U=document.getElementById("cf-head-dropdown");function ue(o){U.innerHTML=o.map(r=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${l(r)}">${l(r)}</div>`).join(""),U.querySelectorAll(".head-opt").forEach(r=>r.addEventListener("mousedown",p=>{p.preventDefault(),q.value=r.dataset.val,U.classList.add("hidden")})),U.classList.toggle("hidden",!o.length)}q.addEventListener("input",()=>{const o=q.value.toLowerCase();ue(Q(o))}),q.addEventListener("focus",()=>{const o=ze(document.getElementById("cf-subg").value)?"":q.value.toLowerCase();ue(Q(o))}),q.addEventListener("blur",()=>setTimeout(()=>U.classList.add("hidden"),150));const he=document.getElementById("cf-teacher-code"),_e=document.getElementById("cf-teacher-search"),$e=document.getElementById("cf-teacher-dropdown"),Ce=document.getElementById("cf-teacher-selected"),Oe=document.getElementById("cf-teacher-name"),Re=document.getElementById("cf-teacher-clear"),a=document.getElementById("cf-teacher-id"),I=document.getElementById("cf-phone");function N(o){if(!o){a.value="",he.value="",_e.value="",Ce.classList.add("hidden"),Ce.classList.remove("flex"),I.value="";return}a.value=o.id,he.value=o.teacher_code??"",_e.value=o.full_name??"",Oe.textContent=`${o.full_name}${o.teacher_code?` (${o.teacher_code})`:""}`,Ce.classList.remove("hidden"),Ce.classList.add("flex"),I.value=ut(o.phone??""),$e.classList.add("hidden")}function j(o){$e.innerHTML=o.length?o.map(r=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${r.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${r.teacher_code??""}</span>
            <span class="font-medium">${r.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',$e.querySelectorAll(".t-opt").forEach(r=>r.addEventListener("mousedown",p=>{p.preventDefault(),N(b.find($=>String($.id)===r.dataset.id))})),$e.classList.remove("hidden")}if(e&&!t){const o=b.find(r=>r.id===e.id);o&&N(o)}he.oninput=()=>{const o=he.value.trim().toLowerCase();if(!o){N(null);return}const r=b.find(p=>(p.teacher_code??"").toLowerCase()===o);if(r)N(r);else{const p=b.filter($=>($.teacher_code??"").toLowerCase().startsWith(o));p.length&&j(p)}},_e.onfocus=()=>j(b),_e.oninput=()=>{const o=_e.value.toLowerCase();j(o?b.filter(r=>r.full_name.toLowerCase().includes(o)||(r.teacher_code??"").toLowerCase().includes(o)):b)},_e.onblur=()=>setTimeout(()=>$e.classList.add("hidden"),150),Re.addEventListener("click",()=>N(null));const B=document.getElementById("cf-toggle-coteach"),R=document.getElementById("cf-grade-single-wrapper"),G=document.getElementById("cf-grade-multi-container"),D=document.getElementById("cf-coteach-section");B.addEventListener("change",o=>{o.target.checked?(B.checked=!1,se(()=>{B.checked=!0,R.classList.add("hidden"),G.classList.remove("hidden"),D.classList.remove("hidden");const p=document.getElementById("cf-subg").value;ee(p),ie()},()=>{B.checked=!1})):V(()=>{B.checked=!1,R.classList.remove("hidden"),G.classList.add("hidden"),D.classList.add("hidden"),T=[]},()=>{B.checked=!0})});const ce=document.getElementById("cf-coteach-code"),we=document.getElementById("cf-coteach-search"),Se=document.getElementById("cf-coteach-dropdown");function W(o){if(!o)return;if(T.some(p=>p.id===o.id)){Y("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),ce.value="",we.value="";return}const r=Number(a.value);if(o.id===r){Y("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),ce.value="",we.value="";return}T.push(o),ie(),ce.value="",we.value="",Se.classList.add("hidden")}function n(o){Se.innerHTML=o.length?o.map(r=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${r.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${r.teacher_code??""}</span>
            <span class="font-medium">${r.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',Se.querySelectorAll(".co-t-opt").forEach(r=>r.addEventListener("mousedown",p=>{p.preventDefault(),W(b.find($=>String($.id)===r.dataset.id))})),Se.classList.remove("hidden")}if(ce.oninput=()=>{const o=ce.value.trim().toLowerCase();if(!o)return;const r=b.find(p=>(p.teacher_code??"").toLowerCase()===o);if(r)W(r);else{const p=b.filter($=>($.teacher_code??"").toLowerCase().startsWith(o));p.length&&n(p)}},we.onfocus=()=>n(b),we.oninput=()=>{const o=we.value.toLowerCase();n(o?b.filter(r=>r.full_name.toLowerCase().includes(o)||(r.teacher_code??"").toLowerCase().includes(o)):b)},we.onblur=()=>setTimeout(()=>Se.classList.add("hidden"),150),I.addEventListener("input",o=>{o.target.value=ut(o.target.value)}),t){if(document.getElementById("cf-name").value=t.subject_name??"",document.getElementById("cf-code").value=t.subject_code??"",t.credit&&(document.getElementById("cf-credit").value=String(t.credit)),t.subject_group){const o=document.getElementById("cf-subg");o.value=t.subject_group,document.getElementById("cf-dept").innerHTML=ye(oe(t.subject_group));const r=document.getElementById("cf-grade"),p=xt[t.subject_group]??[];r.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...p.map($=>`<option value="${$}">${$}</option>`)].join(""),t.grade_level&&(r.value=t.grade_level),document.getElementById("cf-code-hint").textContent=K[t.subject_group]??""}if(t.dept){const o=document.getElementById("cf-dept");o.value=t.dept,z(t.subject_group??"",t.dept,t.catalog_id??"")}if(t.learning_area)q.value=t.learning_area;else if(t.dept){const o=ze(t.subject_group)?null:lt(k,t.subject_group,t.dept);q.value=(o==null?void 0:o.head_name)??""}if(t.teacher_id){const o=b.find(r=>r.id===t.teacher_id);o&&N(o)}else if(e){const o=b.find(r=>r.id===e.id);o&&N(o)}if(Z){B.checked=!0,R.classList.add("hidden"),G.classList.remove("hidden"),D.classList.remove("hidden");const o=t.subject_group;ee(o,t.grade_level),ie()}}document.getElementById("course-form").addEventListener("submit",async o=>{o.preventDefault();const r=document.getElementById("cf-submit"),p=document.getElementById("cf-subg").value,$=document.getElementById("cf-dept").value,i=document.getElementById("cf-name").value.trim(),x=document.getElementById("cf-code").value.trim(),g=parseFloat(document.getElementById("cf-credit").value)||null;let w="";if(B.checked){const ge=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!ge.length){Y("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}w=ge.map(ve=>ve.value).join(", ")}else w=document.getElementById("cf-grade").value;const J=a.value,ae=I.value.trim(),be=q.value.trim();if(!p||!i||!w){Y("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}r.disabled=!0,r.textContent="กำลังบันทึก...";try{const ge=J?Number(J):(e==null?void 0:e.id)??null,ve=B.checked?T.map(Ie=>Ie.id):[];await s({catalog_id:document.getElementById("cf-catalog-id").value?Number(document.getElementById("cf-catalog-id").value):null,subject_group:p,dept:$||null,subject_name:i,subject_code:x||null,credit:g,grade_level:w,teacher_id:ge,learning_area:be||null},ve),ae&&ge&&ge===(e==null?void 0:e.id)&&await St(e.id,{phone:ae}).catch(()=>{}),Y("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(ge){Y("บันทึกไม่สำเร็จ: "+je(ge),"error")}finally{r.disabled=!1,r.textContent=f?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function oa(e,s=[],t){We("setup"),Ue("ตั้งค่าโปรไฟล์","registration");const[d,f,k,b]=await Promise.all([et().catch(()=>[]),Zt().catch(()=>[]),es().catch(()=>[]),De().catch(()=>({}))]),u=parseInt(b.academicYear??2568),S=parseInt(b.semester??1),A=[...new Map(d.map(v=>[`${v.category}:${v.dept_code}`,v])).values()],L=(v,y="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(v?A.filter(C=>!C.category||C.category===v):A).map(C=>`<option value="${C.dept_code}" ${C.dept_code===y?"selected":""}>${C.dept_name}</option>`).join(""),T=f,h=k,m=await ts(u,S).catch(()=>[]);if(Me(`<div class="max-w-lg mx-auto animate-fade">
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
            class="${me}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${Le}">
            ${L(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${Le}">
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
            ${["สามัญ","ศาสนา"].map(v=>`
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${(e==null?void 0:e.category)===v?"border-emerald-400 bg-emerald-50":"border-gray-200"}">
              <input type="radio" name="setup-category" value="${v}" ${(e==null?void 0:e.category)===v?"checked":""}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${v}</span>
            </label>`).join("")}
          </div>
        </div>
        ${ds({prefix:"setup",samaiRooms:T,religionRooms:h,homeroomRooms:s,assignments:m,teacherId:e==null?void 0:e.id,academicYear:u,semester:S})}
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const _=()=>{var C;const v=(C=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:C.value,y=document.getElementById("setup-room-samai-wrap"),O=document.getElementById("setup-room-religion-wrap");v==="สามัญ"?(y==null||y.classList.remove("hidden"),O==null||O.classList.add("hidden")):v==="ศาสนา"?(O==null||O.classList.remove("hidden"),y==null||y.classList.add("hidden")):(y==null||y.classList.remove("hidden"),O==null||O.classList.remove("hidden"))};_(),cs(),document.querySelectorAll('input[name="setup-category"]').forEach(v=>v.addEventListener("change",()=>{var M;_();const y=(M=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:M.value,O=document.getElementById("setup-dept"),C=O==null?void 0:O.value;O&&(O.innerHTML=L(y,C))})),document.getElementById("setup-phone").addEventListener("input",v=>{const y=v.target.value.replace(/\D/g,"").slice(0,10);v.target.value=y.length<=3?y:y.length<=6?`${y.slice(0,3)} ${y.slice(3)}`:`${y.slice(0,3)} ${y.slice(3,6)} ${y.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async v=>{var O;v.preventDefault();const y=document.getElementById("setup-save");y.disabled=!0,y.textContent="กำลังบันทึก...";try{const C=document.getElementById("setup-dept").value||null,M=document.getElementById("setup-subg").value||null,X=((O=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:O.value)||null,P=document.getElementById("setup-phone").value.trim()||null,E=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(ye=>ye.value),H=[...document.querySelectorAll('input[name="setup-room-religion"]:checked')].map(ye=>ye.value);await St(e.id,{dept:C,subject_group:M,category:X,phone:P});const{upsertHomeroomTeacher:te,deleteHomeroomTeacher:le}=await Ne(async()=>{const{upsertHomeroomTeacher:ye,deleteHomeroomTeacher:Q}=await import("./api-CQwFwlFA.js");return{upsertHomeroomTeacher:ye,deleteHomeroomTeacher:Q}},__vite__mapDeps([0,1,2,3,4])),oe=async(ye,Q)=>{const xe=s.filter(re=>re.category===ye&&Number(re.academic_year)===u&&Number(re.semester)===S);await Promise.all(xe.filter(re=>!Q.includes(re.main_room)).map(re=>le(re.id).catch(()=>{}))),await Promise.all(Q.map(re=>te({teacher_id:e.id,main_room:re,category:ye,academic_year:u,semester:S})))};await Promise.all([oe("สามัญ",E),oe("ศาสนา",H)]),Y("บันทึกโปรไฟล์สำเร็จ ✅","success"),t&&await t(e.profile_id)}catch(C){Y("บันทึกไม่สำเร็จ: "+je(C),"error")}finally{y.disabled=!1,y.textContent="บันทึกและเริ่มใช้งาน →"}})}async function aa(e,s=[],t){var _;We("profile"),Ue("โปรไฟล์ของฉัน","registration");const[d,f,k]=await Promise.all([et().catch(()=>[]),Zt().catch(()=>[]),es().catch(()=>[])]),b=await De().catch(()=>({})),u=parseInt(b.academicYear??new Date().getFullYear()+543),S=parseInt(b.semester??1),A=await ts(u,S).catch(()=>[]),L=e==null?void 0:e.category,T=L?d.filter(v=>!v.category||v.category===L):d,h=[...new Map(T.map(v=>[v.dept_code,v])).values()],m=ut((e==null?void 0:e.phone)??"");Me(`<div class="max-w-lg mx-auto animate-fade">
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
              class="${me} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${(e==null?void 0:e.category)??"—"}"
              class="${me} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${(e==null?void 0:e.full_name)??""}" class="${me}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||""}" class="${me}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${(e==null?void 0:e.username)??""}" placeholder="เช่น hambal.waji"
            class="${me} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${m}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${me}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${h.length>0?`<select id="prof-dept" class="${Le} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${h.map(v=>`<option value="${v.dept_code}" ${v.dept_code===(e==null?void 0:e.dept)?"selected":""}>${v.dept_name} (${v.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${me} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${Le}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${(e==null?void 0:e.subject_group)==="ACDM"?"selected":""}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${(e==null?void 0:e.subject_group)==="AGM"?"selected":""}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${(e==null?void 0:e.subject_group)==="ACDMVOC"?"selected":""}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${(e==null?void 0:e.subject_group)==="AGMVOC"?"selected":""}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        ${ds({prefix:"prof",samaiRooms:f,religionRooms:k,homeroomRooms:s,assignments:A,teacherId:e==null?void 0:e.id,academicYear:u,semester:S})}

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
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${me}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${me}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`),window._profileFocus==="password"&&(window._profileFocus=null,requestAnimationFrame(()=>{const v=document.getElementById("prof-pw-new");v==null||v.scrollIntoView({behavior:"smooth",block:"center"}),v==null||v.focus()})),e&&(cs(),document.getElementById("prof-phone").addEventListener("input",v=>{v.target.value=ut(v.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",v=>{const y=v.target.files[0];y&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(y)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async v=>{var C;v.preventDefault();const y=document.getElementById("prof-save"),O=document.getElementById("prof-name").value.trim();if(!O){Y("กรุณากรอกชื่อ-นามสกุล","warning");return}y.disabled=!0,y.textContent="กำลังบันทึก...";try{const M=document.getElementById("prof-dept"),X=document.getElementById("prof-dept-txt"),P=document.getElementById("prof-subg"),E=((X==null?void 0:X.value.trim().toUpperCase())||(M==null?void 0:M.value)||"").trim()||null,H=document.getElementById("prof-username").value.trim().toLowerCase(),te=document.getElementById("prof-email").value.trim();if(H&&!/^[a-z0-9._-]{3,32}$/.test(H)){Y("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),y.disabled=!1,y.textContent="บันทึก";return}const le={full_name:O,phone:document.getElementById("prof-phone").value.trim()||null,dept:E,subject_group:(P==null?void 0:P.value)||null,username:H||null,login_email:te||null},oe=(C=document.getElementById("prof-photo-file").files)==null?void 0:C[0];oe&&(le.image_url=await Vs(e.id,oe)),await St(e.id,le);const{upsertHomeroomTeacher:ye,deleteHomeroomTeacher:Q,getSystemConfig:xe}=await Ne(async()=>{const{upsertHomeroomTeacher:se,deleteHomeroomTeacher:V,getSystemConfig:ee}=await import("./api-CQwFwlFA.js");return{upsertHomeroomTeacher:se,deleteHomeroomTeacher:V,getSystemConfig:ee}},__vite__mapDeps([0,1,2,3,4])),re=await xe().catch(()=>({})),fe=parseInt(re.academicYear??new Date().getFullYear()+543),c=parseInt(re.semester??1),F=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(se=>se.value),Z=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(se=>se.value),ie=async(se,V)=>{const ee=s.filter(de=>de.category===se&&Number(de.academic_year)===fe&&Number(de.semester)===c);await Promise.all(ee.filter(de=>!V.includes(de.main_room)).map(de=>Q(de.id).catch(()=>{}))),await Promise.all(V.map(de=>ye({teacher_id:e.id,main_room:de,category:se,academic_year:fe,semester:c})))};await Promise.all([ie("สามัญ",F),ie("ศาสนา",Z)]),Y("บันทึกโปรไฟล์สำเร็จ","success"),t&&await t(e.profile_id)}catch(M){Y("บันทึกไม่สำเร็จ: "+je(M),"error")}finally{y.disabled=!1,y.textContent="บันทึก"}}),(_=document.getElementById("prof-pw-save"))==null||_.addEventListener("click",async()=>{const v=document.getElementById("prof-pw-new").value,y=document.getElementById("prof-pw-confirm").value;if(!v){Y("กรุณากรอกรหัสผ่านใหม่","warning");return}if(v.length<6){Y("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(v!==y){Y("รหัสผ่านไม่ตรงกัน","warning");return}const O=document.getElementById("prof-pw-save");O.disabled=!0,O.textContent="⏳ กำลังบันทึก...";try{const{error:C}=await vt.auth.updateUser({password:v});if(C)throw C;Y("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch(C){Y("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+je(C),"error")}finally{O.disabled=!1,O.textContent="บันทึกรหัสผ่านใหม่"}}))}const ms="pp5_exam_docs_draft_v1",Rt="pp5_exam_docs_pending_class_id",us="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",to="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",mt=27,at=mt*2,bs=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],ht={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},nt={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},so=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let ne={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...nt},loadingStudents:!1},yt=[];const oo=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},ao=()=>{try{return JSON.parse(localStorage.getItem(ms)||"{}")||{}}catch{return{}}},rt=()=>{localStorage.setItem(ms,JSON.stringify(ne.form))},no=()=>{let e="";try{e=sessionStorage.getItem(Rt)||"",sessionStorage.removeItem(Rt)}catch{}const s=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,s?String(s):""},gt=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},gs=e=>[...e||[]].sort((s,t)=>String(s.student_code||"").localeCompare(String(t.student_code||""),"th",{numeric:!0})),Lt=e=>{if(!e)return"";const s=new Date(`${e}T00:00:00`);return Number.isNaN(s.getTime())?"":`${s.getDate()} เดือน ${bs[s.getMonth()]} พ.ศ. ${s.getFullYear()+543}`},lo=e=>{if(!e)return{day:"",month:"",year:""};const s=new Date(`${e}T00:00:00`);return Number.isNaN(s.getTime())?{day:"",month:"",year:""}:{day:String(s.getDate()),month:bs[s.getMonth()],year:String(s.getFullYear()+543)}},It=e=>{const s=e.startTime||"",t=e.endTime||"";return s&&t?`${s} - ${t}`:s||t||""},qt=(e,s)=>e?s.key==="th"?`${e} น.`:e:"",ro=e=>{const s=String(e||"").trim();if(!s)return{room:"",name:""};const t=s.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(t)return{room:t[1],name:t[2].trim()};const[d,...f]=s.split(/\s+/);return{room:d,name:f.join(" ").trim()}},Ve=e=>{const s=String(e||"").trim().toUpperCase();return s==="ชาย"||s==="M"||s==="MALE"?"M":s==="หญิง"||s==="F"||s==="W"||s==="FEMALE"?"F":""},At=()=>{const e=new Set((ne.students||[]).map(s=>Ve(s.gender)).filter(Boolean));return e.has("M")&&e.has("F")},io=()=>{const e=ne.form,s=ne.students||[];if(e.studentScope!=="split"||!At())return[s];const t=s.filter(f=>Ve(f.gender)==="M"),d=s.filter(f=>Ve(f.gender)==="F");return e.splitPrintMode==="both"?[t,d]:[e.splitGender==="F"?d:t]},co=()=>{const e=ne.form;if(e.studentScope!=="split"||!At())return"";const s=ne.students.filter(d=>Ve(d.gender)==="M").length,t=ne.students.filter(d=>Ve(d.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${s} + หญิง ${t})`:e.splitGender==="F"?` (เฉพาะหญิง ${t} คน)`:` (เฉพาะชาย ${s} คน)`},po=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),Ft=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),Ht=(e,s,t,d=t.loading,f=0)=>{const k=e||[],b=k.map((S,A)=>`
    <tr>
      <td>${s+A}</td>
      <td>${l(S.student_code||"")}</td>
      <td class="nm">${l(S.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),u=Array.from({length:Math.max(0,f-k.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return b||u?b+u:`<tr><td colspan="4" class="empty-students">${l(d)}</td></tr>`},mo=(e,s,t,d,f,k)=>{const b=e.slice(s*at,(s+1)*at),u=b.slice(0,mt),S=b.slice(mt,at),A=s*at+1,L=A+mt;return`
    <div class="exam-doc-paper ${k} sign-list ${s>0?"exam-doc-page-break":""}">
      ${_t(t.signListTitle)}
      ${$t(t,d,f)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${l(t.studentCode)}</th>
                <th>${l(t.studentName)}</th>
                <th style="width:80px;">${l(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${Ht(u,A,t)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${l(t.studentCode)}</th>
                <th>${l(t.studentName)}</th>
                <th style="width:80px;">${l(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${Ht(S,L,t," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${wt(t,f)}
    </div>`},zt=(e,s)=>s?`${e}. .................................................... <span class="textColor">(${l(s)})</span>`:`${e}. ...........................................................................................`,wt=(e,s)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${l(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>${zt(1,s.invigilator1)}</div>
      </div>
      <div class="examiner-signature">
        <div>${zt(2,s.invigilator2)}</div>
      </div>
    </div>
  </div>`,_t=e=>`
  <div class="header">
    <img src="${us}" alt="">
    <h2>${l(e)}</h2>
    <img src="${to}" alt="">
  </div>`,$t=(e,s,t)=>`
  <div class="infoG">
    <div class="info1">
      ${l(e.examType)}: <span class="textColor">${l(t.examType||"")}</span>
      ${l(e.term)}: <span class="textColor">${l(t.semester||"")}</span>
      ${l(e.year)}: <span class="textColor">${l(t.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${l(e.subject)}: <span class="textColor">${l(s.subjectName||"")}</span>
      ${l(e.subjectCode)}: <span class="textColor">${l(s.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${l(e.examDate)}: <span class="textColor">${l(t.examDateLabel||Lt(t.examDate))}</span>
      ${l(e.examTime)}: <span class="textColor">${l(t.examTimeLabel||It(t))}</span>
    </div>
    <div class="info4">
      ${l(e.teacher)}: <span class="textColor">${l(s.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${l(e.classLevel)}: <span class="textColor">${l(s.className||"")}</span>
    </div>
  </div>`,uo=e=>`
  <div class="header-single">
    <img src="${us}" alt="">
    <h2>${l(e)}</h2>
  </div>`,Gt=(e,s)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${l(s||"")}</span>
  </div>`,bo=(e,s,t,d)=>{const[f,k]=String(d.room||"").split("/");return`
  <div class="env-line">
    ${l(e.envTerm)} <span class="textColor env-blank-sm">${l(t.semester||"")}</span>
    ${l(e.envYear)} <span class="textColor env-blank-sm">${l(t.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${l(e.envSubject)} <span class="textColor env-blank-lg">${l(s.subjectName||"")}</span>
    ${l(e.envClass)} <span class="textColor env-blank-sm">${l(f||"")}</span> / <span class="textColor env-blank-sm">${l(k||"")}</span>
  </div>
  <div class="env-line">
    ${l(e.envTeacher)} <span class="textColor env-blank-lg">${l(s.teacherName||"")}</span>
  </div>
  <div class="env-line env-invigilator-heading">${l(e.envInvigilatorHeading)}:-</div>
  ${Gt(1,t.invigilator1)}
  ${Gt(2,t.invigilator2)}
  <table class="envelope-summary-table">
    <tbody>
      <tr><th>${l(e.envDate)}</th><td class="textColor">${l(t.examDateLabel||Lt(t.examDate))}</td></tr>
      <tr><th>${l(e.envPeriod)}</th><td class="textColor">${l(t.examTimeLabel||It(t))}</td></tr>
      <tr><th>${l(e.envGroup)}</th><td class="textColor">${l(t.classPart||"")}</td></tr>
      <tr><th>${l(e.envRoomNo)}</th><td class="textColor">${l(t.examRoom||"")}</td></tr>
    </tbody>
  </table>
  <div class="env-footer-dept">${l(e.envFooterDept)}</div>`},go=(e,s)=>{var C,M;const t=ne.form,d=ht[t.lang]||ht.th,f=ne.selectedClass||{},k=gt(f),b=gs(e),u=b.length,S=lo(t.examDate),A=(C=ne.teacher)!=null&&C.phone?` (${ne.teacher.phone})`:"",L={className:f.class_name||"",subjectName:t.subjectLabel||k.subject_name||"",subjectCode:k.subject_code||"",teacherName:(((M=ne.teacher)==null?void 0:M.full_name)||"")+A},T=Math.max(1,Math.ceil(b.length/at)),h=d.dir==="rtl"?"rtl":"ltr",m=s==="all"||s==="portrait",_=s==="all"||s==="envelope",v=s==="envelope"?" envelope-only":s==="portrait"?" portrait-only":"",y=t.examAmount||String(u),O=ro(L.className);return`
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
        --exam-font: ${d.font};
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
    <div id="exam-doc-print-area" class="${v.trim()}">
    ${m?`
    ${Array.from({length:T},(X,P)=>mo(b,P,d,L,t,h)).join("")}

    <div class="exam-doc-paper ${h} exam-doc-page-break">
      ${_t(d.examCoverTitle)}
      ${$t(d,L,t)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${l(d.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${u}</span> ${l(d.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${l(d.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${l(d.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${l(d.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${l(d.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${l(d.no)}</th>
            <th>${l(d.studentCode)}</th>
            <th>${l(d.absentName)}</th>
            <th>${l(d.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${Ft(15)}
        </tbody>
      </table>
      ${wt(d,t)}
    </div>

    <div class="exam-doc-paper ${h} exam-doc-page-break">
      ${_t(d.absentTitle)}
      ${$t(d,L,t)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${l(d.no)}</th>
            <th>${l(d.studentCode)}</th>
            <th>${l(d.absentName)}</th>
            <th>${l(d.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${Ft(15)}
        </tbody>
      </table>
      ${wt(d,t)}
    </div>
    `:""}

    ${_?t.lang==="th"?`
    <div class="exam-doc-paper ${h} landscape ${m?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${l(d.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${l(d.envelopeSubject)} <span class="textColor">${l(L.subjectName)}</span> ${l(d.subjectCode)} <span class="textColor">${l(L.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${t.examDateLabel?`${l(d.envelopeDate)} <span class="textColor">${l(t.examDateLabel)}</span>`:`${l(d.envelopeDate)} <span class="textColor">${l(S.day)}</span> ${l(d.envelopeMonth)} <span class="textColor">${l(S.month)}</span> ${l(d.envelopeYear)} <span class="textColor">${l(S.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${t.examTimeLabel?`${l(d.envelopeTime)} <span class="textColor">${l(t.examTimeLabel)}</span>`:`${l(d.envelopeTime)} <span class="textColor">${l(qt(t.startTime,d))}</span> ${l(d.envelopeTo)} <span class="textColor">${l(qt(t.endTime,d))}</span>`}
        </div>
        <div class="infoNP4">
          ${l(d.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${l(O.room)}</span>${O.name?`<span class="exam-envelope-class-name">${l(O.name)}</span>`:""}</span> ${l(d.envelopeStudents)} <span class="textColor">${u}</span> ${l(d.studentUnit)} ${l(d.examAmount)} <span class="textColor">${l(y)}</span> ${l(d.examUnit)}
        </div>
        <div class="infoNP5">
          ${l(d.envelopeTeacher)} <span class="textColor">${l(L.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${h} envelope-religious ${m?"exam-doc-page-break":""}">
      ${uo(d.envSchoolName)}
      ${bo(d,L,t,O)}
    </div>
    `:""}
    </div>`},Tt=(e="all")=>{const t=io().map(S=>go(S,e));if(t.length<=1)return t[0]||"";const d=t[0].match(/<style[\s\S]*?<\/style>/),f=d?d[0]:"",k=t[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),b=k?k[1]:"",u=t.map(S=>{const A=S.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return A?A[1]:""});return`${f}
<div id="exam-doc-print-area" class="${b}">${u.join("")}</div>`},xo=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${Tt("all")}
</body>
</html>`;as(e,{autoprint:!0})},fo=()=>{const e=ne.selectedClass,s=gt(e);return e?`${s.subject_code||"-"} · ${s.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function vo(){yt.forEach(e=>{try{e()}catch{}}),yt=[]}function Yt(e,s){const t=document.getElementById(e),d=document.getElementById(`${e}-list`);if(!t||!d)return;const f=ne.teachers||[],k=()=>{d.classList.add("hidden")},b=m=>{t.value=m.full_name||"",ne.form[s]=t.value,rt(),it(),k()},u=()=>{const m=t.value.trim(),_=m.toLowerCase(),v=f.filter(y=>!m||po(y).includes(_)).slice(0,10);if(!f.length){d.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!v.length){d.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}d.innerHTML=v.map(y=>`
      <button type="button" data-id="${y.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${y.image_url?`<img src="${y.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${l((y.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${l(y.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${l(y.teacher_code||"—")}${y.dept?` · ${l(y.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),d.querySelectorAll(".exam-teacher-option").forEach(y=>{y.addEventListener("mousedown",O=>{O.preventDefault();const C=f.find(M=>String(M.id)===String(y.dataset.id));C&&b(C)})})},S=()=>{u(),d.classList.remove("hidden")},A=()=>{ne.form[s]=t.value,rt(),it(),S()},L=()=>S(),T=m=>{if(m.key==="Escape"&&k(),m.key==="Enter"){const _=d.querySelector(".exam-teacher-option");_&&!d.classList.contains("hidden")&&(m.preventDefault(),_.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},h=m=>{!t.contains(m.target)&&!d.contains(m.target)&&k()};t.addEventListener("input",A),t.addEventListener("focus",L),t.addEventListener("keydown",T),document.addEventListener("mousedown",h,!0),yt.push(()=>{t.removeEventListener("input",A),t.removeEventListener("focus",L),t.removeEventListener("keydown",T),document.removeEventListener("mousedown",h,!0)})}function Ze(){const e=ne.form,s=ne.classes.map(t=>{const d=gt(t),f=`${d.subject_code||"-"} · ${d.subject_name||"-"} · ${t.class_name||"-"}`;return`<option value="${t.id}" ${String(e.classId)===String(t.id)?"selected":""}>${l(f)}</option>`}).join("");Me(`
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
            <select id="exam-class-id" class="${Le}">
              <option value="">เลือกห้องเรียน</option>
              ${s}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${Le}">
              ${Object.values(ht).map(t=>`<option value="${t.key}" ${e.lang===t.key?"selected":""}>${l(t.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <input id="exam-type" list="exam-type-datalist" class="${me}" value="${l(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${so.map(t=>`<option value="${l(t)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${me}" value="${l(e.subjectLabel)}" placeholder="${l(gt(ne.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${me}" value="${l(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${me}" value="${l(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${me}" value="${l(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${me}" value="${l(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${me}" value="${l(e.endTime)}">
            </label>
          </div>
          ${e.lang!=="th"?`
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความวันที่สอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = แปลงจากวันที่ด้านบนแบบไทยให้อัตโนมัติ)</span>
            <input id="exam-date-label" class="${me}" value="${l(e.examDateLabel)}" placeholder="${l(Lt(e.examDate)||"เช่น ١٥ يوليو ٢٠٢٦")}">
          </label>
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความเวลาสอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = ใช้เวลาด้านบนตามที่ตั้งไว้)</span>
            <input id="exam-time-label" class="${me}" value="${l(e.examTimeLabel)}" placeholder="${l(It(e)||"เช่น ٠٨:٣٠ - ٠٩:٣٠")}">
          </label>`:""}
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${me}" value="${l(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${me}" value="${l(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${me}" value="${l(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${me}" value="${l(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${me}" value="${l(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${me}" value="${l(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        ${At()?(()=>{const t=ne.students.filter(k=>Ve(k.gender)==="M").length,d=ne.students.filter(k=>Ve(k.gender)==="F").length,f=e.studentScope==="split";return`
        <div class="mt-4 grid gap-3 sm:grid-cols-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">นักเรียนที่ใช้ (ห้องนี้มีทั้งชายและหญิง)</span>
            <select id="exam-student-scope" class="${Le}">
              <option value="all" ${f?"":"selected"}>ทั้งห้อง (ไม่แยกเพศ)</option>
              <option value="split" ${f?"selected":""}>แยกเพศ</option>
            </select>
          </label>
          ${f?`
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">เพศที่กำลังดู/พิมพ์</span>
            <select id="exam-split-gender" class="${Le}">
              <option value="M" ${e.splitGender!=="F"?"selected":""}>ชาย (${t} คน)</option>
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${d} คน)</option>
            </select>
          </label>
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รูปแบบพิมพ์</span>
            <select id="exam-split-print-mode" class="${Le}">
              <option value="single" ${e.splitPrintMode!=="both"?"selected":""}>พิมพ์ทีละเพศ (เฉพาะเพศที่เลือกอยู่)</option>
              <option value="both" ${e.splitPrintMode==="both"?"selected":""}>พิมพ์ทีเดียวทั้งสองเพศ (ชายก่อน ต่อด้วยหญิง)</option>
            </select>
          </label>`:""}
        </div>`})():""}

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${l(fo())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${ne.students.length} คน${l(co())}</span>
          ${ne.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${Tt()}</div>
      </section>
    </div>`),yo()}async function kt(){const e=ne.form.classId;if(ne.selectedClass=ne.classes.find(s=>String(s.id)===String(e))||null,ne.students=[],!!e){ne.loadingStudents=!0,Ze();try{ne.students=gs(await Is(e))}catch(s){console.error(s),Y("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+je(s),"error")}finally{ne.loadingStudents=!1}}}function Ye(){var e,s,t,d,f,k,b,u,S,A,L,T,h,m,_,v,y,O,C,M;ne.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((s=document.getElementById("exam-subject-label"))==null?void 0:s.value)||"",lang:((t=document.getElementById("exam-lang"))==null?void 0:t.value)||"th",examType:((d=document.getElementById("exam-type"))==null?void 0:d.value)||"",semester:((f=document.getElementById("exam-semester"))==null?void 0:f.value)||"",academicYear:((k=document.getElementById("exam-year"))==null?void 0:k.value)||"",examDate:((b=document.getElementById("exam-date"))==null?void 0:b.value)||"",startTime:((u=document.getElementById("exam-start"))==null?void 0:u.value)||"",endTime:((S=document.getElementById("exam-end"))==null?void 0:S.value)||"",examDateLabel:((A=document.getElementById("exam-date-label"))==null?void 0:A.value)||"",examTimeLabel:((L=document.getElementById("exam-time-label"))==null?void 0:L.value)||"",classPart:((T=document.getElementById("exam-class-part"))==null?void 0:T.value)||"",periodPart:((h=document.getElementById("exam-period-part"))==null?void 0:h.value)||"",examRoom:((m=document.getElementById("exam-room"))==null?void 0:m.value)||"",examAmount:((_=document.getElementById("exam-amount"))==null?void 0:_.value)||"",invigilator1:((v=document.getElementById("exam-invigilator-1"))==null?void 0:v.value)||"",invigilator2:((y=document.getElementById("exam-invigilator-2"))==null?void 0:y.value)||"",studentScope:((O=document.getElementById("exam-student-scope"))==null?void 0:O.value)||"all",splitGender:((C=document.getElementById("exam-split-gender"))==null?void 0:C.value)||"M",splitPrintMode:((M=document.getElementById("exam-split-print-mode"))==null?void 0:M.value)||"single"},ne.selectedClass=ne.classes.find(X=>String(X.id)===String(ne.form.classId))||null,rt()}function it(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=Tt())}function ho(){return Ye(),it(),ne.form.classId?!0:(Y("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function yo(){var s,t,d,f;vo(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(k=>{var b,u;(b=document.getElementById(k))==null||b.addEventListener("input",()=>{Ye(),it()}),(u=document.getElementById(k))==null||u.addEventListener("change",()=>{Ye(),it()})}),(s=document.getElementById("exam-class-id"))==null||s.addEventListener("change",async()=>{Ye(),rt(),await kt(),Ze()}),(t=document.getElementById("exam-lang"))==null||t.addEventListener("change",()=>{Ye(),Ze()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(k=>{var b;(b=document.getElementById(k))==null||b.addEventListener("change",()=>{Ye(),Ze()})}),(d=document.getElementById("exam-doc-refresh"))==null||d.addEventListener("click",async()=>{Ye(),await kt(),Ze(),Y("รีเฟรชรายชื่อแล้ว","success")}),(f=document.getElementById("exam-doc-print"))==null||f.addEventListener("click",()=>{ho()&&xo()}),Yt("exam-invigilator-1","invigilator1"),Yt("exam-invigilator-2","invigilator2")}async function na(e){We("exam-docs"),Ue("เอกสารช่วงสอบ","exam-docs"),Me(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[s,t,d]=await Promise.all([jt((e==null?void 0:e.id)??null),De().catch(()=>({})),Xt().catch(()=>[])]),f=ao(),k=no(),b={...nt,semester:String(t.semester||nt.semester||""),academicYear:String(t.academicYear||nt.academicYear||""),examDate:oo(),invigilator1:(e==null?void 0:e.full_name)||"",...f};k&&s.some(u=>String(u.id)===String(k))&&(b.classId=String(k)),ne={teacher:e,classes:s,teachers:d,students:[],selectedClass:null,loadingStudents:!1,form:b},ne.form.examType||(ne.form.examType=nt.examType),k&&rt(),ne.selectedClass=ne.classes.find(u=>String(u.id)===String(ne.form.classId))||null,await kt(),Ze()}catch(s){console.error(s),Me(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${l(je(s))}
    </div>`)}}let tt=null,Xe=null,st=null,Ke=null,Qe=null;const wo={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},_o={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function $o(e){const s=new Date,t=new Date(e.event_date+"T00:00:00"),d=new Date((e.end_date||e.event_date)+"T23:59:59");if(s>=t&&s<=d)return{status:"ongoing"};const f=Math.max(0,Math.floor((t-s)/1e3)),k=Math.floor(f/86400),b=f%86400,u=Math.floor(b/3600),S=Math.floor(b%3600/60),A=b%60,L=`${String(u).padStart(2,"0")}:${String(S).padStart(2,"0")}:${String(A).padStart(2,"0")}`,T=f<=86400?"red":f<=3*86400?"amber":"normal";return{status:"upcoming",days:k,clock:L,urgency:T}}function ko(e,s){if(!e)return 0;const t=new Date(e),d=new Date(s+"T00:00:00");if(isNaN(t)||isNaN(d))return 0;const f=d.getTime()-t.getTime();return f<0?0:Math.floor(f/(7*24*60*60*1e3))+1}function Vt(e,s){const t=b=>String(b??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=b=>new Date(b+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),f=new Date().toISOString().slice(0,10),k=(e??[]).filter(b=>(b.end_date||b.event_date)>=f).map(b=>({ev:b,cd:$o(b)})).filter(({cd:b})=>b.status==="ongoing"||b.days<=14).sort((b,u)=>b.ev.event_date.localeCompare(u.ev.event_date)).slice(0,5);return k.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${k.map(({ev:b,cd:u})=>{const S=u.status==="ongoing"||u.urgency==="red",A=u.urgency==="amber",L=S?"bg-red-50 border-red-300 ring-2 ring-red-200":A?"bg-amber-50 border-amber-200":"bg-white border-gray-200",T=S?"bg-red-100 animate-pulse":A?"bg-amber-100":"bg-gray-100",h=ko(s,b.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${L}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${T}">${S?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${_o[b.event_type]}">${wo[b.event_type]}</span>
            <span class="text-[11px] text-gray-400">${d(b.event_date)}</span>
            ${h>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${h}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${S?"text-red-800":"text-gray-800"}">${t(b.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${u.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${S?"text-red-600":A?"text-amber-600":"text-gray-500"}">อีก ${u.days} วัน</p>
               <p class="text-[11px] font-mono ${S?"text-red-400":"text-gray-400"}">${u.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function Wt(e,s,t=null){const d=u=>u==="A"?"#059669":u==="B"?"#2563eb":"#d97706",f=(u="0.11")=>t?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${u};color:${d(t.grade)}">${t.grade}</span>
       </div>`:"";if(!e.length)return"";const k=e.map(u=>({...u,cd:qs(u.start_time,u.end_time)})).sort((u,S)=>{const A={active:0,upcoming:1,done:2};return A[u.cd.status]-A[S.cd.status]||(u.start_time??"").localeCompare(S.start_time??"")}),b=k.some(u=>u.cd.status==="active");return`
  <div onclick="window._openWenDuty('${s}')"
    class="relative overflow-hidden mb-3 border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-150
           ${b?"bg-red-50 border-red-300 ring-4 ring-red-100":"bg-amber-50 border-amber-300 ring-4 ring-amber-100"}">
    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                ${b?"bg-red-100 animate-pulse":"bg-amber-100"}">${b?"🚨":"🛡️"}</div>
    <div class="flex-1 min-w-0">
      <span class="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1
        ${b?"bg-red-200 text-red-800":"bg-amber-200 text-amber-800"}">เวรวันนี้</span>
      <p class="font-extrabold text-base mb-1 ${b?"text-red-800":"text-amber-800"}">
        ${b?"🔴 ถึงเวลาเวรแล้ว!":`วันนี้คุณมีเวร ${k.length} จุด`}
      </p>
      <div class="space-y-1">
        ${k.map(u=>u.cd.status==="active"?`
        <div class="bg-red-100/70 rounded-lg px-2 py-1.5 -mx-2">
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${l(u.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${l(u.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${u.cd.cls}">${u.cd.label}</span>
          </div>
        </div>`:`
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${u.cd.status==="done"?"text-gray-400 line-through":"text-amber-700"}">
            📍 ${l(u.name)} <span class="${u.cd.status==="done"?"text-gray-300":"text-amber-500"}">(${l(u.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${u.cd.cls}">${u.cd.label}</span>
        </div>`).join("")}
      </div>
      <p class="text-[11px] mt-2 font-semibold ${b?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${f()}
  </div>`}const ot=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let Pe=null;function Ut(e,s){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const t=parseInt(String(s??"").replace(/[^0-9]/g,""),10);return t>=4&&t<=6?"สามัญมัธยม ม.ปลาย":t>=1&&t<=3?"สามัญมัธยม ม.ต้น":null}async function So(e){We("overview"),Ue("ภาพรวมผู้บริหาร"),Me(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[s,t]=await Promise.all([Ms().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),De().catch(()=>({}))]),d=Object.fromEntries(s.subjectRows.map(E=>[E.id,E])),f=Object.fromEntries(ot.map(E=>[E,0]));let k=0;s.classRows.forEach(E=>{const H=d[E.course_id],te=H?Ut(H.subject_group,H.grade_level):null;te?f[te]++:k++});const b=new Set(s.classRows.map(E=>E.course_id).filter(Boolean)),u=s.subjectRows.filter(E=>b.has(E.id)),S=Object.fromEntries(ot.map(E=>[E,new Set])),A=new Set;u.forEach(E=>{const H=Ut(E.subject_group,E.grade_level);H?S[H].add(E.subject_name):A.add(E.subject_name)});const L=Object.fromEntries(ot.map(E=>[E,S[E].size])),T=new Set(u.map(E=>E.subject_name)).size,h=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:s.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:s.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:s.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:T,hint:"นับชื่อวิชาไม่ซ้ำ"}],m=()=>h.map(E=>`
    <button type="button" data-exec-stat="${E.key}"
      class="text-left bg-white rounded-2xl border ${Pe===E.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${E.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${E.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${E.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${E.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${Pe===E.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),_=(E,H)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${E}</span>
      <span class="text-sm font-bold text-gray-800">${H.toLocaleString("th-TH")}</span>
    </div>`,v=()=>{if(!Pe)return"";let E="";if(Pe==="teachers"||Pe==="students"){const H=h.find(te=>te.key===Pe);E=`<p class="text-sm text-gray-500">${H.icon} ${H.label}ทั้งหมด <b class="text-gray-800">${H.value.toLocaleString("th-TH")}</b> คน (${H.hint})</p>`}else Pe==="courses"?E=ot.map(H=>_(H,f[H])).join("")+(k>0?_("ไม่ระบุหมวด/ยังไม่ผูกวิชา",k):""):Pe==="subjects"&&(E=ot.map(H=>_(H,L[H])).join("")+(A.size>0?_("ไม่ระบุหมวด",A.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${E}
    </div>`},y={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},C=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter(E=>E.show&&["council","terangganu","regrade"].includes(E.key)).map(E=>{const[H,te]=y[E.key]||["#E4E4E7","#9C9CA3"];return{key:E.key,id:E.id,emoji:E.emoji,label:E.label,from:H,to:te,badge:E.badge,onclick:E.href?`window.location.href='${E.href}'`:`window._navTo('${E.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map(E=>ls(E,t.iconTileStyle)).join(""),X=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map(E=>`
    <a href="${E.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${E.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${E.label}</span>
    </a>`).join("");Me(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${l((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${m()}
    </div>
    <div id="exec-stat-detail">${v()}</div>

    <div class="mt-5 mb-1 md:hidden">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</h4>
      <div class="flex gap-3 overflow-x-auto pb-1" id="exec-icon-grid">
        ${C}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">🖥️ จอมอนิเตอร์</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${X}
      </div>
    </div>
  </div>`);function P(){document.querySelectorAll("[data-exec-stat]").forEach(E=>{E.onclick=()=>{var te;const H=E.dataset.execStat;Pe=Pe===H?null:H,document.getElementById("exec-stat-cards").innerHTML=m(),document.getElementById("exec-stat-detail").innerHTML=v(),P(),(te=document.getElementById("exec-stat-detail-inner"))==null||te.scrollIntoView({behavior:"smooth",block:"nearest"})}})}P()}async function Jt(e,s=[]){var we,Se,W;if(We("overview"),Ue("ภาพรวม"),Mt(e).includes("executive")){So(e);return}const{getPendingExamRequestCount:t}=await Ne(async()=>{const{getPendingExamRequestCount:n}=await import("./api-CQwFwlFA.js");return{getPendingExamRequestCount:n}},__vite__mapDeps([0,1,2,3,4])),{getMyDonationRequests:d}=await Ne(async()=>{const{getMyDonationRequests:n}=await import("./api-CQwFwlFA.js");return{getMyDonationRequests:n}},__vite__mapDeps([0,1,2,3,4])),{getUnreadNotifications:f}=await Ne(async()=>{const{getUnreadNotifications:n}=await import("./api-CQwFwlFA.js");return{getUnreadNotifications:n}},__vite__mapDeps([0,1,2,3,4])),[k,b,u,S,A,L,T,h,m,_]=await Promise.all([e?Ct(e.id).catch(()=>[]):Qt().catch(()=>[]),jt((e==null?void 0:e.id)??null).catch(()=>[]),De().catch(()=>({})),e?t(e.id).catch(()=>0):Promise.resolve(0),e?d(e.id).catch(()=>[]):Promise.resolve([]),e?f(e.id).catch(()=>[]):Promise.resolve([]),e?Ks(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?Xs(e.teacher_code).catch(()=>null):Promise.resolve(null),e?Ne(()=>import("./sports-portals.js_v_10.22-D8KSdgz3.js"),__vite__mapDeps([30,6,31,1,32,23,24,2,20])).then(n=>n.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1}),(we=window._pp5AcademicTerms)!=null&&we.length?Promise.resolve(window._pp5AcademicTerms):As().catch(()=>[])]),v=parseInt(u.academicYear??2568),y=parseInt(u.semester??1),O=b.filter(n=>n.academic_year==null||Number(n.academic_year)===v&&Number(n.semester)===y),C=Ps(_,u),M=Bt({academic_year:v,semester:y});let X=M;try{const n=localStorage.getItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`);C.some(o=>Bt(o)===n)&&(X=n)}catch{}const P=Fs(u.semester_start);tt&&(clearInterval(tt),tt=null),Xe&&(clearInterval(Xe),Xe=null),st&&(clearInterval(st),st=null),Ke&&(clearInterval(Ke),Ke=null),Qe&&(clearInterval(Qe),Qe=null);const[E,H,te,le,oe]=await Promise.all([e?Et(e.id,v,y).catch(()=>[]):Promise.resolve([]),e?ss(e.id).catch(()=>[]):Promise.resolve([]),Ts().catch(()=>[]),Ns().catch(()=>[]),e?Bs(v,y).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries(le.map(n=>[n.id,n]));const ye=window._classroomMapGlobal,Q={};H.forEach(n=>{Q[n.teacher_schedule_id]||(Q[n.teacher_schedule_id]=[]),Q[n.teacher_schedule_id].push(n.class_id)});const xe=Object.fromEntries(b.map(n=>[n.id,n])),re=Object.fromEntries(te.map(n=>[n.period_no,n])),fe=new Date().getDay(),c=E.filter(n=>n.day_of_week===fe&&(Q[n.id]??[]).length>0).map(n=>{const o=(n.period_no??1)+(n.span_periods??1)-1;return{...n,linkedClasses:(Q[n.id]??[]).map(r=>xe[r]).filter(Boolean),period:re[n.period_no],actualEndPeriod:re[o]??re[n.period_no]}}).sort((n,o)=>n.period_no-o.period_no),F=n=>{var r,p;const o=dt((r=n.period)==null?void 0:r.start_time,(p=n.actualEndPeriod)==null?void 0:p.end_time);return o.label.includes("กำลังสอน")?0:o.label.startsWith("เสร็จ")?2:1},Z=c.find(n=>F(n)===0)??null,ie=[...c].filter(n=>n!==Z).sort((n,o)=>F(n)-F(o)||n.period_no-o.period_no),se=s.filter(n=>n.category==="สามัญ"),V=A.find(n=>n.package_type==="donation"&&n.status==="approved"),ee=A.filter(n=>n.package_type==="donation"&&n.status==="approved").reduce((n,o)=>n+(o.amount??0),0),de=(n,o)=>{const r=parseInt(n,10);return Number.isFinite(r)&&r>0?r:o},z=()=>{const n=String(u.donationStickerTiers??"").trim();return de(u.donationMinAmount,99),de(u.donationAmountStep,50),(n?n.split(`
`).filter(Boolean).map($=>{const[i,x,g,w,J]=$.split("|").map(ae=>ae.trim());return{amount:de(i,0),sticker:x||"🏅",title:g||`ผู้สนับสนุน ${i} บาท`,note:w||"",color:J||""}}).filter($=>$.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([$,i,x,g,w])=>({amount:$,sticker:i,title:x,note:g,color:w}))).sort(($,i)=>$.amount-i.amount).map(($,i)=>{const x=u[`donationStickerImg${i+1}`]??"";return x&&/^https?:\/\//.test(x)?{...$,sticker:x}:$})},pe=n=>{if(!n)return"";const o=parseInt(n.slice(1,3),16),r=parseInt(n.slice(3,5),16),p=parseInt(n.slice(5,7),16);return`border:2px solid ${n};box-shadow:0 0 0 4px rgba(${o},${r},${p},0.25),0 4px 20px rgba(${o},${r},${p},0.18);`},K=()=>{const n=String(u.donationSpecialFeatures??"").trim(),o=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return n?n.split(`
`).filter(Boolean).map(r=>{const p=r.split("|").map($=>$.trim());return{icon:p[0]||"✨",text:p[1]||p[0]||r,minTier:parseInt(p[2])||1}}).filter(r=>r.text):o.map(([r,p,$])=>({icon:r,text:p,minTier:$}))};let q=null,U=0,ue="",he="",_e="border border-gray-200 shadow-md";if(V&&u.quotaMode==="school_sponsored"){const n=z(),o=ee,r=[...n].reverse().find($=>o>=$.amount)??n[0],p=Math.max(0,...A.filter($=>$.package_type==="donation"&&$.status==="approved").map($=>Number.parseInt(String($.donation_tier??""),10)).filter($=>Number.isInteger($)&&$>=1&&$<=n.length));if(U=Math.max(r?n.indexOf(r)+1:0,p),q=n[U-1]??null,q){he=pe(q.color),_e="";const $=String(q.sticker??""),i=/^https?:\/\//.test($)?`<img src="${$}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${$}</span>`,x=q.color?`color:${q.color};`:"color:#f59e0b;";ue=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${i}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${x}">
            ${q.note||q.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async n=>{if(!n)return;const{renderClassDetail:o}=await Ne(async()=>{const{renderClassDetail:r}=await import("./teacher-views-classes-BCO3d0aE.js").then(p=>p.t);return{renderClassDetail:r}},__vite__mapDeps([19,6,0,1,2,3,4,20,21,15,22,14,23,12,24,25,13,9,10,11,26]));o(e,n)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:n}=await Ne(async()=>{const{openSmartClassroomLanding:o}=await import("./teacher-views-smart-classroom-DRuZFVOc.js");return{openSmartClassroomLanding:o}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]));n(e)};const $e=P>0?(()=>{const n=new Date(u.semester_start);n.setDate(n.getDate()+(P-1)*7);const o=new Date(n);o.setDate(o.getDate()+6);const r=$=>`${String($.getDate()).padStart(2,"0")}/${String($.getMonth()+1).padStart(2,"0")}`,p=`📅 สัปดาห์ที่ ${P} (${r(n)} – ${r(o)}) · ภาคเรียนที่ ${y}/${v}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${p}</span><span class="mr-10 lg:mr-16">${p}</span>
      </div>
    </div>
    <style>@keyframes teacher-week-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}</style>
    `})():"",Ce=Mt(e);window._openHomeroomPopup=()=>{var o;(o=document.getElementById("homeroom-popup"))==null||o.remove();const n=document.createElement("div");n.id="homeroom-popup",n.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",n.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">🏠 ห้องที่ปรึกษาของฉัน</p>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" onclick="this.closest('.fixed').remove()">×</button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3">
        ${s.map(r=>`
        <div class="border border-gray-100 rounded-xl p-3">
          <p class="font-bold text-gray-800">${r.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${r.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">${r.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${r.category==="สามัญ"?`
            <button onclick="window._openLifeSkillScore('${r.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>`:`
            <button onclick="window._openReligionScore('${r.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${r.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-4">ไม่มีห้องที่ปรึกษา</p>'}
      </div>
    </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:n}=await Ne(async()=>{const{openTeacherShirtSizeModal:o}=await import("./sports-portals.js_v_10.22-D8KSdgz3.js");return{openTeacherShirtSizeModal:o}},__vite__mapDeps([30,6,31,1,32,23,24,2,20]));n(e)};const Oe=[...new Set(b.map(n=>n.class_name).filter(Boolean))].sort(),Re=JSON.stringify(Oe).replace(/"/g,"&quot;"),a=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:Ce.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:se.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${Re}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:s.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:m.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],I={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-competition-manager":["#D9E7F8","#4C86C6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},N=(window._teacherOverviewSystems||[]).filter(n=>n.show).map(n=>{const[o,r]=I[n.key]||["#E4E4E7","#9C9CA3"];return{key:n.key,id:n.id,show:!0,emoji:n.emoji,label:n.label,from:o,to:r,badge:n.badge,onclick:n.href?`window.location.href='${n.href}'`:`window._navTo('${n.nav}')`}}),j=[...a,...N].filter(n=>n.show),B=(e==null?void 0:e.overview_prefs)||null,R=B?j.filter(n=>!(B.hiddenKeys||[]).includes(n.key)).sort((n,o)=>{const r=B.iconOrder||[],p=r.indexOf(n.key),$=r.indexOf(o.key);return p===-1&&$===-1?0:p===-1?1:$===-1?-1:p-$}):j,G=R.map(n=>ls(n,u.iconTileStyle)).join("");window._openOverviewCustomizer=()=>Eo(e,j,s);const D=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">หน้าภาพรวมและงานประจำวันใช้ภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนและเอกสาร ปพ.5 ของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="teacher-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Ds(C,X,M)}
        </select>
      </label>
    </div>
  </section>`;if(Me(`<div class="animate-fade">
    ${D}

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${L.length?(()=>{const n={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},o={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},r={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},p={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},$=[...new Set(L.map(g=>g.metric))].map(g=>`<span style="background:${r[g]??"#f3f4f6"};color:${o[g]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${n[g]??g}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(L.filter(g=>g.supervisor).map(g=>[g.supervisor_id,g.supervisor])).values()].map(g=>p[g.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${L.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${$}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${e==null?void 0:e.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})():""}

    <!-- กำลังสอนอยู่ (ย้ายมาไว้ในโซนเร่งด่วนบนสุด) -->
    ${Z?(()=>{var r,p;const n=Z.period?`${Z.period.start_time.substring(0,5)}–${Z.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${Z.period_no}`,o=((r=Z.linkedClasses[0])==null?void 0:r.id)??null;return`
    <div id="active-class-card" class="mb-4 bg-white rounded-2xl p-5 ${o?"cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150":""}"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);"
      ${o?`onclick="window._goToActiveClass(${o})"`:""}>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${n}</span>
        ${o?'<span class="text-[11px] text-emerald-500 ml-auto">เข้าห้องเรียน →</span>':""}
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${Z.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${Z.linkedClasses.map($=>{var i;return((i=$.master_subjects)==null?void 0:i.subject_name)??$.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${Z.linkedClasses.map($=>{const i=$.classroom_id?ye[$.classroom_id]:null;return $.class_name+(i?` · 📍${i.building} ห้อง ${i.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${Pt((p=Z.actualEndPeriod)==null?void 0:p.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`})():""}

    ${$e}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="group relative overflow-hidden rounded-[24px] ${_e} bg-gradient-to-r from-white via-emerald-50/20 to-white px-5 pt-5 pb-5 mb-5 flex items-center gap-5 transition-all duration-200 hover:shadow-lg" style="${he}">
      <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-emerald-100/30 blur-2xl transition-transform duration-300 group-hover:scale-125"></div>
      <!-- รูปโปรไฟล์ + ปุ่มแก้ไข -->
      <div class="relative z-10 flex flex-col items-center gap-2 flex-shrink-0">
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
      <div class="relative z-10 flex-1 min-w-0">
        <h3 class="font-bold text-gray-800 text-lg truncate">${(e==null?void 0:e.full_name)??"—"}</h3>
        <p class="text-xs text-gray-400 mt-0.5">รหัสครู ${(e==null?void 0:e.teacher_code)??"—"} · ${(e==null?void 0:e.category)??"—"}</p>
        <div class="flex flex-wrap gap-1.5 mt-2">
          ${e!=null&&e.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700 font-medium">📚 ${e.dept}</span>`:'<span class="px-2 py-0.5 rounded-full text-xs bg-amber-50 text-amber-600 font-medium">⚠️ ยังไม่ระบุกลุ่มสาระ</span>'}
          ${s.map(n=>`<span class="px-2 py-0.5 rounded-full text-xs ${n.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"} font-medium">🏠 ${n.main_room}</span>`).join("")}
          ${s.length===0?'<span class="px-2 py-0.5 rounded-full text-xs bg-gray-50 text-gray-400">ไม่มีห้องที่ปรึกษา</span>':""}
        </div>
      </div>
      <!-- สติกเกอร์ -->
      <div class="relative z-10">${ue}</div>
    </div>

    <!-- สรุปของฉัน — การ์ดแนวนอนแบบ responsive (เลื่อนซ้าย-ขวาได้บนมือถือ) -->
    <section class="mb-5" aria-labelledby="teacher-overview-summary-title">
      <div class="flex items-center justify-between gap-3 mb-2 px-1">
        <h3 id="teacher-overview-summary-title" class="text-sm font-bold text-gray-700">📊 สรุปของฉัน</h3>
        <span class="text-[10px] text-gray-400 sm:hidden">เลื่อนซ้าย-ขวาเพื่อดูทั้งหมด</span>
      </div>
      <div class="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 px-1 -mx-1 lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:overflow-visible lg:pb-0">
        ${[{key:"courses",label:"คอร์สวิชาของฉัน",value:k.length,hint:"รายวิชาที่เปิดสอน",icon:"📖",from:"#D1FAE5",to:"#6EE7B7",ink:"#065F46",onclick:"window._navTo('my-courses')"},{key:"classes",label:"ห้องเรียน",value:O.length,hint:`ภาคเรียนที่ ${y}/${v}`,icon:"🏫",from:"#DBEAFE",to:"#93C5FD",ink:"#1E40AF",onclick:"window._navTo('my-classes')"},{key:"homeroom",label:"ห้องที่ปรึกษา",value:s.length,hint:"ห้องที่ดูแลอยู่",icon:"🏠",from:"#FEF3C7",to:"#FCD34D",ink:"#92400E",onclick:"window._openHomeroomPopup()"},{key:"requests",label:"คำร้องรออนุมัติ",value:S,hint:S>0?"มีรายการที่ต้องตรวจสอบ":"ไม่มีรายการค้าง",icon:"🔔",from:S>0?"#FEE2E2":"#F3F4F6",to:S>0?"#FDA4AF":"#D1D5DB",ink:S>0?"#991B1B":"#4B5563",onclick:"window._navTo('requests')"},{key:"smartClassroom",label:"Smart Classroom",value:"เปิดห้องสอนสด",hint:"เครื่องมือช่วยจัดการชั้นเรียน",icon:"👑",from:"#EDE9FE",to:"#C4B5FD",ink:"#5B21B6",onclick:"window._openSmartClassroomLanding()"}].map(n=>`
          <button type="button" onclick="${n.onclick}"
            aria-label="${n.label} ${n.value}"
            class="group relative isolate min-h-[132px] min-w-[245px] sm:min-w-[280px] lg:min-w-0 snap-start overflow-hidden rounded-[22px] border-0 p-4 text-left shadow-md cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style="background:linear-gradient(135deg,${n.from} 0%,${n.to} 100%);--card-ink:${n.ink};--tw-ring-color:${n.ink};">
            <span aria-hidden="true" class="pointer-events-none absolute -right-8 -bottom-12 h-36 w-36 rounded-full opacity-35 transition-transform duration-300 group-hover:scale-125"
              style="background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.9),rgba(255,255,255,.08) 56%,transparent 57%);box-shadow:0 0 0 22px rgba(255,255,255,.12),0 0 0 44px rgba(255,255,255,.08);"></span>
            <span aria-hidden="true" class="pointer-events-none absolute right-2 -bottom-3 text-7xl sm:text-8xl leading-none opacity-80 drop-shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">${Hs(u,`overview:${n.key}`,n.icon,"max-w-[7rem] max-h-[7rem] object-contain")}</span>
            <span aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-white/40"></span>
            <span class="relative z-10 block pr-20">
              <span class="block text-xs font-extrabold tracking-wide" style="color:var(--card-ink)">${n.label}</span>
              <span class="mt-1 block ${typeof n.value=="number"?"text-3xl":"text-xl"} font-black leading-none tracking-tight" style="color:var(--card-ink)">${n.value}</span>
              <span class="mt-2 block truncate text-[11px] font-semibold opacity-75" style="color:var(--card-ink)">${n.hint}</span>
            </span>
            <span class="relative z-10 mt-2 inline-flex rounded-full bg-white/45 px-2 py-0.5 text-[10px] font-bold opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100" style="color:var(--card-ink)">เปิดดู →</span>
          </button>`).join("")}
      </div>
    </section>

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
        ${G}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${Wt(T,e.teacher_code,h)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${Vt(oe,u.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${ns[fe]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${E.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':H.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${c.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${E.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":H.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${E.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:H.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${ie.map((n,o)=>{var i,x;const r=dt((i=n.period)==null?void 0:i.start_time,(x=n.actualEndPeriod)==null?void 0:x.end_time),p=r.label.startsWith("เสร็จ"),$=n.period?`${n.period.start_time.substring(0,5)}–${(n.actualEndPeriod??n.period).end_time.substring(0,5)}`:`คาบ ${n.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${p?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${p?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${p?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${n.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${p?"text-gray-400":"text-gray-700"} truncate">
                  ${n.linkedClasses.map(g=>{var w;return((w=g.master_subjects)==null?void 0:w.subject_name)??g.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${n.linkedClasses.map(g=>{const w=g.classroom_id?ye[g.classroom_id]:null;return g.class_name+(w?` 📍${w.building} ห้อง ${w.room_number}`:"")}).join(" · ")} · ${$}
                </p>
              </div>
              <span id="today-cd-${o}" class="text-xs font-medium flex-shrink-0 ${r.cls}">${r.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),(Se=document.getElementById("donor-sticker-btn"))==null||Se.addEventListener("click",()=>{if(!q)return;const n=K(),o=q.color||"#f59e0b",r=parseInt(o.slice(1,3),16),p=parseInt(o.slice(3,5),16),$=parseInt(o.slice(5,7),16),i=String(q.sticker??""),x=/^https?:\/\//.test(i)?`<img src="${i}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${i}</div>`,g=document.createElement("div");g.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",g.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${r},${p},${$},0.85),rgba(${r},${p},${$},1))">
          ${x}
          <p class="text-white font-bold text-base">${q.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${q.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${n.map(w=>U>=(w.minTier??1)?`<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${w.icon}</span>
                     <span class="leading-snug">${w.text}</span>
                   </div>`:`<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${w.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${w.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${U<4?`
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>`:""}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${r},${p},${$},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(g),g.addEventListener("click",w=>{w.target===g&&g.remove()})}),(W=document.getElementById("teacher-overview-term-switcher"))==null||W.addEventListener("change",n=>{var r,p;const o=n.target.value;try{localStorage.setItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`,o)}catch{}o===M?(r=window._navTo)==null||r.call(window,"overview"):(p=window._navTo)==null||p.call(window,"grades")}),c.length>0&&(tt=setInterval(()=>{ie.forEach((n,o)=>{var $,i;const r=document.getElementById(`today-cd-${o}`);if(!r){clearInterval(tt);return}const p=dt(($=n.period)==null?void 0:$.start_time,(i=n.actualEndPeriod)==null?void 0:i.end_time);r.textContent=p.label,r.className=`text-xs font-medium flex-shrink-0 ${p.cls}`})},3e4)),Z&&(Xe=setInterval(()=>{var r,p,$,i;const n=document.getElementById("active-class-countdown");if(!n){clearInterval(Xe);return}dt((r=Z.period)==null?void 0:r.start_time,(p=Z.actualEndPeriod)==null?void 0:p.end_time).label.startsWith("เสร็จ")?(clearInterval(Xe),($=document.getElementById("active-class-card"))==null||$.remove()):n.textContent=Pt((i=Z.actualEndPeriod)==null?void 0:i.end_time)},1e3)),document.getElementById("teacher-live-clock")){const n=()=>{const o=new Date,r=document.getElementById("teacher-live-clock");if(!r){clearInterval(st);return}r.textContent=`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}:${String(o.getSeconds()).padStart(2,"0")}`};n(),st=setInterval(n,1e3)}e&&T.length&&(Ke=setInterval(()=>{const n=document.getElementById("wen-duty-card");if(!n){clearInterval(Ke),Ke=null;return}n.innerHTML=Wt(T,e.teacher_code,h)},3e4)),e&&oe.length&&(Qe=setInterval(()=>{const n=document.getElementById("wcal-upcoming-card");if(!n){clearInterval(Qe),Qe=null;return}n.innerHTML=Vt(oe,u.semester_start)},1e3))}function Eo(e,s,t){var T,h;(T=document.getElementById("overview-customizer-modal"))==null||T.remove();const d=(e==null?void 0:e.overview_prefs)||null;let f=s.map(m=>m.key);if((h=d==null?void 0:d.iconOrder)!=null&&h.length){const m=new Set(f),_=d.iconOrder.filter(y=>m.has(y)),v=f.filter(y=>!_.includes(y));f=[..._,...v]}const k=new Set(((d==null?void 0:d.hiddenKeys)||[]).filter(m=>f.includes(m))),b=Object.fromEntries(s.map(m=>[m.key,m])),u=document.createElement("div");u.id="overview-customizer-modal",u.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const S=()=>f.map((m,_)=>{const v=b[m];if(!v)return"";const y=k.has(m),O=v.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${y?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${v.from},${v.to})">${v.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${O}</span>
      <button type="button" data-oc-up="${m}" ${_===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${m}" ${_===f.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${m}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${y?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${y?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),A=()=>{const m=u.querySelector("#oc-list");m&&(m.innerHTML=S()),L()},L=()=>{u.querySelectorAll("[data-oc-toggle]").forEach(m=>m.onclick=()=>{const _=m.dataset.ocToggle;k.has(_)?k.delete(_):k.add(_),A()}),u.querySelectorAll("[data-oc-up]").forEach(m=>m.onclick=()=>{const _=f.indexOf(m.dataset.ocUp);_>0&&([f[_-1],f[_]]=[f[_],f[_-1]],A())}),u.querySelectorAll("[data-oc-down]").forEach(m=>m.onclick=()=>{const _=f.indexOf(m.dataset.ocDown);_<f.length-1&&([f[_+1],f[_]]=[f[_],f[_+1]],A())})};u.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <div>
          <p class="font-bold text-gray-800 text-sm">⚙️ ปรับหน้าภาพรวมแบบรวดเร็ว</p>
          <p class="text-[11px] text-gray-400 mt-0.5">ซ่อน/แสดง และเรียงลำดับไอคอน "ระบบอื่น ๆ"</p>
        </div>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" id="oc-close">×</button>
      </div>
      <div class="px-4 py-2 overflow-y-auto flex-1" id="oc-list">
        ${S()}
      </div>
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0 space-y-2">
        <button type="button" id="oc-save" class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">บันทึก</button>
        <button type="button" id="oc-reset" class="w-full py-2 rounded-xl text-xs text-gray-400 hover:text-gray-600 transition">รีเซ็ตเป็นค่าเริ่มต้น</button>
      </div>
    </div>`,document.body.appendChild(u),L(),u.addEventListener("click",m=>{m.target===u&&u.remove()}),u.querySelector("#oc-close").addEventListener("click",()=>u.remove()),u.querySelector("#oc-save").addEventListener("click",async()=>{const m=u.querySelector("#oc-save");m.disabled=!0,m.textContent="กำลังบันทึก...";try{const _={iconOrder:f,hiddenKeys:[...k]};await Nt(e.id,{overview_prefs:_}),e.overview_prefs=_,u.remove(),Y("บันทึกการปรับแต่งแล้ว","success"),Jt(e,t)}catch(_){console.error(_),Y("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),m.disabled=!1,m.textContent="บันทึก"}}),u.querySelector("#oc-reset").addEventListener("click",async()=>{try{await Nt(e.id,{overview_prefs:null}),e.overview_prefs=null,u.remove(),Y("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),Jt(e,t)}catch(m){console.error(m),Y("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function Co(e,s,t,d,f){const k=[d==null?void 0:d.samaiLogoBwUrl,d==null?void 0:d.samaiLogoUrl].map(fe=>String(fe??"").trim()).find(Boolean)||"",b=k?`${k}${k.includes("?")?"&":"?"}docLogo=${Date.now()}`:"",u=Number(e.credit??1),S=u*2,A=u*2*20,T=String(e.grade_level??"").replace(/[^0-9]/g,""),h=["AGM","AGMVOC"].includes(e.subject_group??""),m=f.find(fe=>fe.dept_code===e.dept)??{},_=m.dept_name??e.dept??"",v=m.head_name??"",y=m.head_sign_url??"",O=d.samaiSchoolName??"",C=d.samaiDirectorName??"",M=d.samaiDirectorSignUrl??"",X=h?d.agmAcademicHeadName??d.samaiAcademicHeadName??"":d.samaiAcademicHeadName??"",P=new Date,E=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],H=`${P.getDate()} ${E[P.getMonth()]} พ.ศ. ${P.getFullYear()+543}`,te=d.academicYear??P.getFullYear()+543,le=d.semester??1,oe=(t==null?void 0:t.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",ye=s.map(fe=>fe.class_name).join(", "),Q=T+(ye?" "+ye:""),xe=h?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",re=`<!DOCTYPE html>
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
    border:1px solid #111; border-radius:50%; padding:2px; background:#fff;
    font-size:13px; display:flex; align-items:center; justify-content:center; overflow:hidden; }
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
    ${b?`<img src="${b}" style="width:100%;height:100%;object-fit:contain;" onerror="this.style.display='none'"/>`:'<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${l(O)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${l(H)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${le} ปีการศึกษา ${te}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${l(O)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${l((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${l(oe)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${l(_)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${l(e.subject_name??"")}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${l(e.subject_code??"")}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${u}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${S}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${A}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${h?"อิสลามศึกษา":"มัธยมศึกษา"}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${l(Q)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${l((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${y?`<img src="${l(y)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${l(v)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${l(_)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${l(X)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${l(xe)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${M?`<img src="${l(M)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${l(C)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${l(O)}</div>

</div>
</body></html>`;as(re)}export{Co as _openLessonPlanApproval,Wt as _renderWenDutyCard,Vt as _renderWorkCalendarUpcoming,ea as openCourseDocPage2Modal,ta as openScheduleCourseReview,ia as renderAnnouncementsView,ha as renderAttendance,ya as renderAttendanceGrid,Do as renderClassDetail,da as renderClassEditForm,Po as renderClassForm,Oo as renderCourseDocLangConfig,sa as renderCourseForm,na as renderExamDocuments,ga as renderGrades,xa as renderGradesGrid,wa as renderLifeSkillScore,ca as renderMyClasses,Zo as renderMyCourses,_a as renderPrayerRoomMonitor,$a as renderPrayerScore,aa as renderProfile,oa as renderProfileSetup,ka as renderReadingScore,fa as renderRequests,pa as renderSchedule,ma as renderScheduleBuilder,Ro as renderScheduleGrid,ua as renderScoreColumns,Jt as renderTeacherOverview};
