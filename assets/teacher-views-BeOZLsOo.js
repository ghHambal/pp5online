const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-Bf4Tf4Cp.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-smart-classroom-DhSgYFBn.js","assets/ui-Dw34xP85.js","assets/teacher-B2ZUQRZE.js","assets/regrade-notifications--64rJp2Z.js","assets/promptpay-CIuxvxIA.js","assets/browser-JP79f-a9.js","assets/sync-DqwcQWV1.js","assets/theme-qDnPEUQn.js","assets/academic-term-switcher-BEH7jaVk.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-CvrEZx9U.js","assets/teacher-views-utils-CcIxYoIw.js","assets/wen-sso-CcN06Rhh.js","assets/azizgames-modal-CZNvwg6f.js","assets/sports-portals.js_v_10.22-Dz4YR1a0.js","assets/sports-awards-admin-6oCPrlSb.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/tutorial-DqRRkJk5.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-CLR_bWyN.js","assets/quiz-api-BIDUVPR5.js","assets/score-qr-scanner-DlvhhgkY.js","assets/teacher-views-attendance-BcU-JXax.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-DEPKarZO.js","assets/score-display-CQ4dUIPx.js","assets/teacher-views-quiz-monitor-BkuCBbcY.js","assets/teacher-views-quiz-analytics-DcOCMZI8.js","assets/teacher-views-dashboard-DhbvEKQG.js","assets/teacher-views-classes-Dfj6NaFe.js","assets/pp5-doc-CXhD6zs9.js","assets/ai-prompt-gate-D6R7FVed.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-DSAy33Oi.js","assets/council-api-DYf7ov7O.js","assets/sports-portals.js_v_10.22-bWq0s5k1.js"])))=>i.map(i=>d[i]);
import{a as W,g as ke,_ as Ie}from"./ui-Dw34xP85.js";import{getDepartments as Ue,getTeachers as Vt,getSubjectCoTeachers as ms,getSubjectCatalog as Yt,getSystemConfig as De,updateMyProfile as wt,getMySchedule as _t,getMySubjects as $t,createSubject as us,getCourseDocPage2 as bs,getMasterSubjects as Wt,getMyClasses as kt,getUniqueRooms as Ut,getUniqueReligionRooms as Jt,getHomeroomTeachers as Xt,getCourseDocLangSettings as gs,getCourseSyllabus as xs,getLessonPlans as fs,getTeachersWithSignatures as vs,deleteSyllabusItem as hs,updateSyllabusItem as ys,deleteLessonPlan as ws,findCurriculumStandards as _s,saveCourseDocPage2 as $s,getClassStudents as ks,getAcademicTerms as Ss,getClassScheduleLinks as Es,getPeriods as Cs,getClassrooms as js,getWorkCalendarEvents as Ls,getExecutiveOverviewStats as As,updateTeacher as Lt}from"./api-Bf4Tf4Cp.js";import{c as Is,a as At,r as Ts}from"./academic-term-switcher-BEH7jaVk.js";import{c as Kt,s as bt}from"./supabase-BV-W2lsh.js";import"./sync-DqwcQWV1.js";import{o as Qt}from"./print-overlay-BVfxEd6n.js";import{_DAYS_TH_FULL as Zt,setActiveNav as He,setTitle as ze,setContent as Te,SELECT_CLS as Se,INPUT_CLS as ie,CREDIT_OPTS as Ns,GRADE_OPTS as mt,formatPhone as dt,_htmlEsc as r,renderSubjectVisual as Bs,_dutyCountdownInfo as Ms,_teacherPositionList as It,_currentWeek as Ps,renderIconTile as es,_activeRemainingDisplay as Tt,renderConfiguredVisual as Ds,_countdownInfo as nt}from"./teacher-views-utils-CcIxYoIw.js";import{b as Lo,e as Ao,a as Io,r as To}from"./teacher-views-classes-Dfj6NaFe.js";import{f as ta,c as sa,g as oa,h as aa,i as na,d as la}from"./teacher-views-classes-Dfj6NaFe.js";import{uploadTeacherPhoto as Os}from"./storage-CuUjCgvI.js";import{openPP5CourseModal as Rs}from"./pp5-doc-CXhD6zs9.js";import{c as qs}from"./ai-prompt-gate-D6R7FVed.js";import{_ as Fs}from"./teacher-views-grades-DEPKarZO.js";import{r as ia,a as da,b as ca}from"./teacher-views-grades-DEPKarZO.js";import{renderAttendance as ma,renderAttendanceGrid as ua,renderLifeSkillScore as ba,renderPrayerRoomMonitor as ga,renderPrayerScore as xa,renderReadingScore as fa}from"./teacher-views-attendance-BcU-JXax.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./regrade-api-CLR_bWyN.js";import"./score-display-CQ4dUIPx.js";import"./confetti-loader-BAN5Lv-C.js";import"./score-qr-scanner-DlvhhgkY.js";import"./leave-time-CrS9gT63.js";const ts="https://zhjqkylesnhcotpkzoxr.supabase.co",ss="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let Oe=null;function Nt(e,a,o){const d=new Date(a+"T00:00:00"),x=new Date(e+"T00:00:00"),w=Math.floor((x-d)/864e5);if(w<0)return null;const g=Math.floor(w/7)+1;return g<=o?g:null}function Hs(e,a,o){const[d,x]=e.includes(":")?e.split(":"):[null,e];return(d===null||d===o)&&x===a}async function zs(e){if(!e)return null;Oe||(Oe=Kt(ts,ss));const[a,o,d]=await Promise.all([Oe.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),Oe.from("duty_points").select("assigned_to"),Oe.from("settings").select("week_start_date,total_weeks").single()]),x=d.data||{},w=x.week_start_date,g=x.total_weeks||20;if(!w)return null;const b=new Date().toISOString().slice(0,10),_=Nt(b,w,g)||1;if(_<=5)return{grade:"A",score:100,week:_};const L=String(e);let E=0;for(const $ of o.data||[])for(const B of $.assigned_to||[])(B.includes(":")?B.split(":")[1]:B)===L&&E++;if(E===0)return null;const I={};for(const $ of a.data||[]){const B=Nt($.date,w,g);B!==null&&(I[B]||(I[B]=[]),I[B].push($))}const f=5,y=Math.min(_,g-2);let v=0;for(let $=1;$<=y;$++)if($<=f)v+=100;else{const B=I[$]||[],K=B.length,T=B.filter(pe=>pe.is_late).length,k=K-T,M=Math.min(100,Math.round(K/E*100)),J=K>0?Math.max(0,Math.round(k/K*100)):100;v+=Math.round(M*.6+J*.4)}const h=Math.round(v/y);return{grade:h>=90?"A":h>=75?"B":"C",score:h,week:_}}async function Gs(e){if(!e)return[];Oe||(Oe=Kt(ts,ss));const{data:a,error:o}=await Oe.from("duty_points").select("name, time, assigned_to");if(o||!a)return[];const d=String(e),x=Zt[new Date().getDay()];return a.filter(w=>(w.assigned_to??[]).some(g=>Hs(g,d,x))).map(w=>{const[g,b]=String(w.time??"").split("-").map(_=>_.trim());return{name:w.name,time:w.time,start_time:g,end_time:b}})}const ct=e=>{const a=String((e==null?void 0:e.dept_label)??"").trim(),o=String((e==null?void 0:e.subject_code)??"").trim(),d=a+" "+o+" "+String((e==null?void 0:e.subject_name_arabic)??"");return/อิสลามศึกษา|อัดดีนียะห์/u.test(a)||/^(ศอ|อก|อศ|ฟป)/u.test(o)?"ISL":/ภาษาอาหรับ/u.test(a)||/^ภอ/u.test(o)||/العربية/u.test(d)?"ARB":/ภาษามลายู/u.test(a)||/^มล/u.test(o)||/الملايو/u.test(d)?"MLB":/ภาษาไทย/u.test(a)?"THAI":/ภาษาต่างประเทศ/u.test(a)?"ENG":/คณิตศาสตร์/u.test(a)?"MATH":/วิทยาศาสตร์/u.test(a)?"SC":/สังคม/u.test(a)?"SOC":/ศิลปะ/u.test(a)?"ART":/สุขศึกษา|พลศึกษา/u.test(a)?"HEALTH":/การงานอาชีพ|เทคโนโลยี/u.test(a)?e.subject_group==="ACDMVOC"?"VOC":"OCC":""},$e=e=>String(e??"").toLocaleLowerCase("th-TH").normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu,""),ut=e=>{const o=String(e??"").trim().match(/(ปวช\.?|ปวส\.?|อป\.?|ม\.?)\s*([1-6])/iu);if(!o)return"";const d=o[1].replace(/\s+/g,"");return d.startsWith("ม")?`ม.${o[2]}`:`${d}${o[2]}`},Vs=(e,a,o)=>{if(!a)return!1;if(ct(e)===a)return!0;const d=o.find(x=>x.dept_code===a);return!!(d!=null&&d.dept_name&&$e(e.dept_label)===$e(d.dept_name))};function os({prefix:e,samaiRooms:a,religionRooms:o,homeroomRooms:d,assignments:x,teacherId:w,academicYear:g,semester:b}){const _=(L,E,I,f,u)=>{const y=`${e}-advisor-rooms-${I}`,v=`${e}-room-${I}`,h=(d??[]).filter($=>$.category===L&&Number($.academic_year)===Number(g)&&Number($.semester)===Number(b)),D=new Map((x??[]).filter($=>$.category===L).map($=>[$.main_room,$]));return`<div id="${e}-room-${I}-wrap" class="space-y-2">
      <button type="button" data-advisor-room-toggle="${y}" aria-expanded="false"
        class="w-full flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 px-4 py-3 text-left transition">
        <span class="font-semibold text-sm text-gray-700">${u} ครูที่ปรึกษา${f}</span>
        <span class="flex items-center gap-2 text-xs text-gray-400">
          <span data-advisor-room-count="${v}">0 ห้อง</span><span data-advisor-room-chevron="${y}">▾</span>
        </span>
      </button>
      <div id="${y}" class="hidden border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-52 overflow-y-auto">
        <p class="text-[11px] text-gray-400 mb-2">เลือกได้มากกว่า 1 ห้อง · ห้องที่มีครูคนอื่นรับผิดชอบอยู่จะเลือกไม่ได้</p>
        ${E.length?E.map($=>{var J;const B=D.get($),K=B&&Number(B.teacher_id)===Number(w),T=!!B&&!K,k=((J=B==null?void 0:B.teachers)==null?void 0:J.full_name)||"มีครูที่ปรึกษาแล้ว",M=h.some(pe=>pe.main_room===$);return`<label class="flex items-start gap-2 text-sm rounded-lg px-2 py-1.5 ${T?"bg-gray-50 text-gray-400 cursor-not-allowed":"cursor-pointer hover:bg-emerald-50 hover:text-emerald-700"}">
            <input type="checkbox" name="${v}" value="${r($)}" data-advisor-room="${v}" ${M?"checked":""} ${T?"disabled":""} class="text-emerald-600 rounded mt-0.5" />
            <span class="min-w-0 flex-1"><span class="block">${r($)}</span>${T?`<span class="block text-[11px] text-gray-400">🔒 ${r(k)}</span>`:""}</span>
          </label>`}).join(""):`<p class="text-xs text-gray-400">ยังไม่มีห้อง${f}</p>`}
      </div>
    </div>`};return`<div class="border-t border-gray-100 pt-4 space-y-3">
    <label class="block text-sm font-semibold text-gray-700">🏠 ห้องที่ปรึกษา</label>
    ${_("สามัญ",a,"samai","สามัญ","🏫")}
    ${_("ศาสนา",o,"religion","ศาสนา","🕌")}
  </div>`}function as(e=document){const a=()=>e.querySelectorAll("[data-advisor-room-count]").forEach(o=>{const d=o.dataset.advisorRoomCount,x=e.querySelectorAll(`input[data-advisor-room="${d}"]:checked`).length;o.textContent=`${x} ห้อง`});e.querySelectorAll("[data-advisor-room-toggle]").forEach(o=>{o.addEventListener("click",()=>{const d=e.querySelector(`#${o.dataset.advisorRoomToggle}`);if(!d)return;const x=d.classList.contains("hidden");d.classList.toggle("hidden",!x),o.setAttribute("aria-expanded",String(x));const w=e.querySelector(`[data-advisor-room-chevron="${o.dataset.advisorRoomToggle}"]`);w&&(w.textContent=x?"▴":"▾")})}),e.querySelectorAll("input[data-advisor-room]").forEach(o=>o.addEventListener("change",a)),a()}async function Yo(e){He("my-courses"),ze("คอร์สวิชาของฉัน","courses"),Te(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[a,o,d]=await Promise.all([e?$t(e.id):Wt().catch(()=>[]),e?kt(e.id).catch(()=>[]):Promise.resolve([]),De().catch(()=>({}))]),x=a,w=f=>o.filter(u=>{var y;return Number(u.course_id??((y=u.master_subjects)==null?void 0:y.id))===Number(f)}),g=f=>Number.isInteger(f)?String(f):Number(f).toFixed(1).replace(/\.0$/,""),b=f=>{const u=Number(f.credit),y=Number.isFinite(u)&&u>0;return{roomCount:w(f.id).length,credit:y?g(u):"—",periodsPerWeek:y?g(u*2):"—",periodsPerTerm:y?g(u*40):"—"}},_=f=>String(f.dept??f.subject_group??"").trim()||"รายวิชาอื่น ๆ",L=[...a.reduce((f,u)=>{const y=_(u);return f.has(y)||f.set(y,[]),f.get(y).push(u),f},new Map).entries()].sort(([f],[u])=>f.localeCompare(u,"th",{numeric:!0})),E=(f,u,y,v)=>`<div class="rounded-xl border ${v} px-3 py-2.5 min-w-0">
      <div class="flex items-center gap-2"><span class="text-base">${f}</span><strong class="text-lg leading-none text-gray-800">${u}</strong></div>
      <p class="mt-1 text-[10px] font-semibold text-gray-500">${y}</p>
    </div>`,I=f=>{const u=b(f);return`<article class="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden">
        <div class="relative p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 pr-16 sm:pr-20">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">${r(f.subject_code??"—")}</span>
                ${f.dept?`<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">${r(f.dept)}</span>`:""}
              </div>
              <h3 class="mt-2 text-base sm:text-lg font-extrabold text-gray-900 leading-snug">${r(f.subject_name)}</h3>
              <p class="mt-1 text-xs text-gray-400">ระดับชั้น ${r(f.grade_level??"ไม่ระบุ")}</p>
            </div>
          </div>
          <div class="pointer-events-none absolute right-3 bottom-4 w-20 h-20 flex items-end justify-end text-6xl opacity-80 drop-shadow-md" aria-label="ไอคอนประจำวิชา">${Bs(f,d,"max-w-full max-h-full object-contain")}</div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${E("🏫",u.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${E("🎓",u.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${E("🗓️",u.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${E("⏱️",u.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
          </div>

          <div class="mt-4 flex justify-end">
            <button onclick="window._openRegisterClass(${f.id})"
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
            <button class="course-workspace-btn col-span-2 min-h-[44px] text-xs text-white font-bold border border-blue-700 bg-blue-700 rounded-xl hover:bg-blue-800 shadow-sm" data-sid="${f.id}">📘 กำหนดการสอนและแผนหน้าเดียว</button>
            <button class="ccm-open-btn min-h-[40px] text-xs text-indigo-700 font-semibold border border-indigo-100 bg-indigo-50/50 rounded-xl hover:bg-indigo-50" data-sid="${f.id}" data-sname="${r(f.subject_name)}">⚙️ คอลัมน์คะแนน</button>
            <button onclick="window._openCourseDocPage2(${f.id})" class="min-h-[40px] text-xs text-emerald-700 font-semibold border border-emerald-100 bg-emerald-50/50 rounded-xl hover:bg-emerald-50">📝 คำอธิบายรายวิชา</button>
            <button class="lesson-plan-btn min-h-[40px] text-xs text-sky-700 font-semibold border border-sky-100 bg-sky-50/50 rounded-xl hover:bg-sky-50" data-sid="${f.id}">📋 ใบขออนุญาตใช้แผน</button>
            <button class="pp5-course-btn min-h-[40px] text-xs text-violet-700 font-semibold border border-violet-100 bg-violet-50/50 rounded-xl hover:bg-violet-50" data-sid="${f.id}">💾 เอกสาร ปพ.5</button>
          </div>
          <div class="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-end gap-2 flex-wrap">
            <button onclick="window._copyCourse(${f.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-purple-700 hover:bg-purple-50">📋 ทำสำเนา</button>
            <button onclick="window._editCourse(${f.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-gray-600 hover:bg-gray-100">✏️ แก้ไข</button>
            <button class="cd2-del-course-btn min-h-[36px] px-3 rounded-lg border border-red-100 bg-white text-xs font-semibold text-red-500 hover:bg-red-50" data-id="${f.id}" data-name="${r(f.subject_name)}">🗑️ ลบ</button>
          </div>
        </details>
      </article>`};Te(`<div class="animate-fade">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <p class="text-sm font-bold text-gray-700">รายวิชาที่เปิดสอน ${a.length} คอร์ส · ${o.length} ห้องเรียน</p>
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
      ${a.length?`
      <div class="space-y-7">
        ${L.map(([f,u])=>`<section>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">🏷️</div>
            <div><h2 class="font-extrabold text-gray-800">กลุ่มสาระ ${r(f)}</h2><p class="text-[11px] text-gray-400">${u.length} คอร์ส · ${u.reduce((y,v)=>y+w(v.id).length,0)} ห้องเรียน</p></div>
            <div class="h-px bg-gray-200 flex-1"></div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${u.map(I).join("")}</div>
        </section>`).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(f=>{f.addEventListener("click",()=>{window._deleteCourse(Number(f.dataset.id),f.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(f=>{f.addEventListener("click",()=>{Fs(parseInt(f.dataset.sid),f.dataset.sname,o)})}),document.querySelectorAll(".course-workspace-btn").forEach(f=>{f.addEventListener("click",()=>{const u=parseInt(f.dataset.sid,10),y=a.find(v=>v.id===u);y&&ns(e,y,o)})}),document.querySelectorAll(".lesson-plan-btn").forEach(f=>{f.addEventListener("click",async()=>{const u=parseInt(f.dataset.sid),y=a.find(K=>K.id===u);if(!y)return;const v=o.filter(K=>{var T;return K.course_id===u||((T=K.master_subjects)==null?void 0:T.id)===u}),{getSystemConfig:h,getDepartments:D}=await Ie(async()=>{const{getSystemConfig:K,getDepartments:T}=await import("./api-Bf4Tf4Cp.js");return{getSystemConfig:K,getDepartments:T}},__vite__mapDeps([0,1,2,3,4])),[$,B]=await Promise.all([h().catch(()=>({})),D().catch(()=>[])]);yo(y,v,e,$,B)})}),document.querySelectorAll(".pp5-course-btn").forEach(f=>{f.addEventListener("click",()=>{const u=parseInt(f.dataset.sid),y=o.filter(v=>{var h;return v.course_id===u||((h=v.master_subjects)==null?void 0:h.id)===u});y.length===1?openPP5Doc(y[0].id):Rs(y)})})}catch{W("โหลดข้อมูลไม่สำเร็จ","error")}}function Ys({subject:e,teacher:a,syllabusItems:o,roomNames:d=[],semester:x,academicYear:w,semesterStart:g,semesterEnd:b,showNotesContent:_=!0,departmentHead:L,signatureTeachers:E=[]}){var Z,ce;const I=[...o??[]].sort((R,se)=>Number(R.week_start)-Number(se.week_start)),f=_===!0,u=r,y=R=>{const se=String(R??"").replace(/\s+/g," ").trim();if(!se)return"";const G=typeof Intl.Segmenter=="function"?[...new Intl.Segmenter("th",{granularity:"grapheme"}).segment(se)].map(fe=>fe.segment):Array.from(se),V=60;if(G.length<=V)return se;const te=G.slice(0,V).join(""),oe=te.lastIndexOf(" ");return`${(oe>=V*.65?te.slice(0,oe):te).trimEnd()}…`},v=R=>R?new Date(`${R}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],h=(R,se)=>{const G=v(R),V=v(se);if(!G.length||!V.length)return"—";const[te,oe,fe]=G,[he,_e,Ee]=V;return fe===Ee&&oe===_e?`${te} - ${he} ${_e} ${Ee}`:fe===Ee?`${te} ${oe} - ${he} ${_e} ${Ee}`:`${te} ${oe} ${fe} - ${he} ${_e} ${Ee}`},D=R=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(String(g??"")))return null;const[se,G,V]=g.split("-").map(Number),te=new Date(se,G-1,V+(R-1)*7),oe=new Date(se,G-1,V+R*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(b??""))&&oe>new Date(`${b}T00:00:00`)&&oe.setTime(new Date(`${b}T00:00:00`).getTime());const fe=he=>`${he.getFullYear()}-${String(he.getMonth()+1).padStart(2,"0")}-${String(he.getDate()).padStart(2,"0")}`;return{start:fe(te),end:fe(oe)}},$=(R,se=Number(R.week_start))=>{const G=D(se),V=Number(R.week_start)===se&&Number(R.week_end??R.week_start)===se,te=(V?R.date_start:null)||(G==null?void 0:G.start),oe=(V?R.date_end:null)||(G==null?void 0:G.end);return h(te,oe)},B=Math.min(30,Math.max(0,...I.map(R=>Number(R.week_end)||Number(R.week_start)||0))),K=Array.from({length:B},(R,se)=>{var he;const G=se+1,V=I.find(_e=>G>=Number(_e.week_start)&&G<=Number(_e.week_end)),te=(he=V==null?void 0:V.source_json)==null?void 0:he.week_type,oe=D(G),fe=V?$(V,G):h(oe==null?void 0:oe.start,oe==null?void 0:oe.end);return`<tr><td class="week">${G}</td><td class="date-cell">${u(fe)}</td><td>${u((V==null?void 0:V.topic)||(te==="midterm_exam"?"สอบกลางภาค":te==="final_exam"?"สอบปลายภาค":te==="break"?"หยุด/ไม่มีการเรียน":""))}</td><td>${u((V==null?void 0:V.teaching_methods)||(te!=null&&te.includes("exam")?"ทดสอบ/ประเมินผล":""))}</td><td class="note-cell">${f?u(y(V==null?void 0:V.notes)):""}</td></tr>`}).join(""),T=e??{},k=T.periods_per_week??(Number(T.credit)>0?Number(T.credit)*2:null),M=[...new Set(d.map(R=>String(R??"").trim()).filter(Boolean))].join(" , "),J=E.filter(R=>R==null?void 0:R.signature_url),pe=(a==null?void 0:a.signature_url)??((Z=J.find(R=>Number(R.id)===Number(a==null?void 0:a.id)))==null?void 0:Z.signature_url)??"",Q=[...L!=null&&L.head_sign_url?[{id:`dept-${L.id}`,name:L.head_name||"หัวหน้ากลุ่มสาระ",signature_url:L.head_sign_url}]:[],...J].filter((R,se,G)=>G.findIndex(V=>V.signature_url===R.signature_url)===se),ue=`<option value="">เว้นช่องไว้เซ็นเอง</option>${pe?`<option value="${u(pe)}" data-name="${u((a==null?void 0:a.full_name)??"")}" selected>ใช้ลายเซ็นที่บันทึกไว้</option>`:""}`,be=`<option value="">เว้นช่องไว้เซ็นเอง</option>${Q.map(R=>`<option value="${u(R.signature_url)}" data-name="${u(R.name??R.full_name??"")}" ${R.signature_url===(L==null?void 0:L.head_sign_url)?"selected":""}>${u(R.name??R.full_name??"ผู้ลงนาม")}</option>`).join("")}`,me=window.open("","_blank");if(!me){W("เบราว์เซอร์บล็อกหน้าต่างตัวอย่าง กรุณาอนุญาต Pop-up","warning");return}const de=5,ge=new URL("pp5-form-logo.png",window.location.href).href;me.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>กำหนดการสอน ${u(T.subject_name)}</title><style>
    @page{size:A4;margin:13mm}*{box-sizing:border-box}body{font-family:"Sarabun",Tahoma,sans-serif;color:#111;margin:0;font-size:11pt;line-height:1.5;background:#eef1f5}.toolbar{position:sticky;top:0;z-index:2;padding:10px;background:#f3f4f6;text-align:center}.toolbar button{border:0;border-radius:8px;background:#1d4ed8;color:white;padding:10px 20px;font-weight:bold;font-size:14px;cursor:pointer}.toolbar label{display:inline-flex;align-items:center;gap:6px;margin:4px;padding:7px;border:1px solid #d1d5db;border-radius:8px;background:white;font-size:12px}.toolbar select{max-width:230px;padding:6px;border:1px solid #d1d5db;border-radius:6px}.page{width:184mm;height:271mm;min-height:271mm;margin:0 auto 8mm;padding:8mm 5mm;background:white;box-shadow:0 1px 8px rgba(15,23,42,.12)}.cover{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;padding-top:12mm;break-after:page;page-break-after:always}.cover-logo{width:32mm;height:32mm;object-fit:contain;filter:grayscale(1);mix-blend-mode:multiply;margin-bottom:9mm}.cover h1{font-size:25pt;line-height:1.2;color:#167a4a;margin:0 0 15mm}.cover .cover-info{align-self:center;width:min(100%,145mm);text-align:left}.cover .course{font-size:16pt;font-weight:bold;text-align:center;margin:0 0 8mm}.cover p{font-size:14pt;margin:2.5mm 0}.cover .signatures{width:100%;margin-top:auto;padding-top:16mm;text-align:center;font-size:13pt}.cover .signatures p{margin:10mm 0;text-align:center}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:middle}.schedule{break-before:page;page-break-before:always}.table{width:100%;table-layout:fixed;border-collapse:collapse;margin-top:4mm;font-size:9.5pt}.table col.col-week{width:10mm}.table col.col-date{width:31mm}.table col.col-topic{width:53mm}.table col.col-methods{width:45mm}.table col.col-notes{width:35mm}.table th,.table td{border:1px solid #555;padding:2mm 2.2mm;vertical-align:top;overflow-wrap:anywhere}.table th{background:#e8eefb;text-align:center}.table .week{text-align:center;white-space:nowrap}.table .date-cell{text-align:center;vertical-align:middle;white-space:nowrap;font-size:9pt}.table .note-cell{font-size:9pt;line-height:1.35}.table tr{break-inside:avoid;page-break-inside:avoid}.table thead{display:table-header-group}.table .doc-title th{border:0;background:white;font-size:18pt;padding:0;text-align:center}.table .doc-meta th{border:0;background:white;font-size:10pt;font-weight:normal;padding:0;text-align:center}@media print{body{background:white}.toolbar{display:none}.page{margin:0;width:auto;height:auto;min-height:0;padding:0;box-shadow:none}.cover{height:271mm;min-height:271mm;padding:12mm 5mm;break-after:page;page-break-after:always}.schedule{break-before:page;page-break-before:always}}
  </style></head><body><div class="toolbar"><label>ลายเซ็นครู<select id="cover-teacher-sign">${ue}</select></label><label>หัวหน้ากลุ่มสาระ<select id="cover-dept-sign">${be}</select></label><button onclick="window.print()">🖨️ พิมพ์ / บันทึก PDF</button></div><section class="page cover"><img class="cover-logo" src="${u(ge)}" alt="ตราโรงเรียน"><h1>กำหนดการสอน</h1><div class="cover-info"><p class="course">รายวิชา ${u(T.subject_name||"................................")} (${u(T.subject_code||".............")})</p><p>ครูผู้สอน ${u((a==null?void 0:a.full_name)||"................................")}</p><p>ชั้น ${u(T.grade_level||"....................")}</p><p>ห้องเรียน ${u(M||"................................")}</p><p>จำนวน ${u(k||"........")} คาบ/สัปดาห์</p><p>ภาคเรียนที่ ${u(x||"....")} ปีการศึกษา ${u(w||"........")}</p></div><div class="signatures"><p>ลงชื่อ <img id="cover-teacher-sign-img" class="sign-img" src="${u(pe)}" alt="" style="${pe?"":"display:none"}"> ครูผู้สอน</p><p>ลงชื่อ <img id="cover-dept-sign-img" class="sign-img" src="${u((L==null?void 0:L.head_sign_url)??"")}" alt="" style="${L!=null&&L.head_sign_url?"":"display:none"}"> หัวหน้ากลุ่มสาระการเรียนรู้</p><p>ลงชื่อ......................................................................ผู้อำนวยการโรงเรียน</p></div></section><section class="page schedule"><table class="table"><colgroup><col class="col-week"><col class="col-date"><col class="col-topic"><col class="col-methods"><col class="col-notes"></colgroup><thead><tr class="doc-title"><th colspan="${de}">กำหนดการสอน</th></tr><tr class="doc-meta"><th colspan="${de}">รายวิชา ${u(T.subject_name||"—")} รหัส ${u(T.subject_code||"—")} ${u(T.grade_level||"")} · คุณครู ${u((a==null?void 0:a.full_name)||"—")}</th></tr><tr class="doc-meta"><th colspan="${de}">ภาคเรียนที่ ${u(x||"—")} ปีการศึกษา ${u(w||"—")}</th></tr><tr><th>สัปดาห์ที่</th><th>วัน/เดือน/ปี</th><th>เนื้อหา</th><th>รูปแบบการสอน</th><th>หมายเหตุ</th></tr></thead><tbody>${K}</tbody></table></section><script>for(const role of ['teacher','dept']){const select=document.querySelector('#cover-'+role+'-sign'),img=document.querySelector('#cover-'+role+'-sign-img'),key='pp5-course-sign-'+role+'-${Number(T.id)||0}';const previous=localStorage.getItem(key);if(previous!==null&&[...select.options].some(option=>option.value===previous))select.value=previous;const update=()=>{img.src=select.value;img.style.display=select.value?'':'none';localStorage.setItem(key,select.value)};select.addEventListener('change',update);update()}<\/script></body></html>`),me.document.close();const c=[...me.document.querySelectorAll(".cover .cover-info p")],F=String(M||T.grade_level||"").trim()||"....................";c[2]&&(c[2].textContent=`ชั้น ${F}`),(ce=c[3])==null||ce.remove();const U=me.document.querySelector(".schedule .doc-meta th");U&&(U.textContent=`รายวิชา ${T.subject_name||"—"} รหัส ${T.subject_code||"—"} ${F} · คุณครู ${(a==null?void 0:a.full_name)||"—"}`);const le=["ครูผู้สอน","หัวหน้ากลุ่มสาระการเรียนรู้","ผู้อำนวยการโรงเรียน"];[...me.document.querySelectorAll(".cover .signatures p")].forEach((R,se)=>{const G=R.querySelector("img");R.className="signature-row",R.replaceChildren();const V=me.document.createElement("span");V.textContent="ลงชื่อ";const te=me.document.createElement("span");te.className="signature-line",G&&te.append(G);const oe=me.document.createElement("span");oe.textContent=le[se],R.append(V,te,oe)});const H=me.document.createElement("style");H.textContent=".cover .signatures{width:100%;margin-top:auto;padding-top:12mm;text-align:center;font-size:13pt}.cover .signature-row{display:flex;align-items:flex-end;justify-content:center;gap:2mm;margin:8mm 0;white-space:nowrap}.cover .signature-line{position:relative;display:inline-flex;width:92mm;height:15mm;align-items:flex-end;justify-content:center;border-bottom:1px dotted #111}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:bottom}",me.document.head.append(H)}async function ns(e,a,o){var L,E,I,f,u,y,v,h,D;(L=document.getElementById("course-workspace-modal"))==null||L.remove();const d=Number(a.id),x=o.filter($=>{var B;return Number($.course_id??((B=$.master_subjects)==null?void 0:B.id))===d}),w={class_name:"ทุกห้องในคอร์ส",course_id:d,master_subjects:a},g=document.createElement("div");g.id="course-workspace-modal",g.className="fixed inset-0 z-[95] bg-gray-50 flex items-stretch justify-stretch",g.innerHTML=`<div class="bg-gray-50 w-full h-full overflow-hidden flex flex-col">
    <header class="flex-shrink-0 px-4 sm:px-6 py-4 border-b bg-white flex items-start justify-between gap-3">
      <div class="min-w-0">
        <span class="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold">📘 ออกแบบการสอนของคอร์ส</span>
        <h2 class="mt-2 text-lg sm:text-xl font-extrabold text-gray-900 truncate">${r(a.subject_name)}</h2>
        <p class="text-xs text-gray-500 mt-0.5"><span class="font-mono text-blue-600">${r(a.subject_code??"—")}</span> · ${r(a.grade_level??"—")} · ${x.length} ห้องเรียน</p>
      </div>
      <button data-close class="w-10 h-10 flex-shrink-0 rounded-xl border bg-white text-gray-400 text-xl hover:text-gray-700">✕</button>
    </header>
    <div id="course-workspace-body" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6">
      <div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลคอร์ส...</div>
    </div>
  </div>`,document.body.appendChild(g);const b=()=>g.remove();g.querySelector("[data-close]").addEventListener("click",b),g.addEventListener("click",$=>{$.target===g&&b()});const _=g.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:$,canUseSmartClassroomForClass:B},{openLessonPlanAIWorkspace:K,openLessonPlanDocument:T,openLessonPlansPrint:k}]=await Promise.all([Ie(()=>import("./teacher-views-smart-classroom-DhSgYFBn.js"),__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40])),Ie(()=>import("./lesson-plan-ai-workspace-DSAy33Oi.js"),__vite__mapDeps([39,0,1,2,3,4,6,22,40]))]),[M,J,pe,Q]=await Promise.all([xs(d).catch(()=>[]),fs(d).catch(()=>[]),$(e),De().catch(()=>({}))]),ue=x.filter(t=>B(pe.unlocked,e,t.id)),be=pe.unlocked||ue.length>0,me=()=>ns(e,a,o),[de,ge]=await Promise.all([vs().catch(()=>[]),Ue().catch(()=>[])]),c=((E=x[0])==null?void 0:E.master_subjects)??{},F=String(c.dept??a.dept??(e==null?void 0:e.dept)??"").trim().toLowerCase(),U=String(c.learning_area??"").trim(),le=String(c.subject_group??"").toUpperCase(),re=le==="ACDM"?"สามัญ":le==="ACDMVOC"?"สามัญปวช":["AGM","AGMVOC"].includes(le)?"ศาสนา":"",H=ge.filter(t=>String(t.dept_code??"").trim().toLowerCase()===F||String(t.dept_name??"").trim().toLowerCase()===F),Z=re?H.filter(t=>t.category===re):H,ce=U&&Z.find(t=>String(t.head_name??"").trim()===U)||Z[0]||U&&ge.find(t=>String(t.head_name??"").trim()===U)||null,R=de.find(t=>String(t.full_name??"").trim()===U),se=ce?{...ce,head_name:U||(ce.head_name==="ทีมบริหาร"?"":ce.head_name),head_sign_url:(R==null?void 0:R.signature_url)||(U&&ce.head_name!==U?null:ce.head_sign_url)}:U?{head_name:U,head_sign_url:(R==null?void 0:R.signature_url)??null}:null,G=x.map(t=>{var j;const i=String(t.class_name??`ห้อง ${t.id}`).trim(),m=String(((j=t.master_subjects)==null?void 0:j.grade_level)??a.grade_level??"").trim(),p=m&&!$e(i).startsWith($e(m))?`${m} ${i}`:i;return{id:t.id,classId:t.id,label:p,roomNames:[p]}}).filter(t=>t.label),V=[...new Set(G.map(t=>t.label))],te=/^\d{4}-\d{2}-\d{2}$/.test(String(Q.semester_start??""))?Q.semester_start:null,oe=Number(a.academic_year??Q.academicYear??Q.academic_year),fe=Number(a.semester??Q.semester),he=Number.isInteger(oe)&&[1,2].includes(fe)?await _t(e.id,oe,fe).catch(()=>[]):[],_e=[...new Set(he.filter(t=>Number(t.subject_id)===d).map(t=>Number(t.day_of_week)).map(t=>t===0?7:t).filter(t=>Number.isInteger(t)&&t>=1&&t<=7&&t!==6))],Ee=t=>{if(!te)return null;const[i,m,p]=te.split("-").map(Number),j=new Date(i,m-1,p+(t-1)*7),z=new Date(i,m-1,p+t*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(Q.semester_end??""))&&z>new Date(`${Q.semester_end}T00:00:00`)&&z.setTime(new Date(`${Q.semester_end}T00:00:00`).getTime());const q=X=>`${X.getFullYear()}-${String(X.getMonth()+1).padStart(2,"0")}-${String(X.getDate()).padStart(2,"0")}`;return{start:q(j),end:q(z)}},Ce=t=>t?new Date(`${t}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],Ne=t=>{const i=Ce(t);return i.length?`${i[0]} ${i[1]} ${i[2]}`:"—"},n=(t,i)=>{const m=Ce(t),p=Ce(i);return!m.length||!p.length?"—":m[1]===p[1]&&m[2]===p[2]?`${m[0]} - ${p[0]} ${p[1]} ${p[2]}`:m[2]===p[2]?`${m[0]} ${m[1]} - ${p[0]} ${p[1]} ${p[2]}`:`${m[0]} ${m[1]} ${m[2]} - ${p[0]} ${p[1]} ${p[2]}`},C={teaching:"เรียน",midterm_exam:"สอบกลางภาค",final_exam:"สอบปลายภาค",break:"หยุด/ไม่มีการเรียน"};let A=null,S=!0;try{S=localStorage.getItem(`pp5-schedule-show-notes-${d}`)!=="false"}catch{}const N=()=>M.length?M.map(t=>{var Be,Je;const i=((Be=t.source_json)==null?void 0:Be.week_type)??"teaching",m=t.unit_title??((Je=t.source_json)==null?void 0:Je.unit_title),p=Ee(t.week_start),j=Ee(t.week_end??t.week_start),z=t.date_start||(p==null?void 0:p.start)||"",q=t.date_end||(j==null?void 0:j.end)||"";if(String(t.id)===String(A)){const Me=(we,Le,Re="text",ot="")=>`<input data-schedule-field="${we}" type="${Re}" value="${r(Le??"")}" class="w-full min-w-24 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs ${ot}" />`,Ae=(we,Le)=>`<textarea data-schedule-field="${we}" rows="2" class="w-full min-w-32 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${r(Le??"")}</textarea>`;return`<tr data-schedule-row="${r(t.id)}" class="border-t border-blue-100 align-top bg-blue-50/50">
          <td class="px-2 py-2 text-xs"><div class="flex items-center gap-1">${Me("week_start",t.week_start,"number","max-w-20")}<span>–</span>${Me("week_end",t.week_end??t.week_start,"number","max-w-20")}</div><select data-schedule-field="week_type" class="mt-2 w-full rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${Object.entries(C).map(([we,Le])=>`<option value="${we}" ${we===i?"selected":""}>${Le}</option>`).join("")}</select></td>
          <td class="w-[138px] min-w-[138px] px-2 py-2 text-center"><div class="space-y-1">${Me("date_start",z,"date")}${Me("date_end",q,"date")}</div></td>
          <td class="px-2 py-2 space-y-1">${Me("topic",t.topic,"text","min-w-48")}<label class="block text-[10px] text-gray-500">หน่วยการเรียนรู้${Me("unit_title",m,"text")}</label></td>
          <td class="px-2 py-2">${Ae("teaching_methods",t.teaching_methods)}</td>
          <td class="px-2 py-2">${Ae("notes",t.notes)}</td>
          <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="save" data-schedule-id="${r(t.id)}" class="rounded-lg bg-emerald-600 px-2 py-1.5 text-[10px] font-bold text-white">บันทึก</button><button type="button" data-schedule-action="cancel" class="rounded-lg border bg-white px-2 py-1.5 text-[10px] font-bold text-gray-600">ยกเลิก</button></div></td>
        </tr>`}const X=`สัปดาห์ ${t.week_start}${t.week_end!==t.week_start?`–${t.week_end}`:""}`,ee=n(z,q),xe=C[i]??"เรียน",je=i==="teaching"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-800";return`<tr class="border-t border-blue-100 align-top">
        <td class="px-3 py-3 text-xs font-bold whitespace-nowrap">${r(X)}<span class="block mt-1 px-2 py-1 rounded-lg ${je} text-[10px] w-fit">${r(xe)}</span></td>
        <td class="w-[138px] min-w-[138px] px-3 py-3 text-center text-xs whitespace-nowrap">${r(ee)}</td>
        <td class="px-3 py-3 text-xs min-w-48"><p class="font-bold text-gray-800">${r(t.topic)}</p>${m?`<p class="text-[11px] text-blue-700 mt-1">${r(m)}</p>`:""}</td>
        <td class="px-3 py-3 text-xs min-w-36 whitespace-pre-wrap">${r(t.teaching_methods??"—")}</td>
        <td class="px-3 py-3 text-xs min-w-28 whitespace-pre-wrap">${r(t.notes??"—")}</td>
        <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="edit" data-schedule-id="${r(t.id)}" class="rounded-lg border border-blue-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-blue-700">แก้ไข</button><button type="button" data-schedule-action="delete" data-schedule-id="${r(t.id)}" class="rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-red-600">ลบ</button></div></td>
      </tr>`}).join(""):"",O=ue.map(t=>`<option value="${t.id}">${r(t.class_name??`ห้อง ${t.id}`)}</option>`).join(""),Y=t=>{const i=Number(t),m=new Map;return M.forEach(p=>{var xe;const j=(xe=p.source_json)==null?void 0:xe.class_id,z=Number(j),q=j!=null&&j!==""&&Number.isInteger(z)&&z>0;if(q&&z!==i)return;const X=`${p.week_start}-${p.week_end??p.week_start}`,ee=m.get(X);(!ee||q&&!ee.isScoped)&&m.set(X,{item:p,isScoped:q})}),[...m.values()].map(p=>p.item)};_.innerHTML=`<nav class="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-4" aria-label="ส่วนออกแบบการสอน">
      <button type="button" data-course-tab="schedule" class="course-tab rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white">📘 กำหนดการสอน</button>
      <button type="button" data-course-tab="plans" class="course-tab rounded-xl border border-violet-200 bg-white px-4 py-2.5 text-sm font-bold text-violet-800">📝 แผนการจัดการเรียนรู้หน้าเดียว</button>
    </nav>
    <section data-course-panel="schedule" class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-blue-950">📘 กำหนดการสอนทั้งภาคเรียน</h3><p class="text-xs text-blue-700/70 mt-1">ภาพรวมรายสัปดาห์ของรายวิชา ใช้ร่วมกับ Smart Classroom ในห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2"><label class="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 text-xs text-blue-800"><input id="cw-schedule-show-notes" type="checkbox" class="h-4 w-4 accent-blue-700" ${S?"checked":""}> แสดงเนื้อหาหมายเหตุในเอกสาร</label><button id="cw-schedule-preview" class="min-h-[44px] px-4 rounded-xl border border-blue-200 bg-white text-blue-800 text-xs font-bold">👁️ ตัวอย่างเอกสารทั้งหมด</button><button id="cw-ai-schedule" class="min-h-[44px] px-4 rounded-xl ${be?"bg-blue-700 hover:bg-blue-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${be?"":"disabled"}>🤖 สร้างด้วย AI</button></div>
          </div>
          ${be?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${te?`<p class="mt-3 text-[11px] text-blue-700">ช่วงวันที่คำนวณจากวันเปิดภาคเรียนที่ตั้งค่าไว้: ${Ne(te)} · สัปดาห์ที่ 1 เริ่มวันนี้</p>`:'<p class="mt-3 text-[11px] text-amber-700">ยังไม่ได้ตั้งค่าวันเปิดภาคเรียน ระบบจะแสดงวันที่จากกำหนดการเดิมจนกว่าจะตั้งค่าวันเริ่มภาคเรียน</p>'}
          ${M.length?`<div class="mt-4 max-h-[68vh] overflow-auto rounded-xl border border-blue-100 bg-white"><table class="w-full min-w-[780px] table-fixed text-left"><colgroup><col><col class="w-[138px]"><col><col><col><col class="w-[76px]"></colgroup><thead class="sticky top-0 bg-blue-50 text-[10px] font-extrabold text-blue-900"><tr><th class="px-3 py-2">สัปดาห์</th><th class="w-[138px] px-3 py-2 text-center">วัน/เดือน</th><th class="px-3 py-2">เนื้อหา</th><th class="px-3 py-2">รูปแบบการสอน</th><th class="px-3 py-2">หมายเหตุ</th><th class="w-[76px] px-2 py-2">จัดการ</th></tr></thead><tbody id="cw-schedule-rows">${N()}</tbody></table></div>`:'<div class="mt-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>'}
    </section>

    <section data-course-panel="plans" class="hidden rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-violet-950">📝 แผนการจัดการเรียนรู้หน้าเดียว</h3><p class="text-xs text-violet-700/70 mt-1">แผนรายครั้งที่อ้างอิงหัวข้อจากกำหนดการสอน ส่วนบันทึกหลังสอนและลายเซ็นแยกตามห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2 justify-end"><button id="cw-plans-print-all" class="min-h-[44px] px-4 rounded-xl ${J.length?"border border-violet-200 bg-white text-violet-800 hover:bg-violet-50":"border border-gray-200 bg-gray-100 text-gray-400"} text-xs font-bold flex-shrink-0" ${J.length?"":"disabled"}>🖨️ พิมพ์/บันทึกแผนทั้งภาคเรียน</button><button id="cw-ai-plan" class="min-h-[44px] px-4 rounded-xl ${be?"bg-violet-700 hover:bg-violet-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${be?"":"disabled"}>✨ สร้างแผนด้วย AI</button></div>
          </div>
          ${be?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${J.length?`<div class="mt-4 space-y-2">${J.map(t=>`<div class="flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-3 py-3"><button class="cw-plan-row min-w-0 flex-1 text-left hover:text-violet-800 transition" data-plan-id="${t.id}"><p class="text-sm font-bold text-gray-800">${r(t.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${t.week_start}${t.week_end!==t.week_start?`–${t.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button><button type="button" class="cw-plan-delete shrink-0 rounded-lg border border-red-200 bg-white px-3 py-2 text-[10px] font-bold text-red-600" data-plan-id="${t.id}">ลบ</button></div>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
    </section>
    ${J.length&&ue.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้อง Smart Classroom</h3><p class="text-xs text-gray-400 mt-1">แผนใช้ร่วมกันในรายวิชา แต่เปิดบันทึกหลังสอนเฉพาะห้องที่มีสิทธิ์</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${O}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`;const P=t=>{_.querySelectorAll("[data-course-panel]").forEach(i=>i.classList.toggle("hidden",i.dataset.coursePanel!==t)),_.querySelectorAll("[data-course-tab]").forEach(i=>{const m=i.dataset.courseTab===t;i.className=`course-tab rounded-xl px-4 py-2.5 text-sm font-bold ${m?t==="schedule"?"bg-blue-700 text-white":"bg-violet-700 text-white":"border border-gray-200 bg-white text-gray-600"}`})};_.querySelectorAll("[data-course-tab]").forEach(t=>t.addEventListener("click",()=>P(t.dataset.courseTab)));const ae=_.querySelector("#cw-schedule-rows");ae==null||ae.addEventListener("click",async t=>{const i=t.target.closest("[data-schedule-action]");if(!i)return;const m=i.dataset.scheduleId,p=M.find(we=>String(we.id)===String(m));if(!p)return;if(i.dataset.scheduleAction==="delete"){if(!confirm(`ลบกำหนดการสอนสัปดาห์ ${p.week_start}${p.week_end!==p.week_start?`–${p.week_end}`:""} เรื่อง "${p.topic}"?`))return;i.disabled=!0;try{await hs(p.id),W("ลบกำหนดการสอนแล้ว","success"),me()}catch(we){i.disabled=!1,W(`ลบไม่สำเร็จ: ${ke(we)}`,"error")}return}if(i.dataset.scheduleAction==="edit"){A=m,ae.innerHTML=N();return}if(i.dataset.scheduleAction==="cancel"){A=null,ae.innerHTML=N();return}if(i.dataset.scheduleAction!=="save")return;const j=i.closest("[data-schedule-row]"),z=we=>{var Le;return((Le=j.querySelector(`[data-schedule-field="${we}"]`))==null?void 0:Le.value)??""},q=Number(z("week_start")),X=Number(z("week_end")),ee=z("week_type"),xe=z("date_start")||null,je=z("date_end")||null,Be=z("topic").trim();if(!Number.isInteger(q)||q<1||!Number.isInteger(X)||X<q){W("ช่วงสัปดาห์ไม่ถูกต้อง","warning");return}if(!Be){W("กรุณาระบุหัวข้อที่จะสอน","warning");return}if(!Object.hasOwn(C,ee)){W("เลือกประเภทสัปดาห์ให้ถูกต้อง","warning");return}if(xe&&je&&je<xe){W("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");return}if(M.some(we=>{if(String(we.id)===String(p.id))return!1;const Le=Number(we.week_start),Re=Number(we.week_end??we.week_start);return q<=Re&&X>=Le})){W("ช่วงสัปดาห์นี้ซ้ำกับรายการอื่น กรุณาปรับเลขสัปดาห์","warning");return}const Me=z("unit_title").trim(),Ae={course_id:d,week_start:q,week_end:X,date_start:xe,date_end:je,topic:Be,teaching_methods:z("teaching_methods").trim()||null,notes:z("notes").trim()||null,source_json:{...p.source_json??{},week_start:q,week_end:X,date_start:xe,date_end:je,week_type:ee,unit_title:Me}};i.disabled=!0,i.textContent="กำลังบันทึก…";try{await ys(p.id,Ae),Object.assign(p,Ae,{unit_title:Me||null}),A=null,ae.innerHTML=N(),W("บันทึกแถวกำหนดการแล้ว","success")}catch(we){i.disabled=!1,i.textContent="บันทึก",W(`บันทึกไม่สำเร็จ: ${ke(we)}`,"error")}}),(I=_.querySelector("#cw-schedule-show-notes"))==null||I.addEventListener("change",t=>{S=t.currentTarget.checked;try{localStorage.setItem(`pp5-schedule-show-notes-${d}`,String(S))}catch{}}),(f=_.querySelector("#cw-ai-schedule"))==null||f.addEventListener("click",()=>{if(!G.length){W("รายวิชานี้ยังไม่มีห้องเรียนสำหรับสร้างกำหนดการสอน","warning");return}const t=document.createElement("div");t.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับสร้างกำหนดการสอน</h3><p class="mt-1 text-xs text-gray-500">กำหนดการจะถูกบันทึกแยกตามห้องที่เลือก เพื่อไม่ให้หัวข้อของแต่ละชั้นปะปนกัน</p><select data-schedule-ai-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">ทุกห้องเหมือนกัน</option>${G.map((m,p)=>`<option value="${p}">${r(m.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-schedule-ai-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-schedule-ai-room-open class="min-h-[42px] rounded-xl bg-blue-700 text-xs font-bold text-white sm:col-span-2">เริ่มสร้างกำหนดการ</button></div></div>`,document.body.appendChild(t);const i=()=>t.remove();t.querySelector("[data-schedule-ai-room-cancel]").addEventListener("click",i),t.addEventListener("click",m=>{m.target===t&&i()}),t.querySelector("[data-schedule-ai-room-open]").addEventListener("click",()=>{var X;const m=(X=t.querySelector("[data-schedule-ai-room-select]"))==null?void 0:X.value,p=m==="all"?G:[G[Number(m)]].filter(Boolean),j=p.map(ee=>Number(ee.classId)).filter(ee=>Number.isInteger(ee)&&ee>0),z=p.map(ee=>ee.label),q=m==="all"?w:x.find(ee=>Number(ee.id)===j[0])??w;i(),K({teacher:e,cls:q,courseId:d,syllabusItems:M,lessonPlans:J,currentWeek:1,initialMode:"schedule",semesterStart:te,semesterEnd:Q.semester_end,scheduledDays:_e,targetClassIds:j,targetClassLabels:z,onSaved:me})})}),(u=_.querySelector("#cw-ai-plan"))==null||u.addEventListener("click",()=>{if(!G.length){W("รายวิชานี้ยังไม่มีห้องเรียนสำหรับสร้างแผน","warning");return}const t=document.createElement("div");t.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",t.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับสร้างแผน</h3><p class="mt-1 text-xs text-gray-500">ต้องเลือกห้องก่อนสร้างแผน หากเลือกทุกห้อง ระบบจะสร้างแผนชุดเดียวกันแยกให้แต่ละห้อง</p><select data-plan-ai-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">ทุกห้องเหมือนกัน</option>${G.map((m,p)=>`<option value="${p}">${r(m.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-plan-ai-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-plan-ai-room-open class="min-h-[42px] rounded-xl bg-violet-700 text-xs font-bold text-white sm:col-span-2">เริ่มสร้างแผน</button></div></div>`,document.body.appendChild(t);const i=()=>t.remove();t.querySelector("[data-plan-ai-room-cancel]").addEventListener("click",i),t.addEventListener("click",m=>{m.target===t&&i()}),t.querySelector("[data-plan-ai-room-open]").addEventListener("click",()=>{var X;const m=(X=t.querySelector("[data-plan-ai-room-select]"))==null?void 0:X.value,p=m==="all"?G:[G[Number(m)]].filter(Boolean),j=p.map(ee=>Number(ee.classId)).filter(ee=>Number.isInteger(ee)&&ee>0),z=p.map(ee=>ee.label),q=m==="all"?w:x.find(ee=>Number(ee.id)===j[0])??w;i(),K({teacher:e,cls:q,courseId:d,syllabusItems:M,lessonPlans:J,currentWeek:1,initialMode:"plan",semesterStart:te,semesterEnd:Q.semester_end,scheduledDays:_e,targetClassIds:j,targetClassLabels:z,onSaved:me})})});const ve=t=>k({plans:J,subject:a,teacher:e,roomNames:t.flatMap(i=>i.roomNames??[]),roomGroups:t,semester:Q.semester??a.semester,academicYear:Q.academicYear??Q.academic_year??a.academic_year,departmentHead:se});(y=_.querySelector("#cw-plans-print-all"))==null||y.addEventListener("click",()=>{const t=G;if(t.length<=1){ve(t);return}const i=document.createElement("div");i.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องเรียนสำหรับพิมพ์แผน</h3><p class="mt-1 text-xs text-gray-500">เลือกห้องเดียว หรือเปิดทุกห้องเพื่อสลับแท็บและบันทึกเป็น PDF เดียว</p><select data-plan-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">เปิดทุกห้อง</option>${t.map((p,j)=>`<option value="${j}">${r(p.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-plan-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-plan-room-open class="min-h-[42px] rounded-xl bg-violet-700 text-xs font-bold text-white sm:col-span-2">เปิดแผน</button></div></div>`,document.body.appendChild(i);const m=()=>i.remove();i.querySelector("[data-plan-room-cancel]").addEventListener("click",m),i.addEventListener("click",p=>{p.target===i&&m()}),i.querySelector("[data-plan-room-open]").addEventListener("click",()=>{var j;const p=(j=i.querySelector("[data-plan-room-select]"))==null?void 0:j.value;m(),ve(p==="all"?t:[t[Number(p)]])})}),(v=_.querySelector("#cw-schedule-preview"))==null||v.addEventListener("click",()=>{const t=_.querySelector("#cw-schedule-show-notes");S=(t==null?void 0:t.checked)===!0;try{localStorage.setItem(`pp5-schedule-show-notes-${d}`,String(S))}catch{}if(!G.length){W("รายวิชานี้ยังไม่มีห้องเรียนสำหรับเปิดตัวอย่างเอกสาร","warning");return}const i=document.createElement("div");i.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับดูตัวอย่างเอกสาร</h3><p class="mt-1 text-xs text-gray-500">กรุณาเลือกห้องก่อนเปิดตัวอย่าง เพื่อให้หัวเอกสารและกำหนดการสอนตรงกับห้องนั้น</p><select data-schedule-preview-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm">${G.map((p,j)=>`<option value="${j}">${r(p.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-schedule-preview-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-schedule-preview-room-open class="min-h-[42px] rounded-xl bg-blue-700 text-xs font-bold text-white sm:col-span-2">เปิดตัวอย่างเอกสาร</button></div></div>`,document.body.appendChild(i);const m=()=>i.remove();i.querySelector("[data-schedule-preview-room-cancel]").addEventListener("click",m),i.addEventListener("click",p=>{p.target===i&&m()}),i.querySelector("[data-schedule-preview-room-open]").addEventListener("click",()=>{var z;const p=Number((z=i.querySelector("[data-schedule-preview-room-select]"))==null?void 0:z.value),j=G[p];j&&(m(),Ys({subject:a,teacher:e,syllabusItems:Y(j.classId),roomNames:j.roomNames,semester:Q.semester??a.semester,academicYear:Q.academicYear??Q.academic_year??a.academic_year,semesterStart:te,semesterEnd:Q.semester_end,showNotesContent:S,departmentHead:se,signatureTeachers:de}))})});let ye=null;const l=_.querySelector("#cw-document-picker"),s=()=>{l&&(l.classList.add("hidden"),l.classList.remove("flex"))};_.querySelectorAll(".cw-plan-row").forEach(t=>t.addEventListener("click",()=>{ye=J.find(i=>i.id===parseInt(t.dataset.planId,10))??null,!(!ye||!ue.length||!l)&&(l.classList.remove("hidden"),l.classList.add("flex"))})),_.querySelectorAll(".cw-plan-delete").forEach(t=>t.addEventListener("click",async()=>{const i=J.find(m=>m.id===parseInt(t.dataset.planId,10));if(i&&confirm(`ลบแผน "${i.title}"? บันทึกหลังสอนและลายเซ็นที่ผูกกับแผนนี้จะถูกลบด้วย`)){t.disabled=!0;try{await ws(i.id),W("ลบแผนการสอนแล้ว","success"),me()}catch(m){t.disabled=!1,W(`ลบไม่สำเร็จ: ${ke(m)}`,"error")}}})),(h=_.querySelector("#cw-document-cancel"))==null||h.addEventListener("click",s),l==null||l.addEventListener("click",t=>{t.target===l&&s()}),(D=_.querySelector("#cw-document-open"))==null||D.addEventListener("click",()=>{var m;const t=parseInt((m=_.querySelector("#cw-document-class"))==null?void 0:m.value,10),i=ue.find(p=>p.id===t);!ye||!i||(s(),T({plan:ye,cls:i,teacher:e,classId:i.id,currentWeek:ye.week_start,semesterStart:te,semesterEnd:Q.semester_end,scheduledDays:_e}))})}catch($){_.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${r(ke($))}</div>`}}const lt={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnExternalAI:"ใช้ AI ของฉัน",btnExternalAISub:"คัดลอก Prompt + วาง JSON",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 1 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["รหัสมาตรฐาน/ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},en:{key:"en",dir:"ltr",aiLang:"formal English",label:"English",title:"Course Description",close:"Close",save:"Save",saving:"Saving...",helpTitle:"Help me fill this in",helpSub:"Enter the lessons/topics below, then choose a filling method",topicLabel:"Lessons / Topics (add multiple)",topicPlaceholder:"e.g. Statistics, Exponents, Reading comprehension",addTopic:"Add topic",btnCurriculum:"Find curriculum",btnCurriculumSub:"Curriculum database",btnCurriculumLoading:"Searching...",btnAI:"Draft with AI",btnAISub:"Gemini + topics",btnAILoading:"AI is drafting...",btnExternalAI:"Use my AI",btnExternalAISub:"Copy Prompt + paste JSON",btnImg:"Read image",btnImgSub:"AI reads image",btnImgLoading:"Reading...",descLabel:"Course description / overall learning outcomes",descPlaceholder:"Write in English or another language; text direction is supported automatically",dirLabel:"Text direction",dirAuto:"Automatic",dirRTL:"Right to left",dirLTR:"Left to right",signerLabel:"Signatory",signerPlaceholder:"Head of learning area",signerHint:"Used as the learning-area head in the document",tableTitle:"Standards / Indicators / Learning outcomes",tableHint:"Rows containing text become selectable assessment items",tplBasic:"Basic: 1 column",tplExtra:"Additional: 1 column",addCol:"+ Column",addRow:"+ Row",rowHeader:"No.",delRow:"Delete",objTitle:"Assessment objectives",objHint:"(click to select)",between:"During term",mid:"Midterm",final:"Final",noOpts:"No selectable items yet",notSelected:"Not selected",colsBasic:["Standard/indicator code and full text"],colsExtra:["Learning outcomes"],colNew:e=>`Column ${e}`,pickerTitles:{mid:"Select midterm items",between:"Select during-term items",final:"Select final items"},pickerCancel:"Cancel",pickerOk:"OK",confirmOverwrite:"Searching the curriculum will overwrite existing data. Continue?",confirmAIOverwrite:"Let AI draft new content over the existing data?",confirmImgOverwrite:"Fill from the image and overwrite existing data?",confirmColChange:"Change the column format? Existing data will be fitted to the new columns.",toastSaved:"Course description saved",toastSearchOk:e=>`Found ${e} curriculum items - please review before saving`,toastSearchEmpty:"No curriculum items found - try Draft with AI instead",toastAIDone:"AI drafted the content - please review it carefully before saving",toastImgDone:"AI read the image - please review the content before saving"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"١ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["كود ڤياوايان/ڤتوك دان teks penuh"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمود أساسي واحد",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["رمز المعيار/المؤشر والنص الكامل"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"1 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Kod piawaian/petunjuk dan teks penuh"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let rt=null;async function Ws(){if(rt)return rt;const e=await gs().catch(()=>[]);return rt=Object.fromEntries(e.map(a=>[a.lang_key,a.settings??{}])),rt}async function Wo(e,a){var Ce,Ne;const[o,d]=await Promise.all([bs(a.id).catch(n=>(W("โหลดคำอธิบายฯ ไม่สำเร็จ: "+ke(n),"error"),null)),Ws()]),x=n=>{const C=Array.isArray(n)?n:["รหัสมาตรฐาน/ตัวชี้วัด"];return C.length?C.map(A=>String(A??"")):["รหัสมาตรฐาน/ตัวชี้วัด"]},w=(n,C)=>{const S=(Array.isArray(n)?n:[]).map(N=>{const O=Array.isArray(N)?N:Object.values(N??{});return Array.from({length:C},(Y,P)=>String(O[P]??""))});return S.length?S:Array.from({length:12},()=>Array.from({length:C},()=>""))},g=n=>[...new Set((Array.isArray(n)?n:[]).map(C=>parseInt(C,10)).filter(C=>Number.isFinite(C)&&C>0))],b=a.subject_group==="ACDMVOC",_=!b&&(!a.subject_group||["ACDM","AGM"].includes(a.subject_group)),L=(n,C,A)=>{const N=(Array.isArray(n)?n:[]).map(O=>Object.fromEntries(C.map(Y=>[Y,String((O==null?void 0:O[Y])??"")])));for(;N.length<A;)N.push(Object.fromEntries(C.map(O=>[O,""])));return N};let E=x(o==null?void 0:o.table_columns),I=w(o==null?void 0:o.table_rows,E.length),f=g(o==null?void 0:o.midterm_objective_items),u=g(o==null?void 0:o.between_objective_items),y=g(o==null?void 0:o.final_objective_items),v=(o==null?void 0:o.between_objective_extra)??"",h=(o==null?void 0:o.midterm_objective_extra)??"",D=(o==null?void 0:o.final_objective_extra)??"",$=["auto","rtl","ltr"].includes(o==null?void 0:o.text_direction)?o.text_direction:"auto",B=(o==null?void 0:o.description)||"",K=(o==null?void 0:o.signer_name)||a.learning_area||"",T=(Ce=o==null?void 0:o.topic_list)!=null&&Ce.length?o.topic_list:[""],k=L(o==null?void 0:o.voc_objectives,["objective","competency"],10),M=L(o==null?void 0:o.voc_schedule,["week","content","note"],20),J="",pe="th";const Q=()=>{const n={...lt.th,...lt[pe]},C=(d==null?void 0:d[pe])??{},A={...n,...C};return C.pickerTitles&&(A.pickerTitles={...n.pickerTitles,...C.pickerTitles}),A},ue=()=>{if(document.getElementById("cd2-rtl-font"))return;const n=document.createElement("link");n.id="cd2-rtl-font",n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(n)},[be,me]=await Promise.all([De().catch(()=>({})),Ue().catch(()=>[])]),de=me.find(n=>n.dept_code===a.dept),ge=(de==null?void 0:de.dept_name)??a.dept??"";(Ne=document.getElementById("course-doc-page2-modal"))==null||Ne.remove();const c=document.createElement("div");c.id="course-doc-page2-modal",c.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(c);const F="/pp5online/course-doc/course-description-guide.png",U=()=>{var S;(S=document.getElementById("course-description-guide-modal"))==null||S.remove();const n=document.createElement("div");n.id="course-description-guide-modal",n.className="fixed inset-0 z-[210] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6",n.innerHTML=`<div role="dialog" aria-modal="true" aria-labelledby="course-description-guide-title" class="relative flex max-h-[96vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div class="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3 sm:px-5">
        <div class="min-w-0"><h3 id="course-description-guide-title" class="truncate text-sm font-extrabold text-gray-800 sm:text-base">📘 คู่มือการเขียนคำอธิบายรายวิชา</h3><p class="mt-0.5 text-[11px] text-gray-400">โปรดอ่านแนวทางก่อนสร้าง Prompt หรือวาง JSON จาก AI</p></div>
        <button type="button" data-guide-close aria-label="ปิดคู่มือ" class="min-h-[40px] shrink-0 rounded-xl border border-gray-200 px-3 text-sm font-bold text-gray-500 hover:bg-gray-50">ปิด</button>
      </div>
      <div class="min-h-0 overflow-y-auto bg-slate-50 p-2 sm:p-4"><img src="${F}" alt="คู่มือการเขียนคำอธิบายรายวิชาพื้นฐานและรายวิชาเพิ่มเติมตามแนวทาง สพฐ." class="mx-auto block h-auto max-h-[calc(96vh-120px)] w-auto max-w-full rounded-xl object-contain shadow-sm" /></div>
      <div class="flex justify-end border-t border-gray-100 bg-white px-4 py-3 sm:px-5"><button type="button" data-guide-close class="min-h-[42px] rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white hover:bg-emerald-700">เข้าใจแล้ว เริ่มกรอกข้อมูล</button></div>
    </div>`,document.body.appendChild(n);const C=()=>{n.remove(),document.removeEventListener("keydown",A)},A=N=>{N.key==="Escape"&&C()};n.addEventListener("click",N=>{N.target===n&&C()}),n.querySelectorAll("[data-guide-close]").forEach(N=>N.addEventListener("click",C)),document.addEventListener("keydown",A)},le=(n,C="")=>{const S=[n.length?[...n].sort((N,O)=>N-O).join(", "):"",C.trim()].filter(Boolean);return S.length?S.join(", "):Q().notSelected},re=()=>{const n=I.length;return Array.from({length:n},(C,A)=>A+1).filter(C=>{var A;return(A=I[C-1])==null?void 0:A.some(S=>String(S??"").trim())})},H=()=>{const n=Q(),C=re(),A=n.dir==="rtl";A&&ue();const S=$==="auto"?n.dir:$,N=S==="rtl"?"text-right":"text-left",O=A?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";c.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${S}" style="${O}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${n.title}</h2>
          <p class="text-xs text-gray-400 truncate">${r(a.subject_name)} · ${r(a.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${n.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${n.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${S}" style="${O}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(lt).map(Y=>{var P;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${pe===Y.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${Y.key}">${((P=d==null?void 0:d[Y.key])==null?void 0:P.label)||Y.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${S}" style="${O}">
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
                <span class="text-xs text-gray-400">${r(a.grade_level||"")} · ${r(ge||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${T.map((Y,P)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${ie} flex-1" value="${r(Y)}"
                      placeholder="${r(n.topicPlaceholder)}" dir="${S}" data-idx="${P}" />
                    ${T.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${P}">✕</button>`:""}
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

            ${J?`<p class="text-xs mt-3 ${J.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${r(J)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${n.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${S}"
                  class="${ie} ${N} min-h-[132px] leading-7"
                  placeholder="${r(n.descPlaceholder)}">${r(B)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.dirLabel}</span>
                  <select id="cd2-dir" class="${Se}">
                    <option value="auto" ${$==="auto"?"selected":""}>${n.dirAuto}</option>
                    <option value="rtl" ${$==="rtl"?"selected":""}>${n.dirRTL}</option>
                    <option value="ltr" ${$==="ltr"?"selected":""}>${n.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.signerLabel}</span>
                  <input id="cd2-signer" class="${ie} ${N}" value="${r(K)}" placeholder="${r(n.signerPlaceholder)}" dir="${S}" />
                  <p class="text-xs text-gray-400 mt-1">${n.signerHint}</p>
                </label>
              </div>
            </div>
          </div>

          ${b?`
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
                  ${k.map((Y,P)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${P+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${P}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${r(Y.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${P}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${r(Y.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${P}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                  ${M.map((Y,P)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${P}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${r(Y.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${P}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${r(Y.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${P}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${r(Y.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${P}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                    ${E.map((Y,P)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${P}" class="cd2-col ${ie} ${N} py-2 font-semibold" value="${r(Y)}" dir="${S}" />
                          ${E.length>1?`<button data-del-col="${P}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${I.map((Y,P)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${P+1}</td>
                      ${E.map((ae,ve)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${P}" data-cell="${ve}" rows="2" dir="${S}"
                            class="cd2-cell ${N} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${r(Y[ve]||"")}</textarea>
                        </td>`).join("")}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${P}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${n.delRow}</button>
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
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${r(le(u,v))}</p>
              </button>
              <button id="cd2-pick-mid" class="${N} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${r(le(f,h))}</p>
              </button>
              <button id="cd2-pick-final" class="${N} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${r(le(y,D))}</p>
              </button>
            </div>
            ${C.length?"":`<p class="text-xs text-amber-600 mt-3">${n.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,Ee()},Z=()=>{var n,C,A;return T=[...c.querySelectorAll(".cd2-topic-input")].map(S=>S.value.trim()).filter(Boolean),T.length||(T=[""]),B=((n=c.querySelector("#cd2-description"))==null?void 0:n.value)??"",K=((C=c.querySelector("#cd2-signer"))==null?void 0:C.value)??"",$=((A=c.querySelector("#cd2-dir"))==null?void 0:A.value)??$,c.querySelectorAll(".cd2-col").forEach(S=>{E[Number(S.dataset.col)]=S.value}),c.querySelectorAll(".cd2-cell").forEach(S=>{const N=Number(S.dataset.row),O=Number(S.dataset.cell);I[N]||(I[N]=Array.from({length:E.length},()=>"")),I[N][O]=S.value}),c.querySelectorAll(".cd2-voc-obj-cell").forEach(S=>{const N=Number(S.dataset.vocObjRow),O=S.dataset.vocObjField;k[N]||(k[N]={objective:"",competency:""}),k[N][O]=S.value}),c.querySelectorAll(".cd2-voc-sch-cell").forEach(S=>{const N=Number(S.dataset.vocSchRow),O=S.dataset.vocSchField;M[N]||(M[N]={week:"",content:"",note:""}),M[N][O]=S.value}),{desc:B,signer:K}},ce=n=>{const C=Array.isArray(n==null?void 0:n.columns)&&n.columns.length?n.columns.map(O=>String(O??"").trim()).filter(Boolean):Q().colsExtra,A=Array.isArray(n==null?void 0:n.rows)?n.rows.map(O=>{const Y=Array.isArray(O)?O:Object.values(O??{});return Array.from({length:C.length},(P,ae)=>String(Y[ae]??"").trim())}).filter(O=>O.some(Boolean)):[];E=C,I=A.length?A:Array.from({length:12},()=>Array.from({length:E.length},()=>"")),n!=null&&n.description&&(B=String(n.description)),f=g((n==null?void 0:n.midterm_items)??(n==null?void 0:n.midtermObjectiveItems)),u=g((n==null?void 0:n.between_items)??(n==null?void 0:n.betweenObjectiveItems)),y=g((n==null?void 0:n.final_items)??(n==null?void 0:n.finalObjectiveItems));const S=re(),N=Math.ceil(S.length/2);f.length||(f=S.slice(0,Math.min(3,N))),u.length||(u=S.slice(0,Math.min(4,S.length))),y.length||(y=S.slice(-Math.min(3,S.length)))},R=n=>String(n??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,""),se={schema_version:"pp5.course_description.v1",type:"course_description",course:{subject_code:a.subject_code??"",subject_name:a.subject_name??"",grade_level:a.grade_level??"",learning_area:ge},description:"คำอธิบายรายวิชาโดยสรุป...",topic_list:["บทที่ 1 ...","บทที่ 2 ..."],table_columns:["รหัสมาตรฐาน/ตัวชี้วัด"],table_rows:[["ค 1.1 ม.2/1 : เข้าใจ..."],["ค 1.2 ม.2/2 : วิเคราะห์..."]],between_objective_items:[1],between_objective_extra:"",midterm_objective_items:[1,2],midterm_objective_extra:"",final_objective_items:[2],final_objective_extra:"",signer_name:"",text_direction:"auto",voc_objectives:[{objective:"",competency:""}],voc_schedule:[{week:"1",content:"",note:""}]},G=()=>{Z();const n=Q(),C=_&&E.length===1,A=!b&&!_&&E.length===1,S=C?'รูปแบบรายวิชาพื้นฐาน (1 คอลัมน์): ยึดมาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก ในคำอธิบายให้เขียนเป็นความเรียงสรุปว่าเรียนอะไร ใช้กระบวนการใด และคาดหวังให้ผู้เรียนเกิดความรู้/ทักษะอะไร ตอนท้ายอาจระบุรหัสตัวชี้วัดที่เกี่ยวข้องได้ แต่ห้ามคัดลอกข้อความตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย; ในแต่ละแถวของตารางให้รวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็มไว้ในคอลัมน์เดียว เช่น "ค 1.1 ม.2/1 : ..."':A?"รูปแบบรายวิชาเพิ่มเติม (1 คอลัมน์): ยึดผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก; ในตารางให้ใส่ผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",N={subject_code:a.subject_code??"",subject_name:a.subject_name??"",grade_level:a.grade_level??"",subject_group:a.subject_group??"",learning_area:ge,credit:a.credit??"",target_language:n.aiLang,is_voc:b,topics:T.filter(Boolean),description:B,table_columns:E,table_rows:I.filter(O=>O.some(Y=>String(Y??"").trim())),voc_objectives:b?k.filter(O=>Object.values(O).some(Y=>String(Y??"").trim())):[],voc_schedule:b?M.filter(O=>Object.values(O).some(Y=>String(Y??"").trim())):[]};return`คุณเป็นผู้ช่วยจัดทำเอกสารคำอธิบายรายวิชา ปพ.5 สำหรับครูผู้สอน
เขียนค่าข้อมูลทุกช่องที่เป็นเนื้อหาเป็น${n.aiLang} ตามภาษาที่ครูเลือกอยู่ในขณะนี้ ส่วนชื่อ field ใน JSON ต้องคงเป็นภาษาอังกฤษตาม schema

งานที่ต้องทำ:
1. จัดทำคำอธิบายรายวิชา/ผลการเรียนรู้ภาพรวมให้เป็นภาษาทางการ กระชับ และเหมาะกับระดับชั้น
2. จัดทำรายการบท/หัวข้อการเรียนรู้ใน topic_list
3. จัดทำตารางมาตรฐานการเรียนรู้ ตัวชี้วัด หรือผลการเรียนรู้ ให้สอดคล้องกับข้อมูลหลักสูตรที่แนบหรือผู้ใช้ให้มา
4. เลือกหมายเลขแถวที่เหมาะสมสำหรับการประเมินระหว่างภาค กลางภาค และปลายภาค
5. ${b?"สำหรับ ACDMVOC ให้จัดทำ voc_objectives และ voc_schedule ด้วย โดยไม่ต้องสร้างรหัสมาตรฐานขึ้นเอง":"หากไม่มีข้อมูลมาตรฐาน/ตัวชี้วัดที่เชื่อถือได้ ให้ระบุข้อความที่ต้องตรวจสอบเพิ่มเติมแทนการแต่งรหัสขึ้นเอง"}

ข้อมูลรายวิชาจากระบบ PP5:
${JSON.stringify(N,null,2)}

ข้อกำหนดสำคัญ:
- ใช้ข้อมูลจากหลักสูตร หนังสือเรียน หรือเอกสารที่ผู้ใช้แนบเป็นหลัก และห้ามเดาข้อมูลที่ไม่มีแหล่งอ้างอิง
- แนวทางการเขียนตามคู่มือ: ${S}
- คำอธิบายรายวิชาต้องสรุปสาระสำคัญ กระบวนการเรียนรู้ และผลที่คาดหวังให้ผู้เรียนเกิดขึ้น ไม่ใช่รายการคัดลอกมาตรฐาน/ตัวชี้วัดหรือผลการเรียนรู้ทั้งหมด
- table_rows ต้องเป็น array ของ array และจำนวนช่องต้องตรงกับ table_columns
- หมายเลขใน between_objective_items, midterm_objective_items และ final_objective_items ต้องอ้างถึงแถวที่มีอยู่จริง
- ตอบกลับเป็น JSON ตาม schema นี้เท่านั้น โดยครูจะนำ JSON กลับมาวางในระบบเพื่อให้ตรวจสอบก่อนบันทึก
- ต้องตอบเป็นโค้ด JSON เพียงกล่องเดียวชนิด json ห้ามมีคำอธิบายก่อนหรือหลังกล่อง

ตัวอย่าง schema:
${JSON.stringify(se,null,2)}`},V=n=>{var N;let C;try{C=JSON.parse(R(n))}catch{throw new Error("JSON ไม่ถูกต้อง กรุณาตรวจเครื่องหมายปีกกาและเครื่องหมายคำพูด")}if((C==null?void 0:C.type)!=="course_description")throw new Error("ต้องเป็น JSON ประเภท course_description");if(!String(C.description??"").trim())throw new Error("ยังไม่มี description คำอธิบายรายวิชา");const A=Array.isArray(C.table_columns)&&C.table_columns.length&&Array.isArray(C.table_rows);if(!b&&!A)throw new Error("ต้องมี table_columns และ table_rows สำหรับรายวิชานี้");if(A&&!C.table_rows.some(O=>Array.isArray(O)&&O.some(Y=>String(Y??"").trim())))throw new Error("ต้องมี table_rows อย่างน้อย 1 แถวที่มีข้อมูล");if(A&&C.table_rows.some(O=>!Array.isArray(O)||O.length!==C.table_columns.length))throw new Error("จำนวนช่องใน table_rows ต้องตรงกับจำนวน table_columns");if(C.text_direction&&!["auto","rtl","ltr"].includes(C.text_direction))throw new Error("text_direction ต้องเป็น auto, rtl หรือ ltr");const S=((N=C.table_rows)==null?void 0:N.length)??0;for(const O of["between_objective_items","midterm_objective_items","final_objective_items"])if(C[O]!=null&&(!S||!Array.isArray(C[O])||C[O].some(Y=>!Number.isInteger(Number(Y))||Number(Y)<1||Number(Y)>S)))throw new Error(`${O} ต้องเป็นหมายเลขแถวที่มีอยู่จริง`);if(b){if(!Array.isArray(C.voc_objectives)||!C.voc_objectives.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_objectives");if(!Array.isArray(C.voc_schedule)||!C.voc_schedule.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_schedule")}return C},te=n=>{Array.isArray(n.table_columns)&&n.table_columns.length&&Array.isArray(n.table_rows)?ce({description:n.description,columns:n.table_columns,rows:n.table_rows,midterm_items:n.midterm_objective_items,between_items:n.between_objective_items,final_items:n.final_objective_items}):B=String(n.description??""),Array.isArray(n.topic_list)&&(T=n.topic_list.map(C=>String(C??"").trim()).filter(Boolean),T.length||(T=[""])),n.between_objective_extra!=null&&(v=String(n.between_objective_extra)),n.midterm_objective_extra!=null&&(h=String(n.midterm_objective_extra)),n.final_objective_extra!=null&&(D=String(n.final_objective_extra)),n.signer_name!=null&&(K=String(n.signer_name)),n.text_direction&&["auto","rtl","ltr"].includes(n.text_direction)&&($=n.text_direction),b&&(k=L(n.voc_objectives,["objective","competency"],10),M=L(n.voc_schedule,["week","content","note"],20))},oe=()=>{var Y;(Y=document.getElementById("cd2-external-ai-modal"))==null||Y.remove();const n=document.createElement("div");n.id="cd2-external-ai-modal",n.className="fixed inset-0 z-[190] flex items-center justify-center bg-black/60 p-3",n.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[94vh] overflow-y-auto p-5 sm:p-6">
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
    </div>`,document.body.appendChild(n);const C=()=>G(),A=(P,ae)=>{const ve=n.querySelector("#cd2-external-result");ve.className=`mt-2 rounded-xl px-3 py-2 text-xs ${ae?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-red-50 text-red-700 border border-red-100"}`,ve.textContent=P},S=n.querySelector("#cd2-external-prompt"),N=qs({copyButton:n.querySelector("#cd2-external-copy")});c.addEventListener("input",P=>{P.target instanceof Element&&P.target.matches("input, textarea, select")&&N.invalidate()}),c.addEventListener("change",P=>{P.target instanceof Element&&P.target.matches("input, textarea, select")&&N.invalidate()}),c.addEventListener("click",P=>{P.target.closest("button")&&N.invalidate()});const O=()=>n.remove();n.addEventListener("click",P=>{P.target===n&&O()}),n.querySelector("[data-external-close]").addEventListener("click",O),n.querySelector("#cd2-external-generate").addEventListener("click",()=>{S.value=C(),N.markGenerated(),W("สร้าง Prompt แล้ว","success")}),n.querySelector("#cd2-external-copy").addEventListener("click",async()=>{if(!N.isReady()){W("กรุณากด “สร้าง Prompt ใหม่” หลังแก้ข้อมูลก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(S.value),W("คัดลอก Prompt แล้ว","success")}catch{S.select(),document.execCommand("copy"),W("คัดลอก Prompt แล้ว","success")}}),n.querySelector("#cd2-external-validate").addEventListener("click",()=>{var P;try{const ae=V(n.querySelector("#cd2-external-json").value);A(`JSON ถูกต้อง${(P=ae.table_rows)!=null&&P.length?`: ${ae.table_rows.length} แถว`:""}${b?` · ${ae.voc_schedule.length} สัปดาห์`:""}`,!0)}catch(ae){A(ae.message,!1)}}),n.querySelector("#cd2-external-import").addEventListener("click",()=>{try{const P=V(n.querySelector("#cd2-external-json").value);te(P),O(),J="✅ นำเข้าข้อมูลจาก AI ภายนอกแล้ว — กรุณาตรวจสอบก่อนบันทึก",H(),W("นำเข้าคำอธิบายรายวิชาแล้ว กรุณาตรวจสอบก่อนบันทึก","success")}catch(P){A(P.message,!1)}})},fe=n=>n.some(A=>String(A.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:n.map((A,S)=>[`${A.item_no??S+1}.${A.learning_outcome_text??A.indicator_text??A.standard_text??""}`]),description:B,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((A,S)=>S+1),final_items:n.slice(Math.ceil(n.length/2)).map((A,S)=>S+1+Math.ceil(n.length/2))}:{source:"curriculum",columns:["รหัสมาตรฐาน/ตัวชี้วัด"],rows:n.map((A,S)=>{const N=[A.standard_code,A.indicator_code].filter(Boolean).join(" "),O=A.indicator_text||A.standard_text||A.learning_outcome_text||"";return[((N||String(A.item_no??S+1)+".")+" : "+O).trim()]}),description:B,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((A,S)=>S+1),final_items:n.slice(Math.ceil(n.length/2)).map((A,S)=>S+1+Math.ceil(n.length/2))},he=async()=>{var s,t,i,m,p;const n=Q(),C=_&&E.length===1,A=!b&&!_&&E.length===1,S=C?n.colsBasic:A?n.colsExtra:E,N=C||A?'single column named "'+S[0]+'"':"custom columns named "+JSON.stringify(S),O=C?"รายวิชาพื้นฐาน: ใช้มาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก เขียนคำอธิบายเป็นความเรียงสรุปสาระ กระบวนการ และผลที่คาดหวัง ไม่คัดลอกตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย และให้แต่ละแถวในคอลัมน์เดียวรวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็ม เช่น ค 1.1 ม.2/1 : ...":A?"รายวิชาเพิ่มเติม: ใช้ผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก และให้ตารางสะท้อนผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",Y=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${n.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${a.subject_name||""}
- รหัสวิชา: ${a.subject_code||""}
- ชั้น: ${a.grade_level||""}
- กลุ่มสาระ: ${ge||a.dept||""}
- หน่วยกิต: ${a.credit||""}
- เรื่อง/บทที่สอน: ${T.filter(Boolean).join(", ")||"ไม่ระบุ"}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${N}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม
5. แนวทางการเขียน: ${O}

Return exactly one JSON object wrapped in a single fenced Markdown code block using \`\`\`json and \`\`\`. No text before or after the code block. This makes the AI response show a clear copy-code button:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`,{data:P,error:ae}=await bt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Y}});if(ae)throw new Error(ae.message??"Edge Function error");if(P!=null&&P.error)throw new Error(`Gemini: ${P.error.message??P.error.status}`);const ve=((p=(m=(i=(t=(s=P.candidates)==null?void 0:s[0])==null?void 0:t.content)==null?void 0:i.parts)==null?void 0:m[0])==null?void 0:p.text)??"",ye=ve.match(/```json\s*([\s\S]*?)```/)||ve.match(/(\{[\s\S]*\})/),l=ye?ye[1]??ye[0]:null;if(!l)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(l)},_e=n=>{var ye;Z();const C=n==="mid"?f:n==="between"?u:y,A=n==="mid"?h:n==="between"?v:D,S=re();if(!S.length){W("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(ye=document.getElementById("cd2-picker"))==null||ye.remove();const N=Q(),O={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},Y={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},P=l=>{const s=(I[l-1]??[]).find(i=>String(i??"").trim()),t=String(s??"").trim();return t.length>30?t.slice(0,30)+"…":t},ae=document.createElement("div");ae.id="cd2-picker",ae.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",ae.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${N.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${N.pickerTitles[n]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${S.map(l=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${O[n]} w-4 h-4 flex-shrink-0" value="${l}" ${C.includes(l)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${l}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${r(P(l))}</span>
            </label>`).join("")}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${r(A)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${N.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${Y[n]} text-white text-sm font-semibold">${N.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(ae);const ve=()=>ae.remove();ae.querySelector("#cd2-picker-close").addEventListener("click",ve),ae.querySelector("#cd2-picker-cancel").addEventListener("click",ve),ae.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const l=[...ae.querySelectorAll(".cd2-choice:checked")].map(t=>Number(t.value)),s=ae.querySelector("#cd2-picker-extra").value.trim();n==="mid"?(f=l,h=s):n==="between"?(u=l,v=s):(y=l,D=s),ve(),H()})},Ee=()=>{var A,S,N,O,Y,P,ae,ve,ye;const n=Q();c.querySelectorAll(".cd2-lang-btn").forEach(l=>{l.addEventListener("click",()=>{var s;Z(),pe=l.dataset.lang||"th",$=((s=lt[pe])==null?void 0:s.dir)||"ltr",H()})}),c.querySelector("#cd2-close").addEventListener("click",()=>c.remove()),c.querySelector("#cd2-dir").addEventListener("change",l=>{Z(),$=l.target.value,H()}),c.querySelector("#cd2-external-ai").addEventListener("click",oe),c.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(Z(),(I.some(t=>t.some(i=>String(i??"").trim()))||B.trim())&&!confirm(n.confirmOverwrite))return;const s=c.querySelector("#cd2-search-curriculum");s.disabled=!0,s.innerHTML=`⏳ ${n.btnCurriculumLoading}`;try{const t=await _s({subjectName:a.subject_name,subjectCode:a.subject_code,gradeLevel:a.grade_level,dept:ge,topic:T.filter(Boolean).join(" ")});t.length?(ce(fe(t)),J=n.toastSearchOk(t.length)):J=n.toastSearchEmpty,H()}catch(t){W("ค้นหลักสูตรไม่สำเร็จ: "+ke(t),"error")}finally{s.disabled=!1,s.innerHTML=`🔍 ${n.btnCurriculum}`}}),c.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(Z(),(I.some(t=>t.some(i=>String(i??"").trim()))||B.trim())&&!confirm(n.confirmAIOverwrite))return;const s=c.querySelector("#cd2-auto-fill");s.disabled=!0,s.innerHTML=`⏳ ${n.btnAILoading}`;try{const t=await he();ce(t),J=n.toastAIDone,H()}catch(t){W("AI ร่างไม่สำเร็จ: "+ke(t),"error")}finally{s.disabled=!1,s.innerHTML=`✨ ${n.btnAI}`}}),c.querySelector("#cd2-img-input").addEventListener("change",async l=>{var m,p,j,z,q,X;const s=(m=l.target.files)==null?void 0:m[0];if(!s)return;if((I.some(ee=>ee.some(xe=>String(xe??"").trim()))||B.trim())&&!confirm(n.confirmImgOverwrite)){l.target.value="";return}const i=c.querySelector("#cd2-img-btn");i.textContent=`⏳ ${n.btnImgLoading}`;try{const ee=await new Promise((cs,ps)=>{const at=new FileReader;at.onload=()=>cs(at.result.split(",")[1]),at.onerror=ps,at.readAsDataURL(s)}),xe=_&&E.length===1,je=!b&&!_&&E.length===1,Be=xe?n.colsBasic:je?n.colsExtra:E,Je=xe||je?'single column named "'+Be[0]+'"':"custom columns named "+JSON.stringify(Be),Me=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${n.aiLang}
ข้อมูลรายวิชา: "${a.subject_name??""}" รหัส ${a.subject_code??""} ชั้น ${a.grade_level??""} กลุ่มสาระ ${ge}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${Je})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบกลับเป็น JSON โดยครอบผลลัพธ์ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีข้อความก่อนหรือหลังกล่อง:
{
  "description": "...",
  "columns": ${JSON.stringify(Be)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:Ae,error:we}=await bt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Me,imageBase64:ee,imageMimeType:s.type||"image/jpeg"}});if(we)throw new Error(we.message??"Edge Function error");if(Ae!=null&&Ae.error)throw new Error(`Gemini: ${Ae.error.message??Ae.error.status}`);const Le=((X=(q=(z=(j=(p=Ae.candidates)==null?void 0:p[0])==null?void 0:j.content)==null?void 0:z.parts)==null?void 0:q[0])==null?void 0:X.text)??"",Re=Le.match(/```json\s*([\s\S]*?)```/)||Le.match(/(\{[\s\S]*\})/),ot=Re?Re[1]??Re[0]:null;if(!ot)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");ce(JSON.parse(ot)),J=n.toastImgDone,H()}catch(ee){W("อ่านรูปไม่สำเร็จ: "+ke(ee),"error")}finally{i.textContent=`📷 ${n.btnImg}`,l.target.value=""}});const C=l=>{if(Z(),I.some(i=>i.some(m=>String(m??"").trim()))&&!confirm(n.confirmColChange))return;const t=I;E=l,I=t.map(i=>l.length===1?[i.filter(Boolean).join(" ").trim()]:Array.from({length:l.length},(m,p)=>i[p]??"")),I.length||(I=Array.from({length:12},()=>Array.from({length:E.length},()=>""))),H()};(A=c.querySelector("#cd2-template-basic"))==null||A.addEventListener("click",()=>{C(n.colsBasic)}),(S=c.querySelector("#cd2-template-extra"))==null||S.addEventListener("click",()=>{C(n.colsExtra)}),(N=c.querySelector("#cd2-add-col"))==null||N.addEventListener("click",()=>{Z(),E.push(n.colNew(E.length+1)),I=I.map(l=>[...l,""]),H()}),(O=c.querySelector("#cd2-add-row"))==null||O.addEventListener("click",()=>{Z(),I.push(Array.from({length:E.length},()=>"")),H()}),c.querySelectorAll(".cd2-del-col").forEach(l=>l.addEventListener("click",()=>{Z();const s=Number(l.dataset.delCol);E.splice(s,1),I=I.map(t=>t.filter((i,m)=>m!==s)),H()})),c.querySelectorAll(".cd2-del-row").forEach(l=>l.addEventListener("click",()=>{Z();const s=Number(l.dataset.delRow);I.splice(s,1);const t=i=>i.filter(m=>m!==s+1).map(m=>m>s+1?m-1:m);f=t(f),u=t(u),y=t(y),H()})),(Y=c.querySelector("#cd2-pick-mid"))==null||Y.addEventListener("click",()=>_e("mid")),(P=c.querySelector("#cd2-pick-between"))==null||P.addEventListener("click",()=>_e("between")),(ae=c.querySelector("#cd2-pick-final"))==null||ae.addEventListener("click",()=>_e("final")),(ve=c.querySelector("#cd2-voc-obj-add-row"))==null||ve.addEventListener("click",()=>{Z(),k.push({objective:"",competency:""}),H()}),c.querySelectorAll(".cd2-voc-obj-del-row").forEach(l=>l.addEventListener("click",()=>{Z(),k.splice(Number(l.dataset.vocObjDelRow),1),H()})),(ye=c.querySelector("#cd2-voc-sch-add-row"))==null||ye.addEventListener("click",()=>{Z(),M.push({week:String(M.length+1),content:"",note:""}),H()}),c.querySelectorAll(".cd2-voc-sch-del-row").forEach(l=>l.addEventListener("click",()=>{Z(),M.splice(Number(l.dataset.vocSchDelRow),1),H()})),c.querySelector("#cd2-add-topic").addEventListener("click",()=>{Z(),T.push(""),H()}),c.querySelectorAll(".cd2-topic-del").forEach(l=>{l.addEventListener("click",()=>{Z(),T.splice(Number(l.dataset.idx),1),T.length||(T=[""]),H()})}),c.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:l,signer:s}=Z(),t=c.querySelector("#cd2-save");t.disabled=!0,t.textContent=n.saving;try{await $s(a.id,{description:l,table_columns:E.map((i,m)=>i.trim()||n.colNew(m+1)),table_rows:I.map(i=>i.slice(0,E.length)),topic_list:T.filter(Boolean),midterm_objective_items:f,between_objective_items:u,final_objective_items:y,midterm_objective_extra:h,between_objective_extra:v,final_objective_extra:D,voc_objectives:k,voc_schedule:M,signer_name:s.trim()||null,text_direction:$,updated_by:(e==null?void 0:e.id)??null}),W(n.toastSaved,"success"),c.remove()}catch(i){W("บันทึกไม่สำเร็จ: "+ke(i),"error"),t.disabled=!1,t.textContent=n.save}})};H(),U()}async function Uo(e){var o,d,x,w,g;if(!(e!=null&&e.id)){W("ไม่พบข้อมูลครูผู้สอน","error");return}(o=document.getElementById("schedule-course-review-modal"))==null||o.remove();const a=document.createElement("div");a.id="schedule-course-review-modal",a.className="fixed inset-0 z-[240] bg-slate-950/60 backdrop-blur-sm p-3 sm:p-5",a.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="schedule-course-review-title"
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
  </section>`,document.body.appendChild(a),a.querySelector("[data-review-close]").addEventListener("click",()=>a.remove());try{const b=await De().catch(()=>({})),_=Number(b.academicYear??b.academic_year),L=Number(b.semester),[E,I,f,u]=await Promise.all([_t(e.id,_,L),Yt(),$t(e.id).catch(()=>[]),Ue().catch(()=>[])]),y=e.category==="ศาสนา"?new Set(["AGM","AGMVOC"]):e.category==="สามัญ"?new Set(["ACDM","ACDMVOC"]):null,v=I.filter(c=>!y||y.has(c.subject_group)),h=new Map(v.map(c=>[String(c.id),c])),D=["","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์","อาทิตย์"],$=c=>{var ce,R,se;const F=(ce=c.master_subjects)==null?void 0:ce.catalog_id;if(F&&h.has(String(F)))return h.get(String(F));const U=$e(c.subject_code||((R=c.master_subjects)==null?void 0:R.subject_code));if(U){const G=v.filter(oe=>$e(oe.subject_code)===U);if(G.length===1)return G[0];const V=ut(c.class_name),te=G.filter(oe=>V&&$e(oe.grade_level).includes($e(V)));if(te.length===1)return te[0]}const le=$e(c.subject_name||((se=c.master_subjects)==null?void 0:se.subject_name));if(!le)return null;const re=v.filter(G=>$e(G.subject_name)===le);if(re.length===1)return re[0];const H=ut(c.class_name),Z=re.filter(G=>H&&$e(G.grade_level).includes($e(H)));return Z.length===1?Z[0]:null},B=(c,F)=>{var re,H;const U=$e((c==null?void 0:c.subject_code)||F.subject_code||((re=F.master_subjects)==null?void 0:re.subject_code)),le=$e((c==null?void 0:c.subject_name)||F.subject_name||((H=F.master_subjects)==null?void 0:H.subject_name));return f.find(Z=>c&&Number(Z.catalog_id)===Number(c.id)||U&&$e(Z.subject_code)===U&&(!(c!=null&&c.subject_group)||Z.subject_group===c.subject_group)||le&&$e(Z.subject_name)===le&&(!(c!=null&&c.subject_group)||Z.subject_group===c.subject_group))},K=new Map;for(const c of E){const F=$(c),U=(F==null?void 0:F.subject_name)||c.subject_name||((d=c.master_subjects)==null?void 0:d.subject_name)||"",le=(F==null?void 0:F.subject_code)||c.subject_code||((x=c.master_subjects)==null?void 0:x.subject_code)||"";if(!U&&!le)continue;const re=F?`catalog:${F.id}`:`review:${$e(le)}:${$e(U)}:${$e((w=c.master_subjects)==null?void 0:w.subject_group)}`;let H=K.get(re);if(!H){const ce=F?ct(F):"",R=u.find(se=>se.dept_code===ce);H={id:K.size+1,item:F,name:U,code:le,subjectGroup:(F==null?void 0:F.subject_group)||((g=c.master_subjects)==null?void 0:g.subject_group)||"",deptCode:ce,deptLabel:(F==null?void 0:F.dept_label)||(R==null?void 0:R.dept_name)||"ต้องตรวจสอบกลุ่มสาระ",rows:[],rooms:new Set,grades:new Set,existing:F?B(F,c):null},K.set(re,H)}H.rows.push(c),c.class_name&&H.rooms.add(c.class_name);const Z=(F==null?void 0:F.grade_level)||ut(c.class_name);Z&&H.grades.add(Z)}const T=[...K.values()].map(c=>{var le,re;const F=((le=c.item)==null?void 0:le.grade_level)||[...c.grades].join(", "),U=!!(c.item&&c.subjectGroup&&c.deptCode&&F&&!c.existing);return c.grade=F,c.status=c.existing?"existing":U?"ready":"review",c.payload=c.item?{catalog_id:c.item.id,subject_group:c.item.subject_group,dept:c.deptCode,subject_name:c.item.subject_name,subject_code:c.item.subject_code||null,credit:c.item.credit??null,grade_level:F,teacher_id:e.id,learning_area:((re=u.find(H=>H.dept_code===c.deptCode))==null?void 0:re.head_name)||null}:null,c}),k=T.filter(c=>c.status==="ready").length,M=T.filter(c=>c.status==="existing").length,J=T.filter(c=>c.status==="review").length,pe=new Map;T.forEach(c=>{const F=c.deptCode||"review";pe.has(F)||pe.set(F,{label:c.deptLabel,items:[]}),pe.get(F).items.push(c)});const Q=c=>c==="ready"?'<span class="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">พร้อมสร้าง</span>':c==="existing"?'<span class="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-700">มีคอร์สแล้ว · ข้าม</span>':'<span class="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">ต้องตรวจสอบ</span>',ue=c=>{const F=c.rows.map(le=>`${D[Number(le.day_of_week)]||`วัน${le.day_of_week??"?"}`} คาบ ${le.period_no??"—"}`).join(" · "),U=[...c.rooms].join(", ")||"ไม่ระบุห้อง";return`<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" data-review-item="${c.id}">
        <div class="flex items-start gap-3">
          ${c.status==="ready"?`<input type="checkbox" data-review-select="${c.id}" checked class="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />`:'<span class="mt-1 block h-5 w-5"></span>'}
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">${Q(c.status)}
              <span class="font-mono text-xs font-bold text-indigo-600">${r(c.code||"ไม่มีรหัส")}</span>
            </div>
            <h4 class="mt-2 font-extrabold text-gray-800">${r(c.name)}</h4>
            <p class="mt-1 text-xs text-gray-500">${r(c.grade||"ไม่ระบุระดับชั้น")} · ${r(U)}</p>
            <p class="mt-1 text-[11px] text-gray-400">${r(F||"ไม่มีช่วงเวลาที่ระบุ")}</p>
            ${c.status==="review"?'<p class="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-800">ระบบยังจับคู่กับแคตตาล็อกไม่ได้แน่นอน จึงยังไม่สร้างอัตโนมัติ กรุณาเปิดคอร์สใหม่และเลือกรายวิชาด้วยตนเอง</p>':""}
          </div>
        </div>
      </article>`};a.querySelector("section").innerHTML=`
      <div class="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4 sm:px-7">
        <div><h2 id="schedule-course-review-title" class="text-lg sm:text-xl font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2>
          <p class="mt-1 text-xs text-gray-500">ภาคเรียน ${r(`${L}/${_}`)} · สร้างคอร์สเท่านั้น ยังไม่สร้างห้องเรียน</p></div>
        <button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 bg-white text-xl text-gray-500 hover:bg-gray-100">×</button>
      </div>
      <div class="flex-1 overflow-y-auto p-5 sm:p-7">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div class="rounded-2xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-2xl font-extrabold text-indigo-700">${T.length}</p><p class="text-[11px] text-indigo-700/70">รายการจากตารางสอน</p></div>
          <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-3"><p class="text-2xl font-extrabold text-emerald-700">${k}</p><p class="text-[11px] text-emerald-700/70">พร้อมสร้าง</p></div>
          <div class="rounded-2xl border border-blue-100 bg-blue-50 p-3"><p class="text-2xl font-extrabold text-blue-700">${M}</p><p class="text-[11px] text-blue-700/70">มีคอร์สแล้ว</p></div>
          <div class="rounded-2xl border border-amber-100 bg-amber-50 p-3"><p class="text-2xl font-extrabold text-amber-700">${J}</p><p class="text-[11px] text-amber-700/70">ต้องตรวจสอบ</p></div>
        </div>
        <div class="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-xs leading-relaxed text-indigo-800">ระบบจะไม่สร้างทับคอร์สเดิม และจะสร้างเฉพาะรายการที่จับคู่กับแคตตาล็อกได้ครบถ้วนเท่านั้น</div>
        <div class="mt-6 space-y-7">
          ${[...pe.values()].map(c=>`<section><div class="mb-3 flex items-center gap-3"><div class="h-9 w-9 rounded-xl bg-emerald-100 text-center leading-9">🏷️</div><h3 class="font-extrabold text-gray-800">${r(c.label)}</h3><div class="h-px flex-1 bg-gray-200"></div></div><div class="grid grid-cols-1 gap-3 xl:grid-cols-2">${c.items.map(ue).join("")}</div></section>`).join("")||'<div class="rounded-2xl bg-white p-10 text-center text-sm text-gray-400">ไม่พบรายการตารางสอนที่นำมาสร้างคอร์สได้</div>'}
        </div>
      </div>
      <div class="flex flex-col-reverse gap-2 border-t border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p data-review-selected class="text-xs text-gray-500">เลือกสร้างแล้ว 0 คอร์ส</p>
        <div class="flex gap-2"><button type="button" data-review-cancel class="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 sm:flex-none">ยกเลิก</button>
          <button type="button" data-review-create ${k?"":"disabled"} class="flex-1 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:flex-none">ยืนยันสร้างคอร์สที่เลือก</button></div>
      </div>`;const be=()=>a.remove();a.querySelector("[data-review-close]").addEventListener("click",be),a.querySelector("[data-review-cancel]").addEventListener("click",be);const me=a.querySelector("[data-review-selected]"),de=a.querySelector("[data-review-create]"),ge=()=>{const c=a.querySelectorAll("[data-review-select]:checked").length;me.textContent=`เลือกสร้างแล้ว ${c} คอร์ส`,de.disabled=c===0};a.querySelectorAll("[data-review-select]").forEach(c=>c.addEventListener("change",ge)),ge(),de.addEventListener("click",async()=>{var re;const c=[...a.querySelectorAll("[data-review-select]:checked")].map(H=>Number(H.dataset.reviewSelect)),F=T.filter(H=>c.includes(H.id)&&H.status==="ready");if(!F.length)return;de.disabled=!0,de.textContent="กำลังสร้างคอร์ส...";let U=0,le=0;for(const H of F)try{await us(H.payload),U+=1}catch{le+=1}be(),le?W(`สร้างคอร์สสำเร็จ ${U} รายการ · ไม่สำเร็จ ${le} รายการ`,"warning"):W(`สร้างคอร์สจากตารางสอนสำเร็จ ${U} รายการ`,"success"),(re=window._navTo)==null||re.call(window,"my-courses")})}catch(b){a.querySelector("section").innerHTML=`<div class="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4"><h2 class="font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2><button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 text-xl text-gray-500">×</button></div><div class="flex flex-1 items-center justify-center p-8 text-center text-sm text-red-500">โหลดข้อมูลตารางสอนไม่สำเร็จ: ${r(ke(b))}</div>`,a.querySelector("[data-review-close]").addEventListener("click",()=>a.remove())}}async function Jo(e,a,o=null,d={}){const x=!!d.cloneFrom;He("my-courses"),ze(x?"ทำสำเนาคอร์สวิชา":o?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[w,g,b,_,L]=await Promise.all([Ue().catch(()=>[]),Vt().catch(()=>[]),o&&!x?ms(o.id).catch(l=>(W("โหลดครูร่วมสอนไม่สำเร็จ: "+ke(l),"error"),null)):Promise.resolve([]),Yt().catch(()=>[]),De().catch(()=>({}))]);if(b===null){Te(`<div class="p-6 text-center text-gray-600">โหลดข้อมูลคอร์สไม่ครบ กรุณาเปิดคอร์สใหม่อีกครั้ง
      <button class="block mx-auto mt-4 text-indigo-600" onclick="window._goBack()">กลับ</button></div>`);return}let E=b??[];const I=[...new Map(w.map(l=>[l.id,l])).values()],f=(e==null?void 0:e.category)??"",u=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],y=f?u.filter(l=>l.cat===f):u,v=Number(L.semester),h=_.filter(l=>![1,2].includes(v)||l.semester==null||Number(l.semester)===v).filter(l=>y.some(s=>s.value===l.subject_group)),D=l=>l==="ACDM"?"สามัญ":l==="ACDMVOC"?"สามัญปวช":l==="AGM"||l==="AGMVOC"?"ศาสนา":null,$=l=>l==="ACDMVOC",B=l=>$(l)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",K=l=>$(l)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",T=l=>$(l)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",k=l=>$(l)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",M=(o==null?void 0:o.subject_group)??"",J=l=>{const s=D(l);if(!s)return I;const t=I.filter(i=>i.category===s);return t.length?t:I},pe=(l,s="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+l.map(t=>`<option value="${t.dept_code}" ${t.dept_code===s?"selected":""}>${t.dept_name}</option>`).join(""),Q=[...new Set(w.map(l=>l.head_name).filter(Boolean))],ue=new Map(h.map(l=>[String(l.id),l])),be=ue.get(String((o==null?void 0:o.catalog_id)??"")),me=(o==null?void 0:o.dept)||ct(be)||"",de=(l="",s="")=>h.filter(t=>(!l||t.subject_group===l)&&Vs(t,s,I)),ge=(l="",s="",t="")=>s?['<option value="">— เลือกรายวิชาภายใต้กลุ่มสาระ —</option>',...de(l,s).map(m=>{const p=m.subject_code?m.subject_code+" · ":"",j=m.grade_level?" · "+m.grade_level:"",z=m.subject_group?" · "+m.subject_group:"",q=p+m.subject_name+j+z,X=String(t??"")===String(m.id)?" selected":"";return'<option value="'+m.id+'"'+X+">"+r(q)+"</option>"})].join(""):'<option value="">— เลือกกลุ่มสาระก่อน —</option>';Te(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${x?"ทำสำเนาคอร์สวิชา":o?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์สวิชา"}</h2>
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
          <select id="cf-subg" class="${Se}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${y.map(l=>`<option value="${l.value}" ${(o==null?void 0:o.subject_group)===l.value?"selected":""}>${l.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${B(M)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${Se}">
            ${pe(o!=null&&o.subject_group?J(o.subject_group):f?I.filter(l=>l.category===f):I,me)}
          </select>
        </div>
        <!-- รายวิชาภายใต้กลุ่มสาระ -->
        <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
          <label class="block text-sm font-semibold text-blue-900 mb-1">รายวิชาภายใต้กลุ่มสาระ</label>
          <select id="cf-catalog" ${Se} ${me?"":"disabled"}>
            ${ge(M,me,o==null?void 0:o.catalog_id)}
          </select>
          <input type="hidden" id="cf-catalog-id" value="${(o==null?void 0:o.catalog_id)??""}" />
          <p class="text-xs text-blue-700/70 mt-1">เลือกรายวิชาจากกลุ่มสาระที่เลือก ระบบจะเติมข้อมูลให้ แต่ครูยังแก้ไขรายละเอียดทุกช่องได้</p>
        </div>
        <!-- ชื่อวิชา + รหัสวิชา -->
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 sm:col-span-1">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชื่อวิชา <span class="text-red-400">*</span>
            </label>
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${ie}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${ie}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${Se}">
              ${Ns.map(l=>`<option value="${l}">${l}</option>`).join("")}
            </select>
          </div>
          <div id="cf-grade-single-wrapper">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${Se}">
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
                class="${ie}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${ie}" autocomplete="off" />
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
            maxlength="12" class="${ie}" />
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
                class="${ie} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${ie} bg-white" autocomplete="off" />
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
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${K(M)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${ie} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${k(M)}</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${x?"บันทึกสำเนาคอร์ส":o?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}
          </button>
        </div>
      </form>
    </div>
  </div>`);const c=o&&(o.grade_level&&o.grade_level.includes(",")||E.length>0);function F(){const l=document.getElementById("cf-coteach-selected-list");l&&(l.innerHTML=E.map(s=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${s.full_name} (${s.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${s.id}">✕</button>
      </span>
    `).join(""),l.querySelectorAll(".remove-coteacher-btn").forEach(s=>{s.addEventListener("click",()=>{const t=Number(s.dataset.id);E=E.filter(i=>i.id!==t),F()})}))}function U(l,s){var i;(i=document.getElementById("coteach-explain-modal"))==null||i.remove();const t=document.createElement("div");t.id="coteach-explain-modal",t.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",t.innerHTML=`
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
      </div>`,document.body.appendChild(t),t.querySelector("#cf-explain-cancel").addEventListener("click",()=>{t.remove(),s()}),t.querySelector("#cf-explain-confirm").addEventListener("click",()=>{t.remove(),l()})}function le(l,s){var i;(i=document.getElementById("coteach-confirm-modal"))==null||i.remove();const t=document.createElement("div");t.id="coteach-confirm-modal",t.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",t.innerHTML=`
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
      </div>`,document.body.appendChild(t),t.querySelector("#cf-off-cancel").addEventListener("click",()=>{t.remove(),s()}),t.querySelector("#cf-off-confirm").addEventListener("click",()=>{t.remove(),l()})}function re(l,s=""){const t=mt[l]??[],i=document.getElementById("cf-grade-checkboxes");if(!i)return;const m=s?s.split(",").map(p=>p.trim()):[];i.innerHTML=t.map(p=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${p}" ${m.includes(p)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${p}</span>
      </label>
    `).join("")}const H=document.getElementById("cf-catalog"),Z=(l,s,t="")=>{H&&(H.innerHTML=ge(l,s,t),H.disabled=!s,t&&(H.value=String(t)))},ce=l=>{if(!l)return;const s=document.getElementById("cf-subg"),t=document.getElementById("cf-dept"),i=document.getElementById("cf-name"),m=document.getElementById("cf-code"),p=document.getElementById("cf-credit"),j=document.getElementById("cf-grade"),z=document.getElementById("cf-dept-head"),q=y.some(ee=>ee.value===l.subject_group)?l.subject_group:"";if(q&&s.value!==q&&(s.value=q,s.dispatchEvent(new Event("change"))),i&&(i.value=l.subject_name??""),m&&(m.value=l.subject_code??""),p&&l.credit!=null){const ee=String(l.credit);[...p.options].some(xe=>xe.value===ee)||p.appendChild(new Option(ee,ee)),p.value=ee}j&&l.grade_level&&([...j.options].some(ee=>ee.value===l.grade_level)||j.appendChild(new Option(l.grade_level,l.grade_level)),j.value=l.grade_level);const X=ct(l);t&&X&&J(q).some(ee=>ee.dept_code===X)&&(t.value=X,t.dispatchEvent(new Event("change"))),z&&l.learning_area&&(z.value=l.learning_area),H&&(document.getElementById("cf-catalog-id").value=l.id,Z(s.value,(t==null?void 0:t.value)||"",l.id))},R={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};H==null||H.addEventListener("change",l=>{const s=l.target.value;document.getElementById("cf-catalog-id").value=s,ce(ue.get(String(s)))}),document.getElementById("cf-subg").addEventListener("change",l=>{const s=l.target.value;document.getElementById("cf-dept-label").firstChild.textContent=B(s)+" ",document.getElementById("cf-head-label").textContent=K(s),document.getElementById("cf-head-hint").textContent=k(s);const t=document.getElementById("cf-dept"),i=t.value;t.innerHTML=pe(J(s)),t.options[0].textContent=T(s),i&&(t.value=i),Z(s,t.value,"");const m=document.getElementById("cf-grade"),p=mt[s]??[];m.innerHTML=p.length?['<option value="">— เลือกชั้นปี —</option>',...p.map(j=>`<option value="${j}">${j}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=R[s]??"",re(s)}),document.getElementById("cf-dept").addEventListener("change",l=>{var j;const s=l.target.value,t=document.getElementById("cf-subg").value,i=((j=document.getElementById("cf-catalog-id"))==null?void 0:j.value)||"";Z(t,s,i);const m=w.filter(z=>z.dept_code===s&&z.head_name).map(z=>z.head_name),p=document.getElementById("cf-dept-head");m.length===1?p.value=m[0]:m.length>1?(p.value="",V(m)):p.value=""});const se=document.getElementById("cf-dept-head"),G=document.getElementById("cf-head-dropdown");function V(l){G.innerHTML=l.map(s=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${s}">${s}</div>`).join(""),G.querySelectorAll(".head-opt").forEach(s=>s.addEventListener("mousedown",t=>{t.preventDefault(),se.value=s.dataset.val,G.classList.add("hidden")})),G.classList.toggle("hidden",!l.length)}se.addEventListener("input",()=>{const l=se.value.toLowerCase(),s=Q.filter(t=>t.toLowerCase().includes(l));V(l?s:Q)}),se.addEventListener("focus",()=>{const l=se.value.toLowerCase();V(l?Q.filter(s=>s.toLowerCase().includes(l)):Q)}),se.addEventListener("blur",()=>setTimeout(()=>G.classList.add("hidden"),150));const te=document.getElementById("cf-teacher-code"),oe=document.getElementById("cf-teacher-search"),fe=document.getElementById("cf-teacher-dropdown"),he=document.getElementById("cf-teacher-selected"),_e=document.getElementById("cf-teacher-name"),Ee=document.getElementById("cf-teacher-clear"),Ce=document.getElementById("cf-teacher-id"),Ne=document.getElementById("cf-phone");function n(l){if(!l){Ce.value="",te.value="",oe.value="",he.classList.add("hidden"),he.classList.remove("flex"),Ne.value="";return}Ce.value=l.id,te.value=l.teacher_code??"",oe.value=l.full_name??"",_e.textContent=`${l.full_name}${l.teacher_code?` (${l.teacher_code})`:""}`,he.classList.remove("hidden"),he.classList.add("flex"),Ne.value=dt(l.phone??""),fe.classList.add("hidden")}function C(l){fe.innerHTML=l.length?l.map(s=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${s.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${s.teacher_code??""}</span>
            <span class="font-medium">${s.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',fe.querySelectorAll(".t-opt").forEach(s=>s.addEventListener("mousedown",t=>{t.preventDefault(),n(g.find(i=>String(i.id)===s.dataset.id))})),fe.classList.remove("hidden")}if(e&&!o){const l=g.find(s=>s.id===e.id);l&&n(l)}te.oninput=()=>{const l=te.value.trim().toLowerCase();if(!l){n(null);return}const s=g.find(t=>(t.teacher_code??"").toLowerCase()===l);if(s)n(s);else{const t=g.filter(i=>(i.teacher_code??"").toLowerCase().startsWith(l));t.length&&C(t)}},oe.onfocus=()=>C(g),oe.oninput=()=>{const l=oe.value.toLowerCase();C(l?g.filter(s=>s.full_name.toLowerCase().includes(l)||(s.teacher_code??"").toLowerCase().includes(l)):g)},oe.onblur=()=>setTimeout(()=>fe.classList.add("hidden"),150),Ee.addEventListener("click",()=>n(null));const A=document.getElementById("cf-toggle-coteach"),S=document.getElementById("cf-grade-single-wrapper"),N=document.getElementById("cf-grade-multi-container"),O=document.getElementById("cf-coteach-section");A.addEventListener("change",l=>{l.target.checked?(A.checked=!1,U(()=>{A.checked=!0,S.classList.add("hidden"),N.classList.remove("hidden"),O.classList.remove("hidden");const t=document.getElementById("cf-subg").value;re(t),F()},()=>{A.checked=!1})):le(()=>{A.checked=!1,S.classList.remove("hidden"),N.classList.add("hidden"),O.classList.add("hidden"),E=[]},()=>{A.checked=!0})});const Y=document.getElementById("cf-coteach-code"),P=document.getElementById("cf-coteach-search"),ae=document.getElementById("cf-coteach-dropdown");function ve(l){if(!l)return;if(E.some(t=>t.id===l.id)){W("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),Y.value="",P.value="";return}const s=Number(Ce.value);if(l.id===s){W("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),Y.value="",P.value="";return}E.push(l),F(),Y.value="",P.value="",ae.classList.add("hidden")}function ye(l){ae.innerHTML=l.length?l.map(s=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${s.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${s.teacher_code??""}</span>
            <span class="font-medium">${s.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',ae.querySelectorAll(".co-t-opt").forEach(s=>s.addEventListener("mousedown",t=>{t.preventDefault(),ve(g.find(i=>String(i.id)===s.dataset.id))})),ae.classList.remove("hidden")}if(Y.oninput=()=>{const l=Y.value.trim().toLowerCase();if(!l)return;const s=g.find(t=>(t.teacher_code??"").toLowerCase()===l);if(s)ve(s);else{const t=g.filter(i=>(i.teacher_code??"").toLowerCase().startsWith(l));t.length&&ye(t)}},P.onfocus=()=>ye(g),P.oninput=()=>{const l=P.value.toLowerCase();ye(l?g.filter(s=>s.full_name.toLowerCase().includes(l)||(s.teacher_code??"").toLowerCase().includes(l)):g)},P.onblur=()=>setTimeout(()=>ae.classList.add("hidden"),150),Ne.addEventListener("input",l=>{l.target.value=dt(l.target.value)}),o){if(document.getElementById("cf-name").value=o.subject_name??"",document.getElementById("cf-code").value=o.subject_code??"",o.credit&&(document.getElementById("cf-credit").value=String(o.credit)),o.subject_group){const l=document.getElementById("cf-subg");l.value=o.subject_group,document.getElementById("cf-dept").innerHTML=pe(J(o.subject_group));const s=document.getElementById("cf-grade"),t=mt[o.subject_group]??[];s.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...t.map(i=>`<option value="${i}">${i}</option>`)].join(""),o.grade_level&&(s.value=o.grade_level),document.getElementById("cf-code-hint").textContent=R[o.subject_group]??""}if(o.dept){const l=document.getElementById("cf-dept");l.value=o.dept,Z(o.subject_group??"",o.dept,o.catalog_id??"")}if(o.learning_area)se.value=o.learning_area;else if(o.dept){const l=w.find(s=>s.dept_code===o.dept&&s.head_name);se.value=(l==null?void 0:l.head_name)??""}if(o.teacher_id){const l=g.find(s=>s.id===o.teacher_id);l&&n(l)}else if(e){const l=g.find(s=>s.id===e.id);l&&n(l)}if(c){A.checked=!0,S.classList.add("hidden"),N.classList.remove("hidden"),O.classList.remove("hidden");const l=o.subject_group;re(l,o.grade_level),F()}}document.getElementById("course-form").addEventListener("submit",async l=>{l.preventDefault();const s=document.getElementById("cf-submit"),t=document.getElementById("cf-subg").value,i=document.getElementById("cf-dept").value,m=document.getElementById("cf-name").value.trim(),p=document.getElementById("cf-code").value.trim(),j=parseFloat(document.getElementById("cf-credit").value)||null;let z="";if(A.checked){const xe=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!xe.length){W("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}z=xe.map(je=>je.value).join(", ")}else z=document.getElementById("cf-grade").value;const q=Ce.value,X=Ne.value.trim(),ee=se.value.trim();if(!t||!m||!z){W("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}s.disabled=!0,s.textContent="กำลังบันทึก...";try{const xe=q?Number(q):(e==null?void 0:e.id)??null,je=A.checked?E.map(Be=>Be.id):[];await a({catalog_id:document.getElementById("cf-catalog-id").value?Number(document.getElementById("cf-catalog-id").value):null,subject_group:t,dept:i||null,subject_name:m,subject_code:p||null,credit:j,grade_level:z,teacher_id:xe,learning_area:ee||null},je),X&&xe&&xe===(e==null?void 0:e.id)&&await wt(e.id,{phone:X}).catch(()=>{}),W("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(xe){W("บันทึกไม่สำเร็จ: "+ke(xe),"error")}finally{s.disabled=!1,s.textContent=x?"บันทึกสำเนาคอร์ส":o?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function Xo(e,a=[],o){He("setup"),ze("ตั้งค่าโปรไฟล์","registration");const[d,x,w,g]=await Promise.all([Ue().catch(()=>[]),Ut().catch(()=>[]),Jt().catch(()=>[]),De().catch(()=>({}))]),b=parseInt(g.academicYear??2568),_=parseInt(g.semester??1),L=[...new Map(d.map(v=>[v.dept_code,v])).values()],E=(v,h="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(v?L.filter($=>!$.category||$.category===v):L).map($=>`<option value="${$.dept_code}" ${$.dept_code===h?"selected":""}>${$.dept_name}</option>`).join(""),I=x,f=w,u=await Xt(b,_).catch(()=>[]);if(Te(`<div class="max-w-lg mx-auto animate-fade">
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
            class="${ie}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${Se}">
            ${E(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${Se}">
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
        ${os({prefix:"setup",samaiRooms:I,religionRooms:f,homeroomRooms:a,assignments:u,teacherId:e==null?void 0:e.id,academicYear:b,semester:_})}
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const y=()=>{var $;const v=($=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:$.value,h=document.getElementById("setup-room-samai-wrap"),D=document.getElementById("setup-room-religion-wrap");v==="สามัญ"?(h==null||h.classList.remove("hidden"),D==null||D.classList.add("hidden")):v==="ศาสนา"?(D==null||D.classList.remove("hidden"),h==null||h.classList.add("hidden")):(h==null||h.classList.remove("hidden"),D==null||D.classList.remove("hidden"))};y(),as(),document.querySelectorAll('input[name="setup-category"]').forEach(v=>v.addEventListener("change",()=>{var B;y();const h=(B=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:B.value,D=document.getElementById("setup-dept"),$=D==null?void 0:D.value;D&&(D.innerHTML=E(h,$))})),document.getElementById("setup-phone").addEventListener("input",v=>{const h=v.target.value.replace(/\D/g,"").slice(0,10);v.target.value=h.length<=3?h:h.length<=6?`${h.slice(0,3)} ${h.slice(3)}`:`${h.slice(0,3)} ${h.slice(3,6)} ${h.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async v=>{var D;v.preventDefault();const h=document.getElementById("setup-save");h.disabled=!0,h.textContent="กำลังบันทึก...";try{const $=document.getElementById("setup-dept").value||null,B=document.getElementById("setup-subg").value||null,K=((D=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:D.value)||null,T=document.getElementById("setup-phone").value.trim()||null,k=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(ue=>ue.value),M=[...document.querySelectorAll('input[name="setup-room-religion"]:checked')].map(ue=>ue.value);await wt(e.id,{dept:$,subject_group:B,category:K,phone:T});const{upsertHomeroomTeacher:J,deleteHomeroomTeacher:pe}=await Ie(async()=>{const{upsertHomeroomTeacher:ue,deleteHomeroomTeacher:be}=await import("./api-Bf4Tf4Cp.js");return{upsertHomeroomTeacher:ue,deleteHomeroomTeacher:be}},__vite__mapDeps([0,1,2,3,4])),Q=async(ue,be)=>{const me=a.filter(de=>de.category===ue&&Number(de.academic_year)===b&&Number(de.semester)===_);await Promise.all(me.filter(de=>!be.includes(de.main_room)).map(de=>pe(de.id).catch(()=>{}))),await Promise.all(be.map(de=>J({teacher_id:e.id,main_room:de,category:ue,academic_year:b,semester:_})))};await Promise.all([Q("สามัญ",k),Q("ศาสนา",M)]),W("บันทึกโปรไฟล์สำเร็จ ✅","success"),o&&await o(e.profile_id)}catch($){W("บันทึกไม่สำเร็จ: "+ke($),"error")}finally{h.disabled=!1,h.textContent="บันทึกและเริ่มใช้งาน →"}})}async function Ko(e,a=[],o){var y;He("profile"),ze("โปรไฟล์ของฉัน","registration");const[d,x,w]=await Promise.all([Ue().catch(()=>[]),Ut().catch(()=>[]),Jt().catch(()=>[])]),g=await De().catch(()=>({})),b=parseInt(g.academicYear??new Date().getFullYear()+543),_=parseInt(g.semester??1),L=await Xt(b,_).catch(()=>[]),E=e==null?void 0:e.category,I=E?d.filter(v=>!v.category||v.category===E):d,f=[...new Map(I.map(v=>[v.dept_code,v])).values()],u=dt((e==null?void 0:e.phone)??"");Te(`<div class="max-w-lg mx-auto animate-fade">
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
              class="${ie} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${(e==null?void 0:e.category)??"—"}"
              class="${ie} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${(e==null?void 0:e.full_name)??""}" class="${ie}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||""}" class="${ie}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${(e==null?void 0:e.username)??""}" placeholder="เช่น hambal.waji"
            class="${ie} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${u}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${ie}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${f.length>0?`<select id="prof-dept" class="${Se} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${f.map(v=>`<option value="${v.dept_code}" ${v.dept_code===(e==null?void 0:e.dept)?"selected":""}>${v.dept_name} (${v.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${ie} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${Se}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${(e==null?void 0:e.subject_group)==="ACDM"?"selected":""}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${(e==null?void 0:e.subject_group)==="AGM"?"selected":""}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${(e==null?void 0:e.subject_group)==="ACDMVOC"?"selected":""}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${(e==null?void 0:e.subject_group)==="AGMVOC"?"selected":""}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        ${os({prefix:"prof",samaiRooms:x,religionRooms:w,homeroomRooms:a,assignments:L,teacherId:e==null?void 0:e.id,academicYear:b,semester:_})}

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
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${ie}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${ie}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`),window._profileFocus==="password"&&(window._profileFocus=null,requestAnimationFrame(()=>{const v=document.getElementById("prof-pw-new");v==null||v.scrollIntoView({behavior:"smooth",block:"center"}),v==null||v.focus()})),e&&(as(),document.getElementById("prof-phone").addEventListener("input",v=>{v.target.value=dt(v.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",v=>{const h=v.target.files[0];h&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(h)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async v=>{var $;v.preventDefault();const h=document.getElementById("prof-save"),D=document.getElementById("prof-name").value.trim();if(!D){W("กรุณากรอกชื่อ-นามสกุล","warning");return}h.disabled=!0,h.textContent="กำลังบันทึก...";try{const B=document.getElementById("prof-dept"),K=document.getElementById("prof-dept-txt"),T=document.getElementById("prof-subg"),k=((K==null?void 0:K.value.trim().toUpperCase())||(B==null?void 0:B.value)||"").trim()||null,M=document.getElementById("prof-username").value.trim().toLowerCase(),J=document.getElementById("prof-email").value.trim();if(M&&!/^[a-z0-9._-]{3,32}$/.test(M)){W("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),h.disabled=!1,h.textContent="บันทึก";return}const pe={full_name:D,phone:document.getElementById("prof-phone").value.trim()||null,dept:k,subject_group:(T==null?void 0:T.value)||null,username:M||null,login_email:J||null},Q=($=document.getElementById("prof-photo-file").files)==null?void 0:$[0];Q&&(pe.image_url=await Os(e.id,Q)),await wt(e.id,pe);const{upsertHomeroomTeacher:ue,deleteHomeroomTeacher:be,getSystemConfig:me}=await Ie(async()=>{const{upsertHomeroomTeacher:re,deleteHomeroomTeacher:H,getSystemConfig:Z}=await import("./api-Bf4Tf4Cp.js");return{upsertHomeroomTeacher:re,deleteHomeroomTeacher:H,getSystemConfig:Z}},__vite__mapDeps([0,1,2,3,4])),de=await me().catch(()=>({})),ge=parseInt(de.academicYear??new Date().getFullYear()+543),c=parseInt(de.semester??1),F=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(re=>re.value),U=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(re=>re.value),le=async(re,H)=>{const Z=a.filter(ce=>ce.category===re&&Number(ce.academic_year)===ge&&Number(ce.semester)===c);await Promise.all(Z.filter(ce=>!H.includes(ce.main_room)).map(ce=>be(ce.id).catch(()=>{}))),await Promise.all(H.map(ce=>ue({teacher_id:e.id,main_room:ce,category:re,academic_year:ge,semester:c})))};await Promise.all([le("สามัญ",F),le("ศาสนา",U)]),W("บันทึกโปรไฟล์สำเร็จ","success"),o&&await o(e.profile_id)}catch(B){W("บันทึกไม่สำเร็จ: "+ke(B),"error")}finally{h.disabled=!1,h.textContent="บันทึก"}}),(y=document.getElementById("prof-pw-save"))==null||y.addEventListener("click",async()=>{const v=document.getElementById("prof-pw-new").value,h=document.getElementById("prof-pw-confirm").value;if(!v){W("กรุณากรอกรหัสผ่านใหม่","warning");return}if(v.length<6){W("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(v!==h){W("รหัสผ่านไม่ตรงกัน","warning");return}const D=document.getElementById("prof-pw-save");D.disabled=!0,D.textContent="⏳ กำลังบันทึก...";try{const{error:$}=await bt.auth.updateUser({password:v});if($)throw $;W("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch($){W("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+ke($),"error")}finally{D.disabled=!1,D.textContent="บันทึกรหัสผ่านใหม่"}}))}const ls="pp5_exam_docs_draft_v1",Bt="pp5_exam_docs_pending_class_id",rs="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",Us="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",it=27,Ze=it*2,is=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],gt={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},et={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},Js=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let ne={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...et},loadingStudents:!1},xt=[];const Xs=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Ks=()=>{try{return JSON.parse(localStorage.getItem(ls)||"{}")||{}}catch{return{}}},tt=()=>{localStorage.setItem(ls,JSON.stringify(ne.form))},Qs=()=>{let e="";try{e=sessionStorage.getItem(Bt)||"",sessionStorage.removeItem(Bt)}catch{}const a=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,a?String(a):""},pt=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},ds=e=>[...e||[]].sort((a,o)=>String(a.student_code||"").localeCompare(String(o.student_code||""),"th",{numeric:!0})),St=e=>{if(!e)return"";const a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?"":`${a.getDate()} เดือน ${is[a.getMonth()]} พ.ศ. ${a.getFullYear()+543}`},Zs=e=>{if(!e)return{day:"",month:"",year:""};const a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?{day:"",month:"",year:""}:{day:String(a.getDate()),month:is[a.getMonth()],year:String(a.getFullYear()+543)}},Et=e=>{const a=e.startTime||"",o=e.endTime||"";return a&&o?`${a} - ${o}`:a||o||""},Mt=(e,a)=>e?a.key==="th"?`${e} น.`:e:"",eo=e=>{const a=String(e||"").trim();if(!a)return{room:"",name:""};const o=a.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(o)return{room:o[1],name:o[2].trim()};const[d,...x]=a.split(/\s+/);return{room:d,name:x.join(" ").trim()}},Fe=e=>{const a=String(e||"").trim().toUpperCase();return a==="ชาย"||a==="M"||a==="MALE"?"M":a==="หญิง"||a==="F"||a==="W"||a==="FEMALE"?"F":""},Ct=()=>{const e=new Set((ne.students||[]).map(a=>Fe(a.gender)).filter(Boolean));return e.has("M")&&e.has("F")},to=()=>{const e=ne.form,a=ne.students||[];if(e.studentScope!=="split"||!Ct())return[a];const o=a.filter(x=>Fe(x.gender)==="M"),d=a.filter(x=>Fe(x.gender)==="F");return e.splitPrintMode==="both"?[o,d]:[e.splitGender==="F"?d:o]},so=()=>{const e=ne.form;if(e.studentScope!=="split"||!Ct())return"";const a=ne.students.filter(d=>Fe(d.gender)==="M").length,o=ne.students.filter(d=>Fe(d.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${a} + หญิง ${o})`:e.splitGender==="F"?` (เฉพาะหญิง ${o} คน)`:` (เฉพาะชาย ${a} คน)`},oo=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),Pt=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),Dt=(e,a,o,d=o.loading,x=0)=>{const w=e||[],g=w.map((_,L)=>`
    <tr>
      <td>${a+L}</td>
      <td>${r(_.student_code||"")}</td>
      <td class="nm">${r(_.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),b=Array.from({length:Math.max(0,x-w.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return g||b?g+b:`<tr><td colspan="4" class="empty-students">${r(d)}</td></tr>`},ao=(e,a,o,d,x,w)=>{const g=e.slice(a*Ze,(a+1)*Ze),b=g.slice(0,it),_=g.slice(it,Ze),L=a*Ze+1,E=L+it;return`
    <div class="exam-doc-paper ${w} sign-list ${a>0?"exam-doc-page-break":""}">
      ${vt(o.signListTitle)}
      ${ht(o,d,x)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${r(o.studentCode)}</th>
                <th>${r(o.studentName)}</th>
                <th style="width:80px;">${r(o.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${Dt(b,L,o)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${r(o.studentCode)}</th>
                <th>${r(o.studentName)}</th>
                <th style="width:80px;">${r(o.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${Dt(_,E,o," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${ft(o,x)}
    </div>`},Ot=(e,a)=>a?`${e}. .................................................... <span class="textColor">(${r(a)})</span>`:`${e}. ...........................................................................................`,ft=(e,a)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${r(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>${Ot(1,a.invigilator1)}</div>
      </div>
      <div class="examiner-signature">
        <div>${Ot(2,a.invigilator2)}</div>
      </div>
    </div>
  </div>`,vt=e=>`
  <div class="header">
    <img src="${rs}" alt="">
    <h2>${r(e)}</h2>
    <img src="${Us}" alt="">
  </div>`,ht=(e,a,o)=>`
  <div class="infoG">
    <div class="info1">
      ${r(e.examType)}: <span class="textColor">${r(o.examType||"")}</span>
      ${r(e.term)}: <span class="textColor">${r(o.semester||"")}</span>
      ${r(e.year)}: <span class="textColor">${r(o.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${r(e.subject)}: <span class="textColor">${r(a.subjectName||"")}</span>
      ${r(e.subjectCode)}: <span class="textColor">${r(a.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${r(e.examDate)}: <span class="textColor">${r(o.examDateLabel||St(o.examDate))}</span>
      ${r(e.examTime)}: <span class="textColor">${r(o.examTimeLabel||Et(o))}</span>
    </div>
    <div class="info4">
      ${r(e.teacher)}: <span class="textColor">${r(a.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${r(e.classLevel)}: <span class="textColor">${r(a.className||"")}</span>
    </div>
  </div>`,no=e=>`
  <div class="header-single">
    <img src="${rs}" alt="">
    <h2>${r(e)}</h2>
  </div>`,Rt=(e,a)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${r(a||"")}</span>
  </div>`,lo=(e,a,o,d)=>{const[x,w]=String(d.room||"").split("/");return`
  <div class="env-line">
    ${r(e.envTerm)} <span class="textColor env-blank-sm">${r(o.semester||"")}</span>
    ${r(e.envYear)} <span class="textColor env-blank-sm">${r(o.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${r(e.envSubject)} <span class="textColor env-blank-lg">${r(a.subjectName||"")}</span>
    ${r(e.envClass)} <span class="textColor env-blank-sm">${r(x||"")}</span> / <span class="textColor env-blank-sm">${r(w||"")}</span>
  </div>
  <div class="env-line">
    ${r(e.envTeacher)} <span class="textColor env-blank-lg">${r(a.teacherName||"")}</span>
  </div>
  <div class="env-line env-invigilator-heading">${r(e.envInvigilatorHeading)}:-</div>
  ${Rt(1,o.invigilator1)}
  ${Rt(2,o.invigilator2)}
  <table class="envelope-summary-table">
    <tbody>
      <tr><th>${r(e.envDate)}</th><td class="textColor">${r(o.examDateLabel||St(o.examDate))}</td></tr>
      <tr><th>${r(e.envPeriod)}</th><td class="textColor">${r(o.examTimeLabel||Et(o))}</td></tr>
      <tr><th>${r(e.envGroup)}</th><td class="textColor">${r(o.classPart||"")}</td></tr>
      <tr><th>${r(e.envRoomNo)}</th><td class="textColor">${r(o.examRoom||"")}</td></tr>
    </tbody>
  </table>
  <div class="env-footer-dept">${r(e.envFooterDept)}</div>`},ro=(e,a)=>{var $,B;const o=ne.form,d=gt[o.lang]||gt.th,x=ne.selectedClass||{},w=pt(x),g=ds(e),b=g.length,_=Zs(o.examDate),L=($=ne.teacher)!=null&&$.phone?` (${ne.teacher.phone})`:"",E={className:x.class_name||"",subjectName:o.subjectLabel||w.subject_name||"",subjectCode:w.subject_code||"",teacherName:(((B=ne.teacher)==null?void 0:B.full_name)||"")+L},I=Math.max(1,Math.ceil(g.length/Ze)),f=d.dir==="rtl"?"rtl":"ltr",u=a==="all"||a==="portrait",y=a==="all"||a==="envelope",v=a==="envelope"?" envelope-only":a==="portrait"?" portrait-only":"",h=o.examAmount||String(b),D=eo(E.className);return`
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
    ${u?`
    ${Array.from({length:I},(K,T)=>ao(g,T,d,E,o,f)).join("")}

    <div class="exam-doc-paper ${f} exam-doc-page-break">
      ${vt(d.examCoverTitle)}
      ${ht(d,E,o)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${r(d.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${b}</span> ${r(d.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${r(d.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${r(d.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${r(d.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${r(d.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${r(d.no)}</th>
            <th>${r(d.studentCode)}</th>
            <th>${r(d.absentName)}</th>
            <th>${r(d.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${Pt(15)}
        </tbody>
      </table>
      ${ft(d,o)}
    </div>

    <div class="exam-doc-paper ${f} exam-doc-page-break">
      ${vt(d.absentTitle)}
      ${ht(d,E,o)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${r(d.no)}</th>
            <th>${r(d.studentCode)}</th>
            <th>${r(d.absentName)}</th>
            <th>${r(d.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${Pt(15)}
        </tbody>
      </table>
      ${ft(d,o)}
    </div>
    `:""}

    ${y?o.lang==="th"?`
    <div class="exam-doc-paper ${f} landscape ${u?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${r(d.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${r(d.envelopeSubject)} <span class="textColor">${r(E.subjectName)}</span> ${r(d.subjectCode)} <span class="textColor">${r(E.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${o.examDateLabel?`${r(d.envelopeDate)} <span class="textColor">${r(o.examDateLabel)}</span>`:`${r(d.envelopeDate)} <span class="textColor">${r(_.day)}</span> ${r(d.envelopeMonth)} <span class="textColor">${r(_.month)}</span> ${r(d.envelopeYear)} <span class="textColor">${r(_.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${o.examTimeLabel?`${r(d.envelopeTime)} <span class="textColor">${r(o.examTimeLabel)}</span>`:`${r(d.envelopeTime)} <span class="textColor">${r(Mt(o.startTime,d))}</span> ${r(d.envelopeTo)} <span class="textColor">${r(Mt(o.endTime,d))}</span>`}
        </div>
        <div class="infoNP4">
          ${r(d.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${r(D.room)}</span>${D.name?`<span class="exam-envelope-class-name">${r(D.name)}</span>`:""}</span> ${r(d.envelopeStudents)} <span class="textColor">${b}</span> ${r(d.studentUnit)} ${r(d.examAmount)} <span class="textColor">${r(h)}</span> ${r(d.examUnit)}
        </div>
        <div class="infoNP5">
          ${r(d.envelopeTeacher)} <span class="textColor">${r(E.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${f} envelope-religious ${u?"exam-doc-page-break":""}">
      ${no(d.envSchoolName)}
      ${lo(d,E,o,D)}
    </div>
    `:""}
    </div>`},jt=(e="all")=>{const o=to().map(_=>ro(_,e));if(o.length<=1)return o[0]||"";const d=o[0].match(/<style[\s\S]*?<\/style>/),x=d?d[0]:"",w=o[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),g=w?w[1]:"",b=o.map(_=>{const L=_.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return L?L[1]:""});return`${x}
<div id="exam-doc-print-area" class="${g}">${b.join("")}</div>`},io=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${jt("all")}
</body>
</html>`;Qt(e,{autoprint:!0})},co=()=>{const e=ne.selectedClass,a=pt(e);return e?`${a.subject_code||"-"} · ${a.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function po(){xt.forEach(e=>{try{e()}catch{}}),xt=[]}function qt(e,a){const o=document.getElementById(e),d=document.getElementById(`${e}-list`);if(!o||!d)return;const x=ne.teachers||[],w=()=>{d.classList.add("hidden")},g=u=>{o.value=u.full_name||"",ne.form[a]=o.value,tt(),st(),w()},b=()=>{const u=o.value.trim(),y=u.toLowerCase(),v=x.filter(h=>!u||oo(h).includes(y)).slice(0,10);if(!x.length){d.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!v.length){d.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}d.innerHTML=v.map(h=>`
      <button type="button" data-id="${h.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${h.image_url?`<img src="${h.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${r((h.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${r(h.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${r(h.teacher_code||"—")}${h.dept?` · ${r(h.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),d.querySelectorAll(".exam-teacher-option").forEach(h=>{h.addEventListener("mousedown",D=>{D.preventDefault();const $=x.find(B=>String(B.id)===String(h.dataset.id));$&&g($)})})},_=()=>{b(),d.classList.remove("hidden")},L=()=>{ne.form[a]=o.value,tt(),st(),_()},E=()=>_(),I=u=>{if(u.key==="Escape"&&w(),u.key==="Enter"){const y=d.querySelector(".exam-teacher-option");y&&!d.classList.contains("hidden")&&(u.preventDefault(),y.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},f=u=>{!o.contains(u.target)&&!d.contains(u.target)&&w()};o.addEventListener("input",L),o.addEventListener("focus",E),o.addEventListener("keydown",I),document.addEventListener("mousedown",f,!0),xt.push(()=>{o.removeEventListener("input",L),o.removeEventListener("focus",E),o.removeEventListener("keydown",I),document.removeEventListener("mousedown",f,!0)})}function We(){const e=ne.form,a=ne.classes.map(o=>{const d=pt(o),x=`${d.subject_code||"-"} · ${d.subject_name||"-"} · ${o.class_name||"-"}`;return`<option value="${o.id}" ${String(e.classId)===String(o.id)?"selected":""}>${r(x)}</option>`}).join("");Te(`
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
            <select id="exam-class-id" class="${Se}">
              <option value="">เลือกห้องเรียน</option>
              ${a}
            </select>
          </label>
          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ภาษาเอกสาร</span>
            <select id="exam-lang" class="${Se}">
              ${Object.values(gt).map(o=>`<option value="${o.key}" ${e.lang===o.key?"selected":""}>${r(o.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <input id="exam-type" list="exam-type-datalist" class="${ie}" value="${r(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${Js.map(o=>`<option value="${r(o)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${ie}" value="${r(e.subjectLabel)}" placeholder="${r(pt(ne.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${ie}" value="${r(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${ie}" value="${r(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${ie}" value="${r(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${ie}" value="${r(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${ie}" value="${r(e.endTime)}">
            </label>
          </div>
          ${e.lang!=="th"?`
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความวันที่สอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = แปลงจากวันที่ด้านบนแบบไทยให้อัตโนมัติ)</span>
            <input id="exam-date-label" class="${ie}" value="${r(e.examDateLabel)}" placeholder="${r(St(e.examDate)||"เช่น ١٥ يوليو ٢٠٢٦")}">
          </label>
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความเวลาสอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = ใช้เวลาด้านบนตามที่ตั้งไว้)</span>
            <input id="exam-time-label" class="${ie}" value="${r(e.examTimeLabel)}" placeholder="${r(Et(e)||"เช่น ٠٨:٣٠ - ٠٩:٣٠")}">
          </label>`:""}
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${ie}" value="${r(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${ie}" value="${r(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${ie}" value="${r(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${ie}" value="${r(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${ie}" value="${r(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${ie}" value="${r(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        ${Ct()?(()=>{const o=ne.students.filter(w=>Fe(w.gender)==="M").length,d=ne.students.filter(w=>Fe(w.gender)==="F").length,x=e.studentScope==="split";return`
        <div class="mt-4 grid gap-3 sm:grid-cols-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">นักเรียนที่ใช้ (ห้องนี้มีทั้งชายและหญิง)</span>
            <select id="exam-student-scope" class="${Se}">
              <option value="all" ${x?"":"selected"}>ทั้งห้อง (ไม่แยกเพศ)</option>
              <option value="split" ${x?"selected":""}>แยกเพศ</option>
            </select>
          </label>
          ${x?`
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">เพศที่กำลังดู/พิมพ์</span>
            <select id="exam-split-gender" class="${Se}">
              <option value="M" ${e.splitGender!=="F"?"selected":""}>ชาย (${o} คน)</option>
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${d} คน)</option>
            </select>
          </label>
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">รูปแบบพิมพ์</span>
            <select id="exam-split-print-mode" class="${Se}">
              <option value="single" ${e.splitPrintMode!=="both"?"selected":""}>พิมพ์ทีละเพศ (เฉพาะเพศที่เลือกอยู่)</option>
              <option value="both" ${e.splitPrintMode==="both"?"selected":""}>พิมพ์ทีเดียวทั้งสองเพศ (ชายก่อน ต่อด้วยหญิง)</option>
            </select>
          </label>`:""}
        </div>`})():""}

        <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${r(co())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${ne.students.length} คน${r(so())}</span>
          ${ne.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${jt()}</div>
      </section>
    </div>`),uo()}async function yt(){const e=ne.form.classId;if(ne.selectedClass=ne.classes.find(a=>String(a.id)===String(e))||null,ne.students=[],!!e){ne.loadingStudents=!0,We();try{ne.students=ds(await ks(e))}catch(a){console.error(a),W("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+ke(a),"error")}finally{ne.loadingStudents=!1}}}function qe(){var e,a,o,d,x,w,g,b,_,L,E,I,f,u,y,v,h,D,$,B;ne.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((a=document.getElementById("exam-subject-label"))==null?void 0:a.value)||"",lang:((o=document.getElementById("exam-lang"))==null?void 0:o.value)||"th",examType:((d=document.getElementById("exam-type"))==null?void 0:d.value)||"",semester:((x=document.getElementById("exam-semester"))==null?void 0:x.value)||"",academicYear:((w=document.getElementById("exam-year"))==null?void 0:w.value)||"",examDate:((g=document.getElementById("exam-date"))==null?void 0:g.value)||"",startTime:((b=document.getElementById("exam-start"))==null?void 0:b.value)||"",endTime:((_=document.getElementById("exam-end"))==null?void 0:_.value)||"",examDateLabel:((L=document.getElementById("exam-date-label"))==null?void 0:L.value)||"",examTimeLabel:((E=document.getElementById("exam-time-label"))==null?void 0:E.value)||"",classPart:((I=document.getElementById("exam-class-part"))==null?void 0:I.value)||"",periodPart:((f=document.getElementById("exam-period-part"))==null?void 0:f.value)||"",examRoom:((u=document.getElementById("exam-room"))==null?void 0:u.value)||"",examAmount:((y=document.getElementById("exam-amount"))==null?void 0:y.value)||"",invigilator1:((v=document.getElementById("exam-invigilator-1"))==null?void 0:v.value)||"",invigilator2:((h=document.getElementById("exam-invigilator-2"))==null?void 0:h.value)||"",studentScope:((D=document.getElementById("exam-student-scope"))==null?void 0:D.value)||"all",splitGender:(($=document.getElementById("exam-split-gender"))==null?void 0:$.value)||"M",splitPrintMode:((B=document.getElementById("exam-split-print-mode"))==null?void 0:B.value)||"single"},ne.selectedClass=ne.classes.find(K=>String(K.id)===String(ne.form.classId))||null,tt()}function st(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=jt())}function mo(){return qe(),st(),ne.form.classId?!0:(W("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function uo(){var a,o,d,x;po(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(w=>{var g,b;(g=document.getElementById(w))==null||g.addEventListener("input",()=>{qe(),st()}),(b=document.getElementById(w))==null||b.addEventListener("change",()=>{qe(),st()})}),(a=document.getElementById("exam-class-id"))==null||a.addEventListener("change",async()=>{qe(),tt(),await yt(),We()}),(o=document.getElementById("exam-lang"))==null||o.addEventListener("change",()=>{qe(),We()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(w=>{var g;(g=document.getElementById(w))==null||g.addEventListener("change",()=>{qe(),We()})}),(d=document.getElementById("exam-doc-refresh"))==null||d.addEventListener("click",async()=>{qe(),await yt(),We(),W("รีเฟรชรายชื่อแล้ว","success")}),(x=document.getElementById("exam-doc-print"))==null||x.addEventListener("click",()=>{mo()&&io()}),qt("exam-invigilator-1","invigilator1"),qt("exam-invigilator-2","invigilator2")}async function Qo(e){He("exam-docs"),ze("เอกสารช่วงสอบ","exam-docs"),Te(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[a,o,d]=await Promise.all([kt((e==null?void 0:e.id)??null),De().catch(()=>({})),Vt().catch(()=>[])]),x=Ks(),w=Qs(),g={...et,semester:String(o.semester||et.semester||""),academicYear:String(o.academicYear||et.academicYear||""),examDate:Xs(),invigilator1:(e==null?void 0:e.full_name)||"",...x};w&&a.some(b=>String(b.id)===String(w))&&(g.classId=String(w)),ne={teacher:e,classes:a,teachers:d,students:[],selectedClass:null,loadingStudents:!1,form:g},ne.form.examType||(ne.form.examType=et.examType),w&&tt(),ne.selectedClass=ne.classes.find(b=>String(b.id)===String(ne.form.classId))||null,await yt(),We()}catch(a){console.error(a),Te(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${r(ke(a))}
    </div>`)}}let Xe=null,Ge=null,Ke=null,Ve=null,Ye=null;const bo={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},go={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function xo(e){const a=new Date,o=new Date(e.event_date+"T00:00:00"),d=new Date((e.end_date||e.event_date)+"T23:59:59");if(a>=o&&a<=d)return{status:"ongoing"};const x=Math.max(0,Math.floor((o-a)/1e3)),w=Math.floor(x/86400),g=x%86400,b=Math.floor(g/3600),_=Math.floor(g%3600/60),L=g%60,E=`${String(b).padStart(2,"0")}:${String(_).padStart(2,"0")}:${String(L).padStart(2,"0")}`,I=x<=86400?"red":x<=3*86400?"amber":"normal";return{status:"upcoming",days:w,clock:E,urgency:I}}function fo(e,a){if(!e)return 0;const o=new Date(e),d=new Date(a+"T00:00:00");if(isNaN(o)||isNaN(d))return 0;const x=d.getTime()-o.getTime();return x<0?0:Math.floor(x/(7*24*60*60*1e3))+1}function Ft(e,a){const o=g=>String(g??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=g=>new Date(g+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),x=new Date().toISOString().slice(0,10),w=(e??[]).filter(g=>(g.end_date||g.event_date)>=x).map(g=>({ev:g,cd:xo(g)})).filter(({cd:g})=>g.status==="ongoing"||g.days<=14).sort((g,b)=>g.ev.event_date.localeCompare(b.ev.event_date)).slice(0,5);return w.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${w.map(({ev:g,cd:b})=>{const _=b.status==="ongoing"||b.urgency==="red",L=b.urgency==="amber",E=_?"bg-red-50 border-red-300 ring-2 ring-red-200":L?"bg-amber-50 border-amber-200":"bg-white border-gray-200",I=_?"bg-red-100 animate-pulse":L?"bg-amber-100":"bg-gray-100",f=fo(a,g.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${E}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${I}">${_?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${go[g.event_type]}">${bo[g.event_type]}</span>
            <span class="text-[11px] text-gray-400">${d(g.event_date)}</span>
            ${f>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${f}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${_?"text-red-800":"text-gray-800"}">${o(g.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${b.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${_?"text-red-600":L?"text-amber-600":"text-gray-500"}">อีก ${b.days} วัน</p>
               <p class="text-[11px] font-mono ${_?"text-red-400":"text-gray-400"}">${b.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function Ht(e,a,o=null){const d=b=>b==="A"?"#059669":b==="B"?"#2563eb":"#d97706",x=(b="0.11")=>o?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${b};color:${d(o.grade)}">${o.grade}</span>
       </div>`:"";if(!e.length)return"";const w=e.map(b=>({...b,cd:Ms(b.start_time,b.end_time)})).sort((b,_)=>{const L={active:0,upcoming:1,done:2};return L[b.cd.status]-L[_.cd.status]||(b.start_time??"").localeCompare(_.start_time??"")}),g=w.some(b=>b.cd.status==="active");return`
  <div onclick="window._openWenDuty('${a}')"
    class="relative overflow-hidden mb-3 border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-150
           ${g?"bg-red-50 border-red-300 ring-4 ring-red-100":"bg-amber-50 border-amber-300 ring-4 ring-amber-100"}">
    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                ${g?"bg-red-100 animate-pulse":"bg-amber-100"}">${g?"🚨":"🛡️"}</div>
    <div class="flex-1 min-w-0">
      <span class="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1
        ${g?"bg-red-200 text-red-800":"bg-amber-200 text-amber-800"}">เวรวันนี้</span>
      <p class="font-extrabold text-base mb-1 ${g?"text-red-800":"text-amber-800"}">
        ${g?"🔴 ถึงเวลาเวรแล้ว!":`วันนี้คุณมีเวร ${w.length} จุด`}
      </p>
      <div class="space-y-1">
        ${w.map(b=>b.cd.status==="active"?`
        <div class="bg-red-100/70 rounded-lg px-2 py-1.5 -mx-2">
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${r(b.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${r(b.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${b.cd.cls}">${b.cd.label}</span>
          </div>
        </div>`:`
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${b.cd.status==="done"?"text-gray-400 line-through":"text-amber-700"}">
            📍 ${r(b.name)} <span class="${b.cd.status==="done"?"text-gray-300":"text-amber-500"}">(${r(b.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${b.cd.cls}">${b.cd.label}</span>
        </div>`).join("")}
      </div>
      <p class="text-[11px] mt-2 font-semibold ${g?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${x()}
  </div>`}const Qe=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let Pe=null;function zt(e,a){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const o=parseInt(String(a??"").replace(/[^0-9]/g,""),10);return o>=4&&o<=6?"สามัญมัธยม ม.ปลาย":o>=1&&o<=3?"สามัญมัธยม ม.ต้น":null}async function vo(e){He("overview"),ze("ภาพรวมผู้บริหาร"),Te(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[a,o]=await Promise.all([As().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),De().catch(()=>({}))]),d=Object.fromEntries(a.subjectRows.map(k=>[k.id,k])),x=Object.fromEntries(Qe.map(k=>[k,0]));let w=0;a.classRows.forEach(k=>{const M=d[k.course_id],J=M?zt(M.subject_group,M.grade_level):null;J?x[J]++:w++});const g=new Set(a.classRows.map(k=>k.course_id).filter(Boolean)),b=a.subjectRows.filter(k=>g.has(k.id)),_=Object.fromEntries(Qe.map(k=>[k,new Set])),L=new Set;b.forEach(k=>{const M=zt(k.subject_group,k.grade_level);M?_[M].add(k.subject_name):L.add(k.subject_name)});const E=Object.fromEntries(Qe.map(k=>[k,_[k].size])),I=new Set(b.map(k=>k.subject_name)).size,f=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:a.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:a.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:a.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:I,hint:"นับชื่อวิชาไม่ซ้ำ"}],u=()=>f.map(k=>`
    <button type="button" data-exec-stat="${k.key}"
      class="text-left bg-white rounded-2xl border ${Pe===k.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${k.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${k.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${k.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${k.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${Pe===k.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),y=(k,M)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${k}</span>
      <span class="text-sm font-bold text-gray-800">${M.toLocaleString("th-TH")}</span>
    </div>`,v=()=>{if(!Pe)return"";let k="";if(Pe==="teachers"||Pe==="students"){const M=f.find(J=>J.key===Pe);k=`<p class="text-sm text-gray-500">${M.icon} ${M.label}ทั้งหมด <b class="text-gray-800">${M.value.toLocaleString("th-TH")}</b> คน (${M.hint})</p>`}else Pe==="courses"?k=Qe.map(M=>y(M,x[M])).join("")+(w>0?y("ไม่ระบุหมวด/ยังไม่ผูกวิชา",w):""):Pe==="subjects"&&(k=Qe.map(M=>y(M,E[M])).join("")+(L.size>0?y("ไม่ระบุหมวด",L.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${k}
    </div>`},h={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},$=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter(k=>k.show&&["council","terangganu","regrade"].includes(k.key)).map(k=>{const[M,J]=h[k.key]||["#E4E4E7","#9C9CA3"];return{key:k.key,id:k.id,emoji:k.emoji,label:k.label,from:M,to:J,badge:k.badge,onclick:k.href?`window.location.href='${k.href}'`:`window._navTo('${k.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map(k=>es(k,o.iconTileStyle)).join(""),K=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map(k=>`
    <a href="${k.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${k.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${k.label}</span>
    </a>`).join("");Te(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${r((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${u()}
    </div>
    <div id="exec-stat-detail">${v()}</div>

    <div class="mt-5 mb-1 md:hidden">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</h4>
      <div class="flex gap-3 overflow-x-auto pb-1" id="exec-icon-grid">
        ${$}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">🖥️ จอมอนิเตอร์</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${K}
      </div>
    </div>
  </div>`);function T(){document.querySelectorAll("[data-exec-stat]").forEach(k=>{k.onclick=()=>{var J;const M=k.dataset.execStat;Pe=Pe===M?null:M,document.getElementById("exec-stat-cards").innerHTML=u(),document.getElementById("exec-stat-detail").innerHTML=v(),T(),(J=document.getElementById("exec-stat-detail-inner"))==null||J.scrollIntoView({behavior:"smooth",block:"nearest"})}})}T()}async function Gt(e,a=[]){var ve,ye,l;if(He("overview"),ze("ภาพรวม"),It(e).includes("executive")){vo(e);return}const{getPendingExamRequestCount:o}=await Ie(async()=>{const{getPendingExamRequestCount:s}=await import("./api-Bf4Tf4Cp.js");return{getPendingExamRequestCount:s}},__vite__mapDeps([0,1,2,3,4])),{getMyDonationRequests:d}=await Ie(async()=>{const{getMyDonationRequests:s}=await import("./api-Bf4Tf4Cp.js");return{getMyDonationRequests:s}},__vite__mapDeps([0,1,2,3,4])),{getUnreadNotifications:x}=await Ie(async()=>{const{getUnreadNotifications:s}=await import("./api-Bf4Tf4Cp.js");return{getUnreadNotifications:s}},__vite__mapDeps([0,1,2,3,4])),[w,g,b,_,L,E,I,f,u,y]=await Promise.all([e?$t(e.id).catch(()=>[]):Wt().catch(()=>[]),kt((e==null?void 0:e.id)??null).catch(()=>[]),De().catch(()=>({})),e?o(e.id).catch(()=>0):Promise.resolve(0),e?d(e.id).catch(()=>[]):Promise.resolve([]),e?x(e.id).catch(()=>[]):Promise.resolve([]),e?Gs(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?zs(e.teacher_code).catch(()=>null):Promise.resolve(null),e?Ie(()=>import("./sports-portals.js_v_10.22-bWq0s5k1.js"),__vite__mapDeps([41,6,20,1,18,21,22,2,10])).then(s=>s.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1}),(ve=window._pp5AcademicTerms)!=null&&ve.length?Promise.resolve(window._pp5AcademicTerms):Ss().catch(()=>[])]),v=parseInt(b.academicYear??2568),h=parseInt(b.semester??1),D=g.filter(s=>s.academic_year==null||Number(s.academic_year)===v&&Number(s.semester)===h),$=Is(y,b),B=At({academic_year:v,semester:h});let K=B;try{const s=localStorage.getItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`);$.some(t=>At(t)===s)&&(K=s)}catch{}const T=Ps(b.semester_start);Xe&&(clearInterval(Xe),Xe=null),Ge&&(clearInterval(Ge),Ge=null),Ke&&(clearInterval(Ke),Ke=null),Ve&&(clearInterval(Ve),Ve=null),Ye&&(clearInterval(Ye),Ye=null);const[k,M,J,pe,Q]=await Promise.all([e?_t(e.id,v,h).catch(()=>[]):Promise.resolve([]),e?Es(e.id).catch(()=>[]):Promise.resolve([]),Cs().catch(()=>[]),js().catch(()=>[]),e?Ls(v,h).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries(pe.map(s=>[s.id,s]));const ue=window._classroomMapGlobal,be={};M.forEach(s=>{be[s.teacher_schedule_id]||(be[s.teacher_schedule_id]=[]),be[s.teacher_schedule_id].push(s.class_id)});const me=Object.fromEntries(g.map(s=>[s.id,s])),de=Object.fromEntries(J.map(s=>[s.period_no,s])),ge=new Date().getDay(),c=k.filter(s=>s.day_of_week===ge&&(be[s.id]??[]).length>0).map(s=>{const t=(s.period_no??1)+(s.span_periods??1)-1;return{...s,linkedClasses:(be[s.id]??[]).map(i=>me[i]).filter(Boolean),period:de[s.period_no],actualEndPeriod:de[t]??de[s.period_no]}}).sort((s,t)=>s.period_no-t.period_no),F=s=>{var i,m;const t=nt((i=s.period)==null?void 0:i.start_time,(m=s.actualEndPeriod)==null?void 0:m.end_time);return t.label.includes("กำลังสอน")?0:t.label.startsWith("เสร็จ")?2:1},U=c.find(s=>F(s)===0)??null,le=[...c].filter(s=>s!==U).sort((s,t)=>F(s)-F(t)||s.period_no-t.period_no),re=a.filter(s=>s.category==="สามัญ"),H=L.find(s=>s.package_type==="donation"&&s.status==="approved"),Z=L.filter(s=>s.package_type==="donation"&&s.status==="approved").reduce((s,t)=>s+(t.amount??0),0),ce=(s,t)=>{const i=parseInt(s,10);return Number.isFinite(i)&&i>0?i:t},R=()=>{const s=String(b.donationStickerTiers??"").trim();return ce(b.donationMinAmount,99),ce(b.donationAmountStep,50),(s?s.split(`
`).filter(Boolean).map(p=>{const[j,z,q,X,ee]=p.split("|").map(xe=>xe.trim());return{amount:ce(j,0),sticker:z||"🏅",title:q||`ผู้สนับสนุน ${j} บาท`,note:X||"",color:ee||""}}).filter(p=>p.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([p,j,z,q,X])=>({amount:p,sticker:j,title:z,note:q,color:X}))).sort((p,j)=>p.amount-j.amount).map((p,j)=>{const z=b[`donationStickerImg${j+1}`]??"";return z&&/^https?:\/\//.test(z)?{...p,sticker:z}:p})},se=s=>{if(!s)return"";const t=parseInt(s.slice(1,3),16),i=parseInt(s.slice(3,5),16),m=parseInt(s.slice(5,7),16);return`border:2px solid ${s};box-shadow:0 0 0 4px rgba(${t},${i},${m},0.25),0 4px 20px rgba(${t},${i},${m},0.18);`},G=()=>{const s=String(b.donationSpecialFeatures??"").trim(),t=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return s?s.split(`
`).filter(Boolean).map(i=>{const m=i.split("|").map(p=>p.trim());return{icon:m[0]||"✨",text:m[1]||m[0]||i,minTier:parseInt(m[2])||1}}).filter(i=>i.text):t.map(([i,m,p])=>({icon:i,text:m,minTier:p}))};let V=null,te=0,oe="",fe="",he="border border-gray-200 shadow-md";if(H&&b.quotaMode==="school_sponsored"){const s=R(),t=Z,i=[...s].reverse().find(p=>t>=p.amount)??s[0],m=Math.max(0,...L.filter(p=>p.package_type==="donation"&&p.status==="approved").map(p=>Number.parseInt(String(p.donation_tier??""),10)).filter(p=>Number.isInteger(p)&&p>=1&&p<=s.length));if(te=Math.max(i?s.indexOf(i)+1:0,m),V=s[te-1]??null,V){fe=se(V.color),he="";const p=String(V.sticker??""),j=/^https?:\/\//.test(p)?`<img src="${p}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${p}</span>`,z=V.color?`color:${V.color};`:"color:#f59e0b;";oe=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${j}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${z}">
            ${V.note||V.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async s=>{if(!s)return;const{renderClassDetail:t}=await Ie(async()=>{const{renderClassDetail:i}=await import("./teacher-views-classes-Dfj6NaFe.js").then(m=>m.t);return{renderClassDetail:i}},__vite__mapDeps([35,6,0,1,2,3,4,10,11,25,36,31,21,16,22,37,30,27,28,29,38]));t(e,s)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:s}=await Ie(async()=>{const{openSmartClassroomLanding:t}=await import("./teacher-views-smart-classroom-DhSgYFBn.js");return{openSmartClassroomLanding:t}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]));s(e)};const _e=T>0?(()=>{const s=new Date(b.semester_start);s.setDate(s.getDate()+(T-1)*7);const t=new Date(s);t.setDate(t.getDate()+6);const i=p=>`${String(p.getDate()).padStart(2,"0")}/${String(p.getMonth()+1).padStart(2,"0")}`,m=`📅 สัปดาห์ที่ ${T} (${i(s)} – ${i(t)}) · ภาคเรียนที่ ${h}/${v}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${m}</span><span class="mr-10 lg:mr-16">${m}</span>
      </div>
    </div>
    <style>@keyframes teacher-week-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}</style>
    `})():"",Ee=It(e);window._openHomeroomPopup=()=>{var t;(t=document.getElementById("homeroom-popup"))==null||t.remove();const s=document.createElement("div");s.id="homeroom-popup",s.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",s.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">🏠 ห้องที่ปรึกษาของฉัน</p>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" onclick="this.closest('.fixed').remove()">×</button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3">
        ${a.map(i=>`
        <div class="border border-gray-100 rounded-xl p-3">
          <p class="font-bold text-gray-800">${i.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${i.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">${i.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${i.category==="สามัญ"?`
            <button onclick="window._openLifeSkillScore('${i.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>`:`
            <button onclick="window._openReligionScore('${i.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${i.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-4">ไม่มีห้องที่ปรึกษา</p>'}
      </div>
    </div>`,document.body.appendChild(s),s.addEventListener("click",i=>{i.target===s&&s.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:s}=await Ie(async()=>{const{openTeacherShirtSizeModal:t}=await import("./sports-portals.js_v_10.22-bWq0s5k1.js");return{openTeacherShirtSizeModal:t}},__vite__mapDeps([41,6,20,1,18,21,22,2,10]));s(e)};const Ce=[...new Set(g.map(s=>s.class_name).filter(Boolean))].sort(),Ne=JSON.stringify(Ce).replace(/"/g,"&quot;"),n=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:Ee.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:re.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${Ne}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:a.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:u.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],C={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-competition-manager":["#D9E7F8","#4C86C6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},A=(window._teacherOverviewSystems||[]).filter(s=>s.show).map(s=>{const[t,i]=C[s.key]||["#E4E4E7","#9C9CA3"];return{key:s.key,id:s.id,show:!0,emoji:s.emoji,label:s.label,from:t,to:i,badge:s.badge,onclick:s.href?`window.location.href='${s.href}'`:`window._navTo('${s.nav}')`}}),S=[...n,...A].filter(s=>s.show),N=(e==null?void 0:e.overview_prefs)||null,O=N?S.filter(s=>!(N.hiddenKeys||[]).includes(s.key)).sort((s,t)=>{const i=N.iconOrder||[],m=i.indexOf(s.key),p=i.indexOf(t.key);return m===-1&&p===-1?0:m===-1?1:p===-1?-1:m-p}):S,Y=O.map(s=>es(s,b.iconTileStyle)).join("");window._openOverviewCustomizer=()=>ho(e,S,a);const P=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">หน้าภาพรวมและงานประจำวันใช้ภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนและเอกสาร ปพ.5 ของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="teacher-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Ts($,K,B)}
        </select>
      </label>
    </div>
  </section>`;if(Te(`<div class="animate-fade">
    ${P}

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${E.length?(()=>{const s={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},t={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},i={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},m={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},p=[...new Set(E.map(q=>q.metric))].map(q=>`<span style="background:${i[q]??"#f3f4f6"};color:${t[q]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${s[q]??q}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(E.filter(q=>q.supervisor).map(q=>[q.supervisor_id,q.supervisor])).values()].map(q=>m[q.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${E.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${p}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${e==null?void 0:e.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})():""}

    <!-- กำลังสอนอยู่ (ย้ายมาไว้ในโซนเร่งด่วนบนสุด) -->
    ${U?(()=>{var i,m;const s=U.period?`${U.period.start_time.substring(0,5)}–${U.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${U.period_no}`,t=((i=U.linkedClasses[0])==null?void 0:i.id)??null;return`
    <div id="active-class-card" class="mb-4 bg-white rounded-2xl p-5 ${t?"cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150":""}"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);"
      ${t?`onclick="window._goToActiveClass(${t})"`:""}>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${s}</span>
        ${t?'<span class="text-[11px] text-emerald-500 ml-auto">เข้าห้องเรียน →</span>':""}
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${U.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${U.linkedClasses.map(p=>{var j;return((j=p.master_subjects)==null?void 0:j.subject_name)??p.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${U.linkedClasses.map(p=>{const j=p.classroom_id?ue[p.classroom_id]:null;return p.class_name+(j?` · 📍${j.building} ห้อง ${j.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${Tt((m=U.actualEndPeriod)==null?void 0:m.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`})():""}

    ${_e}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="group relative overflow-hidden rounded-[24px] ${he} bg-gradient-to-r from-white via-emerald-50/20 to-white px-5 pt-5 pb-5 mb-5 flex items-center gap-5 transition-all duration-200 hover:shadow-lg" style="${fe}">
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
          ${a.map(s=>`<span class="px-2 py-0.5 rounded-full text-xs ${s.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"} font-medium">🏠 ${s.main_room}</span>`).join("")}
          ${a.length===0?'<span class="px-2 py-0.5 rounded-full text-xs bg-gray-50 text-gray-400">ไม่มีห้องที่ปรึกษา</span>':""}
        </div>
      </div>
      <!-- สติกเกอร์ -->
      <div class="relative z-10">${oe}</div>
    </div>

    <!-- สรุปของฉัน — การ์ดแนวนอนแบบ responsive (เลื่อนซ้าย-ขวาได้บนมือถือ) -->
    <section class="mb-5" aria-labelledby="teacher-overview-summary-title">
      <div class="flex items-center justify-between gap-3 mb-2 px-1">
        <h3 id="teacher-overview-summary-title" class="text-sm font-bold text-gray-700">📊 สรุปของฉัน</h3>
        <span class="text-[10px] text-gray-400 sm:hidden">เลื่อนซ้าย-ขวาเพื่อดูทั้งหมด</span>
      </div>
      <div class="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 px-1 -mx-1 lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:overflow-visible lg:pb-0">
        ${[{key:"courses",label:"คอร์สวิชาของฉัน",value:w.length,hint:"รายวิชาที่เปิดสอน",icon:"📖",from:"#D1FAE5",to:"#6EE7B7",ink:"#065F46",onclick:"window._navTo('my-courses')"},{key:"classes",label:"ห้องเรียน",value:D.length,hint:`ภาคเรียนที่ ${h}/${v}`,icon:"🏫",from:"#DBEAFE",to:"#93C5FD",ink:"#1E40AF",onclick:"window._navTo('my-classes')"},{key:"homeroom",label:"ห้องที่ปรึกษา",value:a.length,hint:"ห้องที่ดูแลอยู่",icon:"🏠",from:"#FEF3C7",to:"#FCD34D",ink:"#92400E",onclick:"window._openHomeroomPopup()"},{key:"requests",label:"คำร้องรออนุมัติ",value:_,hint:_>0?"มีรายการที่ต้องตรวจสอบ":"ไม่มีรายการค้าง",icon:"🔔",from:_>0?"#FEE2E2":"#F3F4F6",to:_>0?"#FDA4AF":"#D1D5DB",ink:_>0?"#991B1B":"#4B5563",onclick:"window._navTo('requests')"},{key:"smartClassroom",label:"Smart Classroom",value:"เปิดห้องสอนสด",hint:"เครื่องมือช่วยจัดการชั้นเรียน",icon:"👑",from:"#EDE9FE",to:"#C4B5FD",ink:"#5B21B6",onclick:"window._openSmartClassroomLanding()"}].map(s=>`
          <button type="button" onclick="${s.onclick}"
            aria-label="${s.label} ${s.value}"
            class="group relative isolate min-h-[132px] min-w-[245px] sm:min-w-[280px] lg:min-w-0 snap-start overflow-hidden rounded-[22px] border-0 p-4 text-left shadow-md cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style="background:linear-gradient(135deg,${s.from} 0%,${s.to} 100%);--card-ink:${s.ink};--tw-ring-color:${s.ink};">
            <span aria-hidden="true" class="pointer-events-none absolute -right-8 -bottom-12 h-36 w-36 rounded-full opacity-35 transition-transform duration-300 group-hover:scale-125"
              style="background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.9),rgba(255,255,255,.08) 56%,transparent 57%);box-shadow:0 0 0 22px rgba(255,255,255,.12),0 0 0 44px rgba(255,255,255,.08);"></span>
            <span aria-hidden="true" class="pointer-events-none absolute right-2 -bottom-3 text-7xl sm:text-8xl leading-none opacity-80 drop-shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">${Ds(b,`overview:${s.key}`,s.icon,"max-w-[7rem] max-h-[7rem] object-contain")}</span>
            <span aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-white/40"></span>
            <span class="relative z-10 block pr-20">
              <span class="block text-xs font-extrabold tracking-wide" style="color:var(--card-ink)">${s.label}</span>
              <span class="mt-1 block ${typeof s.value=="number"?"text-3xl":"text-xl"} font-black leading-none tracking-tight" style="color:var(--card-ink)">${s.value}</span>
              <span class="mt-2 block truncate text-[11px] font-semibold opacity-75" style="color:var(--card-ink)">${s.hint}</span>
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
      ${O.length>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Y}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${Ht(I,e.teacher_code,f)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${Ft(Q,b.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${Zt[ge]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${k.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':M.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${c.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${k.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":M.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${k.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:M.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${le.map((s,t)=>{var j,z;const i=nt((j=s.period)==null?void 0:j.start_time,(z=s.actualEndPeriod)==null?void 0:z.end_time),m=i.label.startsWith("เสร็จ"),p=s.period?`${s.period.start_time.substring(0,5)}–${(s.actualEndPeriod??s.period).end_time.substring(0,5)}`:`คาบ ${s.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${m?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${m?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${m?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${s.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${m?"text-gray-400":"text-gray-700"} truncate">
                  ${s.linkedClasses.map(q=>{var X;return((X=q.master_subjects)==null?void 0:X.subject_name)??q.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${s.linkedClasses.map(q=>{const X=q.classroom_id?ue[q.classroom_id]:null;return q.class_name+(X?` 📍${X.building} ห้อง ${X.room_number}`:"")}).join(" · ")} · ${p}
                </p>
              </div>
              <span id="today-cd-${t}" class="text-xs font-medium flex-shrink-0 ${i.cls}">${i.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),(ye=document.getElementById("donor-sticker-btn"))==null||ye.addEventListener("click",()=>{if(!V)return;const s=G(),t=V.color||"#f59e0b",i=parseInt(t.slice(1,3),16),m=parseInt(t.slice(3,5),16),p=parseInt(t.slice(5,7),16),j=String(V.sticker??""),z=/^https?:\/\//.test(j)?`<img src="${j}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${j}</div>`,q=document.createElement("div");q.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",q.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${i},${m},${p},0.85),rgba(${i},${m},${p},1))">
          ${z}
          <p class="text-white font-bold text-base">${V.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${V.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${s.map(X=>te>=(X.minTier??1)?`<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${X.icon}</span>
                     <span class="leading-snug">${X.text}</span>
                   </div>`:`<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${X.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${X.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${te<4?`
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>`:""}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${i},${m},${p},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(q),q.addEventListener("click",X=>{X.target===q&&q.remove()})}),(l=document.getElementById("teacher-overview-term-switcher"))==null||l.addEventListener("change",s=>{var i,m;const t=s.target.value;try{localStorage.setItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`,t)}catch{}t===B?(i=window._navTo)==null||i.call(window,"overview"):(m=window._navTo)==null||m.call(window,"grades")}),c.length>0&&(Xe=setInterval(()=>{le.forEach((s,t)=>{var p,j;const i=document.getElementById(`today-cd-${t}`);if(!i){clearInterval(Xe);return}const m=nt((p=s.period)==null?void 0:p.start_time,(j=s.actualEndPeriod)==null?void 0:j.end_time);i.textContent=m.label,i.className=`text-xs font-medium flex-shrink-0 ${m.cls}`})},3e4)),U&&(Ge=setInterval(()=>{var i,m,p,j;const s=document.getElementById("active-class-countdown");if(!s){clearInterval(Ge);return}nt((i=U.period)==null?void 0:i.start_time,(m=U.actualEndPeriod)==null?void 0:m.end_time).label.startsWith("เสร็จ")?(clearInterval(Ge),(p=document.getElementById("active-class-card"))==null||p.remove()):s.textContent=Tt((j=U.actualEndPeriod)==null?void 0:j.end_time)},1e3)),document.getElementById("teacher-live-clock")){const s=()=>{const t=new Date,i=document.getElementById("teacher-live-clock");if(!i){clearInterval(Ke);return}i.textContent=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`};s(),Ke=setInterval(s,1e3)}e&&I.length&&(Ve=setInterval(()=>{const s=document.getElementById("wen-duty-card");if(!s){clearInterval(Ve),Ve=null;return}s.innerHTML=Ht(I,e.teacher_code,f)},3e4)),e&&Q.length&&(Ye=setInterval(()=>{const s=document.getElementById("wcal-upcoming-card");if(!s){clearInterval(Ye),Ye=null;return}s.innerHTML=Ft(Q,b.semester_start)},1e3))}function ho(e,a,o){var I,f;(I=document.getElementById("overview-customizer-modal"))==null||I.remove();const d=(e==null?void 0:e.overview_prefs)||null;let x=a.map(u=>u.key);if((f=d==null?void 0:d.iconOrder)!=null&&f.length){const u=new Set(x),y=d.iconOrder.filter(h=>u.has(h)),v=x.filter(h=>!y.includes(h));x=[...y,...v]}const w=new Set(((d==null?void 0:d.hiddenKeys)||[]).filter(u=>x.includes(u))),g=Object.fromEntries(a.map(u=>[u.key,u])),b=document.createElement("div");b.id="overview-customizer-modal",b.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const _=()=>x.map((u,y)=>{const v=g[u];if(!v)return"";const h=w.has(u),D=v.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${h?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${v.from},${v.to})">${v.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${D}</span>
      <button type="button" data-oc-up="${u}" ${y===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${u}" ${y===x.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${u}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${h?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${h?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),L=()=>{const u=b.querySelector("#oc-list");u&&(u.innerHTML=_()),E()},E=()=>{b.querySelectorAll("[data-oc-toggle]").forEach(u=>u.onclick=()=>{const y=u.dataset.ocToggle;w.has(y)?w.delete(y):w.add(y),L()}),b.querySelectorAll("[data-oc-up]").forEach(u=>u.onclick=()=>{const y=x.indexOf(u.dataset.ocUp);y>0&&([x[y-1],x[y]]=[x[y],x[y-1]],L())}),b.querySelectorAll("[data-oc-down]").forEach(u=>u.onclick=()=>{const y=x.indexOf(u.dataset.ocDown);y<x.length-1&&([x[y+1],x[y]]=[x[y],x[y+1]],L())})};b.innerHTML=`
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
    </div>`,document.body.appendChild(b),E(),b.addEventListener("click",u=>{u.target===b&&b.remove()}),b.querySelector("#oc-close").addEventListener("click",()=>b.remove()),b.querySelector("#oc-save").addEventListener("click",async()=>{const u=b.querySelector("#oc-save");u.disabled=!0,u.textContent="กำลังบันทึก...";try{const y={iconOrder:x,hiddenKeys:[...w]};await Lt(e.id,{overview_prefs:y}),e.overview_prefs=y,b.remove(),W("บันทึกการปรับแต่งแล้ว","success"),Gt(e,o)}catch(y){console.error(y),W("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),u.disabled=!1,u.textContent="บันทึก"}}),b.querySelector("#oc-reset").addEventListener("click",async()=>{try{await Lt(e.id,{overview_prefs:null}),e.overview_prefs=null,b.remove(),W("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),Gt(e,o)}catch(u){console.error(u),W("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function yo(e,a,o,d,x){const w=[d==null?void 0:d.samaiLogoBwUrl,d==null?void 0:d.samaiLogoUrl].map(ge=>String(ge??"").trim()).find(Boolean)||"",g=w?`${w}${w.includes("?")?"&":"?"}docLogo=${Date.now()}`:"",b=Number(e.credit??1),_=b*2,L=b*2*20,I=String(e.grade_level??"").replace(/[^0-9]/g,""),f=["AGM","AGMVOC"].includes(e.subject_group??""),u=x.find(ge=>ge.dept_code===e.dept)??{},y=u.dept_name??e.dept??"",v=u.head_name??"",h=u.head_sign_url??"",D=d.samaiSchoolName??"",$=d.samaiDirectorName??"",B=d.samaiDirectorSignUrl??"",K=f?d.agmAcademicHeadName??d.samaiAcademicHeadName??"":d.samaiAcademicHeadName??"",T=new Date,k=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],M=`${T.getDate()} ${k[T.getMonth()]} พ.ศ. ${T.getFullYear()+543}`,J=d.academicYear??T.getFullYear()+543,pe=d.semester??1,Q=(o==null?void 0:o.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",ue=a.map(ge=>ge.class_name).join(", "),be=I+(ue?" "+ue:""),me=f?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",de=`<!DOCTYPE html>
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
    ${g?`<img src="${g}" style="width:100%;height:100%;object-fit:contain;" onerror="this.style.display='none'"/>`:'<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${r(D)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${r(M)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${pe} ปีการศึกษา ${J}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${r(D)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${r((o==null?void 0:o.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${r(Q)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${r(y)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${r(e.subject_name??"")}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${r(e.subject_code??"")}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${b}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${_}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${L}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${f?"อิสลามศึกษา":"มัธยมศึกษา"}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${r(be)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${r((o==null?void 0:o.full_name)??"")}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${h?`<img src="${r(h)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${r(v)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${r(y)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${r(K)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${r(me)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${B?`<img src="${r(B)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${r($)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${r(D)}</div>

</div>
</body></html>`;Qt(de)}export{yo as _openLessonPlanApproval,Ht as _renderWenDutyCard,Ft as _renderWorkCalendarUpcoming,Wo as openCourseDocPage2Modal,Uo as openScheduleCourseReview,ta as renderAnnouncementsView,ma as renderAttendance,ua as renderAttendanceGrid,Ao as renderClassDetail,sa as renderClassEditForm,Lo as renderClassForm,Io as renderCourseDocLangConfig,Jo as renderCourseForm,Qo as renderExamDocuments,ia as renderGrades,da as renderGradesGrid,ba as renderLifeSkillScore,oa as renderMyClasses,Yo as renderMyCourses,ga as renderPrayerRoomMonitor,xa as renderPrayerScore,Ko as renderProfile,Xo as renderProfileSetup,fa as renderReadingScore,ca as renderRequests,aa as renderSchedule,na as renderScheduleBuilder,To as renderScheduleGrid,la as renderScoreColumns,Gt as renderTeacherOverview};
