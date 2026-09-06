const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-dashboard-MihUIb1e.js","assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/sports-portals.js_v_10.22-BrIjazIR.js","assets/ui-Dh03k4iX.js","assets/impersonation-C66q0Y-O.js","assets/storage-D6nkcVz6.js","assets/browser-JP79f-a9.js","assets/teacher-views-smart-classroom-BNyIlVzh.js","assets/teacher-SRnLzIgv.js","assets/promptpay-CIuxvxIA.js","assets/theme-DIdoXkqD.js","assets/anti-pull-refresh-BGrI1pMY.js","assets/push-notify-qsIWmalF.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/wen-sso-CcN06Rhh.js","assets/azfutsal-modal-wts4xj80.js","assets/tutorial-FuIPnEx0.js","assets/terangganu-api-C1IjZK4l.js","assets/regrade-api-C8s-TuM0.js","assets/quiz-api-DaBneRGn.js","assets/score-qr-scanner-SDrghEsT.js","assets/teacher-views-attendance-C31WiJPz.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-quiz-monitor-BIcUtV1X.js","assets/teacher-views-quiz-analytics-CZtaCsWK.js","assets/teacher-views-grades-DyBe1K7u.js","assets/lesson-plan-ai-workspace-Be7c01S6.js","assets/pp5-doc-CVTwqJKw.js","assets/confetti-loader-BAN5Lv-C.js","assets/chat-classroom-BIeRyAHR.js","assets/student-api-q3ZleCC5.js","assets/teacher-views-flashcards-C2yTyS1-.js"])))=>i.map(i=>d[i]);
import{a as Q,_ as me,f as Ze}from"./ui-Dh03k4iX.js";import{getDepartments as bs,getSystemConfig as ve,getReligionRoomsByGrade as fs,getRoomsByGrade as ys,getStudentsByReligionRoom as vs,getStudentsByRoom as hs,getMySchedule as Re,createClass as ws,linkClassToSchedule as We,enrollStudents as _s,getLifeSkillColumns as $s,getScoreColumns as Gt,createScoreColumn as ks,getClassStudents as Ie,getTeacherClassesForLinking as ot,updateClass as Ye,getMyClasses as dt,getClassrooms as zt,getClassScheduleLinks as ct,getPeriods as et,getMyDonationRequests as Ss,getFlashcardDecks as Es,deleteClass as Vt,getCourseDocLangSettings as Ls,getTeacherRoomColors as pt,assignClassroom as Qt,getClassSessionDOWs as qs,getMySubjects as Ut,deleteScheduleByTeacher as Cs,getClassRosterStudents as js,updateClassStudentSpecialResult as Is,autoEnrollStudentsByRoom as Ms,updateClassStudentActive as Ts,removeStudentFromClass as As,getStudentByCode as Bs,addStudentToClass as Rs,getClassRandomizerState as Ps,getClassScoreSummary as Ns,saveCourseDocLangSettings as Hs,saveCourseDocLangEditors as Ds,getUniqueRooms as Wt,getUniqueReligionRooms as Yt,getStudents as Os,getQrReissueRequests as Kt,logQrReissue as Fs,saveTeacherRoomColor as Jt,upsertScheduleEntry as Xt,updateSystemConfig as Fe,revokeQrReissueManager as Gs,findTeacherForQrManagerGrant as zs,grantQrReissueManager as Vs,unlinkClassFromSchedule as Qs,deleteQrReissueLog as Us,updateQrReissueLog as Ws,getQrReissueLogs as Ys,markQrReissueRequestPrinted as _t,setQrReissueRequestStatus as Ks,deleteQrReissueRequest as Js,getQrReissueManagers as Xs,saveClassRandomizerState as $t,resetClassRandomizerPicks as kt,clearClassGroups as Zs,getAttendanceByDate as en,saveClassGroups as tn,deleteScheduleEntry as sn}from"./api-1xsyVspL.js";import{b as Qe}from"./browser-JP79f-a9.js";import{l as at,m as nn}from"./sports-portals.js_v_10.22-BrIjazIR.js";import{s as Zt}from"./supabase-BV-W2lsh.js";import{a as es}from"./pp5-doc-CVTwqJKw.js";import{o as on,v as St}from"./storage-D6nkcVz6.js";import{b as ut,r as an,a as rn,c as ln}from"./teacher-views-grades-DyBe1K7u.js";import{renderAttendanceGrid as mt,renderAttendance as dn,renderLifeSkillScore as cn,renderPrayerScore as pn,renderReadingScore as un}from"./teacher-views-attendance-C31WiJPz.js";import{l as mn,f as xn}from"./confetti-loader-BAN5Lv-C.js";import{setActiveNav as $e,setTitle as ke,setContent as be,_htmlEsc as m,getMainContentRef as gn,setMainContentRef as Et,_nextPeriodMins as Pe,_transparentEdgeDarkLogo as bn,INPUT_CLS as we,_generateSessions as fn,_resolveGeminiKey as ts,SELECT_CLS as rt,_dateInputValue as Lt,_parseDateOnly as yn}from"./teacher-views-utils-B2Iz3UWp.js";const Ae="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400",je="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm";function ss(e){document.getElementById("main-content").innerHTML=e}function ns(e){document.getElementById("page-title").textContent=e}function os(e){document.querySelectorAll("[data-nav]").forEach(a=>{const l=a.dataset.nav===e;a.classList.toggle("bg-emerald-800",l),a.classList.toggle("text-white",l),a.classList.toggle("text-emerald-200",!l)})}function lt(e){if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const a=String(e).match(/^(\d{4})-(\d{2})-(\d{2})/);if(a)return new Date(Number(a[1]),Number(a[2])-1,Number(a[3]));const l=new Date(e);return Number.isNaN(l.getTime())?null:new Date(l.getFullYear(),l.getMonth(),l.getDate())}function Ke(e){const a=lt(e);return a?[a.getFullYear(),String(a.getMonth()+1).padStart(2,"0"),String(a.getDate()).padStart(2,"0")].join("-"):""}function as(e,a){const l=lt(a)??lt(new Date),p=l.getDay(),C=[];for(const P of e){const $=P.span_periods??1;for(let G=0;G<$;G++)C.push({dow:P.day_of_week,pno:(P.period_no??0)+G})}if(C.sort((P,$)=>{const G=(P.dow-p+7)%7,L=($.dow-p+7)%7;return G!==L?G-L:P.pno-$.pno}),!C.length)return[];const _=[];let T=0;for(;_.length<6;){for(const P of C){const $=new Date(l);if($.setDate($.getDate()+(P.dow-p+7)%7+T*7),_.push($),_.length>=6)break}T++}return _.slice(0,6)}const rs={ACDM:["วิชาการ","ภาษา","ชีวิต"],AGM:["ศาสนามัธยม"],ACDMVOC:["วิชาการ","ภาษา","สามัญปวช"],AGMVOC:["ศาสนาปวช"]};async function vn(e,a,l={}){var j;const p=l.cloneFrom??null;os(p?"my-classes":"my-courses"),ns(p?"ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา");const C=await bs().catch(()=>[]),_=await ve().catch(()=>({})),T=_.semester_start??_.term_start_date??Ke(new Date),P=rs[a.subject_group]??[],$=P.length===1,G=C.find(E=>E.dept_code===a.dept),L=a.grade_level,J=/^(PR|อก|อป)/i.test(L??""),u=parseInt(_.academicYear),A=parseInt(_.semester),K=p?new Set((window._classesFlat??[]).filter(E=>E.course_id===a.id&&+E.academic_year===u&&+E.semester===A).map(E=>E.class_name)):new Set,V=L?J?await fs(L).catch(()=>[]):await ys(L).catch(()=>[]):[],oe=p?V.filter(E=>!K.has(E)):V,F=p?l.srcSkill??"":"";ss(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${p?"📋 ทำสำเนาห้องเรียน":"ลงทะเบียนรายวิชา"}</h2>
    </div>
    <!-- คอร์สที่เลือก -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">📖</div>
      <div>
        <p class="font-semibold text-emerald-900">${a.subject_name}</p>
        <p class="text-xs text-emerald-600 font-mono">${a.subject_code??"—"} · ${a.credit??"—"} หน่วยกิต · ${a.grade_level??"—"}</p>
      </div>
    </div>
    ${p?`<div class="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3 mb-5 text-xs text-violet-700">
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
            class="${je}" />
          <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
        </div>
        <!-- กลุ่มทักษะ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ <span class="text-red-400">*</span></label>
          ${$?`<input type="text" value="${P[0]}" class="${je} bg-gray-50" readonly />
               <input type="hidden" id="cls-skill" value="${P[0]}" />`:`<select id="cls-skill" class="${Ae}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${P.map(E=>`<option value="${E}" ${E===F?"selected":""}>${E}</option>`).join("")}
               </select>`}
        </div>
        <!-- ชั้นเรียน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ชั้นเรียน <span class="text-red-400">*</span></label>
          ${oe.length?`<select id="cls-room" class="${Ae}">
                <option value="">— เลือกห้องเรียน —</option>
                ${oe.map(E=>`<option value="${E}">${E}</option>`).join("")}
               </select>`:`<input id="cls-room" type="text" placeholder="พิมพ์ชื่อห้อง เช่น PR 1/7 Ikhlas" class="${je}" autocomplete="off" />
               <p class="text-xs text-amber-500 mt-1">⚠️ ไม่พบห้อง ${L} — พิมพ์ชื่อห้องตรงๆ หรืออัปโหลดนักเรียนพร้อม column <b>religion_room</b></p>`}
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
          <select id="cls-head" class="${Ae}">
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
            ${[1,2,3,4,5,6].map(E=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${E}</p>
              <input id="cls-day${E}" type="date" value="${T}" class="${je} text-xs" />
            </div>`).join("")}
          </div>
        </div>
        <!-- ข้อมูล auto (แสดง readonly) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">ข้อมูลที่ซิงค์ไปยัง Google Sheet</p>
          <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div><span class="text-gray-400">รหัสวิชา:</span> ${a.subject_code??"—"}</div>
            <div><span class="text-gray-400">หน่วยกิต:</span> ${a.credit??"—"}</div>
            <div><span class="text-gray-400">ชั้นปี:</span> ${a.grade_level??"—"}</div>
            <div><span class="text-gray-400">กลุ่มสาระ:</span> ${(G==null?void 0:G.dept_name)??a.dept??"—"}</div>
            <div class="col-span-2"><span class="text-gray-400">หัวหน้าหมวด:</span> ${(G==null?void 0:G.head_name)??"—"}</div>
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
  </div>`);let U=[];document.getElementById("cls-room").addEventListener("change",async E=>{const v=E.target.value;if(!v){document.getElementById("cls-students-section").classList.add("hidden"),document.getElementById("cls-head-section").classList.add("hidden");return}try{U=J?await vs(v):await hs(v),document.getElementById("cls-student-count").textContent=`(${U.length} คน)`,document.getElementById("cls-students-list").innerHTML=U.length?`<table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500">
              <tr>
                <th class="px-3 py-2 text-left">รหัส</th>
                <th class="px-3 py-2 text-left">ชื่อ-สกุล</th>
                <th class="px-3 py-2 text-center">ศาสนา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${U.map(s=>`
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
          </table>`:'<p class="text-center py-4 text-gray-400 text-sm">ไม่พบนักเรียนในห้องนี้</p>';const Y=document.getElementById("cls-head");Y.innerHTML='<option value="">— เลือกหัวหน้าห้อง —</option>'+U.map(s=>`<option value="${s.id}" data-code="${s.student_code}" data-room="${s.main_room??""}" data-img="${s.image_url??""}">${s.full_name} (${s.student_code})</option>`).join(""),document.getElementById("cls-students-section").classList.remove("hidden"),document.getElementById("cls-head-section").classList.remove("hidden");const I=()=>{const s=Y.options[Y.selectedIndex],o=document.getElementById("cls-head-card");if(!s||!s.value){o==null||o.classList.add("hidden");return}const t=s.text.split(" (")[0],r=s.dataset.code??"",x=s.dataset.room??"",S=s.dataset.img??"";document.getElementById("cls-head-name").textContent=t,document.getElementById("cls-head-code").textContent=`รหัส: ${r}`,document.getElementById("cls-head-room").textContent=x?`ห้อง: ${x}`:"";const B=document.getElementById("cls-head-avatar");B.innerHTML=S?`<img src="${S}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${t.charAt(0)}</div>`,o==null||o.classList.remove("hidden")};Y.addEventListener("change",I)}catch{Q("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}});let le=[];(j=document.getElementById("btn-auto-dates"))==null||j.addEventListener("click",async()=>{var Y;const E=document.getElementById("btn-auto-dates"),v=document.getElementById("auto-dates-info");E.textContent="⏳ กำลังดึงตาราง...",E.disabled=!0;try{const I=parseInt(_.academicYear??2568),s=parseInt(_.semester??1),o=e?await Re(e.id,I,s).catch(()=>[]):[];if(!o.length){v.innerHTML='⚠️ ยังไม่มีตารางสอน — <a href="#" id="goto-schedule" class="underline text-indigo-600 font-medium">สร้างตารางสอน</a> หรือกรอกวันเองด้านล่าง',v.classList.remove("hidden"),(Y=document.getElementById("goto-schedule"))==null||Y.addEventListener("click",B=>{var f;B.preventDefault(),(f=window._navTo)==null||f.call(window,"schedule")}),E.disabled=!1,E.textContent="🗓️ คำนวณจากตารางสอน";return}const t={};o.forEach(B=>{var w,h;const f=`${B.subject_name??((w=B.master_subjects)==null?void 0:w.subject_name)??"?"}|${B.class_name??""}`;t[f]||(t[f]={label:`${B.subject_name??((h=B.master_subjects)==null?void 0:h.subject_name)??"?"}${B.class_name?` — ${B.class_name}`:""}`,entries:[]}),t[f].entries.push(B)});const r=["อา","จ","อ","พ","พฤ","ศ"],x=B=>{const f=[];B.forEach(h=>{for(let W=0;W<(h.span_periods??1);W++)f.push({dow:h.day_of_week,pno:(h.period_no??0)+W})}),f.sort((h,W)=>h.dow!==W.dow?h.dow-W.dow:h.pno-W.pno);const w={};return f.forEach(h=>{w[h.dow]||(w[h.dow]=[]),w[h.dow].push(h.pno)}),Object.entries(w).map(([h,W])=>`${r[h]} คาบ ${W.join(",")}`).join(" · ")},S=document.createElement("div");S.id="dates-popup",S.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",S.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(t).map(([B,f])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="dates-subj" value="${B}" class="mt-0.5 text-indigo-600 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${f.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${x(f.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(S),S.querySelector("#dates-close").addEventListener("click",()=>S.remove()),S.querySelector("#dates-cancel").addEventListener("click",()=>S.remove()),S.querySelector("#dates-calc").addEventListener("click",()=>{var h;const B=(h=S.querySelector('input[name="dates-subj"]:checked'))==null?void 0:h.value;if(!B){alert("กรุณาเลือกวิชาก่อน");return}S.remove();const f=t[B].entries;le=f,as(f,T).forEach((W,H)=>{const Z=document.getElementById(`cls-day${H+1}`);Z&&(Z.value=Ke(W))}),v.textContent=`✅ คำนวณจาก "${t[B].label}" — ${f.length} ช่องตาราง — ตรวจสอบแล้วแก้ไขได้`,v.classList.remove("hidden")})}catch(I){v.textContent="โหลดตารางไม่สำเร็จ: "+(I.message??""),v.classList.remove("hidden")}finally{E.textContent="🗓️ คำนวณจากตารางสอน",E.disabled=!1}}),document.getElementById("class-form").addEventListener("submit",async E=>{E.preventDefault();const v=document.getElementById("cls-submit"),Y=document.getElementById("cls-sheet-id").value.trim(),I=document.getElementById("cls-skill").value,s=document.getElementById("cls-room").value,o=document.getElementById("cls-head").value;if(!s){Q("กรุณาเลือกชั้นเรียน","warning");return}v.disabled=!0,v.textContent="กำลังบันทึก...";try{const t={course_id:a.id,class_name:s,skill_group:I||null,google_sheet_id:Y||null,head_student_id:o?Number(o):null,day1_date:document.getElementById("cls-day1").value||null,day2_date:document.getElementById("cls-day2").value||null,day3_date:document.getElementById("cls-day3").value||null,day4_date:document.getElementById("cls-day4").value||null,day5_date:document.getElementById("cls-day5").value||null,day6_date:document.getElementById("cls-day6").value||null},r=await ws(t,(e==null?void 0:e.id)??null);r!=null&&r.id&&le.length&&await Promise.all(le.map(W=>We(r.id,W.id).catch(()=>{}))),U.length&&(r!=null&&r.id)&&await _s(r.id,U.map(W=>W.id));const x=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),S=(l.srcSkill??"")==="ชีวิต",B=["AGM","AGMVOC"].includes(a.subject_group??"");let f=new Set;if(S){const W=await ve().catch(()=>({})),H=await $s(parseInt(W.academicYear??2568),parseInt(W.semester??1),"สามัญ").catch(()=>[]);f=new Set(H.slice(0,3).map(Z=>Z.name))}let w=0;if(p&&(r!=null&&r.id)){const W=await Gt(p).catch(()=>[]),H=new Set;for(const Z of W)B&&x.has(Z.assignment_name)||S&&f.has(Z.assignment_name)||H.has(Z.assignment_name)||(H.add(Z.assignment_name),await ks({class_id:r.id,assignment_name:Z.assignment_name,assignment_type:Z.assignment_type,sheet_column:Z.sheet_column,max_score:Z.max_score}),w++)}const h=p?`ทำสำเนา "${s}" สำเร็จ — นักเรียน ${U.length} คน · ช่องคะแนน ${w} ช่อง`:`เปิดรายวิชา ${s} สำเร็จ! นักเรียน ${U.length} คน`;Q(h,"success"),window._goBack()}catch(t){Q("บันทึกไม่สำเร็จ: "+(t.message??""),"error")}finally{v.disabled=!1,v.textContent="บันทึกและเปิดรายวิชา"}})}async function hn(e,a){var $,G;os("my-classes"),ns("แก้ไขห้องเรียน");const l=a.master_subjects,p=rs[l==null?void 0:l.subject_group]??[],C=p.length===1,_=await Ie(a.id).catch(()=>[]);ss(`<div class="max-w-2xl mx-auto animate-fade">
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
      <p class="text-sm text-emerald-700 mt-0.5">ห้อง: <strong>${a.class_name}</strong></p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="cls-edit-form" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Google Sheet ID</label>
          <input id="ce-sheet" type="text" value="${a.google_sheet_id??""}"
            placeholder="วาง ID จาก URL ของ Google Sheet" class="${je}" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ</label>
          ${C?`<input type="text" value="${p[0]}" class="${je} bg-gray-50" readonly />
               <input type="hidden" id="ce-skill" value="${p[0]}" />`:`<select id="ce-skill" class="${Ae}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${p.map(L=>`<option value="${L}" ${L===a.skill_group?"selected":""}>${L}</option>`).join("")}
               </select>`}
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง</label>
          <select id="ce-head" class="${Ae}">
            <option value="">— ยังไม่ระบุหัวหน้าห้อง —</option>
            ${_.map(L=>`
              <option value="${L.id}" ${Number(a.head_student_id)===Number(L.id)?"selected":""}>
                ${L.full_name} (${L.student_code})
              </option>`).join("")}
          </select>
          ${_.length?'<p class="text-xs text-gray-400 mt-1">เลือกได้จากนักเรียนที่อยู่ในห้องนี้</p>':'<p class="text-xs text-amber-500 mt-1">ยังไม่พบนักเรียนในห้องนี้ จึงยังเลือกหัวหน้าห้องไม่ได้</p>'}
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
            ${[1,2,3,4,5,6].map(L=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${L}</p>
              <input id="ce-day${L}" type="date"
                value="${a[`day${L}_date`]??""}" class="${je} text-xs" />
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
          <select id="ce-source-class" class="${Ae}">
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
  </div>`),e!=null&&e.id&&ot(e.id,a.id).then(L=>{const J=document.getElementById("ce-source-class");if(J&&(L.forEach(u=>{const A=u.master_subjects,K=`${(A==null?void 0:A.subject_name)??"?"} (${(A==null?void 0:A.subject_code)??""}) — ${u.class_name} · ${(A==null?void 0:A.credit)??"?"} หน่วยกิต`,V=new Option(K,u.id,!1,Number(u.id)===Number(a.source_class_id));J.appendChild(V)}),a.source_class_id)){const u=L.find(A=>Number(A.id)===Number(a.source_class_id));u&&T(u)}}).catch(()=>{});const T=L=>{var K,V;const J=document.getElementById("ce-source-info");if(!J||!L)return;const u=((K=L.master_subjects)==null?void 0:K.credit)??1,A=((V=a.master_subjects)==null?void 0:V.credit)??1;u!==A?(J.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${u} / วิชานี้ ${A}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,J.classList.remove("hidden")):J.classList.add("hidden")};($=document.getElementById("ce-source-class"))==null||$.addEventListener("change",L=>{var A;const u=L.target.selectedOptions[0];if(!(u!=null&&u.value)){(A=document.getElementById("ce-source-info"))==null||A.classList.add("hidden");return}ot(e==null?void 0:e.id,a.id).then(K=>{const V=K.find(oe=>Number(oe.id)===Number(u.value));V&&T(V)}).catch(()=>{})});let P=[];(G=document.getElementById("ce-btn-auto-dates"))==null||G.addEventListener("click",async()=>{const L=document.getElementById("ce-btn-auto-dates"),J=document.getElementById("ce-auto-dates-info");L.textContent="⏳ กำลังดึงตาราง...",L.disabled=!0;try{const u=await ve().catch(()=>({})),A=u.semester_start??u.term_start_date??Ke(new Date),K=parseInt(u.academicYear??2568),V=parseInt(u.semester??1),oe=e?await Re(e.id,K,V).catch(()=>[]):[];if(!oe.length){J.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",J.classList.remove("hidden");return}const F={};oe.forEach(E=>{const v=`${E.subject_name??"?"}|${E.class_name??""}`;F[v]||(F[v]={label:`${E.subject_name??"?"}${E.class_name?` — ${E.class_name}`:""}`,entries:[]}),F[v].entries.push(E)});const U=["อา","จ","อ","พ","พฤ","ศ"],le=E=>{const v=[];E.forEach(I=>{for(let s=0;s<(I.span_periods??1);s++)v.push({dow:I.day_of_week,pno:(I.period_no??0)+s})}),v.sort((I,s)=>I.dow!==s.dow?I.dow-s.dow:I.pno-s.pno);const Y={};return v.forEach(I=>{Y[I.dow]||(Y[I.dow]=[]),Y[I.dow].push(I.pno)}),Object.entries(Y).map(([I,s])=>`${U[I]} คาบ ${s.join(",")}`).join(" · ")},j=document.createElement("div");j.id="ce-dates-popup",j.className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",j.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="ce-dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(F).map(([E,v])=>`
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="ce-dates-subj" value="${E}" class="mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${v.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${le(v.entries)}</p>
              </div>
            </label>`).join("")}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="ce-dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="ce-dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`,document.body.appendChild(j),j.querySelector("#ce-dates-close").addEventListener("click",()=>j.remove()),j.querySelector("#ce-dates-cancel").addEventListener("click",()=>j.remove()),j.querySelector("#ce-dates-calc").addEventListener("click",()=>{var Y;const E=(Y=j.querySelector('input[name="ce-dates-subj"]:checked'))==null?void 0:Y.value;if(!E){Q("กรุณาเลือกวิชาก่อน","warning");return}j.remove(),P=F[E].entries,as(F[E].entries,A).forEach((I,s)=>{const o=document.getElementById(`ce-day${s+1}`);o&&(o.value=Ke(I))}),J.textContent=`✅ คำนวณจาก "${F[E].label}" — ตรวจสอบและแก้ไขได้`,J.classList.remove("hidden")})}catch(u){J.textContent="โหลดตารางไม่สำเร็จ: "+(u.message??""),J.classList.remove("hidden")}finally{L.textContent="🗓️ คำนวณจากตารางสอน",L.disabled=!1}}),document.getElementById("cls-edit-form").addEventListener("submit",async L=>{var u;L.preventDefault();const J=document.getElementById("ce-submit");J.disabled=!0,J.textContent="กำลังบันทึก...";try{const A=(u=document.getElementById("ce-source-class"))==null?void 0:u.value;await Ye(a.id,{google_sheet_id:document.getElementById("ce-sheet").value.trim()||null,skill_group:document.getElementById("ce-skill").value||null,head_student_id:document.getElementById("ce-head").value?Number(document.getElementById("ce-head").value):null,day1_date:document.getElementById("ce-day1").value||null,day2_date:document.getElementById("ce-day2").value||null,day3_date:document.getElementById("ce-day3").value||null,day4_date:document.getElementById("ce-day4").value||null,day5_date:document.getElementById("ce-day5").value||null,day6_date:document.getElementById("ce-day6").value||null,source_class_id:A?Number(A):null}),P.length&&(await Promise.all(P.map(K=>We(a.id,K.id).catch(()=>{}))),P=[]),Q("บันทึกสำเร็จ","success"),window._navTo?window._navTo("my-classes"):history.back()}catch(A){Q("บันทึกไม่สำเร็จ: "+(A.message??""),"error")}finally{J.disabled=!1,J.textContent="บันทึกการแก้ไข"}})}const He=[{cls:"bg-emerald-100 text-emerald-900 font-semibold",hex:"#d1fae5",soft:"#ecfdf5",border:"#6ee7b7",dot:"#6ee7b7"},{cls:"bg-indigo-100 text-indigo-900 font-semibold",hex:"#e0e7ff",soft:"#eef2ff",border:"#a5b4fc",dot:"#a5b4fc"},{cls:"bg-amber-100 text-amber-900 font-semibold",hex:"#fef3c7",soft:"#fffbeb",border:"#fcd34d",dot:"#fcd34d"},{cls:"bg-rose-100 text-rose-900 font-semibold",hex:"#ffe4e6",soft:"#fff1f2",border:"#fda4af",dot:"#fda4af"},{cls:"bg-cyan-100 text-cyan-900 font-semibold",hex:"#cffafe",soft:"#ecfeff",border:"#67e8f9",dot:"#67e8f9"},{cls:"bg-violet-100 text-violet-900 font-semibold",hex:"#ede9fe",soft:"#f5f3ff",border:"#c4b5fd",dot:"#c4b5fd"},{cls:"bg-lime-100 text-lime-900 font-semibold",hex:"#ecfccb",soft:"#f7fee7",border:"#bef264",dot:"#bef264"},{cls:"bg-orange-100 text-orange-900 font-semibold",hex:"#ffedd5",soft:"#fff7ed",border:"#fdba74",dot:"#fdba74"},{cls:"bg-pink-100 text-pink-900 font-semibold",hex:"#fce7f3",soft:"#fdf2f8",border:"#f9a8d4",dot:"#f9a8d4"},{cls:"bg-teal-100 text-teal-900 font-semibold",hex:"#ccfbf1",soft:"#f0fdfa",border:"#5eead4",dot:"#5eead4"},{cls:"bg-sky-100 text-sky-900 font-semibold",hex:"#e0f2fe",soft:"#f0f9ff",border:"#7dd3fc",dot:"#7dd3fc"},{cls:"bg-fuchsia-100 text-fuchsia-900 font-semibold",hex:"#fae8ff",soft:"#fdf4ff",border:"#f0abfc",dot:"#f0abfc"}],Ue=e=>String(e??"").trim().toLowerCase(),ls=/^#[0-9a-f]{6}$/i;function wn(e){let a=2166136261;for(let l=0;l<e.length;l+=1)a^=e.charCodeAt(l),a=Math.imul(a,16777619);return a>>>0}function _n({teacherId:e="",className:a="",subjectName:l="",fallbackId:p=""}={}){return`${Ue(e)}|${tt({className:a,subjectName:l,fallbackId:p})}`}function tt({className:e="",subjectName:a="",fallbackId:l=""}={}){const p=Ue(e),C=Ue(a),_=Ue(l);return p||C||_||"default"}function qt(e){const a=ls.test(e)?e.slice(1):"e0e7ff";return{r:parseInt(a.slice(0,2),16),g:parseInt(a.slice(2,4),16),b:parseInt(a.slice(4,6),16)}}function $n({r:e,g:a,b:l}){return`#${[e,a,l].map(p=>Math.max(0,Math.min(255,Math.round(p))).toString(16).padStart(2,"0")).join("")}`}function st(e,a,l=.5){const p=qt(e),C=qt(a);return $n({r:p.r*(1-l)+C.r*l,g:p.g*(1-l)+C.g*l,b:p.b*(1-l)+C.b*l})}function De(e){const a=ls.test(String(e??""))?String(e).toLowerCase():"#6366f1";return{cls:"",hex:a,soft:st(a,"#ffffff",.86),border:st(a,"#ffffff",.45),dot:a,text:st(a,"#000000",.28)}}function kn(e={}){const a=_n(e),l=wn(a)%He.length;return{...De(He[l].dot),cls:He[l].cls,idx:l,key:a}}function Be(e={},a={}){const l=tt(e),p=a instanceof Map?a.get(l):a[l];return p?De(p):kn(e)}const Ct="pp5_free_timer_count",jt="pp5_timer_effect_style",Je="pp5_timer_sound",It="pp5_timer_break_step",Mt="pp5_timer_ambient",Tt="pp5_timer_font_scale",At="pp5_timer_show_ambient_countdown",Ge="pp5_timer_last_countdown_sec",Bt="pp5_timer_last_break_sec",Sn="alarm-bell.mp3",xt=[{key:"forest-wind",label:"🌲 ลมป่า",file:"forest-wind.mp3"},{key:"calm-ocean-breeze",label:"🌊 สายลมทะเล",file:"calm-ocean-breeze.mp3"},{key:"path-to-jannah",label:"🕌 Path to Jannah",file:"path-to-jannah.mp3"},{key:"waterfall-nature",label:"💦 น้ำตกธรรมชาติ",file:"waterfall-nature.mp3"},{key:"calm",label:"🧘 สงบ",file:"calm.mp3"},{key:"meditation-01",label:"🎐 สมาธิ 01",file:"meditation-01.mp3"},{key:"meditation-02",label:"🎐 สมาธิ 02",file:"meditation-02.mp3"},{key:"nature-piano",label:"🎹 เปียโนธรรมชาติ",file:"nature-piano.mp3"},{key:"solo-piano",label:"🎹 เปียโนเดี่ยว",file:"solo-piano.mp3"},{key:"rain",label:"🌧️ เสียงฝน",file:"rain.mp3"}];function gt(e){return`/pp5online/sounds/${e}`}function is(){var a;const e=parseInt((a=window._pp5SystemCfg)==null?void 0:a.freeTimerLimit,10);return Number.isFinite(e)?e:1}function ze(e,a,l){l=Math.max(0,Math.min(1,l));const p=[1,3,5].map(T=>parseInt(e.slice(T,T+2),16)),C=[1,3,5].map(T=>parseInt(a.slice(T,T+2),16));return`rgb(${p.map((T,P)=>Math.round(T+(C[P]-T)*l)).join(",")})`}function nt(e){const a=Math.max(0,Math.round(e)),l=Math.floor(a/3600),p=Math.floor(a%3600/60),C=a%60;return l>0?`${String(l).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(C).padStart(2,"0")}`:`${String(p).padStart(2,"0")}:${String(C).padStart(2,"0")}`}let Se=null;function En(e,a,l="sine",p=.18){if(localStorage.getItem(Je)!=="off")try{Se=Se||new(window.AudioContext||window.webkitAudioContext),Se.state==="suspended"&&Se.resume();const C=Se.createOscillator(),_=Se.createGain();C.type=l,C.frequency.value=e,_.gain.value=p,C.connect(_),_.connect(Se.destination),C.start(),_.gain.exponentialRampToValueAtTime(1e-4,Se.currentTime+a/1e3),C.stop(Se.currentTime+a/1e3)}catch{}}const Ln=()=>En(880,120,"square",.12);let Ne=null;function qn(){if(localStorage.getItem(Je)!=="off")try{Ne=Ne||new Audio(gt(Sn)),Ne.currentTime=0,Ne.volume=.7,Ne.play().catch(()=>{})}catch{}}let Le=null,Te=null;function Ee(){if(Le)try{Le.pause()}catch{}Le=null,Te=null}function Cn(e){if(Te===e){Ee();return}Ee();const a=xt.find(l=>l.key===e);if(a)try{Le=new Audio(gt(a.file)),Le.volume=.5,Le.play().catch(()=>{}),Le.addEventListener("ended",()=>{Te===e&&(Te=null,Le=null)}),Te=e}catch{}}function jn(){const e=document.createElement("div");e.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="tm-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-700 text-lg">สิทธิ์จับเวลาทดลองใช้งานครบแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์จับเวลาเต็มจอจำกัดการทดลองใช้ฟรี ${is()} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
      <button id="tm-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(e),e.querySelector("#tm-paywall-close").addEventListener("click",()=>e.remove()),e.querySelector("#tm-upgrade").addEventListener("click",()=>{var a;e.remove(),(a=document.getElementById("btn-donate-float"))==null||a.click()})}function In(e,a,l){var F;(F=document.getElementById("timer-setup-modal"))==null||F.remove(),Ee();let p="countdown",C=localStorage.getItem(jt)||"shake",_=localStorage.getItem(Je)!=="off",T=localStorage.getItem(It)||"60",P=localStorage.getItem(Mt)||"none",$=localStorage.getItem(At)==="on";const G=U=>{const le=parseInt(localStorage.getItem(U),10);return Number.isFinite(le)&&le>0?le:300};let L=Math.floor(G(Ge)/60),J=G(Ge)%60;const u=document.createElement("div");u.id="timer-setup-modal",u.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",document.body.appendChild(u);const A=[1,3,5,10,15,20],K=[{key:"countdown",icon:"⏱️",label:"นับถอยหลัง",sub:"คุมเวลากิจกรรม",grad:"linear-gradient(135deg,#10b981,#0ea5e9);"},{key:"break",icon:"☕",label:"พักเบรค",sub:"มืด→สว่างเตือนหมดเวลา",grad:"linear-gradient(135deg,#334155,#64748b);"},{key:"stopwatch",icon:"⏳",label:"นับเวลา",sub:"นับขึ้นไม่จำกัด",grad:"linear-gradient(135deg,#6366f1,#a855f7);"}];function V(){return`
      <div>
        <p class="text-xs font-semibold text-gray-500 mb-1.5">🎵 เสียงประกอบ <span class="font-normal">(คลิกเพื่อฟังตัวอย่าง คลิกซ้ำเพื่อหยุด)</span></p>
        <div class="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
          <button data-ambient="none" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${P==="none"?"bg-gray-700 text-white":"bg-gray-100 text-gray-600"}">🔇 ไม่มีเสียง</button>
          ${xt.map(U=>`<button data-ambient="${U.key}" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${P===U.key?"bg-teal-600 text-white":"bg-gray-100 text-gray-600"}">${U.label}${Te===U.key?" ▶️":""}</button>`).join("")}
        </div>
      </div>`}function oe(){var j,E;u.innerHTML=`
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[94vh] flex flex-col">
        <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div class="min-w-0">
            <h3 class="text-white font-bold text-base">⏱️ จับเวลา</h3>
            <p class="text-white/80 text-xs mt-0.5 truncate">${a!=null&&a.class_name?a.class_name:""}</p>
          </div>
          <button id="tm-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
        </div>
        <div class="p-5 overflow-y-auto flex flex-col gap-4">

          <div class="grid grid-cols-3 gap-1.5">
            ${K.map(v=>`
              <button data-mode="${v.key}" class="tm-mode-btn py-2.5 px-1 rounded-2xl text-xs font-bold transition ${p===v.key?"text-white":"bg-gray-100 text-gray-500"}"
                style="${p===v.key?`background:${v.grad}`:""}">${v.icon}<br>${v.label}<br><span class="font-normal text-[10px] opacity-80">${v.sub}</span></button>
            `).join("")}
          </div>

          ${p!=="stopwatch"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">ระยะเวลา</p>
            <div class="flex flex-wrap gap-1.5">
              ${A.map(v=>`<button data-min="${v}" class="tm-preset-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition ${L===v&&J===0?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}">${v} นาที</button>`).join("")}
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <input id="tm-custom-min" type="number" min="0" max="180" value="${L}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">นาที</span>
              <input id="tm-custom-sec" type="number" min="0" max="59" value="${J}" class="w-16 px-2 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">วินาที</span>
            </div>
          </div>
          `:""}

          ${p==="countdown"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">เอฟเฟกต์ตอนใกล้หมดเวลา</p>
            <div class="flex gap-2">
              <button data-eff="shake" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${C==="shake"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">📳 สั่น</button>
              <button data-eff="scale" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${C==="scale"?"bg-rose-500 text-white":"bg-gray-100 text-gray-600"}">🔍 ขยาย</button>
            </div>
          </div>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-sound" type="checkbox" ${_?"checked":""} class="w-4 h-4 rounded" />
            🔊 เปิดเสียงตอนนับถอยหลัง/หมดเวลา (เสียงกริ่งนาฬิกาปลุก)
          </label>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-show-ambient" type="checkbox" ${$?"checked":""} class="w-4 h-4 rounded" />
            🎵 แสดงตัวเลือกเสียงประกอบในโหมดนับถอยหลังด้วย
          </label>
          ${$?V():""}
          `:""}

          ${p==="break"?`
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">หน่วยปรับเวลาระหว่างเบรค</p>
            <div class="flex gap-2">
              <button data-step="60" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${T==="60"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±1 นาที</button>
              <button data-step="30" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${T==="30"?"bg-slate-700 text-white":"bg-gray-100 text-gray-600"}">±30 วินาที</button>
            </div>
          </div>
          ${V()}
          `:""}

          <button id="tm-start" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]"
            style="background:linear-gradient(135deg,#0ea5e9,#6366f1);">▶️ เริ่มจับเวลา</button>
        </div>
      </div>`,u.querySelector("#tm-close").addEventListener("click",()=>{Ee(),u.remove()}),u.querySelectorAll(".tm-mode-btn").forEach(v=>v.addEventListener("click",()=>{if(p=v.dataset.mode,Ee(),p!=="stopwatch"){const Y=G(p==="break"?Bt:Ge);L=Math.floor(Y/60),J=Y%60}oe()})),u.querySelectorAll(".tm-preset-btn").forEach(v=>v.addEventListener("click",()=>{L=parseInt(v.dataset.min,10),J=0,oe()})),(j=u.querySelector("#tm-custom-min"))==null||j.addEventListener("change",v=>{const Y=parseInt(v.target.value,10);Number.isFinite(Y)&&Y>=0&&(L=Y)}),(E=u.querySelector("#tm-custom-sec"))==null||E.addEventListener("change",v=>{const Y=parseInt(v.target.value,10);Number.isFinite(Y)&&Y>=0&&(J=Math.min(59,Y))}),u.querySelectorAll(".tm-eff-btn").forEach(v=>v.addEventListener("click",()=>{C=v.dataset.eff,localStorage.setItem(jt,C),oe()})),u.querySelectorAll(".tm-step-btn").forEach(v=>v.addEventListener("click",()=>{T=v.dataset.step,localStorage.setItem(It,T),oe()})),u.querySelectorAll(".tm-ambient-btn").forEach(v=>v.addEventListener("click",()=>{P=v.dataset.ambient,localStorage.setItem(Mt,P),P==="none"?Ee():Cn(P),oe()}));const U=u.querySelector("#tm-sound");U&&U.addEventListener("change",v=>localStorage.setItem(Je,v.target.checked?"on":"off"));const le=u.querySelector("#tm-show-ambient");le&&le.addEventListener("change",v=>{$=v.target.checked,localStorage.setItem(At,$?"on":"off"),oe()}),u.querySelector("#tm-start").addEventListener("click",()=>{var o,t;const v=parseInt((o=u.querySelector("#tm-custom-min"))==null?void 0:o.value,10),Y=parseInt((t=u.querySelector("#tm-custom-sec"))==null?void 0:t.value,10);Number.isFinite(v)&&v>=0&&(L=v),Number.isFinite(Y)&&Y>=0&&(J=Math.min(59,Y));const I=L*60+J;if(p!=="stopwatch"&&I<=0){Q("กรุณาตั้งเวลาอย่างน้อย 1 วินาที","warning");return}if(!l){const r=parseInt(localStorage.getItem(Ct)||"0",10);if(r>=is()){jn();return}localStorage.setItem(Ct,String(r+1))}p!=="stopwatch"&&localStorage.setItem(p==="break"?Bt:Ge,String(I));const s=p==="break"||p==="countdown"&&$?P:"none";Ee(),u.remove(),Mn(p,p==="stopwatch"?0:I,{effectStyle:C,breakStepSec:parseInt(T,10),ambient:s})})}oe(),u.addEventListener("click",U=>{U.target===u&&(Ee(),u.remove())})}function Mn(e,a,{effectStyle:l,breakStepSec:p,ambient:C}){var j,E;(j=document.getElementById("timer-fullscreen-overlay"))==null||j.remove();let _=a,T=a,P=0,$=!1,G=!1,L=null,J=-1,u=parseFloat(localStorage.getItem(Tt))||1,A=null;if(C&&C!=="none"){const v=xt.find(Y=>Y.key===C);if(v)try{A=new Audio(gt(v.file)),A.loop=!0,A.volume=.45,A.play().catch(()=>{})}catch{}}const K=document.createElement("div");K.id="timer-fullscreen-overlay",K.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:background-color .6s linear;",K.innerHTML=`
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
      <input id="tm-size-slider" type="range" min="0.5" max="1.8" step="0.1" value="${u}" />
    </div>
    <div id="tm-digits" class="tm-digits" style="font-size:calc(min(28vw,220px) * ${u});line-height:1;">${nt(e==="stopwatch"?0:T)}</div>
    <div id="tm-sub" style="margin-top:12px;font-size:18px;opacity:.75;"></div>
    <div id="tm-mode-controls" style="display:none;margin-top:28px;gap:16px;align-items:center;"></div>
  `,document.body.appendChild(K);try{(E=K.requestFullscreen)==null||E.call(K)}catch{}const V=K.querySelector("#tm-digits"),oe=K.querySelector("#tm-sub");K.querySelector("#tm-size-slider").addEventListener("input",v=>{u=parseFloat(v.target.value),localStorage.setItem(Tt,String(u)),V.style.fontSize=`calc(min(28vw,220px) * ${u})`});function F(){var v;if(L&&cancelAnimationFrame(L),A)try{A.pause()}catch{}document.fullscreenElement&&((v=document.exitFullscreen)==null||v.call(document).catch(()=>{})),K.remove()}if(K.querySelector("#tm-exit").addEventListener("click",F),e==="break"){const v=K.querySelector("#tm-mode-controls");v.style.display="flex";const Y=p===30?"30 วิ":"1 นาที";v.innerHTML=`
      <button id="tm-minus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">− ${Y}</button>
      <button id="tm-plus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">+ ${Y}</button>
    `,v.querySelector("#tm-minus").addEventListener("click",()=>{T=Math.max(0,T-p)}),v.querySelector("#tm-plus").addEventListener("click",()=>{T+=p,_=Math.max(_,T)}),oe.textContent="พักเบรค — จอสว่างเต็มที่ = หมดเวลาพัก"}else if(e==="stopwatch"){const v=K.querySelector("#tm-mode-controls");v.style.display="flex",v.innerHTML=`
      <button id="tm-pause" style="background:rgba(0,0,0,.15);border:none;padding:12px 26px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">⏸️ หยุดชั่วคราว</button>
    `;const Y=v.querySelector("#tm-pause");Y.addEventListener("click",()=>{G=!G,Y.textContent=G?"▶️ เล่นต่อ":"⏸️ หยุดชั่วคราว"}),K.style.backgroundColor="#1e293b",V.style.color="#ffffff",oe.textContent="นับเวลา"}else oe.textContent="นับถอยหลัง";let U=performance.now();function le(v){const Y=(v-U)/1e3;if(U=v,e==="stopwatch"){G||(P+=Y,V.textContent=nt(P)),L=requestAnimationFrame(le);return}if(!$){T=Math.max(0,T-Y);const I=Math.ceil(T),s=_>0?T/_:0,o=1-s;if(V.textContent=nt(T),e==="break")K.style.backgroundColor=ze("#0f172a","#fef9c3",o),V.style.color=ze("#94a3b8","#1e293b",o),V.style.animation="";else{let t;if(s>.3?t=ze("#f59e0b","#10b981",(s-.3)/.7):s>.1?t=ze("#ef4444","#f59e0b",(s-.1)/.2):t="#ef4444",K.style.backgroundColor=t,V.style.color="#ffffff",s<=.3){const r=1-Math.min(1,s/.3),x=Math.max(.18,.9-r*.7);V.style.animation=`${l==="shake"?"tm-shake":"tm-scale"} ${x}s ease-in-out infinite`}else V.style.animation="";I!==J&&(J=I,I>0&&I<=3&&Ln())}T<=0&&($=!0,V.textContent="00:00",V.style.animation="",e==="break"?(K.style.backgroundColor="#fef9c3",V.style.color="#1e293b",oe.textContent="หมดเวลาพักเบรคแล้ว"):(oe.textContent="⏰ หมดเวลา!",qn(),mn().then(()=>xn("mid")).catch(()=>{})))}L=requestAnimationFrame(le)}L=requestAnimationFrame(le)}const Tn="pp5_exam_docs_pending_class_id";function ds(e){window._pendingExamDocClassId=String(e);try{sessionStorage.setItem(Tn,String(e))}catch{}if(typeof window._navTo=="function"){window._navTo("exam-docs");return}Q("ไม่พบเมนูเอกสารช่วงสอบ กรุณาเปิดจากหน้าเมนครู","warning")}async function cs(e,a){var p,C,_,T,P;const l=(p=window._classCache)==null?void 0:p[a];if(l){$e("my-classes"),ke("จัดการนักเรียน","class-students"),be(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-sky-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดรายชื่อนักเรียน...
  </div>`);try{const[$,G]=await Promise.all([js(a),ve().catch(()=>({}))]),L=`classRosterView_${a}`,J=localStorage.getItem(L)||"table",u=$.filter(o=>o.is_active).length,A=l.master_subjects??{},K=["AGM","AGMVOC"].includes(A.subject_group),V=A.subject_group==="ACDMVOC",oe=G.showStudentHouseColor!=="false",F=G.showStudentSportsShirtSize!=="false",U=["ข.ร.","ข.ส.","ม.ส.","ข.ป."],le=o=>`
      <select data-special-enrollment="${o.enrollment_id}" onclick="event.stopPropagation()"
        class="border border-gray-200 rounded-lg px-1.5 py-1 text-xs bg-white text-gray-600">
        <option value="" ${o.special_result?"":"selected"}>ปกติ</option>
        ${U.map(t=>`<option value="${t}" ${o.special_result===t?"selected":""}>${t}</option>`).join("")}
      </select>`,j=o=>K?o.main_room||o.religion_room||"—":o.religion_room||o.main_room||"—",E=o=>`
      ${oe?`<span class="inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">สี: ${m(o.house_color||"—")}</span>`:""}
      ${F?`<span class="inline-flex px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-medium">เสื้อ: ${m(o.sports_shirt_size||"—")}</span>`:""}`,v=(o,t="w-12 h-16")=>o.image_url?`<img src="${m(o.image_url)}" class="${t} rounded-2xl object-cover bg-gray-100 border border-gray-100 shadow-sm" loading="lazy" />`:`<div class="${t} rounded-2xl bg-sky-100 text-sky-700 border border-sky-100 shadow-sm flex items-center justify-center font-bold">${m((o.full_name||"?").trim().slice(0,1))}</div>`,Y=$.map((o,t)=>`
      <tr class="student-status-target cursor-pointer transition ${o.is_active?"bg-white hover:bg-emerald-50/40":"bg-gray-50 text-gray-400 hover:bg-gray-100"}"
        data-enrollment-id="${o.enrollment_id}" data-next="${o.is_active?"false":"true"}" data-name="${m(o.full_name)}">
        <td class="px-3 py-2 text-center text-xs text-gray-400">${t+1}</td>
        <td class="px-3 py-2">${v(o)}</td>
        <td class="px-3 py-2 font-mono text-sm">${m(o.student_code)}</td>
        <td class="px-3 py-2">
          <p class="font-semibold text-gray-800 ${o.is_active?"":"line-through text-gray-400"}">${m(o.full_name)}</p>
          <p class="text-xs text-gray-400">${m(j(o))}</p>
          <div class="mt-1 flex flex-wrap gap-1">${E(o)}</div>
        </td>
        ${oe?`<td class="px-3 py-2 text-center text-sm text-gray-600">${m(o.house_color||"—")}</td>`:""}
        ${F?`<td class="px-3 py-2 text-center text-sm text-gray-600">${m(o.sports_shirt_size||"—")}</td>`:""}
        ${V?`<td class="px-3 py-2 text-center">${le(o)}</td>`:""}
        <td class="px-3 py-2 text-center">
          <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold ${o.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${o.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </td>
      </tr>`).join(""),I=$.map(o=>`
      <button type="button"
        class="student-status-target text-left rounded-2xl border p-4 transition ${o.is_active?"border-emerald-300 bg-white shadow-[0_0_0_3px_rgba(16,185,129,0.12),0_8px_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.18),0_10px_24px_rgba(16,185,129,0.16)]":"border-gray-300 bg-gray-50 opacity-80 hover:opacity-100"}"
        data-enrollment-id="${o.enrollment_id}" data-next="${o.is_active?"false":"true"}" data-name="${m(o.full_name)}">
        <div class="flex items-start justify-between gap-3">
          ${v(o,"w-20 h-28")}
          <span class="px-2 py-1 rounded-full text-[11px] font-semibold ${o.is_active?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-500"}">
            ${o.is_active?"กำลังเรียน":"ไม่เรียน"}
          </span>
        </div>
        <p class="mt-3 font-bold text-gray-800 ${o.is_active?"":"line-through text-gray-400"}">${m(o.full_name)}</p>
        <p class="text-xs font-mono text-sky-700 mt-0.5">${m(o.student_code)}</p>
        <p class="text-xs text-gray-400 mt-0.5">${m(j(o))}</p>
        <div class="mt-2 flex flex-wrap gap-1">${E(o)}</div>
      </button>`).join("");be(`<div class="animate-fade">
      <div id="students-back-placeholder" class="hidden"></div>
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <div class="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-gray-700">ทั้งหมด ${$.length} คน · กำลังเรียน ${u} คน</p>
            <p class="text-xs text-gray-400 mt-0.5">ปิดสถานะเมื่อนักเรียนออกกลางคัน ระบบจะไม่ดึงไปเช็คชื่อ/ใบรายชื่อ</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${J==="table"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="table" title="มุมมองตาราง">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M10 6h4M10 18h4M3 6h4M3 18h4M17 6h4M17 18h4"/></svg>
              </button>
              <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${J==="grid"?"bg-white text-sky-700 shadow":"text-gray-400"}" data-view="grid" title="มุมมองกริด">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </button>
            </div>
            <button id="students-sync-enroll" class="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700" title="รีเฟรชรายชื่อนักเรียนในห้องนี้ตามข้อมูลล่าสุด">🔄 รีเฟรชรายชื่อ</button>
            <button id="students-add" class="px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700">＋ เพิ่มนักเรียน</button>
            <button id="students-roster" class="px-3 py-2 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700">🖨️ สร้างใบรายชื่อ</button>
            <button id="students-print-qr" class="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700">🖨️ พิมพ์ QR Code</button>
          </div>
        </div>
        ${$.length?J==="grid"?`
          <div class="p-4 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            ${I}
          </div>`:`
          <div class="overflow-auto">
            <table class="w-full text-sm">
              <thead class="bg-gray-50 text-gray-500">
                <tr>
                  <th class="px-3 py-2 text-center w-12">#</th>
                  <th class="px-3 py-2 text-left w-16">รูป</th>
                  <th class="px-3 py-2 text-left w-28">รหัส</th>
                  <th class="px-3 py-2 text-left">นักเรียน</th>
                  ${oe?'<th class="px-3 py-2 text-center w-24">ประจำสี</th>':""}
                  ${F?'<th class="px-3 py-2 text-center w-28">ไซด์เสื้อ</th>':""}
                  ${V?'<th class="px-3 py-2 text-center w-24">สถานะพิเศษ</th>':""}
                  <th class="px-3 py-2 text-center w-28">สถานะ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">${Y}</tbody>
            </table>
          </div>`:`
          <div class="p-12 text-center text-gray-400">
            <p class="text-4xl mb-3">👥</p>
            <p class="font-medium">ยังไม่มีนักเรียนในรายวิชานี้</p>
          </div>`}
      </div>
    </div>`);const s=()=>window._openStudentManager(a);document.querySelectorAll("[data-special-enrollment]").forEach(o=>{o.addEventListener("change",async()=>{try{await Is(o.dataset.specialEnrollment,o.value),Q("บันทึกสถานะพิเศษแล้ว","success")}catch(t){Q("บันทึกไม่สำเร็จ: "+(t.message??""),"error")}})}),(C=document.getElementById("students-roster"))==null||C.addEventListener("click",()=>window._openRosterPicker(a)),(_=document.getElementById("students-print-qr"))==null||_.addEventListener("click",()=>{window._pendingQRClassId=a,window._navTo("student-qr-print")}),(T=document.getElementById("students-sync-enroll"))==null||T.addEventListener("click",async o=>{var x;const t=o.currentTarget,r=t.textContent;t.disabled=!0,t.textContent="กำลังรีเฟรช...";try{await Ms(),Q("รีเฟรชรายชื่อสำเร็จ","success"),((x=window._loadClassTab)==null?void 0:x.call(window,"students"))??window._openStudentManager(a)}catch{Q("รีเฟรชไม่สำเร็จ","error"),t.disabled=!1,t.textContent=r}}),document.querySelectorAll(".student-view-toggle").forEach(o=>{o.addEventListener("click",()=>{localStorage.setItem(L,o.dataset.view),s()})}),document.querySelectorAll(".student-status-target").forEach(o=>{o.addEventListener("click",()=>{var S;const t=o.dataset.next==="true",r=o.dataset.name||"นักเรียน";(S=document.getElementById("student-status-confirm"))==null||S.remove();const x=document.createElement("div");x.id="student-status-confirm",x.className="fixed inset-0 z-[95] bg-white flex flex-col",t?x.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-emerald-100 text-emerald-700">
                ✓
              </div>
              <h3 class="text-2xl font-bold text-gray-800">เปิดสถานะกำลังเรียน?</h3>
              <p class="mt-3 text-gray-500">${m(r)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะกลับมาอยู่ในเช็คชื่อ/ใบรายชื่อของรายวิชานี้</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-700">ยืนยัน</button>
              </div>
            </div>
          </div>`:x.innerHTML=`<div class="flex-1 flex items-center justify-center p-6">
            <div class="w-full max-w-md text-center">
              <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-red-50 text-red-500 border border-red-100 shadow-sm">
                🗑️
              </div>
              <h3 class="text-2xl font-bold text-gray-900">ลบนักเรียนออกจากห้องเรียนนี้?</h3>
              <p class="mt-3 text-gray-800 font-semibold text-lg">${m(r)}</p>
              <p class="mt-2 text-sm text-gray-400">นักเรียนจะถูกลบออกจากรายวิชานี้ และระบบซิงก์หรือปุ่มรีเฟรชจะไม่เพิ่มกลับมาอีก<br/>หากต้องการนำกลับ สามารถใช้ปุ่ม “เพิ่มนักเรียน” ได้ภายหลัง</p>
              <div class="mt-8 grid grid-cols-2 gap-3">
                <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700">ยืนยันการลบ</button>
              </div>
            </div>
          </div>`,document.body.appendChild(x),x.querySelector("#student-status-cancel").addEventListener("click",()=>x.remove()),x.querySelector("#student-status-ok").addEventListener("click",async()=>{try{t?(await Ts(o.dataset.enrollmentId,!0),Q("เปิดสถานะกำลังเรียนแล้ว","success")):(await As(o.dataset.enrollmentId),Q("ลบนักเรียนออกจากห้องเรียนนี้แล้ว","success")),x.remove(),s()}catch(B){Q("ดำเนินการไม่สำเร็จ: "+(B.message??""),"error")}})})}),(P=document.getElementById("students-add"))==null||P.addEventListener("click",()=>{var W;(W=document.getElementById("add-student-modal"))==null||W.remove();const o=document.createElement("div");o.id="add-student-modal",o.className="fixed inset-0 z-[90] bg-white flex flex-col animate-fade",o.innerHTML=`
        <div class="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 class="text-xl font-bold text-gray-800">เพิ่มนักเรียนเข้ารายวิชา (หลายคน)</h3>
            <p class="text-xs text-gray-500 mt-1">${m(A.subject_name||"")} · ${m(l.class_name||"")}</p>
          </div>
          <button id="add-student-close" class="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-semibold hover:bg-sky-700 shadow transition">เสร็จสิ้น</button>
        </div>
        <div class="flex-1 overflow-auto p-5 max-w-2xl w-full mx-auto space-y-6">
          <div class="bg-gray-50 border border-gray-200 rounded-3xl p-6">
            <label class="block text-sm font-bold text-gray-700 mb-2">ยิงบาร์โค้ด หรือกรอกรหัสนักเรียนเพื่อเพิ่มทันที</label>
            <div class="flex gap-2">
              <input id="add-student-code" class="${we} text-lg font-mono flex-1 bg-white" placeholder="กรอกรหัสแล้วกด Enter" autocomplete="off" autofocus />
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
        </div>`,document.body.appendChild(o);const t=o.querySelector("#add-student-code"),r=o.querySelector("#add-student-search-btn"),x=o.querySelector("#add-student-status"),S=o.querySelector("#added-students-list"),B=o.querySelector("#added-count");let f=[];function w(){if(B.textContent=f.length,!f.length){S.innerHTML='<p class="text-xs text-gray-400 italic">ยังไม่มีการเพิ่มในรอบนี้</p>';return}S.innerHTML=f.map((H,Z)=>`
          <div class="flex items-center gap-3 p-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl animate-fade">
            <span class="text-xs font-bold text-emerald-600 bg-emerald-100 w-5 h-5 flex items-center justify-center rounded-full">${f.length-Z}</span>
            <div class="flex-1">
              <p class="text-sm font-bold text-gray-800">${m(H.full_name)}</p>
              <p class="text-xs font-mono text-gray-500">${m(H.student_code)} · ${m(j(H))}</p>
            </div>
            <span class="text-xs text-emerald-600 font-bold">✓ เพิ่มแล้ว</span>
          </div>
        `).join("")}const h=async()=>{const H=t.value.trim();if(H){x.innerHTML='<span class="text-gray-400">กำลังค้นหาและเพิ่ม...</span>',t.disabled=!0,r.disabled=!0;try{const Z=await Bs(H);if(!Z){x.innerHTML='<span class="text-red-500 font-medium">⚠️ ไม่พบนักเรียนรหัสนี้</span>';return}await Rs(a,Z.id),f.unshift(Z),w(),x.innerHTML=`<span class="text-emerald-600 font-medium">✓ เพิ่ม ${m(Z.full_name)} สำเร็จ!</span>`,t.value=""}catch(Z){x.innerHTML=`<span class="text-red-500 font-medium">⚠️ ${Z.message||"เกิดข้อผิดพลาด"}</span>`}finally{t.disabled=!1,r.disabled=!1,t.focus()}}};o.querySelector("#add-student-close").addEventListener("click",()=>{o.remove(),s()}),r.addEventListener("click",h),t.addEventListener("keydown",H=>{H.key==="Enter"&&(H.preventDefault(),h())}),setTimeout(()=>t.focus(),50)})}catch($){Q("โหลดรายชื่อนักเรียนไม่สำเร็จ: "+($.message??""),"error"),ye(e)}}}async function ye(e,a={}){var p,C;const l=a.showAllTerms??!1;if($e("my-classes"),ke("ห้องเรียนของฉัน","classes"),!(e!=null&&e.id)){be(`<div class="max-w-md mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">⚠️</p>
      <p class="font-medium text-gray-600">ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่</p>
    </div>`);return}be(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[_,T,P,$]=await Promise.all([dt((e==null?void 0:e.id)??null),ve().catch(()=>({})),e!=null&&e.id?pt(e.id).catch(()=>[]):Promise.resolve([]),zt().catch(()=>[])]),G=Object.fromEntries($.map(s=>[s.id,s])),L=parseInt(T.academicYear??2568),J=parseInt(T.semester??1),[u,A,K]=await Promise.all([e!=null&&e.id?Re(e.id,L,J).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?ct(e.id).catch(()=>[]):Promise.resolve([]),et().catch(()=>[])]),V={};A.forEach(s=>{V[s.class_id]||(V[s.class_id]=[]),V[s.class_id].push(s.teacher_schedule_id)});const oe=Object.fromEntries(u.map(s=>[s.id,s])),F=Object.fromEntries(K.map(s=>[s.period_no,s])),U=Object.fromEntries((P??[]).map(s=>[s.room_key,s.color_hex]));window._classCache=Object.fromEntries(_.map(s=>[s.id,s])),window._classesFlat=_;const le=s=>s.academic_year==null||+s.academic_year===L&&+s.semester===J,j=_.filter(s=>!le(s)).length,E=l?_:_.filter(le),v=new Map;E.forEach(s=>{const o=s.master_subjects??{},t=[s.course_id??o.id??"",o.subject_code??"",o.subject_name??"",o.subject_group??""],r=t.some(Boolean)?t.join("|"):`class-${s.id}`;v.has(r)||v.set(r,{key:r,masterSubject:o,classes:[]}),v.get(r).classes.push(s)});const Y=[...v.values()].map(s=>({...s,classes:s.classes.sort((o,t)=>{const r=Pe(o.id,V,oe,F),x=Pe(t.id,V,oe,F);return r!==x?r-x:String(o.class_name??"").localeCompare(String(t.class_name??""),"th")})})).sort((s,o)=>{var x,S;const t=Math.min(...s.classes.map(B=>Pe(B.id,V,oe,F))),r=Math.min(...o.classes.map(B=>Pe(B.id,V,oe,F)));return t!==1/0&&r!==1/0&&t!==r?t-r:String(((x=s.masterSubject)==null?void 0:x.subject_name)??"").localeCompare(String(((S=o.masterSubject)==null?void 0:S.subject_name)??""),"th")});be(`<div class="animate-fade">
      <div class="mb-4">
        ${j>0?`
        <button id="toggle-term-view" type="button"
          class="w-full text-left px-4 py-2.5 rounded-xl border border-dashed text-xs font-semibold transition ${l?"border-indigo-200 bg-indigo-50 text-indigo-700":"border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}">
          ${l?"🔼 กำลังแสดงทุกภาคเรียน — คลิกเพื่อแสดงเฉพาะภาคเรียนปัจจุบัน":`🔽 มีห้องเรียนภาคเรียนก่อนหน้าอีก ${j} ห้อง — คลิกเพื่อแสดง (แก้ไขคะแนน/เช็คชื่อย้อนหลังได้ตามปกติ)`}
        </button>`:""}
      </div>
      ${E.length?`
      <div class="space-y-5">
        ${Y.map(s=>{const o=s.masterSubject??{};return`
          <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3">
              <div class="min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-full">${o.subject_code??"—"}</span>
                  <h3 class="font-bold text-gray-800 text-base">${o.subject_name??"—"}</h3>
                </div>
                <p class="text-xs text-gray-400 mt-1">${s.classes.length} ห้องเรียนในคอร์สนี้</p>
              </div>
            </div>
            <div class="grid gap-3 p-4 md:grid-cols-2">
        ${s.classes.map(t=>{var Z,te;const r=t.master_subjects,x=at(T,t),S=["AGM","AGMVOC"].includes(r==null?void 0:r.subject_group),B={teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:r==null?void 0:r.subject_name,fallbackId:t.id},f=Be(B,U);window._classColorCache||(window._classColorCache={}),window._classColorCache[t.id]=f;const w=S?{text:"กลุ่มวิชาศาสนา",cls:"bg-amber-50 text-amber-700"}:t.skill_group?{text:`กลุ่มทักษะ: ${t.skill_group}`,cls:"bg-blue-50 text-blue-700"}:null,h=t.classroom_id?G[t.classroom_id]:null,W=Pe(t.id,V,oe,F),H=(()=>{if(!(V[t.id]??[]).length)return`<button onclick="event.stopPropagation();window._openCombinedEdit(${t.id},'schedule')"
                class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium hover:underline transition">🔗 เชื่อมตารางสอน</button>`;if(W===1/0)return'<span class="text-[11px] text-gray-400">📅 ไม่พบข้อมูลตาราง</span>';if(W<=0)return'<span class="text-[11px] text-emerald-600 font-semibold">🟢 กำลังสอนอยู่</span>';if(W<60)return`<span class="text-[11px] text-emerald-600">⏱ สอนในอีก ${Math.round(W)} นาที</span>`;const n=Math.floor(W/60),i=Math.round(W%60);return n<24?`<span class="text-[11px] text-blue-600">⏱ สอนในอีก ${n} ชม. ${i} นาที</span>`:`<span class="text-[11px] text-gray-500">⏱ สอนในอีก ${Math.floor(n/24)} วัน</span>`})();return`
          <div class="rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer group"
               style="background:${f.soft}; border-color:${f.border}"
               onclick="window._openClassDetail(${t.id})">
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span class="px-2 py-0.5 bg-white/80 text-emerald-700 text-xs font-mono rounded-full">${(r==null?void 0:r.subject_code)??"—"}</span>
                    ${(r==null?void 0:r.credit)!=null?`<span class="px-2 py-0.5 bg-white/80 text-gray-500 text-xs rounded-full">${r.credit} หน่วยกิต</span>`:""}
                    ${w?`<span class="px-2 py-0.5 ${w.cls} text-xs rounded-full">${w.text}</span>`:""}
                    ${t.google_sheet_id?'<span class="px-2 py-0.5 bg-white/80 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
                  </div>
                  <h3 class="font-bold text-gray-800 text-base">${(r==null?void 0:r.subject_name)??"—"}</h3>
                  <p class="text-sm text-gray-500 mt-0.5">ห้อง: <span class="font-semibold" style="color:${f.text}">${t.class_name}</span>
                    ${h?`<span class="ml-2 text-[11px] text-gray-400">📍 ${h.building} ${h.room_number}</span>`:""}
                  </p>
                </div>
                <div class="flex gap-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  <button onclick="event.stopPropagation();window._openClassDashboard(${t.id})"
                    class="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-white/70 rounded-lg transition text-sm" title="Dashboard ห้องเรียน">📈</button>
                  <button onclick="event.stopPropagation();window._openExamDocsForClass(${t.id})"
                    class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-white/70 rounded-lg transition text-sm" title="เอกสารสอบ">🧾</button>
                  <button onclick="event.stopPropagation();window._copyClass(${t.id},'${((Z=t.class_name)==null?void 0:Z.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-gray-400 hover:text-violet-600 hover:bg-white/70 rounded-lg transition text-sm" title="ทำสำเนาห้องเรียน">📋</button>
                  <button onclick="event.stopPropagation();window._openCombinedEdit(${t.id})"
                    class="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-white/70 rounded-lg transition text-sm" title="แก้ไข">✏️</button>
                  <button onclick="event.stopPropagation();window._deleteClass(${t.id},'${((te=t.class_name)==null?void 0:te.replace(/'/g,"\\'"))||""}')"
                    class="p-1.5 text-red-300 hover:text-red-500 hover:bg-white/70 rounded-lg transition text-sm" title="ลบ">🗑️</button>
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between">
                ${H}
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
    </div>`),(p=document.getElementById("toggle-term-view"))==null||p.addEventListener("click",()=>ye(e,{showAllTerms:!l})),window._openPP5Doc=s=>es(s),window._openExamDocsForClass=s=>ds(s),window._openClassDetail=s=>bt(e,s,{classes:_,scheduleMap:oe,linksByClass:V,periodMap:F,classrooms:$,copyCfg:T}),window._openClassDashboard=async s=>{var r;const o=(r=window._classCache)==null?void 0:r[s];if(!o)return;const{openClassDashboard:t}=await me(async()=>{const{openClassDashboard:x}=await import("./teacher-views-dashboard-MihUIb1e.js");return{openClassDashboard:x}},__vite__mapDeps([0,1,2]));t(s,o,window._pp5DonorTierIndex??0,window._pp5SystemCfg??{})},window._openCombinedEdit=(s,o="info")=>{var r;const t=(r=window._classCache)==null?void 0:r[s];t&&ms(e,t,$,u,V,F,oe,()=>ye(e),o)},window._assignClassroom=s=>{var B,f,w;const o=(B=window._classCache)==null?void 0:B[s];if(!o)return;const t=[...new Set($.map(h=>h.building))];(f=document.getElementById("assign-room-modal"))==null||f.remove();const r=document.createElement("div");r.id="assign-room-modal",r.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",r.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">📍 ระบุห้องสอน</h3>
          <p class="text-xs text-gray-400 mb-4">${o.class_name} · ${((w=o.master_subjects)==null?void 0:w.subject_name)??""}</p>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
              <select id="arm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
                <option value="">— เลือกอาคาร —</option>
                ${t.map(h=>`<option value="${h}">${h}</option>`).join("")}
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
        </div>`,document.body.appendChild(r);const x=r.querySelector("#arm-building"),S=r.querySelector("#arm-room");if(o.classroom_id&&G[o.classroom_id]){const h=G[o.classroom_id];x.value=h.building,x.dispatchEvent(new Event("change"))}x.addEventListener("change",()=>{const h=x.value,W=$.filter(H=>H.building===h);S.innerHTML='<option value="">— เลือกห้อง —</option>'+W.map(H=>{const Z=H.name?`${H.room_number} — ${H.name}`:H.room_number,te=H.id===o.classroom_id?"selected":"";return`<option value="${H.id}" ${te}>${Z}</option>`}).join("")}),r.querySelector("#arm-cancel").addEventListener("click",()=>r.remove()),r.querySelector("#arm-save").addEventListener("click",async()=>{var H;const h=r.querySelector("#arm-save"),W=S.value?parseInt(S.value):null;h.disabled=!0,h.textContent="⏳";try{await Qt(s,W),(H=window._classCache)!=null&&H[s]&&(window._classCache[s].classroom_id=W),Q("บันทึกห้องสอนแล้ว ✅","success"),r.remove(),ye(e)}catch(Z){Q("บันทึกไม่สำเร็จ: "+(Z.message??""),"error"),h.disabled=!1,h.textContent="บันทึก"}})},window._openAttendance=s=>{var t;const o=(t=window._classCache)==null?void 0:t[s];o&&mt(e,o)},window._openGrades=s=>{var t;const o=(t=window._classCache)==null?void 0:t[s];o&&ut(e,o)},window._openScoreCols=(s,o)=>{var r;const t=(r=window._classCache)==null?void 0:r[s];an(e,s,o,t)},window._editClass=s=>{var t;const o=(t=window._classCache)==null?void 0:t[s];o&&hn(e,o)},window._deleteClass=async(s,o)=>{if(await Ze({title:`ลบห้องเรียน "${o}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await Vt(s),Q(`ลบ "${o}" แล้ว`,"success"),ye(e)}catch(r){Q("ลบไม่สำเร็จ: "+(r.message??""),"error")}},window._copyClass=s=>{var x;const o=(x=window._classCache)==null?void 0:x[s];if(!o)return;const t=o.master_subjects??{},r={id:o.course_id,subject_name:t.subject_name??"—",subject_code:t.subject_code??"",credit:t.credit??"",grade_level:t.grade_level??"",dept:t.dept??o.dept??"",subject_group:t.subject_group??""};vn(e,r,{cloneFrom:s,srcSkill:o.skill_group??""})};const I=async(s,o,t="landscape",r="all")=>{try{const[x,S,B]=await Promise.all([ve().catch(()=>({})),Ie(s.id),o==="score"?Gt(s.id):Promise.resolve([])]),f=r==="ชาย"||r==="หญิง"?r:"ทั้งหมด",w=f==="ทั้งหมด"?S:S.filter(D=>String(D.gender||"").trim()===f);if(!w.length){Q(`ไม่พบนักเรียน${f==="ทั้งหมด"?"":f}ในห้องนี้`,"warning");return}const h=s.master_subjects??{},W=["ACDMVOC","AGMVOC"].includes(h.subject_group),H=W?x.porworCollegeName||x.samaiSchoolName||"โรงเรียน":x.samaiSchoolName||x.porworCollegeName||"โรงเรียน",Z=W?x.porworLogoBwUrl||x.porworLogoUrl||x.samaiLogoBwUrl||x.samaiLogoUrl||"":x.samaiLogoBwUrl||x.samaiLogoUrl||x.porworLogoBwUrl||x.porworLogoUrl||"",te=await bn(Z),n=o==="score"?"ใบรายชื่อนักเรียนสำหรับบันทึกคะแนน":"ใบรายชื่อนักเรียนสำหรับเช็คชื่อ",i=t!=="portrait",c=i?"297mm":"210mm",z=i?"210mm":"297mm",M=B.map(D=>{const ae=D.assignment_name||"-";return`
          <th class="score-col ${ae.length>8||B.length>(i?10:6)?"long":""}">
            <div class="score-label" title="${m(ae)}">${m(ae)}</div>
            <small>/${m(D.max_score??"")}</small>
          </th>`}).join(""),y=B.map(()=>'<td class="score-cell"></td>').join(""),q=Array.from({length:12},(D,ae)=>`<th class="check-col">${ae+1}</th>`).join(""),R=Array.from({length:12},()=>'<td class="check-cell"></td>').join(""),se=w.map((D,ae)=>`
          <tr>
            <td class="no">${ae+1}</td>
            <td class="code">${m(D.student_code)}</td>
            <td class="name">${m(D.full_name)}</td>
            ${o==="score"?y:R}
            <td class="note"></td>
          </tr>`).join(""),ee=`<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <title>${m(n)} - ${m(h.subject_name||"")}</title>
  <style>
    @page { size: A4 ${i?"landscape":"portrait"}; margin: 10mm; }
    * { box-sizing: border-box; }
    body { font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; color: #111827; margin: 0; background: #f3f4f6; }
    .page { width: ${c}; min-height: ${z}; margin: 12px auto; padding: 10mm; background: white; }
    .header { display: grid; grid-template-columns: 70px 1fr 150px; align-items: center; gap: 12px; margin-bottom: 10px; }
    .logo-wrap { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background: transparent; }
    .logo { width: 58px; height: 58px; object-fit: contain; filter: grayscale(1) contrast(1.18); }
    .school { text-align: center; line-height: 1.3; }
    .school h1 { margin: 0; font-size: 20px; }
    .school h2 { margin: 3px 0 0; font-size: 16px; font-weight: 700; }
    .meta { font-size: 12px; line-height: 1.7; }
    .meta strong { display: inline-block; min-width: 66px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: ${i?"11px":"10px"}; }
    th, td { border: 1px solid #111827; padding: 3px 4px; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 700; text-align: center; }
    .no { width: 28px; text-align: center; }
    .code { width: 62px; text-align: center; font-family: monospace; }
    .name { width: ${i?"150px":"120px"}; }
    .check-col, .check-cell { width: ${i?"34px":"24px"}; height: 22px; text-align: center; }
    .score-col, .score-cell { width: ${i?"58px":"42px"}; text-align: center; }
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
      <div class="logo-wrap">${te?`<img class="logo" src="${m(te)}" />`:""}</div>
      <div class="school">
        <h1>${m(H)}</h1>
        <h2>${m(n)}${f==="ทั้งหมด"?"":` (${m(f)})`}</h2>
      </div>
      <div class="meta">
        <div><strong>ภาคเรียน</strong> ${m(x.semester||"")}/${m(x.academicYear||"")}</div>
        <div><strong>ห้อง</strong> ${m(s.class_name||"")}</div>
        <div><strong>รายชื่อ</strong> ${m(f)}</div>
        <div><strong>จำนวน</strong> ${w.length} คน</div>
      </div>
    </section>
    <section class="meta" style="margin-bottom:8px">
      <div><strong>รายวิชา</strong> ${m(h.subject_name||"")}</div>
      <div><strong>รหัสวิชา</strong> ${m(h.subject_code||"")}</div>
      <div><strong>ครูผู้สอน</strong> ${m((e==null?void 0:e.full_name)||"")}</div>
    </section>
    <table>
      <thead>
        <tr>
          <th class="no">#</th>
          <th class="code">รหัส</th>
          <th class="name">ชื่อ-นามสกุล</th>
          ${o==="score"?M:q}
          <th class="note">หมายเหตุ</th>
        </tr>
      </thead>
      <tbody>${se}</tbody>
    </table>
    <section class="signature">
      <div>
        ลงชื่อ ........................................ ครูผู้สอน<br />
        (${m((e==null?void 0:e.full_name)||"")})
      </div>
    </section>
  </main>
</body>
</html>`;on(ee)}catch(x){Q("สร้างใบรายชื่อไม่สำเร็จ: "+(x.message??""),"error")}};window._openRosterPicker=s=>{var S,B,f;const o=(S=window._classCache)==null?void 0:S[s];if(!o)return;(B=document.getElementById("roster-picker-modal"))==null||B.remove();const t=document.createElement("div");t.id="roster-picker-modal",t.className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40",t.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">สร้างใบรายชื่อ</h3>
        <p class="text-xs text-gray-400 mb-4">${m(((f=o.master_subjects)==null?void 0:f.subject_name)||"")} · ${m(o.class_name||"")}</p>
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
      </div>`,document.body.appendChild(t);const r=()=>{var w;return((w=t.querySelector(".roster-orientation:checked"))==null?void 0:w.value)||"landscape"},x=()=>{var w;return((w=t.querySelector(".roster-gender:checked"))==null?void 0:w.value)||"all"};t.querySelectorAll(".roster-orientation").forEach(w=>{w.addEventListener("change",()=>{t.querySelectorAll(".roster-orientation-card").forEach(h=>{h.className="roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600"}),w.nextElementSibling.className="roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700"})}),t.querySelectorAll(".roster-gender").forEach(w=>{w.addEventListener("change",()=>{t.querySelectorAll(".roster-gender-card").forEach(h=>{h.className="roster-gender-card block text-center rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600"}),w.nextElementSibling.className="roster-gender-card block text-center rounded-lg border border-violet-500 bg-violet-50 px-2 py-2 text-sm font-semibold text-violet-700"})}),t.querySelector("#btn-roster-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",w=>{w.target===t&&t.remove()}),t.querySelector("#btn-roster-att").addEventListener("click",()=>{const w=r(),h=x();t.remove(),I(o,"attendance",w,h)}),t.querySelector("#btn-roster-score").addEventListener("click",()=>{const w=r(),h=x();t.remove(),I(o,"score",w,h)})},window._openStudentManager=s=>cs(e,s),window._openClassCopyModal=s=>{var w,h;const o=(w=window._classCache)==null?void 0:w[s];if(!o)return;const t=at(T,o);if(!(t!=null&&t.id)){Q("ยังไม่ได้ตั้งค่าไฟล์ต้นฉบับสำหรับกลุ่มวิชานี้","warning");return}(h=document.getElementById("class-copy-modal"))==null||h.remove();const r=o.master_subjects??{},x=`${r.subject_name||"ปพ5"}_${o.class_name||""}_${(e==null?void 0:e.full_name)||""}`.replace(/\s+/g," ").trim(),S=(e==null?void 0:e.login_email)||(e==null?void 0:e.auth_email)||"",B=document.createElement("div");B.id="class-copy-modal",B.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",B.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">🔗 ทำสำเนาชีทสำหรับรายวิชานี้</h3>
        <p class="text-xs text-gray-400 mb-4">${m(t.label||"")} · ${m(r.subject_name||"")} · ${m(o.class_name||"")}</p>
        <label class="block text-sm font-semibold text-gray-700 mb-1">ตั้งชื่อไฟล์สำเนา</label>
        <input id="copy-file-name" class="${we}" value="${m(x)}" />
        <label class="block text-sm font-semibold text-gray-700 mt-3 mb-1">อีเมลที่จะให้สิทธิ์ไฟล์</label>
        <input id="copy-target-email" type="email" class="${we}" value="${m(S)}" placeholder="teacher@example.com" />
        <p class="text-xs text-gray-400 mt-2">ระบบจะสร้างสำเนาในบัญชีผู้ดูแลและแชร์สิทธิ์แก้ไขให้ email นี้ พร้อมบันทึก Sheet ID กลับเข้ารายวิชาอัตโนมัติ</p>
        <div id="copy-result" class="hidden mt-4 rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-sm"></div>
        <div class="flex gap-3 mt-5">
          <button id="copy-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="copy-go" class="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600">สร้างสำเนา</button>
        </div>
      </div>`,document.body.appendChild(B),B.querySelector("#copy-cancel").addEventListener("click",()=>B.remove()),B.addEventListener("click",W=>{W.target===B&&B.remove()});const f=W=>{const H=_sheetCopyUrl(t.id);B.querySelector("#copy-result").innerHTML=`
          <div class="rounded-xl bg-amber-50 border border-amber-100 p-3">
            <p class="font-semibold text-amber-800 mb-1">ใช้วิธีทำสำเนาด้วย Google แทน</p>
            <p class="text-xs text-amber-700 mb-3">${m(W||"หากสร้างอัตโนมัติไม่สำเร็จ ให้กดปุ่มด้านล่างเพื่อทำสำเนา แล้วนำลิงก์ไฟล์ใหม่มาวาง")}</p>
            <a href="${H}" target="_blank" rel="noopener noreferrer"
              class="block w-full py-2 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-700">
              เปิดหน้าทำสำเนาของ Google
            </a>
            <label class="block text-xs font-semibold text-gray-600 mt-3 mb-1">วางลิงก์หรือ ID ของไฟล์ที่ทำสำเนาเสร็จแล้ว</label>
            <input id="manual-sheet-id" class="${we}" placeholder="https://docs.google.com/spreadsheets/d/..." />
            <button id="manual-save-sheet" class="mt-3 w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
              บันทึก Sheet ID เข้ารายวิชา
            </button>
          </div>`,B.querySelector("#copy-result").classList.remove("hidden"),B.querySelector("#manual-save-sheet").addEventListener("click",async()=>{const Z=B.querySelector("#manual-sheet-id"),te=_extractSheetId(Z.value);if(!te){Q("กรุณาวางลิงก์หรือ Sheet ID ของไฟล์สำเนา","warning");return}try{await Ye(o.id,{google_sheet_id:te}),o.google_sheet_id=te,Q("บันทึก Sheet ID เข้ารายวิชาแล้ว","success"),B.remove(),ye(e)}catch(n){Q("บันทึก Sheet ID ไม่สำเร็จ: "+(n.message??""),"error")}})};B.querySelector("#copy-go").addEventListener("click",async()=>{const W=B.querySelector("#copy-go"),H=B.querySelector("#copy-file-name").value.trim()||x||"สำเนาไฟล์ ปพ.5",Z=B.querySelector("#copy-target-email").value.trim();W.disabled=!0,W.textContent="กำลังสร้าง...";try{const te=await nn(t.id,H,Z),n=te.newSheetId;if(!n)throw new Error("GAS ไม่ได้ส่ง Sheet ID กลับมา");await Ye(o.id,{google_sheet_id:n}),o.google_sheet_id=n;const i=te.url||_sheetUrl(n);B.querySelector("#copy-result").innerHTML=`
            <p class="font-semibold text-emerald-800 mb-2">สร้างไฟล์สำเนาและบันทึกเข้ารายวิชาแล้ว</p>
            <button id="copy-open" class="w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">เปิดไฟล์สำเนา</button>`,B.querySelector("#copy-result").classList.remove("hidden"),B.querySelector("#copy-open").addEventListener("click",()=>window.open(i,"_blank")),W.textContent="สร้างแล้ว",Q("สร้างสำเนาและบันทึก Sheet ID แล้ว","success"),setTimeout(()=>ye(e),900)}catch(te){W.disabled=!1,W.textContent="สร้างสำเนา",Q("สร้างอัตโนมัติไม่สำเร็จ เปิดวิธีทำสำเนาด้วย Google แทน","warning"),f(te.message??"")}})},window._openSheetToolsModal=s=>{var x,S,B;const o=(x=window._classCache)==null?void 0:x[s];if(!(o!=null&&o.google_sheet_id))return;(S=document.getElementById("sheet-tools-modal"))==null||S.remove();const t=_sheetUrl(o.google_sheet_id),r=document.createElement("div");r.id="sheet-tools-modal",r.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",r.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">จัดการ Google Sheet</h3>
        <p class="text-xs text-gray-400 mb-4">${m(((B=o.master_subjects)==null?void 0:B.subject_name)||"")} · ${m(o.class_name||"")}</p>
        <div class="space-y-2">
          <button id="btn-share-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold">🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้</button>
          <button id="btn-open-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 text-sm font-semibold">📊 เปิดชีท</button>
          <button id="btn-copy-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-semibold">🔗 คัดลอกลิงก์ชีท</button>
          <button id="btn-open-sync" class="w-full text-left px-4 py-3 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100 text-sm font-semibold">🔗 Sync ข้อมูลไปชีท</button>
        </div>
        <button id="btn-sheet-tools-close" class="mt-4 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>`,document.body.appendChild(r),r.querySelector("#btn-sheet-tools-close").addEventListener("click",()=>r.remove()),r.addEventListener("click",f=>{f.target===r&&r.remove()}),r.querySelector("#btn-open-sheet").addEventListener("click",()=>window.open(t,"_blank")),r.querySelector("#btn-copy-sheet").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t),Q("คัดลอกลิงก์ชีทแล้ว","success")}catch{Q("คัดลอกไม่สำเร็จ","error")}}),r.querySelector("#btn-share-sheet").addEventListener("click",async()=>{const f=r.querySelector("#btn-share-sheet");f.disabled=!0,f.textContent="⏳ กำลังเปิดสิทธิ์...";try{const{shareSheetForView:w}=await me(async()=>{const{shareSheetForView:h}=await import("./sports-portals.js_v_10.22-BrIjazIR.js").then(W=>W.n);return{shareSheetForView:h}},__vite__mapDeps([3,4,2,5,6,7]));await w(o.google_sheet_id),Q("ส่งคำสั่งเปิดสิทธิ์แล้ว กรุณารอสักครู่แล้วลองเปิดลิงก์","success"),f.textContent="✅ ส่งคำสั่งเปิดสิทธิ์แล้ว"}catch(w){f.disabled=!1,f.textContent="🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้",Q("เปิดสิทธิ์ไม่สำเร็จ: "+(w.message??""),"error")}}),r.querySelector("#btn-open-sync").addEventListener("click",()=>{r.remove(),window._openSyncModal(s)})},window._openSyncModal=s=>{var r,x;const o=(r=window._classCache)==null?void 0:r[s];if(!o)return;(x=document.getElementById("sync-modal"))==null||x.remove();const t=document.createElement("div");t.id="sync-modal",t.className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40",t.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 text-base mb-1">🔗 Sync ไปยัง Google Sheet</h3>
          <p class="text-xs text-gray-400 mb-4">ห้อง: ${o.class_name} · Sheet: ✓</p>
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
        </div>`,document.body.appendChild(t),t.querySelector("#btn-sync-cancel").addEventListener("click",()=>t.remove()),t.addEventListener("click",S=>{S.target===t&&t.remove()}),t.querySelector("#btn-sync-go").addEventListener("click",async()=>{var y,q,R,se,ee;const S=t.querySelector("#sync-opt-info").checked,B=t.querySelector("#sync-opt-att").checked,f=t.querySelector("#sync-opt-score").checked;if(!S&&!B&&!f){Q("เลือกอย่างน้อย 1 รายการ","warning");return}const w=t.querySelector("#btn-sync-go"),h=t.querySelector("#sync-progress");w.disabled=!0,w.textContent="⏳ กำลัง Sync...",h.classList.remove("hidden");const{syncClassInfo:W,syncAttendance:H,syncScores:Z}=await me(async()=>{const{syncClassInfo:D,syncAttendance:ae,syncScores:b}=await import("./sports-portals.js_v_10.22-BrIjazIR.js").then(d=>d.n);return{syncClassInfo:D,syncAttendance:ae,syncScores:b}},__vite__mapDeps([3,4,2,5,6,7])),{getDepartments:te,getTeachers:n,getScoreColumns:i,getStudentScores:c,getTeacherById:z}=await me(async()=>{const{getDepartments:D,getTeachers:ae,getScoreColumns:b,getStudentScores:d,getTeacherById:k}=await import("./api-1xsyVspL.js");return{getDepartments:D,getTeachers:ae,getScoreColumns:b,getStudentScores:d,getTeacherById:k}},__vite__mapDeps([1,2])),M=[];try{if(S){h.textContent="📋 Sync ข้อมูลรายวิชา...";const[D,ae,b]=await Promise.all([te().catch(()=>[]),n().catch(()=>[]),(y=o.master_subjects)!=null&&y.teacher_id?z(o.master_subjects.teacher_id).catch(()=>null):Promise.resolve(null)]),d=b??e,k=D.find(g=>{var X;return g.dept_name===((X=o.master_subjects)==null?void 0:X.dept)}),N=k!=null&&k.teacher_code?ae.find(g=>g.teacher_code===k.teacher_code):null,O=(k==null?void 0:k.head_name)||(N==null?void 0:N.full_name)||"";await W(o.google_sheet_id,o,{full_name:(d==null?void 0:d.full_name)??"",phone:(d==null?void 0:d.phone)??""},{headStudentName:((q=o.students)==null?void 0:q.full_name)??"",deptName:((R=o.master_subjects)==null?void 0:R.dept)??"",headDeptName:O})}}catch(D){M.push("รายวิชา: "+(D.message??""))}try{if(B){h.textContent="✅ Sync เช็คชื่อ...";const D=((se=o.master_subjects)==null?void 0:se.credit)??1,ae=((ee=o.master_subjects)==null?void 0:ee.subject_group)==="ACDMVOC",b=ae?await qs(o.id).catch(()=>[]):[],d=fn(o,D,b.length?b:null,ae),[k,N]=await Promise.all([Ie(s),getClassAttendanceAll(s)]),O={};for(const g of N)O[g.student_id]||(O[g.student_id]={}),O[g.student_id][g.session_number]=g.status;await H(o.google_sheet_id,d,O,k)}}catch(D){M.push("เช็คชื่อ: "+(D.message??""))}try{if(f){h.textContent="📝 Sync คะแนน...";const[D,ae,b]=await Promise.all([i(s),c(s),Ie(s)]);D.length&&await Z(o.google_sheet_id,D,ae,b)}}catch(D){M.push("คะแนน: "+(D.message??""))}t.remove(),M.length?Q(`Sync บางส่วนไม่สำเร็จ:
`+M.join(`
`),"error"):Q(`Sync สำเร็จ — ${o.class_name}`,"success")})}}catch(_){console.error("[renderMyClasses] โหลดข้อมูลห้องเรียนไม่สำเร็จ",_);const T=m((_==null?void 0:_.message)||"ไม่ทราบสาเหตุ");be(`<div class="max-w-xl mx-auto mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p class="text-3xl mb-3">⚠️</p>
      <h3 class="font-bold text-red-700">โหลดข้อมูลห้องเรียนไม่สำเร็จ</h3>
      <p class="mt-2 text-sm text-red-600 break-words">${T}</p>
      <button id="retry-my-classes" class="mt-5 px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700">ลองใหม่</button>
    </div>`),(C=document.getElementById("retry-my-classes"))==null||C.addEventListener("click",()=>ye(e)),Q("โหลดข้อมูลห้องเรียนไม่สำเร็จ: "+((_==null?void 0:_.message)||""),"error")}}async function bt(e,a,l={}){$e("my-classes"),ke("ห้องเรียน"),be(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);try{const[p,C,_]=await Promise.all([l.classes?Promise.resolve(l.classes):dt((e==null?void 0:e.id)??null),ve().catch(()=>({})),zt().catch(()=>[])]),T=p,P=T.find(t=>t.id===a);if(!P){l.supervisorMode||ye(e);return}const $=P.master_subjects??{},G=Object.fromEntries(_.map(t=>[t.id,t])),L=P.classroom_id?G[P.classroom_id]:null;window._classCache=Object.fromEntries(T.map(t=>[t.id,t]));const J=parseInt(C.academicYear??2568),u=parseInt(C.semester??1),[A,K,V]=await Promise.all([e!=null&&e.id?Re(e.id,J,u).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?ct(e.id).catch(()=>[]):Promise.resolve([]),et().catch(()=>[])]),oe={};K.forEach(t=>{oe[t.class_id]||(oe[t.class_id]=[]),oe[t.class_id].push(t.teacher_schedule_id)});const F=Object.fromEntries(A.map(t=>[t.id,t])),U=Object.fromEntries(V.map(t=>[t.period_no,t])),j=(!l.supervisorMode&&(e!=null&&e.id)?await Ss(e.id).catch(()=>[]):[]).some(t=>t.package_type==="donation"&&t.status==="approved"),E=at(C,P),v=["AGM","AGMVOC"].includes($.subject_group),Y=P.google_sheet_id?`<button onclick="window._openSheetToolsModal(${a})" class="btn-action teal">⚙️ จัดการชีท</button>`:E!=null&&E.id?`<button onclick="window._openClassCopyModal(${a})" class="btn-action amber">🔗 ทำสำเนาชีท</button>`:"";be(`
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
            <p class="font-bold text-gray-800 text-sm leading-tight truncate">${m($.subject_name??"—")}</p>
            <p class="text-xs text-gray-500 truncate">
              <span class="font-mono text-emerald-600">${m($.subject_code??"")}</span>
              <span class="mx-1">·</span>${m(P.class_name??"")}${L?` · 📍 ${m(L.building)} ${m(L.room_number)}`:""}
            </p>
          </div>
          <!-- badges desktop only -->
          <div class="hidden sm:flex items-center gap-1.5 flex-shrink-0">
            ${P.skill_group?`<span class="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">${m(P.skill_group)}</span>`:""}
            ${v?'<span class="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full">ศาสนา</span>':""}
            ${P.google_sheet_id?'<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">✓ Sheet</span>':""}
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
          <button onclick="window._openSmartClassroom(${a})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#a9781a,#e6c988);">
            👑 <span>Smart Classroom</span>
          </button>
          <button onclick="window._openClassroomChat(${a})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#f59e0b,#b45309);">
            🏫 <span>แชทห้องเรียน</span>
          </button>

          <div class="flex-shrink-0 w-px bg-gray-200 my-0.5"></div>
          <button onclick="window._openCombinedEdit2(${a})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-50 transition flex items-center gap-1.5">
            ✏️ <span>แก้ไข</span>
          </button>
          <button onclick="event.stopPropagation();window._deleteClass(${a},'${(P.class_name??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'")}')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-red-100 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-50 transition flex items-center gap-1.5">
            🗑️ <span>ลบ</span>
          </button>
        </div>

        <template id="cd-group-tpl-docs">
          <button onclick="window._closeActionGroupPopup();window._openPP5Doc(${a})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">💾 ปพ.5</button>
          <button onclick="window._closeActionGroupPopup();window._openExamDocsForClass(${a})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🧾 เอกสารสอบ</button>
          ${P.google_sheet_id?`
          <button onclick="window._closeActionGroupPopup();window._openSheetToolsModal(${a})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⚙️ จัดการชีท</button>`:E!=null&&E.id?`
          <button onclick="window._closeActionGroupPopup();window._openClassCopyModal(${a})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🔗 ทำสำเนาชีท</button>`:""}
        </template>
        <template id="cd-group-tpl-tools">
          <button onclick="window._closeActionGroupPopup();window._openRandomPickerModal(${a})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🎲 สุ่มรายชื่อ</button>
          <button onclick="window._closeActionGroupPopup();window._openTimerModal(${a})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">⏱️ จับเวลา</button>
        </template>
        <template id="cd-group-tpl-assist">
          <button onclick="window._closeActionGroupPopup();window._openClassFlashcardsModal(${a})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">🃏 บัตรคำศัพท์</button>
          <button onclick="window._closeActionGroupPopup();window._openPromptGenModal(${a})" class="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5 transition">✍️ Prompt AI</button>
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
    </style>`);const I=()=>document.getElementById("cd-tab-content");window._backToClasses=()=>{ye(e)};const s={docs:{title:"📄 เอกสาร",grad:"linear-gradient(135deg,#7c3aed,#6366f1)"},tools:{title:"🛠️ เครื่องมือห้องเรียน",grad:"linear-gradient(135deg,#f59e0b,#ec4899)"},assist:{title:"🤖 ผู้ช่วยครู",grad:"linear-gradient(135deg,#6366f1,#06b6d4)"}};window._closeActionGroupPopup=()=>{var t;return(t=document.getElementById("cd-action-popup"))==null?void 0:t.remove()},window._openActionGroupPopup=t=>{window._closeActionGroupPopup();const r=document.getElementById(`cd-group-tpl-${t}`),x=s[t];if(!r||!x)return;const S=document.createElement("div");S.id="cd-action-popup",S.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 animate-fade",S.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div style="background:${x.grad}" class="px-4 py-3 flex items-center justify-between">
            <h3 class="text-white font-bold text-sm">${x.title}</h3>
            <button id="cd-action-popup-close" class="text-white/90 hover:text-white text-2xl leading-none px-1">&times;</button>
          </div>
          <div class="p-2 flex flex-col gap-0.5">${r.innerHTML}</div>
        </div>`,document.body.appendChild(S),S.querySelector("#cd-action-popup-close").addEventListener("click",window._closeActionGroupPopup),S.addEventListener("click",B=>{B.target===S&&window._closeActionGroupPopup()})},window._openPP5Doc=t=>es(t),window._openExamDocsForClass=t=>ds(t),l.supervisorMode||(window._openStudentManager=t=>cs(e,t)),window._openCombinedEdit2=t=>{var x;const r=(x=window._classCache)==null?void 0:x[t];r&&ms(e,r,_,A,oe,U,F,()=>bt(e,t))},window._openRandomPickerModal=async t=>{var x;const r=(x=window._classCache)==null?void 0:x[t];if(r)try{const S=await Ie(t);if(!S.length){Q("ห้องนี้ยังไม่มีนักเรียน","warning");return}const B=S.map((f,w)=>({...f,seat_no:w+1}));await us(t,r,B,j)}catch{Q("โหลดรายชื่อนักเรียนไม่สำเร็จ","error")}},window._openTimerModal=t=>{var x;const r=(x=window._classCache)==null?void 0:x[t];r&&In(t,r,j)},window._openSmartClassroom=t=>{me(()=>import("./teacher-views-smart-classroom-BNyIlVzh.js"),__vite__mapDeps([8,4,1,2,9,10,7,3,5,6,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,26,27,28,29])).then(r=>r.renderSmartClassroom(e,t))},window._openClassroomChat=t=>{var x;const r=(x=window._classCache)==null?void 0:x[t];me(()=>import("./chat-classroom-BIeRyAHR.js"),__vite__mapDeps([30,1,2,31,4,14,6])).then(S=>S.openTeacherClassroomChat(e,t,r==null?void 0:r.class_name))},window._openClassFlashcardsModal=async t=>{var x;if((x=window._classCache)!=null&&x[t])try{const S=await Es(e.id);Bn(e,t,S)}catch(S){Q("โหลดชุดบัตรคำไม่สำเร็จ: "+(S.message??""),"error")}},window._openPromptGenModal=async t=>{var x;const r=(x=window._classCache)==null?void 0:x[t];r&&await ps(e,t,r,window._pp5SystemCfg??{})},window._deleteClass=async(t,r)=>{if(await Ze({title:`ลบห้องเรียน "${r}"?`,message:"การลบห้องเรียนจะไม่สามารถย้อนกลับได้",detail:"ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร",confirmText:"ลบห้องเรียน"}))try{await Vt(t),Q(`ลบ "${r}" แล้ว`,"success"),ye(e)}catch{Q("ลบไม่สำเร็จ","error")}},window._loadClassTab=async t=>o(t);const o=async t=>{document.querySelectorAll(".cd-tab").forEach(S=>{const B=S.dataset.tab===t;S.className=B?"cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center":"cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center"});const r=document.getElementById("cd-tab-content");if(!r)return;r.innerHTML=`<div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>`;const x=gn();Et(r);try{t==="students"?await window._openStudentManager(a):t==="attendance"?await mt(e,P):t==="grades"&&await ut(e,P)}catch(S){console.error(S),r.innerHTML='<div class="p-6 text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ</div>'}finally{Et(x)}$e("my-classes"),ke("ห้องเรียน")};document.querySelectorAll(".cd-tab").forEach(t=>t.addEventListener("click",()=>o(t.dataset.tab))),o(l.defaultTab??"students")}catch(p){console.error(p),Q("โหลดข้อมูลไม่สำเร็จ","error")}}const An=[{value:"none",label:"ไม่จำ — สุ่มอิสระทุกครั้ง (มีโอกาสซ้ำ)"},{value:"session",label:"จำเฉพาะตอนนี้ — รีเซ็ตอัตโนมัติเมื่อปิดหน้าต่างนี้"},{value:"cycle",label:"จำจนครบทุกคน แล้ววนรอบใหม่อัตโนมัติ"},{value:"manual",label:"จำตลอดไป จนกว่าจะกดรีเซ็ตเอง"}];function Rt(e){const a=["#f59e0b","#ec4899","#10b981","#6366f1","#ef4444","#06b6d4","#8b5cf6"];e.style.position="relative",e.style.overflow="hidden";for(let l=0;l<26;l++){const p=document.createElement("div"),C=a[Math.floor(Math.random()*a.length)],_=Math.random()*100,T=1.1+Math.random()*.7,P=Math.random()*.25,$=Math.random()*360;p.style.cssText=`position:absolute;top:-12px;left:${_}%;width:7px;height:13px;background:${C};opacity:0.9;border-radius:2px;transform:rotate(${$}deg);pointer-events:none;animation:rp-confetti-fall ${T}s ${P}s ease-in forwards;`,e.appendChild(p),setTimeout(()=>p.remove(),(T+P)*1e3+250)}}function Bn(e,a,l){var _;(_=document.getElementById("class-flashcards-modal"))==null||_.remove();const p=document.createElement("div");p.id="class-flashcards-modal",p.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4";let C="";!l||l.length===0?C=`
      <div class="text-center py-8 text-gray-500">
        <p class="text-4xl mb-2">🃏</p>
        <p class="text-sm font-medium">คุณครูยังไม่มีชุดบัตรคำศัพท์เลยครับ</p>
        <p class="text-xs text-gray-400 mt-1">สามารถสร้างชุดบัตรคำศัพท์ใหม่ได้ที่เมนู "บัตรคำศัพท์" ในเมนูหลัก</p>
      </div>
    `:C=`
      <div class="grid gap-3 max-h-[60vh] overflow-y-auto pr-1 w-full">
        ${l.map(T=>`
          <button class="select-deck-btn w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition flex items-center justify-between gap-3 group"
            data-deck-id="${T.id}">
            <div>
              <p class="font-bold text-gray-800 text-sm group-hover:text-indigo-700 transition">${m(T.title)}</p>
              ${T.description?`<p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${m(T.description)}</p>`:""}
            </div>
            <span class="text-xs text-indigo-600 font-semibold shrink-0 group-hover:translate-x-1 transition duration-200">เล่นเลย →</span>
          </button>
        `).join("")}
      </div>
    `,p.innerHTML=`
    <div class="bg-white w-full max-w-md rounded-3xl shadow-2xl flex flex-col p-6 relative animate-fade">
      <button id="cf-modal-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">🃏 เลือกชุดบัตรคำศัพท์</h3>
        <p class="text-xs text-gray-400 mt-0.5">เลือกชุดบัตรคำศัพท์ที่คุณครูต้องการนำมาจัดกิจกรรมในห้องเรียนนี้</p>
      </div>

      ${C}
    </div>
  `,document.body.appendChild(p),p.querySelector("#cf-modal-close").addEventListener("click",()=>p.remove()),p.addEventListener("click",T=>{T.target===p&&p.remove()}),p.querySelectorAll(".select-deck-btn").forEach(T=>{T.addEventListener("click",()=>{const P=T.dataset.deckId,$=l.find(G=>G.id===P);$&&(p.remove(),me(()=>import("./teacher-views-flashcards-C2yTyS1-.js"),__vite__mapDeps([32,4,1,2,14])).then(G=>{G.renderFlashcardPlay(e,$,a)}))})})}function Rn(e){var a;return((a=String((e==null?void 0:e.donationSpecialFeatures)??"").split(`
`).map(l=>{const p=l.split("|");return{text:p[1]??"",minTier:parseInt(p[2])||1}}).find(l=>l.text.includes("Prompt")))==null?void 0:a.minTier)??1}const Pt=[{value:"บรรยาย",label:"บรรยาย (Lecture)"},{value:"กิจกรรมกลุ่ม",label:"กิจกรรมกลุ่ม (Group Activity)"},{value:"โครงงานเป็นฐาน",label:"โครงงานเป็นฐาน (Project-based)"},{value:"สืบเสาะหาความรู้",label:"สืบเสาะหาความรู้ (Inquiry-based)"},{value:"other",label:"อื่นๆ (พิมพ์เอง)"}],Nt={th:"ภาษาไทย",en:"ภาษาอังกฤษ (English)",ar:"ภาษาอาหรับ (العربية)","ms-rumi":"ภาษามลายู อักษรรูมี (Bahasa Melayu, Rumi)","ms-jawi":"ภาษามลายูปัตตานี อักษรยาวี (Jawi)"},Ht=[{key:"worksheet",text:"ใบงาน/ใบกิจกรรม",imageFormat:"กระดาษ A4 แนวตั้ง พร้อมพิมพ์แจกนักเรียนได้จริง",imageContent:"ใบงาน/ใบกิจกรรมที่มีคำสั่งชัดเจนและเว้นที่ว่างให้กรอกคำตอบ"},{key:"slides",text:"โครงร่างสไลด์นำเสนอ",imageFormat:"สไลด์นำเสนอ อัตราส่วน 16:9",imageContent:"สไลด์นำเสนอแต่ละแผ่น มีข้อความหลักและภาพประกอบที่เหมาะกับเนื้อหาคาบนี้"},{key:"questions",text:"คำถามกระตุ้นความคิด/อภิปราย",imageFormat:"โปสเตอร์/การ์ดคำถามขนาด A4 สำหรับติดในห้องเรียนหรือเปิดฉาย",imageContent:"คำถามกระตุ้นความคิดอย่างน้อย 5 ข้อ เรียงลำดับจากง่ายไปยาก จัดวางให้อ่านง่ายน่าสนใจ"},{key:"rubric",text:"เกณฑ์ให้คะแนน (Rubric)",imageFormat:"ตารางขนาด A4 จัดวางเป็นตารางอ่านง่าย",imageContent:"เกณฑ์การให้คะแนน (Rubric) แบบ 4 ระดับคุณภาพ พร้อมคำอธิบายแต่ละระดับ"},{key:"game",text:"เกม/กิจกรรมเสริมท้ายคาบ",imageFormat:"การ์ด/กระดานกิจกรรมขนาด A4 พร้อมพิมพ์ใช้งานได้จริง",imageContent:"อุปกรณ์/การ์ดเกมหรือกระดานกิจกรรมเสริมท้ายคาบ เพื่อทบทวนเนื้อหา ใช้เวลาไม่เกิน 10 นาที"}],Pn={บรรยาย:[],กิจกรรมกลุ่ม:["worksheet","rubric","game"],โครงงานเป็นฐาน:["worksheet","rubric","questions"],สืบเสาะหาความรู้:["questions","worksheet"],other:[]};function Nn({subjectName:e,subjectCode:a,gradeLevel:l,className:p,studentCount:C,avgPct:_,topic:T,format:P,periods:$,minutesPerPeriod:G,isReligionSubj:L,mediaItems:J,langKey:u,langLabel:A}){const K=$*G,V=$>1?`${$} คาบต่อเนื่อง (คาบละ ${G} นาที รวม ${K} นาที)`:`1 คาบ (${G} นาที)`,oe=u==="ms-jawi"?" (เขียนด้วยอักขระยาวี Jawi เท่านั้น ห้ามใช้อักษรรูมี)":"",F=L?["คุณคือผู้ช่วยครูอิสลามศึกษาไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรอิสลามศึกษา พุทธศักราช 2551"]:["คุณคือผู้ช่วยครูไทย ช่วยออกแบบแผนการจัดการเรียนรู้รายคาบ","ตามหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พ.ศ. 2551 (ฉบับปรับปรุง พ.ศ. 2560)"];return F.push("","บริบทวิชา:",`- วิชา: ${e} (รหัส ${a})`,`- ระดับชั้น: ${l}   ห้อง: ${p}`,`- จำนวนนักเรียน: ${C} คน`),_!=null&&F.push(`- คะแนนเฉลี่ยสะสมของห้องนี้ในขณะนี้: ${_}% (ใช้พิจารณาความยาก-ง่ายของกิจกรรม)`),F.push("",`หัวข้อที่จะสอนคาบนี้: ${T}`,`รูปแบบการสอนที่ต้องการ: ${P}`,`ระยะเวลา: ${V}`,"",`คำสั่งต่อไปนี้เขียนเป็นภาษาไทยเพื่อให้คุณเข้าใจชัดเจน แต่เนื้อหาที่สร้างขึ้นจริงทั้งหมด (แผนการสอน, ใบงาน, สื่อ, ข้อความในภาพ) ต้องเป็น${A}${oe}`,"","กรุณาออกแบบแผนการจัดการเรียนรู้ที่ประกอบด้วย:","1. จุดประสงค์การเรียนรู้ (ด้านความรู้ K / ทักษะ P / เจตคติ A)","2. สาระสำคัญ (Key Concept)",`3. กิจกรรมการเรียนรู้ แบ่งเป็น 3 ขั้น พร้อมระบุเวลาแต่ละขั้นตอนชัดเจน (รวม ${K} นาที)${$>1?" — หากมีมากกว่า 1 คาบ กรุณาแบ่งกิจกรรมเป็นรายคาบให้ชัดเจน (คาบที่ 1: ..., คาบที่ 2: ...)":""}:`,"   - นำเข้าสู่บทเรียน","   - กิจกรรมหลัก","   - สรุป/wrap-up","4. สื่อ/อุปกรณ์ที่ต้องใช้","5. วิธีการวัดและประเมินผลในคาบ","6. งาน/การบ้าน (ถ้ามี)","7. หมายเหตุสำหรับครู — สิ่งที่ต้องเตรียมหรือระวังเป็นพิเศษ",`8. เขียนคำสั่งสร้างภาพ (Image Generation Prompt) เป็นภาษาไทย แยกไว้ในกล่องโค้ดของตัวเอง สำหรับสร้างภาพสรุปแผนการจัดการเรียนรู้ทั้งหมดนี้ (ข้อความที่ปรากฏจริงในภาพเป็น${A}${oe}) ให้อยู่ในภาพเดียวหน้าเดียว (One-Page Lesson Plan) ขนาดกระดาษ A4 จัดวางให้อ่านง่าย ครบทุกหัวข้อสำคัญ (จุดประสงค์, สาระสำคัญ, กิจกรรม 3 ขั้น, สื่อ/อุปกรณ์, การวัดประเมินผล) ก่อนกล่องโค้ดนี้ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง`,"","หมายเหตุสำคัญ: หากเนื้อหาวิชานี้เกี่ยวข้องกับสมการ สูตร หรือสัญลักษณ์ทางคณิตศาสตร์/วิทยาศาสตร์ กรุณาเขียนด้วยรูปแบบ LaTeX เสมอ (เช่น $y = mx + b$ หรือสมการซับซ้อนใช้ $$...$$) เพื่อให้สมการถูกต้องแม่นยำและอ่านง่าย ห้ามพิมพ์สมการเป็นข้อความธรรมดาที่อาจอ่านผิดเพี้ยน"),J!=null&&J.length&&(F.push("",`สื่อ/เอกสารประกอบเพิ่มเติม (นอกเหนือจากแผนการสอน) — ห้ามเขียนเนื้อหาเป็นข้อความอ่านตรงๆ แต่ให้เขียนเป็น "คำสั่งสร้างภาพ" (Image Generation Prompt) เป็นภาษาไทย สำหรับป้อนให้ AI สร้างรูปภาพต่อ (ข้อความที่ปรากฏจริงในภาพให้เป็น${A}${oe}) เพื่อให้ได้ไฟล์ภาพพร้อมใช้งานจริง โดยมีกติกาดังนี้:`,"- แต่ละรายการด้านล่างให้เขียนคำสั่งสร้างภาพแยกเป็นคนละกล่องโค้ด (code block) ต่อ 1 รายการ ไม่ปนกัน","- ออกแบบจำนวนภาพ/หน้าให้เหมาะสมกับเนื้อหา สูงสุดไม่เกิน 10 ภาพต่อกล่องโค้ด 1 กล่อง","- ถ้ารายการใดต้องใช้มากกว่า 10 ภาพ ให้แบ่งเป็นกล่องโค้ดใหม่ต่อจากกัน กล่องละไม่เกิน 10 ภาพ",'- ภายในกล่องโค้ดเดียวกัน ให้ระบุคำสั่งของแต่ละภาพแยกกันให้ครบและชัดเจน (เช่น "ภาพที่ 1: ...", "ภาพที่ 2: ...")',"- แต่ละคำสั่งต้องอธิบายรายละเอียดกราฟิก เค้าโครง และข้อความที่ต้องปรากฏในภาพให้ชัดเจนพอที่ AI สร้างภาพจะสร้างออกมาได้ตรงตามต้องการ","- ก่อนกล่องโค้ดแรกของแต่ละรายการ ให้เขียนคำแนะนำสั้นๆ (เป็นภาษาไทย) บอกครูว่าให้คัดลอกคำสั่งไปวางในโหมดสร้างรูปภาพของ AI (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง","","รายการที่ต้องการ:"),J.forEach((U,le)=>F.push(`${le+1}. ${U.text} — รูปแบบภาพ: ${U.imageFormat} — เนื้อหาที่ต้องปรากฏ: ${U.imageContent}`))),F.join(`
`)}function Ve(e){return m(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}function Hn(e){const a=String(e??"").split(`
`);let l="",p=!1,C=[],_=null;const T=()=>{_&&(l+=`</${_}>`,_=null)};for(const P of a){const $=P.replace(/\r$/,"");if($.trim().startsWith("```")){p?(l+=`<pre>${m(C.join(`
`))}</pre>`,C=[],p=!1):(T(),p=!0);continue}if(p){C.push($);continue}const G=$.match(/^(#{1,3})\s+(.*)$/);if(G){T();const u=G[1].length;l+=`<h${u}>${Ve(G[2])}</h${u}>`;continue}const L=$.match(/^\s*[-*]\s+(.*)$/);if(L){_!=="ul"&&(T(),l+="<ul>",_="ul"),l+=`<li>${Ve(L[1])}</li>`;continue}const J=$.match(/^\s*\d+[.)]\s+(.*)$/);if(J){_!=="ol"&&(T(),l+="<ol>",_="ol"),l+=`<li>${Ve(J[1])}</li>`;continue}T(),l+=$.trim()?`<p>${Ve($)}</p>`:"<p>&nbsp;</p>"}return T(),p&&C.length&&(l+=`<pre>${m(C.join(`
`))}</pre>`),l}function Dt(e){return String(e??"").replace(/[\\/:*?"<>|]/g," ").trim().slice(0,60)||"เอกสาร"}function Dn(e,a){const p=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>แผนการจัดการเรียนรู้</title>
    <style>
      body{font-family:'TH Sarabun New','Angsana New',Tahoma,sans-serif;font-size:16pt;line-height:1.6;}
      h1{font-size:22pt;} h2{font-size:19pt;} h3{font-size:17pt;}
      pre{font-family:'Courier New',monospace;font-size:12pt;background:#f5f5f5;padding:10px;border:1px solid #ccc;white-space:pre-wrap;}
    </style></head><body>${Hn(e)}</body></html>`,C=new Blob(["\uFEFF",p],{type:"application/msword"}),_=URL.createObjectURL(C),T=document.createElement("a");T.href=_,T.download=a,document.body.appendChild(T),T.click(),T.remove(),URL.revokeObjectURL(_)}async function ps(e,a,l,p){var le;(le=document.getElementById("prompt-gen-modal"))==null||le.remove();const C=(l==null?void 0:l.master_subjects)??{},_=window._pp5DonorTierIndex??0,T=Rn(p),P=["AGM","AGMVOC"].includes(C.subject_group),$=p==null?void 0:p.freePromptAiLimit;let G=1;if($!==void 0&&$!==""){const j=parseInt($,10);Number.isFinite(j)&&(G=j)}const L=parseInt(localStorage.getItem("pp5_free_promptai_count")||"0",10),J=G>0&&L<G,u=_<T,A=document.createElement("div");if(A.id="prompt-gen-modal",A.className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4",u&&!J){A.innerHTML=`
      <div class="bg-white w-full max-w-sm rounded-3xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="pg-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-800 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${T}+</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">✍️ ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว<br>ทดลองใช้ฟรีครบ ${G} ครั้งแล้ว<br>สนับสนุนโครงการเพื่อใช้งานต่อแบบไม่จำกัด</p>
        <button id="pg-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
      </div>`,document.body.appendChild(A),A.querySelector("#pg-close").addEventListener("click",()=>A.remove()),A.querySelector("#pg-upgrade").addEventListener("click",()=>{var j;A.remove(),(j=document.getElementById("btn-donate-float"))==null||j.click()}),A.addEventListener("click",j=>{j.target===A&&A.remove()});return}A.innerHTML=`
    <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative animate-fade">
      <div class="flex items-center gap-3 px-6 pt-6 pb-3 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">✍️ สร้าง Prompt สำหรับ AI</h3>
          <p class="text-xs text-gray-400 mt-0.5">นำ Prompt ที่ได้ไปวางใน ChatGPT / Gemini / Claude ของคุณครูเองได้เลย</p>
          ${u?`<span class="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">✨ ทดลองใช้งานฟรี (ครั้งที่ ${L+1}/${G})</span>`:""}
        </div>
        <button id="pg-close" class="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      </div>
      <div class="px-6 pb-6 overflow-y-auto" id="pg-body">
        <div class="flex justify-center py-10 text-gray-400 text-sm">กำลังโหลดข้อมูลห้องเรียน...</div>
      </div>
    </div>`,document.body.appendChild(A),A.querySelector("#pg-close").addEventListener("click",()=>A.remove()),A.addEventListener("click",j=>{j.target===A&&A.remove()});const K=A.querySelector("#pg-body");let V=0,oe=null;try{const[j,E]=await Promise.all([Ie(a).catch(()=>[]),Ns(a).catch(()=>({columns:[],scores:[]}))]);V=j.length;const v=(E.columns??[]).reduce((Y,I)=>Y+(I.max_score??0),0);if(v>0&&V>0){const Y=(E.scores??[]).reduce((I,s)=>I+(s.final_score??0),0);oe=Math.round(Y/V/v*100)}}catch{}const F=()=>{K.innerHTML=`
      <div class="bg-gray-50 rounded-2xl p-4 mb-4 text-xs text-gray-600 space-y-1">
        <p><strong class="text-gray-800">${m(C.subject_name??"—")}</strong> (${m(C.subject_code??"—")})</p>
        <p>ระดับชั้น ${m(C.grade_level??"—")} · ห้อง ${m(l.class_name??"—")} · นักเรียน ${V} คน</p>
        ${oe!=null?`<p>คะแนนเฉลี่ยสะสมปัจจุบัน: <strong class="text-emerald-600">${oe}%</strong></p>`:""}
      </div>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">หัวข้อที่จะสอนคาบนี้ <span class="text-red-400">*</span></label>
          <textarea id="pg-topic" rows="2" class="${we} resize-none" placeholder="เช่น สมการกำลังสอง, การสังเคราะห์แสง"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">รูปแบบการสอนที่ต้องการ</label>
          <select id="pg-format" class="${rt}">
            ${Pt.map(I=>`<option value="${I.value}">${m(I.label)}</option>`).join("")}
          </select>
          <input id="pg-format-other" class="${we} mt-2 hidden" placeholder="พิมพ์รูปแบบที่ต้องการ" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5">จำนวนคาบ</label>
            <input id="pg-periods" type="number" min="1" max="10" value="1" class="${we}" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5">นาทีต่อคาบ</label>
            <input id="pg-minutes" type="number" min="10" max="180" value="50" class="${we}" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">สื่อ/เอกสารประกอบที่ต้องการให้ AI ช่วยออกแบบเพิ่มเติม (เลือกได้หลายรายการ)</label>
          <p class="text-xs text-gray-400 mb-1.5">รายการที่เลือกจะได้เป็น "คำสั่งสร้างภาพ" ให้นำไปวางในโหมดสร้างรูปภาพของ AI ต่อ (แนะนำ: ChatGPT โหมดสร้างรูปภาพ) เพื่อสร้างเป็นไฟล์ภาพจริง</p>
          <div id="pg-media" class="space-y-1.5">
            ${Ht.map(I=>`
              <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" class="pg-media-cb rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" value="${I.key}" />
                ${m(I.text)}
              </label>`).join("")}
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1.5">ภาษาที่ต้องการให้ AI ตอบ</label>
          <select id="pg-lang" class="${rt}">
            ${Object.entries(Nt).map(([I,s])=>`<option value="${I}">${m(s)}</option>`).join("")}
          </select>
        </div>
        <button id="pg-generate" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">
          ✨ สร้าง Prompt
        </button>
      </div>`;const j=K.querySelector("#pg-format"),E=K.querySelector("#pg-format-other"),v=()=>[...K.querySelectorAll(".pg-media-cb")],Y=()=>{const I=Pn[j.value]??[];v().forEach(s=>{s.checked=I.includes(s.value)})};Y(),j.addEventListener("change",()=>{E.classList.toggle("hidden",j.value!=="other"),Y()}),K.querySelector("#pg-generate").addEventListener("click",()=>{var f;const I=K.querySelector("#pg-topic").value.trim();if(!I){Q("กรุณาระบุหัวข้อที่จะสอนก่อนครับ","warning");return}const s=j.value==="other"?E.value.trim()||"ไม่ระบุ":((f=Pt.find(w=>w.value===j.value))==null?void 0:f.label)??j.value,o=Math.max(1,parseInt(K.querySelector("#pg-periods").value,10)||1),t=Math.max(1,parseInt(K.querySelector("#pg-minutes").value,10)||50),r=v().filter(w=>w.checked).map(w=>Ht.find(h=>h.key===w.value)).filter(Boolean),x=K.querySelector("#pg-lang").value,S=Nt[x],B=Nn({subjectName:C.subject_name??"—",subjectCode:C.subject_code??"—",gradeLevel:C.grade_level??"—",className:l.class_name??"—",studentCount:V,avgPct:oe,topic:I,format:s,periods:o,minutesPerPeriod:t,isReligionSubj:P,mediaItems:r,langKey:x,langLabel:S});u&&localStorage.setItem("pp5_free_promptai_count",String(L+1)),U(B,I)})},U=(j,E)=>{K.innerHTML=`
      <p class="text-xs text-gray-500 mb-2">คัดลอกข้อความด้านล่างไปวางใน ChatGPT / Gemini / Claude ของคุณครูได้เลยครับ</p>
      <textarea id="pg-output" readonly rows="14" class="w-full text-xs font-mono border border-gray-200 rounded-2xl p-3 bg-gray-50 text-gray-700 resize-none">${m(j)}</textarea>
      <div class="flex gap-2 mt-3">
        <button id="pg-copy" class="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg transition">📋 คัดลอก Prompt</button>
        <button id="pg-back" class="px-4 py-3 rounded-2xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition">← แก้ไข</button>
      </div>
      <div class="mt-5 pt-4 border-t border-gray-100">
        <p class="text-xs font-semibold text-gray-700 mb-1">📄 ขั้นตอนถัดไป (ถ้าต้องการ): ดาวน์โหลดเป็นไฟล์ Word</p>
        <p class="text-xs text-gray-400 mb-2">พอ AI ตอบกลับมาแล้ว วางคำตอบทั้งหมดที่ได้ลงในช่องนี้ แล้วกดดาวน์โหลด — จะได้ไฟล์ Word (.doc) ที่เปิดแก้ไขต่อได้เลย</p>
        <textarea id="pg-ai-response" rows="8" class="${we} resize-y font-mono text-xs" placeholder="วางคำตอบจาก ChatGPT / Gemini / Claude ที่นี่..."></textarea>
        <button id="pg-download-word" class="w-full mt-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition">📄 ดาวน์โหลดเป็นไฟล์ Word (.doc)</button>
      </div>`,K.querySelector("#pg-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(j),Q("คัดลอก Prompt แล้วครับ","success")}catch{Q("คัดลอกไม่สำเร็จ กรุณาเลือกข้อความแล้วคัดลอกเองครับ","error")}}),K.querySelector("#pg-back").addEventListener("click",F),K.querySelector("#pg-download-word").addEventListener("click",()=>{const v=K.querySelector("#pg-ai-response").value.trim();if(!v){Q("กรุณาวางคำตอบจาก AI ก่อนดาวน์โหลดครับ","warning");return}const Y=`แผนการสอน_${Dt(C.subject_code)}_${Dt(E)}.doc`;Dn(v,Y),Q("ดาวน์โหลดไฟล์ Word แล้วครับ","success")})};F()}async function On(e,a,l,p={}){return ps(e,a,l,p)}async function us(e,a,l,p){var te,n;const C=(te=window._pp5SystemCfg)==null?void 0:te.freeRandomPickerLimit;let _=1;if(C!==void 0&&C!==""){const i=parseInt(C,10);Number.isFinite(i)&&(_=i)}(n=document.getElementById("random-picker-modal"))==null||n.remove();const T=()=>{F.innerHTML=`
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="rp-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-700 text-lg">สิทธิ์สุ่มทดลองใช้งานครบแล้ว</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สุ่มรายชื่อและจัดกลุ่มจำกัดการทดลองสุ่มฟรี ${_} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
        <button id="rp-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`,F.querySelector("#rp-paywall-close").addEventListener("click",()=>F.remove()),F.querySelector("#rp-upgrade").addEventListener("click",()=>{var i;F.remove(),(i=document.getElementById("btn-donate-float"))==null||i.click()})};let P;try{P=await Ps(e)}catch{P={mode:"none",picked_student_ids:[]}}let $=P.mode||"none",G=new Set((P.picked_student_ids||[]).map(Number)),L=new Set;const J=new Map(l.map(i=>[i.id,i]));let u=Array.isArray(P.groups)?P.groups.map(i=>({no:i.no,items:(i.student_ids||[]).map(c=>J.get(c)).filter(Boolean)})):null,A="pick",K=!1,V=localStorage.getItem("pp5_rp_effect")||"classic";const oe=[{key:"classic",icon:"🎯",label:"คลาสสิก"},{key:"grid",icon:"🔦",label:"กริด"},{key:"elimination",icon:"💥",label:"ตัดออก"},{key:"slot",icon:"🎰",label:"สล็อต"}],F=document.createElement("div");F.id="random-picker-modal",F.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",F.innerHTML=`
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
          <p class="text-white/80 text-xs mt-0.5 truncate">${m(a.class_name||"")} · ทั้งหมด ${l.length} คน</p>
        </div>
        <button id="rp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="pick">🎯 สุ่มรายชื่อ</button>
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="group">👥 สุ่มจัดกลุ่ม</button>
      </div>
      <div id="rp-body" class="p-5 overflow-y-auto flex-1"></div>
    </div>`,document.body.appendChild(F),F.addEventListener("click",i=>{i.target===F&&F.remove()}),F.querySelector("#rp-close").addEventListener("click",()=>F.remove());const U=F.querySelector("#rp-body"),le=[...F.querySelectorAll(".rp-tab")],j=i=>{A=i,le.forEach(c=>{const z=c.dataset.mode===i;c.className=`rp-tab flex-1 py-2.5 text-sm font-semibold transition ${z?"text-white":"text-gray-500 hover:text-gray-700"}`,c.style.background=z?"linear-gradient(135deg,#f59e0b,#ec4899)":""}),i==="pick"?s():Z()};le.forEach(i=>i.addEventListener("click",()=>{K||j(i.dataset.mode)}));const E=()=>$==="none"?new Set:$==="session"?L:G,v=async i=>{if($!=="none"){if($==="session"){L.add(i);return}G.add(i);try{await $t(e,{mode:$,pickedStudentIds:[...G]})}catch{}}},Y=async()=>{G=new Set,L=new Set;try{await kt(e)}catch{}Q("รีเซ็ตการสุ่มแล้ว","success"),A==="pick"&&s()},I=async i=>{if(i!==$){$=i,G=new Set,L=new Set;try{await $t(e,{mode:i,pickedStudentIds:[]})}catch{}s()}};function s(){const i=E(),c=l.filter(R=>!i.has(R.id)),z=l.length-c.length,M=(R,se)=>{const ee=`hsl(${R.id*47%360},60%,55%)`,D=R.image_url?`<img src="${m(R.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${ee}">${m((R.full_name??"?").charAt(0))}</div>`;return`<div class="${se}" data-id="${R.id}">${D}<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${R.seat_no??""}</div></div>`},y=(R,se=!1)=>`<div id="rp-reel-${R}" class="rp-reel rounded-2xl border-2 border-gray-200 bg-white" style="width:${se?104:86}px;height:${se?148:124}px;flex-shrink:0;"><div class="rp-reel-inner flex flex-col items-center justify-center h-full p-2 gap-1" style="transition:opacity .06s ease;"><div class="flex-1 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center text-gray-300 text-2xl font-bold">?</div><div class="text-[9px] font-bold text-gray-500 truncate w-full text-center leading-none">—</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">·</div></div></div>`,q=()=>V==="grid"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 text-center pt-3 pb-1.5">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-grid" class="grid gap-1 px-2 pb-2" style="grid-template-columns:repeat(auto-fill,minmax(54px,1fr))">
            ${c.map(R=>M(R,"rp-grid-tile")).join("")}
          </div>
        </div>`:V==="elimination"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <div class="flex items-center justify-between pt-2.5 pb-1 px-3">
            <p id="rp-hint" class="text-xs text-gray-400">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
            <span id="rp-elim-counter" class="text-xs font-bold text-gray-500">${c.length} คน</span>
          </div>
          <div id="rp-elim-grid" class="grid gap-1 px-2 pb-2 overflow-y-auto" style="grid-template-columns:repeat(auto-fill,minmax(48px,1fr));max-height:210px;">
            ${c.map(R=>M(R,"rp-elim-tile")).join("")}
          </div>
        </div>`:V==="slot"?`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-4 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-4">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div class="flex justify-center items-center gap-2">
            ${y(0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${y(1,!0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${y(2)}
          </div>
        </div>`:`
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-6 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-3">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-avatar" class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 items-center justify-center" style="display:none;opacity:0;box-shadow:0 8px 24px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.10);"></div>
          <p id="rp-name" class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2">—</p>
          <p id="rp-code" class="text-xs text-gray-400 mt-1 font-mono"></p>
        </div>`;U.innerHTML=`
      <div class="flex gap-1.5 mb-3">
        ${oe.map(R=>`<button class="rp-eff flex-1 py-2 rounded-xl border text-center leading-tight transition ${R.key===V?"border-amber-400 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}" data-eff="${R.key}"><div class="text-base">${R.icon}</div><div class="text-[9px] font-semibold mt-0.5">${R.label}</div></button>`).join("")}
      </div>
      <div class="flex items-center gap-2 mb-3">
        <select id="rp-mode" class="${rt} flex-1 text-xs">
          ${An.map(R=>`<option value="${R.value}" ${R.value===$?"selected":""}>${R.label}</option>`).join("")}
        </select>
        <button id="rp-reset" class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">🔄 รีเซ็ต</button>
      </div>
      ${$!=="none"?`<p id="rp-counter" class="text-[11px] text-gray-400 mb-3">สุ่มไปแล้ว ${z} / ${l.length} คน${c.length===0?" — ครบทุกคนแล้ว!":""}</p>`:""}
      ${q()}
      <button id="rp-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]" style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 สุ่มเลย!</button>`,U.querySelectorAll(".rp-eff").forEach(R=>{R.addEventListener("click",()=>{K||(V=R.dataset.eff,localStorage.setItem("pp5_rp_effect",V),s())})}),U.querySelector("#rp-mode").addEventListener("change",R=>I(R.target.value)),U.querySelector("#rp-reset").addEventListener("click",()=>{K||Y()}),U.querySelector("#rp-go").addEventListener("click",()=>o())}function o(){if(K)return;if(!p&&parseInt(localStorage.getItem("pp5_free_random_count")||"0",10)>=_){T();return}let i=l.filter(q=>!E().has(q.id)),c=!1;if(i.length===0){if($==="manual"){Q('สุ่มครบทุกคนแล้ว — กดปุ่ม "รีเซ็ต" เพื่อเริ่มรอบใหม่',"warning");return}i=l,c=$==="cycle"||$==="session"}K=!0;const z=U.querySelector("#rp-go");z.disabled=!0,z.textContent="🎰 กำลังสุ่ม...";const M=i[Math.floor(Math.random()*i.length)],y=async()=>{if(c){G=new Set,L=new Set;try{await kt(e)}catch{}}if(await v(M.id),!p){const q=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);localStorage.setItem("pp5_free_random_count",String(q+1))}setTimeout(()=>{K=!1;const q=E(),R=l.length-l.filter(D=>!q.has(D.id)).length,se=U.querySelector("#rp-counter");if(se){const D=l.length-R;se.textContent=`สุ่มไปแล้ว ${R} / ${l.length} คน${D===0?" — ครบทุกคนแล้ว!":""}`}const ee=U.querySelector("#rp-go");if(ee)if(V==="classic")ee.disabled=!1,ee.textContent="🎲 สุ่มอีกครั้ง";else{ee.disabled=!1,ee.textContent="🔁 สุ่มใหม่";const D=ee.cloneNode(!0);ee.replaceWith(D),D.addEventListener("click",()=>s())}},900)};V==="grid"?x(i,M,y):V==="elimination"?S(i,M,y):V==="slot"?B(i,M,y):r(i,M,y)}function t(i,c){i.style.transition="opacity 0.2s ease",i.style.opacity="0",setTimeout(()=>{i.style.borderStyle="solid",i.style.borderColor="#10b981",i.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",i.innerHTML=`<div class="py-5 px-4 text-center">
        <p class="text-xs text-gray-400 mb-3">🎉 ได้คนนี้แหละ!</p>
        <div class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 rp-pop" style="box-shadow:0 8px 24px rgba(0,0,0,.18);">${c.image_url?`<img src="${m(c.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${m((c.full_name??"?").charAt(0))}</div>`}</div>
        <p class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2 rp-pop">${m(c.full_name)}</p>
        <p class="text-xs text-gray-400 mt-1 font-mono">${c.seat_no?`เลขที่ ${c.seat_no}`:""}</p>
      </div>`,i.style.opacity="1",Rt(i)},220)}function r(i,c,z){const M=U.querySelector("#rp-stage"),y=U.querySelector("#rp-name"),q=U.querySelector("#rp-code"),R=U.querySelector("#rp-hint"),se=U.querySelector("#rp-avatar");y.classList.remove("rp-pop"),se==null||se.classList.remove("rp-pop"),M.style.borderStyle="dashed",M.style.borderColor="#fbbf24",M.style.boxShadow="none";const ee=(d,k=!1)=>{se&&(se.style.display="flex",se.style.transition=k?"opacity 0.06s ease":"opacity 0.3s ease",se.style.opacity="0",setTimeout(()=>{se.innerHTML=d.image_url?`<img src="${d.image_url}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${(d.full_name??"?").charAt(0)}</div>`,se.style.opacity="1"},k?30:80))};ee(i[Math.floor(Math.random()*i.length)],!0);let D=0,ae=55;const b=()=>{const d=i[Math.floor(Math.random()*i.length)];y.textContent=d.full_name,q.textContent=d.seat_no?`เลขที่ ${d.seat_no}`:"",ee(d,!0),D++,D<26?(ae=Math.min(ae*1.13,420),setTimeout(b,ae)):(y.textContent=c.full_name,q.textContent=c.seat_no?`เลขที่ ${c.seat_no}`:"",ee(c,!1),se==null||se.classList.add("rp-pop"),y.classList.add("rp-pop"),M.style.borderStyle="solid",M.style.borderColor="#10b981",M.style.boxShadow="0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)",R&&(R.textContent="🎉 ได้คนนี้แหละ!"),Rt(M),z())};b()}function x(i,c,z){const M=U.querySelector("#rp-stage"),y=U.querySelector("#rp-hint"),q=U.querySelector("#rp-grid");if(!q)return r(i,c,z);let R=[...q.querySelectorAll(".rp-grid-tile")],se=R.find(d=>Number(d.dataset.id)===c.id);if(!se){const d=`hsl(${c.id*47%360},60%,55%)`,k=Math.floor(Math.random()*R.length);R[k].dataset.id=c.id,R[k].innerHTML=(c.image_url?`<img src="${m(c.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${d}">${m((c.full_name??"?").charAt(0))}</div>`)+`<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${c.seat_no??""}</div>`,se=R[k]}y&&(y.textContent="กำลังสุ่ม..."),M.style.borderColor="#fbbf24";let ee=null,D=0,ae=38;const b=()=>{ee==null||ee.classList.remove("rp-active");const d=R[Math.floor(Math.random()*R.length)];d.classList.add("rp-active"),ee=d,D++,D<36?(ae=Math.min(ae*1.1,520),setTimeout(b,ae)):(ee==null||ee.classList.remove("rp-active"),se.classList.add("rp-winner"),y&&(y.textContent=`🎉 ที่ ${c.seat_no??""} ${c.full_name}`),se.scrollIntoView({behavior:"smooth",block:"nearest"}),setTimeout(()=>{t(M,c),z()},900))};b()}function S(i,c,z){const M=U.querySelector("#rp-stage"),y=U.querySelector("#rp-hint"),q=U.querySelector("#rp-elim-grid"),R=U.querySelector("#rp-elim-counter");if(!q)return r(i,c,z);y&&(y.textContent="กำลังตัดออก...");const se=i.filter(k=>k.id!==c.id).sort(()=>Math.random()-.5),ee=se.length;let D=i.length,ae=0;const b=k=>k<.55?50:k<.8?50+(k-.55)/.25*260:310+Math.pow((k-.8)/.2,2)*1400,d=()=>{if(ae>=ee){const N=q.querySelector(`[data-id="${c.id}"]`);N==null||N.classList.remove("rp-last"),N==null||N.classList.add("rp-winner"),N==null||N.scrollIntoView({behavior:"smooth",block:"nearest"}),y&&(y.textContent=`🎉 ที่ ${c.seat_no??""} ${c.full_name}`),R&&(R.textContent="เหลือ 1 คน!"),setTimeout(()=>{t(M,c),z()},900);return}const k=q.querySelector(`[data-id="${se[ae].id}"]`);k==null||k.classList.remove("rp-last"),k==null||k.classList.add("rp-eliminated"),D--,R&&(R.textContent=`เหลือ ${D} คน`),D<=4&&q.querySelectorAll(".rp-elim-tile:not(.rp-eliminated)").forEach(N=>N.classList.add("rp-last")),ae++,setTimeout(d,b(ae/(ee||1)))};d()}function B(i,c,z){const M=U.querySelector("#rp-stage"),y=U.querySelector("#rp-hint"),q=[U.querySelector("#rp-reel-0"),U.querySelector("#rp-reel-1"),U.querySelector("#rp-reel-2")];if(!q[0])return r(i,c,z);y&&(y.textContent="กำลังหมุน..."),M.style.borderColor="#fbbf24";const R=[i[Math.floor(Math.random()*i.length)],c,i[Math.floor(Math.random()*i.length)]],se=[18,28,22],ee=[!1,!1,!1],D=(k,N)=>{const O=k.querySelector(".rp-reel-inner");O&&(O.style.opacity="0",setTimeout(()=>{const g=`hsl(${N.id*47%360},60%,55%)`;O.innerHTML=`<div class="flex-1 w-full rounded-xl overflow-hidden">${N.image_url?`<img src="${m(N.image_url)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center font-bold text-white text-xl" style="background:${g}">${m((N.full_name??"?").charAt(0))}</div>`}</div><div class="text-[9px] font-bold text-gray-600 truncate w-full text-center leading-none mt-1">${m(N.full_name)}</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">${N.seat_no?`ที่ ${N.seat_no}`:"·"}</div>`,O.style.opacity="1"},30))};let ae=0,b=50;const d=()=>{ae++,q.forEach((k,N)=>{ee[N]||(ae===se[N]?(ee[N]=!0,setTimeout(()=>{D(k,R[N]),k.classList.add(N===1?"rp-winner-reel":"rp-locked"),N===1&&(y&&(y.textContent="🎉 ได้คนนี้แหละ!"),setTimeout(()=>{t(M,c),z()},900))},200)):D(k,i[Math.floor(Math.random()*i.length)]))}),ee[1]||(b=ae<12?50:Math.min(50*Math.pow(1.09,ae-12),450),setTimeout(d,b))};d()}const f=["#f59e0b","#ec4899","#6366f1","#10b981","#06b6d4","#ef4444","#8b5cf6","#f97316"],w=()=>{const i=u.map(c=>({no:c.no,student_ids:c.items.map(z=>z.id)}));tn(e,i).catch(()=>{})},h=(i,c)=>{const z=Number(i);let M=null;if(u.forEach(y=>{const q=y.items.findIndex(R=>R.id===z);q!==-1&&(M=y.items.splice(q,1)[0])}),M||(M=J.get(z)),!!M){if(c){const y=u.find(q=>q.no===c);y&&y.items.push(M)}W(),w()}};function W(){const i=new Set(u.flatMap(y=>y.items.map(q=>q.id))),c=l.filter(y=>!i.has(y.id)),z=(y,q)=>`
      <div class="relative">
        <select data-move="${y.id}" class="w-full appearance-none text-xs font-medium border border-gray-200 rounded-xl pl-3 pr-7 py-1.5 bg-gray-50 text-gray-600 hover:border-gray-300 focus:border-indigo-400 focus:bg-white outline-none transition cursor-pointer">
          <option value="0" ${q===0?"selected":""}>ยังไม่จัดกลุ่ม</option>
          ${u.map(R=>`<option value="${R.no}" ${R.no===q?"selected":""}>ย้ายไปกลุ่มที่ ${R.no}</option>`).join("")}
        </select>
        <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-[9px]">▾</span>
      </div>`,M=(y,q,R)=>`
      <div class="py-1.5 px-1.5 -mx-1.5 rounded-xl hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2.5 min-w-0">
          ${y.image_url?`<img src="${m(y.image_url)}" class="w-8 h-11 rounded-xl object-cover flex-shrink-0" style="box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;" />`:`<div class="w-8 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style="background:linear-gradient(160deg,${R},${R}cc);box-shadow:0 2px 8px rgba(0,0,0,.15),0 0 0 2px #fff;">${m((y.full_name??"?").charAt(0))}</div>`}
          <span class="text-sm font-medium text-gray-700 truncate flex-1 min-w-0">${m(y.full_name)}</span>
        </div>
        <div class="mt-1.5 pl-[calc(2rem+0.625rem)]">${z(y,q)}</div>
      </div>`;U.innerHTML=`
      <div class="flex items-center justify-between gap-2 mb-1 px-0.5">
        <p class="text-xs text-gray-400 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>บันทึกอัตโนมัติทุกการเปลี่ยนแปลง
        </p>
        <button id="rp-group-regen" class="px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">🎲 จัดกลุ่มใหม่</button>
      </div>
      ${c.length?`
      <div class="mt-3 rounded-2xl border border-amber-200/70 p-3.5" style="background:linear-gradient(135deg,#fffbeb,#fff7ed);">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px] flex-shrink-0">!</span>
          <p class="text-xs font-bold text-amber-700">ยังไม่ได้จัดกลุ่ม (${c.length} คน)</p>
        </div>
        <div>${c.map(y=>M(y,0,"#94a3b8")).join("")}</div>
      </div>`:""}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
        ${u.map((y,q)=>{const R=f[q%f.length];return`
          <div class="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
            <div class="px-3.5 py-2.5 text-white flex items-center justify-between" style="background:linear-gradient(135deg,${R},${R}dd);">
              <span class="text-sm font-bold flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center text-xs font-extrabold flex-shrink-0">${y.no}</span>
                กลุ่มที่ ${y.no}
              </span>
              <span class="text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-full flex-shrink-0">${y.items.length} คน</span>
            </div>
            <div class="p-2.5 divide-y divide-gray-50">
              ${y.items.length?y.items.map(se=>M(se,y.no,R)).join(""):`
                <div class="flex flex-col items-center justify-center py-6 text-gray-300">
                  <span class="text-2xl mb-1">🪄</span>
                  <span class="text-xs">ยังไม่มีใครในกลุ่มนี้</span>
                </div>`}
            </div>
          </div>`}).join("")}
      </div>
    `,U.querySelector("#rp-group-regen").addEventListener("click",async()=>{await Ze({title:"จัดกลุ่มใหม่?",message:"การจัดกลุ่มปัจจุบันจะถูกล้างทั้งหมด แล้วเริ่มสุ่มใหม่",confirmText:"จัดกลุ่มใหม่"})&&(u=null,Zs(e).catch(()=>{}),H())}),U.querySelectorAll("[data-move]").forEach(y=>{y.addEventListener("change",()=>h(y.dataset.move,Number(y.value)))})}function H(){let i="all",c=null,z=new Set(l.map(b=>b.id)),M="count";const y=()=>i==="present"?c?l.filter(b=>c.has(b.id)):[]:i==="manual"?l.filter(b=>z.has(b.id)):l;U.innerHTML=`
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
    `;const q=b=>{const d=[...b];for(let k=d.length-1;k>0;k--){const N=Math.floor(Math.random()*(k+1));[d[k],d[N]]=[d[N],d[k]]}return d},R=(b,d)=>{const k=q(b);if(!k.length)return[];if(M==="count"){const g=Math.min(d,k.length),X=Array.from({length:g},()=>[]);return k.forEach((ne,re)=>X[re%g].push(ne)),X}const N=Math.min(d,k.length),O=[];for(let g=0;g<k.length;g+=N)O.push(k.slice(g,g+N));return O},se=()=>{const b=y(),k=new Set(b.map(X=>X.gender).filter(Boolean)).size>1,N=U.querySelector("#rp-count-section");N.innerHTML=`
        <div class="flex items-center gap-2 mb-3">
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="count">📦 กำหนดจำนวนกลุ่ม</button>
          <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="size">👤 กำหนดคนต่อกลุ่ม</button>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <input id="rp-gnum" type="number" min="1" max="${Math.max(1,b.length)}" value="4"
            class="${we} w-24 flex-shrink-0 text-center font-bold text-lg" />
          <span id="rp-gnum-label" class="text-xs text-gray-400">กลุ่ม (จากทั้งหมด ${b.length} คน)</span>
        </div>
        ${k?`
        <label class="flex items-start gap-2.5 mb-4 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 cursor-pointer">
          <input id="rp-gender-split" type="checkbox" class="mt-0.5 w-4 h-4 rounded accent-pink-500" />
          <span class="text-xs text-gray-600 leading-relaxed">⚧ <strong>แยกกลุ่มตามเพศ</strong> — แต่ละกลุ่มจะมีนักเรียนเพศเดียวกันเท่านั้น (ไม่ติ๊ก = คละเพศได้ในกลุ่มเดียวกัน)</span>
        </label>`:""}
      `;const O=[...N.querySelectorAll(".rp-gmode-btn")],g=X=>{M=X,O.forEach(re=>{const ie=re.dataset.gmode===X;re.className=`rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${ie?"border-pink-300 bg-pink-50 text-pink-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`});const ne=N.querySelector("#rp-gnum-label");ne.textContent=X==="count"?`กลุ่ม (จากทั้งหมด ${b.length} คน)`:`คน/กลุ่ม (จากทั้งหมด ${b.length} คน)`,N.querySelector("#rp-gnum").value=4};O.forEach(X=>X.addEventListener("click",()=>g(X.dataset.gmode))),g("count")},ee=()=>{const b=U.querySelector("#rp-pool-info"),d=y().length;i==="all"?b.textContent=`ทั้งห้อง ${l.length} คน`:i==="present"?b.textContent=c===null?"กำลังโหลดข้อมูลเช็คชื่อวันนี้...":`มาเรียนวันนี้ ${d} คน${d===0?" (ยังไม่ได้เช็คชื่อวันนี้ หรือทุกคนขาด/ลา)":""}`:b.textContent=`เลือกไว้ ${d} คน`},D=()=>{const b=U.querySelector("#rp-pool-manual-list");b.innerHTML=`
        <div class="flex justify-end gap-2 mb-1.5">
          <button id="rp-manual-all" type="button" class="text-[11px] text-indigo-500 hover:underline">เลือกทั้งหมด</button>
          <button id="rp-manual-none" type="button" class="text-[11px] text-gray-400 hover:underline">ไม่เลือกเลย</button>
        </div>
        ${l.map(d=>`
          <label class="flex items-center gap-2 py-1 px-1 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="checkbox" class="rp-manual-cb w-3.5 h-3.5 rounded" data-sid="${d.id}" ${z.has(d.id)?"checked":""} />
            <span class="text-xs text-gray-700 truncate">${m(d.full_name)}</span>
          </label>
        `).join("")}
      `,b.querySelector("#rp-manual-all").addEventListener("click",()=>{z=new Set(l.map(d=>d.id)),D(),ee(),se()}),b.querySelector("#rp-manual-none").addEventListener("click",()=>{z=new Set,D(),ee(),se()}),b.querySelectorAll(".rp-manual-cb").forEach(d=>{d.addEventListener("change",()=>{const k=parseInt(d.dataset.sid,10);d.checked?z.add(k):z.delete(k),ee(),se()})})},ae=async b=>{if(i=b,U.querySelectorAll(".rp-pool-btn").forEach(d=>{const k=d.dataset.pool===b;d.className=`rp-pool-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${k?"border-amber-300 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-50"}`}),U.querySelector("#rp-pool-manual-list").classList.toggle("hidden",b!=="manual"),b==="manual"&&D(),b==="present"&&c===null){ee();try{const d=new Date(Date.now()+252e5).toISOString().slice(0,10),k=await en(e,d);c=new Set(k.filter(N=>N.status==="present"||N.status==="late").map(N=>N.student_id))}catch{c=new Set}}ee(),se()};U.querySelectorAll(".rp-pool-btn").forEach(b=>b.addEventListener("click",()=>ae(b.dataset.pool))),ae("all"),U.querySelector("#rp-group-go").addEventListener("click",()=>{var g;if(!p){const X=parseInt(localStorage.getItem("pp5_free_random_count")||"0",10);if(X>=_){T();return}localStorage.setItem("pp5_free_random_count",String(X+1))}const b=y();if(!b.length){Q("ยังไม่มีนักเรียนในกลุ่มที่เลือกไว้","warning");return}const d=Math.max(1,parseInt(U.querySelector("#rp-gnum").value,10)||1),k=!!((g=U.querySelector("#rp-gender-split"))!=null&&g.checked);let N;k?N=[b.filter(X=>X.gender==="ชาย"),b.filter(X=>X.gender==="หญิง"),b.filter(X=>X.gender!=="ชาย"&&X.gender!=="หญิง")].filter(X=>X.length):N=[b];let O=1;u=N.flatMap(X=>R(X,d).map(ne=>({no:O++,items:ne}))),W(),w()})}function Z(){u?W():H()}j("pick")}async function ms(e,a,l,p,C,_,T,P,$="info"){var Z,te;(Z=document.getElementById("combined-edit-modal"))==null||Z.remove();const[G,L]=await Promise.all([Ie(a.id).catch(()=>[]),ve().catch(()=>({}))]),J=n=>n?"cem-tab px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px":"cem-tab px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition",u="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200",A=[...new Set(l.map(n=>n.building))].sort(),K=a.classroom_id?l.find(n=>n.id===a.classroom_id):null,V=C[a.id]??[],oe=["","จ","อ","พ","พฤ","ศ","ส","อา"],F=document.createElement("div");F.id="combined-edit-modal",F.className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50 p-4",F.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-0 flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขห้องเรียน</h3>
        <button id="cem-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <p class="text-xs text-gray-400 px-6 pb-3 flex-shrink-0">${m(((te=a.master_subjects)==null?void 0:te.subject_name)??"")} · ${m(a.class_name??"")}</p>
      <div class="flex border-b border-gray-100 px-6 flex-shrink-0">
        <button class="${J(!0)}" data-cem="info">ข้อมูลพื้นฐาน</button>
        <button class="${J(!1)}" data-cem="schedule">ตารางสอน</button>
        <button class="${J(!1)}" data-cem="room">ห้องสอน</button>
      </div>
      <div id="cem-content" class="flex-1 overflow-y-auto px-6 py-4"></div>
      <div class="px-6 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="cem-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>
    </div>`,document.body.appendChild(F);let U=!1,le=!1,j=null,E=!1;const v=n=>{const i=F.querySelector("#cem-info-status");if(!i)return;const c={dirty:{cls:"text-amber-500",text:"● มีการเปลี่ยนแปลง"},saving:{cls:"text-indigo-500",text:"⏳ กำลังบันทึก..."},saved:{cls:"text-emerald-600",text:"✅ บันทึกแล้ว"},error:{cls:"text-red-500",text:"⚠️ บันทึกไม่สำเร็จ"}},z=c[n]??c.saved;i.className=`text-xs font-medium ${z.cls}`,i.textContent=z.text,i.classList.remove("hidden")},Y=async()=>{var n,i,c,z,M,y,q;if(F.querySelector("#cem-classname")){le=!0,v("saving");try{const R=(n=F.querySelector("#cem-source-class"))==null?void 0:n.value;await Ye(a.id,{class_name:F.querySelector("#cem-classname").value.trim()||a.class_name,skill_group:F.querySelector("#cem-skillgroup").value.trim()||null,google_sheet_id:F.querySelector("#cem-sheetid").value.trim()||null,head_student_id:F.querySelector("#cem-head").value?Number(F.querySelector("#cem-head").value):null,day1_date:((i=F.querySelector("#cem-day1"))==null?void 0:i.value)||null,day2_date:((c=F.querySelector("#cem-day2"))==null?void 0:c.value)||null,day3_date:((z=F.querySelector("#cem-day3"))==null?void 0:z.value)||null,day4_date:((M=F.querySelector("#cem-day4"))==null?void 0:M.value)||null,day5_date:((y=F.querySelector("#cem-day5"))==null?void 0:y.value)||null,day6_date:((q=F.querySelector("#cem-day6"))==null?void 0:q.value)||null,source_class_id:R?Number(R):null}),U=!1,E=!0,v("saved")}catch{v("error")}finally{le=!1}}},I=(n=!1)=>{U=!0,v("dirty"),clearTimeout(j),j=setTimeout(Y,n?0:800)},s=()=>{const n=G.map(i=>`<option value="${i.id}" data-code="${m(i.student_code)}" data-img="${m(i.image_url??"")}" data-room="${m(i.main_room??"")}"
         ${Number(a.head_student_id)===Number(i.id)?"selected":""}>
         ${m(i.full_name)} (${m(i.student_code)})</option>`).join("");return`
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง / ระดับชั้น</label>
        <input id="cem-classname" type="text" value="${m(a.class_name??"")}" class="${u}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">กลุ่มทักษะ</label>
        <input id="cem-skillgroup" type="text" value="${m(a.skill_group??"")}" placeholder="เช่น วิชาการ, ภาษา, ชีวิต" class="${u}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">Google Sheet ID</label>
        <input id="cem-sheetid" type="text" value="${m(a.google_sheet_id??"")}" placeholder="ID จาก URL ของ Sheet" class="${u} font-mono" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">หัวหน้าห้อง</label>
        <select id="cem-head" class="${u} bg-white">
          <option value="">— ยังไม่ระบุ —</option>
          ${n}
        </select>
        ${G.length===0?'<p class="text-xs text-amber-500 mt-1">ยังไม่มีนักเรียนในห้อง จึงยังเลือกหัวหน้าไม่ได้</p>':""}
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
          ${[1,2,3,4,5,6].map(i=>`
          <div>
            <p class="text-xs text-gray-400 mb-1">คาบที่ ${i}</p>
            <input id="cem-day${i}" type="date" value="${a[`day${i}_date`]??""}"
              class="w-full border border-gray-200 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>`).join("")}
        </div>
      </div>
      <!-- ใช้ข้อมูลจากห้องเรียนอื่น -->
      <div class="border-t border-gray-100 pt-3">
        <label class="block text-xs font-semibold text-gray-600 mb-1">🔗 ใช้ข้อมูลจากห้องเรียนอื่น</label>
        <p class="text-xs text-gray-400 mb-2">สำหรับวิชาที่ไม่ได้สอนจริง — ปพ.5 จะดึงการเช็คชื่อและคะแนน (เฉพาะที่กรอกเอง) จากห้องที่เลือก</p>
        <select id="cem-source-class" class="${u} text-xs">
          <option value="">— ไม่ได้ใช้ข้อมูลจากห้องอื่น —</option>
        </select>
        <p id="cem-source-info" class="hidden text-xs text-amber-600 mt-1"></p>
      </div>
      <p id="cem-info-status" class="hidden text-xs font-medium text-emerald-600"></p>
    </div>`},o=new Set(V),t=new Set(V);e!=null&&e.id&&ot(e.id,a.id).then(n=>{const i=F.querySelector("#cem-source-class");if(!i)return;n.forEach(z=>{const M=z.master_subjects,y=`${(M==null?void 0:M.subject_name)??"?"} (${(M==null?void 0:M.subject_code)??""}) — ${z.class_name} · ${(M==null?void 0:M.credit)??"?"} หน่วยกิต`,q=new Option(y,z.id,!1,Number(z.id)===Number(a.source_class_id));i.appendChild(q)});const c=z=>{var se,ee;const M=F.querySelector("#cem-source-info");if(!M)return;const y=n.find(D=>Number(D.id)===Number(z));if(!y){M.classList.add("hidden");return}const q=((se=y.master_subjects)==null?void 0:se.credit)??1,R=((ee=a.master_subjects)==null?void 0:ee.credit)??1;q!==R?(M.textContent=`⚠️ หน่วยกิตต่างกัน (แหล่ง ${q} / วิชานี้ ${R}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`,M.classList.remove("hidden")):M.classList.add("hidden")};a.source_class_id&&c(a.source_class_id),i.addEventListener("change",()=>{c(i.value),I(!0)})}).catch(()=>{});const r={};Object.entries(C).forEach(([n,i])=>{i.forEach(c=>{r[c]||(r[c]=[]),r[c].push(Number(n))})});const x=Object.fromEntries((window._classesFlat??[]).map(n=>[n.id,n])),S=()=>{const n=p.filter(D=>!D.is_free);if(!n.length)return'<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อน</p>';const c=L.hasFriday==="true"?6:5,z=Array.from({length:c},(D,ae)=>ae),M=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],y=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50"],q={};n.forEach(D=>{q[`${D.day_of_week}-${D.period_no}`]=D;const ae=D.span_periods??1;for(let b=1;b<ae;b++)q[`${D.day_of_week}-${D.period_no+b}`]={...D,_secondary:!0}});const R=Object.values(_).sort((D,ae)=>D.period_no-ae.period_no),se=D=>t.has(D)?"selected":(r[D]??[]).filter(b=>b!==a.id).length?"other":"none",ee=(D,ae)=>{const b=D.subject_name?m(D.subject_name):"",d=D.class_name?m(D.class_name):"";return ae==="selected"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
          <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${b}</p>
          ${d?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${d}</p>`:""}
        </div>`:ae==="other"?`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
          style="min-height:52px;border-left:3px solid #60a5fa"
          title="คลิกเพื่อเชื่อมร่วมกับ: ${(r[D.id]??[]).filter(O=>O!==a.id).map(O=>{var g;return((g=x[O])==null?void 0:g.class_name)??`ห้อง ${O}`}).join(", ")}">
          <p class="font-bold text-[11px] leading-tight text-blue-600 break-words w-full">${b}</p>
          ${d?`<p class="text-[10px] text-blue-400 leading-tight w-full">${d}</p>`:""}
          <p class="text-[9px] text-blue-400 mt-0.5">+เชื่อมร่วม</p>
        </div>`:`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
        bg-white hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400 transition-all"
        style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${b}</p>
        ${d?`<p class="text-[10px] text-gray-400 leading-tight w-full">${d}</p>`:""}
      </div>`};return`
      <p class="text-xs text-gray-400 mb-2">คลิกคาบที่ต้องการเชื่อมโยง — กดบันทึกเพื่อยืนยัน</p>
      <div class="overflow-auto rounded-xl border border-gray-100" style="max-height:55vh">
        <table class="w-full text-xs border-collapse" style="min-width:300px">
          <thead class="sticky top-0 z-10">
            <tr class="bg-gray-50">
              <th class="border border-gray-100 px-2 py-2 text-center text-gray-400 w-16 font-medium text-[10px]">คาบ</th>
              ${z.map(D=>`<th class="border border-gray-100 px-1 py-2 text-center font-semibold text-gray-700 text-[11px] ${y[D]}">${M[D]}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${R.map(D=>{var ae;return`
            <tr>
              <td class="border border-gray-100 px-1 py-2 text-center bg-gray-50 align-middle">
                <p class="font-bold text-gray-700 text-[10px]">คาบ ${D.period_no}</p>
                <p class="text-[9px] text-gray-400">${((ae=D.start_time)==null?void 0:ae.slice(0,5))??""}</p>
              </td>
              ${z.map(b=>{const d=`${b}-${D.period_no}`,k=q[d];if(k!=null&&k._secondary)return"";if(!k)return'<td class="border border-gray-100 p-0" style="min-width:56px;height:1px"></td>';const N=k.span_periods??1,O=se(k.id);return`<td class="border border-gray-100 p-0 cursor-pointer cem-srow"
                  data-sid="${k.id}" data-state="${O}"
                  style="min-width:56px;height:1px" ${N>1?`rowspan="${N}"`:""}>
                  ${ee(k,O)}
                </td>`}).join("")}
            </tr>`}).join("")}
          </tbody>
        </table>
      </div>`},B=n=>{const i=parseInt(n.dataset.sid),c=p.find(R=>R.id===i);if(!c)return;const z=(r[i]??[]).filter(R=>R!==a.id),M=t.has(i)?"selected":z.length?"other":"none";n.dataset.state=M;const y=c.subject_name?m(c.subject_name):"",q=c.class_name?m(c.class_name):"";if(M==="selected")n.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
        <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${y}</p>
        ${q?`<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${q}</p>`:""}
      </div>`;else if(M==="other"){const R=z.map(se=>{var ee;return((ee=x[se])==null?void 0:ee.class_name)??`ห้อง ${se}`}).join(", ");n.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-gray-100 opacity-50" style="min-height:52px;border-left:3px solid #9ca3af" title="ใช้กับ: ${R}">
        <p class="font-bold text-[11px] leading-tight text-gray-400 break-words w-full">${y}</p>
        ${q?`<p class="text-[10px] text-gray-400 leading-tight w-full">${q}</p>`:""}
      </div>`}else n.innerHTML=`<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-white hover:bg-emerald-50 transition-all" style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${y}</p>
        ${q?`<p class="text-[9px] text-gray-400 leading-tight">${q}</p>`:""}
      </div>`},f=()=>{F.querySelectorAll(".cem-srow").forEach(n=>{n.addEventListener("click",async()=>{const i=parseInt(n.dataset.sid),c=n.dataset.state,z=p.find(M=>M.id===i);if(z)if(c==="other"){const y=(r[i]??[]).filter(ee=>ee!==a.id).map(ee=>{var D;return((D=x[ee])==null?void 0:D.class_name)??`ห้อง ${ee}`}).join(", "),q=_[z.period_no],R=q!=null&&q.start_time?q.start_time.slice(0,5):`คาบ ${z.period_no}`,se=document.createElement("div");se.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",se.innerHTML=`
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 text-center">
              <div class="text-2xl mb-2">🔗</div>
              <p class="font-bold text-gray-800 mb-1">คาบนี้ใช้กับห้องอื่นอยู่</p>
              <p class="text-sm text-gray-500 mb-1">${oe[z.day_of_week]} ${R} · ${m(z.subject_name??"")}</p>
              <p class="text-xs text-gray-500 mb-1">เชื่อมอยู่กับ: <b>${y}</b></p>
              <p class="text-xs text-emerald-600 mb-4">สามารถเชื่อมร่วมกันได้ เช่น กรณีสอนสองห้องพร้อมกัน</p>
              <div class="flex gap-3">
                <button class="cfm-cancel flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
                <button class="cfm-ok flex-1 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold">เชื่อมร่วมกัน</button>
              </div>
            </div>`,document.body.appendChild(se),se.querySelector(".cfm-cancel").addEventListener("click",()=>se.remove()),se.querySelector(".cfm-ok").addEventListener("click",async()=>{se.remove();try{await We(a.id,i),t.add(i),o.add(i),E=!0,B(n),Q(`เชื่อมร่วมกับ ${y} แล้ว ✅`,"success")}catch(ee){Q("เชื่อมไม่สำเร็จ: "+(ee.message??""),"error")}})}else if(c==="selected")try{await Qs(a.id,i),t.delete(i),o.delete(i),E=!0,B(n),Q("ยกเลิกการเชื่อมแล้ว","info")}catch(M){Q("ยกเลิกไม่สำเร็จ: "+(M.message??""),"error")}else try{await We(a.id,i),t.add(i),o.add(i),E=!0,B(n),Q("เชื่อมตารางสอนแล้ว ✅","success")}catch(M){Q("เชื่อมไม่สำเร็จ: "+(M.message??""),"error")}})})},w=()=>`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
        <select id="cem-building" class="${u} bg-white">
          <option value="">— ไม่ระบุ —</option>
          ${A.map(n=>`<option value="${n}" ${(K==null?void 0:K.building)===n?"selected":""}>${n}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
        <select id="cem-room" class="${u} bg-white">
          <option value="">— เลือกอาคารก่อน —</option>
        </select>
      </div>
    </div>`,h=()=>{var z;const n=F.querySelector("#cem-head"),i=F.querySelector("#cem-head-card"),c=()=>{const M=n==null?void 0:n.options[n.selectedIndex];if(!(M!=null&&M.value)){i==null||i.classList.add("hidden");return}const y=M.text.split(" (")[0],q=M.dataset.img??"";F.querySelector("#cem-head-name").textContent=y,F.querySelector("#cem-head-code").textContent=`รหัส: ${M.dataset.code??""}`,F.querySelector("#cem-head-room").textContent=M.dataset.room?`ห้อง: ${M.dataset.room}`:"";const R=F.querySelector("#cem-head-avatar");R.innerHTML=q?`<img src="${q}" class="w-full h-full object-cover" />`:`<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${y.charAt(0)}</div>`,i==null||i.classList.remove("hidden")};n==null||n.addEventListener("change",()=>{c(),I(!0)}),n!=null&&n.value&&c(),["cem-classname","cem-skillgroup","cem-sheetid"].forEach(M=>{var y;(y=F.querySelector(`#${M}`))==null||y.addEventListener("input",()=>I())}),[1,2,3,4,5,6].forEach(M=>{var y;(y=F.querySelector(`#cem-day${M}`))==null||y.addEventListener("change",()=>I(!0))}),(z=F.querySelector("#cem-auto-dates"))==null||z.addEventListener("click",async()=>{const M=F.querySelector("#cem-auto-dates"),y=F.querySelector("#cem-dates-info");M.textContent="⏳",M.disabled=!0;try{const q=parseInt(L.academicYear??2568),R=parseInt(L.semester??1),se=L.semester_start??L.term_start_date??Lt(new Date),ee=e?await Re(e.id,q,R).catch(()=>[]):[];if(!ee.length){y.textContent="⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง",y.classList.remove("hidden");return}const D={};ee.filter(k=>!k.is_free).forEach(k=>{const N=`${k.subject_name??"?"}|${k.class_name??""}`;D[N]||(D[N]={label:`${k.subject_name??"?"}${k.class_name?` — ${k.class_name}`:""}`,entries:[]}),D[N].entries.push(k)});const ae=["อา","จ","อ","พ","พฤ","ศ","ส"],b=k=>{const N={};return k.forEach(O=>{N[O.day_of_week]||(N[O.day_of_week]=[]),N[O.day_of_week].push(O.period_no)}),Object.entries(N).map(([O,g])=>`${ae[O]} คาบ ${g.join(",")}`).join(" · ")},d=document.createElement("div");d.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4",d.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
            <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
              <button class="ce-close text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
              <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
              ${Object.entries(D).map(([k,N])=>`
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
                <input type="radio" name="cem-dates-subj" value="${m(k)}" class="mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-800">${m(N.label)}</p>
                  <p class="text-xs text-gray-400 mt-0.5">${b(N.entries)}</p>
                </div>
              </label>`).join("")}
            </div>
            <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
              <button class="ce-close flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="cem-calc-btn" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
            </div>
          </div>`,document.body.appendChild(d),d.querySelectorAll(".ce-close").forEach(k=>k.addEventListener("click",()=>d.remove())),d.querySelector("#cem-calc-btn").addEventListener("click",()=>{var ie;const k=(ie=d.querySelector('input[name="cem-dates-subj"]:checked'))==null?void 0:ie.value;if(!k){Q("กรุณาเลือกวิชาก่อน","warning");return}d.remove();const N=D[k];if(!N)return;const O=yn(se)??new Date,g=O.getDay(),X=[];N.entries.forEach(de=>{const ce=de.span_periods??1;for(let ue=0;ue<ce;ue++)X.push({dow:de.day_of_week,pno:(de.period_no??0)+ue})}),X.sort((de,ce)=>{const ue=(de.dow-g+7)%7,he=(ce.dow-g+7)%7;return ue!==he?ue-he:de.pno-ce.pno});const ne=[];let re=0;for(;ne.length<6;){for(const de of X){const ce=new Date(O);if(ce.setDate(ce.getDate()+(de.dow-g+7)%7+re*7),ne.push(ce),ne.length>=6)break}re++}ne.slice(0,6).forEach((de,ce)=>{const ue=F.querySelector(`#cem-day${ce+1}`);ue&&(ue.value=Lt(de))}),I(!0),y.textContent=`✅ คำนวณจาก "${N.label}" — ตรวจสอบและแก้ไขได้`,y.classList.remove("hidden")})}catch(q){y.textContent="โหลดตารางไม่สำเร็จ: "+(q.message??""),y.classList.remove("hidden")}finally{M.textContent="🗓️ คำนวณจากตารางสอน",M.disabled=!1}})},W=n=>{if(le){Q("กำลังบันทึกข้อมูล รอสักครู่...","warning");return}if(U){Q("มีข้อมูลที่ยังไม่ถูกบันทึก กรุณารอระบบบันทึกก่อน","warning");return}F.querySelectorAll(".cem-tab").forEach(c=>{c.className=J(c.dataset.cem===n)});const i=F.querySelector("#cem-content");if(n==="info")i.innerHTML=s(),h();else if(n==="schedule")i.innerHTML=S(),f();else{i.innerHTML=w();const c=i.querySelector("#cem-building"),z=i.querySelector("#cem-room"),M=y=>{const q=l.filter(R=>R.building===y);z.innerHTML='<option value="">— เลือกห้อง —</option>'+q.map(R=>`<option value="${R.id}" ${R.id===a.classroom_id?"selected":""}>${R.room_number}${R.name?` — ${R.name}`:""}</option>`).join("")};K!=null&&K.building&&M(K.building),c.addEventListener("change",()=>M(c.value)),z.addEventListener("change",async()=>{const y=z.value?parseInt(z.value):null;await Qt(a.id,y).catch(()=>{}),E=!0,Q("บันทึกห้องสอนแล้ว ✅","success")})}},H=async()=>{(U||le)&&(clearTimeout(j),await Y().catch(()=>{})),F.remove(),E&&P&&P()};W($),F.querySelectorAll(".cem-tab").forEach(n=>n.addEventListener("click",()=>W(n.dataset.cem))),F.querySelector("#cem-close").addEventListener("click",H),F.querySelector("#cem-cancel").addEventListener("click",H),F.addEventListener("click",n=>{n.target===F&&H()})}async function Fn(e){$e("schedule"),ke("ตารางสอน","schedule");const a=await ve().catch(()=>({})),l=parseInt(a.academicYear??2568),p=parseInt(a.semester??1);await qe(e,l,p,a)}async function qe(e,a,l,p=null){var Y,I;$e("schedule"),ke("ตารางสอน","schedule");const C=p??await ve().catch(()=>({})),_=C.hasFriday==="true",T=C.scheduleVisionEnabled==="true",P=ts(C,e),[$,G,L,J,u,A]=await Promise.all([et().catch(()=>[]),e?Ut(e.id).catch(()=>[]):Promise.resolve([]),e?Re(e.id,a,l).catch(()=>[]):Promise.resolve([]),e?pt(e.id).catch(()=>[]):Promise.resolve([]),e?ct(e.id).catch(()=>[]):Promise.resolve([]),e?dt(e.id).catch(()=>[]):Promise.resolve([])]),K=Object.fromEntries((J??[]).map(s=>[s.room_key,s.color_hex])),V=Object.fromEntries(A.map(s=>[s.id,s])),oe={};u.forEach(s=>{oe[s.teacher_schedule_id]||(oe[s.teacher_schedule_id]=V[s.class_id])});const F=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],U=["bg-red-50","bg-yellow-50","bg-pink-50","bg-green-50","bg-orange-50","bg-purple-50","bg-blue-50"],le=_?6:5,j=Array.from({length:le},(s,o)=>o),E={};for(const s of L)E[`${s.day_of_week}-${s.period_no}`]=s,(s.span_periods??1)>1&&(E[`${s.day_of_week}-${s.period_no+1}`]={...s,_secondary:!0});const v=(s={},o=null)=>{var r;const t=s!=null&&s.id?oe[s.id]:null;return Be({teacherId:e==null?void 0:e.id,className:(t==null?void 0:t.class_name)??s.class_name,subjectName:((r=t==null?void 0:t.master_subjects)==null?void 0:r.subject_name)??s.subject_name??(o==null?void 0:o.subject_name),fallbackId:(t==null?void 0:t.id)??s.subject_id??(o==null?void 0:o.id)},K)};be(`<div class="max-w-full animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${l} / ${a} — คลิกช่องเพื่อกำหนดวิชา</p>
      </div>
      <div class="flex gap-2">
        ${T&&P?`
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
            ${j.map(s=>`
            <th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${U[s]}">
              ${F[s]}
            </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${$.map(s=>{var o,t;return`
          <tr class="hover:bg-gray-50/50">
            <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50">
              <p class="font-bold text-gray-700">คาบ ${s.period_no}</p>
              <p class="text-[10px] text-gray-400">${(o=s.start_time)==null?void 0:o.slice(0,5)}–${(t=s.end_time)==null?void 0:t.slice(0,5)}</p>
            </td>
            ${j.map(r=>{const x=`${r}-${s.period_no}`,S=E[x];if(S!=null&&S._secondary)return"";const B=S?G.find(Z=>Z.id===S.subject_id):null,f=(S==null?void 0:S.span_periods)??1,w=(S==null?void 0:S.subject_name)??(B==null?void 0:B.subject_name)??null,h=(S==null?void 0:S.class_name)??null,W=(S==null?void 0:S.teacher_name)??null,H=v(S,B);return`<td class="border border-gray-100 p-0 cursor-pointer
                hover:bg-indigo-50/30 transition-colors schedule-cell"
                style="height:1px"
                data-dow="${r}" data-period="${s.period_no}"
                ${f>1?`rowspan="${f}"`:""}>
                ${w?`
                <div class="w-full h-full rounded-none flex flex-col justify-center items-center
                  gap-1 px-2 py-2 text-center" style="min-height:64px;background:${H.soft};color:${H.text};border-left:4px solid ${H.dot}">
                  <p class="font-extrabold leading-tight text-sm break-words w-full">${w}</p>
                  ${h?`<p class="text-[11px] font-semibold opacity-90 leading-tight w-full">${h}</p>`:""}
                  ${W?`<p class="text-[10px] opacity-65 leading-tight w-full">${W}</p>`:""}
                </div>`:`
                <div class="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style="min-height:52px">
                  <span class="text-indigo-200 text-2xl">＋</span>
                </div>`}
              </td>`}).join("")}
          </tr>`}).join("")}
        </tbody>
      </table>
    </div>

  </div>`),document.querySelectorAll(".schedule-cell").forEach(s=>{s.addEventListener("click",()=>{const o=parseInt(s.dataset.dow),t=parseInt(s.dataset.period),r=`${o}-${t}`,x=E[r];x!=null&&x._secondary||Gn({teacher:e,dow:o,period:t,periods:$,subjects:G,entry:x,academicYear:a,semester:l,roomColorMap:K,onSave:async S=>{await Xt({teacher_id:e.id,...S}),await qe(e,a,l,C)},onDelete:async()=>{x&&await sn(x.id),await qe(e,a,l,C)}})})}),(Y=document.getElementById("btn-clear-schedule"))==null||Y.addEventListener("click",async()=>{confirm("ยืนยันล้างตารางสอนทั้งหมด?")&&(await Cs(e.id,a,l),await qe(e,a,l,C),Q("ล้างตารางแล้ว","success"))}),(I=document.getElementById("btn-upload-schedule"))==null||I.addEventListener("click",()=>{xs(e,G,$,a,l,P,C)})}async function Gn({teacher:e,dow:a,period:l,periods:p,subjects:C,entry:_,academicYear:T,semester:P,roomColorMap:$={},onSave:G,onDelete:L}){var S,B;(S=document.getElementById("sched-popup"))==null||S.remove();const J=await Wt().catch(()=>[]),u=await Yt().catch(()=>[]),A=[...new Set([...J,...u])].sort(),K=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],V=p.map(f=>f.period_no),oe=p.find(f=>f.period_no===l),F=(_==null?void 0:_.subject_name)??(_!=null&&_.subject_id?((B=C.find(f=>f.id===_.subject_id))==null?void 0:B.subject_name)??"":"");let U=F,le=(_==null?void 0:_.class_name)??"",j=(_==null?void 0:_.teacher_name)??"",E=Be({teacherId:e==null?void 0:e.id,className:le,subjectName:F,fallbackId:_==null?void 0:_.subject_id},$).dot,v=!1;const Y=C.map(f=>`<option value="${f.subject_name}">`).join(""),I=A.map(f=>`<option value="${f}">`).join(""),s=K.map((f,w)=>`<option value="${w}">${f}</option>`).join(""),o=V.map(f=>`<option value="${f}">คาบ ${f}</option>`).join("");let t=_?[{day_of_week:_.day_of_week,period_no:_.period_no,span_periods:_.span_periods??1}]:[{day_of_week:a,period_no:l,span_periods:1}];const r=document.createElement("div");r.id="sched-popup",r.className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",document.body.appendChild(r);function x(){var w,h,W;const f=De(E);r.innerHTML=`
      <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">กำหนดวิชา</h3>
            <p class="text-xs text-gray-400">${K[a]} คาบ ${l}${oe?` (${(w=oe.start_time)==null?void 0:w.slice(0,5)}–${(h=oe.end_time)==null?void 0:h.slice(0,5)})`:""}</p>
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
                    ${He.map(H=>`
                    <button type="button"
                      class="sp-color-option w-8 h-8 rounded-full border-2 ${H.dot.toLowerCase()===E.toLowerCase()?"border-gray-800":"border-white"} shadow-sm"
                      style="background:${H.dot}"
                      data-color="${H.dot}"
                      title="เลือกสี"></button>`).join("")}
                  </div>
                </div>`:""}
              </div>
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
                  <input id="sp-subj-name" list="sp-subj-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                    value="${m(U)}" placeholder="ชื่อวิชา" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
                  <input id="sp-class" list="sp-room-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    value="${m(le)}" placeholder="ชั้น/ห้อง เช่น ม.6/2" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
                  <input id="sp-teacher" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                    value="${m(j)}" placeholder="ชื่อครู (ไม่บังคับ)" />
                  <button id="sp-hide-teacher" type="button" class="text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap">ไม่แสดง</button>
                </div>
              </div>
            </div>
            <!-- Sessions -->
            <div id="sp-sessions" class="px-4 pt-3 pb-2 space-y-1.5">
              ${t.map((H,Z)=>`
              <div class="flex items-center gap-1.5 sp-sess-row" data-si="${Z}">
                <select class="sp-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${Z}">
                  ${s}
                </select>
                <select class="sp-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${Z}">
                  ${o}
                </select>
                <select class="sp-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-si="${Z}">
                  <option value="1">1 คาบ</option>
                  <option value="2">2 คาบ</option>
                  <option value="3">3 คาบ</option>
                  <option value="4">4 คาบ</option>
                </select>
                <button type="button" class="sp-del-sess text-red-300 hover:text-red-500 text-base" data-si="${Z}">✕</button>
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
              ${_?`<button id="sp-delete" type="button"
                class="py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50">ลบ</button>`:""}
            </div>
          </div>
          <datalist id="sp-subj-list">${Y}</datalist>
          <datalist id="sp-room-list">${I}</datalist>
        </div>
        <!-- Global cancel -->
        <div class="px-5 pb-5 pt-2 border-t border-gray-100 flex-shrink-0">
          <button id="sp-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`,t.forEach((H,Z)=>{const te=r.querySelector(`.sp-sess-row[data-si="${Z}"]`);te&&(te.querySelector(".sp-dow").value=H.day_of_week??a,te.querySelector(".sp-period").value=H.period_no??l,te.querySelector(".sp-span").value=H.span_periods??1)}),r.querySelector("#sp-close").addEventListener("click",()=>r.remove()),r.querySelector("#sp-cancel").addEventListener("click",()=>r.remove()),r.querySelector("#sp-subj-name").addEventListener("input",H=>{U=H.target.value}),r.querySelector("#sp-class").addEventListener("input",H=>{le=H.target.value}),r.querySelector("#sp-teacher").addEventListener("input",H=>{j=H.target.value}),r.querySelector("#sp-color").addEventListener("click",()=>{v=!v,x()}),r.querySelector("#sp-hide-teacher").addEventListener("click",()=>{j="",r.querySelector("#sp-teacher").value=""}),r.querySelectorAll(".sp-color-option").forEach(H=>H.addEventListener("click",()=>{E=H.dataset.color,v=!1,x()})),r.querySelectorAll(".sp-dow").forEach(H=>H.addEventListener("change",()=>{t[+H.dataset.si].day_of_week=+H.value})),r.querySelectorAll(".sp-period").forEach(H=>H.addEventListener("change",()=>{t[+H.dataset.si].period_no=+H.value})),r.querySelectorAll(".sp-span").forEach(H=>H.addEventListener("change",()=>{t[+H.dataset.si].span_periods=+H.value})),r.querySelectorAll(".sp-del-sess").forEach(H=>H.addEventListener("click",()=>{t.splice(+H.dataset.si,1),t.length||t.push({day_of_week:a,period_no:l,span_periods:1}),x()})),r.querySelector("#sp-add-sess").addEventListener("click",()=>{t.push({day_of_week:a,period_no:V[0]??l,span_periods:1}),x()}),(W=r.querySelector("#sp-delete"))==null||W.addEventListener("click",async()=>{r.remove(),await L()}),r.querySelector("#sp-save").addEventListener("click",async()=>{var i,c,z,M;const H=r.querySelector("#sp-subj-name").value.trim()||null,Z=r.querySelector("#sp-class").value.trim()||null,te=r.querySelector("#sp-teacher").value.trim()||null,n=((i=C.find(y=>y.subject_name===H))==null?void 0:i.id)??null;if(Z||H||n)try{await Jt({teacher_id:e.id,room_key:tt({className:Z,subjectName:H,fallbackId:n}),class_name:Z,color_hex:E})}catch(y){Q("บันทึกสีไม่ได้: "+(y.message??""),"warning")}r.remove(),await G({day_of_week:((c=t[0])==null?void 0:c.day_of_week)??a,period_no:((z=t[0])==null?void 0:z.period_no)??l,span_periods:((M=t[0])==null?void 0:M.span_periods)??1,subject_id:n,subject_name:H,class_name:Z,teacher_name:te,note:null,academic_year:T,semester:P})})}x()}async function xs(e,a,l,p,C,_,T){var le;(le=document.getElementById("vision-upload"))==null||le.remove();const P=await Wt().catch(()=>[]),$=await Yt().catch(()=>[]),G=[...new Set([...P,...$])].sort(),L=e!=null&&e.id?await pt(e.id).catch(()=>[]):[],J=Object.fromEntries((L??[]).map(j=>[j.room_key,j.color_hex])),u=document.createElement("div");u.id="vision-upload",u.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",u.innerHTML=`
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
    </div>`,document.body.appendChild(u),u.querySelector("#vision-cancel").addEventListener("click",()=>u.remove()),u.querySelector("#vision-close").addEventListener("click",()=>u.remove());let A=null,K="image/jpeg",V=[];const oe=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],F=l.map(j=>j.period_no);function U(){const j=u.querySelector("#vision-groups");if(!j)return;const E=oe.map((s,o)=>`<option value="${o}">${s}</option>`).join(""),v=F.map(s=>`<option value="${s}">คาบ ${s}</option>`).join(""),Y=a.map(s=>`<option value="${s.subject_name}">`).join(""),I=G.map(s=>`<option value="${s}">`).join("");j.innerHTML="",V.forEach((s,o)=>{const t=s.color_hex?De(s.color_hex):Be({teacherId:e==null?void 0:e.id,className:s.class_name,subjectName:s.subject_name,fallbackId:s.subject_id},J),r=document.createElement("div");r.className="border-2 rounded-xl overflow-hidden vg-card",r.style.borderColor=t.dot,r.innerHTML=`
        <!-- Group header -->
        <div class="px-4 py-3 flex items-start gap-3" style="background:${t.dot}18">
          <button type="button" class="vg-color w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow mt-0.5"
            style="background:${t.dot}" title="สีประจำห้อง" data-gi="${o}"></button>
          <div class="flex-1 space-y-1.5 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
              <input list="subj-list-${o}" class="vg-subj-name flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                value="${s.subject_name??""}" placeholder="ชื่อวิชา" data-gi="${o}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
              <input list="room-list-${o}" class="vg-class flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                value="${s.class_name??""}" placeholder="ชั้น/ห้อง เช่น ม.6/2" data-gi="${o}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
              <input class="vg-teacher flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                value="${s.teacher_name??""}" placeholder="ชื่อครู (ไม่บังคับ)" data-gi="${o}" />
              <button type="button" class="vg-hide-teacher text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap" data-gi="${o}">
                ไม่แสดงชื่อครู
              </button>
            </div>
            <div class="flex items-center gap-1.5 pt-1">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">สี</span>
              <div class="flex flex-wrap gap-1.5">
                ${He.map(x=>`
                <button type="button"
                  class="vg-color-option w-5 h-5 rounded-full border-2 ${x.dot.toLowerCase()===t.dot.toLowerCase()?"border-gray-700":"border-white"} shadow-sm"
                  style="background:${x.dot}"
                  data-gi="${o}"
                  data-color="${x.dot}"
                  title="เลือกสี"></button>`).join("")}
              </div>
            </div>
          </div>
        </div>
        <!-- Sessions -->
        <div class="px-4 pt-3 pb-2 space-y-1.5 vg-sessions" data-gi="${o}">
          ${s.sessions.map((x,S)=>`
          <div class="flex items-center gap-1.5 vs-row" data-gi="${o}" data-si="${S}">
            <select class="vs-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${o}" data-si="${S}">
              ${E}
            </select>
            <select class="vs-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${o}" data-si="${S}">
              ${v}
            </select>
            <select class="vs-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-gi="${o}" data-si="${S}">
              <option value="1">1 คาบ</option>
              <option value="2">2 คาบ</option>
              <option value="3">3 คาบ</option>
              <option value="4">4 คาบ</option>
            </select>
            <button type="button" class="vs-del text-red-300 hover:text-red-500 text-base" data-gi="${o}" data-si="${S}">✕</button>
          </div>`).join("")}
          <button type="button" class="vg-add-session w-full py-1.5 rounded-lg border border-dashed border-gray-200
            text-[11px] text-gray-400 hover:border-indigo-300 hover:text-indigo-400 transition" data-gi="${o}">
            + เพิ่มคาบ
          </button>
        </div>
        <!-- Group footer: บันทึกกลุ่มนี้ + ลบกลุ่ม -->
        <div class="px-4 pb-3 flex gap-2">
          <button type="button" class="vg-save-group flex-1 py-2 rounded-xl text-xs font-semibold text-white transition"
            style="background:${t.dot}" data-gi="${o}">
            ✅ บันทึกกลุ่มนี้
          </button>
          <button type="button" class="vg-del-group py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50 transition" data-gi="${o}">
            ลบกลุ่ม
          </button>
        </div>
        <datalist id="subj-list-${o}">${Y}</datalist>
        <datalist id="room-list-${o}">${I}</datalist>`,j.appendChild(r),s.sessions.forEach((x,S)=>{const B=r.querySelector(`.vs-row[data-gi="${o}"][data-si="${S}"]`);B&&(B.querySelector(".vs-dow").value=x.day_of_week??0,B.querySelector(".vs-period").value=x.period_no??1,B.querySelector(".vs-span").value=x.span_periods??1)})}),j.querySelectorAll(".vg-subj-name").forEach(s=>s.addEventListener("input",()=>{V[+s.dataset.gi].subject_name=s.value})),j.querySelectorAll(".vg-class").forEach(s=>s.addEventListener("input",()=>{V[+s.dataset.gi].class_name=s.value})),j.querySelectorAll(".vg-teacher").forEach(s=>s.addEventListener("input",()=>{V[+s.dataset.gi].teacher_name=s.value})),j.querySelectorAll(".vg-hide-teacher").forEach(s=>s.addEventListener("click",()=>{const o=+s.dataset.gi;V[o].teacher_name="";const t=j.querySelector(`.vg-teacher[data-gi="${o}"]`);t&&(t.value="")})),j.querySelectorAll(".vg-color-option").forEach(s=>s.addEventListener("click",()=>{V[+s.dataset.gi].color_hex=s.dataset.color,U()})),j.querySelectorAll(".vg-del-group").forEach(s=>s.addEventListener("click",()=>{V.splice(+s.dataset.gi,1),U()})),j.querySelectorAll(".vg-save-group").forEach(s=>s.addEventListener("click",async()=>{var x;const o=+s.dataset.gi,t=V[o],r=s.textContent;s.disabled=!0,s.textContent="⏳ กำลังบันทึก...";try{const S=t.color_hex??Be({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},J).dot;(t.class_name||t.subject_name||t.subject_id)&&await Jt({teacher_id:e.id,room_key:tt({className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id}),class_name:((x=t.class_name)==null?void 0:x.trim())||null,color_hex:S}).catch(B=>Q("บันทึกสีไม่ได้: "+(B.message??""),"warning")),await Promise.all(t.sessions.map(B=>{var f,w,h;return Xt({teacher_id:e.id,subject_id:t.subject_id??null,subject_name:((f=t.subject_name)==null?void 0:f.trim())||null,class_name:((w=t.class_name)==null?void 0:w.trim())||null,teacher_name:((h=t.teacher_name)==null?void 0:h.trim())||null,day_of_week:B.day_of_week,period_no:B.period_no,span_periods:B.span_periods??1,academic_year:p,semester:C})})),s.textContent="✅ บันทึกแล้ว",s.style.background="#16a34a",setTimeout(()=>{const B=t.color_hex?De(t.color_hex):Be({teacherId:e==null?void 0:e.id,className:t.class_name,subjectName:t.subject_name,fallbackId:t.subject_id},J);s.disabled=!1,s.textContent=r,s.style.background=B.dot},2e3),qe(e,p,C,T).catch(()=>{})}catch(S){Q("บันทึกกลุ่มนี้ไม่สำเร็จ: "+(S.message??""),"error"),s.disabled=!1,s.textContent=r}})),j.querySelectorAll(".vs-dow").forEach(s=>s.addEventListener("change",()=>{V[+s.dataset.gi].sessions[+s.dataset.si].day_of_week=+s.value})),j.querySelectorAll(".vs-period").forEach(s=>s.addEventListener("change",()=>{V[+s.dataset.gi].sessions[+s.dataset.si].period_no=+s.value})),j.querySelectorAll(".vs-span").forEach(s=>s.addEventListener("change",()=>{V[+s.dataset.gi].sessions[+s.dataset.si].span_periods=+s.value})),j.querySelectorAll(".vs-del").forEach(s=>s.addEventListener("click",()=>{const o=V[+s.dataset.gi];o.sessions.splice(+s.dataset.si,1),o.sessions.length||V.splice(+s.dataset.gi,1),U()})),j.querySelectorAll(".vg-add-session").forEach(s=>s.addEventListener("click",()=>{V[+s.dataset.gi].sessions.push({day_of_week:0,period_no:F[0]??1,span_periods:1}),U()}))}u.querySelector("#vision-file").addEventListener("change",j=>{const E=j.target.files[0];if(!E)return;K=E.type||"image/jpeg";const v=new FileReader;v.onload=Y=>{A=Y.target.result.split(",")[1],u.querySelector("#vision-img").src=Y.target.result,u.querySelector("#vision-preview").classList.remove("hidden"),u.querySelector("#vision-analyze").disabled=!1,u.querySelector("#vision-label").classList.add("hidden")},v.readAsDataURL(E)}),u.querySelector("#vision-analyze").addEventListener("click",async()=>{var v,Y,I,s,o;if(!A)return;const j=u.querySelector("#vision-analyze"),E=u.querySelector("#vision-status");j.disabled=!0,j.textContent="⏳ กำลังวิเคราะห์...",E.textContent="กำลังส่งรูปไป Gemini AI...",E.classList.remove("hidden");try{const t=a.map(Z=>`"${Z.subject_name}" (id:${Z.id})`).join(", "),x=`วิเคราะห์ตารางสอนในภาพนี้อย่างละเอียด
แต่ละช่องในตารางมี 3 ส่วน: บรรทัด1=ชื่อวิชา(ตัวหนาภาษาอังกฤษ), บรรทัด2=ชั้น/ห้องเรียน, บรรทัด3=ชื่อครู
คาบเรียน: ${l.map(Z=>{var te,n;return`คาบ ${Z.period_no}: ${(te=Z.start_time)==null?void 0:te.slice(0,5)}-${(n=Z.end_time)==null?void 0:n.slice(0,5)}`}).join(", ")}
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
- ช่องว่างไม่ต้องใส่`,{data:S,error:B}=await Zt.functions.invoke("gemini-proxy",{body:{keyType:"schedule",dept:e.dept??"",prompt:x,imageBase64:A,imageMimeType:K}});if(B)throw new Error(B.message??"Edge Function error");if(S!=null&&S.error)throw new Error(`Gemini: ${S.error.message??S.error.status}`);const f=((o=(s=(I=(Y=(v=S.candidates)==null?void 0:v[0])==null?void 0:Y.content)==null?void 0:I.parts)==null?void 0:s[0])==null?void 0:o.text)??"",w=f.match(/```json\s*([\s\S]*?)```/)||f.match(/(\[[\s\S]*?\])/),h=w?w[1]??w[0]:null;if(!h)throw console.error("Raw:",f),new Error("AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง");V=JSON.parse(h).map(Z=>({...Z,sessions:(Z.sessions??[]).map(te=>({...te}))})),U(),u.querySelector("#vision-result").classList.remove("hidden"),u.querySelector("#vision-save").classList.remove("hidden");const H=V.reduce((Z,te)=>Z+te.sessions.length,0);E.textContent=`✅ พบ ${V.length} กลุ่มวิชา ${H} คาบ — ตรวจสอบแล้วกด "บันทึก"`}catch(t){console.error("Vision error:",t);const r=t.message??"ไม่ทราบสาเหตุ";E.innerHTML=`
        <span class="text-red-500 font-medium">❌ ${r}</span>
        <br/><span class="text-gray-400 text-xs">ปัญหานี้ต้องให้แอดมินแก้ไข</span>`;const x="vision-err-feedback";if(!u.querySelector(`#${x}`)){const S=document.createElement("button");S.id=x,S.className="mt-2 w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition",S.textContent="📨 แจ้งปัญหานี้ให้แอดมิน",S.addEventListener("click",()=>{var B;u.remove(),(B=window._openFeedbackWidget)==null||B.call(window,`[ตารางสอน AI] ${r}`)}),E.after(S)}}finally{j.disabled=!1,j.textContent="🔍 วิเคราะห์อีกครั้ง"}}),u.querySelector("#vision-add-group").addEventListener("click",()=>{V.push({subject_name:"",class_name:"",teacher_name:"",subject_id:null,sessions:[{day_of_week:0,period_no:F[0]??1,span_periods:1}]}),u.querySelector("#vision-result").classList.remove("hidden"),u.querySelector("#vision-save").classList.remove("hidden"),U()}),u.querySelector("#vision-save").addEventListener("click",async()=>{u.remove(),await qe(e,p,C,T)})}async function zn(e,a){var G,L,J;const l=await ve().catch(()=>({})),p=parseInt(l.academicYear??2568),C=parseInt(l.semester??1),_=l.scheduleVisionEnabled==="true",T=ts(l,e);$e("schedule"),ke("สร้างตารางสอน","schedule"),be(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-indigo-400 to-violet-400 text-white
                  text-3xl rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🗓️
      </div>
      <h2 class="text-2xl font-bold text-gray-800">สร้างตารางสอน</h2>
      <p class="text-gray-500 text-sm mt-1">ภาค ${C} / ${p}</p>
    </div>

    ${_&&T?`
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
  </div>`);const P=e?await Ut(e.id).catch(()=>[]):[],$=await et().catch(()=>[]);(G=document.getElementById("btn-open-vision"))==null||G.addEventListener("click",()=>{xs(e,P,$,p,C,T,l)}),(L=document.getElementById("btn-open-grid"))==null||L.addEventListener("click",()=>{qe(e,p,C,l)}),(J=document.getElementById("btn-skip-schedule"))==null||J.addEventListener("click",()=>{a&&a()})}const Xe=[{group:"ชื่อแท็บภาษา",fields:[["label","ชื่อแท็บ (แสดงบนปุ่มแท็บทุกจุด)"]]},{group:"หัวตาราง",fields:[["tableTitle","ชื่อตาราง มาตรฐาน/ตัวชี้วัด"],["tableHint","คำอธิบายตาราง (hint)"]]},{group:"คอลัมน์",fields:[["colsBasic","คอลัมน์พื้นฐาน (คั่นด้วย | )"],["colsExtra","คอลัมน์เพิ่มเติม (คั่นด้วย | )"],["tplBasic","ชื่อปุ่มเทมเพลตพื้นฐาน"],["tplExtra","ชื่อปุ่มเทมเพลตเพิ่มเติม"],["rowHeader","หัวคอลัมน์ข้อ/ลำดับ"]]},{group:"คำอธิบายรายวิชา",fields:[["descLabel","Label ช่องคำอธิบายรายวิชา"],["descPlaceholder","Placeholder คำอธิบายรายวิชา"]]},{group:"ผู้ลงนาม",fields:[["signerLabel","Label ผู้ลงนาม"],["signerPlaceholder","Placeholder ผู้ลงนาม"],["signerHint","คำใต้ช่องผู้ลงนาม"]]},{group:"จุดประสงค์วัดผล",fields:[["objTitle","หัวข้อจุดประสงค์"],["between","ป้ายระหว่างภาค"],["mid","ป้ายกลางภาค"],["final","ป้ายปลายภาค"],["pickerTitleBetween","ชื่อ dialog — ระหว่างภาค"],["pickerTitleMid","ชื่อ dialog — กลางภาค"],["pickerTitleFinal","ชื่อ dialog — ปลายภาค"]]},{group:"ส่วนช่วยเติมข้อมูล",fields:[["helpTitle","หัวข้อแผง AI"],["helpSub","คำอธิบายแผง AI"],["topicLabel","Label บท/เรื่อง"],["topicPlaceholder","Placeholder บท/เรื่อง"],["btnCurriculum","ปุ่มค้นหลักสูตร"],["btnAI","ปุ่ม AI ร่าง"],["btnImg","ปุ่มอ่านรูป"]]},{group:"ข้อความปุ่ม/Toast",fields:[["save","ปุ่มบันทึก"],["close","ปุ่มปิด"],["addTopic","ปุ่มเพิ่มบท"],["addCol","ปุ่มเพิ่มคอลัมน์"],["addRow","ปุ่มเพิ่มแถว"],["delRow","ปุ่มลบแถว"],["pickerOk","ปุ่ม OK ใน dialog"],["pickerCancel","ปุ่มยกเลิก ใน dialog"],["toastSaved","Toast บันทึกสำเร็จ"],["toastSearchEmpty","Toast ไม่พบในหลักสูตรแกนกลาง"],["toastAIDone","Toast AI ร่างสำเร็จ"],["toastImgDone","Toast อ่านรูปสำเร็จ"],["noOpts","ข้อความเมื่อยังไม่มีข้อ"],["notSelected","ข้อความยังไม่เลือก"]]}];function Ot(e,a){var C,_,T;const l={...a,...e},p={};for(const{fields:P}of Xe)for(const[$]of P)$==="colsBasic"?p[$]=(l.colsBasic??[]).join(" | "):$==="colsExtra"?p[$]=(l.colsExtra??[]).join(" | "):$==="pickerTitleBetween"?p[$]=((C=l.pickerTitles)==null?void 0:C.between)??"":$==="pickerTitleMid"?p[$]=((_=l.pickerTitles)==null?void 0:_.mid)??"":$==="pickerTitleFinal"?p[$]=((T=l.pickerTitles)==null?void 0:T.final)??"":p[$]=l[$]??"";return p}function Vn(e){const a={};for(const{fields:l}of Xe)for(const[p]of l){const C=String(e[p]??"").trim();p==="colsBasic"?a.colsBasic=C.split("|").map(_=>_.trim()).filter(Boolean):p==="colsExtra"?a.colsExtra=C.split("|").map(_=>_.trim()).filter(Boolean):p==="pickerTitleBetween"?(a.pickerTitles=a.pickerTitles??{},a.pickerTitles.between=C):p==="pickerTitleMid"?(a.pickerTitles=a.pickerTitles??{},a.pickerTitles.mid=C):p==="pickerTitleFinal"?(a.pickerTitles=a.pickerTitles??{},a.pickerTitles.final=C):a[p]=C}return a}async function Qn(e,a=!1){$e("course-doc-lang"),ke("ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)"),be(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`);const l=["th","jawi","ar","rumi"],p={th:"ภาษาไทย",jawi:"يَاوِي (Jawi)",ar:"العربية",rumi:"Rumi (Melayu)"},C={th:"ltr",jawi:"rtl",ar:"rtl",rumi:"ltr"},[_,T]=await Promise.all([Ls().catch(()=>[]),a?me(()=>import("./api-1xsyVspL.js"),__vite__mapDeps([1,2])).then(u=>u.getTeachers()).catch(()=>[]):Promise.resolve([])]),P=Object.fromEntries(_.map(u=>[u.lang_key,u])),$=a?l:l.filter(u=>{const A=P[u];return A&&(e==null?void 0:e.id)&&(A.editor_teacher_ids??[]).includes(e.id)});if(!$.length){be(`<div class="max-w-lg mx-auto text-center py-20 text-gray-400">
      <p class="text-4xl mb-4">🔒</p>
      <p class="font-medium">ยังไม่มีสิทธิ์แก้ไขภาษาใด</p>
      <p class="text-xs mt-1">ขอสิทธิ์จากแอดมินเพื่อแก้ไขภาษาที่รับผิดชอบ</p>
    </div>`);return}let G=$[0];const L=u=>{var A,K,V;return((K=(A=P[u])==null?void 0:A.settings)==null?void 0:K.label)||((V=COURSE_DOC_LANGS[u])==null?void 0:V.label)||p[u]||u},J=()=>{var Y,I;const u=$.map(s=>`
      <button class="cdl-tab px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap
        ${s===G?"bg-emerald-600 text-white shadow":"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}"
        data-lang="${s}" dir="${C[s]}">${L(s)}</button>`).join(""),A=P[G]??{settings:{},editor_teacher_ids:[]},K=COURSE_DOC_LANGS[G]??{},V=Ot(A.settings??{},K),oe=C[G],F=P.th??{},U=Ot(F.settings??{},COURSE_DOC_LANGS.th??{}),le=G!=="th",j=Xe.map(({group:s,fields:o})=>`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${s}</p>
        ${le?`
        <div class="flex items-center gap-3 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-t-xl">
          <span class="w-44 flex-shrink-0"></span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">ภาษาไทย (อ้างอิง)</span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider" dir="${oe}">${L(G)}</span>
        </div>`:""}
        <div class="bg-white rounded-xl ${le?"rounded-tl-none rounded-tr-none":""} border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          ${o.map(([t,r])=>`
          <div class="flex items-start gap-3 px-4 py-3">
            <label class="w-44 flex-shrink-0 text-xs text-gray-500 pt-1.5 leading-tight">${r}</label>
            ${le?`
            <div class="flex-1 text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100 select-none" dir="ltr">
              ${m(String(U[t]??"—"))}
            </div>`:""}
            <input id="cdl-${t}" type="text" dir="${oe}"
              class="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
              value="${m(String(V[t]??""))}"
              placeholder="${m(String(K[t]??""))}" />
          </div>`).join("")}
        </div>
      </div>`).join(""),E=A.editor_teacher_ids??[],v=a?`
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ผู้มีสิทธิ์แก้ไขภาษานี้</p>
        <div class="bg-white rounded-xl border border-gray-200 shadow-md p-4">
          <p class="text-xs text-gray-400 mb-3">เลือกครูที่จะให้แก้ไข <span dir="${oe}" class="font-semibold text-emerald-700">${L(G)}</span></p>
          <div class="max-h-48 overflow-y-auto space-y-1" id="cdl-editors">
            ${T.filter(s=>s.id!==(e==null?void 0:e.id)).map(s=>`
              <label class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">
                <input type="checkbox" class="cdl-editor-cb" value="${s.id}" ${E.includes(s.id)?"checked":""}/>
                <span class="font-medium text-gray-800">${m(s.full_name)}</span>
                <span class="text-xs text-gray-400">${m(s.teacher_code??"")} · ${m(s.dept??"—")}</span>
              </label>`).join("")}
          </div>
          <button id="cdl-save-editors"
            class="mt-3 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition">
            💾 บันทึกผู้มีสิทธิ์
          </button>
        </div>
      </div>`:"";be(`<div class="animate-fade">
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
      <div class="flex gap-2 flex-wrap mb-6">${u}</div>

      ${j}
      ${v}
    </div>`),document.querySelectorAll(".cdl-tab").forEach(s=>{s.addEventListener("click",()=>{G=s.dataset.lang,J()})}),(Y=document.getElementById("cdl-save-settings"))==null||Y.addEventListener("click",async()=>{var r;const s={};for(const{fields:x}of Xe)for(const[S]of x)s[S]=((r=document.getElementById(`cdl-${S}`))==null?void 0:r.value)??"";const o=Vn(s),t=document.getElementById("cdl-save-settings");t.disabled=!0,t.textContent="กำลังบันทึก...";try{const x=await Hs(G,o,e==null?void 0:e.id);P[G]={...P[G],...x},Q(`บันทึกการตั้งค่า ${L(G)} สำเร็จ`,"success")}catch(x){Q("บันทึกไม่สำเร็จ: "+(x.message??""),"error")}t.disabled=!1,t.innerHTML="💾 บันทึก"}),(I=document.getElementById("cdl-save-editors"))==null||I.addEventListener("click",async()=>{const s=[...document.querySelectorAll(".cdl-editor-cb:checked")].map(t=>Number(t.value)),o=document.getElementById("cdl-save-editors");o.disabled=!0,o.textContent="กำลังบันทึก...";try{const t=await Ds(G,s);P[G]={...P[G],...t},Q(`อัปเดตผู้มีสิทธิ์ ${L(G)} สำเร็จ`,"success")}catch(t){Q("บันทึกไม่สำเร็จ: "+(t.message??""),"error")}o.disabled=!1,o.textContent="💾 บันทึกผู้มีสิทธิ์"})};J()}async function Un(e){$e("announcements-view"),ke("ประกาศ","announcement");const{getAllAnnouncementsForTeacher:a,getMyAcks:l,ackAnnouncement:p,getSupervisorComments:C,getSystemConfig:_,getTeacherBusyPeriodsOnDate:T,incrementAnnouncementView:P,incrementAnnouncementLike:$,getAnnouncementCommentsBulk:G,addAnnouncementComment:L,deleteAnnouncementComment:J}=await me(async()=>{const{getAllAnnouncementsForTeacher:n,getMyAcks:i,ackAnnouncement:c,getSupervisorComments:z,getSystemConfig:M,getTeacherBusyPeriodsOnDate:y,incrementAnnouncementView:q,incrementAnnouncementLike:R,getAnnouncementCommentsBulk:se,addAnnouncementComment:ee,deleteAnnouncementComment:D}=await import("./api-1xsyVspL.js");return{getAllAnnouncementsForTeacher:n,getMyAcks:i,ackAnnouncement:c,getSupervisorComments:z,getSystemConfig:M,getTeacherBusyPeriodsOnDate:y,incrementAnnouncementView:q,incrementAnnouncementLike:R,getAnnouncementCommentsBulk:se,addAnnouncementComment:ee,deleteAnnouncementComment:D}},__vite__mapDeps([1,2]));let u=null;try{u=await _()}catch{}be(`<div class="animate-fade max-w-2xl mx-auto">
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
  </div>`);const A=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=n=>new Date(n).toLocaleDateString("th-TH",{dateStyle:"long"}),V=n=>n?new Date(n).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"}):"",oe=n=>new Date(new Date(n).getTime()+7*36e5).toISOString().slice(0,10),F={dept_head:"หัวหน้ากลุ่มสาระ",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าฝ่ายวิชาการ (สามัญ)",academic_religion:"หัวหน้าฝ่ายวิชาการ (ศาสนา)",academic_pvch:"หัวหน้าฝ่ายวิชาการ (ปวช)"},U=n=>n?n.startsWith("academic")?"bg-blue-100 text-blue-700":n.startsWith("registrar")?"bg-violet-100 text-violet-700":n==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",le={general:"ทั่วไป",profile:"โปรไฟล์",schedule:"ตารางสอน",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"},j=[{key:"pinned",label:"📌 ปักหมุด",color:"from-amber-400 to-orange-400",filter:n=>n.priority>0},{key:"academic",label:"🎓 ฝ่ายวิชาการ",color:"from-blue-400 to-indigo-400",filter:n=>n.priority===0&&(n.creator_role??"").startsWith("academic")},{key:"registrar",label:"📋 ฝ่ายทะเบียน",color:"from-violet-400 to-purple-400",filter:n=>n.priority===0&&(n.creator_role??"").startsWith("registrar")},{key:"dept_head",label:"🏫 หัวหน้ากลุ่มสาระ",color:"from-emerald-400 to-teal-400",filter:n=>n.priority===0&&n.creator_role==="dept_head"},{key:"admin",label:"⚙️ ทั่วไป",color:"from-gray-300 to-gray-400",filter:n=>n.priority===0&&!n.creator_role}],E=n=>{if(!n)return"";const i=Math.ceil((new Date(n)-new Date)/864e5);return i<0?`<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${V(n)}</span>`:i<=3?`<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${V(n)}</span>`:`<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${V(n)}</span>`};let v="announce";document.querySelectorAll(".ann-tab").forEach(n=>{n.addEventListener("click",()=>{v=n.dataset.tab,document.querySelectorAll(".ann-tab").forEach(i=>{const c=i.dataset.tab===v;i.className=`ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${c?"bg-white shadow-sm text-gray-800":"text-gray-500 hover:text-gray-700"}`}),document.getElementById("ann-panel-announce").classList.toggle("hidden",v!=="announce"),document.getElementById("ann-panel-myann").classList.toggle("hidden",v!=="myann"),document.getElementById("ann-panel-comments").classList.toggle("hidden",v!=="comments"),v==="myann"&&!I&&t()})});const Y={general:{label:"ทั่วไป",icon:"📢",hasDeadline:!1},deadline:{label:"กำหนดส่งงาน/สอบ",icon:"⏰",hasDeadline:!0},learning_doc:{label:"เอกสารประกอบการเรียน",icon:"📄",hasDeadline:!1},exercise_doc:{label:"เอกสารแบบฝึกเพิ่มเติม",icon:"📝",hasDeadline:!1},exam_prep:{label:"เอกสารแนวข้อสอบ",icon:"📋",hasDeadline:!1}};let I=!1,s=[];const o=(n,i)=>{var M;const c=Y[n.ann_type]??{label:n.ann_type,icon:"📢"},z=(n.target_class_ids??[]).map(y=>{var q;return((q=i.find(R=>R.id===y))==null?void 0:q.class_name)??`#${y}`}).join(", ");return`
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 space-y-2" data-myann-id="${n.id}">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium">${c.icon} ${c.label}</span>
            ${n.priority>0?'<span class="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full font-medium">📌 ปักหมุด</span>':""}
            ${n.is_active?"":'<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>'}
          </div>
          <p class="font-semibold text-gray-800">${A(n.title)}</p>
          ${n.body?`<p class="text-sm text-gray-500 mt-1 line-clamp-2">${A(n.body)}</p>`:""}
          ${n.file_url?`<a href="${A(n.file_url)}" target="_blank" class="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1">📎 ไฟล์แนบ</a>`:""}
          ${(M=n.attachment_urls)!=null&&M.length?`<div class="flex flex-wrap gap-1.5 mt-1">${n.attachment_urls.map(y=>`<a href="${A(y.url)}" target="_blank" rel="noopener" class="text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">📎 ${A(y.name)}</a>`).join("")}</div>`:""}
          <p class="text-xs text-gray-400 mt-2">ห้อง: ${A(z)||"—"}</p>
        </div>
        <div class="flex gap-1 flex-shrink-0">
          <button onclick="window._editMyAnn(${n.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600 transition" title="แก้ไข">✏️</button>
          <button onclick="window._togglePinMyAnn(${n.id},${n.priority})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-amber-500 transition" title="${n.priority>0?"เลิกปักหมุด":"ปักหมุด"}">📌</button>
          <button onclick="window._deleteMyAnn(${n.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition" title="ลบ">🗑️</button>
        </div>
      </div>
    </div>`},t=async()=>{I=!0;const n=document.getElementById("ann-panel-myann");if(n){n.innerHTML='<div class="flex justify-center py-8 text-gray-400"><svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> กำลังโหลด...</div>';try{const{getTeacherOwnAnnouncements:i,getMyClasses:c,getTeacherPackageAccess:z}=await me(async()=>{const{getTeacherOwnAnnouncements:R,getMyClasses:se,getTeacherPackageAccess:ee}=await import("./api-1xsyVspL.js");return{getTeacherOwnAnnouncements:R,getMyClasses:se,getTeacherPackageAccess:ee}},__vite__mapDeps([1,2])),[M,y,q]=await Promise.all([i(e.id),c(e.id).catch(()=>[]),z(e.id).catch(()=>({hasSemester:!1}))]);s=y,x(M,q.hasSemester)}catch(i){n.innerHTML=`<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${i.message}</p>`}}},r=3,x=(n,i=!1)=>{var y;const c=document.getElementById("ann-panel-myann");if(!c)return;const z=i||n.length<r,M=i?'<span class="text-xs text-emerald-600 font-medium">✨ ไม่จำกัด</span>':`<span class="text-xs text-gray-400">${n.length}/${r} (ฟรี)</span>`;c.innerHTML=`
    <div class="space-y-3">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold text-gray-700">ประกาศของฉัน (${n.length})</h3>
          ${M}
        </div>
        <button id="btn-create-myann"
          class="px-4 py-2 text-sm rounded-xl font-semibold transition ${z?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-gray-100 text-gray-400 cursor-not-allowed"}">
          + สร้างประกาศ
        </button>
      </div>
      ${!i&&n.length>=r?`
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <span class="text-2xl flex-shrink-0">⭐</span>
        <div>
          <p class="text-sm font-semibold text-amber-800">ใช้ครบ ${r} ประกาศแล้ว</p>
          <p class="text-xs text-amber-600 mt-1">อัพเกรดเป็นแพ็กเกจโดเนทเพื่อสร้างประกาศได้ไม่จำกัด</p>
        </div>
      </div>`:""}
      ${n.length?n.map(q=>o(q,s)).join(""):`
      <div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📢</p>
        <p class="text-sm">ยังไม่มีประกาศ กดปุ่ม "สร้างประกาศ" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`,(y=document.getElementById("btn-create-myann"))==null||y.addEventListener("click",()=>{if(!z){Q(`ใช้ครบ ${r} ประกาศแล้ว — อัพเกรดเพื่อใช้งานไม่จำกัด`,"warning");return}w()})},S=(n,i=[])=>s.map(c=>{var z;return`<label class="flex items-center gap-2 text-xs cursor-pointer hover:text-indigo-700 py-0.5">
        <input type="checkbox" name="myann-cls-${n}" value="${c.id}"
          ${i.includes(c.id)?"checked":""} class="rounded text-indigo-600 flex-shrink-0" />
        <span class="truncate">${A(c.class_name)}</span>
        <span class="text-gray-300 truncate">${A(((z=c.master_subjects)==null?void 0:z.subject_name)??"")}</span>
      </label>`}).join(""),B=(n,i=[],c="",z=[])=>`
    <div class="myann-entry border border-gray-200 rounded-xl p-3 space-y-2" data-entry="${n}" data-kept='${A(JSON.stringify(z)).replace(/'/g,"&#39;")}'>
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-indigo-600">ชุดที่ ${n+1}</span>
        ${n>0?`<button type="button" class="myann-remove-entry text-red-400 hover:text-red-600 text-sm px-2" data-entry="${n}">✕ ลบ</button>`:""}
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">ห้องเรียน <span class="text-red-400">*</span></p>
        <div class="border border-gray-100 rounded-lg p-2 max-h-28 overflow-y-auto space-y-0.5">
          ${S(n,i)||'<p class="text-xs text-gray-400">ยังไม่มีห้องเรียน</p>'}
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">แนบไฟล์ (เลือกได้หลายไฟล์ ไม่บังคับ)</p>
        <div class="myann-kept-files flex flex-wrap gap-1.5 mb-1.5" data-entry="${n}"></div>
        <input name="myann-files-${n}" type="file" multiple
          class="w-full text-xs" />
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">หรือลิงก์ไฟล์ (เช่น Google Drive)</p>
        <input name="myann-file-${n}" type="url" value="${A(c)}"
          placeholder="https://drive.google.com/..."
          class="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </div>
    </div>`,f=n=>{n.querySelectorAll(".myann-entry").forEach(i=>{const c=i.dataset.entry,z=JSON.parse(i.dataset.kept||"[]"),M=n.querySelector(`.myann-kept-files[data-entry="${c}"]`);M&&(M.innerHTML=z.map((y,q)=>`
        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600">
          📎 ${A(y.name)}
          <button type="button" class="myann-remove-file text-indigo-400 hover:text-red-500 font-bold" data-entry="${c}" data-i="${q}">✕</button>
        </span>`).join(""),M.querySelectorAll(".myann-remove-file").forEach(y=>y.addEventListener("click",()=>{const q=JSON.parse(i.dataset.kept||"[]");q.splice(parseInt(y.dataset.i,10),1),i.dataset.kept=JSON.stringify(q),f(n)})))})},w=(n=null)=>{var M;let i=1;const c=document.createElement("div");c.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",c.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">${n?"✏️ แก้ไขประกาศ":"📢 สร้างประกาศใหม่"}</h3>
        <button id="myann-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <!-- ข้อมูลร่วมทุกชุด -->
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ประเภทประกาศ</label>
          <select id="myann-type" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            ${Object.entries(Y).map(([y,q])=>`<option value="${y}" ${(n==null?void 0:n.ann_type)===y?"selected":""}>${q.icon} ${q.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หัวข้อ <span class="text-red-400">*</span></label>
          <input id="myann-title" type="text" value="${A((n==null?void 0:n.title)??"")}"
            placeholder="ระบุหัวข้อประกาศ" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">รายละเอียด</label>
          <textarea id="myann-body" rows="2"
            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none">${A((n==null?void 0:n.body)??"")}</textarea>
        </div>
        <div id="myann-deadline-wrap" class="${((n==null?void 0:n.ann_type)??"general")==="deadline"?"":"hidden"}">
          <label class="block text-xs font-semibold text-gray-600 mb-1">⏰ วันและเวลากำหนดส่ง/สอบ <span class="text-red-400">*</span></label>
          <input id="myann-deadline" type="datetime-local"
            value="${n!=null&&n.deadline_at?new Date(n.deadline_at).toISOString().slice(0,16):""}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-pin" type="checkbox" ${(n==null?void 0:n.priority)>0?"checked":""} class="rounded text-amber-500" />
            <span>📌 ปักหมุด</span>
          </label>
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-active" type="checkbox" ${!n||n!=null&&n.is_active?"checked":""} class="rounded text-emerald-500" />
            <span>เผยแพร่ทันที</span>
          </label>
        </div>
        <!-- ชุดห้อง+ไฟล์ -->
        <div class="border-t border-gray-100 pt-3">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold text-gray-700">📋 ห้องเรียน + ลิงก์ (แต่ละชุดสร้างประกาศแยก)</p>
            ${n?"":`<button type="button" id="myann-add-entry"
              class="flex items-center gap-1 text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition">
              ＋ เพิ่มชุด
            </button>`}
          </div>
          <div id="myann-entries" class="space-y-3">
            ${B(0,(n==null?void 0:n.target_class_ids)??[],(n==null?void 0:n.file_url)??"",(n==null?void 0:n.attachment_urls)??[])}
          </div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="myann-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="myann-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
          ${n?"บันทึก":"สร้างประกาศ"}
        </button>
      </div>
    </div>`,document.body.appendChild(c),f(c),c.querySelector("#myann-close").addEventListener("click",()=>c.remove()),c.querySelector("#myann-cancel").addEventListener("click",()=>c.remove()),c.querySelector("#myann-type").addEventListener("change",y=>{c.querySelector("#myann-deadline-wrap").classList.toggle("hidden",y.target.value!=="deadline")}),(M=c.querySelector("#myann-add-entry"))==null||M.addEventListener("click",()=>{const y=c.querySelector("#myann-entries"),q=document.createElement("div");q.innerHTML=B(i),y.appendChild(q.firstElementChild),i++,z(),f(c)});const z=()=>{c.querySelectorAll(".myann-remove-entry").forEach(y=>{y.onclick=()=>{var R;const q=Number(y.dataset.entry);(R=c.querySelector(`.myann-entry[data-entry="${q}"]`))==null||R.remove()}})};z(),c.querySelector("#myann-save").addEventListener("click",async()=>{const y=c.querySelector("#myann-title").value.trim(),q=c.querySelector("#myann-body").value.trim(),R=c.querySelector("#myann-type").value,se=c.querySelector("#myann-pin").checked,ee=c.querySelector("#myann-active").checked,D=R==="deadline"&&c.querySelector("#myann-deadline").value||null;if(!y){Q("กรุณาระบุหัวข้อ","warning");return}if(R==="deadline"&&!D){Q("กรุณาระบุวันและเวลา","warning");return}const ae=[...c.querySelectorAll(".myann-entry")].map(d=>{var ne,re;const k=Number(d.dataset.entry),N=[...d.querySelectorAll(`input[name="myann-cls-${k}"]:checked`)].map(ie=>Number(ie.value)),O=((ne=d.querySelector(`input[name="myann-file-${k}"]`))==null?void 0:ne.value.trim())??"",g=JSON.parse(d.dataset.kept||"[]"),X=[...((re=d.querySelector(`input[name="myann-files-${k}"]`))==null?void 0:re.files)??[]];return{classIds:N,fileUrl:O,keptFiles:g,newFiles:X}}).filter(d=>d.classIds.length>0);if(!ae.length){Q("กรุณาเลือกอย่างน้อย 1 ห้องในแต่ละชุด","warning");return}const b=c.querySelector("#myann-save");b.disabled=!0,b.textContent="กำลังบันทึก...";try{const{createAnnouncement:d,updateAnnouncement:k}=await me(async()=>{const{createAnnouncement:g,updateAnnouncement:X}=await import("./api-1xsyVspL.js");return{createAnnouncement:g,updateAnnouncement:X}},__vite__mapDeps([1,2])),{uploadAssignmentFile:N}=await me(async()=>{const{uploadAssignmentFile:g}=await import("./storage-D6nkcVz6.js").then(X=>X.z);return{uploadAssignmentFile:g}},__vite__mapDeps([6,2]));if(n){const{classIds:g,fileUrl:X,keptFiles:ne,newFiles:re}=ae[0],ie=[];for(const ce of re)ie.push(await N(ce,`class-${g[0]}/announcements`));const de=[...ne,...ie];await k(n.id,{title:y,body:q,isActive:ee,priority:se?1:0,annType:R,targetClassIds:g,fileUrl:X,attachmentUrls:de.length?de:null,deadlineAt:D})}else await Promise.all(ae.map(async({classIds:g,fileUrl:X,newFiles:ne})=>{const re=[];for(const ie of ne)re.push(await N(ie,`class-${g[0]}/announcements`));return d({title:y,body:q,isActive:ee,priority:se?1:0,teacherId:e.id,annType:R,targetClassIds:g,fileUrl:X,attachmentUrls:re.length?re:null,deadlineAt:D})}));c.remove();const O=n?1:ae.length;Q(`บันทึก ${O} ประกาศสำเร็จ ✅`,"success"),I=!1,t()}catch(d){Q("บันทึกไม่สำเร็จ: "+(d.message??""),"error"),b.disabled=!1,b.textContent=n?"บันทึก":"สร้างประกาศ"}})};window._editMyAnn=async n=>{const{getTeacherOwnAnnouncements:i}=await me(async()=>{const{getTeacherOwnAnnouncements:M}=await import("./api-1xsyVspL.js");return{getTeacherOwnAnnouncements:M}},__vite__mapDeps([1,2])),z=(await i(e.id).catch(()=>[])).find(M=>M.id===n);z&&w(z)},window._togglePinMyAnn=async(n,i)=>{const{updateAnnouncement:c}=await me(async()=>{const{updateAnnouncement:z}=await import("./api-1xsyVspL.js");return{updateAnnouncement:z}},__vite__mapDeps([1,2]));await c(n,{priority:i>0?0:1}).catch(()=>{}),I=!1,t()},window._deleteMyAnn=async n=>{if(!confirm("ลบประกาศนี้?"))return;const{deleteAnnouncement:i}=await me(async()=>{const{deleteAnnouncement:c}=await import("./api-1xsyVspL.js");return{deleteAnnouncement:c}},__vite__mapDeps([1,2]));await i(n).catch(()=>{}),Q("ลบประกาศแล้ว","success"),I=!1,t()};const h=n=>n?new Date(n+"T00:00:00").toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"",W={yes:{label:"✅ สนใจเข้าร่วมแน่นอน",bg:"bg-emerald-600",ring:"ring-emerald-300"},maybe:{label:"🤔 ไม่แน่ใจ",bg:"bg-amber-500",ring:"ring-amber-300"},no:{label:"❌ ไม่สนใจ",bg:"bg-gray-400",ring:"ring-gray-300"}},H=(n,i,c=null,z=!1,M=0)=>{var D,ae,b;const y=n.requires_ack,q=!!i,R=n.ann_type==="training",se=i?new Date(i).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"",ee=!n.is_active;return`
    <div class="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow
      ${y&&!q&&!ee?"border-rose-200":ee?"border-dashed border-gray-200":"border-gray-100"}
      ${ee?"opacity-60":""}" data-ann-id="${n.id}">
      <div class="h-1 bg-gradient-to-r ${n.priority>0?"from-amber-400 to-orange-400":ee?"from-gray-200 to-gray-300":((D=j.find(d=>d.filter(n)))==null?void 0:D.color)??"from-gray-300 to-gray-400"}"></div>
      <div class="p-5">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
            ${y&&!q&&!ee?"bg-rose-50":ee?"bg-gray-50":"bg-indigo-50"}">
            ${n.priority>0?"📌":y?q?"✅":"🔔":ee?"📄":"📢"}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${U(n.creator_role)}">
                ${A(F[n.creator_role]??"แอดมิน")}
              </span>
              ${(ae=n.teachers)!=null&&ae.full_name?`<span class="text-[11px] text-gray-500 font-medium">${A(n.teachers.full_name)}</span>`:""}
              ${ee?'<span class="px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full text-[11px]">ยกเลิกแล้ว</span>':""}
              ${n.priority>0?'<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>':""}
              ${y?'<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>':""}
              ${E(n.due_date)}
            </div>
            <h3 class="text-base font-bold text-gray-800 mb-1.5">${A(n.title)}</h3>
            ${n.body?`<p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-2">${A(n.body)}</p>`:""}
            ${n.file_url?`<img src="${A(n.file_url)}" class="w-full rounded-xl border border-gray-100 mb-2 cursor-pointer" onclick="window.open('${A(n.file_url)}','_blank')" />`:""}
            ${R&&n.event_date?`
              <div class="mt-3 mb-2 bg-violet-50 border border-violet-100 rounded-xl p-3 space-y-1.5">
                <p class="text-xs font-semibold text-violet-700">🎓 ข้อมูลการอบรม</p>
                <p class="text-sm text-gray-700">📅 ${h(n.event_date)}</p>
                ${(b=n.event_periods)!=null&&b.length?`<p class="text-sm text-gray-700">🕐 คาบที่ ${n.event_periods.sort((d,k)=>d-k).join(", ")}</p>`:""}
                ${n.event_location?`<p class="text-sm text-gray-700">📍 ${A(n.event_location)}</p>`:""}
              </div>`:""}
            <span class="text-[11px] text-gray-400">${K(n.created_at)}</span>
            ${R&&!ee?`
              <div class="mt-3">
                <p class="text-xs font-semibold text-gray-500 mb-2">คุณจะเข้าร่วมไหม?</p>
                <div class="flex flex-wrap gap-2">
                  ${Object.entries(W).map(([d,k])=>`
                    <button class="ann-rsvp-btn px-3 py-2 rounded-xl text-sm font-semibold transition border-2
                      ${c===d?`${k.bg} text-white ring-2 ${k.ring} border-transparent`:"bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"}"
                      data-ann-id="${n.id}" data-rsvp="${d}">${k.label}</button>
                  `).join("")}
                </div>
              </div>`:""}
            ${y&&!ee?`
              <div class="mt-3">
                ${q?`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold border border-emerald-200">
                      ✅ รับทราบแล้ว · ${se}
                    </span>`:`<button class="ann-ack-btn px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition shadow-sm"
                      data-id="${n.id}">🔔 กดรับทราบ</button>`}
              </div>`:""}
            <div class="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
              <button class="ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${z?"bg-rose-50 text-rose-600":"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500"}" data-id="${n.id}">
                <span class="ann-like-icon">${z?"❤️":"🤍"}</span><span class="ann-like-count">${n.like_count??0}</span>
              </button>
              <button class="ann-comment-toggle-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-500 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition" data-id="${n.id}">
                💬<span class="ann-comment-count">${M}</span>
              </button>
              <span class="text-[11px] text-gray-400 ml-auto">👁️ เข้าดูแล้ว ${n.view_count??0} คน</span>
            </div>
            <div class="ann-comment-section hidden mt-3 pt-3 border-t border-gray-50" data-id="${n.id}">
              <div class="ann-comment-list space-y-2 mb-2 text-sm text-gray-400">กำลังโหลด...</div>
              <div class="flex gap-2">
                <input type="text" class="ann-comment-input flex-1 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="แสดงความคิดเห็น..." data-id="${n.id}" maxlength="500" />
                <button class="ann-comment-send-btn px-3 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition flex-shrink-0" data-id="${n.id}">ส่ง</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`},Z=async()=>{const n=document.getElementById("ann-panel-announce");if(!n)return;let i,c,z;try{const{getMyRsvpsForTeacher:g}=await me(async()=>{const{getMyRsvpsForTeacher:X}=await import("./api-1xsyVspL.js");return{getMyRsvpsForTeacher:X}},__vite__mapDeps([1,2]));[i,c,z]=await Promise.all([a(),e!=null&&e.id?l(e.id).catch(()=>[]):Promise.resolve([]),e!=null&&e.id?g(e.id).catch(()=>[]):Promise.resolve([])])}catch{n.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(e!=null&&e.id&&u){const g=parseInt(u.academicYear??2568),X=parseInt(u.semester??1),ne=i.filter(re=>{var ie;return re.ann_type==="training"&&re.event_date&&((ie=re.event_periods)==null?void 0:ie.length)});if(ne.length){const re=await Promise.all(ne.map(de=>T(e.id,de.event_date,g,X).catch(()=>[]))),ie=Object.fromEntries(ne.map((de,ce)=>[de.id,re[ce]]));i=i.filter(de=>{var ue;if(de.ann_type!=="training"||!((ue=de.event_periods)!=null&&ue.length))return!0;const ce=ie[de.id]??[];return(de.schedule_filter??"all")==="any"?de.event_periods.some(he=>!ce.includes(he)):!de.event_periods.some(he=>ce.includes(he))})}}const M=Object.fromEntries(c.map(g=>[g.announcement_id,g.acked_at])),y=Object.fromEntries((z??[]).map(g=>[g.announcement_id,g.response])),q={};try{(await G(i.map(X=>X.id))).forEach(X=>{var ne;(q[ne=X.announcement_id]??(q[ne]=[])).push(X)})}catch{}const R=`pp5_ann_liked_${(e==null?void 0:e.id)??"anon"}`,se=`pp5_ann_viewed_${(e==null?void 0:e.id)??"anon"}`;let ee,D;try{ee=new Set(JSON.parse(localStorage.getItem(R)||"[]"))}catch{ee=new Set}try{D=new Set(JSON.parse(localStorage.getItem(se)||"[]"))}catch{D=new Set}const ae=i.map(g=>g.id).filter(g=>!D.has(g));if(ae.length&&(e!=null&&e.id)){ae.forEach(g=>{D.add(g),P(g)});try{localStorage.setItem(se,JSON.stringify([...D]))}catch{}ae.forEach(g=>{const X=i.find(ne=>ne.id===g);X&&(X.view_count=(X.view_count??0)+1)})}const b=i.filter(g=>g.is_active),d=i.filter(g=>!g.is_active);if(!i.length){n.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📭</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศในขณะนี้</p>
      </div>`;return}const k=j.map(g=>({...g,items:b.filter(g.filter)})).filter(g=>g.items.length);let N="";k.length?N+=k.map(g=>`
        <div class="mb-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-bold text-gray-700">${g.label}</span>
            <span class="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] rounded-full font-semibold">${g.items.length}</span>
            <div class="flex-1 h-px bg-gray-100 ml-1"></div>
          </div>
          <div class="space-y-3">${g.items.map(X=>H(X,M[X.id],y[X.id]??null,ee.has(X.id),(q[X.id]||[]).length)).join("")}</div>
        </div>`).join(""):N+=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-400 mb-5">
        <div class="text-4xl mb-3">📭</div><p class="font-semibold text-gray-500">ยังไม่มีประกาศที่แสดงอยู่ในขณะนี้</p>
      </div>`,d.length&&(N+=`<details class="mt-2">
        <summary class="cursor-pointer text-xs text-gray-400 font-semibold py-2 px-1 hover:text-gray-600 transition select-none list-none flex items-center gap-1">
          <span>▸</span> ประวัติประกาศที่ผ่านมา (${d.length} รายการ)
        </summary>
        <div class="space-y-3 mt-3">${d.map(g=>H(g,M[g.id],null,ee.has(g.id),(q[g.id]||[]).length)).join("")}</div>
      </details>`),n.innerHTML=N,n.querySelectorAll(".ann-ack-btn").forEach(g=>{g.addEventListener("click",async()=>{if(e!=null&&e.id){g.disabled=!0,g.textContent="กำลังบันทึก...";try{await p(Number(g.dataset.id),e.id),await Z()}catch{Q("บันทึกไม่สำเร็จ","error"),g.disabled=!1,g.textContent="🔔 กดรับทราบ"}}})}),n.querySelectorAll(".ann-rsvp-btn").forEach(g=>{g.addEventListener("click",async()=>{if(!(e!=null&&e.id))return;const{upsertAnnouncementRsvp:X}=await me(async()=>{const{upsertAnnouncementRsvp:ie}=await import("./api-1xsyVspL.js");return{upsertAnnouncementRsvp:ie}},__vite__mapDeps([1,2])),ne=Number(g.dataset.annId),re=g.dataset.rsvp;g.classList.contains("bg-emerald-600")||g.classList.contains("bg-amber-500")||g.classList.contains("bg-gray-400");try{await X(ne,e.id,re);const{showToast:ie}=await me(async()=>{const{showToast:ce}=await import("./ui-Dh03k4iX.js").then(ue=>ue.u);return{showToast:ce}},[]);ie({yes:"บันทึก: สนใจเข้าร่วม ✅",maybe:"บันทึก: ไม่แน่ใจ 🤔",no:"บันทึก: ไม่สนใจ ❌"}[re]??"บันทึกแล้ว","success"),await Z()}catch{Q("บันทึกไม่สำเร็จ","error")}})}),n.querySelectorAll(".ann-like-btn").forEach(g=>{g.addEventListener("click",()=>{if(!(e!=null&&e.id))return;const X=Number(g.dataset.id),ne=ee.has(X),re=ne?-1:1;$(X,re),ne?ee.delete(X):ee.add(X);try{localStorage.setItem(R,JSON.stringify([...ee]))}catch{}const ie=g.querySelector(".ann-like-count"),de=g.querySelector(".ann-like-icon");ie.textContent=Math.max(0,(parseInt(ie.textContent,10)||0)+re),de.textContent=ne?"🤍":"❤️",g.className=`ann-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${ne?"bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-500":"bg-rose-50 text-rose-600"}`})});const O=(g,X)=>{const ne=q[X]??[];g.innerHTML=ne.length?ne.map(re=>{var ie,de;return`
          <div class="flex items-start gap-2">
            <div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">${A((((ie=re.teachers)==null?void 0:ie.full_name)??"?").charAt(0))}</div>
            <div class="flex-1 min-w-0 bg-gray-50 rounded-xl px-3 py-1.5">
              <p class="text-[11px] font-semibold text-gray-700">${A(((de=re.teachers)==null?void 0:de.full_name)??"ครู")}</p>
              <p class="text-xs text-gray-600 whitespace-pre-wrap break-words">${A(re.comment_text)}</p>
            </div>
          </div>`}).join(""):'<p class="text-xs text-gray-400">ยังไม่มีความคิดเห็น เป็นคนแรกได้เลย!</p>'};n.querySelectorAll(".ann-comment-toggle-btn").forEach(g=>{g.addEventListener("click",()=>{const X=Number(g.dataset.id),ne=n.querySelector(`.ann-comment-section[data-id="${X}"]`);if(!ne)return;const re=ne.classList.contains("hidden");ne.classList.toggle("hidden"),re&&O(ne.querySelector(".ann-comment-list"),X)})}),n.querySelectorAll(".ann-comment-send-btn").forEach(g=>{const X=async()=>{if(!(e!=null&&e.id))return;const re=Number(g.dataset.id),ie=n.querySelector(`.ann-comment-input[data-id="${re}"]`),de=ie.value.trim();if(de){g.disabled=!0;try{const ce=await L(re,e.id,de);(q[re]??(q[re]=[])).push(ce),ie.value="";const ue=n.querySelector(`.ann-comment-section[data-id="${re}"]`);O(ue.querySelector(".ann-comment-list"),re);const he=n.querySelector(`.ann-comment-toggle-btn[data-id="${re}"] .ann-comment-count`);he&&(he.textContent=q[re].length)}catch(ce){Q("ส่งความคิดเห็นไม่สำเร็จ: "+(ce.message??""),"error")}g.disabled=!1}};g.addEventListener("click",X);const ne=n.querySelector(`.ann-comment-input[data-id="${g.dataset.id}"]`);ne==null||ne.addEventListener("keydown",re=>{re.key==="Enter"&&X()})})},te=async()=>{const n=document.getElementById("ann-panel-comments");if(!n)return;if(!(e!=null&&e.id)){n.innerHTML='<p class="text-gray-400 text-sm p-4">ไม่พบข้อมูลครู</p>';return}let i;try{i=await C(e.id)}catch{n.innerHTML='<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>';return}if(!i.length){n.innerHTML=`<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">💬</div>
        <p class="font-semibold text-gray-500">ยังไม่มีความคิดเห็น / บันทึก</p>
      </div>`;return}const c=[],z=new Map;for(const q of i){const R=q.round_id?`round__${q.round_id}__${q.supervisor_id}`:`noround__${q.supervisor_id}__${oe(q.created_at)}`;if(!z.has(R)){const se={key:R,supervisor:q.teachers,date:q.created_at,roundEvent:q.work_calendar_events??null,items:[]};z.set(R,se),c.push(se)}z.get(R).items.push(q)}const M=q=>q?q.startsWith("academic")?"bg-blue-100 text-blue-700":q.startsWith("registrar")?"bg-violet-100 text-violet-700":q==="dept_head"?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-600":"bg-gray-100 text-gray-600",y=q=>q?q.startsWith("academic")?"from-blue-400 to-indigo-400":q.startsWith("registrar")?"from-violet-400 to-purple-400":q==="dept_head"?"from-emerald-400 to-teal-400":"from-gray-300 to-gray-400":"from-gray-300 to-gray-400";n.innerHTML='<div class="space-y-4">'+c.map(q=>{var b,d;const R=(b=q.supervisor)==null?void 0:b.position,se=((d=q.supervisor)==null?void 0:d.full_name)??"หัวหน้า",ee=F[R]??"ผู้บังคับบัญชา",D=q.roundEvent,ae=D?`<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700">
             ${D.event_type==="inspection"&&D.round_number?`ตรวจครั้งที่ ${D.round_number}`:D.label}
           </span>`:"";return`
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-1 bg-gradient-to-r ${y(R)}"></div>
        <div class="p-5">
          <div class="flex items-center gap-2 flex-wrap mb-3">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${M(R)}">${A(ee)}</span>
            <span class="text-sm font-semibold text-gray-700">${A(se)}</span>
            ${ae}
            <span class="text-[11px] text-gray-400 ml-auto">${K(q.date)}</span>
          </div>
          ${D!=null&&D.label&&D.event_type!=="inspection"?`<p class="text-xs text-indigo-600 mb-2 -mt-1">📅 ${A(D.label)}</p>`:""}
          <div class="space-y-2">
            ${q.items.map(k=>`
              <div class="flex items-start gap-2.5">
                <span class="flex-shrink-0 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[11px] font-semibold mt-0.5">${A(le[k.metric]??k.metric)}</span>
                <p class="text-sm text-gray-700 leading-relaxed">${A(k.comment)}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>`}).join("")+"</div>"};await Promise.all([Z(),te()])}function it(e){return new Promise(a=>{var C;(C=document.getElementById("qr-receipt-prompt-modal"))==null||C.remove();const l=document.createElement("div");l.id="qr-receipt-prompt-modal",l.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40",l.innerHTML=`
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
    `,document.body.appendChild(l);const p=_=>{l.remove(),a(_)};l.querySelector("#qr-receipt-prompt-yes").addEventListener("click",()=>p(!0)),l.querySelector("#qr-receipt-prompt-no").addEventListener("click",()=>p(!1))})}function Ft(e,a,l,p=null){var _,T,P,$;const C=p!=null&&p.url?`<span style="display:inline-flex;flex-direction:column;align-items:center;gap:1px">
         <img src="${m(p.url)}" style="height:22px;object-fit:contain" />
         <span style="font-size:8px;color:#374151">${m(p.name||"ผู้ออกให้")}${p.title?" · "+m(p.title):""}</span>
       </span>`:"<span>ผู้ออกให้: .................. (ลงชื่อ)</span>";return`
    <div class="receipt-half">
      <div style="text-align: center; font-weight: bold; font-size: 11px; color: #4338ca; margin-bottom: 6px;">${l}</div>
      <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เลขที่ใบเสร็จ:</td><td style="text-align: right; font-weight: bold;">QR-${String(e.receipt_no).padStart(6,"0")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">วันที่:</td><td style="text-align: right;">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"long"})}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ชื่อ-สกุล:</td><td style="text-align: right;">${m(((_=e.students)==null?void 0:_.full_name)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">รหัสนักเรียน:</td><td style="text-align: right;">${m(((T=e.students)==null?void 0:T.student_code)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ห้อง:</td><td style="text-align: right;">${m(((P=e.students)==null?void 0:P.main_room)||"-")}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">เหตุผล:</td><td style="text-align: right; font-weight: bold;">${m(e.reason)}</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ค่าธรรมเนียม:</td><td style="text-align: right; font-weight: bold;">${m(a)} บาท</td></tr>
        <tr><td style="padding: 1.5px 0; color: #6b7280;">ออกให้โดย:</td><td style="text-align: right;">${m((($=e.teachers)==null?void 0:$.full_name)||"แอดมิน")}</td></tr>
      </table>
      <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #d1d5db; font-size: 9px; color: #6b7280; display: flex; justify-content: space-between; align-items: flex-end; gap: 6px;">
        <span>ผู้รับ: .................. (ลงชื่อ)</span>
        ${C}
      </div>
    </div>
  `}async function _e(e,a,l,p,C,_=[],T="5",P=null){let $=document.getElementById("qr-print-media-styles");$||($=document.createElement("style"),$.id="qr-print-media-styles",document.head.appendChild($)),$.textContent=`
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
        grid-template-columns: repeat(${a}, minmax(0, 1fr)) !important;
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
  `;const G=document.createElement("div");G.id="print-qr-area",G.className="hidden",document.body.appendChild(G),G.innerHTML=e.map((L,J)=>`
    <div class="print-room-block" style="padding: 0; margin: 0;">
      ${L.hideHeader?"":`
        <div class="print-room-header">
          <span>📋 ห้องเรียน: ${m(L.className)}</span>
          <span style="font-size: 11px; font-weight: normal; color: #6b7280;">${m(L.countLabel||`${L.students.length} คน`)}</span>
        </div>
      `}
      <div class="print-grid">
        ${L.students.map((u,A)=>`
          <div class="qr-print-card">
            <div style="width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 5px;">
              <canvas id="print-canvas-${u.id}-${A}-r${J}" style="width: 100%; max-width: 100%; height: auto;"></canvas>
            </div>
            <div style="width: 100%; text-align: left; font-family: Sarabun, sans-serif; font-size: 11px;">
              <p style="font-weight: bold; color: black; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m(u.full_name)}</p>
              ${l?`<p style="color: #4b5563; margin: 2px 0 0 0; font-size: 9px;">รหัส: ${m(u.student_code||"-")}</p>`:""}
              <div style="display: flex; justify-content: space-between; margin-top: 3px; font-size: 9px; color: #4b5563;">
                ${C?`<span>ห้อง: ${m(u._roomName||L.className)}</span>`:""}
                ${p?`<span>เลขที่: ${u.seat_no}</span>`:""}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("")+(_.length===0?"":`
    <div class="print-room-block">
      <div class="receipt-grid">
        ${_.map(L=>`
          <div class="qr-receipt-slip">
            ${Ft(L,T,"🏫 ต้นขั้ว (โรงเรียนเก็บ)",P)}
            <div class="receipt-cut-line-v"></div>
            ${Ft(L,T,"🎓 มอบให้นักเรียน",P)}
          </div>
        `).join("")}
      </div>
    </div>
  `);for(let L=0;L<e.length;L++)for(let J=0;J<e[L].students.length;J++){const u=e[L].students[J],A=document.getElementById(`print-canvas-${u.id}-${J}-r${L}`);A&&await Qe.toCanvas(A,u.student_code||"",{width:250,margin:1,color:{dark:"#000000",light:"#ffffff"}})}window.print(),G.remove()}async function Wn(e,a=null,l={}){var C,_,T,P,$,G;const p=!e||!!l.isQrManager;$e("student-qr-print"),ke("พิมพ์ QR Code นักเรียน"),be(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูลห้องเรียนทั้งหมด...
    </div>
  `);try{const L=await Os(),J=await ve().catch(()=>({})),u=((_=(C=J.qrReissueFee)==null?void 0:C.trim)==null?void 0:_.call(C))||"5",A=((P=(T=J.qrReissueDoneMessage)==null?void 0:T.trim)==null?void 0:P.call(T))||"ทำบัตร QR Code ให้เรียบร้อยแล้วครับ มารับได้ที่ห้องปกครอง";let K={name:(($=J.qrIssuerSignatureName)==null?void 0:$.trim())||"",title:((G=J.qrIssuerSignatureTitle)==null?void 0:G.trim())||"",url:J.qrIssuerSignatureUrl||""};const{data:V}=await Zt.from("classes").select("id, class_name, master_subjects ( id, grade_level, subject_group )").order("class_name").limit(1e4),oe=new Map;for(const b of V||[]){const d=b.class_name||"";d&&!oe.has(d)&&oe.set(d,b)}const F=b=>{const d=b==="ศาสนา";return[...new Set(L.map(N=>d?N.religion_room:N.main_room).filter(Boolean))].sort((N,O)=>N.localeCompare(O,"th")).map(N=>{const O=oe.get(N);return{id:(O==null?void 0:O.id)||null,class_name:N,_meta:O||null}})},U=b=>{const d=b.match(/^(ม\.\d+|ปวช\.\d+|PR\s*\d+|อก\.\d+|อป\.\d+)/i);return d?d[1].replace(/^(PR)\s*(\d+)$/i,"PR $2").trim():null},le=b=>{var k;const d=((k=b._meta)==null?void 0:k.master_subjects)??b.master_subjects;return d?Array.isArray(d)?d.length>0?d[0]:null:d:null},j=b=>{const d=le(b);return(d==null?void 0:d.grade_level)||U(b.class_name||"")||"อื่น ๆ"},E=b=>{const d=le(b),k=(d==null?void 0:d.subject_group)||"",N=b.class_name||"";return["AGM"].includes(k)||/^(PR|อก\.|อป\.)/i.test(N)?"ศาสนา":["ACDMVOC","AGMVOC"].includes(k)||/^ปวช\./i.test(N)?"ปวช":"สามัญ"},v={สามัญ:["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6"],ศาสนา:["PR 1","อก.1","อก.2","อก.3","อป.1","อป.2","อป.3"],ปวช:["ปวช.1","ปวช.2","ปวช.3","อก.ปวช.1","อก.ปวช.2","อก.ปวช.3"]},Y=b=>{const d=F(b),k=[...new Set(d.map(O=>j(O)).filter(Boolean))],N=v[b]||[];return[...new Set([...N,...k])].sort((O,g)=>O.localeCompare(g,"th"))};let I="สามัญ",s="",o="",t=null,r=parseInt(localStorage.getItem("qr_print_cols")||"4"),x=localStorage.getItem("qr_print_show_code")!=="false",S=localStorage.getItem("qr_print_show_seat")!=="false",B=localStorage.getItem("qr_print_show_room")!=="false",f="all",w=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(w)||w<1)&&(w=4);let h=[],W=[],H="ทำหาย";const Z=()=>{if(t==="individual"&&h.length>0)ee();else if(t==="class"&&o)D();else if(t==="level"&&s)ae();else{const b=document.getElementById("qr-preview-section");b&&b.classList.add("hidden")}};if(a){const b=V==null?void 0:V.find(d=>d.id==a);b&&(I=E(b),s=j(b),o=b.id)}const te=()=>{var vt,ht;const b=["สามัญ","ศาสนา","ปวช"].map(pe=>`
        <option value="${pe}" ${pe===I?"selected":""}>${pe}</option>
      `).join("");be(`
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
            ${p?`
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
                  <option value="ทำหาย" ${H==="ทำหาย"?"selected":""}>ทำหาย</option>
                  <option value="ชำรุด" ${H==="ชำรุด"?"selected":""}>ชำรุด</option>
                  <option value="อื่นๆ" ${H==="อื่นๆ"?"selected":""}>อื่นๆ</option>
                </select>
                <span class="text-xs text-gray-500 font-semibold ml-2">จำนวนซ้ำ:</span>
                <input id="qr-individual-repeat" type="number" min="1" max="40" value="${w}"
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
                  ${b}
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
                  <input type="checkbox" id="show-code" ${x?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
                  แสดงเลขประจำตัว
                </label>
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" id="show-room" ${B?"checked":""} class="rounded text-indigo-600 focus:ring-indigo-500" />
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
          ${p?'<div id="qr-tab-requests" class="hidden"></div>':""}
        </div>
      `);const d=document.getElementById("qr-filter-category"),k=document.getElementById("qr-filter-level"),N=document.getElementById("qr-filter-class"),O=document.getElementById("qr-level-info"),g=document.getElementById("btn-print-whole-level"),X=document.getElementById("qr-individual-search"),ne=document.getElementById("qr-individual-results"),re=document.getElementById("qr-individual-repeat"),ie=document.getElementById("qr-individual-clear"),de=document.getElementById("qr-individual-code-bulk"),ce=document.getElementById("qr-individual-add-codes"),ue=document.getElementById("qr-reissue-reason");ue.addEventListener("change",()=>{H=ue.value}),(vt=document.getElementById("btn-qr-issuer-sig"))==null||vt.addEventListener("click",()=>{Jn(K,pe=>{K=pe})});const he="px-4 py-2 rounded-xl text-sm font-bold transition bg-white text-indigo-600 shadow-sm",gs="px-4 py-2 rounded-xl text-sm font-bold transition text-gray-500 hover:text-gray-700 relative",Me={print:{btn:document.getElementById("qr-page-tab-print"),panel:document.getElementById("qr-tab-print")},history:{btn:document.getElementById("qr-page-tab-history"),panel:document.getElementById("qr-tab-history")},requests:{btn:document.getElementById("qr-page-tab-requests"),panel:document.getElementById("qr-tab-requests")}},Oe=pe=>{Object.entries(Me).forEach(([xe,ge])=>{!ge.btn||!ge.panel||(ge.btn.className=xe===pe?he:gs,ge.panel.classList.toggle("hidden",xe!==pe))}),pe==="history"&&Yn(Me.history.panel,{cols:r,showCode:x,showSeat:S,showRoom:B,qrReissueFee:u,qrIssuer:K,isAdmin:!e}),pe==="requests"&&p&&Xn(Me.requests.panel,{teacher:e,cols:r,showCode:x,showSeat:S,showRoom:B,qrReissueDoneMessage:A,qrReissueFee:u,qrIssuer:K})};Me.print.btn.addEventListener("click",()=>Oe("print")),Me.history.btn.addEventListener("click",()=>Oe("history")),(ht=Me.requests.btn)==null||ht.addEventListener("click",()=>Oe("requests")),p&&window._pendingQRTab==="requests"&&(window._pendingQRTab=null,Oe("requests")),p&&Kt({limit:500}).then(pe=>{const xe=pe.filter(fe=>!fe.printed_at).length,ge=document.getElementById("qr-requests-badge");ge&&xe>0&&(ge.textContent=String(xe),ge.classList.remove("hidden"))}).catch(()=>{}),X.addEventListener("input",()=>R(X.value.trim())),ie.addEventListener("click",()=>{var pe;h=[],W=[],t=null,X.value="",de.value="",ne.classList.add("hidden"),y(),(pe=document.getElementById("qr-preview-section"))==null||pe.classList.add("hidden")}),ce.addEventListener("click",()=>{const pe=z(de.value);if(!pe.length){Q("กรุณากรอกรหัสนักเรียนอย่างน้อย 1 รหัส","warning");return}const xe=new Map(L.map(Ce=>[String(Ce.student_code||"").trim(),Ce])),ge=[],fe=[];for(const Ce of pe){const wt=xe.get(Ce);wt?ge.push(wt):fe.push(Ce)}W=fe,ge.length>0?(M(ge),de.value=fe.join(`
`),Q(`เพิ่มรายชื่อสำหรับพิมพ์ ${ge.length} คน`,"success")):(y(),Q("ไม่พบรหัสนักเรียนที่ระบุ","warning"))}),re.addEventListener("change",()=>{const pe=Math.max(1,Math.min(40,parseInt(re.value)||4));w=pe,re.value=String(pe),localStorage.setItem("qr_print_individual_repeat",String(w)),y(),Z()}),document.getElementById("show-seat").addEventListener("change",pe=>{S=pe.target.checked,localStorage.setItem("qr_print_show_seat",S),Z()}),document.getElementById("show-code").addEventListener("change",pe=>{x=pe.target.checked,localStorage.setItem("qr_print_show_code",x),Z()}),document.getElementById("show-room").addEventListener("change",pe=>{B=pe.target.checked,localStorage.setItem("qr_print_show_room",B),Z()}),document.getElementById("select-print-gender").addEventListener("change",pe=>{f=pe.target.value,Z()}),document.getElementById("select-print-cols").addEventListener("change",pe=>{r=parseInt(pe.target.value),localStorage.setItem("qr_print_cols",r),Z()});const ft=()=>{I=d.value;const pe=Y(I);k.innerHTML=`
          <option value="">-- เลือกระดับชั้น --</option>
          ${pe.map(xe=>`<option value="${xe}" ${xe===s?"selected":""}>${xe}</option>`).join("")}
        `,yt()},yt=()=>{s=k.value;const xe=F(I).filter(fe=>s?j(fe)===s:!0).sort((fe,Ce)=>(fe.class_name||"").localeCompare(Ce.class_name||"","th"));N.innerHTML=`
          <option value="">-- เลือกห้องเรียน (${xe.length} ห้อง) --</option>
          ${xe.map(fe=>`
            <option value="${m(fe.class_name)}" ${fe.class_name===o?"selected":""}>${m(fe.class_name)}</option>
          `).join("")}
        `,s&&xe.length>0?(O.textContent=`ระดับ ${s} มีทั้งหมด ${xe.length} ห้อง`,g.textContent=`📚 พิมพ์ทั้งระดับ ${s} (${xe.length} ห้อง แยกหน้า)`,g.classList.remove("hidden")):(O.textContent="เลือกระดับชั้นเพื่อดูตัวเลือกพิมพ์ทั้งชั้น",g.classList.add("hidden"));const ge=N.value;ge?(o=ge,t="class",D()):(t=null,document.getElementById("qr-preview-section").classList.add("hidden"))};d.addEventListener("change",()=>{s="",o="",t=null,ft()}),k.addEventListener("change",()=>{o="",t=null,yt()}),N.addEventListener("change",()=>{o=N.value,o?(t="class",D()):(t=null,document.getElementById("qr-preview-section").classList.add("hidden"))}),g.addEventListener("click",()=>{t="level",ae()}),ft()},n=b=>b?I==="ศาสนา"?b.religion_room||b.main_room||"ไม่ระบุห้อง":b.main_room||b.religion_room||"ไม่ระบุห้อง":"ไม่ระบุห้อง",i=b=>{const d=n(b),k=I==="ศาสนา",O=L.filter(g=>(k?g.religion_room:g.main_room)===d).sort((g,X)=>(g.student_code||"").localeCompare(X.student_code||"")).findIndex(g=>String(g.id)===String(b.id));return O>=0?O+1:""},c=()=>{const b=new Map(L.map(d=>[String(d.id),d]));return h.map(d=>b.get(String(d))).filter(Boolean)},z=b=>{const d=new Set;return String(b||"").split(/[\s,，;；|]+/).map(k=>k.trim()).filter(Boolean).filter(k=>d.has(k)?!1:(d.add(k),!0))},M=b=>{const d=[...h],k=new Set(d.map(String));for(const N of b){const O=String(N.id);k.has(O)||(k.add(O),d.push(O))}h=d,t=h.length>0?"individual":null,y(),h.length>0&&ee()},y=()=>{var N;const b=document.getElementById("qr-individual-selected");if(!b)return;const d=c();if(d.length===0&&W.length===0){b.classList.add("hidden"),b.innerHTML="";return}const k=d.length*w;b.classList.remove("hidden"),b.innerHTML=`
        ${d.length>0?`
          <div class="bg-indigo-50 px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold text-indigo-900">รายการที่เลือก ${d.length} คน</p>
              <p class="text-[11px] text-indigo-700 mt-0.5">พิมพ์รวม ${k} ใบ เมื่อใช้จำนวนซ้ำ ${w} ใบ/คน</p>
            </div>
            <button type="button" id="qr-individual-clear-selected"
              class="px-3 py-1.5 rounded-lg bg-white border border-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs font-bold">
              ล้างรายชื่อ
            </button>
          </div>
          <div class="divide-y divide-indigo-50 bg-white">
            ${d.map(O=>{const g=O.main_room||O.religion_room||"ไม่ระบุห้อง";return`
                <div class="px-4 py-3 flex items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${m(O.full_name||"ไม่ระบุชื่อ")}</p>
                    <p class="text-xs text-gray-400 font-mono truncate">${m(O.student_code||"-")} · ${m(g)}</p>
                  </div>
                  <button type="button" data-remove-id="${O.id}"
                    class="qr-individual-remove px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 text-xs font-bold">
                    ลบ
                  </button>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${W.length>0?`
          <div class="bg-amber-50 border-t border-amber-100 px-4 py-3">
            <p class="text-xs font-bold text-amber-800">ไม่พบรหัส ${W.length} รายการ</p>
            <p class="text-[11px] text-amber-700 font-mono mt-1 break-words">${m(W.join(", "))}</p>
          </div>
        `:""}
      `,(N=b.querySelector("#qr-individual-clear-selected"))==null||N.addEventListener("click",()=>{var O;h=[],W=[],t=null,y(),(O=document.getElementById("qr-preview-section"))==null||O.classList.add("hidden")}),b.querySelectorAll(".qr-individual-remove").forEach(O=>{O.addEventListener("click",()=>{var g;h=h.filter(X=>String(X)!==String(O.dataset.removeId)),t=h.length>0?"individual":null,y(),h.length>0?ee():(g=document.getElementById("qr-preview-section"))==null||g.classList.add("hidden")})})},q=b=>[b.student_code,b.full_name,b.main_room,b.religion_room].filter(Boolean).join(" ").toLowerCase(),R=b=>{const d=document.getElementById("qr-individual-results");if(!d)return;const k=b.toLowerCase();if(!k){d.classList.add("hidden"),d.innerHTML="";return}const N=L.filter(O=>q(O).includes(k)).sort((O,g)=>(O.student_code||"").localeCompare(g.student_code||"")).slice(0,20);if(d.classList.remove("hidden"),!N.length){d.innerHTML='<div class="px-4 py-4 text-center text-xs text-gray-400 bg-gray-50">ไม่พบนักเรียนที่ตรงกับคำค้นหา</div>';return}d.innerHTML=N.map(O=>{const g=O.main_room||O.religion_room||"ไม่ระบุห้อง";return`
          <button type="button" data-student-id="${O.id}"
            class="qr-individual-pick w-full px-4 py-3 text-left bg-white hover:bg-indigo-50 transition flex items-center justify-between gap-3">
            <span class="min-w-0">
              <span class="block text-sm font-bold text-gray-800 truncate">${m(O.full_name||"ไม่ระบุชื่อ")}</span>
              <span class="block text-xs text-gray-400 font-mono truncate">${m(O.student_code||"-")} · ${m(g)}</span>
            </span>
            <span class="text-xs font-bold text-indigo-600 flex-shrink-0">${h.includes(String(O.id))?"เพิ่มแล้ว":"เพิ่ม"}</span>
          </button>
        `}).join(""),d.querySelectorAll(".qr-individual-pick").forEach(O=>{O.addEventListener("click",()=>{const g=O.dataset.studentId||"",X=L.find(re=>String(re.id)===String(g)),ne=document.getElementById("qr-individual-search");X&&(W=[],M([X])),d.classList.add("hidden"),ne&&(ne.value="")})})},se=async b=>{const d=await Qe.toDataURL(b.student_code||"",{width:1e3,margin:2,color:{dark:"#000000",light:"#ffffff"}}),k=document.createElement("a"),N=String(b.student_code||b.id||"student").replace(/[^\w-]+/g,"_");k.href=d,k.download=`qr-${N}.png`,document.body.appendChild(k),k.click(),k.remove()},ee=async()=>{var g,X;const b=document.getElementById("qr-preview-section"),d=c();if(!b||d.length===0)return;t="individual",b.classList.remove("hidden");const k=d.flatMap(ne=>{const re=n(ne),ie=i(ne);return Array.from({length:w},(de,ce)=>({...ne,seat_no:ie,_roomName:re,_print_copy:ce+1}))}),N=d[0],O=k.length;b.innerHTML=`
        <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-800 leading-relaxed flex items-start gap-2">
          <span class="text-base">💡</span>
          <div>
            <p class="font-bold">พิมพ์รายบุคคลสำหรับกรณี QR Code หาย</p>
            <p class="opacity-90">เลือกไว้ ${d.length} คน วางซ้ำ ${w} ใบ/คน รวม ${O} ใบ และตอนพิมพ์จะไม่ใส่หัวกระดาษชื่อชั้นเรียน</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">รายบุคคล</p>
              <h4 class="font-extrabold text-gray-800 text-base mt-1">${d.length===1?m(N.full_name||"ไม่ระบุชื่อ"):`พร้อมพิมพ์ ${d.length} คน`}</h4>
              <p class="text-xs text-gray-400 font-mono mt-0.5">${d.length===1?m(N.student_code||"-"):`รวม ${O} ใบ`}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button id="btn-print-individual-qr" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition">
                🖨️ พิมพ์ / บันทึก PDF (${O} ใบ)
              </button>
              ${d.length===1?`
                <button id="btn-download-individual-qr" class="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-950 text-white font-bold text-xs shadow-md transition">
                  ⬇️ ดาวน์โหลด PNG
                </button>
              `:""}
            </div>
          </div>
          <div class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="grid-template-columns: repeat(${r}, minmax(0, 1fr));">
            ${k.map((ne,re)=>`
              <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                  <canvas id="individual-copy-canvas-${re}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                </div>
                <div class="text-left w-full min-w-0 font-sans">
                  <p class="text-[11px] font-bold text-gray-800 truncate">${m(ne.full_name)}</p>
                  ${x?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${m(ne.student_code||"-")}</p>`:""}
                  <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                    ${B?`<span>ห้อง: ${m(ne._roomName)}</span>`:""}
                    ${S&&ne.seat_no?`<span>เลขที่: ${ne.seat_no}</span>`:""}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `,k.forEach((ne,re)=>{const ie=document.getElementById(`individual-copy-canvas-${re}`);ie&&Qe.toCanvas(ie,ne.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},de=>{de&&console.error("Individual QR error:",de)})}),(g=document.getElementById("btn-print-individual-qr"))==null||g.addEventListener("click",async()=>{const ne=document.getElementById("btn-print-individual-qr");ne.disabled=!0,ne.textContent="กำลังบันทึก...";let re=[];try{re=await Promise.all(d.map(ie=>Fs({studentId:ie.id,teacherId:e==null?void 0:e.id,reason:H})))}catch(ie){console.error("Failed to log QR reissue:",ie),Q("บันทึกสถิติการออก QR ใหม่ไม่สำเร็จ: "+(ie.message??""),"warning")}ne.disabled=!1,ne.textContent=`🖨️ พิมพ์ / บันทึก PDF (${O} ใบ)`,await _e([{className:"รายบุคคล",countLabel:`${d.length} คน · ${O} ใบ`,students:k,hideHeader:!0}],r,x,S,B,[]),re.length>0&&(Q(`บันทึกสถิติออก QR ใหม่ ${re.length} คนแล้ว (${H})`,"success"),await it(re.length)&&await _e([],r,x,S,B,re,u,K))}),(X=document.getElementById("btn-download-individual-qr"))==null||X.addEventListener("click",async()=>{await se(N)})},D=async()=>{t="class";const b=document.getElementById("qr-preview-section");if(b){b.classList.remove("hidden");try{const d=I==="ศาสนา",k=o,N=L.filter(g=>(d?g.religion_room:g.main_room)===o).sort((g,X)=>(g.student_code||"").localeCompare(X.student_code||"")).map((g,X)=>({...g,seat_no:X+1}));if(N.length===0){b.innerHTML=`
            <div class="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
              <p class="text-4xl mb-2">👥</p>
              <p class="text-sm font-semibold text-gray-500">ไม่มีนักเรียนที่เปิดใช้งานในห้องเรียนนี้</p>
            </div>
          `;return}const O=N.filter(g=>f==="all"?!0:g.gender===f);b.innerHTML=`
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
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">พรีวิวการจัดวาง — ${m(k)} (${O.length} คน)</p>
              <button id="btn-trigger-print" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5" ${O.length===0?'disabled style="opacity: 0.5; cursor: not-allowed;"':""}>
                🖨️ สั่งพิมพ์ห้องนี้ (Print)
              </button>
            </div>
            <div id="qr-live-grid" class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="${O.length===0?"":`grid-template-columns: repeat(${r}, minmax(0, 1fr));`}">
              ${O.length===0?`
                <div class="col-span-full py-12 text-center text-xs text-gray-400 font-semibold bg-white border border-gray-100 rounded-2xl">ไม่มีนักเรียนเพศที่เลือกในห้องเรียนนี้</div>
              `:O.map(g=>`
                <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                  <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                    <canvas id="live-canvas-${g.id}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                  </div>
                  <div class="text-left w-full min-w-0 font-sans">
                    <p class="text-[11px] font-bold text-gray-800 truncate">${m(g.full_name)}</p>
                    ${x?`<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${m(g.student_code||"-")}</p>`:""}
                    <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                      ${B?`<span>ห้อง: ${m(k)}</span>`:""}
                      ${S?`<span>เลขที่: ${g.seat_no}</span>`:""}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `,O.forEach(g=>{const X=document.getElementById(`live-canvas-${g.id}`);X&&Qe.toCanvas(X,g.student_code||"",{width:160,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}},ne=>{ne&&console.error("Live QR error:",ne)})}),O.length>0&&document.getElementById("btn-trigger-print").addEventListener("click",async()=>{await _e([{className:k,students:O}],r,x,S,B)})}catch(d){console.error(d),b.innerHTML='<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาดในการโหลดรายชื่อนักเรียน</div>'}}},ae=async()=>{t="level";const b=document.getElementById("qr-filter-level"),d=document.getElementById("qr-preview-section");if(!s||!d)return;const N=F(I).filter(O=>j(O)===s).sort((O,g)=>(O.class_name||"").localeCompare(g.class_name||"","th"));if(N.length!==0){d.classList.remove("hidden"),d.innerHTML=`
        <div class="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div class="flex flex-col items-center gap-4">
            <svg class="animate-spin h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            <p class="text-sm font-bold text-gray-700">กำลังจัดเตรียมรายชื่อนักเรียนทุกห้องในระดับ ${m(s)}...</p>
            <p class="text-xs text-gray-400" id="qr-level-progress">กำลังจัดเตรียม 0 / ${N.length} ห้อง</p>
          </div>
        </div>
      `;try{const O=[],g=I==="ศาสนา";for(let ne=0;ne<N.length;ne++){const re=N[ne],ie=document.getElementById("qr-level-progress");ie&&(ie.textContent=`กำลังจัดเตรียม ${ne+1} / ${N.length} ห้อง — ${re.class_name}`);const de=L.filter(ce=>(g?ce.religion_room:ce.main_room)===re.class_name).filter(ce=>f==="all"||ce.gender===f).sort((ce,ue)=>(ce.student_code||"").localeCompare(ue.student_code||"")).map((ce,ue)=>({...ce,seat_no:ue+1}));de.length>0&&O.push({className:re.class_name,students:de})}if(O.length===0){d.innerHTML='<div class="bg-white border border-gray-200 rounded-3xl p-8 text-center text-gray-400 text-sm">ไม่พบนักเรียนในระดับชั้นนี้</div>';return}const X=O.reduce((ne,re)=>ne+re.students.length,0);d.innerHTML=`
          <div class="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 class="font-bold text-gray-800 text-base">📚 พร้อมพิมพ์ทั้งระดับ ${m(s)}</h4>
                <p class="text-sm text-gray-500 mt-1">${O.length} ห้อง · ${X} คน · แต่ละห้องจะแยกหน้ากระดาษ</p>
              </div>
              <button id="btn-confirm-whole-level-print" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2">
                🖨️ พิมพ์ / บันทึก PDF ทั้ง ${m(s)}
              </button>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${O.map(ne=>`
                <div class="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-center">
                  <p class="text-sm font-bold text-gray-800">${m(ne.className)}</p>
                  <p class="text-xs text-gray-500 mt-0.5">${ne.students.length} คน</p>
                </div>
              `).join("")}
            </div>
          </div>
        `,document.getElementById("btn-confirm-whole-level-print").addEventListener("click",async()=>{await _e(O,r,x,S,B)})}catch(O){console.error(O),d.innerHTML=`<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาด: ${O.message}</div>`}}};te()}catch(L){console.error(L),Q("โหลดข้อมูลล้มเหลว: "+(L.message??""),"error")}}async function Yn(e,{cols:a,showCode:l,showSeat:p,showRoom:C,qrReissueFee:_,qrIssuer:T,isAdmin:P}){var le;if(!e||e.dataset.loaded)return;e.dataset.loaded="1",e.innerHTML=`
    <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-3">
      <div>
        <h4 class="font-bold text-gray-800 text-sm">🧾 ประวัตินักเรียนที่มาติดต่อออก QR Code ใหม่</h4>
        <p class="text-xs text-gray-400 mt-0.5">${P?"ค้นหา ออก QR ซ้ำ ออกใบเสร็จซ้ำ แก้ไขเหตุผล หรือลบรายการได้":"ค้นหา หรือออก QR / ใบเสร็จซ้ำได้ (แก้ไข/ลบได้เฉพาะแอดมิน)"}</p>
      </div>
      <input id="qr-reissue-search" type="search"
        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition"
        placeholder="ค้นหาชื่อ รหัส หรือห้อง..." />
      <div id="qr-reissue-summary" class="grid grid-cols-2 gap-2"></div>
      <div id="qr-reissue-history" class="bg-gray-50/50 rounded-2xl px-3">
        <p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>
      </div>
    </div>
  `;let $=[],G="",L=null,J={reason:"ทำหาย",note:""};const u=()=>{const j=e.querySelector("#qr-reissue-history");if(!j)return;const E=G.trim().toLowerCase(),v=E?$.filter(I=>{const s=I.students||{};return String(s.full_name||"").toLowerCase().includes(E)||String(s.student_code||"").toLowerCase().includes(E)||String(s.main_room||"").toLowerCase().includes(E)}):$,Y=e.querySelector("#qr-reissue-summary");if(Y){const I=Number(_)||0;Y.innerHTML=`
        <div class="bg-indigo-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-indigo-500 font-bold">จำนวนรายการ${E?" (ที่กรอง)":""}</p>
          <p class="text-base font-extrabold text-indigo-700">${v.length}</p>
        </div>
        <div class="bg-amber-50 rounded-xl px-3 py-2 text-center">
          <p class="text-[10px] text-amber-600 font-bold">ยอดค่าธรรมเนียมรวม (${I} บาท/ใบ)</p>
          <p class="text-base font-extrabold text-amber-700">${(v.length*I).toLocaleString("th-TH")} บาท</p>
        </div>`}j.innerHTML=v.length?`
      <div class="divide-y divide-gray-100">
        ${v.map(I=>{var s,o,t,r,x,S;return I.id===L?`
          <div class="py-3 space-y-2">
            <p class="font-bold text-gray-700 text-xs">${m(((s=I.students)==null?void 0:s.full_name)||"-")} <span class="font-normal text-gray-400">(${m(((o=I.students)==null?void 0:o.student_code)||"-")})</span></p>
            <div class="flex flex-wrap gap-2 items-center">
              <select id="reissue-edit-reason" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                <option value="ทำหาย" ${J.reason==="ทำหาย"?"selected":""}>ทำหาย</option>
                <option value="ชำรุด" ${J.reason==="ชำรุด"?"selected":""}>ชำรุด</option>
                <option value="อื่นๆ" ${J.reason==="อื่นๆ"?"selected":""}>อื่นๆ</option>
              </select>
              <input id="reissue-edit-note" type="text" placeholder="หมายเหตุ (ถ้ามี)" value="${m(J.note||"")}"
                class="flex-1 min-w-[140px] border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500" />
              <button type="button" data-action="save-edit" data-log-id="${I.id}" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs">บันทึก</button>
              <button type="button" data-action="cancel-edit" class="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs">ยกเลิก</button>
            </div>
          </div>
        `:`
          <div class="flex items-center justify-between gap-3 py-2.5 text-xs flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 truncate">${m(((t=I.students)==null?void 0:t.full_name)||"-")} <span class="font-normal text-gray-400">(${m(((r=I.students)==null?void 0:r.student_code)||"-")})</span></p>
              <p class="text-gray-400 mt-0.5">เลขที่ QR-${String(I.receipt_no).padStart(6,"0")} · ${m(I.reason)}${I.note?` (${m(I.note)})`:""} · ห้อง ${m(((x=I.students)==null?void 0:x.main_room)||"-")} · ออกโดย ${m(((S=I.teachers)==null?void 0:S.full_name)||"แอดมิน")} · ${new Date(I.created_at).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}</p>
            </div>
            <div class="flex gap-1.5 shrink-0">
              <button type="button" data-action="reprint-qr" data-log-id="${I.id}" title="ออก QR Code" class="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]">🖨️ QR</button>
              <button type="button" data-action="reprint-receipt" data-log-id="${I.id}" title="ออกใบเสร็จ" class="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-[11px]">🧾 ใบเสร็จ</button>
              ${P?`
                <button type="button" data-action="edit" data-log-id="${I.id}" title="แก้ไข" class="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-[11px]">✏️ แก้ไข</button>
                <button type="button" data-action="delete" data-log-id="${I.id}" title="ลบ" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
              `:""}
            </div>
          </div>
        `}).join("")}
      </div>
    `:`
      <p class="text-xs text-gray-400 text-center py-6">${$.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีประวัติการออก QR ใหม่"}</p>
    `},A=async()=>{const j=e.querySelector("#qr-reissue-history");if(j){j.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>';try{$=await Ys({limit:300}),u()}catch(E){console.error("Failed to load QR reissue history:",E),j.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดประวัติไม่สำเร็จ</p>'}}},K=async j=>{const E=j.students;if(!(E!=null&&E.id)){Q("ไม่พบข้อมูลนักเรียนสำหรับรายการนี้","warning");return}await _e([{className:"รายบุคคล",countLabel:"1 ใบ",students:[{id:E.id,full_name:E.full_name,student_code:E.student_code,seat_no:null,_roomName:E.main_room}],hideHeader:!0}],a,l,p,C,[])},V=async j=>{await _e([],a,l,p,C,[j],_,T)},oe=async j=>{var E;if(P)try{const v=await Ws(j,{reason:J.reason,note:((E=J.note)==null?void 0:E.trim())||null});$=$.map(Y=>Y.id===j?v:Y),L=null,u(),Q("บันทึกการแก้ไขแล้ว","success")}catch(v){console.error("Failed to update QR reissue log:",v),Q("บันทึกไม่สำเร็จ: "+(v.message??""),"error")}},F=async j=>{var Y;if(!P)return;const E=$.find(I=>I.id===j);if(await Ze({title:"ลบประวัตินี้?",message:`ลบรายการออก QR ใหม่ของ ${((Y=E==null?void 0:E.students)==null?void 0:Y.full_name)||"นักเรียน"} (เลขที่ QR-${String((E==null?void 0:E.receipt_no)??0).padStart(6,"0")})`,detail:"ลบแล้วไม่สามารถกู้คืนได้ สถิติรายการนี้จะหายไปถาวร",confirmText:"ลบเลย"}))try{await Us(j),$=$.filter(I=>I.id!==j),u(),Q("ลบประวัติแล้ว","success")}catch(I){console.error("Failed to delete QR reissue log:",I),Q("ลบไม่สำเร็จ: "+(I.message??""),"error")}},U=e.querySelector("#qr-reissue-history");U.addEventListener("click",j=>{const E=j.target.closest("[data-action]");if(!E)return;const v=E.dataset.logId,Y=$.find(I=>I.id===v);E.dataset.action==="reprint-qr"&&Y?K(Y):E.dataset.action==="reprint-receipt"&&Y?V(Y):E.dataset.action==="delete"&&v&&P?F(v):E.dataset.action==="edit"&&Y&&P?(L=v,J={reason:Y.reason,note:Y.note||""},u()):E.dataset.action==="cancel-edit"?(L=null,u()):E.dataset.action==="save-edit"&&v&&P&&oe(v)}),U.addEventListener("change",j=>{j.target.id==="reissue-edit-reason"&&(J.reason=j.target.value)}),U.addEventListener("input",j=>{j.target.id==="reissue-edit-note"&&(J.note=j.target.value)}),(le=e.querySelector("#qr-reissue-search"))==null||le.addEventListener("input",j=>{G=j.target.value,u()}),A()}function Kn(e){if(!e||e.dataset.bound)return;e.dataset.bound="1";const a=e.getContext("2d");a.lineWidth=2.5,a.lineCap="round",a.lineJoin="round",a.strokeStyle="#111827";let l=!1,p=null;const C=$=>{const G=e.getBoundingClientRect(),L=$.touches?$.touches[0]:$;return{x:(L.clientX-G.left)*(e.width/G.width),y:(L.clientY-G.top)*(e.height/G.height)}},_=$=>{$.preventDefault(),l=!0,p=C($)},T=$=>{if(!l)return;$.preventDefault();const G=C($);a.beginPath(),a.moveTo(p.x,p.y),a.lineTo(G.x,G.y),a.stroke(),p=G},P=()=>{l=!1};e.addEventListener("mousedown",_),e.addEventListener("mousemove",T),window.addEventListener("mouseup",P),e.addEventListener("touchstart",_,{passive:!1}),e.addEventListener("touchmove",T,{passive:!1}),e.addEventListener("touchend",P)}function Jn(e,a){var C;(C=document.getElementById("qr-issuer-sig-modal"))==null||C.remove();const l=document.createElement("div");l.id="qr-issuer-sig-modal",l.className="fixed inset-0 z-[230] flex items-center justify-center p-4 bg-black/50",l.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between">
        <p class="font-bold text-gray-800 text-sm">✍️ ลายเซ็นผู้ออกให้บัตร QR Code</p>
        <button type="button" id="qr-sig-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      </div>
      <p class="text-[11px] text-gray-400">ชื่อ/ตำแหน่ง/ลายเซ็นนี้จะพิมพ์ลงใบเสร็จออก QR ใหม่ทุกใบอัตโนมัติ แทนต้องเซ็นสดด้วยปากกา</p>
      <div class="flex gap-2">
        <input id="qr-sig-name" type="text" value="${m((e==null?void 0:e.name)||"")}" placeholder="ชื่อ-สกุล เช่น นายฮัมบาลีย์ วาจิ" class="flex-1 min-w-0 border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      </div>
      <input id="qr-sig-title" type="text" value="${m((e==null?void 0:e.title)||"")}" placeholder="ตำแหน่ง เช่น ครูฝ่ายปกครอง (ไม่บังคับ)" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-indigo-500" />
      <button type="button" id="qr-sig-save-info" class="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">บันทึกชื่อ-ตำแหน่ง</button>

      <div class="pt-2 border-t border-gray-100">
        <p class="text-[11px] font-bold text-gray-500 mb-1.5">ลายเซ็นปัจจุบัน</p>
        <div id="qr-sig-preview">
          ${e!=null&&e.url?`<img src="${m(e.url)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'}
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
    </div>`,document.body.appendChild(l),l.addEventListener("click",_=>{_.target===l&&l.remove()}),l.querySelector("#qr-sig-close").addEventListener("click",()=>l.remove()),Kn(l.querySelector("#qr-sig-canvas"));const p=_=>{l.querySelector("#qr-sig-preview").innerHTML=_?`<img src="${m(_)}" class="h-14 border border-gray-200 rounded-lg bg-white p-1" />`:'<p class="text-[11px] text-gray-400">ยังไม่มีลายเซ็น</p>'};l.querySelector("#qr-sig-save-info").addEventListener("click",async()=>{const _=l.querySelector("#qr-sig-name").value.trim(),T=l.querySelector("#qr-sig-title").value.trim();try{await Promise.all([Fe("qrIssuerSignatureName",_),Fe("qrIssuerSignatureTitle",T)]),e={...e,name:_,title:T},a(e),Q("บันทึกชื่อ-ตำแหน่งแล้ว ✅","success")}catch(P){Q("บันทึกไม่สำเร็จ: "+(P.message??""),"error")}}),l.querySelector("#qr-sig-clear").addEventListener("click",()=>{const _=l.querySelector("#qr-sig-canvas");_.getContext("2d").clearRect(0,0,_.width,_.height)}),l.querySelector("#qr-sig-save-drawn").addEventListener("click",async()=>{const _=l.querySelector("#qr-sig-canvas"),T=await new Promise($=>_.toBlob($,"image/png"));if(!T){Q("ยังไม่มีลายเซ็นให้บันทึก","warning");return}const P=l.querySelector("#qr-sig-save-drawn");P.disabled=!0,P.textContent="กำลังบันทึก...";try{const $=await St(T);await Fe("qrIssuerSignatureUrl",$),e={...e,url:$},a(e),p($),Q("บันทึกลายเซ็นแล้ว ✅","success")}catch($){Q("บันทึกไม่สำเร็จ: "+($.message??""),"error")}finally{P.disabled=!1,P.textContent="บันทึกลายเซ็นที่วาด"}}),l.querySelector("#qr-sig-upload").addEventListener("click",async()=>{var P;const _=(P=l.querySelector("#qr-sig-file").files)==null?void 0:P[0];if(!_){Q("กรุณาเลือกไฟล์รูปลายเซ็น","warning");return}const T=l.querySelector("#qr-sig-upload");T.disabled=!0,T.textContent="กำลังอัปโหลด...";try{const $=await St(_);await Fe("qrIssuerSignatureUrl",$),e={...e,url:$},a(e),p($),Q("อัปโหลดลายเซ็นแล้ว ✅","success")}catch($){Q("อัปโหลดไม่สำเร็จ: "+($.message??""),"error")}finally{T.disabled=!1,T.textContent="อัปโหลด"}})}async function Xn(e,{teacher:a,cols:l,showCode:p,showSeat:C,showRoom:_,qrReissueDoneMessage:T,qrReissueFee:P="5",qrIssuer:$=null}){var o,t,r,x,S,B;if(!e||e.dataset.loaded)return;e.dataset.loaded="1";const G=!a;e.innerHTML=`
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
    ${G?`
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
  `;let L=[],J="";const u=new Set,A=()=>{const f=e.querySelector("#qr-requests-bulk-bar"),w=e.querySelector("#qr-requests-bulk-count");if(!f||!w)return;u.size>0?(f.classList.remove("hidden"),w.textContent=`เลือกไว้ ${u.size} คน`):f.classList.add("hidden");const h=L.filter(H=>!H.printed_at).map(H=>H.id),W=e.querySelector("#qr-requests-select-all");W&&(W.checked=h.length>0&&h.every(H=>u.has(H)))},K=()=>{const f=e.querySelector("#qr-requests-list");if(!f)return;const w=J.trim().toLowerCase(),h=w?L.filter(te=>{const n=te.students||{};return String(n.full_name||"").toLowerCase().includes(w)||String(n.student_code||"").toLowerCase().includes(w)||String(n.main_room||"").toLowerCase().includes(w)}):L,W=h.filter(te=>!te.printed_at),H=h.filter(te=>te.printed_at);for(const te of[...u])W.some(n=>n.id===te)||u.delete(te);const Z=(te,n)=>{var i,c,z;return`
      <div class="py-3 flex items-start gap-2 ${n?"bg-amber-50/60 -mx-3 px-3 rounded-xl":""}">
        ${n?`<input type="checkbox" data-select-id="${te.id}" class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 flex-shrink-0" ${u.has(te.id)?"checked":""}>`:'<span class="w-3.5 flex-shrink-0"></span>'}
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="font-bold text-gray-700 text-xs truncate">${m(((i=te.students)==null?void 0:i.full_name)||"-")} <span class="font-normal text-gray-400">(${m(((c=te.students)==null?void 0:c.student_code)||"-")})</span></p>
              <p class="text-gray-400 text-[11px] mt-0.5">ห้อง ${m(((z=te.students)==null?void 0:z.main_room)||"-")} · แจ้งเมื่อ ${new Date(te.requested_at).toLocaleString("th-TH",{day:"numeric",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}</p>
            </div>
            ${n?"":'<span class="text-[11px] font-bold text-emerald-600 flex-shrink-0">✅ ทำเสร็จแล้ว</span>'}
          </div>
          <div class="flex flex-wrap gap-1.5 mt-2">
            ${n?`<button type="button" data-action="fulfill" data-id="${te.id}" class="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px]">🖨️ ทำเสร็จแล้ว (พิมพ์บัตร)</button>`:""}
            <button type="button" data-action="toggle-pickup" data-id="${te.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${te.picked_up_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">🤝 ${te.picked_up_at?"มารับแล้ว":"มารับหรือยัง"}</button>
            <button type="button" data-action="toggle-fine" data-id="${te.id}" class="px-2.5 py-1.5 rounded-lg font-bold text-[11px] border ${te.fine_paid_at?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}">💰 ${te.fine_paid_at?"ชำระค่าปรับแล้ว":"ชำระค่าปรับหรือยัง"}</button>
            <button type="button" data-action="delete" data-id="${te.id}" class="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">🗑️ ลบ</button>
          </div>
        </div>
      </div>`};f.innerHTML=h.length?`<div class="divide-y divide-gray-100">${[...W,...H].map(te=>Z(te,!te.printed_at)).join("")}</div>`:`
      <p class="text-xs text-gray-400 text-center py-6">${L.length?"ไม่พบรายการที่ค้นหา":"ยังไม่มีคำขอจากนักเรียน"}</p>
    `,A()},V=async()=>{const f=e.querySelector("#qr-requests-list");f&&(f.innerHTML='<p class="text-xs text-gray-400 text-center py-6">กำลังโหลด...</p>');try{L=await Kt({limit:500}),K()}catch(w){console.error("Failed to load QR reissue requests:",w),f&&(f.innerHTML='<p class="text-xs text-red-400 text-center py-6">โหลดรายการไม่สำเร็จ</p>')}},oe=f=>{var H,Z;const w=L.find(te=>te.id===f);if(!((H=w==null?void 0:w.students)!=null&&H.id)){Q("ไม่พบข้อมูลนักเรียนสำหรับคำขอนี้","warning");return}(Z=document.getElementById("qr-fulfill-modal"))==null||Z.remove();let h=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(h)||h<1)&&(h=4);const W=document.createElement("div");W.id="qr-fulfill-modal",W.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",W.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${m(w.students.full_name||"-")}</p>
          <p class="text-xs text-gray-400 mt-0.5">รหัส ${m(w.students.student_code||"-")} · ห้อง ${m(w.students.main_room||"-")}</p>
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
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${h}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึก</button>
        </div>
      </div>`,document.body.appendChild(W),W.addEventListener("click",te=>{te.target===W&&W.remove()}),W.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>W.remove()),W.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const te=W.querySelector("#qr-fulfill-reason").value,n=Math.max(1,Math.min(40,parseInt(W.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(n));const i=W.querySelector("#qr-fulfill-ok");i.disabled=!0,i.textContent="กำลังดำเนินการ...";try{const c=await _t({requestId:f,studentId:w.students.id,teacherId:(a==null?void 0:a.id)??null,reason:te,feedbackId:w.feedback_id,message:T}),z=Array.from({length:n},(M,y)=>({id:w.students.id,full_name:w.students.full_name,student_code:w.students.student_code,seat_no:null,_roomName:w.students.main_room,_print_copy:y+1}));await _e([{className:"รายบุคคล",countLabel:`${n} ใบ`,students:z,hideHeader:!0}],l,p,C,_,[]),W.remove(),Q("ทำเสร็จแล้ว บันทึกเข้าประวัติ + แจ้งนักเรียนแล้ว ✅","success"),await V(),c&&await it(1)&&await _e([],l,p,C,_,[c],P,$)}catch(c){i.disabled=!1,i.textContent="🖨️ พิมพ์ + บันทึก",Q("บันทึกไม่สำเร็จ: "+(c.message??""),"error")}})},F=()=>{var W;const f=L.filter(H=>{var Z;return u.has(H.id)&&((Z=H.students)==null?void 0:Z.id)});if(!f.length)return;(W=document.getElementById("qr-fulfill-modal"))==null||W.remove();let w=parseInt(localStorage.getItem("qr_print_individual_repeat")||"4");(!Number.isFinite(w)||w<1)&&(w=4);const h=document.createElement("div");h.id="qr-fulfill-modal",h.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",h.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-4">
        <div>
          <p class="font-bold text-gray-800 text-sm">🖨️ ทำบัตร QR Code ให้ ${f.length} คนพร้อมกัน</p>
          <p class="text-xs text-gray-400 mt-0.5">${f.map(H=>m(H.students.full_name||"-")).join(", ")}</p>
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
          <input id="qr-fulfill-repeat" type="number" min="1" max="40" value="${w}" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div class="flex gap-2 pt-1">
          <button id="qr-fulfill-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="qr-fulfill-ok" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">🖨️ พิมพ์ + บันทึกทั้งหมด</button>
        </div>
      </div>`,document.body.appendChild(h),h.addEventListener("click",H=>{H.target===h&&h.remove()}),h.querySelector("#qr-fulfill-cancel").addEventListener("click",()=>h.remove()),h.querySelector("#qr-fulfill-ok").addEventListener("click",async()=>{const H=h.querySelector("#qr-fulfill-reason").value,Z=Math.max(1,Math.min(40,parseInt(h.querySelector("#qr-fulfill-repeat").value)||1));localStorage.setItem("qr_print_individual_repeat",String(Z));const te=h.querySelector("#qr-fulfill-ok");te.disabled=!0,te.textContent="กำลังดำเนินการ...";try{const n=await Promise.all(f.map(c=>_t({requestId:c.id,studentId:c.students.id,teacherId:(a==null?void 0:a.id)??null,reason:H,feedbackId:c.feedback_id,message:T}))),i=f.flatMap(c=>Array.from({length:Z},(z,M)=>({id:c.students.id,full_name:c.students.full_name,student_code:c.students.student_code,seat_no:null,_roomName:c.students.main_room,_print_copy:M+1})));await _e([{className:"คำขอทำบัตรใหม่ (หลายคน)",countLabel:`${f.length} คน · ${i.length} ใบ`,students:i,hideHeader:!0}],l,p,C,_,[]),h.remove(),u.clear(),Q(`ทำเสร็จแล้ว ${f.length} คน บันทึกเข้าประวัติ + แจ้งนักเรียนทุกคนแล้ว ✅`,"success"),await V(),n.length&&await it(n.length)&&await _e([],l,p,C,_,n,P,$)}catch(n){te.disabled=!1,te.textContent="🖨️ พิมพ์ + บันทึกทั้งหมด",Q("บันทึกไม่สำเร็จ: "+(n.message??""),"error")}})},U=async(f,w)=>{const h=L.find(H=>H.id===f),W=h!=null&&h[w]?null:new Date().toISOString();try{await Ks(f,w,W),h[w]=W,K()}catch(H){Q("บันทึกไม่สำเร็จ: "+(H.message??""),"error")}},le=async f=>{if(confirm("ลบคำขอนี้?"))try{await Js(f),L=L.filter(w=>w.id!==f),K(),Q("ลบแล้ว","success")}catch(w){Q("ลบไม่สำเร็จ: "+(w.message??""),"error")}};if((o=e.querySelector("#qr-requests-search"))==null||o.addEventListener("input",f=>{J=f.target.value,K()}),(t=e.querySelector("#qr-requests-list"))==null||t.addEventListener("click",f=>{const w=f.target.closest("[data-action]");if(!w)return;const h=parseInt(w.dataset.id);w.dataset.action==="fulfill"?oe(h):w.dataset.action==="toggle-pickup"?U(h,"picked_up_at"):w.dataset.action==="toggle-fine"?U(h,"fine_paid_at"):w.dataset.action==="delete"&&le(h)}),(r=e.querySelector("#qr-requests-list"))==null||r.addEventListener("change",f=>{const w=f.target.closest("[data-select-id]");if(!w)return;const h=parseInt(w.dataset.selectId);w.checked?u.add(h):u.delete(h),A()}),(x=e.querySelector("#qr-requests-select-all"))==null||x.addEventListener("change",f=>{const w=L.filter(h=>!h.printed_at).map(h=>h.id);f.target.checked?w.forEach(h=>u.add(h)):w.forEach(h=>u.delete(h)),K()}),(S=e.querySelector("#qr-requests-bulk-fulfill"))==null||S.addEventListener("click",()=>F()),V(),!G)return;let j=[];const E=()=>{const f=e.querySelector("#qr-manager-list");f&&(f.innerHTML=j.length?j.map(w=>{var h,W;return`
      <div class="flex items-center justify-between gap-2 py-2 text-xs">
        <span class="font-semibold text-gray-700">${m(((h=w.teachers)==null?void 0:h.full_name)||"-")} <span class="font-normal text-gray-400">(${m(((W=w.teachers)==null?void 0:W.teacher_code)||"-")})</span></span>
        <button type="button" data-revoke="${w.profile_id}" class="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px]">ยกเลิกสิทธิ์</button>
      </div>`}).join(""):`
      <p class="text-xs text-gray-400 text-center py-4">ยังไม่มีครูที่ได้รับสิทธิ์</p>
    `)},v=async()=>{try{j=await Xs(),E()}catch{const f=e.querySelector("#qr-manager-list");f&&(f.innerHTML='<p class="text-xs text-red-400 text-center py-4">โหลดไม่สำเร็จ</p>')}};(B=e.querySelector("#qr-manager-list"))==null||B.addEventListener("click",async f=>{const w=f.target.closest("[data-revoke]");if(w)try{await Gs(w.dataset.revoke),await v(),Q("ยกเลิกสิทธิ์แล้ว","success")}catch(h){Q("ยกเลิกไม่สำเร็จ: "+(h.message??""),"error")}});const Y=e.querySelector("#qr-manager-search"),I=e.querySelector("#qr-manager-search-results");let s=null;Y==null||Y.addEventListener("input",()=>{clearTimeout(s);const f=Y.value.trim();if(!f){I.classList.add("hidden"),I.innerHTML="";return}s=setTimeout(async()=>{try{const w=await zs(f);I.classList.toggle("hidden",!w.length),I.innerHTML=w.map(h=>`
          <button type="button" data-grant="${h.profile_id}" data-name="${m(h.full_name)}" class="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs hover:bg-gray-50 text-left">
            <span class="font-semibold text-gray-700">${m(h.full_name)} <span class="font-normal text-gray-400">(${m(h.teacher_code||"-")})</span></span>
            <span class="text-indigo-600 font-bold">+ มอบสิทธิ์</span>
          </button>`).join("")}catch{}},300)}),I==null||I.addEventListener("click",async f=>{const w=f.target.closest("[data-grant]");if(w)try{await Vs(w.dataset.grant),Y.value="",I.classList.add("hidden"),I.innerHTML="",await v(),Q(`มอบสิทธิ์ให้ ${w.dataset.name} แล้ว ✅`,"success")}catch(h){Q("มอบสิทธิ์ไม่สำเร็จ: "+(h.message??""),"error")}}),v()}const po=Object.freeze(Object.defineProperty({__proto__:null,_openRandomPickerModal:us,openClassPromptGenModal:On,renderAnnouncementsView:Un,renderAttendance:dn,renderAttendanceGrid:mt,renderClassDetail:bt,renderCourseDocLangConfig:Qn,renderGrades:rn,renderGradesGrid:ut,renderLifeSkillScore:cn,renderMyClasses:ye,renderPrayerScore:pn,renderReadingScore:un,renderRequests:ln,renderSchedule:Fn,renderScheduleBuilder:zn,renderScheduleGrid:qe,renderStudentQRPrint:Wn},Symbol.toStringTag,{value:"Module"}));export{us as _,Qn as a,vn as b,hn as c,bt as d,Un as e,ye as f,Fn as g,zn as h,On as i,In as o,qe as r,po as t};
