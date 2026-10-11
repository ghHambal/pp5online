const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-C-roKrdU.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-smart-classroom-u_zD57Di.js","assets/ui-CdgrLWzs.js","assets/teacher-SS6XmaaI.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sync-GIjLHUjs.js","assets/theme-qDnPEUQn.js","assets/version.js_v_10.22-A-Q3FjCD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CDJXdrOK.js","assets/teacher-views-utils-D0Lb_BpE.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-CZNvwg6f.js","assets/academic-term-switcher-JTnW63gE.js","assets/sports-portals.js_v_10.22-Bl6mvaSs.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/tutorial-D9xKLgCL.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-CbX4L_dw.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-VIO-qDxr.js","assets/teacher-views-attendance-Bf7yzdiF.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-CEAI6LzF.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-quiz-monitor-DzDF5yPE.js","assets/teacher-views-quiz-analytics-B6HbR0sJ.js","assets/teacher-views-dashboard-CjblTm--.js","assets/teacher-views-classes-DVprDxA6.js","assets/pp5-doc-DT_3IQge.js","assets/ai-prompt-gate-D6R7FVed.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-BkpCRg6Q.js","assets/council-api-DYf7ov7O.js","assets/sports-portals.js_v_10.22-ni4ResyP.js"])))=>i.map(i=>d[i]);
import{a as J,g as he,_ as je}from"./ui-CdgrLWzs.js";import{getDepartments as ze,getTeachers as Vt,getSubjectCoTeachers as ms,getSubjectCatalog as Yt,getSystemConfig as Te,updateMyProfile as vt,getMySchedule as yt,getMySubjects as ht,createSubject as us,getCourseDocPage2 as bs,getMasterSubjects as Wt,getMyClasses as wt,getUniqueRooms as Ut,getUniqueReligionRooms as Jt,getHomeroomTeachers as Xt,getCourseDocLangSettings as gs,getCourseSyllabus as xs,getLessonPlans as fs,getTeachersWithSignatures as vs,deleteSyllabusItem as ys,updateSyllabusItem as hs,deleteLessonPlan as ws,findCurriculumStandards as _s,saveCourseDocPage2 as $s,getClassStudents as ks,getAcademicTerms as Ss,getClassScheduleLinks as Es,getPeriods as Cs,getClassrooms as js,getWorkCalendarEvents as Ls,getExecutiveOverviewStats as As,updateTeacher as Lt}from"./api-C-roKrdU.js";import{c as Is,a as At,r as Ts}from"./academic-term-switcher-JTnW63gE.js";import{c as Kt,s as pt}from"./supabase-BV-W2lsh.js";import"./sync-GIjLHUjs.js";import{o as Qt}from"./print-overlay-BVfxEd6n.js";import{_DAYS_TH_FULL as Zt,setActiveNav as De,setTitle as Oe,setContent as Le,SELECT_CLS as $e,INPUT_CLS as ae,CREDIT_OPTS as Ns,GRADE_OPTS as dt,formatPhone as at,_htmlEsc as l,_dutyCountdownInfo as Bs,_teacherPositionList as It,_currentWeek as Ms,renderIconTile as es,_activeRemainingDisplay as Tt,_countdownInfo as et}from"./teacher-views-utils-D0Lb_BpE.js";import{b as Co,e as jo,a as Lo,r as Ao}from"./teacher-views-classes-DVprDxA6.js";import{f as Zo,c as ea,g as ta,h as sa,i as oa,d as aa}from"./teacher-views-classes-DVprDxA6.js";import{uploadTeacherPhoto as Ps}from"./storage-CuUjCgvI.js";import{openPP5CourseModal as Ds}from"./pp5-doc-DT_3IQge.js";import{c as Os}from"./ai-prompt-gate-D6R7FVed.js";import{_ as Rs}from"./teacher-views-grades-CEAI6LzF.js";import{r as la,a as ra,b as ia}from"./teacher-views-grades-CEAI6LzF.js";import{renderAttendance as ca,renderAttendanceGrid as pa,renderLifeSkillScore as ma,renderPrayerRoomMonitor as ua,renderPrayerScore as ba,renderReadingScore as ga}from"./teacher-views-attendance-Bf7yzdiF.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./regrade-api-CbX4L_dw.js";import"./score-display-CQ4dUIPx.js";import"./confetti-loader-BAN5Lv-C.js";import"./score-qr-scanner-VIO-qDxr.js";import"./leave-time-CrS9gT63.js";const ts="https://zhjqkylesnhcotpkzoxr.supabase.co",ss="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let Ne=null;function Nt(e,o,s){const i=new Date(o+"T00:00:00"),x=new Date(e+"T00:00:00"),_=Math.floor((x-i)/864e5);if(_<0)return null;const g=Math.floor(_/7)+1;return g<=s?g:null}function qs(e,o,s){const[i,x]=e.includes(":")?e.split(":"):[null,e];return(i===null||i===s)&&x===o}async function Fs(e){if(!e)return null;Ne||(Ne=Kt(ts,ss));const[o,s,i]=await Promise.all([Ne.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),Ne.from("duty_points").select("assigned_to"),Ne.from("settings").select("week_start_date,total_weeks").single()]),x=i.data||{},_=x.week_start_date,g=x.total_weeks||20;if(!_)return null;const c=new Date().toISOString().slice(0,10),$=Nt(c,_,g)||1;if($<=5)return{grade:"A",score:100,week:$};const A=String(e);let j=0;for(const S of s.data||[])for(const M of S.assigned_to||[])(M.includes(":")?M.split(":")[1]:M)===A&&j++;if(j===0)return null;const b={};for(const S of o.data||[]){const M=Nt(S.date,_,g);M!==null&&(b[M]||(b[M]=[]),b[M].push(S))}const k=5,C=Math.min($,g-2);let f=0;for(let S=1;S<=C;S++)if(S<=k)f+=100;else{const M=b[S]||[],Q=M.length,R=M.filter(oe=>oe.is_late).length,w=Q-R,z=Math.min(100,Math.round(Q/j*100)),W=Q>0?Math.max(0,Math.round(w/Q*100)):100;f+=Math.round(z*.6+W*.4)}const v=Math.round(f/C);return{grade:v>=90?"A":v>=75?"B":"C",score:v,week:$}}async function Hs(e){if(!e)return[];Ne||(Ne=Kt(ts,ss));const{data:o,error:s}=await Ne.from("duty_points").select("name, time, assigned_to");if(s||!o)return[];const i=String(e),x=Zt[new Date().getDay()];return o.filter(_=>(_.assigned_to??[]).some(g=>qs(g,i,x))).map(_=>{const[g,c]=String(_.time??"").split("-").map($=>$.trim());return{name:_.name,time:_.time,start_time:g,end_time:c}})}const nt=e=>{const o=String((e==null?void 0:e.dept_label)??"").trim(),s=String((e==null?void 0:e.subject_code)??"").trim(),i=o+" "+s+" "+String((e==null?void 0:e.subject_name_arabic)??"");return/อิสลามศึกษา|อัดดีนียะห์/u.test(o)||/^(ศอ|อก|อศ|ฟป)/u.test(s)?"ISL":/ภาษาอาหรับ/u.test(o)||/^ภอ/u.test(s)||/العربية/u.test(i)?"ARB":/ภาษามลายู/u.test(o)||/^มล/u.test(s)||/الملايو/u.test(i)?"MLB":/ภาษาไทย/u.test(o)?"THAI":/ภาษาต่างประเทศ/u.test(o)?"ENG":/คณิตศาสตร์/u.test(o)?"MATH":/วิทยาศาสตร์/u.test(o)?"SC":/สังคม/u.test(o)?"SOC":/ศิลปะ/u.test(o)?"ART":/สุขศึกษา|พลศึกษา/u.test(o)?"HEALTH":/การงานอาชีพ|เทคโนโลยี/u.test(o)?e.subject_group==="ACDMVOC"?"VOC":"OCC":""},ye=e=>String(e??"").toLocaleLowerCase("th-TH").normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu,""),ct=e=>{const s=String(e??"").trim().match(/(ปวช\.?|ปวส\.?|อป\.?|ม\.?)\s*([1-6])/iu);if(!s)return"";const i=s[1].replace(/\s+/g,"");return i.startsWith("ม")?`ม.${s[2]}`:`${i}${s[2]}`},Gs=(e,o,s)=>{if(!o)return!1;if(nt(e)===o)return!0;const i=s.find(x=>x.dept_code===o);return!!(i!=null&&i.dept_name&&ye(e.dept_label)===ye(i.dept_name))};function os({prefix:e,samaiRooms:o,religionRooms:s,homeroomRooms:i,assignments:x,teacherId:_,academicYear:g,semester:c}){const $=(A,j,b,k,p)=>{const C=`${e}-advisor-rooms-${b}`,f=`${e}-room-${b}`,v=(i??[]).filter(S=>S.category===A&&Number(S.academic_year)===Number(g)&&Number(S.semester)===Number(c)),P=new Map((x??[]).filter(S=>S.category===A).map(S=>[S.main_room,S]));return`<div id="${e}-room-${b}-wrap" class="space-y-2">
      <button type="button" data-advisor-room-toggle="${C}" aria-expanded="false"
        class="w-full flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 px-4 py-3 text-left transition">
        <span class="font-semibold text-sm text-gray-700">${p} ครูที่ปรึกษา${k}</span>
        <span class="flex items-center gap-2 text-xs text-gray-400">
          <span data-advisor-room-count="${f}">0 ห้อง</span><span data-advisor-room-chevron="${C}">▾</span>
        </span>
      </button>
      <div id="${C}" class="hidden border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-52 overflow-y-auto">
        <p class="text-[11px] text-gray-400 mb-2">เลือกได้มากกว่า 1 ห้อง · ห้องที่มีครูคนอื่นรับผิดชอบอยู่จะเลือกไม่ได้</p>
        ${j.length?j.map(S=>{var W;const M=P.get(S),Q=M&&Number(M.teacher_id)===Number(_),R=!!M&&!Q,w=((W=M==null?void 0:M.teachers)==null?void 0:W.full_name)||"มีครูที่ปรึกษาแล้ว",z=v.some(oe=>oe.main_room===S);return`<label class="flex items-start gap-2 text-sm rounded-lg px-2 py-1.5 ${R?"bg-gray-50 text-gray-400 cursor-not-allowed":"cursor-pointer hover:bg-emerald-50 hover:text-emerald-700"}">
            <input type="checkbox" name="${f}" value="${l(S)}" data-advisor-room="${f}" ${z?"checked":""} ${R?"disabled":""} class="text-emerald-600 rounded mt-0.5" />
            <span class="min-w-0 flex-1"><span class="block">${l(S)}</span>${R?`<span class="block text-[11px] text-gray-400">🔒 ${l(w)}</span>`:""}</span>
          </label>`}).join(""):`<p class="text-xs text-gray-400">ยังไม่มีห้อง${k}</p>`}
      </div>
    </div>`};return`<div class="border-t border-gray-100 pt-4 space-y-3">
    <label class="block text-sm font-semibold text-gray-700">🏠 ห้องที่ปรึกษา</label>
    ${$("สามัญ",o,"samai","สามัญ","🏫")}
    ${$("ศาสนา",s,"religion","ศาสนา","🕌")}
  </div>`}function as(e=document){const o=()=>e.querySelectorAll("[data-advisor-room-count]").forEach(s=>{const i=s.dataset.advisorRoomCount,x=e.querySelectorAll(`input[data-advisor-room="${i}"]:checked`).length;s.textContent=`${x} ห้อง`});e.querySelectorAll("[data-advisor-room-toggle]").forEach(s=>{s.addEventListener("click",()=>{const i=e.querySelector(`#${s.dataset.advisorRoomToggle}`);if(!i)return;const x=i.classList.contains("hidden");i.classList.toggle("hidden",!x),s.setAttribute("aria-expanded",String(x));const _=e.querySelector(`[data-advisor-room-chevron="${s.dataset.advisorRoomToggle}"]`);_&&(_.textContent=x?"▴":"▾")})}),e.querySelectorAll("input[data-advisor-room]").forEach(s=>s.addEventListener("change",o)),o()}async function zo(e){De("my-courses"),Oe("คอร์สวิชาของฉัน","courses"),Le(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[o,s]=await Promise.all([e?ht(e.id):Wt().catch(()=>[]),e?wt(e.id).catch(()=>[]):Promise.resolve([])]),i=o,x=b=>s.filter(k=>{var p;return Number(k.course_id??((p=k.master_subjects)==null?void 0:p.id))===Number(b)}),_=b=>Number.isInteger(b)?String(b):Number(b).toFixed(1).replace(/\.0$/,""),g=b=>{const k=Number(b.credit),p=Number.isFinite(k)&&k>0;return{roomCount:x(b.id).length,credit:p?_(k):"—",periodsPerWeek:p?_(k*2):"—",periodsPerTerm:p?_(k*40):"—"}},c=b=>String(b.dept??b.subject_group??"").trim()||"รายวิชาอื่น ๆ",$=[...o.reduce((b,k)=>{const p=c(k);return b.has(p)||b.set(p,[]),b.get(p).push(k),b},new Map).entries()].sort(([b],[k])=>b.localeCompare(k,"th",{numeric:!0})),A=(b,k,p,C)=>`<div class="rounded-xl border ${C} px-3 py-2.5 min-w-0">
      <div class="flex items-center gap-2"><span class="text-base">${b}</span><strong class="text-lg leading-none text-gray-800">${k}</strong></div>
      <p class="mt-1 text-[10px] font-semibold text-gray-500">${p}</p>
    </div>`,j=b=>{const k=g(b);return`<article class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden">
        <div class="p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">${l(b.subject_code??"—")}</span>
                ${b.dept?`<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">${l(b.dept)}</span>`:""}
              </div>
              <h3 class="mt-2 text-base sm:text-lg font-extrabold text-gray-900 leading-snug">${l(b.subject_name)}</h3>
              <p class="mt-1 text-xs text-gray-400">ระดับชั้น ${l(b.grade_level??"ไม่ระบุ")}</p>
            </div>
            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center text-xl">📚</div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${A("🏫",k.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${A("🎓",k.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${A("🗓️",k.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${A("⏱️",k.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
          </div>

          <div class="mt-4 flex justify-end">
            <button onclick="window._openRegisterClass(${b.id})"
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
            <button class="course-workspace-btn col-span-2 min-h-[44px] text-xs text-white font-bold border border-blue-700 bg-blue-700 rounded-xl hover:bg-blue-800 shadow-sm" data-sid="${b.id}">📘 กำหนดการสอนและแผนหน้าเดียว</button>
            <button class="ccm-open-btn min-h-[40px] text-xs text-indigo-700 font-semibold border border-indigo-100 bg-indigo-50/50 rounded-xl hover:bg-indigo-50" data-sid="${b.id}" data-sname="${l(b.subject_name)}">⚙️ คอลัมน์คะแนน</button>
            <button onclick="window._openCourseDocPage2(${b.id})" class="min-h-[40px] text-xs text-emerald-700 font-semibold border border-emerald-100 bg-emerald-50/50 rounded-xl hover:bg-emerald-50">📝 คำอธิบายรายวิชา</button>
            <button class="lesson-plan-btn min-h-[40px] text-xs text-sky-700 font-semibold border border-sky-100 bg-sky-50/50 rounded-xl hover:bg-sky-50" data-sid="${b.id}">📋 ใบขออนุญาตใช้แผน</button>
            <button class="pp5-course-btn min-h-[40px] text-xs text-violet-700 font-semibold border border-violet-100 bg-violet-50/50 rounded-xl hover:bg-violet-50" data-sid="${b.id}">💾 เอกสาร ปพ.5</button>
          </div>
          <div class="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-end gap-2 flex-wrap">
            <button onclick="window._copyCourse(${b.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-purple-700 hover:bg-purple-50">📋 ทำสำเนา</button>
            <button onclick="window._editCourse(${b.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-gray-600 hover:bg-gray-100">✏️ แก้ไข</button>
            <button class="cd2-del-course-btn min-h-[36px] px-3 rounded-lg border border-red-100 bg-white text-xs font-semibold text-red-500 hover:bg-red-50" data-id="${b.id}" data-name="${l(b.subject_name)}">🗑️ ลบ</button>
          </div>
        </details>
      </article>`};Le(`<div class="animate-fade">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <p class="text-sm font-bold text-gray-700">รายวิชาที่เปิดสอน ${o.length} คอร์ส · ${s.length} ห้องเรียน</p>
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
      ${o.length?`
      <div class="space-y-7">
        ${$.map(([b,k])=>`<section>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">🏷️</div>
            <div><h2 class="font-extrabold text-gray-800">กลุ่มสาระ ${l(b)}</h2><p class="text-[11px] text-gray-400">${k.length} คอร์ส · ${k.reduce((p,C)=>p+x(C.id).length,0)} ห้องเรียน</p></div>
            <div class="h-px bg-gray-200 flex-1"></div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${k.map(j).join("")}</div>
        </section>`).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(b=>{b.addEventListener("click",()=>{window._deleteCourse(Number(b.dataset.id),b.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(b=>{b.addEventListener("click",()=>{Rs(parseInt(b.dataset.sid),b.dataset.sname,s)})}),document.querySelectorAll(".course-workspace-btn").forEach(b=>{b.addEventListener("click",()=>{const k=parseInt(b.dataset.sid,10),p=o.find(C=>C.id===k);p&&ns(e,p,s)})}),document.querySelectorAll(".lesson-plan-btn").forEach(b=>{b.addEventListener("click",async()=>{const k=parseInt(b.dataset.sid),p=o.find(M=>M.id===k);if(!p)return;const C=s.filter(M=>{var Q;return M.course_id===k||((Q=M.master_subjects)==null?void 0:Q.id)===k}),{getSystemConfig:f,getDepartments:v}=await je(async()=>{const{getSystemConfig:M,getDepartments:Q}=await import("./api-C-roKrdU.js");return{getSystemConfig:M,getDepartments:Q}},__vite__mapDeps([0,1,2,3,4])),[P,S]=await Promise.all([f().catch(()=>({})),v().catch(()=>[])]);vo(p,C,e,P,S)})}),document.querySelectorAll(".pp5-course-btn").forEach(b=>{b.addEventListener("click",()=>{const k=parseInt(b.dataset.sid),p=s.filter(C=>{var f;return C.course_id===k||((f=C.master_subjects)==null?void 0:f.id)===k});p.length===1?openPP5Doc(p[0].id):Ds(p)})})}catch{J("โหลดข้อมูลไม่สำเร็จ","error")}}function zs({subject:e,teacher:o,syllabusItems:s,roomNames:i=[],semester:x,academicYear:_,semesterStart:g,semesterEnd:c,showNotesContent:$=!0,departmentHead:A,signatureTeachers:j=[]}){var d;const b=[...s??[]].sort((h,V)=>Number(h.week_start)-Number(V.week_start)),k=$===!0,p=l,C=h=>{const V=String(h??"").replace(/\s+/g," ").trim();if(!V)return"";const Y=typeof Intl.Segmenter=="function"?[...new Intl.Segmenter("th",{granularity:"grapheme"}).segment(V)].map(se=>se.segment):Array.from(V),H=60;if(Y.length<=H)return V;const T=Y.slice(0,H).join(""),F=T.lastIndexOf(" ");return`${(F>=H*.65?T.slice(0,F):T).trimEnd()}…`},f=h=>h?new Date(`${h}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],v=(h,V)=>{const Y=f(h),H=f(V);if(!Y.length||!H.length)return"—";const[T,F,se]=Y,[pe,le,me]=H;return se===me&&F===le?`${T} - ${pe} ${le} ${me}`:se===me?`${T} ${F} - ${pe} ${le} ${me}`:`${T} ${F} ${se} - ${pe} ${le} ${me}`},P=h=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(String(g??"")))return null;const[V,Y,H]=g.split("-").map(Number),T=new Date(V,Y-1,H+(h-1)*7),F=new Date(V,Y-1,H+h*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(c??""))&&F>new Date(`${c}T00:00:00`)&&F.setTime(new Date(`${c}T00:00:00`).getTime());const se=pe=>`${pe.getFullYear()}-${String(pe.getMonth()+1).padStart(2,"0")}-${String(pe.getDate()).padStart(2,"0")}`;return{start:se(T),end:se(F)}},S=(h,V=Number(h.week_start))=>{const Y=P(V),H=Number(h.week_start)===V&&Number(h.week_end??h.week_start)===V,T=(H?h.date_start:null)||(Y==null?void 0:Y.start),F=(H?h.date_end:null)||(Y==null?void 0:Y.end);return v(T,F)},M=Math.min(30,Math.max(0,...b.map(h=>Number(h.week_end)||Number(h.week_start)||0))),Q=Array.from({length:M},(h,V)=>{var pe;const Y=V+1,H=b.find(le=>Y>=Number(le.week_start)&&Y<=Number(le.week_end)),T=(pe=H==null?void 0:H.source_json)==null?void 0:pe.week_type,F=P(Y),se=H?S(H,Y):v(F==null?void 0:F.start,F==null?void 0:F.end);return`<tr><td class="week">${Y}</td><td class="date-cell">${p(se)}</td><td>${p((H==null?void 0:H.topic)||(T==="midterm_exam"?"สอบกลางภาค":T==="final_exam"?"สอบปลายภาค":T==="break"?"หยุด/ไม่มีการเรียน":""))}</td><td>${p((H==null?void 0:H.teaching_methods)||(T!=null&&T.includes("exam")?"ทดสอบ/ประเมินผล":""))}</td><td class="note-cell">${k?p(C(H==null?void 0:H.notes)):""}</td></tr>`}).join(""),R=e??{},w=R.periods_per_week??(Number(R.credit)>0?Number(R.credit)*2:null),z=[...new Set(i.map(h=>String(h??"").trim()).filter(Boolean))].join(" , "),W=j.filter(h=>h==null?void 0:h.signature_url),oe=(o==null?void 0:o.signature_url)??((d=W.find(h=>Number(h.id)===Number(o==null?void 0:o.id)))==null?void 0:d.signature_url)??"",ne=[...A!=null&&A.head_sign_url?[{id:`dept-${A.id}`,name:A.head_name||"หัวหน้ากลุ่มสาระ",signature_url:A.head_sign_url}]:[],...W].filter((h,V,Y)=>Y.findIndex(H=>H.signature_url===h.signature_url)===V),de=`<option value="">เว้นช่องไว้เซ็นเอง</option>${oe?`<option value="${p(oe)}" data-name="${p((o==null?void 0:o.full_name)??"")}" selected>ใช้ลายเซ็นที่บันทึกไว้</option>`:""}`,ce=`<option value="">เว้นช่องไว้เซ็นเอง</option>${ne.map(h=>`<option value="${p(h.signature_url)}" data-name="${p(h.name??h.full_name??"")}" ${h.signature_url===(A==null?void 0:A.head_sign_url)?"selected":""}>${p(h.name??h.full_name??"ผู้ลงนาม")}</option>`).join("")}`,fe=window.open("","_blank");if(!fe){J("เบราว์เซอร์บล็อกหน้าต่างตัวอย่าง กรุณาอนุญาต Pop-up","warning");return}const te=5,ge=new URL("pp5-form-logo.png",window.location.href).href;fe.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>กำหนดการสอน ${p(R.subject_name)}</title><style>
    @page{size:A4;margin:13mm}*{box-sizing:border-box}body{font-family:"Sarabun",Tahoma,sans-serif;color:#111;margin:0;font-size:11pt;line-height:1.5}.toolbar{position:sticky;top:0;padding:10px;background:#f3f4f6;text-align:center}.toolbar button{border:0;border-radius:8px;background:#1d4ed8;color:white;padding:10px 20px;font-weight:bold;font-size:14px;cursor:pointer}.toolbar label{display:inline-flex;align-items:center;gap:6px;margin:4px;padding:7px;border:1px solid #d1d5db;border-radius:8px;background:white;font-size:12px}.toolbar select{max-width:230px;padding:6px;border:1px solid #d1d5db;border-radius:6px}.page{width:184mm;min-height:271mm;margin:0 auto;padding:8mm 5mm;background:white}.cover{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;page-break-after:always}.cover-logo{width:32mm;height:32mm;object-fit:contain;filter:grayscale(1);mix-blend-mode:multiply;margin-bottom:8mm}.cover h1{font-size:25pt;margin:0 0 18mm}.cover .course{font-size:16pt;font-weight:bold;margin:0 0 5mm}.cover p{font-size:14pt;margin:2mm 0}.cover .cover-info{align-self:center;width:min(100%,145mm);text-align:left}.cover .signatures{width:100%;margin-top:20mm;text-align:center;font-size:13pt}.cover .signatures p{margin:11mm 0;text-align:center}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:middle}.table{width:100%;table-layout:fixed;border-collapse:collapse;margin-top:4mm;font-size:9.5pt}.table col.col-week{width:10mm}.table col.col-date{width:31mm}.table col.col-topic{width:53mm}.table col.col-methods{width:45mm}.table col.col-notes{width:35mm}.table th,.table td{border:1px solid #555;padding:2mm 2.2mm;vertical-align:top;overflow-wrap:anywhere}.table th{background:#e8eefb;text-align:center}.table .week{text-align:center;white-space:nowrap}.table .date-cell{text-align:center;vertical-align:middle;white-space:nowrap;font-size:9pt}.table .note-cell{font-size:9pt;line-height:1.35}.table tr{break-inside:avoid;page-break-inside:avoid}.table thead{display:table-header-group}.table .doc-title th{border:0;background:white;font-size:18pt;padding:0;text-align:center}.table .doc-meta th{border:0;background:white;font-size:10pt;font-weight:normal;padding:0;text-align:center}@media print{.toolbar{display:none}.page{margin:0;width:auto;min-height:0;padding:0}.schedule{page-break-before:always}}
  </style></head><body><div class="toolbar"><label>ลายเซ็นครู<select id="cover-teacher-sign">${de}</select></label><label>หัวหน้ากลุ่มสาระ<select id="cover-dept-sign">${ce}</select></label><button onclick="window.print()">🖨️ พิมพ์ / บันทึก PDF</button></div><section class="page cover"><img class="cover-logo" src="${p(ge)}" alt="ตราโรงเรียน"><h1>กำหนดการสอน</h1><div class="cover-info"><p class="course">รายวิชา ${p(R.subject_name||"................................")} (${p(R.subject_code||".............")})</p><p>ครูผู้สอน ${p((o==null?void 0:o.full_name)||"................................")}</p><p>ชั้น ${p(R.grade_level||"....................")}</p><p>ห้องเรียน ${p(z||"................................")}</p><p>จำนวน ${p(w||"........")} คาบ/สัปดาห์</p><p>ภาคเรียนที่ ${p(x||"....")} ปีการศึกษา ${p(_||"........")}</p></div><div class="signatures"><p>ลงชื่อ <img id="cover-teacher-sign-img" class="sign-img" src="${p(oe)}" alt="" style="${oe?"":"display:none"}"> ครูผู้สอน (${p((o==null?void 0:o.full_name)||"................................")})</p><p>ลงชื่อ <img id="cover-dept-sign-img" class="sign-img" src="${p((A==null?void 0:A.head_sign_url)??"")}" alt="" style="${A!=null&&A.head_sign_url?"":"display:none"}"> หัวหน้ากลุ่มสาระการเรียนรู้ (<span id="cover-dept-signer-name">${p((A==null?void 0:A.head_name)||"................................")}</span>)</p><p>ลงชื่อ......................................................................ผู้อำนวยการโรงเรียน</p></div></section><section class="page schedule"><table class="table"><colgroup><col class="col-week"><col class="col-date"><col class="col-topic"><col class="col-methods"><col class="col-notes"></colgroup><thead><tr class="doc-title"><th colspan="${te}">กำหนดการสอน</th></tr><tr class="doc-meta"><th colspan="${te}">รายวิชา ${p(R.subject_name||"—")} รหัส ${p(R.subject_code||"—")} ${p(R.grade_level||"")} · คุณครู ${p((o==null?void 0:o.full_name)||"—")}</th></tr><tr class="doc-meta"><th colspan="${te}">ภาคเรียนที่ ${p(x||"—")} ปีการศึกษา ${p(_||"—")}</th></tr><tr><th>สัปดาห์ที่</th><th>วัน/เดือน/ปี</th><th>เนื้อหา</th><th>รูปแบบการสอน</th><th>หมายเหตุ</th></tr></thead><tbody>${Q}</tbody></table></section><script>for(const role of ['teacher','dept']){const select=document.querySelector('#cover-'+role+'-sign'),img=document.querySelector('#cover-'+role+'-sign-img'),key='pp5-course-sign-'+role+'-${Number(R.id)||0}';const previous=localStorage.getItem(key);if(previous!==null&&[...select.options].some(option=>option.value===previous))select.value=previous;const update=()=>{const option=select.selectedOptions[0];img.src=select.value;img.style.display=select.value?'':'none';if(role==='dept')document.querySelector('#cover-dept-signer-name').textContent=option?.dataset.name||'................................';localStorage.setItem(key,select.value)};select.addEventListener('change',update);update()}<\/script></body></html>`),fe.document.close()}async function ns(e,o,s){var A,j,b,k,p,C,f,v;(A=document.getElementById("course-workspace-modal"))==null||A.remove();const i=Number(o.id),x=s.filter(P=>{var S;return Number(P.course_id??((S=P.master_subjects)==null?void 0:S.id))===i}),_={class_name:"ทุกห้องในคอร์ส",course_id:i,master_subjects:o},g=document.createElement("div");g.id="course-workspace-modal",g.className="fixed inset-0 z-[95] bg-gray-50 flex items-stretch justify-stretch",g.innerHTML=`<div class="bg-gray-50 w-full h-full overflow-hidden flex flex-col">
    <header class="flex-shrink-0 px-4 sm:px-6 py-4 border-b bg-white flex items-start justify-between gap-3">
      <div class="min-w-0">
        <span class="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold">📘 ออกแบบการสอนของคอร์ส</span>
        <h2 class="mt-2 text-lg sm:text-xl font-extrabold text-gray-900 truncate">${l(o.subject_name)}</h2>
        <p class="text-xs text-gray-500 mt-0.5"><span class="font-mono text-blue-600">${l(o.subject_code??"—")}</span> · ${l(o.grade_level??"—")} · ${x.length} ห้องเรียน</p>
      </div>
      <button data-close class="w-10 h-10 flex-shrink-0 rounded-xl border bg-white text-gray-400 text-xl hover:text-gray-700">✕</button>
    </header>
    <div id="course-workspace-body" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6">
      <div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลคอร์ส...</div>
    </div>
  </div>`,document.body.appendChild(g);const c=()=>g.remove();g.querySelector("[data-close]").addEventListener("click",c),g.addEventListener("click",P=>{P.target===g&&c()});const $=g.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:P,canUseSmartClassroomForClass:S},{openLessonPlanAIWorkspace:M,openLessonPlanDocument:Q}]=await Promise.all([je(()=>import("./teacher-views-smart-classroom-u_zD57Di.js"),__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40])),je(()=>import("./lesson-plan-ai-workspace-BkpCRg6Q.js"),__vite__mapDeps([39,0,1,2,3,4,6,22,40]))]),[R,w,z,W]=await Promise.all([xs(i).catch(()=>[]),fs(i).catch(()=>[]),P(e),Te().catch(()=>({}))]),oe=x.filter(u=>S(z.unlocked,e,u.id)),ne=z.unlocked||oe.length>0,de=()=>ns(e,o,s),[ce,fe]=await Promise.all([vs().catch(()=>[]),ze().catch(()=>[])]),te=((j=x[0])==null?void 0:j.master_subjects)??{},ge=String(te.dept??o.dept??(e==null?void 0:e.dept)??"").trim().toLowerCase(),d=String(te.learning_area??"").trim(),h=String(te.subject_group??"").toUpperCase(),V=h==="ACDM"?"สามัญ":h==="ACDMVOC"?"สามัญปวช":["AGM","AGMVOC"].includes(h)?"ศาสนา":"",Y=fe.filter(u=>String(u.dept_code??"").trim().toLowerCase()===ge||String(u.dept_name??"").trim().toLowerCase()===ge),H=V?Y.filter(u=>u.category===V):Y,T=d&&H.find(u=>String(u.head_name??"").trim()===d)||H[0]||d&&fe.find(u=>String(u.head_name??"").trim()===d)||null,F=ce.find(u=>String(u.full_name??"").trim()===d),se=T?{...T,head_name:d||(T.head_name==="ทีมบริหาร"?"":T.head_name),head_sign_url:(F==null?void 0:F.signature_url)||(d&&T.head_name!==d?null:T.head_sign_url)}:d?{head_name:d,head_sign_url:(F==null?void 0:F.signature_url)??null}:null,pe=[...new Set(x.map(u=>{var a;const q=String(u.class_name??`ห้อง ${u.id}`).trim(),X=String(((a=u.master_subjects)==null?void 0:a.grade_level)??o.grade_level??"").trim();return X&&!ye(q).startsWith(ye(X))?`${X} ${q}`:q}).filter(Boolean))],le=/^\d{4}-\d{2}-\d{2}$/.test(String(W.semester_start??""))?W.semester_start:null,me=Number(o.academic_year??W.academicYear??W.academic_year),ue=Number(o.semester??W.semester),we=Number.isInteger(me)&&[1,2].includes(ue)?await yt(e.id,me,ue).catch(()=>[]):[],ve=[...new Set(we.filter(u=>Number(u.subject_id)===i).map(u=>Number(u.day_of_week)).map(u=>u===0?7:u).filter(u=>Number.isInteger(u)&&u>=1&&u<=7&&u!==6))],Se=u=>{if(!le)return null;const[q,X,a]=le.split("-").map(Number),t=new Date(q,X-1,a+(u-1)*7),r=new Date(q,X-1,a+u*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(W.semester_end??""))&&r>new Date(`${W.semester_end}T00:00:00`)&&r.setTime(new Date(`${W.semester_end}T00:00:00`).getTime());const m=y=>`${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}-${String(y.getDate()).padStart(2,"0")}`;return{start:m(t),end:m(r)}},Ee=u=>u?new Date(`${u}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],Ie=u=>{const q=Ee(u);return q.length?`${q[0]} ${q[1]} ${q[2]}`:"—"},Be=(u,q)=>{const X=Ee(u),a=Ee(q);return!X.length||!a.length?"—":X[1]===a[1]&&X[2]===a[2]?`${X[0]} - ${a[0]} ${a[1]} ${a[2]}`:X[2]===a[2]?`${X[0]} ${X[1]} - ${a[0]} ${a[1]} ${a[2]}`:`${X[0]} ${X[1]} ${X[2]} - ${a[0]} ${a[1]} ${a[2]}`},Ce={teaching:"เรียน",midterm_exam:"สอบกลางภาค",final_exam:"สอบปลายภาค",break:"หยุด/ไม่มีการเรียน"};let ke=null,n=!0;try{n=localStorage.getItem(`pp5-schedule-show-notes-${i}`)!=="false"}catch{}const I=()=>R.length?R.map(u=>{var K,re;const q=((K=u.source_json)==null?void 0:K.week_type)??"teaching",X=u.unit_title??((re=u.source_json)==null?void 0:re.unit_title),a=Se(u.week_start),t=Se(u.week_end??u.week_start),r=u.date_start||(a==null?void 0:a.start)||"",m=u.date_end||(t==null?void 0:t.end)||"";if(String(u.id)===String(ke)){const ie=(be,_e,Ve="text",rt="")=>`<input data-schedule-field="${be}" type="${Ve}" value="${l(_e??"")}" class="w-full min-w-24 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs ${rt}" />`,xe=(be,_e)=>`<textarea data-schedule-field="${be}" rows="2" class="w-full min-w-32 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${l(_e??"")}</textarea>`;return`<tr data-schedule-row="${l(u.id)}" class="border-t border-blue-100 align-top bg-blue-50/50">
          <td class="px-2 py-2 text-xs"><div class="flex items-center gap-1">${ie("week_start",u.week_start,"number","max-w-20")}<span>–</span>${ie("week_end",u.week_end??u.week_start,"number","max-w-20")}</div><select data-schedule-field="week_type" class="mt-2 w-full rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${Object.entries(Ce).map(([be,_e])=>`<option value="${be}" ${be===q?"selected":""}>${_e}</option>`).join("")}</select></td>
          <td class="w-[138px] min-w-[138px] px-2 py-2 text-center"><div class="space-y-1">${ie("date_start",r,"date")}${ie("date_end",m,"date")}</div></td>
          <td class="px-2 py-2 space-y-1">${ie("topic",u.topic,"text","min-w-48")}<label class="block text-[10px] text-gray-500">หน่วยการเรียนรู้${ie("unit_title",X,"text")}</label></td>
          <td class="px-2 py-2">${xe("teaching_methods",u.teaching_methods)}</td>
          <td class="px-2 py-2">${xe("notes",u.notes)}</td>
          <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="save" data-schedule-id="${l(u.id)}" class="rounded-lg bg-emerald-600 px-2 py-1.5 text-[10px] font-bold text-white">บันทึก</button><button type="button" data-schedule-action="cancel" class="rounded-lg border bg-white px-2 py-1.5 text-[10px] font-bold text-gray-600">ยกเลิก</button></div></td>
        </tr>`}const y=`สัปดาห์ ${u.week_start}${u.week_end!==u.week_start?`–${u.week_end}`:""}`,E=Be(r,m),U=Ce[q]??"เรียน",ee=q==="teaching"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-800";return`<tr class="border-t border-blue-100 align-top">
        <td class="px-3 py-3 text-xs font-bold whitespace-nowrap">${l(y)}<span class="block mt-1 px-2 py-1 rounded-lg ${ee} text-[10px] w-fit">${l(U)}</span></td>
        <td class="w-[138px] min-w-[138px] px-3 py-3 text-center text-xs whitespace-nowrap">${l(E)}</td>
        <td class="px-3 py-3 text-xs min-w-48"><p class="font-bold text-gray-800">${l(u.topic)}</p>${X?`<p class="text-[11px] text-blue-700 mt-1">${l(X)}</p>`:""}</td>
        <td class="px-3 py-3 text-xs min-w-36 whitespace-pre-wrap">${l(u.teaching_methods??"—")}</td>
        <td class="px-3 py-3 text-xs min-w-28 whitespace-pre-wrap">${l(u.notes??"—")}</td>
        <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="edit" data-schedule-id="${l(u.id)}" class="rounded-lg border border-blue-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-blue-700">แก้ไข</button><button type="button" data-schedule-action="delete" data-schedule-id="${l(u.id)}" class="rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-red-600">ลบ</button></div></td>
      </tr>`}).join(""):"",N=oe.map(u=>`<option value="${u.id}">${l(u.class_name??`ห้อง ${u.id}`)}</option>`).join("");$.innerHTML=`<nav class="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-4" aria-label="ส่วนออกแบบการสอน">
      <button type="button" data-course-tab="schedule" class="course-tab rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white">📘 กำหนดการสอน</button>
      <button type="button" data-course-tab="plans" class="course-tab rounded-xl border border-violet-200 bg-white px-4 py-2.5 text-sm font-bold text-violet-800">📝 แผนการจัดการเรียนรู้หน้าเดียว</button>
    </nav>
    <section data-course-panel="schedule" class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-blue-950">📘 กำหนดการสอนทั้งภาคเรียน</h3><p class="text-xs text-blue-700/70 mt-1">ภาพรวมรายสัปดาห์ของรายวิชา ใช้ร่วมกับ Smart Classroom ในห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2"><label class="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 text-xs text-blue-800"><input id="cw-schedule-show-notes" type="checkbox" class="h-4 w-4 accent-blue-700" ${n?"checked":""}> แสดงเนื้อหาหมายเหตุในเอกสาร</label><button id="cw-schedule-preview" class="min-h-[44px] px-4 rounded-xl border border-blue-200 bg-white text-blue-800 text-xs font-bold">👁️ ตัวอย่างเอกสารทั้งหมด</button><button id="cw-ai-schedule" class="min-h-[44px] px-4 rounded-xl ${ne?"bg-blue-700 hover:bg-blue-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${ne?"":"disabled"}>🤖 สร้างด้วย AI</button></div>
          </div>
          ${ne?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${le?`<p class="mt-3 text-[11px] text-blue-700">ช่วงวันที่คำนวณจากวันเปิดภาคเรียนที่ตั้งค่าไว้: ${Ie(le)} · สัปดาห์ที่ 1 เริ่มวันนี้</p>`:'<p class="mt-3 text-[11px] text-amber-700">ยังไม่ได้ตั้งค่าวันเปิดภาคเรียน ระบบจะแสดงวันที่จากกำหนดการเดิมจนกว่าจะตั้งค่าวันเริ่มภาคเรียน</p>'}
          ${R.length?`<div class="mt-4 max-h-[68vh] overflow-auto rounded-xl border border-blue-100 bg-white"><table class="w-full min-w-[780px] table-fixed text-left"><colgroup><col><col class="w-[138px]"><col><col><col><col class="w-[76px]"></colgroup><thead class="sticky top-0 bg-blue-50 text-[10px] font-extrabold text-blue-900"><tr><th class="px-3 py-2">สัปดาห์</th><th class="w-[138px] px-3 py-2 text-center">วัน/เดือน</th><th class="px-3 py-2">เนื้อหา</th><th class="px-3 py-2">รูปแบบการสอน</th><th class="px-3 py-2">หมายเหตุ</th><th class="w-[76px] px-2 py-2">จัดการ</th></tr></thead><tbody id="cw-schedule-rows">${I()}</tbody></table></div>`:'<div class="mt-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>'}
    </section>

    <section data-course-panel="plans" class="hidden rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-violet-950">📝 แผนการจัดการเรียนรู้หน้าเดียว</h3><p class="text-xs text-violet-700/70 mt-1">แผนรายครั้งที่อ้างอิงหัวข้อจากกำหนดการสอน ส่วนบันทึกหลังสอนและลายเซ็นแยกตามห้องที่มีสิทธิ์</p></div>
            <button id="cw-ai-plan" class="min-h-[44px] px-4 rounded-xl ${ne?"bg-violet-700 hover:bg-violet-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${ne?"":"disabled"}>✨ สร้างแผนด้วย AI</button>
          </div>
          ${ne?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${w.length?`<div class="mt-4 space-y-2">${w.map(u=>`<div class="flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-3 py-3"><button class="cw-plan-row min-w-0 flex-1 text-left hover:text-violet-800 transition" data-plan-id="${u.id}"><p class="text-sm font-bold text-gray-800">${l(u.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${u.week_start}${u.week_end!==u.week_start?`–${u.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button><button type="button" class="cw-plan-delete shrink-0 rounded-lg border border-red-200 bg-white px-3 py-2 text-[10px] font-bold text-red-600" data-plan-id="${u.id}">ลบ</button></div>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
    </section>
    ${w.length&&oe.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้อง Smart Classroom</h3><p class="text-xs text-gray-400 mt-1">แผนใช้ร่วมกันในรายวิชา แต่เปิดบันทึกหลังสอนเฉพาะห้องที่มีสิทธิ์</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${N}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`;const L=u=>{$.querySelectorAll("[data-course-panel]").forEach(q=>q.classList.toggle("hidden",q.dataset.coursePanel!==u)),$.querySelectorAll("[data-course-tab]").forEach(q=>{const X=q.dataset.courseTab===u;q.className=`course-tab rounded-xl px-4 py-2.5 text-sm font-bold ${X?u==="schedule"?"bg-blue-700 text-white":"bg-violet-700 text-white":"border border-gray-200 bg-white text-gray-600"}`})};$.querySelectorAll("[data-course-tab]").forEach(u=>u.addEventListener("click",()=>L(u.dataset.courseTab)));const B=$.querySelector("#cw-schedule-rows");B==null||B.addEventListener("click",async u=>{const q=u.target.closest("[data-schedule-action]");if(!q)return;const X=q.dataset.scheduleId,a=R.find(be=>String(be.id)===String(X));if(!a)return;if(q.dataset.scheduleAction==="delete"){if(!confirm(`ลบกำหนดการสอนสัปดาห์ ${a.week_start}${a.week_end!==a.week_start?`–${a.week_end}`:""} เรื่อง "${a.topic}"?`))return;q.disabled=!0;try{await ys(a.id),J("ลบกำหนดการสอนแล้ว","success"),de()}catch(be){q.disabled=!1,J(`ลบไม่สำเร็จ: ${he(be)}`,"error")}return}if(q.dataset.scheduleAction==="edit"){ke=X,B.innerHTML=I();return}if(q.dataset.scheduleAction==="cancel"){ke=null,B.innerHTML=I();return}if(q.dataset.scheduleAction!=="save")return;const t=q.closest("[data-schedule-row]"),r=be=>{var _e;return((_e=t.querySelector(`[data-schedule-field="${be}"]`))==null?void 0:_e.value)??""},m=Number(r("week_start")),y=Number(r("week_end")),E=r("week_type"),U=r("date_start")||null,ee=r("date_end")||null,K=r("topic").trim();if(!Number.isInteger(m)||m<1||!Number.isInteger(y)||y<m){J("ช่วงสัปดาห์ไม่ถูกต้อง","warning");return}if(!K){J("กรุณาระบุหัวข้อที่จะสอน","warning");return}if(!Object.hasOwn(Ce,E)){J("เลือกประเภทสัปดาห์ให้ถูกต้อง","warning");return}if(U&&ee&&ee<U){J("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");return}if(R.some(be=>{if(String(be.id)===String(a.id))return!1;const _e=Number(be.week_start),Ve=Number(be.week_end??be.week_start);return m<=Ve&&y>=_e})){J("ช่วงสัปดาห์นี้ซ้ำกับรายการอื่น กรุณาปรับเลขสัปดาห์","warning");return}const ie=r("unit_title").trim(),xe={course_id:i,week_start:m,week_end:y,date_start:U,date_end:ee,topic:K,teaching_methods:r("teaching_methods").trim()||null,notes:r("notes").trim()||null,source_json:{...a.source_json??{},week_start:m,week_end:y,date_start:U,date_end:ee,week_type:E,unit_title:ie}};q.disabled=!0,q.textContent="กำลังบันทึก…";try{await hs(a.id,xe),Object.assign(a,xe,{unit_title:ie||null}),ke=null,B.innerHTML=I(),J("บันทึกแถวกำหนดการแล้ว","success")}catch(be){q.disabled=!1,q.textContent="บันทึก",J(`บันทึกไม่สำเร็จ: ${he(be)}`,"error")}}),(b=$.querySelector("#cw-schedule-show-notes"))==null||b.addEventListener("change",u=>{n=u.currentTarget.checked;try{localStorage.setItem(`pp5-schedule-show-notes-${i}`,String(n))}catch{}}),(k=$.querySelector("#cw-ai-schedule"))==null||k.addEventListener("click",()=>M({teacher:e,cls:_,courseId:i,syllabusItems:R,lessonPlans:w,currentWeek:1,initialMode:"schedule",semesterStart:le,semesterEnd:W.semester_end,scheduledDays:ve,onSaved:de})),(p=$.querySelector("#cw-ai-plan"))==null||p.addEventListener("click",()=>M({teacher:e,cls:_,courseId:i,syllabusItems:R,lessonPlans:w,currentWeek:1,initialMode:"plan",semesterStart:le,semesterEnd:W.semester_end,scheduledDays:ve,onSaved:de})),(C=$.querySelector("#cw-schedule-preview"))==null||C.addEventListener("click",()=>{const u=$.querySelector("#cw-schedule-show-notes");n=(u==null?void 0:u.checked)===!0;try{localStorage.setItem(`pp5-schedule-show-notes-${i}`,String(n))}catch{}zs({subject:o,teacher:e,syllabusItems:R,roomNames:pe,semester:W.semester??o.semester,academicYear:W.academicYear??W.academic_year??o.academic_year,semesterStart:le,semesterEnd:W.semester_end,showNotesContent:n,departmentHead:se,signatureTeachers:ce})});let D=null;const G=$.querySelector("#cw-document-picker"),O=()=>{G&&(G.classList.add("hidden"),G.classList.remove("flex"))};$.querySelectorAll(".cw-plan-row").forEach(u=>u.addEventListener("click",()=>{D=w.find(q=>q.id===parseInt(u.dataset.planId,10))??null,!(!D||!oe.length||!G)&&(G.classList.remove("hidden"),G.classList.add("flex"))})),$.querySelectorAll(".cw-plan-delete").forEach(u=>u.addEventListener("click",async()=>{const q=w.find(X=>X.id===parseInt(u.dataset.planId,10));if(q&&confirm(`ลบแผน "${q.title}"? บันทึกหลังสอนและลายเซ็นที่ผูกกับแผนนี้จะถูกลบด้วย`)){u.disabled=!0;try{await ws(q.id),J("ลบแผนการสอนแล้ว","success"),de()}catch(X){u.disabled=!1,J(`ลบไม่สำเร็จ: ${he(X)}`,"error")}}})),(f=$.querySelector("#cw-document-cancel"))==null||f.addEventListener("click",O),G==null||G.addEventListener("click",u=>{u.target===G&&O()}),(v=$.querySelector("#cw-document-open"))==null||v.addEventListener("click",()=>{var X;const u=parseInt((X=$.querySelector("#cw-document-class"))==null?void 0:X.value,10),q=oe.find(a=>a.id===u);!D||!q||(O(),Q({plan:D,cls:q,teacher:e,classId:q.id,currentWeek:D.week_start,semesterStart:le,semesterEnd:W.semester_end,scheduledDays:ve}))})}catch(P){$.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${l(he(P))}</div>`}}const tt={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnExternalAI:"ใช้ AI ของฉัน",btnExternalAISub:"คัดลอก Prompt + วาง JSON",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 1 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["รหัสมาตรฐาน/ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},en:{key:"en",dir:"ltr",aiLang:"formal English",label:"English",title:"Course Description",close:"Close",save:"Save",saving:"Saving...",helpTitle:"Help me fill this in",helpSub:"Enter the lessons/topics below, then choose a filling method",topicLabel:"Lessons / Topics (add multiple)",topicPlaceholder:"e.g. Statistics, Exponents, Reading comprehension",addTopic:"Add topic",btnCurriculum:"Find curriculum",btnCurriculumSub:"Curriculum database",btnCurriculumLoading:"Searching...",btnAI:"Draft with AI",btnAISub:"Gemini + topics",btnAILoading:"AI is drafting...",btnExternalAI:"Use my AI",btnExternalAISub:"Copy Prompt + paste JSON",btnImg:"Read image",btnImgSub:"AI reads image",btnImgLoading:"Reading...",descLabel:"Course description / overall learning outcomes",descPlaceholder:"Write in English or another language; text direction is supported automatically",dirLabel:"Text direction",dirAuto:"Automatic",dirRTL:"Right to left",dirLTR:"Left to right",signerLabel:"Signatory",signerPlaceholder:"Head of learning area",signerHint:"Used as the learning-area head in the document",tableTitle:"Standards / Indicators / Learning outcomes",tableHint:"Rows containing text become selectable assessment items",tplBasic:"Basic: 1 column",tplExtra:"Additional: 1 column",addCol:"+ Column",addRow:"+ Row",rowHeader:"No.",delRow:"Delete",objTitle:"Assessment objectives",objHint:"(click to select)",between:"During term",mid:"Midterm",final:"Final",noOpts:"No selectable items yet",notSelected:"Not selected",colsBasic:["Standard/indicator code and full text"],colsExtra:["Learning outcomes"],colNew:e=>`Column ${e}`,pickerTitles:{mid:"Select midterm items",between:"Select during-term items",final:"Select final items"},pickerCancel:"Cancel",pickerOk:"OK",confirmOverwrite:"Searching the curriculum will overwrite existing data. Continue?",confirmAIOverwrite:"Let AI draft new content over the existing data?",confirmImgOverwrite:"Fill from the image and overwrite existing data?",confirmColChange:"Change the column format? Existing data will be fitted to the new columns.",toastSaved:"Course description saved",toastSearchOk:e=>`Found ${e} curriculum items - please review before saving`,toastSearchEmpty:"No curriculum items found - try Draft with AI instead",toastAIDone:"AI drafted the content - please review it carefully before saving",toastImgDone:"AI read the image - please review the content before saving"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"١ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["كود ڤياوايان/ڤتوك دان teks penuh"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمود أساسي واحد",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["رمز المعيار/المؤشر والنص الكامل"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"1 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Kod piawaian/petunjuk dan teks penuh"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let st=null;async function Vs(){if(st)return st;const e=await gs().catch(()=>[]);return st=Object.fromEntries(e.map(o=>[o.lang_key,o.settings??{}])),st}async function Vo(e,o){var Ce,ke;const[s,i]=await Promise.all([bs(o.id).catch(n=>(J("โหลดคำอธิบายฯ ไม่สำเร็จ: "+he(n),"error"),null)),Vs()]),x=n=>{const I=Array.isArray(n)?n:["รหัสมาตรฐาน/ตัวชี้วัด"];return I.length?I.map(N=>String(N??"")):["รหัสมาตรฐาน/ตัวชี้วัด"]},_=(n,I)=>{const L=(Array.isArray(n)?n:[]).map(B=>{const D=Array.isArray(B)?B:Object.values(B??{});return Array.from({length:I},(G,O)=>String(D[O]??""))});return L.length?L:Array.from({length:12},()=>Array.from({length:I},()=>""))},g=n=>[...new Set((Array.isArray(n)?n:[]).map(I=>parseInt(I,10)).filter(I=>Number.isFinite(I)&&I>0))],c=o.subject_group==="ACDMVOC",$=!c&&(!o.subject_group||["ACDM","AGM"].includes(o.subject_group)),A=(n,I,N)=>{const B=(Array.isArray(n)?n:[]).map(D=>Object.fromEntries(I.map(G=>[G,String((D==null?void 0:D[G])??"")])));for(;B.length<N;)B.push(Object.fromEntries(I.map(D=>[D,""])));return B};let j=x(s==null?void 0:s.table_columns),b=_(s==null?void 0:s.table_rows,j.length),k=g(s==null?void 0:s.midterm_objective_items),p=g(s==null?void 0:s.between_objective_items),C=g(s==null?void 0:s.final_objective_items),f=(s==null?void 0:s.between_objective_extra)??"",v=(s==null?void 0:s.midterm_objective_extra)??"",P=(s==null?void 0:s.final_objective_extra)??"",S=["auto","rtl","ltr"].includes(s==null?void 0:s.text_direction)?s.text_direction:"auto",M=(s==null?void 0:s.description)||"",Q=(s==null?void 0:s.signer_name)||o.learning_area||"",R=(Ce=s==null?void 0:s.topic_list)!=null&&Ce.length?s.topic_list:[""],w=A(s==null?void 0:s.voc_objectives,["objective","competency"],10),z=A(s==null?void 0:s.voc_schedule,["week","content","note"],20),W="",oe="th";const ne=()=>{const n={...tt.th,...tt[oe]},I=(i==null?void 0:i[oe])??{},N={...n,...I};return I.pickerTitles&&(N.pickerTitles={...n.pickerTitles,...I.pickerTitles}),N},de=()=>{if(document.getElementById("cd2-rtl-font"))return;const n=document.createElement("link");n.id="cd2-rtl-font",n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(n)},[ce,fe]=await Promise.all([Te().catch(()=>({})),ze().catch(()=>[])]),te=fe.find(n=>n.dept_code===o.dept),ge=(te==null?void 0:te.dept_name)??o.dept??"";(ke=document.getElementById("course-doc-page2-modal"))==null||ke.remove();const d=document.createElement("div");d.id="course-doc-page2-modal",d.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(d);const h="/pp5online/course-doc/course-description-guide.png",V=()=>{var L;(L=document.getElementById("course-description-guide-modal"))==null||L.remove();const n=document.createElement("div");n.id="course-description-guide-modal",n.className="fixed inset-0 z-[210] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6",n.innerHTML=`<div role="dialog" aria-modal="true" aria-labelledby="course-description-guide-title" class="relative flex max-h-[96vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div class="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3 sm:px-5">
        <div class="min-w-0"><h3 id="course-description-guide-title" class="truncate text-sm font-extrabold text-gray-800 sm:text-base">📘 คู่มือการเขียนคำอธิบายรายวิชา</h3><p class="mt-0.5 text-[11px] text-gray-400">โปรดอ่านแนวทางก่อนสร้าง Prompt หรือวาง JSON จาก AI</p></div>
        <button type="button" data-guide-close aria-label="ปิดคู่มือ" class="min-h-[40px] shrink-0 rounded-xl border border-gray-200 px-3 text-sm font-bold text-gray-500 hover:bg-gray-50">ปิด</button>
      </div>
      <div class="min-h-0 overflow-y-auto bg-slate-50 p-2 sm:p-4"><img src="${h}" alt="คู่มือการเขียนคำอธิบายรายวิชาพื้นฐานและรายวิชาเพิ่มเติมตามแนวทาง สพฐ." class="mx-auto block h-auto max-h-[calc(96vh-120px)] w-auto max-w-full rounded-xl object-contain shadow-sm" /></div>
      <div class="flex justify-end border-t border-gray-100 bg-white px-4 py-3 sm:px-5"><button type="button" data-guide-close class="min-h-[42px] rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white hover:bg-emerald-700">เข้าใจแล้ว เริ่มกรอกข้อมูล</button></div>
    </div>`,document.body.appendChild(n);const I=()=>{n.remove(),document.removeEventListener("keydown",N)},N=B=>{B.key==="Escape"&&I()};n.addEventListener("click",B=>{B.target===n&&I()}),n.querySelectorAll("[data-guide-close]").forEach(B=>B.addEventListener("click",I)),document.addEventListener("keydown",N)},Y=(n,I="")=>{const L=[n.length?[...n].sort((B,D)=>B-D).join(", "):"",I.trim()].filter(Boolean);return L.length?L.join(", "):ne().notSelected},H=()=>{const n=b.length;return Array.from({length:n},(I,N)=>N+1).filter(I=>{var N;return(N=b[I-1])==null?void 0:N.some(L=>String(L??"").trim())})},T=()=>{const n=ne(),I=H(),N=n.dir==="rtl";N&&de();const L=S==="auto"?n.dir:S,B=L==="rtl"?"text-right":"text-left",D=N?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";d.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${L}" style="${D}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${n.title}</h2>
          <p class="text-xs text-gray-400 truncate">${l(o.subject_name)} · ${l(o.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${n.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${n.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${L}" style="${D}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(tt).map(G=>{var O;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${oe===G.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${G.key}">${((O=i==null?void 0:i[G.key])==null?void 0:O.label)||G.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${L}" style="${D}">
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
                <span class="text-xs text-gray-400">${l(o.grade_level||"")} · ${l(ge||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${R.map((G,O)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${ae} flex-1" value="${l(G)}"
                      placeholder="${l(n.topicPlaceholder)}" dir="${L}" data-idx="${O}" />
                    ${R.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${O}">✕</button>`:""}
                  </div>`).join("")}
              </div>
              <button id="cd2-add-topic" type="button"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 mt-1">
                <span class="text-base leading-none">＋</span> ${n.addTopic}
              </button>
            </div>

            <!-- AI / curriculum action buttons -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
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
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-external-ai" type="button"
                  class="w-full py-2.5 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700 flex items-center justify-center gap-1">
                  🤖 ${n.btnExternalAI||"ใช้ AI ของฉัน"}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${n.btnExternalAISub||"คัดลอก Prompt + วาง JSON"}</span>
              </div>
            </div>

            ${W?`<p class="text-xs mt-3 ${W.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${l(W)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${n.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${L}"
                  class="${ae} ${B} min-h-[132px] leading-7"
                  placeholder="${l(n.descPlaceholder)}">${l(M)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.dirLabel}</span>
                  <select id="cd2-dir" class="${$e}">
                    <option value="auto" ${S==="auto"?"selected":""}>${n.dirAuto}</option>
                    <option value="rtl" ${S==="rtl"?"selected":""}>${n.dirRTL}</option>
                    <option value="ltr" ${S==="ltr"?"selected":""}>${n.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.signerLabel}</span>
                  <input id="cd2-signer" class="${ae} ${B}" value="${l(Q)}" placeholder="${l(n.signerPlaceholder)}" dir="${L}" />
                  <p class="text-xs text-gray-400 mt-1">${n.signerHint}</p>
                </label>
              </div>
            </div>
          </div>

          ${c?`
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
                  ${w.map((G,O)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${O+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${O}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(G.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${O}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(G.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${O}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                  ${z.map((G,O)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${O}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${l(G.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${O}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(G.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${O}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${l(G.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${O}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${L}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${n.rowHeader}</th>
                    ${j.map((G,O)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${O}" class="cd2-col ${ae} ${B} py-2 font-semibold" value="${l(G)}" dir="${L}" />
                          ${j.length>1?`<button data-del-col="${O}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${b.map((G,O)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${O+1}</td>
                      ${j.map((u,q)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${O}" data-cell="${q}" rows="2" dir="${L}"
                            class="cd2-cell ${B} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(G[q]||"")}</textarea>
                        </td>`).join("")}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${O}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${n.delRow}</button>
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <h3 class="font-bold text-gray-800 mb-3">${n.objTitle} <span class="text-xs font-normal text-gray-400">${n.objHint}</span></h3>
            <div class="grid sm:grid-cols-3 gap-3">
              <button id="cd2-pick-between" class="${B} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${l(Y(p,f))}</p>
              </button>
              <button id="cd2-pick-mid" class="${B} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${l(Y(k,v))}</p>
              </button>
              <button id="cd2-pick-final" class="${B} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${l(Y(C,P))}</p>
              </button>
            </div>
            ${I.length?"":`<p class="text-xs text-amber-600 mt-3">${n.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,Be()},F=()=>{var n,I,N;return R=[...d.querySelectorAll(".cd2-topic-input")].map(L=>L.value.trim()).filter(Boolean),R.length||(R=[""]),M=((n=d.querySelector("#cd2-description"))==null?void 0:n.value)??"",Q=((I=d.querySelector("#cd2-signer"))==null?void 0:I.value)??"",S=((N=d.querySelector("#cd2-dir"))==null?void 0:N.value)??S,d.querySelectorAll(".cd2-col").forEach(L=>{j[Number(L.dataset.col)]=L.value}),d.querySelectorAll(".cd2-cell").forEach(L=>{const B=Number(L.dataset.row),D=Number(L.dataset.cell);b[B]||(b[B]=Array.from({length:j.length},()=>"")),b[B][D]=L.value}),d.querySelectorAll(".cd2-voc-obj-cell").forEach(L=>{const B=Number(L.dataset.vocObjRow),D=L.dataset.vocObjField;w[B]||(w[B]={objective:"",competency:""}),w[B][D]=L.value}),d.querySelectorAll(".cd2-voc-sch-cell").forEach(L=>{const B=Number(L.dataset.vocSchRow),D=L.dataset.vocSchField;z[B]||(z[B]={week:"",content:"",note:""}),z[B][D]=L.value}),{desc:M,signer:Q}},se=n=>{const I=Array.isArray(n==null?void 0:n.columns)&&n.columns.length?n.columns.map(D=>String(D??"").trim()).filter(Boolean):ne().colsExtra,N=Array.isArray(n==null?void 0:n.rows)?n.rows.map(D=>{const G=Array.isArray(D)?D:Object.values(D??{});return Array.from({length:I.length},(O,u)=>String(G[u]??"").trim())}).filter(D=>D.some(Boolean)):[];j=I,b=N.length?N:Array.from({length:12},()=>Array.from({length:j.length},()=>"")),n!=null&&n.description&&(M=String(n.description)),k=g((n==null?void 0:n.midterm_items)??(n==null?void 0:n.midtermObjectiveItems)),p=g((n==null?void 0:n.between_items)??(n==null?void 0:n.betweenObjectiveItems)),C=g((n==null?void 0:n.final_items)??(n==null?void 0:n.finalObjectiveItems));const L=H(),B=Math.ceil(L.length/2);k.length||(k=L.slice(0,Math.min(3,B))),p.length||(p=L.slice(0,Math.min(4,L.length))),C.length||(C=L.slice(-Math.min(3,L.length)))},pe=n=>String(n??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,""),le={schema_version:"pp5.course_description.v1",type:"course_description",course:{subject_code:o.subject_code??"",subject_name:o.subject_name??"",grade_level:o.grade_level??"",learning_area:ge},description:"คำอธิบายรายวิชาโดยสรุป...",topic_list:["บทที่ 1 ...","บทที่ 2 ..."],table_columns:["รหัสมาตรฐาน/ตัวชี้วัด"],table_rows:[["ค 1.1 ม.2/1 : เข้าใจ..."],["ค 1.2 ม.2/2 : วิเคราะห์..."]],between_objective_items:[1],between_objective_extra:"",midterm_objective_items:[1,2],midterm_objective_extra:"",final_objective_items:[2],final_objective_extra:"",signer_name:"",text_direction:"auto",voc_objectives:[{objective:"",competency:""}],voc_schedule:[{week:"1",content:"",note:""}]},me=()=>{F();const n=ne(),I=$&&j.length===1,N=!c&&!$&&j.length===1,L=I?'รูปแบบรายวิชาพื้นฐาน (1 คอลัมน์): ยึดมาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก ในคำอธิบายให้เขียนเป็นความเรียงสรุปว่าเรียนอะไร ใช้กระบวนการใด และคาดหวังให้ผู้เรียนเกิดความรู้/ทักษะอะไร ตอนท้ายอาจระบุรหัสตัวชี้วัดที่เกี่ยวข้องได้ แต่ห้ามคัดลอกข้อความตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย; ในแต่ละแถวของตารางให้รวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็มไว้ในคอลัมน์เดียว เช่น "ค 1.1 ม.2/1 : ..."':N?"รูปแบบรายวิชาเพิ่มเติม (1 คอลัมน์): ยึดผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก; ในตารางให้ใส่ผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",B={subject_code:o.subject_code??"",subject_name:o.subject_name??"",grade_level:o.grade_level??"",subject_group:o.subject_group??"",learning_area:ge,credit:o.credit??"",target_language:n.aiLang,is_voc:c,topics:R.filter(Boolean),description:M,table_columns:j,table_rows:b.filter(D=>D.some(G=>String(G??"").trim())),voc_objectives:c?w.filter(D=>Object.values(D).some(G=>String(G??"").trim())):[],voc_schedule:c?z.filter(D=>Object.values(D).some(G=>String(G??"").trim())):[]};return`คุณเป็นผู้ช่วยจัดทำเอกสารคำอธิบายรายวิชา ปพ.5 สำหรับครูผู้สอน
เขียนค่าข้อมูลทุกช่องที่เป็นเนื้อหาเป็น${n.aiLang} ตามภาษาที่ครูเลือกอยู่ในขณะนี้ ส่วนชื่อ field ใน JSON ต้องคงเป็นภาษาอังกฤษตาม schema

งานที่ต้องทำ:
1. จัดทำคำอธิบายรายวิชา/ผลการเรียนรู้ภาพรวมให้เป็นภาษาทางการ กระชับ และเหมาะกับระดับชั้น
2. จัดทำรายการบท/หัวข้อการเรียนรู้ใน topic_list
3. จัดทำตารางมาตรฐานการเรียนรู้ ตัวชี้วัด หรือผลการเรียนรู้ ให้สอดคล้องกับข้อมูลหลักสูตรที่แนบหรือผู้ใช้ให้มา
4. เลือกหมายเลขแถวที่เหมาะสมสำหรับการประเมินระหว่างภาค กลางภาค และปลายภาค
5. ${c?"สำหรับ ACDMVOC ให้จัดทำ voc_objectives และ voc_schedule ด้วย โดยไม่ต้องสร้างรหัสมาตรฐานขึ้นเอง":"หากไม่มีข้อมูลมาตรฐาน/ตัวชี้วัดที่เชื่อถือได้ ให้ระบุข้อความที่ต้องตรวจสอบเพิ่มเติมแทนการแต่งรหัสขึ้นเอง"}

ข้อมูลรายวิชาจากระบบ PP5:
${JSON.stringify(B,null,2)}

ข้อกำหนดสำคัญ:
- ใช้ข้อมูลจากหลักสูตร หนังสือเรียน หรือเอกสารที่ผู้ใช้แนบเป็นหลัก และห้ามเดาข้อมูลที่ไม่มีแหล่งอ้างอิง
- แนวทางการเขียนตามคู่มือ: ${L}
- คำอธิบายรายวิชาต้องสรุปสาระสำคัญ กระบวนการเรียนรู้ และผลที่คาดหวังให้ผู้เรียนเกิดขึ้น ไม่ใช่รายการคัดลอกมาตรฐาน/ตัวชี้วัดหรือผลการเรียนรู้ทั้งหมด
- table_rows ต้องเป็น array ของ array และจำนวนช่องต้องตรงกับ table_columns
- หมายเลขใน between_objective_items, midterm_objective_items และ final_objective_items ต้องอ้างถึงแถวที่มีอยู่จริง
- ตอบกลับเป็น JSON ตาม schema นี้เท่านั้น โดยครูจะนำ JSON กลับมาวางในระบบเพื่อให้ตรวจสอบก่อนบันทึก
- ต้องตอบเป็นโค้ด JSON เพียงกล่องเดียวชนิด json ห้ามมีคำอธิบายก่อนหรือหลังกล่อง

ตัวอย่าง schema:
${JSON.stringify(le,null,2)}`},ue=n=>{var B;let I;try{I=JSON.parse(pe(n))}catch{throw new Error("JSON ไม่ถูกต้อง กรุณาตรวจเครื่องหมายปีกกาและเครื่องหมายคำพูด")}if((I==null?void 0:I.type)!=="course_description")throw new Error("ต้องเป็น JSON ประเภท course_description");if(!String(I.description??"").trim())throw new Error("ยังไม่มี description คำอธิบายรายวิชา");const N=Array.isArray(I.table_columns)&&I.table_columns.length&&Array.isArray(I.table_rows);if(!c&&!N)throw new Error("ต้องมี table_columns และ table_rows สำหรับรายวิชานี้");if(N&&!I.table_rows.some(D=>Array.isArray(D)&&D.some(G=>String(G??"").trim())))throw new Error("ต้องมี table_rows อย่างน้อย 1 แถวที่มีข้อมูล");if(N&&I.table_rows.some(D=>!Array.isArray(D)||D.length!==I.table_columns.length))throw new Error("จำนวนช่องใน table_rows ต้องตรงกับจำนวน table_columns");if(I.text_direction&&!["auto","rtl","ltr"].includes(I.text_direction))throw new Error("text_direction ต้องเป็น auto, rtl หรือ ltr");const L=((B=I.table_rows)==null?void 0:B.length)??0;for(const D of["between_objective_items","midterm_objective_items","final_objective_items"])if(I[D]!=null&&(!L||!Array.isArray(I[D])||I[D].some(G=>!Number.isInteger(Number(G))||Number(G)<1||Number(G)>L)))throw new Error(`${D} ต้องเป็นหมายเลขแถวที่มีอยู่จริง`);if(c){if(!Array.isArray(I.voc_objectives)||!I.voc_objectives.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_objectives");if(!Array.isArray(I.voc_schedule)||!I.voc_schedule.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_schedule")}return I},we=n=>{Array.isArray(n.table_columns)&&n.table_columns.length&&Array.isArray(n.table_rows)?se({description:n.description,columns:n.table_columns,rows:n.table_rows,midterm_items:n.midterm_objective_items,between_items:n.between_objective_items,final_items:n.final_objective_items}):M=String(n.description??""),Array.isArray(n.topic_list)&&(R=n.topic_list.map(I=>String(I??"").trim()).filter(Boolean),R.length||(R=[""])),n.between_objective_extra!=null&&(f=String(n.between_objective_extra)),n.midterm_objective_extra!=null&&(v=String(n.midterm_objective_extra)),n.final_objective_extra!=null&&(P=String(n.final_objective_extra)),n.signer_name!=null&&(Q=String(n.signer_name)),n.text_direction&&["auto","rtl","ltr"].includes(n.text_direction)&&(S=n.text_direction),c&&(w=A(n.voc_objectives,["objective","competency"],10),z=A(n.voc_schedule,["week","content","note"],20))},ve=()=>{var G;(G=document.getElementById("cd2-external-ai-modal"))==null||G.remove();const n=document.createElement("div");n.id="cd2-external-ai-modal",n.className="fixed inset-0 z-[190] flex items-center justify-center bg-black/60 p-3",n.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[94vh] overflow-y-auto p-5 sm:p-6">
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
    </div>`,document.body.appendChild(n);const I=()=>me(),N=(O,u)=>{const q=n.querySelector("#cd2-external-result");q.className=`mt-2 rounded-xl px-3 py-2 text-xs ${u?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-red-50 text-red-700 border border-red-100"}`,q.textContent=O},L=n.querySelector("#cd2-external-prompt"),B=Os({copyButton:n.querySelector("#cd2-external-copy")});d.addEventListener("input",O=>{O.target instanceof Element&&O.target.matches("input, textarea, select")&&B.invalidate()}),d.addEventListener("change",O=>{O.target instanceof Element&&O.target.matches("input, textarea, select")&&B.invalidate()}),d.addEventListener("click",O=>{O.target.closest("button")&&B.invalidate()});const D=()=>n.remove();n.addEventListener("click",O=>{O.target===n&&D()}),n.querySelector("[data-external-close]").addEventListener("click",D),n.querySelector("#cd2-external-generate").addEventListener("click",()=>{L.value=I(),B.markGenerated(),J("สร้าง Prompt แล้ว","success")}),n.querySelector("#cd2-external-copy").addEventListener("click",async()=>{if(!B.isReady()){J("กรุณากด “สร้าง Prompt ใหม่” หลังแก้ข้อมูลก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(L.value),J("คัดลอก Prompt แล้ว","success")}catch{L.select(),document.execCommand("copy"),J("คัดลอก Prompt แล้ว","success")}}),n.querySelector("#cd2-external-validate").addEventListener("click",()=>{var O;try{const u=ue(n.querySelector("#cd2-external-json").value);N(`JSON ถูกต้อง${(O=u.table_rows)!=null&&O.length?`: ${u.table_rows.length} แถว`:""}${c?` · ${u.voc_schedule.length} สัปดาห์`:""}`,!0)}catch(u){N(u.message,!1)}}),n.querySelector("#cd2-external-import").addEventListener("click",()=>{try{const O=ue(n.querySelector("#cd2-external-json").value);we(O),D(),W="✅ นำเข้าข้อมูลจาก AI ภายนอกแล้ว — กรุณาตรวจสอบก่อนบันทึก",T(),J("นำเข้าคำอธิบายรายวิชาแล้ว กรุณาตรวจสอบก่อนบันทึก","success")}catch(O){N(O.message,!1)}})},Se=n=>n.some(N=>String(N.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:n.map((N,L)=>[`${N.item_no??L+1}.${N.learning_outcome_text??N.indicator_text??N.standard_text??""}`]),description:M,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((N,L)=>L+1),final_items:n.slice(Math.ceil(n.length/2)).map((N,L)=>L+1+Math.ceil(n.length/2))}:{source:"curriculum",columns:["รหัสมาตรฐาน/ตัวชี้วัด"],rows:n.map((N,L)=>{const B=[N.standard_code,N.indicator_code].filter(Boolean).join(" "),D=N.indicator_text||N.standard_text||N.learning_outcome_text||"";return[((B||String(N.item_no??L+1)+".")+" : "+D).trim()]}),description:M,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((N,L)=>L+1),final_items:n.slice(Math.ceil(n.length/2)).map((N,L)=>L+1+Math.ceil(n.length/2))},Ee=async()=>{var t,r,m,y,E;const n=ne(),I=$&&j.length===1,N=!c&&!$&&j.length===1,L=I?n.colsBasic:N?n.colsExtra:j,B=I||N?'single column named "'+L[0]+'"':"custom columns named "+JSON.stringify(L),D=I?"รายวิชาพื้นฐาน: ใช้มาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก เขียนคำอธิบายเป็นความเรียงสรุปสาระ กระบวนการ และผลที่คาดหวัง ไม่คัดลอกตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย และให้แต่ละแถวในคอลัมน์เดียวรวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็ม เช่น ค 1.1 ม.2/1 : ...":N?"รายวิชาเพิ่มเติม: ใช้ผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก และให้ตารางสะท้อนผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",G=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${n.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${o.subject_name||""}
- รหัสวิชา: ${o.subject_code||""}
- ชั้น: ${o.grade_level||""}
- กลุ่มสาระ: ${ge||o.dept||""}
- หน่วยกิต: ${o.credit||""}
- เรื่อง/บทที่สอน: ${R.filter(Boolean).join(", ")||"ไม่ระบุ"}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${B}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม
5. แนวทางการเขียน: ${D}

Return exactly one JSON object wrapped in a single fenced Markdown code block using \`\`\`json and \`\`\`. No text before or after the code block. This makes the AI response show a clear copy-code button:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`,{data:O,error:u}=await pt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:G}});if(u)throw new Error(u.message??"Edge Function error");if(O!=null&&O.error)throw new Error(`Gemini: ${O.error.message??O.error.status}`);const q=((E=(y=(m=(r=(t=O.candidates)==null?void 0:t[0])==null?void 0:r.content)==null?void 0:m.parts)==null?void 0:y[0])==null?void 0:E.text)??"",X=q.match(/```json\s*([\s\S]*?)```/)||q.match(/(\{[\s\S]*\})/),a=X?X[1]??X[0]:null;if(!a)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(a)},Ie=n=>{var X;F();const I=n==="mid"?k:n==="between"?p:C,N=n==="mid"?v:n==="between"?f:P,L=H();if(!L.length){J("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(X=document.getElementById("cd2-picker"))==null||X.remove();const B=ne(),D={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},G={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},O=a=>{const t=(b[a-1]??[]).find(m=>String(m??"").trim()),r=String(t??"").trim();return r.length>30?r.slice(0,30)+"…":r},u=document.createElement("div");u.id="cd2-picker",u.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",u.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${B.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${B.pickerTitles[n]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${L.map(a=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${D[n]} w-4 h-4 flex-shrink-0" value="${a}" ${I.includes(a)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${a}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${l(O(a))}</span>
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
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${G[n]} text-white text-sm font-semibold">${B.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(u);const q=()=>u.remove();u.querySelector("#cd2-picker-close").addEventListener("click",q),u.querySelector("#cd2-picker-cancel").addEventListener("click",q),u.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const a=[...u.querySelectorAll(".cd2-choice:checked")].map(r=>Number(r.value)),t=u.querySelector("#cd2-picker-extra").value.trim();n==="mid"?(k=a,v=t):n==="between"?(p=a,f=t):(C=a,P=t),q(),T()})},Be=()=>{var N,L,B,D,G,O,u,q,X;const n=ne();d.querySelectorAll(".cd2-lang-btn").forEach(a=>{a.addEventListener("click",()=>{var t;F(),oe=a.dataset.lang||"th",S=((t=tt[oe])==null?void 0:t.dir)||"ltr",T()})}),d.querySelector("#cd2-close").addEventListener("click",()=>d.remove()),d.querySelector("#cd2-dir").addEventListener("change",a=>{F(),S=a.target.value,T()}),d.querySelector("#cd2-external-ai").addEventListener("click",ve),d.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(F(),(b.some(r=>r.some(m=>String(m??"").trim()))||M.trim())&&!confirm(n.confirmOverwrite))return;const t=d.querySelector("#cd2-search-curriculum");t.disabled=!0,t.innerHTML=`⏳ ${n.btnCurriculumLoading}`;try{const r=await _s({subjectName:o.subject_name,subjectCode:o.subject_code,gradeLevel:o.grade_level,dept:ge,topic:R.filter(Boolean).join(" ")});r.length?(se(Se(r)),W=n.toastSearchOk(r.length)):W=n.toastSearchEmpty,T()}catch(r){J("ค้นหลักสูตรไม่สำเร็จ: "+he(r),"error")}finally{t.disabled=!1,t.innerHTML=`🔍 ${n.btnCurriculum}`}}),d.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(F(),(b.some(r=>r.some(m=>String(m??"").trim()))||M.trim())&&!confirm(n.confirmAIOverwrite))return;const t=d.querySelector("#cd2-auto-fill");t.disabled=!0,t.innerHTML=`⏳ ${n.btnAILoading}`;try{const r=await Ee();se(r),W=n.toastAIDone,T()}catch(r){J("AI ร่างไม่สำเร็จ: "+he(r),"error")}finally{t.disabled=!1,t.innerHTML=`✨ ${n.btnAI}`}}),d.querySelector("#cd2-img-input").addEventListener("change",async a=>{var y,E,U,ee,K,re;const t=(y=a.target.files)==null?void 0:y[0];if(!t)return;if((b.some(ie=>ie.some(xe=>String(xe??"").trim()))||M.trim())&&!confirm(n.confirmImgOverwrite)){a.target.value="";return}const m=d.querySelector("#cd2-img-btn");m.textContent=`⏳ ${n.btnImgLoading}`;try{const ie=await new Promise((cs,ps)=>{const Ze=new FileReader;Ze.onload=()=>cs(Ze.result.split(",")[1]),Ze.onerror=ps,Ze.readAsDataURL(t)}),xe=$&&j.length===1,be=!c&&!$&&j.length===1,_e=xe?n.colsBasic:be?n.colsExtra:j,Ve=xe||be?'single column named "'+_e[0]+'"':"custom columns named "+JSON.stringify(_e),rt=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${n.aiLang}
ข้อมูลรายวิชา: "${o.subject_name??""}" รหัส ${o.subject_code??""} ชั้น ${o.grade_level??""} กลุ่มสาระ ${ge}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${Ve})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบกลับเป็น JSON โดยครอบผลลัพธ์ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีข้อความก่อนหรือหลังกล่อง:
{
  "description": "...",
  "columns": ${JSON.stringify(_e)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:Re,error:Et}=await pt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:rt,imageBase64:ie,imageMimeType:t.type||"image/jpeg"}});if(Et)throw new Error(Et.message??"Edge Function error");if(Re!=null&&Re.error)throw new Error(`Gemini: ${Re.error.message??Re.error.status}`);const Ct=((re=(K=(ee=(U=(E=Re.candidates)==null?void 0:E[0])==null?void 0:U.content)==null?void 0:ee.parts)==null?void 0:K[0])==null?void 0:re.text)??"",it=Ct.match(/```json\s*([\s\S]*?)```/)||Ct.match(/(\{[\s\S]*\})/),jt=it?it[1]??it[0]:null;if(!jt)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");se(JSON.parse(jt)),W=n.toastImgDone,T()}catch(ie){J("อ่านรูปไม่สำเร็จ: "+he(ie),"error")}finally{m.textContent=`📷 ${n.btnImg}`,a.target.value=""}});const I=a=>{if(F(),b.some(m=>m.some(y=>String(y??"").trim()))&&!confirm(n.confirmColChange))return;const r=b;j=a,b=r.map(m=>a.length===1?[m.filter(Boolean).join(" ").trim()]:Array.from({length:a.length},(y,E)=>m[E]??"")),b.length||(b=Array.from({length:12},()=>Array.from({length:j.length},()=>""))),T()};(N=d.querySelector("#cd2-template-basic"))==null||N.addEventListener("click",()=>{I(n.colsBasic)}),(L=d.querySelector("#cd2-template-extra"))==null||L.addEventListener("click",()=>{I(n.colsExtra)}),(B=d.querySelector("#cd2-add-col"))==null||B.addEventListener("click",()=>{F(),j.push(n.colNew(j.length+1)),b=b.map(a=>[...a,""]),T()}),(D=d.querySelector("#cd2-add-row"))==null||D.addEventListener("click",()=>{F(),b.push(Array.from({length:j.length},()=>"")),T()}),d.querySelectorAll(".cd2-del-col").forEach(a=>a.addEventListener("click",()=>{F();const t=Number(a.dataset.delCol);j.splice(t,1),b=b.map(r=>r.filter((m,y)=>y!==t)),T()})),d.querySelectorAll(".cd2-del-row").forEach(a=>a.addEventListener("click",()=>{F();const t=Number(a.dataset.delRow);b.splice(t,1);const r=m=>m.filter(y=>y!==t+1).map(y=>y>t+1?y-1:y);k=r(k),p=r(p),C=r(C),T()})),(G=d.querySelector("#cd2-pick-mid"))==null||G.addEventListener("click",()=>Ie("mid")),(O=d.querySelector("#cd2-pick-between"))==null||O.addEventListener("click",()=>Ie("between")),(u=d.querySelector("#cd2-pick-final"))==null||u.addEventListener("click",()=>Ie("final")),(q=d.querySelector("#cd2-voc-obj-add-row"))==null||q.addEventListener("click",()=>{F(),w.push({objective:"",competency:""}),T()}),d.querySelectorAll(".cd2-voc-obj-del-row").forEach(a=>a.addEventListener("click",()=>{F(),w.splice(Number(a.dataset.vocObjDelRow),1),T()})),(X=d.querySelector("#cd2-voc-sch-add-row"))==null||X.addEventListener("click",()=>{F(),z.push({week:String(z.length+1),content:"",note:""}),T()}),d.querySelectorAll(".cd2-voc-sch-del-row").forEach(a=>a.addEventListener("click",()=>{F(),z.splice(Number(a.dataset.vocSchDelRow),1),T()})),d.querySelector("#cd2-add-topic").addEventListener("click",()=>{F(),R.push(""),T()}),d.querySelectorAll(".cd2-topic-del").forEach(a=>{a.addEventListener("click",()=>{F(),R.splice(Number(a.dataset.idx),1),R.length||(R=[""]),T()})}),d.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:a,signer:t}=F(),r=d.querySelector("#cd2-save");r.disabled=!0,r.textContent=n.saving;try{await $s(o.id,{description:a,table_columns:j.map((m,y)=>m.trim()||n.colNew(y+1)),table_rows:b.map(m=>m.slice(0,j.length)),topic_list:R.filter(Boolean),midterm_objective_items:k,between_objective_items:p,final_objective_items:C,midterm_objective_extra:v,between_objective_extra:f,final_objective_extra:P,voc_objectives:w,voc_schedule:z,signer_name:t.trim()||null,text_direction:S,updated_by:(e==null?void 0:e.id)??null}),J(n.toastSaved,"success"),d.remove()}catch(m){J("บันทึกไม่สำเร็จ: "+he(m),"error"),r.disabled=!1,r.textContent=n.save}})};T(),V()}async function Yo(e){var s,i,x,_,g;if(!(e!=null&&e.id)){J("ไม่พบข้อมูลครูผู้สอน","error");return}(s=document.getElementById("schedule-course-review-modal"))==null||s.remove();const o=document.createElement("div");o.id="schedule-course-review-modal",o.className="fixed inset-0 z-[240] bg-slate-950/60 backdrop-blur-sm p-3 sm:p-5",o.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="schedule-course-review-title"
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
  </section>`,document.body.appendChild(o),o.querySelector("[data-review-close]").addEventListener("click",()=>o.remove());try{const c=await Te().catch(()=>({})),$=Number(c.academicYear??c.academic_year),A=Number(c.semester),[j,b,k,p]=await Promise.all([yt(e.id,$,A),Yt(),ht(e.id).catch(()=>[]),ze().catch(()=>[])]),C=e.category==="ศาสนา"?new Set(["AGM","AGMVOC"]):e.category==="สามัญ"?new Set(["ACDM","ACDMVOC"]):null,f=b.filter(d=>!C||C.has(d.subject_group)),v=new Map(f.map(d=>[String(d.id),d])),P=["","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์","อาทิตย์"],S=d=>{var se,pe,le;const h=(se=d.master_subjects)==null?void 0:se.catalog_id;if(h&&v.has(String(h)))return v.get(String(h));const V=ye(d.subject_code||((pe=d.master_subjects)==null?void 0:pe.subject_code));if(V){const me=f.filter(ve=>ye(ve.subject_code)===V);if(me.length===1)return me[0];const ue=ct(d.class_name),we=me.filter(ve=>ue&&ye(ve.grade_level).includes(ye(ue)));if(we.length===1)return we[0]}const Y=ye(d.subject_name||((le=d.master_subjects)==null?void 0:le.subject_name));if(!Y)return null;const H=f.filter(me=>ye(me.subject_name)===Y);if(H.length===1)return H[0];const T=ct(d.class_name),F=H.filter(me=>T&&ye(me.grade_level).includes(ye(T)));return F.length===1?F[0]:null},M=(d,h)=>{var H,T;const V=ye((d==null?void 0:d.subject_code)||h.subject_code||((H=h.master_subjects)==null?void 0:H.subject_code)),Y=ye((d==null?void 0:d.subject_name)||h.subject_name||((T=h.master_subjects)==null?void 0:T.subject_name));return k.find(F=>d&&Number(F.catalog_id)===Number(d.id)||V&&ye(F.subject_code)===V&&(!(d!=null&&d.subject_group)||F.subject_group===d.subject_group)||Y&&ye(F.subject_name)===Y&&(!(d!=null&&d.subject_group)||F.subject_group===d.subject_group))},Q=new Map;for(const d of j){const h=S(d),V=(h==null?void 0:h.subject_name)||d.subject_name||((i=d.master_subjects)==null?void 0:i.subject_name)||"",Y=(h==null?void 0:h.subject_code)||d.subject_code||((x=d.master_subjects)==null?void 0:x.subject_code)||"";if(!V&&!Y)continue;const H=h?`catalog:${h.id}`:`review:${ye(Y)}:${ye(V)}:${ye((_=d.master_subjects)==null?void 0:_.subject_group)}`;let T=Q.get(H);if(!T){const se=h?nt(h):"",pe=p.find(le=>le.dept_code===se);T={id:Q.size+1,item:h,name:V,code:Y,subjectGroup:(h==null?void 0:h.subject_group)||((g=d.master_subjects)==null?void 0:g.subject_group)||"",deptCode:se,deptLabel:(h==null?void 0:h.dept_label)||(pe==null?void 0:pe.dept_name)||"ต้องตรวจสอบกลุ่มสาระ",rows:[],rooms:new Set,grades:new Set,existing:h?M(h,d):null},Q.set(H,T)}T.rows.push(d),d.class_name&&T.rooms.add(d.class_name);const F=(h==null?void 0:h.grade_level)||ct(d.class_name);F&&T.grades.add(F)}const R=[...Q.values()].map(d=>{var Y,H;const h=((Y=d.item)==null?void 0:Y.grade_level)||[...d.grades].join(", "),V=!!(d.item&&d.subjectGroup&&d.deptCode&&h&&!d.existing);return d.grade=h,d.status=d.existing?"existing":V?"ready":"review",d.payload=d.item?{catalog_id:d.item.id,subject_group:d.item.subject_group,dept:d.deptCode,subject_name:d.item.subject_name,subject_code:d.item.subject_code||null,credit:d.item.credit??null,grade_level:h,teacher_id:e.id,learning_area:((H=p.find(T=>T.dept_code===d.deptCode))==null?void 0:H.head_name)||null}:null,d}),w=R.filter(d=>d.status==="ready").length,z=R.filter(d=>d.status==="existing").length,W=R.filter(d=>d.status==="review").length,oe=new Map;R.forEach(d=>{const h=d.deptCode||"review";oe.has(h)||oe.set(h,{label:d.deptLabel,items:[]}),oe.get(h).items.push(d)});const ne=d=>d==="ready"?'<span class="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">พร้อมสร้าง</span>':d==="existing"?'<span class="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-700">มีคอร์สแล้ว · ข้าม</span>':'<span class="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">ต้องตรวจสอบ</span>',de=d=>{const h=d.rows.map(Y=>`${P[Number(Y.day_of_week)]||`วัน${Y.day_of_week??"?"}`} คาบ ${Y.period_no??"—"}`).join(" · "),V=[...d.rooms].join(", ")||"ไม่ระบุห้อง";return`<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" data-review-item="${d.id}">
        <div class="flex items-start gap-3">
          ${d.status==="ready"?`<input type="checkbox" data-review-select="${d.id}" checked class="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />`:'<span class="mt-1 block h-5 w-5"></span>'}
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">${ne(d.status)}
              <span class="font-mono text-xs font-bold text-indigo-600">${l(d.code||"ไม่มีรหัส")}</span>
            </div>
            <h4 class="mt-2 font-extrabold text-gray-800">${l(d.name)}</h4>
            <p class="mt-1 text-xs text-gray-500">${l(d.grade||"ไม่ระบุระดับชั้น")} · ${l(V)}</p>
            <p class="mt-1 text-[11px] text-gray-400">${l(h||"ไม่มีช่วงเวลาที่ระบุ")}</p>
            ${d.status==="review"?'<p class="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-800">ระบบยังจับคู่กับแคตตาล็อกไม่ได้แน่นอน จึงยังไม่สร้างอัตโนมัติ กรุณาเปิดคอร์สใหม่และเลือกรายวิชาด้วยตนเอง</p>':""}
          </div>
        </div>
      </article>`};o.querySelector("section").innerHTML=`
      <div class="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4 sm:px-7">
        <div><h2 id="schedule-course-review-title" class="text-lg sm:text-xl font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2>
          <p class="mt-1 text-xs text-gray-500">ภาคเรียน ${l(`${A}/${$}`)} · สร้างคอร์สเท่านั้น ยังไม่สร้างห้องเรียน</p></div>
        <button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 bg-white text-xl text-gray-500 hover:bg-gray-100">×</button>
      </div>
      <div class="flex-1 overflow-y-auto p-5 sm:p-7">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div class="rounded-2xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-2xl font-extrabold text-indigo-700">${R.length}</p><p class="text-[11px] text-indigo-700/70">รายการจากตารางสอน</p></div>
          <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-3"><p class="text-2xl font-extrabold text-emerald-700">${w}</p><p class="text-[11px] text-emerald-700/70">พร้อมสร้าง</p></div>
          <div class="rounded-2xl border border-blue-100 bg-blue-50 p-3"><p class="text-2xl font-extrabold text-blue-700">${z}</p><p class="text-[11px] text-blue-700/70">มีคอร์สแล้ว</p></div>
          <div class="rounded-2xl border border-amber-100 bg-amber-50 p-3"><p class="text-2xl font-extrabold text-amber-700">${W}</p><p class="text-[11px] text-amber-700/70">ต้องตรวจสอบ</p></div>
        </div>
        <div class="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-xs leading-relaxed text-indigo-800">ระบบจะไม่สร้างทับคอร์สเดิม และจะสร้างเฉพาะรายการที่จับคู่กับแคตตาล็อกได้ครบถ้วนเท่านั้น</div>
        <div class="mt-6 space-y-7">
          ${[...oe.values()].map(d=>`<section><div class="mb-3 flex items-center gap-3"><div class="h-9 w-9 rounded-xl bg-emerald-100 text-center leading-9">🏷️</div><h3 class="font-extrabold text-gray-800">${l(d.label)}</h3><div class="h-px flex-1 bg-gray-200"></div></div><div class="grid grid-cols-1 gap-3 xl:grid-cols-2">${d.items.map(de).join("")}</div></section>`).join("")||'<div class="rounded-2xl bg-white p-10 text-center text-sm text-gray-400">ไม่พบรายการตารางสอนที่นำมาสร้างคอร์สได้</div>'}
        </div>
      </div>
      <div class="flex flex-col-reverse gap-2 border-t border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p data-review-selected class="text-xs text-gray-500">เลือกสร้างแล้ว 0 คอร์ส</p>
        <div class="flex gap-2"><button type="button" data-review-cancel class="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 sm:flex-none">ยกเลิก</button>
          <button type="button" data-review-create ${w?"":"disabled"} class="flex-1 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:flex-none">ยืนยันสร้างคอร์สที่เลือก</button></div>
      </div>`;const ce=()=>o.remove();o.querySelector("[data-review-close]").addEventListener("click",ce),o.querySelector("[data-review-cancel]").addEventListener("click",ce);const fe=o.querySelector("[data-review-selected]"),te=o.querySelector("[data-review-create]"),ge=()=>{const d=o.querySelectorAll("[data-review-select]:checked").length;fe.textContent=`เลือกสร้างแล้ว ${d} คอร์ส`,te.disabled=d===0};o.querySelectorAll("[data-review-select]").forEach(d=>d.addEventListener("change",ge)),ge(),te.addEventListener("click",async()=>{var H;const d=[...o.querySelectorAll("[data-review-select]:checked")].map(T=>Number(T.dataset.reviewSelect)),h=R.filter(T=>d.includes(T.id)&&T.status==="ready");if(!h.length)return;te.disabled=!0,te.textContent="กำลังสร้างคอร์ส...";let V=0,Y=0;for(const T of h)try{await us(T.payload),V+=1}catch{Y+=1}ce(),Y?J(`สร้างคอร์สสำเร็จ ${V} รายการ · ไม่สำเร็จ ${Y} รายการ`,"warning"):J(`สร้างคอร์สจากตารางสอนสำเร็จ ${V} รายการ`,"success"),(H=window._navTo)==null||H.call(window,"my-courses")})}catch(c){o.querySelector("section").innerHTML=`<div class="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4"><h2 class="font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2><button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 text-xl text-gray-500">×</button></div><div class="flex flex-1 items-center justify-center p-8 text-center text-sm text-red-500">โหลดข้อมูลตารางสอนไม่สำเร็จ: ${l(he(c))}</div>`,o.querySelector("[data-review-close]").addEventListener("click",()=>o.remove())}}async function Wo(e,o,s=null,i={}){const x=!!i.cloneFrom;De("my-courses"),Oe(x?"ทำสำเนาคอร์สวิชา":s?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[_,g,c,$,A]=await Promise.all([ze().catch(()=>[]),Vt().catch(()=>[]),s&&!x?ms(s.id).catch(a=>(J("โหลดครูร่วมสอนไม่สำเร็จ: "+he(a),"error"),null)):Promise.resolve([]),Yt().catch(()=>[]),Te().catch(()=>({}))]);if(c===null){Le(`<div class="p-6 text-center text-gray-600">โหลดข้อมูลคอร์สไม่ครบ กรุณาเปิดคอร์สใหม่อีกครั้ง
      <button class="block mx-auto mt-4 text-indigo-600" onclick="window._goBack()">กลับ</button></div>`);return}let j=c??[];const b=[...new Map(_.map(a=>[a.id,a])).values()],k=(e==null?void 0:e.category)??"",p=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],C=k?p.filter(a=>a.cat===k):p,f=Number(A.semester),v=$.filter(a=>![1,2].includes(f)||a.semester==null||Number(a.semester)===f).filter(a=>C.some(t=>t.value===a.subject_group)),P=a=>a==="ACDM"?"สามัญ":a==="ACDMVOC"?"สามัญปวช":a==="AGM"||a==="AGMVOC"?"ศาสนา":null,S=a=>a==="ACDMVOC",M=a=>S(a)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",Q=a=>S(a)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",R=a=>S(a)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",w=a=>S(a)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",z=(s==null?void 0:s.subject_group)??"",W=a=>{const t=P(a);if(!t)return b;const r=b.filter(m=>m.category===t);return r.length?r:b},oe=(a,t="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+a.map(r=>`<option value="${r.dept_code}" ${r.dept_code===t?"selected":""}>${r.dept_name}</option>`).join(""),ne=[...new Set(_.map(a=>a.head_name).filter(Boolean))],de=new Map(v.map(a=>[String(a.id),a])),ce=de.get(String((s==null?void 0:s.catalog_id)??"")),fe=(s==null?void 0:s.dept)||nt(ce)||"",te=(a="",t="")=>v.filter(r=>(!a||r.subject_group===a)&&Gs(r,t,b)),ge=(a="",t="",r="")=>t?['<option value="">— เลือกรายวิชาภายใต้กลุ่มสาระ —</option>',...te(a,t).map(y=>{const E=y.subject_code?y.subject_code+" · ":"",U=y.grade_level?" · "+y.grade_level:"",ee=y.subject_group?" · "+y.subject_group:"",K=E+y.subject_name+U+ee,re=String(r??"")===String(y.id)?" selected":"";return'<option value="'+y.id+'"'+re+">"+l(K)+"</option>"})].join(""):'<option value="">— เลือกกลุ่มสาระก่อน —</option>';Le(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${x?"ทำสำเนาคอร์สวิชา":s?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์สวิชา"}</h2>
    </div>
    ${x?`
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
          <select id="cf-subg" class="${$e}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${C.map(a=>`<option value="${a.value}" ${(s==null?void 0:s.subject_group)===a.value?"selected":""}>${a.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${M(z)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${$e}">
            ${oe(s!=null&&s.subject_group?W(s.subject_group):k?b.filter(a=>a.category===k):b,fe)}
          </select>
        </div>
        <!-- รายวิชาภายใต้กลุ่มสาระ -->
        <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
          <label class="block text-sm font-semibold text-blue-900 mb-1">รายวิชาภายใต้กลุ่มสาระ</label>
          <select id="cf-catalog" ${$e} ${fe?"":"disabled"}>
            ${ge(z,fe,s==null?void 0:s.catalog_id)}
          </select>
          <input type="hidden" id="cf-catalog-id" value="${(s==null?void 0:s.catalog_id)??""}" />
          <p class="text-xs text-blue-700/70 mt-1">เลือกรายวิชาจากกลุ่มสาระที่เลือก ระบบจะเติมข้อมูลให้ แต่ครูยังแก้ไขรายละเอียดทุกช่องได้</p>
        </div>
        <!-- ชื่อวิชา + รหัสวิชา -->
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 sm:col-span-1">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชื่อวิชา <span class="text-red-400">*</span>
            </label>
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${ae}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${ae}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${$e}">
              ${Ns.map(a=>`<option value="${a}">${a}</option>`).join("")}
            </select>
          </div>
          <div id="cf-grade-single-wrapper">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${$e}">
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
                class="${ae}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${ae}" autocomplete="off" />
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
            maxlength="12" class="${ae}" />
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
                class="${ae} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${ae} bg-white" autocomplete="off" />
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
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${Q(z)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${ae} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${w(z)}</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${x?"บันทึกสำเนาคอร์ส":s?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}
          </button>
        </div>
      </form>
    </div>
  </div>`);const d=s&&(s.grade_level&&s.grade_level.includes(",")||j.length>0);function h(){const a=document.getElementById("cf-coteach-selected-list");a&&(a.innerHTML=j.map(t=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${t.full_name} (${t.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${t.id}">✕</button>
      </span>
    `).join(""),a.querySelectorAll(".remove-coteacher-btn").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);j=j.filter(m=>m.id!==r),h()})}))}function V(a,t){var m;(m=document.getElementById("coteach-explain-modal"))==null||m.remove();const r=document.createElement("div");r.id="coteach-explain-modal",r.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",r.innerHTML=`
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
      </div>`,document.body.appendChild(r),r.querySelector("#cf-explain-cancel").addEventListener("click",()=>{r.remove(),t()}),r.querySelector("#cf-explain-confirm").addEventListener("click",()=>{r.remove(),a()})}function Y(a,t){var m;(m=document.getElementById("coteach-confirm-modal"))==null||m.remove();const r=document.createElement("div");r.id="coteach-confirm-modal",r.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",r.innerHTML=`
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
      </div>`,document.body.appendChild(r),r.querySelector("#cf-off-cancel").addEventListener("click",()=>{r.remove(),t()}),r.querySelector("#cf-off-confirm").addEventListener("click",()=>{r.remove(),a()})}function H(a,t=""){const r=dt[a]??[],m=document.getElementById("cf-grade-checkboxes");if(!m)return;const y=t?t.split(",").map(E=>E.trim()):[];m.innerHTML=r.map(E=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${E}" ${y.includes(E)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${E}</span>
      </label>
    `).join("")}const T=document.getElementById("cf-catalog"),F=(a,t,r="")=>{T&&(T.innerHTML=ge(a,t,r),T.disabled=!t,r&&(T.value=String(r)))},se=a=>{if(!a)return;const t=document.getElementById("cf-subg"),r=document.getElementById("cf-dept"),m=document.getElementById("cf-name"),y=document.getElementById("cf-code"),E=document.getElementById("cf-credit"),U=document.getElementById("cf-grade"),ee=document.getElementById("cf-dept-head"),K=C.some(ie=>ie.value===a.subject_group)?a.subject_group:"";if(K&&t.value!==K&&(t.value=K,t.dispatchEvent(new Event("change"))),m&&(m.value=a.subject_name??""),y&&(y.value=a.subject_code??""),E&&a.credit!=null){const ie=String(a.credit);[...E.options].some(xe=>xe.value===ie)||E.appendChild(new Option(ie,ie)),E.value=ie}U&&a.grade_level&&([...U.options].some(ie=>ie.value===a.grade_level)||U.appendChild(new Option(a.grade_level,a.grade_level)),U.value=a.grade_level);const re=nt(a);r&&re&&W(K).some(ie=>ie.dept_code===re)&&(r.value=re,r.dispatchEvent(new Event("change"))),ee&&a.learning_area&&(ee.value=a.learning_area),T&&(document.getElementById("cf-catalog-id").value=a.id,F(t.value,(r==null?void 0:r.value)||"",a.id))},pe={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};T==null||T.addEventListener("change",a=>{const t=a.target.value;document.getElementById("cf-catalog-id").value=t,se(de.get(String(t)))}),document.getElementById("cf-subg").addEventListener("change",a=>{const t=a.target.value;document.getElementById("cf-dept-label").firstChild.textContent=M(t)+" ",document.getElementById("cf-head-label").textContent=Q(t),document.getElementById("cf-head-hint").textContent=w(t);const r=document.getElementById("cf-dept"),m=r.value;r.innerHTML=oe(W(t)),r.options[0].textContent=R(t),m&&(r.value=m),F(t,r.value,"");const y=document.getElementById("cf-grade"),E=dt[t]??[];y.innerHTML=E.length?['<option value="">— เลือกชั้นปี —</option>',...E.map(U=>`<option value="${U}">${U}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=pe[t]??"",H(t)}),document.getElementById("cf-dept").addEventListener("change",a=>{var U;const t=a.target.value,r=document.getElementById("cf-subg").value,m=((U=document.getElementById("cf-catalog-id"))==null?void 0:U.value)||"";F(r,t,m);const y=_.filter(ee=>ee.dept_code===t&&ee.head_name).map(ee=>ee.head_name),E=document.getElementById("cf-dept-head");y.length===1?E.value=y[0]:y.length>1?(E.value="",ue(y)):E.value=""});const le=document.getElementById("cf-dept-head"),me=document.getElementById("cf-head-dropdown");function ue(a){me.innerHTML=a.map(t=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${t}">${t}</div>`).join(""),me.querySelectorAll(".head-opt").forEach(t=>t.addEventListener("mousedown",r=>{r.preventDefault(),le.value=t.dataset.val,me.classList.add("hidden")})),me.classList.toggle("hidden",!a.length)}le.addEventListener("input",()=>{const a=le.value.toLowerCase(),t=ne.filter(r=>r.toLowerCase().includes(a));ue(a?t:ne)}),le.addEventListener("focus",()=>{const a=le.value.toLowerCase();ue(a?ne.filter(t=>t.toLowerCase().includes(a)):ne)}),le.addEventListener("blur",()=>setTimeout(()=>me.classList.add("hidden"),150));const we=document.getElementById("cf-teacher-code"),ve=document.getElementById("cf-teacher-search"),Se=document.getElementById("cf-teacher-dropdown"),Ee=document.getElementById("cf-teacher-selected"),Ie=document.getElementById("cf-teacher-name"),Be=document.getElementById("cf-teacher-clear"),Ce=document.getElementById("cf-teacher-id"),ke=document.getElementById("cf-phone");function n(a){if(!a){Ce.value="",we.value="",ve.value="",Ee.classList.add("hidden"),Ee.classList.remove("flex"),ke.value="";return}Ce.value=a.id,we.value=a.teacher_code??"",ve.value=a.full_name??"",Ie.textContent=`${a.full_name}${a.teacher_code?` (${a.teacher_code})`:""}`,Ee.classList.remove("hidden"),Ee.classList.add("flex"),ke.value=at(a.phone??""),Se.classList.add("hidden")}function I(a){Se.innerHTML=a.length?a.map(t=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${t.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${t.teacher_code??""}</span>
            <span class="font-medium">${t.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',Se.querySelectorAll(".t-opt").forEach(t=>t.addEventListener("mousedown",r=>{r.preventDefault(),n(g.find(m=>String(m.id)===t.dataset.id))})),Se.classList.remove("hidden")}if(e&&!s){const a=g.find(t=>t.id===e.id);a&&n(a)}we.oninput=()=>{const a=we.value.trim().toLowerCase();if(!a){n(null);return}const t=g.find(r=>(r.teacher_code??"").toLowerCase()===a);if(t)n(t);else{const r=g.filter(m=>(m.teacher_code??"").toLowerCase().startsWith(a));r.length&&I(r)}},ve.onfocus=()=>I(g),ve.oninput=()=>{const a=ve.value.toLowerCase();I(a?g.filter(t=>t.full_name.toLowerCase().includes(a)||(t.teacher_code??"").toLowerCase().includes(a)):g)},ve.onblur=()=>setTimeout(()=>Se.classList.add("hidden"),150),Be.addEventListener("click",()=>n(null));const N=document.getElementById("cf-toggle-coteach"),L=document.getElementById("cf-grade-single-wrapper"),B=document.getElementById("cf-grade-multi-container"),D=document.getElementById("cf-coteach-section");N.addEventListener("change",a=>{a.target.checked?(N.checked=!1,V(()=>{N.checked=!0,L.classList.add("hidden"),B.classList.remove("hidden"),D.classList.remove("hidden");const r=document.getElementById("cf-subg").value;H(r),h()},()=>{N.checked=!1})):Y(()=>{N.checked=!1,L.classList.remove("hidden"),B.classList.add("hidden"),D.classList.add("hidden"),j=[]},()=>{N.checked=!0})});const G=document.getElementById("cf-coteach-code"),O=document.getElementById("cf-coteach-search"),u=document.getElementById("cf-coteach-dropdown");function q(a){if(!a)return;if(j.some(r=>r.id===a.id)){J("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),G.value="",O.value="";return}const t=Number(Ce.value);if(a.id===t){J("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),G.value="",O.value="";return}j.push(a),h(),G.value="",O.value="",u.classList.add("hidden")}function X(a){u.innerHTML=a.length?a.map(t=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${t.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${t.teacher_code??""}</span>
            <span class="font-medium">${t.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',u.querySelectorAll(".co-t-opt").forEach(t=>t.addEventListener("mousedown",r=>{r.preventDefault(),q(g.find(m=>String(m.id)===t.dataset.id))})),u.classList.remove("hidden")}if(G.oninput=()=>{const a=G.value.trim().toLowerCase();if(!a)return;const t=g.find(r=>(r.teacher_code??"").toLowerCase()===a);if(t)q(t);else{const r=g.filter(m=>(m.teacher_code??"").toLowerCase().startsWith(a));r.length&&X(r)}},O.onfocus=()=>X(g),O.oninput=()=>{const a=O.value.toLowerCase();X(a?g.filter(t=>t.full_name.toLowerCase().includes(a)||(t.teacher_code??"").toLowerCase().includes(a)):g)},O.onblur=()=>setTimeout(()=>u.classList.add("hidden"),150),ke.addEventListener("input",a=>{a.target.value=at(a.target.value)}),s){if(document.getElementById("cf-name").value=s.subject_name??"",document.getElementById("cf-code").value=s.subject_code??"",s.credit&&(document.getElementById("cf-credit").value=String(s.credit)),s.subject_group){const a=document.getElementById("cf-subg");a.value=s.subject_group,document.getElementById("cf-dept").innerHTML=oe(W(s.subject_group));const t=document.getElementById("cf-grade"),r=dt[s.subject_group]??[];t.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...r.map(m=>`<option value="${m}">${m}</option>`)].join(""),s.grade_level&&(t.value=s.grade_level),document.getElementById("cf-code-hint").textContent=pe[s.subject_group]??""}if(s.dept){const a=document.getElementById("cf-dept");a.value=s.dept,F(s.subject_group??"",s.dept,s.catalog_id??"")}if(s.learning_area)le.value=s.learning_area;else if(s.dept){const a=_.find(t=>t.dept_code===s.dept&&t.head_name);le.value=(a==null?void 0:a.head_name)??""}if(s.teacher_id){const a=g.find(t=>t.id===s.teacher_id);a&&n(a)}else if(e){const a=g.find(t=>t.id===e.id);a&&n(a)}if(d){N.checked=!0,L.classList.add("hidden"),B.classList.remove("hidden"),D.classList.remove("hidden");const a=s.subject_group;H(a,s.grade_level),h()}}document.getElementById("course-form").addEventListener("submit",async a=>{a.preventDefault();const t=document.getElementById("cf-submit"),r=document.getElementById("cf-subg").value,m=document.getElementById("cf-dept").value,y=document.getElementById("cf-name").value.trim(),E=document.getElementById("cf-code").value.trim(),U=parseFloat(document.getElementById("cf-credit").value)||null;let ee="";if(N.checked){const xe=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!xe.length){J("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}ee=xe.map(be=>be.value).join(", ")}else ee=document.getElementById("cf-grade").value;const K=Ce.value,re=ke.value.trim(),ie=le.value.trim();if(!r||!y||!ee){J("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}t.disabled=!0,t.textContent="กำลังบันทึก...";try{const xe=K?Number(K):(e==null?void 0:e.id)??null,be=N.checked?j.map(_e=>_e.id):[];await o({catalog_id:document.getElementById("cf-catalog-id").value?Number(document.getElementById("cf-catalog-id").value):null,subject_group:r,dept:m||null,subject_name:y,subject_code:E||null,credit:U,grade_level:ee,teacher_id:xe,learning_area:ie||null},be),re&&xe&&xe===(e==null?void 0:e.id)&&await vt(e.id,{phone:re}).catch(()=>{}),J("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(xe){J("บันทึกไม่สำเร็จ: "+he(xe),"error")}finally{t.disabled=!1,t.textContent=x?"บันทึกสำเนาคอร์ส":s?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function Uo(e,o=[],s){De("setup"),Oe("ตั้งค่าโปรไฟล์","registration");const[i,x,_,g]=await Promise.all([ze().catch(()=>[]),Ut().catch(()=>[]),Jt().catch(()=>[]),Te().catch(()=>({}))]),c=parseInt(g.academicYear??2568),$=parseInt(g.semester??1),A=[...new Map(i.map(f=>[f.dept_code,f])).values()],j=(f,v="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(f?A.filter(S=>!S.category||S.category===f):A).map(S=>`<option value="${S.dept_code}" ${S.dept_code===v?"selected":""}>${S.dept_name}</option>`).join(""),b=x,k=_,p=await Xt(c,$).catch(()=>[]);if(Le(`<div class="max-w-lg mx-auto animate-fade">
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
            class="${ae}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${$e}">
            ${j(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${$e}">
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
            ${["สามัญ","ศาสนา"].map(f=>`
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${(e==null?void 0:e.category)===f?"border-emerald-400 bg-emerald-50":"border-gray-200"}">
              <input type="radio" name="setup-category" value="${f}" ${(e==null?void 0:e.category)===f?"checked":""}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${f}</span>
            </label>`).join("")}
          </div>
        </div>
        ${os({prefix:"setup",samaiRooms:b,religionRooms:k,homeroomRooms:o,assignments:p,teacherId:e==null?void 0:e.id,academicYear:c,semester:$})}
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const C=()=>{var S;const f=(S=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:S.value,v=document.getElementById("setup-room-samai-wrap"),P=document.getElementById("setup-room-religion-wrap");f==="สามัญ"?(v==null||v.classList.remove("hidden"),P==null||P.classList.add("hidden")):f==="ศาสนา"?(P==null||P.classList.remove("hidden"),v==null||v.classList.add("hidden")):(v==null||v.classList.remove("hidden"),P==null||P.classList.remove("hidden"))};C(),as(),document.querySelectorAll('input[name="setup-category"]').forEach(f=>f.addEventListener("change",()=>{var M;C();const v=(M=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:M.value,P=document.getElementById("setup-dept"),S=P==null?void 0:P.value;P&&(P.innerHTML=j(v,S))})),document.getElementById("setup-phone").addEventListener("input",f=>{const v=f.target.value.replace(/\D/g,"").slice(0,10);f.target.value=v.length<=3?v:v.length<=6?`${v.slice(0,3)} ${v.slice(3)}`:`${v.slice(0,3)} ${v.slice(3,6)} ${v.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async f=>{var P;f.preventDefault();const v=document.getElementById("setup-save");v.disabled=!0,v.textContent="กำลังบันทึก...";try{const S=document.getElementById("setup-dept").value||null,M=document.getElementById("setup-subg").value||null,Q=((P=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:P.value)||null,R=document.getElementById("setup-phone").value.trim()||null,w=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(de=>de.value),z=[...document.querySelectorAll('input[name="setup-room-religion"]:checked')].map(de=>de.value);await vt(e.id,{dept:S,subject_group:M,category:Q,phone:R});const{upsertHomeroomTeacher:W,deleteHomeroomTeacher:oe}=await je(async()=>{const{upsertHomeroomTeacher:de,deleteHomeroomTeacher:ce}=await import("./api-C-roKrdU.js");return{upsertHomeroomTeacher:de,deleteHomeroomTeacher:ce}},__vite__mapDeps([0,1,2,3,4])),ne=async(de,ce)=>{const fe=o.filter(te=>te.category===de&&Number(te.academic_year)===c&&Number(te.semester)===$);await Promise.all(fe.filter(te=>!ce.includes(te.main_room)).map(te=>oe(te.id).catch(()=>{}))),await Promise.all(ce.map(te=>W({teacher_id:e.id,main_room:te,category:de,academic_year:c,semester:$})))};await Promise.all([ne("สามัญ",w),ne("ศาสนา",z)]),J("บันทึกโปรไฟล์สำเร็จ ✅","success"),s&&await s(e.profile_id)}catch(S){J("บันทึกไม่สำเร็จ: "+he(S),"error")}finally{v.disabled=!1,v.textContent="บันทึกและเริ่มใช้งาน →"}})}async function Jo(e,o=[],s){var C;De("profile"),Oe("โปรไฟล์ของฉัน","registration");const[i,x,_]=await Promise.all([ze().catch(()=>[]),Ut().catch(()=>[]),Jt().catch(()=>[])]),g=await Te().catch(()=>({})),c=parseInt(g.academicYear??new Date().getFullYear()+543),$=parseInt(g.semester??1),A=await Xt(c,$).catch(()=>[]),j=e==null?void 0:e.category,b=j?i.filter(f=>!f.category||f.category===j):i,k=[...new Map(b.map(f=>[f.dept_code,f])).values()],p=at((e==null?void 0:e.phone)??"");Le(`<div class="max-w-lg mx-auto animate-fade">
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
              class="${ae} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${(e==null?void 0:e.category)??"—"}"
              class="${ae} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${(e==null?void 0:e.full_name)??""}" class="${ae}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||""}" class="${ae}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${(e==null?void 0:e.username)??""}" placeholder="เช่น hambal.waji"
            class="${ae} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${p}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${ae}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${k.length>0?`<select id="prof-dept" class="${$e} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${k.map(f=>`<option value="${f.dept_code}" ${f.dept_code===(e==null?void 0:e.dept)?"selected":""}>${f.dept_name} (${f.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${ae} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${$e}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${(e==null?void 0:e.subject_group)==="ACDM"?"selected":""}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${(e==null?void 0:e.subject_group)==="AGM"?"selected":""}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${(e==null?void 0:e.subject_group)==="ACDMVOC"?"selected":""}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${(e==null?void 0:e.subject_group)==="AGMVOC"?"selected":""}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        ${os({prefix:"prof",samaiRooms:x,religionRooms:_,homeroomRooms:o,assignments:A,teacherId:e==null?void 0:e.id,academicYear:c,semester:$})}

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
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${ae}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${ae}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`),window._profileFocus==="password"&&(window._profileFocus=null,requestAnimationFrame(()=>{const f=document.getElementById("prof-pw-new");f==null||f.scrollIntoView({behavior:"smooth",block:"center"}),f==null||f.focus()})),e&&(as(),document.getElementById("prof-phone").addEventListener("input",f=>{f.target.value=at(f.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",f=>{const v=f.target.files[0];v&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(v)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async f=>{var S;f.preventDefault();const v=document.getElementById("prof-save"),P=document.getElementById("prof-name").value.trim();if(!P){J("กรุณากรอกชื่อ-นามสกุล","warning");return}v.disabled=!0,v.textContent="กำลังบันทึก...";try{const M=document.getElementById("prof-dept"),Q=document.getElementById("prof-dept-txt"),R=document.getElementById("prof-subg"),w=((Q==null?void 0:Q.value.trim().toUpperCase())||(M==null?void 0:M.value)||"").trim()||null,z=document.getElementById("prof-username").value.trim().toLowerCase(),W=document.getElementById("prof-email").value.trim();if(z&&!/^[a-z0-9._-]{3,32}$/.test(z)){J("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),v.disabled=!1,v.textContent="บันทึก";return}const oe={full_name:P,phone:document.getElementById("prof-phone").value.trim()||null,dept:w,subject_group:(R==null?void 0:R.value)||null,username:z||null,login_email:W||null},ne=(S=document.getElementById("prof-photo-file").files)==null?void 0:S[0];ne&&(oe.image_url=await Ps(e.id,ne)),await vt(e.id,oe);const{upsertHomeroomTeacher:de,deleteHomeroomTeacher:ce,getSystemConfig:fe}=await je(async()=>{const{upsertHomeroomTeacher:H,deleteHomeroomTeacher:T,getSystemConfig:F}=await import("./api-C-roKrdU.js");return{upsertHomeroomTeacher:H,deleteHomeroomTeacher:T,getSystemConfig:F}},__vite__mapDeps([0,1,2,3,4])),te=await fe().catch(()=>({})),ge=parseInt(te.academicYear??new Date().getFullYear()+543),d=parseInt(te.semester??1),h=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(H=>H.value),V=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(H=>H.value),Y=async(H,T)=>{const F=o.filter(se=>se.category===H&&Number(se.academic_year)===ge&&Number(se.semester)===d);await Promise.all(F.filter(se=>!T.includes(se.main_room)).map(se=>ce(se.id).catch(()=>{}))),await Promise.all(T.map(se=>de({teacher_id:e.id,main_room:se,category:H,academic_year:ge,semester:d})))};await Promise.all([Y("สามัญ",h),Y("ศาสนา",V)]),J("บันทึกโปรไฟล์สำเร็จ","success"),s&&await s(e.profile_id)}catch(M){J("บันทึกไม่สำเร็จ: "+he(M),"error")}finally{v.disabled=!1,v.textContent="บันทึก"}}),(C=document.getElementById("prof-pw-save"))==null||C.addEventListener("click",async()=>{const f=document.getElementById("prof-pw-new").value,v=document.getElementById("prof-pw-confirm").value;if(!f){J("กรุณากรอกรหัสผ่านใหม่","warning");return}if(f.length<6){J("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(f!==v){J("รหัสผ่านไม่ตรงกัน","warning");return}const P=document.getElementById("prof-pw-save");P.disabled=!0,P.textContent="⏳ กำลังบันทึก...";try{const{error:S}=await pt.auth.updateUser({password:f});if(S)throw S;J("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch(S){J("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+he(S),"error")}finally{P.disabled=!1,P.textContent="บันทึกรหัสผ่านใหม่"}}))}const ls="pp5_exam_docs_draft_v1",Bt="pp5_exam_docs_pending_class_id",rs="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",Ys="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",ot=27,Je=ot*2,is=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],mt={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},Xe={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},Ws=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let Z={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...Xe},loadingStudents:!1},ut=[];const Us=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Js=()=>{try{return JSON.parse(localStorage.getItem(ls)||"{}")||{}}catch{return{}}},Ke=()=>{localStorage.setItem(ls,JSON.stringify(Z.form))},Xs=()=>{let e="";try{e=sessionStorage.getItem(Bt)||"",sessionStorage.removeItem(Bt)}catch{}const o=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,o?String(o):""},lt=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},ds=e=>[...e||[]].sort((o,s)=>String(o.student_code||"").localeCompare(String(s.student_code||""),"th",{numeric:!0})),_t=e=>{if(!e)return"";const o=new Date(`${e}T00:00:00`);return Number.isNaN(o.getTime())?"":`${o.getDate()} เดือน ${is[o.getMonth()]} พ.ศ. ${o.getFullYear()+543}`},Ks=e=>{if(!e)return{day:"",month:"",year:""};const o=new Date(`${e}T00:00:00`);return Number.isNaN(o.getTime())?{day:"",month:"",year:""}:{day:String(o.getDate()),month:is[o.getMonth()],year:String(o.getFullYear()+543)}},$t=e=>{const o=e.startTime||"",s=e.endTime||"";return o&&s?`${o} - ${s}`:o||s||""},Mt=(e,o)=>e?o.key==="th"?`${e} น.`:e:"",Qs=e=>{const o=String(e||"").trim();if(!o)return{room:"",name:""};const s=o.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(s)return{room:s[1],name:s[2].trim()};const[i,...x]=o.split(/\s+/);return{room:i,name:x.join(" ").trim()}},Pe=e=>{const o=String(e||"").trim().toUpperCase();return o==="ชาย"||o==="M"||o==="MALE"?"M":o==="หญิง"||o==="F"||o==="W"||o==="FEMALE"?"F":""},kt=()=>{const e=new Set((Z.students||[]).map(o=>Pe(o.gender)).filter(Boolean));return e.has("M")&&e.has("F")},Zs=()=>{const e=Z.form,o=Z.students||[];if(e.studentScope!=="split"||!kt())return[o];const s=o.filter(x=>Pe(x.gender)==="M"),i=o.filter(x=>Pe(x.gender)==="F");return e.splitPrintMode==="both"?[s,i]:[e.splitGender==="F"?i:s]},eo=()=>{const e=Z.form;if(e.studentScope!=="split"||!kt())return"";const o=Z.students.filter(i=>Pe(i.gender)==="M").length,s=Z.students.filter(i=>Pe(i.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${o} + หญิง ${s})`:e.splitGender==="F"?` (เฉพาะหญิง ${s} คน)`:` (เฉพาะชาย ${o} คน)`},to=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),Pt=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),Dt=(e,o,s,i=s.loading,x=0)=>{const _=e||[],g=_.map(($,A)=>`
    <tr>
      <td>${o+A}</td>
      <td>${l($.student_code||"")}</td>
      <td class="nm">${l($.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),c=Array.from({length:Math.max(0,x-_.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return g||c?g+c:`<tr><td colspan="4" class="empty-students">${l(i)}</td></tr>`},so=(e,o,s,i,x,_)=>{const g=e.slice(o*Je,(o+1)*Je),c=g.slice(0,ot),$=g.slice(ot,Je),A=o*Je+1,j=A+ot;return`
    <div class="exam-doc-paper ${_} sign-list ${o>0?"exam-doc-page-break":""}">
      ${gt(s.signListTitle)}
      ${xt(s,i,x)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${l(s.studentCode)}</th>
                <th>${l(s.studentName)}</th>
                <th style="width:80px;">${l(s.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${Dt(c,A,s)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${l(s.studentCode)}</th>
                <th>${l(s.studentName)}</th>
                <th style="width:80px;">${l(s.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${Dt($,j,s," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${bt(s,x)}
    </div>`},Ot=(e,o)=>o?`${e}. .................................................... <span class="textColor">(${l(o)})</span>`:`${e}. ...........................................................................................`,bt=(e,o)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${l(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>${Ot(1,o.invigilator1)}</div>
      </div>
      <div class="examiner-signature">
        <div>${Ot(2,o.invigilator2)}</div>
      </div>
    </div>
  </div>`,gt=e=>`
  <div class="header">
    <img src="${rs}" alt="">
    <h2>${l(e)}</h2>
    <img src="${Ys}" alt="">
  </div>`,xt=(e,o,s)=>`
  <div class="infoG">
    <div class="info1">
      ${l(e.examType)}: <span class="textColor">${l(s.examType||"")}</span>
      ${l(e.term)}: <span class="textColor">${l(s.semester||"")}</span>
      ${l(e.year)}: <span class="textColor">${l(s.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${l(e.subject)}: <span class="textColor">${l(o.subjectName||"")}</span>
      ${l(e.subjectCode)}: <span class="textColor">${l(o.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${l(e.examDate)}: <span class="textColor">${l(s.examDateLabel||_t(s.examDate))}</span>
      ${l(e.examTime)}: <span class="textColor">${l(s.examTimeLabel||$t(s))}</span>
    </div>
    <div class="info4">
      ${l(e.teacher)}: <span class="textColor">${l(o.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${l(e.classLevel)}: <span class="textColor">${l(o.className||"")}</span>
    </div>
  </div>`,oo=e=>`
  <div class="header-single">
    <img src="${rs}" alt="">
    <h2>${l(e)}</h2>
  </div>`,Rt=(e,o)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${l(o||"")}</span>
  </div>`,ao=(e,o,s,i)=>{const[x,_]=String(i.room||"").split("/");return`
  <div class="env-line">
    ${l(e.envTerm)} <span class="textColor env-blank-sm">${l(s.semester||"")}</span>
    ${l(e.envYear)} <span class="textColor env-blank-sm">${l(s.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${l(e.envSubject)} <span class="textColor env-blank-lg">${l(o.subjectName||"")}</span>
    ${l(e.envClass)} <span class="textColor env-blank-sm">${l(x||"")}</span> / <span class="textColor env-blank-sm">${l(_||"")}</span>
  </div>
  <div class="env-line">
    ${l(e.envTeacher)} <span class="textColor env-blank-lg">${l(o.teacherName||"")}</span>
  </div>
  <div class="env-line env-invigilator-heading">${l(e.envInvigilatorHeading)}:-</div>
  ${Rt(1,s.invigilator1)}
  ${Rt(2,s.invigilator2)}
  <table class="envelope-summary-table">
    <tbody>
      <tr><th>${l(e.envDate)}</th><td class="textColor">${l(s.examDateLabel||_t(s.examDate))}</td></tr>
      <tr><th>${l(e.envPeriod)}</th><td class="textColor">${l(s.examTimeLabel||$t(s))}</td></tr>
      <tr><th>${l(e.envGroup)}</th><td class="textColor">${l(s.classPart||"")}</td></tr>
      <tr><th>${l(e.envRoomNo)}</th><td class="textColor">${l(s.examRoom||"")}</td></tr>
    </tbody>
  </table>
  <div class="env-footer-dept">${l(e.envFooterDept)}</div>`},no=(e,o)=>{var S,M;const s=Z.form,i=mt[s.lang]||mt.th,x=Z.selectedClass||{},_=lt(x),g=ds(e),c=g.length,$=Ks(s.examDate),A=(S=Z.teacher)!=null&&S.phone?` (${Z.teacher.phone})`:"",j={className:x.class_name||"",subjectName:s.subjectLabel||_.subject_name||"",subjectCode:_.subject_code||"",teacherName:(((M=Z.teacher)==null?void 0:M.full_name)||"")+A},b=Math.max(1,Math.ceil(g.length/Je)),k=i.dir==="rtl"?"rtl":"ltr",p=o==="all"||o==="portrait",C=o==="all"||o==="envelope",f=o==="envelope"?" envelope-only":o==="portrait"?" portrait-only":"",v=s.examAmount||String(c),P=Qs(j.className);return`
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
        --exam-font: ${i.font};
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
    <div id="exam-doc-print-area" class="${f.trim()}">
    ${p?`
    ${Array.from({length:b},(Q,R)=>so(g,R,i,j,s,k)).join("")}

    <div class="exam-doc-paper ${k} exam-doc-page-break">
      ${gt(i.examCoverTitle)}
      ${xt(i,j,s)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${l(i.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${c}</span> ${l(i.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${l(i.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${l(i.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${l(i.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${l(i.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${l(i.no)}</th>
            <th>${l(i.studentCode)}</th>
            <th>${l(i.absentName)}</th>
            <th>${l(i.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${Pt(15)}
        </tbody>
      </table>
      ${bt(i,s)}
    </div>

    <div class="exam-doc-paper ${k} exam-doc-page-break">
      ${gt(i.absentTitle)}
      ${xt(i,j,s)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${l(i.no)}</th>
            <th>${l(i.studentCode)}</th>
            <th>${l(i.absentName)}</th>
            <th>${l(i.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${Pt(15)}
        </tbody>
      </table>
      ${bt(i,s)}
    </div>
    `:""}

    ${C?s.lang==="th"?`
    <div class="exam-doc-paper ${k} landscape ${p?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${l(i.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${l(i.envelopeSubject)} <span class="textColor">${l(j.subjectName)}</span> ${l(i.subjectCode)} <span class="textColor">${l(j.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${s.examDateLabel?`${l(i.envelopeDate)} <span class="textColor">${l(s.examDateLabel)}</span>`:`${l(i.envelopeDate)} <span class="textColor">${l($.day)}</span> ${l(i.envelopeMonth)} <span class="textColor">${l($.month)}</span> ${l(i.envelopeYear)} <span class="textColor">${l($.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${s.examTimeLabel?`${l(i.envelopeTime)} <span class="textColor">${l(s.examTimeLabel)}</span>`:`${l(i.envelopeTime)} <span class="textColor">${l(Mt(s.startTime,i))}</span> ${l(i.envelopeTo)} <span class="textColor">${l(Mt(s.endTime,i))}</span>`}
        </div>
        <div class="infoNP4">
          ${l(i.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${l(P.room)}</span>${P.name?`<span class="exam-envelope-class-name">${l(P.name)}</span>`:""}</span> ${l(i.envelopeStudents)} <span class="textColor">${c}</span> ${l(i.studentUnit)} ${l(i.examAmount)} <span class="textColor">${l(v)}</span> ${l(i.examUnit)}
        </div>
        <div class="infoNP5">
          ${l(i.envelopeTeacher)} <span class="textColor">${l(j.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${k} envelope-religious ${p?"exam-doc-page-break":""}">
      ${oo(i.envSchoolName)}
      ${ao(i,j,s,P)}
    </div>
    `:""}
    </div>`},St=(e="all")=>{const s=Zs().map($=>no($,e));if(s.length<=1)return s[0]||"";const i=s[0].match(/<style[\s\S]*?<\/style>/),x=i?i[0]:"",_=s[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),g=_?_[1]:"",c=s.map($=>{const A=$.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return A?A[1]:""});return`${x}
<div id="exam-doc-print-area" class="${g}">${c.join("")}</div>`},lo=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${St("all")}
</body>
</html>`;Qt(e,{autoprint:!0})},ro=()=>{const e=Z.selectedClass,o=lt(e);return e?`${o.subject_code||"-"} · ${o.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function io(){ut.forEach(e=>{try{e()}catch{}}),ut=[]}function qt(e,o){const s=document.getElementById(e),i=document.getElementById(`${e}-list`);if(!s||!i)return;const x=Z.teachers||[],_=()=>{i.classList.add("hidden")},g=p=>{s.value=p.full_name||"",Z.form[o]=s.value,Ke(),Qe(),_()},c=()=>{const p=s.value.trim(),C=p.toLowerCase(),f=x.filter(v=>!p||to(v).includes(C)).slice(0,10);if(!x.length){i.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!f.length){i.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}i.innerHTML=f.map(v=>`
      <button type="button" data-id="${v.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${v.image_url?`<img src="${v.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${l((v.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${l(v.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${l(v.teacher_code||"—")}${v.dept?` · ${l(v.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),i.querySelectorAll(".exam-teacher-option").forEach(v=>{v.addEventListener("mousedown",P=>{P.preventDefault();const S=x.find(M=>String(M.id)===String(v.dataset.id));S&&g(S)})})},$=()=>{c(),i.classList.remove("hidden")},A=()=>{Z.form[o]=s.value,Ke(),Qe(),$()},j=()=>$(),b=p=>{if(p.key==="Escape"&&_(),p.key==="Enter"){const C=i.querySelector(".exam-teacher-option");C&&!i.classList.contains("hidden")&&(p.preventDefault(),C.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},k=p=>{!s.contains(p.target)&&!i.contains(p.target)&&_()};s.addEventListener("input",A),s.addEventListener("focus",j),s.addEventListener("keydown",b),document.addEventListener("mousedown",k,!0),ut.push(()=>{s.removeEventListener("input",A),s.removeEventListener("focus",j),s.removeEventListener("keydown",b),document.removeEventListener("mousedown",k,!0)})}function Ge(){const e=Z.form,o=Z.classes.map(s=>{const i=lt(s),x=`${i.subject_code||"-"} · ${i.subject_name||"-"} · ${s.class_name||"-"}`;return`<option value="${s.id}" ${String(e.classId)===String(s.id)?"selected":""}>${l(x)}</option>`}).join("");Le(`
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
            <select id="exam-class-id" class="${$e}">
              <option value="">เลือกห้องเรียน</option>
              ${o}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${$e}">
              ${Object.values(mt).map(s=>`<option value="${s.key}" ${e.lang===s.key?"selected":""}>${l(s.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <input id="exam-type" list="exam-type-datalist" class="${ae}" value="${l(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${Ws.map(s=>`<option value="${l(s)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${ae}" value="${l(e.subjectLabel)}" placeholder="${l(lt(Z.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${ae}" value="${l(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${ae}" value="${l(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${ae}" value="${l(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${ae}" value="${l(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${ae}" value="${l(e.endTime)}">
            </label>
          </div>
          ${e.lang!=="th"?`
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความวันที่สอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = แปลงจากวันที่ด้านบนแบบไทยให้อัตโนมัติ)</span>
            <input id="exam-date-label" class="${ae}" value="${l(e.examDateLabel)}" placeholder="${l(_t(e.examDate)||"เช่น ١٥ يوليو ٢٠٢٦")}">
          </label>
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความเวลาสอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = ใช้เวลาด้านบนตามที่ตั้งไว้)</span>
            <input id="exam-time-label" class="${ae}" value="${l(e.examTimeLabel)}" placeholder="${l($t(e)||"เช่น ٠٨:٣٠ - ٠٩:٣٠")}">
          </label>`:""}
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${ae}" value="${l(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${ae}" value="${l(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${ae}" value="${l(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${ae}" value="${l(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${ae}" value="${l(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${ae}" value="${l(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        ${kt()?(()=>{const s=Z.students.filter(_=>Pe(_.gender)==="M").length,i=Z.students.filter(_=>Pe(_.gender)==="F").length,x=e.studentScope==="split";return`
        <div class="mt-4 grid gap-3 sm:grid-cols-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">นักเรียนที่ใช้ (ห้องนี้มีทั้งชายและหญิง)</span>
            <select id="exam-student-scope" class="${$e}">
              <option value="all" ${x?"":"selected"}>ทั้งห้อง (ไม่แยกเพศ)</option>
              <option value="split" ${x?"selected":""}>แยกเพศ</option>
            </select>
          </label>
          ${x?`
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">เพศที่กำลังดู/พิมพ์</span>
            <select id="exam-split-gender" class="${$e}">
              <option value="M" ${e.splitGender!=="F"?"selected":""}>ชาย (${s} คน)</option>
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${i} คน)</option>
            </select>
          </label>
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รูปแบบพิมพ์</span>
            <select id="exam-split-print-mode" class="${$e}">
              <option value="single" ${e.splitPrintMode!=="both"?"selected":""}>พิมพ์ทีละเพศ (เฉพาะเพศที่เลือกอยู่)</option>
              <option value="both" ${e.splitPrintMode==="both"?"selected":""}>พิมพ์ทีเดียวทั้งสองเพศ (ชายก่อน ต่อด้วยหญิง)</option>
            </select>
          </label>`:""}
        </div>`})():""}

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${l(ro())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${Z.students.length} คน${l(eo())}</span>
          ${Z.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${St()}</div>
      </section>
    </div>`),po()}async function ft(){const e=Z.form.classId;if(Z.selectedClass=Z.classes.find(o=>String(o.id)===String(e))||null,Z.students=[],!!e){Z.loadingStudents=!0,Ge();try{Z.students=ds(await ks(e))}catch(o){console.error(o),J("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+he(o),"error")}finally{Z.loadingStudents=!1}}}function Me(){var e,o,s,i,x,_,g,c,$,A,j,b,k,p,C,f,v,P,S,M;Z.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((o=document.getElementById("exam-subject-label"))==null?void 0:o.value)||"",lang:((s=document.getElementById("exam-lang"))==null?void 0:s.value)||"th",examType:((i=document.getElementById("exam-type"))==null?void 0:i.value)||"",semester:((x=document.getElementById("exam-semester"))==null?void 0:x.value)||"",academicYear:((_=document.getElementById("exam-year"))==null?void 0:_.value)||"",examDate:((g=document.getElementById("exam-date"))==null?void 0:g.value)||"",startTime:((c=document.getElementById("exam-start"))==null?void 0:c.value)||"",endTime:(($=document.getElementById("exam-end"))==null?void 0:$.value)||"",examDateLabel:((A=document.getElementById("exam-date-label"))==null?void 0:A.value)||"",examTimeLabel:((j=document.getElementById("exam-time-label"))==null?void 0:j.value)||"",classPart:((b=document.getElementById("exam-class-part"))==null?void 0:b.value)||"",periodPart:((k=document.getElementById("exam-period-part"))==null?void 0:k.value)||"",examRoom:((p=document.getElementById("exam-room"))==null?void 0:p.value)||"",examAmount:((C=document.getElementById("exam-amount"))==null?void 0:C.value)||"",invigilator1:((f=document.getElementById("exam-invigilator-1"))==null?void 0:f.value)||"",invigilator2:((v=document.getElementById("exam-invigilator-2"))==null?void 0:v.value)||"",studentScope:((P=document.getElementById("exam-student-scope"))==null?void 0:P.value)||"all",splitGender:((S=document.getElementById("exam-split-gender"))==null?void 0:S.value)||"M",splitPrintMode:((M=document.getElementById("exam-split-print-mode"))==null?void 0:M.value)||"single"},Z.selectedClass=Z.classes.find(Q=>String(Q.id)===String(Z.form.classId))||null,Ke()}function Qe(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=St())}function co(){return Me(),Qe(),Z.form.classId?!0:(J("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function po(){var o,s,i,x;io(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(_=>{var g,c;(g=document.getElementById(_))==null||g.addEventListener("input",()=>{Me(),Qe()}),(c=document.getElementById(_))==null||c.addEventListener("change",()=>{Me(),Qe()})}),(o=document.getElementById("exam-class-id"))==null||o.addEventListener("change",async()=>{Me(),Ke(),await ft(),Ge()}),(s=document.getElementById("exam-lang"))==null||s.addEventListener("change",()=>{Me(),Ge()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(_=>{var g;(g=document.getElementById(_))==null||g.addEventListener("change",()=>{Me(),Ge()})}),(i=document.getElementById("exam-doc-refresh"))==null||i.addEventListener("click",async()=>{Me(),await ft(),Ge(),J("รีเฟรชรายชื่อแล้ว","success")}),(x=document.getElementById("exam-doc-print"))==null||x.addEventListener("click",()=>{co()&&lo()}),qt("exam-invigilator-1","invigilator1"),qt("exam-invigilator-2","invigilator2")}async function Xo(e){De("exam-docs"),Oe("เอกสารช่วงสอบ","exam-docs"),Le(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[o,s,i]=await Promise.all([wt((e==null?void 0:e.id)??null),Te().catch(()=>({})),Vt().catch(()=>[])]),x=Js(),_=Xs(),g={...Xe,semester:String(s.semester||Xe.semester||""),academicYear:String(s.academicYear||Xe.academicYear||""),examDate:Us(),invigilator1:(e==null?void 0:e.full_name)||"",...x};_&&o.some(c=>String(c.id)===String(_))&&(g.classId=String(_)),Z={teacher:e,classes:o,teachers:i,students:[],selectedClass:null,loadingStudents:!1,form:g},Z.form.examType||(Z.form.examType=Xe.examType),_&&Ke(),Z.selectedClass=Z.classes.find(c=>String(c.id)===String(Z.form.classId))||null,await ft(),Ge()}catch(o){console.error(o),Le(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${l(he(o))}
    </div>`)}}let Ye=null,qe=null,We=null,Fe=null,He=null;const mo={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},uo={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function bo(e){const o=new Date,s=new Date(e.event_date+"T00:00:00"),i=new Date((e.end_date||e.event_date)+"T23:59:59");if(o>=s&&o<=i)return{status:"ongoing"};const x=Math.max(0,Math.floor((s-o)/1e3)),_=Math.floor(x/86400),g=x%86400,c=Math.floor(g/3600),$=Math.floor(g%3600/60),A=g%60,j=`${String(c).padStart(2,"0")}:${String($).padStart(2,"0")}:${String(A).padStart(2,"0")}`,b=x<=86400?"red":x<=3*86400?"amber":"normal";return{status:"upcoming",days:_,clock:j,urgency:b}}function go(e,o){if(!e)return 0;const s=new Date(e),i=new Date(o+"T00:00:00");if(isNaN(s)||isNaN(i))return 0;const x=i.getTime()-s.getTime();return x<0?0:Math.floor(x/(7*24*60*60*1e3))+1}function Ft(e,o){const s=g=>String(g??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),i=g=>new Date(g+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),x=new Date().toISOString().slice(0,10),_=(e??[]).filter(g=>(g.end_date||g.event_date)>=x).map(g=>({ev:g,cd:bo(g)})).filter(({cd:g})=>g.status==="ongoing"||g.days<=14).sort((g,c)=>g.ev.event_date.localeCompare(c.ev.event_date)).slice(0,5);return _.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${_.map(({ev:g,cd:c})=>{const $=c.status==="ongoing"||c.urgency==="red",A=c.urgency==="amber",j=$?"bg-red-50 border-red-300 ring-2 ring-red-200":A?"bg-amber-50 border-amber-200":"bg-white border-gray-200",b=$?"bg-red-100 animate-pulse":A?"bg-amber-100":"bg-gray-100",k=go(o,g.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${j}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${b}">${$?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${uo[g.event_type]}">${mo[g.event_type]}</span>
            <span class="text-[11px] text-gray-400">${i(g.event_date)}</span>
            ${k>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${k}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${$?"text-red-800":"text-gray-800"}">${s(g.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${c.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${$?"text-red-600":A?"text-amber-600":"text-gray-500"}">อีก ${c.days} วัน</p>
               <p class="text-[11px] font-mono ${$?"text-red-400":"text-gray-400"}">${c.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function Ht(e,o,s=null){const i=c=>c==="A"?"#059669":c==="B"?"#2563eb":"#d97706",x=(c="0.11")=>s?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${c};color:${i(s.grade)}">${s.grade}</span>
       </div>`:"";if(!e.length)return"";const _=e.map(c=>({...c,cd:Bs(c.start_time,c.end_time)})).sort((c,$)=>{const A={active:0,upcoming:1,done:2};return A[c.cd.status]-A[$.cd.status]||(c.start_time??"").localeCompare($.start_time??"")}),g=_.some(c=>c.cd.status==="active");return`
  <div onclick="window._openWenDuty('${o}')"
    class="relative overflow-hidden mb-3 border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-150
           ${g?"bg-red-50 border-red-300 ring-4 ring-red-100":"bg-amber-50 border-amber-300 ring-4 ring-amber-100"}">
    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                ${g?"bg-red-100 animate-pulse":"bg-amber-100"}">${g?"🚨":"🛡️"}</div>
    <div class="flex-1 min-w-0">
      <span class="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1
        ${g?"bg-red-200 text-red-800":"bg-amber-200 text-amber-800"}">เวรวันนี้</span>
      <p class="font-extrabold text-base mb-1 ${g?"text-red-800":"text-amber-800"}">
        ${g?"🔴 ถึงเวลาเวรแล้ว!":`วันนี้คุณมีเวร ${_.length} จุด`}
      </p>
      <div class="space-y-1">
        ${_.map(c=>c.cd.status==="active"?`
        <div class="bg-red-100/70 rounded-lg px-2 py-1.5 -mx-2">
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${l(c.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${l(c.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${c.cd.cls}">${c.cd.label}</span>
          </div>
        </div>`:`
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${c.cd.status==="done"?"text-gray-400 line-through":"text-amber-700"}">
            📍 ${l(c.name)} <span class="${c.cd.status==="done"?"text-gray-300":"text-amber-500"}">(${l(c.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${c.cd.cls}">${c.cd.label}</span>
        </div>`).join("")}
      </div>
      <p class="text-[11px] mt-2 font-semibold ${g?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${x()}
  </div>`}const Ue=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let Ae=null;function Gt(e,o){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const s=parseInt(String(o??"").replace(/[^0-9]/g,""),10);return s>=4&&s<=6?"สามัญมัธยม ม.ปลาย":s>=1&&s<=3?"สามัญมัธยม ม.ต้น":null}async function xo(e){De("overview"),Oe("ภาพรวมผู้บริหาร"),Le(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[o,s]=await Promise.all([As().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),Te().catch(()=>({}))]),i=Object.fromEntries(o.subjectRows.map(w=>[w.id,w])),x=Object.fromEntries(Ue.map(w=>[w,0]));let _=0;o.classRows.forEach(w=>{const z=i[w.course_id],W=z?Gt(z.subject_group,z.grade_level):null;W?x[W]++:_++});const g=new Set(o.classRows.map(w=>w.course_id).filter(Boolean)),c=o.subjectRows.filter(w=>g.has(w.id)),$=Object.fromEntries(Ue.map(w=>[w,new Set])),A=new Set;c.forEach(w=>{const z=Gt(w.subject_group,w.grade_level);z?$[z].add(w.subject_name):A.add(w.subject_name)});const j=Object.fromEntries(Ue.map(w=>[w,$[w].size])),b=new Set(c.map(w=>w.subject_name)).size,k=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:o.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:o.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:o.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:b,hint:"นับชื่อวิชาไม่ซ้ำ"}],p=()=>k.map(w=>`
    <button type="button" data-exec-stat="${w.key}"
      class="text-left bg-white rounded-2xl border ${Ae===w.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${w.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${w.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${w.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${w.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${Ae===w.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),C=(w,z)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${w}</span>
      <span class="text-sm font-bold text-gray-800">${z.toLocaleString("th-TH")}</span>
    </div>`,f=()=>{if(!Ae)return"";let w="";if(Ae==="teachers"||Ae==="students"){const z=k.find(W=>W.key===Ae);w=`<p class="text-sm text-gray-500">${z.icon} ${z.label}ทั้งหมด <b class="text-gray-800">${z.value.toLocaleString("th-TH")}</b> คน (${z.hint})</p>`}else Ae==="courses"?w=Ue.map(z=>C(z,x[z])).join("")+(_>0?C("ไม่ระบุหมวด/ยังไม่ผูกวิชา",_):""):Ae==="subjects"&&(w=Ue.map(z=>C(z,j[z])).join("")+(A.size>0?C("ไม่ระบุหมวด",A.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${w}
    </div>`},v={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},S=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter(w=>w.show&&["council","terangganu","regrade"].includes(w.key)).map(w=>{const[z,W]=v[w.key]||["#E4E4E7","#9C9CA3"];return{key:w.key,id:w.id,emoji:w.emoji,label:w.label,from:z,to:W,badge:w.badge,onclick:w.href?`window.location.href='${w.href}'`:`window._navTo('${w.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map(w=>es(w,s.iconTileStyle)).join(""),Q=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map(w=>`
    <a href="${w.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${w.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${w.label}</span>
    </a>`).join("");Le(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${l((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${p()}
    </div>
    <div id="exec-stat-detail">${f()}</div>

    <div class="mt-5 mb-1 md:hidden">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</h4>
      <div class="flex gap-3 overflow-x-auto pb-1" id="exec-icon-grid">
        ${S}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">🖥️ จอมอนิเตอร์</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${Q}
      </div>
    </div>
  </div>`);function R(){document.querySelectorAll("[data-exec-stat]").forEach(w=>{w.onclick=()=>{var W;const z=w.dataset.execStat;Ae=Ae===z?null:z,document.getElementById("exec-stat-cards").innerHTML=p(),document.getElementById("exec-stat-detail").innerHTML=f(),R(),(W=document.getElementById("exec-stat-detail-inner"))==null||W.scrollIntoView({behavior:"smooth",block:"nearest"})}})}R()}async function zt(e,o=[]){var q,X,a;if(De("overview"),Oe("ภาพรวม"),It(e).includes("executive")){xo(e);return}const{getPendingExamRequestCount:s}=await je(async()=>{const{getPendingExamRequestCount:t}=await import("./api-C-roKrdU.js");return{getPendingExamRequestCount:t}},__vite__mapDeps([0,1,2,3,4])),{getMyDonationRequests:i}=await je(async()=>{const{getMyDonationRequests:t}=await import("./api-C-roKrdU.js");return{getMyDonationRequests:t}},__vite__mapDeps([0,1,2,3,4])),{getUnreadNotifications:x}=await je(async()=>{const{getUnreadNotifications:t}=await import("./api-C-roKrdU.js");return{getUnreadNotifications:t}},__vite__mapDeps([0,1,2,3,4])),[_,g,c,$,A,j,b,k,p,C]=await Promise.all([e?ht(e.id).catch(()=>[]):Wt().catch(()=>[]),wt((e==null?void 0:e.id)??null).catch(()=>[]),Te().catch(()=>({})),e?s(e.id).catch(()=>0):Promise.resolve(0),e?i(e.id).catch(()=>[]):Promise.resolve([]),e?x(e.id).catch(()=>[]):Promise.resolve([]),e?Hs(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?Fs(e.teacher_code).catch(()=>null):Promise.resolve(null),e?je(()=>import("./sports-portals.js_v_10.22-ni4ResyP.js"),__vite__mapDeps([41,6,20,1,17,21,22,2,9])).then(t=>t.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1}),(q=window._pp5AcademicTerms)!=null&&q.length?Promise.resolve(window._pp5AcademicTerms):Ss().catch(()=>[])]),f=parseInt(c.academicYear??2568),v=parseInt(c.semester??1),P=g.filter(t=>t.academic_year==null||Number(t.academic_year)===f&&Number(t.semester)===v),S=Is(C,c),M=At({academic_year:f,semester:v});let Q=M;try{const t=localStorage.getItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`);S.some(r=>At(r)===t)&&(Q=t)}catch{}const R=Ms(c.semester_start);Ye&&(clearInterval(Ye),Ye=null),qe&&(clearInterval(qe),qe=null),We&&(clearInterval(We),We=null),Fe&&(clearInterval(Fe),Fe=null),He&&(clearInterval(He),He=null);const[w,z,W,oe,ne]=await Promise.all([e?yt(e.id,f,v).catch(()=>[]):Promise.resolve([]),e?Es(e.id).catch(()=>[]):Promise.resolve([]),Cs().catch(()=>[]),js().catch(()=>[]),e?Ls(f,v).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries(oe.map(t=>[t.id,t]));const de=window._classroomMapGlobal,ce={};z.forEach(t=>{ce[t.teacher_schedule_id]||(ce[t.teacher_schedule_id]=[]),ce[t.teacher_schedule_id].push(t.class_id)});const fe=Object.fromEntries(g.map(t=>[t.id,t])),te=Object.fromEntries(W.map(t=>[t.period_no,t])),ge=new Date().getDay(),d=w.filter(t=>t.day_of_week===ge&&(ce[t.id]??[]).length>0).map(t=>{const r=(t.period_no??1)+(t.span_periods??1)-1;return{...t,linkedClasses:(ce[t.id]??[]).map(m=>fe[m]).filter(Boolean),period:te[t.period_no],actualEndPeriod:te[r]??te[t.period_no]}}).sort((t,r)=>t.period_no-r.period_no),h=t=>{var m,y;const r=et((m=t.period)==null?void 0:m.start_time,(y=t.actualEndPeriod)==null?void 0:y.end_time);return r.label.includes("กำลังสอน")?0:r.label.startsWith("เสร็จ")?2:1},V=d.find(t=>h(t)===0)??null,Y=[...d].filter(t=>t!==V).sort((t,r)=>h(t)-h(r)||t.period_no-r.period_no),H=o.filter(t=>t.category==="สามัญ"),T=A.find(t=>t.package_type==="donation"&&t.status==="approved"),F=A.filter(t=>t.package_type==="donation"&&t.status==="approved").reduce((t,r)=>t+(r.amount??0),0),se=(t,r)=>{const m=parseInt(t,10);return Number.isFinite(m)&&m>0?m:r},pe=()=>{const t=String(c.donationStickerTiers??"").trim();return se(c.donationMinAmount,99),se(c.donationAmountStep,50),(t?t.split(`
`).filter(Boolean).map(E=>{const[U,ee,K,re,ie]=E.split("|").map(xe=>xe.trim());return{amount:se(U,0),sticker:ee||"🏅",title:K||`ผู้สนับสนุน ${U} บาท`,note:re||"",color:ie||""}}).filter(E=>E.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([E,U,ee,K,re])=>({amount:E,sticker:U,title:ee,note:K,color:re}))).sort((E,U)=>E.amount-U.amount).map((E,U)=>{const ee=c[`donationStickerImg${U+1}`]??"";return ee&&/^https?:\/\//.test(ee)?{...E,sticker:ee}:E})},le=t=>{if(!t)return"";const r=parseInt(t.slice(1,3),16),m=parseInt(t.slice(3,5),16),y=parseInt(t.slice(5,7),16);return`border:2px solid ${t};box-shadow:0 0 0 4px rgba(${r},${m},${y},0.25),0 4px 20px rgba(${r},${m},${y},0.18);`},me=()=>{const t=String(c.donationSpecialFeatures??"").trim(),r=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return t?t.split(`
`).filter(Boolean).map(m=>{const y=m.split("|").map(E=>E.trim());return{icon:y[0]||"✨",text:y[1]||y[0]||m,minTier:parseInt(y[2])||1}}).filter(m=>m.text):r.map(([m,y,E])=>({icon:m,text:y,minTier:E}))};let ue=null,we=0,ve="",Se="",Ee="border border-gray-200 shadow-md";if(T&&c.quotaMode==="school_sponsored"){const t=pe(),r=F,m=[...t].reverse().find(E=>r>=E.amount)??t[0],y=Math.max(0,...A.filter(E=>E.package_type==="donation"&&E.status==="approved").map(E=>Number.parseInt(String(E.donation_tier??""),10)).filter(E=>Number.isInteger(E)&&E>=1&&E<=t.length));if(we=Math.max(m?t.indexOf(m)+1:0,y),ue=t[we-1]??null,ue){Se=le(ue.color),Ee="";const E=String(ue.sticker??""),U=/^https?:\/\//.test(E)?`<img src="${E}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${E}</span>`,ee=ue.color?`color:${ue.color};`:"color:#f59e0b;";ve=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${U}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${ee}">
            ${ue.note||ue.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async t=>{if(!t)return;const{renderClassDetail:r}=await je(async()=>{const{renderClassDetail:m}=await import("./teacher-views-classes-DVprDxA6.js").then(y=>y.t);return{renderClassDetail:m}},__vite__mapDeps([35,6,0,1,2,3,4,9,10,25,36,31,21,15,22,37,30,27,28,29,38]));r(e,t)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:t}=await je(async()=>{const{openSmartClassroomLanding:r}=await import("./teacher-views-smart-classroom-u_zD57Di.js");return{openSmartClassroomLanding:r}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]));t(e)};const Ie=R>0?(()=>{const t=new Date(c.semester_start);t.setDate(t.getDate()+(R-1)*7);const r=new Date(t);r.setDate(r.getDate()+6);const m=E=>`${String(E.getDate()).padStart(2,"0")}/${String(E.getMonth()+1).padStart(2,"0")}`,y=`📅 สัปดาห์ที่ ${R} (${m(t)} – ${m(r)}) · ภาคเรียนที่ ${v}/${f}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${y}</span><span class="mr-10 lg:mr-16">${y}</span>
      </div>
    </div>
    <style>@keyframes teacher-week-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}</style>
    `})():"",Be=It(e);window._openHomeroomPopup=()=>{var r;(r=document.getElementById("homeroom-popup"))==null||r.remove();const t=document.createElement("div");t.id="homeroom-popup",t.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",t.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">🏠 ห้องที่ปรึกษาของฉัน</p>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" onclick="this.closest('.fixed').remove()">×</button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3">
        ${o.map(m=>`
        <div class="border border-gray-100 rounded-xl p-3">
          <p class="font-bold text-gray-800">${m.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${m.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">${m.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${m.category==="สามัญ"?`
            <button onclick="window._openLifeSkillScore('${m.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>`:`
            <button onclick="window._openReligionScore('${m.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${m.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-4">ไม่มีห้องที่ปรึกษา</p>'}
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",m=>{m.target===t&&t.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:t}=await je(async()=>{const{openTeacherShirtSizeModal:r}=await import("./sports-portals.js_v_10.22-ni4ResyP.js");return{openTeacherShirtSizeModal:r}},__vite__mapDeps([41,6,20,1,17,21,22,2,9]));t(e)};const Ce=[...new Set(g.map(t=>t.class_name).filter(Boolean))].sort(),ke=JSON.stringify(Ce).replace(/"/g,"&quot;"),n=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:Be.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:H.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${ke}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:o.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:p.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],I={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-competition-manager":["#D9E7F8","#4C86C6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},N=(window._teacherOverviewSystems||[]).filter(t=>t.show).map(t=>{const[r,m]=I[t.key]||["#E4E4E7","#9C9CA3"];return{key:t.key,id:t.id,show:!0,emoji:t.emoji,label:t.label,from:r,to:m,badge:t.badge,onclick:t.href?`window.location.href='${t.href}'`:`window._navTo('${t.nav}')`}}),L=[...n,...N].filter(t=>t.show),B=(e==null?void 0:e.overview_prefs)||null,D=B?L.filter(t=>!(B.hiddenKeys||[]).includes(t.key)).sort((t,r)=>{const m=B.iconOrder||[],y=m.indexOf(t.key),E=m.indexOf(r.key);return y===-1&&E===-1?0:y===-1?1:E===-1?-1:y-E}):L,G=D.map(t=>es(t,c.iconTileStyle)).join("");window._openOverviewCustomizer=()=>fo(e,L,o);const O=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">หน้าภาพรวมและงานประจำวันใช้ภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนและเอกสาร ปพ.5 ของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="teacher-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Ts(S,Q,M)}
        </select>
      </label>
    </div>
  </section>`;if(Le(`<div class="animate-fade">
    ${O}

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${j.length?(()=>{const t={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},r={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},m={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},y={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},E=[...new Set(j.map(K=>K.metric))].map(K=>`<span style="background:${m[K]??"#f3f4f6"};color:${r[K]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${t[K]??K}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(j.filter(K=>K.supervisor).map(K=>[K.supervisor_id,K.supervisor])).values()].map(K=>y[K.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${j.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${E}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${e==null?void 0:e.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})():""}

    <!-- กำลังสอนอยู่ (ย้ายมาไว้ในโซนเร่งด่วนบนสุด) -->
    ${V?(()=>{var m,y;const t=V.period?`${V.period.start_time.substring(0,5)}–${V.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${V.period_no}`,r=((m=V.linkedClasses[0])==null?void 0:m.id)??null;return`
    <div id="active-class-card" class="mb-4 bg-white rounded-2xl p-5 ${r?"cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150":""}"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);"
      ${r?`onclick="window._goToActiveClass(${r})"`:""}>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${t}</span>
        ${r?'<span class="text-[11px] text-emerald-500 ml-auto">เข้าห้องเรียน →</span>':""}
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${V.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${V.linkedClasses.map(E=>{var U;return((U=E.master_subjects)==null?void 0:U.subject_name)??E.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${V.linkedClasses.map(E=>{const U=E.classroom_id?de[E.classroom_id]:null;return E.class_name+(U?` · 📍${U.building} ห้อง ${U.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${Tt((y=V.actualEndPeriod)==null?void 0:y.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`})():""}

    ${Ie}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="bg-white rounded-2xl ${Ee} px-5 pt-5 pb-5 mb-5 flex items-center gap-5 overflow-hidden" style="${Se}">
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
          ${o.map(t=>`<span class="px-2 py-0.5 rounded-full text-xs ${t.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"} font-medium">🏠 ${t.main_room}</span>`).join("")}
          ${o.length===0?'<span class="px-2 py-0.5 rounded-full text-xs bg-gray-50 text-gray-400">ไม่มีห้องที่ปรึกษา</span>':""}
        </div>
      </div>
      <!-- สติกเกอร์ -->
      ${ve}
    </div>

    <!-- สรุปของฉัน -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      ${[{label:"คอร์สวิชาของฉัน",value:_.length,icon:"📖",color:"text-emerald-700",bg:"bg-emerald-50",nav:"my-courses"},{label:"ห้องเรียน",value:P.length,icon:"🏫",color:"text-blue-700",bg:"bg-blue-50",nav:"my-classes"},{label:"คำร้องรออนุมัติ",value:$,icon:"🔔",color:$>0?"text-red-700":"text-gray-400",bg:"bg-red-50",nav:"requests"},{label:"Smart Classroom",value:"เปิดห้องสอนสด",icon:"👑",color:"text-amber-700",bg:"bg-amber-50",onclick:"window._openSmartClassroomLanding()"}].map(t=>`
        <div onclick="${t.onclick||`window._navTo('${t.nav}')`}"
          class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md p-5 flex items-center gap-4 cursor-pointer hover:shadow-lg active:scale-[0.98] transition-all duration-150 bg-white">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80"></div>
          <div class="w-11 h-11 rounded-xl ${t.bg} flex items-center justify-center text-xl shadow-sm">${t.icon}</div>
          <div>
            <p class="text-xs text-gray-500">${t.label}</p>
            <p class="${typeof t.value=="number"?"text-2xl":"text-sm mt-1"} font-bold ${t.color}">${t.value}</p>
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
      ${D.length>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${G}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${Ht(b,e.teacher_code,k)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${Ft(ne,c.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${Zt[ge]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${w.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':z.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${d.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${w.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":z.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${w.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:z.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${Y.map((t,r)=>{var U,ee;const m=et((U=t.period)==null?void 0:U.start_time,(ee=t.actualEndPeriod)==null?void 0:ee.end_time),y=m.label.startsWith("เสร็จ"),E=t.period?`${t.period.start_time.substring(0,5)}–${(t.actualEndPeriod??t.period).end_time.substring(0,5)}`:`คาบ ${t.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${y?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${y?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${y?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${t.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${y?"text-gray-400":"text-gray-700"} truncate">
                  ${t.linkedClasses.map(K=>{var re;return((re=K.master_subjects)==null?void 0:re.subject_name)??K.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${t.linkedClasses.map(K=>{const re=K.classroom_id?de[K.classroom_id]:null;return K.class_name+(re?` 📍${re.building} ห้อง ${re.room_number}`:"")}).join(" · ")} · ${E}
                </p>
              </div>
              <span id="today-cd-${r}" class="text-xs font-medium flex-shrink-0 ${m.cls}">${m.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),(X=document.getElementById("donor-sticker-btn"))==null||X.addEventListener("click",()=>{if(!ue)return;const t=me(),r=ue.color||"#f59e0b",m=parseInt(r.slice(1,3),16),y=parseInt(r.slice(3,5),16),E=parseInt(r.slice(5,7),16),U=String(ue.sticker??""),ee=/^https?:\/\//.test(U)?`<img src="${U}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${U}</div>`,K=document.createElement("div");K.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",K.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${m},${y},${E},0.85),rgba(${m},${y},${E},1))">
          ${ee}
          <p class="text-white font-bold text-base">${ue.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${ue.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${t.map(re=>we>=(re.minTier??1)?`<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${re.icon}</span>
                     <span class="leading-snug">${re.text}</span>
                   </div>`:`<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${re.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${re.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${we<4?`
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>`:""}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${m},${y},${E},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(K),K.addEventListener("click",re=>{re.target===K&&K.remove()})}),(a=document.getElementById("teacher-overview-term-switcher"))==null||a.addEventListener("change",t=>{var m,y;const r=t.target.value;try{localStorage.setItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`,r)}catch{}r===M?(m=window._navTo)==null||m.call(window,"overview"):(y=window._navTo)==null||y.call(window,"grades")}),d.length>0&&(Ye=setInterval(()=>{Y.forEach((t,r)=>{var E,U;const m=document.getElementById(`today-cd-${r}`);if(!m){clearInterval(Ye);return}const y=et((E=t.period)==null?void 0:E.start_time,(U=t.actualEndPeriod)==null?void 0:U.end_time);m.textContent=y.label,m.className=`text-xs font-medium flex-shrink-0 ${y.cls}`})},3e4)),V&&(qe=setInterval(()=>{var m,y,E,U;const t=document.getElementById("active-class-countdown");if(!t){clearInterval(qe);return}et((m=V.period)==null?void 0:m.start_time,(y=V.actualEndPeriod)==null?void 0:y.end_time).label.startsWith("เสร็จ")?(clearInterval(qe),(E=document.getElementById("active-class-card"))==null||E.remove()):t.textContent=Tt((U=V.actualEndPeriod)==null?void 0:U.end_time)},1e3)),document.getElementById("teacher-live-clock")){const t=()=>{const r=new Date,m=document.getElementById("teacher-live-clock");if(!m){clearInterval(We);return}m.textContent=`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}:${String(r.getSeconds()).padStart(2,"0")}`};t(),We=setInterval(t,1e3)}e&&b.length&&(Fe=setInterval(()=>{const t=document.getElementById("wen-duty-card");if(!t){clearInterval(Fe),Fe=null;return}t.innerHTML=Ht(b,e.teacher_code,k)},3e4)),e&&ne.length&&(He=setInterval(()=>{const t=document.getElementById("wcal-upcoming-card");if(!t){clearInterval(He),He=null;return}t.innerHTML=Ft(ne,c.semester_start)},1e3))}function fo(e,o,s){var b,k;(b=document.getElementById("overview-customizer-modal"))==null||b.remove();const i=(e==null?void 0:e.overview_prefs)||null;let x=o.map(p=>p.key);if((k=i==null?void 0:i.iconOrder)!=null&&k.length){const p=new Set(x),C=i.iconOrder.filter(v=>p.has(v)),f=x.filter(v=>!C.includes(v));x=[...C,...f]}const _=new Set(((i==null?void 0:i.hiddenKeys)||[]).filter(p=>x.includes(p))),g=Object.fromEntries(o.map(p=>[p.key,p])),c=document.createElement("div");c.id="overview-customizer-modal",c.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const $=()=>x.map((p,C)=>{const f=g[p];if(!f)return"";const v=_.has(p),P=f.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${v?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${f.from},${f.to})">${f.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${P}</span>
      <button type="button" data-oc-up="${p}" ${C===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${p}" ${C===x.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${p}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${v?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${v?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),A=()=>{const p=c.querySelector("#oc-list");p&&(p.innerHTML=$()),j()},j=()=>{c.querySelectorAll("[data-oc-toggle]").forEach(p=>p.onclick=()=>{const C=p.dataset.ocToggle;_.has(C)?_.delete(C):_.add(C),A()}),c.querySelectorAll("[data-oc-up]").forEach(p=>p.onclick=()=>{const C=x.indexOf(p.dataset.ocUp);C>0&&([x[C-1],x[C]]=[x[C],x[C-1]],A())}),c.querySelectorAll("[data-oc-down]").forEach(p=>p.onclick=()=>{const C=x.indexOf(p.dataset.ocDown);C<x.length-1&&([x[C+1],x[C]]=[x[C],x[C+1]],A())})};c.innerHTML=`
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
    </div>`,document.body.appendChild(c),j(),c.addEventListener("click",p=>{p.target===c&&c.remove()}),c.querySelector("#oc-close").addEventListener("click",()=>c.remove()),c.querySelector("#oc-save").addEventListener("click",async()=>{const p=c.querySelector("#oc-save");p.disabled=!0,p.textContent="กำลังบันทึก...";try{const C={iconOrder:x,hiddenKeys:[..._]};await Lt(e.id,{overview_prefs:C}),e.overview_prefs=C,c.remove(),J("บันทึกการปรับแต่งแล้ว","success"),zt(e,s)}catch(C){console.error(C),J("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),p.disabled=!1,p.textContent="บันทึก"}}),c.querySelector("#oc-reset").addEventListener("click",async()=>{try{await Lt(e.id,{overview_prefs:null}),e.overview_prefs=null,c.remove(),J("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),zt(e,s)}catch(p){console.error(p),J("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function vo(e,o,s,i,x){const _=i.samaiLogoBwUrl??i.samaiLogoUrl??"",g=Number(e.credit??1),c=g*2,$=g*2*20,j=String(e.grade_level??"").replace(/[^0-9]/g,""),b=["AGM","AGMVOC"].includes(e.subject_group??""),k=x.find(te=>te.dept_code===e.dept)??{},p=k.dept_name??e.dept??"",C=k.head_name??"",f=k.head_sign_url??"",v=i.samaiSchoolName??"",P=i.samaiDirectorName??"",S=i.samaiDirectorSignUrl??"",M=b?i.agmAcademicHeadName??i.samaiAcademicHeadName??"":i.samaiAcademicHeadName??"",Q=new Date,R=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],w=`${Q.getDate()} ${R[Q.getMonth()]} พ.ศ. ${Q.getFullYear()+543}`,z=i.academicYear??Q.getFullYear()+543,W=i.semester??1,oe=(s==null?void 0:s.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",ne=o.map(te=>te.class_name).join(", "),de=j+(ne?" "+ne:""),ce=b?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",fe=`<!DOCTYPE html>
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
    ${_?`<img src="${_}" style="width:72px;height:72px;object-fit:contain;" onerror="this.style.display='none'"/>`:'<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${l(v)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${l(w)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${W} ปีการศึกษา ${z}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${l(v)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${l((s==null?void 0:s.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${l(oe)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${l(p)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${l(e.subject_name??"")}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${l(e.subject_code??"")}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${g}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${c}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${$}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${b?"อิสลามศึกษา":"มัธยมศึกษา"}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${l(de)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${l((s==null?void 0:s.full_name)??"")}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${f?`<img src="${l(f)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${l(C)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${l(p)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${l(M)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${l(ce)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${S?`<img src="${l(S)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${l(P)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${l(v)}</div>

</div>
</body></html>`;Qt(fe)}export{vo as _openLessonPlanApproval,Ht as _renderWenDutyCard,Ft as _renderWorkCalendarUpcoming,Vo as openCourseDocPage2Modal,Yo as openScheduleCourseReview,Zo as renderAnnouncementsView,ca as renderAttendance,pa as renderAttendanceGrid,jo as renderClassDetail,ea as renderClassEditForm,Co as renderClassForm,Lo as renderCourseDocLangConfig,Wo as renderCourseForm,Xo as renderExamDocuments,la as renderGrades,ra as renderGradesGrid,ma as renderLifeSkillScore,ta as renderMyClasses,zo as renderMyCourses,ua as renderPrayerRoomMonitor,ba as renderPrayerScore,Jo as renderProfile,Uo as renderProfileSetup,ga as renderReadingScore,ia as renderRequests,sa as renderSchedule,oa as renderScheduleBuilder,Ao as renderScheduleGrid,aa as renderScoreColumns,zt as renderTeacherOverview};
