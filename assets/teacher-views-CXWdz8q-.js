const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-BQaMiX9s.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-smart-classroom-CfucFm92.js","assets/ui-C-ZO4RB5.js","assets/donation-utils-DtZioNqn.js","assets/quiz-api-CcBTN73s.js","assets/score-qr-scanner-CfASQNHx.js","assets/teacher-views-attendance-Cj5tnwUe.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-utils-DMDc0a8I.js","assets/teacher-views-grades-DS4Q-oBA.js","assets/score-display-CQ4dUIPx.js","assets/regrade-menu-window-CMWxZTka.js","assets/teacher-views-quiz-monitor-YRR2F4vr.js","assets/teacher-views-quiz-analytics-qDnmSBpf.js","assets/teacher-views-dashboard-CkhmMu83.js","assets/teacher-views-classes-ot6k83TX.js","assets/browser-JP79f-a9.js","assets/sync-C11n1XX8.js","assets/pp5-doc-ycuHtLuK.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/ai-prompt-gate-D6R7FVed.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-DqOOmpks.js","assets/council-api-CE_cGxTN.js","assets/lesson-plan-archive-vmnvIcd4.js","assets/sports-portals.js_v_10.22-DRUGF2wU.js","assets/sports-awards-admin-6oCPrlSb.js","assets/azizgames-modal-CZNvwg6f.js"])))=>i.map(i=>d[i]);
import{a as V,g as je,_ as Ne}from"./ui-C-ZO4RB5.js";import{getDepartments as et,getTeachers as Xt,getSubjectCoTeachers as hs,getSubjectCatalog as Kt,getSystemConfig as De,getReligionGroups as ys,updateMyProfile as St,getMySchedule as Et,getMySubjects as Ct,createSubject as ws,getCourseDocPage2 as _s,getMasterSubjects as Qt,getMyClasses as jt,getUniqueRooms as Zt,getUniqueReligionRooms as es,getHomeroomTeachers as ts,getCourseDocLangSettings as $s,getCourseSyllabus as ks,getLessonPlans as Ss,getTeachersWithSignatures as Es,getClassScheduleLinks as ss,deleteSyllabusItem as Cs,updateSyllabusItem as js,deleteLessonPlan as Ls,findCurriculumStandards as Is,saveCourseDocPage2 as As,getClassStudents as Ts,getAcademicTerms as Ns,getPeriods as Bs,getClassrooms as Ms,getWorkCalendarEvents as Ps,getExecutiveOverviewStats as Ds,updateTeacher as Nt}from"./api-BQaMiX9s.js";import{c as Os,a as Bt,r as Rs}from"./academic-term-switcher-CWR_JlXz.js";import{c as os,s as vt}from"./supabase-BV-W2lsh.js";import"./sync-C11n1XX8.js";import{o as as}from"./print-overlay-BVfxEd6n.js";import{_DAYS_TH_FULL as ns,setActiveNav as We,setTitle as Ue,setContent as Me,SELECT_CLS as Le,INPUT_CLS as be,CREDIT_OPTS as qs,GRADE_OPTS as xt,_htmlEsc as l,formatPhone as ut,renderSubjectVisual as Fs,_dutyCountdownInfo as Hs,_teacherPositionList as Mt,_currentWeek as zs,renderIconTile as ls,_activeRemainingDisplay as Pt,renderConfiguredVisual as Gs,_countdownInfo as dt}from"./teacher-views-utils-DMDc0a8I.js";import{b as Oo,e as Ro,a as qo,r as Fo}from"./teacher-views-classes-ot6k83TX.js";import{f as ca,c as pa,g as ma,h as ua,i as ba,d as ga}from"./teacher-views-classes-ot6k83TX.js";import{Q as rs,R as is}from"./regrade-menu-window-CMWxZTka.js";import{i as ze,r as Dt,c as Ys,f as lt,o as Vs,a as Ws}from"./pp5-doc-ycuHtLuK.js";import{uploadTeacherPhoto as Us}from"./storage-CuUjCgvI.js";import{c as Js}from"./ai-prompt-gate-D6R7FVed.js";import{_ as Xs}from"./teacher-views-grades-DS4Q-oBA.js";import{r as fa,a as va,b as ha}from"./teacher-views-grades-DS4Q-oBA.js";import{renderAttendance as wa,renderAttendanceGrid as _a,renderLifeSkillScore as $a,renderPrayerRoomMonitor as ka,renderPrayerScore as Sa,renderReadingScore as Ea}from"./teacher-views-attendance-Cj5tnwUe.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./score-display-CQ4dUIPx.js";import"./confetti-loader-BAN5Lv-C.js";import"./score-qr-scanner-CfASQNHx.js";import"./leave-time-CrS9gT63.js";const ds="https://zhjqkylesnhcotpkzoxr.supabase.co",cs="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let Ge=null;function Ot(e,o,t){const i=new Date(o+"T00:00:00"),x=new Date(e+"T00:00:00"),k=Math.floor((x-i)/864e5);if(k<0)return null;const g=Math.floor(k/7)+1;return g<=t?g:null}function Ks(e,o,t){const[i,x]=e.includes(":")?e.split(":"):[null,e];return(i===null||i===t)&&x===o}async function Qs(e){if(!e)return null;Ge||(Ge=os(ds,cs));const[o,t,i]=await Promise.all([Ge.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),Ge.from("duty_points").select("assigned_to"),Ge.from("settings").select("week_start_date,total_weeks").single()]),x=i.data||{},k=x.week_start_date,g=x.total_weeks||20;if(!k)return null;const u=new Date().toISOString().slice(0,10),S=Ot(u,k,g)||1;if(S<=5)return{grade:"A",score:100,week:S};const A=String(e);let j=0;for(const E of t.data||[])for(const L of E.assigned_to||[])(L.includes(":")?L.split(":")[1]:L)===A&&j++;if(j===0)return null;const T={};for(const E of o.data||[]){const L=Ot(E.date,k,g);L!==null&&(T[L]||(T[L]=[]),T[L].push(E))}const h=5,_=Math.min(S,g-2);let v=0;for(let E=1;E<=_;E++)if(E<=h)v+=100;else{const L=T[E]||[],K=L.length,D=L.filter($=>$.is_late).length,ge=K-D,ae=Math.min(100,Math.round(K/j*100)),pe=K>0?Math.max(0,Math.round(ge/K*100)):100;v+=Math.round(ae*.6+pe*.4)}const w=Math.round(v/_);return{grade:w>=90?"A":w>=75?"B":"C",score:w,week:S}}async function Zs(e){if(!e)return[];Ge||(Ge=os(ds,cs));const{data:o,error:t}=await Ge.from("duty_points").select("name, time, assigned_to");if(t||!o)return[];const i=String(e),x=ns[new Date().getDay()];return o.filter(k=>(k.assigned_to??[]).some(g=>Ks(g,i,x))).map(k=>{const[g,u]=String(k.time??"").split("-").map(S=>S.trim());return{name:k.name,time:k.time,start_time:g,end_time:u}})}const bt=e=>{const o=String((e==null?void 0:e.dept_label)??"").trim(),t=String((e==null?void 0:e.subject_code)??"").trim(),i=o+" "+t+" "+String((e==null?void 0:e.subject_name_arabic)??"");return/อิสลามศึกษา|อัดดีนียะห์/u.test(o)||/^(ศอ|อก|อศ|ฟป)/u.test(t)?"ISL":/ภาษาอาหรับ/u.test(o)||/^ภอ/u.test(t)||/العربية/u.test(i)?"ARB":/ภาษามลายู/u.test(o)||/^มล/u.test(t)||/الملايو/u.test(i)?"MLB":/ภาษาไทย/u.test(o)?"THAI":/ภาษาต่างประเทศ/u.test(o)?"ENG":/คณิตศาสตร์/u.test(o)?"MATH":/วิทยาศาสตร์/u.test(o)?"SC":/สังคม|อิญติมาอียะห์|อิจญ์ติมาอียะห์/u.test(o)?"SOC":/ศิลปะ/u.test(o)?"ART":/สุขศึกษา|พลศึกษา/u.test(o)?"HEALTH":/การงานอาชีพ|เทคโนโลยี/u.test(o)?e.subject_group==="ACDMVOC"?"VOC":"OCC":""},Se=e=>String(e??"").toLocaleLowerCase("th-TH").normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu,""),ft=e=>{const t=String(e??"").trim().match(/(ปวช\.?|ปวส\.?|อป\.?|ม\.?)\s*([1-6])/iu);if(!t)return"";const i=t[1].replace(/\s+/g,"");return i.startsWith("ม")?`ม.${t[2]}`:`${i}${t[2]}`},eo=(e,o,t)=>{if(!o)return!1;if(bt(e)===o)return!0;const i=lt(t,e.subject_group,o);return!!(i!=null&&i.dept_name&&Se(e.dept_label)===Se(i.dept_name))};function ps({prefix:e,samaiRooms:o,religionRooms:t,homeroomRooms:i,assignments:x,teacherId:k,academicYear:g,semester:u}){const S=(A,j,T,h,m)=>{const _=`${e}-advisor-rooms-${T}`,v=`${e}-room-${T}`,w=(i??[]).filter(E=>E.category===A&&Number(E.academic_year)===Number(g)&&Number(E.semester)===Number(u)),O=new Map((x??[]).filter(E=>E.category===A).map(E=>[E.main_room,E]));return`<div id="${e}-room-${T}-wrap" class="space-y-2">
      <button type="button" data-advisor-room-toggle="${_}" aria-expanded="false"
        class="w-full flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 px-4 py-3 text-left transition">
        <span class="font-semibold text-sm text-gray-700">${m} ครูที่ปรึกษา${h}</span>
        <span class="flex items-center gap-2 text-xs text-gray-400">
          <span data-advisor-room-count="${v}">0 ห้อง</span><span data-advisor-room-chevron="${_}">▾</span>
        </span>
      </button>
      <div id="${_}" class="hidden border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-52 overflow-y-auto">
        <p class="text-[11px] text-gray-400 mb-2">เลือกได้มากกว่า 1 ห้อง · ห้องที่มีครูคนอื่นรับผิดชอบอยู่จะเลือกไม่ได้</p>
        ${j.length?j.map(E=>{var pe;const L=O.get(E),K=L&&Number(L.teacher_id)===Number(k),D=!!L&&!K,ge=((pe=L==null?void 0:L.teachers)==null?void 0:pe.full_name)||"มีครูที่ปรึกษาแล้ว",ae=w.some($=>$.main_room===E);return`<label class="flex items-start gap-2 text-sm rounded-lg px-2 py-1.5 ${D?"bg-gray-50 text-gray-400 cursor-not-allowed":"cursor-pointer hover:bg-emerald-50 hover:text-emerald-700"}">
            <input type="checkbox" name="${v}" value="${l(E)}" data-advisor-room="${v}" ${ae?"checked":""} ${D?"disabled":""} class="text-emerald-600 rounded mt-0.5" />
            <span class="min-w-0 flex-1"><span class="block">${l(E)}</span>${D?`<span class="block text-[11px] text-gray-400">🔒 ${l(ge)}</span>`:""}</span>
          </label>`}).join(""):`<p class="text-xs text-gray-400">ยังไม่มีห้อง${h}</p>`}
      </div>
    </div>`};return`<div class="border-t border-gray-100 pt-4 space-y-3">
    <label class="block text-sm font-semibold text-gray-700">🏠 ห้องที่ปรึกษา</label>
    ${S("สามัญ",o,"samai","สามัญ","🏫")}
    ${S("ศาสนา",t,"religion","ศาสนา","🕌")}
  </div>`}function ms(e=document){const o=()=>e.querySelectorAll("[data-advisor-room-count]").forEach(t=>{const i=t.dataset.advisorRoomCount,x=e.querySelectorAll(`input[data-advisor-room="${i}"]:checked`).length;t.textContent=`${x} ห้อง`});e.querySelectorAll("[data-advisor-room-toggle]").forEach(t=>{t.addEventListener("click",()=>{const i=e.querySelector(`#${t.dataset.advisorRoomToggle}`);if(!i)return;const x=i.classList.contains("hidden");i.classList.toggle("hidden",!x),t.setAttribute("aria-expanded",String(x));const k=e.querySelector(`[data-advisor-room-chevron="${t.dataset.advisorRoomToggle}"]`);k&&(k.textContent=x?"▴":"▾")})}),e.querySelectorAll("input[data-advisor-room]").forEach(t=>t.addEventListener("change",o)),o()}async function ta(e){We("my-courses"),Ue("คอร์สวิชาของฉัน","courses"),Me(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[o,t,i]=await Promise.all([e?Ct(e.id):Qt().catch(()=>[]),e?jt(e.id).catch(()=>[]):Promise.resolve([]),De().catch(()=>({}))]),x=o,k=h=>t.filter(m=>{var _;return Number(m.course_id??((_=m.master_subjects)==null?void 0:_.id))===Number(h)}),g=h=>Number.isInteger(h)?String(h):Number(h).toFixed(1).replace(/\.0$/,""),u=h=>{const m=Number(h.credit),_=Number.isFinite(m)&&m>0;return{roomCount:k(h.id).length,credit:_?g(m):"—",periodsPerWeek:_?g(m*2):"—",periodsPerTerm:_?g(m*40):"—"}},S=h=>String(h.dept??h.subject_group??"").trim()||"รายวิชาอื่น ๆ",A=[...o.reduce((h,m)=>{const _=S(m);return h.has(_)||h.set(_,[]),h.get(_).push(m),h},new Map).entries()].sort(([h],[m])=>h.localeCompare(m,"th",{numeric:!0})),j=(h,m,_,v)=>`<div class="rounded-xl border ${v} px-3 py-2.5 min-w-0">
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
          <div class="pointer-events-none absolute right-3 bottom-4 w-20 h-20 flex items-end justify-end text-6xl opacity-80 drop-shadow-md" aria-label="ไอคอนประจำวิชา">${Fs(h,i,"max-w-full max-h-full object-contain")}</div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${j("🏫",m.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${j("🎓",m.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${j("🗓️",m.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${j("⏱️",m.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
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
          <p class="text-sm font-bold text-gray-700">รายวิชาที่เปิดสอน ${o.length} คอร์ส · ${t.length} ห้องเรียน</p>
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
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(h=>{h.addEventListener("click",()=>{window._deleteCourse(Number(h.dataset.id),h.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(h=>{h.addEventListener("click",()=>{Xs(parseInt(h.dataset.sid),h.dataset.sname,t)})}),document.querySelectorAll(".course-workspace-btn").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.dataset.sid,10),_=o.find(v=>v.id===m);_&&us(e,_,t)})}),document.querySelectorAll(".lesson-plan-btn").forEach(h=>{h.addEventListener("click",async()=>{const m=parseInt(h.dataset.sid),_=o.find(K=>K.id===m);if(!_)return;const v=t.filter(K=>{var D;return K.course_id===m||((D=K.master_subjects)==null?void 0:D.id)===m}),{getSystemConfig:w,getDepartments:O}=await Ne(async()=>{const{getSystemConfig:K,getDepartments:D}=await import("./api-BQaMiX9s.js");return{getSystemConfig:K,getDepartments:D}},__vite__mapDeps([0,1,2,3,4])),[E,L]=await Promise.all([w().catch(()=>({})),O().catch(()=>[])]);Lo(_,v,e,E,L)})}),document.querySelectorAll(".pp5-course-btn").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.dataset.sid),_=t.filter(v=>{var w;return v.course_id===m||((w=v.master_subjects)==null?void 0:w.id)===m});_.length===1?openPP5Doc(_[0].id):Vs(_)})})}catch{V("โหลดข้อมูลไม่สำเร็จ","error")}}function to({subject:e,teacher:o,syllabusItems:t,roomNames:i=[],semester:x,academicYear:k,semesterStart:g,semesterEnd:u,showNotesContent:S=!0,departmentHead:A,signatureTeachers:j=[]}){var se,ce;const T=[...t??[]].sort((G,ue)=>Number(G.week_start)-Number(ue.week_start)),h=S===!0,m=l,_=G=>{const ue=String(G??"").replace(/\s+/g," ").trim();if(!ue)return"";const Z=typeof Intl.Segmenter=="function"?[...new Intl.Segmenter("th",{granularity:"grapheme"}).segment(ue)].map(ye=>ye.segment):Array.from(ue),F=60;if(Z.length<=F)return ue;const X=Z.slice(0,F).join(""),xe=X.lastIndexOf(" ");return`${(xe>=F*.65?X.slice(0,xe):X).trimEnd()}…`},v=G=>G?new Date(`${G}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],w=(G,ue)=>{const Z=v(G),F=v(ue);if(!Z.length||!F.length)return"—";const[X,xe,ye]=Z,[_e,$e,Ce]=F;return ye===Ce&&xe===$e?`${X} - ${_e} ${$e} ${Ce}`:ye===Ce?`${X} ${xe} - ${_e} ${$e} ${Ce}`:`${X} ${xe} ${ye} - ${_e} ${$e} ${Ce}`},O=G=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(String(g??"")))return null;const[ue,Z,F]=g.split("-").map(Number),X=new Date(ue,Z-1,F+(G-1)*7),xe=new Date(ue,Z-1,F+G*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(u??""))&&xe>new Date(`${u}T00:00:00`)&&xe.setTime(new Date(`${u}T00:00:00`).getTime());const ye=_e=>`${_e.getFullYear()}-${String(_e.getMonth()+1).padStart(2,"0")}-${String(_e.getDate()).padStart(2,"0")}`;return{start:ye(X),end:ye(xe)}},E=(G,ue=Number(G.week_start))=>{const Z=O(ue),F=Number(G.week_start)===ue&&Number(G.week_end??G.week_start)===ue,X=(F?G.date_start:null)||(Z==null?void 0:Z.start),xe=(F?G.date_end:null)||(Z==null?void 0:Z.end);return w(X,xe)},L=Math.min(30,Math.max(0,...T.map(G=>Number(G.week_end)||Number(G.week_start)||0))),K=Array.from({length:L},(G,ue)=>{var _e;const Z=ue+1,F=T.find($e=>Z>=Number($e.week_start)&&Z<=Number($e.week_end)),X=(_e=F==null?void 0:F.source_json)==null?void 0:_e.week_type,xe=O(Z),ye=F?E(F,Z):w(xe==null?void 0:xe.start,xe==null?void 0:xe.end);return`<tr><td class="week">${Z}</td><td class="date-cell">${m(ye)}</td><td>${m((F==null?void 0:F.topic)||(X==="midterm_exam"?"สอบกลางภาค":X==="final_exam"?"สอบปลายภาค":X==="break"?"หยุด/ไม่มีการเรียน":""))}</td><td>${m((F==null?void 0:F.teaching_methods)||(X!=null&&X.includes("exam")?"ทดสอบ/ประเมินผล":""))}</td><td class="note-cell">${h?m(_(F==null?void 0:F.notes)):""}</td></tr>`}).join(""),D=e??{},ge=D.periods_per_week??(Number(D.credit)>0?Number(D.credit)*2:null),ae=[...new Set(i.map(G=>String(G??"").trim()).filter(Boolean))].join(" , "),pe=j.filter(G=>G==null?void 0:G.signature_url),$=(o==null?void 0:o.signature_url)??((se=pe.find(G=>Number(G.id)===Number(o==null?void 0:o.id)))==null?void 0:se.signature_url)??"",R=[...A!=null&&A.head_sign_url?[{id:`dept-${A.id}`,name:A.head_name||"หัวหน้ากลุ่มสาระ",signature_url:A.head_sign_url}]:[],...pe].filter((G,ue,Z)=>Z.findIndex(F=>F.signature_url===G.signature_url)===ue),de=`<option value="">เว้นช่องไว้เซ็นเอง</option>${$?`<option value="${m($)}" data-name="${m((o==null?void 0:o.full_name)??"")}" selected>ใช้ลายเซ็นที่บันทึกไว้</option>`:""}`,ee=`<option value="">เว้นช่องไว้เซ็นเอง</option>${R.map(G=>`<option value="${m(G.signature_url)}" data-name="${m(G.name??G.full_name??"")}" ${G.signature_url===(A==null?void 0:A.head_sign_url)?"selected":""}>${m(G.name??G.full_name??"ผู้ลงนาม")}</option>`).join("")}`,ve=window.open("","_blank");if(!ve){V("เบราว์เซอร์บล็อกหน้าต่างตัวอย่าง กรุณาอนุญาต Pop-up","warning");return}const re=5,he=new URL("pp5-form-logo.png",window.location.href).href;ve.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>กำหนดการสอน ${m(D.subject_name)}</title><style>
    @page{size:A4;margin:13mm}*{box-sizing:border-box}body{font-family:"Sarabun",Tahoma,sans-serif;color:#111;margin:0;font-size:11pt;line-height:1.5;background:#eef1f5}.toolbar{position:sticky;top:0;z-index:2;padding:10px;background:#f3f4f6;text-align:center}.toolbar button{border:0;border-radius:8px;background:#1d4ed8;color:white;padding:10px 20px;font-weight:bold;font-size:14px;cursor:pointer}.toolbar label{display:inline-flex;align-items:center;gap:6px;margin:4px;padding:7px;border:1px solid #d1d5db;border-radius:8px;background:white;font-size:12px}.toolbar select{max-width:230px;padding:6px;border:1px solid #d1d5db;border-radius:6px}.page{width:184mm;height:271mm;min-height:271mm;margin:0 auto 8mm;padding:8mm 5mm;background:white;box-shadow:0 1px 8px rgba(15,23,42,.12)}.cover{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;padding-top:12mm;break-after:page;page-break-after:always}.cover-logo{width:32mm;height:32mm;object-fit:contain;filter:grayscale(1);mix-blend-mode:multiply;margin-bottom:9mm}.cover h1{font-size:25pt;line-height:1.2;color:#167a4a;margin:0 0 15mm}.cover .cover-info{align-self:center;width:min(100%,145mm);text-align:left}.cover .course{font-size:16pt;font-weight:bold;text-align:center;margin:0 0 8mm}.cover p{font-size:14pt;margin:2.5mm 0}.cover .signatures{width:100%;margin-top:auto;padding-top:16mm;text-align:center;font-size:13pt}.cover .signatures p{margin:10mm 0;text-align:center}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:middle}.schedule{break-before:page;page-break-before:always}.table{width:100%;table-layout:fixed;border-collapse:collapse;margin-top:4mm;font-size:9.5pt}.table col.col-week{width:10mm}.table col.col-date{width:31mm}.table col.col-topic{width:53mm}.table col.col-methods{width:45mm}.table col.col-notes{width:35mm}.table th,.table td{border:1px solid #555;padding:2mm 2.2mm;vertical-align:top;overflow-wrap:anywhere}.table th{background:#e8eefb;text-align:center}.table .week{text-align:center;white-space:nowrap}.table .date-cell{text-align:center;vertical-align:middle;white-space:nowrap;font-size:9pt}.table .note-cell{font-size:9pt;line-height:1.35}.table tr{break-inside:avoid;page-break-inside:avoid}.table thead{display:table-header-group}.table .doc-title th{border:0;background:white;font-size:18pt;padding:0;text-align:center}.table .doc-meta th{border:0;background:white;font-size:10pt;font-weight:normal;padding:0;text-align:center}@media print{body{background:white}.toolbar{display:none}.page{margin:0;width:auto;height:auto;min-height:0;padding:0;box-shadow:none}.cover{height:271mm;min-height:271mm;padding:12mm 5mm;break-after:page;page-break-after:always}.schedule{break-before:page;page-break-before:always}}
  </style></head><body><div class="toolbar"><label>ลายเซ็นครู<select id="cover-teacher-sign">${de}</select></label><label>หัวหน้ากลุ่มสาระ<select id="cover-dept-sign">${ee}</select></label><button onclick="window.print()">🖨️ พิมพ์ / บันทึก PDF</button></div><section class="page cover"><img class="cover-logo" src="${m(he)}" alt="ตราโรงเรียน"><h1>กำหนดการสอน</h1><div class="cover-info"><p class="course">รายวิชา ${m(D.subject_name||"................................")} (${m(D.subject_code||".............")})</p><p>ครูผู้สอน ${m((o==null?void 0:o.full_name)||"................................")}</p><p>ชั้น ${m(D.grade_level||"....................")}</p><p>ห้องเรียน ${m(ae||"................................")}</p><p>จำนวน ${m(ge||"........")} คาบ/สัปดาห์</p><p>ภาคเรียนที่ ${m(x||"....")} ปีการศึกษา ${m(k||"........")}</p></div><div class="signatures"><p>ลงชื่อ <img id="cover-teacher-sign-img" class="sign-img" src="${m($)}" alt="" style="${$?"":"display:none"}"> ครูผู้สอน</p><p>ลงชื่อ <img id="cover-dept-sign-img" class="sign-img" src="${m((A==null?void 0:A.head_sign_url)??"")}" alt="" style="${A!=null&&A.head_sign_url?"":"display:none"}"> หัวหน้ากลุ่มสาระการเรียนรู้</p><p>ลงชื่อ......................................................................ผู้อำนวยการโรงเรียน</p></div></section><section class="page schedule"><table class="table"><colgroup><col class="col-week"><col class="col-date"><col class="col-topic"><col class="col-methods"><col class="col-notes"></colgroup><thead><tr class="doc-title"><th colspan="${re}">กำหนดการสอน</th></tr><tr class="doc-meta"><th colspan="${re}">รายวิชา ${m(D.subject_name||"—")} รหัส ${m(D.subject_code||"—")} ${m(D.grade_level||"")} · คุณครู ${m((o==null?void 0:o.full_name)||"—")}</th></tr><tr class="doc-meta"><th colspan="${re}">ภาคเรียนที่ ${m(x||"—")} ปีการศึกษา ${m(k||"—")}</th></tr><tr><th>สัปดาห์ที่</th><th>วัน/เดือน/ปี</th><th>เนื้อหา</th><th>รูปแบบการสอน</th><th>หมายเหตุ</th></tr></thead><tbody>${K}</tbody></table></section><script>for(const role of ['teacher','dept']){const select=document.querySelector('#cover-'+role+'-sign'),img=document.querySelector('#cover-'+role+'-sign-img'),key='pp5-course-sign-'+role+'-${Number(D.id)||0}';const previous=localStorage.getItem(key);if(previous!==null&&[...select.options].some(option=>option.value===previous))select.value=previous;const update=()=>{img.src=select.value;img.style.display=select.value?'':'none';localStorage.setItem(key,select.value)};select.addEventListener('change',update);update()}<\/script></body></html>`),ve.document.close();const d=[...ve.document.querySelectorAll(".cover .cover-info p")],z=String(ae||D.grade_level||"").trim()||"....................";d[2]&&(d[2].textContent=`ชั้น ${z}`),(ce=d[3])==null||ce.remove();const te=ve.document.querySelector(".schedule .doc-meta th");te&&(te.textContent=`รายวิชา ${D.subject_name||"—"} รหัส ${D.subject_code||"—"} ${z} · คุณครู ${(o==null?void 0:o.full_name)||"—"}`);const ie=["ครูผู้สอน","หัวหน้ากลุ่มสาระการเรียนรู้","ผู้อำนวยการโรงเรียน"];[...ve.document.querySelectorAll(".cover .signatures p")].forEach((G,ue)=>{const Z=G.querySelector("img");G.className="signature-row",G.replaceChildren();const F=ve.document.createElement("span");F.textContent="ลงชื่อ";const X=ve.document.createElement("span");X.className="signature-line",Z&&X.append(Z);const xe=ve.document.createElement("span");xe.textContent=ie[ue],G.append(F,X,xe)});const W=ve.document.createElement("style");W.textContent=".cover .signatures{width:100%;margin-top:auto;padding-top:12mm;text-align:center;font-size:13pt}.cover .signature-row{display:flex;align-items:flex-end;justify-content:center;gap:2mm;margin:8mm 0;white-space:nowrap}.cover .signature-line{position:relative;display:inline-flex;width:92mm;height:15mm;align-items:flex-end;justify-content:center;border-bottom:1px dotted #111}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:bottom}",ve.document.head.append(W)}async function us(e,o,t){var A,j,T,h,m,_,v,w,O,E;(A=document.getElementById("course-workspace-modal"))==null||A.remove();const i=Number(o.id),x=t.filter(L=>{var K;return Number(L.course_id??((K=L.master_subjects)==null?void 0:K.id))===i}),k={class_name:"ทุกห้องในคอร์ส",course_id:i,master_subjects:o},g=document.createElement("div");g.id="course-workspace-modal",g.className="fixed inset-0 z-[95] bg-gray-50 flex items-stretch justify-stretch",g.innerHTML=`<div class="bg-gray-50 w-full h-full overflow-hidden flex flex-col">
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
  </div>`,document.body.appendChild(g);const u=()=>g.remove();g.querySelector("[data-close]").addEventListener("click",u),g.addEventListener("click",L=>{L.target===g&&u()});const S=g.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:L,canUseSmartClassroomForClass:K},{openLessonPlanAIWorkspace:D,openLessonPlanDocument:ge,openLessonPlansPrint:ae},{openLessonPlanArchiveCenter:pe}]=await Promise.all([Ne(()=>import("./teacher-views-smart-classroom-CfucFm92.js"),__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])),Ne(()=>import("./lesson-plan-ai-workspace-DqOOmpks.js"),__vite__mapDeps([27,0,1,2,3,4,6,24,28,23])),Ne(()=>import("./lesson-plan-archive-vmnvIcd4.js").then(a=>a.l),__vite__mapDeps([29,0,1,2,3,4,24,6,27,28,23]))]),[$,R,de,ee]=await Promise.all([ks(i).catch(()=>[]),Ss(i).catch(()=>[]),L(e),De().catch(()=>({}))]),ve=x.filter(a=>K(de.unlocked,e,a.id)),re=de.unlocked||ve.length>0,he=()=>us(e,o,t),[d,z]=await Promise.all([Es().catch(()=>[]),et().catch(()=>[])]),te=((j=x[0])==null?void 0:j.master_subjects)??{},ie=String(te.dept??o.dept??(e==null?void 0:e.dept)??"").trim().toLowerCase(),oe=String(te.learning_area??"").trim(),W=String(te.subject_group??"").toUpperCase(),se=W==="ACDM"?"สามัญ":W==="ACDMVOC"?"สามัญปวช":["AGM","AGMVOC"].includes(W)?"ศาสนา":"",ce=z.filter(a=>String(a.dept_code??"").trim().toLowerCase()===ie||String(a.dept_name??"").trim().toLowerCase()===ie),G=se?ce.filter(a=>a.category===se):ce,ue=oe&&G.find(a=>String(a.head_name??"").trim()===oe)||G[0]||oe&&z.find(a=>String(a.head_name??"").trim()===oe)||null,Z=d.find(a=>String(a.full_name??"").trim()===oe),F=ue?{...ue,head_name:oe||(ue.head_name==="ทีมบริหาร"?"":ue.head_name),head_sign_url:(Z==null?void 0:Z.signature_url)||(oe&&ue.head_name!==oe?null:ue.head_sign_url)}:oe?{head_name:oe,head_sign_url:(Z==null?void 0:Z.signature_url)??null}:null,X=x.map(a=>{var H;const c=String(a.class_name??`ห้อง ${a.id}`).trim(),p=String(((H=a.master_subjects)==null?void 0:H.grade_level)??o.grade_level??"").trim(),f=p&&!Se(c).startsWith(Se(p))?`${p} ${c}`:c;return{id:a.id,classId:a.id,label:f,roomNames:[f]}}).filter(a=>a.label),xe=[...new Set(X.map(a=>a.label))],ye=/^\d{4}-\d{2}-\d{2}$/.test(String(ee.semester_start??""))?ee.semester_start:null,_e=Number(o.academic_year??ee.academicYear??ee.academic_year),$e=Number(o.semester??ee.semester),[Ce,Oe]=Number.isInteger(_e)&&[1,2].includes($e)?await Promise.all([Et(e.id,_e,$e).catch(()=>[]),ss(e.id).catch(()=>[])]):[[],[]],Re=a=>{const c=new Set(Oe.filter(p=>Number(p.class_id)===Number(a)).map(p=>Number(p.teacher_schedule_id)));return[...new Set(Ce.filter(p=>c.has(Number(p.id))).map(p=>Number(p.day_of_week)).map(p=>p===0?7:p).filter(p=>Number.isInteger(p)&&p>=1&&p<=7&&p!==6))]},n=[...new Set(x.flatMap(a=>Re(a.id)))],I=a=>{if(!ye)return null;const[c,p,f]=ye.split("-").map(Number),H=new Date(c,p-1,f+(a-1)*7),P=new Date(c,p-1,f+a*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(ee.semester_end??""))&&P>new Date(`${ee.semester_end}T00:00:00`)&&P.setTime(new Date(`${ee.semester_end}T00:00:00`).getTime());const J=me=>`${me.getFullYear()}-${String(me.getMonth()+1).padStart(2,"0")}-${String(me.getDate()).padStart(2,"0")}`;return{start:J(H),end:J(P)}},B=a=>a?new Date(`${a}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],C=a=>{const c=B(a);return c.length?`${c[0]} ${c[1]} ${c[2]}`:"—"},M=(a,c)=>{const p=B(a),f=B(c);return!p.length||!f.length?"—":p[1]===f[1]&&p[2]===f[2]?`${p[0]} - ${f[0]} ${f[1]} ${f[2]}`:p[2]===f[2]?`${p[0]} ${p[1]} - ${f[0]} ${f[1]} ${f[2]}`:`${p[0]} ${p[1]} ${p[2]} - ${f[0]} ${f[1]} ${f[2]}`},q={teaching:"เรียน",midterm_exam:"สอบกลางภาค",final_exam:"สอบปลายภาค",break:"หยุด/ไม่มีการเรียน"};let Y=null,N=!0;try{N=localStorage.getItem(`pp5-schedule-show-notes-${i}`)!=="false"}catch{}const ne=()=>$.length?$.map(a=>{var qe,Je;const c=((qe=a.source_json)==null?void 0:qe.week_type)??"teaching",p=a.unit_title??((Je=a.source_json)==null?void 0:Je.unit_title),f=I(a.week_start),H=I(a.week_end??a.week_start),P=a.date_start||(f==null?void 0:f.start)||"",J=a.date_end||(H==null?void 0:H.end)||"";if(String(a.id)===String(Y)){const Te=(ke,Be,He="text",vs="")=>`<input data-schedule-field="${ke}" type="${He}" value="${l(Be??"")}" class="w-full min-w-24 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs ${vs}" />`,Fe=(ke,Be)=>`<textarea data-schedule-field="${ke}" rows="2" class="w-full min-w-32 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${l(Be??"")}</textarea>`;return`<tr data-schedule-row="${l(a.id)}" class="border-t border-blue-100 align-top bg-blue-50/50">
          <td class="px-2 py-2 text-xs"><div class="flex items-center gap-1">${Te("week_start",a.week_start,"number","max-w-20")}<span>–</span>${Te("week_end",a.week_end??a.week_start,"number","max-w-20")}</div><select data-schedule-field="week_type" class="mt-2 w-full rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${Object.entries(q).map(([ke,Be])=>`<option value="${ke}" ${ke===c?"selected":""}>${Be}</option>`).join("")}</select></td>
          <td class="w-[138px] min-w-[138px] px-2 py-2 text-center"><div class="space-y-1">${Te("date_start",P,"date")}${Te("date_end",J,"date")}</div></td>
          <td class="px-2 py-2 space-y-1">${Te("topic",a.topic,"text","min-w-48")}<label class="block text-[10px] text-gray-500">หน่วยการเรียนรู้${Te("unit_title",p,"text")}</label></td>
          <td class="px-2 py-2">${Fe("teaching_methods",a.teaching_methods)}</td>
          <td class="px-2 py-2">${Fe("notes",a.notes)}</td>
          <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="save" data-schedule-id="${l(a.id)}" class="rounded-lg bg-emerald-600 px-2 py-1.5 text-[10px] font-bold text-white">บันทึก</button><button type="button" data-schedule-action="cancel" class="rounded-lg border bg-white px-2 py-1.5 text-[10px] font-bold text-gray-600">ยกเลิก</button></div></td>
        </tr>`}const me=`สัปดาห์ ${a.week_start}${a.week_end!==a.week_start?`–${a.week_end}`:""}`,fe=M(P,J),Ie=q[c]??"เรียน",Ae=c==="teaching"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-800";return`<tr class="border-t border-blue-100 align-top">
        <td class="px-3 py-3 text-xs font-bold whitespace-nowrap">${l(me)}<span class="block mt-1 px-2 py-1 rounded-lg ${Ae} text-[10px] w-fit">${l(Ie)}</span></td>
        <td class="w-[138px] min-w-[138px] px-3 py-3 text-center text-xs whitespace-nowrap">${l(fe)}</td>
        <td class="px-3 py-3 text-xs min-w-48"><p class="font-bold text-gray-800">${l(a.topic)}</p>${p?`<p class="text-[11px] text-blue-700 mt-1">${l(p)}</p>`:""}</td>
        <td class="px-3 py-3 text-xs min-w-36 whitespace-pre-wrap">${l(a.teaching_methods??"—")}</td>
        <td class="px-3 py-3 text-xs min-w-28 whitespace-pre-wrap">${l(a.notes??"—")}</td>
        <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="edit" data-schedule-id="${l(a.id)}" class="rounded-lg border border-blue-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-blue-700">แก้ไข</button><button type="button" data-schedule-action="delete" data-schedule-id="${l(a.id)}" class="rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-red-600">ลบ</button></div></td>
      </tr>`}).join(""):"",we=ve.map(a=>`<option value="${a.id}">${l(a.class_name??`ห้อง ${a.id}`)}</option>`).join(""),Ee=a=>{const c=Number(a),p=new Map;return $.forEach(f=>{var Ie;const H=(Ie=f.source_json)==null?void 0:Ie.class_id,P=Number(H),J=H!=null&&H!==""&&Number.isInteger(P)&&P>0;if(J&&P!==c)return;const me=`${f.week_start}-${f.week_end??f.week_start}`,fe=p.get(me);(!fe||J&&!fe.isScoped)&&p.set(me,{item:f,isScoped:J})}),[...p.values()].map(f=>f.item)};S.innerHTML=`<nav class="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-4" aria-label="ส่วนออกแบบการสอน">
      <button type="button" data-course-tab="schedule" class="course-tab rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white">📘 กำหนดการสอน</button>
      <button type="button" data-course-tab="plans" class="course-tab rounded-xl border border-violet-200 bg-white px-4 py-2.5 text-sm font-bold text-violet-800">📝 แผนการจัดการเรียนรู้หน้าเดียว</button>
    </nav>
    <section data-course-panel="schedule" class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-blue-950">📘 กำหนดการสอนทั้งภาคเรียน</h3><p class="text-xs text-blue-700/70 mt-1">ภาพรวมรายสัปดาห์ของรายวิชา ใช้ร่วมกับ Smart Classroom ในห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2"><label class="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 text-xs text-blue-800"><input id="cw-schedule-show-notes" type="checkbox" class="h-4 w-4 accent-blue-700" ${N?"checked":""}> แสดงเนื้อหาหมายเหตุในเอกสาร</label><button id="cw-schedule-preview" class="min-h-[44px] px-4 rounded-xl border border-blue-200 bg-white text-blue-800 text-xs font-bold">👁️ ตัวอย่างเอกสารทั้งหมด</button><button id="cw-ai-schedule" class="min-h-[44px] px-4 rounded-xl ${re?"bg-blue-700 hover:bg-blue-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${re?"":"disabled"}>🤖 สร้างด้วย AI</button></div>
          </div>
          ${re?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${ye?`<p class="mt-3 text-[11px] text-blue-700">ช่วงวันที่คำนวณจากวันเปิดภาคเรียนที่ตั้งค่าไว้: ${C(ye)} · สัปดาห์ที่ 1 เริ่มวันนี้</p>`:'<p class="mt-3 text-[11px] text-amber-700">ยังไม่ได้ตั้งค่าวันเปิดภาคเรียน ระบบจะแสดงวันที่จากกำหนดการเดิมจนกว่าจะตั้งค่าวันเริ่มภาคเรียน</p>'}
          ${$.length?`<div class="mt-4 max-h-[68vh] overflow-auto rounded-xl border border-blue-100 bg-white"><table class="w-full min-w-[780px] table-fixed text-left"><colgroup><col><col class="w-[138px]"><col><col><col><col class="w-[76px]"></colgroup><thead class="sticky top-0 bg-blue-50 text-[10px] font-extrabold text-blue-900"><tr><th class="px-3 py-2">สัปดาห์</th><th class="w-[138px] px-3 py-2 text-center">วัน/เดือน</th><th class="px-3 py-2">เนื้อหา</th><th class="px-3 py-2">รูปแบบการสอน</th><th class="px-3 py-2">หมายเหตุ</th><th class="w-[76px] px-2 py-2">จัดการ</th></tr></thead><tbody id="cw-schedule-rows">${ne()}</tbody></table></div>`:'<div class="mt-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>'}
    </section>

    <section data-course-panel="plans" class="hidden rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-violet-950">📝 แผนการจัดการเรียนรู้หน้าเดียว</h3><p class="text-xs text-violet-700/70 mt-1">แผนรายครั้งที่อ้างอิงหัวข้อจากกำหนดการสอน ส่วนบันทึกหลังสอนและลายเซ็นแยกตามห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2 justify-end"><button id="cw-plan-archive" class="min-h-[44px] px-4 rounded-xl ${R.length?"border border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50":"border border-gray-200 bg-gray-100 text-gray-400"} text-xs font-bold flex-shrink-0" ${R.length?"":"disabled"}>📦 ส่ง/จัดเก็บรายสัปดาห์</button><button id="cw-plans-print-all" class="min-h-[44px] px-4 rounded-xl ${R.length?"border border-violet-200 bg-white text-violet-800 hover:bg-violet-50":"border border-gray-200 bg-gray-100 text-gray-400"} text-xs font-bold flex-shrink-0" ${R.length?"":"disabled"}>🖨️ พิมพ์/บันทึกแผนทั้งภาคเรียน</button><button id="cw-ai-plan" class="min-h-[44px] px-4 rounded-xl ${re?"bg-violet-700 hover:bg-violet-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${re?"":"disabled"}>✨ สร้างแผนด้วย AI</button></div>
          </div>
          ${re?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${R.length?`<div class="mt-4 space-y-2">${R.map(a=>`<div class="flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-3 py-3"><button class="cw-plan-row min-w-0 flex-1 text-left hover:text-violet-800 transition" data-plan-id="${a.id}"><p class="text-sm font-bold text-gray-800">${l(a.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${a.week_start}${a.week_end!==a.week_start?`–${a.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button><button type="button" class="cw-plan-delete shrink-0 rounded-lg border border-red-200 bg-white px-3 py-2 text-[10px] font-bold text-red-600" data-plan-id="${a.id}">ลบ</button></div>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
    </section>
    ${R.length&&ve.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้อง Smart Classroom</h3><p class="text-xs text-gray-400 mt-1">แผนใช้ร่วมกันในรายวิชา แต่เปิดบันทึกหลังสอนเฉพาะห้องที่มีสิทธิ์</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${we}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`;const U=a=>{S.querySelectorAll("[data-course-panel]").forEach(c=>c.classList.toggle("hidden",c.dataset.coursePanel!==a)),S.querySelectorAll("[data-course-tab]").forEach(c=>{const p=c.dataset.courseTab===a;c.className=`course-tab rounded-xl px-4 py-2.5 text-sm font-bold ${p?a==="schedule"?"bg-blue-700 text-white":"bg-violet-700 text-white":"border border-gray-200 bg-white text-gray-600"}`})};S.querySelectorAll("[data-course-tab]").forEach(a=>a.addEventListener("click",()=>U(a.dataset.courseTab)));const Q=S.querySelector("#cw-schedule-rows");Q==null||Q.addEventListener("click",async a=>{const c=a.target.closest("[data-schedule-action]");if(!c)return;const p=c.dataset.scheduleId,f=$.find(ke=>String(ke.id)===String(p));if(!f)return;if(c.dataset.scheduleAction==="delete"){if(!confirm(`ลบกำหนดการสอนสัปดาห์ ${f.week_start}${f.week_end!==f.week_start?`–${f.week_end}`:""} เรื่อง "${f.topic}"?`))return;c.disabled=!0;try{await Cs(f.id),V("ลบกำหนดการสอนแล้ว","success"),he()}catch(ke){c.disabled=!1,V(`ลบไม่สำเร็จ: ${je(ke)}`,"error")}return}if(c.dataset.scheduleAction==="edit"){Y=p,Q.innerHTML=ne();return}if(c.dataset.scheduleAction==="cancel"){Y=null,Q.innerHTML=ne();return}if(c.dataset.scheduleAction!=="save")return;const H=c.closest("[data-schedule-row]"),P=ke=>{var Be;return((Be=H.querySelector(`[data-schedule-field="${ke}"]`))==null?void 0:Be.value)??""},J=Number(P("week_start")),me=Number(P("week_end")),fe=P("week_type"),Ie=P("date_start")||null,Ae=P("date_end")||null,qe=P("topic").trim();if(!Number.isInteger(J)||J<1||!Number.isInteger(me)||me<J){V("ช่วงสัปดาห์ไม่ถูกต้อง","warning");return}if(!qe){V("กรุณาระบุหัวข้อที่จะสอน","warning");return}if(!Object.hasOwn(q,fe)){V("เลือกประเภทสัปดาห์ให้ถูกต้อง","warning");return}if(Ie&&Ae&&Ae<Ie){V("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");return}if($.some(ke=>{if(String(ke.id)===String(f.id))return!1;const Be=Number(ke.week_start),He=Number(ke.week_end??ke.week_start);return J<=He&&me>=Be})){V("ช่วงสัปดาห์นี้ซ้ำกับรายการอื่น กรุณาปรับเลขสัปดาห์","warning");return}const Te=P("unit_title").trim(),Fe={course_id:i,week_start:J,week_end:me,date_start:Ie,date_end:Ae,topic:qe,teaching_methods:P("teaching_methods").trim()||null,notes:P("notes").trim()||null,source_json:{...f.source_json??{},week_start:J,week_end:me,date_start:Ie,date_end:Ae,week_type:fe,unit_title:Te}};c.disabled=!0,c.textContent="กำลังบันทึก…";try{await js(f.id,Fe),Object.assign(f,Fe,{unit_title:Te||null}),Y=null,Q.innerHTML=ne(),V("บันทึกแถวกำหนดการแล้ว","success")}catch(ke){c.disabled=!1,c.textContent="บันทึก",V(`บันทึกไม่สำเร็จ: ${je(ke)}`,"error")}}),(T=S.querySelector("#cw-schedule-show-notes"))==null||T.addEventListener("change",a=>{N=a.currentTarget.checked;try{localStorage.setItem(`pp5-schedule-show-notes-${i}`,String(N))}catch{}}),(h=S.querySelector("#cw-ai-schedule"))==null||h.addEventListener("click",()=>{if(!X.length){V("รายวิชานี้ยังไม่มีห้องเรียนสำหรับสร้างกำหนดการสอน","warning");return}const a=document.createElement("div");a.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",a.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับสร้างกำหนดการสอน</h3><p class="mt-1 text-xs text-gray-500">กำหนดการจะถูกบันทึกแยกตามห้องที่เลือก เพื่อไม่ให้หัวข้อของแต่ละชั้นปะปนกัน</p><select data-schedule-ai-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">ทุกห้องเหมือนกัน</option>${X.map((p,f)=>`<option value="${f}">${l(p.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-schedule-ai-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-schedule-ai-room-open class="min-h-[42px] rounded-xl bg-blue-700 text-xs font-bold text-white sm:col-span-2">เริ่มสร้างกำหนดการ</button></div></div>`,document.body.appendChild(a);const c=()=>a.remove();a.querySelector("[data-schedule-ai-room-cancel]").addEventListener("click",c),a.addEventListener("click",p=>{p.target===a&&c()}),a.querySelector("[data-schedule-ai-room-open]").addEventListener("click",()=>{var me;const p=(me=a.querySelector("[data-schedule-ai-room-select]"))==null?void 0:me.value,f=p==="all"?X:[X[Number(p)]].filter(Boolean),H=f.map(fe=>Number(fe.classId)).filter(fe=>Number.isInteger(fe)&&fe>0),P=f.map(fe=>fe.label),J=p==="all"?k:x.find(fe=>Number(fe.id)===H[0])??k;c(),D({teacher:e,cls:J,courseId:i,syllabusItems:$,lessonPlans:R,currentWeek:1,initialMode:"schedule",semesterStart:ye,semesterEnd:ee.semester_end,scheduledDays:n,targetClassIds:H,targetClassLabels:P,onSaved:he})})}),(m=S.querySelector("#cw-ai-plan"))==null||m.addEventListener("click",()=>{if(!X.length){V("รายวิชานี้ยังไม่มีห้องเรียนสำหรับสร้างแผน","warning");return}const a=document.createElement("div");a.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",a.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับสร้างแผน</h3><p class="mt-1 text-xs text-gray-500">ต้องเลือกห้องก่อนสร้างแผน หากเลือกทุกห้อง ระบบจะสร้างแผนชุดเดียวกันแยกให้แต่ละห้อง</p><select data-plan-ai-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">ทุกห้องเหมือนกัน</option>${X.map((p,f)=>`<option value="${f}">${l(p.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-plan-ai-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-plan-ai-room-open class="min-h-[42px] rounded-xl bg-violet-700 text-xs font-bold text-white sm:col-span-2">เริ่มสร้างแผน</button></div></div>`,document.body.appendChild(a);const c=()=>a.remove();a.querySelector("[data-plan-ai-room-cancel]").addEventListener("click",c),a.addEventListener("click",p=>{p.target===a&&c()}),a.querySelector("[data-plan-ai-room-open]").addEventListener("click",()=>{var me;const p=(me=a.querySelector("[data-plan-ai-room-select]"))==null?void 0:me.value,f=p==="all"?X:[X[Number(p)]].filter(Boolean),H=f.map(fe=>Number(fe.classId)).filter(fe=>Number.isInteger(fe)&&fe>0),P=f.map(fe=>fe.label),J=p==="all"?k:x.find(fe=>Number(fe.id)===H[0])??k;c(),D({teacher:e,cls:J,courseId:i,syllabusItems:$,lessonPlans:R,currentWeek:1,initialMode:"plan",semesterStart:ye,semesterEnd:ee.semester_end,scheduledDays:n,targetClassIds:H,targetClassLabels:P,onSaved:he})})});const r=a=>ae({plans:R,subject:o,teacher:e,roomNames:a.flatMap(c=>c.roomNames??[]),roomGroups:a,semester:ee.semester??o.semester,academicYear:ee.academicYear??ee.academic_year??o.academic_year,departmentHead:F});(_=S.querySelector("#cw-plan-archive"))==null||_.addEventListener("click",()=>pe({subject:o,teacher:e,classes:x,plans:R,semesterStart:ye,semesterEnd:ee.semester_end,termSchedule:Ce,scheduleLinks:Oe,academicYear:ee.academicYear??ee.academic_year??o.academic_year,semester:ee.semester??o.semester})),(v=S.querySelector("#cw-plans-print-all"))==null||v.addEventListener("click",()=>{const a=X;if(a.length<=1){r(a);return}const c=document.createElement("div");c.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",c.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องเรียนสำหรับพิมพ์แผน</h3><p class="mt-1 text-xs text-gray-500">เลือกห้องเดียว หรือเปิดทุกห้องเพื่อสลับแท็บและบันทึกเป็น PDF เดียว</p><select data-plan-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">เปิดทุกห้อง</option>${a.map((f,H)=>`<option value="${H}">${l(f.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-plan-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-plan-room-open class="min-h-[42px] rounded-xl bg-violet-700 text-xs font-bold text-white sm:col-span-2">เปิดแผน</button></div></div>`,document.body.appendChild(c);const p=()=>c.remove();c.querySelector("[data-plan-room-cancel]").addEventListener("click",p),c.addEventListener("click",f=>{f.target===c&&p()}),c.querySelector("[data-plan-room-open]").addEventListener("click",()=>{var H;const f=(H=c.querySelector("[data-plan-room-select]"))==null?void 0:H.value;p(),r(f==="all"?a:[a[Number(f)]])})}),(w=S.querySelector("#cw-schedule-preview"))==null||w.addEventListener("click",()=>{const a=S.querySelector("#cw-schedule-show-notes");N=(a==null?void 0:a.checked)===!0;try{localStorage.setItem(`pp5-schedule-show-notes-${i}`,String(N))}catch{}if(!X.length){V("รายวิชานี้ยังไม่มีห้องเรียนสำหรับเปิดตัวอย่างเอกสาร","warning");return}const c=document.createElement("div");c.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",c.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับดูตัวอย่างเอกสาร</h3><p class="mt-1 text-xs text-gray-500">กรุณาเลือกห้องก่อนเปิดตัวอย่าง เพื่อให้หัวเอกสารและกำหนดการสอนตรงกับห้องนั้น</p><select data-schedule-preview-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm">${X.map((f,H)=>`<option value="${H}">${l(f.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-schedule-preview-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-schedule-preview-room-open class="min-h-[42px] rounded-xl bg-blue-700 text-xs font-bold text-white sm:col-span-2">เปิดตัวอย่างเอกสาร</button></div></div>`,document.body.appendChild(c);const p=()=>c.remove();c.querySelector("[data-schedule-preview-room-cancel]").addEventListener("click",p),c.addEventListener("click",f=>{f.target===c&&p()}),c.querySelector("[data-schedule-preview-room-open]").addEventListener("click",()=>{var P;const f=Number((P=c.querySelector("[data-schedule-preview-room-select]"))==null?void 0:P.value),H=X[f];H&&(p(),to({subject:o,teacher:e,syllabusItems:Ee(H.classId),roomNames:H.roomNames,semester:ee.semester??o.semester,academicYear:ee.academicYear??ee.academic_year??o.academic_year,semesterStart:ye,semesterEnd:ee.semester_end,showNotesContent:N,departmentHead:F,signatureTeachers:d}))})});let b=null;const s=S.querySelector("#cw-document-picker"),y=()=>{s&&(s.classList.add("hidden"),s.classList.remove("flex"))};S.querySelectorAll(".cw-plan-row").forEach(a=>a.addEventListener("click",()=>{b=R.find(c=>c.id===parseInt(a.dataset.planId,10))??null,!(!b||!ve.length||!s)&&(s.classList.remove("hidden"),s.classList.add("flex"))})),S.querySelectorAll(".cw-plan-delete").forEach(a=>a.addEventListener("click",async()=>{const c=R.find(p=>p.id===parseInt(a.dataset.planId,10));if(c&&confirm(`ลบแผน "${c.title}"? บันทึกหลังสอนและลายเซ็นที่ผูกกับแผนนี้จะถูกลบด้วย`)){a.disabled=!0;try{await Ls(c.id),V("ลบแผนการสอนแล้ว","success"),he()}catch(p){a.disabled=!1,V(`ลบไม่สำเร็จ: ${je(p)}`,"error")}}})),(O=S.querySelector("#cw-document-cancel"))==null||O.addEventListener("click",y),s==null||s.addEventListener("click",a=>{a.target===s&&y()}),(E=S.querySelector("#cw-document-open"))==null||E.addEventListener("click",()=>{var p;const a=parseInt((p=S.querySelector("#cw-document-class"))==null?void 0:p.value,10),c=ve.find(f=>f.id===a);!b||!c||(y(),ge({plan:b,cls:c,teacher:e,classId:c.id,currentWeek:b.week_start,semesterStart:ye,semesterEnd:ee.semester_end,scheduledDays:Re(c.id)}))})}catch(L){S.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${l(je(L))}</div>`}}const ct={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnExternalAI:"ใช้ AI ของฉัน",btnExternalAISub:"คัดลอก Prompt + วาง JSON",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 1 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["รหัสมาตรฐาน/ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},en:{key:"en",dir:"ltr",aiLang:"formal English",label:"English",title:"Course Description",close:"Close",save:"Save",saving:"Saving...",helpTitle:"Help me fill this in",helpSub:"Enter the lessons/topics below, then choose a filling method",topicLabel:"Lessons / Topics (add multiple)",topicPlaceholder:"e.g. Statistics, Exponents, Reading comprehension",addTopic:"Add topic",btnCurriculum:"Find curriculum",btnCurriculumSub:"Curriculum database",btnCurriculumLoading:"Searching...",btnAI:"Draft with AI",btnAISub:"Gemini + topics",btnAILoading:"AI is drafting...",btnExternalAI:"Use my AI",btnExternalAISub:"Copy Prompt + paste JSON",btnImg:"Read image",btnImgSub:"AI reads image",btnImgLoading:"Reading...",descLabel:"Course description / overall learning outcomes",descPlaceholder:"Write in English or another language; text direction is supported automatically",dirLabel:"Text direction",dirAuto:"Automatic",dirRTL:"Right to left",dirLTR:"Left to right",signerLabel:"Signatory",signerPlaceholder:"Head of learning area",signerHint:"Used as the learning-area head in the document",tableTitle:"Standards / Indicators / Learning outcomes",tableHint:"Rows containing text become selectable assessment items",tplBasic:"Basic: 1 column",tplExtra:"Additional: 1 column",addCol:"+ Column",addRow:"+ Row",rowHeader:"No.",delRow:"Delete",objTitle:"Assessment objectives",objHint:"(click to select)",between:"During term",mid:"Midterm",final:"Final",noOpts:"No selectable items yet",notSelected:"Not selected",colsBasic:["Standard/indicator code and full text"],colsExtra:["Learning outcomes"],colNew:e=>`Column ${e}`,pickerTitles:{mid:"Select midterm items",between:"Select during-term items",final:"Select final items"},pickerCancel:"Cancel",pickerOk:"OK",confirmOverwrite:"Searching the curriculum will overwrite existing data. Continue?",confirmAIOverwrite:"Let AI draft new content over the existing data?",confirmImgOverwrite:"Fill from the image and overwrite existing data?",confirmColChange:"Change the column format? Existing data will be fitted to the new columns.",toastSaved:"Course description saved",toastSearchOk:e=>`Found ${e} curriculum items - please review before saving`,toastSearchEmpty:"No curriculum items found - try Draft with AI instead",toastAIDone:"AI drafted the content - please review it carefully before saving",toastImgDone:"AI read the image - please review the content before saving"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"١ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["كود ڤياوايان/ڤتوك دان teks penuh"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمود أساسي واحد",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["رمز المعيار/المؤشر والنص الكامل"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"1 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Kod piawaian/petunjuk dan teks penuh"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let pt=null;async function so(){if(pt)return pt;const e=await $s().catch(()=>[]);return pt=Object.fromEntries(e.map(o=>[o.lang_key,o.settings??{}])),pt}async function sa(e,o){var Oe,Re;const[t,i]=await Promise.all([_s(o.id).catch(n=>(V("โหลดคำอธิบายฯ ไม่สำเร็จ: "+je(n),"error"),null)),so()]),x=n=>{const I=Array.isArray(n)?n:["รหัสมาตรฐาน/ตัวชี้วัด"];return I.length?I.map(B=>String(B??"")):["รหัสมาตรฐาน/ตัวชี้วัด"]},k=(n,I)=>{const C=(Array.isArray(n)?n:[]).map(M=>{const q=Array.isArray(M)?M:Object.values(M??{});return Array.from({length:I},(Y,N)=>String(q[N]??""))});return C.length?C:Array.from({length:12},()=>Array.from({length:I},()=>""))},g=n=>[...new Set((Array.isArray(n)?n:[]).map(I=>parseInt(I,10)).filter(I=>Number.isFinite(I)&&I>0))],u=o.subject_group==="ACDMVOC",S=!u&&(!o.subject_group||["ACDM","AGM"].includes(o.subject_group)),A=(n,I,B)=>{const M=(Array.isArray(n)?n:[]).map(q=>Object.fromEntries(I.map(Y=>[Y,String((q==null?void 0:q[Y])??"")])));for(;M.length<B;)M.push(Object.fromEntries(I.map(q=>[q,""])));return M};let j=x(t==null?void 0:t.table_columns),T=k(t==null?void 0:t.table_rows,j.length),h=g(t==null?void 0:t.midterm_objective_items),m=g(t==null?void 0:t.between_objective_items),_=g(t==null?void 0:t.final_objective_items),v=(t==null?void 0:t.between_objective_extra)??"",w=(t==null?void 0:t.midterm_objective_extra)??"",O=(t==null?void 0:t.final_objective_extra)??"",E=["auto","rtl","ltr"].includes(t==null?void 0:t.text_direction)?t.text_direction:"auto",L=(t==null?void 0:t.description)||"",K=(t==null?void 0:t.signer_name)||o.learning_area||"",D=(Oe=t==null?void 0:t.topic_list)!=null&&Oe.length?t.topic_list:[""],ge=A(t==null?void 0:t.voc_objectives,["objective","competency"],10),ae=A(t==null?void 0:t.voc_schedule,["week","content","note"],20),pe="",$="th";const R=()=>{const n={...ct.th,...ct[$]},I=(i==null?void 0:i[$])??{},B={...n,...I};return I.pickerTitles&&(B.pickerTitles={...n.pickerTitles,...I.pickerTitles}),B},de=()=>{if(document.getElementById("cd2-rtl-font"))return;const n=document.createElement("link");n.id="cd2-rtl-font",n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(n)},[ee,ve]=await Promise.all([De().catch(()=>({})),et().catch(()=>[])]),re=lt(ve,o.subject_group,o.dept),he=(re==null?void 0:re.dept_name)??o.dept??"";(Re=document.getElementById("course-doc-page2-modal"))==null||Re.remove();const d=document.createElement("div");d.id="course-doc-page2-modal",d.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(d);const z="/pp5online/course-doc/course-description-guide.png",te=()=>{var C;(C=document.getElementById("course-description-guide-modal"))==null||C.remove();const n=document.createElement("div");n.id="course-description-guide-modal",n.className="fixed inset-0 z-[210] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6",n.innerHTML=`<div role="dialog" aria-modal="true" aria-labelledby="course-description-guide-title" class="relative flex max-h-[96vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div class="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3 sm:px-5">
        <div class="min-w-0"><h3 id="course-description-guide-title" class="truncate text-sm font-extrabold text-gray-800 sm:text-base">📘 คู่มือการเขียนคำอธิบายรายวิชา</h3><p class="mt-0.5 text-[11px] text-gray-400">โปรดอ่านแนวทางก่อนสร้าง Prompt หรือวาง JSON จาก AI</p></div>
        <button type="button" data-guide-close aria-label="ปิดคู่มือ" class="min-h-[40px] shrink-0 rounded-xl border border-gray-200 px-3 text-sm font-bold text-gray-500 hover:bg-gray-50">ปิด</button>
      </div>
      <div class="min-h-0 overflow-y-auto bg-slate-50 p-2 sm:p-4"><img src="${z}" alt="คู่มือการเขียนคำอธิบายรายวิชาพื้นฐานและรายวิชาเพิ่มเติมตามแนวทาง สพฐ." class="mx-auto block h-auto max-h-[calc(96vh-120px)] w-auto max-w-full rounded-xl object-contain shadow-sm" /></div>
      <div class="flex justify-end border-t border-gray-100 bg-white px-4 py-3 sm:px-5"><button type="button" data-guide-close class="min-h-[42px] rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white hover:bg-emerald-700">เข้าใจแล้ว เริ่มกรอกข้อมูล</button></div>
    </div>`,document.body.appendChild(n);const I=()=>{n.remove(),document.removeEventListener("keydown",B)},B=M=>{M.key==="Escape"&&I()};n.addEventListener("click",M=>{M.target===n&&I()}),n.querySelectorAll("[data-guide-close]").forEach(M=>M.addEventListener("click",I)),document.addEventListener("keydown",B)},ie=(n,I="")=>{const C=[n.length?[...n].sort((M,q)=>M-q).join(", "):"",I.trim()].filter(Boolean);return C.length?C.join(", "):R().notSelected},oe=()=>{const n=T.length;return Array.from({length:n},(I,B)=>B+1).filter(I=>{var B;return(B=T[I-1])==null?void 0:B.some(C=>String(C??"").trim())})},W=()=>{const n=R(),I=oe(),B=n.dir==="rtl";B&&de();const C=E==="auto"?n.dir:E,M=C==="rtl"?"text-right":"text-left",q=B?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";d.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${C}" style="${q}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${n.title}</h2>
          <p class="text-xs text-gray-400 truncate">${l(o.subject_name)} · ${l(o.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${n.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${n.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${C}" style="${q}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(ct).map(Y=>{var N;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${$===Y.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${Y.key}">${((N=i==null?void 0:i[Y.key])==null?void 0:N.label)||Y.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${C}" style="${q}">
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
                <span class="text-xs text-gray-400">${l(o.grade_level||"")} · ${l(he||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${D.map((Y,N)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${be} flex-1" value="${l(Y)}"
                      placeholder="${l(n.topicPlaceholder)}" dir="${C}" data-idx="${N}" />
                    ${D.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${N}">✕</button>`:""}
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

            ${pe?`<p class="text-xs mt-3 ${pe.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${l(pe)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${n.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${C}"
                  class="${be} ${M} min-h-[132px] leading-7"
                  placeholder="${l(n.descPlaceholder)}">${l(L)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.dirLabel}</span>
                  <select id="cd2-dir" class="${Le}">
                    <option value="auto" ${E==="auto"?"selected":""}>${n.dirAuto}</option>
                    <option value="rtl" ${E==="rtl"?"selected":""}>${n.dirRTL}</option>
                    <option value="ltr" ${E==="ltr"?"selected":""}>${n.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${n.signerLabel}</span>
                  <input id="cd2-signer" class="${be} ${M}" value="${l(K)}" placeholder="${l(n.signerPlaceholder)}" dir="${C}" />
                  <p class="text-xs text-gray-400 mt-1">${n.signerHint}</p>
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
                  ${ge.map((Y,N)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${N+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${N}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(Y.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${N}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(Y.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${N}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                  ${ae.map((Y,N)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${N}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${l(Y.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${N}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(Y.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${N}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${l(Y.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${N}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${C}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${n.rowHeader}</th>
                    ${j.map((Y,N)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${N}" class="cd2-col ${be} ${M} py-2 font-semibold" value="${l(Y)}" dir="${C}" />
                          ${j.length>1?`<button data-del-col="${N}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${T.map((Y,N)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${N+1}</td>
                      ${j.map((ne,we)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${N}" data-cell="${we}" rows="2" dir="${C}"
                            class="cd2-cell ${M} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${l(Y[we]||"")}</textarea>
                        </td>`).join("")}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${N}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${n.delRow}</button>
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <h3 class="font-bold text-gray-800 mb-3">${n.objTitle} <span class="text-xs font-normal text-gray-400">${n.objHint}</span></h3>
            <div class="grid sm:grid-cols-3 gap-3">
              <button id="cd2-pick-between" class="${M} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${l(ie(m,v))}</p>
              </button>
              <button id="cd2-pick-mid" class="${M} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${l(ie(h,w))}</p>
              </button>
              <button id="cd2-pick-final" class="${M} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${n.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${l(ie(_,O))}</p>
              </button>
            </div>
            ${I.length?"":`<p class="text-xs text-amber-600 mt-3">${n.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,Ce()},se=()=>{var n,I,B;return D=[...d.querySelectorAll(".cd2-topic-input")].map(C=>C.value.trim()).filter(Boolean),D.length||(D=[""]),L=((n=d.querySelector("#cd2-description"))==null?void 0:n.value)??"",K=((I=d.querySelector("#cd2-signer"))==null?void 0:I.value)??"",E=((B=d.querySelector("#cd2-dir"))==null?void 0:B.value)??E,d.querySelectorAll(".cd2-col").forEach(C=>{j[Number(C.dataset.col)]=C.value}),d.querySelectorAll(".cd2-cell").forEach(C=>{const M=Number(C.dataset.row),q=Number(C.dataset.cell);T[M]||(T[M]=Array.from({length:j.length},()=>"")),T[M][q]=C.value}),d.querySelectorAll(".cd2-voc-obj-cell").forEach(C=>{const M=Number(C.dataset.vocObjRow),q=C.dataset.vocObjField;ge[M]||(ge[M]={objective:"",competency:""}),ge[M][q]=C.value}),d.querySelectorAll(".cd2-voc-sch-cell").forEach(C=>{const M=Number(C.dataset.vocSchRow),q=C.dataset.vocSchField;ae[M]||(ae[M]={week:"",content:"",note:""}),ae[M][q]=C.value}),{desc:L,signer:K}},ce=n=>{const I=Array.isArray(n==null?void 0:n.columns)&&n.columns.length?n.columns.map(q=>String(q??"").trim()).filter(Boolean):R().colsExtra,B=Array.isArray(n==null?void 0:n.rows)?n.rows.map(q=>{const Y=Array.isArray(q)?q:Object.values(q??{});return Array.from({length:I.length},(N,ne)=>String(Y[ne]??"").trim())}).filter(q=>q.some(Boolean)):[];j=I,T=B.length?B:Array.from({length:12},()=>Array.from({length:j.length},()=>"")),n!=null&&n.description&&(L=String(n.description)),h=g((n==null?void 0:n.midterm_items)??(n==null?void 0:n.midtermObjectiveItems)),m=g((n==null?void 0:n.between_items)??(n==null?void 0:n.betweenObjectiveItems)),_=g((n==null?void 0:n.final_items)??(n==null?void 0:n.finalObjectiveItems));const C=oe(),M=Math.ceil(C.length/2);h.length||(h=C.slice(0,Math.min(3,M))),m.length||(m=C.slice(0,Math.min(4,C.length))),_.length||(_=C.slice(-Math.min(3,C.length)))},G=n=>String(n??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,""),ue={schema_version:"pp5.course_description.v1",type:"course_description",course:{subject_code:o.subject_code??"",subject_name:o.subject_name??"",grade_level:o.grade_level??"",learning_area:he},description:"คำอธิบายรายวิชาโดยสรุป...",topic_list:["บทที่ 1 ...","บทที่ 2 ..."],table_columns:["รหัสมาตรฐาน/ตัวชี้วัด"],table_rows:[["ค 1.1 ม.2/1 : เข้าใจ..."],["ค 1.2 ม.2/2 : วิเคราะห์..."]],between_objective_items:[1],between_objective_extra:"",midterm_objective_items:[1,2],midterm_objective_extra:"",final_objective_items:[2],final_objective_extra:"",signer_name:"",text_direction:"auto",voc_objectives:[{objective:"",competency:""}],voc_schedule:[{week:"1",content:"",note:""}]},Z=()=>{se();const n=R(),I=S&&j.length===1,B=!u&&!S&&j.length===1,C=I?'รูปแบบรายวิชาพื้นฐาน (1 คอลัมน์): ยึดมาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก ในคำอธิบายให้เขียนเป็นความเรียงสรุปว่าเรียนอะไร ใช้กระบวนการใด และคาดหวังให้ผู้เรียนเกิดความรู้/ทักษะอะไร ตอนท้ายอาจระบุรหัสตัวชี้วัดที่เกี่ยวข้องได้ แต่ห้ามคัดลอกข้อความตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย; ในแต่ละแถวของตารางให้รวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็มไว้ในคอลัมน์เดียว เช่น "ค 1.1 ม.2/1 : ..."':B?"รูปแบบรายวิชาเพิ่มเติม (1 คอลัมน์): ยึดผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก; ในตารางให้ใส่ผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",M={subject_code:o.subject_code??"",subject_name:o.subject_name??"",grade_level:o.grade_level??"",subject_group:o.subject_group??"",learning_area:he,credit:o.credit??"",target_language:n.aiLang,is_voc:u,topics:D.filter(Boolean),description:L,table_columns:j,table_rows:T.filter(q=>q.some(Y=>String(Y??"").trim())),voc_objectives:u?ge.filter(q=>Object.values(q).some(Y=>String(Y??"").trim())):[],voc_schedule:u?ae.filter(q=>Object.values(q).some(Y=>String(Y??"").trim())):[]};return`คุณเป็นผู้ช่วยจัดทำเอกสารคำอธิบายรายวิชา ปพ.5 สำหรับครูผู้สอน
เขียนค่าข้อมูลทุกช่องที่เป็นเนื้อหาเป็น${n.aiLang} ตามภาษาที่ครูเลือกอยู่ในขณะนี้ ส่วนชื่อ field ใน JSON ต้องคงเป็นภาษาอังกฤษตาม schema

งานที่ต้องทำ:
1. จัดทำคำอธิบายรายวิชา/ผลการเรียนรู้ภาพรวมให้เป็นภาษาทางการ กระชับ และเหมาะกับระดับชั้น
2. จัดทำรายการบท/หัวข้อการเรียนรู้ใน topic_list
3. จัดทำตารางมาตรฐานการเรียนรู้ ตัวชี้วัด หรือผลการเรียนรู้ ให้สอดคล้องกับข้อมูลหลักสูตรที่แนบหรือผู้ใช้ให้มา
4. เลือกหมายเลขแถวที่เหมาะสมสำหรับการประเมินระหว่างภาค กลางภาค และปลายภาค
5. ${u?"สำหรับ ACDMVOC ให้จัดทำ voc_objectives และ voc_schedule ด้วย โดยไม่ต้องสร้างรหัสมาตรฐานขึ้นเอง":"หากไม่มีข้อมูลมาตรฐาน/ตัวชี้วัดที่เชื่อถือได้ ให้ระบุข้อความที่ต้องตรวจสอบเพิ่มเติมแทนการแต่งรหัสขึ้นเอง"}

ข้อมูลรายวิชาจากระบบ PP5:
${JSON.stringify(M,null,2)}

ข้อกำหนดสำคัญ:
- ใช้ข้อมูลจากหลักสูตร หนังสือเรียน หรือเอกสารที่ผู้ใช้แนบเป็นหลัก และห้ามเดาข้อมูลที่ไม่มีแหล่งอ้างอิง
- แนวทางการเขียนตามคู่มือ: ${C}
- คำอธิบายรายวิชาต้องสรุปสาระสำคัญ กระบวนการเรียนรู้ และผลที่คาดหวังให้ผู้เรียนเกิดขึ้น ไม่ใช่รายการคัดลอกมาตรฐาน/ตัวชี้วัดหรือผลการเรียนรู้ทั้งหมด
- table_rows ต้องเป็น array ของ array และจำนวนช่องต้องตรงกับ table_columns
- หมายเลขใน between_objective_items, midterm_objective_items และ final_objective_items ต้องอ้างถึงแถวที่มีอยู่จริง
- ตอบกลับเป็น JSON ตาม schema นี้เท่านั้น โดยครูจะนำ JSON กลับมาวางในระบบเพื่อให้ตรวจสอบก่อนบันทึก
- ต้องตอบเป็นโค้ด JSON เพียงกล่องเดียวชนิด json ห้ามมีคำอธิบายก่อนหรือหลังกล่อง

ตัวอย่าง schema:
${JSON.stringify(ue,null,2)}`},F=n=>{var M;let I;try{I=JSON.parse(G(n))}catch{throw new Error("JSON ไม่ถูกต้อง กรุณาตรวจเครื่องหมายปีกกาและเครื่องหมายคำพูด")}if((I==null?void 0:I.type)!=="course_description")throw new Error("ต้องเป็น JSON ประเภท course_description");if(!String(I.description??"").trim())throw new Error("ยังไม่มี description คำอธิบายรายวิชา");const B=Array.isArray(I.table_columns)&&I.table_columns.length&&Array.isArray(I.table_rows);if(!u&&!B)throw new Error("ต้องมี table_columns และ table_rows สำหรับรายวิชานี้");if(B&&!I.table_rows.some(q=>Array.isArray(q)&&q.some(Y=>String(Y??"").trim())))throw new Error("ต้องมี table_rows อย่างน้อย 1 แถวที่มีข้อมูล");if(B&&I.table_rows.some(q=>!Array.isArray(q)||q.length!==I.table_columns.length))throw new Error("จำนวนช่องใน table_rows ต้องตรงกับจำนวน table_columns");if(I.text_direction&&!["auto","rtl","ltr"].includes(I.text_direction))throw new Error("text_direction ต้องเป็น auto, rtl หรือ ltr");const C=((M=I.table_rows)==null?void 0:M.length)??0;for(const q of["between_objective_items","midterm_objective_items","final_objective_items"])if(I[q]!=null&&(!C||!Array.isArray(I[q])||I[q].some(Y=>!Number.isInteger(Number(Y))||Number(Y)<1||Number(Y)>C)))throw new Error(`${q} ต้องเป็นหมายเลขแถวที่มีอยู่จริง`);if(u){if(!Array.isArray(I.voc_objectives)||!I.voc_objectives.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_objectives");if(!Array.isArray(I.voc_schedule)||!I.voc_schedule.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_schedule")}return I},X=n=>{Array.isArray(n.table_columns)&&n.table_columns.length&&Array.isArray(n.table_rows)?ce({description:n.description,columns:n.table_columns,rows:n.table_rows,midterm_items:n.midterm_objective_items,between_items:n.between_objective_items,final_items:n.final_objective_items}):L=String(n.description??""),Array.isArray(n.topic_list)&&(D=n.topic_list.map(I=>String(I??"").trim()).filter(Boolean),D.length||(D=[""])),n.between_objective_extra!=null&&(v=String(n.between_objective_extra)),n.midterm_objective_extra!=null&&(w=String(n.midterm_objective_extra)),n.final_objective_extra!=null&&(O=String(n.final_objective_extra)),n.signer_name!=null&&(K=String(n.signer_name)),n.text_direction&&["auto","rtl","ltr"].includes(n.text_direction)&&(E=n.text_direction),u&&(ge=A(n.voc_objectives,["objective","competency"],10),ae=A(n.voc_schedule,["week","content","note"],20))},xe=()=>{var Y;(Y=document.getElementById("cd2-external-ai-modal"))==null||Y.remove();const n=document.createElement("div");n.id="cd2-external-ai-modal",n.className="fixed inset-0 z-[190] flex items-center justify-center bg-black/60 p-3",n.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[94vh] overflow-y-auto p-5 sm:p-6">
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
    </div>`,document.body.appendChild(n);const I=()=>Z(),B=(N,ne)=>{const we=n.querySelector("#cd2-external-result");we.className=`mt-2 rounded-xl px-3 py-2 text-xs ${ne?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-red-50 text-red-700 border border-red-100"}`,we.textContent=N},C=n.querySelector("#cd2-external-prompt"),M=Js({copyButton:n.querySelector("#cd2-external-copy")});d.addEventListener("input",N=>{N.target instanceof Element&&N.target.matches("input, textarea, select")&&M.invalidate()}),d.addEventListener("change",N=>{N.target instanceof Element&&N.target.matches("input, textarea, select")&&M.invalidate()}),d.addEventListener("click",N=>{N.target.closest("button")&&M.invalidate()});const q=()=>n.remove();n.addEventListener("click",N=>{N.target===n&&q()}),n.querySelector("[data-external-close]").addEventListener("click",q),n.querySelector("#cd2-external-generate").addEventListener("click",()=>{C.value=I(),M.markGenerated(),V("สร้าง Prompt แล้ว","success")}),n.querySelector("#cd2-external-copy").addEventListener("click",async()=>{if(!M.isReady()){V("กรุณากด “สร้าง Prompt ใหม่” หลังแก้ข้อมูลก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(C.value),V("คัดลอก Prompt แล้ว","success")}catch{C.select(),document.execCommand("copy"),V("คัดลอก Prompt แล้ว","success")}}),n.querySelector("#cd2-external-validate").addEventListener("click",()=>{var N;try{const ne=F(n.querySelector("#cd2-external-json").value);B(`JSON ถูกต้อง${(N=ne.table_rows)!=null&&N.length?`: ${ne.table_rows.length} แถว`:""}${u?` · ${ne.voc_schedule.length} สัปดาห์`:""}`,!0)}catch(ne){B(ne.message,!1)}}),n.querySelector("#cd2-external-import").addEventListener("click",()=>{try{const N=F(n.querySelector("#cd2-external-json").value);X(N),q(),pe="✅ นำเข้าข้อมูลจาก AI ภายนอกแล้ว — กรุณาตรวจสอบก่อนบันทึก",W(),V("นำเข้าคำอธิบายรายวิชาแล้ว กรุณาตรวจสอบก่อนบันทึก","success")}catch(N){B(N.message,!1)}})},ye=n=>n.some(B=>String(B.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:n.map((B,C)=>[`${B.item_no??C+1}.${B.learning_outcome_text??B.indicator_text??B.standard_text??""}`]),description:L,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((B,C)=>C+1),final_items:n.slice(Math.ceil(n.length/2)).map((B,C)=>C+1+Math.ceil(n.length/2))}:{source:"curriculum",columns:["รหัสมาตรฐาน/ตัวชี้วัด"],rows:n.map((B,C)=>{const M=[B.standard_code,B.indicator_code].filter(Boolean).join(" "),q=B.indicator_text||B.standard_text||B.learning_outcome_text||"";return[((M||String(B.item_no??C+1)+".")+" : "+q).trim()]}),description:L,midterm_items:n.slice(0,Math.ceil(n.length/2)).map((B,C)=>C+1),final_items:n.slice(Math.ceil(n.length/2)).map((B,C)=>C+1+Math.ceil(n.length/2))},_e=async()=>{var Q,r,b,s,y;const n=R(),I=S&&j.length===1,B=!u&&!S&&j.length===1,C=I?n.colsBasic:B?n.colsExtra:j,M=I||B?'single column named "'+C[0]+'"':"custom columns named "+JSON.stringify(C),q=I?"รายวิชาพื้นฐาน: ใช้มาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก เขียนคำอธิบายเป็นความเรียงสรุปสาระ กระบวนการ และผลที่คาดหวัง ไม่คัดลอกตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย และให้แต่ละแถวในคอลัมน์เดียวรวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็ม เช่น ค 1.1 ม.2/1 : ...":B?"รายวิชาเพิ่มเติม: ใช้ผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก และให้ตารางสะท้อนผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",Y=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${n.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${o.subject_name||""}
- รหัสวิชา: ${o.subject_code||""}
- ชั้น: ${o.grade_level||""}
- กลุ่มสาระ: ${he||o.dept||""}
- หน่วยกิต: ${o.credit||""}
- เรื่อง/บทที่สอน: ${D.filter(Boolean).join(", ")||"ไม่ระบุ"}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${M}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม
5. แนวทางการเขียน: ${q}

Return exactly one JSON object wrapped in a single fenced Markdown code block using \`\`\`json and \`\`\`. No text before or after the code block. This makes the AI response show a clear copy-code button:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`,{data:N,error:ne}=await vt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Y}});if(ne)throw new Error(ne.message??"Edge Function error");if(N!=null&&N.error)throw new Error(`Gemini: ${N.error.message??N.error.status}`);const we=((y=(s=(b=(r=(Q=N.candidates)==null?void 0:Q[0])==null?void 0:r.content)==null?void 0:b.parts)==null?void 0:s[0])==null?void 0:y.text)??"",Ee=we.match(/```json\s*([\s\S]*?)```/)||we.match(/(\{[\s\S]*\})/),U=Ee?Ee[1]??Ee[0]:null;if(!U)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(U)},$e=n=>{var Ee;se();const I=n==="mid"?h:n==="between"?m:_,B=n==="mid"?w:n==="between"?v:O,C=oe();if(!C.length){V("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(Ee=document.getElementById("cd2-picker"))==null||Ee.remove();const M=R(),q={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},Y={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},N=U=>{const Q=(T[U-1]??[]).find(b=>String(b??"").trim()),r=String(Q??"").trim();return r.length>30?r.slice(0,30)+"…":r},ne=document.createElement("div");ne.id="cd2-picker",ne.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",ne.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${M.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${M.pickerTitles[n]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${C.map(U=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${q[n]} w-4 h-4 flex-shrink-0" value="${U}" ${I.includes(U)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${U}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${l(N(U))}</span>
            </label>`).join("")}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${l(B)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${M.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${Y[n]} text-white text-sm font-semibold">${M.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(ne);const we=()=>ne.remove();ne.querySelector("#cd2-picker-close").addEventListener("click",we),ne.querySelector("#cd2-picker-cancel").addEventListener("click",we),ne.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const U=[...ne.querySelectorAll(".cd2-choice:checked")].map(r=>Number(r.value)),Q=ne.querySelector("#cd2-picker-extra").value.trim();n==="mid"?(h=U,w=Q):n==="between"?(m=U,v=Q):(_=U,O=Q),we(),W()})},Ce=()=>{var B,C,M,q,Y,N,ne,we,Ee;const n=R();d.querySelectorAll(".cd2-lang-btn").forEach(U=>{U.addEventListener("click",()=>{var Q;se(),$=U.dataset.lang||"th",E=((Q=ct[$])==null?void 0:Q.dir)||"ltr",W()})}),d.querySelector("#cd2-close").addEventListener("click",()=>d.remove()),d.querySelector("#cd2-dir").addEventListener("change",U=>{se(),E=U.target.value,W()}),d.querySelector("#cd2-external-ai").addEventListener("click",xe),d.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(se(),(T.some(r=>r.some(b=>String(b??"").trim()))||L.trim())&&!confirm(n.confirmOverwrite))return;const Q=d.querySelector("#cd2-search-curriculum");Q.disabled=!0,Q.innerHTML=`⏳ ${n.btnCurriculumLoading}`;try{const r=await Is({subjectName:o.subject_name,subjectCode:o.subject_code,gradeLevel:o.grade_level,dept:he,topic:D.filter(Boolean).join(" ")});r.length?(ce(ye(r)),pe=n.toastSearchOk(r.length)):pe=n.toastSearchEmpty,W()}catch(r){V("ค้นหลักสูตรไม่สำเร็จ: "+je(r),"error")}finally{Q.disabled=!1,Q.innerHTML=`🔍 ${n.btnCurriculum}`}}),d.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(se(),(T.some(r=>r.some(b=>String(b??"").trim()))||L.trim())&&!confirm(n.confirmAIOverwrite))return;const Q=d.querySelector("#cd2-auto-fill");Q.disabled=!0,Q.innerHTML=`⏳ ${n.btnAILoading}`;try{const r=await _e();ce(r),pe=n.toastAIDone,W()}catch(r){V("AI ร่างไม่สำเร็จ: "+je(r),"error")}finally{Q.disabled=!1,Q.innerHTML=`✨ ${n.btnAI}`}}),d.querySelector("#cd2-img-input").addEventListener("change",async U=>{var s,y,a,c,p,f;const Q=(s=U.target.files)==null?void 0:s[0];if(!Q)return;if((T.some(H=>H.some(P=>String(P??"").trim()))||L.trim())&&!confirm(n.confirmImgOverwrite)){U.target.value="";return}const b=d.querySelector("#cd2-img-btn");b.textContent=`⏳ ${n.btnImgLoading}`;try{const H=await new Promise((ke,Be)=>{const He=new FileReader;He.onload=()=>ke(He.result.split(",")[1]),He.onerror=Be,He.readAsDataURL(Q)}),P=S&&j.length===1,J=!u&&!S&&j.length===1,me=P?n.colsBasic:J?n.colsExtra:j,fe=P||J?'single column named "'+me[0]+'"':"custom columns named "+JSON.stringify(me),Ie=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${n.aiLang}
ข้อมูลรายวิชา: "${o.subject_name??""}" รหัส ${o.subject_code??""} ชั้น ${o.grade_level??""} กลุ่มสาระ ${he}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${fe})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบกลับเป็น JSON โดยครอบผลลัพธ์ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีข้อความก่อนหรือหลังกล่อง:
{
  "description": "...",
  "columns": ${JSON.stringify(me)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:Ae,error:qe}=await vt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Ie,imageBase64:H,imageMimeType:Q.type||"image/jpeg"}});if(qe)throw new Error(qe.message??"Edge Function error");if(Ae!=null&&Ae.error)throw new Error(`Gemini: ${Ae.error.message??Ae.error.status}`);const Je=((f=(p=(c=(a=(y=Ae.candidates)==null?void 0:y[0])==null?void 0:a.content)==null?void 0:c.parts)==null?void 0:p[0])==null?void 0:f.text)??"",Te=Je.match(/```json\s*([\s\S]*?)```/)||Je.match(/(\{[\s\S]*\})/),Fe=Te?Te[1]??Te[0]:null;if(!Fe)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");ce(JSON.parse(Fe)),pe=n.toastImgDone,W()}catch(H){V("อ่านรูปไม่สำเร็จ: "+je(H),"error")}finally{b.textContent=`📷 ${n.btnImg}`,U.target.value=""}});const I=U=>{if(se(),T.some(b=>b.some(s=>String(s??"").trim()))&&!confirm(n.confirmColChange))return;const r=T;j=U,T=r.map(b=>U.length===1?[b.filter(Boolean).join(" ").trim()]:Array.from({length:U.length},(s,y)=>b[y]??"")),T.length||(T=Array.from({length:12},()=>Array.from({length:j.length},()=>""))),W()};(B=d.querySelector("#cd2-template-basic"))==null||B.addEventListener("click",()=>{I(n.colsBasic)}),(C=d.querySelector("#cd2-template-extra"))==null||C.addEventListener("click",()=>{I(n.colsExtra)}),(M=d.querySelector("#cd2-add-col"))==null||M.addEventListener("click",()=>{se(),j.push(n.colNew(j.length+1)),T=T.map(U=>[...U,""]),W()}),(q=d.querySelector("#cd2-add-row"))==null||q.addEventListener("click",()=>{se(),T.push(Array.from({length:j.length},()=>"")),W()}),d.querySelectorAll(".cd2-del-col").forEach(U=>U.addEventListener("click",()=>{se();const Q=Number(U.dataset.delCol);j.splice(Q,1),T=T.map(r=>r.filter((b,s)=>s!==Q)),W()})),d.querySelectorAll(".cd2-del-row").forEach(U=>U.addEventListener("click",()=>{se();const Q=Number(U.dataset.delRow);T.splice(Q,1);const r=b=>b.filter(s=>s!==Q+1).map(s=>s>Q+1?s-1:s);h=r(h),m=r(m),_=r(_),W()})),(Y=d.querySelector("#cd2-pick-mid"))==null||Y.addEventListener("click",()=>$e("mid")),(N=d.querySelector("#cd2-pick-between"))==null||N.addEventListener("click",()=>$e("between")),(ne=d.querySelector("#cd2-pick-final"))==null||ne.addEventListener("click",()=>$e("final")),(we=d.querySelector("#cd2-voc-obj-add-row"))==null||we.addEventListener("click",()=>{se(),ge.push({objective:"",competency:""}),W()}),d.querySelectorAll(".cd2-voc-obj-del-row").forEach(U=>U.addEventListener("click",()=>{se(),ge.splice(Number(U.dataset.vocObjDelRow),1),W()})),(Ee=d.querySelector("#cd2-voc-sch-add-row"))==null||Ee.addEventListener("click",()=>{se(),ae.push({week:String(ae.length+1),content:"",note:""}),W()}),d.querySelectorAll(".cd2-voc-sch-del-row").forEach(U=>U.addEventListener("click",()=>{se(),ae.splice(Number(U.dataset.vocSchDelRow),1),W()})),d.querySelector("#cd2-add-topic").addEventListener("click",()=>{se(),D.push(""),W()}),d.querySelectorAll(".cd2-topic-del").forEach(U=>{U.addEventListener("click",()=>{se(),D.splice(Number(U.dataset.idx),1),D.length||(D=[""]),W()})}),d.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:U,signer:Q}=se(),r=d.querySelector("#cd2-save");r.disabled=!0,r.textContent=n.saving;try{await As(o.id,{description:U,table_columns:j.map((b,s)=>b.trim()||n.colNew(s+1)),table_rows:T.map(b=>b.slice(0,j.length)),topic_list:D.filter(Boolean),midterm_objective_items:h,between_objective_items:m,final_objective_items:_,midterm_objective_extra:w,between_objective_extra:v,final_objective_extra:O,voc_objectives:ge,voc_schedule:ae,signer_name:Q.trim()||null,text_direction:E,updated_by:(e==null?void 0:e.id)??null}),V(n.toastSaved,"success"),d.remove()}catch(b){V("บันทึกไม่สำเร็จ: "+je(b),"error"),r.disabled=!1,r.textContent=n.save}})};W(),te()}async function oa(e){var t,i,x,k,g;if(!(e!=null&&e.id)){V("ไม่พบข้อมูลครูผู้สอน","error");return}(t=document.getElementById("schedule-course-review-modal"))==null||t.remove();const o=document.createElement("div");o.id="schedule-course-review-modal",o.className="fixed inset-0 z-[240] bg-slate-950/60 backdrop-blur-sm p-3 sm:p-5",o.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="schedule-course-review-title"
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
  </section>`,document.body.appendChild(o),o.querySelector("[data-review-close]").addEventListener("click",()=>o.remove());try{const u=await De().catch(()=>({})),S=Number(u.academicYear??u.academic_year),A=Number(u.semester),[j,T,h,m]=await Promise.all([Et(e.id,S,A),Kt(),Ct(e.id).catch(()=>[]),et().catch(()=>[])]),_=e.category==="ศาสนา"?new Set(["AGM","AGMVOC"]):e.category==="สามัญ"?new Set(["ACDM","ACDMVOC"]):null,v=T.filter(d=>!_||_.has(d.subject_group)),w=new Map(v.map(d=>[String(d.id),d])),O=["","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์","อาทิตย์"],E=d=>{var ce,G,ue;const z=(ce=d.master_subjects)==null?void 0:ce.catalog_id;if(z&&w.has(String(z)))return w.get(String(z));const te=Se(d.subject_code||((G=d.master_subjects)==null?void 0:G.subject_code));if(te){const Z=v.filter(xe=>Se(xe.subject_code)===te);if(Z.length===1)return Z[0];const F=ft(d.class_name),X=Z.filter(xe=>F&&Se(xe.grade_level).includes(Se(F)));if(X.length===1)return X[0]}const ie=Se(d.subject_name||((ue=d.master_subjects)==null?void 0:ue.subject_name));if(!ie)return null;const oe=v.filter(Z=>Se(Z.subject_name)===ie);if(oe.length===1)return oe[0];const W=ft(d.class_name),se=oe.filter(Z=>W&&Se(Z.grade_level).includes(Se(W)));return se.length===1?se[0]:null},L=(d,z)=>{var oe,W;const te=Se((d==null?void 0:d.subject_code)||z.subject_code||((oe=z.master_subjects)==null?void 0:oe.subject_code)),ie=Se((d==null?void 0:d.subject_name)||z.subject_name||((W=z.master_subjects)==null?void 0:W.subject_name));return h.find(se=>d&&Number(se.catalog_id)===Number(d.id)||te&&Se(se.subject_code)===te&&(!(d!=null&&d.subject_group)||se.subject_group===d.subject_group)||ie&&Se(se.subject_name)===ie&&(!(d!=null&&d.subject_group)||se.subject_group===d.subject_group))},K=new Map;for(const d of j){const z=E(d),te=(z==null?void 0:z.subject_name)||d.subject_name||((i=d.master_subjects)==null?void 0:i.subject_name)||"",ie=(z==null?void 0:z.subject_code)||d.subject_code||((x=d.master_subjects)==null?void 0:x.subject_code)||"";if(!te&&!ie)continue;const oe=z?`catalog:${z.id}`:`review:${Se(ie)}:${Se(te)}:${Se((k=d.master_subjects)==null?void 0:k.subject_group)}`;let W=K.get(oe);if(!W){const ce=z?bt(z):"",G=lt(m,z==null?void 0:z.subject_group,ce);W={id:K.size+1,item:z,name:te,code:ie,subjectGroup:(z==null?void 0:z.subject_group)||((g=d.master_subjects)==null?void 0:g.subject_group)||"",deptCode:ce,deptLabel:(z==null?void 0:z.dept_label)||(G==null?void 0:G.dept_name)||"ต้องตรวจสอบกลุ่มสาระ",rows:[],rooms:new Set,grades:new Set,existing:z?L(z,d):null},K.set(oe,W)}W.rows.push(d),d.class_name&&W.rooms.add(d.class_name);const se=(z==null?void 0:z.grade_level)||ft(d.class_name);se&&W.grades.add(se)}const D=[...K.values()].map(d=>{var ie,oe;const z=((ie=d.item)==null?void 0:ie.grade_level)||[...d.grades].join(", "),te=!!(d.item&&d.subjectGroup&&d.deptCode&&z&&!d.existing);return d.grade=z,d.status=d.existing?"existing":te?"ready":"review",d.payload=d.item?{catalog_id:d.item.id,subject_group:d.item.subject_group,dept:d.deptCode,subject_name:d.item.subject_name,subject_code:d.item.subject_code||null,credit:d.item.credit??null,grade_level:z,teacher_id:e.id,learning_area:((oe=lt(m,d.subjectGroup,d.deptCode))==null?void 0:oe.head_name)||null}:null,d}),ge=D.filter(d=>d.status==="ready").length,ae=D.filter(d=>d.status==="existing").length,pe=D.filter(d=>d.status==="review").length,$=new Map;D.forEach(d=>{const z=d.deptCode||"review";$.has(z)||$.set(z,{label:d.deptLabel,items:[]}),$.get(z).items.push(d)});const R=d=>d==="ready"?'<span class="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">พร้อมสร้าง</span>':d==="existing"?'<span class="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-700">มีคอร์สแล้ว · ข้าม</span>':'<span class="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">ต้องตรวจสอบ</span>',de=d=>{const z=d.rows.map(ie=>`${O[Number(ie.day_of_week)]||`วัน${ie.day_of_week??"?"}`} คาบ ${ie.period_no??"—"}`).join(" · "),te=[...d.rooms].join(", ")||"ไม่ระบุห้อง";return`<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" data-review-item="${d.id}">
        <div class="flex items-start gap-3">
          ${d.status==="ready"?`<input type="checkbox" data-review-select="${d.id}" checked class="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />`:'<span class="mt-1 block h-5 w-5"></span>'}
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">${R(d.status)}
              <span class="font-mono text-xs font-bold text-indigo-600">${l(d.code||"ไม่มีรหัส")}</span>
            </div>
            <h4 class="mt-2 font-extrabold text-gray-800">${l(d.name)}</h4>
            <p class="mt-1 text-xs text-gray-500">${l(d.grade||"ไม่ระบุระดับชั้น")} · ${l(te)}</p>
            <p class="mt-1 text-[11px] text-gray-400">${l(z||"ไม่มีช่วงเวลาที่ระบุ")}</p>
            ${d.status==="review"?'<p class="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-800">ระบบยังจับคู่กับแคตตาล็อกไม่ได้แน่นอน จึงยังไม่สร้างอัตโนมัติ กรุณาเปิดคอร์สใหม่และเลือกรายวิชาด้วยตนเอง</p>':""}
          </div>
        </div>
      </article>`};o.querySelector("section").innerHTML=`
      <div class="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4 sm:px-7">
        <div><h2 id="schedule-course-review-title" class="text-lg sm:text-xl font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2>
          <p class="mt-1 text-xs text-gray-500">ภาคเรียน ${l(`${A}/${S}`)} · สร้างคอร์สเท่านั้น ยังไม่สร้างห้องเรียน</p></div>
        <button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 bg-white text-xl text-gray-500 hover:bg-gray-100">×</button>
      </div>
      <div class="flex-1 overflow-y-auto p-5 sm:p-7">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div class="rounded-2xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-2xl font-extrabold text-indigo-700">${D.length}</p><p class="text-[11px] text-indigo-700/70">รายการจากตารางสอน</p></div>
          <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-3"><p class="text-2xl font-extrabold text-emerald-700">${ge}</p><p class="text-[11px] text-emerald-700/70">พร้อมสร้าง</p></div>
          <div class="rounded-2xl border border-blue-100 bg-blue-50 p-3"><p class="text-2xl font-extrabold text-blue-700">${ae}</p><p class="text-[11px] text-blue-700/70">มีคอร์สแล้ว</p></div>
          <div class="rounded-2xl border border-amber-100 bg-amber-50 p-3"><p class="text-2xl font-extrabold text-amber-700">${pe}</p><p class="text-[11px] text-amber-700/70">ต้องตรวจสอบ</p></div>
        </div>
        <div class="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-xs leading-relaxed text-indigo-800">ระบบจะไม่สร้างทับคอร์สเดิม และจะสร้างเฉพาะรายการที่จับคู่กับแคตตาล็อกได้ครบถ้วนเท่านั้น</div>
        <div class="mt-6 space-y-7">
          ${[...$.values()].map(d=>`<section><div class="mb-3 flex items-center gap-3"><div class="h-9 w-9 rounded-xl bg-emerald-100 text-center leading-9">🏷️</div><h3 class="font-extrabold text-gray-800">${l(d.label)}</h3><div class="h-px flex-1 bg-gray-200"></div></div><div class="grid grid-cols-1 gap-3 xl:grid-cols-2">${d.items.map(de).join("")}</div></section>`).join("")||'<div class="rounded-2xl bg-white p-10 text-center text-sm text-gray-400">ไม่พบรายการตารางสอนที่นำมาสร้างคอร์สได้</div>'}
        </div>
      </div>
      <div class="flex flex-col-reverse gap-2 border-t border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p data-review-selected class="text-xs text-gray-500">เลือกสร้างแล้ว 0 คอร์ส</p>
        <div class="flex gap-2"><button type="button" data-review-cancel class="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 sm:flex-none">ยกเลิก</button>
          <button type="button" data-review-create ${ge?"":"disabled"} class="flex-1 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:flex-none">ยืนยันสร้างคอร์สที่เลือก</button></div>
      </div>`;const ee=()=>o.remove();o.querySelector("[data-review-close]").addEventListener("click",ee),o.querySelector("[data-review-cancel]").addEventListener("click",ee);const ve=o.querySelector("[data-review-selected]"),re=o.querySelector("[data-review-create]"),he=()=>{const d=o.querySelectorAll("[data-review-select]:checked").length;ve.textContent=`เลือกสร้างแล้ว ${d} คอร์ส`,re.disabled=d===0};o.querySelectorAll("[data-review-select]").forEach(d=>d.addEventListener("change",he)),he(),re.addEventListener("click",async()=>{var oe;const d=[...o.querySelectorAll("[data-review-select]:checked")].map(W=>Number(W.dataset.reviewSelect)),z=D.filter(W=>d.includes(W.id)&&W.status==="ready");if(!z.length)return;re.disabled=!0,re.textContent="กำลังสร้างคอร์ส...";let te=0,ie=0;for(const W of z)try{await ws(W.payload),te+=1}catch{ie+=1}ee(),ie?V(`สร้างคอร์สสำเร็จ ${te} รายการ · ไม่สำเร็จ ${ie} รายการ`,"warning"):V(`สร้างคอร์สจากตารางสอนสำเร็จ ${te} รายการ`,"success"),(oe=window._navTo)==null||oe.call(window,"my-courses")})}catch(u){o.querySelector("section").innerHTML=`<div class="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4"><h2 class="font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2><button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 text-xl text-gray-500">×</button></div><div class="flex flex-1 items-center justify-center p-8 text-center text-sm text-red-500">โหลดข้อมูลตารางสอนไม่สำเร็จ: ${l(je(u))}</div>`,o.querySelector("[data-review-close]").addEventListener("click",()=>o.remove())}}async function aa(e,o,t=null,i={}){const x=!!i.cloneFrom;We("my-courses"),Ue(x?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[k,g,u,S,A,j]=await Promise.all([et().catch(()=>[]),Xt().catch(()=>[]),t&&!x?hs(t.id).catch(r=>(V("โหลดครูร่วมสอนไม่สำเร็จ: "+je(r),"error"),null)):Promise.resolve([]),Kt().catch(()=>[]),De().catch(()=>({})),ys().catch(()=>(V("โหลดรายชื่อหัวหน้ากลุ่มย่อยไม่สำเร็จ ยังพิมพ์ค้นหาครูศาสนาได้","warning"),[]))]);if(u===null){Me(`<div class="p-6 text-center text-gray-600">โหลดข้อมูลคอร์สไม่ครบ กรุณาเปิดคอร์สใหม่อีกครั้ง
      <button class="block mx-auto mt-4 text-indigo-600" onclick="window._goBack()">กลับ</button></div>`);return}let T=u??[];const h=[...new Map(k.map(r=>[r.id,r])).values()],m=(e==null?void 0:e.category)??"",_=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],v=m?_.filter(r=>r.cat===m):_,w=Number(A.semester),O=S.filter(r=>![1,2].includes(w)||r.semester==null||Number(r.semester)===w).filter(r=>v.some(b=>b.value===r.subject_group)),E=r=>r==="ACDMVOC",L=r=>E(r)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",K=r=>ze(r)?"หัวหน้ากลุ่มย่อย (Penyelia)":E(r)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",D=r=>E(r)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",ge=r=>ze(r)?"เลือกหัวหน้ากลุ่มย่อย หรือพิมพ์ค้นหาจากรายชื่อครูศาสนา":E(r)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",ae=r=>ze(r)?"ศาสนา":r,pe=(t==null?void 0:t.subject_group)??"";let $=ae(pe);const R=r=>Ws(h,r),de=(r,b="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+r.map(s=>`<option value="${s.dept_code}" ${s.dept_code===b?"selected":""}>${s.dept_name}</option>`).join(""),ee=(r="")=>{const b=document.getElementById("cf-subg").value;return ze(b)?Dt(g,j,r):[...new Set(R(b).map(s=>s.head_name).filter(Boolean))].filter(s=>s.toLowerCase().includes(r.toLowerCase()))},ve=new Map(O.map(r=>[String(r.id),r])),re=ve.get(String((t==null?void 0:t.catalog_id)??"")),he=(t==null?void 0:t.dept)||bt(re)||"",d=(r="",b="")=>O.filter(s=>(!r||s.subject_group===r)&&eo(s,b,h)),z=(r="",b="",s="")=>b?['<option value="">— เลือกรายวิชาภายใต้กลุ่มสาระ —</option>',...d(r,b).map(a=>{const c=a.subject_code?a.subject_code+" · ":"",p=a.grade_level?" · "+a.grade_level:"",f=a.subject_group?" · "+a.subject_group:"",H=c+a.subject_name+p+f,P=String(s??"")===String(a.id)?" selected":"";return'<option value="'+a.id+'"'+P+">"+l(H)+"</option>"})].join(""):'<option value="">— เลือกกลุ่มสาระก่อน —</option>';Me(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${x?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์สวิชา"}</h2>
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
          <select id="cf-subg" class="${Le}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${v.map(r=>`<option value="${r.value}" ${(t==null?void 0:t.subject_group)===r.value?"selected":""}>${r.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${L(pe)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${Le}">
            ${de(R(pe),he)}
          </select>
        </div>
        <!-- รายวิชาภายใต้กลุ่มสาระ -->
        <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
          <label class="block text-sm font-semibold text-blue-900 mb-1">รายวิชาภายใต้กลุ่มสาระ</label>
          <select id="cf-catalog" ${Le} ${he?"":"disabled"}>
            ${z(pe,he,t==null?void 0:t.catalog_id)}
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
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${be}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${be}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${Le}">
              ${qs.map(r=>`<option value="${r}">${r}</option>`).join("")}
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
                class="${be}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${be}" autocomplete="off" />
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
            maxlength="12" class="${be}" />
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
                class="${be} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${be} bg-white" autocomplete="off" />
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
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${K(pe)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${be} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${ge(pe)}</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${x?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}
          </button>
        </div>
      </form>
    </div>
  </div>`);const te=t&&(t.grade_level&&t.grade_level.includes(",")||T.length>0);function ie(){const r=document.getElementById("cf-coteach-selected-list");r&&(r.innerHTML=T.map(b=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${b.full_name} (${b.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${b.id}">✕</button>
      </span>
    `).join(""),r.querySelectorAll(".remove-coteacher-btn").forEach(b=>{b.addEventListener("click",()=>{const s=Number(b.dataset.id);T=T.filter(y=>y.id!==s),ie()})}))}function oe(r,b){var y;(y=document.getElementById("coteach-explain-modal"))==null||y.remove();const s=document.createElement("div");s.id="coteach-explain-modal",s.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",s.innerHTML=`
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
      </div>`,document.body.appendChild(s),s.querySelector("#cf-explain-cancel").addEventListener("click",()=>{s.remove(),b()}),s.querySelector("#cf-explain-confirm").addEventListener("click",()=>{s.remove(),r()})}function W(r,b){var y;(y=document.getElementById("coteach-confirm-modal"))==null||y.remove();const s=document.createElement("div");s.id="coteach-confirm-modal",s.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",s.innerHTML=`
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
      </div>`,document.body.appendChild(s),s.querySelector("#cf-off-cancel").addEventListener("click",()=>{s.remove(),b()}),s.querySelector("#cf-off-confirm").addEventListener("click",()=>{s.remove(),r()})}function se(r,b=""){const s=xt[r]??[],y=document.getElementById("cf-grade-checkboxes");if(!y)return;const a=b?b.split(",").map(c=>c.trim()):[];y.innerHTML=s.map(c=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${c}" ${a.includes(c)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${c}</span>
      </label>
    `).join("")}const ce=document.getElementById("cf-catalog"),G=(r,b,s="")=>{ce&&(ce.innerHTML=z(r,b,s),ce.disabled=!b,s&&(ce.value=String(s)))},ue=r=>{if(!r)return;const b=document.getElementById("cf-subg"),s=document.getElementById("cf-dept"),y=document.getElementById("cf-name"),a=document.getElementById("cf-code"),c=document.getElementById("cf-credit"),p=document.getElementById("cf-grade"),f=document.getElementById("cf-dept-head"),H=v.some(J=>J.value===r.subject_group)?r.subject_group:"";if(H&&b.value!==H&&(b.value=H,b.dispatchEvent(new Event("change"))),y&&(y.value=r.subject_name??""),a&&(a.value=r.subject_code??""),c&&r.credit!=null){const J=String(r.credit);[...c.options].some(me=>me.value===J)||c.appendChild(new Option(J,J)),c.value=J}p&&r.grade_level&&([...p.options].some(J=>J.value===r.grade_level)||p.appendChild(new Option(r.grade_level,r.grade_level)),p.value=r.grade_level);const P=bt(r);s&&P&&R(H).some(J=>J.dept_code===P)&&(s.value=P,s.dispatchEvent(new Event("change"))),f&&r.learning_area&&!ze(H)&&(f.value=r.learning_area),ce&&(document.getElementById("cf-catalog-id").value=r.id,G(b.value,(s==null?void 0:s.value)||"",r.id))},Z={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};ce==null||ce.addEventListener("change",r=>{const b=r.target.value;document.getElementById("cf-catalog-id").value=b,ue(ve.get(String(b)))}),document.getElementById("cf-subg").addEventListener("change",r=>{const b=r.target.value;document.getElementById("cf-dept-label").firstChild.textContent=L(b)+" ",document.getElementById("cf-head-label").textContent=K(b),document.getElementById("cf-head-hint").textContent=ge(b);const s=document.getElementById("cf-dept"),y=s.value;s.innerHTML=de(R(b)),s.options[0].textContent=D(b),y&&ae(b)===$&&(s.value=y),$=ae(b),document.getElementById("cf-dept-head").value="",document.getElementById("cf-head-dropdown").classList.add("hidden"),G(b,s.value,"");const a=document.getElementById("cf-grade"),c=xt[b]??[];a.innerHTML=c.length?['<option value="">— เลือกชั้นปี —</option>',...c.map(p=>`<option value="${p}">${p}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=Z[b]??"",se(b)}),document.getElementById("cf-dept").addEventListener("change",r=>{var p;const b=r.target.value,s=document.getElementById("cf-subg").value,y=((p=document.getElementById("cf-catalog-id"))==null?void 0:p.value)||"";G(s,b,y);const a=ze(s)?Dt(g,j):[...new Set(k.filter(f=>f.category===Ys(s)&&f.dept_code===b&&f.head_name).map(f=>f.head_name))],c=document.getElementById("cf-dept-head");a.length===1?c.value=a[0]:a.length>1?(c.value="",xe(a)):c.value=""});const F=document.getElementById("cf-dept-head"),X=document.getElementById("cf-head-dropdown");function xe(r){X.innerHTML=r.map(b=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${l(b)}">${l(b)}</div>`).join(""),X.querySelectorAll(".head-opt").forEach(b=>b.addEventListener("mousedown",s=>{s.preventDefault(),F.value=b.dataset.val,X.classList.add("hidden")})),X.classList.toggle("hidden",!r.length)}F.addEventListener("input",()=>{const r=F.value.toLowerCase();xe(ee(r))}),F.addEventListener("focus",()=>{const r=ze(document.getElementById("cf-subg").value)?"":F.value.toLowerCase();xe(ee(r))}),F.addEventListener("blur",()=>setTimeout(()=>X.classList.add("hidden"),150));const ye=document.getElementById("cf-teacher-code"),_e=document.getElementById("cf-teacher-search"),$e=document.getElementById("cf-teacher-dropdown"),Ce=document.getElementById("cf-teacher-selected"),Oe=document.getElementById("cf-teacher-name"),Re=document.getElementById("cf-teacher-clear"),n=document.getElementById("cf-teacher-id"),I=document.getElementById("cf-phone");function B(r){if(!r){n.value="",ye.value="",_e.value="",Ce.classList.add("hidden"),Ce.classList.remove("flex"),I.value="";return}n.value=r.id,ye.value=r.teacher_code??"",_e.value=r.full_name??"",Oe.textContent=`${r.full_name}${r.teacher_code?` (${r.teacher_code})`:""}`,Ce.classList.remove("hidden"),Ce.classList.add("flex"),I.value=ut(r.phone??""),$e.classList.add("hidden")}function C(r){$e.innerHTML=r.length?r.map(b=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${b.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${b.teacher_code??""}</span>
            <span class="font-medium">${b.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',$e.querySelectorAll(".t-opt").forEach(b=>b.addEventListener("mousedown",s=>{s.preventDefault(),B(g.find(y=>String(y.id)===b.dataset.id))})),$e.classList.remove("hidden")}if(e&&!t){const r=g.find(b=>b.id===e.id);r&&B(r)}ye.oninput=()=>{const r=ye.value.trim().toLowerCase();if(!r){B(null);return}const b=g.find(s=>(s.teacher_code??"").toLowerCase()===r);if(b)B(b);else{const s=g.filter(y=>(y.teacher_code??"").toLowerCase().startsWith(r));s.length&&C(s)}},_e.onfocus=()=>C(g),_e.oninput=()=>{const r=_e.value.toLowerCase();C(r?g.filter(b=>b.full_name.toLowerCase().includes(r)||(b.teacher_code??"").toLowerCase().includes(r)):g)},_e.onblur=()=>setTimeout(()=>$e.classList.add("hidden"),150),Re.addEventListener("click",()=>B(null));const M=document.getElementById("cf-toggle-coteach"),q=document.getElementById("cf-grade-single-wrapper"),Y=document.getElementById("cf-grade-multi-container"),N=document.getElementById("cf-coteach-section");M.addEventListener("change",r=>{r.target.checked?(M.checked=!1,oe(()=>{M.checked=!0,q.classList.add("hidden"),Y.classList.remove("hidden"),N.classList.remove("hidden");const s=document.getElementById("cf-subg").value;se(s),ie()},()=>{M.checked=!1})):W(()=>{M.checked=!1,q.classList.remove("hidden"),Y.classList.add("hidden"),N.classList.add("hidden"),T=[]},()=>{M.checked=!0})});const ne=document.getElementById("cf-coteach-code"),we=document.getElementById("cf-coteach-search"),Ee=document.getElementById("cf-coteach-dropdown");function U(r){if(!r)return;if(T.some(s=>s.id===r.id)){V("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),ne.value="",we.value="";return}const b=Number(n.value);if(r.id===b){V("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),ne.value="",we.value="";return}T.push(r),ie(),ne.value="",we.value="",Ee.classList.add("hidden")}function Q(r){Ee.innerHTML=r.length?r.map(b=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${b.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${b.teacher_code??""}</span>
            <span class="font-medium">${b.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',Ee.querySelectorAll(".co-t-opt").forEach(b=>b.addEventListener("mousedown",s=>{s.preventDefault(),U(g.find(y=>String(y.id)===b.dataset.id))})),Ee.classList.remove("hidden")}if(ne.oninput=()=>{const r=ne.value.trim().toLowerCase();if(!r)return;const b=g.find(s=>(s.teacher_code??"").toLowerCase()===r);if(b)U(b);else{const s=g.filter(y=>(y.teacher_code??"").toLowerCase().startsWith(r));s.length&&Q(s)}},we.onfocus=()=>Q(g),we.oninput=()=>{const r=we.value.toLowerCase();Q(r?g.filter(b=>b.full_name.toLowerCase().includes(r)||(b.teacher_code??"").toLowerCase().includes(r)):g)},we.onblur=()=>setTimeout(()=>Ee.classList.add("hidden"),150),I.addEventListener("input",r=>{r.target.value=ut(r.target.value)}),t){if(document.getElementById("cf-name").value=t.subject_name??"",document.getElementById("cf-code").value=t.subject_code??"",t.credit&&(document.getElementById("cf-credit").value=String(t.credit)),t.subject_group){const r=document.getElementById("cf-subg");r.value=t.subject_group,document.getElementById("cf-dept").innerHTML=de(R(t.subject_group));const b=document.getElementById("cf-grade"),s=xt[t.subject_group]??[];b.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...s.map(y=>`<option value="${y}">${y}</option>`)].join(""),t.grade_level&&(b.value=t.grade_level),document.getElementById("cf-code-hint").textContent=Z[t.subject_group]??""}if(t.dept){const r=document.getElementById("cf-dept");r.value=t.dept,G(t.subject_group??"",t.dept,t.catalog_id??"")}if(t.learning_area)F.value=t.learning_area;else if(t.dept){const r=ze(t.subject_group)?null:lt(k,t.subject_group,t.dept);F.value=(r==null?void 0:r.head_name)??""}if(t.teacher_id){const r=g.find(b=>b.id===t.teacher_id);r&&B(r)}else if(e){const r=g.find(b=>b.id===e.id);r&&B(r)}if(te){M.checked=!0,q.classList.add("hidden"),Y.classList.remove("hidden"),N.classList.remove("hidden");const r=t.subject_group;se(r,t.grade_level),ie()}}document.getElementById("course-form").addEventListener("submit",async r=>{r.preventDefault();const b=document.getElementById("cf-submit"),s=document.getElementById("cf-subg").value,y=document.getElementById("cf-dept").value,a=document.getElementById("cf-name").value.trim(),c=document.getElementById("cf-code").value.trim(),p=parseFloat(document.getElementById("cf-credit").value)||null;let f="";if(M.checked){const me=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!me.length){V("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}f=me.map(fe=>fe.value).join(", ")}else f=document.getElementById("cf-grade").value;const H=n.value,P=I.value.trim(),J=F.value.trim();if(!s||!a||!f){V("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}b.disabled=!0,b.textContent="กำลังบันทึก...";try{const me=H?Number(H):(e==null?void 0:e.id)??null,fe=M.checked?T.map(Ie=>Ie.id):[];await o({catalog_id:document.getElementById("cf-catalog-id").value?Number(document.getElementById("cf-catalog-id").value):null,subject_group:s,dept:y||null,subject_name:a,subject_code:c||null,credit:p,grade_level:f,teacher_id:me,learning_area:J||null},fe),P&&me&&me===(e==null?void 0:e.id)&&await St(e.id,{phone:P}).catch(()=>{}),V("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(me){V("บันทึกไม่สำเร็จ: "+je(me),"error")}finally{b.disabled=!1,b.textContent=x?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function na(e,o=[],t){We("setup"),Ue("ตั้งค่าโปรไฟล์","registration");const[i,x,k,g]=await Promise.all([et().catch(()=>[]),Zt().catch(()=>[]),es().catch(()=>[]),De().catch(()=>({}))]),u=parseInt(g.academicYear??2568),S=parseInt(g.semester??1),A=[...new Map(i.map(v=>[`${v.category}:${v.dept_code}`,v])).values()],j=(v,w="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(v?A.filter(E=>!E.category||E.category===v):A).map(E=>`<option value="${E.dept_code}" ${E.dept_code===w?"selected":""}>${E.dept_name}</option>`).join(""),T=x,h=k,m=await ts(u,S).catch(()=>[]);if(Me(`<div class="max-w-lg mx-auto animate-fade">
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
            class="${be}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${Le}">
            ${j(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
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
        ${ps({prefix:"setup",samaiRooms:T,religionRooms:h,homeroomRooms:o,assignments:m,teacherId:e==null?void 0:e.id,academicYear:u,semester:S})}
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const _=()=>{var E;const v=(E=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:E.value,w=document.getElementById("setup-room-samai-wrap"),O=document.getElementById("setup-room-religion-wrap");v==="สามัญ"?(w==null||w.classList.remove("hidden"),O==null||O.classList.add("hidden")):v==="ศาสนา"?(O==null||O.classList.remove("hidden"),w==null||w.classList.add("hidden")):(w==null||w.classList.remove("hidden"),O==null||O.classList.remove("hidden"))};_(),ms(),document.querySelectorAll('input[name="setup-category"]').forEach(v=>v.addEventListener("change",()=>{var L;_();const w=(L=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:L.value,O=document.getElementById("setup-dept"),E=O==null?void 0:O.value;O&&(O.innerHTML=j(w,E))})),document.getElementById("setup-phone").addEventListener("input",v=>{const w=v.target.value.replace(/\D/g,"").slice(0,10);v.target.value=w.length<=3?w:w.length<=6?`${w.slice(0,3)} ${w.slice(3)}`:`${w.slice(0,3)} ${w.slice(3,6)} ${w.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async v=>{var O;v.preventDefault();const w=document.getElementById("setup-save");w.disabled=!0,w.textContent="กำลังบันทึก...";try{const E=document.getElementById("setup-dept").value||null,L=document.getElementById("setup-subg").value||null,K=((O=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:O.value)||null,D=document.getElementById("setup-phone").value.trim()||null,ge=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(de=>de.value),ae=[...document.querySelectorAll('input[name="setup-room-religion"]:checked')].map(de=>de.value);await St(e.id,{dept:E,subject_group:L,category:K,phone:D});const{upsertHomeroomTeacher:pe,deleteHomeroomTeacher:$}=await Ne(async()=>{const{upsertHomeroomTeacher:de,deleteHomeroomTeacher:ee}=await import("./api-BQaMiX9s.js");return{upsertHomeroomTeacher:de,deleteHomeroomTeacher:ee}},__vite__mapDeps([0,1,2,3,4])),R=async(de,ee)=>{const ve=o.filter(re=>re.category===de&&Number(re.academic_year)===u&&Number(re.semester)===S);await Promise.all(ve.filter(re=>!ee.includes(re.main_room)).map(re=>$(re.id).catch(()=>{}))),await Promise.all(ee.map(re=>pe({teacher_id:e.id,main_room:re,category:de,academic_year:u,semester:S})))};await Promise.all([R("สามัญ",ge),R("ศาสนา",ae)]),V("บันทึกโปรไฟล์สำเร็จ ✅","success"),t&&await t(e.profile_id)}catch(E){V("บันทึกไม่สำเร็จ: "+je(E),"error")}finally{w.disabled=!1,w.textContent="บันทึกและเริ่มใช้งาน →"}})}async function la(e,o=[],t){var _;We("profile"),Ue("โปรไฟล์ของฉัน","registration");const[i,x,k]=await Promise.all([et().catch(()=>[]),Zt().catch(()=>[]),es().catch(()=>[])]),g=await De().catch(()=>({})),u=parseInt(g.academicYear??new Date().getFullYear()+543),S=parseInt(g.semester??1),A=await ts(u,S).catch(()=>[]),j=e==null?void 0:e.category,T=j?i.filter(v=>!v.category||v.category===j):i,h=[...new Map(T.map(v=>[v.dept_code,v])).values()],m=ut((e==null?void 0:e.phone)??"");Me(`<div class="max-w-lg mx-auto animate-fade">
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
              class="${be} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${(e==null?void 0:e.category)??"—"}"
              class="${be} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${(e==null?void 0:e.full_name)??""}" class="${be}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||""}" class="${be}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${(e==null?void 0:e.username)??""}" placeholder="เช่น hambal.waji"
            class="${be} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${m}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${be}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${h.length>0?`<select id="prof-dept" class="${Le} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${h.map(v=>`<option value="${v.dept_code}" ${v.dept_code===(e==null?void 0:e.dept)?"selected":""}>${v.dept_name} (${v.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${be} font-mono uppercase" />
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
        ${ps({prefix:"prof",samaiRooms:x,religionRooms:k,homeroomRooms:o,assignments:A,teacherId:e==null?void 0:e.id,academicYear:u,semester:S})}

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
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${be}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${be}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`),window._profileFocus==="password"&&(window._profileFocus=null,requestAnimationFrame(()=>{const v=document.getElementById("prof-pw-new");v==null||v.scrollIntoView({behavior:"smooth",block:"center"}),v==null||v.focus()})),e&&(ms(),document.getElementById("prof-phone").addEventListener("input",v=>{v.target.value=ut(v.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",v=>{const w=v.target.files[0];w&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(w)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async v=>{var E;v.preventDefault();const w=document.getElementById("prof-save"),O=document.getElementById("prof-name").value.trim();if(!O){V("กรุณากรอกชื่อ-นามสกุล","warning");return}w.disabled=!0,w.textContent="กำลังบันทึก...";try{const L=document.getElementById("prof-dept"),K=document.getElementById("prof-dept-txt"),D=document.getElementById("prof-subg"),ge=((K==null?void 0:K.value.trim().toUpperCase())||(L==null?void 0:L.value)||"").trim()||null,ae=document.getElementById("prof-username").value.trim().toLowerCase(),pe=document.getElementById("prof-email").value.trim();if(ae&&!/^[a-z0-9._-]{3,32}$/.test(ae)){V("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),w.disabled=!1,w.textContent="บันทึก";return}const $={full_name:O,phone:document.getElementById("prof-phone").value.trim()||null,dept:ge,subject_group:(D==null?void 0:D.value)||null,username:ae||null,login_email:pe||null},R=(E=document.getElementById("prof-photo-file").files)==null?void 0:E[0];R&&($.image_url=await Us(e.id,R)),await St(e.id,$);const{upsertHomeroomTeacher:de,deleteHomeroomTeacher:ee,getSystemConfig:ve}=await Ne(async()=>{const{upsertHomeroomTeacher:oe,deleteHomeroomTeacher:W,getSystemConfig:se}=await import("./api-BQaMiX9s.js");return{upsertHomeroomTeacher:oe,deleteHomeroomTeacher:W,getSystemConfig:se}},__vite__mapDeps([0,1,2,3,4])),re=await ve().catch(()=>({})),he=parseInt(re.academicYear??new Date().getFullYear()+543),d=parseInt(re.semester??1),z=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(oe=>oe.value),te=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(oe=>oe.value),ie=async(oe,W)=>{const se=o.filter(ce=>ce.category===oe&&Number(ce.academic_year)===he&&Number(ce.semester)===d);await Promise.all(se.filter(ce=>!W.includes(ce.main_room)).map(ce=>ee(ce.id).catch(()=>{}))),await Promise.all(W.map(ce=>de({teacher_id:e.id,main_room:ce,category:oe,academic_year:he,semester:d})))};await Promise.all([ie("สามัญ",z),ie("ศาสนา",te)]),V("บันทึกโปรไฟล์สำเร็จ","success"),t&&await t(e.profile_id)}catch(L){V("บันทึกไม่สำเร็จ: "+je(L),"error")}finally{w.disabled=!1,w.textContent="บันทึก"}}),(_=document.getElementById("prof-pw-save"))==null||_.addEventListener("click",async()=>{const v=document.getElementById("prof-pw-new").value,w=document.getElementById("prof-pw-confirm").value;if(!v){V("กรุณากรอกรหัสผ่านใหม่","warning");return}if(v.length<6){V("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(v!==w){V("รหัสผ่านไม่ตรงกัน","warning");return}const O=document.getElementById("prof-pw-save");O.disabled=!0,O.textContent="⏳ กำลังบันทึก...";try{const{error:E}=await vt.auth.updateUser({password:v});if(E)throw E;V("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch(E){V("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+je(E),"error")}finally{O.disabled=!1,O.textContent="บันทึกรหัสผ่านใหม่"}}))}const bs="pp5_exam_docs_draft_v1",Rt="pp5_exam_docs_pending_class_id",gs="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",oo="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",mt=27,at=mt*2,xs=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],ht={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},nt={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},ao=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let le={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...nt},loadingStudents:!1},yt=[];const no=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},lo=()=>{try{return JSON.parse(localStorage.getItem(bs)||"{}")||{}}catch{return{}}},rt=()=>{localStorage.setItem(bs,JSON.stringify(le.form))},ro=()=>{let e="";try{e=sessionStorage.getItem(Rt)||"",sessionStorage.removeItem(Rt)}catch{}const o=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,o?String(o):""},gt=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},fs=e=>[...e||[]].sort((o,t)=>String(o.student_code||"").localeCompare(String(t.student_code||""),"th",{numeric:!0})),Lt=e=>{if(!e)return"";const o=new Date(`${e}T00:00:00`);return Number.isNaN(o.getTime())?"":`${o.getDate()} เดือน ${xs[o.getMonth()]} พ.ศ. ${o.getFullYear()+543}`},io=e=>{if(!e)return{day:"",month:"",year:""};const o=new Date(`${e}T00:00:00`);return Number.isNaN(o.getTime())?{day:"",month:"",year:""}:{day:String(o.getDate()),month:xs[o.getMonth()],year:String(o.getFullYear()+543)}},It=e=>{const o=e.startTime||"",t=e.endTime||"";return o&&t?`${o} - ${t}`:o||t||""},qt=(e,o)=>e?o.key==="th"?`${e} น.`:e:"",co=e=>{const o=String(e||"").trim();if(!o)return{room:"",name:""};const t=o.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(t)return{room:t[1],name:t[2].trim()};const[i,...x]=o.split(/\s+/);return{room:i,name:x.join(" ").trim()}},Ve=e=>{const o=String(e||"").trim().toUpperCase();return o==="ชาย"||o==="M"||o==="MALE"?"M":o==="หญิง"||o==="F"||o==="W"||o==="FEMALE"?"F":""},At=()=>{const e=new Set((le.students||[]).map(o=>Ve(o.gender)).filter(Boolean));return e.has("M")&&e.has("F")},po=()=>{const e=le.form,o=le.students||[];if(e.studentScope!=="split"||!At())return[o];const t=o.filter(x=>Ve(x.gender)==="M"),i=o.filter(x=>Ve(x.gender)==="F");return e.splitPrintMode==="both"?[t,i]:[e.splitGender==="F"?i:t]},mo=()=>{const e=le.form;if(e.studentScope!=="split"||!At())return"";const o=le.students.filter(i=>Ve(i.gender)==="M").length,t=le.students.filter(i=>Ve(i.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${o} + หญิง ${t})`:e.splitGender==="F"?` (เฉพาะหญิง ${t} คน)`:` (เฉพาะชาย ${o} คน)`},uo=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),Ft=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),Ht=(e,o,t,i=t.loading,x=0)=>{const k=e||[],g=k.map((S,A)=>`
    <tr>
      <td>${o+A}</td>
      <td>${l(S.student_code||"")}</td>
      <td class="nm">${l(S.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),u=Array.from({length:Math.max(0,x-k.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return g||u?g+u:`<tr><td colspan="4" class="empty-students">${l(i)}</td></tr>`},bo=(e,o,t,i,x,k)=>{const g=e.slice(o*at,(o+1)*at),u=g.slice(0,mt),S=g.slice(mt,at),A=o*at+1,j=A+mt;return`
    <div class="exam-doc-paper ${k} sign-list ${o>0?"exam-doc-page-break":""}">
      ${_t(t.signListTitle)}
      ${$t(t,i,x)}
      
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
              ${Ht(S,j,t," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${wt(t,x)}
    </div>`},zt=(e,o)=>o?`${e}. .................................................... <span class="textColor">(${l(o)})</span>`:`${e}. ...........................................................................................`,wt=(e,o)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${l(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>${zt(1,o.invigilator1)}</div>
      </div>
      <div class="examiner-signature">
        <div>${zt(2,o.invigilator2)}</div>
      </div>
    </div>
  </div>`,_t=e=>`
  <div class="header">
    <img src="${gs}" alt="">
    <h2>${l(e)}</h2>
    <img src="${oo}" alt="">
  </div>`,$t=(e,o,t)=>`
  <div class="infoG">
    <div class="info1">
      ${l(e.examType)}: <span class="textColor">${l(t.examType||"")}</span>
      ${l(e.term)}: <span class="textColor">${l(t.semester||"")}</span>
      ${l(e.year)}: <span class="textColor">${l(t.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${l(e.subject)}: <span class="textColor">${l(o.subjectName||"")}</span>
      ${l(e.subjectCode)}: <span class="textColor">${l(o.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${l(e.examDate)}: <span class="textColor">${l(t.examDateLabel||Lt(t.examDate))}</span>
      ${l(e.examTime)}: <span class="textColor">${l(t.examTimeLabel||It(t))}</span>
    </div>
    <div class="info4">
      ${l(e.teacher)}: <span class="textColor">${l(o.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${l(e.classLevel)}: <span class="textColor">${l(o.className||"")}</span>
    </div>
  </div>`,go=e=>`
  <div class="header-single">
    <img src="${gs}" alt="">
    <h2>${l(e)}</h2>
  </div>`,Gt=(e,o)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${l(o||"")}</span>
  </div>`,xo=(e,o,t,i)=>{const[x,k]=String(i.room||"").split("/");return`
  <div class="env-line">
    ${l(e.envTerm)} <span class="textColor env-blank-sm">${l(t.semester||"")}</span>
    ${l(e.envYear)} <span class="textColor env-blank-sm">${l(t.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${l(e.envSubject)} <span class="textColor env-blank-lg">${l(o.subjectName||"")}</span>
    ${l(e.envClass)} <span class="textColor env-blank-sm">${l(x||"")}</span> / <span class="textColor env-blank-sm">${l(k||"")}</span>
  </div>
  <div class="env-line">
    ${l(e.envTeacher)} <span class="textColor env-blank-lg">${l(o.teacherName||"")}</span>
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
  <div class="env-footer-dept">${l(e.envFooterDept)}</div>`},fo=(e,o)=>{var E,L;const t=le.form,i=ht[t.lang]||ht.th,x=le.selectedClass||{},k=gt(x),g=fs(e),u=g.length,S=io(t.examDate),A=(E=le.teacher)!=null&&E.phone?` (${le.teacher.phone})`:"",j={className:x.class_name||"",subjectName:t.subjectLabel||k.subject_name||"",subjectCode:k.subject_code||"",teacherName:(((L=le.teacher)==null?void 0:L.full_name)||"")+A},T=Math.max(1,Math.ceil(g.length/at)),h=i.dir==="rtl"?"rtl":"ltr",m=o==="all"||o==="portrait",_=o==="all"||o==="envelope",v=o==="envelope"?" envelope-only":o==="portrait"?" portrait-only":"",w=t.examAmount||String(u),O=co(j.className);return`
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
    <div id="exam-doc-print-area" class="${v.trim()}">
    ${m?`
    ${Array.from({length:T},(K,D)=>bo(g,D,i,j,t,h)).join("")}

    <div class="exam-doc-paper ${h} exam-doc-page-break">
      ${_t(i.examCoverTitle)}
      ${$t(i,j,t)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${l(i.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${u}</span> ${l(i.studentUnit)}
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
          ${Ft(15)}
        </tbody>
      </table>
      ${wt(i,t)}
    </div>

    <div class="exam-doc-paper ${h} exam-doc-page-break">
      ${_t(i.absentTitle)}
      ${$t(i,j,t)}
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
          ${Ft(15)}
        </tbody>
      </table>
      ${wt(i,t)}
    </div>
    `:""}

    ${_?t.lang==="th"?`
    <div class="exam-doc-paper ${h} landscape ${m?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${l(i.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${l(i.envelopeSubject)} <span class="textColor">${l(j.subjectName)}</span> ${l(i.subjectCode)} <span class="textColor">${l(j.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${t.examDateLabel?`${l(i.envelopeDate)} <span class="textColor">${l(t.examDateLabel)}</span>`:`${l(i.envelopeDate)} <span class="textColor">${l(S.day)}</span> ${l(i.envelopeMonth)} <span class="textColor">${l(S.month)}</span> ${l(i.envelopeYear)} <span class="textColor">${l(S.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${t.examTimeLabel?`${l(i.envelopeTime)} <span class="textColor">${l(t.examTimeLabel)}</span>`:`${l(i.envelopeTime)} <span class="textColor">${l(qt(t.startTime,i))}</span> ${l(i.envelopeTo)} <span class="textColor">${l(qt(t.endTime,i))}</span>`}
        </div>
        <div class="infoNP4">
          ${l(i.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${l(O.room)}</span>${O.name?`<span class="exam-envelope-class-name">${l(O.name)}</span>`:""}</span> ${l(i.envelopeStudents)} <span class="textColor">${u}</span> ${l(i.studentUnit)} ${l(i.examAmount)} <span class="textColor">${l(w)}</span> ${l(i.examUnit)}
        </div>
        <div class="infoNP5">
          ${l(i.envelopeTeacher)} <span class="textColor">${l(j.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${h} envelope-religious ${m?"exam-doc-page-break":""}">
      ${go(i.envSchoolName)}
      ${xo(i,j,t,O)}
    </div>
    `:""}
    </div>`},Tt=(e="all")=>{const t=po().map(S=>fo(S,e));if(t.length<=1)return t[0]||"";const i=t[0].match(/<style[\s\S]*?<\/style>/),x=i?i[0]:"",k=t[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),g=k?k[1]:"",u=t.map(S=>{const A=S.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return A?A[1]:""});return`${x}
<div id="exam-doc-print-area" class="${g}">${u.join("")}</div>`},vo=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${Tt("all")}
</body>
</html>`;as(e,{autoprint:!0})},ho=()=>{const e=le.selectedClass,o=gt(e);return e?`${o.subject_code||"-"} · ${o.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function yo(){yt.forEach(e=>{try{e()}catch{}}),yt=[]}function Yt(e,o){const t=document.getElementById(e),i=document.getElementById(`${e}-list`);if(!t||!i)return;const x=le.teachers||[],k=()=>{i.classList.add("hidden")},g=m=>{t.value=m.full_name||"",le.form[o]=t.value,rt(),it(),k()},u=()=>{const m=t.value.trim(),_=m.toLowerCase(),v=x.filter(w=>!m||uo(w).includes(_)).slice(0,10);if(!x.length){i.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!v.length){i.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}i.innerHTML=v.map(w=>`
      <button type="button" data-id="${w.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${w.image_url?`<img src="${w.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${l((w.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${l(w.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${l(w.teacher_code||"—")}${w.dept?` · ${l(w.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),i.querySelectorAll(".exam-teacher-option").forEach(w=>{w.addEventListener("mousedown",O=>{O.preventDefault();const E=x.find(L=>String(L.id)===String(w.dataset.id));E&&g(E)})})},S=()=>{u(),i.classList.remove("hidden")},A=()=>{le.form[o]=t.value,rt(),it(),S()},j=()=>S(),T=m=>{if(m.key==="Escape"&&k(),m.key==="Enter"){const _=i.querySelector(".exam-teacher-option");_&&!i.classList.contains("hidden")&&(m.preventDefault(),_.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},h=m=>{!t.contains(m.target)&&!i.contains(m.target)&&k()};t.addEventListener("input",A),t.addEventListener("focus",j),t.addEventListener("keydown",T),document.addEventListener("mousedown",h,!0),yt.push(()=>{t.removeEventListener("input",A),t.removeEventListener("focus",j),t.removeEventListener("keydown",T),document.removeEventListener("mousedown",h,!0)})}function Ze(){const e=le.form,o=le.classes.map(t=>{const i=gt(t),x=`${i.subject_code||"-"} · ${i.subject_name||"-"} · ${t.class_name||"-"}`;return`<option value="${t.id}" ${String(e.classId)===String(t.id)?"selected":""}>${l(x)}</option>`}).join("");Me(`
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
              ${o}
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
            <input id="exam-type" list="exam-type-datalist" class="${be}" value="${l(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${ao.map(t=>`<option value="${l(t)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${be}" value="${l(e.subjectLabel)}" placeholder="${l(gt(le.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${be}" value="${l(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${be}" value="${l(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${be}" value="${l(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${be}" value="${l(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${be}" value="${l(e.endTime)}">
            </label>
          </div>
          ${e.lang!=="th"?`
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความวันที่สอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = แปลงจากวันที่ด้านบนแบบไทยให้อัตโนมัติ)</span>
            <input id="exam-date-label" class="${be}" value="${l(e.examDateLabel)}" placeholder="${l(Lt(e.examDate)||"เช่น ١٥ يوليو ٢٠٢٦")}">
          </label>
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความเวลาสอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = ใช้เวลาด้านบนตามที่ตั้งไว้)</span>
            <input id="exam-time-label" class="${be}" value="${l(e.examTimeLabel)}" placeholder="${l(It(e)||"เช่น ٠٨:٣٠ - ٠٩:٣٠")}">
          </label>`:""}
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${be}" value="${l(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${be}" value="${l(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${be}" value="${l(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${be}" value="${l(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${be}" value="${l(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${be}" value="${l(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        ${At()?(()=>{const t=le.students.filter(k=>Ve(k.gender)==="M").length,i=le.students.filter(k=>Ve(k.gender)==="F").length,x=e.studentScope==="split";return`
        <div class="mt-4 grid gap-3 sm:grid-cols-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">นักเรียนที่ใช้ (ห้องนี้มีทั้งชายและหญิง)</span>
            <select id="exam-student-scope" class="${Le}">
              <option value="all" ${x?"":"selected"}>ทั้งห้อง (ไม่แยกเพศ)</option>
              <option value="split" ${x?"selected":""}>แยกเพศ</option>
            </select>
          </label>
          ${x?`
          <label class="block">
            <span class="block text-xs font-bold text-gray-500 mb-1">เพศที่กำลังดู/พิมพ์</span>
            <select id="exam-split-gender" class="${Le}">
              <option value="M" ${e.splitGender!=="F"?"selected":""}>ชาย (${t} คน)</option>
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${i} คน)</option>
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
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${l(ho())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${le.students.length} คน${l(mo())}</span>
          ${le.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${Tt()}</div>
      </section>
    </div>`),_o()}async function kt(){const e=le.form.classId;if(le.selectedClass=le.classes.find(o=>String(o.id)===String(e))||null,le.students=[],!!e){le.loadingStudents=!0,Ze();try{le.students=fs(await Ts(e))}catch(o){console.error(o),V("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+je(o),"error")}finally{le.loadingStudents=!1}}}function Ye(){var e,o,t,i,x,k,g,u,S,A,j,T,h,m,_,v,w,O,E,L;le.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((o=document.getElementById("exam-subject-label"))==null?void 0:o.value)||"",lang:((t=document.getElementById("exam-lang"))==null?void 0:t.value)||"th",examType:((i=document.getElementById("exam-type"))==null?void 0:i.value)||"",semester:((x=document.getElementById("exam-semester"))==null?void 0:x.value)||"",academicYear:((k=document.getElementById("exam-year"))==null?void 0:k.value)||"",examDate:((g=document.getElementById("exam-date"))==null?void 0:g.value)||"",startTime:((u=document.getElementById("exam-start"))==null?void 0:u.value)||"",endTime:((S=document.getElementById("exam-end"))==null?void 0:S.value)||"",examDateLabel:((A=document.getElementById("exam-date-label"))==null?void 0:A.value)||"",examTimeLabel:((j=document.getElementById("exam-time-label"))==null?void 0:j.value)||"",classPart:((T=document.getElementById("exam-class-part"))==null?void 0:T.value)||"",periodPart:((h=document.getElementById("exam-period-part"))==null?void 0:h.value)||"",examRoom:((m=document.getElementById("exam-room"))==null?void 0:m.value)||"",examAmount:((_=document.getElementById("exam-amount"))==null?void 0:_.value)||"",invigilator1:((v=document.getElementById("exam-invigilator-1"))==null?void 0:v.value)||"",invigilator2:((w=document.getElementById("exam-invigilator-2"))==null?void 0:w.value)||"",studentScope:((O=document.getElementById("exam-student-scope"))==null?void 0:O.value)||"all",splitGender:((E=document.getElementById("exam-split-gender"))==null?void 0:E.value)||"M",splitPrintMode:((L=document.getElementById("exam-split-print-mode"))==null?void 0:L.value)||"single"},le.selectedClass=le.classes.find(K=>String(K.id)===String(le.form.classId))||null,rt()}function it(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=Tt())}function wo(){return Ye(),it(),le.form.classId?!0:(V("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function _o(){var o,t,i,x;yo(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(k=>{var g,u;(g=document.getElementById(k))==null||g.addEventListener("input",()=>{Ye(),it()}),(u=document.getElementById(k))==null||u.addEventListener("change",()=>{Ye(),it()})}),(o=document.getElementById("exam-class-id"))==null||o.addEventListener("change",async()=>{Ye(),rt(),await kt(),Ze()}),(t=document.getElementById("exam-lang"))==null||t.addEventListener("change",()=>{Ye(),Ze()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(k=>{var g;(g=document.getElementById(k))==null||g.addEventListener("change",()=>{Ye(),Ze()})}),(i=document.getElementById("exam-doc-refresh"))==null||i.addEventListener("click",async()=>{Ye(),await kt(),Ze(),V("รีเฟรชรายชื่อแล้ว","success")}),(x=document.getElementById("exam-doc-print"))==null||x.addEventListener("click",()=>{wo()&&vo()}),Yt("exam-invigilator-1","invigilator1"),Yt("exam-invigilator-2","invigilator2")}async function ra(e){We("exam-docs"),Ue("เอกสารช่วงสอบ","exam-docs"),Me(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[o,t,i]=await Promise.all([jt((e==null?void 0:e.id)??null),De().catch(()=>({})),Xt().catch(()=>[])]),x=lo(),k=ro(),g={...nt,semester:String(t.semester||nt.semester||""),academicYear:String(t.academicYear||nt.academicYear||""),examDate:no(),invigilator1:(e==null?void 0:e.full_name)||"",...x};k&&o.some(u=>String(u.id)===String(k))&&(g.classId=String(k)),le={teacher:e,classes:o,teachers:i,students:[],selectedClass:null,loadingStudents:!1,form:g},le.form.examType||(le.form.examType=nt.examType),k&&rt(),le.selectedClass=le.classes.find(u=>String(u.id)===String(le.form.classId))||null,await kt(),Ze()}catch(o){console.error(o),Me(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${l(je(o))}
    </div>`)}}let tt=null,Xe=null,st=null,Ke=null,Qe=null;const $o={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},ko={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function So(e){const o=new Date,t=new Date(e.event_date+"T00:00:00"),i=new Date((e.end_date||e.event_date)+"T23:59:59");if(o>=t&&o<=i)return{status:"ongoing"};const x=Math.max(0,Math.floor((t-o)/1e3)),k=Math.floor(x/86400),g=x%86400,u=Math.floor(g/3600),S=Math.floor(g%3600/60),A=g%60,j=`${String(u).padStart(2,"0")}:${String(S).padStart(2,"0")}:${String(A).padStart(2,"0")}`,T=x<=86400?"red":x<=3*86400?"amber":"normal";return{status:"upcoming",days:k,clock:j,urgency:T}}function Eo(e,o){if(!e)return 0;const t=new Date(e),i=new Date(o+"T00:00:00");if(isNaN(t)||isNaN(i))return 0;const x=i.getTime()-t.getTime();return x<0?0:Math.floor(x/(7*24*60*60*1e3))+1}function Vt(e,o){const t=g=>String(g??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),i=g=>new Date(g+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),x=new Date().toISOString().slice(0,10),k=(e??[]).filter(g=>(g.end_date||g.event_date)>=x).map(g=>({ev:g,cd:So(g)})).filter(({cd:g})=>g.status==="ongoing"||g.days<=14).sort((g,u)=>g.ev.event_date.localeCompare(u.ev.event_date)).slice(0,5);return k.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${k.map(({ev:g,cd:u})=>{const S=u.status==="ongoing"||u.urgency==="red",A=u.urgency==="amber",j=S?"bg-red-50 border-red-300 ring-2 ring-red-200":A?"bg-amber-50 border-amber-200":"bg-white border-gray-200",T=S?"bg-red-100 animate-pulse":A?"bg-amber-100":"bg-gray-100",h=Eo(o,g.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${j}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${T}">${S?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${ko[g.event_type]}">${$o[g.event_type]}</span>
            <span class="text-[11px] text-gray-400">${i(g.event_date)}</span>
            ${h>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${h}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${S?"text-red-800":"text-gray-800"}">${t(g.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${u.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${S?"text-red-600":A?"text-amber-600":"text-gray-500"}">อีก ${u.days} วัน</p>
               <p class="text-[11px] font-mono ${S?"text-red-400":"text-gray-400"}">${u.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function Wt(e,o,t=null){const i=u=>u==="A"?"#059669":u==="B"?"#2563eb":"#d97706",x=(u="0.11")=>t?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${u};color:${i(t.grade)}">${t.grade}</span>
       </div>`:"";if(!e.length)return"";const k=e.map(u=>({...u,cd:Hs(u.start_time,u.end_time)})).sort((u,S)=>{const A={active:0,upcoming:1,done:2};return A[u.cd.status]-A[S.cd.status]||(u.start_time??"").localeCompare(S.start_time??"")}),g=k.some(u=>u.cd.status==="active");return`
  <div onclick="window._openWenDuty('${o}')"
    class="relative overflow-hidden mb-3 border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-150
           ${g?"bg-red-50 border-red-300 ring-4 ring-red-100":"bg-amber-50 border-amber-300 ring-4 ring-amber-100"}">
    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                ${g?"bg-red-100 animate-pulse":"bg-amber-100"}">${g?"🚨":"🛡️"}</div>
    <div class="flex-1 min-w-0">
      <span class="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1
        ${g?"bg-red-200 text-red-800":"bg-amber-200 text-amber-800"}">เวรวันนี้</span>
      <p class="font-extrabold text-base mb-1 ${g?"text-red-800":"text-amber-800"}">
        ${g?"🔴 ถึงเวลาเวรแล้ว!":`วันนี้คุณมีเวร ${k.length} จุด`}
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
      <p class="text-[11px] mt-2 font-semibold ${g?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${x()}
  </div>`}const ot=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let Pe=null;function Ut(e,o){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const t=parseInt(String(o??"").replace(/[^0-9]/g,""),10);return t>=4&&t<=6?"สามัญมัธยม ม.ปลาย":t>=1&&t<=3?"สามัญมัธยม ม.ต้น":null}async function Co(e){var pe;We("overview"),Ue("ภาพรวมผู้บริหาร"),Me(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[o,t]=await Promise.all([Ds().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),De().catch(()=>({}))]),i=Object.fromEntries(o.subjectRows.map($=>[$.id,$])),x=Object.fromEntries(ot.map($=>[$,0]));let k=0;o.classRows.forEach($=>{const R=i[$.course_id],de=R?Ut(R.subject_group,R.grade_level):null;de?x[de]++:k++});const g=new Set(o.classRows.map($=>$.course_id).filter(Boolean)),u=o.subjectRows.filter($=>g.has($.id)),S=Object.fromEntries(ot.map($=>[$,new Set])),A=new Set;u.forEach($=>{const R=Ut($.subject_group,$.grade_level);R?S[R].add($.subject_name):A.add($.subject_name)});const j=Object.fromEntries(ot.map($=>[$,S[$].size])),T=new Set(u.map($=>$.subject_name)).size,h=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:o.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:o.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:o.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:T,hint:"นับชื่อวิชาไม่ซ้ำ"}],m=()=>h.map($=>`
    <button type="button" data-exec-stat="${$.key}"
      class="text-left bg-white rounded-2xl border ${Pe===$.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${$.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${$.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${$.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${$.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${Pe===$.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),_=($,R)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${$}</span>
      <span class="text-sm font-bold text-gray-800">${R.toLocaleString("th-TH")}</span>
    </div>`,v=()=>{if(!Pe)return"";let $="";if(Pe==="teachers"||Pe==="students"){const R=h.find(de=>de.key===Pe);$=`<p class="text-sm text-gray-500">${R.icon} ${R.label}ทั้งหมด <b class="text-gray-800">${R.value.toLocaleString("th-TH")}</b> คน (${R.hint})</p>`}else Pe==="courses"?$=ot.map(R=>_(R,x[R])).join("")+(k>0?_("ไม่ระบุหมวด/ยังไม่ผูกวิชา",k):""):Pe==="subjects"&&($=ot.map(R=>_(R,j[R])).join("")+(A.size>0?_("ไม่ระบุหมวด",A.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${$}
    </div>`},w={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},E=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter($=>$.show&&["council","terangganu"].includes($.key)).map($=>{const[R,de]=w[$.key]||["#E4E4E7","#9C9CA3"];return{key:$.key,id:$.id,emoji:$.emoji,label:$.label,from:R,to:de,badge:$.badge,onclick:$.href?`window.location.href='${$.href}'`:`window._navTo('${$.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map($=>ls($,t.iconTileStyle)).join(""),L=(pe=window._teacherOverviewSystems)==null?void 0:pe.find($=>$.key==="regrade"),K=rs(L==null?void 0:L.config,"teacher",{badge:L==null?void 0:L.badge,forceOpen:L==null?void 0:L.forceOpen}),ge=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map($=>`
    <a href="${$.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${$.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${$.label}</span>
    </a>`).join("");Me(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${l((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    ${K?`<div class="mb-4">${K}</div>`:""}

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${m()}
    </div>
    <div id="exec-stat-detail">${v()}</div>

    <div class="mt-5 mb-1 md:hidden">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</h4>
      <div class="flex gap-3 overflow-x-auto pb-1" id="exec-icon-grid">
        ${E}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">🖥️ จอมอนิเตอร์</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${ge}
      </div>
    </div>
  </div>`),is();function ae(){document.querySelectorAll("[data-exec-stat]").forEach($=>{$.onclick=()=>{var de;const R=$.dataset.execStat;Pe=Pe===R?null:R,document.getElementById("exec-stat-cards").innerHTML=m(),document.getElementById("exec-stat-detail").innerHTML=v(),ae(),(de=document.getElementById("exec-stat-detail-inner"))==null||de.scrollIntoView({behavior:"smooth",block:"nearest"})}})}ae()}async function Jt(e,o=[]){var U,Q,r,b;if(We("overview"),Ue("ภาพรวม"),Mt(e).includes("executive")){Co(e);return}const{getPendingExamRequestCount:t}=await Ne(async()=>{const{getPendingExamRequestCount:s}=await import("./api-BQaMiX9s.js");return{getPendingExamRequestCount:s}},__vite__mapDeps([0,1,2,3,4])),{getMyDonationRequests:i}=await Ne(async()=>{const{getMyDonationRequests:s}=await import("./api-BQaMiX9s.js");return{getMyDonationRequests:s}},__vite__mapDeps([0,1,2,3,4])),{getUnreadNotifications:x}=await Ne(async()=>{const{getUnreadNotifications:s}=await import("./api-BQaMiX9s.js");return{getUnreadNotifications:s}},__vite__mapDeps([0,1,2,3,4])),[k,g,u,S,A,j,T,h,m,_]=await Promise.all([e?Ct(e.id).catch(()=>[]):Qt().catch(()=>[]),jt((e==null?void 0:e.id)??null).catch(()=>[]),De().catch(()=>({})),e?t(e.id).catch(()=>0):Promise.resolve(0),e?i(e.id).catch(()=>[]):Promise.resolve([]),e?x(e.id).catch(()=>[]):Promise.resolve([]),e?Zs(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?Qs(e.teacher_code).catch(()=>null):Promise.resolve(null),e?Ne(()=>import("./sports-portals.js_v_10.22-DRUGF2wU.js"),__vite__mapDeps([30,6,31,1,32,23,24,2,20])).then(s=>s.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1}),(U=window._pp5AcademicTerms)!=null&&U.length?Promise.resolve(window._pp5AcademicTerms):Ns().catch(()=>[])]),v=parseInt(u.academicYear??2568),w=parseInt(u.semester??1),O=g.filter(s=>s.academic_year==null||Number(s.academic_year)===v&&Number(s.semester)===w),E=Os(_,u),L=Bt({academic_year:v,semester:w});let K=L;try{const s=localStorage.getItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`);E.some(y=>Bt(y)===s)&&(K=s)}catch{}const D=zs(u.semester_start);tt&&(clearInterval(tt),tt=null),Xe&&(clearInterval(Xe),Xe=null),st&&(clearInterval(st),st=null),Ke&&(clearInterval(Ke),Ke=null),Qe&&(clearInterval(Qe),Qe=null);const[ge,ae,pe,$,R]=await Promise.all([e?Et(e.id,v,w).catch(()=>[]):Promise.resolve([]),e?ss(e.id).catch(()=>[]):Promise.resolve([]),Bs().catch(()=>[]),Ms().catch(()=>[]),e?Ps(v,w).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries($.map(s=>[s.id,s]));const de=window._classroomMapGlobal,ee={};ae.forEach(s=>{ee[s.teacher_schedule_id]||(ee[s.teacher_schedule_id]=[]),ee[s.teacher_schedule_id].push(s.class_id)});const ve=Object.fromEntries(g.map(s=>[s.id,s])),re=Object.fromEntries(pe.map(s=>[s.period_no,s])),he=new Date().getDay(),d=ge.filter(s=>s.day_of_week===he&&(ee[s.id]??[]).length>0).map(s=>{const y=(s.period_no??1)+(s.span_periods??1)-1;return{...s,linkedClasses:(ee[s.id]??[]).map(a=>ve[a]).filter(Boolean),period:re[s.period_no],actualEndPeriod:re[y]??re[s.period_no]}}).sort((s,y)=>s.period_no-y.period_no),z=s=>{var a,c;const y=dt((a=s.period)==null?void 0:a.start_time,(c=s.actualEndPeriod)==null?void 0:c.end_time);return y.label.includes("กำลังสอน")?0:y.label.startsWith("เสร็จ")?2:1},te=d.find(s=>z(s)===0)??null,ie=[...d].filter(s=>s!==te).sort((s,y)=>z(s)-z(y)||s.period_no-y.period_no),oe=o.filter(s=>s.category==="สามัญ"),W=A.find(s=>s.package_type==="donation"&&s.status==="approved"),se=A.filter(s=>s.package_type==="donation"&&s.status==="approved").reduce((s,y)=>s+(y.amount??0),0),ce=(s,y)=>{const a=parseInt(s,10);return Number.isFinite(a)&&a>0?a:y},G=()=>{const s=String(u.donationStickerTiers??"").trim();return ce(u.donationMinAmount,99),ce(u.donationAmountStep,50),(s?s.split(`
`).filter(Boolean).map(p=>{const[f,H,P,J,me]=p.split("|").map(fe=>fe.trim());return{amount:ce(f,0),sticker:H||"🏅",title:P||`ผู้สนับสนุน ${f} บาท`,note:J||"",color:me||""}}).filter(p=>p.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([p,f,H,P,J])=>({amount:p,sticker:f,title:H,note:P,color:J}))).sort((p,f)=>p.amount-f.amount).map((p,f)=>{const H=u[`donationStickerImg${f+1}`]??"";return H&&/^https?:\/\//.test(H)?{...p,sticker:H}:p})},ue=s=>{if(!s)return"";const y=parseInt(s.slice(1,3),16),a=parseInt(s.slice(3,5),16),c=parseInt(s.slice(5,7),16);return`border:2px solid ${s};box-shadow:0 0 0 4px rgba(${y},${a},${c},0.25),0 4px 20px rgba(${y},${a},${c},0.18);`},Z=()=>{const s=String(u.donationSpecialFeatures??"").trim(),y=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return s?s.split(`
`).filter(Boolean).map(a=>{const c=a.split("|").map(p=>p.trim());return{icon:c[0]||"✨",text:c[1]||c[0]||a,minTier:parseInt(c[2])||1}}).filter(a=>a.text):y.map(([a,c,p])=>({icon:a,text:c,minTier:p}))};let F=null,X=0,xe="",ye="",_e="border border-gray-200 shadow-md";if(W&&u.quotaMode==="school_sponsored"){const s=G(),y=se,a=[...s].reverse().find(p=>y>=p.amount)??s[0],c=Math.max(0,...A.filter(p=>p.package_type==="donation"&&p.status==="approved").map(p=>Number.parseInt(String(p.donation_tier??""),10)).filter(p=>Number.isInteger(p)&&p>=1&&p<=s.length));if(X=Math.max(a?s.indexOf(a)+1:0,c),F=s[X-1]??null,F){ye=ue(F.color),_e="";const p=String(F.sticker??""),f=/^https?:\/\//.test(p)?`<img src="${p}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${p}</span>`,H=F.color?`color:${F.color};`:"color:#f59e0b;";xe=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${f}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${H}">
            ${F.note||F.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async s=>{if(!s)return;const{renderClassDetail:y}=await Ne(async()=>{const{renderClassDetail:a}=await import("./teacher-views-classes-ot6k83TX.js").then(c=>c.t);return{renderClassDetail:a}},__vite__mapDeps([19,6,0,1,2,3,4,20,21,15,22,14,23,12,24,25,13,9,10,11,26]));y(e,s)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:s}=await Ne(async()=>{const{openSmartClassroomLanding:y}=await import("./teacher-views-smart-classroom-CfucFm92.js");return{openSmartClassroomLanding:y}},__vite__mapDeps([5,6,0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]));s(e)};const $e=D>0?(()=>{const s=new Date(u.semester_start);s.setDate(s.getDate()+(D-1)*7);const y=new Date(s);y.setDate(y.getDate()+6);const a=p=>`${String(p.getDate()).padStart(2,"0")}/${String(p.getMonth()+1).padStart(2,"0")}`,c=`📅 สัปดาห์ที่ ${D} (${a(s)} – ${a(y)}) · ภาคเรียนที่ ${w}/${v}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${c}</span><span class="mr-10 lg:mr-16">${c}</span>
      </div>
    </div>
    <style>@keyframes teacher-week-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}</style>
    `})():"",Ce=Mt(e);window._openHomeroomPopup=()=>{var y;(y=document.getElementById("homeroom-popup"))==null||y.remove();const s=document.createElement("div");s.id="homeroom-popup",s.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",s.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">🏠 ห้องที่ปรึกษาของฉัน</p>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" onclick="this.closest('.fixed').remove()">×</button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3">
        ${o.map(a=>`
        <div class="border border-gray-100 rounded-xl p-3">
          <p class="font-bold text-gray-800">${a.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${a.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">${a.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${a.category==="สามัญ"?`
            <button onclick="window._openLifeSkillScore('${a.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>`:`
            <button onclick="window._openReligionScore('${a.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${a.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-4">ไม่มีห้องที่ปรึกษา</p>'}
      </div>
    </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:s}=await Ne(async()=>{const{openTeacherShirtSizeModal:y}=await import("./sports-portals.js_v_10.22-DRUGF2wU.js");return{openTeacherShirtSizeModal:y}},__vite__mapDeps([30,6,31,1,32,23,24,2,20]));s(e)};const Oe=[...new Set(g.map(s=>s.class_name).filter(Boolean))].sort(),Re=JSON.stringify(Oe).replace(/"/g,"&quot;"),n=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:Ce.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:oe.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${Re}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:o.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:m.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],I={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-competition-manager":["#D9E7F8","#4C86C6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},B=(window._teacherOverviewSystems||[]).filter(s=>s.show&&s.key!=="regrade").map(s=>{const[y,a]=I[s.key]||["#E4E4E7","#9C9CA3"];return{key:s.key,id:s.id,show:!0,emoji:s.emoji,label:s.label,from:y,to:a,badge:s.badge,onclick:s.href?`window.location.href='${s.href}'`:`window._navTo('${s.nav}')`}}),C=[...n,...B].filter(s=>s.show),M=(e==null?void 0:e.overview_prefs)||null,q=M?C.filter(s=>!(M.hiddenKeys||[]).includes(s.key)).sort((s,y)=>{const a=M.iconOrder||[],c=a.indexOf(s.key),p=a.indexOf(y.key);return c===-1&&p===-1?0:c===-1?1:p===-1?-1:c-p}):C,Y=q.map(s=>ls(s,u.iconTileStyle)).join(""),N=(Q=window._teacherOverviewSystems)==null?void 0:Q.find(s=>s.key==="regrade"),ne=rs(N==null?void 0:N.config,"teacher",{badge:N==null?void 0:N.badge,forceOpen:N==null?void 0:N.forceOpen});window._openOverviewCustomizer=()=>jo(e,C,o);const we=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">หน้าภาพรวมและงานประจำวันใช้ภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนและเอกสาร ปพ.5 ของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="teacher-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Rs(E,K,L)}
        </select>
      </label>
    </div>
  </section>`;if(Me(`<div class="animate-fade">
    ${we}

    ${ne?`<div class="mb-4">${ne}</div>`:""}

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${j.length?(()=>{const s={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},y={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},a={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},c={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},p=[...new Set(j.map(P=>P.metric))].map(P=>`<span style="background:${a[P]??"#f3f4f6"};color:${y[P]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${s[P]??P}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(j.filter(P=>P.supervisor).map(P=>[P.supervisor_id,P.supervisor])).values()].map(P=>c[P.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${j.length} รายการ — คลิกเพื่อดู
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
    ${te?(()=>{var a,c;const s=te.period?`${te.period.start_time.substring(0,5)}–${te.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${te.period_no}`,y=((a=te.linkedClasses[0])==null?void 0:a.id)??null;return`
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
          ${te.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${te.linkedClasses.map(p=>{var f;return((f=p.master_subjects)==null?void 0:f.subject_name)??p.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${te.linkedClasses.map(p=>{const f=p.classroom_id?de[p.classroom_id]:null;return p.class_name+(f?` · 📍${f.building} ห้อง ${f.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${Pt((c=te.actualEndPeriod)==null?void 0:c.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`})():""}

    ${$e}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="group relative overflow-hidden rounded-[24px] ${_e} bg-gradient-to-r from-white via-emerald-50/20 to-white px-5 pt-5 pb-5 mb-5 flex items-center gap-5 transition-all duration-200 hover:shadow-lg" style="${ye}">
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
          ${o.map(s=>`<span class="px-2 py-0.5 rounded-full text-xs ${s.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"} font-medium">🏠 ${s.main_room}</span>`).join("")}
          ${o.length===0?'<span class="px-2 py-0.5 rounded-full text-xs bg-gray-50 text-gray-400">ไม่มีห้องที่ปรึกษา</span>':""}
        </div>
      </div>
      <!-- สติกเกอร์ -->
      <div class="relative z-10">${xe}</div>
    </div>

    <!-- สรุปของฉัน — การ์ดแนวนอนแบบ responsive (เลื่อนซ้าย-ขวาได้บนมือถือ) -->
    <section class="mb-5" aria-labelledby="teacher-overview-summary-title">
      <div class="flex items-center justify-between gap-3 mb-2 px-1">
        <h3 id="teacher-overview-summary-title" class="text-sm font-bold text-gray-700">📊 สรุปของฉัน</h3>
        <span class="text-[10px] text-gray-400 sm:hidden">เลื่อนซ้าย-ขวาเพื่อดูทั้งหมด</span>
      </div>
      <div class="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 px-1 -mx-1 lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:overflow-visible lg:pb-0">
        ${[{key:"courses",label:"คอร์สวิชาของฉัน",value:k.length,hint:"รายวิชาที่เปิดสอน",icon:"📖",from:"#D1FAE5",to:"#6EE7B7",ink:"#065F46",onclick:"window._navTo('my-courses')"},{key:"classes",label:"ห้องเรียน",value:O.length,hint:`ภาคเรียนที่ ${w}/${v}`,icon:"🏫",from:"#DBEAFE",to:"#93C5FD",ink:"#1E40AF",onclick:"window._navTo('my-classes')"},{key:"homeroom",label:"ห้องที่ปรึกษา",value:o.length,hint:"ห้องที่ดูแลอยู่",icon:"🏠",from:"#FEF3C7",to:"#FCD34D",ink:"#92400E",onclick:"window._openHomeroomPopup()"},{key:"requests",label:"คำร้องรออนุมัติ",value:S,hint:S>0?"มีรายการที่ต้องตรวจสอบ":"ไม่มีรายการค้าง",icon:"🔔",from:S>0?"#FEE2E2":"#F3F4F6",to:S>0?"#FDA4AF":"#D1D5DB",ink:S>0?"#991B1B":"#4B5563",onclick:"window._navTo('requests')"},{key:"smartClassroom",label:"Smart Classroom",value:"เปิดห้องสอนสด",hint:"เครื่องมือช่วยจัดการชั้นเรียน",icon:"👑",from:"#EDE9FE",to:"#C4B5FD",ink:"#5B21B6",onclick:"window._openSmartClassroomLanding()"}].map(s=>`
          <button type="button" onclick="${s.onclick}"
            aria-label="${s.label} ${s.value}"
            class="group relative isolate min-h-[132px] min-w-[245px] sm:min-w-[280px] lg:min-w-0 snap-start overflow-hidden rounded-[22px] border-0 p-4 text-left shadow-md cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style="background:linear-gradient(135deg,${s.from} 0%,${s.to} 100%);--card-ink:${s.ink};--tw-ring-color:${s.ink};">
            <span aria-hidden="true" class="pointer-events-none absolute -right-8 -bottom-12 h-36 w-36 rounded-full opacity-35 transition-transform duration-300 group-hover:scale-125"
              style="background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.9),rgba(255,255,255,.08) 56%,transparent 57%);box-shadow:0 0 0 22px rgba(255,255,255,.12),0 0 0 44px rgba(255,255,255,.08);"></span>
            <span aria-hidden="true" class="pointer-events-none absolute right-2 -bottom-3 text-7xl sm:text-8xl leading-none opacity-80 drop-shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">${Gs(u,`overview:${s.key}`,s.icon,"max-w-[7rem] max-h-[7rem] object-contain")}</span>
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
      ${q.length>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${Y}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${Wt(T,e.teacher_code,h)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${Vt(R,u.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${ns[he]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${ge.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':ae.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${d.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${ge.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":ae.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${ge.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:ae.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${ie.map((s,y)=>{var f,H;const a=dt((f=s.period)==null?void 0:f.start_time,(H=s.actualEndPeriod)==null?void 0:H.end_time),c=a.label.startsWith("เสร็จ"),p=s.period?`${s.period.start_time.substring(0,5)}–${(s.actualEndPeriod??s.period).end_time.substring(0,5)}`:`คาบ ${s.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${c?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${c?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${c?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${s.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${c?"text-gray-400":"text-gray-700"} truncate">
                  ${s.linkedClasses.map(P=>{var J;return((J=P.master_subjects)==null?void 0:J.subject_name)??P.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${s.linkedClasses.map(P=>{const J=P.classroom_id?de[P.classroom_id]:null;return P.class_name+(J?` 📍${J.building} ห้อง ${J.room_number}`:"")}).join(" · ")} · ${p}
                </p>
              </div>
              <span id="today-cd-${y}" class="text-xs font-medium flex-shrink-0 ${a.cls}">${a.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),is(),(r=document.getElementById("donor-sticker-btn"))==null||r.addEventListener("click",()=>{if(!F)return;const s=Z(),y=F.color||"#f59e0b",a=parseInt(y.slice(1,3),16),c=parseInt(y.slice(3,5),16),p=parseInt(y.slice(5,7),16),f=String(F.sticker??""),H=/^https?:\/\//.test(f)?`<img src="${f}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${f}</div>`,P=document.createElement("div");P.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",P.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${a},${c},${p},0.85),rgba(${a},${c},${p},1))">
          ${H}
          <p class="text-white font-bold text-base">${F.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${F.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${s.map(J=>X>=(J.minTier??1)?`<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${J.icon}</span>
                     <span class="leading-snug">${J.text}</span>
                   </div>`:`<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${J.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${J.minTier}+</span>
                   </div>`).join("")}
          </div>
          ${X<4?`
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>`:""}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${a},${c},${p},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(P),P.addEventListener("click",J=>{J.target===P&&P.remove()})}),(b=document.getElementById("teacher-overview-term-switcher"))==null||b.addEventListener("change",s=>{var a,c;const y=s.target.value;try{localStorage.setItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`,y)}catch{}y===L?(a=window._navTo)==null||a.call(window,"overview"):(c=window._navTo)==null||c.call(window,"grades")}),d.length>0&&(tt=setInterval(()=>{ie.forEach((s,y)=>{var p,f;const a=document.getElementById(`today-cd-${y}`);if(!a){clearInterval(tt);return}const c=dt((p=s.period)==null?void 0:p.start_time,(f=s.actualEndPeriod)==null?void 0:f.end_time);a.textContent=c.label,a.className=`text-xs font-medium flex-shrink-0 ${c.cls}`})},3e4)),te&&(Xe=setInterval(()=>{var a,c,p,f;const s=document.getElementById("active-class-countdown");if(!s){clearInterval(Xe);return}dt((a=te.period)==null?void 0:a.start_time,(c=te.actualEndPeriod)==null?void 0:c.end_time).label.startsWith("เสร็จ")?(clearInterval(Xe),(p=document.getElementById("active-class-card"))==null||p.remove()):s.textContent=Pt((f=te.actualEndPeriod)==null?void 0:f.end_time)},1e3)),document.getElementById("teacher-live-clock")){const s=()=>{const y=new Date,a=document.getElementById("teacher-live-clock");if(!a){clearInterval(st);return}a.textContent=`${String(y.getHours()).padStart(2,"0")}:${String(y.getMinutes()).padStart(2,"0")}:${String(y.getSeconds()).padStart(2,"0")}`};s(),st=setInterval(s,1e3)}e&&T.length&&(Ke=setInterval(()=>{const s=document.getElementById("wen-duty-card");if(!s){clearInterval(Ke),Ke=null;return}s.innerHTML=Wt(T,e.teacher_code,h)},3e4)),e&&R.length&&(Qe=setInterval(()=>{const s=document.getElementById("wcal-upcoming-card");if(!s){clearInterval(Qe),Qe=null;return}s.innerHTML=Vt(R,u.semester_start)},1e3))}function jo(e,o,t){var T,h;(T=document.getElementById("overview-customizer-modal"))==null||T.remove();const i=(e==null?void 0:e.overview_prefs)||null;let x=o.map(m=>m.key);if((h=i==null?void 0:i.iconOrder)!=null&&h.length){const m=new Set(x),_=i.iconOrder.filter(w=>m.has(w)),v=x.filter(w=>!_.includes(w));x=[..._,...v]}const k=new Set(((i==null?void 0:i.hiddenKeys)||[]).filter(m=>x.includes(m))),g=Object.fromEntries(o.map(m=>[m.key,m])),u=document.createElement("div");u.id="overview-customizer-modal",u.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const S=()=>x.map((m,_)=>{const v=g[m];if(!v)return"";const w=k.has(m),O=v.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${w?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${v.from},${v.to})">${v.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${O}</span>
      <button type="button" data-oc-up="${m}" ${_===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${m}" ${_===x.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${m}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${w?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${w?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),A=()=>{const m=u.querySelector("#oc-list");m&&(m.innerHTML=S()),j()},j=()=>{u.querySelectorAll("[data-oc-toggle]").forEach(m=>m.onclick=()=>{const _=m.dataset.ocToggle;k.has(_)?k.delete(_):k.add(_),A()}),u.querySelectorAll("[data-oc-up]").forEach(m=>m.onclick=()=>{const _=x.indexOf(m.dataset.ocUp);_>0&&([x[_-1],x[_]]=[x[_],x[_-1]],A())}),u.querySelectorAll("[data-oc-down]").forEach(m=>m.onclick=()=>{const _=x.indexOf(m.dataset.ocDown);_<x.length-1&&([x[_+1],x[_]]=[x[_],x[_+1]],A())})};u.innerHTML=`
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
    </div>`,document.body.appendChild(u),j(),u.addEventListener("click",m=>{m.target===u&&u.remove()}),u.querySelector("#oc-close").addEventListener("click",()=>u.remove()),u.querySelector("#oc-save").addEventListener("click",async()=>{const m=u.querySelector("#oc-save");m.disabled=!0,m.textContent="กำลังบันทึก...";try{const _={iconOrder:x,hiddenKeys:[...k]};await Nt(e.id,{overview_prefs:_}),e.overview_prefs=_,u.remove(),V("บันทึกการปรับแต่งแล้ว","success"),Jt(e,t)}catch(_){console.error(_),V("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),m.disabled=!1,m.textContent="บันทึก"}}),u.querySelector("#oc-reset").addEventListener("click",async()=>{try{await Nt(e.id,{overview_prefs:null}),e.overview_prefs=null,u.remove(),V("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),Jt(e,t)}catch(m){console.error(m),V("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function Lo(e,o,t,i,x){const k=[i==null?void 0:i.samaiLogoBwUrl,i==null?void 0:i.samaiLogoUrl].map(he=>String(he??"").trim()).find(Boolean)||"",g=k?`${k}${k.includes("?")?"&":"?"}docLogo=${Date.now()}`:"",u=Number(e.credit??1),S=u*2,A=u*2*20,T=String(e.grade_level??"").replace(/[^0-9]/g,""),h=["AGM","AGMVOC"].includes(e.subject_group??""),m=x.find(he=>he.dept_code===e.dept)??{},_=m.dept_name??e.dept??"",v=m.head_name??"",w=m.head_sign_url??"",O=i.samaiSchoolName??"",E=i.samaiDirectorName??"",L=i.samaiDirectorSignUrl??"",K=h?i.agmAcademicHeadName??i.samaiAcademicHeadName??"":i.samaiAcademicHeadName??"",D=new Date,ge=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],ae=`${D.getDate()} ${ge[D.getMonth()]} พ.ศ. ${D.getFullYear()+543}`,pe=i.academicYear??D.getFullYear()+543,$=i.semester??1,R=(t==null?void 0:t.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",de=o.map(he=>he.class_name).join(", "),ee=T+(de?" "+de:""),ve=h?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",re=`<!DOCTYPE html>
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
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${l(O)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${l(ae)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${$} ปีการศึกษา ${pe}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${l(O)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${l((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${l(R)}</div>

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
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${l(ee)}</div>

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
    ${w?`<img src="${l(w)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
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
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${l(K)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${l(ve)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${L?`<img src="${l(L)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${l(E)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${l(O)}</div>

</div>
</body></html>`;as(re)}export{Lo as _openLessonPlanApproval,Wt as _renderWenDutyCard,Vt as _renderWorkCalendarUpcoming,sa as openCourseDocPage2Modal,oa as openScheduleCourseReview,ca as renderAnnouncementsView,wa as renderAttendance,_a as renderAttendanceGrid,Ro as renderClassDetail,pa as renderClassEditForm,Oo as renderClassForm,qo as renderCourseDocLangConfig,aa as renderCourseForm,ra as renderExamDocuments,fa as renderGrades,va as renderGradesGrid,$a as renderLifeSkillScore,ma as renderMyClasses,ta as renderMyCourses,ka as renderPrayerRoomMonitor,Sa as renderPrayerScore,la as renderProfile,na as renderProfileSetup,Ea as renderReadingScore,ha as renderRequests,ua as renderSchedule,ba as renderScheduleBuilder,Fo as renderScheduleGrid,ga as renderScoreColumns,Jt as renderTeacherOverview};
