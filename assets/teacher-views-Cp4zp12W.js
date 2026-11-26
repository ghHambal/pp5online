const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-vSXCr5aV.js","assets/supabase-BV-W2lsh.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-smart-classroom-CaePDyGE.js","assets/ui-DU3V9L7w.js","assets/donation-utils-DtZioNqn.js","assets/quiz-api-MXSuDZbX.js","assets/score-qr-scanner-Dqudf-xM.js","assets/teacher-views-attendance-DGyKbcmJ.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-utils-PYNJrmMY.js","assets/teacher-views-grades-Dj__o2WA.js","assets/score-display-EKXBehKd.js","assets/regrade-menu-window-DuuFB9GJ.js","assets/teacher-views-quiz-monitor-BXQ2BzAS.js","assets/teacher-views-quiz-analytics-Cdxi5wkj.js","assets/teacher-views-dashboard-BL7XhPIY.js","assets/teacher-views-classes-Bd_GpQId.js","assets/browser-JP79f-a9.js","assets/sync-DmHbtljR.js","assets/pp5-doc-Dyumokif.js","assets/print-overlay-BVfxEd6n.js","assets/storage-CuUjCgvI.js","assets/ai-prompt-gate-D6R7FVed.js","assets/confetti-loader-BAN5Lv-C.js","assets/lesson-plan-ai-workspace-CiiovKVu.js","assets/council-api-65TjUmSW.js","assets/lesson-plan-archive-BwAV0giF.js","assets/sports-portals.js_v_10.22-C7vHbj3Q.js","assets/sports-awards-admin-6oCPrlSb.js","assets/feature-hub.js_v_10.22-DnX-6Sl_.js"])))=>i.map(i=>d[i]);
import{a as Y,g as je,_ as Ne}from"./ui-DU3V9L7w.js";import{W as et,V as os,bH as Cs,bI as ns,b as De,aA as js,bJ as It,o as Tt,G as Nt,d as Ls,f as As,e as as,c as Bt,aq as rs,ar as ls,at as is,bK as Is,bL as Ts,bM as Ns,bN as Bs,p as ds,bO as Ms,bP as Ps,bQ as Ds,bR as Os,s as qs,bS as Rs,K as Fs,q as Hs,ax as zs,bT as Gs,bU as Vs,Z as ft}from"./api-vSXCr5aV.js";import{c as Ys,a as qt,r as Ws}from"./academic-term-switcher-DBo10kez.js";import{c as cs,s as $t}from"./supabase-BV-W2lsh.js";import"./sync-DmHbtljR.js";import{o as ps}from"./print-overlay-BVfxEd6n.js";import{_DAYS_TH_FULL as ms,setActiveNav as We,setTitle as Ue,setContent as Me,SELECT_CLS as Le,INPUT_CLS as ge,CREDIT_OPTS as Us,GRADE_OPTS as wt,_htmlEsc as r,formatPhone as vt,renderSubjectVisual as Ks,_dutyCountdownInfo as Js,_teacherPositionList as Rt,_currentWeek as Xs,renderIconTile as us,_activeRemainingDisplay as Ft,renderConfiguredVisual as Qs,_countdownInfo as ct}from"./teacher-views-utils-PYNJrmMY.js";import{b as Wo,e as Uo,a as Ko,r as Jo}from"./teacher-views-classes-Bd_GpQId.js";import{f as hn,c as yn,g as wn,h as _n,i as $n,d as kn}from"./teacher-views-classes-Bd_GpQId.js";import{Q as bs,R as gs}from"./regrade-menu-window-DuuFB9GJ.js";import{i as ze,r as Ht,c as Zs,f as lt,o as eo,a as to}from"./pp5-doc-Dyumokif.js";import{uploadTeacherPhoto as so}from"./storage-CuUjCgvI.js";import{c as oo}from"./ai-prompt-gate-D6R7FVed.js";import{_ as no}from"./teacher-views-grades-Dj__o2WA.js";import{r as En,a as Cn,b as jn}from"./teacher-views-grades-Dj__o2WA.js";import{renderAttendance as An,renderAttendanceGrid as In,renderLifeSkillScore as Tn,renderPrayerRoomMonitor as Nn,renderPrayerScore as Bn,renderReadingScore as Mn}from"./teacher-views-attendance-DGyKbcmJ.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./browser-JP79f-a9.js";import"./score-display-EKXBehKd.js";import"./confetti-loader-BAN5Lv-C.js";import"./score-qr-scanner-Dqudf-xM.js";import"./leave-time-CrS9gT63.js";const xs="https://zhjqkylesnhcotpkzoxr.supabase.co",fs="sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n";let Ge=null;function zt(e,o,t){const l=new Date(o+"T00:00:00"),f=new Date(e+"T00:00:00"),y=Math.floor((f-l)/864e5);if(y<0)return null;const p=Math.floor(y/7)+1;return p<=t?p:null}function ao(e,o,t){const[l,f]=e.includes(":")?e.split(":"):[null,e];return(l===null||l===t)&&f===o}async function ro(e){if(!e)return null;Ge||(Ge=cs(xs,fs));const[o,t,l]=await Promise.all([Ge.from("reports").select("date,status,is_late").eq("teacher_id",String(e)),Ge.from("duty_points").select("assigned_to"),Ge.from("settings").select("week_start_date,total_weeks").single()]),f=l.data||{},y=f.week_start_date,p=f.total_weeks||20;if(!y)return null;const d=new Date().toISOString().slice(0,10),_=zt(d,y,p)||1;if(_<=5)return{grade:"A",score:100,week:_};const L=String(e);let C=0;for(const S of t.data||[])for(const j of S.assigned_to||[])(j.includes(":")?j.split(":")[1]:j)===L&&C++;if(C===0)return null;const I={};for(const S of o.data||[]){const j=zt(S.date,y,p);j!==null&&(I[j]||(I[j]=[]),I[j].push(S))}const w=5,v=Math.min(_,p-2);let h=0;for(let S=1;S<=v;S++)if(S<=w)h+=100;else{const j=I[S]||[],V=j.length,B=j.filter(E=>E.is_late).length,ie=V-B,ne=Math.min(100,Math.round(V/C*100)),me=V>0?Math.max(0,Math.round(ie/V*100)):100;h+=Math.round(ne*.6+me*.4)}const g=Math.round(h/v);return{grade:g>=90?"A":g>=75?"B":"C",score:g,week:_}}async function lo(e){if(!e)return[];Ge||(Ge=cs(xs,fs));const{data:o,error:t}=await Ge.from("duty_points").select("name, time, assigned_to");if(t||!o)return[];const l=String(e),f=ms[new Date().getDay()];return o.filter(y=>(y.assigned_to??[]).some(p=>ao(p,l,f))).map(y=>{const[p,d]=String(y.time??"").split("-").map(_=>_.trim());return{name:y.name,time:y.time,start_time:p,end_time:d}})}const ht=e=>{const o=String((e==null?void 0:e.dept_label)??"").trim(),t=String((e==null?void 0:e.subject_code)??"").trim(),l=o+" "+t+" "+String((e==null?void 0:e.subject_name_arabic)??"");return/อิสลามศึกษา|อัดดีนียะห์/u.test(o)||/^(ศอ|อก|อศ|ฟป)/u.test(t)?"ISL":/ภาษาอาหรับ/u.test(o)||/^ภอ/u.test(t)||/العربية/u.test(l)?"ARB":/ภาษามลายู/u.test(o)||/^มล/u.test(t)||/الملايو/u.test(l)?"MLB":/ภาษาไทย/u.test(o)?"THAI":/ภาษาต่างประเทศ/u.test(o)?"ENG":/คณิตศาสตร์/u.test(o)?"MATH":/วิทยาศาสตร์/u.test(o)?"SC":/สังคม|อิญติมาอียะห์|อิจญ์ติมาอียะห์/u.test(o)?"SOC":/ศิลปะ/u.test(o)?"ART":/สุขศึกษา|พลศึกษา/u.test(o)?"HEALTH":/การงานอาชีพ|เทคโนโลยี/u.test(o)?e.subject_group==="ACDMVOC"?"VOC":"OCC":""},Se=e=>String(e??"").toLocaleLowerCase("th-TH").normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu,""),_t=e=>{const t=String(e??"").trim().match(/(ปวช\.?|ปวส\.?|อป\.?|ม\.?)\s*([1-6])/iu);if(!t)return"";const l=t[1].replace(/\s+/g,"");return l.startsWith("ม")?`ม.${t[2]}`:`${l}${t[2]}`},io=(e,o,t)=>{if(!o)return!1;if(ht(e)===o)return!0;const l=lt(t,e.subject_group,o);return!!(l!=null&&l.dept_name&&Se(e.dept_label)===Se(l.dept_name))};function vs({prefix:e,samaiRooms:o,religionRooms:t,homeroomRooms:l,assignments:f,teacherId:y,academicYear:p,semester:d}){const _=(L,C,I,w,c)=>{const v=`${e}-advisor-rooms-${I}`,h=`${e}-room-${I}`,g=(l??[]).filter(S=>S.category===L&&Number(S.academic_year)===Number(p)&&Number(S.semester)===Number(d)),A=new Map((f??[]).filter(S=>S.category===L).map(S=>[S.main_room,S]));return`<div id="${e}-room-${I}-wrap" class="space-y-2">
      <button type="button" data-advisor-room-toggle="${v}" aria-expanded="false"
        class="w-full flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 px-4 py-3 text-left transition">
        <span class="font-semibold text-sm text-gray-700">${c} ครูที่ปรึกษา${w}</span>
        <span class="flex items-center gap-2 text-xs text-gray-400">
          <span data-advisor-room-count="${h}">0 ห้อง</span><span data-advisor-room-chevron="${v}">▾</span>
        </span>
      </button>
      <div id="${v}" class="hidden border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-52 overflow-y-auto">
        <p class="text-[11px] text-gray-400 mb-2">เลือกได้มากกว่า 1 ห้อง · ห้องที่มีครูคนอื่นรับผิดชอบอยู่จะเลือกไม่ได้</p>
        ${C.length?C.map(S=>{var me;const j=A.get(S),V=j&&Number(j.teacher_id)===Number(y),B=!!j&&!V,ie=((me=j==null?void 0:j.teachers)==null?void 0:me.full_name)||"มีครูที่ปรึกษาแล้ว",ne=g.some(E=>E.main_room===S);return`<label class="flex items-start gap-2 text-sm rounded-lg px-2 py-1.5 ${B?"bg-gray-50 text-gray-400 cursor-not-allowed":"cursor-pointer hover:bg-emerald-50 hover:text-emerald-700"}">
            <input type="checkbox" name="${h}" value="${r(S)}" data-advisor-room="${h}" ${ne?"checked":""} ${B?"disabled":""} class="text-emerald-600 rounded mt-0.5" />
            <span class="min-w-0 flex-1"><span class="block">${r(S)}</span>${B?`<span class="block text-[11px] text-gray-400">🔒 ${r(ie)}</span>`:""}</span>
          </label>`}).join(""):`<p class="text-xs text-gray-400">ยังไม่มีห้อง${w}</p>`}
      </div>
    </div>`};return`<div class="border-t border-gray-100 pt-4 space-y-3">
    <label class="block text-sm font-semibold text-gray-700">🏠 ห้องที่ปรึกษา</label>
    ${_("สามัญ",o,"samai","สามัญ","🏫")}
    ${_("ศาสนา",t,"religion","ศาสนา","🕌")}
  </div>`}function hs(e=document){const o=()=>e.querySelectorAll("[data-advisor-room-count]").forEach(t=>{const l=t.dataset.advisorRoomCount,f=e.querySelectorAll(`input[data-advisor-room="${l}"]:checked`).length;t.textContent=`${f} ห้อง`});e.querySelectorAll("[data-advisor-room-toggle]").forEach(t=>{t.addEventListener("click",()=>{const l=e.querySelector(`#${t.dataset.advisorRoomToggle}`);if(!l)return;const f=l.classList.contains("hidden");l.classList.toggle("hidden",!f),t.setAttribute("aria-expanded",String(f));const y=e.querySelector(`[data-advisor-room-chevron="${t.dataset.advisorRoomToggle}"]`);y&&(y.textContent=f?"▴":"▾")})}),e.querySelectorAll("input[data-advisor-room]").forEach(t=>t.addEventListener("change",o)),o()}async function cn(e){We("my-courses"),Ue("คอร์สวิชาของฉัน","courses"),Me(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[o,t,l]=await Promise.all([e?Nt(e.id):as().catch(()=>[]),e?Bt(e.id).catch(()=>[]):Promise.resolve([]),De().catch(()=>({}))]),f=o,y=w=>t.filter(c=>{var v;return Number(c.course_id??((v=c.master_subjects)==null?void 0:v.id))===Number(w)}),p=w=>Number.isInteger(w)?String(w):Number(w).toFixed(1).replace(/\.0$/,""),d=w=>{const c=Number(w.credit),v=Number.isFinite(c)&&c>0;return{roomCount:y(w.id).length,credit:v?p(c):"—",periodsPerWeek:v?p(c*2):"—",periodsPerTerm:v?p(c*40):"—"}},_=w=>String(w.dept??w.subject_group??"").trim()||"รายวิชาอื่น ๆ",L=[...o.reduce((w,c)=>{const v=_(c);return w.has(v)||w.set(v,[]),w.get(v).push(c),w},new Map).entries()].sort(([w],[c])=>w.localeCompare(c,"th",{numeric:!0})),C=(w,c,v,h)=>`<div class="rounded-xl border ${h} px-3 py-2.5 min-w-0">
      <div class="flex items-center gap-2"><span class="text-base">${w}</span><strong class="text-lg leading-none text-gray-800">${c}</strong></div>
      <p class="mt-1 text-[10px] font-semibold text-gray-500">${v}</p>
    </div>`,I=w=>{const c=d(w);return`<article class="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition overflow-hidden">
        <div class="relative p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 pr-16 sm:pr-20">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">${r(w.subject_code??"—")}</span>
                ${w.dept?`<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">${r(w.dept)}</span>`:""}
              </div>
              <h3 class="mt-2 text-base sm:text-lg font-extrabold text-gray-900 leading-snug">${r(w.subject_name)}</h3>
              <p class="mt-1 text-xs text-gray-400">ระดับชั้น ${r(w.grade_level??"ไม่ระบุ")}</p>
            </div>
          </div>
          <div class="pointer-events-none absolute right-3 bottom-4 w-20 h-20 flex items-end justify-end text-6xl opacity-80 drop-shadow-md" aria-label="ไอคอนประจำวิชา">${Ks(w,l,"max-w-full max-h-full object-contain")}</div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            ${C("🏫",c.roomCount,"ห้องที่เปิดแล้ว","border-emerald-100 bg-emerald-50/50")}
            ${C("🎓",c.credit,"หน่วยกิต","border-blue-100 bg-blue-50/50")}
            ${C("🗓️",c.periodsPerWeek,"คาบ / สัปดาห์","border-amber-100 bg-amber-50/50")}
            ${C("⏱️",c.periodsPerTerm,"คาบ / ภาคเรียน","border-violet-100 bg-violet-50/50")}
          </div>

          <div class="mt-4 flex justify-end">
            <button onclick="window._openRegisterClass(${w.id})"
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
            <button class="course-workspace-btn col-span-2 min-h-[44px] text-xs text-white font-bold border border-blue-700 bg-blue-700 rounded-xl hover:bg-blue-800 shadow-sm" data-sid="${w.id}">📘 กำหนดการสอนและแผนหน้าเดียว</button>
            <button class="ccm-open-btn min-h-[40px] text-xs text-indigo-700 font-semibold border border-indigo-100 bg-indigo-50/50 rounded-xl hover:bg-indigo-50" data-sid="${w.id}" data-sname="${r(w.subject_name)}">⚙️ คอลัมน์คะแนน</button>
            <button onclick="window._openCourseDocPage2(${w.id})" class="min-h-[40px] text-xs text-emerald-700 font-semibold border border-emerald-100 bg-emerald-50/50 rounded-xl hover:bg-emerald-50">📝 คำอธิบายรายวิชา</button>
            <button class="lesson-plan-btn min-h-[40px] text-xs text-sky-700 font-semibold border border-sky-100 bg-sky-50/50 rounded-xl hover:bg-sky-50" data-sid="${w.id}">📋 ใบขออนุญาตใช้แผน</button>
            <button class="pp5-course-btn min-h-[40px] text-xs text-violet-700 font-semibold border border-violet-100 bg-violet-50/50 rounded-xl hover:bg-violet-50" data-sid="${w.id}">💾 เอกสาร ปพ.5</button>
          </div>
          <div class="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-end gap-2 flex-wrap">
            <button onclick="window._copyCourse(${w.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-purple-700 hover:bg-purple-50">📋 ทำสำเนา</button>
            <button onclick="window._editCourse(${w.id})" class="min-h-[36px] px-3 rounded-lg border bg-white text-xs font-semibold text-gray-600 hover:bg-gray-100">✏️ แก้ไข</button>
            <button class="cd2-del-course-btn min-h-[36px] px-3 rounded-lg border border-red-100 bg-white text-xs font-semibold text-red-500 hover:bg-red-50" data-id="${w.id}" data-name="${r(w.subject_name)}">🗑️ ลบ</button>
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
        ${L.map(([w,c])=>`<section>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">🏷️</div>
            <div><h2 class="font-extrabold text-gray-800">กลุ่มสาระ ${r(w)}</h2><p class="text-[11px] text-gray-400">${c.length} คอร์ส · ${c.reduce((v,h)=>v+y(h.id).length,0)} ห้องเรียน</p></div>
            <div class="h-px bg-gray-200 flex-1"></div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">${c.map(I).join("")}</div>
        </section>`).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`),document.querySelectorAll(".cd2-del-course-btn").forEach(w=>{w.addEventListener("click",()=>{window._deleteCourse(Number(w.dataset.id),w.dataset.name)})}),document.querySelectorAll(".ccm-open-btn").forEach(w=>{w.addEventListener("click",()=>{no(parseInt(w.dataset.sid),w.dataset.sname,t)})}),document.querySelectorAll(".course-workspace-btn").forEach(w=>{w.addEventListener("click",()=>{const c=parseInt(w.dataset.sid,10),v=o.find(h=>h.id===c);v&&ys(e,v,t)})}),document.querySelectorAll(".lesson-plan-btn").forEach(w=>{w.addEventListener("click",async()=>{const c=parseInt(w.dataset.sid),v=o.find(V=>V.id===c);if(!v)return;const h=t.filter(V=>{var B;return V.course_id===c||((B=V.master_subjects)==null?void 0:B.id)===c}),{getSystemConfig:g,getDepartments:A}=await Ne(async()=>{const{getSystemConfig:V,getDepartments:B}=await import("./api-vSXCr5aV.js").then(ie=>ie.eB);return{getSystemConfig:V,getDepartments:B}},__vite__mapDeps([0,1,2,3])),[S,j]=await Promise.all([g().catch(()=>({})),A().catch(()=>[])]);Oo(v,h,e,S,j)})}),document.querySelectorAll(".pp5-course-btn").forEach(w=>{w.addEventListener("click",()=>{const c=parseInt(w.dataset.sid),v=t.filter(h=>{var g;return h.course_id===c||((g=h.master_subjects)==null?void 0:g.id)===c});v.length===1?openPP5Doc(v[0].id):eo(v)})})}catch{Y("โหลดข้อมูลไม่สำเร็จ","error")}}function co({subject:e,teacher:o,syllabusItems:t,roomNames:l=[],semester:f,academicYear:y,semesterStart:p,semesterEnd:d,showNotesContent:_=!0,departmentHead:L,signatureTeachers:C=[]}){var se,ae;const I=[...t??[]].sort((G,be)=>Number(G.week_start)-Number(be.week_start)),w=_===!0,c=r,v=G=>{const be=String(G??"").replace(/\s+/g," ").trim();if(!be)return"";const Z=typeof Intl.Segmenter=="function"?[...new Intl.Segmenter("th",{granularity:"grapheme"}).segment(be)].map(ye=>ye.segment):Array.from(be),F=60;if(Z.length<=F)return be;const X=Z.slice(0,F).join(""),xe=X.lastIndexOf(" ");return`${(xe>=F*.65?X.slice(0,xe):X).trimEnd()}…`},h=G=>G?new Date(`${G}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],g=(G,be)=>{const Z=h(G),F=h(be);if(!Z.length||!F.length)return"—";const[X,xe,ye]=Z,[_e,$e,Ce]=F;return ye===Ce&&xe===$e?`${X} - ${_e} ${$e} ${Ce}`:ye===Ce?`${X} ${xe} - ${_e} ${$e} ${Ce}`:`${X} ${xe} ${ye} - ${_e} ${$e} ${Ce}`},A=G=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(String(p??"")))return null;const[be,Z,F]=p.split("-").map(Number),X=new Date(be,Z-1,F+(G-1)*7),xe=new Date(be,Z-1,F+G*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(d??""))&&xe>new Date(`${d}T00:00:00`)&&xe.setTime(new Date(`${d}T00:00:00`).getTime());const ye=_e=>`${_e.getFullYear()}-${String(_e.getMonth()+1).padStart(2,"0")}-${String(_e.getDate()).padStart(2,"0")}`;return{start:ye(X),end:ye(xe)}},S=(G,be=Number(G.week_start))=>{const Z=A(be),F=Number(G.week_start)===be&&Number(G.week_end??G.week_start)===be,X=(F?G.date_start:null)||(Z==null?void 0:Z.start),xe=(F?G.date_end:null)||(Z==null?void 0:Z.end);return g(X,xe)},j=Math.min(30,Math.max(0,...I.map(G=>Number(G.week_end)||Number(G.week_start)||0))),V=Array.from({length:j},(G,be)=>{var _e;const Z=be+1,F=I.find($e=>Z>=Number($e.week_start)&&Z<=Number($e.week_end)),X=(_e=F==null?void 0:F.source_json)==null?void 0:_e.week_type,xe=A(Z),ye=F?S(F,Z):g(xe==null?void 0:xe.start,xe==null?void 0:xe.end);return`<tr><td class="week">${Z}</td><td class="date-cell">${c(ye)}</td><td>${c((F==null?void 0:F.topic)||(X==="midterm_exam"?"สอบกลางภาค":X==="final_exam"?"สอบปลายภาค":X==="break"?"หยุด/ไม่มีการเรียน":""))}</td><td>${c((F==null?void 0:F.teaching_methods)||(X!=null&&X.includes("exam")?"ทดสอบ/ประเมินผล":""))}</td><td class="note-cell">${w?c(v(F==null?void 0:F.notes)):""}</td></tr>`}).join(""),B=e??{},ie=B.periods_per_week??(Number(B.credit)>0?Number(B.credit)*2:null),ne=[...new Set(l.map(G=>String(G??"").trim()).filter(Boolean))].join(" , "),me=C.filter(G=>G==null?void 0:G.signature_url),E=(o==null?void 0:o.signature_url)??((se=me.find(G=>Number(G.id)===Number(o==null?void 0:o.id)))==null?void 0:se.signature_url)??"",q=[...L!=null&&L.head_sign_url?[{id:`dept-${L.id}`,name:L.head_name||"หัวหน้ากลุ่มสาระ",signature_url:L.head_sign_url}]:[],...me].filter((G,be,Z)=>Z.findIndex(F=>F.signature_url===G.signature_url)===be),pe=`<option value="">เว้นช่องไว้เซ็นเอง</option>${E?`<option value="${c(E)}" data-name="${c((o==null?void 0:o.full_name)??"")}" selected>ใช้ลายเซ็นที่บันทึกไว้</option>`:""}`,ee=`<option value="">เว้นช่องไว้เซ็นเอง</option>${q.map(G=>`<option value="${c(G.signature_url)}" data-name="${c(G.name??G.full_name??"")}" ${G.signature_url===(L==null?void 0:L.head_sign_url)?"selected":""}>${c(G.name??G.full_name??"ผู้ลงนาม")}</option>`).join("")}`,fe=window.open("","_blank");if(!fe){Y("เบราว์เซอร์บล็อกหน้าต่างตัวอย่าง กรุณาอนุญาต Pop-up","warning");return}const de=5,he=new URL("pp5-form-logo.png",window.location.href).href;fe.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>กำหนดการสอน ${c(B.subject_name)}</title><style>
    @page{size:A4;margin:13mm}*{box-sizing:border-box}body{font-family:"Sarabun",Tahoma,sans-serif;color:#111;margin:0;font-size:11pt;line-height:1.5;background:#eef1f5}.toolbar{position:sticky;top:0;z-index:2;padding:10px;background:#f3f4f6;text-align:center}.toolbar button{border:0;border-radius:8px;background:#1d4ed8;color:white;padding:10px 20px;font-weight:bold;font-size:14px;cursor:pointer}.toolbar label{display:inline-flex;align-items:center;gap:6px;margin:4px;padding:7px;border:1px solid #d1d5db;border-radius:8px;background:white;font-size:12px}.toolbar select{max-width:230px;padding:6px;border:1px solid #d1d5db;border-radius:6px}.page{width:184mm;height:271mm;min-height:271mm;margin:0 auto 8mm;padding:8mm 5mm;background:white;box-shadow:0 1px 8px rgba(15,23,42,.12)}.cover{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;padding-top:12mm;break-after:page;page-break-after:always}.cover-logo{width:32mm;height:32mm;object-fit:contain;filter:grayscale(1);mix-blend-mode:multiply;margin-bottom:9mm}.cover h1{font-size:25pt;line-height:1.2;color:#167a4a;margin:0 0 15mm}.cover .cover-info{align-self:center;width:min(100%,145mm);text-align:left}.cover .course{font-size:16pt;font-weight:bold;text-align:center;margin:0 0 8mm}.cover p{font-size:14pt;margin:2.5mm 0}.cover .signatures{width:100%;margin-top:auto;padding-top:16mm;text-align:center;font-size:13pt}.cover .signatures p{margin:10mm 0;text-align:center}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:middle}.schedule{break-before:page;page-break-before:always}.table{width:100%;table-layout:fixed;border-collapse:collapse;margin-top:4mm;font-size:9.5pt}.table col.col-week{width:10mm}.table col.col-date{width:31mm}.table col.col-topic{width:53mm}.table col.col-methods{width:45mm}.table col.col-notes{width:35mm}.table th,.table td{border:1px solid #555;padding:2mm 2.2mm;vertical-align:top;overflow-wrap:anywhere}.table th{background:#e8eefb;text-align:center}.table .week{text-align:center;white-space:nowrap}.table .date-cell{text-align:center;vertical-align:middle;white-space:nowrap;font-size:9pt}.table .note-cell{font-size:9pt;line-height:1.35}.table tr{break-inside:avoid;page-break-inside:avoid}.table thead{display:table-header-group}.table .doc-title th{border:0;background:white;font-size:18pt;padding:0;text-align:center}.table .doc-meta th{border:0;background:white;font-size:10pt;font-weight:normal;padding:0;text-align:center}@media print{body{background:white}.toolbar{display:none}.page{margin:0;width:auto;height:auto;min-height:0;padding:0;box-shadow:none}.cover{height:271mm;min-height:271mm;padding:12mm 5mm;break-after:page;page-break-after:always}.schedule{break-before:page;page-break-before:always}}
  </style></head><body><div class="toolbar"><label>ลายเซ็นครู<select id="cover-teacher-sign">${pe}</select></label><label>หัวหน้ากลุ่มสาระ<select id="cover-dept-sign">${ee}</select></label><button onclick="window.print()">🖨️ พิมพ์ / บันทึก PDF</button></div><section class="page cover"><img class="cover-logo" src="${c(he)}" alt="ตราโรงเรียน"><h1>กำหนดการสอน</h1><div class="cover-info"><p class="course">รายวิชา ${c(B.subject_name||"................................")} (${c(B.subject_code||".............")})</p><p>ครูผู้สอน ${c((o==null?void 0:o.full_name)||"................................")}</p><p>ชั้น ${c(B.grade_level||"....................")}</p><p>ห้องเรียน ${c(ne||"................................")}</p><p>จำนวน ${c(ie||"........")} คาบ/สัปดาห์</p><p>ภาคเรียนที่ ${c(f||"....")} ปีการศึกษา ${c(y||"........")}</p></div><div class="signatures"><p>ลงชื่อ <img id="cover-teacher-sign-img" class="sign-img" src="${c(E)}" alt="" style="${E?"":"display:none"}"> ครูผู้สอน</p><p>ลงชื่อ <img id="cover-dept-sign-img" class="sign-img" src="${c((L==null?void 0:L.head_sign_url)??"")}" alt="" style="${L!=null&&L.head_sign_url?"":"display:none"}"> หัวหน้ากลุ่มสาระการเรียนรู้</p><p>ลงชื่อ......................................................................ผู้อำนวยการโรงเรียน</p></div></section><section class="page schedule"><table class="table"><colgroup><col class="col-week"><col class="col-date"><col class="col-topic"><col class="col-methods"><col class="col-notes"></colgroup><thead><tr class="doc-title"><th colspan="${de}">กำหนดการสอน</th></tr><tr class="doc-meta"><th colspan="${de}">รายวิชา ${c(B.subject_name||"—")} รหัส ${c(B.subject_code||"—")} ${c(B.grade_level||"")} · คุณครู ${c((o==null?void 0:o.full_name)||"—")}</th></tr><tr class="doc-meta"><th colspan="${de}">ภาคเรียนที่ ${c(f||"—")} ปีการศึกษา ${c(y||"—")}</th></tr><tr><th>สัปดาห์ที่</th><th>วัน/เดือน/ปี</th><th>เนื้อหา</th><th>รูปแบบการสอน</th><th>หมายเหตุ</th></tr></thead><tbody>${V}</tbody></table></section><script>for(const role of ['teacher','dept']){const select=document.querySelector('#cover-'+role+'-sign'),img=document.querySelector('#cover-'+role+'-sign-img'),key='pp5-course-sign-'+role+'-${Number(B.id)||0}';const previous=localStorage.getItem(key);if(previous!==null&&[...select.options].some(option=>option.value===previous))select.value=previous;const update=()=>{img.src=select.value;img.style.display=select.value?'':'none';localStorage.setItem(key,select.value)};select.addEventListener('change',update);update()}<\/script></body></html>`),fe.document.close();const m=[...fe.document.querySelectorAll(".cover .cover-info p")],z=String(ne||B.grade_level||"").trim()||"....................";m[2]&&(m[2].textContent=`ชั้น ${z}`),(ae=m[3])==null||ae.remove();const te=fe.document.querySelector(".schedule .doc-meta th");te&&(te.textContent=`รายวิชา ${B.subject_name||"—"} รหัส ${B.subject_code||"—"} ${z} · คุณครู ${(o==null?void 0:o.full_name)||"—"}`);const ce=["ครูผู้สอน","หัวหน้ากลุ่มสาระการเรียนรู้","ผู้อำนวยการโรงเรียน"];[...fe.document.querySelectorAll(".cover .signatures p")].forEach((G,be)=>{const Z=G.querySelector("img");G.className="signature-row",G.replaceChildren();const F=fe.document.createElement("span");F.textContent="ลงชื่อ";const X=fe.document.createElement("span");X.className="signature-line",Z&&X.append(Z);const xe=fe.document.createElement("span");xe.textContent=ce[be],G.append(F,X,xe)});const U=fe.document.createElement("style");U.textContent=".cover .signatures{width:100%;margin-top:auto;padding-top:12mm;text-align:center;font-size:13pt}.cover .signature-row{display:flex;align-items:flex-end;justify-content:center;gap:2mm;margin:8mm 0;white-space:nowrap}.cover .signature-line{position:relative;display:inline-flex;width:92mm;height:15mm;align-items:flex-end;justify-content:center;border-bottom:1px dotted #111}.cover .sign-img{height:14mm;max-width:52mm;object-fit:contain;vertical-align:bottom}",fe.document.head.append(U)}async function ys(e,o,t){var L,C,I,w,c,v,h,g,A,S;(L=document.getElementById("course-workspace-modal"))==null||L.remove();const l=Number(o.id),f=t.filter(j=>{var V;return Number(j.course_id??((V=j.master_subjects)==null?void 0:V.id))===l}),y={class_name:"ทุกห้องในคอร์ส",course_id:l,master_subjects:o},p=document.createElement("div");p.id="course-workspace-modal",p.className="fixed inset-0 z-[95] bg-gray-50 flex items-stretch justify-stretch",p.innerHTML=`<div class="bg-gray-50 w-full h-full overflow-hidden flex flex-col">
    <header class="flex-shrink-0 px-4 sm:px-6 py-4 border-b bg-white flex items-start justify-between gap-3">
      <div class="min-w-0">
        <span class="inline-flex px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold">📘 ออกแบบการสอนของคอร์ส</span>
        <h2 class="mt-2 text-lg sm:text-xl font-extrabold text-gray-900 truncate">${r(o.subject_name)}</h2>
        <p class="text-xs text-gray-500 mt-0.5"><span class="font-mono text-blue-600">${r(o.subject_code??"—")}</span> · ${r(o.grade_level??"—")} · ${f.length} ห้องเรียน</p>
      </div>
      <button data-close class="w-10 h-10 flex-shrink-0 rounded-xl border bg-white text-gray-400 text-xl hover:text-gray-700">✕</button>
    </header>
    <div id="course-workspace-body" class="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6">
      <div class="py-16 text-center text-gray-400">กำลังโหลดข้อมูลคอร์ส...</div>
    </div>
  </div>`,document.body.appendChild(p);const d=()=>p.remove();p.querySelector("[data-close]").addEventListener("click",d),p.addEventListener("click",j=>{j.target===p&&d()});const _=p.querySelector("#course-workspace-body");try{const[{resolveSmartClassroomAccess:j,canUseSmartClassroomForClass:V},{openLessonPlanAIWorkspace:B,openLessonPlanDocument:ie,openLessonPlansPrint:ne},{openLessonPlanArchiveCenter:me}]=await Promise.all([Ne(()=>import("./teacher-views-smart-classroom-CaePDyGE.js"),__vite__mapDeps([4,5,0,1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])),Ne(()=>import("./lesson-plan-ai-workspace-CiiovKVu.js"),__vite__mapDeps([26,0,1,2,3,5,23,27,22])),Ne(()=>import("./lesson-plan-archive-BwAV0giF.js").then(n=>n.l),__vite__mapDeps([28,0,1,2,3,23,5,26,27,22]))]),[E,q,pe,ee]=await Promise.all([Ts(l).catch(()=>[]),Ns(l).catch(()=>[]),j(e),De().catch(()=>({}))]),fe=f.filter(n=>V(pe.unlocked,e,n.id)),de=pe.unlocked||fe.length>0,he=()=>ys(e,o,t),[m,z]=await Promise.all([Bs().catch(()=>[]),et().catch(()=>[])]),te=((C=f[0])==null?void 0:C.master_subjects)??{},ce=String(te.dept??o.dept??(e==null?void 0:e.dept)??"").trim().toLowerCase(),oe=String(te.learning_area??"").trim(),U=String(te.subject_group??"").toUpperCase(),se=U==="ACDM"?"สามัญ":U==="ACDMVOC"?"สามัญปวช":["AGM","AGMVOC"].includes(U)?"ศาสนา":"",ae=z.filter(n=>String(n.dept_code??"").trim().toLowerCase()===ce||String(n.dept_name??"").trim().toLowerCase()===ce),G=se?ae.filter(n=>n.category===se):ae,be=oe&&G.find(n=>String(n.head_name??"").trim()===oe)||G[0]||oe&&z.find(n=>String(n.head_name??"").trim()===oe)||null,Z=m.find(n=>String(n.full_name??"").trim()===oe),F=be?{...be,head_name:oe||(be.head_name==="ทีมบริหาร"?"":be.head_name),head_sign_url:(Z==null?void 0:Z.signature_url)||(oe&&be.head_name!==oe?null:be.head_sign_url)}:oe?{head_name:oe,head_sign_url:(Z==null?void 0:Z.signature_url)??null}:null,X=f.map(n=>{var H;const u=String(n.class_name??`ห้อง ${n.id}`).trim(),b=String(((H=n.master_subjects)==null?void 0:H.grade_level)??o.grade_level??"").trim(),$=b&&!Se(u).startsWith(Se(b))?`${b} ${u}`:u;return{id:n.id,classId:n.id,label:$,roomNames:[$]}}).filter(n=>n.label),xe=[...new Set(X.map(n=>n.label))],ye=/^\d{4}-\d{2}-\d{2}$/.test(String(ee.semester_start??""))?ee.semester_start:null,_e=Number(o.academic_year??ee.academicYear??ee.academic_year),$e=Number(o.semester??ee.semester),[Ce,Oe]=Number.isInteger(_e)&&[1,2].includes($e)?await Promise.all([Tt(e.id,_e,$e).catch(()=>[]),ds(e.id).catch(()=>[])]):[[],[]],qe=n=>{const u=new Set(Oe.filter(b=>Number(b.class_id)===Number(n)).map(b=>Number(b.teacher_schedule_id)));return[...new Set(Ce.filter(b=>u.has(Number(b.id))).map(b=>Number(b.day_of_week)).map(b=>b===0?7:b).filter(b=>Number.isInteger(b)&&b>=1&&b<=7&&b!==6))]},a=[...new Set(f.flatMap(n=>qe(n.id)))],N=n=>{if(!ye)return null;const[u,b,$]=ye.split("-").map(Number),H=new Date(u,b-1,$+(n-1)*7),O=new Date(u,b-1,$+n*7-1);/^\d{4}-\d{2}-\d{2}$/.test(String(ee.semester_end??""))&&O>new Date(`${ee.semester_end}T00:00:00`)&&O.setTime(new Date(`${ee.semester_end}T00:00:00`).getTime());const J=ue=>`${ue.getFullYear()}-${String(ue.getMonth()+1).padStart(2,"0")}-${String(ue.getDate()).padStart(2,"0")}`;return{start:J(H),end:J(O)}},P=n=>n?new Date(`${n}T00:00:00`).toLocaleDateString("th-TH-u-nu-latn",{day:"numeric",month:"short",year:"2-digit"}).split(" "):[],T=n=>{const u=P(n);return u.length?`${u[0]} ${u[1]} ${u[2]}`:"—"},D=(n,u)=>{const b=P(n),$=P(u);return!b.length||!$.length?"—":b[1]===$[1]&&b[2]===$[2]?`${b[0]} - ${$[0]} ${$[1]} ${$[2]}`:b[2]===$[2]?`${b[0]} ${b[1]} - ${$[0]} ${$[1]} ${$[2]}`:`${b[0]} ${b[1]} ${b[2]} - ${$[0]} ${$[1]} ${$[2]}`},R={teaching:"เรียน",midterm_exam:"สอบกลางภาค",final_exam:"สอบปลายภาค",break:"หยุด/ไม่มีการเรียน"};let W=null,M=!0;try{M=localStorage.getItem(`pp5-schedule-show-notes-${l}`)!=="false"}catch{}const re=()=>E.length?E.map(n=>{var Re,Ke;const u=((Re=n.source_json)==null?void 0:Re.week_type)??"teaching",b=n.unit_title??((Ke=n.source_json)==null?void 0:Ke.unit_title),$=N(n.week_start),H=N(n.week_end??n.week_start),O=n.date_start||($==null?void 0:$.start)||"",J=n.date_end||(H==null?void 0:H.end)||"";if(String(n.id)===String(W)){const Te=(ke,Be,He="text",Es="")=>`<input data-schedule-field="${ke}" type="${He}" value="${r(Be??"")}" class="w-full min-w-24 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs ${Es}" />`,Fe=(ke,Be)=>`<textarea data-schedule-field="${ke}" rows="2" class="w-full min-w-32 rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${r(Be??"")}</textarea>`;return`<tr data-schedule-row="${r(n.id)}" class="border-t border-blue-100 align-top bg-blue-50/50">
          <td class="px-2 py-2 text-xs"><div class="flex items-center gap-1">${Te("week_start",n.week_start,"number","max-w-20")}<span>–</span>${Te("week_end",n.week_end??n.week_start,"number","max-w-20")}</div><select data-schedule-field="week_type" class="mt-2 w-full rounded-lg border border-blue-200 bg-white px-2 py-1.5 text-xs">${Object.entries(R).map(([ke,Be])=>`<option value="${ke}" ${ke===u?"selected":""}>${Be}</option>`).join("")}</select></td>
          <td class="w-[138px] min-w-[138px] px-2 py-2 text-center"><div class="space-y-1">${Te("date_start",O,"date")}${Te("date_end",J,"date")}</div></td>
          <td class="px-2 py-2 space-y-1">${Te("topic",n.topic,"text","min-w-48")}<label class="block text-[10px] text-gray-500">หน่วยการเรียนรู้${Te("unit_title",b,"text")}</label></td>
          <td class="px-2 py-2">${Fe("teaching_methods",n.teaching_methods)}</td>
          <td class="px-2 py-2">${Fe("notes",n.notes)}</td>
          <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="save" data-schedule-id="${r(n.id)}" class="rounded-lg bg-emerald-600 px-2 py-1.5 text-[10px] font-bold text-white">บันทึก</button><button type="button" data-schedule-action="cancel" class="rounded-lg border bg-white px-2 py-1.5 text-[10px] font-bold text-gray-600">ยกเลิก</button></div></td>
        </tr>`}const ue=`สัปดาห์ ${n.week_start}${n.week_end!==n.week_start?`–${n.week_end}`:""}`,ve=D(O,J),Ae=R[u]??"เรียน",Ie=u==="teaching"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-800";return`<tr class="border-t border-blue-100 align-top">
        <td class="px-3 py-3 text-xs font-bold whitespace-nowrap">${r(ue)}<span class="block mt-1 px-2 py-1 rounded-lg ${Ie} text-[10px] w-fit">${r(Ae)}</span></td>
        <td class="w-[138px] min-w-[138px] px-3 py-3 text-center text-xs whitespace-nowrap">${r(ve)}</td>
        <td class="px-3 py-3 text-xs min-w-48"><p class="font-bold text-gray-800">${r(n.topic)}</p>${b?`<p class="text-[11px] text-blue-700 mt-1">${r(b)}</p>`:""}</td>
        <td class="px-3 py-3 text-xs min-w-36 whitespace-pre-wrap">${r(n.teaching_methods??"—")}</td>
        <td class="px-3 py-3 text-xs min-w-28 whitespace-pre-wrap">${r(n.notes??"—")}</td>
        <td class="px-2 py-2"><div class="flex flex-col gap-1"><button type="button" data-schedule-action="edit" data-schedule-id="${r(n.id)}" class="rounded-lg border border-blue-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-blue-700">แก้ไข</button><button type="button" data-schedule-action="delete" data-schedule-id="${r(n.id)}" class="rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-red-600">ลบ</button></div></td>
      </tr>`}).join(""):"",we=fe.map(n=>`<option value="${n.id}">${r(n.class_name??`ห้อง ${n.id}`)}</option>`).join(""),Ee=n=>{const u=Number(n),b=new Map;return E.forEach($=>{var Ae;const H=(Ae=$.source_json)==null?void 0:Ae.class_id,O=Number(H),J=H!=null&&H!==""&&Number.isInteger(O)&&O>0;if(J&&O!==u)return;const ue=`${$.week_start}-${$.week_end??$.week_start}`,ve=b.get(ue);(!ve||J&&!ve.isScoped)&&b.set(ue,{item:$,isScoped:J})}),[...b.values()].map($=>$.item)};_.innerHTML=`<nav class="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-4" aria-label="ส่วนออกแบบการสอน">
      <button type="button" data-course-tab="schedule" class="course-tab rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white">📘 กำหนดการสอน</button>
      <button type="button" data-course-tab="plans" class="course-tab rounded-xl border border-violet-200 bg-white px-4 py-2.5 text-sm font-bold text-violet-800">📝 แผนการจัดการเรียนรู้หน้าเดียว</button>
    </nav>
    <section data-course-panel="schedule" class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-blue-950">📘 กำหนดการสอนทั้งภาคเรียน</h3><p class="text-xs text-blue-700/70 mt-1">ภาพรวมรายสัปดาห์ของรายวิชา ใช้ร่วมกับ Smart Classroom ในห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2"><label class="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 text-xs text-blue-800"><input id="cw-schedule-show-notes" type="checkbox" class="h-4 w-4 accent-blue-700" ${M?"checked":""}> แสดงเนื้อหาหมายเหตุในเอกสาร</label><button id="cw-schedule-preview" class="min-h-[44px] px-4 rounded-xl border border-blue-200 bg-white text-blue-800 text-xs font-bold">👁️ ตัวอย่างเอกสารทั้งหมด</button><button id="cw-ai-schedule" class="min-h-[44px] px-4 rounded-xl ${de?"bg-blue-700 hover:bg-blue-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${de?"":"disabled"}>🤖 สร้างด้วย AI</button></div>
          </div>
          ${de?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${ye?`<p class="mt-3 text-[11px] text-blue-700">ช่วงวันที่คำนวณจากวันเปิดภาคเรียนที่ตั้งค่าไว้: ${T(ye)} · สัปดาห์ที่ 1 เริ่มวันนี้</p>`:'<p class="mt-3 text-[11px] text-amber-700">ยังไม่ได้ตั้งค่าวันเปิดภาคเรียน ระบบจะแสดงวันที่จากกำหนดการเดิมจนกว่าจะตั้งค่าวันเริ่มภาคเรียน</p>'}
          ${E.length?`<div class="mt-4 max-h-[68vh] overflow-auto rounded-xl border border-blue-100 bg-white"><table class="w-full min-w-[780px] table-fixed text-left"><colgroup><col><col class="w-[138px]"><col><col><col><col class="w-[76px]"></colgroup><thead class="sticky top-0 bg-blue-50 text-[10px] font-extrabold text-blue-900"><tr><th class="px-3 py-2">สัปดาห์</th><th class="w-[138px] px-3 py-2 text-center">วัน/เดือน</th><th class="px-3 py-2">เนื้อหา</th><th class="px-3 py-2">รูปแบบการสอน</th><th class="px-3 py-2">หมายเหตุ</th><th class="w-[76px] px-2 py-2">จัดการ</th></tr></thead><tbody id="cw-schedule-rows">${re()}</tbody></table></div>`:'<div class="mt-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 py-8 text-center text-xs text-blue-500">ยังไม่มีกำหนดการสอนของคอร์สนี้</div>'}
    </section>

    <section data-course-panel="plans" class="hidden rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div><h3 class="font-extrabold text-violet-950">📝 แผนการจัดการเรียนรู้หน้าเดียว</h3><p class="text-xs text-violet-700/70 mt-1">แผนรายครั้งที่อ้างอิงหัวข้อจากกำหนดการสอน ส่วนบันทึกหลังสอนและลายเซ็นแยกตามห้องที่มีสิทธิ์</p></div>
            <div class="flex flex-wrap items-center gap-2 justify-end"><button id="cw-plan-archive" class="min-h-[44px] px-4 rounded-xl ${q.length?"border border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50":"border border-gray-200 bg-gray-100 text-gray-400"} text-xs font-bold flex-shrink-0" ${q.length?"":"disabled"}>📦 ส่ง/จัดเก็บรายสัปดาห์</button><button id="cw-plans-print-all" class="min-h-[44px] px-4 rounded-xl ${q.length?"border border-violet-200 bg-white text-violet-800 hover:bg-violet-50":"border border-gray-200 bg-gray-100 text-gray-400"} text-xs font-bold flex-shrink-0" ${q.length?"":"disabled"}>🖨️ พิมพ์/บันทึกแผนทั้งภาคเรียน</button><button id="cw-ai-plan" class="min-h-[44px] px-4 rounded-xl ${de?"bg-violet-700 hover:bg-violet-800 text-white":"bg-gray-200 text-gray-400"} text-xs font-bold flex-shrink-0" ${de?"":"disabled"}>✨ สร้างแผนด้วย AI</button></div>
          </div>
          ${de?"":'<p class="mt-2 text-[11px] text-amber-700">ต้องมีสิทธิ์ใช้ Smart Classroom อย่างน้อยหนึ่งห้องในรายวิชานี้ก่อน</p>'}
          ${q.length?`<div class="mt-4 space-y-2">${q.map(n=>`<div class="flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-3 py-3"><button class="cw-plan-row min-w-0 flex-1 text-left hover:text-violet-800 transition" data-plan-id="${n.id}"><p class="text-sm font-bold text-gray-800">${r(n.title)}</p><p class="text-[11px] text-violet-600 mt-0.5">สัปดาห์ ${n.week_start}${n.week_end!==n.week_start?`–${n.week_end}`:""} · กดเพื่อเปิดเอกสาร/บันทึกหลังสอน</p></button><button type="button" class="cw-plan-delete shrink-0 rounded-lg border border-red-200 bg-white px-3 py-2 text-[10px] font-bold text-red-600" data-plan-id="${n.id}">ลบ</button></div>`).join("")}</div>`:'<div class="mt-4 rounded-xl border border-dashed border-violet-200 py-8 text-center text-xs text-violet-400">ยังไม่มีแผนการสอน</div>'}
    </section>
    ${q.length&&fe.length?`<div id="cw-document-picker" class="hidden fixed inset-0 z-[99] bg-black/50 items-center justify-center p-4"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5"><h3 class="font-extrabold text-gray-800">เลือกห้อง Smart Classroom</h3><p class="text-xs text-gray-400 mt-1">แผนใช้ร่วมกันในรายวิชา แต่เปิดบันทึกหลังสอนเฉพาะห้องที่มีสิทธิ์</p><select id="cw-document-class" class="mt-4 w-full min-h-[44px] border rounded-xl bg-white px-3 text-sm">${we}</select><div class="grid grid-cols-2 gap-2 mt-4"><button id="cw-document-cancel" class="min-h-[42px] rounded-xl border text-gray-500 text-xs font-bold">ยกเลิก</button><button id="cw-document-open" class="min-h-[42px] rounded-xl bg-violet-700 text-white text-xs font-bold">เปิดเอกสาร</button></div></div></div>`:""}`;const K=n=>{_.querySelectorAll("[data-course-panel]").forEach(u=>u.classList.toggle("hidden",u.dataset.coursePanel!==n)),_.querySelectorAll("[data-course-tab]").forEach(u=>{const b=u.dataset.courseTab===n;u.className=`course-tab rounded-xl px-4 py-2.5 text-sm font-bold ${b?n==="schedule"?"bg-blue-700 text-white":"bg-violet-700 text-white":"border border-gray-200 bg-white text-gray-600"}`})};_.querySelectorAll("[data-course-tab]").forEach(n=>n.addEventListener("click",()=>K(n.dataset.courseTab)));const Q=_.querySelector("#cw-schedule-rows");Q==null||Q.addEventListener("click",async n=>{const u=n.target.closest("[data-schedule-action]");if(!u)return;const b=u.dataset.scheduleId,$=E.find(ke=>String(ke.id)===String(b));if(!$)return;if(u.dataset.scheduleAction==="delete"){if(!confirm(`ลบกำหนดการสอนสัปดาห์ ${$.week_start}${$.week_end!==$.week_start?`–${$.week_end}`:""} เรื่อง "${$.topic}"?`))return;u.disabled=!0;try{await Ms($.id),Y("ลบกำหนดการสอนแล้ว","success"),he()}catch(ke){u.disabled=!1,Y(`ลบไม่สำเร็จ: ${je(ke)}`,"error")}return}if(u.dataset.scheduleAction==="edit"){W=b,Q.innerHTML=re();return}if(u.dataset.scheduleAction==="cancel"){W=null,Q.innerHTML=re();return}if(u.dataset.scheduleAction!=="save")return;const H=u.closest("[data-schedule-row]"),O=ke=>{var Be;return((Be=H.querySelector(`[data-schedule-field="${ke}"]`))==null?void 0:Be.value)??""},J=Number(O("week_start")),ue=Number(O("week_end")),ve=O("week_type"),Ae=O("date_start")||null,Ie=O("date_end")||null,Re=O("topic").trim();if(!Number.isInteger(J)||J<1||!Number.isInteger(ue)||ue<J){Y("ช่วงสัปดาห์ไม่ถูกต้อง","warning");return}if(!Re){Y("กรุณาระบุหัวข้อที่จะสอน","warning");return}if(!Object.hasOwn(R,ve)){Y("เลือกประเภทสัปดาห์ให้ถูกต้อง","warning");return}if(Ae&&Ie&&Ie<Ae){Y("วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น","warning");return}if(E.some(ke=>{if(String(ke.id)===String($.id))return!1;const Be=Number(ke.week_start),He=Number(ke.week_end??ke.week_start);return J<=He&&ue>=Be})){Y("ช่วงสัปดาห์นี้ซ้ำกับรายการอื่น กรุณาปรับเลขสัปดาห์","warning");return}const Te=O("unit_title").trim(),Fe={course_id:l,week_start:J,week_end:ue,date_start:Ae,date_end:Ie,topic:Re,teaching_methods:O("teaching_methods").trim()||null,notes:O("notes").trim()||null,source_json:{...$.source_json??{},week_start:J,week_end:ue,date_start:Ae,date_end:Ie,week_type:ve,unit_title:Te}};u.disabled=!0,u.textContent="กำลังบันทึก…";try{await Ps($.id,Fe),Object.assign($,Fe,{unit_title:Te||null}),W=null,Q.innerHTML=re(),Y("บันทึกแถวกำหนดการแล้ว","success")}catch(ke){u.disabled=!1,u.textContent="บันทึก",Y(`บันทึกไม่สำเร็จ: ${je(ke)}`,"error")}}),(I=_.querySelector("#cw-schedule-show-notes"))==null||I.addEventListener("change",n=>{M=n.currentTarget.checked;try{localStorage.setItem(`pp5-schedule-show-notes-${l}`,String(M))}catch{}}),(w=_.querySelector("#cw-ai-schedule"))==null||w.addEventListener("click",()=>{if(!X.length){Y("รายวิชานี้ยังไม่มีห้องเรียนสำหรับสร้างกำหนดการสอน","warning");return}const n=document.createElement("div");n.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับสร้างกำหนดการสอน</h3><p class="mt-1 text-xs text-gray-500">กำหนดการจะถูกบันทึกแยกตามห้องที่เลือก เพื่อไม่ให้หัวข้อของแต่ละชั้นปะปนกัน</p><select data-schedule-ai-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">ทุกห้องเหมือนกัน</option>${X.map((b,$)=>`<option value="${$}">${r(b.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-schedule-ai-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-schedule-ai-room-open class="min-h-[42px] rounded-xl bg-blue-700 text-xs font-bold text-white sm:col-span-2">เริ่มสร้างกำหนดการ</button></div></div>`,document.body.appendChild(n);const u=()=>n.remove();n.querySelector("[data-schedule-ai-room-cancel]").addEventListener("click",u),n.addEventListener("click",b=>{b.target===n&&u()}),n.querySelector("[data-schedule-ai-room-open]").addEventListener("click",()=>{var ue;const b=(ue=n.querySelector("[data-schedule-ai-room-select]"))==null?void 0:ue.value,$=b==="all"?X:[X[Number(b)]].filter(Boolean),H=$.map(ve=>Number(ve.classId)).filter(ve=>Number.isInteger(ve)&&ve>0),O=$.map(ve=>ve.label),J=b==="all"?y:f.find(ve=>Number(ve.id)===H[0])??y;u(),B({teacher:e,cls:J,courseId:l,syllabusItems:E,lessonPlans:q,currentWeek:1,initialMode:"schedule",semesterStart:ye,semesterEnd:ee.semester_end,scheduledDays:a,targetClassIds:H,targetClassLabels:O,onSaved:he})})}),(c=_.querySelector("#cw-ai-plan"))==null||c.addEventListener("click",()=>{if(!X.length){Y("รายวิชานี้ยังไม่มีห้องเรียนสำหรับสร้างแผน","warning");return}const n=document.createElement("div");n.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",n.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับสร้างแผน</h3><p class="mt-1 text-xs text-gray-500">ต้องเลือกห้องก่อนสร้างแผน หากเลือกทุกห้อง ระบบจะสร้างแผนชุดเดียวกันแยกให้แต่ละห้อง</p><select data-plan-ai-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">ทุกห้องเหมือนกัน</option>${X.map((b,$)=>`<option value="${$}">${r(b.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-plan-ai-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-plan-ai-room-open class="min-h-[42px] rounded-xl bg-violet-700 text-xs font-bold text-white sm:col-span-2">เริ่มสร้างแผน</button></div></div>`,document.body.appendChild(n);const u=()=>n.remove();n.querySelector("[data-plan-ai-room-cancel]").addEventListener("click",u),n.addEventListener("click",b=>{b.target===n&&u()}),n.querySelector("[data-plan-ai-room-open]").addEventListener("click",()=>{var ue;const b=(ue=n.querySelector("[data-plan-ai-room-select]"))==null?void 0:ue.value,$=b==="all"?X:[X[Number(b)]].filter(Boolean),H=$.map(ve=>Number(ve.classId)).filter(ve=>Number.isInteger(ve)&&ve>0),O=$.map(ve=>ve.label),J=b==="all"?y:f.find(ve=>Number(ve.id)===H[0])??y;u(),B({teacher:e,cls:J,courseId:l,syllabusItems:E,lessonPlans:q,currentWeek:1,initialMode:"plan",semesterStart:ye,semesterEnd:ee.semester_end,scheduledDays:a,targetClassIds:H,targetClassLabels:O,onSaved:he})})});const i=n=>ne({plans:q,subject:o,teacher:e,roomNames:n.flatMap(u=>u.roomNames??[]),roomGroups:n,semester:ee.semester??o.semester,academicYear:ee.academicYear??ee.academic_year??o.academic_year,departmentHead:F});(v=_.querySelector("#cw-plan-archive"))==null||v.addEventListener("click",()=>me({subject:o,teacher:e,classes:f,plans:q,semesterStart:ye,semesterEnd:ee.semester_end,termSchedule:Ce,scheduleLinks:Oe,academicYear:ee.academicYear??ee.academic_year??o.academic_year,semester:ee.semester??o.semester})),(h=_.querySelector("#cw-plans-print-all"))==null||h.addEventListener("click",()=>{const n=X;if(n.length<=1){i(n);return}const u=document.createElement("div");u.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",u.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องเรียนสำหรับพิมพ์แผน</h3><p class="mt-1 text-xs text-gray-500">เลือกห้องเดียว หรือเปิดทุกห้องเพื่อสลับแท็บและบันทึกเป็น PDF เดียว</p><select data-plan-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm"><option value="all">เปิดทุกห้อง</option>${n.map(($,H)=>`<option value="${H}">${r($.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-plan-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-plan-room-open class="min-h-[42px] rounded-xl bg-violet-700 text-xs font-bold text-white sm:col-span-2">เปิดแผน</button></div></div>`,document.body.appendChild(u);const b=()=>u.remove();u.querySelector("[data-plan-room-cancel]").addEventListener("click",b),u.addEventListener("click",$=>{$.target===u&&b()}),u.querySelector("[data-plan-room-open]").addEventListener("click",()=>{var H;const $=(H=u.querySelector("[data-plan-room-select]"))==null?void 0:H.value;b(),i($==="all"?n:[n[Number($)]])})}),(g=_.querySelector("#cw-schedule-preview"))==null||g.addEventListener("click",()=>{const n=_.querySelector("#cw-schedule-show-notes");M=(n==null?void 0:n.checked)===!0;try{localStorage.setItem(`pp5-schedule-show-notes-${l}`,String(M))}catch{}if(!X.length){Y("รายวิชานี้ยังไม่มีห้องเรียนสำหรับเปิดตัวอย่างเอกสาร","warning");return}const u=document.createElement("div");u.className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4",u.innerHTML=`<div class="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"><h3 class="text-base font-extrabold text-gray-900">เลือกห้องสำหรับดูตัวอย่างเอกสาร</h3><p class="mt-1 text-xs text-gray-500">กรุณาเลือกห้องก่อนเปิดตัวอย่าง เพื่อให้หัวเอกสารและกำหนดการสอนตรงกับห้องนั้น</p><select data-schedule-preview-room-select class="mt-4 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm">${X.map(($,H)=>`<option value="${H}">${r($.label)}</option>`).join("")}</select><div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3"><button type="button" data-schedule-preview-room-cancel class="min-h-[42px] rounded-xl border border-gray-200 text-xs font-bold text-gray-600">ยกเลิก</button><button type="button" data-schedule-preview-room-open class="min-h-[42px] rounded-xl bg-blue-700 text-xs font-bold text-white sm:col-span-2">เปิดตัวอย่างเอกสาร</button></div></div>`,document.body.appendChild(u);const b=()=>u.remove();u.querySelector("[data-schedule-preview-room-cancel]").addEventListener("click",b),u.addEventListener("click",$=>{$.target===u&&b()}),u.querySelector("[data-schedule-preview-room-open]").addEventListener("click",()=>{var O;const $=Number((O=u.querySelector("[data-schedule-preview-room-select]"))==null?void 0:O.value),H=X[$];H&&(b(),co({subject:o,teacher:e,syllabusItems:Ee(H.classId),roomNames:H.roomNames,semester:ee.semester??o.semester,academicYear:ee.academicYear??ee.academic_year??o.academic_year,semesterStart:ye,semesterEnd:ee.semester_end,showNotesContent:M,departmentHead:F,signatureTeachers:m}))})});let x=null;const s=_.querySelector("#cw-document-picker"),k=()=>{s&&(s.classList.add("hidden"),s.classList.remove("flex"))};_.querySelectorAll(".cw-plan-row").forEach(n=>n.addEventListener("click",()=>{x=q.find(u=>u.id===parseInt(n.dataset.planId,10))??null,!(!x||!fe.length||!s)&&(s.classList.remove("hidden"),s.classList.add("flex"))})),_.querySelectorAll(".cw-plan-delete").forEach(n=>n.addEventListener("click",async()=>{const u=q.find(b=>b.id===parseInt(n.dataset.planId,10));if(u&&confirm(`ลบแผน "${u.title}"? บันทึกหลังสอนและลายเซ็นที่ผูกกับแผนนี้จะถูกลบด้วย`)){n.disabled=!0;try{await Ds(u.id),Y("ลบแผนการสอนแล้ว","success"),he()}catch(b){n.disabled=!1,Y(`ลบไม่สำเร็จ: ${je(b)}`,"error")}}})),(A=_.querySelector("#cw-document-cancel"))==null||A.addEventListener("click",k),s==null||s.addEventListener("click",n=>{n.target===s&&k()}),(S=_.querySelector("#cw-document-open"))==null||S.addEventListener("click",()=>{var b;const n=parseInt((b=_.querySelector("#cw-document-class"))==null?void 0:b.value,10),u=fe.find($=>$.id===n);!x||!u||(k(),ie({plan:x,cls:u,teacher:e,classId:u.id,currentWeek:x.week_start,semesterStart:ye,semesterEnd:ee.semester_end,scheduledDays:qe(u.id)}))})}catch(j){_.innerHTML=`<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">โหลดศูนย์จัดการคอร์สไม่สำเร็จ: ${r(je(j))}</div>`}}const pt={th:{key:"th",dir:"ltr",aiLang:"ภาษาไทยที่เป็นทางการ",label:"ภาษาไทย",title:"คำอธิบายฯ",close:"ปิด",save:"บันทึก",saving:"กำลังบันทึก...",helpTitle:"ช่วยเติมข้อมูล",helpSub:"ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล",topicLabel:"บท / เรื่องที่สอน (เพิ่มได้หลายบท)",topicPlaceholder:"เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ",addTopic:"เพิ่มบท",btnCurriculum:"ค้นหลักสูตร",btnCurriculumSub:"ฐานข้อมูลแกนกลาง",btnCurriculumLoading:"กำลังค้น...",btnAI:"ให้ AI ร่าง",btnAISub:"Gemini + บทที่ระบุ",btnAILoading:"AI กำลังร่าง...",btnExternalAI:"ใช้ AI ของฉัน",btnExternalAISub:"คัดลอก Prompt + วาง JSON",btnImg:"อ่านจากรูป",btnImgSub:"AI อ่านภาพถ่าย",btnImgLoading:"กำลังอ่าน...",descLabel:"คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม",descPlaceholder:"พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ",dirLabel:"ทิศทางข้อความ",dirAuto:"อัตโนมัติ",dirRTL:"ขวาไปซ้าย (Arabic)",dirLTR:"ซ้ายไปขวา",signerLabel:"ผู้ลงนาม",signerPlaceholder:"หัวหน้ากลุ่มสาระ",signerHint:"ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร",tableTitle:"มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้",tableHint:'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',tplBasic:"พื้นฐาน 1 คอลัมน์",tplExtra:"เพิ่มเติม 1 คอลัมน์",addCol:"+ คอลัมน์",addRow:"+ แถว",rowHeader:"ข้อ",delRow:"ลบ",objTitle:"จุดประสงค์วัดผล",objHint:"(คลิกเพื่อเลือกข้อ)",between:"ระหว่างภาค ข้อที่",mid:"กลางภาค ข้อที่",final:"ปลายภาค ข้อที่",noOpts:"ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน",notSelected:"ยังไม่เลือก",colsBasic:["รหัสมาตรฐาน/ตัวชี้วัด"],colsExtra:["ผลการเรียนรู้"],colNew:e=>`คอลัมน์ ${e}`,pickerTitles:{mid:"เลือกข้อกลางภาค",between:"เลือกข้อระหว่างภาค",final:"เลือกข้อปลายภาค"},pickerCancel:"ยกเลิก",pickerOk:"ตกลง",confirmOverwrite:"ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?",confirmAIOverwrite:"ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?",confirmImgOverwrite:"เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?",confirmColChange:"เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่",toastSaved:"บันทึกคำอธิบายฯ สำเร็จ",toastSearchOk:e=>`พบ ${e} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,toastSearchEmpty:'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',toastAIDone:"AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก",toastImgDone:"AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก"},en:{key:"en",dir:"ltr",aiLang:"formal English",label:"English",title:"Course Description",close:"Close",save:"Save",saving:"Saving...",helpTitle:"Help me fill this in",helpSub:"Enter the lessons/topics below, then choose a filling method",topicLabel:"Lessons / Topics (add multiple)",topicPlaceholder:"e.g. Statistics, Exponents, Reading comprehension",addTopic:"Add topic",btnCurriculum:"Find curriculum",btnCurriculumSub:"Curriculum database",btnCurriculumLoading:"Searching...",btnAI:"Draft with AI",btnAISub:"Gemini + topics",btnAILoading:"AI is drafting...",btnExternalAI:"Use my AI",btnExternalAISub:"Copy Prompt + paste JSON",btnImg:"Read image",btnImgSub:"AI reads image",btnImgLoading:"Reading...",descLabel:"Course description / overall learning outcomes",descPlaceholder:"Write in English or another language; text direction is supported automatically",dirLabel:"Text direction",dirAuto:"Automatic",dirRTL:"Right to left",dirLTR:"Left to right",signerLabel:"Signatory",signerPlaceholder:"Head of learning area",signerHint:"Used as the learning-area head in the document",tableTitle:"Standards / Indicators / Learning outcomes",tableHint:"Rows containing text become selectable assessment items",tplBasic:"Basic: 1 column",tplExtra:"Additional: 1 column",addCol:"+ Column",addRow:"+ Row",rowHeader:"No.",delRow:"Delete",objTitle:"Assessment objectives",objHint:"(click to select)",between:"During term",mid:"Midterm",final:"Final",noOpts:"No selectable items yet",notSelected:"Not selected",colsBasic:["Standard/indicator code and full text"],colsExtra:["Learning outcomes"],colNew:e=>`Column ${e}`,pickerTitles:{mid:"Select midterm items",between:"Select during-term items",final:"Select final items"},pickerCancel:"Cancel",pickerOk:"OK",confirmOverwrite:"Searching the curriculum will overwrite existing data. Continue?",confirmAIOverwrite:"Let AI draft new content over the existing data?",confirmImgOverwrite:"Fill from the image and overwrite existing data?",confirmColChange:"Change the column format? Existing data will be fitted to the new columns.",toastSaved:"Course description saved",toastSearchOk:e=>`Found ${e} curriculum items - please review before saving`,toastSearchEmpty:"No curriculum items found - try Draft with AI instead",toastAIDone:"AI drafted the content - please review it carefully before saving",toastImgDone:"AI read the image - please review the content before saving"},jawi:{key:"jawi",dir:"rtl",aiLang:"bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.",label:"يَاوِي",title:"كتراڠن مات ڤلاجارن",close:"توتوڤ",save:"سيمڤن",saving:"سداڠ سيمڤن...",helpTitle:"بنتو ايسي ماكلومت",helpSub:"نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت",topicLabel:"باب / توڤيك ڤنڬاجارن",topicPlaceholder:"چونتوه: قواعد اللغة، فهم المقروء",addTopic:"تمبه باب",btnCurriculum:"چاري كوريكولوم",btnCurriculumSub:"ڤاڠكالن داتا",btnCurriculumLoading:"سداڠ چاري...",btnAI:"AI رنچاڠ",btnAISub:"Gemini + باب",btnAILoading:"AI سداڠ رنچاڠ...",btnImg:"باچا ڬمبر",btnImgSub:"AI باچا ڬمبر",btnImgLoading:"سداڠ باچا...",descLabel:"كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن",descPlaceholder:"تايڤ دالم توليسن ياوي",dirLabel:"اراه تيكس",dirAuto:"اوتوماتيك",dirRTL:"كانن ك كيري",dirLTR:"كيري ك كانن",signerLabel:"ڤناندا تاڠن",signerPlaceholder:"كتوا كومڤولن مات ڤلاجارن",signerHint:"ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن",tableTitle:"ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن",tableHint:"نومبور باريس يڠ برتوليس اكن جادي ڤيليهن",tplBasic:"١ لاجور اساس",tplExtra:"١ لاجور تمبهن",addCol:"+ لاجور",addRow:"+ باريس",rowHeader:"بل",delRow:"ڤادم",objTitle:"اوبجيكتيف ڤنيلاين",objHint:"(كليك اونتوق ڤيليه)",between:"سيماس ڤڠڬل",mid:"ڤرتڠهن ڤڠڬل",final:"اخير ڤڠڬل",noOpts:"بيلوم ادا ڤيليهن",notSelected:"بيلوم ڤيليه",colsBasic:["كود ڤياوايان/ڤتوك دان teks penuh"],colsExtra:["حاصيل ڤمبلاجارن"],colNew:e=>`لاجور ${e}`,pickerTitles:{mid:"ڤيليه ڤرتڠهن",between:"ڤيليه سيماس",final:"ڤيليه اخير"},pickerCancel:"بتل",pickerOk:"اوك"},ar:{key:"ar",dir:"rtl",aiLang:"اللغة العربية الفصحى",label:"العربية",title:"وصف المادة الدراسية",close:"إغلاق",save:"حفظ",saving:"جار الحفظ...",helpTitle:"مساعدة في إدخال البيانات",helpSub:"حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال",topicLabel:"الفصل / الموضوع",topicPlaceholder:"مثال: النحو، القراءة، الفقه",addTopic:"إضافة فصل",btnCurriculum:"بحث المنهج",btnCurriculumSub:"قاعدة البيانات",btnCurriculumLoading:"جار البحث...",btnAI:"صياغة AI",btnAISub:"Gemini + الفصل",btnAILoading:"جار الصياغة...",btnImg:"قراءة الصورة",btnImgSub:"AI يقرأ الصورة",btnImgLoading:"جار القراءة...",descLabel:"وصف المادة / نتائج التعلم العامة",descPlaceholder:"اكتب باللغة العربية أو أي لغة أخرى",dirLabel:"اتجاه النص",dirAuto:"تلقائي",dirRTL:"يمين إلى يسار",dirLTR:"يسار إلى يمين",signerLabel:"الموقع",signerPlaceholder:"رئيس القسم",signerHint:"يستخدم منصب رئيس القسم في الوثيقة",tableTitle:"المعايير / المؤشرات / نتائج التعلم",tableHint:"أرقام الصفوف التي تحتوي نصا تصبح اختيارات",tplBasic:"عمود أساسي واحد",tplExtra:"عمود واحد",addCol:"+ عمود",addRow:"+ صف",rowHeader:"رقم",delRow:"حذف",objTitle:"أهداف التقييم",objHint:"(انقر للاختيار)",between:"أثناء الفصل",mid:"منتصف الفصل",final:"نهاية الفصل",noOpts:"لا توجد بنود للاختيار",notSelected:"لم يتم الاختيار",colsBasic:["رمز المعيار/المؤشر والنص الكامل"],colsExtra:["نتائج التعلم"],colNew:e=>`عمود ${e}`,pickerTitles:{mid:"اختر منتصف الفصل",between:"اختر أثناء الفصل",final:"اختر نهاية الفصل"},pickerCancel:"إلغاء",pickerOk:"موافق"},rumi:{key:"rumi",dir:"ltr",aiLang:"Bahasa Melayu tulisan Rumi/Latin",label:"Rumi",title:"Keterangan Mata Pelajaran",close:"Tutup",save:"Simpan",saving:"Menyimpan...",helpTitle:"Bantu isi maklumat",helpSub:"Nyatakan bab / topik di bawah, kemudian pilih cara mengisi",topicLabel:"Bab / Topik pengajaran",topicPlaceholder:"Contoh: Tatabahasa, Kefahaman Membaca",addTopic:"Tambah bab",btnCurriculum:"Cari kurikulum",btnCurriculumSub:"Pangkalan data",btnCurriculumLoading:"Mencari...",btnAI:"Rangka AI",btnAISub:"Gemini + bab",btnAILoading:"AI merangka...",btnImg:"Baca gambar",btnImgSub:"AI baca gambar",btnImgLoading:"Membaca...",descLabel:"Keterangan mata pelajaran / hasil pembelajaran umum",descPlaceholder:"Taip dalam Bahasa Melayu atau bahasa lain",dirLabel:"Arah teks",dirAuto:"Automatik",dirRTL:"Kanan ke kiri",dirLTR:"Kiri ke kanan",signerLabel:"Penandatangan",signerPlaceholder:"Ketua kumpulan mata pelajaran",signerHint:"Gunakan jawatan ketua kumpulan dalam dokumen",tableTitle:"Piawaian / Petunjuk / Hasil pembelajaran",tableHint:"Nombor baris yang berisi teks menjadi pilihan item",tplBasic:"1 lajur asas",tplExtra:"1 lajur tambahan",addCol:"+ Lajur",addRow:"+ Baris",rowHeader:"Item",delRow:"Padam",objTitle:"Objektif penilaian",objHint:"(klik untuk pilih)",between:"Semasa penggal",mid:"Pertengahan penggal",final:"Akhir penggal",noOpts:"Tiada item untuk dipilih",notSelected:"Belum dipilih",colsBasic:["Kod piawaian/petunjuk dan teks penuh"],colsExtra:["Hasil pembelajaran"],colNew:e=>`Lajur ${e}`,pickerTitles:{mid:"Pilih pertengahan",between:"Pilih semasa",final:"Pilih akhir"},pickerCancel:"Batal",pickerOk:"OK"}};let mt=null;async function po(){if(mt)return mt;const e=await Is().catch(()=>[]);return mt=Object.fromEntries(e.map(o=>[o.lang_key,o.settings??{}])),mt}async function pn(e,o){var Oe,qe;const[t,l]=await Promise.all([As(o.id).catch(a=>(Y("โหลดคำอธิบายฯ ไม่สำเร็จ: "+je(a),"error"),null)),po()]),f=a=>{const N=Array.isArray(a)?a:["รหัสมาตรฐาน/ตัวชี้วัด"];return N.length?N.map(P=>String(P??"")):["รหัสมาตรฐาน/ตัวชี้วัด"]},y=(a,N)=>{const T=(Array.isArray(a)?a:[]).map(D=>{const R=Array.isArray(D)?D:Object.values(D??{});return Array.from({length:N},(W,M)=>String(R[M]??""))});return T.length?T:Array.from({length:12},()=>Array.from({length:N},()=>""))},p=a=>[...new Set((Array.isArray(a)?a:[]).map(N=>parseInt(N,10)).filter(N=>Number.isFinite(N)&&N>0))],d=o.subject_group==="ACDMVOC",_=!d&&(!o.subject_group||["ACDM","AGM"].includes(o.subject_group)),L=(a,N,P)=>{const D=(Array.isArray(a)?a:[]).map(R=>Object.fromEntries(N.map(W=>[W,String((R==null?void 0:R[W])??"")])));for(;D.length<P;)D.push(Object.fromEntries(N.map(R=>[R,""])));return D};let C=f(t==null?void 0:t.table_columns),I=y(t==null?void 0:t.table_rows,C.length),w=p(t==null?void 0:t.midterm_objective_items),c=p(t==null?void 0:t.between_objective_items),v=p(t==null?void 0:t.final_objective_items),h=(t==null?void 0:t.between_objective_extra)??"",g=(t==null?void 0:t.midterm_objective_extra)??"",A=(t==null?void 0:t.final_objective_extra)??"",S=["auto","rtl","ltr"].includes(t==null?void 0:t.text_direction)?t.text_direction:"auto",j=(t==null?void 0:t.description)||"",V=(t==null?void 0:t.signer_name)||o.learning_area||"",B=(Oe=t==null?void 0:t.topic_list)!=null&&Oe.length?t.topic_list:[""],ie=L(t==null?void 0:t.voc_objectives,["objective","competency"],10),ne=L(t==null?void 0:t.voc_schedule,["week","content","note"],20),me="",E="th";const q=()=>{const a={...pt.th,...pt[E]},N=(l==null?void 0:l[E])??{},P={...a,...N};return N.pickerTitles&&(P.pickerTitles={...a.pickerTitles,...N.pickerTitles}),P},pe=()=>{if(document.getElementById("cd2-rtl-font"))return;const a=document.createElement("link");a.id="cd2-rtl-font",a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap",document.head.appendChild(a)},[ee,fe]=await Promise.all([De().catch(()=>({})),et().catch(()=>[])]),de=lt(fe,o.subject_group,o.dept),he=(de==null?void 0:de.dept_name)??o.dept??"";(qe=document.getElementById("course-doc-page2-modal"))==null||qe.remove();const m=document.createElement("div");m.id="course-doc-page2-modal",m.className="fixed inset-0 z-[160] bg-white flex flex-col",document.body.appendChild(m);const z="/pp5online/course-doc/course-description-guide.png",te=()=>{var T;(T=document.getElementById("course-description-guide-modal"))==null||T.remove();const a=document.createElement("div");a.id="course-description-guide-modal",a.className="fixed inset-0 z-[210] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6",a.innerHTML=`<div role="dialog" aria-modal="true" aria-labelledby="course-description-guide-title" class="relative flex max-h-[96vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div class="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3 sm:px-5">
        <div class="min-w-0"><h3 id="course-description-guide-title" class="truncate text-sm font-extrabold text-gray-800 sm:text-base">📘 คู่มือการเขียนคำอธิบายรายวิชา</h3><p class="mt-0.5 text-[11px] text-gray-400">โปรดอ่านแนวทางก่อนสร้าง Prompt หรือวาง JSON จาก AI</p></div>
        <button type="button" data-guide-close aria-label="ปิดคู่มือ" class="min-h-[40px] shrink-0 rounded-xl border border-gray-200 px-3 text-sm font-bold text-gray-500 hover:bg-gray-50">ปิด</button>
      </div>
      <div class="min-h-0 overflow-y-auto bg-slate-50 p-2 sm:p-4"><img src="${z}" alt="คู่มือการเขียนคำอธิบายรายวิชาพื้นฐานและรายวิชาเพิ่มเติมตามแนวทาง สพฐ." class="mx-auto block h-auto max-h-[calc(96vh-120px)] w-auto max-w-full rounded-xl object-contain shadow-sm" /></div>
      <div class="flex justify-end border-t border-gray-100 bg-white px-4 py-3 sm:px-5"><button type="button" data-guide-close class="min-h-[42px] rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white hover:bg-emerald-700">เข้าใจแล้ว เริ่มกรอกข้อมูล</button></div>
    </div>`,document.body.appendChild(a);const N=()=>{a.remove(),document.removeEventListener("keydown",P)},P=D=>{D.key==="Escape"&&N()};a.addEventListener("click",D=>{D.target===a&&N()}),a.querySelectorAll("[data-guide-close]").forEach(D=>D.addEventListener("click",N)),document.addEventListener("keydown",P)},ce=(a,N="")=>{const T=[a.length?[...a].sort((D,R)=>D-R).join(", "):"",N.trim()].filter(Boolean);return T.length?T.join(", "):q().notSelected},oe=()=>{const a=I.length;return Array.from({length:a},(N,P)=>P+1).filter(N=>{var P;return(P=I[N-1])==null?void 0:P.some(T=>String(T??"").trim())})},U=()=>{const a=q(),N=oe(),P=a.dir==="rtl";P&&pe();const T=S==="auto"?a.dir:S,D=T==="rtl"?"text-right":"text-left",R=P?"font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;":"";m.innerHTML=`
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${T}" style="${R}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${a.title}</h2>
          <p class="text-xs text-gray-400 truncate">${r(o.subject_name)} · ${r(o.subject_code||"—")} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${a.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${a.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${T}" style="${R}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(pt).map(W=>{var M;return`
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${E===W.key?"bg-emerald-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
            data-lang="${W.key}">${((M=l==null?void 0:l[W.key])==null?void 0:M.label)||W.label}</button>
        `}).join("")}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${T}" style="${R}">
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
                <span class="text-xs text-gray-400">${r(o.grade_level||"")} · ${r(he||"")}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${B.map((W,M)=>`
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${ge} flex-1" value="${r(W)}"
                      placeholder="${r(a.topicPlaceholder)}" dir="${T}" data-idx="${M}" />
                    ${B.length>1?`<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${M}">✕</button>`:""}
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

            ${me?`<p class="text-xs mt-3 ${me.startsWith("✅")?"text-emerald-600":"text-amber-600"}">${r(me)}</p>`:""}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${a.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${T}"
                  class="${ge} ${D} min-h-[132px] leading-7"
                  placeholder="${r(a.descPlaceholder)}">${r(j)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${a.dirLabel}</span>
                  <select id="cd2-dir" class="${Le}">
                    <option value="auto" ${S==="auto"?"selected":""}>${a.dirAuto}</option>
                    <option value="rtl" ${S==="rtl"?"selected":""}>${a.dirRTL}</option>
                    <option value="ltr" ${S==="ltr"?"selected":""}>${a.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${a.signerLabel}</span>
                  <input id="cd2-signer" class="${ge} ${D}" value="${r(V)}" placeholder="${r(a.signerPlaceholder)}" dir="${T}" />
                  <p class="text-xs text-gray-400 mt-1">${a.signerHint}</p>
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
                  ${ie.map((W,M)=>`
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${M+1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${M}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${r(W.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${M}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${r(W.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${M}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
                  ${ne.map((W,M)=>`
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${M}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${r(W.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${M}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${r(W.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${M}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${r(W.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${M}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
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
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${T}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${a.rowHeader}</th>
                    ${C.map((W,M)=>`
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${M}" class="cd2-col ${ge} ${D} py-2 font-semibold" value="${r(W)}" dir="${T}" />
                          ${C.length>1?`<button data-del-col="${M}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>`:""}
                        </div>
                      </th>`).join("")}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${I.map((W,M)=>`
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${M+1}</td>
                      ${C.map((re,we)=>`
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${M}" data-cell="${we}" rows="2" dir="${T}"
                            class="cd2-cell ${D} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${r(W[we]||"")}</textarea>
                        </td>`).join("")}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${M}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${a.delRow}</button>
                      </td>
                    </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <h3 class="font-bold text-gray-800 mb-3">${a.objTitle} <span class="text-xs font-normal text-gray-400">${a.objHint}</span></h3>
            <div class="grid sm:grid-cols-3 gap-3">
              <button id="cd2-pick-between" class="${D} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${a.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${r(ce(c,h))}</p>
              </button>
              <button id="cd2-pick-mid" class="${D} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${a.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${r(ce(w,g))}</p>
              </button>
              <button id="cd2-pick-final" class="${D} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${a.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${r(ce(v,A))}</p>
              </button>
            </div>
            ${N.length?"":`<p class="text-xs text-amber-600 mt-3">${a.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`,Ce()},se=()=>{var a,N,P;return B=[...m.querySelectorAll(".cd2-topic-input")].map(T=>T.value.trim()).filter(Boolean),B.length||(B=[""]),j=((a=m.querySelector("#cd2-description"))==null?void 0:a.value)??"",V=((N=m.querySelector("#cd2-signer"))==null?void 0:N.value)??"",S=((P=m.querySelector("#cd2-dir"))==null?void 0:P.value)??S,m.querySelectorAll(".cd2-col").forEach(T=>{C[Number(T.dataset.col)]=T.value}),m.querySelectorAll(".cd2-cell").forEach(T=>{const D=Number(T.dataset.row),R=Number(T.dataset.cell);I[D]||(I[D]=Array.from({length:C.length},()=>"")),I[D][R]=T.value}),m.querySelectorAll(".cd2-voc-obj-cell").forEach(T=>{const D=Number(T.dataset.vocObjRow),R=T.dataset.vocObjField;ie[D]||(ie[D]={objective:"",competency:""}),ie[D][R]=T.value}),m.querySelectorAll(".cd2-voc-sch-cell").forEach(T=>{const D=Number(T.dataset.vocSchRow),R=T.dataset.vocSchField;ne[D]||(ne[D]={week:"",content:"",note:""}),ne[D][R]=T.value}),{desc:j,signer:V}},ae=a=>{const N=Array.isArray(a==null?void 0:a.columns)&&a.columns.length?a.columns.map(R=>String(R??"").trim()).filter(Boolean):q().colsExtra,P=Array.isArray(a==null?void 0:a.rows)?a.rows.map(R=>{const W=Array.isArray(R)?R:Object.values(R??{});return Array.from({length:N.length},(M,re)=>String(W[re]??"").trim())}).filter(R=>R.some(Boolean)):[];C=N,I=P.length?P:Array.from({length:12},()=>Array.from({length:C.length},()=>"")),a!=null&&a.description&&(j=String(a.description)),w=p((a==null?void 0:a.midterm_items)??(a==null?void 0:a.midtermObjectiveItems)),c=p((a==null?void 0:a.between_items)??(a==null?void 0:a.betweenObjectiveItems)),v=p((a==null?void 0:a.final_items)??(a==null?void 0:a.finalObjectiveItems));const T=oe(),D=Math.ceil(T.length/2);w.length||(w=T.slice(0,Math.min(3,D))),c.length||(c=T.slice(0,Math.min(4,T.length))),v.length||(v=T.slice(-Math.min(3,T.length)))},G=a=>String(a??"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,""),be={schema_version:"pp5.course_description.v1",type:"course_description",course:{subject_code:o.subject_code??"",subject_name:o.subject_name??"",grade_level:o.grade_level??"",learning_area:he},description:"คำอธิบายรายวิชาโดยสรุป...",topic_list:["บทที่ 1 ...","บทที่ 2 ..."],table_columns:["รหัสมาตรฐาน/ตัวชี้วัด"],table_rows:[["ค 1.1 ม.2/1 : เข้าใจ..."],["ค 1.2 ม.2/2 : วิเคราะห์..."]],between_objective_items:[1],between_objective_extra:"",midterm_objective_items:[1,2],midterm_objective_extra:"",final_objective_items:[2],final_objective_extra:"",signer_name:"",text_direction:"auto",voc_objectives:[{objective:"",competency:""}],voc_schedule:[{week:"1",content:"",note:""}]},Z=()=>{se();const a=q(),N=_&&C.length===1,P=!d&&!_&&C.length===1,T=N?'รูปแบบรายวิชาพื้นฐาน (1 คอลัมน์): ยึดมาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก ในคำอธิบายให้เขียนเป็นความเรียงสรุปว่าเรียนอะไร ใช้กระบวนการใด และคาดหวังให้ผู้เรียนเกิดความรู้/ทักษะอะไร ตอนท้ายอาจระบุรหัสตัวชี้วัดที่เกี่ยวข้องได้ แต่ห้ามคัดลอกข้อความตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย; ในแต่ละแถวของตารางให้รวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็มไว้ในคอลัมน์เดียว เช่น "ค 1.1 ม.2/1 : ..."':P?"รูปแบบรายวิชาเพิ่มเติม (1 คอลัมน์): ยึดผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก; ในตารางให้ใส่ผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",D={subject_code:o.subject_code??"",subject_name:o.subject_name??"",grade_level:o.grade_level??"",subject_group:o.subject_group??"",learning_area:he,credit:o.credit??"",target_language:a.aiLang,is_voc:d,topics:B.filter(Boolean),description:j,table_columns:C,table_rows:I.filter(R=>R.some(W=>String(W??"").trim())),voc_objectives:d?ie.filter(R=>Object.values(R).some(W=>String(W??"").trim())):[],voc_schedule:d?ne.filter(R=>Object.values(R).some(W=>String(W??"").trim())):[]};return`คุณเป็นผู้ช่วยจัดทำเอกสารคำอธิบายรายวิชา ปพ.5 สำหรับครูผู้สอน
เขียนค่าข้อมูลทุกช่องที่เป็นเนื้อหาเป็น${a.aiLang} ตามภาษาที่ครูเลือกอยู่ในขณะนี้ ส่วนชื่อ field ใน JSON ต้องคงเป็นภาษาอังกฤษตาม schema

งานที่ต้องทำ:
1. จัดทำคำอธิบายรายวิชา/ผลการเรียนรู้ภาพรวมให้เป็นภาษาทางการ กระชับ และเหมาะกับระดับชั้น
2. จัดทำรายการบท/หัวข้อการเรียนรู้ใน topic_list
3. จัดทำตารางมาตรฐานการเรียนรู้ ตัวชี้วัด หรือผลการเรียนรู้ ให้สอดคล้องกับข้อมูลหลักสูตรที่แนบหรือผู้ใช้ให้มา
4. เลือกหมายเลขแถวที่เหมาะสมสำหรับการประเมินระหว่างภาค กลางภาค และปลายภาค
5. ${d?"สำหรับ ACDMVOC ให้จัดทำ voc_objectives และ voc_schedule ด้วย โดยไม่ต้องสร้างรหัสมาตรฐานขึ้นเอง":"หากไม่มีข้อมูลมาตรฐาน/ตัวชี้วัดที่เชื่อถือได้ ให้ระบุข้อความที่ต้องตรวจสอบเพิ่มเติมแทนการแต่งรหัสขึ้นเอง"}

ข้อมูลรายวิชาจากระบบ PP5:
${JSON.stringify(D,null,2)}

ข้อกำหนดสำคัญ:
- ใช้ข้อมูลจากหลักสูตร หนังสือเรียน หรือเอกสารที่ผู้ใช้แนบเป็นหลัก และห้ามเดาข้อมูลที่ไม่มีแหล่งอ้างอิง
- แนวทางการเขียนตามคู่มือ: ${T}
- คำอธิบายรายวิชาต้องสรุปสาระสำคัญ กระบวนการเรียนรู้ และผลที่คาดหวังให้ผู้เรียนเกิดขึ้น ไม่ใช่รายการคัดลอกมาตรฐาน/ตัวชี้วัดหรือผลการเรียนรู้ทั้งหมด
- table_rows ต้องเป็น array ของ array และจำนวนช่องต้องตรงกับ table_columns
- หมายเลขใน between_objective_items, midterm_objective_items และ final_objective_items ต้องอ้างถึงแถวที่มีอยู่จริง
- ตอบกลับเป็น JSON ตาม schema นี้เท่านั้น โดยครูจะนำ JSON กลับมาวางในระบบเพื่อให้ตรวจสอบก่อนบันทึก
- ครอบ JSON ทั้งหมดไว้ใน Markdown code block ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) ห้ามมีข้อความหรือคำอธิบายอยู่นอกกล่อง

ตัวอย่าง schema:
${JSON.stringify(be,null,2)}`},F=a=>{var D;let N;try{N=JSON.parse(G(a))}catch{throw new Error("JSON ไม่ถูกต้อง กรุณาตรวจเครื่องหมายปีกกาและเครื่องหมายคำพูด")}if((N==null?void 0:N.type)!=="course_description")throw new Error("ต้องเป็น JSON ประเภท course_description");if(!String(N.description??"").trim())throw new Error("ยังไม่มี description คำอธิบายรายวิชา");const P=Array.isArray(N.table_columns)&&N.table_columns.length&&Array.isArray(N.table_rows);if(!d&&!P)throw new Error("ต้องมี table_columns และ table_rows สำหรับรายวิชานี้");if(P&&!N.table_rows.some(R=>Array.isArray(R)&&R.some(W=>String(W??"").trim())))throw new Error("ต้องมี table_rows อย่างน้อย 1 แถวที่มีข้อมูล");if(P&&N.table_rows.some(R=>!Array.isArray(R)||R.length!==N.table_columns.length))throw new Error("จำนวนช่องใน table_rows ต้องตรงกับจำนวน table_columns");if(N.text_direction&&!["auto","rtl","ltr"].includes(N.text_direction))throw new Error("text_direction ต้องเป็น auto, rtl หรือ ltr");const T=((D=N.table_rows)==null?void 0:D.length)??0;for(const R of["between_objective_items","midterm_objective_items","final_objective_items"])if(N[R]!=null&&(!T||!Array.isArray(N[R])||N[R].some(W=>!Number.isInteger(Number(W))||Number(W)<1||Number(W)>T)))throw new Error(`${R} ต้องเป็นหมายเลขแถวที่มีอยู่จริง`);if(d){if(!Array.isArray(N.voc_objectives)||!N.voc_objectives.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_objectives");if(!Array.isArray(N.voc_schedule)||!N.voc_schedule.length)throw new Error("รายวิชา ACDMVOC ต้องมี voc_schedule")}return N},X=a=>{Array.isArray(a.table_columns)&&a.table_columns.length&&Array.isArray(a.table_rows)?ae({description:a.description,columns:a.table_columns,rows:a.table_rows,midterm_items:a.midterm_objective_items,between_items:a.between_objective_items,final_items:a.final_objective_items}):j=String(a.description??""),Array.isArray(a.topic_list)&&(B=a.topic_list.map(N=>String(N??"").trim()).filter(Boolean),B.length||(B=[""])),a.between_objective_extra!=null&&(h=String(a.between_objective_extra)),a.midterm_objective_extra!=null&&(g=String(a.midterm_objective_extra)),a.final_objective_extra!=null&&(A=String(a.final_objective_extra)),a.signer_name!=null&&(V=String(a.signer_name)),a.text_direction&&["auto","rtl","ltr"].includes(a.text_direction)&&(S=a.text_direction),d&&(ie=L(a.voc_objectives,["objective","competency"],10),ne=L(a.voc_schedule,["week","content","note"],20))},xe=()=>{var W;(W=document.getElementById("cd2-external-ai-modal"))==null||W.remove();const a=document.createElement("div");a.id="cd2-external-ai-modal",a.className="fixed inset-0 z-[190] flex items-center justify-center bg-black/60 p-3",a.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[94vh] overflow-y-auto p-5 sm:p-6">
      <div class="flex items-start justify-between gap-3 mb-4">
        <div><span class="inline-flex px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-[10px] font-extrabold mb-2">🤖 AI ของครูเอง</span><h3 class="font-extrabold text-gray-800 text-lg">สร้างคำอธิบายรายวิชาด้วย AI ของคุณ</h3><p class="text-xs text-gray-400 mt-1">คัดลอก Prompt ไปใช้กับ ChatGPT, Gemini หรือ AI อื่น แล้วนำ JSON กลับมาวางเพื่อตรวจสอบและเติมลงแบบฟอร์ม</p></div>
        <button data-external-close type="button" class="w-10 h-10 rounded-xl border text-gray-400 hover:bg-gray-50">✕</button>
      </div>
      <div class="rounded-2xl border border-violet-100 bg-violet-50/70 p-4 mb-4">
        <p class="text-sm font-extrabold text-violet-900">ขั้นตอนใช้งาน</p>
        <ol class="mt-2 space-y-1 text-xs text-violet-800 list-decimal list-inside">
          <li>ตรวจข้อมูลในแบบฟอร์ม แล้วกดสร้าง Prompt ก่อนคัดลอกไปใช้กับ AI พร้อมแนบเอกสารหลักสูตร/หนังสือเรียนถ้ามี</li>
          <li>ให้ AI ตอบ JSON ในกล่องโค้ดชนิด json แล้วคัดลอกทั้งกล่องมาวางในช่องด้านล่าง</li>
          <li>กดตรวจ JSON และนำเข้าข้อมูล จากนั้นตรวจทานในแบบฟอร์มก่อนกดบันทึก</li>
        </ol>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">Prompt สำหรับนำไปใช้กับ AI</label><div class="grid grid-cols-2 gap-2 sm:flex"><button id="cd2-external-generate" type="button" class="min-h-[40px] px-3 rounded-xl bg-violet-700 text-white text-xs font-bold">⚡ สร้าง Prompt ใหม่</button><button id="cd2-external-copy" type="button" hidden disabled aria-disabled="true" class="min-h-[40px] px-3 rounded-xl border border-violet-200 text-violet-700 bg-violet-50 text-xs font-bold disabled:opacity-40">📋 คัดลอก Prompt</button></div></div>
      <textarea id="cd2-external-prompt" rows="12" readonly class="w-full border rounded-xl p-3 text-[11px] font-mono bg-gray-50"></textarea>
      <div class="mt-4 pt-4 border-t">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">วาง JSON จากกล่องโค้ด AI</label><div class="grid grid-cols-2 gap-2 sm:flex"><button id="cd2-external-validate" type="button" class="min-h-[40px] px-3 rounded-xl border border-violet-200 text-violet-700 font-bold text-xs">🔎 ตรวจ JSON</button><button id="cd2-external-import" type="button" class="min-h-[40px] px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs">📥 นำเข้าแบบฟอร์ม</button></div></div>
        <textarea id="cd2-external-json" rows="10" class="w-full border rounded-xl p-3 text-[11px] font-mono" placeholder='วาง { "schema_version": "pp5.course_description.v1", "type": "course_description", ... } ที่นี่'></textarea>
        <div id="cd2-external-result" class="hidden mt-2 rounded-xl px-3 py-2 text-xs"></div>
      </div>
    </div>`,document.body.appendChild(a);const N=()=>Z(),P=(M,re)=>{const we=a.querySelector("#cd2-external-result");we.className=`mt-2 rounded-xl px-3 py-2 text-xs ${re?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-red-50 text-red-700 border border-red-100"}`,we.textContent=M},T=a.querySelector("#cd2-external-prompt"),D=oo({copyButton:a.querySelector("#cd2-external-copy")});m.addEventListener("input",M=>{M.target instanceof Element&&M.target.matches("input, textarea, select")&&D.invalidate()}),m.addEventListener("change",M=>{M.target instanceof Element&&M.target.matches("input, textarea, select")&&D.invalidate()}),m.addEventListener("click",M=>{M.target.closest("button")&&D.invalidate()});const R=()=>a.remove();a.addEventListener("click",M=>{M.target===a&&R()}),a.querySelector("[data-external-close]").addEventListener("click",R),a.querySelector("#cd2-external-generate").addEventListener("click",()=>{T.value=N(),D.markGenerated(),Y("สร้าง Prompt แล้ว","success")}),a.querySelector("#cd2-external-copy").addEventListener("click",async()=>{if(!D.isReady()){Y("กรุณากด “สร้าง Prompt ใหม่” หลังแก้ข้อมูลก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(T.value),Y("คัดลอก Prompt แล้ว","success")}catch{T.select(),document.execCommand("copy"),Y("คัดลอก Prompt แล้ว","success")}}),a.querySelector("#cd2-external-validate").addEventListener("click",()=>{var M;try{const re=F(a.querySelector("#cd2-external-json").value);P(`JSON ถูกต้อง${(M=re.table_rows)!=null&&M.length?`: ${re.table_rows.length} แถว`:""}${d?` · ${re.voc_schedule.length} สัปดาห์`:""}`,!0)}catch(re){P(re.message,!1)}}),a.querySelector("#cd2-external-import").addEventListener("click",()=>{try{const M=F(a.querySelector("#cd2-external-json").value);X(M),R(),me="✅ นำเข้าข้อมูลจาก AI ภายนอกแล้ว — กรุณาตรวจสอบก่อนบันทึก",U(),Y("นำเข้าคำอธิบายรายวิชาแล้ว กรุณาตรวจสอบก่อนบันทึก","success")}catch(M){P(M.message,!1)}})},ye=a=>a.some(P=>String(P.learning_outcome_text??"").trim())?{source:"curriculum",columns:["ผลการเรียนรู้"],rows:a.map((P,T)=>[`${P.item_no??T+1}.${P.learning_outcome_text??P.indicator_text??P.standard_text??""}`]),description:j,midterm_items:a.slice(0,Math.ceil(a.length/2)).map((P,T)=>T+1),final_items:a.slice(Math.ceil(a.length/2)).map((P,T)=>T+1+Math.ceil(a.length/2))}:{source:"curriculum",columns:["รหัสมาตรฐาน/ตัวชี้วัด"],rows:a.map((P,T)=>{const D=[P.standard_code,P.indicator_code].filter(Boolean).join(" "),R=P.indicator_text||P.standard_text||P.learning_outcome_text||"";return[((D||String(P.item_no??T+1)+".")+" : "+R).trim()]}),description:j,midterm_items:a.slice(0,Math.ceil(a.length/2)).map((P,T)=>T+1),final_items:a.slice(Math.ceil(a.length/2)).map((P,T)=>T+1+Math.ceil(a.length/2))},_e=async()=>{var Q,i,x,s,k;const a=q(),N=_&&C.length===1,P=!d&&!_&&C.length===1,T=N?a.colsBasic:P?a.colsExtra:C,D=N||P?'single column named "'+T[0]+'"':"custom columns named "+JSON.stringify(T),R=N?"รายวิชาพื้นฐาน: ใช้มาตรฐานการเรียนรู้และตัวชี้วัดเป็นหลัก เขียนคำอธิบายเป็นความเรียงสรุปสาระ กระบวนการ และผลที่คาดหวัง ไม่คัดลอกตัวชี้วัดทั้งหมดมาเรียงเป็นคำอธิบาย และให้แต่ละแถวในคอลัมน์เดียวรวมรหัสมาตรฐาน/ตัวชี้วัดกับข้อความตัวชี้วัดฉบับเต็ม เช่น ค 1.1 ม.2/1 : ...":P?"รายวิชาเพิ่มเติม: ใช้ผลการเรียนรู้เป็นหลัก เขียนคำอธิบายตามลักษณะ เนื้อหา และเป้าหมายของรายวิชา ไม่ใช้มาตรฐาน/ตัวชี้วัดเป็นแกนหลัก และให้ตารางสะท้อนผลการเรียนรู้ที่ตรวจสอบได้":"รูปแบบคอลัมน์อิสระ: ยึดชื่อคอลัมน์และข้อมูลที่ครูกำหนดเป็นหลัก จัดเนื้อหาให้สอดคล้องกัน โดยยังคงหลักการเขียนคำอธิบายเป็นความเรียงและไม่คัดลอกข้อความหลักสูตรทั้งชุด",W=`You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${a.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${o.subject_name||""}
- รหัสวิชา: ${o.subject_code||""}
- ชั้น: ${o.grade_level||""}
- กลุ่มสาระ: ${he||o.dept||""}
- หน่วยกิต: ${o.credit||""}
- เรื่อง/บทที่สอน: ${B.filter(Boolean).join(", ")||"ไม่ระบุ"}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${D}
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
}`,{data:M,error:re}=await $t.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:W}});if(re)throw new Error(re.message??"Edge Function error");if(M!=null&&M.error)throw new Error(`Gemini: ${M.error.message??M.error.status}`);const we=((k=(s=(x=(i=(Q=M.candidates)==null?void 0:Q[0])==null?void 0:i.content)==null?void 0:x.parts)==null?void 0:s[0])==null?void 0:k.text)??"",Ee=we.match(/```json\s*([\s\S]*?)```/)||we.match(/(\{[\s\S]*\})/),K=Ee?Ee[1]??Ee[0]:null;if(!K)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");return JSON.parse(K)},$e=a=>{var Ee;se();const N=a==="mid"?w:a==="between"?c:v,P=a==="mid"?g:a==="between"?h:A,T=oe();if(!T.length){Y("กรุณาพิมพ์รายการในตารางก่อน","warning");return}(Ee=document.getElementById("cd2-picker"))==null||Ee.remove();const D=q(),R={mid:"accent-emerald-600",between:"accent-blue-600",final:"accent-purple-600"},W={mid:"bg-emerald-600 hover:bg-emerald-700",between:"bg-blue-600 hover:bg-blue-700",final:"bg-purple-600 hover:bg-purple-700"},M=K=>{const Q=(I[K-1]??[]).find(x=>String(x??"").trim()),i=String(Q??"").trim();return i.length>30?i.slice(0,30)+"…":i},re=document.createElement("div");re.id="cd2-picker",re.className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4",re.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${D.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${D.pickerTitles[a]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${T.map(K=>`
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${R[a]} w-4 h-4 flex-shrink-0" value="${K}" ${N.includes(K)?"checked":""}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${K}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${r(M(K))}</span>
            </label>`).join("")}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${r(P)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${D.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${W[a]} text-white text-sm font-semibold">${D.pickerOk}</button>
        </div>
      </div>`,document.body.appendChild(re);const we=()=>re.remove();re.querySelector("#cd2-picker-close").addEventListener("click",we),re.querySelector("#cd2-picker-cancel").addEventListener("click",we),re.querySelector("#cd2-picker-ok").addEventListener("click",()=>{const K=[...re.querySelectorAll(".cd2-choice:checked")].map(i=>Number(i.value)),Q=re.querySelector("#cd2-picker-extra").value.trim();a==="mid"?(w=K,g=Q):a==="between"?(c=K,h=Q):(v=K,A=Q),we(),U()})},Ce=()=>{var P,T,D,R,W,M,re,we,Ee;const a=q();m.querySelectorAll(".cd2-lang-btn").forEach(K=>{K.addEventListener("click",()=>{var Q;se(),E=K.dataset.lang||"th",S=((Q=pt[E])==null?void 0:Q.dir)||"ltr",U()})}),m.querySelector("#cd2-close").addEventListener("click",()=>m.remove()),m.querySelector("#cd2-dir").addEventListener("change",K=>{se(),S=K.target.value,U()}),m.querySelector("#cd2-external-ai").addEventListener("click",xe),m.querySelector("#cd2-search-curriculum").addEventListener("click",async()=>{if(se(),(I.some(i=>i.some(x=>String(x??"").trim()))||j.trim())&&!confirm(a.confirmOverwrite))return;const Q=m.querySelector("#cd2-search-curriculum");Q.disabled=!0,Q.innerHTML=`⏳ ${a.btnCurriculumLoading}`;try{const i=await Os({subjectName:o.subject_name,subjectCode:o.subject_code,gradeLevel:o.grade_level,dept:he,topic:B.filter(Boolean).join(" ")});i.length?(ae(ye(i)),me=a.toastSearchOk(i.length)):me=a.toastSearchEmpty,U()}catch(i){Y("ค้นหลักสูตรไม่สำเร็จ: "+je(i),"error")}finally{Q.disabled=!1,Q.innerHTML=`🔍 ${a.btnCurriculum}`}}),m.querySelector("#cd2-auto-fill").addEventListener("click",async()=>{if(se(),(I.some(i=>i.some(x=>String(x??"").trim()))||j.trim())&&!confirm(a.confirmAIOverwrite))return;const Q=m.querySelector("#cd2-auto-fill");Q.disabled=!0,Q.innerHTML=`⏳ ${a.btnAILoading}`;try{const i=await _e();ae(i),me=a.toastAIDone,U()}catch(i){Y("AI ร่างไม่สำเร็จ: "+je(i),"error")}finally{Q.disabled=!1,Q.innerHTML=`✨ ${a.btnAI}`}}),m.querySelector("#cd2-img-input").addEventListener("change",async K=>{var s,k,n,u,b,$;const Q=(s=K.target.files)==null?void 0:s[0];if(!Q)return;if((I.some(H=>H.some(O=>String(O??"").trim()))||j.trim())&&!confirm(a.confirmImgOverwrite)){K.target.value="";return}const x=m.querySelector("#cd2-img-btn");x.textContent=`⏳ ${a.btnImgLoading}`;try{const H=await new Promise((ke,Be)=>{const He=new FileReader;He.onload=()=>ke(He.result.split(",")[1]),He.onerror=Be,He.readAsDataURL(Q)}),O=_&&C.length===1,J=!d&&!_&&C.length===1,ue=O?a.colsBasic:J?a.colsExtra:C,ve=O||J?'single column named "'+ue[0]+'"':"custom columns named "+JSON.stringify(ue),Ae=`You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${a.aiLang}
ข้อมูลรายวิชา: "${o.subject_name??""}" รหัส ${o.subject_code??""} ชั้น ${o.grade_level??""} กลุ่มสาระ ${he}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${ve})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบกลับเป็น JSON โดยครอบผลลัพธ์ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย \`\`\`json และปิดด้วย \`\`\`) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีข้อความก่อนหรือหลังกล่อง:
{
  "description": "...",
  "columns": ${JSON.stringify(ue)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`,{data:Ie,error:Re}=await $t.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:Ae,imageBase64:H,imageMimeType:Q.type||"image/jpeg"}});if(Re)throw new Error(Re.message??"Edge Function error");if(Ie!=null&&Ie.error)throw new Error(`Gemini: ${Ie.error.message??Ie.error.status}`);const Ke=(($=(b=(u=(n=(k=Ie.candidates)==null?void 0:k[0])==null?void 0:n.content)==null?void 0:u.parts)==null?void 0:b[0])==null?void 0:$.text)??"",Te=Ke.match(/```json\s*([\s\S]*?)```/)||Ke.match(/(\{[\s\S]*\})/),Fe=Te?Te[1]??Te[0]:null;if(!Fe)throw new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");ae(JSON.parse(Fe)),me=a.toastImgDone,U()}catch(H){Y("อ่านรูปไม่สำเร็จ: "+je(H),"error")}finally{x.textContent=`📷 ${a.btnImg}`,K.target.value=""}});const N=K=>{if(se(),I.some(x=>x.some(s=>String(s??"").trim()))&&!confirm(a.confirmColChange))return;const i=I;C=K,I=i.map(x=>K.length===1?[x.filter(Boolean).join(" ").trim()]:Array.from({length:K.length},(s,k)=>x[k]??"")),I.length||(I=Array.from({length:12},()=>Array.from({length:C.length},()=>""))),U()};(P=m.querySelector("#cd2-template-basic"))==null||P.addEventListener("click",()=>{N(a.colsBasic)}),(T=m.querySelector("#cd2-template-extra"))==null||T.addEventListener("click",()=>{N(a.colsExtra)}),(D=m.querySelector("#cd2-add-col"))==null||D.addEventListener("click",()=>{se(),C.push(a.colNew(C.length+1)),I=I.map(K=>[...K,""]),U()}),(R=m.querySelector("#cd2-add-row"))==null||R.addEventListener("click",()=>{se(),I.push(Array.from({length:C.length},()=>"")),U()}),m.querySelectorAll(".cd2-del-col").forEach(K=>K.addEventListener("click",()=>{se();const Q=Number(K.dataset.delCol);C.splice(Q,1),I=I.map(i=>i.filter((x,s)=>s!==Q)),U()})),m.querySelectorAll(".cd2-del-row").forEach(K=>K.addEventListener("click",()=>{se();const Q=Number(K.dataset.delRow);I.splice(Q,1);const i=x=>x.filter(s=>s!==Q+1).map(s=>s>Q+1?s-1:s);w=i(w),c=i(c),v=i(v),U()})),(W=m.querySelector("#cd2-pick-mid"))==null||W.addEventListener("click",()=>$e("mid")),(M=m.querySelector("#cd2-pick-between"))==null||M.addEventListener("click",()=>$e("between")),(re=m.querySelector("#cd2-pick-final"))==null||re.addEventListener("click",()=>$e("final")),(we=m.querySelector("#cd2-voc-obj-add-row"))==null||we.addEventListener("click",()=>{se(),ie.push({objective:"",competency:""}),U()}),m.querySelectorAll(".cd2-voc-obj-del-row").forEach(K=>K.addEventListener("click",()=>{se(),ie.splice(Number(K.dataset.vocObjDelRow),1),U()})),(Ee=m.querySelector("#cd2-voc-sch-add-row"))==null||Ee.addEventListener("click",()=>{se(),ne.push({week:String(ne.length+1),content:"",note:""}),U()}),m.querySelectorAll(".cd2-voc-sch-del-row").forEach(K=>K.addEventListener("click",()=>{se(),ne.splice(Number(K.dataset.vocSchDelRow),1),U()})),m.querySelector("#cd2-add-topic").addEventListener("click",()=>{se(),B.push(""),U()}),m.querySelectorAll(".cd2-topic-del").forEach(K=>{K.addEventListener("click",()=>{se(),B.splice(Number(K.dataset.idx),1),B.length||(B=[""]),U()})}),m.querySelector("#cd2-save").addEventListener("click",async()=>{const{desc:K,signer:Q}=se(),i=m.querySelector("#cd2-save");i.disabled=!0,i.textContent=a.saving;try{await qs(o.id,{description:K,table_columns:C.map((x,s)=>x.trim()||a.colNew(s+1)),table_rows:I.map(x=>x.slice(0,C.length)),topic_list:B.filter(Boolean),midterm_objective_items:w,between_objective_items:c,final_objective_items:v,midterm_objective_extra:g,between_objective_extra:h,final_objective_extra:A,voc_objectives:ie,voc_schedule:ne,signer_name:Q.trim()||null,text_direction:S,updated_by:(e==null?void 0:e.id)??null}),Y(a.toastSaved,"success"),m.remove()}catch(x){Y("บันทึกไม่สำเร็จ: "+je(x),"error"),i.disabled=!1,i.textContent=a.save}})};U(),te()}async function mn(e){var t,l,f,y,p;if(!(e!=null&&e.id)){Y("ไม่พบข้อมูลครูผู้สอน","error");return}(t=document.getElementById("schedule-course-review-modal"))==null||t.remove();const o=document.createElement("div");o.id="schedule-course-review-modal",o.className="fixed inset-0 z-[240] bg-slate-950/60 backdrop-blur-sm p-3 sm:p-5",o.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="schedule-course-review-title"
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
  </section>`,document.body.appendChild(o),o.querySelector("[data-review-close]").addEventListener("click",()=>o.remove());try{const d=await De().catch(()=>({})),_=Number(d.academicYear??d.academic_year),L=Number(d.semester),[C,I,w,c]=await Promise.all([Tt(e.id,_,L),ns(),Nt(e.id).catch(()=>[]),et().catch(()=>[])]),v=e.category==="ศาสนา"?new Set(["AGM","AGMVOC"]):e.category==="สามัญ"?new Set(["ACDM","ACDMVOC"]):null,h=I.filter(m=>!v||v.has(m.subject_group)),g=new Map(h.map(m=>[String(m.id),m])),A=["","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์","อาทิตย์"],S=m=>{var ae,G,be;const z=(ae=m.master_subjects)==null?void 0:ae.catalog_id;if(z&&g.has(String(z)))return g.get(String(z));const te=Se(m.subject_code||((G=m.master_subjects)==null?void 0:G.subject_code));if(te){const Z=h.filter(xe=>Se(xe.subject_code)===te);if(Z.length===1)return Z[0];const F=_t(m.class_name),X=Z.filter(xe=>F&&Se(xe.grade_level).includes(Se(F)));if(X.length===1)return X[0]}const ce=Se(m.subject_name||((be=m.master_subjects)==null?void 0:be.subject_name));if(!ce)return null;const oe=h.filter(Z=>Se(Z.subject_name)===ce);if(oe.length===1)return oe[0];const U=_t(m.class_name),se=oe.filter(Z=>U&&Se(Z.grade_level).includes(Se(U)));return se.length===1?se[0]:null},j=(m,z)=>{var oe,U;const te=Se((m==null?void 0:m.subject_code)||z.subject_code||((oe=z.master_subjects)==null?void 0:oe.subject_code)),ce=Se((m==null?void 0:m.subject_name)||z.subject_name||((U=z.master_subjects)==null?void 0:U.subject_name));return w.find(se=>m&&Number(se.catalog_id)===Number(m.id)||te&&Se(se.subject_code)===te&&(!(m!=null&&m.subject_group)||se.subject_group===m.subject_group)||ce&&Se(se.subject_name)===ce&&(!(m!=null&&m.subject_group)||se.subject_group===m.subject_group))},V=new Map;for(const m of C){const z=S(m),te=(z==null?void 0:z.subject_name)||m.subject_name||((l=m.master_subjects)==null?void 0:l.subject_name)||"",ce=(z==null?void 0:z.subject_code)||m.subject_code||((f=m.master_subjects)==null?void 0:f.subject_code)||"";if(!te&&!ce)continue;const oe=z?`catalog:${z.id}`:`review:${Se(ce)}:${Se(te)}:${Se((y=m.master_subjects)==null?void 0:y.subject_group)}`;let U=V.get(oe);if(!U){const ae=z?ht(z):"",G=lt(c,z==null?void 0:z.subject_group,ae);U={id:V.size+1,item:z,name:te,code:ce,subjectGroup:(z==null?void 0:z.subject_group)||((p=m.master_subjects)==null?void 0:p.subject_group)||"",deptCode:ae,deptLabel:(z==null?void 0:z.dept_label)||(G==null?void 0:G.dept_name)||"ต้องตรวจสอบกลุ่มสาระ",rows:[],rooms:new Set,grades:new Set,existing:z?j(z,m):null},V.set(oe,U)}U.rows.push(m),m.class_name&&U.rooms.add(m.class_name);const se=(z==null?void 0:z.grade_level)||_t(m.class_name);se&&U.grades.add(se)}const B=[...V.values()].map(m=>{var ce,oe;const z=((ce=m.item)==null?void 0:ce.grade_level)||[...m.grades].join(", "),te=!!(m.item&&m.subjectGroup&&m.deptCode&&z&&!m.existing);return m.grade=z,m.status=m.existing?"existing":te?"ready":"review",m.payload=m.item?{catalog_id:m.item.id,subject_group:m.item.subject_group,dept:m.deptCode,subject_name:m.item.subject_name,subject_code:m.item.subject_code||null,credit:m.item.credit??null,grade_level:z,teacher_id:e.id,learning_area:((oe=lt(c,m.subjectGroup,m.deptCode))==null?void 0:oe.head_name)||null}:null,m}),ie=B.filter(m=>m.status==="ready").length,ne=B.filter(m=>m.status==="existing").length,me=B.filter(m=>m.status==="review").length,E=new Map;B.forEach(m=>{const z=m.deptCode||"review";E.has(z)||E.set(z,{label:m.deptLabel,items:[]}),E.get(z).items.push(m)});const q=m=>m==="ready"?'<span class="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">พร้อมสร้าง</span>':m==="existing"?'<span class="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-700">มีคอร์สแล้ว · ข้าม</span>':'<span class="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">ต้องตรวจสอบ</span>',pe=m=>{const z=m.rows.map(ce=>`${A[Number(ce.day_of_week)]||`วัน${ce.day_of_week??"?"}`} คาบ ${ce.period_no??"—"}`).join(" · "),te=[...m.rooms].join(", ")||"ไม่ระบุห้อง";return`<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" data-review-item="${m.id}">
        <div class="flex items-start gap-3">
          ${m.status==="ready"?`<input type="checkbox" data-review-select="${m.id}" checked class="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />`:'<span class="mt-1 block h-5 w-5"></span>'}
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">${q(m.status)}
              <span class="font-mono text-xs font-bold text-indigo-600">${r(m.code||"ไม่มีรหัส")}</span>
            </div>
            <h4 class="mt-2 font-extrabold text-gray-800">${r(m.name)}</h4>
            <p class="mt-1 text-xs text-gray-500">${r(m.grade||"ไม่ระบุระดับชั้น")} · ${r(te)}</p>
            <p class="mt-1 text-[11px] text-gray-400">${r(z||"ไม่มีช่วงเวลาที่ระบุ")}</p>
            ${m.status==="review"?'<p class="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-800">ระบบยังจับคู่กับแคตตาล็อกไม่ได้แน่นอน จึงยังไม่สร้างอัตโนมัติ กรุณาเปิดคอร์สใหม่และเลือกรายวิชาด้วยตนเอง</p>':""}
          </div>
        </div>
      </article>`};o.querySelector("section").innerHTML=`
      <div class="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4 sm:px-7">
        <div><h2 id="schedule-course-review-title" class="text-lg sm:text-xl font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2>
          <p class="mt-1 text-xs text-gray-500">ภาคเรียน ${r(`${L}/${_}`)} · สร้างคอร์สเท่านั้น ยังไม่สร้างห้องเรียน</p></div>
        <button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 bg-white text-xl text-gray-500 hover:bg-gray-100">×</button>
      </div>
      <div class="flex-1 overflow-y-auto p-5 sm:p-7">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div class="rounded-2xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-2xl font-extrabold text-indigo-700">${B.length}</p><p class="text-[11px] text-indigo-700/70">รายการจากตารางสอน</p></div>
          <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-3"><p class="text-2xl font-extrabold text-emerald-700">${ie}</p><p class="text-[11px] text-emerald-700/70">พร้อมสร้าง</p></div>
          <div class="rounded-2xl border border-blue-100 bg-blue-50 p-3"><p class="text-2xl font-extrabold text-blue-700">${ne}</p><p class="text-[11px] text-blue-700/70">มีคอร์สแล้ว</p></div>
          <div class="rounded-2xl border border-amber-100 bg-amber-50 p-3"><p class="text-2xl font-extrabold text-amber-700">${me}</p><p class="text-[11px] text-amber-700/70">ต้องตรวจสอบ</p></div>
        </div>
        <div class="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-xs leading-relaxed text-indigo-800">ระบบจะไม่สร้างทับคอร์สเดิม และจะสร้างเฉพาะรายการที่จับคู่กับแคตตาล็อกได้ครบถ้วนเท่านั้น</div>
        <div class="mt-6 space-y-7">
          ${[...E.values()].map(m=>`<section><div class="mb-3 flex items-center gap-3"><div class="h-9 w-9 rounded-xl bg-emerald-100 text-center leading-9">🏷️</div><h3 class="font-extrabold text-gray-800">${r(m.label)}</h3><div class="h-px flex-1 bg-gray-200"></div></div><div class="grid grid-cols-1 gap-3 xl:grid-cols-2">${m.items.map(pe).join("")}</div></section>`).join("")||'<div class="rounded-2xl bg-white p-10 text-center text-sm text-gray-400">ไม่พบรายการตารางสอนที่นำมาสร้างคอร์สได้</div>'}
        </div>
      </div>
      <div class="flex flex-col-reverse gap-2 border-t border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p data-review-selected class="text-xs text-gray-500">เลือกสร้างแล้ว 0 คอร์ส</p>
        <div class="flex gap-2"><button type="button" data-review-cancel class="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 sm:flex-none">ยกเลิก</button>
          <button type="button" data-review-create ${ie?"":"disabled"} class="flex-1 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:flex-none">ยืนยันสร้างคอร์สที่เลือก</button></div>
      </div>`;const ee=()=>o.remove();o.querySelector("[data-review-close]").addEventListener("click",ee),o.querySelector("[data-review-cancel]").addEventListener("click",ee);const fe=o.querySelector("[data-review-selected]"),de=o.querySelector("[data-review-create]"),he=()=>{const m=o.querySelectorAll("[data-review-select]:checked").length;fe.textContent=`เลือกสร้างแล้ว ${m} คอร์ส`,de.disabled=m===0};o.querySelectorAll("[data-review-select]").forEach(m=>m.addEventListener("change",he)),he(),de.addEventListener("click",async()=>{var oe;const m=[...o.querySelectorAll("[data-review-select]:checked")].map(U=>Number(U.dataset.reviewSelect)),z=B.filter(U=>m.includes(U.id)&&U.status==="ready");if(!z.length)return;de.disabled=!0,de.textContent="กำลังสร้างคอร์ส...";let te=0,ce=0;for(const U of z)try{await Ls(U.payload),te+=1}catch{ce+=1}ee(),ce?Y(`สร้างคอร์สสำเร็จ ${te} รายการ · ไม่สำเร็จ ${ce} รายการ`,"warning"):Y(`สร้างคอร์สจากตารางสอนสำเร็จ ${te} รายการ`,"success"),(oe=window._navTo)==null||oe.call(window,"my-courses")})}catch(d){o.querySelector("section").innerHTML=`<div class="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4"><h2 class="font-extrabold text-gray-800">📚 ตรวจสอบคอร์สจากตารางสอน</h2><button type="button" data-review-close class="h-10 w-10 rounded-xl border border-gray-200 text-xl text-gray-500">×</button></div><div class="flex flex-1 items-center justify-center p-8 text-center text-sm text-red-500">โหลดข้อมูลตารางสอนไม่สำเร็จ: ${r(je(d))}</div>`,o.querySelector("[data-review-close]").addEventListener("click",()=>o.remove())}}async function un(e,o,t=null,l={}){const f=!!l.cloneFrom;We("my-courses"),Ue(f?"ทำสำเนาคอร์สวิชา":t?"แก้ไขคอร์สวิชา":"ลงทะเบียนเปิดคอร์ส");const[y,p,d,_,L,C]=await Promise.all([et().catch(()=>[]),os().catch(()=>[]),t&&!f?Cs(t.id).catch(i=>(Y("โหลดครูร่วมสอนไม่สำเร็จ: "+je(i),"error"),null)):Promise.resolve([]),ns().catch(()=>[]),De().catch(()=>({})),js().catch(()=>(Y("โหลดรายชื่อหัวหน้ากลุ่มย่อยไม่สำเร็จ ยังพิมพ์ค้นหาครูศาสนาได้","warning"),[]))]);if(d===null){Me(`<div class="p-6 text-center text-gray-600">โหลดข้อมูลคอร์สไม่ครบ กรุณาเปิดคอร์สใหม่อีกครั้ง
      <button class="block mx-auto mt-4 text-indigo-600" onclick="window._goBack()">กลับ</button></div>`);return}let I=d??[];const w=[...new Map(y.map(i=>[i.id,i])).values()],c=(e==null?void 0:e.category)??"",v=[{value:"ACDM",label:"สามัญมัธยม (ACDM)",cat:"สามัญ"},{value:"AGM",label:"ศาสนามัธยม (AGM)",cat:"ศาสนา"},{value:"ACDMVOC",label:"สามัญปวช (ACDMVOC)",cat:"สามัญ"},{value:"AGMVOC",label:"ศาสนาปวช (AGMVOC)",cat:"ศาสนา"}],h=c?v.filter(i=>i.cat===c):v,g=Number(L.semester),A=_.filter(i=>![1,2].includes(g)||i.semester==null||Number(i.semester)===g).filter(i=>h.some(x=>x.value===i.subject_group)),S=i=>i==="ACDMVOC",j=i=>S(i)?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",V=i=>ze(i)?"หัวหน้ากลุ่มย่อย (Penyelia)":S(i)?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระ",B=i=>S(i)?"— เลือกสาขาวิชา —":"— เลือกกลุ่มสาระ —",ie=i=>ze(i)?"เลือกหัวหน้ากลุ่มย่อย หรือพิมพ์ค้นหาจากรายชื่อครูศาสนา":S(i)?"เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้":"เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้",ne=i=>ze(i)?"ศาสนา":i,me=(t==null?void 0:t.subject_group)??"";let E=ne(me);const q=i=>to(w,i),pe=(i,x="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+i.map(s=>`<option value="${s.dept_code}" ${s.dept_code===x?"selected":""}>${s.dept_name}</option>`).join(""),ee=(i="")=>{const x=document.getElementById("cf-subg").value;return ze(x)?Ht(p,C,i):[...new Set(q(x).map(s=>s.head_name).filter(Boolean))].filter(s=>s.toLowerCase().includes(i.toLowerCase()))},fe=new Map(A.map(i=>[String(i.id),i])),de=fe.get(String((t==null?void 0:t.catalog_id)??"")),he=(t==null?void 0:t.dept)||ht(de)||"",m=(i="",x="")=>A.filter(s=>(!i||s.subject_group===i)&&io(s,x,w)),z=(i="",x="",s="")=>x?['<option value="">— เลือกรายวิชาภายใต้กลุ่มสาระ —</option>',...m(i,x).map(n=>{const u=n.subject_code?n.subject_code+" · ":"",b=n.grade_level?" · "+n.grade_level:"",$=n.subject_group?" · "+n.subject_group:"",H=u+n.subject_name+b+$,O=String(s??"")===String(n.id)?" selected":"";return'<option value="'+n.id+'"'+O+">"+r(H)+"</option>"})].join(""):'<option value="">— เลือกกลุ่มสาระก่อน —</option>';Me(`<div class="max-w-2xl mx-auto animate-fade">
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
            ${h.map(i=>`<option value="${i.value}" ${(t==null?void 0:t.subject_group)===i.value?"selected":""}>${i.label}</option>`).join("")}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${j(me)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${Le}">
            ${pe(q(me),he)}
          </select>
        </div>
        <!-- รายวิชาภายใต้กลุ่มสาระ -->
        <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
          <label class="block text-sm font-semibold text-blue-900 mb-1">รายวิชาภายใต้กลุ่มสาระ</label>
          <select id="cf-catalog" ${Le} ${he?"":"disabled"}>
            ${z(me,he,t==null?void 0:t.catalog_id)}
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
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${ge}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${ge}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${Le}">
              ${Us.map(i=>`<option value="${i}">${i}</option>`).join("")}
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
                class="${ge}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${ge}" autocomplete="off" />
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
            maxlength="12" class="${ge}" />
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
                class="${ge} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${ge} bg-white" autocomplete="off" />
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
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${V(me)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${ge} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${ie(me)}</p>
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
  </div>`);const te=t&&(t.grade_level&&t.grade_level.includes(",")||I.length>0);function ce(){const i=document.getElementById("cf-coteach-selected-list");i&&(i.innerHTML=I.map(x=>`
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${x.full_name} (${x.teacher_code||"—"})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${x.id}">✕</button>
      </span>
    `).join(""),i.querySelectorAll(".remove-coteacher-btn").forEach(x=>{x.addEventListener("click",()=>{const s=Number(x.dataset.id);I=I.filter(k=>k.id!==s),ce()})}))}function oe(i,x){var k;(k=document.getElementById("coteach-explain-modal"))==null||k.remove();const s=document.createElement("div");s.id="coteach-explain-modal",s.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",s.innerHTML=`
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
      </div>`,document.body.appendChild(s),s.querySelector("#cf-explain-cancel").addEventListener("click",()=>{s.remove(),x()}),s.querySelector("#cf-explain-confirm").addEventListener("click",()=>{s.remove(),i()})}function U(i,x){var k;(k=document.getElementById("coteach-confirm-modal"))==null||k.remove();const s=document.createElement("div");s.id="coteach-confirm-modal",s.className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade",s.innerHTML=`
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
      </div>`,document.body.appendChild(s),s.querySelector("#cf-off-cancel").addEventListener("click",()=>{s.remove(),x()}),s.querySelector("#cf-off-confirm").addEventListener("click",()=>{s.remove(),i()})}function se(i,x=""){const s=wt[i]??[],k=document.getElementById("cf-grade-checkboxes");if(!k)return;const n=x?x.split(",").map(u=>u.trim()):[];k.innerHTML=s.map(u=>`
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${u}" ${n.includes(u)?"checked":""} />
        <span class="text-sm font-medium text-gray-700">${u}</span>
      </label>
    `).join("")}const ae=document.getElementById("cf-catalog"),G=(i,x,s="")=>{ae&&(ae.innerHTML=z(i,x,s),ae.disabled=!x,s&&(ae.value=String(s)))},be=i=>{if(!i)return;const x=document.getElementById("cf-subg"),s=document.getElementById("cf-dept"),k=document.getElementById("cf-name"),n=document.getElementById("cf-code"),u=document.getElementById("cf-credit"),b=document.getElementById("cf-grade"),$=document.getElementById("cf-dept-head"),H=h.some(J=>J.value===i.subject_group)?i.subject_group:"";if(H&&x.value!==H&&(x.value=H,x.dispatchEvent(new Event("change"))),k&&(k.value=i.subject_name??""),n&&(n.value=i.subject_code??""),u&&i.credit!=null){const J=String(i.credit);[...u.options].some(ue=>ue.value===J)||u.appendChild(new Option(J,J)),u.value=J}b&&i.grade_level&&([...b.options].some(J=>J.value===i.grade_level)||b.appendChild(new Option(i.grade_level,i.grade_level)),b.value=i.grade_level);const O=ht(i);s&&O&&q(H).some(J=>J.dept_code===O)&&(s.value=O,s.dispatchEvent(new Event("change"))),$&&i.learning_area&&!ze(H)&&($.value=i.learning_area),ae&&(document.getElementById("cf-catalog-id").value=i.id,G(x.value,(s==null?void 0:s.value)||"",i.id))},Z={ACDM:"มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)",AGM:"ศาสนา: อิสระ เช่น ฮ21101",ACDMVOC:"ปวช: อิสระ",AGMVOC:"ศาสนาปวช: อิสระ"};ae==null||ae.addEventListener("change",i=>{const x=i.target.value;document.getElementById("cf-catalog-id").value=x,be(fe.get(String(x)))}),document.getElementById("cf-subg").addEventListener("change",i=>{const x=i.target.value;document.getElementById("cf-dept-label").firstChild.textContent=j(x)+" ",document.getElementById("cf-head-label").textContent=V(x),document.getElementById("cf-head-hint").textContent=ie(x);const s=document.getElementById("cf-dept"),k=s.value;s.innerHTML=pe(q(x)),s.options[0].textContent=B(x),k&&ne(x)===E&&(s.value=k),E=ne(x),document.getElementById("cf-dept-head").value="",document.getElementById("cf-head-dropdown").classList.add("hidden"),G(x,s.value,"");const n=document.getElementById("cf-grade"),u=wt[x]??[];n.innerHTML=u.length?['<option value="">— เลือกชั้นปี —</option>',...u.map(b=>`<option value="${b}">${b}</option>`)].join(""):'<option value="">— เลือกกลุ่มวิชาก่อน —</option>',document.getElementById("cf-code-hint").textContent=Z[x]??"",se(x)}),document.getElementById("cf-dept").addEventListener("change",i=>{var b;const x=i.target.value,s=document.getElementById("cf-subg").value,k=((b=document.getElementById("cf-catalog-id"))==null?void 0:b.value)||"";G(s,x,k);const n=ze(s)?Ht(p,C):[...new Set(y.filter($=>$.category===Zs(s)&&$.dept_code===x&&$.head_name).map($=>$.head_name))],u=document.getElementById("cf-dept-head");n.length===1?u.value=n[0]:n.length>1?(u.value="",xe(n)):u.value=""});const F=document.getElementById("cf-dept-head"),X=document.getElementById("cf-head-dropdown");function xe(i){X.innerHTML=i.map(x=>`<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${r(x)}">${r(x)}</div>`).join(""),X.querySelectorAll(".head-opt").forEach(x=>x.addEventListener("mousedown",s=>{s.preventDefault(),F.value=x.dataset.val,X.classList.add("hidden")})),X.classList.toggle("hidden",!i.length)}F.addEventListener("input",()=>{const i=F.value.toLowerCase();xe(ee(i))}),F.addEventListener("focus",()=>{const i=ze(document.getElementById("cf-subg").value)?"":F.value.toLowerCase();xe(ee(i))}),F.addEventListener("blur",()=>setTimeout(()=>X.classList.add("hidden"),150));const ye=document.getElementById("cf-teacher-code"),_e=document.getElementById("cf-teacher-search"),$e=document.getElementById("cf-teacher-dropdown"),Ce=document.getElementById("cf-teacher-selected"),Oe=document.getElementById("cf-teacher-name"),qe=document.getElementById("cf-teacher-clear"),a=document.getElementById("cf-teacher-id"),N=document.getElementById("cf-phone");function P(i){if(!i){a.value="",ye.value="",_e.value="",Ce.classList.add("hidden"),Ce.classList.remove("flex"),N.value="";return}a.value=i.id,ye.value=i.teacher_code??"",_e.value=i.full_name??"",Oe.textContent=`${i.full_name}${i.teacher_code?` (${i.teacher_code})`:""}`,Ce.classList.remove("hidden"),Ce.classList.add("flex"),N.value=vt(i.phone??""),$e.classList.add("hidden")}function T(i){$e.innerHTML=i.length?i.map(x=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${x.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${x.teacher_code??""}</span>
            <span class="font-medium">${x.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',$e.querySelectorAll(".t-opt").forEach(x=>x.addEventListener("mousedown",s=>{s.preventDefault(),P(p.find(k=>String(k.id)===x.dataset.id))})),$e.classList.remove("hidden")}if(e&&!t){const i=p.find(x=>x.id===e.id);i&&P(i)}ye.oninput=()=>{const i=ye.value.trim().toLowerCase();if(!i){P(null);return}const x=p.find(s=>(s.teacher_code??"").toLowerCase()===i);if(x)P(x);else{const s=p.filter(k=>(k.teacher_code??"").toLowerCase().startsWith(i));s.length&&T(s)}},_e.onfocus=()=>T(p),_e.oninput=()=>{const i=_e.value.toLowerCase();T(i?p.filter(x=>x.full_name.toLowerCase().includes(i)||(x.teacher_code??"").toLowerCase().includes(i)):p)},_e.onblur=()=>setTimeout(()=>$e.classList.add("hidden"),150),qe.addEventListener("click",()=>P(null));const D=document.getElementById("cf-toggle-coteach"),R=document.getElementById("cf-grade-single-wrapper"),W=document.getElementById("cf-grade-multi-container"),M=document.getElementById("cf-coteach-section");D.addEventListener("change",i=>{i.target.checked?(D.checked=!1,oe(()=>{D.checked=!0,R.classList.add("hidden"),W.classList.remove("hidden"),M.classList.remove("hidden");const s=document.getElementById("cf-subg").value;se(s),ce()},()=>{D.checked=!1})):U(()=>{D.checked=!1,R.classList.remove("hidden"),W.classList.add("hidden"),M.classList.add("hidden"),I=[]},()=>{D.checked=!0})});const re=document.getElementById("cf-coteach-code"),we=document.getElementById("cf-coteach-search"),Ee=document.getElementById("cf-coteach-dropdown");function K(i){if(!i)return;if(I.some(s=>s.id===i.id)){Y("ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว","warning"),re.value="",we.value="";return}const x=Number(a.value);if(i.id===x){Y("ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้","warning"),re.value="",we.value="";return}I.push(i),ce(),re.value="",we.value="",Ee.classList.add("hidden")}function Q(i){Ee.innerHTML=i.length?i.map(x=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${x.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${x.teacher_code??""}</span>
            <span class="font-medium">${x.full_name}</span>
          </div>`).join(""):'<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>',Ee.querySelectorAll(".co-t-opt").forEach(x=>x.addEventListener("mousedown",s=>{s.preventDefault(),K(p.find(k=>String(k.id)===x.dataset.id))})),Ee.classList.remove("hidden")}if(re.oninput=()=>{const i=re.value.trim().toLowerCase();if(!i)return;const x=p.find(s=>(s.teacher_code??"").toLowerCase()===i);if(x)K(x);else{const s=p.filter(k=>(k.teacher_code??"").toLowerCase().startsWith(i));s.length&&Q(s)}},we.onfocus=()=>Q(p),we.oninput=()=>{const i=we.value.toLowerCase();Q(i?p.filter(x=>x.full_name.toLowerCase().includes(i)||(x.teacher_code??"").toLowerCase().includes(i)):p)},we.onblur=()=>setTimeout(()=>Ee.classList.add("hidden"),150),N.addEventListener("input",i=>{i.target.value=vt(i.target.value)}),t){if(document.getElementById("cf-name").value=t.subject_name??"",document.getElementById("cf-code").value=t.subject_code??"",t.credit&&(document.getElementById("cf-credit").value=String(t.credit)),t.subject_group){const i=document.getElementById("cf-subg");i.value=t.subject_group,document.getElementById("cf-dept").innerHTML=pe(q(t.subject_group));const x=document.getElementById("cf-grade"),s=wt[t.subject_group]??[];x.innerHTML=['<option value="">— เลือกชั้นปี —</option>',...s.map(k=>`<option value="${k}">${k}</option>`)].join(""),t.grade_level&&(x.value=t.grade_level),document.getElementById("cf-code-hint").textContent=Z[t.subject_group]??""}if(t.dept){const i=document.getElementById("cf-dept");i.value=t.dept,G(t.subject_group??"",t.dept,t.catalog_id??"")}if(t.learning_area)F.value=t.learning_area;else if(t.dept){const i=ze(t.subject_group)?null:lt(y,t.subject_group,t.dept);F.value=(i==null?void 0:i.head_name)??""}if(t.teacher_id){const i=p.find(x=>x.id===t.teacher_id);i&&P(i)}else if(e){const i=p.find(x=>x.id===e.id);i&&P(i)}if(te){D.checked=!0,R.classList.add("hidden"),W.classList.remove("hidden"),M.classList.remove("hidden");const i=t.subject_group;se(i,t.grade_level),ce()}}document.getElementById("course-form").addEventListener("submit",async i=>{i.preventDefault();const x=document.getElementById("cf-submit"),s=document.getElementById("cf-subg").value,k=document.getElementById("cf-dept").value,n=document.getElementById("cf-name").value.trim(),u=document.getElementById("cf-code").value.trim(),b=parseFloat(document.getElementById("cf-credit").value)||null;let $="";if(D.checked){const ue=Array.from(document.querySelectorAll(".cf-grade-cb:checked"));if(!ue.length){Y("กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน","warning");return}$=ue.map(ve=>ve.value).join(", ")}else $=document.getElementById("cf-grade").value;const H=a.value,O=N.value.trim(),J=F.value.trim();if(!s||!n||!$){Y("กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี","warning");return}x.disabled=!0,x.textContent="กำลังบันทึก...";try{const ue=H?Number(H):(e==null?void 0:e.id)??null,ve=D.checked?I.map(Ae=>Ae.id):[];await o({catalog_id:document.getElementById("cf-catalog-id").value?Number(document.getElementById("cf-catalog-id").value):null,subject_group:s,dept:k||null,subject_name:n,subject_code:u||null,credit:b,grade_level:$,teacher_id:ue,learning_area:J||null},ve),O&&ue&&ue===(e==null?void 0:e.id)&&await It(e.id,{phone:O}).catch(()=>{}),Y("บันทึกคอร์สวิชาสำเร็จ","success"),window._goBack()}catch(ue){Y("บันทึกไม่สำเร็จ: "+je(ue),"error")}finally{x.disabled=!1,x.textContent=f?"บันทึกสำเนาคอร์ส":t?"บันทึกการแก้ไข":"บันทึกคอร์สวิชา"}})}async function bn(e,o=[],t){We("setup"),Ue("ตั้งค่าโปรไฟล์","registration");const[l,f,y,p]=await Promise.all([et().catch(()=>[]),rs().catch(()=>[]),ls().catch(()=>[]),De().catch(()=>({}))]),d=parseInt(p.academicYear??2568),_=parseInt(p.semester??1),L=[...new Map(l.map(h=>[`${h.category}:${h.dept_code}`,h])).values()],C=(h,g="")=>'<option value="">— เลือกกลุ่มสาระ —</option>'+(h?L.filter(S=>!S.category||S.category===h):L).map(S=>`<option value="${S.dept_code}" ${S.dept_code===g?"selected":""}>${S.dept_name}</option>`).join(""),I=f,w=y,c=await is(d,_).catch(()=>[]);if(Me(`<div class="max-w-lg mx-auto animate-fade">
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
            class="${ge}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${Le}">
            ${C(e==null?void 0:e.category,(e==null?void 0:e.dept)??"")}
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
            ${["สามัญ","ศาสนา"].map(h=>`
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${(e==null?void 0:e.category)===h?"border-emerald-400 bg-emerald-50":"border-gray-200"}">
              <input type="radio" name="setup-category" value="${h}" ${(e==null?void 0:e.category)===h?"checked":""}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${h}</span>
            </label>`).join("")}
          </div>
        </div>
        ${vs({prefix:"setup",samaiRooms:I,religionRooms:w,homeroomRooms:o,assignments:c,teacherId:e==null?void 0:e.id,academicYear:d,semester:_})}
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`),!e)return;const v=()=>{var S;const h=(S=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:S.value,g=document.getElementById("setup-room-samai-wrap"),A=document.getElementById("setup-room-religion-wrap");h==="สามัญ"?(g==null||g.classList.remove("hidden"),A==null||A.classList.add("hidden")):h==="ศาสนา"?(A==null||A.classList.remove("hidden"),g==null||g.classList.add("hidden")):(g==null||g.classList.remove("hidden"),A==null||A.classList.remove("hidden"))};v(),hs(),document.querySelectorAll('input[name="setup-category"]').forEach(h=>h.addEventListener("change",()=>{var j;v();const g=(j=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:j.value,A=document.getElementById("setup-dept"),S=A==null?void 0:A.value;A&&(A.innerHTML=C(g,S))})),document.getElementById("setup-phone").addEventListener("input",h=>{const g=h.target.value.replace(/\D/g,"").slice(0,10);h.target.value=g.length<=3?g:g.length<=6?`${g.slice(0,3)} ${g.slice(3)}`:`${g.slice(0,3)} ${g.slice(3,6)} ${g.slice(6)}`}),document.getElementById("setup-form").addEventListener("submit",async h=>{var A;h.preventDefault();const g=document.getElementById("setup-save");g.disabled=!0,g.textContent="กำลังบันทึก...";try{const S=document.getElementById("setup-dept").value||null,j=document.getElementById("setup-subg").value||null,V=((A=document.querySelector('input[name="setup-category"]:checked'))==null?void 0:A.value)||null,B=document.getElementById("setup-phone").value.trim()||null,ie=[...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(pe=>pe.value),ne=[...document.querySelectorAll('input[name="setup-room-religion"]:checked')].map(pe=>pe.value);await It(e.id,{dept:S,subject_group:j,category:V,phone:B});const{upsertHomeroomTeacher:me,deleteHomeroomTeacher:E}=await Ne(async()=>{const{upsertHomeroomTeacher:pe,deleteHomeroomTeacher:ee}=await import("./api-vSXCr5aV.js").then(fe=>fe.eB);return{upsertHomeroomTeacher:pe,deleteHomeroomTeacher:ee}},__vite__mapDeps([0,1,2,3])),q=async(pe,ee)=>{const fe=o.filter(de=>de.category===pe&&Number(de.academic_year)===d&&Number(de.semester)===_);await Promise.all(fe.filter(de=>!ee.includes(de.main_room)).map(de=>E(de.id).catch(()=>{}))),await Promise.all(ee.map(de=>me({teacher_id:e.id,main_room:de,category:pe,academic_year:d,semester:_})))};await Promise.all([q("สามัญ",ie),q("ศาสนา",ne)]),Y("บันทึกโปรไฟล์สำเร็จ ✅","success"),t&&await t(e.profile_id)}catch(S){Y("บันทึกไม่สำเร็จ: "+je(S),"error")}finally{g.disabled=!1,g.textContent="บันทึกและเริ่มใช้งาน →"}})}async function gn(e,o=[],t){var v;We("profile"),Ue("โปรไฟล์ของฉัน","registration");const[l,f,y]=await Promise.all([et().catch(()=>[]),rs().catch(()=>[]),ls().catch(()=>[])]),p=await De().catch(()=>({})),d=parseInt(p.academicYear??new Date().getFullYear()+543),_=parseInt(p.semester??1),L=await is(d,_).catch(()=>[]),C=e==null?void 0:e.category,I=C?l.filter(h=>!h.category||h.category===C):l,w=[...new Map(I.map(h=>[h.dept_code,h])).values()],c=vt((e==null?void 0:e.phone)??"");Me(`<div class="max-w-lg mx-auto animate-fade">
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
              class="${ge} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${(e==null?void 0:e.category)??"—"}"
              class="${ge} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${(e==null?void 0:e.full_name)??""}" class="${ge}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||""}" class="${ge}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${(e==null?void 0:e.username)??""}" placeholder="เช่น hambal.waji"
            class="${ge} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${c}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${ge}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${w.length>0?`<select id="prof-dept" class="${Le} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${w.map(h=>`<option value="${h.dept_code}" ${h.dept_code===(e==null?void 0:e.dept)?"selected":""}>${h.dept_name} (${h.dept_code})</option>`).join("")}
               </select>`:'<input type="hidden" id="prof-dept" value="" />'}
          <input type="text" id="prof-dept-txt" value="${(e==null?void 0:e.dept)??""}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${ge} font-mono uppercase" />
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
        ${vs({prefix:"prof",samaiRooms:f,religionRooms:y,homeroomRooms:o,assignments:L,teacherId:e==null?void 0:e.id,academicYear:d,semester:_})}

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
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${ge}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${ge}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`),window._profileFocus==="password"&&(window._profileFocus=null,requestAnimationFrame(()=>{const h=document.getElementById("prof-pw-new");h==null||h.scrollIntoView({behavior:"smooth",block:"center"}),h==null||h.focus()})),e&&(hs(),document.getElementById("prof-phone").addEventListener("input",h=>{h.target.value=vt(h.target.value)}),document.getElementById("prof-photo-file").addEventListener("change",h=>{const g=h.target.files[0];g&&(document.getElementById("prof-avatar").innerHTML=`<img src="${URL.createObjectURL(g)}" class="w-full h-full object-cover" />`)}),document.getElementById("prof-form").addEventListener("submit",async h=>{var S;h.preventDefault();const g=document.getElementById("prof-save"),A=document.getElementById("prof-name").value.trim();if(!A){Y("กรุณากรอกชื่อ-นามสกุล","warning");return}g.disabled=!0,g.textContent="กำลังบันทึก...";try{const j=document.getElementById("prof-dept"),V=document.getElementById("prof-dept-txt"),B=document.getElementById("prof-subg"),ie=((V==null?void 0:V.value.trim().toUpperCase())||(j==null?void 0:j.value)||"").trim()||null,ne=document.getElementById("prof-username").value.trim().toLowerCase(),me=document.getElementById("prof-email").value.trim();if(ne&&!/^[a-z0-9._-]{3,32}$/.test(ne)){Y("ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร","warning"),g.disabled=!1,g.textContent="บันทึก";return}const E={full_name:A,phone:document.getElementById("prof-phone").value.trim()||null,dept:ie,subject_group:(B==null?void 0:B.value)||null,username:ne||null,login_email:me||null},q=(S=document.getElementById("prof-photo-file").files)==null?void 0:S[0];q&&(E.image_url=await so(e.id,q)),await It(e.id,E);const{upsertHomeroomTeacher:pe,deleteHomeroomTeacher:ee,getSystemConfig:fe}=await Ne(async()=>{const{upsertHomeroomTeacher:oe,deleteHomeroomTeacher:U,getSystemConfig:se}=await import("./api-vSXCr5aV.js").then(ae=>ae.eB);return{upsertHomeroomTeacher:oe,deleteHomeroomTeacher:U,getSystemConfig:se}},__vite__mapDeps([0,1,2,3])),de=await fe().catch(()=>({})),he=parseInt(de.academicYear??new Date().getFullYear()+543),m=parseInt(de.semester??1),z=[...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(oe=>oe.value),te=[...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(oe=>oe.value),ce=async(oe,U)=>{const se=o.filter(ae=>ae.category===oe&&Number(ae.academic_year)===he&&Number(ae.semester)===m);await Promise.all(se.filter(ae=>!U.includes(ae.main_room)).map(ae=>ee(ae.id).catch(()=>{}))),await Promise.all(U.map(ae=>pe({teacher_id:e.id,main_room:ae,category:oe,academic_year:he,semester:m})))};await Promise.all([ce("สามัญ",z),ce("ศาสนา",te)]),Y("บันทึกโปรไฟล์สำเร็จ","success"),t&&await t(e.profile_id)}catch(j){Y("บันทึกไม่สำเร็จ: "+je(j),"error")}finally{g.disabled=!1,g.textContent="บันทึก"}}),(v=document.getElementById("prof-pw-save"))==null||v.addEventListener("click",async()=>{const h=document.getElementById("prof-pw-new").value,g=document.getElementById("prof-pw-confirm").value;if(!h){Y("กรุณากรอกรหัสผ่านใหม่","warning");return}if(h.length<6){Y("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร","warning");return}if(h!==g){Y("รหัสผ่านไม่ตรงกัน","warning");return}const A=document.getElementById("prof-pw-save");A.disabled=!0,A.textContent="⏳ กำลังบันทึก...";try{const{error:S}=await $t.auth.updateUser({password:h});if(S)throw S;Y("เปลี่ยนรหัสผ่านสำเร็จ ✅","success"),document.getElementById("prof-pw-new").value="",document.getElementById("prof-pw-confirm").value=""}catch(S){Y("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+je(S),"error")}finally{A.disabled=!1,A.textContent="บันทึกรหัสผ่านใหม่"}}))}const ws="pp5_exam_docs_draft_v1",Gt="pp5_exam_docs_pending_class_id",_s="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT",mo="https://lh3.googleusercontent.com/d/1DFnJL175-B-Y7YOW0Hezo8qLtVtESrZj",bt=27,at=bt*2,$s=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],kt={th:{key:"th",label:"สามัญ (ไทย)",dir:"ltr",font:'"Sarabun", "TH Sarabun New", sans-serif',button:"พิมพ์ / บันทึก PDF",loading:"กำลังโหลดรายชื่อ...",signListTitle:"แบบฟอร์มลงชื่อนักเรียนที่เข้าสอบ",examCoverTitle:"ใบปะหน้าข้อสอบ",absentTitle:"แบบฟอร์มแจ้งรายชื่อนักเรียนขาดสอบ (วิชาสามัญ)",envelopeTitle:"ใบปะหน้าซองข้อสอบ",examType:"ข้อสอบวัดผล",term:"ภาคเรียนที่",year:"ปีการศึกษา",subject:"รายวิชา",subjectCode:"รหัสวิชา",examDate:"สอบวันที่",examTime:"เวลาที่สอบ",teacher:"ชื่อ-สกุล(ครูผู้สอน)",classLevel:"ชั้น",totalStudents:"จำนวนนักเรียนทั้งหมด",presentStudents:"จำนวนนักเรียนที่เข้าสอบ",absentStudents:"จำนวนนักเรียนที่ขาดสอบ",studentUnit:"คน",examAmount:"จำนวนข้อสอบ",examUnit:"ชุด",no:"เลขที่",studentCode:"เลขประจำตัว",studentName:"ชื่อ-สกุล",absentName:"ชื่อ-สกุล(นักเรียนที่ขาดสอบ)",signature:"ลงชื่อ",note:"หมายเหตุ",examiner:"ลงชื่อครูผู้คุมสอบ",envelopeSubject:"ข้อสอบวิชา",envelopeDate:"สอบวันที่",envelopeMonth:"เดือน",envelopeYear:"พ.ศ",envelopeTime:"สอบเวลา",envelopeTo:"ถึง",envelopeClass:"ชั้น",envelopeStudents:"จำนวนนักเรียน",envelopeTeacher:"ชื่อครูผู้สอน",examRoom:"ห้องสอบ",groupPart:"กลุ่ม / แผนก",periodPart:"คาบสอบ"},ar:{key:"ar",label:"ศาสนา (อาหรับ)",dir:"rtl",font:'"Amiri", serif',button:"طباعة / حفظ PDF",loading:"...النظام يقوم بتحميل المعلومات",signListTitle:"قائمة أسماء طلاب مدرسة عزيزستان",examCoverTitle:"ورقة الأسئلة الاختبار",absentTitle:"نموذج قائمة أسماء الطلاب غير الحاضرين للاختبار",envelopeTitle:"غلاف ظرف أوراق الأسئلة",examType:"نوع الاختبار",term:"الفصل الدراسي",year:"للعام الدراسي",subject:"المادة",subjectCode:"رمز المقرر",examDate:"تاريخ الاختبار",examTime:"وقت الاختبار",teacher:"الاسم ـ اللقب (المعلم)",classLevel:"الصف",totalStudents:"إجمالي عدد الطلاب",presentStudents:"عدد الطلاب الحاضرين",absentStudents:"عدد الطلاب الغائبين",studentUnit:"طالب",examAmount:"إجمالي عدد أوراق الأسئلة",examUnit:"ورقة",no:"رقم",studentCode:"رقم الطالب",studentName:"الاسم ـ اللقب",absentName:"الاسم ـ اللقب (الطلاب غير الحاضرين للاختبار)",signature:"التوقيع",note:"ملاحظات",examiner:"الاسم ـ اللقب (مراقب/مراقبة الاختبار)",envelopeSubject:"المادة",envelopeDate:"تاريخ الاختبار",envelopeMonth:"الشهر",envelopeYear:"السنة",envelopeTime:"وقت الاختبار",envelopeTo:"إلى",envelopeClass:"الصف",envelopeStudents:"إجمالي عدد الطلاب",envelopeTeacher:"اسم المعلم",examRoom:"غرفة الاختبار",groupPart:"المجموعة (القسم)",periodPart:"الحصة (وقت الاختبار)",envSchoolName:"مدرسة عزيزستان",envTerm:"امتحان نهاية الفصل",envYear:"للعام الدراسي",envSubject:"المادة",envClass:"اسم الصف",envTeacher:"اسم المعلم",envInvigilatorHeading:"المراقبون",envDate:"التاريخ",envPeriod:"الحصة",envGroup:"المجموعة",envRoomNo:"رقم الغرفة",envFooterDept:"شئون التعليم الديني"},jawi:{key:"jawi",label:"ศาสนา (ยาวี)",dir:"rtl",font:'"Amiri", serif',button:"PDF چيتق / سيمڤن",loading:"...سيستم سدڠ ممواوت معلومات",signListTitle:"سناراي نام ڤلاجر مدرسة عزيزستان",examCoverTitle:"موك سمڤول سوءالن ڤڤريقسأن",absentTitle:"بورڠ سناراي نام ڤلاجر تيدق حاضر ڤڤريقسأن",envelopeTitle:"موك سمڤول سامڤول سوءالن ڤڤريقسأن",examType:"جنيس ڤڤريقسأن",term:"ڤڠڬل",year:"تاهون ڤڠاجين",subject:"ماده",subjectCode:"كود كورسوس",examDate:"تڠكل ڤريقسا",examTime:"ماس ڤريقسا",teacher:"نام - باق (ڤڠاجر)",classLevel:"كلس",totalStudents:"جومله ڤلاجر سموا",presentStudents:"جومله ڤلاجر يڠ حاضر",absentStudents:"جومله ڤلاجر يڠ غائب",studentUnit:"اورڠ",examAmount:"جومله كرتس سؤالن سموا",examUnit:"ورقة",no:"رقم",studentCode:"نومبور ڤلاجر",studentName:"نام - باق",absentName:"نام - باق (ڤلاجر تيدق حاضر ڤڤريقسأن)",signature:"تندا تاڠن",note:"کتراڠن",examiner:"نام - باق (ڤڠاوس ڤڤريقسأن)",envelopeSubject:"ماده",envelopeDate:"تڠكل ڤريقسا",envelopeMonth:"بولن",envelopeYear:"تاهون",envelopeTime:"ماس ڤريقسا",envelopeTo:"هيڠݢ",envelopeClass:"كلس",envelopeStudents:"جومله ڤلاجر",envelopeTeacher:"نام ڤڠاجر",examRoom:"بيليق ڤريقسا",groupPart:"كومڤولن / بهاڬين",periodPart:"حصة (ماس ڤريقسا)",envSchoolName:"مدرسة عزيزستان",envTerm:"ڤڤريقسأن أخير ڤڠكل",envYear:"تاهون ڤڠاجين",envSubject:"ڤلاجرن",envClass:"نام كلس",envTeacher:"ڬورو ڤلاجرن",envInvigilatorHeading:"ڤڠاول",envDate:"تغكل",envPeriod:"حصة",envGroup:"كروف",envRoomNo:"نومبور بيليق",envFooterDept:"شئون التعليم الديني"}},rt={classId:"",subjectLabel:"",lang:"th",examType:"ปลายภาค",semester:"",academicYear:"",examDate:"",startTime:"08:30",endTime:"09:30",examDateLabel:"",examTimeLabel:"",classPart:"",periodPart:"",examRoom:"",examAmount:"",invigilator1:"",invigilator2:"",studentScope:"all",splitGender:"M",splitPrintMode:"single"},uo=["กลางภาค","ปรับคะแนนกลางภาค","ปลายภาค"];let le={teacher:null,classes:[],teachers:[],students:[],selectedClass:null,form:{...rt},loadingStudents:!1},St=[];const bo=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},go=()=>{try{return JSON.parse(localStorage.getItem(ws)||"{}")||{}}catch{return{}}},it=()=>{localStorage.setItem(ws,JSON.stringify(le.form))},xo=()=>{let e="";try{e=sessionStorage.getItem(Gt)||"",sessionStorage.removeItem(Gt)}catch{}const o=window._pendingExamDocClassId||e;return window._pendingExamDocClassId=null,o?String(o):""},yt=e=>(Array.isArray(e==null?void 0:e.master_subjects)?e.master_subjects[0]:e==null?void 0:e.master_subjects)||{},ks=e=>[...e||[]].sort((o,t)=>String(o.student_code||"").localeCompare(String(t.student_code||""),"th",{numeric:!0})),Mt=e=>{if(!e)return"";const o=new Date(`${e}T00:00:00`);return Number.isNaN(o.getTime())?"":`${o.getDate()} เดือน ${$s[o.getMonth()]} พ.ศ. ${o.getFullYear()+543}`},fo=e=>{if(!e)return{day:"",month:"",year:""};const o=new Date(`${e}T00:00:00`);return Number.isNaN(o.getTime())?{day:"",month:"",year:""}:{day:String(o.getDate()),month:$s[o.getMonth()],year:String(o.getFullYear()+543)}},Pt=e=>{const o=e.startTime||"",t=e.endTime||"";return o&&t?`${o} - ${t}`:o||t||""},Vt=(e,o)=>e?o.key==="th"?`${e} น.`:e:"",vo=e=>{const o=String(e||"").trim();if(!o)return{room:"",name:""};const t=o.match(/^ม\.?\s*([0-9]+\/[0-9]+)\s*(.*)$/i);if(t)return{room:t[1],name:t[2].trim()};const[l,...f]=o.split(/\s+/);return{room:l,name:f.join(" ").trim()}},Ye=e=>{const o=String(e||"").trim().toUpperCase();return o==="ชาย"||o==="M"||o==="MALE"?"M":o==="หญิง"||o==="F"||o==="W"||o==="FEMALE"?"F":""},Dt=()=>{const e=new Set((le.students||[]).map(o=>Ye(o.gender)).filter(Boolean));return e.has("M")&&e.has("F")},ho=()=>{const e=le.form,o=le.students||[];if(e.studentScope!=="split"||!Dt())return[o];const t=o.filter(f=>Ye(f.gender)==="M"),l=o.filter(f=>Ye(f.gender)==="F");return e.splitPrintMode==="both"?[t,l]:[e.splitGender==="F"?l:t]},yo=()=>{const e=le.form;if(e.studentScope!=="split"||!Dt())return"";const o=le.students.filter(l=>Ye(l.gender)==="M").length,t=le.students.filter(l=>Ye(l.gender)==="F").length;return e.splitPrintMode==="both"?` (ชาย ${o} + หญิง ${t})`:e.splitGender==="F"?` (เฉพาะหญิง ${t} คน)`:` (เฉพาะชาย ${o} คน)`},wo=e=>[e==null?void 0:e.teacher_code,e==null?void 0:e.full_name,e==null?void 0:e.dept,e==null?void 0:e.category].filter(Boolean).join(" ").toLowerCase(),Yt=e=>Array.from({length:e},()=>'<tr><td style="height:30px;"></td><td></td><td></td><td></td></tr>').join(""),Wt=(e,o,t,l=t.loading,f=0)=>{const y=e||[],p=y.map((_,L)=>`
    <tr>
      <td>${o+L}</td>
      <td>${r(_.student_code||"")}</td>
      <td class="nm">${r(_.full_name||"")}</td>
      <td></td>
    </tr>
  `).join(""),d=Array.from({length:Math.max(0,f-y.length)},()=>`
    <tr class="blank-student-row">
      <td></td><td></td><td class="nm"></td><td></td>
    </tr>
  `).join("");return p||d?p+d:`<tr><td colspan="4" class="empty-students">${r(l)}</td></tr>`},_o=(e,o,t,l,f,y)=>{const p=e.slice(o*at,(o+1)*at),d=p.slice(0,bt),_=p.slice(bt,at),L=o*at+1,C=L+bt;return`
    <div class="exam-doc-paper ${y} sign-list ${o>0?"exam-doc-page-break":""}">
      ${Ct(t.signListTitle)}
      ${jt(t,l,f)}
      
      <div class="column-container" style="margin-top: 15px;">
        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${r(t.studentCode)}</th>
                <th>${r(t.studentName)}</th>
                <th style="width:80px;">${r(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${Wt(d,L,t)}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>${r(t.studentCode)}</th>
                <th>${r(t.studentName)}</th>
                <th style="width:80px;">${r(t.signature)}</th>
              </tr>
            </thead>
            <tbody>
              ${Wt(_,C,t," ")}
            </tbody>
          </table>
        </div>
      </div>
      ${Et(t,f)}
    </div>`},Ut=(e,o)=>o?`${e}. .................................................... <span class="textColor">(${r(o)})</span>`:`${e}. ...........................................................................................`,Et=(e,o)=>`
  <div class="signature">
    <div style="margin-top: 20px;">${r(e.examiner)}</div>
    <div style="margin-left: 40px;">
      <div class="examiner-signature">
        <div>${Ut(1,o.invigilator1)}</div>
      </div>
      <div class="examiner-signature">
        <div>${Ut(2,o.invigilator2)}</div>
      </div>
    </div>
  </div>`,Ct=e=>`
  <div class="header">
    <img src="${_s}" alt="">
    <h2>${r(e)}</h2>
    <img src="${mo}" alt="">
  </div>`,jt=(e,o,t)=>`
  <div class="infoG">
    <div class="info1">
      ${r(e.examType)}: <span class="textColor">${r(t.examType||"")}</span>
      ${r(e.term)}: <span class="textColor">${r(t.semester||"")}</span>
      ${r(e.year)}: <span class="textColor">${r(t.academicYear||"")}</span>
    </div>
    <div class="info2">
      ${r(e.subject)}: <span class="textColor">${r(o.subjectName||"")}</span>
      ${r(e.subjectCode)}: <span class="textColor">${r(o.subjectCode||"")}</span>
    </div>
    <div class="info3">
      ${r(e.examDate)}: <span class="textColor">${r(t.examDateLabel||Mt(t.examDate))}</span>
      ${r(e.examTime)}: <span class="textColor">${r(t.examTimeLabel||Pt(t))}</span>
    </div>
    <div class="info4">
      ${r(e.teacher)}: <span class="textColor">${r(o.teacherName||"")}</span>
    </div>
    <div class="info5">
      ${r(e.classLevel)}: <span class="textColor">${r(o.className||"")}</span>
    </div>
  </div>`,$o=e=>`
  <div class="header-single">
    <img src="${_s}" alt="">
    <h2>${r(e)}</h2>
  </div>`,Kt=(e,o)=>`
  <div class="env-line env-invigilator-row">
    -${e} <span class="textColor env-blank-full">${r(o||"")}</span>
  </div>`,ko=(e,o,t,l)=>{const[f,y]=String(l.room||"").split("/");return`
  <div class="env-line">
    ${r(e.envTerm)} <span class="textColor env-blank-sm">${r(t.semester||"")}</span>
    ${r(e.envYear)} <span class="textColor env-blank-sm">${r(t.academicYear||"")}</span>
  </div>
  <div class="env-line">
    ${r(e.envSubject)} <span class="textColor env-blank-lg">${r(o.subjectName||"")}</span>
    ${r(e.envClass)} <span class="textColor env-blank-sm">${r(f||"")}</span> / <span class="textColor env-blank-sm">${r(y||"")}</span>
  </div>
  <div class="env-line">
    ${r(e.envTeacher)} <span class="textColor env-blank-lg">${r(o.teacherName||"")}</span>
  </div>
  <div class="env-line env-invigilator-heading">${r(e.envInvigilatorHeading)}:-</div>
  ${Kt(1,t.invigilator1)}
  ${Kt(2,t.invigilator2)}
  <table class="envelope-summary-table">
    <tbody>
      <tr><th>${r(e.envDate)}</th><td class="textColor">${r(t.examDateLabel||Mt(t.examDate))}</td></tr>
      <tr><th>${r(e.envPeriod)}</th><td class="textColor">${r(t.examTimeLabel||Pt(t))}</td></tr>
      <tr><th>${r(e.envGroup)}</th><td class="textColor">${r(t.classPart||"")}</td></tr>
      <tr><th>${r(e.envRoomNo)}</th><td class="textColor">${r(t.examRoom||"")}</td></tr>
    </tbody>
  </table>
  <div class="env-footer-dept">${r(e.envFooterDept)}</div>`},So=(e,o)=>{var S,j;const t=le.form,l=kt[t.lang]||kt.th,f=le.selectedClass||{},y=yt(f),p=ks(e),d=p.length,_=fo(t.examDate),L=(S=le.teacher)!=null&&S.phone?` (${le.teacher.phone})`:"",C={className:f.class_name||"",subjectName:t.subjectLabel||y.subject_name||"",subjectCode:y.subject_code||"",teacherName:(((j=le.teacher)==null?void 0:j.full_name)||"")+L},I=Math.max(1,Math.ceil(p.length/at)),w=l.dir==="rtl"?"rtl":"ltr",c=o==="all"||o==="portrait",v=o==="all"||o==="envelope",h=o==="envelope"?" envelope-only":o==="portrait"?" portrait-only":"",g=t.examAmount||String(d),A=vo(C.className);return`
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
    ${c?`
    ${Array.from({length:I},(V,B)=>_o(p,B,l,C,t,w)).join("")}

    <div class="exam-doc-paper ${w} exam-doc-page-break">
      ${Ct(l.examCoverTitle)}
      ${jt(l,C,t)}
      <div style="text-align: right; margin-top: 10px; margin-bottom: 10px; margin-right: 70px;">
        <div>
          ${r(l.totalStudents)} <span class="textColor" style="border-bottom:2px dotted; padding:0 40px;">${d}</span> ${r(l.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${r(l.presentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${r(l.studentUnit)}
        </div>
        <div style="margin-top: 10px;">
          ${r(l.absentStudents)} <span style="border-bottom:2px dotted; padding:0 40px;">&nbsp;</span> ${r(l.studentUnit)}
        </div>
      </div>
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${r(l.no)}</th>
            <th>${r(l.studentCode)}</th>
            <th>${r(l.absentName)}</th>
            <th>${r(l.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${Yt(15)}
        </tbody>
      </table>
      ${Et(l,t)}
    </div>

    <div class="exam-doc-paper ${w} exam-doc-page-break">
      ${Ct(l.absentTitle)}
      ${jt(l,C,t)}
      <table style="margin-top: 10px;">
        <thead>
          <tr>
            <th>${r(l.no)}</th>
            <th>${r(l.studentCode)}</th>
            <th>${r(l.absentName)}</th>
            <th>${r(l.note)}</th>
          </tr>
        </thead>
        <tbody>
          ${Yt(15)}
        </tbody>
      </table>
      ${Et(l,t)}
    </div>
    `:""}

    ${v?t.lang==="th"?`
    <div class="exam-doc-paper ${w} landscape ${c?"exam-doc-page-break":""}">
      <div class="headerL">
        <a>${r(l.envelopeTitle)}</a>
      </div>
      <div class="infoNP">
        <div class="infoNP1">
          ${r(l.envelopeSubject)} <span class="textColor">${r(C.subjectName)}</span> ${r(l.subjectCode)} <span class="textColor">${r(C.subjectCode)}</span>
        </div>
        <div class="infoNP2">
          ${t.examDateLabel?`${r(l.envelopeDate)} <span class="textColor">${r(t.examDateLabel)}</span>`:`${r(l.envelopeDate)} <span class="textColor">${r(_.day)}</span> ${r(l.envelopeMonth)} <span class="textColor">${r(_.month)}</span> ${r(l.envelopeYear)} <span class="textColor">${r(_.year)}</span>`}
        </div>
        <div class="infoNP3">
          ${t.examTimeLabel?`${r(l.envelopeTime)} <span class="textColor">${r(t.examTimeLabel)}</span>`:`${r(l.envelopeTime)} <span class="textColor">${r(Vt(t.startTime,l))}</span> ${r(l.envelopeTo)} <span class="textColor">${r(Vt(t.endTime,l))}</span>`}
        </div>
        <div class="infoNP4">
          ${r(l.envelopeClass)} <span class="textColor exam-envelope-class"><span class="exam-envelope-class-room">${r(A.room)}</span>${A.name?`<span class="exam-envelope-class-name">${r(A.name)}</span>`:""}</span> ${r(l.envelopeStudents)} <span class="textColor">${d}</span> ${r(l.studentUnit)} ${r(l.examAmount)} <span class="textColor">${r(g)}</span> ${r(l.examUnit)}
        </div>
        <div class="infoNP5">
          ${r(l.envelopeTeacher)} <span class="textColor">${r(C.teacherName)}</span>
        </div>
      </div>
    </div>
    `:`
    <div class="exam-doc-paper ${w} envelope-religious ${c?"exam-doc-page-break":""}">
      ${$o(l.envSchoolName)}
      ${ko(l,C,t,A)}
    </div>
    `:""}
    </div>`},Ot=(e="all")=>{const t=ho().map(_=>So(_,e));if(t.length<=1)return t[0]||"";const l=t[0].match(/<style[\s\S]*?<\/style>/),f=l?l[0]:"",y=t[0].match(/<div id="exam-doc-print-area" class="([^"]*)">/),p=y?y[1]:"",d=t.map(_=>{const L=_.match(/<div id="exam-doc-print-area"[^>]*>([\s\S]*)<\/div>\s*$/);return L?L[1]:""});return`${f}
<div id="exam-doc-print-area" class="${p}">${d.join("")}</div>`},Eo=()=>{const e=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>เอกสารช่วงสอบ</title>
</head>
<body style="margin:0;background:#fff;">
  ${Ot("all")}
</body>
</html>`;ps(e,{autoprint:!0})},Co=()=>{const e=le.selectedClass,o=yt(e);return e?`${o.subject_code||"-"} · ${o.subject_name||"-"} · ${e.class_name||"-"}`:"ยังไม่ได้เลือกห้องเรียน"};function jo(){St.forEach(e=>{try{e()}catch{}}),St=[]}function Jt(e,o){const t=document.getElementById(e),l=document.getElementById(`${e}-list`);if(!t||!l)return;const f=le.teachers||[],y=()=>{l.classList.add("hidden")},p=c=>{t.value=c.full_name||"",le.form[o]=t.value,it(),dt(),y()},d=()=>{const c=t.value.trim(),v=c.toLowerCase(),h=f.filter(g=>!c||wo(g).includes(v)).slice(0,10);if(!f.length){l.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบรายชื่อครูในระบบ</div>';return}if(!h.length){l.innerHTML='<div class="px-3 py-2 text-xs text-gray-400 text-center">ไม่พบครูที่ตรงกัน</div>';return}l.innerHTML=h.map(g=>`
      <button type="button" data-id="${g.id}"
        class="exam-teacher-option w-full px-3 py-2 text-left hover:bg-emerald-50 transition flex items-center gap-2">
        ${g.image_url?`<img src="${g.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="">`:`<span class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${r((g.full_name||"?").charAt(0))}</span>`}
        <span class="min-w-0">
          <span class="block text-sm font-semibold text-gray-700 truncate">${r(g.full_name||"—")}</span>
          <span class="block text-[11px] text-gray-400 truncate">${r(g.teacher_code||"—")}${g.dept?` · ${r(g.dept)}`:""}</span>
        </span>
      </button>
    `).join(""),l.querySelectorAll(".exam-teacher-option").forEach(g=>{g.addEventListener("mousedown",A=>{A.preventDefault();const S=f.find(j=>String(j.id)===String(g.dataset.id));S&&p(S)})})},_=()=>{d(),l.classList.remove("hidden")},L=()=>{le.form[o]=t.value,it(),dt(),_()},C=()=>_(),I=c=>{if(c.key==="Escape"&&y(),c.key==="Enter"){const v=l.querySelector(".exam-teacher-option");v&&!l.classList.contains("hidden")&&(c.preventDefault(),v.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})))}},w=c=>{!t.contains(c.target)&&!l.contains(c.target)&&y()};t.addEventListener("input",L),t.addEventListener("focus",C),t.addEventListener("keydown",I),document.addEventListener("mousedown",w,!0),St.push(()=>{t.removeEventListener("input",L),t.removeEventListener("focus",C),t.removeEventListener("keydown",I),document.removeEventListener("mousedown",w,!0)})}function Ze(){const e=le.form,o=le.classes.map(t=>{const l=yt(t),f=`${l.subject_code||"-"} · ${l.subject_name||"-"} · ${t.class_name||"-"}`;return`<option value="${t.id}" ${String(e.classId)===String(t.id)?"selected":""}>${r(f)}</option>`}).join("");Me(`
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
              ${Object.values(kt).map(t=>`<option value="${t.key}" ${e.lang===t.key?"selected":""}>${r(t.label)}</option>`).join("")}
            </select>
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ประเภทสอบ</span>
            <input id="exam-type" list="exam-type-datalist" class="${ge}" value="${r(e.examType)}" placeholder="เช่น กลางภาค">
            <datalist id="exam-type-datalist">
              ${uo.map(t=>`<option value="${r(t)}">`).join("")}
            </datalist>
          </label>
          <label class="lg:col-span-12 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ชื่อวิชาที่แสดงในเอกสาร (ไม่กรอก = ใช้ชื่อวิชาจริงของห้องที่เลือก — พิมพ์เองได้ เช่น แปลเป็นภาษาอาหรับ/ยาวี ใช้แค่เอกสารชุดนี้ ไม่บันทึกถาวร)</span>
            <input id="exam-subject-label" class="${ge}" value="${r(e.subjectLabel)}" placeholder="${r(yt(le.selectedClass||{}).subject_name||"เช่น الرياضيات الأساسية")}">
          </label>
          <div class="lg:col-span-2 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ภาค</span>
              <input id="exam-semester" class="${ge}" value="${r(e.semester)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">ปี</span>
              <input id="exam-year" class="${ge}" value="${r(e.academicYear)}">
            </label>
          </div>

          <label class="lg:col-span-3 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">วันที่สอบ</span>
            <input id="exam-date" type="date" class="${ge}" value="${r(e.examDate)}">
          </label>
          <div class="lg:col-span-3 grid grid-cols-2 gap-2">
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาเริ่ม</span>
              <input id="exam-start" type="time" class="${ge}" value="${r(e.startTime)}">
            </label>
            <label class="block">
              <span class="block text-xs font-bold text-gray-500 mb-1">เวลาสิ้นสุด</span>
              <input id="exam-end" type="time" class="${ge}" value="${r(e.endTime)}">
            </label>
          </div>
          ${e.lang!=="th"?`
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความวันที่สอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = แปลงจากวันที่ด้านบนแบบไทยให้อัตโนมัติ)</span>
            <input id="exam-date-label" class="${ge}" value="${r(e.examDateLabel)}" placeholder="${r(Mt(e.examDate)||"เช่น ١٥ يوليو ٢٠٢٦")}">
          </label>
          <label class="lg:col-span-6 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ข้อความเวลาสอบที่จะพิมพ์ในเอกสาร (ไม่กรอก = ใช้เวลาด้านบนตามที่ตั้งไว้)</span>
            <input id="exam-time-label" class="${ge}" value="${r(e.examTimeLabel)}" placeholder="${r(Pt(e)||"เช่น ٠٨:٣٠ - ٠٩:٣٠")}">
          </label>`:""}
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">จำนวนข้อสอบ</span>
            <input id="exam-amount" inputmode="numeric" class="${ge}" value="${r(e.examAmount)}" placeholder="เช่น 35">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">ห้องสอบ</span>
            <input id="exam-room" class="${ge}" value="${r(e.examRoom)}" placeholder="เช่น 321">
          </label>
          <label class="lg:col-span-2 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">คาบสอบ</span>
            <input id="exam-period-part" class="${ge}" value="${r(e.periodPart)}" placeholder="เช่น 1">
          </label>

          <label class="lg:col-span-4 block">
            <span class="block text-xs font-bold text-gray-500 mb-1">กลุ่ม / แผนก</span>
            <input id="exam-class-part" class="${ge}" value="${r(e.classPart)}" placeholder="เช่น AEP 1 / PR 2">
          </label>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 1</span>
            <input id="exam-invigilator-1" class="${ge}" value="${r(e.invigilator1)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-1-list" class="exam-teacher-results hidden"></div>
          </div>
          <div class="lg:col-span-4 block exam-teacher-autocomplete">
            <span class="block text-xs font-bold text-gray-500 mb-1">ครูคุมสอบ 2</span>
            <input id="exam-invigilator-2" class="${ge}" value="${r(e.invigilator2)}" autocomplete="off" placeholder="รหัสหรือชื่อครู">
            <div id="exam-invigilator-2-list" class="exam-teacher-results hidden"></div>
          </div>
        </div>

        ${Dt()?(()=>{const t=le.students.filter(y=>Ye(y.gender)==="M").length,l=le.students.filter(y=>Ye(y.gender)==="F").length,f=e.studentScope==="split";return`
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
              <option value="F" ${e.splitGender==="F"?"selected":""}>หญิง (${l} คน)</option>
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
          <span class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">${r(Co())}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">นักเรียน ${le.students.length} คน${r(yo())}</span>
          ${le.loadingStudents?'<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">กำลังโหลดรายชื่อ...</span>':""}
        </div>
      </section>

      <section class="exam-doc-preview-wrap">
        <div id="exam-doc-preview-area">${Ot()}</div>
      </section>
    </div>`),Ao()}async function Lt(){const e=le.form.classId;if(le.selectedClass=le.classes.find(o=>String(o.id)===String(e))||null,le.students=[],!!e){le.loadingStudents=!0,Ze();try{le.students=ks(await Rs(e))}catch(o){console.error(o),Y("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+je(o),"error")}finally{le.loadingStudents=!1}}}function Ve(){var e,o,t,l,f,y,p,d,_,L,C,I,w,c,v,h,g,A,S,j;le.form={classId:((e=document.getElementById("exam-class-id"))==null?void 0:e.value)||"",subjectLabel:((o=document.getElementById("exam-subject-label"))==null?void 0:o.value)||"",lang:((t=document.getElementById("exam-lang"))==null?void 0:t.value)||"th",examType:((l=document.getElementById("exam-type"))==null?void 0:l.value)||"",semester:((f=document.getElementById("exam-semester"))==null?void 0:f.value)||"",academicYear:((y=document.getElementById("exam-year"))==null?void 0:y.value)||"",examDate:((p=document.getElementById("exam-date"))==null?void 0:p.value)||"",startTime:((d=document.getElementById("exam-start"))==null?void 0:d.value)||"",endTime:((_=document.getElementById("exam-end"))==null?void 0:_.value)||"",examDateLabel:((L=document.getElementById("exam-date-label"))==null?void 0:L.value)||"",examTimeLabel:((C=document.getElementById("exam-time-label"))==null?void 0:C.value)||"",classPart:((I=document.getElementById("exam-class-part"))==null?void 0:I.value)||"",periodPart:((w=document.getElementById("exam-period-part"))==null?void 0:w.value)||"",examRoom:((c=document.getElementById("exam-room"))==null?void 0:c.value)||"",examAmount:((v=document.getElementById("exam-amount"))==null?void 0:v.value)||"",invigilator1:((h=document.getElementById("exam-invigilator-1"))==null?void 0:h.value)||"",invigilator2:((g=document.getElementById("exam-invigilator-2"))==null?void 0:g.value)||"",studentScope:((A=document.getElementById("exam-student-scope"))==null?void 0:A.value)||"all",splitGender:((S=document.getElementById("exam-split-gender"))==null?void 0:S.value)||"M",splitPrintMode:((j=document.getElementById("exam-split-print-mode"))==null?void 0:j.value)||"single"},le.selectedClass=le.classes.find(V=>String(V.id)===String(le.form.classId))||null,it()}function dt(){const e=document.getElementById("exam-doc-preview-area");e&&(e.innerHTML=Ot())}function Lo(){return Ve(),dt(),le.form.classId?!0:(Y("กรุณาเลือกห้องเรียนก่อนพิมพ์","warning"),!1)}function Ao(){var o,t,l,f;jo(),["exam-type","exam-subject-label","exam-semester","exam-year","exam-date","exam-start","exam-end","exam-amount","exam-room","exam-period-part","exam-class-part","exam-invigilator-1","exam-invigilator-2","exam-date-label","exam-time-label"].forEach(y=>{var p,d;(p=document.getElementById(y))==null||p.addEventListener("input",()=>{Ve(),dt()}),(d=document.getElementById(y))==null||d.addEventListener("change",()=>{Ve(),dt()})}),(o=document.getElementById("exam-class-id"))==null||o.addEventListener("change",async()=>{Ve(),it(),await Lt(),Ze()}),(t=document.getElementById("exam-lang"))==null||t.addEventListener("change",()=>{Ve(),Ze()}),["exam-student-scope","exam-split-gender","exam-split-print-mode"].forEach(y=>{var p;(p=document.getElementById(y))==null||p.addEventListener("change",()=>{Ve(),Ze()})}),(l=document.getElementById("exam-doc-refresh"))==null||l.addEventListener("click",async()=>{Ve(),await Lt(),Ze(),Y("รีเฟรชรายชื่อแล้ว","success")}),(f=document.getElementById("exam-doc-print"))==null||f.addEventListener("click",()=>{Lo()&&Eo()}),Jt("exam-invigilator-1","invigilator1"),Jt("exam-invigilator-2","invigilator2")}async function xn(e){We("exam-docs"),Ue("เอกสารช่วงสอบ","exam-docs"),Me(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดเอกสารช่วงสอบ...
  </div>`);try{const[o,t,l]=await Promise.all([Bt((e==null?void 0:e.id)??null),De().catch(()=>({})),os().catch(()=>[])]),f=go(),y=xo(),p={...rt,semester:String(t.semester||rt.semester||""),academicYear:String(t.academicYear||rt.academicYear||""),examDate:bo(),invigilator1:(e==null?void 0:e.full_name)||"",...f};y&&o.some(d=>String(d.id)===String(y))&&(p.classId=String(y)),le={teacher:e,classes:o,teachers:l,students:[],selectedClass:null,loadingStudents:!1,form:p},le.form.examType||(le.form.examType=rt.examType),y&&it(),le.selectedClass=le.classes.find(d=>String(d.id)===String(le.form.classId))||null,await Lt(),Ze()}catch(o){console.error(o),Me(`<div class="bg-white rounded-2xl border border-red-100 p-8 text-center text-red-500">
      โหลดเอกสารช่วงสอบไม่สำเร็จ: ${r(je(o))}
    </div>`)}}let tt=null,Je=null,st=null,Xe=null,Qe=null,Ss=null,ut=Promise.resolve(),ot=null;const At='<svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M16 9V4h1V2H7v2h1v5c0 1.66-1.34 3-3 3v2h7v7l1 1 1-1v-7h7v-2c-1.66 0-3-1.34-3-3z"/></svg>';function gt(){const e=document.querySelector("#sidebar nav");if(!e)return[];const o=[...e.querySelectorAll("a[href], button[id]")],t=new Set;return o.flatMap(l=>{var I,w,c;if(l.matches(".sidebar-menu-group-toggle, .sidebar-menu-pin"))return[];if(!l.dataset.nav&&!l.id&&!l.getAttribute("href"))return[];for(let v=l;v&&v!==e;v=v.parentElement)if(v.hidden||v.classList.contains("hidden")||v.getAttribute("aria-hidden")==="true")return[];const f=l.getAttribute("href")||"",y=l.dataset.nav?"nav:"+l.dataset.nav:l.id?"id:"+l.id:"href:"+f;if(t.has(y))return[];t.add(y);const p=[...l.children].find(v=>{var h;return v.tagName==="SPAN"&&!((h=v.id)!=null&&h.startsWith("badge"))}),d=(p==null?void 0:p.textContent.trim())||"▣",_=l.cloneNode(!0);_.querySelectorAll('.sidebar-menu-pin, [id^="badge-"]').forEach(v=>v.remove()),p&&((I=_.querySelector(":scope > span"))==null||I.remove());const L=_.textContent.replace(/\s+/g," ").trim();if(!L)return[];const C=((c=(w=l.closest(".sidebar-menu-group"))==null?void 0:w.querySelector(".sidebar-menu-group-toggle-label"))==null?void 0:c.textContent.replace(/\s+/g," ").trim())||"เมนูหลัก";return[{key:y,label:L,icon:d,groupName:C,element:l}]})}function xt(e=Ss){var o;return Array.isArray((o=e==null?void 0:e.overview_prefs)==null?void 0:o.pinnedMenuKeys)?e.overview_prefs.pinnedMenuKeys:[]}function Io(e,o,t="",l="list"){const f=new Map(e.map(c=>[c.key,c])),y=o.map(c=>f.get(c)).filter(Boolean),p=t.trim().normalize("NFKC").toLocaleLowerCase(),d=p?e.filter(c=>(c.label+" "+c.groupName).normalize("NFKC").toLocaleLowerCase().includes(p)):y,_=d.map(c=>{const v=o.includes(c.key),h='<span class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg">'+r(c.icon)+'</span><span class="min-w-0"><span class="block truncate text-sm font-semibold text-gray-800">'+r(c.label)+'</span><span class="block truncate text-[11px] text-gray-400">'+r(c.groupName)+"</span></span>",g=l==="grid"?"flex min-h-[5.5rem] min-w-0 flex-1 items-center gap-2 rounded-xl px-2 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500":"flex min-h-12 min-w-0 flex-1 items-center gap-2.5 rounded-lg px-1.5 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",A="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg "+(v?"text-amber-500":"text-gray-300 hover:bg-amber-50 hover:text-amber-500")+" focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400";return'<div class="group flex min-w-0 items-center gap-1 '+(l==="grid"?"rounded-xl border border-gray-100 bg-white p-1 hover:border-emerald-200 hover:bg-emerald-50/50":"px-2 py-1 hover:bg-emerald-50")+'"><button type="button" data-menu-open="'+r(c.key)+'" class="'+g+'">'+h+'</button><button type="button" data-menu-pin="'+r(c.key)+'" aria-label="'+(v?"เลิกปักหมุด ":"ปักหมุด ")+r(c.label)+'" title="'+(v?"เลิกปักหมุด":"ปักหมุดเมนู")+'" class="'+A+'">'+At+"</button></div>"}),L=d.length?'<div class="'+(l==="grid"?"grid grid-cols-2 gap-2 p-2":"divide-y divide-gray-100")+'">'+_.join("")+"</div>":'<p class="px-3 py-5 text-center text-sm text-gray-500">'+(p?"ไม่พบเมนูที่ตรงกับคำค้น":"ยังไม่มีเมนูที่ปักหมุด กดรูปดาวข้างเมนูที่ใช้บ่อยเพื่อเพิ่มได้เลย")+"</p>",C=(c,v,h)=>'<button type="button" data-menu-view="'+c+'" aria-pressed="'+String(l===c)+'" class="inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 '+(l===c?"bg-white text-emerald-800 shadow-sm":"text-gray-500 hover:text-gray-800")+'">'+h+"<span>"+v+"</span></button>";return'<p class="mb-1 px-1 text-xs font-semibold text-gray-500">'+(p?"ผลการค้นหา "+d.length+" เมนู":"เมนูที่ปักหมุด "+y.length)+'</p><div class="mb-2 flex items-center justify-between gap-2"><span class="px-1 text-[11px] font-medium text-gray-400">รูปแบบการแสดง</span><div class="inline-flex rounded-xl bg-gray-100 p-1" role="group" aria-label="รูปแบบการแสดงเมนู">'+C("list","รายการ",'<svg aria-hidden="true" viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" d="M7 5h9M7 10h9M7 15h9"/><circle cx="3.5" cy="5" r=".7" fill="currentColor" stroke="none"/><circle cx="3.5" cy="10" r=".7" fill="currentColor" stroke="none"/><circle cx="3.5" cy="15" r=".7" fill="currentColor" stroke="none"/></svg>')+C("grid","กริด",'<svg aria-hidden="true" viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="2.5" width="6" height="6" rx="1.2"/><rect x="11.5" y="2.5" width="6" height="6" rx="1.2"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.2"/><rect x="11.5" y="11.5" width="6" height="6" rx="1.2"/></svg>')+'</div></div><div class="max-h-[min(55vh,24rem)] overflow-y-auto rounded-xl border border-gray-200">'+L+"</div>"}function Xt(e){var h;Ss=e;const o=document.getElementById("main-content");if(!o)return;(h=o.querySelector("#overview-menu-launcher"))==null||h.remove(),ot==null||ot.abort();const t=gt(),l=xt(e).filter(g=>t.some(A=>A.key===g)),f=o.querySelector("#teacher-overview-summary-title"),y=f==null?void 0:f.parentElement,p=o.querySelector("#exec-stat-cards");if(!y&&!p){Qt(t,l);return}const d=document.createElement("div");d.id="overview-menu-launcher",d.className=y?"relative ml-auto flex-shrink-0":"relative mb-3 flex justify-end",d.innerHTML='<button type="button" id="overview-menu-toggle" aria-haspopup="dialog" aria-expanded="false" aria-controls="overview-menu-popover" class="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"><span aria-hidden="true" class="text-base">☆</span><span>เมนูที่ใช้บ่อย</span><span id="overview-menu-pin-count" class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px]">'+l.length+'</span></button><div id="overview-menu-popover" role="dialog" aria-label="เมนูที่ใช้บ่อยและค้นหาเมนู" class="hidden fixed z-[120] rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl" style="top:max(76px,calc(env(safe-area-inset-top) + 16px));right:max(12px,env(safe-area-inset-right));width:min(25rem,calc(100vw - 24px));max-height:calc(100dvh - max(92px,calc(env(safe-area-inset-top) + 32px)));transform-origin:top right;"><div class="mb-2 flex items-center justify-between gap-3"><h3 class="text-sm font-bold text-gray-800">เมนูของฉัน</h3><button type="button" id="overview-menu-close" aria-label="ปิดเมนู" class="flex h-8 w-8 items-center justify-center rounded-lg text-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">×</button></div><label for="overview-menu-search" class="sr-only">ค้นหาเมนู</label><input id="overview-menu-search" type="search" autocomplete="off" placeholder="ค้นหาเมนู เช่น แบบทดสอบ คะแนน หรือเช็คชื่อ" class="mb-2 w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100" aria-controls="overview-menu-list"><div id="overview-menu-list" aria-live="polite"></div></div>',y?(y.classList.add("flex-wrap"),y.append(d)):p.before(d);const _=d.querySelector("#overview-menu-popover"),L=d.querySelector("#overview-menu-search"),C=(g=L.value)=>{var V;const A=gt(),S=xt(e).filter(B=>A.some(ie=>ie.key===B));d.querySelector("#overview-menu-pin-count").textContent=S.length;const j=((V=e==null?void 0:e.overview_prefs)==null?void 0:V.menuPopoverView)==="grid"?"grid":"list";d.querySelector("#overview-menu-list").innerHTML=Io(A,S,g,j),Qt(A,S)},I=async g=>{if(!(e!=null&&e.id))return;const A=ut.catch(()=>{}).then(async()=>{const S=new Set(xt(e)),j=S.has(g);j?S.delete(g):S.add(g);const V={...e.overview_prefs||{},pinnedMenuKeys:[...S]};await ft(e.id,{overview_prefs:V}),e.overview_prefs=V,C(),Y(j?"นำเมนูออกจากรายการปักหมุดแล้ว":"ปักหมุดเมนูแล้ว","success")});ut=A;try{await A}catch(S){console.error("save overview menu pin error:",S),Y("บันทึกเมนูที่ปักหมุดไม่สำเร็จ ลองอีกครั้ง","error")}},w=async g=>{var S;if(!(e!=null&&e.id)||!["list","grid"].includes(g)||(((S=e.overview_prefs)==null?void 0:S.menuPopoverView)||"list")===g)return;const A=ut.catch(()=>{}).then(async()=>{const j={...e.overview_prefs||{},menuPopoverView:g};await ft(e.id,{overview_prefs:j}),e.overview_prefs=j,C()});ut=A;try{await A}catch(j){console.error("save overview menu view error:",j),Y("บันทึกรูปแบบเมนูไม่สำเร็จ ลองอีกครั้ง","error")}},c=g=>{const A=gt().find(S=>S.key===g);_.classList.add("hidden"),d.querySelector("#overview-menu-toggle").setAttribute("aria-expanded","false"),A&&A.element.click()};ot=new AbortController;const{signal:v}=ot;d.addEventListener("click",g=>{var V;const A=g.target.closest("[data-menu-pin]");if(A){g.stopPropagation(),I(A.dataset.menuPin);return}const S=g.target.closest("[data-menu-open]");if(S){g.stopPropagation(),c(S.dataset.menuOpen);return}const j=g.target.closest("[data-menu-view]");if(j){g.stopPropagation(),w(j.dataset.menuView);return}if(g.target.closest("#overview-menu-toggle")){const B=!_.classList.contains("hidden");_.classList.toggle("hidden",B),d.querySelector("#overview-menu-toggle").setAttribute("aria-expanded",String(!B)),B||(C(),!((V=window.matchMedia)!=null&&V.call(window,"(prefers-reduced-motion: reduce)").matches)&&typeof _.animate=="function"&&_.animate([{transform:"scale(.08) translate3d(14px,-10px,0)",opacity:0,filter:"blur(5px)"},{transform:"scale(1) translate3d(0,0,0)",opacity:1,filter:"blur(0)"}],{duration:420,easing:"cubic-bezier(.16,1,.3,1)"}))}else g.target.closest("#overview-menu-close")&&(_.classList.add("hidden"),d.querySelector("#overview-menu-toggle").setAttribute("aria-expanded","false"))},{signal:v}),L.addEventListener("input",()=>C(),{signal:v}),L.addEventListener("keydown",g=>{if(g.key==="Enter"){const A=_.querySelector("[data-menu-open]");A&&(g.preventDefault(),A.click())}else g.key==="Escape"&&(L.value?(L.value="",C("")):(_.classList.add("hidden"),d.querySelector("#overview-menu-toggle").setAttribute("aria-expanded","false")))},{signal:v}),document.addEventListener("pointerdown",g=>{d.contains(g.target)||(_.classList.add("hidden"),d.querySelector("#overview-menu-toggle").setAttribute("aria-expanded","false"))},{capture:!0,signal:v}),document.addEventListener("keydown",g=>{g.key==="Escape"&&!_.classList.contains("hidden")&&(_.classList.add("hidden"),d.querySelector("#overview-menu-toggle").setAttribute("aria-expanded","false"))},{signal:v}),C(""),window._toggleOverviewMenuPin=I,window._openOverviewMenu=c}function Qt(e=gt(),o=xt()){const t=new Set(o);e.forEach(l=>{var _;const f=l.element;let y=(_=f.parentElement)!=null&&_.classList.contains("sidebar-menu-entry")?f.parentElement:null,p=y==null?void 0:y.querySelector(":scope > .sidebar-menu-pin");p||(p=document.createElement("button"),p.type="button",p.className="sidebar-menu-pin text-emerald-200 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300",p.innerHTML=At,y=document.createElement("div"),y.className="sidebar-menu-entry",y.style.position="relative",y.style.width="100%",f.parentElement.insertBefore(y,f),y.append(f,p),Object.assign(p.style,{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)",zIndex:"20",width:"28px",height:"28px",display:"flex",alignItems:"center",justifyContent:"center",padding:"0",border:"0",borderRadius:"8px",background:"transparent",cursor:"pointer",fontSize:"18px",lineHeight:"1"}),p.addEventListener("click",L=>{var C;L.preventDefault(),L.stopPropagation(),(C=window._toggleOverviewMenuPin)==null||C.call(window,l.key)}));const d=t.has(l.key);p.innerHTML=At,p.dataset.pinned=String(d),p.setAttribute("aria-label",(d?"เลิกปักหมุด ":"ปักหมุด ")+l.label),p.title=d?"เลิกปักหมุด":"ปักหมุดเมนูนี้ไว้หน้าภาพรวม",p.classList.toggle("text-amber-300",d),p.classList.toggle("text-emerald-200",!d)})}const To={inspection:"🔍 รอบตรวจ",deadline:"⏰ กำหนดส่ง",meeting:"📅 ประชุม",other:"📌 อื่นๆ"},No={inspection:"bg-indigo-100 text-indigo-700",deadline:"bg-rose-100 text-rose-700",meeting:"bg-amber-100 text-amber-700",other:"bg-gray-100 text-gray-600"};function Bo(e){const o=new Date,t=new Date(e.event_date+"T00:00:00"),l=new Date((e.end_date||e.event_date)+"T23:59:59");if(o>=t&&o<=l)return{status:"ongoing"};const f=Math.max(0,Math.floor((t-o)/1e3)),y=Math.floor(f/86400),p=f%86400,d=Math.floor(p/3600),_=Math.floor(p%3600/60),L=p%60,C=`${String(d).padStart(2,"0")}:${String(_).padStart(2,"0")}:${String(L).padStart(2,"0")}`,I=f<=86400?"red":f<=3*86400?"amber":"normal";return{status:"upcoming",days:y,clock:C,urgency:I}}function Mo(e,o){if(!e)return 0;const t=new Date(e),l=new Date(o+"T00:00:00");if(isNaN(t)||isNaN(l))return 0;const f=l.getTime()-t.getTime();return f<0?0:Math.floor(f/(7*24*60*60*1e3))+1}function Zt(e,o){const t=p=>String(p??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),l=p=>new Date(p+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"}),f=new Date().toISOString().slice(0,10),y=(e??[]).filter(p=>(p.end_date||p.event_date)>=f).map(p=>({ev:p,cd:Bo(p)})).filter(({cd:p})=>p.status==="ongoing"||p.days<=14).sort((p,d)=>p.ev.event_date.localeCompare(d.ev.event_date)).slice(0,5);return y.length?`
  <div class="mb-3 space-y-2 max-h-64 overflow-y-auto pr-0.5">
    ${y.map(({ev:p,cd:d})=>{const _=d.status==="ongoing"||d.urgency==="red",L=d.urgency==="amber",C=_?"bg-red-50 border-red-300 ring-2 ring-red-200":L?"bg-amber-50 border-amber-200":"bg-white border-gray-200",I=_?"bg-red-100 animate-pulse":L?"bg-amber-100":"bg-gray-100",w=Mo(o,p.event_date);return`
      <div onclick="window._navTo('work-calendar-view')"
        class="border rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150 ${C}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${I}">${_?"🚨":"📅"}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${No[p.event_type]}">${To[p.event_type]}</span>
            <span class="text-[11px] text-gray-400">${l(p.event_date)}</span>
            ${w>0?`<span class="text-[11px] text-gray-400">· สัปดาห์ที่ ${w}</span>`:""}
          </div>
          <p class="font-semibold text-sm truncate ${_?"text-red-800":"text-gray-800"}">${t(p.label)}</p>
        </div>
        <div class="text-right flex-shrink-0">
          ${d.status==="ongoing"?'<p class="text-xs font-bold text-red-600">🔴 วันนี้</p>':`<p class="text-xs font-bold ${_?"text-red-600":L?"text-amber-600":"text-gray-500"}">อีก ${d.days} วัน</p>
               <p class="text-[11px] font-mono ${_?"text-red-400":"text-gray-400"}">${d.clock}</p>`}
        </div>
      </div>`}).join("")}
  </div>`:""}function es(e,o,t=null){const l=d=>d==="A"?"#059669":d==="B"?"#2563eb":"#d97706",f=(d="0.11")=>t?`<div class="absolute inset-y-0 right-0 flex items-center overflow-hidden pointer-events-none select-none pr-1">
         <span class="font-black leading-none" style="font-size:5.5rem;opacity:${d};color:${l(t.grade)}">${t.grade}</span>
       </div>`:"";if(!e.length)return"";const y=e.map(d=>({...d,cd:Js(d.start_time,d.end_time)})).sort((d,_)=>{const L={active:0,upcoming:1,done:2};return L[d.cd.status]-L[_.cd.status]||(d.start_time??"").localeCompare(_.start_time??"")}),p=y.some(d=>d.cd.status==="active");return`
  <div onclick="window._openWenDuty('${o}')"
    class="relative overflow-hidden mb-3 border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-150
           ${p?"bg-red-50 border-red-300 ring-4 ring-red-100":"bg-amber-50 border-amber-300 ring-4 ring-amber-100"}">
    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                ${p?"bg-red-100 animate-pulse":"bg-amber-100"}">${p?"🚨":"🛡️"}</div>
    <div class="flex-1 min-w-0">
      <span class="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1
        ${p?"bg-red-200 text-red-800":"bg-amber-200 text-amber-800"}">เวรวันนี้</span>
      <p class="font-extrabold text-base mb-1 ${p?"text-red-800":"text-amber-800"}">
        ${p?"🔴 ถึงเวลาเวรแล้ว!":`วันนี้คุณมีเวร ${y.length} จุด`}
      </p>
      <div class="space-y-1">
        ${y.map(d=>d.cd.status==="active"?`
        <div class="bg-red-100/70 rounded-lg px-2 py-1.5 -mx-2">
          <p class="text-xs font-semibold text-red-700 truncate">📍 ${r(d.name)}</p>
          <div class="flex items-center justify-between gap-2 mt-0.5">
            <span class="text-[11px] text-red-400">${r(d.time)}</span>
            <span class="text-[11px] font-bold flex-shrink-0 ${d.cd.cls}">${d.cd.label}</span>
          </div>
        </div>`:`
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs truncate ${d.cd.status==="done"?"text-gray-400 line-through":"text-amber-700"}">
            📍 ${r(d.name)} <span class="${d.cd.status==="done"?"text-gray-300":"text-amber-500"}">(${r(d.time)})</span>
          </p>
          <span class="text-[11px] font-medium flex-shrink-0 ${d.cd.cls}">${d.cd.label}</span>
        </div>`).join("")}
      </div>
      <p class="text-[11px] mt-2 font-semibold ${p?"text-red-400":"text-amber-500"}">ดูรายละเอียด →</p>
    </div>
    ${f()}
  </div>`}const nt=["สามัญมัธยม ม.ต้น","สามัญมัธยม ม.ปลาย","สามัญปวช","ศาสนามัธยม","ศาสนาปวช"];let Pe=null;function ts(e,o){if(e==="AGMVOC")return"ศาสนาปวช";if(e==="AGM")return"ศาสนามัธยม";if(e==="ACDMVOC")return"สามัญปวช";const t=parseInt(String(o??"").replace(/[^0-9]/g,""),10);return t>=4&&t<=6?"สามัญมัธยม ม.ปลาย":t>=1&&t<=3?"สามัญมัธยม ม.ต้น":null}async function Po(e){var me;We("overview"),Ue("ภาพรวมผู้บริหาร"),Me(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const[o,t]=await Promise.all([Vs().catch(()=>({teacherCount:0,studentCount:0,classRows:[],subjectRows:[]})),De().catch(()=>({}))]),l=Object.fromEntries(o.subjectRows.map(E=>[E.id,E])),f=Object.fromEntries(nt.map(E=>[E,0]));let y=0;o.classRows.forEach(E=>{const q=l[E.course_id],pe=q?ts(q.subject_group,q.grade_level):null;pe?f[pe]++:y++});const p=new Set(o.classRows.map(E=>E.course_id).filter(Boolean)),d=o.subjectRows.filter(E=>p.has(E.id)),_=Object.fromEntries(nt.map(E=>[E,new Set])),L=new Set;d.forEach(E=>{const q=ts(E.subject_group,E.grade_level);q?_[q].add(E.subject_name):L.add(E.subject_name)});const C=Object.fromEntries(nt.map(E=>[E,_[E].size])),I=new Set(d.map(E=>E.subject_name)).size,w=[{key:"teachers",icon:"👩‍🏫",label:"จำนวนคุณครู",value:o.teacherCount,hint:"ครูทั้งหมดในระบบ"},{key:"students",icon:"🎒",label:"จำนวนนักเรียน",value:o.studentCount,hint:"นับเฉพาะนักเรียนที่ยัง active"},{key:"courses",icon:"🏫",label:"จำนวนคอร์ส",value:o.classRows.length,hint:"ห้องเรียนที่เปิดจริง"},{key:"subjects",icon:"📖",label:"จำนวนรายวิชาที่เปิดสอน",value:I,hint:"นับชื่อวิชาไม่ซ้ำ"}],c=()=>w.map(E=>`
    <button type="button" data-exec-stat="${E.key}"
      class="text-left bg-white rounded-2xl border ${Pe===E.key?"border-indigo-400 ring-2 ring-indigo-100":"border-gray-200"} shadow-sm p-4 hover:shadow-md hover:border-indigo-300 transition">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">${E.icon}</span>
        <p class="text-xs font-semibold text-gray-500 leading-tight">${E.label}</p>
      </div>
      <p class="text-2xl font-extrabold text-gray-800">${E.value.toLocaleString("th-TH")}</p>
      <p class="text-[10px] text-gray-400 mt-0.5">${E.hint}</p>
      <p class="text-[10px] text-indigo-400 mt-1">${Pe===E.key?"🔽 กำลังดูรายละเอียด — กดซ้ำเพื่อปิด":"กดเพื่อดูรายละเอียด ▸"}</p>
    </button>`).join(""),v=(E,q)=>`
    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span class="text-sm text-gray-600">${E}</span>
      <span class="text-sm font-bold text-gray-800">${q.toLocaleString("th-TH")}</span>
    </div>`,h=()=>{if(!Pe)return"";let E="";if(Pe==="teachers"||Pe==="students"){const q=w.find(pe=>pe.key===Pe);E=`<p class="text-sm text-gray-500">${q.icon} ${q.label}ทั้งหมด <b class="text-gray-800">${q.value.toLocaleString("th-TH")}</b> คน (${q.hint})</p>`}else Pe==="courses"?E=nt.map(q=>v(q,f[q])).join("")+(y>0?v("ไม่ระบุหมวด/ยังไม่ผูกวิชา",y):""):Pe==="subjects"&&(E=nt.map(q=>v(q,C[q])).join("")+(L.size>0?v("ไม่ระบุหมวด",L.size):""));return`
    <div id="exec-stat-detail-inner" class="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 animate-fade">
      ${E}
    </div>`},g={council:["#B7ECDB","#3F9C7E"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"]},S=[{key:"announcements",emoji:"📢",label:"ประกาศ",from:"#CDD3F8",to:"#8F9AE8",onclick:"window._navTo('announcements-view')"},{key:"work-calendar",emoji:"📅",label:"ปฏิทิน<br>ปฏิบัติงาน",from:"#FCE7A8",to:"#E3B657",onclick:"window._navTo('work-calendar-view')"},...(window._teacherOverviewSystems||[]).filter(E=>E.show&&["council","terangganu"].includes(E.key)).map(E=>{const[q,pe]=g[E.key]||["#E4E4E7","#9C9CA3"];return{key:E.key,id:E.id,emoji:E.emoji,label:E.label,from:q,to:pe,badge:E.badge,onclick:E.href?`window.location.href='${E.href}'`:`window._navTo('${E.nav}')`}}),{key:"wen-duty",emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1",onclick:"window.location.href='https://ghhambal.github.io/wen/tv.html'"}].map(E=>us(E,t.iconTileStyle)).join(""),j=(me=window._teacherOverviewSystems)==null?void 0:me.find(E=>E.key==="regrade"),V=bs(j==null?void 0:j.config,"teacher",{badge:j==null?void 0:j.badge,forceOpen:j==null?void 0:j.forceOpen}),ie=[{icon:"📡",label:"ศูนย์ติดตามรวม (จอเดียว)",href:"public-monitor.html"},{icon:"📊",label:"แดชบอร์ดแนวโน้มละหมาด",href:"prayer-dashboard.html?days=14"},{icon:"🖥️",label:"จอมอนิเตอร์ละหมาดเรียลไทม์",href:"prayer-monitor.html"},{icon:"🚪",label:"จอติดตามการออกนอกห้องเรียน",href:"leave-monitor.html"},{icon:"📋",label:"ข้อมูลเช็คชื่อกีฬาสี",href:"sports-attendance-monitor.html"},{icon:"💰",label:"ข้อมูลค่าบำรุงสี",href:"sports-dues-monitor.html"},{icon:"👕",label:"ไซซ์เสื้อ/ค่าเสื้อกีฬาสี",href:"sports-shirt-monitor.html"},{icon:"📊",label:"บัญชีเงินทุกสีกีฬาสี",href:"sports-fund-monitor.html"},{icon:"🛡️",label:"ระบบเวร — ติดตามการปฏิบัติเวร Real-time",href:"https://ghhambal.github.io/wen/tv.html"}].map(E=>`
    <a href="${E.href}" target="_blank" rel="noopener"
      class="flex items-center gap-2.5 bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md hover:border-slate-300 transition">
      <span class="text-lg flex-shrink-0">${E.icon}</span>
      <span class="text-xs font-semibold text-gray-600 leading-tight">${E.label}</span>
    </a>`).join("");Me(`<div class="animate-fade max-w-2xl">
    <div class="mb-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <p class="text-lg font-bold text-gray-800">👔 ${r((e==null?void 0:e.full_name)??"ผู้บริหาร")}</p>
    </div>

    ${V?`<div class="mb-4">${V}</div>`:""}

    <div class="grid grid-cols-2 gap-3 mb-1" id="exec-stat-cards">
      ${c()}
    </div>
    <div id="exec-stat-detail">${h()}</div>

    <div class="mt-5 mb-1 md:hidden">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">ระบบอื่น ๆ</h4>
      <div class="flex gap-3 overflow-x-auto pb-1" id="exec-icon-grid">
        ${S}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2 px-0.5">🖥️ จอมอนิเตอร์</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${ie}
      </div>
    </div>
  </div>`),gs();function ne(){document.querySelectorAll("[data-exec-stat]").forEach(E=>{E.onclick=()=>{var pe;const q=E.dataset.execStat;Pe=Pe===q?null:q,document.getElementById("exec-stat-cards").innerHTML=c(),document.getElementById("exec-stat-detail").innerHTML=h(),ne(),(pe=document.getElementById("exec-stat-detail-inner"))==null||pe.scrollIntoView({behavior:"smooth",block:"nearest"})}})}ne()}async function ss(e,o=[]){var K,Q,i,x;if(We("overview"),Ue("ภาพรวม"),Rt(e).includes("executive")){Po(e),Xt(e);return}const{getPendingExamRequestCount:t}=await Ne(async()=>{const{getPendingExamRequestCount:s}=await import("./api-vSXCr5aV.js").then(k=>k.eB);return{getPendingExamRequestCount:s}},__vite__mapDeps([0,1,2,3])),{getMyDonationRequests:l}=await Ne(async()=>{const{getMyDonationRequests:s}=await import("./api-vSXCr5aV.js").then(k=>k.eB);return{getMyDonationRequests:s}},__vite__mapDeps([0,1,2,3])),{getUnreadNotifications:f}=await Ne(async()=>{const{getUnreadNotifications:s}=await import("./api-vSXCr5aV.js").then(k=>k.eB);return{getUnreadNotifications:s}},__vite__mapDeps([0,1,2,3])),[y,p,d,_,L,C,I,w,c,v]=await Promise.all([e?Nt(e.id).catch(()=>[]):as().catch(()=>[]),Bt((e==null?void 0:e.id)??null).catch(()=>[]),De().catch(()=>({})),e?t(e.id).catch(()=>0):Promise.resolve(0),e?l(e.id).catch(()=>[]):Promise.resolve([]),e?f(e.id).catch(()=>[]):Promise.resolve([]),e?lo(e.teacher_code).catch(()=>[]):Promise.resolve([]),e?ro(e.teacher_code).catch(()=>null):Promise.resolve(null),e?Ne(()=>import("./sports-portals.js_v_10.22-C7vHbj3Q.js"),__vite__mapDeps([29,5,30,1,0,2,3,31,22,23,19])).then(s=>s.getTeacherShirtButtonState(e)).catch(()=>({visible:!1,enabled:!1})):Promise.resolve({visible:!1,enabled:!1}),(K=window._pp5AcademicTerms)!=null&&K.length?Promise.resolve(window._pp5AcademicTerms):Fs().catch(()=>[])]),h=parseInt(d.academicYear??2568),g=parseInt(d.semester??1),A=p.filter(s=>s.academic_year==null||Number(s.academic_year)===h&&Number(s.semester)===g),S=Ys(v,d),j=qt({academic_year:h,semester:g});let V=j;try{const s=localStorage.getItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`);S.some(k=>qt(k)===s)&&(V=s)}catch{}const B=Xs(d.semester_start);tt&&(clearInterval(tt),tt=null),Je&&(clearInterval(Je),Je=null),st&&(clearInterval(st),st=null),Xe&&(clearInterval(Xe),Xe=null),Qe&&(clearInterval(Qe),Qe=null);const[ie,ne,me,E,q]=await Promise.all([e?Tt(e.id,h,g).catch(()=>[]):Promise.resolve([]),e?ds(e.id).catch(()=>[]):Promise.resolve([]),Hs().catch(()=>[]),zs().catch(()=>[]),e?Gs(h,g).catch(()=>[]):Promise.resolve([])]);window._classroomMapGlobal=Object.fromEntries(E.map(s=>[s.id,s]));const pe=window._classroomMapGlobal,ee={};ne.forEach(s=>{ee[s.teacher_schedule_id]||(ee[s.teacher_schedule_id]=[]),ee[s.teacher_schedule_id].push(s.class_id)});const fe=Object.fromEntries(p.map(s=>[s.id,s])),de=Object.fromEntries(me.map(s=>[s.period_no,s])),he=new Date().getDay(),m=ie.filter(s=>s.day_of_week===he&&(ee[s.id]??[]).length>0).map(s=>{const k=(s.period_no??1)+(s.span_periods??1)-1;return{...s,linkedClasses:(ee[s.id]??[]).map(n=>fe[n]).filter(Boolean),period:de[s.period_no],actualEndPeriod:de[k]??de[s.period_no]}}).sort((s,k)=>s.period_no-k.period_no),z=s=>{var n,u;const k=ct((n=s.period)==null?void 0:n.start_time,(u=s.actualEndPeriod)==null?void 0:u.end_time);return k.label.includes("กำลังสอน")?0:k.label.startsWith("เสร็จ")?2:1},te=m.find(s=>z(s)===0)??null,ce=[...m].filter(s=>s!==te).sort((s,k)=>z(s)-z(k)||s.period_no-k.period_no),oe=o.filter(s=>s.category==="สามัญ"),U=L.find(s=>s.package_type==="donation"&&s.status==="approved"),se=L.filter(s=>s.package_type==="donation"&&s.status==="approved").reduce((s,k)=>s+(k.amount??0),0),ae=(s,k)=>{const n=parseInt(s,10);return Number.isFinite(n)&&n>0?n:k},G=()=>{const s=String(d.donationStickerTiers??"").trim();return ae(d.donationMinAmount,99),ae(d.donationAmountStep,50),(s?s.split(`
`).filter(Boolean).map(b=>{const[$,H,O,J,ue]=b.split("|").map(ve=>ve.trim());return{amount:ae($,0),sticker:H||"🏅",title:O||`ผู้สนับสนุน ${$} บาท`,note:J||"",color:ue||""}}).filter(b=>b.amount>0):[[49,"🌱","ครูผู้จุดประกาย","คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝","#22C55E"],[99,"☕","ครูผู้ร่วมฝัน","คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭","#A855F7"],[149,"🏅","ครูผู้ร่วมสร้าง","คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱","#F59E0B"],[199,"🐘","ครูผู้ร่วมขับเคลื่อน","คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊","#3B82F6"],[249,"👑","ครูผู้ก่อตั้งร่วม","คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️","#D4A017"]].map(([b,$,H,O,J])=>({amount:b,sticker:$,title:H,note:O,color:J}))).sort((b,$)=>b.amount-$.amount).map((b,$)=>{const H=d[`donationStickerImg${$+1}`]??"";return H&&/^https?:\/\//.test(H)?{...b,sticker:H}:b})},be=s=>{if(!s)return"";const k=parseInt(s.slice(1,3),16),n=parseInt(s.slice(3,5),16),u=parseInt(s.slice(5,7),16);return`border:2px solid ${s};box-shadow:0 0 0 4px rgba(${k},${n},${u},0.25),0 4px 20px rgba(${k},${n},${u},0.18);`},Z=()=>{const s=String(d.donationSpecialFeatures??"").trim(),k=[["🏅","สติกเกอร์/ตราประจำระดับผู้สนับสนุน",1],["📣","ประกาศในห้องเรียนสำหรับนักเรียน",1],["✍️","ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว",1],["📊","Dashboard วิเคราะห์ภาพรวมห้องเรียน",2],["🤖","AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง",2],["🧭","AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา",3],["⚡","Early Access ฟีเจอร์ใหม่ก่อนใคร",3],["📲","แจ้งเตือนอัตโนมัติ Telegram/LINE",4],["🙋","มอบหมายหัวหน้า/รองหัวหน้าห้องเช็คชื่อแทนครูได้ไม่จำกัดห้อง",3]];return s?s.split(`
`).filter(Boolean).map(n=>{const u=n.split("|").map(b=>b.trim());return{icon:u[0]||"✨",text:u[1]||u[0]||n,minTier:parseInt(u[2])||1}}).filter(n=>n.text):k.map(([n,u,b])=>({icon:n,text:u,minTier:b}))};let F=null,X=0,xe="",ye="",_e="border border-gray-200 shadow-md";if(U&&d.quotaMode==="school_sponsored"){const s=G(),k=se,n=[...s].reverse().find(b=>k>=b.amount)??s[0],u=Math.max(0,...L.filter(b=>b.package_type==="donation"&&b.status==="approved").map(b=>Number.parseInt(String(b.donation_tier??""),10)).filter(b=>Number.isInteger(b)&&b>=1&&b<=s.length));if(X=Math.max(n?s.indexOf(n)+1:0,u),F=s[X-1]??null,F){ye=be(F.color),_e="";const b=String(F.sticker??""),$=/^https?:\/\//.test(b)?`<img src="${b}" class="w-24 h-24 object-contain drop-shadow-xl" />`:`<span class="text-7xl leading-none drop-shadow-lg">${b}</span>`,H=F.color?`color:${F.color};`:"color:#f59e0b;";xe=`
        <button id="donor-sticker-btn"
          class="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group px-2"
          title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${$}
          <span class="text-[10px] font-bold leading-snug text-center max-w-[90px] break-words mt-1" style="${H}">
            ${F.note||F.title}
          </span>
          <span class="text-[9px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`}}window._goToActiveClass=async s=>{if(!s)return;const{renderClassDetail:k}=await Ne(async()=>{const{renderClassDetail:n}=await import("./teacher-views-classes-Bd_GpQId.js").then(u=>u.t);return{renderClassDetail:n}},__vite__mapDeps([18,5,0,1,2,3,19,20,14,21,13,22,11,23,24,12,8,9,10,25]));k(e,s)},window._openSmartClassroomLanding=async()=>{const{openSmartClassroomLanding:s}=await Ne(async()=>{const{openSmartClassroomLanding:k}=await import("./teacher-views-smart-classroom-CaePDyGE.js");return{openSmartClassroomLanding:k}},__vite__mapDeps([4,5,0,1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]));s(e)};const $e=B>0?(()=>{const s=new Date(d.semester_start);s.setDate(s.getDate()+(B-1)*7);const k=new Date(s);k.setDate(k.getDate()+6);const n=b=>`${String(b.getDate()).padStart(2,"0")}/${String(b.getMonth()+1).padStart(2,"0")}`,u=`📅 สัปดาห์ที่ ${B} (${n(s)} – ${n(k)}) · ภาคเรียนที่ ${g}/${h}`;return`
    <div class="mb-4 relative overflow-hidden rounded-full bg-emerald-950 py-3 lg:py-5" style="mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);">
      <div class="inline-block whitespace-nowrap text-emerald-100 text-sm lg:text-xl font-bold" style="padding-left:100%;animation:teacher-week-ticker 18s linear infinite;">
        <span class="mr-10 lg:mr-16">${u}</span><span class="mr-10 lg:mr-16">${u}</span>
      </div>
    </div>
    <style>@keyframes teacher-week-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}</style>
    `})():"",Ce=Rt(e);window._openHomeroomPopup=()=>{var k;(k=document.getElementById("homeroom-popup"))==null||k.remove();const s=document.createElement("div");s.id="homeroom-popup",s.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",s.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[85vh] flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <p class="font-bold text-gray-800 text-sm">🏠 ห้องที่ปรึกษาของฉัน</p>
        <button class="text-gray-400 hover:text-gray-600 text-xl leading-none" onclick="this.closest('.fixed').remove()">×</button>
      </div>
      <div class="p-5 overflow-y-auto space-y-3">
        ${o.map(n=>`
        <div class="border border-gray-100 rounded-xl p-3">
          <p class="font-bold text-gray-800">${n.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${n.category==="สามัญ"?"bg-blue-50 text-blue-700":"bg-amber-50 text-amber-700"}">${n.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${n.category==="สามัญ"?`
            <button onclick="window._openLifeSkillScore('${n.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>`:`
            <button onclick="window._openReligionScore('${n.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>
            <button onclick="window._openReligionPrayerMonitor('${n.main_room}');this.closest('.fixed').remove()"
              class="w-full text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-50 text-left">
              👁️ Monitor สแกนละหมาด
            </button>`}
          </div>
        </div>`).join("")||'<p class="text-sm text-gray-400 text-center py-4">ไม่มีห้องที่ปรึกษา</p>'}
      </div>
    </div>`,document.body.appendChild(s),s.addEventListener("click",n=>{n.target===s&&s.remove()})},window._openTeacherShirtModal=async()=>{const{openTeacherShirtSizeModal:s}=await Ne(async()=>{const{openTeacherShirtSizeModal:k}=await import("./sports-portals.js_v_10.22-C7vHbj3Q.js");return{openTeacherShirtSizeModal:k}},__vite__mapDeps([29,5,30,1,0,2,3,31,22,23,19]));s(e)};const Oe=[...new Set(p.map(s=>s.class_name).filter(Boolean))].sort(),qe=JSON.stringify(Oe).replace(/"/g,"&quot;"),a=[{key:"smart-classroom",show:!0,onclick:"window._openSmartClassroomLanding()",emoji:"👑",label:"Smart<br>Classroom",from:"#FCE7A8",to:"#E3B657"},{key:"sv-board",show:Ce.length>0,onclick:"window._enterSupervisorMode()",emoji:"📊",label:"บอร์ด<br>บทบาท",from:"#DCE1E8",to:"#9AA6B5"},{key:"wen",show:!!e,onclick:`window._openWenDuty('${e==null?void 0:e.teacher_code}')`,emoji:"🛡️",label:"ระบบเวร",from:"#FBD0D6",to:"#EC93A1"},{key:"attendance",show:!0,onclick:"window._showClassQuickPicker('attendance')",emoji:"✅",label:"เช็คชื่อ",from:"#B7ECDB",to:"#5FBFA3"},{key:"grades",show:!0,onclick:"window._showClassQuickPicker('grades')",emoji:"📝",label:"บันทึก<br>คะแนน",from:"#CDD3F8",to:"#8F9AE8"},{key:"life-skill",show:oe.length>0,onclick:"window._openLifeSkillScore()",emoji:"🌱",label:"ทักษะ<br>ชีวิต",from:"#DCF2B0",to:"#A3D65C"},{key:"reading-score",show:(e==null?void 0:e.dept)==="THAI",onclick:`window._openReadingScorePicker('${qe}')`,emoji:"📖",label:"คะแนน<br>การอ่าน",from:"#FCDCB0",to:"#EFA85C"},{key:"schedule",show:!0,onclick:"window._navTo('schedule')",emoji:"🗓️",label:"ตารางสอน",from:"#C6E6FA",to:"#6FB8E8"},{key:"homeroom",show:o.length>0,onclick:"window._openHomeroomPopup()",emoji:"🏠",label:"ห้องที่<br>ปรึกษา",from:"#F5DFA8",to:"#D6A94A"},{key:"quota",show:!0,onclick:"window._showQuotaFromOverview()",emoji:"🎯",label:"โควตา<br>ห้องเรียน",from:"#E2D3F5",to:"#AF8AE0"},{key:"shirt-size",show:c.visible,onclick:"window._openTeacherShirtModal()",emoji:"👕",label:"ไซซ์เสื้อ<br>กีฬาสี",from:"#FBD5E8",to:"#EA8FC0"}],N={council:["#CDD3F8","#7783E0"],terangganu:["#F6D6F0","#D68AC7"],regrade:["#E5E1DA","#B3A990"],sports:["#FDD9B5","#E8865C"],certificates:["#FCE7A8","#DDAE3F"],"advisor-students":["#B9EAF0","#5CB8C4"],"my-team":["#FBD0D6","#E0616F"],"shirt-summary":["#E4E4E7","#9C9CA3"],"sports-fund":["#C8ECC9","#67B96A"],"sports-overview":["#C6E6FA","#4F9BD6"],"sports-competition-manager":["#D9E7F8","#4C86C6"],"sports-evaluation":["#FBE1C6","#D68A3F"],"shirt-vote":["#E2D3F5","#9663D1"],"qr-print":["#C6E6FA","#4F9BD6"],"prayer-score":["#B7ECDB","#3F9C7E"]},P=(window._teacherOverviewSystems||[]).filter(s=>s.show&&s.key!=="regrade").map(s=>{const[k,n]=N[s.key]||["#E4E4E7","#9C9CA3"];return{key:s.key,id:s.id,show:!0,emoji:s.emoji,label:s.label,from:k,to:n,badge:s.badge,onclick:s.href?`window.location.href='${s.href}'`:`window._navTo('${s.nav}')`}}),T=[...a,...P].filter(s=>s.show),D=(e==null?void 0:e.overview_prefs)||null,R=D?T.filter(s=>!(D.hiddenKeys||[]).includes(s.key)).sort((s,k)=>{const n=D.iconOrder||[],u=n.indexOf(s.key),b=n.indexOf(k.key);return u===-1&&b===-1?0:u===-1?1:b===-1?-1:u-b}):T,W=R.map(s=>us(s,d.iconTileStyle)).join(""),M=(Q=window._teacherOverviewSystems)==null?void 0:Q.find(s=>s.key==="regrade"),re=bs(M==null?void 0:M.config,"teacher",{badge:M==null?void 0:M.badge,forceOpen:M==null?void 0:M.forceOpen});window._openOverviewCustomizer=()=>Do(e,T,o);const we=`<section class="mb-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-white p-4 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <h2 class="text-sm font-bold text-indigo-900">🗓️ ภาคเรียนที่กำลังดู</h2>
        <p class="mt-1 text-xs text-indigo-700">หน้าภาพรวมและงานประจำวันใช้ภาคเรียนปัจจุบัน หากเลือกย้อนหลัง ระบบจะเปิดหน้าคะแนนและเอกสาร ปพ.5 ของเทอมนั้น</p>
      </div>
      <label class="flex items-center gap-2 text-xs font-semibold text-indigo-700 whitespace-nowrap">
        <span>เลือกภาคเรียน</span>
        <select id="teacher-overview-term-switcher" aria-label="เลือกภาคเรียนจากหน้าภาพรวม"
          class="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-bold text-indigo-700 outline-none focus:ring-2 focus:ring-indigo-200">
          ${Ws(S,V,j)}
        </select>
      </label>
    </div>
  </section>`;if(Me(`<div class="animate-fade">
    ${we}

    ${re?`<div class="mb-4">${re}</div>`:""}

    <!-- ส่วนเร่งด่วน: แจ้งเตือนจากหัวหน้า + กำลังสอนอยู่ (ย้ายมาไว้บนสุด เพราะเป็นสิ่งเดียวที่เปลี่ยนตามสถานะจริงเดี๋ยวนั้น) -->
    ${C.length?(()=>{const s={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},k={general:"#374151",profile:"#5b21b6",dates:"#1e40af",attendance:"#065f46",scores:"#713f12"},n={general:"#f3f4f6",profile:"#ede9fe",dates:"#dbeafe",attendance:"#d1fae5",scores:"#fef9c3"},u={dept_head:"หัวหน้ากลุ่มสาระ",registrar:"หัวหน้าฝ่ายทะเบียน",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช"},b=[...new Set(C.map(O=>O.metric))].map(O=>`<span style="background:${n[O]??"#f3f4f6"};color:${k[O]??"#374151"};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${s[O]??O}</span>`).join("");return`
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${[...new Map(C.filter(O=>O.supervisor).map(O=>[O.supervisor_id,O.supervisor])).values()].map(O=>u[O.position]??"หัวหน้า").join(", ")||"หัวหน้า"} ${C.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${b}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${e==null?void 0:e.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})():""}

    <!-- กำลังสอนอยู่ (ย้ายมาไว้ในโซนเร่งด่วนบนสุด) -->
    ${te?(()=>{var n,u;const s=te.period?`${te.period.start_time.substring(0,5)}–${te.actualEndPeriod.end_time.substring(0,5)}`:`คาบ ${te.period_no}`,k=((n=te.linkedClasses[0])==null?void 0:n.id)??null;return`
    <div id="active-class-card" class="mb-4 bg-white rounded-2xl p-5 ${k?"cursor-pointer hover:shadow-lg active:scale-[0.99] transition-all duration-150":""}"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);"
      ${k?`onclick="window._goToActiveClass(${k})"`:""}>
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${s}</span>
        ${k?'<span class="text-[11px] text-emerald-500 ml-auto">เข้าห้องเรียน →</span>':""}
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${te.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${te.linkedClasses.map(b=>{var $;return(($=b.master_subjects)==null?void 0:$.subject_name)??b.class_name}).join(", ")}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${te.linkedClasses.map(b=>{const $=b.classroom_id?pe[b.classroom_id]:null;return b.class_name+($?` · 📍${$.building} ห้อง ${$.room_number}`:"")}).join(" · ")}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${Ft((u=te.actualEndPeriod)==null?void 0:u.end_time)}
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
        ${[{key:"courses",label:"คอร์สวิชาของฉัน",value:y.length,hint:"รายวิชาที่เปิดสอน",icon:"📖",from:"#D1FAE5",to:"#6EE7B7",ink:"#065F46",onclick:"window._navTo('my-courses')"},{key:"classes",label:"ห้องเรียน",value:A.length,hint:`ภาคเรียนที่ ${g}/${h}`,icon:"🏫",from:"#DBEAFE",to:"#93C5FD",ink:"#1E40AF",onclick:"window._navTo('my-classes')"},{key:"homeroom",label:"ห้องที่ปรึกษา",value:o.length,hint:"ห้องที่ดูแลอยู่",icon:"🏠",from:"#FEF3C7",to:"#FCD34D",ink:"#92400E",onclick:"window._openHomeroomPopup()"},{key:"requests",label:"คำร้องรออนุมัติ",value:_,hint:_>0?"มีรายการที่ต้องตรวจสอบ":"ไม่มีรายการค้าง",icon:"🔔",from:_>0?"#FEE2E2":"#F3F4F6",to:_>0?"#FDA4AF":"#D1D5DB",ink:_>0?"#991B1B":"#4B5563",onclick:"window._navTo('requests')"},{key:"smartClassroom",label:"Smart Classroom",value:"เปิดห้องสอนสด",hint:"เครื่องมือช่วยจัดการชั้นเรียน",icon:"👑",from:"#EDE9FE",to:"#C4B5FD",ink:"#5B21B6",onclick:"window._openSmartClassroomLanding()"}].map(s=>`
          <button type="button" onclick="${s.onclick}"
            aria-label="${s.label} ${s.value}"
            class="group relative isolate min-h-[132px] min-w-[245px] sm:min-w-[280px] lg:min-w-0 snap-start overflow-hidden rounded-[22px] border-0 p-4 text-left shadow-md cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style="background:linear-gradient(135deg,${s.from} 0%,${s.to} 100%);--card-ink:${s.ink};--tw-ring-color:${s.ink};">
            <span aria-hidden="true" class="pointer-events-none absolute -right-8 -bottom-12 h-36 w-36 rounded-full opacity-35 transition-transform duration-300 group-hover:scale-125"
              style="background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.9),rgba(255,255,255,.08) 56%,transparent 57%);box-shadow:0 0 0 22px rgba(255,255,255,.12),0 0 0 44px rgba(255,255,255,.08);"></span>
            <span aria-hidden="true" class="pointer-events-none absolute right-2 -bottom-3 text-7xl sm:text-8xl leading-none opacity-80 drop-shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">${Qs(d,`overview:${s.key}`,s.icon,"max-w-[7rem] max-h-[7rem] object-contain")}</span>
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
      ${R.length>5?'<p class="text-[10px] text-gray-400 mb-1.5 px-0.5">👉 เลื่อนซ้าย-ขวาเพื่อดูระบบทั้งหมด</p>':""}
      <div class="flex gap-3 overflow-x-auto pb-1">
        ${W}
      </div>
    </div>

    <!-- เวรวันนี้ (ระบบเวร อาซิซสถาน) — ขยายแสดงเฉพาะวันมีเวร -->
    ${e?`<div id="wen-duty-card">${es(I,e.teacher_code,w)}</div>`:""}

    <!-- กิจกรรมใกล้ถึงจากปฏิทินปฏิบัติงาน (นับถอยหลังวัน/วินาที, ซ่อนถ้าไม่มี) -->
    ${e?`<div id="wcal-upcoming-card">${Zt(q,d.semester_start)}</div>`:""}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-gray-700">📅 ${ms[he]}</h4>
          <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</span>
          <span id="teacher-live-clock"
            class="text-sm font-mono font-bold tabular-nums px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700"></span>
        </div>
        ${ie.length===0?'<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>':ne.length===0?'<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>':""}
      </div>
      ${m.length===0?`
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${ie.length===0?"สร้างตารางสอนเพื่อดูข้อมูลที่นี่":ne.length===0?"เชื่อมโยงห้องเรียนกับตารางสอน":"ไม่มีคาบสอนวันนี้"}</p>
          ${ie.length===0?`<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`:ne.length===0?`<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`:""}
        </div>`:`
        <div class="space-y-2">
          ${ce.map((s,k)=>{var $,H;const n=ct(($=s.period)==null?void 0:$.start_time,(H=s.actualEndPeriod)==null?void 0:H.end_time),u=n.label.startsWith("เสร็จ"),b=s.period?`${s.period.start_time.substring(0,5)}–${(s.actualEndPeriod??s.period).end_time.substring(0,5)}`:`คาบ ${s.period_no}`;return`
            <div class="flex items-center gap-3 p-3 rounded-xl ${u?"bg-gray-50 opacity-60":"bg-gray-50"} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${u?"bg-gray-100":"bg-indigo-100"} flex items-center justify-center text-sm font-bold ${u?"text-gray-400":"text-indigo-600"} flex-shrink-0">
                ${s.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${u?"text-gray-400":"text-gray-700"} truncate">
                  ${s.linkedClasses.map(O=>{var J;return((J=O.master_subjects)==null?void 0:J.subject_name)??O.class_name}).join(", ")}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${s.linkedClasses.map(O=>{const J=O.classroom_id?pe[O.classroom_id]:null;return O.class_name+(J?` 📍${J.building} ห้อง ${J.room_number}`:"")}).join(" · ")} · ${b}
                </p>
              </div>
              <span id="today-cd-${k}" class="text-xs font-medium flex-shrink-0 ${n.cls}">${n.label}</span>
            </div>`}).join("")}
        </div>`}
    </div>
  </div>`),Xt(e),gs(),(i=document.getElementById("donor-sticker-btn"))==null||i.addEventListener("click",()=>{if(!F)return;const s=Z(),k=F.color||"#f59e0b",n=parseInt(k.slice(1,3),16),u=parseInt(k.slice(3,5),16),b=parseInt(k.slice(5,7),16),$=String(F.sticker??""),H=/^https?:\/\//.test($)?`<img src="${$}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`:`<div class="text-6xl text-center mb-2">${$}</div>`,O=document.createElement("div");O.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",O.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${n},${u},${b},0.85),rgba(${n},${u},${b},1))">
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
            style="background:rgba(${n},${u},${b},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`,document.body.appendChild(O),O.addEventListener("click",J=>{J.target===O&&O.remove()})}),(x=document.getElementById("teacher-overview-term-switcher"))==null||x.addEventListener("change",s=>{var n,u;const k=s.target.value;try{localStorage.setItem(`pp5_teacher_grade_term_${e==null?void 0:e.id}`,k)}catch{}k===j?(n=window._navTo)==null||n.call(window,"overview"):(u=window._navTo)==null||u.call(window,"grades")}),m.length>0&&(tt=setInterval(()=>{ce.forEach((s,k)=>{var b,$;const n=document.getElementById(`today-cd-${k}`);if(!n){clearInterval(tt);return}const u=ct((b=s.period)==null?void 0:b.start_time,($=s.actualEndPeriod)==null?void 0:$.end_time);n.textContent=u.label,n.className=`text-xs font-medium flex-shrink-0 ${u.cls}`})},3e4)),te&&(Je=setInterval(()=>{var n,u,b,$;const s=document.getElementById("active-class-countdown");if(!s){clearInterval(Je);return}ct((n=te.period)==null?void 0:n.start_time,(u=te.actualEndPeriod)==null?void 0:u.end_time).label.startsWith("เสร็จ")?(clearInterval(Je),(b=document.getElementById("active-class-card"))==null||b.remove()):s.textContent=Ft(($=te.actualEndPeriod)==null?void 0:$.end_time)},1e3)),document.getElementById("teacher-live-clock")){const s=()=>{const k=new Date,n=document.getElementById("teacher-live-clock");if(!n){clearInterval(st);return}n.textContent=`${String(k.getHours()).padStart(2,"0")}:${String(k.getMinutes()).padStart(2,"0")}:${String(k.getSeconds()).padStart(2,"0")}`};s(),st=setInterval(s,1e3)}e&&I.length&&(Xe=setInterval(()=>{const s=document.getElementById("wen-duty-card");if(!s){clearInterval(Xe),Xe=null;return}s.innerHTML=es(I,e.teacher_code,w)},3e4)),e&&q.length&&(Qe=setInterval(()=>{const s=document.getElementById("wcal-upcoming-card");if(!s){clearInterval(Qe),Qe=null;return}s.innerHTML=Zt(q,d.semester_start)},1e3))}function Do(e,o,t){var I,w;(I=document.getElementById("overview-customizer-modal"))==null||I.remove();const l=(e==null?void 0:e.overview_prefs)||null;let f=o.map(c=>c.key);if((w=l==null?void 0:l.iconOrder)!=null&&w.length){const c=new Set(f),v=l.iconOrder.filter(g=>c.has(g)),h=f.filter(g=>!v.includes(g));f=[...v,...h]}const y=new Set(((l==null?void 0:l.hiddenKeys)||[]).filter(c=>f.includes(c))),p=Object.fromEntries(o.map(c=>[c.key,c])),d=document.createElement("div");d.id="overview-customizer-modal",d.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4";const _=()=>f.map((c,v)=>{const h=p[c];if(!h)return"";const g=y.has(c),A=h.label.replace(/<br\s*\/?>/gi," ");return`
    <div class="flex items-center gap-3 py-2 px-1 border-b border-gray-50 last:border-0 ${g?"opacity-40":""}">
      <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style="background:linear-gradient(135deg,${h.from},${h.to})">${h.emoji}</span>
      <span class="flex-1 text-sm font-semibold text-gray-700 truncate">${A}</span>
      <button type="button" data-oc-up="${c}" ${v===0?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▲</button>
      <button type="button" data-oc-down="${c}" ${v===f.length-1?"disabled":""}
        class="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50">▼</button>
      <button type="button" data-oc-toggle="${c}"
        class="w-11 h-6 rounded-full flex-shrink-0 relative transition ${g?"bg-gray-200":"bg-emerald-500"}">
        <span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${g?"left-0.5":"left-[1.375rem]"}"></span>
      </button>
    </div>`}).join(""),L=()=>{const c=d.querySelector("#oc-list");c&&(c.innerHTML=_()),C()},C=()=>{d.querySelectorAll("[data-oc-toggle]").forEach(c=>c.onclick=()=>{const v=c.dataset.ocToggle;y.has(v)?y.delete(v):y.add(v),L()}),d.querySelectorAll("[data-oc-up]").forEach(c=>c.onclick=()=>{const v=f.indexOf(c.dataset.ocUp);v>0&&([f[v-1],f[v]]=[f[v],f[v-1]],L())}),d.querySelectorAll("[data-oc-down]").forEach(c=>c.onclick=()=>{const v=f.indexOf(c.dataset.ocDown);v<f.length-1&&([f[v+1],f[v]]=[f[v],f[v+1]],L())})};d.innerHTML=`
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
    </div>`,document.body.appendChild(d),C(),d.addEventListener("click",c=>{c.target===d&&d.remove()}),d.querySelector("#oc-close").addEventListener("click",()=>d.remove()),d.querySelector("#oc-save").addEventListener("click",async()=>{const c=d.querySelector("#oc-save");c.disabled=!0,c.textContent="กำลังบันทึก...";try{const v={iconOrder:f,hiddenKeys:[...y]};await ft(e.id,{overview_prefs:v}),e.overview_prefs=v,d.remove(),Y("บันทึกการปรับแต่งแล้ว","success"),ss(e,t)}catch(v){console.error(v),Y("บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง","error"),c.disabled=!1,c.textContent="บันทึก"}}),d.querySelector("#oc-reset").addEventListener("click",async()=>{try{await ft(e.id,{overview_prefs:null}),e.overview_prefs=null,d.remove(),Y("รีเซ็ตเป็นค่าเริ่มต้นแล้ว","success"),ss(e,t)}catch(c){console.error(c),Y("รีเซ็ตไม่สำเร็จ ลองใหม่อีกครั้ง","error")}})}function Oo(e,o,t,l,f){const y=[l==null?void 0:l.samaiLogoBwUrl,l==null?void 0:l.samaiLogoUrl].map(he=>String(he??"").trim()).find(Boolean)||"",p=y?`${y}${y.includes("?")?"&":"?"}docLogo=${Date.now()}`:"",d=Number(e.credit??1),_=d*2,L=d*2*20,I=String(e.grade_level??"").replace(/[^0-9]/g,""),w=["AGM","AGMVOC"].includes(e.subject_group??""),c=f.find(he=>he.dept_code===e.dept)??{},v=c.dept_name??e.dept??"",h=c.head_name??"",g=c.head_sign_url??"",A=l.samaiSchoolName??"",S=l.samaiDirectorName??"",j=l.samaiDirectorSignUrl??"",V=w?l.agmAcademicHeadName??l.samaiAcademicHeadName??"":l.samaiAcademicHeadName??"",B=new Date,ie=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],ne=`${B.getDate()} ${ie[B.getMonth()]} พ.ศ. ${B.getFullYear()+543}`,me=l.academicYear??B.getFullYear()+543,E=l.semester??1,q=(t==null?void 0:t.category)==="ศาสนา"?"ครูศาสนา":"ครูสามัญ",pe=o.map(he=>he.class_name).join(", "),ee=I+(pe?" "+pe:""),fe=w?"หัวหน้าฝ่ายวิชาการศาสนา":"หัวหน้าฝ่ายวิชาการสามัญ",de=`<!DOCTYPE html>
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
    ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:contain;" onerror="this.style.display='none'"/>`:'<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${r(A)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${r(ne)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${E} ปีการศึกษา ${me}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${r(A)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${r((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${r(q)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${r(v)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${r(e.subject_name??"")}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${r(e.subject_code??"")}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${d}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${_}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${L}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${w?"อิสลามศึกษา":"มัธยมศึกษา"}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${r(ee)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${r((t==null?void 0:t.full_name)??"")}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${g?`<img src="${r(g)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${r(h)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${r(v)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${r(V)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${r(fe)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${j?`<img src="${r(j)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>`:""}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${r(S)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${r(A)}</div>

</div>
</body></html>`;ps(de)}export{Oo as _openLessonPlanApproval,es as _renderWenDutyCard,Zt as _renderWorkCalendarUpcoming,pn as openCourseDocPage2Modal,mn as openScheduleCourseReview,hn as renderAnnouncementsView,An as renderAttendance,In as renderAttendanceGrid,Uo as renderClassDetail,yn as renderClassEditForm,Wo as renderClassForm,Ko as renderCourseDocLangConfig,un as renderCourseForm,xn as renderExamDocuments,En as renderGrades,Cn as renderGradesGrid,Tn as renderLifeSkillScore,wn as renderMyClasses,cn as renderMyCourses,Nn as renderPrayerRoomMonitor,Bn as renderPrayerScore,gn as renderProfile,bn as renderProfileSetup,Mn as renderReadingScore,jn as renderRequests,_n as renderSchedule,$n as renderScheduleBuilder,Jo as renderScheduleGrid,kn as renderScoreColumns,ss as renderTeacherOverview};
