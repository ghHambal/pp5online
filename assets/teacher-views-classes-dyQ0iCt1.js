const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-dashboard-CdUOoqKF.js","assets/api-Cf_Y4s92.js","assets/supabase-BV-W2lsh.js","assets/sports-portals.js_v_10.22-D7ID6515.js","assets/ui-FQqAmrdo.js","assets/version.js_v_10.22-ffVTG8-v.js","assets/impersonation-BOpkwoRR.js","assets/storage-D6nkcVz6.js","assets/browser-JP79f-a9.js","assets/teacher-views-smart-classroom-CzhdvGBS.js","assets/teacher-DkO8mDLW.js","assets/promptpay-CIuxvxIA.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-BsRasLc4.js","assets/teacher-views-utils-BWmONzsh.js","assets/wen-sso-CcN06Rhh.js","assets/azfutsal-modal-3jBbVg9C.js","assets/tutorial-ByeZ0chX.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-C8s-TuM0.js","assets/quiz-api-DaBneRGn.js","assets/score-qr-scanner-eQmyTC7-.js","assets/teacher-views-attendance-3FnuSi2-.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-grades-YSTUQyr0.js","assets/teacher-views-quiz-monitor-DrZre72l.js","assets/teacher-views-quiz-analytics-Bj3NqnvT.js","assets/lesson-plan-ai-workspace-LD-SW21q.js","assets/pp5-doc-DfU8adgJ.js","assets/confetti-loader-BAN5Lv-C.js","assets/chat-classroom-C_x4nE16.js","assets/student-api-GdZ3AenK.js","assets/teacher-views-flashcards-CNk6GbkI.js","assets/teacher-views-attendance-delegate-DMWv0sSB.js"])))=>i.map(i=>d[i]);
import{a as U,g as ce,_ as fe,h as rt}from"./ui-FQqAmrdo.js";import{getDepartments as vs,getSystemConfig as Le,getReligionRoomsByGrade as hs,getRoomsByGrade as ws,getStudentsByReligionRoom as _s,getStudentsByRoom as $s,getMySchedule as ze,createClass as ks,linkClassToSchedule as tt,enrollStudents as Ss,getLifeSkillColumns as Es,getScoreColumns as Ut,createScoreColumn as Ls,getClassStudents as He,getTeacherClassesForLinking as ut,updateClass as st,getMyClasses as ft,getClassrooms as Wt,getClassScheduleLinks as yt,getPeriods as lt,getMyDonationRequests as qs,getFlashcardDecks as Cs,deleteClass as Yt,getCourseDocLangSettings as js,getTeacherRoomColors as vt,assignClassroom as Kt,getClassSessionDOWs as Is,getMySubjects as Jt,deleteScheduleByTeacher as Ms,getClassRosterStudents as Ts,updateClassStudentSpecialResult as As,autoEnrollStudentsByRoom as Bs,updateClassStudentActive as Rs,removeStudentFromClass as Ns,getStudentByCode as Ps,addStudentToClass as Ds,getAttendanceDelegatesForClass as Hs,getClassroomLeaderForRoom as Os,getClassRandomizerState as Fs,getClassScoreSummary as Gs,saveCourseDocLangSettings as zs,saveCourseDocLangEditors as Vs,getUniqueRooms as Xt,getUniqueReligionRooms as Zt,getStudents as Qs,getQrReissueRequests as es,logQrReissue as Us,saveTeacherRoomColor as ts,upsertScheduleEntry as ss,updateSystemConfig as Ye,revokeQrReissueManager as Ws,findTeacherForQrManagerGrant as Ys,grantQrReissueManager as Ks,unlinkClassFromSchedule as Js,deleteQrReissueLog as Xs,updateQrReissueLog as Zs,getQrReissueLogs as en,markQrReissueRequestPrinted as Et,setQrReissueRequestStatus as tn,deleteQrReissueRequest as sn,getQrReissueManagers as nn,removeAttendanceDelegate as on,addAttendanceDelegate as an,saveClassRandomizerState as Lt,resetClassRandomizerPicks as qt,clearClassGroups as rn,getAttendanceByDate as ln,saveClassGroups as dn,deleteScheduleEntry as cn}from"./api-Cf_Y4s92.js";import{b as Ze}from"./browser-JP79f-a9.js";import{l as mt,m as pn}from"./sports-portals.js_v_10.22-D7ID6515.js";import{s as ns}from"./supabase-BV-W2lsh.js";import{a as os}from"./pp5-doc-DfU8adgJ.js";import{o as un,v as Ct}from"./storage-D6nkcVz6.js";import{b as ht,r as mn,a as xn,c as gn}from"./teacher-views-grades-YSTUQyr0.js";import{renderAttendanceGrid as wt,renderAttendance as bn,renderLifeSkillScore as fn,renderPrayerScore as yn,renderReadingScore as vn}from"./teacher-views-attendance-3FnuSi2-.js";import{l as hn,f as wn}from"./confetti-loader-BAN5Lv-C.js";import{setActiveNav as je,setTitle as Ie,setContent as _e,_htmlEsc as p,getMainContentRef as _n,setMainContentRef as jt,_nextPeriodMins as Ve,_transparentEdgeDarkLogo as $n,INPUT_CLS as qe,_generateSessions as kn,_resolveGeminiKey as as,SELECT_CLS as xt,_dateInputValue as It,_parseDateOnly as Sn}from"./teacher-views-utils-BWmONzsh.js";const Fe="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",De="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function rs(e){document.getElementById("main-content").innerHTML=e}function ls(e){document.getElementById("page-title").textContent=e}function is(e){document.querySelectorAll("[data-nav]").forEach(o=>{const l=o.dataset.nav===e;o.classList.toggle("bg-emerald-800",l),o.classList.toggle("text-white",l),o.classList.toggle("text-emerald-200",!l)})}function gt(e){if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const o=String(e).match(/^(\d{4})-(\d{2})-(\d{2})/);if(o)return new Date(Number(o[1]),Number(o[2])-1,Number(o[3]));const l=new Date(e);return Number.isNaN(l.getTime())?null:new Date(l.getFullYear(),l.getMonth(),l.getDate())}function nt(e){const o=gt(e);return o?[o.getFullYear(),String(o.getMonth()+1).padStart(2,"0"),String(o.getDate()).padStart(2,"0")].join("-"):""}function ds(e,o){const l=gt(o)??gt(new Date),d=l.getDay(),T=[];for(const D of e){const $=D.span_periods??1;for(let O=0;O<$;O++)T.push({dow:D.day_of_week,pno:(D.period_no??0)+O})}if(T.sort((D,$)=>{const O=(D.dow-d+7)%7,q=($.dow-d+7)%7;return O!==q?O-q:D.pno-$.pno}),!T.length)return[];const k=[];let P=0;for(;k.length<6;){for(const D of T){const $=new Date(l);if($.setDate($.getDate()+(D.dow-d+7)%7+P*7),k.push($),k.length>=6)break}P++}return k.slice(0,6)}const cs={ACDM:["วิชาการ","ภาษา","ชีวิต"],AGM:["ศาสนามัธยม"],ACDMVOC:["วิชาการ","ภาษา","สามัญปวช"],AGMVOC:["ศาสนาปวช"]};async function En(e,o,l={}){var c;const d=l.cloneFrom??null;is(d?"my-classes":"my-courses"),ls(d?"ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา");const T=await vs().catch(()=>[]),k=await Le().catch(()=>({})),P=k.semester_start??k.term_start_date??nt(new Date),D=cs[o.subject_group]??[],$=D.length===1,O=T.find(L=>L.dept_code===o.dept),q=o.grade_level,ee=/^(PR|อก|อป)/i.test(q??""),m=parseInt(k.academicYear),I=parseInt(k.semester),Z=d?new Set((window._classesFlat??[]).filter(L=>L.course_id===o.id&&+L.academic_year===m&&+L.semester===I).map(L=>L.class_name)):new Set,G=q?ee?await hs(q).catch(()=>[]):await ws(q).catch(()=>[]):[],re=d?G.filter(L=>!Z.has(L)):G,ne=d?l.srcSkill??"":"";rs(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${d?"📋 ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา"}</h2>
    </div>
    <!-- คอร์สที่เลือก -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">📖</div>
      <div>
        <p class="font-semibold text-emerald-900">${o.subject_name}</p>
        <p class="text-xs text-emerald-600 font-mono">${o.subject_code??"—"} · ${o.credit??"—"} หน่วยกิต · ${o.grade_level??"—"}</p>
      </div>
    </div>
    ${d?`<div class="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3 mb-5 text-xs text-violet-700">
      📋 ระบบจะคัดลอกช่องคะแนนทั้งหมดจากห้องต้นฉบับให้อัตโนมัติ — นักเรียน วันเรียน และ Google Sheet ตั้งค่าได้ในขั้นตอนนี้
    </div>`:""}
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="class-form" novalidate class="space-y-5">
        <!-- Google Sheet ID -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            Google Sheet ID <span class="text-gray-400 font-normal">(เว้นว่างได้)</span>
          </label>
          <input id="cls-sheet-id" type="text" placeholder="วาง ID จาก URL ของ Google Sheet"
            class="${De}" />
          <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
        </div>
        <!-- กลุ่มทักษะ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ <span class="text-red-400">*</span></label>
          ${$?`<input type="text" value="${D[0]}" class="${De} bg-gray-50" readonly />
               <input type="hidden" id="cls-skill" value="${D[0]}" />`:`<select id="cls-skill" class="${Fe}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${D.map(L=>`<option value="${L}" ${L===ne?"selected":""}>${L}</option>`).join("")}
               </select>`}
        </div>
        <!-- ชั้นเรียน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ชั้นเรียน <span class="text-red-400">*</span></label>
          ${re.length?`<select id="cls-room" class="${Fe}">
                <option value="">— เลือกห้องเรียน —</option>
                ${re.map(L=>`<option value="${L}">${L}</option>`).join("")}
               </select>`:`<input id="cls-room" type="text" placeholder="พิมพ์ชื่อห้อง เช่น PR 1/7 Ikhlas" class="${De}" autocomplete="off" />
               <p class="text-xs text-amber-500 mt-1">⚠️ ไม่พบห้อง ${q} — พิมพ์ชื่อห้องตรงๆ หรืออัปโหลดนักเรียนพร้อม column <b>religion_room</b></p>`}
        </div>
        <!-- นักเรียนในห้อง -->
        <div id="cls-students-section" class="hidden">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            นักเรียนในห้อง <span id="cls-student-count" class="text-xs text-gray-400 font-normal"></span>
          </label>
          <div id="cls-students-list" class="border border-gray-100 rounded-xl overflow-hidden max-h-52 overflow-y-auto"></div>
        </div>
        <!-- หัวหน้าห้อง -->
        <div id="cls-head-section" class="hidden">
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง
            <span class="font-normal text-gray-400 text-xs">(ไม่บังคับ — เลือกทีหลังได้ในหน้าตั้งค่าห้องเรียน)</span>
          </label>
          <select id="cls-head" class="${Fe}">
            <option value="">— เลือกหัวหน้าห้อง —</option>
          </select>
          <!-- Card แสดงหัวหน้าห้องที่เลือก -->
          <div id="cls-head-card" class="hidden mt-2 flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
            <div id="cls-head-avatar" class="w-10 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200 shadow-sm flex items-center justify-center text-gray-400">
              👤
            </div>
            <div class="min-w-0">
              <p id="cls-head-name" class="font-semibold text-emerald-900 text-sm truncate"></p>
              <p id="cls-head-code" class="text-xs text-emerald-600 font-mono mt-0.5"></p>
              <p id="cls-head-room" class="text-xs text-gray-400 mt-0.5"></p>
            </div>
            <span class="ml-auto text-emerald-500 text-lg flex-shrink-0">✓</span>
          </div>
        </div>
        <!-- วันสอน 6 คาบแรก -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm font-semibold text-gray-700">วันสอน 6 คาบแรก</label>
            <button type="button" id="btn-auto-dates"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
              🗓️ คำนวณจากตารางสอน
            </button>
          </div>
          <div id="auto-dates-info" class="hidden mb-2 bg-indigo-50 rounded-xl px-3 py-2 text-xs text-indigo-700"></div>
          <div class="grid grid-cols-3 gap-2">
            ${[1,2,3,4,5,6].map(L=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${L}</p>
              <input id="cls-day${L}" type="date" value="${P}" class="${De} text-xs" />
            </div>`).join("")}
          </div>
        </div>
        <!-- ข้อมูล auto (แสดง readonly) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">ข้อมูลที่ซิงค์ไปยัง Google Sheet</p>
          <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div><span class="text-gray-400">รหัสวิชา:</span> ${o.subject_code??"—"}</div>
            <div><span class="text-gray-400">หน่วยกิต:</span> ${o.credit??"—"}</div>
            <div><span class="text-gray-400">ชั้นปี:</span> ${o.grade_level??"—"}</div>
            <div><span class="text-gray-400">กลุ่มสาระ:</span> ${(O==null?void 0:O.dept_name)??o.dept??"—"}</div>
            <div class="col-span-2"><span class="text-gray-400">หัวหน้าหมวด:</span> ${(O==null?void 0:O.head_name)??"—"}</div>
            <div class="col-span-2"><span class="text-gray-400">ครูผู้สอน:</span> ${(e==null?void 0:e.full_name)??"—"} ${e!=null&&e.phone?`(${e.phone})`:""}
            </div>
          </div>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cls-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            บันทึกและเปิดรายวิชา
          </button>
        </div>
      </form>
    </div>
  </div>`);let K=[];document.getElementById("cls-room").addEventListener("change",async L=>{const v=L.target.value;if(!v){document.getElementById("cls-students-section").classList.add("hidden"),document.getElementById("cls-head-section").classList.add("hidden");return}try{K=ee?await _s(v):await $s(v),document.getElementById("cls-student-count").textContent=`(${K.length} คน)`,document.getElementById("cls-students-list").innerHTML=K.length?`<table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500">
              <tr>
                <th class="px-3 py-2 text-left">รหัส</th>
                <th class="px-3 py-2 text-left">ชื่อ-สกุล</th>
                <th class="px-3 py-2 text-center">ศาสนา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${K.map(s=>`
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 font-mono text-indigo-600">${s.student_code}</td>
                <td class="px-3 py-2">
                  <div class="flex items-center gap-2">
                    ${s.image_url?`<img src="${s.image_url}" class="w-5 h-6 rounded object-cover flex-shrink-0 border border-gray-200" />`:""}
                    ${s.full_name}
                  </div>
                </td>
                <td class="px-3 py-2 text-center text-gray-400">${s.religion_room??"—"}</td>
              </tr>`).join("")}
            </tbody>
          </table>`:'<p class="text-center py-4 text-gray-400 text-sm">ไม่พบนักเรียนในห้องนี้</p>';const W=document.getElementById("cls-head");W.innerHTML='<option value="">— เลือกหัวหน้าห้อง —</option>'+K.map(s=>`<option value="${s.id}" data-code="${s.student_code}" data-room="${s.main_room??""}" data-img="${s.image_url??""}">${s.full_name} (${s.student_code})</option>`).join(""),document.getElementById("cls-students-section").classList.remove("hidden"),document.getElementById("cls-head-section").classList.remove("hidden");const A=()=>{const s=W.options[W.selectedIndex],n=document.getElementById("cls-head-card");if(!s||!s.value){n==null||n.classList.add("hidden");return}const t=s.text.split(" (")[0],r=s.dataset.code??"",b=s.dataset.room??"",S=s.dataset.img??"";document.getElementById("cls-head-name").textContent=t,document.getElementById("cls-head-code").textContent=`รหัส: ${r}`,document.getElementById("cls-head-room").textContent=b?`ห้อง: ${b}`:"";const R=document.getElementById("cls-head-avatar");R.innerHTML=S?`<img src="${S}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${t.charAt(0)}</div>`,n==null||n.classList.remove("hidden")};W.addEventListener("change",A)}catch{U("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}});let de=[];(c=document.getElementById("btn-auto-dates"))==null||c.addEventListener("click",async()=>{var W;const L=document.getElementById("btn-auto-dates"),v=document.getElementById("auto-dates-info");L.textContent="⏳ กำลังดึงตาราง...",L.disabled=!0;try{const A=parseInt(k.academicYear??2568),s=parseInt(k.semester??1),n=e?await ze(e.id,A,s).catch(()=>[]):[];if(!n.length){v.innerHTML='⚠️ ยังไม่มีตารางสอน — <a href="#" id="goto-schedule" class="underline text-indigo-600 font-medium">สร้างตารางสอน</a> หรือกรอกวันเองด้านล่าง',v.classList.remove("hidden"),(W=document.getElementById("goto-schedule"))==null||W.addEventListener("click",R=>{var f;R.preventDefault(),(f=window._navTo)==null||f.call(window,"schedule")}),L.disabled=!1,L.textContent="🗓️ คำนวณจากตารางสอน";return}const t={};n.forEach(R=>{var h,y;const f=`${R.subject_name??((h=R.master_subjects)==null?void 0:h.subject_name)??"?"}|${R.class_name??""}`;t[f]||(t[f]={label:`${R.subject_name??((y=R.master_subjects)==null?void 0:y.subject_name)??"?"}${R.class_name?` — ${R.class_name}`:""}`,entries:[]}),t[f].entries.push(R)});const r=["อา","จ","อ","พ","พฤ","ศ"],b=R=>{const f=[];R.forEach(y=>{for(let Y=0;Y<(y.span_periods??1);Y++)f.push({dow:y.day_of_week,pno:(y.period_no??0)+Y})}),f.sort((y,Y)=>y.dow!==Y.dow?y.dow-Y.dow:y.pno-Y.pno);const h={};return f.forEach(y=>{h[y.dow]||(h[y.dow]=[]),h[y.dow].push(y.pno)}),Object.entries(h).map(([y,Y])=>`${r[y]} คาบ ${Y.join(",")}`).join(" · ")},S=document.createElement("div");S.id="dates-popup",S.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",S.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(t).map(([R,f])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="dates-subj" value="${R}" class="mt-0.5 text-indigo-600 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${f.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${b(f.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(S),S.querySelector("#dates-close").addEventListener("click",()=>S.remove()),S.querySelector("#dates-cancel").addEventListener("click",()=>S.remove()),S.querySelector("#dates-calc").addEventListener("click",()=>{var y;const R=(y=S.querySelector('input[name="dates-subj"]:checked'))==null?void 0:y.value;if(!R){alert("กรุณาเลือกวิชาก่อน");return}S.remove();const f=t[R].entries;de=f,ds(f,P).forEach((Y,F)=>{const te=document.getElementById(`cls-day${F+1}`);te&&(te.value=nt(Y))}),v.textContent=`✅ คำนวณจาก "${t[R].label}" — ${f.length} ช่องตาราง — ตรวจสอบแล้วแก้ไขได้`,v.classList.remove("hidden")})}catch(A){v.textContent="โหลดตารางไม่สำเร็จ: "+ce(A),v.classList.remove("hidden")}finally{L.textContent="🗓️ คำนวณจากตารางสอน",L.disabled=!1}}),document.getElementById("class-form").addEventListener("submit",async L=>{L.preventDefault();const v=document.getElementById("cls-submit"),W=document.getElementById("cls-sheet-id").value.trim(),A=document.getElementById("cls-skill").value,s=document.getElementById("cls-room").value,n=document.getElementById("cls-head").value;if(!s){U("กรุณาเลือกชั้นเรียน","warning");return}v.disabled=!0,v.textContent="กำลังบันทึก...";try{const t={course_id:o.id,class_name:s,skill_group:A||null,google_sheet_id:W||null,head_student_id:n?Number(n):null,day1_date:document.getElementById("cls-day1").value||null,day2_date:document.getElementById("cls-day2").value||null,day3_date:document.getElementById("cls-day3").value||null,day4_date:document.getElementById("cls-day4").value||null,day5_date:document.getElementById("cls-day5").value||null,day6_date:document.getElementById("cls-day6").value||null},r=await ks(t,(e==null?void 0:e.id)??null);r!=null&&r.id&&de.length&&await Promise.all(de.map(Y=>tt(r.id,Y.id).catch(()=>{}))),K.length&&(r!=null&&r.id)&&await Ss(r.id,K.map(Y=>Y.id));const b=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),S=(l.srcSkill??"")==="ชีวิต",R=["AGM","AGMVOC"].includes(o.subject_group??"");let f=new Set;if(S){const Y=await Le().catch(()=>({})),F=await Es(parseInt(Y.academicYear??2568),parseInt(Y.semester??1),"สามัญ").catch(()=>[]);f=new Set(F.slice(0,3).map(te=>te.name))}let h=0;if(d&&(r!=null&&r.id)){const Y=await Ut(d).catch(()=>[]),F=new Set;for(const te of Y)R&&b.has(te.assignment_name)||S&&f.has(te.assignment_name)||F.has(te.assignment_name)||(F.add(te.assignment_name),await Ls({class_id:r.id,assignment_name:te.assignment_name,assignment_type:te.assignment_type,sheet_column:te.sheet_column,max_score:te.max_score}),h++)}const y=d?`ทำสำเนา "${s}" สำเร็จ — นักเรียน ${K.length} คน · ช่องคะแนน ${h} ช่อง`:`เปิดรายวิชา ${s} สำเร็จ! นักเรียน ${K.length} คน`;U(y,"success"),window._goBack()}catch(t){U("บันทึกไม่สำเร็จ: "+ce(t),"error")}finally{v.disabled=!1,v.textContent="บันทึกและเปิดรายวิชา"}})}async function Ln(e,o){var $,O;is("my-classes"),ls("แก้ไขห้องเรียน");const l=o.master_subjects,d=cs[l==null?void 0:l.subject_group]??[],T=d.length===1,k=await He(o.id).catch(()=>[]);rs(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._navTo?.('my-classes') || history.back()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">แก้ไขห้องเรียน</h2>
    </div>
    <!-- ข้อมูลคงที่ -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5">
      <p class="text-xs text-emerald-500 font-medium mb-1">คอร์สวิชา / ห้องเรียน (เปลี่ยนไม่ได้)</p>
      <p class="font-bold text-emerald-900">${(l==null?void 0:l.subject_name)??"—"}
        <span class="font-mono text-sm ml-2 text-emerald-600">${(l==null?void 0:l.subject_code)??""}</span>
      </p>
      <p class="text-sm text-emerald-700 mt-0.5">ห้อง: <strong>${o.class_name}</strong></p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="cls-edit-form" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Google Sheet ID</label>
          <input id="ce-sheet" type="text" value="${o.google_sheet_id??""}"
            placeholder="วาง ID จาก URL ของ Google Sheet" class="${De}" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ</label>
          ${T?`<input type="text" value="${d[0]}" class="${De} bg-gray-50" readonly />
               <input type="hidden" id="ce-skill" value="${d[0]}" />`:`<select id="ce-skill" class="${Fe}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${d.map(q=>`<option value="${q}" ${q===o.skill_group?"selected":""}>${q}</option>`).join("")}
               </select>`}
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง</label>
          <select id="ce-head" class="${Fe}">
            <option value="">— ยังไม่ระบุหัวหน้าห้อง —</option>
            ${k.map(q=>`
              <option value="${q.id}" ${Number(o.head_student_id)===Number(q.id)?"selected":""}>
                ${q.full_name} (${q.student_code})
              </option>`).join("")}
          </select>
          ${k.length?'<p class="text-xs text-gray-400 mt-1">เลือกได้จากนักเรียนที่อยู่ในห้องนี้</p>':'<p class="text-xs text-amber-500 mt-1">ยังไม่พบนักเรียนในห้องนี้ จึงยังเลือกหัวหน้าห้องไม่ได้</p>'}
        </div>
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm font-semibold text-gray-700">วันสอน 6 คาบแรก</label>
            <button type="button" id="ce-btn-auto-dates"
              class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-medium transition">
              🗓️ คำนวณจากตารางสอน
            </button>
          </div>
          <p id="ce-auto-dates-info" class="hidden text-xs text-emerald-600 mb-2"></p>
          <div class="grid grid-cols-3 gap-2">
            ${[1,2,3,4,5,6].map(q=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${q}</p>
              <input id="ce-day${q}" type="date"
                value="${o[`day${q}_date`]??""}" class="${De} text-xs" />
            </div>`).join("")}
          </div>
        </div>
        <!-- ใช้ข้อมูลจากห้องอื่น (source class) -->
        <div id="ce-source-wrap" class="border-t border-gray-100 pt-4">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            🔗 ใช้ข้อมูลจากห้องเรียนอื่น
          </label>
          <p class="text-xs text-gray-400 mb-2">
            สำหรับวิชาที่ไม่ได้สอนจริง — ปพ.5 จะดึงการเช็คชื่อและคะแนน (เฉพาะที่ครูกรอกเอง) จากห้องที่เลือก
          </p>
          <select id="ce-source-class" class="${Fe}">
            <option value="">— ไม่ได้ใช้ข้อมูลจากห้องอื่น —</option>
          </select>
          <p id="ce-source-info" class="hidden text-xs text-amber-600 mt-1"></p>
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button"
            onclick="window._navTo?.('my-classes') || history.back()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="ce-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            บันทึกการแก้ไข
          </button>
        </div>
      </form>
    </div>
  </div>`),e!=null&&e.id&&ut(e.id,o.id).then(q=>{const ee=document.getElementById("ce-source-class");if(ee&&(q.forEach(m=>{const I=m.master_subjects,Z=`${(I==null?void 0:I.subject_name)??"?"} (${(I==null?void 0:I.subject_code)??""}) — ${m.class_name} · ${(I==null?void 0:I.credit)??"?"} หน่วยกิต`,G=new Option(Z,m.id,!1,Number(m.id)===Number(o.source_class_id));ee.appendChild(G)}),o.source_class_id)){const m=q.find(I=>Number(I.id)===Number(o.source_class_id));m&&P(m)}}).catch(()=>{});const P=q=>{var Z,G;const ee=document.getElementById("ce-source-info");if(!ee||!q)return;const m=((Z=q.master_subjects)==null?void 0:Z.credit)??1,I=((G=o.master_subjects)==null?void 0:G.credit)??1;m!==I?(ee.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${m} / วิชานี้ ${I}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,ee.classList.remove("hidden")):ee.classList.add("hidden")};($=document.getElementById("ce-source-class"))==null||$.addEventListener("change",q=>{var I;const m=q.target.selectedOptions[0];if(!(m!=null&&m.value)){(I=document.getElementById("ce-source-info"))==null||I.classList.add("hidden");return}ut(e==null?void 0:e.id,o.id).then(Z=>{const G=Z.find(re=>Number(re.id)===Number(m.value));G&&P(G)}).catch(()=>{})});let D=[];(O=document.getElementById("ce-btn-auto-dates"))==null||O.addEventListener("click",async()=>{const q=document.getElementById("ce-btn-auto-dates"),ee=document.getElementById("ce-auto-dates-info");q.textContent="⏳ กำลังดึงตาราง...",q.disabled=!0;try{const m=await Le().catch(()=>({})),I=m.semester_start??m.term_start_date??nt(new Date),Z=parseInt(m.academicYear??2568),G=parseInt(m.semester??1),re=e?await ze(e.id,Z,G).catch(()=>[]):[];if(!re.length){ee.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",ee.classList.remove("hidden");return}const ne={};re.forEach(L=>{const v=`${L.subject_name??"?"}|${L.class_name??""}`;ne[v]||(ne[v]={label:`${L.subject_name??"?"}${L.class_name?` — ${L.class_name}`:""}`,entries:[]}),ne[v].entries.push(L)});const K=["อา","จ","อ","พ","พฤ","ศ"],de=L=>{const v=[];L.forEach(A=>{for(let s=0;s<(A.span_periods??1);s++)v.push({dow:A.day_of_week,pno:(A.period_no??0)+s})}),v.sort((A,s)=>A.dow!==s.dow?A.dow-s.dow:A.pno-s.pno);const W={};return v.forEach(A=>{W[A.dow]||(W[A.dow]=[]),W[A.dow].push(A.pno)}),Object.entries(W).map(([A,s])=>`${K[A]} คาบ ${s.join(",")}`).join(" · ")},c=document.createElement("div");c.id="ce-dates-popup",c.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",c.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="ce-dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(ne).map(([L,v])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="ce-dates-subj" value="${L}" class="mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${v.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${de(v.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="ce-dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="ce-dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(c),c.querySelector("#ce-dates-close").addEventListener("click",()=>c.remove()),c.querySelector("#ce-dates-cancel").addEventListener("click",()=>c.remove()),c.querySelector("#ce-dates-calc").addEventListener("click",()=>{var W;const L=(W=c.querySelector('input[name="ce-dates-subj"]:checked'))==null?void 0:W.value;if(!L){U("กรุณาเลือกวิชาก่อน","warning");return}c.remove(),D=ne[L].entries,ds(ne[L].entries,I).forEach((A,s)=>{const n=document.getElementById(`ce-day${s+1}`);n&&(n.value=nt(A))}),ee.textContent=`✅ คำนวณจาก "${ne[L].label}" — ตรวจสอบและแก้ไขได้`,ee.classList.remove("hidden")})}catch(m){ee.textContent="โหลดตารางไม่สำเร็จ: "+ce(m),ee.classList.remove("hidden")}finally{q.textContent="🗓️ คำนวณจากตารางสอน",q.disabled=!1}}),document.getElementById("cls-edit-form").addEventListener("submit",async q=>{var m;q.preventDefault();const ee=document.getElementById("ce-submit");ee.disabled=!0,ee.textContent="กำลังบันทึก...";try{const I=(m=document.getElementById("ce-source-class"))==null?void 0:m.value;await st(o.id,{google_sheet_id:document.getElementById("ce-sheet").value.trim()||null,skill_group:document.getElementById("ce-skill").value||null,head_student_id:document.getElementById("ce-head").value?Number(document.getElementById("ce-head").value):null,day1_date:document.getElementById("ce-day1").value||null,day2_date:document.getElementById("ce-day2").value||null,day3_date:document.getElementById("ce-day3").value||null,day4_date:document.getElementById("ce-day4").value||null,day5_date:document.getElementById("ce-day5").value||null,day6_date:document.getElementById("ce-day6").value||null,source_class_id:I?Number(I):null}),D.length&&(await Promise.all(D.map(Z=>tt(o.id,Z.id).catch(()=>{}))),D=[]),U("บันทึกสำเร็จ","success"),window._navTo?window._navTo("my-classes"):history.back()}catch(I){U("บันทึกไม่สำเร็จ: "+ce(I),"error")}finally{ee.disabled=!1,ee.textContent="บันทึกการแก้ไข"}})}const Ue=[{cls:"bg-emerald-100 text-emerald-900 font-semibold",hex:"#d1fae5",soft:"#ecfdf5",border:"#6ee7b7",dot:"#6ee7b7"},{cls:"bg-indigo-100 text-indigo-900 font-semibold",hex:"#e0e7ff",soft:"#eef2ff",border:"#a5b4fc",dot:"#a5b4fc"},{cls:"bg-amber-100 text-amber-900 font-semibold",hex:"#fef3c7",soft:"#fffbeb",border:"#fcd34d",dot:"#fcd34d"},{cls:"bg-rose-100 text-rose-900 font-semibold",hex:"#ffe4e6",soft:"#fff1f2",border:"#fda4af",dot:"#fda4af"},{cls:"bg-cyan-100 text-cyan-900 font-semibold",hex:"#cffafe",soft:"#ecfeff",border:"#67e8f9",dot:"#67e8f9"},{cls:"bg-violet-100 text-violet-900 font-semibold",hex:"#ede9fe",soft:"#f5f3ff",border:"#c4b5fd",dot:"#c4b5fd"},{cls:"bg-lime-100 text-lime-900 font-semibold",hex:"#ecfccb",soft:"#f7fee7",border:"#bef264",dot:"#bef264"},{cls:"bg-orange-100 text-orange-900 font-semibold",hex:"#ffedd5",soft:"#fff7ed",border:"#fdba74",dot:"#fdba74"},{cls:"bg-pink-100 text-pink-900 font-semibold",hex:"#fce7f3",soft:"#fdf2f8",border:"#f9a8d4",dot:"#f9a8d4"},{cls:"bg-teal-100 text-teal-900 font-semibold",hex:"#ccfbf1",soft:"#f0fdfa",border:"#5eead4",dot:"#5eead4"},{cls:"bg-sky-100 text-sky-900 font-semibold",hex:"#e0f2fe",soft:"#f0f9ff",border:"#7dd3fc",dot:"#7dd3fc"},{cls:"bg-fuchsia-100 text-fuchsia-900 font-semibold",hex:"#fae8ff",soft:"#fdf4ff",border:"#f0abfc",dot:"#f0abfc"}],et=e=>String(e??"").trim().toLowerCase(),ps=/^#[0-9a-f]{6}$/i;function qn(e){let o=2166136261;for(let l=0;l<e.length;l+=1)o^=e.charCodeAt(l),o=Math.imul(o,16777619);return o>>>0}function Cn({teacherId:e="",className:o="",subjectName:l="",fallbackId:d=""}={}){return`${et(e)}|${it({className:o,subjectName:l,fallbackId:d})}`}function it({className:e="",subjectName:o="",fallbackId:l=""}={}){const d=et(e),T=et(o),k=et(l);return d||T||k||"default"}function Mt(e){const o=ps.test(e)?e.slice(1):"e0e7ff";return{r:parseInt(o.slice(0,2),16),g:parseInt(o.slice(2,4),16),b:parseInt(o.slice(4,6),16)}}function jn({r:e,g:o,b:l}){return`#${[e,o,l].map(d=>Math.max(0,Math.min(255,Math.round(d))).toString(16).padStart(2,"0")).join("")}`}function ct(e,o,l=.5){const d=Mt(e),T=Mt(o);return jn({r:d.r*(1-l)+T.r*l,g:d.g*(1-l)+T.g*l,b:d.b*(1-l)+T.b*l})}function We(e){const o=ps.test(String(e??""))?String(e).toLowerCase():"#6366f1";return{cls:"",hex:o,soft:ct(o,"#ffffff",.86),border:ct(o,"#ffffff",.45),dot:o,text:ct(o,"#000000",.28)}}function In(e={}){const o=Cn(e),l=qn(o)%Ue.length;return{...We(Ue[l].dot),cls:Ue[l].cls,idx:l,key:o}}function Ge(e={},o={}){const l=it(e),d=o instanceof Map?o.get(l):o[l];return d?We(d):In(e)}const Tt="pp5_free_timer_count",At="pp5_timer_effect_style",ot="pp5_timer_sound",Bt="pp5_timer_break_step",Rt="pp5_timer_ambient",Nt="pp5_timer_font_scale",Pt="pp5_timer_show_ambient_countdown",Ke="pp5_timer_last_countdown_sec",Dt="pp5_timer_last_break_sec",Mn="alarm-bell.mp3",_t=[{key:"forest-wind",label:"🌲 ลมป่า",file:"forest-wind.mp3"},{key:"calm-ocean-breeze",label:"🌊 สายลมทะเล",file:"calm-ocean-breeze.mp3"},{key:"path-to-jannah",label:"🕌 Path to Jannah",file:"path-to-jannah.mp3"},{key:"waterfall-nature",label:"💦 น้ำตกธรรมชาติ",file:"waterfall-nature.mp3"},{key:"calm",label:"🧘 สงบ",file:"calm.mp3"},{key:"meditation-01",label:"🎐 สมาธิ 01",file:"meditation-01.mp3"},{key:"meditation-02",label:"🎐 สมาธิ 02",file:"meditation-02.mp3"},{key:"nature-piano",label:"🎹 เปียโนธรรมชาติ",file:"nature-piano.mp3"},{key:"solo-piano",label:"🎹 เปียโนเดี่ยว",file:"solo-piano.mp3"},{key:"rain",label:"🌧️ เสียงฝน",file:"rain.mp3"}];function $t(e){return`/pp5online/sounds/${e}`}function us(){var o;const e=parseInt((o=window._pp5SystemCfg)==null?void 0:o.freeTimerLimit,10);return Number.isFinite(e)?e:1}function Je(e,o,l){l=Math.max(0,Math.min(1,l));const d=[1,3,5].map(P=>parseInt(e.slice(P,P+2),16)),T=[1,3,5].map(P=>parseInt(o.slice(P,P+2),16));return`rgb(${d.map((P,D)=>Math.round(P+(T[D]-P)*l)).join(",")})`}function pt(e){const o=Math.max(0,Math.round(e)),l=Math.floor(o/3600),d=Math.floor(o%3600/60),T=o%60;return l>0?`${String(l).padStart(2,"0")}:${String(d).padStart(2,"0")}:${String(T).padStart(2,"0")}`:`${String(d).padStart(2,"0")}:${String(T).padStart(2,"0")}`}let Te=null;function Tn(e,o,l="sine",d=.18){if(localStorage.getItem(ot)!=="off")try{Te=Te||new(window.AudioContext||window.webkitAudioContext),Te.state==="suspended"&&Te.resume();const T=Te.createOscillator(),k=Te.createGain();T.type=l,T.frequency.value=e,k.gain.value=d,T.connect(k),k.connect(Te.destination),T.start(),k.gain.exponentialRampToValueAtTime(1e-4,Te.currentTime+o/1e3),T.stop(Te.currentTime+o/1e3)}catch{}}const An=()=>Tn(880,120,"square",.12);let Qe=null;function Bn(){if(localStorage.getItem(ot)!=="off")try{Qe=Qe||new Audio($t(Mn)),Qe.currentTime=0,Qe.volume=.7,Qe.play().catch(()=>{})}catch{}}let Ne=null,Oe=null;function Re(){if(Ne)try{Ne.pause()}catch{}Ne=null,Oe=null}function Rn(e){if(Oe===e){Re();return}Re();const o=_t.find(l=>l.key===e);if(o)try{Ne=new Audio($t(o.file)),Ne.volume=.5,Ne.play().catch(()=>{}),Ne.addEventListener("ended",()=>{Oe===e&&(Oe=null,Ne=null)}),Oe=e}catch{}}function Nn(){const e=document.createElement("div");e.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="tm-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-700 text-lg">สิทธิ์จับเวลาทดลองใช้งานครบแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์จับเวลาเต็มจอจำกัดการทดลองใช้ฟรี ${us()} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
      <button id="tm-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(e),e.querySelector("#tm-paywall-close").addEventListener("click",()=>e.remove()),e.querySelector("#tm-upgrade").addEventListener("click",()=>{var o;e.remove(),(o=document.getElementById("btn-donate-float"))==null||o.click()})}function Pn(e,o,l){var ne;(ne=document.getElementById("timer-setup-modal"))==null||ne.remove(),Re();let d="countdown",T=localStorage.getItem(At)||"shake",k=localStorage.getItem(ot)!=="off",P=localStorage.getItem(Bt)||"60",D=localStorage.getItem(Rt)||"none",$=localStorage.getItem(Pt)==="on";const O=K=>{const de=parseInt(localStorage.getItem(K),10);return Number.isFinite(de)&&de>0?de:300};let q=Math.floor(O(Ke)/60),ee=O(Ke)%60;const m=document.createElement("div");m.id="timer-setup-modal",m.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",document.body.appendChild(m);const I=[1,3,5,10,15,20],Z=[{key:"countdown",icon:"⏱️",label:"นับถอยหลัง",sub:"คุมเวลากิจกรรม",grad:"linear-gradient(135deg,#10b981,#0ea5e9);"},{key:"break",icon:"☕",label:"พักเบรค",sub:"มืด→สว่างเตือนหมดเวลา",grad:"linear-gradient(135deg,#334155,#64748b);"},{key:"stopwatch",icon:"⏳",label:"นับเวลา",sub:"นับขึ้นไม่จำกัด",grad:"linear-gradient(135deg,#6366f1,#a855f7);"}];function G(){return`
      <div>
        <p class="text-xs font-semibold text-gray-500 mb-1.5">🎵 เสียงประกอบ <span class="font-normal">(คลิกเพื่อฟังตัวอย่าง คลิกซ้ำเพื่อหยุด)</span></p>
        <div class="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
          <button data-ambient="none" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${D==="none"?"bg-gray-700 text-white":"bg-gray-100 text-gray-600"}">🔇 ไม่มีเสียง</button>
          ${_t.map(K=>`<button data-ambient="${K.key}" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${D===K.key?"bg-teal-600 text-white":"bg-gray-100 text-gray-600"}">${K.label}${Oe===K.key?" ▶️":""}</button>`).join("")}
        </div>
      </div>`}function re(){var c,L;m.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[94vh] flex flex-col">
        <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div class="min-w-0">
            <h3 class="text-white font-bold text-base">⏱️ จับเวลา</h3>
            <p class="text-white/80 text-xs mt-0.5 truncate">${o!=null&&o.class_name?o.class_name:""}</p>
          </div>
          <button id="tm-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
        </div>
        <div class="p-5 overflow-y-auto flex flex-col gap-4">

          <div class="grid grid-cols-3 gap-1.5">
            ${Z.map(v=>`
              <button data-mode="${v.key}" class="tm-mode-btn py-2.5 px-1 rounded-2xl text-xs font-bold transition ${d===v.key?"text-white":"bg-gray-100 text-gray-500"}"
                style="${d===v.key?`background:${v.grad}`:""}">${v.icon}<br>${v.label}<br><span class="font-normal text-[10px] opacity-80">${v.sub}</span></button>
            `).join("")}
          </div>

          ${d!=="stopwatch"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">ระยะเวลา</p>
            <div class="flex flex-wrap gap-1.5">
              ${I.map(v=>`<button data-min="${v}" class="tm-preset-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition ${q===v&&ee===0?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}">${v} นาที</button>`).join("")}
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <input id="tm-custom-min" type="number" min="0" max="180" value="${q}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">นาที</span>
              <input id="tm-custom-sec" type="number" min="0" max="59" value="${ee}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">วินาที</span>
            </div>
          </div>
          `:""}

          ${d==="countdown"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">เอฟเฟกต์ตอนใกล้หมดเวลา</p>
            <div class="flex gap-2">
              <button data-eff="shake" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${T==="shake"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">📳 สั่น</button>
              <button data-eff="scale" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${T==="scale"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">🔍 ขยาย</button>
            </div>
          </div>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-sound" type="checkbox" ${k?"checked":""} class="w-4 h-4 rounded" />
            🔊 เปิดเสียงตอนนับถอยหลัง/หมดเวลา (เสียงกริ่งนาฬิกาปลุก)
          </label>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-show-ambient" type="checkbox" ${$?"checked":""} class="w-4 h-4 rounded" />
            🎵 แสดงตัวเลือกเสียงประกอบในโหมดนับถอยหลังด้วย
          </label>
          ${$?G():""}
          `:""}

          ${d==="break"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">หน่วยปรับเวลาระหว่างเบรค</p>
            <div class="flex gap-2">
              <button data-step="60" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${P==="60"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±1 นาที</button>
              <button data-step="30" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${P==="30"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±30 วินาที</button>
            </div>
          </div>
          ${G()}
          `:""}

          <button id="tm-start" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]"
            style="background:linear-gradient(135deg,#0ea5e9,#6366f1);">▶️ เริ่มจับเวลา</button>
        </div>
      </div>`,m.querySelector("#tm-close").addEventListener("click",()=>{Re(),m.remove()}),m.querySelectorAll(".tm-mode-btn").forEach(v=>v.addEventListener("click",()=>{if(d=v.dataset.mode,Re(),d!=="stopwatch"){const W=O(d==="break"?Dt:Ke);q=Math.floor(W/60),ee=W%60}re()})),m.querySelectorAll(".tm-preset-btn").forEach(v=>v.addEventListener("click",()=>{q=parseInt(v.dataset.min,10),ee=0,re()})),(c=m.querySelector("#tm-custom-min"))==null||c.addEventListener("change",v=>{const W=parseInt(v.target.value,10);Number.isFinite(W)&&W>=0&&(q=W)}),(L=m.querySelector("#tm-custom-sec"))==null||L.addEventListener("change",v=>{const W=parseInt(v.target.value,10);Number.isFinite(W)&&W>=0&&(ee=Math.min(59,W))}),m.querySelectorAll(".tm-eff-btn").forEach(v=>v.addEventListener("click",()=>{T=v.dataset.eff,localStorage.setItem(At,T),re()})),m.querySelectorAll(".tm-step-btn").forEach(v=>v.addEventListener("click",()=>{P=v.dataset.step,localStorage.setItem(Bt,P),re()})),m.querySelectorAll(".tm-ambient-btn").forEach(v=>v.addEventListener("click",()=>{D=v.dataset.ambient,localStorage.setItem(Rt,D),D==="none"?Re():Rn(D),re()}));const K=m.querySelector("#tm-sound");K&&K.addEventListener("change",v=>localStorage.setItem(ot,v.target.checked?"on":"off"));const de=m.querySelector("#tm-show-ambient");de&&de.addEventListener("change",v=>{$=v.target.checked,localStorage.setItem(Pt,$?"on":"off"),re()}),m.querySelector("#tm-start").addEventListener("click",()=>{var n,t;const v=parseInt((n=m.querySelector("#tm-custom-min"))==null?void 0:n.value,10),W=parseInt((t=m.querySelector("#tm-custom-sec"))==null?void 0:t.value,10);Number.isFinite(v)&&v>=0&&(q=v),Number.isFinite(W)&&W>=0&&(ee=Math.min(59,W));const A=q*60+ee;if(d!=="stopwatch"&&A<=0){U("กรุณาตั้งเวลาอย่างน้อย 1 วินาที","warning");return}if(!l){const r=parseInt(localStorage.getItem(Tt)||"0",10);if(r>=us()){Nn();return}localStorage.setItem(Tt,String(r+1))}d!=="stopwatch"&&localStorage.setItem(d==="break"?Dt:Ke,String(A));const s=d==="break"||d==="countdown"&&$?D:"none";Re(),m.remove(),Dn(d,d==="stopwatch"?0:A,{effectStyle:T,breakStepSec:parseInt(P,10),ambient:s})})}re(),m.addEventListener("click",K=>{K.target===m&&(Re(),m.remove())})}function Dn(e,o,{effectStyle:l,breakStepSec:d,ambient:T}){var c,L;(c=document.getElementById("timer-fullscreen-overlay"))==null||c.remove();let k=o,P=o,D=0,$=!1,O=!1,q=null,ee=-1,m=parseFloat(localStorage.getItem(Nt))||1,I=null;if(T&&T!=="none"){const v=_t.find(W=>W.key===T);if(v)try{I=new Audio($t(v.file)),I.loop=!0,I.volume=.45,I.play().catch(()=>{})}catch{}}const Z=document.createElement("div");Z.id="timer-fullscreen-overlay",Z.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:background-color .6s linear;",Z.innerHTML=`
    <style>
      @keyframes tm-shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
      @keyframes tm-scale { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
      .tm-digits { font-variant-numeric:tabular-nums; font-weight:800; letter-spacing:2px; transition:color .6s linear; }
      #tm-size-slider { -webkit-appearance:none; width:120px; height:4px; border-radius:2px; background:rgba(255,255,255,.3); }
      #tm-size-slider::-webkit-slider-thumb { -webkit-appearance:none; width:18px; height:18px; border-radius:50%; background:#fff; cursor:pointer; }
      #tm-size-slider::-moz-range-thumb { width:18px; height:18px; border-radius:50%; background:#fff; border:none; cursor:pointer; }
    </style>
    <button id="tm-exit" style="position:absolute;top:20px;right:24px;background:rgba(255,255,255,.15);border:none;color:inherit;width:44px;height:44px;border-radius:14px;font-size:22px;cursor:pointer;">✕</button>
    <div style="position:absolute;top:28px;left:24px;display:flex;align-items:center;gap:8px;color:inherit;opacity:.85;">
      <span style="font-size:13px;">🔠</span>
      <input id="tm-size-slider" type="range" min="0.5" max="1.8" step="0.1" value="${m}" />
    </div>
    <div id="tm-digits" class="tm-digits" style="font-size:calc(min(28vw,220px) * ${m});line-height:1;">${pt(e==="stopwatch"?0:P)}</div>
    <div id="tm-sub" style="margin-top:12px;font-size:18px;opacity:.75;"></div>
    <div id="tm-mode-controls" style="display:none;margin-top:28px;gap:16px;align-items:center;"></div>
  `,document.body.appendChild(Z);try{(L=Z.requestFullscreen)==null||L.call(Z)}catch{}const G=Z.querySelector("#tm-digits"),re=Z.querySelector("#tm-sub");Z.querySelector("#tm-size-slider").addEventListener("input",v=>{m=parseFloat(v.target.value),localStorage.setItem(Nt,String(m)),G.style.fontSize=`calc(min(28vw,220px) * ${m})`});function ne(){var v;if(q&&cancelAnimationFrame(q),I)try{I.pause()}catch{}document.fullscreenElement&&((v=document.exitFullscreen)==null||v.call(document).catch(()=>{})),Z.remove()}if(Z.querySelector("#tm-exit").addEventListener("click",ne),e==="break"){const v=Z.querySelector("#tm-mode-controls");v.style.display="flex";const W=d===30?"30 วิ":"1 นาที";v.innerHTML=`
      <button id="tm-minus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">− ${W}</button>
      <button id="tm-plus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">+ ${W}</button>
    `,v.querySelector("#tm-minus").addEventListener("click",()=>{P=Math.max(0,P-d)}),v.querySelector("#tm-plus").addEventListener("click",()=>{P+=d,k=Math.max(k,P)}),re.textContent="พักเบรค — จอสว่างเต็มที่ = หมดเวลาพัก"}else if(e==="stopwatch"){const v=Z.querySelector("#tm-mode-controls");v.style.display="flex",v.innerHTML=`
      <button id="tm-pause" style="background:rgba(0,0,0,.15);border:none;padding:12px 26px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">⏸️ หยุดชั่วคราว</button>
    `;const W=v.querySelector("#tm-pause");W.addEventListener("click",()=>{O=!O,W.textContent=O?"▶️ เล่นต่อ":"⏸️ หยุดชั่วคราว"}),Z.style.backgroundColor="#1e293b",G.style.color="#ffffff",re.textContent="นับเวลา"}else re.textContent="นับถอยหลัง";let K=performance.now();function de(v){const W=(v-K)/1e3;if(K=v,e==="stopwatch"){O||(D+=W,G.textContent=pt(D)),q=requestAnimationFrame(de);return}if(!$){P=Math.max(0,P-W);const A=Math.ceil(P),s=k>0?P/k:0,n=1-s;if(G.textContent=pt(P),e==="break")Z.style.backgroundColor=Je("#0f172a","#fef9c3",n),G.style.color=Je("#94a3b8","#1e293b",n),G.style.animation="";else{let t;if(s>.3?t=Je("#f59e0b","#10b981",(s-.3)/.7):s>.1?t=Je("#ef4444","#f59e0b",(s-.1)/.2):t="#ef4444",Z.style.backgroundColor=t,G.style.color="#ffffff",s<=.3){const r=1-Math.min(1,s/.3),b=Math.max(.18,.9-r*.7);G.style.animation=`${l==="shake"?"tm-shake":"tm-scale"} ${b}s ease-in-out infinite`}else G.style.animation="";A!==ee&&(ee=A,A>0&&A<=3&&An())}P<=0&&($=!0,G.textContent="00:00",G.style.animation="",e==="break"?(Z.style.backgroundColor="#fef9c3",G.style.color="#1e293b",re.textContent="หมดเวลาพักเบรคแล้ว"):(re.textContent="⏰ หมดเวลา!",Bn(),hn().then(()=>wn("mid")).catch(()=>{})))}q=requestAnimationFrame(de)}q=requestAnimationFrame(de)}const Hn="pp5_exam_docs_pending_class_id";function ms(e){window._pendingExamDocClassId=String(e);try{sessionStorage.setItem(Hn,String(e))}catch{}if(typeof window._navTo=="function"){window._navTo("exam-docs");return}U("ไม่พบเมนูเอกสารช่วงสอบ กรุณาเปิดจากหน้าเมนครู","warning")}async function xs(e,o){var d,T,k,P,D;const l=(d=window._classCache)==null?void 0:d[o];if(l){je("my-classes"),Ie("จัดการนักเรียน","class-students"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-sky-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดรายชื่อนักเรียน...
  </div>`);try{const[$,O]=await Promise.all([Ts(o),Le().catch(()=>({}))]),q=`classRosterView_${o}`,ee=localStorage.getItem(q)||"table",m=$.filter(n=>n.is_active).length,I=l.master_subjects??{},Z=["AGM","AGMVOC"].includes(I.subject_group),G=I.subject_group==="ACDMVOC",re=O.showStudentHouseColor!=="false",ne=O.showStudentSportsShirtSize!=="false",K=["ข.ร.","ข.ส.","ม.ส.","ข.ป."],de=n=>`
      <select data-special-enrollment="${n.enrollment_id}" onclick="event.stopPropagation()"
        class="border border-gray-200 rounded-lg px-1.5 py-1 text-xs bg-white text-gray-600">
        <option value="" ${n.special_result?"":"selected"}>ปกติ</option>
        ${K.map(t=>`<option value="${t}" ${n.special_result===t?"selected":""}>${t}</option>`).join("")}
      </select>`,c=n=>Z?n.main_room||n.religion_room||"—":n.religion_room||n.main_room||"—",L=n=>`
      ${re?`<span class="inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">สี: ${p(n.house_color||"—")}</span>`:""}
      ${ne?`<span class="inline-flex px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-medium">เสื้อ: ${p(n.sports_shirt_size||"—")}</span>`:""}`,v=(n,t="w-12 h-16")=>n.image_url?`<img src="${p(n.image_url)}" class="${t} rounded-2xl object-cover bg-gray-100 border border-gray-100 shadow-sm" loading="lazy" />`:`<div class="${t} rounded-2xl bg-sky-100 text-sky-700 border border-sky-100 shadow-sm flex items-center justify-center font-bold">${p((n.full_name||"?").trim().slice(0,1))}</div>`,W=$.map((n,t)=>`
      <tr class="student-status-target cursor-pointer transition ${n.is_active?"bg-white hover:bg-emerald-50/40":"bg-gray-50 text-gray-400 hover:bg-gray-100"}"
        data-enrollment-id="${n.enrollment_id}" data-next="${n.is_active?"false":"true"}" data-name="${p(n.full_name)}">
        <td class="px-3 py-2 text-center text-xs text-gray-400">${t+1}</td>
        <td class="px-3 py-2">${v(n)}</td>
        <td class="px-3 py-2 font-mono text-sm">${p(n.student_code)}</td>
        <td class="px-3 py-2">
          <p class="font-semibold text-gray-800 ${n.is_active?"":"line-through text-gray-400"}">${p(n.full_name)}</p>
          <p class="text-xs text-gray-400">${p(c(n))}</p>
          <div class="mt-1 flex flex-wrap gap-1">${L(n)}</div>
        </td>
        ${re?`<td class="px-3 py-2 text-center text-sm text-gray-600">${p(n.house_color||"—")}</td>`:""}
        ${ne?`<td class="px-3 py-2 text-center text-sm text-gray-600">${p(n.sports_shirt_size||"—")}</td>`:""}
        ${G?`<td class="px-3 py-2 text-center">${de(n)}</td>`:""}
        <td class="px-3 py-2 text-center">
          <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold ${n.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${n.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </td>
      </tr>`).join(""),A=$.map(n=>`
      <button type="button"
        class="student-status-target text-left rounded-2xl border p-4 transition ${n.is_active?"border-emerald-300 bg-white shadow-[0_0_0_3px_rgba(16,185,129,0.12),0_8px_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.18),0_10px_24px_rgba(16,185,129,0.16)]":"border-gray-300 bg-gray-50 opacity-80 hover:opacity-100"}"
        data-enrollment-id="${n.enrollment_id}" data-next="${n.is_active?"false":"true"}" data-name="${p(n.full_name)}">
        <div class="flex items-start justify-between gap-3">
          ${v(n,"w-20 h-28")}
          <span class="px-2 py-1 rounded-full text-[11px] font-semibold ${n.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${n.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </div>
        <p class="mt-3 font-bold text-gray-800 ${n.is_active?"":"line-through text-gray-400"}">${p(n.full_name)}</p>
        <p class="text-xs font-mono text-sky-700 mt-0.5">${p(n.student_code)}</p>
        <p class="text-xs text-gray-400 mt-0.5">${p(c(n))}</p>
        <div class="mt-2 flex flex-wrap gap-1">${L(n)}</div>
      </button>`).join("");_e(`<div class="animate-fade">
      <div id="students-back-placeholder" class="hidden"></div>
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-gray-700">ทั้งหมด ${$.length} คน · กำลังเรียน ${m} คน</p>
            <p class="text-xs text-gray-400 mt-0.5">ปิดสถานะเมื่อนักเรียนออกกลางคัน ระบบจะไม่ดึงไปเช็คชื่อ/ใบรายชื่อ</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${ee==="table"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="table" title="มุมมองตาราง">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M10 6h4M10 18h4M3 6h4M3 18h4M17 6h4M17 18h4"/></svg>
              </button>
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${ee==="grid"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="grid" title="มุมมองกริด">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </button>
            </div>
            <button id="students-sync-enroll" class="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700" title="รีเฟรชรายชื่อนักเรียนในห้องนี้ตามข้อมูลล่าสุด">🔄 รีเฟรชรายชื่อ</button>
            <button id="students-add" class="px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700">＋ เพิ่มนักเรียน</button>
            <button id="students-roster" class="px-3 py-2 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700">🖨️ สร้างใบรายชื่อ</button>
            <button id="students-print-qr" class="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700">🖨️ พิมพ์ QR Code</button>
          </div>
        </div>
        ${$.length?ee==="grid"?`
          <div class="p-4 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            ${A}
          </div>`:`
          <div class="overflow-auto">
            <table class="w-full text-sm">
              <thead class="bg-gray-50 text-gray-500">
                <tr>
                  <th class="px-3 py-2 text-center w-12">#</th>
                  <th class="px-3 py-2 text-left w-16">รูป</th>
                  <th class="px-3 py-2 text-left w-28">รหัส</th>
                  <th class="px-3 py-2 text-left">นักเรียน</th>
                  ${re?'<th class="px-3 py-2 text-center w-24">ประจำสี</th>':""}
                  ${ne?'<th class="px-3 py-2 text-center w-28">ไซด์เสื้อ</th>':""}
                  ${G?'<th class="px-3 py-2 text-center w-24">สถานะพิเศษ</th>':""}
                  <th class="px-3 py-2 text-center w-28">สถานะ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">${W}</tbody>
            </table>
          </div>`:`
          <div class="p-12 text-center text-gray-400">
            <p class="text-4xl mb-3">👥</p>
            <p class="font-medium">ยังไม่มีนักเรียนในรายวิชานี้</p>
          </div>`}
      </div>
    </div>`);const s=()=>window._openStudentManager(o);document.querySelectorAll("[data-special-enrollment]").forEach(n=>{n.addEventListener("change",async()=>{try{await As(n.dataset.specialEnrollment,n.value),U("บันทึกสถานะพิเศษแล้ว","success")}catch(t){U("บันทึกไม่สำเร็จ: "+ce(t),"error")}})}),(T=document.getElementById("students-roster"))==null||T.addEventListener("click",()=>window._openRosterPicker(o)),(k=document.getElementById("students-print-qr"))==null||k.addEventListener("click",()=>{window._pendingQRClassId=o,window._navTo("student-qr-print")}),(P=document.getElementById("students-sync-enroll"))==null||P.addEventListener("click",async n=>{var b;const t=n.currentTarget,r=t.textContent;t.disabled=!0,t.textContent="กำลังรีเฟรช...";try{await Bs(),U("รีเฟรชรายชื่อสำเร็จ","success"),((b=window._loadClassTab)==null?void 0:b.call(window,"students"))??window._openStudentManager(o)}catch{U("รีเฟรชไม่สำเร็จ","error"),t.disabled=!1,t.textContent=r}}),document.querySelectorAll(".student-view-toggle").forEach(n=>{n.addEventListener("click",()=>{localStorage.setItem(q,n.dataset.view),s()})}),document.querySelectorAll(".student-status-target").forEach(n=>{n.addEventListener("click",()=>{var S;const t=n.dataset.next==="true",r=n.dataset.name||"นักเรียน";(S=document.getElementById("student-status-confirm"))==null||S.remove();const b=document.createElement("div");b.id="student-status-confirm",b.className="fixed inset-0 z-[95] bg-white flex flex-col",t?b.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-emerald-100 text-emerald-700">
                ✓
              </div>
              <h3 class="text-2xl font-bold text-gray-800">เปิดสถานะกำลังเรียน?</h3>
              <p class="mt-3 text-gray-500">${p(r)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะกลับมาอยู่ในเช็คชื่อ/ใบรายชื่อของรายวิชานี้</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-700">ยืนยัน</button>
              </div>
            </div>
          </div>`:b.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-red-50 text-red-500 border border-red-100 shadow-sm">
                🗑️
              </div>
              <h3 class="text-2xl font-bold text-gray-900">ลบนักเรียนออกจากห้องเรียนนี้?</h3>
              <p class="mt-3 text-gray-800 font-semibold text-lg">${p(r)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะถูกลบออกจากรายวิชานี้ และระบบซิงก์หรือปุ่มรีเฟรชจะไม่เพิ่มกลับมาอีก<br/>หากต้องการนำกลับ สามารถใช้ปุ่ม “เพิ่มนักเรียน” ได้ภายหลัง</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700">ยืนยันการลบ</button>
              </div>
            </div>
          </div>`,document.body.appendChild(b),b.querySelector("#student-status-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#student-status-ok").addEventListener("click",async()=>{try{t?(await Rs(n.dataset.enrollmentId,!0),U("เปิดสถานะกำลังเรียนแล้ว","success")):(await Ns(n.dataset.enrollmentId),U("ลบนักเรียนออกจากห้องเรียนนี้แล้ว","success")),b.remove(),s()}catch(R){U("ดำเนินการไม่สำเร็จ: "+ce(R),"error")}})})}),(D=document.getElementById("students-add"))==null||D.addEventListener("click",()=>{var Y;(Y=document.getElementById("add-student-modal"))==null||Y.remove();const n=document.createElement("div");n.id="add-student-modal",n.className="fixed inset-0 z-[90] bg-white flex flex-col animate-fade",n.innerHTML=`
        <div class="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 class="text-xl font-bold text-gray-800">เพิ่มนักเรียนเข้ารายวิชา (หลายคน)</h3>
            <p class="text-xs text-gray-500 mt-1">${p(I.subject_name||"")} · ${p(l.class_name||"")}</p>
          </div>
          <button id="add-student-close" class="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-semibold hover:bg-sky-700 shadow transition">เสร็จสิ้น</button>
        </div>
        <div class="flex-1 overflow-auto p-5 max-w-2xl w-full mx-auto space-y-6">
          <div class="bg-gray-50 border border-gray-200 rounded-3xl p-6">
            <label class="block text-sm font-bold text-gray-700 mb-2">ยิงบาร์โค้ด หรือกรอกรหัสนักเรียนเพื่อเพิ่มทันที</label>
            <div class="flex gap-2">
              <input id="add-student-code" class="${qe} text-lg font-mono flex-1 bg-white" placeholder="กรอกรหัสแล้วกด Enter" autocomplete="off" autofocus />
              <button id="add-student-search-btn" class="px-5 py-2.5 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 shadow-sm transition">เพิ่ม</button>
            </div>
            <div id="add-student-status" class="mt-3 text-sm"></div>
          </div>
          
          <!-- รายชื่อนักเรียนที่เพิ่งเพิ่มเข้ามา -->
          <div class="border-t border-gray-100 pt-4">
            <h4 class="text-sm font-bold text-gray-700 mb-3">นักเรียนที่เพิ่มสำเร็จในรอบนี้ (<span id="added-count">0</span> คน)</h4>
            <div id="added-students-list" class="space-y-2">
              <p class="text-xs text-gray-400 italic">ยังไม่มีการเพิ่มในรอบนี้</p>
            </div>
          </div>
        </div>`,document.body.appendChild(n);const t=n.querySelector("#add-student-code"),r=n.querySelector("#add-student-search-btn"),b=n.querySelector("#add-student-status"),S=n.querySelector("#added-students-list"),R=n.querySelector("#added-count");let f=[];function h(){if(R.textContent=f.length,!f.length){S.innerHTML='<p class="text-xs text-gray-400 italic">ยังไม่มีการเพิ่มในรอบนี้</p>';return}S.innerHTML=f.map((F,te)=>`
          <div class="flex items-center gap-3 p-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl animate-fade">
            <span class="text-xs font-bold text-emerald-600 bg-emerald-100 w-5 h-5 flex items-center justify-center rounded-full">${f.length-te}</span>
            <div class="flex-1">
              <p class="text-sm font-bold text-gray-800">${p(F.full_name)}</p>
              <p class="text-xs font-mono text-gray-500">${p(F.student_code)} · ${p(c(F))}</p>
            </div>
            <span class="text-xs text-emerald-600 font-bold">✓ เพิ่มแล้ว</span>
          </div>
        `).join("")}const y=async()=>{const F=t.value.trim();if(F){b.innerHTML='<span class="text-gray-400">กำลังค้นหาและเพิ่ม...</span>',t.disabled=!0,r.disabled=!0;try{const te=await Ps(F);if(!te){b.innerHTML='<span class="text-red-500 font-medium">⚠️ ไม่พบนักเรียนรหัสนี้</span>';return}await Ds(o,te.id),f.unshift(te),h(),b.innerHTML=`<span class="text-emerald-600 font-medium">✓ เพิ่ม ${p(te.full_name)} สำเร็จ!</span>`,t.value=""}catch(te){b.innerHTML=`<span class="text-red-500 font-medium">⚠️ ${te.message||"เกิดข้อผิดพลาด"}</span>`}finally{t.disabled=!1,r.disabled=!1,t.focus()}}};n.querySelector("#add-student-close").addEventListener("click",()=>{n.remove(),s()}),r.addEventListener("click",y),t.addEventListener("keydown",F=>{F.key==="Enter"&&(F.preventDefault(),y())}),setTimeout(()=>t.focus(),50)})}catch($){U("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+ce($),"error"),Ee(e)}}}async function Ee(e,o={}){var d,T;const l=o.showAllTerms??!1;if(je("my-classes"),Ie("ห้องเรียนของฉัน","classes"),!(e!=null&&e.id)){_e(`<div class="max-w-md mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">⚠️</p>
      <p class="font-medium text-gray-600">ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่</p>
    </div>`);return}_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[k,P,D,$]=await Promise.all([ft((e==null?void 0:e.id)??null),Le().catch(()=>({})),e!=null&&e.id?vt(e.id).catch(()=>[]):Promise.resolve([]),Wt().catch(()=>[])]),O=Object.fromEntries($.map(s=>[s.id,s])),q=parseInt(P.academicYear??2568),ee=parseInt(P.semester??1),[m,I,Z]=await Promise.all([e!=null&&e.id?ze(e.id,q,ee).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?yt(e.id).catch(()=>[]):Promise.resolve([]),lt().catch(()=>[])]),G={};I.forEach(s=>{G[s.class_id]||(G[s.class_id]=[]),G[s.class_id].push(s.teacher_schedule_id)});const re=Object.fromEntries(m.map(s=>[s.id,s])),ne=Object.fromEntries(Z.map(s=>[s.period_no,s])),K=Object.fromEntries((D??[]).map(s=>[s.room_key,s.color_hex]));window._classCache=Object.fromEntries(k.map(s=>[s.id,s])),window._classesFlat=k;const de=s=>s.academic_year==null||+s.academic_year===q&&+s.semester===ee,c=k.filter(s=>!de(s)).length,L=l?k:k.filter(de),v=new Map;L.forEach(s=>{const n=s.master_subjects??{},t=[s.course_id??n.id??"",n.subject_code??"",n.subject_name??"",n.subject_group??""],r=t.some(Boolean)?t.join("|"):`class-${s.id}`;v.has(r)||v.set(r,{key:r,masterSubject:n,classes:[]}),v.get(r).classes.push(s)});const W=[...v.values()].map(s=>({...s,classes:s.classes.sort((n,t)=>{const r=Ve(n.id,G,re,ne),b=Ve(t.id,G,re,ne);return r!==b?r-b:String(n.class_name??"").localeCompare(String(t.class_name??""),"th")})})).sort((s,n)=>{var b,S;const t=Math.min(...s.classes.map(R=>Ve(R.id,G,re,ne))),r=Math.min(...n.classes.map(R=>Ve(R.id,G,re,ne)));return t!==1/0&&r!==1/0&&t!==r?t-r:String(((b=s.masterSubject)==null?void 0:b.subject_name)??"").localeCompare(String(((S=n.masterSubject)==null?void 0:S.subject_name)??""),"th")});_e(`<div class="animate-fade">
      <div class="mb-4">
        ${c>0?`
        <button id="toggle-term-view" type="button"
          class="w-full text-left px-4 py-2.5 rounded-xl border border-dashed text-xs font-semibold transition ${l?"border-indigo-200 bg-indigo-50 text-indigo-700":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
          ${l?"🔼 กำลังแสดงทุกภาคเรียน — คลิกเพื่อแสดงเฉพาะภาคเรียนปัจจุบัน":`🔽 มีห้องเรียนภาคเรียนก่อนหน้าอีก ${c} ห้อง — คลิกเพื่อแสดง (แก้ไขคะแนน/เช็คชื่อย้อนหลังได้ตามปกติ)`}
        </button>`:""}
      </div>
      ${L.length?`
      <div class="space-y-5">
        ${W.map(s=>{const n=s.masterSubject??{};return`
          <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3">
              <div class="min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-full">${n.subject_code??"—"}</span>
                  <h3 class="font-bold text-gray-800 text-base">${n.subject_name??"—"}</h3>
                </div>
                <p class="text-xs text-gray-400 mt-1">${s.classes.length} ห้องเรียนในคอร์สนี้</p>
              </div>
            </div>
            <div class="grid gap-3 p-4 md:grid-cols-2">
        ${s.classes.map(t=>{var te,oe;const r=t.master_subjects,b=mt(P,t),S=["AGM","AGMVOC"].includes(r==null?void 0:r.subject_group),R={teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:r==null?void 0:r.subject_name,fallbackId:t.id},f=Ge(R,K);window._classColorCache||(window._classColorCache={}),window._classColorCache[t.id]=f;const h=S?{text:"กลุ่มวิชาศาสนา",cls:"bg-amber-50 text-amber-700"}:t.skill_group?{text:`กลุ่มทักษะ: ${t.skill_group}`,cls:"bg-blue-50 text-blue-700"}:null,y=t.classroom_id?O[t.classroom_id]:null,Y=Ve(t.id,G,re,ne),F=(()=>{if(!(G[t.id]??[]).length)return`<button onclick="event.stopPropagation();window._openCombinedEdit(${t.id},'schedule')"
                class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium hover:underline transition">🔗 เชื่อมตารางสอน</button>`;if(Y===1/0)return'<span class="text-[11px] text-gray-400">📅 ไม่พบข้อมูลตาราง</span>';if(Y<=0)return'<span class="text-[11px] text-emerald-600 font-semibold">🟢 กำลังสอนอยู่</span>';if(Y<60)return`<span class="text-[11px] text-emerald-600">⏱ สอนในอีก ${Math.round(Y)} นาที</span>`;const a=Math.floor(Y/60),x=Math.round(Y%60);return a<24?`<span class="text-[11px] text-blue-600">⏱ สอนในอีก ${a} ชม. ${x} นาที</span>`:`<span class="text-[11px] text-gray-500">⏱ สอนในอีก ${Math.floor(a/24)} วัน</span>`})();return`
          <div class="rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer group"
               style="background:${f.soft}; border-color:${f.border}"
               onclick="window._openClassDetail(${t.id})">
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span class="px-2 py-0.5 bg-white/80 text-emerald-700 text-xs font-mono rounded-full">${(r==null?void 0:r.subject_code)??"—"}</span>
                    ${(r==null?void 0:r.credit)!=null?`<span class="px-2 py-0.5 bg-white/80 text-gray-500 text-xs rounded-full">${r.credit} หน่วยกิต</span>`:""}
                    ${h?`<span class="px-2 py-0.5 ${h.cls} text-xs rounded-full">${h.text}</span>`:""}
                    ${t.google_sheet_id?'<span class="px-2 py-0.5 bg-white/80 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
                  </div>
                  <h3 class="font-bold text-gray-800 text-base">${(r==null?void 0:r.subject_name)??"—"}</h3>
                  <p class="text-sm text-gray-500 mt-0.5">ห้อง: <span class="font-semibold" style="color:${f.text}">${t.class_name}</span>
                    ${y?`<span class="ml-2 text-[11px] text-gray-400">📍 ${y.building} ${y.room_number}</span>`:""}
                  </p>
                </div>
                <div class="flex gap-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  <button onclick="event.stopPropagation();window._openClassDashboard(${t.id})"
                    class="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-white/70 rounded-lg transition text-sm" title="Dashboard ห้องเรียน">📈</button>
                  <button onclick="event.stopPropagation();window._openExamDocsForClass(${t.id})"
                    class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-white/70 rounded-lg transition text-sm" title="เอกสารสอบ">🧾</button>
                  <button onclick="event.stopPropagation();window._copyClass(${t.id},'${((te=t.class_name)==null?void 0:te.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-gray-400 hover:text-violet-600 hover:bg-white/70 rounded-lg transition text-sm" title="ทำสำเนาห้องเรียน">📋</button>
                  <button onclick="event.stopPropagation();window._openCombinedEdit(${t.id})"
                    class="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-white/70 rounded-lg transition text-sm" title="แก้ไข">✏️</button>
                  <button onclick="event.stopPropagation();window._deleteClass(${t.id},'${((oe=t.class_name)==null?void 0:oe.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-red-300 hover:text-red-500 hover:bg-white/70 rounded-lg transition text-sm" title="ลบ">🗑️</button>
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between">
                ${F}
                <span class="text-[11px] text-gray-400 group-hover:text-indigo-500 transition">เปิดห้องเรียน →</span>
              </div>
            </div>
          </div>`}).join("")}
            </div>
          </section>`}).join("")}
      </div>`:`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">🏫</p>
        <p class="font-medium">ยังไม่มีห้องเรียน</p>
        <p class="text-xs mt-1">ไปที่ "คอร์สวิชาของฉัน" แล้วกด "＋ห้อง"</p>
      </div>`}
    </div>`),(d=document.getElementById("toggle-term-view"))==null||d.addEventListener("click",()=>Ee(e,{showAllTerms:!l})),window._openPP5Doc=s=>os(s),window._openExamDocsForClass=s=>ms(s),window._openClassDetail=s=>kt(e,s,{classes:k,scheduleMap:re,linksByClass:G,periodMap:ne,classrooms:$,copyCfg:P}),window._openClassDashboard=async s=>{var r;const n=(r=window._classCache)==null?void 0:r[s];if(!n)return;const{openClassDashboard:t}=await fe(async()=>{const{openClassDashboard:b}=await import("./teacher-views-dashboard-CdUOoqKF.js");return{openClassDashboard:b}},__vite__mapDeps([0,1,2]));t(s,n,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})},window._openCombinedEdit=(s,n="info")=>{var r;const t=(r=window._classCache)==null?void 0:r[s];t&&fs(e,t,$,m,G,ne,re,()=>Ee(e),n)},window._assignClassroom=s=>{var R,f,h;const n=(R=window._classCache)==null?void 0:R[s];if(!n)return;const t=[...new Set($.map(y=>y.building))];(f=document.getElementById("assign-room-modal"))==null||f.remove();const r=document.createElement("div");r.id="assign-room-modal",r.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",r.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">📍 ระบุห้องสอน</h3>
          <p class="text-xs text-gray-400 mb-4">${n.class_name} · ${((h=n.master_subjects)==null?void 0:h.subject_name)??""}</p>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
              <select id="arm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
                <option value="">— เลือกอาคาร —</option>
                ${t.map(y=>`<option value="${y}">${y}</option>`).join("")}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
              <select id="arm-room" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
                <option value="">— เลือกอาคารก่อน —</option>
              </select>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="arm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="arm-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
            </div>
          </div>
        </div>`,document.body.appendChild(r);const b=r.querySelector("#arm-building"),S=r.querySelector("#arm-room");if(n.classroom_id&&O[n.classroom_id]){const y=O[n.classroom_id];b.value=y.building,b.dispatchEvent(new Event("change"))}b.addEventListener("change",()=>{const y=b.value,Y=$.filter(F=>F.building===y);S.innerHTML='<option value="">— เลือกห้อง —</option>'+Y.map(F=>{const te=F.name?`${F.room_number} — ${F.name}`:F.room_number,oe=F.id===n.classroom_id?"selected":"";return`<option value="${F.id}" ${oe}>${te}</option>`}).join("")}),r.querySelector("#arm-cancel").addEventListener("click",()=>r.remove()),r.querySelector("#arm-save").addEventListener("click",async()=>{var F;const y=r.querySelector("#arm-save"),Y=S.value?parseInt(S.value):null;y.disabled=!0,y.textContent="⏳";try{await Kt(s,Y),(F=window._classCache)!=null&&F[s]&&(window._classCache[s].classroom_id=Y),U("บันทึกห้องสอนแล้ว ✅","success"),r.remove(),Ee(e)}catch(te){U("บันทึกไม่สำเร็จ: "+ce(te),"error"),y.disabled=!1,y.textContent="บันทึก"}})},window._openAttendance=s=>{var t;const n=(t=window._classCache)==null?void 0:t[s];n&&wt(e,n)},window._openGrades=s=>{var t;const n=(t=window._classCache)==null?void 0:t[s];n&&ht(e,n)},window._openScoreCols=(s,n)=>{var r;const t=(r=window._classCache)==null?void 0:r[s];mn(e,s,n,t)},window._editClass=s=>{var t;const n=(t=window._classCache)==null?void 0:t[s];n&&Ln(e,n)},window._deleteClass=async(s,n)=>{if(await rt({title:`ลบห้องเรียน "${n}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await Yt(s),U(`ลบ "${n}" แล้ว`,"success"),Ee(e)}catch(r){U("ลบไม่สำเร็จ: "+ce(r),"error")}},window._copyClass=s=>{var b;const n=(b=window._classCache)==null?void 0:b[s];if(!n)return;const t=n.master_subjects??{},r={id:n.course_id,subject_name:t.subject_name??"—",subject_code:t.subject_code??"",credit:t.credit??"",grade_level:t.grade_level??"",dept:t.dept??n.dept??"",subject_group:t.subject_group??""};En(e,r,{cloneFrom:s,srcSkill:n.skill_group??""})};const A=async(s,n,t="landscape",r="all")=>{try{const[b,S,R]=await Promise.all([Le().catch(()=>({})),He(s.id),n==="score"?Ut(s.id):Promise.resolve([])]),f=r==="ชาย"||r==="หญิง"?r:"ทั้งหมด",h=f==="ทั้งหมด"?S:S.filter(Q=>String(Q.gender||"").trim()===f);if(!h.length){U(`ไม่พบนักเรียน${f==="ทั้งหมด"?"":f}ในห้องนี้`,"warning");return}const y=s.master_subjects??{},Y=["ACDMVOC","AGMVOC"].includes(y.subject_group),F=Y?b.porworCollegeName||b.samaiSchoolName||"โรงเรียน":b.samaiSchoolName||b.porworCollegeName||"โรงเรียน",te=Y?b.porworLogoBwUrl||b.porworLogoUrl||b.samaiLogoBwUrl||b.samaiLogoUrl||"":b.samaiLogoBwUrl||b.samaiLogoUrl||b.porworLogoBwUrl||b.porworLogoUrl||"",oe=await $n(te),a=n==="score"?"ใบรายชื่อนักเรียนสำหรับบันทึกคะแนน":"ใบรายชื่อนักเรียนสำหรับเช็คชื่อ",x=t!=="portrait",w=x?"297mm":"210mm",C=x?"210mm":"297mm",B=R.map(Q=>{const ae=Q.assignment_name||"-";return`
          <th class="score-col ${ae.length>8||R.length>(x?10:6)?"long":""}">
            <div class="score-label" title="${p(ae)}">${p(ae)}</div>
            <small>/${p(Q.max_score??"")}</small>
          </th>`}).join(""),_=R.map(()=>'<td class="score-cell"></td>').join(""),E=Array.from({length:12},(Q,ae)=>`<th class="check-col">${ae+1}</th>`).join(""),M=Array.from({length:12},()=>'<td class="check-cell"></td>').join(""),se=h.map((Q,ae)=>`
          <tr>
            <td class="no">${ae+1}</td>
            <td class="code">${p(Q.student_code)}</td>
            <td class="name">${p(Q.full_name)}</td>
            ${n==="score"?_:M}
            <td class="note"></td>
          </tr>`).join(""),J=`<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <title>${p(a)} - ${p(y.subject_name||"")}</title>
  <style>
    @page { size: A4 ${x?"landscape":"portrait"}; margin: 10mm; }
    * { box-sizing: border-box; }
    body { font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; color: #111827; margin: 0; background: #f3f4f6; }
    .page { width: ${w}; min-height: ${C}; margin: 12px auto; padding: 10mm; background: white; }
    .header { display: grid; grid-template-columns: 70px 1fr 150px; align-items: center; gap: 12px; margin-bottom: 10px; }
    .logo-wrap { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background: transparent; }
    .logo { width: 58px; height: 58px; object-fit: contain; filter: grayscale(1) contrast(1.18); }
    .school { text-align: center; line-height: 1.3; }
    .school h1 { margin: 0; font-size: 20px; }
    .school h2 { margin: 3px 0 0; font-size: 16px; font-weight: 700; }
    .meta { font-size: 12px; line-height: 1.7; }
    .meta strong { display: inline-block; min-width: 66px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: ${x?"11px":"10px"}; }
    th, td { border: 1px solid #111827; padding: 3px 4px; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 700; text-align: center; }
    .no { width: 28px; text-align: center; }
    .code { width: 62px; text-align: center; font-family: monospace; }
    .name { width: ${x?"150px":"120px"}; }
    .check-col, .check-cell { width: ${x?"34px":"24px"}; height: 22px; text-align: center; }
    .score-col, .score-cell { width: ${x?"58px":"42px"}; text-align: center; }
    .score-col { height: 46px; vertical-align: bottom; }
    .score-label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.15; }
    .score-col.long { height: 72px; padding: 2px 1px; }
    .score-col.long .score-label {
      width: 66px;
      max-width: 66px;
      margin: 0 auto 2px;
      transform: rotate(-28deg);
      transform-origin: 50% 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .score-col small { display: block; color: #6b7280; font-weight: 400; }
    .note { width: 70px; }
    .signature { display: flex; justify-content: flex-end; margin-top: 18px; font-size: 12px; }
    .signature div { width: 220px; text-align: center; line-height: 2; }
    @media print {
      body { background: white; }
      .page { margin: 0; box-shadow: none; width: auto; min-height: auto; padding: 0; }
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="header">
      <div class="logo-wrap">${oe?`<img class="logo" src="${p(oe)}" />`:""}</div>
      <div class="school">
        <h1>${p(F)}</h1>
        <h2>${p(a)}${f==="ทั้งหมด"?"":` (${p(f)})`}</h2>
      </div>
      <div class="meta">
        <div><strong>ภาคเรียน</strong> ${p(b.semester||"")}/${p(b.academicYear||"")}</div>
        <div><strong>ห้อง</strong> ${p(s.class_name||"")}</div>
        <div><strong>รายชื่อ</strong> ${p(f)}</div>
        <div><strong>จำนวน</strong> ${h.length} คน</div>
      </div>
    </section>
    <section class="meta" style="margin-bottom:8px">
      <div><strong>รายวิชา</strong> ${p(y.subject_name||"")}</div>
      <div><strong>รหัสวิชา</strong> ${p(y.subject_code||"")}</div>
      <div><strong>ครูผู้สอน</strong> ${p((e==null?void 0:e.full_name)||"")}</div>
    </section>
    <table>
      <thead>
        <tr>
          <th class="no">#</th>
          <th class="code">รหัส</th>
          <th class="name">ชื่อ-นามสกุล</th>
          ${n==="score"?B:E}
          <th class="note">หมายเหตุ</th>
        </tr>
      </thead>
      <tbody>${se}</tbody>
    </table>
    <section class="signature">
      <div>
        ลงชื่อ ........................................ ครูผู้สอน<br />
        (${p((e==null?void 0:e.full_name)||"")})
      </div>
    </section>
  </main>
</body>
</html>`;un(J)}catch(b){U("สร้างใบรายชื่อไม่สำเร็จ: "+ce(b),"error")}};window._openRosterPicker=s=>{var S,R,f;const n=(S=window._classCache)==null?void 0:S[s];if(!n)return;(R=document.getElementById("roster-picker-modal"))==null||R.remove();const t=document.createElement("div");t.id="roster-picker-modal",t.className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40",t.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">สร้างใบรายชื่อ</h3>
        <p class="text-xs text-gray-400 mb-4">${p(((f=n.master_subjects)==null?void 0:f.subject_name)||"")} · ${p(n.class_name||"")}</p>
        <div class="mb-4 rounded-xl border border-gray-100 bg-gray-50 p-3">
          <p class="text-xs font-semibold text-gray-500 mb-2">แนวหน้ากระดาษ</p>
          <div class="grid grid-cols-2 gap-2">
            <label class="cursor-pointer">
              <input class="hidden roster-orientation" type="radio" name="roster-orientation" value="portrait" />
              <span class="roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600">แนวตั้ง</span>
            </label>
            <label class="cursor-pointer">
              <input class="hidden roster-orientation" type="radio" name="roster-orientation" value="landscape" checked />
              <span class="roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700">แนวนอน</span>
            </label>
          </div>
        </div>
        <div class="mb-4 rounded-xl border border-gray-100 bg-gray-50 p-3">
          <p class="text-xs font-semibold text-gray-500 mb-2">รายชื่อนักเรียนที่ต้องการพิมพ์</p>
          <div class="grid grid-cols-3 gap-2">
            <label class="cursor-pointer">
              <input class="hidden roster-gender" type="radio" name="roster-gender" value="all" checked />
              <span class="roster-gender-card block text-center rounded-lg border border-violet-500 bg-violet-50 px-2 py-2 text-sm font-semibold text-violet-700">ทั้งหมด</span>
            </label>
            <label class="cursor-pointer">
              <input class="hidden roster-gender" type="radio" name="roster-gender" value="ชาย" />
              <span class="roster-gender-card block text-center rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600">ชาย</span>
            </label>
            <label class="cursor-pointer">
              <input class="hidden roster-gender" type="radio" name="roster-gender" value="หญิง" />
              <span class="roster-gender-card block text-center rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600">หญิง</span>
            </label>
          </div>
        </div>
        <div class="grid gap-3">
          <button id="btn-roster-att" class="py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">✅ สร้างใบเช็คชื่อ</button>
          <button id="btn-roster-score" class="py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">📝 สร้างใบบันทึกคะแนน</button>
          <button id="btn-roster-close" class="py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`,document.body.appendChild(t);const r=()=>{var h;return((h=t.querySelector(".roster-orientation:checked"))==null?void 0:h.value)||"landscape"},b=()=>{var h;return((h=t.querySelector(".roster-gender:checked"))==null?void 0:h.value)||"all"};t.querySelectorAll(".roster-orientation").forEach(h=>{h.addEventListener("change",()=>{t.querySelectorAll(".roster-orientation-card").forEach(y=>{y.className="roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600"}),h.nextElementSibling.className="roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700"})}),t.querySelectorAll(".roster-gender").forEach(h=>{h.addEventListener("change",()=>{t.querySelectorAll(".roster-gender-card").forEach(y=>{y.className="roster-gender-card block text-center rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600"}),h.nextElementSibling.className="roster-gender-card block text-center rounded-lg border border-violet-500 bg-violet-50 px-2 py-2 text-sm font-semibold text-violet-700"})}),t.querySelector("#btn-roster-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",h=>{h.target===t&&t.remove()}),t.querySelector("#btn-roster-att").addEventListener("click",()=>{const h=r(),y=b();t.remove(),A(n,"attendance",h,y)}),t.querySelector("#btn-roster-score").addEventListener("click",()=>{const h=r(),y=b();t.remove(),A(n,"score",h,y)})},window._openStudentManager=s=>xs(e,s),window._openClassCopyModal=s=>{var h,y;const n=(h=window._classCache)==null?void 0:h[s];if(!n)return;const t=mt(P,n);if(!(t!=null&&t.id)){U("ยังไม่ได้ตั้งค่าไฟล์ต้นฉบับสำหรับกลุ่มวิชานี้","warning");return}(y=document.getElementById("class-copy-modal"))==null||y.remove();const r=n.master_subjects??{},b=`${r.subject_name||"ปพ5"}_${n.class_name||""}_${(e==null?void 0:e.full_name)||""}`.replace(/\s+/g," ").trim(),S=(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||"",R=document.createElement("div");R.id="class-copy-modal",R.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",R.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">🔗 ทำสำเนาชีทสำหรับรายวิชานี้</h3>
        <p class="text-xs text-gray-400 mb-4">${p(t.label||"")} · ${p(r.subject_name||"")} · ${p(n.class_name||"")}</p>
        <label class="block text-sm font-semibold text-gray-700 mb-1">ตั้งชื่อไฟล์สำเนา</label>
        <input id="copy-file-name" class="${qe}" value="${p(b)}" />
        <label class="block text-sm font-semibold text-gray-700 mt-3 mb-1">อีเมลที่จะให้สิทธิ์ไฟล์</label>
        <input id="copy-target-email" type="email" class="${qe}" value="${p(S)}" placeholder="teacher@example.com" />
        <p class="text-xs text-gray-400 mt-2">ระบบจะสร้างสำเนาในบัญชีผู้ดูแลและแชร์สิทธิ์แก้ไขให้ email นี้ พร้อมบันทึก Sheet ID กลับเข้ารายวิชาอัตโนมัติ</p>
        <div id="copy-result" class="hidden mt-4 rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-sm"></div>
        <div class="flex gap-3 mt-5">
          <button id="copy-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="copy-go" class="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600">สร้างสำเนา</button>
        </div>
      </div>`,document.body.appendChild(R),R.querySelector("#copy-cancel").addEventListener("click",()=>R.remove()),R.addEventListener("click",Y=>{Y.target===R&&R.remove()});const f=Y=>{const F=_sheetCopyUrl(t.id);R.querySelector("#copy-result").innerHTML=`
          <div class="rounded-xl bg-amber-50 border border-amber-100 p-3">
            <p class="font-semibold text-amber-800 mb-1">ใช้วิธีทำสำเนาด้วย Google แทน</p>
            <p class="text-xs text-amber-700 mb-3">${p(Y||"หากสร้างอัตโนมัติไม่สำเร็จ ให้กดปุ่มด้านล่างเพื่อทำสำเนา แล้วนำลิงก์ไฟล์ใหม่มาวาง")}</p>
            <a href="${F}" target="_blank" rel="noopener noreferrer"
              class="block w-full py-2 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-700">
              เปิดหน้าทำสำเนาของ Google
            </a>
            <label class="block text-xs font-semibold text-gray-600 mt-3 mb-1">วางลิงก์หรือ ID ของไฟล์ที่ทำสำเนาเสร็จแล้ว</label>
            <input id="manual-sheet-id" class="${qe}" placeholder="https://docs.google.com/spreadsheets/d/..." />
            <button id="manual-save-sheet" class="mt-3 w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
              บันทึก Sheet ID เข้ารายวิชา
            </button>
          </div>`,R.querySelector("#copy-result").classList.remove("hidden"),R.querySelector("#manual-save-sheet").addEventListener("click",async()=>{const te=R.querySelector("#manual-sheet-id"),oe=_extractSheetId(te.value);if(!oe){U("กรุณาวางลิงก์หรือ Sheet ID ของไฟล์สำเนา","warning");return}try{await st(n.id,{google_sheet_id:oe}),n.google_sheet_id=oe,U("บันทึก Sheet ID เข้ารายวิชาแล้ว","success"),R.remove(),Ee(e)}catch(a){U("บันทึก Sheet ID ไม่สำเร็จ: "+ce(a),"error")}})};R.querySelector("#copy-go").addEventListener("click",async()=>{const Y=R.querySelector("#copy-go"),F=R.querySelector("#copy-file-name").value.trim()||b||"สำเนาไฟล์ ปพ.5",te=R.querySelector("#copy-target-email").value.trim();Y.disabled=!0,Y.textContent="กำลังสร้าง...";try{const oe=await pn(t.id,F,te),a=oe.newSheetId;if(!a)throw new Error("GAS ไม่ได้ส่ง Sheet ID กลับมา");await st(n.id,{google_sheet_id:a}),n.google_sheet_id=a;const x=oe.url||_sheetUrl(a);R.querySelector("#copy-result").innerHTML=`
            <p class="font-semibold text-emerald-800 mb-2">สร้างไฟล์สำเนาและบันทึกเข้ารายวิชาแล้ว</p>
            <button id="copy-open" class="w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">เปิดไฟล์สำเนา</button>`,R.querySelector("#copy-result").classList.remove("hidden"),R.querySelector("#copy-open").addEventListener("click",()=>window.open(x,"_blank")),Y.textContent="สร้างแล้ว",U("สร้างสำเนาและบันทึก Sheet ID แล้ว","success"),setTimeout(()=>Ee(e),900)}catch(oe){Y.disabled=!1,Y.textContent="สร้างสำเนา",U("สร้างอัตโนมัติไม่สำเร็จ เปิดวิธีทำสำเนาด้วย Google แทน","warning"),f(ce(oe))}})},window._openSheetToolsModal=s=>{var b,S,R;const n=(b=window._classCache)==null?void 0:b[s];if(!(n!=null&&n.google_sheet_id))return;(S=document.getElementById("sheet-tools-modal"))==null||S.remove();const t=_sheetUrl(n.google_sheet_id),r=document.createElement("div");r.id="sheet-tools-modal",r.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",r.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">จัดการ Google Sheet</h3>
        <p class="text-xs text-gray-400 mb-4">${p(((R=n.master_subjects)==null?void 0:R.subject_name)||"")} · ${p(n.class_name||"")}</p>
        <div class="space-y-2">
          <button id="btn-share-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold">🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้</button>
          <button id="btn-open-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 text-sm font-semibold">📊 เปิดชีท</button>
          <button id="btn-copy-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-semibold">🔗 คัดลอกลิงก์ชีท</button>
          <button id="btn-open-sync" class="w-full text-left px-4 py-3 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100 text-sm font-semibold">🔗 Sync ข้อมูลไปชีท</button>
        </div>
        <button id="btn-sheet-tools-close" class="mt-4 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>`,document.body.appendChild(r),r.querySelector("#btn-sheet-tools-close").addEventListener("click",()=>r.remove()),r.addEventListener("click",f=>{f.target===r&&r.remove()}),r.querySelector("#btn-open-sheet").addEventListener("click",()=>window.open(t,"_blank")),r.querySelector("#btn-copy-sheet").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t),U("คัดลอกลิงก์ชีทแล้ว","success")}catch{U("คัดลอกไม่สำเร็จ","error")}}),r.querySelector("#btn-share-sheet").addEventListener("click",async()=>{const f=r.querySelector("#btn-share-sheet");f.disabled=!0,f.textContent="⏳ กำลังเปิดสิทธิ์...";try{const{shareSheetForView:h}=await fe(async()=>{const{shareSheetForView:y}=await import("./sports-portals.js_v_10.22-D7ID6515.js").then(Y=>Y.n);return{shareSheetForView:y}},__vite__mapDeps([3,4,5,2,6,7,8]));await h(n.google_sheet_id),U("ส่งคำสั่งเปิดสิทธิ์แล้ว กรุณารอสักครู่แล้วลองเปิดลิงก์","success"),f.textContent="✅ ส่งคำสั่งเปิดสิทธิ์แล้ว"}catch(h){f.disabled=!1,f.textContent="🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้",U("เปิดสิทธิ์ไม่สำเร็จ: "+ce(h),"error")}}),r.querySelector("#btn-open-sync").addEventListener("click",()=>{r.remove(),window._openSyncModal(s)})},window._openSyncModal=s=>{var r,b;const n=(r=window._classCache)==null?void 0:r[s];if(!n)return;(b=document.getElementById("sync-modal"))==null||b.remove();const t=document.createElement("div");t.id="sync-modal",t.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",t.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 text-base mb-1">🔗 Sync ไปยัง Google Sheet</h3>
          <p class="text-xs text-gray-400 mb-4">ห้อง: ${n.class_name} · Sheet: ✓</p>
          <div class="space-y-3 mb-5">
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" id="sync-opt-info" checked
                class="mt-0.5 w-4 h-4 rounded accent-violet-600" />
              <div>
                <p class="text-sm font-medium text-gray-700">ข้อมูลรายวิชา</p>
                <p class="text-xs text-gray-400">ชื่อวิชา รหัส หน่วยกิต ครู วันสอน หัวหน้าห้อง</p>
              </div>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" id="sync-opt-att" checked
                class="mt-0.5 w-4 h-4 rounded accent-teal-600" />
              <div>
                <p class="text-sm font-medium text-gray-700">เช็คชื่อ</p>
                <p class="text-xs text-gray-400">ม / ข / ส / ก / ป — คอลัมน์ N เป็นต้นไป</p>
              </div>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" id="sync-opt-score" checked
                class="mt-0.5 w-4 h-4 rounded accent-indigo-600" />
              <div>
                <p class="text-sm font-medium text-gray-700">คะแนน</p>
                <p class="text-xs text-gray-400">คะแนนย่อยตามคอลัมน์ที่ตั้งค่าไว้</p>
              </div>
            </label>
          </div>
          <div id="sync-progress" class="hidden mb-3 text-xs text-teal-600 font-medium"></div>
          <div class="flex gap-3">
            <button id="btn-sync-cancel"
              class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
              ยกเลิก
            </button>
            <button id="btn-sync-go"
              class="flex-1 py-2.5 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition">
              🔗 Sync ที่เลือก
            </button>
          </div>
        </div>`,document.body.appendChild(t),t.querySelector("#btn-sync-cancel").addEventListener("click",()=>t.remove()),t.addEventListener("click",S=>{S.target===t&&t.remove()}),t.querySelector("#btn-sync-go").addEventListener("click",async()=>{var _,E,M,se,J;const S=t.querySelector("#sync-opt-info").checked,R=t.querySelector("#sync-opt-att").checked,f=t.querySelector("#sync-opt-score").checked;if(!S&&!R&&!f){U("เลือกอย่างน้อย 1 รายการ","warning");return}const h=t.querySelector("#btn-sync-go"),y=t.querySelector("#sync-progress");h.disabled=!0,h.textContent="⏳ กำลัง Sync...",y.classList.remove("hidden");const{syncClassInfo:Y,syncAttendance:F,syncScores:te}=await fe(async()=>{const{syncClassInfo:Q,syncAttendance:ae,syncScores:u}=await import("./sports-portals.js_v_10.22-D7ID6515.js").then(i=>i.n);return{syncClassInfo:Q,syncAttendance:ae,syncScores:u}},__vite__mapDeps([3,4,5,2,6,7,8])),{getDepartments:oe,getTeachers:a,getScoreColumns:x,getStudentScores:w,getTeacherById:C}=await fe(async()=>{const{getDepartments:Q,getTeachers:ae,getScoreColumns:u,getStudentScores:i,getTeacherById:j}=await import("./api-Cf_Y4s92.js");return{getDepartments:Q,getTeachers:ae,getScoreColumns:u,getStudentScores:i,getTeacherById:j}},__vite__mapDeps([1,2])),B=[];try{if(S){y.textContent="📋 Sync ข้อมูลรายวิชา...";const[Q,ae,u]=await Promise.all([oe().catch(()=>[]),a().catch(()=>[]),(_=n.master_subjects)!=null&&_.teacher_id?C(n.master_subjects.teacher_id).catch(()=>null):Promise.resolve(null)]),i=u??e,j=Q.find(g=>{var X;return g.dept_name===((X=n.master_subjects)==null?void 0:X.dept)}),H=j!=null&&j.teacher_code?ae.find(g=>g.teacher_code===j.teacher_code):null,z=(j==null?void 0:j.head_name)||(H==null?void 0:H.full_name)||"";await Y(n.google_sheet_id,n,{full_name:(i==null?void 0:i.full_name)??"",phone:(i==null?void 0:i.phone)??""},{headStudentName:((E=n.students)==null?void 0:E.full_name)??"",deptName:((M=n.master_subjects)==null?void 0:M.dept)??"",headDeptName:z})}}catch(Q){B.push("รายวิชา: "+ce(Q))}try{if(R){y.textContent="✅ Sync เช็คชื่อ...";const Q=((se=n.master_subjects)==null?void 0:se.credit)??1,ae=((J=n.master_subjects)==null?void 0:J.subject_group)==="ACDMVOC",u=ae?await Is(n.id).catch(()=>[]):[],i=kn(n,Q,u.length?u:null,ae),[j,H]=await Promise.all([He(s),getClassAttendanceAll(s)]),z={};for(const g of H)z[g.student_id]||(z[g.student_id]={}),z[g.student_id][g.session_number]=g.status;await F(n.google_sheet_id,i,z,j)}}catch(Q){B.push("เช็คชื่อ: "+ce(Q))}try{if(f){y.textContent="📝 Sync คะแนน...";const[Q,ae,u]=await Promise.all([x(s),w(s),He(s)]);Q.length&&await te(n.google_sheet_id,Q,ae,u)}}catch(Q){B.push("คะแนน: "+ce(Q))}t.remove(),B.length?U(`Sync บางส่วนไม่สำเร็จ:
`+B.join(`
`),"error"):U(`Sync สำเร็จ — ${n.class_name}`,"success")})}}catch(k){console.error("[renderMyClasses] โหลดข้อมูลห้องเรียนไม่สำเร็จ",k);const P=p((k==null?void 0:k.message)||"ไม่ทราบสาเหตุ");_e(`<div class="max-w-xl mx-auto mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p class="text-3xl mb-3">⚠️</p>
      <h3 class="font-bold text-red-700">โหลดข้อมูลห้องเรียนไม่สำเร็จ</h3>
      <p class="mt-2 text-sm text-red-600 break-words">${P}</p>
      <button id="retry-my-classes" class="mt-5 px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700">ลองใหม่</button>
    </div>`),(T=document.getElementById("retry-my-classes"))==null||T.addEventListener("click",()=>Ee(e)),U("โหลดข้อมูลห้องเรียนไม่สำเร็จ: "+ce(k),"error")}}async function kt(e,o,l={}){je("my-classes"),Ie("ห้องเรียน"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[d,T,k]=await Promise.all([l.classes?Promise.resolve(l.classes):ft((e==null?void 0:e.id)??null),Le().catch(()=>({})),Wt().catch(()=>[])]),P=d,D=P.find(t=>t.id===o);if(!D){l.supervisorMode||Ee(e);return}const $=D.master_subjects??{},O=Object.fromEntries(k.map(t=>[t.id,t])),q=D.classroom_id?O[D.classroom_id]:null;window._classCache=Object.fromEntries(P.map(t=>[t.id,t]));const ee=parseInt(T.academicYear??2568),m=parseInt(T.semester??1),[I,Z,G]=await Promise.all([e!=null&&e.id?ze(e.id,ee,m).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?yt(e.id).catch(()=>[]):Promise.resolve([]),lt().catch(()=>[])]),re={};Z.forEach(t=>{re[t.class_id]||(re[t.class_id]=[]),re[t.class_id].push(t.teacher_schedule_id)});const ne=Object.fromEntries(I.map(t=>[t.id,t])),K=Object.fromEntries(G.map(t=>[t.period_no,t])),c=(!l.supervisorMode&&(e!=null&&e.id)?await qs(e.id).catch(()=>[]):[]).some(t=>t.package_type==="donation"&&t.status==="approved"),L=mt(T,D),v=["AGM","AGMVOC"].includes($.subject_group),W=D.google_sheet_id?`<button onclick="window._openSheetToolsModal(${o})" class="btn-action teal">⚙️ จัดการชีท</button>`:L!=null&&L.id?`<button onclick="window._openClassCopyModal(${o})" class="btn-action amber">🔗 ทำสำเนาชีท</button>`:"";_e(`
    <div class="animate-fade">

      <!-- ── Sticky top bar (mobile-first) ── -->
      <div class="bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4 sticky top-0 z-10">

        <!-- Row 1: breadcrumb + class info -->
        <div class="flex items-center gap-2 py-3">
          <button onclick="window._backToClasses()"
            class="flex-shrink-0 text-gray-400 hover:text-gray-700 transition p-1 -ml-1 rounded-lg hover:bg-gray-100"
            aria-label="กลับ">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 text-sm leading-tight truncate">${p($.subject_name??"—")}</p>
            <p class="text-xs text-gray-500 truncate">
              <span class="font-mono text-emerald-600">${p($.subject_code??"")}</span>
              <span class="mx-1">·</span>${p(D.class_name??"")}${q?` · 📍 ${p(q.building)} ${p(q.room_number)}`:""}
            </p>
          </div>
          <!-- badges desktop only -->
          <div class="hidden sm:flex items-center gap-1.5 flex-shrink-0">
            ${D.skill_group?`<span class="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">${p(D.skill_group)}</span>`:""}
            ${v?'<span class="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full">ศาสนา</span>':""}
            ${D.google_sheet_id?'<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
          </div>
        </div>

        <!-- Row 2: action button groups (scrollable on mobile) -->
        <div class="flex gap-2 pb-3 overflow-x-auto no-scrollbar">
          <button onclick="window._openActionGroupPopup('docs')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 bg-violet-600 text-white text-xs font-semibold rounded-lg hover:bg-violet-700 transition flex items-center gap-1.5">
            📄 <span>เอกสาร</span>
          </button>
          <button onclick="window._openActionGroupPopup('tools')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#f59e0b,#ec4899);">
            🛠️ <span>เครื่องมือห้องเรียน</span>
          </button>
          <button onclick="window._openActionGroupPopup('assist')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#6366f1,#06b6d4);">
            🤖 <span>ผู้ช่วยครู</span>
          </button>
          <button onclick="window._openSmartClassroom(${o})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#a9781a,#e6c988);">
            👑 <span>Smart Classroom</span>
          </button>
          <button onclick="window._openClassroomChat(${o})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#f59e0b,#b45309);">
            🏫 <span>แชทห้องเรียน</span>
          </button>

          <div class="flex-shrink-0 w-px bg-gray-200 my-0.5"></div>
          <button onclick="window._openCombinedEdit2(${o})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-50 transition flex items-center gap-1.5">
            ✏️ <span>แก้ไข</span>
          </button>
          <button onclick="event.stopPropagation();window._deleteClass(${o},'${(D.class_name??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'")}')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-red-100 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-50 transition flex items-center gap-1.5">
            🗑️ <span>ลบ</span>
          </button>
        </div>

        <template id="cd-group-tpl-docs">
          <button onclick="window._closeActionGroupPopup();window._openPP5Doc(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">💾 ปพ.5</button>
          <button onclick="window._closeActionGroupPopup();window._openExamDocsForClass(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🧾 เอกสารสอบ</button>
          ${D.google_sheet_id?`
          <button onclick="window._closeActionGroupPopup();window._openSheetToolsModal(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⚙️ จัดการชีท</button>`:L!=null&&L.id?`
          <button onclick="window._closeActionGroupPopup();window._openClassCopyModal(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🔗 ทำสำเนาชีท</button>`:""}
        </template>
        <template id="cd-group-tpl-tools">
          <button onclick="window._closeActionGroupPopup();window._openRandomPickerModal(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🎲 สุ่มรายชื่อ</button>
          <button onclick="window._closeActionGroupPopup();window._openTimerModal(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⏱️ จับเวลา</button>
        </template>
        <template id="cd-group-tpl-assist">
          <button onclick="window._closeActionGroupPopup();window._openClassFlashcardsModal(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🃏 บัตรคำศัพท์</button>
          <button onclick="window._closeActionGroupPopup();window._openPromptGenModal(${o})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">✍️ Prompt AI</button>
        </template>

        <!-- Row 3: tabs -->
        <div class="flex border-t border-gray-100">
          <button class="cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center" data-tab="students">
            <span class="hidden sm:inline">👥 จัดการนักเรียน</span>
            <span class="sm:hidden">👥 นักเรียน</span>
          </button>
          <button class="cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center" data-tab="attendance">
            <span class="hidden sm:inline">✅ เช็คชื่อ</span>
            <span class="sm:hidden">✅ เช็คชื่อ</span>
          </button>
          <button class="cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center" data-tab="grades">
            <span class="hidden sm:inline">📝 คะแนน</span>
            <span class="sm:hidden">📝 คะแนน</span>
          </button>
        </div>
      </div>

      <!-- Tab content -->
      <div id="cd-tab-content" class="min-h-96"></div>
    </div>
    <style>
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>`);const A=()=>document.getElementById("cd-tab-content");window._backToClasses=()=>{Ee(e)};const s={docs:{title:"📄 เอกสาร",grad:"linear-gradient(135deg,#7c3aed,#6366f1)"},tools:{title:"🛠️ เครื่องมือห้องเรียน",grad:"linear-gradient(135deg,#f59e0b,#ec4899)"},assist:{title:"🤖 ผู้ช่วยครู",grad:"linear-gradient(135deg,#6366f1,#06b6d4)"}};window._closeActionGroupPopup=()=>{var t;return(t=document.getElementById("cd-action-popup"))==null?void 0:t.remove()},window._openActionGroupPopup=t=>{window._closeActionGroupPopup();const r=document.getElementById(`cd-group-tpl-${t}`),b=s[t];if(!r||!b)return;const S=document.createElement("div");S.id="cd-action-popup",S.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 animate-fade",S.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div style="background:${b.grad}" class="px-4 py-3 flex items-center justify-between">
            <h3 class="text-white font-bold text-sm">${b.title}</h3>
            <button id="cd-action-popup-close" class="text-white/90 hover:text-white text-2xl leading-none px-1">&times;</button>
          </div>
          <div class="p-2 flex flex-col gap-0.5">${r.innerHTML}</div>
        </div>`,document.body.appendChild(S),S.querySelector("#cd-action-popup-close").addEventListener("click",window._closeActionGroupPopup),S.addEventListener("click",R=>{R.target===S&&window._closeActionGroupPopup()})},window._openPP5Doc=t=>os(t),window._openExamDocsForClass=t=>ms(t),l.supervisorMode||(window._openStudentManager=t=>xs(e,t)),window._openCombinedEdit2=t=>{var b;const r=(b=window._classCache)==null?void 0:b[t];r&&fs(e,r,k,I,re,K,ne,()=>kt(e,t))},window._openRandomPickerModal=async t=>{var b;const r=(b=window._classCache)==null?void 0:b[t];if(r)try{const S=await He(t);if(!S.length){U("ห้องนี้ยังไม่มีนักเรียน","warning");return}const R=S.map((f,h)=>({...f,seat_no:h+1}));await bs(t,r,R,c)}catch{U("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}},window._openTimerModal=t=>{var b;const r=(b=window._classCache)==null?void 0:b[t];r&&Pn(t,r,c)},window._openSmartClassroom=t=>{fe(()=>import("./teacher-views-smart-classroom-CzhdvGBS.js"),__vite__mapDeps([9,4,5,1,2,10,11,8,3,6,7,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,0,28,29,30])).then(r=>r.renderSmartClassroom(e,t))},window._openClassroomChat=t=>{var b;const r=(b=window._classCache)==null?void 0:b[t];fe(()=>import("./chat-classroom-C_x4nE16.js"),__vite__mapDeps([31,1,2,32,15,4,5,7])).then(S=>S.openTeacherClassroomChat(e,t,r==null?void 0:r.class_name))},window._openClassFlashcardsModal=async t=>{var b;if((b=window._classCache)!=null&&b[t])try{const S=await Cs(e.id);Fn(e,t,S)}catch(S){U("โหลดชุดบัตรคำไม่สำเร็จ: "+ce(S),"error")}},window._openPromptGenModal=async t=>{var b;const r=(b=window._classCache)==null?void 0:b[t];r&&await gs(e,t,r,window._pp5SystemCfg??{})},window._deleteClass=async(t,r)=>{if(await rt({title:`ลบห้องเรียน "${r}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await Yt(t),U(`ลบ "${r}" แล้ว`,"success"),Ee(e)}catch{U("ลบไม่สำเร็จ","error")}},window._loadClassTab=async t=>n(t);const n=async t=>{document.querySelectorAll(".cd-tab").forEach(S=>{const R=S.dataset.tab===t;S.className=R?"cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center":"cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center"});const r=document.getElementById("cd-tab-content");if(!r)return;r.innerHTML=`<div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>`;const b=_n();jt(r);try{t==="students"?await window._openStudentManager(o):t==="attendance"?await wt(e,D):t==="grades"&&await ht(e,D)}catch(S){console.error(S),r.innerHTML='<div class="p-6 text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ</div>'}finally{jt(b)}je("my-classes"),Ie("ห้องเรียน")};document.querySelectorAll(".cd-tab").forEach(t=>t.addEventListener("click",()=>n(t.dataset.tab))),n(l.defaultTab??"students")}catch(d){console.error(d),U("โหลดข้อมูลไม่สำเร็จ","error")}}const On=[{value:"none",label:"ไม่จำ — สุ่มอิสระทุกครั้ง (มีโอกาสซ้ำ)"},{value:"session",label:"จำเฉพาะตอนนี้ — รีเซ็ตอัตโนมัติเมื่อปิดหน้าต่างนี้"},{value:"cycle",label:"จำจนครบทุกคน แล้ววนรอบใหม่อัตโนมัติ"},{value:"manual",label:"จำตลอดไป จนกว่าจะกดรีเซ็ตเอง"}];function Ht(e){const o=["#f59e0b","#ec4899","#10b981","#6366f1","#ef4444","#06b6d4","#8b5cf6"];e.style.position="relative",e.style.overflow="hidden";for(let l=0;l<26;l++){const d=document.createElement("div"),T=o[Math.floor(Math.random()*o.length)],k=Math.random()*100,P=1.1+Math.random()*.7,D=Math.random()*.25,$=Math.random()*360;d.style.cssText=`position:absolute;top:-12px;left:${k}%;width:7px;height:13px;background:${T};opacity:0.9;border-radius:2px;transform:rotate(${$}deg);pointer-events:none;animation:rp-confetti-fall ${P}s ${D}s ease-in forwards;`,e.appendChild(d),setTimeout(()=>d.remove(),(P+D)*1e3+250)}}function Fn(e,o,l){var k;(k=document.getElementById("class-flashcards-modal"))==null||k.remove();const d=document.createElement("div");d.id="class-flashcards-modal",d.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4";let T="";!l||l.length===0?T=`
      <div class="text-center py-8 text-gray-500">
        <p class="text-4xl mb-2">🃏</p>
        <p class="text-sm font-medium">คุณครูยังไม่มีชุดบัตรคำศัพท์เลยครับ</p>
        <p class="text-xs text-gray-400 mt-1">สามารถสร้างชุดบัตรคำศัพท์ใหม่ได้ที่เมนู "บัตรคำศัพท์" ในเมนูหลัก</p>
      </div>
    `:T=`
      <div class="grid gap-3 max-h-[60vh] overflow-y-auto pr-1 w-full">
        ${l.map(P=>`
          <button class="select-deck-btn w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition flex items-center justify-between gap-3 group"
            data-deck-id="${P.id}">
            <div>
              <p class="font-bold text-gray-800 text-sm group-hover:text-indigo-700 transition">${p(P.title)}</p>
              ${P.description?`<p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${p(P.description)}</p>`:""}
            </div>
            <span class="text-xs text-indigo-600 font-semibold shrink-0 group-hover:translate-x-1 transition duration-200">เล่นเลย →</span>
          </button>
        `).join("")}
      </div>
    `,d.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-3xl shadow-2xl flex flex-col p-6 relative animate-fade">
      <button id="cf-modal-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">🃏 เลือกชุดบัตรคำศัพท์</h3>
        <p class="text-xs text-gray-400 mt-0.5">เลือกชุดบัตรคำศัพท์ที่คุณครูต้องการนำมาจัดกิจกรรมในห้องเรียนนี้</p>
      </div>

      ${T}
    </div>
  `,document.body.appendChild(d),d.querySelector("#cf-modal-close").addEventListener("click",()=>d.remove()),d.addEventListener("click",P=>{P.target===d&&d.remove()}),d.querySelectorAll(".select-deck-btn").forEach(P=>{P.addEventListener("click",()=>{const D=P.dataset.deckId,$=l.find(O=>O.id===D);$&&(d.remove(),fe(()=>import("./teacher-views-flashcards-CNk6GbkI.js"),__vite__mapDeps([33,4,5,1,2,15])).then(O=>{O.renderFlashcardPlay(e,$,o)}))})})}function Gn(e){var o;return((o=String((e==null?void 0:e.donationSpecialFeatures)??"").split(`
`).map(l=>{const d=l.split("|");return{text:d[1]??"",minTier:parseInt(d[2])||1}}).find(l=>l.text.includes("Prompt")))==null?void 0:o.minTier)??1}const Ot=[{value:"บรรยาย",label:"บรรยาย (Lecture)"},{value:"กิจกรรมกลุ่ม",label:"กิจกรรมกลุ่ม (Group Activity)"},{value:"โครงงานเป็นฐาน",label:"โครงงานเป็นฐาน (Project-based)"},{value:"สืบเสาะหาความรู้",label:"สืบเสาะหาความรู้ (Inquiry-based)"},{value:"other",label:"อื่นๆ (พิมพ์เอง)"}],Ft={th:"ภาษาไทย",en:"ภาษาอังกฤษ (English)",ar:"ภาษาอาหรับ (العربية)","ms-rumi":"ภาษามลายู อักษรรูมี (Bahasa Melayu, Rumi)","ms-jawi":"ภาษามลายูปัตตานี อักษรยาวี (Jawi)"},Gt=[{key:"worksheet",text:"ใบงาน/ใบกิจกรรม",imageFormat:"กระดาษ A4 แนวตั้ง พร้อมพิมพ์แจกนักเรียนได้จริง",imageContent:"ใบงาน/ใบกิจกรรมที่มีคำสั่งชัดเจนและเว้นที่ว่างให้กรอกคำตอบ"},{key:"slides",text:"โครงร่างสไลด์นำเสนอ",imageFormat:"สไลด์นำเสนอ อัตราส่วน 16:9",imageContent:"สไลด์นำเสนอแต่ละแผ่น มีข้อความหลักและภาพประกอบที่เหมาะกับเนื้อหาคาบนี้"},{key:"questions",text:"คำถามกระตุ้นความคิด/อภิปราย",imageFormat:"โปสเตอร์/การ์ดคำถามขนาด A4 สำหรับติดในห้องเรียนหรือเปิดฉาย",imageContent:"คำถามกระตุ้นความคิดอย่างน้อย 5 ข้อ เรียงลำดับจากง่ายไปยาก จัดวางให้อ่านง่ายน่าสนใจ"},{key:"rubric",text:"เกณฑ์ให้คะแนน (Rubric)",imageFormat:"ตารางขนาด A4 จัดวางเป็นตารางอ่านง่าย",imageContent:"เกณฑ์การให้คะแนน (Rubric) แบบ 4 ระดับคุณภาพ พร้อมคำอธิบายแต่ละระดับ"},{key:"game",text:"เกม/กิจกรรมเสริมท้ายคาบ",imageFormat:"การ์ด/กระดานกิจกรรมขนาด A4 พร้อมพิมพ์ใช้งานได้จริง",imageContent:"อุปกรณ์/การ์ดเกมหรือกระดานกิจกรรมเสริมท้ายคาบ เพื่อทบทวนเนื้อหา ใช้เวลาไม่เกิน 10 นาที"}],zn={บรรยาย:[],กิจกรรมกลุ่ม:["worksheet","rubric","game"],โครงงานเป็นฐาน:["worksheet","rubric","questions"],สืบเสาะหาความรู้:["questions","worksheet"],other:[]};function Vn({subjectName:e,subjectCode:o,gradeLevel:l,className:d,studentCount:T,avgPct:k,topic:P,format:D,periods:$,minutesPerPeriod:O,isReligionSubj:q,mediaItems:ee,langKey:m,langLabel:I}){const Z=$*O,G=$>1?`${$} คาบต่อเนื่อง (คาบละ ${O} นาที รวม ${Z} นาที)`:`1 คาบ (${O} นาที)`,re=m==="ms-jawi"?" (เขียนด้วยอักขระยาวี Jawi เท่านั้น ห้ามใช้อักษรรูมี)":"",ne=q?["คุณคือผู้ช่วยครูอิสลามศึกษาไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรอิสลามศึกษา พุทธศักราช 2551"]:["คุณคือผู้ช่วยครูไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พ.ศ. 2551 (ฉบับปรับปรุง พ.ศ. 2560)"];return ne.push("","บริบทวิชา:",`- วิชา: ${e} (รหัส ${o})`,`- ระดับชั้น: ${l}   ห้อง: ${d}`,`- จำนวนนักเรียน: ${T} คน`),k!=null&&ne.push(`- คะแนนเฉลี่ยสะสมของห้องนี้ในขณะนี้: ${k}% (ใช้พิจารณาความยาก-ง่ายของกิจกรรม)`),ne.push("",`หัวข้อที่จะสอนคาบนี้: ${P}`,`รูปแบบการสอนที่ต้องการ: ${D}`,`ระยะเวลา: ${G}`,"",`คำสั่งต่อไปนี้เขียนเป็นภาษาไทยเพื่อให้คุณเข้าใจชัดเจน แต่เนื้อหาที่สร้างขึ้นจริงทั้งหมด (แผนการสอน, ใบงาน, สื่อ, ข้อความในภาพ) ต้องเป็น${I}${re}`,"","กรุณาออกแบบแผนการจัดการเรียนรู้ที่ประกอบด้วย:","1. จุดประสงค์การเรียนรู้ (ด้านความรู้ K / ทักษะ P / เจตคติ A)","2. สาระสำคัญ (Key Concept)",`3. กิจกรรมการเรียนรู้ แบ่งเป็น 3 ขั้น พร้อมระบุเวลาแต่ละขั้นตอนชัดเจน (รวม ${Z} นาที)${$>1?" — หากมีมากกว่า 1 คาบ กรุณาแบ่งกิจกรรมเป็นรายคาบให้ชัดเจน (คาบที่ 1: ..., คาบที่ 2: ...)":""}:`,"   - นำเข้าสู่บทเรียน","   - กิจกรรมหลัก","   - สรุป/wrap-up","4. สื่อ/อุปกรณ์ที่ต้องใช้","5. วิธีการวัดและประเมินผลในคาบ","6. งาน/การบ้าน (ถ้ามี)","7. หมายเหตุสำหรับครู — สิ่งที่ต้องเตรียมหรือระวังเป็นพิเศษ",`8. เขียนคำสั่งสร้างภาพ (Image Generation Prompt) เป็นภาษาไทย แยกไว้ในกล่องโค้ดของตัวเอง สำหรับสร้างภาพสรุปแผนการจัดการเรียนรู้ทั้งหมดนี้ (ข้อความที่ปรากฏจริงในภาพเป็น${I}${re}) ให้อยู่ในภาพเดียวหน้าเดียว (One-Page Lesson Plan) ขนาดกระดาษ A4 จัดวางให้อ่านง่าย ครบทุกหัวข้อสำคัญ (จุดประสงค์, สาระสำคัญ, กิจกรรม 3 ขั้น, สื่อ/อุปกรณ์, การวัดประเมินผล) ก่อนกล่องโค้ดนี้ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง`,"","หมายเหตุสำคัญ: หากเนื้อหาวิชานี้เกี่ยวข้องกับสมการ สูตร หรือสัญลักษณ์ทางคณิตศาสตร์/วิทยาศาสตร์ กรุณาเขียนด้วยรูปแบบ LaTeX เสมอ (เช่น $y = mx + b$ หรือสมการซับซ้อนใช้ $$...$$) เพื่อให้สมการถูกต้องแม่นยำและอ่านง่าย ห้ามพิมพ์สมการเป็นข้อความธรรมดาที่อาจอ่านผิดเพี้ยน"),ee!=null&&ee.length&&(ne.push("",`สื่อ/เอกสารประกอบเพิ่มเติม (นอกเหนือจากแผนการสอน) — ห้ามเขียนเนื้อหาเป็นข้อความอ่านตรงๆ แต่ให้เขียนเป็น "คำสั่งสร้างภาพ" (Image Generation Prompt) เป็นภาษาไทย สำหรับป้อนให้ AI สร้างรูปภาพต่อ (ข้อความที่ปรากฏจริงในภาพให้เป็น${I}${re}) เพื่อให้ได้ไฟล์ภาพพร้อมใช้งานจริง โดยมีกติกาดังนี้:`,"- แต่ละรายการด้านล่างให้เขียนคำสั่งสร้างภาพแยกเป็นคนละกล่องโค้ด (code block) ต่อ 1 รายการ ไม่ปนกัน","- ออกแบบจำนวนภาพ/หน้าให้เหมาะสมกับเนื้อหา สูงสุดไม่เกิน 10 ภาพต่อกล่องโค้ด 1 กล่อง","- ถ้ารายการใดต้องใช้มากกว่า 10 ภาพ ให้แบ่งเป็นกล่องโค้ดใหม่ต่อจากกัน กล่องละไม่เกิน 10 ภาพ",'- ภายในกล่องโค้ดเดียวกัน ให้ระบุคำสั่งของแต่ละภาพแยกกันให้ครบและชัดเจน (เช่น "ภาพที่ 1: ...", "ภาพที่ 2: ...")',"- แต่ละคำสั่งต้องอธิบายรายละเอียดกราฟิก เค้าโครง และข้อความที่ต้องปรากฏในภาพให้ชัดเจนพอที่ AI สร้างภาพจะสร้างออกมาได้ตรงตามต้องการ","- ก่อนกล่องโค้ดแรกของแต่ละรายการ ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง","","รายการที่ต้องการ:"),ee.forEach((K,de)=>ne.push(`${de+1}. ${K.text} — รูปแบบภาพ: ${K.imageFormat} — เนื้อหาที่ต้องปรากฏ: ${K.imageContent}`))),ne.join(`
`)}function Xe(e){return p(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}function Qn(e){const o=String(e??"").split(`
`);let l="",d=!1,T=[],k=null;const P=()=>{k&&(l+=`</${k}>`,k=null)};for(const D of o){const $=D.replace(/\r$/,"");if($.trim().startsWith("```")){d?(l+=`<pre>${p(T.join(`
`))}</pre>`,T=[],d=!1):(P(),d=!0);continue}if(d){T.push($);continue}const O=$.match(/^(#{1,3})\s+(.*)$/);if(O){P();const m=O[1].length;l+=`<h${m}>${Xe(O[2])}</h${m}>`;continue}const q=$.match(/^\s*[-*]\s+(.*)$/);if(q){k!=="ul"&&(P(),l+="<ul>",k="ul"),l+=`<li>${Xe(q[1])}</li>`;continue}const ee=$.match(/^\s*\d+[.)]\s+(.*)$/);if(ee){k!=="ol"&&(P(),l+="<ol>",k="ol"),l+=`<li>${Xe(ee[1])}</li>`;continue}P(),l+=$.trim()?`<p>${Xe($)}</p>`:"<p>&nbsp;</p>"}return P(),d&&T.length&&(l+=`<pre>${p(T.join(`
`))}</pre>`),l}function zt(e){return String(e??"").replace(/[\\/:*?"<>|]/g," ").trim().slice(0,60)||"เอกสาร"}function Un(e,o){const d=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>แผนการจัดการเรียนรู้</title>
    <style>
      body{font-family:'TH Sarabun New','Angsana New',Tahoma,sans-serif;font-size:16pt;line-height:1.6;}
      h1{font-size:22pt;} h2{font-size:19pt;} h3{font-size:17pt;}
      pre{font-family:'Courier New',monospace;font-size:12pt;background:#f5f5f5;padding:10px;border:1px solid #ccc;white-space:pre-wrap;}
    </style></head><body>${Qn(e)}</body></html>`,T=new Blob(["\uFEFF",d],{type:"application/msword"}),k=URL.createObjectURL(T),P=document.createElement("a");P.href=k,P.download=o,document.body.appendChild(P),P.click(),P.remove(),URL.revokeObjectURL(k)}async function gs(e,o,l,d){var de;(de=document.getElementById("prompt-gen-modal"))==null||de.remove();const T=(l==null?void 0:l.master_subjects)??{},k=window._pp5DonorTierIndex??0,P=Gn(d),D=["AGM","AGMVOC"].includes(T.subject_group),$=d==null?void 0:d.freePromptAiLimit;let O=1;if($!==void 0&&$!==""){const c=parseInt($,10);Number.isFinite(c)&&(O=c)}const q=parseInt(localStorage.getItem("pp5_free_promptai_count")||"0",10),ee=O>0&&q<O,m=k<P,I=document.createElement("div");if(I.id="prompt-gen-modal",I.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4",m&&!ee){I.innerHTML=`
      <div class="bg-white w-full max-w-sm rounded-3xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="pg-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-800 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${P}+</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">✍️ ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว<br>ทดลองใช้ฟรีครบ ${O} ครั้งแล้ว<br>สนับสนุนโครงการเพื่อใช้งานต่อแบบไม่จำกัด</p>
        <button id="pg-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
      </div>`,document.body.appendChild(I),I.querySelector("#pg-close").addEventListener("click",()=>I.remove()),I.querySelector("#pg-upgrade").addEventListener("click",()=>{var c;I.remove(),(c=document.getElementById("btn-donate-float"))==null||c.click()}),I.addEventListener("click",c=>{c.target===I&&I.remove()});return}I.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative animate-fade">
      <div class="flex items-center gap-3 px-6 pt-6 pb-3 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">✍️ สร้าง Prompt สำหรับ AI</h3>
          <p class="text-xs text-gray-400 mt-0.5">นำ Prompt ที่ได้ไปวางใน ChatGPT / Gemini / Claude ของคุณครูเองได้เลย</p>
          ${m?`<span class="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">✨ ทดลองใช้งานฟรี (ครั้งที่ ${q+1}/${O})</span>`:""}
        </div>
        <button id="pg-close" class="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      </div>
      <div class="px-6 pb-6 overflow-y-auto" id="pg-body">
        <div class="flex justify-center py-10 text-gray-400 text-sm">กำลังโหลดข้อมูลห้องเรียน...</div>
      </div>
    </div>`,document.body.appendChild(I),I.querySelector("#pg-close").addEventListener("click",()=>I.remove()),I.addEventListener("click",c=>{c.target===I&&I.remove()});const Z=I.querySelector("#pg-body");let G=0,re=null;try{const[c,L]=await Promise.all([He(o).catch(()=>[]),Gs(o).catch(()=>({columns:[],scores:[]}))]);G=c.length;const v=(L.columns??[]).reduce((W,A)=>W+(A.max_score??0),0);if(v>0&&G>0){const W=(L.scores??[]).reduce((A,s)=>A+(s.final_score??0),0);re=Math.round(W/G/v*100)}}catch{}const ne=()=>{Z.innerHTML=`
      <div class="bg-gray-50 rounded-2xl p-4 mb-4 text-xs text-gray-600 space-y-1">
        <p><strong class="text-gray-800">${p(T.subject_name??"—")}</strong> (${p(T.subject_code??"—")})</p>
        <p>ระดับชั้น ${p(T.grade_level??"—")} · ห้อง ${p(l.class_name??"—")} · นักเรียน ${G} คน</p>
        ${re!=null?`<p>คะแนนเฉลี่ยสะสมปัจจุบัน: <strong class="text-emerald-600">${re}%</strong></p>`:""}
      </div>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">หัวข้อที่จะสอนคาบนี้ <span class="text-red-400">*</span></label>
          <textarea id="pg-topic" rows="2" class="${qe} resize-none" placeholder="เช่น สมการกำลังสอง, การสังเคราะห์แสง"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">รูปแบบการสอนที่ต้องการ</label>
          <select id="pg-format" class="${xt}">
            ${Ot.map(A=>`<option value="${A.value}">${p(A.label)}</option>`).join("")}
          </select>
          <input id="pg-format-other" class="${qe} mt-2 hidden" placeholder="พิมพ์รูปแบบที่ต้องการ" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5">จำนวนคาบ</label>
            <input id="pg-periods" type="number" min="1" max="10" value="1" class="${qe}" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5">นาทีต่อคาบ</label>
            <input id="pg-minutes" type="number" min="10" max="180" value="50" class="${qe}" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">สื่อ/เอกสารประกอบที่ต้องการให้ AI ช่วยออกแบบเพิ่มเติม (เลือกได้หลายรายการ)</label>
          <p class="text-xs text-gray-400 mb-1.5">รายการที่เลือกจะได้เป็น "คำสั่งสร้างภาพ" ให้นำไปวางในโหมดสร้างรูปภาพของ AI ต่อ (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง</p>
          <div id="pg-media" class="space-y-1.5">
            ${Gt.map(A=>`
              <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" class="pg-media-cb rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" value="${A.key}" />
                ${p(A.text)}
              </label>`).join("")}
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">ภาษาที่ต้องการให้ AI ตอบ</label>
          <select id="pg-lang" class="${xt}">
            ${Object.entries(Ft).map(([A,s])=>`<option value="${A}">${p(s)}</option>`).join("")}
          </select>
        </div>
        <button id="pg-generate" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">
          ✨ สร้าง Prompt
        </button>
      </div>`;const c=Z.querySelector("#pg-format"),L=Z.querySelector("#pg-format-other"),v=()=>[...Z.querySelectorAll(".pg-media-cb")],W=()=>{const A=zn[c.value]??[];v().forEach(s=>{s.checked=A.includes(s.value)})};W(),c.addEventListener("change",()=>{L.classList.toggle("hidden",c.value!=="other"),W()}),Z.querySelector("#pg-generate").addEventListener("click",()=>{var f;const A=Z.querySelector("#pg-topic").value.trim();if(!A){U("กรุณาระบุหัวข้อที่จะสอนก่อนครับ","warning");return}const s=c.value==="other"?L.value.trim()||"ไม่ระบุ":((f=Ot.find(h=>h.value===c.value))==null?void 0:f.label)??c.value,n=Math.max(1,parseInt(Z.querySelector("#pg-periods").value,10)||1),t=Math.max(1,parseInt(Z.querySelector("#pg-minutes").value,10)||50),r=v().filter(h=>h.checked).map(h=>Gt.find(y=>y.key===h.value)).filter(Boolean),b=Z.querySelector("#pg-lang").value,S=Ft[b],R=Vn({subjectName:T.subject_name??"—",subjectCode:T.subject_code??"—",gradeLevel:T.grade_level??"—",className:l.class_name??"—",studentCount:G,avgPct:re,topic:A,format:s,periods:n,minutesPerPeriod:t,isReligionSubj:D,mediaItems:r,langKey:b,langLabel:S});m&&localStorage.setItem("pp5_free_promptai_count",String(q+1)),K(R,A)})},K=(c,L)=>{Z.innerHTML=`
      <p class="text-xs text-gray-500 mb-2">คัดลอกข้อความด้านล่างไปวางใน ChatGPT / Gemini / Claude ของคุณครูได้เลยครับ</p>
      <textarea id="pg-output" readonly rows="14" class="w-full text-xs font-mono border border-gray-200 rounded-2xl p-3 bg-gray-50 text-gray-700 resize-none">${p(c)}</textarea>
      <div class="flex gap-2 mt-3">
        <button id="pg-copy" class="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">📋 คัดลอก Prompt</button>
        <button id="pg-back" class="px-4 py-3 rounded-2xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition">← แก้ไข</button>
      </div>
      <div class="mt-5 pt-4 border-t border-gray-100">
        <p class="text-xs font-semibold text-gray-700 mb-1">📄 ขั้นตอนถัดไป (ถ้าต้องการ): ดาวน์โหลดเป็นไฟล์ Word</p>
        <p class="text-xs text-gray-400 mb-2">พอ AI ตอบกลับมาแล้ว วางคำตอบทั้งหมดที่ได้ลงในช่องนี้ แล้วกดดาวน์โหลด — จะได้ไฟล์ Word (.doc) ที่เปิดแก้ไขต่อได้เลย</p>
        <textarea id="pg-ai-response" rows="8" class="${qe} resize-y font-mono text-xs" placeholder="วางคำตอบจาก ChatGPT / Gemini / Claude ที่นี่..."></textarea>
        <button id="pg-download-word" class="w-full mt-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition">📄 ดาวน์โหลดเป็นไฟล์ Word (.doc)</button>
      </div>`,Z.querySelector("#pg-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),U("คัดลอก Prompt แล้วครับ","success")}catch{U("คัดลอกไม่สำเร็จ กรุณาเลือกข้อความแล้วคัดลอกเองครับ","error")}}),Z.querySelector("#pg-back").addEventListener("click",ne),Z.querySelector("#pg-download-word").addEventListener("click",()=>{const v=Z.querySelector("#pg-ai-response").value.trim();if(!v){U("กรุณาวางคำตอบจาก AI ก่อนดาวน์โหลดครับ","warning");return}const W=`แผนการสอน_${zt(T.subject_code)}_${zt(L)}.doc`;Un(v,W),U("ดาวน์โหลดไฟล์ Word แล้วครับ","success")})};ne()}async function Wn(e,o,l,d={}){return gs(e,o,l,d)}async function bs(e,o,l,d){var oe,a;const T=(oe=window._pp5SystemCfg)==null?void 0:oe.freeRandomPickerLimit;let k=1;if(T!==void 0&&T!==""){const x=parseInt(T,10);Number.isFinite(x)&&(k=x)}(a=document.getElementById("random-picker-modal"))==null||a.remove();const P=()=>{ne.innerHTML=`
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="rp-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-700 text-lg">สิทธิ์สุ่มทดลองใช้งานครบแล้ว</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สุ่มรายชื่อและจัดกลุ่มจำกัดการทดลองสุ่มฟรี ${k} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
        <button id="rp-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`,ne.querySelector("#rp-paywall-close").addEventListener("click",()=>ne.remove()),ne.querySelector("#rp-upgrade").addEventListener("click",()=>{var x;ne.remove(),(x=document.getElementById("btn-donate-float"))==null||x.click()})};let D;try{D=await Fs(e)}catch{D={mode:"none",picked_student_ids:[]}}let $=D.mode||"none",O=new Set((D.picked_student_ids||[]).map(Number)),q=new Set;const ee=new Map(l.map(x=>[x.id,x]));let m=Array.isArray(D.groups)?D.groups.map(x=>({no:x.no,items:(x.student_ids||[]).map(w=>ee.get(w)).filter(Boolean)})):null,I="pick",Z=!1,G=localStorage.getItem("pp5_rp_effect")||"classic";const re=[{key:"classic",icon:"🎯",label:"คลาสสิก"},{key:"grid",icon:"🔦",label:"กริด"},{key:"elimination",icon:"💥",label:"ตัดออก"},{key:"slot",icon:"🎰",label:"สล็อต"}],ne=document.createElement("div");ne.id="random-picker-modal",ne.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",ne.innerHTML=`
    <style>
      @keyframes rp-confetti-fall { to { transform: translateY(320px) rotate(540deg); opacity: 0; } }
      @keyframes rp-pop { 0% { transform: scale(0.7); opacity:0; } 60% { transform: scale(1.08); opacity:1; } 100% { transform: scale(1); opacity:1; } }
      .rp-pop { animation: rp-pop 0.45s cubic-bezier(.2,1.4,.4,1) both; }
      .rp-grid-tile { position:relative; aspect-ratio:3/4; border-radius:10px; overflow:hidden; transition:transform .07s,box-shadow .07s; }
      .rp-grid-tile.rp-active { transform:scale(1.12); box-shadow:0 0 0 3px #f59e0b,0 0 14px rgba(245,158,11,.6); z-index:2; }
      .rp-grid-tile.rp-winner { transform:scale(1.18); box-shadow:0 0 0 4px #10b981,0 0 22px rgba(16,185,129,.65); z-index:3; animation:rp-pop .45s cubic-bezier(.2,1.4,.4,1) both; }
      .rp-elim-tile { position:relative; aspect-ratio:3/4; border-radius:8px; overflow:hidden; transition:opacity .22s,transform .22s; }
      .rp-elim-tile.rp-eliminated { opacity:.12; transform:scale(.85); }
      .rp-elim-tile.rp-last { box-shadow:0 0 0 3px #f59e0b,0 0 12px rgba(245,158,11,.5); z-index:1; }
      .rp-elim-tile.rp-winner { box-shadow:0 0 0 4px #10b981,0 0 20px rgba(16,185,129,.65); animation:rp-pop .45s cubic-bezier(.2,1.4,.4,1) both; z-index:2; }
      .rp-reel { transition:border-color .3s,box-shadow .3s; }
      .rp-reel.rp-locked { border-color:#f59e0b!important; box-shadow:0 0 10px rgba(245,158,11,.4)!important; }
      .rp-reel.rp-winner-reel { border-color:#10b981!important; box-shadow:0 0 20px rgba(16,185,129,.55)!important; }
    </style>
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[94vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#f59e0b,#ec4899);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">🎲 สุ่มรายชื่อนักเรียน</h3>
          <p class="text-white/80 text-xs mt-0.5 truncate">${p(o.class_name||"")} · ทั้งหมด ${l.length} คน</p>
        </div>
        <button id="rp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="pick">🎯 สุ่มรายชื่อ</button>
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="group">👥 สุ่มจัดกลุ่ม</button>
      </div>
      <div id="rp-body" class="p-5 overflow-y-auto flex-1"></div>
    </div>`,document.body.appendChild(ne),ne.addEventListener("click",x=>{x.target===ne&&ne.remove()}),ne.querySelector("#rp-close").addEventListener("click",()=>ne.remove());const K=ne.querySelector("#rp-body"),de=[...ne.querySelectorAll(".rp-tab")],c=x=>{I=x,de.forEach(w=>{const C=w.dataset.mode===x;w.className=`rp-tab flex-1 py-2.5 text-sm font-semibold transition ${C?"text-white":"text-gray-500 hover:text-gray-700"}`,w.style.background=C?"linear-gradient(135deg,#f59e0b,#ec4899)":""}),x==="pick"?s():te()};de.forEach(x=>x.addEventListener("click",()=>{Z||c(x.dataset.mode)}));const L=()=>$==="none"?new Set:$==="session"?q:O,v=async x=>{if($!=="none"){if($==="session"){q.add(x);return}O.add(x);try{await Lt(e,{mode:$,pickedStudentIds:[...O]})}catch{}}},W=async()=>{O=new Set,q=new Set;try{await qt(e)}catch{}U("รีเซ็ตการสุ่มแล้ว","success"),I==="pick"&&s()},A=async x=>{if(x!==$){$=x,O=new Set,q=new Set;try{await Lt(e,{mode:x,pickedStudentIds:[]})}catch{}s()}};function s(){const x=L(),w=l.filter(M=>!x.has(M.id)),C=l.length-w.length,B=(M,se)=>{const J=`hsl(${M.id*47%360},60%,55%)`,Q=M.image_url?`<img src="${p(M.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${J}">${p((M.full_name??"?").charAt(0))}</div>`;return`<div class="${se}" data-id="${M.id}">${Q}<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${M.seat_no??""}</div></div>`},_=(M,se=!1)=>`<div id="rp-reel-${M}" class="rp-reel rounded-2xl border-2 border-gray-200 bg-white" style="width:${se?104:86}px;height:${se?148:124}px;flex-shrink:0;"><div class="rp-reel-inner flex flex-col items-center justify-center h-full p-2 gap-1" style="transition:opacity .06s ease;"><div class="flex-1 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center text-gray-300 text-2xl font-bold">?</div><div class="text-[9px] font-bold text-gray-500 truncate w-full text-center leading-none">—</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">·</div></div></div>`,E=()=>G==="grid"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 text-center pt-3 pb-1.5">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-grid" class="grid gap-1 px-2 pb-2" style="grid-template-columns:repeat(auto-fill,minmax(54px,1fr))">
            ${w.map(M=>B(M,"rp-grid-tile")).join("")}
          </div>
        </div>`:G==="elimination"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <div class="flex items-center justify-between pt-2.5 pb-1 px-3">
            <p id="rp-hint" class="text-xs text-gray-400">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
            <span id="rp-elim-counter" class="text-xs font-bold text-gray-500">${w.length} คน</span>
          </div>
          <div id="rp-elim-grid" class="grid gap-1 px-2 pb-2 overflow-y-auto" style="grid-template-columns:repeat(auto-fill,minmax(48px,1fr));max-height:210px;">
            ${w.map(M=>B(M,"rp-elim-tile")).join("")}
          </div>
        </div>`:G==="slot"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-4 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-4">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div class="flex justify-center items-center gap-2">
            ${_(0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${_(1,!0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${_(2)}
          </div>
        </div>`:`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-6 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-3">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-avatar" class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 items-center justify-center" style="display:none;opacity:0;box-shadow:0 8px 24px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.10);"></div>
          <p id="rp-name" class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2">—</p>
          <p id="rp-code" class="text-xs text-gray-400 mt-1 font-mono"></p>
        </div>`;K.innerHTML=`
      <div class="flex gap-1.5 mb-3">
        ${re.map(M=>`<button class="rp-eff flex-1 py-2 rounded-xl border text-center leading-tight transition ${M.key===G?"border-amber-400 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}" data-eff="${M.key}"><div class="text-base">${M.icon}</div><div class="text-[9px] font-semibold mt-0.5">${M.label}</div></button>`).join("")}
      </div>
      <div class="flex items-center gap-2 mb-3">
        <select id="rp-mode" class="${xt} flex-1 text-xs">
          ${On.map(M=>`<option value="${M.value}" ${M.value===$?"selected":""}>${M.label}</option>`).join("")}
        </select>
        <button id="rp-reset" class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">🔄 รีเซ็ต</button>
      </div>
      ${$!=="none"?`<p id="rp-counter" class="text-[11px] text-gray-400 mb-3">สุ่มไปแล้ว ${C} / ${l.length} คน${w.length===0?" — ครบทุกคนแล้ว!":""}</p>`:""}
      ${E()}
      <button id="rp-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]" style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 สุ่มเลย!</button>`,K.querySelectorAll(".rp-eff").forEach(M=>{M.addEventListener("click",()=>{Z||(G=M.dataset.eff,localStorage.setItem("pp5_rp_effect",G),s())})}),K.querySelector("#rp-mode").addEventListener("change",M=>A(M.target.value)),K.querySelector("#rp-reset").addEventListener("click",()=>{Z||W()}),K.querySelector("#rp-go").addEventListener("click",()=>n())}function n(){if(Z)return;if(!d&&parseInt(localStorage.getItem("pp5_free_random_count")||"0",10)>=k){P();return}let x=l.filter(E=>!L().has(E.id)),w=!1;if(x.length===0){if($==="manual"){U('สุ่มครบทุกคนแล้ว — กดปุ่ม "รีเซ็ต" เพื่อเริ่มรอบใหม่',"warning");return}x=l,w=$==="cycle"||$==="session"}Z=!0;const C=K.querySelector("#rp-go");C.disabled=!0,C.textContent="🎰 กำลังสุ่ม...";const B=x[Math.floor(Math.random()*x.length)],_=async()=>{if(w){O=new Set,q=new Set;try{await qt(e)}catch{}}if(await v(B.id),!d){const E=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);localStorage.setItem("pp5_free_random_count",String(E+1))}setTimeout(()=>{Z=!1;const E=L(),M=l.length-l.filter(Q=>!E.has(Q.id)).length,se=K.querySelector("#rp-counter");if(se){const Q=l.length-M;se.textContent=`สุ่มไปแล้ว ${M} / ${l.length} คน${Q===0?" — ครบทุกคนแล้ว!":""}`}const J=K.querySelector("#rp-go");if(J)if(G==="classic")J.disabled=!1,J.textContent="🎲 สุ่มอีกครั้ง";else{J.disabled=!1,J.textContent="🔁 สุ่มใหม่";const Q=J.cloneNode(!0);J.replaceWith(Q),Q.addEventListener("click",()=>s())}},900)};G==="grid"?b(x,B,_):G==="elimination"?S(x,B,_):G==="slot"?R(x,B,_):r(x,B,_)}function t(x,w){x.style.transition="opacity 0.2s ease",x.style.opacity="0",setTimeout(()=>{x.style.borderStyle="solid",x.style.borderColor="#10b981",x.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",x.innerHTML=`<div class="py-5 px-4 text-center">
        <p class="text-xs text-gray-400 mb-3">🎉 ได้คนนี้แหละ!</p>
        <div class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 rp-pop" style="box-shadow:0 8px 24px rgba(0,0,0,.18);">${w.image_url?`<img src="${p(w.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${p((w.full_name??"?").charAt(0))}</div>`}</div>
        <p class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2 rp-pop">${p(w.full_name)}</p>
        <p class="text-xs text-gray-400 mt-1 font-mono">${w.seat_no?`เลขที่ ${w.seat_no}`:""}</p>
      </div>`,x.style.opacity="1",Ht(x)},220)}function r(x,w,C){const B=K.querySelector("#rp-stage"),_=K.querySelector("#rp-name"),E=K.querySelector("#rp-code"),M=K.querySelector("#rp-hint"),se=K.querySelector("#rp-avatar");_.classList.remove("rp-pop"),se==null||se.classList.remove("rp-pop"),B.style.borderStyle="dashed",B.style.borderColor="#fbbf24",B.style.boxShadow="none";const J=(i,j=!1)=>{se&&(se.style.display="flex",se.style.transition=j?"opacity 0.06s ease":"opacity 0.3s ease",se.style.opacity="0",setTimeout(()=>{se.innerHTML=i.image_url?`<img src="${i.image_url}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${(i.full_name??"?").charAt(0)}</div>`,se.style.opacity="1"},j?30:80))};J(x[Math.floor(Math.random()*x.length)],!0);let Q=0,ae=55;const u=()=>{const i=x[Math.floor(Math.random()*x.length)];_.textContent=i.full_name,E.textContent=i.seat_no?`เลขที่ ${i.seat_no}`:"",J(i,!0),Q++,Q<26?(ae=Math.min(ae*1.13,420),setTimeout(u,ae)):(_.textContent=w.full_name,E.textContent=w.seat_no?`เลขที่ ${w.seat_no}`:"",J(w,!1),se==null||se.classList.add("rp-pop"),_.classList.add("rp-pop"),B.style.borderStyle="solid",B.style.borderColor="#10b981",B.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",M&&(M.textContent="🎉 ได้คนนี้แหละ!"),Ht(B),C())};u()}function b(x,w,C){const B=K.querySelector("#rp-stage"),_=K.querySelector("#rp-hint"),E=K.querySelector("#rp-grid");if(!E)return r(x,w,C);let M=[...E.querySelectorAll(".rp-grid-tile")],se=M.find(i=>Number(i.dataset.id)===w.id);if(!se){const i=`hsl(${w.id*47%360},60%,55%)`,j=Math.floor(Math.random()*M.length);M[j].dataset.id=w.id,M[j].innerHTML=(w.image_url?`<img src="${p(w.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${i}">${p((w.full_name??"?").charAt(0))}</div>`)+`<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${w.seat_no??""}</div>`,se=M[j]}_&&(_.textContent="กำลังสุ่ม..."),B.style.borderColor="#fbbf24";let J=null,Q=0,ae=38;const u=()=>{J==null||J.classList.remove("rp-active");const i=M[Math.floor(Math.random()*M.length)];i.classList.add("rp-active"),J=i,Q++,Q<36?(ae=Math.min(ae*1.1,520),setTimeout(u,ae)):(J==null||J.classList.remove("rp-active"),se.classList.add("rp-winner"),_&&(_.textContent=`🎉 ที่ ${w.seat_no??""} ${w.full_name}`),se.scrollIntoView({behavior:"smooth",block:"nearest"}),setTimeout(()=>{t(B,w),C()},900))};u()}function S(x,w,C){const B=K.querySelector("#rp-stage"),_=K.querySelector("#rp-hint"),E=K.querySelector("#rp-elim-grid"),M=K.querySelector("#rp-elim-counter");if(!E)return r(x,w,C);_&&(_.textContent="กำลังตัดออก...");const se=x.filter(j=>j.id!==w.id).sort(()=>Math.random()-.5),J=se.length;let Q=x.length,ae=0;const u=j=>j<.55?50:j<.8?50+(j-.55)/.25*260:310+Math.pow((j-.8)/.2,2)*1400,i=()=>{if(ae>=J){const H=E.querySelector(`[data-id="${w.id}"]`);H==null||H.classList.remove("rp-last"),H==null||H.classList.add("rp-winner"),H==null||H.scrollIntoView({behavior:"smooth",block:"nearest"}),_&&(_.textContent=`🎉 ที่ ${w.seat_no??""} ${w.full_name}`),M&&(M.textContent="เหลือ 1 คน!"),setTimeout(()=>{t(B,w),C()},900);return}const j=E.querySelector(`[data-id="${se[ae].id}"]`);j==null||j.classList.remove("rp-last"),j==null||j.classList.add("rp-eliminated"),Q--,M&&(M.textContent=`เหลือ ${Q} คน`),Q<=4&&E.querySelectorAll(".rp-elim-tile:not(.rp-eliminated)").forEach(H=>H.classList.add("rp-last")),ae++,setTimeout(i,u(ae/(J||1)))};i()}function R(x,w,C){const B=K.querySelector("#rp-stage"),_=K.querySelector("#rp-hint"),E=[K.querySelector("#rp-reel-0"),K.querySelector("#rp-reel-1"),K.querySelector("#rp-reel-2")];if(!E[0])return r(x,w,C);_&&(_.textContent="กำลังหมุน..."),B.style.borderColor="#fbbf24";const M=[x[Math.floor(Math.random()*x.length)],w,x[Math.floor(Math.random()*x.length)]],se=[18,28,22],J=[!1,!1,!1],Q=(j,H)=>{const z=j.querySelector(".rp-reel-inner");z&&(z.style.opacity="0",setTimeout(()=>{const g=`hsl(${H.id*47%360},60%,55%)`;z.innerHTML=`<div class="flex-1 w-full rounded-xl overflow-hidden">${H.image_url?`<img src="${p(H.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-xl" style="background:${g}">${p((H.full_name??"?").charAt(0))}</div>`}</div><div class="text-[9px] font-bold text-gray-600 truncate w-full text-center leading-none mt-1">${p(H.full_name)}</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">${H.seat_no?`ที่ ${H.seat_no}`:"·"}</div>`,z.style.opacity="1"},30))};let ae=0,u=50;const i=()=>{ae++,E.forEach((j,H)=>{J[H]||(ae===se[H]?(J[H]=!0,setTimeout(()=>{Q(j,M[H]),j.classList.add(H===1?"rp-winner-reel":"rp-locked"),H===1&&(_&&(_.textContent="🎉 ได้คนนี้แหละ!"),setTimeout(()=>{t(B,w),C()},900))},200)):Q(j,x[Math.floor(Math.random()*x.length)]))}),J[1]||(u=ae<12?50:Math.min(50*Math.pow(1.09,ae-12),450),setTimeout(i,u))};i()}const f=["#f59e0b","#ec4899","#6366f1","#10b981","#06b6d4","#ef4444","#8b5cf6","#f97316"],h=()=>{const x=m.map(w=>({no:w.no,student_ids:w.items.map(C=>C.id)}));dn(e,x).catch(()=>{})},y=(x,w)=>{const C=Number(x);let B=null;if(m.forEach(_=>{const E=_.items.findIndex(M=>M.id===C);E!==-1&&(B=_.items.splice(E,1)[0])}),B||(B=ee.get(C)),!!B){if(w){const _=m.find(E=>E.no===w);_&&_.items.push(B)}Y(),h()}};function Y(){const x=new Set(m.flatMap(_=>_.items.map(E=>E.id))),w=l.filter(_=>!x.has(_.id)),C=(_,E)=>`
      <div class="relative">
        <select data-move="${_.id}" class="w-full appearance-none text-xs font-medium border border-gray-200 rounded-xl pl-3 pr-7 py-1.5 bg-gray-50 text-gray-600 hover:border-gray-300 focus:border-indigo-400 focus:bg-white outline-none transition cursor-pointer">
          <option value="0" ${E===0?"selected":""}>ยังไม่จัดกลุ่ม</option>
          ${m.map(M=>`<option value="${M.no}" ${M.no===E?"selected":""}>ย้ายไปกลุ่มที่ ${M.no}</option>`).join("")}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-[9px]">▾</span>
      </div>`,B=(_,E,M)=>`
      <div class="py-1.5 px-1.5 -mx-1.5 rounded-xl hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2.5 min-w-0">
          ${_.image_url?`<img src="${p(_.image_url)}" class="w-8 h-11 rounded-xl object-cover flex-shrink-0" style="box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;" />`:`<div class="w-8 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style="background:linear-gradient(160deg,${M},${M}cc);box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;">${p((_.full_name??"?").charAt(0))}</div>`}
          <span class="text-sm font-medium text-gray-700 truncate flex-1 min-w-0">${p(_.full_name)}</span>
        </div>
        <div class="mt-1.5 pl-[calc(2rem+0.625rem)]">${C(_,E)}</div>
      </div>`;K.innerHTML=`
      <div class="flex items-center justify-between gap-2 mb-1 px-0.5">
        <p class="text-xs text-gray-400 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>บันทึกอัตโนมัติทุกการเปลี่ยนแปลง
        </p>
        <button id="rp-group-regen" class="px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">🎲 จัดกลุ่มใหม่</button>
      </div>
      ${w.length?`
      <div class="mt-3 rounded-2xl border border-amber-200/70 p-3.5" style="background:linear-gradient(135deg,#fffbeb,#fff7ed);">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px] flex-shrink-0">!</span>
          <p class="text-xs font-bold text-amber-700">ยังไม่ได้จัดกลุ่ม (${w.length} คน)</p>
        </div>
        <div>${w.map(_=>B(_,0,"#94a3b8")).join("")}</div>
      </div>`:""}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
        ${m.map((_,E)=>{const M=f[E%f.length];return`
          <div class="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
            <div class="px-3.5 py-2.5 text-white flex items-center justify-between" style="background:linear-gradient(135deg,${M},${M}dd);">
              <span class="text-sm font-bold flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center text-xs font-extrabold flex-shrink-0">${_.no}</span>
                กลุ่มที่ ${_.no}
              </span>
              <span class="text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-full flex-shrink-0">${_.items.length} คน</span>
            </div>
            <div class="p-2.5 divide-y divide-gray-50">
              ${_.items.length?_.items.map(se=>B(se,_.no,M)).join(""):`
                <div class="flex flex-col items-center justify-center py-6 text-gray-300">
                  <span class="text-2xl mb-1">🪄</span>
                  <span class="text-xs">ยังไม่มีใครในกลุ่มนี้</span>
                </div>`}
            </div>
          </div>`}).join("")}
      </div>
    `,K.querySelector("#rp-group-regen").addEventListener("click",async()=>{await rt({title:"จัดกลุ่มใหม่?",message:"การจัดกลุ่มปัจจุบันจะถูกล้างทั้งหมด แล้วเริ่มสุ่มใหม่",confirmText:"จัดกลุ่มใหม่"})&&(m=null,rn(e).catch(()=>{}),F())}),K.querySelectorAll("[data-move]").forEach(_=>{_.addEventListener("change",()=>y(_.dataset.move,Number(_.value)))})}function F(){let x="all",w=null,C=new Set(l.map(u=>u.id)),B="count";const _=()=>x==="present"?w?l.filter(u=>w.has(u.id)):[]:x==="manual"?l.filter(u=>C.has(u.id)):l;K.innerHTML=`
      <div class="mb-3">
        <p class="text-xs font-semibold text-gray-500 mb-1.5">นักเรียนที่จะจัดกลุ่ม</p>
        <div class="flex gap-1.5">
          <button data-pool="all" class="rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition">👥 ทั้งห้อง</button>
          <button data-pool="present" class="rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition">✅ มาวันนี้</button>
          <button data-pool="manual" class="rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition">✍️ เลือกเอง</button>
        </div>
        <p id="rp-pool-info" class="text-[11px] text-gray-400 mt-1.5"></p>
        <div id="rp-pool-manual-list" class="hidden mt-2 max-h-40 overflow-y-auto border border-gray-100 rounded-xl p-2"></div>
      </div>
      <div id="rp-count-section"></div>
      <button id="rp-group-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98] mb-4"
        style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 จัดกลุ่มเลย!</button>
    `;const E=u=>{const i=[...u];for(let j=i.length-1;j>0;j--){const H=Math.floor(Math.random()*(j+1));[i[j],i[H]]=[i[H],i[j]]}return i},M=(u,i)=>{const j=E(u);if(!j.length)return[];if(B==="count"){const g=Math.min(i,j.length),X=Array.from({length:g},()=>[]);return j.forEach((N,V)=>X[V%g].push(N)),X}const H=Math.min(i,j.length),z=[];for(let g=0;g<j.length;g+=H)z.push(j.slice(g,g+H));return z},se=()=>{const u=_(),j=new Set(u.map(X=>X.gender).filter(Boolean)).size>1,H=K.querySelector("#rp-count-section");H.innerHTML=`
        <div class="flex items-center gap-2 mb-3">
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="count">📦 กำหนดจำนวนกลุ่ม</button>
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="size">👤 กำหนดคนต่อกลุ่ม</button>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <input id="rp-gnum" type="number" min="1" max="${Math.max(1,u.length)}" value="4"
            class="${qe} w-24 flex-shrink-0 text-center font-bold text-lg" />
          <span id="rp-gnum-label" class="text-xs text-gray-400">กลุ่ม (จากทั้งหมด ${u.length} คน)</span>
        </div>
        ${j?`
        <label class="flex items-start gap-2.5 mb-4 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 cursor-pointer">
          <input id="rp-gender-split" type="checkbox" class="mt-0.5 w-4 h-4 rounded accent-pink-500" />
          <span class="text-xs text-gray-600 leading-relaxed">⚧ <strong>แยกกลุ่มตามเพศ</strong> — แต่ละกลุ่มจะมีนักเรียนเพศเดียวกันเท่านั้น (ไม่ติ๊ก = คละเพศได้ในกลุ่มเดียวกัน)</span>
        </label>`:""}
      `;const z=[...H.querySelectorAll(".rp-gmode-btn")],g=X=>{B=X,z.forEach(V=>{const le=V.dataset.gmode===X;V.className=`rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${le?"border-pink-300 bg-pink-50 text-pink-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`});const N=H.querySelector("#rp-gnum-label");N.textContent=X==="count"?`กลุ่ม (จากทั้งหมด ${u.length} คน)`:`คน/กลุ่ม (จากทั้งหมด ${u.length} คน)`,H.querySelector("#rp-gnum").value=4};z.forEach(X=>X.addEventListener("click",()=>g(X.dataset.gmode))),g("count")},J=()=>{const u=K.querySelector("#rp-pool-info"),i=_().length;x==="all"?u.textContent=`ทั้งห้อง ${l.length} คน`:x==="present"?u.textContent=w===null?"กำลังโหลดข้อมูลเช็คชื่อวันนี้...":`มาเรียนวันนี้ ${i} คน${i===0?" (ยังไม่ได้เช็คชื่อวันนี้ หรือทุกคนขาด/ลา)":""}`:u.textContent=`เลือกไว้ ${i} คน`},Q=()=>{const u=K.querySelector("#rp-pool-manual-list");u.innerHTML=`
        <div class="flex justify-end gap-2 mb-1.5">
          <button id="rp-manual-all" type="button" class="text-[11px] text-indigo-500 hover:underline">เลือกทั้งหมด</button>
          <button id="rp-manual-none" type="button" class="text-[11px] text-gray-400 hover:underline">ไม่เลือกเลย</button>
        </div>
        ${l.map(i=>`
          <label class="flex items-center gap-2 py-1 px-1 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="checkbox" class="rp-manual-cb w-3.5 h-3.5 rounded" data-sid="${i.id}" ${C.has(i.id)?"checked":""} />
            <span class="text-xs text-gray-700 truncate">${p(i.full_name)}</span>
          </label>
        `).join("")}
      `,u.querySelector("#rp-manual-all").addEventListener("click",()=>{C=new Set(l.map(i=>i.id)),Q(),J(),se()}),u.querySelector("#rp-manual-none").addEventListener("click",()=>{C=new Set,Q(),J(),se()}),u.querySelectorAll(".rp-manual-cb").forEach(i=>{i.addEventListener("change",()=>{const j=parseInt(i.dataset.sid,10);i.checked?C.add(j):C.delete(j),J(),se()})})},ae=async u=>{if(x=u,K.querySelectorAll(".rp-pool-btn").forEach(i=>{const j=i.dataset.pool===u;i.className=`rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${j?"border-amber-300 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`}),K.querySelector("#rp-pool-manual-list").classList.toggle("hidden",u!=="manual"),u==="manual"&&Q(),u==="present"&&w===null){J();try{const i=new Date(Date.now()+252e5).toISOString().slice(0,10),j=await ln(e,i);w=new Set(j.filter(H=>H.status==="present"||H.status==="late").map(H=>H.student_id))}catch{w=new Set}}J(),se()};K.querySelectorAll(".rp-pool-btn").forEach(u=>u.addEventListener("click",()=>ae(u.dataset.pool))),ae("all"),K.querySelector("#rp-group-go").addEventListener("click",()=>{var g;if(!d){const X=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);if(X>=k){P();return}localStorage.setItem("pp5_free_random_count",String(X+1))}const u=_();if(!u.length){U("ยังไม่มีนักเรียนในกลุ่มที่เลือกไว้","warning");return}const i=Math.max(1,parseInt(K.querySelector("#rp-gnum").value,10)||1),j=!!((g=K.querySelector("#rp-gender-split"))!=null&&g.checked);let H;j?H=[u.filter(X=>X.gender==="ชาย"),u.filter(X=>X.gender==="หญิง"),u.filter(X=>X.gender!=="ชาย"&&X.gender!=="หญิง")].filter(X=>X.length):H=[u];let z=1;m=H.flatMap(X=>M(X,i).map(N=>({no:z++,items:N}))),Y(),h()})}function te(){m?Y():F()}c("pick")}async function fs(e,o,l,d,T,k,P,D,$="info"){var x,w;(x=document.getElementById("combined-edit-modal"))==null||x.remove();const[O,q,ee,m]=await Promise.all([He(o.id).catch(()=>[]),Le().catch(()=>({})),Hs(o.id).catch(()=>[]),Os(o.class_name).catch(()=>null)]);let I=ee.map(C=>C.students).filter(Boolean);const Z=C=>C?"cem-tab px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px":"cem-tab px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition",G="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200",re=[...new Set(l.map(C=>C.building))].sort(),ne=o.classroom_id?l.find(C=>C.id===o.classroom_id):null,K=T[o.id]??[],de=["","จ","อ","พ","พฤ","ศ","ส","อา"],c=document.createElement("div");c.id="combined-edit-modal",c.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50 p-4",c.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-0 flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขห้องเรียน</h3>
        <button id="cem-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <p class="text-xs text-gray-400 px-6 pb-3 flex-shrink-0">${p(((w=o.master_subjects)==null?void 0:w.subject_name)??"")} · ${p(o.class_name??"")}</p>
      <div class="flex border-b border-gray-100 px-6 flex-shrink-0">
        <button class="${Z(!0)}" data-cem="info">ข้อมูลพื้นฐาน</button>
        <button class="${Z(!1)}" data-cem="schedule">ตารางสอน</button>
        <button class="${Z(!1)}" data-cem="room">ห้องสอน</button>
      </div>
      <div id="cem-content" class="flex-1 overflow-y-auto px-6 py-4"></div>
      <div class="px-6 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="cem-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>
    </div>`,document.body.appendChild(c);let L=!1,v=!1,W=null,A=!1;const s=C=>{const B=c.querySelector("#cem-info-status");if(!B)return;const _={dirty:{cls:"text-amber-500",text:"● มีการเปลี่ยนแปลง"},saving:{cls:"text-indigo-500",text:"⏳ กำลังบันทึก..."},saved:{cls:"text-emerald-600",text:"✅ บันทึกแล้ว"},error:{cls:"text-red-500",text:"⚠️ บันทึกไม่สำเร็จ"}},E=_[C]??_.saved;B.className=`text-xs font-medium ${E.cls}`,B.textContent=E.text,B.classList.remove("hidden")},n=async()=>{var C,B,_,E,M,se,J;if(c.querySelector("#cem-classname")){v=!0,s("saving");try{const Q=(C=c.querySelector("#cem-source-class"))==null?void 0:C.value;await st(o.id,{class_name:c.querySelector("#cem-classname").value.trim()||o.class_name,skill_group:c.querySelector("#cem-skillgroup").value.trim()||null,google_sheet_id:c.querySelector("#cem-sheetid").value.trim()||null,head_student_id:c.querySelector("#cem-head").value?Number(c.querySelector("#cem-head").value):null,day1_date:((B=c.querySelector("#cem-day1"))==null?void 0:B.value)||null,day2_date:((_=c.querySelector("#cem-day2"))==null?void 0:_.value)||null,day3_date:((E=c.querySelector("#cem-day3"))==null?void 0:E.value)||null,day4_date:((M=c.querySelector("#cem-day4"))==null?void 0:M.value)||null,day5_date:((se=c.querySelector("#cem-day5"))==null?void 0:se.value)||null,day6_date:((J=c.querySelector("#cem-day6"))==null?void 0:J.value)||null,source_class_id:Q?Number(Q):null}),L=!1,A=!0,s("saved")}catch{s("error")}finally{v=!1}}},t=(C=!1)=>{L=!0,s("dirty"),clearTimeout(W),W=setTimeout(n,C?0:800)},r=()=>{const C=O.map(B=>`<option value="${B.id}" data-code="${p(B.student_code)}" data-img="${p(B.image_url??"")}" data-room="${p(B.main_room??"")}"
         ${Number(o.head_student_id)===Number(B.id)?"selected":""}>
         ${p(B.full_name)} (${p(B.student_code)})</option>`).join("");return`
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง / ระดับชั้น</label>
        <input id="cem-classname" type="text" value="${p(o.class_name??"")}" class="${G}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">กลุ่มทักษะ</label>
        <input id="cem-skillgroup" type="text" value="${p(o.skill_group??"")}" placeholder="เช่น วิชาการ, ภาษา, ชีวิต" class="${G}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">Google Sheet ID</label>
        <input id="cem-sheetid" type="text" value="${p(o.google_sheet_id??"")}" placeholder="ID จาก URL ของ Sheet" class="${G} font-mono" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">หัวหน้าห้อง</label>
        <select id="cem-head" class="${G} bg-white">
          <option value="">— ยังไม่ระบุ —</option>
          ${C}
        </select>
        ${O.length===0?'<p class="text-xs text-amber-500 mt-1">ยังไม่มีนักเรียนในห้อง จึงยังเลือกหัวหน้าไม่ได้</p>':""}
        <!-- Card หัวหน้าห้อง -->
        <div id="cem-head-card" class="hidden mt-2 flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
          <div id="cem-head-avatar" class="w-10 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 shadow-sm"></div>
          <div>
            <p id="cem-head-name" class="font-semibold text-gray-800 text-sm"></p>
            <p id="cem-head-code" class="text-xs text-gray-400"></p>
            <p id="cem-head-room" class="text-xs text-gray-400"></p>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between mb-2">
          <label class="block text-xs font-semibold text-gray-600">วันสอน 6 คาบแรก</label>
          <button type="button" id="cem-auto-dates"
            class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-medium transition">
            🗓️ คำนวณจากตารางสอน
          </button>
        </div>
        <p id="cem-dates-info" class="hidden text-xs text-emerald-600 mb-2"></p>
        <div class="grid grid-cols-3 gap-2">
          ${[1,2,3,4,5,6].map(B=>`
          <div>
            <p class="text-xs text-gray-400 mb-1">คาบที่ ${B}</p>
            <input id="cem-day${B}" type="date" value="${o[`day${B}_date`]??""}"
              class="w-full border border-gray-200 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>`).join("")}
        </div>
      </div>
      <!-- ใช้ข้อมูลจากห้องเรียนอื่น -->
      <div class="border-t border-gray-100 pt-3">
        <label class="block text-xs font-semibold text-gray-600 mb-1">🔗 ใช้ข้อมูลจากห้องเรียนอื่น</label>
        <p class="text-xs text-gray-400 mb-2">สำหรับวิชาที่ไม่ได้สอนจริง — ปพ.5 จะดึงการเช็คชื่อและคะแนน (เฉพาะที่กรอกเอง) จากห้องที่เลือก</p>
        <select id="cem-source-class" class="${G} text-xs">
          <option value="">— ไม่ได้ใช้ข้อมูลจากห้องอื่น —</option>
        </select>
        <p id="cem-source-info" class="hidden text-xs text-amber-600 mt-1"></p>
      </div>
      <!-- มอบหมายเช็คชื่อแทนครู -->
      <div class="border-t border-gray-100 pt-3">
        <label class="flex items-center justify-between gap-3 cursor-pointer">
          <span>
            <span class="block text-xs font-semibold text-gray-600">🙋 มอบหมายเช็คชื่อแทนครู</span>
            <span class="block text-[11px] text-gray-400 mt-0.5">เลือกนักเรียนที่จะให้เช็คชื่อแทนได้เอง — เฉพาะช่วงเวลาที่กำลังสอนคาบนี้จริง</span>
          </span>
          <input id="cem-attendance-delegate" type="checkbox" class="w-5 h-5 flex-shrink-0" ${o.attendance_delegate_enabled?"checked":""} />
        </label>
        <p id="cem-attendance-delegate-status" class="hidden text-xs font-medium mt-1.5"></p>

        <div class="mt-3 space-y-2">
          <div id="cem-delegate-chips" class="flex flex-wrap gap-1.5"></div>
          <div id="cem-delegate-suggest" class="flex flex-wrap gap-1.5"></div>
          <div class="relative">
            <input id="cem-delegate-search" type="text" placeholder="พิมพ์รหัสหรือชื่อนักเรียนในห้องนี้เพื่อเพิ่ม..."
              class="${G} text-xs" autocomplete="off"
              ${O.length===0?"disabled":""} />
            <div id="cem-delegate-results" class="hidden absolute z-20 left-0 right-0 top-full mt-1 max-h-52 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg"></div>
          </div>
          ${O.length===0?'<p class="text-xs text-amber-500">ยังไม่มีนักเรียนในห้อง จึงยังมอบหมายไม่ได้</p>':""}
        </div>
      </div>
      <p id="cem-info-status" class="hidden text-xs font-medium text-emerald-600"></p>
    </div>`},b=new Set(K),S=new Set(K);e!=null&&e.id&&ut(e.id,o.id).then(C=>{const B=c.querySelector("#cem-source-class");if(!B)return;C.forEach(E=>{const M=E.master_subjects,se=`${(M==null?void 0:M.subject_name)??"?"} (${(M==null?void 0:M.subject_code)??""}) — ${E.class_name} · ${(M==null?void 0:M.credit)??"?"} หน่วยกิต`,J=new Option(se,E.id,!1,Number(E.id)===Number(o.source_class_id));B.appendChild(J)});const _=E=>{var ae,u;const M=c.querySelector("#cem-source-info");if(!M)return;const se=C.find(i=>Number(i.id)===Number(E));if(!se){M.classList.add("hidden");return}const J=((ae=se.master_subjects)==null?void 0:ae.credit)??1,Q=((u=o.master_subjects)==null?void 0:u.credit)??1;J!==Q?(M.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${J} / วิชานี้ ${Q}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,M.classList.remove("hidden")):M.classList.add("hidden")};o.source_class_id&&_(o.source_class_id),B.addEventListener("change",()=>{_(B.value),t(!0)})}).catch(()=>{});const R={};Object.entries(T).forEach(([C,B])=>{B.forEach(_=>{R[_]||(R[_]=[]),R[_].push(Number(C))})});const f=Object.fromEntries((window._classesFlat??[]).map(C=>[C.id,C])),h=()=>{const C=d.filter(i=>!i.is_free);if(!C.length)return'<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อน</p>';const _=q.hasFriday==="true"?6:5,E=Array.from({length:_},(i,j)=>j),M=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],se=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50"],J={};C.forEach(i=>{J[`${i.day_of_week}-${i.period_no}`]=i;const j=i.span_periods??1;for(let H=1;H<j;H++)J[`${i.day_of_week}-${i.period_no+H}`]={...i,_secondary:!0}});const Q=Object.values(k).sort((i,j)=>i.period_no-j.period_no),ae=i=>S.has(i)?"selected":(R[i]??[]).filter(H=>H!==o.id).length?"other":"none",u=(i,j)=>{const H=i.subject_name?p(i.subject_name):"",z=i.class_name?p(i.class_name):"";return j==="selected"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
          <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${H}</p>
          ${z?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${z}</p>`:""}
        </div>`:j==="other"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
          style="min-height:52px;border-left:3px solid #60a5fa"
          title="คลิกเพื่อเชื่อมร่วมกับ: ${(R[i.id]??[]).filter(N=>N!==o.id).map(N=>{var V;return((V=f[N])==null?void 0:V.class_name)??`ห้อง ${N}`}).join(", ")}">
          <p class="font-bold text-[11px] leading-tight text-blue-600 break-words w-full">${H}</p>
          ${z?`<p class="text-[10px] text-blue-400 leading-tight w-full">${z}</p>`:""}
          <p class="text-[9px] text-blue-400 mt-0.5">+เชื่อมร่วม</p>
        </div>`:`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
        bg-white hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400 transition-all"
        style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${H}</p>
        ${z?`<p class="text-[10px] text-gray-400 leading-tight w-full">${z}</p>`:""}
      </div>`};return`
      <p class="text-xs text-gray-400 mb-2">คลิกคาบที่ต้องการเชื่อมโยง — กดบันทึกเพื่อยืนยัน</p>
      <div class="overflow-auto rounded-xl border border-gray-100" style="max-height:55vh">
        <table class="w-full text-xs border-collapse" style="min-width:300px">
          <thead class="sticky top-0 z-10">
            <tr class="bg-gray-50">
              <th class="border border-gray-100 px-2 py-2 text-center text-gray-400 w-16 font-medium text-[10px]">คาบ</th>
              ${E.map(i=>`<th class="border border-gray-100 px-1 py-2 text-center font-semibold text-gray-700 text-[11px] ${se[i]}">${M[i]}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${Q.map(i=>{var j;return`
            <tr>
              <td class="border border-gray-100 px-1 py-2 text-center bg-gray-50 align-middle">
                <p class="font-bold text-gray-700 text-[10px]">คาบ ${i.period_no}</p>
                <p class="text-[9px] text-gray-400">${((j=i.start_time)==null?void 0:j.slice(0,5))??""}</p>
              </td>
              ${E.map(H=>{const z=`${H}-${i.period_no}`,g=J[z];if(g!=null&&g._secondary)return"";if(!g)return'<td class="border border-gray-100 p-0" style="min-width:56px;height:1px"></td>';const X=g.span_periods??1,N=ae(g.id);return`<td class="border border-gray-100 p-0 cursor-pointer cem-srow"
                  data-sid="${g.id}" data-state="${N}"
                  style="min-width:56px;height:1px" ${X>1?`rowspan="${X}"`:""}>
                  ${u(g,N)}
                </td>`}).join("")}
            </tr>`}).join("")}
          </tbody>
        </table>
      </div>`},y=C=>{const B=parseInt(C.dataset.sid),_=d.find(Q=>Q.id===B);if(!_)return;const E=(R[B]??[]).filter(Q=>Q!==o.id),M=S.has(B)?"selected":E.length?"other":"none";C.dataset.state=M;const se=_.subject_name?p(_.subject_name):"",J=_.class_name?p(_.class_name):"";if(M==="selected")C.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
        <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${se}</p>
        ${J?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${J}</p>`:""}
      </div>`;else if(M==="other"){const Q=E.map(ae=>{var u;return((u=f[ae])==null?void 0:u.class_name)??`ห้อง ${ae}`}).join(", ");C.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-gray-100 opacity-50" style="min-height:52px;border-left:3px solid #9ca3af" title="ใช้กับ: ${Q}">
        <p class="font-bold text-[11px] leading-tight text-gray-400 break-words w-full">${se}</p>
        ${J?`<p class="text-[10px] text-gray-400 leading-tight w-full">${J}</p>`:""}
      </div>`}else C.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-white hover:bg-emerald-50 transition-all" style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${se}</p>
        ${J?`<p class="text-[9px] text-gray-400 leading-tight">${J}</p>`:""}
      </div>`},Y=()=>{c.querySelectorAll(".cem-srow").forEach(C=>{C.addEventListener("click",async()=>{const B=parseInt(C.dataset.sid),_=C.dataset.state,E=d.find(M=>M.id===B);if(E)if(_==="other"){const se=(R[B]??[]).filter(u=>u!==o.id).map(u=>{var i;return((i=f[u])==null?void 0:i.class_name)??`ห้อง ${u}`}).join(", "),J=k[E.period_no],Q=J!=null&&J.start_time?J.start_time.slice(0,5):`คาบ ${E.period_no}`,ae=document.createElement("div");ae.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",ae.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 text-center">
              <div class="text-2xl mb-2">🔗</div>
              <p class="font-bold text-gray-800 mb-1">คาบนี้ใช้กับห้องอื่นอยู่</p>
              <p class="text-sm text-gray-500 mb-1">${de[E.day_of_week]} ${Q} · ${p(E.subject_name??"")}</p>
              <p class="text-xs text-gray-500 mb-1">เชื่อมอยู่กับ: <b>${se}</b></p>
              <p class="text-xs text-emerald-600 mb-4">สามารถเชื่อมร่วมกันได้ เช่น กรณีสอนสองห้องพร้อมกัน</p>
              <div class="flex gap-3">
                <button class="cfm-cancel flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
                <button class="cfm-ok flex-1 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold">เชื่อมร่วมกัน</button>
              </div>
            </div>`,document.body.appendChild(ae),ae.querySelector(".cfm-cancel").addEventListener("click",()=>ae.remove()),ae.querySelector(".cfm-ok").addEventListener("click",async()=>{ae.remove();try{await tt(o.id,B),S.add(B),b.add(B),A=!0,y(C),U(`เชื่อมร่วมกับ ${se} แล้ว ✅`,"success")}catch(u){U("เชื่อมไม่สำเร็จ: "+ce(u),"error")}})}else if(_==="selected")try{await Js(o.id,B),S.delete(B),b.delete(B),A=!0,y(C),U("ยกเลิกการเชื่อมแล้ว","info")}catch(M){U("ยกเลิกไม่สำเร็จ: "+ce(M),"error")}else try{await tt(o.id,B),S.add(B),b.add(B),A=!0,y(C),U("เชื่อมตารางสอนแล้ว ✅","success")}catch(M){U("เชื่อมไม่สำเร็จ: "+ce(M),"error")}})})},F=()=>`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
        <select id="cem-building" class="${G} bg-white">
          <option value="">— ไม่ระบุ —</option>
          ${re.map(C=>`<option value="${C}" ${(ne==null?void 0:ne.building)===C?"selected":""}>${C}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
        <select id="cem-room" class="${G} bg-white">
          <option value="">— เลือกอาคารก่อน —</option>
        </select>
      </div>
    </div>`,te=()=>{var X;const C=c.querySelector("#cem-head"),B=c.querySelector("#cem-head-card"),_=()=>{const N=C==null?void 0:C.options[C.selectedIndex];if(!(N!=null&&N.value)){B==null||B.classList.add("hidden");return}const V=N.text.split(" (")[0],le=N.dataset.img??"";c.querySelector("#cem-head-name").textContent=V,c.querySelector("#cem-head-code").textContent=`รหัส: ${N.dataset.code??""}`,c.querySelector("#cem-head-room").textContent=N.dataset.room?`ห้อง: ${N.dataset.room}`:"";const ie=c.querySelector("#cem-head-avatar");ie.innerHTML=le?`<img src="${le}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${V.charAt(0)}</div>`,B==null||B.classList.remove("hidden")};C==null||C.addEventListener("change",()=>{_(),t(!0)}),C!=null&&C.value&&_();const E=c.querySelector("#cem-attendance-delegate"),M=c.querySelector("#cem-attendance-delegate-status"),se=(N,V)=>{M&&(M.textContent=N,M.className=`text-xs font-medium mt-1.5 ${V}`,M.classList.remove("hidden"))};E==null||E.addEventListener("change",async()=>{const N=E.checked;E.disabled=!0,se("⏳ กำลังบันทึก...","text-indigo-500"),fe(()=>import("./teacher-views-attendance-delegate-DMWv0sSB.js"),__vite__mapDeps([34,1,2,10,4,5,11,8,3,6,7,12,13,14,15,16,17,18,19,20])).then(V=>V.toggleAttendanceDelegateForClass(e,o.id,N,le=>{o.attendance_delegate_enabled=le,E.checked=le,se(le?"✅ เปิดใช้งานแล้ว":"● ปิดใช้งานแล้ว",le?"text-emerald-600":"text-gray-400")}).catch(()=>{E.checked=!N}).finally(()=>{E.disabled=!1,E.checked!==!!o.attendance_delegate_enabled&&(E.checked=!!o.attendance_delegate_enabled)}))});const J=c.querySelector("#cem-delegate-chips"),Q=c.querySelector("#cem-delegate-suggest"),ae=c.querySelector("#cem-delegate-search"),u=c.querySelector("#cem-delegate-results"),i=()=>new Set(I.map(N=>N.id)),j=()=>{J&&(J.innerHTML=I.length?I.map(N=>`
          <span class="delegate-chip inline-flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700" data-sid="${N.id}">
            ${N.image_url?`<img src="${p(N.image_url)}" class="w-5 h-5 rounded-full object-cover" />`:`<span class="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center text-[10px]">${p((N.full_name??"?").charAt(0))}</span>`}
            ${p(N.full_name)}
            <button type="button" class="delegate-remove-btn text-emerald-400 hover:text-red-500 ml-0.5" data-sid="${N.id}">✕</button>
          </span>`).join(""):'<p class="text-xs text-gray-300">ยังไม่ได้มอบหมายใคร</p>')},H=()=>{if(!Q)return;const N=i(),V=[],le=(ie,ue)=>{if(!ie||N.has(Number(ie)))return;const xe=O.find(ye=>Number(ye.id)===Number(ie));!xe||V.some(ye=>ye.id===xe.id)||V.push({id:xe.id,full_name:xe.full_name,label:ue})};le(m==null?void 0:m.head_student_id,"หัวหน้าห้อง"),le(m==null?void 0:m.vice_head_student_id,"รองหัวหน้าห้อง"),le(o.head_student_id,"หัวหน้าห้องในฟอร์มนี้"),Q.innerHTML=V.map(ie=>`
        <button type="button" class="delegate-add-suggest-btn inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-dashed border-gray-300 text-xs text-gray-500 hover:border-emerald-300 hover:text-emerald-600" data-sid="${ie.id}">
          ➕ ${p(ie.full_name)} <span class="text-gray-300">(${p(ie.label)})</span>
        </button>`).join("")},z=async N=>{const V=O.find(le=>Number(le.id)===Number(N));if(!(!V||i().has(V.id))){I=[...I,V],j(),H();try{await an(o.id,V.id)}catch(le){I=I.filter(ie=>ie.id!==V.id),j(),H(),U("เพิ่มไม่สำเร็จ: "+ce(le),"error")}}},g=async N=>{const V=I.find(le=>Number(le.id)===Number(N));I=I.filter(le=>Number(le.id)!==Number(N)),j(),H();try{await on(o.id,Number(N))}catch(le){V&&(I=[...I,V]),j(),H(),U("ลบไม่สำเร็จ: "+ce(le),"error")}};J==null||J.addEventListener("click",N=>{const V=N.target.closest(".delegate-remove-btn");V&&g(V.dataset.sid)}),Q==null||Q.addEventListener("click",N=>{const V=N.target.closest(".delegate-add-suggest-btn");V&&z(V.dataset.sid)}),ae==null||ae.addEventListener("input",()=>{const N=ae.value.trim().toLowerCase();if(!N){u.classList.add("hidden"),u.innerHTML="";return}const V=i(),le=O.filter(ie=>!V.has(ie.id)&&(String(ie.student_code??"").toLowerCase().includes(N)||String(ie.full_name??"").toLowerCase().includes(N))).slice(0,8);u.innerHTML=le.length?le.map(ie=>`
          <button type="button" class="delegate-result-btn w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-emerald-50 text-xs" data-sid="${ie.id}">
            ${ie.image_url?`<img src="${p(ie.image_url)}" class="w-6 h-6 rounded-full object-cover" />`:'<span class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">👤</span>'}
            <span class="font-semibold text-gray-700">${p(ie.full_name)}</span>
            <span class="text-gray-400">${p(ie.student_code)}</span>
          </button>`).join(""):'<p class="text-xs text-gray-300 px-3 py-2">ไม่พบนักเรียนที่ตรงกัน</p>',u.classList.remove("hidden")}),u==null||u.addEventListener("click",N=>{const V=N.target.closest(".delegate-result-btn");V&&(z(V.dataset.sid),ae.value="",u.classList.add("hidden"),u.innerHTML="")}),j(),H(),["cem-classname","cem-skillgroup","cem-sheetid"].forEach(N=>{var V;(V=c.querySelector(`#${N}`))==null||V.addEventListener("input",()=>t())}),[1,2,3,4,5,6].forEach(N=>{var V;(V=c.querySelector(`#cem-day${N}`))==null||V.addEventListener("change",()=>t(!0))}),(X=c.querySelector("#cem-auto-dates"))==null||X.addEventListener("click",async()=>{const N=c.querySelector("#cem-auto-dates"),V=c.querySelector("#cem-dates-info");N.textContent="⏳",N.disabled=!0;try{const le=parseInt(q.academicYear??2568),ie=parseInt(q.semester??1),ue=q.semester_start??q.term_start_date??It(new Date),xe=e?await ze(e.id,le,ie).catch(()=>[]):[];if(!xe.length){V.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",V.classList.remove("hidden");return}const ye={};xe.filter(ge=>!ge.is_free).forEach(ge=>{const ve=`${ge.subject_name??"?"}|${ge.class_name??""}`;ye[ve]||(ye[ve]={label:`${ge.subject_name??"?"}${ge.class_name?` — ${ge.class_name}`:""}`,entries:[]}),ye[ve].entries.push(ge)});const dt=["อา","จ","อ","พ","พฤ","ศ","ส"],Ae=ge=>{const ve={};return ge.forEach(Se=>{ve[Se.day_of_week]||(ve[Se.day_of_week]=[]),ve[Se.day_of_week].push(Se.period_no)}),Object.entries(ve).map(([Se,Be])=>`${dt[Se]} คาบ ${Be.join(",")}`).join(" · ")},$e=document.createElement("div");$e.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",$e.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
            <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
              <button class="ce-close text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
              <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
              ${Object.entries(ye).map(([ge,ve])=>`
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
                <input type="radio" name="cem-dates-subj" value="${p(ge)}" class="mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-800">${p(ve.label)}</p>
                  <p class="text-xs text-gray-400 mt-0.5">${Ae(ve.entries)}</p>
                </div>
              </label>`).join("")}
            </div>
            <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
              <button class="ce-close flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="cem-calc-btn" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
            </div>
          </div>`,document.body.appendChild($e),$e.querySelectorAll(".ce-close").forEach(ge=>ge.addEventListener("click",()=>$e.remove())),$e.querySelector("#cem-calc-btn").addEventListener("click",()=>{var we;const ge=(we=$e.querySelector('input[name="cem-dates-subj"]:checked'))==null?void 0:we.value;if(!ge){U("กรุณาเลือกวิชาก่อน","warning");return}$e.remove();const ve=ye[ge];if(!ve)return;const Se=Sn(ue)??new Date,Be=Se.getDay(),pe=[];ve.entries.forEach(he=>{const ke=he.span_periods??1;for(let Me=0;Me<ke;Me++)pe.push({dow:he.day_of_week,pno:(he.period_no??0)+Me})}),pe.sort((he,ke)=>{const Me=(he.dow-Be+7)%7,St=(ke.dow-Be+7)%7;return Me!==St?Me-St:he.pno-ke.pno});const me=[];let be=0;for(;me.length<6;){for(const he of pe){const ke=new Date(Se);if(ke.setDate(ke.getDate()+(he.dow-Be+7)%7+be*7),me.push(ke),me.length>=6)break}be++}me.slice(0,6).forEach((he,ke)=>{const Me=c.querySelector(`#cem-day${ke+1}`);Me&&(Me.value=It(he))}),t(!0),V.textContent=`✅ คำนวณจาก "${ve.label}" — ตรวจสอบและแก้ไขได้`,V.classList.remove("hidden")})}catch(le){V.textContent="โหลดตารางไม่สำเร็จ: "+ce(le),V.classList.remove("hidden")}finally{N.textContent="🗓️ คำนวณจากตารางสอน",N.disabled=!1}})},oe=C=>{if(v){U("กำลังบันทึกข้อมูล รอสักครู่...","warning");return}if(L){U("มีข้อมูลที่ยังไม่ถูกบันทึก กรุณารอระบบบันทึกก่อน","warning");return}c.querySelectorAll(".cem-tab").forEach(_=>{_.className=Z(_.dataset.cem===C)});const B=c.querySelector("#cem-content");if(C==="info")B.innerHTML=r(),te();else if(C==="schedule")B.innerHTML=h(),Y();else{B.innerHTML=F();const _=B.querySelector("#cem-building"),E=B.querySelector("#cem-room"),M=se=>{const J=l.filter(Q=>Q.building===se);E.innerHTML='<option value="">— เลือกห้อง —</option>'+J.map(Q=>`<option value="${Q.id}" ${Q.id===o.classroom_id?"selected":""}>${Q.room_number}${Q.name?` — ${Q.name}`:""}</option>`).join("")};ne!=null&&ne.building&&M(ne.building),_.addEventListener("change",()=>M(_.value)),E.addEventListener("change",async()=>{const se=E.value?parseInt(E.value):null;await Kt(o.id,se).catch(()=>{}),A=!0,U("บันทึกห้องสอนแล้ว ✅","success")})}},a=async()=>{(L||v)&&(clearTimeout(W),await n().catch(()=>{})),c.remove(),A&&D&&D()};oe($),c.querySelectorAll(".cem-tab").forEach(C=>C.addEventListener("click",()=>oe(C.dataset.cem))),c.querySelector("#cem-close").addEventListener("click",a),c.querySelector("#cem-cancel").addEventListener("click",a),c.addEventListener("click",C=>{C.target===c&&a()})}async function Yn(e){je("schedule"),Ie("ตารางสอน","schedule");const o=await Le().catch(()=>({})),l=parseInt(o.academicYear??2568),d=parseInt(o.semester??1);await Pe(e,l,d,o)}async function Pe(e,o,l,d=null){var W,A;je("schedule"),Ie("ตารางสอน","schedule");const T=d??await Le().catch(()=>({})),k=T.hasFriday==="true",P=T.scheduleVisionEnabled==="true",D=as(T,e),[$,O,q,ee,m,I]=await Promise.all([lt().catch(()=>[]),e?Jt(e.id).catch(()=>[]):Promise.resolve([]),e?ze(e.id,o,l).catch(()=>[]):Promise.resolve([]),e?vt(e.id).catch(()=>[]):Promise.resolve([]),e?yt(e.id).catch(()=>[]):Promise.resolve([]),e?ft(e.id).catch(()=>[]):Promise.resolve([])]),Z=Object.fromEntries((ee??[]).map(s=>[s.room_key,s.color_hex])),G=Object.fromEntries(I.map(s=>[s.id,s])),re={};m.forEach(s=>{re[s.teacher_schedule_id]||(re[s.teacher_schedule_id]=G[s.class_id])});const ne=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],K=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50","bg-blue-50"],de=k?6:5,c=Array.from({length:de},(s,n)=>n),L={};for(const s of q)L[`${s.day_of_week}-${s.period_no}`]=s,(s.span_periods??1)>1&&(L[`${s.day_of_week}-${s.period_no+1}`]={...s,_secondary:!0});const v=(s={},n=null)=>{var r;const t=s!=null&&s.id?re[s.id]:null;return Ge({teacherId:e==null?void 0:e.id,className:(t==null?void 0:t.class_name)??s.class_name,subjectName:((r=t==null?void 0:t.master_subjects)==null?void 0:r.subject_name)??s.subject_name??(n==null?void 0:n.subject_name),fallbackId:(t==null?void 0:t.id)??s.subject_id??(n==null?void 0:n.id)},Z)};_e(`<div class="max-w-full animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${l} / ${o} — คลิกช่องเพื่อกำหนดวิชา</p>
      </div>
      <div class="flex gap-2">
        ${P&&D?`
        <button id="btn-upload-schedule"
          class="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition flex items-center gap-2">
          🤖 อัปโหลดรูปตาราง
        </button>`:""}
        <button id="btn-clear-schedule"
          class="px-4 py-2 rounded-xl border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition">
          ล้างตาราง
        </button>
      </div>
    </div>

    <!-- ลิงค์ตารางสอนโรงเรียน -->
    <div class="mb-4 bg-sky-50 border border-sky-200 rounded-2xl px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
      <div class="min-w-0">
        <p class="text-sm font-semibold text-sky-800">📅 ตารางสอนของโรงเรียน</p>
        <p class="text-xs text-sky-600 mt-0.5 leading-relaxed">เปิดดูตารางสอนจากระบบโรงเรียน แล้วแคปหน้าจอมาอัปโหลดผ่านปุ่ม "🤖 อัปโหลดรูปตาราง" เพื่อให้ AI กรอกข้อมูลให้อัตโนมัติ</p>
      </div>
      <a href="http://azizstan.ac.th/2026/Teacher/" target="_blank" rel="noopener"
         class="flex-shrink-0 px-4 py-2 bg-sky-600 text-white rounded-xl font-bold text-sm hover:bg-sky-700 transition whitespace-nowrap">
        เปิดตารางสอน ↗
      </a>
    </div>

    <!-- ตารางสอน -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-auto">
      <table class="w-full text-xs border-collapse" style="min-width:520px">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center text-gray-500 w-24 font-medium">คาบ / เวลา</th>
            ${c.map(s=>`
            <th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${K[s]}">
              ${ne[s]}
            </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${$.map(s=>{var n,t;return`
          <tr class="hover:bg-gray-50/50">
            <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50">
              <p class="font-bold text-gray-700">คาบ ${s.period_no}</p>
              <p class="text-[10px] text-gray-400">${(n=s.start_time)==null?void 0:n.slice(0,5)}–${(t=s.end_time)==null?void 0:t.slice(0,5)}</p>
            </td>
            ${c.map(r=>{const b=`${r}-${s.period_no}`,S=L[b];if(S!=null&&S._secondary)return"";const R=S?O.find(te=>te.id===S.subject_id):null,f=(S==null?void 0:S.span_periods)??1,h=(S==null?void 0:S.subject_name)??(R==null?void 0:R.subject_name)??null,y=(S==null?void 0:S.class_name)??null,Y=(S==null?void 0:S.teacher_name)??null,F=v(S,R);return`<td class="border border-gray-100 p-0 cursor-pointer
                hover:bg-indigo-50/30 transition-colors schedule-cell"
                style="height:1px"
                data-dow="${r}" data-period="${s.period_no}"
                ${f>1?`rowspan="${f}"`:""}>
                ${h?`
                <div class="w-full h-full rounded-none flex flex-col justify-center items-center
                  gap-1 px-2 py-2 text-center" style="min-height:64px;background:${F.soft};color:${F.text};border-left:4px solid ${F.dot}">
                  <p class="font-extrabold leading-tight text-sm break-words w-full">${h}</p>
                  ${y?`<p class="text-[11px] font-semibold opacity-90 leading-tight w-full">${y}</p>`:""}
                  ${Y?`<p class="text-[10px] opacity-65 leading-tight w-full">${Y}</p>`:""}
                </div>`:`
                <div class="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style="min-height:52px">
                  <span class="text-indigo-200 text-2xl">＋</span>
                </div>`}
              </td>`}).join("")}
          </tr>`}).join("")}
        </tbody>
      </table>
    </div>

  </div>`),document.querySelectorAll(".schedule-cell").forEach(s=>{s.addEventListener("click",()=>{const n=parseInt(s.dataset.dow),t=parseInt(s.dataset.period),r=`${n}-${t}`,b=L[r];b!=null&&b._secondary||Kn({teacher:e,dow:n,period:t,periods:$,subjects:O,entry:b,academicYear:o,semester:l,roomColorMap:Z,onSave:async S=>{await ss({teacher_id:e.id,...S}),await Pe(e,o,l,T)},onDelete:async()=>{b&&await cn(b.id),await Pe(e,o,l,T)}})})}),(W=document.getElementById("btn-clear-schedule"))==null||W.addEventListener("click",async()=>{confirm("ยืนยันล้างตารางสอนทั้งหมด?")&&(await Ms(e.id,o,l),await Pe(e,o,l,T),U("ล้างตารางแล้ว","success"))}),(A=document.getElementById("btn-upload-schedule"))==null||A.addEventListener("click",()=>{ys(e,O,$,o,l,D,T)})}async function Kn({teacher:e,dow:o,period:l,periods:d,subjects:T,entry:k,academicYear:P,semester:D,roomColorMap:$={},onSave:O,onDelete:q}){var S,R;(S=document.getElementById("sched-popup"))==null||S.remove();const ee=await Xt().catch(()=>[]),m=await Zt().catch(()=>[]),I=[...new Set([...ee,...m])].sort(),Z=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],G=d.map(f=>f.period_no),re=d.find(f=>f.period_no===l),ne=(k==null?void 0:k.subject_name)??(k!=null&&k.subject_id?((R=T.find(f=>f.id===k.subject_id))==null?void 0:R.subject_name)??"":"");let K=ne,de=(k==null?void 0:k.class_name)??"",c=(k==null?void 0:k.teacher_name)??"",L=Ge({teacherId:e==null?void 0:e.id,className:de,subjectName:ne,fallbackId:k==null?void 0:k.subject_id},$).dot,v=!1;const W=T.map(f=>`<option value="${f.subject_name}">`).join(""),A=I.map(f=>`<option value="${f}">`).join(""),s=Z.map((f,h)=>`<option value="${h}">${f}</option>`).join(""),n=G.map(f=>`<option value="${f}">คาบ ${f}</option>`).join("");let t=k?[{day_of_week:k.day_of_week,period_no:k.period_no,span_periods:k.span_periods??1}]:[{day_of_week:o,period_no:l,span_periods:1}];const r=document.createElement("div");r.id="sched-popup",r.className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",document.body.appendChild(r);function b(){var h,y,Y;const f=We(L);r.innerHTML=`
      <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">กำหนดวิชา</h3>
            <p class="text-xs text-gray-400">${Z[o]} คาบ ${l}${re?` (${(h=re.start_time)==null?void 0:h.slice(0,5)}–${(y=re.end_time)==null?void 0:y.slice(0,5)})`:""}</p>
          </div>
          <button id="sp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <!-- Card body -->
        <div class="overflow-auto flex-1 px-5 py-4">
          <div class="border-2 rounded-xl overflow-hidden" style="border-color:${f.dot}">
            <!-- Subject info -->
            <div class="px-4 py-3 flex items-start gap-3" style="background:${f.dot}18">
              <div class="relative flex-shrink-0 mt-0.5">
                <button id="sp-color" type="button"
                  class="w-11 h-11 rounded-full border-4 border-white shadow-md ring-2 ring-gray-200"
                  style="background:${f.dot}" title="เลือกสีรายวิชา"></button>
                ${v?`
                <div class="absolute left-0 top-14 z-[310] w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">
                  <p class="text-xs font-bold text-gray-500 mb-2">สีรายวิชา</p>
                  <div class="grid grid-cols-6 gap-2">
                    ${Ue.map(F=>`
                    <button type="button"
                      class="sp-color-option w-8 h-8 rounded-full border-2 ${F.dot.toLowerCase()===L.toLowerCase()?"border-gray-800":"border-white"} shadow-sm"
                      style="background:${F.dot}"
                      data-color="${F.dot}"
                      title="เลือกสี"></button>`).join("")}
                  </div>
                </div>`:""}
              </div>
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
                  <input id="sp-subj-name" list="sp-subj-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                    value="${p(K)}" placeholder="ชื่อวิชา" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
                  <input id="sp-class" list="sp-room-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    value="${p(de)}" placeholder="ชั้น/ห้อง เช่น ม.6/2" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
                  <input id="sp-teacher" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                    value="${p(c)}" placeholder="ชื่อครู (ไม่บังคับ)" />
                  <button id="sp-hide-teacher" type="button" class="text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap">ไม่แสดง</button>
                </div>
              </div>
            </div>
            <!-- Sessions -->
            <div id="sp-sessions" class="px-4 pt-3 pb-2 space-y-1.5">
              ${t.map((F,te)=>`
              <div class="flex items-center gap-1.5 sp-sess-row" data-si="${te}">
                <select class="sp-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${te}">
                  ${s}
                </select>
                <select class="sp-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${te}">
                  ${n}
                </select>
                <select class="sp-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-si="${te}">
                  <option value="1">1 คาบ</option>
                  <option value="2">2 คาบ</option>
                  <option value="3">3 คาบ</option>
                  <option value="4">4 คาบ</option>
                </select>
                <button type="button" class="sp-del-sess text-red-300 hover:text-red-500 text-base" data-si="${te}">✕</button>
              </div>`).join("")}
              <button id="sp-add-sess" type="button"
                class="w-full py-1.5 rounded-lg border border-dashed border-gray-200 text-[11px] text-gray-400 hover:border-indigo-300 hover:text-indigo-400 transition">
                + เพิ่มคาบ
              </button>
            </div>
            <!-- Footer -->
            <div class="px-4 pb-3 flex gap-2">
              <button id="sp-save" type="button"
                class="flex-1 py-2 rounded-xl text-xs font-semibold text-white transition"
                style="background:${f.dot}">บันทึก</button>
              ${k?`<button id="sp-delete" type="button"
                class="py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50">ลบ</button>`:""}
            </div>
          </div>
          <datalist id="sp-subj-list">${W}</datalist>
          <datalist id="sp-room-list">${A}</datalist>
        </div>
        <!-- Global cancel -->
        <div class="px-5 pb-5 pt-2 border-t border-gray-100 flex-shrink-0">
          <button id="sp-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`,t.forEach((F,te)=>{const oe=r.querySelector(`.sp-sess-row[data-si="${te}"]`);oe&&(oe.querySelector(".sp-dow").value=F.day_of_week??o,oe.querySelector(".sp-period").value=F.period_no??l,oe.querySelector(".sp-span").value=F.span_periods??1)}),r.querySelector("#sp-close").addEventListener("click",()=>r.remove()),r.querySelector("#sp-cancel").addEventListener("click",()=>r.remove()),r.querySelector("#sp-subj-name").addEventListener("input",F=>{K=F.target.value}),r.querySelector("#sp-class").addEventListener("input",F=>{de=F.target.value}),r.querySelector("#sp-teacher").addEventListener("input",F=>{c=F.target.value}),r.querySelector("#sp-color").addEventListener("click",()=>{v=!v,b()}),r.querySelector("#sp-hide-teacher").addEventListener("click",()=>{c="",r.querySelector("#sp-teacher").value=""}),r.querySelectorAll(".sp-color-option").forEach(F=>F.addEventListener("click",()=>{L=F.dataset.color,v=!1,b()})),r.querySelectorAll(".sp-dow").forEach(F=>F.addEventListener("change",()=>{t[+F.dataset.si].day_of_week=+F.value})),r.querySelectorAll(".sp-period").forEach(F=>F.addEventListener("change",()=>{t[+F.dataset.si].period_no=+F.value})),r.querySelectorAll(".sp-span").forEach(F=>F.addEventListener("change",()=>{t[+F.dataset.si].span_periods=+F.value})),r.querySelectorAll(".sp-del-sess").forEach(F=>F.addEventListener("click",()=>{t.splice(+F.dataset.si,1),t.length||t.push({day_of_week:o,period_no:l,span_periods:1}),b()})),r.querySelector("#sp-add-sess").addEventListener("click",()=>{t.push({day_of_week:o,period_no:G[0]??l,span_periods:1}),b()}),(Y=r.querySelector("#sp-delete"))==null||Y.addEventListener("click",async()=>{r.remove(),await q()}),r.querySelector("#sp-save").addEventListener("click",async()=>{var x,w,C,B;const F=r.querySelector("#sp-subj-name").value.trim()||null,te=r.querySelector("#sp-class").value.trim()||null,oe=r.querySelector("#sp-teacher").value.trim()||null,a=((x=T.find(_=>_.subject_name===F))==null?void 0:x.id)??null;if(te||F||a)try{await ts({teacher_id:e.id,room_key:it({className:te,subjectName:F,fallbackId:a}),class_name:te,color_hex:L})}catch(_){U("บันทึกสีไม่ได้: "+ce(_),"warning")}r.remove(),await O({day_of_week:((w=t[0])==null?void 0:w.day_of_week)??o,period_no:((C=t[0])==null?void 0:C.period_no)??l,span_periods:((B=t[0])==null?void 0:B.span_periods)??1,subject_id:a,subject_name:F,class_name:te,teacher_name:oe,note:null,academic_year:P,semester:D})})}b()}async function ys(e,o,l,d,T,k,P){var de;(de=document.getElementById("vision-upload"))==null||de.remove();const D=await Xt().catch(()=>[]),$=await Zt().catch(()=>[]),O=[...new Set([...D,...$])].sort(),q=e!=null&&e.id?await vt(e.id).catch(()=>[]):[],ee=Object.fromEntries((q??[]).map(c=>[c.room_key,c.color_hex])),m=document.createElement("div");m.id="vision-upload",m.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",m.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[92vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">🤖 วิเคราะห์รูปตารางสอน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อัปโหลดรูปตารางสอน → AI จะเติมข้อมูลลงตารางให้</p>
        </div>
        <button id="vision-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="overflow-auto flex-1 px-5 py-4 space-y-3">

        <!-- ลิงค์ดูตารางสอนโรงเรียน -->
        <div class="bg-sky-50 border border-sky-200 rounded-xl p-3 space-y-2">
          <div class="flex items-center justify-between gap-3">
            <p class="text-xs font-semibold text-sky-800">📅 ตารางสอนของโรงเรียน</p>
            <a href="http://azizstan.ac.th/2026/Teacher/" target="_blank" rel="noopener"
               class="flex-shrink-0 px-3 py-1.5 bg-sky-600 text-white rounded-lg font-bold text-[11px] hover:bg-sky-700 transition">
              เปิดตารางสอน ↗
            </a>
          </div>
          <p class="text-xs text-sky-700 leading-relaxed">ระบบมีเครื่องมือช่วยกรอกตารางสอนอัตโนมัติ — เปิดตารางสอนจากระบบโรงเรียน แล้วแคปหน้าจอมาอัปโหลดที่นี่ AI จะเติมข้อมูลให้</p>
        </div>

        <!-- คำแนะนำแคปหน้าจอ -->
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 space-y-1.5">
          <p class="font-semibold">📸 วิธีแคปหน้าจอให้ถูกต้อง</p>
          <ul class="space-y-1 leading-relaxed">
            <li>• ให้เห็น <b>คอลัมน์ซ้ายสุด</b> (คาบ / ช่วงเวลา) ครบทุกคาบ</li>
            <li>• ให้เห็น <b>แถวบนสุด</b> (วัน อาทิตย์ – ศุกร์) ครบทุกวัน</li>
            <li>• แคปเฉพาะ<b>ส่วนตาราง</b> ตัดส่วนหัวหน้าเว็บออก</li>
          </ul>
          <div class="mt-2 pt-2 border-t border-amber-200">
            <p class="font-semibold text-amber-900">⚠️ หลัง AI ดึงข้อมูลเสร็จ — ตรวจสอบตารางของแต่ละห้องให้ถูกต้อง แล้ว<u>กดบันทึกทันที</u></p>
          </div>
        </div>

        <!-- format hint -->
        <div class="bg-violet-50 border border-violet-200 rounded-xl p-3 text-xs text-violet-700">
          💡 แต่ละช่องตารางมี 3 บรรทัด: <b>ชื่อวิชา</b> (ตัวหนา) / <b>ชั้น/ห้อง</b> / <b>ชื่อครู</b>
        </div>

        <label id="vision-label"
          class="flex flex-col items-center gap-3 border-2 border-dashed border-violet-200
                 rounded-xl py-8 cursor-pointer hover:bg-violet-50 hover:border-violet-400 transition">
          <span class="text-5xl">📷</span>
          <span class="text-sm font-medium text-gray-600">แตะเพื่อเลือกรูปตาราง</span>
          <span class="text-xs text-gray-400">JPG, PNG — ควรชัดเจนและครบทั้งตาราง</span>
          <input type="file" id="vision-file" accept="image/*" class="sr-only" />
        </label>
        <div id="vision-preview" class="hidden">
          <img id="vision-img" class="w-full rounded-xl max-h-40 object-contain border border-gray-100" />
        </div>
        <p id="vision-status" class="text-sm text-center text-gray-400 hidden"></p>
        <div id="vision-result" class="hidden space-y-3">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            ผลการวิเคราะห์ — แก้ไขได้ก่อนบันทึก
          </p>
          <div id="vision-groups" class="space-y-3"></div>
          <button id="vision-add-group"
            class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200
                   text-xs text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
            + เพิ่มกลุ่มวิชาใหม่
          </button>
        </div>
      </div>
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="vision-cancel" class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        <button id="vision-analyze" class="flex-1 py-3 rounded-xl bg-violet-600 text-white text-sm font-bold hover:bg-violet-700 disabled:opacity-50" disabled>
          🔍 วิเคราะห์
        </button>
        <button id="vision-save" class="hidden flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 font-bold hover:bg-gray-50">
          ✕ ปิด
        </button>
      </div>
    </div>`,document.body.appendChild(m),m.querySelector("#vision-cancel").addEventListener("click",()=>m.remove()),m.querySelector("#vision-close").addEventListener("click",()=>m.remove());let I=null,Z="image/jpeg",G=[];const re=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],ne=l.map(c=>c.period_no);function K(){const c=m.querySelector("#vision-groups");if(!c)return;const L=re.map((s,n)=>`<option value="${n}">${s}</option>`).join(""),v=ne.map(s=>`<option value="${s}">คาบ ${s}</option>`).join(""),W=o.map(s=>`<option value="${s.subject_name}">`).join(""),A=O.map(s=>`<option value="${s}">`).join("");c.innerHTML="",G.forEach((s,n)=>{const t=s.color_hex?We(s.color_hex):Ge({teacherId:e==null?void 0:e.id,className:s.class_name,subjectName:s.subject_name,fallbackId:s.subject_id},ee),r=document.createElement("div");r.className="border-2 rounded-xl overflow-hidden vg-card",r.style.borderColor=t.dot,r.innerHTML=`
        <!-- Group header -->
        <div class="px-4 py-3 flex items-start gap-3" style="background:${t.dot}18">
          <button type="button" class="vg-color w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow mt-0.5"
            style="background:${t.dot}" title="สีประจำห้อง" data-gi="${n}"></button>
          <div class="flex-1 space-y-1.5 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
              <input list="subj-list-${n}" class="vg-subj-name flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                value="${s.subject_name??""}" placeholder="ชื่อวิชา" data-gi="${n}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
              <input list="room-list-${n}" class="vg-class flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                value="${s.class_name??""}" placeholder="ชั้น/ห้อง เช่น ม.6/2" data-gi="${n}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
              <input class="vg-teacher flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                value="${s.teacher_name??""}" placeholder="ชื่อครู (ไม่บังคับ)" data-gi="${n}" />
              <button type="button" class="vg-hide-teacher text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap" data-gi="${n}">
                ไม่แสดงชื่อครู
              </button>
            </div>
            <div class="flex items-center gap-1.5 pt-1">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">สี</span>
              <div class="flex flex-wrap gap-1.5">
                ${Ue.map(b=>`
                <button type="button"
                  class="vg-color-option w-5 h-5 rounded-full border-2 ${b.dot.toLowerCase()===t.dot.toLowerCase()?"border-gray-700":"border-white"} shadow-sm"
                  style="background:${b.dot}"
                  data-gi="${n}"
                  data-color="${b.dot}"
                  title="เลือกสี"></button>`).join("")}
              </div>
            </div>
          </div>
        </div>
        <!-- Sessions -->
        <div class="px-4 pt-3 pb-2 space-y-1.5 vg-sessions" data-gi="${n}">
          ${s.sessions.map((b,S)=>`
          <div class="flex items-center gap-1.5 vs-row" data-gi="${n}" data-si="${S}">
            <select class="vs-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${n}" data-si="${S}">
              ${L}
            </select>
            <select class="vs-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${n}" data-si="${S}">
              ${v}
            </select>
            <select class="vs-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-gi="${n}" data-si="${S}">
              <option value="1">1 คาบ</option>
              <option value="2">2 คาบ</option>
              <option value="3">3 คาบ</option>
              <option value="4">4 คาบ</option>
            </select>
            <button type="button" class="vs-del text-red-300 hover:text-red-500 text-base" data-gi="${n}" data-si="${S}">✕</button>
          </div>`).join("")}
          <button type="button" class="vg-add-session w-full py-1.5 rounded-lg border border-dashed border-gray-200
            text-[11px] text-gray-400 hover:border-indigo-300 hover:text-indigo-400 transition" data-gi="${n}">
            + เพิ่มคาบ
          </button>
        </div>
        <!-- Group footer: บันทึกกลุ่มนี้ + ลบกลุ่ม -->
        <div class="px-4 pb-3 flex gap-2">
          <button type="button" class="vg-save-group flex-1 py-2 rounded-xl text-xs font-semibold text-white transition"
            style="background:${t.dot}" data-gi="${n}">
            ✅ บันทึกกลุ่มนี้
          </button>
          <button type="button" class="vg-del-group py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50 transition" data-gi="${n}">
            ลบกลุ่ม
          </button>
        </div>
        <datalist id="subj-list-${n}">${W}</datalist>
        <datalist id="room-list-${n}">${A}</datalist>`,c.appendChild(r),s.sessions.forEach((b,S)=>{const R=r.querySelector(`.vs-row[data-gi="${n}"][data-si="${S}"]`);R&&(R.querySelector(".vs-dow").value=b.day_of_week??0,R.querySelector(".vs-period").value=b.period_no??1,R.querySelector(".vs-span").value=b.span_periods??1)})}),c.querySelectorAll(".vg-subj-name").forEach(s=>s.addEventListener("input",()=>{G[+s.dataset.gi].subject_name=s.value})),c.querySelectorAll(".vg-class").forEach(s=>s.addEventListener("input",()=>{G[+s.dataset.gi].class_name=s.value})),c.querySelectorAll(".vg-teacher").forEach(s=>s.addEventListener("input",()=>{G[+s.dataset.gi].teacher_name=s.value})),c.querySelectorAll(".vg-hide-teacher").forEach(s=>s.addEventListener("click",()=>{const n=+s.dataset.gi;G[n].teacher_name="";const t=c.querySelector(`.vg-teacher[data-gi="${n}"]`);t&&(t.value="")})),c.querySelectorAll(".vg-color-option").forEach(s=>s.addEventListener("click",()=>{G[+s.dataset.gi].color_hex=s.dataset.color,K()})),c.querySelectorAll(".vg-del-group").forEach(s=>s.addEventListener("click",()=>{G.splice(+s.dataset.gi,1),K()})),c.querySelectorAll(".vg-save-group").forEach(s=>s.addEventListener("click",async()=>{var b;const n=+s.dataset.gi,t=G[n],r=s.textContent;s.disabled=!0,s.textContent="⏳ กำลังบันทึก...";try{const S=t.color_hex??Ge({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},ee).dot;(t.class_name||t.subject_name||t.subject_id)&&await ts({teacher_id:e.id,room_key:it({className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id}),class_name:((b=t.class_name)==null?void 0:b.trim())||null,color_hex:S}).catch(R=>U("บันทึกสีไม่ได้: "+ce(R),"warning")),await Promise.all(t.sessions.map(R=>{var f,h,y;return ss({teacher_id:e.id,subject_id:t.subject_id??null,subject_name:((f=t.subject_name)==null?void 0:f.trim())||null,class_name:((h=t.class_name)==null?void 0:h.trim())||null,teacher_name:((y=t.teacher_name)==null?void 0:y.trim())||null,day_of_week:R.day_of_week,period_no:R.period_no,span_periods:R.span_periods??1,academic_year:d,semester:T})})),s.textContent="✅ บันทึกแล้ว",s.style.background="#16a34a",setTimeout(()=>{const R=t.color_hex?We(t.color_hex):Ge({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},ee);s.disabled=!1,s.textContent=r,s.style.background=R.dot},2e3),Pe(e,d,T,P).catch(()=>{})}catch(S){U("บันทึกกลุ่มนี้ไม่สำเร็จ: "+ce(S),"error"),s.disabled=!1,s.textContent=r}})),c.querySelectorAll(".vs-dow").forEach(s=>s.addEventListener("change",()=>{G[+s.dataset.gi].sessions[+s.dataset.si].day_of_week=+s.value})),c.querySelectorAll(".vs-period").forEach(s=>s.addEventListener("change",()=>{G[+s.dataset.gi].sessions[+s.dataset.si].period_no=+s.value})),c.querySelectorAll(".vs-span").forEach(s=>s.addEventListener("change",()=>{G[+s.dataset.gi].sessions[+s.dataset.si].span_periods=+s.value})),c.querySelectorAll(".vs-del").forEach(s=>s.addEventListener("click",()=>{const n=G[+s.dataset.gi];n.sessions.splice(+s.dataset.si,1),n.sessions.length||G.splice(+s.dataset.gi,1),K()})),c.querySelectorAll(".vg-add-session").forEach(s=>s.addEventListener("click",()=>{G[+s.dataset.gi].sessions.push({day_of_week:0,period_no:ne[0]??1,span_periods:1}),K()}))}m.querySelector("#vision-file").addEventListener("change",c=>{const L=c.target.files[0];if(!L)return;Z=L.type||"image/jpeg";const v=new FileReader;v.onload=W=>{I=W.target.result.split(",")[1],m.querySelector("#vision-img").src=W.target.result,m.querySelector("#vision-preview").classList.remove("hidden"),m.querySelector("#vision-analyze").disabled=!1,m.querySelector("#vision-label").classList.add("hidden")},v.readAsDataURL(L)}),m.querySelector("#vision-analyze").addEventListener("click",async()=>{var v,W,A,s,n;if(!I)return;const c=m.querySelector("#vision-analyze"),L=m.querySelector("#vision-status");c.disabled=!0,c.textContent="⏳ กำลังวิเคราะห์...",L.textContent="กำลังส่งรูปไป Gemini AI...",L.classList.remove("hidden");try{const t=o.map(te=>`"${te.subject_name}" (id:${te.id})`).join(", "),b=`วิเคราะห์ตารางสอนในภาพนี้อย่างละเอียด
แต่ละช่องในตารางมี 3 ส่วน: บรรทัด1=ชื่อวิชา(ตัวหนาภาษาอังกฤษ), บรรทัด2=ชั้น/ห้องเรียน, บรรทัด3=ชื่อครู
คาบเรียน: ${l.map(te=>{var oe,a;return`คาบ ${te.period_no}: ${(oe=te.start_time)==null?void 0:oe.slice(0,5)}-${(a=te.end_time)==null?void 0:a.slice(0,5)}`}).join(", ")}
วันเรียน: 0=อาทิตย์,1=จันทร์,2=อังคาร,3=พุธ,4=พฤหัส,5=ศุกร์
วิชาที่ครูสอน (อาจตรงกับในตาราง): ${t||"ไม่ระบุ"}

สำคัญ: จัดกลุ่มตามวิชา+ห้องเรียน เช่น MATH ม.5/Ash-Shafi'i ที่สอนหลายวัน ให้อยู่ในกลุ่มเดียวกัน

Return JSON array เท่านั้น (ไม่มีข้อความอื่น):
[{
  "subject_name": "MATH",
  "class_name": "M.5 Ash-Shafi'i",
  "teacher_name": "Hambali Waji",
  "subject_id": null,
  "sessions": [
    {"day_of_week":0,"period_no":1,"span_periods":2},
    {"day_of_week":1,"period_no":3,"span_periods":1}
  ]
}]
- subject_id: ใส่ id ถ้า subject_name ตรงกับวิชาในรายการ ถ้าไม่ตรงให้ null
- span_periods: 1,2,3,4 ตามจำนวนช่องที่รวมกัน (merged cells)
- ช่องว่างไม่ต้องใส่`,{data:S,error:R}=await ns.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:b,imageBase64:I,imageMimeType:Z}});if(R)throw new Error(R.message??"Edge Function error");if(S!=null&&S.error)throw new Error(`Gemini: ${S.error.message??S.error.status}`);const f=((n=(s=(A=(W=(v=S.candidates)==null?void 0:v[0])==null?void 0:W.content)==null?void 0:A.parts)==null?void 0:s[0])==null?void 0:n.text)??"",h=f.match(/```json\s*([\s\S]*?)```/)||f.match(/(\[[\s\S]*?\])/),y=h?h[1]??h[0]:null;if(!y)throw console.error("Raw:",f),new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");G=JSON.parse(y).map(te=>({...te,sessions:(te.sessions??[]).map(oe=>({...oe}))})),K(),m.querySelector("#vision-result").classList.remove("hidden"),m.querySelector("#vision-save").classList.remove("hidden");const F=G.reduce((te,oe)=>te+oe.sessions.length,0);L.textContent=`✅ พบ ${G.length} กลุ่มวิชา ${F} คาบ — ตรวจสอบแล้วกด "บันทึก"`}catch(t){console.error("Vision error:",t);const r=t.message??"ไม่ทราบสาเหตุ";L.innerHTML=`
        <span class="text-red-500 font-medium">❌ ${r}</span>
        <br/><span class="text-gray-400 text-xs">ปัญหานี้ต้องให้แอดมินแก้ไข</span>`;const b="vision-err-feedback";if(!m.querySelector(`#${b}`)){const S=document.createElement("button");S.id=b,S.className="mt-2 w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition",S.textContent="📨 แจ้งปัญหานี้ให้แอดมิน",S.addEventListener("click",()=>{var R;m.remove(),(R=window._openFeedbackWidget)==null||R.call(window,`[ตารางสอน AI] ${r}`)}),L.after(S)}}finally{c.disabled=!1,c.textContent="🔍 วิเคราะห์อีกครั้ง"}}),m.querySelector("#vision-add-group").addEventListener("click",()=>{G.push({subject_name:"",class_name:"",teacher_name:"",subject_id:null,sessions:[{day_of_week:0,period_no:ne[0]??1,span_periods:1}]}),m.querySelector("#vision-result").classList.remove("hidden"),m.querySelector("#vision-save").classList.remove("hidden"),K()}),m.querySelector("#vision-save").addEventListener("click",async()=>{m.remove(),await Pe(e,d,T,P)})}async function Jn(e,o){var O,q,ee;const l=await Le().catch(()=>({})),d=parseInt(l.academicYear??2568),T=parseInt(l.semester??1),k=l.scheduleVisionEnabled==="true",P=as(l,e);je("schedule"),Ie("สร้างตารางสอน","schedule"),_e(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-indigo-400 to-violet-400 text-white
                  text-3xl rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🗓️
      </div>
      <h2 class="text-2xl font-bold text-gray-800">สร้างตารางสอน</h2>
      <p class="text-gray-500 text-sm mt-1">ภาค ${T} / ${d}</p>
    </div>

    ${k&&P?`
    <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-4">
      <div class="flex items-start gap-4">
        <div class="text-4xl flex-shrink-0">🤖</div>
        <div class="flex-1">
          <h3 class="font-bold text-violet-900 mb-1">แนะนำ: อัปโหลดรูปตาราง</h3>
          <p class="text-sm text-violet-700 mb-3">
            แคปหน้าจอตารางสอนที่โรงเรียนออกให้ แล้วให้ AI อ่านข้อมูลเติมลงตารางให้อัตโนมัติ
            จากนั้นตรวจสอบและแก้ไขได้
          </p>
          <button id="btn-open-vision"
            class="px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition">
            📷 อัปโหลดรูปตาราง
          </button>
        </div>
      </div>
    </div>
    <div class="text-center text-gray-400 text-sm mb-4">— หรือ —</div>`:""}

    <div class="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 class="font-bold text-gray-800 mb-2">กรอกตารางเอง</h3>
      <p class="text-sm text-gray-500 mb-4">คลิกช่องตารางเพื่อเลือกวิชาที่สอนในแต่ละคาบ</p>
      <button id="btn-open-grid"
        class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        ✏️ เปิดตารางสอน
      </button>
    </div>

    <div class="mt-6 text-center">
      <button id="btn-skip-schedule"
        class="text-sm text-gray-400 hover:text-gray-600 underline">
        ข้ามไปก่อน (กรอกทีหลังในเมนูตารางสอน)
      </button>
    </div>
  </div>`);const D=e?await Jt(e.id).catch(()=>[]):[],$=await lt().catch(()=>[]);(O=document.getElementById("btn-open-vision"))==null||O.addEventListener("click",()=>{ys(e,D,$,d,T,P,l)}),(q=document.getElementById("btn-open-grid"))==null||q.addEventListener("click",()=>{Pe(e,d,T,l)}),(ee=document.getElementById("btn-skip-schedule"))==null||ee.addEventListener("click",()=>{o&&o()})}const at=[{group:"ชื่อแท็บภาษา",fields:[["label","ชื่อแท็บ (แสดงบนปุ่มแท็บทุกจุด)"]]},{group:"หัวตาราง",fields:[["tableTitle","ชื่อตาราง มาตรฐาน/ตัวชี้วัด"],["tableHint","คำอธิบายตาราง (hint)"]]},{group:"คอลัมน์",fields:[["colsBasic","คอลัมน์พื้นฐาน (คั่นด้วย | )"],["colsExtra","คอลัมน์เพิ่มเติม (คั่นด้วย | )"],["tplBasic","ชื่อปุ่มเทมเพลตพื้นฐาน"],["tplExtra","ชื่อปุ่มเทมเพลตเพิ่มเติม"],["rowHeader","หัวคอลัมน์ข้อ/ลำดับ"]]},{group:"คำอธิบายรายวิชา",fields:[["descLabel","Label ช่องคำอธิบายรายวิชา"],["descPlaceholder","Placeholder คำอธิบายรายวิชา"]]},{group:"ผู้ลงนาม",fields:[["signerLabel","Label ผู้ลงนาม"],["signerPlaceholder","Placeholder ผู้ลงนาม"],["signerHint","คำใต้ช่องผู้ลงนาม"]]},{group:"จุดประสงค์วัดผล",fields:[["objTitle","หัวข้อจุดประสงค์"],["between","ป้ายระหว่างภาค"],["mid","ป้ายกลางภาค"],["final","ป้ายปลายภาค"],["pickerTitleBetween","ชื่อ dialog — ระหว่างภาค"],["pickerTitleMid","ชื่อ dialog — กลางภาค"],["pickerTitleFinal","ชื่อ dialog — ปลายภาค"]]},{group:"ส่วนช่วยเติมข้อมูล",fields:[["helpTitle","หัวข้อแผง AI"],["helpSub","คำอธิบายแผง AI"],["topicLabel","Label บท/เรื่อง"],["topicPlaceholder","Placeholder บท/เรื่อง"],["btnCurriculum","ปุ่มค้นหลักสูตร"],["btnAI","ปุ่ม AI ร่าง"],["btnImg","ปุ่มอ่านรูป"]]},{group:"ข้อความปุ่ม/Toast",fields:[["save","ปุ่มบันทึก"],["close","ปุ่มปิด"],["addTopic","ปุ่มเพิ่มบท"],["addCol","ปุ่มเพิ่มคอลัมน์"],["addRow","ปุ่มเพิ่มแถว"],["delRow","ปุ่มลบแถว"],["pickerOk","ปุ่ม OK ใน dialog"],["pickerCancel","ปุ่มยกเลิก ใน dialog"],["toastSaved","Toast บันทึกสำเร็จ"],["toastSearchEmpty","Toast ไม่พบในหลักสูตรแกนกลาง"],["toastAIDone","Toast AI ร่างสำเร็จ"],["toastImgDone","Toast อ่านรูปสำเร็จ"],["noOpts","ข้อความเมื่อยังไม่มีข้อ"],["notSelected","ข้อความยังไม่เลือก"]]}];function Vt(e,o){var T,k,P;const l={...o,...e},d={};for(const{fields:D}of at)for(const[$]of D)$==="colsBasic"?d[$]=(l.colsBasic??[]).join(" | "):$==="colsExtra"?d[$]=(l.colsExtra??[]).join(" | "):$==="pickerTitleBetween"?d[$]=((T=l.pickerTitles)==null?void 0:T.between)??"":$==="pickerTitleMid"?d[$]=((k=l.pickerTitles)==null?void 0:k.mid)??"":$==="pickerTitleFinal"?d[$]=((P=l.pickerTitles)==null?void 0:P.final)??"":d[$]=l[$]??"";return d}function Xn(e){const o={};for(const{fields:l}of at)for(const[d]of l){const T=String(e[d]??"").trim();d==="colsBasic"?o.colsBasic=T.split("|").map(k=>k.trim()).filter(Boolean):d==="colsExtra"?o.colsExtra=T.split("|").map(k=>k.trim()).filter(Boolean):d==="pickerTitleBetween"?(o.pickerTitles=o.pickerTitles??{},o.pickerTitles.between=T):d==="pickerTitleMid"?(o.pickerTitles=o.pickerTitles??{},o.pickerTitles.mid=T):d==="pickerTitleFinal"?(o.pickerTitles=o.pickerTitles??{},o.pickerTitles.final=T):o[d]=T}return o}async function Zn(e,o=!1){je("course-doc-lang"),Ie("ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)"),_e(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);const l=["th","jawi","ar","rumi"],d={th:"ภาษาไทย",jawi:"يَاوِي (Jawi)",ar:"العربية",rumi:"Rumi (Melayu)"},T={th:"ltr",jawi:"rtl",ar:"rtl",rumi:"ltr"},[k,P]=await Promise.all([js().catch(()=>[]),o?fe(()=>import("./api-Cf_Y4s92.js"),__vite__mapDeps([1,2])).then(m=>m.getTeachers()).catch(()=>[]):Promise.resolve([])]),D=Object.fromEntries(k.map(m=>[m.lang_key,m])),$=o?l:l.filter(m=>{const I=D[m];return I&&(e==null?void 0:e.id)&&(I.editor_teacher_ids??[]).includes(e.id)});if(!$.length){_e(`<div class="max-w-lg mx-auto text-center py-20 text-gray-400">
      <p class="text-4xl mb-4">🔒</p>
      <p class="font-medium">ยังไม่มีสิทธิ์แก้ไขภาษาใด</p>
      <p class="text-xs mt-1">ขอสิทธิ์จากแอดมินเพื่อแก้ไขภาษาที่รับผิดชอบ</p>
    </div>`);return}let O=$[0];const q=m=>{var I,Z,G;return((Z=(I=D[m])==null?void 0:I.settings)==null?void 0:Z.label)||((G=COURSE_DOC_LANGS[m])==null?void 0:G.label)||d[m]||m},ee=()=>{var W,A;const m=$.map(s=>`
      <button class="cdl-tab px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap
        ${s===O?"bg-emerald-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
        data-lang="${s}" dir="${T[s]}">${q(s)}</button>`).join(""),I=D[O]??{settings:{},editor_teacher_ids:[]},Z=COURSE_DOC_LANGS[O]??{},G=Vt(I.settings??{},Z),re=T[O],ne=D.th??{},K=Vt(ne.settings??{},COURSE_DOC_LANGS.th??{}),de=O!=="th",c=at.map(({group:s,fields:n})=>`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${s}</p>
        ${de?`
        <div class="flex items-center gap-3 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-t-xl">
          <span class="w-44 flex-shrink-0"></span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">ภาษาไทย (อ้างอิง)</span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider" dir="${re}">${q(O)}</span>
        </div>`:""}
        <div class="bg-white rounded-xl ${de?"rounded-tl-none rounded-tr-none":""} border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          ${n.map(([t,r])=>`
          <div class="flex items-start gap-3 px-4 py-3">
            <label class="w-44 flex-shrink-0 text-xs text-gray-500 pt-1.5 leading-tight">${r}</label>
            ${de?`
            <div class="flex-1 text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100 select-none" dir="ltr">
              ${p(String(K[t]??"—"))}
            </div>`:""}
            <input id="cdl-${t}" type="text" dir="${re}"
              class="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
              value="${p(String(G[t]??""))}"
              placeholder="${p(String(Z[t]??""))}" />
          </div>`).join("")}
        </div>
      </div>`).join(""),L=I.editor_teacher_ids??[],v=o?`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ผู้มีสิทธิ์แก้ไขภาษานี้</p>
        <div class="bg-white rounded-xl border border-gray-200 shadow-md p-4">
          <p class="text-xs text-gray-400 mb-3">เลือกครูที่จะให้แก้ไข <span dir="${re}" class="font-semibold text-emerald-700">${q(O)}</span></p>
          <div class="max-h-48 overflow-y-auto space-y-1" id="cdl-editors">
            ${P.filter(s=>s.id!==(e==null?void 0:e.id)).map(s=>`
              <label class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">
                <input type="checkbox" class="cdl-editor-cb" value="${s.id}" ${L.includes(s.id)?"checked":""}/>
                <span class="font-medium text-gray-800">${p(s.full_name)}</span>
                <span class="text-xs text-gray-400">${p(s.teacher_code??"")} · ${p(s.dept??"—")}</span>
              </label>`).join("")}
          </div>
          <button id="cdl-save-editors"
            class="mt-3 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition">
            💾 บันทึกผู้มีสิทธิ์
          </button>
        </div>
      </div>`:"";_e(`<div class="animate-fade">
      <div class="flex items-center justify-between mb-5">
        <div>
          <h2 class="text-lg font-bold text-gray-800">⚙️ ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)</h2>
          <p class="text-xs text-gray-400 mt-0.5">ค่าที่ตั้งจะ override ค่าเริ่มต้นในระบบ</p>
        </div>
        <button id="cdl-save-settings"
          class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
          💾 บันทึก
        </button>
      </div>

      <!-- แท็บภาษา -->
      <div class="flex gap-2 flex-wrap mb-6">${m}</div>

      ${c}
      ${v}
    </div>`),document.querySelectorAll(".cdl-tab").forEach(s=>{s.addEventListener("click",()=>{O=s.dataset.lang,ee()})}),(W=document.getElementById("cdl-save-settings"))==null||W.addEventListener("click",async()=>{var r;const s={};for(const{fields:b}of at)for(const[S]of b)s[S]=((r=document.getElementById(`cdl-${S}`))==null?void 0:r.value)??"";const n=Xn(s),t=document.getElementById("cdl-save-settings");t.disabled=!0,t.textContent="กำลังบันทึก...";try{const b=await zs(O,n,e==null?void 0:e.id);D[O]={...D[O],...b},U(`บันทึกการตั้งค่า ${q(O)} สำเร็จ`,"success")}catch(b){U("บันทึกไม่สำเร็จ: "+ce(b),"error")}t.disabled=!1,t.innerHTML="💾 บันทึก"}),(A=document.getElementById("cdl-save-editors"))==null||A.addEventListener("click",async()=>{const s=[...document.querySelectorAll(".cdl-editor-cb:checked")].map(t=>Number(t.value)),n=document.getElementById("cdl-save-editors");n.disabled=!0,n.textContent="กำลังบันทึก...";try{const t=await Vs(O,s);D[O]={...D[O],...t},U(`อัปเดตผู้มีสิทธิ์ ${q(O)} สำเร็จ`,"success")}catch(t){U("บันทึกไม่สำเร็จ: "+ce(t),"error")}n.disabled=!1,n.textContent="💾 บันทึกผู้มีสิทธิ์"})};ee()}async function eo(e){je("announcements-view"),Ie("ประกาศ","announcement");const{getAllAnnouncementsForTeacher:o,getMyAcks:l,ackAnnouncement:d,getSupervisorComments:T,getSystemConfig:k,getTeacherBusyPeriodsOnDate:P,incrementAnnouncementView:D,incrementAnnouncementLike:$,getAnnouncementCommentsBulk:O,addAnnouncementComment:q,deleteAnnouncementComment:ee}=await fe(async()=>{const{getAllAnnouncementsForTeacher:a,getMyAcks:x,ackAnnouncement:w,getSupervisorComments:C,getSystemConfig:B,getTeacherBusyPeriodsOnDate:_,incrementAnnouncementView:E,incrementAnnouncementLike:M,getAnnouncementCommentsBulk:se,addAnnouncementComment:J,deleteAnnouncementComment:Q}=await import("./api-Cf_Y4s92.js");return{getAllAnnouncementsForTeacher:a,getMyAcks:x,ackAnnouncement:w,getSupervisorComments:C,getSystemConfig:B,getTeacherBusyPeriodsOnDate:_,incrementAnnouncementView:E,incrementAnnouncementLike:M,getAnnouncementCommentsBulk:se,addAnnouncementComment:J,deleteAnnouncementComment:Q}},__vite__mapDeps([1,2]));let m=null;try{m=await k()}catch{}_e(`<div class="animate-fade max-w-2xl mx-auto">
    <!-- Tab bar -->
    <div class="flex gap-1 bg-gray-100 rounded-2xl p-1 mb-6">
      <button id="ann-tab-announce" data-tab="announce"
        class="ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition bg-white shadow-sm text-gray-800">
        📢 ประกาศ
      </button>
      <button id="ann-tab-myann" data-tab="myann"
        class="ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition text-gray-500 hover:text-gray-700">
        ✏️ ประกาศของฉัน
      </button>
      <button id="ann-tab-comments" data-tab="comments"
        class="ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition text-gray-500 hover:text-gray-700">
        💬 บันทึก
      </button>
    </div>
    <div id="ann-panel-announce">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
    <div id="ann-panel-myann" class="hidden"></div>
    <div id="ann-panel-comments" class="hidden">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`);const I=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Z=a=>new Date(a).toLocaleDateString("th-TH",{dateStyle:"long"}),G=a=>a?new Date(a).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",re=a=>new Date(new Date(a).getTime()+7*36e5).toISOString().slice(0,10),ne={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},K=a=>a?a.startsWith("academic")?"bg-blue-100 text-blue-700":a.startsWith("registrar")?"bg-violet-100 text-violet-700":a==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",de={general:"ทั่วไป",profile:"โปรไฟล์",schedule:"ตารางสอน",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},c=[{key:"pinned",label:"📌 ปักหมุด",color:"from-amber-400 to-orange-400",filter:a=>a.priority>0},{key:"academic",label:"🎓 ฝ่ายวิชาการ",color:"from-blue-400 to-indigo-400",filter:a=>a.priority===0&&(a.creator_role??"").startsWith("academic")},{key:"registrar",label:"📋 ฝ่ายทะเบียน",color:"from-violet-400 to-purple-400",filter:a=>a.priority===0&&(a.creator_role??"").startsWith("registrar")},{key:"dept_head",label:"🏫 หัวหน้ากลุ่มสาระ",color:"from-emerald-400 to-teal-400",filter:a=>a.priority===0&&a.creator_role==="dept_head"},{key:"admin",label:"⚙️ ทั่วไป",color:"from-gray-300 to-gray-400",filter:a=>a.priority===0&&!a.creator_role}],L=a=>{if(!a)return"";const x=Math.ceil((new Date(a)-new Date)/864e5);return x<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${G(a)}</span>`:x<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${G(a)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${G(a)}</span>`};let v="announce";document.querySelectorAll(".ann-tab").forEach(a=>{a.addEventListener("click",()=>{v=a.dataset.tab,document.querySelectorAll(".ann-tab").forEach(x=>{const w=x.dataset.tab===v;x.className=`ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${w?"bg-white shadow-sm text-gray-800":"text-gray-500 hover:text-gray-700"}`}),document.getElementById("ann-panel-announce").classList.toggle("hidden",v!=="announce"),document.getElementById("ann-panel-myann").classList.toggle("hidden",v!=="myann"),document.getElementById("ann-panel-comments").classList.toggle("hidden",v!=="comments"),v==="myann"&&!A&&t()})});const W={general:{label:"ทั่วไป",icon:"📢",hasDeadline:!1},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",hasDeadline:!0},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",hasDeadline:!1},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",hasDeadline:!1},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",hasDeadline:!1}};let A=!1,s=[];const n=(a,x)=>{var B;const w=W[a.ann_type]??{label:a.ann_type,icon:"📢"},C=(a.target_class_ids??[]).map(_=>{var E;return((E=x.find(M=>M.id===_))==null?void 0:E.class_name)??`#${_}`}).join(", ");return`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 space-y-2" data-myann-id="${a.id}">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium">${w.icon} ${w.label}</span>
            ${a.priority>0?'<span class="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full font-medium">📌 ปักหมุด</span>':""}
            ${a.is_active?"":'<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>'}
          </div>
          <p class="font-semibold text-gray-800">${I(a.title)}</p>
          ${a.body?`<p class="text-sm text-gray-500 mt-1 line-clamp-2">${I(a.body)}</p>`:""}
          ${a.file_url?`<a href="${I(a.file_url)}" target="_blank" class="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1">📎 ไฟล์แนบ</a>`:""}
          ${(B=a.attachment_urls)!=null&&B.length?`<div class="flex flex-wrap gap-1.5 mt-1">${a.attachment_urls.map(_=>`<a href="${I(_.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${I(_.name)}</a>`).join("")}</div>`:""}
          <p class="text-xs text-gray-400 mt-2">ห้อง: ${I(C)||"—"}</p>
        </div>
        <div class="flex gap-1 flex-shrink-0">
          <button onclick="window._editMyAnn(${a.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600 transition" title="แก้ไข">✏️</button>
          <button onclick="window._togglePinMyAnn(${a.id},${a.priority})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-amber-500 transition" title="${a.priority>0?"เลิกปักหมุด":"ปักหมุด"}">📌</button>
          <button onclick="window._deleteMyAnn(${a.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition" title="ลบ">🗑️</button>
        </div>
      </div>
    </div>`},t=async()=>{A=!0;const a=document.getElementById("ann-panel-myann");if(a){a.innerHTML='<div class="flex justify-center py-8 text-gray-400"><svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> กำลังโหลด...</div>';try{const{getTeacherOwnAnnouncements:x,getMyClasses:w,getTeacherPackageAccess:C}=await fe(async()=>{const{getTeacherOwnAnnouncements:M,getMyClasses:se,getTeacherPackageAccess:J}=await import("./api-Cf_Y4s92.js");return{getTeacherOwnAnnouncements:M,getMyClasses:se,getTeacherPackageAccess:J}},__vite__mapDeps([1,2])),[B,_,E]=await Promise.all([x(e.id),w(e.id).catch(()=>[]),C(e.id).catch(()=>({hasSemester:!1}))]);s=_,b(B,E.hasSemester)}catch(x){a.innerHTML=`<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${x.message}</p>`}}},r=3,b=(a,x=!1)=>{var _;const w=document.getElementById("ann-panel-myann");if(!w)return;const C=x||a.length<r,B=x?'<span class="text-xs text-emerald-600 font-medium">✨ ไม่จำกัด</span>':`<span class="text-xs text-gray-400">${a.length}/${r} (ฟรี)</span>`;w.innerHTML=`
    <div class="space-y-3">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold text-gray-700">ประกาศของฉัน (${a.length})</h3>
          ${B}
        </div>
        <button id="btn-create-myann"
          class="px-4 py-2 text-sm rounded-xl font-semibold transition ${C?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-gray-100 text-gray-400 cursor-not-allowed"}">
          + สร้างประกาศ
        </button>
      </div>
      ${!x&&a.length>=r?`
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <span class="text-2xl flex-shrink-0">⭐</span>
        <div>
          <p class="text-sm font-semibold text-amber-800">ใช้ครบ ${r} ประกาศแล้ว</p>
          <p class="text-xs text-amber-600 mt-1">อัพเกรดเป็นแพ็กเกจโดเนทเพื่อสร้างประกาศได้ไม่จำกัด</p>
        </div>
      </div>`:""}
      ${a.length?a.map(E=>n(E,s)).join(""):`
      <div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📢</p>
        <p class="text-sm">ยังไม่มีประกาศ กดปุ่ม "สร้างประกาศ" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`,(_=document.getElementById("btn-create-myann"))==null||_.addEventListener("click",()=>{if(!C){U(`ใช้ครบ ${r} ประกาศแล้ว — อัพเกรดเพื่อใช้งานไม่จำกัด`,"warning");return}h()})},S=(a,x=[])=>s.map(w=>{var C;return`<label class="flex items-center gap-2 text-xs cursor-pointer hover:text-indigo-700 py-0.5">
        <input type="checkbox" name="myann-cls-${a}" value="${w.id}"
          ${x.includes(w.id)?"checked":""} class="rounded text-indigo-600 flex-shrink-0" />
        <span class="truncate">${I(w.class_name)}</span>
        <span class="text-gray-300 truncate">${I(((C=w.master_subjects)==null?void 0:C.subject_name)??"")}</span>
      </label>`}).join(""),R=(a,x=[],w="",C=[])=>`
    <div class="myann-entry border border-gray-200 rounded-xl p-3 space-y-2" data-entry="${a}" data-kept='${I(JSON.stringify(C)).replace(/'/g,"&#39;")}'>
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-indigo-600">ชุดที่ ${a+1}</span>
        ${a>0?`<button type="button" class="myann-remove-entry text-red-400 hover:text-red-600 text-sm px-2" data-entry="${a}">✕ ลบ</button>`:""}
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">ห้องเรียน <span class="text-red-400">*</span></p>
        <div class="border border-gray-100 rounded-lg p-2 max-h-28 overflow-y-auto space-y-0.5">
          ${S(a,x)||'<p class="text-xs text-gray-400">ยังไม่มีห้องเรียน</p>'}
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">แนบไฟล์ (เลือกได้หลายไฟล์ ไม่บังคับ)</p>
        <div class="myann-kept-files flex flex-wrap gap-1.5 mb-1.5" data-entry="${a}"></div>
        <input name="myann-files-${a}" type="file" multiple
          class="w-full text-xs" />
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">หรือลิงก์ไฟล์ (เช่น Google Drive)</p>
        <input name="myann-file-${a}" type="url" value="${I(w)}"
          placeholder="https://drive.google.com/..."
          class="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </div>
    </div>`,f=a=>{a.querySelectorAll(".myann-entry").forEach(x=>{const w=x.dataset.entry,C=JSON.parse(x.dataset.kept||"[]"),B=a.querySelector(`.myann-kept-files[data-entry="${w}"]`);B&&(B.innerHTML=C.map((_,E)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${I(_.name)}
          <button type="button" class="myann-remove-file text-indigo-400 hover:text-red-500 font-bold" data-entry="${w}" data-i="${E}">✕</button>
        </span>`).join(""),B.querySelectorAll(".myann-remove-file").forEach(_=>_.addEventListener("click",()=>{const E=JSON.parse(x.dataset.kept||"[]");E.splice(parseInt(_.dataset.i,10),1),x.dataset.kept=JSON.stringify(E),f(a)})))})},h=(a=null)=>{var B;let x=1;const w=document.createElement("div");w.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",w.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">${a?"✏️ แก้ไขประกาศ":"📢 สร้างประกาศใหม่"}</h3>
        <button id="myann-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <!-- ข้อมูลร่วมทุกชุด -->
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ประเภทประกาศ</label>
          <select id="myann-type" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            ${Object.entries(W).map(([_,E])=>`<option value="${_}" ${(a==null?void 0:a.ann_type)===_?"selected":""}>${E.icon} ${E.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หัวข้อ <span class="text-red-400">*</span></label>
          <input id="myann-title" type="text" value="${I((a==null?void 0:a.title)??"")}"
            placeholder="ระบุหัวข้อประกาศ" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">รายละเอียด</label>
          <textarea id="myann-body" rows="2"
            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none">${I((a==null?void 0:a.body)??"")}</textarea>
        </div>
        <div id="myann-deadline-wrap" class="${((a==null?void 0:a.ann_type)??"general")==="deadline"?"":"hidden"}">
          <label class="block text-xs font-semibold text-gray-600 mb-1">⏰ วันและเวลากำหนดส่ง/สอบ <span class="text-red-400">*</span></label>
          <input id="myann-deadline" type="datetime-local"
            value="${a!=null&&a.deadline_at?new Date(a.deadline_at).toISOString().slice(0,16):""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-pin" type="checkbox" ${(a==null?void 0:a.priority)>0?"checked":""} class="rounded text-amber-500" />
            <span>📌 ปักหมุด</span>
          </label>
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-active" type="checkbox" ${!a||a!=null&&a.is_active?"checked":""} class="rounded text-emerald-500" />
            <span>เผยแพร่ทันที</span>
          </label>
        </div>
        <!-- ชุดห้อง+ไฟล์ -->
        <div class="border-t border-gray-100 pt-3">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold text-gray-700">📋 ห้องเรียน + ลิงก์ (แต่ละชุดสร้างประกาศแยก)</p>
            ${a?"":`<button type="button" id="myann-add-entry"
              class="flex items-center gap-1 text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition">
              ＋ เพิ่มชุด
            </button>`}
          </div>
          <div id="myann-entries" class="space-y-3">
            ${R(0,(a==null?void 0:a.target_class_ids)??[],(a==null?void 0:a.file_url)??"",(a==null?void 0:a.attachment_urls)??[])}
          </div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="myann-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="myann-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
          ${a?"บันทึก":"สร้างประกาศ"}
        </button>
      </div>
    </div>`,document.body.appendChild(w),f(w),w.querySelector("#myann-close").addEventListener("click",()=>w.remove()),w.querySelector("#myann-cancel").addEventListener("click",()=>w.remove()),w.querySelector("#myann-type").addEventListener("change",_=>{w.querySelector("#myann-deadline-wrap").classList.toggle("hidden",_.target.value!=="deadline")}),(B=w.querySelector("#myann-add-entry"))==null||B.addEventListener("click",()=>{const _=w.querySelector("#myann-entries"),E=document.createElement("div");E.innerHTML=R(x),_.appendChild(E.firstElementChild),x++,C(),f(w)});const C=()=>{w.querySelectorAll(".myann-remove-entry").forEach(_=>{_.onclick=()=>{var M;const E=Number(_.dataset.entry);(M=w.querySelector(`.myann-entry[data-entry="${E}"]`))==null||M.remove()}})};C(),w.querySelector("#myann-save").addEventListener("click",async()=>{const _=w.querySelector("#myann-title").value.trim(),E=w.querySelector("#myann-body").value.trim(),M=w.querySelector("#myann-type").value,se=w.querySelector("#myann-pin").checked,J=w.querySelector("#myann-active").checked,Q=M==="deadline"&&w.querySelector("#myann-deadline").value||null;if(!_){U("กรุณาระบุหัวข้อ","warning");return}if(M==="deadline"&&!Q){U("กรุณาระบุวันและเวลา","warning");return}const ae=[...w.querySelectorAll(".myann-entry")].map(i=>{var N,V;const j=Number(i.dataset.entry),H=[...i.querySelectorAll(`input[name="myann-cls-${j}"]:checked`)].map(le=>Number(le.value)),z=((N=i.querySelector(`input[name="myann-file-${j}"]`))==null?void 0:N.value.trim())??"",g=JSON.parse(i.dataset.kept||"[]"),X=[...((V=i.querySelector(`input[name="myann-files-${j}"]`))==null?void 0:V.files)??[]];return{classIds:H,fileUrl:z,keptFiles:g,newFiles:X}}).filter(i=>i.classIds.length>0);if(!ae.length){U("กรุณาเลือกอย่างน้อย 1 ห้องในแต่ละชุด","warning");return}const u=w.querySelector("#myann-save");u.disabled=!0,u.textContent="กำลังบันทึก...";try{const{createAnnouncement:i,updateAnnouncement:j}=await fe(async()=>{const{createAnnouncement:g,updateAnnouncement:X}=await import("./api-Cf_Y4s92.js");return{createAnnouncement:g,updateAnnouncement:X}},__vite__mapDeps([1,2])),{uploadAssignmentFile:H}=await fe(async()=>{const{uploadAssignmentFile:g}=await import("./storage-D6nkcVz6.js").then(X=>X.z);return{uploadAssignmentFile:g}},__vite__mapDeps([7,2]));if(a){const{classIds:g,fileUrl:X,keptFiles:N,newFiles:V}=ae[0],le=[];for(const ue of V)le.push(await H(ue,`class-${g[0]}/announcements`));const ie=[...N,...le];await j(a.id,{title:_,body:E,isActive:J,priority:se?1:0,annType:M,targetClassIds:g,fileUrl:X,attachmentUrls:ie.length?ie:null,deadlineAt:Q})}else await Promise.all(ae.map(async({classIds:g,fileUrl:X,newFiles:N})=>{const V=[];for(const le of N)V.push(await H(le,`class-${g[0]}/announcements`));return i({title:_,body:E,isActive:J,priority:se?1:0,teacherId:e.id,annType:M,targetClassIds:g,fileUrl:X,attachmentUrls:V.length?V:null,deadlineAt:Q})}));w.remove();const z=a?1:ae.length;U(`บันทึก ${z} ประกาศสำเร็จ ✅`,"success"),A=!1,t()}catch(i){U("บันทึกไม่สำเร็จ: "+ce(i),"error"),u.disabled=!1,u.textContent=a?"บันทึก":"สร้างประกาศ"}})};window._editMyAnn=async a=>{const{getTeacherOwnAnnouncements:x}=await fe(async()=>{const{getTeacherOwnAnnouncements:B}=await import("./api-Cf_Y4s92.js");return{getTeacherOwnAnnouncements:B}},__vite__mapDeps([1,2])),C=(await x(e.id).catch(()=>[])).find(B=>B.id===a);C&&h(C)},window._togglePinMyAnn=async(a,x)=>{const{updateAnnouncement:w}=await fe(async()=>{const{updateAnnouncement:C}=await import("./api-Cf_Y4s92.js");return{updateAnnouncement:C}},__vite__mapDeps([1,2]));await w(a,{priority:x>0?0:1}).catch(()=>{}),A=!1,t()},window._deleteMyAnn=async a=>{if(!confirm("ลบประกาศนี้?"))return;const{deleteAnnouncement:x}=await fe(async()=>{const{deleteAnnouncement:w}=await import("./api-Cf_Y4s92.js");return{deleteAnnouncement:w}},__vite__mapDeps([1,2]));await x(a).catch(()=>{}),U("ลบประกาศแล้ว","success"),A=!1,t()};const y=a=>a?new Date(a+"T00:00:00").toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"",Y={yes:{label:"✅ สนใจเข้าร่วมแน่นอน",bg:"bg-emerald-600",ring:"ring-emerald-300"},maybe:{label:"🤔 ไม่แน่ใจ",bg:"bg-amber-500",ring:"ring-amber-300"},no:{label:"❌ ไม่สนใจ",bg:"bg-gray-400",ring:"ring-gray-300"}},F=(a,x,w=null,C=!1,B=0)=>{var Q,ae,u;const _=a.requires_ack,E=!!x,M=a.ann_type==="training",se=x?new Date(x).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"",J=!a.is_active;return`
    <div class="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow
      ${_&&!E&&!J?"border-rose-200":J?"border-dashed border-gray-200":"border-gray-100"}
      ${J?"opacity-60":""}" data-ann-id="${a.id}">
      <div class="h-1 bg-gradient-to-r ${a.priority>0?"from-amber-400 to-orange-400":J?"from-gray-200 to-gray-300":((Q=c.find(i=>i.filter(a)))==null?void 0:Q.color)??"from-gray-300 to-gray-400"}"></div>
      <div class="p-5">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
            ${_&&!E&&!J?"bg-rose-50":J?"bg-gray-50":"bg-indigo-50"}">
            ${a.priority>0?"📌":_?E?"✅":"🔔":J?"📄":"📢"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${K(a.creator_role)}">
                ${I(ne[a.creator_role]??"แอดมิน")}
              </span>
              ${(ae=a.teachers)!=null&&ae.full_name?`<span class="text-[11px] text-gray-500 font-medium">${I(a.teachers.full_name)}</span>`:""}
              ${J?'<span class="px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full text-[11px]">ยกเลิกแล้ว</span>':""}
              ${a.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${_?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${L(a.due_date)}
            </div>
            <h3 class="text-base font-bold text-gray-800 mb-1.5">${I(a.title)}</h3>
            ${a.body?`<p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-2">${I(a.body)}</p>`:""}
            ${a.file_url?`<img src="${I(a.file_url)}" class="w-full rounded-xl border border-gray-100 mb-2 cursor-pointer" onclick="window.open('${I(a.file_url)}','_blank')" />`:""}
            ${M&&a.event_date?`
              <div class="mt-3 mb-2 bg-violet-50 border border-violet-100 rounded-xl p-3 space-y-1.5">
                <p class="text-xs font-semibold text-violet-700">🎓 ข้อมูลการอบรม</p>
                <p class="text-sm text-gray-700">📅 ${y(a.event_date)}</p>
                ${(u=a.event_periods)!=null&&u.length?`<p class="text-sm text-gray-700">🕐 คาบที่ ${a.event_periods.sort((i,j)=>i-j).join(", ")}</p>`:""}
                ${a.event_location?`<p class="text-sm text-gray-700">📍 ${I(a.event_location)}</p>`:""}
              </div>`:""}
            <span class="text-[11px] text-gray-400">${Z(a.created_at)}</span>
            ${M&&!J?`
              <div class="mt-3">
                <p class="text-xs font-semibold text-gray-500 mb-2">คุณจะเข้าร่วมไหม?</p>
                <div class="flex flex-wrap gap-2">
                  ${Object.entries(Y).map(([i,j])=>`
                    <button class="ann-rsvp-btn px-3 py-2 rounded-xl text-sm font-semibold transition border-2
                      ${w===i?`${j.bg} text-white ring-2 ${j.ring} border-transparent`:"bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"}"
                      data-ann-id="${a.id}" data-rsvp="${i}">${j.label}</button>
                  `).join("")}
                </div>
              </div>`:""}
            ${_&&!J?`
              <div class="mt-3">
                ${E?`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold border border-emerald-200">
                      ✅ รับทราบแล้ว · ${se}
                    </span>`:`<button class="ann-ack-btn px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition shadow-sm"
                      data-id="${a.id}">🔔 กดรับทราบ</button>`}
              </div>`:""}
            <div class="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
              <button class="ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${C?"bg-rose-50 text-rose-600":"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500"}" data-id="${a.id}">
                <span class="ann-like-icon">${C?"❤️":"🤍"}</span><span class="ann-like-count">${a.like_count??0}</span>
              </button>
              <button class="ann-comment-toggle-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-500 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition" data-id="${a.id}">
                💬<span class="ann-comment-count">${B}</span>
              </button>
              <span class="text-[11px] text-gray-400 ml-auto">👁️ เข้าดูแล้ว ${a.view_count??0} คน</span>
            </div>
            <div class="ann-comment-section hidden mt-3 pt-3 border-t border-gray-50" data-id="${a.id}">
              <div class="ann-comment-list space-y-2 mb-2 text-sm text-gray-400">กำลังโหลด...</div>
              <div class="flex gap-2">
                <input type="text" class="ann-comment-input flex-1 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="แสดงความคิดเห็น..." data-id="${a.id}" maxlength="500" />
                <button class="ann-comment-send-btn px-3 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition flex-shrink-0" data-id="${a.id}">ส่ง</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`},te=async()=>{const a=document.getElementById("ann-panel-announce");if(!a)return;let x,w,C;try{const{getMyRsvpsForTeacher:g}=await fe(async()=>{const{getMyRsvpsForTeacher:X}=await import("./api-Cf_Y4s92.js");return{getMyRsvpsForTeacher:X}},__vite__mapDeps([1,2]));[x,w,C]=await Promise.all([o(),e!=null&&e.id?l(e.id).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?g(e.id).catch(()=>[]):Promise.resolve([])])}catch{a.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(e!=null&&e.id&&m){const g=parseInt(m.academicYear??2568),X=parseInt(m.semester??1),N=x.filter(V=>{var le;return V.ann_type==="training"&&V.event_date&&((le=V.event_periods)==null?void 0:le.length)});if(N.length){const V=await Promise.all(N.map(ie=>P(e.id,ie.event_date,g,X).catch(()=>[]))),le=Object.fromEntries(N.map((ie,ue)=>[ie.id,V[ue]]));x=x.filter(ie=>{var xe;if(ie.ann_type!=="training"||!((xe=ie.event_periods)!=null&&xe.length))return!0;const ue=le[ie.id]??[];return(ie.schedule_filter??"all")==="any"?ie.event_periods.some(ye=>!ue.includes(ye)):!ie.event_periods.some(ye=>ue.includes(ye))})}}const B=Object.fromEntries(w.map(g=>[g.announcement_id,g.acked_at])),_=Object.fromEntries((C??[]).map(g=>[g.announcement_id,g.response])),E={};try{(await O(x.map(X=>X.id))).forEach(X=>{var N;(E[N=X.announcement_id]??(E[N]=[])).push(X)})}catch{}const M=`pp5_ann_liked_${(e==null?void 0:e.id)??"anon"}`,se=`pp5_ann_viewed_${(e==null?void 0:e.id)??"anon"}`;let J,Q;try{J=new Set(JSON.parse(localStorage.getItem(M)||"[]"))}catch{J=new Set}try{Q=new Set(JSON.parse(localStorage.getItem(se)||"[]"))}catch{Q=new Set}const ae=x.map(g=>g.id).filter(g=>!Q.has(g));if(ae.length&&(e!=null&&e.id)){ae.forEach(g=>{Q.add(g),D(g)});try{localStorage.setItem(se,JSON.stringify([...Q]))}catch{}ae.forEach(g=>{const X=x.find(N=>N.id===g);X&&(X.view_count=(X.view_count??0)+1)})}const u=x.filter(g=>g.is_active),i=x.filter(g=>!g.is_active);if(!x.length){a.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📭</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศในขณะนี้</p>
      </div>`;return}const j=c.map(g=>({...g,items:u.filter(g.filter)})).filter(g=>g.items.length);let H="";j.length?H+=j.map(g=>`
        <div class="mb-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-bold text-gray-700">${g.label}</span>
            <span class="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] rounded-full font-semibold">${g.items.length}</span>
            <div class="flex-1 h-px bg-gray-100 ml-1"></div>
          </div>
          <div class="space-y-3">${g.items.map(X=>F(X,B[X.id],_[X.id]??null,J.has(X.id),(E[X.id]||[]).length)).join("")}</div>
        </div>`).join(""):H+=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-400 mb-5">
        <div class="text-4xl mb-3">📭</div><p class="font-semibold text-gray-500">ยังไม่มีประกาศที่แสดงอยู่ในขณะนี้</p>
      </div>`,i.length&&(H+=`<details class="mt-2">
        <summary class="cursor-pointer text-xs text-gray-400 font-semibold py-2 px-1 hover:text-gray-600 transition select-none list-none flex items-center gap-1">
          <span>▸</span> ประวัติประกาศที่ผ่านมา (${i.length} รายการ)
        </summary>
        <div class="space-y-3 mt-3">${i.map(g=>F(g,B[g.id],null,J.has(g.id),(E[g.id]||[]).length)).join("")}</div>
      </details>`),a.innerHTML=H,a.querySelectorAll(".ann-ack-btn").forEach(g=>{g.addEventListener("click",async()=>{if(e!=null&&e.id){g.disabled=!0,g.textContent="กำลังบันทึก...";try{await d(Number(g.dataset.id),e.id),await te()}catch{U("บันทึกไม่สำเร็จ","error"),g.disabled=!1,g.textContent="🔔 กดรับทราบ"}}})}),a.querySelectorAll(".ann-rsvp-btn").forEach(g=>{g.addEventListener("click",async()=>{if(!(e!=null&&e.id))return;const{upsertAnnouncementRsvp:X}=await fe(async()=>{const{upsertAnnouncementRsvp:le}=await import("./api-Cf_Y4s92.js");return{upsertAnnouncementRsvp:le}},__vite__mapDeps([1,2])),N=Number(g.dataset.annId),V=g.dataset.rsvp;g.classList.contains("bg-emerald-600")||g.classList.contains("bg-amber-500")||g.classList.contains("bg-gray-400");try{await X(N,e.id,V);const{showToast:le}=await fe(async()=>{const{showToast:ue}=await import("./ui-FQqAmrdo.js").then(xe=>xe.u);return{showToast:ue}},__vite__mapDeps([4,5]));le({yes:"บันทึก: สนใจเข้าร่วม ✅",maybe:"บันทึก: ไม่แน่ใจ 🤔",no:"บันทึก: ไม่สนใจ ❌"}[V]??"บันทึกแล้ว","success"),await te()}catch{U("บันทึกไม่สำเร็จ","error")}})}),a.querySelectorAll(".ann-like-btn").forEach(g=>{g.addEventListener("click",()=>{if(!(e!=null&&e.id))return;const X=Number(g.dataset.id),N=J.has(X),V=N?-1:1;$(X,V),N?J.delete(X):J.add(X);try{localStorage.setItem(M,JSON.stringify([...J]))}catch{}const le=g.querySelector(".ann-like-count"),ie=g.querySelector(".ann-like-icon");le.textContent=Math.max(0,(parseInt(le.textContent,10)||0)+V),ie.textContent=N?"🤍":"❤️",g.className=`ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${N?"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500":"bg-rose-50 text-rose-600"}`})});const z=(g,X)=>{const N=E[X]??[];g.innerHTML=N.length?N.map(V=>{var le,ie;return`
          <div class="flex items-start gap-2">
            <div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">${I((((le=V.teachers)==null?void 0:le.full_name)??"?").charAt(0))}</div>
            <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-1.5">
              <p class="text-[11px] font-semibold text-gray-700">${I(((ie=V.teachers)==null?void 0:ie.full_name)??"ครู")}</p>
              <p class="text-xs text-gray-600 whitespace-pre-wrap break-words">${I(V.comment_text)}</p>
            </div>
          </div>`}).join(""):'<p class="text-xs text-gray-400">ยังไม่มีความคิดเห็น เป็นคนแรกได้เลย!</p>'};a.querySelectorAll(".ann-comment-toggle-btn").forEach(g=>{g.addEventListener("click",()=>{const X=Number(g.dataset.id),N=a.querySelector(`.ann-comment-section[data-id="${X}"]`);if(!N)return;const V=N.classList.contains("hidden");N.classList.toggle("hidden"),V&&z(N.querySelector(".ann-comment-list"),X)})}),a.querySelectorAll(".ann-comment-send-btn").forEach(g=>{const X=async()=>{if(!(e!=null&&e.id))return;const V=Number(g.dataset.id),le=a.querySelector(`.ann-comment-input[data-id="${V}"]`),ie=le.value.trim();if(ie){g.disabled=!0;try{const ue=await q(V,e.id,ie);(E[V]??(E[V]=[])).push(ue),le.value="";const xe=a.querySelector(`.ann-comment-section[data-id="${V}"]`);z(xe.querySelector(".ann-comment-list"),V);const ye=a.querySelector(`.ann-comment-toggle-btn[data-id="${V}"] .ann-comment-count`);ye&&(ye.textContent=E[V].length)}catch(ue){U("ส่งความคิดเห็นไม่สำเร็จ: "+ce(ue),"error")}g.disabled=!1}};g.addEventListener("click",X);const N=a.querySelector(`.ann-comment-input[data-id="${g.dataset.id}"]`);N==null||N.addEventListener("keydown",V=>{V.key==="Enter"&&X()})})},oe=async()=>{const a=document.getElementById("ann-panel-comments");if(!a)return;if(!(e!=null&&e.id)){a.innerHTML='<p class="text-gray-400 text-sm p-4">ไม่พบข้อมูลครู</p>';return}let x;try{x=await T(e.id)}catch{a.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!x.length){a.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">💬</div>
        <p class="font-semibold text-gray-500">ยังไม่มีความคิดเห็น / บันทึก</p>
      </div>`;return}const w=[],C=new Map;for(const E of x){const M=E.round_id?`round__${E.round_id}__${E.supervisor_id}`:`noround__${E.supervisor_id}__${re(E.created_at)}`;if(!C.has(M)){const se={key:M,supervisor:E.teachers,date:E.created_at,roundEvent:E.work_calendar_events??null,items:[]};C.set(M,se),w.push(se)}C.get(M).items.push(E)}const B=E=>E?E.startsWith("academic")?"bg-blue-100 text-blue-700":E.startsWith("registrar")?"bg-violet-100 text-violet-700":E==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",_=E=>E?E.startsWith("academic")?"from-blue-400 to-indigo-400":E.startsWith("registrar")?"from-violet-400 to-purple-400":E==="dept_head"?"from-emerald-400 to-teal-400":"from-gray-300 to-gray-400":"from-gray-300 to-gray-400";a.innerHTML='<div class="space-y-4">'+w.map(E=>{var u,i;const M=(u=E.supervisor)==null?void 0:u.position,se=((i=E.supervisor)==null?void 0:i.full_name)??"หัวหน้า",J=ne[M]??"ผู้บังคับบัญชา",Q=E.roundEvent,ae=Q?`<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700">
             ${Q.event_type==="inspection"&&Q.round_number?`ตรวจครั้งที่ ${Q.round_number}`:Q.label}
           </span>`:"";return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-1 bg-gradient-to-r ${_(M)}"></div>
        <div class="p-5">
          <div class="flex items-center gap-2 flex-wrap mb-3">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${B(M)}">${I(J)}</span>
            <span class="text-sm font-semibold text-gray-700">${I(se)}</span>
            ${ae}
            <span class="text-[11px] text-gray-400 ml-auto">${Z(E.date)}</span>
          </div>
          ${Q!=null&&Q.label&&Q.event_type!=="inspection"?`<p class="text-xs text-indigo-600 mb-2 -mt-1">📅 ${I(Q.label)}</p>`:""}
          <div class="space-y-2">
            ${E.items.map(j=>`
              <div class="flex items-start gap-2.5">
                <span class="flex-shrink-0 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[11px] font-semibold mt-0.5">${I(de[j.metric]??j.metric)}</span>
                <p class="text-sm text-gray-700 leading-relaxed">${I(j.comment)}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>`}).join("")+"</div>"};await Promise.all([te(),oe()])}function bt(e){return new Promise(o=>{var T;(T=document.getElementById("qr-receipt-prompt-modal"))==null||T.remove();const l=document.createElement("div");l.id="qr-receipt-prompt-modal",l.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40",l.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden text-center">
        <div class="px-6 pt-7 pb-5">
          <div class="mx-auto mb-3 w-14 h-14 rounded-full bg-amber-50 border-2 border-amber-100 flex items-center justify-center text-2xl">🧾</div>
          <h3 class="text-base font-bold text-gray-900 mb-1.5">พิมพ์ QR Code เรียบร้อยแล้ว</h3>
          <p class="text-sm text-gray-500 leading-relaxed">ต้องการพิมพ์ใบเสร็จรับ QR Code ต่อเลยหรือไม่? (${e} ใบ)</p>
        </div>
        <div class="px-6 pb-6 grid grid-cols-2 gap-3">
          <button id="qr-receipt-prompt-no" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-[0.97] transition-all">ไม่ต้อง</button>
          <button id="qr-receipt-prompt-yes" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] transition-all">🧾 พิมพ์ใบเสร็จ</button>
        </div>
      </div>
    `,document.body.appendChild(l);const d=k=>{l.remove(),o(k)};l.querySelector("#qr-receipt-prompt-yes").addEventListener("click",()=>d(!0)),l.querySelector("#qr-receipt-prompt-no").addEventListener("click",()=>d(!1))})}function Qt(e,o,l,d=null){var k,P,D,$;const T=d!=null&&d.url?`<span style="display:inline-flex;flex-direction:column;align-items:center;gap:1px">
         <img src="${p(d.url)}" style="height:22px;object-fit:contain" />
         <span style="font-size:8px;color:#374151">${p(d.name||"ผู้ออกให้")}${d.title?" · "+p(d.title):""}</span>
       </span>`:"<span>ผู้ออกให้: .................. (ลงชื่อ)</span>";return`
    <div class="receipt-half">
      <div style="text-align: center; font-weight: bold; font-size: 11px; color: #4338ca; margin-bottom: 6px;">${l}</div>
      <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เลขที่ใบเสร็จ:</td><td style="text-align: right; font-weight: bold;">QR-${String(e.receipt_no).padStart(6,"0")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">วันที่:</td><td style="text-align: right;">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"long"})}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ชื่อ-สกุล:</td><td style="text-align: right;">${p(((k=e.students)==null?void 0:k.full_name)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">รหัสนักเรียน:</td><td style="text-align: right;">${p(((P=e.students)==null?void 0:P.student_code)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ห้อง:</td><td style="text-align: right;">${p(((D=e.students)==null?void 0:D.main_room)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เหตุผล:</td><td style="text-align: right; font-weight: bold;">${p(e.reason)}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ค่าธรรมเนียม:</td><td style="text-align: right; font-weight: bold;">${p(o)} บาท</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ออกให้โดย:</td><td style="text-align: right;">${p((($=e.teachers)==null?void 0:$.full_name)||"แอดมิน")}</td></tr>
      </table>
      <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #d1d5db; font-size: 9px; color: #6b7280; display: flex; justify-content: space-between; align-items: flex-end; gap: 6px;">
        <span>ผู้รับ: .................. (ลงชื่อ)</span>
        ${T}
      </div>
    </div>
  `}async function Ce(e,o,l,d,T,k=[],P="5",D=null){let $=document.getElementById("qr-print-media-styles");$||($=document.createElement("style"),$.id="qr-print-media-styles",document.head.appendChild($)),$.textContent=`
    @media print {
      body > * { display: none !important; }
      #print-qr-area {
        display: block !important;
        position: absolute;
        left: 0; top: 0;
        width: 100% !important;
        padding: 0 !important; margin: 0 !important;
        background: white !important;
      }
      /* ไม่ override display แบบ เป็น initial เพราะจะทำให้ div เป็น inline และ page-break ไม่ทำงาน */
      #print-qr-area * { visibility: visible; }
      .print-room-block {
        display: block !important;   /* จำเป็นมากเพื่อให้ page-break ทำงาน */
        page-break-before: always !important;
        break-before: page !important;
        page-break-inside: avoid;
      }
      .print-room-block:first-child {
        page-break-before: auto !important;
        break-before: auto !important;
      }
      .print-room-header {
        font-family: Sarabun, sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: #1f2937;
        padding: 0 0 8px 0;
        margin-bottom: 10px;
        border-bottom: 2px solid #e5e7eb;
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
      .print-grid {
        display: grid !important;
        grid-template-columns: repeat(${o}, minmax(0, 1fr)) !important;
        gap: 10px !important;
        width: 100% !important;
      }
      .qr-print-card {
        border: 1px solid #9ca3af !important;
        border-radius: 8px !important;
        padding: 8px !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: space-between !important;
        background: white !important;
      }
      .qr-print-card canvas { width: 100% !important; height: auto !important; }
      .receipt-grid {
        display: grid !important;
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
        gap: 10px !important;
        width: 100% !important;
      }
      .qr-receipt-slip {
        display: flex !important;
        align-items: stretch !important;
        border: 1px solid #9ca3af !important;
        border-radius: 8px !important;
        padding: 10px !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        background: white !important;
        font-family: Sarabun, sans-serif !important;
      }
      .receipt-half {
        flex: 1 1 50%;
        min-width: 0;
      }
      .receipt-cut-line-v {
        width: 0;
        border-left: 1px dashed #9ca3af;
        margin: 0 10px;
      }
    }
  `;const O=document.createElement("div");O.id="print-qr-area",O.className="hidden",document.body.appendChild(O),O.innerHTML=e.map((q,ee)=>`
    <div class="print-room-block" style="padding: 0; margin: 0;">
      ${q.hideHeader?"":`
        <div class="print-room-header">
          <span>📋 ห้องเรียน: ${p(q.className)}</span>
          <span style="font-size: 11px; font-weight: normal; color: #6b7280;">${p(q.countLabel||`${q.students.length} คน`)}</span>
        </div>
      `}
      <div class="print-grid">
        ${q.students.map((m,I)=>`
          <div class="qr-print-card">
            <div style="width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 5px;">
              <canvas id="print-canvas-${m.id}-${I}-r${ee}" style="width: 100%; max-width: 100%; height: auto;"></canvas>
            </div>
            <div style="width: 100%; text-align: left; font-family: Sarabun, sans-serif; font-size: 11px;">
              <p style="font-weight: bold; color: black; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p(m.full_name)}</p>
              ${l?`<p style="color: #4b5563; margin: 2px 0 0 0; font-size: 9px;">รหัส: ${p(m.student_code||"-")}</p>`:""}
              <div style="display: flex; justify-content: space-between; margin-top: 3px; font-size: 9px; color: #4b5563;">
                ${T?`<span>ห้อง: ${p(m._roomName||q.className)}</span>`:""}
                ${d?`<span>เลขที่: ${m.seat_no}</span>`:""}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("")+(k.length===0?"":`
    <div class="print-room-block">
      <div class="receipt-grid">
        ${k.map(q=>`
          <div class="qr-receipt-slip">
            ${Qt(q,P,"🏫 ต้นขั้ว (โรงเรียนเก็บ)",D)}
            <div class="receipt-cut-line-v"></div>
            ${Qt(q,P,"🎓 มอบให้นักเรียน",D)}
          </div>
        `).join("")}
      </div>
    </div>
  `);for(let q=0;q<e.length;q++)for(let ee=0;ee<e[q].students.length;ee++){const m=e[q].students[ee],I=document.getElementById(`print-canvas-${m.id}-${ee}-r${q}`);I&&await Ze.toCanvas(I,m.student_code||"",{width:250,margin:1,color:{dark:"#000000",light:"#ffffff"}})}window.print(),O.remove()}async function to(e,o=null,l={}){var T,k,P,D,$,O;const d=!e||!!l.isQrManager;je("student-qr-print"),Ie("พิมพ์ QR Code นักเรียน"),_e(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูลห้องเรียนทั้งหมด...
    </div>
  `);try{const q=await Qs(),ee=await Le().catch(()=>({})),m=((k=(T=ee.qrReissueFee)==null?void 0:T.trim)==null?void 0:k.call(T))||"5",I=((D=(P=ee.qrReissueDoneMessage)==null?void 0:P.trim)==null?void 0:D.call(P))||"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง";let Z={name:(($=ee.qrIssuerSignatureName)==null?void 0:$.trim())||"",title:((O=ee.qrIssuerSignatureTitle)==null?void 0:O.trim())||"",url:ee.qrIssuerSignatureUrl||""};const{data:G}=await ns.from("classes").select("id, class_name, master_subjects ( id, grade_level, subject_group )").order("class_name").limit(1e4),re=new Map;for(const u of G||[]){const i=u.class_name||"";i&&!re.has(i)&&re.set(i,u)}const ne=u=>{const i=u==="ศาสนา";return[...new Set(q.map(H=>i?H.religion_room:H.main_room).filter(Boolean))].sort((H,z)=>H.localeCompare(z,"th")).map(H=>{const z=re.get(H);return{id:(z==null?void 0:z.id)||null,class_name:H,_meta:z||null}})},K=u=>{const i=u.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return i?i[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},de=u=>{var j;const i=((j=u._meta)==null?void 0:j.master_subjects)??u.master_subjects;return i?Array.isArray(i)?i.length>0?i[0]:null:i:null},c=u=>{const i=de(u);return(i==null?void 0:i.grade_level)||K(u.class_name||"")||"อื่น ๆ"},L=u=>{const i=de(u),j=(i==null?void 0:i.subject_group)||"",H=u.class_name||"";return["AGM"].includes(j)||/^(PR|อก\.|อป\.)/i.test(H)?"ศาสนา":["ACDMVOC","AGMVOC"].includes(j)||/^ปวช\./i.test(H)?"ปวช":"สามัญ"},v={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},W=u=>{const i=ne(u),j=[...new Set(i.map(z=>c(z)).filter(Boolean))],H=v[u]||[];return[...new Set([...H,...j])].sort((z,g)=>z.localeCompare(g,"th"))};let A="สามัญ",s="",n="",t=null,r=parseInt(localStorage.getItem("qr_print_cols")||"4"),b=localStorage.getItem("qr_print_show_code")!=="false",S=localStorage.getItem("qr_print_show_seat")!=="false",R=localStorage.getItem("qr_print_show_room")!=="false",f="all",h=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(h)||h<1)&&(h=4);let y=[],Y=[],F="ทำหาย";const te=()=>{if(t==="individual"&&y.length>0)J();else if(t==="class"&&n)Q();else if(t==="level"&&s)ae();else{const u=document.getElementById("qr-preview-section");u&&u.classList.add("hidden")}};if(o){const u=G==null?void 0:G.find(i=>i.id==o);u&&(A=L(u),s=c(u),n=u.id)}const oe=()=>{var Se,Be;const u=["สามัญ","ศาสนา","ปวช"].map(pe=>`
        <option value="${pe}" ${pe===A?"selected":""}>${pe}</option>
      `).join("");_e(`
        <div class="max-w-5xl mx-auto space-y-6">
          <div class="mb-4">
            <h3 class="text-lg font-bold text-gray-800">🖨️ พิมพ์การ์ด QR Code นักเรียน</h3>
            <p class="text-xs text-gray-400 mt-0.5">เลือกห้องเรียนเพื่อพิมพ์เป็นห้องเดียว หรือเลือกระดับชั้นแล้วกด "พิมพ์ทั้งระดับชั้น" เพื่อสร้างไฟล์แต่ละห้องแยกหน้าสำหรับร้านพิมพ์</p>
          </div>

          <!-- แถบสลับ พิมพ์ QR / ประวัติ -->
          <div class="flex gap-2 bg-gray-100 p-1 rounded-2xl w-fit">
            <button type="button" id="qr-page-tab-print" data-tab="print"
              class="px-4 py-2 rounded-xl text-sm font-bold transition bg-white text-indigo-600 shadow-sm">
              🖨️ พิมพ์ QR Code
            </button>
            <button type="button" id="qr-page-tab-history" data-tab="history"
              class="px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700">
              🧾 ประวัติ
            </button>
            ${d?`
            <button type="button" id="qr-page-tab-requests" data-tab="requests"
              class="px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700 relative">
              🙋 คำขอใหม่
              <span id="qr-requests-badge" class="hidden absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center"></span>
            </button>`:""}
          </div>

          <div id="qr-tab-print" class="space-y-6">
          <!-- พิมพ์รายบุคคล -->
          <div class="bg-white border border-indigo-100 rounded-3xl p-5 shadow-sm space-y-4">
            <div class="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <h4 class="font-bold text-gray-800 text-sm">👤 พิมพ์ / บันทึก QR รายบุคคล</h4>
                <p class="text-xs text-gray-400 mt-0.5">ใช้กรณีนักเรียนทำหาย ค้นหาทีละคนหรือกรอกรหัสหลายคน แล้วพิมพ์รวมในหน้าเดียว</p>
              </div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs text-gray-500 font-semibold">เหตุผล:</span>
                <select id="qr-reissue-reason" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="ทำหาย" ${F==="ทำหาย"?"selected":""}>ทำหาย</option>
                  <option value="ชำรุด" ${F==="ชำรุด"?"selected":""}>ชำรุด</option>
                  <option value="อื่นๆ" ${F==="อื่นๆ"?"selected":""}>อื่นๆ</option>
                </select>
                <span class="text-xs text-gray-500 font-semibold ml-2">จำนวนซ้ำ:</span>
                <input id="qr-individual-repeat" type="number" min="1" max="40" value="${h}"
                  class="w-20 border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500" />
                <span class="text-xs text-gray-400">ใบ</span>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
              <input id="qr-individual-search" type="search"
                class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
                placeholder="ค้นหาด้วยรหัสนักเรียน ชื่อ-สกุล หรือห้องเรียน..." />
              <button id="qr-individual-clear" type="button"
                class="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs transition">
                ล้างทั้งหมด
              </button>
            </div>
            <div id="qr-individual-results" class="hidden border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100"></div>
            <div class="space-y-2">
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">กรอกรหัสหลายคน</label>
              <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
                <textarea id="qr-individual-code-bulk" rows="3"
                  class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-indigo-500 transition resize-y font-mono"
                  placeholder="เช่น 23001 23005 23018&#10;หรือ 23020, 23021"></textarea>
                <button id="qr-individual-add-codes" type="button"
                  class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition self-stretch">
                  เพิ่มจากรหัส
                </button>
              </div>
              <p class="text-[11px] text-gray-400">คั่นรหัสด้วยเว้นวรรค ลูกน้ำ หรือขึ้นบรรทัดใหม่ ระบบจะตัดรหัสซ้ำให้อัตโนมัติ</p>
            </div>
            <div id="qr-individual-selected" class="hidden border border-indigo-100 rounded-2xl overflow-hidden"></div>
          </div>

          <!-- ตัวกรองห้องเรียน -->
          <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">1. ระบบหลักสูตร</label>
                <select id="qr-filter-category" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition">
                  ${u}
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">2. ระดับชั้น</label>
                <select id="qr-filter-level" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition">
                  <!-- เติมแบบไดนามิก -->
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">3. ห้องเรียน (หรือพิมพ์ทั้งชั้น)</label>
                <select id="qr-filter-class" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition">
                  <option value="">-- เลือกห้องเรียน --</option>
                </select>
              </div>
            </div>

            <!-- ปุ่มพิมพ์ทั้งระดับชั้น -->
            <div class="pt-2 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
              <div class="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                <span>📚</span>
                <span id="qr-level-info">เลือกระดับชั้นเพื่อดูตัวเลือกพิมพ์ทั้งชั้น</span>
              </div>
              <button id="btn-print-whole-level"
                class="hidden px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
                📚 พิมพ์ทั้งระดับชั้น (แยกหน้าต่อห้อง)
              </button>
            </div>
          </div>

          <!-- แผงตั้งค่าจัดพิมพ์ (Persistent Settings Card) -->
          <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="space-y-2">
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="font-bold text-gray-800 text-sm">🎛️ ตั้งค่ากระดาษสั่งพิมพ์</h4>
                <button type="button" id="btn-qr-issuer-sig" class="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 border border-indigo-200 rounded-lg px-2 py-1">✍️ ตั้งค่าลายเซ็นผู้ออกให้</button>
              </div>
              <div class="flex flex-wrap gap-4 items-center text-xs text-gray-600">
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-seat" ${S?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขที่
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-code" ${b?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขประจำตัว
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-room" ${R?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงห้องเรียน
                </label>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 items-center shrink-0">
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-semibold">เลือกเพศ:</span>
                <select id="select-print-gender" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="all" ${f==="all"?"selected":""}>ทั้งหมด</option>
                  <option value="ชาย" ${f==="ชาย"?"selected":""}>ชาย 👦</option>
                  <option value="หญิง" ${f==="หญิง"?"selected":""}>หญิง 👧</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500 font-semibold">จำนวนคอลัมน์:</span>
                <select id="select-print-cols" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                  <option value="3" ${r===3?"selected":""}>3 คอลัมน์</option>
                  <option value="4" ${r===4?"selected":""}>4 คอลัมน์</option>
                  <option value="5" ${r===5?"selected":""}>5 คอลัมน์</option>
                  <option value="6" ${r===6?"selected":""}>6 คอลัมน์</option>
                </select>
              </div>
            </div>
          </div>

          <!-- พื้นที่แสดงผลพรีวิว -->
          <div id="qr-preview-section" class="hidden space-y-6">
            <!-- จัดการด้วย _renderPreviewPanel -->
          </div>
          </div>

          <div id="qr-tab-history" class="hidden"></div>
          ${d?'<div id="qr-tab-requests" class="hidden"></div>':""}
        </div>
      `);const i=document.getElementById("qr-filter-category"),j=document.getElementById("qr-filter-level"),H=document.getElementById("qr-filter-class"),z=document.getElementById("qr-level-info"),g=document.getElementById("btn-print-whole-level"),X=document.getElementById("qr-individual-search"),N=document.getElementById("qr-individual-results"),V=document.getElementById("qr-individual-repeat"),le=document.getElementById("qr-individual-clear"),ie=document.getElementById("qr-individual-code-bulk"),ue=document.getElementById("qr-individual-add-codes"),xe=document.getElementById("qr-reissue-reason");xe.addEventListener("change",()=>{F=xe.value}),(Se=document.getElementById("btn-qr-issuer-sig"))==null||Se.addEventListener("click",()=>{oo(Z,pe=>{Z=pe})});const ye="px-4 py-2 rounded-xl text-sm font-bold transition bg-white text-indigo-600 shadow-sm",dt="px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700 relative",Ae={print:{btn:document.getElementById("qr-page-tab-print"),panel:document.getElementById("qr-tab-print")},history:{btn:document.getElementById("qr-page-tab-history"),panel:document.getElementById("qr-tab-history")},requests:{btn:document.getElementById("qr-page-tab-requests"),panel:document.getElementById("qr-tab-requests")}},$e=pe=>{Object.entries(Ae).forEach(([me,be])=>{!be.btn||!be.panel||(be.btn.className=me===pe?ye:dt,be.panel.classList.toggle("hidden",me!==pe))}),pe==="history"&&so(Ae.history.panel,{cols:r,showCode:b,showSeat:S,showRoom:R,qrReissueFee:m,qrIssuer:Z,isAdmin:!e}),pe==="requests"&&d&&ao(Ae.requests.panel,{teacher:e,cols:r,showCode:b,showSeat:S,showRoom:R,qrReissueDoneMessage:I,qrReissueFee:m,qrIssuer:Z})};Ae.print.btn.addEventListener("click",()=>$e("print")),Ae.history.btn.addEventListener("click",()=>$e("history")),(Be=Ae.requests.btn)==null||Be.addEventListener("click",()=>$e("requests")),d&&window._pendingQRTab==="requests"&&(window._pendingQRTab=null,$e("requests")),d&&es({limit:500}).then(pe=>{const me=pe.filter(we=>!we.printed_at).length,be=document.getElementById("qr-requests-badge");be&&me>0&&(be.textContent=String(me),be.classList.remove("hidden"))}).catch(()=>{}),X.addEventListener("input",()=>M(X.value.trim())),le.addEventListener("click",()=>{var pe;y=[],Y=[],t=null,X.value="",ie.value="",N.classList.add("hidden"),_(),(pe=document.getElementById("qr-preview-section"))==null||pe.classList.add("hidden")}),ue.addEventListener("click",()=>{const pe=C(ie.value);if(!pe.length){U("กรุณากรอกรหัสนักเรียนอย่างน้อย 1 รหัส","warning");return}const me=new Map(q.map(he=>[String(he.student_code||"").trim(),he])),be=[],we=[];for(const he of pe){const ke=me.get(he);ke?be.push(ke):we.push(he)}Y=we,be.length>0?(B(be),ie.value=we.join(`
`),U(`เพิ่มรายชื่อสำหรับพิมพ์ ${be.length} คน`,"success")):(_(),U("ไม่พบรหัสนักเรียนที่ระบุ","warning"))}),V.addEventListener("change",()=>{const pe=Math.max(1,Math.min(40,parseInt(V.value)||4));h=pe,V.value=String(pe),localStorage.setItem("qr_print_individual_repeat",String(h)),_(),te()}),document.getElementById("show-seat").addEventListener("change",pe=>{S=pe.target.checked,localStorage.setItem("qr_print_show_seat",S),te()}),document.getElementById("show-code").addEventListener("change",pe=>{b=pe.target.checked,localStorage.setItem("qr_print_show_code",b),te()}),document.getElementById("show-room").addEventListener("change",pe=>{R=pe.target.checked,localStorage.setItem("qr_print_show_room",R),te()}),document.getElementById("select-print-gender").addEventListener("change",pe=>{f=pe.target.value,te()}),document.getElementById("select-print-cols").addEventListener("change",pe=>{r=parseInt(pe.target.value),localStorage.setItem("qr_print_cols",r),te()});const ge=()=>{A=i.value;const pe=W(A);j.innerHTML=`
          <option value="">-- เลือกระดับชั้น --</option>
          ${pe.map(me=>`<option value="${me}" ${me===s?"selected":""}>${me}</option>`).join("")}
        `,ve()},ve=()=>{s=j.value;const me=ne(A).filter(we=>s?c(we)===s:!0).sort((we,he)=>(we.class_name||"").localeCompare(he.class_name||"","th"));H.innerHTML=`
          <option value="">-- เลือกห้องเรียน (${me.length} ห้อง) --</option>
          ${me.map(we=>`
            <option value="${p(we.class_name)}" ${we.class_name===n?"selected":""}>${p(we.class_name)}</option>
          `).join("")}
        `,s&&me.length>0?(z.textContent=`ระดับ ${s} มีทั้งหมด ${me.length} ห้อง`,g.textContent=`📚 พิมพ์ทั้งระดับ ${s} (${me.length} ห้อง แยกหน้า)`,g.classList.remove("hidden")):(z.textContent="เลือกระดับชั้นเพื่อดูตัวเลือกพิมพ์ทั้งชั้น",g.classList.add("hidden"));const be=H.value;be?(n=be,t="class",Q()):(t=null,document.getElementById("qr-preview-section").classList.add("hidden"))};i.addEventListener("change",()=>{s="",n="",t=null,ge()}),j.addEventListener("change",()=>{n="",t=null,ve()}),H.addEventListener("change",()=>{n=H.value,n?(t="class",Q()):(t=null,document.getElementById("qr-preview-section").classList.add("hidden"))}),g.addEventListener("click",()=>{t="level",ae()}),ge()},a=u=>u?A==="ศาสนา"?u.religion_room||u.main_room||"ไม่ระบุห้อง":u.main_room||u.religion_room||"ไม่ระบุห้อง":"ไม่ระบุห้อง",x=u=>{const i=a(u),j=A==="ศาสนา",z=q.filter(g=>(j?g.religion_room:g.main_room)===i).sort((g,X)=>(g.student_code||"").localeCompare(X.student_code||"")).findIndex(g=>String(g.id)===String(u.id));return z>=0?z+1:""},w=()=>{const u=new Map(q.map(i=>[String(i.id),i]));return y.map(i=>u.get(String(i))).filter(Boolean)},C=u=>{const i=new Set;return String(u||"").split(/[\s,，;；|]+/).map(j=>j.trim()).filter(Boolean).filter(j=>i.has(j)?!1:(i.add(j),!0))},B=u=>{const i=[...y],j=new Set(i.map(String));for(const H of u){const z=String(H.id);j.has(z)||(j.add(z),i.push(z))}y=i,t=y.length>0?"individual":null,_(),y.length>0&&J()},_=()=>{var H;const u=document.getElementById("qr-individual-selected");if(!u)return;const i=w();if(i.length===0&&Y.length===0){u.classList.add("hidden"),u.innerHTML="";return}const j=i.length*h;u.classList.remove("hidden"),u.innerHTML=`
        ${i.length>0?`
          <div class="bg-indigo-50 px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold text-indigo-900">รายการที่เลือก ${i.length} คน</p>
              <p class="text-[11px] text-indigo-700 mt-0.5">พิมพ์รวม ${j} ใบ เมื่อใช้จำนวนซ้ำ ${h} ใบ/คน</p>
            </div>
            <button type="button" id="qr-individual-clear-selected"
              class="px-3 py-1.5 rounded-lg bg-white border border-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs font-bold">
              ล้างรายชื่อ
            </button>
          </div>
          <div class="divide-y divide-indigo-50 bg-white">
            ${i.map(z=>{const g=z.main_room||z.religion_room||"ไม่ระบุห้อง";return`
                <div class="px-4 py-3 flex items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${p(z.full_name||"ไม่ระบุชื่อ")}</p>
                    <p class="text-xs text-gray-400 font-mono truncate">${p(z.student_code||"-")} · ${p(g)}</p>
                  </div>
                  <button type="button" data-remove-id="${z.id}"
                    class="qr-individual-remove px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 text-xs font-bold">
                    ลบ
                  </button>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${Y.length>0?`
          <div class="bg-amber-50 border-t border-amber-100 px-4 py-3">
            <p class="text-xs font-bold text-amber-800">ไม่พบรหัส ${Y.length} รายการ</p>
            <p class="text-[11px] text-amber-700 font-mono mt-1 break-words">${p(Y.join(", "))}</p>
          </div>
        `:""}
      `,(H=u.querySelector("#qr-individual-clear-selected"))==null||H.addEventListener("click",()=>{var z;y=[],Y=[],t=null,_(),(z=document.getElementById("qr-preview-section"))==null||z.classList.add("hidden")}),u.querySelectorAll(".qr-individual-remove").forEach(z=>{z.addEventListener("click",()=>{var g;y=y.filter(X=>String(X)!==String(z.dataset.removeId)),t=y.length>0?"individual":null,_(),y.length>0?J():(g=document.getElementById("qr-preview-section"))==null||g.classList.add("hidden")})})},E=u=>[u.student_code,u.full_name,u.main_room,u.religion_room].filter(Boolean).join(" ").toLowerCase(),M=u=>{const i=document.getElementById("qr-individual-results");if(!i)return;const j=u.toLowerCase();if(!j){i.classList.add("hidden"),i.innerHTML="";return}const H=q.filter(z=>E(z).includes(j)).sort((z,g)=>(z.student_code||"").localeCompare(g.student_code||"")).slice(0,20);if(i.classList.remove("hidden"),!H.length){i.innerHTML='<div class="px-4 py-4 text-center text-xs text-gray-400 bg-gray-50">ไม่พบนักเรียนที่ตรงกับคำค้นหา</div>';return}i.innerHTML=H.map(z=>{const g=z.main_room||z.religion_room||"ไม่ระบุห้อง";return`
          <button type="button" data-student-id="${z.id}"
            class="qr-individual-pick w-full px-4 py-3 text-left bg-white hover:bg-indigo-50 transition flex items-center justify-between gap-3">
            <span class="min-w-0">
              <span class="block text-sm font-bold text-gray-800 truncate">${p(z.full_name||"ไม่ระบุชื่อ")}</span>
              <span class="block text-xs text-gray-400 font-mono truncate">${p(z.student_code||"-")} · ${p(g)}</span>
            </span>
            <span class="text-xs font-bold text-indigo-600 flex-shrink-0">${y.includes(String(z.id))?"เพิ่มแล้ว":"เพิ่ม"}</span>
          </button>
        `}).join(""),i.querySelectorAll(".qr-individual-pick").forEach(z=>{z.addEventListener("click",()=>{const g=z.dataset.studentId||"",X=q.find(V=>String(V.id)===String(g)),N=document.getElementById("qr-individual-search");X&&(Y=[],B([X])),i.classList.add("hidden"),N&&(N.value="")})})},se=async u=>{const i=await Ze.toDataURL(u.student_code||"",{width:1e3,margin:2,color:{dark:"#000000",light:"#ffffff"}}),j=document.createElement("a"),H=String(u.student_code||u.id||"student").replace(/[^\w-]+/g,"_");j.href=i,j.download=`qr-${H}.png`,document.body.appendChild(j),j.click(),j.remove()},J=async()=>{var g,X;const u=document.getElementById("qr-preview-section"),i=w();if(!u||i.length===0)return;t="individual",u.classList.remove("hidden");const j=i.flatMap(N=>{const V=a(N),le=x(N);return Array.from({length:h},(ie,ue)=>({...N,seat_no:le,_roomName:V,_print_copy:ue+1}))}),H=i[0],z=j.length;u.innerHTML=`
        <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-800 leading-relaxed flex items-start gap-2">
          <span class="text-base">💡</span>
          <div>
            <p class="font-bold">พิมพ์รายบุคคลสำหรับกรณี QR Code หาย</p>
            <p class="opacity-90">เลือกไว้ ${i.length} คน วางซ้ำ ${h} ใบ/คน รวม ${z} ใบ และตอนพิมพ์จะไม่ใส่หัวกระดาษชื่อชั้นเรียน</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">รายบุคคล</p>
              <h4 class="font-extrabold text-gray-800 text-base mt-1">${i.length===1?p(H.full_name||"ไม่ระบุชื่อ"):`พร้อมพิมพ์ ${i.length} คน`}</h4>
              <p class="text-xs text-gray-400 font-mono mt-0.5">${i.length===1?p(H.student_code||"-"):`รวม ${z} ใบ`}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button id="btn-print-individual-qr" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition">
                🖨️ พิมพ์ / บันทึก PDF (${z} ใบ)
              </button>
              ${i.length===1?`
                <button id="btn-download-individual-qr" class="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-950 text-white font-bold text-xs shadow-md transition">
                  ⬇️ ดาวน์โหลด PNG
                </button>
              `:""}
            </div>
          </div>
          <div class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="grid-template-columns: repeat(${r}, minmax(0, 1fr));">
            ${j.map((N,V)=>`
              <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                  <canvas id="individual-copy-canvas-${V}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                </div>
                <div class="text-left w-full min-w-0 font-sans">
                  <p class="text-[11px] font-bold text-gray-800 truncate">${p(N.full_name)}</p>
                  ${b?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${p(N.student_code||"-")}</p>`:""}
                  <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                    ${R?`<span>ห้อง: ${p(N._roomName)}</span>`:""}
                    ${S&&N.seat_no?`<span>เลขที่: ${N.seat_no}</span>`:""}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `,j.forEach((N,V)=>{const le=document.getElementById(`individual-copy-canvas-${V}`);le&&Ze.toCanvas(le,N.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},ie=>{ie&&console.error("Individual QR error:",ie)})}),(g=document.getElementById("btn-print-individual-qr"))==null||g.addEventListener("click",async()=>{const N=document.getElementById("btn-print-individual-qr");N.disabled=!0,N.textContent="กำลังบันทึก...";let V=[];try{V=await Promise.all(i.map(le=>Us({studentId:le.id,teacherId:e==null?void 0:e.id,reason:F})))}catch(le){console.error("Failed to log QR reissue:",le),U("บันทึกสถิติการออก QR ใหม่ไม่สำเร็จ: "+ce(le),"warning")}N.disabled=!1,N.textContent=`🖨️ พิมพ์ / บันทึก PDF (${z} ใบ)`,await Ce([{className:"รายบุคคล",countLabel:`${i.length} คน · ${z} ใบ`,students:j,hideHeader:!0}],r,b,S,R,[]),V.length>0&&(U(`บันทึกสถิติออก QR ใหม่ ${V.length} คนแล้ว (${F})`,"success"),await bt(V.length)&&await Ce([],r,b,S,R,V,m,Z))}),(X=document.getElementById("btn-download-individual-qr"))==null||X.addEventListener("click",async()=>{await se(H)})},Q=async()=>{t="class";const u=document.getElementById("qr-preview-section");if(u){u.classList.remove("hidden");try{const i=A==="ศาสนา",j=n,H=q.filter(g=>(i?g.religion_room:g.main_room)===n).sort((g,X)=>(g.student_code||"").localeCompare(X.student_code||"")).map((g,X)=>({...g,seat_no:X+1}));if(H.length===0){u.innerHTML=`
            <div class="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
              <p class="text-4xl mb-2">👥</p>
              <p class="text-sm font-semibold text-gray-500">ไม่มีนักเรียนที่เปิดใช้งานในห้องเรียนนี้</p>
            </div>
          `;return}const z=H.filter(g=>f==="all"?!0:g.gender===f);u.innerHTML=`
          <!-- ข้อแนะนำก่อนพิมพ์ -->
          <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-800 leading-relaxed flex items-start gap-2">
            <span class="text-base">💡</span>
            <div>
              <p class="font-bold">แนะนำการพิมพ์ (บันทึกเป็น PDF / สั่งพิมพ์สติกเกอร์):</p>
              <p class="opacity-90">ในหน้าต่างพรีวิวพิมพ์ของเบราว์เซอร์ ให้เปิด <strong>"Background graphics"</strong> และปิด <strong>"Headers and footers"</strong> และเลือก <strong>Paper size: A4</strong> เพื่อให้ได้ผลดีที่สุด แต่ละห้องเรียนจะอยู่บนหน้ากระดาษของตัวเองอัตโนมัติ</p>
            </div>
          </div>

          <!-- Live Preview -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">พรีวิวการจัดวาง — ${p(j)} (${z.length} คน)</p>
              <button id="btn-trigger-print" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5" ${z.length===0?'disabled style="opacity: 0.5; cursor: not-allowed;"':""}>
                🖨️ สั่งพิมพ์ห้องนี้ (Print)
              </button>
            </div>
            <div id="qr-live-grid" class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="${z.length===0?"":`grid-template-columns: repeat(${r}, minmax(0, 1fr));`}">
              ${z.length===0?`
                <div class="col-span-full py-12 text-center text-xs text-gray-400 font-semibold bg-white border border-gray-100 rounded-2xl">ไม่มีนักเรียนเพศที่เลือกในห้องเรียนนี้</div>
              `:z.map(g=>`
                <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                  <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                    <canvas id="live-canvas-${g.id}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                  </div>
                  <div class="text-left w-full min-w-0 font-sans">
                    <p class="text-[11px] font-bold text-gray-800 truncate">${p(g.full_name)}</p>
                    ${b?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${p(g.student_code||"-")}</p>`:""}
                    <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                      ${R?`<span>ห้อง: ${p(j)}</span>`:""}
                      ${S?`<span>เลขที่: ${g.seat_no}</span>`:""}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `,z.forEach(g=>{const X=document.getElementById(`live-canvas-${g.id}`);X&&Ze.toCanvas(X,g.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},N=>{N&&console.error("Live QR error:",N)})}),z.length>0&&document.getElementById("btn-trigger-print").addEventListener("click",async()=>{await Ce([{className:j,students:z}],r,b,S,R)})}catch(i){console.error(i),u.innerHTML='<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาดในการโหลดรายชื่อนักเรียน</div>'}}},ae=async()=>{t="level";const u=document.getElementById("qr-filter-level"),i=document.getElementById("qr-preview-section");if(!s||!i)return;const H=ne(A).filter(z=>c(z)===s).sort((z,g)=>(z.class_name||"").localeCompare(g.class_name||"","th"));if(H.length!==0){i.classList.remove("hidden"),i.innerHTML=`
        <div class="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div class="flex flex-col items-center gap-4">
            <svg class="animate-spin h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            <p class="text-sm font-bold text-gray-700">กำลังจัดเตรียมรายชื่อนักเรียนทุกห้องในระดับ ${p(s)}...</p>
            <p class="text-xs text-gray-400" id="qr-level-progress">กำลังจัดเตรียม 0 / ${H.length} ห้อง</p>
          </div>
        </div>
      `;try{const z=[],g=A==="ศาสนา";for(let N=0;N<H.length;N++){const V=H[N],le=document.getElementById("qr-level-progress");le&&(le.textContent=`กำลังจัดเตรียม ${N+1} / ${H.length} ห้อง — ${V.class_name}`);const ie=q.filter(ue=>(g?ue.religion_room:ue.main_room)===V.class_name).filter(ue=>f==="all"||ue.gender===f).sort((ue,xe)=>(ue.student_code||"").localeCompare(xe.student_code||"")).map((ue,xe)=>({...ue,seat_no:xe+1}));ie.length>0&&z.push({className:V.class_name,students:ie})}if(z.length===0){i.innerHTML='<div class="bg-white border border-gray-200 rounded-3xl p-8 text-center text-gray-400 text-sm">ไม่พบนักเรียนในระดับชั้นนี้</div>';return}const X=z.reduce((N,V)=>N+V.students.length,0);i.innerHTML=`
          <div class="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 class="font-bold text-gray-800 text-base">📚 พร้อมพิมพ์ทั้งระดับ ${p(s)}</h4>
                <p class="text-sm text-gray-500 mt-1">${z.length} ห้อง · ${X} คน · แต่ละห้องจะแยกหน้ากระดาษ</p>
              </div>
              <button id="btn-confirm-whole-level-print" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2">
                🖨️ พิมพ์ / บันทึก PDF ทั้ง ${p(s)}
              </button>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${z.map(N=>`
                <div class="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-center">
                  <p class="text-sm font-bold text-gray-800">${p(N.className)}</p>
                  <p class="text-xs text-gray-500 mt-0.5">${N.students.length} คน</p>
                </div>
              `).join("")}
            </div>
          </div>
        `,document.getElementById("btn-confirm-whole-level-print").addEventListener("click",async()=>{await Ce(z,r,b,S,R)})}catch(z){console.error(z),i.innerHTML=`<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาด: ${z.message}</div>`}}};oe()}catch(q){console.error(q),U("โหลดข้อมูลล้มเหลว: "+ce(q),"error")}}async function so(e,{cols:o,showCode:l,showSeat:d,showRoom:T,qrReissueFee:k,qrIssuer:P,isAdmin:D}){var de;if(!e||e.dataset.loaded)return;e.dataset.loaded="1",e.innerHTML=`
    <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-3">
      <div>
        <h4 class="font-bold text-gray-800 text-sm">🧾 ประวัตินักเรียนที่มาติดต่อออก QR Code ใหม่</h4>
        <p class="text-xs text-gray-400 mt-0.5">${D?"ค้นหา ออก QR ซ้ำ ออกใบเสร็จซ้ำ แก้ไขเหตุผล หรือลบรายการได้":"ค้นหา หรือออก QR / ใบเสร็จซ้ำได้ (แก้ไข/ลบได้เฉพาะแอดมิน)"}</p>
      </div>
      <input id="qr-reissue-search" type="search"
        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
        placeholder="ค้นหาชื่อ รหัส หรือห้อง..." />
      <div id="qr-reissue-summary" class="grid grid-cols-2 gap-2"></div>
      <div id="qr-reissue-history" class="bg-gray-50/50 rounded-2xl px-3">
        <p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>
      </div>
    </div>
  `;let $=[],O="",q=null,ee={reason:"ทำหาย",note:""};const m=()=>{const c=e.querySelector("#qr-reissue-history");if(!c)return;const L=O.trim().toLowerCase(),v=L?$.filter(A=>{const s=A.students||{};return String(s.full_name||"").toLowerCase().includes(L)||String(s.student_code||"").toLowerCase().includes(L)||String(s.main_room||"").toLowerCase().includes(L)}):$,W=e.querySelector("#qr-reissue-summary");if(W){const A=Number(k)||0;W.innerHTML=`
        <div class="bg-indigo-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-indigo-500 font-bold">จำนวนรายการ${L?" (ที่กรอง)":""}</p>
          <p class="text-base font-extrabold text-indigo-700">${v.length}</p>
        </div>
        <div class="bg-amber-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-amber-600 font-bold">ยอดค่าธรรมเนียมรวม (${A} บาท/ใบ)</p>
          <p class="text-base font-extrabold text-amber-700">${(v.length*A).toLocaleString("th-TH")} บาท</p>
        </div>`}c.innerHTML=v.length?`
      <div class="divide-y divide-gray-100">
        ${v.map(A=>{var s,n,t,r,b,S;return A.id===q?`
          <div class="py-3 space-y-2">
            <p class="font-bold text-gray-700 text-xs">${p(((s=A.students)==null?void 0:s.full_name)||"-")} <span class="font-normal text-gray-400">(${p(((n=A.students)==null?void 0:n.student_code)||"-")})</span></p>
            <div class="flex flex-wrap gap-2 items-center">
              <select id="reissue-edit-reason" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                <option value="ทำหาย" ${ee.reason==="ทำหาย"?"selected":""}>ทำหาย</option>
                <option value="ชำรุด" ${ee.reason==="ชำรุด"?"selected":""}>ชำรุด</option>
                <option value="อื่นๆ" ${ee.reason==="อื่นๆ"?"selected":""}>อื่นๆ</option>
              </select>
              <input id="reissue-edit-note" type="text" placeholder="หมายเหตุ (ถ้ามี)" value="${p(ee.note||"")}"
                class="flex-1 min-w-[140px] border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500" />
              <button type="button" data-action="save-edit" data-log-id="${A.id}" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs">บันทึก</button>
              <button type="button" data-action="cancel-edit" class="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs">ยกเลิก</button>
            </div>
          </div>
        `:`
          <div class="flex items-center justify-between gap-3 py-2.5 text-xs flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 truncate">${p(((t=A.students)==null?void 0:t.full_name)||"-")} <span class="font-normal text-gray-400">(${p(((r=A.students)==null?void 0:r.student_code)||"-")})</span></p>
              <p class="text-gray-400 mt-0.5">เลขที่ QR-${String(A.receipt_no).padStart(6,"0")} · ${p(A.reason)}${A.note?` (${p(A.note)})`:""} · ห้อง ${p(((b=A.students)==null?void 0:b.main_room)||"-")} · ออกโดย ${p(((S=A.teachers)==null?void 0:S.full_name)||"แอดมิน")} · ${new Date(A.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</p>
            </div>
            <div class="flex gap-1.5 shrink-0">
              <button type="button" data-action="reprint-qr" data-log-id="${A.id}" title="ออก QR Code" class="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]">🖨️ QR</button>
              <button type="button" data-action="reprint-receipt" data-log-id="${A.id}" title="ออกใบเสร็จ" class="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-[11px]">🧾 ใบเสร็จ</button>
              ${D?`
                <button type="button" data-action="edit" data-log-id="${A.id}" title="แก้ไข" class="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-[11px]">✏️ แก้ไข</button>
                <button type="button" data-action="delete" data-log-id="${A.id}" title="ลบ" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
              `:""}
            </div>
          </div>
        `}).join("")}
      </div>
    `:`
      <p class="text-xs text-gray-400 text-center py-6">${$.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีประวัติการออก QR ใหม่"}</p>
    `},I=async()=>{const c=e.querySelector("#qr-reissue-history");if(c){c.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>';try{$=await en({limit:300}),m()}catch(L){console.error("Failed to load QR reissue history:",L),c.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดประวัติไม่สำเร็จ</p>'}}},Z=async c=>{const L=c.students;if(!(L!=null&&L.id)){U("ไม่พบข้อมูลนักเรียนสำหรับรายการนี้","warning");return}await Ce([{className:"รายบุคคล",countLabel:"1 ใบ",students:[{id:L.id,full_name:L.full_name,student_code:L.student_code,seat_no:null,_roomName:L.main_room}],hideHeader:!0}],o,l,d,T,[])},G=async c=>{await Ce([],o,l,d,T,[c],k,P)},re=async c=>{var L;if(D)try{const v=await Zs(c,{reason:ee.reason,note:((L=ee.note)==null?void 0:L.trim())||null});$=$.map(W=>W.id===c?v:W),q=null,m(),U("บันทึกการแก้ไขแล้ว","success")}catch(v){console.error("Failed to update QR reissue log:",v),U("บันทึกไม่สำเร็จ: "+ce(v),"error")}},ne=async c=>{var W;if(!D)return;const L=$.find(A=>A.id===c);if(await rt({title:"ลบประวัตินี้?",message:`ลบรายการออก QR ใหม่ของ ${((W=L==null?void 0:L.students)==null?void 0:W.full_name)||"นักเรียน"} (เลขที่ QR-${String((L==null?void 0:L.receipt_no)??0).padStart(6,"0")})`,detail:"ลบแล้วไม่สามารถกู้คืนได้ สถิติรายการนี้จะหายไปถาวร",confirmText:"ลบเลย"}))try{await Xs(c),$=$.filter(A=>A.id!==c),m(),U("ลบประวัติแล้ว","success")}catch(A){console.error("Failed to delete QR reissue log:",A),U("ลบไม่สำเร็จ: "+ce(A),"error")}},K=e.querySelector("#qr-reissue-history");K.addEventListener("click",c=>{const L=c.target.closest("[data-action]");if(!L)return;const v=L.dataset.logId,W=$.find(A=>A.id===v);L.dataset.action==="reprint-qr"&&W?Z(W):L.dataset.action==="reprint-receipt"&&W?G(W):L.dataset.action==="delete"&&v&&D?ne(v):L.dataset.action==="edit"&&W&&D?(q=v,ee={reason:W.reason,note:W.note||""},m()):L.dataset.action==="cancel-edit"?(q=null,m()):L.dataset.action==="save-edit"&&v&&D&&re(v)}),K.addEventListener("change",c=>{c.target.id==="reissue-edit-reason"&&(ee.reason=c.target.value)}),K.addEventListener("input",c=>{c.target.id==="reissue-edit-note"&&(ee.note=c.target.value)}),(de=e.querySelector("#qr-reissue-search"))==null||de.addEventListener("input",c=>{O=c.target.value,m()}),I()}function no(e){if(!e||e.dataset.bound)return;e.dataset.bound="1";const o=e.getContext("2d");o.lineWidth=2.5,o.lineCap="round",o.lineJoin="round",o.strokeStyle="#111827";let l=!1,d=null;const T=$=>{const O=e.getBoundingClientRect(),q=$.touches?$.touches[0]:$;return{x:(q.clientX-O.left)*(e.width/O.width),y:(q.clientY-O.top)*(e.height/O.height)}},k=$=>{$.preventDefault(),l=!0,d=T($)},P=$=>{if(!l)return;$.preventDefault();const O=T($);o.beginPath(),o.moveTo(d.x,d.y),o.lineTo(O.x,O.y),o.stroke(),d=O},D=()=>{l=!1};e.addEventListener("mousedown",k),e.addEventListener("mousemove",P),window.addEventListener("mouseup",D),e.addEventListener("touchstart",k,{passive:!1}),e.addEventListener("touchmove",P,{passive:!1}),e.addEventListener("touchend",D)}function oo(e,o){var T;(T=document.getElementById("qr-issuer-sig-modal"))==null||T.remove();const l=document.createElement("div");l.id="qr-issuer-sig-modal",l.className="fixed inset-0 z-[230] flex items-center justify-center p-4 bg-black/50",l.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between">
        <p class="font-bold text-gray-800 text-sm">✍️ ลายเซ็นผู้ออกให้บัตร QR Code</p>
        <button type="button" id="qr-sig-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <p class="text-[11px] text-gray-400">ชื่อ/ตำแหน่ง/ลายเซ็นนี้จะพิมพ์ลงใบเสร็จออก QR ใหม่ทุกใบอัตโนมัติ แทนต้องเซ็นสดด้วยปากกา</p>
      <div class="flex gap-2">
        <input id="qr-sig-name" type="text" value="${p((e==null?void 0:e.name)||"")}" placeholder="ชื่อ-สกุล เช่น นายฮัมบาลีย์ วาจิ" class="flex-1 min-w-0 border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      </div>
      <input id="qr-sig-title" type="text" value="${p((e==null?void 0:e.title)||"")}" placeholder="ตำแหน่ง เช่น ครูฝ่ายปกครอง (ไม่บังคับ)" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      <button type="button" id="qr-sig-save-info" class="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">บันทึกชื่อ-ตำแหน่ง</button>

      <div class="pt-2 border-t border-gray-100">
        <p class="text-[11px] font-bold text-gray-500 mb-1.5">ลายเซ็นปัจจุบัน</p>
        <div id="qr-sig-preview">
          ${e!=null&&e.url?`<img src="${p(e.url)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'}
        </div>
      </div>

      <div>
        <p class="text-[11px] font-bold text-gray-500 mb-1.5">วาดลายเซ็นใหม่</p>
        <canvas id="qr-sig-canvas" width="400" height="150" class="w-full border border-dashed border-gray-300 rounded-xl bg-white" style="height:120px;touch-action:none;cursor:crosshair"></canvas>
        <div class="flex gap-2 mt-2">
          <button type="button" id="qr-sig-clear" class="flex-1 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50">ล้าง</button>
          <button type="button" id="qr-sig-save-drawn" class="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">บันทึกลายเซ็นที่วาด</button>
        </div>
      </div>

      <div>
        <p class="text-[11px] font-bold text-gray-500 mb-1.5">หรืออัปโหลดรูปลายเซ็น</p>
        <div class="flex items-center gap-2">
          <input type="file" accept="image/*" id="qr-sig-file" class="flex-1 min-w-0 text-[11px]" />
          <button type="button" id="qr-sig-upload" class="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold flex-shrink-0">อัปโหลด</button>
        </div>
      </div>
    </div>`,document.body.appendChild(l),l.addEventListener("click",k=>{k.target===l&&l.remove()}),l.querySelector("#qr-sig-close").addEventListener("click",()=>l.remove()),no(l.querySelector("#qr-sig-canvas"));const d=k=>{l.querySelector("#qr-sig-preview").innerHTML=k?`<img src="${p(k)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'};l.querySelector("#qr-sig-save-info").addEventListener("click",async()=>{const k=l.querySelector("#qr-sig-name").value.trim(),P=l.querySelector("#qr-sig-title").value.trim();try{await Promise.all([Ye("qrIssuerSignatureName",k),Ye("qrIssuerSignatureTitle",P)]),e={...e,name:k,title:P},o(e),U("บันทึกชื่อ-ตำแหน่งแล้ว ✅","success")}catch(D){U("บันทึกไม่สำเร็จ: "+ce(D),"error")}}),l.querySelector("#qr-sig-clear").addEventListener("click",()=>{const k=l.querySelector("#qr-sig-canvas");k.getContext("2d").clearRect(0,0,k.width,k.height)}),l.querySelector("#qr-sig-save-drawn").addEventListener("click",async()=>{const k=l.querySelector("#qr-sig-canvas"),P=await new Promise($=>k.toBlob($,"image/png"));if(!P){U("ยังไม่มีลายเซ็นให้บันทึก","warning");return}const D=l.querySelector("#qr-sig-save-drawn");D.disabled=!0,D.textContent="กำลังบันทึก...";try{const $=await Ct(P);await Ye("qrIssuerSignatureUrl",$),e={...e,url:$},o(e),d($),U("บันทึกลายเซ็นแล้ว ✅","success")}catch($){U("บันทึกไม่สำเร็จ: "+ce($),"error")}finally{D.disabled=!1,D.textContent="บันทึกลายเซ็นที่วาด"}}),l.querySelector("#qr-sig-upload").addEventListener("click",async()=>{var D;const k=(D=l.querySelector("#qr-sig-file").files)==null?void 0:D[0];if(!k){U("กรุณาเลือกไฟล์รูปลายเซ็น","warning");return}const P=l.querySelector("#qr-sig-upload");P.disabled=!0,P.textContent="กำลังอัปโหลด...";try{const $=await Ct(k);await Ye("qrIssuerSignatureUrl",$),e={...e,url:$},o(e),d($),U("อัปโหลดลายเซ็นแล้ว ✅","success")}catch($){U("อัปโหลดไม่สำเร็จ: "+ce($),"error")}finally{P.disabled=!1,P.textContent="อัปโหลด"}})}async function ao(e,{teacher:o,cols:l,showCode:d,showSeat:T,showRoom:k,qrReissueDoneMessage:P,qrReissueFee:D="5",qrIssuer:$=null}){var n,t,r,b,S,R;if(!e||e.dataset.loaded)return;e.dataset.loaded="1";const O=!o;e.innerHTML=`
    <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-3">
      <div>
        <h4 class="font-bold text-gray-800 text-sm">🙋 คำขอทำบัตร QR Code ใหม่จากนักเรียน</h4>
        <p class="text-xs text-gray-400 mt-0.5">กด "ทำเสร็จแล้ว" เพื่อพิมพ์บัตรและบันทึกเข้าประวัติ หรือติ๊กเลือกหลายคนแล้วทำพร้อมกันได้ แล้วทำเครื่องหมายเมื่อนักเรียนมารับ/ชำระค่าปรับ</p>
      </div>
      <input id="qr-requests-search" type="search"
        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
        placeholder="ค้นหาชื่อ รหัส หรือห้อง..." />
      <label class="flex items-center gap-2 text-xs text-gray-500 px-1 select-none">
        <input type="checkbox" id="qr-requests-select-all" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
        เลือกทั้งหมด (ที่ยังไม่ทำ)
      </label>
      <div id="qr-requests-bulk-bar" class="hidden sticky top-0 z-10 flex items-center justify-between gap-2 bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-2">
        <span id="qr-requests-bulk-count" class="text-xs font-bold text-indigo-700"></span>
        <button type="button" id="qr-requests-bulk-fulfill" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px] flex-shrink-0">🖨️ ทำเสร็จแล้วพร้อมกัน</button>
      </div>
      <div id="qr-requests-list" class="bg-gray-50/50 rounded-2xl px-3">
        <p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>
      </div>
    </div>
    ${O?`
    <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-3 mt-6">
      <div>
        <h4 class="font-bold text-gray-800 text-sm">👥 มอบสิทธิ์ครูจัดการหน้านี้</h4>
        <p class="text-xs text-gray-400 mt-0.5">ครูที่ได้รับสิทธิ์จะเห็นเมนู "พิมพ์/คำขอ QR Code" เหมือนแอดมิน และได้รับแจ้งเตือนคำขอใหม่ด้วย</p>
      </div>
      <div class="flex gap-2">
        <input id="qr-manager-search" type="search"
          class="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
          placeholder="ค้นหาชื่อหรือรหัสครู..." />
      </div>
      <div id="qr-manager-search-results" class="hidden border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100"></div>
      <div id="qr-manager-list" class="pt-2 border-t border-gray-100"><p class="text-xs text-gray-400 text-center py-4">กำลังโหลด...</p></div>
    </div>`:""}
  `;let q=[],ee="";const m=new Set,I=()=>{const f=e.querySelector("#qr-requests-bulk-bar"),h=e.querySelector("#qr-requests-bulk-count");if(!f||!h)return;m.size>0?(f.classList.remove("hidden"),h.textContent=`เลือกไว้ ${m.size} คน`):f.classList.add("hidden");const y=q.filter(F=>!F.printed_at).map(F=>F.id),Y=e.querySelector("#qr-requests-select-all");Y&&(Y.checked=y.length>0&&y.every(F=>m.has(F)))},Z=()=>{const f=e.querySelector("#qr-requests-list");if(!f)return;const h=ee.trim().toLowerCase(),y=h?q.filter(oe=>{const a=oe.students||{};return String(a.full_name||"").toLowerCase().includes(h)||String(a.student_code||"").toLowerCase().includes(h)||String(a.main_room||"").toLowerCase().includes(h)}):q,Y=y.filter(oe=>!oe.printed_at),F=y.filter(oe=>oe.printed_at);for(const oe of[...m])Y.some(a=>a.id===oe)||m.delete(oe);const te=(oe,a)=>{var x,w,C;return`
      <div class="py-3 flex items-start gap-2 ${a?"bg-amber-50/60 -mx-3 px-3 rounded-xl":""}">
        ${a?`<input type="checkbox" data-select-id="${oe.id}" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 flex-shrink-0" ${m.has(oe.id)?"checked":""}>`:'<span class="w-3.5 flex-shrink-0"></span>'}
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 text-xs truncate">${p(((x=oe.students)==null?void 0:x.full_name)||"-")} <span class="font-normal text-gray-400">(${p(((w=oe.students)==null?void 0:w.student_code)||"-")})</span></p>
              <p class="text-gray-400 text-[11px] mt-0.5">ห้อง ${p(((C=oe.students)==null?void 0:C.main_room)||"-")} · แจ้งเมื่อ ${new Date(oe.requested_at).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}</p>
            </div>
            ${a?"":'<span class="text-[11px] font-bold text-emerald-600 flex-shrink-0">✅ ทำเสร็จแล้ว</span>'}
          </div>
          <div class="flex flex-wrap gap-1.5 mt-2">
            ${a?`<button type="button" data-action="fulfill" data-id="${oe.id}" class="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px]">🖨️ ทำเสร็จแล้ว (พิมพ์บัตร)</button>`:""}
            <button type="button" data-action="toggle-pickup" data-id="${oe.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${oe.picked_up_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">🤝 ${oe.picked_up_at?"มารับแล้ว":"มารับหรือยัง"}</button>
            <button type="button" data-action="toggle-fine" data-id="${oe.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${oe.fine_paid_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">💰 ${oe.fine_paid_at?"ชำระค่าปรับแล้ว":"ชำระค่าปรับหรือยัง"}</button>
            <button type="button" data-action="delete" data-id="${oe.id}" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
          </div>
        </div>
      </div>`};f.innerHTML=y.length?`<div class="divide-y divide-gray-100">${[...Y,...F].map(oe=>te(oe,!oe.printed_at)).join("")}</div>`:`
      <p class="text-xs text-gray-400 text-center py-6">${q.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีคำขอจากนักเรียน"}</p>
    `,I()},G=async()=>{const f=e.querySelector("#qr-requests-list");f&&(f.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>');try{q=await es({limit:500}),Z()}catch(h){console.error("Failed to load QR reissue requests:",h),f&&(f.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดรายการไม่สำเร็จ</p>')}},re=f=>{var F,te;const h=q.find(oe=>oe.id===f);if(!((F=h==null?void 0:h.students)!=null&&F.id)){U("ไม่พบข้อมูลนักเรียนสำหรับคำขอนี้","warning");return}(te=document.getElementById("qr-fulfill-modal"))==null||te.remove();let y=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(y)||y<1)&&(y=4);const Y=document.createElement("div");Y.id="qr-fulfill-modal",Y.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",Y.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${p(h.students.full_name||"-")}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส ${p(h.students.student_code||"-")} · ห้อง ${p(h.students.main_room||"-")}</p>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">เหตุผล</label>
          <select id="qr-fulfill-reason" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500">
            <option value="ทำหาย" selected>ทำหาย</option>
            <option value="ชำรุด">ชำรุด</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">จำนวนซ้ำ (ใบ)</label>
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${y}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึก</button>
        </div>
      </div>`,document.body.appendChild(Y),Y.addEventListener("click",oe=>{oe.target===Y&&Y.remove()}),Y.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>Y.remove()),Y.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const oe=Y.querySelector("#qr-fulfill-reason").value,a=Math.max(1,Math.min(40,parseInt(Y.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(a));const x=Y.querySelector("#qr-fulfill-ok");x.disabled=!0,x.textContent="กำลังดำเนินการ...";try{const w=await Et({requestId:f,studentId:h.students.id,teacherId:(o==null?void 0:o.id)??null,reason:oe,feedbackId:h.feedback_id,message:P}),C=Array.from({length:a},(B,_)=>({id:h.students.id,full_name:h.students.full_name,student_code:h.students.student_code,seat_no:null,_roomName:h.students.main_room,_print_copy:_+1}));await Ce([{className:"รายบุคคล",countLabel:`${a} ใบ`,students:C,hideHeader:!0}],l,d,T,k,[]),Y.remove(),U("ทำเสร็จแล้ว บันทึกเข้าประวัติ + แจ้งนักเรียนแล้ว ✅","success"),await G(),w&&await bt(1)&&await Ce([],l,d,T,k,[w],D,$)}catch(w){x.disabled=!1,x.textContent="🖨️ พิมพ์ + บันทึก",U("บันทึกไม่สำเร็จ: "+ce(w),"error")}})},ne=()=>{var Y;const f=q.filter(F=>{var te;return m.has(F.id)&&((te=F.students)==null?void 0:te.id)});if(!f.length)return;(Y=document.getElementById("qr-fulfill-modal"))==null||Y.remove();let h=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(h)||h<1)&&(h=4);const y=document.createElement("div");y.id="qr-fulfill-modal",y.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",y.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${f.length} คนพร้อมกัน</p>
          <p class="text-xs text-gray-400 mt-0.5">${f.map(F=>p(F.students.full_name||"-")).join(", ")}</p>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">เหตุผล (ใช้ร่วมกันทุกคน)</label>
          <select id="qr-fulfill-reason" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500">
            <option value="ทำหาย" selected>ทำหาย</option>
            <option value="ชำรุด">ชำรุด</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">จำนวนซ้ำต่อคน (ใบ)</label>
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${h}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึกทั้งหมด</button>
        </div>
      </div>`,document.body.appendChild(y),y.addEventListener("click",F=>{F.target===y&&y.remove()}),y.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>y.remove()),y.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const F=y.querySelector("#qr-fulfill-reason").value,te=Math.max(1,Math.min(40,parseInt(y.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(te));const oe=y.querySelector("#qr-fulfill-ok");oe.disabled=!0,oe.textContent="กำลังดำเนินการ...";try{const a=await Promise.all(f.map(w=>Et({requestId:w.id,studentId:w.students.id,teacherId:(o==null?void 0:o.id)??null,reason:F,feedbackId:w.feedback_id,message:P}))),x=f.flatMap(w=>Array.from({length:te},(C,B)=>({id:w.students.id,full_name:w.students.full_name,student_code:w.students.student_code,seat_no:null,_roomName:w.students.main_room,_print_copy:B+1})));await Ce([{className:"คำขอทำบัตรใหม่ (หลายคน)",countLabel:`${f.length} คน · ${x.length} ใบ`,students:x,hideHeader:!0}],l,d,T,k,[]),y.remove(),m.clear(),U(`ทำเสร็จแล้ว ${f.length} คน บันทึกเข้าประวัติ + แจ้งนักเรียนทุกคนแล้ว ✅`,"success"),await G(),a.length&&await bt(a.length)&&await Ce([],l,d,T,k,a,D,$)}catch(a){oe.disabled=!1,oe.textContent="🖨️ พิมพ์ + บันทึกทั้งหมด",U("บันทึกไม่สำเร็จ: "+ce(a),"error")}})},K=async(f,h)=>{const y=q.find(F=>F.id===f),Y=y!=null&&y[h]?null:new Date().toISOString();try{await tn(f,h,Y),y[h]=Y,Z()}catch(F){U("บันทึกไม่สำเร็จ: "+ce(F),"error")}},de=async f=>{if(confirm("ลบคำขอนี้?"))try{await sn(f),q=q.filter(h=>h.id!==f),Z(),U("ลบแล้ว","success")}catch(h){U("ลบไม่สำเร็จ: "+ce(h),"error")}};if((n=e.querySelector("#qr-requests-search"))==null||n.addEventListener("input",f=>{ee=f.target.value,Z()}),(t=e.querySelector("#qr-requests-list"))==null||t.addEventListener("click",f=>{const h=f.target.closest("[data-action]");if(!h)return;const y=parseInt(h.dataset.id);h.dataset.action==="fulfill"?re(y):h.dataset.action==="toggle-pickup"?K(y,"picked_up_at"):h.dataset.action==="toggle-fine"?K(y,"fine_paid_at"):h.dataset.action==="delete"&&de(y)}),(r=e.querySelector("#qr-requests-list"))==null||r.addEventListener("change",f=>{const h=f.target.closest("[data-select-id]");if(!h)return;const y=parseInt(h.dataset.selectId);h.checked?m.add(y):m.delete(y),I()}),(b=e.querySelector("#qr-requests-select-all"))==null||b.addEventListener("change",f=>{const h=q.filter(y=>!y.printed_at).map(y=>y.id);f.target.checked?h.forEach(y=>m.add(y)):h.forEach(y=>m.delete(y)),Z()}),(S=e.querySelector("#qr-requests-bulk-fulfill"))==null||S.addEventListener("click",()=>ne()),G(),!O)return;let c=[];const L=()=>{const f=e.querySelector("#qr-manager-list");f&&(f.innerHTML=c.length?c.map(h=>{var y,Y;return`
      <div class="flex items-center justify-between gap-2 py-2 text-xs">
        <span class="font-semibold text-gray-700">${p(((y=h.teachers)==null?void 0:y.full_name)||"-")} <span class="font-normal text-gray-400">(${p(((Y=h.teachers)==null?void 0:Y.teacher_code)||"-")})</span></span>
        <button type="button" data-revoke="${h.profile_id}" class="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">ยกเลิกสิทธิ์</button>
      </div>`}).join(""):`
      <p class="text-xs text-gray-400 text-center py-4">ยังไม่มีครูที่ได้รับสิทธิ์</p>
    `)},v=async()=>{try{c=await nn(),L()}catch{const f=e.querySelector("#qr-manager-list");f&&(f.innerHTML='<p class="text-xs text-red-400 text-center py-4">โหลดไม่สำเร็จ</p>')}};(R=e.querySelector("#qr-manager-list"))==null||R.addEventListener("click",async f=>{const h=f.target.closest("[data-revoke]");if(h)try{await Ws(h.dataset.revoke),await v(),U("ยกเลิกสิทธิ์แล้ว","success")}catch(y){U("ยกเลิกไม่สำเร็จ: "+ce(y),"error")}});const W=e.querySelector("#qr-manager-search"),A=e.querySelector("#qr-manager-search-results");let s=null;W==null||W.addEventListener("input",()=>{clearTimeout(s);const f=W.value.trim();if(!f){A.classList.add("hidden"),A.innerHTML="";return}s=setTimeout(async()=>{try{const h=await Ys(f);A.classList.toggle("hidden",!h.length),A.innerHTML=h.map(y=>`
          <button type="button" data-grant="${y.profile_id}" data-name="${p(y.full_name)}" class="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs hover:bg-gray-50 text-left">
            <span class="font-semibold text-gray-700">${p(y.full_name)} <span class="font-normal text-gray-400">(${p(y.teacher_code||"-")})</span></span>
            <span class="text-indigo-600 font-bold">+ มอบสิทธิ์</span>
          </button>`).join("")}catch{}},300)}),A==null||A.addEventListener("click",async f=>{const h=f.target.closest("[data-grant]");if(h)try{await Ks(h.dataset.grant),W.value="",A.classList.add("hidden"),A.innerHTML="",await v(),U(`มอบสิทธิ์ให้ ${h.dataset.name} แล้ว ✅`,"success")}catch(y){U("มอบสิทธิ์ไม่สำเร็จ: "+ce(y),"error")}}),v()}const yo=Object.freeze(Object.defineProperty({__proto__:null,_openRandomPickerModal:bs,openClassPromptGenModal:Wn,renderAnnouncementsView:eo,renderAttendance:bn,renderAttendanceGrid:wt,renderClassDetail:kt,renderCourseDocLangConfig:Zn,renderGrades:xn,renderGradesGrid:ht,renderLifeSkillScore:fn,renderMyClasses:Ee,renderPrayerScore:yn,renderReadingScore:vn,renderRequests:gn,renderSchedule:Yn,renderScheduleBuilder:Jn,renderScheduleGrid:Pe,renderStudentQRPrint:to},Symbol.toStringTag,{value:"Module"}));export{bs as _,Zn as a,En as b,Ln as c,kt as d,eo as e,Ee as f,Yn as g,Jn as h,Wn as i,Pn as o,Pe as r,yo as t};
